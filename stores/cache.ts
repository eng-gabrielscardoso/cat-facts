export const useCacheStore = defineStore('cache', {
  state: () => ({
    facts: [] as any[],
  }),

  getters: {
    getFacts: (state) => state.facts,
    getFact: (state) => (index: number) => state.facts[index]
  },

  actions: {
    pushToCache(value: any) {
      this.facts.push(value)
    },
    
    popFromCache() {
      this.facts.pop()
    },

    updateCache(values: any[]) {
      this.facts = values
    },

    clearCache() {
      this.facts = []
    },

    getRandomFact() {
      return this.getFact(Math.floor(Math.random() * (this.facts.length + 1)))
    }
  },
});
