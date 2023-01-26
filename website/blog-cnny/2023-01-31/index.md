---
slug: fundamentals-day-2
title: 2-2. Kubernetes Fundamentals - Services and Ingress
authors: [paul]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [cloudnative, azure, kubernetes, serivce, ingress]
image: https://azure.github.io/Cloud-Native/img/og/30-07.png
description: "A Step-by-Step Guide using Kubernetes Service and Ingress Resources on AKS" 
tags: [cloud-native-new-year, azure-kubernetes-service, aks, kubernetes, service, ingress]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/blog/fundamentals-day-2" />
  <meta name="twitter:title" 
    content="2-2. Kubernetes Fundamentals - Services and Ingress" />
  <meta name="twitter:description" 
    content="A Step-by-Step Guide using Kubernetes Service and Ingress Resources on AKS"  />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/img/og/30-07.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@pauldotyu" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/blog/fundamentals-day-2" />
</head>

Welcome to `Day 2 of Week 2` of #CloudNativeNewYear!

The theme for this week is #Kubernetes fundamentals. Yesterday we talked about how to deploy a containerized web app workload to Azure Kubernetes Service (AKS). Today we'll explore the topic of services and ingress and walk through the steps of making our containers accessible both internally as well as over the internet so that you can share it with the world 😊

:::tip Friday, February 3rd at 11 AM PST

Join us for a live demo and let us answer your questions.

