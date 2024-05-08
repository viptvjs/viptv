---
title: TikTok小姐姐
icon: hat-cowboy
date: 2020-01-01
order: 4
category:
- 影视点播
tag:
- 小姐姐
---

<ArtPlayer :src :config="artPlayerConfig" />
::: tip TikTok小姐姐|福利小视频
:::

<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { poster } from 'cps/artConst'
  import { vod } from 'db'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const vodId = "tiktok"

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
      state.value.PlayList = data.slice(0, 100)
    })
  });

  const artPlayerConfig = {
    poster,
    fullscreen: true,
    fullscreenWeb: true,
    muted: true,
    autoplay: true,
    plugins: [
      artplayerPlaylist({
        autoNext: true,
        playlist: state.value.PlayList
      })
    ],
  }
</script>