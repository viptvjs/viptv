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
