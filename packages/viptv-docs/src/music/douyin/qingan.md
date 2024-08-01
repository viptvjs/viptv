---
title: 情感
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
- 音乐
tag:
- 情感
---

<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />

::: tabs #music-ngs
@tab:active 情感
<SiteInfo v-for="(item,k) in state.p" :name="item.title" desc="" logo="/logo.svg" preview="/assets/png/4h-transparent-file.png" url=""
  @click="a(k)" />
:::

<script setup>

  import { vod } from '@db'
  import { hlsConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "music-dy-qg",
    {
      p: [],
      src: "",
    }
  )

  onMounted(async () => {
    a(0)
  });


  const getJson = async (url) => {
    const res = await (await fetch(url)).json();
    return res.map((red) => {
      return {
        title: red.label,
        url: red.src,
      };
    });
  };
  const a = async (key) => {
    const data = await getJson("https://cfss.cc/Qs/dy.php?id=2836")
    state.value.p = data
    state.value.src = data[key].url
  }

</script>