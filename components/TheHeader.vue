<script setup lang="ts">
const { company } = useAppConfig()
</script>

<template>
  <header class="bg-primary p-6 lg:p-8 xl:p-12">
    <h1 class="uppercase font-bold text-default text-xl md:text-2xl lg:text-4xl xl:text-6xl text-center">
      The {{ company }} cat facts page
    </h1>
  </header>
</template>