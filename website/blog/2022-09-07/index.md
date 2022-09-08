---
slug: 07-functions-python
title: 07. Functions for Python Devs
authors: [jay]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [azure, functions, serverless, concepts]
image: ./img/banner.png
description: "Let's build a wildfire detection site and application using Azure Functions for Python, with Timer Trigger and CosmosDB bindings!" 
tags: [serverless-september, 30-days-of-serverless, azure-functions, python]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/blog07-functions-python" />
  <meta name="twitter:title" 
    content="#30DaysOfServerless: Azure Functions For Python developers" />
  <meta name="twitter:description" 
    content="#30DaysOfServerless: Azure Functions For Python developers" />
  <meta name="twitter:image"
    content="https://azure.github.io/Cloud-Native/img/banners/post-kickoff.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/blog/07-functions-python" />
</head>

---

Welcome to `Day 7` of #30DaysOfServerless!

Over the past couple of days, we've explored Azure Functions from the perspective of specific programming languages. Today we'll continue that trend by looking at Python - exploring the Timer Trigger and CosmosDB binding, and showcasing integration with a FastAPI-implemented web app.

Ready? Let's go.

---

## What We'll Cover
 * **Developer Guidance**: Azure Functions On Python
 * **Build & Deploy**: Wildfire Detection Apps with Timer Trigger + CosmosDB
 * **Demo: My Fire Map App**: Using FastAPI and Azure Maps to visualize data
 * **Next Steps**: Explore Azure Samples
 * **Exercise**: Try this yourself!
 * **Resources**: For self-study!

![](./img/banner.png)


---

## Developer Guidance
If you're a Python developer new to serverless on Azure, start with the [Azure Functions Python Developer Guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-python?tabs=asgi%2Capplication-level&WT.mc_id=javascript-74010-cxa). It covers:

* Quickstarts with Visual Studio Code and Azure CLI
* Adopting best practices for hosting, reliability and efficiency.
* Tutorials showcasing Azure automation, image classification and more
* Samples showcasing Azure Functions features for Python developers

Now let's dive in and build our first Python-based Azure Functions app.

---

## Detecting Wildfires Around the World?

I live in California which is known for lots of wildfires. I wanted to create a proof of concept for developing an application that could let me know if there was a wildfire detected near my home. 

NASA has a few satelites orbiting the Earth that can detect wildfires. These satelites take scans of the radiative heat in and use that to determine the likelihood of a wildfire. NASA updates their information about every 30 minutes and it can take about four hours for to scan and process information. 

![Fire Point Near Austin, TX](img/Fire%20Point%20in%20Austin,%20TX.png)

I want to get the information but I don't want to ping NASA or another service every time I check.

What if I occaisionally download all the data I need? Then I can ping that as much as I like.

I can create a script that does just that. Any time I say _I can create a script_ that is a verbal queue for me to consider using an Azure function. With the function being ran in the cloud, I can ensure the script runs even when I'm not at my computer. 

### How the Timer Trigger Works

This function will utilize the Timer Trigger. This means Azure will call this function to run at a scheduled interval. This isn't the only way to keep the data in sync, but we know that arcgis, the service that we're using says that data is only updated every 30 minutes or so.

To learn more about the TimerTrigger as a concept, check out the [Azure Functions documentation around Timers](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer?tabs=in-process&pivots=programming-language-python&WT.mc_id=javascript-74010-cxa).

When we create the function we tell it a few things like where the script will live (in our case in `__init__.py`) the type and direction and notably _often it should run_. We specify the timer using `schedule": <The CRON INTERVAL>`. For us we're using `0 0,30 * * *` which means every 30 minutes at the hour and half-hour.

```json
{
  "scriptFile": "__init__.py",
  "bindings": [
    {
      "name": "reqTimer",
      "type": "timerTrigger",
      "direction": "in",
      "schedule": "0 0,30 * * * *"
    }
  ]
}
```

Next, we create the code that runs when the function is called.

### Connecting to the Database and our Source

> Disclaimer: The data that we're pulling is for educational purposes only. This is not meant to be a production level application. You're welcome play with this project but ensure that you're using the data [in compliance with Esri](https://www.esri.com/en-us/legal/overview).


Our function does two important things. 

1. It pulls data from ArcGIS that meets the parameters
2. It stores that pulled data into our database

