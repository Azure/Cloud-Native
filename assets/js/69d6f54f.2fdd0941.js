"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3660],{78951:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=o(85893),n=o(11151);const i={date:"2024-03-14T09:00",slug:"build-a-copilot-on-azure-code-first-with-langchain",title:"4.4 Build a Copilot on Azure Code-First with Langchain",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["AzureAlStudio","copilot","RAG","Langchain"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"This project uses the AI Search service to create a vector store for a custom department store data.  To enable the user to ask questions our data in a conversational format, we'll using Langchain to connect our prompt template with our Azure Open AI LLM.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},s=void 0,r={permalink:"/Cloud-Native/60DaysOfIA/build-a-copilot-on-azure-code-first-with-langchain",source:"@site/blog-60daysofIA/2024-03-14/build-a-copilot-on-azure-code-first-with-prompt-flow.md",title:"4.4 Build a Copilot on Azure Code-First with Langchain",description:"This project uses the AI Search service to create a vector store for a custom department store data.  To enable the user to ask questions our data in a conversational format, we'll using Langchain to connect our prompt template with our Azure Open AI LLM.",date:"2024-03-14T09:00:00.000Z",formattedDate:"March 14, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/60DaysOfIA/tags/build-intelligent-apps"},{label:"60-days-of-IA",permalink:"/Cloud-Native/60DaysOfIA/tags/60-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/60DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/60DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/60DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/60DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/60DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/60DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/60DaysOfIA/tags/github-actions"}],readingTime:6.445,hasTruncateMarker:!1,authors:[{name:"#60Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"cnteam"}],frontMatter:{date:"2024-03-14T09:00",slug:"build-a-copilot-on-azure-code-first-with-langchain",title:"4.4 Build a Copilot on Azure Code-First with Langchain",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["AzureAlStudio","copilot","RAG","Langchain"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"This project uses the AI Search service to create a vector store for a custom department store data.  To enable the user to ask questions our data in a conversational format, we'll using Langchain to connect our prompt template with our Azure Open AI LLM.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,nextItem:{title:"4.3 Build a Copilot on Azure Code-First with Prompt Flow",permalink:"/Cloud-Native/60DaysOfIA/build-a-copilot-on-azure-code-first-with-prompt-flow"}},c={authorsImageUrls:[void 0]},l=[{value:"What You&#39;ll Learn Today",id:"what-youll-learn-today",level:2},{value:"1 | Introduction",id:"1--introduction",level:2},{value:"What is Langchain?",id:"what-is-langchain",level:2},{value:"2 | Pre-Requisites",id:"2--pre-requisites",level:2},{value:"Open the copilot with Jupiter notebook",id:"open-the-copilot-with-jupiter-notebook",level:2},{value:"Connect to azure resources",id:"connect-to-azure-resources",level:2},{value:"Create Prompt Template",id:"create-prompt-template",level:2},{value:"Add Langchain to connect Azure OpenAI and Prompt template",id:"add-langchain-to-connect-azure-openai-and-prompt-template",level:2},{value:"Run the copilot with Jupiter notebook",id:"run-the-copilot-with-jupiter-notebook",level:2},{value:"Validate your copilot by asking a question about your custom data.",id:"validate-your-copilot-by-asking-a-question-about-your-custom-data",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i,{children:[(0,a.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/60daysofia/build-a-copilot-on-azure-code-first-with-langchain"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,a.jsx)("meta",{property:"og:description",content:"This project uses the AI Search service to create a vector store for a custom department store data.  To enable the user to ask questions our data in a conversational format, we'll using Langchain to connect our prompt template with our Azure Open AI LLM."}),(0,a.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,a.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/60daysofIA/build-a-copilot-on-azure-code-first-with-langchain"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,a.jsx)("meta",{name:"twitter:description",content:"This project uses the AI Search service to create a vector store for a custom department store data.  To enable the user to ask questions our data in a conversational format, we'll using Langchain to connect our prompt template with our Azure Open AI LLM."}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,a.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/60daysofIA/build-a-copilot-on-azure-code-first-with-langchain"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Welcome to Day 4\ufe0f\u20e3 of the Azure AI week on #60Days Of IA"}),"\r\nIn the previous post, we learned about how to get started with the Azure AI SDK and Prompt Flow to build a Copilot. In today's post we'll be covering ",(0,a.jsx)(t.code,{children:"building a copilot with custom code and data using Langchain"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-learn-today",children:"What You'll Learn Today"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Quickstart Sample: Using Langchain to build a copilot."}),"\n",(0,a.jsx)(t.li,{children:'What is "Langchain" ?'}),"\n",(0,a.jsx)(t.li,{children:"Build the Copilot"}),"\n",(0,a.jsx)(t.li,{children:"Evaluate the Copilot"}),"\n",(0,a.jsx)(t.li,{children:"Deploy the Copilot"}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Challenge"}),": ",(0,a.jsx)(t.a,{href:"https://github.com/Azure-Samples/aistudio-python-langchain-sample/tree/main",children:"Try this quickstart sample"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Resources"}),": To learn more","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://aka.ms/azureaistudio?ocid=buildia24_60days_blogs",children:"Azure AI Studio"})," - UI to explore, build & manage AI solutions."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio?ocid=buildia24_60days_blogs",children:"Azure AI Studio Docs"})," - Azure AI Studio documentation."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-services/what-are-ai-services?ocid=buildia24_60days_blogs",children:"Azure AI Services"})," - Azure AI Services documentation."]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/training/modules/improve-search-results-vector-search?ocid=buildia24_60days_blogs",children:"Training: Using vector search in Azure Cognitive Search"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/tutorials/deploy-chat-web-app?ocid=buildia24_60days_blogs",children:"Tutorial: Deploy a web app for chat on your data"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Build a Copilot on Azure Code-First with Langchain",src:o(23130).Z+"",width:"1000",height:"420"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"1--introduction",children:"1 | Introduction"}),"\n",(0,a.jsxs)(t.p,{children:["This project use the AI Search service to create a vector store for a custom department store data.  We will be using Azure Open AI's text-embedding-ada-002 deployment for embedding the data in vectors. The vector representation of your data is stored in ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search?ocid=buildia24_60days_blogs",children:"Azure AI Search"}),' (formerly known as "Azure Cognitive Search").']}),"\n",(0,a.jsx)(t.p,{children:"To enable the user to ask questions our data in a conversational format, we'll using Langchain to connect our prompt template with our Azure Open AI LLM."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(35613).Z+"",width:"800",height:"101"})}),"\n",(0,a.jsx)(t.p,{children:"We'll use Retrieval Augmented Generation (RAG), a pattern used in AI which uses an LLM to generate answers with your own data. In addition, we'll  construct prompt template to provide the scope of our dataset, as well as the context to the submit questions. Lastly, we'll maintain the state of the conversation by store the chat history in the prompt."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Custom Data:"})," The sample data that we'll be using in this project is a department store dataset.  The dataset contains a list of customers, orders, products and their descriptions, and their prices.  We'll be using this dataset to create a copilot that can answer questions about the products in the dataset."]}),"\n",(0,a.jsx)(t.h2,{id:"what-is-langchain",children:"What is Langchain?"}),"\n",(0,a.jsx)(t.p,{children:"Langchain is a framework for developing applications powered by language models. It enables you to connect a language model such as Azure OpenAI to a prompt template including: prompt instructions, chat history, context of the chat conversation, few shot examples, content to ground its response in, etc.).  This helps facilitate end-users to interact with the application to ask questions and language models to generate responses in a conversational format."}),"\n",(0,a.jsx)(t.p,{children:"In this exercise, we'll be using ConversationalRetrievalChain, which is a subclass of langchain that handles chats that are based on retrieving data from documents or vector datasources. We will use it to connect the Azure OpenAI model, retriever, prompt template and chat memory in order to search the AI Search database to retrieve the most relevant response. To activate the instance you need an LLM model (ex. gpt-35-turbo) to retrieve response, the prompt template rules, and chat history."}),"\n",(0,a.jsx)(t.h2,{id:"2--pre-requisites",children:"2 | Pre-Requisites"}),"\n",(0,a.jsxs)(t.p,{children:["Completing the ",(0,a.jsx)(t.a,{href:"https://github.com/Azure-Samples/aistudio-python-langchain-sample/tree/main",children:"tutorial"})," requires the following:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["An Azure subscription - ",(0,a.jsx)(t.a,{href:"https://azure.microsoft.com/free/cognitive-services?ocid=buildia24_60days_blogs",children:"Create one for free"})]}),"\n",(0,a.jsxs)(t.li,{children:["Access to Azure OpenAI in the Azure Subscription - ",(0,a.jsx)(t.a,{href:"https://aka.ms/oai/access?ocid=buildia24_60days_blogs",children:"Request access here"})]}),"\n",(0,a.jsxs)(t.li,{children:["Custom data to ground the copilot - ",(0,a.jsx)(t.a,{href:"https://github.com/Azure-Samples/aistudio-python-langchain-sample/tree/main/data/3-product-info",children:"Sample product-info data is provided"})]}),"\n",(0,a.jsxs)(t.li,{children:["A GitHub account - ",(0,a.jsx)(t.a,{href:"https://github.com/signup",children:"Create one for free"})]}),"\n",(0,a.jsxs)(t.li,{children:["Access to GitHub Codespaces - ",(0,a.jsx)(t.a,{href:"https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#monthly-included-storage-and-core-hours-for-personal-accounts",children:"Free quota should be sufficient"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The tutorial uses Azure AI Studio which is currently in public preview."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Read ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/reference/region-support#azure-public-regions?ocid=buildia24_60days_blogs",children:"the documentation"})," to learn about regional availability of Azure AI Studio (preview)"]}),"\n",(0,a.jsxs)(t.li,{children:["Read the ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-studio/faq?ocid=buildia24_60days_blogs",children:"Azure AI Studio FAQ"})," for answers to some commonly-asked questions."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"open-the-copilot-with-jupiter-notebook",children:"Open the copilot with Jupiter notebook"}),"\n",(0,a.jsx)(t.p,{children:"We'll be using Python SDK to create our copilot for the Contoso outdoor/camping gear AI Chat application."}),"\n",(0,a.jsxs)(t.p,{children:["Let's begin by opening the ",(0,a.jsx)(t.code,{children:"copilot_langchain.ipynb"})," notebook in the visual studio code (VS code) editor."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(72394).Z+"",width:"800",height:"539"})}),"\n",(0,a.jsxs)(t.p,{children:["In VS code, click on ",(0,a.jsx)(t.strong,{children:"Select Kernel"}),". Then under Python Environments, select the ",(0,a.jsx)(t.strong,{children:"Python 3.10.13"})," environment you just created"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(90738).Z+"",width:"800",height:"561"})}),"\n",(0,a.jsx)(t.h2,{id:"connect-to-azure-resources",children:"Connect to azure resources"}),"\n",(0,a.jsx)(t.p,{children:"In order to access the resources you created in your project in AI studio, we'll use the python SDK to authenticate and connect to them."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(50002).Z+"",width:"800",height:"271"})}),"\n",(0,a.jsx)(t.p,{children:"To find the most relevant results from the vector database, we'll be using Langchain's retriever to search content from Azure AI Search."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(53526).Z+"",width:"1020",height:"73"})}),"\n",(0,a.jsx)(t.h2,{id:"create-prompt-template",children:"Create Prompt Template"}),"\n",(0,a.jsx)(t.p,{children:"Prompt engineering is an integral part of providing good user experience and relevant answers.  To achieve that you'll need to define a prompt template that includes system prompt rules, restrictions, chat history, input questions and context of conversation."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(39803).Z+"",width:"799",height:"398"})}),"\n",(0,a.jsx)(t.h2,{id:"add-langchain-to-connect-azure-openai-and-prompt-template",children:"Add Langchain to connect Azure OpenAI and Prompt template"}),"\n",(0,a.jsx)(t.p,{children:"To process the search results and apply the system rules, you need it initialize the LLM.  In our case, we'll using AzureChatOpenAI class to specify the GPT-35-Turbo model deployment and settings we need for the chat."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(18612).Z+"",width:"1024",height:"118"})}),"\n",(0,a.jsx)(t.p,{children:"All the dialogue that the end-user has with the chat needs retained to maintain the context of the conversation.  That's why we are using the ConversationMemoryBuffer class to store the chat history."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(77157).Z+"",width:"1023",height:"54"})}),"\n",(0,a.jsx)(t.p,{children:"To search the AI search database, we'll use a subclass of langchain to connect the Azure OpenAI, datasource retriever, prompt template and memory together.  When an instance of the langchain is invoke with an user input prompt, the retriever is used to search your data in AI Search.  The Azure OpenAI uses the prompt rules to process the response back to the user."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(91444).Z+"",width:"1024",height:"141"})}),"\n",(0,a.jsx)(t.h2,{id:"run-the-copilot-with-jupiter-notebook",children:"Run the copilot with Jupiter notebook"}),"\n",(0,a.jsx)(t.p,{children:"To run a single question & answer through the sample copilot:"}),"\n",(0,a.jsxs)(t.p,{children:["Click on ",(0,a.jsx)(t.strong,{children:"Run All"})," to run the notebook."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(55171).Z+"",width:"800",height:"557"})}),"\n",(0,a.jsx)(t.h2,{id:"validate-your-copilot-by-asking-a-question-about-your-custom-data",children:"Validate your copilot by asking a question about your custom data."}),"\n",(0,a.jsx)(t.p,{children:"Enter a question about the outdoor/camping gear and clothing products. For example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"Which of your sleeping bags are polyester?\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(97309).Z+"",width:"800",height:"92"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"The CozyNights Sleeping Bag (item_number: 7) and the MountainDream Sleeping Bag (item_number: 14) are both made of polyester."})}),"\n",(0,a.jsx)(t.p,{children:"Try asking another question. For example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"which tent is the most waterproof?\n"})}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(t.p,{children:["In this exercise you learned how to use Azure AI Search to create and load your data into a vector store.  Next, you learned how to use prompt engineering by constructing ",(0,a.jsx)(t.em,{children:"System Prompt"})," with instructions on how to engage with the user, the scope of the subject area to enforce grounding which prevents the LLM from providing responses that are not relevent to your data.  You should now be able to build AI applications using Lanchain to connect Azure OpenAI, your prompts, chat history, context and retriever of your data source.  You've now gained the knowledge on how to use the Retrieval Augmented Generation (RAG) pattern in AI which uses LLMs to generate answers with your own data."]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},90738:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/3-python-env-9c38c584f04ed4365a4a09c5d9a3c217.png"},72394:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/3-select-kernel-4a590a2678ea34d42043775763a364f1.png"},55171:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/4-run-all-6e800f7c782b2de0e96bbff73f3ef27d.png"},97309:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/5-question-7db74565dc1c2dbd15113ac7e853f154.png"},23130:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/BIA-4-ba7753c8afc145c9b84459b07a5132c6.png"},91444:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/config-langchain-b91e705d342577484133aaee2854f6f1.png"},50002:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/conn-to-azure-d3f47ba3b62c95931dd3c5319bc3c667.png"},18612:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/init-azure-openai-0b30056ffa1d37a6fb768c1a6e871e21.png"},53526:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/langchain-retriever-db15974322e58790f909b7cd71030445.png"},39803:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/prompt-template-94991e9e825cc5911bf333ceafa621b8.png"},35613:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/rag-pattern-9258e32b911bad45b26e89185e972eb1.png"},77157:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/store-convo-e7af9adef38f169dfad207e47071fa59.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>s});var a=o(67294);const n={},i=a.createContext(n);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);