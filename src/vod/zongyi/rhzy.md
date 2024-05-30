---
title: 日韩综艺
icon: star
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 综艺
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.PlayList)" />

::: tabs
@tab:active 暴风资源
<SiteInfo v-for="(item,k) in state.vodbf" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodbfurl(k)" />
@tab 量子资源
<SiteInfo v-for="(item,k) in state.vodlz" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodlzurl(k)" />

:::

<script setup>
  import { vod } from 'db'
  import { hlsConfig } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const state = useStorage(
    "vod-rhzy",
    {
      src:"",
      vodbf: [],
      vodlz: [],
      PlayList: []
    }
  )
 
  onMounted(async () => {
    const bfzy = await vod.find({ "name": "bfzy-48" })
    const lzcaiji = await vod.find({ "name": "lzzy-27" })
    state.value.vodbf = bfzy.data
    state.value.vodlz = lzcaiji.data
    vodbfurl(0)
  });

    const vodbfurl = (key) => {
    const { vodbf } = state.value
    state.value.PlayList =vodbf[key].play_list
    state.value.src = vodbf[key].play_list[0].url
  }
    const vodlzurl = (key) => {
    const { vodlz } = state.value
    state.value.PlayList =vodlz[key].play_list
    state.value.src = vodlz[key].play_list[0].url
  }
</script>
