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
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "vod-rbj",
    {
      src:"",
      a: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "bfzy-36" })).data
    a(0)
  });
  const a = (key) => {
    const { a } = state.value
    state.value.p = a[key].play_list
    state.value.src = a[key].play_list[0].url
  }
</script>
