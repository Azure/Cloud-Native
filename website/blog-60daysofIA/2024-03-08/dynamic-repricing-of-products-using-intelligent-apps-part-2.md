---
date: 2024-03-08T09:00
slug: dynamic-repricing-of-products-using-intelligent-apps-part-2
title: "3.2 Dynamic Repricing of Products Using Intelligent Apps Part 2"
authors: [cnteam]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud-Scale, Data, AI, AI/ML, intelligent apps, cloud-native, 60-days, enterprise apps, digital experiences, app modernization]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In this series, you’ll learn why Cosmos DB is an ideal choice for powering such applications—and how it makes building Intelligent Apps accessible and approachable." 
tags: [Build-Intelligent-Apps, 60-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/60daysofia/dynamic-repricing-of-products-using-intelligent-apps-part-2"/>
  <meta property="og:type" content="website"/> 
  <meta property="og:title" content="Build Intelligent Apps | AI Apps on Azure"/> 
  <meta property="og:description" content="In this series, you’ll learn why Cosmos DB is an ideal choice for powering such applications—and how it makes building Intelligent Apps accessible and approachable."/> 
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/> 
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/60daysofIA/dynamic-repricing-of-products-using-intelligent-apps-part-2" /> 
  <meta name="twitter:title" content="Build Intelligent Apps | AI Apps on Azure" />
 <meta name="twitter:description" content="In this series, you’ll learn why Cosmos DB is an ideal choice for powering such applications—and how it makes building Intelligent Apps accessible and approachable." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" /> 
  <meta name="twitter:card" content="summary_large_image" /> 
  <meta name="twitter:creator" content="@devanshidiaries" /> 
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/60daysofIA/dynamic-repricing-of-products-using-intelligent-apps-part-2" /> 
</head> 

<!-- End METADATA -->

![Dynamic Repricing of Products Using Intelligent Apps Part 2: Price Forecasting with AI/ML](../../static/img/60-days-of-ia/blogs/2024-03-08/3-2-1.jpeg)

*This three-part series demonstrates how to use Azure Cosmos DB to build an Intelligent App that uses historical pricing and product data to forecast future price fluctuations for specific products. In the first article of this series, you’ll set up and populate the Cosmos DB database with data to use in the later parts of the series.*

## Dynamic Repricing of Products Using Intelligent Apps Part 2: Price Forecasting with AI/ML

[In Part 1 of this series](https://azure.github.io/Cloud-Native/60DaysOfIA/dynamic-repricing-of-products-using-intelligent-apps-part-1), you set up and populated an [Azure Cosmos DB](https://azure.microsoft.com/free/cosmos-db?ocid=buildia24_60days_blogs) database, laying the groundwork for your Intelligent Application. You also imported your data to a Cosmos DB instance.

In this second article, you’ll use this data alongside Azure’s machine learning (ML) and artificial intelligence (AI) capabilities to build a model that analyzes pricing trends and predicts future prices for a fictional e-commerce business.

### Analyzing Price Trends to Predict Future Prices

The ability to forecast pricing is a game-changer. With the power of foresight, businesses can preemptively adjust their pricing strategies in line with market expectations.

In this tutorial, we’ll give you a step-by-step guide to generating a predictive ML model for an e-commerce business, using Azure’s suite of ML tools.

#### Prerequisites

Before you begin, make sure you have the following:

- An active [Azure Account](https://azure.microsoft.com/free/?ocid=buildia24_60days_blogs)
- A Cosmos DB instance with the [pricing data](https://www.kaggle.com/datasets/sujaykapadnis/price-quote-data/data) you set up in Part 1
- Access to [Azure Machine Learning Studio](https://studio.azureml.net/)
- An [Azure Machine Learning workspace](https://learn.microsoft.com/azure/machine-learning/tutorial-azure-ml-in-a-day?view=azureml-api-2&ocid=buildia24_60days_blogs)
- A [Jupyter notebook set up](https://learn.microsoft.com/azure/machine-learning/quickstart-create-resources?view=azureml-api-2#create-a-new-notebook&ocid=buildia24_60days_blogs) in your workspace
- Familiarity with [Azure Machine Learning](https://azure.microsoft.com/products/machine-learning?ocid=buildia24_60days_blogs) concepts
- Basic Python programming knowledge and understanding of ML concepts

**Note**: You should add and run all code in this article into your Jupyter Notebook in the order in which it appears.

:::info
Check out the Azure **[Cosmos DB Ask The Expert](https://aka.ms/intelligent-apps/ate-cosmos?ocid=buildia24_60days_blogs)** session to learn how to build RAG solutions, manage chat history by seamlessly connecting with *Azure OpenAI*, as well as explore the power of *Azure Cosmos DB's copilot*. The experts will also cover how to seamlessly integrate your operational and transactional data with AI frameworks and sdks like Semantic Kernel, Langchain, and LlamaIndex. 
:::

#### Extract Historical Pricing Data from Cosmos DB

