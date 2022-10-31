import { mount } from '@vue/test-utils'
import TreeView from '@/components/TreeView.vue'

describe('TreeView', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TreeView)
    expect(wrapper.vm).toBeTruthy()
  })
})
