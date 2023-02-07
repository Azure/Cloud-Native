---
slug: bring-your-app-day-2
title: "3-2. Bringing Your Application to Kubernetes - Adapting Storage, Secrets, and Configuration"
authors: [paul]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [cloudnative, azure, kubernetes, configmaps, persistent-volumes, secrets, azure-files, azure-key-vault, azure-workload-identity, best-practices]
image: https://azure.github.io/Cloud-Native/img/og/30-12.png
description: "Learn how to optimize your Kubernetes environment by implementing ConfigMaps for environment variable management, Azure Files for persistent storage, and Azure Workload Identity plus Azure Key Vault for secure secret management." 
tags: [cloud-native-new-year, azure-kubernetes-service, aks, kubernetes, configmaps, persistent-storage, secrets-management, workload-identity]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-2" />
  <meta name="twitter:title" 
    content="3-2. Bringing Your Application to Kubernetes - Adapting Storage, Secrets, and Configuration" />
  <meta name="twitter:description" 
    content="Learn how to optimize your Kubernetes environment by implementing ConfigMaps for environment variable management, Azure Files for persistent storage, and Azure Workload Identity plus Azure Key Vault for secure secret management." />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/img/og/30-12.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@pauldotyu" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-2" />
</head>

Welcome to `Day 2 of Week 3` of #CloudNativeNewYear!

The theme for this week is Bringing Your Application to Kubernetes. Yesterday we talked about getting an existing application running in Kubernetes with a full pipeline in GitHub Actions. Today we'll evaluate our sample application's configuration, storage, and networking requirements and implement using Kubernetes and Azure resources.

:::tip Ask the Experts Thursday, February 9th at 8 AM PST

