---
title: 华语男歌手 - 郭富城
icon: person-falling-burst
date: 2020-01-01
order: 4
category:
- 男歌手
tag:
- 郭富城
---

<ArtPlayer :src="state.src" :config="mpConfig(state.p)" />

::: tabs #ngs-gfc
@tab:active 华语男歌手 - 郭富城
<SiteInfo v-for="(item,k) in state.p" :name="item.title" desc="" :logo="item.vod_pic" :preview="item.vod_pic" url=""
  @click="a(k)" />
:::

<script setup>
  import { mpConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "ngs-gfc",
    {
      p: [],
      src: "",
    }
  )

  onMounted(async () => {
    await a(0)
  });
  const a = async (key) => {
    const data = await (await fetch("https://cfss.cc/Qs/kgs.php?ss=郭富城")).json();
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