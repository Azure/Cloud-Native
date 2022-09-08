---
slug: 06-functions-dotnet
title: 06. Functions for .NET Devs
authors: [mike, matt]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [azure, functions, serverless, concepts]
image: ./img/banner.png
description: "#30DaysOfServerless: Azure Functions for the .NET Developer" 
tags: [serverless-september, 30-days-of-serverless,azure-functions, dotnet]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/blog/functions-1" />
  <meta name="twitter:title" 
    content="#30DaysOfServerless: Azure Functions Fundamentals" />
  <meta name="twitter:description" 
    content="#30DaysOfServerless: Azure Functions Fundamentals" />
  <meta name="twitter:image"
    content="https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/blog/06-functions-dotnet" />
</head>

---

Welcome to `Day 6` of #30DaysOfServerless!

The theme for this week is Azure Functions. Today we're going to talk about why Azure Functions are a great fit for .NET developers.

---

## What We'll Cover

* What is serverless computing? 
* How does Azure Functions fit in?
* Let's build a simple Azure Function in .NET
* Developer Guide, Samples & Scenarios
* Exercise: Explore the [Create Serverless Applications](https://docs.microsoft.com/en-us/training/paths/create-serverless-applications/?WT.mc_id=javascript-74010-cxa) path.
* Resources: For self-study!

![A banner image that has the title of this article with the author's photo and a drawing that summarizes the demo application.](./img/banner.png)

---

The leaves are changing colors and there's a chill in the air, or for those lucky folks in the Southern Hemisphere, the leaves are budding and a warmth is in the air. Either way, that can only mean one thing - it's **Serverless September!🍂** So today, we're going to take a look at Azure Functions - what they are, and _why they're a great fit for .NET developers_.


## What is serverless computing?

For developers, serverless computing means you write highly compact individual functions that do one thing - and run in the cloud. These functions [are triggered by some external event](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings?tabs=csharp&WT.mc_id=javascript-74010-cxa). That event could be a record being inserted into a database, a file uploaded into BLOB storage, a timer interval elapsed, or even a simple HTTP request.

But... servers are still definitely involved! What has changed from other types of cloud computing is that the idea and **ownership of the server** has been abstracted away.

A lot of the time you'll hear folks refer to this as [Functions as a Service or FaaS](/blog/02-functions-intro). The defining characteristic is all you need to do is put together your application logic. Your code is going to be invoked in response to events - and the cloud provider takes care of everything else. You literally get to focus on only the business logic you need to run in response to something of interest - **no worries about hosting**.

You do not need to worry about wiring up the plumbing between the service that originates the event and the serverless runtime environment. The cloud provider will handle the mechanism to call your function in response to whatever event you chose to have the function react to. And it passes along any data that is relevant to the event to your code.

And here's a really neat thing. **You only pay for the time the serverless function is running.** So, if you have a function that is triggered by an HTTP request, and you rarely get requests to your function, you would rarely pay.

### How does Azure Functions fit in?

Microsoft's [Azure Functions](https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=javascript-74010-cxa) is a modern serverless architecture, offering event-driven cloud computing that is easy for developers to use. It provides a way to run small pieces of code or Functions in the cloud without developers having to worry themselves about the infrastructure or platform the Function is running on.

That means we're only concerned about writing the logic of the Function. And we can write that logic in our choice of languages... like C#. We are also able to add packages from NuGet to Azure Functions—this way, we don't have to reinvent the wheel and can use well-tested libraries.

And the Azure Functions runtime takes care of a ton of neat stuff for us, like passing in information about the event that caused it to kick off - in a strongly typed variable. It also ["binds"](https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings?WT.mc_id=javascript-74010-cxa) to other services, like Azure Storage, we can easily access those services from our code without having to worry about new'ing them up.

## Let's build an Azure Function!

### Scaffold the Function

Don't worry about having an Azure subscription or even being connected to the internet—we can develop and debug Azure Functions locally using either [Visual Studio](https://docs.microsoft.com/azure/azure-functions/functions-develop-vs?tabs=in-process&WT.mc_id=javascript-74010-cxa) or [Visual Studio Code](https://docs.microsoft.com/azure/azure-functions/functions-develop-vs-code?tabs=csharp&WT.mc_id=javascript-74010-cxa)!

For this example, I'm going to use Visual Studio Code to build up a Function that responds to an [HTTP trigger](https://docs.microsoft.com/azure/azure-functions/functions-bindings-http-webhook-trigger?WT.mc_id=javascript-74010-cxa) and then writes a message to an [Azure Storage Queue](https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-queue-output?WT.mc_id=javascript-74010-cxa).

![Diagram of the how the Azure Function will use the HTTP trigger and the Azure Storage Queue Binding](img/flow.png)

The incoming HTTP call is the **trigger** and the message queue the Function writes to is an **output binding**. Let's have at it!

:::info
You do need to have some tools downloaded and installed to get started. First and foremost, you'll need [Visual Studio Code](https://code.visualstudio.com/). Then you'll need the [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=javascript-74010-cxa) for VS Code to do the development with. Finally, you'll need the [Azurite Emulator](https://docs.microsoft.com/azure/storage/common/storage-use-azurite?tabs=visual-studio-code&WT.mc_id=javascript-74010-cxa) installed as well—this will allow us to write to a message queue locally.

Oh! And of course, [.NET 6](https://docs.microsoft.com/dotnet/core/tools/?WT.mc_id=javascript-74010-cxa)!
:::

Now with all of the tooling out of the way, let's write a Function!


1. Fire up Visual Studio Code. Then, from the command palette, type: `Azure Functions: Create New Project`

  ![Screenshot of create a new function dialog in VS Code](img/1-create-new.png)

2. Follow the steps as to which directory you want to create the project in and which .NET runtime and language you want to use.

  ![Screenshot of VS Code prompting which directory and language to use](img/2-language.png)

3. Pick **.NET 6** and **C#**.

  It will then prompt you to pick the folder in which your Function app resides and then select a template.

  ![Screenshot of VS Code prompting you to pick the Function trigger template](img/3-selecttemplate.png)

  Pick the **HTTP trigger** template. When prompted for a name, call it: **PostToAQueue**.


### Execute the Function Locally

1. After giving it a namespace, it prompts for an authorization level—pick Anonymous. **Now we have a Function!** Let's go ahead and hit F5 and see it run!


:::info
After the templates have finished installing, you may get a prompt to download additional components—these are NuGet packages. Go ahead and do that.
:::

When it runs, you'll see the Azure Functions logo appear in the Terminal window with the URL the Function is located at. Copy that link.

![Screenshot of the Azure Functions local runtime starting up](img/5-start.png)

 2. Type the link into a browser, adding a `name` parameter as shown in this example: `http://localhost:7071/api/PostToAQueue?name=Matt`. The Function will respond with a message. You can even set breakpoints in Visual Studio Code and step through the code!

### Write To Azure Storage Queue

Next, we'll get this HTTP trigger Function to write to a local Azure Storage Queue. First we need to add the Storage NuGet package to our project. In the terminal, type:

```bash
dotnet add package Microsoft.Azure.WebJobs.Extensions.Storage
```

Then set a configuration setting to tell the Function runtime where to find the Storage. Open up local.settings.json and set "AzureWebJobsStorage" to "UseDevelopmentStorage=true". The full file will look like:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "AzureWebJobsDashboard": ""
  }
}
```

Then create a new class within your project. This class will hold nothing but properties. Call it whatever you want and add whatever properties you want to it. I called mine TheMessage and added an Id and Name properties to it.

```csharp
public class TheMessage
{
    public string Id { get; set; }
    public string Name { get; set; }
}
```

Finally, change your PostToAQueue Function, so it looks like the following:

```csharp

public static class PostToAQueue
{
    [FunctionName("PostToAQueue")]        
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
        [Queue("demoqueue", Connection = "AzureWebJobsStorage")] IAsyncCollector<TheMessage> messages,
        ILogger log)
    {        
        string name = req.Query["name"];

        await messages.AddAsync(new TheMessage { Id = System.Guid.NewGuid().ToString(), Name = name });

        return new OkResult();
    }
}

