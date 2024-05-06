<template><div><div class="hint-container tip">
<p class="hint-container-title">央视频直播</p>
<p>全面汇聚央视、卫视频道，您的专属 全面聚合高清资源 旗舰平台，品质首选！聚合总台内外优质创作机构和创作者内容</p>
</div>
<ArtPlayer :src="state.Src" :config="artPlayerConfig" /></div></template>


<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const vodId = "ysp"

  const state = useStorage(
    vodId,
    {
      Src: "https://gcwbndks.v.kcdnvip.com/gcwbnd/xiongmao01_2/index.m3u8",
      Poster: 'https://img.viptv.work/iptv/ads.png',
      PlayList: []
    }
  )

  onMounted(() => {
    nextTick(async () => {
      const { data } = await vod.find({ "name": vodId })
      state.value.PlayList = data
    })
  });

  const artPlayerConfig = {
    poster: state.value.Poster,
    fullscreen: true,
    fullscreenWeb: true,
    url: state.value.Src,
    type: "m3u8",
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