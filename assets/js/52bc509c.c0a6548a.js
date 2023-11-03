"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44106],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={date:"2023-10-24T09:00",slug:"building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2",title:"4-2. Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Explore how to develop an AI-powered logo generator using DALL-E, Azure OpenAI and Azure Kubernetes Service (AKS).",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},o=void 0,l={permalink:"/Cloud-Native/30DaysOfIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2",source:"@site/blog-30daysofIA/2023-10-24/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2.md",title:"4-2. Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)",description:"Explore how to develop an AI-powered logo generator using DALL-E, Azure OpenAI and Azure Kubernetes Service (AKS).",date:"2023-10-24T09:00:00.000Z",formattedDate:"October 24, 2023",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30DaysOfIA/tags/build-intelligent-apps"},{label:"30-days-of-IA",permalink:"/Cloud-Native/30DaysOfIA/tags/30-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/30DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/30DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/30DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/30DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30DaysOfIA/tags/github-actions"}],readingTime:9.5,hasTruncateMarker:!1,authors:[{name:"It's 30DaysOfIA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-ms-cloud-native.png",key:"cnteam"}],frontMatter:{date:"2023-10-24T09:00",slug:"building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2",title:"4-2. Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Explore how to develop an AI-powered logo generator using DALL-E, Azure OpenAI and Azure Kubernetes Service (AKS).",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},nextItem:{title:"4-1. Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (1)",permalink:"/Cloud-Native/30DaysOfIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-1"}},s={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover:",id:"what-well-cover",level:2},{value:"Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)",id:"building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying and Testing on Azure Kubernetes Service",id:"deploying-and-testing-on-azure-kubernetes-service",level:2},{value:"Creating a Dockerfile",id:"creating-a-dockerfile",level:3},{value:"Pushing the App\u2019s Docker Image to an Azure Registry",id:"pushing-the-apps-docker-image-to-an-azure-registry",level:3},{value:"Creating an AKS Cluster",id:"creating-an-aks-cluster",level:3},{value:"Deploying the App to the Cluster",id:"deploying-the-app-to-the-cluster",level:3},{value:"Summary",id:"summary",level:2},{value:"Exercise",id:"exercise",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30daysofia/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2"}),(0,r.kt)("meta",{property:"og:type",content:"website"}),(0,r.kt)("meta",{property:"og:title",content:"Build Intelligent Apps!| Build AI Apps On Azure"}),(0,r.kt)("meta",{property:"og:description",content:"Explore how to develop an AI-powered logo generator using DALL-E, Azure OpenAI and Azure Kubernetes Service (AKS)."}),(0,r.kt)("meta",{property:"og:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,r.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30daysofIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2"}),(0,r.kt)("meta",{name:"twitter:title",content:"Build Intelligent Apps! | Build AI Apps On Azure"}),(0,r.kt)("meta",{name:"twitter:description",content:"4.2 - Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30daysofIA/https://azure.github.io/Cloud-Native/30daysofIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2"})),(0,r.kt)("p",null,"In this article, explore how to develop an AI-powered logo generator using DALL-E, ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/ai-services/openai/overview?WT.mc_id=javascript-99907-ninarasi"},"Azure OpenAI")," and ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/?WT.mc_id=javascript-99907-ninarasi"},"Azure Kubernetes Service (AKS)"),"."),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploying the Logo Variation Generator app on AKS "),(0,r.kt)("li",{parentName:"ul"},"Creating a dockerfile and storing the image in Azure Container Registry"),(0,r.kt)("li",{parentName:"ul"},"Create, deploy and test the app on AKS cluster")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image of logos on web interface",src:a(93760).Z,width:"625",height:"380"})),(0,r.kt)("h2",{id:"building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2"},"Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/30DaysOfIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-1"},"previous part")," of this tutorial, we explored creating an AI-powered logo variation generator with DALL-E and building a web interface for the app. This part continues onto deploying and testing the application on Azure Kubernetes Service."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To follow this tutorial, ensure you have completed the\u202ffirst\u202f",(0,r.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/30DaysOfIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-1"},"part")," of this topic. "),(0,r.kt)("h2",{id:"deploying-and-testing-on-azure-kubernetes-service"},"Deploying and Testing on Azure Kubernetes Service"),(0,r.kt)("p",null,"While running the app locally is great, Intelligent Apps are meant to be shared with others. Let\u2019s deploy the app to Azure using AKS."),(0,r.kt)("h3",{id:"creating-a-dockerfile"},"Creating a Dockerfile"),(0,r.kt)("p",null,"To deploy to AKS, we\u2019ll first create a Docker image containing the app and its dependencies. A Docker image is a packaged version of your app that can run on any platform supporting Docker images."),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the same directory as main.py. Add the following code to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM python:3.11\n\nWORKDIR /app\n\nCOPY requirements.txt .\n\nRUN pip install -r requirements.txt\n\nCOPY main.py .\n\nEXPOSE 8000\n\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0"]\n')),(0,r.kt)("p",null,"This Dockerfile tells Docker to do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the official Python 3.11 image as the base image. This image contains the Python interpreter and some common packages."),(0,r.kt)("li",{parentName:"ul"},"Set the working directory to ",(0,r.kt)("inlineCode",{parentName:"li"},"/app"),", where we\u2019ll store the app files inside the Docker image."),(0,r.kt)("li",{parentName:"ul"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"requirements.txt")," file to ",(0,r.kt)("inlineCode",{parentName:"li"},"/app"),", which lists the Python packages that our app needs."),(0,r.kt)("li",{parentName:"ul"},"Install the required Python packages using pip."),(0,r.kt)("li",{parentName:"ul"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"main.py")," file to ",(0,r.kt)("inlineCode",{parentName:"li"},"/app"),", which contains our app code."),(0,r.kt)("li",{parentName:"ul"},"Expose port 8000 so the FastAPI app can receive connections outside the container."),(0,r.kt)("li",{parentName:"ul"},"Run the FastAPI app when the container starts.")),(0,r.kt)("h3",{id:"pushing-the-apps-docker-image-to-an-azure-registry"},"Pushing the App\u2019s Docker Image to an Azure Registry"),(0,r.kt)("p",null,"To store and manage our Docker images, we need to use a container registry, which is a service that hosts and distributes images. ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/container-registry?WT.mc_id=javascript-99907-ninarasi"},"Azure Container Registry")," integrates closely with AKS. We can use it to build, store, secure, scan, replicate, and manage our container images and artifacts."),(0,r.kt)("p",null,"Start by creating an Azure Container Registry using the ",(0,r.kt)("inlineCode",{parentName:"p"},"az acr create")," command. Use a descriptive name for your registry instead of the placeholder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az acr create --resource-group dalleResourceGroup --name <registry-name> --sku Basic\n")),(0,r.kt)("p",null,"This will create a container registry in the resource group named ",(0,r.kt)("inlineCode",{parentName:"p"},"dalleResourceGroup")," with the Basic service tier."),(0,r.kt)("p",null,"Log in to your container registry using the ",(0,r.kt)("inlineCode",{parentName:"p"},"az acr")," login command. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<registry-name>")," with the name of your registry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az acr login --name <registry-name> \n")),(0,r.kt)("p",null,"This command authenticates you with the container registry using your Azure credentials."),(0,r.kt)("p",null,"Build your Docker image using the ",(0,r.kt)("inlineCode",{parentName:"p"},"az acr build")," command. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<image-name>")," with the name of your registry and a name for your image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az acr build --registry <registry-name> --image <image-name>\n")),(0,r.kt)("p",null,"This command builds your Docker image from the Dockerfile in the current directory and pushes it to your container registry."),(0,r.kt)("p",null,"Verify that your image is in your container registry using the ",(0,r.kt)("inlineCode",{parentName:"p"},"az acr repository")," list command, replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"<registry-name>")," with the name of your registry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az acr repository list --name <registry-name> --output table\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Join the Azure team at ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://aka.ms/aks-day"},"KubeCon and Azure Day"))," in Chicago on ",(0,r.kt)("strong",{parentName:"p"},"November 6, 2023"),". The Azure Product Engineering team along with the Cloud Advocates team will be there to dive deep with you on developing intelligent apps with Azure Kubernetes Service.")),(0,r.kt)("h3",{id:"creating-an-aks-cluster"},"Creating an AKS Cluster"),(0,r.kt)("p",null,"To run our app on AKS, we need to create an AKS cluster, a group of ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/"},"nodes")," hosting our containers. A node is a virtual machine that runs one or more containers. An AKS cluster also has a control plane that manages the nodes and orchestrates the containers."),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<cluster-name>")," with a name for your cluster and ",(0,r.kt)("inlineCode",{parentName:"p"},"<registry-name>")," with the name of your container registry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az aks create --resource-group dalleResourceGroup --name <cluster-name> --node-count 1 --generate-ssh-keys --attach-acr <registry-name>\n")),(0,r.kt)("p",null,"This command action creates an AKS cluster in the resource group named ",(0,r.kt)("inlineCode",{parentName:"p"},"dalleResourceGroup")," with the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--node-count 1")," \xad\xad\u2014 \xadThis specifies that the cluster has one node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--generate-ssh-keys")," \u2014 This generates SSH keys to access the nodes if needed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--attach-acr")," \u2014 This attaches the container registry to the cluster, allowing the cluster to pull images from the registry.")),(0,r.kt)("p",null,"Next, connect to your cluster using the ",(0,r.kt)("inlineCode",{parentName:"p"},"az aks get-credentials")," command. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<cluster-name>")," with the name of your cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az aks get-credentials --resource-group dalleResourceGroup --name <cluster-name>\n")),(0,r.kt)("p",null,"This action downloads the credentials and configures ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", a command-line tool for interacting with Kubernetes clusters."),(0,r.kt)("p",null,"Verify that you\u2019re connected to your cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get nodes\n")),(0,r.kt)("p",null,"This command shows the nodes in your cluster and their statuses. You should see one node with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready")," status."),(0,r.kt)("h3",{id:"deploying-the-app-to-the-cluster"},"Deploying the App to the Cluster"),(0,r.kt)("p",null,"To deploy our app to the cluster, we need to create a Kubernetes manifest file\u2014a YAML file that defines the resources and configurations for our app. A Kubernetes manifest file typically consists of one or more of the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment"),", which defines how to create and update instances of your app"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service"),", which is a set of rules that manage network traffic to one or more containers. A Service provides a single entry point for accessing them and handling functions like load balancing and service discovery."),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress"),", which defines how to route external traffic to your app")),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.yaml")," in the same directory as your ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," file and paste the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Deployment definition\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: dall-e-app # The name of the Deployment\nspec:\n  replicas: 1 # The number of replicas (instances) of the app\n  selector:\n    matchLabels:\n      app: dall-e-app # The label that identifies the app\n  template:\n    metadata:\n      labels:\n        app: dall-e-app\n    spec:\n      containers:\n      - name: dall-e-app # The name of the container\n        image: <registry-name>.azurecr.io/<image-name> # The image to run in the container\n        ports:\n        - containerPort: 8000 # The port that the container exposes to other services\n        resources:\n          requests:\n            cpu: 1 # The number of CPUs requested by the container\n            memory: 2Gi # The amount of memory requested by the container\n\n# Service definition\napiVersion: v1\nkind: Service\nmetadata:\n  name: dall-e-service # The name of the Service\nspec:\n  selector:\n    app: dall-e-app # The label that identifies the app\n  ports:\n  - protocol: TCP\n    port: 80 # The port that the Service exposes externally\n    targetPort: 8000 # The port of the deployment that the Service forwards traffic to\n  type: LoadBalancer # The type of Service that assigns a public IP address and load balances traffic\n\n# Define an Ingress for the app\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: dall-e-ingress # The name of the Ingress\nspec:\n  rules:\n  - http:\n      paths:\n      - path: / # The path that matches incoming requests\n        pathType: Prefix\n        backend:\n          service:\n            name: dall-e-service # The name of the Service that handles requests from outside the cluster\n            port:\n              number: 80 # The port that the Service exposes\n")),(0,r.kt)("p",null,"This manifest file tells Kubernetes to do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a Deployment for the app with one replica (instance) that runs your Docker image on port 8000, requesting one CPU and 2 GB of memory."),(0,r.kt)("li",{parentName:"ul"},"Create a Service for the app that exposes port 80 and forwards traffic to port 8000 on the app instances. The Service also assigns a public IP address and load balances traffic across instances."),(0,r.kt)("li",{parentName:"ul"},"Create an Ingress for the app that routes incoming requests on path / to port 80 on the Service.")),(0,r.kt)("p",null,"As in previous examples, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<registry-name>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<image-name>")," with your own values in the manifest file."),(0,r.kt)("p",null,"Now, let\u2019s deploy the app to the AKS cluster. Apply your manifest file using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f manifest.yaml\n")),(0,r.kt)("p",null,"This creates or updates all resources defined in your manifest file. Next, check the status of your Deployment using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get deployment")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get deployment dall-e-app\n")),(0,r.kt)("p",null,"This command shows information about your Deployment, such as how many replicas are available and up to date. You should see one replica with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready")," status."),(0,r.kt)("p",null,"Now, check the status of your Service using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get service")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get service\n")),(0,r.kt)("p",null,"This displays information about your Service, such as the cluster IP and the external IP. You should see a public IP address assigned to your service."),(0,r.kt)("p",null,"Finally, check the status of your Ingress:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get ingress dall-e-app\n")),(0,r.kt)("p",null,"This command provides information about your Ingress, such as the host and the address. You should see the same public IP address as your Service."),(0,r.kt)("p",null,"Now that you\u2019ve deployed your app on AKS, you can test it again and see how it works on AKS. Open a web browser and load ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<web>/index.html"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"<web>")," is the public IP address of your service or ingress. You should see the same web page as before."),(0,r.kt)("p",null,"Enter a text prompt describing the logos you would like to create. For example, you might enter \u201cvector art that includes a dancing cat.\u201d"),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Generate")," button and wait for a few seconds. You should see several logos DALL-E generates in response to your prompt, the same as when you ran the app locally."),(0,r.kt)("p",null,"And you\u2019re done! You have successfully built a complete AI-powered app and deployed it to Azure Kubernetes Service."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"We\u2019ve covered a lot of ground! To recap, in this tutorial, you\u2019ve:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learned how to build an Intelligent App that uses DALL-E, a neural network that can generate images from text descriptions"),(0,r.kt)("li",{parentName:"ul"},"Used Azure OpenAI Service to access DALL-E and FastAPI to create a simple back end that handles the requests and responses"),(0,r.kt)("li",{parentName:"ul"},"Created a web interface that lets you enter a text prompt with instructions on how to generate the logo, and view the results returned by DALL-E"),(0,r.kt)("li",{parentName:"ul"},"Deployed your app on Azure Kubernetes Service and tested its functionality")),(0,r.kt)("p",null,"Now that you\u2019ve built and deployed one app, you\u2019re in a great position to explore Azure OpenAI\u2019s other capabilities and apply what you\u2019ve learned to other use cases. Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/ai-services/openai/?WT.mc_id=javascript-99907-ninarasi"},"Azure OpenAI documentation")," for more information and examples."),(0,r.kt)("h2",{id:"exercise"},"Exercise"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Complete this ",(0,r.kt)("strong",{parentName:"li"},"hands-on sample")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/contentlab-io/Microsoft-Building-an-AI-Powered-Logo-Variation-Generator-with-Azure-OpenAI"},"project code")," to build your intelligent app with multi-modal databases."),(0,r.kt)("li",{parentName:"ul"},"Watch the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://reactor.microsoft.com/reactor/events/20732/?WT.mc_id=javascript-99907-ninarasi"},"Ask the Expert: Azure Kubernetes Service"))," session where the Product Engineering team goes dives into the concepts for building intelligent apps using Azure Kubernetes Service."),(0,r.kt)("li",{parentName:"ul"},"To revise core concepts on cloud-native or Azure Kubernetes Service, go to\n",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/cloud-native-fundamentals"},"30 Days of Cloud Native")),".")))}c.isMDXComponent=!0},93760:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image-4-2-1-8620a6738aa4519e23875b990054136d.jpeg"}}]);