import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtilButtonVue from '../../components/utils/UtilButton.vue'

describe('HelloMessage', () => {
  test('任意のクラス、ラベルを持ったボタンが表示される', () => {
    const wrapper = mount(UtilButtonVue, {
      props: {
        label: 'テストボタン',
        customClass: 'text-white bg-blue-700 hover:bg-blue-800',
      },
    })

    const UtilButton = wrapper.findComponent(UtilButtonVue)

    expect(UtilButton.exists()).toBeTruthy()
    expect(wrapper.text()).toContain('テストボタン')
    expect(wrapper.classes()).toContain('text-white')
  })
})
