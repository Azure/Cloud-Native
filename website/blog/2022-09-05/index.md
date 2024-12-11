---
slug: 05-functions-js
title: 05. Functions for JS Devs 
authors: [aaron]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [azure, functions, serverless, concepts]
image: ./img/banner.png
description: "Introduction to Azure Functions, from core concepts to hello world!" 
tags: [serverless-september, 30-days-of-serverless, azure-functions, azure-container-apps, javascript]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/blog/05-functions-js" />
  <meta name="twitter:title" 
    content="#30DaysOfServerless: Azure Functions for JavaScript Developers" />
  <meta name="twitter:description" 
    content="#30DaysOfServerless: Azure Functions for JavaScript Developers" />
  <meta name="twitter:image"
    content="https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/blog/05-functions-js" />
</head>

---

Welcome to `Day 5` of #30DaysOfServerless!

_Yesterday_ we looked at Azure Functions from the perspective of a Java developer. _Today_, we'll do a similar walkthrough from the perspective of a JavaScript developer. 

And, we'll use this to explore another popular usage scenario for Azure Functions: **building a serverless HTTP API using JavaScript**. 

Ready? Let's go.

---

## What We'll Cover
 * Developer Guidance
 * Create Azure Function with CLI
 * Calling an external API
 * Azure Samples & Scenarios for JS
 * Exercise: Support searching
 * Resources: For self-study!

![Serverless September slide featuring Aaron Powell presenting Azure Functions for JavaScript Developers, with Node.js and CLI usage highlights.](./img/banner.png)

---

## Developer Guidance

