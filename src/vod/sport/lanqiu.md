---
title: 篮球
icon: basketball
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 篮球
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-lanqiu
@tab:active 索尼资源 #vod-lanqiu-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
@tab 鱼乐资源 #vod-lanqiu-b
<SiteInfo v-for="(item,k) in state.b" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="b(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "vod-lanqiu",
    {
      src:"",
      a: [],
      b: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "snzy-49" })).data
    state.value.b = (await vod.find({ "name": "ylzy-49" })).data
    a(0)
  });
   const a = (key) => {
    const { a } = state.value
    state.value.p =a
    state.value.src = a[key].url
  }
  const b = (key) => {
    const { b } = state.value
    state.value.p =b
    state.value.src = b[key].url
  }
</script>
