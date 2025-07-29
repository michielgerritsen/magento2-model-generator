import { defineStore } from 'pinia'

export const useFathomStore = defineStore('fathom', {
  state: () => ({
    triggered: false,
  }),

  actions: {
    setTriggered() {
      this.triggered = true
    },
    reset() {
      this.triggered = false
    },
  },

  persist: true,
})

export type FathomStore = ReturnType<typeof useFathomStore>;
