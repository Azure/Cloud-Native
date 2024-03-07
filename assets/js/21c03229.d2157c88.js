"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29195],{16626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(85893),s=n(11151);const i={date:"2024-03-08T09:00",slug:"dynamic-repricing-of-products-using-intelligent-apps-part-1",title:"3.1 Dynamic Repricing of Products Using Intelligent Apps Part 1",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud-Scale","Data","AI","AI/ML","intelligent apps","cloud-native","60-days","enterprise apps","digital experiences","app modernization"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this series, you\u2019ll learn why Cosmos DB is an ideal choice for powering such applications\u2014and how it makes building Intelligent Apps accessible and approachable. In the first article of this series, you\u2019ll set up and populate the Cosmos DB database with data to use in the later parts of the series.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},o=void 0,r={permalink:"/Cloud-Native/60DaysOfIA/dynamic-repricing-of-products-using-intelligent-apps-part-1",source:"@site/blog-60daysofIA/2024-03-08/dynamic-repricing-of-products-using-intelligent-apps-part-1.md",title:"3.1 Dynamic Repricing of Products Using Intelligent Apps Part 1",description:"In this series, you\u2019ll learn why Cosmos DB is an ideal choice for powering such applications\u2014and how it makes building Intelligent Apps accessible and approachable. In the first article of this series, you\u2019ll set up and populate the Cosmos DB database with data to use in the later parts of the series.",date:"2024-03-08T09:00:00.000Z",formattedDate:"March 8, 2024",tags:[{label:"Build-Intelligent-Apps",permalink:"/Cloud-Native/60DaysOfIA/tags/build-intelligent-apps"},{label:"60-days-of-IA",permalink:"/Cloud-Native/60DaysOfIA/tags/60-days-of-ia"},{label:"learn-live",permalink:"/Cloud-Native/60DaysOfIA/tags/learn-live"},{label:"hack-together",permalink:"/Cloud-Native/60DaysOfIA/tags/hack-together"},{label:"community-buzz",permalink:"/Cloud-Native/60DaysOfIA/tags/community-buzz"},{label:"ask-the-expert",permalink:"/Cloud-Native/60DaysOfIA/tags/ask-the-expert"},{label:"azure-kubernetes-service",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-kubernetes-service"},{label:"azure-functions",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-functions"},{label:"azure-openai",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-openai"},{label:"azure-container-apps",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-container-apps"},{label:"azure-cosmos-db",permalink:"/Cloud-Native/60DaysOfIA/tags/azure-cosmos-db"},{label:"github-copilot",permalink:"/Cloud-Native/60DaysOfIA/tags/github-copilot"},{label:"github-codespaces",permalink:"/Cloud-Native/60DaysOfIA/tags/github-codespaces"},{label:"github-actions",permalink:"/Cloud-Native/60DaysOfIA/tags/github-actions"}],readingTime:7.14,hasTruncateMarker:!1,authors:[{name:"#60Days Of IA",title:"BuildIA Content Team",url:"https://azure.github.io/Cloud-Native/Build-IA/",imageURL:"https://azure.github.io/Cloud-Native/img/logo-2024.png",key:"cnteam"}],frontMatter:{date:"2024-03-08T09:00",slug:"dynamic-repricing-of-products-using-intelligent-apps-part-1",title:"3.1 Dynamic Repricing of Products Using Intelligent Apps Part 1",authors:["cnteam"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cloud-Scale","Data","AI","AI/ML","intelligent apps","cloud-native","60-days","enterprise apps","digital experiences","app modernization"],image:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png",description:"In this series, you\u2019ll learn why Cosmos DB is an ideal choice for powering such applications\u2014and how it makes building Intelligent Apps accessible and approachable. In the first article of this series, you\u2019ll set up and populate the Cosmos DB database with data to use in the later parts of the series.",tags:["Build-Intelligent-Apps","60-days-of-IA","learn-live","hack-together","community-buzz","ask-the-expert","azure-kubernetes-service","azure-functions","azure-openai","azure-container-apps","azure-cosmos-db","github-copilot","github-codespaces","github-actions"]},unlisted:!1,prevItem:{title:"3. Cosmos DB and Intelligent Apps: A Match Made for Innovation",permalink:"/Cloud-Native/60DaysOfIA/cosmos-db-and-intelligent-apps-a-match-made-for-innovation"}},l={authorsImageUrls:[void 0]},c=[{value:"Dynamic Repricing of Products Using Intelligent Apps Part 1: Setting Up and Populating Cosmos DB with Data",id:"dynamic-repricing-of-products-using-intelligent-apps-part-1-setting-up-and-populating-cosmos-db-with-data",level:2},{value:"Laying the Groundwork for an Intelligent App with Cosmos DB",id:"laying-the-groundwork-for-an-intelligent-app-with-cosmos-db",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Create an Azure Cosmos DB Account",id:"create-an-azure-cosmos-db-account",level:4},{value:"Create a Database and a Container",id:"create-a-database-and-a-container",level:4},{value:"Populate the Container",id:"populate-the-container",level:4},{value:"<em>Upload the CSV File</em>",id:"upload-the-csv-file",level:5},{value:"<em>Verify the Data in the Container</em>",id:"verify-the-data-in-the-container",level:5},{value:"Next Steps",id:"next-steps",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i,{children:[(0,a.jsx)("meta",{property:"og:url",content:"https://azure.github.io/cloud-native/60daysofia/dynamic-repricing-of-products-using-intelligent-apps-part-1"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,a.jsx)("meta",{property:"og:description",content:"In this series, you\u2019ll learn why Cosmos DB is an ideal choice for powering such applications\u2014and how it makes building Intelligent Apps accessible and approachable. In the first article of this series, you\u2019ll set up and populate the Cosmos DB database with data to use in the later parts of the series."}),(0,a.jsx)("meta",{property:"og:image",content:"https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"}),(0,a.jsx)("meta",{name:"twitter:url",content:"https://azure.github.io/Cloud-Native/60daysofIA/dynamic-repricing-of-products-using-intelligent-apps-part-1"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Build Intelligent Apps | AI Apps on Azure"}),(0,a.jsx)("meta",{name:"twitter:description",content:"In this series, you\u2019ll learn why Cosmos DB is an ideal choice for powering such applications\u2014and how it makes building Intelligent Apps accessible and approachable. In the first article of this series, you\u2019ll set up and populate the Cosmos DB database with data to use in the later parts of the series."}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://azure.github.io/Cloud-Native/img/ogImage.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@devanshidiaries"}),(0,a.jsx)("link",{rel:"canonical",href:"https://azure.github.io/Cloud-Native/60daysofIA/dynamic-repricing-of-products-using-intelligent-apps-part-1"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Cosmos DB and Intelligent Apps: A Match Made for Innovation",src:n(74233).Z+"",width:"624",height:"380"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"This three-part series demonstrates how to use Azure Cosmos DB to build an Intelligent App that uses historical pricing and product data to forecast future price fluctuations for specific products. In the first article of this series, you\u2019ll set up and populate the Cosmos DB database with data to use in the later parts of the series."})}),"\n",(0,a.jsx)(t.h2,{id:"dynamic-repricing-of-products-using-intelligent-apps-part-1-setting-up-and-populating-cosmos-db-with-data",children:"Dynamic Repricing of Products Using Intelligent Apps Part 1: Setting Up and Populating Cosmos DB with Data"}),"\n",(0,a.jsx)(t.p,{children:"Intelligent Apps leverage data and artificial intelligence (AI) to provide smart, personalized, and adaptive experiences for users. AI and machine learning (ML) techniques like natural language processing (NLP), computer vision, and deep learning help understand context, intent, and user preferences to deliver relevant and timely insights and actions."}),"\n",(0,a.jsx)(t.p,{children:"Some examples of Intelligent Apps include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Virtual assistants"}),"\u2014Interactive applications that understand and execute user commands"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Chatbots"}),"\u2014Automated messaging systems that provide information or assistance"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Recommendation"})," systems\u2014Algorithms that suggest relevant items based on user preferences and behavior"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"In this three-part series, you\u2019ll create an Intelligent App powered by Azure Cosmos DB and AI/ML capabilities that dynamically suggests changes to product prices based on demand and historical trends. This app will help optimize revenue and customer satisfaction by adjusting product prices according to market conditions and customer behavior."}),"\n",(0,a.jsx)(t.h3,{id:"laying-the-groundwork-for-an-intelligent-app-with-cosmos-db",children:"Laying the Groundwork for an Intelligent App with Cosmos DB"}),"\n",(0,a.jsx)(t.p,{children:"First, you\u2019ll set up an Azure Cosmos DB database and populate it with product data and historical information about sales and demand. In part 2, you\u2019ll analyze this data using AI and ML to forecast and suggest price changes."}),"\n",(0,a.jsx)(t.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.p,{children:"To follow this tutorial, ensure you have the following:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://azure.microsoft.com/free/?ocid=buildia24_60days_blogs",children:"An Azure account"})}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(t.a,{href:"https://www.kaggle.com/account/login?phase=startRegisterTab&returnUrl=%2F",children:"Kaggle account"})," to download the ",(0,a.jsx)(t.a,{href:"https://www.kaggle.com/datasets/sujaykapadnis/price-quote-data/data",children:"dataset"})," this tutorial uses"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"create-an-azure-cosmos-db-account",children:"Create an Azure Cosmos DB Account"}),"\n",(0,a.jsx)(t.p,{children:"Azure Cosmos DB is a fully managed multi-model database that ensures fast access to data, easy scalability, reliable uptime, and strong data consistency. Cosmos DB supports various data models and APIs, including SQL, MongoDB, Cassandra, Gremlin, and table storage, making it easy to query and manipulate data using familiar tools and languages."}),"\n",(0,a.jsx)(t.p,{children:"Although you already have an Azure account, you also need to create an Azure Cosmos DB account by following the steps below:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Sign in to the ",(0,a.jsx)(t.a,{href:"https://portal.azure.com/",children:"Azure portal"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Click ",(0,a.jsx)(t.strong,{children:"Create a resource"})," on the upper-left side of the page."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Search for \u201cAzure Cosmos DB\u201d and select it. On the ",(0,a.jsx)(t.strong,{children:"Azure Cosmos DB"})," page, select ",(0,a.jsx)(t.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Enter the settings for your new account:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Select your desired subscription."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Create a new resource group or select an existing one if you have one you\u2019d like to use."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Enter a unique account name."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Select ",(0,a.jsx)(t.strong,{children:"SQL (Core)"})," as the API. This is the default API for Azure Cosmos DB and allows you to use SQL syntax to query and manage your data."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Select a ",(0,a.jsx)(t.strong,{children:"Location"})," for the account."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Click ",(0,a.jsx)(t.strong,{children:"Review + create"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Review your account settings and click ",(0,a.jsx)(t.strong,{children:"Create"})," to create the account."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Complete the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://aka.ms/intelligent-apps/data-csc?ocid=buildia24_60days_blogs",children:"Data Skills Challenge"})})," to compete for the leaderboard and earn a Microsoft Learn Badge."]})}),"\n",(0,a.jsx)(t.h4,{id:"create-a-database-and-a-container",children:"Create a Database and a Container"}),"\n",(0,a.jsx)(t.p,{children:"Next, you\u2019ll create a database and container within Azure Cosmos DB. Databases facilitate management, billing, and scaling, while a container is a schema-agnostic grouping of items (documents) with a partition key and a provisioned throughput. The partition property determines how the data is distributed across physical partitions for scalability and performance."}),"\n",(0,a.jsx)(t.p,{children:"To create a database and container, follow the steps below:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["From the Azure portal, navigate to your Azure Cosmos DB account and select ",(0,a.jsx)(t.strong,{children:"Data Explorer"})," on the left menu. In the ",(0,a.jsx)(t.strong,{children:"Data Explorer"}),", select ",(0,a.jsx)(t.strong,{children:"New Database"})," on the top menu."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.strong,{children:"Add Database"})," panel, enter a name for the new database, like \u201cProductsDB.\u201d"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Check ",(0,a.jsx)(t.strong,{children:"Provision database throughput"})," if you want to enable shared throughput for the database. This shares the throughput (RU/s) you provision among all containers in the database. You can also activate or deactivate autoscale, which automatically adjusts the throughput based on your application\u2019s usage patterns."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Select ",(0,a.jsx)(t.strong,{children:"OK"})," to create the database."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.strong,{children:"Data Explorer"}),", expand the ",(0,a.jsx)(t.strong,{children:"ProductsDB"})," database and select ",(0,a.jsx)(t.strong,{children:"New Container"})," on the top menu. Then, open the ",(0,a.jsx)(t.strong,{children:"Add Container"})," panel and create a new container:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Enter \u201cProducts\u201d as the container name."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Enter \u201c/ITEM_ID\u201d as the container\u2019s partition key. This will ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview",children:"partition"})," the data by its ",(0,a.jsx)(t.code,{children:"ITEM_ID"})," property, since columns with a wide range of values make excellent partition keys."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Use the default value of 400 throughput units. If you\u2019d like, you can also deactivate autoscale for the container."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Select ",(0,a.jsx)(t.strong,{children:"OK"})," to create the container."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"populate-the-container",children:"Populate the Container"}),"\n",(0,a.jsxs)(t.p,{children:["Now that you\u2019ve created your database and container, you need to populate them with some data. For this demonstration, you\u2019ll use a CSV file that contains ",(0,a.jsx)(t.a,{href:"https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/consumerpriceindicescpiandretailpricesindexrpiitemindicesandpricequotes",children:"UK inflation data"}),". The dataset contains over 100,000 rows of data representing 600 products sold in UK shops over 12 months."]}),"\n",(0,a.jsx)(t.p,{children:"To populate the container with this data, follow these steps:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Download the ",(0,a.jsx)(t.a,{href:"https://www.kaggle.com/datasets/sujaykapadnis/price-quote-data/data",children:"CSV file"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the Azure portal, navigate to your Azure Cosmos DB account and select ",(0,a.jsx)(t.strong,{children:"Data Explorer"})," on the left menu."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.strong,{children:"Data Explorer"}),", expand the ",(0,a.jsx)(t.strong,{children:"ProductsDB"})," database and the ",(0,a.jsx)(t.strong,{children:"Products"})," container, and select ",(0,a.jsx)(t.strong,{children:"Items"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"upload-the-csv-file",children:(0,a.jsx)(t.em,{children:"Upload the CSV File"})}),"\n",(0,a.jsx)(t.p,{children:"Now, upload the CSV file:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["From the top menu, select ",(0,a.jsx)(t.strong,{children:"Upload Item"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.strong,{children:"Upload Item"})," panel, select ",(0,a.jsx)(t.strong,{children:"Browse"}),", and choose the CSV file you downloaded previously."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Select ",(0,a.jsx)(t.strong,{children:"Upload"})," to upload the file to the container."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"After the upload finishes, you should see the items in the container, each representing a row in the CSV file. You can select an item to view its properties and values in JSON format."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"verify-the-data-in-the-container",children:(0,a.jsx)(t.em,{children:"Verify the Data in the Container"})}),"\n",(0,a.jsx)(t.p,{children:"To verify that the data in the container is correct and consistent, you can use the SQL query editor in the Data Explorer."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Select ",(0,a.jsx)(t.strong,{children:"New SQL Query"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The query editor lets you execute SQL queries against the data in the container. For example, run the following query to get the container\u2019s item count:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"SELECT VALUE COUNT(1) FROM c"})}),"\n",(0,a.jsxs)(t.p,{children:["You should get a result of ",(0,a.jsx)(t.code,{children:"10000"}),", which matches the number of rows in the CSV file."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"You can also run queries to check the data quality and integrity, like the following:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Get the distinct values of ITEM_ID"})," \u2014 ",(0,a.jsx)(t.code,{children:"SELECT DISTINCT VALUE c.ITEM_ID FROM c"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Get the average price of each product"})," \u2014 ",(0,a.jsx)(t.code,{children:"SELECT c.ITEM_ID, c.ITEM_DESC, AVG(c.PRICE) AS avg_price FROM c GROUP BY c.ITEM_ID, c.ITEM_DESC"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Get the price trend of a product over time"})," \u2014 ",(0,a.jsx)(t.code,{children:"SELECT c.QUOTE_DATE, c.PRICE FROM c WHERE c.ITEM_ID = '210102' ORDER BY c.QUOTE_DATE"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can also use the built-in charts to visualize the query results. In the top-right corner of the query editor, select ",(0,a.jsx)(t.strong,{children:"Chart"})," and choose the chart type you want to use, such as line, bar, or pie."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsx)(t.p,{children:"In this article, you configured an Azure Cosmos DB database and populated it with data about product price changes. You also verified the data in the container using SQL queries and charts."}),"\n",(0,a.jsx)(t.p,{children:"In the next part of the series, you\u2019ll learn how to use Azure\u2019s AI and ML capabilities to analyze the data and suggest product price forecasts."}),"\n",(0,a.jsxs)(t.p,{children:["If you want to challenge yourself and learn more about Azure, Cosmos DB, and AI/ML, we encourage you to participate in the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://azure.github.io/Cloud-Native/Build-IA/CloudSkills",children:"Data Cloud Skill Challenge"})}),". You can also register for ",(0,a.jsxs)(t.strong,{children:["AKS ",(0,a.jsx)(t.a,{href:"https://aka.ms/aks-day",children:"Customer"})," and ",(0,a.jsx)(t.a,{href:"https://aka.ms/aks-lab-day",children:"Lab"})," Days"]})," at the premier conference for cloud-native technologies, ",(0,a.jsx)(t.em,{children:"KubeCon EU 2024"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},74233:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-1-1-95d16f4679738d90454174a0d0aaa18a.jpeg"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);