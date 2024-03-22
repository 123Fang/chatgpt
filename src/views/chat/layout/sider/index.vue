<script setup lang='ts'>
import { computed, ref, watch } from 'vue'
import { NButton, NLayoutSider } from 'naive-ui'
import { useAppStore } from '@/store'


const appStore = useAppStore()
const collapsed = computed(() => appStore.siderCollapsed)

function handleUpdateCollapsed() {
  appStore.setSiderCollapsed(!collapsed.value)
}
</script>

<template>
  <NLayoutSider
    :collapsed="collapsed"
    :collapsed-width="0"
    :width="260"
    collapse-mode="transform"
    position="absolute"
    bordered
    @update-collapsed="handleUpdateCollapsed"
  >
    <div class="flex flex-col h-full">
      <main class="flex flex-col flex-1 min-h-0">
        <div class="p-4">
          <NButton  block color="#8a2be2">
            创 建 对 话
          </NButton>
          
        </div>
        <div class="flex-1 min-h-0 pb-4 overflow-hidden">
          <List />
        </div>
        <div class="flex items-center p-4 space-x-4">
          <div class="flex-1">
            <NButton block @click="show = true">
              创 建 对 话
            </NButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </NLayoutSider>
</template>
