---
title: 国产剧
icon: clone
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 国产剧
---

<ArtPlayer :src="state.src" :config="artPlayerConfig" />

::: tabs
@tab:active 量子资源

<SiteInfo v-for="(item,k) in state.vodlz" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodlzurl(k)" />
@tab 鱼乐资源
<SiteInfo v-for="(item,k) in state.vodyl" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodylurl(k)" />
:::

<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { poster, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const state = useStorage(
    "vod-gcj",
    {
      src:"",
      vodlz: [],
      vodyl: [],
      PlayList: []
    }
  )
 
  onMounted(async () => {
    const lzcaiji = await vod.find({ "name": "lzzy-13" })
    const ylzy = await vod.find({ "name": "ylzy-13" })
    state.value.vodlz = lzcaiji.data
    state.value.vodyl = ylzy.data
    vodlzurl(0)
  });
  const vodlzurl = (key) => {
    const { vodlz } = state.value
    state.value.PlayList =vodlz[key].play_list
    state.value.src = vodlz[key].play_list[0].url
  }
  const vodylurl = (key) => {
    const { vodyl } = state.value
    state.value.PlayList =vodyl[key].play_list
    state.value.src = vodyl[key].play_list[0].url
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
