import { defineComponent, onMounted, resolveComponent, unref, withCtx, createTextVNode, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { p as poster, H as Hls, a as artplayerPlaylist } from "./dexie-CPFAlEcK.js";
import { v as vod } from "./vod-C6_mP2Bu.js";
import { useStorage } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
import "hls.js/dist/hls.min.js";
import "dexie";
const vodId = "suonizy-ndxy";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ndxy.html",
  __ssrInlineRender: true,
  setup(__props) {
    const state = useStorage(
      vodId,
      {
        src: "",
        vod: [],
        PlayList: []
      }
    );
    onMounted(async () => {
      const { data: data2 } = await vod.find({ "name": vodId });
      state.value.vod = data2;
      url(0);
    });
    const url = (key) => {
      const { vod: vod2 } = state.value;
      state.value.PlayList = vod2[key].play_list;
      state.value.tip = vod2[key].vod_content;
      state.value.src = vod2[key].play_list[0].url;
    };
    const artPlayerConfig = {
      poster,
      fullscreen: true,
      fullscreenWeb: true,
      autoplay: true,
      muted: true,
      type: "Hls",
      customType: { Hls },
      plugins: [
        artplayerPlaylist({
          autoNext: true,
          playlist: state.value.PlayList
        })
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArtPlayer = resolveComponent("ArtPlayer");
      const _component_Tabs = resolveComponent("Tabs");
      const _component_SiteInfo = resolveComponent("SiteInfo");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ArtPlayer, {
        src: unref(state).src,
        config: artPlayerConfig
      }, null, _parent));
      _push(ssrRenderComponent(_component_Tabs, {
        id: "2",
        data: [{ "id": "量子资源" }],
        active: 0
      }, {
        title0: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`量子资源`);
          } else {
            return [
              createTextVNode("量子资源")
            ];
          }
        }),
        tab0: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(state).vod, (item, k) => {
              _push2(ssrRenderComponent(_component_SiteInfo, {
                name: item.vod_name,
                desc: "",
                logo: item.vod_pic,
                preview: item.vod_pic,
                url: "",
                onClick: ($event) => url(k)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><p${_scopeId}></p>`);
          } else {
            return [
              (openBlock(true), createBlock(
                Fragment,
                null,
                renderList(unref(state).vod, (item, k) => {
                  return openBlock(), createBlock(_component_SiteInfo, {
                    name: item.vod_name,
                    desc: "",
                    logo: item.vod_pic,
                    preview: item.vod_pic,
                    url: "",
                    onClick: ($event) => url(k)
                  }, null, 8, ["name", "logo", "preview", "onClick"]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )),
              createVNode("p")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/vod/duanju/ndxy.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ndxy_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ndxy.html.vue"]]);
const data = JSON.parse('{"path":"/vod/duanju/ndxy.html","title":"脑洞悬疑","lang":"zh-CN","frontmatter":{"title":"脑洞悬疑","icon":"file-video","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["短剧"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/vod/duanju/ndxy.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"脑洞悬疑"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T12:19:44.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"短剧"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T12:19:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"脑洞悬疑\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-08T12:19:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715170784000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":4}]},"readingTime":{"minutes":0.49,"words":148},"filePathRelative":"vod/duanju/ndxy.md","localizedDate":"2020年1月1日","excerpt":""}');
export {
  ndxy_html as comp,
  data
};
