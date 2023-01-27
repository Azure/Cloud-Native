---
slug: explore-options
title: 1-5. Exploring Cloud-Native Options
authors: [cory]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [cloud-native, containers, decision-tree, kubernetes, serverless, microservices]
image: https://azure.github.io/Cloud-Native/img/og/30-05.png
description: There are many cloud-native technologies - but which are the best fit for your projects? 
tags: [cloud-native, 30daysofcloudnative, zero-to-hero, ask-the-expert, azure-kubernetes-service]

---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/explore-options" />
  <meta name="twitter:title" 
    content="Serverless Container Options" />
  <meta name="twitter:description" 
    content="Explore technology and tooling options for building and deploying your Cloud-native solution" />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/img/og/30-05.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@cskimming" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/explore-options" />
</head>

We are excited to be wrapping up our first week of #CloudNativeNewYear! This week, we have tried to set the stage by covering the fundamentals of cloud-native practices and technologies, including primers on [containerization](https://azure.github.io/Cloud-Native/cnny-2023/containers-101/), [microservices](https://azure.github.io/Cloud-Native/cnny-2023/microservices-101), and [Kubernetes](https://azure.github.io/Cloud-Native/cnny-2023/Kubernetes-101).  

:::tip Don't forget to sign up for the the [Cloud Skills Challenge](https://aka.ms/CNNY/Challenge)!

:::

Today, we will do a brief recap of some of these technologies and provide some basic guidelines for when it is optimal to use each. 

---

## What We'll Cover
* To Containerize or not to Containerize?
* The power of Kubernetes
* Where does Serverless fit? 
* Resources
* What's coming next!

![](./../../static/img/cnny23/hero-banner.png)

---

