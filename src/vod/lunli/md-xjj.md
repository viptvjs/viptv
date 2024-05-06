---
title: 麻豆小姐姐
icon: fa-solid fa-user-graduate
date: 2020-01-01
order: 4
category:
- 影视点播
tag:
- 小姐姐
---
<ArtPlayer :src :config="artPlayerConfig" />

::: tip 麻豆小姐姐|福利小视频
:::

<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { poster, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const vodId = "5151md-mdsp"

  const state = useStorage(
    vodId,
    {
      PlayList: []
    }
  )

  const src = state.value.PlayList[0] ? state.value.PlayList[0].url : ""

  onMounted(() => {
    nextTick(async () => {
      const { data } = await vod.find({ "name": vodId })
      state.value.PlayList = data
    })
  });



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
        rebuildPlayer: true,
        autoNext: true,
        showText: false,
        playlist: state.value.PlayList
      })
    ],
  }
</script>