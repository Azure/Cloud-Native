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
    borderRadius: '1.5rem'
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
      style={{ backgroundImage: 'url(/Cloud-Native/img/hero-bg-kubecon-eu.webp)', padding: '8rem 0rem', backgroundColor: '#c03bc4', color: '#ffffff', backgroundSize: 'contain', backgroundPosition: 'bottom right', backgroundRepeat: 'no-repeat' }}
    >
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col col--6">
            <h1 className="hero__title">Join Microsoft Azure at KubeCon Europe 2025</h1>
            <p style={{ fontSize: '1.125rem', fontWeight:'600' }}>April 1-4 | London, UK</p>
            <p>
            Join us at KubeCon Europe 2025 in London, UK, from April 1-4, where Microsoft Azure will be a Diamond Sponsor. Discover how Azure is leading the way in Kubernetes and intelligent applications with a series of exciting sessions, demos, and keynotes.
            </p>
            <p className='button button--secondary button--lg' style={{ cursor: 'default' }}>Find us at Booth #N150</p>
          </div>
          <div className="col col--6">
            {/* <div style={videoResponsiveStyle}>
              <iframe
                style={iframeStyle}
                src="https://www.youtube.com/embed/d6jDYa3y_Xk?si=_Vid1YrimIm7d8dm"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}

// Section Content
function Sessions() {  
    return (
      <section>
        <div className="container margin-top--lg">
          <div className="row margin-top--lg">
            <div className="col col--8 col--offset-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2 className={styles['gradient-header-eu']}>Learn from Microsoft Experts </h2>
            </div>
          </div>
          <div className="row">
          <div className="col col--12">
          <h3 style={{ textTransform: "uppercase" }}>Keynote</h3>
          </div>

          <div className={clsx('col col--12 card-col')}>

          <div className="card">
            <div className="card-body" >
            
            <h4 style={{ fontSize: "1.25rem" }} className="margin-bottom--xs">
            Kubernetes for everyone: a user-friendly approach with Kubernetes Desktop
            </h4>
            <p className="margin-bottom--xs" style={{ fontWeight: '600' }}>Andrew Randall, Principal Product Manager, Microsoft</p>
            <p>Wednesday April 2, 2025 at 10:04 AM </p>
            <p>
            Kubernetes is known for being challenging; getting started with such a complex distributed system can be intimidating. For both new and experienced users, it's hard getting started from scratch, handling multi-cluster deployments, and integrating various tools and projects required in a modern Kubernetes environment. Enter Kubernetes Desktop.
            </p>
            <p>
            Based on the CNCF Headlamp project, Kubernetes Desktop offers an intuitive, out-of-the-box experience that simplifies the setup and management of local Kubernetes environments. Headlamp's adaptability allows it to offer a great day-one experience for end users and serve as a foundation for vendors to build upon and integrate with other CNCF projects. Bringing Headlamp's capabilities to Kubernetes Desktop provides a modern, feature-rich user interface that works to streamline the user experience and make Kubernetes more accessible to all.
            </p>
            <a className="button button--primary button--lg" href="https://kccnceu2025.sched.com/event/1txBv" target="_blank">
            Add to your schedule
            </a>
          </div>
          </div>
          </div>

        </div>

        <div className='row margin-top--lg'>
          <div className='col'>
            <h3 style={{ textTransform: 'uppercase' }}>Breakouts</h3>
            <p>Microsoft engineers will be delivering sessions throughout the conference on a variety of topics including <a className={styles['blue-link']} href="https://sched.co/1u5hts" target='_blank'>sidecarless Service Mesh</a>, <a className={styles['blue-link']} href="https://kccnceu2025.sched.com/event/1tcvu/project-lightning-talk-project-copacetic-ashna-mehrotra-maintainer?iframe=yes&w=100%25&sidebar=yes&bg=no" target='_blank'>Copacetic</a>, <a className={styles['blue-link']} href="https://maintainersummiteu2025.sched.com/event/1uSNk/towards-a-standardized-identity-based-authorization-in-kubernetes-keith-mattix-microsoft-lior-lieberman-google" target='_blank'>Identity-based Authorization</a>, <a className={styles['blue-link']} href="https://kccnceu2025.sched.com/event/1tcv8/project-lightning-talk-protect-your-kubernetes-clusters-with-ratify-and-attestations-yi-zha-maintainer?iframe=yes&w=100%25&sidebar=yes&bg=no" target='_blank'>Ratify</a>, <a className={styles['blue-link']} href="https://kccnceu2025.sched.com/event/1txGl/building-webassembly-like-its-2011-david-justice-microsoft" target='_blank'>Web Assembly</a>, <a className={styles['blue-link']} href="https://kccnceu2025.sched.com/event/1td0k/containerd-project-update-and-deep-dive-maksym-pavlenko-databricks-akihiro-suda-ntt-laura-brehm-docker-samuel-karp-google-jiaxiao-zhou-microsoft?iframe=yes&w=100%25&sidebar=yes&bg=no" target='_blank'>containerd</a>, <a className={styles['blue-link']} href="https://kccnceu2025.sched.com/event/1td1W/notary-project-the-key-to-secure-software-supply-chain-yi-zha-microsoft-guillaume-gill-orangelogic" target='_blank'>Notary</a>, <a className={styles['blue-link']} href="https://kccnceu2025.sched.com/event/1td0n/contribfest-make-your-own-ui-for-kubernetes-with-headlamp" target='_blank'>Headlamp</a>, <a className={styles['blue-link']} href="https://kccnceu2025.sched.com/event/1tcxD/opentelemetry-project-update-daniel-gomez-blanco-skyscanner-severin-neumann-cisco-alolita-sharma-apple-trask-stalnaker-microsoft-pablo-baeyens-datadog?iframe=yes&w=100%25&sidebar=yes&bg=no" target='_blank'>OpenTelemetry</a>, <a className={styles['blue-link']} href="https://kccnceu2025.sched.com/event/1txCP/trust-no-one-secure-storage-with-confidential-containers-aurelien-bombo-microsoft" target='_blank'>confidential containers</a>, <a  className={styles['blue-link']} href="https://kccnceu2025.sched.com/event/1tczR?iframe=no" target='_blank'>Inspektor Gadget</a>,  and more!</p>
            <p>Some featured sessions include:</p>
            </div>
          </div>
          <div className="row">
            {ContentItemsA.map((props, idx) => (
              <ContentItem key={idx} {...props} />
            ))}
          </div>
          <div className="row margin-top--lg">
            <div className='col'>
              <a className="button button--primary button--lg button-mobile-padding" href="https://aka.ms/KubeCon-MSFT-sessions" target="_blank">
              See all sessions
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function BannerAzureDay() {
      return (
        <section className={styles['banner-background-eu']}>
          <div className="container">
            <div className="row padding-top--lg">
              <div className="col col--auto text--center">
                <h2 className="margin-bottom--sm">Azure Day with Kubernetes</h2>
              </div>
            </div>
            <div className="row">
              <div className="col col--6 col--offset-3">
                <p className='margin-bottom--md text--center'>
                <span style={{ fontWeight: 600 }}>Tuesday April 1, 2025</span> | Join our team of Microsoft experts in-person to learn best practices for building cloud-native and intelligent apps with Kubernetes on Azure.
                </p>
              </div>
            </div>
            <div className="row padding-bottom--lg">
              <div className='col col--6 text--center col--offset-3'>
                <a className="button button--secondary button--lg button-mobile-padding" href="https://aka.ms/AzureKubernetesDay" target="_blank">
                Register now
                </a>
              </div>
            </div>
          </div>
        </section>
      );
    }

      function BannerTrivia() {
        return (
          <section className={styles['banner-background-eu']}>
            <div className="container">
              <div className="row padding-top--lg padding-bottom--lg">
                <div className="col col--6 col--offset-3 text--center">
                  <h2 className="margin-bottom--sm gradient-background">Compete in our Kubernetes trivia game and win awesome prizes!</h2>
                  <p className='margin-bottom--none'>
                  Join us at booth #N150 during the KubeCrawl to play.
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      }
  
  // Content Item
  function ContentItem({ session, link, presenter, description }) {
    return (
      <div className={clsx('col col--4 card-col')}>

          <div className="card">
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div className="text--left">
                <h3>{session}</h3>
                <p>{presenter}</p>
                </div>
                <div>
                <a
                href={link}
                className={styles['card-link']}
                target="_blank"
                rel="noopener noreferrer"
                >
                    Register to attend
                </a>
              </div>
            </div>
          </div>
        
      </div>
    );
  }
  
  const ContentItemsA = [
    {
      session: "A New Frontier: Sidecarless Service Mesh on Windows With Istio's Ambient Mesh",
      presenter: "Keith Mattix, Mitch Connors",
      link: "https://sched.co/1u5ht",
    },
    {
      session: "Towards a Standardized Identity-based Authorization in Kubernetes",
      presenter: "Keith Mattix",
      link: "https://maintainersummiteu2025.sched.com/event/1uSNk/towards-a-standardized-identity-based-authorization-in-kubernetes-keith-mattix-microsoft-lior-lieberman-google",
    },
    {
      session: "Streamlined Efficiency: Unshackling Kubernetes Image Volumes for Rapid AI Model and Dataset Loading",
      presenter: "Esteban Rey",
      link: "https://sched.co/1txEv",
    },
    {
      session: "Transparent, Infra-Level Checkpoint and Restore for Resilient AI/ML Workloads at Scale",
      presenter: "Ganeshkumar Ashokavardhanan",
      link: "https://kccnceu2025.sched.com/event/1tx7u/transparent-infra-level-checkpoint-and-restore-for-resilient-aiml-workloads-at-scale-ganeshkumar-ashokavardhanan-microsoft-bernie-wu-memverge",
    },
    {
      session: "Beyond Kubernetes: Adapting To Specialized Application Workloads",
      presenter: "Sachi Desai",
      link: "https://kccnceu2025.sched.com/event/1txEd/beyond-kubernetes-adapting-to-specialized-application-workloads-rags-srinivas-independent-dawn-chen-google-sachi-desai-microsoft-vara-bonthu-aws-erin-boyd-nvidia",
    },
    {
      session: "The Key To Security: Externalized Service Account Key Management",
      presenter: "Mo Khan, Rita Zhang, Stanislav Láznička, Anish Ramasekar",
      link: "https://kccnceu2025.sched.com/event/1tczC/the-key-to-security-externalized-service-account-key-management-mo-khan-rita-zhang-stanislav-laznicka-anish-ramasekar-microsoft?iframe=yes&w=100%25&sidebar=yes&bg=no",
    },
    {
      session: "Building WebAssembly Like It's 2011",
      presenter: "David Justice",
      link: "https://kccnceu2025.sched.com/event/1txGl/building-webassembly-like-its-2011-david-justice-microsoft",
    },
    {
      session: "Wasm I Right or Wasm I Wrong? a Review of the Wasm Ecosystem",
      presenter: "David Justice",
      link: "https://kccnceu2025.sched.com/event/1tcxS/wasm-i-right-or-wasm-i-wrong-a-review-of-the-wasm-ecosystem-taylor-thomas-cosmonic-david-justice-microsoft?iframe=yes&w=100%25&sidebar=yes&bg=no",
    },
    {
      session: "Signed, Sealed, Delivered - Sign and Verify All the Things",
      presenter: "Jeremy Rickard",
      link: "https://kccnceu2025.sched.com/event/1txCV/signed-sealed-delivered-sign-and-verify-all-the-things-jeremy-rickard-microsoft",
    },
    {
      session: "A Practical Guide To Kubernetes Policy as Code",
      presenter: "Rita Zhang",
      link: "https://kccnceu2025.sched.com/event/1tcxh/a-practical-guide-to-kubernetes-policy-as-code-jim-bugwadia-nirmata-rita-zhang-microsoft-andy-suderman-fairwinds-joe-betz-google?iframe=yes&w=100%25&sidebar=yes&bg=no",
    },
    {
      session: "Taming the Traffic: Selecting the Perfect Gateway Implementation for You",
      presenter: "Mike Morris",
      link: "https://kccnceu2025.sched.com/event/1txAr/taming-the-traffic-selecting-the-perfect-gateway-implementation-for-you-spencer-hance-google-arko-dasgupta-tetrate-christine-kim-isovalent-at-cisco-kate-osborn-nginxf5-mike-morris-microsoft",
    },
    {
      session: "Notary Project: The Key To Secure Software Supply Chain",
      presenter: "Yi Zha",
      link: "https://kccnceu2025.sched.com/event/1td1W/notary-project-the-key-to-secure-software-supply-chain-yi-zha-microsoft-guillaume-gill-orangelogic",
    },
    {
      session: "An Imperfect Guide To Impact and Intent",
      presenter: "Jeremy Rickard",
      link: "https://maintainersummiteu2025.sched.com/event/1uSNt/an-imperfect-guide-to-impact-and-intent-hilliary-lipsig-red-hat-danielle-lancashire-fermyon-xander-grzywinski-independent-ana-margarita-medina-upbound-jeremy-rickard-microsoft",
    },
    {
      session: "That's Just My Cup of Tea: Configuring Cilium for Performance and Scale",
      presenter: "Neha Aggarwal",
      link: "https://colocatedeventseu2025.sched.com/event/1u5f5/thats-just-my-cup-of-tea-configuring-cilium-for-performance-and-scale-liz-rice-isovalent-at-cisco-neha-aggarwal-microsoft?iframe=yes&w=100%25&sidebar=yes&bg=no",
    },
    {
      session: "Beyond CloudEvents: Endpoints, Messages, Schemas - CNCF XRegistry",
      presenter: "Clemens Vasters",
      link: "https://kccnceu2025.sched.com/event/1tcyi/beyond-cloudevents-endpoints-messages-schemas-cncf-xregistry-manuel-ottlik-hdi-global-se-clemens-vasters-microsoft-corporation?iframe=yes&w=100%25&sidebar=yes&bg=no",
    },
  ];
  

  function Demos() {
    return (
      <section>
        <div className="container margin-top--lg margin-bottom--lg">
          <div className="row">
            <div className="col margin-top--md text--center">
              <h2 className={styles['gradient-header-eu']}>Booth Theatre & Demos</h2>
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
                    <h3>Wednesday, April 2, 2025</h3>
                    <ul>
                      <li>Coming soon!</li>
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
                    <h3>Thursday, April 3, 2025</h3>
                    <ul>
                      <li>Coming soon!</li>
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
                    <h3>Friday, April 4, 2025</h3>
                    <ul>
                      <li>Coming soon!</li>
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
        <div className="container margin-top--lg margin-bottom--lg">
          <div className="row">
            <div className="col margin-top--md text--center">
              <h2 className={styles['gradient-header-eu']}>Find your Community</h2>
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
  

export default function KubeconEurope() {
  const { siteConfig } = useDocusaurusContext();
  const pageProps = {
    title: 'Microsoft Azure at KubeCon Europe 2025',
    description: 'Join us at KubeCon Europe 2025 in London, UK, from April 1-4.',
  };

  return (
    <AnnouncementBarProvider hide={true}>
    <Layout title={pageProps.title} description={pageProps.description}>
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>
      <main className={styles['pageBgEu']}>
      <CampaignHeader />
      <BannerAzureDay />
      <Sessions />
      <Demos />
      <BannerTrivia />
      <Community />
      </main>
    </Layout>
    </AnnouncementBarProvider>
  );
}
