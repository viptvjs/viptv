---
title: 伦理片
icon: hat-cowboy
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 伦理片
---
<ArtPlayer :src="state.src" :config="artPlayerConfig" />

::: tabs
@tab:active 最近更新

<SiteInfo v-for="(item,k) in state.vod" :name="item.vod_name" desc="" :logo="item.vod_pic"
  :preview="item.vod_pic" url="" @click="url(k)" />
@tab 资源出处
资源链来自量子资源站,感谢提供！
:::

<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { poster, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const vodId = "lzcaiji-lunli"
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