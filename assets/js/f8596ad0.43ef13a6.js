"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57622],{14619:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=r(85893),i=r(11151);const o={date:"2024-10-09T09:01",slug:"build-content-generation-app-part-2",title:"1.3b Build Content Generation App Part 2",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Learn how to make the final configuration updates and run our example application for the first time.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},s=void 0,a={permalink:"/Cloud-Native/30-days-of-ia-2024/build-content-generation-app-part-2",source:"@site/blog-30-days-of-ia-2024/2024-10-08/build-content-generation-app-part-2.md",title:"1.3b Build Content Generation App Part 2",description:"Learn how to make the final configuration updates and run our example application for the first time.",date:"2024-10-09T09:01:00.000Z",formattedDate:"October 9, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/build-intelligent-apps"},{label:"30-days-of-IA-2024",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/30-days-of-ia-2024"},{label:"learn-live",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/learn-live"},{label:"demo-bytes",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/demo-bytes"},{label:"community-gallery",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/community-gallery"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-actions"}],readingTime:8.905,hasTruncateMarker:!1,authors:[{name:"#30Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"30days"}],frontMatter:{date:"2024-10-09T09:01",slug:"build-content-generation-app-part-2",title:"1.3b Build Content Generation App Part 2",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Learn how to make the final configuration updates and run our example application for the first time.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"1.4a Deploy application with Azure App Service Part 1",permalink:"/Cloud-Native/30-days-of-ia-2024/deploy-application-with-azure-app-service-part-1"},nextItem:{title:"1.3a Build Content Generation App Part 1",permalink:"/Cloud-Native/30-days-of-ia-2024/build-content-generation-app-part-1"}},l={authorsImageUrls:[void 0]},d=[{value:"Part 2: Build and run the application locally",id:"part-2-build-and-run-the-application-locally",level:2},{value:"What we cover:",id:"what-we-cover",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Step 1. Add key vault secrets.",id:"step-1-add-key-vault-secrets",level:2},{value:"CLI instructions\u202f",id:"cli-instructions",level:3},{value:"Script overview\u202f",id:"script-overview",level:3},{value:"Required arguments",id:"required-arguments",level:4},{value:"Optional arguments",id:"optional-arguments",level:4},{value:"Step 2. Run the back-end service locally",id:"step-2-run-the-back-end-service-locally",level:2},{value:"Step 3: Run the middleware service locally",id:"step-3-run-the-middleware-service-locally",level:2},{value:"Step 4: Run the front-end service locally",id:"step-4-run-the-front-end-service-locally",level:2},{value:"Local vs. deployment environments",id:"local-vs-deployment-environments",level:3},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o,{children:[(0,t.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30-days-of-ia-2024/build-content-generation-app-part-2"}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,t.jsx)("meta",{property:"og:description",content:"Join us on a learning journey to build intelligent apps on Azure. Read all about the upcoming #BuildIntelligentApps initiative on this post!"}),(0,t.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,t.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/build-content-generation-app-part-2"}),(0,t.jsx)("meta",{name:"twitter:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,t.jsx)("meta",{name:"twitter:description",content:"Join us on a learning journey to build intelligent apps on Azure. Read all about the upcoming #BuildIntelligentApps initiative on this post!"}),(0,t.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,t.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/build-content-generation-app-part-2"})]}),"\n",(0,t.jsx)(n.h2,{id:"part-2-build-and-run-the-application-locally",children:"Part 2: Build and run the application locally"}),"\n",(0,t.jsx)(n.p,{children:"Learn how to make the final configuration updates and run our example application for the first time."}),"\n",(0,t.jsx)(n.h2,{id:"what-we-cover",children:"What we cover:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Adding required connection strings and other secrets to Azure Key Vault"}),"\n",(0,t.jsx)(n.li,{children:"Starting the back-end service locally"}),"\n",(0,t.jsx)(n.li,{children:"Starting the middleware service locally"}),"\n",(0,t.jsx)(n.li,{children:"Starting the front-end service locally"}),"\n",(0,t.jsx)(n.li,{children:"Managing application secrets when transitioning from local to Azure Kubernetes Service (AKS) or Azure App Service deployments\u202f"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Throughout the last three days of topics, we\u2019ve been working on getting your local dev environment prepared to run our example app and on creating and configuring the Azure services that the app depends on. In our previous topic, we completed this prep work by cloning our example app code from GitHub and then getting our Azure Key Vault configured."}),"\n",(0,t.jsx)(n.p,{children:"Now we\u2019re ready to run the application for the first time in your local development environment. In today\u2019s post, we walk through adding your app connection secrets to the key vault and finally running the app\u2019s back-end, middleware, and front-end service components."}),"\n",(0,t.jsx)(n.h2,{id:"step-1-add-key-vault-secrets",children:"Step 1. Add key vault secrets."}),"\n",(0,t.jsxs)(n.p,{children:["After access is granted, add the following secrets into ",(0,t.jsx)(n.strong,{children:"Azure Key Vault"})," to securely configure the back-end and middleware services."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Back-end service secret keys:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AzureCosmosConnectionString"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MongoDBDatabaseName"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AzureStorageConnectionString"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"StorageContainerName"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MiddlewareServiceBaseUrl"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MiddlewareServiceProductEmbeddingEndpoint"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MiddlewareServiceAccessKey"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Middleware service secret keys:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"BackendServiceBaseUrl"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"BackendServiceProductEndpoint"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"BackendServiceSimilarProductEndpoint"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"BackendServiceAccessKey"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AzureOpenAiEndpointUrl"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AzureOpenAiAccessKey"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AzureOpenAiEmbeddingEndpointUrl"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"cli-instructions",children:"CLI instructions\u202f"}),"\n",(0,t.jsx)(n.p,{children:"Use the following script when performing these instructions:\u202f"}),"\n",(0,t.jsxs)(n.p,{children:["Shell script: ",(0,t.jsx)(n.code,{children:"add-secrets-to-keyvault.sh"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'#!/bin/bash\r\n\r\n# Function to display usage information\r\nusage() {\r\n  echo "Usage: $0 --keyvault-name <keyvault-name> --resource-group <resource-group> --cosmosdb-name <cosmos-mongo> --mongodb-name <dbname> --storage <sa-name> --storage-container <container-name> --openai-name <openai-details> --openai-completion-model <ai-service-completion-deployment-name> --openai-embedding-model <embedding-deployment-name> [options]"\r\n  echo\r\n  echo "Options:"\r\n  echo "  --keyvault-name                     Azure Key Vault name (required)"\r\n  echo "  --resource-group                    Azure resource group name (required)"\r\n  echo "  --cosmosdb-name                     CosmosDB name (required)"\r\n  echo "  --mongodb-name                      MongoDB database name (default: ContentGenerator)"\r\n  echo "  --storage                           Azure storage account name (required)"\r\n  echo "  --storage-container                 Storage container name (default: contentgen)"\r\n  echo "  --openai-name                       Azure OpenAI service name (required)"\r\n  echo "  --openai-completion-model           OpenAI chat completion deployment name (default: gpt-4o)"\r\n  echo "  --openai-embedding-model            OpenAI embedding deployment name (default: text-embedding-3-small)"\r\n  echo "  --middleware-base-url               Middleware service base URL (default: http://localhost:8081)"\r\n  echo "  --middleware-product-embedding-endpoint Middleware product embedding endpoint (default: /api/v1/generate/embeddings)"\r\n  echo "  --backend-base-url                  Backend service base URL (default: http://localhost:8080)"\r\n  echo "  --backend-product-endpoint          Backend product endpoint (default: /api/v1/products)"\r\n  echo "  --backend-similar-product-endpoint  Backend similar product endpoint (default: /api/v1/products/similar)"\r\n  echo "  -h, --help                          Show this help message and exit"\r\n  exit 1\r\n}\r\n\r\n# Check for help flag\r\nif [[ "$1" == "-h" || "$1" == "--help" ]]; then\r\n  usage\r\nfi\r\n\r\n# Function to set or update secrets in Azure Key Vault\r\nset_or_update_secret() {\r\n  local secret_name="$1"\r\n  local secret_value="$2"\r\n\r\n  echo "Checking secret: $secret_name"\r\n\r\n  # Check if the secret already exists in the Key Vault\r\n  secret_exists=$(az keyvault secret show --vault-name "$KEYVAULT_NAME" --name "$secret_name" --query "id" --output tsv 2>/dev/null)\r\n\r\n  if [[ -n "$secret_exists" ]]; then\r\n    echo "Secret $secret_name already exists. Updating it..."\r\n  else\r\n    echo "Secret $secret_name does not exist. Creating it..."\r\n  fi\r\n\r\n  # Add the Azure CLI command to set or update the secret\r\n  az keyvault secret set --vault-name "$KEYVAULT_NAME" --name "$secret_name" --value "$secret_value" >/dev/null\r\n}\r\n\r\n# Default values\r\nMONGO_DB_DATABASE_NAME="ContentGenerator"\r\nSTORAGE_CONTAINER_NAME="contentgen"\r\nOPENAI_COMPLETION_MODEL="gpt-4o"\r\nOPENAI_EMBEDDING_MODEL="text-embedding-3-small"\r\nBACKEND_BASE_URL="http://localhost:8080"\r\nBACKEND_PRODUCT_ENDPOINT="/api/v1/products"\r\nBACKEND_SIMILAR_PRODUCT_ENDPOINT="/api/v1/products/similar"\r\nMIDDLEWARE_BASE_URL="http://localhost:8081"\r\nMIDDLEWARE_PRODUCT_EMBEDDING_ENDPOINT="/api/v1/generate/embeddings"\r\n\r\n# Parse arguments\r\nwhile [[ $# -gt 0 ]]; do\r\n  case "$1" in\r\n    --keyvault-name)\r\n      KEYVAULT_NAME="$2"\r\n      shift 2\r\n      ;;\r\n    --resource-group)\r\n      RESOURCE_GROUP="$2"\r\n      shift 2\r\n      ;;\r\n    --cosmosdb-name)\r\n      COSMOSDB_NAME="$2"\r\n      shift 2\r\n      ;;\r\n    --mongodb-name)\r\n      MONGO_DB_DATABASE_NAME="$2"\r\n      shift 2\r\n      ;;\r\n    --storage)\r\n      STORAGE_ACCOUNT_NAME="$2"\r\n      shift 2\r\n      ;;\r\n    --storage-container)\r\n      STORAGE_CONTAINER_NAME="$2"\r\n      shift 2\r\n      ;;\r\n    --openai-name)\r\n      OPENAI_NAME="$2"\r\n      shift 2\r\n      ;;\r\n    --openai-completion-model)\r\n      OPENAI_COMPLETION_MODEL="$2"\r\n      shift 2\r\n      ;;\r\n    --openai-embedding-model)\r\n      OPENAI_EMBEDDING_MODEL="$2"\r\n      shift 2\r\n      ;;\r\n    --middleware-base-url)\r\n      MIDDLEWARE_BASE_URL="$2"\r\n      shift 2\r\n      ;;\r\n    --middleware-product-embedding-endpoint)\r\n      MIDDLEWARE_PRODUCT_EMBEDDING_ENDPOINT="$2"\r\n      shift 2\r\n      ;;\r\n    --backend-base-url)\r\n      BACKEND_BASE_URL="$2"\r\n      shift 2\r\n      ;;\r\n    --backend-product-endpoint)\r\n      BACKEND_PRODUCT_ENDPOINT="$2"\r\n      shift 2\r\n      ;;\r\n    --backend-similar-product-endpoint)\r\n      BACKEND_SIMILAR_PRODUCT_ENDPOINT="$2"\r\n      shift 2\r\n      ;;\r\n    *)\r\n      echo "Unknown option: $1"\r\n      usage\r\n      ;;\r\n  esac\r\ndone\r\n\r\n# Validate required arguments\r\nif [[ -z "$KEYVAULT_NAME" || -z "$RESOURCE_GROUP" || -z "$COSMOSDB_NAME" || -z "$STORAGE_ACCOUNT_NAME" || -z "$OPENAI_NAME" || -z "$OPENAI_EMBEDDING_MODEL" ]]; then\r\n  echo "Error: Missing required arguments."\r\n  usage\r\nfi\r\n\r\n# Generate UUIDs for access keys\r\nBACKEND_SERVICE_ACCESS_KEY=$(uuidgen)\r\nMIDDLEWARE_SERVICE_ACCESS_KEY=$(uuidgen)\r\n\r\n# Fetch Azure OpenAI service endpoint and keys using az cli\r\nAZURE_OPENAI_ENDPOINT_URL=$(az cognitiveservices account show --name "$OPENAI_NAME" --resource-group "$RESOURCE_GROUP" --query "properties.endpoint" --output tsv)\r\nAZURE_OPENAI_ACCESS_KEY=$(az cognitiveservices account keys list --name "$OPENAI_NAME" --resource-group "$RESOURCE_GROUP" --query "key1" --output tsv)\r\n\r\n# Construct the completion and embedding endpoints dynamically\r\nAZURE_OPENAI_COMPLETION_ENDPOINT_URL="$AZURE_OPENAI_ENDPOINT_URL/openai/deployments/$OPENAI_COMPLETION_MODEL/chat/completions?api-version=2023-03-15-preview"\r\nAZURE_OPENAI_EMBEDDING_ENDPOINT_URL="$AZURE_OPENAI_ENDPOINT_URL/openai/deployments/$OPENAI_EMBEDDING_MODEL/embeddings?api-version=2023-05-15"\r\n\r\n# Retrieve other secrets using Azure CLI\r\nAZURE_COSMOS_CONNECTION_STRING=$(az cosmosdb keys list --resource-group "$RESOURCE_GROUP" --name "$COSMOSDB_NAME" --type connection-strings --query "connectionStrings[0].connectionString" --output tsv)\r\nAZURE_STORAGE_CONNECTION_STRING=$(az storage account show-connection-string --resource-group "$RESOURCE_GROUP" --name "$STORAGE_ACCOUNT_NAME" --query connectionString --output tsv)\r\n\r\n# List of secrets to set\r\nsecrets=(\r\n  "BackendServiceBaseUrl" "$BACKEND_BASE_URL"\r\n  "BackendServiceProductEndpoint" "$BACKEND_PRODUCT_ENDPOINT"\r\n  "BackendServiceSimilarProductEndpoint" "$BACKEND_SIMILAR_PRODUCT_ENDPOINT"\r\n  "BackendServiceAccessKey" "$BACKEND_SERVICE_ACCESS_KEY"\r\n  "AzureOpenAiEndpointUrl" "$AZURE_OPENAI_ENDPOINT_URL"\r\n  "AzureOpenAiAccessKey" "$AZURE_OPENAI_ACCESS_KEY"\r\n  "AzureOpenAiCompletionEndpointUrl" "$AZURE_OPENAI_COMPLETION_ENDPOINT_URL"\r\n  "AzureOpenAiEmbeddingEndpointUrl" "$AZURE_OPENAI_EMBEDDING_ENDPOINT_URL"\r\n  "MiddlewareServiceBaseUrl" "$MIDDLEWARE_BASE_URL"\r\n  "MiddlewareServiceProductEmbeddingEndpoint" "$MIDDLEWARE_PRODUCT_EMBEDDING_ENDPOINT"\r\n  "MiddlewareServiceAccessKey" "$MIDDLEWARE_SERVICE_ACCESS_KEY"\r\n  "AzureCosmosConnectionString" "$AZURE_COSMOS_CONNECTION_STRING"\r\n  "MongoDBDatabaseName" "$MONGO_DB_DATABASE_NAME"\r\n  "AzureStorageConnectionString" "$AZURE_STORAGE_CONNECTION_STRING"\r\n  "StorageContainerName" "$STORAGE_CONTAINER_NAME"\r\n)\r\n\r\n# Loop through the array and set or update each secret\r\nfor ((i=0; i<${#secrets[@]}; i+=2)); do\r\n  secret_name="${secrets[$i]}"\r\n  secret_value="${secrets[$i+1]}"\r\n\r\n  # Call the set_or_update_secret function\r\n  set_or_update_secret "$secret_name" "$secret_value"\r\ndone\r\n\r\necho "Secrets have been set or updated successfully." \n'})}),"\n",(0,t.jsx)(n.h3,{id:"script-overview",children:"Script overview\u202f"}),"\n",(0,t.jsx)(n.h4,{id:"required-arguments",children:"Required arguments"}),"\n",(0,t.jsx)(n.p,{children:"These arguments are mandatory for the script to run successfully:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--keyvault-name <keyvault-name>"}),": The name of the Azure key vault where secrets will be set or updated."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--resource-group <resource-group>"}),": The Azure resource group that contains the resources (for example, Key Vault, Azure Cosmos DB) to be used."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--cosmosdb-name <cosmos-mongo>"}),": The name of the Azure Cosmos DB instance (MongoDB API)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--storage <sa-name>"}),": The name of the Azure Storage account used for storing data."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--openai-name <openai-details>"}),": The name of the Azure OpenAI Service instance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--openai-embedding-model <embedding-deployment-name>"}),": The deployment name for the Azure OpenAI embedding model."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"optional-arguments",children:"Optional arguments"}),"\n",(0,t.jsx)(n.p,{children:"These arguments have default values and can be overridden if needed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--mongodb-name <dbname>"}),": Name of the MongoDB database.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Default value"}),": ",(0,t.jsx)(n.code,{children:"ContentGenerator"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--storage-container <container-name>"}),": Name of the storage container within the Azure Storage account.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Default value"}),": ",(0,t.jsx)(n.code,{children:"contentgen"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--openai-completion-model <ai-service-completion-deployment-name>"}),": Deployment name for the Azure OpenAI chat completion model.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Default value"}),": ",(0,t.jsx)(n.code,{children:"gpt-4o"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--middleware-base-url <url>"}),": Base URL for the middleware service.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Default value"}),": ",(0,t.jsx)(n.code,{children:"http://localhost:8081"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--middleware-product-embedding-endpoint <endpoint>"}),": Endpoint for the product embedding service in the middleware.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Default value"}),": ",(0,t.jsx)(n.code,{children:"/api/v1/generate/embeddings"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--backend-base-url <url>"}),": Base URL for the back-end service.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Default value"}),": ",(0,t.jsx)(n.code,{children:"http://localhost:8080"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--backend-product-endpoint <endpoint>"}),": Endpoint for accessing product data in the back-end service.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Default value"}),": ",(0,t.jsx)(n.code,{children:"/api/v1/products"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--backend-similar-product-endpoint <endpoint>"}),": Endpoint for accessing similar product data in the back-end service.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Default value"}),": ",(0,t.jsx)(n.code,{children:"/api/v1/products/similar"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Save this script, and then run it using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./add-secrets-to-keyvault.sh \\\r\n    --keyvault-name <keyvault-name> \\\r\n    --resource-group <resource-group> \\\r\n    --cosmosdb-name <cosmos-mongo> \\\r\n    --mongodb-name <dbname> \\\r\n    --storage <sa-name> \\\r\n    --storage-container <container-name> \\\r\n    --openai-name <openai-details> \\\r\n    --openai-completion-model <ai-service-completion-deployment-name> \\\r\n    --openai-embedding-model <embedding-deployment-name>\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Code lines: add-secrets-to-keyvault.sh",src:r(88268).Z+"",width:"1429",height:"612"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://aka.ms/demo-bytes/ep13?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Ingest your own content"})," using the Azure Functions OpenAI extension into a Cosmos DB vector database to enable OpenAI query on your data."]})}),"\n",(0,t.jsx)(n.h2,{id:"step-2-run-the-back-end-service-locally",children:"Step 2. Run the back-end service locally"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Navigate to the back-end folder"}),". In your terminal, navigate to the back-end folder in the cloned repo."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Open the folder in your IDE"}),". Use ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," or ",(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/idea/",children:"IntelliJ IDEA"})," to open the back-end folder."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Add Key Vault environment variables"}),". Be sure that the following variable is set in your local environment:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AZURE_KEYVAULT_URI"}),": The URL of your Key Vault."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Run the back-end service"}),". To start the back-end service, run the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./mvnw spring-boot:run\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image of the back-end service command running",src:r(19096).Z+"",width:"1431",height:"752"})}),"\n",(0,t.jsxs)(n.p,{children:["The back-end service will run on port ",(0,t.jsx)(n.strong,{children:"8080"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-3-run-the-middleware-service-locally",children:"Step 3: Run the middleware service locally"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Navigate to the middleware folder"}),". Open another terminal window, and navigate to the middleware folder."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Change the port for middleware"}),". Open the ",(0,t.jsx)(n.code,{children:"application.properties"})," file in the middleware folder, and change the default port to ",(0,t.jsx)(n.code,{children:"8081"})," by adding:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Code in application properties file",src:r(34315).Z+"",width:"591",height:"624"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Add key vault environment variables."})," Set the environment variables as itemized ",(0,t.jsx)(n.code,{children:"(AZURE_KEYVAULT_URI)"}),".\u202f"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Run the middleware service."})," Use the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./mvnw spring-boot:run\u202f \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Results of running  mvnw spring boot run",src:r(19788).Z+"",width:"1431",height:"514"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The middleware will run on port ",(0,t.jsx)(n.strong,{children:"8081"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"step-4-run-the-front-end-service-locally",children:"Step 4: Run the front-end service locally"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Navigate to the front-end folder"}),". Go to the front-end folder in your cloned repo."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["Copy the ",(0,t.jsx)(n.code,{children:".env.example file"})]}),". Copy the ",(0,t.jsx)(n.code,{children:".env.example"})," file, and rename it to ",(0,t.jsx)(n.code,{children:".env"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cp .env.example .env\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure the ",(0,t.jsx)(n.code,{children:".env file"}),". Update the following variables in the ",(0,t.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"List of variables to update in the env file.",src:r(11617).Z+"",width:"1156",height:"350"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Install dependencies."})," Run npm install or yarn install to install the necessary front-end dependencies.\u202f"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Run the front-end service."})," Start the front-end service using one of the following commands:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm start\u202f \n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"yarn start\u202f \n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," At this point, you\u2019re prompted to sign in with your Microsoft Entra ID credentials. The front end authenticates the user with Microsoft Entra ID (user identity). After you sign in, the following screen appears."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"App Modernization Content Generation Sample screen that say Effortless Marketing Content at Your Fingertips.",src:r(75287).Z+"",width:"1431",height:"773"})}),"\n",(0,t.jsxs)(n.p,{children:["The front end runs on ",(0,t.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"local-vs-deployment-environments",children:"Local vs. deployment environments"}),"\n",(0,t.jsxs)(n.p,{children:["For local development, you can set the ",(0,t.jsx)(n.strong,{children:"endpoint URLs"})," directly in ",(0,t.jsx)(n.code,{children:".env"})," or ",(0,t.jsx)(n.code,{children:"application.properties"})," files. However, after deployment to ",(0,t.jsx)(n.strong,{children:"AKS"})," or ",(0,t.jsx)(n.strong,{children:"App Service"}),", you need to update the ",(0,t.jsx)(n.strong,{children:"Key Vault secrets"})," to reflect the public-facing URLs and credentials:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Back-end and middleware URLs:"})," Replace ",(0,t.jsx)(n.code,{children:"localhost"})," with the public URL of your deployed services."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"API Management:"})," When deployed, make sure that API keys and exposed API URLs are managed through ",(0,t.jsx)(n.strong,{children:"API Management"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We\u2019ll cover the details of deploying to AKS or App Service and using API Management in subsequent topics."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Learn more on Technical leaders\u2019 ",(0,t.jsx)(n.a,{href:"https://aka.ms/AAI_TDMApps_Plan?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"guide to building intelligent apps"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"In today\u2019s topic, we finished configuring the app\u2019s connection strings and other secrets in Azure Key Vault. Then we got the back-end, middleware, and front-end services running on your local machine, allowing you to test the app in your browser."}),"\n",(0,t.jsxs)(n.p,{children:["Now that you\u2019ve got a running app, our next topic will cover deploying it to Azure using either ",(0,t.jsx)(n.strong,{children:"Azure Kubernetes Service (AKS)"})," or ",(0,t.jsx)(n.strong,{children:"Azure App Service"}),", along with configuring ",(0,t.jsx)(n.strong,{children:"Azure API Management"})," to help ensure that your APIs are secured using key-based authentication."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},88268:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/1-3b-1-25cc55f1ef08be5592996273f56ce03c.png"},19096:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/1-3b-2-708c7d5cd5d410e52e7b2b41aca824a0.png"},34315:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/1-3b-3-v2-c36cb352793b4f9dc8efb568e448cd29.png"},19788:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/1-3b-4-560cfee53ef63813bb9df9eec3ec00f5.png"},11617:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/1-3b-5-b2ee73fbbe806e8206f77ec0809e0f41.png"},75287:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/1-3b-6-09ca215fa6822f3484b825997cd98f43.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(67294);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);