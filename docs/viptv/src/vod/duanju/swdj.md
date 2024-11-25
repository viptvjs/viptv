---
title: 爽文短剧
icon: file-video
date: 2020-01-01
order: 1
category:
  - 影视点播
tag:
  - 短剧
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-swdj
@tab:active 索尼资源 #vod-swdj-a
<SiteInfo v-for="(item,k) in state.a" :name="item.vod_name" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
@click="a(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "vod-swdj",
    {
      src: "",
      a: [],
      p: []
    }
  )
  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "snzy-54" })).data
    a(0)
  });
  const a = (key) => {
    const { a } = state.value
    state.value.p = a[key].play_list
    state.value.src = a[key].play_list[0].url
  }
</script>
