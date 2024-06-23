<template>
  <li
    :class="[
      'is-' +
        (isFile ? 'file' : 'dir') +
        '-' +
        item.Name.toLowerCase().replace('.', '-'),
    ]"
  >
    <ScriptModal
      v-if="showModal"
      :filename="item.Name"
      @close="showModal = false"
    >
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

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import type TreeItemInterface from '@/interfaces/TreeItemInterface'

const props = defineProps<{
  item?: TreeItemInterface
}>()

const showModal = ref(false)

const isFile = computed(() => props.item?.Contents !== undefined)

const children = computed(() => {
  if (!props.item?.Children) return {}

  return Object.keys(props.item.Children).sort().reduce(
    (obj, key) => {
      obj[key] = props.item.Children[key]
      return obj
    },
    {} as Record<string, TreeItemInterface>
  )
})

const openModal = () => {
  showModal.value = true

  if (window.fathom && window.fathom.trackGoal) {
    // Track that there was a file opened.
    window.fathom.trackGoal('H7MUSACJ', 0)
  }
}
</script>
