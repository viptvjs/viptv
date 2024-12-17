<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage.js";
import ShareButton from "./ShareButton.vue";

</script>
<template>
  <NormalPage>
    <template #contentAfter>
      <a href="/about/donate" target="_blank">
        <div style=" position: relative;text-align: center; "><img src="/assets/jpg/zanzhu.jpg" alt="赞助支持" width="85%"
            height="125px">
        </div>
      </a>
    </template>
    <template #tocBefore>
        <ShareButton/>
    </template>
  </NormalPage>

</template>