---
slug: bring-your-app-day-1
title: 3-1. Bringing Your Application to Kubernetes - CI/CD
authors: [steven]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [pods, deployments, kubernetes, aks, container-apps, cloud-native, github-actions, ci-cd]
image: https://azure.github.io/Cloud-Native/img/og/30-11.png
description: "Taking a existing application, containerizing it, and publishing to Kubernetes in GitHub Actions."
tags: [cloud-native, 30daysofcloudnative, zero-to-hero, ask-the-expert, azure-kubernetes-service]
---

<head>
  <meta name="twitter:url"
    content="https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-1" />
  <meta name="twitter:title"
    content="3-1. Bringing Your Application to Kubernetes - CI/CD" />
  <meta name="twitter:description"
    content="Taking a existing application, containerizing it, and publishing to Kubernetes in GitHub Actions." />
  <meta name="twitter:image"
    content="https://azure.github.io/Cloud-Native/img/og/30-11.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator"
    content="@stevenmurawski" />
  <meta name="twitter:site" content="@AzureAdvocates" />
  <link rel="canonical"
    href="https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-1" />
</head>

Welcome to `Day 1 of Week 3` of #CloudNativeNewYear!

The theme for this week is Bringing Your Application to Kubernetes. Last we talked about Kubernetes Fundamentals. Today we'll explore getting an existing application running in Kubernetes with a full pipeline in GitHub Actions.

:::tip Friday, February 10th at 11 AM PST

Join us for a live demo and let us answer your questions.

