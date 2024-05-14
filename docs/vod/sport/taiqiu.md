---
title: 台球
icon: bowling-ball
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 台球
---

<ArtPlayer :src="state.src" :config="artPlayerConfig" />

::: tabs
@tab:active 暴风资源
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
    "vod-taiqiu",
    {
      src:"",
      vodbf: [],
      PlayList: []
    }
  )
  
  onMounted(() => {
    nextTick(async () => {
      const bfzy = await vod.find({ "name": "bfzy-snk" })
      state.value.vodbf = bfzy.data
      vodbfurl(0)
    })
  });
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
