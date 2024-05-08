<template><div><ArtPlayer :src="state.src" :config="artPlayerConfig" /><Tabs id="2" :data='[{"id":"索尼资源"},{"id":"量子资源"}]' :active="0">
<template #title0="{ value, isActive }">索尼资源</template>
<template #title1="{ value, isActive }">量子资源</template>
<template #tab0="{ value, isActive }">
<SiteInfo v-for="(item,k) in state.vodsn" :name="item.vod_name" desc="" :logo="item.vod_pic"
  :preview="item.vod_pic" url="" @click="vodsnurl(k)" />
</template>
<template #tab1="{ value, isActive }">
<SiteInfo v-for="(item,k) in state.vodlz" :name="item.vod_name" desc="" :logo="item.vod_pic"
  :preview="item.vod_pic" url="" @click="vodlzurl(k)" />
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
    "vod-gtzy",
    {
      src:"",
      vodsn: [],
      vodlz: [],
      PlayList: []
    }
  )
 
  onMounted(async () => {
    const suonizy = await vod.find({ "name": "suonizy-gtzy" })
    const lzcaiji = await vod.find({ "name": "lzcaiji-gtzy" })
    state.value.vodsn = suonizy.data
    state.value.vodlz = lzcaiji.data
    vodsnurl(0)
  });
  const vodsnurl = (key) => {
    const { vodsn } = state.value
    state.value.PlayList =vodsn[key].play_list
    state.value.src = vodsn[key].play_list[0].url
  }
  const vodlzurl = (key) => {
    const { vodlz } = state.value
    state.value.PlayList =vodlz[key].play_list
    state.value.src = vodlz[key].play_list[0].url
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