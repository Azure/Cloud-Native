"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80819],{79041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(85893),s=n(11151);const r={slug:"07-functions-python",title:"07. Functions for Python Devs",authors:["jay"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Let's build a wildfire detection site and application using Azure Functions for Python, with Timer Trigger and CosmosDB bindings!",tags:["serverless-september","30-days-of-serverless","azure-functions","python"]},o=void 0,a={permalink:"/Cloud-Native/blog/07-functions-python",source:"@site/blog/2022-09-07/index.md",title:"07. Functions for Python Devs",description:"Let's build a wildfire detection site and application using Azure Functions for Python, with Timer Trigger and CosmosDB bindings!",date:"2022-09-07T00:00:00.000Z",formattedDate:"September 7, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-functions",permalink:"/Cloud-Native/blog/tags/azure-functions"},{label:"python",permalink:"/Cloud-Native/blog/tags/python"}],readingTime:6.955,hasTruncateMarker:!1,authors:[{name:"Jay Miller",title:"Senior Cloud Advocate @Microsoft",url:"https://github.com/kjaymiller",imageURL:"https://github.com/kjaymiller.png",key:"jay"}],frontMatter:{slug:"07-functions-python",title:"07. Functions for Python Devs",authors:["jay"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Let's build a wildfire detection site and application using Azure Functions for Python, with Timer Trigger and CosmosDB bindings!",tags:["serverless-september","30-days-of-serverless","azure-functions","python"]},unlisted:!1,prevItem:{title:"08. Functions + Serverless On Azure",permalink:"/Cloud-Native/blog/08-functions-azure"},nextItem:{title:"06. Functions for .NET Devs",permalink:"/Cloud-Native/blog/06-functions-dotnet"}},c={image:n(78443).Z,authorsImageUrls:[void 0]},l=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Developer Guidance",id:"developer-guidance",level:2},{value:"Detecting Wildfires Around the World?",id:"detecting-wildfires-around-the-world",level:2},{value:"How the Timer Trigger Works",id:"how-the-timer-trigger-works",level:3},{value:"Connecting to the Database and our Source",id:"connecting-to-the-database-and-our-source",level:3},{value:"It&#39;s in the Database, Now What?",id:"its-in-the-database-now-what",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r,{children:[(0,i.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog07-functions-python"}),(0,i.jsx)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Azure Functions For Python developers"}),(0,i.jsx)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Azure Functions For Python developers"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/07-functions-python"})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["Welcome to ",(0,i.jsx)(t.code,{children:"Day 7"})," of #30DaysOfServerless!"]}),"\n",(0,i.jsx)(t.p,{children:"Over the past couple of days, we've explored Azure Functions from the perspective of specific programming languages. Today we'll continue that trend by looking at Python - exploring the Timer Trigger and CosmosDB binding, and showcasing integration with a FastAPI-implemented web app."}),"\n",(0,i.jsx)(t.p,{children:"Ready? Let's go."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Developer Guidance"}),": Azure Functions On Python"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Build & Deploy"}),": Wildfire Detection Apps with Timer Trigger + CosmosDB"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Demo: My Fire Map App"}),": Using FastAPI and Azure Maps to visualize data"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Next Steps"}),": Explore Azure Samples"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Exercise"}),": Try this yourself!"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Resources"}),": For self-study!"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Serverless September slide featuring Jay Miller&#39;s session on Azure Functions for Python Developers with an illustration on wildfire detection.",src:n(28587).Z+"",width:"1600",height:"672"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"developer-guidance",children:"Developer Guidance"}),"\n",(0,i.jsxs)(t.p,{children:["If you're a Python developer new to serverless on Azure, start with the ",(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-reference-python?tabs=asgi%2Capplication-level&WT.mc_id=javascript-99907-cxa",children:"Azure Functions Python Developer Guide"}),". It covers:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Quickstarts with Visual Studio Code and Azure CLI"}),"\n",(0,i.jsx)(t.li,{children:"Adopting best practices for hosting, reliability and efficiency."}),"\n",(0,i.jsx)(t.li,{children:"Tutorials showcasing Azure automation, image classification and more"}),"\n",(0,i.jsx)(t.li,{children:"Samples showcasing Azure Functions features for Python developers"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Now let's dive in and build our first Python-based Azure Functions app."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"detecting-wildfires-around-the-world",children:"Detecting Wildfires Around the World?"}),"\n",(0,i.jsx)(t.p,{children:"I live in California which is known for lots of wildfires. I wanted to create a proof of concept for developing an application that could let me know if there was a wildfire detected near my home."}),"\n",(0,i.jsx)(t.p,{children:"NASA has a few satelites orbiting the Earth that can detect wildfires. These satelites take scans of the radiative heat in and use that to determine the likelihood of a wildfire. NASA updates their information about every 30 minutes and it can take about four hours for to scan and process information."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Fire Point Near Austin, TX",src:n(47008).Z+"",width:"2312",height:"1786"})}),"\n",(0,i.jsx)(t.p,{children:"I want to get the information but I don't want to ping NASA or another service every time I check."}),"\n",(0,i.jsx)(t.p,{children:"What if I occaisionally download all the data I need? Then I can ping that as much as I like."}),"\n",(0,i.jsxs)(t.p,{children:["I can create a script that does just that. Any time I say ",(0,i.jsx)(t.em,{children:"I can create a script"})," that is a verbal queue for me to consider using an Azure function. With the function being ran in the cloud, I can ensure the script runs even when I'm not at my computer."]}),"\n",(0,i.jsx)(t.h3,{id:"how-the-timer-trigger-works",children:"How the Timer Trigger Works"}),"\n",(0,i.jsx)(t.p,{children:"This function will utilize the Timer Trigger. This means Azure will call this function to run at a scheduled interval. This isn't the only way to keep the data in sync, but we know that arcgis, the service that we're using says that data is only updated every 30 minutes or so."}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about the TimerTrigger as a concept, check out the ",(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-bindings-timer?tabs=in-process&pivots=programming-language-python&WT.mc_id=javascript-99907-cxa",children:"Azure Functions documentation around Timers"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["When we create the function we tell it a few things like where the script will live (in our case in ",(0,i.jsx)(t.code,{children:"__init__.py"}),") the type and direction and notably ",(0,i.jsx)(t.em,{children:"often it should run"}),". We specify the timer using ",(0,i.jsx)(t.code,{children:'schedule": <The CRON INTERVAL>'}),". For us we're using ",(0,i.jsx)(t.code,{children:"0 0,30 * * *"})," which means every 30 minutes at the hour and half-hour."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "scriptFile": "__init__.py",\n  "bindings": [\n    {\n      "name": "reqTimer",\n      "type": "timerTrigger",\n      "direction": "in",\n      "schedule": "0 0,30 * * * *"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Next, we create the code that runs when the function is called."}),"\n",(0,i.jsx)(t.h3,{id:"connecting-to-the-database-and-our-source",children:"Connecting to the Database and our Source"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Disclaimer: The data that we're pulling is for educational purposes only. This is not meant to be a production level application. You're welcome play with this project but ensure that you're using the data ",(0,i.jsx)(t.a,{href:"https://www.esri.com/legal/overview",children:"in compliance with Esri"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Our function does two important things."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"It pulls data from ArcGIS that meets the parameters"}),"\n",(0,i.jsx)(t.li,{children:"It stores that pulled data into our database"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If you want to check out the code in its entirety, check out the ",(0,i.jsx)(t.a,{href:"https://github.com/kjaymiller/fire-map",children:"GitHub repository"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Pulling the data from ArcGIS is easy. We can use the ",(0,i.jsx)(t.a,{href:"https://developers.arcgis.com/python/",children:"ArcGIS Python API"}),". Then, we need to load the service layer. Finally we query that layer for the specific data."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'def write_new_file_data(gis_id:str, layer:int=0) -> FeatureSet:\n    """Returns a JSON String of the Dataframe"""\n    fire_data = g.content.get(gis_id) \n    feature = fire_data.layers[layer] # Loading Featured Layer from ArcGIS\n    q = feature.query(\n        where="confidence >= 65 AND hours_old  <= 4", #The filter for the query\n        return_distince_values=True,\n        out_fields="confidence, hours_old", # The data we want to store with our points\n        out_sr=4326, # The spatial reference of the data\n    )\n    return q   \n'})}),"\n",(0,i.jsx)(t.p,{children:"Then we need to store the data in our database."}),"\n",(0,i.jsxs)(t.p,{children:["We're using ",(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=javascript-99907-cxa",children:"Cosmos DB"})," for this. COSMOSDB is a NoSQL database, which means that the data looks a lot like a python dictionary as it's JSON. This means that we don't need to worry about converting the data into a format that can be stored in a relational database."]}),"\n",(0,i.jsx)(t.p,{children:"The second reason is that Cosmos DB is tied into the Azure ecosystem so that if we want to create functions Azure events around it, we can."}),"\n",(0,i.jsx)(t.p,{children:"Our script grabs the information that we pulled from ArcGIS and stores it in our database."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"async with CosmosClient.from_connection_string(COSMOS_CONNECTION_STRING) as client:\n    container = database.get_container_client(container=CONTAINER)\n    for record in data:\n        await container.create_item(\n            record,\n            enable_automatic_id_generation=True,\n        )\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In our code each of these functions live in their own space. So in the main function we focus solely on what azure functions will be doing. The script that gets called is ",(0,i.jsx)(t.code,{children:"__init__.py"}),". There we'll have the function call the other functions running."]}),"\n",(0,i.jsxs)(t.p,{children:["We created another function called ",(0,i.jsx)(t.code,{children:"load_and_write"})," that does all the work outlined above. ",(0,i.jsx)(t.code,{children:"__init__.py"})," will call that."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"async def main(reqTimer: func.TimerRequest) -> None:\n    database=database\n    container=container\n    await update_db.load_and_write(gis_id=GIS_LAYER_ID, database=database, container=container)\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then we deploy the function to Azure. I like to use VS Code's Azure Extension but you can also deploy it ",(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-deployment-technologies?WT.mc_id=javascript-99907-cxa",children:"a few other ways"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Deploying the function via VS Code",src:n(96566).Z+"",width:"2136",height:"1202"})}),"\n",(0,i.jsxs)(t.p,{children:["Once the function is deployed we can load the Azure portal and see a ping whenever the function is called.\n",(0,i.jsx)(t.img,{alt:"The pings correspond to the Function being ran",src:n(41079).Z+"",width:"2826",height:"868"})]}),"\n",(0,i.jsxs)(t.p,{children:["We can also see the data now living in the datastore.\n",(0,i.jsx)(t.img,{alt:"Document in Cosmos DB",src:n(65278).Z+"",width:"2692",height:"1340"})]}),"\n",(0,i.jsx)(t.h3,{id:"its-in-the-database-now-what",children:"It's in the Database, Now What?"}),"\n",(0,i.jsx)(t.p,{children:"Now the real fun begins. We just loaded the last bit of fire data into a database. We can now query that data and serve it to others."}),"\n",(0,i.jsxs)(t.p,{children:["As I mentioned before, our Cosmos DB data is also stored in Azure, which means that we can deploy Azure Functions ",(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-bindings-cosmosdb-v2?tabs=in-process%2Cfunctionsv2&pivots=programming-language-python&WT.mc_id=javascript-99907-cxa",children:"to trigger when new data is added"}),". Perhaps you can use this to check for fires near you and use a ",(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/logic-apps/logic-apps-overview?WT.mc_id=javascript-99907-cxa",children:"Logic App"})," to send an alert to your phone or email."]}),"\n",(0,i.jsxs)(t.p,{children:["Another option is to create a web application that talks to the database and displays the data. I've created an example of this using FastAPI \u2013 ",(0,i.jsx)(t.a,{href:"https://jm-func-us-fire-notify.azurewebsites.net",children:"https://jm-func-us-fire-notify.azurewebsites.net"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Website that Checks for Fires",src:n(79115).Z+"",width:"800",height:"450"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(t.p,{children:["This article showcased the Timer Trigger and the HTTP Trigger for Azure Functions in Python. Now try exploring other triggers and bindings by browsing ",(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings?tabs=python#bindings-code-examples&WT.mc_id=javascript-99907-cxa",children:"Bindings code samples for Python"})," and ",(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/samples/browse/?products=azure-functions&WT.mc_id=javascript-99907-cxa&languages=python&WT.mc_id=javascript-99907-cxa",children:"Azure Functions samples for Python"})]}),"\n",(0,i.jsx)(t.p,{children:"Once you've tried out the samples, you may want to explore more advanced integrations or extensions for serverless Python scenarios. Here are some suggestions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/develop-python-worker-extensions?tabs=windows%2Cpypi&WT.mc_id=javascript-99907-cxa",children:"Develop Python worker extensions for Azure Functions"})," and publish to PyPI or GitHub."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-add-output-binding-storage-queue-cli?pivots=programming-language-python&tabs=in-process%2Cbash%2Cbrowser&WT.mc_id=javascript-99907-cxa",children:"Connect Azure Functions to Azure Storage"})," using the CLI"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-signalr/signalr-quickstart-azure-functions-python?toc=%2Fazure%2Fazure-functions%2Ftoc.json&WT.mc_id=javascript-99907-cxa",children:"Create Real-Time alerts with Azure Functions and SignalR Service"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"And check out the resources for more tutorials to build up your Azure Functions skills."}),"\n",(0,i.jsx)(t.h2,{id:"exercise",children:"Exercise"}),"\n",(0,i.jsxs)(t.p,{children:["I encourage you to fork ",(0,i.jsx)(t.a,{href:"https://github.com/kjaymiller/fire-map",children:"the repository"})," and try building and deploying it yourself! You can see the TimerTrigger and a HTTPTrigger building the website."]}),"\n",(0,i.jsxs)(t.p,{children:["Then try extending it. Perhaps if wildfires are a big thing in your area, you can use some of the data available in ",(0,i.jsx)(t.a,{href:"https://planetarycomputer.microsoft.com?WT.mc_id=javascript-99907-cxa",children:"Planetary Computer"})," to check out some other datasets."]}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-reference-python?tabs=asgi%2Capplication-level&WT.mc_id=javascript-99907-cxa",children:"Azure For Functions Python Developer Guide"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/create-first-function-vs-code-python?WT.mc_id=javascript-99907-cxa",children:"Python Quickstart: Create Your First Function App"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/samples/azure-samples/fastapi-on-azure-functions/azure-functions-python-create-fastapi-app/?WT.mc_id=javascript-99907-cxa",children:"Use FastAPI Framework With Azure Functions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/samples/azure-samples/flask-app-on-azure-functions/azure-functions-python-create-flask-app/?WT.mc_id=javascript-99907-cxa",children:"Use Flask Framework with Azure Functions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/azure/azure-functions/functions-machine-learning-tensorflow?tabs=bash&WT.mc_id=javascript-99907-cxa",children:"Tutorial: Apply ML models in Azure Functions with Python and TensorFlow"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},78443:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/banner-f95b9523f699cefc9fce9bd396101d6e.png"},79115:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Check for Fires-aaebf80301801989c99380d6f342f1bc.gif"},65278:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Data Explorer-6c96e5a94835155e2e0ec88ba092fa0b.png"},96566:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Deploy to Function App using VS Code-a6e29125024c61cfae89968f59f3c85a.png"},47008:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Fire Point in Austin, TX-7614014f192cd32f19c4cfb29fa2b2ec.png"},41079:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Function Execution Count-68436884afb4df22b0fbd2f59342c62f.png"},28587:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/banner-f95b9523f699cefc9fce9bd396101d6e.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(67294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);