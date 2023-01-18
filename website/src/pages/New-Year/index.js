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
    Svg: require('@site/static/img/svg/campaign-30days.svg').default,
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
    Svg: require('@site/static/img/svg/campaign_ama.svg').default,
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
    Svg: require('@site/static/img/svg/campaign_skills.svg').default,
    fillColor: "#ffb900",
    link: "https://aka.ms/cnny/challenge",
    description: (
      <>
      Skill up on key cloud technologies with these free, self-guided learning courses - and make the leaderboard!
      </>
    ),
  },
  /*
  {
    title: 'Serverless Hacks',
    Svg: require('@site/static/img/svg/team.svg').default,
    fillColor: "#00a4ef",
    link: "/Cloud-Native/serverless-september/ServerlessHacks",
    description: (
      <>
      Join us for weekly events at Microsoft Reactor, as we work through hands-on challenges in Serverless!
      </>
    ),
  },
  {
    title: 'Ask The Expert',
    Svg: require('@site/static/img/svg/campaign_ama.svg').default,
    fillColor: "#b66dff",
    link: "/Cloud-Native/serverless-september/AskTheExpert",
    description: (
      <>
      Join us for online conversations with the product teams - submit questions ahead of time or ask them live!
      </>
    ),
  },
  {
    title: 'Community Buzz',
    Svg: require('@site/static/img/svg/campaign_buzz.svg').default,
    link: "https://github.com/Azure/Cloud-Native/issues/new/choose",
    fillColor: "#fe6db6",
    description: (
      <>
      Build interesting demos or wrote helpful articles? Contribute your feedback and content for a chance to be featured!
      </>
    ),
  },
  */
];

function Feature({Svg, title, description, link, fillColor}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} target="_blank">
        <div className="text--center">
          <Svg height="150px" width="150px" fill={fillColor} role="img" />
        </div>
      </a>
      <div fill="#00ff00" className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function CampaignHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Link to="/blog">
          <Image img={bannerImg} className={styles.featureImg} />
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
          Join us for a month-long celebration of Cloud-Native Computing - from core concepts and developer tools, to usage scenarios and best practices. Bookmark this page, then  <b>check back on January 23, 2023</b> as we kickstart multiple community-driven and self-guided learning initiatives for jumpstarting your Cloud-Native developer journey. 
        </p>
        <FeaturesSection/>
      </main>
    </Layout>
    
  );
}
