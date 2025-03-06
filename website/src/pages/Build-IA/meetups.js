import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

<Head>
  <link
    rel="preload"
    as="image"
    href="/Cloud-Native/img/cloud-native-hero-bg.webp"
    type="image/webp"
  />
</Head>


function CampaignHeader() {
  
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
    borderRadius: '1.5rem'
  };
  
  return (
    <header
      className={clsx("hero hero--primary heroAzureHome")}
      style={{ backgroundImage: 'url(/Cloud-Native/img/cloud-native-hero-bg.webp)', padding: '8rem 0rem', backgroundPosition: 'bottom left' }}
    >
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col col--6">
            <h1 className="hero__title">Meetups</h1>
            <p style={{ fontSize: '1.125rem', fontWeight:'600' }}>March 17-21, 2025</p>
            <p>
              Join us for an engaging in-person, hands-on meetup where developers will delve into
              architectural best practices for AI-powered applications using your favorite tools.
              Collaborate with fellow tech enthusiasts as you learn to build and deploy scalable AI
              solutions, integrating AI models, data pipelines, and cloud services to create robust
              and efficient architectures.
            </p>
            <div className={`${styles.buttonsFFIA} hero-buttons margin-bottom--md`}>
              <a
                className="button button--primary button--lg"
                href="https://aka.ms/bia/reactor?ocid=biafy25h2_aipoweredapplications_webpage_azuremktg"
                target="_blank"
                rel="noopener noreferrer"
                data-bi-area="Hero"
                data-bi-name="#Meetups"
              >
                Register now
              </a>
            </div>
          </div>
          <div className="col col--6">
          <div style={videoResponsiveStyle}>
              <iframe
                style={iframeStyle}
                src="https://www.youtube.com/embed/CMTv1vHr1-o?si=fzlXNOAjnFrrsNCu&loop=1&playlist=CMTv1vHr1-o&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Event Content
function Events() {
  return (
    <section className={`${styles.features} padding-bottom--none`}>
      <div className="container">
        <h2 className="margin-top--md">Find your event</h2>
        <div className="row">
          {meetups.map((props, idx) => (
            <ContentItemA key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Event Content
function Resources() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="margin-top--md">Resources to continue your journey</h2>
        <div className="row" style={{ paddingBottom: '1rem' }}>
          {resources.map((props, idx) => (
            <ContentItemB key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Content Item
function ContentItemA({ city, cardHeader, link, date }) {
  return (
    <div className={clsx('col col--4 card-col', styles.contentItem)}>
      <div
        className="card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <div className="cardHeader">
        <Image
          style={{
            height: 'auto',
            width: '100%',
          }}
          alt=""
          role="presentation"
          img={useBaseUrl(cardHeader)}
        />
        </div>
        <div className="card-body" style={{ flexGrow: 1 }}>
          <div className="text--left">
            <h3 className='margin-bottom--sm'>{city}</h3>
            <p>{date}</p>
            <a
              style={{
                textDecoration: 'underline',
              }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              data-bi-area="BodyGrid"
              data-bi-name={city}
              // className="text--secondary"
            >
              Register to attend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Content Item
function ContentItemB({ resource, description, link, cta}) {
  return (
    <div className={clsx('col col--4 card-col', styles.contentItem)}>
      <div
        className="card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <div className="card-body" style={{ flexGrow: 1 }}>
          <div className="text--left">
            <h3 className='margin-bottom--sm'>{resource}</h3>
            <p>{description}</p>
            <a
            style={{
              textDecoration: 'underline',
            }}
              href={link}
              data-bi-area="BodyGrid"
              data-bi-name={resource}
              // className="text--secondary"
            >
              {cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const meetups = [
  {
    city: 'São Paulo',
    cardHeader: '/img/meetup-card-header-1.webp',
    link: 'https://aka.ms/bia/reactorsp?ocid=biafy25h2_aipoweredapplications_webpage_azuremktg',
    date: 'March 17, 2025',
  },
  {
    city: 'LATAM, online',
    cardHeader: '/img/meetup-card-header-2.webp',
    link: 'https://aka.ms/BIA/Espanol?ocid=biafy25h2_aipoweredapplications_webpage_azuremktg',
    date: 'March 18, 2025',
  },
  {
    city: 'Redmond',
    cardHeader: '/img/meetup-card-header-3.webp',
    link: 'https://aka.ms/BIA/Redmond?ocid=biafy25h2_aipoweredapplications_webpage_azuremktg ',
    date: 'March 19, 2025',
  },
  {
    city: 'Sydney',
    cardHeader: '/img/meetup-card-header-4.webp',
    link: 'https://aka.ms/BIA/Sydney?ocid=biafy25h2_aipoweredapplications_webpage_azuremktg',
    date: 'March 19, 2025',
  },
  {
    city: 'London',
    cardHeader: '/img/meetup-card-header-5.webp',
    link: 'https://aka.ms/BIA/London?ocid=biafy25h2_aipoweredapplications_webpage_azuremktg',
    date: 'March 20, 2025',
  },
  {
    city: 'Toronto',
    cardHeader: '/img/meetup-card-header-6.webp',
    link: 'https://aka.ms/BIA/Toronto?ocid=biafy25h2_aipoweredapplications_webpage_azuremktg',
    date: 'March 20, 2025',
  },
  {
    city: 'New York City',
    cardHeader: '/img/meetup-card-header-8.webp',
    link: 'https://aka.ms/BIA/NYC?ocid=biafy25h2_aipoweredapplications_webpage_azuremktg',
    date: 'March 20, 2025',
  },
  {
    city: 'Shanghai ',
    cardHeader: '/img/meetup-card-header-1.webp',
    link: 'https://aka.ms/BIA/Shanghai?ocid=biafy25h2_aipoweredapplications_webpage_azuremktg',
    date: 'March 20, 2025',
  },
  {
    city: 'Bengaluru',
    cardHeader: '/img/meetup-card-header-7.webp',
    link: 'https://aka.ms/BIA/Bengaluru?ocid=bihttps://aka.ms/BIA/Bengaluru​?ocid=biafy25h2_aipoweredapplications_webpage_azuremktg',
    date: 'March 21, 2025',
  },
];


const resources = [
  {
    resource: 'Learn Live',
    description: 'Deconstruct an enterprise-grade end to end reference sample for AI infused serverless or Kubernetes Application.',
    link: '/Cloud-Native/Build-IA/LearnLive',
    cta: 'Watch on demand'
  },
  {
    resource: 'Demo Bytes',
    description: 'Join us for Snackable AI Demos with the SMEs on building intelligent app architectures - ask your questions live.',
    link: '/Cloud-Native/Build-IA/DemoBytes',
    cta: 'Watch on demand'
  },
  {
    resource: '#30Days Of IA',
    description: 'Join us on a #30Day journey that starts by demystifying Intelligent Apps and ends with you building on Azure OpenAI.',
    link: '/Cloud-Native/30-days-of-ia-2024/',
    cta: 'Start skilling up now'
  },
];

export default function Meetups() {
  const { siteConfig } = useDocusaurusContext();
  const pageProps = {
    title: "Meetups",
    description:
      "Join us for an interactive workshop to explore and implement architectural best practices to build AI-powered applications.",
  };

  return (
    <Layout title={pageProps.title} description={pageProps.description}>
      <Head></Head>
      <CampaignHeader />
      <main className={styles.pageBg}>
        <Events />
        <Resources />
      </main>
    </Layout>
  );
}
