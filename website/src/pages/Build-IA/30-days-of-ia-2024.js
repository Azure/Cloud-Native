import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

<Head>
  <link
    rel="preload"
    as="image"
    href="/Cloud-Native/img/cloud-native-hero-bg.webp"
    type="image/webp"
  />
</Head>


function CampaignHeader() {
  
  return (
    <header
      className={clsx("hero hero--primary heroAzureHome")}
      style={{ backgroundImage: 'url(/Cloud-Native/img/cloud-native-hero-bg.webp)', padding: '8rem 0rem', backgroundPosition: 'bottom left' }}
    >
      <div className="container">
        <div className="row padding-top--lg padding-bottom--lg" style={{ alignItems: 'center' }}>
          <div className="col col--6">
            <h1 className="hero__title">#30Days of IA Blogs</h1>
            <p>
            Join us for a sample-based blog series on how to build and deploy AI apps using Azure App, Data and AI Platform
            </p>
          </div>
          <div className="col col--6 hide-mobile">
          </div>
        </div>
      </div>
    </header>
  );
}

const aiPoweredContentGeneration = [
  {
    title: "1.1 Use Generative AI to build intelligent apps",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/use-generative-ai-to-build-intelligent-apps"
  },
  {
    title: "1.2a Setting up your development environment Part 1",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-your-development-environment-1"
  },
  {
    title: "1.2b Setting Up Your Development Environment Part 2",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-your-development-environment-2"
  },
  {
    title: "1.3a Build Content Generation App Part 1",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/build-content-generation-app-part-1"
  },
  {
    title: "1.3b Build Content Generation App Part 2",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/build-content-generation-app-part-2"
  },
  {
    title: "1.4a Deploy application with Azure App Service Part 1",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-azure-app-service-part-1"
  },
  {
    title: "1.4b Deploy application with Azure App Service Part 2",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-azure-app-service-part-2"
  },
  {
    title: "1.5a Deploy Application with AKS Part 1",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-AKS-part-1"
  },
  {
    title: "1.5b Deploy Application with AKS Part 2",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-application-with-AKS-part-2"
  },
  {
    title: "1.6a Setting Up CI/CD Pipelines for Azure App Service and AKS Using Azure DevOps Part 1",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-1"
  },
  {
    title: "1.6b Setting Up CI/CD Pipelines for Azure App Service and AKS Using Azure DevOps Part 2",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/setting-up-ci-cd-pipelines-for-azure-app-servicea-and-aks-using-azure-devops-2"
  },
  {
    title: "1.7 Post-production monitoring, scaling, and optimization",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/post-production-monitoring-scaling-and-optimization"
  },
  {
    title: "1.8 Demo our AI-based content generation app",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/demo-our-ai-based-content-generation-app"
  },
  {
    title: "1.9 How it works: Behind the scenes of our AI-based content generation app",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/how-it-works-behind-the-scenes-of-our-ai-based-content-generation-app"
  },
  {
    title: "1.10 Closing Summary",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/closing-summary"
  }
];

const buildYourOwnCopilot = [
  {
    title: "2.1 Kicking Off Azure AI Week!",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/kicking-off-azure-ai-week",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishDate: "2024-03-16",
    readTime: "5 min"
  },
  {
    title: "2.2 Provision With AZD!",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/provision-with-azd"
  },
  {
    title: "2.3 Ideate with Prompty!",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/ideate-with-prompty"
  },
  {
    title: "2.4 Evaluate with AI!",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/evaluate-with-ai"
  },
  {
    title: "2.5 Deploy with ACA",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-with-aca"
  }
];


