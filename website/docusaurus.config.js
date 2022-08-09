// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  // Configure: Custom Fields
  customFields: {
    description: 'Cloud Native technologies and techniques enable loosely coupled systems that are resilient, manageable, and observable. Use containers, microservices, APIs and more to build and run scalable applications in modern hybrid cloud environments.',
  },

  // Configure: Reused in landing pages
  title: 'Building Cloud Native Apps',
  tagline: 'From Code - To Containers - To Cloud!',

  // Configure: For GitHub Pages
  url: 'https://azure.github.io',
  baseUrl: '/Cloud-Native/',
  favicon: 'img/favicon.ico',
  organizationName: 'azure', // Usually your GitHub org/user name.
  projectName: 'Cloud-Native', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Configure: For Early Fixes
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Configure: For Localization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
          blogSidebarTitle: '#30Days Of Serverless',
          tagsBasePath: 'tags',
          archiveBasePath: 'archive',
          postsPerPage: 1,
          showReadingTime: true,
          sortPosts: 'ascending'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
                label: 'Overview',
                href: '/serverless-september/',
              },
              {
                label: '#30DaysOfServerless',
                href: '/serverless-september/30DaysOfServerless',
              },
              {
                label: 'Zero To Hero',
                href: '/serverless-september/ZeroToHero',
              },
              {
                label: 'Serverless Hacks',
                href: '/serverless-september/ServerlessHacks',
              },
              {
                label: 'Cloud Skills Challenge',
                href: '/serverless-september/CloudSkills',
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
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft - Built with <a href="https://docusaurus.io"> Docusaurus </a> - By <a href="https://twitter.com/azureadvocates"> @azureadvocates </a>`,
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
          content: 'https://github.com/Azure/Cloud-Native/raw/main/Assets/Serverless-September_Light.png'
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
          '<b>Found this project helpful? Give us a star on <a href="https://github.com/azure/cloud-native"><b>GitHub</b></a></b> 🙏🏽',
        backgroundColor: '#ffb900',
        textColor: '#000000',
        isCloseable: false,
      },

    }),

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
  ],

};

module.exports = config;
