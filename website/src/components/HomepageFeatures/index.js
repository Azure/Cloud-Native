import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ebooksList = [
  {
    title: "Cloud Native Security",
    link: "/Cloud-Native/downloads/cloud-native-security-with-aks.pdf",
    description: (
      <>
        This guide provides an overview of best practices in cloud-native security for each stage in your container app's journey from code to cloud and how AKS works better with Microsoft Defender for Containers. 
      </>
    ),
  },
  {
    title: "Intro to Platform Engineering",
    link: "/Cloud-Native/downloads/platform-engineering-an-introduction.pdf",
    description: (
      <>
        This e-book shares our best learnings so your organization can build the foundation of a platform engineering practice and you can start seeing the benefits for yourself.
      </>
    ),
  },
  {
    title: "Code to cloud with GitHub and AKS",
    link: "/Cloud-Native/downloads/code-to-cloud-with-aks.pdf",
    description: (
      <>
        Using the recommendations in this e-book, you can get a noncontainerized application deployed on a Kubernetes cluster—in minutes. 
      </>
    ),
  },
];

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

// Simplified DownloadLink component using the native download attribute
const DownloadLink = ({ link, children }) => {
  if (!link) {
    console.error("Error: 'link' prop is required for the download functionality.");
    return null; // Exit early if the link is not provided
  }

  return (
    <a
      className="card-link"
      href={link}
      download
      data-bi-area="BodyGrid"
      data-bi-name="Download Link"
    >
      {children}
    </a>
  );
};

function Feature({ svgpath, title, description, link, style }) {
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

function EBookCard({ title, description, link, className }) {
  return (
    <div className={clsx(className, 'col col--4 card-col')}>
      {/* Use DownloadLink with the download attribute */}
      <DownloadLink link={link}>
        <div className="card">
          <div className="card-body">
            <div fill="#00ff00" className="padding-horiz--md">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </DownloadLink>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Cloud Native e-books</h2>
          </div>
        </div>
        <div className="row">
          {ebooksList.map((props, idx) => (
            <EBookCard key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <div className="col">
            <h2 style={{ paddingTop: '1rem' }}>Cloud Native App Development</h2>
          </div>
        </div>
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
