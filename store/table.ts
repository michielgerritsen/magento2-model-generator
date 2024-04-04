import ColumnInterface from '~/interfaces/ColumnInterface'

const defaultState = () => ({
  columns: [
    {
      fieldName: 'entity_id',
      inputType: 'int',
    },
    {
      fieldName: '',
      inputType: '',
    },
  ],
})

export const state = defaultState()

export const mutations = {
  moveColumnUp(state: any, column: ColumnInterface) {
    const index = state.columns.indexOf(column)
    if (index > 0) {
      const [removedColumn] = state.columns.splice(index, 1)
      state.columns.splice(index - 1, 0, removedColumn)
    }
  },

  moveColumnDown(state: any, column: ColumnInterface) {
    const index = state.columns.indexOf(column)
    if (index < state.columns.length - 1) {
      const [removedColumn] = state.columns.splice(index, 1)
      state.columns.splice(index + 1, 0, removedColumn)
    }
  },

  addColumn(state: any, column: ColumnInterface) {
    state.columns.push(column)
  },

  updateColumn(state: any, data: any) {
    state.columns.splice(data.index, 1, data.column)
  },

  removeColumn(state: any, column: ColumnInterface) {
    state.columns.splice(state.columns.indexOf(column), 1)
  },

  reset(state: any) {
    Object.assign(state, defaultState())
  },
}
