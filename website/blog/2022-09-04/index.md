---
slug: 04-functions-java
title: 04. Functions For Java Devs 
authors: [rory]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [azure, functions, serverless, concepts]
image: ./img/banner.png
description: "Introducing Azure Functions to the Java Developer. Learn how to create and deploy your first Java Functions app, and where you can go from here." 
tags: [serverless-september, azure-functions, java, serverless]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/blog/04-functions-java" />
  <meta name="twitter:title" 
    content="Azure Functions: For The Java Developer" />
  <meta name="twitter:description" 
    content="#30DaysOfServerless: Azure Functions For The Java Developer" />
  <meta name="twitter:image"
    content="https://azure.github.io/Cloud-Native/assets/images/post-kickoff-4a04995b44f0cc4a784fb4ab5e29cf7c.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/blog/04-functions-java" />
</head>

---

Welcome to `Day 4` of #30DaysOfServerless!

_Yesterday_ we walked through an Azure Functions Quickstart with JavaScript, and used it to understand the general Functions App structure, tooling and developer experience. 

_Today_ we'll look at developing Functions app with a _different_ programming language - namely, **Java** - and explore developer guidance, tools and resources to build serverless Java solutions on Azure.

---

## What We'll Cover
 * **Developer Guidance**: For Azure Functions on Java
 * **Build & Deploy**: Our First Java Functions App
 * **Usage Tutorials**: Integrate App with other Azure Services
 * **Azure Samples**: Explore samples for other triggers, bindings
 * **Exercise:** [Develop Java serverless Functions on Azure using Maven](https://docs.microsoft.com/learn/modules/develop-azure-functions-app-with-maven-plugin/) 
 * **Resources**: Check out [Java at Microsoft](https://developer.microsoft.com/java/) and use [Java Your Way](https://aka.ms/JavaYourWay)!

![](./img/banner.png)

---

## Developer Guidance

If you're a Java developer new to serverless on Azure, start by exploring the [Azure Functions Java Developer Guide](https://docs.microsoft.com/azure/azure-functions/functions-reference-java?tabs=bash%2Cconsumption). It covers: 
 * Quickstarts with [Visual Studio Code](https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-java) and [Azure CLI](https://docs.microsoft.com/azure/azure-functions/create-first-function-cli-java?tabs=bash%2Cazure-cli%2Cbrowser)
 * Building with Maven-based tooling for [Gradle](https://docs.microsoft.com/azure/azure-functions/functions-create-first-java-gradle), [Eclipse](https://docs.microsoft.com/azure/azure-functions/functions-create-maven-eclipse) & [IntelliJ IDEA](https://docs.microsoft.com/azure/azure-functions/functions-create-maven-intellij)
 * Exploring [project scaffolding](https://docs.microsoft.com/azure/azure-functions/functions-reference-java?tabs=bash%2Cconsumption#project-scaffolding) & [JDK runtimes](https://docs.microsoft.com/azure/azure-functions/functions-reference-java?tabs=bash%2Cconsumption#jdk-runtime-availability-and-support) (Java 8 and Java 11)
 * Using [Java annotations for Triggers, Bindings](https://docs.microsoft.com/azure/azure-functions/functions-reference-java?tabs=bash%2Cconsumption#triggers-and-annotations) - with [reference](https://docs.microsoft.com/java/api/com.microsoft.azure.functions.annotation?view=azure-java-stable) docs.
 * Adopting [best practices](https://docs.microsoft.com/azure/azure-functions/functions-best-practices?tabs=java) for hosting, reliability and efficiency.
 * Java [code samples](https://docs.microsoft.com/samples/azure-samples/azure-functions-samples-java/azure-functions-java/) and [integration tutorials](https://docs.microsoft.com/azure/azure-functions/functions-event-hub-cosmos-db?tabs=bash)

In this blog post, we'll dive into one quickstart, and discuss other resources briefly, for awareness! Do check out the recommended exercises and resources for self-study! 

---

## My First Java Functions App

In today's post, we'll walk through the [Quickstart: Azure Functions](https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-java) tutorial using Visual Studio Code. In the process, we'll setup our development environment with the relevant command-line tools and VS Code extensions to make building Functions app simpler.

_Note: Completing this exercise may incur a a cost of a few USD cents based on your Azure subscription. Explore [pricing details](https://azure.microsoft.com/pricing/details/functions/#pricing) to learn more_.

First, make sure you have your development environment setup and configured.

:::info PRE-REQUISITES

 1. **An Azure account with an active subscription** - [Create an account for free](https://azure.microsoft.com/free/?ref=microsoft.com&utm_source=microsoft.com&utm_medium=docs&utm_campaign=visualstudio)
 2. **The Java Development Kit, version 11 or 8.** - [Install](https://docs.microsoft.com/azure/developer/java/fundamentals/java-support-on-azure)
 3. **Apache Maven, version 3.0 or above.** - [Install](https://maven.apache.org/)
 4. **Visual Studio Code.** - [Install](https://code.visualstudio.com/)
 5. **The Java extension pack** - [Install](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
 6. **The Azure Functions extension for Visual Studio Code** - [Install](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
:::


### VS Code Setup

:::note NEW TO VISUAL STUDIO CODE?
Start with the [Java in Visual Studio Code](https://code.visualstudio.com/docs/languages/java) tutorial to jumpstart your learning!
:::

Install the [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) (shown below) to install 6 popular extensions to help development workflow from creation to testing, debugging, and deployment.

![Extension Pack for Java](./img/java-extensions.png)

Now, it's time to get started on our first Java-based Functions app.



### 1. Create App

1. Open a command-line terminal and create a folder for your project. Use the `code` command to launch Visual Studio Code from that directory as shown:

    ```bash
    $ mkdir java-function-resource-group-api
    $ cd java-function-resource-group-api
    $ code .
    ```

2. Open the Visual Studio Command Palette (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd>) and select `Azure Functions: create new project` to kickstart the create workflow. Alternatively, you can click the Azure icon (on activity sidebar), to get the `Workspace` window,  click "+" and pick the "Create Function" option as shown below.

    ![Screenshot of creating function in Azure from Visual Studio Code.](./img/32-create-new-project.png)

3. This triggers a multi-step workflow. Fill in the information for each step as shown in the following prompts. **Important:** Start this process from an empty folder - the workflow will populate it with the scaffold for your Java-based Functions app.

    |Prompt|Value|
    |--|--|
    |**Choose the directory location.**|You should either create a new folder or choose an empty folder for the project workspace. Don't choose a project folder that is already part of a workspace.|
    |**Select a language**| Choose `Java`.|
    |**Select a version of Java**| Choose `Java 11` or `Java 8`, the Java version on which your functions run in Azure. Choose a Java version that you've verified locally. |
    | **Provide a group ID** | Choose `com.function`. |
    | **Provide an artifact ID** | Enter `myFunction`. |
    | **Provide a version** | Choose `1.0-SNAPSHOT`. |
    | **Provide a package name** | Choose `com.function`. |
    | **Provide an app name** | Enter `HttpExample`. |
    | **Select the build tool for Java project** | Choose `Maven`. |


Visual Studio Code uses the provided information and generates an Azure Functions project. You can view the local project files in the Explorer - it should look like this:

![Azure Functions Scaffold For Java](./img/java-scaffold.png)

### 2. Preview App


Visual Studio Code integrates with the Azure Functions Core tools to let you run this project on your local development computer before you publish to Azure.

1. To build and run the application, use the following Maven command. You should see output similar to that shown below.

  ```bash
  $ mvn clean package azure-functions:run
  ..
  ..
  Now listening on: http://0.0.0.0:7071
  Application started. Press Ctrl+C to shut down.

  Http Functions:

    HttpExample: [GET,POST] http://localhost:7071/api/HttpExample
  ...
  ```

2. Copy the URL of your HttpExample function from this output to a browser and append the query string **?name=<YOUR_NAME>**, making the full URL something like `http://localhost:7071/api/HttpExample?name=Functions`. The browser should display a message that echoes back your query string value. The terminal in which you started your project also shows log output as you make requests.

:::success 🎉 CONGRATULATIONS
You created and ran a function app locally!
:::

With the **Terminal** panel focused, press <kbd>Ctrl + C</kbd> to stop Core Tools and disconnect the debugger. After you've verified that the function runs correctly on your local computer, it's time to use Visual Studio Code and Maven to publish and test the project on Azure.

### 3. Sign into Azure

Before you can deploy, sign in to your Azure subscription.

```bash
az login
```

The az login command signs you into your Azure account.

Use the following command to deploy your project to a new function app.

```bash
mvn clean package azure-functions:deploy
```

When the creation is complete, the following Azure resources are created in your subscription:

* Resource group. Named as java-functions-group.
* Storage account. Required by Functions. The name is generated randomly based on Storage account name requirements.
* Hosting plan. Serverless hosting for your function app.The name is *java-functions-app-service-plan*.
* Function app. A function app is the deployment and execution unit for your functions. The name is randomly generated based on your artifactId, appended with a randomly generated number.


### 4. Deploy App

1. Back in the **Resources** area in the side bar, expand your subscription, your new function app, and **Functions**. Right-click (Windows) or <kbd>Ctrl -</kbd> click (macOS) the `HttpExample` function and choose **Execute Function Now...**.

    ![Screenshot of executing function in Azure from Visual Studio Code.](./img/32-execute-function-now.png)

2. In **Enter request body** you see the request message body value of `{ "name": "Azure" }`. Press Enter to send this request message to your function.

3. When the function executes in Azure and returns a response, a notification is raised in Visual Studio Code.

You can also copy the complete Invoke URL shown in the output of the publish command into a browser address bar, appending the query parameter ?name=Functions. The browser should display similar output as when you ran the function locally.

:::success 🎉 CONGRATULATIONS
You deployed your function app to Azure, and invoked it!
:::


### 5. Clean up

Use the following command to delete the resource group and all its contained resources to avoid incurring further costs.

```bash
az group delete --name java-functions-group
```

## Next Steps

So, where can you go from here? The example above used a familiar `HTTP Trigger` scenario with a single Azure service (Azure Functions). Now, think about how you can build richer workflows by using other triggers and integrating with other Azure or third-party services.

### Other Triggers, Bindings

Check out [Azure Functions Samples In Java](https://docs.microsoft.com/samples/azure-samples/azure-functions-samples-java/azure-functions-java/) for samples (and short use cases) that highlight other triggers - with code! This includes triggers to integrate with CosmosDB, Blob Storage, Event Grid, Event Hub, Kafka and more.

### Scenario with Integrations

Once you've tried out the samples, try building an end-to-end scenario by using these triggers to integrate seamlessly with other Services. Here are a couple of useful tutorials:
 * Azure Functions with [Event Hub trigger and CosmosDB output binding](https://docs.microsoft.com/azure/azure-functions/functions-event-hub-cosmos-db?tabs=bash)
 * GitHub Star Count app with [SignalR trigger](https://docs.microsoft.com/azure/azure-signalr/signalr-quickstart-azure-functions-java?toc=%2Fazure%2Fazure-functions%2Ftoc.json)


## Exercise

Time to put this into action and validate your development workflow:
 * Walk through this tutorial yourself, and deploy your first function!
 * Complete the [Develop Java serverless Functions on Azure using Maven](https://docs.microsoft.com/learn/modules/develop-azure-functions-app-with-maven-plugin/) module

## Resources
 * [Azure Functions: Java Quickstarts](https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-java)
 * [Best Practices for Java Apps On Azure](https://docs.microsoft.com/learn/paths/best-practices-java-azure/)
 * [Java at Microsoft](https://developer.microsoft.com/java/) 
 * [Java with EventHub Trigger and CosmosDB Binding](https://docs.microsoft.com/azure/azure-functions/functions-event-hub-cosmos-db?tabs=bash)
 * [Java Integrations: Azure Functions and SignalR](https://docs.microsoft.com/azure/azure-signalr/signalr-quickstart-azure-functions-java?toc=%2Fazure%2Fazure-functions%2Ftoc.json)
 * [Java Samples: Azure Functions](https://docs.microsoft.com/samples/browse/?products=azure-functions&languages=java)
