---
title: 足球
icon: futbol
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 足球
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-zuqiu
@tab:active 索尼资源 #vod-zuqiu-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
@tab 鱼乐资源 #vod-zuqiu-b
<SiteInfo v-for="(item,k) in state.b" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="b(k)" />
@tab 暴风资源 #vod-zuqiu-c
<SiteInfo v-for="(item,k) in state.c" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="c(k)" />
:::

<script setup>
  import vod from '@db/vod.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "vod-zuqiu",
    {
      src:"",
      a: [],
      b: [],
      c: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "snzy-50" })).data
    state.value.b = (await vod.find({ "name": "ylzy-50" })).data
    state.value.c = (await vod.find({ "name": "bfzy-54" })).data
    a(0)
  });
   const a = (key) => {
    const { a } = state.value
    state.value.p = a
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
