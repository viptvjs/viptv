---
title: 麻豆视频🔞🈲
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 麻豆视频
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-mdxjj
@tab:active 麻豆视频 #vod-mdxjj-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
@tab 果冻传媒 #vod-mdxjj-b
<SiteInfo v-for="(item,k) in state.b" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="b(k)" />
@tab 天美传媒 #vod-mdxjj-c
<SiteInfo v-for="(item,k) in state.c" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="c(k)" />
@tab 蜜桃传媒 #vod-mdxjj-d
<SiteInfo v-for="(item,k) in state.d" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="d(k)" />
@tab 玩偶姐姐 #vod-mdxjj-e
<SiteInfo v-for="(item,k) in state.e" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="e(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "vod-mdxjj",
    {
      src:"",
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "mdsp-1" })).data
    state.value.b = (await vod.find({ "name": "mdsp-2" })).data
    state.value.c = (await vod.find({ "name": "mdsp-3" })).data
    state.value.d = (await vod.find({ "name": "mdsp-4" })).data
    state.value.e = (await vod.find({ "name": "mdsp-22" })).data
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
   const e = (key) => {
    const { e } = state.value
    state.value.p = e
    state.value.src = e[key].url
  }
</script>
