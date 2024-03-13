"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5133],{68250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(85893),i=n(11151);const r={date:"2024-03-05T09:00",slug:"forecasting-energy-usage-with-intelligent-apps-1",title:"2.1 Forecasting Energy Usage with Intelligent Apps Part 1: Laying the Groundwork with AKS, KAITO, and LLaMA",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud-Scale","Data","AI","AI/ML","intelligent apps","cloud-native","60-days","enterprise apps","digital experiences","app modernization"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this series, you\u2019ll create an Intelligent App powered by Azure Kubernetes Service (AKS) to forecast energy usage and cost.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},s=void 0,o={permalink:"/Cloud-Native/60DaysOfIA/forecasting-energy-usage-with-intelligent-apps-1",source:"@site/blog-60daysofIA/2024-03-05/forecasting-energy-usage-with-intelligent-apps-1.md",title:"2.1 Forecasting Energy Usage with Intelligent Apps Part 1: Laying the Groundwork with AKS, KAITO, and LLaMA",description:"In this series, you\u2019ll create an Intelligent App powered by Azure Kubernetes Service (AKS) to forecast energy usage and cost.",date:"2024-03-05T09:00:00.000Z",formattedDate:"March 5, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/60DaysOfIA/tags/build-intelligent-apps"},{label:"60-days-of-IA",permalink:"/Cloud-Native/60DaysOfIA/tags/60-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/60DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/60DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/60DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/60DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/60DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/60DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/60DaysOfIA/tags/github-actions"}],readingTime:6.14,hasTruncateMarker:!1,authors:[{name:"#60Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"cnteam"}],frontMatter:{date:"2024-03-05T09:00",slug:"forecasting-energy-usage-with-intelligent-apps-1",title:"2.1 Forecasting Energy Usage with Intelligent Apps Part 1: Laying the Groundwork with AKS, KAITO, and LLaMA",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud-Scale","Data","AI","AI/ML","intelligent apps","cloud-native","60-days","enterprise apps","digital experiences","app modernization"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this series, you\u2019ll create an Intelligent App powered by Azure Kubernetes Service (AKS) to forecast energy usage and cost.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"3. Cosmos DB and Intelligent Apps: A Match Made for Innovation",permalink:"/Cloud-Native/60DaysOfIA/cosmos-db-and-intelligent-apps-a-match-made-for-innovation"},nextItem:{title:"2. Power Up: Crafting an Intelligent Energy Forecasting Application Using Azure Kubernetes Service",permalink:"/Cloud-Native/60DaysOfIA/power-up-crafting-an-intelligent-energy-forecasting-application-using-azure-kubernetes-service"}},l={authorsImageUrls:[void 0]},c=[{value:"Forecasting Energy Usage with Intelligent Apps Part 1: Laying the Groundwork with AKS, KAITO, and LLaMA",id:"forecasting-energy-usage-with-intelligent-apps-part-1-laying-the-groundwork-with-aks-kaito-and-llama",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Building an Intelligent App with Azure Kubernetes Service and KAITO",id:"building-an-intelligent-app-with-azure-kubernetes-service-and-kaito",level:3},{value:"Downloading the LLaMA 2 Model",id:"downloading-the-llama-2-model",level:4},{value:"Configuring the AKS Cluster and KAITO",id:"configuring-the-aks-cluster-and-kaito",level:4},{value:"Pushing LLaMA 2 Chat Model to Azure Container Registry",id:"pushing-llama-2-chat-model-to-azure-container-registry",level:4},{value:"Starting the Inference Service",id:"starting-the-inference-service",level:4},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r,{children:[(0,a.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/60daysofia/forecasting-energy-usage-with-intelligent-apps-1"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,a.jsx)("meta",{property:"og:description",content:"In this series, you'll create an Intelligent App powered by Azure Kubernetes Service (AKS) to forecast energy usage and cost."}),(0,a.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,a.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/60daysofIA/forecasting-energy-usage-with-intelligent-apps-1"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,a.jsx)("meta",{name:"twitter:description",content:"In this series, you'll create an Intelligent App powered by Azure Kubernetes Service (AKS) to forecast energy usage and cost."}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,a.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/60daysofIA/forecasting-energy-usage-with-intelligent-apps-1"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Forecasting Energy Usage with Intelligent Apps: Laying the Groundwork with AKS, KAITO, and LLaMA",src:n(27422).Z+"",width:"700",height:"426"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"This three-part series demonstrates how to create an Intelligent App that forecasts future energy consumption and pricing based on historical data. In this first article, you\u2019ll set up an Azure Kubernetes Service (AKS) environment, install KAITO, and set up KAITO to work with the LLaMA 2 model."})}),"\n",(0,a.jsx)(t.h2,{id:"forecasting-energy-usage-with-intelligent-apps-part-1-laying-the-groundwork-with-aks-kaito-and-llama",children:"Forecasting Energy Usage with Intelligent Apps Part 1: Laying the Groundwork with AKS, KAITO, and LLaMA"}),"\n",(0,a.jsx)(t.p,{children:"Intelligent Apps leverage artificial intelligence (AI) and machine learning (ML) technologies to enhance traditional applications with advanced capabilities. They enable businesses to make smarter decisions, automate tasks, and drive innovation by extracting actionable insights from vast amounts of data."}),"\n",(0,a.jsxs)(t.p,{children:["In this series, you\u2019ll create an Intelligent App powered by ",(0,a.jsx)(t.a,{href:"https://azure.microsoft.com/en-ca/products/kubernetes-service",children:"Azure Kubernetes Service"})," (AKS) to forecast energy usage and cost. Each article will demonstrate the use of core Azure technologies, particularly AKS, to build an application that generates forecasts based on AI capabilities applied to user input and historical data analysis."]}),"\n",(0,a.jsx)(t.p,{children:"Let\u2019s get started!"}),"\n",(0,a.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.p,{children:"To follow this tutorial, ensure you have the following:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["An ",(0,a.jsx)(t.a,{href:"https://azure.microsoft.com/en-us/free/search",children:"Azure Subscription"})," that supports the GPU-enabled ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/ncv3-series",children:"Standard_NC12s_v3 instance type"})," in the selected region. You might need to request an increase in vCPU quota."]}),"\n",(0,a.jsxs)(t.li,{children:["Basic understanding of ",(0,a.jsx)(t.a,{href:"https://azure.microsoft.com/en-us/products/kubernetes-service",children:"AKS"})," and Kubernetes"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"building-an-intelligent-app-with-azure-kubernetes-service-and-kaito",children:"Building an Intelligent App with Azure Kubernetes Service and KAITO"}),"\n",(0,a.jsx)(t.p,{children:"This first article walks you through setting up an AKS environment and the Kubernetes AI Toolchain Operator (KAITO) to automate AI/ML model deployment in the AKS cluster."}),"\n",(0,a.jsx)(t.h4,{id:"downloading-the-llama-2-model",children:"Downloading the LLaMA 2 Model"}),"\n",(0,a.jsx)(t.p,{children:"A fundamental piece in your Intelligent App\u2019s architecture is the target model. Here, you\u2019ll use LLaMA 2, an open-source project developed by Meta in partnership with Microsoft."}),"\n",(0,a.jsx)(t.p,{children:"LLaMA 2 is a large-scale training and inference framework for ML models. It provides a distributed computing infrastructure that enables executing ML tasks across multiple nodes or clusters, using parallelism and optimization techniques to improve performance."}),"\n",(0,a.jsxs)(t.p,{children:["To configure your model, download LLaMA 2 by following the instructions in ",(0,a.jsx)(t.a,{href:"https://github.com/Azure/kaito/tree/main/presets/models/llama2",children:"this document"}),".  Ensure you download the LLaMA 2 7B Chat (llama2-7b-chat) model."]}),"\n",(0,a.jsx)(t.h4,{id:"configuring-the-aks-cluster-and-kaito",children:"Configuring the AKS Cluster and KAITO"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"engergy-usage-aks model",src:n(11844).Z+"",width:"1484",height:"694"})}),"\n",(0,a.jsx)(t.p,{children:"Creating an AKS environment is the first step for onboarding large AI inference models onto Kubernetes. Later, you\u2019ll integrate the node provisioner controller with AKS APIs, letting you dynamically add GPU nodes to the cluster to promote scalability and optimal resource use."}),"\n",(0,a.jsx)(t.p,{children:"Additionally, AKS facilitates testing service endpoints within the cluster, providing a reliable environment for validating and fine-tuning AI inference services."}),"\n",(0,a.jsx)(t.p,{children:"KAITO is an open-source operator that transforms how you deploy AI models on Kubernetes. It streamlines the process, automating critical tasks like infrastructure provisioning and resource optimization. It intelligently selects the optimal hardware configuration for your specific model, using available CPU and GPU resources on AKS. KAITO eliminates the manual setup complexities, accelerating your deployment time and reducing associated costs."}),"\n",(0,a.jsxs)(t.p,{children:["To set up an AKS cluster and install KAITO, follow ",(0,a.jsx)(t.a,{href:"https://github.com/Azure/kaito/blob/main/docs/installation.md",children:"this tutorial"}),", adjusting the KAITO installation steps to match the ",(0,a.jsx)(t.strong,{children:"llama2-7b"})," model you downloaded earlier."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Checkout the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://aka.ms/learn-live-building-intelligent-apps-aks-ep2?ocid=buildia24_60days_blogs",children:"Intelligent Apps on AKS: Episode 2"})}),", a hands-on training with an expert on how to use AKS to run your own AI Models with KAITO."]})}),"\n",(0,a.jsx)(t.h4,{id:"pushing-llama-2-chat-model-to-azure-container-registry",children:"Pushing LLaMA 2 Chat Model to Azure Container Registry"}),"\n",(0,a.jsx)(t.p,{children:"Now that you have AKS with the KAITO installation, you need to push the local model image to the AKS cluster."}),"\n",(0,a.jsxs)(t.p,{children:["Create an Azure Container Registry (ACR) resource using Azure CLI with the following command, replacing ",(0,a.jsx)(t.code,{children:"<YOUR-ACR-NAME>"})," with a new ACR name:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"az acr create --name <YOUR-ACR-NAME> --resource-group $RESOURCE_GROUP --sku Standard --location $LOCATION\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Now, push your local LLaMA 2 model\u2019s Docker image to the ACR hosted at ",(0,a.jsx)(t.code,{children:"<YOUR-ACR-NAME>.azurecr.io"})," by running:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"docker push <YOUR-ACR-NAME>.azurecr.io/llama2_7b_chat_model:latest\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Finally, run the command to update the AKS cluster to attach it to your ACR, allowing the cluster to pull the model container image from ",(0,a.jsx)(t.code,{children:"<YOUR-ACR-NAME>.azurecr.io"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"az aks update -g $RESOURCE_GROUP -n $MY_CLUSTER --attach-acr <YOUR-ACR-NAME>\n"})}),"\n",(0,a.jsx)(t.h4,{id:"starting-the-inference-service",children:"Starting the Inference Service"}),"\n",(0,a.jsxs)(t.p,{children:["After installing KAITO, run the following command to start a ",(0,a.jsx)(t.code,{children:"llama-2-7b"})," inference service, replacing ",(0,a.jsx)(t.code,{children:"<YOUR-ACR-NAME>"})," with the ACR name you created previously:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'$ cat examples/kaito_workspace_llama2_7b.yaml\r\napiVersion: kaito.sh/v1alpha1\r\nkind: Workspace\r\nmetadata:\r\n  name: workspace-llama-2-7b\r\nresource:\r\n  instanceType: "Standard_NC12s_v3"\r\n  labelSelector:\r\n    matchLabels:\r\n      apps: llama-2-7b-chat\r\ninference:\r\n  preset:\r\n    name: "llama-2-7b-chat"\r\n    accessMode: private\r\n    presetOptions:\r\n      image: <YOUR-ACR-NAME>.azurecr.io/llama2_chat_model:latest\r\n      imagePullSecrets:\r\n        - energy-usage-secret\r\n\r\n$ kubectl apply -f examples/kaito_workspace_llama2_7b-chat.yaml\n'})}),"\n",(0,a.jsx)(t.p,{children:"Kubernetes uses this YAML code to instantiate a workspace resource with the specified configurations. This enables deploying and managing inference workloads within the cluster."}),"\n",(0,a.jsxs)(t.p,{children:["You can monitor the workspace status by executing the command below. The model deployment has been completed once the ",(0,a.jsx)(t.code,{children:"WORKSPACEREADY"})," column becomes ",(0,a.jsx)(t.code,{children:"True"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"$ kubectl get workspace workspace-llama-2-7b-chat\r\n| NAME | INSTANCE | RESOURCEREADY | INFERENCEREADY | WORKSPACEREADY | AGE |\r\n| workspace-llama-2-7b-chat | Standard_NC12s_v3 | True | True | True | 4d2h |\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"}),": Achieving machine and workspace readiness may take up to 20 minutes."]}),"\n",(0,a.jsx)(t.p,{children:"Now, run the command below to find the inference service\u2019s cluster IP:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"$ kubectl get svc workspace-llama-2-7b-chat\r\n| NAME | TYPE | CLUSTER-IP | EXTERNAL-IP | PORT(S) | AGE |\r\n| workspace-llama-2-7b-chat | ClusterIP | <CLUSTERIP> | <none> | 80/TCP,29500/TCP | 4d2h |\n"})}),"\n",(0,a.jsx)(t.p,{children:"Finally, run a curl pod to test the service endpoint in the cluster:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'export CLUSTERIP=$(kubectl get svc workspace-llama-2-7b-chat -o jsonpath="{.spec.clusterIPs[0]}")\r\n\r\n$ kubectl run -it --rm --restart=Never curl --image=curlimages/curl -- curl -X POST http://$CLUSTERIP/generate -H "accept: application/json" -H "Content-Type: application/json" -d "{\\"input_data\\": {\\"input_string\\":[[ {\\"role\\": \\"user\\", \\"content\\": \\"What is the capital of India?\\"}]]}, \\"parameters\\": {\\"max_gen_len\\": 64, \\"temperature\\": 0}}"\n'})}),"\n",(0,a.jsx)(t.p,{children:"You should receive these results:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'{"results":[[{"role":"User","content":"What is the capital of India?"},{"role":"Assistant","content":" The capital of India is New Delhi."}]]}\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"}),": You can test with your own questions, but there may be inaccuracies within the response. This is because AKS hasn\u2019t fine-tuned the model for your scenario."]}),"\n",(0,a.jsx)(t.p,{children:"That\u2019s it! You\u2019ve successfully established your AKS environment and familiarized yourself with setting up KAITO to deploy the LLaMA 2 model within your Kubernetes environment. You\u2019re now ready to analyze a model and make predictions using Azure\u2019s AI services."}),"\n",(0,a.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsx)(t.p,{children:"In this article, you established an AKS cluster and configured KAITO to integrate with the LLaMA 2 model for advanced ML capabilities. In part 2, you\u2019ll use AKS and KAITO to analyze historical energy consumption data with advanced ML models. You\u2019ll create a dynamic web interface for users to input data, generate predictions, and visualize results seamlessly."}),"\n",(0,a.jsxs)(t.p,{children:["Be sure to join the ",(0,a.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/Build-IA/CloudSkills",children:"Cloud Skill Challenge"})," to level up your cloud computing skills and gain hands-on experience. You can also register for the ",(0,a.jsx)(t.a,{href:"https://aka.ms/learn-live-building-intelligent-apps-aks-ep3?ocid=buildia24_60days_blogs",children:"next episode"})," on ",(0,a.jsx)(t.strong,{children:"Intelligent Apps with Azure Kubernetes Service"}),", an instructor led live learning experience to deploy your app on AKS. And, join the AKS product and engineering team at ",(0,a.jsx)(t.em,{children:"KubeCon EU 2024"}),"\u2014the premier conference for cloud-native technologies, for ",(0,a.jsxs)(t.strong,{children:["AKS ",(0,a.jsx)(t.a,{href:"https://aka.ms/aks-day",children:"Customer"})," and ",(0,a.jsx)(t.a,{href:"https://aka.ms/aks-lab-day",children:"Lab"})," Days"]}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},27422:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-1-1-f0fc40a7278794b517cea5c2e8b4a789.jpg"},11844:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-1-2-330abba56cfa621014fbd395b9b6297c.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var a=n(67294);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);