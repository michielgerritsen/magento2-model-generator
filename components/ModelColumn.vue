<template>
  <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
    <div class="flex flex-col sm:col-span-1">
      <svg
        class="w-4 h-4 cursor-pointer"
        data-slot="icon"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        @click="moveColumnUp(column)"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 15.75 7.5-7.5 7.5 7.5"
        />
      </svg>

      <svg
        class="w-4 h-4 cursor-pointer"
        data-slot="icon"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        @click="moveColumnDown(column)"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>

    <div class="sm:col-span-6">
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
        class="block flex-1 py-2 px-3 m-0 w-full min-w-0 text-base leading-6 bg-white rounded border border-gray-300 border-solid appearance-none cursor-text sm:text-sm sm:leading-5 focus:border-blue-600 focus:outline-offset-2"
      >
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
        class="block flex-1 py-2 px-3 m-0 w-full min-w-0 text-base leading-6 bg-white rounded border border-gray-300 border-solid appearance-none cursor-text sm:text-sm sm:leading-5 focus:border-blue-600 focus:outline-offset-2"
      >
        <option value="">Please select</option>
        <optgroup label="Int">
          <option value="int">Integer</option>
          <option value="smallint">Smallint</option>
          <option value="bigint">Bigint</option>
        </optgroup>
        <optgroup label="Number">
          <option value="float">Float</option>
          <option value="decimal">Decimal</option>
        </optgroup>
        <optgroup label="Text">
          <option value="text">Text</option>
          <option value="varchar">Varchar</option>
        </optgroup>
        <optgroup label="Time">
          <option value="datetime">Datetime</option>
          <option value="timestamp">Timestamp</option>
        </optgroup>
      </select>
    </div>

    <div class="sm:col-span-2 relative">
      <svg
        data-action="addRow"
        class="w-6 h-6 inline-block mt-1 cursor-pointer"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        @click="addColumn"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clip-rule="evenodd"
        />
      </svg>

      <svg
        data-action="deleteRow"
        class="w-6 h-6 inline-block mt-1 cursor-pointer"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        @click="removeColumn(column)"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed , defineProps } from 'vue'
import type ColumnInterface from '@/interfaces/ColumnInterface'
import { useTableStore } from '@/stores/tableStore'

type MoveColumnUp = () => void;
type MoveColumnDown = () => void;
type AddColumn = () => void;
type RemoveColumn = () => void;

const props = defineProps<{
  index?: number,
  column?: ColumnInterface,
  moveColumnUp?: MoveColumnUp,
  moveColumnDown?: MoveColumnDown,
  addColumn?: AddColumn,
  removeColumn?: RemoveColumn,
}>()

const tableStore = useTableStore()

const fieldName = computed({
  get: () => props.column?.fieldName,
  set: (value: string) => {
    tableStore.updateColumn({
      index: props.index,
      column: {
        fieldName: value,
        inputType: props.column?.inputType,
      },
    })
  },
})

const inputType = computed({
  get: () => props.column?.inputType,
  set: (value: string) => {
    tableStore.updateColumn({
      index: props.index,
      column: {
        inputType: value,
        fieldName: props.column?.fieldName,
      },
    })
  },
})
</script>
