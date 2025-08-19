// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-29',
  devtools: { enabled: true },
  components: [
    '~/components',
    {
      path: 'node_modules/verita-components/dist',
      extensions: ['.js', '.vue'],
    },
  ],
  plugins: ['~/plugins/verita-components'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
  ],
  vite: {
    plugins: [
      eslintPlugin({
        include: ['**/*.{js,ts,vue}'],
        fix: true,
        cache: false,
      }),
    ],
  },

  app: {
    head: {
      title: 'Einstein Med.AI',
    },
  },
  css: ['~/assets/css/tailwind.css', 'verita-components/dist/verita-components.css'],
  ignore: ['vite.lib.config.ts'],
});
