---
date: 2024-10-10T09:00
slug: deploy-application-with-azure-app-service-part-2
title: "1.4b Deploy application with Azure App Service Part 2"
authors: [30days]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 30-days-2024, 30-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In this section, we will deploy the back-end and middleware services using Azure App Service. " 
tags: [Build-Intelligent-Apps, 30-days-of-IA-2024, learn-live, demo-bytes, community-gallery, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/30-days-of-ia-2024/deploy-application-with-azure-app-service-part-2"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="**Build Intelligent Apps | AI Apps on Azure"/>
  <meta property="og:description" content="In this section, we will deploy the back-end and middleware services using Azure App Service."/>
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/>
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-azure-app-service-part-2" />
  <meta name="twitter:title" content="**Build Intelligent Apps | AI Apps on Azure" />
  <meta name="twitter:description" content="In this section, we will deploy the back-end and middleware services using Azure App Service." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@devanshidiaries" />
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-azure-app-service-part-2" />
</head>

<!-- End METADATA -->

## 4.b Deploying the Application Using Azure App Service

In the previous blog post, we configured [Azure API Management (APIM)](https://learn.microsoft.com/azure/api-management/api-management-key-concepts?ocid=biafy25h1_30daysofia_webpage_azuremktg) and [Azure Key Vault](https://learn.microsoft.com/azure/key-vault/general/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg) to secure the application and manage secrets. In this section, we will deploy the back-end and middleware services using [Azure App Service](https://learn.microsoft.com/azure/app-service/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg). We will leverage the [Azure Web App Maven Plugin](https://github.com/microsoft/azure-maven-plugins/blob/develop/azure-webapp-maven-plugin/README.md) for deployment. If the required App Service instances do not already exist (as discussed in blog **2.b**), the Maven plugin will automatically create them. Otherwise, it will simply deploy the application code to the existing instances.

Additionally, we will deploy the front-end ReactJS application separately to its own Azure App Service. This ensures a complete end-to-end deployment of all application components, enabling seamless communication between the front-end, back-end, and middleware services.
