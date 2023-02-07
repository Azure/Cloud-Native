---
slug: fundamentals-day-5
title: 2-5. Kubernetes Fundamentals - Scaling Pods and Nodes
authors: [steven]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [scaling, kubernetes, aks, container-apps, cloud-native]
image: https://azure.github.io/Cloud-Native/img/og/30-10.png
description: "Learning to Scale Pods and Nodes in Kubernetes on Azure"
tags: [cloud-native, 30daysofcloudnative, zero-to-hero, ask-the-expert, azure-kubernetes-service]
---

<head>
  <meta name="twitter:url"
    content="https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-5" />
  <meta name="twitter:title"
    content="2-5. Kubernetes Fundamentals - Scaling Pods and Nodes" />
  <meta name="twitter:description"
    content="Learning to Scale Pods and Nodes in Kubernetes on Azure" />
  <meta name="twitter:image"
    content="https://azure.github.io/Cloud-Native/img/og/30-10.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator"
    content="@stevenmurawski" />
  <meta name="twitter:site" content="@AzureAdvocates" />
  <link rel="canonical"
    href="https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-5" />
</head>

Welcome to `Day 5 of Week 2` of #CloudNativeNewYear!

The theme for this week is Kubernetes fundamentals. Yesterday we talked about adding persistent storage to our deployment. Today we'll explore the topic of scaling pods and nodes in our Kubernetes cluster.

:::tip Friday, February 3rd at 11 AM PST

Join us for a live demo and let us answer your questions.

