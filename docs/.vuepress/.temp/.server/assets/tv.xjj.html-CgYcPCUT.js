import { defineComponent, onMounted, resolveComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
import { artplayerPlaylist } from "artplayer-playlist";
import { v as vod } from "./vod-6f7AwGw_.js";
import { useStorage } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
import "dexie";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tv.xjj.html",
  __ssrInlineRender: true,
  setup(__props) {
    const state = useStorage(
      "list-dygcw",
      {
        Src: "https://gh.con.sh/https://raw.githubusercontent.com/zhw2590582/assets-cdn/master/video/your-name-H264(Baseline%40L52)-AAC.flv",
        PlayList: []
      }
    );
    onMounted(async () => {
      const { data: data2 } = await vod.find({ "name": "ksgcw" });
      state.value.PlayList = data2;
    });
    const customPlayer = (player) => {
      player.on("artplayerPluginDanmuku:emit", (danmuku) => {
        fetch(DANMAKU_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            Id: DANMAKU_ID,
            Referrer: window.location.origin + window.location.pathname,
            ...danmuku
          })
        });
      });
    };
    const artPlayerConfig = {
      poster: "https://img.viptv.work/iptv/ads.png",
      autoOrientation: true,
      aspectRatio: true,
      pip: true,
      screenshot: true,
      fullscreen: true,
      fullscreenWeb: true,
      customType: {
        m3u8: async (mediaElement, src, player) => {
          if (mediaElement.canPlayType("application/x-mpegURL") || mediaElement.canPlayType("application/vnd.apple.mpegURL")) {
            mediaElement.src = src;
          } else {
            const HLS = (await import("hls.js/dist/hls.min.js")).default;
            const hls = new HLS();
            hls.attachMedia(mediaElement);
            hls.on(HLS.Events.MEDIA_ATTACHED, () => {
              hls.loadSource(src);
            });
            player.on("destroy", () => {
              hls.destroy();
            });
          }
        },
        flv: (video, url, art) => {
          if (flvjs.isSupported()) {
            if (art.flv)
              art.flv.destroy();
            const flv = flvjs.createPlayer({ type: "flv", url });
            flv.attachMediaElement(video);
            flv.load();
            art.flv = flv;
            art.on("destroy", () => flv.destroy());
          } else {
            art.notice.show = "Unsupported playback format: flv";
          }
        },
        mpd: (video, url, art) => {
          if (dashjs.supportsMediaSource()) {
            if (art.dash)
              art.dash.destroy();
            const dash = dashjs.MediaPlayer().create();
            dash.initialize(video, url, art.option.autoplay);
            art.dash = dash;
            art.on("destroy", () => dash.destroy());
          } else {
            art.notice.show = "Unsupported playback format: mpd";
          }
        }
      },
      plugins: [
        artplayerPluginDanmuku({
          danmuku: ""
        }),
        artplayerPlaylist({
          rebuildPlayer: true,
          onchanged: () => {
          },
          autoNext: true,
          showText: false,
          playlist: state.value.PlayList
        })
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArtPlayer = resolveComponent("ArtPlayer");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="hint-container tip"><p class="hint-container-title">快手广场舞|福利小视频</p><p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p></div>`);
      _push(ssrRenderComponent(_component_ArtPlayer, {
        src: unref(state).Src,
        config: artPlayerConfig,
        customPlayer
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tv/tv.xjj.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tv_xjj_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "tv.xjj.html.vue"]]);
const data = JSON.parse('{"path":"/tv/tv.xjj.html","title":"快手广场舞","lang":"zh-CN","frontmatter":{"title":"快手广场舞","icon":"fa-solid fa-user-graduate","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["快手","广场舞"],"description":"快手广场舞|福利小视频 赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！","head":[["meta",{"property":"og:url","content":"https://viptv.netlify.app/tv/tv.xjj.html"}],["meta",{"property":"og:site_name","content":"VIPTV - 云视听"}],["meta",{"property":"og:title","content":"快手广场舞"}],["meta",{"property":"og:description","content":"快手广场舞|福利小视频 赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"快手"}],["meta",{"property":"article:tag","content":"广场舞"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快手广场舞\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"https://viptv.work\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.16,"words":348},"filePathRelative":"tv/tv.xjj.md","localizedDate":"2020年1月1日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">快手广场舞|福利小视频</p>\\n<p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p>\\n</div>\\n","autoDesc":true}');
export {
  tv_xjj_html as comp,
  data
};
