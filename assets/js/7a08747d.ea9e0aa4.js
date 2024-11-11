"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65731],{85301:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=i(85893),a=i(11151);const t={date:"2024-11-11T09:01",slug:"hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service",title:"3.4 Hosting considerations for scalable apps by using Azure App Service and Azure Kubernetes Service (AKS)",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this blog series, we explore how exactly Microsoft developer tools can improve DevEx.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},r=void 0,o={permalink:"/Cloud-Native/30-days-of-ia-2024/hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service",source:"@site/blog-30-days-of-ia-2024/2024-11-11/hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service.md",title:"3.4 Hosting considerations for scalable apps by using Azure App Service and Azure Kubernetes Service (AKS)",description:"In this blog series, we explore how exactly Microsoft developer tools can improve DevEx.",date:"2024-11-11T09:01:00.000Z",formattedDate:"November 11, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/build-intelligent-apps"},{label:"30-days-of-IA-2024",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/30-days-of-ia-2024"},{label:"learn-live",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/learn-live"},{label:"demo-bytes",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/demo-bytes"},{label:"community-gallery",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/community-gallery"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-actions"}],readingTime:7.35,hasTruncateMarker:!1,authors:[{name:"#30Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"30days"}],frontMatter:{date:"2024-11-11T09:01",slug:"hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service",title:"3.4 Hosting considerations for scalable apps by using Azure App Service and Azure Kubernetes Service (AKS)",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this blog series, we explore how exactly Microsoft developer tools can improve DevEx.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"3.5 Using continuous integration/continuous deployment (CI/CD) processes, monitoring, and AI to help ensure that your app can deploy to production at scale",permalink:"/Cloud-Native/30-days-of-ia-2024/deploy-to-production-at-scale"},nextItem:{title:"3.3 Simplifying web app deployment with Microsoft Copilot in Azure",permalink:"/Cloud-Native/30-days-of-ia-2024/simplifying-web-app-deployment-with-microsoft-copilot-in-azure"}},l={authorsImageUrls:[void 0]},c=[{value:"Provisioning",id:"provisioning",level:2},{value:"Security and compliance",id:"security-and-compliance",level:2},{value:"Availability and resilience",id:"availability-and-resilience",level:2},{value:"Scaling",id:"scaling",level:2},{value:"Performance and responsiveness",id:"performance-and-responsiveness",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i,{children:[(0,s.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,s.jsx)("meta",{property:"og:description",content:"In this blog series, we explore how exactly Microsoft developer tools can improve DevEx."}),(0,s.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,s.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service"}),(0,s.jsx)("meta",{name:"twitter:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,s.jsx)("meta",{name:"twitter:description",content:"In this blog series, we explore how exactly Microsoft developer tools can improve DevEx."}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,s.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service"})]}),"\n",(0,s.jsx)(n.p,{children:"Building and deploying an app to Azure for the first time is an exciting milestone for any project. However, when it comes to deploying your app in a production environment, you need ensure that your development process properly tests updates, while deploying new code securely and without downtime. You also need to make sure that your app is scalable and can efficiently handle changing levels of use over time."}),"\n",(0,s.jsx)(n.p,{children:"During Week 1 and 2 of this year\u2019s 30 Days of IA series, you built an example content generation app for the Best For You Organics company. In this two-part blog, we explore what\u2019s needed to move that app from development and to production at scale on Azure. As we walk through these topics, we cover considerations for security, compliance, availability, and resilience."}),"\n",(0,s.jsx)(n.p,{children:"In part 1, we focus on the technology and architecture decisions you need to consider when hosting an app in an Azure-based hosting environment. We cover using both Azure Kubernetes Service (AKS) and Azure App Service, and we focus specifically on considerations related to scalability for our three-tier example application."}),"\n",(0,s.jsx)(n.h2,{id:"provisioning",children:"Provisioning"}),"\n",(0,s.jsx)(n.p,{children:"Deciding on the deployment technology for your app is a fundamental decision. You need to choose and provision the right Azure services based on your app and your organization\u2019s needs."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Choosing the right hosting service"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/aks/?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Kubernetes Service (AKS)"})}),".\u202fIf your application is containerized and requires orchestration, AKS is an excellent choice. It simplifies the deployment, management, and scaling of containerized applications using Kubernetes. AKS provides features like automated upgrades, self-healing, and easy scaling, making it ideal for complex applications that need to handle varying loads."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/app-service/?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure App Service"})}),".\u202fFor web apps, APIs, and mobile back ends, App Service offers a fully managed platform with built-in scaling and management capabilities. App Service is ideal when you need a fast, easy-to-use platform to host your app, with minimal management overhead. It supports multiple languages and frameworks, making it versatile for different types of applications."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Provisioning resources:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Using the ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/cli/azure/?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure CLI"})," or the ",(0,s.jsx)(n.a,{href:"https://azure.microsoft.com/get-started/azure-portal/?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure portal"}),":"]}),"\u202fYou can create your AKS cluster or App Service plan by using the Azure CLI for automation or the Azure portal for a more visual approach. When provisioning, consider the expected load on your application to choose the appropriate virtual machine (VM) size, node count, or pricing tier. This helps ensure that your application has the necessary resources to perform efficiently without overprovisioning, which can lead to unnecessary costs."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"security-and-compliance",children:"Security and compliance"}),"\n",(0,s.jsx)(n.p,{children:"You also need to be sure that your app is secure and compliant with your security, privacy, and legal requirements. These considerations are especially crucial if your app deals with sensitive data or is operating in regulated industries."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Identity and access management:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://www.microsoft.com/security/business/identity-access/microsoft-entra-id?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Microsoft Entra ID"})}),".\u202fImplement Microsoft Entra ID for robust authentication and authorization. It supports single sign-on (SSO), multifactor authentication, and conditional access policies, enhancing the security of your application."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/role-based-access-control/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure role-based access control (RBAC)"})}),".\u202fUse RBAC to restrict access to resources based on user roles. This minimizes the risk of unauthorized access and helps ensure that users only have the permissions they need to perform their tasks."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Data encryption:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/well-architected/security/encryption?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Encryption at rest and in transit"})}),".\u202fEnable encryption for data at rest and in transit, to protect sensitive information from unauthorized access. Azure provides built-in encryption mechanisms for various services, helping to ensure data security."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/key-vault/?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Key Vault"})}),".\u202fUse Azure Key Vault to manage and store secrets, keys, and certificates securely. Key Vault helps safeguard cryptographic keys and secrets used by cloud applications and services, helping to ensure that they\u2019re protected and accessible only to authorized users."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Compliance:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/compliance/?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Industry standards and regulations"})}),".\u202fHelp ensure that your application complies with relevant industry standards and regulations, such as General Data Protection Regulation (GDPR), Health Insurance Portability and Accountability Act (HIPAA), and others. Compliance helps protect user data and builds trust with your customers."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/governance/policy/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Policy"})}),".\u202fUse Azure Policy to enforce compliance policies across your resources. Azure Policy helps you manage and prevent IT issues, with policy definitions that enforce rules and effects for your resources."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"availability-and-resilience",children:"Availability and resilience"}),"\n",(0,s.jsx)(n.p,{children:"Your app is no good to anyone if it has crashed or the server hosting it is suffering a hardware failure. You need to be able to maximize uptime. High availability and resilience capabilities help ensure your application remains operational and responsive, even in the face of network outages or hardware failures."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"High availability:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"AKS"}),".\u202fDeploy your AKS cluster across multiple availability zones to enhance fault tolerance. Use Kubernetes features, like pod disruption budgets and replica sets, to maintain application availability during maintenance or unexpected failures."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"App Service"}),".\u202fDeploy your application across multiple regions by using ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/traffic-manager/traffic-manager-overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Traffic Manager"}),". This helps ensure that if one region goes down, traffic can be rerouted to another region, maintaining availability. Use deployment slots for staging and production environments to facilitate smooth rollouts and minimize downtime."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Resilience:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Health probes and auto-healing"}),".\u202fImplement health probes to monitor the health of your services and auto-healing mechanisms to automatically recover from failures. This helps ensure that your application can self-recover and continue to operate smoothly."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/azure-monitor/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Monitor"})," and ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/azure-monitor/agents/azure-monitor-agent-overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Monitor Agent"})]}),".\u202fUse these tools to continuously monitor the health and performance of your application. They provide insights into application performance, detect anomalies, and help you proactively address issues before they impact users."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"scaling",children:"Scaling"}),"\n",(0,s.jsx)(n.p,{children:"An overloaded app is just as useless to your users as one that\u2019s crashed or suffered a server outage. Scaling your hosting to meet demand allows your application to efficiently handle varying loads, supporting a seamless experience for users."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Web tier:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"AKS"}),".\u202fUse Kubernetes Horizontal Pod Autoscaler to scale web pods based on CPU and memory usage. This allows your application to handle increased traffic by automatically adjusting the number of running pods."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"App Service"}),".\u202fEnable autoscaling based on metrics like CPU usage, memory usage, or HTTP queue length. This helps ensure that your application can scale out to handle peak loads and scale in to save costs during low traffic periods."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Application tier"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"AKS"}),".\u202fDeploy multiple instances of your application service, and use Kubernetes services for load balancing. This distributes traffic evenly across instances, supporting optimal performance."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"App Service"}),".\u202fUse deployment slots to manage different versions of your application, and scale instances as needed. This allows you to test new versions in a staging environment before deploying them to production."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Database tier."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Azure SQL Database or Azure Cosmos DB"}),".\u202fUse these services for their built-in scaling capabilities. Azure SQL Database offers features like elastic pools and managed instances, and Azure Cosmos DB provides global distribution and multi-model support."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Database replication and geo-redundancy"}),".\u202fHelp ensure high availability and data integrity by enabling database replication and geo-redundancy. This protects your data from regional failures and helps ensure that it\u2019s always available."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"performance-and-responsiveness",children:"Performance and responsiveness"}),"\n",(0,s.jsx)(n.p,{children:"Don\u2019t be reactive to performance issues. Look for ways to configure your app and hosting resources to optimize performance and responsiveness, giving your users a smooth and consistent experience."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Response optimization:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Language models"}),".\u202fWhen integrating language models, optimize their responsiveness by minimizing the number of output tokens and setting appropriate values for parameters like\u202f",(0,s.jsx)(n.code,{children:"max_tokens"}),".\u202fAs discussed in ",(0,s.jsx)(n.a,{href:"https://techcommunity.microsoft.com/t5/ai-ai-platform-blog/genai-solutions-elevating-production-apps-performance-through/ba-p/4049822?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"GenAI Solutions: Elevating Production Apps Performance Through Latency Optimization"}),", this helps control the length of generated output and reduces latency."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Efficient workflow orchestration"}),".\u202fDesign efficient workflows to minimize delays and help ensure that tasks are processed quickly. This involves optimizing the sequence and execution of tasks to reduce bottlenecks."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Latency improvement:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Ancillary AI services"}),".\u202fImprove latency in ancillary AI services by optimizing their configurations and making sure that they are deployed in regions close to your users.\u202fThis reduces the time it takes for data to travel between services and can improve overall responsiveness."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Azure Monitor and Application Insights"}),".\u202fUse these tools to monitor application performance and identify areas for improvement. They provide detailed metrics and insights into application behavior, helping you optimize performance."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"In this blog, we covered guidance that can help you ensure that your content generation app is secure, compliant, highly available, and resilient when deployed on either AKS or Azure App Service."}),"\n",(0,s.jsx)(n.p,{children:"In part 2 of this blog series, we explore how to support these same goals with a focus on implementing DevOps practices, including monitoring and performance management."})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(67294);const a={},t=s.createContext(a);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);