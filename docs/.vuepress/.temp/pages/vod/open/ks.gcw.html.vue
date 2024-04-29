<template><div><div class="hint-container tip">
<p class="hint-container-title">快手广场舞|福利小视频</p>
<p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p>
</div>
<ArtPlayer :src="state.Src" poster="https://img.viptv.work/iptv/ads.png" :config="artPlayerConfig" /></div></template>


<script setup lang="ts">
  import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
  import { artplayerPlaylist } from 'artplayer-playlist'
  import vod from 'db/vod'
  import { Dec } from 'db/crypt.js'
  import fetch from 'cross-fetch';
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "list-dygcw",
    {
      Src: "https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4",
      PlayList: []
    }
  )
  onMounted(async () => {
    const { data } = await vod.find({ "name": "ksgcw" })
    state.value.PlayList = data
  });
  const artPlayerConfig = {
    plugins: [
      artplayerPluginDanmuku({
        danmuku: function () {
          return new Promise((resovle) => {
            return resovle([
              {
                text: 'VIPTV - 云视听', // 弹幕文本
                time: 1, // 发送时间，单位秒
                color: '#fff', // 弹幕局部颜色
                border: false, // 是否显示描边
                mode: 0, // 弹幕模式: 0表示滚动, 1静止
              },
              {
                text: '高清，快捷，无广告',
                time: 2,
                color: 'red',
                border: false,
                mode: 0,
              },
              {
                text: 'https://viptv.work',
                time: 3,
                color: 'green',
                border: false,
                mode: 1,
              },
            ]);
          })
        }
      }),
      artplayerPlaylist({
        rebuildPlayer: true,
        onchanged: () => {

        },
        autoNext: true,
        showText: false,
        playlist: state.value.PlayList
      })
    ],
  }
</script>