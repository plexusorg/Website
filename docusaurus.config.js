// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plex',
  tagline: 'Welcome to the website and documentation for Plex!',
  url: 'https://docs.plex.us.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'plexusorg',
  projectName: 'Website',

  presets: [
  [
  'classic',
  /** @type {import('@docusaurus/preset-classic').Options} */
  ({
    docs: {
      sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/plexusorg/Website/tree/master',
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
      title: 'Plex',
      logo: {
        alt: 'Plex Logo',
        src: 'img/plexlogo.png',
      },
      items: [
      {
        type: 'doc',
        docId: 'intro',
        position: 'left',
        label: 'Introduction',
      },
      {
       type: 'doc',
       docId: 'compiling',
       position: 'left',
       label: 'Compiling',
     },
      {
       type: 'doc',
       docId: 'permissions',
       position: 'left',
       label: 'Permissions',
     },
     {
       position: 'left',
       label: 'Javadocs',
       to: 'pathname:///javadoc',
     },
     {
       position: 'left',
       label: 'Downloads',
       to: 'https://ci.plex.us.org',
     },
     {
      position: 'right',
      label: 'GitHub',
      href: 'https://github.com/plexusorg',
    },
    ],
  },
  footer: {
    style: 'dark',
    links: [
    {
      title: 'Docs',
      items: [
      {
        label: 'Introduction',
        to: '/docs/intro',
      },
      {
        label: 'Compiling',
        to: '/docs/compiling',
      },
      {
        label: 'Permissions',
        to: '/docs/permissions',
      },
      {
        label: 'Javadocs',
        to: 'pathname:///javadoc',
      },
      {
        label: 'Downloads',
        to: 'https://ci.plex.us.org',
      },
      ],
    },
    {
      title: 'Community',
      items: [
      {
        label: 'Discord',
        href: 'https://discord.gg/MzjRjFAcrZ',
      },
      ],
    },
    {
      title: 'GitHub',
      items: [
      {
        label: 'Plex',
        href: 'https://github.com/plexusorg/Plex',
      },
      {
        label: 'Docs',
        href: 'https://github.com/plexusorg/Website',
      }
      ],
    },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Plexus Development. Symbols from <a href="https://fontawesome.com/license">FontAwesome</a>. Built with Docusaurus.`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
    additionalLanguages: ['bash'],
  },
}),
};

module.exports = config;
