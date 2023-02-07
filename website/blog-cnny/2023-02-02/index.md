---
slug: fundamentals-day-4
title: 2-4. Kubernetes Fundamentals - Volumes, Mounts, and Claims
authors: [paul]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [cloudnative, azure, kubernetes, storage]
image: https://azure.github.io/Cloud-Native/img/og/30-09.png
description: "A Step-by-Step Guide using Kubernetes Persistent Volumes, Persistent Volume Claims, and Storage Classes" 
tags: [cloud-native-new-year, azure-kubernetes-service, aks, kubernetes, persistent-volumes, persistent-volume-claims]
---


<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-4" />
  <meta name="twitter:title" 
    content="2-4. Kubernetes Fundamentals - Volumes, Mounts, and Claims" />
  <meta name="twitter:description" 
    content="A Step-by-Step Guide using Kubernetes Persistent Volumes, Persistent Volume Claims, and Storage Classes" />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/img/og/30-09.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@pauldotyu" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/fundamentals-day-4" />
</head>

Welcome to `Day 4 of Week 2` of #CloudNativeNewYear!

The theme for this week is Kubernetes fundamentals. Yesterday we talked about how to set app configurations and secrets at runtime using Kubernetes ConfigMaps and Secrets. Today we'll explore the topic of persistent storage on Kubernetes and show you can leverage Persistent Volumes and Persistent Volume Claims to ensure your PostgreSQL data can survive container restarts.

:::tip Ask the Experts Thursday, February 9th at 9 AM PST

