---
date: 2023-10-24T09:00
slug: building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2
title: 4.2 - Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)
authors: [cnteam]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 30-days, enterprise apps, digital experiences, app modernization, serverless, ai apps, data]
image: https://azure.github.io/Cloud-Native/img/ogImage.png
description: "Explore how to develop an AI-powered logo generator using DALL-E, Azure OpenAI and Azure Kubernetes Service (AKS)." 
tags: [Build-Intelligent-Apps, 30-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head>
<meta property="og:url" content="https://azure.github.io/cloud-native/30daysofia/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Build Intelligent Apps!| Build AI Apps On Azure"/>
<meta property="og:description" content="Explore how to develop an AI-powered logo generator using DALL-E, Azure OpenAI and Azure Kubernetes Service (AKS)."/>
<meta property="og:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png"/>
    <meta name="twitter:url" 
      content="https://azure.github.io/Cloud-Native/30daysofIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2" />
    <meta name="twitter:title" 
      content="Build Intelligent Apps! | Build AI Apps On Azure" />
    <meta name="twitter:description" 
      content="4.2 - Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)" />
    <meta name="twitter:image" 
      content="https://azure.github.io/Cloud-Native/img/ogImage.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" 
      content="@devanshidiaries" />
    <meta name="twitter:site" content="@AzureAdvocates" /> 
    <link rel="canonical" 
      href="https://azure.github.io/Cloud-Native/30daysofIA/https://azure.github.io/Cloud-Native/30daysofIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2" />
</head>

<!-- End METADATA -->
In this article, explore how to develop an AI-powered logo generator using DALL-E, [Azure OpenAI](https://learn.microsoft.com/azure/ai-services/openai/overview?WT.mc_id=javascript-99907-ninarasi) and [Azure Kubernetes Service (AKS)](https://learn.microsoft.com/azure/aks/?WT.mc_id=javascript-99907-ninarasi).

## What We'll Cover:

 * Deploying the Logo Variation Generator app on AKS 
 * Creating a dockerfile and storing the image in Azure Container Registry
 * Create, deploy and test the app on AKS cluster

![image of logos on web interface](../../static/img/fallforia/blogs/2023-10-24/blog-image-4-2-1.jpeg)

## Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)

In the [previous part](https://azure.github.io/Cloud-Native/30daysofIA/https://azure.github.io/Cloud-Native/30DaysOfIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-1) of this tutorial, we explored creating an AI-powered logo variation generator with DALL-E and building a web interface for the app. This part continues onto deploying and testing the application on Azure Kubernetes Service.

### Prerequisites

To follow this tutorial, ensure you have completed the first [part](https://azure.github.io/Cloud-Native/30daysofIA/https://azure.github.io/Cloud-Native/30DaysOfIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-1) of this topic. 





## Exercise

* Complete this **hands-on sample** [project code](https://github.com/contentlab-io/Microsoft-Building-an-AI-Powered-Logo-Variation-Generator-with-Azure-OpenAI) to build your intelligent app with multi-modal databases.
* Watch the **[Ask the Expert: Azure Kubernetes Service](https://reactor.microsoft.com/reactor/events/20732/?WT.mc_id=javascript-99907-ninarasi)** session where the Product Engineering team goes dives into the concepts for building intelligent apps using Azure Kubernetes Service.
* To revise core concepts on cloud-native or Azure Kubernetes Service, go to **[30 Days of Cloud Native](https://azure.github.io/Cloud-Native/cnny-2023/cloud-native-fundamentals?WT.mc_id=javascript-99907-ninarasi)**.