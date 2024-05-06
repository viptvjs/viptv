<template><div><div class="hint-container tip">
<p class="hint-container-title">快手广场舞 | 福利小视频</p>
<p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p>
</div>
<ArtPlayer :src="state.Src" :config="artPlayerConfig" /></div></template>


<script setup lang="ts">
  import { artplayerPlaylist } from 'cps/artplayer-plugin-playlist'
  import { vod } from 'db'
  import { useStorage } from '@vueuse/core'
  import { onMounted, nextTick } from "vue";

  const state = useStorage(
    "list-5151md",
    {
      Src: "",
      PlayList: []
    }
  )

  onMounted(() => {
    nextTick(async () => {
      await getjson("https://raw.viptv.work/data/5151md.mdsp.json")
    })
  });

  const getjson = async (url) => {
    const res = await (await fetch(url)).json()
    state.value.PlayList = res.list.map((red, k) => {
      return {
        "title": red.vod_name,
        "url": red.vod_play_url.split('$')[1]
      }
    })
  }
  const artPlayerConfig = {
    poster: 'https://img.viptv.work/iptv/ads.png',
    autoSize: true,
    fullscreen: true,
    url: 'https://t25.cdn2020.com/video/m3u8/2024/04/23/6e405592/index.m3u8',
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
      artplayerPlaylist({
        rebuildPlayer: false, // 换P时重建播放器，默认false
        onchanged: (art) => { // 换P后的回调函数
          console.log(art);
        },
        autoNext: true, // 自动播放下一P, 默认false
        showText: false, // 在控制栏显示文本，否则显示图标，默认为false
        playlist: state.value.PlayList
      })
    ],
  }
</script>