import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import UtilButtonVue from '../../components/utils/UtilButton.vue'

describe('UtilButton', () => {
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

  test('ボタンクリックでhandleClickが実行される', async () => {
    const handleClickMock = vi.fn()
    const wrapper = mount(UtilButtonVue, {
      props: {
        label: 'テストボタン',
        customClass: 'text-white bg-blue-700 hover:bg-blue-800',
        handleClick: handleClickMock,
      },
    })

    wrapper.find('button').trigger('click')
    expect(handleClickMock).toHaveBeenCalledTimes(1)
  })
})
