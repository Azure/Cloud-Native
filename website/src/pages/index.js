import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// Cloud-Native Home Page Header
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p>{siteConfig.customFields.description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/Fall-For-IA/"
          >
            Fall For Intelligent Apps 🍁
          </Link>
        </div>
      </div>
    </header>
  );
}

// Cloud-Native Home Page
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.customFields.description}`} >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
