<script setup lang='ts'>
import { ref } from 'vue'
import { UserAvatar } from '@/components/common'

const show = ref(false)
</script>

<template>
  <div class="flex items-center justify-between min-w-0 p-4 overflow-hidden border-b">
    <UserAvatar />
  </div>
</template>
