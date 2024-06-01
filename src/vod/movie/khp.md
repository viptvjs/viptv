---
title: 科幻片
icon: photo-film
date: 2020-01-01
order: 4
category:
- 影视点播
tag:
- 科幻
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.PlayList)" />

::: tabs
@tab:active 鱼乐资源
<SiteInfo v-for="(item,k) in state.vodbf" :name="item.title" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
  @click="vodbfurl(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const state = useStorage(
    "vod-khp",
    {
      src: "",
      vodbf: [],
      PlayList: []
    }
  )

  onMounted(() => {
    nextTick(async () => {
      const bfzy = await vod.find({ "name": "ylzy-9" })
      state.value.vodbf = bfzy.data
      vodbfurl(0)
    })
  });

  const vodbfurl = (key) => {
    const { vodbf } = state.value
    state.value.PlayList = vodbf
    state.value.src = vodbf[key].url
  }
</script>