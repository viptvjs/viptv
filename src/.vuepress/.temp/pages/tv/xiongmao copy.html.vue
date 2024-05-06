<template><div><div class="hint-container tip">
<p class="hint-container-title">熊猫直播</p>
<p>全面汇聚央视、卫视频道，您的专属 全面聚合高清资源 旗舰平台，品质首选！聚合总台内外优质创作机构和创作者内容</p>
</div>
<ArtPlayer src="https://tv.iill.top/douyu/1997723" :config="artPlayerConfig" /></div></template>


<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { poster, M3u } from 'cps/artConst'
  import { vod } from 'db'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const vodId = "xiongmao"

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
    muted: true, // Hls默认静音才能自动播放即可
    type: "M3u",
    customType: { M3u },
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