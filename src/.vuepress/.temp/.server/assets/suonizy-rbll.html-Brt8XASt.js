import { defineComponent, onMounted, nextTick, resolveComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { p as poster, H as Hls, a as artplayerPlaylist } from "./dexie-CPFAlEcK.js";
import { v as vod } from "./vod-C6_mP2Bu.js";
import { useStorage } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
import "hls.js/dist/hls.min.js";
import "dexie";
const vodId = "suonizy-rbll";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "suonizy-rbll.html",
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
        state.value.PlayList = data2;
      });
    });
    const artPlayerConfig = {
      poster,
      fullscreen: true,
      fullscreenWeb: true,
      autoplay: true,
      muted: true,
      type: "Hls",
      customType: { Hls },
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
      _push(`<div class="hint-container tip"><p class="hint-container-title">日本伦理</p><p>资源链来自索尼资源站,感谢提供！</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/vod/lunli/suonizy-rbll.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const suonizyRbll_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "suonizy-rbll.html.vue"]]);
const data = JSON.parse('{"path":"/vod/lunli/suonizy-rbll.html","title":"日本伦理","lang":"zh-CN","frontmatter":{"title":"日本伦理","icon":"hat-cowboy","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["三级"],"feed":false,"seo":false,"head":[]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715170784000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":4}]},"readingTime":{"minutes":0.41,"words":124},"filePathRelative":"vod/lunli/suonizy-rbll.md","localizedDate":"2020年1月1日"}');
export {
  suonizyRbll_html as comp,
  data
};
