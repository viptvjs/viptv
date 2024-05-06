<template><div><div class="hint-container tip">
<p class="hint-container-title">跳舞小姐姐|福利小视频</p>
<p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p>
</div>
<ArtPlayer :src :config="artPlayerConfig" /><SiteInfo v-for="(item,k) in state.data" :name="item.vod_name" :desc="item.vod_content" :logo="item.vod_pic"
  :preview="item.vod_pic" @click="url(k)" />
</div></template>


<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { poster } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const vodId = "lzcaiji-guochanju"

  const state = useStorage(
    vodId,
    {
      data: [],
      PlayList: []
    }
  )
  const src = ""
  const url = (key) => {
    state.value.PlayList = data[key].play_list

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
    plugins: [
      artplayerPlaylist({
        autoNext: true,
        playlist: state.value.PlayList
      })
    ],
  }
</script>