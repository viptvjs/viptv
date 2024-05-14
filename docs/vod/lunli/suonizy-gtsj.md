---
title: 港台三级
icon: hat-cowboy
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 三级
---

<ArtPlayer :src :config="artPlayerConfig" />

::: tip 港台三级
资源链来自量子资源站,感谢提供！
:::

<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { poster, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const vodId = "suonizy-gtsj"
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
        autoNext: true,
        playlist: state.value.PlayList
      })
    ],
  }
</script>
