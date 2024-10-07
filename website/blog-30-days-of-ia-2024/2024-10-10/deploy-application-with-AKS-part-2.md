---
date: 2024-10-10T09:00
slug: deploy-application-with-AKS-part-2
title: "1.5b Deploy Application with AKS Part 2"
authors: [30days]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 30-days-2024, 30-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In this blog, we will deploy our application components (Middleware, Back-end, and Front-end services) to Azure Kubernetes Service (AKS) using Azure CLI and Kubernetes configurations. This approach allows us to leverage container orchestration for better management and scalability." 
tags: [Build-Intelligent-Apps, 30-days-of-IA-2024, learn-live, demo-bytes, community-gallery, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/30-days-of-ia-2024/deploy-application-with-AKS-part-2"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="**Build Intelligent Apps | AI Apps on Azure"/>
  <meta property="og:description" content="In this blog, we will deploy our application components (Middleware, Back-end, and Front-end services) to Azure Kubernetes Service (AKS) using Azure CLI and Kubernetes configurations. This approach allows us to leverage container orchestration for better management and scalability."/>
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/>
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-AKS-part-2" />
  <meta name="twitter:title" content="**Build Intelligent Apps | AI Apps on Azure" />
  <meta name="twitter:description" content="In this blog, we will deploy our application components (Middleware, Back-end, and Front-end services) to Azure Kubernetes Service (AKS) using Azure CLI and Kubernetes configurations. This approach allows us to leverage container orchestration for better management and scalability." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@devanshidiaries" />
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-AKS-part-2" />
</head>

<!-- End METADATA -->

## Part 2: Deploying the Application to Azure Kubernetes Service (AKS)

In this blog, we will deploy our application components (Middleware, Back-end, and Front-end services) to Azure Kubernetes Service (AKS) using Azure CLI and Kubernetes configurations. This approach allows us to leverage container orchestration for better management and scalability.

## What we cover:

1. Review of APIM Configuration


## Prerequisites


:::info
Join the next snackable AI Demo Bytes to explore how to [ apply auto-scaling and load testing to your AI applications](https://aka.ms/demo-bytes/ep6?ocid=biafy25h1_30daysofia_webpage_azuremktg).
:::

![screenshot of Azure CLI commands for creating and configuring managed identities for AKS clusters](../../static/img/30-days-of-ia-2024/blogs/2024-10-10/1-5b-1.png)
