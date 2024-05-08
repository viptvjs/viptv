<template><div><ArtPlayer :src :config="artPlayerConfig" /><div class="hint-container tip">
<p class="hint-container-title">DJ舞小姐姐|福利小视频</p>
<p>据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p>
</div>
</div></template>


<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { poster } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const vodId = "vod-djw"
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
      state.value.PlayList = data.slice(0, 99)
    })
  });
  const artPlayerConfig = {
    poster,
    fullscreen: true,
    fullscreenWeb: true,
    autoplay: true,
    muted: true,
    plugins: [
      artplayerPlaylist({
        autoNext: true,
        playlist: state.value.PlayList
      })
    ],
  }
</script>