import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';

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
                <Link className="button button--secondary button--lg" to="https://aka.ms/contoso-real-estate/learn-live" target="_blank">
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
function ContentItem({title, description, link, imglink, cta}){
    return (
        <div className={clsx('col col--6 card-col', styles.contentItem)}>
            <div className="card">
                <div className="card__image">
                    <Image alt={"Thumbnail Image for"+title} img={imglink}/>
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
    title: 'Get Started With Contoso Real Estate',
    imglink: '../img/fallforia/learn-live-contoso.jpg',
    link: "https://aka.ms/learnlive-contoso-app-deconstructed-Ep1?WT.mc_id=javascript-99907-ninarasi",
    description: "Learn about the Contoso Real Estate sample, fork the repo, launch GitHub Codespaces - and build/preview the application to validate environment.",
    cta: "Learn live"
  },
  {
    title: 'Develop The Portal Application',
    imglink: '../img/fallforia/learn-live-portal-app.jpg',
    link: "https://aka.ms/learnlive-contoso-app-deconstructed-Ep2?WT.mc_id=javascript-99907-ninarasi",
    description: "Learn about micro-frontends and API-first design. Deconstruct the portal app, blog app, and serverless API.",
    cta: "Learn live"
  },
  {
    title: 'Integrate Auth, Payments, Search',
    imglink: '../img/fallforia/learn-live-third-party-payments.jpg',
    link: "https://aka.ms/learnlive-contoso-app-deconstructed-Ep3?WT.mc_id=javascript-99907-ninarasi",
    description: "Integrate authentication to support user profiles. Integrate payments and search features using 3rd party API.",
    cta: "Learn live"
  },
  {
    title: 'Automate, Test & Deploy to Azure',
    imglink: '../img/fallforia/learn-live-azure-developer.png',
    link: "https://aka.ms/learnlive-contoso-app-deconstructed-Ep4?WT.mc_id=javascript-99907-ninarasi",
    description: "Learn to design and run end-to-end tests with Playwright. Provision and deploy solution to Azure with AZD.",
    cta: "Learn live"
  },
];

//ZeroToHero Page
export default function LearnLive() {
    const {siteConfig} = useDocusaurusContext();
    const pageProps = {
        title: "Learn Live: Serverless Edition",
        description: "Learn to build an enterprise-grade serverless solution on Azure by deconstructing an open-source reference sample."
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