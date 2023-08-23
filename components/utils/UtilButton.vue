<template>
  <button
    type="button"
    :class="customClass"
    class="font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>
<script lang="ts" setup>
export interface Props {
  label: string
  customClass?: string
  handleClick?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  label: () => 'ボタン',
  customClass: () => '',
})
</script>
