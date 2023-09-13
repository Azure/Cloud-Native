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
                <Link className="button button--secondary button--lg" to="https://aka.ms/contoso-real-estate/hacktogether?WT.mc_id=javascript-99907-ninarasi" target="_blank">
                    Hack Together
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
                <div className="row">
                    {ContentItems.map((props, idx) => (
                        <ContentItem key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Content Item 
function ContentItem({title, description, topic, topiclink, link, imglink, cta}){
    return (
        <div className={clsx('col col--4 card-col', styles.contentItem)}>
            <div className="card">
                <div className="card__image">
                    <Image alt={"Thumbnail Image for"+title} img={useBaseUrl(imglink)}/>
                </div>
                <div className="card-body">
                    <div className="text--center padding-horiz--md">
                        <h2>{title} </h2>
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
const ContentItems = [

  {
    title: 'Hello, Contoso Real Estate!',
    imglink: '/img/fallforia/hack-together-contoso.png',
    link: "https://developer.microsoft.com/reactor/events/20275/?WT.mc_id=javascript-99907-ninarasi",
    description: "Get an overview of the Contoso Real estate app and architecture.",
    cta: "Hack together"
  },
  {
    title: 'Introduction to GitHub Copilot',
    imglink: '/img/fallforia/hack-together-github-copilot.png',
    link: "https://developer.microsoft.com/reactor/events/20321/?WT.mc_id=javascript-99907-ninarasi",
    description: "Learn how to harness the power of Copilot from installation to usage.",
    cta: "Hack together"
  },
  {
    title: 'Build Your Frontend With Azure Static Web Apps',
    imglink: '/img/fallforia/hack-together-azure-static-web-apps.png',
    link: "https://developer.microsoft.com/reactor/events/20276/?WT.mc_id=javascript-99907-ninarasi",
    description: "Learn about Azure Static Web Apps, the SWA CLI - and usage.",
    cta: "Hack together"
  },
  {
    title: 'Build a Serverless Backend with Functions',
    imglink: '/img/fallforia/hack-together-azure-functions.png',
    link: "https://developer.microsoft.com/reactor/events/20277/?WT.mc_id=javascript-99907-ninarasi",
    description: "Show how Azure Functions powers the serverless backend for the app.",
    cta: "Hack together"
  },
  {
    title: 'Build & Connect Your Database with Azure Cosmos DB',
    imglink: '/img/fallforia/hack-together-cosmos-db.png',
    link: "https://developer.microsoft.com/reactor/events/20278/?WT.mc_id=javascript-99907-ninarasi",
    description: "Show how you can manage your data in CosmosDB, and usage within the Contoso app.",
    cta: "Hack together"
  },
  {
    title: 'Introduction to Azure Open AI Service',
    imglink: '/img/fallforia/hack-together-open-ai.png',
    link: "https://developer.microsoft.com/reactor/events/20322/?WT.mc_id=javascript-99907-ninarasi",
    description: "Learn the basics of Azure Open AI and explore how you can use it.",
    cta: "Hack together"
  },
];

//ZeroToHero Page
export default function HackTogether() {
    const {siteConfig} = useDocusaurusContext();
    const pageProps = {
        title: "Hack Together: JS on Azure",
        description: "Learn about the core Application and AI technologies behind the Contoso Real Estate Sample. Then make your first open-source contribution!"
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