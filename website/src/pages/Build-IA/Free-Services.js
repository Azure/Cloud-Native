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
              <h1 className="hero__title">Free services for AI apps</h1>
              <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              Learn which services offer free monthly amounts <a href="#disclaimer" style={{color:"white"}}>*</a>
              </p>
              <p>Are you ready to experiment with cutting-edge technologies? You can start building intelligent apps with free Azure app, data, and AI services to minimize upfront costs.</p>
              <div className={`${styles.buttonsFFIA} hero-buttons`}>
                    <Link className="button button--primary button--lg" to="https://azure.microsoft.com/pricing/purchase-options/azure-account?ocid=cmm2sprg51l" data-bi-area="Hero" data-bi-name="#FreeServices">
                    Get started
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
        <div className="row">
          <div className="col col--6">
            <div className="glass-border" style={{marginBottom: "1rem"}}>
              <img src="/Cloud-Native/img/Azure-3D-Illustrations-DeveloperTool-Dark.jpg" alt="" role="presentation" style={{borderRadius: "1.5rem"}}/>
            </div>
          </div>
          <div className="col col--6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }}>
            <h2>Azure free services</h2>
            <p>All the Azure app, data, and AI services below offer free amounts. There are two groups of free Azure services. Some are always free, and others are free for 12 months for new customers only<a href="#disclaimer">*</a>. <a href="https://azure.microsoft.com/pricing/purchase-options/azure-account?ocid=cmm2sprg51l" target="_blank">Get started</a> and learn more about <a href="https://azure.microsoft.com/pricing/free-services" target="_blank">Azure free services</a>, including specific free amounts by service. You can estimate the cost for your project using the <a href="https://azure.microsoft.com/pricing/calculator/" target="_blank">Azure pricing calculator</a>. You can also take advantage of specialized programs for <a href="https://www.microsoft.com/startups" target='_blank'>startups</a> and <a href="https://azure.microsoft.com/free/students" target='_blank'>students</a>.</p>
            <p>Explore <a href="https://azure.github.io/Cloud-Native/30-days-of-ia-2024/kick-off" target='_blank'>AI app use cases</a> for examples and try <a href="https://aka.ms/aiapps" target='_blank'>AI app templates</a> to deploy starter apps to Azure using VS Code or GitHub Codespaces.</p>
          </div>
        </div>
        <h2 className='margin-top--md text--center'>Azure application services</h2>
        <div className="row" style={{ paddingBottom: '1rem' }}>
          {ContentItemsB.map((props, idx) => (
            <ContentItem key={idx} {...props} />
          ))}
        </div>
        <h2 className='margin-top--md text--center'>Azure databases</h2>
        <div className="row" style={{ paddingBottom: '1rem' }}>
          {ContentItemsC.map((props, idx) => (
            <ContentItem key={idx} {...props} />
          ))}
        </div>
        <h2 className='margin-top--md text--center'>Azure AI services</h2>
        <div className="row" style={{ paddingBottom: '1rem' }}>
          {ContentItemsA.map((props, idx) => (
            <ContentItem key={idx} {...props} />
          ))}
        </div>
        <div className="row">
            <div className="col">
            <p id="disclaimer" style={{fontSize:"0.875rem", marginTop:"1rem"}}>*Some services are always free for Azure customers, and some are free for 12 months for new customers only. To see the free amount for each service, visit the <a href="https://azure.microsoft.com/en-us/pricing" target='_blank'>pricing</a> page for that specific service. 12 months free services is available only to new customers who have not previously had an Azure account or received 12 months of free services. It is not currently available to customers who sign up directly for pay as you go in China and India. Customers who try Azure free must move to pay as you go within 30 days to continue receiving 12 months free services. Read the full offer terms <a href="https://go.microsoft.com/fwlink/?linkid=2234065" target='_blank'>here</a>.</p>
            </div>
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
    logoLight: '/img/svg/free-services/azure-icon-ai-search.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-search/',
    summary: 'Deliver high-quality responses with a vector database built for advanced retrieval augmented generation (RAG) and modern search.',
  },
  {
    title: 'Azure AI Content Safety',
    logoLight: '/img/svg/free-services/azure-icon-ai-content-safety.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-content-safety/',
    summary: 'Monitor text and images to detect offensive or inappropriate content.',
  },
  {
    title: 'Azure AI Document Intelligence',
    logoLight: '/img/svg/free-services/azure-icon-ai-docs-intelligence.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-document-intelligence',
    summary: 'Apply advanced machine learning to extract text, key-value pairs, tables, and structures from documents.',
  },
  {
    title: 'Azure AI Language',
    logoLight: '/img/svg/free-services/azure-icon-ai-language.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-language',
    summary: 'Build conversational interfaces, summarize documents, and analyze text using prebuilt AI-powered features.',
  },
  {
    title: 'Azure AI Speech',
    logoLight: '/img/svg/free-services/azure-icon-ai-speech.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-speech/',
    summary: 'Use industry-leading AI services such as speech-to-text, text-to-speech, speech translation, and speaker recognition.',
  },
  {
    title: 'Azure AI Translator',
    logoLight: '/img/svg/free-services/azure-icon-ai-translator.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-translator',
    summary: 'Translate documents and text in real time across more than 100 languages.',
  },
  {
    title: 'Azure AI Vision',
    logoLight: '/img/svg/free-services/azure-icon-ai-computer-vision.svg',
    link: 'https://azure.microsoft.com/products/ai-services/ai-vision/',
    summary: 'Read text, analyze images, and detect faces with optical character recognition (OCR) and machine learning.',
  },

];

