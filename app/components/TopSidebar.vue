<template>
  <div class="-mt-4">
    <div class="float-right">
      <a
        href="https://github.com/michielgerritsen/magento2-model-generator"
        target="_blank"
      >
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            class="jsx-2529474241"
          />
        </svg>
      </a>
    </div>

    <h3 class="mx-0 mt-6 mb-0 text-lg font-medium leading-6 text-gray-900">
      Magento 2 Model Generator
    </h3>

    <div v-if="isValid">
      <div class="bg-gray-100 overflow-x-scroll p-2 mt-4">
        <TreeView :children="children" />
      </div>

      <div class="mt-4">
        <input
          id="includeNonMergable"
          v-model="includeNonMergable"
          type="checkbox"
        >
        <label for="includeNonMergable" class="ml-2 text-gray-700">
          Include non-mergable files
          <span
            title="This will include files that are not mergable when having multiple models, like the db_schema.xml or di.xml."
          >
            <svg
              class="w-5 h-5 inline-block"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </span>
        </label>
      </div>

      <button
        type="button"
        class="mt-4 w-full text-center px-5 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-blue hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        data-action="download"
        @click="download"
      >
        Download
      </button>
    </div>

    <div v-if="!isValid" class="text mt-2">
      Before you can download your module make sure you enter your:
      <ul class="list-disc ml-4 mt-4">
        <li>Vendor Name (eg Acme)</li>
        <li>Module Name (eg Blog, Faq, StockReport)</li>
        <li>Model Name (eg Post, Item, StockItem)</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import JSZip from 'jszip'
import {saveAs} from 'file-saver'
import {useModuleStore} from '@/stores/moduleStore'
import {useModelStore} from '@/stores/modelStore'
import {useDownloadStore} from '@/stores/downloadStore'
import {useFathomStore} from '@/stores/fathomStore'
import FileList from "~/output/FileList";

// Initialize stores
const moduleStore = useModuleStore()
const modelStore = useModelStore()
const downloadStore = useDownloadStore()
const fathomStore = useFathomStore()

// Computed properties
const isValid = computed(() =>
  moduleStore.vendorName && moduleStore.moduleName && modelStore.name
)

const files = computed(() =>
  new FileList(moduleStore.$state).generate()
)

const children = computed(() => {
  const output = { Children: {} }

  files.value.forEach((file) => {
    const path = file.getPath()
    const parts = path.split('/')

    let current = output
    let currentPath = ''
    parts.forEach((part) => {
      currentPath += part + '/'

      current.Children[part] = current.Children[part] || {Children: {}}
      current = current.Children[part]
      current.Name = part
      current.CurrentPath = currentPath
    })

    current.Contents = file.getContents()
  })

  const order = Object.keys(output.Children).sort();
  // Registration.php and composer.json should be the last files
  moveFileDown(order, 'composer.json');
  moveFileDown(order, 'registration.php');

  return order.map(key => output.Children[key])
})

const moveFileDown = (order, fileName) => {
  const index = order.indexOf(fileName);
  if (index !== -1) {
    order.push(order.splice(index, 1)[0]);
  }
}

const includeNonMergable = computed({
  get: () => downloadStore.includeNonMergable,
  set: (value) => downloadStore.setIncludeNonMergable(value)
})

// Methods
const download = () => {
  const zip = new JSZip()

  let filteredFiles = files.value
  if (!includeNonMergable.value) {
    filteredFiles = filteredFiles.filter((file) => file.isMergeable())
  }

  filteredFiles.forEach((file) => {
    zip.file(file.getPath(), file.getContents())
  })

  zip.generateAsync({type: 'blob'}).then((blob) => {
    const filename = `${moduleStore.vendorName}_${moduleStore.moduleName}.zip`
    saveAs(blob, filename)
  })

  if (!fathomStore.triggered && process.env.NODE_ENV === 'production' && window.fathom) {
    window.fathom.trackGoal('2XQ4M1PI', 0)
    fathomStore.setTriggered()
  }
}
</script>
