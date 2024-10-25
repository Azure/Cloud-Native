"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32493],{47179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(85893),r=t(11151);const a={date:"2024-10-10T09:01",slug:"deploy-application-with-AKS-part-2",title:"1.5b Deploy Application with AKS Part 2",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this blog, we will deploy our application components (Middleware, Back-end, and Front-end services) to Azure Kubernetes Service (AKS) using Azure CLI and Kubernetes configurations. This approach allows us to leverage container orchestration for better management and scalability.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},s=void 0,o={permalink:"/Cloud-Native/30-days-of-ia-2024/deploy-application-with-AKS-part-2",source:"@site/blog-30-days-of-ia-2024/2024-10-10/deploy-application-with-AKS-part-2.md",title:"1.5b Deploy Application with AKS Part 2",description:"In this blog, we will deploy our application components (Middleware, Back-end, and Front-end services) to Azure Kubernetes Service (AKS) using Azure CLI and Kubernetes configurations. This approach allows us to leverage container orchestration for better management and scalability.",date:"2024-10-10T09:01:00.000Z",formattedDate:"October 10, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/build-intelligent-apps"},{label:"30-days-of-IA-2024",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/30-days-of-ia-2024"},{label:"learn-live",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/learn-live"},{label:"demo-bytes",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/demo-bytes"},{label:"community-gallery",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/community-gallery"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-actions"}],readingTime:7.065,hasTruncateMarker:!1,authors:[{name:"#30Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"30days"}],frontMatter:{date:"2024-10-10T09:01",slug:"deploy-application-with-AKS-part-2",title:"1.5b Deploy Application with AKS Part 2",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this blog, we will deploy our application components (Middleware, Back-end, and Front-end services) to Azure Kubernetes Service (AKS) using Azure CLI and Kubernetes configurations. This approach allows us to leverage container orchestration for better management and scalability.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"1.6b Setting Up CI/CD Pipelines for Azure App Service and AKS Using Azure DevOps Part 2",permalink:"/Cloud-Native/30-days-of-ia-2024/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-2"},nextItem:{title:"1.5a Deploy Application with AKS Part 1",permalink:"/Cloud-Native/30-days-of-ia-2024/deploy-application-with-AKS-part-1"}},l={authorsImageUrls:[void 0]},c=[{value:"Part 2: Deploying the Application to Azure Kubernetes Service (AKS)",id:"part-2-deploying-the-application-to-azure-kubernetes-service-aks",level:2},{value:"What we cover:",id:"what-we-cover",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Understanding Azure Kubernetes Service (AKS)",id:"step-1-understanding-azure-kubernetes-service-aks",level:2},{value:"Step 2: Preparing the Application for AKS Deployment",id:"step-2-preparing-the-application-for-aks-deployment",level:2},{value:"Containerize the Application:",id:"containerize-the-application",level:3},{value:"Build and Push Docker Images:",id:"build-and-push-docker-images",level:3},{value:"Commands:",id:"commands",level:4},{value:"Step 3: Creating the AKS Cluster",id:"step-3-creating-the-aks-cluster",level:2},{value:"Create AKS Cluster Using Azure CLI",id:"create-aks-cluster-using-azure-cli",level:3},{value:"Connect to the AKS Cluster",id:"connect-to-the-aks-cluster",level:3},{value:"Step 4: Configuring the Application Deployment",id:"step-4-configuring-the-application-deployment",level:2},{value:"Create Deployment and Service YAML Files",id:"create-deployment-and-service-yaml-files",level:3},{value:"Step 5: Deploying the Application to AKS",id:"step-5-deploying-the-application-to-aks",level:2},{value:"Apply the Deployment and Service YML Files",id:"apply-the-deployment-and-service-yml-files",level:3},{value:"Deploy the Front-end Service",id:"deploy-the-front-end-service",level:3},{value:"Step 6: Verifying the Deployment",id:"step-6-verifying-the-deployment",level:2},{value:"Check the Status of Deployments",id:"check-the-status-of-deployments",level:3},{value:"Access the Application",id:"access-the-application",level:3},{value:"Cleanup",id:"cleanup",level:2},{value:"Using Azure CLI",id:"using-azure-cli",level:3},{value:"Using the Azure Portal",id:"using-the-azure-portal",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Head:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a,{children:[(0,i.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30-days-of-ia-2024/deploy-application-with-AKS-part-2"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,i.jsx)("meta",{property:"og:description",content:"In this blog, we will deploy our application components (Middleware, Back-end, and Front-end services) to Azure Kubernetes Service (AKS) using Azure CLI and Kubernetes configurations. This approach allows us to leverage container orchestration for better management and scalability."}),(0,i.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-AKS-part-2"}),(0,i.jsx)("meta",{name:"twitter:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,i.jsx)("meta",{name:"twitter:description",content:"In this blog, we will deploy our application components (Middleware, Back-end, and Front-end services) to Azure Kubernetes Service (AKS) using Azure CLI and Kubernetes configurations. This approach allows us to leverage container orchestration for better management and scalability."}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-AKS-part-2"})]}),"\n",(0,i.jsx)(n.h2,{id:"part-2-deploying-the-application-to-azure-kubernetes-service-aks",children:"Part 2: Deploying the Application to Azure Kubernetes Service (AKS)"}),"\n",(0,i.jsxs)(n.p,{children:["In this blog, we will deploy our application components (Middleware, Back-end, and Front-end services) to ",(0,i.jsx)(n.strong,{children:"Azure Kubernetes Service (AKS)"})," using Azure CLI and Kubernetes configurations. This approach allows us to leverage container orchestration for better management and scalability."]}),"\n",(0,i.jsx)(n.h2,{id:"what-we-cover",children:"What we cover:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Understanding Azure Kubernetes Service (AKS)"}),"\n",(0,i.jsx)(n.li,{children:"Preparing the Application for AKS Deployment"}),"\n",(0,i.jsx)(n.li,{children:"Creating the AKS Cluster"}),"\n",(0,i.jsx)(n.li,{children:"Configuring the Application Deployment"}),"\n",(0,i.jsx)(n.li,{children:"Deploying the Application to AKS"}),"\n",(0,i.jsx)(n.li,{children:"Verifying the Deployment"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["Before proceeding, ensure that the Managed Identity and Key Vault configurations are completed as described in ",(0,i.jsx)(n.strong,{children:"Blog 1.5a"}),". Additionally, refer to ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-your-development-environment-2",children:"Blog 1.2b"})})," for details on the initial environment setup, where the AKS cluster and Azure Container Registry (ACR) were created."]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-understanding-azure-kubernetes-service-aks",children:"Step 1: Understanding Azure Kubernetes Service (AKS)"}),"\n",(0,i.jsx)(n.p,{children:"Azure Kubernetes Service (AKS) is a managed container orchestration service that simplifies the deployment, management, and operations of Kubernetes. It enables seamless scaling, monitoring, and management of containerized applications. With AKS, you can deploy, manage, and scale containerized applications with ease."}),"\n",(0,i.jsx)(n.h2,{id:"step-2-preparing-the-application-for-aks-deployment",children:"Step 2: Preparing the Application for AKS Deployment"}),"\n",(0,i.jsx)(n.h3,{id:"containerize-the-application",children:"Containerize the Application:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure that you have a separate ",(0,i.jsx)(n.code,{children:"Dockerfile"})," for each service (Back-end, Middleware, and Front-end) for the containerization process. Example ",(0,i.jsx)(n.code,{children:"Dockerfile"})," for Back-end:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# Use an official JDK base image\r\nFROM mcr.microsoft.com/openjdk/jdk:17-mariner\r\n\r\n# Set the working directory\r\nWORKDIR /app\r\n\r\n# Copy the WAR file into the container\r\nCOPY target/backend.war /app/backend.war\r\n\r\n# Expose the port the app runs on\r\nEXPOSE 8080\r\n\r\n# Run the WAR file\r\nENTRYPOINT ["java", "-jar", "/app/backend.war"]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"screenshot of example Dockerfile for back-end",src:t(30336).Z+"",width:"742",height:"598"})}),"\n",(0,i.jsx)(n.h3,{id:"build-and-push-docker-images",children:"Build and Push Docker Images:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Build the Docker images and push them to Azure Container Registry (ACR)."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"commands",children:"Commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# ACR Login\r\naz acr login --name <ACR_NAME>\r\n\r\n# Set your image build version\r\nVERSION=1.0.1\r\n\r\n# Build docker image\r\ndocker build -t aistudy/backend-service:${VERSION} .\r\n\r\n# Tag the build image into acr repo\r\ndocker tag aistudy/backend-service:${VERSION} <ACR_Name>.azurecr.io/aistudy/backend-service:${VERSION}\r\n\r\n# Push the backend service image to ACR\r\ndocker push <ACR_Name>.azurecr.io/backend-service:latest\r\n\r\n# Build and push the Back-end service\r\ndocker tag backend-service:latest <ACR_Name>.azurecr.io/backend-service:latest\r\ndocker push <ACR_Name>.azurecr.io/backend-service:latest\r\n\r\n# Build and push the Middleware service\r\ndocker tag middleware-service:latest <ACR_Name>.azurecr.io/middleware-service:latest\r\ndocker push <ACR_Name>.azurecr.io/middleware-service:latest\r\n\r\n# Build and push the Front-end service\r\ndocker tag frontend-service:latest <ACR_Name>.azurecr.io/frontend-service:latest\r\ndocker push <ACR_Name>.azurecr.io/frontend-service:latest\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Azure CLI command to push Docker images to Azure Container Registry",src:t(22448).Z+"",width:"1381",height:"788"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"screenshot in Azure Portal of backend-service repository",src:t(38710).Z+"",width:"1380",height:"490"})}),"\n",(0,i.jsx)(n.h2,{id:"step-3-creating-the-aks-cluster",children:"Step 3: Creating the AKS Cluster"}),"\n",(0,i.jsxs)(n.p,{children:["If you have not already created the AKS cluster and ACR (Azure Container Registry), refer to ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-your-development-environment-2",children:"Blog 1.2b"})})," for details on the environment setup."]}),"\n",(0,i.jsx)(n.h3,{id:"create-aks-cluster-using-azure-cli",children:"Create AKS Cluster Using Azure CLI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the following Azure CLI command to create a new AKS cluster with workload identity enabled:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"az aks create \\\r\n  --resource-group <RESOURCE_GROUP_NAME> \\\r\n  --name <CLUSTER_NAME> \\\r\n  --node-count 1 \\\r\n  --enable-addons monitoring \\\r\n  --enable-oidc-issuer \\\r\n  --enable-workload-identity \\\r\n  --generate-ssh-keys \\\r\n  --attach-acr <ACR_NAME>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"--enable-oidc-issuer"})," and ",(0,i.jsx)(n.code,{children:"--enable-workload-identity"})," flags are required to enable workload identity on the cluster, allowing for secure and seamless integration with Azure AD and Key Vault."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Azure CLI command to create a new AKS cluster with workload identity enabled",src:t(24321).Z+"",width:"1525",height:"1600"})}),"\n",(0,i.jsx)(n.h3,{id:"connect-to-the-aks-cluster",children:"Connect to the AKS Cluster"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the following command to connect your local kubectl to the AKS cluster:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u202faz aks get-credentials --resource-group <RESOURCE_GROUP_NAME> --name <AKS_NAME>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This command will download the credentials and configure your ",(0,i.jsx)(n.code,{children:"kubectl"})," context."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Azure CLI command to connect local kubectl to the AKS cluster",src:t(48621).Z+"",width:"1226",height:"96"})}),"\n",(0,i.jsx)(n.h2,{id:"step-4-configuring-the-application-deployment",children:"Step 4: Configuring the Application Deployment"}),"\n",(0,i.jsx)(n.p,{children:"In this step, we will create Kubernetes deployment and service YAML files for each service and configure them to run in the AKS cluster."}),"\n",(0,i.jsx)(n.h3,{id:"create-deployment-and-service-yaml-files",children:"Create Deployment and Service YAML Files"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create separate ",(0,i.jsx)(n.code,{children:"deployment.yml"})," files for each service.\u202f"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Backend-deployment.yml"})," for ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Back-end Service:"})})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apiVersion: apps/v1\r\nkind: Deployment\r\nmetadata:\r\n  name: backend-deployment\r\nspec:\r\n  replicas: 2\r\n  selector:\r\n    matchLabels:\r\n      app: backend\r\n  template:\r\n    metadata:\r\n      labels:\r\n        app: backend\r\n    spec:\r\n      containers:\r\n        - name: backend\r\n          image: <ACR_NAME>.azurecr.io/aistudy/backend:latest\r\n          ports:\r\n            - containerPort: 8080\r\n          env:\r\n            - name: AZURE_KEYVAULT_URI\r\n              value: https://<KEYVAULT_NAME>.vault.azure.net/\r\n\r\n---\r\napiVersion: v1\r\nkind: Service\r\nmetadata:\r\n  name: backend-service\r\nspec:\r\n  selector:\r\n    app: backend\r\n  ports:\r\n    - port: 80\r\n      targetPort: 8080\r\n  type: ClusterIP\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-5-deploying-the-application-to-aks",children:"Step 5: Deploying the Application to AKS"}),"\n",(0,i.jsx)(n.h3,{id:"apply-the-deployment-and-service-yml-files",children:"Apply the Deployment and Service YML Files"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the following commands to deploy the Back-end and Middleware services to AKS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl apply -f backend-deployment.yml\r\nkubectl apply -f middleware-deployment.yml\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Azure CLI command to deploy services to AKS",src:t(29279).Z+"",width:"1600",height:"321"})}),"\n",(0,i.jsx)(n.h3,{id:"deploy-the-front-end-service",children:"Deploy the Front-end Service"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Command to deploy the front-end service",src:t(29090).Z+"",width:"1014",height:"1552"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use similar commands to deploy the front-end service:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl apply -f frontend-deployment.yml\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-6-verifying-the-deployment",children:"Step 6: Verifying the Deployment"}),"\n",(0,i.jsx)(n.h3,{id:"check-the-status-of-deployments",children:"Check the Status of Deployments"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the following commands to check the status of each deployment:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl get deployments\u202f \r\nkubectl get pods\u202f\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Azure CLI command to check the status of deployments",src:t(73361).Z+"",width:"1092",height:"278"})}),"\n",(0,i.jsx)(n.h3,{id:"access-the-application",children:"Access the Application"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the front-end service is exposed as a ",(0,i.jsx)(n.code,{children:"LoadBalancer"})," type, use the following command to get the external IP address:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl get services frontend-service\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the application in a browser using the external IP address."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,i.jsxs)(n.p,{children:["Once you have finished deploying and testing your application, it's essential to clean up the resources to avoid incurring any unnecessary costs. You can delete the Azure Resource Group that contains your resources using either the ",(0,i.jsx)(n.strong,{children:"Azure CLI"})," or the ",(0,i.jsx)(n.strong,{children:"Azure portal"}),". This will remove all the resources within that group, such as the Azure Kubernetes Service (AKS), Azure Container Registry (ACR), Azure API Management, and any other services created in the group."]}),"\n",(0,i.jsx)(n.h3,{id:"using-azure-cli",children:"Using Azure CLI"}),"\n",(0,i.jsx)(n.p,{children:"To delete the resource group using the Azure CLI, follow these steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open your terminal or Azure Cloud Shell."}),"\n",(0,i.jsx)(n.li,{children:"Run the following command to delete the resource group:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"az group delete --name <resource-group-name> --yes --no-wait\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Replace ",(0,i.jsx)(n.code,{children:"<resource-group-name>"})," with the name of your Azure resource group."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"--yes"})," parameter confirms the deletion without a prompt."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"--no-wait"})," parameter initiates the deletion and immediately returns control to the terminal, so you don't have to wait for the deletion process to complete."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"using-the-azure-portal",children:"Using the Azure Portal"}),"\n",(0,i.jsx)(n.p,{children:"If you prefer to delete the resources using the Azure portal, follow these instructions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Navigate to the Azure Portal:"})," Go to ",(0,i.jsx)(n.a,{href:"http://portal.azure.com/",children:"Azure Portal"})," and sign in with your credentials."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:'Select "Resource Groups":'})," In the left-hand menu, select ",(0,i.jsx)(n.strong,{children:"Resource groups"}),". This will list all the resource groups available in your subscription."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Find the Resource Group:"})," Locate the resource group you want to delete (e.g., the resource group that contains your AKS and ACR resources)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Click on the Resource Group:"})," Click on the resource group name to open it."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Delete the Resource Group:"})," At the top of the resource group page, click on ",(0,i.jsx)(n.strong,{children:"Delete resource group"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Confirm Deletion:"})," You will be prompted to type the name of the resource group to confirm deletion. Type the name exactly and click on the ",(0,i.jsx)(n.strong,{children:"Delete"})," button."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"deleting resources in Azure Portal",src:t(42672).Z+"",width:"1600",height:"790"})}),"\n",(0,i.jsxs)(n.p,{children:["Deleting a resource group in the Azure portal will remove ",(0,i.jsx)(n.strong,{children:"all resources"})," associated with it. Be careful when performing this action, as it cannot be undone."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Learn more on Technical leaders\u2019 ",(0,i.jsx)(n.a,{href:"https://aka.ms/AAI_TDMApps_Plan?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"  guide to building intelligent apps"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["In this blog, we successfully deployed our Middleware, Back-end, and Front-end services to Azure Kubernetes Service (AKS) using Kubernetes configurations and the Azure CLI. By using the ",(0,i.jsx)(n.code,{children:"--enable-oidc-issuer"})," and ",(0,i.jsx)(n.code,{children:"--enable-workload-identity"})," flags, we enabled secure workload identity on the cluster, allowing for integration with Azure AD and seamless access to Key Vault secrets."]}),"\n",(0,i.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/aks/?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Kubernetes Service Documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/aks/what-is-aks?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Getting Started with Azure Kubernetes Service"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/aks/tutorial-kubernetes-deploy-application?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Deploying Applications to Azure Kubernetes Service"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/active-directory/managed-identities-azure-resources/",children:"Managed Identities for Azure Resources"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/aks/workload-identity-deploy-cluster",children:"Workload Identity for AKS"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},30336:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-5b-1-46c97d11401edad5b7f82ec88170b707.png"},22448:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-5b-2-bf40d47e29a4e9668f2664cc08c6e3d8.png"},38710:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-5b-3-368b00ff648f6149392e3b47624d1871.png"},24321:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-5b-4-5953bd4c791d7d4ffdf27411a24dc256.png"},48621:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-5b-5-d4dba79d5dbafeb5325eb8916c0c0f2d.png"},29279:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-5b-6-29a0044c884988cfd48edd3a46984d64.png"},29090:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-5b-7-00480ee546fd8f2d8179013299e05625.png"},73361:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-5b-8-1146f082a48af461533cb8a4cde51197.png"},42672:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-5b-9-76b86135648e4b31159e6aa52318064e.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(67294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);