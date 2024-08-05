---
title: 国产剧
icon: clone
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 国产剧
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-gcj
@tab:active 量子资源 #vod-gcj-a
<SiteInfo v-for="(item,k) in state.a" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
@tab 优质资源 #vod-gcj-b
<SiteInfo v-for="(item,k) in state.b" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="b(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted,onUnmounted } from "vue";
  const state = useStorage(
    "vod-gcj",
    {
      src:"",
      a: [],
      b: [],
      p: []
    }
  )


  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "lzzy-13" })).data
    state.value.b = (await vod.find({ "name": "yzzy-12" })).data
    a(0)
  });
  const a = (key) => {
    const { a } = state.value
    state.value.p = a[key].play_list
    state.value.src = a[key].play_list[0].url
  }
  const b = (key) => {
    const { b } = state.value
    state.value.p = b[key].play_list
    state.value.src = b[key].play_list[0].url
  }
  onUnmounted(async () => {
    state.value = null
  });
</script>
