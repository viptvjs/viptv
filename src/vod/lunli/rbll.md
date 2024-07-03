---
title: 日本伦理🔞🈲
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 日本伦理
containerClass: toc-false
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-rbll
@tab:active 索尼资源 #vod-rbll-a
<SiteInfo v-for="(item,k) in state.a" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
:::

<script setup>
  import vod from '@db/vod.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "vod-rbll",
    {
      src:"",
      a: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await vod.find({ "name": "snzy-59" })).data
    a(0)
  });
  const a = (key) => {
    const { a } = state.value
    state.value.p = a
    state.value.src = a[key].url
  }
</script>
