---
date: 2024-03-08T09:00
slug: dynamic-repricing-of-products-using-intelligent-apps-part-1
title: "Cosmos DB and Intelligent Apps: A Match Made for Innovation"
authors: [cnteam]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud-Scale, Data, AI, AI/ML, intelligent apps, cloud-native, 60-days, enterprise apps, digital experiences, app modernization]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In this series, you’ll learn why Cosmos DB is an ideal choice for powering such applications—and how it makes building Intelligent Apps accessible and approachable. In the first article of this series, you’ll set up and populate the Cosmos DB database with data to use in the later parts of the series." 
tags: [Build-Intelligent-Apps, 60-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/60daysofia/dynamic-repricing-of-products-using-intelligent-apps-part-1"/>
  <meta property="og:type" content="website"/> 
  <meta property="og:title" content="Build Intelligent Apps | AI Apps on Azure"/> 
  <meta property="og:description" content="In this series, you’ll learn why Cosmos DB is an ideal choice for powering such applications—and how it makes building Intelligent Apps accessible and approachable. In the first article of this series, you’ll set up and populate the Cosmos DB database with data to use in the later parts of the series."/> 
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/> 
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/60daysofIA/dynamic-repricing-of-products-using-intelligent-apps-part-1" /> 
  <meta name="twitter:title" content="Build Intelligent Apps | AI Apps on Azure" />
 <meta name="twitter:description" content="In this series, you’ll learn why Cosmos DB is an ideal choice for powering such applications—and how it makes building Intelligent Apps accessible and approachable. In the first article of this series, you’ll set up and populate the Cosmos DB database with data to use in the later parts of the series." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" /> 
  <meta name="twitter:card" content="summary_large_image" /> 
  <meta name="twitter:creator" content="@devanshidiaries" /> 
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/60daysofIA/dynamic-repricing-of-products-using-intelligent-apps-part-1" /> 
</head> 

<!-- End METADATA -->

![Cosmos DB and Intelligent Apps: A Match Made for Innovation](../../static/img/60-days-of-ia/blogs/2024-03-08/3-1-1.jpeg)

*This three-part series demonstrates how to use Azure Cosmos DB to build an Intelligent App that uses historical pricing and product data to forecast future price fluctuations for specific products. In the first article of this series, you’ll set up and populate the Cosmos DB database with data to use in the later parts of the series.*

## Dynamic Repricing of Products Using Intelligent Apps Part 1: Setting Up and Populating Cosmos DB with Data

Intelligent Apps leverage data and artificial intelligence (AI) to provide smart, personalized, and adaptive experiences for users. AI and machine learning (ML) techniques like natural language processing (NLP), computer vision, and deep learning help understand context, intent, and user preferences to deliver relevant and timely insights and actions.

Some examples of Intelligent Apps include:

- **Virtual assistants**—Interactive applications that understand and execute user commands
- **Chatbots**—Automated messaging systems that provide information or assistance
- **Recommendation** systems—Algorithms that suggest relevant items based on user preferences and behavior

In this three-part series, you’ll create an Intelligent App powered by Azure Cosmos DB and AI/ML capabilities that dynamically suggests changes to product prices based on demand and historical trends. This app will help optimize revenue and customer satisfaction by adjusting product prices according to market conditions and customer behavior.

### Laying the Groundwork for an Intelligent App with Cosmos DB

First, you’ll set up an Azure Cosmos DB database and populate it with product data and historical information about sales and demand. In part 2, you’ll analyze this data using AI and ML to forecast and suggest price changes.

#### Prerequisites

To follow this tutorial, ensure you have the following:

- [An Azure account](https://azure.microsoft.com/free/?ocid=buildia24_60days_blogs)
- A [Kaggle account](https://www.kaggle.com/account/login?phase=startRegisterTab&returnUrl=%2F) to download the [dataset](https://www.kaggle.com/datasets/sujaykapadnis/price-quote-data/data) this tutorial uses

#### Create an Azure Cosmos DB Account

Azure Cosmos DB is a fully managed multi-model database that ensures fast access to data, easy scalability, reliable uptime, and strong data consistency. Cosmos DB supports various data models and APIs, including SQL, MongoDB, Cassandra, Gremlin, and table storage, making it easy to query and manipulate data using familiar tools and languages.

Although you already have an Azure account, you also need to create an Azure Cosmos DB account by following the steps below:

1. Sign in to the [Azure portal](https://portal.azure.com/).

2. Click **Create a resource** on the upper-left side of the page.

3. Search for “Azure Cosmos DB” and select it. On the **Azure Cosmos DB** page, select **Create**.

4. Enter the settings for your new account:

    - Select your desired subscription.

    - Create a new resource group or select an existing one if you have one you’d like to use.

    - Enter a unique account name.

    - Select **SQL (Core)** as the API. This is the default API for Azure Cosmos DB and allows you to use SQL syntax to query and manage your data.

    - Select a **Location** for the account.

    - Click **Review + create**.

5. Review your account settings and click **Create** to create the account.

:::info
Complete the **[Data Skills Challenge](https://aka.ms/intelligent-apps/data-csc?ocid=buildia24_60days_blogs)** to compete for the leaderboard and earn a Microsoft Learn Badge.
:::

#### Create a Database and a Container

Next, you’ll create a database and container within Azure Cosmos DB. Databases facilitate management, billing, and scaling, while a container is a schema-agnostic grouping of items (documents) with a partition key and a provisioned throughput. The partition property determines how the data is distributed across physical partitions for scalability and performance.

To create a database and container, follow the steps below:

1. From the Azure portal, navigate to your Azure Cosmos DB account and select **Data Explorer** on the left menu. In the **Data Explorer**, select **New Database** on the top menu.

2. In the **Add Database** panel, enter a name for the new database, like “ProductsDB.”

3. Check **Provision database throughput** if you want to enable shared throughput for the database. This shares the throughput (RU/s) you provision among all containers in the database. You can also activate or deactivate autoscale, which automatically adjusts the throughput based on your application’s usage patterns.

4. Select **OK** to create the database.

5. In **Data Explorer**, expand the **ProductsDB** database and select **New Container** on the top menu. Then, open the **Add Container** panel and create a new container:

    - Enter “Products” as the container name.

    - Enter “/ITEM_ID” as the container’s partition key. This will [partition](https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview) the data by its `ITEM_ID` property, since columns with a wide range of values make excellent partition keys.

    - Use the default value of 400 throughput units. If you’d like, you can also deactivate autoscale for the container.

6. Select **OK** to create the container.

#### Populate the Container

Now that you’ve created your database and container, you need to populate them with some data. For this demonstration, you’ll use a CSV file that contains [UK inflation data](https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/consumerpriceindicescpiandretailpricesindexrpiitemindicesandpricequotes). The dataset contains over 100,000 rows of data representing 600 products sold in UK shops over 12 months.

To populate the container with this data, follow these steps:

1. Download the [CSV file](https://www.kaggle.com/datasets/sujaykapadnis/price-quote-data/data).

2. In the Azure portal, navigate to your Azure Cosmos DB account and select **Data Explorer** on the left menu.

3. In **Data Explorer**, expand the **ProductsDB** database and the **Products** container, and select **Items**.

##### *Upload the CSV File*

Now, upload the CSV file:

1. From the top menu, select **Upload Item**.

2. In the **Upload Item** panel, select **Browse**, and choose the CSV file you downloaded previously.

3. Select **Upload** to upload the file to the container.

4. After the upload finishes, you should see the items in the container, each representing a row in the CSV file. You can select an item to view its properties and values in JSON format.

##### *Verify the Data in the Container*

To verify that the data in the container is correct and consistent, you can use the SQL query editor in the Data Explorer.

1. Select **New SQL Query**.

2. The query editor lets you execute SQL queries against the data in the container. For example, run the following query to get the container’s item count:

    ```SELECT VALUE COUNT(1) FROM c```

    You should get a result of `10000`, which matches the number of rows in the CSV file.

  3. You can also run queries to check the data quality and integrity, like the following:
      - **Get the distinct values of ITEM_ID** — `SELECT DISTINCT VALUE c.ITEM_ID FROM c`
      
      - **Get the average price of each product** — `SELECT c.ITEM_ID, c.ITEM_DESC, AVG(c.PRICE) AS avg_price FROM c GROUP BY c.ITEM_ID, c.ITEM_DESC`
      - **Get the price trend of a product over time** — `SELECT c.QUOTE_DATE, c.PRICE FROM c WHERE c.ITEM_ID = '210102' ORDER BY c.QUOTE_DATE`
4. You can also use the built-in charts to visualize the query results. In the top-right corner of the query editor, select **Chart** and choose the chart type you want to use, such as line, bar, or pie.

### Next Steps

In this article, you configured an Azure Cosmos DB database and populated it with data about product price changes. You also verified the data in the container using SQL queries and charts.

In the next part of the series, you’ll learn how to use Azure’s AI and ML capabilities to analyze the data and suggest product price forecasts. 

If you want to challenge yourself and learn more about Azure, Cosmos DB, and AI/ML, we encourage you to participate in the **[Data Cloud Skill Challenge](https://azure.github.io/Cloud-Native/Build-IA/CloudSkills)**. You can also register for **AKS [Customer](https://aka.ms/aks-day) and [Lab](https://aka.ms/aks-lab-day) Days** at the premier conference for cloud-native technologies, *KubeCon EU 2024*.