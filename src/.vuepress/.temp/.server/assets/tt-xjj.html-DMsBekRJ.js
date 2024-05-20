import { defineComponent, onMounted, nextTick, resolveComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { p as poster, a as artplayerPlaylist } from "./dexie-CPFAlEcK.js";
import { v as vod } from "./vod-C6_mP2Bu.js";
import { useStorage } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
import "hls.js/dist/hls.min.js";
import "dexie";
const vodId = "tiktok";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tt-xjj.html",
  __ssrInlineRender: true,
  setup(__props) {
    const state = useStorage(
      vodId,
      {
        PlayList: []
      }
    );
    const src = state.value.PlayList[0] ? state.value.PlayList[0].url : "";
    onMounted(() => {
      nextTick(async () => {
        const { data: data2 } = await vod.find({ "name": vodId });
        state.value.PlayList = data2.slice(0, 100);
      });
    });
    const artPlayerConfig = {
      poster,
      fullscreen: true,
      fullscreenWeb: true,
      muted: true,
      autoplay: true,
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
      _push(`<div class="hint-container tip"><p class="hint-container-title">TikTok小姐姐|福利小视频</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/vod/lunli/tt-xjj.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ttXjj_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "tt-xjj.html.vue"]]);
const data = JSON.parse('{"path":"/vod/lunli/tt-xjj.html","title":"TikTok小姐姐","lang":"zh-CN","frontmatter":{"title":"TikTok小姐姐","icon":"hat-cowboy","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["小姐姐"],"feed":false,"seo":false,"head":[]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715170784000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":4}]},"readingTime":{"minutes":0.37,"words":112},"filePathRelative":"vod/lunli/tt-xjj.md","localizedDate":"2020年1月1日"}');
export {
  ttXjj_html as comp,
  data
};
