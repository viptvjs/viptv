---
title: 足球
icon: futbol
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 足球
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.PlayList)" />

::: tabs
@tab:active 索尼资源
<SiteInfo v-for="(item,k) in state.vodsn" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodsnurl(k)" />
@tab 鱼乐资源
<SiteInfo v-for="(item,k) in state.vodyl" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodylurl(k)" />
@tab 暴风资源
<SiteInfo v-for="(item,k) in state.vodbf" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodbfurl(k)" />
:::

<script setup>
  import { vod } from 'db'
  import { hlsConfig } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick } from "vue";
  
  const state = useStorage(
    "vod-zuqiu",
    {
      src:"",
      vodsn: [],
      vodyl: [],
      vodbf: [],
      PlayList: []
    }
  )
  
  onMounted(() => {
    nextTick(async () => {
      const suonizy = await vod.find({ "name": "snzy-50" })
      const ylzy = await vod.find({ "name": "ylzy-50" })
      const bfzy = await vod.find({ "name": "bfzy-54" })
      state.value.vodsn = suonizy.data
      state.value.vodyl = ylzy.data
      state.value.vodbf = bfzy.data
      vodsnurl(0)
    })
  });
   const vodsnurl = (key) => {
    const { vodsn } = state.value
    state.value.PlayList =vodsn
    state.value.src = vodsn[key].url
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
