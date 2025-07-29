import { defineStore } from 'pinia'

export const useModuleStore = defineStore('module', {
  state: () => ({
    vendorName: '',
    moduleName: '',
    includeModuleRegistration: false,
    includeDataModels: false,
  }),

  actions: {
    setVendorName(text: string) {
      this.vendorName = text
    },
    setModuleName(text: string) {
      this.moduleName = text
    },
    setIncludeModuleRegistration(value: boolean) {
      this.includeModuleRegistration = value
    },
    setIncludeDataModels(value: boolean) {
      this.includeDataModels = value
    },
    reset() {
      this.vendorName = ''
      this.moduleName = ''
      this.includeModuleRegistration = false
      this.includeDataModels = false
    },
  },

  persist: true,
})

export type ModuleStore = ReturnType<typeof useModuleStore>;
