"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88154],{92098:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var i=a(85893),s=a(11151);const n={date:"2024-03-28T09:00",slug:"creating-a-virtual-stylist-chatbot-part-3",title:"6.3 Creating a Virtual Stylist Chatbot \u2014 Part 3: Deploying the App",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","60-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this four-part series, you\u2019ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In the final article of this series, you\u2019ll deploy and test the Intelligent App.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},o=void 0,r={permalink:"/Cloud-Native/60DaysOfIA/creating-a-virtual-stylist-chatbot-part-3",source:"@site/blog-60daysofIA/2024-03-28/creating-a-virtual-stylist-chatbot-part-3.md",title:"6.3 Creating a Virtual Stylist Chatbot \u2014 Part 3: Deploying the App",description:"In this four-part series, you\u2019ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In the final article of this series, you\u2019ll deploy and test the Intelligent App.",date:"2024-03-28T09:00:00.000Z",formattedDate:"March 28, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/60DaysOfIA/tags/build-intelligent-apps"},{label:"60-days-of-IA",permalink:"/Cloud-Native/60DaysOfIA/tags/60-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/60DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/60DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/60DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/60DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/60DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/60DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/60DaysOfIA/tags/github-actions"}],readingTime:6.32,hasTruncateMarker:!1,authors:[{name:"#60Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"cnteam"}],frontMatter:{date:"2024-03-28T09:00",slug:"creating-a-virtual-stylist-chatbot-part-3",title:"6.3 Creating a Virtual Stylist Chatbot \u2014 Part 3: Deploying the App",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","60-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this four-part series, you\u2019ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In the final article of this series, you\u2019ll deploy and test the Intelligent App.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,nextItem:{title:"6.2 Creating a Virtual Stylist Chatbot \u2014 Part 2: Adding a Chatbot Interface",permalink:"/Cloud-Native/60DaysOfIA/creating-a-virtual-stylist-chatbot-part-2"}},l={authorsImageUrls:[void 0]},c=[{value:"Creating a Virtual Stylist Chatbot\u2014Part 3: Deploying the App",id:"creating-a-virtual-stylist-chatbotpart-3-deploying-the-app",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Pushing the App to GitHub",id:"pushing-the-app-to-github",level:3},{value:"Creating an Azure Static Web Resource",id:"creating-an-azure-static-web-resource",level:3},{value:"Testing the App",id:"testing-the-app",level:3},{value:"Uploading an Image of a Fashion Item",id:"uploading-an-image-of-a-fashion-item",level:4},{value:"Conclusion",id:"conclusion",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n,{children:[(0,i.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/60daysofia/creating-a-virtual-stylist-chatbot-part-3"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,i.jsx)("meta",{property:"og:description",content:"In this four-part series, you\u2019ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In the final article of this series, you\u2019ll deploy and test the Intelligent App."}),(0,i.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/60daysofIA/creating-a-virtual-stylist-chatbot-part-3"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,i.jsx)("meta",{name:"twitter:description",content:"In this four-part series, you\u2019ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In the final article of this series, you\u2019ll deploy and test the Intelligent App."}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/60daysofIA/creating-a-virtual-stylist-chatbot-part-3"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"A minimalist graphic features a t-shirt, pants, and robot head in a rounded square, connected by broken line to a smartphone that displays a chatbot conversation.",src:a(27513).Z+"",width:"624",height:"380"})}),"\n",(0,i.jsx)(t.h2,{id:"creating-a-virtual-stylist-chatbotpart-3-deploying-the-app",children:"Creating a Virtual Stylist Chatbot\u2014Part 3: Deploying the App"}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/60DaysOfIA/creating-a-virtual-stylist-chatbot-part-1",children:"part 1"})," of this series, you used AI to analyze images of clothing and generate a text description of each piece. Then, in ",(0,i.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/60DaysOfIA/creating-a-virtual-stylist-chatbot-part-2",children:"part 2"}),", you designed the chatbot\u2019s interface."]}),"\n",(0,i.jsx)(t.p,{children:"In this third and final installment, you\u2019ll deploy the app as an Azure Static Web App using the Azure command-line interface (CLI). The Azure Static Web Apps service provides a hassle-free means of hosting static web apps with serverless APIs. It also features global distribution, custom domains, SSL certificates, authentication, authorization, and GitHub integration."}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"To follow along, ensure you have:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The complete code from ",(0,i.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/60DaysOfIA/creating-a-virtual-stylist-chatbot-part-2",children:"part 2"})]}),"\n",(0,i.jsx)(t.li,{children:"The Azure CLI installed and signed in to your Azure account"}),"\n",(0,i.jsxs)(t.li,{children:["A GitHub account, ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories",children:"an empty repository"})," to push the app\u2019s code to, and a ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token",children:"personal access token"})," granting read and write access to the repository"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For a preview of the project, check out the ",(0,i.jsx)(t.a,{href:"https://github.com/rogerwinter/Microsoft-Creating-a-Virtual-Stylist-Chatbot/",children:"complete project code available on GitHub"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"pushing-the-app-to-github",children:"Pushing the App to GitHub"}),"\n",(0,i.jsx)(t.p,{children:"You can set up Azure Static Web Apps to deploy automatically every time you push a new commit to GitHub. Before proceeding, create a GitHub repository for the web app and push all its code to the repo."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Register for ",(0,i.jsx)(t.a,{href:"https://aka.ms/serverless-learn-live/ep3?ocid=buildia24_60days_blogs",children:"Episode 3"})," of the new learning series on ",(0,i.jsx)(t.strong,{children:"Intelligent Apps with Serverless on Azure"}),". Join the community along with MVPs, and the Azure Product Group on how to leverage AI with Serverless on Azure technologies \u2013Azure Functions and Azure Container Apps \u2013 to build intelligent applications."]})}),"\n",(0,i.jsx)(t.h3,{id:"creating-an-azure-static-web-resource",children:"Creating an Azure Static Web Resource"}),"\n",(0,i.jsx)(t.p,{children:"Next, you\u2019ll create an Azure Static Web App resource using the Azure CLI. The Azure Static Web App resource is the container for the app and its settings."}),"\n",(0,i.jsx)(t.p,{children:"To create it, run the following command in your terminal:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"az staticwebapp create \\\r\n  --name virtual-stylist-chat \\\r\n  --resource-group <your resource group> \\\r\n  --location westus2 \\\r\n  --source virtual-stylist-chat \\\r\n  --branch main \\\r\n  --app-location / \\\r\n  --output-location dist \\\r\n  --login-with-github\n"})}),"\n",(0,i.jsx)(t.p,{children:"This command will create an Azure Static Web App resource with the following parameters:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"--name"})}),"\u2014The name of the resource, which must be globally unique"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"--resource-group"})}),"\u2014The name of the resource group to contain the resource"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"--location"})})," \u2014The location of the resource"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"--source"})}),"\u2014The name of the GitHub repository that contains the app code"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"--branch"})}),"\u2014The name of the GitHub branch that contains the app code"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"--app-location"})}),"\u2014The location of the app code in the repository"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"--output-folder"})}),"\u2014The folder where the app output is generated"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"--login-with-github"})}),"\u2014The GitHub personal access token that grants access to the repository"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The command creates a GitHub Actions workflow file in the repository that triggers the app build and deployment whenever a change is pushed to the branch. It also outputs some information about the resource, like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{ \r\n  "defaultHostname": "orange-beach-0c471f710.azurestaticapps.net",\r\n  "id": "/subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/resourceGroups/virtual-stylist-chat-rg/providers/Microsoft.Web/staticSites/virtual-stylist-chat",\r\n  "location": "West US 2",\r\n  "name": "virtual-stylist-chat",\r\n  "repositoryUrl": "https://github.com/username/virtual-stylist-chat",\r\n  "resourceGroup": "virtual-stylist-chat-rg",\r\n  "sku": "Free",\r\n  "type": "Microsoft.Web/staticSites",\r\n  "userId": "username",\r\n  "workflowFileUrl": "https://github.com/username/virtual-stylist-chat/blob/main/.github/workflows/azure-static-web-apps-virtual-stylist-chat.yml"\r\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"You\u2019ve now created an Azure Static Web App resource and a GitHub Actions workflow for the app."}),"\n",(0,i.jsxs)(t.p,{children:["To link the function app from part 1 as the back end for the Azure Static Web App, you use ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/cli/azure/staticwebapp/backends?view=azure-cli-latest&ocid=buildia24_60days_blogs#az-staticwebapp-backends-link",children:(0,i.jsx)(t.code,{children:"az staticwebapp backends link"})}),". This command links a pre-existing back end with a static web app, also known as \u201cBring your own API.\u201d You need to provide the function app\u2019s resource ID, the static web app\u2019s resource group, and the back-end region."]}),"\n",(0,i.jsx)(t.p,{children:"Link the function app as the back end for the static web app by running the following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'az staticwebapp backends link \\\r\n  --backend-resource-id "/subscriptions/<subscription-id>/resourceGroups/<resource-group>/providers/Microsoft.Web/sites/<function-app-name>" \\\r\n  --name virtual-stylist-chat \\\r\n  --resource-group <your-resource-group> \\\r\n  --backend-region westus\n'})}),"\n",(0,i.jsx)(t.h3,{id:"testing-the-app",children:"Testing the App"}),"\n",(0,i.jsx)(t.p,{children:"Now, you\u2019ll test the app by uploading some images of clothing items or outfits to see how the stylist bot responds and makes recommendations. You\u2019ll also witness how the app handles different types of inputs, such as images and text messages."}),"\n",(0,i.jsx)(t.h4,{id:"uploading-an-image-of-a-fashion-item",children:"Uploading an Image of a Fashion Item"}),"\n",(0,i.jsx)(t.p,{children:"To start, you\u2019ll upload an image of a blue denim jacket to see how the bot responds."}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"Upload"})," at the bottom of the chat window. Then, select the image file from your local machine. Alternatively, you can drag and drop the image file to the chat window."]}),"\n",(0,i.jsx)(t.p,{children:"The app will display the image as a chat message and send it to the back-end function. This function will analyze the image and generate a natural language response and recommendations using Azure Functions, Azure AI Services, and GPT-4 Vision using Azure OpenAI Service. It will then display the response and its recommendations as another chat message. Your result will look something like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"The Virtual Stylist Chatbot sends a greeting message that invites the user to request fashion advice and recommendations. The user responds with an image of a red t-shirt and a request to find a matching outfit.",src:a(98510).Z+"",width:"520",height:"249"})}),"\n",(0,i.jsx)(t.p,{children:"As you can see, the stylist bot correctly identified the fashion item as a red t-shirt and provided some information and tips about it. It also suggested some images of other items to pair with red t-shirts, including blue jeans and a red hat:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"The Virtual Stylist Chatbot returns a message with images of jeans and a red baseball cap",src:a(30953).Z+"",width:"625",height:"383"})}),"\n",(0,i.jsx)(t.p,{children:"You can click the images to view them full-size:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"The full-size photo of the jeans includes a partially visible torso and arms.",src:a(38591).Z+"",width:"625",height:"406"})}),"\n",(0,i.jsx)(t.p,{children:"If you don\u2019t like the suggestions or just want to see more, you can reply with additional details or questions, and it will generate new suggestions based on the information you provide."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Join the Azure Functions product group for an ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://aka.ms/intelligent-apps/ate-functions?ocid=buildia24_60days_blogs",children:"Ask The Expert"})})," session on how to focus on the pieces of code that matter most to you in AI application development, while Azure Functions handles the rest for you at extreme scale."]})}),"\n",(0,i.jsx)(t.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"In this tutorial series, you learned how to create a virtual stylist chatbot app using Azure and OpenAI. You built the app\u2019s back end using Azure Functions, Azure AI, and GPT-4 Vision on Azure OpenAI Service. You then learned how to use these services to analyze images and generate natural language responses and recommendations based on the images. Next, you created the chatbot interface for our app using Vite, Vue, TypeScript, Tailwind CSS, and vue-advanced-chat."}),"\n",(0,i.jsx)(t.p,{children:"You learned how to use these tools to build a web application that allows you conversationally interact with your stylist bot. Finally, you deployed the app as an Azure Static Web App using the Azure CLI."}),"\n",(0,i.jsxs)(t.p,{children:["Get your hands on the newly released ",(0,i.jsx)(t.a,{href:"https://aka.ms/flexconsumption/signup?ocid=buildia24_60days_blogs",children:"Azure Functions Flex Consumption Plan"})," for private networking, instance size selection, concurrency control, and fast and large scale out features on a serverless compute model."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},27513:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/6-3-1-ecb4fb3c49a3ea6cc7451e84f880a3fb.jpeg"},98510:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/6-3-2-9dd29de2a21292ba333f40d35262fbbb.png"},30953:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/6-3-3-d127989105b0a2cf46bcb8250c83105b.png"},38591:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/6-3-4-76bcea1668037205234650cabb58336c.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var i=a(67294);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);