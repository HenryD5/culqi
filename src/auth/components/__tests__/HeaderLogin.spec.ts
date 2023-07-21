import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderLogin from '../HeaderLogin.vue'

describe('Form Login', () => {
  it('get class - bg-primary', () => {
    const wrapper = mount(HeaderLogin);

    expect(wrapper.classes('bg-primary')).toBeDefined();
  });
})