[We'll be live on YouTube walking through today's (and the rest of this week's) demos](https://aka.ms/cnny/live-coding).  Join us Friday, February 3rd and bring your questions!

:::

## What We'll Cover
 * Our Application
 * Adding Some Infrastructure as Code
 * Building and Publishing a Container Image
 * Deploying to Kubernetes
 * Summary
 * Resources


<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Our Application

This week we'll be taking an exisiting application - something similar to a typical line of business application - and setting it up to run in Kubernetes.  Over the course of the week, we'll address different concerns.  Today we'll focus on updating our CI/CD process to handle standing up (or validating that we have) an [Azure Kubernetes Service (AKS)](https://learn.microsoft.com/azure/aks/intro-kubernetes?WT.mc_id=containers-84290-stmuraws) environment, building and publishing container images for our web site and API server, and getting those services running in Kubernetes.

The application we'll be starting with is [eShopOnWeb](https://github.com/Azure-Samples/eShopOnAKS).  This application has a web site and API which are backed by a SQL Server instance.  It's built in .NET 7, so it's cross-platform.

:::info
For the enterprising among you, you may notice that there are a number of different eShopOn* variants on GitHub, including [eShopOnContainers](https://github.com/dotnet-architecture/eShopOnContainers).  We aren't using that example as it's more of an end state than a starting place. Afterwards, feel free to check out that example as what this solution could look like as a series of microservices.
:::

## Adding Some Infrastructure as Code

[Just like last week](../2023-01-30/PodsAndDeployments.md#setting-up-a-kubernetes-environment-in-azure), we need to stand up an AKS environment.  This week, however, rather than running commands in our own shell, we'll set up GitHub Actions to do that for us.

There is a **LOT** of plumbing in this section, **but** once it's set up, it'll make our lives a lot easier.  This section ensures that we have an environment to deploy our application into configured the way we want.  We can easily extend this to accomodate multiple environments or add additional microservices with minimal new effort.

### Federated Identity

Setting up a federated identity will allow us a more securable and auditable way of accessing Azure from GitHub Actions.  For more about setting up a federated identity, Microsoft Learn has the details on [connecting GitHub Actions to Azure](https://learn.microsoft.com/azure/developer/github/connect-from-azure?tabs=azure-portal%2Cwindows&WT.mc_id=containers-84290-stmuraws).

Here, we'll just walk through the setup of the identity and configure GitHub to use that idenity to deploy our AKS environment and interact with our Azure Container Registry.

The examples will use PowerShell, but a Bash version of the setup commands is available in the [week3/day1 branch](https://github.com/Azure-Samples/eShopOnAKS/tree/week3/day1).

#### Prerequisites

To follow along, you'll need:

* a GitHub account
* an Azure Subscription
* the Azure CLI
* and the Git CLI.

You'll need to fork the [source repository](https://github.com/Azure-Samples/eShopOnAKS) under your GitHub user or organization where you can manage secrets and GitHub Actions.

It would be helpful to have the [GitHub CLI](https://cli.github.com/), but it's not required.

#### Set Up Some Defaults

You will need to update one or more of the variables (your user or organization, what branch you want to work off of, and possibly the Azure AD application name if there is a conflict).

```powershell
# Replace the gitHubOrganizationName value
# with the user or organization you forked
# the repository under.

$githubOrganizationName = 'Azure-Samples'
$githubRepositoryName  = 'eShopOnAKS'
$branchName = 'week3/day1'
$applicationName = 'cnny-week3-day1'
```

#### Create an Azure AD Application

Next, we need to create an Azure AD application.

```powershell
# Create an Azure AD application
$aksDeploymentApplication = New-AzADApplication -DisplayName $applicationName
```

#### Set Up Federation for that Azure AD Application

And configure that application to allow federated credential requests from our GitHub repository for a particular branch.

```powershell
# Create a federated identity credential for the application
New-AzADAppFederatedCredential `
   -Name $applicationName `
   -ApplicationObjectId $aksDeploymentApplication.Id `
   -Issuer 'https://token.actions.githubusercontent.com' `
   -Audience 'api://AzureADTokenExchange' `
   -Subject "repo:$($githubOrganizationName)/$($githubRepositoryName):ref:refs/heads/$branchName"
```

#### Create a Service Principal for the Azure AD Application

Once the application has been created, we need a service principal tied to that application.  The service principal can be granted rights in Azure.

```powershell
# Create a service principal for the application
New-AzADServicePrincipal -AppId $($aksDeploymentApplication.AppId)
```

### Give that Service Principal Rights to Azure Resources

Because our Bicep deployment exists at the subscription level and we are creating role assignments, we need to give it Owner rights. If we changed the scope of the deployment to just a resource group, we could apply more scoped permissions.

```powershell
$azureContext = Get-AzContext
New-AzRoleAssignment `
   -ApplicationId $($aksDeploymentApplication.AppId) `
   -RoleDefinitionName Owner `
   -Scope $azureContext.Subscription.Id
```

#### Add Secrets to GitHub Repository

If you have the GitHub CLI, you can use that right from your shell to set the secrets needed.

```powershell
gh secret set AZURE_CLIENT_ID --body $aksDeploymentApplication.AppId
gh secret set AZURE_TENANT_ID --body $azureContext.Tenant.Id
gh secret set AZURE_SUBSCRIPTION_ID --body $azureContext.Subscription.Id
```

Otherwise, you can create them through the web interface like I did in the Learn Live event below.

:::info
It may look like the whole video will play, but it'll stop after configuring the secrets in GitHub (after about 9 minutes)

The video shows creating the Azure AD application, service principals, and configuring the federated identity in Azure AD and GitHub.
:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/sZ0Z-4r08so?start=1613&end=2124" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Creating a Bicep Deployment

#### Resuable Workflows

We'll create our Bicep deployment in a [reusable workflows](https://docs.github.com/actions/using-workflows/reusing-workflows).  What are they?  The previous link has the documentation or the video below has [my colleague Brandon Martinez](https://twitter.com/brandonmartinez) and I talking about them.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sZ0Z-4r08so?start=1065&end=1524" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

This workflow is basically [the same deployment](../2023-01-30/PodsAndDeployments.md#setting-up-a-kubernetes-environment-in-azure) we did in last week's series, just in GitHub Actions.

Start by creating a file called `deploy_aks.yml` in the `.github/workflows` directory with the below contents.

```yml
name: deploy

on:
  workflow_call:
    inputs:
      resourceGroupName:
        required: true
        type: string
    secrets:
      AZURE_CLIENT_ID:
        required: true
      AZURE_TENANT_ID:
        required: true
      AZURE_SUBSCRIPTION_ID:
        required: true
    outputs:
      containerRegistryName:
        description: Container Registry Name
        value: ${{ jobs.deploy.outputs.containerRegistryName }}
      containerRegistryUrl:
        description: Container Registry Login Url
        value: ${{ jobs.deploy.outputs.containerRegistryUrl }}
      resourceGroupName:
        description: Resource Group Name
        value: ${{ jobs.deploy.outputs.resourceGroupName }}
      aksName:
        description: Azure Kubernetes Service Cluster Name
        value: ${{ jobs.deploy.outputs.aksName }}

permissions:
  id-token: write
  contents: read

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: azure/login@v1
      name: Sign in to Azure
      with:
        client-id: ${{ secrets.AZURE_CLIENT_ID }}
        tenant-id: ${{ secrets.AZURE_TENANT_ID }}
        subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
    - uses: azure/arm-deploy@v1
      name: Run preflight validation
      with:
        deploymentName: ${{ github.run_number }}
        scope: subscription
        region: eastus
        template: ./deploy/main.bicep
        parameters: >
          resourceGroup=${{ inputs.resourceGroupName }}
        deploymentMode: Validate

  deploy:
    needs: validate
    runs-on: ubuntu-latest
    outputs:
      containerRegistryName: ${{ steps.deploy.outputs.acr_name }}
      containerRegistryUrl: ${{ steps.deploy.outputs.acr_login_server_url }}
      resourceGroupName: ${{ steps.deploy.outputs.resource_group_name }}
      aksName: ${{ steps.deploy.outputs.aks_name }}
    steps:
    - uses: actions/checkout@v2
    - uses: azure/login@v1
      name: Sign in to Azure
      with:
        client-id: ${{ secrets.AZURE_CLIENT_ID }}
        tenant-id: ${{ secrets.AZURE_TENANT_ID }}
        subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
    - uses: azure/arm-deploy@v1
      id: deploy
      name: Deploy Bicep file
      with:
        failOnStdErr: false
        deploymentName: ${{ github.run_number }}
        scope: subscription
        region: eastus
        template: ./deploy/main.bicep
        parameters: >
          resourceGroup=${{ inputs.resourceGroupName }}
```

### Adding the Bicep Deployment

Once we have the Bicep deployment workflow, we can add it to the primary build definition in `.github/workflows/dotnetcore.yml`

#### Permissions

First, we need to add a permissions block to let the workflow request our Azure AD token.  This can go towards the top of the YAML file (I started it on line 5).

```yml
permissions:
  id-token: write
  contents: read
```

#### Deploy AKS Job

Next, we'll add a reference to our reusable workflow.  This will go after the `build` job.

```yml
  deploy_aks:
    needs: [build]
    uses: ./.github/workflows/deploy_aks.yml
    with:
      resourceGroupName: 'cnny-week3'
    secrets:
      AZURE_CLIENT_ID: ${{ secrets.AZURE_CLIENT_ID }}
      AZURE_TENANT_ID: ${{ secrets.AZURE_TENANT_ID }}
      AZURE_SUBSCRIPTION_ID: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
```

## Building and Publishing a Container Image

Now that we have our target environment in place and an Azure Container Registry, we can build and publish our container images.

### Add a Reusable Workflow

First, we'll create a new file for our reusable workflow at `.github/workflows/publish_container_image.yml`.

We'll start the file with a name, the parameters it needs to run, and the permissions requirements for the federated identity request.

```yml
name: Publish Container Images

on: 
  workflow_call:
    inputs:
      containerRegistryName:
        required: true
        type: string
      containerRegistryUrl:
        required: true
        type: string
      githubSha:
        required: true
        type: string
    secrets:
      AZURE_CLIENT_ID:
        required: true
      AZURE_TENANT_ID:
        required: true
      AZURE_SUBSCRIPTION_ID:
        required: true

permissions:
  id-token: write
  contents: read
```

#### Build the Container Images

Our next step is to build the two container images we'll need for the application, the website and the API.  We'll build the container images on our build worker and tag it with the git SHA, so there'll be a direct tie between the point in time in our codebase and the container images that represent it.

```yml
jobs:
  publish_container_image:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: docker build
      run: |
        docker build . -f src/Web/Dockerfile -t ${{ inputs.containerRegistryUrl }}/web:${{ inputs.githubSha }}
        docker build . -f src/PublicApi/Dockerfile -t ${{ inputs.containerRegistryUrl }}/api:${{ inputs.githubSha}}
```

#### Scan the Container Images

Before we publish those container images, we'll scan them for vulnerabilities and best practice violations.  We can add these two steps (one scan for each image).

```yml
    - name: scan web container image
      uses: Azure/container-scan@v0
      with:
        image-name: ${{ inputs.containerRegistryUrl }}/web:${{ inputs.githubSha}}
    - name: scan api container image
      uses: Azure/container-scan@v0
      with:
        image-name: ${{ inputs.containerRegistryUrl }}/web:${{ inputs.githubSha}}
```

The container images provided have a few items that'll be found. We can create an allowed list at `.github/containerscan/allowedlist.yaml` to define vulnerabilities or best practice violations that we'll explictly allow to **not** fail our build.

```yml
general:
  vulnerabilities:
    - CVE-2022-29458
    - CVE-2022-3715
    - CVE-2022-1304
    - CVE-2021-33560
    - CVE-2020-16156
    - CVE-2019-8457
    - CVE-2018-8292
  bestPracticeViolations:
    - CIS-DI-0001
    - CIS-DI-0005  
    - CIS-DI-0006 
    - CIS-DI-0008  
```

#### Publish the Container Images

Finally, we'll log in to Azure, then log in to our Azure Container Registry, and push our images.

```yml
    - uses: azure/login@v1
      name: Sign in to Azure
      with:
        client-id: ${{ secrets.AZURE_CLIENT_ID }}
        tenant-id: ${{ secrets.AZURE_TENANT_ID }}
        subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
    - name: acr login 
      run: az acr login --name ${{ inputs.containerRegistryName  }}
    - name: docker push
      run: |
        docker push ${{ inputs.containerRegistryUrl }}/web:${{ inputs.githubSha}}
        docker push ${{ inputs.containerRegistryUrl }}/api:${{ inputs.githubSha}}
```

### Update the Build With the Image Build and Publish

Now that we have our reusable workflow to create and publish our container images, we can include that in our primary build defnition at `.github/workflows/dotnetcore.yml`.

```yml
  publish_container_image:
    needs: [deploy_aks]
    uses: ./.github/workflows/publish_container_image.yml
    with:
      containerRegistryName: ${{ needs.deploy_aks.outputs.containerRegistryName }}
      containerRegistryUrl: ${{ needs.deploy_aks.outputs.containerRegistryUrl }}
      githubSha: ${{ github.sha }}
    secrets:
      AZURE_CLIENT_ID: ${{ secrets.AZURE_CLIENT_ID }}
      AZURE_TENANT_ID: ${{ secrets.AZURE_TENANT_ID }}
      AZURE_SUBSCRIPTION_ID: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
```

## Deploying to Kubernetes

Finally, we've gotten enough set up that a commit to the target branch will:

* build and test our application code
* set up (or validate) our AKS and ACR environment
* and create, scan, and publish our container images to ACR

Our last step will be to deploy our application to Kubernetes.  We'll use the basic building blocks we worked with last week, [deployments](../2023-01-30/PodsAndDeployments.md#creating-the-deployment) and [services](../2023-01-31/index.md#exposing-pods-via-service).

### Starting the Reusable Workflow to Deploy to AKS

We'll start our workflow with our parameters that we need, as well as the permissions to access the token to log in to Azure.

We'll check out our code, then log in to Azure, and use the `az` CLI to get credentials for our AKS cluster.

```yml
name: deploy_to_aks

on:
  workflow_call:
    inputs:
      aksName:
        required: true
        type: string
      resourceGroupName:
        required: true
        type: string
      containerRegistryUrl:
        required: true
        type: string
      githubSha:
        required: true
        type: string
    secrets:
      AZURE_CLIENT_ID:
        required: true
      AZURE_TENANT_ID:
        required: true
      AZURE_SUBSCRIPTION_ID:
        required: true

permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:  
      - uses: actions/checkout@v2
      - uses: azure/login@v1
        name: Sign in to Azure
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
      - name: Get AKS Credentials
        run: |
          az aks get-credentials --resource-group ${{ inputs.resourceGroupName }} --name ${{ inputs.aksName }}
```

### Edit the Deployment For Our Current Image Tag

Let's add the Kubernetes manifests to our repo.  This post is long enough, so you can find the content for the manifests folder [in the manifests folder in the source repo under the `week3/day1` branch](https://github.com/Azure-Samples/eShopOnAKS/tree/week3/day1/manifests).

:::tip
If you only forked the main branch of the source repo, you can easily get the updated manifests by using the following `git` commands:

```powershell
git remote add upstream https://github.com/Azure-Samples/eShopOnAks
git fetch upstream week3/day1
git checkout upstream/week3/day1 manifests
```

This will make the `week3/day1` branch available locally and then we can update the manifests directory to match the state of that branch.
:::

The deployments and the service defintions should be familiar from last week's content (but not the same).  This week, however, there's a new file in the manifests - `./manifests/kustomization.yaml`

This file helps us more dynamically edit our kubernetes manifests and support is baked right in to the `kubectl` command.

#### Kustomize Definition

[Kustomize](https://kustomize.io/) allows us to specify specific resource manifests and areas of that manifest to replace.  We've put some placeholders in our file as well, so we can replace those for each run of our CI/CD system.

In `./manifests/kustomization.yaml` you will see:

```yml
resources:
- deployment-api.yaml
- deployment-web.yaml

# Change the image name and version
images:
- name: notavalidregistry.azurecr.io/api:v0.1.0
  newName: <YOUR_ACR_SERVER>/api
  newTag: <YOUR_IMAGE_TAG>
- name: notavalidregistry.azurecr.io/web:v0.1.0
  newName: <YOUR_ACR_SERVER>/web
  newTag: <YOUR_IMAGE_TAG>
```

#### Replacing Values in our Build

Now, we encounter a little problem - our deployment files need to know the tag and ACR server.  We can do a bit of `sed` magic to edit the file on the fly.

In `.github/workflows/deploy_to_aks.yml`, we'll add:

```yml
      - name: replace_placeholders_with_current_run
        run: |
          sed -i "s/<YOUR_ACR_SERVER>/${{ inputs.containerRegistryUrl }}/g" ./manifests/kustomization.yaml
          sed -i "s/<YOUR_IMAGE_TAG>/${{ inputs.githubSha }}/g" ./manifests/kustomization.yaml
```

### Deploying the Manifests

We have our manifests in place and our `kustomization.yaml` file (with commands to update it at runtime) ready to go, we can deploy our manifests.

First, we'll deploy our database (deployment and service).
Next, we'll use the `-k` parameter on `kubectl` to tell it to look for a `kustomize` configuration, transform the requested manifests and apply those.
Finally, we apply the service defintions for the web and API deployments.

```yml
        run: |
          kubectl apply -f ./manifests/deployment-db.yaml \
                        -f ./manifests/service-db.yaml
          kubectl apply -k ./manifests
          kubectl apply -f ./manifests/service-api.yaml \
                        -f ./manifests/service-web.yaml
```

## Summary

We've covered a lot of ground in today's post.  We set up federated credentials with GitHub.  Then we added reusable workflows to deploy an AKS environment and build/scan/publish our container images, and then to deploy them into our AKS environment.

This sets us up to start making changes to our application and Kubernetes configuration and have those changes automatically validated and deployed by our CI/CD system.  Tomorrow, we'll look at updating our application environment with runtime configuration, persistent storage, and more.

## Resources

* [Azure Kubernetes Service (AKS)](https://learn.microsoft.com/azure/aks/intro-kubernetes?WT.mc_id=containers-84290-stmuraws)
* [Reusable workflows in GitHub Actions](https://docs.github.com/actions/using-workflows/reusing-workflows)
* [Connecting GitHub Actions to Azure](https://learn.microsoft.com/azure/developer/github/connect-from-azure?tabs=azure-portal%2Cwindows&WT.mc_id=containers-84290-stmuraws)
* [Kustomize](https://kustomize.io/)
* [GitHub CLI](https://cli.github.com/)
* [eShopOnAKS](https://github.com/Azure-Samples/eShopOnAKS)