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

<ArtPlayer :src="state.src" :config="artPlayerConfig" />

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

<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { poster, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  
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
      const suonizy = await vod.find({ "name": "suonizy-zuqiu" })
      const ylzy = await vod.find({ "name": "ylzy-zuqiu" })
      const bfzy = await vod.find({ "name": "bfzy-zuqiu" })
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
  const artPlayerConfig = {
    poster,
    fullscreen: true,
    fullscreenWeb: true,    
    autoplay: true,
    muted: true,
    type: "Hls",
    customType: { Hls },
    plugins: [
      artplayerPlaylist({
        autoNext: true,
        playlist: state.value.PlayList
      })
    ],
  }
</script>
