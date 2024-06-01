---
title: 剧情片
icon: photo-film
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 剧情
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.PlayList)" />

::: tabs
@tab:active 量子资源
<SiteInfo v-for="(item,k) in state.vodlz" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodlzurl(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const state = useStorage(
    "vod-jqp",
    {
      src:"",
      vodlz: [],
      PlayList: []
    }
  )

  onMounted(() => {
    nextTick(async () => {
      const lzcaiji = await vod.find({ "name": "lzzy-11" })
      state.value.vodlz = lzcaiji.data
      vodlzurl(0)
    })
  });
   const vodlzurl = (key) => {
    const { vodlz } = state.value
    state.value.PlayList =vodlz
    state.value.src = vodlz[key].url
  }
</script>
