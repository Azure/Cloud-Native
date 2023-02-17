---
slug: cnny-wrap-up
title: 4-5. Cloud Native New Year Wrap Up
authors: [cory, steven, paul, josh, nitya, vinicius, jorge, devanshi ]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [cloud-native, containers, decision-tree, kubernetes, serverless, microservices]
image: https://azure.github.io/Cloud-Native/img/og/30-20.png
description: A review of all the great things we have learned during CNNY and how to keep the learning journey going!
tags: [cloud-native, 30daysofcloudnative, zero-to-hero, ask-the-expert, azure-kubernetes-service]

---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/cnny-wrap-up" />
  <meta name="twitter:title" 
    content="Cloud Native New Year Wrap Up" />
  <meta name="twitter:description" 
    content="A review of all the great things we have learned during CNNY and how to keep the learning journey going!" />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/img/og/30-20.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@cskimm" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/cnny-wrap-up" />
</head>

And that's a wrap on the inaugural #CloudNativeNewYear!Thank you for joining us to kick off the new year with this learning journey into cloud-native! In this final post of the 2023 celebration of all things cloud-native, we'll do two things:

* **Look Back** - with a quick retrospective of what was covered.
* **Look Ahead** - with resources and suggestions for how you can continue your skilling journey!

We appreciate your time and attention and we hope you found this curated learning valuable. Feedback and suggestions are always welcome. From our entire team, we wish you good luck with the learning journey - now go build some apps and share your knowledge! 🎉

![](./../../static/img/cnny23/hero-banner.png)

---

## What We'll Cover
* Cloud-native fundamentals
* Kubernetes fundamentals
* Bringing your applications to Kubernetes
* Go further with cloud-native
* Resources to keep the celebration going!

--- 
## Week 1: Cloud-native Fundamentals

In Week 1, we took a tour through the fundementals of cloud-native technologies, including a walkthrough of the core concepts of containers, microservices, and Kubernetes. 

