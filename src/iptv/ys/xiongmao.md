---
title: 熊猫直播
icon: fa-solid fa-user-graduate
date: 2020-01-01
order: 4
category:
  - 直播
tag:
  - 熊猫
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tip 熊猫直播
全面汇聚央视、卫视频道，您的专属 全面聚合高清资源 旗舰平台，品质首选！
:::

<script setup>
  import iptv from '@db/iptv.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "xiongmao",
    {
      src:"",
      p: []
    }
  )

  onMounted(async () => {
    const { data } = await iptv.find({ "name": "xiongmao" })
    state.value.p = data
    state.value.src = data[0].url
  });
</script>
