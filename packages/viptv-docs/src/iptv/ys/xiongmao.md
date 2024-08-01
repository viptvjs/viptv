---
title: 熊猫频道
icon: fa-solid fa-user-graduate
order: 4
category:
  - 直播
tag:
  - 熊猫
---

::: tip 熊猫频道
:::
<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />
::: tabs #vod-xiongmao
@tab:active 高清源 #iptv-xiongmao-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" logo="/logo.svg" preview="/assets/png/4h-transparent-file.png" url=""
@click="a(k)" />
:::

<script setup>
  import { iptv } from '@db'
  import { hlsConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "xiongmao",
    {
      src:"",
      a: [],
      p: [],
    }
  )


  onMounted(() => {
    a(0)
  });

  const a = async (k) => {
    const { data } = await iptv.find({ "name": "xiongmao" })
    state.value.a = data
    state.value.p = data
    state.value.src = data[k].url
  };
</script>
