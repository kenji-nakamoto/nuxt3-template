<template>
  <NuxtPage />
</template>
<script lang="ts" setup>
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>
