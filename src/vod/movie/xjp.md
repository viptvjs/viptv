---
title: 喜剧片
icon: photo-film
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 喜剧
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.PlayList)" />

::: tabs
@tab:active 量子资源
<SiteInfo v-for="(item,k) in state.vodlz" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodlzurl(k)" />
@tab 暴风资源
<SiteInfo v-for="(item,k) in state.vodbf" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodbfurl(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const state = useStorage(
    "vod-xjp",
    {
      src:"",
      vodlz: [],
      vodbf: [],
      PlayList: []
    }
  )

  onMounted(() => {
    nextTick(async () => {
      const lzcaiji = await vod.find({ "name": "lzzy-7" })
      const bfzy = await vod.find({ "name": "bfzy-22" })
      state.value.vodlz = lzcaiji.data
       state.value.vodbf = bfzy.data
      vodlzurl(0)
    })
  });
   const vodlzurl = (key) => {
    const { vodlz } = state.value
    state.value.PlayList =vodlz
    state.value.src = vodlz[key].url
  }
  const vodbfurl = (key) => {
    const { vodbf } = state.value
    state.value.PlayList =vodbf
    state.value.src = vodbf[key].url
  }
</script>
