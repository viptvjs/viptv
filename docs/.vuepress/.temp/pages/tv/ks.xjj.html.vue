<template><div><div class="hint-container tip">
<p class="hint-container-title">快手广场舞|福利小视频</p>
<p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p>
</div>
<ArtPlayer :src="state.Src" :config="artPlayerConfig" :customPlayer="customPlayer" /></div></template>


<script setup lang="ts">
  import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
  import { artplayerPlaylist } from 'artplayer-playlist'
  import vod from 'db/vod'
  import { Dec } from 'db/crypt.js'
  import { useStorage } from '@vueuse/core'
  import { onMounted } from "vue";

  const state = useStorage(
    "list-dygcw",
    {
      Src: "https://gh.con.sh/https://raw.githubusercontent.com/zhw2590582/assets-cdn/master/video/your-name-H264(Baseline%40L52)-AAC.flv",
      PlayList: []
    }
  )
  onMounted(async () => {
    const { data } = await vod.find({ "name": "ksgcw" })
    state.value.PlayList = data
  });

  const customPlayer = (player) => {
    player.on("artplayerPluginDanmuku:emit", (danmuku) => {
      fetch(DANMAKU_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Id: DANMAKU_ID,
          Referrer: window.location.origin + window.location.pathname,
          ...danmuku,
        }),
      });
    });
  };

  const artPlayerConfig = {
    poster: 'https://img.viptv.work/iptv/ads.png',
    autoOrientation: true,
    aspectRatio: true,
    pip: true,
    screenshot: true,
    fullscreen: true,
    fullscreenWeb: true,
    customType: {
      m3u8: async (mediaElement, src, player) => {
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
      flv: (video, url, art) => {
        if (flvjs.isSupported()) {
          if (art.flv) art.flv.destroy();
          const flv = flvjs.createPlayer({ type: 'flv', url });
          flv.attachMediaElement(video);
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
        danmuku: ""
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