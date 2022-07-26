import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '#30DaysOfServerless',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Learn about core serverless technologies and best practices for building end-to-end serverless solutions - with 30 days of daily content!
      </>
    ),
  },
  {
    title: 'Zero To Hero',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Get deep dives into Azure Functions and Azure Container Apps in this weekly series authored by Product Group core teams.
      </>
    ),
  },
  {
    title: 'Serverless Hacks',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Get hands-on experience building Serverless solutions with this online workshop series from Microsoft Reactor. Solve Challenges. Win Swag!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
