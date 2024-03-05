// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
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
