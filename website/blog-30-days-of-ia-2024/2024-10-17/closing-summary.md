---
date: 2024-10-11T09:05
slug: closing-summary
title: "1.10 Closing Summary"
authors: [30days]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 30-days-2024, 30-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "Review what you’ve learned building the app, along with the benefits that apps like this one can bring to businesses." 
tags: [Build-Intelligent-Apps, 30-days-of-IA-2024, learn-live, demo-bytes, community-gallery, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---
<head>
<meta property="og:url" content="https://azure.github.io/cloud-native/30-days-of-ia-2024/closing-summary"/> 
<meta property="og:type" content="website"/> 
<meta property="og:title" content="Build Intelligent Apps | AI Apps on Azure"/> 
<meta property="og:description" content="Join us on a learning journey to build intelligent apps on Azure. Read all about the upcoming #BuildIntelligentApps initiative on this post!"/>
<meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/> 
<meta name="twitter:url" content="https://azure.github.io/Cloud-Native/30-days-of-ia-2024/closing-summary" /> 
<meta name="twitter:title" content="Build Intelligent Apps | AI Apps on Azure" /> 
<meta name="twitter:description" content="Join us on a learning journey to build intelligent apps on Azure. Read all about the upcoming #BuildIntelligentApps initiative on this post!" /> 
<meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" /> 
<meta name="twitter:card" content="summary_large_image" /> 
<meta name="twitter:creator" content="@devanshidiaries" /> 
<link rel="canonical" href="https://azure.github.io/Cloud-Native/30-days-of-ia-2024/closing-summary" /> 
</head> 

<!-- End METADATA -->

Review what you’ve learned building the app, along with the benefits that apps like this one can bring to businesses.  

## What we cover:

- How the app meets our scalability needs  
- How it addresses our performance needs  
- How it meets our security and compliance requirements  
- How our app’s AI integration improves business outcomes  
- How it optimizes costs  

## Introduction

In this blog series, we’ve walked through an example scenario—creating an AI-based content generation app to support the Best For You Organics Company’s marketing efforts. This app integrates various Azure services with AI models to offer a scalable, secure, and high-performance solution.  

In previous blog posts, we’ve examined our application architecture and covered the process of creating, deploying, and operating the application. In today’s post, the last in this series, we explore the **scalability**, **performance**, **security**, **cost optimization**, and **business impacts** of our example app, and we summarize the benefits and takeaways from the development process.  

## 1. Scalability

One of the key design goals of this application was scalability, ensuring that the system could handle increasing user traffic and larger datasets without degrading performance. Here are the key factors that allowed us to achieve that in our example app, along with the business impacts of these capabilities.  

### Key scalability factors

- [**Azure Kubernetes Service (AKS)**](https://learn.microsoft.com/azure/aks/what-is-aks?ocid=biafy25h1_30daysofia_webpage_azuremktg). If we deploy our three app layers to AKS, we can take advantage of built-in scaling options, like [horizontal pod autoscaling (HPA)](https://learn.microsoft.com/azure/aks/tutorial-kubernetes-scale?tabs=azure-cli?ocid=biafy25h1_30daysofia_webpage_azuremktg), allowing services to scale up based on CPU and memory usage.  
    - **Impact**. This ensures that as the demand increases, additional instances are spun up automatically, maintaining the app’s responsiveness.  
- [**Azure App Service**](https://learn.microsoft.com/azure/app-service/getting-started?ocid=biafy25h1_30daysofia_webpage_azuremktg). If our app is hosted on App Service, we can benefit from that service’s [autoscaling capabilities](https://learn.microsoft.com/azure/app-service/manage-scale-up?ocid=biafy25h1_30daysofia_webpage_azuremktg) to handle spikes in user traffic.  
    - **Impact**. During peak usage periods, the app can handle significant traffic, while maintaining fast response times.  
- **Caching for efficiency**. By using caching mechanisms at both the middleware and back-end levels, repeated queries can be served faster, reducing the load on back-end systems.  
    - **Impact**. Improves performance for common user queries and reduces API calls to services like Azure OpenAI Service.  

### Business impacts

- **High availability**. The app can handle thousands of users simultaneously, with no downtime.  
- **Cost-effective scaling**. The automatic scaling reduces operational costs by only allocating resources when demand increases.  

## 2. Performance

Ensuring fast response times was critical, especially since the application integrates with AI models and large databases. We applied several optimization techniques to our example app to meet performance goals.  

### Key performance enhancements

- **[Azure OpenAI](https://learn.microsoft.com/azure/ai-services/openai/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg) integration optimization**. The middleware integrates with the [OpenAI Service GPT-4o completion model](https://learn.microsoft.com/azure/ai-services/openai/concepts/models/gpt-4o-and-gpt-4-turbo?ocid=biafy25h1_30daysofia_webpage_azuremktg) and [embedding model](https://learn.microsoft.com/azure/ai-services/openai/concepts/models/embeddings-models?ocid=biafy25h1_30daysofia_webpage_azuremktg) to generate content and vectors. 
    - To optimize performance, we batch multiple requests when feasible and use **non-blocking async operations** to minimize delays.  
- **Data processing via Azure Cosmos DB**. The **back-end** service uses [Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/introduction?ocid=biafy25h1_30daysofia_webpage_azuremktg) for storing product and customer data. With [automatic partitioning](https://learn.microsoft.com/azure/cosmos-db/partitioning-overview?ocid=biafy25h1_30daysofia_webpage_azuremktg) and [global distribution](https://learn.microsoft.com/azure/cosmos-db/distribute-data-globally?ocid=biafy25h1_30daysofia_webpage_azuremktg), Azure Cosmos DB ensures low-latency data access, no matter where the users are located. 
- **API management**. Both the back-end and middleware services are exposed via [Azure API Management](https://learn.microsoft.com/azure/api-management/api-management-key-concepts?ocid=biafy25h1_30daysofia_webpage_azuremktg). API Management offers caching, load balancing, and rate-limiting features that can improve performance and manage high request volumes.  

### Business impacts

- **Faster query responses**. AI-generated content and product similarity results are delivered in seconds. 
- **Improved user experience**. The app offers a fluid, fast, and reliable user experience with no noticeable delays, helping to keep users engaged. 

## 3. Security and compliance

Security is essential when handling sensitive data, API keys, and AI-generated results. Our example app was designed with security-first principles, using Azure best practices.  

### Key security features

- **[Azure Key Vault](https://learn.microsoft.com/azure/key-vault/general/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg) integration**. Both **back-end** and **middleware** services retrieve secrets (API keys, database credentials, and more) securely from **Key Vault** using [managed identities](https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg). This eliminates hard-coded secrets and credentials in the code.  
- **Authentication and authorization**. The front-end ReactJS app uses [Microsoft Entra ID](https://learn.microsoft.com/entra/fundamentals/whatis?ocid=biafy25h1_30daysofia_webpage_azuremktg) for identity management and user authentication. Only authenticated users can access the app, helping to prevent unauthorized access.  
- **API key validation**. Both middleware and back-end APIs are secured using Azure API Management endpoints, implementing policies which require that requests pass valid API keys. This helps to ensure that only authorized services can call these APIs.  
- **API Cross-Origin Resource Sharing (CORS) limits**. The API Management endpoints also apply CORS policies that only permit requests from allowed domains. 
- **Rate limiting and throttling**. By configuring [rate limits and throttling](https://learn.microsoft.com/azure/api-management/api-management-sample-flexible-throttling?ocid=biafy25h1_30daysofia_webpage_azuremktg) in API Management, we enhanced the security and stability of the application, making sure that no single user can overwhelm the system. 

### Business impacts

- **Data privacy**. User data and API keys are kept secure using best-in-class Azure security features. 
- **Compliance with industry standards**. The app follows security and compliance regulations, making it suitable for enterprise-level use. 

## 4. AI and business outcomes

The incredible productivity increases that generative AI can offer are the core reasons to build our example app. The app takes advantage of the power of **Azure OpenAI** models to provide a unique business capability to the **Best For You Organics** Company’s marketing team, blending product recommendations with AI-generated content.  

### Key AI capabilities

- **Product vector search**. By transforming user queries into embedding vectors and retrieving similar products, the app delivers personalized product recommendations in real time. 
- **Content generation**. The **GPT-4o completion model** generates contextual, AI-based content tailored to user queries, offering value-added content for e-commerce, support, and content creation use cases. 

### Business impacts

- **Personalized user experience**. By combining AI-powered content with product recommendations, the app helps create personalized marketing content that can boost user engagement and conversions. 
- **Reduced manual work**. Automated content generation radically reduces the need for manual effort, making the app highly efficient for businesses in need of automated solutions. 

## 5. Cost efficiency

By making the most of the [Azure pay-as-you-go model](https://azure.microsoft.com/pricing/purchase-options/azure-account?ocid=biafy25h1_30daysofia_webpage_azuremktg), the application optimizes costs, while maintaining performance and scalability. 

### Key cost optimizations:

- **Managed services**. Many of the Azure services that we use in our app, like App Service, AKS, and Azure Cosmos DB, are platform as a service (PaaS) offerings. PaaS can save you money by eliminating infrastructure and maintenance expenses, enabling pay-as-you-go scalability, reducing development and operational costs, and providing built-in tools, security, and compliance features. 
- **Managed identities and Azure Key Vault**. These services help to secure access to credentials, without the need for costly, complex infrastructure. 
- **Autoscaling**. Both AKS and App Service offer autoscaling options that allow resources to be dynamically allocated based on actual usage, helping to save costs during periods of low demand. 
- **Serverless options for low-traffic scenarios**. For certain functionalities, the app could use serverless options, like Azure Functions, which only incur costs when executed. 

### Business impacts

- **Optimized spending**. The business can focus on scaling with demand, while keeping cloud spending under control. 
- **Better return on investment (ROI)**. The reduced operational overhead can increase ROI, especially for e-commerce or customer-facing businesses. 

## Summary

In this series, we’ve covered a lot, and we hope that you’ve found the experience useful. From handling user queries and product recommendations to generating intelligent content by using Azure OpenAI, our example app aims to show you the potential advantage that these new technologies offer—not just to marketing teams but also to any organization that needs to communicate effectively with customers. 
We hope that you can use this example app as a model for how modern cloud-native applications can combine **AI**, **secure data handling**, and **scalable infrastructure** to deliver powerful tools to you and your customers.
