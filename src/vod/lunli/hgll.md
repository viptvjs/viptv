---
title: 韩国伦理
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 韩国
---

<ArtPlayer :src="state.src" :config="artConfig(Hls,state.PlayList)" type="Hls"/>

::: tabs
@tab:active 索尼资源
<SiteInfo v-for="(item,k) in state.vodsn" :name="item.vod_name" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodsnurl(k)" />
:::

<script setup lang="ts">
  import { vod } from 'db'
  import { artConfig, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const state = useStorage(
    "vod-hgll",
    {
      src:"",
      vodsn: [],
      PlayList: []
    }
  )
 
  onMounted(async () => {
    const sn = await vod.find({ "name": "snzy-57" })
    state.value.vodsn = sn.data
    vodmdurl(0)
  });
  const vodsnurl = (key) => {
    const { vodsn } = state.value
    state.value.PlayList =vodsn
    state.value.src = vodsn[key].url
  }
</script>
