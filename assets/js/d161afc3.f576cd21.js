"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6266],{72110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(85893),a=t(11151);const s={date:"2024-10-11T09:04",slug:"how-it-works-behind-the-scenes-of-our-ai-based-content-generation-app",title:"1.9 How it works: Behind the scenes of our AI-based content generation app",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Dive in to learn more about how our example application works at a technical level.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},r=void 0,o={permalink:"/Cloud-Native/30-days-of-ia-2024/how-it-works-behind-the-scenes-of-our-ai-based-content-generation-app",source:"@site/blog-30-days-of-ia-2024/2024-10-17/how-it-works-behind-the-scenes-of-our-ai-based-content-generation-app.md",title:"1.9 How it works: Behind the scenes of our AI-based content generation app",description:"Dive in to learn more about how our example application works at a technical level.",date:"2024-10-11T09:04:00.000Z",formattedDate:"October 11, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/build-intelligent-apps"},{label:"30-days-of-IA-2024",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/30-days-of-ia-2024"},{label:"learn-live",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/learn-live"},{label:"demo-bytes",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/demo-bytes"},{label:"community-gallery",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/community-gallery"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-actions"}],readingTime:4.92,hasTruncateMarker:!1,authors:[{name:"#30Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"30days"}],frontMatter:{date:"2024-10-11T09:04",slug:"how-it-works-behind-the-scenes-of-our-ai-based-content-generation-app",title:"1.9 How it works: Behind the scenes of our AI-based content generation app",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Dive in to learn more about how our example application works at a technical level.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"1.10 Closing Summary",permalink:"/Cloud-Native/30-days-of-ia-2024/closing-summary"},nextItem:{title:"1.8 Demo our AI-based content generation app",permalink:"/Cloud-Native/30-days-of-ia-2024/demo-our-ai-based-content-generation-app"}},d={authorsImageUrls:[void 0]},c=[{value:"What we cover:",id:"what-we-cover",level:2},{value:"Introduction",id:"introduction",level:2},{value:"1. High-level architecture",id:"1-high-level-architecture",level:2},{value:"Architecture diagram",id:"architecture-diagram",level:3},{value:"2. Front-end app",id:"2-front-end-app",level:2},{value:"Key components:",id:"key-components",level:3},{value:"3. Middleware service",id:"3-middleware-service",level:2},{value:"Core APIs:",id:"core-apis",level:3},{value:"4. Back-end service",id:"4-back-end-service",level:2},{value:"Core APIs:",id:"core-apis-1",level:3},{value:"5. Data flow diagram",id:"5-data-flow-diagram",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s,{children:[(0,i.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30-days-of-ia-2024/how-it-works-behind-the-scenes-of-our-ai-based-content-generation-app"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,i.jsx)("meta",{property:"og:description",content:"Join us on a learning journey to build intelligent apps on Azure. Read all about the upcoming #BuildIntelligentApps initiative on this post!"}),(0,i.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/how-it-works-behind-the-scenes-of-our-ai-based-content-generation-app"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,i.jsx)("meta",{name:"twitter:description",content:"Join us on a learning journey to build intelligent apps on Azure. Read all about the upcoming #BuildIntelligentApps initiative on this post!"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/how-it-works-behind-the-scenes-of-our-ai-based-content-generation-app"})]}),"\n",(0,i.jsx)(n.p,{children:"Dive in to learn more about how our example application works at a technical level.\u202f\u202f"}),"\n",(0,i.jsx)(n.h2,{id:"what-we-cover",children:"What we cover:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A high-level architecture overview\u202f"}),"\n",(0,i.jsx)(n.li,{children:"A description of API calls made by the front-end app\u202f"}),"\n",(0,i.jsx)(n.li,{children:"An overview of the APIs offered by the middleware service\u202f"}),"\n",(0,i.jsx)(n.li,{children:"A walkthrough of the back-end service\u2019s APIs and integration with other Azure services\u202f"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"In the previous blog post, we gave you a high-level overview of our example AI-based content generation app, covering its user experience and how it integrated various services. Now we\u2019d like to dive a little deeper into the technical side, explaining the app's architecture, key components, and code snippets and offering an overview of the app\u2019s data flow.\u202f\u202f"}),"\n",(0,i.jsxs)(n.p,{children:["Today\u2019s post breaks down how the ",(0,i.jsx)(n.strong,{children:"front-end"}),", ",(0,i.jsx)(n.strong,{children:"middleware"}),", and ",(0,i.jsx)(n.strong,{children:"back-end"})," services work together. We also discuss how the app uses Azure services, like ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/api-management/api-management-key-concepts?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure API Management"}),", ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/key-vault/general/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Key Vault"}),", ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/cosmos-db/introduction?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Cosmos DB"}),", ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/storage/blobs/storage-blobs-introduction?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Blob Storage"}),", and ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure OpenAI Service"}),", and how ",(0,i.jsx)(n.strong,{children:"managed identity"})," is used to securely connect these components.\u202f"]}),"\n",(0,i.jsx)(n.h2,{id:"1-high-level-architecture",children:"1. High-level architecture"}),"\n",(0,i.jsx)(n.p,{children:"The application is composed of three core services:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Front-end app (ReactJS based)"}),". A chat-based UI where users submit queries and receive AI-generated content\u202f"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Middleware service (Java Spring Boot based)"}),". Responsible for content generation and handling product similarity searches\u202f"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Back-end service (Java Spring Boot based)"}),". Handles customer and product data and computes product similarity using vectors\u202f"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"architecture-diagram",children:"Architecture diagram"}),"\n",(0,i.jsx)(n.p,{children:"The architecture diagram shows the interaction between:\u202f"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Front end -> Middleware Azure API Management endpoints\u202f-> Middleware service -> Back-end API Management endpoints\u202f-> Back end (Spring Boot)"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["How middleware and back-end services connect to ",(0,i.jsx)(n.strong,{children:"Azure Key Vault"}),", ",(0,i.jsx)(n.strong,{children:"Azure Cosmos DB"}),", ",(0,i.jsx)(n.strong,{children:"Azure Blob Storage"}),", and ",(0,i.jsx)(n.strong,{children:"Azure OpenAI"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture diagram for front end all the way to back end",src:t(44816).Z+"",width:"1430",height:"639"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture diagram for middleware and back-end service connections",src:t(983).Z+"",width:"1600",height:"711"})}),"\n",(0,i.jsx)(n.h2,{id:"2-front-end-app",children:"2. Front-end app"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"front end"})," acts as the interface between the user and the application. It allows the user to sign in, enter queries, and receive generated content.\u202f"]}),"\n",(0,i.jsx)(n.h3,{id:"key-components",children:"Key components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Sign-in and user identity management"}),". The front end uses identity management to authenticate users before they access the main chat functionality.\u202f"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Code snippet: User authentication logic uses the ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/entra/identity-platform/msal-overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:(0,i.jsx)(n.strong,{children:"Microsoft Authentication Library (MSAL)"})}),". (@azure/msal-browser)\u202f"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image of code snippet for identity management",src:t(65579).Z+"",width:"1282",height:"1238"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Chat interface"}),". After authentication, the user can interact with the chat interface. On form submission, the query is sent to the ",(0,i.jsx)(n.strong,{children:"Middleware API"})," through an ",(0,i.jsx)(n.strong,{children:"API Management endpoint"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image of code snippet for chat interface",src:t(66849).Z+"",width:"1470",height:"1346"})}),"\n",(0,i.jsx)(n.h2,{id:"3-middleware-service",children:"3. Middleware service"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"middleware service"})," is the central hub for content generation and managing product similarity searches. It connects to ",(0,i.jsx)(n.strong,{children:"Azure OpenAI"})," for content generation and interfaces with the ",(0,i.jsx)(n.strong,{children:"back end"})," to retrieve product vectors.\u202f"]}),"\n",(0,i.jsx)(n.h3,{id:"core-apis",children:"Core APIs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Generate content API"}),". This API receives the user\u2019s query, generates an embedding vector, and calls Azure OpenAI to generate relevant content.\u202f"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image of code snippet",src:t(11607).Z+"",width:"1432",height:"841"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image of code snippet",src:t(35715).Z+"",width:"1536",height:"1436"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image of code snippet",src:t(65615).Z+"",width:"1432",height:"792"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Generate embedding vector API"}),". Uses ",(0,i.jsx)(n.strong,{children:"OpenAI's embedding model"})," to transform the user query into an embedding vector that the ",(0,i.jsx)(n.strong,{children:"back-end"})," service can use for similarity matching.\u202f"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image of code snippet using OpenAI&#39;s embedding model",src:t(15275).Z+"",width:"1464",height:"850"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OpenAI integration"}),". The ",(0,i.jsx)(n.strong,{children:"middleware"})," connects to ",(0,i.jsx)(n.strong,{children:"OpenAI's GPT-4o completion model"})," for content generation and ",(0,i.jsx)(n.strong,{children:"text embedding model"})," for vector creation. Credentials and API keys are retrieved securely from ",(0,i.jsx)(n.strong,{children:"Azure Key Vault"})," using a ",(0,i.jsx)(n.strong,{children:"managed identity"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image of code snippet using OpenAI integration",src:t(27432).Z+"",width:"792",height:"252"})}),"\n",(0,i.jsx)(n.h2,{id:"4-back-end-service",children:"4. Back-end service"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"back-end"})," service handles customer and product data and uses the ",(0,i.jsx)(n.strong,{children:"product vector API"})," to find similar products based on embedding vectors sent from the middleware.\u202f"]}),"\n",(0,i.jsx)(n.h3,{id:"core-apis-1",children:"Core APIs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Customer API"}),". Manages customer data and provides endpoints to retrieve and update customer information.\u202f"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u202f ",(0,i.jsx)(n.img,{alt:"image of code snippet of customer API",src:t(20668).Z+"",width:"1430",height:"1186"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Product vector API"}),". Retrieves a list of similar products based on the embedding vector generated by the middleware.\u202f"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"5-data-flow-diagram",children:"5. Data flow diagram"}),"\n",(0,i.jsxs)(n.p,{children:["The data flow diagram shows how the user query flows from the ",(0,i.jsx)(n.strong,{children:"front-end"})," app to the ",(0,i.jsx)(n.strong,{children:"middleware"})," service and finally to the ",(0,i.jsx)(n.strong,{children:"back-end"})," service:\u202f"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"User -> Front end"}),". The user submits a query.\u202f"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Front end -> Middleware API Management endpoint"}),". The query is sent to the middleware via API Management, which enforces API key checks and security.\u202f"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Middleware -> Back-end API Management endpoint"}),". The middleware sends a vectorized query to the back end via API Management.\u202f"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Back-end -> Database"}),". The back end retrieves similar products from Azure Cosmos DB.\u202f"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Middleware -> OpenAI"}),". The middleware generates content using OpenAI\u2019s models.\u202f"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Middleware -> Front end"}),". The generated content is returned to the front end for display.\u202f"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"data flow diagram",src:t(43593).Z+"",width:"1600",height:"711"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Learn more on Technical leaders\u2019 ",(0,i.jsx)(n.a,{href:"https://aka.ms/AAI_TDMApps_Plan?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"guide to building intelligent apps"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"\u202f"}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.p,{children:["In today\u2019s blog post, we discussed the inner workings of our example AI-based content generation app, detailing the interactions between the ",(0,i.jsx)(n.strong,{children:"front-end"}),", ",(0,i.jsx)(n.strong,{children:"middleware"}),", and ",(0,i.jsx)(n.strong,{children:"back-end"})," app tiers. We learned how our app uses various Azure services, like Azure API Management, Azure Key Vault, Azure Cosmos DB, Azure Blob Storage, and Azure OpenAI Service to build a secure and scalable solution.\u202f\u202f"]}),"\n",(0,i.jsxs)(n.p,{children:["In the next post\u2014the last in this series\u2014we'll explore the ",(0,i.jsx)(n.strong,{children:"outcomes"})," of building this application, highlighting its scalability and performance, the overall impact of the architecture and technologies used, and the key learnings to take away from the project.\u202f"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},27432:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-9-10-8cf4d1d7988a926720d3c1bd99fc5a43.png"},20668:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-9-11-bf32af7bb30efd49489dfab3a66af982.png"},43593:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-9-12-fe1758976559bf351fc721490b4b2169.png"},44816:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-9-2-c6a19b796c36b6ad0b5af2558c445ca2.png"},983:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-9-3-346b537b831bf0ca167d5f3e01b0008c.png"},65579:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-9-4-a7a874b164bcc615912dddb72acf29b3.png"},66849:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-9-5-be92371ca307304b1bfb91a342ef76ee.png"},11607:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-9-6-bc99665faf146b5b69cc74e40c5f701d.png"},35715:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-9-7-0c231abe122c4e2669cb496ade5e06ec.png"},65615:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-9-8-cae0bf85b4f54de1a9382b2a378c0a77.png"},15275:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-9-9-6ad0a34f6a13959748639acd93559326.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(67294);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);