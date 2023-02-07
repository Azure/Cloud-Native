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

The theme for this week is #FIXME. Yesterday we added configuration, secrets, and storage to our app. Today we'll explore how to expose the eShopOnWeb app so that customers can reach it over the internet using a custom domain name and TLS.

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

Currently, our eShopOnWeb app has three Kubernetes services deployed:

1. `db` exposed internally via `ClusterIP`
1. `api` exposed externally via `LoadBalancer`
1. `web` exposed externally via `LoadBalancer`

As mentioned in [my post last week](https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-2/), Services allow applications to communicate with each other using DNS names. Kubernetes has service discovery capabilities built-in that allows Pods to resolve Services simply by using their names.

In the case of our `api` and `web` deployments, they can simply reach the database by calling its name. The service type of `ClusterIP` for the `db` can remain as-is since it only needs to be accessed by the `api` and `web` apps.

On the other hand, `api` and `web` both need to be accessed over the public internet. Currently, these services are using service type `LoadBalancer` which tells AKS to provision an Azure Load Balancer with a public IP address. No one is going to remember the IP addresses, so we need to make the app more accessible by adding a custom domain name and securing it with a TLS certificate.

Here's what we're going to need:

* Custom domain name for our app
* TLS certificate for the custom domain name
* Routing rule to ensure requests with `/api/` in the URL is routed to the backend REST API
* Routing rule to ensure requests without `/api/` in the URL is routing to the web UI

