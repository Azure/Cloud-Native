// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

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
  onBrokenMarkdownLinks: "throw",

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
        // defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },



      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },

      image: "https://azure.github.io/Cloud-Native/img/ogImage.png",

      metadata: [
        {
          name: "og:title",
          content: "#IntelligentApps start today | Microsoft Azure",
        },
        {
          name: "og:description",
          content:
            "Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure!",
        },
        {
          name: "og:url",
          content: "https://aka.ms/FallForIA",
        },
        {
          name: "twitter:url",
          content: "https://aka.ms/FallForIA",
        },
        {
          name: "twitter:title",
          content: "#IntelligentApps start today | Microsoft Azure",
        },
        {
          name: "twitter:description",
          content:
            "Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure!",
        },
        {
          name: "twitter:image",
          content:
            "https://azure.github.io/Cloud-Native/img/ogImage.png",
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
        {
          name: "awa-env",
          content: "Production",
        },
      ],

      /* Clarity Config */
      clarity: {
        ID: "d61n997vq9", // Instructions below
      },

    }),

  // --- CONFIG-30DAYS #7: Activate and configure plugins here
  plugins: [
    'my-loaders',
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
        routeBasePath: "30DaysOfIA",
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
        sortPosts: "ascending",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "blog-60daysofIA",
        routeBasePath: "60DaysOfIA",
        path: "./blog-60daysofIA",
        blogTitle: "Learn in #60DaysOfIA",
        blogDescription:
          "Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure!",
        blogSidebarCount: "ALL",
        blogSidebarTitle: "#60DaysOfIA",
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
        id: "blog-30-days-of-ia-2024",
        routeBasePath: "30-days-of-ia-2024",
        path: "./blog-30-days-of-ia-2024",
        blogTitle: "Learn in #30DaysOfIA",
        blogDescription:
          "Develop adaptive, responsive, and personalized experiences by building and modernizing intelligent applications with Azure!",
        blogSidebarCount: "ALL",
        blogSidebarTitle: "#30Days Of IA 2024",
        tagsBasePath: "tags",
        archiveBasePath: "archive",
        postsPerPage: 1,
        showReadingTime: true,
        sortPosts: "descending",
      },
    ],
    // ---- End Multiple Blogs

    ["docusaurus-plugin-clarity", {}],

    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/Build-IA/',
            from: '/Fall-For-IA',
          },
          {
            to: '/Build-IA/LearnLive/',
            from: '/Fall-For-IA/LearnLive',
          },
          {
            to: '/Build-IA/AskTheExpert/',
            from: '/Fall-For-IA/AskTheExpert',
          },
          {
            to: '/Build-IA/CloudSkills/',
            from: '/Fall-For-IA/CloudSkills',
          },
          {
            to: '/Build-IA/calendar/',
            from: '/Fall-For-IA/calendar',
          },
          {
            to: '/Build-IA/CommunityGallery/',
            from: '/Fall-For-IA/CommunityGallery',
          },
        ],
      },
    ],
  ],
  scripts: [
    {
      src: 'https://code.jquery.com/jquery-3.7.1.min.js'
    },
    {
      src: 'https://js.monitor.azure.com/scripts/c/ms.analytics-web-3.min.js'
    }
  ]
};

module.exports = config;
