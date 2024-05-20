import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/","title":"主页","lang":"zh-CN","frontmatter":{"home":true,"icon":"home","title":"主页","heroImage":"/logo.svg","heroText":"VIPTV 云视听","heroFullScreen":true,"actions":[{"text":"热门短剧","icon":"file-video","link":"./vod/duanju/remen","type":"primary"},{"text":"动作片","icon":"photo-film","link":"./vod/movie/dzp","type":"primary"}],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"主页"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T12:19:44.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:modified_time","content":"2024-05-08T12:19:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"主页\\"}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715170784000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":6}]},"readingTime":{"minutes":0.13,"words":40},"filePathRelative":"README.md","localizedDate":"2024年5月6日","excerpt":""}');
export {
  index_html as comp,
  data
};
