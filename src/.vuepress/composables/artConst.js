import { artplayerPlaylist } from "./artplayer-plugin-playlist";
const poster = "https://img.viptv.work/iptv/ads.png";
const Src = "https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4";

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
    const flv = flvjs.createPlayer({ type: "flv", url });
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

export const hlsConfig = (playlist) => {
  return {
    poster,
    fullscreen: true,
    fullscreenWeb: true,
    autoplay: true,
    type: "Hls",
    customType: { Hls },
    muted: true,
    plugins: [
      artplayerPlaylist({
        autoNext: true,
        playlist,
      }),
    ],
  };
};
export const flvConfig = (playlist) => {
  return {
    poster,
    fullscreen: true,
    fullscreenWeb: true,
    autoplay: true,
    type: "Flv",
    customType: { Flv },
    muted: true,
    plugins: [
      artplayerPlaylist({
        autoNext: true,
        playlist,
      }),
    ],
  };
};
export const dashConfig = (playlist) => {
  return {
    poster,
    fullscreen: true,
    fullscreenWeb: true,
    autoplay: true,
    type: "Dash",
    customType: { Dash },
    muted: true,
    plugins: [
      artplayerPlaylist({
        autoNext: true,
        playlist,
      }),
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
