---
title: 台湾剧
icon: clone
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 台湾剧
containerClass: toc-false
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-twj
@tab:active优质资源 #vod-twj-c
<SiteInfo v-for="(item,k) in state.a" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
:::

<script setup>
  import vod from '@db/vod.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "vod-twj",
    {
      src:"",
      a: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "yzzy-13" })).data
    a(0)
  });
  const a = (key) => {
    const { a } = state.value
    state.value.p = a[key].play_list
    state.value.src = a[key].play_list[0].url
  }
</script>