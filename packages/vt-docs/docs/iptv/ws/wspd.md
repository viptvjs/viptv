---
title: 卫视频道
icon: fa-solid fa-user-graduate
order: 4
category:
  - 直播
tag:
  - 测试
---

::: tip 卫视频道
:::
<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />
::: tabs #vod-wspd
@tab:active IP源 #iptv-wspd-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" logo="/logo.svg" preview="/assets/png/4h-transparent-file.png" url=""
@click="a(k)" />
:::

<script setup>
  import { iptv } from '@db'
  import { hlsConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "iptv-weish",
    {
      src: "",
      a: [],
      p: []
    }
  )
  onMounted(() => {
    a(0)
  });

  const a = async (k) => {
    const { data } = await iptv.find({ "name": "ss_itv" })
    let kk = []
    data.map((res) => {
      if (res.title.includes("卫视")) {
        kk.push({ title: res.title, url: res.url });
      }
    });
    state.value.a = kk
    state.value.p = kk
    state.value.src = kk[k].url
  };

</script>