const ContentItemsB = [
  {
    title: 'API Management',
    logoLight: '/img/svg/free-services/azure-icon-apps-api-management-services.svg',
    link: 'https://azure.microsoft.com/products/api-management',
    summary: 'A hybrid, multi-cloud management platform for APIs across all environments.',
  },
  {
    title: 'Azure App Service',
    logoLight: '/img/svg/free-services/azure-icon-apps-app-services.svg',
    link: 'https://azure.microsoft.com/products/app-service',
    summary: 'Quickly build, deploy, and scale web apps and APIs globally with a fully managed platform as a service (PaaS).',
  },
  {
    title: 'Azure Container Apps',
    logoLight: '/img/svg/free-services/azure-icon-apps-container-apps.svg',
    link: 'https://azure.microsoft.com/products/container-apps',
    summary: 'Run modern apps and microservices using serverless containers.',
  },
  {
    title: 'Azure Functions',
    logoLight: '/img/svg/free-services/azure-icon-apps-azure-functions.svg',
    link: 'https://azure.microsoft.com/products/functions',
    summary: 'Execute event-driven serverless code with an end-to-end development experience.',
  },
  {
    title: 'Azure Kubernetes Service (AKS)',
    logoLight: '/img/svg/free-services/azure-icon-apps-kubernetes.svg',
    link: 'https://azure.microsoft.com/products/kubernetes-service',
    summary: 'Simplify Kubernetes operations, build cloud-native apps, and innovate with AI and open-source technology.',
  },
];

const ContentItemsC = [
  {
    title: 'Azure Cosmos DB',
    logoLight: '/img/svg/free-services/azure-icon-database-cosmosdb.svg',
    link: 'https://azure.microsoft.com/products/cosmos-db/',
    summary: 'Fuel apps with high-performance, distributed computing over massive volumes of NoSQL and vector data.',
  },
  {
    title: 'Azure Database for MySQL',
    logoLight: '/img/svg/free-services/azure-icon-database-mysql.svg',
    link: 'https://azure.microsoft.com/products/mysql/',
    summary: 'Innovate faster with a fully managed MySQL database.',
  },
  {
    title: 'Azure Database for PostgreSQL',
    logoLight: '/img/svg/free-services/azure-icon-database-postgresql.svg',
    link: 'https://azure.microsoft.com/products/postgresql/',
    summary: 'Innovate faster with a fully managed PostgreSQL database.',
  },
  {
    title: 'Azure SQL Database',
    logoLight: '/img/svg/free-services/azure-icon-database-sql.svg',
    link: 'https://azure.microsoft.com/products/azure-sql/database/',
    summary: 'Build limitless, trusted, AI-ready apps on a fully managed SQL database.',
  },
];

export default function FreeServices() {
  const { siteConfig } = useDocusaurusContext();
  const pageProps = {
    title: "Free Services for AI apps",
    description: "Get started with free amounts of Azure AI, app, and data services"
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
