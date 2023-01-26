---
slug: microservices-101
title: 1-4. Microservices 101
authors: [josh]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [serverless, containers, decision-tree, aks, kubernetes, container-apps, microservices]
image: https://azure.github.io/Cloud-Native/img/og/30-04.png
description: "What are Microservices? Why are they a core pillar for Cloud-native and how does Kubernetes help in their deployment?" 
tags: [cloud-native, 30daysofcloudnative, zero-to-hero, ask-the-expert, azure-kubernetes-service, microservices]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/microservices-101" />
  <meta name="twitter:title" 
    content="Microservices 101" />
  <meta name="twitter:description" 
    content="What are Microservices? Why are they a core pillar for Cloud-native and how does Kubernetes help in their deployment?" />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/img/og/30-04.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@joshduffney" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/microservices-101" />
</head>

Welcome to `Day 4 of Week 1` of #CloudNativeNewYear!

This week we'll focus on advanced topics and best practices for Cloud-Native practitioners, kicking off with this post on _Serverless Container Options_ with Azure. We'll look at technologies, tools and best practices that range from managed services like Azure Kubernetes Service, to options allowing finer granularity of control and oversight.


## What We'll Cover
 * What is Microservice Architecture? 
 * How do you design a Microservice? 
 * What challenges do Microservices introduce?
 * Conclusion
 * Resources

![](./../../static/img/cnny23/hero-banner.png)

---

Microservices are a modern way of designing and building software that increases deployment velocity by decomposing an application into small autonomous services that can be deployed independently. 

By deploying loosely coupled microservices your applications can be developed, deployed, and scaled independently. Because each service is independent, it can be updated or replaced without having to worry about the impact on the rest of the application. This means that if a bug is found in one service, it can be fixed without having to redeploy the entire application. All of which gives an organization the ability to deliver value to their customers faster. 

In this article, we will explore the basics of microservices architecture, its benefits and challenges, and how it can help improve the development, deployment, and maintenance of software applications. 

## What is Microservice Architecture? 

Before explaining what Microservice architecture is, it’s important to understand what problems microservices aim to address. 

Traditional software development is centered around building monolithic applications. Monolithic applications are built as a single, large codebase. Meaning your code is tightly coupled causing the monolithic app to suffer from the following: 

**Too much Complexity:** Monolithic applications can become complex and difficult to understand and maintain as they grow. This can make it hard to identify and fix bugs and add new features. 

**Difficult to Scale:** Monolithic applications can be difficult to scale as they often have a single point of failure, which can cause the whole application to crash if a service fails. 

**Slow Deployment:** Deploying a monolithic application can be risky and time-consuming, as a small change in one part of the codebase can affect the entire application. 

Microservice architecture (often called microservices) is an architecture style that addresses the challenges created by Monolithic applications. Microservices architecture is a way of designing and building software applications as a collection of small, independent services that communicate with each other through APIs. This allows for faster development and deployment cycles, as well as easier scaling and maintenance than is possible with a monolithic application. 

## How do you design a Microservice? 

Building applications with Microservices architecture requires a different approach. Microservices architecture focuses on business capabilities rather than technical layers, such as data access or messaging. Doing so requires that you shift your focus away from the technical stack and model your applications based upon the various domains that exist within the business. 

Domain-driven design (DDD) is a way to design software by focusing on the business needs. You can use Domain-driven design as a framework that guides the development of well-designed microservices by building services that encapsulate knowledge in each domain and abstract that knowledge from clients. 

In Domain-driven design you start by modeling the business domain and creating a domain model. A domain model is an abstract model of the business model that distills and organizes a domain of knowledge and provides a common language for developers and domain experts. It’s the resulting domain model that microservices a best suited to be built around because it helps establish a well-defined boundary between external systems and other internal applications. 

In short, before you begin designing microservices, start by mapping the functions of the business and their connections to create a domain model for the microservice(s) to be built around. 

 
## What challenges do Microservices introduce? 

Microservices solve a lot of problems and have several advantages, but the grass isn’t always greener on the other side. 

One of the key challenges of microservices is managing communication between services. Because services are independent, they need to communicate with each other through APIs. This can be complex and difficult to manage, especially as the number of services grows. To address this challenge, it is important to have a clear API design, with well-defined inputs and outputs for each service. It is also important to have a system for managing and monitoring communication between services, to ensure that everything is running smoothly.  

Another challenge of microservices is managing the deployment and scaling of services. Because each service is independent, it needs to be deployed and scaled separately from the rest of the application. This can be complex and difficult to manage, especially as the number of services grows. To address this challenge, it is important to have a clear and consistent deployment process, with well-defined steps for deploying and scaling each service. Furthermore, it is advisable to host them on a system with self-healing capabilities to reduce operational burden. 

It is also important to have a system for monitoring and managing the deployment and scaling of services, to ensure optimal performance.  

Each of these challenges has created fertile ground for tooling and process that exists in the cloud-native ecosystem. Kubernetes, CI CD, and other DevOps practices are part of the package of adopting the microservices architecture. 

## Conclusion 

In summary, microservices architecture focuses on software applications as a collection of small, independent services that communicate with each other over well-defined APIs. 

The main advantages of microservices include:
* increased flexibility and scalability per microservice, 
* efficient resource utilization (with help from a container orchestrator like Kubernetes), 
* and faster development cycles. 

Continue following along with this series to see how you can use Kubernetes to help adopt microservices patterns in your own environments!

## Resources 

* [Microservice Applications](https://azure.microsoft.com/solutions/microservice-applications?WT.mc_id=containers-84290-stmuraws)
* [Microservices architecture design - Azure Architecture Center | Microsoft Learn](https://learn.microsoft.com/azure/architecture/microservices?WT.mc_id=containers-84290-stmuraws)
* [Design a microservices architecture - Azure Architecture Center | Microsoft Learn](https://learn.microsoft.com/azure/architecture/microservices/design?WT.mc_id=containers-84290-stmuraws)
* [Domain analysis for microservices - Azure Architecture Center | Microsoft Learn](https://learn.microsoft.com/azure/architecture/microservices/model/domain-analysis?WT.mc_id=containers-84290-stmuraws)
