import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './../index.module.css';

const CampaignFeatures = [
  {
    title: "#30DaysOfIA",
    Svg: require("@site/static/img/svg/campaign-30days.svg").default,
    fillColor: "#f25022",
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
    Svg: require("@site/static/img/svg/campaign_learnlive.svg").default,
    fillColor: "#7fba00",
    link: "/Cloud-Native/Fall-For-IA",
    description: (
      <>
        Deconstruct an enterprise-grade open-source e2e reference sample for a serverless application on Azure.
      </>
    ),
  },
  {
    title: "Ask The Expert",
    Svg: require("@site/static/img/svg/campaign_ama.svg").default,
    fillColor: "#b66dff",
    link: "/Cloud-Native/Fall-For-IA",
    description: (
      <>
        Join us for online conversations with the product teams - submit
        questions ahead of time or ask them live!
      </>
    ),
  },
  {
    title: "Hack Together",
    Svg: require("@site/static/img/svg/team.svg").default,
    fillColor: "#00a4ef",
    link: "/Cloud-Native/Fall-For-IA",
    description: (
      <>
        Explore this 6-part from Microsoft Reactor on JS & AI on Azure and make an open-source contribution!
      </>
    ),
  },
  {
    title: "Cloud Skills",
    Svg: require("@site/static/img/svg/campaign_skills.svg").default,
    fillColor: "#ffb900",
    link: "/Cloud-Native/Fall-For-IA",
    description: (
      <>
        Skill up on key cloud technologies with these free, self-guided learning
        courses - and make the leaderboard!
      </>
    ),
  },
  {
    title: "Community Gallery",
    Svg: require("@site/static/img/svg/campaign_buzz.svg").default,
    link: "/Cloud-Native/Fall-For-IA",
    fillColor: "#fe6db6",
    description: (
      <>
        🆕 Explore the Community Showcase for videos, blog posts and open-source projects for the community!
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
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Fall For Intelligent Apps!</h1>
        <p>
          Join us for #FallForIA - a month-long learning journey into cloud-scale data, cloud-native technology, and AI. Build intelligent apps on Azure and create differentiated experiences for your users!
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/30DaysOfIA">
            Explore #30DaysOfIA 👩🏽‍💻
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
      title={`Welcome to #FallForIA`}
      description="Join us for a month-long celebration of intelligent apps. From AI to cloud-scale data and cloud-native technology, build differentiated digital experiences on Azure!"> 
      <CampaignHeader/>
      <main>
        <FeaturesSection/>
      </main>
    </Layout>
    
  );
}
