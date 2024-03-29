// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
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
