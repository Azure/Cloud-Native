"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22671],{10587:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=s(85893),r=s(11151);const i={slug:"18-cloudmail",title:"18. Logic Apps + Computer Vision",authors:["brian"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts","storage","cosmosdb","computervision"],image:"./img/banner.png",description:"<FIXME>",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},o=void 0,a={permalink:"/Cloud-Native/blog/18-cloudmail",source:"@site/blog/2022-09-18/index.md",title:"18. Logic Apps + Computer Vision",description:"<FIXME>",date:"2022-09-18T00:00:00.000Z",formattedDate:"September 18, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"},{label:"microservices",permalink:"/Cloud-Native/blog/tags/microservices"}],readingTime:9.32,hasTruncateMarker:!1,authors:[{name:"Brian Benz",title:"Senior Cloud Advocate @Microsoft",url:"https://github.com/bbenz",imageURL:"https://github.com/bbenz.png",key:"brian"}],frontMatter:{slug:"18-cloudmail",title:"18. Logic Apps + Computer Vision",authors:["brian"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts","storage","cosmosdb","computervision"],image:"./img/banner.png",description:"<FIXME>",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},unlisted:!1,prevItem:{title:"\ud83d\ude80 | Observability with ACA",permalink:"/Cloud-Native/blog/zero2hero-aca-06"},nextItem:{title:"17. Logic Apps + Cosmos DB",permalink:"/Cloud-Native/blog/17-integrate-cosmosdb"}},c={image:s(98819).Z,authorsImageUrls:[void 0]},d=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Introducing the ReadMail solution",id:"introducing-the-readmail-solution",level:2},{value:"Setup Azure Services",id:"setup-azure-services",level:2},{value:"1. Azure Storage",id:"1-azure-storage",level:3},{value:"2. Azure CosmosDB",id:"2-azure-cosmosdb",level:3},{value:"3. Azure Computer Vision",id:"3-azure-computer-vision",level:3},{value:"Connect it all with a Logic App",id:"connect-it-all-with-a-logic-app",level:2},{value:"Resources: For self-study!",id:"resources-for-self-study",level:2}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i,{children:[(0,n.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/18-cloudmail"}),(0,n.jsx)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Logic Apps + Computer Vision"}),(0,n.jsx)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Logic Apps + Computer Vision"}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/18-cloudmail"})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["Welcome to ",(0,n.jsx)(t.code,{children:"Day 18"})," of #30DaysOfServerless!"]}),"\n",(0,n.jsxs)(t.p,{children:["Yesterday my Serverless September post introduced you to making Azure Logic Apps and Azure Cosmos DB work together with a sample application that collects weather data.  Today I'm sharing a more robust solution that actually reads my mail.  Let's learn about ",(0,n.jsx)(t.strong,{children:"Teaching the cloud to read your mail!"})]}),"\n",(0,n.jsx)(t.p,{children:"Ready? Let's go!"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Introduction to the ReadMail solution"}),"\n",(0,n.jsx)(t.li,{children:"Setting up Azure storage, Cosmos DB and Computer Vision"}),"\n",(0,n.jsx)(t.li,{children:"Connecting it all together with a Logic App"}),"\n",(0,n.jsx)(t.li,{children:"Resources: For self-study!"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(68006).Z+"",width:"1600",height:"672"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"introducing-the-readmail-solution",children:"Introducing the ReadMail solution"}),"\n",(0,n.jsxs)(t.p,{children:["The US Postal system offers ",(0,n.jsx)(t.a,{href:"https://informeddelivery.usps.com/",children:"a subscription service"})," that sends you images of mail it will be delivering to your home.  I decided it would be cool to try getting Azure to collect data based on these images, so that I could categorize my mail and track the types of mail that I received."]}),"\n",(0,n.jsx)(t.p,{children:"To do this, I used Azure storage, Cosmos DB, Logic Apps, and computer vision.  When a new email comes in from the US Postal service (USPS), it triggers a logic app that:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Posts attachments to Azure storage"}),"\n",(0,n.jsx)(t.li,{children:"Triggers Azure Computer vision to perform an OCR function on attachments"}),"\n",(0,n.jsx)(t.li,{children:"Extracts any results into a JSON document"}),"\n",(0,n.jsx)(t.li,{children:"Writes the JSON document to Cosmos DB"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"workflow for the readmail solution",src:s(16975).Z+"",width:"2573",height:"744"})}),"\n",(0,n.jsx)(t.p,{children:"In this post I'll walk you through setting up the solution for yourself."}),"\n",(0,n.jsx)(t.admonition,{title:"Prerequisites",type:"info",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Contributor or Owner permissions on an active Azure subscription.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Don't have one? ",(0,n.jsx)(t.a,{href:"https://azure.microsoft.com/free/",children:"Create an account for free"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.a,{href:"https://informeddelivery.usps.com/",children:"USPS Informed Delivery account"}),".","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Alternatively, any service that sends attached images via email"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"setup-azure-services",children:"Setup Azure Services"}),"\n",(0,n.jsx)(t.p,{children:"First, we'll create all of the target environments we need to be used by our Logic App, then we;ll create the Logic App."}),"\n",(0,n.jsx)(t.h3,{id:"1-azure-storage",children:"1. Azure Storage"}),"\n",(0,n.jsx)(t.p,{children:"We'll be using Azure storage to collect attached images from emails as they arrive.  Adding images to Azure storage will also trigger a workflow that performs OCR on new attached images and stores the OCR data in Cosmos DB."}),"\n",(0,n.jsxs)(t.p,{children:["To create a new Azure storage account from the ",(0,n.jsx)(t.a,{href:"https://portal.azure.com",children:"portal dashboard"}),", Select ",(0,n.jsx)(t.strong,{children:"Create a resource > Storage account > Create"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Basics"})," tab covers all of the features and information that we will need for this solution:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Section"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Required or optional"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Project details"}),(0,n.jsx)(t.td,{children:"Subscription"}),(0,n.jsx)(t.td,{children:"Required"}),(0,n.jsx)(t.td,{children:"Select the subscription for the new storage account."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Project details"}),(0,n.jsx)(t.td,{children:"Resource group"}),(0,n.jsx)(t.td,{children:"Required"}),(0,n.jsx)(t.td,{children:"Create a new resource group that you will use for storage, Cosmos DB, Computer Vision and the Logic App."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Instance details"}),(0,n.jsx)(t.td,{children:"Storage account name"}),(0,n.jsx)(t.td,{children:"Required"}),(0,n.jsx)(t.td,{children:"Choose a unique name for your storage account. Storage account names must be between 3 and 24 characters in length and may contain numbers and lowercase letters only."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Instance details"}),(0,n.jsx)(t.td,{children:"Region"}),(0,n.jsx)(t.td,{children:"Required"}),(0,n.jsx)(t.td,{children:"Select the appropriate region for your storage account."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Instance details"}),(0,n.jsx)(t.td,{children:"Performance"}),(0,n.jsx)(t.td,{children:"Required"}),(0,n.jsxs)(t.td,{children:["Select ",(0,n.jsx)(t.strong,{children:"Standard"})," performance for general-purpose v2 storage accounts (default)."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Instance details"}),(0,n.jsx)(t.td,{children:"Redundancy"}),(0,n.jsx)(t.td,{children:"Required"}),(0,n.jsxs)(t.td,{children:["Select ",(0,n.jsx)(t.strong,{children:"locally-redundant Storage (LRS)"})," for this example."]})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Select ",(0,n.jsx)(t.strong,{children:"Review + create"})," to accept the remaining default options, then validate and create the account."]}),"\n",(0,n.jsx)(t.h3,{id:"2-azure-cosmosdb",children:"2. Azure CosmosDB"}),"\n",(0,n.jsx)(t.p,{children:"CosmosDB will be used to store the JSON documents returned by the COmputer Vision OCR process."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["See more details and screen shots for setting up CosmosDB in yesterday's Serverless September post - ",(0,n.jsx)(t.strong,{children:"Using Logic Apps with Cosmos DB"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To get started with Cosmos DB, you create an account, then a database, then a container to store JSON documents. To create a new Cosmos DB account from the ",(0,n.jsx)(t.a,{href:"https://portal.azure.com",children:"portal dashboard"}),", Select ",(0,n.jsx)(t.strong,{children:"Create a resource > Azure Cosmos DB > Create"}),".  Choose ",(0,n.jsx)(t.strong,{children:"core SQL"})," for the API."]}),"\n",(0,n.jsxs)(t.p,{children:["Select your subscription, then for simplicity use the same resource group you created when you set up storage.  Enter an account name and choose a location, select provisioned throughput capacity mode and apply the free tier discount. From here you can select ",(0,n.jsx)(t.strong,{children:"Review and Create"}),", then ",(0,n.jsx)(t.strong,{children:"Create"})]}),"\n",(0,n.jsxs)(t.p,{children:["Next, create a new database and container. Go to the ",(0,n.jsx)(t.strong,{children:"Data Explorer"})," in your new Cosmos DB account, and choose ",(0,n.jsx)(t.strong,{children:"New Container"}),".  Name the database, and keep all the other defaults except:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Setting"}),(0,n.jsx)(t.th,{children:"Action"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Container ID"}),(0,n.jsx)(t.td,{children:"id"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Container partition"}),(0,n.jsx)(t.td,{children:"/id"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Press ",(0,n.jsx)(t.strong,{children:"OK"})," to create a database and container"]}),"\n",(0,n.jsx)(t.h3,{id:"3-azure-computer-vision",children:"3. Azure Computer Vision"}),"\n",(0,n.jsxs)(t.p,{children:["Azure Cognitive Services' ",(0,n.jsx)(t.a,{href:"https://azure.microsoft.com/products/cognitive-services/computer-vision/",children:"Computer Vision"})," will perform an OCR process on each image attachment that is stored in Azure storage."]}),"\n",(0,n.jsxs)(t.p,{children:["From the ",(0,n.jsx)(t.a,{href:"https://portal.azure.com",children:"portal dashboard"}),", Select ",(0,n.jsx)(t.strong,{children:"Create a resource > AI + Machine Learning > Computer Vision > Create"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Basics"})," and ",(0,n.jsx)(t.strong,{children:"Identity"})," tabs cover all of the features and information that we will need for this solution:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Basics Tab"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Section"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Required or optional"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Project details"}),(0,n.jsx)(t.td,{children:"Subscription"}),(0,n.jsx)(t.td,{children:"Required"}),(0,n.jsx)(t.td,{children:"Select the subscription for the new service."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Project details"}),(0,n.jsx)(t.td,{children:"Resource group"}),(0,n.jsx)(t.td,{children:"Required"}),(0,n.jsx)(t.td,{children:"Use the same resource group that you used for Azure storage and Cosmos DB."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Instance details"}),(0,n.jsx)(t.td,{children:"Region"}),(0,n.jsx)(t.td,{children:"Required"}),(0,n.jsx)(t.td,{children:"Select the appropriate region for your Computer Vision service."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Instance details"}),(0,n.jsx)(t.td,{children:"Name"}),(0,n.jsx)(t.td,{children:"Required"}),(0,n.jsx)(t.td,{children:"Choose a unique name for your Computer Vision service."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Instance details"}),(0,n.jsx)(t.td,{children:"Pricing"}),(0,n.jsx)(t.td,{children:"Required"}),(0,n.jsx)(t.td,{children:"Select the free tier for this example."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Identity Tab"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Section"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Required or optional"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"System assigned managed identity"}),(0,n.jsx)(t.td,{children:"Status"}),(0,n.jsx)(t.td,{children:"Required"}),(0,n.jsx)(t.td,{children:"Enable system assigned identity to grant the resource access to other existing resources."})]})})]}),"\n",(0,n.jsxs)(t.p,{children:["Select ",(0,n.jsx)(t.strong,{children:"Review + create"})," to accept the remaining default options, then validate and create the account."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"connect-it-all-with-a-logic-app",children:"Connect it all with a Logic App"}),"\n",(0,n.jsx)(t.p,{children:"Now we're ready to put this all together in a Logic App workflow!"}),"\n",(0,n.jsx)(t.admonition,{title:"1. Create Logic App",type:"tip"}),"\n",(0,n.jsxs)(t.p,{children:["From the ",(0,n.jsx)(t.a,{href:"https://portal.azure.com",children:"portal dashboard"}),", Select ",(0,n.jsx)(t.strong,{children:"Create a resource > Integration > Logic App > Create"}),".  Name your Logic App and select a location, the rest of the settings can be left at their defaults."]}),"\n",(0,n.jsx)(t.admonition,{title:"2. Create Workflow: Add Trigger",type:"tip"}),"\n",(0,n.jsxs)(t.p,{children:["Once the Logic App is created, select ",(0,n.jsx)(t.strong,{children:"Create a workflow from designer"}),"."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"A workflow is a series of steps that defines a task or process. Each workflow starts with a single trigger, after which you must add one or more actions."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["When in designer, search for ",(0,n.jsx)(t.strong,{children:"outlook.com"})," on the right under ",(0,n.jsx)(t.strong,{children:"Add a trigger"}),".  Choose ",(0,n.jsx)(t.strong,{children:"outlook.com"}),".  Choose\n",(0,n.jsx)(t.strong,{children:"When a new email arrives"})," as the trigger."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"A trigger is always the first step in any workflow and specifies the condition for running any further steps in that workflow."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Set the following values:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Folder"}),(0,n.jsx)(t.td,{children:"Inbox"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Importance"}),(0,n.jsx)(t.td,{children:"Any"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Only With Attachments"}),(0,n.jsx)(t.td,{children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Include Attachments"}),(0,n.jsx)(t.td,{children:"Yes"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Then add a new parameter:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"From"}),(0,n.jsx)(t.td,{children:"Add the email address that sends you the email with attachments"})]})})]}),"\n",(0,n.jsx)(t.admonition,{title:"3. Create Workflow: Add Action (for Trigger)",type:"tip"}),"\n",(0,n.jsxs)(t.p,{children:["Choose ",(0,n.jsx)(t.strong,{children:"add an action"})," and choose ",(0,n.jsx)(t.strong,{children:"control > for-each"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"logic app for each",src:s(19939).Z+"",width:"1088",height:"861"})}),"\n",(0,n.jsxs)(t.p,{children:["Inside the for-each action, in ",(0,n.jsx)(t.strong,{children:"Select an output from previous steps"}),", choose ",(0,n.jsx)(t.strong,{children:"attachments"}),".  Then, again inside the  for-each action, add the ",(0,n.jsx)(t.strong,{children:"create blob"})," action:"]}),"\n",(0,n.jsx)(t.p,{children:"Set the following values:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Folder Path"}),(0,n.jsx)(t.td,{children:"/mailreaderinbox"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blob Name"}),(0,n.jsx)(t.td,{children:"Attachments Name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blob Content"}),(0,n.jsx)(t.td,{children:"Attachments Content"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"This extracts attachments from the email and created a new blob for each attachment."}),"\n",(0,n.jsxs)(t.p,{children:["Next, inside the same for-each action, add the ",(0,n.jsx)(t.strong,{children:"get blob content"})," action."]}),"\n",(0,n.jsx)(t.p,{children:"Set the following values:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blob"}),(0,n.jsx)(t.td,{children:"id"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Infer content type"}),(0,n.jsx)(t.td,{children:"Yes"})]})]})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"We create and read from a blob for each attachment because Computer Vision needs a non-virtual source to read from when performing an OCR process. Because we enabled system assigned identity to grant Computer Vision to other existing resources, it can access the blob but not the outlook.com attachment.  Also, we pass the ID of the blob to use as a unique ID when writing to Cosmos DB."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"create blob from attachments",src:s(48557).Z+"",width:"1225",height:"1529"})}),"\n",(0,n.jsxs)(t.p,{children:["Next, inside the same for-each action, choose ",(0,n.jsx)(t.strong,{children:"add an action"})," and choose ",(0,n.jsx)(t.strong,{children:"control > condition"}),". Set the value to ",(0,n.jsx)(t.strong,{children:"Media Type > is equal to > image/JPEG"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The USPS sends attachments of multiple types, but we only want to scan attachments that have images of our mail, which are always JPEG images. If the condition is true, we will process the image with Computer Vision OCR and write the results to a JSON document in CosmosDB."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"True"})," section of the condition, add an action and choose ",(0,n.jsx)(t.strong,{children:"Computer Vision API > Optical Character Recognition (OCR) to JSON"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Set the following values:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Image Source"}),(0,n.jsx)(t.td,{children:"Image Content"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Image content"}),(0,n.jsx)(t.td,{children:"File Content"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["In the same ",(0,n.jsx)(t.strong,{children:"True"})," section of the condition, choose ",(0,n.jsx)(t.strong,{children:"add an action"})," and choose Cosmos DB.  Choose ",(0,n.jsx)(t.strong,{children:"Create or Update Document"})," from the actions.  Select ",(0,n.jsx)(t.strong,{children:"Access Key"}),", and provide the primary read-write key (found under keys in Cosmos DB), and the Cosmos DB account ID (without 'documents.azure.com')."]}),"\n",(0,n.jsx)(t.p,{children:"Next, fill in your Cosmos DB Database ID and Collection ID.  Create a JSON document by selecting dynamic content elements and wrapping JSON formatting around them."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Be sure to use the ID passed from blob storage as your unique ID for CosmosDB.  That way you can troubleshoot and JSON or OCR issues by tracing back the JSON document in Cosmos Db to the blob in Azure storage.  Also, include the Computer Vision JSON response, as it contains the results of the Computer Vision OCR scan.  all other elements are optional."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"4. TEST WORKFLOW",type:"tip"}),"\n",(0,n.jsx)(t.p,{children:"When complete, you should have an action the Logic App designer that looks something like this:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Logic App workflow create or update document in cosmosdb",src:s(94389).Z+"",width:"2042",height:"1401"})}),"\n",(0,n.jsxs)(t.p,{children:["Save the workflow and test the connections by clicking ",(0,n.jsx)(t.strong,{children:"Run Trigger > Run"}),".  If connections are working, you should see documents flowing into Cosmos DB each time that an email arrives with image attachments."]}),"\n",(0,n.jsxs)(t.p,{children:["Check the data in Cosmos Db by opening the Data explorer, then choosing the container you created and selecting ",(0,n.jsx)(t.strong,{children:"items"}),".  You should see documents similar to this:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Logic App workflow with trigger and action",src:s(27263).Z+"",width:"2357",height:"1325"})}),"\n",(0,n.jsx)(t.admonition,{title:"1. Congratulations",type:"tip",children:(0,n.jsx)(t.p,{children:"You just built your personal ReadMail solution with Logic Apps! \ud83c\udf89"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"resources-for-self-study",children:"Resources: For self-study!"}),"\n",(0,n.jsx)(t.p,{children:"Once you have an understanding of the basics in ths post, there is so much more to learn!"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Check out the other ",(0,n.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/blog",children:"Serverless September posts"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["For more detail about Cosmos DB, see the docs at ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/azure/cosmos-db/",children:"https://learn.microsoft.com/azure/cosmos-db/"})]}),"\n",(0,n.jsxs)(t.li,{children:["For more info on Logic Apps, see the docs at ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/azure/logic-apps/",children:"https://learn.microsoft.com/azure/logic-apps/"})]}),"\n",(0,n.jsxs)(t.li,{children:["For details on Azure Cognitive Services and Computer Vision, see ",(0,n.jsx)(t.a,{href:"https://azure.microsoft.com/products/cognitive-services/computer-vision/",children:"https://azure.microsoft.com/products/cognitive-services/computer-vision/"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Thanks for stopping by!"})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},98819:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/banner-e7cc7a75c1dd0c42170942a9186aeee3.png"},68006:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/banner-e7cc7a75c1dd0c42170942a9186aeee3.png"},94389:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cosmoscreateorupdatedocument-359018e398dfed9dd6f41991a6b600f2.png"},48557:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/createblobfromattachments-973aec90c10abe51b785a2353f4e1992.png"},19939:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/logicappforeach-3b1e9d6ff4b39773b7d6b66aaf1a3445.png"},27263:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/readmailfinalresults-cf50ccd6301f2feebab1e9e7df3d4d70.png"},16975:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/readmailworkflow-e456d7ecabffc87c26955a45333118e5.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var n=s(67294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);