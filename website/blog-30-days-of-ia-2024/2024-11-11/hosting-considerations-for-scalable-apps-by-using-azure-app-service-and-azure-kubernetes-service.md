---
date: 2024-11-11T09:01
slug: hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service
title: "3.4 Hosting considerations for scalable apps by using Azure App Service and Azure Kubernetes Service (AKS)"
authors: [30days]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 30-days-2024, 30-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In this blog series, we explore how exactly Microsoft developer tools can improve DevEx." 
tags: [Build-Intelligent-Apps, 30-days-of-IA-2024, learn-live, demo-bytes, community-gallery, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="**Build Intelligent Apps | AI Apps on Azure"/>
  <meta property="og:description" content="In this blog series, we explore how exactly Microsoft developer tools can improve DevEx."/>
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/>
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service" />
  <meta name="twitter:title" content="**Build Intelligent Apps | AI Apps on Azure" />
  <meta name="twitter:description" content="In this blog series, we explore how exactly Microsoft developer tools can improve DevEx." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@devanshidiaries" />
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service" />
</head>

<!-- End METADATA -->
Building and deploying an app to Azure for the first time is an exciting milestone for any project. However, when it comes to deploying your app in a production environment, you need ensure that your development process properly tests updates, while deploying new code securely and without downtime. You also need to make sure that your app is scalable and can efficiently handle changing levels of use over time. 

During Week 1 and 2 of this year’s 30 Days of IA series, you built an example content generation app for the Best For You Organics company. In this two-part blog, we explore what’s needed to move that app from development and to production at scale on Azure. As we walk through these topics, we cover considerations for security, compliance, availability, and resilience.  

In part 1, we focus on the technology and architecture decisions you need to consider when hosting an app in an Azure-based hosting environment. We cover using both Azure Kubernetes Service (AKS) and Azure App Service, and we focus specifically on considerations related to scalability for our three-tier example application. 

## Provisioning

Deciding on the deployment technology for your app is a fundamental decision. You need to choose and provision the right Azure services based on your app and your organization’s needs. 

1. **Choosing the right hosting service**: 

   - **[Azure Kubernetes Service (AKS)](https://learn.microsoft.com/azure/aks/?ocid=biafy25h1_30daysofia_webpage_azuremktg)**. If your application is containerized and requires orchestration, AKS is an excellent choice. It simplifies the deployment, management, and scaling of containerized applications using Kubernetes. AKS provides features like automated upgrades, self-healing, and easy scaling, making it ideal for complex applications that need to handle varying loads. 

   - **[Azure App Service](https://learn.microsoft.com/azure/app-service/?ocid=biafy25h1_30daysofia_webpage_azuremktg)**. For web apps, APIs, and mobile back ends, App Service offers a fully managed platform with built-in scaling and management capabilities. App Service is ideal when you need a fast, easy-to-use platform to host your app, with minimal management overhead. It supports multiple languages and frameworks, making it versatile for different types of applications. 

2. **Provisioning resources:**

   - **Using the [Azure CLI](https://learn.microsoft.com/cli/azure/?ocid=biafy25h1_30daysofia_webpage_azuremktg) or the [Azure portal](https://azure.microsoft.com/get-started/azure-portal/?ocid=biafy25h1_30daysofia_webpage_azuremktg):** You can create your AKS cluster or App Service plan by using the Azure CLI for automation or the Azure portal for a more visual approach. When provisioning, consider the expected load on your application to choose the appropriate virtual machine (VM) size, node count, or pricing tier. This helps ensure that your application has the necessary resources to perform efficiently without overprovisioning, which can lead to unnecessary costs. 

## Security and compliance

You also need to be sure that your app is secure and compliant with your security, privacy, and legal requirements. These considerations are especially crucial if your app deals with sensitive data or is operating in regulated industries. 

 

1. **Identity and access management:** 

   - **[Microsoft Entra ID](https://www.microsoft.com/security/business/identity-access/microsoft-entra-id?ocid=biafy25h1_30daysofia_webpage_azuremktg)**. Implement Microsoft Entra ID for robust authentication and authorization. It supports single sign-on (SSO), multifactor authentication, and conditional access policies, enhancing the security of your application. 

   - **[Azure role-based access control (RBAC)](https://learn.microsoft.com/azure/role-based-access-control/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg)**. Use RBAC to restrict access to resources based on user roles. This minimizes the risk of unauthorized access and helps ensure that users only have the permissions they need to perform their tasks. 

 

2. **Data encryption:**

   - **[Encryption at rest and in transit](https://learn.microsoft.com/azure/well-architected/security/encryption?ocid=biafy25h1_30daysofia_webpage_azuremktg)**. Enable encryption for data at rest and in transit, to protect sensitive information from unauthorized access. Azure provides built-in encryption mechanisms for various services, helping to ensure data security. 

   - **[Azure Key Vault](https://learn.microsoft.com/azure/key-vault/?ocid=biafy25h1_30daysofia_webpage_azuremktg)**. Use Azure Key Vault to manage and store secrets, keys, and certificates securely. Key Vault helps safeguard cryptographic keys and secrets used by cloud applications and services, helping to ensure that they’re protected and accessible only to authorized users. 

 

3. **Compliance:**

   - **[Industry standards and regulations](https://learn.microsoft.com/azure/compliance/?ocid=biafy25h1_30daysofia_webpage_azuremktg)**. Help ensure that your application complies with relevant industry standards and regulations, such as General Data Protection Regulation (GDPR), Health Insurance Portability and Accountability Act (HIPAA), and others. Compliance helps protect user data and builds trust with your customers. 

   - **[Azure Policy](https://learn.microsoft.com/azure/governance/policy/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg)**. Use Azure Policy to enforce compliance policies across your resources. Azure Policy helps you manage and prevent IT issues, with policy definitions that enforce rules and effects for your resources. 

## Availability and resilience

Your app is no good to anyone if it has crashed or the server hosting it is suffering a hardware failure. You need to be able to maximize uptime. High availability and resilience capabilities help ensure your application remains operational and responsive, even in the face of network outages or hardware failures. 

 

1. **High availability:**

   - **AKS**. Deploy your AKS cluster across multiple availability zones to enhance fault tolerance. Use Kubernetes features, like pod disruption budgets and replica sets, to maintain application availability during maintenance or unexpected failures. 

   - **App Service**. Deploy your application across multiple regions by using [Azure Traffic Manager](https://learn.microsoft.com/azure/traffic-manager/traffic-manager-overview?ocid=biafy25h1_30daysofia_webpage_azuremktg). This helps ensure that if one region goes down, traffic can be rerouted to another region, maintaining availability. Use deployment slots for staging and production environments to facilitate smooth rollouts and minimize downtime. 

 

2. **Resilience:**

   - **Health probes and auto-healing**. Implement health probes to monitor the health of your services and auto-healing mechanisms to automatically recover from failures. This helps ensure that your application can self-recover and continue to operate smoothly. 

   - **[Azure Monitor](https://learn.microsoft.com/azure/azure-monitor/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg) and [Azure Monitor Agent](https://learn.microsoft.com/azure/azure-monitor/agents/azure-monitor-agent-overview?ocid=biafy25h1_30daysofia_webpage_azuremktg)**. Use these tools to continuously monitor the health and performance of your application. They provide insights into application performance, detect anomalies, and help you proactively address issues before they impact users. 

## Scaling

An overloaded app is just as useless to your users as one that’s crashed or suffered a server outage. Scaling your hosting to meet demand allows your application to efficiently handle varying loads, supporting a seamless experience for users. 

 

1. **Web tier:**

   - **AKS**. Use Kubernetes Horizontal Pod Autoscaler to scale web pods based on CPU and memory usage. This allows your application to handle increased traffic by automatically adjusting the number of running pods. 

   - **App Service**. Enable autoscaling based on metrics like CPU usage, memory usage, or HTTP queue length. This helps ensure that your application can scale out to handle peak loads and scale in to save costs during low traffic periods. 

2. **Application tier**.

   - **AKS**. Deploy multiple instances of your application service, and use Kubernetes services for load balancing. This distributes traffic evenly across instances, supporting optimal performance. 

   - **App Service**. Use deployment slots to manage different versions of your application, and scale instances as needed. This allows you to test new versions in a staging environment before deploying them to production. 

3. **Database tier.** 

   - **Azure SQL Database or Azure Cosmos DB**. Use these services for their built-in scaling capabilities. Azure SQL Database offers features like elastic pools and managed instances, and Azure Cosmos DB provides global distribution and multi-model support. 

   - **Database replication and geo-redundancy**. Help ensure high availability and data integrity by enabling database replication and geo-redundancy. This protects your data from regional failures and helps ensure that it’s always available. 

## Performance and responsiveness

Don’t be reactive to performance issues. Look for ways to configure your app and hosting resources to optimize performance and responsiveness, giving your users a smooth and consistent experience. 

 

1. **Response optimization:** 

   - **Language models**. When integrating language models, optimize their responsiveness by minimizing the number of output tokens and setting appropriate values for parameters like ```max_tokens```. As discussed in [GenAI Solutions: Elevating Production Apps Performance Through Latency Optimization](https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/genai-solutions-elevating-production-apps-performance-through/ba-p/4049822?ocid=biafy25h1_30daysofia_webpage_azuremktg), this helps control the length of generated output and reduces latency. 

   - **Efficient workflow orchestration**. Design efficient workflows to minimize delays and help ensure that tasks are processed quickly. This involves optimizing the sequence and execution of tasks to reduce bottlenecks. 

 

2. **Latency improvement:** 

   - **Ancillary AI services**. Improve latency in ancillary AI services by optimizing their configurations and making sure that they are deployed in regions close to your users. This reduces the time it takes for data to travel between services and can improve overall responsiveness. 

   - **Azure Monitor and Application Insights**. Use these tools to monitor application performance and identify areas for improvement. They provide detailed metrics and insights into application behavior, helping you optimize performance. 

## Summary

In this blog, we covered guidance that can help you ensure that your content generation app is secure, compliant, highly available, and resilient when deployed on either AKS or Azure App Service.  

In part 2 of this blog series, we explore how to support these same goals with a focus on implementing DevOps practices, including monitoring and performance management. 
