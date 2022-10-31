<template>
  <ul>
    <TreeItem
      v-for="Child in children"
      :key="Child.CurrentPath"
      :item="Child"
    />
  </ul>
</template>

<script type="ts">
import Vue from "vue";
import TreeItemInterface from '~/interfaces/TreeItemInterface'

export default Vue.extend({
  props: {
    children: {
      type: TreeItemInterface,
      default: undefined
    }
  }
})
</script>
