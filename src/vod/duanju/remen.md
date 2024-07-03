---
title: 热门短剧
icon: file-video
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 短剧
containerClass: toc-false
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-remen
@tab:active 量子资源 #vod-remen-a
<SiteInfo v-for="(item,k) in state.a" :name="item.vod_name" desc="" :logo="item.vod_pic" :preview="item.vod_pic"
url="" @click="a(k)" />
@tab:active 优质资源 #vod-remen-b
<SiteInfo v-for="(item,k) in state.b" :name="item.vod_name" desc="" :logo="item.vod_pic" :preview="item.vod_pic"
url="" @click="b(k)" />
:::

<script setup>
  import vod from '@db/vod.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "vod-remen",
    {
      src: "",
      a: [],
      b: [],
      p: []
    }
  )
  const a = (key) => {
    const { a } = state.value
    state.value.p = a[key].play_list
    state.value.src = a[key].play_list[0].url
  }
   const b = (key) => {
    const { b } = state.value
    state.value.p =b[key].play_list
    state.value.src = b[key].play_list[0].url
  }
  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "lzzy-46" })).data
    state.value.b = (await vod.find({ "name": "yzzy-83" })).data
    a(0)
  });
</script>