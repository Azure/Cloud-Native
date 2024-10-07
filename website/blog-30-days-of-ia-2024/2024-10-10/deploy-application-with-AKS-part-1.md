---
date: 2024-10-10T09:00
slug: deploy-application-with-AKS-part-1
title: "1.5a Deploy Application with AKS Part 1"
authors: [30days]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 30-days-2024, 30-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In this blog, we will set up APIM, Key Vault, and Managed Identity for the Middleware and Back-end services. We will also include the necessary Azure CLI commands and create a Kubernetes pod to integrate with Key Vault using Managed Identity." 
tags: [Build-Intelligent-Apps, 30-days-of-IA-2024, learn-live, demo-bytes, community-gallery, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/30-days-of-ia-2024/deploy-application-with-AKS-part-1"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="**Build Intelligent Apps | AI Apps on Azure"/>
  <meta property="og:description" content="In this blog, we will set up APIM, Key Vault, and Managed Identity for the Middleware and Back-end services. We will also include the necessary Azure CLI commands and create a Kubernetes pod to integrate with Key Vault using Managed Identity."/>
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/>
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-AKS-part-1" />
  <meta name="twitter:title" content="**Build Intelligent Apps | AI Apps on Azure" />
  <meta name="twitter:description" content="In this blog, we will set up APIM, Key Vault, and Managed Identity for the Middleware and Back-end services. We will also include the necessary Azure CLI commands and create a Kubernetes pod to integrate with Key Vault using Managed Identity." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@devanshidiaries" />
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-AKS-part-1" />
</head>

<!-- End METADATA -->

## Part 1: Configuring APIM, Key Vault, and Managed Identity for Middleware and Back-end Services

In this blog, we will set up **APIM**, **Key Vault**, and **Managed Identity** for the Middleware and Back-end services. We will refer to Blog 1.4a for the APIM configuration, as it remains consistent. We will also include the necessary Azure CLI commands and create a Kubernetes pod to integrate with Key Vault using Managed Identity.

## What we cover:

1. Review of APIM Configuration
2. Setting Up Key Vault and Managed Identity
3. Creating Kubernetes Pod with Managed Identity Integration
4. Verifying Configurations  

## Prerequisites

Before proceeding, ensure that you have completed the environment setup described in **Blog 2.b**, where we created the AKS cluster and Azure Container Registry (ACR).

## Step 1: Review of APIM Configuration

The APIM configuration for the Middleware and Back-end services remains the same as covered in Blog 1.4a. Please refer to **Blog 1.4a** for detailed steps on setting up APIM and configuring CORS policies, header checks, and other necessary configurations.

:::info
Join the next snackable AI Demo Bytes to explore how to [ apply auto-scaling and load testing to your AI applications](https://aka.ms/demo-bytes/ep6?ocid=biafy25h1_30daysofia_webpage_azuremktg).
:::

## Setting Up Key Vault and Managed Identity

In this step, we will set up Azure Key Vault and configure Managed Identity to allow secure access to the secrets stored in Key Vault.

1. **Create a Key Vault:**
    - Use the Azure CLI to create a Key Vault if it does not already exist:

```
az aks create \
  --resource-group <RESOURCE_GROUP_NAME> \
  --name <AKS_NAME> \
  --node-count 1 \
  --enable-addons monitoring \
  --enable-oidc-issuer \
  --enable-workload-identity \
  --generate-ssh-keys
```

2. Enable Managed Identity in AKS:
    - Follow the Azure documentation to enable Managed Identity for the AKS cluster using workload identity: [Workload Identity for AKS](https://learn.microsoft.com/azure/aks/workload-identity-deploy-cluster?ocid=biafy25h1_30daysofia_webpage_azuremktg).
    - Run the following commands to integrate workload identity:

```
# Retrieve the OIDC issuer URL
export AKS_OIDC_ISSUER="$(az aks show --name <AKS_NAME> \
  --resource-group <RESOURCE_GROUP_NAME> \
  --query "oidcIssuerProfile.issuerUrl" \
  --output tsv)"

# Create a Managed Identity for the AKS cluster
az identity create \
  --name <USER_ASSIGNED_IDENTITY_NAME> \
  --resource-group <RESOURCE_GROUP_NAME> \
  --location <LOCATION> \
  --subscription "$(az account show --query id --output tsv)"

export USER_ASSIGNED_CLIENT_ID="$(az identity show \
  --resource-group <RESOURCE_GROUP_NAME> \
  --name <USER_ASSIGNED_IDENTITY_NAME> \
  --query 'clientId' \
  --output tsv)"

# Create a Kubernetes service account
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: ServiceAccount
metadata:
  annotations:
    azure.workload.identity/client-id: "${USER_ASSIGNED_CLIENT_ID}"
  name: workload-identity-sa
  namespace: default
EOF

# Create the federated identity credential
az identity federated-credential create \
  --name ${FEDERATED_IDENTITY_CREDENTIAL_NAME} \
  --identity-name "${USER_ASSIGNED_IDENTITY_NAME}" \
  --resource-group "${RESOURCE_GROUP}" \
  --issuer "${AKS_OIDC_ISSUER}" \
  --subject system:serviceaccount:"${SERVICE_ACCOUNT_NAMESPACE}":"${SERVICE_ACCOUNT_NAME}" \
  --audience api://AzureADTokenExchange

# Deploy your application
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: sample-workload-identity
  namespace: ${SERVICE_ACCOUNT_NAMESPACE}
  labels:
    azure.workload.identity/use: "true"  # Required. Only pods with this label can use workload identity.
spec:
  serviceAccountName: ${SERVICE_ACCOUNT_NAME}
  containers:
    - image: <image>
      name: <containerName>
EOF
```

![screenshot of Azure CLI commands for creating and configuring managed identities for AKS clusters](../../static/img/30-days-of-ia-2024/blogs/2024-10-10/1-5a-1.png)

![screenshot of Azure CLI commands exporting client IDs for user-assigned managed identitie](../../static/img/30-days-of-ia-2024/blogs/2024-10-10/1-5a-2.png)

![screenshot of commands for creating Kubernetes ServiceAccounts](../../static/img/30-days-of-ia-2024/blogs/2024-10-10/1-5a-3.png)

![screenshot of Azure CLI commands for creating a Kubernetes service account](../../static/img/30-days-of-ia-2024/blogs/2024-10-10/1-5a-4.png)

![screenshot of Azure CLI commands for deploying the application](../../static/img/30-days-of-ia-2024/blogs/2024-10-10/1-5a-5.png)

3. **Grant Access to Key Vault:**
    - Use the following command to grant the Managed Identity access to the Key Vault:

```
# Retrieve the Key Vault resource ID
export KEYVAULT_RESOURCE_ID=$(az keyvault show --resource-group <RESOURCE_GROUP_NAME> \
  --name <KEYVAULT_NAME> \
  --query id \
  --output tsv)

# Retrieve the principal ID of the User Assigned Managed Identity
export IDENTITY_PRINCIPAL_ID=$(az identity show \
  --name <USER_ASSIGNED_IDENTITY_NAME> \
  --resource-group <RESOURCE_GROUP_NAME> \
  --query principalId \
  --output tsv)

# Assign the "Key Vault Secrets User" role to the Managed Identity
az role assignment create \
  --assignee-object-id "${IDENTITY_PRINCIPAL_ID}" \
  --role "Key Vault Secrets User" \
  --scope "${KEYVAULT_RESOURCE_ID}" \
  --assignee-principal-type ServicePrincipal

# Set the Key Vault URI for future use
export AZURE_KEYVAULT_URI=https://<KEYVAULT_NAME>.vault.azure.net/
```

![screenshot of Azure CLI command to export identity principal ID](../../static/img/30-days-of-ia-2024/blogs/2024-10-10/1-5a-6.png)

![screenshot of Azure CLI command to create a role assignment](../../static/img/30-days-of-ia-2024/blogs/2024-10-10/1-5a-7.png)

## Conclusion 

In this section, we created and configured the APIs for both back-end and middleware services using **Azure API Management (APIM)**. We secured the APIs using CORS policies, header checks, and rate limits. After configuring APIM, we securely stored the API keys and other sensitive data in Azure Key Vault and granted access using Managed Identity. This setup ensures that all components interact securely and that sensitive information is managed properly.

In the next section, we will deploy the application using Azure App Service, ensuring it utilizes the secure configurations established here.

## Additional Resources

- [Understanding Azure API Management](https://learn.microsoft.com/azure/api-management/api-management-key-concepts?ocid=biafy25h1_30daysofia_webpage_azuremktg)
- [Getting Started with Azure Key Vault](https://learn.microsoft.com/azure/key-vault/general/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg)
- [Configuring Managed Identities in Azure](https://learn.microsoft.com/azure/app-service/overview-managed-identity?tabs=portal%2Chttp?ocid=biafy25h1_30daysofia_webpage_azuremktg)