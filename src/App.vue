<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useAppStore } from '@/store'


const { theme, themeOverrides } = useTheme()
const appStore = useAppStore()

setTimeout(() => {
  appStore.setTheme('dark')
},5000)
</script>

<template>
  <!--- NConfigProvider 全局化配置设置内部组件的主题等-->
  <NConfigProvider class="h-full" :theme="theme" :theme-overrides="themeOverrides">
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>
