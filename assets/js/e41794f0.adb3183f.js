"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50808],{43224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(85893),o=n(11151);const i={slug:"06-functions-dotnet",title:"06. Functions for .NET Devs",authors:["mike","matt"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"#30DaysOfServerless: Azure Functions for the .NET Developer",tags:["serverless-september","30-days-of-serverless","azure-functions","dotnet"]},r=void 0,a={permalink:"/Cloud-Native/blog/06-functions-dotnet",source:"@site/blog/2022-09-06/index.md",title:"06. Functions for .NET Devs",description:"#30DaysOfServerless: Azure Functions for the .NET Developer",date:"2022-09-06T00:00:00.000Z",formattedDate:"September 6, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"},{label:"dotnet",permalink:"/Cloud-Native/blog/tags/dotnet"}],readingTime:9.5,hasTruncateMarker:!1,authors:[{name:"Mike James",title:"Cloud Advocate @Microsoft",url:"https://github.com/MikeCodesDotNet",imageURL:"https://github.com/MikeCodesDotNet.png",key:"mike"},{name:"Matt Soucoup",title:"Principal Cloud Advocate @Microsoft",url:"https://github.com/codemillmatt",imageURL:"https://github.com/codemillmatt.png",key:"matt"}],frontMatter:{slug:"06-functions-dotnet",title:"06. Functions for .NET Devs",authors:["mike","matt"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"#30DaysOfServerless: Azure Functions for the .NET Developer",tags:["serverless-september","30-days-of-serverless","azure-functions","dotnet"]},unlisted:!1,prevItem:{title:"07. Functions for Python Devs",permalink:"/Cloud-Native/blog/07-functions-python"},nextItem:{title:"\ud83d\ude80 | Durable Entities Walkthrough",permalink:"/Cloud-Native/blog/zero2hero-func-02"}},c={image:n(73594).Z,authorsImageUrls:[void 0,void 0]},l=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"What is serverless computing?",id:"what-is-serverless-computing",level:2},{value:"How does Azure Functions fit in?",id:"how-does-azure-functions-fit-in",level:3},{value:"Let&#39;s build an Azure Function!",id:"lets-build-an-azure-function",level:2},{value:"Scaffold the Function",id:"scaffold-the-function",level:3},{value:"Execute the Function Locally",id:"execute-the-function-locally",level:3},{value:"Write To Azure Storage Queue",id:"write-to-azure-storage-queue",level:3},{value:"Summing Up",id:"summing-up",level:2},{value:"What&#39;s Next",id:"whats-next",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i,{children:[(0,s.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/functions-1"}),(0,s.jsx)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Azure Functions Fundamentals"}),(0,s.jsx)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Azure Functions Fundamentals"}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,s.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,s.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/06-functions-dotnet"})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:["Welcome to ",(0,s.jsx)(t.code,{children:"Day 6"})," of #30DaysOfServerless!"]}),"\n",(0,s.jsx)(t.p,{children:"The theme for this week is Azure Functions. Today we're going to talk about why Azure Functions are a great fit for .NET developers."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"What is serverless computing?"}),"\n",(0,s.jsx)(t.li,{children:"How does Azure Functions fit in?"}),"\n",(0,s.jsx)(t.li,{children:"Let's build a simple Azure Function in .NET"}),"\n",(0,s.jsx)(t.li,{children:"Developer Guide, Samples & Scenarios"}),"\n",(0,s.jsxs)(t.li,{children:["Exercise: Explore the ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/training/paths/create-serverless-applications/?WT.mc_id=javascript-99907-cxa",children:"Create Serverless Applications"})," path."]}),"\n",(0,s.jsx)(t.li,{children:"Resources: For self-study!"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"A banner image that has the title of this article with the author&#39;s photo and a drawing that summarizes the demo application.",src:n(35808).Z+"",width:"1600",height:"672"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:["The leaves are changing colors and there's a chill in the air, or for those lucky folks in the Southern Hemisphere, the leaves are budding and a warmth is in the air. Either way, that can only mean one thing - it's ",(0,s.jsx)(t.strong,{children:"Serverless September!\ud83c\udf42"})," So today, we're going to take a look at Azure Functions - what they are, and ",(0,s.jsx)(t.em,{children:"why they're a great fit for .NET developers"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"what-is-serverless-computing",children:"What is serverless computing?"}),"\n",(0,s.jsxs)(t.p,{children:["For developers, serverless computing means you write highly compact individual functions that do one thing - and run in the cloud. These functions ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings?tabs=csharp&WT.mc_id=javascript-99907-cxa",children:"are triggered by some external event"}),". That event could be a record being inserted into a database, a file uploaded into BLOB storage, a timer interval elapsed, or even a simple HTTP request."]}),"\n",(0,s.jsxs)(t.p,{children:["But... servers are still definitely involved! What has changed from other types of cloud computing is that the idea and ",(0,s.jsx)(t.strong,{children:"ownership of the server"})," has been abstracted away."]}),"\n",(0,s.jsxs)(t.p,{children:["A lot of the time you'll hear folks refer to this as ",(0,s.jsx)(t.a,{href:"/blog/02-functions-intro",children:"Functions as a Service or FaaS"}),". The defining characteristic is all you need to do is put together your application logic. Your code is going to be invoked in response to events - and the cloud provider takes care of everything else. You literally get to focus on only the business logic you need to run in response to something of interest - ",(0,s.jsx)(t.strong,{children:"no worries about hosting"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"You do not need to worry about wiring up the plumbing between the service that originates the event and the serverless runtime environment. The cloud provider will handle the mechanism to call your function in response to whatever event you chose to have the function react to. And it passes along any data that is relevant to the event to your code."}),"\n",(0,s.jsxs)(t.p,{children:["And here's a really neat thing. ",(0,s.jsx)(t.strong,{children:"You only pay for the time the serverless function is running."})," So, if you have a function that is triggered by an HTTP request, and you rarely get requests to your function, you would rarely pay."]}),"\n",(0,s.jsx)(t.h3,{id:"how-does-azure-functions-fit-in",children:"How does Azure Functions fit in?"}),"\n",(0,s.jsxs)(t.p,{children:["Microsoft's ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=javascript-99907-cxa",children:"Azure Functions"})," is a modern serverless architecture, offering event-driven cloud computing that is easy for developers to use. It provides a way to run small pieces of code or Functions in the cloud without developers having to worry themselves about the infrastructure or platform the Function is running on."]}),"\n",(0,s.jsx)(t.p,{children:"That means we're only concerned about writing the logic of the Function. And we can write that logic in our choice of languages... like C#. We are also able to add packages from NuGet to Azure Functions\u2014this way, we don't have to reinvent the wheel and can use well-tested libraries."}),"\n",(0,s.jsxs)(t.p,{children:["And the Azure Functions runtime takes care of a ton of neat stuff for us, like passing in information about the event that caused it to kick off - in a strongly typed variable. It also ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings?WT.mc_id=javascript-99907-cxa",children:'"binds"'})," to other services, like Azure Storage, we can easily access those services from our code without having to worry about new'ing them up."]}),"\n",(0,s.jsx)(t.h2,{id:"lets-build-an-azure-function",children:"Let's build an Azure Function!"}),"\n",(0,s.jsx)(t.h3,{id:"scaffold-the-function",children:"Scaffold the Function"}),"\n",(0,s.jsxs)(t.p,{children:["Don't worry about having an Azure subscription or even being connected to the internet\u2014we can develop and debug Azure Functions locally using either ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-develop-vs?tabs=in-process&WT.mc_id=javascript-99907-cxa",children:"Visual Studio"})," or ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-develop-vs-code?tabs=csharp&WT.mc_id=javascript-99907-cxa",children:"Visual Studio Code"}),"!"]}),"\n",(0,s.jsxs)(t.p,{children:["For this example, I'm going to use Visual Studio Code to build up a Function that responds to an ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-bindings-http-webhook-trigger?WT.mc_id=javascript-99907-cxa",children:"HTTP trigger"})," and then writes a message to an ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-queue-output?WT.mc_id=javascript-99907-cxa",children:"Azure Storage Queue"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Diagram of the how the Azure Function will use the HTTP trigger and the Azure Storage Queue Binding",src:n(71411).Z+"",width:"720",height:"405"})}),"\n",(0,s.jsxs)(t.p,{children:["The incoming HTTP call is the ",(0,s.jsx)(t.strong,{children:"trigger"})," and the message queue the Function writes to is an ",(0,s.jsx)(t.strong,{children:"output binding"}),". Let's have at it!"]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:["You do need to have some tools downloaded and installed to get started. First and foremost, you'll need ",(0,s.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),". Then you'll need the ",(0,s.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=javascript-99907-cxa",children:"Azure Functions extension"})," for VS Code to do the development with. Finally, you'll need the ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/azure/storage/common/storage-use-azurite?tabs=visual-studio-code&WT.mc_id=javascript-99907-cxa",children:"Azurite Emulator"})," installed as well\u2014this will allow us to write to a message queue locally."]}),(0,s.jsxs)(t.p,{children:["Oh! And of course, ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/dotnet/core/tools/?WT.mc_id=javascript-99907-cxa",children:".NET 6"}),"!"]})]}),"\n",(0,s.jsx)(t.p,{children:"Now with all of the tooling out of the way, let's write a Function!"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Fire up Visual Studio Code. Then, from the command palette, type: ",(0,s.jsx)(t.code,{children:"Azure Functions: Create New Project"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Screenshot of create a new function dialog in VS Code",src:n(8714).Z+"",width:"1004",height:"278"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Follow the steps as to which directory you want to create the project in and which .NET runtime and language you want to use."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Screenshot of VS Code prompting which directory and language to use",src:n(53510).Z+"",width:"1003",height:"278"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Pick ",(0,s.jsx)(t.strong,{children:".NET 6"})," and ",(0,s.jsx)(t.strong,{children:"C#"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"It will then prompt you to pick the folder in which your Function app resides and then select a template."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Screenshot of VS Code prompting you to pick the Function trigger template",src:n(82910).Z+"",width:"1164",height:"278"})}),"\n",(0,s.jsxs)(t.p,{children:["Pick the ",(0,s.jsx)(t.strong,{children:"HTTP trigger"})," template. When prompted for a name, call it: ",(0,s.jsx)(t.strong,{children:"PostToAQueue"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"execute-the-function-locally",children:"Execute the Function Locally"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["After giving it a namespace, it prompts for an authorization level\u2014pick Anonymous. ",(0,s.jsx)(t.strong,{children:"Now we have a Function!"})," Let's go ahead and hit F5 and see it run!"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"After the templates have finished installing, you may get a prompt to download additional components\u2014these are NuGet packages. Go ahead and do that."})}),"\n",(0,s.jsx)(t.p,{children:"When it runs, you'll see the Azure Functions logo appear in the Terminal window with the URL the Function is located at. Copy that link."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Screenshot of the Azure Functions local runtime starting up",src:n(93639).Z+"",width:"300",height:"254"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Type the link into a browser, adding a ",(0,s.jsx)(t.code,{children:"name"})," parameter as shown in this example: ",(0,s.jsx)(t.code,{children:"http://localhost:7071/api/PostToAQueue?name=Matt"}),". The Function will respond with a message. You can even set breakpoints in Visual Studio Code and step through the code!"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"write-to-azure-storage-queue",children:"Write To Azure Storage Queue"}),"\n",(0,s.jsx)(t.p,{children:"Next, we'll get this HTTP trigger Function to write to a local Azure Storage Queue. First we need to add the Storage NuGet package to our project. In the terminal, type:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"dotnet add package Microsoft.Azure.WebJobs.Extensions.Storage\n"})}),"\n",(0,s.jsx)(t.p,{children:'Then set a configuration setting to tell the Function runtime where to find the Storage. Open up local.settings.json and set "AzureWebJobsStorage" to "UseDevelopmentStorage=true". The full file will look like:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "IsEncrypted": false,\n  "Values": {\n    "AzureWebJobsStorage": "UseDevelopmentStorage=true",\n    "AzureWebJobsDashboard": ""\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Then create a new class within your project. This class will hold nothing but properties. Call it whatever you want and add whatever properties you want to it. I called mine TheMessage and added an Id and Name properties to it."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:"public class TheMessage\n{\n    public string Id { get; set; }\n    public string Name { get; set; }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Finally, change your PostToAQueue Function, so it looks like the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:'\npublic static class PostToAQueue\n{\n    [FunctionName("PostToAQueue")]        \n    public static async Task<IActionResult> Run(\n        [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,\n        [Queue("demoqueue", Connection = "AzureWebJobsStorage")] IAsyncCollector<TheMessage> messages,\n        ILogger log)\n    {        \n        string name = req.Query["name"];\n\n        await messages.AddAsync(new TheMessage { Id = System.Guid.NewGuid().ToString(), Name = name });\n\n        return new OkResult();\n    }\n}\n\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Note the addition of the ",(0,s.jsx)(t.code,{children:"messages"})," variable. This is telling the Function to use the storage connection we specified before via the ",(0,s.jsx)(t.code,{children:"Connection"})," property. And it is also specifying which queue to use in that storage account, in this case ",(0,s.jsx)(t.code,{children:"demoqueue"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["All the code is doing is pulling out the ",(0,s.jsx)(t.code,{children:"name"})," from the query string, new'ing up a new ",(0,s.jsx)(t.code,{children:"TheMessage"})," class and adding that to the ",(0,s.jsx)(t.code,{children:"IAsyncCollector"})," variable."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"That will add the new message to the queue!"})}),"\n",(0,s.jsxs)(t.p,{children:["Make sure Azurite is started within VS Code (both the queue and blob emulators). Run the app and send the same GET request as before: ",(0,s.jsx)(t.code,{children:"http://localhost:7071/api/PostToAQueue?name=Matt"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"If you have the Azure Storage Explorer installed, you can browse your local Queue and see the new message in there!"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Screenshot of Azure Storage Explorer with the new message in the queue",src:n(92557).Z+"",width:"1015",height:"469"})}),"\n",(0,s.jsx)(t.h2,{id:"summing-up",children:"Summing Up"}),"\n",(0,s.jsx)(t.p,{children:"We had a quick look at what Microsoft's serverless offering, Azure Functions, is comprised of. It's a full-featured FaaS offering that enables you to write functions in your language of choice, including reusing packages such as those from NuGet."}),"\n",(0,s.jsx)(t.p,{children:"A highlight of Azure Functions is the way they are triggered and bound. The triggers define how a Function starts, and bindings are akin to input and output parameters on it that correspond to external services. The best part is that the Azure Function runtime takes care of maintaining the connection to the external services so you don't have to worry about new'ing up or disposing of the connections yourself."}),"\n",(0,s.jsx)(t.p,{children:"We then wrote a quick Function that gets triggered off an HTTP request and then writes a query string parameters from that request into a local Azure Storage Queue."}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,s.jsx)(t.p,{children:"So, where can you go from here?"}),"\n",(0,s.jsxs)(t.p,{children:["Think about how you can ",(0,s.jsx)(t.strong,{children:"build real-world scenarios by integrating other Azure services"}),". For example, you could use serverless integrations to build a workflow where the input payload received using an HTTP Trigger, is now stored in Blob Storage (output binding), which in turn triggers another service (e.g., Cognitive Services) that processes the blob and returns an enhanced result."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Keep an eye out for an update to this post where we walk through a scenario like this with code"}),". Check out the  resources below to help you get started on your own."]}),"\n",(0,s.jsx)(t.h2,{id:"exercise",children:"Exercise"}),"\n",(0,s.jsx)(t.p,{children:"This brings us close to the end of Week 1 with Azure Functions. We've learned core concepts, built and deployed our first Functions app, and explored quickstarts and scenarios for different programming languages. So, what can you do to explore this topic on your own?"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Explore the ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/training/paths/create-serverless-applications/?WT.mc_id=javascript-99907-cxa",children:"Create Serverless Applications"})," learning path which has several modules that explore Azure Functions integrations with various services."]}),"\n",(0,s.jsxs)(t.li,{children:["Take up the ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/training/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-99907-ninarasi",children:"Cloud Skills Challenge"})," and complete those modules in a fun setting where you compete with peers for a spot on the leaderboard!"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Then come back tomorrow as we wrap up the week with a discussion on end-to-end scenarios, a recap of what we covered this week, and a look at what's ahead next week."}),"\n",(0,s.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)(t.p,{children:"Start here for developer guidance in getting started with Azure Functions as a .NET/C# developer:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-dotnet-class-library?tabs=v2%2Ccmd&WT.mc_id=javascript-99907-cxa",children:"Develop C# class library functions using Azure Functions"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/dotnet-isolated-process-guide?WT.mc_id=javascript-99907-cxa",children:"Using C# to develop .NET isolated process functions"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-create-your-first-function-visual-studio?tabs=in-process&WT.mc_id=javascript-99907-cxa",children:"Quickstart: Create your first C# function in Azure using Visual Studio"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Then learn about ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings?tabs=csharp#bindings-code-examples?WT.mc_id=javascript-99907-cxa",children:"supported Triggers and Bindings"})," for C#, with code snippets to show how they are used."]}),"\n",(0,s.jsxs)(t.p,{children:["Finally, explore ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/samples/browse/?products=azure-functions&languages=csharp&WT.mc_id=javascript-99907-cxa",children:"Azure Functions samples for C#"})," and learn to implement serverless solutions. Examples include:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Using Azure Functions to ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/samples/azure-samples/azure-search-dotnet-samples/check-storage-usage/?WT.mc_id=javascript-99907-cxa",children:"check storage of Azure Cognitive Services on a schedule"})," using Timer Triggers."]}),"\n",(0,s.jsxs)(t.li,{children:["Using Azure Functions to ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/samples/azure-samples/azure-sql-binding-func-dotnet-todo/todo-backend-dotnet-azure-sql-bindings-azure-functions/?WT.mc_id=javascript-99907-cxa",children:"implement a ToDo Backend API"})," illustrating Azure SQL integration."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},73594:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/banner-18ebad619fd86fe2eef71ab09e7388a8.png"},8714:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/1-create-new-cdcb7b7ec3ac86f77ed5eee0a728d237.png"},53510:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/2-language-445030b4cf730aea1af1f7c02051136d.png"},82910:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/3-selecttemplate-e9f332784945383b44256950ec2669e1.png"},93639:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAD+CAMAAAC3IsjXAAADAFBMVEX////+//8zMzP///iPMzP2/////9Gvp8LfwsIzbbBVxO5+1f3/9cb4+Pj9/f319fWgmoT//c7//t6xbTPp8LV+nrz/5Zz/7a0FmLzPur7H7NX///38/PzC2/gzM47AvRi7uoS8097//+yv7fwzkdHv7+/7+/vR///B6P/X9f/y8vLs////6a7/6Lb6+vr///Kat8/I8P/96KbP9f//8dylx+ja6q3S+//f9/+UmACXmgCUmimUmkKlmxipoBh1oryUoHulmnOimnu2nlKioISwnmuUpZS+ojmbp6XIqjmUr73VtADZtxjVtELZtzHVt0qev97gvEKewt7ssm7dvlrjv0qix96lx97nwlKpzs6X1vOpzvew1ff10HP42YTP7//Z+f/Z//+v4/q26frs7OxVmMyv7e7n5+e++f/b/P8Fmr4FmsUlosc9mLwFtN89nsktp88tqtZOncU9pdRdmMldm7w9sNyGmMuGmsdVvuOeosCeoMuno8uvqLyvqMVmyfJuyfC+sLyOxOPHtLx+1fCnyc2Pz/+e4/3nzsnvzsfn1cn30Mfv1c332cv/1svH8t//28334NTP8v3/5dLH/+H36NzH///e///n/////+n///vEvWvf7K3i4uL+67XZ8f+1ugC3ugC1uim1ukK/unO8unu1vnvNvznIvVK8voTbyQC1wJTUxDneyhi6wqXeyjHbyUK1xr3bzEriz0K3ys7gz1rl0Erq0lK60N6/1N6/1OfB2c78zY/12nP44ITP6v/66qX96q3U8f/JycnZ2dlENjP5//8zNXE3Mzf/8MwzQElvNDSUTzOf4/80M1TLjjNssepZNDM4crQ3isinfVxuyvL826j//eU1V5elXTXVnFR0RjSixOe23f8zPGGGOTM1VYRcgKe7fDVwoNDRpXuGvuvs/u6lckTl/P//+dGLX0BYpNxgRjaPy/+PzfXyu3vlwI2+8v9RkcyIxfnQ0NDy/P9Ad7fd3d3/7MAzYXJYVIx3W0eCfaTeqFozhpypsZVCaAF+AAAKIUlEQVR42uydd3DTVhjAhU0KdvIHiVmBI0CSO5JzcmEESCfde6eTbjg46N67pZPuPWgLB9170T1CB3eOjZ3lBOIMCM0GQhnJpccq7ZPfkxRZSmzj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"},92557:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/7-new-queue-700eb55117dd898b1fda2c98baeaea3b.png"},35808:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/banner-18ebad619fd86fe2eef71ab09e7388a8.png"},71411:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,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"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(67294);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);