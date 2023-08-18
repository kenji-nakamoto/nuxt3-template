<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>
