export const state = () => ({
  vendorName: '',
  moduleName: '',
})

export const mutations = {
  setVendorName(state: any, text: string) {
    state.vendorName = text
  },

  setModuleName(state: any, text: string) {
    state.moduleName = text
  },
}
