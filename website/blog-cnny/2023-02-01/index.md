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

## Decouple configurations with ConfigMaps

A ConfigMap is a Kubernetes object that decouples configuration data from pod definitions. 

Separating the configuration of your application promotes better organization and security of your Kubernetes environment. It also enables you to share the same configuration across multiple pods and deployments which can simplify scaling and management. 

Using a ConfigMap in Kubernetes is a best practice that can help to improve the scalability, security, and maintainability of your cluster.

### Create the ConfigMap

ConfigMaps can be used in one of two ways; as environment variables or volumes. For this tutorial you'll use a ConfigMap to create three environment variables inside the pod; DATABASE_URL, FISRT_VALUE, and SECOND_VALUE.

The DATABASE_URL provides the connection string to a Postgres. FIRST_VALUE and SECOND_VALUE are configuration options that change what voting options the application presents to the users.

Follow the below steps to create a new ConfigMap:

1. Create a YAML file named 'config-map.yaml'. In this file, specify the environment variables for the application.

    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: azure-voting-config
    data:
      DATABASE_URL: "postgres://postgres:mypassword@azure-voting-db"
      FIRST_VALUE: "Go"
      SECOND_VALUE: "Rust"
    ```

2. Create the config map in your Kubernetes cluster by running the following command:
    
    ```bash
    kubectl create -f config-map.yaml
    ```

### Modify the deployment manifest

With the ConfigMap created the next step is to replace the environment variables provided in the application deployment manuscript with the values stored in the ConfigMap.

Complete the following steps to add the ConfigMap to the deployment mainifest:

1. Open the Kubernetes manifest file `deployment-app.yaml`. 

2. In the containers section, add an `envFrom` section. This section will reference the config map you created above.

    ```yaml
    envFrom:
    - configMapRef:
        name: azure-voting-config
    ```

    Using `envFrom` exposes all the values witin the ConfigMap as environment variables. Making it so you don't have to list them individually. 

3. Remove the env section that contains the `DATABASE_URL` environment variable (lines 28-30), as it is already defined in the config map.

4. Save the changes to the deployment manifest file.

5. Apply the changes to the deployment by running the following command:

    ```bash
    kubectl apply -f deployment-app.yaml
    ```

### Verify the ConfigMap

Lastly, verify that the ConfigMap was added to your deploy by running the following command:

    ```bash
    kubectl describe deployment azure-voting-app
    ```

Browse the output until you find the `envFrom` section with the config map reference. 

You can also verify that the environment variables from the config map are being passed to the container by running the command `kubectl exec -it <pod-name> -- printenv`. This command will show you all the environment variables passed to the pod including the one from configmap.

By following these steps, you will have successfully added a config map to the Azure Voting App Kubernetes deployment, and the environment variables defined in the config map will be passed to the container running in the pod.

## Secure sensitive information with Kubernetes Secrets

Kubernetes Secrets provides a way for you to securely store sensitive information that can be used by Pods and Services.

By using Secrets, you can avoid storing confidential information in source control and avoid storing sensitive information as plaintext within Pod and Services configuration files.

Follow the steps below to add a secret to the Azure Voting Kubernetes deployment.

### Create the Kubernetes Secret

The `deployment-db.yaml` is a Kubernetes manifest that deploys a Postgres SQL that the Azure Voting App uses to store its results. 

Currently, that deployment manifest contains an environment variable `POSTGRES_PASSWORD`. Your task is to replace that environment variable with a Kubernetes Secret. 

Create a Secret running the following commands:

1. Encode the `POSTGRES_PASSWORD'.

    ```bash
    echo -n "mypassword" | base64
    ```

2. Create a YAML file named `secret.yaml`. In this file, add `POSTGRES_PASSWORD` and the encoded value returned above under the data section.

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

### Verify the Secret

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

### Modify the Deployment

To use the secret, add the secret to the database deployment manifest.

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

3. Next, apply the updated manifest.

    ```bash
    kubectl apply -f deployment-db.yaml
    ```