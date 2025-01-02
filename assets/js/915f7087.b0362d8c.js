"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25743],{78815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(85893),r=n(11151);const s={slug:"zero2hero-func-05",title:"\ud83d\ude80 | Error Handling w/ Apache Kafka",authors:["ramya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/zero-to-hero-david.png",description:"Recently we have launched the Apache Kafka extension for Azure functions in GA with some cool new features like deserialization of Avro Generic records and Kafka headers support. Let's learn more about it.",tags:["serverless-september","zero-to-hero","azure-functions"]},a=void 0,i={permalink:"/Cloud-Native/blog/zero2hero-func-05",source:"@site/blog/zero-to-hero/2022-09-19-azurefunctions.md",title:"\ud83d\ude80 | Error Handling w/ Apache Kafka",description:"Recently we have launched the Apache Kafka extension for Azure functions in GA with some cool new features like deserialization of Avro Generic records and Kafka headers support. Let's learn more about it.",date:"2022-09-19T00:00:00.000Z",formattedDate:"September 19, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"zero-to-hero",permalink:"/Cloud-Native/blog/tags/zero-to-hero"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"}],readingTime:5.385,hasTruncateMarker:!1,authors:[{name:"Ramya Oruganti",title:"Senior PM, Azure Functions @Microsoft",url:"https://twitter.com/ramyaoncloud",imageURL:"https://pbs.twimg.com/profile_images/588627587435397120/vuA4BT3a_400x400.jpg",key:"ramya"}],frontMatter:{slug:"zero2hero-func-05",title:"\ud83d\ude80 | Error Handling w/ Apache Kafka",authors:["ramya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/zero-to-hero-david.png",description:"Recently we have launched the Apache Kafka extension for Azure functions in GA with some cool new features like deserialization of Avro Generic records and Kafka headers support. Let's learn more about it.",tags:["serverless-september","zero-to-hero","azure-functions"]},unlisted:!1,prevItem:{title:"20. Integrate with Microsoft Graph",permalink:"/Cloud-Native/blog/20-events-graph"},nextItem:{title:"\ud83d\ude80 | Observability with ACA",permalink:"/Cloud-Native/blog/zero2hero-aca-06"}},c={image:n(91871).Z,authorsImageUrls:[void 0]},l=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Retry Policy support",id:"retry-policy-support",level:2},{value:"AutoOffsetReset property",id:"autooffsetreset-property",level:2},{value:"Key support for Kafka messages",id:"key-support-for-kafka-messages",level:2},{value:"Conclusion:",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s,{children:[(0,o.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/zero2hero-func-05"}),(0,o.jsx)("meta",{name:"twitter:title",content:"#ZeroToHero: Error Handling with Apache Kafka extension for Azure Functions "}),(0,o.jsx)("meta",{name:"twitter:description",content:"#ZeroToHero: Error Handling with Apache Kafka extension for Azure Functions "}),(0,o.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/serverless-zero2hero.png"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,o.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.jsx)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/error-handling-with-apache-kafka-extension-for-azure-functions/ba-p/3628936"})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["Welcome to ",(0,o.jsx)(t.code,{children:"Day 19"})," of #30DaysOfServerless!"]}),"\n",(0,o.jsxs)(t.p,{children:["Today, we have a special set of posts from our ",(0,o.jsx)(t.a,{href:"/serverless-september/ZeroToHero",children:"Zero To Hero \ud83d\ude80"})," initiative, featuring blog posts authored by our Product Engineering teams for #ServerlessSeptember. ",(0,o.jsxs)(t.em,{children:["Posts were originally published on the ",(0,o.jsx)(t.a,{href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/error-handling-with-apache-kafka-extension-for-azure-functions/ba-p/3628936?WT.mc_id=javascript-99907-cxa",children:"Apps on Azure"})," blog on Microsoft Tech Community."]})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Retry Policy Support - in Apache Kafka Extension"}),"\n",(0,o.jsx)(t.li,{children:"AutoOffsetReset property - in Apache Kafka Extension"}),"\n",(0,o.jsx)(t.li,{children:"Key support for Kafka messages - in Apache Kafka Extension"}),"\n",(0,o.jsx)(t.li,{children:"References: Apache Kafka Extension for Azure Functions"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Error handling strategies in Azure Functions using Kafka Extension by Ramya Oruganti.",src:n(38560).Z+"",width:"1600",height:"672"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["Recently we launched the ",(0,o.jsx)(t.a,{href:"https://github.com/Azure/azure-functions-kafka-extension",children:"Apache Kafka extension for Azure functions"})," in GA with some cool new features like deserialization of Avro Generic records and Kafka headers support. We received great responses - so we're back with more updates!"]})}),"\n",(0,o.jsx)(t.h2,{id:"retry-policy-support",children:"Retry Policy support"}),"\n",(0,o.jsx)(t.p,{children:"Handling errors in Azure Functions is important to avoid data loss or miss events or monitor the health of an application. Apache Kafka Extension for Azure Functions supports retry policy which tells the runtime to rerun a failed execution until either successful completion occurs or the maximum number of retries is reached."}),"\n",(0,o.jsx)(t.p,{children:"A retry policy is evaluated when a trigger function raises an uncaught exception. As a best practice, you should catch all exceptions in your code and rethrow any errors that you want to result in a retry."}),"\n",(0,o.jsx)(t.p,{children:"There are two retry strategies supported by policy that you can configure :- fixed delay and exponential backoff"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Fixed Delay"})," -  A specified amount of time is allowed to elapse between each retry."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Exponential Backoff"})," - The first retry waits for the minimum delay. On subsequent retries, time is added exponentially to the initial duration for each retry, until the maximum delay is reached. Exponential back-off adds some small randomization to delays to stagger retries in high-throughput scenarios."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"Please Note",type:"info",children:(0,o.jsxs)(t.p,{children:["Retry Policy for Kafka extension ",(0,o.jsx)(t.strong,{children:"is NOT supported"})," for C# (in proc and out proc) trigger and output binding. This is supported for languages like Java, Node (JS , TypeScript), PowerShell and Python trigger and output bindings."]})}),"\n",(0,o.jsx)(t.p,{children:"Here is the sample code view of exponential backoff retry strategy"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Error Handling with Apache Kafka extension for Azure Functions",src:n(35051).Z+"",width:"400",height:"239"})}),"\n",(0,o.jsx)(t.h2,{id:"autooffsetreset-property",children:"AutoOffsetReset property"}),"\n",(0,o.jsx)(t.p,{children:"AutoOffsetReset property enables customers to configure the behaviour in the absence of an initial offset. Imagine a scenario when there is a need to change consumer group name. The consumer connected using a new consumer group had to reprocess all events starting from the oldest (earliest) one,  as this was the default one and this setting wasn\u2019t exposed as configurable option in the Apache Kafka extension for Azure Functions(previously). With the help of this kafka setting you can configure on how to start processing events for newly created consumer groups."}),"\n",(0,o.jsx)(t.p,{children:"Due to lack of the ability to configure this setting, offset commit errors were causing topics to restart from earliest offset\xb7 Users were looking to be able to set  offset setting  to either latest or earliest  based on their requirements."}),"\n",(0,o.jsx)(t.p,{children:"We are happy to share that we have enabled the AutoOffsetReset setting as a configurable one to either - Earliest(Default) and Latest. Setting the value to Earliest configures the consumption of the messages from the the earliest/smallest offset or beginning of the topic partition. Setting the property to Latest configures the consumption of the messages from the latest/largest offset or from the end of the topic partition. This is supported for all the Azure Functions supported languages (C# (in & out), Java, Node (JS and TypeScript), PowerShell and python) and can be used for both triggers and output binding"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Error Handling with Apache Kafka extension for Azure Functions",src:n(44083).Z+"",width:"400",height:"175"})}),"\n",(0,o.jsx)(t.h2,{id:"key-support-for-kafka-messages",children:"Key support for Kafka messages"}),"\n",(0,o.jsxs)(t.p,{children:["With keys the producer/output binding can be mapped to broker and partition to write based on the message. So alongside the message value, we can choose to send a message key and that key can be whatever you want it could be a string, it could be a number . In case  you don\u2019t send the key, the key is set to null then the data will be sent in a ",(0,o.jsx)(t.a,{href:"https://www.geeksforgeeks.org/round-robin-scheduling-with-different-arrival-times/",children:"Round Robin"})," fashion to make it very simple. ",(0,o.jsx)(t.strong,{children:"But in case you send a key with your message"}),", all the messages that share the same key will always go to the same partition and thus you can enable grouping of similar messages into partitions"]}),"\n",(0,o.jsx)(t.p,{children:"Previously while consuming a Kafka event message using the Azure Function kafka extension, the event key was always none although the key was present in the event message."}),"\n",(0,o.jsx)(t.p,{children:"Key support was implemented in the extension which enables customers to set/view key in the Kafka event messages coming in to the kafka trigger and set keys to the messages going in to kafka topics (with keys set) through output binding. Therefore key support was enabled in the extension to support both trigger and output binding for all Azure Functions supported languages ( (C# (in & out), Java, Node (JS and TypeScript), PowerShell and python)"}),"\n",(0,o.jsx)(t.p,{children:"Here is the view of an output binding producer code where Kafka messages are being set with key"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Error Handling with Apache Kafka extension for Azure Functions",src:n(84736).Z+"",width:"400",height:"284"})}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion:"}),"\n",(0,o.jsx)(t.p,{children:"In this article you have learnt about the latest additions to the Apache Kafka extension for Azure Functions. Incase you have been waiting for these features to get released or need them you are all set and please go head and try them out!! They are available in the latest extension bundles"}),"\n",(0,o.jsx)(t.admonition,{title:"Want to learn more?",type:"info",children:(0,o.jsxs)(t.p,{children:["Please refer to ",(0,o.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-bindings-kafka?tabs=in-process%2Cportal&pivots=programming-language-csharp",children:"Apache Kafka bindings for Azure Functions"})," | Microsoft Docs for detail documentation, samples on the Azure function supported languages and more!"]})}),"\n",(0,o.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-bindings-kafka?tabs=in-process%2Cportal&pivots=programming-language-csharp",children:"Apache Kafka bindings for Azure Functions | Microsoft Docs"})}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"FEEDBACK WELCOME",type:"tip",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If you would like to provide feedback on Kafka trigger extension, please post them to our GitHub repository- Issues \xb7 ",(0,o.jsx)(t.a,{href:"https://github.com/Azure/azure-functions-kafka-extension/issues",children:"Azure/azure-functions-kafka-extension (github.com)"})]}),"\n",(0,o.jsxs)(t.li,{children:["This extension is being developed in the open-source community. Please contribute, try out and post any issues on the ",(0,o.jsx)(t.a,{href:"https://github.com/Azure/azure-functions-kafka-extension",children:"Azure Functions Kafka extension GitHub repo"})]}),"\n"]})}),"\n",(0,o.jsxs)(t.p,{children:["Keep in touch with us on Twitter via ",(0,o.jsx)(t.a,{href:"https://twitter.com/AzureFunctions",children:"@AzureFunctions"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},91871:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/zero-to-hero-david-2236e6d82fe0064fef5a652807264fd7.png"},38560:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ramya-functions-kafka-5a847320c1814350e946ac762907c8e3.png"},35051:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ramya-kafka-1-f619e8e934a373383a58a0b2c69dd146.png"},44083:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ramya-kafka-2-55db6b33ea9564e6af55bd6dfca64f89.png"},84736:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ramya-kafka-3-3e5a8fd156c09ad453e579efcbab521b.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var o=n(67294);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);