---
slug: containers-101
title: 1-2. Containers 101
authors: [cnny]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [serverless, containers, decision-tree, aks, kubernetes, container-apps]
image: https://azure.github.io/Cloud-Native/assets/ideal-img/hero-banner.e0a8d29.1030.png
description: "Let's dive into the various technologies behind Cloud-native development, starting with Cotnainers, Container Images and Container Registry" 
tags: [cloud-native, 30daysofcloudnative, zero-to-hero, ask-the-expert, azure-kubernetes-service]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/containers-101" />
  <meta name="twitter:title" 
    content="Container 101" />
  <meta name="twitter:description" 
    content="Explore serverless container options for development - including managed options like AKS and ACA" />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/assets/ideal-img/hero-banner.e0a8d29.1030.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@nitya" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/containers-101" />
</head>

Welcome to `Week 1` of #CloudNativeNewYear!

This week we'll focus on FIX-ME.


## What We'll Cover
 * Section 1
 * Section 2
 * Section 3
 * Section 4
 * Exercise: Try this yourself!
 * Resources: For self-study!

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

**Start your free Azure Kubernetes Trial Today!!**: [aka.ms/TryAKS](https://aka.ms/tryAKS)

:::

## Introduction
Contianers have become very popular as a way of packaging applications. Contianers take the concept of x86 virtulization even further by virtualizng application processes in a Linux Operating System.

Containers are a way to package and distribute software applications in a way that makes them portable and easy to deploy. A container is a lightweight, stand-alone executable package that contains everything needed to run a piece of software, including the code, runtime, system tools, libraries, and settings. This makes it easy to move an application from one environment to another without having to worry about compatibility issues or missing dependencies.

## How do Containers Work?

A typical operating system assigns processes to applications running on them. These processes are assigned resources like compute, memory, access to storage, the file subsystem, access to Libraries etc.

At a given time, only a single application process can access and work on a file subsystem or can access resources from teh operating system. When a Container host is deployed on an operating system, it works at virtualizing the access to the OS components. This is done by providing a logical isloated group that can contain processes for a given application. The Container host then manages /schedules access of these groups to the host OS. This logical group is called the namespace. These namespaces are allocated compute resources by the docker host, they are called cgroups.

Together, the container host with the help of cgroups and namespaces can schedule multiple applications to access a single host OS resources.

Overall, this gives the illution of virtualzing the host OS, wherin each application gets its own OS. Although, a singel host OS is being shared by multiple applications.

## Why are Containers Becoming so Popular?

Containers are becoming increasingly popular in the software development industry because they provide a number of benefits over traditional virtualization methods. Some of these benefits include:

* **Portability**: Containers make it easy to move an application from one environment to another without having to worry about compatibility issues or missing dependencies.
* **Isolation**: Containers provide a level of isolation between the application and the host system, which means that the application running in the container cannot access the host system's resources.
* **Scalability**: Containers make it easy to scale an application up or down as needed, which is useful for applications that experience a lot of traffic or need to handle a lot of data.
* **Resource Efficiency**: Containers are more resource-efficient than traditional virtualization methods because they don't require a full operating system to be running on each virtual machine.
* **Cost-Effective**: Containers are more cost-effective than traditional virtualization methods because they don't require expensive hardware or licensing fees.
Conclusion

Containers are a powerful technology that allows developers to package and deploy applications in a portable and isolated environment. This technology is becoming increasingly popular in the world of software development and is being used by many companies and organizations to improve their application deployment and management processes. With the benefits of portability, isolation, scalability, resource efficiency, and cost-effectiveness, containers are definitely worth considering for your next application development project.

# Resources
[What are Containers](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-a-container/)
[Containerizing .NET Applications](https://learn.microsoft.com/dotnet/architecture/microservices/container-docker-introduction/)


# Learning Path
[Introduction to Docker Containers](https://learn.microsoft.com/training/modules/intro-to-docker-containers/)