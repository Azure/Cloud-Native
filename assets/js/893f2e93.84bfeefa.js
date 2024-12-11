"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55411],{8742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(85893),o=t(11151);const a={slug:"containers-101",title:"1-2. Containers 101",authors:["steven","paul","josh"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["serverless","containers","decision-tree","aks","kubernetes","container-apps"],image:"https://azure.github.io/Cloud-Native/img/og/30-02.png",description:"Let's dive into the various technologies behind Cloud Native development, starting with Containers.",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service","containers"]},s=void 0,r={permalink:"/Cloud-Native/cnny-2023/containers-101",source:"@site/blog-cnny/2023-01-24/30days.md",title:"1-2. Containers 101",description:"Let's dive into the various technologies behind Cloud Native development, starting with Containers.",date:"2023-01-24T00:00:00.000Z",formattedDate:"January 24, 2023",tags:[{label:"cloud-native",permalink:"/Cloud-Native/cnny-2023/tags/cloud-native"},{label:"30daysofcloudnative",permalink:"/Cloud-Native/cnny-2023/tags/30-daysofcloudnative"},{label:"zero-to-hero",permalink:"/Cloud-Native/cnny-2023/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/cnny-2023/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/cnny-2023/tags/azure-kubernetes-service"},{label:"containers",permalink:"/Cloud-Native/cnny-2023/tags/containers"}],readingTime:4.045,hasTruncateMarker:!1,authors:[{name:"Steven Murawski",title:"Principal Cloud Advocate",url:"https://github.com/smurawski",imageURL:"https://github.com/smurawski.png",key:"steven"},{name:"Paul Yu",title:"Senior Cloud Advocate",url:"https://github.com/pauldotyu",imageURL:"https://github.com/pauldotyu.png",key:"paul"},{name:"Josh Duffney",title:"Cloud-Native Advocate @Microsoft",url:"https://github.com/duffney",imageURL:"https://github.com/duffney.png",key:"josh"}],frontMatter:{slug:"containers-101",title:"1-2. Containers 101",authors:["steven","paul","josh"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["serverless","containers","decision-tree","aks","kubernetes","container-apps"],image:"https://azure.github.io/Cloud-Native/img/og/30-02.png",description:"Let's dive into the various technologies behind Cloud Native development, starting with Containers.",tags:["cloud-native","30daysofcloudnative","zero-to-hero","ask-the-expert","azure-kubernetes-service","containers"]},unlisted:!1,prevItem:{title:"1-1. Cloud-native Fundamentals",permalink:"/Cloud-Native/cnny-2023/cloud-native-fundamentals"},nextItem:{title:"1-3. Kubernetes 101",permalink:"/Cloud-Native/cnny-2023/Kubernetes-101"}},l={authorsImageUrls:[void 0,void 0,void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Promotional banner for Cloud Native New Year featuring colorful 3D icons representing security, containers, and cloud technology.",id:"promotional-banner-for-cloud-native-new-year-featuring-colorful-3d-icons-representing-security-containers-and-cloud-technology",level:2},{value:"Introduction",id:"introduction",level:2},{value:"How do Containers Work?",id:"how-do-containers-work",level:2},{value:"Why is Containerization so Popular?",id:"why-is-containerization-so-popular",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Resources",id:"resources",level:2},{value:"Learning Path",id:"learning-path",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Head:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a,{children:[(0,i.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/cnny-2023/containers-101"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Container 101"}),(0,i.jsx)("meta",{name:"twitter:description",content:"Let's dive into the various technologies behind Cloud Native development, starting with Containers."}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/og/30-02.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@stevenmurawski"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/cnny-2023/containers-101"})]}),"\n",(0,i.jsxs)(n.p,{children:["Welcome to ",(0,i.jsx)(n.code,{children:"Day 2 of Week 1"})," of #CloudNativeNewYear!"]}),"\n",(0,i.jsx)(n.p,{children:"Today, we'll focus on building an understanding of containers."}),"\n",(0,i.jsx)(n.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Introduction"}),"\n",(0,i.jsx)(n.li,{children:"How do Containers Work?"}),"\n",(0,i.jsx)(n.li,{children:"Why are Containers Becoming so Popular?"}),"\n",(0,i.jsx)(n.li,{children:"Conclusion"}),"\n",(0,i.jsx)(n.li,{children:"Resources"}),"\n",(0,i.jsx)(n.li,{children:"Learning Path"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"promotional-banner-for-cloud-native-new-year-featuring-colorful-3d-icons-representing-security-containers-and-cloud-technology",children:(0,i.jsx)(n.img,{alt:"Promotional banner for Cloud Native New Year featuring colorful 3D icons representing security, containers, and cloud technology.",src:t(25704).Z+"",width:"3840",height:"654"})}),"\n",(0,i.jsxs)(n.admonition,{title:"REGISTER & LEARN: KUBERNETES 101",type:"tip",children:[(0,i.jsx)(n.p,{children:"Interested in a dive into Kubernetes and a chance to talk to experts?"}),(0,i.jsxs)(n.p,{children:["\ud83c\udf99: Join us ",(0,i.jsx)(n.strong,{children:"Jan 26 @1pm PST"}),"\n",(0,i.jsx)(n.a,{href:"https://info.microsoft.com/ww-landing-a-quickstart-guide-to-kubernetes-concepts.html?lcid=en-us",children:"by registering here"})]}),(0,i.jsx)(n.p,{children:"Here's what you will learn:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Key concepts and core principles of Kubernetes."}),"\n",(0,i.jsx)(n.li,{children:"How to deploy, scale and manage containerized workloads."}),"\n",(0,i.jsx)(n.li,{children:"Live Demo of the concepts explained"}),"\n",(0,i.jsx)(n.li,{children:"How to get started with Azure Kubernetes Service for free."}),"\n"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Start your free Azure Kubernetes Trial Today!!"}),": ",(0,i.jsx)(n.a,{href:"https://aka.ms/TryAKS",children:"aka.ms/TryAKS"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"In the beginning, we deployed our applications onto physical servers.  We only had a certain number of those servers, so often they hosted multiple applications.  This led to some problems when those applications shared dependencies.  Upgrading one application could break another application on the same server."}),"\n",(0,i.jsx)(n.p,{children:"Enter virtualization.  Virtualization allowed us to run our applications in an isolated operating system instance.  This removed much of the risk of updating shared dependencies.  However, it increased our overhead since we had to run a full operating system for each application environment."}),"\n",(0,i.jsx)(n.p,{children:"To address the challenges created by virtualization, containerization was created to improve isolation without duplicating kernel level resources. Containers provide efficient and consistent deployment and runtime experiences for our applications and have become very popular as a way of packaging and distributing applications."}),"\n",(0,i.jsx)(n.h2,{id:"how-do-containers-work",children:"How do Containers Work?"}),"\n",(0,i.jsx)(n.p,{children:"Containers build on two capabilities in the Linux operating system, namespaces and cgroups.  These constructs allow the operating system to provide isolation to a process or group of processes, keeping their access to filesystem resources separate and providing controls on resource utilization.  This, combined with tooling to help package, deploy, and run container images has led to their popularity in today\u2019s operating environment.  This provides us our isolation without the overhead of additional operating system resources."}),"\n",(0,i.jsx)(n.p,{children:"When a container host is deployed on an operating system, it works at scheduling the access to the OS (operating systems) components. This is done by providing a logical isolated group that can contain processes for a given application, called a namespace. The container host then manages /schedules access from the namespace to the host OS.  The container host then uses cgroups to allocate compute resources. Together, the container host with the help of cgroups and namespaces can schedule multiple applications to access host OS resources."}),"\n",(0,i.jsx)(n.p,{children:"Overall, this gives the illusion of virtualizing the host OS, where each application gets its own OS. In actuality, all the applications are running on the same operating system and sharing the same kernel as the container host."}),"\n",(0,i.jsx)(n.h2,{id:"why-is-containerization-so-popular",children:"Why is Containerization so Popular?"}),"\n",(0,i.jsx)(n.p,{children:"Containers are popular in the software development industry because they provide several benefits over traditional virtualization methods. Some of these benefits include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Portability"}),": Containers make it easy to move an application from one environment to another without having to worry about compatibility issues or missing dependencies."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Isolation"}),": Containers provide a level of isolation between the application and the host system, which means that the application running in the container cannot access the host system's resources."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scalability"}),": Containers make it easy to scale an application up or down as needed, which is useful for applications that experience a lot of traffic or need to handle a lot of data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Resource Efficiency"}),": Containers are more resource-efficient than traditional virtualization methods because they don't require a full operating system to be running on each virtual machine."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Cost-Effective"}),": Containers are more cost-effective than traditional virtualization methods because they don't require expensive hardware or licensing fees."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Containers are a powerful technology that allows developers to package and deploy applications in a portable and isolated environment. This technology is becoming increasingly popular in the world of software development and is being used by many companies and organizations to improve their application deployment and management processes. With the benefits of portability, isolation, scalability, resource efficiency, and cost-effectiveness, containers are definitely worth considering for your next application development project."}),"\n",(0,i.jsx)(n.p,{children:"Containerizing applications is a key step in modernizing them, and there are many other patterns that can be adopted to achieve cloud-native architectures, including using serverless platforms, Kubernetes, and implementing DevOps practices."}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://azure.microsoft.com/resources/cloud-computing-dictionary/what-is-a-container/?WT.mc_id=containers-84290-stmuraws",children:"What are Containers"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/dotnet/architecture/microservices/container-docker-introduction/?WT.mc_id=containers-84290-stmuraws",children:"Containerizing .NET Applications"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"learning-path",children:"Learning Path"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/training/modules/intro-to-docker-containers/?WT.mc_id=containers-84290-stmuraws",children:"Introduction to Docker Containers"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},25704:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hero-banner-991129dffd470b38678db8972274c09a.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);