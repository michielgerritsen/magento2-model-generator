<template>
  <ul>
    <TreeItem
      v-for="Child in children"
      :key="Child.CurrentPath"
      :item="Child"
    />
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type TreeItemInterface from '@/interfaces/TreeItemInterface'

defineProps<{
  children?: TreeItemInterface
}>()
</script>
