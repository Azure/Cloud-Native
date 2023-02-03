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

Welcome to `Day 1 of Week 3` of #CloudNativeNewYear!

The theme for this week is Bringing Your Application to Kubernetes. Last we talked about Kubernetes Fundamentals. Today we'll explore getting an existing application running in Kubernetes with a full pipeline in GitHub Actions.

## What We'll Cover
 * Our Application
 * Adding Some Infrastructure as Code
 * Building and Publishing a Container Image
 * Deploying to Kubernetes
 * Exercise
 * Resources


<!-- ************************************* -->
<!--  AUTHORS: ONLY UPDATE BELOW THIS LINE -->
<!-- ************************************* -->

## Our Application

This week we'll be taking an exisiting application - something similar to a typical line of business application - and setting it up to run in Kubernetes.  Over the course of the week, we'll address different concerns.  Today we'll focus on updating our CI/CD process to handle standing up (or validating that we have) an [Azure Kubernetes Service (AKS)]() environment, building and publishing container images for our web site and API server, and getting those services running in Kubernetes.

The application we'll be starting with is [eShopOnWeb]().  This application has a web site and API which are backed by a SQL Server instance.  It's built in .NET 7, so it's cross-platform.

:::info 
For the enterprising among you, you may notice that there are a number of different eShopOn* variants, including [eShopOnContainers]().  We aren't using that example as it's more of an end state than a starting place. Afterwards, feel free to check out that example as what this solution could look like as a series of microservices.
:::

## Adding Some Infrastructure as Code

[Just like last week](), we need to stand up an AKS environment.  This week, however, rather than running commands in our own shell, we'll set up GitHub Actions to do that for us.

### Federated Identity

### Creating a Bicep Deployment

### Adding the Bicep Deployment

## Building and Publishing a Container Image

## Deploying to Kubernetes

## Exercise

## Resources