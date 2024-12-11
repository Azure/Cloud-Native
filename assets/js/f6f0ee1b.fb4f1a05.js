"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91007],{74180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(85893),s=t(11151);const i={slug:"25-aca-java",title:"25. Deploy Spring Boot App to ACA",authors:["brian"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","containers","java","springboot"],image:"./img/java/banner.png",description:"Learn how to deploy containerized Spring boot apps to Azure Container apps (ACA) using Azure Container Registry (ACR)",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},o=void 0,a={permalink:"/Cloud-Native/blog/25-aca-java",source:"@site/blog/2022-09-25/index.md",title:"25. Deploy Spring Boot App to ACA",description:"Learn how to deploy containerized Spring boot apps to Azure Container apps (ACA) using Azure Container Registry (ACR)",date:"2022-09-25T00:00:00.000Z",formattedDate:"September 25, 2022",tags:[{label:"serverless-september",permalink:"/Cloud-Native/blog/tags/serverless-september"},{label:"30-days-of-serverless",permalink:"/Cloud-Native/blog/tags/30-days-of-serverless"},{label:"azure-container-apps",permalink:"/Cloud-Native/blog/tags/azure-container-apps"},{label:"dapr",permalink:"/Cloud-Native/blog/tags/dapr"},{label:"microservices",permalink:"/Cloud-Native/blog/tags/microservices"}],readingTime:6.345,hasTruncateMarker:!1,authors:[{name:"Brian Benz",title:"Senior Cloud Advocate @Microsoft",url:"https://github.com/bbenz",imageURL:"https://github.com/bbenz.png",key:"brian"}],frontMatter:{slug:"25-aca-java",title:"25. Deploy Spring Boot App to ACA",authors:["brian"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["azure","functions","serverless","containers","java","springboot"],image:"./img/java/banner.png",description:"Learn how to deploy containerized Spring boot apps to Azure Container apps (ACA) using Azure Container Registry (ACR)",tags:["serverless-september","30-days-of-serverless","azure-container-apps","dapr","microservices"]},unlisted:!1,prevItem:{title:"\ud83d\ude80 | Monitor + Troubleshoot Apps",permalink:"/Cloud-Native/blog/zero2hero-func-07"},nextItem:{title:"24. Deploy ASP.NET app to ACA",permalink:"/Cloud-Native/blog/24-aca-dotnet"}},l={image:t(682).Z,authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Deploy Java containers to cloud",id:"deploy-java-containers-to-cloud",level:2},{value:"1. Get Sample Code",id:"1-get-sample-code",level:2},{value:"2. Run Sample Locally (Optional)",id:"2-run-sample-locally-optional",level:2},{value:"3. Step-by-step: Deploy to ACR",id:"3-step-by-step-deploy-to-acr",level:2},{value:"3.1 Log into registry using the Azure CLI",id:"31-log-into-registry-using-the-azure-cli",level:3},{value:"3.2 Build &amp; deploy with <code>az acr build</code>",id:"32-build--deploy-with-az-acr-build",level:3},{value:"3.3 List container images",id:"33-list-container-images",level:3},{value:"4. Deploy on ACA",id:"4-deploy-on-aca",level:2},{value:"4.1 Create a container app",id:"41-create-a-container-app",level:3},{value:"4.2 Enter project details",id:"42-enter-project-details",level:3},{value:"4.3 Create an environment",id:"43-create-an-environment",level:3},{value:"5. App settings tab",id:"5-app-settings-tab",level:2},{value:"5.1 Application ingress settings",id:"51-application-ingress-settings",level:3},{value:"5.2 Deploy the container app",id:"52-deploy-the-container-app",level:3},{value:"5.3 Verify deployment",id:"53-verify-deployment",level:3},{value:"Resources: For self-study!",id:"resources-for-self-study",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i,{children:[(0,r.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/blog/23-aca-java"}),(0,r.jsx)("meta",{name:"twitter:title",content:"#30DaysOfServerless: Deploy Spring Boot App to ACA"}),(0,r.jsx)("meta",{name:"twitter:description",content:"#30DaysOfServerless: Deploy Spring Boot App to ACA"}),(0,r.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/blog/23-aca-java"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["Welcome to ",(0,r.jsx)(n.code,{children:"Day 25"})," of #30DaysOfServerless!"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/azure/container-apps/overview",children:"Azure Container Apps"})," enable application code packaged in containers to run and scale without the overhead of managing cloud infrastructure and container orchestration.  In this post I'll show you how to ",(0,r.jsx)(n.strong,{children:"deploy a Java application running on Spring Boot in a container to Azure Container Registry and Azure Container Apps."})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"what-well-cover",children:"What We'll Cover"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Introduction to Deploying Java containers in the cloud"}),"\n",(0,r.jsx)(n.li,{children:"Step-by-step: Deploying to Azure Container Registry"}),"\n",(0,r.jsx)(n.li,{children:"Step-by-step: Deploying and running on Azure Container Apps"}),"\n",(0,r.jsx)(n.li,{children:"Resources: For self-study!"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Slide on &quot;E2E \u2013 Container Apps&quot; by Brian Benz (@bbenz), focusing on deploying Spring Boot with Azure Container Registry.",src:t(34031).Z+"",width:"1600",height:"672"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"deploy-java-containers-to-cloud",children:"Deploy Java containers to cloud"}),"\n",(0,r.jsx)(n.p,{children:"We'll deploy a Java application running on Spring Boot in a container to Azure Container Registry and Azure Container Apps. Here are the main steps:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Create Azure Container Registry (ACR) on Azure portal"}),"\n",(0,r.jsx)(n.li,{children:"Create Azure Container App (ACA) on Azure portal."}),"\n",(0,r.jsx)(n.li,{children:"Deploy code to Azure Container Registry from the Azure CLI."}),"\n",(0,r.jsx)(n.li,{children:"Deploy container from ACR to ACA using the Azure portal."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"PRE-REQUISITES",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Active Azure subscription"})," with Contributor or Owner permissions. ",(0,r.jsx)(n.a,{href:"https://azure.microsoft.com/free/",children:"Create an account for free"})," if you don't have one."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"GitHub account"}),". Sign up for ",(0,r.jsx)(n.a,{href:"https://github.com/join",children:"free"})," if you don't have one."]}),"\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/git-guides/install-git",children:"Git"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Install the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/cli/azure/install-azure-cli",children:"Azure CLI"})}),"."]}),"\n"]})}),"\n",(0,r.jsxs)(n.p,{children:["Sign in to Azure from the CLI using the ",(0,r.jsx)(n.code,{children:"az login"})," command, and follow the prompts in your browser to complete the authentication process.  Also, ensure you're running the latest version of the CLI by using the ",(0,r.jsx)(n.code,{children:"az upgrade"}),"  command."]}),"\n",(0,r.jsx)(n.h2,{id:"1-get-sample-code",children:"1. Get Sample Code"}),"\n",(0,r.jsxs)(n.p,{children:["Fork and clone the ",(0,r.jsx)(n.a,{href:"https://github.com/bbenz/spring-boot-docker-aca",children:"sample GitHub repo"})," to your local machine.  Navigate to the  and click ",(0,r.jsx)(n.strong,{children:"Fork"})," in the top-right corner of the page."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/bbenz/spring-boot-docker-aca",children:"example code"})," that we're using is a very basic containerized Spring Boot example.  There are a lot more details to learn about Spring boot apps in docker, for a deep dive check out this ",(0,r.jsx)(n.a,{href:"https://spring.io/guides/gs/spring-boot-docker/",children:"Spring Boot Guide"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"2-run-sample-locally-optional",children:"2. Run Sample Locally (Optional)"}),"\n",(0,r.jsx)(n.p,{children:"If you have docker installed locally, you can optionally test the code on your local machine.  Navigate to the root directory of the forked repository and run the following commands:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-azurecli",children:"docker build -t spring-boot-docker-aca .\ndocker run -p 8080:8080 spring-boot-docker-aca\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Open a browser and go to ",(0,r.jsx)(n.a,{href:"https://localhost:8080",children:"https://localhost:8080"}),".  You should see this message:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-azurecli",children:"Hello Docker World\n"})}),"\n",(0,r.jsx)(n.p,{children:"That indicates the the Spring Boot app is successfully running locally in a docker container."}),"\n",(0,r.jsx)(n.p,{children:"Next, let's set up an Azure Container Registry an an Azure Container App and deploy this container to the cloud!"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-step-by-step-deploy-to-acr",children:"3. Step-by-step: Deploy to ACR"}),"\n",(0,r.jsxs)(n.p,{children:["To create a container registry from the ",(0,r.jsx)(n.a,{href:"https://portal.azure.com",children:"portal dashboard"}),", Select ",(0,r.jsx)(n.strong,{children:"Create a resource > Containers > Container Registry"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Navigate to container registry in portal",src:t(17193).Z+"",width:"760",height:"516"})}),"\n",(0,r.jsx)(n.p,{children:"In the Basics tab, enter values for Resource group and Registry name. The registry name must be unique within Azure, and contain 5-50 alphanumeric characters. Create a new resource group in the West US location named spring-boot-docker-aca.  Select the 'Basic' SKU."}),"\n",(0,r.jsxs)(n.p,{children:["Keep the default values for the remaining settings. Then select ",(0,r.jsx)(n.strong,{children:"Review + create"}),", then  ",(0,r.jsx)(n.strong,{children:"Create"}),".  When the Deployment succeeded message appears, select the container registry in the portal."]}),"\n",(0,r.jsx)(n.p,{children:"Note the registry server name ending with azurecr.io. You will use this in the following steps when you push and pull images with Docker."}),"\n",(0,r.jsx)(n.h3,{id:"31-log-into-registry-using-the-azure-cli",children:"3.1 Log into registry using the Azure CLI"}),"\n",(0,r.jsxs)(n.p,{children:["Before pushing and pulling container images, you must log in to the registry instance. Sign into the Azure CLI on your local machine, then run the ",(0,r.jsx)(n.code,{children:"az acr login"})," command. For this step, use the registry name, not the server name ending with azurecr.io."]}),"\n",(0,r.jsx)(n.p,{children:"From the command line, type:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-azurecli",children:"az acr login --name myregistryname\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The command returns ",(0,r.jsx)(n.strong,{children:"Login Succeeded"})," once completed."]}),"\n",(0,r.jsxs)(n.h3,{id:"32-build--deploy-with-az-acr-build",children:["3.2 Build & deploy with ",(0,r.jsx)(n.code,{children:"az acr build"})]}),"\n",(0,r.jsxs)(n.p,{children:["Next, we're going to deploy the docker container we created earlier using the AZ ACR Build command.  ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/cli/azure/acr?view=azure-cli-latest#az-acr-build",children:"AZ ACR Build"})," creates a docker build from local code and pushes the container to Azure Container Registry if the build is successful."]}),"\n",(0,r.jsxs)(n.p,{children:["Go to your local clone of the ",(0,r.jsx)(n.strong,{children:"spring-boot-docker-aca"})," repo in the command line, type:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-azurecli",children:"az acr build --registry myregistryname --image spring-boot-docker-aca:v1 .\n"})}),"\n",(0,r.jsx)(n.h3,{id:"33-list-container-images",children:"3.3 List container images"}),"\n",(0,r.jsxs)(n.p,{children:["Once the AZ ACR Build command is complete, you should be able to view the container as a repository in the registry.  In the portal, open your registry and select ",(0,r.jsx)(n.strong,{children:"Repositories"}),", then select the ",(0,r.jsx)(n.strong,{children:"spring-boot-docker-aca"})," repository you created with docker push.  You should also see the ",(0,r.jsx)(n.strong,{children:"v1"})," image under Tags."]}),"\n",(0,r.jsx)(n.h2,{id:"4-deploy-on-aca",children:"4. Deploy on ACA"}),"\n",(0,r.jsx)(n.p,{children:"Now that we have an image in the Azure Container Registry, we can deploy it to Azure Container Apps. For the first deployment, we'll pull the container from our ACR as part of the ACA setup."}),"\n",(0,r.jsx)(n.h3,{id:"41-create-a-container-app",children:"4.1 Create a container app"}),"\n",(0,r.jsxs)(n.p,{children:["We'll create the container app at the same place that we created the container registry in the Azure portal.  From the portal, select ",(0,r.jsx)(n.strong,{children:"Create a resource > Containers > Container App"}),".  In the ",(0,r.jsx)(n.em,{children:"Basics"})," tab, set these values:"]}),"\n",(0,r.jsx)(n.h3,{id:"42-enter-project-details",children:"4.2 Enter project details"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Setting"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Subscription"}),(0,r.jsx)(n.td,{children:"Your Azure subscription."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resource group"}),(0,r.jsxs)(n.td,{children:["Use the ",(0,r.jsx)(n.strong,{children:"spring-boot-docker-aca"})," resource group"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Container app name"}),(0,r.jsxs)(n.td,{children:["Enter ",(0,r.jsx)(n.strong,{children:"spring-boot-docker-aca"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"43-create-an-environment",children:"4.3 Create an environment"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"Create Container App environment"})," field, select ",(0,r.jsx)(n.strong,{children:"Create new"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"Create Container App Environment"})," page on the ",(0,r.jsx)(n.em,{children:"Basics"})," tab, enter the following values:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Setting"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Environment name"}),(0,r.jsxs)(n.td,{children:["Enter ",(0,r.jsx)(n.strong,{children:"my-environment"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Region"}),(0,r.jsxs)(n.td,{children:["Select ",(0,r.jsx)(n.strong,{children:"westus3"}),"."]})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select the ",(0,r.jsx)(n.strong,{children:"Create"})," button at the bottom of the ",(0,r.jsx)(n.em,{children:"Create Container App Environment"})," page."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select the ",(0,r.jsx)(n.strong,{children:"Next: App settings"})," button at the bottom of the page."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"5-app-settings-tab",children:"5. App settings tab"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"App settings"})," tab is where you connect to the ACR and pull the repository image:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Setting"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Use quickstart image"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"Uncheck"})," the checkbox."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Name"}),(0,r.jsxs)(n.td,{children:["Enter ",(0,r.jsx)(n.strong,{children:"spring-boot-docker-aca"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Image source"}),(0,r.jsxs)(n.td,{children:["Select ",(0,r.jsx)(n.strong,{children:"Azure Container Registry"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Registry"}),(0,r.jsx)(n.td,{children:"Select your ACR from the list."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Image"}),(0,r.jsxs)(n.td,{children:["Select ",(0,r.jsx)(n.strong,{children:"spring-boot-docker-aca"})," from the list."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Image Tag"}),(0,r.jsxs)(n.td,{children:["Select ",(0,r.jsx)(n.strong,{children:"v1"})," from the list."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"51-application-ingress-settings",children:"5.1 Application ingress settings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Setting"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Ingress"}),(0,r.jsxs)(n.td,{children:["Select ",(0,r.jsx)(n.strong,{children:"Enabled"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Ingress visibility"}),(0,r.jsxs)(n.td,{children:["Select ",(0,r.jsx)(n.strong,{children:"External"})," to publicly expose your container app."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Target port"}),(0,r.jsxs)(n.td,{children:["Enter ",(0,r.jsx)(n.strong,{children:"8080"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"52-deploy-the-container-app",children:"5.2 Deploy the container app"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Select the ",(0,r.jsx)(n.strong,{children:"Review and create"})," button at the bottom of the page."]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Once the deployment is successfully completed, you'll see the message: ",(0,r.jsx)(n.em,{children:"Your deployment is complete"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"53-verify-deployment",children:"5.3 Verify deployment"}),"\n",(0,r.jsxs)(n.p,{children:["In the portal, go to the Overview of your ",(0,r.jsx)(n.strong,{children:"spring-boot-docker-aca"})," Azure Container App, and click on the Application Url.   You should see this message in the browser:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-azurecli",children:"Hello Docker World\n"})}),"\n",(0,r.jsxs)(n.p,{children:["That indicates the the Spring Boot app is running in a docker container in your ",(0,r.jsx)(n.strong,{children:"spring-boot-docker-aca"})," Azure Container App."]}),"\n",(0,r.jsx)(n.h2,{id:"resources-for-self-study",children:"Resources: For self-study!"}),"\n",(0,r.jsx)(n.p,{children:"Once you have an understanding of the basics in ths post, there is so much more to learn!"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Check out the other ",(0,r.jsx)(n.a,{href:"https://azure.github.io/Cloud-Native/blog",children:"Serverless September posts"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["For DevOps and Java on Azure, see the tutorials and workshops at ",(0,r.jsx)(n.a,{href:"https://aka.ms/devopsforjavashops",children:"https://aka.ms/devopsforjavashops"})]}),"\n",(0,r.jsxs)(n.li,{children:["Also see ",(0,r.jsx)(n.a,{href:"https://developer.microsoft.com/java",children:"https://developer.microsoft.com/java"})," for everything Java on Azure!"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Thanks for stopping by!"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},682:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/banner-a80dd142b324c50ca8d68b0c69a4206b.png"},17193:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/acr-portal-01-56ad80e74d4597e32bb2bb534148d10d.png"},34031:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/banner-a80dd142b324c50ca8d68b0c69a4206b.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);