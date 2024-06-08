---
title: 成人直播
icon: https://assets.strpst.com/assets/common/components/ui/CountryFlag/images/ug.svg
date: 2020-01-01
order: 4
category:
  - IPTV
tag:
  - 成人直播
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #iptv-xgsp
@tab:active 女主播#iptv-xgsp-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" :logo="item.avatar" :preview="item.preview"
  url="" @click="a(k)" />
@tab 情侣 #iptv-xgsp-b
<SiteInfo v-for="(item,k) in state.b" :name="item.title" desc="" :logo="item.avatar" :preview="item.preview"
  url="" @click="b(k)" />
@tab 男主播 #iptv-xgsp-c
<SiteInfo v-for="(item,k) in state.c" :name="item.title" desc="" :logo="item.avatar" :preview="item.preview"
  url="" @click="c(k)" />
@tab 变性人 #iptv-xgsp-d
<SiteInfo v-for="(item,k) in state.d" :name="item.title" desc="" :logo="item.avatar" :preview="item.preview"
  url="" @click="d(k)" />
:::

<script setup>
  import  iptv from '@db/iptv.js'
  import { hlsConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "iptv-xgsp",
    {
      src: "",
      a: [],
      b: [],
      c: [],
      d: [],
      p: []
    }
  )

  onMounted(async () => {
    state.value.a = (await iptv.find({ "name": "xgsp-girls" })).data
    state.value.b = (await iptv.find({ "name": "xgsp-couples" })).data
    state.value.c = (await iptv.find({ "name": "xgsp-man" })).data
    state.value.d = (await iptv.find({ "name": "xgsp-trans" })).data
    a(0)
  });
  const a = (key) => {
    const { a } = state.value
    state.value.p = a
    state.value.src = a[key].url
  }
  const b = (key) => {
    const { b } = state.value
    state.value.p = b
    state.value.src = b[key].url
  }
  const c = (key) => {
    const { c } = state.value
    state.value.p = c
    state.value.src =c[key].url
  }
  const d = (key) => {
    const { d } = state.value
    state.value.p = d
    state.value.src = d[key].url
  }
</script>