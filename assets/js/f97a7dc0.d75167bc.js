"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7192],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=i,h=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={date:"2023-10-16T09:00",slug:"deploy-an-intelligent-app-on-azure-container-apps-1",title:"3-1. Deploy an Intelligent App on Azure Container Apps (1)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Explore the power of multi-model databases for Intelligent Apps and their integration with Azure Cosmos DB and Azure Kubernetes Service (AKS).",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},o=void 0,s={permalink:"/Cloud-Native/30DaysOfIA/deploy-an-intelligent-app-on-azure-container-apps-1",source:"@site/blog-30daysofIA/2023-10-16/deploy-an-intelligent-app-on-azure-container-apps-1.md",title:"3-1. Deploy an Intelligent App on Azure Container Apps (1)",description:"Explore the power of multi-model databases for Intelligent Apps and their integration with Azure Cosmos DB and Azure Kubernetes Service (AKS).",date:"2023-10-16T09:00:00.000Z",formattedDate:"October 16, 2023",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30DaysOfIA/tags/build-intelligent-apps"},{label:"30-days-of-IA",permalink:"/Cloud-Native/30DaysOfIA/tags/30-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/30DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/30DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/30DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/30DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30DaysOfIA/tags/github-actions"}],readingTime:13.565,hasTruncateMarker:!1,authors:[{name:"It's 30DaysOfIA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-ms-cloud-native.png",key:"cnteam"}],frontMatter:{date:"2023-10-16T09:00",slug:"deploy-an-intelligent-app-on-azure-container-apps-1",title:"3-1. Deploy an Intelligent App on Azure Container Apps (1)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Explore the power of multi-model databases for Intelligent Apps and their integration with Azure Cosmos DB and Azure Kubernetes Service (AKS).",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},nextItem:{title:"3-2. Deploy an Intelligent App on Azure Container Apps (2)",permalink:"/Cloud-Native/30DaysOfIA/deploy-an-intelligent-app-on-azure-container-apps-2"}},l={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover:",id:"what-well-cover",level:2},{value:"Deploy an Intelligent App on Azure Container Apps with Azure AI (1)",id:"deploy-an-intelligent-app-on-azure-container-apps-with-azure-ai-1",level:2},{value:"Solution Architecture",id:"solution-architecture",level:3},{value:"Understanding Azure AI and Azure Container Apps",id:"understanding-azure-ai-and-azure-container-apps",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting Up Your Azure Environment",id:"setting-up-your-azure-environment",level:2},{value:"Designing the Intelligent App",id:"designing-the-intelligent-app",level:2},{value:"Building the Basic App",id:"building-the-basic-app",level:3},{value:"Adding the Models and Connecting the Database",id:"adding-the-models-and-connecting-the-database",level:3},{value:"Building the Database Structure and Adding Products",id:"building-the-database-structure-and-adding-products",level:3},{value:"Creating Views",id:"creating-views",level:3},{value:"Exercise",id:"exercise",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30daysofia/deploy-an-intelligent-app-on-azure-container-apps-1"}),(0,i.kt)("meta",{property:"og:type",content:"website"}),(0,i.kt)("meta",{property:"og:title",content:"Build Intelligent Apps!| Build AI Apps On Azure"}),(0,i.kt)("meta",{property:"og:description",content:"Create a user feedback analysis application by setting up an Azure environment to deploy and manage the app using Azure Container Apps and Azure AI"}),(0,i.kt)("meta",{property:"og:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30daysofIA/deploy-an-intelligent-app-on-azure-container-apps-1"}),(0,i.kt)("meta",{name:"twitter:title",content:"Build Intelligent Apps! | Build AI Apps On Azure"}),(0,i.kt)("meta",{name:"twitter:description",content:"3-1. Create a user feedback analysis application by setting up an Azure environment to deploy and manage the app using Azure Container Apps and Azure AI."}),(0,i.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30daysofIA/deploy-an-intelligent-app-on-azure-container-apps-1"})),(0,i.kt)("p",null,"In this article, explore how to create a user feedback analysis application by setting up an Azure environment to deploy and manage the app using ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/container-apps/?WT.mc_id=javascript-99907-ninarasi"},"Azure Container Apps")," and ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/ai-services/?WT.mc_id=javascript-99907-ninarasi"},"Azure AI"),"."),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Understanding Azure AI and Azure Container Apps "),(0,i.kt)("li",{parentName:"ul"},"Setting up your Azure environment"),(0,i.kt)("li",{parentName:"ul"},"Designing the intelligent application")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of an intelligent app on Azure",src:a(38447).Z,width:"624",height:"380"})),(0,i.kt)("h2",{id:"deploy-an-intelligent-app-on-azure-container-apps-with-azure-ai-1"},"Deploy an Intelligent App on Azure Container Apps with Azure AI (1)"),(0,i.kt)("p",null,"As developers, we\u2019re all acutely aware of how artificial intelligence (AI) has transformed and revolutionized application development. AI technologies like machine learning (ML) and natural language processing (NLP) have enabled us to create a personalized, adaptive user experience\u2014Intelligent Apps. Intelligent Apps leverage AI algorithms to learn from user interactions and make real-time decisions. "),(0,i.kt)("p",null,"As the demand for Intelligent Apps continues to soar, we\u2019ll increasingly need to integrate AI components into our applications. This work can be complex and resource-intensive, but it doesn\u2019t have to be. "),(0,i.kt)("p",null,"In this article\u2014the first of a series on building Intelligent Apps with ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/container-apps/?WT.mc_id=javascript-99907-ninarasi"},"Azure Container Apps"),"\u2014we\u2019ll explore how to incorporate AI into an application and transition that app to production. We\u2019ll create a user feedback analysis application and walk through setting up an Azure environment, then deploying and managing the app using Azure Container Apps."),(0,i.kt)("h3",{id:"solution-architecture"},"Solution Architecture"),(0,i.kt)("p",null,"The image below shows the architecture of the solution we\u2019re aiming for in this article."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image showing architecture of the solution described in this article",src:a(54052).Z,width:"624",height:"392"})),(0,i.kt)("h2",{id:"understanding-azure-ai-and-azure-container-apps"},"Understanding Azure AI and Azure Container Apps"),(0,i.kt)("p",null,"In this tutorial, we\u2019ll use a combination of ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/ai-services/openai-service?WT.mc_id=javascript-99907-ninarasi"},"Azure OpenAI"),"\u2014a tool for creating Intelligent Apps using large language models (LLMs)\u2014and ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/container-apps?WT.mc_id=javascript-99907-ninarasi"},"Azure Container Apps"),"\u2014a fully managed Kubernetes-based platform that helps us deploy from containers and code. These two dynamic tools will serve as the backbone of our app\u2019s functionality. "),(0,i.kt)("p",null,"Azure Open AI will infuse intelligence into our application through APIs that process our data. Specifically, we\u2019ll leverage the ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-ca/products/cognitive-services/language-service/?WT.mc_id=javascript-99907-ninarasi"},"Sentiment Analysis API")," to assess customer sentiment from their feedback and reviews. "),(0,i.kt)("p",null,"On the front end, we\u2019ll employ Azure Container Apps to deploy our Kubernetes-based application. This approach relieves us from worrying about any infrastructure orchestration, enabling our application to scale up and down to meet load requirements. "),(0,i.kt)("p",null,"Finally, we\u2019ll use ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview?view=azuresql&viewFallbackFrom=azuresql&WT.mc_id=3Djavascript-99907-ninarasi"},"Azure SQL Database")," to store both the feedback and sentiment datasets. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Watch the ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/Build-IA/LearnLive/?WT.mc_id=javascript-99907-ninarasi"},"on-demand Learn Live serverless series")," that deconstructs a reference architecture for building intelligent apps using Azure Container Apps and Azure AI.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To follow this tutorial, you\u2019ll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An Azure account. Signing up for a ",(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/free/"},"free account")," gives you complimentary credits for the first month and access to a number of basic services. When you create a new account, you\u2019ll have to provide a credit card to verify transactions in case you use more resources than your allocation. For these articles, we\u2019ll minimize spending as much as possible."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop")," version 3.5.1 or newer installed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/vs/community/"},"Visual Studio")," installed. This demonstration uses Community Edition 2022.")),(0,i.kt)("p",null,"To see the project in action, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/contentlab-io/Microsoft-Building-Your-First-Intelligent-App-with-Azure-Cognitive-Services/tree/main/Microsoft_Series_2_Code/Source%20-%20Article%207%20%2B%208/UserFeedbackApp/Models"},"complete project code"),". "),(0,i.kt)("h2",{id:"setting-up-your-azure-environment"},"Setting Up Your Azure Environment"),(0,i.kt)("p",null,"Before we design our application, we need to configure our Azure environment, Visual Studio, and a basic application template. "),(0,i.kt)("p",null,"First, we need an Azure account with a resource group ready to deploy our application. We\u2019ll start by creating a new resource group to hold all our project items. Log in, click ",(0,i.kt)("strong",{parentName:"p"},"Resource Groups"),", and hit ",(0,i.kt)("strong",{parentName:"p"},"Create"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of Azure services within Azure",src:a(87504).Z,width:"624",height:"313"})),(0,i.kt)("p",null,"Now, name your resource group and set the location. For this demo, we\u2019ll name the resource group \u201cUserFeedbackApp\u201d and select ",(0,i.kt)("strong",{parentName:"p"},"East US")," as the default region. Next, click ",(0,i.kt)("strong",{parentName:"p"},"Review + create"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of set up of an Azure service",src:a(60504).Z,width:"624",height:"685"})),(0,i.kt)("p",null,"Now, navigate to the resource group section in Azure Portal on the left. Open it and create a new Azure AI multi-service instance. To do this, search for \u201cAzure AI\u201d in the Azure Marketplace and add it. "),(0,i.kt)("p",null,"You\u2019ll now have to name and configure the instance. For this demonstration, we\u2019ll use \u201cUserFeedbackAppAI\u201d and leave everything else as the default. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The defaults are fine for this tutorial, but in a production environment, you may want to configure the instance under the ",(0,i.kt)("strong",{parentName:"p"},"Network")," tab for better access. "),(0,i.kt)("p",null,"We also need to create an SQL Database to store our data. Back in the Azure Marketplace, search for Azure SQL to spot the SQL Database option. Create a database and a server to host it in the same resource group we just created. "),(0,i.kt)("p",null,"This demonstration uses the development tier and a basic server to keep costs low. Name the SQL database \u201cUserFeedbackDatabase\u201d and use a local administrator account rather than the identity-based access option."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image SQL database settings at set up",src:a(44195).Z,width:"624",height:"511"})),(0,i.kt)("p",null,"Next, we need to create several resources for the container application itself. Open Visual Studio and select ",(0,i.kt)("strong",{parentName:"p"},"Create a new project"),". Go with the new, standard ",(0,i.kt)("strong",{parentName:"p"},"ASP.NET Core Web App (Model-View-Controller)")," option for this tutorial. Find that template, name your project, and select a location to save it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of project templates",src:a(91255).Z,width:"624",height:"175"})),(0,i.kt)("p",null,"To containerize our application, we need to select ",(0,i.kt)("strong",{parentName:"p"},"Enable Docker")," on the next screen. This option bundles our application with a Dockerfile, which is essential for building the infrastructure to support it. Leave the default Linux OS selected for the Docker container. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of additional settings for project",src:a(35886).Z,width:"624",height:"277"})),(0,i.kt)("p",null,"Now, allow Visual Studio to build the templated project."),(0,i.kt)("p",null,"Next, run the application using Docker from Visual Studio. Once there, click ",(0,i.kt)("strong",{parentName:"p"},"play")," to build and run the application, push it to your local Docker environment, and launch a web browser to view the static opening page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of the opening page",src:a(11140).Z,width:"624",height:"207"})),(0,i.kt)("p",null,"With our application running locally, it\u2019s time to publish it. We do this so we can create the required container resources and have Visual Studio keep the configuration in our publishing profile. Right-click on the project, choose ",(0,i.kt)("strong",{parentName:"p"},"Publish"),", add a profile for publishing, click ",(0,i.kt)("strong",{parentName:"p"},"Azure"),", and name it ",(0,i.kt)("strong",{parentName:"p"},"Azure Container Apps (Linux)"),"."),(0,i.kt)("p",null,"On the Container App screen, double-check that you\u2019re logged into your Azure account and that your subscription name is populated. Click ",(0,i.kt)("strong",{parentName:"p"},"Create new"),". Give your application and container a name, ensuring the right subscription and resource group are selected. You can also specify/name the Container Apps environment by selecting ",(0,i.kt)("strong",{parentName:"p"},"New"),". Otherwise, keep the default name. "),(0,i.kt)("p",null,"Finally, click ",(0,i.kt)("strong",{parentName:"p"},"Create")," to finalize the Container App setup."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of container app setup",src:a(44166).Z,width:"592",height:"490"})),(0,i.kt)("p",null,"We also need to specify a ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-ca/products/container-registry"},"Container Registry")," to store the application and its configuration that we\u2019ll publish into the container. Name the registry a name (let\u2019s say, \u201cUserFeedbackAppRegistry\u201d) and click ",(0,i.kt)("strong",{parentName:"p"},"Create"),". "),(0,i.kt)("p",null,"During the container-building process, you\u2019ll have to enable admin rights for the container. Click ",(0,i.kt)("strong",{parentName:"p"},"Yes")," and wait for the infrastructure to build."),(0,i.kt)("p",null,"Now, you can use the publish profile to push your Azure Web App to your Container App on Azure. Check out the infrastructure you\u2019ve created by opening the Azure Portal and navigating to the ",(0,i.kt)("strong",{parentName:"p"},"Resource")," folder."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of resources list in Azure",src:a(47219).Z,width:"613",height:"428"})),(0,i.kt)("h2",{id:"designing-the-intelligent-app"},"Designing the Intelligent App"),(0,i.kt)("p",null,"With the groundwork laid, it\u2019s time to design and develop our application. This tutorial revolves around a simple use case: building a merchandise store feedback function. It will allow users to select a product and leave feedback using freeform text. "),(0,i.kt)("p",null,"Next, we\u2019ll save that feedback to our database. Subsequently, we\u2019ll send a call to the Azure AI API to perform sentiment analysis on the feedback, and then store the outcome in our database. Finally, based on these results, we\u2019ll create a report page showing our product sentiment."),(0,i.kt)("p",null,"Let\u2019s get started."),(0,i.kt)("h3",{id:"building-the-basic-app"},"Building the Basic App"),(0,i.kt)("p",null,"Our goal is to enable users to leave feedback on a selection of products for future sentiment analysis. To facilitate this, we need a basic web application with database read and write capabilities."),(0,i.kt)("h3",{id:"adding-the-models-and-connecting-the-database"},"Adding the Models and Connecting the Database"),(0,i.kt)("p",null,"The initial function on our checklist is the capability to retrieve various products from our SQL database. This will allow us to populate a drop-down menu displaying a list of our products, which users can then write a review for. "),(0,i.kt)("p",null,"To configure the database connection for our application, install the following packages using the Package Manager in Visual Studio:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Tools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.SqlServer"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of installed packages",src:a(35957).Z,width:"624",height:"125"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of browsing packages in Azure",src:a(39768).Z,width:"624",height:"119"})),(0,i.kt)("p",null,"Next, create two models for your data\u2014a ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Review"),"\u2014by adding the following code to the Models folder. First, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Product.cs")," file with the following code: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"namespace UserFeedbackApp.Models\n{\n    public class Product\n    {\n        public int Id { get; set; }\n        public string Name { get; set; }\n    }\n}\n")),(0,i.kt)("p",null,"Then, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Review.cs")," file in the models directory with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"namespace UserFeedbackApp.Models\n{\n    public class Review\n    {\n        public int Id { get; set; }\n        public int ProductId { get; set; }\n        public string ProductName { get; set; }\n        public string ReviewText { get; set; }\n        public string PostDate { get; set; }\n \n        public string Sentiment { get; set; }\n        public float PositiveValue { get; set; }\n        public float NeutralValue { get; set; }\n        public float NegativeValue { get; set; }\n    }\n}\n")),(0,i.kt)("p",null,"To bridge the gap between our models and the interface, we need a ",(0,i.kt)("inlineCode",{parentName:"p"},"DbContext")," class. Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"DatabaseContext.cs")," file within the Models folder and populate it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"using Microsoft.EntityFrameworkCore;\n \nnamespace UserFeedbackApp.Models\n{\n    public class DatabaseContext : DbContext\n    {\n        private readonly string _connectionString;\n \n        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)\n        {\n        }\n \n        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n        {\n            base.OnConfiguring(optionsBuilder);\n        }\n \n        public DbSet<Product> Products => Set<Product>();\n        public DbSet<Review> Reviews => Set<Review>();\n    }\n}\n")),(0,i.kt)("p",null,"The next step is to configure a connection to the Azure SQL database we just created. Double-click ",(0,i.kt)("strong",{parentName:"p"},"Connected Services")," in your project hierarchy and add a new ",(0,i.kt)("strong",{parentName:"p"},"Service Dependency"),". Select ",(0,i.kt)("strong",{parentName:"p"},"Azure SQL database")," and locate the one you created earlier. Then, edit the dependency details, ensuring you assign a database connection string name \u2014 you\u2019ll use it shortly. Click ",(0,i.kt)("strong",{parentName:"p"},"Finish"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of dependency setup in Azure SQL database",src:a(39769).Z,width:"624",height:"436"})),(0,i.kt)("p",null,"This action creates the connection details for our database. "),(0,i.kt)("p",null,"Now, modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," file to establish a connection to the database using the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'using Microsoft.EntityFrameworkCore;\nusing UserFeedbackApp.Models;\n \nvar builder = WebApplication.CreateBuilder(args);\n \n// Add Database Context\nif (builder.Environment.IsDevelopment())\n{\n    builder.Services.AddDbContext<DatabaseContext>(options =>\n        options.UseSqlServer(builder.Configuration["userfeedbackdatabaseconnection"]));\n}\nelse\n{\n    builder.Services.AddDbContext<DatabaseContext>(options =>\n        options.UseSqlServer(Environment.GetEnvironmentVariable("AZURE_SQL_CONNECTIONSTRING")));\n}\n')),(0,i.kt)("p",null,"This code uses an if statement to check the application\u2019s environment, either development or production. Depending on the environment, it uses either our local connection secret in development or the Azure connection string when published. "),(0,i.kt)("h3",{id:"building-the-database-structure-and-adding-products"},"Building the Database Structure and Adding Products"),(0,i.kt)("p",null,"With the code configured, we can now use Entity Framework tools to build our database structure. Open a Developer PowerShell window at the bottom of Visual Studio by selecting ",(0,i.kt)("strong",{parentName:"p"},"View > Terminal"),". Ensure you select ",(0,i.kt)("strong",{parentName:"p"},"Developer PowerShell")," in the drop-down and navigate to your project directory. Run the following commands:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dotnet tool install dotnet-ef \u2013global"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet ef migrations add Initial"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet ef database update"),"  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of commands in Developer PowerShell window",src:a(9872).Z,width:"624",height:"192"})),(0,i.kt)("p",null,"These three commands will create our basic database structure using the previously defined models for ",(0,i.kt)("inlineCode",{parentName:"p"},"Products")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Review"),".  "),(0,i.kt)("p",null,"Next, let\u2019s manually prepopulate some ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," data for reading. Open the Azure Console, navigate to your database in the apps resource group, and locate the Query Editor on the left-hand side. Use the following query to populate our Products table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SET IDENTITY_INSERT Products ON;\nINSERT INTO Products (id, name)\nVALUES (1, 'Apple Laptops'), (2, 'Camcorders'), (3, 'Cell Phones & Smartphones'), (4, 'Circular Saws'), (5, 'Clippers & Trimmers'), (6, 'Cordless Drills'), (7, 'Digital Cameras'), (8, 'Electric Toothbrushes'), (9, 'Headphones'), (10, 'Headsets'), (11, 'Ink Cartridges'), (12, 'Internal Hard Disk Drives'), (13, 'Keyboards & Keypads'), (14, 'Lenses'), (15, 'Media Streamers'), (16, 'Mens Shavers'), (17, 'Mice, Trackballs & Touchpads'), (18, 'Monitors'), (19, 'Motherboards'), (20, 'Other Automotive Hand Tools'), (21, 'PC Laptops & Netbooks'), (22, 'Power Tool Sets'), (23, 'Prepaid Gaming Cards'), (24, 'Receivers'), (25, 'Reciprocating Saws'), (26, 'Smart Speakers'), (27, 'Smart Watches'), (28, 'Tablets and eBook Readers'), (29, 'Video Game Consoles'), (30, 'Video Games'), (31, 'Wireless Routers');\nSET IDENTITY_INSERT Products OFF;\n")),(0,i.kt)("p",null,"After executing this query, we have about 30 products in our database ready to use in our application."),(0,i.kt)("h3",{id:"creating-views"},"Creating Views"),(0,i.kt)("p",null,"With the data configured, let\u2019s create a basic ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/controllers-and-routing/aspnet-mvc-controllers-overview-cs"},"MVC Controller")," with views. Right-click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Controllers")," folder and select ",(0,i.kt)("strong",{parentName:"p"},"Add New Scaffold Item"),". Choose the ",(0,i.kt)("strong",{parentName:"p"},"MVC Controller with views, using the Entity Framework"),", and click ",(0,i.kt)("strong",{parentName:"p"},"Add"),". Select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," class as ",(0,i.kt)("inlineCode",{parentName:"p"},"Product"),", give the controller a name, and click Add. Repeat this process with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Reviews Model"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of MVC Controller set up",src:a(29264).Z,width:"624",height:"424"})),(0,i.kt)("p",null,"Now, run your application both locally and after publishing it to the Azure Container application to ensure everything is functioning correctly. "),(0,i.kt)("p",null,"When you run your application locally, your web browser will open with the base URL. Add ",(0,i.kt)("inlineCode",{parentName:"p"},"/Products")," to the end of the URL to see a list of the manually entered pre-populated data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of page open in web browser",src:a(6430).Z,width:"624",height:"464"})),(0,i.kt)("p",null,"With the framework established, you can replace ",(0,i.kt)("inlineCode",{parentName:"p"},"/Products")," at the end of the URL with ",(0,i.kt)("inlineCode",{parentName:"p"},"/Reviews")," to look at any reviews you have. Alternatively, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"/Reviews/Create")," to create new reviews. However, currently, a review doesn\u2019t align with the model we\u2019ve provided, as we expect our product list to populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"Products")," field. To fix this, we\u2019ll need to adjust the reviews view to better align with our requirements."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"ReviewsController")," file, change the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET Create Action")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"public async Task<IActionResult> Create()\n{\n  var products = await _context.Products.ToListAsync<Product>();\n  List<SelectListItem> productSelections = new List<SelectListItem>();\n \n  foreach (var product in products)\n  {\n    productSelections.Add(new SelectListItem { Text = product.Name, Value = product.Id.ToString() });\n  }\n \n  ViewBag.Products = productSelections;\n \n  return View();\n}\n")),(0,i.kt)("p",null,"This code fetches products from the database and places them into a select list or drop-down on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Review")," creation page. We\u2019re focusing on having users select a single product and write a review, ensuring the sentiment analysis we perform later aligns with each product. So, let\u2019s also modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," page within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Views/Reviews")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@model UserFeedbackApp.Models.Review\n \n@{\n    ViewData["Title"] = "Create";\n}\n \n<h1>Create</h1>\n \n<h4>Review</h4>\n<hr />\n<div class="row">\n    <div class="col-md-4">\n        <form asp-action="Create">\n            <div asp-validation-summary="ModelOnly" class="text-danger"></div>\n            <div class="form-group">\n                @Html.DropDownList("Products", (IEnumerable\n                <SelectListItem>)ViewBag.Products)\n            </div>\n            <div class="form-group">\n                <label asp-for="ReviewText" class="control-label"></label>\n                <textarea rows="6" asp-for="ReviewText" class="form-control"></textarea>\n                <span asp-validation-for="ReviewText" class="text-danger"></span>\n            </div>\n            <br />\n            <div class="form-group">\n                <input type="submit" value="Create" class="btn btn-primary" />\n            </div>\n        </form>\n    </div>\n</div>\n \n<div>\n    <a asp-action="Index">Back to List</a>\n</div>\n \n@section Scripts {\n    @{await Html.RenderPartialAsync("_ValidationScriptsPartial");}\n}\n')),(0,i.kt)("p",null,"This confines the page to a product drop-down list and an area for entering a review. "),(0,i.kt)("p",null,"Finally, let\u2019s adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"POST Create Action")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Reviews")," controller to handle the two received values. Add placeholder values for elements we\u2019re currently generating:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[HttpPost]\n[ValidateAntiForgeryToken]\npublic async Task<IActionResult> Create([Bind("Id,ProductId,ProductName,ReviewText,PostDate,Sentiment,PositiveValue,NeutralValue,NegativeValue")] Review review)\n{\n  var selectedProductId = int.Parse(HttpContext.Request.Form["Products"].ToString());\n  var product = await _context.Products.FirstOrDefaultAsync(p => p.Id == selectedProductId);\n                   \n  review.ProductId = selectedProductId;\n  review.ProductName = product.Name;\n  review.PostDate = DateTime.Now.ToString("yyyy-MM-dd");\n  review.Sentiment = "";\n  review.PositiveValue = 0;\n  review.NeutralValue = 0;\n  review.NegativeValue = 0;\n\n  _context.Add(review);\n  await _context.SaveChangesAsync();\n  return RedirectToAction(nameof(Index));\n}\n')),(0,i.kt)("p",null,"Now, run the application and go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/Reviews/Create")," endpoint. You\u2019ll see your newly written page. If you select a product and fill out a review, the database will save the review sans any sentiment information."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of the application Index",src:a(39737).Z,width:"624",height:"220"})),(0,i.kt)("p",null,"Finally, publish your changes to your Azure instance."),(0,i.kt)("h2",{id:"exercise"},"Exercise"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complete this ",(0,i.kt)("strong",{parentName:"li"},"hands-on sample")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/contentlab-io/Microsoft-Building-Your-First-Intelligent-App-with-Azure-Cognitive-Services/tree/main/Microsoft_Series_2_Code/Source%20-%20Article%207%20%2B%208/UserFeedbackApp/Models"},"project code")," to build your intelligent app with multi-modal databases."),(0,i.kt)("li",{parentName:"ul"},"Complete the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://aka.ms/fallforIA/apps-csc"},"Intelligent apps Cloud Skills Challenge"))," to build on your app dev and AI skills."),(0,i.kt)("li",{parentName:"ul"},"Register for ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://reactor.microsoft.com/en-us/reactor/events/20728/?WT.mc_id=javascript-99907-ninarasi"},"Ask the Expert: Azure Container Apps"))," session for live Q&A with the Product Engineering team on building intelligent apps using Azure Container Apps.")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Continue to the next part of this ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/30daysofIA/deploy-an-intelligent-app-on-azure-container-apps-2"},"topic")," to further explore building, containerizing, deploying and analysing your intelligent app."))}c.isMDXComponent=!0},38447:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-1-38a4ded7b3c84eedd9f6a81813ef33dd.png"},47219:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-10-bbbe6cfbd1242341b5074640f7afc0b4.png"},35957:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-11-db2b18fa11114c1f1b24434bed1ebb46.png"},39768:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-12-55f7312f395c80528b30370e95ef7a88.png"},39769:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-13-7d77376088682d3e35280df038d48041.png"},9872:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-14-e1591825ce7282d25dc9798462da2d37.png"},29264:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-15-430e1db67417a4b089d7687d433f5d78.png"},6430:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-16-c6d21af437ac86b902c4021303e309c1.png"},39737:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-17-70b0fd4004e15e91823c7314bda9938b.png"},54052:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-2-bb3a33c4b6cc8ef8baaf56e98121c783.png"},87504:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-3-b87ee85577acad781e7630147ac8b2d2.png"},60504:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-4-05e2c9b919a127e6046ebdd0e94f58a3.png"},44195:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-5-2e65e0b9ebc90e7f97999eddca9de48e.png"},91255:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-6-ae0fee5353e73fc015fa522f23dc6330.png"},35886:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-7-ab5bf52b4573562654008288038c5311.png"},11140:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-8-1484ead9e321c5b61964707e582add45.png"},44166:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-1-9-f0ec2044b9f38d14110c4b8aeb733e81.png"}}]);