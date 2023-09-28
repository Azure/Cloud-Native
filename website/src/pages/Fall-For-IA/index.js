import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './../index.module.css';

const CampaignFeatures = [
  {
    title: "#30DaysOfIA",
    linkTitle: "#30DaysOfIA",
    svgpath: "../img/svg/azure-icon-30-days.svg",
    link: "/Cloud-Native/30DaysOfIA",
    description: (
      <>
        Join us on a #30Day journey that starts by demystifying Intelligent Apps
        and ends with you Building a Copilot!
      </>
    ),
  },
  {
    title: "Learn Live",
    linkTitle: "Learn Live",
    svgpath: "../img/svg/azure-icon-learn-live.svg",
    link: "/Cloud-Native/Fall-For-IA/LearnLive",
    description: (
      <>
        Deconstruct an enterprise-grade end to end reference sample for a serverless or Kubernetes application.
      </>
    ),
  },
  {
    title: "Ask The Expert",
    linkTitle: "Ask The Expert",
    svgpath: "../img/svg/azure-icon-ask-the-experts.svg",
    link: "/Cloud-Native/Fall-For-IA/AskTheExpert",
    description: (
      <>
        Join us for online conversations with the product teams - submit
        questions ahead of time or ask them live!
      </>
    ),
  },
  {
    title: "Hack Together",
    linkTitle: "Hack Together",
    svgpath: "../img/svg/azure-icon-hack-together.svg",
    link: "/Cloud-Native/Fall-For-IA/HackTogether",
    description: (
      <>
        Explore this 6-part from Microsoft Reactor on JS & AI on Azure and make an open-source contribution!
      </>
    ),
  },
  {
    title: "Cloud Skills",
    linkTitle: "Cloud Skills",
    svgpath: "../img/svg/azure-icon-cloud-skills.svg",
    link: "/Cloud-Native/Fall-For-IA/CloudSkills",
    description: (
      <>
        Skill up on key cloud technologies with these free, self-guided learning
        courses - and make the leaderboard!
      </>
    ),
  },
  {
    title: "🆕 Community Gallery",
    linkTitle: "Community Gallery",
    svgpath: "../img/svg/azure-icon-comm-gallery.svg",
    link: "/Cloud-Native/Fall-For-IA/CommunityGallery",
    description: (
      <>
        Explore the Community Showcase for videos, blog posts and open-source projects for the community!
      </>
    ),
  },
];

function Feature({svgpath, title, linkTitle, description, link}) {
  return (
    <div className={clsx('col col--4 card-col')}>
      <div className="card">
        <div className="card-body">
            <div className="text--center">
            <img width="150px" height="150px" src={svgpath} alt="" role="presentation" />
            </div>
          <div fill="#00ff00" className="text--center padding-horiz--md">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--block button--secondary button--lg" to={link}>
              {linkTitle}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CampaignHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBannerImg)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1 className="hero__title">Build Intelligent Apps!</h1>
            <p>
            Join us on a learning journey to explore building intelligent apps. Combine the power of AI, cloud-scale data, and cloud-native app development to create highly differentiated digital experiences. Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure for your users.
            </p>
            <div className={styles.buttonsFFIA}>
              <Link className="button button--secondary button--lg" to="/30DaysOfIA">
              #BuildIntelligentApps
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <img
              className="hide-on-mobile"
              src="../img/fallforia/hero-bg.png"
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default function() {
  return (
    <Layout
      title={`Build Intelligent Apps`}
      description="Join us for a month-long celebration of intelligent apps. From AI to cloud-scale data and cloud-native technology, build differentiated digital experiences on Azure!"> 
      <CampaignHeader/>
      <main>
        <FeaturesSection/>
      </main>
    </Layout>
    
  );
}
