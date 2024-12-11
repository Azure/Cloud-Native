"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59070],{46728:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(85893),s=i(11151);const r={slug:"12-build-with-dapr",title:"12. Build With Dapr!",authors:["nitya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Today we'll shift gears and talk about Dapr - the Distributed Application Runtime - and how it makes microservices development with ACA _easier_",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},a=void 0,o={permalink:"/Cloud-Native/blog/12-build-with-dapr",source:"@site/blog/2022-09-12/index.md",title:"12. Build With Dapr!",description:"Today we'll shift gears and talk about Dapr - the Distributed Application Runtime - and how it makes microservices development with ACA _easier_",date:"2022-09-12T00:00:00.000Z",formattedDate:"September 12, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"},{label:"microservices",permalink:"/Cloud-Native/blog/tags/microservices"}],readingTime:7.475,hasTruncateMarker:!1,authors:[{name:"Nitya Narasimhan",title:"Senior Cloud Advocate, Illustrator",url:"https://github.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"}],frontMatter:{slug:"12-build-with-dapr",title:"12. Build With Dapr!",authors:["nitya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Today we'll shift gears and talk about Dapr - the Distributed Application Runtime - and how it makes microservices development with ACA _easier_",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},unlisted:!1,prevItem:{title:"13. Secrets + Managed Identity",permalink:"/Cloud-Native/blog/13-aca-managed-id"},nextItem:{title:"\ud83d\ude80 | Use Custom Handlers For Go",permalink:"/Cloud-Native/blog/zero2hero-func-03"}},l={image:i(58745).Z,authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Hello, Dapr!",id:"hello-dapr",level:2},{value:"Dapr + Apps: A Sidecar Approach",id:"dapr--apps-a-sidecar-approach",level:2},{value:"Dapr Building Blocks: API Interactions",id:"dapr-building-blocks-api-interactions",level:2},{value:"Integrate Dapr &amp; Azure Container Apps",id:"integrate-dapr--azure-container-apps",level:2},{value:"1. Enable Dapr in ACA: Settings",id:"1-enable-dapr-in-aca-settings",level:3},{value:"2. Configure Dapr in ACA:  Components",id:"2-configure-dapr-in-aca--components",level:3},{value:"Exercise: Deploy Dapr-enabled ACA",id:"exercise-deploy-dapr-enabled-aca",level:2},{value:"Resources",id:"resources",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r,{children:[(0,t.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/12-build-with-dapr"}),(0,t.jsx)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Dapr Integration with ACA"}),(0,t.jsx)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Dapr Integration with ACA"}),(0,t.jsx)("meta",{name:"twitter:image",content:"http://azure.github.io/Cloud-Native/assets/images/banner-cc3cfe656444b6f21e4bc8d2c541bc3e.png"}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,t.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,t.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/12-build-with-dapr"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Welcome to ",(0,t.jsx)(n.code,{children:"Day 12"})," of #30DaysOfServerless!"]}),"\n",(0,t.jsxs)(n.p,{children:["So far we've looked at Azure Container Apps - what it is, how it enables microservices communication, and how it enables auto-scaling with KEDA compliant scalers. Today we'll shift gears and talk about Dapr - the Distributed Application Runtime - and how it makes microservices development with ACA ",(0,t.jsx)(n.em,{children:"easier"})," with core building blocks and a sidecar architecture!"]}),"\n",(0,t.jsx)(n.p,{children:"Ready? Let's go!"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"What is Dapr and why use it?"}),"\n",(0,t.jsx)(n.li,{children:"Building Block APIs"}),"\n",(0,t.jsx)(n.li,{children:"Dapr Quickstart and Tutorials"}),"\n",(0,t.jsx)(n.li,{children:"Dapr-enabled ACA: A Sidecar Approach"}),"\n",(0,t.jsx)(n.li,{children:"Exercise: Build & Deploy a Dapr-enabled ACA."}),"\n",(0,t.jsx)(n.li,{children:"Resources: For self-study!"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Session slide by Nitya Narasimhan on Dapr, explaining microservices with sidecar patterns, API blocks, and practical examples.",src:i(98389).Z+"",width:"1600",height:"672"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"hello-dapr",children:"Hello, Dapr!"}),"\n",(0,t.jsxs)(n.p,{children:["Building distributed applications is hard. Building ",(0,t.jsx)(n.strong,{children:"reliable and portable microservces"})," means having middleware that deals with challenges like service discovery, sync and async communications, state management, secure information sharing and more. Integrating these support services into your application can be challenging from both development and maintenance perspectives, adding complexity that is independent of the core application logic you want to focus on."]}),"\n",(0,t.jsxs)(n.p,{children:["This is where ",(0,t.jsx)(n.a,{href:"https://dapr.io",children:(0,t.jsx)(n.strong,{children:"Dapr (Distributed Application Runtime)"})})," shines - ",(0,t.jsx)(n.a,{href:"https://docs.dapr.io/",children:"it's defined as:"}),":"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"a portable, event-driven runtime that makes it easy for any developer to build resilient, stateless and stateful applications that run on the cloud and edge and embraces the diversity of languages and developer frameworks."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"But what does this actually mean to me as an app developer?"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"dapr--apps-a-sidecar-approach",children:"Dapr + Apps: A Sidecar Approach"}),"\n",(0,t.jsx)(n.p,{children:"The strength of Dapr lies in its ability to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["abstract complexities of distributed systems middleware - with  ",(0,t.jsx)(n.strong,{children:"Building Block APIs"})," that implement components using best practices to tackle key challenges."]}),"\n",(0,t.jsxs)(n.li,{children:["implement a ",(0,t.jsx)(n.strong,{children:"Sidecar Pattern"})," with interactions via APIs - allowing applications to keep their codebase clean and focus on app logic."]}),"\n",(0,t.jsxs)(n.li,{children:["be ",(0,t.jsx)(n.strong,{children:"Incrementally Adoptable"})," - allowing developers to start by integrating one API, then evolving to use more as and when needed."]}),"\n",(0,t.jsxs)(n.li,{children:["be ",(0,t.jsx)(n.strong,{children:"Platform Agnostic"})," - allowing applications to be developed in a preferred language or framework without impacting integration capabilities."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The application-dapr sidecar interaction is illustrated below. The API abstraction allows applications to get the desired functionality without having to know ",(0,t.jsx)(n.em,{children:"how"})," it was implemented, or without having to integrate Dapr-specific code into their codebase. Note how the sidecar process listens on port ",(0,t.jsx)(n.code,{children:"3500"})," and the API provides clear routes for the specific building blocks supported by Dapr (e.g, ",(0,t.jsx)(n.code,{children:"/secrets"}),", ",(0,t.jsx)(n.code,{children:"/state"})," etc.)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://docs.dapr.io/images/overview-sidecar-model.png",alt:""})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"dapr-building-blocks-api-interactions",children:"Dapr Building Blocks: API Interactions"}),"\n",(0,t.jsxs)(n.p,{children:["Dapr Building Blocks refers to ",(0,t.jsx)(n.strong,{children:"HTTP and gRPC endpoints exposed by Dapr"})," API endpoints exposed by the Dapr sidecar, providing key capabilities like state management, observability, service-to-service invocation, pub/sub messaging and more to the associated application."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"}}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:(0,t.jsx)(n.strong,{children:"Building Blocks: Under the Hood"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.img,{src:"https://docs.dapr.io/images/concepts-building-blocks.png",alt:""})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["The Dapr API is implemented by ",(0,t.jsx)(n.a,{href:"https://docs.dapr.io/concepts/building-blocks-concept/",children:"modular components"})," that codify best practices for tackling the specific challenge that they represent. The API abstraction allows component implementations to evolve, or alternatives to be used , without requiring changes to the application codebase."]})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://docs.dapr.io/images/building_blocks.png",alt:""})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://docs.dapr.io/concepts/building-blocks-concept/",children:"latest Dapr release"})," has the building blocks shown in the above figure. Not all capabilities are available to Azure Container Apps by default -  check the ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/dapr-overview?tabs=bicep1%2Cyaml#unsupported-dapr-capabilities",children:"documentation"})," for the latest updates on this. For now, Azure Container Apps + Dapr integration provides the following capabilities to the application:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.dapr.io/developing-applications/building-blocks/service-invocation/service-invocation-overview/",children:"Service-to-Service Invocation"})," for synchronous communications"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.dapr.io/developing-applications/building-blocks/state-management/state-management-overview/",children:"State management"})," for transactions and CRUD operations"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.dapr.io/developing-applications/building-blocks/pubsub/pubsub-overview",children:"Pub/Sub messaging"})," for asynchronous (message-driven) communications"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.dapr.io/developing-applications/building-blocks/bindings/bindings-overview/",children:"Bindings"})," for seamless workflow integrations using event triggers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.dapr.io/developing-applications/building-blocks/actors/actors-overview/",children:"Actors"})," for encapsulated & reusable objects that enable reliable, scalable behaviors"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/observability",children:"Observability"})," to monitor application events for health and performance"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.dapr.io/developing-applications/building-blocks/secrets/",children:"Secrets"})," for securely accessing sensitive values."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In the next section, we'll dive into Dapr-enabled Azure Container Apps. Before we do that, here are a couple of resources to help you explore the Dapr platform by itself, and get more hands-on experience with the concepts and capabilities:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.dapr.io/getting-started/quickstarts/",children:"Dapr Quickstarts"})," - build your first Dapr app, then explore quickstarts for a core APIs including service-to-service invocation, pub/sub, state mangement, bindings and secrets management."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.dapr.io/getting-started/tutorials/",children:"Dapr Tutorials"})," - go beyond the basic quickstart and explore more realistic service integrations and usage scenarios. Try the ",(0,t.jsx)(n.a,{href:"https://github.com/dapr/quickstarts/tree/master/tutorials/distributed-calculator",children:"distributed calculator"})," example!"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"integrate-dapr--azure-container-apps",children:"Integrate Dapr & Azure Container Apps"}),"\n",(0,t.jsxs)(n.p,{children:["Dapr currently has a ",(0,t.jsx)(n.a,{href:"https://v1-9.docs.dapr.io/",children:"v1.9 (preview)"})," version, but Azure Container Apps supports ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/dapr-overview#current-supported-dapr-version",children:"Dapr v1.8"}),". In this section, we'll look at what it takes to enable, configure, and use, Dapr integration with Azure Container Apps. It involves 3 steps: ",(0,t.jsx)(n.em,{children:"enabling"})," Dapr using settings, ",(0,t.jsx)(n.em,{children:"configuring"})," Dapr components (API) for use, then invoking the APIs."]}),"\n",(0,t.jsxs)(n.p,{children:["Here's a simple ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/dapr-overview?tabs=bicep1%2Cyaml#dapr-settings",children:"a publisher-subscriber scenario"})," from the documentation. We have two Container apps identified as ",(0,t.jsx)(n.code,{children:"publisher-app"})," and ",(0,t.jsx)(n.code,{children:"subscriber-app"})," deployed in a single environment. Each ACA has an activated ",(0,t.jsx)(n.code,{children:"daprd"})," sidecar, allowing them to use the ",(0,t.jsx)(n.em,{children:"Pub/Sub"})," API to communicate asynchronously with each other - without having to write the underlying pub/sub implementation themselves. Rather, we can see that the Dapr API uses a ",(0,t.jsx)(n.code,{children:"pubsub,azure.servicebus"})," ",(0,t.jsx)(n.strong,{children:"component"})," to implement that capability."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://learn.microsoft.com/azure/container-apps/media/dapr-overview/dapr-in-aca.png",alt:"Pub/sub example"})}),"\n",(0,t.jsx)(n.p,{children:"Let's look at how this is setup."}),"\n",(0,t.jsxs)(n.h3,{id:"1-enable-dapr-in-aca-settings",children:["1. ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/dapr-overview?tabs=bicep1%2Cyaml#enable-dapr",children:"Enable Dapr in ACA: Settings"})]}),"\n",(0,t.jsxs)(n.p,{children:["We can enable Dapr integration in the Azure Container App during creation by ",(0,t.jsx)(n.em,{children:"specifying settings"})," in one of two ways, based on your development preference:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Using Azure CLI"}),": use custom commandline options for each setting"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Using Infrastructure-as-Code (IaC)"}),": using properties for Bicep, ARM templates"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once enabled, Dapr will run in the same ",(0,t.jsx)(n.em,{children:"environment"})," as the Azure Container App, and listen on ",(0,t.jsx)(n.strong,{children:"port 3500"})," for API requests. The Dapr sidecar can be shared my multiple Container Apps ",(0,t.jsx)(n.em,{children:"deployed in the same environment"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["There are four main settings we will focus on for this demo - the example below shows the ARM template properties, but you can ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/dapr-overview?tabs=bicep1%2Cyaml#enable-dapr",children:"find the equivalent CLI parameters here"})," for comparison."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dapr.enabled"})," - enable Dapr for Azure Container App"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dapr.appPort"})," - specify port on which app is listening"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dapr.appProtocol"})," - specify if using ",(0,t.jsx)(n.code,{children:"http"})," (default) or ",(0,t.jsx)(n.code,{children:"gRPC"})," for API"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dapr.appId"})," - specify unique application ID for service discovery, usage"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These are defined under the ",(0,t.jsx)(n.code,{children:"properties.configuration"})," section for your resource. Changing Dapr settings does not update the revision but it ",(0,t.jsx)(n.em,{children:"will"})," restart ACA revisions and replicas. Here is what the relevant section of the ARM template looks like for the ",(0,t.jsx)(n.code,{children:"publisher-app"})," ACA in the scenario shown above."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"dapr": {\n   "enabled": true,\n   "appId": "publisher-app",\n   "appProcotol": "http",\n   "appPort": 80\n }\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"2-configure-dapr-in-aca--components",children:["2. ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/dapr-overview?tabs=bicep1%2Cyaml#configure-dapr-components",children:"Configure Dapr in ACA:  Components"})]}),"\n",(0,t.jsxs)(n.p,{children:["The next step after activating the Dapr sidecar, is to define the ",(0,t.jsx)(n.em,{children:"APIs"})," that you want to use and potentially specify the ",(0,t.jsx)(n.strong,{children:"Dapr components"})," (specific implementations of that API) that you prefer. These components are created at environment-level and by default, Dapr-enabled containers apps in an environment will load the complete set of deployed components -- ",(0,t.jsxs)(n.strong,{children:["use the ",(0,t.jsx)(n.code,{children:"scopes"})," property"]})," to ensure only components needed by a given app are loaded at runtime. Here's what the ARM template ",(0,t.jsx)(n.code,{children:"resources"})," section looks like for the example above. This tells us that the environment has a ",(0,t.jsx)(n.code,{children:"dapr-pubsub"})," component of type ",(0,t.jsx)(n.code,{children:"pubsub.azure.servicebus"})," deployed - where that component is loaded by container apps with dapr ids (",(0,t.jsx)(n.code,{children:"publisher-app"}),", ",(0,t.jsx)(n.code,{children:"subscriber-app"}),")."]}),"\n",(0,t.jsx)(n.admonition,{title:"USING MANAGED IDENTITY + DAPR",type:"info",children:(0,t.jsxs)(n.p,{children:["The secrets approach used here is idea for demo purposes. However, we recommend using ",(0,t.jsx)(n.em,{children:"Managed Identity with Dapr"})," in production. For more details on secrets, check out tomorrow's post on ",(0,t.jsx)(n.em,{children:"Secrets and Managed Identity in Azure Container Apps"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "resources": [\n    {\n      "type": "daprComponents",\n      "name": "dapr-pubsub",\n      "properties": {\n        "componentType": "pubsub.azure.servicebus",\n        "version": "v1",\n        "secrets": [\n          {\n            "name": "sb-root-connectionstring",\n            "value": "value"\n          }\n        ],\n        "metadata": [\n          {\n            "name": "connectionString",\n            "secretRef": "sb-root-connectionstring"\n          }\n        ],\n        // Application scopes\n        "scopes": ["publisher-app", "subscriber-app"]\n\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"With this configuration, the ACA is now set to use pub/sub capabilities from the Dapr sidecar, using standard HTTP requests to the exposed API endpoint for this service."}),"\n",(0,t.jsx)(n.h2,{id:"exercise-deploy-dapr-enabled-aca",children:"Exercise: Deploy Dapr-enabled ACA"}),"\n",(0,t.jsx)(n.p,{children:"In the next couple posts in this series, we'll be discussing how you can use the Dapr secrets API and doing a walkthrough of a more complex example, to show how Dapr-enabled Azure Container Apps are created and deployed."}),"\n",(0,t.jsx)(n.p,{children:"However, you can get hands-on experience with these concepts by walking through one of these two tutorials, each providing an alternative approach to configure and setup the application describe in the scenario below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tutorial 1"}),": ",(0,t.jsxs)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/microservices-dapr",children:["Deploy a Dapr-enabled ACA using ",(0,t.jsx)(n.strong,{children:"Azure CLI"})]})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tutorial 2"}),": ",(0,t.jsxs)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/microservices-dapr",children:["Deploy a Dapr-enabled ACA using ",(0,t.jsx)(n.strong,{children:"Bicep or ARM templates"})]})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://learn.microsoft.com/azure/container-apps/media/microservices-dapr/azure-container-apps-microservices-dapr.png",alt:""})}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsx)(n.p,{children:"Here are the main resources to explore for self-study:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://v1-9.docs.dapr.io/concepts/",children:"Dapr Documentation: Core Concepts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.dapr.io/getting-started/quickstarts/",children:"Dapr Quickstarts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.dapr.io/getting-started/tutorials/",children:"Dapr Tutorials"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/dapr-overview",children:"Azure Container Apps: Dapr Integration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/microservices-dapr",children:"Dapr-enable Azure Container Apps: Using Azure CLI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/microservices-dapr-azure-resource-manager",children:"Dapr-enabled Azure Container Apps: Using Bicep or ARM"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},58745:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/banner-cc3cfe656444b6f21e4bc8d2c541bc3e.png"},98389:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/banner-cc3cfe656444b6f21e4bc8d2c541bc3e.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var t=i(67294);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);