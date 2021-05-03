const defaultState = () => ({
  enabled: true,
  bookmarks: false,
  paging: true,
  sticky: true,
  search: false,
  massactions: false,
  filters: false,
  newButton: true,
})

export const state = defaultState()

export const mutations = {
  setEnabled(state: any, value: boolean) {
    state.enabled = value
  },
  setBookmarks(state: any, value: boolean) {
    state.bookmarks = value
  },
  setPaging(state: any, value: boolean) {
    state.paging = value
  },
  setSticky(state: any, value: boolean) {
    state.sticky = value
  },
  setSearch(state: any, value: boolean) {
    state.search = value
  },
  setMassactions(state: any, value: boolean) {
    state.massactions = value
  },
  setFilters(state: any, value: boolean) {
    state.filters = value
  },
  setNewButton(state: any, value: boolean) {
    state.newButton = value
  },
  reset(state: any) {
    Object.assign(state, defaultState())
  },
}
