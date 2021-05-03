const defaultState = () => ({
  vendorName: '',
  moduleName: '',
})

export const state = () => defaultState()

export const mutations = {
  setVendorName(state: any, text: string) {
    state.vendorName = text
  },

  setModuleName(state: any, text: string) {
    state.moduleName = text
  },

  reset(state: any) {
    Object.assign(state, defaultState())
  },
}
