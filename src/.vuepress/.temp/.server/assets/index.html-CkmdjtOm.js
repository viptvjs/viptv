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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/.rtsp/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/tag/.rtsp/","title":"标签: .rtsp","lang":"zh-CN","frontmatter":{"title":"标签: .rtsp","dir":{"index":false},"index":false,"feed":false,"sitemap":false,"blog":{"type":"category","name":".rtsp","key":"tag"},"layout":"BlogCategory","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/tag/.rtsp/"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"标签: .rtsp"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"标签: .rtsp\\"}"]]},"headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null,"excerpt":""}');
export {
  index_html as comp,
  data
};
