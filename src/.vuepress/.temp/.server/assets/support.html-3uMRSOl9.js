import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/assets/png/support.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>如果你喜欢我的开源项目，并愿意给予支持的话，欢迎进行捐赠赞赏。</p><p>以下是我的二维码:</p><figure><img${ssrRenderAttr("src", _imports_0)} alt="支付宝" tabindex="0" loading="lazy"><figcaption>支付宝</figcaption></figure></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/about/support.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const support_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "support.html.vue"]]);
const data = JSON.parse('{"path":"/about/support.html","title":"捐赠","lang":"zh-CN","frontmatter":{"title":"捐赠","icon":"support","article":false,"timeline":false,"description":"如果你喜欢我的开源项目，并愿意给予支持的话，欢迎进行捐赠赞赏。 以下是我的二维码: 支付宝支付宝","head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/about/support.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"捐赠"}],["meta",{"property":"og:description","content":"如果你喜欢我的开源项目，并愿意给予支持的话，欢迎进行捐赠赞赏。 以下是我的二维码: 支付宝支付宝"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://DESKTOP-BB2QNSK/assets/png/support.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T08:02:20.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:modified_time","content":"2024-05-09T08:02:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"捐赠\\",\\"description\\":\\"如果你喜欢我的开源项目，并愿意给予支持的话，欢迎进行捐赠赞赏。 以下是我的二维码: 支付宝支付宝\\"}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715241740000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":1}]},"readingTime":{"minutes":0.16,"words":49},"filePathRelative":"about/support.md","localizedDate":"2024年5月6日","excerpt":"","autoDesc":true}');
export {
  support_html as comp,
  data
};
