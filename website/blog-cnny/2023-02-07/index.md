---
slug: FIXME-week3-day2
title: "3-2. Migrating Applications to Kubernetes: Adapting Storage, Networking, and Configuration"
authors: [paul]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [cloudnative, azure, kubernetes, configmaps, persistent-volumes, secrets, azure-files, azure-key-vault, azure-workload-identity, best-practices]
image: https://via.placeholder.com/600x200?text=Placeholder
description: "Learn how to optimize your Kubernetes environment by implementing ConfigMaps for environment variable management, Azure Files for persistent storage, and Azure Workload Identity plus Azure Key Vault for secure secret management." 
tags: [cloud-native-new-year, azure-kubernetes-service, aks, kubernetes, configmaps, persistent-storage, secrets-management, workload-identity]
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

The theme for this week is #FIXME. Yesterday we talked about #FIXME. Today we'll evaluate our sample application's configuration, storage, and networking requirements and implement using Kubernetes and Azure resources.

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

## Gather requirements

The eShopOnWeb application has a fairly simple architecture. The web UI is written in .NET 7 and has two components. One is the front end where customers can browse and shop while the other is for administrators to maintain the product catalog. The data that powers both the web UI components is sourced from a SQL Server container. This database server consists of two databases; one for the product catalog, and another for the user identities.

Let's gather some requirements for configs, persistent storage, and secrets that we'll need to implement in our Kubernetes cluster.

### Database server

* Need to store the password for the `sa` account as a secure secret
* Need persistent storage volume for data directory
* Need to inject environment variables for SQL Server license type EULA acceptance

### Web UI and backend REST API service

* Need to store database connection strings in secure secrets
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

Create a ConfigMap to store ASP.NET environment variables.

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

Similar to last week's exercise, we will take advantage of storage classes built into AKS. For this week's scenario, the `azurefile-csi-premium` storage class will be used to create an Azure Files resource as our backend storage.

Create a PVC for the database server.

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

Create a PVC for the ASP.NET applications.

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

It's a well known fact that Kubernetes secretes are just base64-encoded values and not secure especially if malicious users have access to your Kubernetes cluster. In a production scenario, you will want to leverage an external vault like [Azure Key Vault]((https://azure.microsoft.com/products/key-vault/)) or [HashiCorp Vault](https://www.vaultproject.io/) to encrypt and store secrets.

