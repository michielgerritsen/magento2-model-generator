<template>
  <li
    :class="[
      'is-' +
        (isFile ? 'file' : 'dir') +
        '-' +
        item.Name.toLowerCase().replace('.', '-'),
    ]"
  >
    <ScriptModal v-if="showModal" @close="showModal = false">
      <template #title>{{ item.CurrentPath.replace(/\/$/, '') }}</template>

      <template #default>{{ item.Contents }}</template>
    </ScriptModal>

    <a v-if="isFile" href="#" @click.prevent="openModal()">
      {{ item.Name }}
    </a>

    <span v-if="!isFile" class="text-gray-500">
      {{ item.Name }}
    </span>

    <ul v-if="Object.values(children).length" class="ml-4">
      <TreeItem
        v-for="Child in children"
        :key="Child.CurrentPath"
        :item="Child"
      />
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
  },

  methods: {
    openModal() {
      this.showModal = true;

      if (window.fathom && window.fathom.trackGoal) {
        // Track that there was a file opened.
        window.fathom.trackGoal('H7MUSACJ', 0);
      }
    }
  }
})
</script>
