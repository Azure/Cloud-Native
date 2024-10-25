"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99373],{2658:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=i(85893),t=i(11151);const s={date:"2024-10-11T09:01",slug:"setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-2",title:"1.6b Setting Up CI/CD Pipelines for Azure App Service and AKS Using Azure DevOps Part 2",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this application development, Continuous Integration and Continuous Deployment (CI/CD) play a vital role in streamlining workflows and ensuring rapid delivery of software.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},a=void 0,o={permalink:"/Cloud-Native/30-days-of-ia-2024/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-2",source:"@site/blog-30-days-of-ia-2024/2024-10-11/setting-up-ci-cd-pipelines-for-azure-app-service-and-aks-using-azure-devops-2.md",title:"1.6b Setting Up CI/CD Pipelines for Azure App Service and AKS Using Azure DevOps Part 2",description:"In this application development, Continuous Integration and Continuous Deployment (CI/CD) play a vital role in streamlining workflows and ensuring rapid delivery of software.",date:"2024-10-11T09:01:00.000Z",formattedDate:"October 11, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/build-intelligent-apps"},{label:"30-days-of-IA-2024",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/30-days-of-ia-2024"},{label:"learn-live",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/learn-live"},{label:"demo-bytes",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/demo-bytes"},{label:"community-gallery",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/community-gallery"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-actions"}],readingTime:7.885,hasTruncateMarker:!1,authors:[{name:"#30Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"30days"}],frontMatter:{date:"2024-10-11T09:01",slug:"setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-2",title:"1.6b Setting Up CI/CD Pipelines for Azure App Service and AKS Using Azure DevOps Part 2",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this application development, Continuous Integration and Continuous Deployment (CI/CD) play a vital role in streamlining workflows and ensuring rapid delivery of software.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"1.7 Post-production monitoring, scaling, and optimization",permalink:"/Cloud-Native/30-days-of-ia-2024/post-production-monitoring-scaling-and-optimization"},nextItem:{title:"1.6a Setting Up CI/CD Pipelines for Azure App Service and AKS Using Azure DevOps Part 1",permalink:"/Cloud-Native/30-days-of-ia-2024/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-1"}},l={authorsImageUrls:[void 0]},p=[{value:"Part 2: Setting Up CI/CD Pipelines for Azure Kubernetes Service (AKS) Using Azure DevOps",id:"part-2-setting-up-cicd-pipelines-for-azure-kubernetes-service-aks-using-azure-devops",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview of the Pipeline",id:"overview-of-the-pipeline",level:2},{value:"Integrating GitHub Repository into Azure DevOps",id:"integrating-github-repository-into-azure-devops",level:3},{value:"Creating Variable Groups",id:"creating-variable-groups",level:3},{value:"Variable Groups",id:"variable-groups",level:3},{value:"Adding Variables",id:"adding-variables",level:4},{value:"Configuring Service Connection for Azure Container Registry (ACR)",id:"configuring-service-connection-for-azure-container-registry-acr",level:2},{value:"Step 1: Access Your Azure Container Registry",id:"step-1-access-your-azure-container-registry",level:3},{value:"Step 2: Copy the Required Values",id:"step-2-copy-the-required-values",level:3},{value:"Step 3: Create the Service Connection",id:"step-3-create-the-service-connection",level:3},{value:"Step 4: Store the Values in Variable Group",id:"step-4-store-the-values-in-variable-group",level:3},{value:"Pipeline YAML Configuration",id:"pipeline-yaml-configuration",level:4},{value:"Explanation of the YAML Configuration",id:"explanation-of-the-yaml-configuration",level:3},{value:"Testing the CI/CD Pipeline",id:"testing-the-cicd-pipeline",level:4},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s,{children:[(0,r.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-2"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,r.jsx)("meta",{property:"og:description",content:"In this application development, Continuous Integration and Continuous Deployment (CI/CD) play a vital role in streamlining workflows and ensuring rapid delivery of software.  "}),(0,r.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,r.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-2"}),(0,r.jsx)("meta",{name:"twitter:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,r.jsx)("meta",{name:"twitter:description",content:"In this application development, Continuous Integration and Continuous Deployment (CI/CD) play a vital role in streamlining workflows and ensuring rapid delivery of software."}),(0,r.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,r.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-2"})]}),"\n",(0,r.jsx)(n.h2,{id:"part-2-setting-up-cicd-pipelines-for-azure-kubernetes-service-aks-using-azure-devops",children:"Part 2: Setting Up CI/CD Pipelines for Azure Kubernetes Service (AKS) Using Azure DevOps"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.a,{href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-1",children:"previous blog"}),", we discussed the fundamentals of setting up CI/CD pipelines for ",(0,r.jsx)(n.strong,{children:"Azure App Service"}),". In this blog, we will focus on how to configure a CI/CD pipeline specifically for ",(0,r.jsx)(n.strong,{children:"Azure Kubernetes Service (AKS)"})," using Azure DevOps. We\u2019ll cover prerequisites, detailed YAML configurations, and how to manage deployments based on a variable group setting."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before diving into the pipeline configuration, ensure you have the following prerequisites:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"An Azure DevOps account."}),"\n",(0,r.jsx)(n.li,{children:"Access to your Azure subscription with permission to create resources."}),"\n",(0,r.jsxs)(n.li,{children:["A GitHub repository with your application code, specifically structured with three folders: ",(0,r.jsx)(n.code,{children:"backend"}),", ",(0,r.jsx)(n.code,{children:"middleware"}),", and ",(0,r.jsx)(n.code,{children:"frontend"}),". We will use the same repository as in the previous blog: ",(0,r.jsx)(n.a,{href:"https://github.com/Azure-Samples/Java-AI-Based-Content-Generator",children:"Java-AI-Based-Content-Generator"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Azure Container Registry (ACR) configured and accessible."}),"\n",(0,r.jsx)(n.li,{children:"A Kubernetes cluster (AKS) set up in your Azure environment."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"overview-of-the-pipeline",children:"Overview of the Pipeline"}),"\n",(0,r.jsx)(n.p,{children:"The CI/CD pipeline for deploying to AKS will include:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Build Stage:"})," Similar to the previous setup, each application is built in parallel to produce artifacts."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Push to ACR:"})," Docker images are created from the build artifacts and pushed to Azure Container Registry."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Deploy Stage:"})," The Docker images are pulled from ACR and deployed to the AKS cluster"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"integrating-github-repository-into-azure-devops",children:"Integrating GitHub Repository into Azure DevOps"}),"\n",(0,r.jsx)(n.p,{children:"Follow similar steps as outlined in blog 1.6a."}),"\n",(0,r.jsx)(n.h3,{id:"creating-variable-groups",children:"Creating Variable Groups"}),"\n",(0,r.jsx)(n.p,{children:"Variable groups in Azure DevOps help centralize configuration management by allowing you to store and reuse variables across multiple pipelines. Here's how to create and configure a variable group:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Navigate to Pipelines:"})," Open the ",(0,r.jsx)(n.strong,{children:"Pipelines"})," section in your Azure DevOps project."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Library:"})," Click on ",(0,r.jsx)(n.strong,{children:"Library"})," under Pipelines."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"screenshot of Library in Azure DevOps project",src:i(63566).Z+"",width:"752",height:"252"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Add Variable Group:"})," Select + ",(0,r.jsx)(n.strong,{children:"Variable group"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"screenshot of Variable Group fields Azure DevOps project",src:i(70221).Z+"",width:"752",height:"369"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Define Variables:"})," Add the necessary variables (e.g., ",(0,r.jsx)(n.code,{children:"AcrName"}),", ",(0,r.jsx)(n.code,{children:"BackendAppServiceName"}),", ",(0,r.jsx)(n.code,{children:"MiddlewareAppServiceName"}),", and ",(0,r.jsx)(n.code,{children:"FrontendAppServiceName"}),"). Optionally, mark sensitive values as secrets."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"screenshot of secrets settings in Azure DevOps project",src:i(64539).Z+"",width:"752",height:"342"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Link to Azure Key Vault:"})," If needed, link your variable group to an Azure Key Vault to manage secrets."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"screenshot of Azure Key Vault variables in Azure DevOps project",src:i(52095).Z+"",width:"752",height:"684"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Save the Variable Group:"})," Click ",(0,r.jsx)(n.strong,{children:"Save"})," to confirm your variable group configuration."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Add Pipeline Permission:"})," Ensure that the pipeline has permission to access the variable group."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"screenshot of pipeline permissions in Azure DevOps project",src:i(71738).Z+"",width:"752",height:"342"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"variable-groups",children:"Variable Groups"}),"\n",(0,r.jsxs)(n.p,{children:["We will utilize variable groups to manage our configurations efficiently. In particular, we will set the ",(0,r.jsx)(n.code,{children:"DeploymentTarget"})," variable in the variable group ",(0,r.jsx)(n.code,{children:"ai-study-vg"})," to determine whether we are deploying to AKS or App Service."]}),"\n",(0,r.jsx)(n.h4,{id:"adding-variables",children:"Adding Variables"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"DeploymentTarget"}),": This variable will dictate the target deployment, allowing us to switch between AKS and App Service as needed."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"screenshot of deployment target variable setting in Azure DevOps project",src:i(91735).Z+"",width:"752",height:"369"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-service-connection-for-azure-container-registry-acr",children:"Configuring Service Connection for Azure Container Registry (ACR)"}),"\n",(0,r.jsx)(n.p,{children:"Before deploying your applications to Azure Kubernetes Service (AKS), it's essential to set up a service connection for Azure Container Registry (ACR). This allows Azure DevOps to authenticate and pull images from your ACR. Follow these steps to configure the service connection:"}),"\n",(0,r.jsx)(n.h3,{id:"step-1-access-your-azure-container-registry",children:"Step 1: Access Your Azure Container Registry"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Navigate to Azure Portal"})," and find your Azure Container Registry resource."]}),"\n",(0,r.jsxs)(n.li,{children:["In the left-hand menu, select ",(0,r.jsx)(n.strong,{children:"Access keys"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"step-2-copy-the-required-values",children:"Step 2: Copy the Required Values"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Access keys"})," section, you will find two important values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Login Server:"})," This will typically be in the format youracrname.azurecr.io."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Admin User Password:"})," This is used for authentication."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"screenshot of access keys section in Azure DevOps project",src:i(34648).Z+"",width:"752",height:"371"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"step-3-create-the-service-connection",children:"Step 3: Create the Service Connection"}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In your Azure DevOps project, navigate to ",(0,r.jsx)(n.strong,{children:"Project Settings"})," > ",(0,r.jsx)(n.strong,{children:"Service connections"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click on ",(0,r.jsx)(n.strong,{children:"New service connection"})," and select ",(0,r.jsx)(n.strong,{children:"Docker Registry"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Choose ",(0,r.jsx)(n.strong,{children:"Others"})," as the Docker Registry type."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enter the following details:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Registry:"})," ",(0,r.jsx)(n.code,{children:"$(DockerRegistry)"})," (the variable you created in ",(0,r.jsx)(n.code,{children:"ai-study-vg"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Username:"})," Your ACR username (usually the name of your ACR)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Password:"})," Use the ",(0,r.jsx)(n.strong,{children:"Admin User Password"})," you copied earlier."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Name your service connection (e.g., ",(0,r.jsx)(n.code,{children:"AI Study Container"}),") and save it."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"screenshot of service connection settings in Azure DevOps project",src:i(49091).Z+"",width:"752",height:"388"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"step-4-store-the-values-in-variable-group",children:"Step 4: Store the Values in Variable Group"}),"\n",(0,r.jsxs)(n.ol,{start:"11",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Go to your Azure DevOps project."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Pipelines"})," > ",(0,r.jsx)(n.strong,{children:"Library"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Find the variable group ",(0,r.jsx)(n.code,{children:"ai-study-vg"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add a new variable named ",(0,r.jsx)(n.strong,{children:"DockerRegistry"})," and service connection name (e.g., ",(0,r.jsx)(n.code,{children:"AI Study Container"}),")."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"screenshot of new variable Docker Registry in Azure DevOps project",src:i(22525).Z+"",width:"752",height:"369"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Now your Azure DevOps pipeline can authenticate to ACR and pull the necessary images for your AKS deployments."}),"\n",(0,r.jsx)(n.h4,{id:"pipeline-yaml-configuration",children:"Pipeline YAML Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Here's the YAML configuration for setting up the Azure DevOps pipeline for AKS deployment:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"azure-pipeline.yml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"trigger:\r\n  branches:\r\n    include:\r\n      - main\r\n\r\npool:\r\n  vmImage: 'ubuntu-latest'\r\n\r\nvariables:\r\n  - group: ai-study-vg\r\n  - group: ai-study-secrets\r\n\r\nstages:\r\n  - stage: Build\r\n    displayName: 'Build Stage'\r\n    jobs:\r\n      - job: Build_Backend\r\n        displayName: 'Build Backend Service'\r\n        pool:\r\n          vmImage: 'ubuntu-latest'\r\n        steps:\r\n          - checkout: self\r\n          - task: Maven@4\r\n            inputs:\r\n              mavenPomFile: 'backend/pom.xml'\r\n              mavenOptions: '-Xmx3072m'\r\n              javaHomeOption: 'JDKVersion'\r\n              jdkVersionOption: '1.17'  # JDK Version set to 17\r\n              jdkArchitectureOption: 'x64'\r\n              publishJUnitResults: true\r\n              testResultsFiles: '**/TEST-*.xml'\r\n              goals: 'clean package'\r\n          - publish: 'backend/target/backend.war'\r\n            artifact: backend\r\n\r\n          # Docker build and push using the published WAR file\r\n          - task: Docker@2\r\n            condition: eq(variables['DeploymentTarget'], 'AKS')\r\n            inputs:\r\n              containerRegistry: '$(DockerRegistry)'\r\n              repository: '$(AcrName).azurecr.io/aistudy/backend'\r\n              command: 'buildAndPush'\r\n              Dockerfile: 'backend/Dockerfile'\r\n              buildContext: 'backend'\r\n              tags: 'latest'\r\n\r\n      - job: Build_Middleware\r\n        displayName: 'Build Middleware Service'\r\n        pool:\r\n          vmImage: 'ubuntu-latest'\r\n        steps:\r\n          - checkout: self\r\n          - task: Maven@4\r\n            inputs:\r\n              mavenPomFile: 'middleware/pom.xml'\r\n              mavenOptions: '-Xmx3072m'\r\n              javaHomeOption: 'JDKVersion'\r\n              jdkVersionOption: '1.17'  # JDK Version set to 17\r\n              jdkArchitectureOption: 'x64'\r\n              publishJUnitResults: true\r\n              testResultsFiles: '**/TEST-*.xml'\r\n              goals: 'clean package'\r\n          - publish: 'middleware/target/middleware.war'\r\n            artifact: middleware\r\n\r\n          # Docker build and push using the published WAR file\r\n          - task: Docker@2\r\n            condition: eq(variables['DeploymentTarget'], 'AKS')\r\n            inputs:\r\n              containerRegistry: '$(DockerRegistry)'\r\n              repository: '$(AcrName).azurecr.io/aistudy/middleware'\r\n              command: 'buildAndPush'\r\n              Dockerfile: 'middleware/Dockerfile'\r\n              buildContext: 'middleware'\r\n              tags: 'latest'\r\n\r\n      - job: Build_Frontend\r\n        displayName: 'Build Frontend Service'\r\n        condition: eq(variables['DeploymentTarget'], 'AppService')\r\n        pool:\r\n          vmImage: 'ubuntu-latest'\r\n        steps:\r\n          - checkout: self\r\n\r\n          # Install dependencies and build the React app\r\n          - task: Npm@1\r\n            inputs:\r\n              command: 'install'\r\n              workingDir: 'frontend'\r\n\r\n          - task: Npm@1\r\n            inputs:\r\n              command: 'custom'\r\n              workingDir: 'frontend'\r\n              customCommand: 'run build'\r\n\r\n          - publish: 'frontend/build'\r\n            artifact: frontend\r\n\r\n      - job: Build_Frontend_AKS\r\n        displayName: 'Build Frontend Service'\r\n        condition: eq(variables['DeploymentTarget'], 'AKS')\r\n        pool:\r\n          vmImage: 'ubuntu-latest'\r\n        steps:\r\n          - checkout: self\r\n          - task: Docker@2\r\n            inputs:\r\n              containerRegistry: '$(DockerRegistry)'\r\n              repository: '$(AcrName).azurecr.io/aistudy/frontend'\r\n              command: 'buildAndPush'\r\n              Dockerfile: 'frontend/Dockerfile'\r\n              buildContext: 'frontend'\r\n              tags: 'latest'\r\n\r\n  - stage: Deploy_AppServices\r\n    displayName: 'Deploy to Azure App Services'\r\n    condition: eq(variables['DeploymentTarget'], 'AppService')\r\n    dependsOn: Build\r\n    jobs:\r\n      - job: Deploy_Backend_AppService\r\n        displayName: 'Deploy Backend to Azure App Service'\r\n        pool:\r\n          vmImage: 'ubuntu-latest'\r\n        steps:\r\n          - download: current\r\n            artifact: backend\r\n          - task: AzureWebApp@1\r\n            inputs:\r\n              azureSubscription: '$(AzureSubscription)' # This will be set from Variable Group\r\n              appName: '$(BackendAppServiceName)' # This will be set from Key Vault - Variable Group\r\n              package: '$(Pipeline.Workspace)/backend/backend.war'\r\n              appType: 'webAppLinux'\r\n              appSettings: |\r\n                -AZURE_KEYVAULT_URI \"$(AZURE_KEYVAULT_URI)\"\r\n\r\n      - job: Deploy_Middleware_AppService\r\n        displayName: 'Deploy Middleware to Azure App Service'\r\n        pool:\r\n          vmImage: 'ubuntu-latest'\r\n        steps:\r\n          - download: current\r\n            artifact: middleware\r\n          - task: AzureWebApp@1\r\n            inputs:\r\n              azureSubscription: '$(AzureSubscription)' # This will be set from Variable Group\r\n              appName: '$(MiddlewareAppServiceName)' # This will be set from Key Vault - Variable Group\r\n              package: '$(Pipeline.Workspace)/middleware/middleware.war'\r\n              appType: 'webAppLinux'\r\n              appSettings: |\r\n                -AZURE_KEYVAULT_URI \"$(AZURE_KEYVAULT_URI)\"\r\n\r\n      - job: Deploy_Frontend_AppService\r\n        displayName: 'Deploy Frontend to Azure App Service'\r\n        pool:\r\n          vmImage: 'ubuntu-latest'\r\n        steps:\r\n          - download: current\r\n            artifact: frontend\r\n          - task: AzureWebApp@1\r\n            inputs:\r\n              azureSubscription: '$(AzureSubscription)' # This will be set from Variable Group\r\n              appType: 'webAppLinux'\r\n              appName: '$(FrontendAppServiceName)' # This will be set from Key Vault - Variable Group\r\n              package: '$(Pipeline.Workspace)/frontend'\r\n              startUpCommand: 'pm2 serve /home/site/wwwroot/build --no-daemon --spa'\r\n              appSettings: |\r\n                -REACT_APP_SERVICE_BASE_URL \"$(MiddlewareServiceBaseUrl)\"\r\n                -REACT_APP_CLIENT_ID \"$(MsalAppId)\"\r\n                -REACT_APP_CONTENT_GENERATOR_ENDPOINT \"$(MiddlewareServiceGenerateContentEndpoint)\"\r\n                -REACT_APP_SERVICE_ACCESS_KEY \"$(MiddlewareServiceAccessKey)\"\r\n\r\n  # Deploying to Azure Kubernetes Service\r\n  - stage: Deploy_AKS\r\n    displayName: 'Deploy to Azure Kubernetes Service'\r\n    condition: eq(variables['DeploymentTarget'], 'AKS')\r\n    dependsOn: Deploy_AppServices\r\n    jobs:\r\n      - job: Deploy_Backend_AKS\r\n        displayName: 'Deploy Backend to Azure Kubernetes Service'\r\n        pool:\r\n          vmImage: 'ubuntu-latest'\r\n        steps:\r\n          - task: KubernetesManifest@1\r\n            inputs:\r\n              action: 'deploy'\r\n              connectionType: 'azureResourceManager'\r\n              azureSubscriptionConnection: '$(AzureSubscription)'\r\n              azureResourceGroup: '$(ResourceGroupName)'\r\n              kubernetesCluster: '$(AKS)'\r\n              manifests: 'backend/backend-deployment.yml'\r\n\r\n      - job: Deploy_Middleware_AKS\r\n        displayName: 'Deploy Middleware to Azure Kubernetes Service'\r\n        pool:\r\n          vmImage: 'ubuntu-latest'\r\n        steps:\r\n          - task: KubernetesManifest@1\r\n            inputs:\r\n              action: 'deploy'\r\n              connectionType: 'azureResourceManager'\r\n              azureSubscriptionConnection: '$(AzureSubscription)'\r\n              azureResourceGroup: '$(ResourceGroupName)'\r\n              kubernetesCluster: '$(AKS)'\r\n              manifests: 'middleware/middleware-deployment.yml'\r\n\r\n      - job: Deploy_Frontend_AKS\r\n        displayName: 'Deploy Frontend to Azure Kubernetes Service'\r\n        pool:\r\n          vmImage: 'ubuntu-latest'\r\n        steps:\r\n          - task: KubernetesManifest@1\r\n            inputs:\r\n              action: 'deploy'\r\n              connectionType: 'azureResourceManager'\r\n              azureSubscriptionConnection: '$(AzureSubscription)'\r\n              azureResourceGroup: '$(ResourceGroupName)'\r\n              kubernetesCluster: '$(AKS)'\r\n              manifests: 'frontend/frontend-deployment.yml'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"explanation-of-the-yaml-configuration",children:"Explanation of the YAML Configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The pipeline triggers on changes to the ",(0,r.jsx)(n.code,{children:"main"})," branch."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"Build"})," job compiles the applications and builds artifacts for deployment."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"Deploy"})," job checks the value of DeploymentTarget and decides whether to deploy to AKS or App Service."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"testing-the-cicd-pipeline",children:"Testing the CI/CD Pipeline"}),"\n",(0,r.jsxs)(n.p,{children:["Similar to ",(0,r.jsx)(n.strong,{children:"Blog 1.6a"}),", manually trigger the pipeline to ensure that the deployment is successful."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"screenshot of pipeline trigger in Azure DevOps project",src:i(26544).Z+"",width:"752",height:"375"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"screenshot of pipeline results in Azure DevOps project",src:i(97962).Z+"",width:"752",height:"375"})}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"In this blog, we extended our CI/CD pipelines to deploy Java Spring Boot and ReactJS applications to Azure Kubernetes Service. This approach allows for greater scalability and flexibility."}),"\n",(0,r.jsxs)(n.p,{children:["In our ",(0,r.jsx)(n.a,{href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/post-production-monitoring-scaling-and-optimization",children:"next blog"}),", we will cover advanced topics such as monitoring and scaling these deployments to ensure optimal performance and reliability."]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},63566:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/1-6b-1-348170a15f8adcccdf1d29ae64460d6d.png"},26544:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/1-6b-10-f77ae8be0d79bd6f6895dec9bdbbfd83.png"},97962:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/1-6b-11-90c5b2567bd849321de5e188b475d36e.png"},70221:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/1-6b-2-dcbb2a43d12bec8c6328fa85ebaa338e.png"},64539:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/1-6b-3-bec15eb1a8bd519e7030c06b1f9813a2.png"},52095:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/1-6b-4-341b07f7ee732fb6b72eb1f1a8ff57c8.png"},71738:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/1-6b-5-78a11e9d50667f049de95c32c564283a.png"},91735:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/1-6b-6-a68bad30baa803a11212912a01aa123a.png"},34648:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/1-6b-7-c3a9f1f2be3d02f2285bd1de9677a0bc.png"},49091:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/1-6b-8-c844f41d7a779655fd3a03f0c77fa0f7.png"},22525:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/1-6b-9-41542c805e047f1908d0a40b08329ba9.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var r=i(67294);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);