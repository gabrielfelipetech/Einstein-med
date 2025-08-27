// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';

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
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts'],
  vite: {
    plugins: [],
  },

  app: {
    head: {
      title: 'Einstein Med.AI',
    },
  },
  css: ['~/assets/css/tailwind.css', 'verita-components/dist/verita-components.css'],
  ignore: ['vite.lib.config.ts'],
});
