import {
  __commonJS
} from "./chunk-LQ2VYIYD.js";

// node_modules/.pnpm/artplayer-plugin-danmuku@5.0.1/node_modules/artplayer-plugin-danmuku/dist/artplayer-plugin-danmuku.js
var require_artplayer_plugin_danmuku = __commonJS({
  "node_modules/.pnpm/artplayer-plugin-danmuku@5.0.1/node_modules/artplayer-plugin-danmuku/dist/artplayer-plugin-danmuku.js"(exports, module) {
    !function(t, e, n, i, r) {
      var a = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, s = "function" == typeof a[i] && a[i], o = s.cache || {}, l = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);
      function u(e2, n2) {
        if (!o[e2]) {
          if (!t[e2]) {
            var r2 = "function" == typeof a[i] && a[i];
            if (!n2 && r2)
              return r2(e2, true);
            if (s)
              return s(e2, true);
            if (l && "string" == typeof e2)
              return l(e2);
            var d2 = new Error("Cannot find module '" + e2 + "'");
            throw d2.code = "MODULE_NOT_FOUND", d2;
          }
          p.resolve = function(n3) {
            var i2 = t[e2][1][n3];
            return null != i2 ? i2 : n3;
          }, p.cache = {};
          var m2 = o[e2] = new u.Module(e2);
          t[e2][0].call(m2.exports, p, m2, m2.exports, this);
        }
        return o[e2].exports;
        function p(t2) {
          var e3 = p.resolve(t2);
          return false === e3 ? {} : u(e3);
        }
      }
      u.isParcelRequire = true, u.Module = function(t2) {
        this.id = t2, this.bundle = u, this.exports = {};
      }, u.modules = t, u.cache = o, u.parent = s, u.register = function(e2, n2) {
        t[e2] = [function(t2, e3) {
          e3.exports = n2;
        }, {}];
      }, Object.defineProperty(u, "root", { get: function() {
        return a[i];
      } }), a[i] = u;
      for (var d = 0; d < e.length; d++)
        u(e[d]);
      if (n) {
        var m = u(n);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = m : "function" == typeof define && define.amd && define(function() {
          return m;
        });
      }
    }({ bgm6t: [function(t, e, n) {
      var i = t("@parcel/transformer-js/src/esmodule-helpers.js");
      i.defineInteropFlag(n);
      var r = t("./danmuku"), a = i.interopDefault(r), s = t("./setting"), o = i.interopDefault(s), l = t("./heatmap"), u = i.interopDefault(l);
      function d(t2) {
        return (e2) => {
          !function(t3) {
            const { version: e3, utils: { errorHandle: n3 } } = t3.constructor, i2 = e3.split(".").map(Number);
            n3(i2[0] + i2[1] / 100 >= 5, `Artplayer.js@${e3} 不兼容该弹幕库，请更新到 Artplayer.js@5.x.x 版本以上`);
          }(e2);
          const n2 = new (0, a.default)(e2, t2);
          return (0, o.default)(e2, n2), t2.heatmap && !e2.option.isLive && (0, u.default)(e2, n2, t2.heatmap), { name: "artplayerPluginDanmuku", emit: n2.emit.bind(n2), load: n2.load.bind(n2), config: n2.config.bind(n2), hide: n2.hide.bind(n2), show: n2.show.bind(n2), reset: n2.reset.bind(n2), get option() {
            return n2.option;
          }, get isHide() {
            return n2.isHide;
          }, get isStop() {
            return n2.isStop;
          } };
        };
      }
      n.default = d, d.env = "production", d.version = "5.0.1", d.build = "2023-05-03 11:57:31", "undefined" != typeof window && (window.artplayerPluginDanmuku = d);
    }, { "./danmuku": "4ns48", "./setting": "lO8OT", "./heatmap": "8AxLD", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "4ns48": [function(t, e, n) {
      var i = t("@parcel/transformer-js/src/esmodule-helpers.js");
      i.defineInteropFlag(n);
      var r = t("./bilibili"), a = t("./getDanmuTop"), s = i.interopDefault(a);
      class o {
        constructor(e2, n2) {
          const { constructor: i2, template: r2 } = e2;
          if (this.utils = i2.utils, this.validator = i2.validator, this.$danmuku = r2.$danmuku, this.$player = r2.$player, this.art = e2, this.danmus = [], this.queue = [], this.option = {}, this.$refs = [], this.isStop = false, this.isHide = false, this.timer = null, this.config(n2), this.option.useWorker)
            try {
              this.worker = new Worker(t("12ceab24749100d0"));
            } catch (t2) {
            }
          this.start = this.start.bind(this), this.stop = this.stop.bind(this), this.reset = this.reset.bind(this), this.destroy = this.destroy.bind(this), e2.on("video:play", this.start), e2.on("video:playing", this.start), e2.on("video:pause", this.stop), e2.on("video:waiting", this.stop), e2.on("resize", this.reset), e2.on("destroy", this.destroy), this.load();
        }
        static get option() {
          return { danmuku: [], speed: 5, margin: ["2%", "25%"], opacity: 1, color: "#FFFFFF", mode: 0, fontSize: 25, filter: () => true, antiOverlap: true, useWorker: true, synchronousPlayback: false, lockTime: 5, maxLength: 100, minWidth: 200, maxWidth: 400, mount: void 0, theme: "dark", heatmap: false, beforeEmit: () => true };
        }
        static get scheme() {
          return { danmuku: "array|function|string", speed: "number", margin: "array", opacity: "number", color: "string", mode: "number", fontSize: "number|string", filter: "function", antiOverlap: "boolean", useWorker: "boolean", synchronousPlayback: "boolean", lockTime: "number", maxLength: "number", minWidth: "number", maxWidth: "number", mount: "undefined|htmldivelement", theme: "string", heatmap: "object|boolean", beforeEmit: "function" };
        }
        get isRotate() {
          return this.art.plugins.autoOrientation && this.art.plugins.autoOrientation.state;
        }
        get marginTop() {
          const { clamp: t2 } = this.utils, e2 = this.option.margin[0], { clientHeight: n2 } = this.$player;
          if ("number" == typeof e2)
            return t2(e2, 0, n2);
          if ("string" == typeof e2 && e2.endsWith("%")) {
            return t2(n2 * (parseFloat(e2) / 100), 0, n2);
          }
          return o.option.margin[0];
        }
        get marginBottom() {
          const { clamp: t2 } = this.utils, e2 = this.option.margin[1], { clientHeight: n2 } = this.$player;
          if ("number" == typeof e2)
            return t2(e2, 0, n2);
          if ("string" == typeof e2 && e2.endsWith("%")) {
            return t2(n2 * (parseFloat(e2) / 100), 0, n2);
          }
          return o.option.margin[1];
        }
        filter(t2, e2) {
          return this.queue.filter((e3) => e3.$state === t2).map(e2);
        }
        getLeft(t2) {
          const e2 = t2.getBoundingClientRect();
          return this.isRotate ? e2.top : e2.left;
        }
        getRef() {
          const t2 = this.$refs.pop();
          if (t2)
            return t2;
          const e2 = document.createElement("div");
          return e2.style.cssText = '\n            user-select: none;\n            position: absolute;\n            white-space: pre;\n            pointer-events: none;\n            perspective: 500px;\n            display: inline-block;\n            will-change: transform;\n            font-weight: normal;\n            line-height: 1.125;\n            visibility: hidden;\n            font-family: SimHei, "Microsoft JhengHei", Arial, Helvetica, sans-serif;\n            text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;\n        ', e2;
        }
        getReady() {
          const { currentTime: t2 } = this.art;
          return this.queue.filter((e2) => "ready" === e2.$state || "wait" === e2.$state && t2 + 0.1 >= e2.time && e2.time >= t2 - 0.1);
        }
        getEmits() {
          const t2 = [], { clientWidth: e2 } = this.$player, n2 = this.getLeft(this.$player);
          return this.filter("emit", (i2) => {
            const r2 = i2.$ref.offsetTop, a2 = this.getLeft(i2.$ref) - n2, s2 = i2.$ref.clientHeight, o2 = i2.$ref.clientWidth, l = a2 + o2, u = e2 - l, d = l / i2.$restTime, m = {};
            m.top = r2, m.left = a2, m.height = s2, m.width = o2, m.right = u, m.speed = d, m.distance = l, m.time = i2.$restTime, m.mode = i2.mode, t2.push(m);
          }), t2;
        }
        getFontSize(t2) {
          const { clamp: e2 } = this.utils, { clientHeight: n2 } = this.$player;
          if ("number" == typeof t2)
            return e2(t2, 12, n2);
          if ("string" == typeof t2 && t2.endsWith("%")) {
            return e2(n2 * (parseFloat(t2) / 100), 12, n2);
          }
          return o.option.fontSize;
        }
        postMessage(t2 = {}) {
          return new Promise((e2) => {
            if (this.option.useWorker && this.worker && this.worker.postMessage)
              t2.id = Date.now(), this.worker.postMessage(t2), this.worker.onmessage = (n2) => {
                const { data: i2 } = n2;
                i2.id === t2.id && e2(i2);
              };
            else {
              const n2 = (0, s.default)(t2);
              e2({ top: n2 });
            }
          });
        }
        async load() {
          try {
            "function" == typeof this.option.danmuku ? this.danmus = await this.option.danmuku() : "function" == typeof this.option.danmuku.then ? this.danmus = await this.option.danmuku : "string" == typeof this.option.danmuku ? this.danmus = await (0, r.bilibiliDanmuParseFromUrl)(this.option.danmuku) : this.danmus = this.option.danmuku, this.utils.errorHandle(Array.isArray(this.danmus), "Danmuku need return an array as result"), this.art.emit("artplayerPluginDanmuku:loaded", this.danmus), this.queue = [], this.$danmuku.innerText = "", this.danmus.forEach((t2) => this.emit(t2));
          } catch (t2) {
            throw this.art.emit("artplayerPluginDanmuku:error", t2), t2;
          }
          return this;
        }
        config(t2) {
          const { clamp: e2 } = this.utils;
          return this.option = Object.assign({}, o.option, this.option, t2), this.validator(this.option, o.scheme), this.option.speed = e2(this.option.speed, 1, 10), this.option.opacity = e2(this.option.opacity, 0, 1), this.option.lockTime = e2(Math.floor(this.option.lockTime), 0, 60), this.option.maxLength = e2(this.option.maxLength, 0, 500), this.option.minWidth = e2(this.option.minWidth, 0, 500), this.option.maxWidth = e2(this.option.maxWidth, 0, 1 / 0), t2.fontSize && (this.option.fontSize = this.getFontSize(this.option.fontSize), this.reset()), this.art.emit("artplayerPluginDanmuku:config", this.option), this;
        }
        makeWait(t2) {
          t2.$state = "wait", t2.$ref && (t2.$ref.style.visibility = "hidden", t2.$ref.style.marginLeft = "0px", t2.$ref.style.transform = "translateX(0px)", t2.$ref.style.transition = "transform 0s linear 0s", this.$refs.push(t2.$ref), t2.$ref = null);
        }
        continue() {
          const { clientWidth: t2 } = this.$player;
          return this.filter("stop", (e2) => {
            switch (e2.$state = "emit", e2.$lastStartTime = Date.now(), e2.mode) {
              case 0: {
                const n2 = t2 + e2.$ref.clientWidth;
                e2.$ref.style.transform = `translateX(${-n2}px)`, e2.$ref.style.transition = `transform ${e2.$restTime}s linear 0s`;
                break;
              }
            }
          }), this;
        }
        suspend() {
          const { clientWidth: t2 } = this.$player;
          return this.filter("emit", (e2) => {
            switch (e2.$state = "stop", e2.mode) {
              case 0: {
                const n2 = t2 - (this.getLeft(e2.$ref) - this.getLeft(this.$player));
                e2.$ref.style.transform = `translateX(${-n2}px)`, e2.$ref.style.transition = "transform 0s linear 0s";
                break;
              }
            }
          }), this;
        }
        reset() {
          return this.queue.forEach((t2) => this.makeWait(t2)), this;
        }
        update() {
          return this.timer = window.requestAnimationFrame(async () => {
            if (this.art.playing && !this.isHide) {
              this.filter("emit", (t3) => {
                const e3 = (Date.now() - t3.$lastStartTime) / 1e3;
                t3.$restTime -= e3, t3.$lastStartTime = Date.now(), t3.$restTime <= 0 && this.makeWait(t3);
              });
              const t2 = this.getReady(), { clientWidth: e2, clientHeight: n2 } = this.$player;
              for (let i2 = 0; i2 < t2.length; i2++) {
                const r2 = t2[i2];
                r2.$ref = this.getRef(), r2.$ref.innerText = r2.text, this.$danmuku.appendChild(r2.$ref), r2.$ref.style.left = `${e2}px`, r2.$ref.style.opacity = this.option.opacity, r2.$ref.style.fontSize = `${this.option.fontSize}px`, r2.$ref.style.color = r2.color, r2.$ref.style.border = r2.border ? `1px solid ${r2.color}` : null, r2.$ref.style.backgroundColor = r2.border ? "rgb(0 0 0 / 50%)" : null, r2.$ref.style.marginLeft = "0px", r2.$lastStartTime = Date.now(), r2.$restTime = this.option.synchronousPlayback && this.art.playbackRate ? this.option.speed / Number(this.art.playbackRate) : this.option.speed;
                const a2 = { mode: r2.mode, height: r2.$ref.clientHeight, speed: (e2 + r2.$ref.clientWidth) / r2.$restTime }, { top: s2 } = await this.postMessage({ target: a2, emits: this.getEmits(), antiOverlap: this.option.antiOverlap, clientWidth: e2, clientHeight: n2, marginBottom: this.marginBottom, marginTop: this.marginTop });
                if (r2.$ref)
                  if (this.isStop || void 0 === s2)
                    r2.$state = "ready", this.$refs.push(r2.$ref), r2.$ref = null;
                  else
                    switch (r2.$state = "emit", r2.$ref.style.visibility = "visible", r2.mode) {
                      case 0: {
                        r2.$ref.style.top = `${s2}px`;
                        const t3 = e2 + r2.$ref.clientWidth;
                        r2.$ref.style.transform = `translateX(${-t3}px)`, r2.$ref.style.transition = `transform ${r2.$restTime}s linear 0s`;
                        break;
                      }
                      case 1:
                        r2.$ref.style.left = "50%", r2.$ref.style.top = `${s2}px`, r2.$ref.style.marginLeft = `-${r2.$ref.clientWidth / 2}px`;
                    }
              }
            }
            this.isStop || this.update();
          }), this;
        }
        stop() {
          return this.isStop = true, this.suspend(), window.cancelAnimationFrame(this.timer), this.art.emit("artplayerPluginDanmuku:stop"), this;
        }
        start() {
          return this.isStop = false, this.continue(), this.update(), this.art.emit("artplayerPluginDanmuku:start"), this;
        }
        show() {
          return this.isHide = false, this.start(), this.$danmuku.style.display = "block", this.art.emit("artplayerPluginDanmuku:show"), this;
        }
        hide() {
          return this.isHide = true, this.stop(), this.queue.forEach((t2) => this.makeWait(t2)), this.$danmuku.style.display = "none", this.art.emit("artplayerPluginDanmuku:hide"), this;
        }
        emit(t2) {
          return this.validator(t2, { text: "string", mode: "number|undefined", color: "string|undefined", time: "number|undefined", border: "boolean|undefined" }), t2.text.trim() && this.option.filter(t2) ? (t2.time ? t2.time = this.utils.clamp(t2.time, 0, 1 / 0) : t2.time = this.art.currentTime + 0.5, void 0 === t2.mode && (t2.mode = this.option.mode), void 0 === t2.color && (t2.color = this.option.color), this.queue.push({ ...t2, $state: "wait", $ref: null, $restTime: 0, $lastStartTime: 0 }), this) : this;
        }
        destroy() {
          this.stop(), this.worker && this.worker.terminate && this.worker.terminate(), this.art.off("video:play", this.start), this.art.off("video:playing", this.start), this.art.off("video:pause", this.stop), this.art.off("video:waiting", this.stop), this.art.off("resize", this.reset), this.art.off("destroy", this.destroy), this.art.emit("artplayerPluginDanmuku:destroy");
        }
      }
      n.default = o;
    }, { "./bilibili": "f83sx", "./getDanmuTop": "jPSuD", "12ceab24749100d0": "fXq73", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], f83sx: [function(t, e, n) {
      var i = t("@parcel/transformer-js/src/esmodule-helpers.js");
      function r(t2) {
        switch (t2) {
          case 1:
          case 2:
          case 3:
          default:
            return 0;
          case 4:
          case 5:
            return 1;
        }
      }
      function a(t2) {
        if ("string" != typeof t2)
          return [];
        const e2 = t2.matchAll(/<d (?:.*? )??p="(?<p>.+?)"(?: .*?)?>(?<text>.+?)<\/d>/gs);
        return Array.from(e2).map((t3) => {
          const e3 = t3.groups.p.split(",");
          if (e3.length >= 8) {
            return { text: t3.groups.text.trim().replaceAll("&quot;", '"').replaceAll("&apos;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&amp;", "&"), time: Number(e3[0]), mode: r(Number(e3[1])), fontSize: Number(e3[2]), color: `#${Number(e3[3]).toString(16)}`, timestamp: Number(e3[4]), pool: Number(e3[5]), userID: e3[6], rowID: Number(e3[7]) };
          }
          return null;
        }).filter(Boolean);
      }
      function s(t2) {
        return fetch(t2).then((t3) => t3.text()).then((t3) => a(t3));
      }
      i.defineInteropFlag(n), i.export(n, "getMode", () => r), i.export(n, "bilibiliDanmuParseFromXml", () => a), i.export(n, "bilibiliDanmuParseFromUrl", () => s);
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], "9pCYc": [function(t, e, n) {
      n.interopDefault = function(t2) {
        return t2 && t2.__esModule ? t2 : { default: t2 };
      }, n.defineInteropFlag = function(t2) {
        Object.defineProperty(t2, "__esModule", { value: true });
      }, n.exportAll = function(t2, e2) {
        return Object.keys(t2).forEach(function(n2) {
          "default" === n2 || "__esModule" === n2 || e2.hasOwnProperty(n2) || Object.defineProperty(e2, n2, { enumerable: true, get: function() {
            return t2[n2];
          } });
        }), e2;
      }, n.export = function(t2, e2, n2) {
        Object.defineProperty(t2, e2, { enumerable: true, get: n2 });
      };
    }, {}], jPSuD: [function(t, e, n) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n), n.default = function({ target: t2, emits: e2, clientWidth: n2, clientHeight: i, marginBottom: r, marginTop: a, antiOverlap: s }) {
        const o = e2.filter((e3) => e3.mode === t2.mode && e3.top <= i - r).sort((t3, e3) => t3.top - e3.top);
        if (0 === o.length)
          return a;
        o.unshift({ top: 0, left: 0, right: 0, height: a, width: n2, speed: 0, distance: n2 }), o.push({ top: i - r, left: 0, right: 0, height: r, width: n2, speed: 0, distance: n2 });
        for (let e3 = 1; e3 < o.length; e3 += 1) {
          const n3 = o[e3], i2 = o[e3 - 1], r2 = i2.top + i2.height;
          if (n3.top - r2 >= t2.height)
            return r2;
        }
        const l = [];
        for (let t3 = 1; t3 < o.length - 1; t3 += 1) {
          const e3 = o[t3];
          if (l.length) {
            const t4 = l[l.length - 1];
            t4[0].top === e3.top ? t4.push(e3) : l.push([e3]);
          } else
            l.push([e3]);
        }
        if (!s) {
          switch (t2.mode) {
            case 0:
              l.sort((t3, e3) => {
                const n3 = Math.min(...e3.map((t4) => t4.right)), i2 = Math.min(...t3.map((t4) => t4.right));
                return n3 * e3.length - i2 * t3.length;
              });
              break;
            case 1:
              l.sort((t3, e3) => {
                const n3 = Math.max(...e3.map((t4) => t4.width));
                return Math.max(...t3.map((t4) => t4.width)) * t3.length - n3 * e3.length;
              });
          }
          return l[0][0].top;
        }
        switch (t2.mode) {
          case 0: {
            const e3 = l.find((e4) => e4.every((e5) => {
              if (n2 < e5.distance)
                return false;
              if (t2.speed < e5.speed)
                return true;
              return e5.right / (t2.speed - e5.speed) > e5.time;
            }));
            return e3 && e3[0] ? e3[0].top : void 0;
          }
          case 1:
            return;
        }
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], fXq73: [function(t, e, n) {
      e.exports = "data:application/javascript,function%20getDanmuTop%28%7Btarget%3At%2Cemits%3Ae%2CclientWidth%3An%2CclientHeight%3Ai%2CmarginBottom%3As%2CmarginTop%3Ah%2CantiOverlap%3Ao%7D%29%7Bconst%20r%3De.filter%28%28e%3D%3Ee.mode%3D%3D%3Dt.mode%26%26e.top%3C%3Di-s%29%29.sort%28%28%28t%2Ce%29%3D%3Et.top-e.top%29%29%3Bif%280%3D%3D%3Dr.length%29return%20h%3Br.unshift%28%7Btop%3A0%2Cleft%3A0%2Cright%3A0%2Cheight%3Ah%2Cwidth%3An%2Cspeed%3A0%2Cdistance%3An%7D%29%2Cr.push%28%7Btop%3Ai-s%2Cleft%3A0%2Cright%3A0%2Cheight%3As%2Cwidth%3An%2Cspeed%3A0%2Cdistance%3An%7D%29%3Bfor%28let%20e%3D1%3Be%3Cr.length%3Be%2B%3D1%29%7Bconst%20n%3Dr%5Be%5D%2Ci%3Dr%5Be-1%5D%2Cs%3Di.top%2Bi.height%3Bif%28n.top-s%3E%3Dt.height%29return%20s%7Dconst%20p%3D%5B%5D%3Bfor%28let%20t%3D1%3Bt%3Cr.length-1%3Bt%2B%3D1%29%7Bconst%20e%3Dr%5Bt%5D%3Bif%28p.length%29%7Bconst%20t%3Dp%5Bp.length-1%5D%3Bt%5B0%5D.top%3D%3D%3De.top%3Ft.push%28e%29%3Ap.push%28%5Be%5D%29%7Delse%20p.push%28%5Be%5D%29%7Dif%28%21o%29%7Bswitch%28t.mode%29%7Bcase%200%3Ap.sort%28%28%28t%2Ce%29%3D%3E%7Bconst%20n%3DMath.min%28...e.map%28%28t%3D%3Et.right%29%29%29%2Ci%3DMath.min%28...t.map%28%28t%3D%3Et.right%29%29%29%3Breturn%20n%2ae.length-i%2at.length%7D%29%29%3Bbreak%3Bcase%201%3Ap.sort%28%28%28t%2Ce%29%3D%3E%7Bconst%20n%3DMath.max%28...e.map%28%28t%3D%3Et.width%29%29%29%3Breturn%20Math.max%28...t.map%28%28t%3D%3Et.width%29%29%29%2at.length-n%2ae.length%7D%29%29%7Dreturn%20p%5B0%5D%5B0%5D.top%7Dswitch%28t.mode%29%7Bcase%200%3A%7Bconst%20e%3Dp.find%28%28e%3D%3Ee.every%28%28e%3D%3E%7Bif%28n%3Ce.distance%29return%211%3Bif%28t.speed%3Ce.speed%29return%210%3Breturn%20e.right%2F%28t.speed-e.speed%29%3Ee.time%7D%29%29%29%29%3Breturn%20e%26%26e%5B0%5D%3Fe%5B0%5D.top%3Avoid%200%7Dcase%201%3Areturn%7D%7Donmessage%3Dt%3D%3E%7Bconst%7Bdata%3Ae%7D%3Dt%2Cn%3DgetDanmuTop%28e%29%3Bself.postMessage%28%7Btop%3An%2Cid%3Ae.id%7D%29%7D%3B";
    }, {}], lO8OT: [function(t, e, n) {
      var i = t("@parcel/transformer-js/src/esmodule-helpers.js");
      i.defineInteropFlag(n);
      var r = t("bundle-text:./style.less"), a = i.interopDefault(r), s = t("bundle-text:./img/danmu-on.svg"), o = i.interopDefault(s), l = t("bundle-text:./img/danmu-off.svg"), u = i.interopDefault(l), d = t("bundle-text:./img/danmu-config.svg"), m = i.interopDefault(d), p = t("bundle-text:./img/danmu-style.svg"), h = i.interopDefault(p);
      if (n.default = function(t2, e2) {
        const { option: n2 } = e2, { template: { $controlsCenter: i2, $player: r2 }, constructor: { SETTING_ITEM_WIDTH: a2, utils: { removeClass: s2, addClass: l2, append: d2, setStyle: p2, tooltip: c, query: f, inverseClass: g, getIcon: y } } } = t2;
        p2(i2, "display", "flex");
        const k = y("danmu-on", o.default), x = y("danmu-off", u.default), b = y("danmu-config", m.default), v = y("danmu-style", h.default);
        !function() {
          const a3 = ["#FE0302", "#FF7204", "#FFAA02", "#FFD302", "#FFFF00", "#A0EE00", "#00CD00", "#019899", "#4266BE", "#89D5FF", "#CC0273", "#222222", "#9B9B9B", "#FFFFFF"].map((t3) => `<div class="art-danmuku-style-panel-color${n2.color === t3 ? " art-current" : ""}" data-color="${t3}" style="background-color:${t3}"></div>`), o2 = d2(i2, `<div class="art-danmuku-emitter" style="max-width: ${n2.maxWidth ? `${n2.maxWidth}px` : "100%"}"><div class="art-danmuku-left"><div class="art-danmuku-style"><div class="art-danmuku-style-panel"><div class="art-danmuku-style-panel-inner"><div class="art-danmuku-style-panel-title">模式</div><div class="art-danmuku-style-panel-modes"><div class="art-danmuku-style-panel-mode art-current" data-mode="0">滚动</div><div class="art-danmuku-style-panel-mode" data-mode="1">静止</div></div><div class="art-danmuku-style-panel-title">颜色</div><div class="art-danmuku-style-panel-colors">${a3.join("")}</div></div></div></div><input class="art-danmuku-input" maxlength="${n2.maxLength}" placeholder="发个弹幕见证当下" /></div><div class="art-danmuku-send">发送</div></div>`), u2 = f(".art-danmuku-style", o2), m2 = f(".art-danmuku-input", o2), h2 = f(".art-danmuku-send", o2), c2 = f(".art-danmuku-style-panel-inner", o2), y2 = f(".art-danmuku-style-panel-modes", o2), k2 = f(".art-danmuku-style-panel-colors", o2), x2 = n2.mount || d2(r2, '<div class="art-layer-danmuku-emitter"></div>');
          t2.option.backdrop && l2(c2, "art-backdrop-filter"), n2.theme && l2(o2, `art-danmuku-theme-${n2.theme}`);
          let b2 = null, w = n2.mode, $ = n2.color;
          function D(t3) {
            t3 <= 0 ? (b2 = null, h2.innerText = "发送", s2(h2, "art-disabled")) : (h2.innerText = t3, b2 = setTimeout(() => D(t3 - 1), 1e3));
          }
          function B() {
            const i3 = { mode: w, color: $, border: true, text: m2.value.trim() };
            null === b2 && n2.beforeEmit(i3) && (m2.value = "", e2.emit(i3), l2(h2, "art-disabled"), D(n2.lockTime), t2.emit("artplayerPluginDanmuku:emit", i3));
          }
          function M() {
            i2.clientWidth < n2.minWidth ? (d2(x2, o2), p2(x2, "display", "flex"), l2(o2, "art-danmuku-mount"), n2.mount || p2(r2, "marginBottom", "40px")) : (d2(i2, o2), p2(x2, "display", "none"), s2(o2, "art-danmuku-mount"), n2.mount || p2(r2, "marginBottom", null));
          }
          d2(u2, v), t2.proxy(h2, "click", B), t2.proxy(m2, "keypress", (t3) => {
            "Enter" === t3.key && (t3.preventDefault(), B());
          }), t2.proxy(y2, "click", (t3) => {
            const { dataset: e3 } = t3.target;
            e3.mode && (w = Number(e3.mode), g(t3.target, "art-current"));
          }), t2.proxy(k2, "click", (t3) => {
            const { dataset: e3 } = t3.target;
            e3.color && ($ = e3.color, g(t3.target, "art-current"));
          }), M(), t2.on("resize", () => {
            t2.isInput || M();
          }), t2.on("destroy", () => {
            n2.mount && o2.parentElement === n2.mount && n2.mount.removeChild(o2);
          });
        }(), t2.controls.add({ position: "right", name: "danmuku", click: function() {
          e2.isHide ? (e2.show(), t2.notice.show = "弹幕显示", p2(k, "display", null), p2(x, "display", "none")) : (e2.hide(), t2.notice.show = "弹幕隐藏", p2(k, "display", "none"), p2(x, "display", null));
        }, mounted(e3) {
          d2(e3, k), d2(e3, x), c(e3, "弹幕开关"), p2(x, "display", "none"), t2.on("artplayerPluginDanmuku:hide", () => {
            p2(k, "display", "none"), p2(x, "display", null);
          }), t2.on("artplayerPluginDanmuku:show", () => {
            p2(k, "display", null), p2(x, "display", "none");
          });
        } }), t2.setting.add({ width: 260, name: "danmuku", html: "弹幕设置", tooltip: "更多", icon: b, selector: [{ width: a2, html: "播放速度", icon: "", tooltip: "适中", selector: [{ html: "极慢", time: 10 }, { html: "较慢", time: 7.5 }, { default: true, html: "适中", time: 5 }, { html: "较快", time: 2.5 }, { html: "极快", time: 1 }], onSelect: function(t3) {
          return e2.config({ speed: t3.time }), t3.html;
        } }, { width: a2, html: "字体大小", icon: "", tooltip: "适中", selector: [{ html: "极小", fontSize: "4%" }, { html: "较小", fontSize: "5%" }, { default: true, html: "适中", fontSize: "6%" }, { html: "较大", fontSize: "7%" }, { html: "极大", fontSize: "8%" }], onSelect: function(t3) {
          return e2.config({ fontSize: t3.fontSize }), t3.html;
        } }, { width: a2, html: "不透明度", icon: "", tooltip: "100%", selector: [{ default: true, opacity: 1, html: "100%" }, { opacity: 0.75, html: "75%" }, { opacity: 0.5, html: "50%" }, { opacity: 0.25, html: "25%" }, { opacity: 0, html: "0%" }], onSelect: function(t3) {
          return e2.config({ opacity: t3.opacity }), t3.html;
        } }, { width: a2, html: "显示范围", icon: "", tooltip: "3/4", selector: [{ html: "1/4", margin: [10, "75%"] }, { html: "半屏", margin: [10, "50%"] }, { default: true, html: "3/4", margin: [10, "25%"] }, { html: "满屏", margin: [10, 10] }], onSelect: function(t3) {
          return e2.config({ margin: t3.margin }), t3.html;
        } }, { html: "弹幕防重叠", icon: "", tooltip: n2.antiOverlap ? "开启" : "关闭", switch: n2.antiOverlap, onSwitch: (t3) => (e2.config({ antiOverlap: !t3.switch }), t3.tooltip = t3.switch ? "关闭" : "开启", !t3.switch) }, { html: "同步视频速度", icon: "", tooltip: n2.synchronousPlayback ? "开启" : "关闭", switch: n2.synchronousPlayback, onSwitch: (t3) => (e2.config({ synchronousPlayback: !t3.switch }), t3.tooltip = t3.switch ? "关闭" : "开启", !t3.switch) }] });
      }, "undefined" != typeof document && !document.getElementById("artplayer-plugin-danmuku")) {
        const t2 = document.createElement("style");
        t2.id = "artplayer-plugin-danmuku", t2.textContent = a.default, document.head.appendChild(t2);
      }
    }, { "bundle-text:./style.less": "hViDo", "bundle-text:./img/danmu-on.svg": "4KfW9", "bundle-text:./img/danmu-off.svg": "9UR3U", "bundle-text:./img/danmu-config.svg": "4MPCW", "bundle-text:./img/danmu-style.svg": "7lV5Q", "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }], hViDo: [function(t, e, n) {
      e.exports = '.art-danmuku-emitter{height:32px;width:100%;max-width:100%;background-color:#ffffff4d;border-radius:5px;font-size:12px;line-height:1;display:flex;position:relative}.art-danmuku-emitter .art-backdrop-filter{-webkit-backdrop-filter:saturate(180%)blur(20px);backdrop-filter:saturate(180%)blur(20px);background-color:#000000b3!important}.art-danmuku-emitter .art-danmuku-left{border-radius:3px 0 0 3px;flex:1;display:flex}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style{width:32px;justify-content:center;align-items:center;display:flex;position:relative}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style .art-danmuku-style-panel{z-index:999;width:200px;padding-bottom:10px;display:none;position:absolute;bottom:30px;left:-85px}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style .art-danmuku-style-panel .art-danmuku-style-panel-inner{background-color:#000000e6;border-radius:3px;flex-direction:column;padding:10px 10px 0;display:flex}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style .art-danmuku-style-panel .art-danmuku-style-panel-inner .art-danmuku-style-panel-title{margin-bottom:10px;font-size:13px}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style .art-danmuku-style-panel .art-danmuku-style-panel-inner .art-danmuku-style-panel-modes{justify-content:space-between;margin-bottom:15px;display:flex}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style .art-danmuku-style-panel .art-danmuku-style-panel-inner .art-danmuku-style-panel-modes .art-danmuku-style-panel-mode{width:47%;cursor:pointer;color:#fff;border:1px solid #fff;justify-content:center;padding:5px 0;display:flex}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style .art-danmuku-style-panel .art-danmuku-style-panel-inner .art-danmuku-style-panel-modes .art-danmuku-style-panel-mode.art-current{background-color:#00a1d6;border:1px solid #00a1d6}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style .art-danmuku-style-panel .art-danmuku-style-panel-inner .art-danmuku-style-panel-colors{flex-wrap:wrap;justify-content:space-between;gap:5px;margin-bottom:10px;display:flex}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style .art-danmuku-style-panel .art-danmuku-style-panel-inner .art-danmuku-style-panel-colors .art-danmuku-style-panel-color{cursor:pointer;width:20px;height:20px;border:1px solid #fff}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style .art-danmuku-style-panel .art-danmuku-style-panel-inner .art-danmuku-style-panel-colors .art-danmuku-style-panel-color.art-current{position:relative;box-shadow:0 0 2px #fff}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style .art-danmuku-style-panel .art-danmuku-style-panel-inner .art-danmuku-style-panel-colors .art-danmuku-style-panel-color.art-current:before{content:"";width:100%;height:100%;border:2px solid #000;position:absolute;inset:0}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style:hover .art-danmuku-style-panel{display:flex}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style .art-icon{opacity:.75;cursor:pointer}.art-danmuku-emitter .art-danmuku-left .art-danmuku-style .art-icon:hover{opacity:1}.art-danmuku-emitter .art-danmuku-left .art-danmuku-input{width:100%;color:#fff;background-color:#0000;border:none;outline:none;flex:1;padding:0 10px 0 0;display:flex}.art-danmuku-emitter .art-danmuku-left .art-danmuku-input::placeholder,.art-danmuku-emitter .art-danmuku-left .art-danmuku-input::-webkit-input-placeholder{color:#ffffff80}.art-danmuku-emitter .art-danmuku-send{width:50px;cursor:pointer;background-color:#00a1d6;border-radius:0 5px 5px 0;justify-content:center;align-items:center;display:flex}.art-danmuku-emitter .art-danmuku-send:hover{background-color:#00b5e5}.art-danmuku-emitter .art-danmuku-send.art-disabled{opacity:.5;pointer-events:none}.art-danmuku-emitter.art-danmuku-mount{max-width:100%!important}.art-danmuku-emitter.art-danmuku-mount .art-danmuku-left .art-danmuku-style .art-danmuku-style-panel{left:0}.art-danmuku-emitter.art-danmuku-mount .art-danmuku-send{width:60px}.art-danmuku-emitter.art-danmuku-mount.art-danmuku-theme-light .art-danmuku-left{background:#f4f4f4;border:1px solid #dadada}.art-danmuku-emitter.art-danmuku-mount.art-danmuku-theme-light .art-danmuku-left .art-danmuku-style .art-icon svg{fill:#666}.art-danmuku-emitter.art-danmuku-mount.art-danmuku-theme-light .art-danmuku-left .art-danmuku-input{color:#000}.art-danmuku-emitter.art-danmuku-mount.art-danmuku-theme-light .art-danmuku-left .art-danmuku-input::placeholder,.art-danmuku-emitter.art-danmuku-mount.art-danmuku-theme-light .art-danmuku-left .art-danmuku-input::-webkit-input-placeholder{color:#00000080}.art-layer-danmuku-emitter{z-index:99;width:100%;position:absolute;bottom:-40px;left:0;right:0}';
    }, {}], "4KfW9": [function(t, e, n) {
      e.exports = '<svg viewBox="0 0 1152 1024" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M311.467 661.333c0 4.267-4.267 8.534-8.534 12.8 0 4.267 0 4.267-4.266 8.534h-12.8c-4.267 0-8.534-4.267-17.067-8.534-8.533-8.533-17.067-8.533-25.6-8.533-8.533 0-12.8 4.267-17.067 12.8-4.266 12.8-8.533 21.333-4.266 29.867 4.266 8.533 12.8 17.066 25.6 21.333 17.066 8.533 34.133 17.067 46.933 17.067 12.8 0 21.333-4.267 34.133-8.534 8.534-4.266 17.067-17.066 25.6-29.866 8.534-12.8 12.8-34.134 17.067-55.467 4.267-21.333 4.267-51.2 4.267-85.333 0-12.8 0-21.334-4.267-29.867 0-8.533-4.267-12.8-8.533-17.067-4.267-4.266-8.534-8.533-12.8-8.533-4.267 0-12.8-4.267-21.334-4.267h-55.466s-4.267-4.266 0-8.533l4.266-38.4c0-4.267 0-8.533 4.267-8.533h46.933c17.067 0 25.6-4.267 34.134-12.8 8.533-8.534 12.8-21.334 12.8-42.667v-72.533c0-17.067-4.267-34.134-8.534-42.667-12.8-12.8-25.6-17.067-42.666-17.067H243.2c-8.533 0-17.067 0-21.333 4.267-4.267 8.533-4.267 12.8-4.267 25.6 0 8.533 0 17.067 4.267 21.333 4.266 4.267 12.8 8.534 21.333 8.534h64c4.267 0 8.533 0 8.533 4.266v34.134c0 8.533 0 12.8-4.266 12.8 0 0-4.267 4.266-8.534 4.266H268.8c-8.533 0-12.8 0-21.333 4.267-4.267 0-8.534 4.267-8.534 4.267-4.266 4.266-8.533 12.8-8.533 17.066 0 8.534-4.267 17.067-4.267 25.6l-8.533 72.534v29.866c0 8.534 4.267 12.8 8.533 17.067 4.267 4.267 8.534 4.267 17.067 8.533h68.267c4.266 0 8.533 0 8.533 4.267s4.267 8.533 4.267 17.067c0 21.333 0 42.666-4.267 55.466 0 8.534-4.267 21.334-8.533 25.6zM896 486.4c-93.867 0-174.933 51.2-217.6 123.733H571.733V576H640c21.333 0 34.133-4.267 42.667-12.8 8.533-8.533 12.8-21.333 12.8-42.667V358.4c0-21.333-4.267-34.133-12.8-42.667-8.534-8.533-21.334-12.8-42.667-12.8 0-4.266 4.267-4.266 4.267-8.533-4.267 0-4.267-4.267-4.267-4.267 4.267-12.8 8.533-21.333 4.267-25.6 0-8.533-4.267-12.8-12.8-21.333-8.534-4.267-17.067-4.267-21.334-4.267-8.533 4.267-12.8 8.534-21.333 21.334-4.267 8.533-8.533 12.8-12.8 21.333-4.267 8.533-8.533 12.8-12.8 21.333H512c-4.267-8.533-8.533-17.066-8.533-21.333-4.267-8.533-8.534-12.8-12.8-21.333-4.267-12.8-12.8-17.067-21.334-17.067s-17.066 0-25.6 8.533c-8.533 8.534-12.8 12.8-12.8 21.334s0 17.066 8.534 25.6l4.266 4.266L448 307.2c-17.067 0-29.867 4.267-38.4 12.8-8.533 4.267-12.8 21.333-12.8 38.4v157.867c0 21.333 4.267 34.133 12.8 42.666 8.533 8.534 21.333 12.8 42.667 12.8H512v34.134h-98.133c-12.8 0-21.334 0-25.6 4.266-4.267 4.267-8.534 8.534-8.534 21.334v17.066c0 4.267 4.267 8.534 4.267 8.534 4.267 0 4.267 4.266 8.533 4.266H512V716.8c0 12.8 4.267 21.333 8.533 25.6 4.267 4.267 12.8 8.533 21.334 8.533 12.8 0 21.333-4.266 25.6-8.533 4.266-4.267 4.266-12.8 4.266-25.6v-55.467H652.8c-8.533 25.6-12.8 51.2-12.8 76.8 0 140.8 115.2 256 256 256s256-115.2 256-256S1036.8 486.4 896 486.4zm-328.533-128h55.466c4.267 0 4.267 0 4.267 4.267V409.6h-59.733v-51.2zm0 102.4H627.2V512h-55.467v-51.2zM512 516.267h-55.467v-51.2H512v51.2zm0-102.4h-59.733V362.667H512v51.2zm384 499.2c-93.867 0-170.667-76.8-170.667-170.667S802.133 571.733 896 571.733s170.667 76.8 170.667 170.667S989.867 913.067 896 913.067z"/><path fill="#fff" d="M951.467 669.867 878.933 742.4l-29.866-25.6C832 699.733 806.4 704 789.333 721.067c-17.066 17.066-12.8 42.666 4.267 59.733l59.733 51.2c8.534 8.533 17.067 8.533 29.867 8.533s21.333-4.266 29.867-12.8l102.4-102.4c17.066-17.066 17.066-42.666 0-59.733-21.334-12.8-46.934-12.8-64 4.267zm-371.2 209.066H213.333c-72.533 0-128-55.466-128-119.466V230.4c0-64 55.467-119.467 128-119.467h512c72.534 0 128 55.467 128 119.467v140.8c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667V230.4c0-115.2-93.867-204.8-213.334-204.8h-512C93.867 25.6 0 119.467 0 230.4v529.067c0 115.2 93.867 204.8 213.333 204.8h366.934c25.6 0 42.666-17.067 42.666-42.667s-21.333-42.667-42.666-42.667z"/></svg>';
    }, {}], "9UR3U": [function(t, e, n) {
      e.exports = '<svg viewBox="0 0 1152 1024" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M311.296 661.504c0 4.096-4.096 8.704-8.704 12.8 0 4.096 0 4.096-4.096 8.704h-12.8c-4.096 0-8.704-4.096-16.896-8.704-8.704-8.704-16.896-8.704-25.6-8.704s-12.8 4.096-16.896 12.8c-4.096 12.8-8.704 21.504-4.096 29.696 4.096 8.704 12.8 16.896 25.6 21.504 16.896 8.704 34.304 16.896 47.104 16.896 12.8 0 21.504-4.096 34.304-8.704 8.704-4.096 16.896-16.896 25.6-29.696s12.8-34.304 16.896-55.296c4.096-21.504 4.096-51.2 4.096-85.504 0-12.8 0-21.504-4.096-29.696 0-8.704-4.096-12.8-8.704-16.896-4.096-4.096-8.704-8.704-12.8-8.704s-12.8-4.096-21.504-4.096h-55.808s-4.096-4.096 0-8.704l4.096-38.4c0-4.096 0-8.704 4.096-8.704h47.104c16.896 0 25.6-4.096 34.304-12.8s12.8-21.504 12.8-42.496v-72.704c0-16.896-4.096-34.304-8.704-42.496-12.8-12.8-25.6-16.896-42.496-16.896H243.2c-8.704 0-16.896 0-21.504 4.096-4.096 8.704-4.096 12.8-4.096 25.6 0 8.704 0 16.896 4.096 21.504 4.096 4.096 12.8 8.704 21.504 8.704h64c4.096 0 8.704 0 8.704 4.096v34.304c0 8.704 0 12.8-4.096 12.8 0 0-4.096 4.096-8.704 4.096H268.8c-8.704 0-12.8 0-21.504 4.096-4.096 0-8.704 4.096-8.704 4.096-4.096 4.096-8.704 12.8-8.704 16.896 0 8.704-4.096 16.896-4.096 25.6l-8.704 72.704v29.696c0 8.704 4.096 12.8 8.704 16.896s8.704 4.096 16.896 8.704h68.096c4.096 0 8.704 0 8.704 4.096s4.096 8.704 4.096 16.896c0 21.504 0 42.496-4.096 55.296.512 9.216-3.584 22.016-8.192 26.624zM896 486.4c-93.696 0-175.104 51.2-217.6 123.904H571.904V576H640c21.504 0 34.304-4.096 42.496-12.8 8.704-8.704 12.8-21.504 12.8-42.496V358.4c0-21.504-4.096-34.304-12.8-42.496-8.704-8.704-21.504-12.8-42.496-12.8 0-4.096 4.096-4.096 4.096-8.704-4.096 0-4.096-4.096-4.096-4.096 4.096-12.8 8.704-21.504 4.096-25.6 0-8.704-4.096-12.8-12.8-21.504-8.704-4.096-16.896-4.096-21.504-4.096-8.704 4.096-12.8 8.704-21.504 21.504-4.096 8.704-8.704 12.8-12.8 21.504s-8.704 12.8-12.8 21.504h-51.2c-4.096-8.704-8.704-16.896-8.704-21.504-4.096-8.704-8.704-12.8-12.8-21.504-4.096-12.8-12.8-16.896-21.504-16.896s-16.896 0-25.6 8.704-12.8 12.8-12.8 21.504 0 16.896 8.704 25.6l4.096 4.096 4.096 4.096c-16.896 0-29.696 4.096-38.4 12.8-8.704 4.096-12.8 21.504-12.8 38.4v157.696c0 21.504 4.096 34.304 12.8 42.496 8.704 8.704 21.504 12.8 42.496 12.8H512v34.304h-98.304c-12.8 0-21.504 0-25.6 4.096s-8.704 8.704-8.704 21.504v16.896c0 4.096 4.096 8.704 4.096 8.704 4.096 0 4.096 4.096 8.704 4.096H512V716.8c0 12.8 4.096 21.504 8.704 25.6 4.096 4.096 12.8 8.704 21.504 8.704 12.8 0 21.504-4.096 25.6-8.704 4.096-4.096 4.096-12.8 4.096-25.6v-55.296H652.8c-8.704 25.6-12.8 51.2-12.8 76.8 0 140.8 115.2 256 256 256s256-115.2 256-256S1036.8 486.4 896 486.4zm-328.704-128h55.296c4.096 0 4.096 0 4.096 4.096V409.6h-59.904v-51.2zm0 102.4H627.2V512h-55.296v-51.2h-4.608zM512 516.096h-55.296v-51.2H512v51.2zm0-102.4h-59.904v-51.2H512v51.2zm384 499.2c-93.696 0-170.496-76.8-170.496-170.496S802.304 571.904 896 571.904s170.496 76.8 170.496 170.496S989.696 912.896 896 912.896z"/><path fill="#fff" d="M580.096 879.104H213.504c-72.704 0-128-55.296-128-119.296V230.4c0-64 55.296-119.296 128-119.296h512c72.704 0 128 55.296 128 119.296v140.8c0 25.6 16.896 42.496 42.496 42.496s42.496-16.896 42.496-42.496V230.4c0-115.2-93.696-204.8-213.504-204.8h-512C93.696 25.6 0 119.296 0 230.4v528.896c0 115.2 93.696 204.8 213.504 204.8h367.104c25.6 0 42.496-16.896 42.496-42.496s-21.504-42.496-43.008-42.496zm171.52 10.752c-15.36-15.36-15.36-40.96 0-56.32l237.568-237.568c15.36-15.36 40.96-15.36 56.32 0s15.36 40.96 0 56.32L807.936 889.856c-15.36 15.36-40.448 15.36-56.32 0z"/></svg>';
    }, {}], "4MPCW": [function(t, e, n) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M16.5 8c1.289 0 2.49.375 3.5 1.022V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.022A6.5 6.5 0 0 1 16.5 8zM7 13H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm2-4H5a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"/><path d="m20.587 13.696-.787-.131a3.503 3.503 0 0 0-.593-1.051l.301-.804a.46.46 0 0 0-.21-.56l-1.005-.581a.52.52 0 0 0-.656.113l-.499.607a3.53 3.53 0 0 0-1.276 0l-.499-.607a.52.52 0 0 0-.656-.113l-1.005.581a.46.46 0 0 0-.21.56l.301.804c-.254.31-.456.665-.593 1.051l-.787.131a.48.48 0 0 0-.413.465v1.209a.48.48 0 0 0 .413.465l.811.135c.144.382.353.733.614 1.038l-.292.78a.46.46 0 0 0 .21.56l1.005.581a.52.52 0 0 0 .656-.113l.515-.626a3.549 3.549 0 0 0 1.136 0l.515.626a.52.52 0 0 0 .656.113l1.005-.581a.46.46 0 0 0 .21-.56l-.292-.78c.261-.305.47-.656.614-1.038l.811-.135A.48.48 0 0 0 21 15.37v-1.209a.48.48 0 0 0-.413-.465zM16.5 16.057a1.29 1.29 0 1 1 .002-2.582 1.29 1.29 0 0 1-.002 2.582z"/></svg>';
    }, {}], "7lV5Q": [function(t, e, n) {
      e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="24" height="24"><path d="M17 16H5c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zM6.96 15c.39 0 .74-.24.89-.6l.65-1.6h5l.66 1.6c.15.36.5.6.89.6.69 0 1.15-.71.88-1.34l-3.88-8.97C11.87 4.27 11.46 4 11 4s-.87.27-1.05.69l-3.88 8.97c-.27.63.2 1.34.89 1.34zM11 5.98 12.87 11H9.13L11 5.98z"/></svg>';
    }, {}], "8AxLD": [function(t, e, n) {
      t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);
      const i = { map: (t2, e2, n2, i2, r) => (t2 - e2) * (r - i2) / (n2 - e2) + i2, range(t2, e2, n2) {
        const i2 = Math.round(t2 / n2) * n2;
        return Array.from({ length: Math.floor((e2 - t2) / n2) }, (t3, e3) => e3 * n2 + i2);
      } };
      n.default = function(t2, e2, n2) {
        const { query: r } = t2.constructor.utils;
        t2.controls.add({ name: "heatmap", position: "top", html: "", style: { position: "absolute", top: "-100px", left: "0px", right: "0px", height: "100px", width: "100%", pointerEvents: "none" }, mounted(a) {
          let s = null, o = null;
          function l() {
            if (s = null, o = null, a.innerHTML = "", !e2.danmus.length || !t2.duration)
              return;
            const l2 = { w: a.offsetWidth, h: a.offsetHeight }, u = { xMin: 0, xMax: l2.w, yMin: 0, yMax: 128, scale: 0.25, opacity: 0.2, minHeight: Math.floor(0.05 * l2.h), sampling: Math.floor(l2.w / 100), smoothing: 0.2, flattening: 0.2 };
            "object" == typeof n2 && Object.assign(u, n2);
            const d = [], m = t2.duration / l2.w;
            for (let t3 = 0; t3 <= l2.w; t3 += u.sampling) {
              const n3 = e2.danmus.filter(({ time: e3 }) => e3 > t3 * m && e3 <= (t3 + u.sampling) * m).length;
              d.push([t3, n3]);
            }
            const p = d[d.length - 1], h = p[0], c = p[1];
            h !== l2.w && d.push([l2.w, c]);
            const f = d.map((t3) => t3[1]), g = (Math.min(...f) + Math.max(...f)) / 2;
            for (let t3 = 0; t3 < d.length; t3++) {
              const e3 = d[t3], n3 = e3[1];
              e3[1] = n3 * (n3 > g ? 1 + u.scale : 1 - u.scale) + u.minHeight;
            }
            const y = (t3, e3, n3, r2) => {
              const a2 = ((t4, e4) => {
                const n4 = e4[0] - t4[0], i2 = e4[1] - t4[1];
                return { length: Math.sqrt(Math.pow(n4, 2) + Math.pow(i2, 2)), angle: Math.atan2(i2, n4) };
              })(e3 || t3, n3 || t3), s2 = i.map(Math.cos(a2.angle) * u.flattening, 0, 1, 1, 0), o2 = a2.angle * s2 + (r2 ? Math.PI : 0), l3 = a2.length * u.smoothing;
              return [t3[0] + Math.cos(o2) * l3, t3[1] + Math.sin(o2) * l3];
            }, k = d.map((t3) => [i.map(t3[0], u.xMin, u.xMax, 0, l2.w), i.map(t3[1], u.yMin, u.yMax, l2.h, 0)]).reduce((t3, e3, n3, i2) => 0 === n3 ? `M ${i2[i2.length - 1][0]},${l2.h} L ${e3[0]},${l2.h} L ${e3[0]},${e3[1]}` : `${t3} ${((t4, e4, n4) => {
              const i3 = y(n4[e4 - 1], n4[e4 - 2], t4), r2 = y(t4, n4[e4 - 1], n4[e4 + 1], true), a2 = e4 === n4.length - 1 ? " z" : "";
              return `C ${i3[0]},${i3[1]} ${r2[0]},${r2[1]} ${t4[0]},${t4[1]}${a2}`;
            })(e3, n3, i2)}`, "");
            a.innerHTML = `<svg viewBox="0 0 ${l2.w} ${l2.h}"><defs><linearGradient id="heatmap-solids" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:var(--art-theme);stop-opacity:${u.opacity}" /><stop offset="0%" style="stop-color:var(--art-theme);stop-opacity:${u.opacity}" id="heatmap-start" /><stop offset="0%" style="stop-color:var(--art-progress-color);stop-opacity:1" id="heatmap-stop" /><stop offset="100%" style="stop-color:var(--art-progress-color);stop-opacity:1" /></linearGradient></defs><path fill="url(#heatmap-solids)" d="${k}"></path></svg>`, s = r("#heatmap-start", a), o = r("#heatmap-stop", a), s.setAttribute("offset", 100 * t2.played + "%"), o.setAttribute("offset", 100 * t2.played + "%");
          }
          t2.on("video:timeupdate", () => {
            s && o && (s.setAttribute("offset", 100 * t2.played + "%"), o.setAttribute("offset", 100 * t2.played + "%"));
          }), t2.on("setBar", (t3, e3) => {
            s && o && "played" === t3 && (s.setAttribute("offset", 100 * e3 + "%"), o.setAttribute("offset", 100 * e3 + "%"));
          }), t2.on("ready", l), t2.on("resize", l), t2.on("artplayerPluginDanmuku:loaded", l);
        } });
      };
    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "9pCYc" }] }, ["bgm6t"], "bgm6t", "parcelRequire4dc0");
  }
});
export default require_artplayer_plugin_danmuku();
/*! Bundled license information:

artplayer-plugin-danmuku/dist/artplayer-plugin-danmuku.js:
  (*!
   * artplayer-plugin-danmuku.js v5.0.1
   * Github: https://github.com/zhw2590582/ArtPlayer
   * (c) 2017-2023 Harvey Zack
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=artplayer-plugin-danmuku.js.map
