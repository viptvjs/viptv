import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>VuePress Theme Hope 允许你通过 <a href="https://ecosystem.vuejs.press/zh/plugins/watermark.html" target="_blank" rel="noopener noreferrer"><code>@vuepress/plugin-watermark</code>`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> 添加水印。</p><!-- more --><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>你可以通过主题选项的 <code>plugins.watermark</code> 自定义行为，最简单的就是设置 <code>true</code> 以直接添加一个站点名称水印。</p><p>你也可以通过 Frontmatter 中的 <code>watermark</code> 配置页面水印。</p><p>有关详细的配置，请参见 <a href="https://ecosystem.vuejs.press/zh/plugins/watermark.html#options" target="_blank" rel="noopener noreferrer">水印插件文档`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/about/notice.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const notice_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "notice.html.vue"]]);
const data = JSON.parse('{"path":"/about/notice.html","title":"水印","lang":"zh-CN","frontmatter":{"title":"水印","icon":"xmarks-lines","category":["功能"],"tag":["功能","水印"],"watermark":true,"description":"VuePress Theme Hope 允许你通过 [@vuepress/plugin-watermark][watermark] 添加水印。","head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/about/notice.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"水印"}],["meta",{"property":"og:description","content":"VuePress Theme Hope 允许你通过 [@vuepress/plugin-watermark][watermark] 添加水印。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T08:02:20.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"功能"}],["meta",{"property":"article:tag","content":"水印"}],["meta",{"property":"article:modified_time","content":"2024-05-09T08:02:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"水印\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-09T08:02:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]}],"git":{"createdTime":1715241740000,"updatedTime":1715241740000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":1}]},"readingTime":{"minutes":0.38,"words":113},"filePathRelative":"about/notice.md","localizedDate":"2024年5月9日","excerpt":"<p>VuePress Theme Hope 允许你通过 [<code>@vuepress/plugin-watermark</code>][watermark] 添加水印。</p>\\n","autoDesc":true}');
export {
  notice_html as comp,
  data
};
