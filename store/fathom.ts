const defaultState = () => ({
  triggered: false,
})

export const state = defaultState()

export const mutations = {
  setTriggered(state: any) {
    state.triggered = true
  },
  reset(state: any) {
    state.triggered = false
  },
}
