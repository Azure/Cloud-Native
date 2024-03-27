---
date: 2024-03-28T09:00
slug: creating-a-virtual-stylist-chatbot-part-3
title: "6.3 Creating a Virtual Stylist Chatbot — Part 3: Deploying the App"
authors: [cnteam]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 60-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In this four-part series, you’ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In the final article of this series, you’ll deploy and test the Intelligent App." 
tags: [Build-Intelligent-Apps, 60-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/60daysofia/creating-a-virtual-stylist-chatbot-part-3"/>
  <meta property="og:type" content="website"/> 
  <meta property="og:title" content="Build Intelligent Apps | AI Apps on Azure"/> 
  <meta property="og:description" content="In this four-part series, you’ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In the final article of this series, you’ll deploy and test the Intelligent App."/> 
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/> 
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/60daysofIA/creating-a-virtual-stylist-chatbot-part-3" /> 
  <meta name="twitter:title" content="Build Intelligent Apps | AI Apps on Azure" />
 <meta name="twitter:description" content="In this four-part series, you’ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In the final article of this series, you’ll deploy and test the Intelligent App." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" /> 
  <meta name="twitter:card" content="summary_large_image" /> 
  <meta name="twitter:creator" content="@devanshidiaries" /> 
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/60daysofIA/creating-a-virtual-stylist-chatbot-part-3" /> 
</head> 

<!-- End METADATA -->

![image alt: A minimalist graphic features a t-shirt, pants, and robot head in a rounded square, connected by broken line to a smartphone that displays a chatbot conversation.](../../static/img/60-days-of-ia/blogs/2024-03-28/6-3-1.jpeg)

## Creating a Virtual Stylist Chatbot—Part 3: Deploying the App

In part 1 of this series, you used AI to analyze images of clothing and generate a text description of each piece. Then, in part 2, you designed the chatbot’s interface.

In this third and final installment, you’ll deploy the app as an Azure Static Web App using the Azure command-line interface (CLI). The Azure Static Web Apps service provides a hassle-free means of hosting static web apps with serverless APIs. It also features global distribution, custom domains, SSL certificates, authentication, authorization, and GitHub integration.

### Prerequisites

To follow along, ensure you have:

* The complete code from [part 2](https://azure.github.io/Cloud-Native/60DaysOfIA/creating-a-virtual-stylist-chatbot-part-2)
* The Azure CLI installed and signed in to your Azure account
* A GitHub account, [an empty repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories) to push the app’s code to, and a [personal access token](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token) granting read and write access to the repository

For a preview of the project, check out the [complete project code available on GitHub](https://github.com/rogerwinter/Microsoft-Creating-a-Virtual-Stylist-Chatbot/).

### Pushing the App to GitHub

