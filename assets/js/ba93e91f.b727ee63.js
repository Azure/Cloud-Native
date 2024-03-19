"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55240],{49778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(85893),a=n(11151);const s={date:"2023-10-26T09:00",slug:"fortifying-cybersecurity-using-intelligent-apps-on-aks-2",title:"4-4. Fortifying Cybersecurity Using Intelligent Apps on AKS (2)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Discover how to enhance the security of our Intelligent Apps with Azure AI Anomaly Detector and Azure Kubernetes Service.",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},r=void 0,o={permalink:"/Cloud-Native/30DaysOfIA/fortifying-cybersecurity-using-intelligent-apps-on-aks-2",source:"@site/blog-30daysofIA/2023-10-26/fortifying-cybersecurity-using-intelligent-apps-on-aks-2.md",title:"4-4. Fortifying Cybersecurity Using Intelligent Apps on AKS (2)",description:"Discover how to enhance the security of our Intelligent Apps with Azure AI Anomaly Detector and Azure Kubernetes Service.",date:"2023-10-26T09:00:00.000Z",formattedDate:"October 26, 2023",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/30DaysOfIA/tags/build-intelligent-apps"},{label:"30-days-of-IA",permalink:"/Cloud-Native/30DaysOfIA/tags/30-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/30DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/30DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/30DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/30DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/30DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/30DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/30DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/30DaysOfIA/tags/github-actions"}],readingTime:6.25,hasTruncateMarker:!1,authors:[{name:"It's 30DaysOfIA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-ms-cloud-native.png",key:"cnteam"}],frontMatter:{date:"2023-10-26T09:00",slug:"fortifying-cybersecurity-using-intelligent-apps-on-aks-2",title:"4-4. Fortifying Cybersecurity Using Intelligent Apps on AKS (2)",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud","Data","AI","AI/ML","intelligent apps","cloud-native","30-days","enterprise apps","digital experiences","app modernization","serverless","ai apps","data"],image:"https://azure.github.io/Cloud-Native/img/ogImage.png",description:"Discover how to enhance the security of our Intelligent Apps with Azure AI Anomaly Detector and Azure Kubernetes Service.",tags:["Build-Intelligent-Apps","30-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"4-3. Fortifying Cybersecurity Using Intelligent Apps on AKS (1)",permalink:"/Cloud-Native/30DaysOfIA/fortifying-cybersecurity-using-intelligent-apps-on-aks-1"}},l={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover:",id:"what-well-cover",level:2},{value:"Fortifying Cybersecurity Using Intelligent Apps on AKS: Hands-on with AI-Powered Anomaly Detection (2)",id:"fortifying-cybersecurity-using-intelligent-apps-on-aks-hands-on-with-ai-powered-anomaly-detection-2",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Storing and Reviewing Detected Anomalies",id:"storing-and-reviewing-detected-anomalies",level:3},{value:"Intelligent Apps and Cybersecurity",id:"intelligent-apps-and-cybersecurity",level:2},{value:"Exercise",id:"exercise",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s,{children:[(0,i.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/30daysofia/fortifying-cybersecurity-using-intelligent-apps-on-aks-2"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"Build Intelligent Apps! | Build AI Apps On Azure"}),(0,i.jsx)("meta",{property:"og:description",content:"Discover how to enhance the security of our Intelligent Apps with Azure AI Anomaly Detector and Azure Kubernetes Service."}),(0,i.jsx)("meta",{property:"og:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/30daysofIA/fortifying-cybersecurity-using-intelligent-apps-on-aks-2"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Build Intelligent Apps! | Build AI Apps On Azure"}),(0,i.jsx)("meta",{name:"twitter:description",content:"4-4. Fortifying Cybersecurity Using Intelligent Apps on AKS (2)",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/30daysofIA/fortifying-cybersecurity-using-intelligent-apps-on-aks-2"})]}),"\n",(0,i.jsxs)(t.p,{children:["In this article, discover how to enhance the security of our Intelligent Apps with ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-services/anomaly-detector/overview?WT.mc_id=javascript-99907-ninarasi",children:"Azure AI Anomaly Detector"})," and ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/azure/aks/?WT.mc_id=javascript-99907-ninarasi",children:"Azure Kubernetes Service (AKS)"}),". Follow along to learn how to implement real-time monitoring and anomaly detection of network traffic and make data-driven security decisions to protect against emerging cyber threats."]}),"\n",(0,i.jsx)(t.h2,{id:"what-well-cover",children:"What We'll Cover:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Storing and Reviewing Detected Anomalies"}),"\n",(0,i.jsx)(t.li,{children:"Intelligent Apps and Cybersecurity concepts"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image of fortifying security using intelligent apps",src:n(84411).Z+"",width:"625",height:"380"})}),"\n",(0,i.jsx)(t.h2,{id:"fortifying-cybersecurity-using-intelligent-apps-on-aks-hands-on-with-ai-powered-anomaly-detection-2",children:"Fortifying Cybersecurity Using Intelligent Apps on AKS: Hands-on with AI-Powered Anomaly Detection (2)"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/30daysofIA/fortifying-cybersecurity-using-intelligent-apps-on-aks-1",children:"previous part"})," of this tutorial, we explored creating an intelligent app for real-time network traffic anomaly detection using Azure AI and AKS. This part continues onto storing and reviewing the detected anomalies."]}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["To follow this tutorial, ensure you have completed the\u202f",(0,i.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/30daysofIA/fortifying-cybersecurity-using-intelligent-apps-on-aks-1",children:"first"}),"\u202fpart of this topic."]}),"\n",(0,i.jsx)(t.h3,{id:"storing-and-reviewing-detected-anomalies",children:"Storing and Reviewing Detected Anomalies"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-services/anomaly-detector/tutorials/azure-data-explorer?WT.mc_id=javascript-99907-ninarasi",children:"Azure Data Explorer"})," is a powerful tool for data analysis and querying. We\u2019ll now set up an Azure Data Explorer cluster and import our dataset to visualize the anomalies. Graphically representing them can make it easier to spot patterns."]}),"\n",(0,i.jsxs)(t.p,{children:["First, we need to create an Azure Data Explorer cluster. Return to Azure and search for \u201cAzure Data Explorer Clusters.\u201d Select it, click ",(0,i.jsx)(t.strong,{children:"Create"}),", and pick the same resource group used for the anomaly detection instance. Assign a unique name, such as ",(0,i.jsx)(t.code,{children:"anomalydetectioncluster"}),". Within the ",(0,i.jsx)(t.strong,{children:"COMPUTE SPECIFICATION"})," section, opt for the ",(0,i.jsx)(t.strong,{children:"Dev/test"})," workload and disable the ",(0,i.jsx)(t.strong,{children:"Availability zones"})," option. This choice will provide a modest, budget-friendly cluster for our demo. For production workloads, you may want to use another size."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image of Azure Data Explorer Cluster setup",src:n(64611).Z+"",width:"602",height:"670"})}),"\n",(0,i.jsxs)(t.p,{children:["The cluster will take some time to generate. Once it\u2019s ready, we\u2019ll require a database to work with the data. From the cluster\u2019s ",(0,i.jsx)(t.strong,{children:"Overview"})," page, hit ",(0,i.jsx)(t.strong,{children:"Add database"}),". Name the database and leave the other settings unchanged."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image of database settings overview",src:n(49273).Z+"",width:"601",height:"386"})}),"\n",(0,i.jsxs)(t.p,{children:["To work with the data, we need to set up permissions. In the Azure Data Explorer portal, navigate to the ",(0,i.jsx)(t.strong,{children:"Permissions"})," section under the ",(0,i.jsx)(t.strong,{children:"Security + Networking"}),". Add the ",(0,i.jsx)(t.strong,{children:"AllDatabasesAdmin"})," and ",(0,i.jsx)(t.strong,{children:"AllDatabasesViewer"})," permissions to your Azure user."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image of database permissions",src:n(7587).Z+"",width:"601",height:"374"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Join the Azure team at ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://aka.ms/aks-day",children:"KubeCon and Azure Day"})})," in Chicago on ",(0,i.jsx)(t.strong,{children:"November 6, 2023"}),". The Azure Product Engineering team along with the Cloud Advocates team will be there to dive deep with you on developing intelligent apps with Azure Kubernetes Service."]})}),"\n",(0,i.jsx)(t.p,{children:"Now, let\u2019s configure Python to allow calls to the Anomaly Detection API."}),"\n",(0,i.jsxs)(t.p,{children:["To use Python for data analysis, access the ",(0,i.jsx)(t.strong,{children:"Configurations"})," menu from the sidebar and enable the Python language extension. Keep in mind that it may take up to an hour for these changes to take effect:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image of database configurations",src:n(47291).Z+"",width:"602",height:"314"})}),"\n",(0,i.jsxs)(t.p,{children:["Now, navigate to the Azure Data Explorer console. From the cluster\u2019s main overview page under the ",(0,i.jsx)(t.strong,{children:"Getting started"})," tab, click ",(0,i.jsx)(t.strong,{children:"Query your data"})," from the ",(0,i.jsx)(t.strong,{children:"Explore in Azure Data Explorer"})," box."]}),"\n",(0,i.jsxs)(t.p,{children:["Navigate to the ",(0,i.jsx)(t.strong,{children:"Data"})," tab, then click ",(0,i.jsx)(t.strong,{children:"Ingest Data"}),". Provide a table name, like ",(0,i.jsx)(t.code,{children:"network_anomalies"}),", and click ",(0,i.jsx)(t.strong,{children:"Next"}),". In the ",(0,i.jsx)(t.strong,{children:"Source"})," section, choose ",(0,i.jsx)(t.strong,{children:"file"})," as the source type and upload the CSV file we used as input for the Kafka producer. Click ",(0,i.jsx)(t.strong,{children:"Next"})," and verify the schema before starting the ingestion:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image of data ingestion schema",src:n(97909).Z+"",width:"602",height:"541"})}),"\n",(0,i.jsxs)(t.p,{children:["Now that our data resides in the cluster, we can start querying and analyzing it. Select ",(0,i.jsx)(t.strong,{children:"Query"})," from the left-hand menu in the Azure Data Explorer portal."]}),"\n",(0,i.jsxs)(t.p,{children:["First, we need to make some adjustments. To facilitate calls to the anomaly detection API, we need to enable HTTP requests. Execute ",(0,i.jsx)(t.code,{children:".enable plugin http_request"})," in the query editor. Next, run the following command to enable web API calls:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'.alter cluster policy callout\n```\n[\n    {\n        "CalloutType": "webapi",\n        "CalloutUriRegex": ".*anomalydetectioninstance.*",\n        "CanCall": true\n    }\n]\n```\n'})}),"\n",(0,i.jsxs)(t.p,{children:["We\u2019re now ready to analyze our data and plot the anomalies on a graph. Paste the following code into the query editor. It\u2019s an adapted version of a ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-services/anomaly-detector/tutorials/azure-data-explorer?WT.mc_id=javascript-99907-ninarasi",children:"Microsoft tutorial"}),", tailored to our dataset. Remember to replace ",(0,i.jsx)(t.code,{children:"<your AD instance URL>"})," and ",(0,i.jsx)(t.code,{children:"<your AD key>"})," with the Anomaly Detection instance URL and key that we used previously."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"let series_uv_anomalies_fl=(tbl:(*), y_series:string, sensitivity:int=85, tsid:string='_tsid')\n{\n    let uri = '<your AD instance URL>/anomalydetector/v1.0/timeseries/entire/detect';\n    let headers=dynamic({'Ocp-Apim-Subscription-Key': h'<your AD key>'});\n    let kwargs = pack('y_series', y_series, 'sensitivity', sensitivity);\n    let code = ```if 1:\n        import json\n        y_series = kargs[\"y_series\"]\n        sensitivity = kargs[\"sensitivity\"]\n        json_str = []\n        for i in range(len(df)):\n            row = df.iloc[i, :]\n            ts = [{'value':row[y_series][j]} for j in range(len(row[y_series]))]\n            json_data = {'series': ts, \"sensitivity\":sensitivity }\n            json_str = json_str + [json.dumps(json_data)]\n        result = df\n        result['json_str'] = json_str\n    ```;\n    tbl\n    | evaluate python(typeof(*, json_str:string), code, kwargs)\n    | extend _tsid = column_ifexists(tsid, 1)\n    | partition by _tsid (\n       project json_str \n       | evaluate http_request_post(uri, headers, dynamic(null))\n       | project period=ResponseBody.period, baseline_ama=ResponseBody.expectedValues, anomaly=series_add(0, ResponseBody.isAnomaly)\n       | extend _tsid=toscalar(_tsid)\n      )\n}\n;\nlet stime=datetime(2014-03-03);\nlet etime=datetime(2014-03-04);\nlet ts = network_anomalies\n| make-series value=avg(value) on timestamp from stime to etime step 5min\n| extend _tsid='TS1';\nts\n| invoke series_uv_anomalies_fl('value')\n| lookup ts on _tsid\n| render anomalychart with(xcolumn=timestamp, ycolumns=value, anomalycolumns=anomaly) \n"})}),"\n",(0,i.jsxs)(t.p,{children:["This code fetches data for a specific day within our dataset, defined by the ",(0,i.jsx)(t.code,{children:"stime"})," and ",(0,i.jsx)(t.code,{children:"etime"})," variables. It constructs a data series passed to the ",(0,i.jsx)(t.code,{children:"series_uv_anomalies_fl"})," function. This function uses Python to call the anomaly detection API, identifying all anomalies within the dataset. Anomalous data points are flagged in a new column called anomaly. Finally, the code renders an anomaly chart, which plots the values over time on a line chart and highlights anomalies in red:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image of code anomaly chart",src:n(43353).Z+"",width:"602",height:"396"})}),"\n",(0,i.jsx)(t.p,{children:"The data shows that the network bytes on this particular day remained between 40 and 100 bytes until 5:00 PM. From then onwards, we see hourly spikes of up to 5 million bytes."}),"\n",(0,i.jsx)(t.p,{children:"The sudden spikes in network traffic could signify a DDoS attack. Attackers may have coordinated a coordinated onslaught on the network, flooding it with traffic to overwhelm the resources and disrupt services. The irregular hourly spikes could stem from attackers altering their tactics to elude detection."}),"\n",(0,i.jsx)(t.h2,{id:"intelligent-apps-and-cybersecurity",children:"Intelligent Apps and Cybersecurity"}),"\n",(0,i.jsx)(t.p,{children:"Creating an Intelligent App for real-time network traffic anomaly detection starts with ingesting network data from a Kafka queue and then using Azure AI Anomaly Detector to identify anomalies. This project demonstrates the practical integration of AI into cybersecurity. Leveraging cloud-based AI tools like Azure AI Anomaly Detector offers you best-in-class anomaly detection with minimal code."}),"\n",(0,i.jsx)(t.p,{children:"However, it\u2019s essential to note that this is just one application of AI in cybersecurity enhancement. The broader landscape includes fields like threat detection and behavior analysis. Armed with the knowledge you\u2019ve gained here, you can extend your expertise elsewhere, fully embracing the potential of AI in safeguarding digital solutions."}),"\n",(0,i.jsx)(t.h2,{id:"exercise",children:"Exercise"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Complete this ",(0,i.jsx)(t.strong,{children:"hands-on sample"})," ",(0,i.jsx)(t.a,{href:"https://github.com/contentlab-io/Microsoft-Fortifying-Cybersecurity-Using-Intelligent-Apps",children:"project code"})," to build your intelligent app with multi-modal databases."]}),"\n",(0,i.jsxs)(t.li,{children:["Watch the ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://reactor.microsoft.com/en-us/reactor/events/20732/?WT.mc_id=javascript-99907-ninarasi",children:"Ask the Expert: Azure Kubernetes Service"})})," session where the Product Engineering team goes dives into the concepts for building intelligent apps using Azure Kubernetes Service."]}),"\n",(0,i.jsxs)(t.li,{children:["To revise core concepts on cloud-native or Azure Kubernetes Service, go to\n",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/cnny-2023/cloud-native-fundamentals",children:"30 Days of Cloud Native"})}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},84411:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blog-image-4-4-1-db95a66ec9d92ae9d1e60e40ac81b23f.jpeg"},64611:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blog-image-4-4-2-e0010d2bc4faca08bf9091401786a245.png"},49273:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blog-image-4-4-3-ae4df6827fad9073b2f74efa87eb5655.png"},7587:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blog-image-4-4-4-54bc08ab98053777291cd42953bd1761.png"},47291:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blog-image-4-4-5-bae0444adf6ee8b135b4f8a696dabeb5.png"},97909:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blog-image-4-4-6-0a3aede339060ca4e1257d7bd0e3917b.png"},43353:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blog-image-4-4-7-82574d6463ec4565c4a01c2e09287d36.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(67294);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);