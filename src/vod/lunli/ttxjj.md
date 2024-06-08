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

<ArtPlayer :src="state.src" :config="mpConfig(state.p)" />

::: tip TikTok 小姐姐|福利小视频
:::

<script setup>
  import { mpConfig } from '@cps/artConst'
  import vod from '@db/vod.js'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "tiktok",
    {
      src:"",
      p: []
    }
  )

  onMounted( async () => {
    const { data } = await vod.find({ "name": "tiktok" })
    state.value.p = data.slice(0, 100)
    state.value.src = data[0].url
  });

</script>
