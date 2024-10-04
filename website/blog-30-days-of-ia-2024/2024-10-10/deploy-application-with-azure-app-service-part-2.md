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

## What we will cover:

1. Preparing the Application for Deployment
2. Configuring Maven for Azure Web App Deployment
3. Deploying the Back-end and Middleware Services Using Maven
4. Deploying the Front-end Service
5. Verifying the Deployment

## Step 1: Preparing the Application for Deployment

Before deploying, ensure that your application is built and packaged correctly. This involves creating a WAR file for the back-end and middleware services.

1. **Build the Application:**
    - Use the Maven wrapper command to build the application:

      `./mvnw clean install`

![screenshot of Maven wrapper command](../../static/img/30-days-of-ia-2024/blogs/2024-10-10/1-4b-1.png)

2. **Package the Application:**
    - After building, package the application to create the necessary WAR file for deployment:

      `./mvnw clean package`
    - This will create a WAR file in the target directory of your project.

![screenshot of Maven clean package command](../../static/img/30-days-of-ia-2024/blogs/2024-10-10/1-4b-2.png)

:::info
Join the next snackable AI Demo Bytes to explore how to [apply auto-scaling and load testing to your AI applications](https://aka.ms/demo-bytes/ep6?ocid=biafy25h1_30daysofia_webpage_azuremktg).
:::

## Step 2: Configuring the Azure Web App Maven Plugin

1. **Update the pom.xml File:**
    - Open the `pom.xml` file for both the back-end and middleware services and add the following plugin configuration:

```
<plugin>
    <groupId>com.microsoft.azure</groupId>
    <artifactId>azure-webapp-maven-plugin</artifactId>
    <version>2.13.0</version>
    <!-- Refer: https://github.com/microsoft/azure-maven-plugins/wiki/Azure-Web-App:-Configuration-Details -->
    <configuration>
        <!-- Optional: If not mentioned, it will pick the default subscription -->
        <subscriptionId>03a4877f-5f78-4a6c-af93-d492e85d4e82</subscriptionId>
        <resourceGroup>ai-study-con-gen-1</resourceGroup>
        <appName>ai-study-backend-service</appName>
        <region>eastus</region>
        <pricingTier>B1</pricingTier>
        <runtime>
            <os>Linux</os>
            <javaVersion>Java 17</javaVersion>
            <webContainer>Tomcat 10.0</webContainer>
        </runtime>
        <deployment>
            <resources>
                <resource>
                    <directory>${project.basedir}/target</directory>
                    <includes>
                        <include>*.war</include>
                    </includes>
                </resource>
            </resources>
        </deployment>
    </configuration>
</plugin>
```
