import { mount } from '@vue/test-utils';
import HeaderView from '~/components/common/HeaderView.vue';

describe('HeaderView', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HeaderView);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
