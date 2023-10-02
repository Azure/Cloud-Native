---
date: 2023-10-03T09:00
slug: scaling-intelligent-apps-on-azure-kubernetes-services-1
title: 2-5. Scaling Intelligent Apps on Azure Kubernetes Services (1)
authors: [cnteam]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [Cloud, Data, AI, AI/ML, intelligent apps, cloud-native, 30-days, enterprise apps, digital experiences, app modernization, serverless, ai apps, data]
image: https://azure.github.io/Cloud-Native/img/ogImage.png
description: "Explore the power of multi-model databases for Intelligent Apps and their integration with Azure Cosmos DB and Azure Kubernetes Service (AKS)." 
tags: [Fall-For-IA, 30-days-of-IA, learn-live, hack-together, community-buzz, ask-the-expert, azure-kubernetes-service, azure-functions, azure-openai, azure-container-apps, azure-cosmos-db, github-copilot, github-codespaces, github-actions]
---

<head>
<meta property="og:url" content="https://azure.github.io/cloud-native/30daysofia/scaling-intelligent-apps-on-azure-kubernetes-services-1"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="**Fall For Intelligent Apps! 🍂| Build AI Apps On Azure"/>
<meta property="og:description" content="Dive into how to harness AKS’ powerful features like auto-scaling and high availability to manage variable workloads and maintain continuous service."/>
<meta property="og:image" content="https://azure.github.io/Cloud-Native/img/ogImage.png"/>
    <meta name="twitter:url" 
      content="https://azure.github.io/Cloud-Native/30daysofIA/scaling-intelligent-apps-on-azure-kubernetes-services-1" />
    <meta name="twitter:title" 
      content="**Fall For Intelligent Apps! 🍂 | Build AI Apps On Azure" />
    <meta name="twitter:description" 
      content="2-5.Dive into how to harness AKS’ powerful features like auto-scaling and high availability to manage variable workloads and maintain continuous service." />
    <meta name="twitter:image" 
      content="https://azure.github.io/Cloud-Native/img/ogImage.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" 
      content="@devanshidiaries" />
    <meta name="twitter:site" content="@AzureAdvocates" /> 
    <link rel="canonical" 
      href="https://azure.github.io/Cloud-Native/30daysofIA/scaling-intelligent-apps-on-azure-kubernetes-services-1" />
</head>

<!-- End METADATA -->
In this article, dive into how to harness AKS’ powerful features like auto-scaling and high availability to manage variable workloads and monitoring to maintain continuous service.

## What We'll Cover:

 * Deploying on Azure Kubernetes Service (AKS) 
 * Configuring AKS for dynamic application scaling
 * Ensuring High Availability with Azure Load Balancer and AKS

![image of a multi-model database](../../static/img/fallforia/blogs/2023-09-28/blog-image-3-1.png)

## Scaling Intelligent Apps on Azure Kubernetes Services (1) 

