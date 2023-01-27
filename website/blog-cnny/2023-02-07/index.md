---
slug: FIXME-eshoponweb-storage-configs-and-secrets
title: FIXME - eShopOnWeb Storage, Configs, and Secrets
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

* Identify application requirements
* Implement ConfigMaps
* Implement Persistent Volumes using Azure Files
* Implement Secrets using Azure Key Vault
* Redeploy the application
* Summary
* Resources

<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Identify application requirements

The eShopOnWeb application has a fairly simple architecture. The web UI is where customers will browse and shop; this is built using .NET7. The web UI also has administrative capabilities which built using Blazor Web Assembly, also written in .NET7. The administrative UI is broken up a bit in that it retrieves data via a REST API service. The data that powers both the web UI components is sourced from a MSSQL database server. This database server consists of two databases; one for the product catalog, and another for the user identities for logging into the web UI.

Let's gather a list some configs, persistent storage, and secrets we'll need to implement in our Kubernetes cluster.

### Database server

* Password for the `sa` account
* Persistent storage for data directory
* Environment variables for setting the license type to `Developer` and accepting the end-user license agreement

### Web UI and backend REST API service

* Database connection string (one for each database)
* ASP.NET environment variables and app settings
* Persistent volume for ASP.NET key storage

## Implement ConfigMaps

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

## Implement Persistent Volumes using Azure Files

Similar to last week's exercise, we will take advantage of storage classes built into AKS. We will use the `azurefile-csi-premium` storage class which will create an Azure Files resource as our backend storage.

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

## Implement Secrets using Azure Key Vault

Last week, we saw how Kubernetes has a built in Secrets resource that allows us to store secrets. However, it's a well known fact that these values are just base64-encoded values so they are not really secure if one has access to your Kubernetes cluster. In a production scenario, you will want to leverage a third party secrets vault like Azure Key Vault or HashiCorp Vault to encrypt and store secrets.

