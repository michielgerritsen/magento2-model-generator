const defaultState = () => ({
  includeNonMergable: true,
})

export const state = defaultState()

export const mutations = {
  setIncludeNonMergable(state: any, value: any) {
    state.includeNonMergable = value
  },
  reset(state: any) {
    state.includeNonMergable = true
  },
}
