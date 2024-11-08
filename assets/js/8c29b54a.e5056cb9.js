"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46116],{78030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(85893),o=n(11151);const r={date:"2024-10-29T09:00",slug:"deploy-with-aca",title:"2.5 Deploy with ACA",authors:["nitya","marlene"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In today's post we go from Prompty prototype to hosted API endpoint using the FastAPI framework with Azure Container Apps.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},a=void 0,s={permalink:"/Cloud-Native/30-days-of-ia-2024/deploy-with-aca",source:"@site/blog-30-days-of-ia-2024/2024-10-29/deploy-with-aca.md",title:"2.5 Deploy with ACA",description:"In today's post we go from Prompty prototype to hosted API endpoint using the FastAPI framework with Azure Container Apps.",date:"2024-10-29T09:00:00.000Z",formattedDate:"October 29, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/build-intelligent-apps"},{label:"30-days-of-IA-2024",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/30-days-of-ia-2024"},{label:"learn-live",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/learn-live"},{label:"demo-bytes",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/demo-bytes"},{label:"community-gallery",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/community-gallery"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-actions"}],readingTime:11.775,hasTruncateMarker:!1,authors:[{name:"Nitya Narasimhan",title:"Senior AI Advocate",url:"https://github.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"},{name:"Marlene Mhangami",title:"Senior Developer Advocate",url:"https://github.com/marlenezw",imageURL:"https://github.com/marlenezw.png",key:"marlene"}],frontMatter:{date:"2024-10-29T09:00",slug:"deploy-with-aca",title:"2.5 Deploy with ACA",authors:["nitya","marlene"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In today's post we go from Prompty prototype to hosted API endpoint using the FastAPI framework with Azure Container Apps.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"Improving the developer experience with modern dev tools",permalink:"/Cloud-Native/30-days-of-ia-2024/improving-the-developer-experience-with-modern-dev-tools"},nextItem:{title:"2.4 Evaluate with AI!",permalink:"/Cloud-Native/30-days-of-ia-2024/evaluate-with-ai"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"What We&#39;ll Cover Today",id:"what-well-cover-today",level:2},{value:"1 | Create a FastAPI Server",id:"1--create-a-fastapi-server",level:2},{value:"2 | Deploy Azure Container App",id:"2--deploy-azure-container-app",level:2},{value:"3 | Testing your App Endpoint",id:"3--testing-your-app-endpoint",level:2},{value:"3.1 Testing In Production",id:"31-testing-in-production",level:3},{value:"3.2 Testing Locally",id:"32-testing-locally",level:3},{value:"3.3 Testing The Copilot",id:"33-testing-the-copilot",level:3},{value:"4 | Monitoring with App Insights",id:"4--monitoring-with-app-insights",level:2},{value:"4.1 What is App Insights?",id:"41-what-is-app-insights",level:3},{value:"4.2 App Insights Dashboard",id:"42-app-insights-dashboard",level:3},{value:"5 |  Wrap-up &amp; Next Steps",id:"5---wrap-up--next-steps",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r,{children:[(0,i.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/deploy-with-aca"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,i.jsx)("meta",{property:"og:description",content:"In today's post we go from Prompty prototype to hosted API endpoint using the FastAPI framework with Azure Container Apps."}),(0,i.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/deploy-with-aca"}),(0,i.jsx)("meta",{name:"twitter:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,i.jsx)("meta",{name:"twitter:description",content:"In today's post we go from Prompty prototype to hosted API endpoint using the FastAPI framework with Azure Container Apps."}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/deploy-with-aca"})]}),"\n",(0,i.jsx)(t.p,{children:"Welcome to Day 5\ufe0f\u20e3 of Azure AI Week on the #30DaysOfIA series!"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Developer Workflow",src:n(36380).Z+"",width:"1433",height:"448"})}),"\n",(0,i.jsxs)(t.p,{children:["In yesterday's post, we ",(0,i.jsx)(t.strong,{children:"evaluated"})," our application for quality using 4 key metrics and a larger test inputs dataset. After getting acceptable results, it's time to ",(0,i.jsx)(t.strong,{children:"deploy"})," the protoype to production. In today's post we go from Prompty prototype to hosted API endpoint using the FastAPI framework with Azure Container Apps."]}),"\n",(0,i.jsx)(t.p,{children:"Ready? Let's get started!"}),"\n",(0,i.jsx)(t.h2,{id:"what-well-cover-today",children:"What We'll Cover Today"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Build a FastAPI App"})," - Create an API server for your copilot app"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Deploy with Azure Container Apps"})," - Get a hosted API endpoint"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Testing your App Endpoint"})," - Contoso Chat Example"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Monitoring for App Insights"})," - Contoso Creative Writer Example"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Keep Learning"})," - Resources For Self-Guided Study"]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Card Banner",src:n(94203).Z+"",width:"960",height:"403"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(t.p,{children:["In the previous sections, we used the Prompty runtime to generate Python code that we were able to run locally, for interactive testing (single input) or batch evaluation (input daatset). Now, we need to ready our application for deployment ",(0,i.jsx)(t.strong,{children:"as a hosted API endpoint"})," to a production environment."]}),"\n",(0,i.jsx)(t.h2,{id:"1--create-a-fastapi-server",children:"1 | Create a FastAPI Server"}),"\n",(0,i.jsxs)(t.p,{children:["The first step is to create a ",(0,i.jsx)(t.strong,{children:"server application"})," that can expose an API endpoint through which copilot requests can be received, for processing and response. We used the ",(0,i.jsx)(t.a,{href:"https://fastapi.tiangolo.com/",children:"FastAPI"})," framework - a modern, high-performance ",(0,i.jsx)(t.strong,{children:"Python"})," web framework for building and serving APIs."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Run the FastAPI server ",(0,i.jsx)(t.em,{children:"locally"})," using ",(0,i.jsx)(t.code,{children:"fastapi dev .."})," to get a development server with hot refresh. Changes you make to the code are visible immediately, making it easy to iterate quickly on your app."]}),"\n",(0,i.jsxs)(t.li,{children:["Run the FastAPI server ",(0,i.jsx)(t.em,{children:"in production"})," by using a compute service like Azure Container Apps. Simply package up the FastAPI application into a container image and deploy it to get a hosted API endpoint."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Let's look at the Contoso Chat codebase to see this in action"}),". The code block below reproduces a subset of the code from ",(0,i.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/blob/main/src/api/main.py",children:(0,i.jsx)(t.code,{children:"contoso-chat/src/api/main.py"})})," to show how we implement this. Code is annotated to explain the key steps in the process."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["We import the ",(0,i.jsx)(t.code,{children:"get_response"})," function which is our Prompty-based chat function."]}),"\n",(0,i.jsx)(t.li,{children:"We load environment variables and create the FastAPI application instance."}),"\n",(0,i.jsx)(t.li,{children:"We configure CORS middleware to allow requests from specified origins."}),"\n",(0,i.jsx)(t.li,{children:'We set a default route ("/") to return a message ("Hello World") as a health check.'}),"\n",(0,i.jsxs)(t.li,{children:["We define the ",(0,i.jsx)(t.code,{children:"/api/create_response"})," route to be the entry point for our custom copilot."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:['A copilot client (e.g., web application, cURL, or other API client) can now "POST" a request to the ',(0,i.jsx)(t.code,{children:"/api/create_response"})," endpoint with the required input fields. The FastAPI server will pass these inputs to the ",(0,i.jsx)(t.code,{children:"get_response"})," function and return the response back to the caller."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'\r\n# 1. The _get_response_ function is the entry point to the copilot code\r\nfrom contoso_chat.chat_request import get_response\r\n\r\n# 2. Load the environment variables and create the FastAPI application\r\nload_dotenv()\r\napp = FastAPI()\r\n\r\n# 3. Configure CORS middleware to allow requests from specified origins\r\ncode_space = os.getenv("CODESPACE_NAME")\r\napp_insights = os.getenv("APPINSIGHTS_CONNECTIONSTRING")\r\nif code_space: \r\n    origin_8000= f"https://{code_space}-8000.app.github.dev"\r\n    origin_5173 = f"https://{code_space}-5173.app.github.dev"\r\n    ingestion_endpoint = app_insights.split(\';\')[1].split(\'=\')[1]\r\n    origins = [origin_8000, origin_5173, os.getenv("API_SERVICE_ACA_URI"), os.getenv("WEB_SERVICE_ACA_URI"), ingestion_endpoint]\r\nelse:\r\n    origins = [\r\n        o.strip()\r\n        for o in Path(Path(__file__).parent / "origins.txt").read_text().splitlines()\r\n    ]\r\n    origins = [\'*\']\r\n\r\napp.add_middleware(\r\n    CORSMiddleware,\r\n    allow_origins=origins,\r\n    allow_credentials=True,\r\n    allow_methods=["*"],\r\n    allow_headers=["*"],\r\n)\r\n\r\n# 4. Define the default route ("/") to \r\n#     return a message ("Hello World") as health check\r\n@app.get("/")\r\nasync def root():\r\n    return {"message": "Hello World"}\r\n\r\n# (5) Define the "/api/create_response" route to \r\n#     accept a POST request with query data & invoke _get_response_\r\n#     then return the response to the caller \r\n@app.post("/api/create_response")\r\n@trace\r\ndef create_response(question: str, customer_id: str, chat_history: str) -> dict:\r\n    result = get_response(customer_id, question, chat_history)\r\n    return result\n'})}),"\n",(0,i.jsx)(t.h2,{id:"2--deploy-azure-container-app",children:"2 | Deploy Azure Container App"}),"\n",(0,i.jsxs)(t.p,{children:["Next, we need to deploy the FastAPI application to Azure using a relevant compute option.  ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/developer/python/tutorial-containerize-simple-web-app?tabs=web-app-fastapi",children:"Azure Container Apps makes this simple"})," requiring just a few steps. The links below point to the relevant files in the ",(0,i.jsx)(t.strong,{children:"Contoso Chat"})," sample as a reference."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsxs)(t.em,{children:["Create a ",(0,i.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-creative-writer/blob/main/src/api/Dockerfile",children:"Dockerfile"}),"  and ",(0,i.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-creative-writer/blob/main/src/.dockerignore",children:".dockerignore"})," files for your FastAPI application."]})," This instructs Docker how to build the container image for your application (and what to leave out)."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Configure that application server with the right port and entry function to use."})," In this case, we use the ",(0,i.jsx)(t.code,{children:"fastapi"})," server, with ",(0,i.jsx)(t.code,{children:"main.py"})," as entry point, running on port 80."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Provision the Azure Container Apps (ACA) resource on Azure"}),". In our case, we do this using ",(0,i.jsx)(t.code,{children:"azd up"})," at the start, with configuration specified in ",(0,i.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/blob/main/infra/main.bicep",children:"main.bicep"}),". The ",(0,i.jsx)(t.code,{children:"azd provision"})," step creates the default ACA resource with the Application Uri showing this image on success."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Default",src:n(69687).Z+"",width:"710",height:"401"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Deploy the updated application to Azure Container Apps"}),". As you make more code updates, you can use ",(0,i.jsx)(t.code,{children:"az acr build"})," to build the container image and ",(0,i.jsx)(t.code,{children:"az containerapp update"})," to update the deployed application - see this in action in the ",(0,i.jsx)(t.code,{children:"azd"})," ",(0,i.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-chat/blob/main/infra/hooks/postprovision.sh",children:"postprovision script"}),". The ",(0,i.jsx)(t.code,{children:"azd hooks run postprovision"})," step deploys the application to ACA, with the Application Uri showing this image when refreshed. ",(0,i.jsx)(t.strong,{children:'Note that this corresponds to the health check message we defined in our FastAPI server for the default route ("/")'}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Default",src:n(85755).Z+"",width:"483",height:"52"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Now, let's learn to ",(0,i.jsx)(t.em,{children:"test"})," our application in development (local) and in production (deployed)."]}),"\n",(0,i.jsx)(t.h2,{id:"3--testing-your-app-endpoint",children:"3 | Testing your App Endpoint"}),"\n",(0,i.jsx)(t.h3,{id:"31-testing-in-production",children:"3.1 Testing In Production"}),"\n",(0,i.jsxs)(t.p,{children:["The FastAPI server comes with a built-in Swagger UI that you can use to test the API endpoint in production. Simply navigate to the ",(0,i.jsx)(t.code,{children:"/docs"})," route of the default application URL - and you should see something like this. Clicking on the ",(0,i.jsx)(t.code,{children:"Try it out"})," button makes the form editable, allowing you to submit a request (using the inputs defined in the API specification) and see the returned response (or error message) rendered back in the UI. We'll see this in a minute."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Testing in Production",src:n(55569).Z+"",width:"1511",height:"698"})}),"\n",(0,i.jsx)(t.h3,{id:"32-testing-locally",children:"3.2 Testing Locally"}),"\n",(0,i.jsxs)(t.p,{children:["But first, let's talk briefly about testing the FastAPI application ",(0,i.jsx)(t.em,{children:"in development"}),". We can run the same server from the Visual Studio Code terminal using the command: ",(0,i.jsx)(t.code,{children:"fastapi dev src/api/main.py"})," as shown:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Default",src:n(36110).Z+"",width:"870",height:"598"})}),"\n",(0,i.jsxs)(t.p,{children:["When in GitHub Codespaces, this will prompt you to open the browser to a preview page - with port forwarding to the local server, allowing you to work with the same browser-based application experience you see in production. ",(0,i.jsxs)(t.em,{children:["Note however that the local server URL will end with a ",(0,i.jsx)(t.code,{children:"github.dev"})," domain reflecting the Codespaces environment we are using."]}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Default",src:n(11786).Z+"",width:"953",height:"701"})}),"\n",(0,i.jsxs)(t.p,{children:["The other thing to note is that the dev server has hot refresh - so changes you make to the code are reflected instantly. This means you can change the behavior of the ",(0,i.jsx)(t.code,{children:"get_response"})," function - and you should see the result reflected when you invoke the ",(0,i.jsx)(t.code,{children:"create_response"})," endpoint, without needing to restart the dev server at commandline."]}),"\n",(0,i.jsx)(t.h3,{id:"33-testing-the-copilot",children:"3.3 Testing The Copilot"}),"\n",(0,i.jsxs)(t.p,{children:["Let's test the copilot by clicking ",(0,i.jsx)(t.code,{children:"Try it out"})," in the Swagger UI. You can now edit the form fields to add values as shown. (Hint: you can use the sample input from the ",(0,i.jsx)(t.code,{children:"chat.prompty"})," file if you need valid data)."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Testing in Production 2",src:n(67860).Z+"",width:"1506",height:"650"})}),"\n",(0,i.jsxs)(t.p,{children:["Here, we asked: ",(0,i.jsx)(t.code,{children:"Tell me about camping stoves"}),". The response will be rendered right in the UI, and look something like this."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Testing in Production 3",src:n(68522).Z+"",width:"722",height:"329"})}),"\n",(0,i.jsxs)(t.p,{children:["More importantly, if you switch back to the VS Code terminal, you should see the output also printed to the console along with additional execution traces. ",(0,i.jsx)(t.em,{children:"This makes it easy to debug the application in development"}),", and see log messages you may have instrumented in the code."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Console",src:n(96032).Z+"",width:"611",height:"321"})}),"\n",(0,i.jsx)(t.p,{children:"You can now test code changes at various levels, iterating rapidly in VS Code."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Change the way the FastAPI server handles the request (in ",(0,i.jsx)(t.code,{children:"src/api/main.py"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Change the way the Prompty template behaves (in ",(0,i.jsx)(t.code,{children:"src/api/contoso_chat/chat.prompty"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Change the way the RAG flow is orchestrated (in ",(0,i.jsx)(t.code,{children:"src/api/contoso_chat/chat_request.py"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The changes have an instant effect in the local dev server, so you can test them out using the Swagger UI before deploying to production. To ",(0,i.jsx)(t.em,{children:"redeploy"})," to production, you can try using an ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/developer/python/tutorial-containerize-simple-web-app?tabs=web-app-fastapi#make-updates-and-redeploy",children:"az containerapp up"})," for minor changes, or use the ",(0,i.jsx)(t.code,{children:"az acr build"})," and ",(0,i.jsx)(t.code,{children:"az containerapp update"})," commands together as explained before, for more complex update scenarios."]}),"\n",(0,i.jsx)(t.h2,{id:"4--monitoring-with-app-insights",children:"4 | Monitoring with App Insights"}),"\n",(0,i.jsx)(t.h3,{id:"41-what-is-app-insights",children:"4.1 What is App Insights?"}),"\n",(0,i.jsxs)(t.p,{children:["Once our application is deployed into production, we can use ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",children:"Azure Application Insights"})," to monitor and track everything about it. Application Insights provides many experiences to enhance the performance, reliability, and quality of applications. These can be grouped into 4 main categories:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Investigate:"})," A comprehensive suite of tools for real-time monitoring, performance tracking, and issue diagnosis, providing insights into your application's health and architecture."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Monitoring:"})," Visualizations of metrics, logs, and alerts, allowing proactive monitoring and customization of reports for application health and operational data."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Usage:"})," Provides insights into user behavior, allowing you to track interactions, visualize user journeys, and analyze engagement to improve app performance."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code analysis:"})," Focuses on optimizing application code and performance, using tools like a profiler and AI-driven insights to improve efficiency and resolve issues quickly."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"App insights",src:n(15252).Z+"",width:"2756",height:"1170"})}),"\n",(0,i.jsx)(t.h3,{id:"42-app-insights-dashboard",children:"4.2 App Insights Dashboard"}),"\n",(0,i.jsxs)(t.p,{children:["In Contoso Creative Writer we utilize the ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/overview-dashboard",children:"App Insights Dashboard"})," to access realtime information about our deployed application through a dashboard in Azure Portal. The dashboard provides an overview pane to allow at-a-glance assessment of our application's health and performance. We can also can also use Application Insights to track custom information, and add it to our dashboard. In this case we want to add the evaluation scores and LLM token information we got from the running the evaluations and Prompty tracing we saw in ",(0,i.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/evaluate-with-ai",children:"yesterday's post"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To enable custom insights in Contoso Creative Writer we added the following code to a ",(0,i.jsx)(t.a,{href:"https://github.com/Azure-Samples/contoso-creative-writer/blob/a304cc691d1657b6d1e93e18df871de37633efb9/src/api/tracing.py#L51",children:"tracing.py"})," file."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from prompty.tracer import Tracer, PromptyTracer\r\nfrom opentelemetry import trace as oteltrace\r\nfrom opentelemetry import trace\r\nfrom opentelemetry.sdk.trace import TracerProvider\r\nfrom opentelemetry.sdk.trace.export import BatchSpanProcessor\r\nfrom opentelemetry.sdk.trace.export import SimpleSpanProcessor\r\nfrom opentelemetry.sdk.trace.sampling import ParentBasedTraceIdRatio\r\nfrom azure.monitor.opentelemetry.exporter import AzureMonitorTraceExporter\r\n\r\n_tracer = "prompty"\r\n\r\n@contextlib.contextmanager\r\ndef trace_span(name: str):    \r\n    tracer = oteltrace.get_tracer(_tracer)    \r\n    with tracer.start_as_current_span(name) as span:        \r\n        def verbose_trace(key, value):            \r\n            if isinstance(value, dict):                \r\n                for k, v in value.items():                  \r\n                    verbose_trace(f"{key}.{k}", v)            \r\n            else:                \r\n                span.set_attribute(f"{key}", value)        \r\n        yield verbose_trace\r\n\r\n\r\ndef init_tracing(local_tracing: bool = False):\r\n    """\r\n    Initialize tracing for the application\r\n    If local_tracing is True, use the PromptyTracer\r\n    If remote_tracing is True, use the OpenTelemetry tracer\r\n    If remote_tracing is not specified, defaults to using the OpenTelemetry tracer only if local_tracing is False\r\n    """\r\n\r\n    if local_tracing:\r\n        local_trace = PromptyTracer()\r\n        Tracer.add("PromptyTracer", local_trace.tracer)\r\n    else:\r\n        Tracer.add("OpenTelemetry", trace_span)\r\n\r\n        azmon_logger = logging.getLogger("azure")\r\n        azmon_logger.setLevel(logging.INFO)\r\n\r\n        # Configure Azure Monitor as the Exporter\r\n        app_insights = os.getenv("APPINSIGHTS_CONNECTIONSTRING")\r\n\r\n        # Add the Azure exporter to the tracer provider\r\n        oteltrace.set_tracer_provider(TracerProvider(sampler=ParentBasedTraceIdRatio(1.0)))\r\n        oteltrace.get_tracer_provider().add_span_processor(BatchSpanProcessor(AzureMonitorTraceExporter(connection_string=app_insights)))\r\n\r\n        return oteltrace.get_tracer(_tracer)\n'})}),"\n",(0,i.jsxs)(t.p,{children:["For sending tracing insights from the app to the dashboard we use the Prompty Tracer alongside the ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable?tabs=python",children:"Opentelemetry"})," Python package. The connection string (which is automatically generated when you run ",(0,i.jsx)(t.code,{children:"azd up"})," for this sample) is unique and specifies where the Azure Monitor OpenTelemetry Distro sends the telemetry it collects. When our application is running in production, and we open Application Insights in the Azure portal the following data can be seen in the dashboard. (It might take a few minutes for data to show up.)"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"App Insights",src:n(58).Z+"",width:"2826",height:"1876"})}),"\n",(0,i.jsx)(t.p,{children:"Our dashboard now provides extensive information from LLM calls, token usage, and various evaluation metrics. This provides detailed insights into performance and helps identify areas of improvement or any issues that may arise. For example, by visualizing token usage over time, businesses can track cost and performance metrics, making it easier to make decisons. We can also look at average evaluation scores, such as relevance, fluency, and coherence, which can be viewed in real-time, providing a clear understanding of the quality of LLM-generated outputs."}),"\n",(0,i.jsx)(t.h2,{id:"5---wrap-up--next-steps",children:"5 |  Wrap-up & Next Steps"}),"\n",(0,i.jsx)(t.p,{children:"We made it!! Thank you for following along with us all through Azure AI Week on the #30DaysOfIA series! Let's quickly recap what we covered over these 5 days."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Kickoff"})," - We introduced two signature use cases for our copilot - Contoso Chat and Contoso Creative Writer - and introduced the end-to-end workflow that both samples follow, for code-first development on Azure AI Studio with Prompty assets."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Provision & Setup"})," - Next, we walked through how we provisioned the application architectures for each sample (with ",(0,i.jsx)(t.code,{children:"azd"}),") and launched a pre-built development environment for each sample (using GitHub Codespaces) connected to that infra.'"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Ideate"})," - We then began the first stage of our GenAIOps lifecycle by going from prompt to prototype, using Prompty assets, tooling, and runtime. We learned how to use Prompty to shape the data (for RAG) and help orchestrate flows (for Agentic AI)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Evaluate"})," - We learned about AI-Assisted evaluation flows, quality and safety assessment metrics, and the process for crafting custom evaluators with Prompty. We also learned about support for observability in Prompty, with tracing options and a built-in viewer."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Deploy"})," - Finally, we learned how to use FastAPI to create a server app, deploy it using Azure Container Apps, and test it in development and production using a built-in UI that allows us to iterate quickly to improve app quality, debug issue, or evolve functionality."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Developer Workflow",src:n(36380).Z+"",width:"1433",height:"448"})}),"\n",(0,i.jsx)(t.p,{children:"Found this series useful and want to keep going? Here are a few things you can do to continue your learning journey!"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsx)(t.p,{children:'"Want to get hands-on experience building intelligent apps on Azure?"'})]}),"\n",(0,i.jsx)(t.p,{children:"Take these actions today, to jumpstart your skilling journey:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://aka.ms/aitour",children:"Register for Microsoft AI Tour"})," - join an instructor-led workshop session."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://ignite.microsoft.com/sessions",children:"Register for Microsoft Ignite"})," - look for related lab & breakout sessions on Azure AI."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://aka.ms/azd-ai-templates",children:"Browse the AI Templates Collection"})," - explore samples for new frameworks and scenarios."]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},69687:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/05-aca-default-7d0f08b7981126cab8d7420582e91770.png"},85755:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/05-aca-fastapi-13b0d6717b7483b88222446c40ffd397.png"},94203:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/05-deploy-aca-247b2bf6b42b0aca87c9f2ccc6f038ec.png"},36380:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/05-developer-workflow-ea28bc208380d98a8041016271b8e50a.png"},11786:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/05-fastapi-codespace-2580ea7ac7cc6408bb38b6e40c7844d5.png"},96032:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/05-fastapi-console-6ff98b00844066074f4b8f10b87f7525.png"},55569:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/05-fastapi-docs-0b3bd4bc058b608c08d7ff6cd3d6c493.png"},36110:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/05-fastapi-local-e40a605b1445e2d2395eb7d4ad677c26.png"},68522:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/05-fastapi-response-eea287a6c16fae9175359201938895d7.png"},67860:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/05-fastapi-test-3e828e42cbae6ec9911779d489b65aac.png"},58:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/app_insights-2a430a88c32738fdb11722e7d244e7a0.png"},15252:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/app_insights_logic-f990d6bf954da0f1bc05b3f8c1945155.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var i=n(67294);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);