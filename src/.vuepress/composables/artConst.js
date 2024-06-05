import { artplayerPlaylist } from "./artplayer-plugin-playlist";
//import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
const poster = "https://img.viptv.work/iptv/ads.png";

const Hls = async (video, url, art) => {
  const hlsjs = (await import("hls.js")).default;
  if (hlsjs.isSupported()) {
    if (art.hls) art.hls.destroy();
    let hls = new hlsjs();
    hls.loadSource(url);
    hls.attachMedia(video);
    art.hls = hls;
    art.on("destroy", () => hls.destroy());
  } else if (
    video.canPlayType("application/x-mpegURL") ||
    video.canPlayType("application/vnd.apple.mpegURL")
  ) {
    video.src = url;
  } else {
    art.notice.show = "Unsupported playback format: m3u8";
  }
};

const Flv = async (video, url, art) => {
  const mpegts = (await import("mpegts.js")).default;
  if (mpegts.isSupported()) {
    if (art.flv) art.flv.destroy();
    const flv = mpegts.createPlayer({ type: "flv", url });
    flv.attachMediaElement(video);
    flv.load();
    art.flv = flv;
    art.on("destroy", () => flv.destroy());
  } else {
    art.notice.show = "Unsupported playback format: flv";
  }
};

const Dash = async (video, url, art) => {
  const dashjs = (await import("dashjs")).default;
  if (dashjs.supportsMediaSource()) {
    if (art.dash) art.dash.destroy();
    const dash = dashjs.MediaPlayer().create();
    dash.initialize(video, url, art.option.autoplay);
    art.dash = dash;
    art.on("destroy", () => dash.destroy());
  } else {
    art.notice.show = "Unsupported playback format: mpd";
  }
};

export const mpConfig = (playlist) => {
  return {
    poster,
    fullscreen: true,
    fullscreenWeb: true,
    autoplay: true,
    autoMini: true,
    lock: true,
    setting: false,
    moreVideoAttr: {
      'webkit-playsinline': true,
      playsInline: true,
    },
    plugins: [
      artplayerPlaylist({
        rebuildPlayer: false, // 换P时重建播放器，默认false
        onchanged: () => { }, // 换P后的回调函数
        autoNext: true,
        playlist,
      }),
    ],
  }

}

export const hlsConfig = (playlist) => {
  return {
    ...mpConfig(playlist),
    type: "Hls",
    customType: { Hls },
  };
};
export const flvConfig = (playlist) => {
  return {
    ...mpConfig(playlist),
    type: "Flv",
    customType: { Flv },
  };
};
export const dashConfig = (playlist) => {
  return {
    ...mpConfig(playlist),
    type: "Dash",
    customType: { Dash },
  };
};


//https://api.bilibili.com/x/web-interface/ranking
