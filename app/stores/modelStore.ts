import { defineStore } from 'pinia'

export const useModelStore = defineStore('model', {
  state: () => ({
    name: '',
    tableName: '',
  }),

  actions: {
    setName(text: string) {
      this.name = text
    },
    setTableName(text: string) {
      this.tableName = text
    },
    reset() {
      this.name = ''
      this.tableName = ''
    },
  },

  persist: true,
})

export type ModelStore = ReturnType<typeof useModelStore>;
