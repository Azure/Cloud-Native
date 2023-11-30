import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import UHFMain from '../components/UHFMain';

import styles from './index.module.css';

// Cloud-Native Home Page Header
function HomepageHeader() {
  async function fetchData() {
    try {
      let response = await fetch('https://uhf.microsoft.com/en-us/shell/xml/MSNativeMaturity/?headerId=MSNativeMaturityHeader&footerId=MSNativeMaturityFooter&CookieComplianceEnabled=true%22');
      let content = await response.text();
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(content, "text/xml");
      let cssIncludes = xmlDoc.getElementsByTagName('cssIncludes')[0].textContent;

      let tempDiv = document.createElement('div');
      tempDiv.innerHTML = cssIncludes;

      Array.from(tempDiv.childNodes).forEach(function(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            document.getElementsByTagName('head')[0].appendChild(node);
        }
      });

      let javascriptIncludes = xmlDoc.getElementsByTagName('javascriptIncludes')[0].textContent;

      tempDiv = document.createElement('div');
      tempDiv.innerHTML = javascriptIncludes;

      Array.from(tempDiv.childNodes).forEach(function(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            document.getElementsByTagName('head')[0].appendChild(node);
        }
      });

      // setFooterHtml(xmlDoc.getElementsByTagName('footerHtml')[0].textContent);
      // setHeaderHtml(xmlDoc.getElementsByTagName('headerHtml')[0].textContent);    
      window.footerHtml = xmlDoc.getElementsByTagName('footerHtml')[0].textContent;
      window.headerHtml = xmlDoc.getElementsByTagName('headerHtml')[0].textContent;
      console.log("window:");
      console.log(window.headerHtml);
      
    } catch (error) {
      console.error('Error fetching XML:', error);
    }
  }
  fetchData();

  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p>{siteConfig.customFields.description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/Build-IA/"
          >
            Build Intelligent Apps
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
        {/* <UHFMain /> */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
