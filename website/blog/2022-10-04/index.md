---
slug: serverless-status-post
title: Serverless September - In a Nutshell
authors: [devanshi]
draft: false
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
 * Developer Tools & #Hacktoberfest

![Banner for Serverless September](./img/banner.png)

---

## Building Cloud-native Apps

By definition, _Cloud-native technologies empower organizations to **build and run scalable applications** in modern, dynamic environments such as public, private, and hybrid clouds._ You can learn more about Cloud-native in Kendall Roden's #ServerlessSeptember post on [Going Cloud-native with Azure Container Apps](/blog/zero2hero-aca-01).

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

Want to get extended language support for languages like Go, and Rust? You can [Use Custom Handlers](/blog/zero2hero-func-03) to make this happen! But what if you want to have long-running functions, or create complex workflows involving more than one function? Read our [post on Durable Entities](/blog/zero2hero-func-02) to learn how you can _orchestrate_ this with Azure Functions.

Check out this recent [AskTheExpert](https://aka.ms/ATEonDemand) Q&A session with the Azure Functions team to get answers to popular community questions on Azure Functions features and usage.

<iframe src="https://learn-video.azurefd.net/vod/player?show=ask-the-expert&ep=serverless-september-azure-functions" width="600" height="400"></iframe>

## Microservices & Containers 

Functions-as-a-Service is an ideal first step towards serverless development. But Functions are just _one of the 5 pillars_ of [Cloud-native](https://azure.github.io/Cloud-Native/blog/zero2hero-aca-01). This week we'll look at two of the other pillars: **microservices** and **containers** - with specific focus on two core technologies: Azure Container Apps and Dapr (Distributed Application Runtime).

In this 6-part series of posts, we walk through each technology independently, before looking at the value of building Azure Container Apps **with Dapr**.

 * In [Hello Container Apps](https://azure.github.io/Cloud-Native/blog/09-aca-fundamentals) we learned core concepts & deployed our first ACA.
 * In [Microservices Communication](https://azure.github.io/Cloud-Native/blog/microservices-10) we learned about ACA environments and virtual networks, and how microservices communicate in ACA with a hands-on tutorial.
 * In [Scaling Your Container Apps](https://azure.github.io/Cloud-Native/blog/11-scaling-container-apps) we learned about KEDA (Kubernetes Event-Driven Autoscaler) and configuring ACA for autoscaling with KEDA-compliant triggers.
 * In [Build with Dapr](https://azure.github.io/Cloud-Native/blog/12-build-with-dapr) we introduced the Distributed Application Runtime (Dapr), exploring its Building Block APIs and sidecar architecture for working with ACA.
 * In [Secure ACA Access](https://azure.github.io/Cloud-Native/blog/13-aca-managed-id) we learned how to secure ACA access to external services with - and without - Dapr, covering Secret Stores and Managed Identity.
 * Finally, [Build ACA with Dapr](https://azure.github.io/Cloud-Native/blog/14-dapr-aca-quickstart) tied it all together with a enterprise app scenario where an orders processor (ACA) uses Dapr APIs (PubSub, State Management) to receive and store order messages from Azure Service Bus.


![Build ACA with Dapr](https://github.com/Azure/Cloud-Native/blob/41cc0890acd204a9069836dfcc5727c48d5fca97/website/blog/2022-09-14/img/ACA-Tutorial-AsyncComm-0922.jpg)

Check out this recent [AskTheExpert](https://aka.ms/ATEonDemand) Q&A session with the Azure Container Apps team for answers to popular community questions on core features and usage.

<iframe src="https://learn-video.azurefd.net/vod/player?show=ask-the-expert&ep=serverless-september-azure-container-apps" width="640" height="360"></iframe>


## Serverless Integrations

In the first half of the month we looked at _compute_ resources for building and deploying serverless applications. In the second half, we look at _integration_ tools and resources that automate developer workflows to streamline the end-to-end developer experience.

In Azure, this is enabled by services like [Azure Logic Apps](https://learn.microsoft.com/azure/logic-apps/logic-apps-overview) and [Azure Event Grid](https://learn.microsoft.com/azure/event-grid/overview). Azure Logic Apps provides a visual designer to _create and automate workflows_ with little or no code involved. Azure Event Grid provides a _highly-scable event broker_ with support for pub/sub communications to drive async event-driven architectures. 

 * In [Tracking Weather Data Changes With Logic Apps](https://azure.github.io/Cloud-Native/blog/17-integrate-cosmosdb) we look at how you can use Logic Apps to  integrate the MSN weather service with Azure CosmosDB, allowing automated collection of weather data on changes.
 * In [Teach the Cloud to Read & Categorize Mail](https://azure.github.io/Cloud-Native/blog/18-cloudmail) we take it a step further, using Logic Apps to automate a workflow that includes a Computer Vision service to "read" images and store the results to CosmosDB.
 * In [Integrate with Microsoft Graph](https://azure.github.io/Cloud-Native/blog/20-events-graph) we explore a multi-cloud scenario (Azure + M365) where change notifications from Microsoft Graph can be integrated using Logic Apps and Event Hubs to power an onboarding workflow.
 * In [Cloud Events with Event Grid](https://azure.github.io/Cloud-Native/blog/21-cloudevents-via-event-grid) we learn about the CloudEvents specification (for consistently describing event data) - and learn how Event Grid brokers events in this format. Azure Logic Apps can be an Event handler (subscriber) that uses the event to trigger an automated workflow on receipt.

 ![Azure Event Grid And Logic Apps](https://azure.github.io/Cloud-Native/assets/images/21-cloudevents-via-event-grid-01-694e11ff4422f7f4f28ae03f08580170.png)

Want to explore other such integrations? Browse [Azure Architectures](https://learn.microsoft.com/azure/architecture/browse/?filter-products=Logic%20A&products=azure-event-grid%2Cazure-logic-apps) and filter by selected Azure services for more real-world scenarios.

---

## End-to-End Solutions

We've covered serverless _compute_ solutions (for building your serverless applications) and serverless _integration_ services to automate end-to-end workflows in synchronous or asynchronous event-driven architectures. In this final week, we want to leave you with a sense of _end-to-end_ development tools and use cases that can be enabled by Serverless on Azure. Here are some  key examples:

| Article | Description |
|:---|:---|
|![](https://azure.github.io/Cloud-Native/assets/images/architecture-a2d16c0719ab5f90fe9e4b66a40198bc.png)| In [**this tutorial**](https://azure.github.io/Cloud-Native/blog/24-aca-dotnet), you'll learn to deploy a containerized ASP.NET Core 6.0 application to Azure Container Apps - with a Blazor front-end and two Web API projects|
|![Deploy Java containers to cloud](https://azure.github.io/Cloud-Native/assets/images/acr-portal-01-56ad80e74d4597e32bb2bb534148d10d.png) | In [**this tutorial**](https://azure.github.io/Cloud-Native/blog/24-aca-dotnet) you learn to build and deploy a Java application running on Spring Boot, by publishing it in a container to Azure Container Registry, then deploying to Azure Container Apps,, from ACR, via the Azure Portal.|
|![**Where am I? My GPS Location with Serverless Power Platform Custom Connector**](https://azure.github.io/Cloud-Native/assets/images/28-serverless-power-platform-custom-connector-01-d6fac44727880dd526e03e2010938f0a.png) | In [**this step-by-step tutorial**](https://azure.github.io/Cloud-Native/blog/28-where-am-i) you learn to integrate a serverless application (built on Azure Functions and OpenAPI) with Power Platforms custom connectors via Azure API Management (API-M).This pattern can empower a new ecosystem of _fusion apps_ for cases like inventory management.|
| ![](https://microsoft.github.io/WhatTheHack/015-Serverless/images/preferred-solution.png) | And in our [**Serverless Hacks**](https://microsoft.github.io/WhatTheHack/015-Serverless/images/preferred-solution.png) initiative, we walked through an 8-step hack to build a serverless tollbooth. Check out [**this 12-part video walkthrough**](https://aka.ms/serverless-september/videos) of a reference solution using .NET.  |

## Developer Tools

But wait - there's more. Those are a sample of the end-to-end application scenarios that are built on serverless on Azure. But what about the **developer experience**? In [**this article**](https://azure.github.io/Cloud-Native/blog/29-azure-developer-cli), we say hello to the _Azure Developer CLI_ - an open-source tool that streamlines your develop-deploy workflow, with simple commands that map to core stages of your development journey. **Go from code to cloud with one CLI**

![](https://azure.github.io/Cloud-Native/assets/images/azd-workflow-163d61cf5c6aa44a23dd4dda9858a296.png)

And **watch this space for more such tutorials and content through October**, including a special #Hacktoberfest focused initiative to encourage and support first-time contributors to open-source. Here's a sneak peek at the project we plan to share - the new [awesome-azd templates](https://aka.ms/awesome-azd) gallery.

![](./../2022-10-06/img/gallery.gif)

---

## Join us at Microsoft Ignite!

Want to continue your learning journey, and learn about what's next for Serverless on Azure? 
**Microsoft Ignite** happens Oct 12-14 this year and has multiple sessions on relevant technologies and tools. Check out the [Session Catalog](https://ignite.microsoft.com/en-US/sessions?q=cloud%2520native%2520architectures&f=%255B%257B%2522name%2522%253A%2522Breakout%2522%252C%2522facetName%2522%253A%2522sessionType%2522%257D%255D&s=%257B%2522name%2522%253A%2522translate.refine.label.sort.relevance%2522%252C%2522type%2522%253A0%257D&t=%257B%2522from%2522%253A%25222022-10-12T00%253A00%253A00-07%253A00%2522%252C%2522to%2522%253A%25222022-10-13T23%253A59%253A59-07%253A00%2522%257D&g=%255B%257B%2522name%2522%253A%2522live-now-and-upcoming%2522%252C%2522enabled%2522%253Afalse%257D%255Dl) and [register here](https://ignite.microsoft.com/en-US/sessions/8950b2b1-62eb-48f9-90ef-5ad779ce8e22?source=sessions) to attend online. 
