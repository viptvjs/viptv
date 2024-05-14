---
title: 野马直播
icon: fa-solid fa-user-graduate
date: 2020-01-01
order: 4
category:
- 直播
tag:
- 央视频
---

<ArtPlayer :src="state.Src" :config="artPlayerConfig" />

::: tip 央视频直播
全面汇聚央视、卫视频道，您的专属 全面聚合高清资源 旗舰平台，品质首选！
:::

<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { iptv } from 'db'
  import { poster, Hls } from 'cps/artConst'
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
  const src = state.value.PlayList[0] ? state.value.PlayList[0].url : ""
  onMounted(async () => {
    const { data } = await iptv.find({ "name": vodId })
    state.value.PlayList = data
    state.value.Src = data[0].url
  });


  const gethema = async (
    url = "https://raw.gitmirror.com/zwc456baby/iptv_alive/master/live.txt"
  ) => {
    const res = await (await fetch(url)).text();
    const raw = res
      .trim()
      .replace(/\r/g, "")
      .split("\n")
      .filter((r) => !!r);
    let result = [];
    const extM3uRegExp = /#EXTM3U/;
    const extinfRegExp = /#EXTINF:-1([^,]*),(.*)/;
    const hostRegExp = /^([^:]+):\/\/([^/]+)/;
    for (let i = 0; i < raw.length; i++) {
      if (extM3uRegExp.test(raw[i])) {
        result.push(raw[i]);
        continue;
      }
      if (extinfRegExp.test(raw[i]) && hostRegExp.test(raw[i + 1])) {
        result = result.concat([raw[i], raw[i + 1]]);
        i++;
        continue;
      }
    }

    const data = result.map((red, k) => {
      return {
        title: red.split(",")[0],
        url: red.split(",")[1],
      };
    });
    return data;
  };

  const artPlayerConfig = {
    poster,
    fullscreen: true,
    fullscreenWeb: true,
    autoplay: true,
    muted: true, // Hls默认静音才能自动播放即可
    type: "Hls",
    customType: { Hls },
    plugins: [
      artplayerPlaylist({
        autoNext: true,
        playlist: state.value.PlayList
      })
    ],
  }
</script>