```

Note the addition of the `messages` variable. This is telling the Function to use the storage connection we specified before via the `Connection` property. And it is also specifying which queue to use in that storage account, in this case `demoqueue`.

All the code is doing is pulling out the `name` from the query string, new'ing up a new `TheMessage` class and adding that to the `IAsyncCollector` variable.

**That will add the new message to the queue!**

Make sure Azurite is started within VS Code (both the queue and blob emulators). Run the app and send the same GET request as before: `http://localhost:7071/api/PostToAQueue?name=Matt`.

If you have the Azure Storage Explorer installed, you can browse your local Queue and see the new message in there!

![Screenshot of Azure Storage Explorer with the new message in the queue](img/7-new-queue.png)

## Summing Up

We had a quick look at what Microsoft's serverless offering, Azure Functions, is comprised of. It's a full-featured FaaS offering that enables you to write functions in your language of choice, including reusing packages such as those from NuGet.

A highlight of Azure Functions is the way they are triggered and bound. The triggers define how a Function starts, and bindings are akin to input and output parameters on it that correspond to external services. The best part is that the Azure Function runtime takes care of maintaining the connection to the external services so you don't have to worry about new'ing up or disposing of the connections yourself. 

We then wrote a quick Function that gets triggered off an HTTP request and then writes a query string parameters from that request into a local Azure Storage Queue.

