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

<ArtPlayer :src="state.src" :config="hlsConfig(state.PlayList)" />

::: tabs
@tab:active 暴风资源
<SiteInfo v-for="(item,k) in state.vodbf" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodbf(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const state = useStorage(
    "vod-rbj",
    {
      src:"",
      vodbf: [],
      PlayList: []
    }
  )

  onMounted(async () => {
    const bfzy = await vod.find({ "name": "bfzy-36" })
    state.value.vodbf = bfzy.data
    vodbfurl(0)
  });
  const vodbfurl = (key) => {
    const { vodbf } = state.value
    state.value.PlayList =vodbf[key].play_list
    state.value.src = vodbf[key].play_list[0].url
  }
</script>
