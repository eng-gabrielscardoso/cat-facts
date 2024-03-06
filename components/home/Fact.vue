<script setup lang="ts">
const cache = useCacheStore()

const fact = ref<string | unknown>()
const isLoading = ref<boolean>(false)
const error = ref<string>()

onMounted(async () => {
  if (isEmpty(cache.facts)) {
    try {
      isLoading.value = true
      await cache.feedCache()
      fact.value = cache.getRandomFact()
    } catch (err: any) {
      isLoading.value = false
      error.value = err
    } finally {
      isLoading.value = false
    }
  } else {
    fact.value = cache.getRandomFact()
  }
})

async function getNewFact() {
  try {
    isLoading.value = true

    if (!isEmpty(cache.facts)) {
      fact.value = cache.getRandomFact()
      cache.removeFromCache(fact.value)
    } else {
      const { data } = await useFetch('/api/fact')
      fact.value = data
    }
  } catch (err: any) {
    isLoading.value = false
    error.value = err
  } finally {
    isLoading.value = false

    if (isEmpty(cache.facts)) {
      cache.feedCache()
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-4 lg:gap-8 w-full md:w-5/12">
    <div>
      <h2 class="text-primary uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
        Cat fact:
      </h2>
    </div>
    <div>
      <p v-if="isLoading" class="text-secondary text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        <Icon name="material-symbols:refresh" class="animate-spin" /> Finding some facts 🐱...
      </p>
      <p v-else class="text-secondary text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {{ !isEmpty(error) ? `It's seems we had an error 😱. ${error}` : fact }}
      </p>
    </div>
    <div>
      <button @click="getNewFact" :disabled="isLoading"
        :class="`bg-secondary text-default px-4 lg:px-8 py-2 lg:py-4 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl flex items-center gap-2 lg:gap-4 uppercase shadow-xl rounded-xl hover:bg-primary hover:text-normal transition-colors ${isLoading ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`">
        <Icon name="material-symbols:refresh" :class="`${isLoading ? 'animate-spin' : ''}`" />
        Get a random cat fact
      </button>
    </div>
  </div>
</template>