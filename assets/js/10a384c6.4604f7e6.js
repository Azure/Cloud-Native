"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69218],{60653:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=o(85893),i=o(11151);const s={date:"2024-03-11T09:01",slug:"build-contoso-chat-end-to-end",title:"4.1 Build Contoso Chat End-to-End",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["promptflow","azure","aistudio","generativeai","e2e","llmops"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Building generative AI applications poses new challenges for streamlining end-to-end application development - from prompt engineering, to LLM Ops. In this post we introduce Contoso Chat, a sample application for building a copilot with your data - using the Azure AI platform with prompt flow.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},a=void 0,r={permalink:"/Cloud-Native/60DaysOfIA/build-contoso-chat-end-to-end",source:"@site/blog-60daysofIA/2024-03-11/build-contoso-chat-end-to-end.md",title:"4.1 Build Contoso Chat End-to-End",description:"Building generative AI applications poses new challenges for streamlining end-to-end application development - from prompt engineering, to LLM Ops. In this post we introduce Contoso Chat, a sample application for building a copilot with your data - using the Azure AI platform with prompt flow.",date:"2024-03-11T09:01:00.000Z",formattedDate:"March 11, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/60DaysOfIA/tags/build-intelligent-apps"},{label:"60-days-of-IA",permalink:"/Cloud-Native/60DaysOfIA/tags/60-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/60DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/60DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/60DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/60DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/60DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/60DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/60DaysOfIA/tags/github-actions"}],readingTime:9.93,hasTruncateMarker:!1,authors:[{name:"#60Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"cnteam"}],frontMatter:{date:"2024-03-11T09:01",slug:"build-contoso-chat-end-to-end",title:"4.1 Build Contoso Chat End-to-End",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["promptflow","azure","aistudio","generativeai","e2e","llmops"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Building generative AI applications poses new challenges for streamlining end-to-end application development - from prompt engineering, to LLM Ops. In this post we introduce Contoso Chat, a sample application for building a copilot with your data - using the Azure AI platform with prompt flow.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"4. Fuel Your Intelligent Apps with Azure AI",permalink:"/Cloud-Native/60DaysOfIA/fuel-your-intelligent-apps-with-azure-ai"}},l={authorsImageUrls:[void 0]},d=[{value:"What You&#39;ll Learn Today",id:"what-youll-learn-today",level:2},{value:"Contoso Chat Sample",id:"contoso-chat-sample",level:2},{value:"RAG Design Pattern",id:"rag-design-pattern",level:2},{value:"Prompt flow Orchestration",id:"prompt-flow-orchestration",level:2},{value:"Azure Provisioning",id:"azure-provisioning",level:2},{value:"Hands-on Lab",id:"hands-on-lab",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s,{children:[(0,n.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/60daysofia/build-contoso-chat-end-to-end"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,n.jsx)("meta",{property:"og:description",content:"Building generative AI applications poses new challenges for streamlining end-to-end application development - from prompt engineering, to LLM Ops. In this post we introduce Contoso Chat, a sample application for building a copilot with your data - using the Azure AI platform with prompt flow."}),(0,n.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,n.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/60daysofIA/build-contoso-chat-end-to-end"}),(0,n.jsx)("meta",{name:"twitter:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,n.jsx)("meta",{name:"twitter:description",content:"Building generative AI applications poses new challenges for streamlining end-to-end application development - from prompt engineering, to LLM Ops. In this post we introduce Contoso Chat, a sample application for building a copilot with your data - using the Azure AI platform with prompt flow."}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,n.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/60daysofIA/build-contoso-chat-end-to-end"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Welcome to Day 1\ufe0f\u20e3 of Azure AI week on ##60Days Of IA"})}),"\n",(0,n.jsxs)(t.p,{children:["In today's post, we'll introduce you to the ",(0,n.jsx)(t.a,{href:"https://aka.ms/aitour/contoso-chat",children:"Contoso Chat"})," sample - a comprehensive end-to-end reference sample that walks you through the journey of building the customer support AI application we talked about in our kickoff post yesterday. By the end of this tutorial, you will be able to:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"explain how to build a copilot app end-to-end on Azure AI"}),"\n",(0,n.jsx)(t.li,{children:"explain what Retrieval Augmented Generation does for copilot apps"}),"\n",(0,n.jsx)(t.li,{children:"explain what prompt flow is and how it streamlines your workflow"}),"\n",(0,n.jsx)(t.li,{children:"describe the Azure AI platform and Azure AI SDK capabilities"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Ready? Let's go!"})}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-learn-today",children:"What You'll Learn Today"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contoso Chat Sample"}),": Building a copilot with Azure AI and Prompt flow"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Retrieval Augmented Generation"}),": Design pattern for using custom data"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Prompt flow"}),": Open-source tooling for orchestrating end-to-end workflow"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Azure resources"}),": Provisioning Azure for the Contoso Chat AI project"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Hands-on lab"}),": Step-by-step tutorial to build & deploy Contoso Chat"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Exercise"}),": ",(0,n.jsx)(t.a,{href:"https://aka.ms/aitour/contoso-chat",children:(0,n.jsx)(t.em,{children:"Fork the sample"})})," then work through the hands-on tutorial."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Resources"}),": ",(0,n.jsx)(t.a,{href:"https://aka.ms/ai-studio/collection?ocid=buildia24_60days_blogs",children:(0,n.jsx)(t.em,{children:"Explore this collection"})})," for samples, docs and training resources."]}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Build Contoso Chat - from prompt-engineering to LLM Ops",src:o(74609).Z+"",width:"1000",height:"420"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"contoso-chat-sample",children:"Contoso Chat Sample"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://aka.ms/aitour/contoso-chat",children:"Contoso Chat"})," sample provides a comprehensive end-to-end reference example for using Azure AI Studio and Prompt flow, to build a copilot application end-to-end. The sample implements a ",(0,n.jsx)(t.em,{children:"customer support chat AI"})," experience - allowing customers on the Contoso Outdoors website to ask questions about related products and receive relevant responses based on their query and purchase history. The illustrated guide below gives you a high-level overview of the steps involved in building the application - from provisioning Azure resources to deploying and using the chat AI endpoint. To learn more about the application scenario, refer to our ",(0,n.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/60DaysOfIA/fuel-your-intelligent-apps-with-azure-ai",children:"kickoff post"})," for this week."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sketchnote",src:o(36270).Z+"",width:"3840",height:"2160"})}),"\n",(0,n.jsx)(t.h2,{id:"rag-design-pattern",children:"RAG Design Pattern"}),"\n",(0,n.jsxs)(t.p,{children:["Our first step is to define the application architecture for Contoso Chat. We know we want to have our copilot ",(0,n.jsx)(t.em,{children:"grounded in our data"})," so that customer queries return responses that reflect the product catalog or customer purchase history."]}),"\n",(0,n.jsxs)(t.p,{children:["The challenge is that Large Language Models (LLM) are trained on massive datasets so the default responses may not be ",(0,n.jsx)(t.em,{children:"relevant"})," or ",(0,n.jsx)(t.em,{children:"accurate"})," with respect to your data. This is where prompt engineering and design patterns like Retrieval Augmented Generation (RAG) come in. RAG is a design pattern that uses an information ",(0,n.jsx)(t.em,{children:"retrieval"})," component to get data relevant to the user prompt, then ",(0,n.jsx)(t.em,{children:"augments"})," the prompt with that context before sending it to the LLM, as illustrated below."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"RAG",src:o(43304).Z+"",width:"2452",height:"1190"})}),"\n",(0,n.jsx)(t.p,{children:"We can break down the workflow into the following steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'User asks a question ("User prompt")'}),"\n",(0,n.jsx)(t.li,{children:'The question is sent to an information retrieval component ("AI Search")'}),"\n",(0,n.jsx)(t.li,{children:'This vectorizes the query ("Embedding Model")'}),"\n",(0,n.jsx)(t.li,{children:'And uses the vector to retrieve relevant results ("Product Index")'}),"\n",(0,n.jsx)(t.li,{children:'Results are used to augment User prompt ("Model prompt")'}),"\n",(0,n.jsx)(t.li,{children:'The enhanced prompt is sent to the LLM ("Chat completion")'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The answer is then returned to the user, who now sees a response that is more relevant to the products in your catalog, and personalized to their purchase history. Note that this basic copilot workflow requires us to deploy two large language models:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Text-Embedding model (e.g., ",(0,n.jsx)(t.code,{children:"text-embedding-ada-002"}),") that vectories the user query"]}),"\n",(0,n.jsxs)(t.li,{children:["Text-Generation model (e.g., ",(0,n.jsx)(t.code,{children:"gpt-35-turbo"}),") that generates the final response"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"prompt-flow-orchestration",children:"Prompt flow Orchestration"}),"\n",(0,n.jsxs)(t.p,{children:["Implementing the RAG pattern requires a number of interactions between the language model deployments and the data sources used (e.g., search index for products, cusomer database for purchase history), and ",(0,n.jsx)(t.em,{children:"coordination"})," of intermediate steps before the final response can be delivered. This is where frameworks like Prompt flow, LangChain and Semantic kernel come in."]}),"\n",(0,n.jsxs)(t.p,{children:["The Contoso Chat sample makes extensive use of Prompt flow - an ",(0,n.jsx)(t.a,{href:"https://github.com/microsoft/promptflow",children:"open-source project"})," on GitHub, with its own SDK and VS Code extension. Prompt flow provides a comprehensive solution that simplifies the process of prototyping, experimenting, iterating, and deploying your AI applications. It is ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/how-to/prompt-flow?ocid=buildia24_60days_blogs",children:"recommended for use as a feature within Azure AI Studio"}),", making it a natural first choice for building our Contoso Chat application. The figure shows a high-level architecture diagram showcasing the Azure components used with Prompt flow as the orchestration layer."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Prompt Flow Architecture",src:o(1794).Z+"",width:"2582",height:"866"})}),"\n",(0,n.jsxs)(t.p,{children:["With Prompt flow, your application is defined as a a directed acyclic graph of ",(0,n.jsx)(t.em,{children:"nodes"})," (",(0,n.jsx)(t.code,{children:"flow.dag.yaml"}),") that connect ",(0,n.jsx)(t.em,{children:"input"})," (prompt) and final ",(0,n.jsx)(t.em,{children:"output"})," (response) - with intermediate nodes implemented as Python ",(0,n.jsx)(t.em,{children:"functions"})," (tools) that process or transform the data flowing through them. The Prompt flow extension in VS Code provides a rich ",(0,n.jsx)(t.em,{children:"visual editor"})," capability as shown below, making it easy to define, debug, run, and test, your application in a local development environment. ",(0,n.jsx)(t.em,{children:"This view also helps us see how the RAG pattern is implemented in practice, in our copilot"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Contoso Chat Flow",src:o(74219).Z+"",width:"1436",height:"905"})}),"\n",(0,n.jsx)(t.h2,{id:"azure-provisioning",children:"Azure Provisioning"}),"\n",(0,n.jsxs)(t.p,{children:["The Contoso Chat sample comes with a ",(0,n.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/blob/main/provision.sh",children:(0,n.jsx)(t.code,{children:"provision.sh"})})," script that will pre-provision many of the Azure resources for you, for use in the development workflow. To get started with the implementation, follow the instructions in the ",(0,n.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/blob/main/README.md",children:"README"})," file in the repo by doing the following:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/fork",children:"Fork the sample"})," to your own GitHub account"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/blob/main/README.md#3-development-environment",children:"Setup development environment"})," using GitHub Codespaces"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/tree/main#41-authenticate-with-azure",children:"Authenticate"})," with your Azure subscription"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/tree/main#42-run-provisioning-script",children:"Run the Provisioning script"})," and verify your setup is complete"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"At this point, you should have an Azure resource group created for your project with the following resources created for your application. Note that in order to complete this step, you must have a valid Azure subscription that has been given access to the relevant Azure OpenAI services. You must also have available quota for model deployments in the specific regions that we use in the provisioning script."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Provisioning Azure",src:o(6371).Z+"",width:"2622",height:"1302"})}),"\n",(0,n.jsx)(t.h2,{id:"hands-on-lab",children:"Hands-on Lab"}),"\n",(0,n.jsxs)(t.p,{children:["You can now complete the step-by-step tutorial in the ",(0,n.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/blob/main/README.md",children:"README"})," to build, evaluate and deploy the application. Let's quickly review the main steps involved in the end-to-end workflow."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Stage"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1. Build a Copilot."}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Get familiar with the application codebase. Check out the ",(0,n.jsx)(t.code,{children:"data/"})," folder to see the data we will be using for customer order (history) and product catalog (index)."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2. Provision Azure."}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Run the ",(0,n.jsx)(t.code,{children:"./provision.sh"})," script or manually provision the required resources. This should setup an Azure AI hub (manage), an Azure AI project (build), an Azure Cosmos DB resource  (customer data) and an Azure AI Search resource (product index). Verify you have a ",(0,n.jsx)(t.code,{children:"config.json"})," created (for local Azure configuration) and an ",(0,n.jsx)(t.code,{children:".env"})," file (for relevant keys and endpoints for access)."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"3. Add Models & Data."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The provisioning script does the model deployments - but review them now. Make sure you have a chat completion model (gpt-35-turbo), a chat evaluation model (gpt-4) and a text-embeddings model (text-embedding-ada-02). Use the provided notebooks to populate the data in Azure Cosmos DB and Azure AI Search."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4. Add Connections"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["The ",(0,n.jsx)(t.code,{children:"devcontainer"})," configuration ensures you have the Prompt flow extension installed in VS Code, and the ",(0,n.jsx)(t.code,{children:"pf"})," too for command-line, by default. Use the provided notebooks to setup ",(0,n.jsx)(t.em,{children:"connection configurations"})," from prompt flow to key services (Azure OpenAI, Azure AI Search, Azure Cosmos DB) for use in related notes of the prompt flow graph. Use the ",(0,n.jsx)(t.code,{children:"pf"})," tool to validate these were setup correctly (on VS Code). The provision script may have setup some of these for you in the cloud (Azure) for use in later stages (deploy) - take a minute to verify and correct these as described in README."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"5. Build Prompt Flow"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["You are all set to run the prompt flow with your data in Azure.  Explore the components of the prompt flow. Click the ",(0,n.jsx)(t.em,{children:"stylized P"})," icon in the sidebar to see the Prompt Flow extension activity menu. Open the ",(0,n.jsx)(t.code,{children:"contoso-chat/flow.dag.yaml"})," file in VS Code, then click the ",(0,n.jsx)(t.em,{children:"Visual Editor"})," option to see the view shown in the earlier screeshot above. Run it to validate it works - then explore the nodes, outputs and code."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"6. Evaluate Prompt Flow"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["You can complete a local evaluation by opening the relevant notebook and running it ",(0,n.jsx)(t.em,{children:"cell-by-cell"}),". Review the code in each cell of the notebook, then analyze the output to understand what the relevant metrics are telling you about the quality of the basic flow. The ",(0,n.jsx)(t.em,{children:"batch run"})," step takes a while and requires Azure connection setup so consider that an optional step. Switch periodically to the ",(0,n.jsx)(t.em,{children:"Azure AI Studio"})," website view to see how the relevant Azure AI project pages are updated to show the status of various activities or configurations."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"7. Deploy Prompt Flow"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Deploying the prompt flow is a 2-step process. First, we need to upload the flow (code, assets) to Azure AI Studio. Do this using the provided notebook, or you can try to do this manually using the ",(0,n.jsx)(t.em,{children:"import"})," option in Azure AI Studio under the ",(0,n.jsx)(t.em,{children:"Prompt Flow"}),' section. Once uploaded, you need to select a runtime ("automatic") and start it to get a compute instance provisioned to execute your flow. Use that to ',(0,n.jsx)(t.em,{children:"test"})," that your flow was imported successfully. Then click the ",(0,n.jsx)(t.em,{children:"Deploy"})," option to deploy the flow. This will take a while - refresh the ",(0,n.jsx)(t.em,{children:"Deployments"})," page to get updates. Once deployment is successful, use the built-in testing feature to try a simple question against the hosted API endpoint. ",(0,n.jsx)(t.strong,{children:"Congratulations"})," Your chat AI endpoint is ready for use!"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"8. Summary & Clean up"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["This was a lot. Note that almost every step of this process can be achieved using code (SDK), command-line (CLI) or UI (Studio website) so explore the documentation. ",(0,n.jsx)(t.em,{children:"Note that Azure AI Studio is in preview"})," so the features are constantly evolving and things may break unexpectedly - send feedback if so! Finally, don't forget to ",(0,n.jsx)(t.strong,{children:"delete your codespaces and your Azure resources for this lab"})," to avoid unnecessary charges. And watch the sample repo for updates on workshop content and exercises to extend this further."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Completing this workshop can take 60-90 minutes based on your level of familiarity with the tools. In the ",(0,n.jsx)(t.em,{children:"next"})," blog post, we'll dive a bit deeper into the process with specific focus on the ",(0,n.jsx)(t.strong,{children:"Azure AI SDK"})," to understand ",(0,n.jsx)(t.em,{children:"how"})," you can implement core steps of the workflow from your Python application. And, in the ",(0,n.jsx)(t.em,{children:"final"})," post of this week, we'll return to the Contoso Chat sample to explore deployment and evaluation in more detail - with additional guidance for ensuring responsible AI usage in your generative AI applications."]}),"\n",(0,n.jsx)(t.h2,{id:"exercise",children:"Exercise"}),"\n",(0,n.jsxs)(t.p,{children:["Congratulations! You made it to the end of this whirlwind tour of the Contoso Chat sample. Now it's time for you to do the hard work of building this yoursel!! Start by ",(0,n.jsx)(t.a,{href:"https://aka.ms/aitour/contoso-chat",children:(0,n.jsx)(t.em,{children:"forking the sample"})})," - then follow the step-by-step instructions in the README."]}),"\n",(0,n.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(t.p,{children:["We've referenced a number of links and samples in this post. Bookmark the ",(0,n.jsx)(t.a,{href:"https://aka.ms/ai-studio/collection?ocid=buildia24_60days_blogs",children:(0,n.jsx)(t.em,{children:"Azure AI Studio: Code-First Collection"})})," and revisit it regularly for an updated list of resources for code-first development of generative AI applications on Azure."]})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},74609:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/banner-6dc91900960e8cdf2fbeece64e5fc877.png"},1794:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/contoso-chat-flow-93b5445266637eae6aefcc9e85678a8d.png"},36270:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/contoso-chat-sketchnote-d9a7a4995f13f09e9a5a9ef860d7e366.png"},74219:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/promptflow-visual-21dff741b41220833a6add4946da83ab.png"},6371:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/provision-azure-86013b78767740531d53ab8efc7fb697.png"},43304:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/rag-e3cc68e747ef64a374c15357852679f4.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>a});var n=o(67294);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);