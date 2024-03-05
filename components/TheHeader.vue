<script setup lang="ts">
const { company } = useAppConfig()
</script>

<template>
  <header class="bg-primary p-12">
    <h1 class="uppercase font-bold text-default text-6xl text-center">
      The {{ company }} cat facts page
    </h1>
  </header>
</template>