---
slug: FIXME-route-here
title: FIXME - Blog Post Title Here
authors: [FIXME-one, FIXME-two]
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: [FIXME, comma, separated, keywords, for, metatags]
image:
description: "FIXME: Used in <meta> tag. If not specified, becomes first line of Markdown" 
tags: [serverless-september, 30-days-of-serverless, serverless-hacks, zero-to-hero, ask-the-expert, azure-functions, azure-container-apps, azure-event-grid, azure-logic-apps, serverless-e2e]
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
 * Section 1
 * Section 2
 * Section 3
 * Section 4
 * Exercise: Try this yourself!
 * Resources: For self-study!


<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Decouple configurations with ConfigMaps and Secerts

A ConfigMap is a Kubernetes object that decouples configuration data from pod definitions. Kubernetes secerts are similar, but were designed to decouple senstive information. 

Separating the configuration and secerts from your application promotes better organization and security of your Kubernetes environment. It also enables you to share the same configuration and different secerts across multiple pods and deployments which can simplify scaling and management. Using ConfigMaps and Secerts in Kubernetes is a best practice that can help to improve the scalability, security, and maintainability of your cluster.

By the end of this tutorial, you'll have added a Kubernetes ConfigMap and Secret to the Azure Voting deployment.

## Create the ConfigMap

ConfigMaps can be used in one of two ways; as environment variables or volumes. 

For this tutorial you'll use a ConfigMap to create three environment variables inside the pod; DATABASE_SERVER, FISRT_VALUE, and SECOND_VALUE. The DATABASE_SERVER provides part of connection string to a Postgres. FIRST_VALUE and SECOND_VALUE are configuration options that change what voting options the application presents to the users.

Follow the below steps to create a new ConfigMap:

1. Create a YAML file named 'config-map.yaml'. In this file, specify the environment variables for the application.

    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: azure-voting-config
    data:
      DATABASE_SERVER: azure-voting-db
      FIRST_VALUE: "Go"
      SECOND_VALUE: "Rust"
    ```

2. Create the config map in your Kubernetes cluster by running the following command:
    
    ```bash
    kubectl create -f config-map.yaml
    ```

## Create the Secret

The `deployment-db.yaml` and `deployment-app.yaml` are Kubernetes manifests that deploy the Azure Voting App. Currently, those deployment manifests contain the environment variables `POSTGRES_PASSWORD` and `DATABASE_PASSWORD` with the value stored as plain text. Your task is to replace that environment variable with a Kubernetes Secret.

Create a Secret running the following commands:

1. Encode `mypassword`.

    ```bash
    echo -n "mypassword" | base64
    ```

2. Create a YAML file named `secret.yaml`. In this file, add `POSTGRES_PASSWORD` as the key and the encoded value returned above under as the value in the data section.

    ```yml
    apiVersion: v1
    kind: Secret
    metadata:
      name: azure-voting-secret
    type: Opaque
    data:
      POSTGRES_PASSWORD: bXlwYXNzd29yZA==
    ```

3. Create the Secret in your Kubernetes cluster by running the following command:

    ```bash
    kubectl create -f secret.yaml
    ```

> [!WARNING]
> base64 encoding is a simple and widely supported way to obscure plaintext data, it is not secure, as it can easily be decoded. If you want to store sensitive data like password, you should use a more secure method like encrypting with a Key Management Service (KMS) before storing it in the Secret.

## Modify the app deployment manifest

With the ConfigMap and Secert both created the next step is to replace the environment variables provided in the application deployment manuscript with the values stored in the ConfigMap and the Secert.

Complete the following steps to add the ConfigMap and Secert to the deployment mainifest:

1. Open the Kubernetes manifest file `deployment-app.yaml`. 

2. In the containers section, add an `envFrom` section and upate the `env` section.

    ```yaml
    envFrom:
    - configMapRef:
        name: azure-voting-config
    env:
    - name: DATABASE_PASSWORD
      valueFrom:
        secretKeyRef:
          name: azure-voting-secret
          key: POSTGRES_PASSWORD
    ```

    Using `envFrom` exposes all the values witin the ConfigMap as environment variables. Making it so you don't have to list them individually. 

3. Save the changes to the deployment manifest file.

4. Apply the changes to the deployment by running the following command:

    ```bash
    kubectl apply -f deployment-app.yaml
    ```

## Modify the database deployment manifest 

Next, update the database deployment manifest and replace the plain text environment variable with the Kubernetes Secert.

1. Open the `deployment-db.yaml`.
2. To add the secret to the deployment, replace the _env_ section with the following code:

    ```yml
    env:
    - name: POSTGRES_PASSWORD
      valueFrom:
        secretKeyRef:
          name: azure-voting-secret
          key: POSTGRES_PASSWORD
    ```

3. Apply the updated manifest.

    ```bash
    kubectl apply -f deployment-db.yaml
    ```

## Verify the ConfigMap and output environment variables

Verify that the ConfigMap was added to your deploy by running the following command:

    ```bash
    kubectl describe deployment azure-voting-app
    ```

Browse the output until you find the `envFrom` section with the config map reference. 

You can also verify that the environment variables from the config map are being passed to the container by running the command `kubectl exec -it <pod-name> -- printenv`. This command will show you all the environment variables passed to the pod including the one from configmap.

By following these steps, you will have successfully added a config map to the Azure Voting App Kubernetes deployment, and the environment variables defined in the config map will be passed to the container running in the pod.

## Verify the Secret and describe the deployment

Once the secret has been created you can verify it exists by running the following command:

```bash
kubectl get secrets
```

You can view additional information, such as labels, annotations, type, and the Data by running kubectl describe:

```bash
kubectl describe secret azure-voting-secret
```

By default, the describe command doesn't output the encoded value, but if you output the results as JSON or YAML you'll be able to see the secret's encoded value.

```bash
 kubectl get secret azure-voting-secret -o json
```

## Conclusion

In conclusion, using ConfigMaps and Secrets in Kubernetes can help to improve the scalability, security, and maintainability of your cluster. By decoupling configuration data and sensitive information from pod definitions, you can promote better organization and security in your Kubernetes environment. Additionally, separating these elements allows for sharing the same configuration and different secrets across multiple pods and deployments, simplifying scaling and management.