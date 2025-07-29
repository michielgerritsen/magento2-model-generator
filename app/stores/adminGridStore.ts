import { defineStore } from 'pinia'

export const useAdminGridStore = defineStore('admingrid', {
  state: () => ({
    enabled: true,
    bookmarks: false,
    paging: true,
    sticky: true,
    search: false,
    massactions: false,
    filters: false,
    newButton: true,
    addToMenu: false,
    menuParent: '',
  }),

  actions: {
    setEnabled(value: boolean) {
      this.enabled = value
    },
    setBookmarks(value: boolean) {
      this.bookmarks = value
    },
    setPaging(value: boolean) {
      this.paging = value
    },
    setSticky(value: boolean) {
      this.sticky = value
    },
    setSearch(value: boolean) {
      this.search = value
    },
    setMassactions(value: boolean) {
      this.massactions = value
    },
    setFilters(value: boolean) {
      this.filters = value
    },
    setNewButton(value: boolean) {
      this.newButton = value
    },
    setAddToMenu(value: boolean) {
      this.addToMenu = value
    },
    setMenuParent(value: string) {
      this.menuParent = value
    },
    reset() {
      this.enabled = true
      this.bookmarks = false
      this.paging = true
      this.sticky = true
      this.search = false
      this.massactions = false
      this.filters = false
      this.newButton = true
      this.addToMenu = false
      this.menuParent = ''
    },
  },

  persist: true,
})

export type UseAdminGridStore = ReturnType<typeof useAdminGridStore>;
