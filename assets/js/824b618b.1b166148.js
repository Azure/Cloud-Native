"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70695],{22769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(85893),r=n(11151);const s={date:"2023-09-27T09:30",slug:"build-your-first-intelligent-app-with-azure-ai-and-aks-2",title:"2-2. Build Your First Intelligent App with Azure AI and AKS (2)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Delve into creating an Intelligent App that leverages Azure AI Vision to analyze images and extract data. We guide readers through crafting an API to perform optical character recognition (OCR) on uploaded images, and subsequently deploying this API via Azure Kubernetes Service, helping them discover the power of these tools to create innovative, AI-driven solutions.",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},a=void 0,l={permalink:"/Cloud-Native/30DaysOfIA/build-your-first-intelligent-app-with-azure-ai-and-aks-2",source:"@site/blog-30daysofIA/2023-09-27/build-your-first-intelligent-app-with-azure-ai-and-aks-2.md",title:"2-2. Build Your First Intelligent App with Azure AI and AKS (2)",description:"Delve into creating an Intelligent App that leverages Azure AI Vision to analyze images and extract data. We guide readers through crafting an API to perform optical character recognition (OCR) on uploaded images, and subsequently deploying this API via Azure Kubernetes Service, helping them discover the power of these tools to create innovative, AI-driven solutions.",date:"2023-09-27T09:30:00.000Z",formattedDate:"September 27, 2023",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30DaysOfIA/tags/build-intelligent-apps"},{label:"30-days-of-IA",permalink:"/Cloud-Native/30DaysOfIA/tags/30-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/30DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/30DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/30DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/30DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30DaysOfIA/tags/github-actions"}],readingTime:8.695,hasTruncateMarker:!1,authors:[{name:"It's 30DaysOfIA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-ms-cloud-native.png",key:"cnteam"}],frontMatter:{date:"2023-09-27T09:30",slug:"build-your-first-intelligent-app-with-azure-ai-and-aks-2",title:"2-2. Build Your First Intelligent App with Azure AI and AKS (2)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Delve into creating an Intelligent App that leverages Azure AI Vision to analyze images and extract data. We guide readers through crafting an API to perform optical character recognition (OCR) on uploaded images, and subsequently deploying this API via Azure Kubernetes Service, helping them discover the power of these tools to create innovative, AI-driven solutions.",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"2-1. Build Your First Intelligent App with Azure AI and AKS (1)",permalink:"/Cloud-Native/30DaysOfIA/build-your-first-intelligent-app-with-azure-ai-and-aks-1"},nextItem:{title:"2-3. Powering Intelligent Apps with Azure Cosmos DB (1)",permalink:"/Cloud-Native/30DaysOfIA/powering-intelligent-apps-with-azure-cosmos-db-1"}},o={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover:",id:"what-well-cover",level:2},{value:"Jumpstart Your AI Journey: Building Your First Intelligent App with Azure AI and AKS (2)",id:"jumpstart-your-ai-journey-building-your-first-intelligent-app-with-azure-ai-and-aks-2",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Pushing a Container Image to Azure Container Registry (ACR)",id:"pushing-a-container-image-to-azure-container-registry-acr",level:2},{value:"Result",id:"result",level:2},{value:"Deploying the Intelligent App on Azure Kubernetes Service (AKS)",id:"deploying-the-intelligent-app-on-azure-kubernetes-service-aks",level:2},{value:"Testing the Intelligent App on AKS",id:"testing-the-intelligent-app-on-aks",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s,{children:[(0,i.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30daysofia/build-your-first-intelligent-app-with-azure-ai-and-aks-2"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"Build Intelligent Apps! | Build AI Apps On Azure"}),(0,i.jsx)("meta",{property:"og:description",content:"Create an Intelligent App that leverages Azure AI Vision to analyze images and extract data."}),(0,i.jsx)("meta",{property:"og:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30daysofIA/build-your-first-intelligent-app-with-azure-ai-and-aks-2"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Build Intelligent Apps! | Build AI Apps On Azure"}),(0,i.jsx)("meta",{name:"twitter:description",content:"2-2. Create an Intelligent App that leverages Azure AI Vision to analyze images and extract data."}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30daysofIA/build-your-first-intelligent-app-with-azure-ai-and-aks-2"})]}),"\n",(0,i.jsx)(t.p,{children:"In the last article, we created an Intelligent App that leverages Azure AI Vision to analyze images and extract data. Develop an API to perform optical character recognition (OCR) on uploaded images and testing this API locally."}),"\n",(0,i.jsx)(t.p,{children:"In this article, we will deploy the web API to the cloud platform using Azure Kubernetes Service."}),"\n",(0,i.jsx)(t.h2,{id:"what-well-cover",children:"What We'll Cover:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Understanding Azure AI Vision and Azure Kubernetes Service"}),"\n",(0,i.jsx)(t.li,{children:"Build a Python Web API to perform OCR"}),"\n",(0,i.jsx)(t.li,{children:"Test the API locally"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image depicting an Intelligent App using AI",src:n(87438).Z+"",width:"624",height:"380"})}),"\n",(0,i.jsx)(t.h2,{id:"jumpstart-your-ai-journey-building-your-first-intelligent-app-with-azure-ai-and-aks-2",children:"Jumpstart Your AI Journey: Building Your First Intelligent App with Azure AI and AKS (2)"}),"\n",(0,i.jsx)(t.p,{children:"In the previous article we explored the creation of an Intelligent App that leverages Azure AI Vision to analyze images and extract data. We learned how to build a Python Web API to perform OCR on uploaded images and subsequently test this API locally."}),"\n",(0,i.jsxs)(t.p,{children:["In this article we will use ",(0,i.jsx)(t.a,{href:"https://azure.microsoft.com/products/kubernetes-service?WT.mc_id=javascript-99907-ninarasi",children:"Azure Kubernetes Service"})," (AKS) to develop, publish, and maintain our app in the cloud on Azure."]}),"\n",(0,i.jsx)(t.p,{children:"Let\u2019s get started!"}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["To follow this tutorial, ensure you have completed ",(0,i.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/30daysofIA/build-your-first-intelligent-app-with-azure-ai-and-aks-1",children:"Jumpstart Your AI Journey: Building Your First Intelligent App with Azure AI and AKS (1)"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"pushing-a-container-image-to-azure-container-registry-acr",children:"Pushing a Container Image to Azure Container Registry (ACR)"}),"\n",(0,i.jsx)(t.p,{children:"To start, open your CLI or terminal and type the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"az login\n"})}),"\n",(0,i.jsx)(t.p,{children:"Follow the instructions displayed on your browser to enter your Azure credentials."}),"\n",(0,i.jsx)(t.p,{children:"Once authenticated, you\u2019ll initiate a secure connection between your local environment and Azure. This process grants you access to cloud services and resources."}),"\n",(0,i.jsx)(t.p,{children:"Next, type the command below in your terminal to set up a new Azure Container Registry (ACR) to store your container images:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"az acr create --resource-group computer-vision --name <name-of-azure-container-registry> --sku Basic\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Remember to replace ",(0,i.jsx)(t.code,{children:"<name-of-azure-container-registry>"})," with your container registry name. The name must be unique within Azure and comply with ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/azure/azure-resource-manager/management/resource-name-rules#microsoftcontainerregistry",children:"these rules"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The command above creates an ",(0,i.jsx)(t.a,{href:"https://azure.microsoft.com/products/container-registry?WT.mc_id=javascript-99907-ninarasi",children:"Azure Container Registry"})," (ACR) in the ",(0,i.jsx)(t.code,{children:"computer-vision"})," resource group under the ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/azure/container-registry/container-registry-skus?WT.mc_id=javascript-99907-ninarasi",children:"Basic SKU"}),". This ACR is your secure and private repository for storing container images within Azure."]}),"\n",(0,i.jsx)(t.p,{children:"Next, log in to the registry with the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"az acr login -n <name-of-azure-container-registry>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"az acr login"})," command above lets you securely authenticate and access the specified ACR without providing their Azure credentials each time."]}),"\n",(0,i.jsx)(t.p,{children:"Now, run the following command in your terminal. It will display the endpoint URL to log in to and interact with the ACR for pushing and pulling container images."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"az acr show --name &lt;name-of-azure-container-registry&gt --query loginServer --output table\n"})}),"\n",(0,i.jsx)(t.p,{children:"This returns an endpoint URL as follows:"}),"\n",(0,i.jsx)(t.h2,{id:"result",children:"Result"}),"\n",(0,i.jsx)(t.p,{children:"<name-of-azure-container-registry>.azurecr.io"}),"\n",(0,i.jsx)(t.p,{children:"Now, run the following command to show all container images, their repository, tags, and size:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"docker images\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"REPOSITORY"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"TAG"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"IMAGE ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"CREATED"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"SIZE"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"intelligent-app"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"latest"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"a7bf9f753617"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"16 hours ago"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"197MB"})]})})]}),"\n",(0,i.jsx)(t.p,{children:"Tags are necessary to push Docker images to a remote registry like Azure Container Registry. They also let you differentiate between different versions of the same image and upload or download the one you want."}),"\n",(0,i.jsx)(t.p,{children:"Run the following command to tag your Docker image:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"docker tag intelligent-app <name-of-azure-container-registry>.azurecr.io/intelligent-app:v1\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then, run the ",(0,i.jsx)(t.code,{children:"docker images"})," command again to check your tagged image:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"docker images\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"REPOSITORY"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"TAG"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"IMAGE ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"CREATED"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"SIZE"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"intelligent-app"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"latest"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"c52168039265"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"About a minute ago"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"197MB"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"<name-of-azure-container-registry>.azurecr.io/intelligent-app"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"v1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"c52168039265"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"About a minute ago"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"197MB"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Now run the following command so Docker can securely upload the image to your Azure Container Registry:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"docker push <name-of-azure-container-registry>.azurecr.io/intelligent-app:v1\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once we've deployed the image to the container registry, AKS can access it during deployment."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Watch ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://aka.ms/learnlive-contoso-app-deconstructed-Ep3",children:"Episode 03"})})," for the Learn Live session to experience a guided session on how to build, test and deploy an end-to-end intelligent app solution."]})}),"\n",(0,i.jsx)(t.h2,{id:"deploying-the-intelligent-app-on-azure-kubernetes-service-aks",children:"Deploying the Intelligent App on Azure Kubernetes Service (AKS)"}),"\n",(0,i.jsx)(t.p,{children:"Before we deploy our Intelligent App to AKS, we need to provision an AKS cluster and define Kubernetes manifests."}),"\n",(0,i.jsx)(t.p,{children:"To provision an AKS cluster to host our application, we specify the desired configurations for the cluster, such as the number of nodes, node size, and networking options. But first, download and install the Kubernetes command-line tools (kubectl), a client credential plugin implementing Azure authentication:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"az aks install-cli\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If you\u2019re using Linux, ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-linux?pivots=apt?WT.mc_id=javascript-99907-ninarasi",children:"review this tutorial"}),". Then run the following:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo az aks install-cli\n"})}),"\n",(0,i.jsx)(t.p,{children:"Next, run the following command in your terminal to enable access to the networking-related resources and services provided by the `Microsoft.Network`` namespace in Azure:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"az provider register --namespace Microsoft.Network\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Now, we must create an AKS cluster. Run the following command to create an AKS cluster named ",(0,i.jsx)(t.code,{children:"aks-intelligent-app"})," in the ",(0,i.jsx)(t.code,{children:"computer-vision"})," resource group."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"az aks create --resource-group computer-vision --name aks-intelligent-app --node-count 1 --generate-ssh-keys\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The command above specifies the target resource group: ",(0,i.jsx)(t.code,{children:"computer-vision"}),". The ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/aks/use-multiple-node-pools?WT.mc_id=javascript-99907-ninarasi",children:"node pool"})," is configured with one virtual machine (VM), and the secure shell (SSH) keys for secure node access are generated automatically."]}),"\n",(0,i.jsx)(t.p,{children:"Next, run the following command to update the AKS cluster you created by attaching it to your ACR. Doing so allows the AKS cluster to pull container images from the specified ACR when deploying workloads to the cluster."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"az aks update -n aks-intelligent-app -g computer-vision --attach-acr <name-of-azure-container-registry>\n"})}),"\n",(0,i.jsx)(t.p,{children:"Then, run the command below to configure kubectl to work with our AKS cluster in the computer-vision resource group."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"az aks get-credentials --resource-group computer-vision --name aks-intelligent-app\n"})}),"\n",(0,i.jsx)(t.p,{children:"The command above retrieves the necessary credentials and context information required for kubectl to communicate with the AKS cluster."}),"\n",(0,i.jsxs)(t.p,{children:["We still have to define the Kubernetes manifests written in YAML, describing the desired state of our application deployment, including containers, networking, and scaling rules. We\u2019ll prepare these manifests, including ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",children:"Deployment"})," and ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/",children:"Service"})," configurations, to define how our application should be deployed and exposed."]}),"\n",(0,i.jsxs)(t.p,{children:["Create a folder named ",(0,i.jsx)(t.code,{children:"Deployment"})," in the project root directory. Next, create two files in the deployment folder: ",(0,i.jsx)(t.code,{children:"deployment.yml"})," and ",(0,i.jsx)(t.code,{children:"service.yml"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Add the following configuration to the ",(0,i.jsx)(t.code,{children:"deployment.yml"})," file, replacing the ",(0,i.jsx)(t.code,{children:"<name-of-azure-container-registry>"})," placeholder with your registry\u2019s name:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: intelligent-app\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: intelligent-app\n  template:\n    metadata:\n      labels:\n        app: intelligent-app\n    spec:\n      nodeSelector:\n        kubernetes.io/os: linux\n      containers:\n        - name: intelligent-app\n          image: <name-of-azure-container-registry>.azurecr.io/intelligent-app:v1\n          resources:\n            limits:\n              memory: 512Mi\n              cpu: "1"\n            requests:\n              memory: 256Mi\n              cpu: "0.2"\n          ports:\n            - containerPort: 5000\n          env:\n            - name: FLASK_DEBUG\n              value: "1"\n            - name: VISION_KEY\n              value: <THE-KEY-1-VALUE-FROM-YOUR-AZURE-AI-SERVICE>\n            - name: VISION_ENDPOINT\n              value: <THE-ENDPOINT-VALUE-FROM-YOUR-AZURE-AI>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, edit the ",(0,i.jsx)(t.code,{children:"VISION_KEY"})," and ",(0,i.jsx)(t.code,{children:"VISION_ENDPOINT"})," environment variables above according to the API key and endpoint of your Azure AI Services instance."]}),"\n",(0,i.jsxs)(t.p,{children:["Then, add the following configuration to the ",(0,i.jsx)(t.code,{children:"service.yml"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apiVersion: v1\nkind: Service \nmetadata:\n  name: intelligent-app-service\nspec:\n  type: LoadBalancer\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 5000\n      name: port5000\n  selector:\n    app: intelligent-app\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now, we\u2019ll deploy our application using kubectl. Applying the Kubernetes manifests creates the necessary resources and deploys our containerized application to the AKS cluster."}),"\n",(0,i.jsxs)(t.p,{children:["First, change the terminal to the ",(0,i.jsx)(t.code,{children:"deployment"})," folder:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"cd Deployment \n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then, run the following command to create or update Kubernetes resources defined in the ",(0,i.jsx)(t.code,{children:"deployment.yml"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"kubectl apply -f deployment.yml\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Create a Kubernetes Service resource in a Kubernetes cluster based on the configuration defined in the ",(0,i.jsx)(t.code,{children:"service.yml"})," file using the code below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"kubectl apply -f service.yml\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Once you\u2019ve applied the resource definition and the service configuration contained in the ",(0,i.jsx)(t.code,{children:"deployment.yml"})," and the ",(0,i.jsx)(t.code,{children:"service.yml"})," files, open the ",(0,i.jsx)(t.strong,{children:"aks-intelligent-app"})," Kubernetes Service in the Azure Portal, select ",(0,i.jsx)(t.strong,{children:"Workloads"})," under ",(0,i.jsx)(t.strong,{children:"Kubernetes resources"})," on the sidebar, and find the deployment named ",(0,i.jsx)(t.strong,{children:"intelligent-app"}),". It must have the status \u201cReady 1/1\u201d. If you encounter an issue with this status, check out these ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/node-not-ready-basic-troubleshooting?WT.mc_id=javascript-99907-ninarasi",children:"troubleshooting resources"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image of selecting the deployment in Azure Portal",src:n(5669).Z+"",width:"624",height:"318"})}),"\n",(0,i.jsx)(t.h2,{id:"testing-the-intelligent-app-on-aks",children:"Testing the Intelligent App on AKS"}),"\n",(0,i.jsx)(t.p,{children:"To test the app on AKS, first, run the command below:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"kubectl get services\n"})}),"\n",(0,i.jsx)(t.p,{children:"This command lists the Services and their corresponding details, including the Service name, cluster IP address, external IP, and ports."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"NAME"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"TYPE"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"CLUSTER-IP"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EXTERNAL-IP"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"PORT(S)"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"AGE"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"intelligent-app-service"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LoadBalancer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"10.0.77.60"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"20.121.76.153"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"80:30936/TCP"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"47s"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"kubernetes"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ClusterIP"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"10.0.0.1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"<none>"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"443/TCP"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"14m"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The output above shows a Kubernetes Service named ",(0,i.jsx)(t.code,{children:"intelligent-app-service"})," with a type set to ",(0,i.jsx)(t.code,{children:"LoadBalancer"}),". It\u2019s reachable from within the cluster using the cluster IP ",(0,i.jsx)(t.code,{children:"10.0.77.60"})," and accessible externally via the external IP ",(0,i.jsx)(t.code,{children:"20.121.76.153"})," on port 80 (mapped to port 30936)."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": Your set of IP addresses will differ. Remember to use your unique external IP address when testing with Postman."]}),"\n",(0,i.jsxs)(t.p,{children:["To test the deployed app, go to Postman, replace the URL with the external IP of the Kubernetes Service you just deployed, and click ",(0,i.jsx)(t.strong,{children:"Send"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"mage of sending the app in Postman",src:n(8422).Z+"",width:"624",height:"365"})}),"\n",(0,i.jsx)(t.p,{children:"As we can see, our Intelligent App has successfully deployed to AKS and is functioning on the cloud as expected."}),"\n",(0,i.jsx)(t.h2,{id:"exercise",children:"Exercise"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Complete this ",(0,i.jsx)(t.strong,{children:"hands-on"})," sample ",(0,i.jsx)(t.a,{href:"https://github.com/contentlab-io/Microsoft-Using-Azure-Kubernetes-Service-to-Deploy-an-Intelligent-App-for-Analyzing-Images-1/tree/main/Microsoft_Series17-18_Code/intelligent-app-after",children:"project code"})," to build your first intelligent app."]}),"\n",(0,i.jsxs)(t.li,{children:["Complete the ",(0,i.jsx)(t.a,{href:"https://aka.ms/fallforIA/apps-csc",children:"Apps Cloud Skills Challenge"})," to build on your app dev and AI skills."]}),"\n",(0,i.jsxs)(t.li,{children:["Register for ",(0,i.jsx)(t.a,{href:"https://reactor.microsoft.com/en-us/reactor/series/S-1037/",children:"Ask the Expert: Azure Kubernetes Service"})," session for live Q&A with the Product Engineering team on building intelligent apps."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(t.p,{children:"In this two-part article, we explored the creation of an Intelligent App that leverages Azure AI Vision to analyze images and extract data. We learned how to build a Python Web API to perform OCR on uploaded images and subsequently deploy this API via Azure Kubernetes Service."}),"\n",(0,i.jsx)(t.p,{children:"Besides OCR and Image Analysis, you can continue exploring Azure\u2019s vast array of services and experiment further with Azure AI and AKS by applying various practical uses to your Intelligent Apps, including natural language processing, speech recognition and synthesis, sentiment analysis for customer feedback, and automated content moderation."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},87438:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blog-image-2-1-974d3a64c66cbcd6e014779113bc1a4b.jpeg"},5669:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blog-image-2-2-fb13fe692dc47f7d90de361ec6d5b771.png"},8422:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blog-image-2-3-d8cd3a3026fb47d4589f3ee5baa3de5d.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var i=n(67294);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);