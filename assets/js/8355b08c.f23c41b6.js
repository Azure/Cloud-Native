"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[331],{65236:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var n=t(85893),i=t(11151);const r={slug:"zero2hero-func-07",title:"\ud83d\ude80 | Monitor + Troubleshoot Apps",authors:["madhura"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","monitoring"],image:"./img/zero-to-hero-madhura.png",description:"When you\u2019re running a function app, you want to be prepared for any issues that may arise, from 4xx errors to trigger failures. Azure Functions offers built-in integration with Azure Application Insights to monitor function executions. Let's learn more.",tags:["serverless-september","zero-to-hero","azure-functions"]},s=void 0,a={permalink:"/Cloud-Native/blog/zero2hero-func-07",source:"@site/blog/zero-to-hero/2022-09-26-azurefunctions.md",title:"\ud83d\ude80 | Monitor + Troubleshoot Apps",description:"When you\u2019re running a function app, you want to be prepared for any issues that may arise, from 4xx errors to trigger failures. Azure Functions offers built-in integration with Azure Application Insights to monitor function executions. Let's learn more.",date:"2022-09-26T00:00:00.000Z",formattedDate:"September 26, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"zero-to-hero",permalink:"/Cloud-Native/blog/tags/zero-to-hero"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"}],readingTime:4.825,hasTruncateMarker:!1,authors:[{name:"Madhura Bharadwaj",title:"Product Manager, Azure Functions @Microsoft",url:"https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/360851#profile",imageURL:"https://techcommunity.microsoft.com/t5/image/serverpage/image-id/252689i712A569920A3BE85/image-dimensions/150x150/image-coordinates/0%2C74%2C472%2C546?v=v2",key:"madhura"}],frontMatter:{slug:"zero2hero-func-07",title:"\ud83d\ude80 | Monitor + Troubleshoot Apps",authors:["madhura"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","monitoring"],image:"./img/zero-to-hero-madhura.png",description:"When you\u2019re running a function app, you want to be prepared for any issues that may arise, from 4xx errors to trigger failures. Azure Functions offers built-in integration with Azure Application Insights to monitor function executions. Let's learn more.",tags:["serverless-september","zero-to-hero","azure-functions"]},unlisted:!1,prevItem:{title:"28. Serverless + Power Platforms",permalink:"/Cloud-Native/blog/28-where-am-i"},nextItem:{title:"25. Deploy Spring Boot App to ACA",permalink:"/Cloud-Native/blog/25-aca-java"}},c={image:t(8087).Z,authorsImageUrls:[void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Monitoring your Azure Functions:",id:"monitoring-your-azure-functions",level:2},{value:"Using Application Insights",id:"using-application-insights",level:3},{value:"Using Log Streaming",id:"using-log-streaming",level:3},{value:"Troubleshooting your Azure Functions:",id:"troubleshooting-your-azure-functions",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Head:r}=o;return r||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r,{children:[(0,n.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/zero2hero-func-07"}),(0,n.jsx)("meta",{name:"twitter:title",content:"#ZeroToHero: Monitoring and troubleshooting apps in Azure Functions "}),(0,n.jsx)("meta",{name:"twitter:description",content:"#ZeroToHero: Monitoring and troubleshooting apps in Azure Functions"}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/serverless-zero2hero.png"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.jsx)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/error-handling-with-apache-kafka-extension-for-azure-functions/ba-p/3628936"})]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsxs)(o.p,{children:["Welcome to ",(0,n.jsx)(o.code,{children:"Day 26"})," of #30DaysOfServerless!"]}),"\n",(0,n.jsxs)(o.p,{children:["Today, we have a special set of posts from our ",(0,n.jsx)(o.a,{href:"/serverless-september/ZeroToHero",children:"Zero To Hero \ud83d\ude80"})," initiative, featuring blog posts authored by our Product Engineering teams for #ServerlessSeptember. ",(0,n.jsxs)(o.em,{children:["Posts were originally published on the ",(0,n.jsx)(o.a,{href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/monitoring-and-troubleshooting-apps-in-azure-functions/ba-p/3638230?WT.mc_id=javascript-99907-cxa",children:"Apps on Azure"})," blog on Microsoft Tech Community."]})]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Monitoring your Azure Functions"}),"\n",(0,n.jsx)(o.li,{children:"Built-in log streaming"}),"\n",(0,n.jsx)(o.li,{children:"Live Metrics stream"}),"\n",(0,n.jsx)(o.li,{children:"Troubleshooting Azure Functions"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Serverless September slide featuring Madhura Bharadwaj presenting Monitoring &amp; Troubleshooting Apps in Azure Functions.",src:t(12321).Z+"",width:"1600",height:"672"})}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"monitoring-your-azure-functions",children:"Monitoring your Azure Functions:"}),"\n",(0,n.jsxs)(o.p,{children:["Azure Functions uses ",(0,n.jsx)(o.strong,{children:"Application Insights"})," to collect and analyze log data from individual function executions in your function app."]}),"\n",(0,n.jsx)(o.h3,{id:"using-application-insights",children:"Using Application Insights"}),"\n",(0,n.jsxs)(o.p,{children:["Application Insights collects ",(0,n.jsx)(o.em,{children:"log, performance, and error data"}),". By automatically detecting performance anomalies and featuring powerful analytics tools, you can more easily diagnose issues and better understand how your functions are used. These tools are designed to help you continuously improve performance and usability of your functions. You can even use Application Insights during local function app project development."]}),"\n",(0,n.jsxs)(o.p,{children:["Typically, you create an Application Insights instance when you create your function app. In this case, the instrumentation key required for the integration is already set as an application setting named ",(0,n.jsx)(o.code,{children:"APPINSIGHTS_INSTRUMENTATIONKEY"}),". With Application Insights integration enabled, telemetry data is sent to your connected Application Insights instance. This data includes logs generated by the Functions host, traces written from your functions code, and performance data. In addition to data from your functions and the Functions host, you can also collect data from the ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-functions/functions-monitoring#scale-controller-logs?WT.mc_id=javascript-99907-cxa",children:"Functions scale controller"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["By default, the data collected from your function app is stored in Application Insights. In the ",(0,n.jsx)(o.a,{href:"https://portal.azure.com/",children:"Azure portal"}),", Application Insights provides an extensive set of visualizations of your telemetry data. You can drill into error logs and query events and metrics. To learn more, including basic examples of how to view and query your collected data, see ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-functions/analyze-telemetry-data?WT.mc_id=javascript-99907-cxa",children:"Analyze Azure Functions telemetry in Application Insights"}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"using-log-streaming",children:"Using Log Streaming"}),"\n",(0,n.jsx)(o.p,{children:"In addition to this, you can have a smoother debugging experience through log streaming. There are two ways to view a stream of log files being generated by your function executions."}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Built-in log streaming"}),": the App Service platform lets you view a stream of your application log files. This is equivalent to the output seen when you debug your functions during ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-functions/functions-develop-local?WT.mc_id=javascript-99907-cxa",children:"local development"})," and when you use the Test tab in the portal. All log-based information is displayed. For more information, see ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/app-service/troubleshoot-diagnostic-logs#stream-logs?WT.mc_id=javascript-99907-cxa",children:"Stream logs"}),". This streaming method supports only a single instance and can't be used with an app running on Linux in a Consumption plan."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Live Metrics Stream"}),": when your function app is ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-functions/configure-monitoring#enable-application-insights-integration?WT.mc_id=javascript-99907-cxa",children:"connected to Application Insights"}),", you can view log data and other metrics in near real-time in the Azure portal using ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-monitor/app/live-stream?WT.mc_id=javascript-99907-cxa",children:"Live Metrics Stream"}),". Use this method when monitoring functions running on multiple-instances or on Linux in a Consumption plan. This method uses ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-functions/configure-monitoring#configure-sampling?WT.mc_id=javascript-99907-cxa",children:"sampled data"}),".\nLog streams can be viewed both in the portal and in most local development environments."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{title:"Monitoring Azure Functions",type:"info",children:(0,n.jsxs)(o.p,{children:["Learn how to ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-functions/configure-monitoring?source=recommendations&tabs=v2&WT.mc_id=javascript-99907-cxa",children:"configure monitoring for your Azure Functions"}),". See ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-functions/monitor-functions-reference?WT.mc_id=javascript-99907-cxa",children:"Monitoring Azure Functions data reference"})," for detailed information on the metrics and logs metrics created by Azure Functions."]})}),"\n",(0,n.jsxs)(o.p,{children:["In addition to this, Azure Functions uses ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-monitor/overview",children:"Azure Monitor"})," to ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-functions/monitor-functions?tabs=portal",children:"monitor the health of your function apps"}),". Azure Functions collects the same kinds of monitoring data as other Azure resources that are described in ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-monitor/essentials/monitor-azure-resource#monitoring-data-from-azure-resources",children:"Azure Monitor data collection"}),". See ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-functions/monitor-functions-reference",children:"Monitoring Azure Functions data reference"})," for detailed information on the metrics and logs metrics created by Azure Functions."]}),"\n",(0,n.jsx)(o.h2,{id:"troubleshooting-your-azure-functions",children:"Troubleshooting your Azure Functions:"}),"\n",(0,n.jsx)(o.p,{children:"When you do run into issues with your function app, Azure Functions diagnostics points out what\u2019s wrong. It guides you to the right information to troubleshoot and resolve the issue more easily and quickly."}),"\n",(0,n.jsx)(o.p,{children:"Let\u2019s explore how to use Azure Functions diagnostics to diagnose and solve common function app issues."}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Navigate to your function app ",(0,n.jsx)(o.a,{href:"https://portal.azure.com/?WT.mc_id=javascript-99907-cxa",children:"in the Azure portal"}),"."]}),"\n",(0,n.jsx)(o.li,{children:"Select Diagnose and solve problems to open Azure Functions diagnostics."}),"\n",(0,n.jsx)(o.li,{children:"Once you\u2019re here, there are multiple ways to retrieve the information you\u2019re looking for. Choose a category that best describes the issue of your function app by using the keywords in the homepage tile. You can also type a keyword that best describes your issue in the search bar. There\u2019s also a section at the bottom of the page that will directly take you to some of the more popular troubleshooting tools. For example, you could type execution to see a list of diagnostic reports related to your function app execution and open them directly from the homepage."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Monitoring and troubleshooting apps in Azure Functions",src:t(62007).Z+"",width:"777",height:"361"})}),"\n",(0,n.jsxs)(o.ol,{start:"4",children:["\n",(0,n.jsx)(o.li,{children:"For example, click on the Function App Down or Reporting Errors link under Popular troubleshooting tools section. You will find detailed analysis, insights and next steps for the issues that were detected. On the left you\u2019ll see a list of detectors. Click on them to explore more, or if there\u2019s a particular keyword you want to look for, type it Into the search bar on the top."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Monitoring and troubleshooting apps in Azure Functions",src:t(48933).Z+"",width:"788",height:"390"})}),"\n",(0,n.jsxs)(o.admonition,{title:"TROUBLESHOOTING TIP",type:"tip",children:[(0,n.jsxs)(o.p,{children:["Here are some general troubleshooting tips that you can follow if you find your Function App throwing ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-functions/functions-recover-storage-account?WT.mc_id=javascript-99907-cxa",children:"Azure Functions Runtime unreachable"})," error."]}),(0,n.jsxs)(o.p,{children:["Also be sure to check out the recommended best practices to ensure your Azure Functions are highly reliable. ",(0,n.jsx)(o.a,{href:"https://learn.microsoft.com/azure/azure-functions/functions-best-practices?source=recommendations&tabs=csharp&WT.mc_id=javascript-99907-cxa",children:"This article"})," details some best practices for designing and deploying efficient function apps that remain healthy and perform well in a cloud-based environment."]})]}),"\n",(0,n.jsx)(o.p,{children:"Bonus tip:"})]})}function h(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8087:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/zero-to-hero-madhura-9186d0cba8bf8974d76dfdeb73cd5f50.png"},62007:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/madhura-functions-1-cf245312022dd74d8e0c0325d6cddc20.png"},48933:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/madhura-functions-2-9e52c0d12e76850ce3bb4c1d9c8d970a.png"},12321:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/zero-to-hero-madhura-9186d0cba8bf8974d76dfdeb73cd5f50.png"},11151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>s});var n=t(67294);const i={},r=n.createContext(i);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);