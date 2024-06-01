---
title: 麻豆视频
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 动漫
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.PlayList)" />

::: tabs
@tab:active 麻豆视频
<SiteInfo v-for="(item,k) in state.vodmd" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodmdurl(k)" />
@tab 果冻传媒
<SiteInfo v-for="(item,k) in state.vodgd" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodgdurl(k)" />
@tab 天美传媒
<SiteInfo v-for="(item,k) in state.vodtm" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodtmurl(k)" />
@tab 蜜桃传媒
<SiteInfo v-for="(item,k) in state.vodmt" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodmturl(k)" />
@tab 玩偶姐姐
<SiteInfo v-for="(item,k) in state.vodwo" :name="item.title" desc="" :logo="item.vod_pic"
:preview="item.vod_pic" url="" @click="vodwourl(k)" />
:::

<script setup>
  import { vod } from '@db'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const state = useStorage(
    "vod-mdxjj",
    {
      src:"",
      vodmd: [],
      vodgd: [],
      vodtm: [],
      vodmt: [],
      vodwo: [],
      PlayList: []
    }
  )

  onMounted(async () => {
    const md = await vod.find({ "name": "mdsp-1" })
    const gd = await vod.find({ "name": "mdsp-2" })
    const tm = await vod.find({ "name": "mdsp-3" })
    const mt = await vod.find({ "name": "mdsp-4" })
    const wo = await vod.find({ "name": "mdsp-22" })
    state.value.vodmd = md.data
    state.value.vodgd = gd.data
    state.value.vodtm = tm.data
    state.value.vodmt = mt.data
    state.value.vodwo = wo.data
    vodmdurl(0)
  });
  const vodmdurl = (key) => {
    const { vodmd } = state.value
    state.value.PlayList =vodmd
    state.value.src = vodmd[key].url
  }
  const vodgdurl = (key) => {
    const { vodgd } = state.value
    state.value.PlayList =vodgd
    state.value.src = vodgd[key].url
  }
  const vodtmurl = (key) => {
    const { vodtm } = state.value
    state.value.PlayList =vodtm
    state.value.src = vodtm[key].url
  }
  const vodmturl = (key) => {
    const { vodmt } = state.value
    state.value.PlayList =vodmt
    state.value.src = vodmt[key].url
  }
   const vodwourl = (key) => {
    const { vodwo } = state.value
    state.value.PlayList =vodwo
    state.value.src = vodwo[key].url
  }
</script>
