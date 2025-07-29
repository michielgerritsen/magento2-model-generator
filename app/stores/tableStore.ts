import { defineStore } from 'pinia'
import type ColumnInterface from '~/interfaces/ColumnInterface'

export const useTableStore = defineStore('table', {
  state: () => ({
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
  }),

  actions: {
    moveColumnUp(column: ColumnInterface) {
      const index = this.columns.indexOf(column)
      if (index > 0) {
        const [removedColumn] = this.columns.splice(index, 1)
        this.columns.splice(index - 1, 0, removedColumn)
      }
    },

    moveColumnDown(column: ColumnInterface) {
      const index = this.columns.indexOf(column)
      if (index < this.columns.length - 1) {
        const [removedColumn] = this.columns.splice(index, 1)
        this.columns.splice(index + 1, 0, removedColumn)
      }
    },

    addColumn(column: ColumnInterface) {
      this.columns.push(column)
    },

    updateColumn(data: ColumnInterface) {
      this.columns.splice(data.index, 1, data.column)
    },

    removeColumn(column: ColumnInterface) {
      this.columns.splice(this.columns.indexOf(column), 1)
    },

    reset() {
      this.columns = [
        {
          fieldName: 'entity_id',
          inputType: 'int',
        },
        {
          fieldName: '',
          inputType: '',
        },
      ]
    },
  },

  persist: true,
})

export type TableStore = ReturnType<typeof useTableStore>;
