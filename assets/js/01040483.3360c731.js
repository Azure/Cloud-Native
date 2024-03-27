"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53747],{98019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(85893),a=n(11151);const r={date:"2024-03-27T09:00",slug:"creating-a-virtual-stylist-chatbot-part-2",title:"6.2 Creating a Virtual Stylist Chatbot \u2014 Part 2: Adding a Chatbot Interface",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","60-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this four-part series, you\u2019ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In this second installment, you\u2019ll design the chatbot\u2019s interface.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},i=void 0,o={permalink:"/Cloud-Native/60DaysOfIA/creating-a-virtual-stylist-chatbot-part-2",source:"@site/blog-60daysofIA/2024-03-27/creating-a-virtual-stylist-chatbot-part-2.md",title:"6.2 Creating a Virtual Stylist Chatbot \u2014 Part 2: Adding a Chatbot Interface",description:"In this four-part series, you\u2019ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In this second installment, you\u2019ll design the chatbot\u2019s interface.",date:"2024-03-27T09:00:00.000Z",formattedDate:"March 27, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/60DaysOfIA/tags/build-intelligent-apps"},{label:"60-days-of-IA",permalink:"/Cloud-Native/60DaysOfIA/tags/60-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/60DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/60DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/60DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/60DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/60DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/60DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/60DaysOfIA/tags/github-actions"}],readingTime:13.865,hasTruncateMarker:!1,authors:[{name:"#60Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"cnteam"}],frontMatter:{date:"2024-03-27T09:00",slug:"creating-a-virtual-stylist-chatbot-part-2",title:"6.2 Creating a Virtual Stylist Chatbot \u2014 Part 2: Adding a Chatbot Interface",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","60-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this four-part series, you\u2019ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In this second installment, you\u2019ll design the chatbot\u2019s interface.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,nextItem:{title:"6.1 Creating a Virtual Stylist Chatbot \u2014 Part 1: Analyzing Images with AI",permalink:"/Cloud-Native/60DaysOfIA/creating-a-virtual-stylist-chatbot-part-1"}},l={authorsImageUrls:[void 0]},c=[{value:"Creating a Virtual Stylist Chatbot \u2014 Part 2: Adding a Chatbot Interface",id:"creating-a-virtual-stylist-chatbot--part-2-adding-a-chatbot-interface",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Creating a Chatbot Interface for Your Virtual Stylist",id:"creating-a-chatbot-interface-for-your-virtual-stylist",level:3},{value:"Setting Up the Project",id:"setting-up-the-project",level:4},{value:"Coding the Chatbot Interface",id:"coding-the-chatbot-interface",level:4},{value:"Header and Footer",id:"header-and-footer",level:5},{value:"Creating the Chat Window Component",id:"creating-the-chat-window-component",level:5},{value:"Integrating Components into the App Component",id:"integrating-components-into-the-app-component",level:4},{value:"Next Steps",id:"next-steps",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r,{children:[(0,s.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/60daysofia/creating-a-virtual-stylist-chatbot-part-2"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,s.jsx)("meta",{property:"og:description",content:"In this four-part series, you\u2019ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In this second installment, you\u2019ll design the chatbot\u2019s interface."}),(0,s.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,s.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/60daysofIA/creating-a-virtual-stylist-chatbot-part-2"}),(0,s.jsx)("meta",{name:"twitter:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,s.jsx)("meta",{name:"twitter:description",content:"In this four-part series, you\u2019ll build a virtual stylist chatbot that uses AI to analyze images and suggest clothing items. In this second installment, you\u2019ll design the chatbot\u2019s interface."}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,s.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/60daysofIA/creating-a-virtual-stylist-chatbot-part-2"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Graphical representation of a chatbot. The human user&#39;s chat bubble contains a t-shirt with a question mark, while the bot&#39;s chat bubble contains three dots to indicate it is responding.",src:n(54060).Z+"",width:"624",height:"380"})}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-virtual-stylist-chatbot--part-2-adding-a-chatbot-interface",children:"Creating a Virtual Stylist Chatbot \u2014 Part 2: Adding a Chatbot Interface"}),"\n",(0,s.jsx)(t.p,{children:"Welcome to part 2 of this tutorial series on creating a virtual stylist chatbot using Azure OpenAI Service.\u202f"}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/60DaysOfIA/creating-a-virtual-stylist-chatbot-part-1",children:"part 1"}),", you built the chatbot app\u2019s back end using Azure Functions, Azure AI Services, and GPT-4 Vision with Azure OpenAI Service. That tutorial covered using these services to analyze an image of a fashion item or outfit and generate natural language responses and recommendations based on it."]}),"\n",(0,s.jsx)(t.p,{children:"In this second installment, you\u2019ll create a chatbot interface for your virtual stylist app using Vite, Vue, TypeScript, and vue-advanced-chat. You\u2019ll learn how to use these tools to build a web application that allows you to interact with your stylist bot conversationally."}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Before you begin, ensure you have:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["An Azure subscription with access to ",(0,s.jsx)(t.a,{href:"https://azure.microsoft.com/products/ai-services/openai-service?ocid=buildia24_60days_blogs",children:"Azure OpenAI Service"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://learn.microsoft.com/cli/azure/?ocid=buildia24_60days_blogs",children:"Azure command-line interface (CLI)"})," installed"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/Azure/azure-functions-core-tools",children:"Azure Functions Core Tools"})," installed"]}),"\n",(0,s.jsx)(t.li,{children:"An Azure OpenAI Service resource with a GPT-4 Vision model deployed"}),"\n",(0,s.jsx)(t.li,{children:"The deployment name, endpoint, and API key for your OpenAI Service"}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"https://www.kaggle.com/datasets/paramaggarwal/fashion-product-images-small",children:"Fashion Product Images dataset"})," from Kaggle"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"Node.js 20"})," or later installed on your local machine"]}),"\n",(0,s.jsxs)(t.li,{children:["A text editor that supports Vue and TypeScript. If you use Visual Studio Code, consider installing the ",(0,s.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin",children:"TypeScript Vue Plugin"})," to ensure the editor understands all the files you\u2019re about to create."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For a preview of this tutorial, check out the ",(0,s.jsx)(t.a,{href:"https://github.com/rogerwinter/Microsoft-Creating-a-Virtual-Stylist-Chatbot/tree/main/stylist-backend",children:"project code available on GitHub"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"creating-a-chatbot-interface-for-your-virtual-stylist",children:"Creating a Chatbot Interface for Your Virtual Stylist"}),"\n",(0,s.jsx)(t.p,{children:"In this section, you\u2019ll create a chatbot interface for the virtual stylist app using Vue and vue-advanced-chat. You\u2019ll use Vue to create the main components of the app, including the header, the footer, the chat window, and the image upload button. You\u2019ll also use the vue-advanced-chat library to create the chat messages, chat input, and other chat options, using Tailwind CSS to style the app."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Complete the ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://aka.ms/intelligent-apps/apps-csc?ocid=buildia24_60days_blogs",children:"Intelligent Apps Skills Challenge"})})," to compete for the leaderboard and earn a Microsoft Learn Badge."]})}),"\n",(0,s.jsx)(t.h4,{id:"setting-up-the-project",children:"Setting Up the Project"}),"\n",(0,s.jsx)(t.p,{children:"The first step is creating a new Vue project using Vite. Vite is a fast and lightweight build tool that provides a smooth developer experience and supports features like hot module replacement, code splitting, and tree shaking."}),"\n",(0,s.jsx)(t.p,{children:"To create a new Vue project with Vite, run the following command in your terminal:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm init vite@latest virtual-stylist-chat -- --template vue-ts\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This builds a new folder, ",(0,s.jsx)(t.code,{children:"virtual-stylist-chat"}),", with the following structure:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"virtual-stylist-chat\r\n\u251c\u2500\u2500 index.html\r\n\u251c\u2500\u2500 package.json\r\n\u251c\u2500\u2500 public\r\n\u2502   \u2514\u2500\u2500 favicon.svg\r\n\u251c\u2500\u2500 src\r\n\u2502   \u251c\u2500\u2500 App.vue\r\n\u2502   \u251c\u2500\u2500 assets\r\n\u2502   \u2502   \u2514\u2500\u2500 logo.svg\r\n\u2502   \u251c\u2500\u2500 components\r\n\u2502   \u2502   \u2514\u2500\u2500 HelloWorld.vue\r\n\u2502   \u251c\u2500\u2500 main.ts\r\n\u2502   \u2514\u2500\u2500 shims-vue.d.ts\r\n\u2514\u2500\u2500 tsconfig.json\n"})}),"\n",(0,s.jsx)(t.p,{children:"Next, add a few dependencies:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/advanced-chat/vue-advanced-chat",children:"vue-advanced-chat"}),", a feature-rich and highly customizable Vue chat component library that provides many out-of-the-box features for chat interfaces. These include images, videos, files, voice messages, emojis, link previews, typing indicators, reactions, markdown text formatting, online presence indicators, delivery and read receipts, theming and customization options, and responsive design."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://tailwindcss.com/",children:"Tailwind CSS"}),", ",(0,s.jsx)(t.a,{href:"https://postcss.org/",children:"PostCSS"}),", and ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/autoprefixer",children:"autoprefixer"})," to simplify styling the app"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/uuid",children:"uuid"})," to generate unique IDs for each message"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"To install the required packages, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm install --save vue-advanced-chat tailwindcss@latest postcss@latest autoprefixer@latest uuid @types/uuid \n"})}),"\n",(0,s.jsxs)(t.p,{children:["This command adds vue-advanced-chat, Tailwind, and PostCSS as dependencies in the ",(0,s.jsx)(t.code,{children:"package.json"})," file."]}),"\n",(0,s.jsxs)(t.p,{children:["Now that you\u2019ve set up the project and installed the dependencies, check that it builds as expected by running ",(0,s.jsx)(t.code,{children:"npm run dev"}),". The app should build and provide an address to view it in a web browser. Load it, and you should see the default welcome screen:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"the Vite + Vue welcome page displays both logos and provides links to create-vue and Volar.",src:n(71406).Z+"",width:"431",height:"322"})}),"\n",(0,s.jsxs)(t.p,{children:["Next, generate the ",(0,s.jsx)(t.code,{children:"tailwind.config.js"})," and ",(0,s.jsx)(t.code,{children:"postcss.config.js"})," files using the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npx tailwindcss init -p\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Edit the ",(0,s.jsx)(t.code,{children:"tailwind.config.js"})," file and add the paths to your template files in the ",(0,s.jsx)(t.code,{children:"content"})," property:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'// tailwind.config.js\r\nexport default {\r\n  content: ["./index.html", "./src/**/*. {vue,js,ts,jsx,tsx}"],\r\n  theme: {\r\n    extend: {},\r\n  },\r\n  plugins: [],\r\n};\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Then, replace the content of ",(0,s.jsx)(t.code,{children:"style.css"})," file in the ",(0,s.jsx)(t.code,{children:"src"})," folder with the following code to import Tailwind CSS using the ",(0,s.jsx)(t.code,{children:"@tailwind"})," directives:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then, import the ",(0,s.jsx)(t.code,{children:"styles.css"})," file in the ",(0,s.jsx)(t.code,{children:"main.ts"})," file and remove the unused import:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'import { createApp } from "vue";\r\nimport App from "./App.vue";\r\nimport "./styles.css"; // import Tailwind CSS\r\n\r\ncreateApp(App).mount("#app");\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Finally, copy the images from the ",(0,s.jsx)(t.a,{href:"https://www.kaggle.com/datasets/paramaggarwal/fashion-product-images-small",children:"dataset"})," you downloaded in the first part of this series. Using your preferred CLI or file manager, create a new folder called ",(0,s.jsx)(t.code,{children:"Images"})," inside the project\u2019s ",(0,s.jsx)(t.code,{children:"public"})," folder, and then copy all the images from the dataset\u2019s ",(0,s.jsx)(t.code,{children:"images_compressed"})," folder to the ",(0,s.jsx)(t.code,{children:"Images"})," folder. The stylist bot will use these images to make recommendations based on the image IDs it returns."]}),"\n",(0,s.jsx)(t.p,{children:"The result should look like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"virtual-stylist-chat\r\n\u251c\u2500\u2500 index.html\r\n\u251c\u2500\u2500 package.json\r\n\u251c\u2500\u2500 public\r\n\u2502   \u251c\u2500\u2500 favicon.svg\r\n\u2502   \u2514\u2500\u2500 images\r\n\u2502       \u251c\u2500\u2500 10001.jpg\r\n\u2502       \u251c\u2500\u2500 10002.jpg\r\n\u2502       \u251c\u2500\u2500 10003.jpg\r\n\u2502       \u251c\u2500\u2500 ...\r\n\u2502       \u251c\u2500\u2500 19998.jpg\r\n\u2502       \u251c\u2500\u2500 19999.jpg\r\n\u2502       \u2514\u2500\u2500 20000.jpg\r\n\u251c\u2500\u2500 src\r\n\u2502   \u251c\u2500\u2500 App.vue\r\n\u2502   \u251c\u2500\u2500 assets\r\n\u2502   \u2502   \u2514\u2500\u2500 logo.svg\r\n\u2502   \u251c\u2500\u2500 components\r\n\u2502   \u2502   \u2514\u2500\u2500 HelloWorld.vue\r\n\u2502   \u251c\u2500\u2500 main.ts\r\n\u2502   \u251c\u2500\u2500 styles.css\r\n\u2502   \u251c\u2500\u2500 tailwind.config.js\r\n\u2502   \u251c\u2500\u2500 postcss.config.js\r\n\u2502   \u2514\u2500\u2500 shims-vue.d.ts\r\n\u2514\u2500\u2500 tsconfig.json\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now, it\u2019s time to start coding the chatbot interface."}),"\n",(0,s.jsx)(t.h4,{id:"coding-the-chatbot-interface",children:"Coding the Chatbot Interface"}),"\n",(0,s.jsx)(t.p,{children:"In this section, you\u2019ll prepare your virtual stylist app\u2019s chatbot interface. You\u2019ll use Vue to create the main components, including the header, the footer, the chat window, and the image upload button. Then, you\u2019ll use the vue-advanced-chat component to create the chat messages, input, and options."}),"\n",(0,s.jsx)(t.p,{children:"To keep things simple, we\u2019ll link to the code of non-essential components like the header and footer. Since these aren\u2019t critical to how the app functions, feel free to copy and paste them into your codebase."}),"\n",(0,s.jsx)(t.h5,{id:"header-and-footer",children:"Header and Footer"}),"\n",(0,s.jsxs)(t.p,{children:["Start by creating two files in the ",(0,s.jsx)(t.code,{children:"src/components"})," folder: ",(0,s.jsx)(t.code,{children:"Header.vue"})," and ",(0,s.jsx)(t.code,{children:"Footer.vue"}),". Next, copy the code from the ",(0,s.jsx)(t.a,{href:"https://github.com/contentlab-io/Microsoft-Creating-a-Virtual-Stylist-Chatbot/blob/main/stylist_frontend/src/components/Header.vue",children:"header"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/contentlab-io/Microsoft-Creating-a-Virtual-Stylist-Chatbot/blob/main/stylist_frontend/src/components/Footer.vue",children:"footer"})," files in the GitHub repository into the files you just created."]}),"\n",(0,s.jsx)(t.p,{children:"These files are simple Vue components that use HTML and CSS to create a stylish header and footer for the app. If you\u2019d like to customize them, replace the logo image link in the header with a link to an image of your own."}),"\n",(0,s.jsx)(t.p,{children:"Now, it\u2019s time to dive into the chat interface that makes this app work."}),"\n",(0,s.jsx)(t.h5,{id:"creating-the-chat-window-component",children:"Creating the Chat Window Component"}),"\n",(0,s.jsxs)(t.p,{children:["The chat window component displays the messages between the user and the stylist bot. To start, create a new file called ",(0,s.jsx)(t.code,{children:"ChatWindow.vue"})," inside the project\u2019s src/components folder. Then, add the following code to it:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'<template>\r\n  <div class="chat-window h-screen">\r\n    <vue-advanced-chat\r\n      .messages="messages"\r\n      .options="options"\r\n      .rooms="[{ roomId: \'main\', roomName: \'Stylist Chat\', avatar: \'/images/logo.svg\', users: [currentUser]}]"\r\n      :rooms-list-opened="false"\r\n      :rooms-loaded="true"\r\n      :messages-loaded="true"\r\n      :current-user-id="currentUser._id"\r\n      accepted-files=".png, .jpg, .jpeg"\r\n      show-audio="false"\r\n      @send-message="onInputSubmit"\r\n      .message-actions="[{\r\n        label: \'Send\',\r\n        action: (message: Message) => {\r\n          console.log(\'Send message \' + message.content);\r\n        },\r\n      }]"\r\n      v-bind="{\r\n        \'current-user-id\': currentUser?._id || \'\',\r\n        \'room-info-enabled\': false,\r\n       }"\r\n\r\n       />\r\n  </div>\r\n</template>\r\n\r\n<script lang="ts">\r\nimport { defineComponent, ref, Ref } from "vue";\r\nimport { VueAdvancedChat, Message, register, RoomUser } from "vue-advanced-chat";\r\nregister();\r\nimport { v4 as uuidv4 } from "uuid";\r\n\r\nfunction toTimeString(date: Date): string {\r\n  let month = date.toLocaleString(\'default\', { month: \'short\' });\r\n  return `${date.getFullYear()}-${month}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;\r\n}\r\n\r\nexport default defineComponent({\r\n  name: "ChatWindow",\r\n  components: {\r\n    VueAdvancedChat,\r\n  },\r\n  setup() {\r\n    // Define the current user, the messages, and the options for the chat component\r\n    const currentUser: Ref<RoomUser> = ref({\r\n      _id: "user",\r\n      username: "User",\r\n      avatar: "",\r\n      status: { state: "online", lastChanged: new Date().toDateString()},\r\n    });\r\n    const messages: Ref<Array<Message>> = ref([]);\r\n    const options = ref({\r\n      enableVoiceMessages: false,\r\n      enableReactions: false,\r\n      enableSeenBy: false,\r\n      enableLinkPreview: false,\r\n      enableUploads: true,\r\n      enableAttachments: false,\r\n      enableReply: true,\r\n      enableEdit: false,\r\n      enableDelete: false,\r\n      enableGroup: false,\r\n      enableSearch: false,\r\n      enableOptions: false,\r\n      enableScrollToBottom: true,\r\n      enableScrollToTop: false,\r\n      enableLoadMore: false,\r\n      enableComposer: true,\r\n      enableInput: true,\r\n      enableSendButton: true,\r\n      enableEmojis: false,\r\n      enableRecording: false,\r\n      enableMarkdown: true,\r\n      enableTypingIndicator: true,\r\n      enableOnlinePresence: false,\r\n      enableCustomTheme: true,\r\n      enableRooms: false,\r\n      customTheme: {\r\n        primaryColor: "#333333",\r\n        secondaryColor: "#f0f0f0",\r\n        tertiaryColor: "#ffffff",\r\n        quaternaryColor: "#e0e0e0",\r\n        quinaryColor: "#999999",\r\n        senaryColor: "#666666",\r\n        septenaryColor: "#333333",\r\n        octonaryColor: "#f0f0f0",\r\n        nonaryColor: "#ffffff",\r\n        denaryColor: "#e0e0e0",\r\n      },\r\n    });\r\n\r\n    // Update the image preview in the chat message after it\'s uploaded\r\n    const updateMessageImage = (newMessage: Message, url: string) => {\r\n      const existingMessage = messages.value.find(m => m._id === newMessage._id);\r\n      // Update the URL of the first message file\r\n      const message = existingMessage || newMessage;\r\n\r\n      if(message && message.files && message.files.length > 0) {\r\n        message.files[0].url = url;\r\n        const existingMessages = messages.value.filter(m => m._id !== message._id);\r\n        //set a new message ID to prevent file from being overwritten\r\n        message._id = uuidv4();\r\n        messages.value = [...existingMessages, message];\r\n      }\r\n    }\r\n\r\n    const onInputSubmit = async (event: CustomEvent) => {\r\n      // Create a new message object with the content and the current user\r\n      console.log("called!")\r\n      let content = event.detail[0].content;\r\n      let files = event.detail[0].files;\r\n      const newMessage: Message = {\r\n        // generate uuid\r\n        _id: uuidv4(),\r\n        content,\r\n        senderId: currentUser.value._id,\r\n        date: new Date().toLocaleString(\'default\', { year: \'numeric\', month: \'short\', day: \'numeric\' }),\r\n        timestamp: toTimeString(new Date()),\r\n      };\r\n\r\n      if(files) {\r\n        newMessage.files = [...files.map((file: any) => {\r\n          var messageFile = {\r\n            name: file.name,\r\n            size: file.size,\r\n            type: file.type,\r\n            url: file.url || file.localUrl, \r\n            extension: file.extension,\r\n            preview: file.localUrl,\r\n          }\r\n          const reader = new FileReader();\r\n          reader.readAsDataURL(file.blob);\r\n\r\n          reader.onload = () => { \r\n            // Get the base64-encoded string from the reader result \r\n            messageFile.url = reader.result as string;\r\n            // reload messages so UI updates\r\n            messages.value = [...messages.value];\r\n            updateMessageImage(newMessage, messageFile.url!);\r\n            callBackendFunction(content, reader.result as string);\r\n          };\r\n          return messageFile;\r\n        })];\r\n      } else {\r\n\r\n        // Push the new message to the messages array\r\n        messages.value = [...messages.value, newMessage];\r\n        // Call the backend function to get the response from the stylist bot\r\n        callBackendFunction(content, "");\r\n      }\r\n    };\r\n\r\n    const callBackendFunction = async (prompt: string, image: string) => {\r\n      // Get the previous prompts and responses from the messages array\r\n      const context = messages.value\r\n        .filter((message) => message.content || message.replyMessage)\r\n        .map((message) => ({\r\n          prompt: message.content,\r\n          response: message.replyMessage,\r\n        }));\r\n      // Create a JSON object with the prompt, the image, and the context\r\n      const data = {\r\n        prompt,\r\n        image,\r\n        context,\r\n      };\r\n      // Send a POST request to the backend function URL with the data\r\n      const response = await fetch("<backend function URL>", {\r\n        method: \'POST\',\r\n        headers: {\r\n          \'Content-Type\': \'application/json\',\r\n        },\r\n        body: JSON.stringify(data),\r\n      });\r\n      // Get the response data from the fetch response\r\n      const responseData = await response.json();\r\n      // Create a new message object with the response data and the stylist bot\r\n      const newMessage: Message = {\r\n        _id: uuidv4(),\r\n        content: responseData.response,\r\n        files: responseData.images,\r\n        senderId: "stylist-bot",\r\n        date: new Date().toLocaleString(\'default\', { year: \'numeric\', month: \'short\', day: \'numeric\' }),\r\n        timestamp: toTimeString(new Date()),\r\n      };\r\n      // Push the new message to the messages array\r\n      messages.value = [...messages.value, newMessage];\r\n    };\r\n\r\n    // Return the current user, the messages, the options, and the event handlers\r\n    return {\r\n      currentUser,\r\n      messages,\r\n      options,\r\n      onInputSubmit,\r\n    };\r\n  },\r\n\r\n  mounted() {\r\n    // Add a welcome message from the stylist bot when the component is mounted\r\n    this.messages = [...this.messages, { _id: "stylist-bot", content: "Hello! I\'m your virtual stylist chatbot. You can ask me for fashion advice, recommendations, and more. You can also upload images of clothing items and accessories to get personalized suggestions. How can I help you today?", senderId: "stylist-bot", date: new Date().toTimeString()}];\r\n  },\r\n});\r\n\r\n<\/script>\r\n\r\n<style scoped>\r\n.chat-window {\r\n  @apply h-screen flex-1 overflow-y-auto;\r\n}\r\n</style> \n'})}),"\n",(0,s.jsx)(t.p,{children:"This code defines a chat window component that uses the vue-advanced-chat component to display the messages between the user and the stylist bot. It also defines some data and methods to handle the chat logic, such as the current user, messages, options, input submit event, file upload event, and the back-end function call."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"currentUser"})," and ",(0,s.jsx)(t.code,{children:"messages"})," are reactive objects that store information about the chat participant and chat history. The ",(0,s.jsx)(t.code,{children:"currentUser"})," object represents the app user while the ",(0,s.jsx)(t.code,{children:"messages"})," array contains the Message objects with the following properties:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"_id"}),"\u2014A unique identifier for the message"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"content"}),"\u2014The text content of the message (optional)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"files"}),"\u2014Contains any files attached to the image (optional)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"senderId"}),"\u2014The ID of the message sender"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"date"}),"\u2014The date of the message"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"timestamp"}),"\u2014The time and date that appear with every message"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"options"})," object contains the configuration options for the vue-advanced-chat component. It allows you to enable or disable various features of the chat interface, including:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Voice messages"}),"\n",(0,s.jsx)(t.li,{children:"Reactions"}),"\n",(0,s.jsx)(t.li,{children:"Seen by"}),"\n",(0,s.jsx)(t.li,{children:"Link preview"}),"\n",(0,s.jsx)(t.li,{children:"Uploads and attachments"}),"\n",(0,s.jsx)(t.li,{children:"Reply and send button"}),"\n",(0,s.jsx)(t.li,{children:"Edit and delete"}),"\n",(0,s.jsx)(t.li,{children:"Group and search"}),"\n",(0,s.jsx)(t.li,{children:"Options"}),"\n",(0,s.jsx)(t.li,{children:"Scroll to bottom and scroll to top"}),"\n",(0,s.jsx)(t.li,{children:"Load more"}),"\n",(0,s.jsx)(t.li,{children:"Composer"}),"\n",(0,s.jsx)(t.li,{children:"Input"}),"\n",(0,s.jsx)(t.li,{children:"Emojis"}),"\n",(0,s.jsx)(t.li,{children:"Recording"}),"\n",(0,s.jsx)(t.li,{children:"Markdown"}),"\n",(0,s.jsx)(t.li,{children:"Typing indicator"}),"\n",(0,s.jsx)(t.li,{children:"Online presence/status"}),"\n",(0,s.jsx)(t.li,{children:"Custom theme"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can learn more about the options and their meanings in the ",(0,s.jsx)(t.a,{href:"https://github.com/advanced-chat/vue-advanced-chat",children:"documentation"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"onInputSubmit"})," method is the event handler for the input submit event. It\u2019s triggered when the user types a text message and presses the ",(0,s.jsx)(t.strong,{children:"Enter"})," key or clicks the ",(0,s.jsx)(t.strong,{children:"Send"})," button. This method creates a new message object with the text content and the current user, then pushes it to the messages array."]}),"\n",(0,s.jsx)(t.p,{children:"If the message contains an attached image file, the function loads it into a base64-encoded string, which is what the back-end Azure function expects to receive. Finally, it calls the back-end function to prompt a response from the stylist bot."}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"callBackendFunction"})," method calls the back-end Azure function to retrieve the stylist bot\u2019s reply. It takes the prompt and the image as parameters and sends a POST request to the back-end function URL with the data and the options. The data object contains the prompt, image, and context."]}),"\n",(0,s.jsxs)(t.p,{children:["The context is an array of objects that store the previous prompts and responses from the ",(0,s.jsx)(t.code,{children:"messages"})," array. The options object contains the headers for the request, such as the content type. The ",(0,s.jsx)(t.code,{children:"response"})," object contains the response data from the back-end function, including the response, images, and context."]}),"\n",(0,s.jsxs)(t.p,{children:["Finally, the function creates a new ",(0,s.jsx)(t.code,{children:"message"})," object with the response data and the stylist bot\u2019s ID, and then adds it to the ",(0,s.jsx)(t.code,{children:"messages"})," array."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Register for ",(0,s.jsx)(t.a,{href:"https://aka.ms/serverless-learn-live/ep2?ocid=buildia24_60days_blogs",children:"Episode 2"})," of the new learning series on ",(0,s.jsx)(t.strong,{children:"Intelligent Apps with Serverless on Azure"}),". Join the community along with MVPs, and the Azure Product Group on how to leverage AI with Serverless on Azure technologies\u2014Azure Functions and Azure Container Apps\u2014to build intelligent applications."]})}),"\n",(0,s.jsx)(t.h4,{id:"integrating-components-into-the-app-component",children:"Integrating Components into the App Component"}),"\n",(0,s.jsxs)(t.p,{children:["In this section, you\u2019ll integrate the components you just created into the ",(0,s.jsx)(t.code,{children:"src/App.vue"})," file\u2014your main app component. You\u2019ll import the header, footer, chat window, and image upload button components and display them in a simple layout."]}),"\n",(0,s.jsxs)(t.p,{children:["To start, open the ",(0,s.jsx)(t.code,{children:"App.vue"})," file in the project\u2019s ",(0,s.jsx)(t.code,{children:"src"})," folder and replace the existing code with the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'<template>\r\n  <div class="app">\r\n    <Header />\r\n    <div class="main">\r\n      <ChatWindow ref="chat" />\r\n      <ImageUploadButton :chat="chat" />\r\n    </div>\r\n    <Footer />\r\n  </div>\r\n</template>\r\n\r\n<script lang="ts">\r\nimport { defineComponent, ref } from "vue";\r\nimport Header from "./components/Header.vue";\r\nimport Footer from "./components/Footer.vue";\r\nimport ChatWindow from "./components/ChatWindow.vue";\r\n\r\nexport default defineComponent({\r\n  name: "App",\r\n  components: {\r\n    Header,\r\n    Footer,\r\n    ChatWindow\r\n  },\r\n  setup() {\r\n    // Define a ref for the chat component\r\n    const chat = ref(ChatWindow);\r\n    // Return the ref\r\n    return {\r\n      chat,\r\n    };\r\n  },\r\n});\r\n<\/script>\r\n<style>\r\n.app {\r\n  @apply min-h-screen flex flex-col;\r\n}\r\n\r\n.main {\r\n  @apply flex-1 flex flex-col;\r\n}\r\n</style>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This code defines the app component that uses the header, footer, chat window, and image upload button components. It also defines a ",(0,s.jsx)(t.a,{href:"https://vuejs.org/guide/essentials/template-refs",children:(0,s.jsx)(t.code,{children:"ref"})})," for the chat component and passes it as a prop to the image upload button component. This action allows the image upload button component to access the chat component\u2019s methods, such as ",(0,s.jsx)(t.code,{children:"onFileUpload"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"With that, you\u2019re ready to deploy!"}),"\n",(0,s.jsx)(t.h3,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(t.p,{children:"Part 2 of this series equipped you with the necessary skills to create a dynamic chatbot interface for your virtual stylist app. By setting up your project, installing dependencies, and coding the chatbot interface, you laid the groundwork for the final deployment and testing phase. Now, you\u2019re ready to see your virtual stylist in action."}),"\n",(0,s.jsx)(t.p,{children:"Jump to the third part of this series, where you\u2019ll deploy and test your Intelligent App."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},54060:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/6-2-1-dbbcc07a99683e80eea81967dd44fd7e.jpeg"},71406:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/6-2-2-7f17286af2d2ed6164e8f8d9cb4eaf1e.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(67294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);