[We'll be live on YouTube walking through today's (and the rest of this week's) demos](https://aka.ms/cnny/live-coding).  Join us Friday, February 3rd and bring your questions!

:::

## What We'll Cover

* Exposing Pods via Service
* Exposing Services via Ingress
* Takeaways
* Resources

## Exposing Pods via Service

There are a few ways to expose your pod in Kubernetes. One way is to take an imperative approach and use the `kubectl expose` command. This is probably the quickest way to achieve your goal but it isn't the best way. A better way to expose your pod by taking a declarative approach by creating a [services](https://learn.microsoft.com/azure/aks/concepts-network?WT.mc_id=containers-84290-pauyu#services) manifest file and deploying it using the `kubectl apply` command.

Don't worry if you are unsure of how to make this manifest, we'll use `kubectl` to help generate it.

First, let's ensure we have the database deployed on our AKS cluster.

> 📝 NOTE: If you don't have an AKS cluster deployed, please head over to [Azure-Samples/azure-voting-app-rust](https://github.com/Azure-Samples/azure-voting-app-rust/tree/main), clone the repo, and follow the instructions in the [README.md](https://github.com/Azure-Samples/azure-voting-app-rust/blob/main/README.md) to execute the Azure deployment and setup your `kubectl` context.  Check out [the first post this week for more on the environment setup](../2023-01-30/PodsAndDeployments.md#setting-up-a-kubernetes-environment-in-azure).

```bash
kubectl apply -f ./manifests/deployment-db.yaml
```

Next, let's deploy the application. If you are following along from yesterday's content, there isn't anything you need to change; however, if you are deploy the app from scratch, you'll need to modify the `deployment-app.yaml` manifest and update it with your image tag and database pod's IP address.

```bash
kubectl apply -f ./manifests/deployment-app.yaml
```

Now, let's expose the database using a service so that we can leverage Kubernetes' built-in service discovery to be able to reference it by name; not pod IP. Run the following command.

```bash
kubectl expose deployment azure-voting-db \
  --port=5432 \
  --target-port=5432
```

With the database exposed using service, we can update the app deployment manifest to use the service name instead of pod IP. This way, if the pod ever gets assigned a new IP, we don't have to worry about updating the IP each time and redeploying our web application. Kubernetes has internal service discovery mechanism in place that allows us to reference a service by its name.

Let's make an update to the manifest. Replace the environment variable for `DATABASE_SERVER` with the following:

```yml
- name: DATABASE_SERVER
  value: azure-voting-db
```

Re-deploy the app with the updated configuration.

```bash
kubectl apply -f ./manifests/deployment-app.yaml
```

One service down, one to go. Run the following command to expose the web application.

```bash
kubectl expose deployment azure-voting-app \
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
echo "http://$(kubectl get service azure-voting-app -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"
```

Great! The `kubectl expose` command gets the job done, but as mentioned above, it is not the best method of exposing deployments. It is better to expose deployments declaratively using a [service](https://kubernetes.io/docs/concepts/services-networking/service/) manifest, so let's delete the services and redeploy using manifests.

```bash
kubectl delete service azure-voting-db azure-voting-app
```

To use `kubectl` to generate our manifest file, we can use the same `kubectl expose` command that we ran earlier but this time, we'll include  `--output=yaml` and `--dry-run=client`. This will instruct the command to output the manifest that would be sent to the `kube-api` server in YAML format to the terminal.

Generate the manifest for the database service.

```bash
kubectl expose deployment azure-voting-db \
  --type=ClusterIP \
  --port=5432 \
  --target-port=5432 \
  --output=yaml \
  --dry-run=client > ./manifests/service-db.yaml
```

Generate the manifest for the application service.

```bash
kubectl expose deployment azure-voting-app \
  --type=LoadBalancer \
  --port=80 \
  --target-port=8080 \
  --output=yaml \
  --dry-run=client > ./manifests/service-app.yaml
```

The command above redirected the YAML output to your manifests directory. Here is what the web application service looks like.

```yml
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: null
  labels:
    app: azure-voting-app
  name: azure-voting-app
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 8080
  selector:
    app: azure-voting-app
  type: LoadBalancer
status:
  loadBalancer: {}
```

> 💡 TIP: To view the schema of any `api-resource` in Kubernetes, you can use the `kubectl explain` command. In this case the `kubectl explain service` command will tell us exactly what each of these fields do.

Re-deploy the services using the new service manifests.

```bash
kubectl apply -f ./manifests/service-db.yaml -f ./manifests/service-app.yaml

# You should see TYPE is set to LoadBalancer and the EXTERNAL-IP is set
kubectl get service azure-voting-db azure-voting-app
```

Confirm again that our application is accessible again. Run the following command to print the URL to the terminal.

```bash
echo "http://$(kubectl get service azure-voting-app -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"
```

That was easy, right? We just exposed both of our pods using Kubernetes services. The database only needs to be accessible from within the cluster so `ClusterIP` is perfect for that. For the web application, we specified the type to be `LoadBalancer` so that we can access the application over the public internet.

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
    app: azure-voting-app
  name: azure-voting-app
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 8080
  selector:
    app: azure-voting-app
```

> 📝 NOTE: The default service type is ClusterIP so we can omit the `type` altogether.

Re-apply the app service manifest.

```bash
kubectl apply -f ./manifests/service-app.yaml

# You should see TYPE set to ClusterIP and EXTERNAL-IP set to <none>
kubectl get service azure-voting-app
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
kubectl create ingress azure-voting-app \
  --class=webapprouting.kubernetes.azure.com \
  --rule="/*=azure-voting-app:80" \
  --output yaml \
  --dry-run=client > ./manifests/ingress.yaml
```

The `--class=webapprouting.kubernetes.azure.com` option activates the AKS web application routing add-on. This AKS add-on can also integrate with other Azure services such as [Azure DNS](https://learn.microsoft.com/azure/dns/dns-overview?WT.mc_id=containers-84290-pauyu) and [Azure Key Vault](https://learn.microsoft.com/azure/key-vault/general/overview?WT.mc_id=containers-84290-pauyu) for TLS certificate management and this special class makes it all work.

The `--rule="/*=azure-voting-app:80"` option looks confusing but we can use `kubectl` again to help us understand how to format the value for the option.

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

So, the value of `/*=azure-voting-app:80` creates a routing rule for all paths following the domain (or in our case since we don't have a hostname specified, the IP) to route traffic to our `azure-voting-app` backend service on port `80`.

> 📝 NOTE: Configuring the hostname and TLS is outside the scope of this demo but please visit this URL https://bit.ly/aks-webapp-routing for an in-depth hands-on lab centered around Web Application Routing on AKS.

Your `ingress.yaml` file should look like this:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  creationTimestamp: null
  name: azure-voting-app
spec:
  ingressClassName: webapprouting.kubernetes.azure.com
  rules:
  - http:
      paths:
      - backend:
          service:
            name: azure-voting-app
            port:
              number: 80
        path: /
        pathType: Prefix
status:
  loadBalancer: {}
```

Apply the app ingress manifest.

```bash
kubectl apply -f ./manifests/ingress.yaml
```

Validate the web application is available from the internet again. You can run the following command to print the URL to the terminal.

```bash
echo "http://$(kubectl get ingress azure-voting-app -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"
```

## Takeaways

Exposing your applications both internally and externally can be easily achieved using Service and Ingress resources respectively. If your service is HTTP or HTTPS based and needs to be accessible from outsie the cluster, use Ingress with an internal Service (i.e., ClusterIP or NodePort); otherwise, use the Service resource.  If your TCP-based Service needs to be publicly accessible, you set the type to LoadBalancer to expose a public IP for it. To learn more about these resources, please visit the links listed below.

Lastly, if you are unsure how to begin writing your service manifest, you can use `kubectl` and have it do most of the work for you 🥳

## Resources

* [Services](https://learn.microsoft.com/azure/aks/concepts-network?WT.mc_id=containers-84290-pauyu#services)
* [Ingress Controllers](https://learn.microsoft.com/azure/aks/concepts-network?WT.mc_id=containers-84290-pauyu#ingress-controllers)
* [Hands-on Lab: Web Application Routing on AKS](https://aka.ms/aks-webapp-routing-lab)
* [How-to Guide: Ingress Controller in AKS](https://learn.microsoft.com/azure/aks/ingress-basic??WT.mc_id=containers-84290-pauyu&tabs=azure-cli)
