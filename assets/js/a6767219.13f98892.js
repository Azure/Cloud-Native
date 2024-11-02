"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28199],{19474:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=s(85893),r=s(11151);const a={slug:"13-aca-managed-id",title:"13. Secrets + Managed Identity",authors:["kendall"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Learn to make use of Container Apps (ACA) secrets and managed identities to securely access cloud-hosted resources that your ACA depends on! ",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},i=void 0,o={permalink:"/Cloud-Native/blog/13-aca-managed-id",source:"@site/blog/2022-09-13/index.md",title:"13. Secrets + Managed Identity",description:"Learn to make use of Container Apps (ACA) secrets and managed identities to securely access cloud-hosted resources that your ACA depends on! ",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"},{label:"microservices",permalink:"/Cloud-Native/blog/tags/microservices"}],readingTime:10.78,hasTruncateMarker:!1,authors:[{name:"Kendall Roden",title:"Azure Container Apps PM @Microsoft",url:"https://github.com/kendallroden",imageURL:"https://github.com/kendallroden.png",key:"kendall"}],frontMatter:{slug:"13-aca-managed-id",title:"13. Secrets + Managed Identity",authors:["kendall"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","concepts"],image:"./img/banner.png",description:"Learn to make use of Container Apps (ACA) secrets and managed identities to securely access cloud-hosted resources that your ACA depends on! ",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},unlisted:!1,prevItem:{title:"14. Build ACA with Dapr",permalink:"/Cloud-Native/blog/14-dapr-aca-quickstart"},nextItem:{title:"12. Build With Dapr!",permalink:"/Cloud-Native/blog/12-build-with-dapr"}},c={image:s(89781).Z,authorsImageUrls:[void 0]},l=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Securing access to external services",id:"securing-access-to-external-services",level:2},{value:"Secure access to external services without Dapr",id:"secure-access-to-external-services-without-dapr",level:2},{value:"Leveraging Container Apps secrets at runtime",id:"leveraging-container-apps-secrets-at-runtime",level:3},{value:"Using Managed Identity to connect to Azure services",id:"using-managed-identity-to-connect-to-azure-services",level:3},{value:"Secure access to external services with Dapr",id:"secure-access-to-external-services-with-dapr",level:2},{value:"Using Container Apps secrets in Dapr components",id:"using-container-apps-secrets-in-dapr-components",level:3},{value:"Using Managed Identity with Dapr Components",id:"using-managed-identity-with-dapr-components",level:3},{value:"Using Dapr Secret Stores for runtime secrets and component references",id:"using-dapr-secret-stores-for-runtime-secrets-and-component-references",level:3},{value:"Setting up a component for a specific secret store solution",id:"setting-up-a-component-for-a-specific-secret-store-solution",level:4},{value:"Referencing secrets in Dapr component files",id:"referencing-secrets-in-dapr-component-files",level:4},{value:"Summary",id:"summary",level:2},{value:"Resources",id:"resources",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Head:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/13-aca-managed-id"}),(0,t.jsx)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Secrets in Azure Container Apps"}),(0,t.jsx)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Secrets in Azure Container Apps"}),(0,t.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{name:"twitter:creator",content:"@kendallroden"}),(0,t.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,t.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/13-aca-managed-id"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Welcome to ",(0,t.jsx)(n.code,{children:"Day 13"})," of #30DaysOfServerless!"]}),"\n",(0,t.jsx)(n.p,{children:"In the previous post, we learned about all things Distributed Application Runtime (Dapr) and highlighted the capabilities you can unlock through managed Dapr in Azure Container Apps! Today, we'll dive into how we can make use of Container Apps secrets and managed identities to securely access cloud-hosted resources that your Container Apps depend on!"}),"\n",(0,t.jsx)(n.p,{children:"Ready? Let's go."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Secure access to external services overview"}),"\n",(0,t.jsx)(n.li,{children:"Using Container Apps Secrets"}),"\n",(0,t.jsx)(n.li,{children:"Using Managed Identity for connecting to Azure resources"}),"\n",(0,t.jsx)(n.li,{children:"Using Dapr secret store component references (Dapr-only)"}),"\n",(0,t.jsx)(n.li,{children:"Conclusion"}),"\n",(0,t.jsx)(n.li,{children:"Resources: For self-study!"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(15206).Z+"",width:"1600",height:"672"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"securing-access-to-external-services",children:"Securing access to external services"}),"\n",(0,t.jsx)(n.p,{children:"In most, if not all, microservice-based applications, one or more services in the system will rely on other cloud-hosted resources; Think external services like databases, secret stores, message brokers, event sources, etc. To interact with these services, an application must have the ability to establish a secure connection. Traditionally, an application will authenticate to these backing resources using some type of connection string or password."}),"\n",(0,t.jsx)(n.p,{children:"I'm not sure if it was just me, but one of the first things I learned as a developer was to ensure credentials and other sensitive information were never checked into the codebase. The ability to inject these values at runtime is a non-negotiable."}),"\n",(0,t.jsxs)(n.p,{children:["In Azure Container Apps, applications can securely leverage connection information via ",(0,t.jsx)(n.strong,{children:"Container Apps Secrets"}),". If the resource is Azure-based, a more ideal solution that removes the dependence on secrets altogether is using Managed Identity."]}),"\n",(0,t.jsxs)(n.p,{children:["Specifically for Dapr-enabled container apps, users can now tap into the power of the ",(0,t.jsx)(n.strong,{children:"Dapr secrets API!"})," With this new capability unlocked in Container Apps, users can call the Dapr secrets API from application code to securely access secrets from Key Vault or other backing secret stores. In addition, customers can also make use of a secret store component reference when wiring up Dapr state store components and more!"]}),"\n",(0,t.jsxs)(n.p,{children:["ALSO, I'm excited to share that ",(0,t.jsx)(n.strong,{children:"support for  Dapr + Managed Identity is now available"}),"!!. What does this mean? It means that you can enable Managed Identity for your container app - and when establishing connections via Dapr, the Dapr sidecar can use this identity! This means simplified components without the need for secrets when connecting to Azure services!"]}),"\n",(0,t.jsx)(n.p,{children:"Let's dive a bit deeper into the following three topics:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Using Container Apps secrets in your container apps"}),"\n",(0,t.jsx)(n.li,{children:"Using Managed Identity to connect to Azure services"}),"\n",(0,t.jsx)(n.li,{children:"Connecting to services securely for Dapr-enabled apps"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"secure-access-to-external-services-without-dapr",children:"Secure access to external services without Dapr"}),"\n",(0,t.jsx)(n.h3,{id:"leveraging-container-apps-secrets-at-runtime",children:"Leveraging Container Apps secrets at runtime"}),"\n",(0,t.jsx)(n.p,{children:"Users can leverage this approach for any values which need to be securely stored, however, it is recommended to use Managed Identity where possible when connecting to Azure-specific resources."}),"\n",(0,t.jsx)(n.p,{children:"First, let's establish a few important points regarding secrets in container apps:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Secrets are scoped at the container app level, meaning secrets cannot be shared across container apps today"}),"\n",(0,t.jsxs)(n.li,{children:["When running in multiple-revision mode,","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["changes to secrets ",(0,t.jsx)(n.strong,{children:"do not"})," generate a new revision"]}),"\n",(0,t.jsx)(n.li,{children:"running revisions will not be automatically restarted to reflect changes. If you want to force-update existing container app revisions to reflect the changed secrets values, you will need to perform revision restarts."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"STEP 1",type:"info",children:(0,t.jsxs)(n.p,{children:["Provide the secure value as a secret parameter when creating your container app using the syntax ",(0,t.jsx)(n.strong,{children:'"SECRET_NAME=SECRET_VALUE"'})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'az containerapp create \\\n  --resource-group "my-resource-group" \\\n  --name queuereader \\\n  --environment "my-environment-name" \\\n  --image demos/queuereader:v1 \\\n  --secrets "queue-connection-string=$CONNECTION_STRING"\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"STEP 2",type:"info",children:(0,t.jsxs)(n.p,{children:["Create an environment variable which references the value of the secret created in step 1 using the syntax ",(0,t.jsxs)(n.strong,{children:['"ENV_VARIABLE_NAME=secretref',":SECRET_NAME",'"']})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'az containerapp create \\\n  --resource-group "my-resource-group" \\\n  --name myQueueApp \\\n  --environment "my-environment-name" \\\n  --image demos/myQueueApp:v1 \\\n  --secrets "queue-connection-string=$CONNECTIONSTRING" \\\n  --env-vars "QueueName=myqueue" "ConnectionString=secretref:queue-connection-string"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This ",(0,t.jsx)(n.strong,{children:"ConnectionString"})," environment variable can be used within your application code to securely access the connection string value at runtime."]}),"\n",(0,t.jsx)(n.h3,{id:"using-managed-identity-to-connect-to-azure-services",children:"Using Managed Identity to connect to Azure services"}),"\n",(0,t.jsxs)(n.p,{children:["A managed identity from Azure Active Directory (Azure AD) allows your container app to access other Azure AD-protected resources. This approach is recommended where possible as it eliminates the need for managing secret credentials in your container apps and allows you to properly scope the permissions needed for a given container app using role-based access control. Both system-assigned and user-assigned identities are available in container apps. For more background on managed identities in Azure AD, see ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview",children:"Managed identities for Azure resources"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To configure your app with a system-assigned managed identity you will follow similar steps to the following:"}),"\n",(0,t.jsx)(n.admonition,{title:"STEP 1",type:"info",children:(0,t.jsx)(n.p,{children:"Run the following command to create a system-assigned identity for your container app"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'az containerapp identity assign \\\n  --name "myQueueApp" \\\n  --resource-group "my-resource-group" \\\n  --system-assigned\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"STEP 2",type:"info",children:(0,t.jsxs)(n.p,{children:["Retrieve the identity details for your container app and store the Principal ID for the identity in a variable ",(0,t.jsx)(n.strong,{children:'"PRINCIPAL_ID"'})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'az containerapp identity show \\\n  --name "myQueueApp" \\\n  --resource-group "my-resource-group"\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"STEP 3",type:"info",children:(0,t.jsx)(n.p,{children:"Assign the appropriate roles and permissions to your container app's managed identity using the Principal ID in step 2 based on the resources you need to access (example below)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'az role assignment create \\\n  --role "Storage Queue Data Contributor" \\\n  --assignee $PRINCIPAL_ID \\\n  --scope "/subscriptions/<subscription>/resourceGroups/<resource-group>/providers/Microsoft.Storage/storageAccounts/<storage-account>/queueServices/default/queues/<queue>"\n'})}),"\n",(0,t.jsxs)(n.p,{children:['After running the above commands, your container app will be able to access your Azure Store Queue because it\'s managed identity has been assigned the "Store Queue Data Contributor" role. The role assignments you create will be contingent solely on the resources your container app needs to access. To instrument your code to use this managed identity, see more details ',(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/managed-identity?tabs=portal%2Cdotnet#connect-to-azure-services-in-app-code",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition to using managed identity to access services from your container app, you can also use managed identity to ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/containers#container-registries",children:"pull your container images from Azure Container Registry"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"secure-access-to-external-services-with-dapr",children:"Secure access to external services with Dapr"}),"\n",(0,t.jsx)(n.p,{children:"For Dapr-enabled apps, there are a few ways to connect to the resources your solutions depend on. In this section, we will discuss when to use each approach."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Using Container Apps secrets in your Dapr components"}),"\n",(0,t.jsx)(n.li,{children:"Using Managed Identity with Dapr Components"}),"\n",(0,t.jsx)(n.li,{children:"Using Dapr Secret Stores for runtime secrets and component references"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"using-container-apps-secrets-in-dapr-components",children:"Using Container Apps secrets in Dapr components"}),"\n",(0,t.jsx)(n.p,{children:"Prior to providing support for the Dapr Secret's Management building block, this was the only approach available for securely storing sensitive values for use in Dapr components."}),"\n",(0,t.jsx)(n.p,{children:'In Dapr OSS, when no secret store reference is provided in a Dapr component file, the default secret store is set to "Kubernetes secrets". In Container Apps, we do not expose the ability to use this default store. Rather, Container Apps secrets can be used in it\'s place.'}),"\n",(0,t.jsx)(n.p,{children:"With the introduction of the Secrets API and the ability to use Dapr + Managed Identity, this approach is useful for a limited number of scenarios:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Quick demos and dev/test scenarios using the Container Apps CLI"}),"\n",(0,t.jsx)(n.li,{children:"Securing values when a secret store is not configured or available for use"}),"\n",(0,t.jsx)(n.li,{children:"Using service principal credentials to configure an Azure Key Vault secret store component (Using Managed Identity is recommend)"}),"\n",(0,t.jsx)(n.li,{children:"Securing access credentials which may be required when creating a non-Azure secret store component"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"STEP 1",type:"info",children:(0,t.jsx)(n.p,{children:"Create a Dapr component which can be used by one or more services in the container apps environment. In the below example, you will create a secret to store the storage account key and reference this secret from the appropriate Dapr metadata property."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'   componentType: state.azure.blobstorage\n   version: v1\n   metadata:\n   - name: accountName\n     value: testStorage\n   - name: accountKey\n     secretRef: account-key\n   - name: containerName\n     value: myContainer\n   secrets:\n   - name: account-key\n     value: "<STORAGE_ACCOUNT_KEY>"\n   scopes:\n   - myApp\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"STEP 2",type:"info",children:(0,t.jsx)(n.p,{children:"Deploy the Dapr component using the below command with the appropriate arguments."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' az containerapp env dapr-component set \\\n   --name "my-environment" \\\n   --resource-group "my-resource-group" \\\n   --dapr-component-name statestore \\\n   --yaml "./statestore.yaml"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"using-managed-identity-with-dapr-components",children:"Using Managed Identity with Dapr Components"}),"\n",(0,t.jsx)(n.p,{children:"Dapr-enabled container apps can now make use of managed identities within Dapr components. This is the most ideal path for connecting to Azure services securely, and allows for the removal of sensitive values in the component itself."}),"\n",(0,t.jsx)(n.p,{children:"The Dapr sidecar makes use of the existing identities available within a given container app; Dapr itself does not have it's own identity. Therefore, the steps to enable Dapr + MI are similar to those in the section regarding managed identity for non-Dapr apps. See example steps below specifically for using a system-assigned identity:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a system-assigned identity for your container app"}),"\n",(0,t.jsxs)(n.li,{children:["Retrieve the identity details for your container app and store the Principal ID for the identity in a variable ",(0,t.jsx)(n.strong,{children:'"PRINCIPAL_ID"'})]}),"\n",(0,t.jsx)(n.li,{children:"Assign the appropriate roles and permissions (for accessing resources backing your Dapr components) to your ACA's managed identity using the Principal ID"}),"\n",(0,t.jsx)(n.li,{children:"Create a simplified Dapr component without any secrets required"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"    componentType: state.azure.blobstorage\n    version: v1\n    metadata:\n    - name: accountName\n      value: testStorage\n    - name: containerName\n      value: myContainer\n    scopes:\n    - myApp\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Deploy the component to test the connection from your container app via Dapr!"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Keep in mind, all Dapr components will be loaded by each Dapr-enabled container app in an environment by default. In order to avoid apps without the appropriate permissions from loading a component unsuccessfully, use scopes. This will ensure that only applications with the appropriate identities to access the backing resource load the component."}),"\n",(0,t.jsx)(n.h3,{id:"using-dapr-secret-stores-for-runtime-secrets-and-component-references",children:"Using Dapr Secret Stores for runtime secrets and component references"}),"\n",(0,t.jsx)(n.p,{children:"Dapr integrates with secret stores to provide apps and other components with secure storage and access to secrets such as access keys and passwords. The Dapr Secrets API is now available for use in Container Apps."}),"\n",(0,t.jsx)(n.p,{children:"Using Dapr\u2019s secret store building block typically involves the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Setting up a component for a specific secret store solution."}),"\n",(0,t.jsx)(n.li,{children:"Retrieving secrets using the Dapr secrets API in the application code."}),"\n",(0,t.jsx)(n.li,{children:"Optionally, referencing secrets in Dapr component files."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(50788).Z+"",width:"1739",height:"1057"})}),"\n",(0,t.jsx)(n.p,{children:"Let's walk through a couple sample workflows involving the use of Dapr's Secrets Management capabilities!"}),"\n",(0,t.jsx)(n.h4,{id:"setting-up-a-component-for-a-specific-secret-store-solution",children:"Setting up a component for a specific secret store solution"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create an Azure Key Vault instance for hosting the secrets required by your application."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'az keyvault create --name "<your-unique-keyvault-name>" --resource-group "my-resource-group" --location "<your-location>"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create an Azure Key Vault component in your environment without the secrets values, as the connection will be established to Azure Key Vault via Managed Identity."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'    componentType: secretstores.azure.keyvault\n    version: v1\n    metadata:\n    - name: vaultName\n      value: "[your_keyvault_name]"\n    scopes:\n    - myApp \n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'az containerapp env dapr-component set \\\n  --name "my-environment" \\\n  --resource-group "my-resource-group" \\\n  --dapr-component-name secretstore \\\n  --yaml "./secretstore.yaml"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Run the following command to create a system-assigned identity for your container app"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'az containerapp identity assign \\\n  --name "myApp" \\\n  --resource-group "my-resource-group" \\\n  --system-assigned\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Retrieve the identity details for your container app and store the Principal ID for the identity in a variable ",(0,t.jsx)(n.strong,{children:'"PRINCIPAL_ID"'})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'az containerapp identity show \\\n  --name "myApp" \\\n  --resource-group "my-resource-group"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Assign the appropriate roles and permissions to your container app's managed identity to access Azure Key Vault"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'az role assignment create \\\n--role "Key Vault Secrets Officer" \\\n--assignee $PRINCIPAL_ID \\\n--scope /subscriptions/{subscriptionid}/resourcegroups/{resource-group-name}/providers/Microsoft.KeyVault/vaults/{key-vault-name}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["Begin using the Dapr Secrets API in your application code to retrieve secrets! See additional details ",(0,t.jsx)(n.a,{href:"https://docs.dapr.io/reference/api/secrets_api/",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"referencing-secrets-in-dapr-component-files",children:"Referencing secrets in Dapr component files"}),"\n",(0,t.jsx)(n.p,{children:"Once a Dapr secret store component is available in the environment, it can be used to retrieve secrets for use in other components. For example, when creating a state store component, you can add a reference to the Dapr secret store from which you would like to source connection information. You will no longer use secrets directly in the component spec, but rather will instruct the Dapr sidecar to retrieve the secrets from the specified store."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'      componentType: state.azure.blobstorage\n      version: v1\n      metadata:\n      - name: accountName\n        value: testStorage\n      - name: accountKey\n        secretRef: account-key\n      - name: containerName\n        value: myContainer\n      secretStoreComponent: "<SECRET_STORE_COMPONENT_NAME>"\n      scopes:\n        - myApp\n'})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"In this post, we have covered the high-level details on how to work with secret values in Azure Container Apps for both Dapr and Non-Dapr apps. In the next article, we will walk through a complex Dapr example from end-to-end which makes use of the new support for Dapr + Managed Identity. Stayed tuned for additional documentation around Dapr secrets as it will be release in the next two weeks!"}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsx)(n.p,{children:"Here are the main resources to explore for self-study:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/manage-secrets?tabs=azure-cli",children:"Azure Container Apps Secrets"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/managed-identity?tabs=portal%2Cdotnet",children:"Managed Identities in Azure Container Apps"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://v1-9.docs.dapr.io/concepts/",children:"Dapr Documentation: Core Concepts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.dapr.io/getting-started/quickstarts/",children:"Dapr Quickstarts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.dapr.io/getting-started/tutorials/",children:"Dapr Tutorials"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/dapr-overview",children:"Azure Container Apps: Dapr Integration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/microservices-dapr",children:"Dapr-enabled Azure Container Apps: Using Azure CLI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/container-apps/microservices-dapr-azure-resource-manager",children:"Dapr-enabled Azure Container Apps: Using Bicep or ARM"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},89781:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/banner-9d61f89816a8e8b5682eae3c4fcdb71c.png"},15206:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/banner-9d61f89816a8e8b5682eae3c4fcdb71c.png"},50788:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/secrets-overview-cloud-stores-f0c9f823ba6a3246dac070c4da40a80a.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(67294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);