Using the [Secrets Store CSI driver](https://secrets-store-csi-driver.sigs.k8s.io/) that can be enabled on your AKS cluster, we will leverage [Azure Key Vault](https://azure.microsoft.com/products/key-vault/).

Enable the `azure-keyvault-secrets-provider` add-on in your AKS cluster.

```bash
az aks enable-addons \
  --addons azure-keyvault-secrets-provider \
  --name <YOUR_AKS_CLUSTER_NAME> \
  --resource-group <YOUR_RESOURCE_GROUP_NAME>
```

With the add-on enabled, you should see a "driver" and "provider" installed on each node in your Kubernetes cluster.

```bash
kubectl get pods -n kube-system -l 'app in (secrets-store-csi-driver, secrets-store-provider-azure)'
```

These Secrets Store CSI driver enable the usage of secret stores via CSI (Container Storage Interface) volumes, and the [Azure Key Vault Provider for Secrets Store CSI Driver](https://azure.github.io/secrets-store-csi-driver-provider-azure/docs/) enables integration with Azure Key Vault. This provider offers capabilities such as mounting and syncing keys between the secure vault and Kubernetes Secrets just to name a few.

You may not have an Azure Key Vault created yet, so let's create one and some secrets to it.

```bash
AKV_NAME=$(az keyvault create -n akv-eshop$RANDOM -g rg-eshop --query name -o tsv)

# database server password
az keyvault secret set --vault-name $AKV_NAME -n mssql-password --value "@someThingComplicated1234"

# catalog database connection string
az keyvault secret set --vault-name $AKV_NAME -n mssql-connection-catalog --value "Server=db;Database=Microsoft.eShopOnWeb.CatalogDb;User Id=sa;Password=@someThingComplicated1234;TrustServerCertificate=True;"

# identity database connection string
az keyvault secret set --vault-name $AKV_NAME -n mssql-connection-identity --value "Server=db;Database=Microsoft.eShopOnWeb.Identity;User Id=sa;Password=@someThingComplicated1234;TrustServerCertificate=True;"
```

### Authenticate using Azure Workload Identity

In order for our Pods to retrieve secrets from Azure Key Vault, we'll need to set up a way for the Pod to authenticate against Azure AD. We'll do this by implementing the new [Workload Identity](https://learn.microsoft.com/azure/aks/workload-identity-overview?WT.mc_id=containers-84290-pauyu) feature of AKS, which at the time of this writing is in Public Preview.

With the Workload Identity feature, we can leverage native Kubernetes constructs and link a resource to an identity that Azure AD knows. To accomplish this, the Kubernetes cluster can act as an Open ID Connect (OIDC) issuer and issue authentication tokens to Kubernetes ServiceAccounts, which is then linked to an [Azure Managed Identity](https://learn.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview?WT.mc_id=containers-84290-pauyu). This managed identity will need to be granted permission to access secrets in the key vault and the Kubernetes ServiceAccount will be assigned to the Pod. For more information on how the authentication mechanism all works, check out this [doc](https://azure.github.io/azure-workload-identity/docs/introduction.html#how-it-works).

We have a lot of ground to cover here.

Start by enabling the new preview feature for AKS.

```bash
az feature register --namespace "Microsoft.ContainerService" --name "EnableWorkloadIdentityPreview"
```

> NOTE: This can take several minutes to complete.

Check the status and ensure the `state` is `Regestered` before moving forward.

```bash
az feature show --namespace "Microsoft.ContainerService" --name "EnableWorkloadIdentityPreview"
```

Update your AKS cluster to enable the workload identity feature and enable the OIDC endpoint.

```bash
az aks update \
  --name aks-eshop \
  --resource-group rg-eshop \
  --enable-workload-identity \
  --enable-oidc-issuer 
```

Create an Azure User-Assigned Managed Identity.

```bash
USER_ASSIGNED_CLIENT_ID=$(az identity create \
  --name mid-eshop \
  --resource-group rg-eshop \
  --subscription $(az account show --query id -o tsv) \
  --query 'clientId' -o tsv)
```

Create the Kubernetes ServiceAccount which will be assigned to our Pods (to authenticate against Azure Key Vault).

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
    azure.workload.identity/client-id: ${USER_ASSIGNED_CLIENT_ID}
  labels:
    azure.workload.identity/use: "true"
  name: ${SERVICE_ACCOUNT_NAME}
  namespace: ${SERVICE_ACCOUNT_NAMESPACE}
EOF
```

At the moment, we have an Azure Managed Identity (which is an object in Azure AD), an OIDC issuer endpoint (which is in our Kubernetes cluster), and a Kubernetes ServiceAccount. We need to tie these components together and establish a [Federated Identity Credential](https://learn.microsoft.com/graph/api/resources/federatedidentitycredentials-overview?WT.mc_id=containers-84290-pauyu&view=graph-rest-1.0) so that Azure AD will trust authentication requests your Kubernetes cluster.

> 📝 NOTE: This federation can be between Azure AD any Kubernetes cluster; not just AKS.

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
    clientID: "${USER_ASSIGNED_CLIENT_ID}"
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

As mentioned above, the Azure Managed Identity is the Azure resource that is used to retrieve secrets from the Azure Key Vault, so we need to grant it permission.

```bash
az keyvault set-policy \
  --name $AKV_NAME \
  --secret-permissions get \
  --spn $USER_ASSIGNED_CLIENT_ID
```

## Re-deploy the application

Now, let's implement the config maps and secrets for each of our deployments

Update your `deployment-db.yaml` manifest to load environment variables from our ConfigMap, attache PVC and SecretProviderClass as volumes, and mount the volumes into the Pod. It is also important to note that the Pod will now use the ServiceAccount called `eshop-account` since it will need to be able to authenticate to retrieve secrets from the Azure Key Vault (this is part of the mounting process).

Additionally, you may notice the Pod is set to use `fsGroup:10001` as part of the `securityContext`. This is required as the MSSQL container runs using a non-root account and this account requires permissions to read/write data at the `/var/opt/mssql` mount path.

`deployment-db.yaml`

```yaml
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
```

We'll update the `deployment-api.yaml` and `deployment-web.yaml` manifests in a similar way as we did for our database deployment.

`deployment-api.yaml`

```bash
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
          image: <YOUR_ACR_NAME>.azurecr.io/api:v0.1.0
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
            - name: eshop-secrets
              mountPath: "/mnt/secrets-store"
              readOnly: true
      volumes:
        - name: eshop-secrets
          csi:
            driver: secrets-store.csi.k8s.io
            readOnly: true
            volumeAttributes:
                secretProviderClass: eshop-azure-keyvault
```

`deployment-web.yaml`

```bash
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
          image: <YOUR_ACR_NAME>.azurecr.io/web:v0.1.0
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
            - name: eshop-secrets
              mountPath: "/mnt/secrets-store"
              readOnly: true
      volumes:
        - name: eshop-secrets
          csi:
            driver: secrets-store.csi.k8s.io
            readOnly: true
            volumeAttributes:
                secretProviderClass: eshop-azure-keyvault
```

With the manifests updated, let's deploy and test.

```bash
kubectl apply -f ./manifests/deployment-db.yaml -f ./manifests/deployment-api.yaml -f ./manifests/deployment-web.yaml
```

If all went well, you should be able to browse to your web UI and buy some stuff.

## Summary

Our website looks just as it did yesterday. Although there is no visible changes on the front end, we've made a ton of changes on the Kubernetes backend to make this application much more secure and resilient 🚀

We used a combination of Kubernetes resources and mixed in some AKS specific features to achieve our goal of securing our secrets and ensuring data is not lost on crashes and container restarts. With just a few more components that we'll add later this week, our eShopOnWeb app will be ready for business.

To learn more about the components we leveraged here today, checkout the resources and additional tutorials listed in the Resources section below.

See you in the next post!

## Resources

* [Quickstart: Deploy a SQL Server container with Azure Kubernetes Services (AKS)](https://learn.microsoft.com/sql/linux/quickstart-sql-server-containers-kubernetes?WT.mc_id=containers-84290-pauyu&view=sql-server-ver16)
* [Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/)
* [Azure Key Vault Provider for Secrets Store CSI Driver](https://azure.github.io/secrets-store-csi-driver-provider-azure/docs/)
* [Azure/azure-workload-identity](https://github.com/Azure/azure-workload-identity)
* [Azure AD Workload Identity](https://azure.github.io/azure-workload-identity/docs/introduction.html)
* [Tutorial: Use a workload identity with an application on Azure Kubernetes Service (AKS)](https://learn.microsoft.com/azure/aks/learn/tutorial-kubernetes-workload-identity?WT.mc_id=containers-84290-pauyu)
