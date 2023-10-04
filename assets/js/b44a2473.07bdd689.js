"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57832],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),k=n,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||o;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={slug:"20-events-graph",title:"20. Integrate with Microsoft Graph",authors:["ayca"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"build a seamsless onboarding experience to new employees joining a company with the power of Microsoft Graph.",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices","microsoft-graph","logic-apps","microsoft-365","event-hubs"]},i=void 0,l={permalink:"/Cloud-Native/blog/20-events-graph",source:"@site/blog/2022-09-20/index.md",title:"20. Integrate with Microsoft Graph",description:"build a seamsless onboarding experience to new employees joining a company with the power of Microsoft Graph.",date:"2022-09-20T00:00:00.000Z",formattedDate:"September 20, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"},{label:"microservices",permalink:"/Cloud-Native/blog/tags/microservices"},{label:"microsoft-graph",permalink:"/Cloud-Native/blog/tags/microsoft-graph"},{label:"logic-apps",permalink:"/Cloud-Native/blog/tags/logic-apps"},{label:"microsoft-365",permalink:"/Cloud-Native/blog/tags/microsoft-365"},{label:"event-hubs",permalink:"/Cloud-Native/blog/tags/event-hubs"}],readingTime:9.87,hasTruncateMarker:!1,authors:[{name:"Ayca Bas",title:"Senior Cloud Advocate @Microsoft",url:"https://github.com/aycabas",imageURL:"https://github.com/aycabas.png",key:"ayca"}],frontMatter:{slug:"20-events-graph",title:"20. Integrate with Microsoft Graph",authors:["ayca"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"build a seamsless onboarding experience to new employees joining a company with the power of Microsoft Graph.",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices","microsoft-graph","logic-apps","microsoft-365","event-hubs"]},prevItem:{title:"21. CloudEvents with Event Grid",permalink:"/Cloud-Native/blog/21-cloudevents-via-event-grid"},nextItem:{title:"\ud83d\ude80 | Error Handling w/ Apache Kafka",permalink:"/Cloud-Native/blog/zero2hero-func-05"}},s={image:a(4196).Z,authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"\u2728 The Power of Microsoft Graph",id:"-the-power-of-microsoft-graph",level:2},{value:"\ud83d\udd87\ufe0f Microsoft Graph with Event Hubs",id:"\ufe0f-microsoft-graph-with-event-hubs",level:2},{value:"Setup Azure Event Hubs + Key Vault.",id:"setup-azure-event-hubs--key-vault",level:2},{value:"1\ufe0f\u20e3 Create Azure Event Hubs",id:"1\ufe0f\u20e3-create-azure-event-hubs",level:3},{value:"2\ufe0f\u20e3 Create Azure Key Vault",id:"2\ufe0f\u20e3-create-azure-key-vault",level:3},{value:"Subscribe for Logic Apps change notifications",id:"subscribe-for-logic-apps-change-notifications",level:2},{value:"1\ufe0f\u20e3 Create an app in Azure Active Directory",id:"1\ufe0f\u20e3-create-an-app-in-azure-active-directory",level:3},{value:"2\ufe0f\u20e3 Create subscription with Azure Logic Apps",id:"2\ufe0f\u20e3-create-subscription-with-azure-logic-apps",level:3},{value:"Create Onboarding workflow in Logic Apps",id:"create-onboarding-workflow-in-logic-apps",level:2},{value:"\ud83d\ude80 Debug your onboarding experience",id:"-debug-your-onboarding-experience",level:2},{value:"\ud83d\udcda Resources",id:"-resources",level:2}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/20-events-graph"}),(0,n.kt)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Integrate with Microsoft Graph"}),(0,n.kt)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Integrate with Microsoft Graph"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://aycabas.com/2022/09/28/build-seamless-automations-to-boost-productivity-with-microsoft-graph-event-hubs-and-logic-apps/"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Welcome to ",(0,n.kt)("inlineCode",{parentName:"p"},"Day 20")," of #30DaysOfServerless!"),(0,n.kt)("p",null,"Every day millions of people spend their precious time in productivity tools. What if you use data and intelligence behind the Microsoft applications (Microsoft Teams, Outlook, and many other Office apps) to build seamless automations and custom apps to boost productivity? "),(0,n.kt)("p",null,"In this post, we'll learn how to build a seamless onboarding experience for new employees joining a company with the power of Microsoft Graph, integrated with Event Hubs and Logic Apps! "),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2728 The power of Microsoft Graph"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd87\ufe0f How do Microsoft Graph and Event Hubs work together?"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udee0 Let's Build an Onboarding Workflow!",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1\ufe0f\u20e3 Setup Azure Event Hubs + Key Vault"),(0,n.kt)("li",{parentName:"ul"},"2\ufe0f\u20e3 Subscribe to ",(0,n.kt)("inlineCode",{parentName:"li"},"users"),", receive change notifications from Logic Apps"),(0,n.kt)("li",{parentName:"ul"},"3\ufe0f\u20e3 Create Onboarding workflow in the Logic Apps"))),(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude80 Debug: Your onboarding experience"),(0,n.kt)("li",{parentName:"ul"},"\u270b Exercise: Try this tutorial out yourself!"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcda Resources: For Self-Study")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4196).Z,width:"1600",height:"672"})),(0,n.kt)("hr",null),(0,n.kt)("admonition",{title:"PRE-REQUISITES (Recommended)",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/m365developers"},"Microsoft 365 Developer Program account")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/free/"},"Microsoft Azure Subscription")))),(0,n.kt)("h2",{id:"-the-power-of-microsoft-graph"},"\u2728 The Power of Microsoft Graph"),(0,n.kt)("p",null,"Microsoft Graph is the gateway to data and intelligence in Microsoft 365 platform. Microsoft Graph exploses Rest APIs and client libraries to access data across Microsoft 365 core services such as Calendar, Teams, To Do, Outlook, People, Planner, OneDrive, OneNote and more."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Overview of Microsoft Graph",src:a(60159).Z,width:"1280",height:"720"})),(0,n.kt)("p",null,"You can build custom experiences by using Microsoft Graph such as automating the onboarding process for new employees. When new employees are created in the Azure Active Directory, they will be automatically added in the Onboarding team on Microsoft Teams. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Solution architecture",src:a(40190).Z,width:"1280",height:"720"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\ufe0f-microsoft-graph-with-event-hubs"},"\ud83d\udd87\ufe0f Microsoft Graph with Event Hubs"),(0,n.kt)("p",null,"Microsoft Graph uses a webhook mechanism to track changes in resources and deliver change notifications to the clients. For example, with Microsoft Graph Change Notifications, you can receive change notifications when:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a new task is added in the to-do list"),(0,n.kt)("li",{parentName:"ul"},"a user changes the presence status from busy to available"),(0,n.kt)("li",{parentName:"ul"},"an event is deleted/cancelled from the calendar")),(0,n.kt)("p",null,"If you'd like to track a large set of resources at a high frequency, use Azure Events Hubs instead of traditional webhooks to receive change notifications. Azure Event Hubs is a popular real-time events ingestion and distribution service built for scale."),(0,n.kt)("admonition",{title:"EVENT GRID - PARTNER EVENTS",type:"info"},(0,n.kt)("blockquote",{parentName:"admonition"},(0,n.kt)("p",{parentName:"blockquote"},"Microsoft Graph Change Notifications can be also received by using ",(0,n.kt)("strong",{parentName:"p"},"Azure Event Grid")," -- currently available for Microsoft Partners! Read the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/event-grid/partner-events-overview"},"Partner Events Overview")," documentation for details."))),(0,n.kt)("h2",{id:"setup-azure-event-hubs--key-vault"},"Setup Azure Event Hubs + Key Vault."),(0,n.kt)("p",null,"To get Microsoft Graph Change Notifications delivered to Azure Event Hubs, we'll have to setup Azure Event Hubs and Azure Key Vault. We'll use Azure Key Vault to access to Event Hubs connection string. "),(0,n.kt)("h3",{id:"1\ufe0f\u20e3-create-azure-event-hubs"},"1\ufe0f\u20e3 Create Azure Event Hubs"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"Azure Portal")," and select ",(0,n.kt)("strong",{parentName:"li"},"Create a resource"),", type ",(0,n.kt)("strong",{parentName:"li"},"Event Hubs")," and select click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill in the Event Hubs namespace creation details, and then click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Go to the newly created Event Hubs namespace page, select ",(0,n.kt)("strong",{parentName:"li"},"Event Hubs")," tab from the left pane and ",(0,n.kt)("strong",{parentName:"li"},"+ Event Hub"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Name your Event Hub as ",(0,n.kt)("em",{parentName:"li"},"Event Hub")),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."))),(0,n.kt)("li",{parentName:"ol"},"Click the name of the Event Hub, and then select ",(0,n.kt)("strong",{parentName:"li"},"Shared access policies")," and ",(0,n.kt)("strong",{parentName:"li"},"+ Add")," to add a new policy:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Give a name to the policy"),(0,n.kt)("li",{parentName:"ul"},"Check ",(0,n.kt)("strong",{parentName:"li"},"Send")," and ",(0,n.kt)("strong",{parentName:"li"},"Listen")),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."))),(0,n.kt)("li",{parentName:"ol"},"After the policy has been created, click the name of the policy to open the details panel, and then copy the ",(0,n.kt)("strong",{parentName:"li"},"Connection string-primary key")," value. Write it down; you'll need it for the next step."),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Consumer groups")," tab in the left pane and select ",(0,n.kt)("strong",{parentName:"li"},"+ Consumer group"),", give a name for your consumer group as ",(0,n.kt)("em",{parentName:"li"},"onboarding")," and select ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("h3",{id:"2\ufe0f\u20e3-create-azure-key-vault"},"2\ufe0f\u20e3 Create Azure Key Vault"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"Azure Portal")," and select ",(0,n.kt)("strong",{parentName:"li"},"Create a resource"),", type ",(0,n.kt)("strong",{parentName:"li"},"Key Vault")," and select ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Fill in the Key Vault creation details, and then click ",(0,n.kt)("strong",{parentName:"li"},"Review + Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Go to newly created Key Vault and select ",(0,n.kt)("strong",{parentName:"li"},"Secrets")," tab from the left pane and click ",(0,n.kt)("strong",{parentName:"li"},"+ Generate/Import"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Give a name to the secret"),(0,n.kt)("li",{parentName:"ul"},"For the value, paste in the connection string you generated at the Event Hubs step"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create")),(0,n.kt)("li",{parentName:"ul"},"Copy the ",(0,n.kt)("strong",{parentName:"li"},"name of the secret"),"."))),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Access Policies")," from the left pane and ",(0,n.kt)("strong",{parentName:"li"},"+ Add Access Policy"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("strong",{parentName:"li"},"Secret permissions"),", select ",(0,n.kt)("strong",{parentName:"li"},"Get")," "),(0,n.kt)("li",{parentName:"ul"},"For Principal, select ",(0,n.kt)("strong",{parentName:"li"},"Microsoft Graph Change Tracking")),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add"),"."))),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Overview")," tab from the left pane and copy the ",(0,n.kt)("strong",{parentName:"li"},"Vault URI"),".")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"subscribe-for-logic-apps-change-notifications"},"Subscribe for Logic Apps change notifications"),(0,n.kt)("p",null,"To start receiving Microsoft Graph Change Notifications, we'll need to create subscription to the resource that we'd like to track - here, 'users'. We'll use Azure Logic Apps to create subscription. "),(0,n.kt)("p",null,"To create subscription for Microsoft Graph Change Notifications, we'll need to make a http post request to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://graph.microsoft.com/v1.0/subscriptions"),". Microsoft Graph requires Azure Active Directory authentication make API calls. First, we'll need to register an app to Azure Active Directory, and then we will make the Microsoft Graph Subscription API call with Azure Logic Apps."),(0,n.kt)("h3",{id:"1\ufe0f\u20e3-create-an-app-in-azure-active-directory"},"1\ufe0f\u20e3 Create an app in Azure Active Directory"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"Azure Portal"),", go to ",(0,n.kt)("strong",{parentName:"li"},"Azure Active Directory")," and select ",(0,n.kt)("strong",{parentName:"li"},"App registrations")," from the left pane and select ",(0,n.kt)("strong",{parentName:"li"},"+ New registration"),". Fill in the details for the new App registration form as below:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Name: Graph Subscription Flow Auth"),(0,n.kt)("li",{parentName:"ul"},"Supported account types: ",(0,n.kt)("em",{parentName:"li"},"Accounts in any organizational directory (Any Azure AD directory - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)")),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Register"),"."))),(0,n.kt)("li",{parentName:"ol"},"Go to newly registered app in Azure Active Directory, select ",(0,n.kt)("strong",{parentName:"li"},"API permissions"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"+ Add a permission")," and ",(0,n.kt)("strong",{parentName:"li"},"Microsoft Graph")),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Application permissions")," and add ",(0,n.kt)("inlineCode",{parentName:"li"},"User.Read.All")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Directory.Read.All"),"."),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Grant admin consent for ",(0,n.kt)("em",{parentName:"strong"},"the organization"))))),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Certificates & secrets")," tab from the left pane, select ",(0,n.kt)("strong",{parentName:"li"},"+ New client secret"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Choose desired expiry duration "),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Add")," "),(0,n.kt)("li",{parentName:"ul"},"Copy the ",(0,n.kt)("em",{parentName:"li"},"value of the secret"),"."))),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Overview")," from the left pane, copy ",(0,n.kt)("em",{parentName:"li"},"Application (client) ID")," and ",(0,n.kt)("em",{parentName:"li"},"Directory (tenant) ID"),".")),(0,n.kt)("h3",{id:"2\ufe0f\u20e3-create-subscription-with-azure-logic-apps"},"2\ufe0f\u20e3 Create subscription with Azure Logic Apps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure Portal")," and select ",(0,n.kt)("strong",{parentName:"p"},"Create a resource"),", type ",(0,n.kt)("strong",{parentName:"p"},"Logic apps")," and select click ",(0,n.kt)("strong",{parentName:"p"},"Create"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fill in the Logic Apps creation details, and then click ",(0,n.kt)("strong",{parentName:"p"},"Create"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the newly created Logic Apps page, select ",(0,n.kt)("strong",{parentName:"p"},"Workflows")," tab from the left pane and select ",(0,n.kt)("strong",{parentName:"p"},"+ Add"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Give a name to the new workflow as ",(0,n.kt)("em",{parentName:"li"},"graph-subscription-flow")),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Stateful")," as a state type"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("em",{parentName:"p"},"graph-subscription-flow"),", and then select ",(0,n.kt)("strong",{parentName:"p"},"Designer")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Choose an operation section, search for ",(0,n.kt)("strong",{parentName:"p"},"Schedule")," and select ",(0,n.kt)("strong",{parentName:"p"},"Recurrence")," as a trigger. Fill in the parameters as below:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"61")),(0,n.kt)("li",{parentName:"ul"},"Frequency: ",(0,n.kt)("inlineCode",{parentName:"li"},"Minute")),(0,n.kt)("li",{parentName:"ul"},"Time zone: ",(0,n.kt)("em",{parentName:"li"},"Select your own time zone")),(0,n.kt)("li",{parentName:"ul"},"Start time: ",(0,n.kt)("em",{parentName:"li"},"Set a start time")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"+")," button in the flow and select ",(0,n.kt)("strong",{parentName:"p"},"add an action"),". Search for ",(0,n.kt)("strong",{parentName:"p"},"HTTP")," and select ",(0,n.kt)("strong",{parentName:"p"},"HTTP")," as an action. Fill in the parameters as below: "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Method: ",(0,n.kt)("inlineCode",{parentName:"li"},"POST")),(0,n.kt)("li",{parentName:"ul"},"URI: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://graph.microsoft.com/v1.0/subscriptions")),(0,n.kt)("li",{parentName:"ul"},"Headers:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Key: ",(0,n.kt)("inlineCode",{parentName:"li"},"Content-type")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"application/json")))),(0,n.kt)("li",{parentName:"ul"},"Body:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n"changeType": "created, updated",\n"clientState": "secretClientValue",\n"expirationDateTime": "@{addHours(utcNow(), 1)}",\n"notificationUrl": "EventHub:https://<YOUR-VAULT-URI>/secrets/<YOUR-KEY-VAULT-SECRET-NAME>?tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47",\n"resource": "users"\n}\n')),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"In ",(0,n.kt)("inlineCode",{parentName:"p"},"notificationUrl"),", make sure to replace ",(0,n.kt)("inlineCode",{parentName:"p"},"<YOUR-VAULT-URI>")," with the vault uri and ",(0,n.kt)("inlineCode",{parentName:"p"},"<YOUR-KEY-VAULT-SECRET-NAME>")," with the secret name that you copied from the Key Vault.")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"In ",(0,n.kt)("inlineCode",{parentName:"p"},"resource"),", define the resource type you'd like to track changes. For our example, we will track changes for ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," resource."),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Authentication:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Authentication type: ",(0,n.kt)("inlineCode",{parentName:"li"},"Active Directory OAuth")),(0,n.kt)("li",{parentName:"ul"},"Authority: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://login.microsoft.com")),(0,n.kt)("li",{parentName:"ul"},"Tenant: ",(0,n.kt)("em",{parentName:"li"},"Directory (tenant) ID")," copied from AAD app"),(0,n.kt)("li",{parentName:"ul"},"Audience: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://graph.microsoft.com")),(0,n.kt)("li",{parentName:"ul"},"Client ID: ",(0,n.kt)("em",{parentName:"li"},"Application (client) ID")," copied from AAD app"),(0,n.kt)("li",{parentName:"ul"},"Credential Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"Secret")),(0,n.kt)("li",{parentName:"ul"},"Secret: ",(0,n.kt)("em",{parentName:"li"},"value of the secret")," copied from AAD app")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Save")," and run your workflow from the ",(0,n.kt)("strong",{parentName:"p"},"Overview")," tab."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Check your subscription in Graph Explorer:")," If you'd like to make sure that your subscription is created successfully by Logic Apps, you can go to ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/ge"},"Graph Explorer"),", login with your Microsoft 365 account and make ",(0,n.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://graph.microsoft.com/v1.0/subscriptions"),". Your subscription should appear in the response after it's created successfully.")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Subscription workflow success",src:a(49694).Z,width:"2256",height:"1202"})),(0,n.kt)("p",null,"After subscription is created successfully by Logic Apps, Azure Event Hubs will receive notifications whenever there is a new user created in Azure Active Directory."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"create-onboarding-workflow-in-logic-apps"},"Create Onboarding workflow in Logic Apps"),(0,n.kt)("p",null,"We'll create a second workflow in the Logic Apps to receive change notifications from Event Hubs when there is a new user created in the Azure Active Directory and add new user in Onboarding team on Microsoft Teams."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the Logic Apps you created in the previous steps, select ",(0,n.kt)("strong",{parentName:"li"},"Workflows")," tab and create a new workflow by selecting ",(0,n.kt)("strong",{parentName:"li"},"+ Add"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Give a name to the new workflow as ",(0,n.kt)("em",{parentName:"li"},"teams-onboarding-flow")),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Stateful")," as a state type"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."))),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("em",{parentName:"li"},"teams-onboarding-flow"),", and then select ",(0,n.kt)("strong",{parentName:"li"},"Designer")," tab."),(0,n.kt)("li",{parentName:"ol"},"In the Choose an operation section, search for ",(0,n.kt)("strong",{parentName:"li"},"Event Hub"),", select ",(0,n.kt)("strong",{parentName:"li"},"When events are available in Event Hub")," as a trigger. Setup Event Hub connection as below:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Create Connection:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Connection name: ",(0,n.kt)("inlineCode",{parentName:"li"},"Connection")),(0,n.kt)("li",{parentName:"ul"},"Authentication Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"Connection String")),(0,n.kt)("li",{parentName:"ul"},"Connection String: Go to ",(0,n.kt)("strong",{parentName:"li"},"Event Hubs > Shared Access Policies > RootManageSharedAccessKey")," and copy ",(0,n.kt)("em",{parentName:"li"},"Connection string\u2013primary key")),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."))),(0,n.kt)("li",{parentName:"ul"},"Parameters:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Event Hub Name: ",(0,n.kt)("inlineCode",{parentName:"li"},"Event Hub")),(0,n.kt)("li",{parentName:"ul"},"Consumer Group Name: ",(0,n.kt)("inlineCode",{parentName:"li"},"onboarding")))))),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"+")," in the flow and ",(0,n.kt)("strong",{parentName:"li"},"add an action"),", search for ",(0,n.kt)("strong",{parentName:"li"},"Control")," and add ",(0,n.kt)("strong",{parentName:"li"},"For each")," as an action. Fill in For each action as below:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Select output from previous steps: ",(0,n.kt)("inlineCode",{parentName:"li"},"Events")))),(0,n.kt)("li",{parentName:"ol"},"Inside For each, select ",(0,n.kt)("strong",{parentName:"li"},"+")," in the flow and ",(0,n.kt)("strong",{parentName:"li"},"add an action"),", search for ",(0,n.kt)("strong",{parentName:"li"},"Data operations")," and select ",(0,n.kt)("strong",{parentName:"li"},"Parse JSON"),". Fill in Parse JSON action as below:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Content: ",(0,n.kt)("inlineCode",{parentName:"li"},"Events Content")),(0,n.kt)("li",{parentName:"ul"},"Schema: Copy the json content from ",(0,n.kt)("a",{target:"_blank",href:a(54490).Z},"schema-parse.json")," and paste as a schema"))),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"+")," in the flow and ",(0,n.kt)("strong",{parentName:"li"},"add an action"),", search for ",(0,n.kt)("strong",{parentName:"li"},"Control")," and add ",(0,n.kt)("strong",{parentName:"li"},"For each")," as an action. Fill in For each action as below:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Select output from previous steps: ",(0,n.kt)("inlineCode",{parentName:"li"},"value")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Inside For each, select ",(0,n.kt)("strong",{parentName:"li"},"+")," in the flow and ",(0,n.kt)("strong",{parentName:"li"},"add an action"),", search for ",(0,n.kt)("strong",{parentName:"li"},"Microsoft Teams")," and select ",(0,n.kt)("strong",{parentName:"li"},"Add a member to a team"),". Login with your Microsoft 365 account to create a connection and fill in Add a member to a team action as below:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Team: ",(0,n.kt)("em",{parentName:"li"},"Create an Onboarding team on Microsoft Teams and select")),(0,n.kt)("li",{parentName:"ul"},"A user AAD ID for the user to add to a team: ",(0,n.kt)("inlineCode",{parentName:"li"},"id")))),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"-debug-your-onboarding-experience"},"\ud83d\ude80 Debug your onboarding experience"),(0,n.kt)("p",null,"To debug our onboarding experience, we'll need to create a new user in Azure Active Directory and see if it's added in Microsoft Teams Onboarding team automatically."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure Portal")," and select Azure Active Directory from the left pane and go to ",(0,n.kt)("strong",{parentName:"p"},"Users"),". Select ",(0,n.kt)("strong",{parentName:"p"},"+ New user")," and ",(0,n.kt)("strong",{parentName:"p"},"Create new user"),". Fill in the details as below:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User name: ",(0,n.kt)("inlineCode",{parentName:"li"},"JaneDoe")),(0,n.kt)("li",{parentName:"ul"},"Name: ",(0,n.kt)("inlineCode",{parentName:"li"},"Jane Doe"))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"new user in Azure Active Directory",src:a(11817).Z,width:"1519",height:"1467"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When you added ",(0,n.kt)("inlineCode",{parentName:"p"},"Jane Doe")," as a new user, it should trigger the ",(0,n.kt)("em",{parentName:"p"},"teams-onboarding-flow")," to run.\n",(0,n.kt)("img",{alt:"teams onboarding flow success",src:a(61280).Z,width:"2250",height:"1186"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the ",(0,n.kt)("em",{parentName:"p"},"teams-onboarding-flow")," runs successfully, you should be able to see ",(0,n.kt)("inlineCode",{parentName:"p"},"Jane Doe")," as a member of the Onboarding team on Microsoft Teams! \ud83e\udd73\n",(0,n.kt)("img",{alt:"new member in Onboarding team on Microsoft Teams",src:a(39562).Z,width:"1519",height:"1468"})))),(0,n.kt)("admonition",{title:"Congratulations! \ud83c\udf89",type:"success"},(0,n.kt)("p",{parentName:"admonition"},"You just built an onboarding experience using Azure Logic Apps, Azure Event Hubs and Azure Key Vault.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"-resources"},"\ud83d\udcda Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/learn-graph"},"Microsoft Graph Fundamentals")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/graph/change-notifications-delivery"},"Get change notifications delivered in different ways")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/architecture/solution-ideas/articles/presence-microsoft-365-power-platform"},"Real-time presence with Microsoft 365, Azure, and Power Platform")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/event-grid/partner-events-overview"},"Partner Events overview for customers - Azure Event Grid"))))}m.isMDXComponent=!0},54490:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/schema-parse-b0acc741357540c9dfdb8fa9612a8bfb.json"},40190:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/architecture-328af443a035a73e3d6eab0d4edb782e.png"},4196:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-a18bdc5dea8b6ae90be31453092132fc.png"},60159:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graph-0a406d21c2ade5253dea8ef245ba38b2.png"},39562:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/new-member-onboarding-8130b3390a8e6a66074c9940f8e7c91c.png"},11817:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/new-user-3d42a176e307e5a85cbfd5aa89f7ddb5.png"},49694:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/subscription-succes-d4124fab8a924b63e56e2265803a93ca.png"},61280:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/teams-onboarding-success-22562106caa80996b5536846f00ee48e.png"}}]);