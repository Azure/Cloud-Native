---
slug: serverless-containers
title: 4-1. Serverless Container Options
authors: [nitya]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [serverless, containers, decision-tree, aks, kubernetes, container-apps]
image: https://azure.github.io/Cloud-Native/img/og/30-16.png
description: "Explore serverless container options for development - including managed options like AKS and ACA" 
tags: [cloud-native, 30daysofcloudnative, zero-to-hero, ask-the-expert, azure-kubernetes-service]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/serverless-containers" />
  <meta name="twitter:title" 
    content="Serverless Container Options For Azure" />
  <meta name="twitter:description" 
    content="Explore serverless container options for development - including managed options like AKS and ACA" />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/img/og/30-16.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@nitya" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/serverless-containers" />
</head>

Welcome to `Week 4` of #CloudNativeNewYear!

This week we'll _go further with Cloud-native_ by exploring advanced topics and best practices for the Cloud-native practitioner. We'll start with an exploration of _Serverless Container Options_  - ranging from managed services to Azure Kubernetes Service (AKS) and Azure Container Apps (ACA), to options that allow more granular control!

## What We'll Cover
 * The Azure Compute Landscape
 * Serverless Compute on Azure
 * Comparing Container Options On Azure
 * Other Considerations
 * Exercise: Try this yourself!
 * Resources: For self-study!

![](./../../static/img/og/30-16.png)

---

We started this series with a review of core concepts:
 * From [Containers 101](/cnny-2023/containers-101), we learned that containerization improves portability, isolation, scalability, resource-efficiency and cost-effectiveness. But not all apps can be containerized.
 * From [Kubernetes 101](/cnny-2023/Kubernetes-101), we learned the value of orchestration systems that help automate deployment, scaling, and management, of containers. But Kubernetes usage can be complex.
 * In [Exploring Cloud Native Options](/cnny-2023/explore-options) we posed the key question: _to containerize, or not to containerize?_ - identifying the types of apps that fit into each category.

In general, containers are an ideal compute option for microservices, stateless apps, portable apps, and legacy apps. They **may be** a bad fit if the apps need access to low-level resources or system access - or maintain complex state across sessions. Like every decision, there are always tradeoffs.

In today's post, we look at the available container options on Azure with some focus on _serverless compute_ that supports containerized apps. Let's dive in.


## Azure Compute Landscape

When we talk about containers or serverless, we are broadly talking about **compute options** that support application hosting and management on Azure. Let's start with this decision tree, that visualizes the path you can take to [**choose an Azure compute service**](https://learn.microsoft.com/azure/architecture/guide/technology-choices/compute-decision-tree?WT.mc_id=javascript-84290-ninarasi) that is best for you.

