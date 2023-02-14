---
slug: building-with-draft
title: 4-2. Jumpstart your applications with Draft
authors: [cory]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [cloud-native, containers, decision-tree, kubernetes, serverless, microservices]
image: https://azure.github.io/Cloud-Native/img/og/30-17.png
description: Jump start your Kubernetes experience with Draft
tags: [cloud-native, 30daysofcloudnative, zero-to-hero, ask-the-expert, azure-kubernetes-service]

---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/building-with-draft" />
  <meta name="twitter:title" 
    content="Jumpstart your applications with Draft" />
  <meta name="twitter:description" 
    content="Jump start your Kubernetes experience with Draft" />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/img/og/30-17.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@cksimming" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/building-with-draft" />
</head>

It's the final week of #CloudNativeNewYear! This week we'll go further with Cloud-native by exploring advanced topics and best practices for the Cloud-native practitioner. In today's post, we will introduce you to the basics of the open-source project Draft and how it can be used to easily create and deploy applications to Kubernetes. 

:::tip It's not too late to sign up for and complete the [Cloud Skills Challenge](https://aka.ms/CNNY/Challenge)!

:::

---

## What We'll Cover
* What is Draft? 
* Draft basics
* Demo: Developing to AKS with Draft
* Resources

![](./../../static/img/cnny23/hero-banner.png)

--- 
## What is Draft? 

[Draft](https://github.com/azure/draft) is an open-source tool that can be used to streamline the development and deployment of applications on Kubernetes clusters. It provides a simple and easy-to-use workflow for creating and deploying applications, making it easier for developers to focus on writing code and building features, rather than worrying about the underlying infrastructure. This is great for users who are just getting started with Kubernetes, or those who are just looking to simplify their experience.

:::info New to Kubernetes?

Catch [A Quickstart Guide to Kubernetes Concepts](https://info.microsoft.com/ww-ondemand-a-quickstart-guide-to-kubernetes-concepts.html?lcid=en-us) on demand, now!

:::
---
## Draft basics

Draft streamlines Kubernetes development by taking a non-containerized application and generating the Dockerfiles, K8s manifests, Helm charts, and other artifacts associated with a containerized application. Draft can also create a GitHub Action workflow file to quickly build and deploy your application onto any Kubernetes cluster.

1.	**'draft create'':** Create a new Draft project by simply running the 'draft create' command - this command will walk you through a series of questions on your application specification (such as the application language) and create a Dockerfile, Helm char, and Kubernetes 
2.	**'draft generate-workflow'':** Automatically build out a GitHub Action using the 'draft generate-workflow' command
3.	**'draft setup-gh'':** If you are using Azure, use this command to automate the GitHub OIDC set up process to ensure that you will be able to deploy your application using your GitHub Action. 

At this point, you will have all the files needed to deploy your app onto a Kubernetes cluster (we told you it was easy!).

You can also use the **'draft info'** command if you are looking for information on supported languages and deployment types. Let's see it in action, shall we? 

---
# Developing to AKS with Draft

In this Microsoft Reactor session below, we'll briefly introduce Kubernetes and the Azure Kubernetes Service (AKS) and then demo how enable your applications for Kubernetes using the open-source tool Draft. We'll show how Draft can help you create the boilerplate code to containerize your applications and add routing and scaling behaviours. 

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=XDm2dqxGcvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
---
#Conclusion

Overall, Draft simplifies the process of building, deploying, and managing applications on Kubernetes, and can make the overall journey from [code to Kubernetes](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/code-to-cloud-with-azure-kubernetes-service-aks/ba-p/3669916_) significantly easier. 

___

## Resources
* **LAST WEEK** for the [Cloud Skills Challenge](https://aka.ms/Challenge)
* **Learning Resources**: [#30DaysOfCloudNative Collection](https://aka.ms/CNNY/collection)
* **Podcast:** [Containerize apps to AKS wwith Draft](https://www.youtube.com/watch?v=3RIulCcDet0)
* **Project:** [Get started with Draft](https://github.com/azure/draft)

---