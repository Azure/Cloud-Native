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

function ContentItemLearnLive({title, description, link, imglink, cta}){
    return (
        <div className={clsx('col col--6 card-col', styles.contentItem)}>
            <div className="card">
                <div className="card__image">
                    <Image alt={"Thumbnail Image for"+title} img={useBaseUrl(imglink)}/>
                </div>
                <div className="card-body">
                    <div className="text--center padding-horiz--md">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="card__footer">
                        <Link className="button button--block button--secondary button--lg" to={link} target="_blank">
                            {cta}
                        </Link>
                    </div>
                </div>
            </div>
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