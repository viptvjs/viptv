---
title: 篮球
icon: basketball
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 篮球
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.PlayList)" />

::: tabs
@tab:active 索尼资源
<SiteInfo v-for="(item,k) in state.vodsn" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodsnurl(k)" />
@tab 鱼乐资源
<SiteInfo v-for="(item,k) in state.vodyl" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodylurl(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";

  const state = useStorage(
    "vod-lanqiu",
    {
      src:"",
      vodsn: [],
      vodyl: [],
      PlayList: []
    }
  )

  onMounted(() => {
    nextTick(async () => {
      const suonizy = await vod.find({ "name": "snzy-49" })
      const ylzy = await vod.find({ "name": "ylzy-49" })
      state.value.vodsn = suonizy.data
      state.value.vodyl = ylzy.data
      vodsnurl(0)
    })
  });
   const vodsnurl = (key) => {
    const { vodsn } = state.value
    state.value.PlayList =vodsn
    state.value.src = vodsn[key].url
  }
  const vodylurl = (key) => {
    const { vodyl } = state.value
    state.value.PlayList =vodyl
    state.value.src = vodyl[key].url
  }
</script>
