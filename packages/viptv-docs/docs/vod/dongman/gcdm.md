---
title: 国产动漫
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 动漫
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />



::: tabs #vod-gcdm
@tab:active 魔都资源 #vod-gcdm-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
  @click="a(k)" />
@tab 索尼资源 #vod-gcdm-b
<SiteInfo v-for="(item,k) in state.b" :name="item.vod_name" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
  @click="b(k)" />
@tab 量子资源 #vod-gcdm-c
<SiteInfo v-for="(item,k) in state.c" :name="item.vod_name" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
  @click="c(k)" />
@tab 暴风资源 #vod-gcdm-d
<SiteInfo v-for="(item,k) in state.d" :name="item.vod_name" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
  @click="d(k)" />
@tab 优质资源 #vod-gcdm-e
<SiteInfo v-for="(item,k) in state.e" :name="item.vod_name" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
  @click="e(k)" />
:::

<script setup>

  import { vod } from '@db'
  import { hlsConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "vod-gcdm",
    {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      p: [],
      src: "",
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "mdzy-1" })).data
    state.value.b = (await vod.find({ "name": "snzy-29" })).data
    state.value.c = (await vod.find({ "name": "lzzy-29" })).data
    state.value.d = (await vod.find({ "name": "bfzy-40" })).data
    state.value.e = (await vod.find({ "name": "yzzy-66" })).data
    a(0)
  });
  const a = (key) => {
    const { a } = state.value
    state.value.p = a
    state.value.src = a[key].url
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
  const e = (key) => {
    const { e } = state.value
    state.value.p = e[key].play_list
    state.value.src = e[key].play_list[0].url
  }
</script>