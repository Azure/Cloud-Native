"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78345],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={date:"2023-09-18T09:00",slug:"demystifying-intelligent-applications",title:"1-1. Demystifying Intelligent Applications",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"This article explores the concept of intelligent applications for readers, providing a clear understanding of the role of AI capabilities in modern applications.",tags:["Fall-For-IA","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},r=void 0,s={permalink:"/Cloud-Native/30DaysOfIA/demystifying-intelligent-applications",source:"@site/blog-30daysofIA/2023-09-18/demystifying-intelligent-applications.md",title:"1-1. Demystifying Intelligent Applications",description:"This article explores the concept of intelligent applications for readers, providing a clear understanding of the role of AI capabilities in modern applications.",date:"2023-09-18T09:00:00.000Z",formattedDate:"September 18, 2023",tags:[{label:"Fall-For-IA",permalink:"/Cloud-Native/30DaysOfIA/tags/fall-for-ia"},{label:"30-days-of-IA",permalink:"/Cloud-Native/30DaysOfIA/tags/30-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/30DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/30DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/30DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/30DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30DaysOfIA/tags/github-actions"}],readingTime:7.25,hasTruncateMarker:!1,authors:[{name:"It's 30DaysOfIA",title:"FallForIA Content Team",url:"https://azure.github.io/Cloud-Native/Fall-For-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-ms-cloud-native.png",key:"cnteam"}],frontMatter:{date:"2023-09-18T09:00",slug:"demystifying-intelligent-applications",title:"1-1. Demystifying Intelligent Applications",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"This article explores the concept of intelligent applications for readers, providing a clear understanding of the role of AI capabilities in modern applications.",tags:["Fall-For-IA","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},prevItem:{title:"1-2. Harnessing the Power of Intelligent Apps",permalink:"/Cloud-Native/30DaysOfIA/harnessing-the-power-of-intelligent-apps"},nextItem:{title:"Kick-off #30DaysofIA \ud83c\udf42",permalink:"/Cloud-Native/30DaysOfIA/kick-off"}},l={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover:",id:"what-well-cover",level:2},{value:"Demystifying Intelligent Applications: Leveraging AI in App Development",id:"demystifying-intelligent-applications-leveraging-ai-in-app-development",level:2},{value:"The Three Categories of Intelligent Applications",id:"the-three-categories-of-intelligent-applications",level:2},{value:"Outcome-Based Apps: Intelligent Outcomes Drive Success",id:"outcome-based-apps-intelligent-outcomes-drive-success",level:2},{value:"Functionality-Based Apps: AI-Driven Features Enhance User Experiences",id:"functionality-based-apps-ai-driven-features-enhance-user-experiences",level:2},{value:"Feature-Based Apps: Integrating Advanced AI/ML Components",id:"feature-based-apps-integrating-advanced-aiml-components",level:2},{value:"Breaking Down the Role of AI in Intelligent Applications",id:"breaking-down-the-role-of-ai-in-intelligent-applications",level:2},{value:"Summary",id:"summary",level:2},{value:"Exercise",id:"exercise",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30daysofia/kick-off"}),(0,i.kt)("meta",{property:"og:type",content:"website"}),(0,i.kt)("meta",{property:"og:title",content:"**Fall For Intelligent Apps! \ud83c\udf42| Build AI Apps On Azure"}),(0,i.kt)("meta",{property:"og:description",content:"Explore the concept of intelligent applications for readers and gain a clear understanding of the role of AI capabilities in modern applications."}),(0,i.kt)("meta",{property:"og:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30daysofIA/demystifying-intelligent-applications"}),(0,i.kt)("meta",{name:"twitter:title",content:"**Fall For Intelligent Apps! \ud83c\udf42 | Build AI Apps On Azure"}),(0,i.kt)("meta",{name:"twitter:description",content:"1-1. Explore the concept of intelligent applications for readers and gain a clear understanding of the role of AI capabilities in modern applications."}),(0,i.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30daysofIA/demystifying-intelligent-applications"})),(0,i.kt)("p",null,"Let\u2019s start with understanding the ",(0,i.kt)("strong",{parentName:"p"},"power of intelligent applications"),". "),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What are intelligent applications?"),(0,i.kt)("li",{parentName:"ul"},"Categories of Intelligent Apps"),(0,i.kt)("li",{parentName:"ul"},"Breaking down the role of AI in intelligent apps")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A decorative header image for the blog",src:a(7735).Z,width:"624",height:"380"})),(0,i.kt)("h2",{id:"demystifying-intelligent-applications-leveraging-ai-in-app-development"},"Demystifying Intelligent Applications: Leveraging AI in App Development"),(0,i.kt)("p",null,"Until recent years, when you heard the term \u201cartificial intelligence\u201d (AI), you might have pictured autonomous robots from sci-fi films. Now, perhaps your mind jumps to big data and machine learning (ML). Maybe you\u2019re even thinking about the latest ChatGPT plugins and transformer architectures. Today, AI is more than these imaginations: it\u2019s a reality increasingly woven into our day-to-day routines through intelligent applications."),(0,i.kt)("p",null,"Intelligent apps combine cloud-scale compute, data, and predictive or generative AI. These applications help you automate tasks and make data-driven decisions, aiding in leveraging business intelligence to gain meaningful, practical outcomes.\u202f "),(0,i.kt)("p",null,"For developers, the AI landscape isn\u2019t an abstract complexity. It\u2019s a real, tangible opportunity for evolving traditional applications, making them \u201cintelligent,\u201d and delivering more value to users. And with tools like Azure Kubernetes Service, Azure Cosmos DB, and ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/solutions/ai/"},"Azure AI Services"),", stepping into the world of intelligent apps isn\u2019t a steep climb but a steady trek across a manageable learning curve."),(0,i.kt)("h2",{id:"the-three-categories-of-intelligent-applications"},"The Three Categories of Intelligent Applications"),(0,i.kt)("p",null,"Before we start building, it\u2019s critical to understand what makes an app \u201cintelligent.\u201d It\u2019s not a universal definition so much as an identifier for apps that fall into one or more of the three primary categories:\u202f "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Outcome-based")," \u2014 This designation represents the broadest category of intelligent apps, whose principal value for users is the intelligent outcomes they provide. These apps process data to provide insightful results that enhance decision-making or help with tasks like trend prediction, resource management, and customer relationship management.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Functionality-based")," \u2014 This type of intelligent app takes AI integration a degree further, integrating AI as a function of the app to create or process its outputs, enhancing the app\u2019s overall interactivity and usefulness.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Feature-based")," \u2014 This is the narrowest category, in which the app\u2019s AI/ML component is one of its core features and primary selling points"))),(0,i.kt)("p",null,"Let\u2019s dive more deeply into each category."),(0,i.kt)("h2",{id:"outcome-based-apps-intelligent-outcomes-drive-success"},"Outcome-Based Apps: Intelligent Outcomes Drive Success"),(0,i.kt)("p",null,"Outcome-based applications are all about the results provided to the user. They function beyond merely processing data to offer insightful outcomes that drive success."),(0,i.kt)("p",null,"Think of a personal fitness tracker app that uses AI to analyze the user\u2019s activity and provides actionable recommendations for achieving a goal. This type of app not only tracks your steps, sleep patterns, and heart rate but uses that data to provide you with personalized health advice. It helps you make informed lifestyle choices \u2014 the \u201cintelligent\u201d outcome."),(0,i.kt)("p",null,"Another example is a social media marketing app that uses AI for time-saving data analysis, task automation, and trend prediction. AI-based sentiment analysis can gauge customer perception while natural language processing (NLP) accurately interprets customer inquiries. Task automation can schedule posts and automate responses to common customer queries, and trend forecasting helps model and predict customer behavior to further personalize targeted promotional efforts. Building this type of intelligence into your apps provides cost-effective, actionable insights that guide sales and marketing strategies."),(0,i.kt)("h2",{id:"functionality-based-apps-ai-driven-features-enhance-user-experiences"},"Functionality-Based Apps: AI-Driven Features Enhance User Experiences"),(0,i.kt)("p",null,"As the name suggests, functionality-based applications integrate AI into how the app functions, but the end user drives the action and outcome. In this category of apps, AI takes a more active role in the user\u2019s interaction by allowing them to use AI-created or processed output. These apps leverage AI technologies like ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/cognitive-services/"},"Azure AI Services")," for NLP, image recognition, and pattern recognition to improve user experience."),(0,i.kt)("p",null,"Consider a music app that generates personalized playlists based on your listening habits or your smartphone\u2019s camera app that uses AI to recognize faces and optimize photo settings. Even more advanced are the language translation apps that translate text from one language to another and can even understand and maintain the context and subtleties of the conversation. They use NLP to accomplish these feats."),(0,i.kt)("p",null,"Similarly, consider the latest e-commerce apps, whose AI-driven functionalities enable customers to try on clothes virtually, significantly enhancing the online shopping experience."),(0,i.kt)("h2",{id:"feature-based-apps-integrating-advanced-aiml-components"},"Feature-Based Apps: Integrating Advanced AI/ML Components"),(0,i.kt)("p",null,"Finally, there are feature-based intelligent apps. These apps incorporate advanced AI/ML components like neural networks, internal large language models (LLMs), and sophisticated algorithms as core features for the user. In this type of application, AI is the primary feature for users to engage with and the primary selling point for the app."),(0,i.kt)("p",null,"Some examples of feature-based applications are chatbots and virtual agents built using ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-ca/products/bot-services/"},"Azure Bot Service"),". These robo-representatives use AI to provide more natural and human-like conversation, balancing superior efficiency with a friendlier, more personalized user experience. ",(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/edge/features/the-new-bing"},"The new Bing")," is a prime example of this implementation, integrating AI to give users a knowledgeable copilot for web searches."),(0,i.kt)("p",null,"Similarly, OpenAI\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://openai.com/chatgpt"},"ChatGPT")," allows users access to its state-of-the-art language models available as Microsoft\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/cognitive-services/openai-service/"},"Azure OpenAI Service"),". It leverages the power of the highly sophisticated GPT-3 LLM to perform tasks like drafting emails, writing code, answering general knowledge questions, translating between languages, and tutoring in numerous subjects."),(0,i.kt)("p",null,"These apps don\u2019t just use AI to provide outputs or improve user experiences: They push the boundaries of what\u2019s possible in app development by integrating AI/ML components."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Register")," for the live Q&A ",(0,i.kt)("a",{parentName:"p",href:"https://aka.ms/fallforIA/ATE"},"Ask The Expert session")," on ",(0,i.kt)("strong",{parentName:"p"},"September 26")," with the  Azure Functions product engineering team.")),(0,i.kt)("h2",{id:"breaking-down-the-role-of-ai-in-intelligent-applications"},"Breaking Down the Role of AI in Intelligent Applications"),(0,i.kt)("p",null,"Intelligent apps reflect the merging of traditional software design with the dynamic capabilities of AI. Let\u2019s explore how AI integrates and amplifies these applications."),(0,i.kt)("p",null,"At its core, AI augments applications with the capacity to self-learn and self-improve. It allows you to create applications that predict, react, and adapt to a constantly changing environment. In the power grid management system for a major city, an AI-infused application can forecast power usage trends, react to anomalies, and adapt to sudden demand surges, ensuring optimal efficiency and preventing blackouts."),(0,i.kt)("p",null,"But AI\u2019s role doesn\u2019t end at prediction or decision-making: It also automates tasks. In enterprise solutions, it has moved beyond simple automation to encompass intelligent process automation (IPA). In this arena, AI algorithms understand, learn, and then automate entire digital workflows. For developers, this is a fertile ground for creating applications that can dramatically improve the operational efficiency of businesses."),(0,i.kt)("p",null,"Even more, AI substantially aids in development tasks. For example, there\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/features/copilot"},"GitHub Copilot"),", an AI-powered code assistant that offers suggestions based not only on syntax but on development best practices and the intent of the code. AI has evolved from a tool you use to build apps to a partner that helps in creating them.\u202f "),(0,i.kt)("p",null,"Using AI to build intelligent apps isn\u2019t about throwing out what\u2019s worked before. It\u2019s about enhancing the components that have the most impact and achieve the best results. Incorporating AI in apps elevates their predictive abilities, streamlines complex tasks, and even aids in the development and creation process. When you build intelligent apps, you don\u2019t just address current problems. You anticipate future challenges and craft solutions that adapt over time."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"As developers the power of AI is in our hands, and it\u2019s our responsibility to harness its full potential. Each category tells the story of AI's transformative potential, from applications that deliver intelligent outcomes to those with AI capabilities to enrich the user experience and those pushing boundaries with advanced AI/ML technology."),(0,i.kt)("p",null,"Accessible and robust platforms like ",(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/ai"},"Azure AI")," can simplify the process of developing Intelligent Applications. Whether you\u2019re refining an existing app or building a new one, just entering the world of AI, or already familiar with the landscape, take a moment to appreciate the potential that AI integration offers. You\u2019re embracing this exciting frontier and shaping the future of app development.\u202f "),(0,i.kt)("h2",{id:"exercise"},"Exercise"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Complete")," the ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/fallforIA/csc"},"Cloud Skills Challenge")," to build on your apps and AI skills. "),(0,i.kt)("li",{parentName:"ul"},"Watch ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/learnlive-contoso-app-deconstructed-Ep1"},"Episode 01")," of the Serverless Edition Learn Live session to learn how to build an end-to-end intelligent app solution.")))}u.isMDXComponent=!0},7735:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blog-image1-693e85646492f1adfe66b034cce9edb0.png"}}]);