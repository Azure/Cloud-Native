---
date: 2024-04-10T09:00
slug: personalizing-education-with-generative-ai-and-retrieval-augmented-generation-3
title: "7.3 Personalizing Education with Generative AI and Retrieval Augmented Generation Part 3"
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
  <meta property="og:url" content="https://azure.github.io/cloud-native/60daysofia/personalizing-education-with-generative-ai-and-retrieval-augmented-generation-3"/>
  <meta property="og:type" content="website"/> 
  <meta property="og:title" content="Build Intelligent Apps | AI Apps on Azure"/> 
  <meta property="og:description" content="Join us on a learning journey to build intelligent apps on Azure. Read all about the upcoming #BuildIntelligentApps initiative on this post!"/> 
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/> 
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/60daysofIA/personalizing-education-with-generative-ai-and-retrieval-augmented-generation-3" /> 
  <meta name="twitter:title" content="Build Intelligent Apps | AI Apps on Azure" />
 <meta name="twitter:description" content="Azure and platform engineering pave the way for the efficient development, deployment, and maintenance of Intelligent Apps, triumphing over traditional approaches." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" /> 
  <meta name="twitter:card" content="summary_large_image" /> 
  <meta name="twitter:creator" content="@devanshidiaries" /> 
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/60daysofIA/personalizing-education-with-generative-ai-and-retrieval-augmented-generation-3" /> 
</head> 

<!-- End METADATA -->

![Graphic with a chat bubble-meets-robot head in the top right corner. At the bottom of the graphic is text that reads, "Personalizing Education with Generative AI and Retrieval Augmented Generation: Creating the Chatbot."](../../static/img/60-days-of-ia/blogs/2024-04-08/7-2-1.jpeg)

*In this three-part series, you’ll use Azure Container Apps, Azure OpenAI Service, and Retrieval Augmented Generation to create a personal tutor chatbot that dynamically adjusts educational materials and quizzes based on user interactions. This final article demonstrates how to deploy using Azure Container Apps.*

## Personalizing Education with Generative AI and Retrieval Augmented Generation Part 3

Welcome to the final installment of our three-part tutorial series on building a personalized Python tutor with Generative AI and Retrieval Augmented Generation (RAG)! If you’re new to this series, be sure to check out [Part 1](https://azure.github.io/Cloud-Native/60DaysOfIA/personalizing-education-with-generative-ai-and-retrieval-augmented-generation-1), which shows you how to set up the essential Azure resources, and [Part 2](https://azure.github.io/Cloud-Native/60DaysOfIA/personalizing-education-with-generative-ai-and-retrieval-augmented-generation-2), which explains how to build out the chatbot’s core functionality.

In this final tutorial, you’ll take your chatbot from the development environment to a live web application where anyone can interact with it.

