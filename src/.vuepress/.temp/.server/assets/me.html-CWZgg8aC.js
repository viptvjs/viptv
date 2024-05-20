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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/about/me.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const me_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "me.html.vue"]]);
const data = JSON.parse('{"path":"/about/me.html","title":"About Home","lang":"zh-CN","frontmatter":{"home":true,"layout":"PortfolioHome","title":"About Home","icon":"home","name":"Mr.HeFung","avatar":"https://tinypng.com/static/images/bamboo_isolated.webp","titles":["Collection of publicly available IPTV  channels from all over the world.","User editable database for TV channels.","Autoupdate iptv sources"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/about/me.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"About Home"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T08:02:20.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:modified_time","content":"2024-05-09T08:02:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"About Home\\"}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715241740000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":5}]},"readingTime":{"minutes":0.12,"words":35},"filePathRelative":"about/me.md","localizedDate":"2024年5月6日","excerpt":""}');
export {
  me_html as comp,
  data
};
