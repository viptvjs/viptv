import { artplayerPlaylist } from "cps/artplayer-plugin-playlist";
export const poster = "https://img.viptv.work/iptv/ads.png";

export const Hls = async (mediaElement, src, player) => {
  if (
    mediaElement.canPlayType("application/x-mpegURL") ||
    mediaElement.canPlayType("application/vnd.apple.mpegURL")
  ) {
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
};

export const Flv = async (video, url, art) => {
  const mpegts = (await import("mpegts.js/dist/mpegts.js")).default;
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
