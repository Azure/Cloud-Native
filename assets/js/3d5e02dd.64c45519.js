"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={date:"2023-10-25T09:00",slug:"fortifying-cybersecurity-using-intelligent-apps-on-aks-1",title:"4-3. Fortifying Cybersecurity Using Intelligent Apps on AKS (1)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Discover how to enhance the security of our Intelligent Apps with Azure AI Anomaly Detector and Azure Kubernetes Service.",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},r=void 0,l={permalink:"/Cloud-Native/30DaysOfIA/fortifying-cybersecurity-using-intelligent-apps-on-aks-1",source:"@site/blog-30daysofIA/2023-10-25/fortifying-cybersecurity-using-intelligent-apps-on-aks-1.md",title:"4-3. Fortifying Cybersecurity Using Intelligent Apps on AKS (1)",description:"Discover how to enhance the security of our Intelligent Apps with Azure AI Anomaly Detector and Azure Kubernetes Service.",date:"2023-10-25T09:00:00.000Z",formattedDate:"October 25, 2023",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30DaysOfIA/tags/build-intelligent-apps"},{label:"30-days-of-IA",permalink:"/Cloud-Native/30DaysOfIA/tags/30-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/30DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/30DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/30DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/30DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30DaysOfIA/tags/github-actions"}],readingTime:12.8,hasTruncateMarker:!1,authors:[{name:"It's 30DaysOfIA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-ms-cloud-native.png",key:"cnteam"}],frontMatter:{date:"2023-10-25T09:00",slug:"fortifying-cybersecurity-using-intelligent-apps-on-aks-1",title:"4-3. Fortifying Cybersecurity Using Intelligent Apps on AKS (1)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Discover how to enhance the security of our Intelligent Apps with Azure AI Anomaly Detector and Azure Kubernetes Service.",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},prevItem:{title:"4-4. Fortifying Cybersecurity Using Intelligent Apps on AKS (2)",permalink:"/Cloud-Native/30DaysOfIA/fortifying-cybersecurity-using-intelligent-apps-on-aks-2"},nextItem:{title:"4-2. Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)",permalink:"/Cloud-Native/30DaysOfIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2"}},s={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover:",id:"what-well-cover",level:2},{value:"Fortifying Cybersecurity Using Intelligent Apps on AKS: Hands-on with AI-Powered Anomaly Detection (1)",id:"fortifying-cybersecurity-using-intelligent-apps-on-aks-hands-on-with-ai-powered-anomaly-detection-1",level:2},{value:"Practical Anomaly Detection",id:"practical-anomaly-detection",level:2},{value:"Building an Intelligent App for Real-time Network Traffic Anomaly Detection",id:"building-an-intelligent-app-for-real-time-network-traffic-anomaly-detection",level:3},{value:"Solution Architecture",id:"solution-architecture",level:3},{value:"Simulating Network Traffic Logs",id:"simulating-network-traffic-logs",level:3},{value:"Setting up Azure AI Anomaly Detector",id:"setting-up-azure-ai-anomaly-detector",level:3},{value:"Creating Our Intelligent App",id:"creating-our-intelligent-app",level:3},{value:"Exercise",id:"exercise",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30daysofia/fortifying-cybersecurity-using-intelligent-apps-on-aks-1"}),(0,i.kt)("meta",{property:"og:type",content:"website"}),(0,i.kt)("meta",{property:"og:title",content:"Build Intelligent Apps! | Build AI Apps On Azure"}),(0,i.kt)("meta",{property:"og:description",content:"Discover how to enhance the security of our Intelligent Apps with Azure AI Anomaly Detector and Azure Kubernetes Service."}),(0,i.kt)("meta",{property:"og:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.kt)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30daysofIA/fortifying-cybersecurity-using-intelligent-apps-on-aks-1"}),(0,i.kt)("meta",{name:"twitter:title",content:"Build Intelligent Apps! | Build AI Apps On Azure"}),(0,i.kt)("meta",{name:"twitter:description",content:"4-3. Fortifying Cybersecurity Using Intelligent Apps on AKS (1)",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30daysofIA/https://azure.github.io/Cloud-Native/30daysofIA/fortifying-cybersecurity-using-intelligent-apps-on-aks-1"})),(0,i.kt)("p",null,"In this article, discover how to enhance the security of our Intelligent Apps with ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/ai-services/anomaly-detector/overview?WT.mc_id=javascript-99907-ninarasi"},"Azure AI Anomaly Detector")," and ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/aks/?WT.mc_id=javascript-99907-ninarasi"},"Azure Kubernetes Service (AKS)"),". Follow along to learn how to implement real-time monitoring and anomaly detection of network traffic and make data-driven security decisions to protect against emerging cyber threats."),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Anomaly detection concepts"),(0,i.kt)("li",{parentName:"ul"},"Building an intelligent app for real-time network traffic anomaly detection"),(0,i.kt)("li",{parentName:"ul"},"Simulating network traffic logs"),(0,i.kt)("li",{parentName:"ul"},"Setup Azure AI Anomaly Detector"),(0,i.kt)("li",{parentName:"ul"},"Create the intelligent app")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of security and intelligent apps",src:n(62001).Z,width:"625",height:"380"})),(0,i.kt)("h2",{id:"fortifying-cybersecurity-using-intelligent-apps-on-aks-hands-on-with-ai-powered-anomaly-detection-1"},"Fortifying Cybersecurity Using Intelligent Apps on AKS: Hands-on with AI-Powered Anomaly Detection (1)"),(0,i.kt)("p",null,"Intelligent Apps bring together cutting-edge technologies, including machine learning (ML), data analytics, and predictive or generative AI. Their goal is to seamlessly integrate into the workflows of customers and employees, providing tangible benefits to end users."),(0,i.kt)("p",null,"There are three main categories of Intelligent Apps. Outcome-based apps focus on delivering intelligent results to support data-driven decision-making. Functionality-based apps employ predictive or generative AI to enhance specific features, such as personalized recommendations. Feature-based apps use neural networks and advanced AI, such as large language models (LLMs), instead of traditional, procedural methods."),(0,i.kt)("p",null,"In today\u2019s data-rich tech landscape, cybersecurity places significant importance on anomaly detection. Organizations deal with vast amounts of data, so identifying unusual patterns is vital for early threat detection. Anomaly detection using ML and AI-driven algorithms can uncover subtle irregularities that might evade traditional rule-based analysis."),(0,i.kt)("p",null,"Detecting these anomalies, especially in real-time data streams, aids in pinpointing potential cyber threats. The faster we spot an anomaly, the earlier we can respond to it, minimizing the potential impact of attacks. AI excels at these tasks, as it can analyze large data streams and recognize subtle deviations that might signify threats. When integrated into Intelligent Apps, AI-driven anomaly detection identifies issues and sends alerts to facilitate responses."),(0,i.kt)("p",null,"In this hands-on tutorial, we\u2019ll explore the capabilities of ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/ai-services/ai-anomaly-detector?WT.mc_id=javascript-99907-ninarasi"},"Azure AI Anomaly Detector")," and other tools by an Intelligent App that performs real-time anomaly detection on network traffic data. First, we\u2019ll set up Azure AI Anomaly Detector, then integrate it into a Python application using a real-time data feed from Apache Kafka. When you finish this guide, you\u2019ll have created a powerful application that detects potential cyber threats in real time."),(0,i.kt)("h2",{id:"practical-anomaly-detection"},"Practical Anomaly Detection"),(0,i.kt)("p",null,"Anomaly detection identifies patterns that deviate significantly from the norm. These irregularities might signal rare events, unusual occurrences, fraud, or system errors."),(0,i.kt)("p",null,"There are numerous types of anomalies. Point anomalies are single data points that differ significantly from the rest, often having unusually high or low values. Contextual anomalies show up only when considering the surrounding data points. For instance, a sudden drop in website traffic during a major holiday would be a contextual anomaly."),(0,i.kt)("p",null,"Collective anomalies involve a group of data points that, as a group, deviate from the expected pattern. During a coordinated distributed denial-of-service (DDoS) attack, attackers gradually increase request rates, evading traditional detection because no individual data point stands out. However, the trend over time forms a visible collective anomaly."),(0,i.kt)("p",null,"The most common anomaly detection techniques employ statistics. They establish thresholds based on measures like mean and standard deviation to spot outliers. Similarly, time series analysis detects irregular data point sequences over time."),(0,i.kt)("p",null,"ML approaches are now becoming commonplace. We use ML algorithms to learn the typical behavior of datasets, then flag points that differ. These methods include clustering, where anomalies lie outside identified clusters, and classification, where algorithms label data points as normal or anomalous using trained models."),(0,i.kt)("p",null,"ML models excel with large data volumes and can adapt through continuous training as data patterns change. Rule-based approaches may miss certain anomalies that an ML algorithm will detect, as ML can grasp intricate relationships and subtle data deviations."),(0,i.kt)("p",null,"This tutorial employs Azure AI Anomaly Detector, which leverages ML to identify anomalies in real-time data feeds. We send time series data to AI Anomaly Detector, which learns from historical data to flag potentially anomalous data."),(0,i.kt)("p",null,"Azure AI Anomaly Detector brings two main benefits. Its powerful built-in algorithm reduces the burden on developers and data scientists to create their own models. Additionally, it offers cloud-native perks like high availability and autoscaling \u2014 critical for monitoring industrial or financial systems where detection downtime poses severe risks."),(0,i.kt)("h3",{id:"building-an-intelligent-app-for-real-time-network-traffic-anomaly-detection"},"Building an Intelligent App for Real-time Network Traffic Anomaly Detection"),(0,i.kt)("p",null,"We start by building an Intelligent App that ingests network data from Apache Kafka and uses AI Anomaly Detector to identify abnormalities and record them in a file."),(0,i.kt)("p",null,"Next, we set up a Python script to read data from a CSV file and periodically add this data to a Kafka topic. (This simulates a real-time feed of network traffic logs.) Then, we build our Intelligent App to process this data."),(0,i.kt)("p",null,"To follow this tutorial, you need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access to a code editor"),(0,i.kt)("li",{parentName:"ul"},"Python 3 installed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kafka.apache.org/quickstart"},"Kafka installed and running")),(0,i.kt)("li",{parentName:"ul"},"A Microsoft Azure account"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/contentlab-io/Microsoft-Fortifying-Cybersecurity-Using-Intelligent-Apps"},"Project code"))),(0,i.kt)("h3",{id:"solution-architecture"},"Solution Architecture"),(0,i.kt)("p",null,"The image below shows the architecture of the solution we\u2019re aiming for in this article."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of the solution being discussed in this article",src:n(65212).Z,width:"586",height:"333"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Join the Azure team at ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://aka.ms/aks-day"},"KubeCon and Azure Day"))," in Chicago on ",(0,i.kt)("strong",{parentName:"p"},"November 6, 2023"),". The Azure Product Engineering team along with the Cloud Advocates team will be there to dive deep with you on developing intelligent apps with Azure Kubernetes Service.")),(0,i.kt)("h3",{id:"simulating-network-traffic-logs"},"Simulating Network Traffic Logs"),(0,i.kt)("p",null,"Create a new folder named ",(0,i.kt)("inlineCode",{parentName:"p"},"anomaly_detection")," on your computer. Within this folder, create a Python file named ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka_producer.py"),"."),(0,i.kt)("p",null,"Ensure the ",(0,i.kt)("inlineCode",{parentName:"p"},"confluent-kafka")," library is installed using pip:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install confluent-kafka\n")),(0,i.kt)("p",null,"Next, open the ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka_producer.py")," file in your preferred code editor and import the necessary libraries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import csv\nimport json\nimport time\nimport random\nfrom confluent_kafka import Producer\n")),(0,i.kt)("p",null,"Then, define the Kafka broker and topic (effectively a queue) we\u2019ll be using. Remember the topic name, which we\u2019ll use later when consuming the data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kafka_broker = 'localhost:9092'\nkafka_topic = 'aws-cloudwatch-network'\n")),(0,i.kt)("p",null,"If you\u2019re running Kafka locally, the default address is usually ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:9092"),". If using a non-local Kafka deployment, replace the address with your Kafka instance\u2019s broker address(es)."),(0,i.kt)("p",null,"Now, we initialize the Kafka producer using the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"producer_config = {\n    'bootstrap.servers': kafka_broker\n}\nproducer = Producer(producer_config)\n")),(0,i.kt)("p",null,"We then create the function to send data to Kafka."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"def send_to_kafka(data):\n    producer.produce(kafka_topic, key=None, value=data)\n    producer.flush()\n")),(0,i.kt)("p",null,"Finally, we can add code to iterate through the CSV file and convert the data into a JSON object. We\u2019ll send this data to Kafka using the ",(0,i.kt)("inlineCode",{parentName:"p"},"send_to_kafka")," function and introduce a brief delay between rows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"with open('data/sample_network_data.csv', 'r') as csv_file:\n    csv_reader = csv.DictReader(csv_file)\n    for index, row in enumerate(csv_reader, start=1):\n        json_data = json.dumps(row)\n        print(json_data)\n        send_to_kafka(json_data.encode('utf-8'))\n        time.sleep(1)\n")),(0,i.kt)("p",null,"Finally, close the Kafka producer when finished:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"producer.close()\n")),(0,i.kt)("p",null,"The CSV file containing the sample network data is named ",(0,i.kt)("inlineCode",{parentName:"p"},"sample_network_data.csv"),". It displays rows for every five minutes, showing bytes transferred into the network. Here\u2019s an example of the file\u2019s data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"timestamp,value\n2014-03-01 17:36:00,42.0\n2014-03-01 17:41:00,94.8\n2014-03-01 17:46:00,42.0\n2014-03-01 17:51:00,68.4\n2014-03-01 17:56:00,68.4\n2014-03-01 18:01:00,86.4\n2014-03-01 18:06:00,68.4\n2014-03-01 18:11:00,42.0\n2014-03-01 18:16:00,112.8\n")),(0,i.kt)("p",null,"Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"anomaly_detection")," folder, ensure the CSV file is inside a subfolder named ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),". We\u2019re now ready to run the script. Make sure Kafka is running, open a terminal window, and navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"anomaly_detection")," folder. Run the script using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python kafka_producer.py\n")),(0,i.kt)("p",null,"The script will read data from the CSV file and send it to the specified Kafka topic. If functioning properly, we\u2019ll see the JSON version of CSV rows in the output:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of script",src:n(11630).Z,width:"601",height:"199"})),(0,i.kt)("p",null,"Pause the script for now. We\u2019ll restart it later. In the next section, we\u2019ll explore consuming this data and using AI Anomaly Detector."),(0,i.kt)("h3",{id:"setting-up-azure-ai-anomaly-detector"},"Setting up Azure AI Anomaly Detector"),(0,i.kt)("p",null,"Navigate to the Azure portal and log in using your account credentials. Search for \u201cAnomaly Detector\u201d and click ",(0,i.kt)("strong",{parentName:"p"},"Anomaly detectors")," under ",(0,i.kt)("strong",{parentName:"p"},"Services"),"."),(0,i.kt)("p",null,"To create a new AI Anomaly Detector instance, click ",(0,i.kt)("strong",{parentName:"p"},"Create anomaly detector")," and follow the setup wizard."),(0,i.kt)("p",null,"First, we need to choose a resource group to help organize our resources. For this project, let\u2019s create a new one named \u201cAnomalyDetectionRG.\u201d"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of Anomaly Detector setup",src:n(13434).Z,width:"602",height:"485"})),(0,i.kt)("p",null,"Now, name your AI Anomaly Detector instance. This demonstration uses \u201cAnomalyDetectionInstance,\u201d but your name should be unique. Select the Free ",(0,i.kt)("strong",{parentName:"p"},"F0")," pricing tier, and leave the other settings as default. Click ",(0,i.kt)("strong",{parentName:"p"},"Review + create"),", and ensure the information matches."),(0,i.kt)("p",null,"Finally, click ",(0,i.kt)("strong",{parentName:"p"},"Create")," to initiate the creation process for the new instance. Azure will begin provisioning the resources according to our configuration. After this, you\u2019ll receive a notification confirming your instance\u2019s successful creation."),(0,i.kt)("p",null,"Once deployed, click ",(0,i.kt)("strong",{parentName:"p"},"Go to resource"),". Here, you\u2019ll find the API endpoint URL and access keys necessary for making calls to the AI Anomaly Detector in our Python script."),(0,i.kt)("p",null,"Access the credentials by selecting ",(0,i.kt)("strong",{parentName:"p"},"Keys and Endpoint")," (under ",(0,i.kt)("strong",{parentName:"p"},"Resource Management"),") in the sidebar. This page contains two keys: the region and endpoint URL. Note the first key and the endpoint URL to use in the next section."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of Anomaly Detection Instance Keys and Endpoints",src:n(23337).Z,width:"625",height:"353"})),(0,i.kt)("h3",{id:"creating-our-intelligent-app"},"Creating Our Intelligent App"),(0,i.kt)("p",null,"Now, let\u2019s build our Intelligent App to incorporate everything we\u2019ve done so far. The first step is to export our AI Anomaly Detector credentials as environment variables."),(0,i.kt)("p",null,"Retrieve the key and endpoint you saved when creating your AI Anomaly Detector instance. Execute the following two commands in your command line, replacing the placeholders with your actual values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export ANOMALY_DETECTOR_KEY=<your key here>\nexport ANOMALY_DETECTOR_ENDPOINT=<your endpoint URL here>\n")),(0,i.kt)("p",null,"We also need to install two new Python libraries using pip. The ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-core")," library will help configure our credentials, while ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-ai-anomalydetector")," provides the libraries for calling the anomaly detector instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install azure-core\npip install azure-ai-anomalydetector\n")),(0,i.kt)("p",null,"Now, let\u2019s start building our script."),(0,i.kt)("p",null,"Create a new file named ",(0,i.kt)("inlineCode",{parentName:"p"},"anomaly_detection_consumer.py")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"anomaly_detection")," folder. First, import the required libraries and set up an ",(0,i.kt)("inlineCode",{parentName:"p"},"AnomalyDetectorClient")," and a Kafka consumer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"from azure.ai.anomalydetector import AnomalyDetectorClient\nfrom azure.ai.anomalydetector.models import TimeSeriesPoint, UnivariateDetectionOptions\nfrom azure.core.credentials import AzureKeyCredential\nfrom confluent_kafka import Consumer, KafkaError\nimport os\n\n# Azure Anomaly Detector credentials\nSUBSCRIPTION_KEY = os.environ[\"ANOMALY_DETECTOR_KEY\"]\nANOMALY_DETECTOR_ENDPOINT = os.environ[\"ANOMALY_DETECTOR_ENDPOINT\"]\n\nanomaly_detector_client = AnomalyDetectorClient(ANOMALY_DETECTOR_ENDPOINT, AzureKeyCredential(SUBSCRIPTION_KEY))\n\nconf = {\n    'bootstrap.servers': 'localhost:9092',\n    'group.id': 'anomaly-detection-group',\n    'auto.offset.reset': 'latest'\n}\n\nconsumer = Consumer(conf)\nconsumer.subscribe(['aws-cloudwatch-network'])\n")),(0,i.kt)("p",null,"Here, we\u2019ve imported the key and endpoint from our environment variables and used them to initialize the AI Anomaly Detector client. The Kafka consumer uses the same bootstrap server address as in the previous script. You can name the ",(0,i.kt)("inlineCode",{parentName:"p"},"group.id")," whatever you like and use it to enable multiple consumers to work together when consuming messages from a topic. The ",(0,i.kt)("inlineCode",{parentName:"p"},"auto.offset.reset")," property is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"latest"),", which tells our script to start reading from the newest message in the queue each time it begins."),(0,i.kt)("p",null,"Now, we\u2019ll define a function to detect the anomalies and make the call to our AI Anomaly Detector instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'def detect_anomalies(data):\n    request = UnivariateDetectionOptions(\n                    series=data,\n                    granularity=\'minutely\',\n                    custom_interval=5\n                )\n    try:\n        response = anomaly_detector_client.detect_univariate_last_point(request)\n        return response.is_anomaly\n    except Exception as e:\n        print(\n            "Error code: {}".format(e.error.code),\n            "Error message: {}".format(e.error.message),\n        )\n        return False \n')),(0,i.kt)("p",null,"This function takes an array of data points we want to analyze with AI Anomaly Detector. We\u2019re using a univariate detector, suitable for analyzing a single variable (in this case, our network bytes field) in isolation. AI Anomaly Detector also supports multivariate detection, useful for detecting anomalies due to complex interactions among variables."),(0,i.kt)("p",null,"The detector configuration includes per-minute granularity and a custom interval of 5, indicating our time series data points are five minutes apart."),(0,i.kt)("p",null,"Next, we make a call to ",(0,i.kt)("inlineCode",{parentName:"p"},"detect_univariate_last_point")," with our request. This function contacts our AI Anomaly Detector instance to run the anomaly detection algorithm on our dataset. It indicates if the last point in the data series is anomalous compared to other data points. The response contains an ",(0,i.kt)("inlineCode",{parentName:"p"},"is_anomaly")," property set to true if an anomaly exists. We return this value from our function to use in the main code flow, which we\u2019ll build soon."),(0,i.kt)("p",null,"Before that, we need to create a function that writes our anomalous data points to a text file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"def write_anomaly_to_file(data):\n    with open('anomalies.txt', 'a') as f:\n        f.write(f\"Anomaly detected: {data}\\n\")\n")),(0,i.kt)("p",null,"This simple function writes the provided data to a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"anomalies.txt"),", allowing us to inspect our anomalies."),(0,i.kt)("p",null,"Next, we need to write the main part of the code that consumes messages from the Kafka topic and calls our anomaly detection function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"series = []\ntry:\n    while True:\n        msg = consumer.poll(1.0)\n        if msg is None:\n            continue\n        if msg.error():\n            print(msg.error())\n            continue         \n\n        data = eval(msg.value().decode('utf-8'))\n        series.append(TimeSeriesPoint(timestamp=data['timestamp'], value=data['value']))\n        if len(series) < 288:\n            continue\n\n        if len(series) > 288:\n            series.pop(0)\n\n        print('analyzing event: ', data)\n        if detect_anomalies(series):\n            print(f\"Anomaly detected: {data}\")\n            write_anomaly_to_file(data)\nexcept:\n    consumer.close()\n")),(0,i.kt)("p",null,"This code constantly checks for new messages from the Kafka topic using the consumer\u2019s poll method. If the script doesn\u2019t receive a message within the one-second timeout, it proceeds to the next message."),(0,i.kt)("p",null,"We initialize an empty list named ",(0,i.kt)("inlineCode",{parentName:"p"},"series")," to store the data points. The AI Anomaly Detector requires us to send at least 12 points at a time, so we need to keep a rolling set of data points in an array."),(0,i.kt)("p",null,"The first part of the loop checks for errors in the Kafka message and prints any error messages encountered before skipping the message and going to the next one."),(0,i.kt)("p",null,"If the message is valid, we decode its payload and add it as a data point to the series list. We continue looping through the first 288 messages so the AI Anomaly Detector has enough data to detect genuine anomalies."),(0,i.kt)("p",null,"To ensure we aren\u2019t sending too much data, we limit the series list size to 288 data points \u2014 24 hours\u2019 worth. When the limit is reached, we remove the oldest point. When detecting an anomaly, the script notifies us with a message and logs the anomaly data to a file using the ",(0,i.kt)("inlineCode",{parentName:"p"},"write_anomaly_to_file")," function."),(0,i.kt)("p",null,"Save the script and execute it by navigating to the ",(0,i.kt)("inlineCode",{parentName:"p"},"anomaly_detection")," folder in the command line and using this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python anomaly_detection_consumer.py\n")),(0,i.kt)("p",null,"At present, the script won\u2019t perform because our producer isn\u2019t running. To begin adding messages to the Kafka topic, let\u2019s run the producer we created earlier:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python kafka_producer.py\n")),(0,i.kt)("p",null,"Once the producer job has sent 288 events, the script begins outputting a message to the screen, showing the currency analyzed point. Leave the script running for five minutes, after which the ",(0,i.kt)("inlineCode",{parentName:"p"},"anomalies.txt")," file should contain some values."),(0,i.kt)("p",null,"Here\u2019s an example of the file after the script has run for several minutes:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of the file after script runs",src:n(19293).Z,width:"601",height:"181"})),(0,i.kt)("h2",{id:"exercise"},"Exercise"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Complete this ",(0,i.kt)("strong",{parentName:"li"},"hands-on sample")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/contentlab-io/Microsoft-Fortifying-Cybersecurity-Using-Intelligent-Apps"},"project code")," to build your intelligent app with multi-modal databases."),(0,i.kt)("li",{parentName:"ul"},"Watch the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://reactor.microsoft.com/reactor/events/20732/?WT.mc_id=javascript-99907-ninarasi"},"Ask the Expert: Azure Kubernetes Service"))," session where the Product Engineering team goes dives into the concepts for building intelligent apps using Azure Kubernetes Service."),(0,i.kt)("li",{parentName:"ul"},"To revise core concepts on cloud-native or Azure Kubernetes Service, go to\n",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://azure.github.io/Cloud-Native/cnny-2023/cloud-native-fundamentals"},"30 Days of Cloud Native")),".")))}u.isMDXComponent=!0},62001:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-4-3-1-990efab87c1da7928ac3da4e68cf62f6.jpeg"},65212:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-4-3-2-2068bccd408fe58a7d5a1f6c731c0079.png"},11630:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-4-3-3-71f2cacf37be599daca86d487689befb.png"},13434:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-4-3-4-eac7c44fc813007c363348e02dec615f.png"},23337:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-4-3-5-53a9f7430e7a073c3a7b2fc0264460e7.png"},19293:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blog-image-4-3-6-75286487c0ed573affad8ca0468f9e44.png"}}]);