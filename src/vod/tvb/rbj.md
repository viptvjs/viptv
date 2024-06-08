---
title: 日本剧
icon: clone
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 日本剧
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-rbj
@tab:active 暴风资源 #vod-rbj-a
<SiteInfo v-for="(item,k) in state.a" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
@tab 暴风资源 #vod-rbj-b
<SiteInfo v-for="(item,k) in state.b" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="b(k)" />
:::

<script setup>
  import vod from '@db/vod.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "vod-rbj",
    {
      src:"",
      a: [],
      b: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "bfzy-36" })).data
    state.value.b = (await vod.find({ "name": "yzzy-18" })).data
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
</script>
