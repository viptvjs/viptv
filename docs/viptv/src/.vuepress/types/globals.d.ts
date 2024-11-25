declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}

declare module "hls.js/dist/hls.min.js" {
  import HLS from "hls.js";
  export = HLS;
}

declare module "aplayer" {
  import aplayer from "aplayer";
  export = aplayer;
}

declare module "artplayer-plugin-danmuku" {
  import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
  export = artplayerPluginDanmuku;
}

declare module "artplayer-plugin-hls-quality" {
  import artplayerPluginHlsQuality from "artplayer-plugin-hls-quality";
  export = artplayerPluginHlsQuality;
}

declare module "mpegts.js/dist/mpegts.js" {
  import mpegts from "mpegts.js";
  export = mpegts;
}

declare type ClassName = { [className: string]: any } | ClassName[] | string;

declare module "*.svg" {
  const CONTENT: string;
  export default CONTENT;
}

declare type Recordable<T = any> = Record<string, T>;
