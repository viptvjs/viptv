---
title: 动作片
icon: photo-film
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 篮球
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-dzp
@tab:active 量子资源 #vod-dzp-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
@tab 鱼乐资源 #vod-dzp-b
<SiteInfo v-for="(item,k) in state.b" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="b(k)" />
@tab 暴风资源 #vod-dzp-c
<SiteInfo v-for="(item,k) in state.c" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="c(k)" />
@tab 优质资源 #vod-dzp-d
<SiteInfo v-for="(item,k) in state.d" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="d(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "vod-dzp",
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
    state.value.a = (await vod.find({ "name": "lzzy-6" })).data
    state.value.b = (await vod.find({ "name": "ylzy-6" })).data
    state.value.c = (await vod.find({ "name": "bfzy-21" })).data
    state.value.d = (await vod.find({ "name": "yzzy-5" })).data
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
  const d = (key) => {
    const { d } = state.value
    state.value.p = d
    state.value.src = d[key].url
  }
</script>
