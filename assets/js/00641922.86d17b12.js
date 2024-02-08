"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78245],{90700:(e,t,o)=>{o.r(t),o.d(t,{default:()=>U,prepareUserState:()=>K});var s=o(67294),r=o(66711),n=o(86010),a=o(16550);function i(e,t){const o=[...e];return o.sort(((e,o)=>t(e)>t(o)?1:t(o)>t(e)?-1:0)),o}const c="checkboxLabel_pwqD";var l=o(85893);const u="tags";function d(e){return new URLSearchParams(e).getAll(u)}function p(e,t){let{id:o,icon:r,label:n,tag:i,...p}=e;const h=(0,a.TH)(),m=(0,a.k6)(),[v,f]=(0,s.useState)(!1);(0,s.useEffect)((()=>{const e=d(h.search);f(e.includes(i))}),[i,h]);const b=(0,s.useCallback)((()=>{const e=function(e,t){const o=e.indexOf(t);if(-1===o)return e.concat(t);const s=[...e];return s.splice(o,1),s}(d(h.search),i),t=function(e,t){const o=new URLSearchParams(e);return o.delete(u),t.forEach((e=>o.append(u,e))),o.toString()}(h.search,e);m.push({...h,search:t,state:K()})}),[i,h,m]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{type:"checkbox",id:o,className:"screen-reader-only",onKeyDown:e=>{"Enter"===e.key&&b()},onFocus:e=>{e.relatedTarget&&e.target.nextElementSibling?.dispatchEvent(new KeyboardEvent("focus"))},onBlur:e=>{e.target.nextElementSibling?.dispatchEvent(new KeyboardEvent("blur"))},onChange:b,checked:v,...p}),(0,l.jsxs)("label",{ref:t,htmlFor:o,className:c,children:[n,r]})]})}const h=s.forwardRef(p),m={checkboxLabel:"checkboxLabel_FmrE"},v="operator";function f(e){return new URLSearchParams(e).get(v)??"OR"}function b(){const e="showcase_filter_toggle",t=(0,a.TH)(),o=(0,a.k6)(),[r,i]=(0,s.useState)(!1);(0,s.useEffect)((()=>{i("AND"===f(t.search))}),[t]);const c=(0,s.useCallback)((()=>{i((e=>!e));const e=new URLSearchParams(t.search);e.delete(v),r||e.append(v,r?"OR":"AND"),o.push({...t,search:e.toString(),state:K()})}),[r,t,o]);return(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"checkbox",id:e,className:"screen-reader-only","aria-label":"Toggle between or and and for the tags you selected",onChange:c,onKeyDown:e=>{"Enter"===e.key&&c()},checked:r}),(0,l.jsxs)("label",{htmlFor:e,className:(0,n.Z)(m.checkboxLabel,"shadow--md"),children:[(0,l.jsx)("span",{className:m.checkboxLabelOr,children:"OR"}),(0,l.jsx)("span",{className:m.checkboxLabelAnd,children:"AND"})]})]})}var w=o(83699);const g={showcaseCardImage:"showcaseCardImage_qZMA",showcaseCardHeader:"showcaseCardHeader_tfIV",showcaseCardTitle:"showcaseCardTitle_PRHG",svgIconFavorite:"svgIconFavorite_RKtI",showcaseCardSrcBtn:"showcaseCardSrcBtn_AI8i",showcaseCardBody:"showcaseCardBody_I0O5",cardFooter:"cardFooter_EuCG",tag:"tag_Aixk",textLabel:"textLabel_SLNc",colorLabel:"colorLabel_q5Sy"};var A=o(73935),x=o(95237);const y={tooltip:"tooltip_hKx1",tooltipArrow:"tooltipArrow_yATY"};function z(e){let{children:t,id:o,anchorEl:r,text:n,delay:a}=e;const[i,c]=(0,s.useState)(!1),[u,d]=(0,s.useState)(null),[p,h]=(0,s.useState)(null),[m,v]=(0,s.useState)(null),[f,b]=(0,s.useState)(null),{styles:w,attributes:g}=(0,x.D)(u,p,{modifiers:[{name:"arrow",options:{element:m}},{name:"offset",options:{offset:[0,8]}}]}),z=(0,s.useRef)(null),k=`${o}_tooltip`;return(0,s.useEffect)((()=>{b(r?"string"==typeof r?document.querySelector(r):r:document.body)}),[f,r]),(0,s.useEffect)((()=>{const e=["mouseenter","focus"],t=["mouseleave","blur"],o=()=>{""!==n&&(u?.removeAttribute("title"),z.current=window.setTimeout((()=>{c(!0)}),a||400))},s=()=>{clearInterval(z.current),c(!1)};return u&&(e.forEach((e=>{u.addEventListener(e,o)})),t.forEach((e=>{u.addEventListener(e,s)}))),()=>{u&&(e.forEach((e=>{u.removeEventListener(e,o)})),t.forEach((e=>{u.removeEventListener(e,s)})))}}),[u,n,a]),(0,l.jsxs)(l.Fragment,{children:[s.cloneElement(t,{ref:d,"aria-describedby":i?k:void 0}),f?A.createPortal(i&&(0,l.jsxs)("div",{id:k,role:"tooltip",ref:h,className:y.tooltip,style:w.popper,...g.popper,children:[n,(0,l.jsx)("span",{ref:v,className:y.tooltipArrow,style:w.arrow})]}),f):f]})}const k={featured:{label:"\xa0\u2665\ufe0f Featured",description:"Most popular",color:"red"},azurekubernetesservice:{label:"Azure Kubernetes Service",description:"Azure Kubernetes Service",color:"#5A57E6"},azurecontainerapps:{label:"Azure Container Apps",description:"Azure Container Apps",color:"#5A57E6"},azurefunctions:{label:"Azure Functions",description:"Azure Functions",color:"#5A57E6"},azureopenai:{label:"Azure OpenAI",description:"Azure OpenAI",color:"#5A57E6"},azureeventgrid:{label:"Azure Event Grid",description:"Azure Event Grid",color:"#5A57E6"},azurelogicapps:{label:"Azure Logic Apps",description:"Azure Logic Apps",color:"#5A57E6"},github:{label:"GitHub",description:"GitHub",color:"#5A57E6"},cosmosdb:{label:"Azure Cosmos DB",description:"Azure Cosmos DB",color:"#5A57E6"},serverless:{label:"Serverless",description:"Serverless",color:"#8661c5"},cloudnative:{label:"Cloud-native",description:"Cloud-native",color:"#8661c5"},ai:{label:"AI",description:"AI",color:"#8661c5"},database:{label:"Database",description:"Database",color:"#8661c5"},devtools:{label:"Dev Tools",description:"Dev Tools",color:"#8661c5"},kubernetes:{label:"Kubernetes",description:"Kubernetes",color:"#8661c5"},blog:{label:"Blog",description:"Blog",color:"#C03BC4"},codesample:{label:"Code Sample",description:"Code Sample",color:"#C03BC4"},video:{label:"Video",description:"Video",color:"#C03BC4"}},C=JSON.parse('[{"title":"Ask the Expert: Build Intelligent Apps","description":"Join the Azure Functions Product Group this season to learn about FaaS or Functions-as-a-Service in Azure serverless computing. It is time to focus on the pieces of code that matter most to you while Azure Functions handles the rest. Discuss with the experts on how to combine the power of AI, cloud-scale data, and serverless app development to create highly differentiated digital experiences. Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure Functions.","preview":"","website":"https://azure.microsoft.com/products/functions","author":"Azure Functions","source":"https://www.youtube.com/watch?v=dWXy1IkhfBk","tags":["video","azurefunctions","azureopenai","featured","ai"]},{"title":"Ask the Expert: Build Intelligent Microservices with Azure Container Apps","description":"Join the Azure Container Apps Product Group to learn about combining the power of AI, cloud-scale data, and cloud-native app development to create highly differentiated digital experiences with microservices. Azure Container Apps is an app-centric service, empowering developers to focus on the differentiating business logic of their apps rather than on cloud infrastructure management. Discuss with the experts on how to develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure Container Apps.","preview":"","website":"https://azure.microsoft.com/products/functions","author":"Azure Functions","source":"https://www.youtube.com/watch?v=8HsNpCkYV5o","tags":["video","azurecontainerapps","azureopenai","featured","ai"]},{"title":"Ask the Expert: Learn Live | Define and get started with the Contoso Real Estate Application","description":"Learn about the Contoso Real Estate sample, fork the repo, launch GitHub Codespaces - and build/preview the application to validate environment.","preview":"","website":"https://learn.microsoft.com/en-us/shows/Ask-the-Expert/","author":"Ask the Expert","source":"https://developer.microsoft.com/en-us/reactor/events/20698/","tags":["video","serverless","github","featured"]},{"title":"Ask the Expert: Learn Live: Develop and Deconstruct the Contoso Real Estate Portal App","description":"Learn about micro-frontends and API-first design. Deconstruct the portal app, blog app, and serverless API.","preview":"","website":"https://learn.microsoft.com/en-us/shows/Ask-the-Expert/","author":"Ask the Expert","source":"https://developer.microsoft.com/en-us/reactor/events/20699/","tags":["video","serverless","github","featured"]},{"title":"Ask the Expert: Learn Live | Develop and Deconstruct the Authentication, Payments & Search","description":"Integrate authentication to support user profiles. Integrate payments and search features using 3rd party API.","preview":"","website":"https://learn.microsoft.com/en-us/shows/Ask-the-Expert/","author":"Ask the Expert","source":"https://developer.microsoft.com/en-us/reactor/events/20700/","tags":["video","serverless","github","featured"]},{"title":"Ask the Expert: Learn Live | DevOps and Deconstruct the E2E Workflow for Testing and Deploy","description":"Learn to design and run end-to-end tests with Playwright. Provision and deploy solution to Azure with AZD.","preview":"","website":"https://learn.microsoft.com/en-us/shows/Ask-the-Expert/","author":"Ask the Expert","source":"https://developer.microsoft.com/en-us/reactor/events/20701/","tags":["video","serverless","github","featured"]},{"title":"Cloud-Native New Year - Azure Kubernetes Service","description":"Join the Azure Kubernetes Service Product Group this New Year to learn about cloud-native development using Kubernetes on Azure computing. It is time to accelerate your cloud-native application development leveraging the de-facto container platform, Kubernetes. Discuss with the experts on how to develop, manage, scale and secure managed Kubernetes clusters on Azure with an end-to-end development and management experience using Azure Kubernetes Service and Azure Fleet Manager.","preview":"","website":"https://learn.microsoft.com/en-us/shows/Ask-the-Expert/","author":"Ask the Expert","source":"https://learn.microsoft.com/en-us/shows/ask-the-expert/cloud-native-new-year-azure-kubernetes-service","tags":["video","azurekubernetesservice","kubernetes","featured"]},{"title":"Ask the Expert: Serverless September | Azure Container Apps","description":"Join the Azure Container Apps Product Group this Serverless September to learn about serverless containers purpose-built for microservices. Azure Container Apps is an app-centric service, empowering developers to focus on the differentiating business logic of their apps rather than on cloud infrastructure management. Discuss with the experts on how to build and deploy modern apps and microservices using serverless containers with Azure Container Apps.","preview":"","website":"https://learn.microsoft.com/en-us/shows/Ask-the-Expert/","author":"Ask the Expert","source":"https://learn.microsoft.com/en-us/shows/ask-the-expert/serverless-september-azure-container-apps","tags":["video","azurecontainerapps","serverless"]},{"title":"Ask the Expert: Serverless September | Azure Functions","description":"Join the Azure Functions Product Group this Serverless September to learn about FaaS or Functions-as-a-Service in Azure serverless computing. It is time to focus on the pieces of code that matter most to you while Azure Functions handles the rest. Discuss with the experts on how to execute event-driven serverless code functions with an end-to-end development experience using Azure Functions.","preview":"","website":"https://learn.microsoft.com/en-us/shows/Ask-the-Expert/","author":"Ask the Expert","source":"https://learn.microsoft.com/en-us/shows/ask-the-expert/serverless-september-azure-functions","tags":["video","azurefunctions","serverless"]},{"title":"What the Hack: Serverless walkthrough","description":"The Azure Serverless What The Hack will take you through architecting a serverless solution on Azure for the use case of a Tollbooth Application that needs to meet demand for event driven scale. This is a challenge-based hack. It\u2019s NOT step-by-step. Don\u2019t worry, you will do great whatever your level of experience!","preview":"","website":"https://developer.microsoft.com/en-us/reactor/home/index/","author":"Microsoft Reactor","source":"https://youtube.com/playlist?list=PLmsFUfdnGr3wg9NCWGYGw0IJORaqXhzLP","tags":["video","serverless","cloudnative"]},{"title":"Building and scaling cloud-native intelligent applications on Azure","description":"Learn how to run cloud-native serverless and container applications in Azure using Azure Kubernetes Service and Azure Container Apps. We help you choose the right service for your apps. We show you how Azure is the best platform for hosting cloud native and intelligent apps, and an app using Azure OpenAI Service and Azure Data. Learn all the new capabilities of our container platforms including how to deploy, test for scale, monitor, and much more.","preview":"","website":"https://developer.microsoft.com/en-us/","author":"Microsoft Developer","source":"https://www.youtube.com/watch?v=luu54Z1-45Y&pp=ygVEQnVpbGRpbmcgYW5kIHNjYWxpbmcgY2xvdWQtbmF0aXZlLCBpbnRlbGxpZ2VudCBhcHBsaWNhdGlvbnMgb24gQXp1cmU%3D","tags":["video","azurekubernetesservice","azurecontainerapps","azureopenai","ai","kubernetes","featured"]},{"title":"Build scalable, cloud-native apps with AKS and Azure Cosmos DB","description":"Develop, deploy, and scale cloud-native applications that are high-performance, fast, and can handle traffic bursts with ease. Explore the latest news and capabilities for Azure Kubernetes Service (AKS) and Azure Cosmos DB, and hear from Rockwell Automation about how they\'ve used Azure\'s cloud-scale app and data services to create global applications.","preview":"","website":"https://azure.microsoft.com/en-us/products/cosmos-db","author":"Azure Cosmos DB","source":"https://www.youtube.com/watch?v=sL-aUxmEHEE&ab_channel=AzureCosmosDB","tags":["video","azurekubernetesservice","cosmosdb","kubernetes","featured"]},{"title":"Integrating Azure AI and Azure Kubernetes Service to build intelligent apps","description":"Build intelligent apps that leverage Azure AI services for natural language processing, machine learning, Azure OpenAI Service with Azure Kubernetes Service (AKS) and other Azure application platform services. Learn best practices to help you achieve optimal scalability, reliability and automation with CI/CD using GitHub. By the end of this session, you will have a better understanding of how to build and deploy intelligent applications on Azure that deliver measurable impact.","preview":"","website":"https://developer.microsoft.com/en-us/","author":"Microsoft Developer","source":"https://www.youtube.com/watch?v=LhJODembils&ab_channel=MicrosoftDeveloper","tags":["video","azurekubernetesservice","azureopenai","github","ai","kubernetes","featured"]},{"title":"Build an intelligent application fast and flexibly using Open Source on Azure","description":"Watch this end-to-end demo of an intelligent app that was built using a combination of open source technologies developed by Microsoft and the community. Highlights of the demo include announcements and key technologies.","preview":"","website":"https://developer.microsoft.com/en-us/","author":"Microsoft Developer","source":"https://www.youtube.com/watch?v=Dm9GoPit53w&ab_channel=MicrosoftAzure","tags":["video","azurefunctions"]},{"title":"Build Intelligent Microservices with Azure Container Apps","description":"Azure Container Apps (ACA) is a great place to run intelligent microservices, APIs, event-driven apps, and more. Infuse AI with Azure Container Apps jobs, leverage adaptable design patterns with Dapr, and explore flexible containerized compute for microservices across serverless or dedicated options.","preview":"","website":"https://developer.microsoft.com/en-us/","author":"Microsoft Developer","source":"https://www.youtube.com/watch?v=G55ivXuwwOY&ab_channel=MicrosoftDeveloper","tags":["video","azurecontainerapps"]},{"title":"Deliver apps from code to cloud with Azure Kubernetes Service","description":"Do you want to build and run cloud-native apps in Microsoft Azure with ease and confidence? Do you want to leverage the power and flexibility of Kubernetes, without the hassle and complexity of managing it yourself? Or maybe you want to learn about the latest and greatest features and integrations that Azure Kubernetes Service (AKS) has to offer? If you answered yes to any of these questions, then this session is for you!","preview":"","website":"https://developer.microsoft.com/en-us/","author":"Microsoft Developer","source":"https://www.youtube.com/watch?v=PZxGu7DllJA&ab_channel=MicrosoftDeveloper","tags":["video","azurekubernetesservice","kubernetes","featured"]},{"title":"Modernizing your applications with containers and serverless","description":"Dive into how cloud-native architectures and technologies can be applied to help build resilient and modern applications. Learn how to use technologies like containers, Kubernetes and serverless integrated with other application ecosystem services to build and deploy microservices architecture on Microsoft Azure. This discussion is ideal for developers, architects, and IT pros who want to learn how to effectively leverage Azure services to build, run and scale modern cloud-native applications.","preview":"","website":"https://developer.microsoft.com/en-us/","author":"Microsoft Developer","source":"https://www.youtube.com/watch?v=S5xk3w4zJxw&ab_channel=MicrosoftDeveloper","tags":["video","azurekubernetesservice","kubernetes","featured"]},{"title":"Modernizing with containers and serverless Q&A","description":"Join the Azure cloud-native team to dive deeper into developing modern apps on cloud with containers and serverless technologies. Explore how to leverage the latest product advancements in Azure Kubernetes Service, Azure Container Apps and Azure Functions for scenarios that work best for cloud-native development. The experts cover best practices on how to develop with in-built open-source components like Kubernetes, KEDA, and Dapr to achieve high performance along with dynamic scaling.","preview":"","website":"https://developer.microsoft.com/en-us/","author":"Microsoft Developer","source":"https://www.youtube.com/watch?v=_MnRYGtvJDI&ab_channel=MicrosoftDeveloper","tags":["video","azurekubernetesservice","azurecontainerapps","azurefunctions","kubernetes","featured"]},{"title":"Focus on code not infra with Azure Functions Azure Spring Apps Dapr","description":"Explore an easy on-ramp to build your cloud-native APIs with containers in the cloud. Build an application using Azure Spring APIs to send messages to Dapr enabled message broker, triggering optimized processing with Azure Functions, all hosted in the same Azure Container Apps environment. This unified experience for microservices hosts multitype apps that interact with each other using Dapr, scale dynamically with KEDA, and focus on code, offering a true high productivity developer experience.","preview":"","website":"https://developer.microsoft.com/en-us/","author":"Microsoft Developer","source":"https://www.youtube.com/watch?v=_MnRYGtvJDI&ab_channel=MicrosoftDeveloper","tags":["video","azurefunctions","azurecontainerapps"]},{"title":"Hack Together Launch \u2013 Opening Keynote","description":"Join us for an in-depth walkthrough of the Contoso Real Estate project, with a focus on the portal app architecture (Full stack application). During this session, we\'ll guide you through the key components of the architecture and show you how to set up your own environment for the project. We\'ll also provide detailed contribution instructions to help you get involved in the project and make a meaningful impact. Whether you\'re a seasoned developer or just getting started, this session is a must-attend for anyone interested in building scalable, modern web applications.","preview":"","website":"https://developer.microsoft.com/en-us/reactor/home/index/","author":"Microsoft Reactor","source":"https://developer.microsoft.com/reactor/events/20275/","tags":["video","azurefunctions","cosmosdb","featured"]},{"title":"Introduction to GitHub Copilot","description":"Join us for an exciting introduction to GitHub Copilot, the revolutionary AI-powered coding assistant. In this session, you\'ll learn how to harness the power of Copilot to write code faster and more efficiently than ever before. We\'ll cover the basics of Copilot, including how to install and configure it, and walk you through a series of hands-on exercises to help you get started. Whether you\'re a seasoned developer or just starting out, this session is the perfect way to take your coding skills to the next level.","preview":"","website":"https://developer.microsoft.com/en-us/reactor/home/index/","author":"Microsoft Reactor","source":"https://developer.microsoft.com/reactor/events/20321/","tags":["video","github","ai","featured"]},{"title":"Build your Frontend with Azure Static Web Apps","description":"In this session, we\'ll give you a gentle introduction to Static Web Apps and the SWA CLI. We\'ll start by discussing the benefits of using Static Web Apps for your web projects and how the SWA CLI can help you get started quickly. Then, we\'ll dive into a demo of the Contoso Real Estate project, showing you how it uses Static Web Apps to deploy changes quickly and easily.","preview":"","website":"https://developer.microsoft.com/en-us/reactor/home/index/","author":"Microsoft Reactor","source":"https://developer.microsoft.com/reactor/events/20276/","tags":["video","azurefunctions","cosmosdb","featured"]},{"title":"Build a Serverless Backend with Azure Functions","description":"In this session, we\'ll give you a gentle introduction to serverless backends and how Azure Functions can help you build them quickly and easily. We\'ll start by discussing the benefits of using serverless backends for your web projects and how Azure Functions can help you get started quickly. Then, we\'ll dive into a demo of the Contoso Real Estate project, showing you how it uses Azure Functions to power its backend.","preview":"","website":"https://developer.microsoft.com/en-us/reactor/home/index/","author":"Microsoft Reactor","source":"https://developer.microsoft.com/reactor/events/20277/","tags":["video","azurefunctions","cosmosdb","serverless","featured"]},{"title":"Build and connect to a Database using Azure Cosmos DB","description":"In this session, we\'ll give you a gentle introduction to Azure Cosmos DB and how it can help you store and manage your data in the cloud. We\'ll start by discussing the benefits of using Azure Cosmos DB for your data storage needs, including its global distribution and scalability. Then, we\'ll dive into a demo of the Contoso Real Estate project, showing you how it uses Azure Cosmos DB to store its data.","preview":"","website":"https://developer.microsoft.com/en-us/reactor/home/index/","author":"Microsoft Reactor","source":"https://developer.microsoft.com/reactor/events/20278/","tags":["video","cosmosdb","featured"]},{"title":"Introduction to Azure OpenAI Service","description":"Join us for an exciting introduction to the world of AI with Azure OpenAI. In this session, you\'ll learn how to harness the power of OpenAI to build intelligent applications that can learn, reason, and adapt. We\'ll cover the basics of Azure OpenAI, including how to set up and configure your environment, and walk you through a series of hands-on exercises to help you get started. Whether you\'re a seasoned developer or just starting out, this session is the perfect way to unlock the full potential of AI and take your applications to the next level.","preview":"","website":"https://developer.microsoft.com/en-us/reactor/home/index/","author":"Microsoft Reactor","source":"https://developer.microsoft.com/reactor/events/20322/","tags":["video","azureopenai","ai","featured"]},{"title":"Azure Samples / Contoso Real Estate","description":"This repository contains the reference architecture and components for building enterprise-grade modern composable frontends (or micro-frontends) and cloud-native applications. It is a collection of best practices, architecture patterns, and functional components that can be used to build and deploy modern JavaScript applications to Azure.","preview":"","website":"https://github.com/Azure-Samples","author":"Azure Samples","source":"https://aka.ms/contoso-real-estate-github","tags":["codesample","azurefunctions","azurecontainerapps","github","cosmosdb","featured"]},{"title":"Azure Samples / Azure Container Apps That Use OpenAI","description":"This sample demonstrates how to quickly build chat applications using Python and leveraging powerful technologies such as OpenAI ChatGPT models, Embedding models, LangChain framework, ChromaDB vector database, and Chainlit, an open-source Python package that is specifically designed to create user interfaces (UIs) for AI applications. These applications are hosted on Azure Container Apps, a fully managed environment that enables you to run microservices and containerized applications on a serverless platform.","preview":"","website":"https://github.com/Azure-Samples","author":"Azure Samples","source":"https://github.com/Azure-Samples/container-apps-openai","tags":["codesample","azurecontainerapps","azureopenai","featured"]}]'),j=Object.keys(k);const S=function(){let e=C;return e=i(e,(e=>e.title.toLowerCase())),e}(),E=s.forwardRef(((e,t)=>{let{label:o,color:s,description:r}=e;return(0,l.jsxs)("div",{ref:t,className:g.tag,title:r,children:[(0,l.jsx)("span",{className:g.textLabel,children:o.toLowerCase()}),(0,l.jsx)("span",{className:g.colorLabel,style:{backgroundColor:s}})]})}));function I(e){let{tags:t}=e;const o=i(t.map((e=>({tag:e,...k[e]}))),(e=>j.indexOf(e.tag)));return(0,l.jsx)(l.Fragment,{children:o.map(((e,t)=>{const o=`showcase_card_tag_${e.tag}`;return(0,l.jsx)(z,{text:e.description,anchorEl:"#__docusaurus",id:o,children:(0,l.jsx)(E,{...e},t)},t)}))})}function D(e){let{user:t}=e;const o=t.author,s=t.website;if(o.includes("|")){var r=s.split("|"),a=o.split("|");return(0,l.jsxs)("div",{className:"dropdown dropdown--right dropdown--hoverable",children:[(0,l.jsx)("button",{className:(0,n.Z)("button button--secondary button--sm",g.showcaseCardSrcBtn),children:"Author"}),(0,l.jsx)("ul",{className:"dropdown__menu",children:r.map(((e,t)=>{const o=`${e}?ocid=buildia24_gallery_website`;return s=a[t],r=o,(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"dropdown__link",href:r,children:s})});var s,r}))})]})}const i=`${s}?ocid=buildia24_gallery_website`;return(0,l.jsxs)("div",{className:"author",children:[(0,l.jsx)("p",{className:"margin-bottom--none",children:"Author"}),(0,l.jsx)("a",{href:i,children:o})]})}function _(e){let{user:t}=e;return(0,l.jsx)("li",{className:"card",children:(0,l.jsxs)(w.Z,{className:"card-link",to:`${t.source}?ocid=buildia24_gallery_website`,"data-bi-area":"BodyGrid","data-bi-name":t.title,children:[(0,l.jsxs)("div",{className:"card__body",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:t.title}),t.source&&(0,l.jsx)(D,{user:t})]}),(0,l.jsx)("p",{children:t.description})]}),(0,l.jsx)("div",{className:(0,n.Z)("card__footer",g.cardFooter),children:(0,l.jsx)("div",{className:"margin-bottom--md",children:(0,l.jsx)(I,{tags:t.tags})})})]})},t.title)}const L=s.memo(_);var N=o(36136),F=o(97325),B=o(23777),T=o(10813);const M="Community Gallery",R="A community-contributed showcase gallery";function K(){if(N.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:document.activeElement?.id}}const P="name";function Z(e){return new URLSearchParams(e).get(P)}function W(){const e=(0,a.TH)(),[t,o]=(0,s.useState)("OR"),[r,n]=(0,s.useState)([]),[i,c]=(0,s.useState)(null);return(0,s.useEffect)((()=>{n(d(e.search)),o(f(e.search)),c(Z(e.search)),function(e){const{scrollTopPosition:t,focusedElementId:o}=e??{scrollTopPosition:0,focusedElementId:void 0};document.getElementById(o)?.focus(),window.scrollTo({top:t})}(e.state)}),[e]),(0,s.useMemo)((()=>function(e,t,o,s){return s&&(e=e.filter((e=>e.title.toLowerCase().includes(s.toLowerCase())))),0===t.length?e:e.filter((e=>0!==e.tags.length&&("AND"===o?t.every((t=>e.tags.includes(t))):t.some((t=>e.tags.includes(t))))))}(S,r,t,i)),[r,t,i])}function G(){return(0,l.jsx)("header",{className:(0,n.Z)("hero hero--primary",T.Z.heroBanner),children:(0,l.jsxs)("div",{className:"container text--center",children:[(0,l.jsx)("h1",{className:"hero__title",children:"Community Gallery"}),(0,l.jsx)("p",{children:"Explore the Community Showcase for videos, blog posts and open-source projects from the community."})]})})}function O(){const e=W(),t=function(){const{selectMessage:e}=(0,B.c)();return t=>e(t,(0,F.I)({id:"showcase.filters.resultCount",description:'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"1 post|{sitesCount} posts"},{sitesCount:t}))}();return(0,l.jsxs)("section",{className:"container margin-top--lg",children:[(0,l.jsxs)("div",{className:(0,n.Z)("margin-bottom--sm",T.Z.filterCheckbox),children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:(0,l.jsx)(F.Z,{id:"showcase.filters.title",children:"Filters"})}),(0,l.jsx)("span",{children:t(e.length)})]}),(0,l.jsx)(b,{})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("ul",{className:T.Z.checkboxList,children:j.map(((e,t)=>{const{label:o,description:s,color:r}=k[e],n=`showcase_checkbox_id_${e}`;return(0,l.jsx)("li",{className:T.Z.checkboxListItem,children:(0,l.jsx)(z,{id:n,text:s,anchorEl:"#__docusaurus",children:(0,l.jsx)(h,{tag:e,id:n,label:o,icon:(0,l.jsx)("span",{style:{backgroundColor:r,width:10,height:10,borderRadius:"50%",marginLeft:8}})})})},t)}))})]})}const H=S.filter((e=>e.tags.includes("featured")));function J(){const e=(0,a.k6)(),t=(0,a.TH)(),[o,r]=(0,s.useState)(null);return(0,s.useEffect)((()=>{r(Z(t.search))}),[t]),(0,l.jsx)("div",{className:T.Z.searchContainer,children:(0,l.jsx)("input",{id:"searchbar",placeholder:(0,F.I)({message:"Search posts by name...",id:"showcase.searchBar.placeholder"}),value:o??void 0,"aria-label":"Search posts by name...",onInput:o=>{r(o.currentTarget.value);const s=new URLSearchParams(t.search);s.delete(P),o.currentTarget.value&&s.set(P,o.currentTarget.value),e.push({...t,search:s.toString(),state:K()}),setTimeout((()=>{document.getElementById("searchbar")?.focus()}),0)}})})}function Y(){const e=W();return 0===e.length?(0,l.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,l.jsxs)("div",{className:"container padding-vert--md text--center",children:[(0,l.jsx)("h2",{children:(0,l.jsx)(F.Z,{id:"showcase.usersList.noResult",children:"No results found for this search"})}),(0,l.jsx)(J,{})]})}):(0,l.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:e.length===S.length?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:T.Z.showcaseFavorite,children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:(0,n.Z)("margin-bottom--md",T.Z.showcaseFavoriteHeader),children:[(0,l.jsx)("h2",{children:(0,l.jsx)(F.Z,{id:"showcase.favoritesList.title",children:"Featured Posts"})}),(0,l.jsx)(J,{})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("ul",{className:(0,n.Z)("container",T.Z.showcaseList),children:H.map((e=>(0,l.jsx)(L,{user:e},e.title)))})]})}),(0,l.jsxs)("div",{className:"container margin-top--lg",children:[(0,l.jsx)("h2",{className:T.Z.showcaseHeader,children:(0,l.jsx)(F.Z,{id:"showcase.usersList.allUsers",children:"All Posts"})}),(0,l.jsx)("hr",{}),(0,l.jsx)("ul",{className:T.Z.showcaseList,children:S.map((e=>(0,l.jsx)(L,{user:e},e.title)))})]})]}):(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:(0,n.Z)("margin-bottom--md",T.Z.showcaseFavoriteHeader),children:(0,l.jsx)(J,{})}),(0,l.jsx)("ul",{className:T.Z.showcaseList,children:e.map((e=>(0,l.jsx)(L,{user:e},e.title)))})]})})}function U(){return(0,l.jsx)(r.Z,{title:M,description:R,children:(0,l.jsxs)("main",{children:[(0,l.jsx)(G,{}),(0,l.jsx)(O,{}),(0,l.jsx)(Y,{})]})})}},10813:(e,t,o)=>{o.d(t,{Z:()=>s});const s={heroBanner:"heroBanner_WvCC",featureImg:"featureImg_jN62",features:"features_vycY",featureSvg:"featureSvg_SIiY",filterCheckbox:"filterCheckbox_K11h",checkboxList:"checkboxList_Xnr8",showcaseList:"showcaseList_KhAZ",checkboxListItem:"checkboxListItem_U56q",searchContainer:"searchContainer_ZMm2",showcaseFavorite:"showcaseFavorite_Lveb",showcaseHelpWanted:"showcaseHelpWanted_zk2n",helpText:"helpText_l1YM",showcaseFavoriteHeader:"showcaseFavoriteHeader_dwBc",svgIconFavoriteXs:"svgIconFavoriteXs_iNJ7",svgIconFavorite:"svgIconFavorite_Qt5V",hide:"hide_YTWK"}}}]);