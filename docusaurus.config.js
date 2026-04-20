// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Buffett Archive',
  tagline: 'A comprehensive knowledge base for Warren Buffett\'s shareholder letters',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://buffett-archive.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // You can deploy to GitHub pages, but it is not required.
  organizationName: 'buffett-archive',
  projectName: 'buffett-archive',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: ['/letters', '/concepts', '/companies', '/people'],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/buffett-archive/buffett-archive/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Metadata
      image: 'img/social-card.jpg',

      // Color scheme
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // Header
      navbar: {
        title: 'The Buffett Archive',
        logo: {
          alt: 'The Buffett Archive Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'lettersSidebar',
            position: 'left',
            label: 'Letters',
          },
          {
            type: 'docSidebar',
            sidebarId: 'conceptsSidebar',
            position: 'left',
            label: 'Concepts',
          },
          {
            type: 'docSidebar',
            sidebarId: 'companiesSidebar',
            position: 'left',
            label: 'Companies',
          },
          {
            type: 'docSidebar',
            sidebarId: 'peopleSidebar',
            position: 'left',
            label: 'People',
          },
          {
            href: 'https://github.com/buffett-archive/buffett-archive',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      // Footer
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Letters',
            items: [
              {
                label: 'Partnership Letters',
                to: '/docs/letters/partnership/intro',
              },
              {
                label: 'Berkshire Letters',
                to: '/docs/letters/berkshire/intro',
              },
              {
                label: 'Special Letters',
                to: '/docs/letters/special/intro',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Concepts',
                to: '/docs/concepts/intro',
              },
              {
                label: 'Companies',
                to: '/docs/companies/intro',
              },
              {
                label: 'People',
                to: '/docs/people/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/buffett-archive/buffett-archive',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Buffett Archive. Built with Docusaurus.`,
      },

      // Prism
      prism: {},

      // Table of contents
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
};

module.exports = config;
