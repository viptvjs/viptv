---
title: 华语女歌手 - G.E.M.邓紫棋
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
- 女歌手
tag:
- 女歌手
- G.E.M.邓紫棋
---

<ArtPlayer :src="state.src" :config="mpConfig(state.p)" />

::: tabs #music-vgs
@tab:active G.E.M.邓紫棋 #music-vgs-a
<SiteInfo v-for="(item,k) in state.p" :name="item.title" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
  @click="a(k)" />
:::

<script setup>
  import { mpConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "music-vgs-dzq",
    {
      p: [],
      src: "",
    }
  )

  onMounted(async () => {
    await a(0)
  });
  const a = async (key) => {
    const data = await (await fetch("https://cfss.cc/Qs/kgs.php?ss=G.E.M.邓紫棋")).json();
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