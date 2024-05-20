---
title: TikTok小姐姐
icon: hat-cowboy
date: 2020-01-01
order: 4
category:
- 影视点播
tag:
- 小姐姐
---

<ArtPlayer :src="state.Src" :config="mpConfig(state.PlayList)" />

::: tip TikTok 小姐姐|福利小视频
:::

<script setup lang="ts">
  import { mpConfig } from 'cps/artConst'
  import { vod } from 'db'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const state = useStorage(
    "tiktok",
    {
      Src: "",
      PlayList: []
    }
  )
  onMounted(() => {
    nextTick(async () => {
      const { data } = await vod.find({ "name": vodId })
      state.value.PlayList = data.slice(0, 100)
      state.value.Src = data.slice(0, 100)[0].url
    })
  });
</script>