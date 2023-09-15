---
date: 2023-09-18T09:00
slug: demystifying-intelligent-applications
title: 1-1. Demystifying Intelligent Applications
authors: [cnteam]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 30-days, enterprise apps, digital experiences, app modernization, serverless, ai apps]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "This article explores the concept of intelligent applications for readers, providing a clear understanding of the role of AI capabilities in modern applications." 
tags: [Fall-For-IA, 30-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head>
<meta property="og:url" content="https://azure.github.io/cloud-native/30daysofia/kick-off"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="**Fall For Intelligent Apps! 🍂| Build AI Apps On Azure"/>
<meta property="og:description" content="Explore the concept of intelligent applications for readers and gain a clear understanding of the role of AI capabilities in modern applications."/>
<meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/>
    <meta name="twitter:url" 
      content="https://azure.github.io/Cloud-Native/30daysofIA/demystifying-intelligent-applications" />
    <meta name="twitter:title" 
      content="**Fall For Intelligent Apps! 🍂 | Build AI Apps On Azure" />
    <meta name="twitter:description" 
      content="1-1. Explore the concept of intelligent applications for readers and gain a clear understanding of the role of AI capabilities in modern applications." />
    <meta name="twitter:image" 
      content="https://azure.github.io/Cloud-Native/img/ogImage.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" 
      content="@devanshidiaries" />
    <meta name="twitter:site" content="@AzureAdvocates" /> 
    <link rel="canonical" 
      href="https://azure.github.io/Cloud-Native/30daysofIA/demystifying-intelligent-applications" />
</head>

<!-- End METADATA -->

Let’s start with understanding the **power of intelligent applications**. 

## What We'll Cover:

 * What are intelligent applications?
 * Categories of Intelligent Apps
 * Breaking down the role of AI in intelligent apps

![image](../../static/img/fallforia/blogs/2023-09-18/blog-image1.png)

## Demystifying Intelligent Applications: Leveraging AI in App Development

Until recent years, when you heard the term “artificial intelligence” (AI), you might have pictured autonomous robots from sci-fi films. Now, perhaps your mind jumps to big data and machine learning (ML). Maybe you’re even thinking about the latest ChatGPT plugins and transformer architectures. Today, AI is more than these imaginations: it’s a reality increasingly woven into our day-to-day routines through intelligent applications.

Intelligent apps combine cloud-scale compute, data, and predictive or generative AI. These applications help you automate tasks and make data-driven decisions, aiding in leveraging business intelligence to gain meaningful, practical outcomes.  

For developers, the AI landscape isn’t an abstract complexity. It’s a real, tangible opportunity for evolving traditional applications, making them “intelligent,” and delivering more value to users. And with tools like Azure Kubernetes Service, Azure Cosmos DB, and [Azure AI Services](https://azure.microsoft.com/en-us/solutions/ai/), stepping into the world of intelligent apps isn’t a steep climb but a steady trek across a manageable learning curve.

## The Three Categories of Intelligent Applications

Before we start building, it’s critical to understand what makes an app “intelligent.” It’s not a universal definition so much as an identifier for apps that fall into one or more of the three primary categories:  

 * **Outcome-based** — This designation represents the broadest category of intelligent apps, whose principal value for users is the intelligent outcomes they provide. These apps process data to provide insightful results that enhance decision-making or help with tasks like trend prediction, resource management, and customer relationship management.

 * **Functionality-based** — This type of intelligent app takes AI integration a degree further, integrating AI as a function of the app to create or process its outputs, enhancing the app’s overall interactivity and usefulness.

 * **Feature-based** — This is the narrowest category, in which the app’s AI/ML component is one of its core features and primary selling points

Let’s dive more deeply into each category.

## Outcome-Based Apps: Intelligent Outcomes Drive Success

Outcome-based applications are all about the results provided to the user. They function beyond merely processing data to offer insightful outcomes that drive success.

Think of a personal fitness tracker app that uses AI to analyze the user’s activity and provides actionable recommendations for achieving a goal. This type of app not only tracks your steps, sleep patterns, and heart rate but uses that data to provide you with personalized health advice. It helps you make informed lifestyle choices — the “intelligent” outcome.

Another example is a social media marketing app that uses AI for time-saving data analysis, task automation, and trend prediction. AI-based sentiment analysis can gauge customer perception while natural language processing (NLP) accurately interprets customer inquiries. Task automation can schedule posts and automate responses to common customer queries, and trend forecasting helps model and predict customer behavior to further personalize targeted promotional efforts. Building this type of intelligence into your apps provides cost-effective, actionable insights that guide sales and marketing strategies.

## Functionality-Based Apps: AI-Driven Features Enhance User Experiences

As the name suggests, functionality-based applications integrate AI into how the app functions, but the end user drives the action and outcome. In this category of apps, AI takes a more active role in the user’s interaction by allowing them to use AI-created or processed output. These apps leverage AI technologies like [Azure AI Services](https://azure.microsoft.com/en-us/products/cognitive-services/%22%20/h%20HYPERLINK%20%22https:/azure.microsoft.com/en-us/products/cognitive-services/) for NLP, image recognition, and pattern recognition to improve user experience.

Consider a music app that generates personalized playlists based on your listening habits or your smartphone’s camera app that uses AI to recognize faces and optimize photo settings. Even more advanced are the language translation apps that translate text from one language to another and can even understand and maintain the context and subtleties of the conversation. They use NLP to accomplish these feats.

Similarly, consider the latest e-commerce apps, whose AI-driven functionalities enable customers to try on clothes virtually, significantly enhancing the online shopping experience.

## Feature-Based Apps: Integrating Advanced AI/ML Components

Finally, there are feature-based intelligent apps. These apps incorporate advanced AI/ML components like neural networks, internal large language models (LLMs), and sophisticated algorithms as core features for the user. In this type of application, AI is the primary feature for users to engage with and the primary selling point for the app.

Some examples of feature-based applications are chatbots and virtual agents built using [Azure Bot Service](https://azure.microsoft.com/en-ca/products/bot-services/). These robo-representatives use AI to provide more natural and human-like conversation, balancing superior efficiency with a friendlier, more personalized user experience. [The new Bing](https://www.microsoft.com/en-us/edge/features/the-new-bing) is a prime example of this implementation, integrating AI to give users a knowledgeable copilot for web searches.

Similarly, OpenAI’s [ChatGPT](https://openai.com/chatgpt) allows users access to its state-of-the-art language models available as Microsoft’s [Azure OpenAI Service](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service/). It leverages the power of the highly sophisticated GPT-3 LLM to perform tasks like drafting emails, writing code, answering general knowledge questions, translating between languages, and tutoring in numerous subjects.

These apps don’t just use AI to provide outputs or improve user experiences: They push the boundaries of what’s possible in app development by integrating AI/ML components.

:::info
**Register** for the live Q&A [Ask The Expert session](file:///C:\Users\sara\AppData\Local\Microsoft\Windows\INetCache\Content.Outlook\1AQKHL79\https\aka.ms\fallforIA\ATE) on **September 26** with the  Azure Functions product engineering team.  
:::

## Breaking Down the Role of AI in Intelligent Applications

Intelligent apps reflect the merging of traditional software design with the dynamic capabilities of AI. Let’s explore how AI integrates and amplifies these applications.

At its core, AI augments applications with the capacity to self-learn and self-improve. It allows you to create applications that predict, react, and adapt to a constantly changing environment. In the power grid management system for a major city, an AI-infused application can forecast power usage trends, react to anomalies, and adapt to sudden demand surges, ensuring optimal efficiency and preventing blackouts.

Even more, AI substantially aids in development tasks. For example, there’s [GitHub Copilot](https://github.com/features/copilot%22%20/h%20HYPERLINK%20%22https:/github.com/features/copilot), an AI-powered code assistant that offers suggestions based not only on syntax but on development best practices and the intent of the code. AI has evolved from a tool you use to build apps to a partner that helps in creating them.  

Using AI to build intelligent apps isn’t about throwing out what’s worked before. It’s about enhancing the components that have the most impact and achieve the best results. Incorporating AI in apps elevates their predictive abilities, streamlines complex tasks, and even aids in the development and creation process. When you build intelligent apps, you don’t just address current problems. You anticipate future challenges and craft solutions that adapt over time.

## Summary

As developers the power of AI is in our hands, and it’s our responsibility to harness its full potential. Each category tells the story of AI's transformative potential, from applications that deliver intelligent outcomes to those with AI capabilities to enrich the user experience and those pushing boundaries with advanced AI/ML technology.

Accessible and robust platforms like [Azure AI](https://www.microsoft.com/en-us/ai) can simplify the process of developing Intelligent Applications. Whether you’re refining an existing app or building a new one, just entering the world of AI, or already familiar with the landscape, take a moment to appreciate the potential that AI integration offers. You’re embracing this exciting frontier and shaping the future of app development.  

## Exercise

 * **Complete** the [Cloud Skills Challenge](https://aka.ms/fallforIA/csc) to build on your apps and AI skills. 
 * Watch [Episode 01](https://aka.ms/learnlive-contoso-app-deconstructed-Ep1) of the Serverless Edition Learn Live session to learn how to build an end-to-end intelligent app solution.