## What's Next

So, where can you go from here? 

Think about how you can **build real-world scenarios by integrating other Azure services**. For example, you could use serverless integrations to build a workflow where the input payload received using an HTTP Trigger, is now stored in Blob Storage (output binding), which in turn triggers another service (e.g., Cognitive Services) that processes the blob and returns an enhanced result. 

_Keep an eye out for an update to this post where we walk through a scenario like this with code_. Check out the  resources below to help you get started on your own.


## Exercise

This brings us close to the end of Week 1 with Azure Functions. We've learned core concepts, built and deployed our first Functions app, and explored quickstarts and scenarios for different programming languages. So, what can you do to explore this topic on your own?

* Explore the [Create Serverless Applications](https://docs.microsoft.com/en-us/training/paths/create-serverless-applications/?WT.mc_id=javascript-74010-cxa) learning path which has several modules that explore Azure Functions integrations with various services.
* Take up the [Cloud Skills Challenge](https://docs.microsoft.com/en-us/training/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c&WT.mc_id=javascript-74010-ninarasi) and complete those modules in a fun setting where you compete with peers for a spot on the leaderboard!

Then come back tomorrow as we wrap up the week with a discussion on end-to-end scenarios, a recap of what we covered this week, and a look at what's ahead next week.



## Resources

Start here for developer guidance in getting started with Azure Functions as a .NET/C# developer:

* [Develop C# class library functions using Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-dotnet-class-library?tabs=v2%2Ccmd&WT.mc_id=javascript-74010-cxa). 
* [Using C# to develop .NET isolated process functions](https://docs.microsoft.com/en-us/azure/azure-functions/dotnet-isolated-process-guide?WT.mc_id=javascript-74010-cxa).
* [Quickstart: Create your first C# function in Azure using Visual Studio](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-your-first-function-visual-studio?tabs=in-process&WT.mc_id=javascript-74010-cxa).

Then learn about [supported Triggers and Bindings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings?tabs=csharp#bindings-code-examples?WT.mc_id=javascript-74010-cxa) for C#, with code snippets to show how they are used. 

Finally, explore [Azure Functions samples for C#](https://docs.microsoft.com/en-us/samples/browse/?products=azure-functions&languages=csharp&WT.mc_id=javascript-74010-cxa) and learn to implement serverless solutions. Examples include:
 * Using Azure Functions to [check storage of Azure Cognitive Services on a schedule](https://docs.microsoft.com/en-us/samples/azure-samples/azure-search-dotnet-samples/check-storage-usage/?WT.mc_id=javascript-74010-cxa) using Timer Triggers.
* Using Azure Functions to [implement a ToDo Backend API](https://docs.microsoft.com/en-us/samples/azure-samples/azure-sql-binding-func-dotnet-todo/todo-backend-dotnet-azure-sql-bindings-azure-functions/?WT.mc_id=javascript-74010-cxa) illustrating Azure SQL integration.