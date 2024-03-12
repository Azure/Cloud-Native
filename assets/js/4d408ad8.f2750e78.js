"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74637],{62138:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=i(85893),n=i(11151);const a={date:"2024-03-12T09:00",slug:"build-a-copilot-code-first-with-the-azure-ai-python-sdk",title:"4.2 Build A Copilot Code-First with the Azure AI Python SDK",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","azureai","copilot","aisdk"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Have a generative AI application you want to build, but don't know where to start? In this blog post, we introduce the Azure AI Studio Python Quickstart Sample, explain the end-to-end development workflow, then show you how you can get started customizing it, to explore your own application requirements.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},r=void 0,s={permalink:"/Cloud-Native/60DaysOfIA/build-a-copilot-code-first-with-the-azure-ai-python-sdk",source:"@site/blog-60daysofIA/2024-03-12/build-a-copilot-code-first-with-the-azure-ai-python-sdk.md",title:"4.2 Build A Copilot Code-First with the Azure AI Python SDK",description:"Have a generative AI application you want to build, but don't know where to start? In this blog post, we introduce the Azure AI Studio Python Quickstart Sample, explain the end-to-end development workflow, then show you how you can get started customizing it, to explore your own application requirements.",date:"2024-03-12T09:00:00.000Z",formattedDate:"March 12, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/60DaysOfIA/tags/build-intelligent-apps"},{label:"60-days-of-IA",permalink:"/Cloud-Native/60DaysOfIA/tags/60-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/60DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/60DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/60DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/60DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/60DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/60DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/60DaysOfIA/tags/github-actions"}],readingTime:11.25,hasTruncateMarker:!1,authors:[{name:"#60Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"cnteam"}],frontMatter:{date:"2024-03-12T09:00",slug:"build-a-copilot-code-first-with-the-azure-ai-python-sdk",title:"4.2 Build A Copilot Code-First with the Azure AI Python SDK",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","azureai","copilot","aisdk"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Have a generative AI application you want to build, but don't know where to start? In this blog post, we introduce the Azure AI Studio Python Quickstart Sample, explain the end-to-end development workflow, then show you how you can get started customizing it, to explore your own application requirements.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"4.1 Build Contoso Chat End-to-End",permalink:"/Cloud-Native/60DaysOfIA/build-contoso-chat-end-to-end"}},l={authorsImageUrls:[void 0]},d=[{value:"What You&#39;ll Learn Today",id:"what-youll-learn-today",level:2},{value:"1 | Learning Objectives",id:"1--learning-objectives",level:2},{value:"2| Copilot Architecture",id:"2-copilot-architecture",level:2},{value:"3 | Azure AI SDK",id:"3--azure-ai-sdk",level:2},{value:"4 | Using the Quickstart Sample",id:"4--using-the-quickstart-sample",level:2},{value:"4.1 | Pre-Requisites",id:"41--pre-requisites",level:3},{value:"4.2 | Setup Dev Environment",id:"42--setup-dev-environment",level:3},{value:"4.3 | Initialize Azure AI Resources",id:"43--initialize-azure-ai-resources",level:3},{value:"4.4 | Initialize Azure Configuration",id:"44--initialize-azure-configuration",level:3},{value:"4.5 | Configure Environment Variables",id:"45--configure-environment-variables",level:3},{value:"4.6 | Explore Custom Data",id:"46--explore-custom-data",level:3},{value:"4.7 | Explore The Codebase",id:"47--explore-the-codebase",level:3},{value:"4.8 | Explore The Chat Function",id:"48--explore-the-chat-function",level:3},{value:"5 | Operationalization",id:"5--operationalization",level:2},{value:"6 | Customizing the Sample",id:"6--customizing-the-sample",level:2},{value:"Resources",id:"resources",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{Head:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a,{children:[(0,o.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/60daysofia/build-a-copilot-code-first-with-the-azure-ai-python-sdk"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,o.jsx)("meta",{property:"og:description",content:"Have a generative AI application you want to build, but don't know where to start? In this blog post, we introduce the Azure AI Studio Python Quickstart Sample, explain the end-to-end development workflow, then show you how you can get started customizing it, to explore your own application requirements."}),(0,o.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,o.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/60daysofIA/build-a-copilot-code-first-with-the-azure-ai-python-sdk"}),(0,o.jsx)("meta",{name:"twitter:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,o.jsx)("meta",{name:"twitter:description",content:"Have a generative AI application you want to build, but don't know where to start? In this blog post, we introduce the Azure AI Studio Python Quickstart Sample, explain the end-to-end development workflow, then show you how you can get started customizing it, to explore your own application requirements."}),(0,o.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,o.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/60daysofIA/build-a-copilot-code-first-with-the-azure-ai-python-sdk"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Welcome to Day 2\ufe0f\u20e3 of the Azure AI week on #60DaysOfIA"})}),"\n",(0,o.jsxs)(t.p,{children:["Let's recap what we learned so far. In our ",(0,o.jsx)(t.em,{children:"kickoff"})," post we set the stage by describing our application scenario (Contoso Chat), the paradigm shift for generative AI apps (LLM Ops) and the unified platform for streamlining development (Azure AI Studio). In the next post we walked through the signature ",(0,o.jsx)(t.a,{href:"https://aka.ms/aitour/contoso-chat",children:"Contoso Chat"})," application sample to understand how we can implement that scenario using Azure AI Studio and Prompt flow - from building the chat function, to evaluating it, deploying it to a hosted endpoint, then testing that API in a chat client."]}),"\n",(0,o.jsxs)(t.p,{children:["But what if you want to get started building your own application scenario? Over the next three posts, we'll look at ",(0,o.jsx)(t.em,{children:"starter samples"})," that will get you from ideation (define chat function) to operationalization (deploy chat API) using different tools and frameworks to simplify orchestration."]}),"\n",(0,o.jsx)(t.p,{children:"Ready? Let's go!"}),"\n",(0,o.jsx)(t.h2,{id:"what-youll-learn-today",children:"What You'll Learn Today"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"What is the copilot architecture?"}),"\n",(0,o.jsx)(t.li,{children:"What is the Azure AI SDK?"}),"\n",(0,o.jsx)(t.li,{children:"What is the Quickstart sample?"}),"\n",(0,o.jsx)(t.li,{children:"How can I customize and extend this for my scenario?"}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Challenge:"})," Fork ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/aistudio-python-quickstart-sample",children:"this quickstart"})," and build it, then extend it with your data."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Resources:"})," Bookmark ",(0,o.jsx)(t.a,{href:"https://aka.ms/ai-studio/collection?ocid=buildia24_60days_blogs",children:"this collection"})," for training & documentation."]}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Build a Copilot on Azure Code-First with Azure AI SDK",src:i(89054).Z+"",width:"1000",height:"420"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"1--learning-objectives",children:"1 | Learning Objectives"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/aistudio-python-quickstart-sample",children:"copilot ai-sdk quickstart"})," is a Python-based starter sample for a code-first approach to building a copilot experience on the Azure AI platform. Since this is the foundational sample, we'll use it to explore some of the details of the implementation and set the stage for you to explore customizing it further for your application requirements."]}),"\n",(0,o.jsx)(t.p,{children:"By the end of this tutorial you should be able to:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Explain the functional components of the copilot architecture"}),"\n",(0,o.jsx)(t.li,{children:"Explain the Azure resources required to implement a copilot"}),"\n",(0,o.jsx)(t.li,{children:"Explain the core functionality provided by the Azure AI SDK"}),"\n",(0,o.jsx)(t.li,{children:"Build, run, evaluate, and deploy, a basic copilot with Azure AI Studio."}),"\n",(0,o.jsx)(t.li,{children:"Explore the Azure AI curated VS Code environment to customize the sample"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Keep in mind that this is a ",(0,o.jsx)(t.em,{children:"quickstart sample"})," and is ",(0,o.jsx)(t.strong,{children:"not meant for production use"}),". We encourage you to extend and customize the sample to understand the platform capabilities and end-to-end development workflow. Make sure to validate the responses yourself and evaluate its suitability for your application needs in context."]}),"\n",(0,o.jsx)(t.h2,{id:"2-copilot-architecture",children:"2| Copilot Architecture"}),"\n",(0,o.jsxs)(t.p,{children:["Let's first revisit the high-level application architecture for our copilot and familiarize ourselves with the core functional components. Our goal is to ",(0,o.jsx)(t.strong,{children:"build the chat function"})," component and deploy it to get a hosted ",(0,o.jsx)(t.strong,{children:"Copilot API"})," endpoint that we can integrate into front-end applications to provide a conversational chatbot capability grounded in our data.\r\n",(0,o.jsx)(t.img,{alt:"Copilot architecture",src:i(70151).Z+"",width:"2856",height:"1292"})]}),"\n",(0,o.jsx)(t.p,{children:"Let's review what we will need to implement this architecture:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Model Deployments"})," - we need deployed models for chat and embeddings."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Search Index"})," - we need a search index populated with our product data."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Azure Resources"})," - we need to setup and configure our Azure AI project."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"App Evaluation"})," - we need to evaluate copilot quality for responsible AI."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"App Deployment"})," - we need to deploy the copilot for a hosted API endpoint."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/aistudio-python-quickstart-sample",children:"copilot ai-sdk quickstart"})," provides a starter codebase that implements this chat function using the Retrieval Augmented Generation (RAG) pattern with custom data. The implementation makes use of Azure AI Studio and the ",(0,o.jsx)(t.a,{href:"https://aka.ms/aistudio/docs/sdk?ocid=buildia24_60days_blogs",children:"Azure AI SDK (Python)"})," for a code-first approach. Since these technologies are currently in preview, we expect the sample to keep evolving quickly and ",(0,o.jsx)(t.strong,{children:"recommend following the README-based tutorial there"})," for the latest instructions."]}),"\n",(0,o.jsx)(t.h2,{id:"3--azure-ai-sdk",children:"3 | Azure AI SDK"}),"\n",(0,o.jsxs)(t.p,{children:["Before we dive into the sample, let's take a moment to learn about the ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/python/api/overview/azure/ai?view=azure-python-preview?ocid=buildia24_60days_blogs",children:"Azure AI SDK for Python (preview)"}),". The SDK consists of two packages:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://pypi.org/project/azure-ai-generative/",children:"azure-ai-generative"})," - which provides the functionality needed for building, evaluating and deploying Generative AI applications. This has extra packages (index, evaluate, promptflow) you can use for enhanced local development capabilities - or optionally, remove if unused."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://pypi.org/project/azure-ai-resources/",children:"azure-ai-resources"})," - which provides the functionality for connecting to, and managing, your Azure AI projects and resources. Use this for control plane operations to create and manage data, indexes, models and deployments."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The generative package makes use of the resources package to ",(0,o.jsxs)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/how-to/sdk-generative-overview#connecting-to-projects?ocid=buildia24_60days_blogs",children:["create an ",(0,o.jsx)(t.code,{children:"AIClient"})," instance"]})," that can be used for connecting to the Azure AI project resources."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"from azure.ai.resources.client import AIClient\r\nfrom azure.identity import DefaultAzureCredential\r\n\r\nai_client = AIClient(\r\n    credential=DefaultAzureCredential(),\r\n    subscription_id='subscription_id',\r\n    resource_group_name='resource_group',\r\n    project_name='project_name'\r\n)\n"})}),"\n",(0,o.jsx)(t.p,{children:"Once connected, you can use the generative package to build an index, run a local evaluation, or deploy chat functions and prompt flows, using the imports shown:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"from azure.ai.generative.index import build_index\r\nfrom azure.ai.generative.evaluate import evaluate\r\nfrom azure.ai.resources.entities.deployment import Deployment\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To get started, you will need to ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/ai-studio/how-to/sdk-install?ocid=buildia24_60days_blogs",children:"install the SDK"})," in your local development environment. When you use the quickstart sample with GitHub Codespaces or the Azure AI curated VS Code environment, the SDK comes pre-installed and ready to use."]}),"\n",(0,o.jsx)(t.h2,{id:"4--using-the-quickstart-sample",children:"4 | Using the Quickstart Sample"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://github.com/Azure-Samples/aistudio-python-quickstart-sample",children:"copilot ai-sdk quickstart"})," provides a comprehensive ",(0,o.jsx)(t.strong,{children:"README.md"})," document that describes the step-by-step process for building, running, evaluating, and deploying, a starter copilot sample."]}),"\n",(0,o.jsx)(t.h3,{id:"41--pre-requisites",children:"4.1 | Pre-Requisites"}),"\n",(0,o.jsx)(t.p,{children:"To get started, you will need an active Azure subscription and have access to the Azure OpenAI service to create and deploy the required models for chat completion, chat evaluation and embedddings. You will also need a GitHub account."}),"\n",(0,o.jsx)(t.h3,{id:"42--setup-dev-environment",children:"4.2 | Setup Dev Environment"}),"\n",(0,o.jsx)(t.p,{children:'The fastest way to get started exploring the sample is to fork the repo to your personal profile, then launch GitHub Codespaces by navigating to the "Codespaces" tab under the "Code" dropdown and creating a new codespace. Active codespaces are listed as shown below.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Launch",src:i(54347).Z+"",width:"440",height:"308"})}),"\n",(0,o.jsxs)(t.p,{children:["Once the Codespace is ready, you will see the Visual Studio Code editor view in your browser tab. Open the ",(0,o.jsx)(t.strong,{children:"README.md"})," in the editor, then follow the instructions to complete the tutorial."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Run",src:i(82621).Z+"",width:"1237",height:"793"})}),"\n",(0,o.jsx)(t.h3,{id:"43--initialize-azure-ai-resources",children:"4.3 | Initialize Azure AI Resources"}),"\n",(0,o.jsx)(t.p,{children:"To build the copilot, we need to provision the Azure resources listed below."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["An ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/concepts/ai-resources?ocid=buildia24_60days_blogs",children:"Azure AI hub resource"})," to provide a working ",(0,o.jsx)(t.em,{children:"team"})," environment and manage resource access, billing and more."]}),"\n",(0,o.jsxs)(t.li,{children:["An ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/how-to/create-projects?ocid=buildia24_60days_blogs",children:"Azure AI project resource"})," to organize the data, models, and deployments for ",(0,o.jsx)(t.em,{children:"an application"}),", and save its state for future use."]}),"\n",(0,o.jsxs)(t.li,{children:["An ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/search/?ocid=buildia24_60days_blogs",children:"Azure AI Search resource"})," to host the search index for our product data."]}),"\n",(0,o.jsxs)(t.li,{children:["An ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/openai?ocid=buildia24_60days_blogs",children:"Azure OpenAI resource"})," to deploy the models for chat completion, chat evaluation and embeddings."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["For now, we will be creating these resources from the ",(0,o.jsx)(t.a,{href:"https://ai.azure.com?ocid=buildia24_60days_blogs",children:"Azure AI Studio UI"})," and ",(0,o.jsx)(t.a,{href:"https://portal.azure.com?ocid=buildia24_60days_blogs",children:"Azure Portal"})," UI in the browser. However, we expect future support for a command-line (CLI) based approach for efficiency and automation. Refer to the sample README for the step-by-step guidance."]}),"\n",(0,o.jsx)(t.h3,{id:"44--initialize-azure-configuration",children:"4.4 | Initialize Azure Configuration"}),"\n",(0,o.jsxs)(t.p,{children:["Once we've created the Azure resources, we need to configure our Visual Studio Code environment to connect to the cloud.  The repo comes with a ",(0,o.jsx)(t.code,{children:"config.sample.json"})," that shows you the properties that need to be configured. The easiest way to set these is to download the ",(0,o.jsx)(t.code,{children:"config.json"})," file from your Azure AI project resource and place it in the root folder. This information is then used to initialize the",(0,o.jsx)(t.code,{children:"AIClient"})," in the code, to support interactions with those resources, as explained earlier."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\r\n    "subscription_id": "your_subscription_id",\r\n    "resource_group": "your_resource_group",\r\n    "project_name": "your_project_name"\r\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"45--configure-environment-variables",children:"4.5 | Configure Environment Variables"}),"\n",(0,o.jsxs)(t.p,{children:["The codebase comes with a sample ",(0,o.jsx)(t.code,{children:".env.sample"})," file that shows the environment variables you will need to configure, to run the sample. Copy this to ",(0,o.jsx)(t.code,{children:".env"})," then replace the placeholder strings with the values from the respective Azure resources you provisioned earlier. These environment variables will be used by the Azure AI SDK, to connect to relevant services (by endpoint) with required authentication (key) when implementing the chat function."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'AZURE_SUBSCRIPTION_ID=replace_with_azure_subscription_id\r\nOPENAI_API_TYPE=azure\r\nOPENAI_API_KEY=replace_with_openai_key\r\nOPENAI_API_BASE=replace_with_openai_base\r\nOPENAI_API_VERSION=replace_with_openai_version\r\nAZURE_AI_SEARCH_ENDPOINT=replace_with_aisearch_target\r\nAZURE_AI_SEARCH_KEY=replace_with_aisearch_key\r\nAZURE_AI_SEARCH_INDEX_NAME=replace_with_aisearch_index_name\r\nAZURE_OPENAI_CHAT_MODEL=gpt-35-turbo-16k\r\nAZURE_OPENAI_CHAT_DEPLOYMENT=gpt-35-turbo-16k-0613\r\nAZURE_OPENAI_EVALUATION_MODEL=gpt-35-turbo-16k\r\nAZURE_OPENAI_EVALUATION_DEPLOYMENT="gpt-35-turbo-16k-0613"\r\nAZURE_OPENAI_EMBEDDING_MODEL=text-embedding-ada-002\r\nAZURE_OPENAI_EMBEDDING_DEPLOYMENT=text-ada-embedding-002-2\n'})}),"\n",(0,o.jsx)(t.h3,{id:"46--explore-custom-data",children:"4.6 | Explore Custom Data"}),"\n",(0,o.jsxs)(t.p,{children:["At this point, the base system configuration is done and we just need to populate the data (for the search index) and then run, evaluate, and iterate, the chat function till the response quality is acceptable. Let's take a minute to explore the codebase ",(0,o.jsx)(t.code,{children:"data/"})," folder to see the sample data we provide in the starter. We only use the product catalog data (to build the index) in ",(0,o.jsx)(t.em,{children:"this"})," sample but you can explore usage of the other data types for advanced features or integrations later."]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Data Folder"}),(0,o.jsx)(t.th,{children:"Data Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"data/0-misc"})}),(0,o.jsx)(t.td,{children:"General information - e.g., customer policies for org."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"data/1-customer-info"})}),(0,o.jsx)(t.td,{children:"Customer purchase records  - for 13 fictional customers"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"data/2-chat-history"})}),(0,o.jsx)(t.td,{children:"Customer conversation history - for a subset of customers"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"data/3-product-info"})}),(0,o.jsx)(t.td,{children:"Product catalog data - for 20 items in 7 categories"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"data/4-scores"})}),(0,o.jsx)(t.td,{children:"Test data - for use in evaluations"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"data/5-prompt-templates"})}),(0,o.jsx)(t.td,{children:"Example templates - for different contexts"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"47--explore-the-codebase",children:"4.7 | Explore The Codebase"}),"\n",(0,o.jsx)(t.p,{children:"Here are the main files you need to be aware of:"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"File"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"src/run.py"})}),(0,o.jsx)(t.td,{children:"The main entry point for executing core operations"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"src/streaming_utils.py"})}),(0,o.jsx)(t.td,{children:"Functions for use in interactive conversation"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"src/copilot_aisdk/chat.py"})}),(0,o.jsx)(t.td,{children:"The chat function implementation."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"src/system-message.jinja2"})}),(0,o.jsx)(t.td,{children:"The prompt template with system context (assistant)"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:"You can now execute the various steps of the end-to-end workflow as follows:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"python src/run.py --build-index"})," - to build the search index"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:'python src/run.py --question "which tent is the most waterproof?"'})," - to test the chat function"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"python src/run.py --evaluate"})," - to evaluate the chat function"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"python src/run.py --deploy"})," - to deploy the chat function"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"python src/run.py --invoke"})," - to test the deployed chat API endpoint"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Note that the exact syntax and parameters used in these commands may evolve over time - so check the README in the sample for the latest instructions."}),"\n",(0,o.jsx)(t.h3,{id:"48--explore-the-chat-function",children:"4.8 | Explore The Chat Function"}),"\n",(0,o.jsxs)(t.p,{children:["Let's briefly talk about the custom code for the copilot, found in the ",(0,o.jsx)(t.code,{children:"src/chat.py"})," file."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The main entry point is the ",(0,o.jsx)(t.code,{children:"chat_completion"})," function that takes a list of messages representing the conversation history."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"get_documents"}),' function extracts the last message ("user question") and uses it to retrieve relevant search results using the OpenAI embeddings model and the Azure AI Search client respectively, in a ',(0,o.jsx)(t.em,{children:"retrieval augmented generation"})," (RAG) pattern."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"chat_completion"})," function then takes the returned response and crafts an enhanced prompt (with the system context template, initial user message, and returned search results) and sends the request to the OpenAI chat model for completion."]}),"\n",(0,o.jsx)(t.li,{children:"The returned response is then returned to the user either interactively, or by adding it to the conversation thread (in stream mode)."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"5--operationalization",children:"5 | Operationalization"}),"\n",(0,o.jsx)(t.p,{children:"The starter sample provides a simple sequence of command-line operations to build, run, evaluate, deploy, and test, the chat function. However, in a real-world scenario, you would integrate the deployed app with a front-end chat UI (like the Contoso Outdoors website) - and use the Azure AI Studio platform to further evaluate the chat function (batch runs), configure content filters (content safety), and monitor usage (performance) for iterative improvement. We'll discuss some of these tools and practices in the final post of this series."}),"\n",(0,o.jsx)(t.h2,{id:"6--customizing-the-sample",children:"6 | Customizing the Sample"}),"\n",(0,o.jsx)(t.p,{children:"The quickstart sample is a great starting point for exploring your own application scenarios using your own data. Note that the sample is not designed for production use - you will need to do your own validation and evaluation of responses to determine if the chat function is suitable for your application needs."}),"\n",(0,o.jsxs)(t.p,{children:["However, this is a great time to introduce you to the ",(0,o.jsx)(t.em,{children:"cloud development environment"})," provided by the ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/how-to/develop-in-vscode?ocid=buildia24_60days_blogs",children:"Azure AI curated Visual Studio Code environment"}),".This allows you to open your fork of the sample directly from Azure AI Studio, creating a compute instance with a development environment that has the Azure AI SDK and other dependencies pre-installed. Watch this video from the Azure AI Studio team to see how that works - then replicate the process to jumpstart your application exploration journey."]}),"\n",(0,o.jsx)("iframe",{width:"600",height:"400",src:"https://www.youtube.com/embed/UbJg7RNLi7E",title:"Build generative AI applications using custom code with Azure AI",frameborder:"0",allowfullscreen:!0}),"\n",(0,o.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsxs)(t.p,{children:["We've referenced a number of links and samples in this post. Bookmark the ",(0,o.jsx)(t.a,{href:"https://aka.ms/ai-studio/collection?ocid=buildia24_60days_blogs",children:(0,o.jsx)(t.em,{children:"Azure AI Studio: Code-First Collection"})})," and revisit it regularly for an updated list of resources for code-first development of generative AI applications on Azure."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},54347:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/01-launch-codespaces-1ad39efaa8d2fb4aaba22c3d862d4481.png"},82621:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/03-running-codespaces-b22f43ec205440e361612be69b0fa8bf.png"},89054:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/banner-4d2eba8f8235ac22e80ba59b0b9a3651.png"},70151:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/copilot-architecture-a14ddb6e2ac8e5ded7e544f1093325fc.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>r});var o=i(67294);const n={},a=o.createContext(n);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);