// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  // --- CONFIG-30DAYS #1: Add Custom Fields (accessible globally)
  customFields: {
    description: 'Cloud Native technologies and techniques enable loosely coupled systems that are resilient, manageable, and observable. Use containers, microservices, APIs and more to build and run scalable applications in modern hybrid cloud environments.',
  },

  // --- CONFIG-30DAYS #2: Config Landing Pages metadata
  title: 'Building Cloud Native Apps',
  tagline: 'From Code - To Containers - To Cloud!',


  // --- CONFIG-30DAYS #3: Config GitHub Pages
  url: 'https://azure.github.io',
  baseUrl: '/Cloud-Native/',
  favicon: 'img/favicon.ico',
  organizationName: 'azure', 
  projectName: 'Cloud-Native', 
  deploymentBranch: 'gh-pages',

  // --- CONFIG-30DAYS #4: Config for early detection of issues
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // --- CONFIG-30DAYS #5: Config For localization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // --- CONFIG-30DAYS #6: Configure presets for theme, plugins
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        // Configure: Docs 
        // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },

        // Configure: Blog (improve SEO)
        // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
        blog: {
          blogTitle: 'Learn in #30DaysOfServerless',
          blogDescription: 'Explore Serverless Technologies, Microservices Architectures, and Developer Tools - to build your Cloud Native Applications at scale!',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Recent Articles',
          tagsBasePath: 'tags',
          archiveBasePath: 'archive',
          postsPerPage: 1,
          showReadingTime: true,
          sortPosts: 'ascending'
        },

        // Configure: Theme (classic)
        // https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


  // --- CONFIG-30DAYS #6: Theme Config = default mode, respect Prefers Colors
  // https://docusaurus.io/docs/api/themes/configuration
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Cloud Native',
        logo: {
          alt: 'Azure Cloud Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Serverless September',
            position: 'left',
            items: [
              {
                label: 'Serverless On Azure',
                href: '/serverless-september/',
              },
              {
                label: '1. Serverless Hacks',
                href: '/serverless-september/ServerlessHacks',
              },
              {
                label: '2. Cloud Skills Challenge',
                href: '/serverless-september/CloudSkills',
              },
              {
                label: '3. Zero To Hero',
                href: '/serverless-september/ZeroToHero',
              },
              {
                label: '4. Ask The Expert',
                href: '/serverless-september/AskTheExpert',
              },
              {
                label: '5. Community Buzz',
                href: '/serverless-september/CommunityBuzz',
              },
              {
                label: '6. #30DaysOfServerless',
                href: '/serverless-september/30DaysOfServerless',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'right',
            items: [
              {
                label: 'For Cloud Native',
                href: '/docs/intro',
              },
              {
                label: 'For Serverless',
                href: '/docs/serverless',
              },
              {
                label: 'For DevTools',
                href: '/docs/devtools',
              },
              {
                label: 'For Languages',
                href: '/docs/languages',
              },
              {
                label: 'Blog Articles',
                href: '/blog',
              },
            ],
          },
          {
            href: 'https://github.com/azure/cloud-native',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*
          {
            title: 'Technologies',
            items: [
              {
                label: 'Azure Functions',
                to: '/docs/intro',
              },
              {
                label: 'Azure Container Apps',
                to: '/docs/intro',
              },
              {
                label: 'Azure Logic Apps',
                to: '/docs/intro',
              },
              {
                label: 'Azure Event Grid',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Languages',
            items: [
              {
                label: 'Java On Azure',
                to: '/docs/intro',
              },
              {
                label: 'JavaScript on Azure',
                to: '/docs/intro',
              },
              {
                label: 'Python On Azure',
                to: '/docs/intro',
              },
              {
                label: '.NET On Azure',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Initiatives',
            items: [
              {
                label: '#30DaysOfServerless',
                to: '/blog',
              },
              {
                label: 'Zero To Hero',
                to: '/blog',
              },
              {
                label: 'Serverless Hacks',
                to: '/blog',
              },
              {
                label: 'Community Buzz',
                to: '/blog',
              },
            ],
          },
          */
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft - Built with <a href="https://docusaurus.io"> Docusaurus </a> and <a href="https://iconcloud.design/"> IconCloud.Design</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'img/logo.png',

      metadata: [
        {
          name: 'twitter:url', 
          content: 'https://aka.ms/30DaysOfServerless'
        },
        {
          name: 'twitter:title', 
          content: 'Serverless September: From Code To Containers To Cloud!'
        },
        {
          name: 'twitter:description', 
          content: 'Learn how to build Serverless Solutions on Azure - from core concepts to best practices! https://aka.ms/30DaysOfServerless'
        },
        {
          name: 'twitter:image', 
          content: 'https://azure.github.io/Cloud-Native/img/banners/site-card.png'
        },
        {
          name: 'twitter:card', 
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator', 
          content: '@nitya'
        },
        {
          name: 'twitter:site', 
          content: '@AzureAdvocates'
        },

      ],

      /* Banner Announcements */
      announcementBar: {
        id: 'Serverless September kicks off Sep 1, 2022!',
        content:
          '<b> Explore 🧭 <a href="https://azure.microsoft.com/en-us/solutions/cloud-native-apps/"><b>Serverless On Azure</b></a></b> -- <b>Give us a ⭐️ on <a href="https://github.com/azure/cloud-native"><b>GitHub</b></a></b>',
        backgroundColor: '#ffb900',
        textColor: '#000000',
        isCloseable: false,
      },

      /* Clarity Config */
      clarity: {
        ID: "d61n997vq9", // Instructions below
      }

    }),


  // --- CONFIG-30DAYS #7: Activate and configure plugins here
  // Follow plugin instructions to configure themeConfig settings
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. 
        steps: 2, // #images b/w min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      'docusaurus-plugin-clarity',
      {
      }
    ],
  ],
};

module.exports = config;
