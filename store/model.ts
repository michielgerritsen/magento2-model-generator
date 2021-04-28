interface Model {
  name: string
  tableName: string
}

export const state = () => ({
  name: '',
  tableName: '',
})

export const mutations = {
  setName(state: any, text: string) {
    state.name = text
  },

  setTableName(state: any, text: string) {
    state.tableName = text
  },
}
