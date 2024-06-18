---
title: 日韩动漫
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 动漫
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-rhdm
@tab:active 索尼资源 #vod-rhdm-a
<SiteInfo v-for="(item,k) in state.a" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
@tab 量子资源 #vod-rhdm-b
<SiteInfo v-for="(item,k) in state.b" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="b(k)" />
@tab 优质资源 #vod-rhdm-c
<SiteInfo v-for="(item,k) in state.c" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="c(k)" />
:::

<script setup>
  import vod from '@db/vod.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "vod-rhdm",
    {
      src:"",
      a: [],
      b: [],
      c: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "snzy-30" })).data
    state.value.b = (await vod.find({ "name": "lzzy-30" })).data
    state.value.c = (await vod.find({ "name": "yzzy-67" })).data
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
</script>
