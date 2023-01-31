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

The theme for this week is #FIXME. Yesterday we talked about #FIXME. Today we'll explore how to expose the eShopOnWeb app so that customers can reach it over the internet using a custom domain name and TLS.

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

Currently, our eShopApplication has three services:

1. The `db` pod is exposed internally via `ClusterIP`
1. The `api` pod is exposed externally via `LoadBalancer`
1. The `web` pod is exposed externally via `LoadBalancer`

When using `LoadBalancer`, AKS provisions an Azure Load Balancer with a public IP address and up to this point, we've been using this to test. No one is going to remember the IP address, so we need to fix that by adding a custom domain name and securing it with a TLS certificate.

Here's what we are going to need:

* Custom domain name added to our externally accessible services (`api` and `web`)
* TLS certificate for the custom domain name
* Routing rule to ensure requests with `/api/` in the URL is routed to the backend REST API
* Routing rule to ensure requests without `/api/` in the URL is routing to the storefront

With AKS, the [Web Application Routing](https://learn.microsoft.com/azure/aks/web-app-routing?WT.mc_id=containers-84290-pauyu&tabs=without-osm) add-on will help us achieve all these goals. This add-on will install a managed open-source NGINX Ingress Controller and also enable integrations with Azure DNS and Azure Key Vault. The integration with Azure DNS is made possible via the `external-dns` controller which is deployed into your AKS cluster and the integration with Azure Key Vault is made possible via the Secret Store CSI driver (which was installed during yesterday's exercise).

:::info

For learning purposes we will use self-signed certificates and a fake custom domain name. In order to browse to the site using the custom domain, you will need to update your host file and add an entry which points the custom domain to the ingress public IP address. This will mimic a DNS lookup on your machine. In a production scenario, you will need to have a real domain delegated to Azure DNS and a valid TLS certificate for your domain.

:::

## Generate TLS certificate and store in Azure Key Vault

We deployed an Azure Key Vault yesterday to store secrets, so we'll use it to store our TLS certificates as well.

Let's create and export a self-signed certificate for our custom domain.

```bash
DNS_NAME=eshoponweb$RANDOM.com
openssl req -new -x509 -nodes -out web-tls.crt -keyout web-tls.key -subj "/CN=${DNS_NAME}" -addext "subjectAltName=DNS:${DNS_NAME}"
openssl pkcs12 -export -in web-tls.crt -inkey web-tls.key -out web-tls.pfx -password pass:
```

Get your Azure Key Vault name and set the value in a variable.

```bash
RESOURCE_GROUP=cnny-week3

AKV_NAME=$(az resource list \
  --resource-group $RESOURCE_GROUP \
  --resource-type Microsoft.KeyVault/vaults \
  --query "[0].name" -o tsv)
```

If needed, grant yourself permissions to `get`, `list`, and `import` certificates.

```bash
MY_USER_NAME=$(az account show --query user.name -o tsv)
MY_USER_OBJECT_ID=$(az ad user show --id $MY_USER_NAME --query id -o tsv)

az keyvault set-policy \
  --name $AKV_NAME \
  --object-id $MY_USER_OBJECT_ID \
  --certificate-permissions get list import
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
DNS_NAME=eshoponweb.$RANDOM.com

DNS_ZONE_ID=$(az network dns zone create \
  --name $DNS_NAME \
  --resource-group $RESOURCE_GROUP \
  --query id \
  --output tsv)
```

## Enable Web Application Routing add-on for AKS

In order for the Web Application Routing add-on to be able to manipulate DNS zone entries in the Azure DNS resource, we'll need to pass in the `--dns-zone-resource-id` parameter.

```bash
az aks enable-addons \
  --name $AKS_NAME \
  --resource-group $RESOURCE_GROUP \
  --addons web_application_routing \
  --dns-zone-resource-id=$DNS_ZONE_ID
```

The Web Application Routing add-on also deploys a new Azure Managed Identity in your AKS cluster's managed resource group. This managed identity is what the `external-dns` controller uses to write entries into Azure DNS. Currently, it does not have permission to do that, so let's grant it permission.

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

Within a few minutes, Azure DNS will be updated with a new `A` record which points to the ingress resource's public IP. Since we have a custom domain now, we can simply browse using this domain name.

:::info

As mentioned above, since this is not a real domain name, we need to modify the host file on our local machine to make it seem like our custom domain resolves to the ingress resource's public IP address.

To get the ingress public IP, run the following.

```bash
kubectl get ingress web -o jsonpath="{.status.loadBalancer.ingress[0].ip}"
```

Next, open your host file and add an entry using the format `<YOUR_PUBLIC_IP> <YOUR_CUSTOM_DOMAIN>`. Below is an example of what it should look like.

```text
20.237.116.224 eshoponweb.11265.com
```

See this [doc](https://linuxize.com/post/how-to-edit-your-hosts-file/) for more info on how to do this.

:::

Since we are using a self-signed certificate, your browser will give you a warning about the site being insecure. This is expected, so go ahead and proceed anyway to load up the page.

Browse around, add items to the cart and check-out using the `demo@microsoft.com` account.

### Broken admin page

Log out then log back in using the `admin@microsoft.com` account and browse to the **Admin** page. Did you notice no products were loaded on the page? This is because we have not configured a route for it. We need to add an additional path in our ingress manifest to tell it to route all traffic with `/api/` in the URL to the `api` service. We can simply add another `backend` to the `paths` array in the YAML manifest.

```yaml
      - backend:
          service:
            name: api
            port:
              number: 80
        path: /api
        pathType: Prefix
```

Let's re-apply our updated manifest.

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

The admin page is built using Blazor and compiled as a WebAssembly application which runs in your browser. When it was initially compiled it embedded the `appsettings.Development.json` file as a resource. This configuration file has an entry for `abiBase` which is what determines the public API endpoints to call for data. Now that we have a domain name, we can update the `appsettings.Development.json` file, rebuild the container, then update the image.

Update the configuration file.

```bash
sed -i "s/localhost:5099/${DNS_NAME}/g" ./src/BlazorAdmin/wwwroot/appsettings.Development.json
```

Rebuild the container.

```bash
ACR_NAME=$(az resource list \
  --resource-group $RESOURCE_GROUP \
  --resource-type Microsoft.ContainerRegistry/registries \
  --query "[0].name" -o tsv)

az acr build \
  --registry $ACR_NAME \
  --image $ACR_NAME.azurecr.io/web:v0.1.0 \
  --file ./src/Web/Dockerfile .
```

Once the container build has completed, update the `web` deployment to deploy the latest.

```bash
kubectl patch deployment web -p '{"spec": {"template": {"spec": {"containers": {"image": "${ACR_NAME}.azurecr.io/web:v0.1.0"}}}}}'
```

Finally, we can browse to our admin page again and confirm it is loading product data 🥳

## Conclusion

The Web Application Routing for AKS aims to secure and streamline the process of making your application available to the public. It natively integrates with other Azure services like Azure DNS and Azure Key Vault and eliminates the need to make DNS entries and can automatically pull in TLS certificates directly from Azure Key Vault and even rotate them as you upload newer certificates.

In the upcoming posts we'll look to further operationalize our deployment and add additional security features so stay tuned!

In the meantime, check out the resources listed below for further reading.

## Resources

* [Web Application Routing (Preview)](https://learn.microsoft.com/azure/aks/web-app-routing?WT.mc_id=containers-84290-pauyu&tabs=without-osm)
* [Web Application Routing on AKS](https://dev.to/azure/web-application-routing-on-aks-58ap)
* [Lab: Web Application Routing with AKS](https://aka.ms/aks-webapp-routing-lab)
