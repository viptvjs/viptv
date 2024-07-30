---
title: 古装仙侠
icon: file-video
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 短剧
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-gzxx
@tab:active 鱼乐资源 #vod-gzxx-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" :logo="item.vod_pic" :preview="item.vod_pic"
url="" @click="a(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "vod-gzxx",
    {
      src: "",
      a: [],
      p: []
    }
  )

  const a = (key) => {
    const { a } = state.value
    state.value.p = a
    state.value.src = a[key].url
  }

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "ylzy-66" })).data
    a(0)
  });
</script>
