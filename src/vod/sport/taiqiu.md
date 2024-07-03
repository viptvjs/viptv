---
title: 台球
icon: bowling-ball
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 台球
containerClass: toc-false
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-taiqiu
@tab:active 量子资源 #vod-taiqiu-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
:::

<script setup>
  import vod from '@db/vod.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted} from "vue";

  const state = useStorage(
    "vod-taiqiu",
    {
      src:"",
      a: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "lzzy-40" })).data
    a(0)
  });
  const a = (key) => {
    const { a } = state.value
    state.value.p =a
    state.value.src = a[key].url
  }
</script>
