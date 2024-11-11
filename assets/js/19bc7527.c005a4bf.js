"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81849],{37313:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var a=o(85893),i=o(11151);const n={date:"2024-11-12T09:00",slug:"deploy-to-production-at-scale",title:"3.5 Using continuous integration/continuous deployment (CI/CD) processes, monitoring, and AI to help ensure that your app can deploy to production at scale",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this blog series, we explore how exactly Microsoft developer tools can improve DevEx.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},s=void 0,r={permalink:"/Cloud-Native/30-days-of-ia-2024/deploy-to-production-at-scale",source:"@site/blog-30-days-of-ia-2024/2024-11-12/deploy-to-production-at-scale.md",title:"3.5 Using continuous integration/continuous deployment (CI/CD) processes, monitoring, and AI to help ensure that your app can deploy to production at scale",description:"In this blog series, we explore how exactly Microsoft developer tools can improve DevEx.",date:"2024-11-12T09:00:00.000Z",formattedDate:"November 12, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/build-intelligent-apps"},{label:"30-days-of-IA-2024",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/30-days-of-ia-2024"},{label:"learn-live",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/learn-live"},{label:"demo-bytes",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/demo-bytes"},{label:"community-gallery",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/community-gallery"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-actions"}],readingTime:4.505,hasTruncateMarker:!1,authors:[{name:"#30Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"30days"}],frontMatter:{date:"2024-11-12T09:00",slug:"deploy-to-production-at-scale",title:"3.5 Using continuous integration/continuous deployment (CI/CD) processes, monitoring, and AI to help ensure that your app can deploy to production at scale",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this blog series, we explore how exactly Microsoft developer tools can improve DevEx.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,nextItem:{title:"3.4 Hosting considerations for scalable apps by using Azure App Service and Azure Kubernetes Service (AKS)",permalink:"/Cloud-Native/30-days-of-ia-2024/hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service"}},l={authorsImageUrls:[void 0]},p=[{value:"Setting up CI/CD",id:"setting-up-cicd",level:2},{value:"Monitoring and performance management",id:"monitoring-and-performance-management",level:2},{value:"Scaling DevOps practices",id:"scaling-devops-practices",level:2},{value:"Integrating GitHub Copilot and Microsoft Copilot for Azure into your DevOps processes",id:"integrating-github-copilot-and-microsoft-copilot-for-azure-into-your-devops-processes",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={a:"a",h2:"h2",p:"p",strong:"strong",...(0,i.a)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o,{children:[(0,a.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/deploy-to-production-at-scale"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,a.jsx)("meta",{property:"og:description",content:"In this blog series, we explore how exactly Microsoft developer tools can improve DevEx."}),(0,a.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,a.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/deploy-to-production-at-scale"}),(0,a.jsx)("meta",{name:"twitter:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,a.jsx)("meta",{name:"twitter:description",content:"In this blog series, we explore how exactly Microsoft developer tools can improve DevEx."}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,a.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/deploy-to-production-at-scale"})]}),"\n",(0,a.jsx)(t.p,{children:"Using CI/CD processes and monitoring systems for your app is like giving your software a constant health check. CI/CD automates the steps of building, testing, and deploying your app, making sure that new changes are safely integrated and shipped faster. Monitoring, on the other hand, keeps an eye on your app\u2019s performance, spotting issues before they turn into big problems. Together, they help ensure that your application stays reliable, scalable, and responsive to users\u2019 needs."}),"\n",(0,a.jsx)(t.p,{children:"In part 1 of this two-part blog series, we discussed hosting considerations for deploying our example content generation app to Azure using both Azure Kubernetes Service (AKS) and Azure App Service. Part 2 focuses on establishing DevOps practices that can help ensure that your app moves from development to production smoothly, reliably, and at scale. We also cover monitoring and performance management, by using Azure Monitor and Application Insights, and how you can use AI tools to help with these processes."}),"\n",(0,a.jsx)(t.p,{children:"\u202f"}),"\n",(0,a.jsx)(t.h2,{id:"setting-up-cicd",children:"Setting up CI/CD"}),"\n",(0,a.jsx)(t.p,{children:"You previously walked through building our example application, but now that you\u2019re readying the app for production at scale, you need to make sure that your development, testing, and deployment processes are such that your app will work reliably, every time, when you push it live. You need to integrate your app into a DevOps workflow that provides CI/CD capabilities."}),"\n",(0,a.jsxs)(t.p,{children:["The first step in this process is to set up\u202f",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Pipelines"})}),", a component of the ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/devops/user-guide/what-is-azure-devops?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure DevOps"})," platform. This involves creating both build and release pipelines for your app, which are essential for automating the deployment process. You use ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/devops/pipelines/get-started/pipelines-get-started?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"YAML pipelines"})," to help ensure that your configurations are version-controlled and reproducible, making it easier to manage changes and maintain consistency across different environments."]}),"\n",(0,a.jsxs)(t.p,{children:["Next, you turn your attention to\u202f",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://docs.github.com/en/actions",children:"GitHub Actions"})}),". Here, you set up workflows to build, test, and deploy your application. GitHub Actions allows you to easily integrate with Azure services, enabling smooth and efficient deployments. This integration helps ensure that your application is always up to date and running optimally."]}),"\n",(0,a.jsx)(t.p,{children:"\u202f"}),"\n",(0,a.jsx)(t.h2,{id:"monitoring-and-performance-management",children:"Monitoring and performance management"}),"\n",(0,a.jsxs)(t.p,{children:["After your CI/CD pipelines are in place, it\u2019s crucial to monitor the performance and health of your applications.\u202f",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/azure-monitor/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Monitor"})}),"\u202fcomes into play here. By setting up Azure Monitor, you can collect and analyze telemetry data from your applications and infrastructure. This data provides valuable insights into how your app is performing and helps you identify any potential issues before they become critical."]}),"\n",(0,a.jsxs)(t.p,{children:["In addition to Azure Monitor, you integrate\u202f",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Application Insights"})}),"\u202fwith your app. Application Insights is a powerful tool that allows you to monitor performance, detect anomalies, and diagnose issues. It also helps you track user behavior and application usage patterns, giving you a comprehensive view of how your application is being used and where improvements can be made."]}),"\n",(0,a.jsx)(t.p,{children:"\u202f"}),"\n",(0,a.jsx)(t.h2,{id:"scaling-devops-practices",children:"Scaling DevOps practices"}),"\n",(0,a.jsxs)(t.p,{children:["As your DevOps practices mature, you can start to focus on scaling them.\u202f",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/devops/deliver/what-is-infrastructure-as-code?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Infrastructure as code (IaC)"}),"\u202fis a key component of this process. By using tools like ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/developer/terraform/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Terraform"})," or ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/azure-resource-manager/management/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Resource Manager (ARM) templates"}),", you can manage your infrastructure in a version-controlled and reproducible manner. This approach helps ensure that your infrastructure is consistent and can be easily replicated across different environments."]}),"\n",(0,a.jsxs)(t.p,{children:["Automated testing is another critical aspect of scaling DevOps practices. Implementing automated tests, including unit tests, integration tests, and end-to-end tests, helps ensure that your application is reliable and performs as expected. Tools like ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/devops/pipelines/test/continuous-test-selenium?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Selenium"})," and ",(0,a.jsx)(t.a,{href:"https://learning.postman.com/docs/integrations/available-integrations/azure-devops/?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Postman"})," are invaluable for automated testing of web applications and APIs, allowing you to catch issues early in the development process."]}),"\n",(0,a.jsxs)(t.p,{children:["Security and compliance are also paramount. By using\u202f",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/governance/policy/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Policy"}),"\u202fand\u202f",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/defender-for-cloud/defender-for-cloud-introduction?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Microsoft Defender for Cloud"}),", you can enforce security and compliance policies across your infrastructure. Automating security scans and vulnerability assessments as part of your CI/CD pipeline helps you maintain a secure and compliant environment, reducing the risk of security breaches and helping to ensure that your application meets regulatory requirements."]}),"\n",(0,a.jsx)(t.h2,{id:"integrating-github-copilot-and-microsoft-copilot-for-azure-into-your-devops-processes",children:"Integrating GitHub Copilot and Microsoft Copilot for Azure into your DevOps processes"}),"\n",(0,a.jsxs)(t.p,{children:["Finally, put the power of AI to work to enhance your DevOps practices.\u202f",(0,a.jsx)(t.a,{href:"https://github.com/features/copilot",children:"GitHub Copilot"}),"\u202fassists you in writing CI/CD pipeline scripts and configurations, generating code snippets, and automating repetitive tasks. This AI-powered tool helps you work more efficiently and reduces the time spent on mundane tasks."]}),"\n",(0,a.jsxs)(t.p,{children:["Similarly,\u202f",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/copilot/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Copilot\u202fin Azure"})," streamlines infrastructure management and deployment pipelines. By integrating Copilot in Azure with Azure DevOps, you create CI/CD workflows that enhance your development process and help ensure that your applications are always running smoothly."]}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"In this blog post, we walked you through the major components you use to create a robust and efficient CI/CD pipeline, monitor and manage the performance of your applications, and use these DevOps practices to deploy a scalable production app to Azure. We also discussed how you can take advantage of new AI tools to enhance your development process."}),"\n",(0,a.jsx)(t.p,{children:"Applying these recommendations can help ensure that our example content generation app is always up to date, secure, and performing optimally."})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>s});var a=o(67294);const i={},n=a.createContext(i);function s(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);