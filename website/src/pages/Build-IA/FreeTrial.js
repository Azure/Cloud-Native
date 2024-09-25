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
      <header className={clsx("hero hero--primary heroAzureHome")} style={{ backgroundImage: 'url(../img/hero-bg.png)', padding: '8rem 0rem' }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col col--6">
              <h1 className="hero__title">Free Trial</h1>
              <p style={{ fontSize: '1.125rem' }}>
                Are you a developer eager to experiment with cutting-edge technologies but worried about the costs? Azure has you covered! Dive into an extensive suite of free services designed to help get started building intelligent apps while minimizing upfront costs. You can also take advantage for specialized programs for startups and students.
              </p>
              <div className={styles.buttonsFFIA}>
                <Link className="button button--primary button--lg" to="https://bing.com" data-bi-area="Hero" data-bi-name="#DemoBytes">
                  Lorem ipsum
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
function SectionContent() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>Azure AI Services</h2>
        <div className="row" style={{ paddingBottom: '1rem' }}>
          {ContentItemsA.map((props, idx) => (
            <ContentItem key={idx} {...props} />
          ))}
        </div>
        <h2>Azure application services</h2>
        <div className="row" style={{ paddingBottom: '1rem' }}>
          {ContentItemsB.map((props, idx) => (
            <ContentItem key={idx} {...props} />
          ))}
        </div>
        <h2>Azure databases</h2>
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
function ContentItem({ title, logoLight, link, summary }) {
  return (
    <div className={clsx('col col--4 card-col', styles.contentItem)}>
      <Link
        className="card-link"
        to={link}
        target="_blank"
        data-bi-area="BodyGrid"
        data-bi-name={title}
      >
        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <div className="card-body" style={{ flexGrow: 1 }}>
            <div className="text--left padding-horiz--md">
              <div className="card-icon-bg">
                <Image
                  style={{
                    height: '32px',
                  }}
                  alt={`Thumbnail Image for ${title}`}
                  img={useBaseUrl(logoLight)}
                />
              </div>
              <h3>{title}</h3>
              <p>{summary}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

const ContentItemsA = [
  {
    title: 'Azure AI Search',
    logoLight: '/img/svg/free-trial/azure-icon-ai-search.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-search/',
    summary: 'Deliver high-quality responses with a vector database built for advanced retrieval augmented generation (RAG) and modern search.',
  },
  {
    title: 'Azure AI Content Safety',
    logoLight: '/img/svg/free-trial/azure-icon-ai-content-safety.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-content-safety/',
    summary: 'Monitor text and images to detect offensive or inappropriate content.',
  },
  {
    title: 'Azure AI Document Intelligence',
    logoLight: '/img/svg/free-trial/azure-icon-ai-docs-intelligence.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-document-intelligence',
    summary: 'Apply advanced machine learning to extract text, key-value pairs, tables, and structures from documents.',
  },
  {
    title: 'Azure AI Language',
    logoLight: '/img/svg/free-trial/azure-icon-ai-language.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-language',
    summary: 'Build conversational interfaces, summarize documents, and analyze text using prebuilt AI-powered features.',
  },
  {
    title: 'Azure AI Speech',
    logoLight: '/img/svg/free-trial/azure-icon-ai-speech.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-speech/',
    summary: 'Use industry-leading AI services such as speech-to-text, text-to-speech, speech translation, and speaker recognition.',
  },
  {
    title: 'Azure AI Translator',
    logoLight: '/img/svg/free-trial/azure-icon-ai-translator.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-translator',
    summary: 'Translate documents and text in real time across more than 100 languages.',
  },
  {
    title: 'Azure AI Vision',
    logoLight: '/img/svg/free-trial/azure-icon-ai-computer-vision.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-vision/',
    summary: 'Read text, analyze images, and detect faces with optical character recognition (OCR) and machine learning.',
  },

];

const ContentItemsB = [
  {
    title: 'API Management',
    logoLight: '/img/svg/free-trial/azure-icon-apps-api-management-services.svg',
    link: 'https://azure.microsoft.com/products/api-management',
    summary: 'A hybrid, multi-cloud management platform for APIs across all environments.',
  },
  {
    title: 'Azure App Service',
    logoLight: '/img/svg/free-trial/azure-icon-apps-app-services.svg',
    link: 'https://azure.microsoft.com/products/app-service',
    summary: 'Quickly build, deploy, and scale web apps and APIs globally with a fully managed platform as a service (PaaS).',
  },
  {
    title: 'Azure Container Apps',
    logoLight: '/img/svg/free-trial/azure-icon-apps-container-apps.svg',
    link: 'https://aka.ms/learn-live/ep1?ocid=biahttps://azure.microsoft.com/products/container-apps',
    summary: 'Run modern apps and microservices using serverless containers.',
  },
  {
    title: 'Azure Functions',
    logoLight: '/img/svg/free-trial/azure-icon-apps-azure-functions.svg',
    link: 'https://azure.microsoft.com/products/functions',
    summary: 'Execute event-driven serverless code with an end-to-end development experience.',
  },
  {
    title: 'Azure Kubernetes Service (AKS)',
    logoLight: '/img/svg/free-trial/azure-icon-apps-kubernetes.svg',
    link: 'https://azure.microsoft.com/products/kubernetes-service',
    summary: 'Simplify Kubernetes operations, build cloud-native apps, and innovate with AI and open-source technology.',
  },
];

const ContentItemsC = [
  {
    title: 'Azure Cosmos DB',
    logoLight: '/img/svg/free-trial/azure-icon-database-cosmosdb.svg',
    link: 'https://azure.microsoft.com/products/cosmos-db/',
    summary: 'Fuel apps with high-performance, distributed computing over massive volumes of NoSQL and vector data.',
  },
  {
    title: 'Azure Database for MySQL',
    logoLight: '/img/svg/free-trial/azure-icon-database-mysql.svg',
    link: 'https://aka.ms/learn-live/ep1?ocid=bihttps://azure.microsoft.com/products/mysql/',
    summary: 'Innovate faster with a fully managed MySQL database.',
  },
  {
    title: 'Azure Database for PostgreSQL',
    logoLight: '/img/svg/free-trial/azure-icon-database-postgresql.svg',
    link: 'https://azure.microsoft.com/products/postgresql/',
    summary: 'Innovate faster with a fully managed PostgreSQL database.',
  },
  {
    title: 'Azure SQL Database',
    logoLight: '/img/svg/free-trial/azure-icon-database-sql.svg',
    link: 'https://azure.microsoft.com/products/azure-sql/database/',
    summary: 'Build limitless, trusted, AI-ready apps on a fully managed SQL database.',
  },
];

export default function UserJourney() {
  const { siteConfig } = useDocusaurusContext();
  const pageProps = {
    title: "Free Trial",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }

    return (
        <Layout title={pageProps.title} description={pageProps.description}>
          <Head>
            <meta name="robots" content="noindex, nofollow" />
          </Head>
            <CampaignHeader />
            <main>
            <SectionContent />
            </main>
        </Layout>
    );
}
