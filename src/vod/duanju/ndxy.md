---
title: 脑洞悬疑
icon: file-video
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 短剧
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-ndxy
@tab:active 鱼乐资源 #vod-ndxy-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" :logo="item.vod_pic" :preview="item.vod_pic"
url="" @click="a(k)" />
:::

<script setup>
  import vod from '@db/vod.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "vod-ndxy",
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
    state.value.a = (await vod.find({ "name": "ylzy-68" })).data
    a(0)
  });

</script>
