// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: {enabled: true},
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    "@nuxt/eslint",
    ...(process.env.NODE_ENV === 'production' ? ['nuxt-fathom'] : [])
  ],

  css: [
    '~/assets/css/main.css',
  ],

  fathom: {
    siteId: "BKQYZZYA",
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],

    server: {
      allowedHosts: ['magento2-model-generator.test'],

      hmr: {
        protocol: 'wss',
      },
    },
  },
})