---
title: 反转爽剧
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
@tab:active 鱼乐资源
<SiteInfo v-for="(item,k) in state.vodyl" :name="item.title" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
@click="vodylurl(k)" />
:::

<script setup lang="ts">
  import { vod } from 'db'
  import { artConfig, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const state = useStorage(
    "vod-fzsj",
    {
      src: "",
      vodyl: [],
      PlayList: []
    }
  )
  onMounted(async () => {
    const ylzy = await vod.find({ "name": "ylzy-65" })
    state.value.vodyl = ylzy.data
    vodylurl(0)
  });
  const vodylurl = (key) => {
    const { vodyl } = state.value
    state.value.PlayList = vodyl
    state.value.src = vodyl[key].url
  }
</script>
