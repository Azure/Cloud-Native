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
                <Link className="button button--primary button--lg mobile-block-buttons mobile-block-button-padding button-spacer" to="https://aka.ms/intelligent-apps/ate?ocid=buildia24_AE_website" target="_blank" data-bi-area="Hero" data-bi-name="Ask the Expert">
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
            <Link className="card-link" to={link} target="_blank" data-bi-area="BodyGrid" data-bi-name={title}>
                <div className="card">
                    <div className="card__image">
                        <Image alt={"Thumbnail Image for"+cta} img={useBaseUrl(imglink)}/>
                    </div>
                    <div className="card-body">
                        <div className="text--left">
                            <h3>{cta}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

// Update this dataset with links to the last 20 roundups
const ContentItemsATE = [
{
    title: 'Intelligent Apps with Azure Kubernetes Service',
    imglink: '/img/60-days-of-ia/ate-2024-02-29.jpg',
    link: "https://aka.ms/intelligent-apps/ate-aks?ocid=buildia24_AE_website",
    description: "Join the Azure Kubernetes Service Product Group to learn about developing cloud-native apps for high scale and resilience with Azure Kubernetes Service clusters. Discuss with the experts on how to combine the power of AI with Kubernetes app development to create highly differentiated digital experiences. Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure Kubernetes Service (AKS).",
    cta: "Register to attend"
    },
  {
    title: 'Intelligent Apps with Azure Cosmos DB',
    imglink: '/img/60-days-of-ia/ate-2024-03-07.jpg',
    link: "https://aka.ms/intelligent-apps/ate-cosmos?ocid=buildia24_AE_website",
    description: "Join the Azure Cosmos DB team for an engaging session on the versatile vector database capabilities of Azure Cosmos DB. Discover the seamless integration of your operational and transactional data with native vector indexing and search functionalities, specifically tailored for AI applications. Learn how to build RAG pattern solutions and manage chat history by seamlessly connecting with Azure OpenAI. Explore the power of Azure Cosmos DB's Copilot in simplifying complex query writing, enhancing accuracy, and improving performance. Additionally, we'll showcase our seamless integrations with Semantic Kernel, Langchain, and LlamaIndex.",
    cta: "Register to attend"
  },
  {
    title: 'Intelligent Apps with Azure AI',
    imglink: '/img/60-days-of-ia/ate-2024-03-21.jpg',
    link: "https://aka.ms/intelligent-apps/ate-ai?ocid=buildia24_AE_website",
    description: "Want to build an enterprise AI application with your data, and run it in production? Join us as we build Contoso Chat, an AI-based support agent that implements Retrieval Augmented Generation (RAG) to ground the copilot responses in your product data. Streamline your development workflow with PromptFlow, and manage your Azure AI platform interactions with the Azure AI Studio, SDK and CLI. Learn about Responsible AI practices, and learn how to evaluate your application, and calibrate it for content safety, using built-in capabilities of the Azure AI platform.",
    cta: "Register to attend"
  },
  {
    title: 'Intelligent Apps with Azure Functions',
    imglink: '/img/60-days-of-ia/ate-2024-04-04.jpg',
    link: "https://aka.ms/intelligent-apps/ate-functions?ocid=buildia24_AE_website",
    description: "Join the Azure Functions Product Group to learn about FaaS or Functions-as-a-Service in Azure serverless computing. It is time to focus on the pieces of code that matter most to you while Azure Functions handles the rest. Discuss with the experts on how to combine the power of AI, cloud-scale data, and serverless app development to create highly differentiated digital experiences. Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure Functions.",
    cta: "Register to attend"
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