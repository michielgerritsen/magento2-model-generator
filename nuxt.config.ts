// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {enabled: true},
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    "@nuxt/eslint",
    ...(process.env.NODE_ENV === 'production' ? ['nuxt-fathom'] : [])
  ],

  fathom: {
    siteId: "BKQYZZYA",
  },

  vite: {
    server: {
      allowedHosts: ['magento2-model-generator.test'],

      hmr: {
        protocol: 'wss',
      },
    },
  },
})