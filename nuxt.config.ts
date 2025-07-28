// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [
    '~/components',            
    { path: 'node_modules/verita-components/dist', extensions: ['.js', '.vue'] }],
plugins: [
    '~/plugins/verita-components'    
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Einstein Med.AI',
    },
  },
  css: [
    '~/assets/css/tailwind.css',
    'verita-components/dist/verita-components.css',
  ],
})