* Jan 23 - **[Cloud-native Fundamentals](https://azure.github.io/Cloud-Native/cnny-2023/cloud-native-fundamentals)**: The answers to life and all the universe - what is cloud-native? What makes an application cloud-native? What are the benefits? (yes, we all know it's 42, but hey, gotta start somewhere!)
* Jan 24 - **[Containers 101](https://azure.github.io/Cloud-Native/cnny-2023/containers-101)**: Containers are an essential component of cloud-native development. In this intro post, we cover how containers work and why they have become so popular. 
* Jan 25 - **[Kubernetes 101](https://azure.github.io/Cloud-Native/cnny-2023/Kubernetes-101)**: Kuber-what-now? Learn the basics of Kubernetes and how it enables us to deploy and manage our applications effectively and consistently.

:::info  A QUICKSTART GUIDE TO KUBERNETES CONCEPTS

Missed it Live? Tune in to [A Quickstart Guide to Kubernetes Concepts](https://info.microsoft.com/ww-ondemand-a-quickstart-guide-to-kubernetes-concepts.html?lcid=en-us) on demand, now!

:::

* Jan 26 - **[Microservices 101](https://azure.github.io/Cloud-Native/cnny-2023/microservices-101)**: What is a microservices architecture and how can we go about designing one? 
* Jan 27 - **[Exploring your Cloud Native Options](https://azure.github.io/Cloud-Native/cnny-2023/explore-options)**: *Cloud-native*, while catchy, can be a very broad term. What technologies should you use? Learn some basic guidelines for when it is optimal to use different technologies for your project. 


---
## Week 2: Kubernetes Fundamentals

In Week 2, we took a deeper dive into the Fundamentals of Kubernetes. The posts and live demo from this week took us through how to build a simple application on Kubernetes, covering everything from deployment to networking and scaling. Note: for our samples and demo we have used Azure Kubernetes Service, but the principles apply to any Kubernetes!

* Jan 30 - **[Pods and Deployments](https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-1)**: how to use pods and deployments in Kubernetes. 
* Jan 31 - **[Services and Ingress](https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-2)**: how to use services and ingress and a walk through the steps of making our containers accessible internally and externally!
* Feb 1 - **[ConfigMaps and Secrets](https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-3)**: how to of passing configuration and secrets to our applications in Kubernetes with ConfigMaps and Secrets.
* Feb 2 - **[Volumes, Mounts, and Claims](https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-4)**: how to use persistent storage on Kubernetes (and ensure your data can survive container restarts!).
* Feb 3 - **[Scaling Pods and Nodes](https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-5)**: how to scale pods and nodes in our Kubernetes cluster.

<iframe width="560" height="315" src="https://www.youtube.com/embed/mLm9uskCrq0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


:::info  ASK THE EXPERTS: AZURE KUBERNETES SERVICE

Missed it Live? Tune in to [Ask the Expert with Azure Kubernetes Service](https://learn.microsoft.com/en-us/shows/ask-the-expert/cloud-native-new-year-azure-kubernetes-service) on demand, now!

:::

---
# Week 3: Bringing your applications to Kubernetes

So, you have learned how to build an application on Kubernetes. What about your existing applications? In Week 3, we explored how to take an existing application and set it up to run in Kubernetes:  

* Feb 6 - **[CI/CD](https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-1)**: learn how to get an existing application running in Kubernetes with a full pipeline in GitHub Actions.
* Feb 7 - **[Adapting Storage, Secrets, and Configuration](https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-2)**: how to evaluate our sample application's configuration, storage, and networking requirements and implement using Kubernetes.
* Feb 8 - **[Opening your Application with Ingress](https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-3)**: how to expose the eShopOnWeb app so that customers can reach it over the internet using a custom domain name and TLS.
* Feb 9 - **[Debugging and Instrumentation](https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-4)**: how to debug and instrument your application now that it is on Kubernetes. 
* Feb 10 - **[CI/CD Secure Supply Chain](https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-5)**: now that we have set up our application on Kubernetes, let's talk about container image signing and how to set up a secure supply change.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CMZ0XudQ4HA" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---
# Week 4: Go *Further* with Cloud-Native

This week we have gone further with Cloud-native by exploring advanced topics and best practices for the Cloud-native practitioner.

* Feb 13 - **[Serverless Container Options](https://azure.github.io/Cloud-Native/cnny-2023/serverless-containers)**: explore if you should go serverless, when that is a great option, and what your serverless compute options are on Azure.
* Feb 14 - **[Jumpstart your applications with Draft](https://azure.github.io/Cloud-Native/cnny-2023/building-with-draft)**: learn the basics of the open-source project Draft and how it can be used to easily create and deploy applications to Kubernetes.
* Feb 15 - **[Windows Containers](https://azure.github.io/Cloud-Native/cnny-2023/windows-containers)**: learn how you can use Windows containers on Kubernetes. 
* Feb 16 - **[Azure Kubernetes Service Add-ons and Extensions](https://azure.github.io/Cloud-Native/cnny-2023/aks-extensions-addons)**: explore add-ons and extensions available to Azure Kubernetes Service (AKS).

And today, February 17th, with this one post to rule (er, collect) them all! 
___

## Keep the Learning Going! 

Learning is great, so why stop here? We have a host of great resources and samples for you to continue your cloud-native journey with Azure below: 

* **Learning Paths:** [Cloud Native New Year Learning Path Colletion](https://learn.microsoft.com/en-us/users/nityan/collections/xz6ehr3z7o7e1q?WT.mc_id=javascript-74010-ninarasi)
* **Samples:** [Azure Samples on GitHub](https://github.com/Azure-Samples)
* **Hacks:** [What the Hack](https://microsoft.github.io/WhatTheHack/)
* **eBook:** [Cloud Native Infrastructure with Azure](https://azure.microsoft.com/resources/cloud-native-infrastructure-with-microsoft-azure/?WT.mc_id=javascript-74010-ninarasi)
* **eBook:** [Cloud-native Architecture Mapbook](https://azure.microsoft.com/resources/azure-cloud-native-architecture-mapbook/?WT.mc_id=javascript-74010-ninarasi)


---