"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1757],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(4137));const o={slug:"04-functions-java",title:"04. Functions For Java Devs",authors:["rory"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Introducing Azure Functions to the Java Developer. Learn how to create and deploy your first Java Functions app, and where you can go from here.",tags:["serverless-september","azure-functions","java","serverless"]},i=void 0,s={permalink:"/Cloud-Native/blog/04-functions-java",source:"@site/blog/2022-09-04/index.md",title:"04. Functions For Java Devs",description:"Introducing Azure Functions to the Java Developer. Learn how to create and deploy your first Java Functions app, and where you can go from here.",date:"2022-09-04T00:00:00.000Z",formattedDate:"September 4, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"},{label:"java",permalink:"/Cloud-Native/blog/tags/java"},{label:"serverless",permalink:"/Cloud-Native/blog/tags/serverless"}],readingTime:7.465,hasTruncateMarker:!1,authors:[{name:"Rory Preddy",title:"Principal Cloud Advocate @Microsoft",url:"https://github.com/roryp",imageURL:"https://github.com/roryp.png",key:"rory"}],frontMatter:{slug:"04-functions-java",title:"04. Functions For Java Devs",authors:["rory"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Introducing Azure Functions to the Java Developer. Learn how to create and deploy your first Java Functions app, and where you can go from here.",tags:["serverless-september","azure-functions","java","serverless"]},prevItem:{title:"03. Build Your First Function",permalink:"/Cloud-Native/blog/03-functions-quickstart"},nextItem:{title:"05. Functions for JS Devs",permalink:"/Cloud-Native/blog/05-functions-js"}},l={image:a(3548).Z,authorsImageUrls:[void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Developer Guidance",id:"developer-guidance",level:2},{value:"My First Java Functions App",id:"my-first-java-functions-app",level:2},{value:"VS Code Setup",id:"vs-code-setup",level:3},{value:"1. Create App",id:"1-create-app",level:3},{value:"2. Preview App",id:"2-preview-app",level:3},{value:"3. Sign into Azure",id:"3-sign-into-azure",level:3},{value:"4. Deploy App",id:"4-deploy-app",level:3},{value:"5. Clean up",id:"5-clean-up",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Other Triggers, Bindings",id:"other-triggers-bindings",level:3},{value:"Scenario with Integrations",id:"scenario-with-integrations",level:3},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/04-functions-java"}),(0,r.kt)("meta",{name:"twitter:title",content:"Azure Functions: For The Java Developer"}),(0,r.kt)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Azure Functions For The Java Developer"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/assets/images/post-kickoff-4a04995b44f0cc4a784fb4ab5e29cf7c.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/04-functions-java"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 4")," of #30DaysOfServerless!"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Yesterday")," we walked through an Azure Functions Quickstart with JavaScript, and used it to understand the general Functions App structure, tooling and developer experience. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Today")," we'll look at developing Functions app with a ",(0,r.kt)("em",{parentName:"p"},"different")," programming language - namely, ",(0,r.kt)("strong",{parentName:"p"},"Java")," - and explore developer guidance, tools and resources to build serverless Java solutions on Azure."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developer Guidance"),": For Azure Functions on Java"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Build & Deploy"),": Our First Java Functions App"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Usage Tutorials"),": Integrate App with other Azure Services"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Azure Samples"),": Explore samples for other triggers, bindings"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Exercise:")," ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/learn/modules/develop-azure-functions-app-with-maven-plugin/"},"Develop Java serverless Functions on Azure using Maven")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Resources"),": Check out ",(0,r.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/java/"},"Java at Microsoft")," and use ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JavaYourWay"},"Java Your Way"),"!")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3548).Z,width:"1600",height:"672"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"developer-guidance"},"Developer Guidance"),(0,r.kt)("p",null,"If you're a Java developer new to serverless on Azure, start by exploring the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-java?tabs=bash%2Cconsumption"},"Azure Functions Java Developer Guide"),". It covers: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quickstarts with ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-java"},"Visual Studio Code")," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-java?tabs=bash%2Cazure-cli%2Cbrowser"},"Azure CLI")),(0,r.kt)("li",{parentName:"ul"},"Building with Maven-based tooling for ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-java-gradle"},"Gradle"),", ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-maven-eclipse"},"Eclipse")," & ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-maven-intellij"},"IntelliJ IDEA")),(0,r.kt)("li",{parentName:"ul"},"Exploring ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-java?tabs=bash%2Cconsumption#project-scaffolding"},"project scaffolding")," & ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-java?tabs=bash%2Cconsumption#jdk-runtime-availability-and-support"},"JDK runtimes")," (Java 8 and Java 11)"),(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-java?tabs=bash%2Cconsumption#triggers-and-annotations"},"Java annotations for Triggers, Bindings")," - with ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/java/api/com.microsoft.azure.functions.annotation?view=azure-java-stable"},"reference")," docs."),(0,r.kt)("li",{parentName:"ul"},"Adopting ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-best-practices?tabs=java"},"best practices")," for hosting, reliability and efficiency."),(0,r.kt)("li",{parentName:"ul"},"Java ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/samples/azure-samples/azure-functions-samples-java/azure-functions-java/"},"code samples")," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-event-hub-cosmos-db?tabs=bash"},"integration tutorials"))),(0,r.kt)("p",null,"In this blog post, we'll dive into one quickstart, and discuss other resources briefly, for awareness! Do check out the recommended exercises and resources for self-study! "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"my-first-java-functions-app"},"My First Java Functions App"),(0,r.kt)("p",null,"In today's post, we'll walk through the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-gb/azure/azure-functions/create-first-function-vs-code-java"},"Quickstart: Azure Functions")," tutorial using Visual Studio Code. In the process, we'll setup our development environment with the relevant command-line tools and VS Code extensions to make building Functions app simpler."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Completing this exercise may incur a a cost of a few USD cents based on your Azure subscription. Explore ",(0,r.kt)("a",{parentName:"em",href:"https://azure.microsoft.com/en-us/pricing/details/functions/#pricing"},"pricing details")," to learn more"),"."),(0,r.kt)("p",null,"First, make sure you have your development environment setup and configured."),(0,r.kt)("admonition",{title:"PRE-REQUISITES",type:"info"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"An Azure account with an active subscription")," - ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/free/?ref=microsoft.com&utm_source=microsoft.com&utm_medium=docs&utm_campaign=visualstudio"},"Create an account for free")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"The Java Development Kit, version 11 or 8.")," - ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/developer/java/fundamentals/java-support-on-azure"},"Install")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Apache Maven, version 3.0 or above.")," - ",(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/"},"Install")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Visual Studio Code.")," - ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Install")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"The Java extension pack")," - ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack"},"Install")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"The Azure Functions extension for Visual Studio Code")," - ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions"},"Install")))),(0,r.kt)("h3",{id:"vs-code-setup"},"VS Code Setup"),(0,r.kt)("admonition",{title:"NEW TO VISUAL STUDIO CODE?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Start with the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/languages/java"},"Java in Visual Studio Code")," tutorial to jumpstart your learning!")),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack"},"Extension Pack for Java")," (shown below) to install 6 popular extensions to help development workflow from creation to testing, debugging, and deployment."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Extension Pack for Java",src:a(1300).Z,width:"973",height:"573"})),(0,r.kt)("p",null,"Now, it's time to get started on our first Java-based Functions app."),(0,r.kt)("h3",{id:"1-create-app"},"1. Create App"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a command-line terminal and create a folder for your project. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," command to launch Visual Studio Code from that directory as shown:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir java-function-resource-group-api\n$ cd java-function-resource-group-api\n$ code .\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the Visual Studio Command Palette (",(0,r.kt)("kbd",null,"Ctrl")," + ",(0,r.kt)("kbd",null,"Shift")," + ",(0,r.kt)("kbd",null,"p"),") and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Azure Functions: create new project")," to kickstart the create workflow. Alternatively, you can click the Azure icon (on activity sidebar), to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"Workspace"),' window,  click "+" and pick the "Create Function" option as shown below.'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Screenshot of creating function in Azure from Visual Studio Code.",src:a(9468).Z,width:"1128",height:"512"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This triggers a multi-step workflow. Fill in the information for each step as shown in the following prompts. ",(0,r.kt)("strong",{parentName:"p"},"Important:")," Start this process from an empty folder - the workflow will populate it with the scaffold for your Java-based Functions app."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prompt"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Choose the directory location.")),(0,r.kt)("td",{parentName:"tr",align:null},"You should either create a new folder or choose an empty folder for the project workspace. Don't choose a project folder that is already part of a workspace.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Select a language")),(0,r.kt)("td",{parentName:"tr",align:null},"Choose ",(0,r.kt)("inlineCode",{parentName:"td"},"Java"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Select a version of Java")),(0,r.kt)("td",{parentName:"tr",align:null},"Choose ",(0,r.kt)("inlineCode",{parentName:"td"},"Java 11")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"Java 8"),", the Java version on which your functions run in Azure. Choose a Java version that you've verified locally.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Provide a group ID")),(0,r.kt)("td",{parentName:"tr",align:null},"Choose ",(0,r.kt)("inlineCode",{parentName:"td"},"com.function"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Provide an artifact ID")),(0,r.kt)("td",{parentName:"tr",align:null},"Enter ",(0,r.kt)("inlineCode",{parentName:"td"},"myFunction"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Provide a version")),(0,r.kt)("td",{parentName:"tr",align:null},"Choose ",(0,r.kt)("inlineCode",{parentName:"td"},"1.0-SNAPSHOT"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Provide a package name")),(0,r.kt)("td",{parentName:"tr",align:null},"Choose ",(0,r.kt)("inlineCode",{parentName:"td"},"com.function"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Provide an app name")),(0,r.kt)("td",{parentName:"tr",align:null},"Enter ",(0,r.kt)("inlineCode",{parentName:"td"},"HttpExample"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Select the build tool for Java project")),(0,r.kt)("td",{parentName:"tr",align:null},"Choose ",(0,r.kt)("inlineCode",{parentName:"td"},"Maven"),".")))))),(0,r.kt)("p",null,"Visual Studio Code uses the provided information and generates an Azure Functions project. You can view the local project files in the Explorer - it should look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Azure Functions Scaffold For Java",src:a(6533).Z,width:"1458",height:"897"})),(0,r.kt)("h3",{id:"2-preview-app"},"2. Preview App"),(0,r.kt)("p",null,"Visual Studio Code integrates with the Azure Functions Core tools to let you run this project on your local development computer before you publish to Azure."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To build and run the application, use the following Maven command. You should see output similar to that shown below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ mvn clean package azure-functions:run\n..\n..\nNow listening on: http://0.0.0.0:7071\nApplication started. Press Ctrl+C to shut down.\n\nHttp Functions:\n\n  HttpExample: [GET,POST] http://localhost:7071/api/HttpExample\n...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the URL of your HttpExample function from this output to a browser and append the query string ",(0,r.kt)("strong",{parentName:"p"},"?name=<YOUR_NAME>"),", making the full URL something like ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:7071/api/HttpExample?name=Functions"),". The browser should display a message that echoes back your query string value. The terminal in which you started your project also shows log output as you make requests."))),(0,r.kt)("admonition",{title:"\ud83c\udf89 CONGRATULATIONS",type:"success"},(0,r.kt)("p",{parentName:"admonition"},"You created and ran a function app locally!")),(0,r.kt)("p",null,"With the ",(0,r.kt)("strong",{parentName:"p"},"Terminal")," panel focused, press ",(0,r.kt)("kbd",null,"Ctrl + C")," to stop Core Tools and disconnect the debugger. After you've verified that the function runs correctly on your local computer, it's time to use Visual Studio Code and Maven to publish and test the project on Azure."),(0,r.kt)("h3",{id:"3-sign-into-azure"},"3. Sign into Azure"),(0,r.kt)("p",null,"Before you can deploy, sign in to your Azure subscription."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"az login\n")),(0,r.kt)("p",null,"The az login command signs you into your Azure account."),(0,r.kt)("p",null,"Use the following command to deploy your project to a new function app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean package azure-functions:deploy\n")),(0,r.kt)("p",null,"When the creation is complete, the following Azure resources are created in your subscription:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resource group. Named as java-functions-group."),(0,r.kt)("li",{parentName:"ul"},"Storage account. Required by Functions. The name is generated randomly based on Storage account name requirements."),(0,r.kt)("li",{parentName:"ul"},"Hosting plan. Serverless hosting for your function app.The name is ",(0,r.kt)("em",{parentName:"li"},"java-functions-app-service-plan"),"."),(0,r.kt)("li",{parentName:"ul"},"Function app. A function app is the deployment and execution unit for your functions. The name is randomly generated based on your artifactId, appended with a randomly generated number.")),(0,r.kt)("h3",{id:"4-deploy-app"},"4. Deploy App"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Back in the ",(0,r.kt)("strong",{parentName:"p"},"Resources")," area in the side bar, expand your subscription, your new function app, and ",(0,r.kt)("strong",{parentName:"p"},"Functions"),". Right-click (Windows) or ",(0,r.kt)("kbd",null,"Ctrl -")," click (macOS) the ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpExample")," function and choose ",(0,r.kt)("strong",{parentName:"p"},"Execute Function Now..."),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Screenshot of executing function in Azure from Visual Studio Code.",src:a(2578).Z,width:"964",height:"587"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Enter request body")," you see the request message body value of ",(0,r.kt)("inlineCode",{parentName:"p"},'{ "name": "Azure" }'),". Press Enter to send this request message to your function.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the function executes in Azure and returns a response, a notification is raised in Visual Studio Code."))),(0,r.kt)("p",null,"You can also copy the complete Invoke URL shown in the output of the publish command into a browser address bar, appending the query parameter ?name=Functions. The browser should display similar output as when you ran the function locally."),(0,r.kt)("admonition",{title:"\ud83c\udf89 CONGRATULATIONS",type:"success"},(0,r.kt)("p",{parentName:"admonition"},"You deployed your function app to Azure, and invoked it!")),(0,r.kt)("h3",{id:"5-clean-up"},"5. Clean up"),(0,r.kt)("p",null,"Use the following command to delete the resource group and all its contained resources to avoid incurring further costs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"az group delete --name java-functions-group\n")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"So, where can you go from here? The example above used a familiar ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP Trigger")," scenario with a single Azure service (Azure Functions). Now, think about how you can build richer workflows by using other triggers and integrating with other Azure or third-party services."),(0,r.kt)("h3",{id:"other-triggers-bindings"},"Other Triggers, Bindings"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/samples/azure-samples/azure-functions-samples-java/azure-functions-java/"},"Azure Functions Samples In Java")," for samples (and short use cases) that highlight other triggers - with code! This includes triggers to integrate with CosmosDB, Blob Storage, Event Grid, Event Hub, Kafka and more."),(0,r.kt)("h3",{id:"scenario-with-integrations"},"Scenario with Integrations"),(0,r.kt)("p",null,"Once you've tried out the samples, try building an end-to-end scenario by using these triggers to integrate seamlessly with other Services. Here are a couple of useful tutorials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Azure Functions with ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-event-hub-cosmos-db?tabs=bash"},"Event Hub trigger and CosmosDB output binding")),(0,r.kt)("li",{parentName:"ul"},"GitHub Star Count app with ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-quickstart-azure-functions-java?toc=%2Fazure%2Fazure-functions%2Ftoc.json"},"SignalR trigger"))),(0,r.kt)("h2",{id:"exercise"},"Exercise"),(0,r.kt)("p",null,"Time to put this into action and validate your development workflow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Walk through this tutorial yourself, and deploy your first function!"),(0,r.kt)("li",{parentName:"ul"},"Complete the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/learn/modules/develop-azure-functions-app-with-maven-plugin/"},"Develop Java serverless Functions on Azure using Maven")," module")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-java"},"Azure Functions: Java Quickstarts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/learn/paths/best-practices-java-azure/"},"Best Practices for Java Apps On Azure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/java/"},"Java at Microsoft")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-event-hub-cosmos-db?tabs=bash"},"Java with EventHub Trigger and CosmosDB Binding")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-quickstart-azure-functions-java?toc=%2Fazure%2Fazure-functions%2Ftoc.json"},"Java Integrations: Azure Functions and SignalR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/samples/browse/?products=azure-functions&languages=java"},"Java Samples: Azure Functions"))))}c.isMDXComponent=!0},9468:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/32-create-new-project-07d80b09a19bd07e1de4b7cb9727481e.png"},2578:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/32-execute-function-now-917cb96cfd96a78734f14c35ec707ad0.png"},3548:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-1fe4ed12e849a9e072fc54371b92edab.png"},1300:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-extensions-5c720de054b0eda999f162bc9a49955a.png"},6533:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-scaffold-4b46320f72ecaf9273320f0a21af381a.png"}}]);