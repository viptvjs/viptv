import { defineComponent, onMounted, nextTick, resolveComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { p as poster, H as Hls, a as artplayerPlaylist } from "./dexie-CPFAlEcK.js";
import { i as iptv } from "./iptv-Ba4kGpFE.js";
import { useStorage } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
import "hls.js/dist/hls.min.js";
import "dexie";
const vodId = "fmml_dv6";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "xiongmao.html",
  __ssrInlineRender: true,
  setup(__props) {
    const state = useStorage(
      vodId,
      {
        Src: "",
        PlayList: []
      }
    );
    onMounted(() => {
      nextTick(async () => {
        const { data: data2 } = await iptv.find({ "name": vodId });
        state.value.PlayList = data2;
        state.value.Src = data2[0].url;
      });
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
          rebuildPlayer: true,
          autoNext: true,
          showText: false,
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
      _push(`<div class="hint-container tip"><p class="hint-container-title">熊猫直播</p><p>全面汇聚央视、卫视频道，您的专属 全面聚合高清资源 旗舰平台，品质首选！</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/iptv/cctv/xiongmao.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const xiongmao_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "xiongmao.html.vue"]]);
const data = JSON.parse('{"path":"/iptv/cctv/xiongmao.html","title":"测试1","lang":"zh-CN","frontmatter":{"title":"测试1","icon":"fa-solid fa-user-graduate","date":"2020-01-01T00:00:00.000Z","order":4,"category":["直播"],"tag":["熊猫"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/iptv/cctv/xiongmao.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"测试1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T04:28:43.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"熊猫"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T04:28:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"测试1\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-08T04:28:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715142523000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":4}]},"readingTime":{"minutes":0.52,"words":156},"filePathRelative":"iptv/cctv/xiongmao.md","localizedDate":"2020年1月1日","excerpt":""}');
export {
  xiongmao_html as comp,
  data
};
