---
title: 快手广场舞
icon: fa-solid fa-user-graduate
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 快手
  - 广场舞
---

<ArtPlayer :src :config="mpConfig(state.PlayList)" />

::: tip 快手广场舞|福利小视频
赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；
:::

<script setup>
  import { vod } from 'db'
  import { mpConfig } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick } from "vue";
  const vodId = "vod-gcw"
  const state = useStorage(
    vodId,
    {
      PlayList: []
    }
  )
  const src = state.value.PlayList[0] ? state.value.PlayList[0].url : ""
  onMounted(() => {
    nextTick(async () => {
      const { data } = await vod.find({ "name": vodId })
      state.value.PlayList = data.slice(0, 99)
    })
  });
</script>
