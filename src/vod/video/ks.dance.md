---
title: 跳舞小姐姐
icon: fa-solid fa-user-graduate
date: 2020-01-01
order: 5
category:
  - 影视点播
tag:
  - 小姐姐
containerClass: toc-false
---

<ArtPlayer :src :config="mpConfig(state.p)" />

::: tip 跳舞小姐姐|福利小视频
赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；
:::

<script setup>
  import vod from '@db/vod.js'
  import { mpConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const vodId = "ks-dance"
  const state = useStorage(
    vodId,
    {
      src:"",
      p: []
    }
  )
  const src = state.value.p[0] ? state.value.p[0].url : ""
  onMounted(async () => {
    const { data } = await vod.find({ "name": vodId })
    state.value.p = data.slice(0, 99)
    state.value.src = data[0].url
  });
</script>