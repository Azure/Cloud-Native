---
slug: Kubernetes-101
title: 1-3. Kubernetes 101
authors: [steven]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [serverless, containers, decision-tree, aks, kubernetes, container-apps]
image: ../../static/img/cnny23/kubernetes101-banner.png
description: "What is Kubernetes? And why is it so ubiquitous in Cloud-native solutions?" 
tags: [cloud-native, 30daysofcloudnative, zero-to-hero, ask-the-expert, azure-kubernetes-service]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/kubernetes-101" />
  <meta name="twitter:title" 
    content="Kubernetes 101" />
  <meta name="twitter:description" 
    content="What is Kubernetes? And why is it so ubiquitous in Cloud-native solutions?" />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/assets/ideal-img/hero-banner.e0a8d29.1030.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@stevenmurawski" />
  <meta name="twitter:site" content="@stevenmurawski" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/kubernetes-101" />
</head>

Welcome to `Day 3 of Week 1` of #CloudNativeNewYear!

This week we'll focus on what Kubernetes is.

## What We'll Cover
 * Introduction
 * What is Kubernetes? (Video)
 * How does Kubernetes Work? (Video)
 * Conclusion

![](./../../static/img/cnny23/hero-banner.png)

---

:::tip REGISTER & LEARN: KUBERNETES 101

Interested in a dive into Kubernetes and a chance to talk to experts? 

🎙: Join us **Jan 26 @1pm PST** 
[by registering here](https://info.microsoft.com/ww-landing-a-quickstart-guide-to-kubernetes-concepts.html?WT.mc_id=containers-84290-stmuraws)

Here's what you will learn:
 * Key concepts and core principles of Kubernetes.
 * How to deploy, scale and manage containerized workloads.
 * Live Demo of the concepts explained
 * How to get started with Azure Kubernetes Service for free.

**Start your free Azure Kubernetes Trial Today!!**: [aka.ms/TryAKS](https://aka.ms/TryAKS)

:::

## Introduction

Kubernetes is an open source container orchestration engine that can help with automated deployment, scaling, and management of our applications.

Kubernetes takes physical (or virtual) resources and provides a consistent API over them, bringing a consistency to the management and runtime experience for our applications.  Kubernetes provides us with a number of capabilities such as:

* Container scheduling
* Service discovery and load balancing
* Storage orchestration
* Automated rollouts and rollbacks
* Automatic bin packing
* Self-healing
* Secret and configuration management

We'll learn more about most of these topics as we progress through Cloud Native New Year.

## What is Kubernetes?

Let's hear from Brendan Burns, one of the founders of Kubernetes as to what Kubernetes actually is.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q1PcAawa4Bg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How does Kubernetes Work?

And Brendan shares a bit more with us about how Kubernetes works.

<iframe width="560" height="315" src="https://www.youtube.com/embed/daVUONZqn88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Conclusion

Kubernetes allows us to deploy and manage our applications effectively and consistently. 

By providing a consistent API across many of the concerns our applications have, like load balancing, networking, storage, and compute, Kubernetes improves both our ability to build and ship new software. 

There are standards for the applications to depend on for resources needed. Deployments, metrics, and logs are provided in a standardized fashion allowing more effecient operations across our application environments. 

And since Kubernetes is an open source platform, it can be found in just about every type of operating environment - cloud, virtual machines, physical hardware, shared data centers, even small devices like Rasberry Pi's!

Want to learn more?  [Join us for a webinar on Kubernetes Concepts (or catch the playback) on Thursday, January 26th at 1 PM PST](https://info.microsoft.com/ww-landing-a-quickstart-guide-to-kubernetes-concepts.html?WT.mc_id=containers-84290-stmuraws) and watch for the rest of this series right here!