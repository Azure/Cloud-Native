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
        title: 'Cloud Native',
        logo: {
          alt: 'Azure Cloud Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/serverless-september/', 
            label: '🍂 #ServerlessSeptember', position: 'left'
          },
          {
            to: '/calendar/', 
            label: 'Events', position: 'left'
          },
          {
            to: 'https://aka.ms/serverless-september/videos', 
            label: 'Videos', position: 'left'
          },
          {
            to: '/blog', 
            label: 'Blog', position: 'left'
          },
          {
            type: 'dropdown',
            label: 'Sitemap',
            position: 'right',
            items: [
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
              {
                label: '7. Blog',
                href: '/blog',
              },
              {
                label: '8. Videos',
                href: '/docs/videos/intro',
              },
              {
                label: '9. Resources',
                href: '/docs/resources/intro',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Archives',
            position: 'right',
            items: [
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
        style: 'dark',
        /*
        logo: {
          alt: 'Serverless September Logo',
          src: 'img/campaign_banner.png',
          href: 'https://aka.ms/serverless-september',
          width: 280,
          height: 100,
        },
        */
        links: [
          {
            label: `Cloud Native Apps`,
            to: 'https://azure.microsoft.com/en-us/solutions/cloud-native-apps/'
          },
          {
            label: `Serverless On Azure`,
            to: 'https://azure.microsoft.com/en-us/solutions/serverless/'
          },
          {
            label: '#30Days Hub',
            to: 'https://aka.ms/30DaysOf',
          },
          {
            label: 'Discussions',
            to: 'https://github.com/Azure/Cloud-Native/discussions',
          },
          {
            label: 'Privacy Statement ',
            to: 'https://privacy.microsoft.com/en-us/privacystatement',
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

      image: 'img/banners/post-kickoff.png',

      metadata: [
        { 
          name: 'twitter:url', 
          content: 'https://aka.ms/serverless-september'
        },
        { 
          name: 'twitter:title', 
          content: '#ServerlessSeptember is here!'
        },
        { 
          name: 'twitter:description', 
          content: 'Explore Serverless Technologies, Microservices Architectures, and Developer Tools - to build your Cloud Native Applications at scale!'
        },
        { 
          name: 'twitter:image', 
          content: 'https://azure.github.io/Cloud-Native/assets/images/post-kickoff-4a04995b44f0cc4a784fb4ab5e29cf7c.png'
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
          '<b> Take the <a href="https://docs.microsoft.com/en-us/learn/challenges?id=b950cd7a-d456-46ab-81ba-3bd1ad86dc1c"><b>Cloud Skills Challenge!</b></a> - Give us <a href="https://github.com/azure/cloud-native"><b>🌟 on GitHub</b></a> </b>',
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
