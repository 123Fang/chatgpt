<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'


</script>

<template>
  <!--- NConfigProvider 全局化配置设置内部组件的主题、语言等-->
  <NConfigProvider
    class="h-full"
  >
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>
