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
const data = JSON.parse('{"path":"/","title":"主页","lang":"zh-CN","frontmatter":{"containerClass":"home","home":true,"icon":"home","title":"主页","heroImage":"https://img.viptv.work/viptv/VIP-TV-LOGO-FINAL-600x600.png","bgImage":"https://theme-hope-assets.vuejs.press/bg/4-light.svg","bgImageDark":"https://theme-hope-assets.vuejs.press/bg/4-dark.svg","bgImageStyle":{"background-attachment":"fixed"},"heroText":"VIPTV - 云视听","tagline":"简单,快捷,高效，打造最佳的视听链。","actions":[{"text":"使用指南","icon":"lightbulb","link":"./demo/","type":"primary"},{"text":"文档","link":"./guide/"}],"head":[["meta",{"property":"og:url","content":"https://viptv.netlify.app/"}],["meta",{"property":"og:site_name","content":"VIPTV - 云视听"}],["meta",{"property":"og:title","content":"主页"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"主页\\"}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.23,"words":69},"filePathRelative":"README.md","excerpt":""}');
export {
  index_html as comp,
  data
};
