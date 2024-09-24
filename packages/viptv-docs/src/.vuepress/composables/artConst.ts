import { artplayerPlaylist } from "./artplayer-plugin-playlist.js";
//import artplayerPluginDanmuku from "artplayer-plugin-danmuku";

const poster = "https://img.viptv.work/iptv/ads.png";

declare const DASHJS_INSTALLED: boolean;
declare const HLS_JS_INSTALLED: boolean;
declare const MPEGTS_JS_INSTALLED: boolean;

interface playlist {
  title?: string;
  url?: string;
}

export const SUPPORTED_VIDEO_TYPES = ["mp4", "mp3", "webm", "ogg"];

if (typeof DASHJS_INSTALLED !== "undefined" && DASHJS_INSTALLED)
  SUPPORTED_VIDEO_TYPES.push("mpd", "dash");

if (typeof HLS_JS_INSTALLED !== "undefined" && HLS_JS_INSTALLED)
  SUPPORTED_VIDEO_TYPES.push("m3u8", "hls");

if (typeof MPEGTS_JS_INSTALLED !== "undefined" && MPEGTS_JS_INSTALLED)
  SUPPORTED_VIDEO_TYPES.push("ts", "flv");

const Hls = async (
  mediaElement: HTMLMediaElement,
  src: string,
  art: any
): Promise<void> => {
  if (
    mediaElement.canPlayType("application/x-mpegURL") ||
    mediaElement.canPlayType("application/vnd.apple.mpegURL")
  ) {
    mediaElement.src = src;
  } else if (typeof HLS_JS_INSTALLED !== "undefined" && HLS_JS_INSTALLED) {
    const hls = (await import("hls.js")).default;
    if (hls.isSupported()) {
      const hlsInstance = new hls();
      hlsInstance.attachMedia(mediaElement);
      hlsInstance.on(hls.Events.MEDIA_ATTACHED, () => {
        hlsInstance.loadSource(src);
      });
      art.hls = hls;
      art.on("destroy", () => hlsInstance.destroy());
    }
  } else {
    art.notice.show = "Unsupported playback format: m3u8";
  }
};

const Flv = async (
  mediaElement: HTMLMediaElement,
  src: string,
  art: any
): Promise<void> => {
  if (typeof MPEGTS_JS_INSTALLED !== "undefined" && MPEGTS_JS_INSTALLED) {
    const mpegts = (await import("mpegts.js")).default;
    if (mpegts.isSupported()) {
      const flvPlayer = mpegts.createPlayer({ type: "flv", url: src });
      flvPlayer.attachMediaElement(mediaElement);
      flvPlayer.load();
      art.flv = flvPlayer;
      art.on("destroy", () => flvPlayer.destroy());
    } else {
      art.notice.show = "Unsupported playback format: flv";
    }
  }
};

const Dash = async (
  mediaElement: HTMLMediaElement,
  src: string,
  art: any,
  autoPlay = false,
  startTime = 0
): Promise<void> => {
  if (typeof DASHJS_INSTALLED !== "undefined" && DASHJS_INSTALLED) {
    const dashjs = (await import("dashjs")).default;
    if (dashjs.supportsMediaSource()) {
      const dashPlayer = dashjs.MediaPlayer().create();
      dashPlayer.initialize(mediaElement, src, autoPlay, startTime);
      art.dash = dashPlayer;
      art.on("destroy", () => dashPlayer.destroy());
    } else {
      art.notice.show = "Unsupported playback format: mpd";
    }
  }
};

export const mpConfig = (playlist: playlist[]) => {
  return {
    poster,
    fullscreen: true,
    fullscreenWeb: true,
    autoplay: true,
    autoOrientation: true,
    lock: true,
    setting: false,
    moreVideoAttr: {
      "webkit-playsinline": true,
      playsInline: true,
    },
    plugins: [
      /* artplayerPluginDanmuku({
        danmuku: "https://d.artplayer.org/?id=BV1us421u7sp",
        async beforeEmit(danmu) {
          const isDirty = /fuck/i.test(danmu.text);
          if (isDirty) return false;
          const state = await saveDanmu(danmu);
          return state;
        },
        filter(danmu) {
          return danmu.text.length <= 200;
        },
        async beforeVisible(danmu) {
          return true;
        },
      }), */
      artplayerPlaylist({
        rebuildPlayer: false, // 换P时重建播放器，默认false
        onchanged: () => { }, // 换P后的回调函数
        autoNext: true,
        playlist,
      }),
    ],
  };
};

export const hlsConfig = (playlist: playlist[]) => {
  return {
    ...mpConfig(playlist),
    type: "Hls",
    customType: { Hls },
  };
};
export const flvConfig = (playlist: playlist[]) => {
  return {
    ...mpConfig(playlist),
    type: "Flv",
    customType: { Flv },
  };
};
export const dashConfig = (playlist: playlist[]) => {
  return {
    ...mpConfig(playlist),
    type: "Dash",
    customType: { Dash },
  };
};

//https://api.bilibili.com/x/web-interface/ranking
