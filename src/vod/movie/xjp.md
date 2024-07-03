---
title: 喜剧片
icon: photo-film
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 喜剧
containerClass: toc-false
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #
@tab:active 量子资源 #vod-xjp-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
@tab 暴风资源 #vod-xjp-b
<SiteInfo v-for="(item,k) in state.b" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="b(k)" />
@tab 优质资源 #vod-xjp-c
<SiteInfo v-for="(item,k) in state.c" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="c(k)" />
:::

<script setup>
  import vod from '@db/vod.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "vod-xjp",
    {
      src:"",
      a: [],
      b: [],
      c: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "lzzy-7" })).data
    state.value.b = (await vod.find({ "name": "bfzy-22" })).data
    state.value.c = (await vod.find({ "name": "yzzy-6" })).data
    a(0)
  });
   const a = (key) => {
    const { a } = state.value
    state.value.p =a
    state.value.src = a[key].url
  }
  const b = (key) => {
    const { b } = state.value
    state.value.p = b
    state.value.src = b[key].url
  }
  const c = (key) => {
    const { c } = state.value
    state.value.p = c
    state.value.src = c[key].url
  }
</script>
