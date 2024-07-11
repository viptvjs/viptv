---
title: 经济台
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
- 经济台
tag:
- 经济台
---

<VidStack :src="state.src" />

::: tabs #fm-jjt
@tab:active 经济台 #fm-jjt-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title"  :logo="item.pic" :preview="item.pic"  url=""
  @click="a(k)"  />
:::

<script setup>
  import { useStorage } from '@vueuse/core'
  import { onMounted, ref } from "vue";

  const state = useStorage(
    "fm-jjt",
    {
      src: "",
      a: []
    }
  )
  onMounted(async () => {
    await a(0)
  });

  const a = async (k) => {
    const { Data } = await (await fetch("https://cfss.cc/fm/qt.php?fm=439")).json();
    state.value.a = Data.map((res) => {
      return {
        title: res.title,
        src: res.url,
        pic: res.pic,
        desc: res.author
      }
    })
    state.value.src=Data[k].url
  }

</script>