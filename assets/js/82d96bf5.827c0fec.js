"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43333],{11904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(85893),i=t(11151);const r={slug:"05-functions-js",title:"05. Functions for JS Devs",authors:["aaron"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Introduction to Azure Functions, from core concepts to hello world!",tags:["serverless-september","30-days-of-serverless","azure-functions","azure-container-apps","javascript"]},o=void 0,a={permalink:"/Cloud-Native/blog/05-functions-js",source:"@site/blog/2022-09-05/index.md",title:"05. Functions for JS Devs",description:"Introduction to Azure Functions, from core concepts to hello world!",date:"2022-09-05T00:00:00.000Z",formattedDate:"September 5, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"javascript",permalink:"/Cloud-Native/blog/tags/javascript"}],readingTime:6.825,hasTruncateMarker:!1,authors:[{name:"Aaron Powell",title:"Principal Cloud Advocate @Microsoft",url:"https://github.com/aaronpowell",imageURL:"https://github.com/aaronpowell.png",key:"aaron"}],frontMatter:{slug:"05-functions-js",title:"05. Functions for JS Devs",authors:["aaron"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Introduction to Azure Functions, from core concepts to hello world!",tags:["serverless-september","30-days-of-serverless","azure-functions","azure-container-apps","javascript"]},unlisted:!1,prevItem:{title:"\ud83d\ude80 | Go Cloud-Native with ACA",permalink:"/Cloud-Native/blog/zero2hero-aca-01"},nextItem:{title:"04. Functions For Java Devs",permalink:"/Cloud-Native/blog/04-functions-java"}},c={image:t(37434).Z,authorsImageUrls:[void 0]},l=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Developer Guidance",id:"developer-guidance",level:2},{value:"Node.js 18 Support",id:"nodejs-18-support",level:3},{value:"Scenario: Calling The GitHub API",id:"scenario-calling-the-github-api",level:2},{value:"Creating the Azure Function",id:"creating-the-azure-function",level:3},{value:"Adding a HTTP Trigger",id:"adding-a-http-trigger",level:3},{value:"Calling an external API",id:"calling-an-external-api",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Other Triggers, Bindings",id:"other-triggers-bindings",level:3},{value:"Scenarios with Integrations",id:"scenarios-with-integrations",level:3},{value:"Exercise: Support searching",id:"exercise-support-searching",level:2},{value:"Resources",id:"resources",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r,{children:[(0,s.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/05-functions-js"}),(0,s.jsx)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Azure Functions for JavaScript Developers"}),(0,s.jsx)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Azure Functions for JavaScript Developers"}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,s.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,s.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/05-functions-js"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["Welcome to ",(0,s.jsx)(n.code,{children:"Day 5"})," of #30DaysOfServerless!"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Yesterday"})," we looked at Azure Functions from the perspective of a Java developer. ",(0,s.jsx)(n.em,{children:"Today"}),", we'll do a similar walkthrough from the perspective of a JavaScript developer."]}),"\n",(0,s.jsxs)(n.p,{children:["And, we'll use this to explore another popular usage scenario for Azure Functions: ",(0,s.jsx)(n.strong,{children:"building a serverless HTTP API using JavaScript"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Ready? Let's go."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Developer Guidance"}),"\n",(0,s.jsx)(n.li,{children:"Create Azure Function with CLI"}),"\n",(0,s.jsx)(n.li,{children:"Calling an external API"}),"\n",(0,s.jsx)(n.li,{children:"Azure Samples & Scenarios for JS"}),"\n",(0,s.jsx)(n.li,{children:"Exercise: Support searching"}),"\n",(0,s.jsx)(n.li,{children:"Resources: For self-study!"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Serverless September slide featuring Aaron Powell presenting Azure Functions for JavaScript Developers, with Node.js and CLI usage highlights.",src:t(80941).Z+"",width:"1600",height:"672"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"developer-guidance",children:"Developer Guidance"}),"\n",(0,s.jsxs)(n.p,{children:["If you're a JavaScript developer new to serverless on Azure, start by exploring the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-reference-node?tabs=v2-v3-v4-export%2Cv2-v3-v4-done%2Cv2%2Cv2-log-custom-telemetry%2Cv2-accessing-request-and-response%2Cwindows-setting-the-node-version&WT.mc_id=javascript-99907-cxa",children:"Azure Functions JavaScript Developers Guide"}),". It covers:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Quickstarts for Node.js - using Visual Code, CLI or Azure Portal"}),"\n",(0,s.jsx)(n.li,{children:"Guidance on hosting options and performance considerations"}),"\n",(0,s.jsxs)(n.li,{children:["Azure Functions ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings?tabs=javascript#bindings-code-examples?WT.mc_id=javascript-99907-cxa",children:"bindings"})," and (",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/samples/browse/?products=azure-functions&languages=javascript&WT.mc_id=javascript-99907-cxa",children:"code samples"}),") for JavaScript"]}),"\n",(0,s.jsx)(n.li,{children:"Scenario examples - integrations with other Azure Services"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"nodejs-18-support",children:"Node.js 18 Support"}),"\n",(0,s.jsx)(n.admonition,{title:"Node.js 18 Support (Public Preview)",type:"info",children:(0,s.jsxs)(n.p,{children:["Azure Functions support for Node.js 18 ",(0,s.jsx)(n.a,{href:"https://azure.microsoft.com/updates/public-preview-nodejs-18-in-azure-functions/?WT.mc_id=javascript-99907-cxa",children:"entered Public Preview on Aug 31, 2022"})," and is supported by the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-versions?tabs=azure-cli%2Cin-process%2Cv4&pivots=programming-language-javascript&WT.mc_id=javascript-99907-cxa",children:"Azure Functions v.4.x runtime!"})]})}),"\n",(0,s.jsxs)(n.p,{children:["As we continue to explore how we can use Azure Functions, today we're going to look at using JavaScript to create one, and we're going to be using the newly released ",(0,s.jsx)(n.strong,{children:"Node.js 18 support for Azure Functions"})," to make the most out of the platform."]}),"\n",(0,s.jsx)(n.p,{children:"Ensure you have Node.js 18 and Azure Functions v4.x versions installed, along with a text editor (I'll use VS Code in this post), and a terminal, then we're ready to go."}),"\n",(0,s.jsx)(n.h2,{id:"scenario-calling-the-github-api",children:"Scenario: Calling The GitHub API"}),"\n",(0,s.jsx)(n.p,{children:"The application we're going to be building today will use the GitHub API to return a random commit message, so that we don't need to come up with one ourselves! After all, naming things can be really hard! \ud83e\udd23"}),"\n",(0,s.jsx)(n.h3,{id:"creating-the-azure-function",children:"Creating the Azure Function"}),"\n",(0,s.jsxs)(n.p,{children:["To create our Azure Function, we're going to use the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash&WT.mc_id=javascript-99907-cxa",children:"Azure Functions CLI"}),", which we can install using npm:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install --global azure-function-core-tools\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once that's installed, we can use the new ",(0,s.jsx)(n.code,{children:"func"})," command to initalise our project:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"func init --worker-runtime node --language javascript\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When running ",(0,s.jsx)(n.code,{children:"func init"})," we can either provide the ",(0,s.jsx)(n.code,{children:"worker-runtime"})," and ",(0,s.jsx)(n.code,{children:"language"})," as arguments, or use the menu system that the tool will provide us. For brevity's stake, I've used the arguments here, specifying that we want ",(0,s.jsx)(n.code,{children:"node"})," as the runtime and ",(0,s.jsx)(n.code,{children:"javascript"})," as the language, but you could change that to ",(0,s.jsx)(n.code,{children:"typescript"})," if you'd prefer to use TypeScript."]}),"\n",(0,s.jsxs)(n.p,{children:["Once the ",(0,s.jsx)(n.code,{children:"init"})," command is completed, you should have a ",(0,s.jsx)(n.code,{children:".vscode"})," folder, and the files ",(0,s.jsx)(n.code,{children:".gitignore"}),", ",(0,s.jsx)(n.code,{children:"host.json"}),", ",(0,s.jsx)(n.code,{children:"local.settings.json"}),", and ",(0,s.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Files generated by func init",src:t(13059).Z+"#gh-light-mode-only",width:"393",height:"145"}),(0,s.jsx)(n.img,{alt:"Files generated by func init",src:t(34368).Z+"#gh-dark-mode-only",width:"398",height:"151"})]}),"\n",(0,s.jsx)(n.h3,{id:"adding-a-http-trigger",children:"Adding a HTTP Trigger"}),"\n",(0,s.jsxs)(n.p,{children:["We have an empty Functions app so far, what we need to do next is create a Function that it will run, and we're going to make a HTTP Trigger Function, which is a Function that responds to HTTP requests. We'll use the ",(0,s.jsx)(n.code,{children:"func new"})," command to create that:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'func new --template "HTTP Trigger" --name "get-commit-message"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When this completes, we'll have a folder for the Function, using the name we provided, that contains the files",(0,s.jsx)(n.code,{children:"function.json"})," and ",(0,s.jsx)(n.code,{children:"index.js"}),". Let's open the ",(0,s.jsx)(n.code,{children:"function.json"})," to understand it a little bit:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "bindings": [\n    {\n      "authLevel": "function",\n      "type": "httpTrigger",\n      "direction": "in",\n      "name": "req",\n      "methods": [\n        "get",\n        "post"\n      ]\n    },\n    {\n      "type": "http",\n      "direction": "out",\n      "name": "res"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This file is used to tell Functions about the Function that we've created and what it does, so it knows to handle the appropriate events. We have a ",(0,s.jsx)(n.code,{children:"bindings"})," node which contains the event bindings for our Azure Function. The first binding is using the ",(0,s.jsx)(n.code,{children:"type"})," ",(0,s.jsx)(n.code,{children:"httpTrigger"}),", which indicates that it'll be executed, or ",(0,s.jsx)(n.em,{children:"triggered"}),", by a HTTP event, and the ",(0,s.jsx)(n.code,{children:"methods"})," indicates that it's listening to both ",(0,s.jsx)(n.strong,{children:"GET"})," and ",(0,s.jsx)(n.strong,{children:"POST"})," (you can change this for the right HTTP methods that you want to support). The HTTP request information will be bound to a property in the Functions context called ",(0,s.jsx)(n.code,{children:"req"}),", so we can access query strings, the request body, etc."]}),"\n",(0,s.jsxs)(n.p,{children:["The other binding we have has the direction of ",(0,s.jsx)(n.code,{children:"out"}),", meaning that it's something that the Function will ",(0,s.jsx)(n.em,{children:"return"})," to the called, and since this is a HTTP API, the ",(0,s.jsx)(n.code,{children:"type"})," is ",(0,s.jsx)(n.code,{children:"http"}),", indicating that we'll return a HTTP response, and that response will be on a property called ",(0,s.jsx)(n.code,{children:"res"})," that we add to the Functions context."]}),"\n",(0,s.jsx)(n.p,{children:"Let's go ahead and start the Function and call it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"func start\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Starting the Function",src:t(45641).Z+"#gh-light-mode-only",width:"979",height:"332"}),(0,s.jsx)(n.img,{alt:"Starting the Function",src:t(1670).Z+"#gh-dark-mode-only",width:"977",height:"321"})]}),"\n",(0,s.jsxs)(n.p,{children:["With the Function started, access the endpoint ",(0,s.jsx)(n.code,{children:"http://localhost:7071/api/get-commit-message"})," via a browser or using ",(0,s.jsx)(n.code,{children:"cURL"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:7071/api/get-commit-message\\?name\\=ServerlessSeptember\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Hello from Azure Functions",src:t(21597).Z+"#gh-light-mode-only",width:"1327",height:"94"}),(0,s.jsx)(n.img,{alt:"Hello from Azure Functions",src:t(13507).Z+"#gh-dark-mode-only",width:"1356",height:"45"})]}),"\n",(0,s.jsx)(n.admonition,{title:"\ud83c\udf89 CONGRATULATIONS",type:"success",children:(0,s.jsx)(n.p,{children:"You created and ran a JavaScript function app locally!"})}),"\n",(0,s.jsx)(n.h3,{id:"calling-an-external-api",children:"Calling an external API"}),"\n",(0,s.jsxs)(n.p,{children:["It's time to update the Function to do what we want to do - call the GitHub Search API and get some commit messages. The endpoint that we'll be calling is ",(0,s.jsxs)(n.a,{href:"https://api.github.com/search/commits?q=language:javascript",children:["https://api.github.com/search/commits?q=language",":javascript"]}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Note: The GitHub API is ",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting",children:"rate limited"})," and this sample will call it unauthenticated, so be aware of that in your own testing."]})}),"\n",(0,s.jsxs)(n.p,{children:["To call this API, we'll leverage the newly released ",(0,s.jsxs)(n.a,{href:"https://nodejs.org/en/blog/announcements/v18-release-announce/#fetch-experimental",children:[(0,s.jsx)(n.code,{children:"fetch"})," support in Node 18"]})," and ",(0,s.jsx)(n.code,{children:"async"}),"/",(0,s.jsx)(n.code,{children:"await"}),", to make for a very clean Function."]}),"\n",(0,s.jsxs)(n.p,{children:["Open up the ",(0,s.jsx)(n.code,{children:"index.js"})," file, and delete the contents of the existing ",(0,s.jsx)(n.code,{children:"Function"}),", so we have a empty one:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"module.exports = async function (context, req) {\n\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"The default template uses CommonJS, but you can use ES Modules with Azure Functions if you prefer."})}),"\n",(0,s.jsxs)(n.p,{children:["Now we'll use ",(0,s.jsx)(n.code,{children:"fetch"})," to call the API, and unpack the JSON response:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'module.exports = async function (context, req) {\n    const res = await fetch("https://api.github.com/search/commits?q=language:javascript");\n    const json = await res.json();\n    const messages = json.items.map(item => item.commit.message);\n    context.res = {\n        body: {\n            messages\n        }\n    };\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To send a response to the client, we're setting the ",(0,s.jsx)(n.code,{children:"context.res"})," property, where ",(0,s.jsx)(n.code,{children:"res"})," is the name of the output binding in our ",(0,s.jsx)(n.code,{children:"function.json"}),", and giving it a body that contains the commit messages."]}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"func start"})," again, and call the endpoint:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:7071/api/get-commit-message\n"})}),"\n",(0,s.jsx)(n.p,{children:"The you'll get some commit messages:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"A series of commit messages from the GitHub Search API",src:t(67227).Z+"#gh-light-mode-only",width:"1085",height:"741"}),(0,s.jsx)(n.img,{alt:"A series of commit messages from the GitHub Search API",src:t(44446).Z+"#gh-dark-mode-only",width:"1877",height:"690"})]}),"\n",(0,s.jsx)(n.admonition,{title:"\ud83c\udf89 CONGRATULATIONS",type:"success",children:(0,s.jsxs)(n.p,{children:["There we go, we've created an Azure Function which is used as a proxy to another API, that we call (using native ",(0,s.jsx)(n.code,{children:"fetch"})," in Node.js 18) and from which we return a subset of the JSON payload."]})}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(n.h3,{id:"other-triggers-bindings",children:"Other Triggers, Bindings"}),"\n",(0,s.jsx)(n.p,{children:"This article focused on using the HTTPTrigger and relevant bindings, to build a serverless API using Azure Functions. How can you explore other supported bindings, with code samples to illustrate usage?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Start with the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings?tabs=javascript#bindings-code-examples?WT.mc_id=javascript-99907-cxa",children:"Bindings"})," documentation to get a list of supported triggers/bindings for JavaScript"]}),"\n",(0,s.jsxs)(n.li,{children:["Explore the ",(0,s.jsx)(n.a,{href:"https://www.serverlesslibrary.net/?language=JavaScript",children:"Azure serverless community library"})," and ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/samples/browse/?products=azure-functions&languages=javascript&WT.mc_id=javascript-99907-cxa",children:"Azure Samples"})," resources by technology."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"scenarios-with-integrations",children:"Scenarios with Integrations"}),"\n",(0,s.jsx)(n.p,{children:"Once you've tried out the samples, try building an end-to-end scenario by using these triggers to integrate seamlessly with other services. Here are some suggestions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-queue?tabs=in-process%2Cextensionv5%2Cextensionv3&pivots=programming-language-javascript&WT.mc_id=javascript-99907-cxa",children:"Azure Queue storage trigger and bindings"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-signalr/signalr-quickstart-azure-functions-javascript?toc=%2Fazure%2Fazure-functions%2Ftoc.json&WT.mc_id=javascript-99907-cxa",children:"Show GitHub start count with Azure SignalR service"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/developer/javascript/how-to/with-web-app/graphql/azure-function-hello-world?tabs=visualstudiocode&WT.mc_id=javascript-99907-cxa",children:"Deploy a GraphQL API as an Azure Function"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exercise-support-searching",children:"Exercise: Support searching"}),"\n",(0,s.jsxs)(n.p,{children:["The GitHub Search API allows you to provide search parameters via the ",(0,s.jsx)(n.code,{children:"q"})," query string. In this sample, we hard-coded it to be ",(0,s.jsx)(n.code,{children:"language:javascript"}),", but as a follow-on exercise, expand the Function to allow the caller to provide the search terms as a query string to the Azure Function, which is passed to the GitHub Search API. Hint - have a look at the ",(0,s.jsx)(n.code,{children:"req"})," argument."]}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://azure.microsoft.com/updates/public-preview-nodejs-18-in-azure-functions/?WT.mc_id=javascript-99907-cxa",children:"Public preview of Node.js 18 for Azure Functions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://nodejs.org/en/blog/announcements/v18-release-announce/#fetch-experimental",children:[(0,s.jsx)(n.code,{children:"fetch"})," support in Node.js 18"]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/learn/modules/shift-nodejs-express-apis-serverless/?WT.mc_id=javascript-99907-cxa",children:"Refactor Node.js and Express APIs to Serverless APIs with Azure Functions"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},37434:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/banner-9887d529ebe65c9a0d6bdc2a9ad3af3d.png"},34368:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/01-4fcbf1e505abbc007af37bacc7f5a648.png"},1670:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/02-fac7c01dc73086fb13b94fce2598287d.png"},13507:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/03-5b84201a90f55af098a07a30fb6f9c27.png"},44446:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/04-a2f00f010001f8e8bdd45e60a8e4fb9d.png"},80941:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/banner-9887d529ebe65c9a0d6bdc2a9ad3af3d.png"},13059:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"},45641:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/02-5465d74b194eeb2b24c1e07527101c4d.png"},21597:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/03-46daa7bf98bd7e984487f9dbac0352f8.png"},67227:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/04-e5fe925bdf149b76462f6d163e70184b.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);