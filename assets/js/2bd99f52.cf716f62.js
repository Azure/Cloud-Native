"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24402],{5505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(85893),i=n(11151);const r={date:"2024-10-11T09:03",slug:"demo-our-ai-based-content-generation-app",title:"1.8 Demo our AI-based content generation app",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Walk through our example content generation app, and see how the various components work together.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},s=void 0,o={permalink:"/Cloud-Native/30-days-of-ia-2024/demo-our-ai-based-content-generation-app",source:"@site/blog-30-days-of-ia-2024/2024-10-11/demo-our-ai-based-content-generation-app.md",title:"1.8 Demo our AI-based content generation app",description:"Walk through our example content generation app, and see how the various components work together.",date:"2024-10-11T09:03:00.000Z",formattedDate:"October 11, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/build-intelligent-apps"},{label:"30-days-of-IA-2024",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/30-days-of-ia-2024"},{label:"learn-live",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/learn-live"},{label:"demo-bytes",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/demo-bytes"},{label:"community-gallery",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/community-gallery"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-actions"}],readingTime:5.23,hasTruncateMarker:!1,authors:[{name:"#30Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"30days"}],frontMatter:{date:"2024-10-11T09:03",slug:"demo-our-ai-based-content-generation-app",title:"1.8 Demo our AI-based content generation app",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Walk through our example content generation app, and see how the various components work together.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"2.1 Kicking Off Azure AI Week!",permalink:"/Cloud-Native/30-days-of-ia-2024/kicking-off-azure-ai-week"},nextItem:{title:"1.7 Post-production monitoring, scaling, and optimization",permalink:"/Cloud-Native/30-days-of-ia-2024/post-production-monitoring-scaling-and-optimization"}},d={authorsImageUrls:[void 0]},c=[{value:"What we cover:",id:"what-we-cover",level:2},{value:"Introduction",id:"introduction",level:2},{value:"1. The front-end layer: How the user interacts with the app.",id:"1-the-front-end-layer-how-the-user-interacts-with-the-app",level:2},{value:"Key features:",id:"key-features",level:3},{value:"2. The middleware service: Connecting users, product data, and generated content",id:"2-the-middleware-service-connecting-users-product-data-and-generated-content",level:2},{value:"Key features:",id:"key-features-1",level:3},{value:"3. The back-end service: Managing product-related data",id:"3-the-back-end-service-managing-product-related-data",level:2},{value:"Key features:",id:"key-features-2",level:3},{value:"4. End-to-end flow demonstration",id:"4-end-to-end-flow-demonstration",level:2},{value:"Step-by-step user experience",id:"step-by-step-user-experience",level:3},{value:"Summary",id:"summary",level:2}];function l(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r,{children:[(0,a.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/demo-our-ai-based-content-generation-app"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,a.jsx)("meta",{property:"og:description",content:"Walk through our example content generation app, and see how the various components work together."}),(0,a.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,a.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/demo-our-ai-based-content-generation-app"}),(0,a.jsx)("meta",{name:"twitter:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,a.jsx)("meta",{name:"twitter:description",content:"Walk through our example content generation app, and see how the various components work together."}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,a.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/demo-our-ai-based-content-generation-app"})]}),"\n",(0,a.jsx)(t.p,{children:"Walk through our example content generation app, and see how the various components work together."}),"\n",(0,a.jsx)(t.h2,{id:"what-we-cover",children:"What we cover:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"A walkthrough of the app\u2019s user-facing front end"}),"\n",(0,a.jsx)(t.li,{children:"A walkthrough of the app\u2019s middleware service"}),"\n",(0,a.jsx)(t.li,{children:"A walkthrough of the app\u2019s back-end data management service"}),"\n",(0,a.jsx)(t.li,{children:"A demonstration of how the components work together"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:["Over the last eight days, this blog series has walked you through creating an example application\u2014the ",(0,a.jsx)(t.strong,{children:"Best For You Organics"})," Company\u2019s marketing content generation app. You set up your local tools and the Azure services you needed for development, downloaded and built the app code, and performed an initial deployment to either ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/app-service/?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure App Service"})})," or ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/aks/what-is-aks?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Kubernetes Service (AKS)"})}),". You also investigated deploying to a scalable production environment and explored the considerations you need to manage in the post-deployment phase."]}),"\n",(0,a.jsx)(t.p,{children:"In today\u2019s blog post, we examine the functionality of our example app, now that you\u2019ve deployed it. The app showcases how users can interact with a content generation service,\u202fwhile back-end systems integrate product similarity searches with AI-based content generation models. The app consists of three core services: a ReactJS-based user-facing front end, a Java Spring Boot middleware service, and a Java Spring Boot back-end service."}),"\n",(0,a.jsxs)(t.p,{children:["In the following demo, we present a high-level overview of the app\u2019s interface and functionality, explaining how the app integrates with Azure services, like ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/api-management/api-management-key-concepts?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure API Management"})}),", ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/key-vault/general/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Key Vault"})}),", ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/cosmos-db/introduction?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Cosmos DB"})}),", ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/storage/blobs/storage-blobs-introduction?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Blob Storage"})}),", and ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure OpenAI Service"})}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"1-the-front-end-layer-how-the-user-interacts-with-the-app",children:"1. The front-end layer: How the user interacts with the app."}),"\n",(0,a.jsx)(t.p,{children:"The app\u2019s front-end layer is a ReactJS application designed to provide users with an interface for requesting content through a seamless chat experience. Users enter their queries, select the type of content they want to generate, submit their request, and then receive results from the AI-powered middleware."}),"\n",(0,a.jsx)(t.h3,{id:"key-features",children:"Key features:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Sign-in experience."})," Users are prompted to sign in before accessing the chat interface. This secures the app by making sure that only authenticated and authorized users can access it."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"sign in experience - authentication in progress screen",src:n(7801).Z+"",width:"1024",height:"406"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"sign in experience - sign in screen",src:n(15174).Z+"",width:"1431",height:"735"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Chat interface."})," After signing in, users can type their queries into a chat interface and select the content type they want. The submitted request is sent to the middleware service."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"The Effortless Marketing Content at Your Fingertips screen",src:n(4634).Z+"",width:"1431",height:"735"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Content display."})," The generated content is returned from the middleware service and displayed to the user."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Example Best For You Organics Company generated content, including product listings, prices, and discounts",src:n(89282).Z+"",width:"840",height:"1296"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"2-the-middleware-service-connecting-users-product-data-and-generated-content",children:"2. The middleware service: Connecting users, product data, and generated content"}),"\n",(0,a.jsxs)(t.p,{children:["The middleware service is responsible for generating content using ",(0,a.jsx)(t.strong,{children:"OpenAI\u2019s GPT-4o"})," model and retrieving related product data using an ",(0,a.jsx)(t.strong,{children:"embedding vector model"}),". It acts as a bridge between the front end and back end."]}),"\n",(0,a.jsx)(t.h3,{id:"key-features-1",children:"Key features:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"API Management integration."})," All middleware APIs are exposed via Azure API Management, which applies\u202fsecurity policies like API key checks, throttling, Cross-Origin Resource Sharing (CORS) rules, and rate limits."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Azure OpenAI integration."})," The middleware connects to ",(0,a.jsx)(t.strong,{children:"Azure OpenAI"}),", using the ",(0,a.jsx)(t.strong,{children:"completion model (GPT-4o)"})," for content generation and the ",(0,a.jsx)(t.strong,{children:"embedding model (text-embedding-3-small)"})," for vector representation of user queries."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Tomcat initialized with port 8081",src:n(12653).Z+"",width:"1430",height:"575"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Security."})," The middleware uses ",(0,a.jsx)(t.strong,{children:"Azure Key Vault"})," to securely retrieve API keys and credentials via a ",(0,a.jsx)(t.strong,{children:"managed identity"})," assigned to the App Service or AKS cluster running the service."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"3-the-back-end-service-managing-product-related-data",children:"3. The back-end service: Managing product-related data"}),"\n",(0,a.jsx)(t.p,{children:"The back end is responsible for managing product-related data, such as customer information, product details, and vector-based product similarity searches."}),"\n",(0,a.jsx)(t.h3,{id:"key-features-2",children:"Key features:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"API Management integration."})," Like the middleware, the back end exposes its APIs (for example, ",(0,a.jsx)(t.strong,{children:"Customer API"}),", ",(0,a.jsx)(t.strong,{children:"Product API"}),", ",(0,a.jsx)(t.strong,{children:"Product Vector API"}),") through API Management with API key checks, CORS, throttling, and rate limits."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Product similarity search."})," When the middleware sends a query vector, the back end retrieves a list of similar products based on embeddings and product data stored in ",(0,a.jsx)(t.strong,{children:"Azure Cosmos DB for MongoDB"})," and ",(0,a.jsx)(t.strong,{children:"Blob Storage."})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Products appended to MongoDB successfully",src:n(69482).Z+"",width:"1431",height:"623"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Key Vault integration."})," All back-end services securely connect to ",(0,a.jsx)(t.strong,{children:"Azure Cosmos DB"})," and ",(0,a.jsx)(t.strong,{children:"Blob Storage"}),", using secrets stored in ",(0,a.jsx)(t.strong,{children:"Azure Key Vault"}),". The key vault is accessed securely by using\u202fa ",(0,a.jsx)(t.strong,{children:"managed identity"})," assigned to the App Service or AKS cluster running the service."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"4-end-to-end-flow-demonstration",children:"4. End-to-end flow demonstration"}),"\n",(0,a.jsx)(t.h3,{id:"step-by-step-user-experience",children:"Step-by-step user experience"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"User signs in."})," The user is prompted to sign in, helping to ensure secure access via identity management."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"User submits query."})," After signing in, the user enters their query in the chat interface, selects the type of content, and then selects ",(0,a.jsx)(t.strong,{children:"Submit"}),". This request is sent to the middleware."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Middleware processes query."})," The middleware generates an embedding vector for the query and hits the back-end API Management endpoint to retrieve similar products based on this vector."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Back end returns results."})," The back end fetches product data (for example, similar products) from an ",(0,a.jsx)(t.strong,{children:"Azure Cosmos DB"})," database and then returns the results to the middleware."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Middleware generates content."})," The middleware then calls ",(0,a.jsx)(t.strong,{children:"OpenAI's completion model (GPT-4o)"})," to generate content based on the query and returns it to the front end."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"User gets response."})," The generated content is displayed to the user in the chat interface, completing the process."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"In this blog post, we showcased the power of integrating multiple services and Azure technologies to create a straightforward user experience for AI-based content generation. From secure user sign-in to generating AI-driven content and retrieving relevant product data, the app efficiently uses Azure API Management, Azure Key Vault, and Azure OpenAI Service to meet the needs of modern applications."}),"\n",(0,a.jsx)(t.p,{children:"In the next post, we\u2019ll dive deeper into how the application works, covering technical details, code, and data flow diagrams."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},7801:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-8-1-e5b1882528556fd5fd796ae11a84bc9c.png"},15174:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-8-2-98b0b501eae8d0c8869ac1ee19419bae.png"},4634:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-8-3-b2331dec9558bc35957745cb9587183c.png"},89282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-8-4-71c97b1d8543dd45e56413bc57ab1522.png"},12653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-8-5-67bb6c4bc55baa16694251a6a99ac8e3.png"},69482:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-8-6-5f92dce9728c80703249d568ebd36f5c.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var a=n(67294);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);