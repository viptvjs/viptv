---
title: YY - 热舞
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
- YY
tag:
- 音乐
---

<ArtPlayer :src="state.src" :config="mpConfig(state.p)" />

::: tabs #music-ngs
@tab:active YY - 热舞
<SiteInfo v-for="(item,k) in state.p" :name="item.title" desc="" logo="/logo.svg" preview="/assets/png/4h-transparent-file.png" url=""
  @click="a(k)" />
:::

<script setup>
  import { mpConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "yy-rw",
    {
      p: [],
      src: "",
    }
  )

  onMounted(async () => {
    await a(0)
  });
  const a = async (key) => {
    const data = await (await fetch("https://cfss.cc/Qs/yy.php?vid=33559944&x=2&p=1")).json();
    state.value.p = data.map((red) => {
      return {
        title: red.label,
        vod_pic: red.tp,
        url: red.src,
      };
    });
    state.value.src = data[key].src
  }

</script>