declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;
}
declare module 'hls.js/dist/hls.min.js'
declare module 'mpegts.js/dist/mpegts.js'
declare function hlsCongfig(playlist?: string[]): void;