[Join us for a live Q&A with Experts from the Azure Kubernetes Service product team!](https://aka.ms/ateonlearn)

:::

:::tip Friday, February 10th at 11 AM PST

Join us for a live demo and let us answer your questions.

[We'll be live on YouTube walking through today's (and the rest of this week's) demos](https://aka.ms/cnny/live-coding).  Join us Friday, February 10th and bring your questions!

:::

## What We'll Cover

* Gather requirements
* Implement environment variables using ConfigMaps
* Implement persistent volumes using Azure Files
* Implement secrets using Azure Key Vault
* Re-package deployments
* Conclusion
* Resources

<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

:::caution 

Before you begin, make sure you've gone through yesterday's [post](../2023-02-06/index.md) to set up your AKS cluster.

:::

## Gather requirements

The eShopOnWeb application is written in .NET 7 and has two major pieces of functionality. The web UI is where customers can browse and shop. The web UI also includes an admin portal for managing the product catalog. This admin portal, is packaged as a WebAssembly application and relies on a separate REST API service. Both the web UI and the REST API connect to the same SQL Server container.

Looking through the source code which can be found [here](https://github.com/Azure-Samples/eShopOnAKS/tree/main/src) we can identify requirements for configs, persistent storage, and secrets.

### Database server

* Need to store the password for the `sa` account as a secure secret
* Need persistent storage volume for data directory
* Need to inject environment variables for SQL Server license type and EULA acceptance

### Web UI and REST API service

* Need to store database connection string as a secure secret
* Need to inject ASP.NET environment variables to override app settings
* Need persistent storage volume for ASP.NET key storage

## Implement environment variables using ConfigMaps

ConfigMaps are relatively straight-forward to create. If you were following along with the examples last week, this should be review 😉

Create a ConfigMap to store database environment variables.

```bash
kubectl apply -f - <<EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: mssql-settings
data:
  MSSQL_PID: Developer
  ACCEPT_EULA: "Y"
EOF
```

Create another ConfigMap to store ASP.NET environment variables.

```bash
kubectl apply -f - <<EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: aspnet-settings
data:
  ASPNETCORE_ENVIRONMENT: Development
EOF
```

## Implement persistent volumes using Azure Files

Similar to last week, we'll take advantage of storage classes built into AKS. For our SQL Server data, we'll use the `azurefile-csi-premium` storage class and leverage an [Azure Files](https://learn.microsoft.com/azure/storage/files/storage-files-introduction?WT.mc_id=containers-84290-pauyu) resource as our PersistentVolume.

Create a PersistentVolumeClaim (PVC) for persisting SQL Server data.

```bash
kubectl apply -f - <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mssql-data
spec:
  accessModes:
  - ReadWriteMany
  storageClassName: azurefile-csi-premium
  resources:
    requests:
      storage: 5Gi
EOF
```

Create another PVC for persisting ASP.NET data.

```bash
kubectl apply -f - <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: aspnet-data
spec:
  accessModes:
  - ReadWriteMany
  storageClassName: azurefile-csi-premium
  resources:
    requests:
      storage: 5Gi
EOF
```

## Implement secrets using Azure Key Vault

It's a well known fact that Kubernetes secretes are not really secrets. They're just base64-encoded values and not secure, especially if malicious users have access to your Kubernetes cluster. 

In a production scenario, you will want to leverage an external vault like [Azure Key Vault]((https://azure.microsoft.com/products/key-vault/)) or [HashiCorp Vault](https://www.vaultproject.io/) to encrypt and store secrets.

With AKS, we can enable the [Secrets Store CSI driver](https://secrets-store-csi-driver.sigs.k8s.io/) add-on which will allow us to leverage Azure Key Vault.

```bash
# Set some variables
RG_NAME=<YOUR_RESOURCE_GROUP_NAME>
AKS_NAME=<YOUR_AKS_CLUSTER_NAME>
ACR_NAME=<YOUR_ACR_NAME>

az aks enable-addons \
  --addons azure-keyvault-secrets-provider \
  --name $AKS_NAME \
  --resource-group $RG_NAME
```

With the add-on enabled, you should see `aks-secrets-store-csi-driver` and `aks-secrets-store-provider-azure` resources installed on each node in your Kubernetes cluster. 

Run the command below to verify.

```bash
kubectl get pods \
  --namespace kube-system \
  --selector 'app in (secrets-store-csi-driver, secrets-store-provider-azure)'
```

The Secrets Store CSI driver allows us to use secret stores via Container Storage Interface (CSI) volumes. This provider offers capabilities such as mounting and syncing between the secure vault and Kubernetes Secrets. On AKS, the [Azure Key Vault Provider for Secrets Store CSI Driver](https://azure.github.io/secrets-store-csi-driver-provider-azure/docs/) enables integration with [Azure Key Vault](https://learn.microsoft.com/azure/key-vault/general/overview?WT.mc_id=containers-84290-pauyu).

You may not have an Azure Key Vault created yet, so let's create one and add some secrets to it.

```bash
AKV_NAME=$(az keyvault create \
  --name akv-eshop$RANDOM \
  --resource-group $RG_NAME \
  --query name -o tsv)

# Database server password
az keyvault secret set \
  --vault-name $AKV_NAME \
  --name mssql-password \
  --value "@someThingComplicated1234"

# Catalog database connection string
az keyvault secret set \
  --vault-name $AKV_NAME \
  --name mssql-connection-catalog \
  --value "Server=db;Database=Microsoft.eShopOnWeb.CatalogDb;User Id=sa;Password=@someThingComplicated1234;TrustServerCertificate=True;"

# Identity database connection string
az keyvault secret set \
  --vault-name $AKV_NAME \
  --name mssql-connection-identity \
  --value "Server=db;Database=Microsoft.eShopOnWeb.Identity;User Id=sa;Password=@someThingComplicated1234;TrustServerCertificate=True;"
```

### Pods authentication using Azure Workload Identity

In order for our Pods to retrieve secrets from Azure Key Vault, we'll need to set up a way for the Pod to authenticate against Azure AD. This can be achieved by implementing the new [Azure Workload Identity](https://learn.microsoft.com/azure/aks/workload-identity-overview?WT.mc_id=containers-84290-pauyu) feature of AKS.

:::info

At the time of this writing, the workload identity feature of AKS is in Preview.

:::

The workload identity feature within AKS allows us to leverage native Kubernetes resources and link a [Kubernetes ServiceAccount](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) to an [Azure Managed Identity](https://learn.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview?WT.mc_id=containers-84290-pauyu) to authenticate against [Azure AD](https://learn.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis?WT.mc_id=containers-84290-pauyu).

For the authentication flow, our Kubernetes cluster will act as an Open ID Connect (OIDC) issuer and will be able issue identity tokens to ServiceAccounts which will be assigned to our Pods.

The Azure Managed Identity will be granted permission to access secrets in our Azure Key Vault and with the ServiceAccount being assigned to our Pods, they will be able to retrieve our secrets.

For more information on how the authentication mechanism all works, check out this [doc](https://azure.github.io/azure-workload-identity/docs/introduction.html#how-it-works).

To implement all this, start by enabling the new preview feature for AKS.

```bash
az feature register \
  --namespace "Microsoft.ContainerService" \
  --name "EnableWorkloadIdentityPreview"
```

:::caution

This can take several minutes to complete.

:::

Check the status and ensure the `state` shows `Regestered` before moving forward.

```bash
az feature show \
  --namespace "Microsoft.ContainerService" \
  --name "EnableWorkloadIdentityPreview"
```

Update your AKS cluster to enable the workload identity feature and enable the OIDC issuer endpoint.

```bash
az aks update \
  --name $AKS_NAME \
  --resource-group $RG_NAME \
  --enable-workload-identity \
  --enable-oidc-issuer 
```

Create an Azure Managed Identity and retrieve its client ID.

```bash
MANAGED_IDENTITY_CLIENT_ID=$(az identity create \
  --name aks-workload-identity \
  --resource-group $RG_NAME \
  --subscription $(az account show --query id -o tsv) \
  --query 'clientId' -o tsv)
```

Create the Kubernetes ServiceAccount.

```bash
# Set namespace (this must align with the namespace that your app is deployed into)
SERVICE_ACCOUNT_NAMESPACE=default

# Set the service account name
SERVICE_ACCOUNT_NAME=eshop-serviceaccount

# Create the service account
kubectl apply -f - <<EOF
apiVersion: v1
kind: ServiceAccount
metadata:
  annotations:
    azure.workload.identity/client-id: ${MANAGED_IDENTITY_CLIENT_ID}
  labels:
    azure.workload.identity/use: "true"
  name: ${SERVICE_ACCOUNT_NAME}
  namespace: ${SERVICE_ACCOUNT_NAMESPACE}
EOF
```

:::info

Note to enable this `ServiceAccount` to work with Azure Workload Identity, you must annotate the resource with `azure.workload.identity/client-id`, and add a label of `azure.workload.identity/use: "true"`

:::

That was a lot... Let's review what we just did.

We have an Azure Managed Identity (object in Azure AD), an OIDC issuer URL (endpoint in our Kubernetes cluster), and a Kubernetes ServiceAccount.

The next step is to "tie" these components together and establish a [Federated Identity Credential](https://learn.microsoft.com/graph/api/resources/federatedidentitycredentials-overview?WT.mc_id=containers-84290-pauyu&view=graph-rest-1.0) so that Azure AD can trust authentication requests from your Kubernetes cluster.

:::info

This identity federation can be established between Azure AD any Kubernetes cluster; not just AKS 🤗

:::

To establish the federated credential, we'll need the OIDC issuer URL, and a subject which points to your Kubernetes ServiceAccount.

```bash
# Get the OIDC issuer URL
OIDC_ISSUER_URL=$(az aks show \
  --name $AKS_NAME \
  --resource-group $RG_NAME \
  --query "oidcIssuerProfile.issuerUrl" -o tsv)

# Set the subject name using this format: `system:serviceaccount:<YOUR_SERVICE_ACCOUNT_NAMESPACE>:<YOUR_SERVICE_ACCOUNT_NAME>`
SUBJECT=system:serviceaccount:$SERVICE_ACCOUNT_NAMESPACE:$SERVICE_ACCOUNT_NAME

az identity federated-credential create \
  --name aks-federated-credential \
  --identity-name aks-workload-identity \
  --resource-group $RG_NAME \
  --issuer $OIDC_ISSUER_URL \
  --subject $SUBJECT
```

With the authentication components set, we can now create a [SecretProviderClass](https://secrets-store-csi-driver.sigs.k8s.io/getting-started/usage.html) which includes details about the Azure Key Vault, the secrets to pull out from the vault, and identity used to access the vault.

```bash
# Get the tenant id for the key vault
TENANT_ID=$(az keyvault show \
  --name $AKV_NAME \
  --resource-group $RG_NAME \
  --query properties.tenantId -o tsv)

# Create the secret provider for azure key vault
kubectl apply -f - <<EOF
apiVersion: secrets-store.csi.x-k8s.io/v1
kind: SecretProviderClass
metadata:
  name: eshop-azure-keyvault
spec:
  provider: azure
  parameters:
    usePodIdentity: "false"
    useVMManagedIdentity: "false"   
    clientID: "${MANAGED_IDENTITY_CLIENT_ID}"
    keyvaultName: "${AKV_NAME}"
    cloudName: ""
    objects:  |
      array:
        - |
          objectName: mssql-password
          objectType: secret
          objectVersion: ""
        - |
          objectName: mssql-connection-catalog
          objectType: secret
          objectVersion: ""
        - |
          objectName: mssql-connection-identity
          objectType: secret
          objectVersion: ""
    tenantId: "${TENANT_ID}"
  secretObjects:
  - secretName: eshop-secrets
    type: Opaque
    data:
      - objectName: mssql-password
        key: mssql-password
      - objectName: mssql-connection-catalog
        key: mssql-connection-catalog
      - objectName: mssql-connection-identity
        key: mssql-connection-identity
EOF
```

Finally, lets grant the Azure Managed Identity permissions to retrieve secrets from the Azure Key Vault.

```bash
az keyvault set-policy \
  --name $AKV_NAME \
  --secret-permissions get \
  --spn $MANAGED_IDENTITY_CLIENT_ID
```

## Re-package deployments

Update your database deployment to load environment variables from our ConfigMap, attach the PVC and SecretProviderClass as volumes, mount the volumes into the Pod, and use the ServiceAccount to retrieve secrets.

Additionally, you may notice the database Pod is set to use `fsGroup:10001` as part of the `securityContext`. This is required as the MSSQL container runs using a non-root account called `mssql` and this account has the proper permissions to read/write data at the `/var/opt/mssql` mount path.

```bash
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: db
  labels:
    app: db
spec:
  replicas: 1
  selector:
    matchLabels:
      app: db
  template:
    metadata:
      labels:
        app: db
    spec:
      securityContext:
        fsGroup: 10001
      serviceAccountName: ${SERVICE_ACCOUNT_NAME}
      containers:
        - name: db
          image: mcr.microsoft.com/mssql/server:2019-latest
          ports:
            - containerPort: 1433
          envFrom:
            - configMapRef:
                name: mssql-settings
          env:
            - name: MSSQL_SA_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: eshop-secrets
                  key: mssql-password
          resources: {}
          volumeMounts:
            - name: mssqldb
              mountPath: /var/opt/mssql
            - name: eshop-secrets
              mountPath: "/mnt/secrets-store"
              readOnly: true
      volumes:
        - name: mssqldb
          persistentVolumeClaim:
            claimName: mssql-data
        - name: eshop-secrets
          csi:
            driver: secrets-store.csi.k8s.io
            readOnly: true
            volumeAttributes:
              secretProviderClass: eshop-azure-keyvault
EOF
```

We'll update the API and Web deployments in a similar way.

```bash
# Set the image tag
IMAGE_TAG=<YOUR_IMAGE_TAG>

# API deployment
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  labels:
    app: api
spec:
  replicas: 1
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      serviceAccount: ${SERVICE_ACCOUNT_NAME}
      containers:
        - name: api
          image: ${ACR_NAME}.azurecr.io/api:${IMAGE_TAG}
          ports:
            - containerPort: 80
          envFrom:
            - configMapRef:
                name: aspnet-settings
          env:
            - name: ConnectionStrings__CatalogConnection
              valueFrom:
                secretKeyRef:
                  name: eshop-secrets
                  key: mssql-connection-catalog
            - name: ConnectionStrings__IdentityConnection
              valueFrom:
                secretKeyRef:
                  name: eshop-secrets
                  key: mssql-connection-identity
          resources: {}
          volumeMounts:
            - name: aspnet
              mountPath: ~/.aspnet/https:/root/.aspnet/https:ro
            - name: eshop-secrets
              mountPath: "/mnt/secrets-store"
              readOnly: true
      volumes:
        - name: aspnet
          persistentVolumeClaim:
            claimName: aspnet-data
        - name: eshop-secrets
          csi:
            driver: secrets-store.csi.k8s.io
            readOnly: true
            volumeAttributes:
                secretProviderClass: eshop-azure-keyvault
EOF

## Web deployment
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
  labels:
    app: web
spec:
  replicas: 1
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      serviceAccount: ${SERVICE_ACCOUNT_NAME}
      containers:
        - name: web
          image: ${ACR_NAME}.azurecr.io/web:${IMAGE_TAG}
          ports:
            - containerPort: 80
          envFrom:
            - configMapRef:
                name: aspnet-settings
          env:
            - name: ConnectionStrings__CatalogConnection
              valueFrom:
                secretKeyRef:
                  name: eshop-secrets
                  key: mssql-connection-catalog
            - name: ConnectionStrings__IdentityConnection
              valueFrom:
                secretKeyRef:
                  name: eshop-secrets
                  key: mssql-connection-identity
          resources: {}
          volumeMounts:
            - name: aspnet
              mountPath: ~/.aspnet/https:/root/.aspnet/https:ro
            - name: eshop-secrets
              mountPath: "/mnt/secrets-store"
              readOnly: true
      volumes:
        - name: aspnet
          persistentVolumeClaim:
            claimName: aspnet-data
        - name: eshop-secrets
          csi:
            driver: secrets-store.csi.k8s.io
            readOnly: true
            volumeAttributes:
                secretProviderClass: eshop-azure-keyvault
EOF
```

If all went well with your deployment updates, you should be able to browse to your website and buy some merchandise again 🥳

```bash
echo "http://$(kubectl get service web -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"
```

## Conclusion

Although there is no visible changes on with our website, we've made a ton of changes on the Kubernetes backend to make this application much more secure and resilient.

We used a combination of Kubernetes resources and AKS-specific features to achieve our goal of securing our secrets and ensuring data is not lost on container crashes and restarts.

To learn more about the components we leveraged here today, checkout the resources and additional tutorials listed below. 

You can also find manifests with all the changes made in today's post in the [Azure-Samples/eShopOnAKS](https://github.com/Azure-Samples/eShopOnAKS/tree/week3/day2) repository.

See you in the next post!

## Resources

:::tip Take the Cloud Skills Challenge!

[Enroll](https://learn.microsoft.com/training/challenges?id=a0e385b9-f970-4182-b2e2-3b4619b6c356) in the Cloud Skills Challenge! 

Don't miss out on this opportunity to level up your skills and stay ahead of the curve in the world of cloud native. 
:::

* [Quickstart: Deploy a SQL Server container with Azure Kubernetes Services (AKS)](https://learn.microsoft.com/sql/linux/quickstart-sql-server-containers-kubernetes?WT.mc_id=containers-84290-pauyu&view=sql-server-ver16)
* [Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/)
* [Azure Key Vault Provider for Secrets Store CSI Driver](https://azure.github.io/secrets-store-csi-driver-provider-azure/docs/)
* [Azure/azure-workload-identity](https://github.com/Azure/azure-workload-identity)
* [Azure AD Workload Identity](https://azure.github.io/azure-workload-identity/docs/introduction.html)
* [Tutorial: Use a workload identity with an application on Azure Kubernetes Service (AKS)](https://learn.microsoft.com/azure/aks/learn/tutorial-kubernetes-workload-identity?WT.mc_id=containers-84290-pauyu)
