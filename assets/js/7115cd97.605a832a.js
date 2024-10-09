"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96432],{56079:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(85893),i=r(11151);const s={date:"2024-09-24T09:00",slug:"setting-up-your-development-environment-2",title:"1.2b Setting Up Your Development Environment Part 2",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Learn how to create and configure the Azure OpenAI Service resource that we\u2019ll use in our example app.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},o=void 0,a={permalink:"/Cloud-Native/30-days-of-ia-2024/setting-up-your-development-environment-2",source:"@site/blog-30-days-of-ia-2024/2024-09-20/setting-up-your-development-environment-2.md",title:"1.2b Setting Up Your Development Environment Part 2",description:"Learn how to create and configure the Azure OpenAI Service resource that we\u2019ll use in our example app.",date:"2024-09-24T09:00:00.000Z",formattedDate:"September 24, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/build-intelligent-apps"},{label:"30-days-of-IA-2024",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/30-days-of-ia-2024"},{label:"learn-live",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/learn-live"},{label:"demo-bytes",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/demo-bytes"},{label:"community-gallery",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/community-gallery"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-actions"}],readingTime:10.59,hasTruncateMarker:!1,authors:[{name:"#30Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"30days"}],frontMatter:{date:"2024-09-24T09:00",slug:"setting-up-your-development-environment-2",title:"1.2b Setting Up Your Development Environment Part 2",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Learn how to create and configure the Azure OpenAI Service resource that we\u2019ll use in our example app.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"1.3a Build Content Generation App Part 1",permalink:"/Cloud-Native/30-days-of-ia-2024/build-content-generation-app-part-1"},nextItem:{title:"1.2a Setting up your development environment Part 1",permalink:"/Cloud-Native/30-days-of-ia-2024/setting-up-your-development-environment-1"}},c={authorsImageUrls:[void 0]},l=[{value:"1.2b. Setting up your development environment",id:"12b-setting-up-your-development-environment",level:2},{value:"Part 2. Preparing the Azure OpenAI Service resource",id:"part-2-preparing-the-azure-openai-service-resource",level:2},{value:"What we cover:",id:"what-we-cover",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Step 1. Set up Azure OpenAI",id:"step-1-set-up-azure-openai",level:2},{value:"Create the Azure OpenAI resource",id:"create-the-azure-openai-resource",level:3},{value:"Azure portal instructions",id:"azure-portal-instructions",level:4},{value:"CLI instructions",id:"cli-instructions",level:4},{value:"Step 2. Set up Azure API Management",id:"step-2-set-up-azure-api-management",level:2},{value:"Azure portal instructions",id:"azure-portal-instructions-1",level:3},{value:"CLI instructions",id:"cli-instructions-1",level:4},{value:"Step 3. Prepare your app hosting environments\u2014AKS or App Service",id:"step-3-prepare-your-app-hosting-environmentsaks-or-app-service",level:2},{value:"Choose your deployment technology",id:"choose-your-deployment-technology",level:3},{value:"Use the Azure App Service path",id:"use-the-azure-app-service-path",level:3},{value:"Azure portal instructions",id:"azure-portal-instructions-2",level:4},{value:"CLI instructions",id:"cli-instructions-2",level:3},{value:"Use the Azure Kubernetes Service (AKS) path",id:"use-the-azure-kubernetes-service-aks-path",level:3},{value:"Azure portal instructions",id:"azure-portal-instructions-3",level:4},{value:"CLI instructions",id:"cli-instructions-3",level:4},{value:"Summary",id:"summary",level:2},{value:"Additional resources",id:"additional-resources",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s,{children:[(0,t.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30-days-of-ia-2024/setting-up-your-development-environment-2"}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,t.jsx)("meta",{property:"og:description",content:"Join us on a learning journey to build intelligent apps on Azure. Read all about the upcoming #BuildIntelligentApps initiative on this post!"}),(0,t.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,t.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-your-development-environment-2"}),(0,t.jsx)("meta",{name:"twitter:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,t.jsx)("meta",{name:"twitter:description",content:"Join us on a learning journey to build intelligent apps on Azure. Read all about the upcoming #BuildIntelligentApps initiative on this post!"}),(0,t.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,t.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-your-development-environment-2"})]}),"\n",(0,t.jsx)(n.h2,{id:"12b-setting-up-your-development-environment",children:"1.2b. Setting up your development environment"}),"\n",(0,t.jsx)(n.h2,{id:"part-2-preparing-the-azure-openai-service-resource",children:"Part 2. Preparing the Azure OpenAI Service resource"}),"\n",(0,t.jsx)(n.p,{children:"Learn how to create and configure the Azure OpenAI Service resource that we\u2019ll use in our example app."}),"\n",(0,t.jsx)(n.h3,{id:"what-we-cover",children:"What we cover:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Creating an Azure OpenAI instance"}),"\n",(0,t.jsx)(n.li,{children:"Setting up Azure API Management"}),"\n",(0,t.jsx)(n.li,{children:"Exploring the options for creating our app hosting environments on Azure"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["In our ",(0,t.jsx)(n.a,{href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-your-development-environment-1",children:"previous post"}),", we discussed setting up your local development environment and creating the Azure-based database, storage, and secret management services that you\u2019ll use when running our application. In this post, we set up the Azure OpenAI instance that provides the core of our content generation capabilities. After you\u2019ve created the Azure OpenAI instance, we\u2019ll finish our preparation tasks by setting up Azure API Management and then finally creating our preferred app hosting resources (Azure Kubernetes Service [AKS] or Azure App Service)."]}),"\n",(0,t.jsx)(n.h2,{id:"step-1-set-up-azure-openai",children:"Step 1. Set up Azure OpenAI"}),"\n",(0,t.jsxs)(n.p,{children:["Create two Azure OpenAI deployments\u2014one for ",(0,t.jsx)(n.strong,{children:"GPT-4o"})," (chat completion) and another for ",(0,t.jsx)(n.strong,{children:"text embedding"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create a new Azure OpenAI resource"}),". Go to the Azure portal, and search for ",(0,t.jsx)(n.strong,{children:"Azure OpenAI"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Deploy two separate instances:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Chat completion (GPT-4o)"})," for generating content."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Embedding model"})," for semantic search functionality."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-the-azure-openai-resource",children:"Create the Azure OpenAI resource"}),"\n",(0,t.jsx)(n.h4,{id:"azure-portal-instructions",children:"Azure portal instructions"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the Azure portal to deploy ",(0,t.jsx)(n.strong,{children:"Azure OpenAI"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The &quot;Create Azure OpenAI&quot; screen in the Azure portal.",src:r(10676).Z+"",width:"703",height:"744"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After provisioning Azure, open Azure OpenAI and go to ",(0,t.jsx)(n.strong,{children:"Azure OpenAI Studio"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The &quot;aistudy-chatcompletion&quot; screen in the Azure portal, with the focus on &quot;Go to Azure OpenAI Studio.&quot;",src:r(50483).Z+"",width:"739",height:"782"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Deployments"}),", and then deploy the models."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The &quot;Manage deployments of your models...&quot; screen in the Azure portal, with the focus on &quot;Deployments&quot; and &quot;Deploy base model.&quot;",src:r(7965).Z+"",width:"705",height:"782"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Search ",(0,t.jsx)(n.strong,{children:"GPT-4o"})," for chat completion. Set tokens-per-minute rate limit (depending on response length), and deploy."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt: The &quot;Deploy model gpt-4o&quot; screen in the Azure portal, with the focus on &quot;Tokens per Minute Rate Limit.&quot;",src:r(77887).Z+"",width:"696",height:"780"})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure to save the ",(0,t.jsx)(n.strong,{children:"Target URI"})," and ",(0,t.jsx)(n.strong,{children:"Key"})," for future use."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The &quot;gpt-4o&quot; screen in the Azure portal, with the focus on &quot;Endpoint.&quot;",src:r(49508).Z+"",width:"782",height:"377"})}),"\n",(0,t.jsxs)(n.p,{children:["Deploy the ",(0,t.jsx)(n.strong,{children:"text-embedding-3-small"})," model to embed the data in the same way."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The &quot;text-embedding-3-small&quot; screen in the Azure portal, with the focus on &quot;Endpoint.&quot;",src:r(20864).Z+"",width:"782",height:"401"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"cli-instructions",children:"CLI instructions"}),"\n",(0,t.jsx)(n.p,{children:"Use the following script when performing these instructions:"}),"\n",(0,t.jsxs)(n.p,{children:["Shell script: ",(0,t.jsx)(n.code,{children:"create-openai-resource.sh"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'#!/bin/bash\r\n\r\n# Function to display help\r\nfunction display_help() {\r\n  echo "Usage: $0 --name <OpenAI Account Name> --resource-group <Resource Group Name> --location <Location> [--help]"\r\n  echo\r\n  echo "Options:"\r\n  echo "  --name              The display name of the Azure OpenAI account."\r\n  echo "  --resource-group    The name of the Azure resource group."\r\n  echo "  --location          The Azure region/location for the resource. (e.g., eastus, westus)"\r\n  echo "  --help              Display this help message and exit."\r\n  echo\r\n  exit 0\r\n}\r\n\r\n# Function to check if the user is logged in\r\nfunction check_azure_login() {\r\n  echo "Checking Azure CLI login status..."\r\n  az account show &> /dev/null\r\n  if [ $? -ne 0 ]; then\r\n    echo "You are not logged in. Logging in now..."\r\n    az login\r\n    if [ $? -ne 0 ]; then\r\n      echo "Azure login failed. Exiting script."\r\n      exit 1\r\n    fi\r\n  else\r\n    echo "You are already logged in."\r\n  fi\r\n}\r\n\r\n# Parse command line arguments\r\nOPENAI_ACCOUNT_NAME=""\r\nRESOURCE_GROUP=""\r\nLOCATION=""\r\n\r\nwhile [[ $# -gt 0 ]]; do\r\n  case "$1" in\r\n    --name)\r\n      OPENAI_ACCOUNT_NAME="$2"\r\n      shift 2\r\n      ;;\r\n    --resource-group)\r\n      RESOURCE_GROUP="$2"\r\n      shift 2\r\n      ;;\r\n    --location)\r\n      LOCATION="$2"\r\n      shift 2\r\n      ;;\r\n    --help)\r\n      display_help\r\n      ;;\r\n    *)\r\n      echo "Unknown option: $1"\r\n      display_help\r\n      ;;\r\n  esac\r\ndone\r\n\r\n# Ensure required arguments are provided\r\nif [[ -z "$OPENAI_ACCOUNT_NAME" || -z "$RESOURCE_GROUP" || -z "$LOCATION" ]]; then\r\n  echo "Error: --name, --resource-group, and --location are required."\r\n  display_help\r\nfi\r\n\r\n# Step 0: Check if logged in\r\ncheck_azure_login\r\n\r\n# Step 1: Create resource group (if not exists)\r\necho "Creating resource group $RESOURCE_GROUP (if it doesn\'t already exist)..."\r\naz group create --name "$RESOURCE_GROUP" --location "$LOCATION"\r\n\r\n# Step 2: Create OpenAI resource\r\necho "Creating Azure OpenAI resource..."\r\naz cognitiveservices account create \\\r\n  --name "$OPENAI_ACCOUNT_NAME" \\\r\n  --resource-group "$RESOURCE_GROUP" \\\r\n  --kind OpenAI \\\r\n  --sku S0 \\\r\n  --location "$LOCATION" \\\r\n  --yes\r\n\r\n# Step 3: Deploy GPT-4o model with increased token limit (10K capacity)\r\necho "Deploying GPT-4o model..."\r\naz cognitiveservices account deployment create \\\r\n  --name "$OPENAI_ACCOUNT_NAME" \\\r\n  --resource-group "$RESOURCE_GROUP" \\\r\n  --deployment-name "gpt-4o-deployment" \\\r\n  --model-name "gpt-4o" \\\r\n  --model-version "2024-05-13" \\\r\n  --model-format OpenAI \\\r\n  --sku-capacity 10 \\\r\n  --sku-name "Standard"\r\n\r\n# Step 4: Deploy text-embedding-3-small model\r\necho "Deploying text-embedding-3-small model..."\r\naz cognitiveservices account deployment create \\\r\n  --name "$OPENAI_ACCOUNT_NAME" \\\r\n  --resource-group "$RESOURCE_GROUP" \\\r\n  --deployment-name "text-embedding-3-small-deployment" \\\r\n  --model-name "text-embedding-3-small" \\\r\n  --model-version "1" \\\r\n  --model-format OpenAI \\\r\n  --sku-name "Standard" \\\r\n  --sku-capacity 120 \\\r\n\r\n# Verify deployments\r\necho "Listing deployed models..."\r\naz cognitiveservices account deployment list \\\r\n  --name "$OPENAI_ACCOUNT_NAME" \\\r\n  --resource-group "$RESOURCE_GROUP"\r\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"Run the script."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Save the script"}),". Save the script as ",(0,t.jsx)(n.code,{children:"create-openai-resource.sh"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Make the script executable:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"chmod +x create-openai-resource.sh \n"})}),"\n",(0,t.jsx)(n.p,{children:"Run the script:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./create-openai-resource.sh --name <NAME> --resource-group <RESOURCE_GROUP_NAME> --location <LOCATION>\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create OpenAI Resource",src:r(4877).Z+"",width:"780",height:"456"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Join the next snackable AI Demo Bytes to explore how to ",(0,t.jsx)(n.a,{href:"https://aka.ms/demo-bytes/ep6?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"apply auto-scaling and load testing to your AI applications"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"step-2-set-up-azure-api-management",children:"Step 2. Set up Azure API Management"}),"\n",(0,t.jsx)(n.p,{children:"API Management serves as the gateway between your front-end, middleware, and back-end services."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create an API Management instance"}),". Search for ",(0,t.jsx)(n.strong,{children:"API Management"}),", and create a new instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Configure two services (back-end service API Management and middleware service API Management)"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Back end for data management (Azure Cosmos DB, storage account)"}),"\n",(0,t.jsx)(n.li,{children:"Middleware for Azure OpenAI Service"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"azure-portal-instructions-1",children:"Azure portal instructions"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the Azure portal, search for ",(0,t.jsx)(n.strong,{children:"API Management"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.strong,{children:"Create"}),", and complete the resource creation wizard."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Create"})," to deploy the API Management service."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The &quot;Create API Management service&quot; screen in the Azure portal.",src:r(66140).Z+"",width:"688",height:"781"})}),"\n",(0,t.jsx)(n.h4,{id:"cli-instructions-1",children:"CLI instructions"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a resource group (optional)."}),"\n",(0,t.jsxs)(n.p,{children:["If you need to create a resource group, use the following command, replacing ",(0,t.jsx)(n.code,{children:"<resource-group-name>"})," with your desired name and ",(0,t.jsx)(n.code,{children:"<location>"})," with the region (for example, eastus, westeurope):"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"az group create --name <resource-group-name> --location <location>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create the API Management service using the following command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"az apim create \\\r\n  --resource-group <your-resource-group-name> \\\r\n  --name <your-apim-name> \\\r\n  --publisher-email <your-email-address> \\\r\n  --publisher-name <your-publisher-name> \\\r\n  --location <your-location> \\\r\n  --sku-name <sku-type>\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--resource-group"}),": The name of the resource group where the API Management instance will be created."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--name"}),": The name of your API Management instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--publisher-email"}),": The email address of the API publisher."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--publisher-name"}),": The name of the API publisher."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--location"}),": The region where your API Management service will be deployed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--sku-name"}),": The pricing tier for the API Management instance (",(0,t.jsx)(n.code,{children:"Developer"}),", ",(0,t.jsx)(n.code,{children:"Basic"}),", ",(0,t.jsx)(n.code,{children:"Standard"}),", or ",(0,t.jsx)(n.code,{children:"Premium"}),"). Default value is ",(0,t.jsx)(n.code,{children:"Developer"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"SKUs"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Developer"}),": Best for non-production use."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Basic"}),": Entry-level production tier."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Standard"}),": Mid-range production tier."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Premium"}),": Enterprise-level tier with additional features like multiregion support."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Code lines: Last login",src:r(67694).Z+"",width:"780",height:"201"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Code lines: az apim create",src:r(85232).Z+"",width:"780",height:"201"})}),"\n",(0,t.jsx)(n.h2,{id:"step-3-prepare-your-app-hosting-environmentsaks-or-app-service",children:"Step 3. Prepare your app hosting environments\u2014AKS or App Service"}),"\n",(0,t.jsx)(n.p,{children:"With the Azure OpenAI instance in place and our API Management configuration created, we have one more piece to set up before we can start building and deploying our app. We need to determine what type of service we\u2019re going to use in Azure for hosting the front-end, middleware, and back-end app code."}),"\n",(0,t.jsx)(n.h3,{id:"choose-your-deployment-technology",children:"Choose your deployment technology"}),"\n",(0,t.jsxs)(n.p,{children:["Depending on your preferences or business requirements, you can choose either ",(0,t.jsx)(n.strong,{children:"Azure Kubernetes Service (AKS)"})," or ",(0,t.jsx)(n.strong,{children:"Azure App Service"})," when deploying your app to Azure."]}),"\n",(0,t.jsxs)(n.p,{children:["To recap, here\u2019s a quick high-level overview of the ",(0,t.jsx)(n.strong,{children:"AKS"})," versus ",(0,t.jsx)(n.strong,{children:"App Service"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feature"}),(0,t.jsx)(n.th,{children:"AKS"}),(0,t.jsx)(n.th,{children:"App Service"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Flexibility"}),(0,t.jsx)(n.td,{children:"More control, containerized apps"}),(0,t.jsx)(n.td,{children:"Simplified, fully managed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Scalability"}),(0,t.jsx)(n.td,{children:"High customization and scalability"}),(0,t.jsx)(n.td,{children:"Easy scaling for small to medium-sized apps"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Use case"}),(0,t.jsx)(n.td,{children:"Ideal for complex, enterprise apps"}),(0,t.jsx)(n.td,{children:"Ideal for rapid deployment"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Both are robust options, and you can select the one that best fits your business needs."}),"\n",(0,t.jsx)(n.h3,{id:"use-the-azure-app-service-path",children:"Use the Azure App Service path"}),"\n",(0,t.jsx)(n.p,{children:"Create a separate App Service instance for the front-end, middleware, and back-end services."}),"\n",(0,t.jsx)(n.h4,{id:"azure-portal-instructions-2",children:"Azure portal instructions"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Create a web app"}),". In the Azure portal, search for ",(0,t.jsx)(n.strong,{children:"App Service"})," and create a new app."]}),"\n",(0,t.jsxs)(n.p,{children:["In the first section of the resource creation wizard, select the correct ",(0,t.jsx)(n.strong,{children:"Runtime stack"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For the back-end service, select ",(0,t.jsx)(n.strong,{children:"Java 21"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For the middleware service, select ",(0,t.jsx)(n.strong,{children:"Java 17"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For the front-end service, select ",(0,t.jsx)(n.strong,{children:"Node 20 LTS"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Complete the resource creation wizard, and select ",(0,t.jsx)(n.strong,{children:"Create"})," to deploy the App Service instance."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The &quot;Create Web App&quot; screen in the Azure portal.",src:r(13847).Z+"",width:"594",height:"782"})}),"\n",(0,t.jsx)(n.h3,{id:"cli-instructions-2",children:"CLI instructions"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a resource group (optional)."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you need to create a resource group, use the following command, replacing ",(0,t.jsx)(n.code,{children:"<resource-group-name>"})," with your desired name and ",(0,t.jsx)(n.code,{children:"<location>"})," with the region (for example, eastus, westeurope):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"az group create --name <resource-group-name> --location <location>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create an App Service plan."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"First, create an App Service plan, which defines the region, pricing tier, and scaling options of your App Service instance:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"az appservice plan create \\\r\n  --name <your-app-service-plan-name> \\\r\n  --resource-group <your-resource-group-name> \\\r\n  --sku B1 \\\r\n  --is-linux \n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--sku B1"}),": Specifies the pricing tier (Basic B1)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--is-linux"}),": Specifies that the app will run on Linux."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Code lines: az appservice plan create",src:r(87974).Z+"",width:"780",height:"495"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a web app."}),"\n",(0,t.jsx)(n.p,{children:"To create a web app, use the following command:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'az webapp create \\\r\n  --resource-group <your-resource-group-name> \\\r\n  --plan <your-app-service-plan-name> \\\r\n  --name <your-backend-app-service-name> \\\r\n  --runtime "JAVA:21-java21"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Runtime specifications"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Back end:\r\n",(0,t.jsx)(n.code,{children:'--runtime "JAVA:21-java21"'}),": Specifies the Java 21 runtime."]}),"\n",(0,t.jsxs)(n.li,{children:["Middleware:\r\n",(0,t.jsx)(n.code,{children:'--runtime "JAVA:17-java17"'}),": Specifies the Java 17 runtime."]}),"\n",(0,t.jsxs)(n.li,{children:["Front end:\r\n",(0,t.jsx)(n.code,{children:'--runtime "NODE:22-lts"'}),": Specifies the Node.js 22 runtime."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Use these runtime values in your ",(0,t.jsx)(n.code,{children:"az webapp"})," create commands when setting up the respective services for back-end, middleware, and front-end applications."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Code lines: az webapp create",src:r(94068).Z+"",width:"750",height:"780"})}),"\n",(0,t.jsx)(n.h3,{id:"use-the-azure-kubernetes-service-aks-path",children:"Use the Azure Kubernetes Service (AKS) path"}),"\n",(0,t.jsx)(n.p,{children:"To deploy your Kubernetes-based resources, you need to perform two actions:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Set up a ",(0,t.jsx)(n.strong,{children:"container registry"})," to host your application\u2019s container images."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create a Kubernetes cluster"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"azure-portal-instructions-3",children:"Azure portal instructions"}),"\n",(0,t.jsx)(n.p,{children:"Create a container registry."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the Azure portal, search for ",(0,t.jsx)(n.strong,{children:"Kubernetes Service"})," and create a new AKS cluster."]}),"\n",(0,t.jsxs)(n.li,{children:["Complete the resource creation wizard, and select ",(0,t.jsx)(n.strong,{children:"Create"})," to deploy the container registry."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The &quot;Create container registry&quot; screen in the Azure portal.",src:r(95680).Z+"",width:"633",height:"782"})}),"\n",(0,t.jsx)(n.p,{children:"Create a Kubernetes cluster."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the Azure portal, search for ",(0,t.jsx)(n.strong,{children:"Kubernetes Service"})," and create a new Kubernetes cluster."]}),"\n",(0,t.jsxs)(n.li,{children:["Complete the resource creation wizard, and select ",(0,t.jsx)(n.strong,{children:"Create"})," to deploy the cluster."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The &quot;Create Kubernetes cluster&quot; screen in the Azure portal.",src:r(17082).Z+"",width:"749",height:"782"})}),"\n",(0,t.jsx)(n.h4,{id:"cli-instructions-3",children:"CLI instructions"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a resource group (optional)."}),"\n",(0,t.jsxs)(n.p,{children:["If you need to create a resource group, use the following command, replacing ",(0,t.jsx)(n.code,{children:"<resource-group-name>"})," with your desired name and ",(0,t.jsx)(n.code,{children:"<location>"})," with the region (for example, eastus, westeurope):"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"az group create --name <resource-group-name> --location <location> \n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create an Azure container registry."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  az acr create \\\r\n  --resource-group <your-resource-group-name> \\\r\n  --name <your-acr-name> \\\r\n  --sku Standard \\\r\n  --admin-enabled true \n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<your-acr-name>"})," with the name you want for your container registry. The ",(0,t.jsx)(n.code,{children:"--sku Standard"})," specifies the Azure Container Registry tier, and ",(0,t.jsx)(n.code,{children:"--admin-enabled true"})," enables admin access."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Command parameters"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--sku Standard"}),": Specifies the pricing tier for the Azure container registry. (",(0,t.jsx)(n.strong,{children:"Standard"})," is a good default option.)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--admin-enabled true"}),": Enables admin access for easier management of the Azure container registry."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Code lines: az acr create",src:r(47646).Z+"",width:"780",height:"412"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Create an AKS cluster:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"az aks create \\\r\n  --resource-group <your-resource-group-name> \\\r\n  --name <your-frontend-aks-cluster-name> \\\r\n  --node-count 3 \\\r\n  --enable-addons monitoring \\\r\n  --generate-ssh-keys \\\r\n  --node-vm-size Standard_DS2_v2\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Code lines: az aks create",src:r(92671).Z+"",width:"570",height:"212"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Second set of code lines: az aks create",src:r(60150).Z+"",width:"570",height:"212"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Third set of code lines: az aks create",src:r(31378).Z+"",width:"570",height:"212"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Learn more on Technical leaders\u2019 ",(0,t.jsx)(n.a,{href:"https://aka.ms/AAI_TDMApps_Plan?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"guide to building intelligent apps"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"In this post, we walked through creating the Azure OpenAI instance that will serve as the core of our app\u2019s content generation capabilities. We finished up our setup tasks by configuring Azure API Management, and then we created the hosting resources we need to deploy our app to Azure."}),"\n",(0,t.jsx)(n.p,{children:"In our next post, we\u2019ll discuss how you can start building and running the app on your local dev machine."}),"\n",(0,t.jsx)(n.h3,{id:"additional-resources",children:"Additional resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://developer.microsoft.com/reactor/series/S-1381/?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Register for Demo Bytes"}),", a snackable playlist of demos designed to help you skill up on AI powered app development."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},10676:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-1-95d91f548c955da1f4d308eb2dca54a6.png"},85232:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-10-66a6eb9bff7091cdb425e0c330d4afed.png"},13847:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-11-d6827500436eddb1d8c30d9ab9057bf7.png"},87974:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-12-fad3d5f5a9ce3d57e6b9bec26871ca65.png"},94068:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-13-e454c0b3b824bf0834ce56b1f4b550b6.png"},95680:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-14-347ae5c6cb2169f8221eb2651080dbf1.png"},17082:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-15-fc283d90185bdbca0cb247d05e2fd6ae.png"},47646:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-16-5f535db5f14fc49e1cfe52be2133cb68.png"},92671:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-17-7e4b9580aa78bad8eda5dde4ea7f97e6.png"},60150:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-18-7a084ce8058ce43cb69dec2bb0b27024.png"},31378:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-19-ceac067656d006c57371ed9c756c70e4.png"},50483:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-2-75c9f77b1c8c638584cdc7e9cd6ee723.png"},7965:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-3-ca321fa9aa37bd36dacbfd965ce99970.png"},77887:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-4-79661e58b7d283c7faa3bad7a67165cb.png"},49508:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-5-6e9e14a794226692a5d99ad6bf0e9868.png"},20864:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-6-882553452920716eedbd8adceb78c287.png"},4877:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-7-b911f631cb5db788826b9ae5cac2ba11.png"},66140:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-8-75f5cd416c50fa4ea0250d275b398473.png"},67694:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/2-1b-9-dcf81a6aeefd8af10eb779bbcdab0f93.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(67294);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);