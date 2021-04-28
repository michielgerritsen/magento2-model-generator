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

    <Column
      v-for="(column, index) in columns"
      :key="index"
      :index="index"
      :column="column"
      :add-column="addColumn"
      :remove-column="removeColumn"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ColumnInterface from '~/interfaces/ColumnInterface'

export default Vue.extend({
  data() {
    return {
      fieldName: '',
      inputType: '',
    }
  },

  computed: {
    columns() {
      return this.$store.state.table.columns
    },
  },

  methods: {
    addColumn() {
      this.$store.commit('table/addColumn', {
        fieldName: '',
        inputType: '',
      })
    },

    removeColumn(column: ColumnInterface) {
      if (this.columns.length > 1) {
        this.$store.commit('table/removeColumn', column)
      }
    },
  },
})
</script>
