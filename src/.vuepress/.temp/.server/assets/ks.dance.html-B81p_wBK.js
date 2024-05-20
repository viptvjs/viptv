import { defineComponent, onMounted, nextTick, resolveComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { p as poster, a as artplayerPlaylist } from "./dexie-CPFAlEcK.js";
import { v as vod } from "./vod-C6_mP2Bu.js";
import { useStorage } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
import "hls.js/dist/hls.min.js";
import "dexie";
const vodId = "ks-dance";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ks.dance.html",
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
        state.value.PlayList = data2.slice(0, 99);
      });
    });
    const artPlayerConfig = {
      poster,
      type: "mp4",
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
      _push(`<div class="hint-container tip"><p class="hint-container-title">跳舞小姐姐|福利小视频</p><p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/vod/video/ks.dance.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ks_dance_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ks.dance.html.vue"]]);
const data = JSON.parse('{"path":"/vod/video/ks.dance.html","title":"跳舞小姐姐","lang":"zh-CN","frontmatter":{"title":"跳舞小姐姐","icon":"fa-solid fa-user-graduate","date":"2020-01-01T00:00:00.000Z","order":5,"category":["影视点播"],"tag":["小姐姐"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/vod/video/ks.dance.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"跳舞小姐姐"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T04:28:43.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"小姐姐"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T04:28:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"跳舞小姐姐\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-08T04:28:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715142523000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":3}]},"readingTime":{"minutes":0.5,"words":150},"filePathRelative":"vod/video/ks.dance.md","localizedDate":"2020年1月1日","excerpt":""}');
export {
  ks_dance_html as comp,
  data
};
