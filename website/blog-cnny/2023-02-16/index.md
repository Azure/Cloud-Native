---
slug: aks-extensions-addons
title: 4-4. Azure Kubernetes Services Add-ons and Extensions
authors: [jorge]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [containers, aks, kubernetes, extensions, addons]
image: https://azure.github.io/Cloud-Native/img/og/30-19.png
description: "In this article we are going to learn about the extensions and add-ons available to AKS - Azure Kubernetes Services" 
tags: [cloud-native, 30daysofcloudnative, zero-to-hero, ask-the-expert, azure-kubernetes-service, containers, addons, extensions]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/aks-extensions-addons" />
  <meta name="twitter:title" 
    content="Azure Kubernetes Services Add-ons and Extensions" />
  <meta name="twitter:description" 
    content="In this article we are going to learn about the extensions and addons available to AKS - Azure Kubernetes Services" />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/img/og/30-19.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@jorgearteiro" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/aks-extensions-addons" />
</head>

Welcome to `Day 4 of Week 4` of #CloudNativeNewYear!

The theme for this week is going further with Cloud Native. Yesterday we talked about Windows Containers. Today we'll explore addons and extensions available to Azure Kubernetes Services (AKS).

## What We'll Cover
 * Introduction
 * Add-ons
 * Extensions
 * Add-ons vs Extensions
 * Resources

<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Introduction

Azure Kubernetes Service (AKS) is a fully managed container orchestration service that makes it easy to deploy and manage containerized applications on Azure. AKS offers a number of features and capabilities, including the ability to extend its supported functionality through the use of add-ons and extensions.

There are also integrations available from [open-source projects and third parties](https://learn.microsoft.com/azure/aks/integrations?WT.mc_id=containers-84290-joarteir#open-source-and-third-party-integrations), but they are not covered by the [AKS support policy](https://learn.microsoft.com/azure/aks/support-policies?WT.mc_id=containers-84290-joarteir).


## Add-ons

Add-ons provide a supported way to extend AKS. Installation, configuration and lifecycle are managed by AKS following [pre-determine updates rules](https://learn.microsoft.com/azure/aks/integrations?WT.mc_id=containers-84290-joarteir#add-ons).

As an example, let's enable Container Insights with the monitoring addon. on an existing AKS cluster using `az aks enable-addons --addons` CLI command  

```azurecli
az aks enable-addons \
  --name MyManagedCluster \
  --resource-group MyResourceGroup \
  --addons monitoring
```

or you can use `az aks create --enable-addons` when creating new clusters
```azurecli
az aks create \
  --name MyManagedCluster \
  --resource-group MyResourceGroup \
  --enable-addons monitoring
```

The current available add-ons are:

1.	**http_application_routing** - Configure ingress with automatic public DNS name creation. Only recommended for development.
2.	**monitoring** - Container Insights monitoring.
3.	**virtual-node** - CNCF virtual nodes open source project.
4.	**azure-policy** - Azure Policy for AKS.
5.	**ingress-appgw** - Application Gateway Ingress Controller (AGIC).
6.	**open-service-mesh** - CNCF Open Service Mesh project.
7.	**azure-keyvault-secrets-provider** - Azure Key Vault Secrets Provider for Secret Store CSI Driver.
8.	**web_application_routing** - Managed NGINX ingress Controller.
9.	**keda** - CNCF Event-driven autoscaling project.

For more details, get the updated [list of AKS Add-ons here](https://learn.microsoft.com/azure/aks/integrations?WT.mc_id=containers-84290-joarteir#available-add-ons)


## Extensions

Cluster Extensions uses Helm charts and integrates with Azure Resource Manager (ARM) to provide installation and lifecycle management of capabilities on top of AKS. 

Extensions can be auto upgraded using minor versions, but it requires extra management and configuration. Using Scope parameter, it can be installed on the whole cluster or per namespace.

AKS Extensions requires an Azure CLI extension to be installed. To add or update this CLI extension use the following commands:
```azurecli
az extension add --name k8s-extension
```
and to update an existing extension
```azurecli
az extension update --name k8s-extension
```

There are only 3 available extensions:
1.	**Dapr** - CNCF Dapr project.
2.	**Azure ML** - Integrate Azure Machine Learning with AKS to train, inference and manage ML models.
3.	**Flux (GitOps)** - CNCF Flux project integrated with AKS to enable cluster configuration and application deployment using GitOps.

As an example, you can install Azure ML using the following command:
```azurecli
az k8s-extension create \
  --name aml-compute --extension-type Microsoft.AzureML.Kubernetes \
  --scope cluster --cluster-name <clusterName> \
  --resource-group <resourceGroupName> \
  --cluster-type managedClusters \
  --configuration-settings enableInference=True allowInsecureConnections=True
```

For more details, get the updated [list of AKS Extensions here](https://learn.microsoft.com/azure/aks/cluster-extensions?tabs=azure-cli&WT.mc_id=containers-84290-joarteir#currently-available-extensions)


## Add-ons vs Extensions

AKS Add-ons brings an advantage of been fully managed by AKS itself, and AKS Extensions are more flexible and configurable but requires extra level of management. 

Add-ons are part of the AKS resource provider in the Azure API, and AKS Extensions are a separate resource provider on the Azure API.


## Resources

* [Add-ons, Extensions, and other integrations with AKS](https://learn.microsoft.com/azure/aks/integrations?WT.mc_id=containers-84290-joarteir)
* [Available Add-ons on AKS](https://learn.microsoft.com/azure/aks/integrations#available-add-ons?WT.mc_id=containers-84290-joarteir)
* [Available Extensions on AKS](https://learn.microsoft.com/azure/aks/cluster-extensions?tabs=azure-cli&WT.mc_id=containers-84290-joarteir#currently-available-extensions)
* [Open source and third-party integrations](https://learn.microsoft.com/azure/aks/integrations?WT.mc_id=containers-84290-joarteir#open-source-and-third-party-integrations)
* [CNCF Dapr project](https://dapr.io/) 
* [CNCF Flux project](https://fluxcd.io/)
* [CNCF KEDA project](https://keda.sh/)