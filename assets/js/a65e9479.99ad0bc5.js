"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55800],{29849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(85893),r=t(11151);const o={slug:"Kubernetes-101",title:"1-3. Kubernetes 101",authors:["steven"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["serverless","containers","decision-tree","aks","kubernetes","container-apps"],image:"https://azure.github.io/Cloud-Native/img/og/30-03.png",description:"What is Kubernetes? And why is it so ubiquitous in Cloud-native solutions?",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},s=void 0,a={permalink:"/Cloud-Native/cnny-2023/Kubernetes-101",source:"@site/blog-cnny/2023-01-25/30days.md",title:"1-3. Kubernetes 101",description:"What is Kubernetes? And why is it so ubiquitous in Cloud-native solutions?",date:"2023-01-25T00:00:00.000Z",formattedDate:"January 25, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"}],readingTime:2.465,hasTruncateMarker:!1,authors:[{name:"Steven Murawski",title:"Principal Cloud Advocate",url:"https://github.com/smurawski",imageURL:"https://github.com/smurawski.png",key:"steven"}],frontMatter:{slug:"Kubernetes-101",title:"1-3. Kubernetes 101",authors:["steven"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["serverless","containers","decision-tree","aks","kubernetes","container-apps"],image:"https://azure.github.io/Cloud-Native/img/og/30-03.png",description:"What is Kubernetes? And why is it so ubiquitous in Cloud-native solutions?",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service"]},unlisted:!1,prevItem:{title:"1-2. Containers 101",permalink:"/Cloud-Native/cnny-2023/containers-101"},nextItem:{title:"1-4. Microservices 101",permalink:"/Cloud-Native/cnny-2023/microservices-101"}},l={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introduction",id:"introduction",level:2},{value:"What is Kubernetes?",id:"what-is-kubernetes",level:2},{value:"How does Kubernetes Work?",id:"how-does-kubernetes-work",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o,{children:[(0,i.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/kubernetes-101"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Kubernetes 101"}),(0,i.jsx)("meta",{name:"twitter:description",content:"What is Kubernetes? And why is it so ubiquitous in Cloud-native solutions?"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-03.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@stevenmurawski"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/kubernetes-101"})]}),"\n",(0,i.jsxs)(n.p,{children:["Welcome to ",(0,i.jsx)(n.code,{children:"Day 3 of Week 1"})," of #CloudNativeNewYear!"]}),"\n",(0,i.jsx)(n.p,{children:"This week we'll focus on what Kubernetes is."}),"\n",(0,i.jsx)(n.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Introduction"}),"\n",(0,i.jsx)(n.li,{children:"What is Kubernetes? (Video)"}),"\n",(0,i.jsx)(n.li,{children:"How does Kubernetes Work? (Video)"}),"\n",(0,i.jsx)(n.li,{children:"Conclusion"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Promotional banner for Cloud Native New Year featuring colorful 3D icons representing security, containers, and cloud technology.",src:t(25704).Z+"",width:"3840",height:"654"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.admonition,{title:"REGISTER & LEARN: KUBERNETES 101",type:"tip",children:[(0,i.jsx)(n.p,{children:"Interested in a dive into Kubernetes and a chance to talk to experts?"}),(0,i.jsxs)(n.p,{children:["\ud83c\udf99: Join us ",(0,i.jsx)(n.strong,{children:"Jan 26 @1pm PST"}),"\n",(0,i.jsx)(n.a,{href:"https://info.microsoft.com/ww-landing-a-quickstart-guide-to-kubernetes-concepts.html?WT.mc_id=containers-84290-stmuraws",children:"by registering here"})]}),(0,i.jsx)(n.p,{children:"Here's what you will learn:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Key concepts and core principles of Kubernetes."}),"\n",(0,i.jsx)(n.li,{children:"How to deploy, scale and manage containerized workloads."}),"\n",(0,i.jsx)(n.li,{children:"Live Demo of the concepts explained"}),"\n",(0,i.jsx)(n.li,{children:"How to get started with Azure Kubernetes Service for free."}),"\n"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Start your free Azure Kubernetes Trial Today!!"}),": ",(0,i.jsx)(n.a,{href:"https://aka.ms/TryAKS",children:"aka.ms/TryAKS"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Kubernetes is an open source container orchestration engine that can help with automated deployment, scaling, and management of our applications."}),"\n",(0,i.jsx)(n.p,{children:"Kubernetes takes physical (or virtual) resources and provides a consistent API over them, bringing a consistency to the management and runtime experience for our applications.  Kubernetes provides us with a number of capabilities such as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Container scheduling"}),"\n",(0,i.jsx)(n.li,{children:"Service discovery and load balancing"}),"\n",(0,i.jsx)(n.li,{children:"Storage orchestration"}),"\n",(0,i.jsx)(n.li,{children:"Automated rollouts and rollbacks"}),"\n",(0,i.jsx)(n.li,{children:"Automatic bin packing"}),"\n",(0,i.jsx)(n.li,{children:"Self-healing"}),"\n",(0,i.jsx)(n.li,{children:"Secret and configuration management"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We'll learn more about most of these topics as we progress through Cloud Native New Year."}),"\n",(0,i.jsx)(n.h2,{id:"what-is-kubernetes",children:"What is Kubernetes?"}),"\n",(0,i.jsx)(n.p,{children:"Let's hear from Brendan Burns, one of the founders of Kubernetes as to what Kubernetes actually is."}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/q1PcAawa4Bg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,i.jsx)(n.h2,{id:"how-does-kubernetes-work",children:"How does Kubernetes Work?"}),"\n",(0,i.jsx)(n.p,{children:"And Brendan shares a bit more with us about how Kubernetes works."}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/daVUONZqn88",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Kubernetes allows us to deploy and manage our applications effectively and consistently."}),"\n",(0,i.jsx)(n.p,{children:"By providing a consistent API across many of the concerns our applications have, like load balancing, networking, storage, and compute, Kubernetes improves both our ability to build and ship new software."}),"\n",(0,i.jsx)(n.p,{children:"There are standards for the applications to depend on for resources needed. Deployments, metrics, and logs are provided in a standardized fashion allowing more effecient operations across our application environments."}),"\n",(0,i.jsx)(n.p,{children:"And since Kubernetes is an open source platform, it can be found in just about every type of operating environment - cloud, virtual machines, physical hardware, shared data centers, even small devices like Rasberry Pi's!"}),"\n",(0,i.jsxs)(n.p,{children:["Want to learn more?  ",(0,i.jsx)(n.a,{href:"https://info.microsoft.com/ww-landing-a-quickstart-guide-to-kubernetes-concepts.html?WT.mc_id=containers-84290-stmuraws",children:"Join us for a webinar on Kubernetes Concepts (or catch the playback) on Thursday, January 26th at 1 PM PST"})," and watch for the rest of this series right here!"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},25704:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hero-banner-991129dffd470b38678db8972274c09a.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);