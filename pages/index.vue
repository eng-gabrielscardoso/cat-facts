<script setup lang="ts">
const { apiBaseUrl} = useAppConfig()

const fact = ref<string|unknown>()

async function getNewFact() {
  try {
    const data = await $fetch(apiBaseUrl as string)
    
    fact.value = (data as any).data[0]
  } catch (err: any) {
    console.error(err)
  }
}

onBeforeMount(async () => {
  if (isNil(fact.value)) {
    getNewFact()
  }
})
</script>

<template>
  <div>
    <p>
      {{fact}}
    </p>
    <button @click="getNewFact">
      <Icon name="ic:baseline-refresh" />
      Get a random cat fact
    </button>
  </div>
</template>