If you want to check out the code in its entirety, check out the [GitHub repository](https://github.com/kjaymiller/fire-map).

Pulling the data from ArcGIS is easy. We can use the [ArcGIS Python API](https://developers.arcgis.com/python/). Then, we need to load the service layer. Finally we query that layer for the specific data.

```python
def write_new_file_data(gis_id:str, layer:int=0) -> FeatureSet:
    """Returns a JSON String of the Dataframe"""
    fire_data = g.content.get(gis_id) 
    feature = fire_data.layers[layer] # Loading Featured Layer from ArcGIS
    q = feature.query(
        where="confidence >= 65 AND hours_old  <= 4", #The filter for the query
        return_distince_values=True,
        out_fields="confidence, hours_old", # The data we want to store with our points
        out_sr=4326, # The spatial reference of the data
    )
    return q   
```

Then we need to store the data in our database.

We're using [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction?WT.mc_id=javascript-74010-cxa) for this. COSMOSDB is a NoSQL database, which means that the data looks a lot like a python dictionary as it's JSON. This means that we don't need to worry about converting the data into a format that can be stored in a relational database.

The second reason is that Cosmos DB is tied into the Azure ecosystem so that if we want to create functions Azure events around it, we can.

Our script grabs the information that we pulled from ArcGIS and stores it in our database. 

```python
async with CosmosClient.from_connection_string(COSMOS_CONNECTION_STRING) as client:
    container = database.get_container_client(container=CONTAINER)
    for record in data:
        await container.create_item(
            record,
            enable_automatic_id_generation=True,
        )
```

In our code each of these functions live in their own space. So in the main function we focus solely on what azure functions will be doing. The script that gets called is `__init__.py`. There we'll have the function call the other functions running.

We created another function called `load_and_write` that does all the work outlined above. `__init__.py` will call that.

```python
async def main(reqTimer: func.TimerRequest) -> None:
    database=database
    container=container
    await update_db.load_and_write(gis_id=GIS_LAYER_ID, database=database, container=container)
```

Then we deploy the function to Azure. I like to use VS Code's Azure Extension but you can also deploy it [a few other ways](https://docs.microsoft.com/en-us/azure/azure-functions/functions-deployment-technologies?WT.mc_id=javascript-74010-cxa).

![Deploying the function via VS Code](img/Deploy%20to%20Function%20App%20using%20VS%20Code.png)

Once the function is deployed we can load the Azure portal and see a ping whenever the function is called.
![The pings correspond to the Function being ran](img/Function%20Execution%20Count.png)

We can also see the data now living in the datastore.
![Document in Cosmos DB](img/Data%20Explorer.png)

### It's in the Database, Now What?
Now the real fun begins. We just loaded the last bit of fire data into a database. We can now query that data and serve it to others. 

As I mentioned before, our Cosmos DB data is also stored in Azure, which means that we can deploy Azure Functions [to trigger when new data is added](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2?tabs=in-process%2Cfunctionsv2&pivots=programming-language-python&WT.mc_id=javascript-74010-cxa). Perhaps you can use this to check for fires near you and use a [Logic App](https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-overview?WT.mc_id=javascript-74010-cxa) to send an alert to your phone or email.

Another option is to create a web application that talks to the database and displays the data. I've created an example of this using FastAPI – <https://jm-func-us-fire-notify.azurewebsites.net>.

![Website that Checks for Fires](img/Check%20for%20Fires.gif)

---

## Next Steps

This article showcased the Timer Trigger and the HTTP Trigger for Azure Functions in Python. Now try exploring other triggers and bindings by browsing [Bindings code samples for Python](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings?tabs=python#bindings-code-examples&WT.mc_id=javascript-74010-cxa) and [Azure Functions samples for Python](https://docs.microsoft.com/en-us/samples/browse/?products=azure-functions&WT.mc_id=javascript-74010-cxa&languages=python&WT.mc_id=javascript-74010-cxa)

Once you've tried out the samples, you may want to explore more advanced integrations or extensions for serverless Python scenarios. Here are some suggestions:
 * [Develop Python worker extensions for Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/develop-python-worker-extensions?tabs=windows%2Cpypi&WT.mc_id=javascript-74010-cxa) and publish to PyPI or GitHub.
 * [Connect Azure Functions to Azure Storage](https://docs.microsoft.com/en-us/azure/azure-functions/functions-add-output-binding-storage-queue-cli?pivots=programming-language-python&tabs=in-process%2Cbash%2Cbrowser&WT.mc_id=javascript-74010-cxa) using the CLI
 * [Create Real-Time alerts with Azure Functions and SignalR Service](https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-quickstart-azure-functions-python?toc=%2Fazure%2Fazure-functions%2Ftoc.json&WT.mc_id=javascript-74010-cxa)

And check out the resources for more tutorials to build up your Azure Functions skills.


## Exercise

I encourage you to fork [the repository](https://github.com/kjaymiller/fire-map) and try building and deploying it yourself! You can see the TimerTrigger and a HTTPTrigger building the website. 

Then try extending it. Perhaps if wildfires are a big thing in your area, you can use some of the data available in [Planetary Computer](https://planetarycomputer.microsoft.com?WT.mc_id=javascript-74010-cxa) to check out some other datasets.


## Resources

 * [Azure For Functions Python Developer Guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-python?tabs=asgi%2Capplication-level&WT.mc_id=javascript-74010-cxa)
 * [Python Quickstart: Create Your First Function App](https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-python?WT.mc_id=javascript-74010-cxa)
 * [Use FastAPI Framework With Azure Functions](https://docs.microsoft.com/en-us/samples/azure-samples/fastapi-on-azure-functions/azure-functions-python-create-fastapi-app/?WT.mc_id=javascript-74010-cxa)
 * [Use Flask Framework with Azure Functions](https://docs.microsoft.com/en-us/samples/azure-samples/flask-app-on-azure-functions/azure-functions-python-create-flask-app/?WT.mc_id=javascript-74010-cxa)
 * [Tutorial: Apply ML models in Azure Functions with Python and TensorFlow](https://docs.microsoft.com/en-us/azure/azure-functions/functions-machine-learning-tensorflow?tabs=bash&WT.mc_id=javascript-74010-cxa)