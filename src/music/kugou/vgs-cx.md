---
title: 华语女歌手 - 程响
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
- 女歌手
tag:
- 女歌手
- 程响
---

<ArtPlayer :src="state.src" :config="mpConfig(state.p)" />

::: tabs #music-vgs
@tab:active 程响 #music-vgs-a
<SiteInfo v-for="(item,k) in state.p" :name="item.title" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
  @click="a(k)" />
:::

<script setup>
  import { mpConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "music-vgs-cx",
    {
      p: [],
      src: "",
    }
  )

  onMounted(async () => {
    await a(0)
  });
  const a = async (key) => {
    const data = await (await fetch("https://cfss.cc/Qs/kgs.php?ss=程响")).json();
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