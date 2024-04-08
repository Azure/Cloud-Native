---
date: 2024-04-08T09:00
slug: personalizing-education-with-generative-ai-and-retrieval-augmented-generation-1
title: "7.1 Personalizing Education with Generative AI and Retrieval Augmented Generation Part 1"
authors: [cnteam]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 60-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In this three-part series, you’ll use Azure Container Apps, Azure OpenAI Service, and Retrieval Augmented Generation to create a personal tutor chatbot that dynamically adjusts educational materials and quizzes based on user interactions. This article shows how to set up the core Azure AI services required to build your Intelligent App." 
tags: [Build-Intelligent-Apps, 60-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/60daysofia/personalizing-education-with-generative-ai-and-retrieval-augmented-generation-1"/>
  <meta property="og:type" content="website"/> 
  <meta property="og:title" content="Build Intelligent Apps | AI Apps on Azure"/> 
  <meta property="og:description" content="In this three-part series, you’ll use Azure Container Apps, Azure OpenAI Service, and Retrieval Augmented Generation to create a personal tutor chatbot that dynamically adjusts educational materials and quizzes based on user interactions. This article shows how to set up the core Azure AI services required to build your Intelligent App."/> 
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/> 
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/60daysofIA/personalizing-education-with-generative-ai-and-retrieval-augmented-generation-1" /> 
  <meta name="twitter:title" content="Build Intelligent Apps | AI Apps on Azure" />
 <meta name="twitter:description" content="In this three-part series, you’ll use Azure Container Apps, Azure OpenAI Service, and Retrieval Augmented Generation to create a personal tutor chatbot that dynamically adjusts educational materials and quizzes based on user interactions. This article shows how to set up the core Azure AI services required to build your Intelligent App." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" /> 
  <meta name="twitter:card" content="summary_large_image" /> 
  <meta name="twitter:creator" content="@devanshidiaries" /> 
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/60daysofIA/personalizing-education-with-generative-ai-and-retrieval-augmented-generation-1" /> 
</head> 

<!-- End METADATA -->

![Graphic of three blocks, surrounded by a circle in the top right corner. At the bottom of the graphic is text that reads, "Personalizing Education with Generative AI and Retrieval Augmented Generation: Laying the Groundwork with Azure Container Apps.](../../static/img/60-days-of-ia/blogs/2024-04-08/7-1-1.jpeg)

## Personalizing Education with Generative AI and Retrieval Augmented Generation Part 1: Laying the Groundwork with Azure Container Apps

Tired of one-size-fits-all learning? Imagine a virtual tutor that adjusts to your specific needs and helps you understand complex topics. That’s the power of Intelligent Apps — apps that leverage machine learning (ML), data analytics, and predictive/generative artificial intelligence (AI) to create dynamic, interactive user experiences.

In this three-part series, you’ll build an education app that uses generative AI and Retrieval Augmented Generation (RAG) to create customized lessons, answer users’ questions in detail, and generate quizzes that adapt to their progress. You’ll use several exciting Azure technologies:

* [Azure OpenAI Service](https://azure.microsoft.com/products/ai-services/openai-service?ocid=buildia24_60days_blogs) — Provides the core AI capabilities for your app
* [Azure AI Search](https://azure.microsoft.com/products/ai-services/ai-search?ocid=buildia24_60days_blogs) — Offers a knowledge base that your app can access using RAG, allowing the large language model (LLM) to provide more accurate explanations
* [Azure Container Apps](https://azure.microsoft.com/products/container-apps?ocid=buildia24_60days_blogs) — Lets you easily package and run apps in a flexible and scalable environment.

![The Intelligent Application's architecture comprises Azure OpenAI, Azure AI Search, an Azure Storage Account, and the Knowledge Base.](../../static/img/60-days-of-ia/blogs/2024-04-08/7-1-2.png)

Let’s get started!

### Prerequisites

To follow this tutorial, ensure you have the following:

* Python 3.10 or later
* Dave Kuhlman’s open-source Python knowledge base downloaded as an HTML file
* An Azure subscription with access to the Azure OpenAI Service. Note that you need to request access to this service.
* The Azure command-line interface (CLI) installed
An Azure resource group

### Build a Personal Tutor with AI and Azure Container Apps

In this first part of the series, you’ll build the foundation for an AI-powered Python tutor. This tutor will use a knowledge base to answer your Python questions of varying difficulties and create tailored quizzes.

#### Creating an Azure Storage Account for RAG Data

Start by creating a space to store the knowledge base that your chatbot will use for RAG. Sign in to the Azure portal and search “Storage accounts” in the search bar. Click + **Create** to start a new storage account.

On the **Basics** tab, set the following configurations:

* **Subscription** — Select the same subscription as your resource group.
* **Resource group** — Select the resource group you created earlier.
* **Storage account name** — Enter a unique name for your storage account.
* **Region** — Choose a region according to your preference.
* **Pricing tier** — Select Standard S0.

![The storage account creation page has seven tabs: Basics, Advanced, Networking, Data protection, Encryption, Tags, and Review. Basics is open. Below are two sections: Project details and Instance details. Under Project details are fields for Subscription (Azure subscription 1) and Resource group (personal-tutor). Under Instance details are fields for Storage account name (blank) and Region ((US) East US). At the bottom are two buttons: Review and Next: Advanced.](../../static/img/60-days-of-ia/blogs/2024-04-08/7-1-3.png)

For the other tabs, keep the default settings.

Finally, click **Review + Create**, and then **Create**.

Next, you’ll upload the knowledge base linked in this tutorial’s prerequisites. Use HTML formatting for this project.

Once you have created your storage account, navigate to it from the Azure portal and click **Upload**. In the window that appears, create a new container, give it a descriptive name, and check **Private (no anonymous access)**. Select the newly created container and click **Browse for files**. Select the file or folder you want to upload. Then, click **Upload** to upload the blob.

![The Edututor storage account page lists menu options including Overview, Activity log, Tags, Diagnose and solve problems, Access Control (IAM), Data migration, Events, and Storage Mover. There are also menus for Data storage (Containers, File shares, Queues, and Tables), and Security + monitoring (Networking, Front Door and CDN), and Access keys. To the right of the page is a window to upload a blob, with the option to drag and drop a file or select an existing container.](../../static/img/60-days-of-ia/blogs/2024-04-08/7-1-4.jpeg)

:::info
Register for **[Episode 4](https://aka.ms/serverless-learn-live/ep4?ocid=buildia24_60days_blogs)** of the new learning series on **Intelligent Apps with Serverless on Azure**.
:::

Join the community along with MVPs, and the Azure Product Group on how to leverage AI with Serverless on Azure technologies—Azure Container Apps and Azure Functions—to build intelligent applications.

#### Creating an Azure OpenAI Service