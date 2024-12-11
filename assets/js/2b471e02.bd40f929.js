"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96995],{87606:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(85893),o=t(11151);const i={slug:"03-functions-quickstart",title:"03. Build Your First Function",authors:["nitya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Let's build our first Azure Functions app - and get familiar with the relevant developer tools and resources!",tags:["serverless-september","30-days-of-serverless","azure-functions","vscode","devtools"]},r=void 0,c={permalink:"/Cloud-Native/blog/03-functions-quickstart",source:"@site/blog/2022-09-03/index.md",title:"03. Build Your First Function",description:"Let's build our first Azure Functions app - and get familiar with the relevant developer tools and resources!",date:"2022-09-03T00:00:00.000Z",formattedDate:"September 3, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"},{label:"vscode",permalink:"/Cloud-Native/blog/tags/vscode"},{label:"devtools",permalink:"/Cloud-Native/blog/tags/devtools"}],readingTime:8.24,hasTruncateMarker:!1,authors:[{name:"Nitya Narasimhan",title:"Senior Cloud Advocate, Illustrator",url:"https://github.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"}],frontMatter:{slug:"03-functions-quickstart",title:"03. Build Your First Function",authors:["nitya"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Let's build our first Azure Functions app - and get familiar with the relevant developer tools and resources!",tags:["serverless-september","30-days-of-serverless","azure-functions","vscode","devtools"]},unlisted:!1,prevItem:{title:"04. Functions For Java Devs",permalink:"/Cloud-Native/blog/04-functions-java"},nextItem:{title:"02. Learn Core Concepts",permalink:"/Cloud-Native/blog/02-functions-intro"}},a={image:t(42912).Z,authorsImageUrls:[void 0]},l=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Developer Guidance",id:"developer-guidance",level:2},{value:"My First Function App",id:"my-first-function-app",level:2},{value:"Install VSCode Extension",id:"install-vscode-extension",level:3},{value:"Create First Function App",id:"create-first-function-app",level:3},{value:"Explore the Code",id:"explore-the-code",level:3},{value:"Preview Function App Locally",id:"preview-function-app-locally",level:3},{value:"(Re)Deploy to Azure",id:"redeploy-to-azure",level:3},{value:"About Core Tools",id:"about-core-tools",level:2},{value:"About Local Testing",id:"about-local-testing",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i,{children:[(0,s.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/03-functions-quickstart"}),(0,s.jsx)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Build Your First Function"}),(0,s.jsx)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Build Your First Function"}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,s.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,s.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/03-functions-quickstart"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["Welcome to ",(0,s.jsx)(n.code,{children:"Day 3"})," of #30DaysOfServerless!"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Yesterday"})," we learned core concepts and terminology for Azure Functions, the signature ",(0,s.jsx)(n.em,{children:"Functions-as-a-Service"})," option on Azure. ",(0,s.jsx)(n.em,{children:"Today"})," we take our first steps into building and deploying an Azure Functions app, and validate local development setup."]}),"\n",(0,s.jsx)(n.p,{children:"Ready? Let's go."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Review the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-reference?tabs=blob&WT.mc_id=javascript-99907-ninarasi",children:"Azure Functions Developer Guide"})]}),"\n",(0,s.jsxs)(n.li,{children:["Build your first Function App ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-node?WT.mc_id=javascript-99907-ninarasi",children:"with VS Code"})]}),"\n",(0,s.jsxs)(n.li,{children:["Develop locally ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2",children:"using Azure Functions Core Tools"})]}),"\n",(0,s.jsxs)(n.li,{children:["Review ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-develop-local?WT.mc_id=javascript-99907-ninarasi",children:"Local Testing & Development"})," guidelines"]}),"\n",(0,s.jsxs)(n.li,{children:["Check out the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/durable/quickstart-js-vscode?WT.mc_id=javascript-99907-ninarasi",children:"Durable Functions Quickstart"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Exercise"}),": Take the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-99907-ninarasi",children:"Cloud Skills Challenge"}),"!"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Resources"}),": ",(0,s.jsx)(n.a,{href:"https://aka.ms/30DaysOfServerless/collection",children:"#30DaysOfServerless Collection"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Serverless September slide featuring Nitya Narasimhan&#39;s session on Azure Functions: Build Your First Function, with app structure tips.",src:t(6459).Z+"",width:"1600",height:"672"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"developer-guidance",children:"Developer Guidance"}),"\n",(0,s.jsxs)(n.p,{children:["Before we jump into development, let's familiarize ourselves with language-specific guidance from the Azure Functions Developer Guide. We'll review the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-reference?tabs=blob&WT.mc_id=javascript-99907-ninarasi",children:"JavaScript version"})," but guides for F#, Java, Python, C# and PowerShell are also available."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"function"})," is defined by two things: ",(0,s.jsx)(n.em,{children:"code"})," (written in a supported programming language) and ",(0,s.jsx)(n.em,{children:"configuration"})," (specified in a ",(0,s.jsx)(n.code,{children:"functions.json"})," file, declaring the triggers, bindings and other context for execution)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"function app"})," is the ",(0,s.jsx)(n.em,{children:"unit of deployment"})," for your functions, and is associated with a single execution context or runtime. It can contain multiple functions, but they ",(0,s.jsx)(n.em,{children:"must"})," be in the same language."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"host configuration"})," is ",(0,s.jsx)(n.em,{children:"runtime-specific configuration"})," that affects all functions running in a given function app instance. It is defined in a ",(0,s.jsx)(n.code,{children:"host.json"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A recommended ",(0,s.jsx)(n.strong,{children:"folder structure"})," is defined for the function app, but may vary based on the programming language used. Check ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-reference?tabs=blob#folder-structure&WT.mc_id=javascript-99907-ninarasi",children:"the documentation on folder structures"})," to learn the default for ",(0,s.jsx)(n.em,{children:"your"})," preferred language."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Here's an ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-reference-node?WT.mc_id=javascript-99907-ninarasi",children:"example of the JavaScript folder structure"})," for a function app containing two functions with some shared dependencies. Note that ",(0,s.jsx)(n.code,{children:"host.json"})," (runtime configuration) is defined once, in the root directory. And ",(0,s.jsx)(n.code,{children:"function.json"})," is defined separately for each function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"FunctionsProject\n | - MyFirstFunction\n | | - index.js\n | | - function.json\n | - MySecondFunction\n | | - index.js\n | | - function.json\n | - SharedCode\n | | - myFirstHelperFunction.js\n | | - mySecondHelperFunction.js\n | - node_modules\n | - host.json\n | - package.json\n | - local.settings.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We'll dive into what the contents of these files look like, when we build and deploy the first function. We'll cover ",(0,s.jsx)(n.code,{children:"local.settings.json"})," in the ",(0,s.jsx)(n.em,{children:"About Local Testing"})," section at the end."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"my-first-function-app",children:"My First Function App"}),"\n",(0,s.jsxs)(n.p,{children:["The documentation provides ",(0,s.jsx)(n.strong,{children:"quickstart"})," options for all supported languages. We'll walk through the ",(0,s.jsx)(n.em,{children:"JavaScript"})," versions in this article. You have two options for development:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["using ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-node",children:"Visual Studio Code"})," for an IDE-driven experience"]}),"\n",(0,s.jsxs)(n.li,{children:["using ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-cli-node?tabs=azure-cli%2Cbrowser",children:"Azure CLI"})," for a commandline-driven experience."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"I'm a huge fan of VS Code - so I'll be working through that tutorial today."}),"\n",(0,s.jsxs)(n.admonition,{title:"PRE-REQUISITES",type:"info",children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Have an Azure account (with active subscription) | ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://azure.microsoft.com/free/?ref=microsoft.com&utm_source=microsoft.com&utm_medium=docs&utm_campaign=visualstudio",children:"Create one for free"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Install Azure Functions Core Tools | ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local#v2",children:"Verify it's version 4.x"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Install Azure Functions VS Code Extension | ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions",children:"Currently v 1.7.4"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Install Node.js v16 or v18 (preview) | ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"Manage versions with NVM"})})]}),"\n"]}),(0,s.jsx)(n.p,{children:"Don't forget to validate your setup by checking the versions of installed software."})]}),"\n",(0,s.jsx)(n.h3,{id:"install-vscode-extension",children:"Install VSCode Extension"}),"\n",(0,s.jsx)(n.p,{children:"Installing the Visual Studio Code extension should automatically open this page in your IDE with similar quickstart instructions, but potentially more recent screenshots."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Visual Studio Code Extension for VS Code",src:t(42523).Z+"",width:"1318",height:"968"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that it may make sense to install the ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack",children:"Azure tools for Visual Studio Code"})," extensions pack if you plan on working through the many projects in Serverless September. This includes the Azure Functions extension by default."]}),"\n",(0,s.jsx)(n.h3,{id:"create-first-function-app",children:"Create First Function App"}),"\n",(0,s.jsxs)(n.p,{children:["Walk through the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-node#create-an-azure-functions-project",children:"Create local [project]"})," steps of the quickstart. The process is quick and painless and scaffolds out this folder structure and files. Note the existence (and locations) of ",(0,s.jsx)(n.code,{children:"functions.json"})," and ",(0,s.jsx)(n.code,{children:"host.json"})," files."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Final screenshot for VS Code workflow",src:t(34267).Z+"",width:"1299",height:"898"})}),"\n",(0,s.jsx)(n.h3,{id:"explore-the-code",children:"Explore the Code"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Check out the ",(0,s.jsx)(n.code,{children:"functions.json"})," configuration file."]})," It shows that the function is activated by an ",(0,s.jsx)(n.code,{children:"httpTrigger"})," with an input binding (tied to ",(0,s.jsx)(n.code,{children:"req"})," payload) and an output binding (tied to ",(0,s.jsx)(n.code,{children:"res"})," payload). And it supports both GET and POST requests on the exposed URL."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "bindings": [\n    {\n      "authLevel": "anonymous",\n      "type": "httpTrigger",\n      "direction": "in",\n      "name": "req",\n      "methods": [\n        "get",\n        "post"\n      ]\n    },\n    {\n      "type": "http",\n      "direction": "out",\n      "name": "res"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Check out ",(0,s.jsx)(n.code,{children:"index.js"})," - the function implementation"]}),". We see it logs a message to the console when invoked. It then extracts a ",(0,s.jsx)(n.code,{children:"name"})," value from the input payload (req) and crafts a different ",(0,s.jsx)(n.code,{children:"responseMessage"})," based on the presence/absence of a valid name. It returns this response in the output payload (res)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'module.exports = async function (context, req) {\n    context.log(\'JavaScript HTTP trigger function processed a request.\');\n\n    const name = (req.query.name || (req.body && req.body.name));\n    const responseMessage = name\n        ? "Hello, " + name + ". This HTTP triggered function executed successfully."\n        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";\n\n    context.res = {\n        // status: 200, /* Defaults to 200 */\n        body: responseMessage\n    };\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"preview-function-app-locally",children:"Preview Function App Locally"}),"\n",(0,s.jsxs)(n.p,{children:["You can now run this function app locally using ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local",children:"Azure Functions Core Tools"}),". VS Code integrates seamlessly with this CLI-based tool, making it possible for you to exploit all its capabilities without leaving the IDE. In fact, the workflow will even prompt you to ",(0,s.jsx)(n.em,{children:"install"})," those tools if they didn't already exist in your local dev environment."]}),"\n",(0,s.jsxs)(n.p,{children:['Now run the function app locally by clicking on the "Run and Debug" icon in the activity bar (highlighted, left) and pressing the "\u25b6\ufe0f" (',(0,s.jsx)(n.code,{children:"Attach to Node Functions"}),") to start execution. On success, your console output should show something like this."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Final screenshot for VS Code workflow",src:t(35798).Z+"",width:"1298",height:"896"})}),"\n",(0,s.jsxs)(n.p,{children:["You can test the function locally by visiting the Function Url shown (",(0,s.jsx)(n.code,{children:"http://localhost:7071/api/HttpTrigger1"}),") or by opening the ",(0,s.jsx)(n.em,{children:"Workspace"})," region of the Azure extension, and selecting the ",(0,s.jsx)(n.code,{children:"Execute Function now"})," menu item as shown."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Final screenshot for VS Code workflow",src:t(72126).Z+"",width:"1298",height:"713"})}),"\n",(0,s.jsxs)(n.p,{children:["In the latter case, the ",(0,s.jsx)(n.code,{children:"Enter request body"})," popup will show a pre-populated request of ",(0,s.jsx)(n.code,{children:'{"name":"Azure"}'})," that you can submit."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Final screenshot for VS Code workflow",src:t(8449).Z+"",width:"810",height:"86"})}),"\n",(0,s.jsxs)(n.p,{children:["On successful execution, your VS Code window will show a notification as follows. Take note of the console output - it shows the message encoded in ",(0,s.jsx)(n.code,{children:"index.js"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Final screenshot for VS Code workflow",src:t(50568).Z+"",width:"670",height:"234"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also visit the deployed function URL directly in a local browser - testing the case for a request made with no ",(0,s.jsx)(n.code,{children:"name"})," payload attached. Note how the response in the browser now shows the non-personalized version of the message!"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Final screenshot for VS Code workflow",src:t(80682).Z+"",width:"442",height:"95"})}),"\n",(0,s.jsxs)(n.admonition,{type:"success",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["\ud83c\udf89 ",(0,s.jsx)(n.strong,{children:"Congratulations"})]}),(0,s.jsx)(n.p,{children:"You created and ran a function app locally!"})]}),"\n",(0,s.jsx)(n.h3,{id:"redeploy-to-azure",children:"(Re)Deploy to Azure"}),"\n",(0,s.jsxs)(n.p,{children:["Now, just follow the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-node#publish-the-project-to-azure",children:"creating a function app in Azure"})," steps to deploy it to Azure, using an active subscription! The deployed app resource should now show up under the ",(0,s.jsx)(n.code,{children:"Function App"})," Resources where you can click ",(0,s.jsx)(n.code,{children:"Execute Function Now"})," to test the Azure-deployed version instead. You can also look up the function URL in the portal and visit that link in your local browser to trigger the function without the name context."]}),"\n",(0,s.jsxs)(n.admonition,{type:"success",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["\ud83c\udf89 ",(0,s.jsx)(n.strong,{children:"Congratulations"})]}),(0,s.jsx)(n.p,{children:"You have an Azure-hosted serverless function app!"})]}),"\n",(0,s.jsxs)(n.p,{children:["Challenge yourself and try to ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-node#run-the-function-in-azure",children:"change the code and redeploy"})," to Azure to return something different. ",(0,s.jsx)(n.em,{children:"You have effectively created a serverless API endpoint!"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"about-core-tools",children:"About Core Tools"}),"\n",(0,s.jsx)(n.p,{children:"That was a lot to cover! In the next few days we'll have more examples for Azure Functions app development - focused on different programming languages. So let's wrap today's post by reviewing two helpful resources."}),"\n",(0,s.jsxs)(n.p,{children:["First, let's talk about ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2",children:"Azure Functions Core Tools"})," - the command-line tool that lets you develop, manage, and deploy, Azure Functions projects from your ",(0,s.jsx)(n.strong,{children:"local development environment"}),". It is used transparently by the VS Code extension - but you can use it directly from a terminal for a powerful command-line end-to-end developer experience! The Core Tools commands are organized into the following contexts:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-init",children:(0,s.jsx)(n.code,{children:"func"})})," - commands to create and run functions locally"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-azure-functionapp-fetch-app-settings",children:(0,s.jsx)(n.code,{children:"func azure"})})," - work with resource slike Azure Functions and Azure Storage"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-durable-delete-task-hub",children:(0,s.jsx)(n.code,{children:"func durable"})})," - work with Durable Functions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-extensions-install",children:(0,s.jsx)(n.code,{children:"func extensions"})})," - manage extensions (default nuget.org)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-kubernetes-deploy",children:(0,s.jsx)(n.code,{children:"func kubernetes"})})," - work with Kubernetes and Azure Functions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-settings-decrypt",children:(0,s.jsx)(n.code,{children:"func settings"})})," - manage environment settings for local Functions host"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-core-tools-reference?tabs=v2#func-templates-list",children:(0,s.jsx)(n.code,{children:"func templates"})})," - list available templates"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Learn how to ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local?tabs=v4%2Cmacos%2Ccsharp%2Cportal%2Cbash",children:"work with Azure Functions Core Tools"}),". Not only can it help with quick command execution, it can also be invaluable for debugging issues that may not always be visible or understandable in an IDE."]}),"\n",(0,s.jsx)(n.h2,{id:"about-local-testing",children:"About Local Testing"}),"\n",(0,s.jsxs)(n.p,{children:["You might have noticed that the scaffold also produced a ",(0,s.jsx)(n.code,{children:"local.settings.json"})," file. What is that and why is it useful? By definition, the local.settings.json file ",(0,s.jsx)(n.em,{children:'"stores app settings and settings used by local development tools. Settings in the local.settings.json file are used only when you\'re running your project locally."'})]}),"\n",(0,s.jsxs)(n.p,{children:["Read the guidance on ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-develop-local?WT.mc_id=javascript-99907-ninarasi#local-settings-file",children:"Code and test Azure Functions Locally"})," to learn more about how to configure development environments locally, for your preferred programming language, to support testing and debugging on the local Functions runtime."]}),"\n",(0,s.jsx)(n.h2,{id:"exercise",children:"Exercise"}),"\n",(0,s.jsx)(n.p,{children:"We made it! Now it's your turn!! Here are a few things you can try to apply what you learned and reinforce your understanding:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Walk through this quickstart on your own!"}),"\n",(0,s.jsxs)(n.li,{children:["Then try the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/azure/azure-functions/durable/quickstart-js-vscode?WT.mc_id=javascript-99907-ninarasi",children:"Durable Functions Quickstart"})," as a stretch goal!"]}),"\n",(0,s.jsxs)(n.li,{children:["And take the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-99907-ninarasi",children:"Cloud Skills Challenge"})," to skill up in fun ways"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.p,{children:["Bookmark and visit the ",(0,s.jsx)(n.a,{href:"https://aka.ms/30DaysOfServerless/collection",children:"#30DaysOfServerless Collection"}),". It's the one-stop collection of resources we will keep updated with links to relevant documentation and learning resources."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},42912:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/banner-6b30abae3a64206ec53107075cc227e0.png"},6459:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/banner-6b30abae3a64206ec53107075cc227e0.png"},50568:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/vscode-10-bd3741ae917136d4fdf6cc65960275ac.png"},80682:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/vscode-11-430e971fc73867eb792a9eadac4430f8.png"},34267:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/vscode-6-5d66f662cb59d39b41f90ab0bf78380e.png"},35798:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/vscode-7-2f28ace0fb1cb00d05da8286d02f310b.png"},72126:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/vscode-8-bbc6b836396915dda8611f19a2db7914.png"},8449:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/vscode-9-fe412b128bece77a4f0846dc33f6eb7c.png"},42523:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/vscode-1a329646eebc0a4dc8c1abca1d7295fc.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);