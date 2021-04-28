<template>
  <div>
    <h3 class="heading">Admingrid</h3>

    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="sm:col-span-6">
        <div class="mt-4 space-y-4">
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input
                id="enabled"
                v-model="enabled"
                name="enabled"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="enabled" class="font-medium text-gray-700"
                >Enabled</label
              >
            </div>
          </div>
        </div>
      </div>

      <div v-if="enabled" class="sm:col-span-3">
        <div class="space-y-4">
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input
                id="bookmarks"
                v-model="bookmarks"
                name="bookmarks"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="bookmarks" class="font-medium text-gray-700"
                >Bookmarks</label
              >
              <p class="text-gray-500">
                Allows users to sort columns and create specific views.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="enabled" class="sm:col-span-3">
        <div class="space-y-4">
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input
                id="paging"
                v-model="paging"
                name="paging"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="paging" class="font-medium text-gray-700"
                >Paging</label
              >
              <p class="text-gray-500">
                Users get to navigate trough big data sets.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="enabled" class="sm:col-span-3">
        <div class="space-y-4">
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input
                id="sticky"
                v-model="sticky"
                name="sticky"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="sticky" class="font-medium text-gray-700"
                >Sticky</label
              >
              <p class="text-gray-500">Make the top bar sticky.</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="enabled" class="sm:col-span-3">
        <div class="space-y-4">
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input
                id="search"
                v-model="search"
                name="search"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="search" class="font-medium text-gray-700"
                >Search</label
              >
              <p class="text-gray-500">Allow fulltext search.</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="enabled" class="sm:col-span-3">
        <div class="space-y-4">
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input
                id="massactions"
                v-model="massactions"
                name="massactions"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="massactions" class="font-medium text-gray-700"
                >Massactions</label
              >
              <p class="text-gray-500">
                Users can execute massactions (update, delete)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="enabled" class="sm:col-span-3">
        <div class="space-y-4">
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input
                id="filters"
                v-model="filters"
                name="filters"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="filters" class="font-medium text-gray-700"
                >Filters</label
              >
              <p class="text-gray-500">
                Allow users to filter on specific fields
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="enabled" class="sm:col-span-3">
        <div class="space-y-4">
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input
                id="newButton"
                v-model="newButton"
                name="newButton"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="newButton" class="font-medium text-gray-700"
                >New button</label
              >
              <p class="text-gray-500">
                Add a new button to let user add a new entity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    enabled: {
      get() {
        return this.$store.state.admingrid.enabled
      },
      set(value) {
        this.$store.commit('admingrid/setEnabled', value)
      },
    },
    bookmarks: {
      get() {
        return this.$store.state.admingrid.bookmarks
      },
      set(value) {
        this.$store.commit('admingrid/setBookmarks', value)
      },
    },
    paging: {
      get() {
        return this.$store.state.admingrid.paging
      },
      set(value) {
        this.$store.commit('admingrid/setPaging', value)
      },
    },
    sticky: {
      get() {
        return this.$store.state.admingrid.sticky
      },
      set(value) {
        this.$store.commit('admingrid/setSticky', value)
      },
    },
    search: {
      get() {
        return this.$store.state.admingrid.search
      },
      set(value) {
        this.$store.commit('admingrid/setSearch', value)
      },
    },
    massactions: {
      get() {
        return this.$store.state.admingrid.massactions
      },
      set(value) {
        this.$store.commit('admingrid/setMassactions', value)
      },
    },
    filters: {
      get() {
        return this.$store.state.admingrid.filters
      },
      set(value) {
        this.$store.commit('admingrid/setFilters', value)
      },
    },
    newButton: {
      get() {
        return this.$store.state.admingrid.newButton
      },
      set(value) {
        this.$store.commit('admingrid/setNewButton', value)
      },
    },
  },
})
</script>