In the [first topic of this week](https://azure.github.io/Cloud-Native/30daysofIA/build-your-first-intelligent-app-with-azure-ai-and-aks-1), we explored how to use Azure Cognitive Services for Vision within Azure Kubernetes Service (AKS) to create an Intelligent App capable of analyzing images and extracting valuable data through optical character recognition (OCR). The week’s [second article](https://azure.github.io/Cloud-Native/30DaysOfIA/build-your-first-intelligent-app-with-azure-ai-and-aks-2), focused on the advantages of Azure Cosmos DB, highlighting its multi-model database and ability to handle diverse data resulting from OCR analysis in our Intelligent App. 

In this third topic, we’ll configure [Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/?WT.mc_id=javascript-99907-ninarasi) to manage varying workloads and smoothly scale our Intelligent App, ensuring it can handle intense and fluctuating workloads without compromising performance or availability. 

### Mastering Azure Kubernetes Services (AKS) for Intelligent App

At the core of the Azure ecosystem lies AKS. It plays a crucial role in optimizing application performance and efficient resource use. We can deploy, manage, and scale applications across different environments by precisely orchestrating containerized workloads.  

AKS offers several robust features that help applications scale smoothly and stay available even during heavy demand, including the following: 

 * The [cluster autoscaler](https://learn.microsoft.com/en-us/azure/aks/cluster-autoscalerhttps:/learn.microsoft.com/en-us/azure/aks/?WT.mc_id=javascript-99907-ninarasi) adjusts the number of nodes in your cluster based on how much work you have. This way, it uses resources efficiently and keeps costs in check.  
 * The [Azure Load Balancer](https://azure.microsoft.com/en-ca/products/load-balancer?WT.mc_id=javascript-99907-ninarasi) is created automatically with AKS and acts like an intelligent traffic controller. It ensures incoming network traffic is distributed well across your cluster’s nodes, optimizing resource usage.  

Together, these features give your applications a solid base to handle different workloads and keep running nonstop.  

The following sections provide hands-on demonstrations of setting up, monitoring, and optimizing AKS to drive application efficiency and performance

#### Prerequisites

To follow this tutorial, ensure you have the following:  

* Read through the [first topic of this week](https://azure.github.io/Cloud-Native/30daysofIA/build-your-first-intelligent-app-with-azure-ai-and-aks-1). 
* [Python 3.7](https://www.python.org/downloads/) or later installed  
* [VS Code](https://code.visualstudio.com/download) or another integrated development environment (IDE) for writing Python code  
* The [sample Python application](https://github.com/contentlab-io/Microsoft-Using-Azure-Kubernetes-Service-to-Deploy-an-Intelligent-App-for-Analyzing-Images-2/tree/main/Microsoft_Series_19-20_Code/intelligent-app-before-pt2) downloaded  
* [pip](https://pip.pypa.io/en/stable/installing/), the package manager for Python, installed  
* A [free Azure account](https://azure.microsoft.com/free/?WT.mc_id=javascript-99907-ninarasi). Sign up if you don’t have one yet. 
* The [Azure command-line interface](https://learn.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=javascript-99907-ninarasi) (CLI)

For a look at the final project from this tutorial, review the [complete code](https://github.com/contentlab-io/Microsoft-Using-Azure-Kubernetes-Service-to-Deploy-an-Intelligent-App-for-Analyzing-Images-2/tree/main/Microsoft_Series_19-20_Code/intelligent-app-after-pt2).

Check out the [complete project code](https://github.com/contentlab-io/Microsoft-Using-Azure-Kubernetes-Service-to-Deploy-an-Intelligent-App-for-Analyzing-Images-3/tree/main/Microsoft_21_Code/Deployment) for a preview of the final project.

:::info
Complete the **[Apps Cloud Skills Challenge](https://aka.ms/fallforIA/apps-csc)** to build on your AKS app dev skills.  

To start with the basics for developing [Kubernetes](https://azure.microsoft.com/en-us/products/kubernetes-service/?WT.mc_id=javascript-99907-ninarasi) applications, explore [#30DaysOfCloudNative](https://azure.github.io/Cloud-Native/cnny-2023). 
:::

#### Configuring AKS for Dynamic App Scaling

The cluster autoscaler and Kubernetes Horizontal Pod Autoscaling (HPA) are essential in achieving dynamic app scaling within an AKS environment.

The cluster autoscaler ensures our cluster scales its resources intelligently based on workload demand. It optimizes cost-effectiveness by adding or removing nodes dynamically, thus efficiently managing resources.

The HPA complements this by automatically scaling individual Pods within the cluster, monitoring metrics like CPU usage or custom metrics and adjusting the number of running pods to match application demand.

To understand how these two concepts work seamlessly to provide a comprehensive scaling solution, let’s now get into the details of cluster autoscaler configuration. Later, we’ll discuss how to set up HPA in our AKS cluster.

##### Setting Up the Cluster Autoscaler in AKS

Setting up the cluster autoscaler in AKS involves a combination of Azure CLI and kubectl commands. Here’s a step-by-step guide to help you through the process, including initial setup, configuring minimum and maximum node counts per node pool, and monitoring the cluster autoscaler’s performance.

To follow along, ensure you’re logged in to your Azure account. To log in, run the following command in your terminal:

```
az login
```

In the first part of this series, we created an AKS cluster named `aks-intelligent-app`. The picture below shows that AKS creates a single node pool named `nodepool1` by default. We can access the AKS cluster nodes and visualize the default `nodepool1` by clicking the **Node pools** menu in the **Settings** section:

![image of a multi-model database](../../static/img/fallforia/blogs/2023-09-28/blog-image-3-1.png)

In the image above, “Node count: 1/1 ready” indicates that we have one virtual machine (node) allocated in the node pool nodepool1 within our AKS cluster. That node is currently healthy and operational, meaning it’s ready to accept and execute workloads.

In the context of an AKS cluster, a node pool is a set of virtual machines with similar configurations and capacities. These node pools are distinct virtual machine (VM) groups forming the cluster’s computing resources. Node pools allow for workload segregation and resource allocation optimization, as we can tailor each pool to handle specific tasks or workloads. This modular approach enhances flexibility and resource management within the AKS cluster.

Using kubectl, retrieve information on the current nodes by running the command below:

```
kubectl get nodes 
```

This command above should retrieve results similar to those below:

| NAME   | STATUS   | ROLES  | AGE  | VERSION   |
|:------------|:------------|:------------|:------------|:------------|
| aks-nodepool1-27122202-vmss000000     | Ready     | agent     | 59m     | v1.26.6     |

Let’s say we want our app to support more than one node. In this case, we have two options: customize `nodepool1` or add more node pools as needed. In this guide, we’ll review how to update the existing `nodepool1` node pool to support multiple nodes. 

Run the following command in your terminal to update the existing node pool:

```
az aks update --resource-group computer-vision --name aks-intelligent-app --enable-cluster-autoscaler --min-count 2 --max-count 3
```

This change ensures the node pool will always have at least two nodes available and can scale up to a maximum of three nodes, depending on the workload demand. This approach helps manage resource allocation based on varying needs within the AKS cluster.

Now, run the `kubectl` get nodes command again to retrieve the new node count:

```
kubectl get nodes
```

| NAME   | STATUS   | ROLES  | AGE  | VERSION   |
|:------------|:------------|:------------|:------------|:------------|
| aks-nodepool1-27122202-vmss000000     | Ready     | agent     | 2d5h     | v1.26.6     |
| aks-nodepool1-27122202-vmss000001     | Ready     | agent     | 2d54    | v1.26.6     |

Refresh the **Node pools** page of your `aks-intelligent-app` AKS cluster in the Azure Portal: 

![image of a multi-model database](../../static/img/fallforia/blogs/2023-09-28/blog-image-3-1.png)

The “Node count: 2/2 ready” above indicates that you now have two nodes allocated, both in a healthy and operational state.

To view more information about the node in your cluster, select the **Nodes** tab on the **Node pools** page:

![image of a multi-model database](../../static/img/fallforia/blogs/2023-09-28/blog-image-3-1.png)

Here, the CPU, memory, disks, and Pods information provide a comprehensive view of the cluster’s resource utilization and workload distribution.

##### How the Cluster Autoscaler Dynamically Scales Resources

The cluster autoscaler is pivotal in maintaining the optimal performance and cost-effectiveness of Intelligent Apps within cloud environments.

The cluster autoscaler in AKS continuously monitors the cluster’s resource use, including CPU and memory, and compares it to the resource requests and limits defined in the Pod specifications. When the autoscaler detects that additional resources are required to meet the workloads’ demands, it automatically provisions new nodes, expanding the cluster’s capacity. Conversely, when there’s a decrease in resource demands, the cluster autoscaler scales in by removing underused nodes, optimizing cost efficiency.

By dynamically scaling resources in response to fluctuations in workload demand, the autoscaler ensures they are efficiently allocated, preventing overprovisioning during periods of low activity and scaling up when demand peaks. This adaptive approach enhances the responsiveness of Intelligent Apps and mitigates unnecessary expenses by rightsizing the infrastructure.

##### Configuring the Horizontal Pod Autoscaler

...

## Exercise

* Complete this **hands-on sample** [project code](https://github.com/contentlab-io/Microsoft-Using-Azure-Kubernetes-Service-to-Deploy-an-Intelligent-App-for-Analyzing-Images-2/tree/main/Microsoft_Series_19-20_Code/intelligent-app-after-pt2) to build your intelligent app with multi-modal databases.  
* Complete the **[AI Cloud Skills Challenge](https://aka.ms/fallforIA/ai-csc)** to build on your app dev and AI skills.  
* Register for **[Ask the Expert: Azure Kubernetes Service](https://reactor.microsoft.com/reactor/series/S-1037/)** session for live Q&A with the Product Engineering team on building intelligent serverless apps.

## Next Steps

Continue to the [next part of this topic](https://azure.github.io/Cloud-Native/30daysofIA/powering-intelligent-apps-with-azure-cosmos-db-2) to further explore loading OCR data into the multi-model database with Azure Cosmos DB, testing the app locally and deploying new version of the intelligent app to Azure Kubernetes Service. Furthermore, learn more about the real-world use cases for multi-model databases.