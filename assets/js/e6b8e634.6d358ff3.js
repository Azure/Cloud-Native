"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89851],{94119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(85893),a=t(11151);const r={date:"2024-10-09T09:00",slug:"build-content-generation-app-part-1",title:"1.3a Build Content Generation App Part 1",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Learn how to download our example app code, and prepare to run it in your local dev environment.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},o=void 0,s={permalink:"/Cloud-Native/30-days-of-ia-2024/build-content-generation-app-part-1",source:"@site/blog-30-days-of-ia-2024/2024-10-03/build-content-generation-app-part-1.md",title:"1.3a Build Content Generation App Part 1",description:"Learn how to download our example app code, and prepare to run it in your local dev environment.",date:"2024-10-09T09:00:00.000Z",formattedDate:"October 9, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/build-intelligent-apps"},{label:"30-days-of-IA-2024",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/30-days-of-ia-2024"},{label:"learn-live",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/learn-live"},{label:"demo-bytes",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/demo-bytes"},{label:"community-gallery",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/community-gallery"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-actions"}],readingTime:5.175,hasTruncateMarker:!1,authors:[{name:"#30Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"30days"}],frontMatter:{date:"2024-10-09T09:00",slug:"build-content-generation-app-part-1",title:"1.3a Build Content Generation App Part 1",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"Learn how to download our example app code, and prepare to run it in your local dev environment.",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"1.3b Build Content Generation App Part 2",permalink:"/Cloud-Native/30-days-of-ia-2024/build-content-generation-app-part-2"},nextItem:{title:"1.2b Setting Up Your Development Environment Part 2",permalink:"/Cloud-Native/30-days-of-ia-2024/setting-up-your-development-environment-2"}},l={authorsImageUrls:[void 0]},d=[{value:"Part 1: Download and configure app code",id:"part-1-download-and-configure-app-code",level:2},{value:"What we cover:",id:"what-we-cover",level:2},{value:"Introduction",id:"introduction",level:2},{value:"System Architecture Diagram \u2013 Local Setup",id:"system-architecture-diagram--local-setup",level:2},{value:"Step 1. Clone the GitHub repository",id:"step-1-clone-the-github-repository",level:2},{value:"Step 2: Set Up Azure Key Vault Secrets and User Identity (Local Setup)",id:"step-2-set-up-azure-key-vault-secrets-and-user-identity-local-setup",level:2},{value:"1. Set Key Vault URL and Authentication Environment Variables",id:"1-set-key-vault-url-and-authentication-environment-variables",level:3},{value:"2. Assign Key Vault Administrator Role",id:"2-assign-key-vault-administrator-role",level:3},{value:"Configure User Identity for Local Development",id:"configure-user-identity-for-local-development",level:3},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r,{children:[(0,i.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30-days-of-ia-2024/build-content-generation-app-part-1"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,i.jsx)("meta",{property:"og:description",content:"Learn how to download our example app code, and prepare to run it in your local dev environment."}),(0,i.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/build-content-generation-app-part-1"}),(0,i.jsx)("meta",{name:"twitter:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,i.jsx)("meta",{name:"twitter:description",content:"Learn how to download our example app code, and prepare to run it in your local dev environment."}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/build-content-generation-app-part-1"})]}),"\n",(0,i.jsx)(n.h2,{id:"part-1-download-and-configure-app-code",children:"Part 1: Download and configure app code"}),"\n",(0,i.jsx)(n.p,{children:"Learn how to download our example app code, and prepare to run it in your local dev environment."}),"\n",(0,i.jsx)(n.h2,{id:"what-we-cover",children:"What we cover:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Downloading the app code from GitHub to your local machine"}),"\n",(0,i.jsx)(n.li,{children:"Setting up app secrets and connecting them to Azure Key Vault"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"In the previous topic, we finished setting up the local tools and Azure services we need to run our app in your local development environment. In this blog, we walk you through getting the app code set up on your dev machine. This involves cloning the app code\u2019s GitHub repository to your local machine. In addition, we\u2019ll securely configure the app\u2019s connection strings and other secrets using a key vault that will be used in both your local environment and in the Azure Kubernetes Service (AKS) or Azure App Service hosting environments that you\u2019ll use when deploying to Azure."}),"\n",(0,i.jsx)(n.h2,{id:"system-architecture-diagram--local-setup",children:"System Architecture Diagram \u2013 Local Setup"}),"\n",(0,i.jsx)(n.p,{children:"Before diving into the setup and configuration details, let's take a look at the overall architecture of the Content Generation System. The architecture diagram below illustrates the key components and their interactions, including the backend, middleware, and frontend services, as well as how they integrate with Azure Key Vault and other Azure services."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture diagram of the key components and their interactions, including the backend, middleware, and frontend services, as well as how they integrate with Azure Key Vault and other Azure services",src:t(34803).Z+"",width:"1430",height:"723"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"In the diagram:"}),"\u202f"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Frontend Service:"})," Users interact with this component through the web interface. It communicates with the backend and middleware services."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Middleware Service:"})," Acts as an intermediary, handling requests between the frontend and backend services."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Backend Service:"})," Contains the core logic and data access layers for the content generation functionality."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Azure Key Vault:"})," Stores and manages secrets used by the services for secure access to configuration and credentials."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Azure Cosmos DB:"})," Database service used for storing and retrieving content data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Azure Storage:"})," Manages storage of files and other data used by the application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Azure OpenAI:"})," Provides AI-based services for content generation and embedding."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now that you have a high-level understanding of the architecture, let\u2019s proceed with the steps to set up and run the application locally."}),"\n",(0,i.jsx)(n.h2,{id:"step-1-clone-the-github-repository",children:"Step 1. Clone the GitHub repository"}),"\n",(0,i.jsxs)(n.p,{children:["Begin by cloning the repository for the ",(0,i.jsx)(n.strong,{children:"Java AI-Based Content Generator"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/Azure-Samples/Java-AI-Based-Content-Generator\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://aka.ms/demo-bytes/ep13?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Ingest your own content"})," using the Azure Functions OpenAI extension into a Cosmos DB vector database to enable OpenAI query on your data."]})}),"\n",(0,i.jsx)(n.h2,{id:"step-2-set-up-azure-key-vault-secrets-and-user-identity-local-setup",children:"Step 2: Set Up Azure Key Vault Secrets and User Identity (Local Setup)"}),"\n",(0,i.jsx)(n.h3,{id:"1-set-key-vault-url-and-authentication-environment-variables",children:"1. Set Key Vault URL and Authentication Environment Variables"}),"\n",(0,i.jsx)(n.p,{children:"Before running the services, you must set the environment variables required to access Azure Key Vault securely."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Azure Key Vault URL"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set this in your environment as ",(0,i.jsx)(n.code,{children:"AZURE_KEYVAULT_URI"})," using the URL of your Key Vault."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Configure Spring Cloud Azure"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure that you have the ",(0,i.jsx)(n.a,{href:"https://spring.io/projects/spring-cloud-azure#overview",children:"Spring Cloud Azure"})," dependencies added to your project. Spring Cloud Azure provides integration with Azure services and supports using different credential types."]}),"\n",(0,i.jsxs)(n.li,{children:["By default, Spring Cloud Azure will attempt to use multiple credential builders to authenticate, including:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"EnvironmentCredential"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"WorkloadIdentityCredential"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ManagedIdentityCredential"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SharedTokenCacheCredential"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"IntelliJCredential"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VSCodeCredential"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"AzureCliCredential"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["For local development, the application will use ",(0,i.jsx)(n.code,{children:"AzureCliCredential"})," if no other credentials are configured. This ensures that your local environment can authenticate and interact with Azure services seamlessly."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more details on configuring and using Spring Cloud Azure with Key Vault, refer to the ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/developer/java/spring-framework/authentication?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Spring Cloud Azure authentication documentation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image of the application properties variables",src:t(54452).Z+"",width:"1086",height:"196"})}),"\n",(0,i.jsx)(n.h3,{id:"2-assign-key-vault-administrator-role",children:"2. Assign Key Vault Administrator Role"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.strong,{children:"Azure Portal"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the left-hand menu, select ",(0,i.jsx)(n.strong,{children:"Resource groups"})," and choose the resource group that contains your Key Vault."]}),"\n",(0,i.jsxs)(n.li,{children:["Select your ",(0,i.jsx)(n.strong,{children:"Key Vault"})," from the list of resources."]}),"\n",(0,i.jsxs)(n.li,{children:["In the Key Vault menu, navigate to ",(0,i.jsx)(n.strong,{children:"Access control (IAM)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.strong,{children:"+ Add button"})," at the top and select Add role assignment."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Role"})," dropdown, search for and select ",(0,i.jsx)(n.strong,{children:"Key Vault Administrator"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Assign access to"})," field, choose ",(0,i.jsx)(n.strong,{children:"User, group, or service principal"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Search for your user (or the user who will manage secrets) and click ",(0,i.jsx)(n.strong,{children:"Select"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Finally, click ",(0,i.jsx)(n.strong,{children:"Review + assign"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This role gives the user permission to manage secrets in the Key Vault."}),"\n",(0,i.jsx)(n.h3,{id:"configure-user-identity-for-local-development",children:"Configure User Identity for Local Development"}),"\n",(0,i.jsx)(n.p,{children:"For local development, you can use Azure CLI credentials to authenticate with Azure Key Vault. Follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Install Azure CLI:"})," Ensure that the ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure CLI"})," is installed on your local machine."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open your command-line interface (CLI) and run the following command to login:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"az login\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Follow the prompts to complete the authentication process. This command authenticates your local CLI session and stores the necessary credentials."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Access Key Vault Secrets:"})," After running ",(0,i.jsx)(n.code,{children:"az login"}),", your application will use the Azure CLI session to authenticate with Azure Key Vault and retrieve secrets during local development."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Join live experts to dive into ",(0,i.jsx)(n.a,{href:"https://aka.ms/learn-live/ep3?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"operational excellence with AKS"})]})}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"In this blog, we cloned our example app code onto your local development machine, and we set up the required environment variables needed to run the app. In addition, we configured the Azure Key Vault settings to securely store the secrets, such as connection strings and keys, that you\u2019ll use when running the app.\u202f\u202f"}),"\n",(0,i.jsx)(n.p,{children:"In our next blog, we\u2019ll walk through adding those secrets to your key vault and then we\u2019ll build and run the app for the first time in your local development environment."})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},34803:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-3a-1-56fd412a2e1884cd638d88fcc1b0ee11.png"},54452:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-3a-2-ad5456185764fd983dc0431a639bb90d.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(67294);const a={},r=i.createContext(a);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);