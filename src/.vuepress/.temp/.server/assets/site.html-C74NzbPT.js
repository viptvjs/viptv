import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="仓库链接" tabindex="-1"><a class="header-anchor" href="#仓库链接"><span>仓库链接</span></a></h2><ul><li><a href="https://viptv.work/" target="_blank" rel="noopener noreferrer"><strong>VIPTV云视听</strong>`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/about/site.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const site_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "site.html.vue"]]);
const data = JSON.parse('{"path":"/about/site.html","title":"","lang":"zh-CN","frontmatter":{"icon":"info","article":false,"breadcrumb":false,"description":"仓库链接 VIPTV云视听","head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/about/site.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:description","content":"仓库链接 VIPTV云视听"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T08:02:20.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:modified_time","content":"2024-05-09T08:02:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"\\",\\"description\\":\\"仓库链接 VIPTV云视听\\"}"]]},"headers":[{"level":2,"title":"仓库链接","slug":"仓库链接","link":"#仓库链接","children":[]}],"git":{"createdTime":1714993694000,"updatedTime":1715241740000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":4}]},"readingTime":{"minutes":0.05,"words":16},"filePathRelative":"about/site.md","localizedDate":"2024年5月6日","excerpt":"","autoDesc":true}');
export {
  site_html as comp,
  data
};
