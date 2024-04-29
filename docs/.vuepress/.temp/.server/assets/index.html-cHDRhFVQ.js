import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="功能亮点" tabindex="-1"><a class="header-anchor" href="#功能亮点"><span>功能亮点</span></a></h2><h3 id="bar" tabindex="-1"><a class="header-anchor" href="#bar"><span>Bar</span></a></h3><ul><li>`);
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
  _push(`</li><li>...</li></ul><h3 id="foo" tabindex="-1"><a class="header-anchor" href="#foo"><span>Foo</span></a></h3><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/guide/foo/ray.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ray`);
      } else {
        return [
          createTextVNode("ray")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/guide/","title":"指南","lang":"zh-CN","frontmatter":{"title":"指南","icon":"lightbulb","description":"功能亮点 Bar ... Foo ...","head":[["meta",{"property":"og:url","content":"https://viptv.netlify.app/guide/"}],["meta",{"property":"og:site_name","content":"VIPTV - 云视听"}],["meta",{"property":"og:title","content":"指南"}],["meta",{"property":"og:description","content":"功能亮点 Bar ... Foo ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"https://viptv.work\\"}]}"]]},"headers":[{"level":2,"title":"功能亮点","slug":"功能亮点","link":"#功能亮点","children":[{"level":3,"title":"Bar","slug":"bar","link":"#bar","children":[]},{"level":3,"title":"Foo","slug":"foo","link":"#foo","children":[]}]}],"git":{},"readingTime":{"minutes":0.06,"words":17},"filePathRelative":"guide/README.md","excerpt":"<h2>功能亮点</h2>\\n<h3>Bar</h3>\\n<ul>\\n<li><a href=\\"/guide/bar/baz.html\\" target=\\"_blank\\">baz</a></li>\\n<li>...</li>\\n</ul>\\n<h3>Foo</h3>\\n<ul>\\n<li><a href=\\"/guide/foo/ray.html\\" target=\\"_blank\\">ray</a></li>\\n<li>...</li>\\n</ul>\\n","autoDesc":true}');
export {
  index_html as comp,
  data
};
