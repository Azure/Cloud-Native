// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  // --- CONFIG-30DAYS #1: Add Custom Fields (accessible globally)
  customFields: {
    description:
      "Combine the power of AI, cloud-scale data, and cloud-native app development to create highly differentiated digital experiences. Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure.",
  },

  // --- CONFIG-30DAYS #2: Config Landing Pages metadata
  title: "Build Intelligent Apps On Azure",
  tagline: "Cloud-native Apps, Cloud-scale Data, and AI",

  // --- CONFIG-30DAYS #3: Config GitHub Pages
  url: "https://azure.github.io",
  baseUrl: "/Cloud-Native/",
  favicon: "img/favicon.ico",
  organizationName: "azure",
  projectName: "Cloud-Native",
  deploymentBranch: "gh-pages",

  // --- CONFIG-30DAYS #4: Config for early detection of issues
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // --- CONFIG-30DAYS #5: Config For localization
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // --- CONFIG-30DAYS #6: Configure presets for theme, plugins
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },

        // Configure Blog 1: Serverless September
        // see plugins section for additional blogs
        blog: {
          blogTitle: "Learn in #30DaysOfServerless",
          blogDescription:
            "Explore Cloud-Native Technologies, Architectures, and Developer Tools - to build your Serverless Applications at scale!",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "#30DaysOfServerless",
          tagsBasePath: "tags",
          archiveBasePath: "archive",
          postsPerPage: 1,
          showReadingTime: true,
          sortPosts: "descending",
        },

        // Configure: Theme (classic)
        // https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: "Cloud-Native",
        logo: {
          alt: "Azure Cloud Logo",
          src: "img/cnny23/logo.svg",
        },
        items: [ 
          {
            to: "/Fall-For-IA/calendar",
            label: "2024 Calendar",
            position: "left",
          },
          {
            type: "dropdown",
            label: "🥳 #CloudNativeNewYear",
            position: "right",
            items: [
              {
                label: "#30DaysOfCloudNative",
                href: "/cnny-2023",
              },
              {
                label: "2023 Homepage",
                href: "/New-Year/",
              },
            ],
          },
          {
            type: "dropdown",
            label: "🍂 #ServerlessSeptember",
            position: "right",
            items: [
              {
                label: "#30DaysOfServerless",
                href: "/blog",
              },
              {
                label: "2022 Homepage",
                href: "/serverless-september",
              },
              {
                label: "2020 Collection",
                href: "https://dev.to/azure/serverlessseptember-2020-content-collection-443k",
              },
              {
                label: "2019 Collection",
                href: "https://dev.to/azure/serverless-september-content-collection-2fhb",
              },
            ],
          },
          {
            href: "https://github.com/azure/cloud-native",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },

      footer: {
        links: [
          {
            label: `AI`,
            to: "https://learn.microsoft.com/ai?WT.mc_id=javascript-74010-ninarasi",
          },
          {
            label: `Cloud-Native`,
            to: "https://azure.microsoft.com/solutions/cloud-native-apps/?WT.mc_id=javascript-74010-ninarasi",
          },
          {
            label: `Serverless`,
            to: "https://azure.microsoft.com/solutions/serverless/?WT.mc_id=javascript-74010-ninarasi",
          },
          {
            label: "Collection",
            to: "https://aka.ms/CNNY/collection",
          },
          {
            label: "Java",
            to: "https://developer.microsoft.com/java/?WT.mc_id=javascript-74010-ninarasi",
          },
          {
            label: "JavaScript",
            to: "https://docs.microsoft.com/javascript/?WT.mc_id=javascript-74010-ninarasi",
          },
          {
            label: ".NET",
            to: "https://dotnet.microsoft.com/?WT.mc_id=javascript-74010-ninarasi",
          },
          {
            label: "Python",
            to: "https://docs.microsoft.com/azure/developer/python/?WT.mc_id=javascript-74010-ninarasi",
          },
          {
            label: "Privacy Statement ",
            to: "https://privacy.microsoft.com/privacystatement",
          },
          {
            label: `Copyright © ${new Date().getFullYear()} Microsoft`,
            to: "https://microsoft.com",
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      image: "img/ogImage.png",

      metadata: [
        {
          name: "twitter:url",
          content: "https://aka.ms/FallForIA",
        },
        {
          name: "twitter:title",
          content: "#FallForIA is here | Sep-Oct 2023!",
        },
        {
          name: "twitter:description",
          content:
            "Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure!",
        },
        {
          name: "twitter:image",
          content:
            "https://azure.github.io/Cloud-Native/assets/ideal-img/hero-banner.e0a8d29.1030.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: "@nitya",
        },
        {
          name: "twitter:site",
          content: "@AzureAdvocates",
        },
      ],
      /* Banner Announcements */
      announcementBar: {
        id: "Call To Action",
        content:
          '<b>🎯 Learn Apps, AI & Azure <a href="https://aka.ms/contoso-real-estate/hacktogether"><b>on #HackTogether</b></a>  | 🌟 Star us <a href="https://github.com/azure/cloud-native"><b> on GitHub</b></a> </b> ',
        backgroundColor: "#0D032C",
        textColor: "#ffffff",
        isCloseable: false,
      },

      /* Clarity Config */
      clarity: {
        ID: "d61n997vq9", // Instructions below
      },
    }),

  // --- CONFIG-30DAYS #7: Activate and configure plugins here
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],

    // Start Multiple Blogs: https://docusaurus.io/docs/blog#multiple-blogs */
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "blog-cnny",
        routeBasePath: "cnny-2023",
        path: "./blog-cnny",
        blogTitle: "Learn in #30DaysOfCloudNative",
        blogDescription:
          "Explore Cloud-Native Technologies, Architectures, and Developer Tools - to build your Serverless Applications at scale!",
        blogSidebarCount: "ALL",
        blogSidebarTitle: "#30DaysOfCloudNative",
        tagsBasePath: "tags",
        archiveBasePath: "archive",
        postsPerPage: 1,
        showReadingTime: true,
        sortPosts: "ascending",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "blog-30daysofIA",
        routeBasePath: "30daysofIA",
        path: "./blog-30daysofIA",
        blogTitle: "Learn in #30DaysOfIA",
        blogDescription:
          "Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure!",
        blogSidebarCount: "ALL",
        blogSidebarTitle: "#30DaysOfIA",
        tagsBasePath: "tags",
        archiveBasePath: "archive",
        postsPerPage: 1,
        showReadingTime: true,
        sortPosts: "descending",
      },
    ],
    // ---- End Multiple Blogs

    ["docusaurus-plugin-clarity", {}],
  ],
};

module.exports = config;
