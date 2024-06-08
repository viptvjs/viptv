---
title: 现代都市
icon: file-video
date: 2020-01-01
order: 1
category:
  - 影视点播
tag:
  - 短剧
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-xdds
@tab:active 索尼资源 #vod-xdds-a
<SiteInfo v-for="(item,k) in state.a" :name="item.vod_name" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
@click="a(k)" />
:::

<script setup>
  import vod from '@db/vod.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "vod-xdds",
    {
      src: "",
      a: [],
      p: []
    }
  )
  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "snzy-69" })).data
    a(0)
  });
  const a = (key) => {
    const { a } = state.value
    state.value.p = a[key].play_list
    state.value.src = a[key].play_list[0].url
  }
</script>
