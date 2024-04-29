import { defineComponent, onMounted, resolveComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
import { artplayerPlaylist } from "artplayer-playlist";
import { v as vod } from "./vod-6f7AwGw_.js";
import { useStorage } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
import "dexie";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ks.gcw.html",
  __ssrInlineRender: true,
  setup(__props) {
    const state = useStorage(
      "list-dygcw",
      {
        Src: "https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4",
        PlayList: []
      }
    );
    onMounted(async () => {
      const { data: data2 } = await vod.find({ "name": "ksgcw" });
      state.value.PlayList = data2;
    });
    const artPlayerConfig = {
      plugins: [
        artplayerPluginDanmuku({
          danmuku: function() {
            return new Promise((resovle) => {
              return resovle([
                {
                  text: "VIPTV - 云视听",
                  // 弹幕文本
                  time: 1,
                  // 发送时间，单位秒
                  color: "#fff",
                  // 弹幕局部颜色
                  border: false,
                  // 是否显示描边
                  mode: 0
                  // 弹幕模式: 0表示滚动, 1静止
                },
                {
                  text: "高清，快捷，无广告",
                  time: 2,
                  color: "red",
                  border: false,
                  mode: 0
                },
                {
                  text: "https://viptv.work",
                  time: 3,
                  color: "green",
                  border: false,
                  mode: 1
                }
              ]);
            });
          }
        }),
        artplayerPlaylist({
          rebuildPlayer: true,
          onchanged: () => {
          },
          autoNext: true,
          showText: false,
          playlist: state.value.PlayList
        })
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArtPlayer = resolveComponent("ArtPlayer");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="hint-container tip"><p class="hint-container-title">快手广场舞|福利小视频</p><p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p></div>`);
      _push(ssrRenderComponent(_component_ArtPlayer, {
        src: unref(state).Src,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/vod/open/ks.gcw.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ks_gcw_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ks.gcw.html.vue"]]);
const data = JSON.parse('{"path":"/vod/open/ks.gcw.html","title":"快手广场舞","lang":"zh-CN","frontmatter":{"title":"快手广场舞","icon":"fa-solid fa-user-graduate","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["快手","广场舞"],"description":"快手广场舞|福利小视频 赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！","head":[["meta",{"property":"og:url","content":"https://viptv.netlify.app/vod/open/ks.gcw.html"}],["meta",{"property":"og:site_name","content":"VIPTV - 云视听"}],["meta",{"property":"og:title","content":"快手广场舞"}],["meta",{"property":"og:description","content":"快手广场舞|福利小视频 赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"快手"}],["meta",{"property":"article:tag","content":"广场舞"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快手广场舞\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"https://viptv.work\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.01,"words":304},"filePathRelative":"vod/open/ks.gcw.md","localizedDate":"2020年1月1日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">快手广场舞|福利小视频</p>\\n<p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p>\\n</div>\\n","autoDesc":true}');
export {
  ks_gcw_html as comp,
  data
};
