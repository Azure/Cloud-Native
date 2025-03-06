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
import YouTubeThumbnail from "../../components/YouTubeThumbnail";

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
    borderRadius: '1.5rem'
  };

  return (
    <header
      className={clsx('hero hero--primary heroAzureHome')}
      style={{ backgroundImage: 'url(/Cloud-Native/img/cloud-native-hero-bg.webp)', padding: '8rem 0rem' }}
    >
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col col--6">
            <h1 className="hero__title">Microsoft Azure at KubeCon North America 2024</h1>
            <p style={{ fontSize: '1.125rem', fontWeight:'600' }}>November 12-15, 2024 | Salt Lake City, Utah</p>
            <p>
            Thank you for joining us at KubeCon North America 2024 in Salt Lake City, Utah. We were thrilled to connect with the community and share how Azure is leading the way in Kubernetes and intelligent applications. Missed us there? Check out the recordings from our sessions, demos, and keynotes.
            </p>
            {/* <p className='button button--secondary button--lg' style={{ cursor: 'default' }}>Find us at Booth #C4</p> */}
          </div>
          <div className="col col--6">
            <div style={videoResponsiveStyle}>
              <iframe
                style={iframeStyle}
                src="https://www.youtube.com/embed/-kBTokGFIa0?playlist=-kBTokGFIa0&rel=0"
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

// Section Content
function BannerLearn() {
    return (
      <section className={styles['banner-background']}>
        <div className="container">
          <div className="row padding-top--lg">
            <div className="col col--auto text--center">
              <h2 className="margin-bottom--sm">Azure Day with Kubernetes</h2>
            </div>
          </div>
          <div className="row">
            <div className="col col--6 col--offset-3">
              <p className='margin-bottom--md text--center'>
              <span style={{ fontWeight: 600 }}>Now On Demand</span> | Catch the recordings from Azure Day with Kubernetes in Salt Lake City to learn best practices for building cloud-native and intelligent apps with Kubernetes on Azure.
              </p>
            </div>
          </div>
          <div className="row padding-bottom--lg">
            <div className='col col--6 text--center col--offset-3'>
              <a className="button button--secondary button--lg button-mobile-padding" href="https://www.youtube.com/watch?v=lt8NjNinuEE&list=PLc3Ep462vVYtXDK54LBlhNNV5a1IUOxQu" target="_blank">
              Watch the recordings
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
          <div className="row padding-top--lg padding-bottom--lg">
            <div className="col col--8 col--offset-2 text--center">
              <h2 className="margin-bottom--sm gradient-background">Join us at booth C4 during the KubeCrawl</h2>
              <p className='margin-bottom--none'>
              For an exclusive book signing of <a className="link-blue-light" href="https://www.oreilly.com/library/view/kubernetes-best-practices/9781098142155/" target='_blank'>Kubernetes Best Practices, 2nd Edition</a> with Brendan Burns!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

// Section Content
function Sessions() {
  return (
    <section>
      <div className="container margin-top--lg">
        <div className="row">
          <div className="col text--center">
            <h2 className={styles['gradient-header']}>Learn from Microsoft Experts</h2>
          </div>
        </div>

        <div className="row">
          <div className="col col--6">
            <h3 style={{ textTransform: "uppercase" }}>Keynote</h3>
            <h4 style={{ fontSize: "1.25rem" }} className="margin-bottom--xs">
              A Developer's Guide to Securing Your Software Supply Chain
            </h4>
            <p>Toddy Mladenov, Principal Product Manager, Microsoft</p>
          </div>
        </div>

        <div className="row">
          <div className="col col--6">
            <YouTubeThumbnail
              videoId="YQuzhSGGPNk"
              customThumbnail="/Cloud-Native/img/securing-your-software-supply-chain-toddy-mladenov.jpeg"
            />
          </div>
          <div className="col col--6">
            <p>
            In this keynote, we navigate the journey of these artifacts from source to production and showcase how to secure your software at each step of the supply chain using cloud native open-source tooling. With the help of key CNCF projects like in-toto, Notary Project, Ratify, and Copa, you will learn how to ensure your software is secure, consistent, and reliably delivered to production.
            </p>
            <p>
            In this keynote, we navigate the journey of these artifacts from source to production and showcase how to secure your software at each step of the supply chain using cloud native open-source tooling. With the help of key CNCF projects like in-toto, Notary Project, Ratify, and Copa, you will learn how to ensure your software is secure, consistent, and reliably delivered to production.
            </p>
            <a className="button button--primary button--lg" href="https://vmblog.com/archive/2024/10/23/the-future-of-the-cloud-native-software-supply-chain.aspx" target="_blank">
              Read the article
            </a>
          </div>
        </div>

        <h3 className="margin-top--lg" style={{ textTransform: "uppercase" }}>Additional Keynotes & Mainstage Features</h3>
        <div className="row">
          <div className="col card-col col--4">
            <div className="card">
              <div style={{ padding: ".5rem" }}>
                <YouTubeThumbnail
                  videoId="6hU8cz5pP58"
                  customThumbnail="/Cloud-Native/img/are-we-there-yet-panel.jpeg"
                />
                <h3 className='margin--md'>A Decade of Kubernetes and Cloud Native - Are We There Yet?</h3>
              </div>
            </div>
            </div>
          <div className="col card-col col--4">
          <div className="card">
          <div style={{ padding: ".5rem" }}>
            <YouTubeThumbnail
              videoId="f8ornY7h2KE?si=tRFxLoV_9zLwYsOf&amp;start=287&amp;end=398"
              customThumbnail="/Cloud-Native/img/hyperlight-rita-zhang.jpeg"
            />
            <h3 className='margin--md'>Hyperlight with Rita Zhang</h3>
          </div>
          </div>
          </div>
          <div className="col card-col col--4">
          <div className="card">
          <div style={{ padding: ".5rem" }}>
            <YouTubeThumbnail
              videoId="f8ornY7h2KE?si=XZD0R06V2AZexJSU&amp;start=194&amp;end=283"
              customThumbnail="/Cloud-Native/img/flatcar-andy-randall.jpeg"
            />
            <h3 className='margin--md'>Flatcar with Andy Randall</h3>
          </div>
          </div>
          </div>
        </div>
          <h3 style={{ textTransform: "uppercase" }} className='margin-top--lg'>Featured Breakout Sessions</h3>
          <p style={{maxWidth:'870px'}}>Microsoft engineers delivered sessions throughout the conference on a variety of projects and topics including <a className={styles['blue-link']} href="https://sched.co/1i7lA" target='_blank'>LLM Performance</a>, <a className={styles['blue-link']} href="https://kccncna2024.sched.com/event/1iW9K/eraser-cleaning-up-vulnerable-images-from-kubernetes-nodes-project-lightning-talk?iframe=yes&w=100%25&sidebar=yes&bg=no" target='_blank'>Eraser</a>, <a className={styles['blue-link']} href="https://sched.co/1hovU" target='_blank'>Notary</a>, <a className={styles['blue-link']} href="https://sched.co/1i7mf" target='_blank'>handling GPU Failures</a>, <a className={styles['blue-link']} href="https://sched.co/1i7rK" target='_blank'>OpenCost</a>, <a className={styles['blue-link']} href="https://sched.co/1i7ng" target='_blank'>Gateway API</a>, <a  className={styles['blue-link']} href="https://sched.co/1i7oH" target='_blank'>WebAssembly (Wasm)</a>, <a className={styles['blue-link']} href="https://sched.co/1how8" target='_blank'>CNI</a>, <a className={styles['blue-link']} href="https://sched.co/1i7n3" target='_blank'>Karpenter</a>, <a className={styles['blue-link']} href="https://sched.co/1izr8" target='_blank'>eBPF</a>, <a className={styles['blue-link']} href="https://sched.co/1izsX" target='_blank'>OpenTelemetry</a> and more!</p>
          {/* <p>Some featured sessions include:</p> */}
          <div className="row" style={{ paddingBottom: '1rem' }}>
            {SessionContent.map((props, idx) => (
              <ContentItem key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  // Content Item
  function ContentItem({ session, link, presenter }) {
    return (
      <div className={clsx('col col--6 card-col')}>
          <div className="card">
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div className="text--left">
                <h4>{session}</h4>
                <p>{presenter}</p>
                </div>
                <div>
                <a
                href={link}
                className={styles['card-link']}
                target="_blank"
                rel="noopener noreferrer"
                data-bi-area="BodyGrid"
                data-bi-name={session}
                >
                    Watch the recording
                </a>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  const SessionContent = [
    {
      session: 'Optimizing LLM Performance in Kubernetes with OpenTelemetry',
      presenter: 'Liudmila Molkova',
      link: 'https://youtu.be/6rdeFACyyYg?si=XvfnFgYLlyAwFhXI',
    },
    {
      session: 'Running WebAssembly (Wasm) Workloads Side-by-Side with Container Workloads',
      presenter: 'Jiaxiao Zhou',
      link: 'https://youtu.be/Bq5aTYyRBH0?si=tnSEaYTwlks-mBrT',
    },
    {
      session: 'Detecting and Overcoming GPU Failures During ML Training',
      presenter: 'Ganeshkumar Ashokavardhanan',
      link: 'https://youtu.be/96G4Plzvr7s?si=Ac2C9qpBGLxUX-w0',
    },
    {
      session: 'Working Together to Improve Security Visibility in Kubernetes',
      presenter: 'Rita Zhang & Jeremy Rickard',
      link: 'https://youtu.be/f-NJptXlp5I?si=mvjClC8X2-9JClQ0',
    },
    {
      session: 'Divide and Conquer: Master GPU Partitioning and Visualize Savings with OpenCost',
      presenter: 'Kaysie Yu & Ally Ford',
      link: 'https://www.youtube.com/watch?v=sH699gmFC0o',
    },
    {
      session: 'Building a More Resilient Future with Advanced Cloud Provider Testing',
      presenter: 'Bridget Kromhout',
      link: 'https://youtu.be/5FKMFlooC6c?si=GXgh8Mor92e5h9yu',
    },
    {
      session: 'The Maintainer Monologues',
      presenter: 'Ryan Nowak',
      link: 'https://youtu.be/Qf1_5rU-Fts?si=9UkOQWfpYO0BkL9t',
    },
    {
      session: 'The State of Kubernetes Optimization and the Role of AI',
      presenter: 'Haoran Qiu',
      link: 'https://youtu.be/O4otXH3CNRU?si=UeH5UQOJdW5-HB24',
    },
    {
      session: 'Kubernetes Multi-Cluster Networking 101',
      presenter: 'Niranjan Shankar',
      link: 'https://youtu.be/cpkKinqdwqA?si=EjJlAZeakrsu3Wjq',
    },
    {
      session: 'Scratching the Surface: Simulating K8s in MIT Scratch',
      presenter: 'Mitch Connors',
      link: 'https://youtu.be/yTXVvY7gTR8?si=1Oay0VZBnVUfOoeI',
    },
    {
      session: 'How to Move from Ingress to Gateway API with Minimal Hassle',
      presenter: 'Keith Mattix',
      link: 'https://youtu.be/dyye6L6aKkA?si=NvMC45yOAL5lgV3D',
    },
    {
      session: "What's Going on in the Containerd Neighborhood?",
      presenter: 'Kirtana Ashok',
      link: 'https://youtu.be/kCNhgNXVdxw?si=aMnuB1AG2sVWm3Pa',
    },
    {
      session: 'Using Notary Project to Ensure Authenticity and Integrity of Artifacts Within the Enterprise',
      presenter: 'Toddy Mladenov',
      link: 'https://youtu.be/pO3sZsths2s?si=UlQcCdxDinmMn72G',
    },
    {
      session: 'Life of a Packet: Ambient Edition',
      presenter: 'Keith Mattix',
      link: 'https://youtu.be/5IJwd9X5Yk8?si=ner23nBwsy0m9ntI',
    },
    {
      session: 'CNI Updates and Direction!',
      presenter: 'Michael Zappa',
      link: 'https://youtu.be/sWQ6Vonzkr0?si=Yey2GAtYe-TM51lZ',
    },
    {
      session: 'Bare Metal Kubernetes with KOps: Gathering Community Wisdom',
      presenter: 'Ciprian Hacman',
      link: 'https://youtu.be/UIO3duG-AXs?si=CtK1bu8DtO3mRHZs',
    },
    {
      session: 'Scaling and Safeguarding the Heart of Kubernetes: Deep Dive Into etcd',
      presenter: 'Wei Fu',
      link: 'https://youtu.be/q_HZo5Mu8Fk?si=0sRYJQ4npvNnZudU',
    },
    {
      session: 'Pushing Authorization Further: CEL, Selectors and Maybe RBAC++',
      presenter: 'Mo Khan & Rita Zhang',
      link: 'https://youtu.be/pIrJRPv-Wbg?si=RAtC5jTXXIDHIsgj',
    },
    {
      session: 'One Inventory to Rule Them All: Standardizing Multicluster Management',
      presenter: 'Ryan Zhang',
      link: 'https://youtu.be/6c8Rh_vrIA4?si=QHC8PbWYzAuiEBWx',
    },
    {
      session: 'CEL-Ebrating Simplicity: Mastering Kubernetes Policy Enforcement',
      presenter: 'Anish Ramasekar',
      link: 'https://youtu.be/7NO8HXzjLAk?si=bMHkvVY9H3dyTxkT',
    },
    {
      session: "It's Dangerous to Build It Alone, Take This.",
      presenter: 'Jeremy Rickard & Ashna Mehrotra',
      link: 'https://youtu.be/UsHBGZ7np2Q?si=SKIXJhWeO8SE1oQo',
    },
    {
      session: 'Rogue No More: Securing Kubernetes with Node-Specific Restrictions',
      presenter: 'Anish Ramasekar',
      link: 'https://youtu.be/kznxInpGet4?si=ejgwypbLXkU-wZHP',
    },
  ];
  

  function Demos() {
    return (
      <section>
        <div className="container margin-top--lg margin-bottom--lg">
          <div className="row">
            <div className="col margin-top--md text--center">
              <h2 className={styles['gradient-header']}>Booth Theatre & Demos</h2>
              <p>
                Visit our booth #C4 to engage with our experts and attend a variety
                of theatre sessions and technical demos.
              </p>
            </div>
          </div>
  
          {/* Row container for cards */}
          <div className="row">
            <div className="col col--4 card-col">
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
                    <h3>Wednesday, November 13, 2024</h3>
                    <ul>
                      <li>Enhance the Security of your Container Images with Continuous Patching</li>
                      <li>Objection! Event-Driven Workload Mistakes on Trial with Azure & KEDA</li>
                      <li>Unlocking Binary Drift Detection</li>
                      <li>Accelerated GenAI on Azure with Canonical's Managed Kubeflow</li>
                      <li>Securing your Microservices in AKS using eBPF and Istio</li>
                      <li>What's new for Windows on AKS</li>
                      <li>Introduction to Reliability Best Practices on AKS and beyond</li>
                      <li>OpenTelemetry on Azure</li>
                      <li>Cloud-Agnostic Network Observability for Kubernetes: Empowering Azure Workloads with Retina</li>
                      <li>Amplify the Security of AKS Deployments Using Ratify and Gatekeeper</li>
                      <li>Divide and Conquer: Master GPU Partitioning and Visualize Savings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col col--4 card-col">
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
                    <h3>Thursday, November 14, 2024</h3>
                    <ul>
                      <li>Fine-Tuning Open-Source Models made easy with KAITO</li>
                      <li>Full-stack K8S monitoring with Azure Monitor</li>
                      <li>Wiz Container security for AI workloads on AKS</li>
                      <li>AKS Field Guide: Surviving in the Real World</li>
                      <li>Managing Kubernetes with Azure Linux</li>
                      <li>Increased performance capabilities with Azure Container Storage</li>
                      <li>AKS Networking Best Practices</li>
                      <li>Harnessing AI with Redis: Optimizing Databases on Kubernetes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col col--4 card-col">
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
                    <h3>Friday, November 15, 2024</h3>
                    <ul>
                      <li>How to Move from Ingress to Gateway API with Minimal Hassle</li>
                      <li>Cloud storage best practices for containers with scale-out analytics and AI workloads</li>
                      <li>Enhancing Application Resiliency with Azure Kubernetes Fleet Manager</li>
                    </ul>
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
        <div className="container margin-bottom--lg">
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
  

export default function KubeconNA() {
  const { siteConfig } = useDocusaurusContext();
  const pageProps = {
    title: 'Microsoft Azure at KubeCon Salt Lake City',
    description: 'Thank you for joining us at KubeCon North America 2024 in Salt Lake City, Utah.',
  };

  return (
    <AnnouncementBarProvider hide={true}>
    <Layout title={pageProps.title} description={pageProps.description}>
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>
      <main className={styles.pageBg}>
      <CampaignHeader />
      <BannerLearn />
      <Sessions />
      {/* <Demos />
      <BannerKubecrawl /> */}
      <Community />
      </main>
    </Layout>
    </AnnouncementBarProvider>
  );
}
