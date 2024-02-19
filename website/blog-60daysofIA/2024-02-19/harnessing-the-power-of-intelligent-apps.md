---
date: 2024-02-19T09:00
slug: harnessing-the-power-of-intelligent-apps
title: "1. Harnessing the power of Intelligent Apps"
authors: [cnteam]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud-Scale, Data, AI, AI/ML, intelligent apps, cloud-native, 60-days, enterprise apps, digital experiences, app modernization]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "Combine the power of AI, cloud-scale data, and cloud-native app development to create highly differentiated digital experiences. Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure." 
tags: [Build-Intelligent-Apps, 60-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/60daysofia/harnessing-the-power-of-intelligent-apps"/>
  <meta property="og:type" content="website"/> 
  <meta property="og:title" content="Build Intelligent Apps | AI Apps on Azure"/> 
  <meta property="og:description" content="In this article, we’ll spotlight the success stories of some organizations that have leveraged Microsoft Azure to create and deploy intelligent apps in their workflows and products."/> 
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/> 
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/60daysofIA/harnessing-the-power-of-intelligent-apps" /> 
  <meta name="twitter:title" content="Build Intelligent Apps | AI Apps on Azure" />
 <meta name="twitter:description" content="In this article, we’ll spotlight the success stories of some organizations that have leveraged Microsoft Azure to create and deploy intelligent apps in their workflows and products." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" /> 
  <meta name="twitter:card" content="summary_large_image" /> 
  <meta name="twitter:creator" content="@devanshidiaries" /> 
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/60daysofIA/harnessing-the-power-of-intelligent-apps" /> 
</head> 

<!-- End METADATA -->

![intelligent apps on Azure](../../static/img/60-days-of-ia/blogs/2024-02-19/harnessing-the-power-of-intelligent-apps.jpg)

## Harnessing the Power of Intelligent Apps

Organizations are increasingly adopting advanced technologies to drive innovation and elevate operational efficiency. Intelligent apps—applications that integrate machine learning (ML), data analytics, and predictive or generative artificial intelligence (AI) to create differentiated digital experiences—are one way to achieve this. According to Gartner®, “by 2026, 30% of new applications will use AI to drive personalized adaptive user interfaces, up from less than 5% today”<sup>1</sup>.

Intelligent apps tend to fall into one of three categories:

* **Outcome-based apps** — These apps focus on user intent, predictions, and task automation to enable better decision-making.
* **Functionality-based apps** — These apps use ML, AI, or APIs to generate content. They examine user patterns to provide personalized recommendations or feedback.
* **Feature-based apps** — These apps have AI or ML components built in, which means they rely on neural networks and internal LLMs to run advanced algorithms.

Because Intelligent apps help organizations leverage business intelligence and other data to drive and automate organizational decision-making, they’re becoming a pivotal part of modern business strategies. In this article, we’ll spotlight the success stories of some organizations that have leveraged Microsoft Azure to create and deploy intelligent apps in their workflows and products.

___

## Intelligent Apps in Action

Intelligent Apps offer tangible business outcomes by automating complex processes, enhancing decision-making, and providing personalized experiences. By leveraging Azure services, the organizations discussed below have experienced a paradigm shift in their operations — and a boost in productivity and agility.

### How Intelligent Apps Power the Ultimate LEGO Experience

Denmark’s ultimate LEGO experience center, LEGO House, found challenges in maintaining its on-premises data center. To keep serving its custom-built digital experiences, the business upgraded its facilities with [Azure Kubernetes Service](https://azure.microsoft.com/en-us/products/kubernetes-service/?ocid=buildia24_60days_blogs) (AKS) in 2023.

This shift in approach to the cloud was a boon for responsiveness — LEGO House could take on visitor feedback to swiftly update experiences and develop new ones. The containerized, component-based setup on AKS also allowed LEGO House’s digital tech stack to become more scalable and flexible, transforming development efficiency and maintenance.

LEGO House continued its partnership with Microsoft to launch experiences like City Architect — powered by [Azure IoT Edge Device](https://azure.microsoft.com/en-us/products/iot-edge?ocid=buildia24_60days_blogs) — and Robo Lab. These innovations allowed visitors to interact with digitally projected landscapes and build robots, fostering principles of programming. AKS streamlines integration and supports element reuse, enhancing efficiency and creativity.

The results were remarkable — improved stability, higher uptime, and positive visitor feedback. Azure services made life easier for LEGO House’s developers and gave the entire LEGO ecosystem a strong foundation for growth. Specifically, by allowing the reuse of elements, AKS provides a common foundation for all LEGO experience builds. The organization’s next move is to rebuild the entire House on the [Azure AI](https://azure.microsoft.com/en-us/solutions/ai?ocid=buildia24_60days_blogs) platform and AKS. Read more about how LEGO [modernized interactive experiences across LEGO House with Azure Kubernetes Service](https://customers.microsoft.com/en-us/story/1703088157691224129-lego-house-azure-kubernetes-service-media-and-entertainment-denmark?ocid=buildia24_60days_blogs).

### Using Intelligent Apps to Make Cars Smarter With TomTom

TomTom’s navigation solutions have a proven track record of innovating the driving experience. Today, the company continues to adapt to drivers’ evolving needs. Using [Azure OpenAI Service](https://azure.microsoft.com/en-us/products/ai-services/openai-service/?ocid=buildia24_60days_blogs), [Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/introduction?ocid=buildia24_60days_blogs), and [AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/?ocid=buildia24_60days_blogs) to develop Digital Cockpit, TomTom has created smarter, AI-powered vehicles, facilitating huge advancements in user experience.

Digital Cockpit is an AI-driven, conversational in-car infotainment system that allows drivers to interact naturally with the vehicle. It can perform tasks like navigation, controlling onboard systems, and even managing work tasks during electric vehicle recharging.

Let’s look closer at the Azure services that drive Digital Cockpit:

* **Azure OpenAI Service** — The Azure OpenAI Service supports generative AI chatbots that provide natural-sounding voices and accurate transcription of spoken audio.
* **Azure Cosmos DB** — Azure Cosmos DB, a globally distributed database, retains customer conversations and preferences, allowing the system to continuously learn and tailor driver experiences.
* **AKS** — AKS accelerates service deployment and scaling, enhancing overall architecture efficiency.

Internally, integrating Azure services resulted in a significant improvement in TomTom’s development efficiency. For example, the team working on the prototype no longer required ten engineers — three team members were sufficient to complete the task. Additionally, response times decreased from 12 to 2.5 seconds, and the system demonstrated a 95 percent success rate in understanding complex driver requests. Read more about how [TomTom brings AI-powered, talking cars to life with Azure](https://customers.microsoft.com/en-us/story/1723808815413508250-tomtom-azure-netherlands?ocid=buildia24_60days_blogs).

:::info
Try the [Intelligent Apps Skills Challenges](https://aka.ms/intelligent-apps/apps-csc?ocid=buildia24_60days_blogs) to compete for the leaderboard and earn a Microsoft Learn Badge.
:::

### How Gluwa Leverages Intelligent Apps to Make Banking More Accessible

San Francisco-based startup Gluwa is on a mission to address the financial gap for the unbanked and underbanked, estimated at 1.4 billion people globally. Combining blockchain technology and Azure services, Gluwa connects investors with individuals in emerging markets. 

Gluwa harnesses the capabilities of various Azure services to power its blockchain services. [Azure Container Instances](https://azure.microsoft.com/en-us/products/container-instances?ocid=buildia24_60days_blogs) and AKS play a pivotal role in peer-to-peer discovery, fostering a dynamic and efficient environment. [Azure App Configuration](https://azure.microsoft.com/en-us/products/app-configuration?ocid=buildia24_60days_blogs) streamlines the centralization of app configurations, ensuring seamless control and adaptability.

For secure media delivery, Gluwa relies on the powerful combination of [Azure Content Delivery Network](https://azure.microsoft.com/en-us/products/cdn?ocid=buildia24_60days_blogs) and [Azure Storage](https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction?ocid=buildia24_60days_blogs), which bolsters reliability and safeguards sensitive data. Using [Azure DevOps](https://azure.microsoft.com/en-us/products/devops?ocid=buildia24_60days_blogs) to manage intricate lifecycle builds, Gluwa streamlined the development process. [Azure App Services](https://azure.microsoft.com/en-us/products/app-service?ocid=buildia24_60days_blogs) serve as the backbone for Gluwa’s APIs, complemented by [Azure Redis](https://azure.microsoft.com/en-us/products/cache?ocid=buildia24_60days_blogs) for optimal cache distribution, to enhance overall performance. Finally, [Azure SQL](https://azure.microsoft.com/en-us/products/azure-sql/database?ocid=buildia24_60days_blogs) and Azure Cosmos DB are scalable database solutions that support Gluwa’s infrastructure, ensuring adaptability and responsiveness in meeting evolving demands within the blockchain landscape.

Gluwa’s decentralized financial platform, Gluwa Invest, encourages stable coin investments, while the Creditcoin blockchain records loans, providing transparency and immutability. Together, they’ve facilitated nearly 4.27 million loan transactions, totaling over $79.7 million. Gluwa turned to Azure’s reliable, scalable cloud foundation to make these innovative and socially impactful initiatives a reality. Read more about how [Gluwa uses blockchain to help investors fund loans to the unbanked](https://customers.microsoft.com/en-us/story/1709609183358710412-gluwa-azure-banking-and-capital-markets-usa?ocid=buildia24_60days_blogs).

___

## Summary

Azure services have empowered organizations developing intelligent apps by offering scalability, flexibility, and seamless integration of ML, data analytics, and AI.

Azure’s impact extends beyond immediate efficiency gains, empowering developers to iterate, learn, and keep creating new experiences. Businesses that build with Azure services can streamline collaboration across ecosystems, unlocking collective vision and applied creativity.

Explore Microsoft [Customer Stories](https://customers.microsoft.com/en-us/home?sq=aks&ff=&p=1&so=story_publish_date%20desc&ocid=buildia24_60days_blogs) for deeper insights into transformative, AI-powered solutions. Finally, don’t forget to mark your calendar for [Azure Kubernetes Day](https://aka.ms/aks-day?ocid=buildia24_60days_blogs) at [KubeCon EU 2024](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/) to get the latest on cutting-edge developments in cloud technology.

<sup>1</sup> Source: [Gartner, Demand Grows for Intelligent Applications Powered by AI, September 27, 2023](https://www.gartner.com/en/articles/demand-grows-for-intelligent-applications-powered-by-ai). GARTNER is a registered trademark and service mark of Gartner, Inc. and/or its affiliates in the U.S. and internationally and is used herein with permission. All rights reserved.