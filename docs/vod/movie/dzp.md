---
date: 2024-05-06
title: 动作片
icon: photo-film
order: 4
category:
  - 影视点播
tag:
  - 篮球
---

<ArtPlayer :src="state.src" :config="artConfig(Hls,state.PlayList)" type="Hls"/>

::: tabs
@tab:active 量子资源
<SiteInfo v-for="(item,k) in state.vodlz" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodlzurl(k)" />
@tab 鱼乐资源
<SiteInfo v-for="(item,k) in state.vodyl" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodylurl(k)" />
@tab 暴风资源
<SiteInfo v-for="(item,k) in state.vodbf" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodbfurl(k)" />
:::

<script setup lang="ts">
  import { vod } from 'db'
  import { artConfig, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  
  const state = useStorage(
    "vod-dzp",
    {
      src:"",
      vodlz: [],
      vodyl: [],
      vodbf: [],
      PlayList: []
    }
  )
  
  onMounted(() => {
    nextTick(async () => {
      const lzcaiji = await vod.find({ "name": "lzzy-6" })
      const ylzy = await vod.find({ "name": "ylzy-6" })
      const bfzy = await vod.find({ "name": "bfzy-21" })
      state.value.vodlz = lzcaiji.data
      state.value.vodyl = ylzy.data
       state.value.vodbf = bfzy.data
      vodlzurl(0)
    })
  });
   const vodlzurl = (key) => {
    const { vodlz } = state.value
    state.value.PlayList =vodlz
    state.value.src = vodlz[key].url
  }
  const vodylurl = (key) => {
    const { vodyl } = state.value
    state.value.PlayList =vodyl
    state.value.src = vodyl[key].url
  }
  const vodbfurl = (key) => {
    const { vodbf } = state.value
    state.value.PlayList =vodbf
    state.value.src = vodbf[key].url
  }
</script>
