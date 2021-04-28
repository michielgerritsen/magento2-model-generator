<template>
  <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">
    <div class="sm:col-span-4">
      <label
        for="fieldname"
        class="block text-sm font-medium text-gray-700 sm:hidden"
      >
        Fieldname
      </label>

      <input
        v-model="fieldName"
        type="text"
        name="fieldname"
        class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded sm:text-sm border-gray-300"
      />
    </div>

    <div class="sm:col-span-3">
      <label
        for="input_type"
        class="block text-sm font-medium text-gray-700 sm:hidden"
      >
        Input type
      </label>

      <select
        v-model="inputType"
        name="input_type"
        autocomplete="input_type"
        class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded sm:text-sm border-gray-300"
      >
        <option value="">Please select</option>
        <option value="datetime">Datetime</option>
        <option value="integer">Integer</option>
        <option value="text">Text</option>
        <option value="varchar">Varchar</option>
      </select>
    </div>

    <div class="sm:col-span-1 relative">
      <svg
        @click="addColumn"
        class="w-6 h-6 inline-block mt-1 cursor-pointer"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clip-rule="evenodd"
        ></path>
      </svg>

      <svg
        @click="removeColumn(column)"
        class="w-6 h-6 inline-block mt-1 cursor-pointer"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ColumnInterface from '~/interfaces/ColumnInterface'

export default Vue.extend({
  props: {
    index: Number,
    column: Object as () => ColumnInterface,
    addColumn: Function,
    removeColumn: Function,
  },

  computed: {
    fieldName: {
      get(): any {
        return this.column.fieldName
      },
      set(value: string): any {
        this.$store.commit('table/updateColumn', {
          index: this.$props.index,
          column: {
            fieldName: value,
            inputType: this.column.inputType,
          },
        })
      },
    },
    inputType: {
      get(): any {
        return this.column.inputType
      },
      set(value: string): any {
        this.$store.commit('table/updateColumn', {
          index: this.$props.index,
          column: {
            inputType: value,
            fieldName: this.column.fieldName,
          },
        })
      },
    },
  },
})
</script>
