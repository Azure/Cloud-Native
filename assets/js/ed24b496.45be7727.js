"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98156],{63489:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(85893),r=i(11151);const a={date:"2024-10-09T09:03",slug:"deploy-application-with-azure-app-service-part-2",title:"1.4b Deploy application with Azure App Service Part 2",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this section, we will deploy the back-end and middleware services using Azure App Service. ",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},s=void 0,o={permalink:"/Cloud-Native/30-days-of-ia-2024/deploy-application-with-azure-app-service-part-2",source:"@site/blog-30-days-of-ia-2024/2024-10-10/deploy-application-with-azure-app-service-part-2.md",title:"1.4b Deploy application with Azure App Service Part 2",description:"In this section, we will deploy the back-end and middleware services using Azure App Service. ",date:"2024-10-09T09:03:00.000Z",formattedDate:"October 9, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/build-intelligent-apps"},{label:"30-days-of-IA-2024",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/30-days-of-ia-2024"},{label:"learn-live",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/learn-live"},{label:"demo-bytes",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/demo-bytes"},{label:"community-gallery",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/community-gallery"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30-days-of-ia-2024/tags/github-actions"}],readingTime:8.015,hasTruncateMarker:!1,authors:[{name:"#30Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"30days"}],frontMatter:{date:"2024-10-09T09:03",slug:"deploy-application-with-azure-app-service-part-2",title:"1.4b Deploy application with Azure App Service Part 2",authors:["30days"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days-2024","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this section, we will deploy the back-end and middleware services using Azure App Service. ",tags:["Build-Intelligent-Apps","30-days-of-IA-2024","learn-live","demo-bytes","community-gallery","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"1.5a Deploy Application with AKS Part 1",permalink:"/Cloud-Native/30-days-of-ia-2024/deploy-application-with-AKS-part-1"},nextItem:{title:"1.4a Deploy application with Azure App Service Part 1",permalink:"/Cloud-Native/30-days-of-ia-2024/deploy-application-with-azure-app-service-part-1"}},l={authorsImageUrls:[void 0]},c=[{value:"4.b Deploying the Application Using Azure App Service",id:"4b-deploying-the-application-using-azure-app-service",level:2},{value:"What we will cover:",id:"what-we-will-cover",level:2},{value:"Step 1: Preparing the Application for Deployment",id:"step-1-preparing-the-application-for-deployment",level:2},{value:"Step 2: Configuring the Azure Web App Maven Plugin",id:"step-2-configuring-the-azure-web-app-maven-plugin",level:2},{value:"Step 3: Deploying the Back-end and Middleware Services Using Maven",id:"step-3-deploying-the-back-end-and-middleware-services-using-maven",level:2},{value:"Step 4: Deploying the Front-end Service",id:"step-4-deploying-the-front-end-service",level:2},{value:"4.1 Create App Service",id:"41-create-app-service",level:3},{value:"Azure portal instructions",id:"azure-portal-instructions",level:4},{value:"Azure CLI instructions",id:"azure-cli-instructions",level:4},{value:"4.2 Deploy the ZIP File",id:"42-deploy-the-zip-file",level:3},{value:"4.3 Set the correct startup command for React",id:"43-set-the-correct-startup-command-for-react",level:3},{value:"4.4 Clear browser cache",id:"44-clear-browser-cache",level:3},{value:"4.5 Restart the web app",id:"45-restart-the-web-app",level:3},{value:"4.6 Verify your deployment",id:"46-verify-your-deployment",level:3},{value:"Step 5: Verifying the Deployment",id:"step-5-verifying-the-deployment",level:2},{value:"Cleanup",id:"cleanup",level:3},{value:"Using Azure CLI",id:"using-azure-cli",level:4},{value:"Using the Azure Portal",id:"using-the-azure-portal",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Resources:",id:"additional-resources",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Head:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30-days-of-ia-2024/deploy-application-with-azure-app-service-part-2"}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,t.jsx)("meta",{property:"og:description",content:"In this section, we will deploy the back-end and middleware services using Azure App Service."}),(0,t.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,t.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-azure-app-service-part-2"}),(0,t.jsx)("meta",{name:"twitter:title",content:"**Build Intelligent Apps | AI Apps on Azure"}),(0,t.jsx)("meta",{name:"twitter:description",content:"In this section, we will deploy the back-end and middleware services using Azure App Service."}),(0,t.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,t.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-azure-app-service-part-2"})]}),"\n",(0,t.jsx)(n.h2,{id:"4b-deploying-the-application-using-azure-app-service",children:"4.b Deploying the Application Using Azure App Service"}),"\n",(0,t.jsxs)(n.p,{children:["In the previous blog post, we configured ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/api-management/api-management-key-concepts?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure API Management (APIM)"})," and ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/key-vault/general/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure Key Vault"})," to secure the application and manage secrets. In this section, we will deploy the back-end and middleware services using ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/app-service/overview?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure App Service"}),". We will leverage the ",(0,t.jsx)(n.a,{href:"https://github.com/microsoft/azure-maven-plugins/blob/develop/azure-webapp-maven-plugin/README.md",children:"Azure Web App Maven Plugin"})," for deployment. If the required App Service instances do not already exist (as discussed in blog ",(0,t.jsx)(n.strong,{children:"2.b"}),"), the Maven plugin will automatically create them. Otherwise, it will simply deploy the application code to the existing instances."]}),"\n",(0,t.jsx)(n.p,{children:"Additionally, we will deploy the front-end ReactJS application separately to its own Azure App Service. This ensures a complete end-to-end deployment of all application components, enabling seamless communication between the front-end, back-end, and middleware services."}),"\n",(0,t.jsx)(n.h2,{id:"what-we-will-cover",children:"What we will cover:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Preparing the Application for Deployment"}),"\n",(0,t.jsxs)(n.li,{children:["Configuring Maven for ",(0,t.jsx)(n.strong,{children:"Azure Web App Deployment"})]}),"\n",(0,t.jsxs)(n.li,{children:["Deploying the Back-end and Middleware Services Using ",(0,t.jsx)(n.strong,{children:"Maven"})]}),"\n",(0,t.jsx)(n.li,{children:"Deploying the Front-end Service"}),"\n",(0,t.jsx)(n.li,{children:"Verifying the Deployment"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-1-preparing-the-application-for-deployment",children:"Step 1: Preparing the Application for Deployment"}),"\n",(0,t.jsx)(n.p,{children:"Before deploying, ensure that your application is built and packaged correctly. This involves creating a WAR file for the back-end and middleware services."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Build the Application:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the Maven wrapper command to build the application:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"./mvnw clean install"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"screenshot of Maven wrapper command",src:i(40830).Z+"",width:"1429",height:"844"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Package the Application:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After building, package the application to create the necessary WAR file for deployment:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"./mvnw clean package"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This will create a WAR file in the target directory of your project."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"screenshot of Maven clean package command",src:i(44868).Z+"",width:"1431",height:"855"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://aka.ms/demo-bytes/ep13?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Ingest your own content"})," using the Azure Functions OpenAI extension into a Cosmos DB vector database to enable OpenAI query on your data."]})}),"\n",(0,t.jsx)(n.h2,{id:"step-2-configuring-the-azure-web-app-maven-plugin",children:"Step 2: Configuring the Azure Web App Maven Plugin"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Update the pom.xml File:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the ",(0,t.jsx)(n.code,{children:"pom.xml"})," file for both the back-end and middleware services and add the following plugin configuration:"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<plugin>\r\n    <groupId>com.microsoft.azure</groupId>\r\n    <artifactId>azure-webapp-maven-plugin</artifactId>\r\n    <version>2.13.0</version>\r\n    \x3c!-- Refer: https://github.com/microsoft/azure-maven-plugins/wiki/Azure-Web-App:-Configuration-Details --\x3e\r\n    <configuration>\r\n        \x3c!-- Optional: If not mentioned, it will pick the default subscription --\x3e\r\n        <subscriptionId>03a4877f-5f78-4a6c-af93-d492e85d4e82</subscriptionId>\r\n        <resourceGroup>ai-study-con-gen-1</resourceGroup>\r\n        <appName>ai-study-backend-service</appName>\r\n        <region>eastus</region>\r\n        <pricingTier>B1</pricingTier>\r\n        <runtime>\r\n            <os>Linux</os>\r\n            <javaVersion>Java 17</javaVersion>\r\n            <webContainer>Tomcat 10.0</webContainer>\r\n        </runtime>\r\n        <deployment>\r\n            <resources>\r\n                <resource>\r\n                    <directory>${project.basedir}/target</directory>\r\n                    <includes>\r\n                        <include>*.war</include>\r\n                    </includes>\r\n                </resource>\r\n            </resources>\r\n        </deployment>\r\n    </configuration>\r\n</plugin>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," If the ",(0,t.jsx)(n.code,{children:"subscriptionId"})," is not specified, the Maven plugin will use the default subscription configured in your ",(0,t.jsx)(n.strong,{children:"Azure CLI"})," or settings. Additionally, if the App Service defined in the ",(0,t.jsx)(n.code,{children:"appName"})," field does not exist (as discussed in ",(0,t.jsx)(n.strong,{children:"blog 2b"}),"), the Maven plugin will create it automatically during deployment."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"screenshot of Maven plugin command",src:i(30540).Z+"",width:"1428",height:"1094"})}),"\n",(0,t.jsx)(n.h2,{id:"step-3-deploying-the-back-end-and-middleware-services-using-maven",children:"Step 3: Deploying the Back-end and Middleware Services Using Maven"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Deploy the Back-end Service Using Maven:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the following Maven wrapper command to deploy the back-end service to Azure App Service:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"./mvnw clean package azure-webapp:deploy"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This command will either create the App Service instance (if it does not exist) or deploy the WAR file located in the target directory to the existing Azure Web App."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"screenshot of Maven wrapper command back-end deployment",src:i(39369).Z+"",width:"1429",height:"805"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"screenshot of Maven wrapper command back-end deployment results",src:i(29250).Z+"",width:"1429",height:"805"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Deploy the Middleware Service Using Maven:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Similarly, use the Maven wrapper command for the middleware service:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"./mvnw clean package azure-webapp:deploy"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"screenshot of Maven clean package command",src:i(26093).Z+"",width:"1430",height:"1088"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verify that the middleware service is deployed successfully to the specified Azure App Service instance."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"screenshot of Maven wrapper command middleware deployment",src:i(76528).Z+"",width:"1430",height:"782"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"screenshot of Maven wrapper command middleware deployment results",src:i(25882).Z+"",width:"1430",height:"634"})}),"\n",(0,t.jsx)(n.h2,{id:"step-4-deploying-the-front-end-service",children:"Step 4: Deploying the Front-end Service"}),"\n",(0,t.jsxs)(n.p,{children:["In our earlier blog post ",(0,t.jsx)(n.a,{href:"https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-your-development-environment-2",children:"1.2b. Preparing the Azure OpenAI Service resource"}),", we discussed creating the app services that will host our app. If you didn\u2019t create the front-end service then, you can do it now."]}),"\n",(0,t.jsxs)(n.p,{children:["If you already created a front-end app service, proceed to deploy the ZIP file in step ",(0,t.jsx)(n.a,{href:"#deploy-the-zip-file",children:"4.2"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"41-create-app-service",children:"4.1 Create App Service"}),"\n",(0,t.jsx)(n.h4,{id:"azure-portal-instructions",children:"Azure portal instructions"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the Azure portal, go to ",(0,t.jsx)(n.strong,{children:"App Services"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Create and choose the Web App"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select your subscription and resource group, and give the app a name (for example, ",(0,t.jsx)(n.code,{children:"frontend-service"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose the ",(0,t.jsx)(n.strong,{children:"Runtime stack: Node.js"})," and ",(0,t.jsx)(n.strong,{children:"Operating System: Linux"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Configure ",(0,t.jsx)(n.strong,{children:"Deployment"})," and ",(0,t.jsx)(n.strong,{children:"Monitoring"})," options as needed."]}),"\n",(0,t.jsx)(n.li,{children:"Review and create the App Service."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Web App configuration in Web Apps in the Azure portal",src:i(91603).Z+"",width:"1356",height:"1192"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Web App deployment in Web Apps in the Azure portal",src:i(29093).Z+"",width:"1431",height:"754"})}),"\n",(0,t.jsx)(n.h4,{id:"azure-cli-instructions",children:"Azure CLI instructions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'# Create Web App for Frontend (ReactJS)\r\naz webapp create --resource-group <your-resource-group-name> --plan <plan-name> --name <your-frontend-name> --runtime "NODE:22-lts"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Web App frontend deployment command",src:i(58049).Z+"",width:"1430",height:"1084"})}),"\n",(0,t.jsx)(n.h3,{id:"42-deploy-the-zip-file",children:"4.2 Deploy the ZIP File"}),"\n",(0,t.jsx)(n.p,{children:"Build, package, and deploy the application using the following commands."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Before deploying code, make sure that you\u2019ve cloned the application source from the GitHub repository to your local machine and then navigate to the \u201cfrontend\u201d folder."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Build the application\r\nnpm run build\u202f \r\n\r\n# Conver into ZIP File\r\nzip -r build.zip ./build\r\n\r\n# Deploy the code into Azure App Service\r\naz webapp deploy --resource-group <your-resource-group> --name <your-web-app-name> --src-path build.zip --type zip\u202f \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ZIP file deployment command",src:i(43857).Z+"",width:"1429",height:"756"})}),"\n",(0,t.jsx)(n.h3,{id:"43-set-the-correct-startup-command-for-react",children:"4.3 Set the correct startup command for React"}),"\n",(0,t.jsx)(n.p,{children:"Azure App Service needs to know how to correctly serve requests to our front-end React app. For static sites, like this React app, you configure the startup command to serve static files and handle routing for single-page applications (SPAs)."}),"\n",(0,t.jsx)(n.p,{children:"You can configure the app service to use the correct React startup command for the app by running the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'az webapp config set --resource-group <your-resource-group> --name <your-web-app-name> --startup-file "pm2 serve /home/site/wwwroot/build --no-daemon --spa"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configuration code to use the correct React startup command",src:i(32655).Z+"",width:"1429",height:"773"})}),"\n",(0,t.jsx)(n.h3,{id:"44-clear-browser-cache",children:"4.4 Clear browser cache"}),"\n",(0,t.jsx)(n.p,{children:"Your browser cache may prevent client-side updates from appearing correctly. After deploying the front-end app, clear your browser cache or use an incognito window before accessing the app to make sure that you're seeing the latest version."}),"\n",(0,t.jsx)(n.h3,{id:"45-restart-the-web-app",children:"4.5 Restart the web app"}),"\n",(0,t.jsx)(n.p,{children:"Configuration changes to the app service may not be applied immediately. To be sure that the app is running correctly, after a successful deployment, restart the web app to make sure that everything is refreshed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"az webapp restart --name <your-web-app-name> --resource-group <your-resource-group>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"46-verify-your-deployment",children:"4.6 Verify your deployment"}),"\n",(0,t.jsx)(n.p,{children:"Open the newly deployed web app in a browser, and be sure that it\u2019s running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"az webapp browse --resource-group <your-resource-group> --name <your-webapp-name>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-5-verifying-the-deployment",children:"Step 5: Verifying the Deployment"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Check Application Functionality"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Open the front-end application in a browser and test its functionality to ensure it communicates with the back-end and middleware services as intended."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"screenshot of front end application browser view",src:i(74477).Z+"",width:"1431",height:"735"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"another screenshot of front end application browser view",src:i(92760).Z+"",width:"840",height:"1296"})}),"\n",(0,t.jsx)(n.h3,{id:"cleanup",children:"Cleanup"}),"\n",(0,t.jsxs)(n.p,{children:["Once you have finished deploying and testing your application, it's essential to clean up the resources to avoid incurring any unnecessary costs. You can delete the Azure Resource Group that contains your resources using either the ",(0,t.jsx)(n.strong,{children:"Azure CLI"})," or the ",(0,t.jsx)(n.strong,{children:"Azure portal"}),". This will remove all the resources within that group, such as the Azure App Service, Azure API Management, and any other services created in the group."]}),"\n",(0,t.jsx)(n.h4,{id:"using-azure-cli",children:"Using Azure CLI"}),"\n",(0,t.jsx)(n.p,{children:"To delete the resource group using the Azure CLI, follow these steps:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Open your terminal or Azure Cloud Shell."}),"\n",(0,t.jsx)(n.li,{children:"Run the following command to delete the resource group:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"az group delete --name <resource-group-name> --yes --no-wait\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Replace ",(0,t.jsx)(n.code,{children:"<resource-group-name>"})," with the name of your Azure resource group."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"--yes"})," parameter confirms the deletion without a prompt."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"--no-wait"})," parameter initiates the deletion and immediately returns control to the terminal, so you don't have to wait for the deletion process to complete."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"using-the-azure-portal",children:"Using the Azure Portal"}),"\n",(0,t.jsx)(n.p,{children:"If you prefer to delete the resources using the Azure portal, follow these instructions:\u202f"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Navigate to the Azure Portal:"})," Go to ",(0,t.jsx)(n.a,{href:"http://portal.azure.com/",children:"Azure Portal"})," and sign in with your credentials."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:'Select "Resource Groups":'})," In the left-hand menu, select ",(0,t.jsx)(n.strong,{children:"Resource groups"}),". This will list all the resource groups available in your subscription."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Find the Resource Group:"})," Locate the resource group you want to delete (e.g., the resource group that contains your AKS and ACR resources)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Click on the Resource Group:"})," Click on the resource group name to open it."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Delete the Resource Group:"})," At the top of the resource group page, click on ",(0,t.jsx)(n.strong,{children:"Delete resource group"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Confirm Deletion:"})," You will be prompted to type the name of the resource group to confirm deletion. Type the name exactly and click on the ",(0,t.jsx)(n.strong,{children:"Delete"})," button."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Azure portal view of deleting the Resource group",src:i(10909).Z+"",width:"1600",height:"790"})}),"\n",(0,t.jsxs)(n.p,{children:["Deleting a resource group in the Azure portal will remove ",(0,t.jsx)(n.strong,{children:"all resources"})," associated with it. Be careful when performing this action, as it cannot be undone."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Learn more on Technical leaders\u2019 ",(0,t.jsx)(n.a,{href:"https://aka.ms/AAI_TDMApps_Plan?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"guide to building intelligent apps"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"In this section, we deployed our Java-based back-end and middleware services using the Maven Azure Web App Plugin and verified that they were hosted correctly in Azure App Service. We also deployed the front-end ReactJS application using the deployment center in Azure App Service. These steps ensure that all components are securely hosted and configured for seamless communication."}),"\n",(0,t.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/microsoft/azure-maven-plugins/tree/develop/azure-webapp-maven-plugin",children:"Azure Web App Maven Plugin Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/app-service/?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Azure App Service Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/azure/app-service/app-service-web-java?ocid=biafy25h1_30daysofia_webpage_azuremktg",children:"Deploying Java Applications to Azure"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},40830:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-1-2b1f7193a03acfa3c06ee92287346dc0.png"},29093:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-10-1ab60b061127a9c9a54610858d388013.png"},58049:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-11-4588b936d390a285c535ee70cf340e41.png"},43857:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-12-060d7c2a6ffafc1fee09545ba1096118.png"},32655:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-13-1a04a98baf1557464fcf5550a3d6f905.png"},74477:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-14-b2331dec9558bc35957745cb9587183c.png"},92760:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-15-71c97b1d8543dd45e56413bc57ab1522.png"},10909:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-16-76b86135648e4b31159e6aa52318064e.png"},44868:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-2-69e60132765c04439a262ed1f145d7ff.png"},30540:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-3-61772ed14d40b70d308aefc86d2124d5.png"},39369:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-4-3515104faf2d103e6be5e73871ae4d12.png"},29250:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-5-c6e77560e8766d89ad72e33605e3a417.png"},26093:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-6-00baac2225aa326352b2f1451278c74f.png"},76528:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-7-2b547f65d0eb483c110cbdbcc306a3d3.png"},25882:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-8-ecd00e29659329f91b5e48984750e658.png"},91603:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/1-4b-9-b6decc3d743348356b40a3449c6cec4b.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var t=i(67294);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);