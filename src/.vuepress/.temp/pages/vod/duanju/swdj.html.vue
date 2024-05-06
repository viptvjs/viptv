<template><div><ArtPlayer :src="state.src" :config="artPlayerConfig" /><Tabs id="2" :data='[{"id":"索尼资源"},{"id":"鱼乐资源"}]' :active="0">
<template #title0="{ value, isActive }">索尼资源</template>
<template #title1="{ value, isActive }">鱼乐资源</template>
<template #tab0="{ value, isActive }">
<SiteInfo v-for="(item,k) in state.vodsn" :name="item.title" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
  @click="vodsnurl(k)" />
</template>
<template #tab1="{ value, isActive }">
<SiteInfo v-for="(item,k) in state.vodyl" :name="item.title" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
  @click="vodylurl(k)" />
</template>
</Tabs>
</div></template>


<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { poster, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const state = useStorage(
    "vod-swdj",
    {
      src: "",
      vodsn: [],
      vodyl: [],
      PlayList: []
    }
  )
  onMounted(async () => {
    const snzy = await vod.find({ "name": "suonizy-swdj" })
    const ylzy = await vod.find({ "name": "ylzy-swdj" })
    state.value.vodsn = snzy.data
    state.value.vodyl = ylzy.data
    vodsnurl(0)
  });
  const vodsnurl = (key) => {
    const { vodsn } = state.value
    state.value.PlayList = vodsn
    state.value.src = vodsn[key].url
  }
  const vodylurl = (key) => {
    const { vodyl } = state.value
    state.value.PlayList = vodyl
    state.value.src = vodyl[key].url
  }
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