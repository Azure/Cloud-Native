// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Serverless September',
  tagline: 'From Code to Containers - to Cloud',
  url: 'https://azure.github.io',
  baseUrl: '/cloud-native/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'azure', // Usually your GitHub org/user name.
  projectName: 'cloud-native', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
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
        title: 'Serverless September',
        logo: {
          alt: 'Serverless September Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: '✍🏽 Blog', position: 'left'},
          {
            href: 'https://github.com/azure/cloud-native',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {to: '/blog', label: '☁️ Cloud Skills', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '🧰 Resources',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
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
          content: 'https://www.azurestaticwebapps.dev/assets/images/series-people-13a2856edd7022e82a252ed05dffbabc.png'
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

      announcementBar: {
        id: 'Serverless September kicks off Sep 1, 2022!',
        content:
          '<b>Found this project helpful? Give us a star on <a href="https://github/com/azure/cloud-native"><b>GitHub</b></a></b> 🙏🏽',
        backgroundColor: '#50E6FF',
        textColor: '#552F99',
        isCloseable: false,
      },

    }),
};

module.exports = config;
