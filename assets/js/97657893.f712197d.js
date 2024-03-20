"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75531],{50394:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var o=i(85893),s=i(11151);const n={date:"2024-03-15T09:00",slug:"deploying-your-copilot-on-azure",title:"4.5 Deploying Your Copilot On Azure",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","ai-studio","automation","accelerator"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"You've build a RAG-based copilot application on Azure AI with Prompt flow. Now it's time to deploy it, test it, and integrated it into your chat UI experience. Let's dive in!",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},a=void 0,r={permalink:"/Cloud-Native/60DaysOfIA/deploying-your-copilot-on-azure",source:"@site/blog-60daysofIA/2024-03-15/build-a-copilot-on-azure-code-first-with-prompt-flow.md",title:"4.5 Deploying Your Copilot On Azure",description:"You've build a RAG-based copilot application on Azure AI with Prompt flow. Now it's time to deploy it, test it, and integrated it into your chat UI experience. Let's dive in!",date:"2024-03-15T09:00:00.000Z",formattedDate:"March 15, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/60DaysOfIA/tags/build-intelligent-apps"},{label:"60-days-of-IA",permalink:"/Cloud-Native/60DaysOfIA/tags/60-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/60DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/60DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/60DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/60DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/60DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/60DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/60DaysOfIA/tags/github-actions"}],readingTime:11.62,hasTruncateMarker:!1,authors:[{name:"#60Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"cnteam"}],frontMatter:{date:"2024-03-15T09:00",slug:"deploying-your-copilot-on-azure",title:"4.5 Deploying Your Copilot On Azure",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","ai-studio","automation","accelerator"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"You've build a RAG-based copilot application on Azure AI with Prompt flow. Now it's time to deploy it, test it, and integrated it into your chat UI experience. Let's dive in!",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,nextItem:{title:"4.4 Build a Copilot on Azure Code-First with Langchain",permalink:"/Cloud-Native/60DaysOfIA/build-a-copilot-on-azure-code-first-with-langchain"}},l={authorsImageUrls:[void 0]},c=[{value:"What You&#39;ll Learn In This Post",id:"what-youll-learn-in-this-post",level:2},{value:"1. Revisiting Contoso Chat",id:"1-revisiting-contoso-chat",level:2},{value:"2. Deploy your chat AI app",id:"2-deploy-your-chat-ai-app",level:2},{value:"3. Deploy your chat UI app",id:"3-deploy-your-chat-ui-app",level:2},{value:"4. Automate your chat AI deployment",id:"4-automate-your-chat-ai-deployment",level:2},{value:"5. Enterprise Architecture Options",id:"5-enterprise-architecture-options",level:2},{value:"6. Responsible AI In Practice",id:"6-responsible-ai-in-practice",level:2},{value:"6.1 Principles of Responsible AI",id:"61-principles-of-responsible-ai",level:3},{value:"6.2 Implications for Generative AI",id:"62-implications-for-generative-ai",level:3},{value:"6.3 Identify Potential Harms",id:"63-identify-potential-harms",level:3},{value:"6.4 Measure Presence of Harms",id:"64-measure-presence-of-harms",level:3},{value:"6.5 Content Safety for Mitigation",id:"65-content-safety-for-mitigation",level:3},{value:"7. Exercise:",id:"7-exercise",level:2},{value:"8. Resources",id:"8-resources",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n,{children:[(0,o.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/60daysofia/deploying-your-copilot-on-azure"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,o.jsx)("meta",{property:"og:description",content:"You've build a RAG-based copilot application on Azure AI with Prompt flow. Now it's time to deploy it, test it, and integrated it into your chat UI experience. Let's dive in!"}),(0,o.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,o.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/60daysofIA/deploying-your-copilot-on-azure"}),(0,o.jsx)("meta",{name:"twitter:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,o.jsx)("meta",{name:"twitter:description",content:"You've build a RAG-based copilot application on Azure AI with Prompt flow. Now it's time to deploy it, test it, and integrated it into your chat UI experience. Let's dive in!"}),(0,o.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,o.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/60daysofIA/deploying-your-copilot-on-azure"})]}),"\n",(0,o.jsxs)(t.p,{children:["Welcome to ",(0,o.jsx)(t.code,{children:"Day 5\ufe0f\u20e3"})," of our journey ",(0,o.jsx)(t.strong,{children:"Building An AI App End-to-End On Azure!"}),". It's time to wrap-up the week with a look at two key topics - ",(0,o.jsx)(t.em,{children:"deployment"})," and ",(0,o.jsx)(t.em,{children:"responsible AI"}),"! Ready? Let's go!"]}),"\n",(0,o.jsx)(t.h2,{id:"what-youll-learn-in-this-post",children:"What You'll Learn In This Post"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Deploying the chat AI (Contoso Chat)"}),"\n",(0,o.jsx)(t.li,{children:"Deploying the chat UI (Contoso Web)"}),"\n",(0,o.jsx)(t.li,{children:"Automate Deployments (CI/CD)"}),"\n",(0,o.jsx)(t.li,{children:"Accelerate Solutions (Enterprise)"}),"\n",(0,o.jsx)(t.li,{children:"Evaluate & Mitigate Harms (Responsible AI)"}),"\n",(0,o.jsx)(t.li,{children:"Exercise: Explore training resources."}),"\n",(0,o.jsxs)(t.li,{children:["Resources: ",(0,o.jsx)(t.a,{href:"https://aka.ms/ai-studio/collection?ocid=buildia24_60days_blogs",children:(0,o.jsx)(t.strong,{children:"Azure AI Studio Code-First Collection"})})]}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Deploy with Responsible AI",src:i(78942).Z+"",width:"1000",height:"420"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"1-revisiting-contoso-chat",children:"1. Revisiting Contoso Chat"}),"\n",(0,o.jsxs)(t.p,{children:["We started the week by talking about LLM Ops, and identifying the three core phases of the end-to-end lifecycle for a generative AI application. In the previous posts, we've mostly focused on the first two phases: ",(0,o.jsx)(t.strong,{children:"ideating"})," (building & validating a starter app) and ",(0,o.jsx)(t.strong,{children:"augmenting"})," (evaluating & iterating app for quality). In this post, we'll focus on phase 3: ",(0,o.jsx)(t.strong,{children:"operationalizing"})," the application to get it ready for real-world usage."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"LLM Ops",src:i(67153).Z+"",width:"1147",height:"646"})}),"\n",(0,o.jsx)(t.p,{children:"First, let's remind ourselves of the high-level architecture for a copilot application. Our solution has two components:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Backend"}),": The ",(0,o.jsx)(t.em,{children:"chat AI"})," app that is deployed to provide a hosted API endpoint."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Frontend"}),": The ",(0,o.jsx)(t.em,{children:"chat UI"})," app that is deployed to support user interactions with API."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Let's look at what deployment means in each case:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Copilot Arch",src:i(43663).Z+"",width:"2856",height:"1292"})}),"\n",(0,o.jsx)(t.h2,{id:"2-deploy-your-chat-ai-app",children:"2. Deploy your chat AI app"}),"\n",(0,o.jsxs)(t.p,{children:["In our example, the chat AI is implemented by the ",(0,o.jsx)(t.a,{href:"https://aka.ms/aitour/contoso-chat?ocid=buildia24_60days_blogs",children:"Contoso Chat"})," sample. Deploying this chat AI solution involves ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/concepts/deployments-overview?ocid=buildia24_60days_blogs",children:(0,o.jsx)(t.strong,{children:"three steps"})}),"."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Deploy the Models"}),"\n",(0,o.jsx)(t.li,{children:"Deploy the Flows"}),"\n",(0,o.jsx)(t.li,{children:"Deploy the Web App"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Let's look at the first two in this section, starting with ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/concepts/deployments-overview?ocid=buildia24_60days_blogs#deploying-models",children:"model deployment"})}),". Azure AI Studio has a rich model catalog from providers including OpenAI, HuggingFace, Meta and Microsoft Research. Some models can be deployed ",(0,o.jsx)(t.em,{children:"as a service"})," (with a pay-as-you-go subscription) while others require ",(0,o.jsx)(t.em,{children:"hosted, managed infra"})," (with a standard Azure subscription). Our chat AI uses three models, all of which used the hosted, managed option."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"gpt-35-turbo"})," - for chat completion (core function)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"text-embedding-ada-002"})," - for embeddings (query vectorization)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"gpt-4"})," - for chat evaluation (responsible AI)"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Next, let's talk about ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/how-to/flow-deploy?tabs=azure-studio?ocid=buildia24_60days_blogs",children:"deploying flows"})}),". There are two kinds of flows we'll use in our chat AI - ",(0,o.jsx)(t.em,{children:"completion flows"})," (that we'll use for real-time inference) and ",(0,o.jsx)(t.em,{children:"evaluation flows"})," (that we'll use for quality assessment). Azure AI Studio provides ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/how-to/flow-deploy?tabs=azure-studio?ocid=buildia24_60days_blogs#create-an-online-deployment",children:"low-code deployment"})," via the UI and ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/how-to/flow-deploy?tabs=python?ocid=buildia24_60days_blogs#create-an-online-deployment",children:"code-first deployment"})," using the Azure AI SDK. In our Contoso Chat sample, we use the SDK to ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/blob/main/deployment/push_and_deploy_pf.ipynb",children:"upload the flow"})," to Azure, then deploy it using the UI as shown.\r\n",(0,o.jsx)(t.img,{alt:"Deploy Contoso Chat",src:i(7323).Z+"",width:"2956",height:"1388"})]}),"\n",(0,o.jsxs)(t.p,{children:["Finally, let's talk about ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/concepts/deployments-overview?ocid=buildia24_60days_blogs#deploying-web-apps",children:"deploying web apps"})}),". Here, the web app is a ",(0,o.jsx)(t.em,{children:"chat UI"})," that can invoke requests on the deployed chat AI and validate the functionality in production. There are three options to consider:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Built-in Testing UI"}),". When you deploy your flow via Azure AI Studio, you can visit the deployment details page and navigate to the ",(0,o.jsx)(t.em,{children:"Test"})," tab, to get a built-in testing sandbox as shown. This provides a quick way to test prompts with each new iteration, in a manual (interactive) way.\r\n",(0,o.jsx)(t.img,{alt:"Deployment Testing",src:i(74030).Z+"",width:"3558",height:"2060"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Deploy as Web App"}),". Azure AI Studio also provides a ",(0,o.jsx)(t.em,{children:"Playground"})," where you can deploy models directly (for chat completion) and ",(0,o.jsx)(t.em,{children:"add your data (preview)"})," (for grounding responses) using Azure AI Search and Blob Storage resources, to customize that chat experience. Then ",(0,o.jsx)(t.em,{children:"deploy a new web app"})," directly from that interface, to an Azure App Service resource.\r\n",(0,o.jsx)(t.img,{src:"https://learn.microsoft.com/azure/ai-studio/media/tutorials/chat-web-app/deploy-web-app.png?ocid=buildia24_60days_blogs",alt:"Deploy as web app"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Dedicated Web App"}),". This is the option we'll explore in the next section."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"3-deploy-your-chat-ui-app",children:"3. Deploy your chat UI app"}),"\n",(0,o.jsxs)(t.p,{children:["The Contoso Chat sample comes with a dedicated ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-web",children:"Contoso Web"}),' application that is implemented using the Next.js framework with support for static site generation. This provides a rich "Contoso Outdoors" website experience for users as shown below.']}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Contoso Web",src:i(2557).Z+"",width:"1457",height:"529"})}),"\n",(0,o.jsxs)(t.p,{children:["To use that application, simply ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-web?tab=readme-ov-file#setting-up-endpoints",children:"setup the endpoint variables"})," for Contoso Chat and deploy the app to Azure App Service. Alternatively, you can use ",(0,o.jsx)(t.a,{href:"https://github.com/nitya/contoso-web/tree/main-codespaces-swa?tab=readme-ov-file",children:"this fork of the application"})," to explore a version that can be run in GitHub Codespaces (for development) and deployed to Azure Static Web Apps (for production) using GitHub Actions for automated deploys. Once deployed, you can click the ",(0,o.jsx)(t.em,{children:"chat"})," icon onscreen *bottom right) to see the chat dialog as shown in the screenshot above, and interact with the deployed Contoso chat AI."]}),"\n",(0,o.jsx)(t.h2,{id:"4-automate-your-chat-ai-deployment",children:"4. Automate your chat AI deployment"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat",children:"Contoso Chat sample"})," is a ",(0,o.jsx)(t.strong,{children:"constantly-evolving"})," application sample that is updated regularly to reflect both the changes to Azure AI Studio (preview) and showcase new capabilities for end-to-end development workflows. You can currently explore two additional capabilities implemented in the codebase, to streamline your deployment process further."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Using GitHub Actions"}),". The sample has instructions to ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat?tab=readme-ov-file#9-deploy-with-github-actions",children:"Deploy with GitHub Actions"})," instead of the manual Azure AI Studio based deployment step we showed earlier. By setting up the actions workflow, you can automated deployments on every commit or PR, and get a baseline CI/CD pipeline for your chat AI, to build on later."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Using Azure Developer CLI"}),". The sample was ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/pull/74",children:"just azd-enabled"})," recently, making it possible to use the ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/azd-templates?tabs=csharp?ocid=buildia24_60days_blogs",children:"Azure Developer CLI"})," as a unified tool to accelerate the end-to-end process from ",(0,o.jsx)(t.em,{children:"provisioning"})," the resources to ",(0,o.jsx)(t.em,{children:"deploying"})," the solution. The ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/blob/main/azure.yaml",children:"azd template"})," adds support for ",(0,o.jsx)(t.em,{children:"infrastructure-as-code"}),", allowing your application to have a consistent and repeatable deployment blueprint for all users. You can also ",(0,o.jsx)(t.a,{href:"https://azure.github.io/awesome-azd/?tags=ai&tags=chatgpt",children:"browse the azd template gallery"})," for other ",(0,o.jsx)(t.em,{children:"ChatGPT"})," style application examples."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Note that the Contoso Chat sample is a ",(0,o.jsx)(t.em,{children:"demo application"})," sample that is designed to showcase the capabilities of Azure AI Studio and Azure AI services. It is not a production-ready application, and should be used primarily as a learning tool and starting point for your own development."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"5-enterprise-architecture-options",children:"5. Enterprise Architecture Options"}),"\n",(0,o.jsxs)(t.p,{children:["The objective of this series was to familiarize you with the Azure AI Studio (preview) platform and the capabilities it provides for building generative AI applications. And to give you a sense of how to build, run, test and deploy, your chat AI application for real-world use. But the platform is still in preview (and evolving rapidly). So what are your options if you want to build and deploy generative AI solutions at enterprise scale ",(0,o.jsx)(t.strong,{children:"today"}),"? How can you design it using a well-architected cloud framework with ",(0,o.jsx)(t.strong,{children:"cloud-native technologies"})," like ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/container-apps/overview?ocid=buildia24_60days_blogs",children:"Azure Container Apps"})," or ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/aks/intro-kubernetes?ocid=buildia24_60days_blogs",children:"Azure Kubernetes Service"}),"?"]}),"\n",(0,o.jsx)(t.p,{children:"Here are some open-source samples and guidance you can explore to start with:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/azure-search-openai-demo/",children:"ChatGPT + Enterprise data with Azure Open AI and AI Search (Python)"})," - open-source sample that uses Azure App Service, Azure Open AI, Azure AI Search and Azure Blob Storage, for an enterprise-grade solution grounded in your (documents) data."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/azure-search-openai-demo-csharp",children:"ChatGPT + Enterprise data with Azure Open AI and AI Search (.NET)"}),' - open-source sample chat AI for a fictitious company called "Contoso Electronics" using the application architecture shown below. ',(0,o.jsx)(t.a,{href:"https://devblogs.microsoft.com/dotnet/transform-business-smart-dotnet-apps-azure-chatgpt/?ocid=buildia24_60days_blogs",children:"This blog post"})," provides more details.\r\n",(0,o.jsx)(t.img,{alt:"Chat GPT Enterprise",src:i(74698).Z+"",width:"1280",height:"720"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/chat-with-your-data-solution-accelerator",children:"Chat with your data Solution Accelerator"})," - uses Azure App Service, Azure Open AI, Azure AI Search and Azure Blob Storage, for an end-to-end baseline RAG sample that goes beyond the ",(0,o.jsx)(t.a,{href:"https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/on-your-data-is-now-generally-available-in-azure-openai-service/ba-p/4059514?ocid=buildia24_60days_blogs",children:"Azure OpenAI Service On Your Data"})," feature (GA in Feb 2024).''"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://techcommunity.microsoft.com/t5/microsoft-mechanics-blog/build-your-own-private-chatgpt-style-app-with-enterprise-ready/ba-p/4069529?ocid=buildia24_60days_blogs",children:"Built a private ChatGPT style app with enterprise-ready architecture"})," - a blog post from the Microsoft Mechanics team that uses an ",(0,o.jsx)(t.a,{href:"https://aka.ms/GitHubChatBotUI?ocid=buildia24_60days_blogs",children:"open-source chat UI sample"})," and discusses how to ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IKcuod-JFYU&t=252s",children:"enhance the chat experience with Azure AI Studio"})," and streamline setup by ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IKcuod-JFYU&t=404s",children:"using Azure Landing Zones"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["We covered a lot today - but there's one last thing we should talk about before we wrap up. ",(0,o.jsx)(t.strong,{children:"Responsible AI"}),"."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"6-responsible-ai-in-practice",children:"6. Responsible AI In Practice"}),"\n",(0,o.jsx)(t.h3,{id:"61-principles-of-responsible-ai",children:"6.1 Principles of Responsible AI"}),"\n",(0,o.jsxs)(t.p,{children:["By ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/machine-learning/concept-responsible-ai?view=azureml-api-2?ocid=buildia24_60days_blogs",children:"one definition"}),", Responsible AI is ",(0,o.jsx)(t.em,{children:"approach to developing, assessing, and deploying AI systems in a safe, trustworthy, and ethical way"}),". The ",(0,o.jsx)(t.a,{href:"https://www.microsoft.com/ai/principles-and-approach?ocid=buildia24_60days_blogs",children:"Responsible AI standard"})," was developed by Microsoft as a framework for building AI systems, using 6 principles to guide our design thinking."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://learn.microsoft.com/en-us/azure/machine-learning/media/concept-responsible-ai/concept-responsible-ml.png?view=azureml-api-2?ocid=buildia24_60days_blogs",alt:"Responsible AI Standard"})}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Principle"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Fairness"}),(0,o.jsx)(t.td,{children:"How might an AI system allocate opportunities, resources, or information in ways that are fair to the humans who use it?"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Reliability & Safety"}),(0,o.jsx)(t.td,{children:"How might the system function well for people across different use conditions and contexts, including ones it was not originally intended for?"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Privacy & Security"}),(0,o.jsx)(t.td,{children:"How might the system be designed to support privacy and security?."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Inclusiveness"}),(0,o.jsx)(t.td,{children:"How might the system be designed to be inclusive of people of all abilities?"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Transparency"}),(0,o.jsx)(t.td,{children:"How might people misunderstand, misuse, or incorrectly estimate the capabilities of the system?"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Accountability"}),(0,o.jsx)(t.td,{children:"How can we create oversight so that humans can be accountable and in control?"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"62-implications-for-generative-ai",children:"6.2 Implications for Generative AI"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/training/modules/responsible-generative-ai/?ocid=buildia24_60days_blogs",children:"Fundamentals of Responsible Generative AI"})," describes core guidelines for building  generative AI solutions ",(0,o.jsx)(t.em,{children:"responsibly"})," as a 4-step process:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Identify"})," potential harms relevant to your solution."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Measure"})," presence of these harms in outputs generated by your solution."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Mitigate"})," harms at multiple layers to minimize impact, and ensure transparent communication about potential risks to users."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Operate"})," your solution responsibly by defining and following a deployment and operational readiness plan."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"63-identify-potential-harms",children:"6.3 Identify Potential Harms"}),"\n",(0,o.jsx)(t.p,{children:"The first step of the process is to identify potential harms in your application domain using a 4-step process:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Identify potential harms (offensive, unethical, fabrication) that may occur in generated content."}),"\n",(0,o.jsx)(t.li,{children:"Assess likelihood of each occurrence, and severity of impact."}),"\n",(0,o.jsx)(t.li,{children:"Test and verify if harms occur, and under what conditions."}),"\n",(0,o.jsx)(t.li,{children:"Document and communicate potential harms to stakeholders."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://learn.microsoft.com/en-us/training/wwl-data-ai/responsible-generative-ai/media/identify-harms.png",alt:"4 steps"})}),"\n",(0,o.jsx)(t.h3,{id:"64-measure-presence-of-harms",children:"6.4 Measure Presence of Harms"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/ai-studio/concepts/evaluation-approach-gen-ai?ocid=buildia24_60days_blogs",children:"Evaluation of generative AI applications"})," is the process of measuring the presence of identified harms in the generated output. Think of it as a 3-step process:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Prepare a diverse selection of input prompts that may result in the potential harms documented."}),"\n",(0,o.jsx)(t.li,{children:"Submit prompts to your AI application and retrieve generated output"}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Evaluate"})," those responses using pre-defined criteria."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Azure AI Studio provides many features and pathways to support evaluation. Start with ",(0,o.jsx)(t.em,{children:"manual evaluation"})," (small set of inputs, interactive) to ensure coverage and consistency. Then scale to ",(0,o.jsx)(t.em,{children:"automated evaluation"})," (larger set of inputs, flows) for increased coverage and operationalization."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://learn.microsoft.com/en-us/azure/ai-studio/media/evaluations/evaluation-monitor-flow.png",alt:"Evaluation"})}),"\n",(0,o.jsxs)(t.p,{children:["But what ",(0,o.jsx)(t.em,{children:"metrics"})," can we use to quantify the quality of generated output? Quantifying accuracy is now complicated ",(0,o.jsx)(t.em,{children:"because we don't have access to a ground truth or deterministic answer"})," that can serve as a baseline. Instead, we can use ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/ai-studio/concepts/evaluation-metrics-built-in?ocid=buildia24_60days_blogs",children:"AI-assisted metrics"})," - where we ",(0,o.jsx)(t.em,{children:"instruct"})," another LLM to score your generated output ",(0,o.jsx)(t.strong,{children:"for quality and safety"})," using the guidelines and criteria you provide."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Quality"})," is measured using metrics like ",(0,o.jsx)(t.em,{children:"relevance, coherence and fluency"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Safety"})," is measured using metrics like ",(0,o.jsx)(t.em,{children:"groundedness and content harms"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["In our ",(0,o.jsx)(t.em,{children:"Contoso Chat"})," app sample, we ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/blob/main/eval/evaluate-chat-prompt-flow.ipynb",children:"show examples"})," of local evaluation (with single and multiple metrics) and batch runs (for automated evaluation in the cloud). Here's an exmaple of what the output from the local evaluation looks like:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Local Eval",src:i(70769).Z+"",width:"2894",height:"678"})}),"\n",(0,o.jsx)(t.h3,{id:"65-content-safety-for-mitigation",children:"6.5 Content Safety for Mitigation"}),"\n",(0,o.jsxs)(t.p,{children:["One of the most effective ways to mitigate harmful responses from generative AI models in Azure OpenAI is to use ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/ai-studio/concepts/content-filtering?ocid=buildia24_60days_blogs",children:"Content Filtering"})," powered by the ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/content-safety/overview?ocid=buildia24_60days_blogs",children:"Azure AI Content Safety"})," service. The service works by running the user input (prompt) and the generated output (completion) through ",(0,o.jsx)(t.em,{children:"an ensemble of classification models"})," that are trained to detect, and act on, identified caegories of harmful content."]}),"\n",(0,o.jsxs)(t.p,{children:["Azure AI Studio provides a default content safety filter, and allows you to create custom content filters with more tailored configurations if you opt-in to that capability first. These filters can then be ",(0,o.jsx)(t.em,{children:"applied"})," to a model or app deployment to ensure that inputs and outputs are gated to meet your content safety requirements."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://learn.microsoft.com/en-us/azure/ai-studio/media/content-safety/content-filter/configure-threshold.png#lightbox",alt:"Create Filter"})}),"\n",(0,o.jsxs)(t.p,{children:["The screenshot shows the ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/concepts/content-filtering?ocid=buildia24_60days_blogs#content-filtering-categories-and-configurability",children:"different content filtering categories"})," and the level of configurability each provides. This allows us to identify and mitigate different categories of issues (Violence, Hate, Sexual and Self-harm) by ",(0,o.jsx)(t.strong,{children:"automatically detecting"})," these in both user prompts (input) and model completions (output). An additional filter (optional) lets you enable filters for more advanced usage scenarios including ",(0,o.jsx)(t.em,{children:"jailbreaks, protected content or code"})," as ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/ai-studio/concepts/content-filtering?ocid=buildia24_60days_blogs#more-filters-for-generative-ai-scenarios",children:"described here"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://learn.microsoft.com/en-us/azure/ai-studio/media/content-safety/content-filter/additional-models.png",alt:"Content Filter"})}),"\n",(0,o.jsxs)(t.p,{children:["Once the filters are applied, the deployment can be opened up in the Playground, or using an integrated web app, to validate that the filters work. Check out ",(0,o.jsx)(t.a,{href:"https://ignite.microsoft.com/en-US/sessions/5db0e51a-d8b1-4234-b149-31671a633ffc?source=sessions?ocid=buildia24_60days_blogs",children:"this #MSIgnite session"})," from the Responsible AI team for strategies and examples for responsible AI practices with prompt engineering and retrieval augmented generation patterns in context."]}),"\n",(0,o.jsx)(t.h2,{id:"7-exercise",children:"7. Exercise:"}),"\n",(0,o.jsx)(t.p,{children:"We covered a lot today - and that also brings us to the end of our journey into Azure AI in this series. Want to get hands-on experience with some of these concepts? Here are some suggestions:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Walk through the ",(0,o.jsx)(t.a,{href:"https://aka.ms/aitour/contoso-chat?ocid=buildia24_60days_blogs",children:"Contoso Chat"})," sample end-to-end, and get familiar with the Azure AI Studio platform and the LLM Ops workflow for generative AI solutions."]}),"\n",(0,o.jsxs)(t.li,{children:["Explore the ",(0,o.jsx)(t.a,{href:"https://aka.ms/rai-hub/website?ocid=buildia24_60days_blogs",children:"Responsible AI Developer Hub"})," and try out the Content Safety and Prompt flow Evaluation workshops to get familiar with the Responsible AI principles and practices for generative AI."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"8-resources",children:"8. Resources"}),"\n",(0,o.jsx)(t.p,{children:"We covered a lot this week!! But your learning journey with Generative AI development and Azure AI is just beginning. Want to keep going? Here are three resources to help you:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://aka.ms/ai-studio/collection?ocid=buildia24_60days_blogs",children:"Azure AI Studio for Developers"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://aka.ms/rai-hub/collection?ocid=buildia24_60days_blogs",children:"Responsible AI For Developers"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://aka.ms/aitour/contoso-chat?ocid=buildia24_60days_blogs",children:"Contoso Chat Sample"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2557:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/app-contoso-chat-concept-1e6a568ef26af525237d5b3df58804c8.png"},78942:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/banner-48e9ec5b9267e589628dd0902ff81a70.png"},74698:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/chatgpt-enterprise-14564c996d2c974885d0832005ee72b8.png"},7323:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/contoso-chat-deploy-ce382b4dd234aba8c6112f5d5b11d6a2.png"},74030:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/contoso-chat-test-4674309cf7c90e44d1e64a4f2ec95721.png"},43663:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/copilot-architecture-a14ddb6e2ac8e5ded7e544f1093325fc.png"},70769:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/eval-local-9e0829a951099ad318f8667ec90a7099.png"},67153:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/llm-app-lifecycle-6509347ca42b47d5c7ae425b890e5efe.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>a});var o=i(67294);const s={},n=o.createContext(s);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);