declare module "*.vue" {
    import type { DefineComponent } from "vue";

    const component: DefineComponent;

    export default component;
}
declare module "hls.js/dist/hls.min.js" {
    import HLS from "hls.js";

    export = HLS;
}

declare module "mpegts.js/dist/mpegts.js" {
    import mpegts from "mpegts.js";

    export = mpegts;
}