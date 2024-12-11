---
slug: zero2hero-aca-01
title: 🚀 | Go Cloud-Native with ACA
authors: [kendall]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [azure, functions, containerapps, serverless, concepts]
image: ./img/banner.png
description: "In this article, we discuss how Azure Container Apps is purpose-built to support Cloud-Native applications." 
tags: [serverless-september, zero-to-hero, azure-functions, azure-container-apps, dapr]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/blog/zero2hero-aca-01" />
  <meta name="twitter:title" 
    content="#ZeroToHero: Go Cloud-Native With Azure Container Apps" />
  <meta name="twitter:description" 
    content="#ZeroToHero: Go Cloud-Native With Azure Container Apps" />
  <meta name="twitter:image"
    content="https://azure.github.io/Cloud-Native/img/banners/serverless-zero2hero.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://techcommunity.microsoft.com/t5/apps-on-azure-blog/go-cloud-native-with-azure-container-apps/ba-p/3616407" />
</head>

---

Welcome to `Day 6` of #30DaysOfServerless!

Today, we have a special set of posts from our [Zero To Hero 🚀](/serverless-september/ZeroToHero) initiative, featuring blog posts authored by our Product Engineering teams for #ServerlessSeptember. _Posts were originally published on the [Apps on Azure](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/go-cloud-native-with-azure-container-apps/ba-p/3616407?WT.mc_id=javascript-99907-cxa) blog on Microsoft Tech Community._

---

## What We'll Cover
 * Defining Cloud-Native
 * Introduction to Azure Container Apps
 * Dapr In Azure Container Apps
 * Conclusion

![Kendall Roden explores Azure Container Apps for microservices, APIs, and background processing. Start building cloud-native apps.](./img/zero-to-hero-kendall.png)

---


## Defining Cloud-Native 
 
While I’m positive I’m not the first person to ask this, I think it’s an appropriate way for us to kick off this article: **“How many developers does it take to define Cloud-Native?”** I hope you aren’t waiting for a punch line because I seriously want to know your thoughts (drop your perspectives in the comments..) but if you ask me, the limit does not exist!

A quick online search of the topic returns a laundry list of articles, e-books, twitter threads, etc. all trying to nail down the one true definition. While diving into the rabbit hole of Cloud-Native, you will inevitably find yourself on the Cloud-Native Computing Foundation (CNCF) site. The CNCF is part of the Linux Foundation and aims to make "Cloud-Native computing ubiquitous" through deep open source project and community involvement. The CNCF has also published arguably the most popularized definition of Cloud-Native which begins with the following statement:

> “Cloud-Native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds."

Over the past four years, my day-to-day work has been driven primarily by the surging demand for application containerization and the drastic adoption of Kubernetes as the de-facto container orchestrator. Customers are eager to learn and leverage patterns, practices and technologies that enable building "loosely coupled systems that are resilient, manageable, and observable". Enterprise developers at these organizations are being tasked with rapidly deploying event-driven, horizontally-scalable, polyglot services via repeatable, code-to-cloud pipelines.

While building Cloud-Native solutions can enable rapid innovation, the transition to adopting a Cloud-Native architectural approach comes with a steep learning curve and a new set of considerations. In a document published by Microsoft called What is Cloud-Native?, there are a few key areas highlighted to aid customers in the adoption of best practices for building modern, portable applications which I will summarize below:
 
**Cloud infrastructure**

 * Cloud-Native applications leverage cloud infrastructure and make use of Platform-as-a-service offerings
 * Cloud-Native applications depend on highly-elastic infrastructure with automatic scaling, self-healing, and monitoring capabilities
 
**Modern application design**
 * Cloud-Native applications should be constructed using principles outlined in the 12 factor methodology
 
**Microservices**
 * Cloud-Native applications are typically composed of microservices where each core function, or service, is built and deployed independently
 
**Containers**

 * Cloud-Native applications are typically deployed using containers as a packaging mechanism where an application's code and dependencies are bundled together for consistency of deployment
 * Cloud-Native applications leverage container orchestration technologies- primarily Kubernetes- for achieving capabilities such as workload scheduling, self-healing, auto-scale, etc.
 
**Backing services**
 * Cloud-Native applications are ideally stateless workloads which retrieve and store data in data stores external to the application hosting infrastructure. Cloud providers like Azure provide an array of backing data services which can be securely accessed from application code and provide capabilities for ensuring application data is highly-available
 
**Automation**
* Cloud-Native solutions should use deployment automation for backing cloud infrastructure via versioned, parameterized Infrastructure as Code (IaC) templates which provide a consistent, repeatable process for provisioning cloud resources.
* Cloud-Native solutions should make use of modern CI/CD practices and pipelines to ensure successful, reliable infrastructure and application deployment.
 

## Azure Container Apps
 
In many of the conversations I've had with customers that involve talk of Kubernetes and containers, the topics of cost-optimization, security, networking, and reducing infrastructure and operations inevitably arise. I personally have yet to meet with any customers eager to have their developers get more involved with infrastructure concerns.

One of my former colleagues, Jeff Hollan, made a statement while appearing on a 2019 episode of The Cloud-Native Show where he shared his perspective on Cloud-Native:

> "When I think about Cloud-Native... it's writing applications in a way where you are specifically thinking about the benefits the cloud can provide... to me, serverless is the perfect realization of that because the only reason you can write serverless applications is because the cloud exists."

I must say that I agree with Jeff's perspective. In addition to optimizing development practices for the Cloud-Native world, reducing infrastructure exposure and operations is equally as important to many organizations and can be achieved as a result of cloud platform innovation.

