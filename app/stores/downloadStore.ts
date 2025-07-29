import { defineStore } from 'pinia'

export const useDownloadStore = defineStore('download', {
  state: () => ({
    includeNonMergable: true,
  }),

  actions: {
    setIncludeNonMergable(value: boolean) {
      this.includeNonMergable = value
    },
    reset() {
      this.includeNonMergable = true
    },
  },

  persist: true,
});

export type DownloadStore = ReturnType<typeof useDownloadStore>;
