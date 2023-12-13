"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61859],{59176:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=o(85893),r=o(11151);const s={slug:"zero2hero-aca-06",title:"\ud83d\ude80 | Observability with ACA",authors:["mikemorton"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","containerapps","serverless","concepts"],image:"./img/banner.png",description:"Azure Container Apps provides several observability features to help you debug and diagnose your apps. There are both Azure portal and CLI options you can use to help understand the health of your apps and help identify when issues arise. Let's explore the options.",tags:["serverless-september","zero-to-hero","azure-container-apps","dapr"]},i=void 0,a={permalink:"/Cloud-Native/blog/zero2hero-aca-06",source:"@site/blog/zero-to-hero/2022-09-19-containerapps.md",title:"\ud83d\ude80 | Observability with ACA",description:"Azure Container Apps provides several observability features to help you debug and diagnose your apps. There are both Azure portal and CLI options you can use to help understand the health of your apps and help identify when issues arise. Let's explore the options.",date:"2022-09-19T00:00:00.000Z",formattedDate:"September 19, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"zero-to-hero",permalink:"/Cloud-Native/blog/tags/zero-to-hero"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"}],readingTime:4.83,hasTruncateMarker:!1,authors:[{name:"Mike Morton",title:"Principal PM, Container Apps @Microsoft",url:"https://github.com/BigMorty",imageURL:"https://github.com/BigMorty.png",key:"mikemorton"}],frontMatter:{slug:"zero2hero-aca-06",title:"\ud83d\ude80 | Observability with ACA",authors:["mikemorton"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","containerapps","serverless","concepts"],image:"./img/banner.png",description:"Azure Container Apps provides several observability features to help you debug and diagnose your apps. There are both Azure portal and CLI options you can use to help understand the health of your apps and help identify when issues arise. Let's explore the options.",tags:["serverless-september","zero-to-hero","azure-container-apps","dapr"]},unlisted:!1,prevItem:{title:"\ud83d\ude80 | Error Handling w/ Apache Kafka",permalink:"/Cloud-Native/blog/zero2hero-func-05"},nextItem:{title:"18. Logic Apps + Computer Vision",permalink:"/Cloud-Native/blog/18-cloudmail"}},l={image:o(65045).Z,authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Log Streaming",id:"log-streaming",level:2},{value:"Console Connect",id:"console-connect",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Log Analytics",id:"log-analytics",level:2},{value:"Alerts",id:"alerts",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s,{children:[(0,n.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/zero2hero-aca-06"}),(0,n.jsx)("meta",{name:"twitter:title",content:"#ZeroToHero: Observability with Azure Container Apps"}),(0,n.jsx)("meta",{name:"twitter:description",content:"#ZeroToHero: Observability with Azure Container Apps"}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/serverless-zero2hero.png"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.jsx)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/observability-with-azure-container-apps/ba-p/3627909"})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["Welcome to ",(0,n.jsx)(t.code,{children:"Day 19"})," of #30DaysOfServerless!"]}),"\n",(0,n.jsxs)(t.p,{children:["Today, we have a special set of posts from our ",(0,n.jsx)(t.a,{href:"/serverless-september/ZeroToHero",children:"Zero To Hero \ud83d\ude80"})," initiative, featuring blog posts authored by our Product Engineering teams for #ServerlessSeptember. ",(0,n.jsxs)(t.em,{children:["Posts were originally published on the ",(0,n.jsx)(t.a,{href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/observability-with-azure-container-apps/ba-p/3627909?WT.mc_id=javascript-99907-cxa",children:"Apps on Azure"})," blog on Microsoft Tech Community."]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Log Streaming - in Azure Portal"}),"\n",(0,n.jsx)(t.li,{children:"Console Connect - in Azure Portal"}),"\n",(0,n.jsx)(t.li,{children:"Metrics - using Azure Monitor"}),"\n",(0,n.jsx)(t.li,{children:"Log Analytics - using Azure Monitor"}),"\n",(0,n.jsx)(t.li,{children:"Metric Alerts and Log Alerts - using Azure Monitor"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(57120).Z+"",width:"1600",height:"672"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["In past weeks, ",(0,n.jsx)(t.a,{href:"https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/296868",children:"@kendallroden"})," wrote about ",(0,n.jsx)(t.a,{href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/go-cloud-native-with-azure-container-apps/ba-p/3616407",children:"what it means to be Cloud-Native"})," and ",(0,n.jsx)(t.a,{href:"https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/236816",children:"@Anthony Chu"})," the various ways to ",(0,n.jsx)(t.a,{href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/journey-to-the-cloud-with-azure-container-apps/ba-p/3622609",children:"get your apps running on Azure Container Apps"}),". Today, we will talk about the ",(0,n.jsx)(t.strong,{children:"observability tools"})," you can use to observe, debug, and diagnose your Azure Container Apps."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Azure Container Apps"})," provides several observability features to help you debug and diagnose your apps. There are both Azure portal and CLI options you can use to help understand the health of your apps and help identify when issues arise."]}),"\n",(0,n.jsx)(t.p,{children:"While these features are helpful throughout your container app\u2019s lifetime, there are two that are especially helpful.  Log streaming and console connect can be a huge help in the initial stages when issues often rear their ugly head. Let's dig into both of these a little."}),"\n",(0,n.jsx)(t.h2,{id:"log-streaming",children:"Log Streaming"}),"\n",(0,n.jsxs)(t.p,{children:["Log streaming allows you to use the Azure portal to view the streaming logs from your app. You\u2019ll see the logs written from the app to the container\u2019s console (stderr and stdout). If your app is running multiple revisions, you can choose from which revision to view logs. You can also select a specific replica if your app is configured to scale. Lastly, you can choose from which container to view the log output. This is useful when you are running a custom or Dapr sidecar container.\n",(0,n.jsx)(t.img,{alt:"view streaming logs",src:o(88740).Z+"",width:"549",height:"334"})]}),"\n",(0,n.jsx)(t.p,{children:"Here\u2019s an example CLI command to view the logs of a container app."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"az containerapp logs show -n MyContainerapp -g MyResourceGroup\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can find more information about the different options in our ",(0,n.jsx)(t.a,{href:"https://aka.ms/container-apps/logs-cli",children:"CLI docs"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"console-connect",children:"Console Connect"}),"\n",(0,n.jsx)(t.p,{children:"In the Azure portal, you can connect to the console of a container in your app. Like log streaming, you can select the revision, replica, and container if applicable. After connecting to the console of the container, you can execute shell commands and utilities that you have installed in your container.  You can view files and their contents, monitor processes, and perform other debugging tasks."}),"\n",(0,n.jsx)(t.p,{children:"This can be great for checking configuration files or even modifying a setting or library your container is using. Of course, updating a container in this fashion is not something you should do to a production app, but tweaking and re-testing an app in a non-production environment can speed up development."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(38276).Z+"",width:"550",height:"336"})}),"\n",(0,n.jsx)(t.p,{children:"Here\u2019s an example CLI command to connect to the console of a container app."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"az containerapp exec -n MyContainerapp -g MyResourceGroup\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can find more information about the different options in our ",(0,n.jsx)(t.a,{href:"https://aka.ms/container-apps/exec-cli",children:"CLI docs"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"metrics",children:"Metrics"}),"\n",(0,n.jsx)(t.p,{children:"Azure Monitor collects metric data from your container app at regular intervals to help you gain insights into the performance and health of your container app. Container apps provide these metrics:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"CPU usage"}),"\n",(0,n.jsx)(t.li,{children:"Memory working set bytes"}),"\n",(0,n.jsx)(t.li,{children:"Network in bytes"}),"\n",(0,n.jsx)(t.li,{children:"Network out bytes"}),"\n",(0,n.jsx)(t.li,{children:"Requests"}),"\n",(0,n.jsx)(t.li,{children:"Replica count"}),"\n",(0,n.jsx)(t.li,{children:"Replica restart count"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Here you can see the metrics explorer showing the replica count for an app as it scaled from one replica to fifteen, and then back down to one."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(18427).Z+"",width:"550",height:"319"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also retrieve metric data through ",(0,n.jsx)(t.a,{href:"https://aka.ms/container-apps/azure-monitor-metrics-cli",children:"the Azure CLI"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"log-analytics",children:"Log Analytics"}),"\n",(0,n.jsx)(t.p,{children:"Azure Monitor Log Analytics is great for viewing your historical logs emitted from your container apps. There are two custom tables of interest, the ContainerAppConsoleLogs_CL which contains all the log messages written by your app (stdout and stderr), and the ContainerAppSystemLogs_CL which contain the system messages from the Azure Container Apps service."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(29181).Z+"",width:"550",height:"345"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also query Log Analytics through the ",(0,n.jsx)(t.a,{href:"https://aka.ms/container-apps/azure-monitor-logs-cli",children:"Azure CLI"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"alerts",children:"Alerts"}),"\n",(0,n.jsx)(t.p,{children:"Azure Monitor alerts notify you so that you can respond quickly to critical issues. There are two types of alerts that you can define:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-monitor/alerts/alerts-types#metric-alerts",children:"Metric alerts"})," based on Azure Monitor metric data"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-monitor/alerts/alerts-types#log-alerts",children:"Log alerts"})," based on Azure Monitor Log Analytics data"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can create alert rules from metric charts in the metric explorer and from queries in Log Analytics. You can also define and manage alerts from the ",(0,n.jsx)(t.strong,{children:"Monitor|Alerts"})," page."]}),"\n",(0,n.jsx)(t.p,{children:"Here is what creating an alert looks like in the Azure portal. In this case we are setting an alert rule from the metric explorer to trigger an alert if the replica restart count for a specific container app is greater than two within the last fifteen minutes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(14190).Z+"",width:"550",height:"302"})}),"\n",(0,n.jsxs)(t.p,{children:["To learn more about alerts, refer to ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-monitor/alerts/alerts-overview",children:"Overview of alerts in Microsoft Azure"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"In this article, we looked at the several ways to observe, debug, and diagnose your Azure Container Apps. As you can see there are rich portal tools and a complete set of CLI commands to use. All the tools are helpful throughout the lifecycle of your app, be sure to take advantage of them when having an issue and/or to prevent issues."}),"\n",(0,n.jsxs)(t.p,{children:["To learn more, visit ",(0,n.jsx)(t.a,{href:"https://aka.ms/containerapps",children:"Azure Container Apps | Microsoft Azure"})," today!"]}),"\n",(0,n.jsxs)(t.admonition,{title:"ASK THE EXPERT: LIVE Q&A",type:"info",children:[(0,n.jsxs)(t.p,{children:["The Azure Container Apps team will answer questions live on ",(0,n.jsx)(t.strong,{children:"September 29"}),"."]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://reactor.microsoft.com/reactor/events/17004/?WT.mc_id=javascript-99907-ninarasi",children:"Sign up to attend"})," for live Q&A with the team"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/Azure/Cloud-Native/issues/new?assignees=&labels=ask+the+expert&template=---ask-the-expert-.md&title=%5BAsk+The+Expert%5D++",children:"submit your questions"})," ahead of time, for prioritization."]}),"\n"]})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},65045:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/banner-89c6e86cfbf02935e85318d7a3d3b4ff.png"},57120:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/mike-aca-observability-fdc8af07553b1411298f719b22ceca15.png"},88740:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/mike-observability-1-f28ac55d716d668659b11621cee6119c.png"},38276:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/mike-observability-2-2e21617739406a5d9b090b9580b95dd3.png"},18427:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/mike-observability-3-fcd3dd1c9bc4cc4ab8df18c1321502a8.png"},29181:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/mike-observability-4-d284a4303e3c243917edb8eb2685f1ac.png"},14190:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/mike-observability-5-b64a5cdcac00d2090c8efdd42861e339.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var n=o(67294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);