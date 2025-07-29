<template>
  <div class="-mt-4">
    <button
      type="button"
      class="float-right inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-400 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      @click="reset"
    >
      Reset
    </button>

    <h3 class="mx-0 mt-6 mb-0 text-lg font-medium leading-6 text-gray-900">
      Module Definition
    </h3>

    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="mt-1 sm:mt-0 sm:col-span-3">
        <label for="vendor" class="block text-sm font-medium text-gray-700">
          Vendor name
        </label>
        <div class="max-w-lg flex rounded-md shadow-sm mt-1">
          <input
            id="vendor"
            v-model="vendorName"
            type="text"
            name="vendor"
            placeholder="VendorNameExample"
            class="block flex-1 py-2 px-3 m-0 w-full min-w-0 text-base leading-6 bg-white rounded border border-gray-300 border-solid appearance-none cursor-text sm:text-sm sm:leading-5 focus:border-blue-600 focus:outline-offset-2"
          >
        </div>
      </div>

      <div class="mt-1 sm:mt-0 sm:col-span-3">
        <label for="module" class="block text-sm font-medium text-gray-700">
          Module name
        </label>
        <div class="max-w-lg flex rounded-md shadow-sm mt-1">
          <input
            id="module"
            v-model="moduleName"
            type="text"
            name="module"
            placeholder="MyCustomModule"
            class="block flex-1 py-2 px-3 m-0 w-full min-w-0 text-base leading-6 bg-white rounded border border-gray-300 border-solid appearance-none cursor-text sm:text-sm sm:leading-5 focus:border-blue-600 focus:outline-offset-2"
          >
        </div>
      </div>

      <div class="mt-1 sm:mt-0 sm:col-span-6">
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id="includeModuleRegistration"
              v-model="includeModuleRegistration"
              name="includeModuleRegistration"
              type="checkbox"
              class="focus:ring-green-500 h-4 w-4 text-green-400 border-gray-300 rounded"
            >
          </div>
          <div class="ml-3 text-sm">
            <label
              for="includeModuleRegistration"
              class="font-medium text-gray-700"
            >
              Include module registration (module.xml and registration.php)
            </label>
          </div>
        </div>
      </div>

      <div class="mt-1 sm:mt-0 sm:col-span-6">
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id="includeDataModels"
              v-model="includeDataModels"
              name="includeDataModels"
              type="checkbox"
              class="focus:ring-green-500 h-4 w-4 text-green-400 border-gray-300 rounded"
            >
          </div>
          <div class="ml-3 text-sm">
            <label for="includeDataModels" class="font-medium text-gray-700">
              Use data models
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAdminGridStore } from '~/stores/adminGridStore'
import { useDownloadStore } from '~/stores/downloadStore'
import { useFathomStore } from '~/stores/fathomStore'
import { useModelStore } from '~/stores/modelStore'
import { useModuleStore } from '~/stores/moduleStore'
import { useTableStore } from '~/stores/tableStore'

const adminGridStore = useAdminGridStore()
const downloadStore = useDownloadStore()
const fathomStore = useFathomStore()
const modelStore = useModelStore()
const moduleStore = useModuleStore()
const tableStore = useTableStore()

const vendorName = computed({
  get: () => moduleStore.vendorName,
  set: (value) => moduleStore.setVendorName(value),
})

const moduleName = computed({
  get: () => moduleStore.moduleName,
  set: (value) => moduleStore.setModuleName(value),
})

const includeModuleRegistration = computed({
  get: () => moduleStore.includeModuleRegistration,
  set: (value) => moduleStore.setIncludeModuleRegistration(value),
})

const includeDataModels = computed({
  get: () => moduleStore.includeDataModels,
  set: (value) => moduleStore.setIncludeDataModels(value),
})

const reset = () => {
  adminGridStore.reset()
  downloadStore.reset()
  fathomStore.reset()
  modelStore.reset()
  moduleStore.reset()
  tableStore.reset()
}
</script>
