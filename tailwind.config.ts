import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ethlima: {
          blue: '#1a4e8a',
          lightBlue: '#3b82f6',
          dark: '#0f172a',
          purple: '#6d28d9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Docusaurus has its own preflight
  },
  darkMode: ['class', '[data-theme="dark"]'],
};

export default config;
