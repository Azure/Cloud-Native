---
date: 2024-03-08T09:00
slug: dynamic-repricing-of-products-using-intelligent-apps-part-1
title: "Cosmos DB and Intelligent Apps: A Match Made for Innovation"
authors: [cnteam]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud-Scale, Data, AI, AI/ML, intelligent apps, cloud-native, 60-days, enterprise apps, digital experiences, app modernization]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In this series, you’ll learn why Cosmos DB is an ideal choice for powering such applications—and how it makes building Intelligent Apps accessible and approachable. In the first article of this series, you’ll set up and populate the Cosmos DB database with data to use in the later parts of the series." 
tags: [Build-Intelligent-Apps, 60-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/60daysofia/dynamic-repricing-of-products-using-intelligent-apps-part-1"/>
  <meta property="og:type" content="website"/> 
  <meta property="og:title" content="Build Intelligent Apps | AI Apps on Azure"/> 
  <meta property="og:description" content="In this series, you’ll learn why Cosmos DB is an ideal choice for powering such applications—and how it makes building Intelligent Apps accessible and approachable. In the first article of this series, you’ll set up and populate the Cosmos DB database with data to use in the later parts of the series."/> 
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/> 
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/60daysofIA/dynamic-repricing-of-products-using-intelligent-apps-part-1" /> 
  <meta name="twitter:title" content="Build Intelligent Apps | AI Apps on Azure" />
 <meta name="twitter:description" content="In this series, you’ll learn why Cosmos DB is an ideal choice for powering such applications—and how it makes building Intelligent Apps accessible and approachable. In the first article of this series, you’ll set up and populate the Cosmos DB database with data to use in the later parts of the series." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" /> 
  <meta name="twitter:card" content="summary_large_image" /> 
  <meta name="twitter:creator" content="@devanshidiaries" /> 
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/60daysofIA/dynamic-repricing-of-products-using-intelligent-apps-part-1" /> 
</head> 

<!-- End METADATA -->

![Cosmos DB and Intelligent Apps: A Match Made for Innovation](../../static/img/60-days-of-ia/blogs/2024-03-08/3-1-1.jpeg)

*This three-part series demonstrates how to use Azure Cosmos DB to build an Intelligent App that uses historical pricing and product data to forecast future price fluctuations for specific products. In the first article of this series, you’ll set up and populate the Cosmos DB database with data to use in the later parts of the series.*

## Dynamic Repricing of Products Using Intelligent Apps Part 1: Setting Up and Populating Cosmos DB with Data

Intelligent Apps leverage data and artificial intelligence (AI) to provide smart, personalized, and adaptive experiences for users. AI and machine learning (ML) techniques like natural language processing (NLP), computer vision, and deep learning help understand context, intent, and user preferences to deliver relevant and timely insights and actions.

Some examples of Intelligent Apps include:

- Virtual assistants—Interactive applications that understand and execute user commands
- Chatbots—Automated messaging systems that provide information or assistance
- Recommendation systems—Algorithms that suggest relevant items based on user preferences and behavior

In this three-part series, you’ll create an Intelligent App powered by Azure Cosmos DB and AI/ML capabilities that dynamically suggests changes to product prices based on demand and historical trends. This app will help optimize revenue and customer satisfaction by adjusting product prices according to market conditions and customer behavior.