Just like last week, we will use the [Web Application Routing](https://learn.microsoft.com/azure/aks/web-app-routing?WT.mc_id=containers-84290-pauyu&tabs=without-osm) add-on for AKS. But this time, we'll integrate it with Azure DNS and Azure Key Vault to satisfy all of our requirements above.

:::info

At the time of this writing the add-on is still in Public Preview

:::

## Generate TLS certificate and store in Azure Key Vault

We deployed an Azure Key Vault [yesterday](#FIXME) to store secrets. We'll use it again to store a TLS certificate too.

Let's create and export a self-signed certificate for the custom domain.

```bash
DNS_NAME=eshoponweb$RANDOM.com
openssl req -new -x509 -nodes -out web-tls.crt -keyout web-tls.key -subj "/CN=${DNS_NAME}" -addext "subjectAltName=DNS:${DNS_NAME}"
openssl pkcs12 -export -in web-tls.crt -inkey web-tls.key -out web-tls.pfx -password pass:
```

:::info

For learning purposes we'll use a self-signed certificate and a fake custom domain name.

To browse to the site using the fake domain, we'll mimic a DNS lookup by adding an entry to your host file which maps the public IP address assigned to the ingress controller to the custom domain.

In a production scenario, you will need to have a real domain delegated to Azure DNS and a valid TLS certificate for the domain.

:::

Grab your Azure Key Vault name and set the value in a variable for later use.

```bash
RESOURCE_GROUP=cnny-week3

AKV_NAME=$(az resource list \
  --resource-group $RESOURCE_GROUP \
  --resource-type Microsoft.KeyVault/vaults \
  --query "[0].name" -o tsv)
```

Grant yourself permissions to `get`, `list`, and `import` certificates.

```bash
MY_USER_NAME=$(az account show --query user.name -o tsv)
MY_USER_OBJECT_ID=$(az ad user show --id $MY_USER_NAME --query id -o tsv)

az keyvault set-policy \
  --name $AKV_NAME \
  --object-id $MY_USER_OBJECT_ID \
  --certificate-permissions get list import
```

Upload the TLS certificate to Azure Key Vault and grab its certificate URI.

```bash
WEB_TLS_CERT_ID=$(az keyvault certificate import \
  --vault-name $AKV_NAME \
  --name web-tls \
  --file web-tls.pfx \
  --query id \
  --output tsv)
```

## Implement custom DNS with Azure DNS

Create a custom domain for our application and grab its Azure resource id.

```bash
DNS_NAME=eshoponweb$RANDOM.com

DNS_ZONE_ID=$(az network dns zone create \
  --name $DNS_NAME \
  --resource-group $RESOURCE_GROUP \
  --query id \
  --output tsv)
```

## Enable Web Application Routing add-on for AKS

As we enable the Web Application Routing add-on, we'll also pass in the Azure DNS Zone resource id which triggers the installation of the [`external-dns` controller](https://learn.microsoft.com/azure/aks/web-app-routing?WT.mc_id=containers-84290-pauyu&tabs=without-osm#web-application-routing-add-on-overview:~:text=external%2Ddns%20controller%3A%20Watches%20for%20Kubernetes%20Ingress%20resources%20and%20creates%20DNS%20A%20records%20in%20the%20cluster%2Dspecific%20DNS%20zone.%20Note%20that%20this%20is%20only%20deployed%20when%20you%20pass%20in%20the%20%2D%2Ddns%2Dzone%2Dresource%2Did%20argument.) in your Kubernetes cluster. This controller will be able to write Azure DNS zone entries on your behalf as you deploy Ingress manifests.

```bash
AKS_NAME=$(az resource list \
  --resource-group $RESOURCE_GROUP \
  --resource-type Microsoft.ContainerService/managedClusters \
  --query "[0].name" -o tsv)

az aks enable-addons \
  --name $AKS_NAME \
  --resource-group $RESOURCE_GROUP \
  --addons web_application_routing \
  --dns-zone-resource-id=$DNS_ZONE_ID
```

The add-on will also deploy a new Azure Managed Identity which is used by the `external-dns` controller when writing Azure DNS zone entries. Currently, it does not have permission to do that, so let's grant it permission.

```bash
# This is where resources are automatically deployed by AKS
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

The Azure Managed Identity will also be used to retrieve and rotate TLS certificates from Azure Key Vault. So we'll need to grant it permission for that too.

```bash
az keyvault set-policy \
  --name $AKV_NAME \
  --object-id $MANAGED_IDENTTIY_OBJECT_ID \
  --secret-permissions get \
  --certificate-permissions get
```

## Implement Ingress for the web application

Before we create a new Ingress manifest, let's update the existing services to use `ClusterIP` instead of `LoadBalancer`. With an Ingress in place, there is no reason why we need the Service resources to be accessible from outside the cluster. The new Ingress will be the only entrypoint for external users.

We can use the `kubectl patch` command to update the services

```bash
kubectl patch service api -p '{"spec": {"type": "ClusterIP"}}'
kubectl patch service web -p '{"spec": {"type": "ClusterIP"}}'
```

Deploy a new Ingress to place in front of the `web` Service. Notice there is a special `annotations` entry for `kubernetes.azure.com/tls-cert-keyvault-uri` which points back to our self-signed certificate that was uploaded to Azure Key Vault.

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

In our manifest above, we've also configured the Ingress route the traffic to either the `web` or `api` services based on the URL path requested. If the request URL includes `/api`/ then it will send traffic to the `api` backend service. Otherwise, it will send traffic to the `web` service.

Within a few minutes, the `external-dns` controller will add an `A` record to Azure DNS which points to the Ingress resource's public IP. With the custom domain in place, we can simply browse using this domain name.

:::info

As mentioned above, since this is not a real domain name, we need to modify our host file to make it seem like our custom domain is resolving to the Ingress' public IP address.

To get the ingress public IP, run the following:

```bash
# Get the IP
kubectl get ingress web -o jsonpath="{.status.loadBalancer.ingress[0].ip}"

# Get the hostname
kubectl get ingress web -o jsonpath="{.spec.tls[0].hosts[0]}"
```

Next, open your host file and add an entry using the format `<YOUR_PUBLIC_IP> <YOUR_CUSTOM_DOMAIN>`. Below is an example of what it should look like.

```text
20.237.116.224 eshoponweb11265.com
```

See this [doc](https://linuxize.com/post/how-to-edit-your-hosts-file/) for more info on how to do this.

:::

When browsing to the website, you may be presented with a warning about the connection not being private. This is due to the fact that we are using a self-signed certificate. This is expected, so go ahead and proceed anyway to load up the page.

### Why is the Admin page broken?

If you log in using the `admin@microsoft.com` account and browse to the **Admin** page, you'll notice no products are loaded on the page.

This is because the admin page is built using Blazor and compiled as a WebAssembly application that runs in your browser. When the application was compiled, it packed the `appsettings.Development.json` file as an embedded resource. This file contains the base URL for the public API and it currently points to `https://localhost:5099`. Now that we have a domain name, we can update the base URL and point it to our custom domain.

From the root of the `eShopOnWeb` repo, update the configuration file using a [`sed` command](https://www.geeksforgeeks.org/sed-command-in-linux-unix-with-examples/).

```bash
sed -i -e "s/localhost:5099/${DNS_NAME}/g" ./src/BlazorAdmin/wwwroot/appsettings.Development.json
```

Rebuild and push the container to Azure Container Registry.

```bash
# Grab the name of your Azure Container Registry
ACR_NAME=$(az resource list \
  --resource-group $RESOURCE_GROUP \
  --resource-type Microsoft.ContainerRegistry/registries \
  --query "[0].name" -o tsv)

# Invoke a build and publish job
az acr build \
  --registry $ACR_NAME \
  --image $ACR_NAME.azurecr.io/web:v0.1.0 \
  --file ./src/Web/Dockerfile .
```

Once the container build has completed, we can issue a `kubectl patch` command to quickly update the `web` deployment to test our change.

```bash
kubectl patch deployment web -p "$(cat <<EOF
{
  "spec": {
    "template": {
      "spec": {
        "containers": [
          {
            "name": "web",
            "image": "${ACR_NAME}.azurecr.io/web:v0.1.0"
          }
        ]
      }
    }
  }
}
EOF
)"
```

If all went well, you will be able to browse the admin page again and confirm product data is being loaded 🥳

## Conclusion

The Web Application Routing add-on for AKS aims to streamline the process of exposing it to the public using the open-source [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/). With the add-on being managed by Azure, it natively integrates with other Azure services like Azure DNS and eliminates the need to manually create DNS entries. It can also integrate with Azure Key Vault to automatically pull in TLS certificates and rotate them as needed to further reduce operational overhead.

We are one step closer to production and in the upcoming posts we'll further operationalize and secure our deployment, so stay tuned!

In the meantime, check out the resources listed below for further reading.

You can also find manifests with all the changes made in today's post in the [Azure-Samples/eShopOnAKS](https://github.com/Azure-Samples/eShopOnAKS/tree/week3/day3) repository.

## Resources

* [Web Application Routing (Preview)](https://learn.microsoft.com/azure/aks/web-app-routing?WT.mc_id=containers-84290-pauyu&tabs=without-osm)
* [Web Application Routing on AKS](https://dev.to/azure/web-application-routing-on-aks-58ap)
* [Lab: Web Application Routing with AKS](https://aka.ms/aks-webapp-routing-lab)
* [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/)
* [What is Azure DNS?](https://learn.microsoft.com/azure/dns/dns-overview?WT.mc_id=containers-84290-pauyu)
