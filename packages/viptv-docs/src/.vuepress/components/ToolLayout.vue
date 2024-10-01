<template>
  <NaiveProvider class="transition-all" :class="{
    'opacity-0': !isShow,
    'opacity-100': isShow
  }">
    <SkipLink />
    <CommonWrapper>
      <NormalPage />
    </CommonWrapper>
  </NaiveProvider>
</template>

<script setup lang="ts">
import CommonWrapper from 'vuepress-theme-hope/components/CommonWrapper.js'
import NormalPage from 'vuepress-theme-hope/components/NormalPage.js'
import SkipLink from 'vuepress-theme-hope/components/SkipLink.js'
import { onMounted, ref } from 'vue'

const isShow = ref(false)

onMounted(() => {
  setTimeout(() => {
    isShow.value = true
  }, 300)
})
</script>