:::info Just joining us now? Check out these other Week 1 posts:

 * [Cloud-native fundamentals](https://azure.github.io/Cloud-Native/cnny-2023/cloud-native-fundamentals)
 * [Containers 101](https://azure.github.io/Cloud-Native/cnny-2023/containers-101)
 * [Microservices 101](https://azure.github.io/Cloud-Native/cnny-2023/microservices-101)
 * [Kubernetes 101](https://azure.github.io/Cloud-Native/cnny-2023/Kubernetes-101)
 
:::

--- 
## To Containerize or not to Containerize? 

As mentioned in our Containers 101 post earlier this week, containers can provide several benefits over traditional virtualization methods, which has made them popular within the software development community. Containers provide a consistent and predictable runtime environment, which can help reduce the risk of compatibility issues and simplify the deployment process. Additionally, containers can improve resource efficiency by allowing multiple applications to run on the same host while isolating their dependencies. 

Some types of apps that are a particularly good fit for containerization include: 

1.	**Microservices:** Containers are particularly well-suited for microservices-based applications, as they can be used to isolate and deploy individual components of the system. This allows for more flexibility and scalability in the deployment process.
2.	**Stateless applications:** Applications that do not maintain state across multiple sessions, such as web applications, are well-suited for containers. Containers can be easily scaled up or down as needed and replaced with new instances, without losing data.
3.	**Portable applications:** Applications that need to be deployed in different environments, such as on-premises, in the cloud, or on edge devices, can benefit from containerization. The consistent and portable runtime environment of containers can make it easier to move the application between different environments.
4.	**Legacy applications:** Applications that are built using older technologies or that have compatibility issues can be containerized to run in an isolated environment, without impacting other applications or the host system.
5.	**Dev and testing environments:** Containerization can be used to create isolated development and testing environments, which can be easily created and destroyed as needed.

While there are many types of applications that can benefit from a containerized approach, it's worth noting that containerization is not **always** the best option, and it's important to weigh the benefits and trade-offs before deciding to containerize an application. Additionally, some types of applications may not be a good fit for containers including:

* Apps that require full access to host resources: Containers are isolated from the host system, so if an application needs direct access to hardware resources such as GPUs or specialized devices, it might not work well in a containerized environment.
* Apps that require low-level system access: If an application requires deep access to the underlying operating system, it may not be suitable for running in a container.
* Applications that have specific OS dependencies: Apps that have specific dependencies on a certain version of an operating system or libraries may not be able to run in a container.
* Stateful applications: Apps that maintain state across multiple sessions, such as databases, may not be well suited for containers. Containers are ephemeral by design, so the data stored inside a container may not persist between restarts.

The good news is that some of these limitations can be overcome with the use of specialized containerization technologies such as Kubernetes, and by carefully designing the architecture of the application. 

---
## The power of Kubernetes

Speaking of Kubernetes...

Kubernetes is a powerful tool for managing and deploying containerized applications in production environments, particularly for applications that need to scale, handle large numbers of requests, or run in multi-cloud or hybrid environments.

Kubernetes is well-suited for a wide variety of applications, but it is particularly well-suited for the following types of applications:

1.	**Microservices-based applications:** Kubernetes provides a powerful set of tools for managing and deploying microservices-based applications, making it easy to scale, update, and manage the individual components of the application.
2.	**Stateful applications:** Kubernetes provides support for stateful applications through the use of Persistent Volumes and StatefulSets, allowing for applications that need to maintain state across multiple instances. 
3.	**Large-scale, highly-available systems:** Kubernetes provides built-in support for scaling, self-healing, and rolling updates, making it an ideal choice for large-scale, highly-available systems that need to handle large numbers of users and requests.
4.	**Multi-cloud and hybrid environments:** Kubernetes can be used to deploy and manage applications across multiple cloud providers and on-premises environments, making it a good choice for organizations that want to take advantage of the benefits of multiple cloud providers or that need to deploy applications in a hybrid environment.

:::info New to Kubernetes?

Catch [A Quickstart Guide to Kubernetes Concepts](https://info.microsoft.com/ww-ondemand-a-quickstart-guide-to-kubernetes-concepts.html?lcid=en-us) on demand, now!

:::

---
# Where does Serverless fit in? 

Serverless is a cloud computing model where the cloud provider (like Azure) is responsible for executing a piece of code by dynamically allocating the resources. With serverless, you only pay for the exact amount of compute time that you use, rather than paying for a fixed amount of resources. This can lead to significant cost savings, particularly for applications with variable or unpredictable workloads.

Serverless is commonly used for building applications like web or mobile apps, IoT, data processing, and real-time streaming - apps where the workloads are variable and high scalability is required.
It's important to note that serverless is not a replacement for all types of workloads - it's best suited for stateless, short-lived and small-scale workloads.

For a detailed look into the world of Serverless and lots of great learning content, revisit [#30DaysofServerless](https://azure.github.io/Cloud-Native/serverless-september/30DaysOfServerless/).

---
## Resources
* **Register** for the [Cloud Skills Challenge](https://aka.ms/Challenge) - 30 days to complete it!
* **Learning Resources**: [#30DaysOfCloudNative Collection](https://aka.ms/CNNY/collection)
* **eBook:** [Cloud Native Infrastructure with Azure](https://azure.microsoft.com/resources/cloud-native-infrastructure-with-microsoft-azure/?WT.mc_id=javascript-74010-ninarasi)
* **eBook:** [Cloud-native Architecture Mapbook](https://azure.microsoft.com/resources/azure-cloud-native-architecture-mapbook/?WT.mc_id=javascript-74010-ninarasi)

---
## What's up next in #CloudNativeNewYear?

Week 1 has been all about the fundamentals of cloud-native. Next week, the team will be diving in to application deployment with Azure Kubernetes Service. Don't forget to [subscribe](https://azure.github.io/Cloud-Native/cnny-2023/rss.xml?WT.mc_id=javascript-74010-ninarasi) to the blog to get daily posts delivered directly to your favorite feed reader!

---