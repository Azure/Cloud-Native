---
date: 2024-10-11T09:01
slug: setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-2
title: "1.6b Setting Up CI/CD Pipelines for Azure App Service and AKS Using Azure DevOps Part 2"
authors: [30days]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 30-days-2024, 30-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In this application development, Continuous Integration and Continuous Deployment (CI/CD) play a vital role in streamlining workflows and ensuring rapid delivery of software." 
tags: [Build-Intelligent-Apps, 30-days-of-IA-2024, learn-live, demo-bytes, community-gallery, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-2"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="**Build Intelligent Apps | AI Apps on Azure"/>
  <meta property="og:description" content="In this application development, Continuous Integration and Continuous Deployment (CI/CD) play a vital role in streamlining workflows and ensuring rapid delivery of software.  "/>
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/>
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-2" />
  <meta name="twitter:title" content="**Build Intelligent Apps | AI Apps on Azure" />
  <meta name="twitter:description" content="In this application development, Continuous Integration and Continuous Deployment (CI/CD) play a vital role in streamlining workflows and ensuring rapid delivery of software." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@devanshidiaries" />
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-2" />
</head>

<!-- End METADATA -->
## Part 2: Setting Up CI/CD Pipelines for Azure Kubernetes Service (AKS) Using Azure DevOps

In the previous blog, we discussed the fundamentals of setting up CI/CD pipelines for Azure App Service. In this blog, we will focus on how to configure a CI/CD pipeline specifically for Azure Kubernetes Service (AKS) using Azure DevOps. We’ll cover prerequisites, detailed YAML configurations, and how to manage deployments based on a variable group setting.

## Prerequisites

Before diving into the pipeline configuration, ensure you have the following prerequisites:

- An Azure DevOps account.
- Access to your Azure subscription with permission to create resources.
- A GitHub repository with your application code, specifically structured with three folders: `backend`, `middleware`, and `frontend`. We will use the same repository as in the previous blog: [Java-AI-Based-Content-Generator](https://github.com/Azure-Samples/Java-AI-Based-Content-Generator).
- Azure Container Registry (ACR) configured and accessible.
- A Kubernetes cluster (AKS) set up in your Azure environment.

## Overview of the Pipeline

The CI/CD pipeline will consist of the following key stages:

1. **Build Stage:** Similar to the previous setup, each application is built in parallel to produce artifacts.
2. **Push to ACR:** Docker images are created from the build artifacts and pushed to Azure Container Registry.
3. **Deploy Stage:** The Docker images are pulled from ACR and deployed to the AKS cluster

### Integrating GitHub Repository into Azure DevOps

Follow similar steps as outlined in blog 1.6a.

### Creating Variable Groups

Variable groups in Azure DevOps help centralize configuration management by allowing you to store and reuse variables across multiple pipelines. Here's how to create and configure a variable group:

- **Navigate to Pipelines:** Open the **Pipelines** section in your Azure DevOps project.
- **Library:** Click on **Library** under Pipelines.

  ![screenshot of Library in Azure DevOps project](../../static/img/30-days-of-ia-2024/blogs/2024-10-11/1-6b-1.png)

1. **Add Variable Group:** Select + **Variable group**.

    ![screenshot of Variable Group fields Azure DevOps project](../../static/img/30-days-of-ia-2024/blogs/2024-10-11/1-6b-2.png)

2. **Define Variables:** Add the necessary variables (e.g., `AcrName`, `BackendAppServiceName`, `MiddlewareAppServiceName`, and `FrontendAppServiceName`). Optionally, mark sensitive values as secrets.

    ![screenshot of secrets settings in Azure DevOps project](../../static/img/30-days-of-ia-2024/blogs/2024-10-11/1-6b-3.png)

3. **Link to Azure Key Vault:** If needed, link your variable group to an Azure Key Vault to manage secrets.

    ![screenshot of Azure Key Vault variables in Azure DevOps project](../../static/img/30-days-of-ia-2024/blogs/2024-10-11/1-6b-4.png)

4. **Save the Variable Group:** Click **Save** to confirm your variable group configuration.
5. **Add Pipeline Permission:** Ensure that the pipeline has permission to access the variable group.

    ![screenshot of pipeline permissions in Azure DevOps project](../../static/img/30-days-of-ia-2024/blogs/2024-10-11/1-6b-5.png)

### Variable Groups

We will utilize variable groups to manage our configurations efficiently. In particular, we will set the `DeploymentTarget` variable in the variable group `ai-study-vg` to determine whether we are deploying to AKS or App Service.

#### Adding Variables

- `DeploymentTarget`: This variable will dictate the target deployment, allowing us to switch between AKS and App Service as needed.

    ![screenshot of deployment target variable setting in Azure DevOps project](../../static/img/30-days-of-ia-2024/blogs/2024-10-11/1-6b-6.png)

## Configuring Service Connection for Azure Container Registry (ACR)

Before deploying your applications to Azure Kubernetes Service (AKS), it's essential to set up a service connection for Azure Container Registry (ACR). This allows Azure DevOps to authenticate and pull images from your ACR. Follow these steps to configure the service connection:

### Step 1: Access Your Azure Container Registry

1. **Navigate to Azure Portal** and find your Azure Container Registry resource.
2. In the left-hand menu, select **Access keys**.

### Step 2: Copy the Required Values

In the **Access keys** section, you will find two important values: 

- **Login Server:** This will typically be in the format youracrname.azurecr.io.
- **Admin User Password:** This is used for authentication.

    ![screenshot of access keys section in Azure DevOps project](../../static/img/30-days-of-ia-2024/blogs/2024-10-11/1-6b-7.png)