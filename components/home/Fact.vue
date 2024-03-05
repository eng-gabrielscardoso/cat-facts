<script setup lang="ts">
const { apiBaseUrl} = useAppConfig()

const fact = ref<string|unknown>()
const isLoading = ref<boolean>(false)

async function getNewFact() {
  try {
    isLoading.value = true
    const data = await $fetch(apiBaseUrl as string)
    fact.value = (data as any).data[0]
  } catch (err: any) {
    isLoading.value = false
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

onBeforeMount(async () => {
  if (isNil(fact.value)) getNewFact()
})
</script>

<template>
  <div class="flex flex-col gap-8 w-full md:w-5/12">
    <div>
      <h2 class="text-primary uppercase text-4xl font-bold">
        Cat fact:
      </h2>
    </div>
    <div>
      <p v-if="isLoading" class="text-secondary text-4xl">
        <Icon name="material-symbols:refresh" class="animate-spin" /> Finding some cacts 🐱...
      </p>
      <p v-else class="text-secondary text-4xl">
        {{ fact }}
      </p>
    </div>
    <div>
      <button @click="getNewFact" :disabled="isLoading" :class="`bg-secondary text-default px-8 py-4 font-bold text-4xl flex items-center gap-5 uppercase shadow-xl rounded-xl hover:bg-primary hover:text-normal transition-colors ${isLoading ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`">
        <Icon name="material-symbols:refresh" :class="`${isLoading ? 'animate-spin' : ''}`" />
          Get a random cat fact
      </button>
    </div>
  </div>
</template>