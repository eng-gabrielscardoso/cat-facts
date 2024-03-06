export const useCacheStore = defineStore('cache', {
  state: () => ({
    facts: [] as any[],
  }),

  getters: {
    getFacts: (state) => state.facts,
    getFact: (state) => (index: number) => state.facts[index]
  },

  actions: {
    async feedCache() {
      const { data } = await useFetch('/api/facts')

      await this.updateCache(data as unknown as any[])
    },

    pushToCache(value: any) {
      this.facts.push(value)
    },
    
    popFromCache() {
      this.facts.pop()
    },

    removeFromCache(value: any) {
      const index = this.facts.indexOf(value)

      if (index !== -1) {
        this.facts.splice(index, 1)
      }
    },

    updateCache(values: any[]) {
      this.facts = values
    },

    clearCache() {
      this.facts = []
    },

    getRandomFact() {
      return this.facts[Math.floor(Math.random() * (this.facts.length + 1))]
    }
  },
});