In May of 2022, Microsoft announced the general availability of Azure Container Apps. Azure Container Apps provides customers with the ability to run microservices and containerized applications on a serverless, consumption-based platform. 

For those interested in taking advantage of the open source ecosystem while reaping the benefits of a managed platform experience, Container Apps run on Kubernetes and provides a set of managed open source projects embedded directly into the platform including the Kubernetes Event Driven Autoscaler (KEDA), the Distributed Application Runtime (Dapr) and Envoy.

![Azure Kubernetes Service vs. Azure Container Apps](https://techcommunity.microsoft.com/t5/image/serverpage/image-id/401287i073CFBD50CB3A0B9/image-size/large?v=v2&px=999&WT.mc_id=javascript-99907-cxa)

Container apps provides other Cloud-Native features and capabilities in addition to those above including, but not limited to: 

 * [Revisions](https://docs.microsoft.com/azure/container-apps/application-lifecycle-management?WT.mc_id=javascript-99907-cxa): immutable snapshot representative of a specific version of a container app which can take advantage of the [managed traffic splitting capability](https://docs.microsoft.com/azure/container-apps/revisions-manage?tabs=bash&WT.mc_id=javascript-99907-cxa) 
 * [Health probes](https://docs.microsoft.com/azure/container-apps/health-probes?tabs=arm-template?WT.mc_id=javascript-99907-cxa): Based on [Kubernetes health probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/?WT.mc_id=javascript-99907-cxa) with support for Readiness, Liveness and Startup 
 * [Built-in authentication](https://docs.microsoft.com/azure/container-apps/authentication-openid?WT.mc_id=javascript-99907-cxa)
 * [Managed Identity](https://docs.microsoft.com/azure/container-apps/managed-identity?tabs=portal%2Cdotnet&WT.mc_id=javascript-99907-cxa)
 * [Custom domain names and certificates](https://docs.microsoft.com/azure/container-apps/custom-domains-certificates?WT.mc_id=javascript-99907-cxa)
 * [Virtual Network injection](https://docs.microsoft.com/azure/container-apps/networking?WT.mc_id=javascript-99907-cxa)
 * [Platform observability](https://docs.microsoft.com/azure/container-apps/observability?tabs=bash&WT.mc_id=javascript-99907-cxa) : log streaming, console connect, Azure monitor 
 
The ability to dynamically scale and support growing numbers of users, events, and requests is one of the core requirements for most Cloud-Native, distributed applications. Azure Container Apps is purpose-built with this and other Cloud-Native tenants in mind. 

![What can you build with Azure Container Apps?](https://techcommunity.microsoft.com/t5/image/serverpage/image-id/401522iACA9C8FFC49FE161/image-size/large?v=v2&px=999)

## Dapr in Azure Container Apps
 
As a quick personal note before we dive into this section I will say I am a bit bias about Dapr. When Dapr was first released, I had an opportunity to immediately get involved and became an early advocate for the project. It is created by developers for developers, and solves tangible problems customers architecting distributed systems face:

:::info HOW DO I
 * integrate with external systems that my app has to react and respond to?
 * create event driven apps which reliably send events from one service to another?
 * observe the calls and events between my services to diagnose issues in production?
 * access secrets securely from within my application?
 * discover other services and call methods on them?
 * prevent committing to a technology early and have the flexibility to swap out an alternative based on project or environment changes?
:::
 
While existing solutions were in the market which could be used to address some of the concerns above, there was not a lightweight, CNCF-backed project which could provide a unified approach to solve the more fundamental ask from customers: "How do I make it easy for developers to build microservices based on Cloud-Native best practices?"


:::success Enter Dapr!

The [Distributed Application Runtime (Dapr)](https://dapr.io/) provides APIs that simplify microservice connectivity. Whether your communication pattern is service to service invocation or pub/sub messaging, Dapr helps you write resilient and secured microservices. By letting Dapr’s sidecar take care of the complex challenges such as service discovery, message broker integration, encryption, observability, and secret management, you can focus on business logic and keep your code simple."
:::

The Container Apps platform provides a managed and supported Dapr integration which eliminates the need for deploying and managing the Dapr OSS project. In addition to providing managed upgrades, the platform also exposes a simplified Dapr interaction model to increase developer productivity and reduce the friction required to leverage Dapr capabilities. While the Dapr integration makes it easier for customers to adopt Cloud-Native best practices in container apps it is not required to make use of the container apps platform. 

![Image on Dapr](https://techcommunity.microsoft.com/t5/image/serverpage/image-id/401284iA1296A6F33D804B2/image-size/large?v=v2&px=999)

For additional insight into the dapr integration visit aka.ms/aca-dapr. 

 

## Conclusion
 
Backed by and integrated with powerful Cloud-Native technologies, Azure Container Apps strives to make developers productive, while reducing the operational overhead and learning curve that typically accompanies adopting a cloud-native strategy. 

If you are interested in building resilient, portable and highly-scalable apps visit [Azure Container Apps | Microsoft Azure](https://azure.microsoft.com/services/container-apps/) today!


:::info ASK THE EXPERT: LIVE Q&A
The Azure Container Apps team will answer questions live on **September 29**. 
 * [Sign up to attend](https://reactor.microsoft.com/reactor/events/17004/?WT.mc_id=javascript-99907-ninarasi) for live Q&A with the team
 * [submit your questions](https://github.com/Azure/Cloud-Native/issues/new?assignees=&labels=ask+the+expert&template=---ask-the-expert-.md&title=%5BAsk+The+Expert%5D++) ahead of time, for prioritization.
:::