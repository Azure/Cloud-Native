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
        <header className={clsx("hero hero--primary heroAzureHome")} style={{ backgroundImage: 'url(/Cloud-Native/img/hero-bg.png)', padding: '8rem 0rem' }}>
        <div className="container">
            <div className="row" style={{ alignItems: 'center' }}>
                <div className="col col--6 text--left">
                    <h1 className="hero__title">
                        {title}
                    </h1>
                    <p>{description}</p>
                    <div className={styles.buttonsFFIA}>
                    <Link className="button button--primary button--lg" to="https://aka.ms/bia/events?ocid=biafy25h1_learnlive_webpage_azuremktg" data-bi-area="Hero" data-bi-name="#LearnLive">
                    Register for the series
                    </Link>
                    </div>
                </div>
                <div className="col col--6 hide-on-mobile">
                </div>
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
                    {ContentItems.map((props, idx) => (
                        <ContentItem key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Content Item 
function ContentItem({title, description, link, imglink, date}){
    return (
        <div className={clsx('col col--6 card-col', styles.contentItem)}>
            <Link className="card-link" to={link} target="_blank" data-bi-area="BodyGrid" data-bi-name={description}>
                <div className="card">
                    <div className="card__image">
                        <Image alt={"Thumbnail Image for"+title} img={useBaseUrl(imglink)}/>
                    </div>
                    <div className="card-body">
                        <div className="text--left padding-horiz--md">
                            <h2>{date}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

const ContentItems = [

    {
      title: 'Data-driven AI applications and multi-modal search',
      imglink: '/img/60-days-of-ia/learn-live-ep-1.png',
      link: "https://aka.ms/learn-live/ep1?ocid=biafy25h1_learnlive_webpage_azuremktg",
      description: "Dive into building AI applications in Python with cutting-edge technology and models.",
      date: "September 12"
    },
    {
      title: 'Containerizing and Deploying AI Workloads on AKS',
      imglink: '/img/60-days-of-ia/learn-live-ep-2.png',
      link: "https://aka.ms/learn-live/ep2?ocid=biafy25h1_learnlive_webpage_azuremktg",
      description: "Join us as we cover the key considerations for deploying AI workloads at scale.",
      date: "September 18"
    },
    {
      title: 'Operational Excellence with AKS',
      imglink: '/img/60-days-of-ia/learn-live-ep-3.png',
      link: "https://aka.ms/learn-live/ep3?ocid=biafy25h1_learnlive_webpage_azuremktg",
      description: "Explore the key components of operational excellence for AI applications on AKS.",
      date: "September 25"
    },
    {
      title: 'Get Started Incorporating AI into Your .NET Applications and Service',
      imglink: '/img/60-days-of-ia/learn-live-ep-4.png',
      link: "https://aka.ms/learn-live/ep4?ocid=biafy25h1_learnlive_webpage_azuremktg",
      description: "In this hands-on session, we'll build a simple .NET project and infuse it with AI capabilities using just a few lines of code.",
      date: "October 2"
    },
    {
      title: 'Modernize Your Apps Using GenAI Without Rewriting the Code',
      imglink: '/img/60-days-of-ia/learn-live-ep-5.png',
      link: "https://aka.ms/learn-live/ep5?ocid=biafy25h1_learnlive_webpage_azuremktg",
      description: "Enhance your apps with AI-powered features like caching and monitoring without modifying the core application code.",
      date: "October 9"
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