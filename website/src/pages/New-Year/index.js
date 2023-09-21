import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './../index.module.css';

// Import banner
import Image from '@theme/IdealImage';
import bannerImg from './../../../static/img/cnny23/hero-banner.png';

const CampaignFeatures = [
  {
    title: '#30DaysOfCloudNative',
    linkTitle: '#30DaysOfCloudNative',
    svgpath: "../img/svg/azure-icon-30-days.svg",
    fillColor: "#f25022",
    link: "/Cloud-Native/cnny-2023",
    description: (
      <>
      Join us on a #30Day journey into Cloud-Native fundamentals.
      </>
    ),
  },
  {
    title: 'Ask The Experts',
    linkTitle: 'Ask The Experts',
    svgpath: "../img/svg/azure-icon-ask-the-experts.svg",
    fillColor: "#7fba00",
    link: "/Cloud-Native/New-Year/ate",
    description: (
      <>
      Join us for online conversations with the product teams - submit questions ahead of time or ask them live!
      </>
    ),
  },
  {
    title: 'Cloud Skills',
    linkTitle: 'Cloud Skills',
    svgpath: "../img/svg/azure-icon-cloud-skills.svg",
    fillColor: "#ffb900",
    link: "https://aka.ms/cnny/challenge",
    description: (
      <>
      Skill up on key cloud technologies with these free, self-guided learning courses - and make the leaderboard!
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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" >
        <Link to="/cnny-2023">
          <h1>
            <Image img={bannerImg} className={styles.featureImg} alt="Cloud Native New Year Blog"/>
          </h1>
        </Link>
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
      title={`Welcome to #CloudNativeNewYear`}
      description="Join us for a month-long celebration of Cloud-Native technologies go from core concept to code with #30DaysOfServerless />"> 
      <CampaignHeader/>
      <main>
        <br/>
        <p className="container">
          Join us for a month-long celebration of Cloud-Native Computing - from core concepts and developer tools, to usage scenarios and best practices. Bookmark this page, then <b><a href="/Cloud-Native/cnny-2023">head over to the blog</a> every week day</b> as we kickstart multiple community-driven and self-guided learning initiatives for jumpstarting your Cloud-Native developer journey. 
        </p>
        <FeaturesSection/>
      </main>
    </Layout>
    
  );
}
