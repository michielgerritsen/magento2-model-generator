interface Model {
  name: string
  tableName: string
}

const defaultState = () => ({
  name: '',
  tableName: '',
})

export const state = defaultState()

export const mutations = {
  setName(state: any, text: string) {
    state.name = text
  },

  setTableName(state: any, text: string) {
    state.tableName = text
  },

  reset(state: any) {
    Object.assign(state, defaultState())
  },
}
