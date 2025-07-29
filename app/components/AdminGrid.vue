<template>
  <div>
    <h3 class="heading">Admingrid</h3>

    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="sm:col-span-6">
        <div class="space-y-4">
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input
                id="enabled"
                v-model="enabled"
                name="enabled"
                type="checkbox"
                class="focus:ring-brand-blue h-4 w-4 text-brand-blue border-gray-300 rounded"
              >
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
                class="focus:ring-brand-blue h-4 w-4 text-brand-blue border-gray-300 rounded"
              >
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
                class="focus:ring-brand-blue h-4 w-4 text-brand-blue border-gray-300 rounded"
              >
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
                class="focus:ring-brand-blue h-4 w-4 text-brand-blue border-gray-300 rounded"
              >
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
                class="focus:ring-brand-blue h-4 w-4 text-brand-blue border-gray-300 rounded"
              >
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
                class="focus:ring-brand-blue h-4 w-4 text-brand-blue border-gray-300 rounded"
              >
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
                class="focus:ring-brand-blue h-4 w-4 text-brand-blue border-gray-300 rounded"
              >
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
                class="focus:ring-brand-blue h-4 w-4 text-brand-blue border-gray-300 rounded"
              >
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

      <div v-if="enabled" class="sm:col-span-3">
        <div class="space-y-4">
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input
                id="addToMenu"
                v-model="addToMenu"
                name="addToMenu"
                type="checkbox"
                class="focus:ring-brand-blue h-4 w-4 text-brand-blue border-gray-300 rounded"
              >
            </div>
            <div class="ml-3 text-sm">
              <label for="addToMenu" class="font-medium text-gray-700"
                >Add to admin menu</label
              >
              <p class="text-gray-500">
                Add a menu item to the admin menu for this model
              </p>

              <select
v-if="addToMenu" v-model="menuParent"
                      class="block flex-1 py-2 px-3 m-0 w-full min-w-0 text-base leading-6 bg-white rounded border border-gray-300 border-solid cursor-text sm:text-sm sm:leading-5 focus:border-blue-600 focus:outline-offset-2"
                 data-action="selectMenuParent"
              >
                <option value="">Select a parent item</option>
                <option value="Magento_Sales::sales_operation">Sales</option>
                <option value="Magento_Catalog::catalog">Catalog</option>
                <option value="Magento_Customer::customer">Customers</option>
                <option value="Magento_Backend::marketing">Marketing</option>
                <option value="Magento_Backend::content">Content</option>
                <option value="Magento_Reports::report">Reports</option>
                <option value="Magento_Backend::stores">Stores</option>
                <option value="Magento_Backend::system">System</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAdminGridStore } from '~/stores/adminGridStore'

const useAdminGrid = useAdminGridStore()

const enabled = computed({
  get: () => useAdminGrid.enabled,
  set: (value) => useAdminGrid.setEnabled(value),
})

const bookmarks = computed({
  get: () => useAdminGrid.bookmarks,
  set: (value) => useAdminGrid.setBookmarks(value),
})

const paging = computed({
  get: () => useAdminGrid.paging,
  set: (value) => useAdminGrid.setPaging(value),
})

const sticky = computed({
  get: () => useAdminGrid.sticky,
  set: (value) => useAdminGrid.setSticky(value),
})

const search = computed({
  get: () => useAdminGrid.search,
  set: (value) => useAdminGrid.setSearch(value),
})

const massactions = computed({
  get: () => useAdminGrid.massactions,
  set: (value) => useAdminGrid.setMassactions(value),
})

const filters = computed({
  get: () => useAdminGrid.filters,
  set: (value) => useAdminGrid.setFilters(value),
})

const newButton = computed({
  get: () => useAdminGrid.newButton,
  set: (value) => useAdminGrid.setNewButton(value),
})

const addToMenu = computed({
  get: () => useAdminGrid.addToMenu,
  set: (value) => useAdminGrid.setAddToMenu(value),
})

const menuParent = computed({
  get: () => useAdminGrid.menuParent,
  set: (value) => useAdminGrid.setMenuParent(value),
})
</script>