![Compute Choices](https://learn.microsoft.com/azure/architecture/guide/technology-choices/images/compute-choices.png)

The article helps you understand your choices based on criteria like the _hosting model_ (IaaS, PaaS, FaaS), supported _features_ (Networking, DevOps, Scalability, Availability, Security), _architectural styles_ (Microservices, Event-driven, High-Performance Compute, Task Automation,Web-Queue Worker) etc. 

## Azure Serverless Compute

Now let's talk about **serverless** compute options. This just means that we delegate management of the infrastructure (for our code and containers) to the cloud provider - leaving us free to focus on application development and innovation.

Azure provides _fully-managed end-to-end serverless solutions_ with comprehensive resources, tools and environments - as [**detailed in this page**](https://azure.microsoft.com/solutions/serverless/#solutions?WT.mc_id=javascript-84290-ninarasi). For now, we focus on the _serverless compute_ segment which defines 4 main categories of applications:

 1. **Serverless Containerized Microservices** _using Azure Container Apps_. Code in your preferred language, exploit full Dapr support, scale easily with any KEDA-compliant trigger.
 2. **Serverless Application Environments** _using Azure App Service_. Suitable for hosting monolithic apps (vs. microservices) in a managed service, with built-in support for on-demand scaling.
 3. **Serverless Kubernetes** _using Azure Kubernetes Service (AKS)_. Spin up pods inside container instances and deploy Kubernetes-based applications with built-in KEDA-compliant autoscaling.
 4. **Serverless Functions** _using Azure Functions_. Execute "code at the granularity of functions" in your preferred language, and scale on demand with event-driven compute.

In the next section, we look at each of the identified Azure services in more detail, along with a comparison to _other_ container-friendly options identified earlier in the Azure Compute landscape.

## Azure Container Apps

[Azure Container Apps (ACA)](https://learn.microsoft.com/azure/container-apps/?WT.mc_id=javascript-84290-ninarasi) became generally available in May 2022 - providing customers with the ability to run **microservices and containerized applications on a serverless, consumption-based platform**. The figure below showcases the different types of applications that can be built with ACA.

![About ACA](https://techcommunity.microsoft.com/t5/image/serverpage/image-id/401522iACA9C8FFC49FE161/image-size/large?v=v2&px=999)

In the series so far, we've talked at length about Azure Kubernetes Service (AKS) - so how does that compare to ACA? In our #ServerlessSeptember series, you can find a post titled _[Go Cloud-native with Azure Container Apps](https://azure.github.io/Cloud-Native/blog/zero2hero-aca-01)_ that has a good comparison of the two. Broadly, Azure Container Apps **runs on Kubernetes** but abstracts away the complexity in a managed platform - while Azure Kubernetes Service provides you full access to the Kubernetes API for more granular control.

![Comparison](https://techcommunity.microsoft.com/t5/image/serverpage/image-id/401287i073CFBD50CB3A0B9/image-size/large?v=v2&px=999&WT.mc_id=javascript-74010-cxa)

Azure Container Apps is the **Platform As a Service (PaaS)** option for a  fully-managed serverless solution on Azure that is purpose-built for cloud-native microservices-based application workloads.

## Other Container Options

From earlier sections on the compute landscape, we know there are other container options on Azure, alongside ACA and AKS. Let's talk briefly about them here. 

 1. **[Azure Functions](https://learn.microsoft.com/azure/azure-functions/functions-overview?WT.mc_id=javascript-84290-ninarasi)** is the serverless _Functions-as-a-Service_ (FaaS) option, as opposed to ACA which supports a PaaS approach. It's optimized for running event-driven applications built at the granularity of _ephemeral functions_ that can be deployed as code or containers.
 2. **[Azure App Service](https://learn.microsoft.com/azure/app-service/?WT.mc_id=javascript-84290-ninarasi)** provides fully managed hosting for web applications that may be deployed using code or containers. It can be integrated with other services including Azure Container Apps and Azure Functions. It's optimized for deploying traditional web apps.
 3. **[Azure Kubernetes Service](https://learn.microsoft.com/azure/aks/intro-kubernetes?WT.mc_id=javascript-84290-ninarasi)** provides a fully managed Kubernetes option capable of running any Kubernetes workload, with  direct access to the Kubernetes API.
 4. **[Azure Container Instances](https://learn.microsoft.com/azure/container-instances/?WT.mc_id=javascript-84290-ninarasi)** provides a _single pod_ of Hyper-V isolated containers on demand, making them more of a low-level "building block" option compared to ACA.

There are also a few specialized options for awareness:

 1. **[Azure Spring Apps](https://learn.microsoft.com/azure/spring-apps/overview?WT.mc_id=javascript-84290-ninarasi)** is the optimized service for running Spring Boot, Spring Cloud or other Spring workloads on Azure,
 2. **[Azure Red Hat OpenShift](https://learn.microsoft.com/azure/openshift/intro-openshift?WT.mc_id=javascript-84290-ninarasi)** provides an integrated product and support experience for running Kubernetes-powered OpenShift on Azure.
 3. **[Azure Confidential Computing](https://learn.microsoft.com/azure/confidential-computing/choose-confidential-containers-offerings)** provides guidance (and a decision tree) to pick the right container for your data/code integrity and confidentiality needs.
 4. **[Kubernetes At The Edge](https://learn.microsoft.com/azure/architecture/operator-guides/aks/choose-kubernetes-edge-compute-option)** provides guidance for managed and bare-metal options that extend compute to edge devices.

Wow! We covered a lot today! Let's wrap this up with a look at resources for skilling up or learning more about Azure container options for your application development and deployment needs.

## Exercise

Want to get hands on learning related to these technologies?

:::tip TAKE THE CLOUD SKILLS CHALLENGE
[Register today](https://learn.microsoft.com/training/challenges?id=a0e385b9-f970-4182-b2e2-3b4619b6c356&WT.mc_id=javascript-84290-ninarasi) and level up your skills by completing free learning modules, while competing with your peers for a place on the leaderboards!
:::

## Resources

 * [Choose an Azure compute service](https://learn.microsoft.com/azure/architecture/guide/technology-choices/compute-decision-tree?WT.mc_id=javascript-84290-ninarasi)
 * [Serverless On Azure](https://azure.microsoft.com/solutions/serverless/#solutions?WT.mc_id=javascript-84290-ninarasi)
 * [Go Cloud-native with Azure Container Apps](https://azure.github.io/Cloud-Native/blog/zero2hero-aca-01?WT.mc_id=javascript-84290-ninarasi)
 * [Comparing Container Apps with other Azure container options](https://learn.microsoft.com/azure/container-apps/compare-options?WT.mc_id=javascript-84290-ninarasi)