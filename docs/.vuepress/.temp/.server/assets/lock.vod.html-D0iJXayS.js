import { defineComponent, resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
import { artplayerPlaylist } from "artplayer-playlist";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lock.vod.html",
  __ssrInlineRender: true,
  setup(__props) {
    const artPlayerConfig = {
      customType: {
        HLS: async (mediaElement, src, player) => {
          if (mediaElement.canPlayType("application/x-mpegURL") || mediaElement.canPlayType("application/vnd.apple.mpegURL")) {
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
        }
      },
      plugins: [
        artplayerPluginDanmuku({
          // 弹幕数组
          speed: 5,
          // 弹幕持续时间，单位秒，范围在[1 ~ 10]
          opacity: 1,
          // 弹幕透明度，范围在[0 ~ 1]
          fontSize: 25,
          // 字体大小，支持数字和百分比
          color: "#FFFFFF",
          // 默认字体颜色
          mode: 0,
          // 默认模式，0-滚动，1-静止
          margin: [10, "25%"],
          // 弹幕上下边距，支持数字和百分比
          antiOverlap: true,
          // 是否防重叠
          useWorker: true,
          // 是否使用 web worker
          synchronousPlayback: false,
          // 是否同步到播放速度
          filter: (danmu) => danmu.text.length < 50,
          // 弹幕过滤函数，返回 true 则可以发送
          lockTime: 5,
          // 输入框锁定时间，单位秒，范围在[1 ~ 60]
          maxLength: 100,
          // 输入框最大可输入的字数，范围在[0 ~ 500]
          minWidth: 200,
          // 输入框最小宽度，范围在[0 ~ 500]，填 0 则为无限制
          maxWidth: 400,
          // 输入框最大宽度，范围在[0 ~ Infinity]，填 0 则为 100% 宽度
          theme: "dark",
          // 输入框自定义挂载时的主题色，默认为 dark，可以选填亮色 light
          heatmap: true,
          // 是否开启弹幕热度图, 默认为 false
          danmuku: "https://gh.con.sh/https://raw.githubusercontent.com/zhw2590582/assets-cdn/master/danmuku/one-more-time-one-more-chance.xml"
        }),
        artplayerPlaylist({
          rebuildPlayer: false,
          onchanged: (art) => {
            console.log("Video Changed" + art);
          },
          autoNext: true,
          showText: false,
          playlist: [
            {
              title: "回到古代当太子  第1集",
              url: "https://video-master.oss-cn-hangzhou.aliyuncs.com/uploads/media/20230520/1-230520110402245.mp4"
            }
          ]
        })
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArtPlayer = resolveComponent("ArtPlayer");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="hint-container tip"><p class="hint-container-title">友情提示：建议使用IE9以上浏览器观看视频</p><p>据不知道哪里的砖家说过，每天看美女可以长寿</p></div>`);
      _push(ssrRenderComponent(_component_ArtPlayer, {
        src: "https://ydd.yqk66.com/m3u87/share/1398983/1567175/20240405/193136/1080/master.m3u8?auth_key=1713797958-edc4c97438f04c668a73fa217e66c87c-0-d4187471f7217e4cf0b808d9f1fd5c4f",
        poster: "https://img.viptv.work/iptv/ads.png",
        config: artPlayerConfig
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/vod/lock/lock.vod.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lock_vod_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "lock.vod.html.vue"]]);
const data = JSON.parse('{"path":"/vod/lock/lock.vod.html","title":"热播短剧TOP","lang":"zh-CN","frontmatter":{"title":"热播短剧TOP","icon":"shop-lock","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["短剧"],"feed":false,"seo":false,"head":[]},"headers":[],"git":{},"readingTime":{"minutes":1.45,"words":435},"filePathRelative":"vod/lock/lock.vod.md","localizedDate":"2020年1月1日"}');
export {
  lock_vod_html as comp,
  data
};
