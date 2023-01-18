// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  // --- CONFIG-30DAYS #1: Add Custom Fields (accessible globally)
  customFields: {
    description: 'Cloud-Native technologies and techniques enable loosely coupled systems that are resilient, manageable, and observable. Use containers, microservices, APIs and more to build and run scalable applications in modern hybrid cloud environments.',
  },

  // --- CONFIG-30DAYS #2: Config Landing Pages metadata
  title: 'Building Cloud-Native Apps',
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
          blogDescription: 'Explore Cloud-Native Technologies, Architectures, and Developer Tools - to build your Serverless Applications at scale!',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '#30DaysOfServerless',
          tagsBasePath: 'tags',
          archiveBasePath: 'archive',
          postsPerPage: 1,
          showReadingTime: true,
          sortPosts: 'descending'
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
        title: 'Cloud-Native',
        logo: {
          alt: 'Azure Cloud Logo',
          src: 'img/cnny23/logo.svg',
        },
        items: [
          {
            to: '/New-Year/', 
            label: '🥳 #CloudNativeNewYear', position: 'left'
          },
          {
            type: 'dropdown',
            label: '🍂 #ServerlessSeptember',
            position: 'right',
            items: [
              {
                label: '2022 Website',
                href: '/serverless-september',
              },
              {
                label: '2020 Content',
                href: 'https://dev.to/azure/serverlessseptember-2020-content-collection-443k',
              },
              {
                label: '2019 Content',
                href: 'https://dev.to/azure/serverless-september-content-collection-2fhb',
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
        links: [
          {
            label: `Cloud-Native`,
            to: 'https://azure.microsoft.com/solutions/cloud-native-apps/?WT.mc_id=javascript-74010-ninarasi'
          },
          {
            label: `Serverless`,
            to: 'https://azure.microsoft.com/solutions/serverless/?WT.mc_id=javascript-74010-ninarasi'
          },
          {
            label: 'Collection',
            to: 'https://aka.ms/CNNY/collection',
          },
          {
            label: 'Java',
            to: 'https://developer.microsoft.com/java/?WT.mc_id=javascript-74010-ninarasi',
          },
          {
            label: 'JavaScript',
            to: 'https://docs.microsoft.com/javascript/?WT.mc_id=javascript-74010-ninarasi',
          },
          {
            label: '.NET',
            to: 'https://dotnet.microsoft.com/?WT.mc_id=javascript-74010-ninarasi',
          },
          {
            label: 'Python',
            to: 'https://docs.microsoft.com/azure/developer/python/?WT.mc_id=javascript-74010-ninarasi',
          },
          {
            label: 'Privacy Statement ',
            to: 'https://privacy.microsoft.com/privacystatement',
          },
          { 
           label: `Copyright © ${new Date().getFullYear()} Microsoft`,
           to: 'https://microsoft.com'
          },
        ],
        /*
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft - Built with <a href="https://docusaurus.io"> Docusaurus </a> - Using <a href="https://iconcloud.design/"> IconCloud.Design</a>`,
        */
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      image: 'img/ogImage.png',

      metadata: [
        { 
          name: 'twitter:url', 
          content: 'https://aka.ms/CloudNativeNewYear'
        },
        { 
          name: 'twitter:title', 
          content: '#CloudNativeNewYear is here!'
        },
        { 
          name: 'twitter:description', 
          content: 'Explore Cloud-Native Technologies, Microservices Architectures, and Developer Tools - to build your Cloud- Native Applications at scale!'
        },
        { 
          name: 'twitter:image', 
          content: 'https://azure.github.io/Cloud-Native/assets/ideal-img/hero-banner.e0a8d29.1030.png'
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
        id: '2023 Cloud Native New Year!',
        content:
          '<b> Take the <a href="https://learn.microsoft.com/en-us/training/challenges?id=a0e385b9-f970-4182-b2e2-3b4619b6c356&WT.mc_id=javascript-84290-ninarasi"><b>Cloud Skills Challenge!</b></a> - Give us <a href="https://github.com/azure/cloud-native"><b>🌟 on GitHub</b></a> </b> ',
        backgroundColor: '#0D032C',
        textColor: '#ffffff',
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
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'blog-cnny',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'cnny-2023',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './blog-cnny',
        blogTitle: 'Learn in #30DaysOfCloudNative',blogDescription: 'Explore Cloud-Native Technologies, Architectures, and Developer Tools - to build your Serverless Applications at scale!',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: '#30DaysOfCloudNative',
        tagsBasePath: 'tags',
        archiveBasePath: 'archive',
        postsPerPage: 1,
        showReadingTime: true,
        sortPosts: 'descending'
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
