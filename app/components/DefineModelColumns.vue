<template>
  <div>
    <h3 class="heading">Model Columns</h3>

    <div class="mt-6 -mb-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
      <div class="sm:col-span-6 hidden sm:block">
        <label for="fieldname" class="block text-sm font-medium text-gray-700">
          Fieldname
        </label>
      </div>

      <div class="sm:col-span-5 hidden sm:block">
        <label for="input_type" class="block text-sm font-medium text-gray-700">
          Input type
        </label>
      </div>
    </div>

    <ModelColumn
      v-for="(column, index) in columns"
      :key="index"
      :index="index"
      :column="column"
      :move-column-up="moveColumnUp"
      :move-column-down="moveColumnDown"
      :add-column="addColumn"
      :remove-column="removeColumn"
    />
  </div>
</template>

<script setup lang="ts">
import type ColumnInterface from '~/interfaces/ColumnInterface'
import { useTableStore } from '@/stores/tableStore';

const tableStore = useTableStore()

const addColumn = () => {
  tableStore.addColumn({
    fieldName: '',
    inputType: '',
  })
}

const removeColumn = (column: ColumnInterface) => {
  if (tableStore.columns.length > 1) {
    tableStore.removeColumn(column)
  }
}

const moveColumnUp = (column: ColumnInterface) => {
  tableStore.moveColumnUp(column)
}

const moveColumnDown = (column: ColumnInterface) => {
  tableStore.moveColumnDown(column)
}

const columns = tableStore.columns
</script>
