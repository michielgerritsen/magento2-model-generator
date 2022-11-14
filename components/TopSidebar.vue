<template>
  <div class="-mt-4">
    <h3 class="heading">Magento 2 Model Generator</h3>

    <div v-if="isValid">
      <div class="bg-gray-100 overflow-x-scroll p-2 mt-4">
        <TreeView :children="children" />
      </div>

      <button
        type="button"
        class="mt-4 w-full text-center px-5 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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

<script type="ts">
import Vue from "vue";
import { mapState } from 'vuex'
import JSZip from "jszip";
import { saveAs } from 'file-saver';
import FileList from "~/output/FileList";

export default Vue.extend({
  computed: {
    isValid() {
      return this.$store.state.module.vendorName &&
        this.$store.state.module.moduleName &&
        this.$store.state.model.name
    },

    files() {
      return new FileList(this.$store.state).generate()
    },

    children() {
      const output = {
        Children: {}
      };

      this.files.forEach((file) => {
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

      return Object.values(output.Children)
    },

    ...mapState('admingrid', [
      'newButton',
      'massactions'
    ])
  },

  methods: {
    download() {
      const zip = new JSZip();

      this.files.forEach((file) => {
        zip.file(file.getPath(), file.getContents());
      })

      zip.generateAsync({type: "blob"}).then((blob) => {
        const filename = this.$store.state.module.vendorName + '_' + this.$store.state.module.moduleName + '.zip';
        saveAs(blob, filename)
      });

      if (!this.$store.state.fathom.triggered && process.env.NODE_ENV === 'production' && window.fathom) {
        window.fathom.trackGoal('2XQ4M1PI', 0)
        this.$store.commit('fathom/setTriggered')
      }
    }
  }
})
</script>
