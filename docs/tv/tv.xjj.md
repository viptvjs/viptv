---
title: 快手广场舞
icon: fa-solid fa-user-graduate
date: 2020-01-01
order: 4
category:
- 影视点播
tag:
- 快手
- 广场舞
---
::: tip 快手广场舞|福利小视频
赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！
:::

<ArtPlayer :src="state.Src" :config="artPlayerConfig" />

<script setup lang="ts">
  import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
  import artplayerPluginHlsQuality from "artplayer-plugin-hls-quality";
  import { artplayerPlaylist } from 'artplayer-playlist'
  import vod from 'db/vod'
  import { Dec } from 'db/crypt.js'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "list-dygcw",
    {
      Src: "",
      PlayList: []
    }
  )
  onMounted(async () => {
    const { data } = await vod.find({ "name": "ksgcw" })
    state.value.PlayList = data
  });

  const customPlayer = (art) => {
    art.on('ready', () => {
      art.plugins.artplayerPlaylist.hi()
    });
  };

  const artPlayerConfig = {
    poster: 'https://img.viptv.work/iptv/ads.png',
    isLive: true,
    autoSize: true,
    fullscreen: true,
    fullscreenWeb: true,
    url: 'https:\/\/t25.cdn2020.com\/video\/m3u8\/2024\/04\/23\/d93a6c8c\/index.m3u8',
    type: 'm3u8',
    customType: {
      m3u8: async (video, url, art) => {
        if (video.canPlayType("application/x-mpegURL") || video.canPlayType("application/vnd.apple.mpegURL")) {
          video.src = url;
        } else {
          const HLS = (await import("hls.js/dist/hls.min.js")).default;
          const hls = new HLS();
          hls.attachMedia(video);
          hls.on(HLS.Events.MEDIA_ATTACHED, () => {
            hls.loadSource(url);
          });
          art.on("destroy", () => {
            hls.destroy();
          });
        }
      },
      flv: (video, url, art) => {
        if (flvjs.isSupported()) {
          if (art.flv) art.flv.destroy();
          const flv = flvjs.createPlayer({ type: 'flv', url });
          flv.attachvideo(video);
          flv.load();
          art.flv = flv;
          art.on('destroy', () => flv.destroy());
        } else {
          art.notice.show = 'Unsupported playback format: flv';
        }
      },
      mpd: (video, url, art) => {
        if (dashjs.supportsMediaSource()) {
          if (art.dash) art.dash.destroy();
          const dash = dashjs.MediaPlayer().create();
          dash.initialize(video, url, art.option.autoplay);
          art.dash = dash;
          art.on('destroy', () => dash.destroy());
        } else {
          art.notice.show = 'Unsupported playback format: mpd';
        }
      }
    },
    plugins: [
      artplayerPluginDanmuku({
        danmuku: "https://raw.gitmirror.com/zhw2590582/assets-cdn/master/danmuku/one-more-time-one-more-chance.xml"
      }),
      artplayerPlaylist({
        rebuildPlayer: true,
        autoNext: true,
        playlist: state.value.PlayList
      }),
      artplayerPluginHlsQuality({
        control: true,
        setting: true,
        getResolution: (level) => level.height + 'P',
        title: 'Quality',
        auto: 'Auto',
      }),
    ],
  }
</script>