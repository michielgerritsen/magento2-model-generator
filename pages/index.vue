<template>
  <div class="min-h-screen bg-gray-100">
    <header class="pb-24 bg-indigo-600">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
          class="relative py-5 flex items-center justify-center lg:justify-between"
        >
          <div class="absolute left-0 flex-shrink-0 lg:static">
            <a href="https://www.controlaltdelete.nl" target="_blank">
              <span class="sr-only"
                >Control Alt Delete - Admin Grid Generator</span
              >
              <img
                class="h-8 w-auto"
                src="~/assets/control-alt-delete-logo.png"
                alt="Workflow"
              />
            </a>
          </div>
        </div>
      </div>
    </header>

    <main class="-mt-24 pb-8">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Magento 2 model generator</h1>
        <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <section aria-labelledby="section-1-title">
              <h2 id="section-1-title" class="sr-only">Enter model details</h2>
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  <div class="space-y-8 divide-y divide-gray-200">
                    <ModuleName />

                    <Model />

                    <DefineColumns />

                    <AdminGrid />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4">
            <section aria-labelledby="section-2-title">
              <h2 id="section-2-title" class="sr-only">File list</h2>
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  <TopSidebar />
                </div>
              </div>
            </section>

            <section aria-labelledby="section-2-title">
              <h2 id="section-2-title" class="sr-only">File list</h2>
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  <BottomSidebar />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div
          class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left"
        >
          <span class="block sm:inline">
            &copy; {{ year }}
            <a href="https://www.controlaltdelete.nl/">Control Alt Delete</a>
            and
            <a href="https://www.michiel-gerritsen.com/"
              >Michiel Gerritsen.com</a
            >.
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
})
</script>
