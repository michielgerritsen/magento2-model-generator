<template>
  <div>
    <h3 class="heading">Module Definition</h3>

    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
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
            class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded sm:text-sm border-gray-300"
          />
        </div>
      </div>

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
            class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded sm:text-sm border-gray-300"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    vendorName: {
      get() {
        return this.$store.state.module.vendorName
      },
      set(value) {
        this.$store.commit('module/setVendorName', value)
      },
    },
    moduleName: {
      get() {
        return this.$store.state.module.moduleName
      },
      set(value) {
        this.$store.commit('module/setModuleName', value)
      },
    },
  },
})
</script>
