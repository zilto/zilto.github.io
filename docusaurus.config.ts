import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'More is more',
  tagline: 'by Thierry Jean',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  // url: 'https:/www.tjean.me',
  url: "https://tjean.me",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zilto', // Usually your GitHub org/user name.
  projectName: 'zilto.github.io', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            title: "MoreIsMore",
            description: "MoreIsMore blog feed by Thierry Jean.",
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Thierry Jean`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'More is more',
      logo: {
        alt: 'My Site Logo',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Portfolio',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/til', label: 'TIL', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {
          href: 'https://www.linkedin.com/in/thierry-jean/',
          label: "Let's connect",
          position: 'right',
        },
        {
          href: 'https://github.com/zilto',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© Copyright ${new Date().getFullYear()}, Thierry Jean. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-content-blog',
      {
        id: "today-i-learned",
        routeBasePath: "til",
        path: "./til",
        showReadingTime: true,
        blogSidebarTitle: 'Today I Learned',
        blogSidebarCount: 'ALL',
        feedOptions: {
          title: "Today I Learned",
          description: "TIL feed by Thierry Jean.",
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} Thierry Jean`,
          createFeedItems: async (params) => {
            const {blogPosts, defaultCreateFeedItems, ...rest} = params;
            return defaultCreateFeedItems({
              // keep only the 10 most recent blog posts in the feed
              blogPosts: blogPosts.filter((item, index) => index < 10),
              ...rest,
            });
          },
        },
      },
    ]
  ],
};

export default config;
