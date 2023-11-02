---
date: 2023-10-24T09:00
slug: building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2
title: 4.2 - Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)
authors: [cnteam]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 30-days, enterprise apps, digital experiences, app modernization, serverless, ai apps, data]
image: https://azure.github.io/Cloud-Native/img/ogImage.png
description: "Explore how to develop an AI-powered logo generator using DALL-E, Azure OpenAI and Azure Kubernetes Service (AKS)." 
tags: [Build-Intelligent-Apps, 30-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head>
<meta property="og:url" content="https://azure.github.io/cloud-native/30daysofia/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Build Intelligent Apps!| Build AI Apps On Azure"/>
<meta property="og:description" content="Explore how to develop an AI-powered logo generator using DALL-E, Azure OpenAI and Azure Kubernetes Service (AKS)."/>
<meta property="og:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png"/>
    <meta name="twitter:url" 
      content="https://azure.github.io/Cloud-Native/30daysofIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2" />
    <meta name="twitter:title" 
      content="Build Intelligent Apps! | Build AI Apps On Azure" />
    <meta name="twitter:description" 
      content="4.2 - Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)" />
    <meta name="twitter:image" 
      content="https://azure.github.io/Cloud-Native/img/ogImage.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" 
      content="@devanshidiaries" />
    <meta name="twitter:site" content="@AzureAdvocates" /> 
    <link rel="canonical" 
      href="https://azure.github.io/Cloud-Native/30daysofIA/https://azure.github.io/Cloud-Native/30daysofIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-2" />
</head>

<!-- End METADATA -->
In this article, explore how to develop an AI-powered logo generator using DALL-E, [Azure OpenAI](https://learn.microsoft.com/azure/ai-services/openai/overview?WT.mc_id=javascript-99907-ninarasi) and [Azure Kubernetes Service (AKS)](https://learn.microsoft.com/azure/aks/?WT.mc_id=javascript-99907-ninarasi).

## What We'll Cover:

 * Deploying the Logo Variation Generator app on AKS 
 * Creating a dockerfile and storing the image in Azure Container Registry
 * Create, deploy and test the app on AKS cluster

![image of logos on web interface](../../static/img/fallforia/blogs/2023-10-24/blog-image-4-2-1.jpeg)

## Building an AI-Powered Logo Variation Generator with Azure OpenAI and AKS (2)

In the [previous part](https://azure.github.io/Cloud-Native/30DaysOfIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-1) of this tutorial, we explored creating an AI-powered logo variation generator with DALL-E and building a web interface for the app. This part continues onto deploying and testing the application on Azure Kubernetes Service.

### Prerequisites

To follow this tutorial, ensure you have completed the first [part](https://azure.github.io/Cloud-Native/30DaysOfIA/building-an-ai-powered-logo-variation-generator-with-azure-openai-and-aks-1) of this topic. 

## Deploying and Testing on Azure Kubernetes Service

While running the app locally is great, Intelligent Apps are meant to be shared with others. Let’s deploy the app to Azure using AKS.

### Creating a Dockerfile

To deploy to AKS, we’ll first create a Docker image containing the app and its dependencies. A Docker image is a packaged version of your app that can run on any platform supporting Docker images.

Create a file named `Dockerfile` in the same directory as main.py. Add the following code to it:

```
FROM python:3.11

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY main.py .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]
```

This Dockerfile tells Docker to do the following:

 * Use the official Python 3.11 image as the base image. This image contains the Python interpreter and some common packages.
 * Set the working directory to `/app`, where we’ll store the app files inside the Docker image.
 * Copy the `requirements.txt` file to `/app`, which lists the Python packages that our app needs.
 * Install the required Python packages using pip.
 * Copy the `main.py` file to `/app`, which contains our app code.
 * Expose port 8000 so the FastAPI app can receive connections outside the container.
 * Run the FastAPI app when the container starts.

### Pushing the App’s Docker Image to an Azure Registry

To store and manage our Docker images, we need to use a container registry, which is a service that hosts and distributes images. [Azure Container Registry](https://azure.microsoft.com/products/container-registry?WT.mc_id=javascript-99907-ninarasi) integrates closely with AKS. We can use it to build, store, secure, scan, replicate, and manage our container images and artifacts.

Start by creating an Azure Container Registry using the `az acr create` command. Use a descriptive name for your registry instead of the placeholder:

```
az acr create --resource-group dalleResourceGroup --name <registry-name> --sku Basic
```

This will create a container registry in the resource group named `dalleResourceGroup` with the Basic service tier.

Log in to your container registry using the `az acr` login command. Replace `<registry-name>` with the name of your registry:

```
az acr login --name <registry-name> 
```

This command authenticates you with the container registry using your Azure credentials.

Build your Docker image using the `az acr build` command. Replace `<image-name>` with the name of your registry and a name for your image:

```
az acr build --registry <registry-name> --image <image-name>
```

This command builds your Docker image from the Dockerfile in the current directory and pushes it to your container registry.

Verify that your image is in your container registry using the `az acr repository` list command, replacing `<registry-name>` with the name of your registry:

```
az acr repository list --name <registry-name> --output table
```

:::info
Join the Azure team at **[KubeCon and Azure Day](https://aka.ms/aks-day)** in Chicago on **November 6, 2023**. The Azure Product Engineering team along with the Cloud Advocates team will be there to dive deep with you on developing intelligent apps with Azure Kubernetes Service.
:::

### Creating an AKS Cluster

To run our app on AKS, we need to create an AKS cluster, a group of [nodes](https://kubernetes.io/docs/concepts/architecture/nodes/) hosting our containers. A node is a virtual machine that runs one or more containers. An AKS cluster also has a control plane that manages the nodes and orchestrates the containers.

Replace `<cluster-name>` with a name for your cluster and `<registry-name>` with the name of your container registry:

```
az aks create --resource-group dalleResourceGroup --name <cluster-name> --node-count 1 --generate-ssh-keys --attach-acr <registry-name>
```

This command action creates an AKS cluster in the resource group named `dalleResourceGroup` with the following parameters:

 * `--node-count 1` ­­— ­This specifies that the cluster has one node.
 * `--generate-ssh-keys` — This generates SSH keys to access the nodes if needed.
 * `--attach-acr` — This attaches the container registry to the cluster, allowing the cluster to pull images from the registry.

Next, connect to your cluster using the `az aks get-credentials` command. Replace `<cluster-name>` with the name of your cluster:

```
az aks get-credentials --resource-group dalleResourceGroup --name <cluster-name>
```

This action downloads the credentials and configures `kubectl`, a command-line tool for interacting with Kubernetes clusters.

Verify that you’re connected to your cluster:

```
kubectl get nodes
```

This command shows the nodes in your cluster and their statuses. You should see one node with a `Ready` status.

### Deploying the App to the Cluster

To deploy our app to the cluster, we need to create a Kubernetes manifest file—a YAML file that defines the resources and configurations for our app. A Kubernetes manifest file typically consists of one or more of the following resources:

 * A [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/), which defines how to create and update instances of your app
 * A [Service](https://kubernetes.io/docs/concepts/services-networking/service/), which is a set of rules that manage network traffic to one or more containers. A Service provides a single entry point for accessing them and handling functions like load balancing and service discovery.
 * An [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/), which defines how to route external traffic to your app

Create a file named `manifest.yaml` in the same directory as your `main.py` file and paste the following:

```
# Deployment definition
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dall-e-app # The name of the Deployment
spec:
  replicas: 1 # The number of replicas (instances) of the app
  selector:
    matchLabels:
      app: dall-e-app # The label that identifies the app
  template:
    metadata:
      labels:
        app: dall-e-app
    spec:
      containers:
      - name: dall-e-app # The name of the container
        image: <registry-name>.azurecr.io/<image-name> # The image to run in the container
        ports:
        - containerPort: 8000 # The port that the container exposes to other services
        resources:
          requests:
            cpu: 1 # The number of CPUs requested by the container
            memory: 2Gi # The amount of memory requested by the container

# Service definition
apiVersion: v1
kind: Service
metadata:
  name: dall-e-service # The name of the Service
spec:
  selector:
    app: dall-e-app # The label that identifies the app
  ports:
  - protocol: TCP
    port: 80 # The port that the Service exposes externally
    targetPort: 8000 # The port of the deployment that the Service forwards traffic to
  type: LoadBalancer # The type of Service that assigns a public IP address and load balances traffic

# Define an Ingress for the app
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: dall-e-ingress # The name of the Ingress
spec:
  rules:
  - http:
      paths:
      - path: / # The path that matches incoming requests
        pathType: Prefix
        backend:
          service:
            name: dall-e-service # The name of the Service that handles requests from outside the cluster
            port:
              number: 80 # The port that the Service exposes
```

This manifest file tells Kubernetes to do the following:

 * Create a Deployment for the app with one replica (instance) that runs your Docker image on port 8000, requesting one CPU and 2 GB of memory.
 * Create a Service for the app that exposes port 80 and forwards traffic to port 8000 on the app instances. The Service also assigns a public IP address and load balances traffic across instances.
 * Create an Ingress for the app that routes incoming requests on path / to port 80 on the Service.

As in previous examples, replace `<registry-name>` and `<image-name>` with your own values in the manifest file.

Now, let’s deploy the app to the AKS cluster. Apply your manifest file using the `kubectl apply` command:

```
kubectl get deployment dall-e-app
```

This command shows information about your Deployment, such as how many replicas are available and up to date. You should see one replica with a `Ready` status.

Now, check the status of your Service using the `kubectl get service` command:

```
kubectl get service
```

This displays information about your Service, such as the cluster IP and the external IP. You should see a public IP address assigned to your service.

Finally, check the status of your Ingress:

```
kubectl get ingress dall-e-app
```

This command provides information about your Ingress, such as the host and the address. You should see the same public IP address as your Service.

Now that you’ve deployed your app on AKS, you can test it again and see how it works on AKS. Open a web browser and load `http://<web>/index.html`, where `<web>` is the public IP address of your service or ingress. You should see the same web page as before.

Enter a text prompt describing the logos you would like to create. For example, you might enter “vector art that includes a dancing cat.”

Click on the **Generate** button and wait for a few seconds. You should see several logos DALL-E generates in response to your prompt, the same as when you ran the app locally.

And you’re done! You have successfully built a complete AI-powered app and deployed it to Azure Kubernetes Service.

## Summary

We’ve covered a lot of ground! To recap, in this tutorial, you’ve:

 * Learned how to build an Intelligent App that uses DALL-E, a neural network that can generate images from text descriptions
 * Used Azure OpenAI Service to access DALL-E and FastAPI to create a simple back end that handles the requests and responses
 * Created a web interface that lets you enter a text prompt with instructions on how to generate the logo, and view the results returned by DALL-E
 * Deployed your app on Azure Kubernetes Service and tested its functionality

Now that you’ve built and deployed one app, you’re in a great position to explore Azure OpenAI’s other capabilities and apply what you’ve learned to other use cases. Check out the [Azure OpenAI documentation](https://learn.microsoft.com/azure/ai-services/openai/?WT.mc_id=javascript-99907-ninarasi) for more information and examples.

## Exercise

* Complete this **hands-on sample** [project code](https://github.com/contentlab-io/Microsoft-Building-an-AI-Powered-Logo-Variation-Generator-with-Azure-OpenAI) to build your intelligent app with multi-modal databases.
* Watch the **[Ask the Expert: Azure Kubernetes Service](https://reactor.microsoft.com/reactor/events/20732/?WT.mc_id=javascript-99907-ninarasi)** session where the Product Engineering team goes dives into the concepts for building intelligent apps using Azure Kubernetes Service.
* To revise core concepts on cloud-native or Azure Kubernetes Service, go to 
**[30 Days of Cloud Native](https://azure.github.io/Cloud-Native/cnny-2023/cloud-native-fundamentals)**.