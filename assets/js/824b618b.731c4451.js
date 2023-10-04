"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={date:"2023-09-27T09:30",slug:"build-your-first-intelligent-app-with-azure-ai-and-aks-2",title:"2-2. Build Your First Intelligent App with Azure AI and AKS-2",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Delve into creating an Intelligent App that leverages Azure AI Vision to analyze images and extract data. We guide readers through crafting an API to perform optical character recognition (OCR) on uploaded images, and subsequently deploying this API via Azure Kubernetes Service, helping them discover the power of these tools to create innovative, AI-driven solutions.",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},o=void 0,l={permalink:"/Cloud-Native/30DaysOfIA/build-your-first-intelligent-app-with-azure-ai-and-aks-2",source:"@site/blog-30daysofIA/2023-09-27/build-your-first-intelligent-app-with-azure-ai-and-aks-2.md",title:"2-2. Build Your First Intelligent App with Azure AI and AKS-2",description:"Delve into creating an Intelligent App that leverages Azure AI Vision to analyze images and extract data. We guide readers through crafting an API to perform optical character recognition (OCR) on uploaded images, and subsequently deploying this API via Azure Kubernetes Service, helping them discover the power of these tools to create innovative, AI-driven solutions.",date:"2023-09-27T09:30:00.000Z",formattedDate:"September 27, 2023",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30DaysOfIA/tags/build-intelligent-apps"},{label:"30-days-of-IA",permalink:"/Cloud-Native/30DaysOfIA/tags/30-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/30DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/30DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/30DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/30DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30DaysOfIA/tags/github-actions"}],readingTime:8.695,hasTruncateMarker:!1,authors:[{name:"It's 30DaysOfIA",title:"FallForIA Content Team",url:"https://azure.github.io/Cloud-Native/Fall-For-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-ms-cloud-native.png",key:"cnteam"}],frontMatter:{date:"2023-09-27T09:30",slug:"build-your-first-intelligent-app-with-azure-ai-and-aks-2",title:"2-2. Build Your First Intelligent App with Azure AI and AKS-2",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Delve into creating an Intelligent App that leverages Azure AI Vision to analyze images and extract data. We guide readers through crafting an API to perform optical character recognition (OCR) on uploaded images, and subsequently deploying this API via Azure Kubernetes Service, helping them discover the power of these tools to create innovative, AI-driven solutions.",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},prevItem:{title:"2-3. Powering Intelligent Apps with Azure Cosmos DB (1)",permalink:"/Cloud-Native/30DaysOfIA/powering-intelligent-apps-with-azure-cosmos-db-1"},nextItem:{title:"2-1. Build Your First Intelligent App with Azure AI and AKS-1",permalink:"/Cloud-Native/30DaysOfIA/build-your-first-intelligent-app-with-azure-ai-and-aks-1"}},s={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover:",id:"what-well-cover",level:2},{value:"Jumpstart Your AI Journey: Building Your First Intelligent App with Azure AI and AKS (2)",id:"jumpstart-your-ai-journey-building-your-first-intelligent-app-with-azure-ai-and-aks-2",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Pushing a Container Image to Azure Container Registry (ACR)",id:"pushing-a-container-image-to-azure-container-registry-acr",level:2},{value:"Deploying the Intelligent App on Azure Kubernetes Service (AKS)",id:"deploying-the-intelligent-app-on-azure-kubernetes-service-aks",level:2},{value:"Testing the Intelligent App on AKS",id:"testing-the-intelligent-app-on-aks",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30daysofia/build-your-first-intelligent-app-with-azure-ai-and-aks-2"}),(0,r.kt)("meta",{property:"og:type",content:"website"}),(0,r.kt)("meta",{property:"og:title",content:"**Build Intelligent Apps! | Build AI Apps On Azure"}),(0,r.kt)("meta",{property:"og:description",content:"Create an Intelligent App that leverages Azure AI Vision to analyze images and extract data."}),(0,r.kt)("meta",{property:"og:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,r.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30daysofIA/build-your-first-intelligent-app-with-azure-ai-and-aks-2"}),(0,r.kt)("meta",{name:"twitter:title",content:"**Build Intelligent Apps! | Build AI Apps On Azure"}),(0,r.kt)("meta",{name:"twitter:description",content:"2-2. Create an Intelligent App that leverages Azure AI Vision to analyze images and extract data."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30daysofIA/build-your-first-intelligent-app-with-azure-ai-and-aks-2"})),(0,r.kt)("p",null,"In the last article, we created an Intelligent App that leverages Azure AI Vision to analyze images and extract data. Develop an API to perform optical character recognition (OCR) on uploaded images and testing this API locally. "),(0,r.kt)("p",null,"In this article, we will deploy the web API to the cloud platform using Azure Kubernetes Service. "),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understanding Azure AI Vision and Azure Kubernetes Service"),(0,r.kt)("li",{parentName:"ul"},"Build a Python Web API to perform OCR"),(0,r.kt)("li",{parentName:"ul"},"Test the API locally")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image depicting an Intelligent App using AI",src:n(87438).Z,width:"624",height:"380"})),(0,r.kt)("h2",{id:"jumpstart-your-ai-journey-building-your-first-intelligent-app-with-azure-ai-and-aks-2"},"Jumpstart Your AI Journey: Building Your First Intelligent App with Azure AI and AKS (2)"),(0,r.kt)("p",null,"In the previous article we explored the creation of an Intelligent App that leverages Azure AI Vision to analyze images and extract data. We learned how to build a Python Web API to perform OCR on uploaded images and subsequently test this API locally.  "),(0,r.kt)("p",null,"In this article we will use ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/kubernetes-service?WT.mc_id=javascript-99907-ninarasi"},"Azure Kubernetes Service")," (AKS) to develop, publish, and maintain our app in the cloud on Azure. "),(0,r.kt)("p",null,"Let\u2019s get started!"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To follow this tutorial, ensure you have completed ",(0,r.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/30daysofIA/build-your-first-intelligent-app-with-azure-ai-and-aks-1"},"Jumpstart Your AI Journey: Building Your First Intelligent App with Azure AI and AKS (1)"),"."),(0,r.kt)("h2",{id:"pushing-a-container-image-to-azure-container-registry-acr"},"Pushing a Container Image to Azure Container Registry (ACR)"),(0,r.kt)("p",null,"To start, open your CLI or terminal and type the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az login\n")),(0,r.kt)("p",null,"Follow the instructions displayed on your browser to enter your Azure credentials."),(0,r.kt)("p",null,"Once authenticated, you\u2019ll initiate a secure connection between your local environment and Azure. This process grants you access to cloud services and resources."),(0,r.kt)("p",null,"Next, type the command below in your terminal to set up a new Azure Container Registry (ACR) to store your container images:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az acr create --resource-group computer-vision --name <name-of-azure-container-registry> --sku Basic\n")),(0,r.kt)("p",null,"Remember to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<name-of-azure-container-registry>")," with your container registry name. The name must be unique within Azure and comply with ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/azure-resource-manager/management/resource-name-rules#microsoftcontainerregistry"},"these rules"),"."),(0,r.kt)("p",null,"The command above creates an ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/container-registry?WT.mc_id=javascript-99907-ninarasi"},"Azure Container Registry")," (ACR) in the ",(0,r.kt)("inlineCode",{parentName:"p"},"computer-vision")," resource group under the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/container-registry/container-registry-skus?WT.mc_id=javascript-99907-ninarasi"},"Basic SKU"),". This ACR is your secure and private repository for storing container images within Azure."),(0,r.kt)("p",null,"Next, log in to the registry with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az acr login -n <name-of-azure-container-registry>\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"az acr login")," command above lets you securely authenticate and access the specified ACR without providing their Azure credentials each time."),(0,r.kt)("p",null,"Now, run the following command in your terminal. It will display the endpoint URL to log in to and interact with the ACR for pushing and pulling container images."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az acr show --name <name-of-azure-container-registry> --query loginServer --output table\n")),(0,r.kt)("p",null,"This returns an endpoint URL as follows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Result\n----------------------------------\n<name-of-azure-container-registry>.azurecr.io\n")),(0,r.kt)("p",null,"Now, run the following command to show all container images, their repository, tags, and size:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker images\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"REPOSITORY"),(0,r.kt)("th",{parentName:"tr",align:"left"},"TAG"),(0,r.kt)("th",{parentName:"tr",align:"left"},"IMAGE ID"),(0,r.kt)("th",{parentName:"tr",align:"left"},"CREATED"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SIZE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"intelligent-app"),(0,r.kt)("td",{parentName:"tr",align:"left"},"latest"),(0,r.kt)("td",{parentName:"tr",align:"left"},"a7bf9f753617"),(0,r.kt)("td",{parentName:"tr",align:"left"},"16 hours ago"),(0,r.kt)("td",{parentName:"tr",align:"left"},"197MB")))),(0,r.kt)("p",null,"Tags are necessary to push Docker images to a remote registry like Azure Container Registry. They also let you differentiate between different versions of the same image and upload or download the one you want."),(0,r.kt)("p",null,"Run the following command to tag your Docker image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker tag intelligent-app <name-of-azure-container-registry>.azurecr.io/intelligent-app:v1\n")),(0,r.kt)("p",null,"Then, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker images")," command again to check your tagged image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker images\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"REPOSITORY"),(0,r.kt)("th",{parentName:"tr",align:"left"},"TAG"),(0,r.kt)("th",{parentName:"tr",align:"left"},"IMAGE ID"),(0,r.kt)("th",{parentName:"tr",align:"left"},"CREATED"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SIZE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"intelligent-app"),(0,r.kt)("td",{parentName:"tr",align:"left"},"latest"),(0,r.kt)("td",{parentName:"tr",align:"left"},"c52168039265"),(0,r.kt)("td",{parentName:"tr",align:"left"},"About a minute ago"),(0,r.kt)("td",{parentName:"tr",align:"left"},"197MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"<","name-of-azure-container-registry",">",".azurecr.io/intelligent-app"),(0,r.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"c52168039265"),(0,r.kt)("td",{parentName:"tr",align:"left"},"About a minute ago"),(0,r.kt)("td",{parentName:"tr",align:"left"},"197MB")))),(0,r.kt)("p",null,"Now run the following command so Docker can securely upload the image to your Azure Container Registry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push <name-of-azure-container-registry>.azurecr.io/intelligent-app:v1\n")),(0,r.kt)("p",null,"Once we've deployed the image to the container registry, AKS can access it during deployment."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Watch ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://aka.ms/learnlive-contoso-app-deconstructed-Ep3"},"Episode 03"))," for the Learn Live session to experience a guided session on how to build, test and deploy an end-to-end intelligent app solution.")),(0,r.kt)("h2",{id:"deploying-the-intelligent-app-on-azure-kubernetes-service-aks"},"Deploying the Intelligent App on Azure Kubernetes Service (AKS)"),(0,r.kt)("p",null,"Before we deploy our Intelligent App to AKS, we need to provision an AKS cluster and define Kubernetes manifests."),(0,r.kt)("p",null,"To provision an AKS cluster to host our application, we specify the desired configurations for the cluster, such as the number of nodes, node size, and networking options. But first, download and install the Kubernetes command-line tools (kubectl), a client credential plugin implementing Azure authentication:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az aks install-cli\n")),(0,r.kt)("p",null,"If you\u2019re using Linux, ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-linux?pivots=apt?WT.mc_id=javascript-99907-ninarasi"},"review this tutorial"),". Then run the following: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo az aks install-cli\n")),(0,r.kt)("p",null,"Next, run the following command in your terminal to enable access to the networking-related resources and services provided by the `Microsoft.Network`` namespace in Azure: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az provider register --namespace Microsoft.Network\n")),(0,r.kt)("p",null,"Now, we must create an AKS cluster. Run the following command to create an AKS cluster named ",(0,r.kt)("inlineCode",{parentName:"p"},"aks-intelligent-app")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"computer-vision")," resource group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az aks create --resource-group computer-vision --name aks-intelligent-app --node-count 1 --generate-ssh-keys\n")),(0,r.kt)("p",null,"The command above specifies the target resource group: ",(0,r.kt)("inlineCode",{parentName:"p"},"computer-vision"),". The ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/aks/use-multiple-node-pools?WT.mc_id=javascript-99907-ninarasi"},"node pool")," is configured with one virtual machine (VM), and the secure shell (SSH) keys for secure node access are generated automatically."),(0,r.kt)("p",null,"Next, run the following command to update the AKS cluster you created by attaching it to your ACR. Doing so allows the AKS cluster to pull container images from the specified ACR when deploying workloads to the cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az aks update -n aks-intelligent-app -g computer-vision --attach-acr <name-of-azure-container-registry>\n")),(0,r.kt)("p",null,"Then, run the command below to configure kubectl to work with our AKS cluster in the computer-vision resource group. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"az aks get-credentials --resource-group computer-vision --name aks-intelligent-app\n")),(0,r.kt)("p",null,"The command above retrieves the necessary credentials and context information required for kubectl to communicate with the AKS cluster."),(0,r.kt)("p",null,"We still have to define the Kubernetes manifests written in YAML, describing the desired state of our application deployment, including containers, networking, and scaling rules. We\u2019ll prepare these manifests, including ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")," and ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service")," configurations, to define how our application should be deployed and exposed."),(0,r.kt)("p",null,"Create a folder named ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," in the project root directory. Next, create two files in the deployment folder: ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.yml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"service.yml"),"."),(0,r.kt)("p",null,"Add the following configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.yml")," file, replacing the ",(0,r.kt)("inlineCode",{parentName:"p"},"<name-of-azure-container-registry>")," placeholder with your registry\u2019s name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: intelligent-app\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: intelligent-app\n  template:\n    metadata:\n      labels:\n        app: intelligent-app\n    spec:\n      nodeSelector:\n        kubernetes.io/os: linux\n      containers:\n        - name: intelligent-app\n          image: <name-of-azure-container-registry>.azurecr.io/intelligent-app:v1\n          resources:\n            limits:\n              memory: 512Mi\n              cpu: "1"\n            requests:\n              memory: 256Mi\n              cpu: "0.2"\n          ports:\n            - containerPort: 5000\n          env:\n            - name: FLASK_DEBUG\n              value: "1"\n            - name: VISION_KEY\n              value: <THE-KEY-1-VALUE-FROM-YOUR-AZURE-AI-SERVICE>\n            - name: VISION_ENDPOINT\n              value: <THE-ENDPOINT-VALUE-FROM-YOUR-AZURE-AI>\n')),(0,r.kt)("p",null,"Additionally, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"VISION_KEY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"VISION_ENDPOINT")," environment variables above according to the API key and endpoint of your Azure AI Services instance."),(0,r.kt)("p",null,"Then, add the following configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"service.yml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: Service \nmetadata:\n  name: intelligent-app-service\nspec:\n  type: LoadBalancer\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 5000\n      name: port5000\n  selector:\n    app: intelligent-app\n")),(0,r.kt)("p",null,"Now, we\u2019ll deploy our application using kubectl. Applying the Kubernetes manifests creates the necessary resources and deploys our containerized application to the AKS cluster."),(0,r.kt)("p",null,"First, change the terminal to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," folder: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd Deployment \n")),(0,r.kt)("p",null,"Then, run the following command to create or update Kubernetes resources defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.yml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f deployment.yml\n")),(0,r.kt)("p",null,"Create a Kubernetes Service resource in a Kubernetes cluster based on the configuration defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"service.yml")," file using the code below: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f service.yml\n")),(0,r.kt)("p",null,"Once you\u2019ve applied the resource definition and the service configuration contained in the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.yml")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"service.yml")," files, open the ",(0,r.kt)("strong",{parentName:"p"},"aks-intelligent-app")," Kubernetes Service in the Azure Portal, select ",(0,r.kt)("strong",{parentName:"p"},"Workloads")," under ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes resources")," on the sidebar, and find the deployment named ",(0,r.kt)("strong",{parentName:"p"},"intelligent-app"),". It must have the status \u201cReady 1/1\u201d. If you encounter an issue with this status, check out these ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/node-not-ready-basic-troubleshooting?WT.mc_id=javascript-99907-ninarasi"},"troubleshooting resources"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image of selecting the deployment in Azure Portal",src:n(5669).Z,width:"624",height:"318"})),(0,r.kt)("h2",{id:"testing-the-intelligent-app-on-aks"},"Testing the Intelligent App on AKS"),(0,r.kt)("p",null,"To test the app on AKS, first, run the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get services\n")),(0,r.kt)("p",null,"This command lists the Services and their corresponding details, including the Service name, cluster IP address, external IP, and ports."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"NAME"),(0,r.kt)("th",{parentName:"tr",align:"left"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"left"},"CLUSTER-IP"),(0,r.kt)("th",{parentName:"tr",align:"left"},"EXTERNAL-IP"),(0,r.kt)("th",{parentName:"tr",align:"left"},"PORT(S)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"AGE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"intelligent-app-service"),(0,r.kt)("td",{parentName:"tr",align:"left"},"LoadBalancer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10.0.77.60"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20.121.76.153"),(0,r.kt)("td",{parentName:"tr",align:"left"},"80:30936/TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"47s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kubernetes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ClusterIP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"<","none",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"443/TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"14m")))),(0,r.kt)("p",null,"The output above shows a Kubernetes Service named ",(0,r.kt)("inlineCode",{parentName:"p"},"intelligent-app-service")," with a type set to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),". It\u2019s reachable from within the cluster using the cluster IP ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.77.60")," and accessible externally via the external IP ",(0,r.kt)("inlineCode",{parentName:"p"},"20.121.76.153")," on port 80 (mapped to port 30936)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Your set of IP addresses will differ. Remember to use your unique external IP address when testing with Postman. "),(0,r.kt)("p",null,"To test the deployed app, go to Postman, replace the URL with the external IP of the Kubernetes Service you just deployed, and click ",(0,r.kt)("strong",{parentName:"p"},"Send"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mage of sending the app in Postman",src:n(8422).Z,width:"624",height:"365"})),(0,r.kt)("p",null,"As we can see, our Intelligent App has successfully deployed to AKS and is functioning on the cloud as expected."),(0,r.kt)("h2",{id:"exercise"},"Exercise"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Complete this ",(0,r.kt)("strong",{parentName:"li"},"hands-on")," sample ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/contentlab-io/Microsoft-Using-Azure-Kubernetes-Service-to-Deploy-an-Intelligent-App-for-Analyzing-Images-1/tree/main/Microsoft_Series17-18_Code/intelligent-app-after"},"project code")," to build your first intelligent app."),(0,r.kt)("li",{parentName:"ul"},"Complete the ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/fallforIA/apps-csc"},"Apps Cloud Skills Challenge")," to build on your app dev and AI skills."),(0,r.kt)("li",{parentName:"ul"},"Register for ",(0,r.kt)("a",{parentName:"li",href:"https://reactor.microsoft.com/en-us/reactor/series/S-1037/"},"Ask the Expert: Azure Kubernetes Service")," session for live Q&A with the Product Engineering team on building intelligent apps.")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"In this two-part article, we explored the creation of an Intelligent App that leverages Azure AI Vision to analyze images and extract data. We learned how to build a Python Web API to perform OCR on uploaded images and subsequently deploy this API via Azure Kubernetes Service."),(0,r.kt)("p",null,"Besides OCR and Image Analysis, you can continue exploring Azure\u2019s vast array of services and experiment further with Azure AI and AKS by applying various practical uses to your Intelligent Apps, including natural language processing, speech recognition and synthesis, sentiment analysis for customer feedback, and automated content moderation."))}c.isMDXComponent=!0},87438:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-2-1-974d3a64c66cbcd6e014779113bc1a4b.jpeg"},5669:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-2-2-fb13fe692dc47f7d90de361ec6d5b771.png"},8422:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-2-3-d8cd3a3026fb47d4589f3ee5baa3de5d.png"}}]);