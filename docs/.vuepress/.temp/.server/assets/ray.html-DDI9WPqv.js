import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>功能详情...</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/foo/ray.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ray_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ray.html.vue"]]);
const data = JSON.parse('{"path":"/guide/foo/ray.html","title":"Ray","lang":"zh-CN","frontmatter":{"title":"Ray","icon":"circle-info","description":"功能详情...","head":[["meta",{"property":"og:url","content":"https://viptv.netlify.app/guide/foo/ray.html"}],["meta",{"property":"og:site_name","content":"VIPTV - 云视听"}],["meta",{"property":"og:title","content":"Ray"}],["meta",{"property":"og:description","content":"功能详情..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ray\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"https://viptv.work\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.03,"words":10},"filePathRelative":"guide/foo/ray.md","excerpt":"<p>功能详情...</p>\\n","autoDesc":true}');
export {
  ray_html as comp,
  data
};
