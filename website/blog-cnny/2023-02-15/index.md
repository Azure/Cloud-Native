---
slug: windows-containers
title: 4-3. Windows Containers
authors: [vinicius]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [containers, windows, aks, kubernetes]
image: https://azure.github.io/Cloud-Native/img/og/30-18.png
description: "Let's learn about Windows containers!" 
tags: [cloud-native, 30daysofcloudnative, zero-to-hero, ask-the-expert, azure-kubernetes-service, containers, windows]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/windows-containers" />
  <meta name="twitter:title" 
    content="Windows Containers" />
  <meta name="twitter:description" 
    content="Let's learn about Windows containers!" />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/img/og/30-18.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@vrapolinario" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/windows-containers" />
</head>

Welcome to `Day 3 of Week 4` of #CloudNativeNewYear!

The theme for this week is going further with Cloud Native. Yesterday we talked about using Draft to accelerate your Kubernetes adoption. Today we'll explore the topic of Windows containers.

## What We'll Cover
 * Introduction
 * Windows containers overview
 * Windows base container images
 * Isolation
 * Exercise: Try this yourself!
 * Resources: For self-study!


<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Introduction

Windows containers were launched along with Windows Server 2016, and have evolved since. In its latest release, Windows Server 2022, Windows containers have reached a great level of maturity and allow for customers to run production grade workloads.

While suitable for new developments, Windows containers also provide developers and operations with a different approach than Linux containers. It allows for existing Windows applications to be containerized with little or no code changes. It also allows for professionals that are more comfortable with the Windows platform and OS, to leverage their skill set, while taking advantage of the containers platform.

## Windows container overview

In essence, Windows containers are very similar to Linux. Since Windows containers use the same foundation of Docker containers, you can expect that the same architecture applies - with the specific notes of the Windows OS. For example, when running a Windows container via Docker, you use the same commands, such as docker run. To pull a container image, you can use docker pull, just like on Linux. However, to run a Windows container, you also need a Windows container host. This requirement is there because, as you might remember, a container shares the OS kernel with its container host.

On Kubernetes, Windows containers are supported since Windows Server 2019. Just like with Docker, you can manage Windows containers like any other resource on the Kubernetes ecosystem. A Windows node can be part of a Kubernetes cluster, allowing you to run Windows container based applications on services like Azure Kubernetes Service. To deploy an Windows application to a Windows pod in Kubernetes, you can author a YAML specification much like you would for Linux. The main difference is that you would point to an image that runs on Windows, and you need to specify a node selection tag to indicate said pod needs to run on a Windows node.

## Windows base container images

On Windows containers, you will always use a base container image provided by Microsoft. This base container image contains the OS binaries for the container to run. This image can be as large as 3GB+, or small as ~300MB. The difference in the size is a consequence of the APIs and components available in each Windows container base container image. There are primarily, three images: Nano Server, Server Core, and Server. 

Nano Server is the smallest image, ranging around 300MB. It's a base container image for new developments and cloud-native scenarios. Applications need to target Nano Server as the Windows OS, so not all frameworks will work. For example, .Net works on Nano Server, but .Net Framework doesn't. Other third-party frameworks also work on Nano Server, such as Apache, NodeJS, Phyton, Tomcat, Java runtime, JBoss, Redis, among others.

Server Core is a much larger base container image, ranging around 1.25GB. It's larger size is compensated by it's application compatibility. Simply put, any application that meets the requirements to be run on a Windows container, can be containerized with this image.

The Server image builds on the Server Core one. It ranges around 3.1GB and has even greater application compatibility than the Server Core image. In addition to the traditional Windows APIs and components, this image allows for scenarios such as Machine Learning via DirectX with GPU access.

The best image for your scenario is dependent on the requirements your application has on the Windows OS inside a container. However, there are some scenarios that are not supported at all on Windows containers - such as GUI or RDP dependent applications, some Windows Server infrastructure roles, such as Active Directory, among others.

## Isolation

When running containers, the kernel of the container host is shared with the containers running on it. While extremely convenient, this poses a potential risk for multi-tenant scenarios. If one container is compromised and has access to the host, it could potentially compromise other containers in the same system.

For enterprise customers running on-premises (or even in the cloud), this can be mitigated by using a VM as a container host and considering the VM itself a security boundary. However, if multiple workloads from different tenants need to share the same host, Windows containers offer another option: Hyper-V isolation. While the name Hyper-V is associated with VMs, its virtualization capabilities extend to other services, including containers. Hyper-V isolated containers run on a purpose built, extremely small, highly performant VM. However, you manage a container running with Hyper-V isolation the same way you do with a process isolated one. In fact, the only notable difference is that you need to append the `--isolation=hyperv` tag to the `docker run` command.

## Exercise

Here are a few examples of how to use Windows containers:

### Run Windows containers via Docker on your machine

To pull a Windows base container image:

```powershell
docker pull mcr.microsoft.com/windows/servercore:ltsc2022
```

To run a basic IIS container:
```powershell
#This command will pull and start a IIS container. You can access it from http://<your local IP>:8080
docker run -d -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```

Run the same IIS container with Hyper-V isolation

```powershell
#This command will pull and start a IIS container. You can access it from http://<your local IP>:8080
docker run -d -p 8080:80 --isolation=hyperv mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```

To run a Windows container interactively:

```powershell
docker run -it mcr.microsoft.com/windows/servercore:ltsc2022 powershell
```

### Run Windows containers on Kubernetes

To prepare an AKS cluster for Windows containers:
Note: Replace the values on the example below with the ones from your environment.

```azurecli
echo "Please enter the username to use as administrator credentials for Windows Server nodes on your cluster: " && read WINDOWS_USERNAME
az aks create \
    --resource-group myResourceGroup \
    --name myAKSCluster \
    --node-count 2 \
    --generate-ssh-keys \
    --windows-admin-username $WINDOWS_USERNAME \
    --vm-set-type VirtualMachineScaleSets \
    --network-plugin azure
```

To add a Windows node pool for Windows containers:

```azurecli
az aks nodepool add \
    --resource-group myResourceGroup \
    --cluster-name myAKSCluster \
    --os-type Windows \
    --name npwin \
    --node-count 1
```

Deploy a sample ASP.Net application to the AKS cluster above using the YAML file below:

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sample
  labels:
    app: sample
spec:
  replicas: 1
  template:
    metadata:
      name: sample
      labels:
        app: sample
    spec:
      nodeSelector:
        "kubernetes.io/os": windows
      containers:
      - name: sample
        image: mcr.microsoft.com/dotnet/framework/samples:aspnetapp
        resources:
          limits:
            cpu: 1
            memory: 800M
        ports:
          - containerPort: 80
  selector:
    matchLabels:
      app: sample
---
apiVersion: v1
kind: Service
metadata:
  name: sample
spec:
  type: LoadBalancer
  ports:
  - protocol: TCP
    port: 80
  selector:
    app: sample
```

Save the file above and run the command below on your Kubernetes cluster:

```powershell
kubectl apply -f <filename> .
```

Once deployed, you can access the application by getting the IP address of your service:

```powershell
kubectl get service
```

## Resources

* [Windows containers documentation](https://learn.microsoft.com/virtualization/windowscontainers/?WT.mc_id=containers-84290-viniap)
* [Run Windows containers on AKS](https://learn.microsoft.com/azure/aks/learn/quick-windows-container-deploy-cli?WT.mc_id=containers-84290-viniap)