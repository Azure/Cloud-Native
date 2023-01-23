---
slug: application-deployment-with-kubernetes-services-and-ingress
title: "Application Deployment with Kubernetes: Services and Ingress"
authors: [paul]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [cloudnative, azure, kubernetes, serivce, ingress]
image:
description: "Exposing Web Apps on Azure Kubernetes Service: A Step-by-Step Guide using Kubernetes Service and Ingress Resources" 
tags: [cloud-native-new-year, azure-kubernetes-service, aks, kubernetes, service, ingress]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/blog/slug-FIXME" />
  <meta name="twitter:title" 
    content="FIXME: Title Of Post" />
  <meta name="twitter:description" 
    content="FIXME: Post Description" />
  <meta name="twitter:image" 
    content="FIXME: Post Image" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@nitya" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/blog/slug-FIXME" />
</head>
<!-- End METADATA -->

Welcome to `Day #FIXME` of #CloudNativeNewYear!

The theme for this week is #FIXME. Yesterday we talked about #FIXME. Today we'll explore the topic of #FIXME.

## What We'll Cover

* Exposing Pods via Service
* Exposing Services via Ingress
* Takeaways
* Resources

<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

In yesterday's post, [@StevenMurawski](https://twitter.com/StevenMurawski) showed us how to deploy a containerized web app workload to Azure Kubernetes Service (AKS). Today, I'll walk you through the steps of making this app accessible over the internet, so that you can share it with the world 😊

## Exposing Pods via Service

There are a few ways to expose your pod in Kubernetes. One way is to take an imperative approach and use the `kubectl expose` command. This is probably the quickest way to achieve your goal but it isn't the best way. A better way to expose your pod by taking a declarative approach by creating a [services](https://learn.microsoft.com/azure/aks/concepts-network?WT.mc_id=containers-84290-pauyu#services) manifest file and deploying it using the `kubectl apply` command.

Don't worry if you are unsure of how to make this manifest, we'll use `kubectl` to help generate it.

First, let's get simple deployment on our AKS cluster.

```bash
kubectl create deployment myvote \
  --image=ghcr.io/pauldotyu/azure-voting-app-rust@sha256:5e932a5c75f88ccc79c80b992ef4e39e129dd4ad4dbdd004e7f62109e3c97a19
```

Next, let's expose the deployment with the following command.

```bash
kubectl expose deployment myvote \
  --type=LoadBalancer \
  --port=80 \
  --target-port=8080
```

