import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CardTableLoading from '../CardTableLoading.vue'

describe('CardTableLoading', () => {
  it('renders properly', () => {
    const wrapper = mount(CardTableLoading, { props: { title: 'Empleados' } })
    expect(wrapper.text()).toContain('Empleados')
  })
})
