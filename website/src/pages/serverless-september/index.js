import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './../index.module.css';

const CampaignFeatures = [
  {
    title: '#30DaysOfServerless',
    Svg: require('@site/static/img/campaign_30Days.svg').default,
    link: "30DaysOfServerless",
    description: (
      <>
      Join us on a #30Day journey covering Azure Functions, Container Apps, Dapr, Event Grid, Logic Apps & more.
      </>
    ),
  },
  {
    title: 'Zero To Hero',
    Svg: require('@site/static/img/campaign_hero.svg').default,
    link: "ZeroToHero",
    description: (
      <>
      Get the latest updates on Serverless On Azure products and features - directly from product teams!
      </>
    ),
  },
  {
    title: 'Serverless Hacks',
    Svg: require('@site/static/img/team.svg').default,
    link: "ServerlessHacks",
    description: (
      <>
      Join us for weekly events at Microsoft Reactor, as we work through hands-on challenges in Serverless!
      </>
    ),
  },
  {
    title: 'Cloud Skills',
    Svg: require('@site/static/img/campaign_skills.svg').default,
    link: "ServerlessHacks",
    description: (
      <>
      Skill up on key cloud technologies with these free, self-guided learning courses - and make the leaderboard!
      </>
    ),
  },
  {
    title: 'Community Buzz',
    Svg: require('@site/static/img/campaign_buzz.svg').default,
    link: "CommunityBuzz",
    description: (
      <>
      Build interesting demos or wrote helpful articles? Contribute your feedback and content for a chance to be featured!
      </>
    ),
  },
  {
    title: 'Ask Me Anything',
    Svg: require('@site/static/img/campaign_ama.svg').default,
    link: "serverless-september/CommunityBuzz",
    description: (
      <>
      Join us for online conversations with the product teams - submit questions ahead of time or ask them live!
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} target="_blank">
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
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
        <h2>
          Welcome to Serverless September
        </h2>
        <p>
          Join us for a month-long celebration of serverless computing - from core concepts and developer tools, to usage scenarios and best practices. Bookmark this page, then join us <b>September 1, 2022</b> as we kickstart multiple community-driven and self-guided learning initiatives for jumpstarting your Cloud Native journey.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Explore #30DaysOfServerless 🎉
          </Link>
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
      title={`Welcome to #ServerlessSeptember`}
      description="Join us for a month-long celebration of Cloud Native technologies go from core concept to code with #30DaysOfServerless />"> 
      <CampaignHeader/>
      <main>
        <FeaturesSection/>
      </main>
    </Layout>
    
  );
}
