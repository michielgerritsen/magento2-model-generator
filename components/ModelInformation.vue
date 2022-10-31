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
            class="flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded sm:text-sm border-gray-300"
            @keypress="updateTableName()"
            @change="updateTableName()"
          />
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
            class="flex-1 block w-full focus:ring-green-500 focus:border-green-500 min-w-0 rounded sm:text-sm border-gray-300"
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
    moduleName() {
      return this.$store.state.module.moduleName
    },
    vendorName() {
      return this.$store.state.module.vendorName
    },

    modelName: {
      get() {
        return this.$store.state.model.name
      },
      set(value) {
        this.$store.commit('model/setName', value)
      },
    },
    tableName: {
      get() {
        return this.$store.state.model.tableName
      },
      set(value) {
        this.$store.commit('model/setTableName', value)
      },
    },
  },

  watch: {
    moduleName() {
      this.updateTableName()
    },
    vendorName() {
      this.updateTableName()
    },
  },

  mounted() {
    this.updateTableName()
  },

  methods: {
    updateTableName() {
      const vendorName = this.$store.state.module.vendorName.toLowerCase()
      const moduleName = this.$store.state.module.moduleName.toLowerCase()
      const modelName = this.modelName.toLowerCase()

      if (!vendorName || !moduleName || !modelName) {
        return
      }

      this.tableName = vendorName + '_' + moduleName + '_' + modelName
    },
  },
})
</script>
