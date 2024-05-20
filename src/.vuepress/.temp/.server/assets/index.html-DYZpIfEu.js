import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>我们支持 foo 功能，...</p><h2 id="详情" tabindex="-1"><a class="header-anchor" href="#详情"><span>详情</span></a></h2><ul><li>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/foo/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/guide/foo/","title":"Foo 功能","lang":"zh-CN","frontmatter":{"title":"Foo 功能","icon":"lightbulb","description":"介绍 我们支持 foo 功能，... 详情 ...","head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/guide/foo/"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"Foo 功能"}],["meta",{"property":"og:description","content":"介绍 我们支持 foo 功能，... 详情 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T04:28:43.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:modified_time","content":"2024-05-08T04:28:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Foo 功能\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T04:28:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"详情","slug":"详情","link":"#详情","children":[]}],"git":{"createdTime":1714368976000,"updatedTime":1715142523000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":3}]},"readingTime":{"minutes":0.07,"words":21},"filePathRelative":"guide/foo/README.md","localizedDate":"2024年4月29日","excerpt":"","autoDesc":true}');
export {
  index_html as comp,
  data
};
