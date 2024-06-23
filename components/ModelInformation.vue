<template>
  <div>
    <h3 class="heading">Model Naming</h3>

    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="sm:col-span-3">
        <label for="modelName" class="block text-sm font-medium text-gray-700">
          What's the classname for your model?
        </label>
        <div class="max-w-lg flex rounded-md shadow-sm mt-1">
          <input
            id="modelName"
            v-model="modelName"
            type="text"
            name="modelName"
            placeholder="Model name"
            class="block flex-1 py-2 px-3 m-0 w-full min-w-0 text-base leading-6 bg-white rounded border border-gray-300 border-solid appearance-none cursor-text sm:text-sm sm:leading-5 focus:border-blue-600 focus:outline-offset-2"
            @keypress="updateTableName()"
            @change="updateTableName()"
          >
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="tablename" class="block text-sm font-medium text-gray-700">
          What's the tablename for your model?
        </label>
        <div class="max-w-lg flex rounded-md shadow-sm mt-1">
          <input
            id="tablename"
            v-model="tableName"
            type="text"
            name="tablename"
            class="block flex-1 py-2 px-3 m-0 w-full min-w-0 text-base leading-6 bg-white rounded border border-gray-300 border-solid appearance-none cursor-text sm:text-sm sm:leading-5 focus:border-blue-600 focus:outline-offset-2"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useModuleStore } from '@/stores/moduleStore'
import { useModelStore } from '@/stores/modelStore'

const moduleStore = useModuleStore()
const modelStore = useModelStore()

const moduleName = computed({
  get: () => moduleStore.moduleName,
  set: (value) => moduleStore.setModuleName(value),
})

const modelName = computed({
  get: () => modelStore.name,
  set: (value) => modelStore.setName(value),
})

const tableName = computed({
  get: () => modelStore.tableName,
  set: (value) => modelStore.setTableName(value),
})

const vendorName = computed({
  get: () => moduleStore.vendorName,
  set: (value) => moduleStore.setVendorName(value),
})

const updateTableName = () => {
  const vendorName = moduleStore.vendorName.toLowerCase()
  const moduleName = moduleStore.moduleName.toLowerCase()
  const modelName = modelStore.name.toLowerCase()

  if (!vendorName || !moduleName || !modelName) {
    return
  }

  tableName.value = `${vendorName}_${moduleName}_${modelName}`
}

watch(moduleName, updateTableName)
watch(vendorName, updateTableName)

onMounted(() => {
  updateTableName()
})
</script>
