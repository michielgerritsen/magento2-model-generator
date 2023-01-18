const defaultState = () => ({
  vendorName: '',
  moduleName: '',
  includeModuleRegistration: false,
})

export const state = () => defaultState()

export const mutations = {
  setVendorName(state: any, text: string) {
    state.vendorName = text
  },

  setModuleName(state: any, text: string) {
    state.moduleName = text
  },

  setIncludeModuleRegistration(state: any, value: boolean) {
    state.includeModuleRegistration = value
  },

  reset(state: any) {
    Object.assign(state, defaultState())
  },
}