Notice the `--type` argument has a value of `LoadBalancer`. This service type is implemented by the `cloud-controller-manager` which is part of the Kubernetes control plane. When using a managed Kubernetes cluster such as Azure Kubernetes Service, a [public standard load balancer](https://learn.microsoft.com/azure/aks/load-balancer-standard?WT.mc_id=containers-84290-pauyu#use-the-public-standard-load-balancer) will be able to provisioned when the service type is set to `LoadBalancer`. The load balancer will also have a public IP assigned which will make your deployment publicly available.

Kubernetes supports four [service types](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types):

* **ClusterIP**: this is the default and limits service access to internal traffic within the cluster
* **NodePort**: this assigns a port mapping on the node's IP address and allows traffic from the virtual network (outside the cluster)
* **LoadBalancer**: as mentioned above, this creates a cloud-based load balancer
* **ExternalName**: this is used in special case scenarios where you want to map a service to an external DNS name

> 📝 NOTE: When exposing a web application to the internet, allowing external users to connect to your **Service** directly is not the best approach. Instead, you should use an **Ingress**, which we'll cover in the next section.

Now, let's confirm you can reach the web app from the internet. You can use the following command to print the URL to your terminal.

```bash
echo "http://$(kubectl get service myvote -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"
```

Great! The `kubectl expose` command gets the job done, but as mentioned above, it is not the best method of exposing deployments. It is better to expose deployments declaratively using a [service](https://kubernetes.io/docs/concepts/services-networking/service/) manifest, so let's delete the service and redeploy.

```bash
kubectl delete service myvote
```

To use `kubectl` to generate our manifest file, we can use the same `kubectl expose` command that we ran earlier but this time, we'll include  `--output=yaml` and `--dry-run=client`. This will instruct the command to output the manifest that would be sent to the `kube-api` server in YAML format to the terminal.

```bash
kubectl expose deployment myvote \
  --type=LoadBalancer \
  --port=80 \
  --target-port=8080 \
  --output=yaml \
  --dry-run=client > service.yaml
```

The command above redirected the YAML output to a file called `service.yaml` in your current working directory and your file should look like this.

```yml
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: null
  labels:
    app: myvote
  name: myvote
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 8080
  selector:
    app: myvote
  type: LoadBalancer
status:
  loadBalancer: {}
```

> 💡 TIP: To view the schema of any `api-resource` in Kubernetes, you can use the `kubectl explain` command. In this case the `kubectl explain service` command will tell us exactly what each of these fields do.

Re-deploy the service using the new service manifest.

```bash
kubectl apply -f service.yaml

# You should see TYPE is set to LoadBalancer and the EXTERNAL-IP is set
kubectl get service myvote
```

Confirm again that our application is accessible again. Run the following command to print the URL to the terminal.

```bash
echo "http://$(kubectl get service myvote -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"
```

That was easy, right? We just exposed an application using Kubernetes services and specified the type to be `LoadBalancer` so that we can test the application over the public internet.

But wait... remember that if you want to expose web applications over the public internet, a Service with a public IP is not the best way; the better approach is to use an Ingress resource.

## Exposing Services via Ingress

If you read through the Kubernetes documentation on [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/#what-is-ingress) you will see a diagram that depicts the Ingress sitting in front of the Service resource with a routing rule between it. In order to use Ingress, you need to deploy an Ingress Controller and it can be configured with many routing rules to forward traffic to one or many backend services. So effectively, an Ingress is a load balancer for your Services.

With that said, we no longer need a service type of `LoadBalancer` since the service does not need to be accessible from the internet. It only needs to be accessible from the Ingress Controller (internal to the cluster) so we can change the service type to `ClusterIP`.

Update your `service.yaml` file to look like this:

```yaml
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: null
  labels:
    app: myvote
  name: myvote
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 8080
  selector:
    app: myvote
```

> 📝 NOTE: The default service type is ClusterIP so we can omit the `type` altogether.

Re-apply the service manifest.

```bash
kubectl apply -f service.yaml

# You should see TYPE set to ClusterIP and EXTERNAL-IP set to <none>
kubectl get service myvote 
```

Next, we need to install an [Ingress Controller](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/). There are quite a few options, and the Kubernetes-maintained [NGINX Ingress Controller](https://github.com/kubernetes/ingress-nginx) is commonly deployed.

You could install this manually by following [these instructions](https://kubernetes.github.io/ingress-nginx/deploy/#azure), but if you do that you'll be responsible for maintaining and supporting the resource.

I like to take advantage of free maintenance and support when I can get it, so I'll opt to use the [Web Application Routing add-on for AKS](https://learn.microsoft.com/azure/aks/web-app-routing?WT.mc_id=containers-84290-pauyu&tabs=without-osm).

> 💡 TIP: Whenever you install an AKS add-on, it will be maintained and fully supported by Azure Support.

Enable the web application routing add-on in our AKS cluster with the following command.

```bash
az aks addon enable \
  --name <YOUR_AKS_NAME> \
  --resource-group <YOUR_AKS_RESOURCE_GROUP>
  --addon web_application_routing
```

> ⚠️ WARNING: This command can take a few minutes to complete

Now, let's use the same approach we took in creating our service to create our Ingress resource. Run the following command to generate the Ingress manifest.

```bash
kubectl create ingress myvote \
  --class=webapprouting.kubernetes.azure.com \
  --rule="/*=myvote:80" \
  --output yaml \
  --dry-run=client > ingress.yaml
```

The `--class=webapprouting.kubernetes.azure.com` option activates the AKS web application routing add-on. This AKS add-on can also integrate with other Azure services such as [Azure DNS](https://learn.microsoft.com/azure/dns/dns-overview?WT.mc_id=containers-84290-pauyu) and [Azure Key Vault](https://learn.microsoft.com/azure/key-vault/general/overview?WT.mc_id=containers-84290-pauyu) for TLS certificate management, so this special class makes it all work.

The `--rule="/*=myvote:80"` option looks confusing but we can use `kubectl` again to help us understand how to format the value for the option.

```bash
kubectl create ingress --help
```

In the output you will see the following:

```text
--rule=[]:
    Rule in format host/path=service:port[,tls=secretname]. Paths containing the leading character '*' are
    considered pathType=Prefix. tls argument is optional.
```

It expects a `host` and `path` separated by a forward-slash, then expects the backend `service` name and `port` separated by a colon. We're not using a hostname for this demo so we can omit it. For the path, an asterisk is used to specify a wildcard path prefix.

So, the value of `/*=myvote:80` creates a routing rule for all paths following the domain (or in our case since we don't have a hostname specified, the IP) to route traffic to our `myvote` backend service on port `80`.

> 📝 NOTE: Configuring the hostname and TLS is outside the scope of this demo but please visit this URL https://bit.ly/aks-webapp-routing for an in-depth hands-on lab centered around Web Application Routing on AKS.

Your `ingress.yaml` file should look like this:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  creationTimestamp: null
  name: myvote
spec:
  ingressClassName: webapprouting.kubernetes.azure.com
  rules:
  - http:
      paths:
      - backend:
          service:
            name: myvote
            port:
              number: 80
        path: /
        pathType: Prefix
status:
  loadBalancer: {}
```

Apply the manifest.

```bash
kubectl apply -f ingress.yaml
```

Validate the web application is available from the internet again. You can run the following command to print the URL to the terminal.

```bash
echo "http://$(kubectl get ingress myvote -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"
```

## Takeaways

Exposing your applications both internally and externally can be easily achieved using Service and Ingress resources respectively. If your service is HTTP or HTTPS based, use Ingress with an internally accessible Service (i.e., ClusterIP or NodePort); otherwise, use the Service resource.  If your Service needs to be publicly accessible, set the type to LoadBalancer to expose a public IP for it. To learn more about these resources, please visit the links listed below.

Lastly, if you are unsure how to begin writing your service manifest, you can use `kubectl` and have it do most of the work for you 🥳

## Resources

* [Services](https://learn.microsoft.com/azure/aks/concepts-network?WT.mc_id=containers-84290-pauyu#services)
* [Ingress Controllers](https://learn.microsoft.com/azure/aks/concepts-network?WT.mc_id=containers-84290-pauyu#ingress-controllers)
* [Hands-on Lab: Web Application Routing on AKS](https://aka.ms/aks-webapp-routing-lab)
* [How-to Guide: Ingress Controller in AKS](https://learn.microsoft.com/azure/aks/ingress-basic??WT.mc_id=containers-84290-pauyu&tabs=azure-cli)
