<template>
  <div class="-mt-4">
    <button
      type="button"
      class="float-right inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click="reset"
    >
      Reset
    </button>

    <h3 class="heading">Module Definition</h3>

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
            class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded sm:text-sm border-gray-300"
          />
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

  methods: {
    reset() {
      this.$store.commit('admingrid/reset')
      this.$store.commit('model/reset')
      this.$store.commit('module/reset')
      this.$store.commit('table/reset')
    },
  },
})
</script>
