<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage.js";
import ShareButton from "./ShareButton.vue";

</script>
<template>
  <NormalPage>
   
    <template #tocBefore>
        <ShareButton/>
    </template>

  </NormalPage>

</template>