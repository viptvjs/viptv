<template><div><div class="hint-container tip">
<p class="hint-container-title">国产电视剧 | 温馨提示：</p>
<p>相关资源采集于量子资源站，如果播放不了，请刷新一下再试试！</p>
</div>
<ArtPlayer :src :config="artPlayerConfig" /><SiteInfo v-for="(item,k) in state.data" :name="item.vod_name" :desc="item.vod_content" :logo="item.vod_pic"
  :preview="item.vod_pic" @click="url(k)" />
</div></template>


<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { poster, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const vodId = "lzcaiji-guochanju"
  const state = useStorage(
    vodId,
    {
      data: [],
      tip: "欢迎光临",
      PlayList: []
    }
  )
  const src = ""
  const url = (key) => {
    state.value.PlayList = state.value.data[key].play_list
    state.value.tip = state.value.data[key].vod_content
  }
  onMounted(() => {
    nextTick(async () => {
      const { data } = await vod.find({ "name": vodId })
      state.value.data = data
      url(0)
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