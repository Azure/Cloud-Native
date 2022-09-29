"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2671],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(a),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(g,l(l({ref:e},u),{},{components:a})):n.createElement(g,l({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},51861:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={slug:"18-cloudmail",title:"18. Logic Apps + Computer Vision",authors:["brian"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts","storage","cosmosdb","computervision"],image:"./img/banner.png",description:"<FIXME>",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},l=void 0,i={permalink:"/Cloud-Native/blog/18-cloudmail",source:"@site/blog/2022-09-18/index.md",title:"18. Logic Apps + Computer Vision",description:"<FIXME>",date:"2022-09-18T00:00:00.000Z",formattedDate:"September 18, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"},{label:"microservices",permalink:"/Cloud-Native/blog/tags/microservices"}],readingTime:9.32,hasTruncateMarker:!1,authors:[{name:"Brian Benz",title:"Senior Cloud Advocate @Microsoft",url:"https://github.com/bbenz",imageURL:"https://github.com/bbenz.png",key:"brian"}],frontMatter:{slug:"18-cloudmail",title:"18. Logic Apps + Computer Vision",authors:["brian"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts","storage","cosmosdb","computervision"],image:"./img/banner.png",description:"<FIXME>",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},prevItem:{title:"17. Logic Apps + Cosmos DB",permalink:"/Cloud-Native/blog/17-integrate-cosmosdb"},nextItem:{title:"\ud83d\ude80 | Observability with ACA",permalink:"/Cloud-Native/blog/zero2hero-aca-06"}},s={image:a(68006).Z,authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introducing the ReadMail solution",id:"introducing-the-readmail-solution",level:2},{value:"Setup Azure Services",id:"setup-azure-services",level:2},{value:"1. Azure Storage",id:"1-azure-storage",level:3},{value:"2. Azure CosmosDB",id:"2-azure-cosmosdb",level:3},{value:"3. Azure Computer Vision",id:"3-azure-computer-vision",level:3},{value:"Connect it all with a Logic App",id:"connect-it-all-with-a-logic-app",level:2},{value:"Resources: For self-study!",id:"resources-for-self-study",level:2}],u={toc:p};function m(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/18-cloudmail"}),(0,r.kt)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Logic Apps + Computer Vision"}),(0,r.kt)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Logic Apps + Computer Vision"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/18-cloudmail"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 18")," of #30DaysOfServerless!"),(0,r.kt)("p",null,"Yesterday my Serverless September post introduced you to making Azure Logic Apps and Azure Cosmos DB work together with a sample application that collects weather data.  Today I'm sharing a more robust solution that actually reads my mail.  Let's learn about ",(0,r.kt)("strong",{parentName:"p"},"Teaching the cloud to read your mail!")),(0,r.kt)("p",null,"Ready? Let's go!"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introduction to the ReadMail solution"),(0,r.kt)("li",{parentName:"ul"},"Setting up Azure storage, Cosmos DB and Computer Vision"),(0,r.kt)("li",{parentName:"ul"},"Connecting it all together with a Logic App "),(0,r.kt)("li",{parentName:"ul"},"Resources: For self-study!")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(68006).Z,width:"1600",height:"672"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"introducing-the-readmail-solution"},"Introducing the ReadMail solution"),(0,r.kt)("p",null,"The US Postal system offers ",(0,r.kt)("a",{parentName:"p",href:"https://informeddelivery.usps.com/"},"a subscription service")," that sends you images of mail it will be delivering to your home.  I decided it would be cool to try getting Azure to collect data based on these images, so that I could categorize my mail and track the types of mail that I received.  "),(0,r.kt)("p",null,"To do this, I used Azure storage, Cosmos DB, Logic Apps, and computer vision.  When a new email comes in from the US Postal service (USPS), it triggers a logic app that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Posts attachments to Azure storage"),(0,r.kt)("li",{parentName:"ul"},"Triggers Azure Computer vision to perform an OCR function on attachments"),(0,r.kt)("li",{parentName:"ul"},"Extracts any results into a JSON document"),(0,r.kt)("li",{parentName:"ul"},"Writes the JSON document to Cosmos DB ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"workflow for the readmail solution",src:a(16975).Z,width:"2573",height:"744"})),(0,r.kt)("p",null,"In this post I'll walk you through setting up the solution for yourself.  "),(0,r.kt)("admonition",{title:"Prerequisites",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Contributor or Owner permissions on an active Azure subscription.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Don't have one? ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/free/"},"Create an account for free"),"."))),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://informeddelivery.usps.com/"},"USPS Informed Delivery account"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Alternatively, any service that sends attached images via email"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"setup-azure-services"},"Setup Azure Services"),(0,r.kt)("p",null,"First, we'll create all of the target environments we need to be used by our Logic App, then we;ll create the Logic App.  "),(0,r.kt)("h3",{id:"1-azure-storage"},"1. Azure Storage"),(0,r.kt)("p",null,"We'll be using Azure storage to collect attached images from emails as they arrive.  Adding images to Azure storage will also trigger a workflow that performs OCR on new attached images and stores the OCR data in Cosmos DB.  "),(0,r.kt)("p",null,"To create a new Azure storage account from the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"portal dashboard"),", Select ",(0,r.kt)("strong",{parentName:"p"},"Create a resource > Storage account > Create"),".  "),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Basics")," tab covers all of the features and information that we will need for this solution: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Section"),(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required or optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project details"),(0,r.kt)("td",{parentName:"tr",align:null},"Subscription"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the subscription for the new storage account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project details"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource group"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new resource group that you will use for storage, Cosmos DB, Computer Vision and the Logic App.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Instance details"),(0,r.kt)("td",{parentName:"tr",align:null},"Storage account name"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose a unique name for your storage account. Storage account names must be between 3 and 24 characters in length and may contain numbers and lowercase letters only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Instance details"),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the appropriate region for your storage account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Instance details"),(0,r.kt)("td",{parentName:"tr",align:null},"Performance"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Select ",(0,r.kt)("strong",{parentName:"td"},"Standard")," performance for general-purpose v2 storage accounts (default).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Instance details"),(0,r.kt)("td",{parentName:"tr",align:null},"Redundancy"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Select ",(0,r.kt)("strong",{parentName:"td"},"locally-redundant Storage (LRS)")," for this example.")))),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},"Review + create")," to accept the remaining default options, then validate and create the account."),(0,r.kt)("h3",{id:"2-azure-cosmosdb"},"2. Azure CosmosDB"),(0,r.kt)("p",null,"CosmosDB will be used to store the JSON documents returned by the COmputer Vision OCR process.  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See more details and screen shots for setting up CosmosDB in yesterday's Serverless September post - ",(0,r.kt)("strong",{parentName:"p"},"Using Logic Apps with Cosmos DB"))),(0,r.kt)("p",null,"To get started with Cosmos DB, you create an account, then a database, then a container to store JSON documents. To create a new Cosmos DB account from the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"portal dashboard"),", Select ",(0,r.kt)("strong",{parentName:"p"},"Create a resource > Azure Cosmos DB > Create"),".  Choose ",(0,r.kt)("strong",{parentName:"p"},"core SQL")," for the API."),(0,r.kt)("p",null,"Select your subscription, then for simplicity use the same resource group you created when you set up storage.  Enter an account name and choose a location, select provisioned throughput capacity mode and apply the free tier discount. From here you can select ",(0,r.kt)("strong",{parentName:"p"},"Review and Create"),", then ",(0,r.kt)("strong",{parentName:"p"},"Create")," "),(0,r.kt)("p",null,"Next, create a new database and container. Go to the ",(0,r.kt)("strong",{parentName:"p"},"Data Explorer")," in your new Cosmos DB account, and choose ",(0,r.kt)("strong",{parentName:"p"},"New Container"),".  Name the database, and keep all the other defaults except:  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Container ID"),(0,r.kt)("td",{parentName:"tr",align:null},"id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Container partition"),(0,r.kt)("td",{parentName:"tr",align:null},"/id")))),(0,r.kt)("p",null,"Press ",(0,r.kt)("strong",{parentName:"p"},"OK")," to create a database and container"),(0,r.kt)("h3",{id:"3-azure-computer-vision"},"3. Azure Computer Vision"),(0,r.kt)("p",null,"Azure Cognitive Services' ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/cognitive-services/computer-vision/"},"Computer Vision")," will perform an OCR process on each image attachment that is stored in Azure storage.  "),(0,r.kt)("p",null,"From the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"portal dashboard"),", Select ",(0,r.kt)("strong",{parentName:"p"},"Create a resource > AI + Machine Learning > Computer Vision > Create"),". "),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Basics")," and ",(0,r.kt)("strong",{parentName:"p"},"Identity")," tabs cover all of the features and information that we will need for this solution: "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basics Tab")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Section"),(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required or optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project details"),(0,r.kt)("td",{parentName:"tr",align:null},"Subscription"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the subscription for the new service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project details"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource group"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Use the same resource group that you used for Azure storage and Cosmos DB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Instance details"),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the appropriate region for your Computer Vision service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Instance details"),(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose a unique name for your Computer Vision service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Instance details"),(0,r.kt)("td",{parentName:"tr",align:null},"Pricing"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the free tier for this example.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Identity Tab")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Section"),(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required or optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System assigned managed identity"),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable system assigned identity to grant the resource access to other existing resources.")))),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},"Review + create")," to accept the remaining default options, then validate and create the account."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"connect-it-all-with-a-logic-app"},"Connect it all with a Logic App"),(0,r.kt)("p",null,"Now we're ready to put this all together in a Logic App workflow!  "),(0,r.kt)("admonition",{title:"1. Create Logic App",type:"tip"}),(0,r.kt)("p",null,"From the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"portal dashboard"),", Select ",(0,r.kt)("strong",{parentName:"p"},"Create a resource > Integration > Logic App > Create"),".  Name your Logic App and select a location, the rest of the settings can be left at their defaults.  "),(0,r.kt)("admonition",{title:"2. Create Workflow: Add Trigger",type:"tip"}),(0,r.kt)("p",null,"Once the Logic App is created, select ",(0,r.kt)("strong",{parentName:"p"},"Create a workflow from designer"),".  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A workflow is a series of steps that defines a task or process. Each workflow starts with a single trigger, after which you must add one or more actions.")),(0,r.kt)("p",null,"When in designer, search for ",(0,r.kt)("strong",{parentName:"p"},"outlook.com")," on the right under ",(0,r.kt)("strong",{parentName:"p"},"Add a trigger"),".  Choose ",(0,r.kt)("strong",{parentName:"p"},"outlook.com"),".  Choose\n",(0,r.kt)("strong",{parentName:"p"},"When a new email arrives")," as the trigger.  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A trigger is always the first step in any workflow and specifies the condition for running any further steps in that workflow. ")),(0,r.kt)("p",null,"Set the following values: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Folder"),(0,r.kt)("td",{parentName:"tr",align:null},"Inbox")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Importance"),(0,r.kt)("td",{parentName:"tr",align:null},"Any")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Only With Attachments"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Include Attachments"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("p",null,"Then add a new parameter:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"From"),(0,r.kt)("td",{parentName:"tr",align:null},"Add the email address that sends you the email with attachments")))),(0,r.kt)("admonition",{title:"3. Create Workflow: Add Action (for Trigger)",type:"tip"}),(0,r.kt)("p",null,"Choose ",(0,r.kt)("strong",{parentName:"p"},"add an action")," and choose ",(0,r.kt)("strong",{parentName:"p"},"control > for-each"),". "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"logic app for each",src:a(19939).Z,width:"1088",height:"861"})),(0,r.kt)("p",null,"Inside the for-each action, in ",(0,r.kt)("strong",{parentName:"p"},"Select an output from previous steps"),", choose ",(0,r.kt)("strong",{parentName:"p"},"attachments"),".  Then, again inside the  for-each action, add the ",(0,r.kt)("strong",{parentName:"p"},"create blob")," action: "),(0,r.kt)("p",null,"Set the following values: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Folder Path"),(0,r.kt)("td",{parentName:"tr",align:null},"/mailreaderinbox")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blob Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Attachments Name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blob Content"),(0,r.kt)("td",{parentName:"tr",align:null},"Attachments Content")))),(0,r.kt)("p",null,"This extracts attachments from the email and created a new blob for each attachment. "),(0,r.kt)("p",null,"Next, inside the same for-each action, add the ",(0,r.kt)("strong",{parentName:"p"},"get blob content")," action."),(0,r.kt)("p",null,"Set the following values: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blob"),(0,r.kt)("td",{parentName:"tr",align:null},"id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Infer content type"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We create and read from a blob for each attachment because Computer Vision needs a non-virtual source to read from when performing an OCR process. Because we enabled system assigned identity to grant Computer Vision to other existing resources, it can access the blob but not the outlook.com attachment.  Also, we pass the ID of the blob to use as a unique ID when writing to Cosmos DB.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create blob from attachments",src:a(48557).Z,width:"1225",height:"1529"})),(0,r.kt)("p",null,"Next, inside the same for-each action, choose ",(0,r.kt)("strong",{parentName:"p"},"add an action")," and choose ",(0,r.kt)("strong",{parentName:"p"},"control > condition"),". Set the value to ",(0,r.kt)("strong",{parentName:"p"},"Media Type > is equal to > image/JPEG")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The USPS sends attachments of multiple types, but we only want to scan attachments that have images of our mail, which are always JPEG images. If the condition is true, we will process the image with Computer Vision OCR and write the results to a JSON document in CosmosDB.")),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"True")," section of the condition, add an action and choose ",(0,r.kt)("strong",{parentName:"p"},"Computer Vision API > Optical Character Recognition (OCR) to JSON"),". "),(0,r.kt)("p",null,"Set the following values: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image Source"),(0,r.kt)("td",{parentName:"tr",align:null},"Image Content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image content"),(0,r.kt)("td",{parentName:"tr",align:null},"File Content")))),(0,r.kt)("p",null,"In the same ",(0,r.kt)("strong",{parentName:"p"},"True")," section of the condition, choose ",(0,r.kt)("strong",{parentName:"p"},"add an action")," and choose Cosmos DB.  Choose ",(0,r.kt)("strong",{parentName:"p"},"Create or Update Document")," from the actions.  Select ",(0,r.kt)("strong",{parentName:"p"},"Access Key"),", and provide the primary read-write key (found under keys in Cosmos DB), and the Cosmos DB account ID (without 'documents.azure.com'). "),(0,r.kt)("p",null,"Next, fill in your Cosmos DB Database ID and Collection ID.  Create a JSON document by selecting dynamic content elements and wrapping JSON formatting around them. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Be sure to use the ID passed from blob storage as your unique ID for CosmosDB.  That way you can troubleshoot and JSON or OCR issues by tracing back the JSON document in Cosmos Db to the blob in Azure storage.  Also, include the Computer Vision JSON response, as it contains the results of the Computer Vision OCR scan.  all other elements are optional.  ")),(0,r.kt)("admonition",{title:"4. TEST WORKFLOW",type:"tip"}),(0,r.kt)("p",null,"When complete, you should have an action the Logic App designer that looks something like this:  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Logic App workflow create or update document in cosmosdb",src:a(94389).Z,width:"2042",height:"1401"})),(0,r.kt)("p",null,"Save the workflow and test the connections by clicking ",(0,r.kt)("strong",{parentName:"p"},"Run Trigger > Run"),".  If connections are working, you should see documents flowing into Cosmos DB each time that an email arrives with image attachments.   "),(0,r.kt)("p",null,"Check the data in Cosmos Db by opening the Data explorer, then choosing the container you created and selecting ",(0,r.kt)("strong",{parentName:"p"},"items"),".  You should see documents similar to this: "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Logic App workflow with trigger and action",src:a(27263).Z,width:"2357",height:"1325"})),(0,r.kt)("admonition",{title:"1. Congratulations",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You just built your personal ReadMail solution with Logic Apps! \ud83c\udf89")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"resources-for-self-study"},"Resources: For self-study!"),(0,r.kt)("p",null,"Once you have an understanding of the basics in ths post, there is so much more to learn!  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check out the other ",(0,r.kt)("a",{parentName:"li",href:"https://azure.github.io/Cloud-Native/blog"},"Serverless September posts"),".  "),(0,r.kt)("li",{parentName:"ul"},"For more detail about Cosmos DB, see the docs at ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/cosmos-db/"},"https://learn.microsoft.com/azure/cosmos-db/")),(0,r.kt)("li",{parentName:"ul"},"For more info on Logic Apps, see the docs at ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/logic-apps/"},"https://learn.microsoft.com/azure/logic-apps/")),(0,r.kt)("li",{parentName:"ul"},"For details on Azure Cognitive Services and Computer Vision, see ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/computer-vision/"},"https://azure.microsoft.com/products/cognitive-services/computer-vision/"),".")),(0,r.kt)("p",null,"Thanks for stopping by!"))}m.isMDXComponent=!0},68006:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/banner-e7cc7a75c1dd0c42170942a9186aeee3.png"},94389:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/cosmoscreateorupdatedocument-359018e398dfed9dd6f41991a6b600f2.png"},48557:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/createblobfromattachments-973aec90c10abe51b785a2353f4e1992.png"},19939:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/logicappforeach-3b1e9d6ff4b39773b7d6b66aaf1a3445.png"},27263:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/readmailfinalresults-cf50ccd6301f2feebab1e9e7df3d4d70.png"},16975:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/readmailworkflow-e456d7ecabffc87c26955a45333118e5.png"}}]);