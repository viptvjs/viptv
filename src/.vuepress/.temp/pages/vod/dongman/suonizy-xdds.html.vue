<template><div><ArtPlayer :src="state.src" :config="artPlayerConfig" /><Tabs id="2" :data='[{"id":"最近更新"},{"id":"资源出处"}]' :active="0">
<template #title0="{ value, isActive }">最近更新</template>
<template #title1="{ value, isActive }">资源出处</template>
<template #tab0="{ value, isActive }">
<SiteInfo v-for="(item,k) in state.vod" :name="item.vod_name" :desc="item.vod_content" :logo="item.vod_pic"
  :preview="item.vod_pic" url="" @click="url(k)" />
</template>
<template #tab1="{ value, isActive }">
<p>资源链来自量子资源站,感谢提供！</p>
</template>
</Tabs>
</div></template>


<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { poster, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const vodId = "suonizy-xdds"
  const state = useStorage(
    vodId,
    {
      src:"",
      vod: [],
      PlayList: []
    }
  )
 
  onMounted(async () => {
    const { data } = await vod.find({ "name": vodId })
    state.value.vod = data
    url(0)
  });
 const url = (key) => {
    const { vod } = state.value
    state.value.PlayList =vod[key].play_list
    state.value.tip = vod[key].vod_content
    state.value.src = vod[key].play_list[0].url
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