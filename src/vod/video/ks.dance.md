---
title: 跳舞小姐姐
icon: fa-solid fa-user-graduate
date: 2020-01-01
order: 5
category:
  - 影视点播
tag:
  - 小姐姐
---

<ArtPlayer :src="state.Src" :config="mpConfig(state.PlayList)" />

::: tip 跳舞小姐姐|福利小视频
赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；
:::

<script setup>
  import { vod } from '@db'
  import { mpConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const vodId = "ks-dance"
  const state = useStorage(
    vodId,
    {
      Src:"",
      PlayList: []
    }
  )
  onMounted(() => {
    nextTick(async () => {
      const { data } = await vod.find({ "name": vodId })
      state.value.PlayList = data.slice(0, 99)
      state.value.Src = data[0].url
    })
  });
</script>
