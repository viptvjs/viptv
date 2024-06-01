---
title: 央视频测试
icon: fa-solid fa-user-graduate
date: 2020-01-01
order: 4
category:
  - 直播
tag:
  - 测试
---

<ArtPlayer :src="state.Src" :config="mpConfig(state.PlayList)" />

::: tip 央视频直播
全面汇聚央视、卫视频道，您的专属 全面聚合高清资源 旗舰平台，品质首选！

https://www.yangshipin.cn/#/tv/home

:::

<script setup>
 import axios from"axios"
  import { iptv } from '@db'
  import { mpConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const vodId = "ss_itv"
  const state = useStorage(
    vodId,
    {
      Src: "",
      PlayList: []
    }
  )
  onMounted(async () => {
    axios.get("/cors/https://api.zxz.ee/api/bilibili/?url=BV1MH4y1p7Mk").then((res)=>{
      state.value.Src= res.data.url
    })
  });

</script>
