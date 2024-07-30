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

declare module "aplayer/dist/mpegts.js" {
  import mpegts from "mpegts.js";
  export = mpegts;
}

declare type ClassName = { [className: string]: any } | ClassName[] | string;

declare module "*.svg" {
  const CONTENT: string;
  export default CONTENT;
}

declare type Recordable<T = any> = Record<string, T>;
