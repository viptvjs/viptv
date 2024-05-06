<template><div><ArtPlayer :src="state.src" :config="artPlayerConfig" /><Tabs id="2" :data='[{"id":"量子资源"}]' :active="0">
<template #title0="{ value, isActive }">量子资源</template>
<template #tab0="{ value, isActive }">
<SiteInfo v-for="(item,k) in state.vod" :name="item.vod_name" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url="" @click="url(k)" /></template>
</Tabs>
</div></template>


<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { poster, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const vodId = "lzcaiji-duanju"
  const state = useStorage(
    vodId,
    {
      src:"",
      vod: [],
      title:"",
      tip: "欢迎光临",
      PlayList: []
    }
  )

  const url =  (key) => {
    const { vod } = state.value 
    state.value.PlayList = vod[key].play_list
    state.value.tip = vod[key].vod_content
    state.value.src = vod[key].play_list[0].url
  }
  
  onMounted(async () => {
    const { data } = await vod.find({ "name": vodId })
    state.value.vod = data
    await nextTick()
    url(0)  
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