[Join us for a live Q&A with Experts from the Azure Kubernetes Service product team!](https://aka.ms/ateonlearn)

:::

:::tip Catch the Replay of the Live Demo

Join us for a live demo and let us answer your questions.

[We were live on YouTube walking through today's (and the rest of this week's) demos](https://aka.ms/cnny/week2-demo).  

:::

## What We'll Cover

* Containers are ephemeral
* Persistent storage on Kubernetes
* Persistent storage on AKS
* Takeaways
* Resources

## Containers are ephemeral

In our sample application, the frontend UI writes vote values to a backend PostgreSQL database. By default the database container stores its data on the container's local file system, so there will be data loss when the pod is re-deployed or crashes as containers are meant to start with a clean slate each time.

Let's re-deploy our sample app and experience the problem first hand.

> 📝 NOTE: If you don't have an AKS cluster deployed, please head over to [Azure-Samples/azure-voting-app-rust](https://github.com/Azure-Samples/azure-voting-app-rust/tree/week2/day3), clone the repo, and follow the instructions in the [README.md](https://github.com/Azure-Samples/azure-voting-app-rust/blob/main/README.md) to execute the Azure deployment and setup your `kubectl` context. Check out [the first post this week for more on the environment setup](../2023-01-30/PodsAndDeployments.md#setting-up-a-kubernetes-environment-in-azure).

```bash
kubectl apply -f ./manifests
```

Wait for the `azure-voting-app` service to be assigned a public IP then browse to the website and submit some votes. Use the command below to print the URL to the terminal.

```bash
echo "http://$(kubectl get ingress azure-voting-app -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"
```

Now, let's delete the pods and watch Kubernetes do what it does best... that is, re-schedule pods.

```bash
# wait for the pod to come up then ctrl+c to stop watching
kubectl delete --all pod --wait=false && kubectl get po -w
```

Once the pods have been recovered, reload the website and confirm the vote tally has been reset to zero.

We need to fix this so that the data outlives the container.

## Persistent storage on Kubernetes

In order for application data to survive crashes and restarts, you must implement [Persistent Volumes and Persistent Volume Claims](https://kubernetes.io/docs/concepts/storage/persistent-volumes/).

A persistent volume represents storage that is available to the cluster. Storage volumes can be provisioned manually by an administrator or dynamically using [Container Storage Interface (CSI)](https://kubernetes.io/docs/concepts/storage/volumes/#csi) and [storage classes](https://kubernetes.io/docs/concepts/storage/storage-classes/), which includes information on how to provision CSI volumes.

When a user needs to add persistent storage to their application, a persistent volume claim is made to allocate chunks of storage from the volume. This "claim" includes things like volume mode (e.g., file system or block storage), the amount of storage to allocate, the [access mode](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes), and optionally a storage class. Once a persistent volume claim has been deployed, users can add the volume to the pod and [mount it in a container](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#claims-as-volumes).

In the next section, we'll demonstrate how to enable persistent storage on AKS.

## Persistent storage on AKS

With AKS, [CSI drivers](https://learn.microsoft.com/azure/aks/csi-storage-drivers?WT.mc_id=containers-84290-pauyu) and [storage classes](https://learn.microsoft.com/azure/aks/concepts-storage?WT.mc_id=containers-84290-pauyu#storage-classes) are pre-deployed into your cluster. This allows you to natively use [Azure Disks](https://learn.microsoft.com/azure/aks/azure-disk-csi?WT.mc_id=containers-84290-pauyu), [Azure Files](https://learn.microsoft.com/azure/aks/azure-files-csi?WT.mc_id=containers-84290-pauyu), and [Azure Blob Storage](https://learn.microsoft.com/azure/aks/azure-blob-csi?WT.mc_id=containers-84290-pauyu) as persistent volumes. You can either bring your own Azure storage account and use it with AKS or have AKS provision an Azure storage account for you.

To view the Storage CSI drivers that have been enabled in your AKS cluster, run the following command.

```bash
az aks show \
  --name <YOUR_AKS_NAME> \
  --resource-group <YOUR_AKS_RESOURCE_GROUP> \
  --query storageProfile
```

You should see output that looks like this.

```json
{
  "blobCsiDriver": null,
  "diskCsiDriver": {
    "enabled": true,
    "version": "v1"
  },
  "fileCsiDriver": {
    "enabled": true
  },
  "snapshotController": {
    "enabled": true
  }
}
```

To view the storage classes that have been installed in your cluster, run the following command.

```bash
kubectl get storageclass
```

Workload requirements will dictate which CSI driver and storage class you will need to use. 

If you need block storage, then you should use the `blobCsiDriver`. The driver may not be enabled by default but you can enable it by following instructions which can be found in the [Resources](#resources) section below.

If you need file storage you should leverage either `diskCsiDriver` or `fileCsiDriver`. The decision between these two boils down to whether or not you need to have the underlying storage accessible by one pod or multiple pods. It is important to note that `diskCsiDriver` currently supports access from a single pod only. Therefore, if you need data to be accessible by multiple pods at the same time, then you should opt for `fileCsiDriver`.

For our PostgreSQL deployment, we'll use the `diskCsiDriver` and have AKS create an Azure Disk resource for us. There is no need to create a PV resource, all we need to do to is create a PVC using the `managed-csi-premium` storage class.

Run the following command to create the PVC.

```bash
kubectl apply -f - <<EOF            
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-azuredisk
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: managed-csi-premium
EOF
```

When you check the PVC resource, you'll notice the `STATUS` is set to `Pending`. It will be set to `Bound` once the volume is mounted in the PostgreSQL container.

```bash
kubectl get persistentvolumeclaim
```

Let's delete the `azure-voting-db` deployment.

```bash
kubectl delete deploy azure-voting-db
```

Next, we need to apply an updated deployment manifest which includes our PVC.

```bash
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: null
  labels:
    app: azure-voting-db
  name: azure-voting-db
spec:
  replicas: 1
  selector:
    matchLabels:
      app: azure-voting-db
  strategy: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: azure-voting-db
    spec:
      containers:
      - image: postgres:15.0-alpine
        name: postgres
        ports:
        - containerPort: 5432
        env:
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: azure-voting-secret
              key: POSTGRES_PASSWORD
        resources: {}
        volumeMounts:
        - name: mypvc
          mountPath: "/var/lib/postgresql/data"
          subPath: "data"
      volumes:
      - name: mypvc
        persistentVolumeClaim:
          claimName: pvc-azuredisk
EOF
```

In the manifest above, you'll see that we are mounting a new volume called `mypvc` (the name can be whatever you want) in the pod which points to a PVC named `pvc-azuredisk`. With the volume in place, we can mount it in the container by referencing the name of the volume  `mypvc` and setting the mount path to `/var/lib/postgresql/data` (which is the [default path](https://www.postgresql.org/docs/9.1/storage-file-layout.html)).

> 💡 IMPORTANT: When mounting a volume into a non-empty subdirectory, you must add [`subPath`](https://kubernetes.io/docs/concepts/storage/volumes/#using-subpath) to the volume mount and point it to a subdirectory in the volume rather than mounting at root. In our case, when Azure Disk is formatted, it leaves a `lost+found` directory as documented [here](https://learn.microsoft.com/troubleshoot/azure/azure-kubernetes/could-not-change-permissions-azure-files?WT.mc_id=containers-84290-pauyu).

Watch the pods and wait for the `STATUS` to show `Running` and the pod's `READY` status shows `1/1`.

```bash
# wait for the pod to come up then ctrl+c to stop watching
kubectl get po -w
```

Verify that the `STATUS` of the PVC is now set to `Bound`

```bash
kubectl get persistentvolumeclaim
```

With the new database container running, let's restart the application pod, wait for the pod's `READY` status to show `1/1`, then head back over to our web browser and submit a few votes.

```bash
kubectl delete pod -lapp=azure-voting-app --wait=false && kubectl get po -lapp=azure-voting-app -w
```

Now the moment of truth... let's rip out the pods again, wait for the pods to be re-scheduled, and confirm our vote counts remain in tact.

```bash
kubectl delete --all pod --wait=false && kubectl get po -w
```

If you navigate back to the website, you'll find the vote are still there 🎉

## Takeaways

By design, containers are meant to be ephemeral and stateless workloads are ideal on Kubernetes. However, there will come a time when your data needs to outlive the container. To persist data in your Kubernetes workloads, you need to leverage PV, PVC, and optionally storage classes. In our demo scenario, we leveraged CSI drivers built into AKS and created a PVC using pre-installed storage classes. From there, we updated the database deployment to mount the PVC in the container and AKS did the rest of the work in provisioning the underlying Azure Disk. If the built-in storage classes does not fit your needs; for example, you need to change the `ReclaimPolicy` or change the SKU for the Azure resource, then you can [create your own custom storage class](https://learn.microsoft.com/azure/aks/azure-disk-csi#create-a-custom-storage-class?WT.mc_id=containers-84290-pauyu) and configure it just the way you need it 😊

We'll revisit this topic again next week but in the meantime, check out some of the resources listed below to learn more.

See you in the next post!

## Resources

:::tip Take the Cloud Skills Challenge!

[Enroll](https://learn.microsoft.com/training/challenges?id=a0e385b9-f970-4182-b2e2-3b4619b6c356) in the Cloud Skills Challenge! 

Don't miss out on this opportunity to level up your skills and stay ahead of the curve in the world of cloud native. 
:::

* [Kubernetes: Volumes](https://kubernetes.io/docs/concepts/storage/volumes/)
* [Kubernetes: Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)
* [Container Storage Interface (CSI) for Kubernetes](https://kubernetes.io/blog/2019/01/15/container-storage-interface-ga/)
* [Container Storage Interface (CSI) drivers on Azure Kubernetes Service (AKS)](https://learn.microsoft.com/azure/aks/csi-storage-drivers?WT.mc_id=containers-84290-pauyu)
* [Enable CSI driver on a new or existing AKS cluster](https://learn.microsoft.com/azure/aks/azure-blob-csi?WT.mc_id=containers-84290-pauyu&tabs=NFS#enable-csi-driver-on-a-new-or-existing-aks-cluster)
* [AKS: Volumes](https://learn.microsoft.com/azure/aks/concepts-storage?WT.mc_id=containers-84290-pauyu#volumes)
* [AKS: Storage Classes](https://learn.microsoft.com/azure/aks/concepts-storage?WT.mc_id=containers-84290-pauyu#storage-classes)
* [AKS: Built-in Storage Classes](https://learn.microsoft.com/azure/aks/azure-disks-dynamic-pv?WT.mc_id=containers-84290-pauyu#built-in-storage-classes)