const aiAssistedDevelopment = [
  {
    title: "3.1 Improving the developer experience with modern dev tools",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/improving-the-developer-experience-with-modern-dev-tools"
  },
  {
    title: "3.2 Using GitHub Copilot",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/using-github-copilot"
  },
  {
    title: "3.3 Simplifying web app deployment with Microsoft Copilot in Azure",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/simplifying-web-app-deployment-with-microsoft-copilot-in-azure"
  },
  {
    title: "3.4 Hosting considerations for scalable apps by using Azure App Service and Azure Kubernetes Service (AKS)",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/hosting-considerations-for-scalable-apps-by-using-azure-app-service-and-azure-kubernetes-service"
  },
  {
    title: "3.5 Using continuous integration/continuous deployment (CI/CD) processes, monitoring, and AI to help ensure that your app can deploy to production at scale",
    url: "https://azure.github.io/Cloud-Native/30-days-of-ia-2024/deploy-to-production-at-scale"
  }
];

function BlogCards({ cardHeader }) {
  console.log("Resolved Image URL:", useBaseUrl(cardHeader)); // Debugging

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row gap--md">

          {/* AI-Powered Content - Full Height */}
          <div className="col col--6 padding--sm">
            <div className="card h-100">
              {/* <div className="cardHeader">
                  <Image
                    style={{
                      height: 'auto',
                      width: '100%',
                    }}
                    alt=""
                    role="presentation"
                    img={useBaseUrl('/img/meetup-card-header-1.webp')}
                  />
              </div> */}
              <div className="card__body">
                <h2>AI-powered Content Generation</h2>
                <p>Discover how you can use Azure services to take advantage of generative AI capabilities to build an intelligent application.</p>
                <ul>
                  {aiPoweredContentGeneration.map((item, index) => (
                    item.url ? (
                      <li className="padding-bottom--sm" key={index}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'underline' }}
                        >
                          {item.title}
                        </a>
                      </li>
                    ) : (
                      <li key={index}>{item.title} (URL not available)</li>
                    )
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked "Copilot" & "AI-Assisted" */}
          <div className="col col--6 padding--sm">
            <div className="row h-100 gap--md">

              {/* Copilot Section */}
              <div className="col col--12 margin-bottom--md">
                <div className="card h-100">
                {/* <div className="cardHeader">
                  <Image
                    style={{
                      height: 'auto',
                      width: '100%',
                    }}
                    alt=""
                    role="presentation"
                    img={useBaseUrl('/img/meetup-card-header-2.webp')}
                  />
              </div> */}
                  <div className="card__body">
                    <h2>Build your own copilot</h2>
                    <p>Learn to build a custom copilot with full control over every step of the end-to-end workflow from prompt to production.</p>
                    <ul>
                      {buildYourOwnCopilot.map((item, index) => (
                        item.url ? (
                          <li className="padding-bottom--sm" key={index}>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: 'underline' }}
                            >
                              {item.title}
                            </a>
                          </li>
                        ) : (
                          <li key={index}>{item.title} (URL not available)</li>
                        )
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* AI-Assisted Section */}
              <div className="col col--12">
                <div className="card h-100">
                {/* <div className="cardHeader">
                  <Image
                    style={{
                      height: 'auto',
                      width: '100%',
                    }}
                    alt=""
                    role="presentation"
                    img={useBaseUrl('/img/meetup-card-header-3.webp')}
                  />
              </div> */}
                  <div className="card__body">
                    <h2>AI-assisted development</h2>
                    <p>Evolve the developer experience (DevEx) by learning how our dev tools can improve every stage of the developer workflow.</p>
                    <ul>
                      {aiAssistedDevelopment.map((item, index) => (
                        item.url ? (
                          <li className="padding-bottom--sm" key={index}>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: 'underline' }}
                            >
                              {item.title}
                            </a>
                          </li>
                        ) : (
                          <li key={index}>{item.title} (URL not available)</li>
                        )
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


export default function BlogLandingPage30Days() {
  const { siteConfig } = useDocusaurusContext();
  const pageProps = {
    title: "#30Days of IA 2024",
    description:
      "Join us for a sample-based blog series on how to build and deploy AI apps using Azure App, Data and AI Platform",
  };

  return (
    <Layout title={pageProps.title} description={pageProps.description}>
      <Head></Head>
      <CampaignHeader />
      <main className={styles.pageBg}>
      <BlogCards />
      </main>
    </Layout>
  );
}
