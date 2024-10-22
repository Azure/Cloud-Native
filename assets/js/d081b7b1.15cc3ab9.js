"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92518],{75930:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=i(85893),n=i(11151);const a={date:"2024-10-15T09:00",slug:"kicking-off-azure-ai-week",title:"2.1 Kicking Off Azure AI Week!",authors:["nitya","marlene"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Join us for a week of posts as we walk through two signature application samples that teach you how to deliver generative AI solutions using Prompty for ideation, Azure AI Studio for development, and Azure Container Apps for deployment.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},s=void 0,r={permalink:"/Cloud-Native/30-days-of-ia-2024/kicking-off-azure-ai-week",source:"@site/blog-30-days-of-ia-2024/2024-10-14/kicking-off-azure-ai-week.md",title:"2.1 Kicking Off Azure AI Week!",description:"Join us for a week of posts as we walk through two signature application samples that teach you how to deliver generative AI solutions using Prompty for ideation, Azure AI Studio for development, and Azure Container Apps for deployment.",date:"2024-10-15T09:00:00.000Z",formattedDate:"October 15, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/build-intelligent-apps"},{label:"30-days-of-IA-2024",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/30-days-of-ia-2024"},{label:"learn-live",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/learn-live"},{label:"demo-bytes",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/demo-bytes"},{label:"community-gallery",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/community-gallery"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-actions"}],readingTime:7.96,hasTruncateMarker:!1,authors:[{name:"Nitya Narasimhan",title:"Senior AI Advocate",url:"https://github.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"},{name:"Marlene Mhangami",title:"Senior Developer Advocate",url:"https://github.com/marlenezw",imageURL:"https://github.com/marlenezw.png",key:"marlene"}],frontMatter:{date:"2024-10-15T09:00",slug:"kicking-off-azure-ai-week",title:"2.1 Kicking Off Azure AI Week!",authors:["nitya","marlene"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Join us for a week of posts as we walk through two signature application samples that teach you how to deliver generative AI solutions using Prompty for ideation, Azure AI Studio for development, and Azure Container Apps for deployment.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"2.2 Provision With AZD!",permalink:"/Cloud-Native/30-days-of-ia-2024/provision-with-azd"},nextItem:{title:"1.5b Deploy Application with AKS Part 2",permalink:"/Cloud-Native/30-days-of-ia-2024/deploy-application-with-AKS-part-2"}},l={authorsImageUrls:[void 0,void 0]},d=[{value:"What We&#39;ll Cover Today",id:"what-well-cover-today",level:2},{value:"1. What are we building?",id:"1-what-are-we-building",level:2},{value:"1.1 Contoso Chat",id:"11-contoso-chat",level:3},{value:"1.2 Contoso Creative Writer",id:"12-contoso-creative-writer",level:3},{value:"2. How are we building it?",id:"2-how-are-we-building-it",level:2},{value:"2.1 Contoso Chat",id:"21-contoso-chat",level:3},{value:"2.2 Contoso Creative Writer",id:"22-contoso-creative-writer",level:3},{value:"3. What tasks do I need to do?",id:"3-what-tasks-do-i-need-to-do",level:2},{value:"4. The Week Ahead!",id:"4-the-week-ahead",level:2},{value:"5. Call To Action",id:"5-call-to-action",level:2}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{Head:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a,{children:[(0,o.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/kicking-off-azure-ai-week"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,o.jsx)("meta",{property:"og:description",content:"Join us for a week of posts as we walk through two signature application samples that teach you how to deliver generative AI solutions using Prompty for ideation, Azure AI Studio for development, and Azure Container Apps for deployment."}),(0,o.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,o.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/kicking-off-azure-ai-week"}),(0,o.jsx)("meta",{name:"twitter:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,o.jsx)("meta",{name:"twitter:description",content:"Join us for a week of posts as we walk through two signature application samples that teach you how to deliver generative AI solutions using Prompty for ideation, Azure AI Studio for development, and Azure Container Apps for deployment."}),(0,o.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,o.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/kicking-off-azure-ai-week"})]}),"\n",(0,o.jsx)(t.p,{children:"Welcome to Day 1\ufe0f\u20e3 of Azure AI Week on the #30 Days Of IA series!"}),"\n",(0,o.jsxs)(t.p,{children:["Want to build a custom copilot with more control over every step of the end-to-end workflow from prompt to production? Join us for a week of posts as we walk through ",(0,o.jsx)(t.strong,{children:"two signature application samples"})," that teach you how to deliver generative AI solutions using ",(0,o.jsx)(t.a,{href:"https://prompty.ai",children:"Prompty"})," for ideation, ",(0,o.jsx)(t.a,{href:"https://aka.ms/aistudio/docs?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure AI Studio"})," for development, and ",(0,o.jsx)(t.a,{href:"https://aka.ms/containerapps?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Container Apps"})," for deployment."]}),"\n",(0,o.jsx)(t.p,{children:"Ready? Let's get started!"}),"\n",(0,o.jsx)(t.h2,{id:"what-well-cover-today",children:"What We'll Cover Today"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"What are we building?"})," - Let's talk about the application scenarios."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"How are we building it?"})," - Let's discuss the app architecture."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"What tasks do I need to do?"})," - Let's review the end-to-end developer workflow."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"The Week Ahead"})," - Let's preview the week's content."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Call To Action"})," - Take these 3 actions to skill up on Azure AI!"]}),"\n"]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Card Banner",src:i(45093).Z+"",width:"960",height:"403"})}),"\n",(0,o.jsxs)(t.p,{children:["When we begin any application development journey, we start with ",(0,o.jsx)(t.em,{children:"design"})," before proceeding to ",(0,o.jsx)(t.em,{children:"development"})," and ",(0,o.jsx)(t.em,{children:"delivery"})," of the solution. For the design phase, we focus on three questions:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"App Scenario"}),": What use cases and interaction flows should we support?"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"App Architecture"}),": What resources do we need to build the application?"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"App Lifecycle"}),": What is our end-to-end workflow from prompt to production?"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"We can then think about development and delivery requirements from three perspectives:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Design Patterns"}),": How do we orchestrate our workflow for efficiency?"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Developer Experience"}),": What tools do we use to streamline the process?"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Responsible AI"}),": What principles & practices do we need for trustworthy AI?"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"This week, we'll explore these questions with two distinct AI applications that will demonstrate the power and versatility of the Azure AI platform for building intelligent applications."}),"\n",(0,o.jsx)(t.h2,{id:"1-what-are-we-building",children:"1. What are we building?"}),"\n",(0,o.jsxs)(t.p,{children:["Our first application is ",(0,o.jsx)(t.a,{href:"https://aka.ms/aitour/contoso-chat/",children:(0,o.jsx)(t.strong,{children:"Contoso Chat"})}),", a custom copilot that uses the ",(0,o.jsx)(t.em,{children:"Retrieval Augmented Generation"})," pattern (RAG) to ground responses in your data. The second application is ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/Contoso-Creative-Writer",children:(0,o.jsx)(t.strong,{children:"Contoso Creative Writer"})}),", a content publishing assistant that uses the ",(0,o.jsx)(t.em,{children:"Multi-Agent Conversation"})," pattern to coordinate and execute multiple tasks autonomously, on behalf of the user. Let's look at each."]}),"\n",(0,o.jsx)(t.h3,{id:"11-contoso-chat",children:"1.1 Contoso Chat"}),"\n",(0,o.jsxs)(t.p,{children:['The Contoso Chat app scenario involves a retail company ("Contoso Outdoors") that sells hiking and camping gear to outdoor enthusiasts via their website. The company wants to build and integrate a custom copilot that can help customers ask questions about their product catalog, and receive recommendations based on their previous purchases. This requires the copilot to ',(0,o.jsx)(t.em,{children:"ground responses in the retailer's product catalog and customer orders data"})," for quality responses."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Contoso Chat",src:i(42462).Z+"",width:"1457",height:"529"})}),"\n",(0,o.jsx)(t.h3,{id:"12-contoso-creative-writer",children:"1.2 Contoso Creative Writer"}),"\n",(0,o.jsx)(t.p,{children:"The Contoso Creative Writer app scenario involves a content authoring assistant that can help the company's marketing team quickly assemble and publish content for their product blog. The company needs these articles to be grounded in the product data, but expand on key themes to create compelling narratives for their readers that would motivate more relevant purchases. This requires agentic workflows that can execute tasks concurrently (research topic, find products) and coordinate them autonomously (write content, review for publication) to streamline content creation workflows at scale."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Contoso Creative Writer",src:i(93873).Z+"",width:"3422",height:"1966"})}),"\n",(0,o.jsx)(t.h2,{id:"2-how-are-we-building-it",children:"2. How are we building it?"}),"\n",(0,o.jsxs)(t.p,{children:["Building generative AI applications requires developers to ",(0,o.jsx)(t.em,{children:"choose"})," relevant models, ",(0,o.jsx)(t.em,{children:"deploy"})," them for use, and ",(0,o.jsx)(t.em,{children:"orchestrate"})," their interactions with other services to deliver a complete solution that meets quality and safety requirements."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://aka.ms/aistudio/docs?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure AI Studio"})," platform provides a ",(0,o.jsx)(t.em,{children:"unified experience"})," for developers to complete this workflow end-to-end, using a web portal, CLI, or SDK. The ",(0,o.jsx)(t.strong,{children:"Azure AI Studio architecture"})," involves the three resources shown below - a ",(0,o.jsx)(t.em,{children:"hub"})," for administration, a ",(0,o.jsx)(t.em,{children:"project"})," for development and ",(0,o.jsx)(t.em,{children:"services"})," that provide model endpoints for invocation. Learn more ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/concepts/architecture?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"here"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Azure AI",src:i(95714).Z+"",width:"946",height:"502"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"AI Application Architecture"})," builds on this foundation, implementing the required design patterns that define the application's behavior. This typically involves orchestrating interactions between the Azure AI platform resources and third party services, to deliver end-to-end user experience as shown in the examples below. Let's take a look."]}),"\n",(0,o.jsx)(t.h3,{id:"21-contoso-chat",children:"2.1 Contoso Chat"}),"\n",(0,o.jsx)(t.p,{children:"The figure shows the AI Application Architecture for the Contoso Chat sample."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Contoso Chat Architecture",src:i(61026).Z+"",width:"1200",height:"726"})}),"\n",(0,o.jsx)(t.p,{children:'The application is deployed as a hosted endpoint in Azure Container Apps, using Azure Managed Identity for keyless authentication. The user request ("prompt") is received at this endpoint, and processed in three steps:'}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.em,{children:"prompt query is expanded"})," to extract relevant product query terms"]}),"\n",(0,o.jsxs)(t.li,{children:["The expanded query is sent to Azure AI Search to ",(0,o.jsx)(t.em,{children:"retrieve relevant product documents"})]}),"\n",(0,o.jsxs)(t.li,{children:["The original query is also sent to Azure Cosmos DB to ",(0,o.jsx)(t.em,{children:"retrieve relevant customer profile data"})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The results from the last two steps provide ",(0,o.jsx)(t.em,{children:"grounding data"}),' that shapes the "enhanced prompt" we then dispatch to the Azure OpenAI ',(0,o.jsx)(t.em,{children:"chat"})," model. The generated response is then returned to the user. This workflow requires ",(0,o.jsx)(t.em,{children:"orchestration"})," of invocations to both the AI models (embeddings, chat) and the data retrieval services (search index, customer database) for each request."]}),"\n",(0,o.jsx)(t.h3,{id:"22-contoso-creative-writer",children:"2.2 Contoso Creative Writer"}),"\n",(0,o.jsx)(t.p,{children:"The figure shows the AI Application Architecture for the Contoso Creative Writer sample."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Contoso Creative Writer Architecture",src:i(96221).Z+"",width:"1200",height:"726"})}),"\n",(0,o.jsxs)(t.p,{children:["Similar to Contoso Chat, the application is deployed as a hosted endpoint in Azure Container Apps, using Azure Managed Identity for keyless authentication - with App Insights for monitoring app performance. The difference is in the ",(0,o.jsx)(t.em,{children:"orchestration"}),' required for processing the user request ("prompt") in this application.']}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"The prompt query is expanded to extract relevant topic query terms and relevant products retrieved using Bing Search and Azure AI Search."}),"\n",(0,o.jsx)(t.li,{children:'The expanded query is sent to a "Writer Agent" (chat model) which uses the provided query and grounding context to generate a draft article based on the designed prompt template.'}),"\n",(0,o.jsx)(t.li,{children:'The draft article is then sent to an "Editor Agent" (chat model) which assesses the article for acceptance based on the designed prompt template.'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"An approved article is then published as a blog post. The user interface allows you to view the progression of these tasks visually, to get an intuitive sense for multi-agent coordination."}),"\n",(0,o.jsx)(t.h2,{id:"3-what-tasks-do-i-need-to-do",children:"3. What tasks do I need to do?"}),"\n",(0,o.jsxs)(t.p,{children:["We know the application architecture to implement, and we know the infrastructure requirements for building on. But we still need to understand the ",(0,o.jsx)(t.em,{children:"end-to-end"})," developer workflow that will help us go from initial prototype to production-ready solution."]}),"\n",(0,o.jsxs)(t.p,{children:["This is where the ",(0,o.jsx)(t.strong,{children:"GenAIOps"})," lifecycle comes in. Because generative AI applications rely on ",(0,o.jsx)(t.em,{children:"natural language processing"})," and ",(0,o.jsx)(t.em,{children:"pre-trained models"}),", they need additional steps to ensure that responses meet quality and safety standards for the diverse real-world prompts they will encounter. The application lifecycle now looks something like this, with three main stages:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Ideation"})," - go from prompt to prototype, and validate with a test input."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Evaluation"})," - go from prototype to production-ready by validating with larger test input set."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Operationalization"})," - deploy for real-world use, and monitor for cost and performance."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Gen AI Ops",src:i(12673).Z+"",width:"960",height:"540"})}),"\n",(0,o.jsx)(t.p,{children:"From a practical development perspective, we can map these many steps in the workflow shown below, highlighting the key task to be performed and the tool best-suited for that task. We'll look at these in more detail in the next few posts this week."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Developer Workflow",src:i(89414).Z+"",width:"1433",height:"448"})}),"\n",(0,o.jsxs)(t.p,{children:["But, to deliver ",(0,o.jsx)(t.strong,{children:"trustworthy AI solutions"}),", we also need to consider security, privacy, and safety requirements for the application. In the last row above, we highlight key features or practices that enable a Responsible AI approach to development. These range from practical considerations (like using curated models from trusted providers) to more complex features (like evaluation, safety systems, and managed identity) that add layers of protection to the application across the development lifecycle."]}),"\n",(0,o.jsx)(t.h2,{id:"4-the-week-ahead",children:"4. The Week Ahead!"}),"\n",(0,o.jsx)(t.p,{children:"We'll explore these in more detail in the next few posts, as we build and deploy the Contoso Chat and Contoso Creative Writer applications using the Azure AI platform. Here's what to expect:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"#1-what-are-we-building",children:(0,o.jsx)(t.strong,{children:"Day 1:"})})," Kickoff Post - What are we building?"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/provision-with-azd",children:(0,o.jsx)(t.strong,{children:"Day 2:"})})," Provision With AZD - Setup for development."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/ideate-with-prompty",children:(0,o.jsx)(t.strong,{children:"Day 3:"})})," Ideate with Prompty - Prompt Engineering & Data Grounding"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/evaluate-with-ai",children:(0,o.jsx)(t.strong,{children:"Day 4:"})})," Evaluate with AI - Custom Evaluators & AI-Assisted Scoring"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Day 5:"})," Deploy with ACA - Operationalization & Monitoring"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["We'll start our journey tomorrow by provisioning Azure resources (",(0,o.jsx)(t.em,{children:"Infrastructure as code"}),") and setting up our development environment (",(0,o.jsx)(t.em,{children:"Configuration as code"}),") in a manner that enables consistent and reproducible usage across teams."]}),"\n",(0,o.jsx)(t.h2,{id:"5-call-to-action",children:"5. Call To Action"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Want to get hands-on experience building intelligent apps on Azure?"})}),"\n",(0,o.jsx)(t.p,{children:"Take these actions today, to jumpstart your skilling journey:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://aka.ms/aitour?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Register for Microsoft AI Tour"})," - join an instructor-led workshop session."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://ignite.microsoft.com/sessions?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Register for Microsoft Ignite"})," - look for related lab & breakout sessions on Azure AI."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://aka.ms/azd-ai-templates?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Browse the AI Templates Collection"})," - explore samples for new frameworks and scenarios."]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},95714:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/01-azure-ai-architecture-d961d2acb6c8546eada1d841066f60c9.svg"},45093:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/01-build-intelligent-apps-efb33a6fa24eba8ed31e63699c6065dd.png"},61026:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/01-contoso-chat-architecture-c8d974311fa6b0f780acbf5b9c92e693.png"},42462:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/01-contoso-chat-1e6a568ef26af525237d5b3df58804c8.png"},96221:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/01-contoso-creative-writer-architecture-55c8c139608f3e349eee5240b85b44ba.png"},93873:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/01-contoso-creative-writer-7b33e6d5fb82fa902bf5638d191a091f.png"},89414:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/01-developer-workflow-ea28bc208380d98a8041016271b8e50a.png"},12673:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/01-gen-ai-ops-d74a6694116d833dd1dead0d17969479.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>s});var o=i(67294);const n={},a=o.createContext(n);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);