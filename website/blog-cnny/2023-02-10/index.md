---
slug: bring-your-app-day-5
title:  3-5. Bringing Your Application to Kubernetes - CI/CD Secure Supply Chain
authors: [josh]
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [cloudnative, azure, kubernetes, azure-key-vault, github-actions, secure-supply-chain, notary, notation]
image: https://azure.github.io/Cloud-Native/img/og/30-15.png
description: "In this article, you'll learn how to use Notary, an open-source project hosted by the Cloud Native Computing Foundation (CNCF) to digitally sign container images stored on Azure Container Registry." 
tags: [cloud-native-new-year, azure-kubernetes-service, aks, kubernetes, secure-supply-chain, notary, notation, azure-key-vault]
---

<head>
  <meta name="twitter:url" 
    content="https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-5" />
  <meta name="twitter:title" 
    content="3-5. Bringing Your Application to Kubernetes - CI/CD Secure Supply Chain" />
  <meta name="twitter:description" 
    content="In this article, you'll learn how to use Notary, an open-source project hosted by the Cloud Native Computing Foundation (CNCF) to digitally sign container images stored on Azure Container Registry." />
  <meta name="twitter:image" 
    content="https://azure.github.io/Cloud-Native/img/og/30-15.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" 
    content="@joshduffney" />
  <meta name="twitter:site" content="@AzureAdvocates" /> 
  <link rel="canonical" 
    href="https://azure.github.io/Cloud-Native/cnny-2023/bring-your-app-day-5" />
</head>

Welcome to `Day 5 of Week 3` of #CloudNativeNewYear!

The theme for this week is Bringing Your Application to Kubernetes. Yesterday we talked about debugging and instrumenting our application. Today we'll explore the topic of container image signing and secure supply chain.

:::tip Ask the Experts Thursday, February 9th at 9 AM PST

