import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './../index.module.css';

const CampaignFeatures = [
  {
    title: "Meetups ",
    linkTitle: "Meetups",
    svgpath: "../img/svg/60-days-of-IA-azure-icon-community-gallery.svg",
    link: "/Cloud-Native/Build-IA/meetups",
    description: (
      <>
        Join us for an interactive workshop to explore and implement architectural best practices to build AI-powered applications.
      </>
    ),
  },
  {
    title: "#30Days Of IA",
    linkTitle: "#30DaysOfIA",
    svgpath: "../img/svg/60-days-of-IA-azure-icon-blog.svg",
    link: "/Cloud-Native/Build-IA/30-days-of-ia-2024",
    description: (
      <>
        Join us on a #30Day journey that starts by demystifying Intelligent Apps and ends with you building on Azure OpenAI.
      </>
    ),
  },
  {
    title: "AI Skills Challenge",
    linkTitle: "AI Skills Challenge",
    svgpath: "../img/svg/60-days-of-IA-azure-icon-cloud-skills.svg",
    link: "/Cloud-Native/Build-IA/CloudSkills",
    description: (
      <>
        Join us on a learning journey to skill up on your core skills for developing intelligent apps and earn a badge in your Microsoft Learn profile.
      </>
    ),
  },
  {
    title: "Free Services for AI apps ",
    linkTitle: "Free Services for AI apps ",
    svgpath: "../img/svg/60-days-of-IA-azure-icon-free-services.svg",
    link: "/Cloud-Native/Build-IA/Free-Services",
    description: (
      <>
        Get started with free amounts of Azure app, data, and AI services*
      </>
    ),
  },
  {
    title: "Learn Live",
    linkTitle: "Learn Live",
    svgpath: "../img/svg/60-days-of-IA-azure-icon-learn-live.svg",
    link: "/Cloud-Native/Build-IA/LearnLive",
    description: (
      <>
        Deconstruct an enterprise-grade end to end reference sample for AI infused serverless or Kubernetes Application.
      </>
    ),
  },
  {
    title: "Demo Bytes",
    linkTitle: "Demo Bytes",
    svgpath: "../img/svg/60-days-of-IA-azure-icon-demobytes.svg",
    link: "/Cloud-Native/Build-IA/DemoBytes",
    description: (
      <>
        Join us for Snackable AI Demos with the SMEs on building intelligent app architectures - ask your questions live.
      </>
    ),
  }
];

function Feature({ svgpath, title, linkTitle, description, link, className }) {
  return (
    <div className={clsx(className, 'card-col')}>
      <Link className="card-link" to={link}  data-bi-area="BodyGrid" data-bi-name={title}>
        <div className="card">
          <div className="card-body">
            <div className="text--center">
              <img width="150px" height="150px" src={svgpath} alt="" role="presentation" />
            </div>
            <div fill="#00ff00" className="text--center padding-horiz--md">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function CampaignHeader() {
  return (
    <header className={clsx("hero hero--primary heroAzure")} style={{ backgroundImage: 'url(/Cloud-Native/img/cloud-native-hero-bg.webp)' }}>
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col col--6">
            <h1 className="hero__title">Build AI Apps and Agents!</h1>
            <p style={{ fontWeight: '600', fontSize: '1.25rem' }}>March 17-21, 2025</p>
            <p>
            Join us on a learning journey to build AI apps and agents using architecture recipes for AI-powered applications. Harness the synergy of apps, data, and AI to build and deploy scalable solutions, seamlessly integrating AI models, data pipelines, and cloud services for robust and efficient outcomes.
            </p>
            <div className='hero-buttons'>
              <Link className="button button--primary button--lg" to="/Cloud-Native/Build-IA/meetups" data-bi-area="Hero" data-bi-name="meetups">
              Register now
              </Link>
              {/* <Link className="button button--secondary button--lg" to="https://www.youtube.com/playlist?list=PLmsFUfdnGr3xYBEmLI7AqtWtBc31D20er" data-bi-area="Hero" data-bi-name="#DemoBytes" target="_blank">
              Learn more
              </Link> */}
            </div>
          </div>
          <div className="col col--1 hide-on-mobile"></div>
          <div className="col col--5">
            <img
              className="hide-on-mobile"
              src="../img/30-days-of-ia/30-days-of-ia-2024-hero-image.webp"
              alt=""
              role="presentation"
              width="100%"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CampaignFeatures.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
              className={'col col--4 card-col'}
            />
          ))}
        </div>
        <div className="row">
            <div className="col">
              <p style={{fontSize:"0.875rem", marginTop:"1rem"}}>*Some services are always free for Azure customers, and some are free for 12 months for new customers only. To see the free amount for each service, visit the <a href="https://azure.microsoft.com/en-us/pricing" target='_blank'>pricing</a> page for that specific service. 12 months free services is available only to new customers who have not previously had an Azure account or received 12 months of free services. It is not currently available to customers who sign up directly for pay as you go in China and India. Customers who try Azure free must move to pay as you go within 30 days to continue receiving 12 months free services. Read the full offer terms <a href="https://go.microsoft.com/fwlink/?linkid=2234065" target='_blank'>here</a>.</p>
            </div>
          </div>
      </div>
    </section>
  );
}

export default function BuildIA() {
  return (
    <Layout
      title={`Home`}
      description="Join us for a month-long celebration of intelligent apps. From AI to cloud-scale data and cloud-native technology, build differentiated digital experiences on Azure!"> 
      <CampaignHeader />
      <main className={styles.pageBg}>
        <FeaturesSection />
      </main>
    </Layout>
  );
}