import {
  __commonJS
} from "./chunk-LQ2VYIYD.js";

// node_modules/.pnpm/artplayer-plugin-hls-quality@2.0.0/node_modules/artplayer-plugin-hls-quality/dist/artplayer-plugin-hls-quality.js
var require_artplayer_plugin_hls_quality = __commonJS({
  "node_modules/.pnpm/artplayer-plugin-hls-quality@2.0.0/node_modules/artplayer-plugin-hls-quality/dist/artplayer-plugin-hls-quality.js"(exports, module) {
    !function(e, t, n, o, r) {
      var l = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, i = "function" == typeof l[o] && l[o], u = i.cache || {}, s = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);
      function a(t2, n2) {
        if (!u[t2]) {
          if (!e[t2]) {
            var r2 = "function" == typeof l[o] && l[o];
            if (!n2 && r2)
              return r2(t2, true);
            if (i)
              return i(t2, true);
            if (s && "string" == typeof t2)
              return s(t2);
            var f2 = new Error("Cannot find module '" + t2 + "'");
            throw f2.code = "MODULE_NOT_FOUND", f2;
          }
          d.resolve = function(n3) {
            var o2 = e[t2][1][n3];
            return null != o2 ? o2 : n3;
          }, d.cache = {};
          var c2 = u[t2] = new a.Module(t2);
          e[t2][0].call(c2.exports, d, c2, c2.exports, this);
        }
        return u[t2].exports;
        function d(e2) {
          var t3 = d.resolve(e2);
          return false === t3 ? {} : a(t3);
        }
      }
      a.isParcelRequire = true, a.Module = function(e2) {
        this.id = e2, this.bundle = a, this.exports = {};
      }, a.modules = e, a.cache = u, a.parent = i, a.register = function(t2, n2) {
        e[t2] = [function(e2, t3) {
          t3.exports = n2;
        }, {}];
      }, Object.defineProperty(a, "root", { get: function() {
        return l[o];
      } }), l[o] = a;
      for (var f = 0; f < t.length; f++)
        a(t[f]);
      if (n) {
        var c = a(n);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd && define(function() {
          return c;
        });
      }
    }({ eEHR6: [function(e, t, n) {
      var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
      o.defineInteropFlag(n);
      var r = e("bundle-text:./image.svg"), l = o.interopDefault(r);
      function i(e2) {
        return (t2) => {
          !function(e3) {
            const { version: t3, utils: { errorHandle: n3 } } = e3.constructor, o3 = t3.split(".").map(Number);
            n3(o3[0] + o3[1] / 100 >= 5, `Artplayer.js@${t3} is not compatible the artplayerPluginHlsQuality@${i.version}. Please update it to version Artplayer.js@5.x.x`);
          }(t2);
          const { $video: n2 } = t2.template, { errorHandle: o2 } = t2.constructor.utils;
          function r2() {
            const r3 = t2.hls || window.hls;
            o2(r3 && r3.media === n2, 'Cannot find instance of HLS from "art.hls" or "window.hls"');
            const i2 = e2.auto || "Auto", u = e2.title || "Quality", s = e2.getResolution || ((e3) => (e3.height || "Unknown ") + "P"), a = r3.levels[r3.currentLevel], f = a ? s(a) : i2;
            e2.control && t2.controls.update({ name: "hls-quality", position: "right", html: f, style: { padding: "0 10px" }, selector: r3.levels.map((e3, t3) => ({ html: s(e3), level: e3.level || t3, default: a === e3 })), onSelect: (e3) => (r3.currentLevel = e3.level, t2.loading.show = true, e3.html) }), e2.setting && t2.setting.update({ name: "hls-quality", tooltip: f, html: u, icon: l.default, width: 200, selector: r3.levels.map((e3, t3) => ({ html: s(e3), level: e3.level || t3, default: a === e3 })), onSelect: function(e3) {
              return r3.currentLevel = e3.level, t2.loading.show = true, e3.html;
            } });
          }
          return t2.on("ready", r2), t2.on("restart", r2), { name: "artplayerPluginHlsQuality" };
        };
      }
      n.default = i, i.env = "production", i.version = "2.0.0", i.build = "2023-04-23 18:13:04", "undefined" != typeof window && (window.artplayerPluginHlsQuality = i);
    }, { "bundle-text:./image.svg": "5VXix", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "5VXix": [function(e, t, n) {
      t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M870.4 176H153.6c-49.472 0-89.6 40.128-89.6 89.6v492.736c0 49.472 40.128 89.6 89.6 89.6h716.8c49.472 0 89.6-40.128 89.6-89.6V265.6c0-49.472-40.128-89.6-89.6-89.6zm0 492.8h-44.8s-29.696-65.792-89.6-89.6-134.4 89.6-134.4 89.6-66.56-71.808-134.4-224S153.6 624 153.6 624V265.6h716.8v403.2zM668.8 489.6c37.056 0 67.2-30.144 67.2-67.264 0-37.056-30.144-67.2-67.2-67.2-37.12.064-67.2 30.208-67.2 67.264 0 37.12 30.08 67.2 67.2 67.2z" fill="#fff"/></svg>';
    }, {}], "9pCYc": [function(e, t, n) {
      n.interopDefault = function(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }, n.defineInteropFlag = function(e2) {
        Object.defineProperty(e2, "__esModule", { value: true });
      }, n.exportAll = function(e2, t2) {
        return Object.keys(e2).forEach(function(n2) {
          "default" === n2 || "__esModule" === n2 || t2.hasOwnProperty(n2) || Object.defineProperty(t2, n2, { enumerable: true, get: function() {
            return e2[n2];
          } });
        }), t2;
      }, n.export = function(e2, t2, n2) {
        Object.defineProperty(e2, t2, { enumerable: true, get: n2 });
      };
    }, {}] }, ["eEHR6"], "eEHR6", "parcelRequire4dc0");
  }
});
export default require_artplayer_plugin_hls_quality();
/*! Bundled license information:

artplayer-plugin-hls-quality/dist/artplayer-plugin-hls-quality.js:
  (*!
   * artplayer-plugin-hls-quality.js v2.0.0
   * Github: https://github.com/zhw2590582/ArtPlayer
   * (c) 2017-2023 Harvey Zack
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=artplayer-plugin-hls-quality.js.map
