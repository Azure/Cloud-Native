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
                <Link className="button button--secondary button--lg mobile-block-buttons mobile-block-button-padding button-spacer" to="https://learn.microsoft.com/en-us/events/learn-events/learnlive-intelligent-apps-with-azure-kubernetes-service/" target="_blank">
                    Build Kubernetes
                </Link>
                <Link className="button button--primary button--lg mobile-block-buttons" to="https://aka.ms/contoso-real-estate/learn-live" target="_blank">
                    Learn to build
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
                    <h2>Azure Kubernetes Service</h2>
                </div>
                <div className="row" style={{ paddingBottom: '1rem' }}>
                    {ContentItemsKubernetes.map((props, idx) => (
                        <ContentItemKubernetes key={idx} {...props} />
                    ))}
                </div>
                <div className="row" style={{ display: 'contents' }}>
                    <hr />
                </div>
                <div>
                    <h2>Learn Live</h2>
                </div>
                <div className="row">
                    {ContentItemsLearnLive.map((props, idx) => (
                        <ContentItemLearnLive key={idx} {...props} />
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
            <div className="card">
                <div className="card__image">
                    <Image alt={"Thumbnail Image for"+title} img={useBaseUrl(imglink)}/>
                </div>
                <div className="card-body">
                    <div className="text--center padding-horiz--md">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div className={styles.buttons}>
                        <Link className="button button--block button--secondary button--lg" to={link} target="_blank">
                            {cta}
                        </Link>
                    </div>
                </div>
            </div>
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
                        <h3>{title} </h3>
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
    title: 'Get Started with Open AI and AKS',
    imglink: '/img/fallforia/learn-live-kubernetes-ep1.png',
    link: "https://aka.ms/learnlive-intelligent-apps-with-azure-kubernetes-service-Ep1?WT.mc_id=javascript-99907-ninarasi",
    description: "Learn how to integrate Azure Open AI with the AKS Store demo application.",
    cta: "Build Kubernetes"
  },
  {
    title: 'Security with AKS Workload Identity',
    imglink: '/img/fallforia/learn-live-kubernetes-ep2.png',
    link: "https://aka.ms/learnlive-intelligent-apps-with-azure-kubernetes-service-Ep2?WT.mc_id=javascript-99907-ninarasi",
    description: "Learn how to use Workload Identity to better secure access to your Azure OpenAI service.",
    cta: "Build Kubernetes"
  },
  {
    title: 'Fault Tolerant Intelligent Apps',
    imglink: '/img/fallforia/learn-live-kubernetes-ep3.png',
    link: "https://aka.ms/learnlive-intelligent-apps-with-azure-kubernetes-service-Ep3?WT.mc_id=javascript-99907-ninarasi",
    description: "Use open source and Azure-based tools to find faults and improve resilience.",
    cta: "Build Kubernetes"
  },
  {
    title: 'Secure Network Access',
    imglink: '/img/fallforia/learn-live-kubernetes-ep4.png',
    link: "https://aka.ms/learnlive-intelligent-apps-with-azure-kubernetes-service-Ep4?WT.mc_id=javascript-99907-ninarasi",
    description: "Enhance the network security of intelligent apps in AKS.",
    cta: "Build Kubernetes"
  },
];

const ContentItemsLearnLive = [

    {
      title: 'Get Started With Contoso Real Estate',
      imglink: '/img/fallforia/learn-live-contoso.jpg',
      link: "https://aka.ms/contoso-real-estate/learn-live/Ep1?WT.mc_id=javascript-99907-ninarasi",
      description: "Learn about the Contoso Real Estate sample, fork the repo, launch GitHub Codespaces - and build/preview the application to validate environment.",
      cta: "Learn live"
    },
    {
      title: 'Develop The Portal Application',
      imglink: '/img/fallforia/learn-live-portal-app.jpg',
      link: "https://aka.ms/contoso-real-estate/learn-live/Ep2?WT.mc_id=javascript-99907-ninarasi",
      description: "Learn about micro-frontends and API-first design. Deconstruct the portal app, blog app, and serverless API.",
      cta: "Learn live"
    },
    {
      title: 'Integrate Auth, Payments, Search',
      imglink: '/img/fallforia/learn-live-third-party-payments.jpg',
      link: "https://aka.ms/contoso-real-estate/learn-live/Ep3?WT.mc_id=javascript-99907-ninarasi",
      description: "Integrate authentication to support user profiles. Integrate payments and search features using 3rd party API.",
      cta: "Learn live"
    },
    {
      title: 'Automate, Test & Deploy to Azure',
      imglink: '/img/fallforia/learn-live-azure-developer.png',
      link: "https://aka.ms/contoso-real-estate/learn-live/Ep4?WT.mc_id=javascript-99907-ninarasi",
      description: "Learn to design and run end-to-end tests with Playwright. Provision and deploy solution to Azure with AZD.",
      cta: "Learn live"
    },
  ];


export default function LearnLive() {
    const {siteConfig} = useDocusaurusContext();
    const pageProps = {
        title: "Learn Live",
        description: "Learn to build an enterprise-grade solution on Azure by deconstructing an open-source reference sample."
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