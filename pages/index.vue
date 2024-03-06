<script setup lang="ts">
const { company } = useAppConfig()

useHead({
  title: `${company} Cat Facts`,
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    },
    {
      name: 'description',
      content: `${company} cat facts page`
    },
    {
      name: 'application-name',
      content: `${company} Cat Facts Page`
    },
    {
      name: 'generator',
      content: 'Nuxt.js'
    },
    {
      name: 'keywords',
      content: 'information,cat,facts,defsafe'
    },
    {
      name: 'referrer',
      content: 'origin'
    },
    {
      name: 'color-scheme',
      content: 'dark light'
    },
    {
      name: 'creator',
      content: 'Gabriel Santos Cardoso'
    },
    {
      name: 'referrer',
      content: 'origin'
    },
    {
      name: 'publisher',
      content: 'Vercel'
    }
  ]
})
</script>

<template>
  <div
    class="bg-normal p-4 md:p-6 lg:p-8 xl:p-12 h-full max-h-fit flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-8">
    <HomeFact />
    <HomeMosaic />
  </div>
</template>