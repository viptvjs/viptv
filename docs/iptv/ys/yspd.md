---
title: 央视频道
icon: fa-solid fa-user-graduate
order: 4
category:
  - 直播
tag:
  - 测试
---

::: tip 央视频道
本站为非盈利网站,內容出自原创和互联网, 如有侵权请及时联系我们删除！本站不承担任何争议和法律责任！
:::
<ArtPlayer :src="state.src" :config="hlsConfig(state.p)" />
::: tabs #vod-yspd
@tab:active IP源 #iptv-yspd-a
<SiteInfo v-for="(item,k) in state.a" :name="item.title" desc="" logo="/logo.svg" preview="/assets/png/4h-transparent-file.png" url=""
@click="a(k)" />
:::

<script setup>
  import { iptv } from '@db'
  import { hlsConfig } from '@act'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const state = useStorage(
    "iptv-cctv",
    {
      src: "",
      a:[],
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
      if (res.title.includes("CCTV")) {
        kk.push({ title: res.title, url: res.url });
      }
    });
    state.value.a = kk
    state.value.p = kk
    state.value.src = kk[k].url
  };

</script>