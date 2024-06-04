---
title: 反转爽剧
icon: file-video
date: 2020-01-01
order: 1
category:
  - 影视点播
tag:
  - 短剧
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-fzsj
@tab:active 鱼乐资源 #vod-fzsj-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
@click="a(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const state = useStorage(
    "vod-fzsj",
    {
      src: "",
      a: [],
      p: []
    }
  )
  onMounted(async () => {
    state.value.a =( await vod.find({ "name": "ylzy-65" })).data
    a(0)
  });
  const a = (key) => {
    const { a } = state.value
    state.value.p = a
    state.value.src = a[key].url
  }
</script>