If you're a JavaScript developer new to serverless on Azure, start by exploring the [Azure Functions JavaScript Developers Guide](https://docs.microsoft.com/azure/azure-functions/functions-reference-node?tabs=v2-v3-v4-export%2Cv2-v3-v4-done%2Cv2%2Cv2-log-custom-telemetry%2Cv2-accessing-request-and-response%2Cwindows-setting-the-node-version&WT.mc_id=javascript-99907-cxa). It covers:
 * Quickstarts for Node.js - using Visual Code, CLI or Azure Portal
 * Guidance on hosting options and performance considerations
 * Azure Functions [bindings](https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings?tabs=javascript#bindings-code-examples?WT.mc_id=javascript-99907-cxa) and ([code samples](https://docs.microsoft.com/samples/browse/?products=azure-functions&languages=javascript&WT.mc_id=javascript-99907-cxa)) for JavaScript
 * Scenario examples - integrations with other Azure Services


### Node.js 18 Support 

:::info Node.js 18 Support (Public Preview)
Azure Functions support for Node.js 18 [entered Public Preview on Aug 31, 2022](https://azure.microsoft.com/updates/public-preview-nodejs-18-in-azure-functions/?WT.mc_id=javascript-99907-cxa) and is supported by the [Azure Functions v.4.x runtime!](https://docs.microsoft.com/azure/azure-functions/functions-versions?tabs=azure-cli%2Cin-process%2Cv4&pivots=programming-language-javascript&WT.mc_id=javascript-99907-cxa)
:::

As we continue to explore how we can use Azure Functions, today we're going to look at using JavaScript to create one, and we're going to be using the newly released **Node.js 18 support for Azure Functions** to make the most out of the platform. 

Ensure you have Node.js 18 and Azure Functions v4.x versions installed, along with a text editor (I'll use VS Code in this post), and a terminal, then we're ready to go.



## Scenario: Calling The GitHub API

The application we're going to be building today will use the GitHub API to return a random commit message, so that we don't need to come up with one ourselves! After all, naming things can be really hard! 🤣 


### Creating the Azure Function
To create our Azure Function, we're going to use the [Azure Functions CLI](https://docs.microsoft.com/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash&WT.mc_id=javascript-99907-cxa), which we can install using npm:

```bash
npm install --global azure-function-core-tools
```

Once that's installed, we can use the new `func` command to initalise our project:

```bash
func init --worker-runtime node --language javascript
```

When running `func init` we can either provide the `worker-runtime` and `language` as arguments, or use the menu system that the tool will provide us. For brevity's stake, I've used the arguments here, specifying that we want `node` as the runtime and `javascript` as the language, but you could change that to `typescript` if you'd prefer to use TypeScript.

Once the `init` command is completed, you should have a `.vscode` folder, and the files `.gitignore`, `host.json`, `local.settings.json`, and `package.json`.

![Files generated by func init](./img/light/01.png#gh-light-mode-only)![Files generated by func init](./img/01.png#gh-dark-mode-only)

### Adding a HTTP Trigger

We have an empty Functions app so far, what we need to do next is create a Function that it will run, and we're going to make a HTTP Trigger Function, which is a Function that responds to HTTP requests. We'll use the `func new` command to create that:

```bash
func new --template "HTTP Trigger" --name "get-commit-message"
```

When this completes, we'll have a folder for the Function, using the name we provided, that contains the files`function.json` and `index.js`. Let's open the `function.json` to understand it a little bit:

```json
{
  "bindings": [
    {
      "authLevel": "function",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": [
        "get",
        "post"
      ]
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```

This file is used to tell Functions about the Function that we've created and what it does, so it knows to handle the appropriate events. We have a `bindings` node which contains the event bindings for our Azure Function. The first binding is using the `type` `httpTrigger`, which indicates that it'll be executed, or _triggered_, by a HTTP event, and the `methods` indicates that it's listening to both **GET** and **POST** (you can change this for the right HTTP methods that you want to support). The HTTP request information will be bound to a property in the Functions context called `req`, so we can access query strings, the request body, etc.

The other binding we have has the direction of `out`, meaning that it's something that the Function will _return_ to the called, and since this is a HTTP API, the `type` is `http`, indicating that we'll return a HTTP response, and that response will be on a property called `res` that we add to the Functions context.

Let's go ahead and start the Function and call it:

```bash
func start
```

![Starting the Function](./img/light/02.png#gh-light-mode-only)![Starting the Function](./img/02.png#gh-dark-mode-only)


With the Function started, access the endpoint `http://localhost:7071/api/get-commit-message` via a browser or using `cURL`:

```bash
curl http://localhost:7071/api/get-commit-message\?name\=ServerlessSeptember
```

![Hello from Azure Functions](./img/light/03.png#gh-light-mode-only)![Hello from Azure Functions](./img/03.png#gh-dark-mode-only)

:::success 🎉 CONGRATULATIONS
You created and ran a JavaScript function app locally!
:::

### Calling an external API

It's time to update the Function to do what we want to do - call the GitHub Search API and get some commit messages. The endpoint that we'll be calling is [https://api.github.com/search/commits?q=language:javascript](https://api.github.com/search/commits?q=language:javascript).

_Note: The GitHub API is [rate limited](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting) and this sample will call it unauthenticated, so be aware of that in your own testing._

To call this API, we'll leverage the newly released [`fetch` support in Node 18](https://nodejs.org/en/blog/announcements/v18-release-announce/#fetch-experimental) and `async`/`await`, to make for a very clean Function.

Open up the `index.js` file, and delete the contents of the existing `Function`, so we have a empty one:

```javascript
module.exports = async function (context, req) {

}
```

_The default template uses CommonJS, but you can use ES Modules with Azure Functions if you prefer._

Now we'll use `fetch` to call the API, and unpack the JSON response:

```javascript
module.exports = async function (context, req) {
    const res = await fetch("https://api.github.com/search/commits?q=language:javascript");
    const json = await res.json();
    const messages = json.items.map(item => item.commit.message);
    context.res = {
        body: {
            messages
        }
    };
}
```

To send a response to the client, we're setting the `context.res` property, where `res` is the name of the output binding in our `function.json`, and giving it a body that contains the commit messages.

Run `func start` again, and call the endpoint:

```bash
curl http://localhost:7071/api/get-commit-message
```

The you'll get some commit messages:

![A series of commit messages from the GitHub Search API](./img/light/04.png#gh-light-mode-only)![A series of commit messages from the GitHub Search API](./img/04.png#gh-dark-mode-only)


:::success 🎉 CONGRATULATIONS
There we go, we've created an Azure Function which is used as a proxy to another API, that we call (using native `fetch` in Node.js 18) and from which we return a subset of the JSON payload.
:::


## Next Steps

### Other Triggers, Bindings

This article focused on using the HTTPTrigger and relevant bindings, to build a serverless API using Azure Functions. How can you explore other supported bindings, with code samples to illustrate usage?
 * Start with the [Bindings](https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings?tabs=javascript#bindings-code-examples?WT.mc_id=javascript-99907-cxa) documentation to get a list of supported triggers/bindings for JavaScript
 * Explore the [Azure serverless community library](https://www.serverlesslibrary.net/?language=JavaScript) and [Azure Samples](https://docs.microsoft.com/samples/browse/?products=azure-functions&languages=javascript&WT.mc_id=javascript-99907-cxa) resources by technology.

### Scenarios with Integrations

Once you've tried out the samples, try building an end-to-end scenario by using these triggers to integrate seamlessly with other services. Here are some suggestions:
 * [Azure Queue storage trigger and bindings](https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-queue?tabs=in-process%2Cextensionv5%2Cextensionv3&pivots=programming-language-javascript&WT.mc_id=javascript-99907-cxa)
 * [Show GitHub start count with Azure SignalR service](https://docs.microsoft.com/azure/azure-signalr/signalr-quickstart-azure-functions-javascript?toc=%2Fazure%2Fazure-functions%2Ftoc.json&WT.mc_id=javascript-99907-cxa)
 * [Deploy a GraphQL API as an Azure Function](https://docs.microsoft.com/azure/developer/javascript/how-to/with-web-app/graphql/azure-function-hello-world?tabs=visualstudiocode&WT.mc_id=javascript-99907-cxa)


## Exercise: Support searching

The GitHub Search API allows you to provide search parameters via the `q` query string. In this sample, we hard-coded it to be `language:javascript`, but as a follow-on exercise, expand the Function to allow the caller to provide the search terms as a query string to the Azure Function, which is passed to the GitHub Search API. Hint - have a look at the `req` argument.

## Resources

- [Public preview of Node.js 18 for Azure Functions](https://azure.microsoft.com/updates/public-preview-nodejs-18-in-azure-functions/?WT.mc_id=javascript-99907-cxa)
- [`fetch` support in Node.js 18](https://nodejs.org/en/blog/announcements/v18-release-announce/#fetch-experimental)
- [Refactor Node.js and Express APIs to Serverless APIs with Azure Functions](https://docs.microsoft.com/learn/modules/shift-nodejs-express-apis-serverless/?WT.mc_id=javascript-99907-cxa)
