import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { AnnouncementBarProvider } from '../../contexts/AnnouncementBarContext';

function CampaignHeader() {
  // Inline styles for responsive video
  const videoResponsiveStyle = {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: 0,
    overflow: 'hidden',
    maxWidth: '100%',
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return (
    <header
      className={clsx('hero hero--primary heroAzureHome')}
      style={{ backgroundImage: 'url(/Cloud-Native/img/hero-bg.png)', padding: '8rem 0rem' }}
    >
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col col--6">
            <h1 className="hero__title">Join Microsoft Azure at KubeCon India 2024</h1>
            <p style={{ fontSize: '1.125rem', fontWeight:'600' }}>11-12 December 2024 | Delhi, India </p>
            <p>
            Join us at the inaugural KubeCon India 2024 in Delhi, from 11-12 December, where Microsoft Azure will be a Gold Sponsor. Discover how Azure is leading the way in Kubernetes and intelligent applications.
            </p>
            {/* <p className='button button--secondary button--lg' style={{ cursor: 'default' }}>Find us at Booth #TBD</p> */}
          </div>
          {/* <div className="col col--6">
            <div style={videoResponsiveStyle}>
              <iframe
                style={iframeStyle}
                src="https://www.youtube.com/embed/-kBTokGFIa0?si=VK7OB34lEaJzJfvG"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
}

// Section Content
function BannerLearn() {
    return (
      <section className={styles['banner-background']}>
        <div className="container">
          <div className="row padding-top--lg">
            <div className="col col--auto text--center">
              <h2 className="margin-bottom--sm">Lorem ipsum dolor sit</h2>
            </div>
          </div>
          <div className="row">
            <div className="col col--6 col--offset-3">
              <p className='margin-bottom--md text--center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="row padding-bottom--lg">
            <div className='col col--6 text--center col--offset-3'>
              <a className="button button--secondary button--lg button-mobile-padding" href="#" target="_blank">
                lorem ipsum
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function BannerKubecrawl() {
    return (
      <section className={styles['banner-background']}>
        <div className="container">
          <div className="row padding-top--lg">
            <div className="col col--auto text--center">
              <h2 className="margin-bottom--sm">Lorem ipsum dolor sit</h2>
            </div>
          </div>
          <div className="row">
            <div className="col col--6 col--offset-3">
              <p className='margin-bottom--lg text--center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          {/* <div className="row padding-bottom--lg">
            <div className='col col--6 text--center col--offset-3'>
              <a className="button button--secondary button--lg button-mobile-padding" href="#" target="_blank">
                lorem ipsum
              </a>
            </div>
          </div> */}
        </div>
      </section>
    );
  }

// Section Content
function Sessions() {
    return (
      <section>
        <div className="container margin-top--lg">
            {/* <div className="row">
                <div className="col text--center">
                    <h2 className={styles['gradient-header']}>Learn from Microsoft Experts</h2>
                </div>
            </div> */}
            {/* <div className="row">
                <div className="col">
                    <h3 style={{textTransform:'uppercase'}}>Keynote</h3>
                    <h4 className="margin-bottom--sm">A Developer's Guide to Securing Your Software Supply Chain</h4>
                    <p className="margin-bottom--sm">Toddy Mladenov, Principal Product Manager, Microsoft</p>
                    <p>November 14, 2024 at 9:40 AM</p>
                </div>
            </div> */}
          <div className="row margin-top--lg">
            {/* <div className="col col--6">
              <div style={{marginBottom: "1rem"}} className='glass-border-kubecon'>
                <img src="/Cloud-Native/img/Azure-3D-Illustrations-Migration-Dark.jpg" alt="" role="presentation" style={{borderRadius: "1.5rem"}}/>
              </div>
            </div> */}
            <div className="col col--8 col--offset-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2 className={styles['gradient-header']}>Azure Days with Kubernetes</h2>
              <p style={{textAlign: 'center'}}>Azure Days with Kubernetes are in-person events tailored for developers, IT professionals, and decision-makers eager to harness the power of AKS for their cloud-native and intelligent applications. Whether you're starting with Kubernetes or seeking to refine your AKS deployments, we have sessions to provide valuable insights and actionable knowledge for your cloud journey.</p>
              <p>Three distinct events are planned over two days:</p>
              {/* <a className="button button--primary button--lg" href="#" target='_blank'>
              Register now
                </a> */}
            </div>
          </div>
          <div className="row">
          <div className={clsx('col col--4 card-col')}>

            <div className="card">
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div className="text--left">
                  <h3>Hands-On Labs</h3>
                  <p>Roll up your sleeves and dive into Azure Kubernetes Service with our hands-on labs. Participants can choose from a variety of labs, including introductory, advanced, as well as developer and platform focused.</p>
                </div>
                <div>
                  <a
                  href="https://azureday.eventbuilder.com/event/87493?source=AKSDayIndia"
                  className={styles['card-link']}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                      Register
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className={clsx('col col--4 card-col')}>

            <div className="card">
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div className="text--left">
                  <h3>Developer & Digital Native Track</h3>
                  <p>The developer track will provide a strategic overview of AKS for developers, ISVs, and Digital Natives including topics such as:</p>
                    <ul>
                      <li>Getting started quickly & driving productivity with AKS Automatic</li>
                      <li>Building intelligent applications with AKS</li>
                      <li>Using AI to speed up time to production</li>
                      <li>Implementing a secure supply chain & securely accessing resources from your applications</li>
                      <li>Developing stateful applications in Kubernetes</li>
                    </ul>
                </div>
                <div>
                  <a
                  href="https://azureday.eventbuilder.com/event/87494?source=AKSDayIndia"
                  className={styles['card-link']}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                      Register
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className={clsx('col col--4 card-col')}>

            <div className="card">
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div className="text--left">
                  <h3>Platform & Operators Track</h3>
                  <p>The operator track will provide a strategic overview of AKS for platform engineers and operators, including topics such as:</p>
                    <ul>
                      <li>Upgrades, business continuity & resiliency</li>
                      <li>Securing your clusters</li>
                      <li>Network setup and best practices</li>
                      <li>Operating a mission-critical environment</li>
                      <li>Managing distributed fleets of clusters</li>
                      <li>Making AKS your most cost-efficient platform</li>
                    </ul>
                </div>
                <div>
                  <a
                  href="https://azureday.eventbuilder.com/event/87495?source=AKSDayIndia"
                  className={styles['card-link']}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                      Register
                  </a>
                </div>
              </div>
            </div>

          </div>
  
          </div>
          <div className='text--center margin-top--lg'>
            <h2 className={styles['gradient-header']}>Learn from Microsoft Experts</h2>
                <p>
                Microsoft engineers will be delivering sessions and technical demos at KubeCon and at our booth on the show floor.
                </p>
          </div>
          {/* <h3 style={{textTransform:'uppercase'}} className='margin-top--md'>Featured Breakout Sessions</h3>
          <p>Some featured sessions include:</p> */}
          <div className="row">
            {ContentItemsA.map((props, idx) => (
              <ContentItem key={idx} {...props} />
            ))}
          </div>
          {/* <div className='row'>
            <div className='col'>
              <a className="button button--primary button--lg" href="https://techcommunity.microsoft.com/t5/apps-on-azure-blog/azure-at-kubecon-north-america-2024-salt-lake-city-utah-november/ba-p/4278879#MSFTsessions" target='_blank'>
                View all sessions
                </a>
            </div>
          </div> */}
        </div>
      </section>
    );
  }
  
  // Content Item
  function ContentItem({ session, link, presenter, description }) {
    return (
      <div className={clsx('col col--6 card-col')}>

          <div className="card">
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div className="text--left">
                <h3>{session}</h3>
                <p>{presenter}</p>
                <p>{description}</p>
                </div>
                <div>
                <a
                href={link}
                className={styles['card-link']}
                target="_blank"
                rel="noopener noreferrer"
                >
                    Add to Schedule
                </a>
              </div>
            </div>
          </div>
        
      </div>
    );
  }
  
  const ContentItemsA = [
    {
      session: 'Effortless Clustering: Rethinking ClusterAPI with Systemd-Systext',
      description: 'Through the years, ClusterAPI has evolved into an indispensable tool, streamlining the lifecycle management of Kubernetes clusters across multiple infrastructure providers. The current approach adds a layer of complexity at the image-building stage, presenting users with a multitude of options. But what if we challenge this conventional approach? This presentation introduces a paradigm shift in ClusterAPI image building, leveraging systemd-sysext and image composability. Join me in this talk as we explore how this innovative approach could help cope with the never-ending matrix of Kubernetes versions and Distro images, significantly enhancing usability for users managing their workloads.',
      presenter: 'Sayan Chowdury',
      link: 'https://sched.co/1mVRz',
    },
    {
      session: 'Flatcar Container Linux Deep Dive: Deploying, Managing and Automating Workloads Securely',
      description: 'Flatcar is an operating system purpose-built for securely running container workloads. It ensures security by providing essential tools, reducing the OS size with minimal packages, and making the /usr directory immutable. This tutorial is designed for ops and DevOps professionals, offering step-by-step guidance on getting started with Flatcar. You&#39;ll explore how to deploy it using Terraform, configure it with Ignition, and automate OS updates via Nebraska, enabling you to "set it and forget it.',
      presenter: 'Sayan Chowdury',
      link: 'https://sched.co/1i7oH',
    }
  
  ];

  function Demos() {
    return (
      <section>
        <div className="container margin-top--lg margin-bottom--lg">
          <div className="row">
            <div className="col margin-top--md text--center">
              <h2 className={styles['gradient-header']}>Booth Theatre & Demos</h2>
              {/* <p>
                Visit our booth #C4 to engage with our experts and attend a variety
                of theatre sessions and technical demos.
              </p> */}
            </div>
          </div>
  
          {/* Row container for cards */}
          <div className="row">
            <div className="col col--6 card-col">
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div className="card-body" style={{ flexGrow: 1 }}>
                  <div className="text--left">
                    <h3>Wednesday 11 December</h3>
                    <p>Schedule coming soon! </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col col--6 card-col">
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div className="card-body" style={{ flexGrow: 1 }}>
                <div className="text--left">
                    <h3>Thursday 12 December</h3>
                    <p>Schedule coming soon!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  
  function Community() {
    return (
      <section>
        <div className="container margin-top--lg margin-bottom--lg">
          <div className="row">
            <div className="col margin-top--md text--center">
              <h2 className={styles['gradient-header']}>Find your Community</h2>
            </div>
          </div>
  
          {/* Row container for cards */}
          <div className="row">
            <div className="col col--4 card-col">
              <div
                className="card"
                
              >
                <div className="card-body" style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                  <div className="text--center">
                    <img width="150px" height="150px" src="/Cloud-Native/img/svg/60-days-of-IA-azure-icon-learn-live.svg" alt="" role="presentation" />
                  </div>
                  <div className="text--center">
                    <h3>The AKS Community</h3>
                    <p>Check out the AKS Community channel for technical content and updates.</p>
                  </div>
                  <div className="text--center">
                      <a className={styles['card-link']} href="https://www.youtube.com/@theakscommunity" target='_blank'>Watch Now</a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col col--4 card-col">
              <div
                className="card"
                
              >
                <div className="card-body" style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                  <div className="text--center">
                    <img width="150px" height="150px" src="/Cloud-Native/img/svg/60-days-of-IA-azure-icon-blog.svg" alt="" role="presentation" />
                  </div>
                  <div className="text--center">
                    <h3>Become a Microsoft MVP</h3>
                    <p>The Microsoft MVP Program connects technical community leaders with Microsoft to promote engagement, advocacy, and knowledge sharing.</p>
                  </div>
                  <div className="text--center">
                  <a className={styles['card-link']} href="https://mvp.microsoft.com/en-us/mvp/" target='_blank'>Get Started</a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col col--4 card-col">
              <div
                className="card"
              >
                <div className="card-body" style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}>
                  <div className="text--center">
                    <img width="150px" height="150px" src="/Cloud-Native/img/svg/60-days-of-IA-azure-icon-community-gallery.svg" alt="" role="presentation" />
                  </div>
                  <div className="text--center">
                    <h3>Microsoft Developer Community</h3>
                    <p>Connect with fellow developers, attend a local user group, find resources to get you started, and discover what's happening in the community.</p>
                    </div>
                    <div className="text--center">
                    <a className={styles['card-link']} href="https://developer.microsoft.com/en-us/community" target='_blank'>Connect Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  

export default function KubeconIndia() {
  const { siteConfig } = useDocusaurusContext();
  const pageProps = {
    title: 'Microsoft Azure at KubeCon India',
    description: 'Join us at KubeCon India 2024 in Delhi, India, from December 11-12.',
  };

  return (
    <AnnouncementBarProvider hide={true}>
    <Layout title={pageProps.title} description={pageProps.description}>
      <Head>
      <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main>
      <CampaignHeader />
      {/* <BannerLearn /> */}
      <Sessions />
      <Demos />
      {/* <BannerKubecrawl /> */}
      <Community />
      </main>
    </Layout>
    </AnnouncementBarProvider>
  );
}
