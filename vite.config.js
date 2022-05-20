/// <reference types="vitest" />

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '@test': '/src/ts/utils/test.ts',
    },
  },
  plugins: [
    reactRefresh({
      parserPlugins: ['optionalChaining', 'objectRestSpread', 'nullishCoalescingOperator'],
    }),
    reactSvgPlugin({
      defaultExport: 'component',
    }),
  ],
});
