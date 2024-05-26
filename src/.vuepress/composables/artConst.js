import hlsjs from "hls.js/dist/hls.min.js";

export const poster = "https://img.viptv.work/iptv/ads.png";
export const Src =
  "https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4";

export const Hls = (video, url, art) => {
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
<<<<<<< HEAD:src/.vuepress/composables/artConst.js

export const Flv = async (video, url, art) => {
  const mpegts = (await import("mpegts.js")).default;
  if (mpegts.isSupported()) {
    if (art.flv) art.flv.destroy();
    const flv = flvjs.createPlayer({ type: "flv", url });
    flv.attachMediaElement(video);
    flv.load();
    art.flv = flv;
    art.on("destroy", () => flv.destroy());
  } else {
    art.notice.show = "Unsupported playback format: flv";
  }
};

export const Dash = async (video, url, art) => {
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

export const artConfig = (type, playlist) => {
  return {
    poster,
    fullscreen: true,
    fullscreenWeb: true,
    autoplay: true,
    customType: { type },
    muted: true,
    plugins: [
      artplayerPlaylist({
        autoNext: true,
        playlist,
      })      
    ],
  };
};
export const mpConfig = (playlist) => {
  return {
    poster,
    fullscreen: true,
    fullscreenWeb: true,
    autoplay: true,
    muted: true,
    plugins: [
      artplayerPlaylist({
        autoNext: true,
        playlist,
      }),
    ],
  };
};

//https://api.bilibili.com/x/web-interface/ranking
=======
>>>>>>> ca70720fe4d31c6ae1d52bfe6b185608c0555e56:docs/.vuepress/composables/artConst.js
