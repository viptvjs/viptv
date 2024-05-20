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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/blog.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "blog.html.vue"]]);
const data = JSON.parse('{"path":"/blog.html","title":"博客首页","lang":"zh-CN","frontmatter":{"home":true,"layout":"BlogHome","icon":"blog","title":"博客首页","heroText":"Mr. HeFung","tagline":"Where there is light, there is HeFung","heroImage":"https://img.viptv.work/viptv/VIP-TV-LOGO-FINAL-600x600.png","bgImage":"https://file.mo7.cc/api/public/bz","heroFullScreen":true,"head":[["meta",{"name":"baidu-site-verification","content":"codeva-4N5cviFcWA"}],["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/blog.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"博客首页"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T04:28:43.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:modified_time","content":"2024-05-08T04:28:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"博客首页\\"}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715142523000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":3}]},"readingTime":{"minutes":0.14,"words":43},"filePathRelative":"blog.md","localizedDate":"2024年5月6日","excerpt":""}');
export {
  blog_html as comp,
  data
};
