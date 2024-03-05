// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-lodash',
    'nuxt-icon',
  ],

  devtools: { enabled: true },

  googleFonts: {
    display: 'swap',
    families: {
      Jost: true,
      jost: true,
    }
  }
})
