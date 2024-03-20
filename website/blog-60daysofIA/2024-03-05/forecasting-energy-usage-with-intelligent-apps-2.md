---
date: 2024-03-05T09:05
slug: forecasting-energy-usage-with-intelligent-apps-2
title: "2.2 Forecasting Energy Usage with Intelligent Apps Part 2"
authors: [cnteam]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud-Scale, Data, AI, AI/ML, intelligent apps, cloud-native, 60-days, enterprise apps, digital experiences, app modernization]
image: https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png
description: "In this series, you’ll create an Intelligent App powered by Azure Kubernetes Service (AKS) to forecast energy usage and cost." 
tags: [Build-Intelligent-Apps, 60-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head> 
  <meta property="og:url" content="https://azure.github.io/cloud-native/60daysofia/forecasting-energy-usage-with-intelligent-apps-2"/>
  <meta property="og:type" content="website"/> 
  <meta property="og:title" content="Build Intelligent Apps | AI Apps on Azure"/> 
  <meta property="og:description" content="In this series, you'll create an Intelligent App powered by Azure Kubernetes Service (AKS) to forecast energy usage and cost."/> 
  <meta property="og:image" content="https://github.com/Azure/Cloud-Native/blob/main/website/static/img/ogImage.png"/> 
  <meta name="twitter:url" content="https://azure.github.io/Cloud-Native/60daysofIA/forecasting-energy-usage-with-intelligent-apps-2" /> 
  <meta name="twitter:title" content="Build Intelligent Apps | AI Apps on Azure" />
 <meta name="twitter:description" content="In this series, you'll create an Intelligent App powered by Azure Kubernetes Service (AKS) to forecast energy usage and cost." />
  <meta name="twitter:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png" /> 
  <meta name="twitter:card" content="summary_large_image" /> 
  <meta name="twitter:creator" content="@devanshidiaries" /> 
  <link rel="canonical" href="https://azure.github.io/Cloud-Native/60daysofIA/forecasting-energy-usage-with-intelligent-apps-2" /> 
</head> 

<!-- End METADATA -->

![Graphic of a bar chart with a magnifying glass in front of it. To the left of the magnifying glass is a lightning bolt. At the bottom of the graphic is text that reads, "Forecasting Energy Usage with Intelligent Apps: Making Predictions."](../../static/img/60-days-of-ia/blogs/2024-03-05/2-2-1.png)

*This three-part series demonstrates how to create an Intelligent App that forecasts future energy consumption and pricing based on historical data. In this second article, you’ll build out an app that analyzes historical data on energy consumption to build a forecasting model that forecasts future energy usage/pricing based on parameters input by the user.*

## Forecasting Energy Usage with Intelligent Apps Part 2: Making Predictions

In [Part 1 of this series](https://azure.github.io/Cloud-Native/60DaysOfIA/forecasting-energy-usage-with-intelligent-apps-1), you set up an [Azure Kubernetes Service](https://azure.microsoft.com/products/kubernetes-service?ocid=buildia24_60days_blogs) (AKS) cluster, installed [Kubernetes AI Toolchain Operator](https://azure.microsoft.com/updates/preview-ai-toolchain-operator-addon-for-aks/?ocid=buildia24_60days_blogs) (KAITO), and configured KAITO with Llama 2. In this article, you’ll use the groundwork from Part 1 to build the Intelligent App.

Using historical data analysis and an open-source dataset, you’ll construct a model capable of predicting future energy usage and pricing with the flexibility of user-defined parameters.

Let’s get started!

### Prerequisites

To follow this tutorial, ensure you:

 - Completed Part 1 of this series
 - Have a Jupyter notebook or a preferred Python integrated development environment (IDE), like [Visual Studio Code](https://code.visualstudio.com/), downloaded
 - [kubectl](https://kubernetes.io/docs/tasks/tools/), the Kubernetes command-line tool, installed 
 - The [Forecast API source code](https://github.com/contentlab-io/Microsoft-Forecasting-Energy-Usage-with-Intelligent-Apps/tree/main/Part%202) downloaded

For a sneak peek of the final product, check out the [complete project code](https://github.com/contentlab-io/Microsoft-Forecasting-Energy-Usage-with-Intelligent-Apps/tree/main/Part%202).

:::info
Checkout the [Intelligent Apps on AKS: Episode 3](https://aka.ms/learn-live-building-intelligent-apps-aks-ep3?ocid=buildia24_60days_blogs), a technical deep dive hands-on training with an expert on how OpenCost, Prometheus, and Grafana with AKS can improve intelligent apps. 
:::

### Predicting Energy Consumption and Pricing with an Intelligent App

The Intelligent App will analyze historical data on energy consumption to build a regression model. For this tutorial, you’ll use an open-source [Kaggle dataset](https://www.kaggle.com/datasets/nicholasjhana/energy-consumption-generation-prices-and-weather) named “Hourly energy demand generation and weather.”

At a high level, you’ll take the following steps to build the Intelligent App:

 - **Dataset analysis and feature engineering**—You’ll start by examining the dataset. For this tutorial, you want to understand the relationships between energy consumption, pricing, and influencing factors like time. You’ll engineer new features from the raw data. This includes working hours, the day of the week, and the month.
 - **Model training**—You’ll use XGBoost as a suitable regression model, as it accounts for both time elements and external factors. You’ll train it using the processed Kaggle dataset. The goal is to teach our model to identify patterns and make reliable predictions of electricity prices.
 - **User input**—The app will let users provide parameters, such as a date, time, amount of electricity generated from burning, and more. The model will use these inputs to generate predictions.
 - **Report generation**—Llama2 will come into play here. It will help you create a clear and informative report summarizing the user’s input, the model’s predictions, and any insights derived from the analysis.

**Note:** To keep this article focused, we’ll assume you have a pre-cleaned dataset with engineered features. If you’d like to see the details of this process, [refer to this notebook](https://github.com/contentlab-io/Microsoft-Forecasting-Energy-Usage-with-Intelligent-Apps/blob/main/Part%202/data/predicting-future-energy-pricing.ipynb).

With the steps above completed, you need to split the data into training and testing sets using the code below. Doing so allows you to predict “price actual” — the target feature for this tutorial.

```
# Define the target feature 
target = 'price actual' 

# Split data into feature matrix (X) and target vector (y) 
X, y = df.drop(columns=target), df[target] 

# Split the data into training and testing sets 
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) 
```

Next, use the code below to define a function to train your model.

```
def train_xgboost_regressor(X_train, y_train, X_test, y_test): 
    """ 
    Train an XGBoost regressor using cross-validation, tune hyperparameters, and evaluate the model. 

    Parameters: 
    X_train (DataFrame): The DataFrame containing the training features. 
    y_train (Series): The Series containing the training target variable. 
    X_test (DataFrame): The DataFrame containing the testing features. 
    y_test (Series): The Series containing the testing target variable. 

    Returns: 
    float: Mean squared error (MSE) of the model. 
    float: R-squared (R2) score of the model. 
    """ 

    # Define the XGBoost regressor 
    xgb_regressor = xgb.XGBRegressor() 

    # Define parameter grid for hyperparameter tuning 
    param_grid = { 
        'learning_rate': [0.05, 0.1], 
        'max_depth': [3, 5, 7], 
        #'min_child_weight': [1, 3, 5], 
        #'subsample': [0.6, 0.8, 1.0], 
        #'colsample_bytree': [0.6, 0.8, 1.0], 
        #'gamma': [0, 0.1, 0.2] 
    }

    # Perform GridSearchCV for hyperparameter tuning 
    grid_search = GridSearchCV(estimator=xgb_regressor, param_grid=param_grid, cv=5, scoring='neg_mean_squared_error', verbose=1) 
    grid_search.fit(X_train, y_train) 

    # Get the best parameters 
    best_params = grid_search.best_params_ 

    # Initialize XGBoost regressor with best parameters 
    best_xgb_regressor = xgb.XGBRegressor(**best_params) 

    # Perform cross-validation 
    cv_scores = cross_val_score(best_xgb_regressor, X_train, y_train, cv=5, scoring='neg_mean_squared_error') 

    # Train the XGBoost regressor on the full training set 
    best_xgb_regressor.fit(X_train, y_train) 

    # Make predictions on the test set 
    y_pred = best_xgb_regressor.predict(X_test) 

    # Save the model 
    save_model(best_xgb_regressor, 'xgb_model.joblib') 

    # Calculate MSE and R2 score 
    rmse = root_mean_squared_error(y_test, y_pred) 
    r2 = r2_score(y_test, y_pred) 

    return rmse, r2 
  

rmse, r2 = train_xgboost_regressor(X_train, y_train, X_test, y_test) 
print("Test RMSE:", rmse) 
print("Test R2 Score:", r2) 
```
The output of the code snippet above should look like the following: 

![Screenshot of output code in the terminal. It reads, "Fitting 5 folds for each of 6 candidates, totalling 30 fits
Test RMSW: 5.738308690044228
Test R2 Score: 0.8378464489048971](../../static/img/60-days-of-ia/blogs/2024-03-05/2-2-2.png)

After fitting the model with cross-validation and hyperparameter tuning, you’ll see an average root mean squared error (RMSE) of approximately 5.74 and an R-squared (R2) score of about 0.84 on the test data. So, the R-squared values show promising performance in predicting energy prices!

Next, you’ll create the Forecast API, set up its communication with Llama2, and deploy it onto your AKS cluster.

:::info
Complete the [Intelligent Apps Skills Challenge](https://aka.ms/intelligent-apps/apps-csc?ocid=buildia24_60days_blogs) to compete for the leaderboard and earn a Microsoft Learn Badge. 
:::

#### Setting Up the Backend Service

In the sections that follow, you’ll deploy a simple Python service named “Forecast API.” This service will have an endpoint called `predict-chat` that will interact with the Llama2 Chat inference service within your AKS cluster. But first, you’ll set up a backend service.  

Unzip the [source code](https://github.com/contentlab-io/Microsoft-Forecasting-Energy-Usage-with-Intelligent-Apps/tree/main/Part%202) that accompanies this article. It contains the files necessary to run your Python API using the Flask library, including the following:

```
Name 
---- 
app.py 
deployment.yaml 
Dockerfile 
requirements.txt 
service.yaml 
```

Open the `app.py` file:

```
from flask import Flask, request, jsonify 
import os 
import requests 

app = Flask(__name__) 

GENERATE_ENDPOINT_CHAT = os.environ.get('GENERATE_ENDPOINT_CHAT') 

@app.route('/predict-chat', methods=['POST']) 
def predict_chat(): 
    try: 
        data = request.get_json() 

        gen_fossil_brown_coal = data.get('gen_fossil_brown_coal') or 582.0 
        gen_fossil_gas = data.get('gen_fossil_gas') or 5537.0 
        gen_fossil_hard_coal = data.get('gen_fossil_hard_coal') or 4039.0 
        gen_fossil_oil = data.get('gen_fossil_oil') or 331.0 
        gen_hydro = data.get('gen_hydro') or 454.0 
        gen_other_renewable = data.get('gen_other_renewable') or 97.0 
        gen_wind_onshore = data.get('gen_wind_onshore') or 7556.0 
        total_load_actual = data.get('total_load_actual') or 31648.0 
        price = data.get('price') or 40.61 
        max_gen_len = data.get('max_gen_len') or 1024 
        temperature = data.get('temperature') or 0.0 

        prompt = f"""Display the following report table based on user inputs in tabular text format and write a single-paragraph report summarizing the electricity usage and forecast price: 

        ### Table 

        Generation from fossil brown coal/lignite: {gen_fossil_brown_coal} MW 
        Generation from fossil gas: {gen_fossil_gas} MW 
        Generation from fossil hard coal:  {gen_fossil_hard_coal} MW 
        Generation from fossil oil: {gen_fossil_oil} MW 
        Generation from hydro pumped storage: {gen_hydro} MW 
        Generation from other renewable sources: {gen_other_renewable} MW 
        Generation from onshore wind: {gen_wind_onshore} MW 

        ### Totals: 
        Total actual load: {total_load_actual} MW 

        Forecast price: {price} EUR/MWh 

        ### Short analysis: 
        Please write a short analysis on the data above.""" 

        generate_response = requests.post(GENERATE_ENDPOINT_CHAT, json={ 
            "input_data": {"input_string":[[ {"role": "user", "content": prompt}]]}, 
            "parameters": {"max_gen_len": max_gen_len, "temperature": temperature} 
        }) 

        if generate_response.status_code == 200: 
            return generate_response.json(), 200 
        else: 
            return jsonify({'error': 'Failed to invoke generate endpoint'}), 500 

    except Exception as e: 
        return jsonify({'error': str(e)}), 500 

if __name__ == '__main__': 
    app.run(debug=True) 
```

Let’s review what the code inside the `app.py` file is doing.
 - The `app.py` file is an API endpoint for generating a report on electricity usage and forecasted price based on user-provided input data.
 - When a POST request is received by the `/predict-chat` endpoint, the application extracts the input data from the request, including parameters like generation from different energy sources, total actual load, price, and additional settings like `max_gen_len` and `temperature`. Note that for now, the app sends dummy values. In Part 3, you’ll update your app to take real values from the user and predict the electricity price using the prediction model.
 - Then, the app constructs a prompt containing the input data and sends a request to another endpoint, specified by the `GENERATE_ENDPOINT_CHAT` environment variable, to generate a response. The response includes the report table in tabular text format and a short data analysis.
 - If the generation request is successful, the application returns a report produced with the generative capabilities of Llama 2 Chat, which is hosted as an inference service in your AKS cluster.

 ##### Building and Pushing to ACR

 Run the following commands to build the image locally and push it to your Azure Container Registry (ACR). Be sure to replace username and password with your `username` and `password`.

 ```
sudo docker build --no-cache -f Dockerfile -t forecast-api -t <YOUR-ACR-NAME>.azurecr.io/forecast-api:latest . 

docker login <YOUR-ACR-NAME>.azurecr.io --username <username> --password-stdin <password> 

docker push <YOUR-ACR-NAME>.azurecr.io/forecast-api:latest 
``` 

##### Connecting to AKS
Start by making sure you’re logged in to Azure and that you have the correct AKS credentials by running the following: 

```
az login --tenant <YOUR-AZURE-TENANT-ID> 
```

Next, run the following commands:

```
export RESOURCE_GROUP=<YOUR-RESOURCE-GROUP> 
export MY_CLUSTER=<YOUR-AKS-CLUSTER-NAME> 
export LOCATION=<YOUR-LOCATION> 
export SUBSCRIPTION=<YOUR-AZURE-SUBSCRIPTION> 

az account set --subscription $SUBSCRIPTION 
az aks get-credentials --resource-group $RESOURCE_GROUP --name $MY_CLUSTER 
```

##### Deployment
Before deploying, you need to retrieve the cluster IP of the Llama2 7B chat workspace running on your AKS cluster. Run the following command in your terminal:

```
> kubectl get svc 
```

Copy the inference service’s cluster IP:

```
NAME                       TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)            AGE 
workspace-llama-2-7b-chat  ClusterIP   <CLUSTERIP>  <none>        80/TCP,29500/TCP   10m 
```

Next, open the source code directory. Modify the `deployment.yaml` file, replacing the `WORKSPACE-LLAMA-CHAT-CLUSTER-IP` placeholder below with your inference service cluster IP you copied above:  

```
apiVersion: apps/v1 
kind: Deployment 
metadata: 
  name: forecast-api-deployment 
spec: 
  replicas: 1 
  selector: 
    matchLabels: 
      app: forecast-api 
  template: 
    metadata: 
      labels: 
        app: forecast-api 
    spec: 
      containers: 
      - name: forecast-api 
        image: <YOUR-ACR-NAME>.azurecr.io/forecast-api:latest 
        ports: 
        - containerPort: 5000 
        env: 
        - name: GENERATE_ENDPOINT_CHAT 
          value: "http://<WORKSPACE-LLAMA-CHAT-CLUSTER-IP>/chat" 
```

Then, save the updated `deployment.yaml` file. 

Execute the following commands to deploy the service to your AKS cluster:

```
snap install kubectl --classic 
kubectl apply -f deployment.yaml 
kubectl apply -f service.yaml 
```

##### Invoking the service
Now that the Forecast API service is deployed, try it out!

Run the command below and grab your Forecast API external IP:

```
> kubectl get svc 

NAME                                 TYPE           CLUSTER-IP    EXTERNAL-IP   
forecast-api-service                 LoadBalancer   <CLUSTER-IP>  <FORECAST-API-IP> 
workspace-llama-2-7b-chat            ClusterIP      <CLUSTER-IP>  <none>        
workspace-llama-2-7b-chat-headless   ClusterIP      None          <none>  
```

Now, run the curl command below to test your Forecast API service. Be sure to replace the `<FORECAST-API-IP>` placeholder with your Forecast API external IP:

```
curl --location 'http://<FORECAST-API-IP>/predict-chat' \ 
--header 'Content-Type: application/json' \ 
--data '{ 
    "gen_fossil_brown_coal": 582.0, 
    "gen_fossil_gas": 5537.0, 
    "gen_fossil_hard_coal": 4039.0, 
    "gen_fossil_oil": 331.0, 
    "gen_hydro": 454.0, 
    "gen_other_renewable": 97.0, 
    "gen_wind_onshore": 7556.0, 
    "total_load_actual": 31648.0, 
    "price": 40.61, 
    "max_seq_len": 0, 
    "max_gen_len": 2048, 
    "temperature": 0.5 
}' 
```

The Forecast API service will process the request containing the data from energy sources and price, invoke the inference service, and return the response to the user:

```
"content": "Based on the user inputs provided, the following is the table of electricity generation and forecast price: 

| Generation Source | MW | 
| --- | --- | 
| Fossil Brown Coal/Lignite | 582.0 | 
| Fossil Gas | 5537.0 | 
| Fossil Hard Coal | 4039.0 | 
| Fossil Oil | 331.0 | 
| Hydro Pumped Storage | 454.0 | 
| Other Renewable Sources | 97.0 | 
| Onshore Wind | 7556.0 | 

Total Actual Load | 31648.0 | 

Forecast Price | 40.61 EUR/MWh | 

Based on the data provided, the electricity generation from various sources shows a predominance of fossil fuels, with fossil gas being the largest contributor at 5537.0 MW, followed by fossil hard coal at 4039.0 MW, and fossil brown coal/lignite at 582.0 MW. Onshore wind is the largest renewable source of electricity generation at 7556.0 MW.
```

That’s it! Note how the generative capabilities of Llama2 7B chat model can transform the cold numbers of your input into an intelligent analysis. 

## Next Steps

In this second installment of the series, you analyzed historical data, used a dataset to construct a model capable of predicting future energy pricing, and used LLaMA2 to generate a report on the energy usage. Continue to Part 3, where you’ll build a basic web interface for the Intelligent App, display the report generated by model, and deploy the app. 

To keep your learning going, participate in the [Cloud Skill Challenges](https://aka.ms/intelligent-apps/csc), check out the [Ask The Expert session](https://aka.ms/intelligent-apps/ate-aks?ocid=buildia24_60days_blogs) with the AKS product team, and register for **AKS [Customer](https://aka.ms/aks-day) and [Lab](https://aka.ms/aks-lab-day) Days** at KubeCon EU to stay abreast of the latest developments in cloud technology.