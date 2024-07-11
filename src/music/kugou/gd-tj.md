---
title: 酷狗歌单 - 随机30首推荐
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
- 音乐
tag:
- 酷狗歌单
---

<VidStack :src="state.src" />


::: tabs #gd-tj
@tab:active 酷狗歌单 - 推荐 #gd-tj-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" :logo="item.pic" :preview="item.pic" url="" @click="a(k)" />
:::

<script setup>
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "gd-tj",
    {
      src: "",
      a: []
    }
  )

  onMounted(async () => {
    await a(0)
  });

  const a = async (k) => {
    const { Data } = await (await fetch("https://cfss.cc/mp3/kg.php?ss=")).json();
    state.value.a = Data.slice(0, 30).map((res) => {
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