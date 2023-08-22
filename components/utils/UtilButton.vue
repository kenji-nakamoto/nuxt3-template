<template>
  <button
    type="button"
    :class="customClass"
    class="font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
<script lang="ts" setup>
export interface Props {
  label: string
  customClass: string
}

const emits = defineEmits<{ (e: 'click', value?: string): void }>()

const onClick = (): void => {
  emits('click')
}

const props = withDefaults(defineProps<Props>(), {
  label: () => 'ボタン',
  customClass: () => '',
})
</script>
