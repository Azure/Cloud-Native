---
slug: FIXME-week3-day3
title: "3-3. Migrating Applications to Kubernetes: Opening your Application with Ingress"
authors: [paul]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [cloudnative, azure, kubernetes, configmaps, persistent-volumes, secrets, azure-files, azure-key-vault, azure-workload-identity, best-practices]
image: https://via.placeholder.com/600x200?text=Placeholder
description: "Expose your web application on Azure Kubernetes Service with ease using the Web Application Routing add-on. Benefit from automatic installation of a NGINX Ingress Controller, integration with Azure DNS for custom domains, and secure TLS with Azure Key Vault. Follow our step-by-step guide to enhance the accessibility and security of your web application." 
tags: [cloud-native-new-year, azure-kubernetes-service, aks, kubernetes, ingress, nginx-ingress-controller, azure-dns, azure-key-vault]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/blog/slug-FIXME" />
  <meta name="twitter:title" 
    content="FIXME: Title Of Post" />
  <meta name="twitter:description" 
    content="FIXME: Post Description" />
  <meta name="twitter:image" 
    content="FIXME: Post Image" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/blog/slug-FIXME" />
</head>

Welcome to `Day #FIXME` of #CloudNativeNewYear!

The theme for this week is #FIXME. Yesterday we talked about #FIXME. Today we'll explore how to expose the app so that customers can reach it over the internet.

Up until this point, we've been browsing to the application using a public IP address. No one will remember the IP address so we need to fix that by adding a custom domain name.

## What We'll Cover

* Gather requirements
* Generate TLS certificate and store in Azure Key Vault
* Implement custom DNS using Azure DNS
* Enable Web Application Routing add-on for AKS
* Implement Ingress for the web application
* Conclusion
* Resources

<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Gather requirements

Our eShopApplication has two public endpoints. One is for users to browse and shop which the other endpoint is for the backend admin portal to retrieve catalog data. Currently, both endpoints are exposed using Kubernetes Service resources and have a type of `LoadBalancer` set. This enables the public IP.

Here's what we are going to need:

* Custom domain name added to our site
* TLS certificate for the custom domain name
* Routing to ensure requests with `/api/` in the URL is routed to the backend REST API
* Routing to ensure requests without `/api/` in the URL is routing to the storefront

With AKS, the Web Application Routing add-on will help us achieve all these goals. This add-on will install a managed open-source NGINX Ingress Controller and enable integrations with Azure DNS and Azure Key Vault. The integration with Azure DNS is made possible via `external-dns` controller pods which are deployed into your AKS cluster. The integration with Azure Key Vault is made possible by the `azure-keyvault-secrets-provider` and this add-on was enabled during yesterday's exercise.

:::info

Fo learning purposes we will use self-signed certificates and a fake custom domain name. Before browsing to our site using the custom domain, we'll be update our host file by adding an entry to link our Ingress public IP to the custom domain. In a production scenario, you will need to have a real custom domain delegated to Azure DNS and a valid TLS certificate for the custom domain.

:::

## Generate TLS certificate and store in Azure Key Vault

We deploy an Azure Key Vault yesterday to store secrets, so we'll use it to store our TLS certificates as well.

Let's create a self-signed certificate for our custom domain.

```bash
DNS_NAME=eshoponweb$RANDOM.com
openssl req -new -x509 -nodes -out web-tls.crt -keyout web-tls.key -subj "/CN=${DNS_NAME}" -addext "subjectAltName=DNS:${DNS_NAME}"
```

Export the SSL certificate.

:::danger

When prompted for a password, hit `enter` to skip; otherwise, your TLS configuration will not work.

:::

```bash
openssl pkcs12 -export -in web-tls.crt -inkey web-tls.key -out web-tls.pfx
```

Get your Azure Key Vault name and set the value in a variable.

```bash
RESOURCE_GROUP=cnny-week3

AKV_NAME=$(az resource list \
  --resource-group $RESOURCE_GROUP \
  --resource-type Microsoft.KeyVault/vaults \
  --query "[0].name" -o tsv)
```

If needed, give yourself permissions to `get` and `import` certificates.

```bash
MY_USER_NAME=$(az account show --query user.name -o tsv)
MY_USER_OBJECT_ID=$(az ad user show --id $MY_USER_NAME --query id -o tsv)

az keyvault set-policy \
  --name $AKV_NAME \
  --object-id $MY_USER_OBJECT_ID \
  --certificate-permissions import get
```

Upload the TLS certificate to Azure Key Vault.

```bash
WEB_TLS_CERT_ID=$(az keyvault certificate import \
  --vault-name $AKV_NAME \
  --name web-tls \
  --file web-tls.pfx \
  --query id \
  --output tsv)
```

## Implement custom DNS with Azure DNS

Create a custom domain for our application.

```bash
DNS_NAME=eshoponweb$RANDOM.com

DNS_ZONE_ID=$(az network dns zone create \
  --name $DNS_NAME \
  --resource-group $RESOURCE_GROUP \
  --query id \
  --output tsv)
```

