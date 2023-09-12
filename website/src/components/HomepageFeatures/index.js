import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';


const CoreServices = [
  {
    title: "Azure Kubernetes Service",
    svgpath: "img/svg/azure-kubernetes.svg",
    link: "https://docs.microsoft.com/azure/aks/",
    description: (
      <>
        Azure Kubernetes Service makes deploying managed Kubernetes
        clusters easier by offloading ops overhead to Azure.
      </>
    ),
  },
  {
    title: "Azure Container Apps",
    svgpath: "img/svg/azure-container-apps.svg",
    link: "https://docs.microsoft.com/azure/container-apps/overview",
    description: (
      <>
        Azure Container Apps enables you to run microservices and containerized
        applications on a serverless platform.
      </>
    ),
  },
  {
    title: "Azure Functions",
    svgpath: "img/svg/azure-functions.svg",
    link: "https://docs.microsoft.com/azure/azure-functions/functions-overview",
    description: (
      <>
        Use Azure Functions to Build event-driven serverless solutions with less code and
        infrastructure maintenance costs.
      </>
    ),
  },
];

const MoreServices = [
  {
    title: "Azure Cosmos DB",
    svgpath: "img/svg/azure-cosmos-db.svg",
    link: "https://learn.microsoft.com/azure/cosmos-db/",
    description: (
      <>
        Azure Cosmos DB is a fully managed, distributed NoSQL & relational
        database for modern app development.
      </>
    ),
  },
  {
    title: "Azure AI Services",
    svgpath: "img/svg/azure-ai.svg",
    link: "https://learn.microsoft.com/azure/ai-services/",
    description: (
      <>
        Build cutting-edge, market-ready, responsible apps for your organization
        with Azure Open AI, Cognitive Search and more.
      </>
    ),
  },
  {
    title: "GitHub",
    svgpath: "img/svg/github-codespaces.svg",
    link: "https://github.com/features/",
    description: (
      <>
        Improve developer experience and enhance developer productivity with GitHub tooling like Actions, Copilot and Codespaces.
      </>
    ),
  },
  /*
  Icons From: iconcloud.design
  {
    title: "Distributed App Runtime",
    svgpath: "img/svg/dapr_logo.svg",
    link: "https://dapr.io/",
    description: (
      <>
        Dapr provides APIs for building portable and reliable microservices,
        using industry best practices.
      </>
    ),
  },
  {
    title: "Kubernetes Event-Drive Autoscaling",
    svgpath: "img/svg/azure-keda.svg",
    link: "https://docs.microsoft.com/azure/aks/keda-about",
    description: (
      <>
        A lightweight component for event-driven autoscaling of applications in
        a sustainable, cost-efficient manner.
      </>
    ),
  },
  {
    title: "Azure Monitor",
    svgpath: "img/svg/azure-monitor.svg",
    link: "https://docs.microsoft.com/azure/azure-monitor/overview",
    description: (
      <>
        Delivers a comprehensive solution for collecting, analyzing, and acting
        on telemetry from your cloud and on-premises environments..
      </>
    ),
  },
  {
    title: "Azure Static Web Apps",
    svgpath: "img/svg/azure-swa.svg",
    link: "https://docs.microsoft.com/azure/static-web-apps/",
    description: (
      <>
        Azure Static Web Apps allows you to build modern web applications that
        automatically publish to the web as your code changes.
      </>
    ),
  },
  {
    title: "Azure Red Hat OpenShift",
    svgpath: "img/svg/azure-openshift.svg",
    link: "https://azure.microsoft.com/services/openshift/",
    description: (
      <>
        Use highly available, fully managed OpenShift clusters on demand -
        monitored and operated jointly by Microsoft and Red Hat
      </>
    ),
  },
  {
    title: 'Azure Event Grid',
    svgpath: 'img/svg/azure-event-grid.svg',
    link: "https://docs.microsoft.com/azure/event-grid/",
    description: (
      <>
        Event Grid is a highly scalable, serverless event broker that you can use to integrate applications using events..
      </>
    ),
  },
  {
    title: 'Azure Logic Apps',
    svgpath: 'img/svg/azure-logic-apps.svg',
    link: "https://docs.microsoft.com/azure/logic-apps/",
    description: (
      <>
        Build automated scalable workflows to integrate your apps and data across cloud services and on-premises systems
      </>
    ),
  },
  {
    title: 'Azure App Insights',
    svgpath: 'img/svg/azure-app-insights.svg',
    link: "https://docs.microsoft.com/azure/azure-monitor/app/app-insights-overview",
    description: (
      <>
        A feature of Azure Monitor that provides extensible application performance management (APM) and monitoring for live web apps. 
      </>
    ),
  },
  */
];


function Feature({svgpath, title, description, link}) {
  return (
    <div className={clsx('col col--4 card-col')}>
      <div className="card">
        <div className="card-body text--center">
          {/* <a href={link} title={title} target="_blank"> */}
            <div>
              <img width="150px" height="150px" src={svgpath} alt="" role="presentation" />
            </div>
          {/* </a> */}
          <div className="padding-horiz--md">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--block button--secondary button--lg" to={link} target="_blank">
              {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// FIXME:
// When using SVG elements, the
// icon colors change based on 
// order. Using img for now - debug
// issue (look at url(#a...) paths)

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CoreServices.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {MoreServices.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
