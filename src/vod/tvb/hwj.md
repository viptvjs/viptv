---
title: 海外剧
icon: clone
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 海外剧
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-hwj
@tab:active 量子资源 #vod-hwj-a
<SiteInfo v-for="(item,k) in state.a" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
@tab 暴风资源 #vod-hwj-b
<SiteInfo v-for="(item,k) in state.b" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="b(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "vod-hwj",
    {
      src:"",
      a: [],
      b: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "lzzy-23" })).data
    state.value.b = (await vod.find({ "name": "bfzy-37" })).data
    a(0)
  });
  const a = (key) => {
    const { a } = state.value
    state.value.p = a[key].play_list
    state.value.src = a[key].play_list[0].url
  }
  const burl = (key) => {
    const { b } = state.value
    state.value.p = b[key].play_list
    state.value.src = b[key].play_list[0].url
  }
</script>
