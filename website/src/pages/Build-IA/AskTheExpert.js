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
                <Link className="button button--secondary button--lg mobile-block-buttons mobile-block-button-padding button-spacer" to="https://docs.microsoft.com/shows/Ask-the-Expert/?WT.mc_id=javascript-99907-ninarasi" target="_blank">
                    Ask the Expert
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
                <div className="row" style={{ paddingBottom: '1rem' }}>
                    {ContentItemsATE.map((props, idx) => (
                        <ContentItemATE key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Content Item 
function ContentItemATE({title, description, link, imglink, cta}){
    return (
        <div className={clsx('col col--6 card-col', styles.contentItem)}>
            <div className="card">
                <div className="card__image">
                    <Image alt={"Thumbnail Image for"+title} img={useBaseUrl(imglink)}/>
                </div>
                <div className="card-body">
                    <div className="text--left">
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

// Update this dataset with links to the last 20 roundups
const ContentItemsATE = [
{
    title: 'Build Intelligent Apps with Azure Kubernetes Service',
    imglink: '/img/fallforia/ate-azure-kubernetes-service.jpg',
    link: "https://reactor.microsoft.com/en-us/reactor/events/20732/?WT.mc_id=javascript-99907-ninarasi",
    description: "Join the Azure Kubernetes Service Product Group to learn about developing cloud-native apps for high scale and resilience with Azure Kubernetes Service clusters. Discuss with the experts on how to combine the power of AI with Kubernetes app development to create highly differentiated digital experiences. Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure Kubernetes Service (AKS).",
    cta: "Watch on-demand"
    },
  {
    title: 'Build Intelligent Apps with Azure Functions',
    imglink: '/img/fallforia/ate-azure-functions.jpg',
    link: "https://reactor.microsoft.com/en-us/reactor/events/20730/?WT.mc_id=javascript-99907-ninarasi",
    description: "Join the Azure Functions Product Group to learn about FaaS or Functions-as-a-Service in Azure serverless computing. It is time to focus on the pieces of code that matter most to you while Azure Functions handles the rest. Discuss with the experts on how to combine the power of AI, cloud-scale data, and serverless app development to create highly differentiated digital experiences. Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure Functions.",
    cta: "Watch on-demand"
  },
  {
    title: 'Build Intelligent Apps with Azure Container Apps',
    imglink: '/img/fallforia/ate-azure-container-apps.jpg',
    link: "https://reactor.microsoft.com/en-us/reactor/events/20728/?WT.mc_id=javascript-99907-ninarasi",
    description: "Join the Azure Container Apps Product Group to learn about combining the power of AI, cloud-scale data, and cloud-native app development to create highly differentiated digital experiences with microservices. Azure Container Apps is an app-centric service, empowering developers to focus on the differentiating business logic of their apps rather than on cloud infrastructure management. Discuss with the experts on how to develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure Container Apps.",
    cta: "Watch on-demand"
  },
  {
    title: 'Build Intelligent Apps with Azure App Service',
    imglink: '/img/fallforia/ate-azure-apps-service.jpg',
    link: "https://reactor.microsoft.com/en-us/reactor/events/20734/?WT.mc_id=javascript-99907-ninarasi",
    description: "Join the Azure App Service Product Group to learn about PaaS or Platform-as-a-Service app development on Azure. Quickly build, deploy, and scale web apps and APIs on your terms. Discuss with the experts on how to combine the power of AI, web app development, and cloud-scale data to create highly differentiated digital experiences. Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure App Service.",
    cta: "Watch on-demand"
  },
];

export default function AskTheExperts() {
    const {siteConfig} = useDocusaurusContext();
    const pageProps = {
        title: "Ask The Expert",
        description: "Ask the Expert is a series of scheduled 30-minute LIVE broadcasts where you can connect with experts to get your questions answered."
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