import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

function CampaignHeader() {
    return (
      <header className={clsx("hero hero--primary heroAzureHome")} style={{ backgroundImage: 'url(/Cloud-Native/img/cloud-native-hero-bg.webp)', padding: '8rem 0rem' }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col col--6">
              <h1 className="hero__title">Events</h1>
              <p style={{ marginBottom: '1rem' }}>
              Build AI Apps and Agents kicks off in March with a series of engaging in-person, hands-on meetups where developers will delve into architectural best practices for AI-powered applications using your favorite tools. Collaborate with fellow tech enthusiasts as you learn to build and deploy scalable AI solutions, integrating AI models, data pipelines, and cloud services to create robust and efficient architectures.
              </p>
              <p>Check out the calendar below for upcoming meetups and previous installments of the Build AI Apps and Agents initiative.</p>
              {/* <div className={`${styles.buttonsFFIA} hero-buttons`}>
                    <Link className="button button--primary button--lg" to="https://azure.microsoft.com/pricing/purchase-options/azure-account?ocid=cmm2sprg51l" data-bi-area="Hero" data-bi-name="#FreeServices">
                    Get started
                    </Link>
              </div> */}
            </div>
            <div className="col col--6 hide-on-mobile">

            </div>
            </div>
          </div>
      </header>
    );
}

// Section Content
function SectionContent() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className='margin-top--md'>Events calendar</h2>
        <div className="row" style={{ paddingBottom: '1rem' }}>
          {ContentItemsB.map((props, idx) => (
            <ContentItem key={idx} {...props} />
          ))}
        </div>
        <h2 className='margin-top--md'>Previously on Build AI Apps and Agents</h2>
        <div className="row" style={{ paddingBottom: '1rem' }}>
          {ContentItemsC.map((props, idx) => (
            <ContentItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Content Item
function ContentItem({ logoLight, eventDate, category, title, link }) {
  return (
    <div className={clsx('col col--4 card-col', styles.contentItem)}>
        <div className="card">
          <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div className="text--left">
              {/* <div className="card-icon-bg">
                <Image
                  style={{
                    height: '32px',
                  }}
                  alt={`Thumbnail Image for ${title}`}
                  img={useBaseUrl(logoLight)}
                />
              </div> */}
              <h3>{eventDate}</h3>
              <p className="text--left margin-bottom--none text--semibold">{category}</p>
              <p>{title}</p>
            </div>
            <div>
              <a
                style={{
                  textDecoration: 'underline',
                }}
                  href={link}
                  data-bi-area="BodyGrid"
                  data-bi-name={title}
                  target='_blank'
                >
                  View event details
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

const ContentItemsB = [
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'March 17, 2025',
    // category: 'Event',
    title: 'São Paulo | Architecture Recipes for AI-Powered Applications',
    link: 'https://aka.ms/bia/reactorsp?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'March 18, 2025',
    // category: 'Event',
    title: 'LATAM, online | Architecture Recipes for AI-Powered Applications',
    link: 'https://aka.ms/BIA/Espanol?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'March 19, 2025',
    // category: 'Event',
    title: 'Redmond | Architecture Recipes for AI-Powered Applications',
    link: 'https://aka.ms/BIA/Redmond?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'March 19, 2025',
    // category: 'Event',
    title: 'Sydney | Architecture Recipes for AI-Powered Applications',
    link: 'https://aka.ms/BIA/Sydney?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'March 20, 2025',
    // category: 'Event',
    title: 'London | Architecture Recipes for AI-Powered Applications',
    link: 'https://aka.ms/BIA/London?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'March 20, 2025',
    // category: 'Event',
    title: 'Toronto | Architecture Recipes for AI-Powered Applications',
    link: 'https://aka.ms/BIA/Toronto?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'March 20, 2025',
    // category: 'Event',
    title: 'NYC | Architecture Recipes for AI-Powered Applications',
    link: 'https://aka.ms/BIA/NYC?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'March 20, 2025',
    // category: 'Event',
    title: 'Shanghai | Architecture Recipes for AI-Powered Applications',
    link: 'https://aka.ms/BIA/Shanghai?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'March 21, 2025',
    // category: 'Event',
    title: 'Bengaluru | Architecture Recipes for AI-Powered Applications',
    link: 'https://aka.ms/BIA/Bengaluru?ocid=buildia24_website',
  },
];

const ContentItemsC = [
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'November 19-22, 2024',
    category: 'Microsoft Ignite',
    title: 'Online and In-person at Chicago',
    link: 'https://ignite.microsoft.com/',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'November 12-15, 2024',
    category: 'KubeCon NA',
    title: 'Cloud Native Con 2024',
    link: 'https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america-2024/',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'October 29-30, 2024',
    category: 'GitHub Universe .24',
    title: 'Online and In-person at San Francisco',
    link: 'https://githubuniverse.com/',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'October 16, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 15: Elevate Policy Authoring Experience in API Management with Microsoft Copilot for Azure',
    link: 'https://aka.ms/demo-bytes/ep15',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'October 15, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 14: GenAI Gateway Capabilities in Azure API Management',
    link: 'https://aka.ms/demo-bytes/ep14',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'October 14, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 13: Ingest your own content using Azure Functions OpenAI Triggers & Bindings',
    link: 'https://aka.ms/demo-bytes/ep13',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'October 9, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 12: Building and running intelligent Spring app on Azure Container Apps',
    link: 'https://aka.ms/demo-bytes/ep12',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'October 9, 2024',
    category: 'Learn Live',
    title: 'Ep. 05: Modernize Your Apps Using GenAI Without Rewriting the Code',
    link: 'https://aka.ms/learn-live/ep5',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'October 8, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 11: 10x Developer with GitHub Copilot',
    link: 'https://aka.ms/demo-bytes/ep11',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'October 7, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 10: Architecting a Unified AI Stack: Secure, Responsible, and Scalable',
    link: 'https://aka.ms/demo-bytes/ep10',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'October 2, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 09: Extending GitHub Copilot to chat with your Postgres Database',
    link: 'https://aka.ms/demo-bytes/ep9',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'October 2, 2024',
    category: 'Learn Live',
    title: 'Ep. 04: Get Started Incorporating AI into Your .NET Applications and Service',
    link: 'https://aka.ms/learn-live/ep4',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'October 1, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 08: End-to-End AI application deployments with GitHub Copilot',
    link: 'https://aka.ms/demo-bytes/ep8',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'September 30, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 07: Configure and Deploy Intelligent Java SpringBoot Apps on Azure App Service',
    link: 'https://aka.ms/demo-bytes/ep7',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'September 25, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 06: Apply auto-scaling and load testing to your AI applications to make them customer-ready',
    link: 'https://aka.ms/demo-bytes/ep6',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'September 25, 2024',
    category: 'Learn Live',
    title: 'Ep. 03: Operational Excellence with AKS',
    link: 'https://aka.ms/learn-live/ep3',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'September 24, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 05: Add generative AI capabilities to your web apps, leveraging vector databases and caching',
    link: 'https://aka.ms/demo-bytes/ep5',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'September 23, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 04: Get your on-prem apps AI-ready using GitHub Copilot and Azure Migrate Code Assessment tool',
    link: 'https://aka.ms/demo-bytes/ep4',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'September 20, 2024',
    category: 'PyCon India 2024',
    title: 'Introduction to data-driven AI applications and multi-modal search',
    link: 'https://in.pycon.org/2024/',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'September 18, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 03: Fine-Tuning Open-Source Models made easy with KAITO',
    link: 'https://aka.ms/demo-bytes/ep3',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'September 18, 2024',
    category: 'Learn Live',
    title: 'Ep. 02: Containerizing and Deploying AI Workloads on AKS',
    link: 'https://aka.ms/learn-live/ep2',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'September 17, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 02: Deliver AI infused app innovation with Open Liberty on AKS',
    link: 'https://aka.ms/demo-bytes/ep2',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'September 16, 2024',
    category: 'Demo Bytes',
    title: 'Ep. 01: Azure Kubernetes Service Automated Deployments - Streamlining Kubernetes Deployments',
    link: 'https://aka.ms/demo-bytes/ep1',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'September 12, 2024',
    category: 'Learn Live',
    title: 'Ep. 01: Data-driven AI applications and multi-modal search',
    link: 'https://aka.ms/learn-live/ep1',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'September 3-13, 2024',
    category: 'Rag Hack',
    title: 'Build a RAG app',
    link: 'https://aka.ms/raghack',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'May 21-23, 2024',
    category: 'Microsoft Build ',
    title: 'Seattle, Online',
    link: 'https://build.microsoft.com/home?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'May 16, 2024',
    category: 'Pycon US',
    title: 'Build Intelligent Apps',
    link: 'https://us.pycon.org/2024/schedule/presentation/145/?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'April 17, 2024',
    category: 'Learn Live',
    title: 'Ep 04: Build Intelligent Apps with .NET and Serverless on Azure',
    link: 'https://aka.ms/serverless-learn-live/ep4?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'April 11, 2024',
    category: '#Ask The Expert',
    title: 'Azure AI',
    link: 'https://reactor.microsoft.com/en-us/reactor/events/21694/?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'April 10, 2024',
    category: 'Learn Live',
    title: 'Ep 03: Azure Container Apps Uncovered: Scenarios, Workloads, and Portability',
    link: 'https://aka.ms/serverless-learn-live/ep3?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'April 4, 2024',
    category: '#Ask The Expert',
    title: 'Azure Functions',
    link: 'https://reactor.microsoft.com/en-us/reactor/events/21691/?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'April 3, 2024',
    category: 'Learn Live',
    title: 'Ep 02: From Day Zero To Production with Azure Container Apps',
    link: 'https://aka.ms/serverless-learn-live/ep2?ocid=buildia24_website',
  },
  {
    logoLight: '/img/Azure-Illcon-Light-Calendar-512.png',
    eventDate: 'April 2, 2024',
    category: 'Learn Live',
    title: 'Ep 01: Build Intelligent Apps with Serverless Containers on Azure Container Apps',
    link: 'https://aka.ms/serverless-learn-live/ep1?ocid=buildia24_website',
  },
];



export default function FreeServices() {
  const { siteConfig } = useDocusaurusContext();
  const pageProps = {
    title: "Events calendar",
    description: "Check out the calendar for upcoming meetups and previous installments of the Build AI Apps and Agents initiative"
  }

    return (
        <Layout title={pageProps.title} description={pageProps.description}>
          <Head>
          </Head>
            <CampaignHeader />
            <main className={styles.pageBg}>
            <SectionContent />
            </main>
        </Layout>
    );
}
