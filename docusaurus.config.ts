import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ethereum Lima Academy',
  tagline: 'Educación descentralizada desde Lima para el mundo',
  favicon: 'img/favicon.webp',

  url: 'https://ethlima.github.io',
  baseUrl: '/educacion/', // Set the /<baseUrl>/ pathname under which your site is served
  organizationName: 'ethlima',
  projectName: 'educacion',

  onBrokenLinks: 'throw',
  markdown: {
    format: 'detect',
    mermaid: false,
    preprocessor: undefined,
    mdx1Compat: {
      admonitions: true,
      comments: true,
      headingIds: true,
    },
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  future: {
    v4: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ethlima/educacion/tree/block/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Content versioning strategy
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Canary 🧪 (block)',
              path: '',
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ethlima/educacion/tree/block/',
        },
        theme: {
          customCss: './src/styles/globals.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Academy',
      logo: {
        alt: 'Ethereum Lima Logo',
        src: 'img/logo.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'rutasSidebar',
          position: 'left',
          label: 'Rutas',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cursosSidebar',
          position: 'left',
          label: 'Cursos',
        },
        {
          type: 'docSidebar',
          sidebarId: 'recursosSidebar',
          position: 'left',
          label: 'Recursos',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
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
          title: 'Educación',
          items: [
            { label: 'Empieza Aquí', to: '/docs/empieza-aqui' },
            { label: 'Rutas de Aprendizaje', to: '/docs/rutas/intro' },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            { label: 'Ethereum Lima', href: 'https://ethlima.org' },
            { label: 'X (Twitter)', href: 'https://x.com/EthereumLima' },
            { label: 'GitHub', href: 'https://github.com/ethlima' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Licencia CC BY 4.0', href: 'https://creativecommons.org/licenses/by/4.0/' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Ethereum Lima. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
