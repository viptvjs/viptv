import {
  __commonJS
} from "./chunk-LQ2VYIYD.js";

// node_modules/.pnpm/artplayer@5.1.1/node_modules/artplayer/dist/artplayer.js
var require_artplayer = __commonJS({
  "node_modules/.pnpm/artplayer@5.1.1/node_modules/artplayer/dist/artplayer.js"(exports, module) {
    !function(t, e, r, a, o) {
      var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, i = "function" == typeof n[a] && n[a], s = i.cache || {}, l = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);
      function c(e2, r2) {
        if (!s[e2]) {
          if (!t[e2]) {
            var o2 = "function" == typeof n[a] && n[a];
            if (!r2 && o2)
              return o2(e2, true);
            if (i)
              return i(e2, true);
            if (l && "string" == typeof e2)
              return l(e2);
            var u2 = new Error("Cannot find module '" + e2 + "'");
            throw u2.code = "MODULE_NOT_FOUND", u2;
          }
          d.resolve = function(r3) {
            var a2 = t[e2][1][r3];
            return null != a2 ? a2 : r3;
          }, d.cache = {};
          var p2 = s[e2] = new c.Module(e2);
          t[e2][0].call(p2.exports, d, p2, p2.exports, this);
        }
        return s[e2].exports;
        function d(t2) {
          var e3 = d.resolve(t2);
          return false === e3 ? {} : c(e3);
        }
      }
      c.isParcelRequire = true, c.Module = function(t2) {
        this.id = t2, this.bundle = c, this.exports = {};
      }, c.modules = t, c.cache = s, c.parent = i, c.register = function(e2, r2) {
        t[e2] = [function(t2, e3) {
          e3.exports = r2;
        }, {}];
      }, Object.defineProperty(c, "root", { get: function() {
        return n[a];
      } }), n[a] = c;
      for (var u = 0; u < e.length; u++)
        c(e[u]);
      if (r) {
        var p = c(r);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = p : "function" == typeof define && define.amd && define(function() {
          return p;
        });
      }
    }({ abjMI: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("bundle-text:./style/index.less"), n = a.interopDefault(o), i = t("option-validator"), s = a.interopDefault(i), l = t("./utils/emitter"), c = a.interopDefault(l), u = t("./utils"), p = t("./scheme"), d = a.interopDefault(p), f = t("./config"), h = a.interopDefault(f), m = t("./template"), g = a.interopDefault(m), v = t("./i18n"), y = a.interopDefault(v), b = t("./player"), x = a.interopDefault(b), w = t("./control"), j = a.interopDefault(w), k = t("./contextmenu"), $ = a.interopDefault(k), S = t("./info"), I = a.interopDefault(S), T = t("./subtitle"), E = a.interopDefault(T), O = t("./events"), M = a.interopDefault(O), C = t("./hotkey"), F = a.interopDefault(C), H = t("./layer"), B = a.interopDefault(H), D = t("./loading"), A = a.interopDefault(D), R = t("./notice"), z = a.interopDefault(R), L = t("./mask"), P = a.interopDefault(L), N = t("./icons"), _ = a.interopDefault(N), Z = t("./setting"), q = a.interopDefault(Z), V = t("./storage"), W = a.interopDefault(V), U = t("./plugins"), Y = a.interopDefault(U);
      let K = 0;
      const G = [];
      class X extends c.default {
        constructor(t2, e2) {
          super(), this.id = ++K;
          const r2 = u.mergeDeep(X.option, t2);
          if (r2.container = t2.container, this.option = (0, s.default)(r2, d.default), this.isLock = false, this.isReady = false, this.isFocus = false, this.isInput = false, this.isRotate = false, this.isDestroy = false, this.template = new (0, g.default)(this), this.events = new (0, M.default)(this), this.storage = new (0, W.default)(this), this.icons = new (0, _.default)(this), this.i18n = new (0, y.default)(this), this.notice = new (0, z.default)(this), this.player = new (0, x.default)(this), this.layers = new (0, B.default)(this), this.controls = new (0, j.default)(this), this.contextmenu = new (0, $.default)(this), this.subtitle = new (0, E.default)(this), this.info = new (0, I.default)(this), this.loading = new (0, A.default)(this), this.hotkey = new (0, F.default)(this), this.mask = new (0, P.default)(this), this.setting = new (0, q.default)(this), this.plugins = new (0, Y.default)(this), "function" == typeof e2 && this.on("ready", () => e2.call(this, this)), X.DEBUG) {
            const t3 = (t4) => console.log(`[ART.${this.id}] -> ${t4}`);
            t3("Version@" + X.version), t3("Env@" + X.env), t3("Build@" + X.build);
            for (let e3 = 0; e3 < h.default.events.length; e3++)
              this.on("video:" + h.default.events[e3], (e4) => t3("Event@" + e4.type));
          }
          G.push(this);
        }
        static get instances() {
          return G;
        }
        static get version() {
          return "5.1.1";
        }
        static get env() {
          return "production";
        }
        static get build() {
          return "2024-01-11 10:39:44";
        }
        static get config() {
          return h.default;
        }
        static get utils() {
          return u;
        }
        static get scheme() {
          return d.default;
        }
        static get Emitter() {
          return c.default;
        }
        static get validator() {
          return s.default;
        }
        static get kindOf() {
          return s.default.kindOf;
        }
        static get html() {
          return g.default.html;
        }
        static get option() {
          return { id: "", container: "#artplayer", url: "", poster: "", type: "", theme: "#f00", volume: 0.7, isLive: false, muted: false, autoplay: false, autoSize: false, autoMini: false, loop: false, flip: false, playbackRate: false, aspectRatio: false, screenshot: false, setting: false, hotkey: true, pip: false, mutex: true, backdrop: true, fullscreen: false, fullscreenWeb: false, subtitleOffset: false, miniProgressBar: false, useSSR: false, playsInline: true, lock: false, fastForward: false, autoPlayback: false, autoOrientation: false, airplay: false, layers: [], contextmenu: [], controls: [], settings: [], quality: [], highlight: [], plugins: [], thumbnails: { url: "", number: 60, column: 10, width: 0, height: 0 }, subtitle: { url: "", type: "", style: {}, name: "", escape: true, encoding: "utf-8", onVttLoad: (t2) => t2 }, moreVideoAttr: { controls: false, preload: u.isSafari ? "auto" : "metadata" }, i18n: {}, icons: {}, cssVar: {}, customType: {}, lang: navigator.language.toLowerCase() };
        }
        get proxy() {
          return this.events.proxy;
        }
        get query() {
          return this.template.query;
        }
        get video() {
          return this.template.$video;
        }
        destroy(t2 = true) {
          this.events.destroy(), this.template.destroy(t2), G.splice(G.indexOf(this), 1), this.isDestroy = true, this.emit("destroy");
        }
      }
      r.default = X, X.DEBUG = false, X.CONTEXTMENU = true, X.NOTICE_TIME = 2e3, X.SETTING_WIDTH = 250, X.SETTING_ITEM_WIDTH = 200, X.SETTING_ITEM_HEIGHT = 35, X.RESIZE_TIME = 200, X.SCROLL_TIME = 200, X.SCROLL_GAP = 50, X.AUTO_PLAYBACK_MAX = 10, X.AUTO_PLAYBACK_MIN = 5, X.AUTO_PLAYBACK_TIMEOUT = 3e3, X.RECONNECT_TIME_MAX = 5, X.RECONNECT_SLEEP_TIME = 1e3, X.CONTROL_HIDE_TIME = 3e3, X.DBCLICK_TIME = 300, X.DBCLICK_FULLSCREEN = true, X.MOBILE_DBCLICK_PLAY = true, X.MOBILE_CLICK_PLAY = false, X.AUTO_ORIENTATION_TIME = 200, X.INFO_LOOP_TIME = 1e3, X.FAST_FORWARD_VALUE = 3, X.FAST_FORWARD_TIME = 1e3, X.TOUCH_MOVE_RATIO = 0.5, X.VOLUME_STEP = 0.1, X.SEEK_STEP = 5, X.PLAYBACK_RATE = [0.5, 0.75, 1, 1.25, 1.5, 2], X.ASPECT_RATIO = ["default", "4:3", "16:9"], X.FLIP = ["normal", "horizontal", "vertical"], X.FULLSCREEN_WEB_IN_BODY = false, X.LOG_VERSION = true, X.USE_RAF = false, u.isBrowser && (window.Artplayer = X, u.setStyleText("artplayer-style", n.default), setTimeout(() => {
        X.LOG_VERSION && console.log(`%c ArtPlayer %c ${X.version} %c https://artplayer.org`, "color: #fff; background: #5f5f5f", "color: #fff; background: #4bc729", "");
      }, 100));
    }, { "bundle-text:./style/index.less": "kfOe8", "option-validator": "bAWi2", "./utils/emitter": "2bGVu", "./utils": "h3rH9", "./scheme": "AdvwB", "./config": "9Xmqu", "./template": "2gKYH", "./i18n": "1AdeF", "./player": "556MW", "./control": "14IBq", "./contextmenu": "7iUum", "./info": "hD2Lg", "./subtitle": "lum0D", "./events": "1Epl5", "./hotkey": "eTow4", "./layer": "4fDoD", "./loading": "fE0Sp", "./notice": "9PuGy", "./mask": "2etr0", "./icons": "6dYSr", "./setting": "bRHiA", "./storage": "f2Thp", "./plugins": "96ThS", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], kfOe8: [function(t, e, r) {
      e.exports = '.art-video-player{--art-theme:red;--art-font-color:#fff;--art-background-color:#000;--art-text-shadow-color:#00000080;--art-transition-duration:.2s;--art-padding:10px;--art-border-radius:3px;--art-progress-height:6px;--art-progress-color:#fff3;--art-hover-color:#fff3;--art-loaded-color:#fff3;--art-state-size:80px;--art-state-opacity:.8;--art-bottom-height:100px;--art-bottom-offset:20px;--art-bottom-gap:5px;--art-highlight-width:8px;--art-highlight-color:#ffffff80;--art-control-height:46px;--art-control-opacity:.75;--art-control-icon-size:36px;--art-control-icon-scale:1.1;--art-volume-height:120px;--art-volume-handle-size:14px;--art-lock-size:36px;--art-indicator-scale:0;--art-indicator-size:16px;--art-fullscreen-web-index:9999;--art-settings-icon-size:24px;--art-settings-max-height:300px;--art-selector-max-height:300px;--art-contextmenus-min-width:250px;--art-subtitle-font-size:20px;--art-subtitle-gap:5px;--art-subtitle-bottom:15px;--art-subtitle-border:#000;--art-widget-background:#000000d9;--art-tip-background:#00000080;--art-scrollbar-size:4px;--art-scrollbar-background:#ffffff40;--art-scrollbar-background-hover:#ffffff80;--art-mini-progress-height:2px}.art-bg-cover{background-position:50%;background-repeat:no-repeat;background-size:cover}.art-bottom-gradient{background-image:linear-gradient(#0000,#0006,#000);background-position:bottom;background-repeat:repeat-x}.art-backdrop-filter{-webkit-backdrop-filter:saturate(180%)blur(20px);backdrop-filter:saturate(180%)blur(20px);background-color:#000000bf!important}.art-truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.art-video-player{width:100%;height:100%;zoom:1;text-align:left;direction:ltr;user-select:none;box-sizing:border-box;color:var(--art-font-color);background-color:var(--art-background-color);text-shadow:0 0 2px var(--art-text-shadow-color);-webkit-tap-highlight-color:#0000;-ms-touch-action:manipulation;touch-action:manipulation;-ms-high-contrast-adjust:none;outline:0;margin:0 auto;padding:0;font-family:PingFang SC,Helvetica Neue,Microsoft YaHei,Roboto,Arial,sans-serif;font-size:14px;line-height:1.3;position:relative}.art-video-player *,.art-video-player :before,.art-video-player :after{box-sizing:border-box}.art-video-player ::-webkit-scrollbar{width:var(--art-scrollbar-size);height:var(--art-scrollbar-size)}.art-video-player ::-webkit-scrollbar-thumb{background-color:var(--art-scrollbar-background)}.art-video-player ::-webkit-scrollbar-thumb:hover{background-color:var(--art-scrollbar-background-hover)}.art-video-player img{max-width:100%;vertical-align:top}.art-video-player svg{fill:var(--art-font-color)}.art-video-player a{color:var(--art-font-color);text-decoration:none}.art-icon{justify-content:center;align-items:center;line-height:1;display:flex}.art-video-player.art-backdrop .art-contextmenus,.art-video-player.art-backdrop .art-info,.art-video-player.art-backdrop .art-settings,.art-video-player.art-backdrop .art-layer-auto-playback,.art-video-player.art-backdrop .art-selector-list,.art-video-player.art-backdrop .art-volume-inner{-webkit-backdrop-filter:saturate(180%)blur(20px);backdrop-filter:saturate(180%)blur(20px);background-color:#000000bf!important}.art-video{z-index:10;width:100%;height:100%;cursor:pointer;position:absolute;inset:0}.art-poster{z-index:11;width:100%;height:100%;pointer-events:none;background-position:50%;background-repeat:no-repeat;background-size:cover;position:absolute;inset:0}.art-video-player .art-subtitle{z-index:20;width:100%;text-align:center;pointer-events:none;justify-content:center;align-items:center;gap:var(--art-subtitle-gap);bottom:var(--art-subtitle-bottom);font-size:var(--art-subtitle-font-size);transition:bottom var(--art-transition-duration)ease;text-shadow:var(--art-subtitle-border)1px 0 1px,var(--art-subtitle-border)0 1px 1px,var(--art-subtitle-border)-1px 0 1px,var(--art-subtitle-border)0 -1px 1px,var(--art-subtitle-border)1px 1px 1px,var(--art-subtitle-border)-1px -1px 1px,var(--art-subtitle-border)1px -1px 1px,var(--art-subtitle-border)-1px 1px 1px;flex-direction:column;padding:0 5%;display:none;position:absolute}.art-video-player.art-subtitle-show .art-subtitle{display:flex}.art-video-player.art-control-show .art-subtitle{bottom:calc(var(--art-control-height) + var(--art-subtitle-bottom))}.art-danmuku{z-index:30;width:100%;height:100%;pointer-events:none;position:absolute;inset:0;overflow:hidden}.art-video-player .art-layers{z-index:40;width:100%;height:100%;pointer-events:none;display:none;position:absolute;inset:0}.art-video-player .art-layers .art-layer{pointer-events:auto}.art-video-player.art-layer-show .art-layers{display:flex}.art-video-player .art-mask{z-index:50;width:100%;height:100%;pointer-events:none;justify-content:center;align-items:center;display:flex;position:absolute;inset:0}.art-video-player .art-mask .art-state{opacity:0;width:var(--art-state-size);height:var(--art-state-size);transition:all var(--art-transition-duration)ease;justify-content:center;align-items:center;display:flex;transform:scale(2)}.art-video-player.art-mask-show .art-state{cursor:pointer;pointer-events:auto;opacity:var(--art-state-opacity);transform:scale(1)}.art-video-player.art-loading-show .art-state{display:none}.art-video-player .art-loading{z-index:70;width:100%;height:100%;pointer-events:none;justify-content:center;align-items:center;display:none;position:absolute;inset:0}.art-video-player.art-loading-show .art-loading{display:flex}.art-video-player .art-bottom{z-index:60;width:100%;height:100%;opacity:0;pointer-events:none;padding:0 var(--art-padding);transition:all var(--art-transition-duration)ease;background-size:100% var(--art-bottom-height);background-image:linear-gradient(#0000,#0006,#000);background-position:bottom;background-repeat:repeat-x;flex-direction:column;justify-content:flex-end;display:flex;position:absolute;inset:0;overflow:hidden}.art-video-player .art-bottom .art-controls,.art-video-player .art-bottom .art-progress{transform:translateY(var(--art-bottom-offset));transition:transform var(--art-transition-duration)ease}.art-video-player.art-control-show .art-bottom,.art-video-player.art-hover .art-bottom{opacity:1}.art-video-player.art-control-show .art-bottom .art-controls,.art-video-player.art-hover .art-bottom .art-controls,.art-video-player.art-control-show .art-bottom .art-progress,.art-video-player.art-hover .art-bottom .art-progress{transform:translateY(0)}.art-bottom .art-progress{z-index:0;pointer-events:auto;padding-bottom:var(--art-bottom-gap);position:relative}.art-bottom .art-progress .art-control-progress{cursor:pointer;height:var(--art-progress-height);justify-content:center;align-items:center;display:flex;position:relative}.art-bottom .art-progress .art-control-progress .art-control-progress-inner{height:50%;width:100%;transition:height var(--art-transition-duration)ease;background-color:var(--art-progress-color);align-items:center;display:flex;position:relative}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-hover{z-index:0;width:100%;height:100%;width:0%;background-color:var(--art-hover-color);display:none;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-loaded{z-index:10;width:100%;height:100%;width:0%;background-color:var(--art-loaded-color);position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-played{z-index:20;width:100%;height:100%;width:0%;background-color:var(--art-theme);position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight{z-index:30;width:100%;height:100%;pointer-events:none;position:absolute;inset:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight span{z-index:0;width:100%;height:100%;pointer-events:auto;transform:translateX(calc(var(--art-highlight-width)/-2));background-color:var(--art-highlight-color);position:absolute;inset:0 auto 0 0;width:var(--art-highlight-width)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{z-index:40;width:var(--art-indicator-size);height:var(--art-indicator-size);transform:scale(var(--art-indicator-scale));margin-left:calc(var(--art-indicator-size)/-2);transition:transform var(--art-transition-duration)ease;border-radius:50%;justify-content:center;align-items:center;display:flex;position:absolute;left:0}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator .art-icon{width:100%;height:100%;pointer-events:none}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:hover{transform:scale(1.2)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:active{transform:scale(1)!important}.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip{z-index:50;border-radius:var(--art-border-radius);white-space:nowrap;background-color:var(--art-tip-background);padding:3px 5px;font-size:12px;line-height:1;display:none;position:absolute;top:-25px;left:0}.art-bottom .art-progress .art-control-progress:hover .art-control-progress-inner{height:100%}.art-bottom .art-progress .art-control-thumbnails{bottom:calc(var(--art-bottom-gap) + 10px);border-radius:var(--art-border-radius);pointer-events:none;background-color:var(--art-widget-background);display:none;position:absolute;left:0;box-shadow:0 1px 3px #0003,0 1px 2px -1px #0003}.art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{transform:scale(1)}.art-controls{z-index:10;pointer-events:auto;height:var(--art-control-height);justify-content:space-between;align-items:center;display:flex;position:relative}.art-controls .art-controls-left,.art-controls .art-controls-right{height:100%;display:flex}.art-controls .art-controls-center{height:100%;flex:1;justify-content:center;align-items:center;padding:0 10px;display:none}.art-controls .art-controls-right{justify-content:flex-end}.art-controls .art-control{cursor:pointer;white-space:nowrap;opacity:var(--art-control-opacity);min-height:var(--art-control-height);min-width:var(--art-control-height);transition:opacity var(--art-transition-duration)ease;flex-shrink:0;justify-content:center;align-items:center;display:flex}.art-controls .art-control .art-icon{height:var(--art-control-icon-size);width:var(--art-control-icon-size);transform:scale(var(--art-control-icon-scale));transition:transform var(--art-transition-duration)ease}.art-controls .art-control .art-icon:active{transform:scale(calc(var(--art-control-icon-scale)*.8))}.art-controls .art-control:hover{opacity:1}.art-control-volume{position:relative}.art-control-volume .art-volume-panel{text-align:center;cursor:default;opacity:0;pointer-events:none;left:0;right:0;bottom:var(--art-control-height);width:var(--art-control-height);height:var(--art-volume-height);transition:all var(--art-transition-duration)ease;justify-content:center;align-items:center;padding:0 5px;font-size:12px;display:flex;position:absolute;transform:translateY(10px)}.art-control-volume .art-volume-panel .art-volume-inner{height:100%;width:100%;border-radius:var(--art-border-radius);background-color:var(--art-widget-background);flex-direction:column;align-items:center;gap:10px;padding:10px 0 12px;display:flex}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider{width:100%;cursor:pointer;flex:1;justify-content:center;display:flex;position:relative}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle{width:2px;border-radius:var(--art-border-radius);background-color:#ffffff40;justify-content:center;display:flex;position:relative;overflow:hidden}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle .art-volume-loaded{z-index:0;width:100%;height:100%;background-color:var(--art-theme);position:absolute;inset:0}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-indicator{width:var(--art-volume-handle-size);height:var(--art-volume-handle-size);margin-top:calc(var(--art-volume-handle-size)/-2);background-color:var(--art-theme);transition:transform var(--art-transition-duration)ease;border-radius:100%;flex-shrink:0;position:absolute;transform:scale(1)}.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider:active .art-volume-indicator{transform:scale(.9)}.art-control-volume:hover .art-volume-panel{opacity:1;pointer-events:auto;transform:translateY(0)}.art-video-player .art-notice{z-index:80;width:100%;height:100%;height:auto;padding:var(--art-padding);pointer-events:none;display:none;position:absolute;inset:0 0 auto}.art-video-player .art-notice .art-notice-inner{border-radius:var(--art-border-radius);background-color:var(--art-tip-background);padding:5px;line-height:1;display:inline-flex}.art-video-player.art-notice-show .art-notice{display:flex}.art-video-player .art-contextmenus{z-index:120;border-radius:var(--art-border-radius);background-color:var(--art-widget-background);min-width:var(--art-contextmenus-min-width);flex-direction:column;padding:5px 0;font-size:12px;display:none;position:absolute}.art-video-player .art-contextmenus .art-contextmenu{cursor:pointer;border-bottom:1px solid #ffffff1a;padding:10px 15px;display:flex}.art-video-player .art-contextmenus .art-contextmenu span{padding:0 8px}.art-video-player .art-contextmenus .art-contextmenu span:hover,.art-video-player .art-contextmenus .art-contextmenu span.art-current{color:var(--art-theme)}.art-video-player .art-contextmenus .art-contextmenu:hover{background-color:#ffffff1a}.art-video-player .art-contextmenus .art-contextmenu:last-child{border-bottom:none}.art-video-player.art-contextmenu-show .art-contextmenus{display:flex}.art-video-player .art-settings{z-index:90;border-radius:var(--art-border-radius);transform-origin:100% 100%;max-height:var(--art-settings-max-height);left:auto;right:var(--art-padding);bottom:var(--art-control-height);transform:scale(var(--art-settings-scale));transition:all var(--art-transition-duration)ease;background-color:var(--art-widget-background);flex-direction:column;display:none;position:absolute;overflow:hidden auto}.art-video-player .art-settings .art-setting-panel{flex-direction:column;display:none}.art-video-player .art-settings .art-setting-panel.art-current{display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item{cursor:pointer;transition:background-color var(--art-transition-duration)ease;justify-content:space-between;align-items:center;padding:0 5px;display:flex;overflow:hidden}.art-video-player .art-settings .art-setting-panel .art-setting-item:hover{background-color:#ffffff1a}.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current{color:var(--art-theme)}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-icon-check{visibility:hidden;height:15px}.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current .art-icon-check{visibility:visible}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left{justify-content:center;align-items:center;gap:5px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left .art-setting-item-left-icon{height:var(--art-settings-icon-size);width:var(--art-settings-icon-size);justify-content:center;align-items:center;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right{justify-content:center;align-items:center;gap:5px;font-size:12px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-tooltip{white-space:nowrap;color:#ffffff80}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-icon{min-width:32px;height:24px;justify-content:center;align-items:center;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-range{height:3px;width:80px;appearance:none;background-color:#fff3;outline:none}.art-video-player .art-settings .art-setting-panel .art-setting-item-back{border-bottom:1px solid #ffffff1a}.art-video-player.art-setting-show .art-settings{display:flex}.art-video-player .art-info{left:var(--art-padding);top:var(--art-padding);z-index:100;border-radius:var(--art-border-radius);background-color:var(--art-widget-background);padding:10px;font-size:12px;display:none;position:absolute}.art-video-player .art-info .art-info-panel{flex-direction:column;gap:5px;display:flex}.art-video-player .art-info .art-info-panel .art-info-item{align-items:center;gap:5px;display:flex}.art-video-player .art-info .art-info-panel .art-info-item .art-info-title{width:100px;text-align:right}.art-video-player .art-info .art-info-panel .art-info-item .art-info-content{width:250px;text-overflow:ellipsis;white-space:nowrap;user-select:all;overflow:hidden}.art-video-player .art-info .art-info-close{cursor:pointer;position:absolute;top:5px;right:5px}.art-video-player.art-info-show .art-info{display:flex}.art-hide-cursor *{cursor:none!important}.art-video-player[data-aspect-ratio]{overflow:hidden}.art-video-player[data-aspect-ratio] .art-video{object-fit:fill;box-sizing:content-box}.art-fullscreen{--art-control-height:60px;--art-control-icon-scale:1.3}.art-fullscreen-web{--art-control-height:60px;--art-control-icon-scale:1.3;z-index:var(--art-fullscreen-web-index);width:100%;height:100%;position:fixed;inset:0}.art-mini-popup{z-index:9999;width:320px;height:180px;border-radius:var(--art-border-radius);cursor:move;user-select:none;background:#000;transition:opacity .2s;position:fixed;overflow:hidden;box-shadow:0 0 5px #00000080}.art-mini-popup svg{fill:#fff}.art-mini-popup .art-video{pointer-events:none}.art-mini-popup .art-mini-close{z-index:20;cursor:pointer;opacity:0;transition:opacity .2s;position:absolute;top:10px;right:10px}.art-mini-popup .art-mini-state{z-index:30;width:100%;height:100%;pointer-events:none;opacity:0;background-color:#00000040;justify-content:center;align-items:center;transition:opacity .2s;display:flex;position:absolute;inset:0}.art-mini-popup .art-mini-state .art-icon{opacity:.75;cursor:pointer;pointer-events:auto;transition:transform .2s;transform:scale(3)}.art-mini-popup .art-mini-state .art-icon:active{transform:scale(2.5)}.art-mini-popup.art-mini-droging{opacity:.9}.art-mini-popup:hover .art-mini-close,.art-mini-popup:hover .art-mini-state{opacity:1}.art-video-player[data-flip=horizontal] .art-video{transform:scaleX(-1)}.art-video-player[data-flip=vertical] .art-video{transform:scaleY(-1)}.art-video-player .art-layer-lock{height:var(--art-lock-size);width:var(--art-lock-size);top:50%;left:var(--art-padding);background-color:var(--art-tip-background);border-radius:50%;justify-content:center;align-items:center;display:none;position:absolute;transform:translateY(-50%)}.art-video-player .art-layer-auto-playback{border-radius:var(--art-border-radius);left:var(--art-padding);bottom:calc(var(--art-control-height) + var(--art-bottom-gap) + 10px);background-color:var(--art-widget-background);align-items:center;gap:10px;padding:10px;line-height:1;display:none;position:absolute}.art-video-player .art-layer-auto-playback .art-auto-playback-close{cursor:pointer;justify-content:center;align-items:center;display:flex}.art-video-player .art-layer-auto-playback .art-auto-playback-close svg{width:15px;height:15px;fill:var(--art-theme)}.art-video-player .art-layer-auto-playback .art-auto-playback-jump{color:var(--art-theme);cursor:pointer}.art-video-player.art-lock .art-subtitle{bottom:var(--art-subtitle-bottom)!important}.art-video-player.art-mini-progress-bar .art-bottom,.art-video-player.art-lock .art-bottom{opacity:1;background-image:none;padding:0}.art-video-player.art-mini-progress-bar .art-bottom .art-controls,.art-video-player.art-lock .art-bottom .art-controls,.art-video-player.art-mini-progress-bar .art-bottom .art-progress,.art-video-player.art-lock .art-bottom .art-progress{transform:translateY(calc(var(--art-control-height) + var(--art-bottom-gap) + var(--art-progress-height)/4))}.art-video-player.art-mini-progress-bar .art-bottom .art-progress-indicator,.art-video-player.art-lock .art-bottom .art-progress-indicator{display:none!important}.art-video-player.art-control-show .art-layer-lock{display:flex}.art-control-selector{position:relative}.art-control-selector .art-selector-list{text-align:center;border-radius:var(--art-border-radius);opacity:0;pointer-events:none;bottom:var(--art-control-height);max-height:var(--art-selector-max-height);background-color:var(--art-widget-background);transition:all var(--art-transition-duration)ease;flex-direction:column;align-items:center;display:flex;position:absolute;overflow:hidden auto;transform:translateY(10px)}.art-control-selector .art-selector-list .art-selector-item{width:100%;flex-shrink:0;justify-content:center;align-items:center;padding:10px 15px;line-height:1;display:flex}.art-control-selector .art-selector-list .art-selector-item:hover{background-color:#ffffff1a}.art-control-selector .art-selector-list .art-selector-item:hover,.art-control-selector .art-selector-list .art-selector-item.art-current{color:var(--art-theme)}.art-control-selector:hover .art-selector-list{opacity:1;pointer-events:auto;transform:translateY(0)}[class*=hint--]{font-style:normal;display:inline-block;position:relative}[class*=hint--]:before,[class*=hint--]:after{visibility:hidden;opacity:0;z-index:1000000;pointer-events:none;transition:all .3s;position:absolute;transform:translate(0,0)}[class*=hint--]:hover:before,[class*=hint--]:hover:after{visibility:visible;opacity:1;transition-delay:.1s}[class*=hint--]:before{content:"";z-index:1000001;background:0 0;border:6px solid #0000;position:absolute}[class*=hint--]:after{color:#fff;white-space:nowrap;background:#000;padding:8px 10px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:12px}[class*=hint--][aria-label]:after{content:attr(aria-label)}[class*=hint--][data-hint]:after{content:attr(data-hint)}[aria-label=""]:before,[aria-label=""]:after,[data-hint=""]:before,[data-hint=""]:after{display:none!important}.hint--top-left:before,.hint--top-right:before,.hint--top:before{border-top-color:#000}.hint--bottom-left:before,.hint--bottom-right:before,.hint--bottom:before{border-bottom-color:#000}.hint--left:before{border-left-color:#000}.hint--right:before{border-right-color:#000}.hint--top:before{margin-bottom:-11px}.hint--top:before,.hint--top:after{bottom:100%;left:50%}.hint--top:before{left:calc(50% - 6px)}.hint--top:after{transform:translate(-50%)}.hint--top:hover:before{transform:translateY(-8px)}.hint--top:hover:after{transform:translate(-50%)translateY(-8px)}.hint--bottom:before{margin-top:-11px}.hint--bottom:before,.hint--bottom:after{top:100%;left:50%}.hint--bottom:before{left:calc(50% - 6px)}.hint--bottom:after{transform:translate(-50%)}.hint--bottom:hover:before{transform:translateY(8px)}.hint--bottom:hover:after{transform:translate(-50%)translateY(8px)}.hint--right:before{margin-bottom:-6px;margin-left:-11px}.hint--right:after{margin-bottom:-14px}.hint--right:before,.hint--right:after{bottom:50%;left:100%}.hint--right:hover:before,.hint--right:hover:after{transform:translate(8px)}.hint--left:before{margin-bottom:-6px;margin-right:-11px}.hint--left:after{margin-bottom:-14px}.hint--left:before,.hint--left:after{bottom:50%;right:100%}.hint--left:hover:before,.hint--left:hover:after{transform:translate(-8px)}.hint--top-left:before{margin-bottom:-11px}.hint--top-left:before,.hint--top-left:after{bottom:100%;left:50%}.hint--top-left:before{left:calc(50% - 6px)}.hint--top-left:after{margin-left:12px;transform:translate(-100%)}.hint--top-left:hover:before{transform:translateY(-8px)}.hint--top-left:hover:after{transform:translate(-100%)translateY(-8px)}.hint--top-right:before{margin-bottom:-11px}.hint--top-right:before,.hint--top-right:after{bottom:100%;left:50%}.hint--top-right:before{left:calc(50% - 6px)}.hint--top-right:after{margin-left:-12px;transform:translate(0)}.hint--top-right:hover:before,.hint--top-right:hover:after{transform:translateY(-8px)}.hint--bottom-left:before{margin-top:-11px}.hint--bottom-left:before,.hint--bottom-left:after{top:100%;left:50%}.hint--bottom-left:before{left:calc(50% - 6px)}.hint--bottom-left:after{margin-left:12px;transform:translate(-100%)}.hint--bottom-left:hover:before{transform:translateY(8px)}.hint--bottom-left:hover:after{transform:translate(-100%)translateY(8px)}.hint--bottom-right:before{margin-top:-11px}.hint--bottom-right:before,.hint--bottom-right:after{top:100%;left:50%}.hint--bottom-right:before{left:calc(50% - 6px)}.hint--bottom-right:after{margin-left:-12px;transform:translate(0)}.hint--bottom-right:hover:before,.hint--bottom-right:hover:after{transform:translateY(8px)}.hint--small:after,.hint--medium:after,.hint--large:after{white-space:normal;word-wrap:break-word;line-height:1.4em}.hint--small:after{width:80px}.hint--medium:after{width:150px}.hint--large:after{width:300px}[class*=hint--]:after{text-shadow:0 -1px #000;box-shadow:4px 4px 8px #0000004d}.hint--error:after{text-shadow:0 -1px #592726;background-color:#b34e4d}.hint--error.hint--top-left:before,.hint--error.hint--top-right:before,.hint--error.hint--top:before{border-top-color:#b34e4d}.hint--error.hint--bottom-left:before,.hint--error.hint--bottom-right:before,.hint--error.hint--bottom:before{border-bottom-color:#b34e4d}.hint--error.hint--left:before{border-left-color:#b34e4d}.hint--error.hint--right:before{border-right-color:#b34e4d}.hint--warning:after{text-shadow:0 -1px #6c5328;background-color:#c09854}.hint--warning.hint--top-left:before,.hint--warning.hint--top-right:before,.hint--warning.hint--top:before{border-top-color:#c09854}.hint--warning.hint--bottom-left:before,.hint--warning.hint--bottom-right:before,.hint--warning.hint--bottom:before{border-bottom-color:#c09854}.hint--warning.hint--left:before{border-left-color:#c09854}.hint--warning.hint--right:before{border-right-color:#c09854}.hint--info:after{text-shadow:0 -1px #1a3c4d;background-color:#3986ac}.hint--info.hint--top-left:before,.hint--info.hint--top-right:before,.hint--info.hint--top:before{border-top-color:#3986ac}.hint--info.hint--bottom-left:before,.hint--info.hint--bottom-right:before,.hint--info.hint--bottom:before{border-bottom-color:#3986ac}.hint--info.hint--left:before{border-left-color:#3986ac}.hint--info.hint--right:before{border-right-color:#3986ac}.hint--success:after{text-shadow:0 -1px #1a321a;background-color:#458746}.hint--success.hint--top-left:before,.hint--success.hint--top-right:before,.hint--success.hint--top:before{border-top-color:#458746}.hint--success.hint--bottom-left:before,.hint--success.hint--bottom-right:before,.hint--success.hint--bottom:before{border-bottom-color:#458746}.hint--success.hint--left:before{border-left-color:#458746}.hint--success.hint--right:before{border-right-color:#458746}.hint--always:after,.hint--always:before{opacity:1;visibility:visible}.hint--always.hint--top:before{transform:translateY(-8px)}.hint--always.hint--top:after{transform:translate(-50%)translateY(-8px)}.hint--always.hint--top-left:before{transform:translateY(-8px)}.hint--always.hint--top-left:after{transform:translate(-100%)translateY(-8px)}.hint--always.hint--top-right:before,.hint--always.hint--top-right:after{transform:translateY(-8px)}.hint--always.hint--bottom:before{transform:translateY(8px)}.hint--always.hint--bottom:after{transform:translate(-50%)translateY(8px)}.hint--always.hint--bottom-left:before{transform:translateY(8px)}.hint--always.hint--bottom-left:after{transform:translate(-100%)translateY(8px)}.hint--always.hint--bottom-right:before,.hint--always.hint--bottom-right:after{transform:translateY(8px)}.hint--always.hint--left:before,.hint--always.hint--left:after{transform:translate(-8px)}.hint--always.hint--right:before,.hint--always.hint--right:after{transform:translate(8px)}.hint--rounded:after{border-radius:4px}.hint--no-animate:before,.hint--no-animate:after{transition-duration:0s}.hint--bounce:before,.hint--bounce:after{-webkit-transition:opacity .3s,visibility .3s,-webkit-transform .3s cubic-bezier(.71,1.7,.77,1.24);-moz-transition:opacity .3s,visibility .3s,-moz-transform .3s cubic-bezier(.71,1.7,.77,1.24);transition:opacity .3s,visibility .3s,transform .3s cubic-bezier(.71,1.7,.77,1.24)}.hint--no-shadow:before,.hint--no-shadow:after{text-shadow:initial;box-shadow:initial}.hint--no-arrow:before{display:none}.art-video-player.art-mobile{--art-bottom-gap:10px;--art-control-height:38px;--art-control-icon-scale:1;--art-state-size:60px;--art-settings-max-height:180px;--art-selector-max-height:180px;--art-indicator-scale:1;--art-control-opacity:1}.art-video-player.art-mobile .art-controls-left{margin-left:calc(var(--art-padding)/-1)}.art-video-player.art-mobile .art-controls-right{margin-right:calc(var(--art-padding)/-1)}';
    }, {}], bAWi2: [function(t, e, r) {
      e.exports = function() {
        "use strict";
        function t2(e3) {
          return (t2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(e3);
        }
        var e2 = Object.prototype.toString, r2 = function(r3) {
          if (void 0 === r3)
            return "undefined";
          if (null === r3)
            return "null";
          var o2 = t2(r3);
          if ("boolean" === o2)
            return "boolean";
          if ("string" === o2)
            return "string";
          if ("number" === o2)
            return "number";
          if ("symbol" === o2)
            return "symbol";
          if ("function" === o2)
            return function(t3) {
              return "GeneratorFunction" === a(t3);
            }(r3) ? "generatorfunction" : "function";
          if (function(t3) {
            return Array.isArray ? Array.isArray(t3) : t3 instanceof Array;
          }(r3))
            return "array";
          if (function(t3) {
            return !(!t3.constructor || "function" != typeof t3.constructor.isBuffer) && t3.constructor.isBuffer(t3);
          }(r3))
            return "buffer";
          if (function(t3) {
            try {
              if ("number" == typeof t3.length && "function" == typeof t3.callee)
                return true;
            } catch (t4) {
              if (-1 !== t4.message.indexOf("callee"))
                return true;
            }
            return false;
          }(r3))
            return "arguments";
          if (function(t3) {
            return t3 instanceof Date || "function" == typeof t3.toDateString && "function" == typeof t3.getDate && "function" == typeof t3.setDate;
          }(r3))
            return "date";
          if (function(t3) {
            return t3 instanceof Error || "string" == typeof t3.message && t3.constructor && "number" == typeof t3.constructor.stackTraceLimit;
          }(r3))
            return "error";
          if (function(t3) {
            return t3 instanceof RegExp || "string" == typeof t3.flags && "boolean" == typeof t3.ignoreCase && "boolean" == typeof t3.multiline && "boolean" == typeof t3.global;
          }(r3))
            return "regexp";
          switch (a(r3)) {
            case "Symbol":
              return "symbol";
            case "Promise":
              return "promise";
            case "WeakMap":
              return "weakmap";
            case "WeakSet":
              return "weakset";
            case "Map":
              return "map";
            case "Set":
              return "set";
            case "Int8Array":
              return "int8array";
            case "Uint8Array":
              return "uint8array";
            case "Uint8ClampedArray":
              return "uint8clampedarray";
            case "Int16Array":
              return "int16array";
            case "Uint16Array":
              return "uint16array";
            case "Int32Array":
              return "int32array";
            case "Uint32Array":
              return "uint32array";
            case "Float32Array":
              return "float32array";
            case "Float64Array":
              return "float64array";
          }
          if (function(t3) {
            return "function" == typeof t3.throw && "function" == typeof t3.return && "function" == typeof t3.next;
          }(r3))
            return "generator";
          switch (o2 = e2.call(r3)) {
            case "[object Object]":
              return "object";
            case "[object Map Iterator]":
              return "mapiterator";
            case "[object Set Iterator]":
              return "setiterator";
            case "[object String Iterator]":
              return "stringiterator";
            case "[object Array Iterator]":
              return "arrayiterator";
          }
          return o2.slice(8, -1).toLowerCase().replace(/\s/g, "");
        };
        function a(t3) {
          return t3.constructor ? t3.constructor.name : null;
        }
        function o(t3, e3) {
          var a2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ["option"];
          return n(t3, e3, a2), i(t3, e3, a2), function(t4, e4, a3) {
            var s = r2(e4), l = r2(t4);
            if ("object" === s) {
              if ("object" !== l)
                throw new Error("[Type Error]: '".concat(a3.join("."), "' require 'object' type, but got '").concat(l, "'"));
              Object.keys(e4).forEach(function(r3) {
                var s2 = t4[r3], l2 = e4[r3], c = a3.slice();
                c.push(r3), n(s2, l2, c), i(s2, l2, c), o(s2, l2, c);
              });
            }
            if ("array" === s) {
              if ("array" !== l)
                throw new Error("[Type Error]: '".concat(a3.join("."), "' require 'array' type, but got '").concat(l, "'"));
              t4.forEach(function(r3, s2) {
                var l2 = t4[s2], c = e4[s2] || e4[0], u = a3.slice();
                u.push(s2), n(l2, c, u), i(l2, c, u), o(l2, c, u);
              });
            }
          }(t3, e3, a2), t3;
        }
        function n(t3, e3, a2) {
          if ("string" === r2(e3)) {
            var o2 = r2(t3);
            if ("?" === e3[0] && (e3 = e3.slice(1) + "|undefined"), !(-1 < e3.indexOf("|") ? e3.split("|").map(function(t4) {
              return t4.toLowerCase().trim();
            }).filter(Boolean).some(function(t4) {
              return o2 === t4;
            }) : e3.toLowerCase().trim() === o2))
              throw new Error("[Type Error]: '".concat(a2.join("."), "' require '").concat(e3, "' type, but got '").concat(o2, "'"));
          }
        }
        function i(t3, e3, a2) {
          if ("function" === r2(e3)) {
            var o2 = e3(t3, r2(t3), a2);
            if (true !== o2) {
              var n2 = r2(o2);
              throw "string" === n2 ? new Error(o2) : "error" === n2 ? o2 : new Error("[Validator Error]: The scheme for '".concat(a2.join("."), "' validator require return true, but got '").concat(o2, "'"));
            }
          }
        }
        return o.kindOf = r2, o;
      }();
    }, {}], "2bGVu": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      r.default = class {
        on(t2, e2, r2) {
          const a = this.e || (this.e = {});
          return (a[t2] || (a[t2] = [])).push({ fn: e2, ctx: r2 }), this;
        }
        once(t2, e2, r2) {
          const a = this;
          function o(...n) {
            a.off(t2, o), e2.apply(r2, n);
          }
          return o._ = e2, this.on(t2, o, r2);
        }
        emit(t2, ...e2) {
          const r2 = ((this.e || (this.e = {}))[t2] || []).slice();
          for (let t3 = 0; t3 < r2.length; t3 += 1)
            r2[t3].fn.apply(r2[t3].ctx, e2);
          return this;
        }
        off(t2, e2) {
          const r2 = this.e || (this.e = {}), a = r2[t2], o = [];
          if (a && e2)
            for (let t3 = 0, r3 = a.length; t3 < r3; t3 += 1)
              a[t3].fn !== e2 && a[t3].fn._ !== e2 && o.push(a[t3]);
          return o.length ? r2[t2] = o : delete r2[t2], this;
        }
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], guZOB: [function(t, e, r) {
      r.interopDefault = function(t2) {
        return t2 && t2.__esModule ? t2 : { default: t2 };
      }, r.defineInteropFlag = function(t2) {
        Object.defineProperty(t2, "__esModule", { value: true });
      }, r.exportAll = function(t2, e2) {
        return Object.keys(t2).forEach(function(r2) {
          "default" === r2 || "__esModule" === r2 || e2.hasOwnProperty(r2) || Object.defineProperty(e2, r2, { enumerable: true, get: function() {
            return t2[r2];
          } });
        }), e2;
      }, r.export = function(t2, e2, r2) {
        Object.defineProperty(t2, e2, { enumerable: true, get: r2 });
      };
    }, {}], h3rH9: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("./dom");
      a.exportAll(o, r);
      var n = t("./error");
      a.exportAll(n, r);
      var i = t("./subtitle");
      a.exportAll(i, r);
      var s = t("./file");
      a.exportAll(s, r);
      var l = t("./property");
      a.exportAll(l, r);
      var c = t("./time");
      a.exportAll(c, r);
      var u = t("./format");
      a.exportAll(u, r);
      var p = t("./compatibility");
      a.exportAll(p, r);
    }, { "./dom": "XgAQE", "./error": "2nFlF", "./subtitle": "yqFoT", "./file": "1VRQn", "./property": "3weX2", "./time": "7kBIx", "./format": "13atT", "./compatibility": "luXC1", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], XgAQE: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r), a.export(r, "query", () => n), a.export(r, "queryAll", () => i), a.export(r, "addClass", () => s), a.export(r, "removeClass", () => l), a.export(r, "hasClass", () => c), a.export(r, "append", () => u), a.export(r, "remove", () => p), a.export(r, "setStyle", () => d), a.export(r, "setStyles", () => f), a.export(r, "getStyle", () => h), a.export(r, "sublings", () => m), a.export(r, "inverseClass", () => g), a.export(r, "tooltip", () => v), a.export(r, "isInViewport", () => y), a.export(r, "includeFromEvent", () => b), a.export(r, "replaceElement", () => x), a.export(r, "createElement", () => w), a.export(r, "getIcon", () => j), a.export(r, "setStyleText", () => k);
      var o = t("./compatibility");
      function n(t2, e2 = document) {
        return e2.querySelector(t2);
      }
      function i(t2, e2 = document) {
        return Array.from(e2.querySelectorAll(t2));
      }
      function s(t2, e2) {
        return t2.classList.add(e2);
      }
      function l(t2, e2) {
        return t2.classList.remove(e2);
      }
      function c(t2, e2) {
        return t2.classList.contains(e2);
      }
      function u(t2, e2) {
        return e2 instanceof Element ? t2.appendChild(e2) : t2.insertAdjacentHTML("beforeend", String(e2)), t2.lastElementChild || t2.lastChild;
      }
      function p(t2) {
        return t2.parentNode.removeChild(t2);
      }
      function d(t2, e2, r2) {
        return t2.style[e2] = r2, t2;
      }
      function f(t2, e2) {
        for (const r2 in e2)
          d(t2, r2, e2[r2]);
        return t2;
      }
      function h(t2, e2, r2 = true) {
        const a2 = window.getComputedStyle(t2, null).getPropertyValue(e2);
        return r2 ? parseFloat(a2) : a2;
      }
      function m(t2) {
        return Array.from(t2.parentElement.children).filter((e2) => e2 !== t2);
      }
      function g(t2, e2) {
        m(t2).forEach((t3) => l(t3, e2)), s(t2, e2);
      }
      function v(t2, e2, r2 = "top") {
        o.isMobile || (t2.setAttribute("aria-label", e2), s(t2, "hint--rounded"), s(t2, `hint--${r2}`));
      }
      function y(t2, e2 = 0) {
        const r2 = t2.getBoundingClientRect(), a2 = window.innerHeight || document.documentElement.clientHeight, o2 = window.innerWidth || document.documentElement.clientWidth, n2 = r2.top - e2 <= a2 && r2.top + r2.height + e2 >= 0, i2 = r2.left - e2 <= o2 + e2 && r2.left + r2.width + e2 >= 0;
        return n2 && i2;
      }
      function b(t2, e2) {
        return t2.composedPath && t2.composedPath().indexOf(e2) > -1;
      }
      function x(t2, e2) {
        return e2.parentNode.replaceChild(t2, e2), t2;
      }
      function w(t2) {
        return document.createElement(t2);
      }
      function j(t2 = "", e2 = "") {
        const r2 = w("i");
        return s(r2, "art-icon"), s(r2, `art-icon-${t2}`), u(r2, e2), r2;
      }
      function k(t2, e2) {
        const r2 = document.getElementById(t2);
        if (r2)
          r2.textContent = e2;
        else {
          const r3 = w("style");
          r3.id = t2, r3.textContent = e2, document.head.appendChild(r3);
        }
      }
    }, { "./compatibility": "luXC1", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], luXC1: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r), a.export(r, "userAgent", () => o), a.export(r, "isSafari", () => n), a.export(r, "isWechat", () => i), a.export(r, "isIE", () => s), a.export(r, "isAndroid", () => l), a.export(r, "isIOS", () => c), a.export(r, "isIOS13", () => u), a.export(r, "isMobile", () => p), a.export(r, "isBrowser", () => d);
      const o = "undefined" != typeof navigator ? navigator.userAgent : "", n = /^((?!chrome|android).)*safari/i.test(o), i = /MicroMessenger/i.test(o), s = /MSIE|Trident/i.test(o), l = /android/i.test(o), c = /iPad|iPhone|iPod/i.test(o) && !window.MSStream, u = c || o.includes("Macintosh") && navigator.maxTouchPoints >= 1, p = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(o) || u, d = "undefined" != typeof window;
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2nFlF": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r), a.export(r, "ArtPlayerError", () => o), a.export(r, "errorHandle", () => n);
      class o extends Error {
        constructor(t2, e2) {
          super(t2), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e2 || this.constructor), this.name = "ArtPlayerError";
        }
      }
      function n(t2, e2) {
        if (!t2)
          throw new o(e2);
        return t2;
      }
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], yqFoT: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      function o(t2) {
        return "WEBVTT \r\n\r\n".concat((e2 = t2, e2.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g, (t3, e3, r2) => {
          let a2 = r2.slice(0, 3);
          return 1 === r2.length && (a2 = r2 + "00"), 2 === r2.length && (a2 = r2 + "0"), `${e3},${a2}`;
        })).replace(/\{\\([ibu])\}/g, "</$1>").replace(/\{\\([ibu])1\}/g, "<$1>").replace(/\{([ibu])\}/g, "<$1>").replace(/\{\/([ibu])\}/g, "</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2").replace(/{[\s\S]*?}/g, "").concat("\r\n\r\n"));
        var e2;
      }
      function n(t2) {
        return URL.createObjectURL(new Blob([t2], { type: "text/vtt" }));
      }
      function i(t2) {
        const e2 = new RegExp("Dialogue:\\s\\d,(\\d+:\\d\\d:\\d\\d.\\d\\d),(\\d+:\\d\\d:\\d\\d.\\d\\d),([^,]*),([^,]*),(?:[^,]*,){4}([\\s\\S]*)$", "i");
        function r2(t3 = "") {
          return t3.split(/[:.]/).map((t4, e3, r3) => {
            if (e3 === r3.length - 1) {
              if (1 === t4.length)
                return `.${t4}00`;
              if (2 === t4.length)
                return `.${t4}0`;
            } else if (1 === t4.length)
              return (0 === e3 ? "0" : ":0") + t4;
            return 0 === e3 ? t4 : e3 === r3.length - 1 ? `.${t4}` : `:${t4}`;
          }).join("");
        }
        return `WEBVTT

${t2.split(/\r?\n/).map((t3) => {
          const a2 = t3.match(e2);
          return a2 ? { start: r2(a2[1].trim()), end: r2(a2[2].trim()), text: a2[5].replace(/{[\s\S]*?}/g, "").replace(/(\\N)/g, "\n").trim().split(/\r?\n/).map((t4) => t4.trim()).join("\n") } : null;
        }).filter((t3) => t3).map((t3, e3) => t3 ? `${e3 + 1}
${t3.start} --> ${t3.end}
${t3.text}` : "").filter((t3) => t3.trim()).join("\n\n")}`;
      }
      a.defineInteropFlag(r), a.export(r, "srtToVtt", () => o), a.export(r, "vttToBlob", () => n), a.export(r, "assToVtt", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "1VRQn": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      function o(t2) {
        return t2.includes("?") ? o(t2.split("?")[0]) : t2.includes("#") ? o(t2.split("#")[0]) : t2.trim().toLowerCase().split(".").pop();
      }
      function n(t2, e2) {
        const r2 = document.createElement("a");
        r2.style.display = "none", r2.href = t2, r2.download = e2, document.body.appendChild(r2), r2.click(), document.body.removeChild(r2);
      }
      a.defineInteropFlag(r), a.export(r, "getExt", () => o), a.export(r, "download", () => n);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "3weX2": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r), a.export(r, "def", () => o), a.export(r, "has", () => i), a.export(r, "get", () => s), a.export(r, "mergeDeep", () => l);
      const o = Object.defineProperty, { hasOwnProperty: n } = Object.prototype;
      function i(t2, e2) {
        return n.call(t2, e2);
      }
      function s(t2, e2) {
        return Object.getOwnPropertyDescriptor(t2, e2);
      }
      function l(...t2) {
        const e2 = (t3) => t3 && "object" == typeof t3 && !Array.isArray(t3);
        return t2.reduce((t3, r2) => (Object.keys(r2).forEach((a2) => {
          const o2 = t3[a2], n2 = r2[a2];
          Array.isArray(o2) && Array.isArray(n2) ? t3[a2] = o2.concat(...n2) : e2(o2) && e2(n2) ? t3[a2] = l(o2, n2) : t3[a2] = n2;
        }), t3), {});
      }
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7kBIx": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      function o(t2 = 0) {
        return new Promise((e2) => setTimeout(e2, t2));
      }
      function n(t2, e2) {
        let r2;
        return function(...a2) {
          clearTimeout(r2), r2 = setTimeout(() => (r2 = null, t2.apply(this, a2)), e2);
        };
      }
      function i(t2, e2) {
        let r2 = false;
        return function(...a2) {
          r2 || (t2.apply(this, a2), r2 = true, setTimeout(function() {
            r2 = false;
          }, e2));
        };
      }
      a.defineInteropFlag(r), a.export(r, "sleep", () => o), a.export(r, "debounce", () => n), a.export(r, "throttle", () => i);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "13atT": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      function o(t2, e2, r2) {
        return Math.max(Math.min(t2, Math.max(e2, r2)), Math.min(e2, r2));
      }
      function n(t2) {
        return t2.charAt(0).toUpperCase() + t2.slice(1);
      }
      function i(t2) {
        return ["string", "number"].includes(typeof t2);
      }
      function s(t2) {
        if (!t2)
          return "00:00";
        const e2 = Math.floor(t2 / 3600), r2 = Math.floor((t2 - 3600 * e2) / 60), a2 = Math.floor(t2 - 3600 * e2 - 60 * r2);
        return (e2 > 0 ? [e2, r2, a2] : [r2, a2]).map((t3) => t3 < 10 ? `0${t3}` : String(t3)).join(":");
      }
      function l(t2) {
        return t2.replace(/[&<>'"]/g, (t3) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[t3] || t3);
      }
      function c(t2) {
        const e2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&#39;": "'", "&quot;": '"' }, r2 = new RegExp(`(${Object.keys(e2).join("|")})`, "g");
        return t2.replace(r2, (t3) => e2[t3] || t3);
      }
      a.defineInteropFlag(r), a.export(r, "clamp", () => o), a.export(r, "capitalize", () => n), a.export(r, "isStringOrNumber", () => i), a.export(r, "secondToTime", () => s), a.export(r, "escape", () => l), a.export(r, "unescape", () => c);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], AdvwB: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r), a.export(r, "ComponentOption", () => d);
      var o = t("../utils");
      const n = "array", i = "boolean", s = "string", l = "number", c = "object", u = "function";
      function p(t2, e2, r2) {
        return (0, o.errorHandle)(e2 === s || e2 === l || t2 instanceof Element, `${r2.join(".")} require '${s}' or 'Element' type`);
      }
      const d = { html: p, disable: `?${i}`, name: `?${s}`, index: `?${l}`, style: `?${c}`, click: `?${u}`, mounted: `?${u}`, tooltip: `?${s}|${l}`, width: `?${l}`, selector: `?${n}`, onSelect: `?${u}`, switch: `?${i}`, onSwitch: `?${u}`, range: `?${n}`, onRange: `?${u}`, onChange: `?${u}` };
      r.default = { id: s, container: p, url: s, poster: s, type: s, theme: s, lang: s, volume: l, isLive: i, muted: i, autoplay: i, autoSize: i, autoMini: i, loop: i, flip: i, playbackRate: i, aspectRatio: i, screenshot: i, setting: i, hotkey: i, pip: i, mutex: i, backdrop: i, fullscreen: i, fullscreenWeb: i, subtitleOffset: i, miniProgressBar: i, useSSR: i, playsInline: i, lock: i, fastForward: i, autoPlayback: i, autoOrientation: i, airplay: i, plugins: [u], layers: [d], contextmenu: [d], settings: [d], controls: [{ ...d, position: (t2, e2, r2) => {
        const a2 = ["top", "left", "right"];
        return (0, o.errorHandle)(a2.includes(t2), `${r2.join(".")} only accept ${a2.toString()} as parameters`);
      } }], quality: [{ default: `?${i}`, html: s, url: s }], highlight: [{ time: l, text: s }], thumbnails: { url: s, number: l, column: l, width: l, height: l }, subtitle: { url: s, name: s, type: s, style: c, escape: i, encoding: s, onVttLoad: u }, moreVideoAttr: c, i18n: c, icons: c, cssVar: c, customType: c };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9Xmqu": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = { propertys: ["audioTracks", "autoplay", "buffered", "controller", "controls", "crossOrigin", "currentSrc", "currentTime", "defaultMuted", "defaultPlaybackRate", "duration", "ended", "error", "loop", "mediaGroup", "muted", "networkState", "paused", "playbackRate", "played", "preload", "readyState", "seekable", "seeking", "src", "startDate", "textTracks", "videoTracks", "volume"], methods: ["addTextTrack", "canPlayType", "load", "play", "pause"], events: ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], prototypes: ["width", "height", "videoWidth", "videoHeight", "poster", "webkitDecodedFrameCount", "webkitDroppedFrameCount", "playsInline", "webkitSupportsFullscreen", "webkitDisplayingFullscreen", "onenterpictureinpicture", "onleavepictureinpicture", "disablePictureInPicture", "cancelVideoFrameCallback", "requestVideoFrameCallback", "getVideoPlaybackQuality", "requestPictureInPicture", "webkitEnterFullScreen", "webkitEnterFullscreen", "webkitExitFullScreen", "webkitExitFullscreen"] };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2gKYH": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("./utils");
      class o {
        constructor(t2) {
          this.art = t2;
          const { option: e2, constructor: r2 } = t2;
          e2.container instanceof Element ? this.$container = e2.container : (this.$container = (0, a.query)(e2.container), (0, a.errorHandle)(this.$container, `No container element found by ${e2.container}`));
          const o2 = this.$container.tagName.toLowerCase();
          (0, a.errorHandle)("div" === o2, `Unsupported container element type, only support 'div' but got '${o2}'`), (0, a.errorHandle)(r2.instances.every((t3) => t3.template.$container !== this.$container), "Cannot mount multiple instances on the same dom element"), this.query = this.query.bind(this), this.$container.dataset.artId = t2.id, this.init();
        }
        static get html() {
          return '<div class="art-video-player art-subtitle-show art-layer-show art-control-show art-mask-show"><video class="art-video"><track default kind="metadata" src=""></track></video><div class="art-poster"></div><div class="art-subtitle"></div><div class="art-danmuku"></div><div class="art-layers"></div><div class="art-mask"><div class="art-state"></div></div><div class="art-bottom"><div class="art-progress"></div><div class="art-controls"><div class="art-controls-left"></div><div class="art-controls-center"></div><div class="art-controls-right"></div></div></div><div class="art-loading"></div><div class="art-notice"><div class="art-notice-inner"></div></div><div class="art-settings"></div><div class="art-info"><div class="art-info-panel"><div class="art-info-item"><div class="art-info-title">Player version:</div><div class="art-info-content">5.1.1</div></div><div class="art-info-item"><div class="art-info-title">Video url:</div><div class="art-info-content" data-video="src"></div></div><div class="art-info-item"><div class="art-info-title">Video volume:</div><div class="art-info-content" data-video="volume"></div></div><div class="art-info-item"><div class="art-info-title">Video time:</div><div class="art-info-content" data-video="currentTime"></div></div><div class="art-info-item"><div class="art-info-title">Video duration:</div><div class="art-info-content" data-video="duration"></div></div><div class="art-info-item"><div class="art-info-title">Video resolution:</div><div class="art-info-content"><span data-video="videoWidth"></span> x <span data-video="videoHeight"></span></div></div></div><div class="art-info-close">[x]</div></div><div class="art-contextmenus"></div></div>';
        }
        query(t2) {
          return (0, a.query)(t2, this.$container);
        }
        init() {
          const { option: t2 } = this.art;
          t2.useSSR || (this.$container.innerHTML = o.html), this.$player = this.query(".art-video-player"), this.$video = this.query(".art-video"), this.$track = this.query("track"), this.$poster = this.query(".art-poster"), this.$subtitle = this.query(".art-subtitle"), this.$danmuku = this.query(".art-danmuku"), this.$bottom = this.query(".art-bottom"), this.$progress = this.query(".art-progress"), this.$controls = this.query(".art-controls"), this.$controlsLeft = this.query(".art-controls-left"), this.$controlsCenter = this.query(".art-controls-center"), this.$controlsRight = this.query(".art-controls-right"), this.$layer = this.query(".art-layers"), this.$loading = this.query(".art-loading"), this.$notice = this.query(".art-notice"), this.$noticeInner = this.query(".art-notice-inner"), this.$mask = this.query(".art-mask"), this.$state = this.query(".art-state"), this.$setting = this.query(".art-settings"), this.$info = this.query(".art-info"), this.$infoPanel = this.query(".art-info-panel"), this.$infoClose = this.query(".art-info-close"), this.$contextmenu = this.query(".art-contextmenus"), t2.backdrop && (0, a.addClass)(this.$player, "art-backdrop"), a.isMobile && (0, a.addClass)(this.$player, "art-mobile");
        }
        destroy(t2) {
          t2 ? this.$container.innerHTML = "" : (0, a.addClass)(this.$player, "art-destroy");
        }
      }
      r.default = o;
    }, { "./utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "1AdeF": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("../utils"), n = t("./zh-cn"), i = a.interopDefault(n);
      r.default = class {
        constructor(t2) {
          this.art = t2, this.languages = { "zh-cn": i.default }, this.language = {}, this.update(t2.option.i18n);
        }
        init() {
          const t2 = this.art.option.lang.toLowerCase();
          this.language = this.languages[t2] || {};
        }
        get(t2) {
          return this.language[t2] || t2;
        }
        update(t2) {
          this.languages = (0, o.mergeDeep)(this.languages, t2), this.init();
        }
      };
    }, { "../utils": "h3rH9", "./zh-cn": "3ZSKq", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "3ZSKq": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      const a = { "Video Info": "统计信息", Close: "关闭", "Video Load Failed": "加载失败", Volume: "音量", Play: "播放", Pause: "暂停", Rate: "速度", Mute: "静音", "Video Flip": "画面翻转", Horizontal: "水平", Vertical: "垂直", Reconnect: "重新连接", "Show Setting": "显示设置", "Hide Setting": "隐藏设置", Screenshot: "截图", "Play Speed": "播放速度", "Aspect Ratio": "画面比例", Default: "默认", Normal: "正常", Open: "打开", "Switch Video": "切换", "Switch Subtitle": "切换字幕", Fullscreen: "全屏", "Exit Fullscreen": "退出全屏", "Web Fullscreen": "网页全屏", "Exit Web Fullscreen": "退出网页全屏", "Mini Player": "迷你播放器", "PIP Mode": "开启画中画", "Exit PIP Mode": "退出画中画", "PIP Not Supported": "不支持画中画", "Fullscreen Not Supported": "不支持全屏", "Subtitle Offset": "字幕偏移", "Last Seen": "上次看到", "Jump Play": "跳转播放", AirPlay: "隔空播放", "AirPlay Not Available": "隔空播放不可用" };
      r.default = a, "undefined" != typeof window && (window["artplayer-i18n-zh-cn"] = a);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "556MW": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("./urlMix"), n = a.interopDefault(o), i = t("./attrMix"), s = a.interopDefault(i), l = t("./playMix"), c = a.interopDefault(l), u = t("./pauseMix"), p = a.interopDefault(u), d = t("./toggleMix"), f = a.interopDefault(d), h = t("./seekMix"), m = a.interopDefault(h), g = t("./volumeMix"), v = a.interopDefault(g), y = t("./currentTimeMix"), b = a.interopDefault(y), x = t("./durationMix"), w = a.interopDefault(x), j = t("./switchMix"), k = a.interopDefault(j), $ = t("./playbackRateMix"), S = a.interopDefault($), I = t("./aspectRatioMix"), T = a.interopDefault(I), E = t("./screenshotMix"), O = a.interopDefault(E), M = t("./fullscreenMix"), C = a.interopDefault(M), F = t("./fullscreenWebMix"), H = a.interopDefault(F), B = t("./pipMix"), D = a.interopDefault(B), A = t("./loadedMix"), R = a.interopDefault(A), z = t("./playedMix"), L = a.interopDefault(z), P = t("./playingMix"), N = a.interopDefault(P), _ = t("./autoSizeMix"), Z = a.interopDefault(_), q = t("./rectMix"), V = a.interopDefault(q), W = t("./flipMix"), U = a.interopDefault(W), Y = t("./miniMix"), K = a.interopDefault(Y), G = t("./posterMix"), X = a.interopDefault(G), J = t("./autoHeightMix"), Q = a.interopDefault(J), tt = t("./cssVarMix"), et = a.interopDefault(tt), rt = t("./themeMix"), at = a.interopDefault(rt), ot = t("./typeMix"), nt = a.interopDefault(ot), it = t("./stateMix"), st = a.interopDefault(it), lt = t("./subtitleOffsetMix"), ct = a.interopDefault(lt), ut = t("./airplayMix"), pt = a.interopDefault(ut), dt = t("./qualityMix"), ft = a.interopDefault(dt), ht = t("./optionInit"), mt = a.interopDefault(ht), gt = t("./eventInit"), vt = a.interopDefault(gt);
      r.default = class {
        constructor(t2) {
          (0, n.default)(t2), (0, s.default)(t2), (0, c.default)(t2), (0, p.default)(t2), (0, f.default)(t2), (0, m.default)(t2), (0, v.default)(t2), (0, b.default)(t2), (0, w.default)(t2), (0, k.default)(t2), (0, S.default)(t2), (0, T.default)(t2), (0, O.default)(t2), (0, C.default)(t2), (0, H.default)(t2), (0, D.default)(t2), (0, R.default)(t2), (0, L.default)(t2), (0, N.default)(t2), (0, Z.default)(t2), (0, V.default)(t2), (0, U.default)(t2), (0, K.default)(t2), (0, X.default)(t2), (0, Q.default)(t2), (0, et.default)(t2), (0, at.default)(t2), (0, nt.default)(t2), (0, st.default)(t2), (0, ct.default)(t2), (0, pt.default)(t2), (0, ft.default)(t2), (0, vt.default)(t2), (0, mt.default)(t2);
        }
      };
    }, { "./urlMix": "2mRAc", "./attrMix": "2EA19", "./playMix": "fD2Tc", "./pauseMix": "c3LGJ", "./toggleMix": "fVsAa", "./seekMix": "dmROF", "./volumeMix": "9jtfB", "./currentTimeMix": "7NCDR", "./durationMix": "YS7JL", "./switchMix": "dzUqN", "./playbackRateMix": "5I2mT", "./aspectRatioMix": "7m6R8", "./screenshotMix": "2dgtR", "./fullscreenMix": "fKDW8", "./fullscreenWebMix": "lNvYI", "./pipMix": "8j7oC", "./loadedMix": "dwVOT", "./playedMix": "dDeLx", "./playingMix": "ceoBp", "./autoSizeMix": "lcWXX", "./rectMix": "f7y88", "./flipMix": "l4qt5", "./miniMix": "9ZPBQ", "./posterMix": "5K8hA", "./autoHeightMix": "3T5ls", "./cssVarMix": "6KfHs", "./themeMix": "7lcSc", "./typeMix": "8JgTw", "./stateMix": "cebt1", "./subtitleOffsetMix": "hJvIy", "./airplayMix": "4Tp0U", "./qualityMix": "3wZgN", "./optionInit": "iPdgW", "./eventInit": "3mj0J", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2mRAc": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { option: e2, template: { $video: r2 } } = t2;
        (0, a.def)(t2, "url", { get: () => r2.src, async set(o) {
          if (o) {
            const n = t2.url, i = e2.type || (0, a.getExt)(o), s = e2.customType[i];
            i && s ? (await (0, a.sleep)(), t2.loading.show = true, s.call(t2, r2, o, t2)) : (URL.revokeObjectURL(n), r2.src = o), n !== t2.url && (t2.option.url = o, t2.isReady && n && t2.once("video:canplay", () => {
              t2.emit("restart", o);
            }));
          } else
            await (0, a.sleep)(), t2.loading.show = true;
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2EA19": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { template: { $video: e2 } } = t2;
        (0, a.def)(t2, "attr", { value(t3, r2) {
          if (void 0 === r2)
            return e2[t3];
          e2[t3] = r2;
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], fD2Tc: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { i18n: e2, notice: r2, option: o, constructor: { instances: n }, template: { $video: i } } = t2;
        (0, a.def)(t2, "play", { value: async function() {
          const a2 = await i.play();
          if (r2.show = e2.get("Play"), t2.emit("play"), o.mutex)
            for (let e3 = 0; e3 < n.length; e3++) {
              const r3 = n[e3];
              r3 !== t2 && r3.pause();
            }
          return a2;
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], c3LGJ: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { template: { $video: e2 }, i18n: r2, notice: o } = t2;
        (0, a.def)(t2, "pause", { value() {
          const a2 = e2.pause();
          return o.show = r2.get("Pause"), t2.emit("pause"), a2;
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], fVsAa: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        (0, a.def)(t2, "toggle", { value: () => t2.playing ? t2.pause() : t2.play() });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], dmROF: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { notice: e2 } = t2;
        (0, a.def)(t2, "seek", { set(r2) {
          t2.currentTime = r2, t2.emit("seek", t2.currentTime), t2.duration && (e2.show = `${(0, a.secondToTime)(t2.currentTime)} / ${(0, a.secondToTime)(t2.duration)}`);
        } }), (0, a.def)(t2, "forward", { set(e3) {
          t2.seek = t2.currentTime + e3;
        } }), (0, a.def)(t2, "backward", { set(e3) {
          t2.seek = t2.currentTime - e3;
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9jtfB": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { template: { $video: e2 }, i18n: r2, notice: o, storage: n } = t2;
        (0, a.def)(t2, "volume", { get: () => e2.volume || 0, set: (t3) => {
          e2.volume = (0, a.clamp)(t3, 0, 1), o.show = `${r2.get("Volume")}: ${parseInt(100 * e2.volume, 10)}`, 0 !== e2.volume && n.set("volume", e2.volume);
        } }), (0, a.def)(t2, "muted", { get: () => e2.muted, set: (r3) => {
          e2.muted = r3, t2.emit("muted", r3);
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7NCDR": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { $video: e2 } = t2.template;
        (0, a.def)(t2, "currentTime", { get: () => e2.currentTime || 0, set: (r2) => {
          r2 = parseFloat(r2), Number.isNaN(r2) || (e2.currentTime = (0, a.clamp)(r2, 0, t2.duration));
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], YS7JL: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        (0, a.def)(t2, "duration", { get: () => {
          const { duration: e2 } = t2.template.$video;
          return e2 === 1 / 0 ? 0 : e2 || 0;
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], dzUqN: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        function e2(e3, r2) {
          return new Promise((a2, o) => {
            if (e3 === t2.url)
              return;
            const { playing: n, aspectRatio: i, playbackRate: s } = t2;
            t2.pause(), t2.url = e3, t2.notice.show = "", t2.once("video:error", o), t2.once("video:canplay", async () => {
              t2.playbackRate = s, t2.aspectRatio = i, t2.currentTime = r2, n && await t2.play(), t2.notice.show = "", a2();
            });
          });
        }
        (0, a.def)(t2, "switchQuality", { value: (r2) => e2(r2, t2.currentTime) }), (0, a.def)(t2, "switchUrl", { value: (t3) => e2(t3, 0) }), (0, a.def)(t2, "switch", { set: t2.switchUrl });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "5I2mT": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { template: { $video: e2 }, i18n: r2, notice: o } = t2;
        (0, a.def)(t2, "playbackRate", { get: () => e2.playbackRate, set(a2) {
          if (a2) {
            if (a2 === e2.playbackRate)
              return;
            e2.playbackRate = a2, o.show = `${r2.get("Rate")}: ${1 === a2 ? r2.get("Normal") : `${a2}x`}`;
          } else
            t2.playbackRate = 1;
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7m6R8": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { i18n: e2, notice: r2, template: { $video: o, $player: n } } = t2;
        (0, a.def)(t2, "aspectRatio", { get: () => n.dataset.aspectRatio || "default", set(i) {
          if (i || (i = "default"), "default" === i)
            (0, a.setStyle)(o, "width", null), (0, a.setStyle)(o, "height", null), (0, a.setStyle)(o, "margin", null), delete n.dataset.aspectRatio;
          else {
            const t3 = i.split(":").map(Number), { clientWidth: e3, clientHeight: r3 } = n, s = e3 / r3, l = t3[0] / t3[1];
            s > l ? ((0, a.setStyle)(o, "width", l * r3 + "px"), (0, a.setStyle)(o, "height", "100%"), (0, a.setStyle)(o, "margin", "0 auto")) : ((0, a.setStyle)(o, "width", "100%"), (0, a.setStyle)(o, "height", e3 / l + "px"), (0, a.setStyle)(o, "margin", "auto 0")), n.dataset.aspectRatio = i;
          }
          r2.show = `${e2.get("Aspect Ratio")}: ${"default" === i ? e2.get("Default") : i}`, t2.emit("aspectRatio", i);
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2dgtR": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { notice: e2, template: { $video: r2 } } = t2, o = (0, a.createElement)("canvas");
        (0, a.def)(t2, "getDataURL", { value: () => new Promise((t3, a2) => {
          try {
            o.width = r2.videoWidth, o.height = r2.videoHeight, o.getContext("2d").drawImage(r2, 0, 0), t3(o.toDataURL("image/png"));
          } catch (t4) {
            e2.show = t4, a2(t4);
          }
        }) }), (0, a.def)(t2, "getBlobUrl", { value: () => new Promise((t3, a2) => {
          try {
            o.width = r2.videoWidth, o.height = r2.videoHeight, o.getContext("2d").drawImage(r2, 0, 0), o.toBlob((e3) => {
              t3(URL.createObjectURL(e3));
            });
          } catch (t4) {
            e2.show = t4, a2(t4);
          }
        }) }), (0, a.def)(t2, "screenshot", { value: async () => {
          const e3 = await t2.getDataURL();
          return (0, a.download)(e3, `artplayer_${(0, a.secondToTime)(r2.currentTime)}.png`), t2.emit("screenshot", e3), e3;
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], fKDW8: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("../libs/screenfull"), n = a.interopDefault(o), i = t("../utils");
      r.default = function(t2) {
        const { i18n: e2, notice: r2, template: { $video: a2, $player: o2 } } = t2;
        t2.once("video:loadedmetadata", () => {
          n.default.isEnabled ? ((t3) => {
            n.default.on("change", () => {
              t3.emit("fullscreen", n.default.isFullscreen);
            }), (0, i.def)(t3, "fullscreen", { get: () => n.default.isFullscreen, async set(e3) {
              e3 ? (t3.state = "fullscreen", await n.default.request(o2), (0, i.addClass)(o2, "art-fullscreen")) : (await n.default.exit(), (0, i.removeClass)(o2, "art-fullscreen")), t3.emit("resize");
            } });
          })(t2) : document.fullscreenEnabled || a2.webkitSupportsFullscreen ? ((t3) => {
            (0, i.def)(t3, "fullscreen", { get: () => a2.webkitDisplayingFullscreen, set(e3) {
              e3 ? (t3.state = "fullscreen", a2.webkitEnterFullscreen(), t3.emit("fullscreen", true)) : (a2.webkitExitFullscreen(), t3.emit("fullscreen", false)), t3.emit("resize");
            } });
          })(t2) : (0, i.def)(t2, "fullscreen", { get: () => false, set() {
            r2.show = e2.get("Fullscreen Not Supported");
          } }), (0, i.def)(t2, "fullscreen", (0, i.get)(t2, "fullscreen"));
        });
      };
    }, { "../libs/screenfull": "lUahW", "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], lUahW: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      const a = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], o = (() => {
        if ("undefined" == typeof document)
          return false;
        const t2 = a[0], e2 = {};
        for (const r2 of a) {
          if (r2[1] in document) {
            for (const [a2, o2] of r2.entries())
              e2[t2[a2]] = o2;
            return e2;
          }
        }
        return false;
      })(), n = { change: o.fullscreenchange, error: o.fullscreenerror };
      let i = { request: (t2 = document.documentElement, e2) => new Promise((r2, a2) => {
        const n2 = () => {
          i.off("change", n2), r2();
        };
        i.on("change", n2);
        const s = t2[o.requestFullscreen](e2);
        s instanceof Promise && s.then(n2).catch(a2);
      }), exit: () => new Promise((t2, e2) => {
        if (!i.isFullscreen)
          return void t2();
        const r2 = () => {
          i.off("change", r2), t2();
        };
        i.on("change", r2);
        const a2 = document[o.exitFullscreen]();
        a2 instanceof Promise && a2.then(r2).catch(e2);
      }), toggle: (t2, e2) => i.isFullscreen ? i.exit() : i.request(t2, e2), onchange(t2) {
        i.on("change", t2);
      }, onerror(t2) {
        i.on("error", t2);
      }, on(t2, e2) {
        const r2 = n[t2];
        r2 && document.addEventListener(r2, e2, false);
      }, off(t2, e2) {
        const r2 = n[t2];
        r2 && document.removeEventListener(r2, e2, false);
      }, raw: o };
      Object.defineProperties(i, { isFullscreen: { get: () => Boolean(document[o.fullscreenElement]) }, element: { enumerable: true, get: () => document[o.fullscreenElement] }, isEnabled: { enumerable: true, get: () => Boolean(document[o.fullscreenEnabled]) } }), o || (i = { isEnabled: false }), r.default = i;
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], lNvYI: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { constructor: e2, template: { $container: r2, $player: o } } = t2;
        let n = "";
        (0, a.def)(t2, "fullscreenWeb", { get: () => (0, a.hasClass)(o, "art-fullscreen-web"), set(i) {
          i ? (n = o.style.cssText, e2.FULLSCREEN_WEB_IN_BODY && (0, a.append)(document.body, o), t2.state = "fullscreenWeb", (0, a.setStyle)(o, "width", "100%"), (0, a.setStyle)(o, "height", "100%"), (0, a.addClass)(o, "art-fullscreen-web"), t2.emit("fullscreenWeb", true)) : (e2.FULLSCREEN_WEB_IN_BODY && (0, a.append)(r2, o), n && (o.style.cssText = n, n = ""), (0, a.removeClass)(o, "art-fullscreen-web"), t2.emit("fullscreenWeb", false)), t2.emit("resize");
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "8j7oC": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { i18n: e2, notice: r2, template: { $video: o } } = t2;
        document.pictureInPictureEnabled ? function(t3) {
          const { template: { $video: e3 }, proxy: r3, notice: o2 } = t3;
          e3.disablePictureInPicture = false, (0, a.def)(t3, "pip", { get: () => document.pictureInPictureElement, set(r4) {
            r4 ? (t3.state = "pip", e3.requestPictureInPicture().catch((t4) => {
              throw o2.show = t4, t4;
            })) : document.exitPictureInPicture().catch((t4) => {
              throw o2.show = t4, t4;
            });
          } }), r3(e3, "enterpictureinpicture", () => {
            t3.emit("pip", true);
          }), r3(e3, "leavepictureinpicture", () => {
            t3.emit("pip", false);
          });
        }(t2) : o.webkitSupportsPresentationMode ? function(t3) {
          const { $video: e3 } = t3.template;
          e3.webkitSetPresentationMode("inline"), (0, a.def)(t3, "pip", { get: () => "picture-in-picture" === e3.webkitPresentationMode, set(r3) {
            r3 ? (t3.state = "pip", e3.webkitSetPresentationMode("picture-in-picture"), t3.emit("pip", true)) : (e3.webkitSetPresentationMode("inline"), t3.emit("pip", false));
          } });
        }(t2) : (0, a.def)(t2, "pip", { get: () => false, set() {
          r2.show = e2.get("PIP Not Supported");
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], dwVOT: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { $video: e2 } = t2.template;
        (0, a.def)(t2, "loaded", { get: () => t2.loadedTime / e2.duration }), (0, a.def)(t2, "loadedTime", { get: () => e2.buffered.length ? e2.buffered.end(e2.buffered.length - 1) : 0 });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], dDeLx: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        (0, a.def)(t2, "played", { get: () => t2.currentTime / t2.duration });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], ceoBp: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { $video: e2 } = t2.template;
        (0, a.def)(t2, "playing", { get: () => !!(e2.currentTime > 0 && !e2.paused && !e2.ended && e2.readyState > 2) });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], lcWXX: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { $container: e2, $player: r2, $video: o } = t2.template;
        (0, a.def)(t2, "autoSize", { value() {
          const { videoWidth: n, videoHeight: i } = o, { width: s, height: l } = e2.getBoundingClientRect(), c = n / i;
          if (s / l > c) {
            const t3 = l * c / s * 100;
            (0, a.setStyle)(r2, "width", `${t3}%`), (0, a.setStyle)(r2, "height", "100%");
          } else {
            const t3 = s / c / l * 100;
            (0, a.setStyle)(r2, "width", "100%"), (0, a.setStyle)(r2, "height", `${t3}%`);
          }
          t2.emit("autoSize", { width: t2.width, height: t2.height });
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], f7y88: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        (0, a.def)(t2, "rect", { get: () => t2.template.$player.getBoundingClientRect() });
        const e2 = ["bottom", "height", "left", "right", "top", "width"];
        for (let r2 = 0; r2 < e2.length; r2++) {
          const o = e2[r2];
          (0, a.def)(t2, o, { get: () => t2.rect[o] });
        }
        (0, a.def)(t2, "x", { get: () => t2.left + window.pageXOffset }), (0, a.def)(t2, "y", { get: () => t2.top + window.pageYOffset });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], l4qt5: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { template: { $player: e2 }, i18n: r2, notice: o } = t2;
        (0, a.def)(t2, "flip", { get: () => e2.dataset.flip || "normal", set(n) {
          n || (n = "normal"), "normal" === n ? delete e2.dataset.flip : e2.dataset.flip = n, o.show = `${r2.get("Video Flip")}: ${r2.get((0, a.capitalize)(n))}`, t2.emit("flip", n);
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9ZPBQ": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { icons: e2, proxy: r2, storage: o, template: { $player: n, $video: i } } = t2;
        let s = false, l = 0, c = 0;
        function u() {
          const { $mini: e3 } = t2.template;
          e3 && ((0, a.removeClass)(n, "art-mini"), (0, a.setStyle)(e3, "display", "none"), n.prepend(i), t2.emit("mini", false));
        }
        function p(e3, r3) {
          t2.playing ? ((0, a.setStyle)(e3, "display", "none"), (0, a.setStyle)(r3, "display", "flex")) : ((0, a.setStyle)(e3, "display", "flex"), (0, a.setStyle)(r3, "display", "none"));
        }
        function d() {
          const { $mini: e3 } = t2.template, r3 = e3.getBoundingClientRect(), n2 = window.innerHeight - r3.height - 50, i2 = window.innerWidth - r3.width - 50;
          o.set("top", n2), o.set("left", i2), (0, a.setStyle)(e3, "top", `${n2}px`), (0, a.setStyle)(e3, "left", `${i2}px`);
        }
        (0, a.def)(t2, "mini", { get: () => (0, a.hasClass)(n, "art-mini"), set(f) {
          if (f) {
            t2.state = "mini", (0, a.addClass)(n, "art-mini");
            const f2 = function() {
              const { $mini: n2 } = t2.template;
              if (n2)
                return (0, a.append)(n2, i), (0, a.setStyle)(n2, "display", "flex");
              {
                const n3 = (0, a.createElement)("div");
                (0, a.addClass)(n3, "art-mini-popup"), (0, a.append)(document.body, n3), t2.template.$mini = n3, (0, a.append)(n3, i);
                const d2 = (0, a.append)(n3, '<div class="art-mini-close"></div>');
                (0, a.append)(d2, e2.close), r2(d2, "click", u);
                const f3 = (0, a.append)(n3, '<div class="art-mini-state"></div>'), h2 = (0, a.append)(f3, e2.play), m2 = (0, a.append)(f3, e2.pause);
                return r2(h2, "click", () => t2.play()), r2(m2, "click", () => t2.pause()), p(h2, m2), t2.on("video:playing", () => p(h2, m2)), t2.on("video:pause", () => p(h2, m2)), t2.on("video:timeupdate", () => p(h2, m2)), r2(n3, "mousedown", (t3) => {
                  s = 0 === t3.button, l = t3.pageX, c = t3.pageY;
                }), t2.on("document:mousemove", (t3) => {
                  if (s) {
                    (0, a.addClass)(n3, "art-mini-droging");
                    const e3 = t3.pageX - l, r3 = t3.pageY - c;
                    (0, a.setStyle)(n3, "transform", `translate(${e3}px, ${r3}px)`);
                  }
                }), t2.on("document:mouseup", () => {
                  if (s) {
                    s = false, (0, a.removeClass)(n3, "art-mini-droging");
                    const t3 = n3.getBoundingClientRect();
                    o.set("left", t3.left), o.set("top", t3.top), (0, a.setStyle)(n3, "left", `${t3.left}px`), (0, a.setStyle)(n3, "top", `${t3.top}px`), (0, a.setStyle)(n3, "transform", null);
                  }
                }), n3;
              }
            }(), h = o.get("top"), m = o.get("left");
            h && m ? ((0, a.setStyle)(f2, "top", `${h}px`), (0, a.setStyle)(f2, "left", `${m}px`), (0, a.isInViewport)(f2) || d()) : d(), t2.emit("mini", true);
          } else
            u();
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "5K8hA": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { template: { $poster: e2 } } = t2;
        (0, a.def)(t2, "poster", { get: () => {
          try {
            return e2.style.backgroundImage.match(/"(.*)"/)[1];
          } catch (t3) {
            return "";
          }
        }, set(t3) {
          (0, a.setStyle)(e2, "backgroundImage", `url(${t3})`);
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "3T5ls": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { template: { $container: e2, $video: r2 } } = t2;
        (0, a.def)(t2, "autoHeight", { value() {
          const { clientWidth: o } = e2, { videoHeight: n, videoWidth: i } = r2, s = n * (o / i);
          (0, a.setStyle)(e2, "height", s + "px"), t2.emit("autoHeight", s);
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "6KfHs": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { $player: e2 } = t2.template;
        (0, a.def)(t2, "cssVar", { value: (t3, r2) => r2 ? e2.style.setProperty(t3, r2) : getComputedStyle(e2).getPropertyValue(t3) });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7lcSc": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        (0, a.def)(t2, "theme", { get: () => t2.cssVar("--art-theme"), set(e2) {
          t2.cssVar("--art-theme", e2);
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "8JgTw": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        (0, a.def)(t2, "type", { get: () => t2.option.type, set(e2) {
          t2.option.type = e2;
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], cebt1: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const e2 = ["mini", "pip", "fullscreen", "fullscreenWeb"];
        (0, a.def)(t2, "state", { get: () => e2.find((e3) => t2[e3]) || "standard", set(r2) {
          for (let a2 = 0; a2 < e2.length; a2++) {
            const o = e2[a2];
            o !== r2 && t2[o] && (t2[o] = false);
          }
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], hJvIy: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { clamp: e2 } = t2.constructor.utils, { notice: r2, template: o, i18n: n } = t2;
        let i = 0, s = [];
        t2.on("subtitle:switch", () => {
          s = [];
        }), (0, a.def)(t2, "subtitleOffset", { get: () => i, set(a2) {
          if (o.$track && o.$track.track) {
            const l = Array.from(o.$track.track.cues);
            i = e2(a2, -5, 5);
            for (let r3 = 0; r3 < l.length; r3++) {
              const a3 = l[r3];
              s[r3] || (s[r3] = { startTime: a3.startTime, endTime: a3.endTime }), a3.startTime = e2(s[r3].startTime + i, 0, t2.duration), a3.endTime = e2(s[r3].endTime + i, 0, t2.duration);
            }
            t2.subtitle.update(), r2.show = `${n.get("Subtitle Offset")}: ${a2}s`, t2.emit("subtitleOffset", a2);
          } else
            t2.emit("subtitleOffset", 0);
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "4Tp0U": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { i18n: e2, notice: r2, proxy: o, template: { $video: n } } = t2;
        let i = true;
        window.WebKitPlaybackTargetAvailabilityEvent && n.webkitShowPlaybackTargetPicker ? o(n, "webkitplaybacktargetavailabilitychanged", (t3) => {
          switch (t3.availability) {
            case "available":
              i = true;
              break;
            case "not-available":
              i = false;
          }
        }) : i = false, (0, a.def)(t2, "airplay", { value() {
          i ? (n.webkitShowPlaybackTargetPicker(), t2.emit("airplay")) : r2.show = e2.get("AirPlay Not Available");
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "3wZgN": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        (0, a.def)(t2, "quality", { set(e2) {
          const { controls: r2, notice: a2, i18n: o } = t2, n = e2.find((t3) => t3.default) || e2[0];
          r2.update({ name: "quality", position: "right", index: 10, style: { marginRight: "10px" }, html: n ? n.html : "", selector: e2, async onSelect(e3) {
            await t2.switchQuality(e3.url), a2.show = `${o.get("Switch Video")}: ${e3.html}`;
          } });
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], iPdgW: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { option: e2, storage: r2, template: { $video: o, $poster: n } } = t2;
        for (const r3 in e2.moreVideoAttr)
          t2.attr(r3, e2.moreVideoAttr[r3]);
        e2.muted && (t2.muted = e2.muted), e2.volume && (o.volume = (0, a.clamp)(e2.volume, 0, 1));
        const i = r2.get("volume");
        "number" == typeof i && (o.volume = (0, a.clamp)(i, 0, 1)), e2.poster && (0, a.setStyle)(n, "backgroundImage", `url(${e2.poster})`), e2.autoplay && (o.autoplay = e2.autoplay), e2.playsInline && (o.playsInline = true, o["webkit-playsinline"] = true), e2.theme && (e2.cssVar["--art-theme"] = e2.theme);
        for (const r3 in e2.cssVar)
          t2.cssVar(r3, e2.cssVar[r3]);
        t2.url = e2.url;
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "3mj0J": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("../config"), n = a.interopDefault(o), i = t("../utils");
      r.default = function(t2) {
        const { i18n: e2, notice: r2, option: a2, constructor: o2, proxy: s, template: { $player: l, $video: c, $poster: u } } = t2;
        let p = 0;
        for (let e3 = 0; e3 < n.default.events.length; e3++)
          s(c, n.default.events[e3], (e4) => {
            t2.emit(`video:${e4.type}`, e4);
          });
        t2.on("video:canplay", () => {
          p = 0, t2.loading.show = false;
        }), t2.once("video:canplay", () => {
          t2.loading.show = false, t2.controls.show = true, t2.mask.show = true, t2.isReady = true, t2.emit("ready");
        }), t2.on("video:ended", () => {
          a2.loop ? (t2.seek = 0, t2.play(), t2.controls.show = false, t2.mask.show = false) : (t2.controls.show = true, t2.mask.show = true);
        }), t2.on("video:error", async (n2) => {
          p < o2.RECONNECT_TIME_MAX ? (await (0, i.sleep)(o2.RECONNECT_SLEEP_TIME), p += 1, t2.url = a2.url, r2.show = `${e2.get("Reconnect")}: ${p}`, t2.emit("error", n2, p)) : (t2.mask.show = true, t2.loading.show = false, t2.controls.show = true, (0, i.addClass)(l, "art-error"), await (0, i.sleep)(o2.RECONNECT_SLEEP_TIME), r2.show = e2.get("Video Load Failed"));
        }), t2.on("video:loadedmetadata", () => {
          t2.emit("resize"), i.isMobile && (t2.loading.show = false, t2.controls.show = true, t2.mask.show = true);
        }), t2.on("video:loadstart", () => {
          t2.loading.show = true, t2.mask.show = false, t2.controls.show = true;
        }), t2.on("video:pause", () => {
          t2.controls.show = true, t2.mask.show = true;
        }), t2.on("video:play", () => {
          t2.mask.show = false, (0, i.setStyle)(u, "display", "none");
        }), t2.on("video:playing", () => {
          t2.mask.show = false;
        }), t2.on("video:progress", () => {
          t2.playing && (t2.loading.show = false);
        }), t2.on("video:seeked", () => {
          t2.loading.show = false, t2.mask.show = true;
        }), t2.on("video:seeking", () => {
          t2.loading.show = true, t2.mask.show = false;
        }), t2.on("video:timeupdate", () => {
          t2.mask.show = false;
        }), t2.on("video:waiting", () => {
          t2.loading.show = true, t2.mask.show = false;
        });
      };
    }, { "../config": "9Xmqu", "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "14IBq": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("../utils"), n = t("../utils/component"), i = a.interopDefault(n), s = t("./fullscreen"), l = a.interopDefault(s), c = t("./fullscreenWeb"), u = a.interopDefault(c), p = t("./pip"), d = a.interopDefault(p), f = t("./playAndPause"), h = a.interopDefault(f), m = t("./progress"), g = a.interopDefault(m), v = t("./time"), y = a.interopDefault(v), b = t("./volume"), x = a.interopDefault(b), w = t("./setting"), j = a.interopDefault(w), k = t("./thumbnails"), $ = a.interopDefault(k), S = t("./screenshot"), I = a.interopDefault(S), T = t("./airplay"), E = a.interopDefault(T);
      class O extends i.default {
        constructor(t2) {
          super(t2), this.name = "control", this.timer = Date.now();
          const { constructor: e2 } = t2, { $player: r2 } = this.art.template;
          t2.on("mousemove", () => {
            o.isMobile || (this.show = true);
          }), t2.on("click", () => {
            o.isMobile ? this.toggle() : this.show = true;
          }), t2.on("video:timeupdate", () => {
            !t2.isInput && t2.playing && this.show && Date.now() - this.timer >= e2.CONTROL_HIDE_TIME && (this.show = false);
          }), t2.on("control", (t3) => {
            t3 ? ((0, o.removeClass)(r2, "art-hide-cursor"), (0, o.addClass)(r2, "art-hover"), this.timer = Date.now()) : ((0, o.addClass)(r2, "art-hide-cursor"), (0, o.removeClass)(r2, "art-hover"));
          }), this.init();
        }
        init() {
          const { option: t2 } = this.art;
          t2.isLive || this.add((0, g.default)({ name: "progress", position: "top", index: 10 })), !t2.thumbnails.url || t2.isLive || o.isMobile || this.add((0, $.default)({ name: "thumbnails", position: "top", index: 20 })), this.add((0, h.default)({ name: "playAndPause", position: "left", index: 10 })), this.add((0, x.default)({ name: "volume", position: "left", index: 20 })), t2.isLive || this.add((0, y.default)({ name: "time", position: "left", index: 30 })), t2.quality.length && (0, o.sleep)().then(() => {
            this.art.quality = t2.quality;
          }), t2.screenshot && !o.isMobile && this.add((0, I.default)({ name: "screenshot", position: "right", index: 20 })), t2.setting && this.add((0, j.default)({ name: "setting", position: "right", index: 30 })), t2.pip && this.add((0, d.default)({ name: "pip", position: "right", index: 40 })), t2.airplay && window.WebKitPlaybackTargetAvailabilityEvent && this.add((0, E.default)({ name: "airplay", position: "right", index: 50 })), t2.fullscreenWeb && this.add((0, u.default)({ name: "fullscreenWeb", position: "right", index: 60 })), t2.fullscreen && this.add((0, l.default)({ name: "fullscreen", position: "right", index: 70 }));
          for (let e2 = 0; e2 < t2.controls.length; e2++)
            this.add(t2.controls[e2]);
        }
        add(t2) {
          const e2 = "function" == typeof t2 ? t2(this.art) : t2, { $progress: r2, $controlsLeft: a2, $controlsRight: n2 } = this.art.template;
          switch (e2.position) {
            case "top":
              this.$parent = r2;
              break;
            case "left":
              this.$parent = a2;
              break;
            case "right":
              this.$parent = n2;
              break;
            default:
              (0, o.errorHandle)(false, "Control option.position must one of 'top', 'left', 'right'");
          }
          super.add(e2);
        }
      }
      r.default = O;
    }, { "../utils": "h3rH9", "../utils/component": "guki8", "./fullscreen": "cxHNK", "./fullscreenWeb": "66eEC", "./pip": "kCFkA", "./playAndPause": "iRhgD", "./progress": "aBBSH", "./time": "7H0CE", "./volume": "lMwFm", "./setting": "8BrCu", "./thumbnails": "2HiWx", "./screenshot": "c1GeG", "./airplay": "6GRju", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], guki8: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("./dom"), n = t("./format"), i = t("./error"), s = t("option-validator"), l = a.interopDefault(s), c = t("../scheme");
      r.default = class {
        constructor(t2) {
          this.id = 0, this.art = t2, this.cache = /* @__PURE__ */ new Map(), this.add = this.add.bind(this), this.remove = this.remove.bind(this), this.update = this.update.bind(this);
        }
        get show() {
          return (0, o.hasClass)(this.art.template.$player, `art-${this.name}-show`);
        }
        set show(t2) {
          const { $player: e2 } = this.art.template, r2 = `art-${this.name}-show`;
          t2 ? (0, o.addClass)(e2, r2) : (0, o.removeClass)(e2, r2), this.art.emit(this.name, t2);
        }
        toggle() {
          this.show = !this.show;
        }
        add(t2) {
          const e2 = "function" == typeof t2 ? t2(this.art) : t2;
          if (e2.html = e2.html || "", (0, l.default)(e2, c.ComponentOption), !this.$parent || !this.name || e2.disable)
            return;
          const r2 = e2.name || `${this.name}${this.id}`, a2 = this.cache.get(r2);
          (0, i.errorHandle)(!a2, `Can't add an existing [${r2}] to the [${this.name}]`), this.id += 1;
          const n2 = (0, o.createElement)("div");
          (0, o.addClass)(n2, `art-${this.name}`), (0, o.addClass)(n2, `art-${this.name}-${r2}`);
          const s2 = Array.from(this.$parent.children);
          n2.dataset.index = e2.index || this.id;
          const u = s2.find((t3) => Number(t3.dataset.index) >= Number(n2.dataset.index));
          u ? u.insertAdjacentElement("beforebegin", n2) : (0, o.append)(this.$parent, n2), e2.html && (0, o.append)(n2, e2.html), e2.style && (0, o.setStyles)(n2, e2.style), e2.tooltip && (0, o.tooltip)(n2, e2.tooltip);
          const p = [];
          if (e2.click) {
            const t3 = this.art.events.proxy(n2, "click", (t4) => {
              t4.preventDefault(), e2.click.call(this.art, this, t4);
            });
            p.push(t3);
          }
          return e2.selector && ["left", "right"].includes(e2.position) && this.addSelector(e2, n2, p), this[r2] = n2, this.cache.set(r2, { $ref: n2, events: p, option: e2 }), e2.mounted && e2.mounted.call(this.art, n2), n2;
        }
        addSelector(t2, e2, r2) {
          const { hover: a2, proxy: i2 } = this.art.events;
          (0, o.addClass)(e2, "art-control-selector");
          const s2 = (0, o.createElement)("div");
          (0, o.addClass)(s2, "art-selector-value"), (0, o.append)(s2, t2.html), e2.innerText = "", (0, o.append)(e2, s2);
          const l2 = t2.selector.map((t3, e3) => `<div class="art-selector-item ${t3.default ? "art-current" : ""}" data-index="${e3}">${t3.html}</div>`).join(""), c2 = (0, o.createElement)("div");
          (0, o.addClass)(c2, "art-selector-list"), (0, o.append)(c2, l2), (0, o.append)(e2, c2);
          const u = () => {
            const t3 = (0, o.getStyle)(e2, "width") / 2 - (0, o.getStyle)(c2, "width") / 2;
            c2.style.left = `${t3}px`;
          };
          a2(e2, u);
          const p = i2(c2, "click", async (e3) => {
            const r3 = (e3.composedPath() || []).find((t3) => (0, o.hasClass)(t3, "art-selector-item"));
            if (!r3)
              return;
            (0, o.inverseClass)(r3, "art-current");
            const a3 = Number(r3.dataset.index), i3 = t2.selector[a3] || {};
            if (s2.innerText = r3.innerText, t2.onSelect) {
              const a4 = await t2.onSelect.call(this.art, i3, r3, e3);
              (0, n.isStringOrNumber)(a4) && (s2.innerHTML = a4);
            }
            u();
          });
          r2.push(p);
        }
        remove(t2) {
          const e2 = this.cache.get(t2);
          (0, i.errorHandle)(e2, `Can't find [${t2}] from the [${this.name}]`), e2.option.beforeUnmount && e2.option.beforeUnmount.call(this.art, e2.$ref);
          for (let t3 = 0; t3 < e2.events.length; t3++)
            this.art.events.remove(e2.events[t3]);
          this.cache.delete(t2), delete this[t2], (0, o.remove)(e2.$ref);
        }
        update(t2) {
          const e2 = this.cache.get(t2.name);
          return e2 && (t2 = Object.assign(e2.option, t2), this.remove(t2.name)), this.add(t2);
        }
      };
    }, { "./dom": "XgAQE", "./format": "13atT", "./error": "2nFlF", "option-validator": "bAWi2", "../scheme": "AdvwB", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], cxHNK: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return (e2) => ({ ...t2, tooltip: e2.i18n.get("Fullscreen"), mounted: (t3) => {
          const { proxy: r2, icons: o, i18n: n } = e2, i = (0, a.append)(t3, o.fullscreenOn), s = (0, a.append)(t3, o.fullscreenOff);
          (0, a.setStyle)(s, "display", "none"), r2(t3, "click", () => {
            e2.fullscreen = !e2.fullscreen;
          }), e2.on("fullscreen", (e3) => {
            e3 ? ((0, a.tooltip)(t3, n.get("Exit Fullscreen")), (0, a.setStyle)(i, "display", "none"), (0, a.setStyle)(s, "display", "inline-flex")) : ((0, a.tooltip)(t3, n.get("Fullscreen")), (0, a.setStyle)(i, "display", "inline-flex"), (0, a.setStyle)(s, "display", "none"));
          });
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "66eEC": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return (e2) => ({ ...t2, tooltip: e2.i18n.get("Web Fullscreen"), mounted: (t3) => {
          const { proxy: r2, icons: o, i18n: n } = e2, i = (0, a.append)(t3, o.fullscreenWebOn), s = (0, a.append)(t3, o.fullscreenWebOff);
          (0, a.setStyle)(s, "display", "none"), r2(t3, "click", () => {
            e2.fullscreenWeb = !e2.fullscreenWeb;
          }), e2.on("fullscreenWeb", (e3) => {
            e3 ? ((0, a.tooltip)(t3, n.get("Exit Web Fullscreen")), (0, a.setStyle)(i, "display", "none"), (0, a.setStyle)(s, "display", "inline-flex")) : ((0, a.tooltip)(t3, n.get("Web Fullscreen")), (0, a.setStyle)(i, "display", "inline-flex"), (0, a.setStyle)(s, "display", "none"));
          });
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], kCFkA: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return (e2) => ({ ...t2, tooltip: e2.i18n.get("PIP Mode"), mounted: (t3) => {
          const { proxy: r2, icons: o, i18n: n } = e2;
          (0, a.append)(t3, o.pip), r2(t3, "click", () => {
            e2.pip = !e2.pip;
          }), e2.on("pip", (e3) => {
            (0, a.tooltip)(t3, n.get(e3 ? "Exit PIP Mode" : "PIP Mode"));
          });
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], iRhgD: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return (e2) => ({ ...t2, mounted: (t3) => {
          const { proxy: r2, icons: o, i18n: n } = e2, i = (0, a.append)(t3, o.play), s = (0, a.append)(t3, o.pause);
          function l() {
            (0, a.setStyle)(i, "display", "flex"), (0, a.setStyle)(s, "display", "none");
          }
          function c() {
            (0, a.setStyle)(i, "display", "none"), (0, a.setStyle)(s, "display", "flex");
          }
          (0, a.tooltip)(i, n.get("Play")), (0, a.tooltip)(s, n.get("Pause")), r2(i, "click", () => {
            e2.play();
          }), r2(s, "click", () => {
            e2.pause();
          }), e2.playing ? c() : l(), e2.on("video:playing", () => {
            c();
          }), e2.on("video:pause", () => {
            l();
          });
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], aBBSH: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r), a.export(r, "getPosFromEvent", () => n), a.export(r, "setCurrentTime", () => i);
      var o = t("../utils");
      function n(t2, e2) {
        const { $progress: r2 } = t2.template, { left: a2 } = r2.getBoundingClientRect(), n2 = o.isMobile ? e2.touches[0].clientX : e2.clientX, i2 = (0, o.clamp)(n2 - a2, 0, r2.clientWidth), s = i2 / r2.clientWidth * t2.duration;
        return { second: s, time: (0, o.secondToTime)(s), width: i2, percentage: (0, o.clamp)(i2 / r2.clientWidth, 0, 1) };
      }
      function i(t2, e2) {
        if (t2.isRotate) {
          const r2 = e2.touches[0].clientY / t2.height, a2 = r2 * t2.duration;
          t2.emit("setBar", "played", r2), t2.seek = a2;
        } else {
          const { second: r2, percentage: a2 } = n(t2, e2);
          t2.emit("setBar", "played", a2), t2.seek = r2;
        }
      }
      r.default = function(t2) {
        return (e2) => {
          const { icons: r2, option: a2, proxy: s } = e2;
          return { ...t2, html: '<div class="art-control-progress-inner"><div class="art-progress-hover"></div><div class="art-progress-loaded"></div><div class="art-progress-played"></div><div class="art-progress-highlight"></div><div class="art-progress-indicator"></div><div class="art-progress-tip"></div></div>', mounted: (t3) => {
            let l = false;
            const c = (0, o.query)(".art-progress-hover", t3), u = (0, o.query)(".art-progress-loaded", t3), p = (0, o.query)(".art-progress-played", t3), d = (0, o.query)(".art-progress-highlight", t3), f = (0, o.query)(".art-progress-indicator", t3), h = (0, o.query)(".art-progress-tip", t3);
            function m(t4, e3) {
              "loaded" === t4 && (0, o.setStyle)(u, "width", 100 * e3 + "%"), "played" === t4 && ((0, o.setStyle)(p, "width", 100 * e3 + "%"), (0, o.setStyle)(f, "left", 100 * e3 + "%"));
            }
            r2.indicator ? (0, o.append)(f, r2.indicator) : (0, o.setStyle)(f, "backgroundColor", "var(--art-theme)"), e2.on("video:loadedmetadata", () => {
              for (let t4 = 0; t4 < a2.highlight.length; t4++) {
                const r3 = a2.highlight[t4], n2 = (0, o.clamp)(r3.time, 0, e2.duration) / e2.duration * 100, i2 = `<span data-text="${r3.text}" data-time="${r3.time}" style="left: ${n2}%"></span>`;
                (0, o.append)(d, i2);
              }
            }), m("loaded", e2.loaded), e2.on("setBar", (t4, e3) => {
              m(t4, e3);
            }), e2.on("video:progress", () => {
              m("loaded", e2.loaded);
            }), e2.constructor.USE_RAF ? e2.on("raf", () => {
              m("played", e2.played);
            }) : e2.on("video:timeupdate", () => {
              m("played", e2.played);
            }), e2.on("video:ended", () => {
              m("played", 1);
            }), o.isMobile || (s(t3, "click", (t4) => {
              t4.target !== f && i(e2, t4);
            }), s(t3, "mousemove", (r3) => {
              !function(t4) {
                const { width: r4 } = n(e2, t4);
                (0, o.setStyle)(c, "width", `${r4}px`), (0, o.setStyle)(c, "display", "flex");
              }(r3), (0, o.setStyle)(h, "display", "flex"), (0, o.includeFromEvent)(r3, d) ? function(r4) {
                const { width: a3 } = n(e2, r4), { text: i2 } = r4.target.dataset;
                h.innerHTML = i2;
                const s2 = h.clientWidth;
                a3 <= s2 / 2 ? (0, o.setStyle)(h, "left", 0) : a3 > t3.clientWidth - s2 / 2 ? (0, o.setStyle)(h, "left", t3.clientWidth - s2 + "px") : (0, o.setStyle)(h, "left", a3 - s2 / 2 + "px");
              }(r3) : function(r4) {
                const { width: a3, time: i2 } = n(e2, r4);
                h.innerHTML = i2;
                const s2 = h.clientWidth;
                a3 <= s2 / 2 ? (0, o.setStyle)(h, "left", 0) : a3 > t3.clientWidth - s2 / 2 ? (0, o.setStyle)(h, "left", t3.clientWidth - s2 + "px") : (0, o.setStyle)(h, "left", a3 - s2 / 2 + "px");
              }(r3);
            }), s(t3, "mouseleave", () => {
              (0, o.setStyle)(h, "display", "none"), (0, o.setStyle)(c, "display", "none");
            }), s(t3, "mousedown", (t4) => {
              l = 0 === t4.button;
            }), e2.on("document:mousemove", (t4) => {
              if (l) {
                const { second: r3, percentage: a3 } = n(e2, t4);
                m("played", a3), e2.seek = r3;
              }
            }), e2.on("document:mouseup", () => {
              l && (l = false);
            }));
          } };
        };
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7H0CE": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return (e2) => ({ ...t2, style: a.isMobile ? { fontSize: "12px", padding: "0 5px" } : { cursor: "auto", padding: "0 10px" }, mounted: (t3) => {
          function r2() {
            const r3 = `${(0, a.secondToTime)(e2.currentTime)} / ${(0, a.secondToTime)(e2.duration)}`;
            r3 !== t3.innerText && (t3.innerText = r3);
          }
          r2();
          const o = ["video:loadedmetadata", "video:timeupdate", "video:progress"];
          for (let t4 = 0; t4 < o.length; t4++)
            e2.on(o[t4], r2);
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], lMwFm: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return (e2) => ({ ...t2, mounted: (t3) => {
          const { proxy: r2, icons: o } = e2, n = (0, a.append)(t3, o.volume), i = (0, a.append)(t3, o.volumeClose), s = (0, a.append)(t3, '<div class="art-volume-panel"></div>'), l = (0, a.append)(s, '<div class="art-volume-inner"></div>'), c = (0, a.append)(l, '<div class="art-volume-val"></div>'), u = (0, a.append)(l, '<div class="art-volume-slider"></div>'), p = (0, a.append)(u, '<div class="art-volume-handle"></div>'), d = (0, a.append)(p, '<div class="art-volume-loaded"></div>'), f = (0, a.append)(u, '<div class="art-volume-indicator"></div>');
          function h(t4) {
            const { top: e3, height: r3 } = u.getBoundingClientRect();
            return 1 - (t4.clientY - e3) / r3;
          }
          function m() {
            if (e2.muted || 0 === e2.volume)
              (0, a.setStyle)(n, "display", "none"), (0, a.setStyle)(i, "display", "flex"), (0, a.setStyle)(f, "top", "100%"), (0, a.setStyle)(d, "top", "100%"), c.innerText = 0;
            else {
              const t4 = 100 * e2.volume;
              (0, a.setStyle)(n, "display", "flex"), (0, a.setStyle)(i, "display", "none"), (0, a.setStyle)(f, "top", 100 - t4 + "%"), (0, a.setStyle)(d, "top", 100 - t4 + "%"), c.innerText = Math.floor(t4);
            }
          }
          if (m(), e2.on("video:volumechange", m), r2(n, "click", () => {
            e2.muted = true;
          }), r2(i, "click", () => {
            e2.muted = false;
          }), a.isMobile)
            (0, a.setStyle)(s, "display", "none");
          else {
            let t4 = false;
            r2(u, "mousedown", (r3) => {
              t4 = 0 === r3.button, e2.volume = h(r3);
            }), e2.on("document:mousemove", (r3) => {
              t4 && (e2.muted = false, e2.volume = h(r3));
            }), e2.on("document:mouseup", () => {
              t4 && (t4 = false);
            });
          }
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "8BrCu": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return (e2) => ({ ...t2, tooltip: e2.i18n.get("Show Setting"), mounted: (t3) => {
          const { proxy: r2, icons: o, i18n: n } = e2;
          (0, a.append)(t3, o.setting), r2(t3, "click", () => {
            e2.setting.toggle(), e2.setting.updateStyle();
          }), e2.on("setting", (e3) => {
            (0, a.tooltip)(t3, n.get(e3 ? "Hide Setting" : "Show Setting"));
          });
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2HiWx": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils"), o = t("./progress");
      r.default = function(t2) {
        return (e2) => ({ ...t2, mounted: (t3) => {
          const { option: r2, template: { $progress: n, $video: i }, events: { proxy: s, loadImg: l } } = e2;
          let c = null, u = false, p = false;
          s(n, "mousemove", async (s2) => {
            if (!u) {
              u = true;
              const t4 = await l(r2.thumbnails.url);
              c = t4, p = true;
            }
            p && ((0, a.setStyle)(t3, "display", "flex"), function(s3) {
              const { width: l2 } = (0, o.getPosFromEvent)(e2, s3), { url: u2, number: p2, column: d, width: f, height: h } = r2.thumbnails, m = f || c.naturalWidth / d, g = h || m / (i.videoWidth / i.videoHeight), v = n.clientWidth / p2, y = Math.floor(l2 / v), b = Math.ceil(y / d) - 1, x = y % d || d - 1;
              (0, a.setStyle)(t3, "backgroundImage", `url(${u2})`), (0, a.setStyle)(t3, "height", `${g}px`), (0, a.setStyle)(t3, "width", `${m}px`), (0, a.setStyle)(t3, "backgroundPosition", `-${x * m}px -${b * g}px`), l2 <= m / 2 ? (0, a.setStyle)(t3, "left", 0) : l2 > n.clientWidth - m / 2 ? (0, a.setStyle)(t3, "left", n.clientWidth - m + "px") : (0, a.setStyle)(t3, "left", l2 - m / 2 + "px");
            }(s2));
          }), s(n, "mouseleave", () => {
            (0, a.setStyle)(t3, "display", "none");
          }), e2.on("hover", (e3) => {
            e3 || (0, a.setStyle)(t3, "display", "none");
          });
        } });
      };
    }, { "../utils": "h3rH9", "./progress": "aBBSH", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], c1GeG: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return (e2) => ({ ...t2, tooltip: e2.i18n.get("Screenshot"), mounted: (t3) => {
          const { proxy: r2, icons: o } = e2;
          (0, a.append)(t3, o.screenshot), r2(t3, "click", () => {
            e2.screenshot();
          });
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "6GRju": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return (e2) => ({ ...t2, tooltip: e2.i18n.get("AirPlay"), mounted: (t3) => {
          const { proxy: r2, icons: o } = e2;
          (0, a.append)(t3, o.airplay), r2(t3, "click", () => e2.airplay());
        } });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7iUum": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("../utils"), n = t("../utils/component"), i = a.interopDefault(n), s = t("./playbackRate"), l = a.interopDefault(s), c = t("./aspectRatio"), u = a.interopDefault(c), p = t("./flip"), d = a.interopDefault(p), f = t("./info"), h = a.interopDefault(f), m = t("./version"), g = a.interopDefault(m), v = t("./close"), y = a.interopDefault(v);
      class b extends i.default {
        constructor(t2) {
          super(t2), this.name = "contextmenu", this.$parent = t2.template.$contextmenu, o.isMobile || this.init();
        }
        init() {
          const { option: t2, proxy: e2, template: { $player: r2, $contextmenu: a2 } } = this.art;
          t2.playbackRate && this.add((0, l.default)({ name: "playbackRate", index: 10 })), t2.aspectRatio && this.add((0, u.default)({ name: "aspectRatio", index: 20 })), t2.flip && this.add((0, d.default)({ name: "flip", index: 30 })), this.add((0, h.default)({ name: "info", index: 40 })), this.add((0, g.default)({ name: "version", index: 50 })), this.add((0, y.default)({ name: "close", index: 60 }));
          for (let e3 = 0; e3 < t2.contextmenu.length; e3++)
            this.add(t2.contextmenu[e3]);
          e2(r2, "contextmenu", (t3) => {
            if (t3.preventDefault(), !this.art.constructor.CONTEXTMENU)
              return;
            this.show = true;
            const e3 = t3.clientX, n2 = t3.clientY, { height: i2, width: s2, left: l2, top: c2 } = r2.getBoundingClientRect(), { height: u2, width: p2 } = a2.getBoundingClientRect();
            let d2 = e3 - l2, f2 = n2 - c2;
            e3 + p2 > l2 + s2 && (d2 = s2 - p2), n2 + u2 > c2 + i2 && (f2 = i2 - u2), (0, o.setStyles)(a2, { top: `${f2}px`, left: `${d2}px` });
          }), e2(r2, "click", (t3) => {
            (0, o.includeFromEvent)(t3, a2) || (this.show = false);
          }), this.art.on("blur", () => {
            this.show = false;
          });
        }
      }
      r.default = b;
    }, { "../utils": "h3rH9", "../utils/component": "guki8", "./playbackRate": "f1W36", "./aspectRatio": "afxZC", "./flip": "9jCuX", "./info": "k8wIZ", "./version": "bb0TU", "./close": "9zTkI", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], f1W36: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return (e2) => {
          const { i18n: r2, constructor: { PLAYBACK_RATE: o } } = e2, n = o.map((t3) => `<span data-value="${t3}">${1 === t3 ? r2.get("Normal") : t3.toFixed(1)}</span>`).join("");
          return { ...t2, html: `${r2.get("Play Speed")}: ${n}`, click: (t3, r3) => {
            const { value: a2 } = r3.target.dataset;
            a2 && (e2.playbackRate = Number(a2), t3.show = false);
          }, mounted: (t3) => {
            const r3 = (0, a.query)('[data-value="1"]', t3);
            r3 && (0, a.inverseClass)(r3, "art-current"), e2.on("video:ratechange", () => {
              const r4 = (0, a.queryAll)("span", t3).find((t4) => Number(t4.dataset.value) === e2.playbackRate);
              r4 && (0, a.inverseClass)(r4, "art-current");
            });
          } };
        };
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], afxZC: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return (e2) => {
          const { i18n: r2, constructor: { ASPECT_RATIO: o } } = e2, n = o.map((t3) => `<span data-value="${t3}">${"default" === t3 ? r2.get("Default") : t3}</span>`).join("");
          return { ...t2, html: `${r2.get("Aspect Ratio")}: ${n}`, click: (t3, r3) => {
            const { value: a2 } = r3.target.dataset;
            a2 && (e2.aspectRatio = a2, t3.show = false);
          }, mounted: (t3) => {
            const r3 = (0, a.query)('[data-value="default"]', t3);
            r3 && (0, a.inverseClass)(r3, "art-current"), e2.on("aspectRatio", (e3) => {
              const r4 = (0, a.queryAll)("span", t3).find((t4) => t4.dataset.value === e3);
              r4 && (0, a.inverseClass)(r4, "art-current");
            });
          } };
        };
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9jCuX": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return (e2) => {
          const { i18n: r2, constructor: { FLIP: o } } = e2, n = o.map((t3) => `<span data-value="${t3}">${r2.get((0, a.capitalize)(t3))}</span>`).join("");
          return { ...t2, html: `${r2.get("Video Flip")}: ${n}`, click: (t3, r3) => {
            const { value: a2 } = r3.target.dataset;
            a2 && (e2.flip = a2.toLowerCase(), t3.show = false);
          }, mounted: (t3) => {
            const r3 = (0, a.query)('[data-value="normal"]', t3);
            r3 && (0, a.inverseClass)(r3, "art-current"), e2.on("flip", (e3) => {
              const r4 = (0, a.queryAll)("span", t3).find((t4) => t4.dataset.value === e3);
              r4 && (0, a.inverseClass)(r4, "art-current");
            });
          } };
        };
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], k8wIZ: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(t2) {
        return (e2) => ({ ...t2, html: e2.i18n.get("Video Info"), click: (t3) => {
          e2.info.show = true, t3.show = false;
        } });
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], bb0TU: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(t2) {
        return { ...t2, html: '<a href="https://artplayer.org" target="_blank">ArtPlayer 5.1.1</a>' };
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9zTkI": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(t2) {
        return (e2) => ({ ...t2, html: e2.i18n.get("Close"), click: (t3) => {
          t3.show = false;
        } });
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], hD2Lg: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("./utils"), n = t("./utils/component"), i = a.interopDefault(n);
      class s extends i.default {
        constructor(t2) {
          super(t2), this.name = "info", o.isMobile || this.init();
        }
        init() {
          const { proxy: t2, constructor: e2, template: { $infoPanel: r2, $infoClose: a2, $video: n2 } } = this.art;
          t2(a2, "click", () => {
            this.show = false;
          });
          let i2 = null;
          const s2 = (0, o.queryAll)("[data-video]", r2) || [];
          this.art.on("destroy", () => clearTimeout(i2)), function t3() {
            for (let t4 = 0; t4 < s2.length; t4++) {
              const e3 = s2[t4], r3 = n2[e3.dataset.video], a3 = "number" == typeof r3 ? r3.toFixed(2) : r3;
              e3.innerText !== a3 && (e3.innerText = a3);
            }
            i2 = setTimeout(t3, e2.INFO_LOOP_TIME);
          }();
        }
      }
      r.default = s;
    }, { "./utils": "h3rH9", "./utils/component": "guki8", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], lum0D: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("./utils"), n = t("./utils/component"), i = a.interopDefault(n), s = t("option-validator"), l = a.interopDefault(s), c = t("./scheme"), u = a.interopDefault(c);
      class p extends i.default {
        constructor(t2) {
          super(t2), this.name = "subtitle", this.eventDestroy = () => null, this.init(t2.option.subtitle);
          let e2 = false;
          t2.on("video:timeupdate", () => {
            if (!this.url)
              return;
            const t3 = this.art.template.$video.webkitDisplayingFullscreen;
            "boolean" == typeof t3 && t3 !== e2 && (e2 = t3, this.createTrack(t3 ? "subtitles" : "metadata", this.url));
          });
        }
        get url() {
          return this.art.template.$track.src;
        }
        set url(t2) {
          this.switch(t2);
        }
        get textTrack() {
          return this.art.template.$video.textTracks[0];
        }
        get activeCue() {
          return this.textTrack.activeCues[0];
        }
        style(t2, e2) {
          const { $subtitle: r2 } = this.art.template;
          return "object" == typeof t2 ? (0, o.setStyles)(r2, t2) : (0, o.setStyle)(r2, t2, e2);
        }
        update() {
          const { $subtitle: t2 } = this.art.template;
          t2.innerHTML = "", this.activeCue && (this.art.option.subtitle.escape ? t2.innerHTML = this.activeCue.text.split(/\r?\n/).map((t3) => `<div class="art-subtitle-line">${(0, o.escape)(t3)}</div>`).join("") : t2.innerHTML = this.activeCue.text, this.art.emit("subtitleUpdate", this.activeCue.text));
        }
        async switch(t2, e2 = {}) {
          const { i18n: r2, notice: a2, option: o2 } = this.art, n2 = { ...o2.subtitle, ...e2, url: t2 }, i2 = await this.init(n2);
          return e2.name && (a2.show = `${r2.get("Switch Subtitle")}: ${e2.name}`), i2;
        }
        createTrack(t2, e2) {
          const { template: r2, proxy: a2, option: n2 } = this.art, { $video: i2, $track: s2 } = r2, l2 = (0, o.createElement)("track");
          l2.default = true, l2.kind = t2, l2.src = e2, l2.label = n2.subtitle.name || "Artplayer", l2.track.mode = "hidden", this.eventDestroy(), (0, o.remove)(s2), (0, o.append)(i2, l2), r2.$track = l2, this.eventDestroy = a2(this.textTrack, "cuechange", () => this.update());
        }
        async init(t2) {
          const { notice: e2, template: { $subtitle: r2 } } = this.art;
          if ((0, l.default)(t2, u.default.subtitle), t2.url)
            return this.style(t2.style), fetch(t2.url).then((t3) => t3.arrayBuffer()).then((e3) => {
              const r3 = new TextDecoder(t2.encoding).decode(e3);
              switch (this.art.emit("subtitleLoad", t2.url), t2.type || (0, o.getExt)(t2.url)) {
                case "srt": {
                  const e4 = (0, o.srtToVtt)(r3), a2 = t2.onVttLoad(e4);
                  return (0, o.vttToBlob)(a2);
                }
                case "ass": {
                  const e4 = (0, o.assToVtt)(r3), a2 = t2.onVttLoad(e4);
                  return (0, o.vttToBlob)(a2);
                }
                case "vtt": {
                  const e4 = t2.onVttLoad(r3);
                  return (0, o.vttToBlob)(e4);
                }
                default:
                  return t2.url;
              }
            }).then((t3) => (r2.innerHTML = "", this.url === t3 || (URL.revokeObjectURL(this.url), this.createTrack("metadata", t3), this.art.emit("subtitleSwitch", t3)), t3)).catch((t3) => {
              throw r2.innerHTML = "", e2.show = t3, t3;
            });
        }
      }
      r.default = p;
    }, { "./utils": "h3rH9", "./utils/component": "guki8", "option-validator": "bAWi2", "./scheme": "AdvwB", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "1Epl5": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("../utils/error"), n = t("./clickInit"), i = a.interopDefault(n), s = t("./hoverInit"), l = a.interopDefault(s), c = t("./moveInit"), u = a.interopDefault(c), p = t("./resizeInit"), d = a.interopDefault(p), f = t("./gestureInit"), h = a.interopDefault(f), m = t("./viewInit"), g = a.interopDefault(m), v = t("./documentInit"), y = a.interopDefault(v), b = t("./updateInit"), x = a.interopDefault(b);
      r.default = class {
        constructor(t2) {
          this.destroyEvents = [], this.proxy = this.proxy.bind(this), this.hover = this.hover.bind(this), this.loadImg = this.loadImg.bind(this), (0, i.default)(t2, this), (0, l.default)(t2, this), (0, u.default)(t2, this), (0, d.default)(t2, this), (0, h.default)(t2, this), (0, g.default)(t2, this), (0, y.default)(t2, this), (0, x.default)(t2, this);
        }
        proxy(t2, e2, r2, a2 = {}) {
          if (Array.isArray(e2))
            return e2.map((e3) => this.proxy(t2, e3, r2, a2));
          t2.addEventListener(e2, r2, a2);
          const o2 = () => t2.removeEventListener(e2, r2, a2);
          return this.destroyEvents.push(o2), o2;
        }
        hover(t2, e2, r2) {
          e2 && this.proxy(t2, "mouseenter", e2), r2 && this.proxy(t2, "mouseleave", r2);
        }
        loadImg(t2) {
          return new Promise((e2, r2) => {
            let a2;
            if (t2 instanceof HTMLImageElement)
              a2 = t2;
            else {
              if ("string" != typeof t2)
                return r2(new (0, o.ArtPlayerError)("Unable to get Image"));
              a2 = new Image(), a2.src = t2;
            }
            if (a2.complete)
              return e2(a2);
            this.proxy(a2, "load", () => e2(a2)), this.proxy(a2, "error", () => r2(new (0, o.ArtPlayerError)(`Failed to load Image: ${a2.src}`)));
          });
        }
        remove(t2) {
          const e2 = this.destroyEvents.indexOf(t2);
          e2 > -1 && (t2(), this.destroyEvents.splice(e2, 1));
        }
        destroy() {
          for (let t2 = 0; t2 < this.destroyEvents.length; t2++)
            this.destroyEvents[t2]();
        }
      };
    }, { "../utils/error": "2nFlF", "./clickInit": "gzL6e", "./hoverInit": "kpTJf", "./moveInit": "ef6qz", "./resizeInit": "9TXOX", "./gestureInit": "dePMU", "./viewInit": "hDyWF", "./documentInit": "7RjDP", "./updateInit": "8SmBT", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], gzL6e: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2, e2) {
        const { constructor: r2, template: { $player: o, $video: n } } = t2;
        e2.proxy(document, ["click", "contextmenu"], (e3) => {
          (0, a.includeFromEvent)(e3, o) ? (t2.isInput = "INPUT" === e3.target.tagName, t2.isFocus = true, t2.emit("focus", e3)) : (t2.isInput = false, t2.isFocus = false, t2.emit("blur", e3));
        });
        let i = 0;
        e2.proxy(n, "click", (e3) => {
          const o2 = Date.now(), { MOBILE_CLICK_PLAY: n2, DBCLICK_TIME: s, MOBILE_DBCLICK_PLAY: l, DBCLICK_FULLSCREEN: c } = r2;
          o2 - i <= s ? (t2.emit("dblclick", e3), a.isMobile ? !t2.isLock && l && t2.toggle() : c && (t2.fullscreen = !t2.fullscreen)) : (t2.emit("click", e3), a.isMobile ? !t2.isLock && n2 && t2.toggle() : t2.toggle()), i = o2;
        });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], kpTJf: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2, e2) {
        const { $player: r2 } = t2.template;
        e2.hover(r2, (e3) => {
          (0, a.addClass)(r2, "art-hover"), t2.emit("hover", true, e3);
        }, (e3) => {
          (0, a.removeClass)(r2, "art-hover"), t2.emit("hover", false, e3);
        });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], ef6qz: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(t2, e2) {
        const { $player: r2 } = t2.template;
        e2.proxy(r2, "mousemove", (e3) => {
          t2.emit("mousemove", e3);
        });
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9TXOX": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2, e2) {
        const { option: r2, constructor: o } = t2;
        t2.on("resize", () => {
          const { aspectRatio: e3, notice: a2 } = t2;
          "standard" === t2.state && r2.autoSize && t2.autoSize(), t2.aspectRatio = e3, a2.show = "";
        });
        const n = (0, a.debounce)(() => t2.emit("resize"), o.RESIZE_TIME);
        e2.proxy(window, ["orientationchange", "resize"], () => n()), screen && screen.orientation && screen.orientation.onchange && e2.proxy(screen.orientation, "change", () => n());
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], dePMU: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils"), o = t("../control/progress");
      function n(t2, e2, r2, a2) {
        var o2 = e2 - a2, n2 = r2 - t2, i = 0;
        if (Math.abs(n2) < 2 && Math.abs(o2) < 2)
          return i;
        var s = function(t3, e3) {
          return 180 * Math.atan2(e3, t3) / Math.PI;
        }(n2, o2);
        return s >= -45 && s < 45 ? i = 4 : s >= 45 && s < 135 ? i = 1 : s >= -135 && s < -45 ? i = 2 : (s >= 135 && s <= 180 || s >= -180 && s < -135) && (i = 3), i;
      }
      r.default = function(t2, e2) {
        if (a.isMobile && !t2.option.isLive) {
          const { $video: r2, $progress: i } = t2.template;
          let s = null, l = false, c = 0, u = 0, p = 0;
          const d = (e3) => {
            if (1 === e3.touches.length && !t2.isLock) {
              s === i && (0, o.setCurrentTime)(t2, e3), l = true;
              const { pageX: r3, pageY: a2 } = e3.touches[0];
              c = r3, u = a2, p = t2.currentTime;
            }
          }, f = (e3) => {
            if (1 === e3.touches.length && l && t2.duration) {
              const { pageX: o2, pageY: i2 } = e3.touches[0], l2 = n(c, u, o2, i2), d2 = [3, 4].includes(l2), f2 = [1, 2].includes(l2);
              if (d2 && !t2.isRotate || f2 && t2.isRotate) {
                const e4 = (0, a.clamp)((o2 - c) / t2.width, -1, 1), n2 = (0, a.clamp)((i2 - u) / t2.height, -1, 1), l3 = t2.isRotate ? n2 : e4, d3 = s === r2 ? t2.constructor.TOUCH_MOVE_RATIO : 1, f3 = (0, a.clamp)(p + t2.duration * l3 * d3, 0, t2.duration);
                t2.seek = f3, t2.emit("setBar", "played", (0, a.clamp)(f3 / t2.duration, 0, 1)), t2.notice.show = `${(0, a.secondToTime)(f3)} / ${(0, a.secondToTime)(t2.duration)}`;
              }
            }
          }, h = () => {
            l && (c = 0, u = 0, p = 0, l = false, s = null);
          };
          e2.proxy(i, "touchstart", (t3) => {
            s = i, d(t3);
          }), e2.proxy(r2, "touchstart", (t3) => {
            s = r2, d(t3);
          }), e2.proxy(r2, "touchmove", f), e2.proxy(i, "touchmove", f), e2.proxy(document, "touchend", h);
        }
      };
    }, { "../utils": "h3rH9", "../control/progress": "aBBSH", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], hDyWF: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2, e2) {
        const { option: r2, constructor: o, template: { $container: n } } = t2, i = (0, a.throttle)(() => {
          t2.emit("view", (0, a.isInViewport)(n, o.SCROLL_GAP));
        }, o.SCROLL_TIME);
        e2.proxy(window, "scroll", () => i()), t2.on("view", (e3) => {
          r2.autoMini && (t2.mini = !e3);
        });
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "7RjDP": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(t2, e2) {
        e2.proxy(document, "mousemove", (e3) => {
          t2.emit("document:mousemove", e3);
        }), e2.proxy(document, "mouseup", (e3) => {
          t2.emit("document:mouseup", e3);
        });
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "8SmBT": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(t2) {
        if (t2.constructor.USE_RAF) {
          let e2 = null;
          !function r2() {
            t2.playing && t2.emit("raf"), t2.isDestroy || (e2 = requestAnimationFrame(r2));
          }(), t2.on("destroy", () => {
            cancelAnimationFrame(e2);
          });
        }
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], eTow4: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("./utils");
      r.default = class {
        constructor(t2) {
          this.art = t2, this.keys = {}, t2.option.hotkey && !a.isMobile && this.init();
        }
        init() {
          const { proxy: t2, constructor: e2 } = this.art;
          this.add(27, () => {
            this.art.fullscreenWeb && (this.art.fullscreenWeb = false);
          }), this.add(32, () => {
            this.art.toggle();
          }), this.add(37, () => {
            this.art.backward = e2.SEEK_STEP;
          }), this.add(38, () => {
            this.art.volume += e2.VOLUME_STEP;
          }), this.add(39, () => {
            this.art.forward = e2.SEEK_STEP;
          }), this.add(40, () => {
            this.art.volume -= e2.VOLUME_STEP;
          }), t2(window, "keydown", (t3) => {
            if (this.art.isFocus) {
              const e3 = document.activeElement.tagName.toUpperCase(), r2 = document.activeElement.getAttribute("contenteditable");
              if (!("INPUT" === e3 || "TEXTAREA" === e3 || "" === r2 || "true" === r2 || t3.altKey || t3.ctrlKey || t3.metaKey || t3.shiftKey)) {
                const e4 = this.keys[t3.keyCode];
                if (e4) {
                  t3.preventDefault();
                  for (let r3 = 0; r3 < e4.length; r3++)
                    e4[r3].call(this.art, t3);
                  this.art.emit("hotkey", t3);
                }
              }
            }
          });
        }
        add(t2, e2) {
          return this.keys[t2] ? this.keys[t2].push(e2) : this.keys[t2] = [e2], this;
        }
        remove(t2, e2) {
          if (this.keys[t2]) {
            const r2 = this.keys[t2].indexOf(e2);
            -1 !== r2 && this.keys[t2].splice(r2, 1);
          }
          return this;
        }
      };
    }, { "./utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "4fDoD": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("./utils/component"), n = a.interopDefault(o);
      class i extends n.default {
        constructor(t2) {
          super(t2);
          const { option: e2, template: { $layer: r2 } } = t2;
          this.name = "layer", this.$parent = r2;
          for (let t3 = 0; t3 < e2.layers.length; t3++)
            this.add(e2.layers[t3]);
        }
      }
      r.default = i;
    }, { "./utils/component": "guki8", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], fE0Sp: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("./utils"), n = t("./utils/component"), i = a.interopDefault(n);
      class s extends i.default {
        constructor(t2) {
          super(t2), this.name = "loading", (0, o.append)(t2.template.$loading, t2.icons.loading);
        }
      }
      r.default = s;
    }, { "./utils": "h3rH9", "./utils/component": "guki8", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "9PuGy": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("./utils");
      r.default = class {
        constructor(t2) {
          this.art = t2, this.timer = null;
        }
        set show(t2) {
          const { constructor: e2, template: { $player: r2, $noticeInner: o } } = this.art;
          t2 ? (o.innerText = t2 instanceof Error ? t2.message.trim() : t2, (0, a.addClass)(r2, "art-notice-show"), clearTimeout(this.timer), this.timer = setTimeout(() => {
            o.innerText = "", (0, a.removeClass)(r2, "art-notice-show");
          }, e2.NOTICE_TIME)) : (0, a.removeClass)(r2, "art-notice-show");
        }
      };
    }, { "./utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2etr0": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("./utils"), n = t("./utils/component"), i = a.interopDefault(n);
      class s extends i.default {
        constructor(t2) {
          super(t2), this.name = "mask";
          const { template: e2, icons: r2, events: a2 } = t2, n2 = (0, o.append)(e2.$state, r2.state), i2 = (0, o.append)(e2.$state, r2.error);
          (0, o.setStyle)(i2, "display", "none"), t2.on("destroy", () => {
            (0, o.setStyle)(n2, "display", "none"), (0, o.setStyle)(i2, "display", null);
          }), a2.proxy(e2.$state, "click", () => t2.play());
        }
      }
      r.default = s;
    }, { "./utils": "h3rH9", "./utils/component": "guki8", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "6dYSr": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("../utils"), n = t("bundle-text:./loading.svg"), i = a.interopDefault(n), s = t("bundle-text:./state.svg"), l = a.interopDefault(s), c = t("bundle-text:./check.svg"), u = a.interopDefault(c), p = t("bundle-text:./play.svg"), d = a.interopDefault(p), f = t("bundle-text:./pause.svg"), h = a.interopDefault(f), m = t("bundle-text:./volume.svg"), g = a.interopDefault(m), v = t("bundle-text:./volume-close.svg"), y = a.interopDefault(v), b = t("bundle-text:./screenshot.svg"), x = a.interopDefault(b), w = t("bundle-text:./setting.svg"), j = a.interopDefault(w), k = t("bundle-text:./arrow-left.svg"), $ = a.interopDefault(k), S = t("bundle-text:./arrow-right.svg"), I = a.interopDefault(S), T = t("bundle-text:./playback-rate.svg"), E = a.interopDefault(T), O = t("bundle-text:./aspect-ratio.svg"), M = a.interopDefault(O), C = t("bundle-text:./config.svg"), F = a.interopDefault(C), H = t("bundle-text:./pip.svg"), B = a.interopDefault(H), D = t("bundle-text:./lock.svg"), A = a.interopDefault(D), R = t("bundle-text:./unlock.svg"), z = a.interopDefault(R), L = t("bundle-text:./fullscreen-off.svg"), P = a.interopDefault(L), N = t("bundle-text:./fullscreen-on.svg"), _ = a.interopDefault(N), Z = t("bundle-text:./fullscreen-web-off.svg"), q = a.interopDefault(Z), V = t("bundle-text:./fullscreen-web-on.svg"), W = a.interopDefault(V), U = t("bundle-text:./switch-on.svg"), Y = a.interopDefault(U), K = t("bundle-text:./switch-off.svg"), G = a.interopDefault(K), X = t("bundle-text:./flip.svg"), J = a.interopDefault(X), Q = t("bundle-text:./error.svg"), tt = a.interopDefault(Q), et = t("bundle-text:./close.svg"), rt = a.interopDefault(et), at = t("bundle-text:./airplay.svg"), ot = a.interopDefault(at);
      r.default = class {
        constructor(t2) {
          const e2 = { loading: i.default, state: l.default, play: d.default, pause: h.default, check: u.default, volume: g.default, volumeClose: y.default, screenshot: x.default, setting: j.default, pip: B.default, arrowLeft: $.default, arrowRight: I.default, playbackRate: E.default, aspectRatio: M.default, config: F.default, lock: A.default, flip: J.default, unlock: z.default, fullscreenOff: P.default, fullscreenOn: _.default, fullscreenWebOff: q.default, fullscreenWebOn: W.default, switchOn: Y.default, switchOff: G.default, error: tt.default, close: rt.default, airplay: ot.default, ...t2.option.icons };
          for (const t3 in e2)
            (0, o.def)(this, t3, { get: () => (0, o.getIcon)(t3, e2[t3]) });
        }
      };
    }, { "../utils": "h3rH9", "bundle-text:./loading.svg": "fY5Gt", "bundle-text:./state.svg": "iNfLt", "bundle-text:./check.svg": "jtE9u", "bundle-text:./play.svg": "elgfY", "bundle-text:./pause.svg": "eKokJ", "bundle-text:./volume.svg": "hNB4y", "bundle-text:./volume-close.svg": "i9vta", "bundle-text:./screenshot.svg": "kB3Mf", "bundle-text:./setting.svg": "3MONs", "bundle-text:./arrow-left.svg": "iMCpk", "bundle-text:./arrow-right.svg": "3oe4L", "bundle-text:./playback-rate.svg": "liE22", "bundle-text:./aspect-ratio.svg": "8HqYc", "bundle-text:./config.svg": "hYAAH", "bundle-text:./pip.svg": "jmNrH", "bundle-text:./lock.svg": "cIqko", "bundle-text:./unlock.svg": "65zy4", "bundle-text:./fullscreen-off.svg": "jaJRT", "bundle-text:./fullscreen-on.svg": "cRY1X", "bundle-text:./fullscreen-web-off.svg": "3aVGL", "bundle-text:./fullscreen-web-on.svg": "4DiVn", "bundle-text:./switch-on.svg": "kwdKE", "bundle-text:./switch-off.svg": "bWfXZ", "bundle-text:./flip.svg": "h3zZ9", "bundle-text:./error.svg": "7Oyth", "bundle-text:./close.svg": "U5Jcy", "bundle-text:./airplay.svg": "jK5Fx", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], fY5Gt: [function(t, e, r) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default"><path fill="none" class="bk" d="M0 0h100v100H0z"/><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-1s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(30 105.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(60 75.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(90 65 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(120 58.66 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(150 54.02 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(180 50 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-150 45.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-120 41.34 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-90 35 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-60 24.02 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-30 -5.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/></rect></svg>';
    }, {}], iNfLt: [function(t, e, r) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="#fff" d="M9.5 9.325v5.35q0 .575.525.875t1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05t-.525.875ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>';
    }, {}], jtE9u: [function(t, e, r) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:100%;height:100%"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff"/></svg>';
    }, {}], elgfY: [function(t, e, r) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M17.982 9.275 8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z"/></svg>';
    }, {}], eKokJ: [function(t, e, r) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zm8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z"/></svg>';
    }, {}], hNB4y: [function(t, e, r) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M10.188 4.65 6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zm4.258-.872a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z"/><path d="M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z"/></svg>';
    }, {}], i9vta: [function(t, e, r) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z"/><path d="M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zm5.195 13.195-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z"/></svg>';
    }, {}], kB3Mf: [function(t, e, r) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 50 50"><path d="M19.402 6a5 5 0 0 0-4.902 4.012L14.098 12H9a5 5 0 0 0-5 5v21a5 5 0 0 0 5 5h32a5 5 0 0 0 5-5V17a5 5 0 0 0-5-5h-5.098l-.402-1.988A5 5 0 0 0 30.598 6ZM25 17c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10Zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8Z"/></svg>';
    }, {}], "3MONs": [function(t, e, r) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><circle cx="11" cy="11" r="2"/><path d="M19.164 8.861 17.6 8.6a6.978 6.978 0 0 0-1.186-2.099l.574-1.533a1 1 0 0 0-.436-1.217l-1.997-1.153a1.001 1.001 0 0 0-1.272.23l-1.008 1.225a7.04 7.04 0 0 0-2.55.001L8.716 2.829a1 1 0 0 0-1.272-.23L5.447 3.751a1 1 0 0 0-.436 1.217l.574 1.533A6.997 6.997 0 0 0 4.4 8.6l-1.564.261A.999.999 0 0 0 2 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 0 0 1.228 2.075l-.558 1.487a1 1 0 0 0 .436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 0 0 2.272 0l1.04 1.263a1 1 0 0 0 1.272.23l1.997-1.153a1 1 0 0 0 .436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 0 0 .835-.986V9.847a.999.999 0 0 0-.836-.986zM11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>';
    }, {}], iMCpk: [function(t, e, r) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="m19.41 20.09-4.58-4.59 4.58-4.59L18 9.5l-6 6 6 6z" fill="#fff"/></svg>';
    }, {}], "3oe4L": [function(t, e, r) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="m12.59 20.34 4.58-4.59-4.58-4.59L14 9.75l6 6-6 6z" fill="#fff"/></svg>';
    }, {}], liE22: [function(t, e, r) {
      e.exports = '<svg height="24" width="24"><path d="M10 8v8l6-4-6-4zM6.3 5l-.6-.8C7.2 3 9 2.2 11 2l.1 1c-1.8.2-3.4.9-4.8 2zM5 6.3l-.8-.6C3 7.2 2.2 9 2 11l1 .1c.2-1.8.9-3.4 2-4.8zm0 11.4c-1.1-1.4-1.8-3.1-2-4.8L2 13c.2 2 1 3.8 2.2 5.4l.8-.7zm6.1 3.3c-1.8-.2-3.4-.9-4.8-2l-.6.8C7.2 21 9 21.8 11 22l.1-1zM22 12c0-5.2-3.9-9.4-9-10l-.1 1c4.6.5 8.1 4.3 8.1 9s-3.5 8.5-8.1 9l.1 1c5.2-.5 9-4.8 9-10z" fill="#fff" style="--darkreader-inline-fill:#a8a6a4"/></svg>';
    }, {}], "8HqYc": [function(t, e, r) {
      e.exports = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" style="width:100%;height:100%;transform:translate(0,0)"><defs><clipPath id="__lottie_element_216"><path d="M0 0h88v88H0z"/></clipPath></defs><g style="display:block" clip-path="url('#__lottie_element_216')"><path fill="#FFF" d="m12.438-12.702-2.82 2.82c-.79.79-.79 2.05 0 2.83l7.07 7.07-7.07 7.07c-.79.79-.79 2.05 0 2.83l2.82 2.83c.79.78 2.05.78 2.83 0l11.32-11.31c.78-.78.78-2.05 0-2.83l-11.32-11.31c-.78-.79-2.04-.79-2.83 0zm-24.88 0c-.74-.74-1.92-.78-2.7-.12l-.13.12-11.31 11.31a2 2 0 0 0-.12 2.7l.12.13 11.31 11.31a2 2 0 0 0 2.7.12l.13-.12 2.83-2.83c.74-.74.78-1.91.11-2.7l-.11-.13-7.07-7.07 7.07-7.07c.74-.74.78-1.91.11-2.7l-.11-.13-2.83-2.82zM28-28c4.42 0 8 3.58 8 8v40c0 4.42-3.58 8-8 8h-56c-4.42 0-8-3.58-8-8v-40c0-4.42 3.58-8 8-8h56z" style="--darkreader-inline-fill:#a8a6a4" transform="translate(44 44)"/></g></svg>`;
    }, {}], hYAAH: [function(t, e, r) {
      e.exports = '<svg height="24" width="24"><path d="M15 17h6v1h-6v-1zm-4 0H3v1h8v2h1v-5h-1v2zm3-9h1V3h-1v2H3v1h11v2zm4-3v1h3V5h-3zM6 14h1V9H6v2H3v1h3v2zm4-2h11v-1H10v1z" fill="#fff" style="--darkreader-inline-fill:#a8a6a4"/></svg>';
    }, {}], jmNrH: [function(t, e, r) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" height="32" width="32"><path d="M25 17h-8v6h8v-6Zm4 8V10.98C29 9.88 28.1 9 27 9H9c-1.1 0-2 .88-2 1.98V25c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2Zm-2 .02H9V10.97h18v14.05Z"/></svg>';
    }, {}], cIqko: [function(t, e, r) {
      e.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M298.667 426.667v-85.334a213.333 213.333 0 1 1 426.666 0v85.334H768A85.333 85.333 0 0 1 853.333 512v256A85.333 85.333 0 0 1 768 853.333H256A85.333 85.333 0 0 1 170.667 768V512A85.333 85.333 0 0 1 256 426.667h42.667zM512 213.333a128 128 0 0 0-128 128v85.334h256v-85.334a128 128 0 0 0-128-128z" fill="#fff"/></svg>';
    }, {}], "65zy4": [function(t, e, r) {
      e.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="m666.752 194.517-49.365 74.112A128 128 0 0 0 384 341.333l.043 85.334h384A85.333 85.333 0 0 1 853.376 512v256a85.333 85.333 0 0 1-85.333 85.333H256A85.333 85.333 0 0 1 170.667 768V512A85.333 85.333 0 0 1 256 426.667h42.667v-85.334a213.333 213.333 0 0 1 368.085-146.816z" fill="#fff"/></svg>';
    }, {}], jaJRT: [function(t, e, r) {
      e.exports = '<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M768 298.667h170.667V384h-256V128H768v170.667zM341.333 384h-256v-85.333H256V128h85.333v256zM768 725.333V896h-85.333V640h256v85.333H768zM341.333 640v256H256V725.333H85.333V640h256z"/></svg>';
    }, {}], cRY1X: [function(t, e, r) {
      e.exports = '<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M625.778 256H768v142.222h113.778v-256h-256V256zM256 398.222V256h142.222V142.222h-256v256H256zm512 227.556V768H625.778v113.778h256v-256H768zM398.222 768H256V625.778H142.222v256h256V768z"/></svg>';
    }, {}], "3aVGL": [function(t, e, r) {
      e.exports = '<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4a76.8 76.8 0 0 0 76.8 76.8h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zM896 512a64 64 0 0 1 7.488 127.552L896 640H768v128a64 64 0 0 1-56.512 63.552L704 832a64 64 0 0 1-63.552-56.512L640 768V582.592c0-34.496 25.024-66.112 61.632-70.208l8-.384H896zm-640 0a64 64 0 0 1-7.488-127.552L256 384h128V256a64 64 0 0 1 56.512-63.552L448 192a64 64 0 0 1 63.552 56.512L512 256v185.408c0 34.432-25.024 66.112-61.632 70.144l-8 .448H256z"/></svg>';
    }, {}], "4DiVn": [function(t, e, r) {
      e.exports = '<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4a76.8 76.8 0 0 0 76.8 76.8h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zm-576 64a64 64 0 0 1 7.488 127.552L448 320H320v128a64 64 0 0 1-56.512 63.552L256 512a64 64 0 0 1-63.552-56.512L192 448V262.592c0-34.432 25.024-66.112 61.632-70.144l8-.448H448zm256 640a64 64 0 0 1-7.488-127.552L704 704h128V576a64 64 0 0 1 56.512-63.552L896 512a64 64 0 0 1 63.552 56.512L960 576v185.408c0 34.496-25.024 66.112-61.632 70.208l-8 .384H704z"/></svg>';
    }, {}], kwdKE: [function(t, e, r) {
      e.exports = '<svg class="icon" width="26" height="26" viewBox="0 0 1664 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#648FFC" d="M1152 0H512a512 512 0 0 0 0 1024h640a512 512 0 0 0 0-1024zm0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448z"/></svg>';
    }, {}], bWfXZ: [function(t, e, r) {
      e.exports = '<svg class="icon" width="26" height="26" viewBox="0 0 1740 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M511.898 1024h670.515c282.419-.41 511.18-229.478 511.18-511.898 0-282.419-228.761-511.488-511.18-511.897H511.898C229.478.615.717 229.683.717 512.102c0 282.42 228.761 511.488 511.18 511.898zm-.564-975.36A464.589 464.589 0 1 1 48.026 513.024 463.872 463.872 0 0 1 511.334 48.435v.205z"/></svg>';
    }, {}], h3zZ9: [function(t, e, r) {
      e.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M554.667 810.667V896h-85.334v-85.333h85.334zm-384-632.662a42.667 42.667 0 0 1 34.986 18.219l203.904 291.328a42.667 42.667 0 0 1 0 48.896L205.611 827.776A42.667 42.667 0 0 1 128 803.328V220.672a42.667 42.667 0 0 1 42.667-42.667zm682.666 0a42.667 42.667 0 0 1 42.368 37.718l.299 4.949v582.656a42.667 42.667 0 0 1-74.24 28.63l-3.413-4.182-203.904-291.328a42.667 42.667 0 0 1-3.03-43.861l3.03-5.035 203.946-291.328a42.667 42.667 0 0 1 34.944-18.219zM554.667 640v85.333h-85.334V640h85.334zm-358.4-320.896V716.8L335.957 512 196.31 319.104zm358.4 150.23v85.333h-85.334v-85.334h85.334zm0-170.667V384h-85.334v-85.333h85.334zm0-170.667v85.333h-85.334V128h85.334z" fill="#fff"/></svg>';
    }, {}], "7Oyth": [function(t, e, r) {
      e.exports = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M593.818 168.55 949.82 763.76c26.153 43.746 10.732 99.738-34.447 125.052-14.397 8.069-30.72 12.308-47.37 12.308H155.976c-52.224 0-94.536-40.96-94.536-91.505 0-16.097 4.383-31.928 12.718-45.875l356.004-595.19c26.173-43.724 84.009-58.654 129.208-33.341a93.082 93.082 0 0 1 34.448 33.341zM512 819.2a61.44 61.44 0 1 0 0-122.88 61.44 61.44 0 0 0 0 122.88zm0-512a72.315 72.315 0 0 0-71.762 81.306l25.723 205.721a46.408 46.408 0 0 0 92.078 0l25.723-205.742A72.315 72.315 0 0 0 512 307.2z"/></svg>';
    }, {}], U5Jcy: [function(t, e, r) {
      e.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"/></svg>';
    }, {}], jK5Fx: [function(t, e, r) {
      e.exports = '<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M16 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2H3V3h12v8h-2v2h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/><path d="M4 17h10l-5-6z"/></g></svg>';
    }, {}], bRHiA: [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("./flip"), n = a.interopDefault(o), i = t("./aspectRatio"), s = a.interopDefault(i), l = t("./playbackRate"), c = a.interopDefault(l), u = t("./subtitleOffset"), p = a.interopDefault(u), d = t("../utils/component"), f = a.interopDefault(d), h = t("../utils/error"), m = t("../utils");
      class g extends f.default {
        constructor(t2) {
          super(t2);
          const { option: e2, controls: r2, template: { $setting: a2 } } = t2;
          this.name = "setting", this.$parent = a2, this.option = [], this.events = [], this.cache = /* @__PURE__ */ new Map(), e2.setting && (this.init(), t2.on("blur", () => {
            this.show && (this.show = false, this.render(this.option));
          }), t2.on("focus", (t3) => {
            const e3 = (0, m.includeFromEvent)(t3, r2.setting), a3 = (0, m.includeFromEvent)(t3, this.$parent);
            !this.show || e3 || a3 || (this.show = false, this.render(this.option));
          }));
        }
        static makeRecursion(t2, e2, r2) {
          for (let a2 = 0; a2 < t2.length; a2++) {
            const o2 = t2[a2];
            o2.$parentItem = e2, o2.$parentList = r2, g.makeRecursion(o2.selector || [], o2, t2);
          }
          return t2;
        }
        get defaultSettings() {
          const t2 = [], { option: e2 } = this.art;
          return e2.playbackRate && t2.push((0, c.default)(this.art)), e2.aspectRatio && t2.push((0, s.default)(this.art)), e2.flip && t2.push((0, n.default)(this.art)), e2.subtitleOffset && t2.push((0, p.default)(this.art)), t2;
        }
        init() {
          const { option: t2 } = this.art, e2 = [...this.defaultSettings, ...t2.settings];
          this.option = g.makeRecursion(e2), this.destroy(), this.render(this.option);
        }
        destroy() {
          for (let t2 = 0; t2 < this.events.length; t2++)
            this.art.events.remove(this.events[t2]);
          this.$parent.innerHTML = "", this.events = [], this.cache = /* @__PURE__ */ new Map();
        }
        find(t2 = "", e2 = this.option) {
          for (let r2 = 0; r2 < e2.length; r2++) {
            const a2 = e2[r2];
            if (a2.name === t2)
              return a2;
            {
              const e3 = this.find(t2, a2.selector || []);
              if (e3)
                return e3;
            }
          }
        }
        remove(t2) {
          const e2 = this.find(t2);
          (0, h.errorHandle)(e2, `Can't find [${t2}] from the [setting]`);
          const r2 = e2.$parentItem ? e2.$parentItem.selector : this.option;
          return r2.splice(r2.indexOf(e2), 1), this.option = g.makeRecursion(this.option), this.destroy(), this.render(this.option), this.option;
        }
        update(t2) {
          const e2 = this.find(t2.name);
          return e2 ? (Object.assign(e2, t2), this.option = g.makeRecursion(this.option), this.destroy(), this.render(this.option)) : this.add(t2), this.option;
        }
        add(t2) {
          return this.option.push(t2), this.option = g.makeRecursion(this.option), this.destroy(), this.render(this.option), this.option;
        }
        creatHeader(t2) {
          const { icons: e2, proxy: r2, constructor: a2 } = this.art, o2 = (0, m.createElement)("div");
          (0, m.setStyle)(o2, "height", `${a2.SETTING_ITEM_HEIGHT}px`), (0, m.addClass)(o2, "art-setting-item"), (0, m.addClass)(o2, "art-setting-item-back");
          const n2 = (0, m.append)(o2, '<div class="art-setting-item-left"></div>'), i2 = (0, m.createElement)("div");
          (0, m.addClass)(i2, "art-setting-item-left-icon"), (0, m.append)(i2, e2.arrowLeft), (0, m.append)(n2, i2), (0, m.append)(n2, t2.$parentItem.html);
          const s2 = r2(o2, "click", () => this.render(t2.$parentList));
          return this.events.push(s2), o2;
        }
        creatItem(t2, e2) {
          const { icons: r2, proxy: a2, constructor: o2 } = this.art, n2 = (0, m.createElement)("div");
          (0, m.addClass)(n2, "art-setting-item"), (0, m.setStyle)(n2, "height", `${o2.SETTING_ITEM_HEIGHT}px`), (0, m.isStringOrNumber)(e2.name) && (n2.dataset.name = e2.name), (0, m.isStringOrNumber)(e2.value) && (n2.dataset.value = e2.value);
          const i2 = (0, m.append)(n2, '<div class="art-setting-item-left"></div>'), s2 = (0, m.append)(n2, '<div class="art-setting-item-right"></div>'), l2 = (0, m.createElement)("div");
          switch ((0, m.addClass)(l2, "art-setting-item-left-icon"), t2) {
            case "switch":
            case "range":
              (0, m.append)(l2, (0, m.isStringOrNumber)(e2.icon) || e2.icon instanceof Element ? e2.icon : r2.config);
              break;
            case "selector":
              e2.selector && e2.selector.length ? (0, m.append)(l2, (0, m.isStringOrNumber)(e2.icon) || e2.icon instanceof Element ? e2.icon : r2.config) : (0, m.append)(l2, r2.check);
          }
          (0, m.append)(i2, l2), e2.$icon = l2, (0, m.def)(e2, "icon", { configurable: true, get: () => l2.innerHTML, set(t3) {
            (0, m.isStringOrNumber)(t3) && (l2.innerHTML = t3);
          } });
          const c2 = (0, m.createElement)("div");
          (0, m.addClass)(c2, "art-setting-item-left-text"), (0, m.append)(c2, e2.html || ""), (0, m.append)(i2, c2), e2.$html = c2, (0, m.def)(e2, "html", { configurable: true, get: () => c2.innerHTML, set(t3) {
            (0, m.isStringOrNumber)(t3) && (c2.innerHTML = t3);
          } });
          const u2 = (0, m.createElement)("div");
          switch ((0, m.addClass)(u2, "art-setting-item-right-tooltip"), (0, m.append)(u2, e2.tooltip || ""), (0, m.append)(s2, u2), e2.$tooltip = u2, (0, m.def)(e2, "tooltip", { configurable: true, get: () => u2.innerHTML, set(t3) {
            (0, m.isStringOrNumber)(t3) && (u2.innerHTML = t3);
          } }), t2) {
            case "switch": {
              const t3 = (0, m.createElement)("div");
              (0, m.addClass)(t3, "art-setting-item-right-icon");
              const a3 = (0, m.append)(t3, r2.switchOn), o3 = (0, m.append)(t3, r2.switchOff);
              (0, m.setStyle)(e2.switch ? o3 : a3, "display", "none"), (0, m.append)(s2, t3), e2.$switch = e2.switch, (0, m.def)(e2, "switch", { configurable: true, get: () => e2.$switch, set(t4) {
                e2.$switch = t4, t4 ? ((0, m.setStyle)(o3, "display", "none"), (0, m.setStyle)(a3, "display", null)) : ((0, m.setStyle)(o3, "display", null), (0, m.setStyle)(a3, "display", "none"));
              } });
              break;
            }
            case "range":
              {
                const t3 = (0, m.createElement)("div");
                (0, m.addClass)(t3, "art-setting-item-right-icon");
                const r3 = (0, m.append)(t3, '<input type="range">');
                r3.value = e2.range[0] || 0, r3.min = e2.range[1] || 0, r3.max = e2.range[2] || 10, r3.step = e2.range[3] || 1, (0, m.addClass)(r3, "art-setting-range"), (0, m.append)(s2, t3), e2.$range = r3, (0, m.def)(e2, "range", { configurable: true, get: () => r3.valueAsNumber, set(t4) {
                  r3.value = Number(t4);
                } });
              }
              break;
            case "selector":
              if (e2.selector && e2.selector.length) {
                const t3 = (0, m.createElement)("div");
                (0, m.addClass)(t3, "art-setting-item-right-icon"), (0, m.append)(t3, r2.arrowRight), (0, m.append)(s2, t3);
              }
          }
          switch (t2) {
            case "switch":
              if (e2.onSwitch) {
                const t3 = a2(n2, "click", async (t4) => {
                  e2.switch = await e2.onSwitch.call(this.art, e2, n2, t4);
                });
                this.events.push(t3);
              }
              break;
            case "range":
              if (e2.$range) {
                if (e2.onRange) {
                  const t3 = a2(e2.$range, "change", async (t4) => {
                    e2.tooltip = await e2.onRange.call(this.art, e2, n2, t4);
                  });
                  this.events.push(t3);
                }
                if (e2.onChange) {
                  const t3 = a2(e2.$range, "input", async (t4) => {
                    e2.tooltip = await e2.onChange.call(this.art, e2, n2, t4);
                  });
                  this.events.push(t3);
                }
              }
              break;
            case "selector": {
              const t3 = a2(n2, "click", async (t4) => {
                if (e2.selector && e2.selector.length)
                  this.render(e2.selector, e2.width);
                else {
                  (0, m.inverseClass)(n2, "art-current");
                  for (let t5 = 0; t5 < e2.$parentItem.selector.length; t5++) {
                    const r3 = e2.$parentItem.selector[t5];
                    r3.default = r3 === e2;
                  }
                  if (e2.$parentList && this.render(e2.$parentList), e2.$parentItem && e2.$parentItem.onSelect) {
                    const r3 = await e2.$parentItem.onSelect.call(this.art, e2, n2, t4);
                    e2.$parentItem.$tooltip && (0, m.isStringOrNumber)(r3) && (e2.$parentItem.$tooltip.innerHTML = r3);
                  }
                }
              });
              this.events.push(t3), e2.default && (0, m.addClass)(n2, "art-current");
            }
          }
          return n2;
        }
        updateStyle(t2) {
          const { controls: e2, constructor: r2, template: { $player: a2, $setting: o2 } } = this.art;
          if (e2.setting && !m.isMobile) {
            const n2 = t2 || r2.SETTING_WIDTH, { left: i2, width: s2 } = e2.setting.getBoundingClientRect(), { left: l2, width: c2 } = a2.getBoundingClientRect(), u2 = i2 - l2 + s2 / 2 - n2 / 2;
            u2 + n2 > c2 ? ((0, m.setStyle)(o2, "left", null), (0, m.setStyle)(o2, "right", null)) : ((0, m.setStyle)(o2, "left", `${u2}px`), (0, m.setStyle)(o2, "right", "auto"));
          }
        }
        render(t2, e2) {
          const { constructor: r2 } = this.art;
          if (this.cache.has(t2)) {
            const e3 = this.cache.get(t2);
            (0, m.inverseClass)(e3, "art-current"), (0, m.setStyle)(this.$parent, "width", `${e3.dataset.width}px`), (0, m.setStyle)(this.$parent, "height", `${e3.dataset.height}px`), this.updateStyle(Number(e3.dataset.width));
          } else {
            const a2 = (0, m.createElement)("div");
            (0, m.addClass)(a2, "art-setting-panel"), a2.dataset.width = e2 || r2.SETTING_WIDTH, a2.dataset.height = t2.length * r2.SETTING_ITEM_HEIGHT, t2[0] && t2[0].$parentItem && ((0, m.append)(a2, this.creatHeader(t2[0])), a2.dataset.height = Number(a2.dataset.height) + r2.SETTING_ITEM_HEIGHT);
            for (let e3 = 0; e3 < t2.length; e3++) {
              const r3 = t2[e3];
              (0, m.has)(r3, "switch") ? (0, m.append)(a2, this.creatItem("switch", r3)) : (0, m.has)(r3, "range") ? (0, m.append)(a2, this.creatItem("range", r3)) : (0, m.append)(a2, this.creatItem("selector", r3));
            }
            (0, m.append)(this.$parent, a2), this.cache.set(t2, a2), (0, m.inverseClass)(a2, "art-current"), (0, m.setStyle)(this.$parent, "width", `${a2.dataset.width}px`), (0, m.setStyle)(this.$parent, "height", `${a2.dataset.height}px`), this.updateStyle(Number(a2.dataset.width)), t2[0] && t2[0].$parentItem && t2[0].$parentItem.mounted && t2[0].$parentItem.mounted.call(this.art, a2, t2[0].$parentItem);
          }
        }
      }
      r.default = g;
    }, { "./flip": "bNOaj", "./aspectRatio": "5lAsp", "./playbackRate": "e6hsR", "./subtitleOffset": "fFNEr", "../utils/component": "guki8", "../utils/error": "2nFlF", "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], bNOaj: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { i18n: e2, icons: r2, constructor: { SETTING_ITEM_WIDTH: o, FLIP: n } } = t2;
        function i(t3, r3, o2) {
          r3 && (r3.innerText = e2.get((0, a.capitalize)(o2)));
          const n2 = (0, a.queryAll)(".art-setting-item", t3).find((t4) => t4.dataset.value === o2);
          n2 && (0, a.inverseClass)(n2, "art-current");
        }
        return { width: o, name: "flip", html: e2.get("Video Flip"), tooltip: e2.get((0, a.capitalize)(t2.flip)), icon: r2.flip, selector: n.map((r3) => ({ value: r3, name: `aspect-ratio-${r3}`, default: r3 === t2.flip, html: e2.get((0, a.capitalize)(r3)) })), onSelect: (e3) => (t2.flip = e3.value, e3.html), mounted: (e3, r3) => {
          i(e3, r3.$tooltip, t2.flip), t2.on("flip", () => {
            i(e3, r3.$tooltip, t2.flip);
          });
        } };
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "5lAsp": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { i18n: e2, icons: r2, constructor: { SETTING_ITEM_WIDTH: o, ASPECT_RATIO: n } } = t2;
        function i(t3) {
          return "default" === t3 ? e2.get("Default") : t3;
        }
        function s(t3, e3, r3) {
          e3 && (e3.innerText = i(r3));
          const o2 = (0, a.queryAll)(".art-setting-item", t3).find((t4) => t4.dataset.value === r3);
          o2 && (0, a.inverseClass)(o2, "art-current");
        }
        return { width: o, name: "aspect-ratio", html: e2.get("Aspect Ratio"), icon: r2.aspectRatio, tooltip: i(t2.aspectRatio), selector: n.map((e3) => ({ value: e3, name: `aspect-ratio-${e3}`, default: e3 === t2.aspectRatio, html: i(e3) })), onSelect: (e3) => (t2.aspectRatio = e3.value, e3.html), mounted: (e3, r3) => {
          s(e3, r3.$tooltip, t2.aspectRatio), t2.on("aspectRatio", () => {
            s(e3, r3.$tooltip, t2.aspectRatio);
          });
        } };
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], e6hsR: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { i18n: e2, icons: r2, constructor: { SETTING_ITEM_WIDTH: o, PLAYBACK_RATE: n } } = t2;
        function i(t3) {
          return 1 === t3 ? e2.get("Normal") : t3.toFixed(1);
        }
        function s(t3, e3, r3) {
          e3 && (e3.innerText = i(r3));
          const o2 = (0, a.queryAll)(".art-setting-item", t3).find((t4) => Number(t4.dataset.value) === r3);
          o2 && (0, a.inverseClass)(o2, "art-current");
        }
        return { width: o, name: "playback-rate", html: e2.get("Play Speed"), tooltip: i(t2.playbackRate), icon: r2.playbackRate, selector: n.map((e3) => ({ value: e3, name: `aspect-ratio-${e3}`, default: e3 === t2.playbackRate, html: i(e3) })), onSelect: (e3) => (t2.playbackRate = e3.value, e3.html), mounted: (e3, r3) => {
          s(e3, r3.$tooltip, t2.playbackRate), t2.on("video:ratechange", () => {
            s(e3, r3.$tooltip, t2.playbackRate);
          });
        } };
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], fFNEr: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(t2) {
        const { i18n: e2, icons: r2, constructor: a } = t2;
        return { width: a.SETTING_ITEM_WIDTH, name: "subtitle-offset", html: e2.get("Subtitle Offset"), icon: r2.subtitle, tooltip: "0s", range: [0, -5, 5, 0.1], onChange: (e3) => (t2.subtitleOffset = e3.range, e3.range + "s") };
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], f2Thp: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      r.default = class {
        constructor() {
          this.name = "artplayer_settings", this.settings = {};
        }
        get(t2) {
          try {
            const e2 = JSON.parse(window.localStorage.getItem(this.name)) || {};
            return t2 ? e2[t2] : e2;
          } catch (e2) {
            return t2 ? this.settings[t2] : this.settings;
          }
        }
        set(t2, e2) {
          try {
            const r2 = Object.assign({}, this.get(), { [t2]: e2 });
            window.localStorage.setItem(this.name, JSON.stringify(r2));
          } catch (r2) {
            this.settings[t2] = e2;
          }
        }
        del(t2) {
          try {
            const e2 = this.get();
            delete e2[t2], window.localStorage.setItem(this.name, JSON.stringify(e2));
          } catch (e2) {
            delete this.settings[t2];
          }
        }
        clear() {
          try {
            window.localStorage.removeItem(this.name);
          } catch (t2) {
            this.settings = {};
          }
        }
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "96ThS": [function(t, e, r) {
      var a = t("@parcel/transformer-js/src/esmodule-helpers.js");
      a.defineInteropFlag(r);
      var o = t("../utils"), n = t("./miniProgressBar"), i = a.interopDefault(n), s = t("./autoOrientation"), l = a.interopDefault(s), c = t("./autoPlayback"), u = a.interopDefault(c), p = t("./fastForward"), d = a.interopDefault(p), f = t("./lock"), h = a.interopDefault(f);
      r.default = class {
        constructor(t2) {
          this.art = t2, this.id = 0;
          const { option: e2 } = t2;
          e2.miniProgressBar && !e2.isLive && this.add(i.default), e2.lock && o.isMobile && this.add(h.default), e2.autoPlayback && !e2.isLive && this.add(u.default), e2.autoOrientation && o.isMobile && this.add(l.default), e2.fastForward && o.isMobile && !e2.isLive && this.add(d.default);
          for (let t3 = 0; t3 < e2.plugins.length; t3++)
            this.add(e2.plugins[t3]);
        }
        add(t2) {
          this.id += 1;
          const e2 = t2.call(this.art, this.art);
          return e2 instanceof Promise ? e2.then((e3) => this.next(t2, e3)) : this.next(t2, e2);
        }
        next(t2, e2) {
          const r2 = e2 && e2.name || t2.name || `plugin${this.id}`;
          return (0, o.errorHandle)(!(0, o.has)(this, r2), `Cannot add a plugin that already has the same name: ${r2}`), (0, o.def)(this, r2, { value: e2 }), this;
        }
      };
    }, { "../utils": "h3rH9", "./miniProgressBar": "iBx4M", "./autoOrientation": "2O9qO", "./autoPlayback": "iiOc1", "./fastForward": "d9NUE", "./lock": "5dnKh", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], iBx4M: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        return t2.on("control", (e2) => {
          e2 ? (0, a.removeClass)(t2.template.$player, "art-mini-progress-bar") : (0, a.addClass)(t2.template.$player, "art-mini-progress-bar");
        }), { name: "mini-progress-bar" };
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "2O9qO": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { constructor: e2, template: { $player: r2, $video: o } } = t2;
        return t2.on("fullscreenWeb", (n) => {
          if (n) {
            const { videoWidth: n2, videoHeight: i } = o, { clientWidth: s, clientHeight: l } = document.documentElement;
            (n2 > i && s < l || n2 < i && s > l) && setTimeout(() => {
              (0, a.setStyle)(r2, "width", `${l}px`), (0, a.setStyle)(r2, "height", `${s}px`), (0, a.setStyle)(r2, "transform-origin", "0 0"), (0, a.setStyle)(r2, "transform", `rotate(90deg) translate(0, -${s}px)`), (0, a.addClass)(r2, "art-auto-orientation"), t2.isRotate = true, t2.emit("resize");
            }, e2.AUTO_ORIENTATION_TIME);
          } else
            (0, a.hasClass)(r2, "art-auto-orientation") && ((0, a.removeClass)(r2, "art-auto-orientation"), t2.isRotate = false, t2.emit("resize"));
        }), t2.on("fullscreen", async (t3) => {
          const e3 = screen.orientation.type;
          if (t3) {
            const { videoWidth: t4, videoHeight: n } = o, { clientWidth: i, clientHeight: s } = document.documentElement;
            if (t4 > n && i < s || t4 < n && i > s) {
              const t5 = e3.startsWith("portrait") ? "landscape" : "portrait";
              await screen.orientation.lock(t5), (0, a.addClass)(r2, "art-auto-orientation-fullscreen");
            }
          } else
            (0, a.hasClass)(r2, "art-auto-orientation-fullscreen") && (await screen.orientation.lock(e3), (0, a.removeClass)(r2, "art-auto-orientation-fullscreen"));
        }), { name: "autoOrientation", get state() {
          return (0, a.hasClass)(r2, "art-auto-orientation");
        } };
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], iiOc1: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { i18n: e2, icons: r2, storage: o, constructor: n, proxy: i, template: { $poster: s } } = t2, l = t2.layers.add({ name: "auto-playback", html: '<div class="art-auto-playback-close"></div><div class="art-auto-playback-last"></div><div class="art-auto-playback-jump"></div>' }), c = (0, a.query)(".art-auto-playback-last", l), u = (0, a.query)(".art-auto-playback-jump", l), p = (0, a.query)(".art-auto-playback-close", l);
        return t2.on("video:timeupdate", () => {
          if (t2.playing) {
            const e3 = o.get("times") || {}, r3 = Object.keys(e3);
            r3.length > n.AUTO_PLAYBACK_MAX && delete e3[r3[0]], e3[t2.option.id || t2.option.url] = t2.currentTime, o.set("times", e3);
          }
        }), t2.on("ready", () => {
          const d = (o.get("times") || {})[t2.option.id || t2.option.url];
          d && d >= n.AUTO_PLAYBACK_MIN && ((0, a.append)(p, r2.close), (0, a.setStyle)(l, "display", "flex"), c.innerText = `${e2.get("Last Seen")} ${(0, a.secondToTime)(d)}`, u.innerText = e2.get("Jump Play"), i(p, "click", () => {
            (0, a.setStyle)(l, "display", "none");
          }), i(u, "click", () => {
            t2.seek = d, t2.play(), (0, a.setStyle)(s, "display", "none"), (0, a.setStyle)(l, "display", "none");
          }), t2.once("video:timeupdate", () => {
            setTimeout(() => {
              (0, a.setStyle)(l, "display", "none");
            }, n.AUTO_PLAYBACK_TIMEOUT);
          }));
        }), { name: "auto-playback", get times() {
          return o.get("times") || {};
        }, clear: () => o.del("times"), delete(t3) {
          const e3 = o.get("times") || {};
          return delete e3[t3], o.set("times", e3), e3;
        } };
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], d9NUE: [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { constructor: e2, proxy: r2, template: { $player: o, $video: n } } = t2;
        let i = null, s = false, l = 1;
        const c = () => {
          clearTimeout(i), s && (s = false, t2.playbackRate = l, (0, a.removeClass)(o, "art-fast-forward"));
        };
        return r2(n, "touchstart", (r3) => {
          1 === r3.touches.length && t2.playing && !t2.isLock && (i = setTimeout(() => {
            s = true, l = t2.playbackRate, t2.playbackRate = e2.FAST_FORWARD_VALUE, (0, a.addClass)(o, "art-fast-forward");
          }, e2.FAST_FORWARD_TIME));
        }), r2(document, "touchmove", c), r2(document, "touchend", c), { name: "fastForward", get state() {
          return (0, a.hasClass)(o, "art-fast-forward");
        } };
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }], "5dnKh": [function(t, e, r) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
      var a = t("../utils");
      r.default = function(t2) {
        const { layers: e2, icons: r2, template: { $player: o } } = t2;
        return e2.add({ name: "lock", mounted(e3) {
          const o2 = (0, a.append)(e3, r2.lock), n = (0, a.append)(e3, r2.unlock);
          (0, a.setStyle)(o2, "display", "none"), t2.on("lock", (t3) => {
            t3 ? ((0, a.setStyle)(o2, "display", "inline-flex"), (0, a.setStyle)(n, "display", "none")) : ((0, a.setStyle)(o2, "display", "none"), (0, a.setStyle)(n, "display", "inline-flex"));
          });
        }, click() {
          (0, a.hasClass)(o, "art-lock") ? ((0, a.removeClass)(o, "art-lock"), this.isLock = false, t2.emit("lock", false)) : ((0, a.addClass)(o, "art-lock"), this.isLock = true, t2.emit("lock", true));
        } }), { name: "lock", get state() {
          return (0, a.hasClass)(o, "art-lock");
        } };
      };
    }, { "../utils": "h3rH9", "@parcel/transformer-js/src/esmodule-helpers.js": "guZOB" }] }, ["abjMI"], "abjMI", "parcelRequireb749");
  }
});
export default require_artplayer();
/*! Bundled license information:

artplayer/dist/artplayer.js:
  (*!
   * artplayer.js v5.1.1
   * Github: https://github.com/zhw2590582/ArtPlayer
   * (c) 2017-2024 Harvey Zack
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=artplayer.js.map
