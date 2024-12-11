"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44116],{78214:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=t(85893),s=t(11151);const o={slug:"microservices-101",title:"1-4. Microservices 101",authors:["josh"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["serverless","containers","decision-tree","aks","kubernetes","container-apps","microservices"],image:"https://azure.github.io/Cloud-Native/img/og/30-04.png",description:"What are Microservices? Why are they a core pillar for Cloud-native and how does Kubernetes help in their deployment?",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service","microservices"]},a=void 0,r={permalink:"/Cloud-Native/cnny-2023/microservices-101",source:"@site/blog-cnny/2023-01-26/30days.md",title:"1-4. Microservices 101",description:"What are Microservices? Why are they a core pillar for Cloud-native and how does Kubernetes help in their deployment?",date:"2023-01-26T00:00:00.000Z",formattedDate:"January 26, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"},{label:"microservices",permalink:"/Cloud-Native/cnny-2023/tags/microservices"}],readingTime:5.345,hasTruncateMarker:!1,authors:[{name:"Josh Duffney",title:"Cloud-Native Advocate @Microsoft",url:"https://github.com/duffney",imageURL:"https://github.com/duffney.png",key:"josh"}],frontMatter:{slug:"microservices-101",title:"1-4. Microservices 101",authors:["josh"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["serverless","containers","decision-tree","aks","kubernetes","container-apps","microservices"],image:"https://azure.github.io/Cloud-Native/img/og/30-04.png",description:"What are Microservices? Why are they a core pillar for Cloud-native and how does Kubernetes help in their deployment?",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service","microservices"]},unlisted:!1,prevItem:{title:"1-3. Kubernetes 101",permalink:"/Cloud-Native/cnny-2023/Kubernetes-101"},nextItem:{title:"1-5. Exploring Cloud-Native Options",permalink:"/Cloud-Native/cnny-2023/explore-options"}},c={authorsImageUrls:[void 0]},l=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"What is Microservice Architecture?",id:"what-is-microservice-architecture",level:2},{value:"How do you design a Microservice?",id:"how-do-you-design-a-microservice",level:2},{value:"What challenges do Microservices introduce?",id:"what-challenges-do-microservices-introduce",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const i={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Head:o}=i;return o||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o,{children:[(0,n.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/microservices-101"}),(0,n.jsx)("meta",{name:"twitter:title",content:"Microservices 101"}),(0,n.jsx)("meta",{name:"twitter:description",content:"What are Microservices? Why are they a core pillar for Cloud-native and how does Kubernetes help in their deployment?"}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-04.png"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@joshduffney"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/microservices-101"})]}),"\n",(0,n.jsxs)(i.p,{children:["Welcome to ",(0,n.jsx)(i.code,{children:"Day 4 of Week 1"})," of #CloudNativeNewYear!"]}),"\n",(0,n.jsxs)(i.p,{children:["This week we'll focus on advanced topics and best practices for Cloud-Native practitioners, kicking off with this post on ",(0,n.jsx)(i.em,{children:"Serverless Container Options"})," with Azure. We'll look at technologies, tools and best practices that range from managed services like Azure Kubernetes Service, to options allowing finer granularity of control and oversight."]}),"\n",(0,n.jsx)(i.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"What is Microservice Architecture?"}),"\n",(0,n.jsx)(i.li,{children:"How do you design a Microservice?"}),"\n",(0,n.jsx)(i.li,{children:"What challenges do Microservices introduce?"}),"\n",(0,n.jsx)(i.li,{children:"Conclusion"}),"\n",(0,n.jsx)(i.li,{children:"Resources"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Promotional banner for Cloud Native New Year featuring colorful 3D icons representing security, containers, and cloud technology.",src:t(25704).Z+"",width:"3840",height:"654"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.p,{children:"Microservices are a modern way of designing and building software that increases deployment velocity by decomposing an application into small autonomous services that can be deployed independently."}),"\n",(0,n.jsx)(i.p,{children:"By deploying loosely coupled microservices your applications can be developed, deployed, and scaled independently. Because each service is independent, it can be updated or replaced without having to worry about the impact on the rest of the application. This means that if a bug is found in one service, it can be fixed without having to redeploy the entire application. All of which gives an organization the ability to deliver value to their customers faster."}),"\n",(0,n.jsx)(i.p,{children:"In this article, we will explore the basics of microservices architecture, its benefits and challenges, and how it can help improve the development, deployment, and maintenance of software applications."}),"\n",(0,n.jsx)(i.h2,{id:"what-is-microservice-architecture",children:"What is Microservice Architecture?"}),"\n",(0,n.jsx)(i.p,{children:"Before explaining what Microservice architecture is, it\u2019s important to understand what problems microservices aim to address."}),"\n",(0,n.jsx)(i.p,{children:"Traditional software development is centered around building monolithic applications. Monolithic applications are built as a single, large codebase. Meaning your code is tightly coupled causing the monolithic app to suffer from the following:"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Too much Complexity:"})," Monolithic applications can become complex and difficult to understand and maintain as they grow. This can make it hard to identify and fix bugs and add new features."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Difficult to Scale:"})," Monolithic applications can be difficult to scale as they often have a single point of failure, which can cause the whole application to crash if a service fails."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Slow Deployment:"})," Deploying a monolithic application can be risky and time-consuming, as a small change in one part of the codebase can affect the entire application."]}),"\n",(0,n.jsx)(i.p,{children:"Microservice architecture (often called microservices) is an architecture style that addresses the challenges created by Monolithic applications. Microservices architecture is a way of designing and building software applications as a collection of small, independent services that communicate with each other through APIs. This allows for faster development and deployment cycles, as well as easier scaling and maintenance than is possible with a monolithic application."}),"\n",(0,n.jsx)(i.h2,{id:"how-do-you-design-a-microservice",children:"How do you design a Microservice?"}),"\n",(0,n.jsx)(i.p,{children:"Building applications with Microservices architecture requires a different approach. Microservices architecture focuses on business capabilities rather than technical layers, such as data access or messaging. Doing so requires that you shift your focus away from the technical stack and model your applications based upon the various domains that exist within the business."}),"\n",(0,n.jsx)(i.p,{children:"Domain-driven design (DDD) is a way to design software by focusing on the business needs. You can use Domain-driven design as a framework that guides the development of well-designed microservices by building services that encapsulate knowledge in each domain and abstract that knowledge from clients."}),"\n",(0,n.jsx)(i.p,{children:"In Domain-driven design you start by modeling the business domain and creating a domain model. A domain model is an abstract model of the business model that distills and organizes a domain of knowledge and provides a common language for developers and domain experts. It\u2019s the resulting domain model that microservices a best suited to be built around because it helps establish a well-defined boundary between external systems and other internal applications."}),"\n",(0,n.jsx)(i.p,{children:"In short, before you begin designing microservices, start by mapping the functions of the business and their connections to create a domain model for the microservice(s) to be built around."}),"\n",(0,n.jsx)(i.h2,{id:"what-challenges-do-microservices-introduce",children:"What challenges do Microservices introduce?"}),"\n",(0,n.jsx)(i.p,{children:"Microservices solve a lot of problems and have several advantages, but the grass isn\u2019t always greener on the other side."}),"\n",(0,n.jsx)(i.p,{children:"One of the key challenges of microservices is managing communication between services. Because services are independent, they need to communicate with each other through APIs. This can be complex and difficult to manage, especially as the number of services grows. To address this challenge, it is important to have a clear API design, with well-defined inputs and outputs for each service. It is also important to have a system for managing and monitoring communication between services, to ensure that everything is running smoothly."}),"\n",(0,n.jsx)(i.p,{children:"Another challenge of microservices is managing the deployment and scaling of services. Because each service is independent, it needs to be deployed and scaled separately from the rest of the application. This can be complex and difficult to manage, especially as the number of services grows. To address this challenge, it is important to have a clear and consistent deployment process, with well-defined steps for deploying and scaling each service. Furthermore, it is advisable to host them on a system with self-healing capabilities to reduce operational burden."}),"\n",(0,n.jsx)(i.p,{children:"It is also important to have a system for monitoring and managing the deployment and scaling of services, to ensure optimal performance."}),"\n",(0,n.jsx)(i.p,{children:"Each of these challenges has created fertile ground for tooling and process that exists in the cloud-native ecosystem. Kubernetes, CI CD, and other DevOps practices are part of the package of adopting the microservices architecture."}),"\n",(0,n.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(i.p,{children:"In summary, microservices architecture focuses on software applications as a collection of small, independent services that communicate with each other over well-defined APIs."}),"\n",(0,n.jsx)(i.p,{children:"The main advantages of microservices include:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"increased flexibility and scalability per microservice,"}),"\n",(0,n.jsx)(i.li,{children:"efficient resource utilization (with help from a container orchestrator like Kubernetes),"}),"\n",(0,n.jsx)(i.li,{children:"and faster development cycles."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Continue following along with this series to see how you can use Kubernetes to help adopt microservices patterns in your own environments!"}),"\n",(0,n.jsx)(i.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://azure.microsoft.com/solutions/microservice-applications?WT.mc_id=containers-84290-stmuraws",children:"Microservice Applications"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://learn.microsoft.com/azure/architecture/microservices?WT.mc_id=containers-84290-stmuraws",children:"Microservices architecture design - Azure Architecture Center | Microsoft Learn"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://learn.microsoft.com/azure/architecture/microservices/design?WT.mc_id=containers-84290-stmuraws",children:"Design a microservices architecture - Azure Architecture Center | Microsoft Learn"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://learn.microsoft.com/azure/architecture/microservices/model/domain-analysis?WT.mc_id=containers-84290-stmuraws",children:"Domain analysis for microservices - Azure Architecture Center | Microsoft Learn"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},25704:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/hero-banner-991129dffd470b38678db8972274c09a.png"},11151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>a});var n=t(67294);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);