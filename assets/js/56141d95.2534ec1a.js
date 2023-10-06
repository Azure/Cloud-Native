"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74452],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(i),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return i?a.createElement(h,s(s({ref:t},p),{},{components:i})):a.createElement(h,s({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=i[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},68608:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=i(87462),n=(i(67294),i(3905));const r={date:"2023-09-19T09:00",slug:"harnessing-the-power-of-intelligent-apps",title:"1-2. Harnessing the Power of Intelligent Apps",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"This article explores real-world examples of how Intelligent Apps revolutionize logistics, retail, finance, manufacturing, tech, and medicine.",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},s=void 0,o={permalink:"/Cloud-Native/30DaysOfIA/harnessing-the-power-of-intelligent-apps",source:"@site/blog-30daysofIA/2023-09-19/harnessing-the-power-of-intelligent-apps.md",title:"1-2. Harnessing the Power of Intelligent Apps",description:"This article explores real-world examples of how Intelligent Apps revolutionize logistics, retail, finance, manufacturing, tech, and medicine.",date:"2023-09-19T09:00:00.000Z",formattedDate:"September 19, 2023",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30DaysOfIA/tags/build-intelligent-apps"},{label:"30-days-of-IA",permalink:"/Cloud-Native/30DaysOfIA/tags/30-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/30DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/30DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/30DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/30DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30DaysOfIA/tags/github-actions"}],readingTime:9.93,hasTruncateMarker:!1,authors:[{name:"It's 30DaysOfIA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-ms-cloud-native.png",key:"cnteam"}],frontMatter:{date:"2023-09-19T09:00",slug:"harnessing-the-power-of-intelligent-apps",title:"1-2. Harnessing the Power of Intelligent Apps",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"This article explores real-world examples of how Intelligent Apps revolutionize logistics, retail, finance, manufacturing, tech, and medicine.",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},prevItem:{title:"1-3. Reimagine App Development with AI",permalink:"/Cloud-Native/30DaysOfIA/reimagine-app-development-with-ai"},nextItem:{title:"1-1. Demystifying Intelligent Applications",permalink:"/Cloud-Native/30DaysOfIA/demystifying-intelligent-applications"}},l={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover:",id:"what-well-cover",level:2},{value:"Real-world Success Stories",id:"real-world-success-stories",level:2},{value:"Streamlining Operations: Intelligent Apps in the Airline Industry",id:"streamlining-operations-intelligent-apps-in-the-airline-industry",level:2},{value:"Boosting Customer Service: Intelligent Apps in the Retail Industry",id:"boosting-customer-service-intelligent-apps-in-the-retail-industry",level:2},{value:"Enhancing Cybersecurity: Intelligent Apps in Finance",id:"enhancing-cybersecurity-intelligent-apps-in-finance",level:2},{value:"Enhancing Efficiency: Intelligent Apps in Manufacturing",id:"enhancing-efficiency-intelligent-apps-in-manufacturing",level:2},{value:"Driving Innovation: Intelligent Apps in the Technology Industry",id:"driving-innovation-intelligent-apps-in-the-technology-industry",level:2},{value:"Revolutionizing Healthcare: Intelligent Apps in Medicine",id:"revolutionizing-healthcare-intelligent-apps-in-medicine",level:2},{value:"Summary",id:"summary",level:2},{value:"Exercise",id:"exercise",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30daysofia/harnessing-the-power-of-intelligent-apps"}),(0,n.kt)("meta",{property:"og:type",content:"website"}),(0,n.kt)("meta",{property:"og:title",content:"Build Intelligent Apps! | Build AI Apps On Azure"}),(0,n.kt)("meta",{property:"og:description",content:"Explore the concept of intelligent applications for readers and gain a clear understanding of the role of AI capabilities in modern applications."}),(0,n.kt)("meta",{property:"og:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,n.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30daysofIA/harnessing-the-power-of-intelligent-apps"}),(0,n.kt)("meta",{name:"twitter:title",content:"Build Intelligent Apps! | Build AI Apps On Azure"}),(0,n.kt)("meta",{name:"twitter:description",content:"1-2.Explore real-world examples of how Intelligent Apps revolutionize logistics, retail, finance, manufacturing, tech, and medicine."}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30daysofIA/harnessing-the-power-of-intelligent-apps"})),(0,n.kt)("p",null,"Explore real-world examples of how ",(0,n.kt)("strong",{parentName:"p"},"Intelligent Apps")," revolutionize ",(0,n.kt)("em",{parentName:"p"},"logistics"),", ",(0,n.kt)("em",{parentName:"p"},"retail"),", ",(0,n.kt)("em",{parentName:"p"},"finance"),", ",(0,n.kt)("em",{parentName:"p"},"manufacturing"),", ",(0,n.kt)("em",{parentName:"p"},"tech"),", and ",(0,n.kt)("em",{parentName:"p"},"medicine"),"."),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Real-world businesses revolutionizing operations with Intelligent Apps"),(0,n.kt)("li",{parentName:"ul"},"High level architecture for industry scenarios"),(0,n.kt)("li",{parentName:"ul"},"Implementation architecture overview across industries")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A decorative header image for the blog",src:i(70352).Z,width:"624",height:"380"})),(0,n.kt)("h2",{id:"real-world-success-stories"},"Real-world Success Stories"),(0,n.kt)("p",null,"According to IBM\u2019s 2022 ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/downloads/cas/GVAGA3JP?WT.mc_id=javascript-99907-ninarasi"},"Global AI Adoption Index"),", 35% of surveyed companies already use AI in their business, and 42% are exploring the idea. Organizations lagging behind the AI curve will quickly fall behind early adopters, who are already enjoying its benefits and boosting their investment in this technology."),(0,n.kt)("p",null,"In the first part of this series, ",(0,n.kt)("a",{parentName:"p",href:"https://azure.github.io/Cloud-Native/30daysofIA/demystifying-intelligent-applications"},"\u201cDemystifying Intelligent Applications: Leveraging AI in App Development,\u201d")," we explored how organizations can use AI-powered apps, or intelligent apps, to transform their operations, decision-making, and customer experiences, leaping ahead of the competition."),(0,n.kt)("p",null,"Intelligent apps significantly improve operational efficiency and customer engagement across industries like logistics, retail, finance, manufacturing, tech, and healthcare. In this article, we\u2019ll spotlight real-world success stories of businesses revolutionizing operations with intelligent apps using Microsoft Azure\u2019s app, data, and AI services."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Register")," for the ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/contoso-real-estate/learn-live?WT.mc_id=javascript-99907-ninarasi"},"Learn Live")," on ",(0,n.kt)("strong",{parentName:"p"},"September 21")," for a live guided experience with SMEs on how to build end-to-end solution architecture for real world implementation of Intelligent Apps.")),(0,n.kt)("h2",{id:"streamlining-operations-intelligent-apps-in-the-airline-industry"},"Streamlining Operations: Intelligent Apps in the Airline Industry"),(0,n.kt)("p",null,"Aerospace pioneer Airbus ",(0,n.kt)("a",{parentName:"p",href:"https://customers.microsoft.com/en-us/story/858578-airbus-defense-and-intelligence-azure?WT.mc_id=javascript-99907-ninarasi"},"leveraged intelligent apps to streamline its operations and innovate its services")," with two ground-breaking modernizations that use Azure apps, data, and AI services to reimagine pilot training and predict aircraft maintenance issues.\u202f "),(0,n.kt)("p",null,"Aviation technology\u2019s rapid evolution compelled Airbus to reconceive their approach to training pilots. The aircraft manufacturer created a pilot training chatbot by combining ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/ai-services?WT.mc_id=javascript-99907-ninarasi"},"Azure AI Services")," with ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/ai-services/speech-to-text?WT.mc_id=javascript-99907-ninarasi"},"Speech to Text")," and ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/ai-services/text-to-speech?WT.mc_id=javascript-99907-ninarasi"},"Text to Speech"),". The bot helps trainee pilots navigate over 6,000 pages of technical information. Pilots can ask questions verbally for quick answers, aiding their understanding of dense information and speeding up training. And when Airbus needed to accommodate its military consumers, deploying its Kubernetes cluster to a disconnected, \u201cair-gapped\u201d environment met the strict security requirements of military aircraft training."),(0,n.kt)("p",null,"A chatbot could look like the following diagram as Azure services work together to create a conversational experience. Its components could include security and governance, bot logic and user experience (UX), bot cognition and intelligence, data extract, transfer, and load (ETL) operations, quality assurance and enhancements, logging, and monitoring and reporting."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A diagram of a conversational experience enabled by Azure services",src:i(40042).Z,width:"624",height:"338"})),(0,n.kt)("p",null,"Airbus also used AI to improve its aircraft maintenance and safety. They deployed ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/ai-services/ai-anomaly-detector?WT.mc_id=javascript-99907-ninarasi"},"AI Anomaly Detector")," to gather and analyze telemetry data from multiple flights, enabling more profound insights into wear and tear on military aircraft operating in harsh conditions. This AI application helps Airbus better understand each airplane\u2019s health. Airbus can predict and fix potential problems before they occur, improving the aircraft\u2019s safety and operational readiness."),(0,n.kt)("p",null,"AI and Azure are changing how organizations like Airbus operate, even in strict, highly regulated markets with stringent security requirements. And by streamlining pilot training and staying ahead of aircraft maintenance, Airbus helps its military and commercial clients reliably deliver their goods across the globe, maintaining their critical supply chains."),(0,n.kt)("h2",{id:"boosting-customer-service-intelligent-apps-in-the-retail-industry"},"Boosting Customer Service: Intelligent Apps in the Retail Industry"),(0,n.kt)("p",null,"The retail industry has been among the first to adopt and benefit from intelligent apps. For example, the leading American used car retailer, CarMax, ",(0,n.kt)("a",{parentName:"p",href:"https://customers.microsoft.com/en-us/story/1501304071775762777-carmax-retailer-azure-openai-service?WT.mc_id=javascript-99907-ninarasi"},"uses intelligent apps to transform the car shopping experience"),"."),(0,n.kt)("p",null,"Before embracing AI, CarMax faced a significant challenge: Manually creating text summaries was time-consuming and labor-intensive. CarMax decided to leverage ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/ai-services/openai-service?WT.mc_id=javascript-99907-ninarasi"},"Azure OpenAI Service")," to automatically generate car research pages, offering customers valuable insights while enhancing the website\u2019s search engine rankings."),(0,n.kt)("p",null,"This AI-driven approach has significantly streamlined the process, achieving in a few months what would have taken years manually. Also, the AI system condenses thousands of customer reviews into a few readable sentences, offering potential buyers a quick overview of others\u2019 experiences."),(0,n.kt)("p",null,"CarMax has improved their customer experience while boosting operational efficiency through AI adoption. CarMax\u2019s editorial staff focuses on creating strategic, longer-form content with the time saved, enhancing productivity, and driving more website traffic."),(0,n.kt)("p",null,"CarMax\u2019s success story serves as a testament to the potential of intelligent apps in the retail industry."),(0,n.kt)("h2",{id:"enhancing-cybersecurity-intelligent-apps-in-finance"},"Enhancing Cybersecurity: Intelligent Apps in Finance"),(0,n.kt)("p",null,"Intelligent apps also impact the highly regulated financial services sector. Swift, a leading infrastructure provider for financial messaging services, ",(0,n.kt)("a",{parentName:"p",href:"https://customers.microsoft.com/en-us/story/1637929534319366070-swift-banking-capital-markets-azure-machine-learning?WT.mc_id=javascript-99907-ninarasi"},"uses intelligent apps to enhance decision-making and combat financial crime"),"."),(0,n.kt)("p",null,"The massive growth of cross-border transactions and instant payment networks led to a surge in financial fraud that can cost the industry hundreds of billions of dollars every year. So, Swift and Microsoft partnered to build an anomaly detection model using ",(0,n.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/federated-learning-with-azure-machine-learning-powering-privacy/ba-p/3824720"},"federated learning techniques")," with ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/machine-learning/"},"Azure Machine Learning")," and ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/solutions/confidential-compute/"},"Azure confidential computing"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/purview/?WT.mc_id=javascript-99907-ninarasi"},"Microsoft Purview")," helped govern data, as the federated learning method partially trained each model in a silo before aggregating them. This approach enabled Swift and Microsoft to develop a highly accurate model without copying or moving data from Swift members\u2019 secure locations, ensuring the highest level of security and privacy."),(0,n.kt)("p",null,"Financial organizations can now deploy this trained ML model to run a real-time fraud detection system, lowering the cost of financial fraud."),(0,n.kt)("p",null,"Organizations can deploy a fraud detection system like the following example on Microsoft Azure. The system ingests data from streams or storage, runs analytics, and uses ML to detect fraud and store results. It then alerts users and other systems to the security issue."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A diagram of an example fraud detection system",src:i(82481).Z,width:"624",height:"480"})),(0,n.kt)("p",null,"Swift provides the innovative model to its banking partners, who can share data to further train the model. Azure confidential computing securely runs new models on current data to accumulate insights, generating an ongoing learning cycle. This iterative approach strengthens the global detection of fraudulent financial transactions through an increasingly faster and more accurate model.\u202f "),(0,n.kt)("p",null,"The collaboration between Swift and Microsoft demonstrates how combining various Azure services creates Intelligent Apps to enhance decision-making in finance. These apps solve real problems at an unprecedented global scale.\u202f "),(0,n.kt)("h2",{id:"enhancing-efficiency-intelligent-apps-in-manufacturing"},"Enhancing Efficiency: Intelligent Apps in Manufacturing"),(0,n.kt)("p",null,"3M, known for Post-it Notes and other innovative products, ",(0,n.kt)("a",{parentName:"p",href:"https://customers.microsoft.com/en-us/story/1504342377134122633-3M-manufacturing-azure-machine-learning?WT.mc_id=javascript-99907-ninarasi"},"wielded the power of Intelligent Apps to standardize, automate, and accelerate its sales forecasting"),". The company needed a unified, automated approach to replace its multiple manual methods."),(0,n.kt)("p",null,"It adopted Azure Machine Learning and other Azure AI Services to develop, train, and implement 1,500 custom models for each region and division, replacing manual methods. This solution delivers timely finance, sales, and marketing insights while freeing teams from time-consuming manual data manipulation tasks."),(0,n.kt)("p",null,"3M used Azure Machine Learning, ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/machine-learning/automatedml/"},"automated machine learning")," (AutoML), and the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/solution-accelerator-many-models"},"Many Models Solution Accelerator")," to train and score numerous machine learning models in parallel. This approach significantly shortened the company\u2019s development cycle time."),(0,n.kt)("p",null,"Then, 3M integrated ",(0,n.kt)("a",{parentName:"p",href:"https://powerbi.microsoft.com/en-us/?WT.mc_id=javascript-99907-ninarasi"},"Microsoft Power BI")," into their solution to compile and visualize results more effectively. Executives now have an unbiased and unfiltered view of data for better decision-making. With its improved ability to forecast sales, 3M can focus on manufacturing the products it needs efficiently."),(0,n.kt)("p",null,"3M\u2019s success demonstrates how combining various Azure services can enhance efficiency in the manufacturing industry. These apps improve operational processes while enabling employees to focus on higher-level tasks. Strategic decisions are more targeted, and business conversations are more meaningful."),(0,n.kt)("h2",{id:"driving-innovation-intelligent-apps-in-the-technology-industry"},"Driving Innovation: Intelligent Apps in the Technology Industry"),(0,n.kt)("p",null,"As expected, the tech industry is at the forefront of leveraging Intelligent Apps to drive innovation. Elastic ",(0,n.kt)("a",{parentName:"p",href:"https://customers.microsoft.com/en-us/story/1653495116803202350-elastic-partner-professional-services-azure-openai-service?WT.mc_id=javascript-99907-ninarasi"},"saw an opportunity to use intelligent apps to optimize its search services and meet customer needs more effectively"),". The company built a managed, secure, and scalable solution for its customers, Elastic Cloud, by leveraging ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us?WT.mc_id=javascript-99907-ninarasi"},"Microsoft Azure"),"."),(0,n.kt)("p",null,"Elastic Cloud uses Azure Machine Learning and other Azure AI Services to automate many basic management tasks, such as backing up data, upgrading, and scaling deployments. This approach enables Elastic\u2019s customers to focus less on managing the software and more on serving their own clients. Customers can quickly deploy and manage Elastic Cloud on Kubernetes (ECK) using ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/kubernetes-service/?WT.mc_id=javascript-99907-ninarasi"},"Azure Kubernetes Service"),"."),(0,n.kt)("p",null,"As a result, Elastic\u2019s cloud business is growing twice as fast as its on-premises solutions. Enterprise search users have reported significant improvements in system availability and employee satisfaction."),(0,n.kt)("p",null,"Additionally, Elastic incorporated Azure OpenAI Service into its Elasticsearch Relevance Engine (ESRE), providing more relevant answers to search queries. ESRE enables text, vector, and hybrid search, offering a more effective and accurate response to queries."),(0,n.kt)("p",null,"Elastic\u2019s success story demonstrates how combining various Azure services can create intelligent Apps to drive innovation in the tech industry. These apps help improve operational processes and deliver better results quickly."),(0,n.kt)("h2",{id:"revolutionizing-healthcare-intelligent-apps-in-medicine"},"Revolutionizing Healthcare: Intelligent Apps in Medicine"),(0,n.kt)("p",null,"Intelligent apps also drive transformative changes in the healthcare sector. Cambridgeshire and Peterborough NHS Foundation Trust, a healthcare provider in the United Kingdom, gradually shifted their on-premises systems to the cloud using Azure, improving flexibility, and lowering costs. They needed a solution for their electronic patient record (EPR) system that integrates 23 years of data across multiple systems and formats."),(0,n.kt)("p",null,"The Trust used Microsoft Azure and ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/ai-services/cognitive-search?WT.mc_id=javascript-99907-ninarasi"},"Azure Cognitive Search"),", including semantic search for understanding intent and contexts and cognitive capabilities for extracting insights from data, to ",(0,n.kt)("a",{parentName:"p",href:"https://customers.microsoft.com/en-us/story/1612121636839251558-cpft-health-provider-azure-en-united-kingdom?WT.mc_id=javascript-99907-ninarasi"},"standardize and automate data management"),". This approach made legacy, archive, and live data more discoverable, saving clinicians\u2019 time. The Trust\u2019s solution searches through millions of clinical documents in seconds, even recognizing handwritten notes without needing a separate optical character recognition (OCR) solution to extract text from images (Azure Cognitive Search automatically does it). Clinicians can now uncover previously inaccessible insights, enabling them to offer more personalized care."),(0,n.kt)("p",null,"The Trust also used ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/category/integration/?WT.mc_id=javascript-99907-ninarasi"},"Integration Services")," tools such as ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/logic-apps/?WT.mc_id=javascript-99907-ninarasi"},"Azure Logic Apps")," to create workflows without writing code and ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/event-grid/?WT.mc_id=javascript-99907-ninarasi"},"Event Grid")," to connect Azure and third-party services through a ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber?WT.mc_id=javascript-99907-ninarasi"},"publisher-subscriber model"),". They switched on a live feed from their new EPR system to Azure to feed real-time information into other applications. Researchers can now access anonymized data to fuel medical innovations beyond the NHS."),(0,n.kt)("p",null,"The healthcare provider also invested heavily in Power BI\u2019s data visualization and analytical functions to sift through massive amounts of information. This level of data accessibility was previously impossible with their on-premises system. The new insights have significantly improved clinicians\u2019 efficiency for better patient care."),(0,n.kt)("p",null,"Data accessibility and security are critical in the healthcare industry. Intelligent Apps empower organizations like the Trust to revolutionize medical care. AI capabilities helped the Trust improve its operational efficiency and user experiences, setting a new standard for healthcare in the digital age."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"AI is driving transformation and real-world successes across industries. Intelligent apps are reshaping our world by streamlining operations in manufacturing and logistics, enhancing customer experience in the retail sector, improving decision-making in finance, driving innovation in tech, and revolutionizing healthcare."),(0,n.kt)("p",null,"As organizations adopt AI, they\u2019re innovating in ways that were once too difficult, expensive, or outright impossible. Companies that wait to embrace intelligent apps risk the chance of falling behind. By embracing intelligent apps and leveraging the capabilities of Azure, you can harness the transformative potential of AI to remain on the cutting edge of technology."),(0,n.kt)("h2",{id:"exercise"},"Exercise"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Complete")," the ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/fallforIA/apps-csc"},"Intelligent Apps Cloud Skills Challenge")," to build on your to build your fundamentals for AI app development."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Watch")," ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/learnlive-contoso-app-deconstructed-Ep1"},"Episode 01"),"\u202fof the Serverless Edition Learn Live session to learn how to build an end-to-end intelligent app solution."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Register")," for the ",(0,n.kt)("a",{parentName:"li",href:"https://info.microsoft.com/ww-landing-driving-business-value-by-modernizing-with-cloud-native-and-ai.html?lcid=en-us?WT.mc_id=javascript-99907-ninarasi"},"Intelligent Apps webinar")," with Microsoft and Forrester.")))}u.isMDXComponent=!0},70352:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/blog-image-1-dae57df4e529f1e89e0fe48a5932514e.png"},40042:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/blog-image-2-41c2cbd589f1701097f542c9660852e7.png"},82481:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/blog-image-3-122e6e30b6e98b3caf9d9de89bf5e9cf.png"}}]);