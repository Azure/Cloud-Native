---
date: 2024-10-11T09:00
slug: setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops
title: "1.6 Setting Up CI/CD Pipelines for Azure App Service and AKS Using Azure DevOps"
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
  <meta property="og:url" content="https://azure.github.io/cloud-native/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="**Build Intelligent Apps | AI Apps on Azure"/>
  <meta property="og:description" content="In this application development, Continuous Integration and Continuous Deployment (CI/CD) play a vital role in streamlining workflows and ensuring rapid delivery of software.  "/>
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/>
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops" />
  <meta name="twitter:title" content="**Build Intelligent Apps | AI Apps on Azure" />
  <meta name="twitter:description" content="In this application development, Continuous Integration and Continuous Deployment (CI/CD) play a vital role in streamlining workflows and ensuring rapid delivery of software." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@devanshidiaries" />
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops" />
</head>

<!-- End METADATA -->

In this application development, Continuous Integration and Continuous Deployment (CI/CD) play a vital role in streamlining workflows and ensuring rapid delivery of software. In this blog, we will explore how to set up CI/CD pipelines for three applications—a Java Spring Boot backend, a Java Spring Boot middleware, and a ReactJS frontend—using Azure DevOps. We will deploy these applications to Azure App Service and Azure Kubernetes Service (AKS) in parallel.

## Prerequisites

Before we start, ensure you have:

- An Azure DevOps account.
- A GitHub repository with your application code, specifically structured with three folders: backend, middleware, and frontend.
- An Azure subscription with access to Azure App Service and AKS.
- The GitHub URL for the project we will be using is: [Java-AI-Based-Content-Generator](https://github.com/Azure-Samples/Java-AI-Based-Content-Generator).

:::info
[Ingest your own content](https://aka.ms/demo-bytes/ep6?ocid=biafy25h1_30daysofia_webpage_azuremktg) using the Azure Functions OpenAI extension into a Cosmos DB vector database to enable OpenAI query on your data.
:::

## Overview of the Pipeline

The CI/CD pipeline will consist of the following key stages:

- **Build Stage:** Each application is built in parallel, producing artifacts for deployment.
- **Deploy Stage:** The built artifacts are deployed to Azure App Service and AKS.

### Integrating GitHub Repository into Azure DevOps

To connect your GitHub repository to Azure DevOps, follow these steps:

1. **Navigate to Your Azure DevOps Project:** Go to the Azure DevOps portal and select your project.

    ![screenshot of project in Azure DevOps portal](../../static/img/30-days-of-ia-2024/blogs/2024-10-11/1-6-1.png)

2. **Select Project Settings:** At the bottom left corner, click on the **Project settings** gear icon.  
3. **Service Connections:** Under the **Pipelines** section, select **Service connections**.

    ![screenshot of Service connections under Pipelines in Azure DevOps portal](../../static/img/30-days-of-ia-2024/blogs/2024-10-11/1-6-2.png)

4. **Create a New Service Connection:** Click on **New service connection** and select **GitHub** from the list.
5. **Authorize Azure DevOps:** Follow the prompts to authorize Azure DevOps to access your GitHub account.
6. **Select Repository:** Choose the repository you want to integrate and complete the setup.

    ![screenshot of repository in Azure DevOps portal](../../static/img/30-days-of-ia-2024/blogs/2024-10-11/1-6-3.png)

### Creating Variable Groups

Variable groups in Azure DevOps help centralize configuration management by allowing you to store and reuse variables across multiple pipelines. Here's how to create and configure a variable group: