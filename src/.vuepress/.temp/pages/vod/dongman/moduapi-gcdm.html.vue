<template><div><ArtPlayer :src="state.src" :config="artPlayerConfig" /><Tabs id="2" :data='[{"id":"魔都资源"},{"id":"索尼资源"}]' :active="0">
<template #title0="{ value, isActive }">魔都资源</template>
<template #title1="{ value, isActive }">索尼资源</template>
<template #tab0="{ value, isActive }">
<SiteInfo v-for="(item,k) in state.vodmd" :name="item.vod_name" :desc="item.vod_content" :logo="item.vod_pic"
  :preview="item.vod_pic" url="" @click="vodmdurl(k)" />
</template>
<template #tab1="{ value, isActive }">
<SiteInfo v-for="(item,k) in state.vodsn" :name="item.vod_name" :desc="item.vod_content" :logo="item.vod_pic"
  :preview="item.vod_pic" url="" @click="vodsnurl(k)" />
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
    "vod-gcdm",
    {
      src:"",
      vodmd: [],
      vodsn: [],
      title:"",
      tip: "欢迎光临",
      PlayList: []
    }
  )
 
  onMounted(async () => {
    const moduapi = await vod.find({ "name": "moduapi-gcdm" })
    const suonizy = await vod.find({ "name": "suonizy-gcdm" })
    state.value.vodmd = moduapi.data
    state.value.vodsn = suonizy.data
    vodmdurl(0)
  });
  const vodmdurl = (key) => {
    const { vodmd } = state.value
    state.value.PlayList =vodmd[key].play_list
    state.value.src = vodmdz[key].play_list[0].url
  }
  const vodsnurl = (key) => {
    const { vodsn } = state.value
    state.value.PlayList =vodsn[key].play_list
    state.value.src = vodsn[key].play_list[0].url
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