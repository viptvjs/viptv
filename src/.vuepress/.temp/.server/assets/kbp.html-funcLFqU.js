import { defineComponent, onMounted, nextTick, resolveComponent, unref, withCtx, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { p as poster, H as Hls, a as artplayerPlaylist } from "./dexie-CPFAlEcK.js";
import { v as vod } from "./vod-C6_mP2Bu.js";
import { useStorage } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
import "hls.js/dist/hls.min.js";
import "dexie";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "kbp.html",
  __ssrInlineRender: true,
  setup(__props) {
    const state = useStorage(
      "vod-kbp",
      {
        src: "",
        vodlz: [],
        vodbf: [],
        PlayList: []
      }
    );
    onMounted(() => {
      nextTick(async () => {
        const lzcaiji = await vod.find({ "name": "lzcaiji-kbp" });
        const bfzy = await vod.find({ "name": "bfzy-kbp" });
        state.value.vodlz = lzcaiji.data;
        state.value.vodbf = bfzy.data;
        vodlzurl(0);
      });
    });
    const vodlzurl = (key) => {
      const { vodlz } = state.value;
      state.value.PlayList = vodlz;
      state.value.src = vodlz[key].url;
    };
    const vodbfurl = (key) => {
      const { vodbf } = state.value;
      state.value.PlayList = vodbf;
      state.value.src = vodbf[key].url;
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
        data: [{ "id": "量子资源" }, { "id": "暴风资源" }],
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
        title1: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`暴风资源`);
          } else {
            return [
              createTextVNode("暴风资源")
            ];
          }
        }),
        tab0: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(state).vodlz, (item, k) => {
              _push2(ssrRenderComponent(_component_SiteInfo, {
                name: item.title,
                desc: "",
                logo: item.vod_pic,
                preview: item.vod_pic,
                url: "",
                onClick: ($event) => vodlzurl(k)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(
                Fragment,
                null,
                renderList(unref(state).vodlz, (item, k) => {
                  return openBlock(), createBlock(_component_SiteInfo, {
                    name: item.title,
                    desc: "",
                    logo: item.vod_pic,
                    preview: item.vod_pic,
                    url: "",
                    onClick: ($event) => vodlzurl(k)
                  }, null, 8, ["name", "logo", "preview", "onClick"]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ];
          }
        }),
        tab1: withCtx(({ value, isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(state).vodbf, (item, k) => {
              _push2(ssrRenderComponent(_component_SiteInfo, {
                name: item.title,
                desc: "",
                logo: item.vod_pic,
                preview: item.vod_pic,
                url: "",
                onClick: ($event) => vodbfurl(k)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(
                Fragment,
                null,
                renderList(unref(state).vodbf, (item, k) => {
                  return openBlock(), createBlock(_component_SiteInfo, {
                    name: item.title,
                    desc: "",
                    logo: item.vod_pic,
                    preview: item.vod_pic,
                    url: "",
                    onClick: ($event) => vodbfurl(k)
                  }, null, 8, ["name", "logo", "preview", "onClick"]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/vod/movie/kbp.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kbp_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "kbp.html.vue"]]);
const data = JSON.parse('{"path":"/vod/movie/kbp.html","title":"恐怖片","lang":"zh-CN","frontmatter":{"title":"恐怖片","icon":"film","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["恐怖"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/vod/movie/kbp.html"}],["meta",{"property":"og:site_name","content":"VIPTV"}],["meta",{"property":"og:title","content":"恐怖片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T12:19:44.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"恐怖"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T12:19:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"恐怖片\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-08T12:19:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715170784000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":4}]},"readingTime":{"minutes":0.61,"words":183},"filePathRelative":"vod/movie/kbp.md","localizedDate":"2020年1月1日","excerpt":""}');
export {
  kbp_html as comp,
  data
};