[Watch our Q&A with Experts from the Azure Kubernetes Service product team!](https://aka.ms/cnny/watch-ate)

:::

:::tip Friday, February 10th at 11 AM PST

Watch the recorded demo and conversation about this week's topics\.

[We were live on YouTube walking through today's (and the rest of this week's) demos](https://aka.ms/cnny/week3-demo).  Join us Friday, February 10th and bring your questions!

:::

## What We'll Cover
 * Introduction
 * Prerequisites
 * Create a digital signing certificate
 * Generate an Azure Container Registry Token
 * Set up Notation
 * Install the Notation Azure Key Vault Plugin
 * Add the signing Certificate to Notation
 * Sign Container Images
 * Conclusion


<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Introduction

The secure supply chain is a crucial aspect of software development, delivery, and deployment, and digital signing plays a critical role in this process. 

By using digital signatures to verify the authenticity and integrity of container images, organizations can improve the security of your software supply chain and reduce the risk of security breaches and data compromise.

In this article, you'll learn how to use Notary, an open-source project hosted by the Cloud Native Computing Foundation (CNCF) to digitally sign container images stored on Azure Container Registry.

## Prerequisites

To follow along, you'll need an instance of:
- [Azure Container Registry](https://learn.microsoft.com/azure/container-registry/)
- [Azure Key Vault](https://learn.microsoft.com/azure/key-vault/)


## Create a digital signing certificate

A digital signing certificate is a certificate that is used to digitally sign and verify the authenticity and integrity of digital artifacts. Such documents, software, and of course container images.  

Before you can implement digital signatures, you must first create a digital signing certificate. 

Run the following command to generate the certificate:

1. Create the policy file

    ```bash
    cat <<EOF > ./my_policy.json
    {
        "issuerParameters": {
            "certificateTransparency": null,
            "name": "Self"
        },
        "x509CertificateProperties": {
            "ekus": [
                "1.3.6.1.5.5.7.3.3"
            ],
            "key_usage": [
                "digitalSignature"
            ],
            "subject": "CN=${keySubjectName}",
            "validityInMonths": 12
        }
    }
    EOF
    ```

    The _ekus_ and _key usage_ of this certificate policy dictate that the certificate can only be used for digital signatures.

2. Create the certificate in Azure Key Vault

    ```bash
    az keyvault certificate create --name $keyName --vault-name $keyVaultName --policy @my_policy.json
    ```

    Replace `$keyName` and `$keyVaultName` with your desired certificate name and Azure Key Vault instance name.

## Generate a Azure Container Registry token

Azure Container Registry tokens are used to grant access to the contents of the registry. Tokens can be used for a variety of things such as pulling images, pushing images, or managing the registry.

As part of the container image signing workflow, you'll need a token to authenticate the Notation CLI with your Azure Container Registry.

Run the following command to generate an ACR token:

```bash
az acr token create \
  --name $tokenName \
  --registry $registry \
  --scope-map _repositories_admin \
  --query 'credentials.passwords[0].value' \
  --only-show-errors \
  --output tsv
```

Replace `$tokenName` with your name for the ACR token and `$registry` with the name of your ACR instance.

## Setup Notation

Notation is the command-line interface for the CNCF Notary project. You'll use it to digitally sign the _api_ and _web_ container images for the eShopOnWeb application.

Run the following commands to download and install the NotationCli:

1. Open a terminal or command prompt window
2. Download the Notary notation release

    ```bash
    curl -Lo notation.tar.gz https://github.com/notaryproject/notation/releases/download/v1.0.0-rc.1/notation_1.0.0-rc.1_linux_amd64.tar.gz > /dev/null 2>&1
    ```

    If you're not using Linux, you can find the releases [here](https://github.com/notaryproject/notation/releases).

3. Extract the contents of the `notation.tar.gz`
    
    ```bash
    tar xvzf notation.tar.gz > /dev/null 2>&1
    ```

4. Copy the notation binary to the $HOME/bin directory

    ```bash
    cp ./notation $HOME/bin
    ```

5. Add the $HOME/bin directory to the PATH environment variable

    ```bash
    export PATH="$HOME/bin:$PATH"
    ```

6. Remove the downloaded files

    ```bash
    rm notation.tar.gz LICENSE
    ```

7. Check the notation version

    ```bash
    notation --version
    ```

## Install the Notation Azure Key Vault plugin

By design the NotationCli supports plugins that extend its digital signing capabilities to remote registries. And in order to sign your container images stored in Azure Container Registry, you'll need to install the Azure Key Vault plugin for Notation.

Run the following commands to install the `azure-kv` plugin:

1. Download the plugin

    ```bash
    curl -Lo notation-azure-kv.tar.gz \
        https://github.com/Azure/notation-azure-kv/releases/download/v0.5.0-rc.1/notation-azure-kv_0.5.0-rc.1_linux_amd64.tar.gz > /dev/null 2>&1
    ```

    Non-Linux releases can be found [here](https://github.com/Azure/notation-azure-kv/releases/).

2. Extract to the plugin directory & delete download files

    ```bash
    tar xvzf notation-azure-kv.tar.gz -C ~/.config/notation/plugins/azure-kv notation-azure-kv > /dev/null 2>&

    rm -rf notation-azure-kv.tar.gz
    ```

3. Verify the plugin was installed 

    ```bash
    notation plugin ls
    ```

## Add the signing certificate to Notation

Now that you have Notation and the Azure Key Vault plugin installed, add the certificate's keyId created above to Notation. 

1. Get the Certificate Key ID from Azure Key Vault

    ```bash
    az keyvault certificate show \
      --vault-name $keyVaultName \
      --name $keyName \
      --query "kid" --only-show-errors --output tsv
    ```
      
   Replace `$keyVaultName` and `$keyName` with the appropriate information.

2. Add the Key ID to KMS using Notation

    ```bash
    notation key add --plugin azure-kv --id $keyID $keyName
    ```

3. Check the key list

    ```bash
    notation key ls
    ```

## Sign Container Images

At this point, all that's left is to sign the container images.

Run the `notation sign` command to sign the api and web container images:

```bash
notation sign $registry.azurecr.io/web:$tag \
  --username $tokenName \
  --password $tokenPassword

notation sign $registry.azurecr.io/api:$tag \
  --username $tokenName \
  --password $tokenPassword
```

Replace `$registry`, `$tag`, `$tokenName`, and `$tokenPassword` with the appropriate values. To improve security, use a SHA hash for the tag.

> *NOTE*: If you didn't take note of the token password, you can rerun the `az acr token create` command to generate a new password.

## Conclusion

Digital signing plays a critical role in ensuring the security of software supply chains. 

By signing software components, organizations can verify the authenticity and integrity of software, helping to prevent unauthorized modifications, tampering, and malware. 

And if you want to take digital signing to a whole new level by using them to prevent the deployment of unsigned container images, check out the [Ratify](https://github.com/deislabs/ratify) project on GitHub!

:::tip Take the Cloud Skills Challenge!

[Enroll](https://learn.microsoft.com/training/challenges?id=a0e385b9-f970-4182-b2e2-3b4619b6c356) in the Cloud Skills Challenge! 

Don't miss out on this opportunity to level up your skills and stay ahead of the curve in the world of cloud native. 
:::