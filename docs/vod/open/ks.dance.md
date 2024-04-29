---
title: 跳舞小姐姐
icon: fa-solid fa-user-graduate
date: 2020-01-01
order: 4
category:
- 影视点播
tag:
- 小姐姐
---
::: tip 跳舞小姐姐|福利小视频
赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！
:::

<ArtPlayer :src="Src" :config="artPlayerConfig" />
<script setup lang="ts">
  import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
  import { artplayerPlaylist } from 'artplayer-playlist'
  import vod from 'db/vod'
  import { Dec } from 'db/crypt.js'
  import fetch from 'cross-fetch';
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const state = useStorage(
    "list-twxjj",
    {
      Src: "https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4",
      Poster: 'https://img.viptv.work/iptv/ads.png',
      PlayList: []
    }
  )

  onMounted(() => {
    nextTick(async () => {
      const { data } = await vod.find({ "name": "twxjj" })
      state.value.PlayList = data
    })
  });

  onDeactivated(() => {
    state.value.PlayList = null

  });

  const { Src, Poster, PlayList } = state.value
  const artPlayerConfig = {
    poster: Poster,
    fullscreen: true,
    fullscreenWeb: true,

    url: PlayList.length ? PlayList[0].url : Src,
    plugins: [
      artplayerPluginDanmuku({
        danmuku: "https://raw.gitmirror.com/zhw2590582/assets-cdn/master/danmuku/one-more-time-one-more-chance.xml"
      }),
      artplayerPlaylist({
        rebuildPlayer: true,
        autoNext: true,
        showText: false,
        playlist: PlayList
      })
    ],
  }
</script>