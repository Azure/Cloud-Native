---
slug: containers-101
title: 1-2. Containers 101
authors: [steven, paul, josh]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [serverless, containers, decision-tree, aks, kubernetes, container-apps]
image: https://azure.github.io/Cloud-Native/img/og/30-02.png
description: "Let's dive into the various technologies behind Cloud Native development, starting with Containers." 
tags: [cloud-native, 30daysofcloudnative, zero-to-hero, ask-the-expert, azure-kubernetes-service, containers]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/containers-101" />
  <meta name="twitter:title" 
    content="Container 101" />
  <meta name="twitter:description" 
    content="Let's dive into the various technologies behind Cloud Native development, starting with Containers." />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/img/og/30-02.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@stevenmurawski" />
  <meta name="twitter:site" content="@stevenmurawski" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/containers-101" />
</head>

Welcome to `Day 2 of Week 1` of #CloudNativeNewYear!

Today, we'll focus on building an understanding of containers.

## What We'll Cover
 * Introduction
 * How do Containers Work?
 * Why are Containers Becoming so Popular?
 * Conclusion
 * Resources
 * Learning Path

![](./../../static/img/cnny23/hero-banner.png)
---

:::tip REGISTER & LEARN: KUBERNETES 101

Interested in a dive into Kubernetes and a chance to talk to experts? 

🎙: Join us **Jan 26 @1pm PST** 
[by registering here](https://info.microsoft.com/ww-landing-a-quickstart-guide-to-kubernetes-concepts.html?lcid=en-us)

Here's what you will learn:
 * Key concepts and core principles of Kubernetes.
 * How to deploy, scale and manage containerized workloads.
 * Live Demo of the concepts explained
 * How to get started with Azure Kubernetes Service for free.

**Start your free Azure Kubernetes Trial Today!!**: [aka.ms/TryAKS](https://aka.ms/TryAKS)

:::

## Introduction 

 

In the beginning, we deployed our applications onto physical servers.  We only had a certain number of those servers, so often they hosted multiple applications.  This led to some problems when those applications shared dependencies.  Upgrading one application could break another application on the same server.  

Enter virtualization.  Virtualization allowed us to run our applications in an isolated operating system instance.  This removed much of the risk of updating shared dependencies.  However, it increased our overhead since we had to run a full operating system for each application environment. 

To address the challenges created by virtualization, containerization was created to improve isolation without duplicating kernel level resources. Containers provide efficient and consistent deployment and runtime experiences for our applications and have become very popular as a way of packaging and distributing applications. 

 
 
## How do Containers Work? 

Containers build on two capabilities in the Linux operating system, namespaces and cgroups.  These constructs allow the operating system to provide isolation to a process or group of processes, keeping their access to filesystem resources separate and providing controls on resource utilization.  This, combined with tooling to help package, deploy, and run container images has led to their popularity in today’s operating environment.  This provides us our isolation without the overhead of additional operating system resources. 

When a container host is deployed on an operating system, it works at scheduling the access to the OS (operating systems) components. This is done by providing a logical isolated group that can contain processes for a given application, called a namespace. The container host then manages /schedules access from the namespace to the host OS.  The container host then uses cgroups to allocate compute resources. Together, the container host with the help of cgroups and namespaces can schedule multiple applications to access host OS resources.  

Overall, this gives the illusion of virtualizing the host OS, where each application gets its own OS. In actuality, all the applications are running on the same operating system and sharing the same kernel as the container host. 
 
## Why is Containerization so Popular? 
 
Containers are popular in the software development industry because they provide several benefits over traditional virtualization methods. Some of these benefits include: 
 
* **Portability**: Containers make it easy to move an application from one environment to another without having to worry about compatibility issues or missing dependencies. 
* **Isolation**: Containers provide a level of isolation between the application and the host system, which means that the application running in the container cannot access the host system's resources. 
* **Scalability**: Containers make it easy to scale an application up or down as needed, which is useful for applications that experience a lot of traffic or need to handle a lot of data. 
* **Resource Efficiency**: Containers are more resource-efficient than traditional virtualization methods because they don't require a full operating system to be running on each virtual machine. 
* **Cost-Effective**: Containers are more cost-effective than traditional virtualization methods because they don't require expensive hardware or licensing fees. 
 

## Conclusion 
 
Containers are a powerful technology that allows developers to package and deploy applications in a portable and isolated environment. This technology is becoming increasingly popular in the world of software development and is being used by many companies and organizations to improve their application deployment and management processes. With the benefits of portability, isolation, scalability, resource efficiency, and cost-effectiveness, containers are definitely worth considering for your next application development project. 

 
Containerizing applications is a key step in modernizing them, and there are many other patterns that can be adopted to achieve cloud-native architectures, including using serverless platforms, Kubernetes, and implementing DevOps practices. 

## Resources 

* [What are Containers](https://azure.microsoft.com/resources/cloud-computing-dictionary/what-is-a-container/?WT.mc_id=containers-84290-stmuraws) 
* [Containerizing .NET Applications](https://learn.microsoft.com/dotnet/architecture/microservices/container-docker-introduction/?WT.mc_id=containers-84290-stmuraws) 
 
 
## Learning Path 

* [Introduction to Docker Containers](https://learn.microsoft.com/training/modules/intro-to-docker-containers/?WT.mc_id=containers-84290-stmuraws)