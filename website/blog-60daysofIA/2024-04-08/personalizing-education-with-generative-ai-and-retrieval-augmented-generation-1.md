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









