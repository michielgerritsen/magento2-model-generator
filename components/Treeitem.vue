<template>
  <li>
    <ScriptModal v-if="showModal" @close="showModal = false">
      <template #title>{{ item.CurrentPath.replace(/\/$/, '') }}</template>

      <template #default>{{ item.Contents }}</template>
    </ScriptModal>

    <a href="#" v-if="isFile" @click.prevent="showModal = true">
      {{ item.Name }}
    </a>

    <span v-if="!isFile" class="text-gray-500">
      {{ item.Name }}
    </span>

    <ul v-if="Object.values(children).length" class="ml-4">
      <Treeitem v-for="Child in children" :item="Child" />
    </ul>
  </li>
</template>

<script type="ts">
import Vue from "vue";
import TreeItemInterface from '~/interfaces/TreeItemInterface'

export default Vue.extend({
  props: {
    item: {
      type: TreeItemInterface,
      default: undefined
    }
  },

  data() {
    return {
      showModal: false
    }
  },

  computed: {
    isFile() {
      return this.item.Contents !== undefined
    },

    children() {
      return Object.keys(this.item.Children).sort().reduce(
        (obj, key) => {
          obj[key] = this.item.Children[key];
          return obj;
        },
        {}
      );
    }
  }
})
</script>
