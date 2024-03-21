import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Section Header
function SectionHeader({title, description}) {
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container text--center">
            <h1 className="hero__title">
                {title}
            </h1>
            <p> {description} </p>
            <div className={styles.buttons}>
                <Link className="button button--primary button--lg mobile-block-buttons mobile-block-button-padding button-spacer" to="https://aka.ms/intelligent-apps/serverless-learnlive?ocid=buildia24_LL_website" target="_blank" data-bi-area="Hero" data-bi-name="Build Serverless">
                    Build Serverless
                </Link>
                <Link className="button button--primary button--lg mobile-block-buttons mobile-block-button-padding button-spacer" to="https://aka.ms/intelligent-apps/aks-learnlive?ocid=buildia24_LL_website" target="_blank" data-bi-area="Hero" data-bi-name="Build Kubernetes">
                    Build Kubernetes
                </Link>
            </div>
        </div>
      </header>
    );
}

// Section Content
function SectionContent(){
    return (
        <section className={styles.features}>
            <div className="container">
                <div>
                    <h2>Serverless</h2>
                </div>
                <div className="row" style={{ paddingBottom: '1rem' }}>
                    {ContentItemsServerless.map((props, idx) => (
                        <ContentItemServerless key={idx} {...props} />
                    ))}
                </div>
                <div>
                    <hr></hr>
                </div>
                <div>
                    <h2>Kubernetes</h2>
                </div>
                <div className="row" style={{ paddingBottom: '1rem' }}>
                    {ContentItemsKubernetes.map((props, idx) => (
                        <ContentItemKubernetes key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Content Item 
function ContentItemKubernetes({title, description, link, imglink, cta}){
    return (
        <div className={clsx('col col--6 card-col', styles.contentItem)}>
            <Link className="card-link" to={link} target="_blank" data-bi-area="BodyGrid" data-bi-name={description}>
                <div className="card">
                    <div className="card__image">
                        <Image alt={"Thumbnail Image for"+title} img={useBaseUrl(imglink)}/>
                    </div>
                    <div className="card-body">
                        <div className="text--left padding-horiz--md">
                            <h2>{cta}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

function ContentItemServerless({title, description, link, imglink, cta}){
    return (
        <div className={clsx('col col--6 card-col', styles.contentItem)}>
            <Link className="card-link" to={link} target="_blank" data-bi-area="BodyGrid" data-bi-name={description}>
                <div className="card">
                    <div className="card__image">
                        <Image alt={"Thumbnail Image for"+title} img={useBaseUrl(imglink)}/>
                    </div>
                    <div className="card-body">
                        <div className="text--left padding-horiz--md">
                            <h2>{cta}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

// Update this dataset with links to the last 20 roundups
const ContentItemsKubernetes = [

  {
    title: 'Deploying Intelligent Apps with OpenAI on Azure Kubernetes Service',
    imglink: '/img/60-days-of-ia/learn-live-kubernetes-session-1.png',
    link: "https://aka.ms/learn-live-building-intelligent-apps-aks-ep1?ocid=buildia24_LL_website",
    description: "Learn how to leverage Azure OpenAI with the AKS Store Demo app.",
    cta: "February 21, 2024"
  },
  {
    title: 'Bring Your Own AI Models to Intelligent Apps on AKS with Kaito',
    imglink: '/img/60-days-of-ia/learn-live-kubernetes-session-2.png',
    link: "https://aka.ms/learn-live-building-intelligent-apps-aks-ep2?ocid=buildia24_LL_website",
    description: "Use AKS to run your own AI Models with Kaito.",
    cta: "February 28, 2024"
  },
  {
    title: 'Enhance Observability of Your Intelligent Apps on AKS',
    imglink: '/img/60-days-of-ia/learn-live-kubernetes-session-3.png',
    link: "https://aka.ms/learn-live-building-intelligent-apps-aks-ep3?ocid=buildia24_LL_website",
    description: "Learn how OpenCost, Prometheus, and Grafana can improve intelligent apps.",
    cta: "March 6, 2024"
  },
  {
    title: 'Taking Your Intelligent App Global with AKS',
    imglink: '/img/60-days-of-ia/learn-live-kubernetes-session-4.png',
    link: "https://aka.ms/learn-live-building-intelligent-apps-aks-ep4?ocid=buildia24_LL_website",
    description: "Use AKS and Azure to take your intelligent app global.",
    cta: "March 13, 2024"
  },
];

const ContentItemsServerless = [

    {
      title: 'Deploying Intelligent Apps with OpenAI on Azure Kubernetes Service',
      imglink: '/img/60-days-of-ia/serverless-learnlive-ep1.png',
      link: "https://aka.ms/serverless-learn-live/ep1",
      description: "Leverage Azure Developer CLI (azd) to deploy intelligent apps on ACA​.",
      cta: "April 2, 2024"
    },
    {
      title: 'Bring Your Own AI Models to Intelligent Apps on AKS with Kaito',
      imglink: '/img/60-days-of-ia/serverless-learnlive-ep2.png',
      link: "https://aka.ms/serverless-learn-live/ep2",
      description: "Take your intelligent apps to production with ACA using Bicep and GitHub Actions.",
      cta: "April 3, 2024"
    },
    {
      title: 'Enhance Observability of Your Intelligent Apps on AKS',
      imglink: '/img/60-days-of-ia/serverless-learnlive-ep3.png',
      link: "https://aka.ms/serverless-learn-live/ep3",
      description: "Learn how to build portable, intelligent cloud native apps with ACA and Dapr.",
      cta: "April 10, 2024"
    },
    {
      title: 'Taking Your Intelligent App Global with AKS',
      imglink: '/img/60-days-of-ia/serverless-learnlive-ep4.png',
      link: "https://aka.ms/serverless-learn-live/ep4",
      description: "Leverage the power of Serverless on Azure and Azure OpenAI with .NET.",
      cta: "April 17, 2024"
    },
];

export default function LearnLive() {
    const {siteConfig} = useDocusaurusContext();
    const pageProps = {
        title: "Learn Live",
        description: "Learn to build an enterprise-grade  solution on Azure by deconstructing an open-source reference sample."
    };
    return (
      <Layout
        title={pageProps.title}
        description={pageProps.description} >
        <SectionHeader 
            title={pageProps.title}
            description={pageProps.description} />
        <main>
            <SectionContent/>
        </main>
      </Layout>
    );
}