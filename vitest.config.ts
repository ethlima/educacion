import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@docusaurus/Link': path.resolve(__dirname, './src/test/mocks/Link.tsx'),
      '@site': path.resolve(__dirname, '.'),
      '@src': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}', 'docs/**/*.test.{ts,tsx}'],
  },
});
