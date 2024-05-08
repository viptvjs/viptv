<template><div><ArtPlayer :src="state.Src" :config="artPlayerConfig" /><div class="hint-container tip">
<p class="hint-container-title">熊猫直播</p>
<p>全面汇聚央视、卫视频道，您的专属 全面聚合高清资源 旗舰平台，品质首选！</p>
</div>
</div></template>


<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { poster,Hls } from 'cps/artConst'
  import { iptv } from 'db'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const vodId = "fmml_dv6"

  const state = useStorage(
    vodId,
    {
      Src:"",
      PlayList: []
    }
  )

  onMounted(() => {
    nextTick(async () => {
      const { data } = await iptv.find({ "name": vodId })
      state.value.PlayList = data
      state.value.Src = data[0].url
    })
  });

  const artPlayerConfig = {
    poster,
    fullscreen: true,
    fullscreenWeb: true,
    autoplay: true,
    muted: true, // Hls默认静音才能自动播放即可
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