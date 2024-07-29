---
title: 港台三级🔞🈲
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 港台三级
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #vod-gtsj
@tab:active 索尼资源 #vod-gtsj-a
<SiteInfo v-for="(item,k) in state.a" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="a(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "vod-gtsj",
    {
      src:"",
      a: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.vodsn = (await vod.find({ "name": "snzy-56" })).data
    a(0)
  });
  const a = (key) => {
    const { a } = state.value
    state.value.p =a
    state.value.src = a[key].url
  }
</script>
