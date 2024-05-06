<template><div><ArtPlayer :src="state.src" :config="artPlayerConfig" /><Tabs id="2" :data='[{"id":"量子资源"}]' :active="0">
<template #title0="{ value, isActive }">量子资源</template>
<template #tab0="{ value, isActive }">
<SiteInfo v-for="(item,k) in state.vodlz" :name="item.title" desc="" :logo="item.vod_pic"
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
    "vod-jqp",
    {
      src:"",
      vodlz: [],
      PlayList: []
    }
  )
  
  onMounted(() => {
    nextTick(async () => {
      const lzcaiji = await vod.find({ "name": "lzcaiji-jqp" })
      state.value.vodlz = lzcaiji.data
      vodlzurl(0)
    })
  });
   const vodlzurl = (key) => {
    const { vodlz } = state.value
    state.value.PlayList =vodlz
    state.value.src = vodlz[key].url
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