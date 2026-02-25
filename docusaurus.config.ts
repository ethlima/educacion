import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ethereum Lima — Educación',
  tagline: 'Documentación y recursos de la comunidad Ethereum Lima',
  favicon: 'img/favicon.webp',

  // ✅ Aquí va trailingSlash (nivel raíz)
  trailingSlash: false,



  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // TODO: set to the final production URL (e.g. https://educacion.ethlima.org or https://ethlima.github.io)
  url: 'https://ethlima.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/educacion/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ethlima', // Usually your GitHub org/user name.
  projectName: 'educacion', // Usually your repo name.

  onBrokenLinks: 'throw',


  markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'throw',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        
        // Disable blog routes entirely
        docs : false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],


  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'formacion',
        path: 'formacion',
        routeBasePath: 'formacion',
        sidebarPath: require.resolve('./sidebarsFormacion.ts'),
        editUrl: 'https://github.com/ethlima/educacion/tree/block/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cursos',
        path: 'cursos',
        routeBasePath: 'cursos',
        sidebarPath: require.resolve('./sidebarsCursos.ts'),
        editUrl: 'https://github.com/ethlima/educacion/tree/block/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contribuir',
        path: 'contribuir',
        routeBasePath: 'contribuir',
        sidebarPath: require.resolve('./sidebarsContribuir.ts'),
        editUrl: 'https://github.com/ethlima/educacion/tree/block/',
      },
    ],
  ],


  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },



    navbar: {
      title: 'Ethereum Lima',
      logo: {
        alt: 'Ethereum Lima',
        src: 'img/logo.webp',
      },


      items: [
       /* {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },*/
        {
          type: 'docSidebar',
          docsPluginId: 'formacion',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: 'Formación',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'cursos',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: 'Cursos',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'contribuir',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: 'Contribuir',
        },
        {
          href: 'https://github.com/ethlima/educacion',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Formación',
          items: [
            {
              label: 'Inicio',
              to: '/formacion/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ethlima',
            },
            {
              label: 'Ethereum Lima',
              href: 'https://ethlima.org',
            },
            {
              label: 'X',
              href: 'https://x.com/EthereumLima',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ethlima/educacion',
            },
          ],
        },
      ],
      copyright: `Contenido CC BY 4.0 · Código MIT — Copyright © ${new Date().getFullYear()} Ethereum Lima.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
