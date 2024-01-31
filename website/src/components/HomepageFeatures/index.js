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
    style: "",
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
    style: "",
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
    style: "",
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
    style: "",
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
    style: "",
  },
  {
    title: "GitHub",
    svgpath: "img/svg/github.svg",
    link: "https://github.com/features/",
    description: (
      <>
        Improve developer experience and enhance developer productivity with GitHub tooling like Actions, Copilot and Codespaces.
      </>
    ),
    style: "github-icon-home",
  },
];


function Feature({svgpath, title, description, link, style}) {
  return (
    <div className={clsx('col col--4 card-col')}>
      <Link className="card-link" to={link} target="_blank" data-bi-area="BodyGrid" data-bi-name={title}>
      <div className="card">
        <div className="card-body text--center">
            <div>
              <img width="150px" height="150px" className={style} src={svgpath} alt="" role="presentation" />
            </div>
          <div className="padding-horiz--md">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      </Link>
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
