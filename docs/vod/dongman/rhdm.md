---
title: 日韩动漫
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 动漫
---

<ArtPlayer :src="state.src" :config="artPlayerConfig" />

::: tabs
@tab:active 索尼资源
<SiteInfo v-for="(item,k) in state.vodsn" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodsnurl(k)" />
@tab 量子资源
<SiteInfo v-for="(item,k) in state.vodlz" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodlzurl(k)" />
:::

<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { poster, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const state = useStorage(
    "vod-rhdm",
    {
      src:"",
      vodsn: [],
      vodlz: [],
      PlayList: []
    }
  )
 
  onMounted(async () => {
    const suonizy = await vod.find({ "name": "snzy-30" })
    const lzcaiji = await vod.find({ "name": "lzzy-30" })
    state.value.vodsn = suonizy.data
    state.value.vodlz = lzcaiji.data
    vodsnurl(0)
  });
 const vodsnurl = (key) => {
    const { vodsn } = state.value
    state.value.PlayList =vodsn[key].play_list
    state.value.tip = vodsn[key].vod_content
    state.value.src = vodsn[key].play_list[0].url
  }
  const vodlzurl = (key) => {
    const { vodlz } = state.value
    state.value.PlayList =vodlz[key].play_list
    state.value.src = vodlz[key].play_list[0].url
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
