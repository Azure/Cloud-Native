import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './../index.module.css';

const CampaignFeatures = [
  {
    title: '#30DaysOfServerless',
    Svg: require('@site/static/img/svg/campaign-30days.svg').default,
    fillColor: "#f25022",
    link: "/Cloud-Native/blog",
    description: (
      <>
      Join us on a #30Day journey covering Azure Functions, Container Apps, Dapr, Event Grid, Logic Apps & more.
      </>
    ),
  },
  {
    title: 'Zero To Hero',
    Svg: require('@site/static/img/svg/campaign_hero.svg').default,
    fillColor: "#7fba00",
    link: "/Cloud-Native/serverless-september/ZeroToHero",
    description: (
      <>
      Get the latest updates on Serverless On Azure products and features - directly from product teams!
      </>
    ),
  },
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
    title: 'Cloud Skills',
    Svg: require('@site/static/img/svg/campaign_skills.svg').default,
    fillColor: "#ffb900",
    link: "/Cloud-Native/serverless-september/CloudSkills",
    description: (
      <>
      Skill up on key cloud technologies with these free, self-guided learning courses - and make the leaderboard!
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
    link: "/Cloud-Native/serverless-september/CommunityBuzz",
    fillColor: "#fe6db6",
    description: (
      <>
      Build interesting demos or wrote helpful articles? Contribute your feedback and content for a chance to be featured!
      </>
    ),
  },
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

        <h1 className="hero__title">
          It's Serverless September!
        </h1>
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
