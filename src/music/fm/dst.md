---
title: 都市台
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
- 都市台
tag:
- 都市台
---

<VidStack :src="state.src" />


::: tabs #fm-dst
@tab:active 都市台 #fm-dst-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" :logo="item.pic" :preview="item.pic" url="" @click="a(k)" />
:::

<script setup>
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "fm-dst",
    {
      src: "",
      a: []
    }
  )

  onMounted(async () => {
    await a(0)
  });

  const a = async (k) => {
    const { Data } = await (await fetch("https://cfss.cc/fm/qt.php?fm=441")).json();
    state.value.a = Data.map((res) => {
      return {
        title: res.title,
        src: res.url,
        pic: res.pic,
        desc: res.author
      }
    })
    state.value.src = Data[k].url
  }

</script>