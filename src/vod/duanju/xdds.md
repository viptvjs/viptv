---
title: 现代都市
icon: file-video
date: 2020-01-01
order: 1
category:
  - 影视点播
tag:
  - 短剧
---

<ArtPlayer :src="state.src" :config="artConfig(Hls,state.PlayList)" type="Hls"/>

::: tabs
@tab:active 索尼资源
<SiteInfo v-for="(item,k) in state.vodsn" :name="item.vod_name" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
@click="vodsnurl(k)" />
:::

<script setup lang="ts">
  import { vod } from 'db'
  import { artConfig, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const state = useStorage(
    "vod-xdds",
    {
      src: "",
      vodsn: [],
      PlayList: []
    }
  )
  onMounted(async () => {
    const snzy = await vod.find({ "name": "snzy-69" })
    state.value.vodsn = snzy.data
    vodsnurl(0)
  });
  const vodsnurl = (key) => {
    const { vodsn } = state.value
    state.value.PlayList = vodsn[key].play_list
    state.value.src = vodsn[key].play_list[0].url
  }
</script>
