import { mount } from '@vue/test-utils'
import Logo from '~/components/common/HeaderView.vue'

describe('HeaderView', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
