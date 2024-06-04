---
title: DJ舞小姐姐
icon: fa-solid fa-user-graduate
date: 2020-01-01
order: 4
category:
  - 影视点播
tag:
  - 小姐姐
---

<ArtPlayer :src :config="mpConfig(state.p)" />

::: tip DJ 舞小姐姐|福利小视频
据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！
:::

<script setup>
  import { vod } from '@db'
  import { mpConfig } from '@cps/artConst'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";
  const vodId = "vod-djw"
  const state = useStorage(
    vodId,
    {
      p: []
    }
  )
  const src = state.value.p[0] ? state.value.p[0].url : ""
  onMounted(async () => {
    const { data } = await vod.find({ "name": vodId })
    state.value.p = data.slice(0, 99)
});
</script>
