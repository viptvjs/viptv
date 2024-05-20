import { defineComponent, onMounted, resolveComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { p as poster, H as Hls, a as artplayerPlaylist } from "./dexie-CPFAlEcK.js";
import { i as iptv } from "./iptv-Ba4kGpFE.js";
import { useStorage } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
import "hls.js/dist/hls.min.js";
import "dexie";
const vodId = "ss_itv";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ysp.html",
  __ssrInlineRender: true,
  setup(__props) {
    const state = useStorage(
      vodId,
      {
        Src: "",
        PlayList: []
      }
    );
    state.value.PlayList[0] ? state.value.PlayList[0].url : "";
    onMounted(async () => {
      const { data: data2 } = await iptv.find({ "name": vodId });
      state.value.PlayList = data2;
      state.value.Src = data2[0].url;
    });
    const artPlayerConfig = {
      poster,
      fullscreen: true,
      fullscreenWeb: true,
      autoplay: true,
      muted: true,
      // Hls默认静音才能自动播放即可
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
        src: unref(state).Src,
        config: artPlayerConfig
      }, null, _parent));
      _push(`<div class="hint-container tip"><p class="hint-container-title">央视频直播</p><p>全面汇聚央视、卫视频道，您的专属 全面聚合高清资源 旗舰平台，品质首选！</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/iptv/cctv/ysp.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ysp_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ysp.html.vue"]]);
const data = JSON.parse('{"path":"/iptv/cctv/ysp.html","title":"测试2","lang":"zh-CN","frontmatter":{"title":"测试2","icon":"fa-solid fa-user-graduate","date":"2020-01-01T00:00:00.000Z","order":4,"category":["直播"],"tag":["央视频"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/iptv/cctv/ysp.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"测试2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T04:28:43.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"央视频"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T04:28:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"测试2\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-08T04:28:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715142523000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":4}]},"readingTime":{"minutes":0.53,"words":160},"filePathRelative":"iptv/cctv/ysp.md","localizedDate":"2020年1月1日","excerpt":""}');
export {
  ysp_html as comp,
  data
};
