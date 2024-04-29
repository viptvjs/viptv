import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>我们支持 bar 功能，...</p><h2 id="详情" tabindex="-1"><a class="header-anchor" href="#详情"><span>详情</span></a></h2><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/guide/bar/baz.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`baz`);
      } else {
        return [
          createTextVNode("baz")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</li><li>...</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/bar/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/guide/bar/","title":"Bar 功能","lang":"zh-CN","frontmatter":{"title":"Bar 功能","icon":"lightbulb","description":"介绍 我们支持 bar 功能，... 详情 ...","head":[["meta",{"property":"og:url","content":"https://viptv.netlify.app/guide/bar/"}],["meta",{"property":"og:site_name","content":"VIPTV - 云视听"}],["meta",{"property":"og:title","content":"Bar 功能"}],["meta",{"property":"og:description","content":"介绍 我们支持 bar 功能，... 详情 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bar 功能\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"https://viptv.work\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"详情","slug":"详情","link":"#详情","children":[]}],"git":{},"readingTime":{"minutes":0.07,"words":21},"filePathRelative":"guide/bar/README.md","excerpt":"<h2>介绍</h2>\\n<p>我们支持 bar 功能，...</p>\\n<h2>详情</h2>\\n<ul>\\n<li><a href=\\"/guide/bar/baz.html\\" target=\\"_blank\\">baz</a></li>\\n<li>...</li>\\n</ul>\\n","autoDesc":true}');
export {
  index_html as comp,
  data
};
