import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ContentLogin from '../ContentLogin.vue'

describe('ContentLogin', () => {
  it('renders image with src and alt attributes', () => {
    const wrapper = mount(ContentLogin)

    const images = wrapper.findAll('img')

    images.forEach((img) => {
      expect(img.attributes('src')).toBeDefined()
      expect(img.attributes('alt')).toBeDefined()
    })
  })

  it('containt title', () => {
    const wrapper = mount(ContentLogin);

    const componentText = wrapper.text();

    expect(componentText).toContain('Dale más power ⚡ a tus empleados hoy 💪');
  });
})
