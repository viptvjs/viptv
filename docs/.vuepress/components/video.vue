<template>
  <ArtPlayer :src :config="artPlayerConfig" />
</template>

<script setup lang="ts">
import { artplayerPlaylist } from '../composables/artplayer-plugin-playlist'
import { vod } from '../lib/dexie'
import { poster } from '../composables/artConst'
import { useStorage } from '@vueuse/core'
import { onMounted, nextTick, onDeactivated } from "vue";

const vodId = "5151md-mdsp"

interface PlayList {
  title: string;
  url: string;
}

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