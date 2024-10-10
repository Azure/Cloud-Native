---
date: 2024-10-11T09:01
slug: post-production-monitoring-scaling-and-optimization
title: "1.7 Post-production monitoring, scaling, and optimization"
authors: [30days]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 30-days-2024, 30-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "Learn how to make sure that your deployed apps are healthy and meeting user demand." 
tags: [Build-Intelligent-Apps, 30-days-of-IA-2024, learn-live, demo-bytes, community-gallery, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/post-production-monitoring-scaling-and-optimization"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="**Build Intelligent Apps | AI Apps on Azure"/>
  <meta property="og:description" content="Learn how to make sure that your deployed apps are healthy and meeting user demand."/>
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/>
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/post-production-monitoring-scaling-and-optimization" />
  <meta name="twitter:title" content="**Build Intelligent Apps | AI Apps on Azure" />
  <meta name="twitter:description" content="Learn how to make sure that your deployed apps are healthy and meeting user demand." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@devanshidiaries" />
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/30-days-of-ia-2024/post-production-monitoring-scaling-and-optimization" />
</head>

<!-- End METADATA -->

Learn how to make sure that your deployed apps are healthy and meeting user demand.

## What we cover:

- Monitoring your application health
- Scaling your application
- Setting up alerts and notifications
- Implementing continuous optimization

## Introduction

In our previous blog posts in this series, we walked through building an example application and deploying it to production by using both **[Azure App Service](https://learn.microsoft.com/azure/app-service/?ocid=biafy25h1_30daysofia_webpage_azuremktg)** and **[Azure Kubernetes Service (AKS)](https://learn.microsoft.com/azure/aks/what-is-aks?ocid=biafy25h1_30daysofia_webpage_azuremktg)** environments. However, the journey doesn’t end after your app is live. The post-production phase of deployment is critical to ensuring that your app is running efficiently and is prepared to scale as user demand increases. 

This post guides you through the essential steps for monitoring, scaling, and optimizing applications deployed on App Service and AKS. We cover setting up monitoring, explore scaling strategies, and discuss setting up alerts and notifications systems that help you stay on top of issues and allow your app to remain reliable and performant.

:::info
Join Demo Bytes: [GenAI Gateway Capabilities in Azure API Management](https://aka.ms/demo-bytes/ep14?ocid=biafy25h1_30daysofia_webpage_azuremktg) to learn how Azure API Management can be configured for authentication and authorization of OpenAI endpoints.
:::

## Step 1. Monitor application health

You need to know whether your app is running correctly and that users can access it successfully. Monitoring tools provide real-time insights, issue and outage detection, and ongoing logging and analysis capabilities. They allow you to gain insight into your app’s performance, availability, and reliability, and they help you to perform proactive troubleshooting and optimization.

### 1.1 Set up Azure Monitor and Application Insights

- **[Azure Monitor](https://learn.microsoft.com/azure/azure-monitor/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg)** provides a full-stack monitoring solution that collects and analyzes telemetry data from your apps and services. To enable Azure Monitor:
  1. **For Azure App Service.** In the Azure portal, go to your App Service. Under **Monitoring**, enable **Application Insights**.
  2. **For AKS.** Enable **Container Insights** to monitor cluster performance, including CPU, memory, and node availability.
- **Application Insights** can be integrated with both App Service and AKS to track performance, response times, request rates, and failures. Key features include:
  - **Live metrics.** Real-time performance monitoring.
  - **Custom dashboards.** Create custom dashboards for specific metrics (for example, API response times, database latency).

  ![Azure Application Insights setup page for ai-study-backend-service, with options to enable monitoring and view connected resources.](../../static/img/30-days-of-ia-2024/blogs/2024-10-11/1-7-1.png)

