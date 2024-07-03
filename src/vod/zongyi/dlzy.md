---
title: 大陆综艺
icon: star
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 综艺
containerClass: toc-false
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-dlzy
@tab:active 索尼资源 #vod-dlzy-a
<SiteInfo v-for="(item,k) in state.a" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
@tab 暴风资源 #vod-dlzy-b
<SiteInfo v-for="(item,k) in state.b" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="b(k)" />
@tab 量子资源 #vod-dlzy-c
<SiteInfo v-for="(item,k) in state.c" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="c(k)" />
@tab 优质资源 #vod-dlzy-d
<SiteInfo v-for="(item,k) in state.d" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="d(k)" />
:::

<script setup>
  import vod from '@db/vod.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "vod-dlzy",
    {
      src:"",
      a: [],
      b: [],
      c: [],
      d: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "snzy-25" })).data
    state.value.b = (await vod.find({ "name": "bfzy-46" })).data
    state.value.c = (await vod.find({ "name": "lzzy-25" })).data
    state.value.d = (await vod.find({ "name": "yzzy-62" })).data
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
  const c = (key) => {
    const { c } = state.value
    state.value.p = c[key].play_list
    state.value.src = c[key].play_list[0].url
  }
  const d = (key) => {
    const { d } = state.value
    state.value.p = d[key].play_list
    state.value.src = d[key].play_list[0].url
  }
</script>
