"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37582],{77302:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=s(85893),r=s(11151);const a={slug:"08-functions-azure",title:"08. Functions + Serverless On Azure",authors:["nitya","devanshi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Introduction to Azure Functions, from core concepts to hello world!",tags:["serverless-september","30-days-of-serverless","serverless-hacks","zero-to-hero","ask-the-expert","azure-functions","azure-container-apps","azure-event-grid","azure-logic-apps","serverless-e2e"]},i=void 0,o={permalink:"/Cloud-Native/blog/08-functions-azure",source:"@site/blog/2022-09-08/index.md",title:"08. Functions + Serverless On Azure",description:"Introduction to Azure Functions, from core concepts to hello world!",date:"2022-09-08T00:00:00.000Z",formattedDate:"September 8, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"serverless-hacks",permalink:"/Cloud-Native/blog/tags/serverless-hacks"},{label:"zero-to-hero",permalink:"/Cloud-Native/blog/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Cloud-Native/blog/tags/ask-the-expert"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"azure-event-grid",permalink:"/Cloud-Native/blog/tags/azure-event-grid"},{label:"azure-logic-apps",permalink:"/Cloud-Native/blog/tags/azure-logic-apps"},{label:"serverless-e2e",permalink:"/Cloud-Native/blog/tags/serverless-e-2-e"}],readingTime:5.19,hasTruncateMarker:!1,authors:[{name:"Nitya Narasimhan",title:"Senior Cloud Advocate, Illustrator",url:"https://github.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"},{name:"Devanshi Joshi",title:"Product Marketing Manager",url:"https://github.com/devanshidiaries",imageURL:"https://github.com/devanshidiaries.png",key:"devanshi"}],frontMatter:{slug:"08-functions-azure",title:"08. Functions + Serverless On Azure",authors:["nitya","devanshi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Introduction to Azure Functions, from core concepts to hello world!",tags:["serverless-september","30-days-of-serverless","serverless-hacks","zero-to-hero","ask-the-expert","azure-functions","azure-container-apps","azure-event-grid","azure-logic-apps","serverless-e2e"]},unlisted:!1,prevItem:{title:"09. Hello, Azure Container Apps",permalink:"/Cloud-Native/blog/09-aca-fundamentals"},nextItem:{title:"07. Functions for Python Devs",permalink:"/Cloud-Native/blog/07-functions-python"}},l={image:s(99143).Z,authorsImageUrls:[void 0,void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Week 1 Recap: #30Days &amp; Functions",id:"week-1-recap-30days--functions",level:2},{value:"Advanced Functions: Code Samples",id:"advanced-functions-code-samples",level:2},{value:"E2E Scenarios: Hacks &amp; Cloud Skills",id:"e2e-scenarios-hacks--cloud-skills",level:2},{value:"What&#39;s Next? Hello, Cloud-Native!",id:"whats-next-hello-cloud-native",level:2},{value:"Take The Challenge",id:"take-the-challenge",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Head:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a,{children:[(0,n.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/functions-1"}),(0,n.jsx)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Azure Functions Fundamentals"}),(0,n.jsx)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Azure Functions Fundamentals"}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/08-functions-azure"})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.admonition,{title:"SEP 08: CHANGE IN PUBLISHING SCHEDULE",type:"warning",children:(0,n.jsxs)(t.p,{children:["Starting from Week 2 (Sep 8), we'll be publishing blog posts in ",(0,n.jsx)(t.em,{children:"batches"})," rather than on a daily basis, so you can read a series of related posts together. ",(0,n.jsx)(t.em,{children:"Don't want to miss updates?"})," Just ",(0,n.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/blog/rss.xml",children:"subscribe to the feed"})]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["Welcome to ",(0,n.jsx)(t.code,{children:"Day 8"})," of #30DaysOfServerless!"]}),"\n",(0,n.jsxs)(t.p,{children:["This marks the end of our ",(0,n.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/serverless-september/30DaysOfServerless/#azure-functions",children:"Week 1 Roadmap"})," focused on Azure Functions!! Today, we'll do a quick recap of all #ServerlessSeptember activities in Week 1, set the stage for Week 2 - and leave you with some excellent tutorials you should explore to build more advanced scenarios with Azure Functions."]}),"\n",(0,n.jsx)(t.p,{children:"Ready? Let's go."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Azure Functions: Week 1 Recap"}),"\n",(0,n.jsx)(t.li,{children:"Advanced Functions: Explore Samples"}),"\n",(0,n.jsx)(t.li,{children:"End-to-End: Serverless Hacks & Cloud Skills"}),"\n",(0,n.jsx)(t.li,{children:"What's Next: Hello, Containers & Microservices"}),"\n",(0,n.jsxs)(t.li,{children:["Challenge: ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/training/paths/create-serverless-applications/?WT.mc_id=javascript-99907-cxa",children:"Complete the Learning Path"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Serverless September slide featuring Nitya Narasimhan and Devanshi Joshi presenting Azure Functions: E2E Solutions &amp; Next Steps.",src:s(55742).Z+"",width:"1600",height:"672"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"week-1-recap-30days--functions",children:"Week 1 Recap: #30Days & Functions"}),"\n",(0,n.jsx)(t.p,{children:"Congratulations!! We made it to the end of Week 1 of #ServerlessSeptember. Let's recap what we learned so far:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In ",(0,n.jsx)(t.a,{href:"/blog/02-functions-intro",children:"Core Concepts"})," we looked at where Azure Functions fits into the serverless options available on Azure. And we learned about key concepts like Triggers, Bindings, Custom Handlers and Durable Functions."]}),"\n",(0,n.jsxs)(t.li,{children:["In ",(0,n.jsx)(t.a,{href:"/blog/03-functions-quickstart",children:"Build Your First Function"})," we looked at the tooling options for creating Functions apps, testing them locally, and deploying them to Azure - as we built and deployed our first Functions app."]}),"\n",(0,n.jsx)(t.li,{children:"In the next 4 posts, we explored new Triggers, Integrations, and Scenarios - as we looked at building Functions Apps in Java, JavaScript, .NET and Python."}),"\n",(0,n.jsxs)(t.li,{children:["And in the Zero-To-Hero series, we learned about ",(0,n.jsx)(t.a,{href:"/blog/zero2hero-func-02",children:"Durable Entities"})," - and how we can use them to create ",(0,n.jsx)(t.em,{children:"stateful"})," serverless solutions using a ",(0,n.jsx)(t.a,{href:"https://github.com/Azure/azure-functions-durable-extension/tree/dev/samples/entitites-csharp/Chirper",children:"Chirper Sample"})," as an example scenario."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The illustrated roadmap below summarizes what we covered each day this week, as we bring our ",(0,n.jsx)(t.strong,{children:"Functions-as-a-Service"})," exploration to a close."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Illustrated recap of Azure Functions Week 1, with sessions on building functions, language-specific guides, and serverless solutions.",src:s(73239).Z+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"advanced-functions-code-samples",children:"Advanced Functions: Code Samples"}),"\n",(0,n.jsx)(t.p,{children:"So, now that we've got our first Functions app under our belt, and validated our local development setup for tooling, where can we go next? A good next step is to explore different triggers and bindings, that drive richer end-to-end scenarios. For example:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-twitter-email?WT.mc_id=javascript-99907-cxa",children:(0,n.jsx)(t.strong,{children:"Integrate Functions with Azure Logic Apps"})})," - we'll discuss Azure Logic Apps in Week 3. For now, think of it as a ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/azure/logic-apps/logic-apps-overview?WT.mc_id=javascript-99907-cxa",children:"workflow automation"})," tool that lets you integrate seamlessly with other supported Azure services to drive an end-to-end scenario. In this tutorial, we set up a workflow connecting Twitter (get tweet) to Azure Cognitive Services (analyze sentiment) - and use that to trigger an Azure Functions app to send email about the result."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/azure/event-grid/resize-images-on-storage-blob-upload-event?tabs=nodejsv10&WT.mc_id=javascript-99907-cxa",children:(0,n.jsx)(t.strong,{children:"Integrate Functions with Event Grid"})})," - we'll discuss Azure Event Grid in Week 3. For now, think of it as an eventing service connecting event sources (publishers) to event handlers (subscribers) at cloud scale. In this tutorial, we handle a common use case - a workflow where loading an image to Blob Storage triggers an Azure Functions app that implements a ",(0,n.jsx)(t.a,{href:"https://github.com/Azure-Samples/storage-blob-resize-function-node",children:"resize function"}),", helping automatically generate thumbnails for the uploaded image."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/training/modules/automatic-update-of-a-webapp-using-azure-functions-and-signalr/?WT.mc_id=javascript-99907-cxa",children:(0,n.jsx)(t.strong,{children:"Integrate Functions with CosmosDB and SignalR"})})," to bring real-time push-based notifications to your web app. It achieves this by using a Functions app that is triggered by changes in a CosmosDB backend, causing it to broadcast that update (",(0,n.jsx)(t.em,{children:"push notification"})," to connected web clients over SignalR, in real time."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Want more ideas? Check out the ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/samples/browse/?products=azure-functions&WT.mc_id=javascript-99907-cxa",children:"Azure Samples for Functions"})," for implementations, and browse the ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/azure/architecture/browse/?expanded=azure&products=azure-functions&WT.mc_id=javascript-99907-cxa",children:"Azure Architecture Center"})," for reference architectures from real-world scenarios that involve Azure Functions usage."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"e2e-scenarios-hacks--cloud-skills",children:"E2E Scenarios: Hacks & Cloud Skills"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Want to systematically work your way through a single End-to-End scenario involving Azure Functions alongside other serverless support technologies?"})," Check out the ",(0,n.jsx)(t.a,{href:"/serverless-september/ServerlessHacks",children:"Serverless Hacks"})," activity happening during #ServerlessSeptember, and learn to build this ",(0,n.jsx)(t.strong,{children:'"Serverless Tollbooth Application"'})," in a series of 10 challenges. Check out the ",(0,n.jsx)(t.a,{href:"https://aka.ms/serverless-september/videos",children:"video series for a reference solution in .NET"})," and sign up for weekly office hours to join peers and discuss your solutions or challenges."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"System architecture showing Azure services like Event Grid, Functions, and Computer Vision API for extracting and managing toll booth data.",src:s(89292).Z+"",width:"1908",height:"994"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Or perhaps you prefer to learn core concepts with code in a structured learning path?"})," We have that covered. Check out the ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/training/paths/create-serverless-applications/?WT.mc_id=javascript-99907-cxa",children:"12-module"})," ",(0,n.jsx)(t.strong,{children:'"Create Serverless Applications"'})," course from Microsoft Learn which walks your through concepts, one at a time, with code. Even better - ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-99907-ninarasi",children:"sign up for the free Cloud Skills Challenge"})," and ",(0,n.jsx)(t.em,{children:"complete the same path"})," (in under 30 days) but this time, with the added fun of competing against your peers for a spot on a leaderboard, and swag."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"whats-next-hello-cloud-native",children:"What's Next? Hello, Cloud-Native!"}),"\n",(0,n.jsxs)(t.p,{children:["So where to next? In Week 2 we turn our attention from ",(0,n.jsx)(t.em,{children:"Functions-as-a-Service"})," to building more complex backends using ",(0,n.jsx)(t.em,{children:"Containers and Microservices"}),". We'll focus on two core technologies - ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/azure/container-apps/?WT.mc_id=javascript-99907-ninarasi",children:"Azure Container Apps"})," and ",(0,n.jsx)(t.a,{href:"https://docs.dapr.io/?WT.mc_id=javascript-99907-ninarasi",children:"Dapr"})," (Distributed Application Runtime) - both key components of a broader vision around ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://azure.microsoft.com/solutions/cloud-native-apps/?WT.mc_id=javascript-99907-ninarasi",children:"Building Cloud-Native Applications in Azure"})}),"."]}),"\n",(0,n.jsx)(t.p,{children:"What is Cloud-Native you ask?"}),"\n",(0,n.jsxs)(t.p,{children:["Fortunately for you, we have an excellent introduction in our Zero-to-Hero article on ",(0,n.jsx)(t.a,{href:"/blog/zero2hero-aca-01",children:"Go Cloud-Native with Azure Container Apps"})," - that explains the ",(0,n.jsx)(t.strong,{children:"5 pillars of Cloud-Native"})," and highlights the value of Azure Container Apps (scenarios) and Dapr (sidecar architecture) for simplified microservices-based solution with auto-scale capability. Prefer a visual summary? Here's an illustrate guide to that article for convenience."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Go Cloud-Native",src:s(29426).Z+"",width:"1024",height:"1024"})," ",(0,n.jsx)(t.a,{target:"_blank",href:s(75349).Z+"",children:(0,n.jsx)(t.strong,{children:"Download a higher resolution version of the image"})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"take-the-challenge",children:(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-99907-ninarasi",children:"Take The Challenge"})}),"\n",(0,n.jsx)(t.p,{children:"We typically end each post with an exercise or activity to reinforce what you learned. For Week 1, we encourage you to take the Cloud Skills Challenge and work your way through at least a subset of the modules, for hands-on experience with the different Azure Functions concepts, integrations, and usage."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"See you in Week 2!"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75349:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/files/Go-Cloud-Native-orig-02eae8571b232d447aef410a525763f7.png"},99143:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/banner-90895ff214888259c44f6d70b6646e1c.png"},55742:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/banner-90895ff214888259c44f6d70b6646e1c.png"},29426:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Go-Cloud-Native-f6ac3225c3d9741a1fbff81030f7f830.png"},73239:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/roadmap-Week1-e6f2178c0374c42ef50be53bee433ad9.png"},89292:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/wth-serverless-78cb1c6f4c8f3b2997e9a8a9aee4de1b.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var n=s(67294);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);