With AKS, we can enable the [Secrets Store CSI driver](https://secrets-store-csi-driver.sigs.k8s.io/) add-on which will allow us to leverage Azure Key Vault.

```bash
az aks enable-addons \
  --addons azure-keyvault-secrets-provider \
  --name <YOUR_AKS_CLUSTER_NAME> \
  --resource-group <YOUR_RESOURCE_GROUP_NAME>
```

With the add-on enabled, you should see `aks-secrets-store-csi-driver` and `aks-secrets-store-provider-azure` resources installed on each node in your Kubernetes cluster. Run the command below to verify.

```bash
kubectl get pods \
  --namespace kube-system \
  --selector 'app in (secrets-store-csi-driver, secrets-store-provider-azure)'
```

The Secrets Store CSI driver enable the usage of secret stores via CSI (Container Storage Interface) volumes, and the [Azure Key Vault Provider for Secrets Store CSI Driver](https://azure.github.io/secrets-store-csi-driver-provider-azure/docs/) enables integration with Azure Key Vault. This provider offers capabilities such as mounting and syncing between the secure vault and Kubernetes Secrets.

You may not have an Azure Key Vault created yet, so let's create one and add some secrets to it.

```bash
AKV_NAME=$(az keyvault create -n akv-eshop$RANDOM -g rg-eshop --query name -o tsv)

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

> 📝 NOTE: At the time of this writing, the workload identity feature of AKS is in Preview.

The workload identity feature within AKS allows us to leverage native Kubernetes resources and link a [Kubernetes ServiceAccount](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) to an [Azure Managed Identity](https://learn.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview?WT.mc_id=containers-84290-pauyu) to authenticate against Azure AD.

For the authentication flow, our Kubernetes cluster will act as an Open ID Connect (OIDC) issuer and will be able issue identity tokens to ServiceAccounts which will be assigned to our Pods.

The Azure Managed Identity will be granted permission to access secrets in our Azure Key Vault. With the ServiceAccount being assigned to our Pods, they will be able to retrieve our secrets.

For more information on how the authentication mechanism all works, check out this [doc](https://azure.github.io/azure-workload-identity/docs/introduction.html#how-it-works).

To implement all this, start by enabling the new preview feature for AKS.

```bash
az feature register \
  --namespace "Microsoft.ContainerService" \
  --name "EnableWorkloadIdentityPreview"
```

> 📝 NOTE: This can take several minutes to complete.

Check the status and ensure the `state` shows `Regestered` before moving forward.

```bash
az feature show \
  --namespace "Microsoft.ContainerService" \
  --name "EnableWorkloadIdentityPreview"
```

Update your AKS cluster to enable the workload identity feature and enable the OIDC issuer endpoint.

```bash
az aks update \
  --name aks-eshop \
  --resource-group rg-eshop \
  --enable-workload-identity \
  --enable-oidc-issuer 
```

Create an Azure Managed Identity and retrieve its clientId.

```bash
MANAGED_IDENTITY_CLIENT_ID=$(az identity create \
  --name mid-eshop \
  --resource-group rg-eshop \
  --subscription $(az account show --query id -o tsv) \
  --query 'clientId' -o tsv)
```

Create the Kubernetes ServiceAccount.

```bash
# Set namespace (this must align with the namespace that your app is deployed into)
SERVICE_ACCOUNT_NAMESPACE=default

# Set the service account name
SERVICE_ACCOUNT_NAME=eshop-account

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

We just deployed and enabled a bunch of stuff. Let's review what we just did.

We have an Azure Managed Identity (which is an object in Azure AD), an OIDC issuer endpoint (which is in our Kubernetes cluster), and a Kubernetes ServiceAccount. 

The next step is to tie these three components together and establish a [Federated Identity Credential](https://learn.microsoft.com/graph/api/resources/federatedidentitycredentials-overview?WT.mc_id=containers-84290-pauyu&view=graph-rest-1.0) so that Azure AD can trust authentication requests from your Kubernetes cluster.

> 📝 NOTE: This identity federation can be established between Azure AD any Kubernetes cluster; not just AKS 🤗

To establish the federated credential, we'll need the OIDC issuer URL, and a subject which points to your Kubernetes ServiceAccount.

```bash
# Get the OIDC issuer URL
OIDC_ISSUER_URL=$(az aks show -n aks-eshop -g rg-eshop --query "oidcIssuerProfile.issuerUrl" -o tsv)

# Set the subject name using this format: `system:serviceaccount:<YOUR_SERVICE_ACCOUNT_NAMESPACE>:<YOUR_SERVICE_ACCOUNT_NAME>`
SUBJECT=system:serviceaccount:$SERVICE_ACCOUNT_NAMESPACE:$SERVICE_ACCOUNT_NAME

az identity federated-credential create \
  --name fc-eshop \
  --identity-name mid-eshop \
  --resource-group rg-eshop \
  --issuer $OIDC_ISSUER_URL \
  --subject $SUBJECT
```

With the authentication components set, we can now create a SecretProviderClass which includes details about the Azure Key Vault, the secrets to pull out from the vault, and identity used to access the vault.

```bash
# Get the tenant id for the key vault
TENANT_ID=$(az keyvault show -n $AKV_NAME -g rg-eshop --query properties.tenantId -o tsv)

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

Update your database deployment to load environment variables from our ConfigMap, attach the PVC and SecretProviderClass as volumes, mount the volumes into the Pod, and use the ServiceAccount called `eshop-account` to retrieve secrets.

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
      serviceAccountName: eshop-account
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
      serviceAccount: eshop-account
      containers:
        - name: api
          image: ${ACR_NAME}.azurecr.io/api:v0.1.0
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
      serviceAccount: eshop-account
      containers:
        - name: web
          image: ${ACR_NAME}.azurecr.io/web:v0.1.0
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

We used a combination of Kubernetes resources and AKS-specific features to achieve our goal of securing our secrets and ensuring data is not lost on crashes and container restarts. With just a few more components that we'll add later this week, our eShopOnWeb app will be ready for primetime 🚀

To learn more about the components we leveraged here today, checkout the resources and additional tutorials listed below.

See you in the next post!

## Resources

* [Quickstart: Deploy a SQL Server container with Azure Kubernetes Services (AKS)](https://learn.microsoft.com/sql/linux/quickstart-sql-server-containers-kubernetes?WT.mc_id=containers-84290-pauyu&view=sql-server-ver16)
* [Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/)
* [Azure Key Vault Provider for Secrets Store CSI Driver](https://azure.github.io/secrets-store-csi-driver-provider-azure/docs/)
* [Azure/azure-workload-identity](https://github.com/Azure/azure-workload-identity)
* [Azure AD Workload Identity](https://azure.github.io/azure-workload-identity/docs/introduction.html)
* [Tutorial: Use a workload identity with an application on Azure Kubernetes Service (AKS)](https://learn.microsoft.com/azure/aks/learn/tutorial-kubernetes-workload-identity?WT.mc_id=containers-84290-pauyu)
