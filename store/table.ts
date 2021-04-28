import ColumnInterface from '~/interfaces/ColumnInterface'

export const state = () => ({
  columns: [
    {
      fieldName: 'entity_id',
      inputType: 'integer',
    },
    {
      fieldName: '',
      inputType: '',
    },
  ],
})

export const mutations = {
  addColumn(state: any, column: ColumnInterface) {
    state.columns.push(column)
  },

  updateColumn(state: any, data: any) {
    state.columns.splice(data.index, 1, data.column)
  },

  removeColumn(state: any, column: ColumnInterface) {
    state.columns.splice(state.columns.indexOf(column), 1)
  },
}