[We'll be live on YouTube walking through today's (and the rest of this week's) demos](https://aka.ms/cnny/live-coding).  Join us Friday, February 3rd and bring your questions!

:::

## What We'll Cover
 * Scaling Our Application
 * Scaling Pods
 * Scaling Nodes
 * Exercise
 * Resources


## Scaling Our Application

One of our primary reasons to use a service like Kubernetes to orchestrate our workloads is the ability to scale.  We've approached scaling in a multitude of ways over the years, taking advantage of the ever-evolving levels of hardware and software. Kubernetes allows us to [scale our units of work, Pods](https://learn.microsoft.com/azure/aks/concepts-scale?WT.mc_id=containers-84290-stmuraws#manually-scale-pods-or-nodes), and [the Nodes they run on](https://learn.microsoft.com/azure/aks/concepts-scale?WT.mc_id=containers-84290-stmuraws#cluster-autoscaler).  This allows us to take advantage of both hardware and software scaling abilities.  Kubernetes can help improve the utilization of existing hardware (by scheduling Pods on Nodes that have resource capacity).  And, with the capabilities of virtualization and/or cloud hosting (or a bit more work, if you have a pool of physical machines), Kubernetes can expand (or contract) the number of Nodes capable of hosting Pods.  Scaling is primarily driven by resource utilization, but can be triggered by a variety of other sources thanks to projects like [Kubernetes Event-driven Autoscaling (KEDA)](https://keda.sh/).

## Scaling Pods

Our first level of scaling is with our Pods. Earlier, when we worked on our deployment, we talked about how the Kubernetes would use the deployment configuration to ensure that we had the desired workloads running.  One thing we didn't explore was running more than one instance of a pod. We can define a number of replicas of a pod in our [Deployment](https://learn.microsoft.com/azure/aks/concepts-clusters-workloads?WT.mc_id=containers-84290-stmuraws#deployments-and-yaml-manifests).

### Manually Scale Pods

So, if we wanted to define more pods right at the start (or at any point really), we could update our deployment configuration file with the number of replicas and apply that configuration file.

```yml
spec:
  replicas: 5
```

Or we could use the `kubectl scale` command to update the deployment with a number of pods to create.

```powershell
kubectl scale --replicas=5 deployment/azure-voting-app
```

Both of these approaches modify the running configuration of our Kubernetes cluster and request that it ensure that we have that set number of replicas running.  Because this was a manual change, the Kubernetes cluster won't automatically increase or decrease the number of pods.  It'll just ensure that there are always the specified number of pods running.

### Autoscale Pods with the Horizontal Pod Autoscaler

Another approach to scaling our pods is to allow the [Horizontal Pod Autoscaler](https://learn.microsoft.com/azure/aks/concepts-scale?WT.mc_id=containers-84290-stmuraws#horizontal-pod-autoscaler) to help us scale in response to resources being used by the pod.  This requires a bit more configuration up front.  When we define our pod in our deployment, we need to include resource requests and limits.  The requests help Kubernetes determine what nodes may have capacity for a new instance of a pod.  The limit tells us where the node should cap utilization for a particular instance of a pod.  For example, we'll update our deployment to request 0.25 CPU and set a limit of 0.5 CPU.

```yml
    spec:
      containers:
      - image: acrudavoz.azurecr.io/cnny2023/azure-voting-app-rust:ca4
        name: azure-voting-app-rust
        ports:
        - containerPort: 8080
        env:
        - name: DATABASE_URL
          value: postgres://postgres:mypassword@10.244.0.29
        resources:
          requests:
            cpu: 250m
          limits:
            cpu: 500m
```

Now that we've given Kubernetes an allowed range and an idea of what free resources a node should have to place new pods, we can set up autoscaling.  Because autoscaling is a persistent configuration, I like to define it in a configuration file that I'll be able to keep with the rest of my cluster configuration.  We'll use the `kubectl` command to help us write the configuration file.  We'll request that Kubernetes watch our pods and when the average CPU utilization if 50% of the requested usage (in our case if it's using more than 0.375 CPU across the current number of pods), it can grow the number of pods serving requests up to 10.  If the utilization drops, Kubernetes will have the permission to deprovision pods down to the minimum (three in our example).

```powershell
kubectl autoscale deployment azure-voting-app --cpu-percent=50 --min=3 --max=10 -o YAML --dry-run=client
```

Which would give us:

```yml
apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  creationTimestamp: null
  name: azure-voting-app
spec:
  maxReplicas: 10
  minReplicas: 3
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: azure-voting-app
  targetCPUUtilizationPercentage: 50
status:
  currentReplicas: 0
  desiredReplicas: 0
```

So, how often does the autoscaler check the metrics being monitored?  The autoscaler checks the Metrics API every 15 seconds, however the pods stats are only updated every 60 seconds.  This means that an autoscale event may be evaluated about once a minute.  Once an autoscale down event happens however, Kubernetes has a cooldown period to give the new pods a chance to distribute the workload and let the new metrics accumulate.  There is no delay on scale up events.

### Application Architecture Considerations

We've focused in this example on our front end, which is an easier scaling story.  When we start talking about scaling our database layers or anything that deals with persistent storage or has primary/replica configuration requirements things get a bit more complicated. Some of these applications may have built-in leader election or [could use sidecars to help use existing features in Kubernetes to perform that function](https://kubernetes.io/blog/2016/01/simple-leader-election-with-kubernetes/).  For shared storage scenarios, [persistent volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) (or [persistent volumes with Azure](https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/app-platform/aks/storage?WT.mc_id=containers-84290-stmuraws)) can be of help, if the application knows how to play well with shared file access.

Ultimately, you know your application architecture and, while Kubernetes may not have an exact match to how you are doing things today, the underlying capability is probably there under a different name.  This abstraction allows you to more effectively use Kubernetes to operate a variety of workloads with the levels of controls you need.

## Scaling Nodes

We've looked at how to scale our pods, but that assumes we have enough resources in our existing pool of nodes to accomodate those scaling requests.  Kubernetes can also help scale our available nodes to ensure that our applications have the necessary resources to meet their performance requirements.

### Manually Scale Nodes

Manually scaling nodes isn't a direct function of Kubernetes, so your operating environment instructions may vary.  On Azure, it's pretty straight forward.  Using the Azure CLI (or other tools), we can tell our AKS cluster to scale up or scale down the number of nodes in our node pool.

First, we'll check out how many nodes we currently have in our working environment.

```powershell
kubectl get nodes
```

This will show us

```
azure-voting-app-rust ❯  kubectl get nodes
NAME                            STATUS   ROLES   AGE     VERSION
aks-pool0-37917684-vmss000000   Ready    agent   5d21h   v1.24.6
```


Then, we'll scale it up to three nodes.

```powershell
az aks scale --resource-group $ResourceGroup --name $AksName --node-count 3
```

Then, we'll check out how many nodes we now have in our working environment.

```powershell
kubectl get nodes
```

Which returns:

```
azure-voting-app-rust ❯  kubectl get nodes
NAME                            STATUS   ROLES   AGE     VERSION
aks-pool0-37917684-vmss000000   Ready    agent   5d21h   v1.24.6
aks-pool0-37917684-vmss000001   Ready    agent   5m27s   v1.24.6
aks-pool0-37917684-vmss000002   Ready    agent   5m10s   v1.24.6
```

### Autoscale Nodes with the Cluster Autoscaler

Things get more interesting when we start working with [the Cluster Autoscaler](https://learn.microsoft.com/azure/aks/cluster-autoscaler?WT.mc_id=containers-84290-stmuraws).  The Cluster Autoscaler watches for the inability of Kubernetes to schedule the required number of pods due to resource constraints (and a few other criteria like affinity/anti-affinity).  If there are insufficient resources available on the existing nodes, the autoscaler can provision new nodes into the nodepool.  Likewise, the autoscaler watches to see if the existing pods could be consolidated to a smaller set of nodes and can remove excess nodes.

Enabling the autoscaler is likewise an update that can be dependent on where and how your Kubernetes cluster is hosted. Azure makes it easy with a simple Azure CLI command.

```powershell
az aks update `
  --resource-group $ResourceGroup `
  --name $AksName `
  --update-cluster-autoscaler `
  --min-count 1 `
  --max-count 5
```

There are a [variety of settings](https://learn.microsoft.com/azure/aks/cluster-autoscaler#using-the-autoscaler-profile?WT.mc_id=containers-84290-stmuraws) that can be configured to tune how the autoscaler works.

## Scaling on Different Events

CPU and memory utilization are the primary drivers for the Horizontal Pod Autoscaler, but those might not be the best measures as to when you might want to scale workloads.  There are other options for scaling triggers and one of the more common plugins to help with that is the [Kubernetes Event-driven Autoscaling (KEDA) project](https://keda.sh/).  The KEDA project makes it easy to plug in different event sources to help drive scaling.  [Find more information about using KEDA on AKS here.](https://learn.microsoft.com/azure/aks/keda-about?WT.mc_id=containers-84290-stmuraws)

## Exercise

Let's try out the scaling configurations that we just walked through using [our sample application](https://aka.ms/azure-voting-app-rust).  If you still have your environment from Day 1, you can use that. 

> 📝 NOTE: If you don't have an AKS cluster deployed, please head over to [Azure-Samples/azure-voting-app-rust](https://github.com/Azure-Samples/azure-voting-app-rust/tree/week2/day4), clone the repo, and follow the instructions in the [README.md](https://github.com/Azure-Samples/azure-voting-app-rust/blob/main/README.md) to execute the Azure deployment and setup your `kubectl` context. Check out [the first post this week for more on the environment setup](../2023-01-30/PodsAndDeployments.md#setting-up-a-kubernetes-environment-in-azure).

### Configure Horizontal Pod Autoscaler

* Edit `./manifests/deployment-app.yaml` to include resource requests and limits.

```yml
        resources:
          requests:
            cpu: 250m
          limits:
            cpu: 500m
```

* Apply the updated deployment configuration.

```powershell
kubectl apply -f ./manifests/deployment-app.yaml
```

* Create the horizontal pod autoscaler configuration and apply it

```powershell
kubectl autoscale deployment azure-voting-app --cpu-percent=50 --min=3 --max=10 -o YAML --dry-run=client > ./manifests/scaler-app.yaml
kubectl apply -f ./manifests/scaler-app.yaml
```

* Check to see your pods scale out to the minimum.

```powershell
kubectl get pods
```

### Configure Cluster Autoscaler

Configuring the basic behavior of the Cluster Autoscaler is a bit simpler.  We just need to run the Azure CLI command to enable the autoscaler and define our lower and upper limits.

* Check the current nodes available (should be 1).

```powershell
kubectl get nodes
```

* Update the cluster to enable the autoscaler

```powershell
az aks update `
  --resource-group $ResourceGroup `
  --name $AksName `
  --update-cluster-autoscaler `
  --min-count 2 `
  --max-count 5
```

* Check to see the current number of nodes (should be 2 now).

```powershell
kubectl get nodes
```

## Resources

### Documentation

* [Manually Scaling Pods and Nodes](https://learn.microsoft.com/azure/aks/concepts-scale?WT.mc_id=containers-84290-stmuraws#manually-scale-pods-or-nodes)
* [Deployments](https://learn.microsoft.com/azure/aks/concepts-clusters-workloads?WT.mc_id=containers-84290-stmuraws#deployments-and-yaml-manifests)
* [Horizontal Pod Autoscaler](https://learn.microsoft.com/azure/aks/concepts-scale?WT.mc_id=containers-84290-stmuraws#horizontal-pod-autoscaler)
* [Leader Election in Kubernetes](https://kubernetes.io/blog/2016/01/simple-leader-election-with-kubernetes/)
* [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)
* [Persistent Volumes with Azure](https://learn.microsoft.com/azure/cloud-adoption-framework/scenarios/app-platform/aks/storage?WT.mc_id=containers-84290-stmuraws)
* [Cluster Autoscaler](https://learn.microsoft.com/azure/aks/cluster-autoscaler?WT.mc_id=containers-84290-stmuraws)
* [Cluster Autoscaler Profile Settings](https://learn.microsoft.com/azure/aks/cluster-autoscaler#using-the-autoscaler-profile?WT.mc_id=containers-84290-stmuraws)
* [Kubernetes Event-driven Autoscaling (KEDA) project](https://keda.sh/)
* [KEDA on AKS](https://learn.microsoft.com/azure/aks/keda-about?WT.mc_id=containers-84290-stmuraws)

### Training

* [Application scalability on AKS with HorizontalPodAutoscalers](https://learn.microsoft.com/training/modules/aks-application-autoscaling-native?WT.mc_id=containers-84290-stmuraws)
* [Cluster Autoscaling with AKS](https://learn.microsoft.com/training/modules/aks-cluster-autoscaling?WT.mc_id=containers-84290-stmuraws)
* [Scale container applications in Azure Kubernetes Services using KEDA](https://learn.microsoft.com/training/modules/aks-app-scale-keda?WT.mc_id=containers-84290-stmuraws)