## Enable Web Application Routing add-on for AKS

In order for the Web Application Routing add-on to be able to rotate TLS certificates and manipulate DNS zone entries in the Azure DNS resource, we need to pass in some additional parameters: `--enable-secret-rotation` and `--dns-zone-resource-id`.

```bash
az aks enable-addons \
  --name $AKS_NAME \
  --resource-group $RESOURCE_GROUP \
  --addons web_application_routing \
  --enable-secret-rotation \
  --dns-zone-resource-id=$DNS_ZONE_ID
```

The Web Application Routing add-on also deploys Azure Managed Identity in your AKS cluster's managed resource group. This managed identity is what the `external-dns` controller uses to write entries into Azure DNS. Currently, it does not have permission to do that so let's give it permission.

```bash
# This is where resources are automatically deployed into by AKS
NODE_RESOURCE_GROUP=$(az aks show \
  --name $AKS_NAME \
  --resource-group $RESOURCE_GROUP \
  --query nodeResourceGroup -o tsv)

# This is the managed identity created by the Web Application Routing add-on
MANAGED_IDENTTIY_OBJECT_ID=$(az resource show \
  --name webapprouting-${AKS_NAME} \
  --resource-group $NODE_RESOURCE_GROUP \
  --resource-type Microsoft.ManagedIdentity/userAssignedIdentities \
  --query properties.principalId \
  --output tsv)

# Grant the managed identity permissions to write DNS entries
az role assignment create \
  --role "DNS Zone Contributor" \
  --assignee $MANAGED_IDENTTIY_OBJECT_ID \
  --scope $DNS_ZONE_ID
```

## Implement Ingress for the web application

Before we create a new Ingress manifest, let's update the existing services to use `ClusterIP` instead of `LoadBalancer`. With an Ingress in place, there is no reason why we need the Service resources to be accessible from outside the cluster. The new Ingress will be the only entrypoint for external users.

We can use the `kubectl patch` command to update the services

```bash
kubectl patch service api -p '{"spec": {"type": "ClusterIP"}}'
kubectl patch service web -p '{"spec": {"type": "ClusterIP"}}'
```

Deploy a new Ingress for the web UI.

```bash
kubectl apply -f - <<EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    kubernetes.azure.com/tls-cert-keyvault-uri: ${WEB_TLS_CERT_ID}
  name: web
spec:
  ingressClassName: webapprouting.kubernetes.azure.com
  rules:
  - host: ${DNS_NAME}
    http:
      paths:
      - backend:
          service:
            name: web
            port:
              number: 80
        path: /
        pathType: Prefix
  tls:
  - hosts:
    - ${DNS_NAME}
    secretName: web-tls
EOF
```

Within a few minutes, Azure DNS will be updated and you'll find that the Ingress is updated with a new public IP. Since we have a custom domain now, we can simply browse to that.

:::info

Since this is not a real domain name, we need to modify a file on our local machine to make it seem like our custom domain resolves to the Ingress' public IP address.

To get the Ingress public IP, run this.

```bash
kubectl get ingress web -o jsonpath="{.status.loadBalancer.ingress[0].ip}"
```

Open your host file and add an entry using the format `<YOUR_PUBLIC_IP> <YOUR_CUSTOM_DOMAIN>`. Below is an example of what it looks like.

```text
20.237.116.224 eshoponweb11265.com
```

See this [doc](https://linuxize.com/post/how-to-edit-your-hosts-file/) for more info on how to do this.

:::

Since we are using a self-signed certificate, your browser will give you a warning about the site not being secure. Go ahead and proceed anyway to load up the page.

Browse around, add items to the cart and check-out using the `demo@microsoft.com` account.

### Broken admin pages

Log out then log back in using the `admin@microsoft.com` account and browse to the **Admin** page. Did you notice no products were loaded on the page? This is because we have not configured a route for it. We need to add an additional path in our Ingress manifest to tell it to route all traffic with `/api/` in the URL to the `api` service.

```yaml
      - backend:
          service:
            name: api
            port:
              number: 80
        path: /api
        pathType: Prefix
```

Let's re-apply our manifest and re-test the admin portal.

```bash
kubectl apply -f - <<EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    kubernetes.azure.com/tls-cert-keyvault-uri: ${WEB_TLS_CERT_ID}
  name: web
spec:
  ingressClassName: webapprouting.kubernetes.azure.com
  rules:
  - host: ${DNS_NAME}
    http:
      paths:
      - backend:
          service:
            name: web
            port:
              number: 80
        path: /
        pathType: Prefix
      - backend:
          service:
            name: api
            port:
              number: 80
        path: /api
        pathType: Prefix
  tls:
  - hosts:
    - ${DNS_NAME}
    secretName: web-tls
EOF

```

## Conclusion

## Resources

* [Web Application Routing (Preview)](https://learn.microsoft.com/azure/aks/web-app-routing?WT.mc_id=containers-84290-pauyu&tabs=without-osm)
* [Lab: Web Application Routing with AKS](https://aka.ms/aks-webapp-routing-lab)

