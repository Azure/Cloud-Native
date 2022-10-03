---
slug: serverless-status-post
title: Serveless September - In a Nutshell
authors: [devanshi]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [azure, serverless, event grid, logic apps, cloudevents]
image: https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png
description: "A wrap-up post from Serverless September, referencing the many initiatives and resources" 
tags: [serverless-september, azure-container-apps, dapr, azure-event-grid, azure-logic-apps, azure-functions]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/blog/serverless-status-post" />
  <meta name="twitter:title" 
    content="#ServerlessSeptember: In A Nutshell" />
  <meta name="twitter:description" 
    content="#ServerlessSeptember: In A Nutshell" />
  <meta name="twitter:image"
    content="https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/blog/21-cloudevents-via-event-grid" />
</head>

---

It's `Serverless September` in a Nutshell! Join us as we unpack our month-long learning journey exploring the core technology pillars for Serverless architectures on Azure. Then end with a look at next steps to build your Cloud-native applications on Azure.

---

## What We'll Cover
 * Functions-as-a-Service (FaaS)
 * Containers and Microservices
 * Serverless Integrations
 * End-to-End Solutions
 * Take the Cloud Skills Challenge!
 * Bookmark our Serverless Collection.

![Banner for Serverless September](./img/banner.png)

---

## Building Cloud-native Apps

By definition, _Cloud native technologies empower organizations to **build and run scalable applications** in modern, dynamic environments such as public, private, and hybrid clouds._ You can learn more about Cloud-native in Kendall Roden's #ServerlessSeptember post on [Going Cloud Native with Azure Container Apps](zero2hero-aca-01).

Serveless technologies accelerate productivity and minimize costs for deploying applications at cloud scale. So, what can we build with serverless technologies in cloud-native on Azure? _Anything that is event-driven_ - examples include:
 - **Microservices** - scaled by KEDA-compliant triggers
 - **Public API Endpoints** - scaled by #concurrent HTTP requests
 - **Event-Driven Applications** - scaled by length of message queue
 - **Web Applications** - scaled by #concurrent HTTP requests
 - **Background Process** - scaled by CPU and Memory usage

![](./img/cloud-native.png)

Great - but as developers, we really want to know **_how_ we can get started building and deploying serverless solutions on Azure**. That was the focus of our #ServerlessSeptember journey. Let's take a quick look at the four key themes.


## Functions-as-a-Service (FaaS)

_Functions-as-a-Service_ (FaaS) is the epitome of developer productivity for full-stack modern apps. As developers, you don't manage infrastructure and focus only on business logic and application code. And, with **Serverless Compute** you _only pay for when your code runs_ - making this the simplest first step to begin migrating your application to cloud-native.

In Azure, FaaS is provided by Azure Functions. Check out our [Functions + Serverless on Azure](./../2022-09-08/index.md) to go from learning core concepts, to building your first Functions app in your programming language of choice. Azure functions support multiple programming languages including C#, F#, Java, JavaScript, Python, Typescript, and PowerShell. 

Want to get extended language support for languages like Go, and Rust? You can [Use Custom Handlers](zero2hero-func-03) to make this happen! But what if you want to have long-running functions, or create complex workflows involving more than one function? Read our [post on Durable Entities](zero2hero-func-02) to learn how you can _orchestrate_ this with Azure Functions.

Check out this recent [AskTheExpert](https://aka.ms/ATEonDemand) Q&A session with the Azure Functions team to get answers to popular community questions on Azure Functions features and usage.

<iframe src="https://learn-video.azurefd.net/vod/player?show=ask-the-expert&ep=serverless-september-azure-functions" width="600" height="400"></iframe>

## Microservices & Containers 

### Azure Container Apps

### Dapr

## Serverless Integrations

### Azure Logic Apps

### Azure Event Grid

## End-to-End Solutions

### App Development

### Developer Tools 

### Serverless Hacks

## What's Next

### Developer Calendar

### MSIgnite

### Cloud Skills