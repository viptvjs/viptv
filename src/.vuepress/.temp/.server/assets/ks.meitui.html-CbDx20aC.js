import { defineComponent, onMounted, resolveComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { p as poster, a as artplayerPlaylist } from "./dexie-CPFAlEcK.js";
import { v as vod } from "./vod-C6_mP2Bu.js";
import { useStorage } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
import "hls.js/dist/hls.min.js";
import "dexie";
const vodId = "ks-meitui";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ks.meitui.html",
  __ssrInlineRender: true,
  setup(__props) {
    const state = useStorage(
      vodId,
      {
        PlayList: []
      }
    );
    const src = state.value.PlayList[0] ? state.value.PlayList[0].url : "";
    onMounted(async () => {
      const { data: data2 } = await vod.find({ "name": vodId });
      state.value.PlayList = data2.slice(0, 99);
    });
    const artPlayerConfig = {
      poster,
      fullscreen: true,
      fullscreenWeb: true,
      autoplay: true,
      muted: true,
      plugins: [
        artplayerPlaylist({
          autoNext: true,
          playlist: state.value.PlayList
        })
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArtPlayer = resolveComponent("ArtPlayer");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ArtPlayer, {
        src: unref(src),
        config: artPlayerConfig
      }, null, _parent));
      _push(`<div class="hint-container tip"><p class="hint-container-title">美腿小姐姐|福利小视频</p><p>据不知道哪里的砖家说过，每天看美女可以长寿，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/vod/video/ks.meitui.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ks_meitui_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ks.meitui.html.vue"]]);
const data = JSON.parse('{"path":"/vod/video/ks.meitui.html","title":"美腿小姐姐","lang":"zh-CN","frontmatter":{"title":"美腿小姐姐","icon":"fa-solid fa-user-graduate","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["小姐姐"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/vod/video/ks.meitui.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"美腿小姐姐"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T04:28:43.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"小姐姐"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T04:28:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"美腿小姐姐\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-08T04:28:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715142523000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":3}]},"readingTime":{"minutes":0.58,"words":174},"filePathRelative":"vod/video/ks.meitui.md","localizedDate":"2020年1月1日","excerpt":""}');
export {
  ks_meitui_html as comp,
  data
};
