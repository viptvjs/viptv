import { artplayerPlaylist } from "./artplayer-plugin-playlist.js";
import artplayerPluginDanmuku from 'artplayer-plugin-danmuku';
import artplayerProxyCanvas from 'artplayer-proxy-canvas'
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
    proxy: artplayerProxyCanvas(),
    setting: false,
    moreVideoAttr: {
      "webkit-playsinline": true,
      playsInline: true,
    },
    plugins: [
      artplayerPluginDanmuku({
        danmuku: "https://d.artplayer.org/?id=BV1us421u7sp",
        speed: 5, // 弹幕持续时间，范围在[1 ~ 10]
        margin: [10, '25%'], // 弹幕上下边距，支持像素数字和百分比
        opacity: 1, // 弹幕透明度，范围在[0 ~ 1]
        color: '#FFFFFF', // 默认弹幕颜色，可以被单独弹幕项覆盖
        mode: 0, // 默认弹幕模式: 0: 滚动，1: 顶部，2: 底部
        modes: [0, 1, 2], // 弹幕可见的模式
        fontSize: 25, // 弹幕字体大小，支持像素数字和百分比
        antiOverlap: true, // 弹幕是否防重叠
        synchronousPlayback: false, // 是否同步播放速度
        mount: undefined, // 弹幕发射器挂载点, 默认为播放器控制栏中部
        heatmap: true, // 是否开启热力图
        width: 512, // 当播放器宽度小于此值时，弹幕发射器置于播放器底部
        points: [], // 热力图数据
        filter: (danmu: { text: string | any[]; }) => danmu.text.length <= 100, // 弹幕载入前的过滤器
        beforeVisible: () => true, // 弹幕显示前的过滤器，返回 true 则可以发送
        visible: true, // 弹幕层是否可见
        emitter: true, // 是否开启弹幕发射器
        maxLength: 200, // 弹幕输入框最大长度, 范围在[1 ~ 1000]
        lockTime: 5, // 输入框锁定时间，范围在[1 ~ 60]
        theme: 'dark', // 弹幕主题，支持 dark 和 light，只在自定义挂载时生效
        OPACITY: {}, // 不透明度配置项
        FONT_SIZE: {}, // 弹幕字号配置项
        MARGIN: {}, // 显示区域配置项
        SPEED: {}, // 弹幕速度配置项
        COLOR: [], // 颜色列表配置项
        async beforeEmit(danmu: { text: string; }) {
          return new Promise((resolve) => {
            console.log(danmu);
            setTimeout(() => {
              resolve(true);
            }, 1000);
          });

        },
      }),
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
