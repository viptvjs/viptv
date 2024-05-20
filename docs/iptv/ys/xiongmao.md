---
title: 熊猫频道
icon: fa-solid fa-user-graduate
date: 2020-01-01
order: 4
category:
  - 直播
tag:
  - 熊猫
---

<ArtPlayer :src="state.Src" :config="artConfig(Hls,state.PlayList)" type="Hls"/>

::: tip 熊猫直播
全面汇聚央视、卫视频道，您的专属 全面聚合高清资源 旗舰平台，品质首选！
:::

<script setup lang="ts">
  import { iptv } from 'db'
  import { artConfig, Hls } from 'cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick, onDeactivated } from "vue";
  const vodId = "xiongmao"
  const state = useStorage(
    vodId,
    {
      Src:"",
      PlayList: []
    }
  )
  onMounted(() => {
    nextTick(async () => {
      const { data } = await iptv.find({ "name": vodId })
      state.value.PlayList = data
      state.value.Src = data[0].url
    })
  });
</script>
