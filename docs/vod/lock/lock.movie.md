---
title: 林正英专辑
icon: house-lock
date: 2020-01-01
order: 4
category:
- 影视点播
tag:
- 林正英
---
::: tip 林正英经典

:::
<ArtPlayer
  src="https://sitv.mobilev51.vod.bestvcdn.com.cn/XEKJ6OGUD4TNDTBGRDRITKAQ5ALEPOSHWN3QRV7F2RHOZO72DTTUFXOJDOQWTN4NRKYBRIBBGBQYCXS2Q26B23WAGKJBX54JZEXYTSYG5S4FWSHVHOQNIZ4M26MPZEGP3CB26G5JYPU7VAS2KLXIDUKWJU======/gslb/program/FDN/FDNB7275981/prime.m3u8?auth_key=1713894894-7745c82b081842399918adbc0df547b8-0-af973c2d0be2cf626b085bcbb0e68f7c&BitRate=1300&_cp=1&_client=103"
  poster="https://img.viptv.work/iptv/ads.png" :config="artPlayerConfig" type="HLS" />


<script setup lang="ts">
  import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
  import { artplayerPlaylist } from 'artplayer-playlist';
  const artPlayerConfig = {
    customType: {
      HLS: async (mediaElement, src, player) => {
        if (mediaElement.canPlayType("application/x-mpegURL") || mediaElement.canPlayType("application/vnd.apple.mpegURL")) {
          mediaElement.src = src;
        } else {
          const HLS = (await import("hls.js/dist/hls.min.js")).default;
          const hls = new HLS();

          hls.attachMedia(mediaElement);
          hls.on(HLS.Events.MEDIA_ATTACHED, () => {
            hls.loadSource(src);
          });
          player.on("destroy", () => {
            hls.destroy();
          });
        }
      },
    },
    plugins: [
      artplayerPluginDanmuku({
        // 弹幕数组
        speed: 5, // 弹幕持续时间，单位秒，范围在[1 ~ 10]
        opacity: 1, // 弹幕透明度，范围在[0 ~ 1]
        fontSize: 25, // 字体大小，支持数字和百分比
        color: '#FFFFFF', // 默认字体颜色
        mode: 0, // 默认模式，0-滚动，1-静止
        margin: [10, '25%'], // 弹幕上下边距，支持数字和百分比
        antiOverlap: true, // 是否防重叠
        useWorker: true, // 是否使用 web worker
        synchronousPlayback: false, // 是否同步到播放速度
        filter: (danmu) => danmu.text.length < 50, // 弹幕过滤函数，返回 true 则可以发送
        lockTime: 5, // 输入框锁定时间，单位秒，范围在[1 ~ 60]
        maxLength: 100, // 输入框最大可输入的字数，范围在[0 ~ 500]
        minWidth: 200, // 输入框最小宽度，范围在[0 ~ 500]，填 0 则为无限制
        maxWidth: 400, // 输入框最大宽度，范围在[0 ~ Infinity]，填 0 则为 100% 宽度
        theme: 'dark', // 输入框自定义挂载时的主题色，默认为 dark，可以选填亮色 light
        heatmap: true, // 是否开启弹幕热度图, 默认为 false
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
        rebuildPlayer: false,
        onchanged: (art) => {
          console.log('Video Changed' + art);
        },
        autoNext: true,
        showText: false,
        playlist: [
          {
            title: '精灵变[HD]',
            url: 'https://ydd.yqk66.com/m3u85/share/470591/1133721/20240112/154726/1080/index.m3u8?auth_key=1713797200-a0a84b9ff75b4728a4fcee0cc8ae573c-0-118c053802c2dda823cd6c7db3df6bb9',
          },
          {
            title: '鬼咬鬼[HD]',
            url: 'https://ydd.yqk66.com/m3u85/share/470591/1133721/20240112/154726/1080/index.m3u8?auth_key=1713797200-a0a84b9ff75b4728a4fcee0cc8ae573c-0-118c053802c2dda823cd6c7db3df6bb9',
          },
          {
            title: '僵尸至尊[HD]',
            url: 'https://ydd.yqk66.com/m3u85/share/470591/1133721/20240112/154726/1080/index.m3u8?auth_key=1713797200-a0a84b9ff75b4728a4fcee0cc8ae573c-0-118c053802c2dda823cd6c7db3df6bb9',
          },
          {
            title: '僵尸家族[HD]',
            url: 'https://ydd.yqk66.com/m3u85/share/470591/1133721/20240112/154726/1080/index.m3u8?auth_key=1713797200-a0a84b9ff75b4728a4fcee0cc8ae573c-0-118c053802c2dda823cd6c7db3df6bb9',
          },
          {
            title: '一眉道人[HD]',
            url: 'https://ydd.yqk66.com/m3u85/share/470591/1133721/20240112/154726/1080/index.m3u8?auth_key=1713797200-a0a84b9ff75b4728a4fcee0cc8ae573c-0-118c053802c2dda823cd6c7db3df6bb9',
          },
          {
            title: '人吓鬼[HD]',
            url: 'https://ydd.yqk66.com/m3u85/share/470591/1133721/20240112/154726/1080/index.m3u8?auth_key=1713797200-a0a84b9ff75b4728a4fcee0cc8ae573c-0-118c053802c2dda823cd6c7db3df6bb9',
          }

        ]
      })
    ],
  }
</script>