import {
  __commonJS
} from "./chunk-LQ2VYIYD.js";

// node_modules/.pnpm/hls.js@1.5.8/node_modules/hls.js/dist/hls.min.js
var require_hls_min = __commonJS({
  "node_modules/.pnpm/hls.js@1.5.8/node_modules/hls.js/dist/hls.min.js"(exports, module) {
    !function t(e) {
      var r, i;
      r = this, i = function() {
        "use strict";
        function r2(t2, e2) {
          var r3 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var i3 = Object.getOwnPropertySymbols(t2);
            e2 && (i3 = i3.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), r3.push.apply(r3, i3);
          }
          return r3;
        }
        function i2(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var i3 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? r2(Object(i3), true).forEach(function(e3) {
              var r3, a2, s2;
              r3 = t2, a2 = e3, s2 = i3[e3], (a2 = n(a2)) in r3 ? Object.defineProperty(r3, a2, { value: s2, enumerable: true, configurable: true, writable: true }) : r3[a2] = s2;
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(i3)) : r2(Object(i3)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(i3, e3));
            });
          }
          return t2;
        }
        function n(t2) {
          var e2 = function(t3, e3) {
            if ("object" != typeof t3 || !t3)
              return t3;
            var r3 = t3[Symbol.toPrimitive];
            if (void 0 !== r3) {
              var i3 = r3.call(t3, e3 || "default");
              if ("object" != typeof i3)
                return i3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e3 ? String : Number)(t3);
          }(t2, "string");
          return "symbol" == typeof e2 ? e2 : String(e2);
        }
        function a(t2, e2) {
          for (var r3 = 0; r3 < e2.length; r3++) {
            var i3 = e2[r3];
            i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t2, n(i3.key), i3);
          }
        }
        function s(t2, e2, r3) {
          return e2 && a(t2.prototype, e2), r3 && a(t2, r3), Object.defineProperty(t2, "prototype", { writable: false }), t2;
        }
        function o() {
          return o = Object.assign ? Object.assign.bind() : function(t2) {
            for (var e2 = 1; e2 < arguments.length; e2++) {
              var r3 = arguments[e2];
              for (var i3 in r3)
                Object.prototype.hasOwnProperty.call(r3, i3) && (t2[i3] = r3[i3]);
            }
            return t2;
          }, o.apply(this, arguments);
        }
        function l(t2, e2) {
          t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, h(t2, e2);
        }
        function u(t2) {
          return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, u(t2);
        }
        function h(t2, e2) {
          return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, h(t2, e2);
        }
        function d(t2, e2, r3) {
          return d = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }() ? Reflect.construct.bind() : function(t3, e3, r4) {
            var i3 = [null];
            i3.push.apply(i3, e3);
            var n2 = new (Function.bind.apply(t3, i3))();
            return r4 && h(n2, r4.prototype), n2;
          }, d.apply(null, arguments);
        }
        function c(t2) {
          var e2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return c = function(t3) {
            if (null === t3 || !function(t4) {
              try {
                return -1 !== Function.toString.call(t4).indexOf("[native code]");
              } catch (e3) {
                return "function" == typeof t4;
              }
            }(t3))
              return t3;
            if ("function" != typeof t3)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e2) {
              if (e2.has(t3))
                return e2.get(t3);
              e2.set(t3, r3);
            }
            function r3() {
              return d(t3, arguments, u(this).constructor);
            }
            return r3.prototype = Object.create(t3.prototype, { constructor: { value: r3, enumerable: false, writable: true, configurable: true } }), h(r3, t3);
          }, c(t2);
        }
        function f(t2, e2) {
          (null == e2 || e2 > t2.length) && (e2 = t2.length);
          for (var r3 = 0, i3 = new Array(e2); r3 < e2; r3++)
            i3[r3] = t2[r3];
          return i3;
        }
        function g(t2, e2) {
          var r3 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
          if (r3)
            return (r3 = r3.call(t2)).next.bind(r3);
          if (Array.isArray(t2) || (r3 = function(t3, e3) {
            if (t3) {
              if ("string" == typeof t3)
                return f(t3, e3);
              var r4 = Object.prototype.toString.call(t3).slice(8, -1);
              return "Object" === r4 && t3.constructor && (r4 = t3.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(t3) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? f(t3, e3) : void 0;
            }
          }(t2)) || e2 && t2 && "number" == typeof t2.length) {
            r3 && (t2 = r3);
            var i3 = 0;
            return function() {
              return i3 >= t2.length ? { done: true } : { done: false, value: t2[i3++] };
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function v(t2) {
          return t2 && t2.__esModule && Object.prototype.hasOwnProperty.call(t2, "default") ? t2.default : t2;
        }
        var m = { exports: {} };
        !function(t2, e2) {
          var r3, i3, n2, a2, s2;
          r3 = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, i3 = /^(?=([^\/?#]*))\1([^]*)$/, n2 = /(?:\/|^)\.(?=\/)/g, a2 = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, s2 = { buildAbsoluteURL: function(t3, e3, r4) {
            if (r4 = r4 || {}, t3 = t3.trim(), !(e3 = e3.trim())) {
              if (!r4.alwaysNormalize)
                return t3;
              var n3 = s2.parseURL(t3);
              if (!n3)
                throw new Error("Error trying to parse base URL.");
              return n3.path = s2.normalizePath(n3.path), s2.buildURLFromParts(n3);
            }
            var a3 = s2.parseURL(e3);
            if (!a3)
              throw new Error("Error trying to parse relative URL.");
            if (a3.scheme)
              return r4.alwaysNormalize ? (a3.path = s2.normalizePath(a3.path), s2.buildURLFromParts(a3)) : e3;
            var o2 = s2.parseURL(t3);
            if (!o2)
              throw new Error("Error trying to parse base URL.");
            if (!o2.netLoc && o2.path && "/" !== o2.path[0]) {
              var l2 = i3.exec(o2.path);
              o2.netLoc = l2[1], o2.path = l2[2];
            }
            o2.netLoc && !o2.path && (o2.path = "/");
            var u2 = { scheme: o2.scheme, netLoc: a3.netLoc, path: null, params: a3.params, query: a3.query, fragment: a3.fragment };
            if (!a3.netLoc && (u2.netLoc = o2.netLoc, "/" !== a3.path[0]))
              if (a3.path) {
                var h2 = o2.path, d2 = h2.substring(0, h2.lastIndexOf("/") + 1) + a3.path;
                u2.path = s2.normalizePath(d2);
              } else
                u2.path = o2.path, a3.params || (u2.params = o2.params, a3.query || (u2.query = o2.query));
            return null === u2.path && (u2.path = r4.alwaysNormalize ? s2.normalizePath(a3.path) : a3.path), s2.buildURLFromParts(u2);
          }, parseURL: function(t3) {
            var e3 = r3.exec(t3);
            return e3 ? { scheme: e3[1] || "", netLoc: e3[2] || "", path: e3[3] || "", params: e3[4] || "", query: e3[5] || "", fragment: e3[6] || "" } : null;
          }, normalizePath: function(t3) {
            for (t3 = t3.split("").reverse().join("").replace(n2, ""); t3.length !== (t3 = t3.replace(a2, "")).length; )
              ;
            return t3.split("").reverse().join("");
          }, buildURLFromParts: function(t3) {
            return t3.scheme + t3.netLoc + t3.path + t3.params + t3.query + t3.fragment;
          } }, t2.exports = s2;
        }(m);
        var p = m.exports, y = Number.isFinite || function(t2) {
          return "number" == typeof t2 && isFinite(t2);
        }, E = Number.isSafeInteger || function(t2) {
          return "number" == typeof t2 && Math.abs(t2) <= T;
        }, T = Number.MAX_SAFE_INTEGER || 9007199254740991, S = function(t2) {
          return t2.MEDIA_ATTACHING = "hlsMediaAttaching", t2.MEDIA_ATTACHED = "hlsMediaAttached", t2.MEDIA_DETACHING = "hlsMediaDetaching", t2.MEDIA_DETACHED = "hlsMediaDetached", t2.BUFFER_RESET = "hlsBufferReset", t2.BUFFER_CODECS = "hlsBufferCodecs", t2.BUFFER_CREATED = "hlsBufferCreated", t2.BUFFER_APPENDING = "hlsBufferAppending", t2.BUFFER_APPENDED = "hlsBufferAppended", t2.BUFFER_EOS = "hlsBufferEos", t2.BUFFER_FLUSHING = "hlsBufferFlushing", t2.BUFFER_FLUSHED = "hlsBufferFlushed", t2.MANIFEST_LOADING = "hlsManifestLoading", t2.MANIFEST_LOADED = "hlsManifestLoaded", t2.MANIFEST_PARSED = "hlsManifestParsed", t2.LEVEL_SWITCHING = "hlsLevelSwitching", t2.LEVEL_SWITCHED = "hlsLevelSwitched", t2.LEVEL_LOADING = "hlsLevelLoading", t2.LEVEL_LOADED = "hlsLevelLoaded", t2.LEVEL_UPDATED = "hlsLevelUpdated", t2.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", t2.LEVELS_UPDATED = "hlsLevelsUpdated", t2.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", t2.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", t2.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", t2.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", t2.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", t2.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", t2.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", t2.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", t2.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", t2.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", t2.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", t2.CUES_PARSED = "hlsCuesParsed", t2.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", t2.INIT_PTS_FOUND = "hlsInitPtsFound", t2.FRAG_LOADING = "hlsFragLoading", t2.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", t2.FRAG_LOADED = "hlsFragLoaded", t2.FRAG_DECRYPTED = "hlsFragDecrypted", t2.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", t2.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", t2.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", t2.FRAG_PARSED = "hlsFragParsed", t2.FRAG_BUFFERED = "hlsFragBuffered", t2.FRAG_CHANGED = "hlsFragChanged", t2.FPS_DROP = "hlsFpsDrop", t2.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", t2.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", t2.ERROR = "hlsError", t2.DESTROYING = "hlsDestroying", t2.KEY_LOADING = "hlsKeyLoading", t2.KEY_LOADED = "hlsKeyLoaded", t2.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", t2.BACK_BUFFER_REACHED = "hlsBackBufferReached", t2.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", t2;
        }({}), L = function(t2) {
          return t2.NETWORK_ERROR = "networkError", t2.MEDIA_ERROR = "mediaError", t2.KEY_SYSTEM_ERROR = "keySystemError", t2.MUX_ERROR = "muxError", t2.OTHER_ERROR = "otherError", t2;
        }({}), A = function(t2) {
          return t2.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", t2.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", t2.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", t2.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", t2.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", t2.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", t2.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", t2.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", t2.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", t2.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", t2.MANIFEST_LOAD_ERROR = "manifestLoadError", t2.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", t2.MANIFEST_PARSING_ERROR = "manifestParsingError", t2.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", t2.LEVEL_EMPTY_ERROR = "levelEmptyError", t2.LEVEL_LOAD_ERROR = "levelLoadError", t2.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", t2.LEVEL_PARSING_ERROR = "levelParsingError", t2.LEVEL_SWITCH_ERROR = "levelSwitchError", t2.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", t2.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", t2.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", t2.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", t2.FRAG_LOAD_ERROR = "fragLoadError", t2.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", t2.FRAG_DECRYPT_ERROR = "fragDecryptError", t2.FRAG_PARSING_ERROR = "fragParsingError", t2.FRAG_GAP = "fragGap", t2.REMUX_ALLOC_ERROR = "remuxAllocError", t2.KEY_LOAD_ERROR = "keyLoadError", t2.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", t2.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", t2.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", t2.BUFFER_APPEND_ERROR = "bufferAppendError", t2.BUFFER_APPENDING_ERROR = "bufferAppendingError", t2.BUFFER_STALLED_ERROR = "bufferStalledError", t2.BUFFER_FULL_ERROR = "bufferFullError", t2.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", t2.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", t2.INTERNAL_EXCEPTION = "internalException", t2.INTERNAL_ABORTED = "aborted", t2.UNKNOWN = "unknown", t2;
        }({}), R = function() {
        }, k = { trace: R, debug: R, log: R, warn: R, info: R, error: R }, b = k;
        function D(t2) {
          for (var e2 = arguments.length, r3 = new Array(e2 > 1 ? e2 - 1 : 0), i3 = 1; i3 < e2; i3++)
            r3[i3 - 1] = arguments[i3];
          r3.forEach(function(e3) {
            b[e3] = t2[e3] ? t2[e3].bind(t2) : function(t3) {
              var e4 = self.console[t3];
              return e4 ? e4.bind(self.console, "[" + t3 + "] >") : R;
            }(e3);
          });
        }
        function I(t2, e2) {
          if ("object" == typeof console && true === t2 || "object" == typeof t2) {
            D(t2, "debug", "log", "info", "warn", "error");
            try {
              b.log('Debug logs enabled for "' + e2 + '" in hls.js version 1.5.8');
            } catch (t3) {
              b = k;
            }
          } else
            b = k;
        }
        var w = b, C = /^(\d+)x(\d+)$/, _ = /(.+?)=(".*?"|.*?)(?:,|$)/g, x = function() {
          function t2(e3) {
            "string" == typeof e3 && (e3 = t2.parseAttrList(e3)), o(this, e3);
          }
          var e2 = t2.prototype;
          return e2.decimalInteger = function(t3) {
            var e3 = parseInt(this[t3], 10);
            return e3 > Number.MAX_SAFE_INTEGER ? 1 / 0 : e3;
          }, e2.hexadecimalInteger = function(t3) {
            if (this[t3]) {
              var e3 = (this[t3] || "0x").slice(2);
              e3 = (1 & e3.length ? "0" : "") + e3;
              for (var r3 = new Uint8Array(e3.length / 2), i3 = 0; i3 < e3.length / 2; i3++)
                r3[i3] = parseInt(e3.slice(2 * i3, 2 * i3 + 2), 16);
              return r3;
            }
            return null;
          }, e2.hexadecimalIntegerAsNumber = function(t3) {
            var e3 = parseInt(this[t3], 16);
            return e3 > Number.MAX_SAFE_INTEGER ? 1 / 0 : e3;
          }, e2.decimalFloatingPoint = function(t3) {
            return parseFloat(this[t3]);
          }, e2.optionalFloat = function(t3, e3) {
            var r3 = this[t3];
            return r3 ? parseFloat(r3) : e3;
          }, e2.enumeratedString = function(t3) {
            return this[t3];
          }, e2.bool = function(t3) {
            return "YES" === this[t3];
          }, e2.decimalResolution = function(t3) {
            var e3 = C.exec(this[t3]);
            if (null !== e3)
              return { width: parseInt(e3[1], 10), height: parseInt(e3[2], 10) };
          }, t2.parseAttrList = function(t3) {
            var e3, r3 = {};
            for (_.lastIndex = 0; null !== (e3 = _.exec(t3)); ) {
              var i3 = e3[2];
              0 === i3.indexOf('"') && i3.lastIndexOf('"') === i3.length - 1 && (i3 = i3.slice(1, -1)), r3[e3[1].trim()] = i3;
            }
            return r3;
          }, s(t2, [{ key: "clientAttrs", get: function() {
            return Object.keys(this).filter(function(t3) {
              return "X-" === t3.substring(0, 2);
            });
          } }]), t2;
        }();
        function P(t2) {
          return "SCTE35-OUT" === t2 || "SCTE35-IN" === t2;
        }
        var F = function() {
          function t2(t3, e2) {
            if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, e2) {
              var r3 = e2.attr;
              for (var i3 in r3)
                if (Object.prototype.hasOwnProperty.call(t3, i3) && t3[i3] !== r3[i3]) {
                  w.warn('DATERANGE tag attribute: "' + i3 + '" does not match for tags with ID: "' + t3.ID + '"'), this._badValueForSameId = i3;
                  break;
                }
              t3 = o(new x({}), r3, t3);
            }
            if (this.attr = t3, this._startDate = new Date(t3["START-DATE"]), "END-DATE" in this.attr) {
              var n2 = new Date(this.attr["END-DATE"]);
              y(n2.getTime()) && (this._endDate = n2);
            }
          }
          return s(t2, [{ key: "id", get: function() {
            return this.attr.ID;
          } }, { key: "class", get: function() {
            return this.attr.CLASS;
          } }, { key: "startDate", get: function() {
            return this._startDate;
          } }, { key: "endDate", get: function() {
            if (this._endDate)
              return this._endDate;
            var t3 = this.duration;
            return null !== t3 ? new Date(this._startDate.getTime() + 1e3 * t3) : null;
          } }, { key: "duration", get: function() {
            if ("DURATION" in this.attr) {
              var t3 = this.attr.decimalFloatingPoint("DURATION");
              if (y(t3))
                return t3;
            } else if (this._endDate)
              return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
            return null;
          } }, { key: "plannedDuration", get: function() {
            return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
          } }, { key: "endOnNext", get: function() {
            return this.attr.bool("END-ON-NEXT");
          } }, { key: "isValid", get: function() {
            return !!this.id && !this._badValueForSameId && y(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class);
          } }]), t2;
        }(), M = function() {
          this.aborted = false, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = { start: 0, first: 0, end: 0 }, this.parsing = { start: 0, end: 0 }, this.buffering = { start: 0, first: 0, end: 0 };
        }, O = "audio", N = "video", U = "audiovideo", B = function() {
          function t2(t3) {
            var e2;
            this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((e2 = {})[O] = null, e2[N] = null, e2[U] = null, e2), this.baseurl = t3;
          }
          return t2.prototype.setByteRange = function(t3, e2) {
            var r3, i3 = t3.split("@", 2);
            r3 = 1 === i3.length ? (null == e2 ? void 0 : e2.byteRangeEndOffset) || 0 : parseInt(i3[1]), this._byteRange = [r3, parseInt(i3[0]) + r3];
          }, s(t2, [{ key: "byteRange", get: function() {
            return this._byteRange ? this._byteRange : [];
          } }, { key: "byteRangeStartOffset", get: function() {
            return this.byteRange[0];
          } }, { key: "byteRangeEndOffset", get: function() {
            return this.byteRange[1];
          } }, { key: "url", get: function() {
            return !this._url && this.baseurl && this.relurl && (this._url = p.buildAbsoluteURL(this.baseurl, this.relurl, { alwaysNormalize: true })), this._url || "";
          }, set: function(t3) {
            this._url = t3;
          } }]), t2;
        }(), G = function(t2) {
          function e2(e3, r4) {
            var i3;
            return (i3 = t2.call(this, r4) || this)._decryptdata = null, i3.rawProgramDateTime = null, i3.programDateTime = null, i3.tagList = [], i3.duration = 0, i3.sn = 0, i3.levelkeys = void 0, i3.type = void 0, i3.loader = null, i3.keyLoader = null, i3.level = -1, i3.cc = 0, i3.startPTS = void 0, i3.endPTS = void 0, i3.startDTS = void 0, i3.endDTS = void 0, i3.start = 0, i3.deltaPTS = void 0, i3.maxStartPTS = void 0, i3.minEndPTS = void 0, i3.stats = new M(), i3.data = void 0, i3.bitrateTest = false, i3.title = null, i3.initSegment = null, i3.endList = void 0, i3.gap = void 0, i3.urlId = 0, i3.type = e3, i3;
          }
          l(e2, t2);
          var r3 = e2.prototype;
          return r3.setKeyFormat = function(t3) {
            if (this.levelkeys) {
              var e3 = this.levelkeys[t3];
              e3 && !this._decryptdata && (this._decryptdata = e3.getDecryptData(this.sn));
            }
          }, r3.abortRequests = function() {
            var t3, e3;
            null == (t3 = this.loader) || t3.abort(), null == (e3 = this.keyLoader) || e3.abort();
          }, r3.setElementaryStreamInfo = function(t3, e3, r4, i3, n2, a2) {
            void 0 === a2 && (a2 = false);
            var s2 = this.elementaryStreams, o2 = s2[t3];
            o2 ? (o2.startPTS = Math.min(o2.startPTS, e3), o2.endPTS = Math.max(o2.endPTS, r4), o2.startDTS = Math.min(o2.startDTS, i3), o2.endDTS = Math.max(o2.endDTS, n2)) : s2[t3] = { startPTS: e3, endPTS: r4, startDTS: i3, endDTS: n2, partial: a2 };
          }, r3.clearElementaryStreamInfo = function() {
            var t3 = this.elementaryStreams;
            t3[O] = null, t3[N] = null, t3[U] = null;
          }, s(e2, [{ key: "decryptdata", get: function() {
            if (!this.levelkeys && !this._decryptdata)
              return null;
            if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
              var t3 = this.levelkeys.identity;
              if (t3)
                this._decryptdata = t3.getDecryptData(this.sn);
              else {
                var e3 = Object.keys(this.levelkeys);
                if (1 === e3.length)
                  return this._decryptdata = this.levelkeys[e3[0]].getDecryptData(this.sn);
              }
            }
            return this._decryptdata;
          } }, { key: "end", get: function() {
            return this.start + this.duration;
          } }, { key: "endProgramDateTime", get: function() {
            if (null === this.programDateTime)
              return null;
            if (!y(this.programDateTime))
              return null;
            var t3 = y(this.duration) ? this.duration : 0;
            return this.programDateTime + 1e3 * t3;
          } }, { key: "encrypted", get: function() {
            var t3;
            if (null != (t3 = this._decryptdata) && t3.encrypted)
              return true;
            if (this.levelkeys) {
              var e3 = Object.keys(this.levelkeys), r4 = e3.length;
              if (r4 > 1 || 1 === r4 && this.levelkeys[e3[0]].encrypted)
                return true;
            }
            return false;
          } }]), e2;
        }(B), K = function(t2) {
          function e2(e3, r3, i3, n2, a2) {
            var s2;
            (s2 = t2.call(this, i3) || this).fragOffset = 0, s2.duration = 0, s2.gap = false, s2.independent = false, s2.relurl = void 0, s2.fragment = void 0, s2.index = void 0, s2.stats = new M(), s2.duration = e3.decimalFloatingPoint("DURATION"), s2.gap = e3.bool("GAP"), s2.independent = e3.bool("INDEPENDENT"), s2.relurl = e3.enumeratedString("URI"), s2.fragment = r3, s2.index = n2;
            var o2 = e3.enumeratedString("BYTERANGE");
            return o2 && s2.setByteRange(o2, a2), a2 && (s2.fragOffset = a2.fragOffset + a2.duration), s2;
          }
          return l(e2, t2), s(e2, [{ key: "start", get: function() {
            return this.fragment.start + this.fragOffset;
          } }, { key: "end", get: function() {
            return this.start + this.duration;
          } }, { key: "loaded", get: function() {
            var t3 = this.elementaryStreams;
            return !!(t3.audio || t3.video || t3.audiovideo);
          } }]), e2;
        }(B), H = function() {
          function t2(t3) {
            this.PTSKnown = false, this.alignedSliding = false, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = true, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = true, this.advanced = true, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = false, this.canSkipUntil = 0, this.canSkipDateRanges = false, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = false, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = t3;
          }
          return t2.prototype.reloaded = function(t3) {
            if (!t3)
              return this.advanced = true, void (this.updated = true);
            var e2 = this.lastPartSn - t3.lastPartSn, r3 = this.lastPartIndex - t3.lastPartIndex;
            this.updated = this.endSN !== t3.endSN || !!r3 || !!e2 || !this.live, this.advanced = this.endSN > t3.endSN || e2 > 0 || 0 === e2 && r3 > 0, this.updated || this.advanced ? this.misses = Math.floor(0.6 * t3.misses) : this.misses = t3.misses + 1, this.availabilityDelay = t3.availabilityDelay;
          }, s(t2, [{ key: "hasProgramDateTime", get: function() {
            return !!this.fragments.length && y(this.fragments[this.fragments.length - 1].programDateTime);
          } }, { key: "levelTargetDuration", get: function() {
            return this.averagetargetduration || this.targetduration || 10;
          } }, { key: "drift", get: function() {
            var t3 = this.driftEndTime - this.driftStartTime;
            return t3 > 0 ? 1e3 * (this.driftEnd - this.driftStart) / t3 : 1;
          } }, { key: "edge", get: function() {
            return this.partEnd || this.fragmentEnd;
          } }, { key: "partEnd", get: function() {
            var t3;
            return null != (t3 = this.partList) && t3.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
          } }, { key: "fragmentEnd", get: function() {
            var t3;
            return null != (t3 = this.fragments) && t3.length ? this.fragments[this.fragments.length - 1].end : 0;
          } }, { key: "age", get: function() {
            return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
          } }, { key: "lastPartIndex", get: function() {
            var t3;
            return null != (t3 = this.partList) && t3.length ? this.partList[this.partList.length - 1].index : -1;
          } }, { key: "lastPartSn", get: function() {
            var t3;
            return null != (t3 = this.partList) && t3.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
          } }]), t2;
        }();
        function V(t2) {
          return Uint8Array.from(atob(t2), function(t3) {
            return t3.charCodeAt(0);
          });
        }
        function Y(t2) {
          var e2, r3, i3 = t2.split(":"), n2 = null;
          if ("data" === i3[0] && 2 === i3.length) {
            var a2 = i3[1].split(";"), s2 = a2[a2.length - 1].split(",");
            if (2 === s2.length) {
              var o2 = "base64" === s2[0], l2 = s2[1];
              o2 ? (a2.splice(-1, 1), n2 = V(l2)) : (e2 = W(l2).subarray(0, 16), (r3 = new Uint8Array(16)).set(e2, 16 - e2.length), n2 = r3);
            }
          }
          return n2;
        }
        function W(t2) {
          return Uint8Array.from(unescape(encodeURIComponent(t2)), function(t3) {
            return t3.charCodeAt(0);
          });
        }
        var j = "undefined" != typeof self ? self : void 0, q = { CLEARKEY: "org.w3.clearkey", FAIRPLAY: "com.apple.fps", PLAYREADY: "com.microsoft.playready", WIDEVINE: "com.widevine.alpha" }, X = "org.w3.clearkey", z = "com.apple.streamingkeydelivery", Q = "com.microsoft.playready", J = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";
        function $(t2) {
          switch (t2) {
            case z:
              return q.FAIRPLAY;
            case Q:
              return q.PLAYREADY;
            case J:
              return q.WIDEVINE;
            case X:
              return q.CLEARKEY;
          }
        }
        var Z = "edef8ba979d64acea3c827dcd51d21ed";
        function tt(t2) {
          switch (t2) {
            case q.FAIRPLAY:
              return z;
            case q.PLAYREADY:
              return Q;
            case q.WIDEVINE:
              return J;
            case q.CLEARKEY:
              return X;
          }
        }
        function et(t2) {
          var e2 = t2.drmSystems, r3 = t2.widevineLicenseUrl, i3 = e2 ? [q.FAIRPLAY, q.WIDEVINE, q.PLAYREADY, q.CLEARKEY].filter(function(t3) {
            return !!e2[t3];
          }) : [];
          return !i3[q.WIDEVINE] && r3 && i3.push(q.WIDEVINE), i3;
        }
        var rt, it = null != j && null != (rt = j.navigator) && rt.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
        function nt(t2, e2, r3) {
          return Uint8Array.prototype.slice ? t2.slice(e2, r3) : new Uint8Array(Array.prototype.slice.call(t2, e2, r3));
        }
        var at, st = function(t2, e2) {
          return e2 + 10 <= t2.length && 73 === t2[e2] && 68 === t2[e2 + 1] && 51 === t2[e2 + 2] && t2[e2 + 3] < 255 && t2[e2 + 4] < 255 && t2[e2 + 6] < 128 && t2[e2 + 7] < 128 && t2[e2 + 8] < 128 && t2[e2 + 9] < 128;
        }, ot = function(t2, e2) {
          return e2 + 10 <= t2.length && 51 === t2[e2] && 68 === t2[e2 + 1] && 73 === t2[e2 + 2] && t2[e2 + 3] < 255 && t2[e2 + 4] < 255 && t2[e2 + 6] < 128 && t2[e2 + 7] < 128 && t2[e2 + 8] < 128 && t2[e2 + 9] < 128;
        }, lt = function(t2, e2) {
          for (var r3 = e2, i3 = 0; st(t2, e2); )
            i3 += 10, i3 += ut(t2, e2 + 6), ot(t2, e2 + 10) && (i3 += 10), e2 += i3;
          if (i3 > 0)
            return t2.subarray(r3, r3 + i3);
        }, ut = function(t2, e2) {
          var r3 = 0;
          return r3 = (127 & t2[e2]) << 21, r3 |= (127 & t2[e2 + 1]) << 14, r3 |= (127 & t2[e2 + 2]) << 7, r3 |= 127 & t2[e2 + 3];
        }, ht = function(t2, e2) {
          return st(t2, e2) && ut(t2, e2 + 6) + 10 <= t2.length - e2;
        }, dt = function(t2) {
          for (var e2 = gt(t2), r3 = 0; r3 < e2.length; r3++) {
            var i3 = e2[r3];
            if (ct(i3))
              return Et(i3);
          }
        }, ct = function(t2) {
          return t2 && "PRIV" === t2.key && "com.apple.streaming.transportStreamTimestamp" === t2.info;
        }, ft = function(t2) {
          var e2 = String.fromCharCode(t2[0], t2[1], t2[2], t2[3]), r3 = ut(t2, 4);
          return { type: e2, size: r3, data: t2.subarray(10, 10 + r3) };
        }, gt = function(t2) {
          for (var e2 = 0, r3 = []; st(t2, e2); ) {
            for (var i3 = ut(t2, e2 + 6), n2 = (e2 += 10) + i3; e2 + 8 < n2; ) {
              var a2 = ft(t2.subarray(e2)), s2 = vt(a2);
              s2 && r3.push(s2), e2 += a2.size + 10;
            }
            ot(t2, e2) && (e2 += 10);
          }
          return r3;
        }, vt = function(t2) {
          return "PRIV" === t2.type ? mt(t2) : "W" === t2.type[0] ? yt(t2) : pt(t2);
        }, mt = function(t2) {
          if (!(t2.size < 2)) {
            var e2 = Tt(t2.data, true), r3 = new Uint8Array(t2.data.subarray(e2.length + 1));
            return { key: t2.type, info: e2, data: r3.buffer };
          }
        }, pt = function(t2) {
          if (!(t2.size < 2)) {
            if ("TXXX" === t2.type) {
              var e2 = 1, r3 = Tt(t2.data.subarray(e2), true);
              e2 += r3.length + 1;
              var i3 = Tt(t2.data.subarray(e2));
              return { key: t2.type, info: r3, data: i3 };
            }
            var n2 = Tt(t2.data.subarray(1));
            return { key: t2.type, data: n2 };
          }
        }, yt = function(t2) {
          if ("WXXX" === t2.type) {
            if (t2.size < 2)
              return;
            var e2 = 1, r3 = Tt(t2.data.subarray(e2), true);
            e2 += r3.length + 1;
            var i3 = Tt(t2.data.subarray(e2));
            return { key: t2.type, info: r3, data: i3 };
          }
          var n2 = Tt(t2.data);
          return { key: t2.type, data: n2 };
        }, Et = function(t2) {
          if (8 === t2.data.byteLength) {
            var e2 = new Uint8Array(t2.data), r3 = 1 & e2[3], i3 = (e2[4] << 23) + (e2[5] << 15) + (e2[6] << 7) + e2[7];
            return i3 /= 45, r3 && (i3 += 4772185884e-2), Math.round(i3);
          }
        }, Tt = function(t2, e2) {
          void 0 === e2 && (e2 = false);
          var r3 = St();
          if (r3) {
            var i3 = r3.decode(t2);
            if (e2) {
              var n2 = i3.indexOf("\0");
              return -1 !== n2 ? i3.substring(0, n2) : i3;
            }
            return i3.replace(/\0/g, "");
          }
          for (var a2, s2, o2, l2 = t2.length, u2 = "", h2 = 0; h2 < l2; ) {
            if (0 === (a2 = t2[h2++]) && e2)
              return u2;
            if (0 !== a2 && 3 !== a2)
              switch (a2 >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  u2 += String.fromCharCode(a2);
                  break;
                case 12:
                case 13:
                  s2 = t2[h2++], u2 += String.fromCharCode((31 & a2) << 6 | 63 & s2);
                  break;
                case 14:
                  s2 = t2[h2++], o2 = t2[h2++], u2 += String.fromCharCode((15 & a2) << 12 | (63 & s2) << 6 | (63 & o2) << 0);
              }
          }
          return u2;
        };
        function St() {
          if (!navigator.userAgent.includes("PlayStation 4"))
            return at || void 0 === self.TextDecoder || (at = new self.TextDecoder("utf-8")), at;
        }
        var Lt = function(t2) {
          for (var e2 = "", r3 = 0; r3 < t2.length; r3++) {
            var i3 = t2[r3].toString(16);
            i3.length < 2 && (i3 = "0" + i3), e2 += i3;
          }
          return e2;
        }, At = Math.pow(2, 32) - 1, Rt = [].push, kt = { video: 1, audio: 2, id3: 3, text: 4 };
        function bt(t2) {
          return String.fromCharCode.apply(null, t2);
        }
        function Dt(t2, e2) {
          var r3 = t2[e2] << 8 | t2[e2 + 1];
          return r3 < 0 ? 65536 + r3 : r3;
        }
        function It(t2, e2) {
          var r3 = Ct(t2, e2);
          return r3 < 0 ? 4294967296 + r3 : r3;
        }
        function wt(t2, e2) {
          var r3 = It(t2, e2);
          return r3 *= Math.pow(2, 32), r3 += It(t2, e2 + 4);
        }
        function Ct(t2, e2) {
          return t2[e2] << 24 | t2[e2 + 1] << 16 | t2[e2 + 2] << 8 | t2[e2 + 3];
        }
        function _t(t2, e2, r3) {
          t2[e2] = r3 >> 24, t2[e2 + 1] = r3 >> 16 & 255, t2[e2 + 2] = r3 >> 8 & 255, t2[e2 + 3] = 255 & r3;
        }
        function xt(t2, e2) {
          var r3 = [];
          if (!e2.length)
            return r3;
          for (var i3 = t2.byteLength, n2 = 0; n2 < i3; ) {
            var a2 = It(t2, n2), s2 = a2 > 1 ? n2 + a2 : i3;
            if (bt(t2.subarray(n2 + 4, n2 + 8)) === e2[0])
              if (1 === e2.length)
                r3.push(t2.subarray(n2 + 8, s2));
              else {
                var o2 = xt(t2.subarray(n2 + 8, s2), e2.slice(1));
                o2.length && Rt.apply(r3, o2);
              }
            n2 = s2;
          }
          return r3;
        }
        function Pt(t2) {
          var e2 = [], r3 = t2[0], i3 = 8, n2 = It(t2, i3);
          i3 += 4;
          var a2 = 0, s2 = 0;
          0 === r3 ? (a2 = It(t2, i3), s2 = It(t2, i3 + 4), i3 += 8) : (a2 = wt(t2, i3), s2 = wt(t2, i3 + 8), i3 += 16), i3 += 2;
          var o2 = t2.length + s2, l2 = Dt(t2, i3);
          i3 += 2;
          for (var u2 = 0; u2 < l2; u2++) {
            var h2 = i3, d2 = It(t2, h2);
            h2 += 4;
            var c2 = 2147483647 & d2;
            if (1 == (2147483648 & d2) >>> 31)
              return w.warn("SIDX has hierarchical references (not supported)"), null;
            var f2 = It(t2, h2);
            h2 += 4, e2.push({ referenceSize: c2, subsegmentDuration: f2, info: { duration: f2 / n2, start: o2, end: o2 + c2 - 1 } }), o2 += c2, i3 = h2 += 4;
          }
          return { earliestPresentationTime: a2, timescale: n2, version: r3, referencesCount: l2, references: e2 };
        }
        function Ft(t2) {
          for (var e2 = [], r3 = xt(t2, ["moov", "trak"]), n2 = 0; n2 < r3.length; n2++) {
            var a2 = r3[n2], s2 = xt(a2, ["tkhd"])[0];
            if (s2) {
              var o2 = s2[0], l2 = It(s2, 0 === o2 ? 12 : 20), u2 = xt(a2, ["mdia", "mdhd"])[0];
              if (u2) {
                var h2 = It(u2, 0 === (o2 = u2[0]) ? 12 : 20), d2 = xt(a2, ["mdia", "hdlr"])[0];
                if (d2) {
                  var c2 = bt(d2.subarray(8, 12)), f2 = { soun: O, vide: N }[c2];
                  if (f2) {
                    var g2 = Mt(xt(a2, ["mdia", "minf", "stbl", "stsd"])[0]);
                    e2[l2] = { timescale: h2, type: f2 }, e2[f2] = i2({ timescale: h2, id: l2 }, g2);
                  }
                }
              }
            }
          }
          return xt(t2, ["moov", "mvex", "trex"]).forEach(function(t3) {
            var r4 = It(t3, 4), i3 = e2[r4];
            i3 && (i3.default = { duration: It(t3, 12), flags: It(t3, 20) });
          }), e2;
        }
        function Mt(t2) {
          var e2 = t2.subarray(8), r3 = e2.subarray(86), i3 = bt(e2.subarray(4, 8)), n2 = i3, a2 = "enca" === i3 || "encv" === i3;
          if (a2) {
            var s2 = xt(e2, [i3])[0];
            xt(s2.subarray("enca" === i3 ? 28 : 78), ["sinf"]).forEach(function(t3) {
              var e3 = xt(t3, ["schm"])[0];
              if (e3) {
                var r4 = bt(e3.subarray(4, 8));
                if ("cbcs" === r4 || "cenc" === r4) {
                  var i4 = xt(t3, ["frma"])[0];
                  i4 && (n2 = bt(i4));
                }
              }
            });
          }
          switch (n2) {
            case "avc1":
            case "avc2":
            case "avc3":
            case "avc4":
              var o2 = xt(r3, ["avcC"])[0];
              n2 += "." + Nt(o2[1]) + Nt(o2[2]) + Nt(o2[3]);
              break;
            case "mp4a":
              var l2 = xt(e2, [i3])[0], u2 = xt(l2.subarray(28), ["esds"])[0];
              if (u2 && u2.length > 12) {
                var h2 = 4;
                if (3 !== u2[h2++])
                  break;
                h2 = Ot(u2, h2), h2 += 2;
                var d2 = u2[h2++];
                if (128 & d2 && (h2 += 2), 64 & d2 && (h2 += u2[h2++]), 4 !== u2[h2++])
                  break;
                h2 = Ot(u2, h2);
                var c2 = u2[h2++];
                if (64 !== c2)
                  break;
                if (n2 += "." + Nt(c2), h2 += 12, 5 !== u2[h2++])
                  break;
                h2 = Ot(u2, h2);
                var f2 = u2[h2++], g2 = (248 & f2) >> 3;
                31 === g2 && (g2 += 1 + ((7 & f2) << 3) + ((224 & u2[h2]) >> 5)), n2 += "." + g2;
              }
              break;
            case "hvc1":
            case "hev1":
              var v2 = xt(r3, ["hvcC"])[0], m2 = v2[1], p2 = ["", "A", "B", "C"][m2 >> 6], y2 = 31 & m2, E2 = It(v2, 2), T2 = (32 & m2) >> 5 ? "H" : "L", S2 = v2[12], L2 = v2.subarray(6, 12);
              n2 += "." + p2 + y2, n2 += "." + E2.toString(16).toUpperCase(), n2 += "." + T2 + S2;
              for (var A2 = "", R2 = L2.length; R2--; ) {
                var k2 = L2[R2];
                (k2 || A2) && (A2 = "." + k2.toString(16).toUpperCase() + A2);
              }
              n2 += A2;
              break;
            case "dvh1":
            case "dvhe":
              var b2 = xt(r3, ["dvcC"])[0], D2 = b2[2] >> 1 & 127, I2 = b2[2] << 5 & 32 | b2[3] >> 3 & 31;
              n2 += "." + Ut(D2) + "." + Ut(I2);
              break;
            case "vp09":
              var w2 = xt(r3, ["vpcC"])[0], C2 = w2[4], _2 = w2[5], x2 = w2[6] >> 4 & 15;
              n2 += "." + Ut(C2) + "." + Ut(_2) + "." + Ut(x2);
              break;
            case "av01":
              var P2 = xt(r3, ["av1C"])[0], F2 = P2[1] >>> 5, M2 = 31 & P2[1], O2 = P2[2] >>> 7 ? "H" : "M", N2 = (64 & P2[2]) >> 6, U2 = (32 & P2[2]) >> 5, B2 = 2 === F2 && N2 ? U2 ? 12 : 10 : N2 ? 10 : 8, G2 = (16 & P2[2]) >> 4, K2 = (8 & P2[2]) >> 3, H2 = (4 & P2[2]) >> 2, V2 = 3 & P2[2];
              n2 += "." + F2 + "." + Ut(M2) + O2 + "." + Ut(B2) + "." + G2 + "." + K2 + H2 + V2 + "." + Ut(1) + "." + Ut(1) + "." + Ut(1) + ".0";
          }
          return { codec: n2, encrypted: a2 };
        }
        function Ot(t2, e2) {
          for (var r3 = e2 + 5; 128 & t2[e2++] && e2 < r3; )
            ;
          return e2;
        }
        function Nt(t2) {
          return ("0" + t2.toString(16).toUpperCase()).slice(-2);
        }
        function Ut(t2) {
          return (t2 < 10 ? "0" : "") + t2;
        }
        function Bt(t2) {
          var e2 = xt(t2, ["schm"])[0];
          if (e2) {
            var r3 = bt(e2.subarray(4, 8));
            if ("cbcs" === r3 || "cenc" === r3)
              return xt(t2, ["schi", "tenc"])[0];
          }
          return w.error("[eme] missing 'schm' box"), null;
        }
        function Gt(t2) {
          var e2 = It(t2, 0), r3 = 8;
          1 & e2 && (r3 += 4), 4 & e2 && (r3 += 4);
          for (var i3 = 0, n2 = It(t2, 4), a2 = 0; a2 < n2; a2++)
            256 & e2 && (i3 += It(t2, r3), r3 += 4), 512 & e2 && (r3 += 4), 1024 & e2 && (r3 += 4), 2048 & e2 && (r3 += 4);
          return i3;
        }
        function Kt(t2, e2) {
          var r3 = new Uint8Array(t2.length + e2.length);
          return r3.set(t2), r3.set(e2, t2.length), r3;
        }
        function Ht(t2, e2) {
          var r3 = [], i3 = e2.samples, n2 = e2.timescale, a2 = e2.id, s2 = false;
          return xt(i3, ["moof"]).map(function(o2) {
            var l2 = o2.byteOffset - 8;
            xt(o2, ["traf"]).map(function(o3) {
              var u2 = xt(o3, ["tfdt"]).map(function(t3) {
                var e3 = t3[0], r4 = It(t3, 4);
                return 1 === e3 && (r4 *= Math.pow(2, 32), r4 += It(t3, 8)), r4 / n2;
              })[0];
              return void 0 !== u2 && (t2 = u2), xt(o3, ["tfhd"]).map(function(u3) {
                var h2 = It(u3, 4), d2 = 16777215 & It(u3, 0), c2 = 0, f2 = 0 != (16 & d2), g2 = 0, v2 = 0 != (32 & d2), m2 = 8;
                h2 === a2 && (0 != (1 & d2) && (m2 += 8), 0 != (2 & d2) && (m2 += 4), 0 != (8 & d2) && (c2 = It(u3, m2), m2 += 4), f2 && (g2 = It(u3, m2), m2 += 4), v2 && (m2 += 4), "video" === e2.type && (s2 = function(t3) {
                  if (!t3)
                    return false;
                  var e3 = t3.indexOf("."), r4 = e3 < 0 ? t3 : t3.substring(0, e3);
                  return "hvc1" === r4 || "hev1" === r4 || "dvh1" === r4 || "dvhe" === r4;
                }(e2.codec)), xt(o3, ["trun"]).map(function(a3) {
                  var o4 = a3[0], u4 = 16777215 & It(a3, 0), h3 = 0 != (1 & u4), d3 = 0, f3 = 0 != (4 & u4), v3 = 0 != (256 & u4), m3 = 0, p2 = 0 != (512 & u4), y2 = 0, E2 = 0 != (1024 & u4), T2 = 0 != (2048 & u4), S2 = 0, L2 = It(a3, 4), A2 = 8;
                  h3 && (d3 = It(a3, A2), A2 += 4), f3 && (A2 += 4);
                  for (var R2 = d3 + l2, k2 = 0; k2 < L2; k2++) {
                    if (v3 ? (m3 = It(a3, A2), A2 += 4) : m3 = c2, p2 ? (y2 = It(a3, A2), A2 += 4) : y2 = g2, E2 && (A2 += 4), T2 && (S2 = 0 === o4 ? It(a3, A2) : Ct(a3, A2), A2 += 4), e2.type === N)
                      for (var b2 = 0; b2 < y2; ) {
                        var D2 = It(i3, R2);
                        Vt(s2, i3[R2 += 4]) && Yt(i3.subarray(R2, R2 + D2), s2 ? 2 : 1, t2 + S2 / n2, r3), R2 += D2, b2 += D2 + 4;
                      }
                    t2 += m3 / n2;
                  }
                }));
              });
            });
          }), r3;
        }
        function Vt(t2, e2) {
          if (t2) {
            var r3 = e2 >> 1 & 63;
            return 39 === r3 || 40 === r3;
          }
          return 6 == (31 & e2);
        }
        function Yt(t2, e2, r3, i3) {
          var n2 = Wt(t2), a2 = 0;
          a2 += e2;
          for (var s2 = 0, o2 = 0, l2 = 0; a2 < n2.length; ) {
            s2 = 0;
            do {
              if (a2 >= n2.length)
                break;
              s2 += l2 = n2[a2++];
            } while (255 === l2);
            o2 = 0;
            do {
              if (a2 >= n2.length)
                break;
              o2 += l2 = n2[a2++];
            } while (255 === l2);
            var u2 = n2.length - a2, h2 = a2;
            if (o2 < u2)
              a2 += o2;
            else if (o2 > u2) {
              w.error("Malformed SEI payload. " + o2 + " is too small, only " + u2 + " bytes left to parse.");
              break;
            }
            if (4 === s2) {
              if (181 === n2[h2++]) {
                var d2 = Dt(n2, h2);
                if (h2 += 2, 49 === d2) {
                  var c2 = It(n2, h2);
                  if (h2 += 4, 1195456820 === c2) {
                    var f2 = n2[h2++];
                    if (3 === f2) {
                      var g2 = n2[h2++], v2 = 64 & g2, m2 = v2 ? 2 + 3 * (31 & g2) : 0, p2 = new Uint8Array(m2);
                      if (v2) {
                        p2[0] = g2;
                        for (var y2 = 1; y2 < m2; y2++)
                          p2[y2] = n2[h2++];
                      }
                      i3.push({ type: f2, payloadType: s2, pts: r3, bytes: p2 });
                    }
                  }
                }
              }
            } else if (5 === s2 && o2 > 16) {
              for (var E2 = [], T2 = 0; T2 < 16; T2++) {
                var S2 = n2[h2++].toString(16);
                E2.push(1 == S2.length ? "0" + S2 : S2), 3 !== T2 && 5 !== T2 && 7 !== T2 && 9 !== T2 || E2.push("-");
              }
              for (var L2 = o2 - 16, A2 = new Uint8Array(L2), R2 = 0; R2 < L2; R2++)
                A2[R2] = n2[h2++];
              i3.push({ payloadType: s2, pts: r3, uuid: E2.join(""), userData: Tt(A2), userDataBytes: A2 });
            }
          }
        }
        function Wt(t2) {
          for (var e2 = t2.byteLength, r3 = [], i3 = 1; i3 < e2 - 2; )
            0 === t2[i3] && 0 === t2[i3 + 1] && 3 === t2[i3 + 2] ? (r3.push(i3 + 2), i3 += 2) : i3++;
          if (0 === r3.length)
            return t2;
          var n2 = e2 - r3.length, a2 = new Uint8Array(n2), s2 = 0;
          for (i3 = 0; i3 < n2; s2++, i3++)
            s2 === r3[0] && (s2++, r3.shift()), a2[i3] = t2[s2];
          return a2;
        }
        function jt(t2, e2, r3) {
          if (16 !== t2.byteLength)
            throw new RangeError("Invalid system id");
          var i3, n2, a2;
          if (e2) {
            i3 = 1, n2 = new Uint8Array(16 * e2.length);
            for (var s2 = 0; s2 < e2.length; s2++) {
              var o2 = e2[s2];
              if (16 !== o2.byteLength)
                throw new RangeError("Invalid key");
              n2.set(o2, 16 * s2);
            }
          } else
            i3 = 0, n2 = new Uint8Array();
          i3 > 0 ? (a2 = new Uint8Array(4), e2.length > 0 && new DataView(a2.buffer).setUint32(0, e2.length, false)) : a2 = new Uint8Array();
          var l2 = new Uint8Array(4);
          return r3 && r3.byteLength > 0 && new DataView(l2.buffer).setUint32(0, r3.byteLength, false), function(t3) {
            for (var e3 = arguments.length, r4 = new Array(e3 > 1 ? e3 - 1 : 0), i4 = 1; i4 < e3; i4++)
              r4[i4 - 1] = arguments[i4];
            for (var n3 = r4.length, a3 = 8, s3 = n3; s3--; )
              a3 += r4[s3].byteLength;
            var o3 = new Uint8Array(a3);
            for (o3[0] = a3 >> 24 & 255, o3[1] = a3 >> 16 & 255, o3[2] = a3 >> 8 & 255, o3[3] = 255 & a3, o3.set(t3, 4), s3 = 0, a3 = 8; s3 < n3; s3++)
              o3.set(r4[s3], a3), a3 += r4[s3].byteLength;
            return o3;
          }([112, 115, 115, 104], new Uint8Array([i3, 0, 0, 0]), t2, a2, n2, l2, r3 || new Uint8Array());
        }
        var qt = {}, Xt = function() {
          function t2(t3, e3, r3, i3, n2) {
            void 0 === i3 && (i3 = [1]), void 0 === n2 && (n2 = null), this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = t3, this.uri = e3, this.keyFormat = r3, this.keyFormatVersions = i3, this.iv = n2, this.encrypted = !!t3 && "NONE" !== t3, this.isCommonEncryption = this.encrypted && "AES-128" !== t3;
          }
          t2.clearKeyUriToKeyIdMap = function() {
            qt = {};
          };
          var e2 = t2.prototype;
          return e2.isSupported = function() {
            if (this.method) {
              if ("AES-128" === this.method || "NONE" === this.method)
                return true;
              if ("identity" === this.keyFormat)
                return "SAMPLE-AES" === this.method;
              switch (this.keyFormat) {
                case z:
                case J:
                case Q:
                case X:
                  return -1 !== ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method);
              }
            }
            return false;
          }, e2.getDecryptData = function(e3) {
            if (!this.encrypted || !this.uri)
              return null;
            if ("AES-128" === this.method && this.uri && !this.iv) {
              "number" != typeof e3 && ("AES-128" !== this.method || this.iv || w.warn('missing IV for initialization segment with method="' + this.method + '" - compliance issue'), e3 = 0);
              var r3 = function(t3) {
                for (var e4 = new Uint8Array(16), r4 = 12; r4 < 16; r4++)
                  e4[r4] = t3 >> 8 * (15 - r4) & 255;
                return e4;
              }(e3);
              return new t2(this.method, this.uri, "identity", this.keyFormatVersions, r3);
            }
            var i3 = Y(this.uri);
            if (i3)
              switch (this.keyFormat) {
                case J:
                  this.pssh = i3, i3.length >= 22 && (this.keyId = i3.subarray(i3.length - 22, i3.length - 6));
                  break;
                case Q:
                  var n2 = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                  this.pssh = jt(n2, null, i3);
                  var a2 = new Uint16Array(i3.buffer, i3.byteOffset, i3.byteLength / 2), s2 = String.fromCharCode.apply(null, Array.from(a2)), o2 = s2.substring(s2.indexOf("<"), s2.length), l2 = new DOMParser().parseFromString(o2, "text/xml").getElementsByTagName("KID")[0];
                  if (l2) {
                    var u2 = l2.childNodes[0] ? l2.childNodes[0].nodeValue : l2.getAttribute("VALUE");
                    if (u2) {
                      var h2 = V(u2).subarray(0, 16);
                      !function(t3) {
                        var e4 = function(t4, e5, r4) {
                          var i4 = t4[e5];
                          t4[e5] = t4[r4], t4[r4] = i4;
                        };
                        e4(t3, 0, 3), e4(t3, 1, 2), e4(t3, 4, 5), e4(t3, 6, 7);
                      }(h2), this.keyId = h2;
                    }
                  }
                  break;
                default:
                  var d2 = i3.subarray(0, 16);
                  if (16 !== d2.length) {
                    var c2 = new Uint8Array(16);
                    c2.set(d2, 16 - d2.length), d2 = c2;
                  }
                  this.keyId = d2;
              }
            if (!this.keyId || 16 !== this.keyId.byteLength) {
              var f2 = qt[this.uri];
              if (!f2) {
                var g2 = Object.keys(qt).length % Number.MAX_SAFE_INTEGER;
                f2 = new Uint8Array(16), new DataView(f2.buffer, 12, 4).setUint32(0, g2), qt[this.uri] = f2;
              }
              this.keyId = f2;
            }
            return this;
          }, t2;
        }(), zt = /\{\$([a-zA-Z0-9-_]+)\}/g;
        function Qt(t2) {
          return zt.test(t2);
        }
        function Jt(t2, e2, r3) {
          if (null !== t2.variableList || t2.hasVariableRefs)
            for (var i3 = r3.length; i3--; ) {
              var n2 = r3[i3], a2 = e2[n2];
              a2 && (e2[n2] = $t(t2, a2));
            }
        }
        function $t(t2, e2) {
          if (null !== t2.variableList || t2.hasVariableRefs) {
            var r3 = t2.variableList;
            return e2.replace(zt, function(e3) {
              var i3 = e3.substring(2, e3.length - 1), n2 = null == r3 ? void 0 : r3[i3];
              return void 0 === n2 ? (t2.playlistParsingError || (t2.playlistParsingError = new Error('Missing preceding EXT-X-DEFINE tag for Variable Reference: "' + i3 + '"')), e3) : n2;
            });
          }
          return e2;
        }
        function Zt(t2, e2, r3) {
          var i3, n2, a2 = t2.variableList;
          if (a2 || (t2.variableList = a2 = {}), "QUERYPARAM" in e2) {
            i3 = e2.QUERYPARAM;
            try {
              var s2 = new self.URL(r3).searchParams;
              if (!s2.has(i3))
                throw new Error('"' + i3 + '" does not match any query parameter in URI: "' + r3 + '"');
              n2 = s2.get(i3);
            } catch (e3) {
              t2.playlistParsingError || (t2.playlistParsingError = new Error("EXT-X-DEFINE QUERYPARAM: " + e3.message));
            }
          } else
            i3 = e2.NAME, n2 = e2.VALUE;
          i3 in a2 ? t2.playlistParsingError || (t2.playlistParsingError = new Error('EXT-X-DEFINE duplicate Variable Name declarations: "' + i3 + '"')) : a2[i3] = n2 || "";
        }
        function te(t2, e2, r3) {
          var i3 = e2.IMPORT;
          if (r3 && i3 in r3) {
            var n2 = t2.variableList;
            n2 || (t2.variableList = n2 = {}), n2[i3] = r3[i3];
          } else
            t2.playlistParsingError || (t2.playlistParsingError = new Error('EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "' + i3 + '"'));
        }
        function ee(t2) {
          if (void 0 === t2 && (t2 = true), "undefined" != typeof self)
            return (t2 || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
        }
        var re = { audio: { a3ds: 1, "ac-3": 0.95, "ac-4": 1, alac: 0.9, alaw: 1, dra1: 1, "dts+": 1, "dts-": 1, dtsc: 1, dtse: 1, dtsh: 1, "ec-3": 0.9, enca: 1, fLaC: 0.9, flac: 0.9, FLAC: 0.9, g719: 1, g726: 1, m4ae: 1, mha1: 1, mha2: 1, mhm1: 1, mhm2: 1, mlpa: 1, mp4a: 1, "raw ": 1, Opus: 1, opus: 1, samr: 1, sawb: 1, sawp: 1, sevc: 1, sqcp: 1, ssmv: 1, twos: 1, ulaw: 1 }, video: { avc1: 1, avc2: 1, avc3: 1, avc4: 1, avcp: 1, av01: 0.8, drac: 1, dva1: 1, dvav: 1, dvh1: 0.7, dvhe: 0.7, encv: 1, hev1: 0.75, hvc1: 0.75, mjp2: 1, mp4v: 1, mvc1: 1, mvc2: 1, mvc3: 1, mvc4: 1, resv: 1, rv60: 1, s263: 1, svc1: 1, svc2: 1, "vc-1": 1, vp08: 1, vp09: 0.9 }, text: { stpp: 1, wvtt: 1 } };
        function ie(t2, e2, r3) {
          return void 0 === r3 && (r3 = true), !t2.split(",").some(function(t3) {
            return !ne(t3, e2, r3);
          });
        }
        function ne(t2, e2, r3) {
          var i3;
          void 0 === r3 && (r3 = true);
          var n2 = ee(r3);
          return null != (i3 = null == n2 ? void 0 : n2.isTypeSupported(ae(t2, e2))) && i3;
        }
        function ae(t2, e2) {
          return e2 + '/mp4;codecs="' + t2 + '"';
        }
        function se(t2) {
          if (t2) {
            var e2 = t2.substring(0, 4);
            return re.video[e2];
          }
          return 2;
        }
        function oe(t2) {
          return t2.split(",").reduce(function(t3, e2) {
            var r3 = re.video[e2];
            return r3 ? (2 * r3 + t3) / (t3 ? 3 : 2) : (re.audio[e2] + t3) / (t3 ? 2 : 1);
          }, 0);
        }
        var le = {}, ue = /flac|opus/i;
        function he(t2, e2) {
          return void 0 === e2 && (e2 = true), t2.replace(ue, function(t3) {
            return function(t4, e3) {
              if (void 0 === e3 && (e3 = true), le[t4])
                return le[t4];
              for (var r3 = { flac: ["flac", "fLaC", "FLAC"], opus: ["opus", "Opus"] }[t4], i3 = 0; i3 < r3.length; i3++)
                if (ne(r3[i3], "audio", e3))
                  return le[t4] = r3[i3], r3[i3];
              return t4;
            }(t3.toLowerCase(), e2);
          });
        }
        function de(t2, e2) {
          return t2 && "mp4a" !== t2 ? t2 : e2 ? e2.split(",")[0] : e2;
        }
        var ce = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, fe = /#EXT-X-MEDIA:(.*)/g, ge = /^#EXT(?:INF|-X-TARGETDURATION):/m, ve = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"), me = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")), pe = function() {
          function t2() {
          }
          return t2.findGroup = function(t3, e2) {
            for (var r3 = 0; r3 < t3.length; r3++) {
              var i3 = t3[r3];
              if (i3.id === e2)
                return i3;
            }
          }, t2.resolve = function(t3, e2) {
            return p.buildAbsoluteURL(e2, t3, { alwaysNormalize: true });
          }, t2.isMediaPlaylist = function(t3) {
            return ge.test(t3);
          }, t2.parseMasterPlaylist = function(e2, r3) {
            var i3, n2 = { contentSteering: null, levels: [], playlistParsingError: null, sessionData: null, sessionKeys: null, startTimeOffset: null, variableList: null, hasVariableRefs: Qt(e2) }, a2 = [];
            for (ce.lastIndex = 0; null != (i3 = ce.exec(e2)); )
              if (i3[1]) {
                var s2, o2 = new x(i3[1]);
                Jt(n2, o2, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
                var l2 = $t(n2, i3[2]), u2 = { attrs: o2, bitrate: o2.decimalInteger("BANDWIDTH") || o2.decimalInteger("AVERAGE-BANDWIDTH"), name: o2.NAME, url: t2.resolve(l2, r3) }, h2 = o2.decimalResolution("RESOLUTION");
                h2 && (u2.width = h2.width, u2.height = h2.height), Te(o2.CODECS, u2), null != (s2 = u2.unknownCodecs) && s2.length || a2.push(u2), n2.levels.push(u2);
              } else if (i3[3]) {
                var d2 = i3[3], c2 = i3[4];
                switch (d2) {
                  case "SESSION-DATA":
                    var f2 = new x(c2);
                    Jt(n2, f2, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
                    var g2 = f2["DATA-ID"];
                    g2 && (null === n2.sessionData && (n2.sessionData = {}), n2.sessionData[g2] = f2);
                    break;
                  case "SESSION-KEY":
                    var v2 = ye(c2, r3, n2);
                    v2.encrypted && v2.isSupported() ? (null === n2.sessionKeys && (n2.sessionKeys = []), n2.sessionKeys.push(v2)) : w.warn('[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "' + c2 + '"');
                    break;
                  case "DEFINE":
                    var m2 = new x(c2);
                    Jt(n2, m2, ["NAME", "VALUE", "QUERYPARAM"]), Zt(n2, m2, r3);
                    break;
                  case "CONTENT-STEERING":
                    var p2 = new x(c2);
                    Jt(n2, p2, ["SERVER-URI", "PATHWAY-ID"]), n2.contentSteering = { uri: t2.resolve(p2["SERVER-URI"], r3), pathwayId: p2["PATHWAY-ID"] || "." };
                    break;
                  case "START":
                    n2.startTimeOffset = Ee(c2);
                }
              }
            var y2 = a2.length > 0 && a2.length < n2.levels.length;
            return n2.levels = y2 ? a2 : n2.levels, 0 === n2.levels.length && (n2.playlistParsingError = new Error("no levels found in manifest")), n2;
          }, t2.parseMasterPlaylistMedia = function(e2, r3, i3) {
            var n2, a2 = {}, s2 = i3.levels, o2 = { AUDIO: s2.map(function(t3) {
              return { id: t3.attrs.AUDIO, audioCodec: t3.audioCodec };
            }), SUBTITLES: s2.map(function(t3) {
              return { id: t3.attrs.SUBTITLES, textCodec: t3.textCodec };
            }), "CLOSED-CAPTIONS": [] }, l2 = 0;
            for (fe.lastIndex = 0; null !== (n2 = fe.exec(e2)); ) {
              var u2 = new x(n2[1]), h2 = u2.TYPE;
              if (h2) {
                var d2 = o2[h2], c2 = a2[h2] || [];
                a2[h2] = c2, Jt(i3, u2, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
                var f2 = u2.LANGUAGE, g2 = u2["ASSOC-LANGUAGE"], v2 = u2.CHANNELS, m2 = u2.CHARACTERISTICS, p2 = u2["INSTREAM-ID"], y2 = { attrs: u2, bitrate: 0, id: l2++, groupId: u2["GROUP-ID"] || "", name: u2.NAME || f2 || "", type: h2, default: u2.bool("DEFAULT"), autoselect: u2.bool("AUTOSELECT"), forced: u2.bool("FORCED"), lang: f2, url: u2.URI ? t2.resolve(u2.URI, r3) : "" };
                if (g2 && (y2.assocLang = g2), v2 && (y2.channels = v2), m2 && (y2.characteristics = m2), p2 && (y2.instreamId = p2), null != d2 && d2.length) {
                  var E2 = t2.findGroup(d2, y2.groupId) || d2[0];
                  Se(y2, E2, "audioCodec"), Se(y2, E2, "textCodec");
                }
                c2.push(y2);
              }
            }
            return a2;
          }, t2.parseLevelPlaylist = function(t3, e2, r3, i3, n2, a2) {
            var s2, l2, u2, h2 = new H(e2), d2 = h2.fragments, c2 = null, f2 = 0, g2 = 0, v2 = 0, m2 = 0, p2 = null, E2 = new G(i3, e2), T2 = -1, S2 = false, L2 = null;
            for (ve.lastIndex = 0, h2.m3u8 = t3, h2.hasVariableRefs = Qt(t3); null !== (s2 = ve.exec(t3)); ) {
              S2 && (S2 = false, (E2 = new G(i3, e2)).start = v2, E2.sn = f2, E2.cc = m2, E2.level = r3, c2 && (E2.initSegment = c2, E2.rawProgramDateTime = c2.rawProgramDateTime, c2.rawProgramDateTime = null, L2 && (E2.setByteRange(L2), L2 = null)));
              var A2 = s2[1];
              if (A2) {
                E2.duration = parseFloat(A2);
                var R2 = (" " + s2[2]).slice(1);
                E2.title = R2 || null, E2.tagList.push(R2 ? ["INF", A2, R2] : ["INF", A2]);
              } else if (s2[3]) {
                if (y(E2.duration)) {
                  E2.start = v2, u2 && Re(E2, u2, h2), E2.sn = f2, E2.level = r3, E2.cc = m2, d2.push(E2);
                  var k2 = (" " + s2[3]).slice(1);
                  E2.relurl = $t(h2, k2), Le(E2, p2), p2 = E2, v2 += E2.duration, f2++, g2 = 0, S2 = true;
                }
              } else if (s2[4]) {
                var b2 = (" " + s2[4]).slice(1);
                p2 ? E2.setByteRange(b2, p2) : E2.setByteRange(b2);
              } else if (s2[5])
                E2.rawProgramDateTime = (" " + s2[5]).slice(1), E2.tagList.push(["PROGRAM-DATE-TIME", E2.rawProgramDateTime]), -1 === T2 && (T2 = d2.length);
              else {
                if (!(s2 = s2[0].match(me))) {
                  w.warn("No matches on slow regex match for level playlist!");
                  continue;
                }
                for (l2 = 1; l2 < s2.length && void 0 === s2[l2]; l2++)
                  ;
                var D2 = (" " + s2[l2]).slice(1), I2 = (" " + s2[l2 + 1]).slice(1), C2 = s2[l2 + 2] ? (" " + s2[l2 + 2]).slice(1) : "";
                switch (D2) {
                  case "PLAYLIST-TYPE":
                    h2.type = I2.toUpperCase();
                    break;
                  case "MEDIA-SEQUENCE":
                    f2 = h2.startSN = parseInt(I2);
                    break;
                  case "SKIP":
                    var _2 = new x(I2);
                    Jt(h2, _2, ["RECENTLY-REMOVED-DATERANGES"]);
                    var P2 = _2.decimalInteger("SKIPPED-SEGMENTS");
                    if (y(P2)) {
                      h2.skippedSegments = P2;
                      for (var M2 = P2; M2--; )
                        d2.unshift(null);
                      f2 += P2;
                    }
                    var O2 = _2.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                    O2 && (h2.recentlyRemovedDateranges = O2.split("	"));
                    break;
                  case "TARGETDURATION":
                    h2.targetduration = Math.max(parseInt(I2), 1);
                    break;
                  case "VERSION":
                    h2.version = parseInt(I2);
                    break;
                  case "INDEPENDENT-SEGMENTS":
                  case "EXTM3U":
                    break;
                  case "ENDLIST":
                    h2.live = false;
                    break;
                  case "#":
                    (I2 || C2) && E2.tagList.push(C2 ? [I2, C2] : [I2]);
                    break;
                  case "DISCONTINUITY":
                    m2++, E2.tagList.push(["DIS"]);
                    break;
                  case "GAP":
                    E2.gap = true, E2.tagList.push([D2]);
                    break;
                  case "BITRATE":
                    E2.tagList.push([D2, I2]);
                    break;
                  case "DATERANGE":
                    var N2 = new x(I2);
                    Jt(h2, N2, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]), Jt(h2, N2, N2.clientAttrs);
                    var U2 = new F(N2, h2.dateRanges[N2.ID]);
                    U2.isValid || h2.skippedSegments ? h2.dateRanges[U2.id] = U2 : w.warn('Ignoring invalid DATERANGE tag: "' + I2 + '"'), E2.tagList.push(["EXT-X-DATERANGE", I2]);
                    break;
                  case "DEFINE":
                    var B2 = new x(I2);
                    Jt(h2, B2, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]), "IMPORT" in B2 ? te(h2, B2, a2) : Zt(h2, B2, e2);
                    break;
                  case "DISCONTINUITY-SEQUENCE":
                    m2 = parseInt(I2);
                    break;
                  case "KEY":
                    var V2 = ye(I2, e2, h2);
                    if (V2.isSupported()) {
                      if ("NONE" === V2.method) {
                        u2 = void 0;
                        break;
                      }
                      u2 || (u2 = {}), u2[V2.keyFormat] && (u2 = o({}, u2)), u2[V2.keyFormat] = V2;
                    } else
                      w.warn('[Keys] Ignoring invalid EXT-X-KEY tag: "' + I2 + '"');
                    break;
                  case "START":
                    h2.startTimeOffset = Ee(I2);
                    break;
                  case "MAP":
                    var Y2 = new x(I2);
                    if (Jt(h2, Y2, ["BYTERANGE", "URI"]), E2.duration) {
                      var W2 = new G(i3, e2);
                      Ae(W2, Y2, r3, u2), c2 = W2, E2.initSegment = c2, c2.rawProgramDateTime && !E2.rawProgramDateTime && (E2.rawProgramDateTime = c2.rawProgramDateTime);
                    } else {
                      var j2 = E2.byteRangeEndOffset;
                      if (j2) {
                        var q2 = E2.byteRangeStartOffset;
                        L2 = j2 - q2 + "@" + q2;
                      } else
                        L2 = null;
                      Ae(E2, Y2, r3, u2), c2 = E2, S2 = true;
                    }
                    break;
                  case "SERVER-CONTROL":
                    var X2 = new x(I2);
                    h2.canBlockReload = X2.bool("CAN-BLOCK-RELOAD"), h2.canSkipUntil = X2.optionalFloat("CAN-SKIP-UNTIL", 0), h2.canSkipDateRanges = h2.canSkipUntil > 0 && X2.bool("CAN-SKIP-DATERANGES"), h2.partHoldBack = X2.optionalFloat("PART-HOLD-BACK", 0), h2.holdBack = X2.optionalFloat("HOLD-BACK", 0);
                    break;
                  case "PART-INF":
                    var z2 = new x(I2);
                    h2.partTarget = z2.decimalFloatingPoint("PART-TARGET");
                    break;
                  case "PART":
                    var Q2 = h2.partList;
                    Q2 || (Q2 = h2.partList = []);
                    var J2 = g2 > 0 ? Q2[Q2.length - 1] : void 0, $2 = g2++, Z2 = new x(I2);
                    Jt(h2, Z2, ["BYTERANGE", "URI"]);
                    var tt2 = new K(Z2, E2, e2, $2, J2);
                    Q2.push(tt2), E2.duration += tt2.duration;
                    break;
                  case "PRELOAD-HINT":
                    var et2 = new x(I2);
                    Jt(h2, et2, ["URI"]), h2.preloadHint = et2;
                    break;
                  case "RENDITION-REPORT":
                    var rt2 = new x(I2);
                    Jt(h2, rt2, ["URI"]), h2.renditionReports = h2.renditionReports || [], h2.renditionReports.push(rt2);
                    break;
                  default:
                    w.warn("line parsed but not handled: " + s2);
                }
              }
            }
            p2 && !p2.relurl ? (d2.pop(), v2 -= p2.duration, h2.partList && (h2.fragmentHint = p2)) : h2.partList && (Le(E2, p2), E2.cc = m2, h2.fragmentHint = E2, u2 && Re(E2, u2, h2));
            var it2 = d2.length, nt2 = d2[0], at2 = d2[it2 - 1];
            if ((v2 += h2.skippedSegments * h2.targetduration) > 0 && it2 && at2) {
              h2.averagetargetduration = v2 / it2;
              var st2 = at2.sn;
              h2.endSN = "initSegment" !== st2 ? st2 : 0, h2.live || (at2.endList = true), nt2 && (h2.startCC = nt2.cc);
            } else
              h2.endSN = 0, h2.startCC = 0;
            return h2.fragmentHint && (v2 += h2.fragmentHint.duration), h2.totalduration = v2, h2.endCC = m2, T2 > 0 && function(t4, e3) {
              for (var r4 = t4[e3], i4 = e3; i4--; ) {
                var n3 = t4[i4];
                if (!n3)
                  return;
                n3.programDateTime = r4.programDateTime - 1e3 * n3.duration, r4 = n3;
              }
            }(d2, T2), h2;
          }, t2;
        }();
        function ye(t2, e2, r3) {
          var i3, n2, a2 = new x(t2);
          Jt(r3, a2, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
          var s2 = null != (i3 = a2.METHOD) ? i3 : "", o2 = a2.URI, l2 = a2.hexadecimalInteger("IV"), u2 = a2.KEYFORMATVERSIONS, h2 = null != (n2 = a2.KEYFORMAT) ? n2 : "identity";
          o2 && a2.IV && !l2 && w.error("Invalid IV: " + a2.IV);
          var d2 = o2 ? pe.resolve(o2, e2) : "", c2 = (u2 || "1").split("/").map(Number).filter(Number.isFinite);
          return new Xt(s2, d2, h2, c2, l2);
        }
        function Ee(t2) {
          var e2 = new x(t2).decimalFloatingPoint("TIME-OFFSET");
          return y(e2) ? e2 : null;
        }
        function Te(t2, e2) {
          var r3 = (t2 || "").split(/[ ,]+/).filter(function(t3) {
            return t3;
          });
          ["video", "audio", "text"].forEach(function(t3) {
            var i3 = r3.filter(function(e3) {
              return function(t4, e4) {
                var r4 = re[e4];
                return !!r4 && !!r4[t4.slice(0, 4)];
              }(e3, t3);
            });
            i3.length && (e2[t3 + "Codec"] = i3.join(","), r3 = r3.filter(function(t4) {
              return -1 === i3.indexOf(t4);
            }));
          }), e2.unknownCodecs = r3;
        }
        function Se(t2, e2, r3) {
          var i3 = e2[r3];
          i3 && (t2[r3] = i3);
        }
        function Le(t2, e2) {
          t2.rawProgramDateTime ? t2.programDateTime = Date.parse(t2.rawProgramDateTime) : null != e2 && e2.programDateTime && (t2.programDateTime = e2.endProgramDateTime), y(t2.programDateTime) || (t2.programDateTime = null, t2.rawProgramDateTime = null);
        }
        function Ae(t2, e2, r3, i3) {
          t2.relurl = e2.URI, e2.BYTERANGE && t2.setByteRange(e2.BYTERANGE), t2.level = r3, t2.sn = "initSegment", i3 && (t2.levelkeys = i3), t2.initSegment = null;
        }
        function Re(t2, e2, r3) {
          t2.levelkeys = e2;
          var i3 = r3.encryptedFragments;
          i3.length && i3[i3.length - 1].levelkeys === e2 || !Object.keys(e2).some(function(t3) {
            return e2[t3].isCommonEncryption;
          }) || i3.push(t2);
        }
        var ke = "manifest", be = "level", De = "audioTrack", Ie = "subtitleTrack", we = "main", Ce = "audio", _e = "subtitle";
        function xe(t2) {
          switch (t2.type) {
            case De:
              return Ce;
            case Ie:
              return _e;
            default:
              return we;
          }
        }
        function Pe(t2, e2) {
          var r3 = t2.url;
          return void 0 !== r3 && 0 !== r3.indexOf("data:") || (r3 = e2.url), r3;
        }
        var Fe = function() {
          function t2(t3) {
            this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.hls = t3, this.registerListeners();
          }
          var e2 = t2.prototype;
          return e2.startLoad = function(t3) {
          }, e2.stopLoad = function() {
            this.destroyInternalLoaders();
          }, e2.registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.LEVEL_LOADING, this.onLevelLoading, this), t3.on(S.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t3.on(S.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
          }, e2.unregisterListeners = function() {
            var t3 = this.hls;
            t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.LEVEL_LOADING, this.onLevelLoading, this), t3.off(S.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t3.off(S.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
          }, e2.createInternalLoader = function(t3) {
            var e3 = this.hls.config, r3 = e3.pLoader, i3 = e3.loader, n2 = new (r3 || i3)(e3);
            return this.loaders[t3.type] = n2, n2;
          }, e2.getInternalLoader = function(t3) {
            return this.loaders[t3.type];
          }, e2.resetInternalLoader = function(t3) {
            this.loaders[t3] && delete this.loaders[t3];
          }, e2.destroyInternalLoaders = function() {
            for (var t3 in this.loaders) {
              var e3 = this.loaders[t3];
              e3 && e3.destroy(), this.resetInternalLoader(t3);
            }
          }, e2.destroy = function() {
            this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
          }, e2.onManifestLoading = function(t3, e3) {
            var r3 = e3.url;
            this.variableList = null, this.load({ id: null, level: 0, responseType: "text", type: ke, url: r3, deliveryDirectives: null });
          }, e2.onLevelLoading = function(t3, e3) {
            var r3 = e3.id, i3 = e3.level, n2 = e3.pathwayId, a2 = e3.url, s2 = e3.deliveryDirectives;
            this.load({ id: r3, level: i3, pathwayId: n2, responseType: "text", type: be, url: a2, deliveryDirectives: s2 });
          }, e2.onAudioTrackLoading = function(t3, e3) {
            var r3 = e3.id, i3 = e3.groupId, n2 = e3.url, a2 = e3.deliveryDirectives;
            this.load({ id: r3, groupId: i3, level: null, responseType: "text", type: De, url: n2, deliveryDirectives: a2 });
          }, e2.onSubtitleTrackLoading = function(t3, e3) {
            var r3 = e3.id, i3 = e3.groupId, n2 = e3.url, a2 = e3.deliveryDirectives;
            this.load({ id: r3, groupId: i3, level: null, responseType: "text", type: Ie, url: n2, deliveryDirectives: a2 });
          }, e2.load = function(t3) {
            var e3, r3, i3, n2 = this, a2 = this.hls.config, s2 = this.getInternalLoader(t3);
            if (s2) {
              var l2 = s2.context;
              if (l2 && l2.url === t3.url && l2.level === t3.level)
                return void w.trace("[playlist-loader]: playlist request ongoing");
              w.log("[playlist-loader]: aborting previous loader for type: " + t3.type), s2.abort();
            }
            if (r3 = t3.type === ke ? a2.manifestLoadPolicy.default : o({}, a2.playlistLoadPolicy.default, { timeoutRetry: null, errorRetry: null }), s2 = this.createInternalLoader(t3), y(null == (e3 = t3.deliveryDirectives) ? void 0 : e3.part) && (t3.type === be && null !== t3.level ? i3 = this.hls.levels[t3.level].details : t3.type === De && null !== t3.id ? i3 = this.hls.audioTracks[t3.id].details : t3.type === Ie && null !== t3.id && (i3 = this.hls.subtitleTracks[t3.id].details), i3)) {
              var u2 = i3.partTarget, h2 = i3.targetduration;
              if (u2 && h2) {
                var d2 = 1e3 * Math.max(3 * u2, 0.8 * h2);
                r3 = o({}, r3, { maxTimeToFirstByteMs: Math.min(d2, r3.maxTimeToFirstByteMs), maxLoadTimeMs: Math.min(d2, r3.maxTimeToFirstByteMs) });
              }
            }
            var c2 = r3.errorRetry || r3.timeoutRetry || {}, f2 = { loadPolicy: r3, timeout: r3.maxLoadTimeMs, maxRetry: c2.maxNumRetry || 0, retryDelay: c2.retryDelayMs || 0, maxRetryDelay: c2.maxRetryDelayMs || 0 }, g2 = { onSuccess: function(t4, e4, r4, i4) {
              var a3 = n2.getInternalLoader(r4);
              n2.resetInternalLoader(r4.type);
              var s3 = t4.data;
              0 === s3.indexOf("#EXTM3U") ? (e4.parsing.start = performance.now(), pe.isMediaPlaylist(s3) ? n2.handleTrackOrLevelPlaylist(t4, e4, r4, i4 || null, a3) : n2.handleMasterPlaylist(t4, e4, r4, i4)) : n2.handleManifestParsingError(t4, r4, new Error("no EXTM3U delimiter"), i4 || null, e4);
            }, onError: function(t4, e4, r4, i4) {
              n2.handleNetworkError(e4, r4, false, t4, i4);
            }, onTimeout: function(t4, e4, r4) {
              n2.handleNetworkError(e4, r4, true, void 0, t4);
            } };
            s2.load(t3, f2, g2);
          }, e2.handleMasterPlaylist = function(t3, e3, r3, i3) {
            var n2 = this.hls, a2 = t3.data, s2 = Pe(t3, r3), o2 = pe.parseMasterPlaylist(a2, s2);
            if (o2.playlistParsingError)
              this.handleManifestParsingError(t3, r3, o2.playlistParsingError, i3, e3);
            else {
              var l2 = o2.contentSteering, u2 = o2.levels, h2 = o2.sessionData, d2 = o2.sessionKeys, c2 = o2.startTimeOffset, f2 = o2.variableList;
              this.variableList = f2;
              var g2 = pe.parseMasterPlaylistMedia(a2, s2, o2), v2 = g2.AUDIO, m2 = void 0 === v2 ? [] : v2, p2 = g2.SUBTITLES, y2 = g2["CLOSED-CAPTIONS"];
              m2.length && (m2.some(function(t4) {
                return !t4.url;
              }) || !u2[0].audioCodec || u2[0].attrs.AUDIO || (w.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m2.unshift({ type: "main", name: "main", groupId: "main", default: false, autoselect: false, forced: false, id: -1, attrs: new x({}), bitrate: 0, url: "" }))), n2.trigger(S.MANIFEST_LOADED, { levels: u2, audioTracks: m2, subtitles: p2, captions: y2, contentSteering: l2, url: s2, stats: e3, networkDetails: i3, sessionData: h2, sessionKeys: d2, startTimeOffset: c2, variableList: f2 });
            }
          }, e2.handleTrackOrLevelPlaylist = function(t3, e3, r3, i3, n2) {
            var a2 = this.hls, s2 = r3.id, o2 = r3.level, l2 = r3.type, u2 = Pe(t3, r3), h2 = y(o2) ? o2 : y(s2) ? s2 : 0, d2 = xe(r3), c2 = pe.parseLevelPlaylist(t3.data, u2, h2, d2, 0, this.variableList);
            if (l2 === ke) {
              var f2 = { attrs: new x({}), bitrate: 0, details: c2, name: "", url: u2 };
              a2.trigger(S.MANIFEST_LOADED, { levels: [f2], audioTracks: [], url: u2, stats: e3, networkDetails: i3, sessionData: null, sessionKeys: null, contentSteering: null, startTimeOffset: null, variableList: null });
            }
            e3.parsing.end = performance.now(), r3.levelDetails = c2, this.handlePlaylistLoaded(c2, t3, e3, r3, i3, n2);
          }, e2.handleManifestParsingError = function(t3, e3, r3, i3, n2) {
            this.hls.trigger(S.ERROR, { type: L.NETWORK_ERROR, details: A.MANIFEST_PARSING_ERROR, fatal: e3.type === ke, url: t3.url, err: r3, error: r3, reason: r3.message, response: t3, context: e3, networkDetails: i3, stats: n2 });
          }, e2.handleNetworkError = function(t3, e3, r3, n2, a2) {
            void 0 === r3 && (r3 = false);
            var s2 = "A network " + (r3 ? "timeout" : "error" + (n2 ? " (status " + n2.code + ")" : "")) + " occurred while loading " + t3.type;
            t3.type === be ? s2 += ": " + t3.level + " id: " + t3.id : t3.type !== De && t3.type !== Ie || (s2 += " id: " + t3.id + ' group-id: "' + t3.groupId + '"');
            var o2 = new Error(s2);
            w.warn("[playlist-loader]: " + s2);
            var l2 = A.UNKNOWN, u2 = false, h2 = this.getInternalLoader(t3);
            switch (t3.type) {
              case ke:
                l2 = r3 ? A.MANIFEST_LOAD_TIMEOUT : A.MANIFEST_LOAD_ERROR, u2 = true;
                break;
              case be:
                l2 = r3 ? A.LEVEL_LOAD_TIMEOUT : A.LEVEL_LOAD_ERROR, u2 = false;
                break;
              case De:
                l2 = r3 ? A.AUDIO_TRACK_LOAD_TIMEOUT : A.AUDIO_TRACK_LOAD_ERROR, u2 = false;
                break;
              case Ie:
                l2 = r3 ? A.SUBTITLE_TRACK_LOAD_TIMEOUT : A.SUBTITLE_LOAD_ERROR, u2 = false;
            }
            h2 && this.resetInternalLoader(t3.type);
            var d2 = { type: L.NETWORK_ERROR, details: l2, fatal: u2, url: t3.url, loader: h2, context: t3, error: o2, networkDetails: e3, stats: a2 };
            if (n2) {
              var c2 = (null == e3 ? void 0 : e3.url) || t3.url;
              d2.response = i2({ url: c2, data: void 0 }, n2);
            }
            this.hls.trigger(S.ERROR, d2);
          }, e2.handlePlaylistLoaded = function(t3, e3, r3, i3, n2, a2) {
            var s2 = this.hls, o2 = i3.type, l2 = i3.level, u2 = i3.id, h2 = i3.groupId, d2 = i3.deliveryDirectives, c2 = Pe(e3, i3), f2 = xe(i3), g2 = "number" == typeof i3.level && f2 === we ? l2 : void 0;
            if (t3.fragments.length) {
              t3.targetduration || (t3.playlistParsingError = new Error("Missing Target Duration"));
              var v2 = t3.playlistParsingError;
              if (v2)
                s2.trigger(S.ERROR, { type: L.NETWORK_ERROR, details: A.LEVEL_PARSING_ERROR, fatal: false, url: c2, error: v2, reason: v2.message, response: e3, context: i3, level: g2, parent: f2, networkDetails: n2, stats: r3 });
              else
                switch (t3.live && a2 && (a2.getCacheAge && (t3.ageHeader = a2.getCacheAge() || 0), a2.getCacheAge && !isNaN(t3.ageHeader) || (t3.ageHeader = 0)), o2) {
                  case ke:
                  case be:
                    s2.trigger(S.LEVEL_LOADED, { details: t3, level: g2 || 0, id: u2 || 0, stats: r3, networkDetails: n2, deliveryDirectives: d2 });
                    break;
                  case De:
                    s2.trigger(S.AUDIO_TRACK_LOADED, { details: t3, id: u2 || 0, groupId: h2 || "", stats: r3, networkDetails: n2, deliveryDirectives: d2 });
                    break;
                  case Ie:
                    s2.trigger(S.SUBTITLE_TRACK_LOADED, { details: t3, id: u2 || 0, groupId: h2 || "", stats: r3, networkDetails: n2, deliveryDirectives: d2 });
                }
            } else {
              var m2 = new Error("No Segments found in Playlist");
              s2.trigger(S.ERROR, { type: L.NETWORK_ERROR, details: A.LEVEL_EMPTY_ERROR, fatal: false, url: c2, error: m2, reason: m2.message, response: e3, context: i3, level: g2, parent: f2, networkDetails: n2, stats: r3 });
            }
          }, t2;
        }();
        function Me(t2, e2) {
          var r3;
          try {
            r3 = new Event("addtrack");
          } catch (t3) {
            (r3 = document.createEvent("Event")).initEvent("addtrack", false, false);
          }
          r3.track = t2, e2.dispatchEvent(r3);
        }
        function Oe(t2, e2) {
          var r3 = t2.mode;
          if ("disabled" === r3 && (t2.mode = "hidden"), t2.cues && !t2.cues.getCueById(e2.id))
            try {
              if (t2.addCue(e2), !t2.cues.getCueById(e2.id))
                throw new Error("addCue is failed for: " + e2);
            } catch (r4) {
              w.debug("[texttrack-utils]: " + r4);
              try {
                var i3 = new self.TextTrackCue(e2.startTime, e2.endTime, e2.text);
                i3.id = e2.id, t2.addCue(i3);
              } catch (t3) {
                w.debug("[texttrack-utils]: Legacy TextTrackCue fallback failed: " + t3);
              }
            }
          "disabled" === r3 && (t2.mode = r3);
        }
        function Ne(t2) {
          var e2 = t2.mode;
          if ("disabled" === e2 && (t2.mode = "hidden"), t2.cues)
            for (var r3 = t2.cues.length; r3--; )
              t2.removeCue(t2.cues[r3]);
          "disabled" === e2 && (t2.mode = e2);
        }
        function Ue(t2, e2, r3, i3) {
          var n2 = t2.mode;
          if ("disabled" === n2 && (t2.mode = "hidden"), t2.cues && t2.cues.length > 0)
            for (var a2 = function(t3, e3, r4) {
              var i4 = [], n3 = function(t4, e4) {
                if (e4 < t4[0].startTime)
                  return 0;
                var r5 = t4.length - 1;
                if (e4 > t4[r5].endTime)
                  return -1;
                for (var i5 = 0, n4 = r5; i5 <= n4; ) {
                  var a4 = Math.floor((n4 + i5) / 2);
                  if (e4 < t4[a4].startTime)
                    n4 = a4 - 1;
                  else {
                    if (!(e4 > t4[a4].startTime && i5 < r5))
                      return a4;
                    i5 = a4 + 1;
                  }
                }
                return t4[i5].startTime - e4 < e4 - t4[n4].startTime ? i5 : n4;
              }(t3, e3);
              if (n3 > -1)
                for (var a3 = n3, s3 = t3.length; a3 < s3; a3++) {
                  var o2 = t3[a3];
                  if (o2.startTime >= e3 && o2.endTime <= r4)
                    i4.push(o2);
                  else if (o2.startTime > r4)
                    return i4;
                }
              return i4;
            }(t2.cues, e2, r3), s2 = 0; s2 < a2.length; s2++)
              i3 && !i3(a2[s2]) || t2.removeCue(a2[s2]);
          "disabled" === n2 && (t2.mode = n2);
        }
        function Be(t2) {
          for (var e2 = [], r3 = 0; r3 < t2.length; r3++) {
            var i3 = t2[r3];
            "subtitles" !== i3.kind && "captions" !== i3.kind || !i3.label || e2.push(t2[r3]);
          }
          return e2;
        }
        var Ge = "org.id3", Ke = "com.apple.quicktime.HLS", He = "https://aomedia.org/emsg/ID3";
        function Ve() {
          if ("undefined" != typeof self)
            return self.VTTCue || self.TextTrackCue;
        }
        function Ye(t2, e2, r3, n2, a2) {
          var s2 = new t2(e2, r3, "");
          try {
            s2.value = n2, a2 && (s2.type = a2);
          } catch (o2) {
            s2 = new t2(e2, r3, JSON.stringify(a2 ? i2({ type: a2 }, n2) : n2));
          }
          return s2;
        }
        var We = function() {
          var t2 = Ve();
          try {
            t2 && new t2(0, Number.POSITIVE_INFINITY, "");
          } catch (t3) {
            return Number.MAX_VALUE;
          }
          return Number.POSITIVE_INFINITY;
        }();
        function je(t2, e2) {
          return t2.getTime() / 1e3 - e2;
        }
        var qe = function() {
          function t2(t3) {
            this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = t3, this._registerListeners();
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
            this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null;
          }, e2._registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t3.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.on(S.LEVEL_UPDATED, this.onLevelUpdated, this);
          }, e2._unregisterListeners = function() {
            var t3 = this.hls;
            t3.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t3.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.off(S.LEVEL_UPDATED, this.onLevelUpdated, this);
          }, e2.onMediaAttached = function(t3, e3) {
            this.media = e3.media;
          }, e2.onMediaDetaching = function() {
            this.id3Track && (Ne(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {});
          }, e2.onManifestLoading = function() {
            this.dateRangeCuesAppended = {};
          }, e2.createTrack = function(t3) {
            var e3 = this.getID3Track(t3.textTracks);
            return e3.mode = "hidden", e3;
          }, e2.getID3Track = function(t3) {
            if (this.media) {
              for (var e3 = 0; e3 < t3.length; e3++) {
                var r3 = t3[e3];
                if ("metadata" === r3.kind && "id3" === r3.label)
                  return Me(r3, this.media), r3;
              }
              return this.media.addTextTrack("metadata", "id3");
            }
          }, e2.onFragParsingMetadata = function(t3, e3) {
            if (this.media) {
              var r3 = this.hls.config, i3 = r3.enableEmsgMetadataCues, n2 = r3.enableID3MetadataCues;
              if (i3 || n2) {
                var a2 = e3.samples;
                this.id3Track || (this.id3Track = this.createTrack(this.media));
                var s2 = Ve();
                if (s2)
                  for (var o2 = 0; o2 < a2.length; o2++) {
                    var l2 = a2[o2].type;
                    if ((l2 !== He || i3) && n2) {
                      var u2 = gt(a2[o2].data);
                      if (u2) {
                        var h2 = a2[o2].pts, d2 = h2 + a2[o2].duration;
                        d2 > We && (d2 = We), d2 - h2 <= 0 && (d2 = h2 + 0.25);
                        for (var c2 = 0; c2 < u2.length; c2++) {
                          var f2 = u2[c2];
                          if (!ct(f2)) {
                            this.updateId3CueEnds(h2, l2);
                            var g2 = Ye(s2, h2, d2, f2, l2);
                            g2 && this.id3Track.addCue(g2);
                          }
                        }
                      }
                    }
                  }
              }
            }
          }, e2.updateId3CueEnds = function(t3, e3) {
            var r3, i3 = null == (r3 = this.id3Track) ? void 0 : r3.cues;
            if (i3)
              for (var n2 = i3.length; n2--; ) {
                var a2 = i3[n2];
                a2.type === e3 && a2.startTime < t3 && a2.endTime === We && (a2.endTime = t3);
              }
          }, e2.onBufferFlushing = function(t3, e3) {
            var r3 = e3.startOffset, i3 = e3.endOffset, n2 = e3.type, a2 = this.id3Track, s2 = this.hls;
            if (s2) {
              var o2 = s2.config, l2 = o2.enableEmsgMetadataCues, u2 = o2.enableID3MetadataCues;
              a2 && (l2 || u2) && Ue(a2, r3, i3, "audio" === n2 ? function(t4) {
                return t4.type === Ge && u2;
              } : "video" === n2 ? function(t4) {
                return t4.type === He && l2;
              } : function(t4) {
                return t4.type === Ge && u2 || t4.type === He && l2;
              });
            }
          }, e2.onLevelUpdated = function(t3, e3) {
            var r3 = this, i3 = e3.details;
            if (this.media && i3.hasProgramDateTime && this.hls.config.enableDateRangeMetadataCues) {
              var n2 = this.dateRangeCuesAppended, a2 = this.id3Track, s2 = i3.dateRanges, o2 = Object.keys(s2);
              if (a2)
                for (var l2 = Object.keys(n2).filter(function(t4) {
                  return !o2.includes(t4);
                }), u2 = function() {
                  var t4 = l2[h2];
                  Object.keys(n2[t4].cues).forEach(function(e4) {
                    a2.removeCue(n2[t4].cues[e4]);
                  }), delete n2[t4];
                }, h2 = l2.length; h2--; )
                  u2();
              var d2 = i3.fragments[i3.fragments.length - 1];
              if (0 !== o2.length && y(null == d2 ? void 0 : d2.programDateTime)) {
                this.id3Track || (this.id3Track = this.createTrack(this.media));
                for (var c2 = d2.programDateTime / 1e3 - d2.start, f2 = Ve(), g2 = function() {
                  var t4 = o2[v2], e4 = s2[t4], i4 = je(e4.startDate, c2), a3 = n2[t4], l3 = (null == a3 ? void 0 : a3.cues) || {}, u3 = (null == a3 ? void 0 : a3.durationKnown) || false, h3 = We, d3 = e4.endDate;
                  if (d3)
                    h3 = je(d3, c2), u3 = true;
                  else if (e4.endOnNext && !u3) {
                    var g3 = o2.reduce(function(t5, r4) {
                      if (r4 !== e4.id) {
                        var i5 = s2[r4];
                        if (i5.class === e4.class && i5.startDate > e4.startDate && (!t5 || e4.startDate < t5.startDate))
                          return i5;
                      }
                      return t5;
                    }, null);
                    g3 && (h3 = je(g3.startDate, c2), u3 = true);
                  }
                  for (var m2, p2, y2 = Object.keys(e4.attr), E2 = 0; E2 < y2.length; E2++) {
                    var T2 = y2[E2];
                    if ("ID" !== (p2 = T2) && "CLASS" !== p2 && "START-DATE" !== p2 && "DURATION" !== p2 && "END-DATE" !== p2 && "END-ON-NEXT" !== p2) {
                      var S2 = l3[T2];
                      if (S2)
                        u3 && !a3.durationKnown && (S2.endTime = h3);
                      else if (f2) {
                        var L2 = e4.attr[T2];
                        P(T2) && (m2 = L2, L2 = Uint8Array.from(m2.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer);
                        var A2 = Ye(f2, i4, h3, { key: T2, data: L2 }, Ke);
                        A2 && (A2.id = t4, r3.id3Track.addCue(A2), l3[T2] = A2);
                      }
                    }
                  }
                  n2[t4] = { cues: l3, dateRange: e4, durationKnown: u3 };
                }, v2 = 0; v2 < o2.length; v2++)
                  g2();
              }
            }
          }, t2;
        }(), Xe = function() {
          function t2(t3) {
            var e3 = this;
            this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
              return e3.timeupdate();
            }, this.hls = t3, this.config = t3.config, this.registerListeners();
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
            this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
          }, e2.registerListeners = function() {
            this.hls.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(S.ERROR, this.onError, this);
          }, e2.unregisterListeners = function() {
            this.hls.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(S.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(S.ERROR, this.onError, this);
          }, e2.onMediaAttached = function(t3, e3) {
            this.media = e3.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
          }, e2.onMediaDetaching = function() {
            this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
          }, e2.onManifestLoading = function() {
            this.levelDetails = null, this._latency = null, this.stallCount = 0;
          }, e2.onLevelUpdated = function(t3, e3) {
            var r3 = e3.details;
            this.levelDetails = r3, r3.advanced && this.timeupdate(), !r3.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
          }, e2.onError = function(t3, e3) {
            var r3;
            e3.details === A.BUFFER_STALLED_ERROR && (this.stallCount++, null != (r3 = this.levelDetails) && r3.live && w.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
          }, e2.timeupdate = function() {
            var t3 = this.media, e3 = this.levelDetails;
            if (t3 && e3) {
              this.currentTime = t3.currentTime;
              var r3 = this.computeLatency();
              if (null !== r3) {
                this._latency = r3;
                var i3 = this.config, n2 = i3.lowLatencyMode, a2 = i3.maxLiveSyncPlaybackRate;
                if (n2 && 1 !== a2 && e3.live) {
                  var s2 = this.targetLatency;
                  if (null !== s2) {
                    var o2 = r3 - s2;
                    if (o2 < Math.min(this.maxLatency, s2 + e3.targetduration) && o2 > 0.05 && this.forwardBufferLength > 1) {
                      var l2 = Math.min(2, Math.max(1, a2)), u2 = Math.round(2 / (1 + Math.exp(-0.75 * o2 - this.edgeStalled)) * 20) / 20;
                      t3.playbackRate = Math.min(l2, Math.max(1, u2));
                    } else
                      1 !== t3.playbackRate && 0 !== t3.playbackRate && (t3.playbackRate = 1);
                  }
                }
              }
            }
          }, e2.estimateLiveEdge = function() {
            var t3 = this.levelDetails;
            return null === t3 ? null : t3.edge + t3.age;
          }, e2.computeLatency = function() {
            var t3 = this.estimateLiveEdge();
            return null === t3 ? null : t3 - this.currentTime;
          }, s(t2, [{ key: "latency", get: function() {
            return this._latency || 0;
          } }, { key: "maxLatency", get: function() {
            var t3 = this.config, e3 = this.levelDetails;
            return void 0 !== t3.liveMaxLatencyDuration ? t3.liveMaxLatencyDuration : e3 ? t3.liveMaxLatencyDurationCount * e3.targetduration : 0;
          } }, { key: "targetLatency", get: function() {
            var t3 = this.levelDetails;
            if (null === t3)
              return null;
            var e3 = t3.holdBack, r3 = t3.partHoldBack, i3 = t3.targetduration, n2 = this.config, a2 = n2.liveSyncDuration, s2 = n2.liveSyncDurationCount, o2 = n2.lowLatencyMode, l2 = this.hls.userConfig, u2 = o2 && r3 || e3;
            (l2.liveSyncDuration || l2.liveSyncDurationCount || 0 === u2) && (u2 = void 0 !== a2 ? a2 : s2 * i3);
            var h2 = i3;
            return u2 + Math.min(1 * this.stallCount, h2);
          } }, { key: "liveSyncPosition", get: function() {
            var t3 = this.estimateLiveEdge(), e3 = this.targetLatency, r3 = this.levelDetails;
            if (null === t3 || null === e3 || null === r3)
              return null;
            var i3 = r3.edge, n2 = t3 - e3 - this.edgeStalled, a2 = i3 - r3.totalduration, s2 = i3 - (this.config.lowLatencyMode && r3.partTarget || r3.targetduration);
            return Math.min(Math.max(a2, n2), s2);
          } }, { key: "drift", get: function() {
            var t3 = this.levelDetails;
            return null === t3 ? 1 : t3.drift;
          } }, { key: "edgeStalled", get: function() {
            var t3 = this.levelDetails;
            if (null === t3)
              return 0;
            var e3 = 3 * (this.config.lowLatencyMode && t3.partTarget || t3.targetduration);
            return Math.max(t3.age - e3, 0);
          } }, { key: "forwardBufferLength", get: function() {
            var t3 = this.media, e3 = this.levelDetails;
            if (!t3 || !e3)
              return 0;
            var r3 = t3.buffered.length;
            return (r3 ? t3.buffered.end(r3 - 1) : e3.edge) - this.currentTime;
          } }]), t2;
        }(), ze = ["NONE", "TYPE-0", "TYPE-1", null], Qe = ["SDR", "PQ", "HLG"], Je = "", $e = "YES", Ze = "v2";
        function tr(t2) {
          var e2 = t2.canSkipUntil, r3 = t2.canSkipDateRanges, i3 = t2.age;
          return e2 && i3 < e2 / 2 ? r3 ? Ze : $e : Je;
        }
        var er = function() {
          function t2(t3, e2, r3) {
            this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t3, this.part = e2, this.skip = r3;
          }
          return t2.prototype.addDirectives = function(t3) {
            var e2 = new self.URL(t3);
            return void 0 !== this.msn && e2.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && e2.searchParams.set("_HLS_part", this.part.toString()), this.skip && e2.searchParams.set("_HLS_skip", this.skip), e2.href;
          }, t2;
        }(), rr = function() {
          function t2(t3) {
            this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [t3.url], this._attrs = [t3.attrs], this.bitrate = t3.bitrate, t3.details && (this.details = t3.details), this.id = t3.id || 0, this.name = t3.name, this.width = t3.width || 0, this.height = t3.height || 0, this.frameRate = t3.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = t3.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = t3.audioCodec, this.videoCodec = t3.videoCodec, this.codecSet = [t3.videoCodec, t3.audioCodec].filter(function(t4) {
              return !!t4;
            }).map(function(t4) {
              return t4.substring(0, 4);
            }).join(","), this.addGroupId("audio", t3.attrs.AUDIO), this.addGroupId("text", t3.attrs.SUBTITLES);
          }
          var e2 = t2.prototype;
          return e2.hasAudioGroup = function(t3) {
            return ir(this._audioGroups, t3);
          }, e2.hasSubtitleGroup = function(t3) {
            return ir(this._subtitleGroups, t3);
          }, e2.addGroupId = function(t3, e3) {
            if (e3) {
              if ("audio" === t3) {
                var r3 = this._audioGroups;
                r3 || (r3 = this._audioGroups = []), -1 === r3.indexOf(e3) && r3.push(e3);
              } else if ("text" === t3) {
                var i3 = this._subtitleGroups;
                i3 || (i3 = this._subtitleGroups = []), -1 === i3.indexOf(e3) && i3.push(e3);
              }
            }
          }, e2.addFallback = function() {
          }, s(t2, [{ key: "maxBitrate", get: function() {
            return Math.max(this.realBitrate, this.bitrate);
          } }, { key: "averageBitrate", get: function() {
            return this._avgBitrate || this.realBitrate || this.bitrate;
          } }, { key: "attrs", get: function() {
            return this._attrs[0];
          } }, { key: "codecs", get: function() {
            return this.attrs.CODECS || "";
          } }, { key: "pathwayId", get: function() {
            return this.attrs["PATHWAY-ID"] || ".";
          } }, { key: "videoRange", get: function() {
            return this.attrs["VIDEO-RANGE"] || "SDR";
          } }, { key: "score", get: function() {
            return this.attrs.optionalFloat("SCORE", 0);
          } }, { key: "uri", get: function() {
            return this.url[0] || "";
          } }, { key: "audioGroups", get: function() {
            return this._audioGroups;
          } }, { key: "subtitleGroups", get: function() {
            return this._subtitleGroups;
          } }, { key: "urlId", get: function() {
            return 0;
          }, set: function(t3) {
          } }, { key: "audioGroupIds", get: function() {
            return this.audioGroups ? [this.audioGroupId] : void 0;
          } }, { key: "textGroupIds", get: function() {
            return this.subtitleGroups ? [this.textGroupId] : void 0;
          } }, { key: "audioGroupId", get: function() {
            var t3;
            return null == (t3 = this.audioGroups) ? void 0 : t3[0];
          } }, { key: "textGroupId", get: function() {
            var t3;
            return null == (t3 = this.subtitleGroups) ? void 0 : t3[0];
          } }]), t2;
        }();
        function ir(t2, e2) {
          return !(!e2 || !t2) && -1 !== t2.indexOf(e2);
        }
        function nr(t2, e2) {
          var r3 = e2.startPTS;
          if (y(r3)) {
            var i3, n2 = 0;
            e2.sn > t2.sn ? (n2 = r3 - t2.start, i3 = t2) : (n2 = t2.start - r3, i3 = e2), i3.duration !== n2 && (i3.duration = n2);
          } else
            e2.sn > t2.sn ? t2.cc === e2.cc && t2.minEndPTS ? e2.start = t2.start + (t2.minEndPTS - t2.start) : e2.start = t2.start + t2.duration : e2.start = Math.max(t2.start - e2.duration, 0);
        }
        function ar(t2, e2, r3, i3, n2, a2) {
          i3 - r3 <= 0 && (w.warn("Fragment should have a positive duration", e2), i3 = r3 + e2.duration, a2 = n2 + e2.duration);
          var s2 = r3, o2 = i3, l2 = e2.startPTS, u2 = e2.endPTS;
          if (y(l2)) {
            var h2 = Math.abs(l2 - r3);
            y(e2.deltaPTS) ? e2.deltaPTS = Math.max(h2, e2.deltaPTS) : e2.deltaPTS = h2, s2 = Math.max(r3, l2), r3 = Math.min(r3, l2), n2 = Math.min(n2, e2.startDTS), o2 = Math.min(i3, u2), i3 = Math.max(i3, u2), a2 = Math.max(a2, e2.endDTS);
          }
          var d2 = r3 - e2.start;
          0 !== e2.start && (e2.start = r3), e2.duration = i3 - e2.start, e2.startPTS = r3, e2.maxStartPTS = s2, e2.startDTS = n2, e2.endPTS = i3, e2.minEndPTS = o2, e2.endDTS = a2;
          var c2, f2 = e2.sn;
          if (!t2 || f2 < t2.startSN || f2 > t2.endSN)
            return 0;
          var g2 = f2 - t2.startSN, v2 = t2.fragments;
          for (v2[g2] = e2, c2 = g2; c2 > 0; c2--)
            nr(v2[c2], v2[c2 - 1]);
          for (c2 = g2; c2 < v2.length - 1; c2++)
            nr(v2[c2], v2[c2 + 1]);
          return t2.fragmentHint && nr(v2[v2.length - 1], t2.fragmentHint), t2.PTSKnown = t2.alignedSliding = true, d2;
        }
        function sr(t2, e2) {
          for (var r3 = null, i3 = t2.fragments, n2 = i3.length - 1; n2 >= 0; n2--) {
            var a2 = i3[n2].initSegment;
            if (a2) {
              r3 = a2;
              break;
            }
          }
          t2.fragmentHint && delete t2.fragmentHint.endPTS;
          var s2, l2, u2, h2, d2, c2 = 0;
          if (function(t3, e3, r4) {
            for (var i4 = e3.skippedSegments, n3 = Math.max(t3.startSN, e3.startSN) - e3.startSN, a3 = (t3.fragmentHint ? 1 : 0) + (i4 ? e3.endSN : Math.min(t3.endSN, e3.endSN)) - e3.startSN, s3 = e3.startSN - t3.startSN, o2 = e3.fragmentHint ? e3.fragments.concat(e3.fragmentHint) : e3.fragments, l3 = t3.fragmentHint ? t3.fragments.concat(t3.fragmentHint) : t3.fragments, u3 = n3; u3 <= a3; u3++) {
              var h3 = l3[s3 + u3], d3 = o2[u3];
              i4 && !d3 && u3 < i4 && (d3 = e3.fragments[u3] = h3), h3 && d3 && r4(h3, d3);
            }
          }(t2, e2, function(t3, i4) {
            t3.relurl && (c2 = t3.cc - i4.cc), y(t3.startPTS) && y(t3.endPTS) && (i4.start = i4.startPTS = t3.startPTS, i4.startDTS = t3.startDTS, i4.maxStartPTS = t3.maxStartPTS, i4.endPTS = t3.endPTS, i4.endDTS = t3.endDTS, i4.minEndPTS = t3.minEndPTS, i4.duration = t3.endPTS - t3.startPTS, i4.duration && (s2 = i4), e2.PTSKnown = e2.alignedSliding = true), i4.elementaryStreams = t3.elementaryStreams, i4.loader = t3.loader, i4.stats = t3.stats, t3.initSegment && (i4.initSegment = t3.initSegment, r3 = t3.initSegment);
          }), r3 && (e2.fragmentHint ? e2.fragments.concat(e2.fragmentHint) : e2.fragments).forEach(function(t3) {
            var e3;
            !t3 || t3.initSegment && t3.initSegment.relurl !== (null == (e3 = r3) ? void 0 : e3.relurl) || (t3.initSegment = r3);
          }), e2.skippedSegments)
            if (e2.deltaUpdateFailed = e2.fragments.some(function(t3) {
              return !t3;
            }), e2.deltaUpdateFailed) {
              w.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
              for (var f2 = e2.skippedSegments; f2--; )
                e2.fragments.shift();
              e2.startSN = e2.fragments[0].sn, e2.startCC = e2.fragments[0].cc;
            } else
              e2.canSkipDateRanges && (e2.dateRanges = (l2 = t2.dateRanges, u2 = e2.dateRanges, h2 = e2.recentlyRemovedDateranges, d2 = o({}, l2), h2 && h2.forEach(function(t3) {
                delete d2[t3];
              }), Object.keys(u2).forEach(function(t3) {
                var e3 = new F(u2[t3].attr, d2[t3]);
                e3.isValid ? d2[t3] = e3 : w.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "' + JSON.stringify(u2[t3].attr) + '"');
              }), d2));
          var g2 = e2.fragments;
          if (c2) {
            w.warn("discontinuity sliding from playlist, take drift into account");
            for (var v2 = 0; v2 < g2.length; v2++)
              g2[v2].cc += c2;
          }
          e2.skippedSegments && (e2.startCC = e2.fragments[0].cc), function(t3, e3, r4) {
            if (t3 && e3)
              for (var i4 = 0, n3 = 0, a3 = t3.length; n3 <= a3; n3++) {
                var s3 = t3[n3], o2 = e3[n3 + i4];
                s3 && o2 && s3.index === o2.index && s3.fragment.sn === o2.fragment.sn ? r4(s3, o2) : i4--;
              }
          }(t2.partList, e2.partList, function(t3, e3) {
            e3.elementaryStreams = t3.elementaryStreams, e3.stats = t3.stats;
          }), s2 ? ar(e2, s2, s2.startPTS, s2.endPTS, s2.startDTS, s2.endDTS) : or(t2, e2), g2.length && (e2.totalduration = e2.edge - g2[0].start), e2.driftStartTime = t2.driftStartTime, e2.driftStart = t2.driftStart;
          var m2 = e2.advancedDateTime;
          if (e2.advanced && m2) {
            var p2 = e2.edge;
            e2.driftStart || (e2.driftStartTime = m2, e2.driftStart = p2), e2.driftEndTime = m2, e2.driftEnd = p2;
          } else
            e2.driftEndTime = t2.driftEndTime, e2.driftEnd = t2.driftEnd, e2.advancedDateTime = t2.advancedDateTime;
        }
        function or(t2, e2) {
          var r3 = e2.startSN + e2.skippedSegments - t2.startSN, i3 = t2.fragments;
          r3 < 0 || r3 >= i3.length || lr(e2, i3[r3].start);
        }
        function lr(t2, e2) {
          if (e2) {
            for (var r3 = t2.fragments, i3 = t2.skippedSegments; i3 < r3.length; i3++)
              r3[i3].start += e2;
            t2.fragmentHint && (t2.fragmentHint.start += e2);
          }
        }
        function ur(t2, e2, r3) {
          var i3;
          return null != t2 && t2.details ? hr(null == (i3 = t2.details) ? void 0 : i3.partList, e2, r3) : null;
        }
        function hr(t2, e2, r3) {
          if (t2)
            for (var i3 = t2.length; i3--; ) {
              var n2 = t2[i3];
              if (n2.index === r3 && n2.fragment.sn === e2)
                return n2;
            }
          return null;
        }
        function dr(t2) {
          t2.forEach(function(t3, e2) {
            var r3 = t3.details;
            null != r3 && r3.fragments && r3.fragments.forEach(function(t4) {
              t4.level = e2;
            });
          });
        }
        function cr(t2) {
          switch (t2.details) {
            case A.FRAG_LOAD_TIMEOUT:
            case A.KEY_LOAD_TIMEOUT:
            case A.LEVEL_LOAD_TIMEOUT:
            case A.MANIFEST_LOAD_TIMEOUT:
              return true;
          }
          return false;
        }
        function fr(t2, e2) {
          var r3 = cr(e2);
          return t2.default[(r3 ? "timeout" : "error") + "Retry"];
        }
        function gr(t2, e2) {
          var r3 = "linear" === t2.backoff ? 1 : Math.pow(2, e2);
          return Math.min(r3 * t2.retryDelayMs, t2.maxRetryDelayMs);
        }
        function vr(t2) {
          return i2(i2({}, t2), { errorRetry: null, timeoutRetry: null });
        }
        function mr(t2, e2, r3, i3) {
          if (!t2)
            return false;
          var n2 = null == i3 ? void 0 : i3.code, a2 = e2 < t2.maxNumRetry && (function(t3) {
            return 0 === t3 && false === navigator.onLine || !!t3 && (t3 < 400 || t3 > 499);
          }(n2) || !!r3);
          return t2.shouldRetry ? t2.shouldRetry(t2, e2, r3, i3, a2) : a2;
        }
        var pr = function(t2, e2) {
          for (var r3 = 0, i3 = t2.length - 1, n2 = null, a2 = null; r3 <= i3; ) {
            var s2 = e2(a2 = t2[n2 = (r3 + i3) / 2 | 0]);
            if (s2 > 0)
              r3 = n2 + 1;
            else {
              if (!(s2 < 0))
                return a2;
              i3 = n2 - 1;
            }
          }
          return null;
        };
        function yr(t2, e2, r3, i3) {
          void 0 === r3 && (r3 = 0), void 0 === i3 && (i3 = 0);
          var n2 = null;
          if (t2) {
            n2 = e2[t2.sn - e2[0].sn + 1] || null;
            var a2 = t2.endDTS - r3;
            a2 > 0 && a2 < 15e-7 && (r3 += 15e-7);
          } else
            0 === r3 && 0 === e2[0].start && (n2 = e2[0]);
          if (n2 && (!t2 || t2.level === n2.level) && 0 === Er(r3, i3, n2))
            return n2;
          var s2 = pr(e2, Er.bind(null, r3, i3));
          return !s2 || s2 === t2 && n2 ? n2 : s2;
        }
        function Er(t2, e2, r3) {
          if (void 0 === t2 && (t2 = 0), void 0 === e2 && (e2 = 0), r3.start <= t2 && r3.start + r3.duration > t2)
            return 0;
          var i3 = Math.min(e2, r3.duration + (r3.deltaPTS ? r3.deltaPTS : 0));
          return r3.start + r3.duration - i3 <= t2 ? 1 : r3.start - i3 > t2 && r3.start ? -1 : 0;
        }
        function Tr(t2, e2, r3) {
          var i3 = 1e3 * Math.min(e2, r3.duration + (r3.deltaPTS ? r3.deltaPTS : 0));
          return (r3.endProgramDateTime || 0) - i3 > t2;
        }
        var Sr = 0, Lr = 2, Ar = 3, Rr = 5, kr = 0, br = 1, Dr = 2, Ir = function() {
          function t2(t3) {
            this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = t3, this.log = w.log.bind(w, "[info]:"), this.warn = w.warn.bind(w, "[warning]:"), this.error = w.error.bind(w, "[error]:"), this.registerListeners();
          }
          var e2 = t2.prototype;
          return e2.registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.ERROR, this.onError, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.LEVEL_UPDATED, this.onLevelUpdated, this);
          }, e2.unregisterListeners = function() {
            var t3 = this.hls;
            t3 && (t3.off(S.ERROR, this.onError, this), t3.off(S.ERROR, this.onErrorOut, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.LEVEL_UPDATED, this.onLevelUpdated, this));
          }, e2.destroy = function() {
            this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {};
          }, e2.startLoad = function(t3) {
          }, e2.stopLoad = function() {
            this.playlistError = 0;
          }, e2.getVariantLevelIndex = function(t3) {
            return (null == t3 ? void 0 : t3.type) === we ? t3.level : this.hls.loadLevel;
          }, e2.onManifestLoading = function() {
            this.playlistError = 0, this.penalizedRenditions = {};
          }, e2.onLevelUpdated = function() {
            this.playlistError = 0;
          }, e2.onError = function(t3, e3) {
            var r3, i3;
            if (!e3.fatal) {
              var n2 = this.hls, a2 = e3.context;
              switch (e3.details) {
                case A.FRAG_LOAD_ERROR:
                case A.FRAG_LOAD_TIMEOUT:
                case A.KEY_LOAD_ERROR:
                case A.KEY_LOAD_TIMEOUT:
                  return void (e3.errorAction = this.getFragRetryOrSwitchAction(e3));
                case A.FRAG_PARSING_ERROR:
                  if (null != (r3 = e3.frag) && r3.gap)
                    return void (e3.errorAction = { action: Sr, flags: kr });
                case A.FRAG_GAP:
                case A.FRAG_DECRYPT_ERROR:
                  return e3.errorAction = this.getFragRetryOrSwitchAction(e3), void (e3.errorAction.action = Lr);
                case A.LEVEL_EMPTY_ERROR:
                case A.LEVEL_PARSING_ERROR:
                  var s2, o2, l2 = e3.parent === we ? e3.level : n2.loadLevel;
                  return void (e3.details === A.LEVEL_EMPTY_ERROR && null != (s2 = e3.context) && null != (o2 = s2.levelDetails) && o2.live ? e3.errorAction = this.getPlaylistRetryOrSwitchAction(e3, l2) : (e3.levelRetry = false, e3.errorAction = this.getLevelSwitchAction(e3, l2)));
                case A.LEVEL_LOAD_ERROR:
                case A.LEVEL_LOAD_TIMEOUT:
                  return void ("number" == typeof (null == a2 ? void 0 : a2.level) && (e3.errorAction = this.getPlaylistRetryOrSwitchAction(e3, a2.level)));
                case A.AUDIO_TRACK_LOAD_ERROR:
                case A.AUDIO_TRACK_LOAD_TIMEOUT:
                case A.SUBTITLE_LOAD_ERROR:
                case A.SUBTITLE_TRACK_LOAD_TIMEOUT:
                  if (a2) {
                    var u2 = n2.levels[n2.loadLevel];
                    if (u2 && (a2.type === De && u2.hasAudioGroup(a2.groupId) || a2.type === Ie && u2.hasSubtitleGroup(a2.groupId)))
                      return e3.errorAction = this.getPlaylistRetryOrSwitchAction(e3, n2.loadLevel), e3.errorAction.action = Lr, void (e3.errorAction.flags = br);
                  }
                  return;
                case A.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
                  var h2 = n2.levels[n2.loadLevel], d2 = null == h2 ? void 0 : h2.attrs["HDCP-LEVEL"];
                  return void (d2 ? e3.errorAction = { action: Lr, flags: Dr, hdcpLevel: d2 } : this.keySystemError(e3));
                case A.BUFFER_ADD_CODEC_ERROR:
                case A.REMUX_ALLOC_ERROR:
                case A.BUFFER_APPEND_ERROR:
                  return void (e3.errorAction = this.getLevelSwitchAction(e3, null != (i3 = e3.level) ? i3 : n2.loadLevel));
                case A.INTERNAL_EXCEPTION:
                case A.BUFFER_APPENDING_ERROR:
                case A.BUFFER_FULL_ERROR:
                case A.LEVEL_SWITCH_ERROR:
                case A.BUFFER_STALLED_ERROR:
                case A.BUFFER_SEEK_OVER_HOLE:
                case A.BUFFER_NUDGE_ON_STALL:
                  return void (e3.errorAction = { action: Sr, flags: kr });
              }
              e3.type === L.KEY_SYSTEM_ERROR && this.keySystemError(e3);
            }
          }, e2.keySystemError = function(t3) {
            var e3 = this.getVariantLevelIndex(t3.frag);
            t3.levelRetry = false, t3.errorAction = this.getLevelSwitchAction(t3, e3);
          }, e2.getPlaylistRetryOrSwitchAction = function(t3, e3) {
            var r3 = fr(this.hls.config.playlistLoadPolicy, t3), i3 = this.playlistError++;
            if (mr(r3, i3, cr(t3), t3.response))
              return { action: Rr, flags: kr, retryConfig: r3, retryCount: i3 };
            var n2 = this.getLevelSwitchAction(t3, e3);
            return r3 && (n2.retryConfig = r3, n2.retryCount = i3), n2;
          }, e2.getFragRetryOrSwitchAction = function(t3) {
            var e3 = this.hls, r3 = this.getVariantLevelIndex(t3.frag), i3 = e3.levels[r3], n2 = e3.config, a2 = n2.fragLoadPolicy, s2 = n2.keyLoadPolicy, o2 = fr(t3.details.startsWith("key") ? s2 : a2, t3), l2 = e3.levels.reduce(function(t4, e4) {
              return t4 + e4.fragmentError;
            }, 0);
            if (i3 && (t3.details !== A.FRAG_GAP && i3.fragmentError++, mr(o2, l2, cr(t3), t3.response)))
              return { action: Rr, flags: kr, retryConfig: o2, retryCount: l2 };
            var u2 = this.getLevelSwitchAction(t3, r3);
            return o2 && (u2.retryConfig = o2, u2.retryCount = l2), u2;
          }, e2.getLevelSwitchAction = function(t3, e3) {
            var r3 = this.hls;
            null == e3 && (e3 = r3.loadLevel);
            var i3 = this.hls.levels[e3];
            if (i3) {
              var n2, a2, s2 = t3.details;
              i3.loadError++, s2 === A.BUFFER_APPEND_ERROR && i3.fragmentError++;
              var o2 = -1, l2 = r3.levels, u2 = r3.loadLevel, h2 = r3.minAutoLevel, d2 = r3.maxAutoLevel;
              r3.autoLevelEnabled || (r3.loadLevel = -1);
              for (var c2, f2 = null == (n2 = t3.frag) ? void 0 : n2.type, g2 = (f2 === Ce && s2 === A.FRAG_PARSING_ERROR || "audio" === t3.sourceBufferName && (s2 === A.BUFFER_ADD_CODEC_ERROR || s2 === A.BUFFER_APPEND_ERROR)) && l2.some(function(t4) {
                var e4 = t4.audioCodec;
                return i3.audioCodec !== e4;
              }), v2 = "video" === t3.sourceBufferName && (s2 === A.BUFFER_ADD_CODEC_ERROR || s2 === A.BUFFER_APPEND_ERROR) && l2.some(function(t4) {
                var e4 = t4.codecSet, r4 = t4.audioCodec;
                return i3.codecSet !== e4 && i3.audioCodec === r4;
              }), m2 = null != (a2 = t3.context) ? a2 : {}, p2 = m2.type, y2 = m2.groupId, E2 = function() {
                var e4 = (T2 + u2) % l2.length;
                if (e4 !== u2 && e4 >= h2 && e4 <= d2 && 0 === l2[e4].loadError) {
                  var r4, n3, a3 = l2[e4];
                  if (s2 === A.FRAG_GAP && t3.frag) {
                    var c3 = l2[e4].details;
                    if (c3) {
                      var m3 = yr(t3.frag, c3.fragments, t3.frag.start);
                      if (null != m3 && m3.gap)
                        return 0;
                    }
                  } else {
                    if (p2 === De && a3.hasAudioGroup(y2) || p2 === Ie && a3.hasSubtitleGroup(y2))
                      return 0;
                    if (f2 === Ce && null != (r4 = i3.audioGroups) && r4.some(function(t4) {
                      return a3.hasAudioGroup(t4);
                    }) || f2 === _e && null != (n3 = i3.subtitleGroups) && n3.some(function(t4) {
                      return a3.hasSubtitleGroup(t4);
                    }) || g2 && i3.audioCodec === a3.audioCodec || !g2 && i3.audioCodec !== a3.audioCodec || v2 && i3.codecSet === a3.codecSet)
                      return 0;
                  }
                  return o2 = e4, 1;
                }
              }, T2 = l2.length; T2-- && (0 === (c2 = E2()) || 1 !== c2); )
                ;
              if (o2 > -1 && r3.loadLevel !== o2)
                return t3.levelRetry = true, this.playlistError = 0, { action: Lr, flags: kr, nextAutoLevel: o2 };
            }
            return { action: Lr, flags: br };
          }, e2.onErrorOut = function(t3, e3) {
            var r3;
            switch (null == (r3 = e3.errorAction) ? void 0 : r3.action) {
              case Sr:
                break;
              case Lr:
                this.sendAlternateToPenaltyBox(e3), e3.errorAction.resolved || e3.details === A.FRAG_GAP ? /MediaSource readyState: ended/.test(e3.error.message) && (this.warn('MediaSource ended after "' + e3.sourceBufferName + '" sourceBuffer append error. Attempting to recover from media error.'), this.hls.recoverMediaError()) : e3.fatal = true;
            }
            e3.fatal && this.hls.stopLoad();
          }, e2.sendAlternateToPenaltyBox = function(t3) {
            var e3 = this.hls, r3 = t3.errorAction;
            if (r3) {
              var i3 = r3.flags, n2 = r3.hdcpLevel, a2 = r3.nextAutoLevel;
              switch (i3) {
                case kr:
                  this.switchLevel(t3, a2);
                  break;
                case Dr:
                  n2 && (e3.maxHdcpLevel = ze[ze.indexOf(n2) - 1], r3.resolved = true), this.warn('Restricting playback to HDCP-LEVEL of "' + e3.maxHdcpLevel + '" or lower');
              }
              r3.resolved || this.switchLevel(t3, a2);
            }
          }, e2.switchLevel = function(t3, e3) {
            void 0 !== e3 && t3.errorAction && (this.warn("switching to level " + e3 + " after " + t3.details), this.hls.nextAutoLevel = e3, t3.errorAction.resolved = true, this.hls.nextLoadLevel = this.hls.nextAutoLevel);
          }, t2;
        }(), wr = function() {
          function t2(t3, e3) {
            this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = false, this.log = void 0, this.warn = void 0, this.log = w.log.bind(w, e3 + ":"), this.warn = w.warn.bind(w, e3 + ":"), this.hls = t3;
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
            this.clearTimer(), this.hls = this.log = this.warn = null;
          }, e2.clearTimer = function() {
            -1 !== this.timer && (self.clearTimeout(this.timer), this.timer = -1);
          }, e2.startLoad = function() {
            this.canLoad = true, this.requestScheduled = -1, this.loadPlaylist();
          }, e2.stopLoad = function() {
            this.canLoad = false, this.clearTimer();
          }, e2.switchParams = function(t3, e3, r3) {
            var i3 = null == e3 ? void 0 : e3.renditionReports;
            if (i3) {
              for (var n2 = -1, a2 = 0; a2 < i3.length; a2++) {
                var s2 = i3[a2], o2 = void 0;
                try {
                  o2 = new self.URL(s2.URI, e3.url).href;
                } catch (t4) {
                  w.warn("Could not construct new URL for Rendition Report: " + t4), o2 = s2.URI || "";
                }
                if (o2 === t3) {
                  n2 = a2;
                  break;
                }
                o2 === t3.substring(0, o2.length) && (n2 = a2);
              }
              if (-1 !== n2) {
                var l2 = i3[n2], u2 = parseInt(l2["LAST-MSN"]) || (null == e3 ? void 0 : e3.lastPartSn), h2 = parseInt(l2["LAST-PART"]) || (null == e3 ? void 0 : e3.lastPartIndex);
                if (this.hls.config.lowLatencyMode) {
                  var d2 = Math.min(e3.age - e3.partTarget, e3.targetduration);
                  h2 >= 0 && d2 > e3.partTarget && (h2 += 1);
                }
                var c2 = r3 && tr(r3);
                return new er(u2, h2 >= 0 ? h2 : void 0, c2);
              }
            }
          }, e2.loadPlaylist = function(t3) {
            -1 === this.requestScheduled && (this.requestScheduled = self.performance.now());
          }, e2.shouldLoadPlaylist = function(t3) {
            return this.canLoad && !!t3 && !!t3.url && (!t3.details || t3.details.live);
          }, e2.shouldReloadPlaylist = function(t3) {
            return -1 === this.timer && -1 === this.requestScheduled && this.shouldLoadPlaylist(t3);
          }, e2.playlistLoaded = function(t3, e3, r3) {
            var i3 = this, n2 = e3.details, a2 = e3.stats, s2 = self.performance.now(), o2 = a2.loading.first ? Math.max(0, s2 - a2.loading.first) : 0;
            if (n2.advancedDateTime = Date.now() - o2, n2.live || null != r3 && r3.live) {
              if (n2.reloaded(r3), r3 && this.log("live playlist " + t3 + " " + (n2.advanced ? "REFRESHED " + n2.lastPartSn + "-" + n2.lastPartIndex : n2.updated ? "UPDATED" : "MISSED")), r3 && n2.fragments.length > 0 && sr(r3, n2), !this.canLoad || !n2.live)
                return;
              var l2, u2 = void 0, h2 = void 0;
              if (n2.canBlockReload && n2.endSN && n2.advanced) {
                var d2 = this.hls.config.lowLatencyMode, c2 = n2.lastPartSn, f2 = n2.endSN, g2 = n2.lastPartIndex, v2 = c2 === f2;
                -1 !== g2 ? (u2 = v2 ? f2 + 1 : c2, h2 = v2 ? d2 ? 0 : g2 : g2 + 1) : u2 = f2 + 1;
                var m2 = n2.age, p2 = m2 + n2.ageHeader, y2 = Math.min(p2 - n2.partTarget, 1.5 * n2.targetduration);
                if (y2 > 0) {
                  if (r3 && y2 > r3.tuneInGoal)
                    this.warn("CDN Tune-in goal increased from: " + r3.tuneInGoal + " to: " + y2 + " with playlist age: " + n2.age), y2 = 0;
                  else {
                    var E2 = Math.floor(y2 / n2.targetduration);
                    u2 += E2, void 0 !== h2 && (h2 += Math.round(y2 % n2.targetduration / n2.partTarget)), this.log("CDN Tune-in age: " + n2.ageHeader + "s last advanced " + m2.toFixed(2) + "s goal: " + y2 + " skip sn " + E2 + " to part " + h2);
                  }
                  n2.tuneInGoal = y2;
                }
                if (l2 = this.getDeliveryDirectives(n2, e3.deliveryDirectives, u2, h2), d2 || !v2)
                  return void this.loadPlaylist(l2);
              } else
                (n2.canBlockReload || n2.canSkipUntil) && (l2 = this.getDeliveryDirectives(n2, e3.deliveryDirectives, u2, h2));
              var T2 = this.hls.mainForwardBufferInfo, S2 = T2 ? T2.end - T2.len : 0, L2 = function(t4, e4) {
                void 0 === e4 && (e4 = 1 / 0);
                var r4 = 1e3 * t4.targetduration;
                if (t4.updated) {
                  var i4 = t4.fragments;
                  if (i4.length && 4 * r4 > e4) {
                    var n3 = 1e3 * i4[i4.length - 1].duration;
                    n3 < r4 && (r4 = n3);
                  }
                } else
                  r4 /= 2;
                return Math.round(r4);
              }(n2, 1e3 * (n2.edge - S2));
              n2.updated && s2 > this.requestScheduled + L2 && (this.requestScheduled = a2.loading.start), void 0 !== u2 && n2.canBlockReload ? this.requestScheduled = a2.loading.first + L2 - (1e3 * n2.partTarget || 1e3) : -1 === this.requestScheduled || this.requestScheduled + L2 < s2 ? this.requestScheduled = s2 : this.requestScheduled - s2 <= 0 && (this.requestScheduled += L2);
              var A2 = this.requestScheduled - s2;
              A2 = Math.max(0, A2), this.log("reload live playlist " + t3 + " in " + Math.round(A2) + " ms"), this.timer = self.setTimeout(function() {
                return i3.loadPlaylist(l2);
              }, A2);
            } else
              this.clearTimer();
          }, e2.getDeliveryDirectives = function(t3, e3, r3, i3) {
            var n2 = tr(t3);
            return null != e3 && e3.skip && t3.deltaUpdateFailed && (r3 = e3.msn, i3 = e3.part, n2 = Je), new er(r3, i3, n2);
          }, e2.checkRetry = function(t3) {
            var e3 = this, r3 = t3.details, i3 = cr(t3), n2 = t3.errorAction, a2 = n2 || {}, s2 = a2.action, o2 = a2.retryCount, l2 = void 0 === o2 ? 0 : o2, u2 = a2.retryConfig, h2 = !!n2 && !!u2 && (s2 === Rr || !n2.resolved && s2 === Lr);
            if (h2) {
              var d2;
              if (this.requestScheduled = -1, l2 >= u2.maxNumRetry)
                return false;
              if (i3 && null != (d2 = t3.context) && d2.deliveryDirectives)
                this.warn("Retrying playlist loading " + (l2 + 1) + "/" + u2.maxNumRetry + ' after "' + r3 + '" without delivery-directives'), this.loadPlaylist();
              else {
                var c2 = gr(u2, l2);
                this.timer = self.setTimeout(function() {
                  return e3.loadPlaylist();
                }, c2), this.warn("Retrying playlist loading " + (l2 + 1) + "/" + u2.maxNumRetry + ' after "' + r3 + '" in ' + c2 + "ms");
              }
              t3.levelRetry = true, n2.resolved = true;
            }
            return h2;
          }, t2;
        }(), Cr = function() {
          function t2(t3, e3, r3) {
            void 0 === e3 && (e3 = 0), void 0 === r3 && (r3 = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t3, this.alpha_ = t3 ? Math.exp(Math.log(0.5) / t3) : 0, this.estimate_ = e3, this.totalWeight_ = r3;
          }
          var e2 = t2.prototype;
          return e2.sample = function(t3, e3) {
            var r3 = Math.pow(this.alpha_, t3);
            this.estimate_ = e3 * (1 - r3) + r3 * this.estimate_, this.totalWeight_ += t3;
          }, e2.getTotalWeight = function() {
            return this.totalWeight_;
          }, e2.getEstimate = function() {
            if (this.alpha_) {
              var t3 = 1 - Math.pow(this.alpha_, this.totalWeight_);
              if (t3)
                return this.estimate_ / t3;
            }
            return this.estimate_;
          }, t2;
        }(), _r = function() {
          function t2(t3, e3, r3, i3) {
            void 0 === i3 && (i3 = 100), this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = r3, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new Cr(t3), this.fast_ = new Cr(e3), this.defaultTTFB_ = i3, this.ttfb_ = new Cr(t3);
          }
          var e2 = t2.prototype;
          return e2.update = function(t3, e3) {
            var r3 = this.slow_, i3 = this.fast_, n2 = this.ttfb_;
            r3.halfLife !== t3 && (this.slow_ = new Cr(t3, r3.getEstimate(), r3.getTotalWeight())), i3.halfLife !== e3 && (this.fast_ = new Cr(e3, i3.getEstimate(), i3.getTotalWeight())), n2.halfLife !== t3 && (this.ttfb_ = new Cr(t3, n2.getEstimate(), n2.getTotalWeight()));
          }, e2.sample = function(t3, e3) {
            var r3 = (t3 = Math.max(t3, this.minDelayMs_)) / 1e3, i3 = 8 * e3 / r3;
            this.fast_.sample(r3, i3), this.slow_.sample(r3, i3);
          }, e2.sampleTTFB = function(t3) {
            var e3 = t3 / 1e3, r3 = Math.sqrt(2) * Math.exp(-Math.pow(e3, 2) / 2);
            this.ttfb_.sample(r3, Math.max(t3, 5));
          }, e2.canEstimate = function() {
            return this.fast_.getTotalWeight() >= this.minWeight_;
          }, e2.getEstimate = function() {
            return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
          }, e2.getEstimateTTFB = function() {
            return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
          }, e2.destroy = function() {
          }, t2;
        }(), xr = { supported: true, configurations: [], decodingInfoResults: [{ supported: true, powerEfficient: true, smooth: true }] }, Pr = {};
        function Fr(t2, e2, r3) {
          var n2 = t2.videoCodec, a2 = t2.audioCodec;
          if (!n2 || !a2 || !r3)
            return Promise.resolve(xr);
          var s2 = { width: t2.width, height: t2.height, bitrate: Math.ceil(Math.max(0.9 * t2.bitrate, t2.averageBitrate)), framerate: t2.frameRate || 30 }, o2 = t2.videoRange;
          "SDR" !== o2 && (s2.transferFunction = o2.toLowerCase());
          var l2 = n2.split(",").map(function(t3) {
            return { type: "media-source", video: i2(i2({}, s2), {}, { contentType: ae(t3, "video") }) };
          });
          return a2 && t2.audioGroups && t2.audioGroups.forEach(function(t3) {
            var r4;
            t3 && (null == (r4 = e2.groups[t3]) || r4.tracks.forEach(function(e3) {
              if (e3.groupId === t3) {
                var r5 = e3.channels || "", i3 = parseFloat(r5);
                y(i3) && i3 > 2 && l2.push.apply(l2, a2.split(",").map(function(t4) {
                  return { type: "media-source", audio: { contentType: ae(t4, "audio"), channels: "" + i3 } };
                }));
              }
            }));
          }), Promise.all(l2.map(function(t3) {
            var e3 = function(t4) {
              var e4 = t4.audio, r4 = t4.video, i3 = r4 || e4;
              if (i3) {
                var n3 = i3.contentType.split('"')[1];
                if (r4)
                  return "r" + r4.height + "x" + r4.width + "f" + Math.ceil(r4.framerate) + (r4.transferFunction || "sd") + "_" + n3 + "_" + Math.ceil(r4.bitrate / 1e5);
                if (e4)
                  return "c" + e4.channels + (e4.spatialRendering ? "s" : "n") + "_" + n3;
              }
              return "";
            }(t3);
            return Pr[e3] || (Pr[e3] = r3.decodingInfo(t3));
          })).then(function(t3) {
            return { supported: !t3.some(function(t4) {
              return !t4.supported;
            }), configurations: l2, decodingInfoResults: t3 };
          }).catch(function(t3) {
            return { supported: false, configurations: l2, decodingInfoResults: [], error: t3 };
          });
        }
        function Mr(t2, e2) {
          var r3 = false, i3 = [];
          return t2 && (r3 = "SDR" !== t2, i3 = [t2]), e2 && (i3 = e2.allowedVideoRanges || Qe.slice(0), i3 = (r3 = void 0 !== e2.preferHDR ? e2.preferHDR : function() {
            if ("function" == typeof matchMedia) {
              var t3 = matchMedia("(dynamic-range: high)"), e3 = matchMedia("bad query");
              if (t3.media !== e3.media)
                return true === t3.matches;
            }
            return false;
          }()) ? i3.filter(function(t3) {
            return "SDR" !== t3;
          }) : ["SDR"]), { preferHDR: r3, allowedVideoRanges: i3 };
        }
        function Or(t2, e2) {
          w.log('[abr] start candidates with "' + t2 + '" ignored because ' + e2);
        }
        function Nr(t2, e2, r3) {
          if ("attrs" in t2) {
            var i3 = e2.indexOf(t2);
            if (-1 !== i3)
              return i3;
          }
          for (var n2 = 0; n2 < e2.length; n2++)
            if (Ur(t2, e2[n2], r3))
              return n2;
          return -1;
        }
        function Ur(t2, e2, r3) {
          var i3 = t2.groupId, n2 = t2.name, a2 = t2.lang, s2 = t2.assocLang, o2 = t2.characteristics, l2 = t2.default, u2 = t2.forced;
          return (void 0 === i3 || e2.groupId === i3) && (void 0 === n2 || e2.name === n2) && (void 0 === a2 || e2.lang === a2) && (void 0 === a2 || e2.assocLang === s2) && (void 0 === l2 || e2.default === l2) && (void 0 === u2 || e2.forced === u2) && (void 0 === o2 || function(t3, e3) {
            void 0 === e3 && (e3 = "");
            var r4 = t3.split(","), i4 = e3.split(",");
            return r4.length === i4.length && !r4.some(function(t4) {
              return -1 === i4.indexOf(t4);
            });
          }(o2, e2.characteristics)) && (void 0 === r3 || r3(t2, e2));
        }
        function Br(t2, e2) {
          var r3 = t2.audioCodec, i3 = t2.channels;
          return !(void 0 !== r3 && (e2.audioCodec || "").substring(0, 4) !== r3.substring(0, 4) || void 0 !== i3 && i3 !== (e2.channels || "2"));
        }
        function Gr(t2, e2, r3) {
          for (var i3 = e2; i3; i3--)
            if (r3(t2[i3]))
              return i3;
          for (var n2 = e2 + 1; n2 < t2.length; n2++)
            if (r3(t2[n2]))
              return n2;
          return -1;
        }
        var Kr = function() {
          function t2(t3) {
            var e3 = this;
            this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this._abandonRulesCheck = function() {
              var t4 = e3.fragCurrent, r3 = e3.partCurrent, i3 = e3.hls, n2 = i3.autoLevelEnabled, a2 = i3.media;
              if (t4 && a2) {
                var s2 = performance.now(), o2 = r3 ? r3.stats : t4.stats, l2 = r3 ? r3.duration : t4.duration, u2 = s2 - o2.loading.start, h2 = i3.minAutoLevel;
                if (o2.aborted || o2.loaded && o2.loaded === o2.total || t4.level <= h2)
                  return e3.clearTimer(), void (e3._nextAutoLevel = -1);
                if (n2 && !a2.paused && a2.playbackRate && a2.readyState) {
                  var d2 = i3.mainForwardBufferInfo;
                  if (null !== d2) {
                    var c2 = e3.bwEstimator.getEstimateTTFB(), f2 = Math.abs(a2.playbackRate);
                    if (!(u2 <= Math.max(c2, l2 / (2 * f2) * 1e3))) {
                      var g2 = d2.len / f2, v2 = o2.loading.first ? o2.loading.first - o2.loading.start : -1, m2 = o2.loaded && v2 > -1, p2 = e3.getBwEstimate(), E2 = i3.levels, T2 = E2[t4.level], L2 = o2.total || Math.max(o2.loaded, Math.round(l2 * T2.averageBitrate / 8)), A2 = m2 ? u2 - v2 : u2;
                      A2 < 1 && m2 && (A2 = Math.min(u2, 8 * o2.loaded / p2));
                      var R2 = m2 ? 1e3 * o2.loaded / A2 : 0, k2 = R2 ? (L2 - o2.loaded) / R2 : 8 * L2 / p2 + c2 / 1e3;
                      if (!(k2 <= g2)) {
                        var b2, D2 = R2 ? 8 * R2 : p2, I2 = Number.POSITIVE_INFINITY;
                        for (b2 = t4.level - 1; b2 > h2; b2--) {
                          var C2 = E2[b2].maxBitrate;
                          if ((I2 = e3.getTimeToLoadFrag(c2 / 1e3, D2, l2 * C2, !E2[b2].details)) < g2)
                            break;
                        }
                        if (!(I2 >= k2 || I2 > 10 * l2)) {
                          i3.nextLoadLevel = i3.nextAutoLevel = b2, m2 ? e3.bwEstimator.sample(u2 - Math.min(c2, v2), o2.loaded) : e3.bwEstimator.sampleTTFB(u2);
                          var _2 = E2[b2].maxBitrate;
                          e3.getBwEstimate() * e3.hls.config.abrBandWidthUpFactor > _2 && e3.resetEstimator(_2), e3.clearTimer(), w.warn("[abr] Fragment " + t4.sn + (r3 ? " part " + r3.index : "") + " of level " + t4.level + " is loading too slowly;\n      Time to underbuffer: " + g2.toFixed(3) + " s\n      Estimated load time for current fragment: " + k2.toFixed(3) + " s\n      Estimated load time for down switch fragment: " + I2.toFixed(3) + " s\n      TTFB estimate: " + (0 | v2) + " ms\n      Current BW estimate: " + (y(p2) ? 0 | p2 : "Unknown") + " bps\n      New BW estimate: " + (0 | e3.getBwEstimate()) + " bps\n      Switching to level " + b2 + " @ " + (0 | _2) + " bps"), i3.trigger(S.FRAG_LOAD_EMERGENCY_ABORTED, { frag: t4, part: r3, stats: o2 });
                        }
                      }
                    }
                  }
                }
              }
            }, this.hls = t3, this.bwEstimator = this.initEstimator(), this.registerListeners();
          }
          var e2 = t2.prototype;
          return e2.resetEstimator = function(t3) {
            t3 && (w.log("setting initial bwe to " + t3), this.hls.config.abrEwmaDefaultEstimate = t3), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
          }, e2.initEstimator = function() {
            var t3 = this.hls.config;
            return new _r(t3.abrEwmaSlowVoD, t3.abrEwmaFastVoD, t3.abrEwmaDefaultEstimate);
          }, e2.registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.FRAG_LOADING, this.onFragLoading, this), t3.on(S.FRAG_LOADED, this.onFragLoaded, this), t3.on(S.FRAG_BUFFERED, this.onFragBuffered, this), t3.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t3.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t3.on(S.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), t3.on(S.ERROR, this.onError, this);
          }, e2.unregisterListeners = function() {
            var t3 = this.hls;
            t3 && (t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.FRAG_LOADING, this.onFragLoading, this), t3.off(S.FRAG_LOADED, this.onFragLoaded, this), t3.off(S.FRAG_BUFFERED, this.onFragBuffered, this), t3.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t3.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t3.off(S.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), t3.off(S.ERROR, this.onError, this));
          }, e2.destroy = function() {
            this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = null, this.fragCurrent = this.partCurrent = null;
          }, e2.onManifestLoading = function(t3, e3) {
            this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
          }, e2.onLevelsUpdated = function() {
            this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
          }, e2.onMaxAutoLevelUpdated = function() {
            this.firstSelection = -1, this.nextAutoLevelKey = "";
          }, e2.onFragLoading = function(t3, e3) {
            var r3, i3 = e3.frag;
            this.ignoreFragment(i3) || (i3.bitrateTest || (this.fragCurrent = i3, this.partCurrent = null != (r3 = e3.part) ? r3 : null), this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100));
          }, e2.onLevelSwitching = function(t3, e3) {
            this.clearTimer();
          }, e2.onError = function(t3, e3) {
            if (!e3.fatal)
              switch (e3.details) {
                case A.BUFFER_ADD_CODEC_ERROR:
                case A.BUFFER_APPEND_ERROR:
                  this.lastLoadedFragLevel = -1, this.firstSelection = -1;
                  break;
                case A.FRAG_LOAD_TIMEOUT:
                  var r3 = e3.frag, i3 = this.fragCurrent, n2 = this.partCurrent;
                  if (r3 && i3 && r3.sn === i3.sn && r3.level === i3.level) {
                    var a2 = performance.now(), s2 = n2 ? n2.stats : r3.stats, o2 = a2 - s2.loading.start, l2 = s2.loading.first ? s2.loading.first - s2.loading.start : -1;
                    if (s2.loaded && l2 > -1) {
                      var u2 = this.bwEstimator.getEstimateTTFB();
                      this.bwEstimator.sample(o2 - Math.min(u2, l2), s2.loaded);
                    } else
                      this.bwEstimator.sampleTTFB(o2);
                  }
              }
          }, e2.getTimeToLoadFrag = function(t3, e3, r3, i3) {
            return t3 + r3 / e3 + (i3 ? this.lastLevelLoadSec : 0);
          }, e2.onLevelLoaded = function(t3, e3) {
            var r3 = this.hls.config, i3 = e3.stats.loading, n2 = i3.end - i3.start;
            y(n2) && (this.lastLevelLoadSec = n2 / 1e3), e3.details.live ? this.bwEstimator.update(r3.abrEwmaSlowLive, r3.abrEwmaFastLive) : this.bwEstimator.update(r3.abrEwmaSlowVoD, r3.abrEwmaFastVoD);
          }, e2.onFragLoaded = function(t3, e3) {
            var r3 = e3.frag, i3 = e3.part, n2 = i3 ? i3.stats : r3.stats;
            if (r3.type === we && this.bwEstimator.sampleTTFB(n2.loading.first - n2.loading.start), !this.ignoreFragment(r3)) {
              if (this.clearTimer(), r3.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
                var a2 = i3 ? i3.duration : r3.duration, s2 = this.hls.levels[r3.level], o2 = (s2.loaded ? s2.loaded.bytes : 0) + n2.loaded, l2 = (s2.loaded ? s2.loaded.duration : 0) + a2;
                s2.loaded = { bytes: o2, duration: l2 }, s2.realBitrate = Math.round(8 * o2 / l2);
              }
              if (r3.bitrateTest) {
                var u2 = { stats: n2, frag: r3, part: i3, id: r3.type };
                this.onFragBuffered(S.FRAG_BUFFERED, u2), r3.bitrateTest = false;
              } else
                this.lastLoadedFragLevel = r3.level;
            }
          }, e2.onFragBuffered = function(t3, e3) {
            var r3 = e3.frag, i3 = e3.part, n2 = null != i3 && i3.stats.loaded ? i3.stats : r3.stats;
            if (!n2.aborted && !this.ignoreFragment(r3)) {
              var a2 = n2.parsing.end - n2.loading.start - Math.min(n2.loading.first - n2.loading.start, this.bwEstimator.getEstimateTTFB());
              this.bwEstimator.sample(a2, n2.loaded), n2.bwEstimate = this.getBwEstimate(), r3.bitrateTest ? this.bitrateTestDelay = a2 / 1e3 : this.bitrateTestDelay = 0;
            }
          }, e2.ignoreFragment = function(t3) {
            return t3.type !== we || "initSegment" === t3.sn;
          }, e2.clearTimer = function() {
            this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
          }, e2.getAutoLevelKey = function() {
            return this.getBwEstimate() + "_" + this.getStarvationDelay().toFixed(2);
          }, e2.getNextABRAutoLevel = function() {
            var t3 = this.fragCurrent, e3 = this.partCurrent, r3 = this.hls, i3 = r3.maxAutoLevel, n2 = r3.config, a2 = r3.minAutoLevel, s2 = e3 ? e3.duration : t3 ? t3.duration : 0, o2 = this.getBwEstimate(), l2 = this.getStarvationDelay(), u2 = n2.abrBandWidthFactor, h2 = n2.abrBandWidthUpFactor;
            if (l2) {
              var d2 = this.findBestLevel(o2, a2, i3, l2, 0, u2, h2);
              if (d2 >= 0)
                return d2;
            }
            var c2 = s2 ? Math.min(s2, n2.maxStarvationDelay) : n2.maxStarvationDelay;
            if (!l2) {
              var f2 = this.bitrateTestDelay;
              f2 && (c2 = (s2 ? Math.min(s2, n2.maxLoadingDelay) : n2.maxLoadingDelay) - f2, w.info("[abr] bitrate test took " + Math.round(1e3 * f2) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * c2) + " ms"), u2 = h2 = 1);
            }
            var g2 = this.findBestLevel(o2, a2, i3, l2, c2, u2, h2);
            if (w.info("[abr] " + (l2 ? "rebuffering expected" : "buffer is empty") + ", optimal quality level " + g2), g2 > -1)
              return g2;
            var v2 = r3.levels[a2], m2 = r3.levels[r3.loadLevel];
            return (null == v2 ? void 0 : v2.bitrate) < (null == m2 ? void 0 : m2.bitrate) ? a2 : r3.loadLevel;
          }, e2.getStarvationDelay = function() {
            var t3 = this.hls, e3 = t3.media;
            if (!e3)
              return 1 / 0;
            var r3 = e3 && 0 !== e3.playbackRate ? Math.abs(e3.playbackRate) : 1, i3 = t3.mainForwardBufferInfo;
            return (i3 ? i3.len : 0) / r3;
          }, e2.getBwEstimate = function() {
            return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
          }, e2.findBestLevel = function(t3, e3, r3, i3, n2, a2, s2) {
            var o2, l2 = this, u2 = i3 + n2, h2 = this.lastLoadedFragLevel, d2 = -1 === h2 ? this.hls.firstLevel : h2, c2 = this.fragCurrent, f2 = this.partCurrent, g2 = this.hls, v2 = g2.levels, m2 = g2.allAudioTracks, p2 = g2.loadLevel, E2 = g2.config;
            if (1 === v2.length)
              return 0;
            var T2, S2 = v2[d2], L2 = !(null == S2 || null == (o2 = S2.details) || !o2.live), A2 = -1 === p2 || -1 === h2, R2 = "SDR", k2 = (null == S2 ? void 0 : S2.frameRate) || 0, b2 = E2.audioPreference, D2 = E2.videoPreference, I2 = this.audioTracksByGroup || (this.audioTracksByGroup = function(t4) {
              return t4.reduce(function(t5, e4) {
                var r4 = t5.groups[e4.groupId];
                r4 || (r4 = t5.groups[e4.groupId] = { tracks: [], channels: { 2: 0 }, hasDefault: false, hasAutoSelect: false }), r4.tracks.push(e4);
                var i4 = e4.channels || "2";
                return r4.channels[i4] = (r4.channels[i4] || 0) + 1, r4.hasDefault = r4.hasDefault || e4.default, r4.hasAutoSelect = r4.hasAutoSelect || e4.autoselect, r4.hasDefault && (t5.hasDefaultAudio = true), r4.hasAutoSelect && (t5.hasAutoSelectAudio = true), t5;
              }, { hasDefaultAudio: false, hasAutoSelectAudio: false, groups: {} });
            }(m2));
            if (A2) {
              if (-1 !== this.firstSelection)
                return this.firstSelection;
              var C2 = this.codecTiers || (this.codecTiers = function(t4, e4, r4, i4) {
                return t4.slice(r4, i4 + 1).reduce(function(t5, r5) {
                  if (!r5.codecSet)
                    return t5;
                  var i5 = r5.audioGroups, n3 = t5[r5.codecSet];
                  n3 || (t5[r5.codecSet] = n3 = { minBitrate: 1 / 0, minHeight: 1 / 0, minFramerate: 1 / 0, maxScore: 0, videoRanges: { SDR: 0 }, channels: { 2: 0 }, hasDefaultAudio: !i5, fragmentError: 0 }), n3.minBitrate = Math.min(n3.minBitrate, r5.bitrate);
                  var a3 = Math.min(r5.height, r5.width);
                  return n3.minHeight = Math.min(n3.minHeight, a3), n3.minFramerate = Math.min(n3.minFramerate, r5.frameRate), n3.maxScore = Math.max(n3.maxScore, r5.score), n3.fragmentError += r5.fragmentError, n3.videoRanges[r5.videoRange] = (n3.videoRanges[r5.videoRange] || 0) + 1, i5 && i5.forEach(function(t6) {
                    if (t6) {
                      var r6 = e4.groups[t6];
                      r6 && (n3.hasDefaultAudio = n3.hasDefaultAudio || e4.hasDefaultAudio ? r6.hasDefault : r6.hasAutoSelect || !e4.hasDefaultAudio && !e4.hasAutoSelectAudio, Object.keys(r6.channels).forEach(function(t7) {
                        n3.channels[t7] = (n3.channels[t7] || 0) + r6.channels[t7];
                      }));
                    }
                  }), t5;
                }, {});
              }(v2, I2, e3, r3)), _2 = function(t4, e4, r4, i4, n3) {
                for (var a3 = Object.keys(t4), s3 = null == i4 ? void 0 : i4.channels, o3 = null == i4 ? void 0 : i4.audioCodec, l3 = s3 && 2 === parseInt(s3), u3 = true, h3 = false, d3 = 1 / 0, c3 = 1 / 0, f3 = 1 / 0, g3 = 0, v3 = [], m3 = Mr(e4, n3), p3 = m3.preferHDR, E3 = m3.allowedVideoRanges, T3 = function() {
                  var e5 = t4[a3[S3]];
                  u3 = e5.channels[2] > 0, d3 = Math.min(d3, e5.minHeight), c3 = Math.min(c3, e5.minFramerate), f3 = Math.min(f3, e5.minBitrate);
                  var r5 = E3.filter(function(t5) {
                    return e5.videoRanges[t5] > 0;
                  });
                  r5.length > 0 && (h3 = true, v3 = r5);
                }, S3 = a3.length; S3--; )
                  T3();
                d3 = y(d3) ? d3 : 0, c3 = y(c3) ? c3 : 0;
                var L3 = Math.max(1080, d3), A3 = Math.max(30, c3);
                return f3 = y(f3) ? f3 : r4, r4 = Math.max(f3, r4), h3 || (e4 = void 0, v3 = []), { codecSet: a3.reduce(function(e5, i5) {
                  var n4 = t4[i5];
                  if (i5 === e5)
                    return e5;
                  if (n4.minBitrate > r4)
                    return Or(i5, "min bitrate of " + n4.minBitrate + " > current estimate of " + r4), e5;
                  if (!n4.hasDefaultAudio)
                    return Or(i5, "no renditions with default or auto-select sound found"), e5;
                  if (o3 && i5.indexOf(o3.substring(0, 4)) % 5 != 0)
                    return Or(i5, 'audio codec preference "' + o3 + '" not found'), e5;
                  if (s3 && !l3) {
                    if (!n4.channels[s3])
                      return Or(i5, "no renditions with " + s3 + " channel sound found (channels options: " + Object.keys(n4.channels) + ")"), e5;
                  } else if ((!o3 || l3) && u3 && 0 === n4.channels[2])
                    return Or(i5, "no renditions with stereo sound found"), e5;
                  return n4.minHeight > L3 ? (Or(i5, "min resolution of " + n4.minHeight + " > maximum of " + L3), e5) : n4.minFramerate > A3 ? (Or(i5, "min framerate of " + n4.minFramerate + " > maximum of " + A3), e5) : v3.some(function(t5) {
                    return n4.videoRanges[t5] > 0;
                  }) ? n4.maxScore < g3 ? (Or(i5, "max score of " + n4.maxScore + " < selected max of " + g3), e5) : e5 && (oe(i5) >= oe(e5) || n4.fragmentError > t4[e5].fragmentError) ? e5 : (g3 = n4.maxScore, i5) : (Or(i5, "no variants with VIDEO-RANGE of " + JSON.stringify(v3) + " found"), e5);
                }, void 0), videoRanges: v3, preferHDR: p3, minFramerate: c3, minBitrate: f3 };
              }(C2, R2, t3, b2, D2), x2 = _2.codecSet, P2 = _2.videoRanges, F2 = _2.minFramerate, M2 = _2.minBitrate, O2 = _2.preferHDR;
              T2 = x2, R2 = O2 ? P2[P2.length - 1] : P2[0], k2 = F2, t3 = Math.max(t3, M2), w.log("[abr] picked start tier " + JSON.stringify(_2));
            } else
              T2 = null == S2 ? void 0 : S2.codecSet, R2 = null == S2 ? void 0 : S2.videoRange;
            for (var N2, U2 = f2 ? f2.duration : c2 ? c2.duration : 0, B2 = this.bwEstimator.getEstimateTTFB() / 1e3, G2 = [], K2 = function() {
              var e4, o3 = v2[H2], c3 = H2 > d2;
              if (!o3)
                return 0;
              if (E2.useMediaCapabilities && !o3.supportedResult && !o3.supportedPromise) {
                var g3 = navigator.mediaCapabilities;
                "function" == typeof (null == g3 ? void 0 : g3.decodingInfo) && function(t4, e5, r4, i4, n3, a3) {
                  var s3 = t4.audioCodec ? t4.audioGroups : null, o4 = null == a3 ? void 0 : a3.audioCodec, l3 = null == a3 ? void 0 : a3.channels, u3 = l3 ? parseInt(l3) : o4 ? 1 / 0 : 2, h3 = null;
                  if (null != s3 && s3.length)
                    try {
                      h3 = 1 === s3.length && s3[0] ? e5.groups[s3[0]].channels : s3.reduce(function(t5, r5) {
                        if (r5) {
                          var i5 = e5.groups[r5];
                          if (!i5)
                            throw new Error("Audio track group " + r5 + " not found");
                          Object.keys(i5.channels).forEach(function(e6) {
                            t5[e6] = (t5[e6] || 0) + i5.channels[e6];
                          });
                        }
                        return t5;
                      }, { 2: 0 });
                    } catch (t5) {
                      return true;
                    }
                  return void 0 !== t4.videoCodec && (t4.width > 1920 && t4.height > 1088 || t4.height > 1920 && t4.width > 1088 || t4.frameRate > Math.max(i4, 30) || "SDR" !== t4.videoRange && t4.videoRange !== r4 || t4.bitrate > Math.max(n3, 8e6)) || !!h3 && y(u3) && Object.keys(h3).some(function(t5) {
                    return parseInt(t5) > u3;
                  });
                }(o3, I2, R2, k2, t3, b2) ? (o3.supportedPromise = Fr(o3, I2, g3), o3.supportedPromise.then(function(t4) {
                  if (l2.hls) {
                    o3.supportedResult = t4;
                    var e5 = l2.hls.levels, r4 = e5.indexOf(o3);
                    t4.error ? w.warn('[abr] MediaCapabilities decodingInfo error: "' + t4.error + '" for level ' + r4 + " " + JSON.stringify(t4)) : t4.supported || (w.warn("[abr] Unsupported MediaCapabilities decodingInfo result for level " + r4 + " " + JSON.stringify(t4)), r4 > -1 && e5.length > 1 && (w.log("[abr] Removing unsupported level " + r4), l2.hls.removeLevel(r4)));
                  }
                })) : o3.supportedResult = xr;
              }
              if (T2 && o3.codecSet !== T2 || R2 && o3.videoRange !== R2 || c3 && k2 > o3.frameRate || !c3 && k2 > 0 && k2 < o3.frameRate || o3.supportedResult && (null == (e4 = o3.supportedResult.decodingInfoResults) || !e4[0].smooth))
                return G2.push(H2), 0;
              var m3, D3 = o3.details, C3 = (f2 ? null == D3 ? void 0 : D3.partTarget : null == D3 ? void 0 : D3.averagetargetduration) || U2;
              m3 = c3 ? s2 * t3 : a2 * t3;
              var _3 = U2 && i3 >= 2 * U2 && 0 === n2 ? v2[H2].averageBitrate : v2[H2].maxBitrate, x3 = l2.getTimeToLoadFrag(B2, m3, _3 * C3, void 0 === D3);
              if (m3 >= _3 && (H2 === h2 || 0 === o3.loadError && 0 === o3.fragmentError) && (x3 <= B2 || !y(x3) || L2 && !l2.bitrateTestDelay || x3 < u2)) {
                var P3 = l2.forcedAutoLevel;
                return H2 === p2 || -1 !== P3 && P3 === p2 || (G2.length && w.trace("[abr] Skipped level(s) " + G2.join(",") + " of " + r3 + ' max with CODECS and VIDEO-RANGE:"' + v2[G2[0]].codecs + '" ' + v2[G2[0]].videoRange + '; not compatible with "' + S2.codecs + '" ' + R2), w.info("[abr] switch candidate:" + d2 + "->" + H2 + " adjustedbw(" + Math.round(m3) + ")-bitrate=" + Math.round(m3 - _3) + " ttfb:" + B2.toFixed(1) + " avgDuration:" + C3.toFixed(1) + " maxFetchDuration:" + u2.toFixed(1) + " fetchDuration:" + x3.toFixed(1) + " firstSelection:" + A2 + " codecSet:" + T2 + " videoRange:" + R2 + " hls.loadLevel:" + p2)), A2 && (l2.firstSelection = H2), { v: H2 };
              }
            }, H2 = r3; H2 >= e3; H2--)
              if (0 !== (N2 = K2()) && N2)
                return N2.v;
            return -1;
          }, s(t2, [{ key: "firstAutoLevel", get: function() {
            var t3 = this.hls, e3 = t3.maxAutoLevel, r3 = t3.minAutoLevel, i3 = this.getBwEstimate(), n2 = this.hls.config.maxStarvationDelay, a2 = this.findBestLevel(i3, r3, e3, 0, n2, 1, 1);
            if (a2 > -1)
              return a2;
            var s2 = this.hls.firstLevel, o2 = Math.min(Math.max(s2, r3), e3);
            return w.warn("[abr] Could not find best starting auto level. Defaulting to first in playlist " + s2 + " clamped to " + o2), o2;
          } }, { key: "forcedAutoLevel", get: function() {
            return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
          } }, { key: "nextAutoLevel", get: function() {
            var t3 = this.forcedAutoLevel, e3 = this.bwEstimator.canEstimate(), r3 = this.lastLoadedFragLevel > -1;
            if (!(-1 === t3 || e3 && r3 && this.nextAutoLevelKey !== this.getAutoLevelKey()))
              return t3;
            var i3 = e3 && r3 ? this.getNextABRAutoLevel() : this.firstAutoLevel;
            if (-1 !== t3) {
              var n2 = this.hls.levels;
              if (n2.length > Math.max(t3, i3) && n2[t3].loadError <= n2[i3].loadError)
                return t3;
            }
            return this._nextAutoLevel = i3, this.nextAutoLevelKey = this.getAutoLevelKey(), i3;
          }, set: function(t3) {
            var e3 = this.hls, r3 = e3.maxAutoLevel, i3 = e3.minAutoLevel, n2 = Math.min(Math.max(t3, i3), r3);
            this._nextAutoLevel !== n2 && (this.nextAutoLevelKey = "", this._nextAutoLevel = n2);
          } }]), t2;
        }(), Hr = function() {
          function t2() {
            this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
            this.onHandlerDestroying(), this.onHandlerDestroyed();
          }, e2.onHandlerDestroying = function() {
            this.clearNextTick(), this.clearInterval();
          }, e2.onHandlerDestroyed = function() {
          }, e2.hasInterval = function() {
            return !!this._tickInterval;
          }, e2.hasNextTick = function() {
            return !!this._tickTimer;
          }, e2.setInterval = function(t3) {
            return !this._tickInterval && (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, t3), true);
          }, e2.clearInterval = function() {
            return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, true);
          }, e2.clearNextTick = function() {
            return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, true);
          }, e2.tick = function() {
            this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
          }, e2.tickImmediate = function() {
            this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
          }, e2.doTick = function() {
          }, t2;
        }(), Vr = "NOT_LOADED", Yr = "APPENDING", Wr = "PARTIAL", jr = "OK", qr = function() {
          function t2(t3) {
            this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = false, this.hls = t3, this._registerListeners();
          }
          var e2 = t2.prototype;
          return e2._registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.BUFFER_APPENDED, this.onBufferAppended, this), t3.on(S.FRAG_BUFFERED, this.onFragBuffered, this), t3.on(S.FRAG_LOADED, this.onFragLoaded, this);
          }, e2._unregisterListeners = function() {
            var t3 = this.hls;
            t3.off(S.BUFFER_APPENDED, this.onBufferAppended, this), t3.off(S.FRAG_BUFFERED, this.onFragBuffered, this), t3.off(S.FRAG_LOADED, this.onFragLoaded, this);
          }, e2.destroy = function() {
            this._unregisterListeners(), this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null;
          }, e2.getAppendedFrag = function(t3, e3) {
            var r3 = this.activePartLists[e3];
            if (r3)
              for (var i3 = r3.length; i3--; ) {
                var n2 = r3[i3];
                if (!n2)
                  break;
                var a2 = n2.end;
                if (n2.start <= t3 && null !== a2 && t3 <= a2)
                  return n2;
              }
            return this.getBufferedFrag(t3, e3);
          }, e2.getBufferedFrag = function(t3, e3) {
            for (var r3 = this.fragments, i3 = Object.keys(r3), n2 = i3.length; n2--; ) {
              var a2 = r3[i3[n2]];
              if ((null == a2 ? void 0 : a2.body.type) === e3 && a2.buffered) {
                var s2 = a2.body;
                if (s2.start <= t3 && t3 <= s2.end)
                  return s2;
              }
            }
            return null;
          }, e2.detectEvictedFragments = function(t3, e3, r3, i3) {
            var n2 = this;
            this.timeRanges && (this.timeRanges[t3] = e3);
            var a2 = (null == i3 ? void 0 : i3.fragment.sn) || -1;
            Object.keys(this.fragments).forEach(function(i4) {
              var s2 = n2.fragments[i4];
              if (s2 && !(a2 >= s2.body.sn))
                if (s2.buffered || s2.loaded) {
                  var o2 = s2.range[t3];
                  o2 && o2.time.some(function(t4) {
                    var r4 = !n2.isTimeBuffered(t4.startPTS, t4.endPTS, e3);
                    return r4 && n2.removeFragment(s2.body), r4;
                  });
                } else
                  s2.body.type === r3 && n2.removeFragment(s2.body);
            });
          }, e2.detectPartialFragments = function(t3) {
            var e3 = this, r3 = this.timeRanges, i3 = t3.frag, n2 = t3.part;
            if (r3 && "initSegment" !== i3.sn) {
              var a2 = zr(i3), s2 = this.fragments[a2];
              if (!(!s2 || s2.buffered && i3.gap)) {
                var o2 = !i3.relurl;
                Object.keys(r3).forEach(function(t4) {
                  var a3 = i3.elementaryStreams[t4];
                  if (a3) {
                    var l2 = r3[t4], u2 = o2 || true === a3.partial;
                    s2.range[t4] = e3.getBufferedTimes(i3, n2, u2, l2);
                  }
                }), s2.loaded = null, Object.keys(s2.range).length ? (s2.buffered = true, (s2.body.endList = i3.endList || s2.body.endList) && (this.endListFragments[s2.body.type] = s2), Xr(s2) || this.removeParts(i3.sn - 1, i3.type)) : this.removeFragment(s2.body);
              }
            }
          }, e2.removeParts = function(t3, e3) {
            var r3 = this.activePartLists[e3];
            r3 && (this.activePartLists[e3] = r3.filter(function(e4) {
              return e4.fragment.sn >= t3;
            }));
          }, e2.fragBuffered = function(t3, e3) {
            var r3 = zr(t3), i3 = this.fragments[r3];
            !i3 && e3 && (i3 = this.fragments[r3] = { body: t3, appendedPTS: null, loaded: null, buffered: false, range: /* @__PURE__ */ Object.create(null) }, t3.gap && (this.hasGaps = true)), i3 && (i3.loaded = null, i3.buffered = true);
          }, e2.getBufferedTimes = function(t3, e3, r3, i3) {
            for (var n2 = { time: [], partial: r3 }, a2 = t3.start, s2 = t3.end, o2 = t3.minEndPTS || s2, l2 = t3.maxStartPTS || a2, u2 = 0; u2 < i3.length; u2++) {
              var h2 = i3.start(u2) - this.bufferPadding, d2 = i3.end(u2) + this.bufferPadding;
              if (l2 >= h2 && o2 <= d2) {
                n2.time.push({ startPTS: Math.max(a2, i3.start(u2)), endPTS: Math.min(s2, i3.end(u2)) });
                break;
              }
              if (a2 < d2 && s2 > h2) {
                var c2 = Math.max(a2, i3.start(u2)), f2 = Math.min(s2, i3.end(u2));
                f2 > c2 && (n2.partial = true, n2.time.push({ startPTS: c2, endPTS: f2 }));
              } else if (s2 <= h2)
                break;
            }
            return n2;
          }, e2.getPartialFragment = function(t3) {
            var e3, r3, i3, n2 = null, a2 = 0, s2 = this.bufferPadding, o2 = this.fragments;
            return Object.keys(o2).forEach(function(l2) {
              var u2 = o2[l2];
              u2 && Xr(u2) && (r3 = u2.body.start - s2, i3 = u2.body.end + s2, t3 >= r3 && t3 <= i3 && (e3 = Math.min(t3 - r3, i3 - t3), a2 <= e3 && (n2 = u2.body, a2 = e3)));
            }), n2;
          }, e2.isEndListAppended = function(t3) {
            var e3 = this.endListFragments[t3];
            return void 0 !== e3 && (e3.buffered || Xr(e3));
          }, e2.getState = function(t3) {
            var e3 = zr(t3), r3 = this.fragments[e3];
            return r3 ? r3.buffered ? Xr(r3) ? Wr : jr : Yr : Vr;
          }, e2.isTimeBuffered = function(t3, e3, r3) {
            for (var i3, n2, a2 = 0; a2 < r3.length; a2++) {
              if (i3 = r3.start(a2) - this.bufferPadding, n2 = r3.end(a2) + this.bufferPadding, t3 >= i3 && e3 <= n2)
                return true;
              if (e3 <= i3)
                return false;
            }
            return false;
          }, e2.onFragLoaded = function(t3, e3) {
            var r3 = e3.frag, i3 = e3.part;
            if ("initSegment" !== r3.sn && !r3.bitrateTest) {
              var n2 = i3 ? null : e3, a2 = zr(r3);
              this.fragments[a2] = { body: r3, appendedPTS: null, loaded: n2, buffered: false, range: /* @__PURE__ */ Object.create(null) };
            }
          }, e2.onBufferAppended = function(t3, e3) {
            var r3 = this, i3 = e3.frag, n2 = e3.part, a2 = e3.timeRanges;
            if ("initSegment" !== i3.sn) {
              var s2 = i3.type;
              if (n2) {
                var o2 = this.activePartLists[s2];
                o2 || (this.activePartLists[s2] = o2 = []), o2.push(n2);
              }
              this.timeRanges = a2, Object.keys(a2).forEach(function(t4) {
                var e4 = a2[t4];
                r3.detectEvictedFragments(t4, e4, s2, n2);
              });
            }
          }, e2.onFragBuffered = function(t3, e3) {
            this.detectPartialFragments(e3);
          }, e2.hasFragment = function(t3) {
            var e3 = zr(t3);
            return !!this.fragments[e3];
          }, e2.hasParts = function(t3) {
            var e3;
            return !(null == (e3 = this.activePartLists[t3]) || !e3.length);
          }, e2.removeFragmentsInRange = function(t3, e3, r3, i3, n2) {
            var a2 = this;
            i3 && !this.hasGaps || Object.keys(this.fragments).forEach(function(s2) {
              var o2 = a2.fragments[s2];
              if (o2) {
                var l2 = o2.body;
                l2.type !== r3 || i3 && !l2.gap || l2.start < e3 && l2.end > t3 && (o2.buffered || n2) && a2.removeFragment(l2);
              }
            });
          }, e2.removeFragment = function(t3) {
            var e3 = zr(t3);
            t3.stats.loaded = 0, t3.clearElementaryStreamInfo();
            var r3 = this.activePartLists[t3.type];
            if (r3) {
              var i3 = t3.sn;
              this.activePartLists[t3.type] = r3.filter(function(t4) {
                return t4.fragment.sn !== i3;
              });
            }
            delete this.fragments[e3], t3.endList && delete this.endListFragments[t3.type];
          }, e2.removeAllFragments = function() {
            this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = false;
          }, t2;
        }();
        function Xr(t2) {
          var e2, r3, i3;
          return t2.buffered && (t2.body.gap || (null == (e2 = t2.range.video) ? void 0 : e2.partial) || (null == (r3 = t2.range.audio) ? void 0 : r3.partial) || (null == (i3 = t2.range.audiovideo) ? void 0 : i3.partial));
        }
        function zr(t2) {
          return t2.type + "_" + t2.level + "_" + t2.sn;
        }
        var Qr = { length: 0, start: function() {
          return 0;
        }, end: function() {
          return 0;
        } }, Jr = function() {
          function t2() {
          }
          return t2.isBuffered = function(e2, r3) {
            try {
              if (e2) {
                for (var i3 = t2.getBuffered(e2), n2 = 0; n2 < i3.length; n2++)
                  if (r3 >= i3.start(n2) && r3 <= i3.end(n2))
                    return true;
              }
            } catch (t3) {
            }
            return false;
          }, t2.bufferInfo = function(e2, r3, i3) {
            try {
              if (e2) {
                var n2, a2 = t2.getBuffered(e2), s2 = [];
                for (n2 = 0; n2 < a2.length; n2++)
                  s2.push({ start: a2.start(n2), end: a2.end(n2) });
                return this.bufferedInfo(s2, r3, i3);
              }
            } catch (t3) {
            }
            return { len: 0, start: r3, end: r3, nextStart: void 0 };
          }, t2.bufferedInfo = function(t3, e2, r3) {
            e2 = Math.max(0, e2), t3.sort(function(t4, e3) {
              var r4 = t4.start - e3.start;
              return r4 || e3.end - t4.end;
            });
            var i3 = [];
            if (r3)
              for (var n2 = 0; n2 < t3.length; n2++) {
                var a2 = i3.length;
                if (a2) {
                  var s2 = i3[a2 - 1].end;
                  t3[n2].start - s2 < r3 ? t3[n2].end > s2 && (i3[a2 - 1].end = t3[n2].end) : i3.push(t3[n2]);
                } else
                  i3.push(t3[n2]);
              }
            else
              i3 = t3;
            for (var o2, l2 = 0, u2 = e2, h2 = e2, d2 = 0; d2 < i3.length; d2++) {
              var c2 = i3[d2].start, f2 = i3[d2].end;
              if (e2 + r3 >= c2 && e2 < f2)
                u2 = c2, l2 = (h2 = f2) - e2;
              else if (e2 + r3 < c2) {
                o2 = c2;
                break;
              }
            }
            return { len: l2, start: u2 || 0, end: h2 || 0, nextStart: o2 };
          }, t2.getBuffered = function(t3) {
            try {
              return t3.buffered;
            } catch (t4) {
              return w.log("failed to get media.buffered", t4), Qr;
            }
          }, t2;
        }(), $r = function(t2, e2, r3, i3, n2, a2) {
          void 0 === i3 && (i3 = 0), void 0 === n2 && (n2 = -1), void 0 === a2 && (a2 = false), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = { start: 0, executeStart: 0, executeEnd: 0, end: 0 }, this.buffering = { audio: { start: 0, executeStart: 0, executeEnd: 0, end: 0 }, video: { start: 0, executeStart: 0, executeEnd: 0, end: 0 }, audiovideo: { start: 0, executeStart: 0, executeEnd: 0, end: 0 } }, this.level = t2, this.sn = e2, this.id = r3, this.size = i3, this.part = n2, this.partial = a2;
        };
        function Zr(t2, e2) {
          for (var r3 = 0, i3 = t2.length; r3 < i3; r3++) {
            var n2;
            if ((null == (n2 = t2[r3]) ? void 0 : n2.cc) === e2)
              return t2[r3];
          }
          return null;
        }
        function ti(t2, e2) {
          if (t2) {
            var r3 = t2.start + e2;
            t2.start = t2.startPTS = r3, t2.endPTS = r3 + t2.duration;
          }
        }
        function ei(t2, e2) {
          for (var r3 = e2.fragments, i3 = 0, n2 = r3.length; i3 < n2; i3++)
            ti(r3[i3], t2);
          e2.fragmentHint && ti(e2.fragmentHint, t2), e2.alignedSliding = true;
        }
        function ri(t2, e2, r3) {
          e2 && (function(t3, e3, r4) {
            if (function(t4, e4, r5) {
              return !(!e4 || !(r5.endCC > r5.startCC || t4 && t4.cc < r5.startCC));
            }(t3, r4, e3)) {
              var i3 = function(t4, e4) {
                var r5 = t4.fragments, i4 = e4.fragments;
                if (i4.length && r5.length) {
                  var n2 = Zr(r5, i4[0].cc);
                  if (n2 && (!n2 || n2.startPTS))
                    return n2;
                  w.log("No frag in previous level to align on");
                } else
                  w.log("No fragments to align");
              }(r4, e3);
              i3 && y(i3.start) && (w.log("Adjusting PTS using last level due to CC increase within current level " + e3.url), ei(i3.start, e3));
            }
          }(t2, r3, e2), !r3.alignedSliding && e2 && ii(r3, e2), r3.alignedSliding || !e2 || r3.skippedSegments || or(e2, r3));
        }
        function ii(t2, e2) {
          if (t2.hasProgramDateTime && e2.hasProgramDateTime) {
            var r3 = t2.fragments, i3 = e2.fragments;
            if (r3.length && i3.length) {
              var n2, a2, s2 = Math.min(e2.endCC, t2.endCC);
              e2.startCC < s2 && t2.startCC < s2 && (n2 = Zr(i3, s2), a2 = Zr(r3, s2)), n2 && a2 || (a2 = Zr(r3, (n2 = i3[Math.floor(i3.length / 2)]).cc) || r3[Math.floor(r3.length / 2)]);
              var o2 = n2.programDateTime, l2 = a2.programDateTime;
              o2 && l2 && ei((l2 - o2) / 1e3 - (a2.start - n2.start), t2);
            }
          }
        }
        var ni = Math.pow(2, 17), ai = function() {
          function t2(t3) {
            this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t3;
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
            this.loader && (this.loader.destroy(), this.loader = null);
          }, e2.abort = function() {
            this.loader && this.loader.abort();
          }, e2.load = function(t3, e3) {
            var r3 = this, n2 = t3.url;
            if (!n2)
              return Promise.reject(new li({ type: L.NETWORK_ERROR, details: A.FRAG_LOAD_ERROR, fatal: false, frag: t3, error: new Error("Fragment does not have a " + (n2 ? "part list" : "url")), networkDetails: null }));
            this.abort();
            var a2 = this.config, s2 = a2.fLoader, o2 = a2.loader;
            return new Promise(function(l2, u2) {
              if (r3.loader && r3.loader.destroy(), t3.gap) {
                if (t3.tagList.some(function(t4) {
                  return "GAP" === t4[0];
                }))
                  return void u2(oi(t3));
                t3.gap = false;
              }
              var h2 = r3.loader = t3.loader = s2 ? new s2(a2) : new o2(a2), d2 = si(t3), c2 = vr(a2.fragLoadPolicy.default), f2 = { loadPolicy: c2, timeout: c2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0, highWaterMark: "initSegment" === t3.sn ? 1 / 0 : ni };
              t3.stats = h2.stats, h2.load(d2, f2, { onSuccess: function(e4, i3, n3, a3) {
                r3.resetLoader(t3, h2);
                var s3 = e4.data;
                n3.resetIV && t3.decryptdata && (t3.decryptdata.iv = new Uint8Array(s3.slice(0, 16)), s3 = s3.slice(16)), l2({ frag: t3, part: null, payload: s3, networkDetails: a3 });
              }, onError: function(e4, a3, s3, o3) {
                r3.resetLoader(t3, h2), u2(new li({ type: L.NETWORK_ERROR, details: A.FRAG_LOAD_ERROR, fatal: false, frag: t3, response: i2({ url: n2, data: void 0 }, e4), error: new Error("HTTP Error " + e4.code + " " + e4.text), networkDetails: s3, stats: o3 }));
              }, onAbort: function(e4, i3, n3) {
                r3.resetLoader(t3, h2), u2(new li({ type: L.NETWORK_ERROR, details: A.INTERNAL_ABORTED, fatal: false, frag: t3, error: new Error("Aborted"), networkDetails: n3, stats: e4 }));
              }, onTimeout: function(e4, i3, n3) {
                r3.resetLoader(t3, h2), u2(new li({ type: L.NETWORK_ERROR, details: A.FRAG_LOAD_TIMEOUT, fatal: false, frag: t3, error: new Error("Timeout after " + f2.timeout + "ms"), networkDetails: n3, stats: e4 }));
              }, onProgress: function(r4, i3, n3, a3) {
                e3 && e3({ frag: t3, part: null, payload: n3, networkDetails: a3 });
              } });
            });
          }, e2.loadPart = function(t3, e3, r3) {
            var n2 = this;
            this.abort();
            var a2 = this.config, s2 = a2.fLoader, o2 = a2.loader;
            return new Promise(function(l2, u2) {
              if (n2.loader && n2.loader.destroy(), t3.gap || e3.gap)
                u2(oi(t3, e3));
              else {
                var h2 = n2.loader = t3.loader = s2 ? new s2(a2) : new o2(a2), d2 = si(t3, e3), c2 = vr(a2.fragLoadPolicy.default), f2 = { loadPolicy: c2, timeout: c2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0, highWaterMark: ni };
                e3.stats = h2.stats, h2.load(d2, f2, { onSuccess: function(i3, a3, s3, o3) {
                  n2.resetLoader(t3, h2), n2.updateStatsFromPart(t3, e3);
                  var u3 = { frag: t3, part: e3, payload: i3.data, networkDetails: o3 };
                  r3(u3), l2(u3);
                }, onError: function(r4, a3, s3, o3) {
                  n2.resetLoader(t3, h2), u2(new li({ type: L.NETWORK_ERROR, details: A.FRAG_LOAD_ERROR, fatal: false, frag: t3, part: e3, response: i2({ url: d2.url, data: void 0 }, r4), error: new Error("HTTP Error " + r4.code + " " + r4.text), networkDetails: s3, stats: o3 }));
                }, onAbort: function(r4, i3, a3) {
                  t3.stats.aborted = e3.stats.aborted, n2.resetLoader(t3, h2), u2(new li({ type: L.NETWORK_ERROR, details: A.INTERNAL_ABORTED, fatal: false, frag: t3, part: e3, error: new Error("Aborted"), networkDetails: a3, stats: r4 }));
                }, onTimeout: function(r4, i3, a3) {
                  n2.resetLoader(t3, h2), u2(new li({ type: L.NETWORK_ERROR, details: A.FRAG_LOAD_TIMEOUT, fatal: false, frag: t3, part: e3, error: new Error("Timeout after " + f2.timeout + "ms"), networkDetails: a3, stats: r4 }));
                } });
              }
            });
          }, e2.updateStatsFromPart = function(t3, e3) {
            var r3 = t3.stats, i3 = e3.stats, n2 = i3.total;
            if (r3.loaded += i3.loaded, n2) {
              var a2 = Math.round(t3.duration / e3.duration), s2 = Math.min(Math.round(r3.loaded / n2), a2), o2 = (a2 - s2) * Math.round(r3.loaded / s2);
              r3.total = r3.loaded + o2;
            } else
              r3.total = Math.max(r3.loaded, r3.total);
            var l2 = r3.loading, u2 = i3.loading;
            l2.start ? l2.first += u2.first - u2.start : (l2.start = u2.start, l2.first = u2.first), l2.end = u2.end;
          }, e2.resetLoader = function(t3, e3) {
            t3.loader = null, this.loader === e3 && (self.clearTimeout(this.partLoadTimeout), this.loader = null), e3.destroy();
          }, t2;
        }();
        function si(t2, e2) {
          void 0 === e2 && (e2 = null);
          var r3 = e2 || t2, i3 = { frag: t2, part: e2, responseType: "arraybuffer", url: r3.url, headers: {}, rangeStart: 0, rangeEnd: 0 }, n2 = r3.byteRangeStartOffset, a2 = r3.byteRangeEndOffset;
          if (y(n2) && y(a2)) {
            var s2, o2 = n2, l2 = a2;
            if ("initSegment" === t2.sn && "AES-128" === (null == (s2 = t2.decryptdata) ? void 0 : s2.method)) {
              var u2 = a2 - n2;
              u2 % 16 && (l2 = a2 + (16 - u2 % 16)), 0 !== n2 && (i3.resetIV = true, o2 = n2 - 16);
            }
            i3.rangeStart = o2, i3.rangeEnd = l2;
          }
          return i3;
        }
        function oi(t2, e2) {
          var r3 = new Error("GAP " + (t2.gap ? "tag" : "attribute") + " found"), i3 = { type: L.MEDIA_ERROR, details: A.FRAG_GAP, fatal: false, frag: t2, error: r3, networkDetails: null };
          return e2 && (i3.part = e2), (e2 || t2).stats.aborted = true, new li(i3);
        }
        var li = function(t2) {
          function e2(e3) {
            var r3;
            return (r3 = t2.call(this, e3.error.message) || this).data = void 0, r3.data = e3, r3;
          }
          return l(e2, t2), e2;
        }(c(Error)), ui = function() {
          function t2(t3, e2) {
            this.subtle = void 0, this.aesIV = void 0, this.subtle = t3, this.aesIV = e2;
          }
          return t2.prototype.decrypt = function(t3, e2) {
            return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, e2, t3);
          }, t2;
        }(), hi = function() {
          function t2(t3, e2) {
            this.subtle = void 0, this.key = void 0, this.subtle = t3, this.key = e2;
          }
          return t2.prototype.expandKey = function() {
            return this.subtle.importKey("raw", this.key, { name: "AES-CBC" }, false, ["encrypt", "decrypt"]);
          }, t2;
        }(), di = function() {
          function t2() {
            this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
          }
          var e2 = t2.prototype;
          return e2.uint8ArrayToUint32Array_ = function(t3) {
            for (var e3 = new DataView(t3), r3 = new Uint32Array(4), i3 = 0; i3 < 4; i3++)
              r3[i3] = e3.getUint32(4 * i3);
            return r3;
          }, e2.initTable = function() {
            var t3 = this.sBox, e3 = this.invSBox, r3 = this.subMix, i3 = r3[0], n2 = r3[1], a2 = r3[2], s2 = r3[3], o2 = this.invSubMix, l2 = o2[0], u2 = o2[1], h2 = o2[2], d2 = o2[3], c2 = new Uint32Array(256), f2 = 0, g2 = 0, v2 = 0;
            for (v2 = 0; v2 < 256; v2++)
              c2[v2] = v2 < 128 ? v2 << 1 : v2 << 1 ^ 283;
            for (v2 = 0; v2 < 256; v2++) {
              var m2 = g2 ^ g2 << 1 ^ g2 << 2 ^ g2 << 3 ^ g2 << 4;
              m2 = m2 >>> 8 ^ 255 & m2 ^ 99, t3[f2] = m2, e3[m2] = f2;
              var p2 = c2[f2], y2 = c2[p2], E2 = c2[y2], T2 = 257 * c2[m2] ^ 16843008 * m2;
              i3[f2] = T2 << 24 | T2 >>> 8, n2[f2] = T2 << 16 | T2 >>> 16, a2[f2] = T2 << 8 | T2 >>> 24, s2[f2] = T2, T2 = 16843009 * E2 ^ 65537 * y2 ^ 257 * p2 ^ 16843008 * f2, l2[m2] = T2 << 24 | T2 >>> 8, u2[m2] = T2 << 16 | T2 >>> 16, h2[m2] = T2 << 8 | T2 >>> 24, d2[m2] = T2, f2 ? (f2 = p2 ^ c2[c2[c2[E2 ^ p2]]], g2 ^= c2[c2[g2]]) : f2 = g2 = 1;
            }
          }, e2.expandKey = function(t3) {
            for (var e3 = this.uint8ArrayToUint32Array_(t3), r3 = true, i3 = 0; i3 < e3.length && r3; )
              r3 = e3[i3] === this.key[i3], i3++;
            if (!r3) {
              this.key = e3;
              var n2 = this.keySize = e3.length;
              if (4 !== n2 && 6 !== n2 && 8 !== n2)
                throw new Error("Invalid aes key size=" + n2);
              var a2, s2, o2, l2, u2 = this.ksRows = 4 * (n2 + 6 + 1), h2 = this.keySchedule = new Uint32Array(u2), d2 = this.invKeySchedule = new Uint32Array(u2), c2 = this.sBox, f2 = this.rcon, g2 = this.invSubMix, v2 = g2[0], m2 = g2[1], p2 = g2[2], y2 = g2[3];
              for (a2 = 0; a2 < u2; a2++)
                a2 < n2 ? o2 = h2[a2] = e3[a2] : (l2 = o2, a2 % n2 == 0 ? (l2 = c2[(l2 = l2 << 8 | l2 >>> 24) >>> 24] << 24 | c2[l2 >>> 16 & 255] << 16 | c2[l2 >>> 8 & 255] << 8 | c2[255 & l2], l2 ^= f2[a2 / n2 | 0] << 24) : n2 > 6 && a2 % n2 == 4 && (l2 = c2[l2 >>> 24] << 24 | c2[l2 >>> 16 & 255] << 16 | c2[l2 >>> 8 & 255] << 8 | c2[255 & l2]), h2[a2] = o2 = (h2[a2 - n2] ^ l2) >>> 0);
              for (s2 = 0; s2 < u2; s2++)
                a2 = u2 - s2, l2 = 3 & s2 ? h2[a2] : h2[a2 - 4], d2[s2] = s2 < 4 || a2 <= 4 ? l2 : v2[c2[l2 >>> 24]] ^ m2[c2[l2 >>> 16 & 255]] ^ p2[c2[l2 >>> 8 & 255]] ^ y2[c2[255 & l2]], d2[s2] = d2[s2] >>> 0;
            }
          }, e2.networkToHostOrderSwap = function(t3) {
            return t3 << 24 | (65280 & t3) << 8 | (16711680 & t3) >> 8 | t3 >>> 24;
          }, e2.decrypt = function(t3, e3, r3) {
            for (var i3, n2, a2, s2, o2, l2, u2, h2, d2, c2, f2, g2, v2, m2, p2 = this.keySize + 6, y2 = this.invKeySchedule, E2 = this.invSBox, T2 = this.invSubMix, S2 = T2[0], L2 = T2[1], A2 = T2[2], R2 = T2[3], k2 = this.uint8ArrayToUint32Array_(r3), b2 = k2[0], D2 = k2[1], I2 = k2[2], w2 = k2[3], C2 = new Int32Array(t3), _2 = new Int32Array(C2.length), x2 = this.networkToHostOrderSwap; e3 < C2.length; ) {
              for (d2 = x2(C2[e3]), c2 = x2(C2[e3 + 1]), f2 = x2(C2[e3 + 2]), g2 = x2(C2[e3 + 3]), o2 = d2 ^ y2[0], l2 = g2 ^ y2[1], u2 = f2 ^ y2[2], h2 = c2 ^ y2[3], v2 = 4, m2 = 1; m2 < p2; m2++)
                i3 = S2[o2 >>> 24] ^ L2[l2 >> 16 & 255] ^ A2[u2 >> 8 & 255] ^ R2[255 & h2] ^ y2[v2], n2 = S2[l2 >>> 24] ^ L2[u2 >> 16 & 255] ^ A2[h2 >> 8 & 255] ^ R2[255 & o2] ^ y2[v2 + 1], a2 = S2[u2 >>> 24] ^ L2[h2 >> 16 & 255] ^ A2[o2 >> 8 & 255] ^ R2[255 & l2] ^ y2[v2 + 2], s2 = S2[h2 >>> 24] ^ L2[o2 >> 16 & 255] ^ A2[l2 >> 8 & 255] ^ R2[255 & u2] ^ y2[v2 + 3], o2 = i3, l2 = n2, u2 = a2, h2 = s2, v2 += 4;
              i3 = E2[o2 >>> 24] << 24 ^ E2[l2 >> 16 & 255] << 16 ^ E2[u2 >> 8 & 255] << 8 ^ E2[255 & h2] ^ y2[v2], n2 = E2[l2 >>> 24] << 24 ^ E2[u2 >> 16 & 255] << 16 ^ E2[h2 >> 8 & 255] << 8 ^ E2[255 & o2] ^ y2[v2 + 1], a2 = E2[u2 >>> 24] << 24 ^ E2[h2 >> 16 & 255] << 16 ^ E2[o2 >> 8 & 255] << 8 ^ E2[255 & l2] ^ y2[v2 + 2], s2 = E2[h2 >>> 24] << 24 ^ E2[o2 >> 16 & 255] << 16 ^ E2[l2 >> 8 & 255] << 8 ^ E2[255 & u2] ^ y2[v2 + 3], _2[e3] = x2(i3 ^ b2), _2[e3 + 1] = x2(s2 ^ D2), _2[e3 + 2] = x2(a2 ^ I2), _2[e3 + 3] = x2(n2 ^ w2), b2 = d2, D2 = c2, I2 = f2, w2 = g2, e3 += 4;
            }
            return _2.buffer;
          }, t2;
        }(), ci = function() {
          function t2(t3, e3) {
            var r3 = (void 0 === e3 ? {} : e3).removePKCS7Padding, i3 = void 0 === r3 || r3;
            if (this.logEnabled = true, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = t3.enableSoftwareAES, this.removePKCS7Padding = i3, i3)
              try {
                var n2 = self.crypto;
                n2 && (this.subtle = n2.subtle || n2.webkitSubtle);
              } catch (t4) {
              }
            null === this.subtle && (this.useSoftware = true);
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
            this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
          }, e2.isSync = function() {
            return this.useSoftware;
          }, e2.flush = function() {
            var t3 = this.currentResult, e3 = this.remainderData;
            if (!t3 || e3)
              return this.reset(), null;
            var r3, i3, n2, a2 = new Uint8Array(t3);
            return this.reset(), this.removePKCS7Padding ? (i3 = (r3 = a2).byteLength, (n2 = i3 && new DataView(r3.buffer).getUint8(i3 - 1)) ? nt(r3, 0, i3 - n2) : r3) : a2;
          }, e2.reset = function() {
            this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
          }, e2.decrypt = function(t3, e3, r3) {
            var i3 = this;
            return this.useSoftware ? new Promise(function(n2, a2) {
              i3.softwareDecrypt(new Uint8Array(t3), e3, r3);
              var s2 = i3.flush();
              s2 ? n2(s2.buffer) : a2(new Error("[softwareDecrypt] Failed to decrypt data"));
            }) : this.webCryptoDecrypt(new Uint8Array(t3), e3, r3);
          }, e2.softwareDecrypt = function(t3, e3, r3) {
            var i3 = this.currentIV, n2 = this.currentResult, a2 = this.remainderData;
            this.logOnce("JS AES decrypt"), a2 && (t3 = Kt(a2, t3), this.remainderData = null);
            var s2 = this.getValidChunk(t3);
            if (!s2.length)
              return null;
            i3 && (r3 = i3);
            var o2 = this.softwareDecrypter;
            o2 || (o2 = this.softwareDecrypter = new di()), o2.expandKey(e3);
            var l2 = n2;
            return this.currentResult = o2.decrypt(s2.buffer, 0, r3), this.currentIV = nt(s2, -16).buffer, l2 || null;
          }, e2.webCryptoDecrypt = function(t3, e3, r3) {
            var i3 = this, n2 = this.subtle;
            return this.key === e3 && this.fastAesKey || (this.key = e3, this.fastAesKey = new hi(n2, e3)), this.fastAesKey.expandKey().then(function(e4) {
              return n2 ? (i3.logOnce("WebCrypto AES decrypt"), new ui(n2, new Uint8Array(r3)).decrypt(t3.buffer, e4)) : Promise.reject(new Error("web crypto not initialized"));
            }).catch(function(n3) {
              return w.warn("[decrypter]: WebCrypto Error, disable WebCrypto API, " + n3.name + ": " + n3.message), i3.onWebCryptoError(t3, e3, r3);
            });
          }, e2.onWebCryptoError = function(t3, e3, r3) {
            this.useSoftware = true, this.logEnabled = true, this.softwareDecrypt(t3, e3, r3);
            var i3 = this.flush();
            if (i3)
              return i3.buffer;
            throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data");
          }, e2.getValidChunk = function(t3) {
            var e3 = t3, r3 = t3.length - t3.length % 16;
            return r3 !== t3.length && (e3 = nt(t3, 0, r3), this.remainderData = nt(t3, r3)), e3;
          }, e2.logOnce = function(t3) {
            this.logEnabled && (w.log("[decrypter]: " + t3), this.logEnabled = false);
          }, t2;
        }(), fi = function(t2) {
          for (var e2 = "", r3 = t2.length, i3 = 0; i3 < r3; i3++)
            e2 += "[" + t2.start(i3).toFixed(3) + "-" + t2.end(i3).toFixed(3) + "]";
          return e2;
        }, gi = "STOPPED", vi = "IDLE", mi = "KEY_LOADING", pi = "FRAG_LOADING", yi = "FRAG_LOADING_WAITING_RETRY", Ei = "WAITING_TRACK", Ti = "PARSING", Si = "PARSED", Li = "ENDED", Ai = "ERROR", Ri = "WAITING_INIT_PTS", ki = "WAITING_LEVEL", bi = function(t2) {
          function e2(e3, r4, i3, n2, a2) {
            var s2;
            return (s2 = t2.call(this) || this).hls = void 0, s2.fragPrevious = null, s2.fragCurrent = null, s2.fragmentTracker = void 0, s2.transmuxer = null, s2._state = gi, s2.playlistType = void 0, s2.media = null, s2.mediaBuffer = null, s2.config = void 0, s2.bitrateTest = false, s2.lastCurrentTime = 0, s2.nextLoadPosition = 0, s2.startPosition = 0, s2.startTimeOffset = null, s2.loadedmetadata = false, s2.retryDate = 0, s2.levels = null, s2.fragmentLoader = void 0, s2.keyLoader = void 0, s2.levelLastLoaded = null, s2.startFragRequested = false, s2.decrypter = void 0, s2.initPTS = [], s2.onvseeking = null, s2.onvended = null, s2.logPrefix = "", s2.log = void 0, s2.warn = void 0, s2.playlistType = a2, s2.logPrefix = n2, s2.log = w.log.bind(w, n2 + ":"), s2.warn = w.warn.bind(w, n2 + ":"), s2.hls = e3, s2.fragmentLoader = new ai(e3.config), s2.keyLoader = i3, s2.fragmentTracker = r4, s2.config = e3.config, s2.decrypter = new ci(e3.config), e3.on(S.MANIFEST_LOADED, s2.onManifestLoaded, function(t3) {
              if (void 0 === t3)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t3;
            }(s2)), s2;
          }
          l(e2, t2);
          var r3 = e2.prototype;
          return r3.doTick = function() {
            this.onTickEnd();
          }, r3.onTickEnd = function() {
          }, r3.startLoad = function(t3) {
          }, r3.stopLoad = function() {
            this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
            var t3 = this.fragCurrent;
            null != t3 && t3.loader && (t3.abortRequests(), this.fragmentTracker.removeFragment(t3)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = gi;
          }, r3._streamEnded = function(t3, e3) {
            if (e3.live || t3.nextStart || !t3.end || !this.media)
              return false;
            var r4 = e3.partList;
            if (null != r4 && r4.length) {
              var i3 = r4[r4.length - 1];
              return Jr.isBuffered(this.media, i3.start + i3.duration / 2);
            }
            var n2 = e3.fragments[e3.fragments.length - 1].type;
            return this.fragmentTracker.isEndListAppended(n2);
          }, r3.getLevelDetails = function() {
            var t3;
            if (this.levels && null !== this.levelLastLoaded)
              return null == (t3 = this.levelLastLoaded) ? void 0 : t3.details;
          }, r3.onMediaAttached = function(t3, e3) {
            var r4 = this.media = this.mediaBuffer = e3.media;
            this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), r4.addEventListener("seeking", this.onvseeking), r4.addEventListener("ended", this.onvended);
            var i3 = this.config;
            this.levels && i3.autoStartLoad && this.state === gi && this.startLoad(i3.startPosition);
          }, r3.onMediaDetaching = function() {
            var t3 = this.media;
            null != t3 && t3.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t3 && this.onvseeking && this.onvended && (t3.removeEventListener("seeking", this.onvseeking), t3.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = false, this.fragmentTracker.removeAllFragments(), this.stopLoad();
          }, r3.onMediaSeeking = function() {
            var t3 = this.config, e3 = this.fragCurrent, r4 = this.media, i3 = this.mediaBuffer, n2 = this.state, a2 = r4 ? r4.currentTime : 0, s2 = Jr.bufferInfo(i3 || r4, a2, t3.maxBufferHole);
            if (this.log("media seeking to " + (y(a2) ? a2.toFixed(3) : a2) + ", state: " + n2), this.state === Li)
              this.resetLoadingState();
            else if (e3) {
              var o2 = t3.maxFragLookUpTolerance, l2 = e3.start - o2, u2 = e3.start + e3.duration + o2;
              if (!s2.len || u2 < s2.start || l2 > s2.end) {
                var h2 = a2 > u2;
                (a2 < l2 || h2) && (h2 && e3.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), e3.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
              }
            }
            r4 && (this.fragmentTracker.removeFragmentsInRange(a2, 1 / 0, this.playlistType, true), this.lastCurrentTime = a2), this.loadedmetadata || s2.len || (this.nextLoadPosition = this.startPosition = a2), this.tickImmediate();
          }, r3.onMediaEnded = function() {
            this.startPosition = this.lastCurrentTime = 0;
          }, r3.onManifestLoaded = function(t3, e3) {
            this.startTimeOffset = e3.startTimeOffset, this.initPTS = [];
          }, r3.onHandlerDestroying = function() {
            this.hls.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), this.stopLoad(), t2.prototype.onHandlerDestroying.call(this), this.hls = null;
          }, r3.onHandlerDestroyed = function() {
            this.state = gi, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, t2.prototype.onHandlerDestroyed.call(this);
          }, r3.loadFragment = function(t3, e3, r4) {
            this._loadFragForPlayback(t3, e3, r4);
          }, r3._loadFragForPlayback = function(t3, e3, r4) {
            var i3 = this;
            this._doFragLoad(t3, e3, r4, function(e4) {
              if (i3.fragContextChanged(t3))
                return i3.warn("Fragment " + t3.sn + (e4.part ? " p: " + e4.part.index : "") + " of level " + t3.level + " was dropped during download."), void i3.fragmentTracker.removeFragment(t3);
              t3.stats.chunkCount++, i3._handleFragmentLoadProgress(e4);
            }).then(function(e4) {
              if (e4) {
                var r5 = i3.state;
                i3.fragContextChanged(t3) ? (r5 === pi || !i3.fragCurrent && r5 === Ti) && (i3.fragmentTracker.removeFragment(t3), i3.state = vi) : ("payload" in e4 && (i3.log("Loaded fragment " + t3.sn + " of level " + t3.level), i3.hls.trigger(S.FRAG_LOADED, e4)), i3._handleFragmentLoadComplete(e4));
              }
            }).catch(function(e4) {
              i3.state !== gi && i3.state !== Ai && (i3.warn(e4), i3.resetFragmentLoading(t3));
            });
          }, r3.clearTrackerIfNeeded = function(t3) {
            var e3, r4 = this.fragmentTracker;
            if (r4.getState(t3) === Yr) {
              var i3 = t3.type, n2 = this.getFwdBufferInfo(this.mediaBuffer, i3), a2 = Math.max(t3.duration, n2 ? n2.len : this.config.maxBufferLength);
              this.reduceMaxBufferLength(a2) && r4.removeFragment(t3);
            } else
              0 === (null == (e3 = this.mediaBuffer) ? void 0 : e3.buffered.length) ? r4.removeAllFragments() : r4.hasParts(t3.type) && (r4.detectPartialFragments({ frag: t3, part: null, stats: t3.stats, id: t3.type }), r4.getState(t3) === Wr && r4.removeFragment(t3));
          }, r3.checkLiveUpdate = function(t3) {
            if (t3.updated && !t3.live) {
              var e3 = t3.fragments[t3.fragments.length - 1];
              this.fragmentTracker.detectPartialFragments({ frag: e3, part: null, stats: e3.stats, id: e3.type });
            }
            t3.fragments[0] || (t3.deltaUpdateFailed = true);
          }, r3.flushMainBuffer = function(t3, e3, r4) {
            if (void 0 === r4 && (r4 = null), t3 - e3) {
              var i3 = { startOffset: t3, endOffset: e3, type: r4 };
              this.hls.trigger(S.BUFFER_FLUSHING, i3);
            }
          }, r3._loadInitSegment = function(t3, e3) {
            var r4 = this;
            this._doFragLoad(t3, e3).then(function(e4) {
              if (!e4 || r4.fragContextChanged(t3) || !r4.levels)
                throw new Error("init load aborted");
              return e4;
            }).then(function(e4) {
              var i3 = r4.hls, n2 = e4.payload, a2 = t3.decryptdata;
              if (n2 && n2.byteLength > 0 && null != a2 && a2.key && a2.iv && "AES-128" === a2.method) {
                var s2 = self.performance.now();
                return r4.decrypter.decrypt(new Uint8Array(n2), a2.key.buffer, a2.iv.buffer).catch(function(e5) {
                  throw i3.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.FRAG_DECRYPT_ERROR, fatal: false, error: e5, reason: e5.message, frag: t3 }), e5;
                }).then(function(n3) {
                  var a3 = self.performance.now();
                  return i3.trigger(S.FRAG_DECRYPTED, { frag: t3, payload: n3, stats: { tstart: s2, tdecrypt: a3 } }), e4.payload = n3, r4.completeInitSegmentLoad(e4);
                });
              }
              return r4.completeInitSegmentLoad(e4);
            }).catch(function(e4) {
              r4.state !== gi && r4.state !== Ai && (r4.warn(e4), r4.resetFragmentLoading(t3));
            });
          }, r3.completeInitSegmentLoad = function(t3) {
            if (!this.levels)
              throw new Error("init load aborted, missing levels");
            var e3 = t3.frag.stats;
            this.state = vi, t3.frag.data = new Uint8Array(t3.payload), e3.parsing.start = e3.buffering.start = self.performance.now(), e3.parsing.end = e3.buffering.end = self.performance.now(), this.tick();
          }, r3.fragContextChanged = function(t3) {
            var e3 = this.fragCurrent;
            return !t3 || !e3 || t3.sn !== e3.sn || t3.level !== e3.level;
          }, r3.fragBufferedComplete = function(t3, e3) {
            var r4, i3, n2, a2, s2 = this.mediaBuffer ? this.mediaBuffer : this.media;
            if (this.log("Buffered " + t3.type + " sn: " + t3.sn + (e3 ? " part: " + e3.index : "") + " of " + (this.playlistType === we ? "level" : "track") + " " + t3.level + " (frag:[" + (null != (r4 = t3.startPTS) ? r4 : NaN).toFixed(3) + "-" + (null != (i3 = t3.endPTS) ? i3 : NaN).toFixed(3) + "] > buffer:" + (s2 ? fi(Jr.getBuffered(s2)) : "(detached)") + ")"), "initSegment" !== t3.sn) {
              var o2;
              if (t3.type !== _e) {
                var l2 = t3.elementaryStreams;
                if (!Object.keys(l2).some(function(t4) {
                  return !!l2[t4];
                }))
                  return void (this.state = vi);
              }
              var u2 = null == (o2 = this.levels) ? void 0 : o2[t3.level];
              null != u2 && u2.fragmentError && (this.log("Resetting level fragment error count of " + u2.fragmentError + " on frag buffered"), u2.fragmentError = 0);
            }
            this.state = vi, s2 && (!this.loadedmetadata && t3.type == we && s2.buffered.length && (null == (n2 = this.fragCurrent) ? void 0 : n2.sn) === (null == (a2 = this.fragPrevious) ? void 0 : a2.sn) && (this.loadedmetadata = true, this.seekToStartPos()), this.tick());
          }, r3.seekToStartPos = function() {
          }, r3._handleFragmentLoadComplete = function(t3) {
            var e3 = this.transmuxer;
            if (e3) {
              var r4 = t3.frag, i3 = t3.part, n2 = t3.partsLoaded, a2 = !n2 || 0 === n2.length || n2.some(function(t4) {
                return !t4;
              }), s2 = new $r(r4.level, r4.sn, r4.stats.chunkCount + 1, 0, i3 ? i3.index : -1, !a2);
              e3.flush(s2);
            }
          }, r3._handleFragmentLoadProgress = function(t3) {
          }, r3._doFragLoad = function(t3, e3, r4, i3) {
            var n2, a2 = this;
            void 0 === r4 && (r4 = null);
            var s2 = null == e3 ? void 0 : e3.details;
            if (!this.levels || !s2)
              throw new Error("frag load aborted, missing level" + (s2 ? "" : " detail") + "s");
            var o2 = null;
            if (!t3.encrypted || null != (n2 = t3.decryptdata) && n2.key ? !t3.encrypted && s2.encryptedFragments.length && this.keyLoader.loadClear(t3, s2.encryptedFragments) : (this.log("Loading key for " + t3.sn + " of [" + s2.startSN + "-" + s2.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t3.level), this.state = mi, this.fragCurrent = t3, o2 = this.keyLoader.load(t3).then(function(t4) {
              if (!a2.fragContextChanged(t4.frag))
                return a2.hls.trigger(S.KEY_LOADED, t4), a2.state === mi && (a2.state = vi), t4;
            }), this.hls.trigger(S.KEY_LOADING, { frag: t3 }), null === this.fragCurrent && (o2 = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))), r4 = Math.max(t3.start, r4 || 0), this.config.lowLatencyMode && "initSegment" !== t3.sn) {
              var l2 = s2.partList;
              if (l2 && i3) {
                r4 > t3.end && s2.fragmentHint && (t3 = s2.fragmentHint);
                var u2 = this.getNextPart(l2, t3, r4);
                if (u2 > -1) {
                  var h2, d2 = l2[u2];
                  return this.log("Loading part sn: " + t3.sn + " p: " + d2.index + " cc: " + t3.cc + " of playlist [" + s2.startSN + "-" + s2.endSN + "] parts [0-" + u2 + "-" + (l2.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t3.level + ", target: " + parseFloat(r4.toFixed(3))), this.nextLoadPosition = d2.start + d2.duration, this.state = pi, h2 = o2 ? o2.then(function(r5) {
                    return !r5 || a2.fragContextChanged(r5.frag) ? null : a2.doFragPartsLoad(t3, d2, e3, i3);
                  }).catch(function(t4) {
                    return a2.handleFragLoadError(t4);
                  }) : this.doFragPartsLoad(t3, d2, e3, i3).catch(function(t4) {
                    return a2.handleFragLoadError(t4);
                  }), this.hls.trigger(S.FRAG_LOADING, { frag: t3, part: d2, targetBufferTime: r4 }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : h2;
                }
                if (!t3.url || this.loadedEndOfParts(l2, r4))
                  return Promise.resolve(null);
              }
            }
            this.log("Loading fragment " + t3.sn + " cc: " + t3.cc + " " + (s2 ? "of [" + s2.startSN + "-" + s2.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t3.level + ", target: " + parseFloat(r4.toFixed(3))), y(t3.sn) && !this.bitrateTest && (this.nextLoadPosition = t3.start + t3.duration), this.state = pi;
            var c2, f2 = this.config.progressive;
            return c2 = f2 && o2 ? o2.then(function(e4) {
              return !e4 || a2.fragContextChanged(null == e4 ? void 0 : e4.frag) ? null : a2.fragmentLoader.load(t3, i3);
            }).catch(function(t4) {
              return a2.handleFragLoadError(t4);
            }) : Promise.all([this.fragmentLoader.load(t3, f2 ? i3 : void 0), o2]).then(function(t4) {
              var e4 = t4[0];
              return !f2 && e4 && i3 && i3(e4), e4;
            }).catch(function(t4) {
              return a2.handleFragLoadError(t4);
            }), this.hls.trigger(S.FRAG_LOADING, { frag: t3, targetBufferTime: r4 }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : c2;
          }, r3.doFragPartsLoad = function(t3, e3, r4, i3) {
            var n2 = this;
            return new Promise(function(a2, s2) {
              var o2, l2 = [], u2 = null == (o2 = r4.details) ? void 0 : o2.partList;
              !function e4(o3) {
                n2.fragmentLoader.loadPart(t3, o3, i3).then(function(i4) {
                  l2[o3.index] = i4;
                  var s3 = i4.part;
                  n2.hls.trigger(S.FRAG_LOADED, i4);
                  var h2 = ur(r4, t3.sn, o3.index + 1) || hr(u2, t3.sn, o3.index + 1);
                  if (!h2)
                    return a2({ frag: t3, part: s3, partsLoaded: l2 });
                  e4(h2);
                }).catch(s2);
              }(e3);
            });
          }, r3.handleFragLoadError = function(t3) {
            if ("data" in t3) {
              var e3 = t3.data;
              t3.data && e3.details === A.INTERNAL_ABORTED ? this.handleFragLoadAborted(e3.frag, e3.part) : this.hls.trigger(S.ERROR, e3);
            } else
              this.hls.trigger(S.ERROR, { type: L.OTHER_ERROR, details: A.INTERNAL_EXCEPTION, err: t3, error: t3, fatal: true });
            return null;
          }, r3._handleTransmuxerFlush = function(t3) {
            var e3 = this.getCurrentContext(t3);
            if (e3 && this.state === Ti) {
              var r4 = e3.frag, i3 = e3.part, n2 = e3.level, a2 = self.performance.now();
              r4.stats.parsing.end = a2, i3 && (i3.stats.parsing.end = a2), this.updateLevelTiming(r4, i3, n2, t3.partial);
            } else
              this.fragCurrent || this.state === gi || this.state === Ai || (this.state = vi);
          }, r3.getCurrentContext = function(t3) {
            var e3 = this.levels, r4 = this.fragCurrent, i3 = t3.level, n2 = t3.sn, a2 = t3.part;
            if (null == e3 || !e3[i3])
              return this.warn("Levels object was unset while buffering fragment " + n2 + " of level " + i3 + ". The current chunk will not be buffered."), null;
            var s2 = e3[i3], o2 = a2 > -1 ? ur(s2, n2, a2) : null, l2 = o2 ? o2.fragment : function(t4, e4, r5) {
              if (null == t4 || !t4.details)
                return null;
              var i4 = t4.details, n3 = i4.fragments[e4 - i4.startSN];
              return n3 || ((n3 = i4.fragmentHint) && n3.sn === e4 ? n3 : e4 < i4.startSN && r5 && r5.sn === e4 ? r5 : null);
            }(s2, n2, r4);
            return l2 ? (r4 && r4 !== l2 && (l2.stats = r4.stats), { frag: l2, part: o2, level: s2 }) : null;
          }, r3.bufferFragmentData = function(t3, e3, r4, i3, n2) {
            var a2;
            if (t3 && this.state === Ti) {
              var s2 = t3.data1, o2 = t3.data2, l2 = s2;
              if (s2 && o2 && (l2 = Kt(s2, o2)), null != (a2 = l2) && a2.length) {
                var u2 = { type: t3.type, frag: e3, part: r4, chunkMeta: i3, parent: e3.type, data: l2 };
                if (this.hls.trigger(S.BUFFER_APPENDING, u2), t3.dropped && t3.independent && !r4) {
                  if (n2)
                    return;
                  this.flushBufferGap(e3);
                }
              }
            }
          }, r3.flushBufferGap = function(t3) {
            var e3 = this.media;
            if (e3)
              if (Jr.isBuffered(e3, e3.currentTime)) {
                var r4 = e3.currentTime, i3 = Jr.bufferInfo(e3, r4, 0), n2 = t3.duration, a2 = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * n2), s2 = Math.max(Math.min(t3.start - a2, i3.end - a2), r4 + a2);
                t3.start - s2 > a2 && this.flushMainBuffer(s2, t3.start);
              } else
                this.flushMainBuffer(0, t3.start);
          }, r3.getFwdBufferInfo = function(t3, e3) {
            var r4 = this.getLoadPosition();
            return y(r4) ? this.getFwdBufferInfoAtPos(t3, r4, e3) : null;
          }, r3.getFwdBufferInfoAtPos = function(t3, e3, r4) {
            var i3 = this.config.maxBufferHole, n2 = Jr.bufferInfo(t3, e3, i3);
            if (0 === n2.len && void 0 !== n2.nextStart) {
              var a2 = this.fragmentTracker.getBufferedFrag(e3, r4);
              if (a2 && n2.nextStart < a2.end)
                return Jr.bufferInfo(t3, e3, Math.max(n2.nextStart, i3));
            }
            return n2;
          }, r3.getMaxBufferLength = function(t3) {
            var e3, r4 = this.config;
            return e3 = t3 ? Math.max(8 * r4.maxBufferSize / t3, r4.maxBufferLength) : r4.maxBufferLength, Math.min(e3, r4.maxMaxBufferLength);
          }, r3.reduceMaxBufferLength = function(t3) {
            var e3 = this.config, r4 = t3 || e3.maxBufferLength;
            return e3.maxMaxBufferLength >= r4 && (e3.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + e3.maxMaxBufferLength + "s"), true);
          }, r3.getAppendedFrag = function(t3, e3) {
            var r4 = this.fragmentTracker.getAppendedFrag(t3, we);
            return r4 && "fragment" in r4 ? r4.fragment : r4;
          }, r3.getNextFragment = function(t3, e3) {
            var r4 = e3.fragments, i3 = r4.length;
            if (!i3)
              return null;
            var n2, a2 = this.config, s2 = r4[0].start;
            if (e3.live) {
              var o2 = a2.initialLiveManifestSize;
              if (i3 < o2)
                return this.warn("Not enough fragments to start playback (have: " + i3 + ", need: " + o2 + ")"), null;
              (!e3.PTSKnown && !this.startFragRequested && -1 === this.startPosition || t3 < s2) && (n2 = this.getInitialLiveFragment(e3, r4), this.startPosition = this.nextLoadPosition = n2 ? this.hls.liveSyncPosition || n2.start : t3);
            } else
              t3 <= s2 && (n2 = r4[0]);
            if (!n2) {
              var l2 = a2.lowLatencyMode ? e3.partEnd : e3.fragmentEnd;
              n2 = this.getFragmentAtPosition(t3, l2, e3);
            }
            return this.mapToInitFragWhenRequired(n2);
          }, r3.isLoopLoading = function(t3, e3) {
            var r4 = this.fragmentTracker.getState(t3);
            return (r4 === jr || r4 === Wr && !!t3.gap) && this.nextLoadPosition > e3;
          }, r3.getNextFragmentLoopLoading = function(t3, e3, r4, i3, n2) {
            var a2 = t3.gap, s2 = this.getNextFragment(this.nextLoadPosition, e3);
            if (null === s2)
              return s2;
            if (t3 = s2, a2 && t3 && !t3.gap && r4.nextStart) {
              var o2 = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, r4.nextStart, i3);
              if (null !== o2 && r4.len + o2.len >= n2)
                return this.log('buffer full after gaps in "' + i3 + '" playlist starting at sn: ' + t3.sn), null;
            }
            return t3;
          }, r3.mapToInitFragWhenRequired = function(t3) {
            return null == t3 || !t3.initSegment || null != t3 && t3.initSegment.data || this.bitrateTest ? t3 : t3.initSegment;
          }, r3.getNextPart = function(t3, e3, r4) {
            for (var i3 = -1, n2 = false, a2 = true, s2 = 0, o2 = t3.length; s2 < o2; s2++) {
              var l2 = t3[s2];
              if (a2 = a2 && !l2.independent, i3 > -1 && r4 < l2.start)
                break;
              var u2 = l2.loaded;
              u2 ? i3 = -1 : (n2 || l2.independent || a2) && l2.fragment === e3 && (i3 = s2), n2 = u2;
            }
            return i3;
          }, r3.loadedEndOfParts = function(t3, e3) {
            var r4 = t3[t3.length - 1];
            return r4 && e3 > r4.start && r4.loaded;
          }, r3.getInitialLiveFragment = function(t3, e3) {
            var r4 = this.fragPrevious, i3 = null;
            if (r4) {
              if (t3.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + r4.programDateTime), i3 = function(t4, e4, r5) {
                if (null === e4 || !Array.isArray(t4) || !t4.length || !y(e4))
                  return null;
                if (e4 < (t4[0].programDateTime || 0))
                  return null;
                if (e4 >= (t4[t4.length - 1].endProgramDateTime || 0))
                  return null;
                r5 = r5 || 0;
                for (var i4 = 0; i4 < t4.length; ++i4) {
                  var n3 = t4[i4];
                  if (Tr(e4, r5, n3))
                    return n3;
                }
                return null;
              }(e3, r4.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i3) {
                var n2 = r4.sn + 1;
                if (n2 >= t3.startSN && n2 <= t3.endSN) {
                  var a2 = e3[n2 - t3.startSN];
                  r4.cc === a2.cc && (i3 = a2, this.log("Live playlist, switching playlist, load frag with next SN: " + i3.sn));
                }
                i3 || (i3 = function(t4, e4) {
                  return pr(t4, function(t5) {
                    return t5.cc < e4 ? 1 : t5.cc > e4 ? -1 : 0;
                  });
                }(e3, r4.cc), i3 && this.log("Live playlist, switching playlist, load frag with same CC: " + i3.sn));
              }
            } else {
              var s2 = this.hls.liveSyncPosition;
              null !== s2 && (i3 = this.getFragmentAtPosition(s2, this.bitrateTest ? t3.fragmentEnd : t3.edge, t3));
            }
            return i3;
          }, r3.getFragmentAtPosition = function(t3, e3, r4) {
            var i3, n2 = this.config, a2 = this.fragPrevious, s2 = r4.fragments, o2 = r4.endSN, l2 = r4.fragmentHint, u2 = n2.maxFragLookUpTolerance, h2 = r4.partList, d2 = !!(n2.lowLatencyMode && null != h2 && h2.length && l2);
            if (d2 && l2 && !this.bitrateTest && (s2 = s2.concat(l2), o2 = l2.sn), i3 = t3 < e3 ? yr(a2, s2, t3, t3 > e3 - u2 ? 0 : u2) : s2[s2.length - 1]) {
              var c2 = i3.sn - r4.startSN, f2 = this.fragmentTracker.getState(i3);
              if ((f2 === jr || f2 === Wr && i3.gap) && (a2 = i3), a2 && i3.sn === a2.sn && (!d2 || h2[0].fragment.sn > i3.sn) && a2 && i3.level === a2.level) {
                var g2 = s2[c2 + 1];
                i3 = i3.sn < o2 && this.fragmentTracker.getState(g2) !== jr ? g2 : null;
              }
            }
            return i3;
          }, r3.synchronizeToLiveEdge = function(t3) {
            var e3 = this.config, r4 = this.media;
            if (r4) {
              var i3 = this.hls.liveSyncPosition, n2 = r4.currentTime, a2 = t3.fragments[0].start, s2 = t3.edge, o2 = n2 >= a2 - e3.maxFragLookUpTolerance && n2 <= s2;
              if (null !== i3 && r4.duration > i3 && (n2 < i3 || !o2)) {
                var l2 = void 0 !== e3.liveMaxLatencyDuration ? e3.liveMaxLatencyDuration : e3.liveMaxLatencyDurationCount * t3.targetduration;
                (!o2 && r4.readyState < 4 || n2 < s2 - l2) && (this.loadedmetadata || (this.nextLoadPosition = i3), r4.readyState && (this.warn("Playback: " + n2.toFixed(3) + " is located too far from the end of live sliding playlist: " + s2 + ", reset currentTime to : " + i3.toFixed(3)), r4.currentTime = i3));
              }
            }
          }, r3.alignPlaylists = function(t3, e3, r4) {
            var i3 = t3.fragments.length;
            if (!i3)
              return this.warn("No fragments in live playlist"), 0;
            var n2 = t3.fragments[0].start, a2 = !e3, s2 = t3.alignedSliding && y(n2);
            if (a2 || !s2 && !n2) {
              var o2 = this.fragPrevious;
              ri(o2, r4, t3);
              var l2 = t3.fragments[0].start;
              return this.log("Live playlist sliding: " + l2.toFixed(2) + " start-sn: " + (e3 ? e3.startSN : "na") + "->" + t3.startSN + " prev-sn: " + (o2 ? o2.sn : "na") + " fragments: " + i3), l2;
            }
            return n2;
          }, r3.waitForCdnTuneIn = function(t3) {
            return t3.live && t3.canBlockReload && t3.partTarget && t3.tuneInGoal > Math.max(t3.partHoldBack, 3 * t3.partTarget);
          }, r3.setStartPosition = function(t3, e3) {
            var r4 = this.startPosition;
            if (r4 < e3 && (r4 = -1), -1 === r4 || -1 === this.lastCurrentTime) {
              var i3 = null !== this.startTimeOffset, n2 = i3 ? this.startTimeOffset : t3.startTimeOffset;
              null !== n2 && y(n2) ? (r4 = e3 + n2, n2 < 0 && (r4 += t3.totalduration), r4 = Math.min(Math.max(e3, r4), e3 + t3.totalduration), this.log("Start time offset " + n2 + " found in " + (i3 ? "multivariant" : "media") + " playlist, adjust startPosition to " + r4), this.startPosition = r4) : t3.live ? r4 = this.hls.liveSyncPosition || e3 : this.startPosition = r4 = 0, this.lastCurrentTime = r4;
            }
            this.nextLoadPosition = r4;
          }, r3.getLoadPosition = function() {
            var t3 = this.media, e3 = 0;
            return this.loadedmetadata && t3 ? e3 = t3.currentTime : this.nextLoadPosition && (e3 = this.nextLoadPosition), e3;
          }, r3.handleFragLoadAborted = function(t3, e3) {
            this.transmuxer && "initSegment" !== t3.sn && t3.stats.aborted && (this.warn("Fragment " + t3.sn + (e3 ? " part " + e3.index : "") + " of level " + t3.level + " was aborted"), this.resetFragmentLoading(t3));
          }, r3.resetFragmentLoading = function(t3) {
            this.fragCurrent && (this.fragContextChanged(t3) || this.state === yi) || (this.state = vi);
          }, r3.onFragmentOrKeyLoadError = function(t3, e3) {
            if (e3.chunkMeta && !e3.frag) {
              var r4 = this.getCurrentContext(e3.chunkMeta);
              r4 && (e3.frag = r4.frag);
            }
            var i3 = e3.frag;
            if (i3 && i3.type === t3 && this.levels)
              if (this.fragContextChanged(i3)) {
                var n2;
                this.warn("Frag load error must match current frag to retry " + i3.url + " > " + (null == (n2 = this.fragCurrent) ? void 0 : n2.url));
              } else {
                var a2 = e3.details === A.FRAG_GAP;
                a2 && this.fragmentTracker.fragBuffered(i3, true);
                var s2 = e3.errorAction, o2 = s2 || {}, l2 = o2.action, u2 = o2.retryCount, h2 = void 0 === u2 ? 0 : u2, d2 = o2.retryConfig;
                if (s2 && l2 === Rr && d2) {
                  this.resetStartWhenNotLoaded(this.levelLastLoaded);
                  var c2 = gr(d2, h2);
                  this.warn("Fragment " + i3.sn + " of " + t3 + " " + i3.level + " errored with " + e3.details + ", retrying loading " + (h2 + 1) + "/" + d2.maxNumRetry + " in " + c2 + "ms"), s2.resolved = true, this.retryDate = self.performance.now() + c2, this.state = yi;
                } else if (d2 && s2) {
                  if (this.resetFragmentErrors(t3), !(h2 < d2.maxNumRetry))
                    return void w.warn(e3.details + " reached or exceeded max retry (" + h2 + ")");
                  a2 || l2 === Ar || (s2.resolved = true);
                } else
                  (null == s2 ? void 0 : s2.action) === Lr ? this.state = ki : this.state = Ai;
                this.tickImmediate();
              }
          }, r3.reduceLengthAndFlushBuffer = function(t3) {
            if (this.state === Ti || this.state === Si) {
              var e3 = t3.parent, r4 = this.getFwdBufferInfo(this.mediaBuffer, e3), i3 = r4 && r4.len > 0.5;
              i3 && this.reduceMaxBufferLength(r4.len);
              var n2 = !i3;
              return n2 && this.warn("Buffer full error while media.currentTime is not buffered, flush " + e3 + " buffer"), t3.frag && (this.fragmentTracker.removeFragment(t3.frag), this.nextLoadPosition = t3.frag.start), this.resetLoadingState(), n2;
            }
            return false;
          }, r3.resetFragmentErrors = function(t3) {
            t3 === Ce && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = false), this.state !== gi && (this.state = vi);
          }, r3.afterBufferFlushed = function(t3, e3, r4) {
            if (t3) {
              var i3 = Jr.getBuffered(t3);
              this.fragmentTracker.detectEvictedFragments(e3, i3, r4), this.state === Li && this.resetLoadingState();
            }
          }, r3.resetLoadingState = function() {
            this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = vi;
          }, r3.resetStartWhenNotLoaded = function(t3) {
            if (!this.loadedmetadata) {
              this.startFragRequested = false;
              var e3 = t3 ? t3.details : null;
              null != e3 && e3.live ? (this.startPosition = -1, this.setStartPosition(e3, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
            }
          }, r3.resetWhenMissingContext = function(t3) {
            this.warn("The loading context changed while buffering fragment " + t3.sn + " of level " + t3.level + ". This chunk will not be buffered."), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState();
          }, r3.removeUnbufferedFrags = function(t3) {
            void 0 === t3 && (t3 = 0), this.fragmentTracker.removeFragmentsInRange(t3, 1 / 0, this.playlistType, false, true);
          }, r3.updateLevelTiming = function(t3, e3, r4, i3) {
            var n2, a2 = this, s2 = r4.details;
            if (s2) {
              if (!Object.keys(t3.elementaryStreams).reduce(function(e4, n3) {
                var o3 = t3.elementaryStreams[n3];
                if (o3) {
                  var l2 = o3.endPTS - o3.startPTS;
                  if (l2 <= 0)
                    return a2.warn("Could not parse fragment " + t3.sn + " " + n3 + " duration reliably (" + l2 + ")"), e4 || false;
                  var u2 = i3 ? 0 : ar(s2, t3, o3.startPTS, o3.endPTS, o3.startDTS, o3.endDTS);
                  return a2.hls.trigger(S.LEVEL_PTS_UPDATED, { details: s2, level: r4, drift: u2, type: n3, frag: t3, start: o3.startPTS, end: o3.endPTS }), true;
                }
                return e4;
              }, false) && null === (null == (n2 = this.transmuxer) ? void 0 : n2.error)) {
                var o2 = new Error("Found no media in fragment " + t3.sn + " of level " + t3.level + " resetting transmuxer to fallback to playlist timing");
                if (0 === r4.fragmentError && (r4.fragmentError++, t3.gap = true, this.fragmentTracker.removeFragment(t3), this.fragmentTracker.fragBuffered(t3, true)), this.warn(o2.message), this.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.FRAG_PARSING_ERROR, fatal: false, error: o2, frag: t3, reason: "Found no media in msn " + t3.sn + ' of level "' + r4.url + '"' }), !this.hls)
                  return;
                this.resetTransmuxer();
              }
              this.state = Si, this.hls.trigger(S.FRAG_PARSED, { frag: t3, part: e3 });
            } else
              this.warn("level.details undefined");
          }, r3.resetTransmuxer = function() {
            this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
          }, r3.recoverWorkerError = function(t3) {
            "demuxerWorker" === t3.event && (this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState());
          }, s(e2, [{ key: "state", get: function() {
            return this._state;
          }, set: function(t3) {
            var e3 = this._state;
            e3 !== t3 && (this._state = t3, this.log(e3 + "->" + t3));
          } }]), e2;
        }(Hr), Di = function() {
          function t2() {
            this.chunks = [], this.dataLength = 0;
          }
          var e2 = t2.prototype;
          return e2.push = function(t3) {
            this.chunks.push(t3), this.dataLength += t3.length;
          }, e2.flush = function() {
            var t3, e3 = this.chunks, r3 = this.dataLength;
            return e3.length ? (t3 = 1 === e3.length ? e3[0] : function(t4, e4) {
              for (var r4 = new Uint8Array(e4), i3 = 0, n2 = 0; n2 < t4.length; n2++) {
                var a2 = t4[n2];
                r4.set(a2, i3), i3 += a2.length;
              }
              return r4;
            }(e3, r3), this.reset(), t3) : new Uint8Array(0);
          }, e2.reset = function() {
            this.chunks.length = 0, this.dataLength = 0;
          }, t2;
        }();
        function Ii(t2, e2) {
          return void 0 === t2 && (t2 = ""), void 0 === e2 && (e2 = 9e4), { type: t2, id: -1, pid: -1, inputTimeScale: e2, sequenceNumber: -1, samples: [], dropped: 0 };
        }
        var wi = function() {
          function t2() {
            this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
          }
          var e2 = t2.prototype;
          return e2.resetInitSegment = function(t3, e3, r3, i3) {
            this._id3Track = { type: "id3", id: 3, pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0 };
          }, e2.resetTimeStamp = function(t3) {
            this.initPTS = t3, this.resetContiguity();
          }, e2.resetContiguity = function() {
            this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
          }, e2.canParse = function(t3, e3) {
            return false;
          }, e2.appendFrame = function(t3, e3, r3) {
          }, e2.demux = function(t3, e3) {
            this.cachedData && (t3 = Kt(this.cachedData, t3), this.cachedData = null);
            var r3, i3 = lt(t3, 0), n2 = i3 ? i3.length : 0, a2 = this._audioTrack, s2 = this._id3Track, o2 = i3 ? dt(i3) : void 0, l2 = t3.length;
            for ((null === this.basePTS || 0 === this.frameIndex && y(o2)) && (this.basePTS = Ci(o2, e3, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), i3 && i3.length > 0 && s2.samples.push({ pts: this.lastPTS, dts: this.lastPTS, data: i3, type: Ge, duration: Number.POSITIVE_INFINITY }); n2 < l2; ) {
              if (this.canParse(t3, n2)) {
                var u2 = this.appendFrame(a2, t3, n2);
                u2 ? (this.frameIndex++, this.lastPTS = u2.sample.pts, r3 = n2 += u2.length) : n2 = l2;
              } else
                ht(t3, n2) ? (i3 = lt(t3, n2), s2.samples.push({ pts: this.lastPTS, dts: this.lastPTS, data: i3, type: Ge, duration: Number.POSITIVE_INFINITY }), r3 = n2 += i3.length) : n2++;
              if (n2 === l2 && r3 !== l2) {
                var h2 = nt(t3, r3);
                this.cachedData ? this.cachedData = Kt(this.cachedData, h2) : this.cachedData = h2;
              }
            }
            return { audioTrack: a2, videoTrack: Ii(), id3Track: s2, textTrack: Ii() };
          }, e2.demuxSampleAes = function(t3, e3, r3) {
            return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"));
          }, e2.flush = function(t3) {
            var e3 = this.cachedData;
            return e3 && (this.cachedData = null, this.demux(e3, 0)), { audioTrack: this._audioTrack, videoTrack: Ii(), id3Track: this._id3Track, textTrack: Ii() };
          }, e2.destroy = function() {
          }, t2;
        }(), Ci = function(t2, e2, r3) {
          return y(t2) ? 90 * t2 : 9e4 * e2 + (r3 ? 9e4 * r3.baseTime / r3.timescale : 0);
        };
        function _i(t2, e2) {
          return 255 === t2[e2] && 240 == (246 & t2[e2 + 1]);
        }
        function xi(t2, e2) {
          return 1 & t2[e2 + 1] ? 7 : 9;
        }
        function Pi(t2, e2) {
          return (3 & t2[e2 + 3]) << 11 | t2[e2 + 4] << 3 | (224 & t2[e2 + 5]) >>> 5;
        }
        function Fi(t2, e2) {
          return e2 + 1 < t2.length && _i(t2, e2);
        }
        function Mi(t2, e2) {
          if (Fi(t2, e2)) {
            var r3 = xi(t2, e2);
            if (e2 + r3 >= t2.length)
              return false;
            var i3 = Pi(t2, e2);
            if (i3 <= r3)
              return false;
            var n2 = e2 + i3;
            return n2 === t2.length || Fi(t2, n2);
          }
          return false;
        }
        function Oi(t2, e2, r3, i3, n2) {
          if (!t2.samplerate) {
            var a2 = function(t3, e3, r4, i4) {
              var n3, a3, s2, o2, l2 = navigator.userAgent.toLowerCase(), u2 = i4, h2 = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
              n3 = 1 + ((192 & e3[r4 + 2]) >>> 6);
              var d2 = (60 & e3[r4 + 2]) >>> 2;
              if (!(d2 > h2.length - 1))
                return s2 = (1 & e3[r4 + 2]) << 2, s2 |= (192 & e3[r4 + 3]) >>> 6, w.log("manifest codec:" + i4 + ", ADTS type:" + n3 + ", samplingIndex:" + d2), /firefox/i.test(l2) ? d2 >= 6 ? (n3 = 5, o2 = new Array(4), a3 = d2 - 3) : (n3 = 2, o2 = new Array(2), a3 = d2) : -1 !== l2.indexOf("android") ? (n3 = 2, o2 = new Array(2), a3 = d2) : (n3 = 5, o2 = new Array(4), i4 && (-1 !== i4.indexOf("mp4a.40.29") || -1 !== i4.indexOf("mp4a.40.5")) || !i4 && d2 >= 6 ? a3 = d2 - 3 : ((i4 && -1 !== i4.indexOf("mp4a.40.2") && (d2 >= 6 && 1 === s2 || /vivaldi/i.test(l2)) || !i4 && 1 === s2) && (n3 = 2, o2 = new Array(2)), a3 = d2)), o2[0] = n3 << 3, o2[0] |= (14 & d2) >> 1, o2[1] |= (1 & d2) << 7, o2[1] |= s2 << 3, 5 === n3 && (o2[1] |= (14 & a3) >> 1, o2[2] = (1 & a3) << 7, o2[2] |= 8, o2[3] = 0), { config: o2, samplerate: h2[d2], channelCount: s2, codec: "mp4a.40." + n3, manifestCodec: u2 };
              var c2 = new Error("invalid ADTS sampling index:" + d2);
              t3.emit(S.ERROR, S.ERROR, { type: L.MEDIA_ERROR, details: A.FRAG_PARSING_ERROR, fatal: true, error: c2, reason: c2.message });
            }(e2, r3, i3, n2);
            if (!a2)
              return;
            t2.config = a2.config, t2.samplerate = a2.samplerate, t2.channelCount = a2.channelCount, t2.codec = a2.codec, t2.manifestCodec = a2.manifestCodec, w.log("parsed codec:" + t2.codec + ", rate:" + a2.samplerate + ", channels:" + a2.channelCount);
          }
        }
        function Ni(t2) {
          return 9216e4 / t2;
        }
        function Ui(t2, e2, r3, i3, n2) {
          var a2, s2 = i3 + n2 * Ni(t2.samplerate), o2 = function(t3, e3) {
            var r4 = xi(t3, e3);
            if (e3 + r4 <= t3.length) {
              var i4 = Pi(t3, e3) - r4;
              if (i4 > 0)
                return { headerLength: r4, frameLength: i4 };
            }
          }(e2, r3);
          if (o2) {
            var l2 = o2.frameLength, u2 = o2.headerLength, h2 = u2 + l2, d2 = Math.max(0, r3 + h2 - e2.length);
            d2 ? (a2 = new Uint8Array(h2 - u2)).set(e2.subarray(r3 + u2, e2.length), 0) : a2 = e2.subarray(r3 + u2, r3 + h2);
            var c2 = { unit: a2, pts: s2 };
            return d2 || t2.samples.push(c2), { sample: c2, length: h2, missing: d2 };
          }
          var f2 = e2.length - r3;
          return (a2 = new Uint8Array(f2)).set(e2.subarray(r3, e2.length), 0), { sample: { unit: a2, pts: s2 }, length: f2, missing: -1 };
        }
        var Bi = null, Gi = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], Ki = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], Hi = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]], Vi = [0, 1, 1, 4];
        function Yi(t2, e2, r3, i3, n2) {
          if (!(r3 + 24 > e2.length)) {
            var a2 = Wi(e2, r3);
            if (a2 && r3 + a2.frameLength <= e2.length) {
              var s2 = i3 + n2 * (9e4 * a2.samplesPerFrame / a2.sampleRate), o2 = { unit: e2.subarray(r3, r3 + a2.frameLength), pts: s2, dts: s2 };
              return t2.config = [], t2.channelCount = a2.channelCount, t2.samplerate = a2.sampleRate, t2.samples.push(o2), { sample: o2, length: a2.frameLength, missing: 0 };
            }
          }
        }
        function Wi(t2, e2) {
          var r3 = t2[e2 + 1] >> 3 & 3, i3 = t2[e2 + 1] >> 1 & 3, n2 = t2[e2 + 2] >> 4 & 15, a2 = t2[e2 + 2] >> 2 & 3;
          if (1 !== r3 && 0 !== n2 && 15 !== n2 && 3 !== a2) {
            var s2 = t2[e2 + 2] >> 1 & 1, o2 = t2[e2 + 3] >> 6, l2 = 1e3 * Gi[14 * (3 === r3 ? 3 - i3 : 3 === i3 ? 3 : 4) + n2 - 1], u2 = Ki[3 * (3 === r3 ? 0 : 2 === r3 ? 1 : 2) + a2], h2 = 3 === o2 ? 1 : 2, d2 = Hi[r3][i3], c2 = Vi[i3], f2 = 8 * d2 * c2, g2 = Math.floor(d2 * l2 / u2 + s2) * c2;
            if (null === Bi) {
              var v2 = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
              Bi = v2 ? parseInt(v2[1]) : 0;
            }
            return !!Bi && Bi <= 87 && 2 === i3 && l2 >= 224e3 && 0 === o2 && (t2[e2 + 3] = 128 | t2[e2 + 3]), { sampleRate: u2, channelCount: h2, frameLength: g2, samplesPerFrame: f2 };
          }
        }
        function ji(t2, e2) {
          return 255 === t2[e2] && 224 == (224 & t2[e2 + 1]) && 0 != (6 & t2[e2 + 1]);
        }
        function qi(t2, e2) {
          return e2 + 1 < t2.length && ji(t2, e2);
        }
        function Xi(t2, e2) {
          if (e2 + 1 < t2.length && ji(t2, e2)) {
            var r3 = Wi(t2, e2), i3 = 4;
            null != r3 && r3.frameLength && (i3 = r3.frameLength);
            var n2 = e2 + i3;
            return n2 === t2.length || qi(t2, n2);
          }
          return false;
        }
        var zi = function(t2) {
          function e2(e3, r4) {
            var i3;
            return (i3 = t2.call(this) || this).observer = void 0, i3.config = void 0, i3.observer = e3, i3.config = r4, i3;
          }
          l(e2, t2);
          var r3 = e2.prototype;
          return r3.resetInitSegment = function(e3, r4, i3, n2) {
            t2.prototype.resetInitSegment.call(this, e3, r4, i3, n2), this._audioTrack = { container: "audio/adts", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "aac", samples: [], manifestCodec: r4, duration: n2, inputTimeScale: 9e4, dropped: 0 };
          }, e2.probe = function(t3) {
            if (!t3)
              return false;
            var e3 = lt(t3, 0), r4 = (null == e3 ? void 0 : e3.length) || 0;
            if (Xi(t3, r4))
              return false;
            for (var i3 = t3.length; r4 < i3; r4++)
              if (Mi(t3, r4))
                return w.log("ADTS sync word found !"), true;
            return false;
          }, r3.canParse = function(t3, e3) {
            return function(t4, e4) {
              return function(t5, e5) {
                return e5 + 5 < t5.length;
              }(t4, e4) && _i(t4, e4) && Pi(t4, e4) <= t4.length - e4;
            }(t3, e3);
          }, r3.appendFrame = function(t3, e3, r4) {
            Oi(t3, this.observer, e3, r4, t3.manifestCodec);
            var i3 = Ui(t3, e3, r4, this.basePTS, this.frameIndex);
            if (i3 && 0 === i3.missing)
              return i3;
          }, e2;
        }(wi), Qi = /\/emsg[-/]ID3/i, Ji = function() {
          function t2(t3, e3) {
            this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = e3;
          }
          var e2 = t2.prototype;
          return e2.resetTimeStamp = function() {
          }, e2.resetInitSegment = function(t3, e3, r3, i3) {
            var n2 = this.videoTrack = Ii("video", 1), a2 = this.audioTrack = Ii("audio", 1), s2 = this.txtTrack = Ii("text", 1);
            if (this.id3Track = Ii("id3", 1), this.timeOffset = 0, null != t3 && t3.byteLength) {
              var o2 = Ft(t3);
              if (o2.video) {
                var l2 = o2.video, u2 = l2.id, h2 = l2.timescale, d2 = l2.codec;
                n2.id = u2, n2.timescale = s2.timescale = h2, n2.codec = d2;
              }
              if (o2.audio) {
                var c2 = o2.audio, f2 = c2.id, g2 = c2.timescale, v2 = c2.codec;
                a2.id = f2, a2.timescale = g2, a2.codec = v2;
              }
              s2.id = kt.text, n2.sampleDuration = 0, n2.duration = a2.duration = i3;
            }
          }, e2.resetContiguity = function() {
            this.remainderData = null;
          }, t2.probe = function(t3) {
            return function(t4) {
              for (var e3 = t4.byteLength, r3 = 0; r3 < e3; ) {
                var i3 = It(t4, r3);
                if (i3 > 8 && 109 === t4[r3 + 4] && 111 === t4[r3 + 5] && 111 === t4[r3 + 6] && 102 === t4[r3 + 7])
                  return true;
                r3 = i3 > 1 ? r3 + i3 : e3;
              }
              return false;
            }(t3);
          }, e2.demux = function(t3, e3) {
            this.timeOffset = e3;
            var r3 = t3, i3 = this.videoTrack, n2 = this.txtTrack;
            if (this.config.progressive) {
              this.remainderData && (r3 = Kt(this.remainderData, t3));
              var a2 = function(t4) {
                var e4 = { valid: null, remainder: null }, r4 = xt(t4, ["moof"]);
                if (r4.length < 2)
                  return e4.remainder = t4, e4;
                var i4 = r4[r4.length - 1];
                return e4.valid = nt(t4, 0, i4.byteOffset - 8), e4.remainder = nt(t4, i4.byteOffset - 8), e4;
              }(r3);
              this.remainderData = a2.remainder, i3.samples = a2.valid || new Uint8Array();
            } else
              i3.samples = r3;
            var s2 = this.extractID3Track(i3, e3);
            return n2.samples = Ht(e3, i3), { videoTrack: i3, audioTrack: this.audioTrack, id3Track: s2, textTrack: this.txtTrack };
          }, e2.flush = function() {
            var t3 = this.timeOffset, e3 = this.videoTrack, r3 = this.txtTrack;
            e3.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
            var i3 = this.extractID3Track(e3, this.timeOffset);
            return r3.samples = Ht(t3, e3), { videoTrack: e3, audioTrack: Ii(), id3Track: i3, textTrack: Ii() };
          }, e2.extractID3Track = function(t3, e3) {
            var r3 = this.id3Track;
            if (t3.samples.length) {
              var i3 = xt(t3.samples, ["emsg"]);
              i3 && i3.forEach(function(t4) {
                var i4 = function(t5) {
                  var e4 = t5[0], r4 = "", i5 = "", n3 = 0, a3 = 0, s3 = 0, o2 = 0, l2 = 0, u2 = 0;
                  if (0 === e4) {
                    for (; "\0" !== bt(t5.subarray(u2, u2 + 1)); )
                      r4 += bt(t5.subarray(u2, u2 + 1)), u2 += 1;
                    for (r4 += bt(t5.subarray(u2, u2 + 1)), u2 += 1; "\0" !== bt(t5.subarray(u2, u2 + 1)); )
                      i5 += bt(t5.subarray(u2, u2 + 1)), u2 += 1;
                    i5 += bt(t5.subarray(u2, u2 + 1)), u2 += 1, n3 = It(t5, 12), a3 = It(t5, 16), o2 = It(t5, 20), l2 = It(t5, 24), u2 = 28;
                  } else if (1 === e4) {
                    n3 = It(t5, u2 += 4);
                    var h2 = It(t5, u2 += 4), d2 = It(t5, u2 += 4);
                    for (u2 += 4, s3 = Math.pow(2, 32) * h2 + d2, E(s3) || (s3 = Number.MAX_SAFE_INTEGER, w.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o2 = It(t5, u2), l2 = It(t5, u2 += 4), u2 += 4; "\0" !== bt(t5.subarray(u2, u2 + 1)); )
                      r4 += bt(t5.subarray(u2, u2 + 1)), u2 += 1;
                    for (r4 += bt(t5.subarray(u2, u2 + 1)), u2 += 1; "\0" !== bt(t5.subarray(u2, u2 + 1)); )
                      i5 += bt(t5.subarray(u2, u2 + 1)), u2 += 1;
                    i5 += bt(t5.subarray(u2, u2 + 1)), u2 += 1;
                  }
                  return { schemeIdUri: r4, value: i5, timeScale: n3, presentationTime: s3, presentationTimeDelta: a3, eventDuration: o2, id: l2, payload: t5.subarray(u2, t5.byteLength) };
                }(t4);
                if (Qi.test(i4.schemeIdUri)) {
                  var n2 = y(i4.presentationTime) ? i4.presentationTime / i4.timeScale : e3 + i4.presentationTimeDelta / i4.timeScale, a2 = 4294967295 === i4.eventDuration ? Number.POSITIVE_INFINITY : i4.eventDuration / i4.timeScale;
                  a2 <= 1e-3 && (a2 = Number.POSITIVE_INFINITY);
                  var s2 = i4.payload;
                  r3.samples.push({ data: s2, len: s2.byteLength, dts: n2, pts: n2, type: He, duration: a2 });
                }
              });
            }
            return r3;
          }, e2.demuxSampleAes = function(t3, e3, r3) {
            return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
          }, e2.destroy = function() {
          }, t2;
        }(), $i = function(t2, e2) {
          var r3 = 0, i3 = 5;
          e2 += i3;
          for (var n2 = new Uint32Array(1), a2 = new Uint32Array(1), s2 = new Uint8Array(1); i3 > 0; ) {
            s2[0] = t2[e2];
            var o2 = Math.min(i3, 8), l2 = 8 - o2;
            a2[0] = 4278190080 >>> 24 + l2 << l2, n2[0] = (s2[0] & a2[0]) >> l2, r3 = r3 ? r3 << o2 | n2[0] : n2[0], e2 += 1, i3 -= o2;
          }
          return r3;
        }, Zi = function(t2) {
          function e2(e3) {
            var r4;
            return (r4 = t2.call(this) || this).observer = void 0, r4.observer = e3, r4;
          }
          l(e2, t2);
          var r3 = e2.prototype;
          return r3.resetInitSegment = function(e3, r4, i3, n2) {
            t2.prototype.resetInitSegment.call(this, e3, r4, i3, n2), this._audioTrack = { container: "audio/ac-3", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "ac3", samples: [], manifestCodec: r4, duration: n2, inputTimeScale: 9e4, dropped: 0 };
          }, r3.canParse = function(t3, e3) {
            return e3 + 64 < t3.length;
          }, r3.appendFrame = function(t3, e3, r4) {
            var i3 = tn(t3, e3, r4, this.basePTS, this.frameIndex);
            if (-1 !== i3)
              return { sample: t3.samples[t3.samples.length - 1], length: i3, missing: 0 };
          }, e2.probe = function(t3) {
            if (!t3)
              return false;
            var e3 = lt(t3, 0);
            if (!e3)
              return false;
            var r4 = e3.length;
            return 11 === t3[r4] && 119 === t3[r4 + 1] && void 0 !== dt(e3) && $i(t3, r4) < 16;
          }, e2;
        }(wi);
        function tn(t2, e2, r3, i3, n2) {
          if (r3 + 8 > e2.length)
            return -1;
          if (11 !== e2[r3] || 119 !== e2[r3 + 1])
            return -1;
          var a2 = e2[r3 + 4] >> 6;
          if (a2 >= 3)
            return -1;
          var s2 = [48e3, 44100, 32e3][a2], o2 = 63 & e2[r3 + 4], l2 = 2 * [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][3 * o2 + a2];
          if (r3 + l2 > e2.length)
            return -1;
          var u2 = e2[r3 + 6] >> 5, h2 = 0;
          2 === u2 ? h2 += 2 : (1 & u2 && 1 !== u2 && (h2 += 2), 4 & u2 && (h2 += 2));
          var d2 = (e2[r3 + 6] << 8 | e2[r3 + 7]) >> 12 - h2 & 1, c2 = [2, 1, 2, 3, 3, 4, 4, 5][u2] + d2, f2 = e2[r3 + 5] >> 3, g2 = 7 & e2[r3 + 5], v2 = new Uint8Array([a2 << 6 | f2 << 1 | g2 >> 2, (3 & g2) << 6 | u2 << 3 | d2 << 2 | o2 >> 4, o2 << 4 & 224]), m2 = i3 + n2 * (1536 / s2 * 9e4), p2 = e2.subarray(r3, r3 + l2);
          return t2.config = v2, t2.channelCount = c2, t2.samplerate = s2, t2.samples.push({ unit: p2, pts: m2 }), l2;
        }
        var en = function() {
          function t2() {
            this.VideoSample = null;
          }
          var e2 = t2.prototype;
          return e2.createVideoSample = function(t3, e3, r3, i3) {
            return { key: t3, frame: false, pts: e3, dts: r3, units: [], debug: i3, length: 0 };
          }, e2.getLastNalUnit = function(t3) {
            var e3, r3, i3 = this.VideoSample;
            if (i3 && 0 !== i3.units.length || (i3 = t3[t3.length - 1]), null != (e3 = i3) && e3.units) {
              var n2 = i3.units;
              r3 = n2[n2.length - 1];
            }
            return r3;
          }, e2.pushAccessUnit = function(t3, e3) {
            if (t3.units.length && t3.frame) {
              if (void 0 === t3.pts) {
                var r3 = e3.samples, i3 = r3.length;
                if (!i3)
                  return void e3.dropped++;
                var n2 = r3[i3 - 1];
                t3.pts = n2.pts, t3.dts = n2.dts;
              }
              e3.samples.push(t3);
            }
            t3.debug.length && w.log(t3.pts + "/" + t3.dts + ":" + t3.debug);
          }, t2;
        }(), rn = function() {
          function t2(t3) {
            this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t3, this.bytesAvailable = t3.byteLength, this.word = 0, this.bitsAvailable = 0;
          }
          var e2 = t2.prototype;
          return e2.loadWord = function() {
            var t3 = this.data, e3 = this.bytesAvailable, r3 = t3.byteLength - e3, i3 = new Uint8Array(4), n2 = Math.min(4, e3);
            if (0 === n2)
              throw new Error("no bytes available");
            i3.set(t3.subarray(r3, r3 + n2)), this.word = new DataView(i3.buffer).getUint32(0), this.bitsAvailable = 8 * n2, this.bytesAvailable -= n2;
          }, e2.skipBits = function(t3) {
            var e3;
            t3 = Math.min(t3, 8 * this.bytesAvailable + this.bitsAvailable), this.bitsAvailable > t3 ? (this.word <<= t3, this.bitsAvailable -= t3) : (t3 -= this.bitsAvailable, t3 -= (e3 = t3 >> 3) << 3, this.bytesAvailable -= e3, this.loadWord(), this.word <<= t3, this.bitsAvailable -= t3);
          }, e2.readBits = function(t3) {
            var e3 = Math.min(this.bitsAvailable, t3), r3 = this.word >>> 32 - e3;
            if (t3 > 32 && w.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e3, this.bitsAvailable > 0)
              this.word <<= e3;
            else {
              if (!(this.bytesAvailable > 0))
                throw new Error("no bits available");
              this.loadWord();
            }
            return (e3 = t3 - e3) > 0 && this.bitsAvailable ? r3 << e3 | this.readBits(e3) : r3;
          }, e2.skipLZ = function() {
            var t3;
            for (t3 = 0; t3 < this.bitsAvailable; ++t3)
              if (0 != (this.word & 2147483648 >>> t3))
                return this.word <<= t3, this.bitsAvailable -= t3, t3;
            return this.loadWord(), t3 + this.skipLZ();
          }, e2.skipUEG = function() {
            this.skipBits(1 + this.skipLZ());
          }, e2.skipEG = function() {
            this.skipBits(1 + this.skipLZ());
          }, e2.readUEG = function() {
            var t3 = this.skipLZ();
            return this.readBits(t3 + 1) - 1;
          }, e2.readEG = function() {
            var t3 = this.readUEG();
            return 1 & t3 ? 1 + t3 >>> 1 : -1 * (t3 >>> 1);
          }, e2.readBoolean = function() {
            return 1 === this.readBits(1);
          }, e2.readUByte = function() {
            return this.readBits(8);
          }, e2.readUShort = function() {
            return this.readBits(16);
          }, e2.readUInt = function() {
            return this.readBits(32);
          }, e2.skipScalingList = function(t3) {
            for (var e3 = 8, r3 = 8, i3 = 0; i3 < t3; i3++)
              0 !== r3 && (r3 = (e3 + this.readEG() + 256) % 256), e3 = 0 === r3 ? e3 : r3;
          }, e2.readSPS = function() {
            var t3, e3, r3, i3 = 0, n2 = 0, a2 = 0, s2 = 0, o2 = this.readUByte.bind(this), l2 = this.readBits.bind(this), u2 = this.readUEG.bind(this), h2 = this.readBoolean.bind(this), d2 = this.skipBits.bind(this), c2 = this.skipEG.bind(this), f2 = this.skipUEG.bind(this), g2 = this.skipScalingList.bind(this);
            o2();
            var v2 = o2();
            if (l2(5), d2(3), o2(), f2(), 100 === v2 || 110 === v2 || 122 === v2 || 244 === v2 || 44 === v2 || 83 === v2 || 86 === v2 || 118 === v2 || 128 === v2) {
              var m2 = u2();
              if (3 === m2 && d2(1), f2(), f2(), d2(1), h2())
                for (e3 = 3 !== m2 ? 8 : 12, r3 = 0; r3 < e3; r3++)
                  h2() && g2(r3 < 6 ? 16 : 64);
            }
            f2();
            var p2 = u2();
            if (0 === p2)
              u2();
            else if (1 === p2)
              for (d2(1), c2(), c2(), t3 = u2(), r3 = 0; r3 < t3; r3++)
                c2();
            f2(), d2(1);
            var y2 = u2(), E2 = u2(), T2 = l2(1);
            0 === T2 && d2(1), d2(1), h2() && (i3 = u2(), n2 = u2(), a2 = u2(), s2 = u2());
            var S2 = [1, 1];
            if (h2() && h2())
              switch (o2()) {
                case 1:
                  S2 = [1, 1];
                  break;
                case 2:
                  S2 = [12, 11];
                  break;
                case 3:
                  S2 = [10, 11];
                  break;
                case 4:
                  S2 = [16, 11];
                  break;
                case 5:
                  S2 = [40, 33];
                  break;
                case 6:
                  S2 = [24, 11];
                  break;
                case 7:
                  S2 = [20, 11];
                  break;
                case 8:
                  S2 = [32, 11];
                  break;
                case 9:
                  S2 = [80, 33];
                  break;
                case 10:
                  S2 = [18, 11];
                  break;
                case 11:
                  S2 = [15, 11];
                  break;
                case 12:
                  S2 = [64, 33];
                  break;
                case 13:
                  S2 = [160, 99];
                  break;
                case 14:
                  S2 = [4, 3];
                  break;
                case 15:
                  S2 = [3, 2];
                  break;
                case 16:
                  S2 = [2, 1];
                  break;
                case 255:
                  S2 = [o2() << 8 | o2(), o2() << 8 | o2()];
              }
            return { width: Math.ceil(16 * (y2 + 1) - 2 * i3 - 2 * n2), height: (2 - T2) * (E2 + 1) * 16 - (T2 ? 2 : 4) * (a2 + s2), pixelRatio: S2 };
          }, e2.readSliceType = function() {
            return this.readUByte(), this.readUEG(), this.readUEG();
          }, t2;
        }(), nn = function(t2) {
          function e2() {
            return t2.apply(this, arguments) || this;
          }
          l(e2, t2);
          var r3 = e2.prototype;
          return r3.parseAVCPES = function(t3, e3, r4, i3, n2) {
            var a2, s2 = this, o2 = this.parseAVCNALu(t3, r4.data), l2 = this.VideoSample, u2 = false;
            r4.data = null, l2 && o2.length && !t3.audFound && (this.pushAccessUnit(l2, t3), l2 = this.VideoSample = this.createVideoSample(false, r4.pts, r4.dts, "")), o2.forEach(function(i4) {
              var o3;
              switch (i4.type) {
                case 1:
                  var h2 = false;
                  a2 = true;
                  var d2, c2 = i4.data;
                  if (u2 && c2.length > 4) {
                    var f2 = new rn(c2).readSliceType();
                    2 !== f2 && 4 !== f2 && 7 !== f2 && 9 !== f2 || (h2 = true);
                  }
                  h2 && null != (d2 = l2) && d2.frame && !l2.key && (s2.pushAccessUnit(l2, t3), l2 = s2.VideoSample = null), l2 || (l2 = s2.VideoSample = s2.createVideoSample(true, r4.pts, r4.dts, "")), l2.frame = true, l2.key = h2;
                  break;
                case 5:
                  a2 = true, null != (o3 = l2) && o3.frame && !l2.key && (s2.pushAccessUnit(l2, t3), l2 = s2.VideoSample = null), l2 || (l2 = s2.VideoSample = s2.createVideoSample(true, r4.pts, r4.dts, "")), l2.key = true, l2.frame = true;
                  break;
                case 6:
                  a2 = true, Yt(i4.data, 1, r4.pts, e3.samples);
                  break;
                case 7:
                  var g2, v2;
                  a2 = true, u2 = true;
                  var m2 = i4.data, p2 = new rn(m2).readSPS();
                  if (!t3.sps || t3.width !== p2.width || t3.height !== p2.height || (null == (g2 = t3.pixelRatio) ? void 0 : g2[0]) !== p2.pixelRatio[0] || (null == (v2 = t3.pixelRatio) ? void 0 : v2[1]) !== p2.pixelRatio[1]) {
                    t3.width = p2.width, t3.height = p2.height, t3.pixelRatio = p2.pixelRatio, t3.sps = [m2], t3.duration = n2;
                    for (var y2 = m2.subarray(1, 4), E2 = "avc1.", T2 = 0; T2 < 3; T2++) {
                      var S2 = y2[T2].toString(16);
                      S2.length < 2 && (S2 = "0" + S2), E2 += S2;
                    }
                    t3.codec = E2;
                  }
                  break;
                case 8:
                  a2 = true, t3.pps = [i4.data];
                  break;
                case 9:
                  a2 = true, t3.audFound = true, l2 && s2.pushAccessUnit(l2, t3), l2 = s2.VideoSample = s2.createVideoSample(false, r4.pts, r4.dts, "");
                  break;
                case 12:
                  a2 = true;
                  break;
                default:
                  a2 = false, l2 && (l2.debug += "unknown NAL " + i4.type + " ");
              }
              l2 && a2 && l2.units.push(i4);
            }), i3 && l2 && (this.pushAccessUnit(l2, t3), this.VideoSample = null);
          }, r3.parseAVCNALu = function(t3, e3) {
            var r4, i3, n2 = e3.byteLength, a2 = t3.naluState || 0, s2 = a2, o2 = [], l2 = 0, u2 = -1, h2 = 0;
            for (-1 === a2 && (u2 = 0, h2 = 31 & e3[0], a2 = 0, l2 = 1); l2 < n2; )
              if (r4 = e3[l2++], a2)
                if (1 !== a2)
                  if (r4)
                    if (1 === r4) {
                      if (i3 = l2 - a2 - 1, u2 >= 0) {
                        var d2 = { data: e3.subarray(u2, i3), type: h2 };
                        o2.push(d2);
                      } else {
                        var c2 = this.getLastNalUnit(t3.samples);
                        c2 && (s2 && l2 <= 4 - s2 && c2.state && (c2.data = c2.data.subarray(0, c2.data.byteLength - s2)), i3 > 0 && (c2.data = Kt(c2.data, e3.subarray(0, i3)), c2.state = 0));
                      }
                      l2 < n2 ? (u2 = l2, h2 = 31 & e3[l2], a2 = 0) : a2 = -1;
                    } else
                      a2 = 0;
                  else
                    a2 = 3;
                else
                  a2 = r4 ? 0 : 2;
              else
                a2 = r4 ? 0 : 1;
            if (u2 >= 0 && a2 >= 0) {
              var f2 = { data: e3.subarray(u2, n2), type: h2, state: a2 };
              o2.push(f2);
            }
            if (0 === o2.length) {
              var g2 = this.getLastNalUnit(t3.samples);
              g2 && (g2.data = Kt(g2.data, e3));
            }
            return t3.naluState = a2, o2;
          }, e2;
        }(en), an = function() {
          function t2(t3, e3, r3) {
            this.keyData = void 0, this.decrypter = void 0, this.keyData = r3, this.decrypter = new ci(e3, { removePKCS7Padding: false });
          }
          var e2 = t2.prototype;
          return e2.decryptBuffer = function(t3) {
            return this.decrypter.decrypt(t3, this.keyData.key.buffer, this.keyData.iv.buffer);
          }, e2.decryptAacSample = function(t3, e3, r3) {
            var i3 = this, n2 = t3[e3].unit;
            if (!(n2.length <= 16)) {
              var a2 = n2.subarray(16, n2.length - n2.length % 16), s2 = a2.buffer.slice(a2.byteOffset, a2.byteOffset + a2.length);
              this.decryptBuffer(s2).then(function(a3) {
                var s3 = new Uint8Array(a3);
                n2.set(s3, 16), i3.decrypter.isSync() || i3.decryptAacSamples(t3, e3 + 1, r3);
              });
            }
          }, e2.decryptAacSamples = function(t3, e3, r3) {
            for (; ; e3++) {
              if (e3 >= t3.length)
                return void r3();
              if (!(t3[e3].unit.length < 32 || (this.decryptAacSample(t3, e3, r3), this.decrypter.isSync())))
                return;
            }
          }, e2.getAvcEncryptedData = function(t3) {
            for (var e3 = 16 * Math.floor((t3.length - 48) / 160) + 16, r3 = new Int8Array(e3), i3 = 0, n2 = 32; n2 < t3.length - 16; n2 += 160, i3 += 16)
              r3.set(t3.subarray(n2, n2 + 16), i3);
            return r3;
          }, e2.getAvcDecryptedUnit = function(t3, e3) {
            for (var r3 = new Uint8Array(e3), i3 = 0, n2 = 32; n2 < t3.length - 16; n2 += 160, i3 += 16)
              t3.set(r3.subarray(i3, i3 + 16), n2);
            return t3;
          }, e2.decryptAvcSample = function(t3, e3, r3, i3, n2) {
            var a2 = this, s2 = Wt(n2.data), o2 = this.getAvcEncryptedData(s2);
            this.decryptBuffer(o2.buffer).then(function(o3) {
              n2.data = a2.getAvcDecryptedUnit(s2, o3), a2.decrypter.isSync() || a2.decryptAvcSamples(t3, e3, r3 + 1, i3);
            });
          }, e2.decryptAvcSamples = function(t3, e3, r3, i3) {
            if (t3 instanceof Uint8Array)
              throw new Error("Cannot decrypt samples of type Uint8Array");
            for (; ; e3++, r3 = 0) {
              if (e3 >= t3.length)
                return void i3();
              for (var n2 = t3[e3].units; !(r3 >= n2.length); r3++) {
                var a2 = n2[r3];
                if (!(a2.data.length <= 48 || 1 !== a2.type && 5 !== a2.type || (this.decryptAvcSample(t3, e3, r3, i3, a2), this.decrypter.isSync())))
                  return;
              }
            }
          }, t2;
        }(), sn = 188, on = function() {
          function t2(t3, e3, r3) {
            this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = false, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = t3, this.config = e3, this.typeSupported = r3, this.videoParser = new nn();
          }
          t2.probe = function(e3) {
            var r3 = t2.syncOffset(e3);
            return r3 > 0 && w.warn("MPEG2-TS detected but first sync word found @ offset " + r3), -1 !== r3;
          }, t2.syncOffset = function(t3) {
            for (var e3 = t3.length, r3 = Math.min(940, e3 - sn) + 1, i3 = 0; i3 < r3; ) {
              for (var n2 = false, a2 = -1, s2 = 0, o2 = i3; o2 < e3; o2 += sn) {
                if (71 !== t3[o2] || e3 - o2 !== sn && 71 !== t3[o2 + sn]) {
                  if (s2)
                    return -1;
                  break;
                }
                if (s2++, -1 === a2 && 0 !== (a2 = o2) && (r3 = Math.min(a2 + 18612, t3.length - sn) + 1), n2 || (n2 = 0 === ln(t3, o2)), n2 && s2 > 1 && (0 === a2 && s2 > 2 || o2 + sn > r3))
                  return a2;
              }
              i3++;
            }
            return -1;
          }, t2.createTrack = function(t3, e3) {
            return { container: "video" === t3 || "audio" === t3 ? "video/mp2t" : void 0, type: t3, id: kt[t3], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0, duration: "audio" === t3 ? e3 : void 0 };
          };
          var e2 = t2.prototype;
          return e2.resetInitSegment = function(e3, r3, i3, n2) {
            this.pmtParsed = false, this._pmtId = -1, this._videoTrack = t2.createTrack("video"), this._audioTrack = t2.createTrack("audio", n2), this._id3Track = t2.createTrack("id3"), this._txtTrack = t2.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.remainderData = null, this.audioCodec = r3, this.videoCodec = i3, this._duration = n2;
          }, e2.resetTimeStamp = function() {
          }, e2.resetContiguity = function() {
            var t3 = this._audioTrack, e3 = this._videoTrack, r3 = this._id3Track;
            t3 && (t3.pesData = null), e3 && (e3.pesData = null), r3 && (r3.pesData = null), this.aacOverFlow = null, this.remainderData = null;
          }, e2.demux = function(e3, r3, i3, n2) {
            var a2;
            void 0 === i3 && (i3 = false), void 0 === n2 && (n2 = false), i3 || (this.sampleAes = null);
            var s2 = this._videoTrack, o2 = this._audioTrack, l2 = this._id3Track, u2 = this._txtTrack, h2 = s2.pid, d2 = s2.pesData, c2 = o2.pid, f2 = l2.pid, g2 = o2.pesData, v2 = l2.pesData, m2 = null, p2 = this.pmtParsed, y2 = this._pmtId, E2 = e3.length;
            if (this.remainderData && (E2 = (e3 = Kt(this.remainderData, e3)).length, this.remainderData = null), E2 < sn && !n2)
              return this.remainderData = e3, { audioTrack: o2, videoTrack: s2, id3Track: l2, textTrack: u2 };
            var T2 = Math.max(0, t2.syncOffset(e3));
            (E2 -= (E2 - T2) % sn) < e3.byteLength && !n2 && (this.remainderData = new Uint8Array(e3.buffer, E2, e3.buffer.byteLength - E2));
            for (var R2 = 0, k2 = T2; k2 < E2; k2 += sn)
              if (71 === e3[k2]) {
                var b2 = !!(64 & e3[k2 + 1]), D2 = ln(e3, k2), I2 = void 0;
                if ((48 & e3[k2 + 3]) >> 4 > 1) {
                  if ((I2 = k2 + 5 + e3[k2 + 4]) === k2 + sn)
                    continue;
                } else
                  I2 = k2 + 4;
                switch (D2) {
                  case h2:
                    b2 && (d2 && (a2 = cn(d2)) && this.videoParser.parseAVCPES(s2, u2, a2, false, this._duration), d2 = { data: [], size: 0 }), d2 && (d2.data.push(e3.subarray(I2, k2 + sn)), d2.size += k2 + sn - I2);
                    break;
                  case c2:
                    if (b2) {
                      if (g2 && (a2 = cn(g2)))
                        switch (o2.segmentCodec) {
                          case "aac":
                            this.parseAACPES(o2, a2);
                            break;
                          case "mp3":
                            this.parseMPEGPES(o2, a2);
                            break;
                          case "ac3":
                            this.parseAC3PES(o2, a2);
                        }
                      g2 = { data: [], size: 0 };
                    }
                    g2 && (g2.data.push(e3.subarray(I2, k2 + sn)), g2.size += k2 + sn - I2);
                    break;
                  case f2:
                    b2 && (v2 && (a2 = cn(v2)) && this.parseID3PES(l2, a2), v2 = { data: [], size: 0 }), v2 && (v2.data.push(e3.subarray(I2, k2 + sn)), v2.size += k2 + sn - I2);
                    break;
                  case 0:
                    b2 && (I2 += e3[I2] + 1), y2 = this._pmtId = un(e3, I2);
                    break;
                  case y2:
                    b2 && (I2 += e3[I2] + 1);
                    var C2 = hn(e3, I2, this.typeSupported, i3);
                    (h2 = C2.videoPid) > 0 && (s2.pid = h2, s2.segmentCodec = C2.segmentVideoCodec), (c2 = C2.audioPid) > 0 && (o2.pid = c2, o2.segmentCodec = C2.segmentAudioCodec), (f2 = C2.id3Pid) > 0 && (l2.pid = f2), null === m2 || p2 || (w.warn("MPEG-TS PMT found at " + k2 + " after unknown PID '" + m2 + "'. Backtracking to sync byte @" + T2 + " to parse all TS packets."), m2 = null, k2 = T2 - 188), p2 = this.pmtParsed = true;
                    break;
                  case 17:
                  case 8191:
                    break;
                  default:
                    m2 = D2;
                }
              } else
                R2++;
            if (R2 > 0) {
              var _2 = new Error("Found " + R2 + " TS packet/s that do not start with 0x47");
              this.observer.emit(S.ERROR, S.ERROR, { type: L.MEDIA_ERROR, details: A.FRAG_PARSING_ERROR, fatal: false, error: _2, reason: _2.message });
            }
            s2.pesData = d2, o2.pesData = g2, l2.pesData = v2;
            var x2 = { audioTrack: o2, videoTrack: s2, id3Track: l2, textTrack: u2 };
            return n2 && this.extractRemainingSamples(x2), x2;
          }, e2.flush = function() {
            var t3, e3 = this.remainderData;
            return this.remainderData = null, t3 = e3 ? this.demux(e3, -1, false, true) : { videoTrack: this._videoTrack, audioTrack: this._audioTrack, id3Track: this._id3Track, textTrack: this._txtTrack }, this.extractRemainingSamples(t3), this.sampleAes ? this.decrypt(t3, this.sampleAes) : t3;
          }, e2.extractRemainingSamples = function(t3) {
            var e3, r3 = t3.audioTrack, i3 = t3.videoTrack, n2 = t3.id3Track, a2 = t3.textTrack, s2 = i3.pesData, o2 = r3.pesData, l2 = n2.pesData;
            if (s2 && (e3 = cn(s2)) ? (this.videoParser.parseAVCPES(i3, a2, e3, true, this._duration), i3.pesData = null) : i3.pesData = s2, o2 && (e3 = cn(o2))) {
              switch (r3.segmentCodec) {
                case "aac":
                  this.parseAACPES(r3, e3);
                  break;
                case "mp3":
                  this.parseMPEGPES(r3, e3);
                  break;
                case "ac3":
                  this.parseAC3PES(r3, e3);
              }
              r3.pesData = null;
            } else
              null != o2 && o2.size && w.log("last AAC PES packet truncated,might overlap between fragments"), r3.pesData = o2;
            l2 && (e3 = cn(l2)) ? (this.parseID3PES(n2, e3), n2.pesData = null) : n2.pesData = l2;
          }, e2.demuxSampleAes = function(t3, e3, r3) {
            var i3 = this.demux(t3, r3, true, !this.config.progressive), n2 = this.sampleAes = new an(this.observer, this.config, e3);
            return this.decrypt(i3, n2);
          }, e2.decrypt = function(t3, e3) {
            return new Promise(function(r3) {
              var i3 = t3.audioTrack, n2 = t3.videoTrack;
              i3.samples && "aac" === i3.segmentCodec ? e3.decryptAacSamples(i3.samples, 0, function() {
                n2.samples ? e3.decryptAvcSamples(n2.samples, 0, 0, function() {
                  r3(t3);
                }) : r3(t3);
              }) : n2.samples && e3.decryptAvcSamples(n2.samples, 0, 0, function() {
                r3(t3);
              });
            });
          }, e2.destroy = function() {
            this._duration = 0;
          }, e2.parseAACPES = function(t3, e3) {
            var r3, i3, n2, a2 = 0, s2 = this.aacOverFlow, o2 = e3.data;
            if (s2) {
              this.aacOverFlow = null;
              var l2 = s2.missing, u2 = s2.sample.unit.byteLength;
              if (-1 === l2)
                o2 = Kt(s2.sample.unit, o2);
              else {
                var h2 = u2 - l2;
                s2.sample.unit.set(o2.subarray(0, l2), h2), t3.samples.push(s2.sample), a2 = s2.missing;
              }
            }
            for (r3 = a2, i3 = o2.length; r3 < i3 - 1 && !Fi(o2, r3); r3++)
              ;
            if (r3 !== a2) {
              var d2, c2 = r3 < i3 - 1;
              d2 = c2 ? "AAC PES did not start with ADTS header,offset:" + r3 : "No ADTS header found in AAC PES";
              var f2 = new Error(d2);
              if (w.warn("parsing error: " + d2), this.observer.emit(S.ERROR, S.ERROR, { type: L.MEDIA_ERROR, details: A.FRAG_PARSING_ERROR, fatal: false, levelRetry: c2, error: f2, reason: d2 }), !c2)
                return;
            }
            if (Oi(t3, this.observer, o2, r3, this.audioCodec), void 0 !== e3.pts)
              n2 = e3.pts;
            else {
              if (!s2)
                return void w.warn("[tsdemuxer]: AAC PES unknown PTS");
              var g2 = Ni(t3.samplerate);
              n2 = s2.sample.pts + g2;
            }
            for (var v2, m2 = 0; r3 < i3; ) {
              if (r3 += (v2 = Ui(t3, o2, r3, n2, m2)).length, v2.missing) {
                this.aacOverFlow = v2;
                break;
              }
              for (m2++; r3 < i3 - 1 && !Fi(o2, r3); r3++)
                ;
            }
          }, e2.parseMPEGPES = function(t3, e3) {
            var r3 = e3.data, i3 = r3.length, n2 = 0, a2 = 0, s2 = e3.pts;
            if (void 0 !== s2)
              for (; a2 < i3; )
                if (qi(r3, a2)) {
                  var o2 = Yi(t3, r3, a2, s2, n2);
                  if (!o2)
                    break;
                  a2 += o2.length, n2++;
                } else
                  a2++;
            else
              w.warn("[tsdemuxer]: MPEG PES unknown PTS");
          }, e2.parseAC3PES = function(t3, e3) {
            var r3 = e3.data, i3 = e3.pts;
            if (void 0 !== i3)
              for (var n2, a2 = r3.length, s2 = 0, o2 = 0; o2 < a2 && (n2 = tn(t3, r3, o2, i3, s2++)) > 0; )
                o2 += n2;
            else
              w.warn("[tsdemuxer]: AC3 PES unknown PTS");
          }, e2.parseID3PES = function(t3, e3) {
            if (void 0 !== e3.pts) {
              var r3 = o({}, e3, { type: this._videoTrack ? He : Ge, duration: Number.POSITIVE_INFINITY });
              t3.samples.push(r3);
            } else
              w.warn("[tsdemuxer]: ID3 PES unknown PTS");
          }, t2;
        }();
        function ln(t2, e2) {
          return ((31 & t2[e2 + 1]) << 8) + t2[e2 + 2];
        }
        function un(t2, e2) {
          return (31 & t2[e2 + 10]) << 8 | t2[e2 + 11];
        }
        function hn(t2, e2, r3, i3) {
          var n2 = { audioPid: -1, videoPid: -1, id3Pid: -1, segmentVideoCodec: "avc", segmentAudioCodec: "aac" }, a2 = e2 + 3 + ((15 & t2[e2 + 1]) << 8 | t2[e2 + 2]) - 4;
          for (e2 += 12 + ((15 & t2[e2 + 10]) << 8 | t2[e2 + 11]); e2 < a2; ) {
            var s2 = ln(t2, e2), o2 = (15 & t2[e2 + 3]) << 8 | t2[e2 + 4];
            switch (t2[e2]) {
              case 207:
                if (!i3) {
                  dn("ADTS AAC");
                  break;
                }
              case 15:
                -1 === n2.audioPid && (n2.audioPid = s2);
                break;
              case 21:
                -1 === n2.id3Pid && (n2.id3Pid = s2);
                break;
              case 219:
                if (!i3) {
                  dn("H.264");
                  break;
                }
              case 27:
                -1 === n2.videoPid && (n2.videoPid = s2, n2.segmentVideoCodec = "avc");
                break;
              case 3:
              case 4:
                r3.mpeg || r3.mp3 ? -1 === n2.audioPid && (n2.audioPid = s2, n2.segmentAudioCodec = "mp3") : w.log("MPEG audio found, not supported in this browser");
                break;
              case 193:
                if (!i3) {
                  dn("AC-3");
                  break;
                }
              case 129:
                r3.ac3 ? -1 === n2.audioPid && (n2.audioPid = s2, n2.segmentAudioCodec = "ac3") : w.log("AC-3 audio found, not supported in this browser");
                break;
              case 6:
                if (-1 === n2.audioPid && o2 > 0)
                  for (var l2 = e2 + 5, u2 = o2; u2 > 2; ) {
                    106 === t2[l2] && (true !== r3.ac3 ? w.log("AC-3 audio found, not supported in this browser for now") : (n2.audioPid = s2, n2.segmentAudioCodec = "ac3"));
                    var h2 = t2[l2 + 1] + 2;
                    l2 += h2, u2 -= h2;
                  }
                break;
              case 194:
              case 135:
                w.warn("Unsupported EC-3 in M2TS found");
                break;
              case 36:
                w.warn("Unsupported HEVC in M2TS found");
            }
            e2 += o2 + 5;
          }
          return n2;
        }
        function dn(t2) {
          w.log(t2 + " with AES-128-CBC encryption found in unencrypted stream");
        }
        function cn(t2) {
          var e2, r3, i3, n2, a2, s2 = 0, o2 = t2.data;
          if (!t2 || 0 === t2.size)
            return null;
          for (; o2[0].length < 19 && o2.length > 1; )
            o2[0] = Kt(o2[0], o2[1]), o2.splice(1, 1);
          if (1 === ((e2 = o2[0])[0] << 16) + (e2[1] << 8) + e2[2]) {
            if ((r3 = (e2[4] << 8) + e2[5]) && r3 > t2.size - 6)
              return null;
            var l2 = e2[7];
            192 & l2 && (n2 = 536870912 * (14 & e2[9]) + 4194304 * (255 & e2[10]) + 16384 * (254 & e2[11]) + 128 * (255 & e2[12]) + (254 & e2[13]) / 2, 64 & l2 ? n2 - (a2 = 536870912 * (14 & e2[14]) + 4194304 * (255 & e2[15]) + 16384 * (254 & e2[16]) + 128 * (255 & e2[17]) + (254 & e2[18]) / 2) > 54e5 && (w.warn(Math.round((n2 - a2) / 9e4) + "s delta between PTS and DTS, align them"), n2 = a2) : a2 = n2);
            var u2 = (i3 = e2[8]) + 9;
            if (t2.size <= u2)
              return null;
            t2.size -= u2;
            for (var h2 = new Uint8Array(t2.size), d2 = 0, c2 = o2.length; d2 < c2; d2++) {
              var f2 = (e2 = o2[d2]).byteLength;
              if (u2) {
                if (u2 > f2) {
                  u2 -= f2;
                  continue;
                }
                e2 = e2.subarray(u2), f2 -= u2, u2 = 0;
              }
              h2.set(e2, s2), s2 += f2;
            }
            return r3 && (r3 -= i3 + 3), { data: h2, pts: n2, dts: a2, len: r3 };
          }
          return null;
        }
        var fn = function(t2) {
          function e2() {
            return t2.apply(this, arguments) || this;
          }
          l(e2, t2);
          var r3 = e2.prototype;
          return r3.resetInitSegment = function(e3, r4, i3, n2) {
            t2.prototype.resetInitSegment.call(this, e3, r4, i3, n2), this._audioTrack = { container: "audio/mpeg", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "mp3", samples: [], manifestCodec: r4, duration: n2, inputTimeScale: 9e4, dropped: 0 };
          }, e2.probe = function(t3) {
            if (!t3)
              return false;
            var e3 = lt(t3, 0), r4 = (null == e3 ? void 0 : e3.length) || 0;
            if (e3 && 11 === t3[r4] && 119 === t3[r4 + 1] && void 0 !== dt(e3) && $i(t3, r4) <= 16)
              return false;
            for (var i3 = t3.length; r4 < i3; r4++)
              if (Xi(t3, r4))
                return w.log("MPEG Audio sync word found !"), true;
            return false;
          }, r3.canParse = function(t3, e3) {
            return function(t4, e4) {
              return ji(t4, e4) && 4 <= t4.length - e4;
            }(t3, e3);
          }, r3.appendFrame = function(t3, e3, r4) {
            if (null !== this.basePTS)
              return Yi(t3, e3, r4, this.basePTS, this.frameIndex);
          }, e2;
        }(wi), gn = function() {
          function t2() {
          }
          return t2.getSilentFrame = function(t3, e2) {
            if ("mp4a.40.2" === t3) {
              if (1 === e2)
                return new Uint8Array([0, 200, 0, 128, 35, 128]);
              if (2 === e2)
                return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
              if (3 === e2)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
              if (4 === e2)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
              if (5 === e2)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
              if (6 === e2)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
            } else {
              if (1 === e2)
                return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
              if (2 === e2)
                return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
              if (3 === e2)
                return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            }
          }, t2;
        }(), vn = Math.pow(2, 32) - 1, mn = function() {
          function t2() {
          }
          return t2.init = function() {
            var e2;
            for (e2 in t2.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], dac3: [], "ac-3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] }, t2.types)
              t2.types.hasOwnProperty(e2) && (t2.types[e2] = [e2.charCodeAt(0), e2.charCodeAt(1), e2.charCodeAt(2), e2.charCodeAt(3)]);
            var r3 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), i3 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
            t2.HDLR_TYPES = { video: r3, audio: i3 };
            var n2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), a2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
            t2.STTS = t2.STSC = t2.STCO = a2, t2.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t2.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t2.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t2.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
            var s2 = new Uint8Array([105, 115, 111, 109]), o2 = new Uint8Array([97, 118, 99, 49]), l2 = new Uint8Array([0, 0, 0, 1]);
            t2.FTYP = t2.box(t2.types.ftyp, s2, l2, s2, o2), t2.DINF = t2.box(t2.types.dinf, t2.box(t2.types.dref, n2));
          }, t2.box = function(t3) {
            for (var e2 = 8, r3 = arguments.length, i3 = new Array(r3 > 1 ? r3 - 1 : 0), n2 = 1; n2 < r3; n2++)
              i3[n2 - 1] = arguments[n2];
            for (var a2 = i3.length, s2 = a2; a2--; )
              e2 += i3[a2].byteLength;
            var o2 = new Uint8Array(e2);
            for (o2[0] = e2 >> 24 & 255, o2[1] = e2 >> 16 & 255, o2[2] = e2 >> 8 & 255, o2[3] = 255 & e2, o2.set(t3, 4), a2 = 0, e2 = 8; a2 < s2; a2++)
              o2.set(i3[a2], e2), e2 += i3[a2].byteLength;
            return o2;
          }, t2.hdlr = function(e2) {
            return t2.box(t2.types.hdlr, t2.HDLR_TYPES[e2]);
          }, t2.mdat = function(e2) {
            return t2.box(t2.types.mdat, e2);
          }, t2.mdhd = function(e2, r3) {
            r3 *= e2;
            var i3 = Math.floor(r3 / (vn + 1)), n2 = Math.floor(r3 % (vn + 1));
            return t2.box(t2.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e2 >> 24 & 255, e2 >> 16 & 255, e2 >> 8 & 255, 255 & e2, i3 >> 24, i3 >> 16 & 255, i3 >> 8 & 255, 255 & i3, n2 >> 24, n2 >> 16 & 255, n2 >> 8 & 255, 255 & n2, 85, 196, 0, 0]));
          }, t2.mdia = function(e2) {
            return t2.box(t2.types.mdia, t2.mdhd(e2.timescale, e2.duration), t2.hdlr(e2.type), t2.minf(e2));
          }, t2.mfhd = function(e2) {
            return t2.box(t2.types.mfhd, new Uint8Array([0, 0, 0, 0, e2 >> 24, e2 >> 16 & 255, e2 >> 8 & 255, 255 & e2]));
          }, t2.minf = function(e2) {
            return "audio" === e2.type ? t2.box(t2.types.minf, t2.box(t2.types.smhd, t2.SMHD), t2.DINF, t2.stbl(e2)) : t2.box(t2.types.minf, t2.box(t2.types.vmhd, t2.VMHD), t2.DINF, t2.stbl(e2));
          }, t2.moof = function(e2, r3, i3) {
            return t2.box(t2.types.moof, t2.mfhd(e2), t2.traf(i3, r3));
          }, t2.moov = function(e2) {
            for (var r3 = e2.length, i3 = []; r3--; )
              i3[r3] = t2.trak(e2[r3]);
            return t2.box.apply(null, [t2.types.moov, t2.mvhd(e2[0].timescale, e2[0].duration)].concat(i3).concat(t2.mvex(e2)));
          }, t2.mvex = function(e2) {
            for (var r3 = e2.length, i3 = []; r3--; )
              i3[r3] = t2.trex(e2[r3]);
            return t2.box.apply(null, [t2.types.mvex].concat(i3));
          }, t2.mvhd = function(e2, r3) {
            r3 *= e2;
            var i3 = Math.floor(r3 / (vn + 1)), n2 = Math.floor(r3 % (vn + 1)), a2 = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e2 >> 24 & 255, e2 >> 16 & 255, e2 >> 8 & 255, 255 & e2, i3 >> 24, i3 >> 16 & 255, i3 >> 8 & 255, 255 & i3, n2 >> 24, n2 >> 16 & 255, n2 >> 8 & 255, 255 & n2, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
            return t2.box(t2.types.mvhd, a2);
          }, t2.sdtp = function(e2) {
            var r3, i3, n2 = e2.samples || [], a2 = new Uint8Array(4 + n2.length);
            for (r3 = 0; r3 < n2.length; r3++)
              i3 = n2[r3].flags, a2[r3 + 4] = i3.dependsOn << 4 | i3.isDependedOn << 2 | i3.hasRedundancy;
            return t2.box(t2.types.sdtp, a2);
          }, t2.stbl = function(e2) {
            return t2.box(t2.types.stbl, t2.stsd(e2), t2.box(t2.types.stts, t2.STTS), t2.box(t2.types.stsc, t2.STSC), t2.box(t2.types.stsz, t2.STSZ), t2.box(t2.types.stco, t2.STCO));
          }, t2.avc1 = function(e2) {
            var r3, i3, n2, a2 = [], s2 = [];
            for (r3 = 0; r3 < e2.sps.length; r3++)
              n2 = (i3 = e2.sps[r3]).byteLength, a2.push(n2 >>> 8 & 255), a2.push(255 & n2), a2 = a2.concat(Array.prototype.slice.call(i3));
            for (r3 = 0; r3 < e2.pps.length; r3++)
              n2 = (i3 = e2.pps[r3]).byteLength, s2.push(n2 >>> 8 & 255), s2.push(255 & n2), s2 = s2.concat(Array.prototype.slice.call(i3));
            var o2 = t2.box(t2.types.avcC, new Uint8Array([1, a2[3], a2[4], a2[5], 255, 224 | e2.sps.length].concat(a2).concat([e2.pps.length]).concat(s2))), l2 = e2.width, u2 = e2.height, h2 = e2.pixelRatio[0], d2 = e2.pixelRatio[1];
            return t2.box(t2.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l2 >> 8 & 255, 255 & l2, u2 >> 8 & 255, 255 & u2, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o2, t2.box(t2.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t2.box(t2.types.pasp, new Uint8Array([h2 >> 24, h2 >> 16 & 255, h2 >> 8 & 255, 255 & h2, d2 >> 24, d2 >> 16 & 255, d2 >> 8 & 255, 255 & d2])));
          }, t2.esds = function(t3) {
            var e2 = t3.config.length;
            return new Uint8Array([0, 0, 0, 0, 3, 23 + e2, 0, 1, 0, 4, 15 + e2, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e2]).concat(t3.config).concat([6, 1, 2]));
          }, t2.audioStsd = function(t3) {
            var e2 = t3.samplerate;
            return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t3.channelCount, 0, 16, 0, 0, 0, 0, e2 >> 8 & 255, 255 & e2, 0, 0]);
          }, t2.mp4a = function(e2) {
            return t2.box(t2.types.mp4a, t2.audioStsd(e2), t2.box(t2.types.esds, t2.esds(e2)));
          }, t2.mp3 = function(e2) {
            return t2.box(t2.types[".mp3"], t2.audioStsd(e2));
          }, t2.ac3 = function(e2) {
            return t2.box(t2.types["ac-3"], t2.audioStsd(e2), t2.box(t2.types.dac3, e2.config));
          }, t2.stsd = function(e2) {
            return "audio" === e2.type ? "mp3" === e2.segmentCodec && "mp3" === e2.codec ? t2.box(t2.types.stsd, t2.STSD, t2.mp3(e2)) : "ac3" === e2.segmentCodec ? t2.box(t2.types.stsd, t2.STSD, t2.ac3(e2)) : t2.box(t2.types.stsd, t2.STSD, t2.mp4a(e2)) : t2.box(t2.types.stsd, t2.STSD, t2.avc1(e2));
          }, t2.tkhd = function(e2) {
            var r3 = e2.id, i3 = e2.duration * e2.timescale, n2 = e2.width, a2 = e2.height, s2 = Math.floor(i3 / (vn + 1)), o2 = Math.floor(i3 % (vn + 1));
            return t2.box(t2.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r3 >> 24 & 255, r3 >> 16 & 255, r3 >> 8 & 255, 255 & r3, 0, 0, 0, 0, s2 >> 24, s2 >> 16 & 255, s2 >> 8 & 255, 255 & s2, o2 >> 24, o2 >> 16 & 255, o2 >> 8 & 255, 255 & o2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n2 >> 8 & 255, 255 & n2, 0, 0, a2 >> 8 & 255, 255 & a2, 0, 0]));
          }, t2.traf = function(e2, r3) {
            var i3 = t2.sdtp(e2), n2 = e2.id, a2 = Math.floor(r3 / (vn + 1)), s2 = Math.floor(r3 % (vn + 1));
            return t2.box(t2.types.traf, t2.box(t2.types.tfhd, new Uint8Array([0, 0, 0, 0, n2 >> 24, n2 >> 16 & 255, n2 >> 8 & 255, 255 & n2])), t2.box(t2.types.tfdt, new Uint8Array([1, 0, 0, 0, a2 >> 24, a2 >> 16 & 255, a2 >> 8 & 255, 255 & a2, s2 >> 24, s2 >> 16 & 255, s2 >> 8 & 255, 255 & s2])), t2.trun(e2, i3.length + 16 + 20 + 8 + 16 + 8 + 8), i3);
          }, t2.trak = function(e2) {
            return e2.duration = e2.duration || 4294967295, t2.box(t2.types.trak, t2.tkhd(e2), t2.mdia(e2));
          }, t2.trex = function(e2) {
            var r3 = e2.id;
            return t2.box(t2.types.trex, new Uint8Array([0, 0, 0, 0, r3 >> 24, r3 >> 16 & 255, r3 >> 8 & 255, 255 & r3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
          }, t2.trun = function(e2, r3) {
            var i3, n2, a2, s2, o2, l2, u2 = e2.samples || [], h2 = u2.length, d2 = 12 + 16 * h2, c2 = new Uint8Array(d2);
            for (r3 += 8 + d2, c2.set(["video" === e2.type ? 1 : 0, 0, 15, 1, h2 >>> 24 & 255, h2 >>> 16 & 255, h2 >>> 8 & 255, 255 & h2, r3 >>> 24 & 255, r3 >>> 16 & 255, r3 >>> 8 & 255, 255 & r3], 0), i3 = 0; i3 < h2; i3++)
              a2 = (n2 = u2[i3]).duration, s2 = n2.size, o2 = n2.flags, l2 = n2.cts, c2.set([a2 >>> 24 & 255, a2 >>> 16 & 255, a2 >>> 8 & 255, 255 & a2, s2 >>> 24 & 255, s2 >>> 16 & 255, s2 >>> 8 & 255, 255 & s2, o2.isLeading << 2 | o2.dependsOn, o2.isDependedOn << 6 | o2.hasRedundancy << 4 | o2.paddingValue << 1 | o2.isNonSync, 61440 & o2.degradPrio, 15 & o2.degradPrio, l2 >>> 24 & 255, l2 >>> 16 & 255, l2 >>> 8 & 255, 255 & l2], 12 + 16 * i3);
            return t2.box(t2.types.trun, c2);
          }, t2.initSegment = function(e2) {
            t2.types || t2.init();
            var r3 = t2.moov(e2);
            return Kt(t2.FTYP, r3);
          }, t2;
        }();
        mn.types = void 0, mn.HDLR_TYPES = void 0, mn.STTS = void 0, mn.STSC = void 0, mn.STCO = void 0, mn.STSZ = void 0, mn.VMHD = void 0, mn.SMHD = void 0, mn.STSD = void 0, mn.FTYP = void 0, mn.DINF = void 0;
        var pn = 9e4;
        function yn(t2, e2, r3, i3) {
          void 0 === r3 && (r3 = 1), void 0 === i3 && (i3 = false);
          var n2 = t2 * e2 * r3;
          return i3 ? Math.round(n2) : n2;
        }
        function En(t2, e2) {
          return void 0 === e2 && (e2 = false), yn(t2, 1e3, 1 / pn, e2);
        }
        var Tn = null, Sn = null, Ln = function() {
          function t2(t3, e3, r3, i3) {
            if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = false, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = false, this.isVideoContiguous = false, this.videoTrackConfig = void 0, this.observer = t3, this.config = e3, this.typeSupported = r3, this.ISGenerated = false, null === Tn) {
              var n2 = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
              Tn = n2 ? parseInt(n2[1]) : 0;
            }
            if (null === Sn) {
              var a2 = navigator.userAgent.match(/Safari\/(\d+)/i);
              Sn = a2 ? parseInt(a2[1]) : 0;
            }
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
            this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
          }, e2.resetTimeStamp = function(t3) {
            w.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t3;
          }, e2.resetNextTimestamp = function() {
            w.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = false, this.isAudioContiguous = false;
          }, e2.resetInitSegment = function() {
            w.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = false, this.videoTrackConfig = void 0;
          }, e2.getVideoStartPts = function(t3) {
            var e3 = false, r3 = t3.reduce(function(t4, r4) {
              var i3 = r4.pts - t4;
              return i3 < -4294967296 ? (e3 = true, An(t4, r4.pts)) : i3 > 0 ? t4 : r4.pts;
            }, t3[0].pts);
            return e3 && w.debug("PTS rollover detected"), r3;
          }, e2.remux = function(t3, e3, r3, i3, n2, a2, s2, o2) {
            var l2, u2, h2, d2, c2, f2, g2 = n2, v2 = n2, m2 = t3.pid > -1, p2 = e3.pid > -1, y2 = e3.samples.length, E2 = t3.samples.length > 0, T2 = s2 && y2 > 0 || y2 > 1;
            if ((!m2 || E2) && (!p2 || T2) || this.ISGenerated || s2) {
              if (this.ISGenerated) {
                var S2, L2, A2, R2, k2 = this.videoTrackConfig;
                !k2 || e3.width === k2.width && e3.height === k2.height && (null == (S2 = e3.pixelRatio) ? void 0 : S2[0]) === (null == (L2 = k2.pixelRatio) ? void 0 : L2[0]) && (null == (A2 = e3.pixelRatio) ? void 0 : A2[1]) === (null == (R2 = k2.pixelRatio) ? void 0 : R2[1]) || this.resetInitSegment();
              } else
                h2 = this.generateIS(t3, e3, n2, a2);
              var b2, D2 = this.isVideoContiguous, I2 = -1;
              if (T2 && (I2 = function(t4) {
                for (var e4 = 0; e4 < t4.length; e4++)
                  if (t4[e4].key)
                    return e4;
                return -1;
              }(e3.samples), !D2 && this.config.forceKeyFrameOnDiscontinuity))
                if (f2 = true, I2 > 0) {
                  w.warn("[mp4-remuxer]: Dropped " + I2 + " out of " + y2 + " video samples due to a missing keyframe");
                  var C2 = this.getVideoStartPts(e3.samples);
                  e3.samples = e3.samples.slice(I2), e3.dropped += I2, b2 = v2 += (e3.samples[0].pts - C2) / e3.inputTimeScale;
                } else
                  -1 === I2 && (w.warn("[mp4-remuxer]: No keyframe found out of " + y2 + " video samples"), f2 = false);
              if (this.ISGenerated) {
                if (E2 && T2) {
                  var _2 = this.getVideoStartPts(e3.samples), x2 = (An(t3.samples[0].pts, _2) - _2) / e3.inputTimeScale;
                  g2 += Math.max(0, x2), v2 += Math.max(0, -x2);
                }
                if (E2) {
                  if (t3.samplerate || (w.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), h2 = this.generateIS(t3, e3, n2, a2)), u2 = this.remuxAudio(t3, g2, this.isAudioContiguous, a2, p2 || T2 || o2 === Ce ? v2 : void 0), T2) {
                    var P2 = u2 ? u2.endPTS - u2.startPTS : 0;
                    e3.inputTimeScale || (w.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), h2 = this.generateIS(t3, e3, n2, a2)), l2 = this.remuxVideo(e3, v2, D2, P2);
                  }
                } else
                  T2 && (l2 = this.remuxVideo(e3, v2, D2, 0));
                l2 && (l2.firstKeyFrame = I2, l2.independent = -1 !== I2, l2.firstKeyFramePTS = b2);
              }
            }
            return this.ISGenerated && this._initPTS && this._initDTS && (r3.samples.length && (c2 = Rn(r3, n2, this._initPTS, this._initDTS)), i3.samples.length && (d2 = kn(i3, n2, this._initPTS))), { audio: u2, video: l2, initSegment: h2, independent: f2, text: d2, id3: c2 };
          }, e2.generateIS = function(t3, e3, r3, i3) {
            var n2, a2, s2, o2 = t3.samples, l2 = e3.samples, u2 = this.typeSupported, h2 = {}, d2 = this._initPTS, c2 = !d2 || i3, f2 = "audio/mp4";
            if (c2 && (n2 = a2 = 1 / 0), t3.config && o2.length) {
              switch (t3.timescale = t3.samplerate, t3.segmentCodec) {
                case "mp3":
                  u2.mpeg ? (f2 = "audio/mpeg", t3.codec = "") : u2.mp3 && (t3.codec = "mp3");
                  break;
                case "ac3":
                  t3.codec = "ac-3";
              }
              h2.audio = { id: "audio", container: f2, codec: t3.codec, initSegment: "mp3" === t3.segmentCodec && u2.mpeg ? new Uint8Array(0) : mn.initSegment([t3]), metadata: { channelCount: t3.channelCount } }, c2 && (s2 = t3.inputTimeScale, d2 && s2 === d2.timescale ? c2 = false : n2 = a2 = o2[0].pts - Math.round(s2 * r3));
            }
            if (e3.sps && e3.pps && l2.length) {
              if (e3.timescale = e3.inputTimeScale, h2.video = { id: "main", container: "video/mp4", codec: e3.codec, initSegment: mn.initSegment([e3]), metadata: { width: e3.width, height: e3.height } }, c2)
                if (s2 = e3.inputTimeScale, d2 && s2 === d2.timescale)
                  c2 = false;
                else {
                  var g2 = this.getVideoStartPts(l2), v2 = Math.round(s2 * r3);
                  a2 = Math.min(a2, An(l2[0].dts, g2) - v2), n2 = Math.min(n2, g2 - v2);
                }
              this.videoTrackConfig = { width: e3.width, height: e3.height, pixelRatio: e3.pixelRatio };
            }
            if (Object.keys(h2).length)
              return this.ISGenerated = true, c2 ? (this._initPTS = { baseTime: n2, timescale: s2 }, this._initDTS = { baseTime: a2, timescale: s2 }) : n2 = s2 = void 0, { tracks: h2, initPTS: n2, timescale: s2 };
          }, e2.remuxVideo = function(t3, e3, r3, i3) {
            var n2, a2, s2 = t3.inputTimeScale, l2 = t3.samples, u2 = [], h2 = l2.length, d2 = this._initPTS, c2 = this.nextAvcDts, f2 = 8, g2 = this.videoSampleDuration, v2 = Number.POSITIVE_INFINITY, m2 = Number.NEGATIVE_INFINITY, p2 = false;
            if (!r3 || null === c2) {
              var y2 = e3 * s2, E2 = l2[0].pts - An(l2[0].dts, l2[0].pts);
              Tn && null !== c2 && Math.abs(y2 - E2 - c2) < 15e3 ? r3 = true : c2 = y2 - E2;
            }
            for (var T2 = d2.baseTime * s2 / d2.timescale, R2 = 0; R2 < h2; R2++) {
              var k2 = l2[R2];
              k2.pts = An(k2.pts - T2, c2), k2.dts = An(k2.dts - T2, c2), k2.dts < l2[R2 > 0 ? R2 - 1 : R2].dts && (p2 = true);
            }
            p2 && l2.sort(function(t4, e4) {
              var r4 = t4.dts - e4.dts, i4 = t4.pts - e4.pts;
              return r4 || i4;
            }), n2 = l2[0].dts;
            var b2 = (a2 = l2[l2.length - 1].dts) - n2, D2 = b2 ? Math.round(b2 / (h2 - 1)) : g2 || t3.inputTimeScale / 30;
            if (r3) {
              var I2 = n2 - c2, C2 = I2 > D2, _2 = I2 < -1;
              if ((C2 || _2) && (C2 ? w.warn("AVC: " + En(I2, true) + " ms (" + I2 + "dts) hole between fragments detected at " + e3.toFixed(3)) : w.warn("AVC: " + En(-I2, true) + " ms (" + I2 + "dts) overlapping between fragments detected at " + e3.toFixed(3)), !_2 || c2 >= l2[0].pts || Tn)) {
                n2 = c2;
                var x2 = l2[0].pts - I2;
                if (C2)
                  l2[0].dts = n2, l2[0].pts = x2;
                else
                  for (var P2 = 0; P2 < l2.length && !(l2[P2].dts > x2); P2++)
                    l2[P2].dts -= I2, l2[P2].pts -= I2;
                w.log("Video: Initial PTS/DTS adjusted: " + En(x2, true) + "/" + En(n2, true) + ", delta: " + En(I2, true) + " ms");
              }
            }
            for (var F2 = 0, M2 = 0, O2 = n2 = Math.max(0, n2), N2 = 0; N2 < h2; N2++) {
              for (var U2 = l2[N2], B2 = U2.units, G2 = B2.length, K2 = 0, H2 = 0; H2 < G2; H2++)
                K2 += B2[H2].data.length;
              M2 += K2, F2 += G2, U2.length = K2, U2.dts < O2 ? (U2.dts = O2, O2 += D2 / 4 | 0 || 1) : O2 = U2.dts, v2 = Math.min(U2.pts, v2), m2 = Math.max(U2.pts, m2);
            }
            a2 = l2[h2 - 1].dts;
            var V2, Y2 = M2 + 4 * F2 + 8;
            try {
              V2 = new Uint8Array(Y2);
            } catch (t4) {
              return void this.observer.emit(S.ERROR, S.ERROR, { type: L.MUX_ERROR, details: A.REMUX_ALLOC_ERROR, fatal: false, error: t4, bytes: Y2, reason: "fail allocating video mdat " + Y2 });
            }
            var W2 = new DataView(V2.buffer);
            W2.setUint32(0, Y2), V2.set(mn.types.mdat, 4);
            for (var j2 = false, q2 = Number.POSITIVE_INFINITY, X2 = Number.POSITIVE_INFINITY, z2 = Number.NEGATIVE_INFINITY, Q2 = Number.NEGATIVE_INFINITY, J2 = 0; J2 < h2; J2++) {
              for (var $2 = l2[J2], Z2 = $2.units, tt2 = 0, et2 = 0, rt2 = Z2.length; et2 < rt2; et2++) {
                var it2 = Z2[et2], nt2 = it2.data, at2 = it2.data.byteLength;
                W2.setUint32(f2, at2), f2 += 4, V2.set(nt2, f2), f2 += at2, tt2 += 4 + at2;
              }
              var st2 = void 0;
              if (J2 < h2 - 1)
                g2 = l2[J2 + 1].dts - $2.dts, st2 = l2[J2 + 1].pts - $2.pts;
              else {
                var ot2 = this.config, lt2 = J2 > 0 ? $2.dts - l2[J2 - 1].dts : D2;
                if (st2 = J2 > 0 ? $2.pts - l2[J2 - 1].pts : D2, ot2.stretchShortVideoTrack && null !== this.nextAudioPts) {
                  var ut2 = Math.floor(ot2.maxBufferHole * s2), ht2 = (i3 ? v2 + i3 * s2 : this.nextAudioPts) - $2.pts;
                  ht2 > ut2 ? ((g2 = ht2 - lt2) < 0 ? g2 = lt2 : j2 = true, w.log("[mp4-remuxer]: It is approximately " + ht2 / 90 + " ms to the next segment; using duration " + g2 / 90 + " ms for the last video frame.")) : g2 = lt2;
                } else
                  g2 = lt2;
              }
              var dt2 = Math.round($2.pts - $2.dts);
              q2 = Math.min(q2, g2), z2 = Math.max(z2, g2), X2 = Math.min(X2, st2), Q2 = Math.max(Q2, st2), u2.push(new Dn($2.key, g2, tt2, dt2));
            }
            if (u2.length) {
              if (Tn) {
                if (Tn < 70) {
                  var ct2 = u2[0].flags;
                  ct2.dependsOn = 2, ct2.isNonSync = 0;
                }
              } else if (Sn && Q2 - X2 < z2 - q2 && D2 / z2 < 0.025 && 0 === u2[0].cts) {
                w.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
                for (var ft2 = n2, gt2 = 0, vt2 = u2.length; gt2 < vt2; gt2++) {
                  var mt2 = ft2 + u2[gt2].duration, pt2 = ft2 + u2[gt2].cts;
                  if (gt2 < vt2 - 1) {
                    var yt2 = mt2 + u2[gt2 + 1].cts;
                    u2[gt2].duration = yt2 - pt2;
                  } else
                    u2[gt2].duration = gt2 ? u2[gt2 - 1].duration : D2;
                  u2[gt2].cts = 0, ft2 = mt2;
                }
              }
            }
            g2 = j2 || !g2 ? D2 : g2, this.nextAvcDts = c2 = a2 + g2, this.videoSampleDuration = g2, this.isVideoContiguous = true;
            var Et2 = { data1: mn.moof(t3.sequenceNumber++, n2, o({}, t3, { samples: u2 })), data2: V2, startPTS: v2 / s2, endPTS: (m2 + g2) / s2, startDTS: n2 / s2, endDTS: c2 / s2, type: "video", hasAudio: false, hasVideo: true, nb: u2.length, dropped: t3.dropped };
            return t3.samples = [], t3.dropped = 0, Et2;
          }, e2.getSamplesPerFrame = function(t3) {
            switch (t3.segmentCodec) {
              case "mp3":
                return 1152;
              case "ac3":
                return 1536;
              default:
                return 1024;
            }
          }, e2.remuxAudio = function(t3, e3, r3, i3, n2) {
            var a2 = t3.inputTimeScale, s2 = a2 / (t3.samplerate ? t3.samplerate : a2), l2 = this.getSamplesPerFrame(t3), u2 = l2 * s2, h2 = this._initPTS, d2 = "mp3" === t3.segmentCodec && this.typeSupported.mpeg, c2 = [], f2 = void 0 !== n2, g2 = t3.samples, v2 = d2 ? 0 : 8, m2 = this.nextAudioPts || -1, p2 = e3 * a2, y2 = h2.baseTime * a2 / h2.timescale;
            if (this.isAudioContiguous = r3 = r3 || g2.length && m2 > 0 && (i3 && Math.abs(p2 - m2) < 9e3 || Math.abs(An(g2[0].pts - y2, p2) - m2) < 20 * u2), g2.forEach(function(t4) {
              t4.pts = An(t4.pts - y2, p2);
            }), !r3 || m2 < 0) {
              if (g2 = g2.filter(function(t4) {
                return t4.pts >= 0;
              }), !g2.length)
                return;
              m2 = 0 === n2 ? 0 : i3 && !f2 ? Math.max(0, p2) : g2[0].pts;
            }
            if ("aac" === t3.segmentCodec)
              for (var E2 = this.config.maxAudioFramesDrift, T2 = 0, R2 = m2; T2 < g2.length; T2++) {
                var k2 = g2[T2], b2 = k2.pts, D2 = b2 - R2, I2 = Math.abs(1e3 * D2 / a2);
                if (D2 <= -E2 * u2 && f2)
                  0 === T2 && (w.warn("Audio frame @ " + (b2 / a2).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * D2 / a2) + " ms."), this.nextAudioPts = m2 = R2 = b2);
                else if (D2 >= E2 * u2 && I2 < 1e4 && f2) {
                  var C2 = Math.round(D2 / u2);
                  (R2 = b2 - C2 * u2) < 0 && (C2--, R2 += u2), 0 === T2 && (this.nextAudioPts = m2 = R2), w.warn("[mp4-remuxer]: Injecting " + C2 + " audio frame @ " + (R2 / a2).toFixed(3) + "s due to " + Math.round(1e3 * D2 / a2) + " ms gap.");
                  for (var _2 = 0; _2 < C2; _2++) {
                    var x2 = Math.max(R2, 0), P2 = gn.getSilentFrame(t3.manifestCodec || t3.codec, t3.channelCount);
                    P2 || (w.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), P2 = k2.unit.subarray()), g2.splice(T2, 0, { unit: P2, pts: x2 }), R2 += u2, T2++;
                  }
                }
                k2.pts = R2, R2 += u2;
              }
            for (var F2, M2 = null, O2 = null, N2 = 0, U2 = g2.length; U2--; )
              N2 += g2[U2].unit.byteLength;
            for (var B2 = 0, G2 = g2.length; B2 < G2; B2++) {
              var K2 = g2[B2], H2 = K2.unit, V2 = K2.pts;
              if (null !== O2)
                c2[B2 - 1].duration = Math.round((V2 - O2) / s2);
              else {
                if (r3 && "aac" === t3.segmentCodec && (V2 = m2), M2 = V2, !(N2 > 0))
                  return;
                N2 += v2;
                try {
                  F2 = new Uint8Array(N2);
                } catch (t4) {
                  return void this.observer.emit(S.ERROR, S.ERROR, { type: L.MUX_ERROR, details: A.REMUX_ALLOC_ERROR, fatal: false, error: t4, bytes: N2, reason: "fail allocating audio mdat " + N2 });
                }
                d2 || (new DataView(F2.buffer).setUint32(0, N2), F2.set(mn.types.mdat, 4));
              }
              F2.set(H2, v2);
              var Y2 = H2.byteLength;
              v2 += Y2, c2.push(new Dn(true, l2, Y2, 0)), O2 = V2;
            }
            var W2 = c2.length;
            if (W2) {
              var j2 = c2[c2.length - 1];
              this.nextAudioPts = m2 = O2 + s2 * j2.duration;
              var q2 = d2 ? new Uint8Array(0) : mn.moof(t3.sequenceNumber++, M2 / s2, o({}, t3, { samples: c2 }));
              t3.samples = [];
              var X2 = M2 / a2, z2 = m2 / a2, Q2 = { data1: q2, data2: F2, startPTS: X2, endPTS: z2, startDTS: X2, endDTS: z2, type: "audio", hasAudio: true, hasVideo: false, nb: W2 };
              return this.isAudioContiguous = true, Q2;
            }
          }, e2.remuxEmptyAudio = function(t3, e3, r3, i3) {
            var n2 = t3.inputTimeScale, a2 = n2 / (t3.samplerate ? t3.samplerate : n2), s2 = this.nextAudioPts, o2 = this._initDTS, l2 = 9e4 * o2.baseTime / o2.timescale, u2 = (null !== s2 ? s2 : i3.startDTS * n2) + l2, h2 = i3.endDTS * n2 + l2, d2 = 1024 * a2, c2 = Math.ceil((h2 - u2) / d2), f2 = gn.getSilentFrame(t3.manifestCodec || t3.codec, t3.channelCount);
            if (w.warn("[mp4-remuxer]: remux empty Audio"), f2) {
              for (var g2 = [], v2 = 0; v2 < c2; v2++) {
                var m2 = u2 + v2 * d2;
                g2.push({ unit: f2, pts: m2, dts: m2 });
              }
              return t3.samples = g2, this.remuxAudio(t3, e3, r3, false);
            }
            w.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
          }, t2;
        }();
        function An(t2, e2) {
          var r3;
          if (null === e2)
            return t2;
          for (r3 = e2 < t2 ? -8589934592 : 8589934592; Math.abs(t2 - e2) > 4294967296; )
            t2 += r3;
          return t2;
        }
        function Rn(t2, e2, r3, i3) {
          var n2 = t2.samples.length;
          if (n2) {
            for (var a2 = t2.inputTimeScale, s2 = 0; s2 < n2; s2++) {
              var o2 = t2.samples[s2];
              o2.pts = An(o2.pts - r3.baseTime * a2 / r3.timescale, e2 * a2) / a2, o2.dts = An(o2.dts - i3.baseTime * a2 / i3.timescale, e2 * a2) / a2;
            }
            var l2 = t2.samples;
            return t2.samples = [], { samples: l2 };
          }
        }
        function kn(t2, e2, r3) {
          var i3 = t2.samples.length;
          if (i3) {
            for (var n2 = t2.inputTimeScale, a2 = 0; a2 < i3; a2++) {
              var s2 = t2.samples[a2];
              s2.pts = An(s2.pts - r3.baseTime * n2 / r3.timescale, e2 * n2) / n2;
            }
            t2.samples.sort(function(t3, e3) {
              return t3.pts - e3.pts;
            });
            var o2 = t2.samples;
            return t2.samples = [], { samples: o2 };
          }
        }
        var bn, Dn = function(t2, e2, r3, i3) {
          this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e2, this.size = r3, this.cts = i3, this.flags = { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: t2 ? 2 : 1, isNonSync: t2 ? 0 : 1 };
        }, In = function() {
          function t2() {
            this.emitInitSegment = false, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null;
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
          }, e2.resetTimeStamp = function(t3) {
            this.initPTS = t3, this.lastEndTime = null;
          }, e2.resetNextTimestamp = function() {
            this.lastEndTime = null;
          }, e2.resetInitSegment = function(t3, e3, r3, i3) {
            this.audioCodec = e3, this.videoCodec = r3, this.generateInitSegment(function(t4, e4) {
              if (!t4 || !e4)
                return t4;
              var r4 = e4.keyId;
              return r4 && e4.isCommonEncryption && xt(t4, ["moov", "trak"]).forEach(function(t5) {
                var e5 = xt(t5, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8), i4 = xt(e5, ["enca"]), n2 = i4.length > 0;
                n2 || (i4 = xt(e5, ["encv"])), i4.forEach(function(t6) {
                  xt(n2 ? t6.subarray(28) : t6.subarray(78), ["sinf"]).forEach(function(t7) {
                    var e6 = Bt(t7);
                    if (e6) {
                      var i5 = e6.subarray(8, 24);
                      i5.some(function(t8) {
                        return 0 !== t8;
                      }) || (w.log("[eme] Patching keyId in 'enc" + (n2 ? "a" : "v") + ">sinf>>tenc' box: " + Lt(i5) + " -> " + Lt(r4)), e6.set(r4, 8));
                    }
                  });
                });
              }), t4;
            }(t3, i3)), this.emitInitSegment = true;
          }, e2.generateInitSegment = function(t3) {
            var e3 = this.audioCodec, r3 = this.videoCodec;
            if (null == t3 || !t3.byteLength)
              return this.initTracks = void 0, void (this.initData = void 0);
            var i3 = this.initData = Ft(t3);
            i3.audio && (e3 = wn(i3.audio, O)), i3.video && (r3 = wn(i3.video, N));
            var n2 = {};
            i3.audio && i3.video ? n2.audiovideo = { container: "video/mp4", codec: e3 + "," + r3, initSegment: t3, id: "main" } : i3.audio ? n2.audio = { container: "audio/mp4", codec: e3, initSegment: t3, id: "audio" } : i3.video ? n2.video = { container: "video/mp4", codec: r3, initSegment: t3, id: "main" } : w.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = n2;
          }, e2.remux = function(t3, e3, r3, i3, n2, a2) {
            var s2, o2, l2 = this.initPTS, u2 = this.lastEndTime, h2 = { audio: void 0, video: void 0, text: i3, id3: r3, initSegment: void 0 };
            y(u2) || (u2 = this.lastEndTime = n2 || 0);
            var d2 = e3.samples;
            if (null == d2 || !d2.length)
              return h2;
            var c2 = { initPTS: void 0, timescale: 1 }, f2 = this.initData;
            if (null != (s2 = f2) && s2.length || (this.generateInitSegment(d2), f2 = this.initData), null == (o2 = f2) || !o2.length)
              return w.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), h2;
            this.emitInitSegment && (c2.tracks = this.initTracks, this.emitInitSegment = false);
            var g2 = function(t4, e4) {
              for (var r4 = 0, i4 = 0, n3 = 0, a3 = xt(t4, ["moof", "traf"]), s3 = 0; s3 < a3.length; s3++) {
                var o3 = a3[s3], l3 = xt(o3, ["tfhd"])[0], u3 = e4[It(l3, 4)];
                if (u3) {
                  var h3 = u3.default, d3 = It(l3, 0) | (null == h3 ? void 0 : h3.flags), c3 = null == h3 ? void 0 : h3.duration;
                  8 & d3 && (c3 = It(l3, 2 & d3 ? 12 : 8));
                  for (var f3 = u3.timescale || 9e4, g3 = xt(o3, ["trun"]), v3 = 0; v3 < g3.length; v3++)
                    !(r4 = Gt(g3[v3])) && c3 && (r4 = c3 * It(g3[v3], 4)), u3.type === N ? i4 += r4 / f3 : u3.type === O && (n3 += r4 / f3);
                }
              }
              if (0 === i4 && 0 === n3) {
                for (var m3 = 1 / 0, p3 = 0, E3 = 0, T3 = xt(t4, ["sidx"]), S3 = 0; S3 < T3.length; S3++) {
                  var L3 = Pt(T3[S3]);
                  if (null != L3 && L3.references) {
                    m3 = Math.min(m3, L3.earliestPresentationTime / L3.timescale);
                    var A3 = L3.references.reduce(function(t5, e5) {
                      return t5 + e5.info.duration || 0;
                    }, 0);
                    E3 = (p3 = Math.max(p3, A3 + L3.earliestPresentationTime / L3.timescale)) - m3;
                  }
                }
                if (E3 && y(E3))
                  return E3;
              }
              return i4 || n3;
            }(d2, f2), v2 = function(t4, e4) {
              return xt(e4, ["moof", "traf"]).reduce(function(e5, r4) {
                var i4 = xt(r4, ["tfdt"])[0], n3 = i4[0], a3 = xt(r4, ["tfhd"]).reduce(function(e6, r5) {
                  var a4 = It(r5, 4), s3 = t4[a4];
                  if (s3) {
                    var o3 = It(i4, 4);
                    if (1 === n3) {
                      if (o3 === At)
                        return w.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), e6;
                      o3 *= At + 1, o3 += It(i4, 8);
                    }
                    var l3 = o3 / (s3.timescale || 9e4);
                    if (y(l3) && (null === e6 || l3 < e6))
                      return l3;
                  }
                  return e6;
                }, null);
                return null !== a3 && y(a3) && (null === e5 || a3 < e5) ? a3 : e5;
              }, null);
            }(f2, d2), m2 = null === v2 ? n2 : v2;
            (function(t4, e4, r4, i4) {
              if (null === t4)
                return true;
              var n3 = Math.max(i4, 1), a3 = e4 - t4.baseTime / t4.timescale;
              return Math.abs(a3 - r4) > n3;
            }(l2, m2, n2, g2) || c2.timescale !== l2.timescale && a2) && (c2.initPTS = m2 - n2, l2 && 1 === l2.timescale && w.warn("Adjusting initPTS by " + (c2.initPTS - l2.baseTime)), this.initPTS = l2 = { baseTime: c2.initPTS, timescale: 1 });
            var p2 = t3 ? m2 - l2.baseTime / l2.timescale : u2, E2 = p2 + g2;
            !function(t4, e4, r4) {
              xt(e4, ["moof", "traf"]).forEach(function(e5) {
                xt(e5, ["tfhd"]).forEach(function(i4) {
                  var n3 = It(i4, 4), a3 = t4[n3];
                  if (a3) {
                    var s3 = a3.timescale || 9e4;
                    xt(e5, ["tfdt"]).forEach(function(t5) {
                      var e6 = t5[0], i5 = r4 * s3;
                      if (i5) {
                        var n4 = It(t5, 4);
                        if (0 === e6)
                          n4 -= i5, _t(t5, 4, n4 = Math.max(n4, 0));
                        else {
                          n4 *= Math.pow(2, 32), n4 += It(t5, 8), n4 -= i5, n4 = Math.max(n4, 0);
                          var a4 = Math.floor(n4 / (At + 1)), o3 = Math.floor(n4 % (At + 1));
                          _t(t5, 4, a4), _t(t5, 8, o3);
                        }
                      }
                    });
                  }
                });
              });
            }(f2, d2, l2.baseTime / l2.timescale), g2 > 0 ? this.lastEndTime = E2 : (w.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
            var T2 = !!f2.audio, S2 = !!f2.video, L2 = "";
            T2 && (L2 += "audio"), S2 && (L2 += "video");
            var A2 = { data1: d2, startPTS: p2, startDTS: p2, endPTS: E2, endDTS: E2, type: L2, hasAudio: T2, hasVideo: S2, nb: 1, dropped: 0 };
            return h2.audio = "audio" === A2.type ? A2 : void 0, h2.video = "audio" !== A2.type ? A2 : void 0, h2.initSegment = c2, h2.id3 = Rn(r3, n2, l2, l2), i3.samples.length && (h2.text = kn(i3, n2, l2)), h2;
          }, t2;
        }();
        function wn(t2, e2) {
          var r3 = null == t2 ? void 0 : t2.codec;
          if (r3 && r3.length > 4)
            return r3;
          if (e2 === O) {
            if ("ec-3" === r3 || "ac-3" === r3 || "alac" === r3)
              return r3;
            if ("fLaC" === r3 || "Opus" === r3)
              return he(r3, false);
            var i3 = "mp4a.40.5";
            return w.info('Parsed audio codec "' + r3 + '" or audio object type not handled. Using "' + i3 + '"'), i3;
          }
          return w.warn('Unhandled video codec "' + r3 + '"'), "hvc1" === r3 || "hev1" === r3 ? "hvc1.1.6.L120.90" : "av01" === r3 ? "av01.0.04M.08" : "avc1.42e01e";
        }
        try {
          bn = self.performance.now.bind(self.performance);
        } catch (t2) {
          w.debug("Unable to use Performance API on this environment"), bn = null == j ? void 0 : j.Date.now;
        }
        var Cn = [{ demux: Ji, remux: In }, { demux: on, remux: Ln }, { demux: zi, remux: Ln }, { demux: fn, remux: Ln }];
        Cn.splice(2, 0, { demux: Zi, remux: Ln });
        var _n = function() {
          function t2(t3, e3, r3, i3, n2) {
            this.async = false, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = t3, this.typeSupported = e3, this.config = r3, this.vendor = i3, this.id = n2;
          }
          var e2 = t2.prototype;
          return e2.configure = function(t3) {
            this.transmuxConfig = t3, this.decrypter && this.decrypter.reset();
          }, e2.push = function(t3, e3, r3, i3) {
            var n2 = this, a2 = r3.transmuxing;
            a2.executeStart = bn();
            var s2 = new Uint8Array(t3), o2 = this.currentTransmuxState, l2 = this.transmuxConfig;
            i3 && (this.currentTransmuxState = i3);
            var u2 = i3 || o2, h2 = u2.contiguous, d2 = u2.discontinuity, c2 = u2.trackSwitch, f2 = u2.accurateTimeOffset, g2 = u2.timeOffset, v2 = u2.initSegmentChange, m2 = l2.audioCodec, p2 = l2.videoCodec, y2 = l2.defaultInitPts, E2 = l2.duration, T2 = l2.initSegmentData, R2 = function(t4, e4) {
              var r4 = null;
              return t4.byteLength > 0 && null != (null == e4 ? void 0 : e4.key) && null !== e4.iv && null != e4.method && (r4 = e4), r4;
            }(s2, e3);
            if (R2 && "AES-128" === R2.method) {
              var k2 = this.getDecrypter();
              if (!k2.isSync())
                return this.decryptionPromise = k2.webCryptoDecrypt(s2, R2.key.buffer, R2.iv.buffer).then(function(t4) {
                  var e4 = n2.push(t4, null, r3);
                  return n2.decryptionPromise = null, e4;
                }), this.decryptionPromise;
              var b2 = k2.softwareDecrypt(s2, R2.key.buffer, R2.iv.buffer);
              if (r3.part > -1 && (b2 = k2.flush()), !b2)
                return a2.executeEnd = bn(), xn(r3);
              s2 = new Uint8Array(b2);
            }
            var D2 = this.needsProbing(d2, c2);
            if (D2) {
              var I2 = this.configureTransmuxer(s2);
              if (I2)
                return w.warn("[transmuxer] " + I2.message), this.observer.emit(S.ERROR, S.ERROR, { type: L.MEDIA_ERROR, details: A.FRAG_PARSING_ERROR, fatal: false, error: I2, reason: I2.message }), a2.executeEnd = bn(), xn(r3);
            }
            (d2 || c2 || v2 || D2) && this.resetInitSegment(T2, m2, p2, E2, e3), (d2 || v2 || D2) && this.resetInitialTimestamp(y2), h2 || this.resetContiguity();
            var C2 = this.transmux(s2, R2, g2, f2, r3), _2 = this.currentTransmuxState;
            return _2.contiguous = true, _2.discontinuity = false, _2.trackSwitch = false, a2.executeEnd = bn(), C2;
          }, e2.flush = function(t3) {
            var e3 = this, r3 = t3.transmuxing;
            r3.executeStart = bn();
            var i3 = this.decrypter, n2 = this.currentTransmuxState, a2 = this.decryptionPromise;
            if (a2)
              return a2.then(function() {
                return e3.flush(t3);
              });
            var s2 = [], o2 = n2.timeOffset;
            if (i3) {
              var l2 = i3.flush();
              l2 && s2.push(this.push(l2, null, t3));
            }
            var u2 = this.demuxer, h2 = this.remuxer;
            if (!u2 || !h2)
              return r3.executeEnd = bn(), [xn(t3)];
            var d2 = u2.flush(o2);
            return Pn(d2) ? d2.then(function(r4) {
              return e3.flushRemux(s2, r4, t3), s2;
            }) : (this.flushRemux(s2, d2, t3), s2);
          }, e2.flushRemux = function(t3, e3, r3) {
            var i3 = e3.audioTrack, n2 = e3.videoTrack, a2 = e3.id3Track, s2 = e3.textTrack, o2 = this.currentTransmuxState, l2 = o2.accurateTimeOffset, u2 = o2.timeOffset;
            w.log("[transmuxer.ts]: Flushed fragment " + r3.sn + (r3.part > -1 ? " p: " + r3.part : "") + " of level " + r3.level);
            var h2 = this.remuxer.remux(i3, n2, a2, s2, u2, l2, true, this.id);
            t3.push({ remuxResult: h2, chunkMeta: r3 }), r3.transmuxing.executeEnd = bn();
          }, e2.resetInitialTimestamp = function(t3) {
            var e3 = this.demuxer, r3 = this.remuxer;
            e3 && r3 && (e3.resetTimeStamp(t3), r3.resetTimeStamp(t3));
          }, e2.resetContiguity = function() {
            var t3 = this.demuxer, e3 = this.remuxer;
            t3 && e3 && (t3.resetContiguity(), e3.resetNextTimestamp());
          }, e2.resetInitSegment = function(t3, e3, r3, i3, n2) {
            var a2 = this.demuxer, s2 = this.remuxer;
            a2 && s2 && (a2.resetInitSegment(t3, e3, r3, i3), s2.resetInitSegment(t3, e3, r3, n2));
          }, e2.destroy = function() {
            this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
          }, e2.transmux = function(t3, e3, r3, i3, n2) {
            return e3 && "SAMPLE-AES" === e3.method ? this.transmuxSampleAes(t3, e3, r3, i3, n2) : this.transmuxUnencrypted(t3, r3, i3, n2);
          }, e2.transmuxUnencrypted = function(t3, e3, r3, i3) {
            var n2 = this.demuxer.demux(t3, e3, false, !this.config.progressive), a2 = n2.audioTrack, s2 = n2.videoTrack, o2 = n2.id3Track, l2 = n2.textTrack;
            return { remuxResult: this.remuxer.remux(a2, s2, o2, l2, e3, r3, false, this.id), chunkMeta: i3 };
          }, e2.transmuxSampleAes = function(t3, e3, r3, i3, n2) {
            var a2 = this;
            return this.demuxer.demuxSampleAes(t3, e3, r3).then(function(t4) {
              return { remuxResult: a2.remuxer.remux(t4.audioTrack, t4.videoTrack, t4.id3Track, t4.textTrack, r3, i3, false, a2.id), chunkMeta: n2 };
            });
          }, e2.configureTransmuxer = function(t3) {
            for (var e3, r3 = this.config, i3 = this.observer, n2 = this.typeSupported, a2 = this.vendor, s2 = 0, o2 = Cn.length; s2 < o2; s2++) {
              var l2;
              if (null != (l2 = Cn[s2].demux) && l2.probe(t3)) {
                e3 = Cn[s2];
                break;
              }
            }
            if (!e3)
              return new Error("Failed to find demuxer by probing fragment data");
            var u2 = this.demuxer, h2 = this.remuxer, d2 = e3.remux, c2 = e3.demux;
            h2 && h2 instanceof d2 || (this.remuxer = new d2(i3, r3, n2, a2)), u2 && u2 instanceof c2 || (this.demuxer = new c2(i3, r3, n2), this.probe = c2.probe);
          }, e2.needsProbing = function(t3, e3) {
            return !this.demuxer || !this.remuxer || t3 || e3;
          }, e2.getDecrypter = function() {
            var t3 = this.decrypter;
            return t3 || (t3 = this.decrypter = new ci(this.config)), t3;
          }, t2;
        }(), xn = function(t2) {
          return { remuxResult: {}, chunkMeta: t2 };
        };
        function Pn(t2) {
          return "then" in t2 && t2.then instanceof Function;
        }
        var Fn = function(t2, e2, r3, i3, n2) {
          this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t2, this.videoCodec = e2, this.initSegmentData = r3, this.duration = i3, this.defaultInitPts = n2 || null;
        }, Mn = function(t2, e2, r3, i3, n2, a2) {
          this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = t2, this.contiguous = e2, this.accurateTimeOffset = r3, this.trackSwitch = i3, this.timeOffset = n2, this.initSegmentChange = a2;
        }, On = { exports: {} };
        !function(t2) {
          var e2 = Object.prototype.hasOwnProperty, r3 = "~";
          function i3() {
          }
          function n2(t3, e3, r4) {
            this.fn = t3, this.context = e3, this.once = r4 || false;
          }
          function a2(t3, e3, i4, a3, s3) {
            if ("function" != typeof i4)
              throw new TypeError("The listener must be a function");
            var o3 = new n2(i4, a3 || t3, s3), l2 = r3 ? r3 + e3 : e3;
            return t3._events[l2] ? t3._events[l2].fn ? t3._events[l2] = [t3._events[l2], o3] : t3._events[l2].push(o3) : (t3._events[l2] = o3, t3._eventsCount++), t3;
          }
          function s2(t3, e3) {
            0 == --t3._eventsCount ? t3._events = new i3() : delete t3._events[e3];
          }
          function o2() {
            this._events = new i3(), this._eventsCount = 0;
          }
          Object.create && (i3.prototype = /* @__PURE__ */ Object.create(null), new i3().__proto__ || (r3 = false)), o2.prototype.eventNames = function() {
            var t3, i4, n3 = [];
            if (0 === this._eventsCount)
              return n3;
            for (i4 in t3 = this._events)
              e2.call(t3, i4) && n3.push(r3 ? i4.slice(1) : i4);
            return Object.getOwnPropertySymbols ? n3.concat(Object.getOwnPropertySymbols(t3)) : n3;
          }, o2.prototype.listeners = function(t3) {
            var e3 = r3 ? r3 + t3 : t3, i4 = this._events[e3];
            if (!i4)
              return [];
            if (i4.fn)
              return [i4.fn];
            for (var n3 = 0, a3 = i4.length, s3 = new Array(a3); n3 < a3; n3++)
              s3[n3] = i4[n3].fn;
            return s3;
          }, o2.prototype.listenerCount = function(t3) {
            var e3 = r3 ? r3 + t3 : t3, i4 = this._events[e3];
            return i4 ? i4.fn ? 1 : i4.length : 0;
          }, o2.prototype.emit = function(t3, e3, i4, n3, a3, s3) {
            var o3 = r3 ? r3 + t3 : t3;
            if (!this._events[o3])
              return false;
            var l2, u2, h2 = this._events[o3], d2 = arguments.length;
            if (h2.fn) {
              switch (h2.once && this.removeListener(t3, h2.fn, void 0, true), d2) {
                case 1:
                  return h2.fn.call(h2.context), true;
                case 2:
                  return h2.fn.call(h2.context, e3), true;
                case 3:
                  return h2.fn.call(h2.context, e3, i4), true;
                case 4:
                  return h2.fn.call(h2.context, e3, i4, n3), true;
                case 5:
                  return h2.fn.call(h2.context, e3, i4, n3, a3), true;
                case 6:
                  return h2.fn.call(h2.context, e3, i4, n3, a3, s3), true;
              }
              for (u2 = 1, l2 = new Array(d2 - 1); u2 < d2; u2++)
                l2[u2 - 1] = arguments[u2];
              h2.fn.apply(h2.context, l2);
            } else {
              var c2, f2 = h2.length;
              for (u2 = 0; u2 < f2; u2++)
                switch (h2[u2].once && this.removeListener(t3, h2[u2].fn, void 0, true), d2) {
                  case 1:
                    h2[u2].fn.call(h2[u2].context);
                    break;
                  case 2:
                    h2[u2].fn.call(h2[u2].context, e3);
                    break;
                  case 3:
                    h2[u2].fn.call(h2[u2].context, e3, i4);
                    break;
                  case 4:
                    h2[u2].fn.call(h2[u2].context, e3, i4, n3);
                    break;
                  default:
                    if (!l2)
                      for (c2 = 1, l2 = new Array(d2 - 1); c2 < d2; c2++)
                        l2[c2 - 1] = arguments[c2];
                    h2[u2].fn.apply(h2[u2].context, l2);
                }
            }
            return true;
          }, o2.prototype.on = function(t3, e3, r4) {
            return a2(this, t3, e3, r4, false);
          }, o2.prototype.once = function(t3, e3, r4) {
            return a2(this, t3, e3, r4, true);
          }, o2.prototype.removeListener = function(t3, e3, i4, n3) {
            var a3 = r3 ? r3 + t3 : t3;
            if (!this._events[a3])
              return this;
            if (!e3)
              return s2(this, a3), this;
            var o3 = this._events[a3];
            if (o3.fn)
              o3.fn !== e3 || n3 && !o3.once || i4 && o3.context !== i4 || s2(this, a3);
            else {
              for (var l2 = 0, u2 = [], h2 = o3.length; l2 < h2; l2++)
                (o3[l2].fn !== e3 || n3 && !o3[l2].once || i4 && o3[l2].context !== i4) && u2.push(o3[l2]);
              u2.length ? this._events[a3] = 1 === u2.length ? u2[0] : u2 : s2(this, a3);
            }
            return this;
          }, o2.prototype.removeAllListeners = function(t3) {
            var e3;
            return t3 ? (e3 = r3 ? r3 + t3 : t3, this._events[e3] && s2(this, e3)) : (this._events = new i3(), this._eventsCount = 0), this;
          }, o2.prototype.off = o2.prototype.removeListener, o2.prototype.addListener = o2.prototype.on, o2.prefixed = r3, o2.EventEmitter = o2, t2.exports = o2;
        }(On);
        var Nn = v(On.exports);
        function Un(t2, e2) {
          if (!((r3 = e2.remuxResult).audio || r3.video || r3.text || r3.id3 || r3.initSegment))
            return false;
          var r3, i3 = [], n2 = e2.remuxResult, a2 = n2.audio, s2 = n2.video;
          return a2 && Bn(i3, a2), s2 && Bn(i3, s2), t2.postMessage({ event: "transmuxComplete", data: e2 }, i3), true;
        }
        function Bn(t2, e2) {
          e2.data1 && t2.push(e2.data1.buffer), e2.data2 && t2.push(e2.data2.buffer);
        }
        function Gn(t2, e2, r3) {
          e2.reduce(function(e3, r4) {
            return Un(t2, r4) || e3;
          }, false) || t2.postMessage({ event: "transmuxComplete", data: e2[0] }), t2.postMessage({ event: "flush", data: r3 });
        }
        void 0 !== e && e && function(t2) {
          var e2 = new Nn(), r3 = function(e3, r4) {
            t2.postMessage({ event: e3, data: r4 });
          };
          e2.on(S.FRAG_DECRYPTED, r3), e2.on(S.ERROR, r3);
          var i3 = function() {
            var t3 = function(t4) {
              var e4 = function(e5) {
                r3("workerLog", { logType: t4, message: e5 });
              };
              w[t4] = e4;
            };
            for (var e3 in w)
              t3(e3);
          };
          t2.addEventListener("message", function(n2) {
            var a2 = n2.data;
            switch (a2.cmd) {
              case "init":
                var s2 = JSON.parse(a2.config);
                t2.transmuxer = new _n(e2, a2.typeSupported, s2, a2.vendor, a2.id), I(s2.debug, a2.id), i3(), r3("init", null);
                break;
              case "configure":
                t2.transmuxer.configure(a2.config);
                break;
              case "demux":
                var o2 = t2.transmuxer.push(a2.data, a2.decryptdata, a2.chunkMeta, a2.state);
                Pn(o2) ? (t2.transmuxer.async = true, o2.then(function(e3) {
                  Un(t2, e3);
                }).catch(function(t3) {
                  r3(S.ERROR, { type: L.MEDIA_ERROR, details: A.FRAG_PARSING_ERROR, chunkMeta: a2.chunkMeta, fatal: false, error: t3, err: t3, reason: "transmuxer-worker push error" });
                })) : (t2.transmuxer.async = false, Un(t2, o2));
                break;
              case "flush":
                var l2 = a2.chunkMeta, u2 = t2.transmuxer.flush(l2);
                Pn(u2) || t2.transmuxer.async ? (Pn(u2) || (u2 = Promise.resolve(u2)), u2.then(function(e3) {
                  Gn(t2, e3, l2);
                }).catch(function(t3) {
                  r3(S.ERROR, { type: L.MEDIA_ERROR, details: A.FRAG_PARSING_ERROR, chunkMeta: a2.chunkMeta, fatal: false, error: t3, err: t3, reason: "transmuxer-worker flush error" });
                })) : Gn(t2, u2, l2);
            }
          });
        }(self);
        var Kn = function() {
          function e2(e3, r4, i3, n2) {
            var a2 = this;
            this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
            var s2 = e3.config;
            this.hls = e3, this.id = r4, this.useWorker = !!s2.enableWorker, this.onTransmuxComplete = i3, this.onFlush = n2;
            var o2 = function(t2, e4) {
              (e4 = e4 || {}).frag = a2.frag, e4.id = a2.id, t2 === S.ERROR && (a2.error = e4.error), a2.hls.trigger(t2, e4);
            };
            this.observer = new Nn(), this.observer.on(S.FRAG_DECRYPTED, o2), this.observer.on(S.ERROR, o2);
            var l2, u2, h2, d2, c2 = ee(s2.preferManagedMediaSource) || { isTypeSupported: function() {
              return false;
            } }, f2 = { mpeg: c2.isTypeSupported("audio/mpeg"), mp3: c2.isTypeSupported('audio/mp4; codecs="mp3"'), ac3: c2.isTypeSupported('audio/mp4; codecs="ac-3"') }, g2 = navigator.vendor;
            if (!this.useWorker || "undefined" == typeof Worker || (s2.workerPath, 0))
              this.transmuxer = new _n(this.observer, f2, s2, g2, r4);
            else
              try {
                s2.workerPath ? (w.log("loading Web Worker " + s2.workerPath + ' for "' + r4 + '"'), this.workerContext = (h2 = s2.workerPath, d2 = new self.URL(h2, self.location.href).href, { worker: new self.Worker(d2), scriptURL: d2 })) : (w.log('injecting Web Worker for "' + r4 + '"'), this.workerContext = (l2 = new self.Blob(["var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(" + t.toString() + ")(true);"], { type: "text/javascript" }), u2 = self.URL.createObjectURL(l2), { worker: new self.Worker(u2), objectURL: u2 })), this.onwmsg = function(t2) {
                  return a2.onWorkerMessage(t2);
                };
                var v2 = this.workerContext.worker;
                v2.addEventListener("message", this.onwmsg), v2.onerror = function(t2) {
                  var e4 = new Error(t2.message + "  (" + t2.filename + ":" + t2.lineno + ")");
                  s2.enableWorker = false, w.warn('Error in "' + r4 + '" Web Worker, fallback to inline'), a2.hls.trigger(S.ERROR, { type: L.OTHER_ERROR, details: A.INTERNAL_EXCEPTION, fatal: false, event: "demuxerWorker", error: e4 });
                }, v2.postMessage({ cmd: "init", typeSupported: f2, vendor: g2, id: r4, config: JSON.stringify(s2) });
              } catch (t2) {
                w.warn('Error setting up "' + r4 + '" Web Worker, fallback to inline', t2), this.resetWorker(), this.error = null, this.transmuxer = new _n(this.observer, f2, s2, g2, r4);
              }
          }
          var r3 = e2.prototype;
          return r3.resetWorker = function() {
            if (this.workerContext) {
              var t2 = this.workerContext, e3 = t2.worker, r4 = t2.objectURL;
              r4 && self.URL.revokeObjectURL(r4), e3.removeEventListener("message", this.onwmsg), e3.onerror = null, e3.terminate(), this.workerContext = null;
            }
          }, r3.destroy = function() {
            if (this.workerContext)
              this.resetWorker(), this.onwmsg = void 0;
            else {
              var t2 = this.transmuxer;
              t2 && (t2.destroy(), this.transmuxer = null);
            }
            var e3 = this.observer;
            e3 && e3.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null;
          }, r3.push = function(t2, e3, r4, i3, n2, a2, s2, o2, l2, u2) {
            var h2, d2, c2 = this;
            l2.transmuxing.start = self.performance.now();
            var f2 = this.transmuxer, g2 = a2 ? a2.start : n2.start, v2 = n2.decryptdata, m2 = this.frag, p2 = !(m2 && n2.cc === m2.cc), y2 = !(m2 && l2.level === m2.level), E2 = m2 ? l2.sn - m2.sn : -1, T2 = this.part ? l2.part - this.part.index : -1, S2 = 0 === E2 && l2.id > 1 && l2.id === (null == m2 ? void 0 : m2.stats.chunkCount), L2 = !y2 && (1 === E2 || 0 === E2 && (1 === T2 || S2 && T2 <= 0)), A2 = self.performance.now();
            (y2 || E2 || 0 === n2.stats.parsing.start) && (n2.stats.parsing.start = A2), !a2 || !T2 && L2 || (a2.stats.parsing.start = A2);
            var R2 = !(m2 && (null == (h2 = n2.initSegment) ? void 0 : h2.url) === (null == (d2 = m2.initSegment) ? void 0 : d2.url)), k2 = new Mn(p2, L2, o2, y2, g2, R2);
            if (!L2 || p2 || R2) {
              w.log("[transmuxer-interface, " + n2.type + "]: Starting new transmux session for sn: " + l2.sn + " p: " + l2.part + " level: " + l2.level + " id: " + l2.id + "\n        discontinuity: " + p2 + "\n        trackSwitch: " + y2 + "\n        contiguous: " + L2 + "\n        accurateTimeOffset: " + o2 + "\n        timeOffset: " + g2 + "\n        initSegmentChange: " + R2);
              var b2 = new Fn(r4, i3, e3, s2, u2);
              this.configureTransmuxer(b2);
            }
            if (this.frag = n2, this.part = a2, this.workerContext)
              this.workerContext.worker.postMessage({ cmd: "demux", data: t2, decryptdata: v2, chunkMeta: l2, state: k2 }, t2 instanceof ArrayBuffer ? [t2] : []);
            else if (f2) {
              var D2 = f2.push(t2, v2, l2, k2);
              Pn(D2) ? (f2.async = true, D2.then(function(t3) {
                c2.handleTransmuxComplete(t3);
              }).catch(function(t3) {
                c2.transmuxerError(t3, l2, "transmuxer-interface push error");
              })) : (f2.async = false, this.handleTransmuxComplete(D2));
            }
          }, r3.flush = function(t2) {
            var e3 = this;
            t2.transmuxing.start = self.performance.now();
            var r4 = this.transmuxer;
            if (this.workerContext)
              this.workerContext.worker.postMessage({ cmd: "flush", chunkMeta: t2 });
            else if (r4) {
              var i3 = r4.flush(t2);
              Pn(i3) || r4.async ? (Pn(i3) || (i3 = Promise.resolve(i3)), i3.then(function(r5) {
                e3.handleFlushResult(r5, t2);
              }).catch(function(r5) {
                e3.transmuxerError(r5, t2, "transmuxer-interface flush error");
              })) : this.handleFlushResult(i3, t2);
            }
          }, r3.transmuxerError = function(t2, e3, r4) {
            this.hls && (this.error = t2, this.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.FRAG_PARSING_ERROR, chunkMeta: e3, fatal: false, error: t2, err: t2, reason: r4 }));
          }, r3.handleFlushResult = function(t2, e3) {
            var r4 = this;
            t2.forEach(function(t3) {
              r4.handleTransmuxComplete(t3);
            }), this.onFlush(e3);
          }, r3.onWorkerMessage = function(t2) {
            var e3 = t2.data, r4 = this.hls;
            switch (e3.event) {
              case "init":
                var i3, n2 = null == (i3 = this.workerContext) ? void 0 : i3.objectURL;
                n2 && self.URL.revokeObjectURL(n2);
                break;
              case "transmuxComplete":
                this.handleTransmuxComplete(e3.data);
                break;
              case "flush":
                this.onFlush(e3.data);
                break;
              case "workerLog":
                w[e3.data.logType] && w[e3.data.logType](e3.data.message);
                break;
              default:
                e3.data = e3.data || {}, e3.data.frag = this.frag, e3.data.id = this.id, r4.trigger(e3.event, e3.data);
            }
          }, r3.configureTransmuxer = function(t2) {
            var e3 = this.transmuxer;
            this.workerContext ? this.workerContext.worker.postMessage({ cmd: "configure", config: t2 }) : e3 && e3.configure(t2);
          }, r3.handleTransmuxComplete = function(t2) {
            t2.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t2);
          }, e2;
        }();
        function Hn(t2, e2) {
          if (t2.length !== e2.length)
            return false;
          for (var r3 = 0; r3 < t2.length; r3++)
            if (!Vn(t2[r3].attrs, e2[r3].attrs))
              return false;
          return true;
        }
        function Vn(t2, e2, r3) {
          var i3 = t2["STABLE-RENDITION-ID"];
          return i3 && !r3 ? i3 === e2["STABLE-RENDITION-ID"] : !(r3 || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some(function(r4) {
            return t2[r4] !== e2[r4];
          });
        }
        function Yn(t2, e2) {
          return e2.label.toLowerCase() === t2.name.toLowerCase() && (!e2.language || e2.language.toLowerCase() === (t2.lang || "").toLowerCase());
        }
        var Wn = function(t2) {
          function e2(e3, r4, i3) {
            var n2;
            return (n2 = t2.call(this, e3, r4, i3, "[audio-stream-controller]", Ce) || this).videoBuffer = null, n2.videoTrackCC = -1, n2.waitingVideoCC = -1, n2.bufferedTrack = null, n2.switchingTrack = null, n2.trackId = -1, n2.waitingData = null, n2.mainDetails = null, n2.flushing = false, n2.bufferFlushed = false, n2.cachedTrackLoadedData = null, n2._registerListeners(), n2;
          }
          l(e2, t2);
          var r3 = e2.prototype;
          return r3.onHandlerDestroying = function() {
            this._unregisterListeners(), t2.prototype.onHandlerDestroying.call(this), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null;
          }, r3._registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.on(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t3.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t3.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t3.on(S.ERROR, this.onError, this), t3.on(S.BUFFER_RESET, this.onBufferReset, this), t3.on(S.BUFFER_CREATED, this.onBufferCreated, this), t3.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t3.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t3.on(S.FRAG_BUFFERED, this.onFragBuffered, this);
          }, r3._unregisterListeners = function() {
            var t3 = this.hls;
            t3.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.off(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t3.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t3.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t3.off(S.ERROR, this.onError, this), t3.off(S.BUFFER_RESET, this.onBufferReset, this), t3.off(S.BUFFER_CREATED, this.onBufferCreated, this), t3.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t3.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t3.off(S.FRAG_BUFFERED, this.onFragBuffered, this);
          }, r3.onInitPtsFound = function(t3, e3) {
            var r4 = e3.frag, i3 = e3.id, n2 = e3.initPTS, a2 = e3.timescale;
            if ("main" === i3) {
              var s2 = r4.cc;
              this.initPTS[r4.cc] = { baseTime: n2, timescale: a2 }, this.log("InitPTS for cc: " + s2 + " found from main: " + n2), this.videoTrackCC = s2, this.state === Ri && this.tick();
            }
          }, r3.startLoad = function(t3) {
            if (!this.levels)
              return this.startPosition = t3, void (this.state = gi);
            var e3 = this.lastCurrentTime;
            this.stopLoad(), this.setInterval(100), e3 > 0 && -1 === t3 ? (this.log("Override startPosition with lastCurrentTime @" + e3.toFixed(3)), t3 = e3, this.state = vi) : (this.loadedmetadata = false, this.state = Ei), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t3, this.tick();
          }, r3.doTick = function() {
            switch (this.state) {
              case vi:
                this.doTickIdle();
                break;
              case Ei:
                var e3, r4 = this.levels, i3 = this.trackId, n2 = null == r4 || null == (e3 = r4[i3]) ? void 0 : e3.details;
                if (n2) {
                  if (this.waitForCdnTuneIn(n2))
                    break;
                  this.state = Ri;
                }
                break;
              case yi:
                var a2, s2 = performance.now(), o2 = this.retryDate;
                if (!o2 || s2 >= o2 || null != (a2 = this.media) && a2.seeking) {
                  var l2 = this.levels, u2 = this.trackId;
                  this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded((null == l2 ? void 0 : l2[u2]) || null), this.state = vi;
                }
                break;
              case Ri:
                var h2 = this.waitingData;
                if (h2) {
                  var d2 = h2.frag, c2 = h2.part, f2 = h2.cache, g2 = h2.complete;
                  if (void 0 !== this.initPTS[d2.cc]) {
                    this.waitingData = null, this.waitingVideoCC = -1, this.state = pi;
                    var v2 = { frag: d2, part: c2, payload: f2.flush(), networkDetails: null };
                    this._handleFragmentLoadProgress(v2), g2 && t2.prototype._handleFragmentLoadComplete.call(this, v2);
                  } else if (this.videoTrackCC !== this.waitingVideoCC)
                    this.log("Waiting fragment cc (" + d2.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
                  else {
                    var m2 = this.getLoadPosition(), p2 = Jr.bufferInfo(this.mediaBuffer, m2, this.config.maxBufferHole);
                    Er(p2.end, this.config.maxFragLookUpTolerance, d2) < 0 && (this.log("Waiting fragment cc (" + d2.cc + ") @ " + d2.start + " cancelled because another fragment at " + p2.end + " is needed"), this.clearWaitingFragment());
                  }
                } else
                  this.state = vi;
            }
            this.onTickEnd();
          }, r3.clearWaitingFragment = function() {
            var t3 = this.waitingData;
            t3 && (this.fragmentTracker.removeFragment(t3.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = vi);
          }, r3.resetLoadingState = function() {
            this.clearWaitingFragment(), t2.prototype.resetLoadingState.call(this);
          }, r3.onTickEnd = function() {
            var t3 = this.media;
            null != t3 && t3.readyState && (this.lastCurrentTime = t3.currentTime);
          }, r3.doTickIdle = function() {
            var t3 = this.hls, e3 = this.levels, r4 = this.media, i3 = this.trackId, n2 = t3.config;
            if ((r4 || !this.startFragRequested && n2.startFragPrefetch) && null != e3 && e3[i3]) {
              var a2 = e3[i3], s2 = a2.details;
              if (!s2 || s2.live && this.levelLastLoaded !== a2 || this.waitForCdnTuneIn(s2))
                this.state = Ei;
              else {
                var o2 = this.mediaBuffer ? this.mediaBuffer : this.media;
                this.bufferFlushed && o2 && (this.bufferFlushed = false, this.afterBufferFlushed(o2, O, Ce));
                var l2 = this.getFwdBufferInfo(o2, Ce);
                if (null !== l2) {
                  var u2 = this.bufferedTrack, h2 = this.switchingTrack;
                  if (!h2 && this._streamEnded(l2, s2))
                    return t3.trigger(S.BUFFER_EOS, { type: "audio" }), void (this.state = Li);
                  var d2 = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, we), c2 = l2.len, f2 = this.getMaxBufferLength(null == d2 ? void 0 : d2.len), g2 = s2.fragments, v2 = g2[0].start, m2 = this.flushing ? this.getLoadPosition() : l2.end;
                  if (h2 && r4) {
                    var p2 = this.getLoadPosition();
                    u2 && !Vn(h2.attrs, u2.attrs) && (m2 = p2), s2.PTSKnown && p2 < v2 && (l2.end > v2 || l2.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), r4.currentTime = v2 + 0.05);
                  }
                  if (!(c2 >= f2 && !h2 && m2 < g2[g2.length - 1].start)) {
                    var y2 = this.getNextFragment(m2, s2), E2 = false;
                    if (y2 && this.isLoopLoading(y2, m2) && (E2 = !!y2.gap, y2 = this.getNextFragmentLoopLoading(y2, s2, l2, we, f2)), y2) {
                      var T2 = d2 && y2.start > d2.end + s2.targetduration;
                      if (T2 || (null == d2 || !d2.len) && l2.len) {
                        var L2 = this.getAppendedFrag(y2.start, we);
                        if (null === L2)
                          return;
                        if (E2 || (E2 = !!L2.gap || !!T2 && 0 === d2.len), T2 && !E2 || E2 && l2.nextStart && l2.nextStart < L2.end)
                          return;
                      }
                      this.loadFragment(y2, a2, m2);
                    } else
                      this.bufferFlushed = true;
                  }
                }
              }
            }
          }, r3.getMaxBufferLength = function(e3) {
            var r4 = t2.prototype.getMaxBufferLength.call(this);
            return e3 ? Math.min(Math.max(r4, e3), this.config.maxMaxBufferLength) : r4;
          }, r3.onMediaDetaching = function() {
            this.videoBuffer = null, this.bufferFlushed = this.flushing = false, t2.prototype.onMediaDetaching.call(this);
          }, r3.onAudioTracksUpdated = function(t3, e3) {
            var r4 = e3.audioTracks;
            this.resetTransmuxer(), this.levels = r4.map(function(t4) {
              return new rr(t4);
            });
          }, r3.onAudioTrackSwitching = function(t3, e3) {
            var r4 = !!e3.url;
            this.trackId = e3.id;
            var i3 = this.fragCurrent;
            i3 && (i3.abortRequests(), this.removeUnbufferedFrags(i3.start)), this.resetLoadingState(), r4 ? this.setInterval(100) : this.resetTransmuxer(), r4 ? (this.switchingTrack = e3, this.state = vi, this.flushAudioIfNeeded(e3)) : (this.switchingTrack = null, this.bufferedTrack = e3, this.state = gi), this.tick();
          }, r3.onManifestLoading = function() {
            this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = this.flushing = false, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = false, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1;
          }, r3.onLevelLoaded = function(t3, e3) {
            this.mainDetails = e3.details, null !== this.cachedTrackLoadedData && (this.hls.trigger(S.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null);
          }, r3.onAudioTrackLoaded = function(t3, e3) {
            var r4;
            if (null != this.mainDetails) {
              var i3 = this.levels, n2 = e3.details, a2 = e3.id;
              if (i3) {
                this.log("Audio track " + a2 + " loaded [" + n2.startSN + "," + n2.endSN + "]" + (n2.lastPartSn ? "[part-" + n2.lastPartSn + "-" + n2.lastPartIndex + "]" : "") + ",duration:" + n2.totalduration);
                var s2 = i3[a2], o2 = 0;
                if (n2.live || null != (r4 = s2.details) && r4.live) {
                  this.checkLiveUpdate(n2);
                  var l2, u2 = this.mainDetails;
                  if (n2.deltaUpdateFailed || !u2)
                    return;
                  !s2.details && n2.hasProgramDateTime && u2.hasProgramDateTime ? (ii(n2, u2), o2 = n2.fragments[0].start) : o2 = this.alignPlaylists(n2, s2.details, null == (l2 = this.levelLastLoaded) ? void 0 : l2.details);
                }
                s2.details = n2, this.levelLastLoaded = s2, this.startFragRequested || !this.mainDetails && n2.live || this.setStartPosition(this.mainDetails || n2, o2), this.state !== Ei || this.waitForCdnTuneIn(n2) || (this.state = vi), this.tick();
              } else
                this.warn("Audio tracks were reset while loading level " + a2);
            } else
              this.cachedTrackLoadedData = e3;
          }, r3._handleFragmentLoadProgress = function(t3) {
            var e3, r4 = t3.frag, i3 = t3.part, n2 = t3.payload, a2 = this.config, s2 = this.trackId, o2 = this.levels;
            if (o2) {
              var l2 = o2[s2];
              if (l2) {
                var u2 = l2.details;
                if (!u2)
                  return this.warn("Audio track details undefined on fragment load progress"), void this.removeUnbufferedFrags(r4.start);
                var h2 = a2.defaultAudioCodec || l2.audioCodec || "mp4a.40.2", d2 = this.transmuxer;
                d2 || (d2 = this.transmuxer = new Kn(this.hls, Ce, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
                var c2 = this.initPTS[r4.cc], f2 = null == (e3 = r4.initSegment) ? void 0 : e3.data;
                if (void 0 !== c2) {
                  var g2 = i3 ? i3.index : -1, v2 = -1 !== g2, m2 = new $r(r4.level, r4.sn, r4.stats.chunkCount, n2.byteLength, g2, v2);
                  d2.push(n2, f2, h2, "", r4, i3, u2.totalduration, false, m2, c2);
                } else
                  this.log("Unknown video PTS for cc " + r4.cc + ", waiting for video PTS before demuxing audio frag " + r4.sn + " of [" + u2.startSN + " ," + u2.endSN + "],track " + s2), (this.waitingData = this.waitingData || { frag: r4, part: i3, cache: new Di(), complete: false }).cache.push(new Uint8Array(n2)), this.waitingVideoCC = this.videoTrackCC, this.state = Ri;
              } else
                this.warn("Audio track is undefined on fragment load progress");
            } else
              this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + r4.sn + " of level " + r4.level + " will not be buffered");
          }, r3._handleFragmentLoadComplete = function(e3) {
            this.waitingData ? this.waitingData.complete = true : t2.prototype._handleFragmentLoadComplete.call(this, e3);
          }, r3.onBufferReset = function() {
            this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = false;
          }, r3.onBufferCreated = function(t3, e3) {
            var r4 = e3.tracks.audio;
            r4 && (this.mediaBuffer = r4.buffer || null), e3.tracks.video && (this.videoBuffer = e3.tracks.video.buffer || null);
          }, r3.onFragBuffered = function(t3, e3) {
            var r4 = e3.frag, n2 = e3.part;
            if (r4.type === Ce)
              if (this.fragContextChanged(r4))
                this.warn("Fragment " + r4.sn + (n2 ? " p: " + n2.index : "") + " of level " + r4.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + (this.switchingTrack ? this.switchingTrack.name : "false"));
              else {
                if ("initSegment" !== r4.sn) {
                  this.fragPrevious = r4;
                  var a2 = this.switchingTrack;
                  a2 && (this.bufferedTrack = a2, this.switchingTrack = null, this.hls.trigger(S.AUDIO_TRACK_SWITCHED, i2({}, a2)));
                }
                this.fragBufferedComplete(r4, n2);
              }
            else if (!this.loadedmetadata && r4.type === we) {
              var s2 = this.videoBuffer || this.media;
              s2 && Jr.getBuffered(s2).length && (this.loadedmetadata = true);
            }
          }, r3.onError = function(e3, r4) {
            var i3;
            if (r4.fatal)
              this.state = Ai;
            else
              switch (r4.details) {
                case A.FRAG_GAP:
                case A.FRAG_PARSING_ERROR:
                case A.FRAG_DECRYPT_ERROR:
                case A.FRAG_LOAD_ERROR:
                case A.FRAG_LOAD_TIMEOUT:
                case A.KEY_LOAD_ERROR:
                case A.KEY_LOAD_TIMEOUT:
                  this.onFragmentOrKeyLoadError(Ce, r4);
                  break;
                case A.AUDIO_TRACK_LOAD_ERROR:
                case A.AUDIO_TRACK_LOAD_TIMEOUT:
                case A.LEVEL_PARSING_ERROR:
                  r4.levelRetry || this.state !== Ei || (null == (i3 = r4.context) ? void 0 : i3.type) !== De || (this.state = vi);
                  break;
                case A.BUFFER_APPEND_ERROR:
                case A.BUFFER_FULL_ERROR:
                  if (!r4.parent || "audio" !== r4.parent)
                    return;
                  if (r4.details === A.BUFFER_APPEND_ERROR)
                    return void this.resetLoadingState();
                  this.reduceLengthAndFlushBuffer(r4) && (this.bufferedTrack = null, t2.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio"));
                  break;
                case A.INTERNAL_EXCEPTION:
                  this.recoverWorkerError(r4);
              }
          }, r3.onBufferFlushing = function(t3, e3) {
            e3.type !== N && (this.flushing = true);
          }, r3.onBufferFlushed = function(t3, e3) {
            var r4 = e3.type;
            if (r4 !== N) {
              this.flushing = false, this.bufferFlushed = true, this.state === Li && (this.state = vi);
              var i3 = this.mediaBuffer || this.media;
              i3 && (this.afterBufferFlushed(i3, r4, Ce), this.tick());
            }
          }, r3._handleTransmuxComplete = function(t3) {
            var e3, r4 = "audio", i3 = this.hls, n2 = t3.remuxResult, a2 = t3.chunkMeta, s2 = this.getCurrentContext(a2);
            if (s2) {
              var l2 = s2.frag, u2 = s2.part, h2 = s2.level, d2 = h2.details, c2 = n2.audio, f2 = n2.text, g2 = n2.id3, v2 = n2.initSegment;
              if (!this.fragContextChanged(l2) && d2) {
                if (this.state = Ti, this.switchingTrack && c2 && this.completeAudioSwitch(this.switchingTrack), null != v2 && v2.tracks) {
                  var m2 = l2.initSegment || l2;
                  this._bufferInitSegment(h2, v2.tracks, m2, a2), i3.trigger(S.FRAG_PARSING_INIT_SEGMENT, { frag: m2, id: r4, tracks: v2.tracks });
                }
                if (c2) {
                  var p2 = c2.startPTS, y2 = c2.endPTS, E2 = c2.startDTS, T2 = c2.endDTS;
                  u2 && (u2.elementaryStreams[O] = { startPTS: p2, endPTS: y2, startDTS: E2, endDTS: T2 }), l2.setElementaryStreamInfo(O, p2, y2, E2, T2), this.bufferFragmentData(c2, l2, u2, a2);
                }
                if (null != g2 && null != (e3 = g2.samples) && e3.length) {
                  var L2 = o({ id: r4, frag: l2, details: d2 }, g2);
                  i3.trigger(S.FRAG_PARSING_METADATA, L2);
                }
                if (f2) {
                  var A2 = o({ id: r4, frag: l2, details: d2 }, f2);
                  i3.trigger(S.FRAG_PARSING_USERDATA, A2);
                }
              } else
                this.fragmentTracker.removeFragment(l2);
            } else
              this.resetWhenMissingContext(a2);
          }, r3._bufferInitSegment = function(t3, e3, r4, i3) {
            if (this.state === Ti) {
              e3.video && delete e3.video;
              var n2 = e3.audio;
              if (n2) {
                n2.id = "audio";
                var a2 = t3.audioCodec;
                this.log("Init audio buffer, container:" + n2.container + ", codecs[level/parsed]=[" + a2 + "/" + n2.codec + "]"), a2 && 1 === a2.split(",").length && (n2.levelCodec = a2), this.hls.trigger(S.BUFFER_CODECS, e3);
                var s2 = n2.initSegment;
                if (null != s2 && s2.byteLength) {
                  var o2 = { type: "audio", frag: r4, part: null, chunkMeta: i3, parent: r4.type, data: s2 };
                  this.hls.trigger(S.BUFFER_APPENDING, o2);
                }
                this.tickImmediate();
              }
            }
          }, r3.loadFragment = function(e3, r4, i3) {
            var n2, a2 = this.fragmentTracker.getState(e3);
            if (this.fragCurrent = e3, this.switchingTrack || a2 === Vr || a2 === Wr)
              if ("initSegment" === e3.sn)
                this._loadInitSegment(e3, r4);
              else if (null != (n2 = r4.details) && n2.live && !this.initPTS[e3.cc]) {
                this.log("Waiting for video PTS in continuity counter " + e3.cc + " of live stream before loading audio fragment " + e3.sn + " of level " + this.trackId), this.state = Ri;
                var s2 = this.mainDetails;
                s2 && s2.fragments[0].start !== r4.details.fragments[0].start && ii(r4.details, s2);
              } else
                this.startFragRequested = true, t2.prototype.loadFragment.call(this, e3, r4, i3);
            else
              this.clearTrackerIfNeeded(e3);
          }, r3.flushAudioIfNeeded = function(e3) {
            var r4 = this.media, i3 = this.bufferedTrack, n2 = null == i3 ? void 0 : i3.attrs, a2 = e3.attrs;
            r4 && n2 && (n2.CHANNELS !== a2.CHANNELS || i3.name !== e3.name || i3.lang !== e3.lang) && (this.log("Switching audio track : flushing all audio"), t2.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio"), this.bufferedTrack = null);
          }, r3.completeAudioSwitch = function(t3) {
            var e3 = this.hls;
            this.flushAudioIfNeeded(t3), this.bufferedTrack = t3, this.switchingTrack = null, e3.trigger(S.AUDIO_TRACK_SWITCHED, i2({}, t3));
          }, e2;
        }(bi), jn = function(t2) {
          function e2(e3) {
            var r4;
            return (r4 = t2.call(this, e3, "[audio-track-controller]") || this).tracks = [], r4.groupIds = null, r4.tracksInGroup = [], r4.trackId = -1, r4.currentTrack = null, r4.selectDefaultTrack = true, r4.registerListeners(), r4;
          }
          l(e2, t2);
          var r3 = e2.prototype;
          return r3.registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.on(S.LEVEL_LOADING, this.onLevelLoading, this), t3.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t3.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t3.on(S.ERROR, this.onError, this);
          }, r3.unregisterListeners = function() {
            var t3 = this.hls;
            t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.off(S.LEVEL_LOADING, this.onLevelLoading, this), t3.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t3.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t3.off(S.ERROR, this.onError, this);
          }, r3.destroy = function() {
            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, t2.prototype.destroy.call(this);
          }, r3.onManifestLoading = function() {
            this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = true;
          }, r3.onManifestParsed = function(t3, e3) {
            this.tracks = e3.audioTracks || [];
          }, r3.onAudioTrackLoaded = function(t3, e3) {
            var r4 = e3.id, i3 = e3.groupId, n2 = e3.details, a2 = this.tracksInGroup[r4];
            if (a2 && a2.groupId === i3) {
              var s2 = a2.details;
              a2.details = e3.details, this.log("Audio track " + r4 + ' "' + a2.name + '" lang:' + a2.lang + " group:" + i3 + " loaded [" + n2.startSN + "-" + n2.endSN + "]"), r4 === this.trackId && this.playlistLoaded(r4, e3, s2);
            } else
              this.warn("Audio track with id:" + r4 + " and group:" + i3 + " not found in active group " + (null == a2 ? void 0 : a2.groupId));
          }, r3.onLevelLoading = function(t3, e3) {
            this.switchLevel(e3.level);
          }, r3.onLevelSwitching = function(t3, e3) {
            this.switchLevel(e3.level);
          }, r3.switchLevel = function(t3) {
            var e3 = this.hls.levels[t3];
            if (e3) {
              var r4 = e3.audioGroups || null, i3 = this.groupIds, n2 = this.currentTrack;
              if (!r4 || (null == i3 ? void 0 : i3.length) !== (null == r4 ? void 0 : r4.length) || null != r4 && r4.some(function(t4) {
                return -1 === (null == i3 ? void 0 : i3.indexOf(t4));
              })) {
                this.groupIds = r4, this.trackId = -1, this.currentTrack = null;
                var a2 = this.tracks.filter(function(t4) {
                  return !r4 || -1 !== r4.indexOf(t4.groupId);
                });
                if (a2.length)
                  this.selectDefaultTrack && !a2.some(function(t4) {
                    return t4.default;
                  }) && (this.selectDefaultTrack = false), a2.forEach(function(t4, e4) {
                    t4.id = e4;
                  });
                else if (!n2 && !this.tracksInGroup.length)
                  return;
                this.tracksInGroup = a2;
                var s2 = this.hls.config.audioPreference;
                if (!n2 && s2) {
                  var o2 = Nr(s2, a2, Br);
                  if (o2 > -1)
                    n2 = a2[o2];
                  else {
                    var l2 = Nr(s2, this.tracks);
                    n2 = this.tracks[l2];
                  }
                }
                var u2 = this.findTrackId(n2);
                -1 === u2 && n2 && (u2 = this.findTrackId(null));
                var h2 = { audioTracks: a2 };
                this.log("Updating audio tracks, " + a2.length + " track(s) found in group(s): " + (null == r4 ? void 0 : r4.join(","))), this.hls.trigger(S.AUDIO_TRACKS_UPDATED, h2);
                var d2 = this.trackId;
                if (-1 !== u2 && -1 === d2)
                  this.setAudioTrack(u2);
                else if (a2.length && -1 === d2) {
                  var c2, f2 = new Error("No audio track selected for current audio group-ID(s): " + (null == (c2 = this.groupIds) ? void 0 : c2.join(",")) + " track count: " + a2.length);
                  this.warn(f2.message), this.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.AUDIO_TRACK_LOAD_ERROR, fatal: true, error: f2 });
                }
              } else
                this.shouldReloadPlaylist(n2) && this.setAudioTrack(this.trackId);
            }
          }, r3.onError = function(t3, e3) {
            !e3.fatal && e3.context && (e3.context.type !== De || e3.context.id !== this.trackId || this.groupIds && -1 === this.groupIds.indexOf(e3.context.groupId) || (this.requestScheduled = -1, this.checkRetry(e3)));
          }, r3.setAudioOption = function(t3) {
            var e3 = this.hls;
            if (e3.config.audioPreference = t3, t3) {
              var r4 = this.allAudioTracks;
              if (this.selectDefaultTrack = false, r4.length) {
                var i3 = this.currentTrack;
                if (i3 && Ur(t3, i3, Br))
                  return i3;
                var n2 = Nr(t3, this.tracksInGroup, Br);
                if (n2 > -1) {
                  var a2 = this.tracksInGroup[n2];
                  return this.setAudioTrack(n2), a2;
                }
                if (i3) {
                  var s2 = e3.loadLevel;
                  -1 === s2 && (s2 = e3.firstAutoLevel);
                  var o2 = function(t4, e4, r5, i4, n3) {
                    var a3 = e4[i4], s3 = e4.reduce(function(t5, e5, r6) {
                      var i5 = e5.uri;
                      return (t5[i5] || (t5[i5] = [])).push(r6), t5;
                    }, {})[a3.uri];
                    s3.length > 1 && (i4 = Math.max.apply(Math, s3));
                    var o3 = a3.videoRange, l3 = a3.frameRate, u2 = a3.codecSet.substring(0, 4), h2 = Gr(e4, i4, function(e5) {
                      if (e5.videoRange !== o3 || e5.frameRate !== l3 || e5.codecSet.substring(0, 4) !== u2)
                        return false;
                      var i5 = e5.audioGroups, a4 = r5.filter(function(t5) {
                        return !i5 || -1 !== i5.indexOf(t5.groupId);
                      });
                      return Nr(t4, a4, n3) > -1;
                    });
                    return h2 > -1 ? h2 : Gr(e4, i4, function(e5) {
                      var i5 = e5.audioGroups, a4 = r5.filter(function(t5) {
                        return !i5 || -1 !== i5.indexOf(t5.groupId);
                      });
                      return Nr(t4, a4, n3) > -1;
                    });
                  }(t3, e3.levels, r4, s2, Br);
                  if (-1 === o2)
                    return null;
                  e3.nextLoadLevel = o2;
                }
                if (t3.channels || t3.audioCodec) {
                  var l2 = Nr(t3, r4);
                  if (l2 > -1)
                    return r4[l2];
                }
              }
            }
            return null;
          }, r3.setAudioTrack = function(t3) {
            var e3 = this.tracksInGroup;
            if (t3 < 0 || t3 >= e3.length)
              this.warn("Invalid audio track id: " + t3);
            else {
              this.clearTimer(), this.selectDefaultTrack = false;
              var r4 = this.currentTrack, n2 = e3[t3], a2 = n2.details && !n2.details.live;
              if (!(t3 === this.trackId && n2 === r4 && a2 || (this.log("Switching to audio-track " + t3 + ' "' + n2.name + '" lang:' + n2.lang + " group:" + n2.groupId + " channels:" + n2.channels), this.trackId = t3, this.currentTrack = n2, this.hls.trigger(S.AUDIO_TRACK_SWITCHING, i2({}, n2)), a2))) {
                var s2 = this.switchParams(n2.url, null == r4 ? void 0 : r4.details, n2.details);
                this.loadPlaylist(s2);
              }
            }
          }, r3.findTrackId = function(t3) {
            for (var e3 = this.tracksInGroup, r4 = 0; r4 < e3.length; r4++) {
              var i3 = e3[r4];
              if ((!this.selectDefaultTrack || i3.default) && (!t3 || Ur(t3, i3, Br)))
                return r4;
            }
            if (t3) {
              for (var n2 = t3.name, a2 = t3.lang, s2 = t3.assocLang, o2 = t3.characteristics, l2 = t3.audioCodec, u2 = t3.channels, h2 = 0; h2 < e3.length; h2++)
                if (Ur({ name: n2, lang: a2, assocLang: s2, characteristics: o2, audioCodec: l2, channels: u2 }, e3[h2], Br))
                  return h2;
              for (var d2 = 0; d2 < e3.length; d2++) {
                var c2 = e3[d2];
                if (Vn(t3.attrs, c2.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
                  return d2;
              }
              for (var f2 = 0; f2 < e3.length; f2++) {
                var g2 = e3[f2];
                if (Vn(t3.attrs, g2.attrs, ["LANGUAGE"]))
                  return f2;
              }
            }
            return -1;
          }, r3.loadPlaylist = function(e3) {
            var r4 = this.currentTrack;
            if (this.shouldLoadPlaylist(r4) && r4) {
              t2.prototype.loadPlaylist.call(this);
              var i3 = r4.id, n2 = r4.groupId, a2 = r4.url;
              if (e3)
                try {
                  a2 = e3.addDirectives(a2);
                } catch (t3) {
                  this.warn("Could not construct new URL with HLS Delivery Directives: " + t3);
                }
              this.log("loading audio-track playlist " + i3 + ' "' + r4.name + '" lang:' + r4.lang + " group:" + n2), this.clearTimer(), this.hls.trigger(S.AUDIO_TRACK_LOADING, { url: a2, id: i3, groupId: n2, deliveryDirectives: e3 || null });
            }
          }, s(e2, [{ key: "allAudioTracks", get: function() {
            return this.tracks;
          } }, { key: "audioTracks", get: function() {
            return this.tracksInGroup;
          } }, { key: "audioTrack", get: function() {
            return this.trackId;
          }, set: function(t3) {
            this.selectDefaultTrack = false, this.setAudioTrack(t3);
          } }]), e2;
        }(wr), qn = function(t2) {
          function e2(e3, r4, i3) {
            var n2;
            return (n2 = t2.call(this, e3, r4, i3, "[subtitle-stream-controller]", _e) || this).currentTrackId = -1, n2.tracksBuffered = [], n2.mainDetails = null, n2._registerListeners(), n2;
          }
          l(e2, t2);
          var r3 = e2.prototype;
          return r3.onHandlerDestroying = function() {
            this._unregisterListeners(), t2.prototype.onHandlerDestroying.call(this), this.mainDetails = null;
          }, r3._registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.on(S.ERROR, this.onError, this), t3.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t3.on(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t3.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t3.on(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t3.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.on(S.FRAG_BUFFERED, this.onFragBuffered, this);
          }, r3._unregisterListeners = function() {
            var t3 = this.hls;
            t3.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.off(S.ERROR, this.onError, this), t3.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t3.off(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t3.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t3.off(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t3.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.off(S.FRAG_BUFFERED, this.onFragBuffered, this);
          }, r3.startLoad = function(t3) {
            this.stopLoad(), this.state = vi, this.setInterval(500), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t3, this.tick();
          }, r3.onManifestLoading = function() {
            this.mainDetails = null, this.fragmentTracker.removeAllFragments();
          }, r3.onMediaDetaching = function() {
            this.tracksBuffered = [], t2.prototype.onMediaDetaching.call(this);
          }, r3.onLevelLoaded = function(t3, e3) {
            this.mainDetails = e3.details;
          }, r3.onSubtitleFragProcessed = function(t3, e3) {
            var r4 = e3.frag, i3 = e3.success;
            if (this.fragPrevious = r4, this.state = vi, i3) {
              var n2 = this.tracksBuffered[this.currentTrackId];
              if (n2) {
                for (var a2, s2 = r4.start, o2 = 0; o2 < n2.length; o2++)
                  if (s2 >= n2[o2].start && s2 <= n2[o2].end) {
                    a2 = n2[o2];
                    break;
                  }
                var l2 = r4.start + r4.duration;
                a2 ? a2.end = l2 : (a2 = { start: s2, end: l2 }, n2.push(a2)), this.fragmentTracker.fragBuffered(r4), this.fragBufferedComplete(r4, null);
              }
            }
          }, r3.onBufferFlushing = function(t3, e3) {
            var r4 = e3.startOffset, i3 = e3.endOffset;
            if (0 === r4 && i3 !== Number.POSITIVE_INFINITY) {
              var n2 = i3 - 1;
              if (n2 <= 0)
                return;
              e3.endOffsetSubtitles = Math.max(0, n2), this.tracksBuffered.forEach(function(t4) {
                for (var e4 = 0; e4 < t4.length; )
                  if (t4[e4].end <= n2)
                    t4.shift();
                  else {
                    if (!(t4[e4].start < n2))
                      break;
                    t4[e4].start = n2, e4++;
                  }
              }), this.fragmentTracker.removeFragmentsInRange(r4, n2, _e);
            }
          }, r3.onFragBuffered = function(t3, e3) {
            var r4;
            this.loadedmetadata || e3.frag.type !== we || null != (r4 = this.media) && r4.buffered.length && (this.loadedmetadata = true);
          }, r3.onError = function(t3, e3) {
            var r4 = e3.frag;
            (null == r4 ? void 0 : r4.type) === _e && (this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== gi && (this.state = vi));
          }, r3.onSubtitleTracksUpdated = function(t3, e3) {
            var r4 = this, i3 = e3.subtitleTracks;
            this.levels && Hn(this.levels, i3) ? this.levels = i3.map(function(t4) {
              return new rr(t4);
            }) : (this.tracksBuffered = [], this.levels = i3.map(function(t4) {
              var e4 = new rr(t4);
              return r4.tracksBuffered[e4.id] = [], e4;
            }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, _e), this.fragPrevious = null, this.mediaBuffer = null);
          }, r3.onSubtitleTrackSwitch = function(t3, e3) {
            var r4;
            if (this.currentTrackId = e3.id, null != (r4 = this.levels) && r4.length && -1 !== this.currentTrackId) {
              var i3 = this.levels[this.currentTrackId];
              null != i3 && i3.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, i3 && this.setInterval(500);
            } else
              this.clearInterval();
          }, r3.onSubtitleTrackLoaded = function(t3, e3) {
            var r4, i3 = this.currentTrackId, n2 = this.levels, a2 = e3.details, s2 = e3.id;
            if (n2) {
              var o2 = n2[i3];
              if (!(s2 >= n2.length || s2 !== i3) && o2) {
                this.log("Subtitle track " + s2 + " loaded [" + a2.startSN + "," + a2.endSN + "]" + (a2.lastPartSn ? "[part-" + a2.lastPartSn + "-" + a2.lastPartIndex + "]" : "") + ",duration:" + a2.totalduration), this.mediaBuffer = this.mediaBufferTimeRanges;
                var l2 = 0;
                if (a2.live || null != (r4 = o2.details) && r4.live) {
                  var u2 = this.mainDetails;
                  if (a2.deltaUpdateFailed || !u2)
                    return;
                  var h2, d2 = u2.fragments[0];
                  o2.details ? 0 === (l2 = this.alignPlaylists(a2, o2.details, null == (h2 = this.levelLastLoaded) ? void 0 : h2.details)) && d2 && lr(a2, l2 = d2.start) : a2.hasProgramDateTime && u2.hasProgramDateTime ? (ii(a2, u2), l2 = a2.fragments[0].start) : d2 && lr(a2, l2 = d2.start);
                }
                o2.details = a2, this.levelLastLoaded = o2, this.startFragRequested || !this.mainDetails && a2.live || this.setStartPosition(this.mainDetails || a2, l2), this.tick(), a2.live && !this.fragCurrent && this.media && this.state === vi && (yr(null, a2.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), o2.details = void 0));
              }
            } else
              this.warn("Subtitle tracks were reset while loading level " + s2);
          }, r3._handleFragmentLoadComplete = function(t3) {
            var e3 = this, r4 = t3.frag, i3 = t3.payload, n2 = r4.decryptdata, a2 = this.hls;
            if (!this.fragContextChanged(r4) && i3 && i3.byteLength > 0 && null != n2 && n2.key && n2.iv && "AES-128" === n2.method) {
              var s2 = performance.now();
              this.decrypter.decrypt(new Uint8Array(i3), n2.key.buffer, n2.iv.buffer).catch(function(t4) {
                throw a2.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.FRAG_DECRYPT_ERROR, fatal: false, error: t4, reason: t4.message, frag: r4 }), t4;
              }).then(function(t4) {
                var e4 = performance.now();
                a2.trigger(S.FRAG_DECRYPTED, { frag: r4, payload: t4, stats: { tstart: s2, tdecrypt: e4 } });
              }).catch(function(t4) {
                e3.warn(t4.name + ": " + t4.message), e3.state = vi;
              });
            }
          }, r3.doTick = function() {
            if (this.media) {
              if (this.state === vi) {
                var t3 = this.currentTrackId, e3 = this.levels, r4 = null == e3 ? void 0 : e3[t3];
                if (!r4 || !e3.length || !r4.details)
                  return;
                var i3 = this.config, n2 = this.getLoadPosition(), a2 = Jr.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], n2, i3.maxBufferHole), s2 = a2.end, o2 = a2.len, l2 = this.getFwdBufferInfo(this.media, we), u2 = r4.details;
                if (o2 > this.getMaxBufferLength(null == l2 ? void 0 : l2.len) + u2.levelTargetDuration)
                  return;
                var h2 = u2.fragments, d2 = h2.length, c2 = u2.edge, f2 = null, g2 = this.fragPrevious;
                if (s2 < c2) {
                  var v2 = i3.maxFragLookUpTolerance, m2 = s2 > c2 - v2 ? 0 : v2;
                  !(f2 = yr(g2, h2, Math.max(h2[0].start, s2), m2)) && g2 && g2.start < h2[0].start && (f2 = h2[0]);
                } else
                  f2 = h2[d2 - 1];
                if (!f2)
                  return;
                if ("initSegment" !== (f2 = this.mapToInitFragWhenRequired(f2)).sn) {
                  var p2 = h2[f2.sn - u2.startSN - 1];
                  p2 && p2.cc === f2.cc && this.fragmentTracker.getState(p2) === Vr && (f2 = p2);
                }
                this.fragmentTracker.getState(f2) === Vr && this.loadFragment(f2, r4, s2);
              }
            } else
              this.state = vi;
          }, r3.getMaxBufferLength = function(e3) {
            var r4 = t2.prototype.getMaxBufferLength.call(this);
            return e3 ? Math.max(r4, e3) : r4;
          }, r3.loadFragment = function(e3, r4, i3) {
            this.fragCurrent = e3, "initSegment" === e3.sn ? this._loadInitSegment(e3, r4) : (this.startFragRequested = true, t2.prototype.loadFragment.call(this, e3, r4, i3));
          }, s(e2, [{ key: "mediaBufferTimeRanges", get: function() {
            return new Xn(this.tracksBuffered[this.currentTrackId] || []);
          } }]), e2;
        }(bi), Xn = function(t2) {
          this.buffered = void 0;
          var e2 = function(e3, r3, i3) {
            if ((r3 >>>= 0) > i3 - 1)
              throw new DOMException("Failed to execute '" + e3 + "' on 'TimeRanges': The index provided (" + r3 + ") is greater than the maximum bound (" + i3 + ")");
            return t2[r3][e3];
          };
          this.buffered = { get length() {
            return t2.length;
          }, end: function(r3) {
            return e2("end", r3, t2.length);
          }, start: function(r3) {
            return e2("start", r3, t2.length);
          } };
        }, zn = function(t2) {
          function e2(e3) {
            var r4;
            return (r4 = t2.call(this, e3, "[subtitle-track-controller]") || this).media = null, r4.tracks = [], r4.groupIds = null, r4.tracksInGroup = [], r4.trackId = -1, r4.currentTrack = null, r4.selectDefaultTrack = true, r4.queuedDefaultTrack = -1, r4.asyncPollTrackChange = function() {
              return r4.pollTrackChange(0);
            }, r4.useTextTrackPolling = false, r4.subtitlePollingInterval = -1, r4._subtitleDisplay = true, r4.onTextTracksChanged = function() {
              if (r4.useTextTrackPolling || self.clearInterval(r4.subtitlePollingInterval), r4.media && r4.hls.config.renderTextTracksNatively) {
                for (var t3 = null, e4 = Be(r4.media.textTracks), i3 = 0; i3 < e4.length; i3++)
                  if ("hidden" === e4[i3].mode)
                    t3 = e4[i3];
                  else if ("showing" === e4[i3].mode) {
                    t3 = e4[i3];
                    break;
                  }
                var n2 = r4.findTrackForTextTrack(t3);
                r4.subtitleTrack !== n2 && r4.setSubtitleTrack(n2);
              }
            }, r4.registerListeners(), r4;
          }
          l(e2, t2);
          var r3 = e2.prototype;
          return r3.destroy = function() {
            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, t2.prototype.destroy.call(this);
          }, r3.registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.on(S.LEVEL_LOADING, this.onLevelLoading, this), t3.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t3.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t3.on(S.ERROR, this.onError, this);
          }, r3.unregisterListeners = function() {
            var t3 = this.hls;
            t3.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.off(S.LEVEL_LOADING, this.onLevelLoading, this), t3.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t3.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t3.off(S.ERROR, this.onError, this);
          }, r3.onMediaAttached = function(t3, e3) {
            this.media = e3.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
          }, r3.pollTrackChange = function(t3) {
            self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, t3);
          }, r3.onMediaDetaching = function() {
            this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), Be(this.media.textTracks).forEach(function(t3) {
              Ne(t3);
            }), this.subtitleTrack = -1, this.media = null);
          }, r3.onManifestLoading = function() {
            this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = true;
          }, r3.onManifestParsed = function(t3, e3) {
            this.tracks = e3.subtitleTracks;
          }, r3.onSubtitleTrackLoaded = function(t3, e3) {
            var r4 = e3.id, i3 = e3.groupId, n2 = e3.details, a2 = this.tracksInGroup[r4];
            if (a2 && a2.groupId === i3) {
              var s2 = a2.details;
              a2.details = e3.details, this.log("Subtitle track " + r4 + ' "' + a2.name + '" lang:' + a2.lang + " group:" + i3 + " loaded [" + n2.startSN + "-" + n2.endSN + "]"), r4 === this.trackId && this.playlistLoaded(r4, e3, s2);
            } else
              this.warn("Subtitle track with id:" + r4 + " and group:" + i3 + " not found in active group " + (null == a2 ? void 0 : a2.groupId));
          }, r3.onLevelLoading = function(t3, e3) {
            this.switchLevel(e3.level);
          }, r3.onLevelSwitching = function(t3, e3) {
            this.switchLevel(e3.level);
          }, r3.switchLevel = function(t3) {
            var e3 = this.hls.levels[t3];
            if (e3) {
              var r4 = e3.subtitleGroups || null, i3 = this.groupIds, n2 = this.currentTrack;
              if (!r4 || (null == i3 ? void 0 : i3.length) !== (null == r4 ? void 0 : r4.length) || null != r4 && r4.some(function(t4) {
                return -1 === (null == i3 ? void 0 : i3.indexOf(t4));
              })) {
                this.groupIds = r4, this.trackId = -1, this.currentTrack = null;
                var a2 = this.tracks.filter(function(t4) {
                  return !r4 || -1 !== r4.indexOf(t4.groupId);
                });
                if (a2.length)
                  this.selectDefaultTrack && !a2.some(function(t4) {
                    return t4.default;
                  }) && (this.selectDefaultTrack = false), a2.forEach(function(t4, e4) {
                    t4.id = e4;
                  });
                else if (!n2 && !this.tracksInGroup.length)
                  return;
                this.tracksInGroup = a2;
                var s2 = this.hls.config.subtitlePreference;
                if (!n2 && s2) {
                  this.selectDefaultTrack = false;
                  var o2 = Nr(s2, a2);
                  if (o2 > -1)
                    n2 = a2[o2];
                  else {
                    var l2 = Nr(s2, this.tracks);
                    n2 = this.tracks[l2];
                  }
                }
                var u2 = this.findTrackId(n2);
                -1 === u2 && n2 && (u2 = this.findTrackId(null));
                var h2 = { subtitleTracks: a2 };
                this.log("Updating subtitle tracks, " + a2.length + ' track(s) found in "' + (null == r4 ? void 0 : r4.join(",")) + '" group-id'), this.hls.trigger(S.SUBTITLE_TRACKS_UPDATED, h2), -1 !== u2 && -1 === this.trackId && this.setSubtitleTrack(u2);
              } else
                this.shouldReloadPlaylist(n2) && this.setSubtitleTrack(this.trackId);
            }
          }, r3.findTrackId = function(t3) {
            for (var e3 = this.tracksInGroup, r4 = this.selectDefaultTrack, i3 = 0; i3 < e3.length; i3++) {
              var n2 = e3[i3];
              if ((!r4 || n2.default) && (r4 || t3) && (!t3 || Ur(n2, t3)))
                return i3;
            }
            if (t3) {
              for (var a2 = 0; a2 < e3.length; a2++) {
                var s2 = e3[a2];
                if (Vn(t3.attrs, s2.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
                  return a2;
              }
              for (var o2 = 0; o2 < e3.length; o2++) {
                var l2 = e3[o2];
                if (Vn(t3.attrs, l2.attrs, ["LANGUAGE"]))
                  return o2;
              }
            }
            return -1;
          }, r3.findTrackForTextTrack = function(t3) {
            if (t3) {
              for (var e3 = this.tracksInGroup, r4 = 0; r4 < e3.length; r4++)
                if (Yn(e3[r4], t3))
                  return r4;
            }
            return -1;
          }, r3.onError = function(t3, e3) {
            !e3.fatal && e3.context && (e3.context.type !== Ie || e3.context.id !== this.trackId || this.groupIds && -1 === this.groupIds.indexOf(e3.context.groupId) || this.checkRetry(e3));
          }, r3.setSubtitleOption = function(t3) {
            if (this.hls.config.subtitlePreference = t3, t3) {
              var e3 = this.allSubtitleTracks;
              if (this.selectDefaultTrack = false, e3.length) {
                var r4 = this.currentTrack;
                if (r4 && Ur(t3, r4))
                  return r4;
                var i3 = Nr(t3, this.tracksInGroup);
                if (i3 > -1) {
                  var n2 = this.tracksInGroup[i3];
                  return this.setSubtitleTrack(i3), n2;
                }
                if (r4)
                  return null;
                var a2 = Nr(t3, e3);
                if (a2 > -1)
                  return e3[a2];
              }
            }
            return null;
          }, r3.loadPlaylist = function(e3) {
            t2.prototype.loadPlaylist.call(this);
            var r4 = this.currentTrack;
            if (this.shouldLoadPlaylist(r4) && r4) {
              var i3 = r4.id, n2 = r4.groupId, a2 = r4.url;
              if (e3)
                try {
                  a2 = e3.addDirectives(a2);
                } catch (t3) {
                  this.warn("Could not construct new URL with HLS Delivery Directives: " + t3);
                }
              this.log("Loading subtitle playlist for id " + i3), this.hls.trigger(S.SUBTITLE_TRACK_LOADING, { url: a2, id: i3, groupId: n2, deliveryDirectives: e3 || null });
            }
          }, r3.toggleTrackModes = function() {
            var t3 = this.media;
            if (t3) {
              var e3, r4 = Be(t3.textTracks), i3 = this.currentTrack;
              if (i3 && ((e3 = r4.filter(function(t4) {
                return Yn(i3, t4);
              })[0]) || this.warn('Unable to find subtitle TextTrack with name "' + i3.name + '" and language "' + i3.lang + '"')), [].slice.call(r4).forEach(function(t4) {
                "disabled" !== t4.mode && t4 !== e3 && (t4.mode = "disabled");
              }), e3) {
                var n2 = this.subtitleDisplay ? "showing" : "hidden";
                e3.mode !== n2 && (e3.mode = n2);
              }
            }
          }, r3.setSubtitleTrack = function(t3) {
            var e3 = this.tracksInGroup;
            if (this.media)
              if (t3 < -1 || t3 >= e3.length || !y(t3))
                this.warn("Invalid subtitle track id: " + t3);
              else {
                this.clearTimer(), this.selectDefaultTrack = false;
                var r4 = this.currentTrack, i3 = e3[t3] || null;
                if (this.trackId = t3, this.currentTrack = i3, this.toggleTrackModes(), i3) {
                  var n2 = !!i3.details && !i3.details.live;
                  if (t3 !== this.trackId || i3 !== r4 || !n2) {
                    this.log("Switching to subtitle-track " + t3 + (i3 ? ' "' + i3.name + '" lang:' + i3.lang + " group:" + i3.groupId : ""));
                    var a2 = i3.id, s2 = i3.groupId, o2 = void 0 === s2 ? "" : s2, l2 = i3.name, u2 = i3.type, h2 = i3.url;
                    this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, { id: a2, groupId: o2, name: l2, type: u2, url: h2 });
                    var d2 = this.switchParams(i3.url, null == r4 ? void 0 : r4.details, i3.details);
                    this.loadPlaylist(d2);
                  }
                } else
                  this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, { id: t3 });
              }
            else
              this.queuedDefaultTrack = t3;
          }, s(e2, [{ key: "subtitleDisplay", get: function() {
            return this._subtitleDisplay;
          }, set: function(t3) {
            this._subtitleDisplay = t3, this.trackId > -1 && this.toggleTrackModes();
          } }, { key: "allSubtitleTracks", get: function() {
            return this.tracks;
          } }, { key: "subtitleTracks", get: function() {
            return this.tracksInGroup;
          } }, { key: "subtitleTrack", get: function() {
            return this.trackId;
          }, set: function(t3) {
            this.selectDefaultTrack = false, this.setSubtitleTrack(t3);
          } }]), e2;
        }(wr), Qn = function() {
          function t2(t3) {
            this.buffers = void 0, this.queues = { video: [], audio: [], audiovideo: [] }, this.buffers = t3;
          }
          var e2 = t2.prototype;
          return e2.append = function(t3, e3, r3) {
            var i3 = this.queues[e3];
            i3.push(t3), 1 !== i3.length || r3 || this.executeNext(e3);
          }, e2.insertAbort = function(t3, e3) {
            this.queues[e3].unshift(t3), this.executeNext(e3);
          }, e2.appendBlocker = function(t3) {
            var e3, r3 = new Promise(function(t4) {
              e3 = t4;
            }), i3 = { execute: e3, onStart: function() {
            }, onComplete: function() {
            }, onError: function() {
            } };
            return this.append(i3, t3), r3;
          }, e2.executeNext = function(t3) {
            var e3 = this.queues[t3];
            if (e3.length) {
              var r3 = e3[0];
              try {
                r3.execute();
              } catch (e4) {
                w.warn('[buffer-operation-queue]: Exception executing "' + t3 + '" SourceBuffer operation: ' + e4), r3.onError(e4);
                var i3 = this.buffers[t3];
                null != i3 && i3.updating || this.shiftAndExecuteNext(t3);
              }
            }
          }, e2.shiftAndExecuteNext = function(t3) {
            this.queues[t3].shift(), this.executeNext(t3);
          }, e2.current = function(t3) {
            return this.queues[t3][0];
          }, t2;
        }(), Jn = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/, $n = function() {
          function t2(t3) {
            var e3 = this;
            this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendSource = void 0, this.appendErrors = { audio: 0, video: 0, audiovideo: 0 }, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this.log = void 0, this.warn = void 0, this.error = void 0, this._onEndStreaming = function(t4) {
              e3.hls && e3.hls.pauseBuffering();
            }, this._onStartStreaming = function(t4) {
              e3.hls && e3.hls.resumeBuffering();
            }, this._onMediaSourceOpen = function() {
              var t4 = e3.media, r4 = e3.mediaSource;
              e3.log("Media source opened"), t4 && (t4.removeEventListener("emptied", e3._onMediaEmptied), e3.updateMediaElementDuration(), e3.hls.trigger(S.MEDIA_ATTACHED, { media: t4, mediaSource: r4 })), r4 && r4.removeEventListener("sourceopen", e3._onMediaSourceOpen), e3.checkPendingTracks();
            }, this._onMediaSourceClose = function() {
              e3.log("Media source closed");
            }, this._onMediaSourceEnded = function() {
              e3.log("Media source ended");
            }, this._onMediaEmptied = function() {
              var t4 = e3.mediaSrc, r4 = e3._objectUrl;
              t4 !== r4 && w.error("Media element src was set while attaching MediaSource (" + r4 + " > " + t4 + ")");
            }, this.hls = t3;
            var r3, i3 = "[buffer-controller]";
            this.appendSource = (r3 = ee(t3.config.preferManagedMediaSource), "undefined" != typeof self && r3 === self.ManagedMediaSource), this.log = w.log.bind(w, i3), this.warn = w.warn.bind(w, i3), this.error = w.error.bind(w, i3), this._initSourceBuffer(), this.registerListeners();
          }
          var e2 = t2.prototype;
          return e2.hasSourceTypes = function() {
            return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
          }, e2.destroy = function() {
            this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null, this.hls = null;
          }, e2.registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.on(S.BUFFER_RESET, this.onBufferReset, this), t3.on(S.BUFFER_APPENDING, this.onBufferAppending, this), t3.on(S.BUFFER_CODECS, this.onBufferCodecs, this), t3.on(S.BUFFER_EOS, this.onBufferEos, this), t3.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), t3.on(S.FRAG_PARSED, this.onFragParsed, this), t3.on(S.FRAG_CHANGED, this.onFragChanged, this);
          }, e2.unregisterListeners = function() {
            var t3 = this.hls;
            t3.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.off(S.BUFFER_RESET, this.onBufferReset, this), t3.off(S.BUFFER_APPENDING, this.onBufferAppending, this), t3.off(S.BUFFER_CODECS, this.onBufferCodecs, this), t3.off(S.BUFFER_EOS, this.onBufferEos, this), t3.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t3.off(S.LEVEL_UPDATED, this.onLevelUpdated, this), t3.off(S.FRAG_PARSED, this.onFragParsed, this), t3.off(S.FRAG_CHANGED, this.onFragChanged, this);
          }, e2._initSourceBuffer = function() {
            this.sourceBuffer = {}, this.operationQueue = new Qn(this.sourceBuffer), this.listeners = { audio: [], video: [], audiovideo: [] }, this.appendErrors = { audio: 0, video: 0, audiovideo: 0 }, this.lastMpegAudioChunk = null;
          }, e2.onManifestLoading = function() {
            this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null;
          }, e2.onManifestParsed = function(t3, e3) {
            var r3 = 2;
            (e3.audio && !e3.video || !e3.altAudio) && (r3 = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r3, this.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected");
          }, e2.onMediaAttaching = function(t3, e3) {
            var r3 = this.media = e3.media, i3 = ee(this.appendSource);
            if (r3 && i3) {
              var n2, a2 = this.mediaSource = new i3();
              this.log("created media source: " + (null == (n2 = a2.constructor) ? void 0 : n2.name)), a2.addEventListener("sourceopen", this._onMediaSourceOpen), a2.addEventListener("sourceended", this._onMediaSourceEnded), a2.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (a2.addEventListener("startstreaming", this._onStartStreaming), a2.addEventListener("endstreaming", this._onEndStreaming));
              var s2 = this._objectUrl = self.URL.createObjectURL(a2);
              if (this.appendSource)
                try {
                  r3.removeAttribute("src");
                  var o2 = self.ManagedMediaSource;
                  r3.disableRemotePlayback = r3.disableRemotePlayback || o2 && a2 instanceof o2, Zn(r3), function(t4, e4) {
                    var r4 = self.document.createElement("source");
                    r4.type = "video/mp4", r4.src = e4, t4.appendChild(r4);
                  }(r3, s2), r3.load();
                } catch (t4) {
                  r3.src = s2;
                }
              else
                r3.src = s2;
              r3.addEventListener("emptied", this._onMediaEmptied);
            }
          }, e2.onMediaDetaching = function() {
            var t3 = this.media, e3 = this.mediaSource, r3 = this._objectUrl;
            if (e3) {
              if (this.log("media source detaching"), "open" === e3.readyState)
                try {
                  e3.endOfStream();
                } catch (t4) {
                  this.warn("onMediaDetaching: " + t4.message + " while calling endOfStream");
                }
              this.onBufferReset(), e3.removeEventListener("sourceopen", this._onMediaSourceOpen), e3.removeEventListener("sourceended", this._onMediaSourceEnded), e3.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (e3.removeEventListener("startstreaming", this._onStartStreaming), e3.removeEventListener("endstreaming", this._onEndStreaming)), t3 && (t3.removeEventListener("emptied", this._onMediaEmptied), r3 && self.URL.revokeObjectURL(r3), this.mediaSrc === r3 ? (t3.removeAttribute("src"), this.appendSource && Zn(t3), t3.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
            }
            this.hls.trigger(S.MEDIA_DETACHED, void 0);
          }, e2.onBufferReset = function() {
            var t3 = this;
            this.getSourceBufferTypes().forEach(function(e3) {
              t3.resetBuffer(e3);
            }), this._initSourceBuffer();
          }, e2.resetBuffer = function(t3) {
            var e3 = this.sourceBuffer[t3];
            try {
              var r3;
              e3 && (this.removeBufferListeners(t3), this.sourceBuffer[t3] = void 0, null != (r3 = this.mediaSource) && r3.sourceBuffers.length && this.mediaSource.removeSourceBuffer(e3));
            } catch (e4) {
              this.warn("onBufferReset " + t3, e4);
            }
          }, e2.onBufferCodecs = function(t3, e3) {
            var r3 = this, i3 = this.getSourceBufferTypes().length, n2 = Object.keys(e3);
            if (n2.forEach(function(t4) {
              if (i3) {
                var n3 = r3.tracks[t4];
                if (n3 && "function" == typeof n3.buffer.changeType) {
                  var a3, s2 = e3[t4], o2 = s2.id, l2 = s2.codec, u2 = s2.levelCodec, h2 = s2.container, d2 = s2.metadata, c2 = de(n3.codec, n3.levelCodec), f2 = null == c2 ? void 0 : c2.replace(Jn, "$1"), g2 = de(l2, u2), v2 = null == (a3 = g2) ? void 0 : a3.replace(Jn, "$1");
                  if (g2 && f2 !== v2) {
                    "audio" === t4.slice(0, 5) && (g2 = he(g2, r3.appendSource));
                    var m2 = h2 + ";codecs=" + g2;
                    r3.appendChangeType(t4, m2), r3.log("switching codec " + c2 + " to " + g2), r3.tracks[t4] = { buffer: n3.buffer, codec: l2, container: h2, levelCodec: u2, metadata: d2, id: o2 };
                  }
                }
              } else
                r3.pendingTracks[t4] = e3[t4];
            }), !i3) {
              var a2 = Math.max(this.bufferCodecEventsExpected - 1, 0);
              this.bufferCodecEventsExpected !== a2 && (this.log(a2 + " bufferCodec event(s) expected " + n2.join(",")), this.bufferCodecEventsExpected = a2), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks();
            }
          }, e2.appendChangeType = function(t3, e3) {
            var r3 = this, i3 = this.operationQueue, n2 = { execute: function() {
              var n3 = r3.sourceBuffer[t3];
              n3 && (r3.log("changing " + t3 + " sourceBuffer type to " + e3), n3.changeType(e3)), i3.shiftAndExecuteNext(t3);
            }, onStart: function() {
            }, onComplete: function() {
            }, onError: function(e4) {
              r3.warn("Failed to change " + t3 + " SourceBuffer type", e4);
            } };
            i3.append(n2, t3, !!this.pendingTracks[t3]);
          }, e2.onBufferAppending = function(t3, e3) {
            var r3 = this, i3 = this.hls, n2 = this.operationQueue, a2 = this.tracks, s2 = e3.data, o2 = e3.type, l2 = e3.frag, u2 = e3.part, h2 = e3.chunkMeta, d2 = h2.buffering[o2], c2 = self.performance.now();
            d2.start = c2;
            var f2 = l2.stats.buffering, g2 = u2 ? u2.stats.buffering : null;
            0 === f2.start && (f2.start = c2), g2 && 0 === g2.start && (g2.start = c2);
            var v2 = a2.audio, m2 = false;
            "audio" === o2 && "audio/mpeg" === (null == v2 ? void 0 : v2.container) && (m2 = !this.lastMpegAudioChunk || 1 === h2.id || this.lastMpegAudioChunk.sn !== h2.sn, this.lastMpegAudioChunk = h2);
            var p2 = l2.start, y2 = { execute: function() {
              if (d2.executeStart = self.performance.now(), m2) {
                var t4 = r3.sourceBuffer[o2];
                if (t4) {
                  var e4 = p2 - t4.timestampOffset;
                  Math.abs(e4) >= 0.1 && (r3.log("Updating audio SourceBuffer timestampOffset to " + p2 + " (delta: " + e4 + ") sn: " + l2.sn + ")"), t4.timestampOffset = p2);
                }
              }
              r3.appendExecutor(s2, o2);
            }, onStart: function() {
            }, onComplete: function() {
              var t4 = self.performance.now();
              d2.executeEnd = d2.end = t4, 0 === f2.first && (f2.first = t4), g2 && 0 === g2.first && (g2.first = t4);
              var e4 = r3.sourceBuffer, i4 = {};
              for (var n3 in e4)
                i4[n3] = Jr.getBuffered(e4[n3]);
              r3.appendErrors[o2] = 0, "audio" === o2 || "video" === o2 ? r3.appendErrors.audiovideo = 0 : (r3.appendErrors.audio = 0, r3.appendErrors.video = 0), r3.hls.trigger(S.BUFFER_APPENDED, { type: o2, frag: l2, part: u2, chunkMeta: h2, parent: l2.type, timeRanges: i4 });
            }, onError: function(t4) {
              var e4 = { type: L.MEDIA_ERROR, parent: l2.type, details: A.BUFFER_APPEND_ERROR, sourceBufferName: o2, frag: l2, part: u2, chunkMeta: h2, error: t4, err: t4, fatal: false };
              if (t4.code === DOMException.QUOTA_EXCEEDED_ERR)
                e4.details = A.BUFFER_FULL_ERROR;
              else {
                var n3 = ++r3.appendErrors[o2];
                e4.details = A.BUFFER_APPEND_ERROR, r3.warn("Failed " + n3 + "/" + i3.config.appendErrorMaxRetry + ' times to append segment in "' + o2 + '" sourceBuffer'), n3 >= i3.config.appendErrorMaxRetry && (e4.fatal = true);
              }
              i3.trigger(S.ERROR, e4);
            } };
            n2.append(y2, o2, !!this.pendingTracks[o2]);
          }, e2.onBufferFlushing = function(t3, e3) {
            var r3 = this, i3 = this.operationQueue, n2 = function(t4) {
              return { execute: r3.removeExecutor.bind(r3, t4, e3.startOffset, e3.endOffset), onStart: function() {
              }, onComplete: function() {
                r3.hls.trigger(S.BUFFER_FLUSHED, { type: t4 });
              }, onError: function(e4) {
                r3.warn("Failed to remove from " + t4 + " SourceBuffer", e4);
              } };
            };
            e3.type ? i3.append(n2(e3.type), e3.type) : this.getSourceBufferTypes().forEach(function(t4) {
              i3.append(n2(t4), t4);
            });
          }, e2.onFragParsed = function(t3, e3) {
            var r3 = this, i3 = e3.frag, n2 = e3.part, a2 = [], s2 = n2 ? n2.elementaryStreams : i3.elementaryStreams;
            s2[U] ? a2.push("audiovideo") : (s2[O] && a2.push("audio"), s2[N] && a2.push("video")), 0 === a2.length && this.warn("Fragments must have at least one ElementaryStreamType set. type: " + i3.type + " level: " + i3.level + " sn: " + i3.sn), this.blockBuffers(function() {
              var t4 = self.performance.now();
              i3.stats.buffering.end = t4, n2 && (n2.stats.buffering.end = t4);
              var e4 = n2 ? n2.stats : i3.stats;
              r3.hls.trigger(S.FRAG_BUFFERED, { frag: i3, part: n2, stats: e4, id: i3.type });
            }, a2);
          }, e2.onFragChanged = function(t3, e3) {
            this.trimBuffers();
          }, e2.onBufferEos = function(t3, e3) {
            var r3 = this;
            this.getSourceBufferTypes().reduce(function(t4, i3) {
              var n2 = r3.sourceBuffer[i3];
              return !n2 || e3.type && e3.type !== i3 || (n2.ending = true, n2.ended || (n2.ended = true, r3.log(i3 + " sourceBuffer now EOS"))), t4 && !(n2 && !n2.ended);
            }, true) && (this.log("Queueing mediaSource.endOfStream()"), this.blockBuffers(function() {
              r3.getSourceBufferTypes().forEach(function(t5) {
                var e4 = r3.sourceBuffer[t5];
                e4 && (e4.ending = false);
              });
              var t4 = r3.mediaSource;
              t4 && "open" === t4.readyState ? (r3.log("Calling mediaSource.endOfStream()"), t4.endOfStream()) : t4 && r3.log("Could not call mediaSource.endOfStream(). mediaSource.readyState: " + t4.readyState);
            }));
          }, e2.onLevelUpdated = function(t3, e3) {
            var r3 = e3.details;
            r3.fragments.length && (this.details = r3, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
          }, e2.trimBuffers = function() {
            var t3 = this.hls, e3 = this.details, r3 = this.media;
            if (r3 && null !== e3 && this.getSourceBufferTypes().length) {
              var i3 = t3.config, n2 = r3.currentTime, a2 = e3.levelTargetDuration, s2 = e3.live && null !== i3.liveBackBufferLength ? i3.liveBackBufferLength : i3.backBufferLength;
              if (y(s2) && s2 > 0) {
                var o2 = Math.max(s2, a2), l2 = Math.floor(n2 / a2) * a2 - o2;
                this.flushBackBuffer(n2, a2, l2);
              }
              if (y(i3.frontBufferFlushThreshold) && i3.frontBufferFlushThreshold > 0) {
                var u2 = Math.max(i3.maxBufferLength, i3.frontBufferFlushThreshold), h2 = Math.max(u2, a2), d2 = Math.floor(n2 / a2) * a2 + h2;
                this.flushFrontBuffer(n2, a2, d2);
              }
            }
          }, e2.flushBackBuffer = function(t3, e3, r3) {
            var i3 = this, n2 = this.details, a2 = this.sourceBuffer;
            this.getSourceBufferTypes().forEach(function(s2) {
              var o2 = a2[s2];
              if (o2) {
                var l2 = Jr.getBuffered(o2);
                if (l2.length > 0 && r3 > l2.start(0)) {
                  if (i3.hls.trigger(S.BACK_BUFFER_REACHED, { bufferEnd: r3 }), null != n2 && n2.live)
                    i3.hls.trigger(S.LIVE_BACK_BUFFER_REACHED, { bufferEnd: r3 });
                  else if (o2.ended && l2.end(l2.length - 1) - t3 < 2 * e3)
                    return void i3.log("Cannot flush " + s2 + " back buffer while SourceBuffer is in ended state");
                  i3.hls.trigger(S.BUFFER_FLUSHING, { startOffset: 0, endOffset: r3, type: s2 });
                }
              }
            });
          }, e2.flushFrontBuffer = function(t3, e3, r3) {
            var i3 = this, n2 = this.sourceBuffer;
            this.getSourceBufferTypes().forEach(function(a2) {
              var s2 = n2[a2];
              if (s2) {
                var o2 = Jr.getBuffered(s2), l2 = o2.length;
                if (l2 < 2)
                  return;
                var u2 = o2.start(l2 - 1), h2 = o2.end(l2 - 1);
                if (r3 > u2 || t3 >= u2 && t3 <= h2)
                  return;
                if (s2.ended && t3 - h2 < 2 * e3)
                  return void i3.log("Cannot flush " + a2 + " front buffer while SourceBuffer is in ended state");
                i3.hls.trigger(S.BUFFER_FLUSHING, { startOffset: u2, endOffset: 1 / 0, type: a2 });
              }
            });
          }, e2.updateMediaElementDuration = function() {
            if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
              var t3 = this.details, e3 = this.hls, r3 = this.media, i3 = this.mediaSource, n2 = t3.fragments[0].start + t3.totalduration, a2 = r3.duration, s2 = y(i3.duration) ? i3.duration : 0;
              t3.live && e3.config.liveDurationInfinity ? (i3.duration = 1 / 0, this.updateSeekableRange(t3)) : (n2 > s2 && n2 > a2 || !y(a2)) && (this.log("Updating Media Source duration to " + n2.toFixed(3)), i3.duration = n2);
            }
          }, e2.updateSeekableRange = function(t3) {
            var e3 = this.mediaSource, r3 = t3.fragments;
            if (r3.length && t3.live && null != e3 && e3.setLiveSeekableRange) {
              var i3 = Math.max(0, r3[0].start), n2 = Math.max(i3, i3 + t3.totalduration);
              this.log("Media Source duration is set to " + e3.duration + ". Setting seekable range to " + i3 + "-" + n2 + "."), e3.setLiveSeekableRange(i3, n2);
            }
          }, e2.checkPendingTracks = function() {
            var t3 = this.bufferCodecEventsExpected, e3 = this.operationQueue, r3 = this.pendingTracks, i3 = Object.keys(r3).length;
            if (i3 && (!t3 || 2 === i3 || "audiovideo" in r3)) {
              this.createSourceBuffers(r3), this.pendingTracks = {};
              var n2 = this.getSourceBufferTypes();
              if (n2.length)
                this.hls.trigger(S.BUFFER_CREATED, { tracks: this.tracks }), n2.forEach(function(t4) {
                  e3.executeNext(t4);
                });
              else {
                var a2 = new Error("could not create source buffer for media codec(s)");
                this.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.BUFFER_INCOMPATIBLE_CODECS_ERROR, fatal: true, error: a2, reason: a2.message });
              }
            }
          }, e2.createSourceBuffers = function(t3) {
            var e3 = this, r3 = this.sourceBuffer, i3 = this.mediaSource;
            if (!i3)
              throw Error("createSourceBuffers called when mediaSource was null");
            var n2 = function(n3) {
              if (!r3[n3]) {
                var a3, s2 = t3[n3];
                if (!s2)
                  throw Error("source buffer exists for track " + n3 + ", however track does not");
                var o2 = -1 === (null == (a3 = s2.levelCodec) ? void 0 : a3.indexOf(",")) ? s2.levelCodec : s2.codec;
                o2 && "audio" === n3.slice(0, 5) && (o2 = he(o2, e3.appendSource));
                var l2 = s2.container + ";codecs=" + o2;
                e3.log("creating sourceBuffer(" + l2 + ")");
                try {
                  var u2 = r3[n3] = i3.addSourceBuffer(l2), h2 = n3;
                  e3.addBufferListener(h2, "updatestart", e3._onSBUpdateStart), e3.addBufferListener(h2, "updateend", e3._onSBUpdateEnd), e3.addBufferListener(h2, "error", e3._onSBUpdateError), e3.appendSource && e3.addBufferListener(h2, "bufferedchange", function(t4, r4) {
                    var i4 = r4.removedRanges;
                    null != i4 && i4.length && e3.hls.trigger(S.BUFFER_FLUSHED, { type: n3 });
                  }), e3.tracks[n3] = { buffer: u2, codec: o2, container: s2.container, levelCodec: s2.levelCodec, metadata: s2.metadata, id: s2.id };
                } catch (t4) {
                  e3.error("error while trying to add sourceBuffer: " + t4.message), e3.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.BUFFER_ADD_CODEC_ERROR, fatal: false, error: t4, sourceBufferName: n3, mimeType: l2 });
                }
              }
            };
            for (var a2 in t3)
              n2(a2);
          }, e2._onSBUpdateStart = function(t3) {
            this.operationQueue.current(t3).onStart();
          }, e2._onSBUpdateEnd = function(t3) {
            var e3;
            if ("closed" !== (null == (e3 = this.mediaSource) ? void 0 : e3.readyState)) {
              var r3 = this.operationQueue;
              r3.current(t3).onComplete(), r3.shiftAndExecuteNext(t3);
            } else
              this.resetBuffer(t3);
          }, e2._onSBUpdateError = function(t3, e3) {
            var r3, i3 = new Error(t3 + " SourceBuffer error. MediaSource readyState: " + (null == (r3 = this.mediaSource) ? void 0 : r3.readyState));
            this.error("" + i3, e3), this.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.BUFFER_APPENDING_ERROR, sourceBufferName: t3, error: i3, fatal: false });
            var n2 = this.operationQueue.current(t3);
            n2 && n2.onError(i3);
          }, e2.removeExecutor = function(t3, e3, r3) {
            var i3 = this.media, n2 = this.mediaSource, a2 = this.operationQueue, s2 = this.sourceBuffer[t3];
            if (!i3 || !n2 || !s2)
              return this.warn("Attempting to remove from the " + t3 + " SourceBuffer, but it does not exist"), void a2.shiftAndExecuteNext(t3);
            var o2 = y(i3.duration) ? i3.duration : 1 / 0, l2 = y(n2.duration) ? n2.duration : 1 / 0, u2 = Math.max(0, e3), h2 = Math.min(r3, o2, l2);
            h2 > u2 && (!s2.ending || s2.ended) ? (s2.ended = false, this.log("Removing [" + u2 + "," + h2 + "] from the " + t3 + " SourceBuffer"), s2.remove(u2, h2)) : a2.shiftAndExecuteNext(t3);
          }, e2.appendExecutor = function(t3, e3) {
            var r3 = this.sourceBuffer[e3];
            if (r3)
              r3.ended = false, r3.appendBuffer(t3);
            else if (!this.pendingTracks[e3])
              throw new Error("Attempting to append to the " + e3 + " SourceBuffer, but it does not exist");
          }, e2.blockBuffers = function(t3, e3) {
            var r3 = this;
            if (void 0 === e3 && (e3 = this.getSourceBufferTypes()), !e3.length)
              return this.log("Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve().then(t3);
            var i3 = this.operationQueue, n2 = e3.map(function(t4) {
              return i3.appendBlocker(t4);
            });
            Promise.all(n2).then(function() {
              t3(), e3.forEach(function(t4) {
                var e4 = r3.sourceBuffer[t4];
                null != e4 && e4.updating || i3.shiftAndExecuteNext(t4);
              });
            });
          }, e2.getSourceBufferTypes = function() {
            return Object.keys(this.sourceBuffer);
          }, e2.addBufferListener = function(t3, e3, r3) {
            var i3 = this.sourceBuffer[t3];
            if (i3) {
              var n2 = r3.bind(this, t3);
              this.listeners[t3].push({ event: e3, listener: n2 }), i3.addEventListener(e3, n2);
            }
          }, e2.removeBufferListeners = function(t3) {
            var e3 = this.sourceBuffer[t3];
            e3 && this.listeners[t3].forEach(function(t4) {
              e3.removeEventListener(t4.event, t4.listener);
            });
          }, s(t2, [{ key: "mediaSrc", get: function() {
            var t3, e3 = (null == (t3 = this.media) ? void 0 : t3.firstChild) || this.media;
            return null == e3 ? void 0 : e3.src;
          } }]), t2;
        }();
        function Zn(t2) {
          var e2 = t2.querySelectorAll("source");
          [].slice.call(e2).forEach(function(e3) {
            t2.removeChild(e3);
          });
        }
        var ta = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 }, ea = function(t2) {
          var e2 = t2;
          return ta.hasOwnProperty(t2) && (e2 = ta[t2]), String.fromCharCode(e2);
        }, ra = 15, ia = 100, na = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 }, aa = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 }, sa = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 }, oa = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 }, la = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"], ua = function() {
          function t2() {
            this.time = null, this.verboseLevel = 0;
          }
          return t2.prototype.log = function(t3, e2) {
            if (this.verboseLevel >= t3) {
              var r3 = "function" == typeof e2 ? e2() : e2;
              w.log(this.time + " [" + t3 + "] " + r3);
            }
          }, t2;
        }(), ha = function(t2) {
          for (var e2 = [], r3 = 0; r3 < t2.length; r3++)
            e2.push(t2[r3].toString(16));
          return e2;
        }, da = function() {
          function t2() {
            this.foreground = "white", this.underline = false, this.italics = false, this.background = "black", this.flash = false;
          }
          var e2 = t2.prototype;
          return e2.reset = function() {
            this.foreground = "white", this.underline = false, this.italics = false, this.background = "black", this.flash = false;
          }, e2.setStyles = function(t3) {
            for (var e3 = ["foreground", "underline", "italics", "background", "flash"], r3 = 0; r3 < e3.length; r3++) {
              var i3 = e3[r3];
              t3.hasOwnProperty(i3) && (this[i3] = t3[i3]);
            }
          }, e2.isDefault = function() {
            return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash;
          }, e2.equals = function(t3) {
            return this.foreground === t3.foreground && this.underline === t3.underline && this.italics === t3.italics && this.background === t3.background && this.flash === t3.flash;
          }, e2.copy = function(t3) {
            this.foreground = t3.foreground, this.underline = t3.underline, this.italics = t3.italics, this.background = t3.background, this.flash = t3.flash;
          }, e2.toString = function() {
            return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
          }, t2;
        }(), ca = function() {
          function t2() {
            this.uchar = " ", this.penState = new da();
          }
          var e2 = t2.prototype;
          return e2.reset = function() {
            this.uchar = " ", this.penState.reset();
          }, e2.setChar = function(t3, e3) {
            this.uchar = t3, this.penState.copy(e3);
          }, e2.setPenState = function(t3) {
            this.penState.copy(t3);
          }, e2.equals = function(t3) {
            return this.uchar === t3.uchar && this.penState.equals(t3.penState);
          }, e2.copy = function(t3) {
            this.uchar = t3.uchar, this.penState.copy(t3.penState);
          }, e2.isEmpty = function() {
            return " " === this.uchar && this.penState.isDefault();
          }, t2;
        }(), fa = function() {
          function t2(t3) {
            this.chars = [], this.pos = 0, this.currPenState = new da(), this.cueStartTime = null, this.logger = void 0;
            for (var e3 = 0; e3 < ia; e3++)
              this.chars.push(new ca());
            this.logger = t3;
          }
          var e2 = t2.prototype;
          return e2.equals = function(t3) {
            for (var e3 = 0; e3 < ia; e3++)
              if (!this.chars[e3].equals(t3.chars[e3]))
                return false;
            return true;
          }, e2.copy = function(t3) {
            for (var e3 = 0; e3 < ia; e3++)
              this.chars[e3].copy(t3.chars[e3]);
          }, e2.isEmpty = function() {
            for (var t3 = true, e3 = 0; e3 < ia; e3++)
              if (!this.chars[e3].isEmpty()) {
                t3 = false;
                break;
              }
            return t3;
          }, e2.setCursor = function(t3) {
            this.pos !== t3 && (this.pos = t3), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > ia && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = ia);
          }, e2.moveCursor = function(t3) {
            var e3 = this.pos + t3;
            if (t3 > 1)
              for (var r3 = this.pos + 1; r3 < e3 + 1; r3++)
                this.chars[r3].setPenState(this.currPenState);
            this.setCursor(e3);
          }, e2.backSpace = function() {
            this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
          }, e2.insertChar = function(t3) {
            var e3 = this;
            t3 >= 144 && this.backSpace();
            var r3 = ea(t3);
            this.pos >= ia ? this.logger.log(0, function() {
              return "Cannot insert " + t3.toString(16) + " (" + r3 + ") at position " + e3.pos + ". Skipping it!";
            }) : (this.chars[this.pos].setChar(r3, this.currPenState), this.moveCursor(1));
          }, e2.clearFromPos = function(t3) {
            var e3;
            for (e3 = t3; e3 < ia; e3++)
              this.chars[e3].reset();
          }, e2.clear = function() {
            this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
          }, e2.clearToEndOfRow = function() {
            this.clearFromPos(this.pos);
          }, e2.getTextString = function() {
            for (var t3 = [], e3 = true, r3 = 0; r3 < ia; r3++) {
              var i3 = this.chars[r3].uchar;
              " " !== i3 && (e3 = false), t3.push(i3);
            }
            return e3 ? "" : t3.join("");
          }, e2.setPenStyles = function(t3) {
            this.currPenState.setStyles(t3), this.chars[this.pos].setPenState(this.currPenState);
          }, t2;
        }(), ga = function() {
          function t2(t3) {
            this.rows = [], this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
            for (var e3 = 0; e3 < ra; e3++)
              this.rows.push(new fa(t3));
            this.logger = t3;
          }
          var e2 = t2.prototype;
          return e2.reset = function() {
            for (var t3 = 0; t3 < ra; t3++)
              this.rows[t3].clear();
            this.currRow = 14;
          }, e2.equals = function(t3) {
            for (var e3 = true, r3 = 0; r3 < ra; r3++)
              if (!this.rows[r3].equals(t3.rows[r3])) {
                e3 = false;
                break;
              }
            return e3;
          }, e2.copy = function(t3) {
            for (var e3 = 0; e3 < ra; e3++)
              this.rows[e3].copy(t3.rows[e3]);
          }, e2.isEmpty = function() {
            for (var t3 = true, e3 = 0; e3 < ra; e3++)
              if (!this.rows[e3].isEmpty()) {
                t3 = false;
                break;
              }
            return t3;
          }, e2.backSpace = function() {
            this.rows[this.currRow].backSpace();
          }, e2.clearToEndOfRow = function() {
            this.rows[this.currRow].clearToEndOfRow();
          }, e2.insertChar = function(t3) {
            this.rows[this.currRow].insertChar(t3);
          }, e2.setPen = function(t3) {
            this.rows[this.currRow].setPenStyles(t3);
          }, e2.moveCursor = function(t3) {
            this.rows[this.currRow].moveCursor(t3);
          }, e2.setCursor = function(t3) {
            this.logger.log(2, "setCursor: " + t3), this.rows[this.currRow].setCursor(t3);
          }, e2.setPAC = function(t3) {
            this.logger.log(2, function() {
              return "pacData = " + JSON.stringify(t3);
            });
            var e3 = t3.row - 1;
            if (this.nrRollUpRows && e3 < this.nrRollUpRows - 1 && (e3 = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e3) {
              for (var r3 = 0; r3 < ra; r3++)
                this.rows[r3].clear();
              var i3 = this.currRow + 1 - this.nrRollUpRows, n2 = this.lastOutputScreen;
              if (n2) {
                var a2 = n2.rows[i3].cueStartTime, s2 = this.logger.time;
                if (null !== a2 && null !== s2 && a2 < s2)
                  for (var o2 = 0; o2 < this.nrRollUpRows; o2++)
                    this.rows[e3 - this.nrRollUpRows + o2 + 1].copy(n2.rows[i3 + o2]);
              }
            }
            this.currRow = e3;
            var l2 = this.rows[this.currRow];
            if (null !== t3.indent) {
              var u2 = t3.indent, h2 = Math.max(u2 - 1, 0);
              l2.setCursor(t3.indent), t3.color = l2.chars[h2].penState.foreground;
            }
            var d2 = { foreground: t3.color, underline: t3.underline, italics: t3.italics, background: "black", flash: false };
            this.setPen(d2);
          }, e2.setBkgData = function(t3) {
            this.logger.log(2, function() {
              return "bkgData = " + JSON.stringify(t3);
            }), this.backSpace(), this.setPen(t3), this.insertChar(32);
          }, e2.setRollUpRows = function(t3) {
            this.nrRollUpRows = t3;
          }, e2.rollUp = function() {
            var t3 = this;
            if (null !== this.nrRollUpRows) {
              this.logger.log(1, function() {
                return t3.getDisplayText();
              });
              var e3 = this.currRow + 1 - this.nrRollUpRows, r3 = this.rows.splice(e3, 1)[0];
              r3.clear(), this.rows.splice(this.currRow, 0, r3), this.logger.log(2, "Rolling up");
            } else
              this.logger.log(3, "roll_up but nrRollUpRows not set yet");
          }, e2.getDisplayText = function(t3) {
            t3 = t3 || false;
            for (var e3 = [], r3 = "", i3 = -1, n2 = 0; n2 < ra; n2++) {
              var a2 = this.rows[n2].getTextString();
              a2 && (i3 = n2 + 1, t3 ? e3.push("Row " + i3 + ": '" + a2 + "'") : e3.push(a2.trim()));
            }
            return e3.length > 0 && (r3 = t3 ? "[" + e3.join(" | ") + "]" : e3.join("\n")), r3;
          }, e2.getTextAndFormat = function() {
            return this.rows;
          }, t2;
        }(), va = function() {
          function t2(t3, e3, r3) {
            this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t3, this.outputFilter = e3, this.mode = null, this.verbose = 0, this.displayedMemory = new ga(r3), this.nonDisplayedMemory = new ga(r3), this.lastOutputScreen = new ga(r3), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r3;
          }
          var e2 = t2.prototype;
          return e2.reset = function() {
            this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
          }, e2.getHandler = function() {
            return this.outputFilter;
          }, e2.setHandler = function(t3) {
            this.outputFilter = t3;
          }, e2.setPAC = function(t3) {
            this.writeScreen.setPAC(t3);
          }, e2.setBkgData = function(t3) {
            this.writeScreen.setBkgData(t3);
          }, e2.setMode = function(t3) {
            t3 !== this.mode && (this.mode = t3, this.logger.log(2, function() {
              return "MODE=" + t3;
            }), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t3);
          }, e2.insertChars = function(t3) {
            for (var e3 = this, r3 = 0; r3 < t3.length; r3++)
              this.writeScreen.insertChar(t3[r3]);
            var i3 = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
            this.logger.log(2, function() {
              return i3 + ": " + e3.writeScreen.getDisplayText(true);
            }), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(1, function() {
              return "DISPLAYED: " + e3.displayedMemory.getDisplayText(true);
            }), this.outputDataUpdate());
          }, e2.ccRCL = function() {
            this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
          }, e2.ccBS = function() {
            this.logger.log(2, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
          }, e2.ccAOF = function() {
          }, e2.ccAON = function() {
          }, e2.ccDER = function() {
            this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
          }, e2.ccRU = function(t3) {
            this.logger.log(2, "RU(" + t3 + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t3);
          }, e2.ccFON = function() {
            this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({ flash: true });
          }, e2.ccRDC = function() {
            this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
          }, e2.ccTR = function() {
            this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
          }, e2.ccRTD = function() {
            this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
          }, e2.ccEDM = function() {
            this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(true);
          }, e2.ccCR = function() {
            this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(true);
          }, e2.ccENM = function() {
            this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
          }, e2.ccEOC = function() {
            var t3 = this;
            if (this.logger.log(2, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
              var e3 = this.displayedMemory;
              this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e3, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, function() {
                return "DISP: " + t3.displayedMemory.getDisplayText();
              });
            }
            this.outputDataUpdate(true);
          }, e2.ccTO = function(t3) {
            this.logger.log(2, "TO(" + t3 + ") - Tab Offset"), this.writeScreen.moveCursor(t3);
          }, e2.ccMIDROW = function(t3) {
            var e3 = { flash: false };
            if (e3.underline = t3 % 2 == 1, e3.italics = t3 >= 46, e3.italics)
              e3.foreground = "white";
            else {
              var r3 = Math.floor(t3 / 2) - 16;
              e3.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r3];
            }
            this.logger.log(2, "MIDROW: " + JSON.stringify(e3)), this.writeScreen.setPen(e3);
          }, e2.outputDataUpdate = function(t3) {
            void 0 === t3 && (t3 = false);
            var e3 = this.logger.time;
            null !== e3 && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e3, this.lastOutputScreen), t3 && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e3) : this.cueStartTime = e3, this.lastOutputScreen.copy(this.displayedMemory));
          }, e2.cueSplitAtTime = function(t3) {
            this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t3, this.displayedMemory), this.cueStartTime = t3));
          }, t2;
        }(), ma = function() {
          function t2(t3, e3, r3) {
            this.channels = void 0, this.currentChannel = 0, this.cmdHistory = { a: null, b: null }, this.logger = void 0;
            var i3 = this.logger = new ua();
            this.channels = [null, new va(t3, e3, i3), new va(t3 + 1, r3, i3)];
          }
          var e2 = t2.prototype;
          return e2.getHandler = function(t3) {
            return this.channels[t3].getHandler();
          }, e2.setHandler = function(t3, e3) {
            this.channels[t3].setHandler(e3);
          }, e2.addData = function(t3, e3) {
            var r3, i3, n2, a2 = false;
            this.logger.time = t3;
            for (var s2 = 0; s2 < e3.length; s2 += 2)
              if (i3 = 127 & e3[s2], n2 = 127 & e3[s2 + 1], 0 !== i3 || 0 !== n2) {
                if (this.logger.log(3, "[" + ha([e3[s2], e3[s2 + 1]]) + "] -> (" + ha([i3, n2]) + ")"), (r3 = this.parseCmd(i3, n2)) || (r3 = this.parseMidrow(i3, n2)), r3 || (r3 = this.parsePAC(i3, n2)), r3 || (r3 = this.parseBackgroundAttributes(i3, n2)), !r3 && (a2 = this.parseChars(i3, n2))) {
                  var o2 = this.currentChannel;
                  o2 && o2 > 0 ? this.channels[o2].insertChars(a2) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
                }
                r3 || a2 || this.logger.log(2, "Couldn't parse cleaned data " + ha([i3, n2]) + " orig: " + ha([e3[s2], e3[s2 + 1]]));
              }
          }, e2.parseCmd = function(t3, e3) {
            var r3 = this.cmdHistory;
            if (!((20 === t3 || 28 === t3 || 21 === t3 || 29 === t3) && e3 >= 32 && e3 <= 47 || (23 === t3 || 31 === t3) && e3 >= 33 && e3 <= 35))
              return false;
            if (ya(t3, e3, r3))
              return pa(null, null, r3), this.logger.log(3, "Repeated command (" + ha([t3, e3]) + ") is dropped"), true;
            var i3 = 20 === t3 || 21 === t3 || 23 === t3 ? 1 : 2, n2 = this.channels[i3];
            return 20 === t3 || 21 === t3 || 28 === t3 || 29 === t3 ? 32 === e3 ? n2.ccRCL() : 33 === e3 ? n2.ccBS() : 34 === e3 ? n2.ccAOF() : 35 === e3 ? n2.ccAON() : 36 === e3 ? n2.ccDER() : 37 === e3 ? n2.ccRU(2) : 38 === e3 ? n2.ccRU(3) : 39 === e3 ? n2.ccRU(4) : 40 === e3 ? n2.ccFON() : 41 === e3 ? n2.ccRDC() : 42 === e3 ? n2.ccTR() : 43 === e3 ? n2.ccRTD() : 44 === e3 ? n2.ccEDM() : 45 === e3 ? n2.ccCR() : 46 === e3 ? n2.ccENM() : 47 === e3 && n2.ccEOC() : n2.ccTO(e3 - 32), pa(t3, e3, r3), this.currentChannel = i3, true;
          }, e2.parseMidrow = function(t3, e3) {
            var r3 = 0;
            if ((17 === t3 || 25 === t3) && e3 >= 32 && e3 <= 47) {
              if ((r3 = 17 === t3 ? 1 : 2) !== this.currentChannel)
                return this.logger.log(0, "Mismatch channel in midrow parsing"), false;
              var i3 = this.channels[r3];
              return !!i3 && (i3.ccMIDROW(e3), this.logger.log(3, "MIDROW (" + ha([t3, e3]) + ")"), true);
            }
            return false;
          }, e2.parsePAC = function(t3, e3) {
            var r3, i3 = this.cmdHistory;
            if (!((t3 >= 17 && t3 <= 23 || t3 >= 25 && t3 <= 31) && e3 >= 64 && e3 <= 127 || (16 === t3 || 24 === t3) && e3 >= 64 && e3 <= 95))
              return false;
            if (ya(t3, e3, i3))
              return pa(null, null, i3), true;
            var n2 = t3 <= 23 ? 1 : 2;
            r3 = e3 >= 64 && e3 <= 95 ? 1 === n2 ? na[t3] : sa[t3] : 1 === n2 ? aa[t3] : oa[t3];
            var a2 = this.channels[n2];
            return !!a2 && (a2.setPAC(this.interpretPAC(r3, e3)), pa(t3, e3, i3), this.currentChannel = n2, true);
          }, e2.interpretPAC = function(t3, e3) {
            var r3, i3 = { color: null, italics: false, indent: null, underline: false, row: t3 };
            return r3 = e3 > 95 ? e3 - 96 : e3 - 64, i3.underline = 1 == (1 & r3), r3 <= 13 ? i3.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r3 / 2)] : r3 <= 15 ? (i3.italics = true, i3.color = "white") : i3.indent = 4 * Math.floor((r3 - 16) / 2), i3;
          }, e2.parseChars = function(t3, e3) {
            var r3, i3, n2 = null, a2 = null;
            if (t3 >= 25 ? (r3 = 2, a2 = t3 - 8) : (r3 = 1, a2 = t3), a2 >= 17 && a2 <= 19 ? (i3 = 17 === a2 ? e3 + 80 : 18 === a2 ? e3 + 112 : e3 + 144, this.logger.log(2, "Special char '" + ea(i3) + "' in channel " + r3), n2 = [i3]) : t3 >= 32 && t3 <= 127 && (n2 = 0 === e3 ? [t3] : [t3, e3]), n2) {
              var s2 = ha(n2);
              this.logger.log(3, "Char codes =  " + s2.join(",")), pa(t3, e3, this.cmdHistory);
            }
            return n2;
          }, e2.parseBackgroundAttributes = function(t3, e3) {
            var r3;
            if (!((16 === t3 || 24 === t3) && e3 >= 32 && e3 <= 47 || (23 === t3 || 31 === t3) && e3 >= 45 && e3 <= 47))
              return false;
            var i3 = {};
            16 === t3 || 24 === t3 ? (r3 = Math.floor((e3 - 32) / 2), i3.background = la[r3], e3 % 2 == 1 && (i3.background = i3.background + "_semi")) : 45 === e3 ? i3.background = "transparent" : (i3.foreground = "black", 47 === e3 && (i3.underline = true));
            var n2 = t3 <= 23 ? 1 : 2;
            return this.channels[n2].setBkgData(i3), pa(t3, e3, this.cmdHistory), true;
          }, e2.reset = function() {
            for (var t3 = 0; t3 < Object.keys(this.channels).length; t3++) {
              var e3 = this.channels[t3];
              e3 && e3.reset();
            }
            this.cmdHistory = { a: null, b: null };
          }, e2.cueSplitAtTime = function(t3) {
            for (var e3 = 0; e3 < this.channels.length; e3++) {
              var r3 = this.channels[e3];
              r3 && r3.cueSplitAtTime(t3);
            }
          }, t2;
        }();
        function pa(t2, e2, r3) {
          r3.a = t2, r3.b = e2;
        }
        function ya(t2, e2, r3) {
          return r3.a === t2 && r3.b === e2;
        }
        var Ea = function() {
          function t2(t3, e3) {
            this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = t3, this.trackName = e3;
          }
          var e2 = t2.prototype;
          return e2.dispatchCue = function() {
            null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
          }, e2.newCue = function(t3, e3, r3) {
            (null === this.startTime || this.startTime > t3) && (this.startTime = t3), this.endTime = e3, this.screen = r3, this.timelineController.createCaptionsTrack(this.trackName);
          }, e2.reset = function() {
            this.cueRanges = [], this.startTime = null;
          }, t2;
        }(), Ta = function() {
          if (null != j && j.VTTCue)
            return self.VTTCue;
          var t2 = ["", "lr", "rl"], e2 = ["start", "middle", "end", "left", "right"];
          function r3(t3, e3) {
            if ("string" != typeof e3)
              return false;
            if (!Array.isArray(t3))
              return false;
            var r4 = e3.toLowerCase();
            return !!~t3.indexOf(r4) && r4;
          }
          function i3(t3) {
            return r3(e2, t3);
          }
          function n2(t3) {
            for (var e3 = arguments.length, r4 = new Array(e3 > 1 ? e3 - 1 : 0), i4 = 1; i4 < e3; i4++)
              r4[i4 - 1] = arguments[i4];
            for (var n3 = 1; n3 < arguments.length; n3++) {
              var a3 = arguments[n3];
              for (var s2 in a3)
                t3[s2] = a3[s2];
            }
            return t3;
          }
          function a2(e3, a3, s2) {
            var o2 = this, l2 = { enumerable: true };
            o2.hasBeenReset = false;
            var u2 = "", h2 = false, d2 = e3, c2 = a3, f2 = s2, g2 = null, v2 = "", m2 = true, p2 = "auto", y2 = "start", E2 = 50, T2 = "middle", S2 = 50, L2 = "middle";
            Object.defineProperty(o2, "id", n2({}, l2, { get: function() {
              return u2;
            }, set: function(t3) {
              u2 = "" + t3;
            } })), Object.defineProperty(o2, "pauseOnExit", n2({}, l2, { get: function() {
              return h2;
            }, set: function(t3) {
              h2 = !!t3;
            } })), Object.defineProperty(o2, "startTime", n2({}, l2, { get: function() {
              return d2;
            }, set: function(t3) {
              if ("number" != typeof t3)
                throw new TypeError("Start time must be set to a number.");
              d2 = t3, this.hasBeenReset = true;
            } })), Object.defineProperty(o2, "endTime", n2({}, l2, { get: function() {
              return c2;
            }, set: function(t3) {
              if ("number" != typeof t3)
                throw new TypeError("End time must be set to a number.");
              c2 = t3, this.hasBeenReset = true;
            } })), Object.defineProperty(o2, "text", n2({}, l2, { get: function() {
              return f2;
            }, set: function(t3) {
              f2 = "" + t3, this.hasBeenReset = true;
            } })), Object.defineProperty(o2, "region", n2({}, l2, { get: function() {
              return g2;
            }, set: function(t3) {
              g2 = t3, this.hasBeenReset = true;
            } })), Object.defineProperty(o2, "vertical", n2({}, l2, { get: function() {
              return v2;
            }, set: function(e4) {
              var i4 = function(e5) {
                return r3(t2, e5);
              }(e4);
              if (false === i4)
                throw new SyntaxError("An invalid or illegal string was specified.");
              v2 = i4, this.hasBeenReset = true;
            } })), Object.defineProperty(o2, "snapToLines", n2({}, l2, { get: function() {
              return m2;
            }, set: function(t3) {
              m2 = !!t3, this.hasBeenReset = true;
            } })), Object.defineProperty(o2, "line", n2({}, l2, { get: function() {
              return p2;
            }, set: function(t3) {
              if ("number" != typeof t3 && "auto" !== t3)
                throw new SyntaxError("An invalid number or illegal string was specified.");
              p2 = t3, this.hasBeenReset = true;
            } })), Object.defineProperty(o2, "lineAlign", n2({}, l2, { get: function() {
              return y2;
            }, set: function(t3) {
              var e4 = i3(t3);
              if (!e4)
                throw new SyntaxError("An invalid or illegal string was specified.");
              y2 = e4, this.hasBeenReset = true;
            } })), Object.defineProperty(o2, "position", n2({}, l2, { get: function() {
              return E2;
            }, set: function(t3) {
              if (t3 < 0 || t3 > 100)
                throw new Error("Position must be between 0 and 100.");
              E2 = t3, this.hasBeenReset = true;
            } })), Object.defineProperty(o2, "positionAlign", n2({}, l2, { get: function() {
              return T2;
            }, set: function(t3) {
              var e4 = i3(t3);
              if (!e4)
                throw new SyntaxError("An invalid or illegal string was specified.");
              T2 = e4, this.hasBeenReset = true;
            } })), Object.defineProperty(o2, "size", n2({}, l2, { get: function() {
              return S2;
            }, set: function(t3) {
              if (t3 < 0 || t3 > 100)
                throw new Error("Size must be between 0 and 100.");
              S2 = t3, this.hasBeenReset = true;
            } })), Object.defineProperty(o2, "align", n2({}, l2, { get: function() {
              return L2;
            }, set: function(t3) {
              var e4 = i3(t3);
              if (!e4)
                throw new SyntaxError("An invalid or illegal string was specified.");
              L2 = e4, this.hasBeenReset = true;
            } })), o2.displayState = void 0;
          }
          return a2.prototype.getCueAsHTML = function() {
            return self.WebVTT.convertCueToDOMTree(self, this.text);
          }, a2;
        }(), Sa = function() {
          function t2() {
          }
          return t2.prototype.decode = function(t3, e2) {
            if (!t3)
              return "";
            if ("string" != typeof t3)
              throw new Error("Error - expected string data.");
            return decodeURIComponent(encodeURIComponent(t3));
          }, t2;
        }();
        function La(t2) {
          function e2(t3, e3, r4, i3) {
            return 3600 * (0 | t3) + 60 * (0 | e3) + (0 | r4) + parseFloat(i3 || 0);
          }
          var r3 = t2.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
          return r3 ? parseFloat(r3[2]) > 59 ? e2(r3[2], r3[3], 0, r3[4]) : e2(r3[1], r3[2], r3[3], r3[4]) : null;
        }
        var Aa = function() {
          function t2() {
            this.values = /* @__PURE__ */ Object.create(null);
          }
          var e2 = t2.prototype;
          return e2.set = function(t3, e3) {
            this.get(t3) || "" === e3 || (this.values[t3] = e3);
          }, e2.get = function(t3, e3, r3) {
            return r3 ? this.has(t3) ? this.values[t3] : e3[r3] : this.has(t3) ? this.values[t3] : e3;
          }, e2.has = function(t3) {
            return t3 in this.values;
          }, e2.alt = function(t3, e3, r3) {
            for (var i3 = 0; i3 < r3.length; ++i3)
              if (e3 === r3[i3]) {
                this.set(t3, e3);
                break;
              }
          }, e2.integer = function(t3, e3) {
            /^-?\d+$/.test(e3) && this.set(t3, parseInt(e3, 10));
          }, e2.percent = function(t3, e3) {
            if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e3)) {
              var r3 = parseFloat(e3);
              if (r3 >= 0 && r3 <= 100)
                return this.set(t3, r3), true;
            }
            return false;
          }, t2;
        }();
        function Ra(t2, e2, r3, i3) {
          var n2 = i3 ? t2.split(i3) : [t2];
          for (var a2 in n2)
            if ("string" == typeof n2[a2]) {
              var s2 = n2[a2].split(r3);
              2 === s2.length && e2(s2[0], s2[1]);
            }
        }
        var ka = new Ta(0, 0, ""), ba = "middle" === ka.align ? "middle" : "center";
        function Da(t2, e2, r3) {
          var i3 = t2;
          function n2() {
            var e3 = La(t2);
            if (null === e3)
              throw new Error("Malformed timestamp: " + i3);
            return t2 = t2.replace(/^[^\sa-zA-Z-]+/, ""), e3;
          }
          function a2() {
            t2 = t2.replace(/^\s+/, "");
          }
          if (a2(), e2.startTime = n2(), a2(), "-->" !== t2.slice(0, 3))
            throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + i3);
          t2 = t2.slice(3), a2(), e2.endTime = n2(), a2(), function(t3, e3) {
            var i4 = new Aa();
            Ra(t3, function(t4, e4) {
              var n4;
              switch (t4) {
                case "region":
                  for (var a4 = r3.length - 1; a4 >= 0; a4--)
                    if (r3[a4].id === e4) {
                      i4.set(t4, r3[a4].region);
                      break;
                    }
                  break;
                case "vertical":
                  i4.alt(t4, e4, ["rl", "lr"]);
                  break;
                case "line":
                  n4 = e4.split(","), i4.integer(t4, n4[0]), i4.percent(t4, n4[0]) && i4.set("snapToLines", false), i4.alt(t4, n4[0], ["auto"]), 2 === n4.length && i4.alt("lineAlign", n4[1], ["start", ba, "end"]);
                  break;
                case "position":
                  n4 = e4.split(","), i4.percent(t4, n4[0]), 2 === n4.length && i4.alt("positionAlign", n4[1], ["start", ba, "end", "line-left", "line-right", "auto"]);
                  break;
                case "size":
                  i4.percent(t4, e4);
                  break;
                case "align":
                  i4.alt(t4, e4, ["start", ba, "end", "left", "right"]);
              }
            }, /:/, /\s/), e3.region = i4.get("region", null), e3.vertical = i4.get("vertical", "");
            var n3 = i4.get("line", "auto");
            "auto" === n3 && -1 === ka.line && (n3 = -1), e3.line = n3, e3.lineAlign = i4.get("lineAlign", "start"), e3.snapToLines = i4.get("snapToLines", true), e3.size = i4.get("size", 100), e3.align = i4.get("align", ba);
            var a3 = i4.get("position", "auto");
            "auto" === a3 && 50 === ka.position && (a3 = "start" === e3.align || "left" === e3.align ? 0 : "end" === e3.align || "right" === e3.align ? 100 : 50), e3.position = a3;
          }(t2, e2);
        }
        function Ia(t2) {
          return t2.replace(/<br(?: \/)?>/gi, "\n");
        }
        var wa = function() {
          function t2() {
            this.state = "INITIAL", this.buffer = "", this.decoder = new Sa(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
          }
          var e2 = t2.prototype;
          return e2.parse = function(t3) {
            var e3 = this;
            function r3() {
              var t4 = e3.buffer, r4 = 0;
              for (t4 = Ia(t4); r4 < t4.length && "\r" !== t4[r4] && "\n" !== t4[r4]; )
                ++r4;
              var i4 = t4.slice(0, r4);
              return "\r" === t4[r4] && ++r4, "\n" === t4[r4] && ++r4, e3.buffer = t4.slice(r4), i4;
            }
            t3 && (e3.buffer += e3.decoder.decode(t3, { stream: true }));
            try {
              var i3 = "";
              if ("INITIAL" === e3.state) {
                if (!/\r\n|\n/.test(e3.buffer))
                  return this;
                var n2 = (i3 = r3()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                if (null == n2 || !n2[0])
                  throw new Error("Malformed WebVTT signature.");
                e3.state = "HEADER";
              }
              for (var a2 = false; e3.buffer; ) {
                if (!/\r\n|\n/.test(e3.buffer))
                  return this;
                switch (a2 ? a2 = false : i3 = r3(), e3.state) {
                  case "HEADER":
                    /:/.test(i3) ? Ra(i3, function(t4, e4) {
                    }, /:/) : i3 || (e3.state = "ID");
                    continue;
                  case "NOTE":
                    i3 || (e3.state = "ID");
                    continue;
                  case "ID":
                    if (/^NOTE($|[ \t])/.test(i3)) {
                      e3.state = "NOTE";
                      break;
                    }
                    if (!i3)
                      continue;
                    if (e3.cue = new Ta(0, 0, ""), e3.state = "CUE", -1 === i3.indexOf("-->")) {
                      e3.cue.id = i3;
                      continue;
                    }
                  case "CUE":
                    if (!e3.cue) {
                      e3.state = "BADCUE";
                      continue;
                    }
                    try {
                      Da(i3, e3.cue, e3.regionList);
                    } catch (t4) {
                      e3.cue = null, e3.state = "BADCUE";
                      continue;
                    }
                    e3.state = "CUETEXT";
                    continue;
                  case "CUETEXT":
                    var s2 = -1 !== i3.indexOf("-->");
                    if (!i3 || s2 && (a2 = true)) {
                      e3.oncue && e3.cue && e3.oncue(e3.cue), e3.cue = null, e3.state = "ID";
                      continue;
                    }
                    if (null === e3.cue)
                      continue;
                    e3.cue.text && (e3.cue.text += "\n"), e3.cue.text += i3;
                    continue;
                  case "BADCUE":
                    i3 || (e3.state = "ID");
                }
              }
            } catch (t4) {
              "CUETEXT" === e3.state && e3.cue && e3.oncue && e3.oncue(e3.cue), e3.cue = null, e3.state = "INITIAL" === e3.state ? "BADWEBVTT" : "BADCUE";
            }
            return this;
          }, e2.flush = function() {
            var t3 = this;
            try {
              if ((t3.cue || "HEADER" === t3.state) && (t3.buffer += "\n\n", t3.parse()), "INITIAL" === t3.state || "BADWEBVTT" === t3.state)
                throw new Error("Malformed WebVTT signature.");
            } catch (e3) {
              t3.onparsingerror && t3.onparsingerror(e3);
            }
            return t3.onflush && t3.onflush(), this;
          }, t2;
        }(), Ca = /\r\n|\n\r|\n|\r/g, _a = function(t2, e2, r3) {
          return void 0 === r3 && (r3 = 0), t2.slice(r3, r3 + e2.length) === e2;
        }, xa = function(t2) {
          for (var e2 = 5381, r3 = t2.length; r3; )
            e2 = 33 * e2 ^ t2.charCodeAt(--r3);
          return (e2 >>> 0).toString();
        };
        function Pa(t2, e2, r3) {
          return xa(t2.toString()) + xa(e2.toString()) + xa(r3);
        }
        function Fa(t2, e2, r3, i3, n2, a2, s2) {
          var o2, l2, u2, h2 = new wa(), d2 = Tt(new Uint8Array(t2)).trim().replace(Ca, "\n").split("\n"), c2 = [], f2 = e2 ? (o2 = e2.baseTime, void 0 === (l2 = e2.timescale) && (l2 = 1), yn(o2, pn, 1 / l2)) : 0, g2 = "00:00.000", v2 = 0, m2 = 0, p2 = true;
          h2.oncue = function(t3) {
            var a3 = r3[i3], s3 = r3.ccOffset, o3 = (v2 - f2) / 9e4;
            if (null != a3 && a3.new && (void 0 !== m2 ? s3 = r3.ccOffset = a3.start : function(t4, e3, r4) {
              var i4 = t4[e3], n3 = t4[i4.prevCC];
              if (!n3 || !n3.new && i4.new)
                return t4.ccOffset = t4.presentationOffset = i4.start, void (i4.new = false);
              for (; null != (a4 = n3) && a4.new; ) {
                var a4;
                t4.ccOffset += i4.start - n3.start, i4.new = false, n3 = t4[(i4 = n3).prevCC];
              }
              t4.presentationOffset = r4;
            }(r3, i3, o3)), o3) {
              if (!e2)
                return void (u2 = new Error("Missing initPTS for VTT MPEGTS"));
              s3 = o3 - r3.presentationOffset;
            }
            var l3 = t3.endTime - t3.startTime, h3 = An(9e4 * (t3.startTime + s3 - m2), 9e4 * n2) / 9e4;
            t3.startTime = Math.max(h3, 0), t3.endTime = Math.max(h3 + l3, 0);
            var d3 = t3.text.trim();
            t3.text = decodeURIComponent(encodeURIComponent(d3)), t3.id || (t3.id = Pa(t3.startTime, t3.endTime, d3)), t3.endTime > 0 && c2.push(t3);
          }, h2.onparsingerror = function(t3) {
            u2 = t3;
          }, h2.onflush = function() {
            u2 ? s2(u2) : a2(c2);
          }, d2.forEach(function(t3) {
            if (p2) {
              if (_a(t3, "X-TIMESTAMP-MAP=")) {
                p2 = false, t3.slice(16).split(",").forEach(function(t4) {
                  _a(t4, "LOCAL:") ? g2 = t4.slice(6) : _a(t4, "MPEGTS:") && (v2 = parseInt(t4.slice(7)));
                });
                try {
                  m2 = function(t4) {
                    var e3 = parseInt(t4.slice(-3)), r4 = parseInt(t4.slice(-6, -4)), i4 = parseInt(t4.slice(-9, -7)), n3 = t4.length > 9 ? parseInt(t4.substring(0, t4.indexOf(":"))) : 0;
                    if (!(y(e3) && y(r4) && y(i4) && y(n3)))
                      throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t4);
                    return e3 += 1e3 * r4, (e3 += 6e4 * i4) + 36e5 * n3;
                  }(g2) / 1e3;
                } catch (t4) {
                  u2 = t4;
                }
                return;
              }
              "" === t3 && (p2 = false);
            }
            h2.parse(t3 + "\n");
          }), h2.flush();
        }
        var Ma = "stpp.ttml.im1t", Oa = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, Na = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, Ua = { left: "start", center: "center", right: "end", start: "start", end: "end" };
        function Ba(t2, e2, r3, i3) {
          var n2 = xt(new Uint8Array(t2), ["mdat"]);
          if (0 !== n2.length) {
            var a2, s2, l2, u2, h2 = n2.map(function(t3) {
              return Tt(t3);
            }), d2 = (a2 = e2.baseTime, s2 = 1, void 0 === (l2 = e2.timescale) && (l2 = 1), void 0 === u2 && (u2 = false), yn(a2, s2, 1 / l2, u2));
            try {
              h2.forEach(function(t3) {
                return r3(function(t4, e3) {
                  var r4 = new DOMParser().parseFromString(t4, "text/xml"), i4 = r4.getElementsByTagName("tt")[0];
                  if (!i4)
                    throw new Error("Invalid ttml");
                  var n3 = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 }, a3 = Object.keys(n3).reduce(function(t5, e4) {
                    return t5[e4] = i4.getAttribute("ttp:" + e4) || n3[e4], t5;
                  }, {}), s3 = "preserve" !== i4.getAttribute("xml:space"), l3 = Ka(Ga(i4, "styling", "style")), u3 = Ka(Ga(i4, "layout", "region")), h3 = Ga(i4, "body", "[begin]");
                  return [].map.call(h3, function(t5) {
                    var r5 = Ha(t5, s3);
                    if (!r5 || !t5.hasAttribute("begin"))
                      return null;
                    var i5 = Wa(t5.getAttribute("begin"), a3), n4 = Wa(t5.getAttribute("dur"), a3), h4 = Wa(t5.getAttribute("end"), a3);
                    if (null === i5)
                      throw Ya(t5);
                    if (null === h4) {
                      if (null === n4)
                        throw Ya(t5);
                      h4 = i5 + n4;
                    }
                    var d3 = new Ta(i5 - e3, h4 - e3, r5);
                    d3.id = Pa(d3.startTime, d3.endTime, d3.text);
                    var c2 = function(t6, e4, r6) {
                      var i6 = "http://www.w3.org/ns/ttml#styling", n5 = null, a4 = ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"], s4 = null != t6 && t6.hasAttribute("style") ? t6.getAttribute("style") : null;
                      return s4 && r6.hasOwnProperty(s4) && (n5 = r6[s4]), a4.reduce(function(r7, a5) {
                        var s5 = Va(e4, i6, a5) || Va(t6, i6, a5) || Va(n5, i6, a5);
                        return s5 && (r7[a5] = s5), r7;
                      }, {});
                    }(u3[t5.getAttribute("region")], l3[t5.getAttribute("style")], l3), f2 = c2.textAlign;
                    if (f2) {
                      var g2 = Ua[f2];
                      g2 && (d3.lineAlign = g2), d3.align = f2;
                    }
                    return o(d3, c2), d3;
                  }).filter(function(t5) {
                    return null !== t5;
                  });
                }(t3, d2));
              });
            } catch (t3) {
              i3(t3);
            }
          } else
            i3(new Error("Could not parse IMSC1 mdat"));
        }
        function Ga(t2, e2, r3) {
          var i3 = t2.getElementsByTagName(e2)[0];
          return i3 ? [].slice.call(i3.querySelectorAll(r3)) : [];
        }
        function Ka(t2) {
          return t2.reduce(function(t3, e2) {
            var r3 = e2.getAttribute("xml:id");
            return r3 && (t3[r3] = e2), t3;
          }, {});
        }
        function Ha(t2, e2) {
          return [].slice.call(t2.childNodes).reduce(function(t3, r3, i3) {
            var n2;
            return "br" === r3.nodeName && i3 ? t3 + "\n" : null != (n2 = r3.childNodes) && n2.length ? Ha(r3, e2) : e2 ? t3 + r3.textContent.trim().replace(/\s+/g, " ") : t3 + r3.textContent;
          }, "");
        }
        function Va(t2, e2, r3) {
          return t2 && t2.hasAttributeNS(e2, r3) ? t2.getAttributeNS(e2, r3) : null;
        }
        function Ya(t2) {
          return new Error("Could not parse ttml timestamp " + t2);
        }
        function Wa(t2, e2) {
          if (!t2)
            return null;
          var r3 = La(t2);
          return null === r3 && (Oa.test(t2) ? r3 = function(t3, e3) {
            var r4 = Oa.exec(t3), i3 = (0 | r4[4]) + (0 | r4[5]) / e3.subFrameRate;
            return 3600 * (0 | r4[1]) + 60 * (0 | r4[2]) + (0 | r4[3]) + i3 / e3.frameRate;
          }(t2, e2) : Na.test(t2) && (r3 = function(t3, e3) {
            var r4 = Na.exec(t3), i3 = Number(r4[1]);
            switch (r4[2]) {
              case "h":
                return 3600 * i3;
              case "m":
                return 60 * i3;
              case "ms":
                return 1e3 * i3;
              case "f":
                return i3 / e3.frameRate;
              case "t":
                return i3 / e3.tickRate;
            }
            return i3;
          }(t2, e2))), r3;
        }
        var ja = function() {
          function t2(t3) {
            this.hls = void 0, this.media = null, this.config = void 0, this.enabled = true, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: true } }, this.captionsProperties = void 0, this.hls = t3, this.config = t3.config, this.Cues = t3.config.cueHandler, this.captionsProperties = { textTrack1: { label: this.config.captionsTextTrack1Label, languageCode: this.config.captionsTextTrack1LanguageCode }, textTrack2: { label: this.config.captionsTextTrack2Label, languageCode: this.config.captionsTextTrack2LanguageCode }, textTrack3: { label: this.config.captionsTextTrack3Label, languageCode: this.config.captionsTextTrack3LanguageCode }, textTrack4: { label: this.config.captionsTextTrack4Label, languageCode: this.config.captionsTextTrack4LanguageCode } }, t3.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), t3.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t3.on(S.FRAG_LOADING, this.onFragLoading, this), t3.on(S.FRAG_LOADED, this.onFragLoaded, this), t3.on(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t3.on(S.FRAG_DECRYPTED, this.onFragDecrypted, this), t3.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t3.on(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t3.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
            var t3 = this.hls;
            t3.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), t3.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t3.off(S.FRAG_LOADING, this.onFragLoading, this), t3.off(S.FRAG_LOADED, this.onFragLoaded, this), t3.off(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t3.off(S.FRAG_DECRYPTED, this.onFragDecrypted, this), t3.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t3.off(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t3.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = null, this.cea608Parser1 = this.cea608Parser2 = void 0;
          }, e2.initCea608Parsers = function() {
            if (this.config.enableCEA708Captions && (!this.cea608Parser1 || !this.cea608Parser2)) {
              var t3 = new Ea(this, "textTrack1"), e3 = new Ea(this, "textTrack2"), r3 = new Ea(this, "textTrack3"), i3 = new Ea(this, "textTrack4");
              this.cea608Parser1 = new ma(1, t3, e3), this.cea608Parser2 = new ma(3, r3, i3);
            }
          }, e2.addCues = function(t3, e3, r3, i3, n2) {
            for (var a2, s2, o2, l2, u2 = false, h2 = n2.length; h2--; ) {
              var d2 = n2[h2], c2 = (a2 = d2[0], s2 = d2[1], o2 = e3, l2 = r3, Math.min(s2, l2) - Math.max(a2, o2));
              if (c2 >= 0 && (d2[0] = Math.min(d2[0], e3), d2[1] = Math.max(d2[1], r3), u2 = true, c2 / (r3 - e3) > 0.5))
                return;
            }
            if (u2 || n2.push([e3, r3]), this.config.renderTextTracksNatively) {
              var f2 = this.captionsTracks[t3];
              this.Cues.newCue(f2, e3, r3, i3);
            } else {
              var g2 = this.Cues.newCue(null, e3, r3, i3);
              this.hls.trigger(S.CUES_PARSED, { type: "captions", cues: g2, track: t3 });
            }
          }, e2.onInitPtsFound = function(t3, e3) {
            var r3 = this, i3 = e3.frag, n2 = e3.id, a2 = e3.initPTS, s2 = e3.timescale, o2 = this.unparsedVttFrags;
            "main" === n2 && (this.initPTS[i3.cc] = { baseTime: a2, timescale: s2 }), o2.length && (this.unparsedVttFrags = [], o2.forEach(function(t4) {
              r3.onFragLoaded(S.FRAG_LOADED, t4);
            }));
          }, e2.getExistingTrack = function(t3, e3) {
            var r3 = this.media;
            if (r3)
              for (var i3 = 0; i3 < r3.textTracks.length; i3++) {
                var n2 = r3.textTracks[i3];
                if (Xa(n2, { name: t3, lang: e3, attrs: {} }))
                  return n2;
              }
            return null;
          }, e2.createCaptionsTrack = function(t3) {
            this.config.renderTextTracksNatively ? this.createNativeTrack(t3) : this.createNonNativeTrack(t3);
          }, e2.createNativeTrack = function(t3) {
            if (!this.captionsTracks[t3]) {
              var e3 = this.captionsProperties, r3 = this.captionsTracks, i3 = this.media, n2 = e3[t3], a2 = n2.label, s2 = n2.languageCode, o2 = this.getExistingTrack(a2, s2);
              if (o2)
                r3[t3] = o2, Ne(r3[t3]), Me(r3[t3], i3);
              else {
                var l2 = this.createTextTrack("captions", a2, s2);
                l2 && (l2[t3] = true, r3[t3] = l2);
              }
            }
          }, e2.createNonNativeTrack = function(t3) {
            if (!this.nonNativeCaptionsTracks[t3]) {
              var e3 = this.captionsProperties[t3];
              if (e3) {
                var r3 = { _id: t3, label: e3.label, kind: "captions", default: !!e3.media && !!e3.media.default, closedCaptions: e3.media };
                this.nonNativeCaptionsTracks[t3] = r3, this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [r3] });
              }
            }
          }, e2.createTextTrack = function(t3, e3, r3) {
            var i3 = this.media;
            if (i3)
              return i3.addTextTrack(t3, e3, r3);
          }, e2.onMediaAttaching = function(t3, e3) {
            this.media = e3.media, this._cleanTracks();
          }, e2.onMediaDetaching = function() {
            var t3 = this.captionsTracks;
            Object.keys(t3).forEach(function(e3) {
              Ne(t3[e3]), delete t3[e3];
            }), this.nonNativeCaptionsTracks = {};
          }, e2.onManifestLoading = function() {
            this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: true } }, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
          }, e2._cleanTracks = function() {
            var t3 = this.media;
            if (t3) {
              var e3 = t3.textTracks;
              if (e3)
                for (var r3 = 0; r3 < e3.length; r3++)
                  Ne(e3[r3]);
            }
          }, e2.onSubtitleTracksUpdated = function(t3, e3) {
            var r3 = this, i3 = e3.subtitleTracks || [], n2 = i3.some(function(t4) {
              return t4.textCodec === Ma;
            });
            if (this.config.enableWebVTT || n2 && this.config.enableIMSC1) {
              if (Hn(this.tracks, i3))
                return void (this.tracks = i3);
              if (this.textTracks = [], this.tracks = i3, this.config.renderTextTracksNatively) {
                var a2 = this.media, s2 = a2 ? Be(a2.textTracks) : null;
                if (this.tracks.forEach(function(t4, e4) {
                  var i4;
                  if (s2) {
                    for (var n3 = null, a3 = 0; a3 < s2.length; a3++)
                      if (s2[a3] && Xa(s2[a3], t4)) {
                        n3 = s2[a3], s2[a3] = null;
                        break;
                      }
                    n3 && (i4 = n3);
                  }
                  if (i4)
                    Ne(i4);
                  else {
                    var o3 = qa(t4);
                    (i4 = r3.createTextTrack(o3, t4.name, t4.lang)) && (i4.mode = "disabled");
                  }
                  i4 && r3.textTracks.push(i4);
                }), null != s2 && s2.length) {
                  var o2 = s2.filter(function(t4) {
                    return null !== t4;
                  }).map(function(t4) {
                    return t4.label;
                  });
                  o2.length && w.warn("Media element contains unused subtitle tracks: " + o2.join(", ") + ". Replace media element for each source to clear TextTracks and captions menu.");
                }
              } else if (this.tracks.length) {
                var l2 = this.tracks.map(function(t4) {
                  return { label: t4.name, kind: t4.type.toLowerCase(), default: t4.default, subtitleTrack: t4 };
                });
                this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: l2 });
              }
            }
          }, e2.onManifestLoaded = function(t3, e3) {
            var r3 = this;
            this.config.enableCEA708Captions && e3.captions && e3.captions.forEach(function(t4) {
              var e4 = /(?:CC|SERVICE)([1-4])/.exec(t4.instreamId);
              if (e4) {
                var i3 = "textTrack" + e4[1], n2 = r3.captionsProperties[i3];
                n2 && (n2.label = t4.name, t4.lang && (n2.languageCode = t4.lang), n2.media = t4);
              }
            });
          }, e2.closedCaptionsForLevel = function(t3) {
            var e3 = this.hls.levels[t3.level];
            return null == e3 ? void 0 : e3.attrs["CLOSED-CAPTIONS"];
          }, e2.onFragLoading = function(t3, e3) {
            this.initCea608Parsers();
            var r3 = this.cea608Parser1, i3 = this.cea608Parser2, n2 = this.lastCc, a2 = this.lastSn, s2 = this.lastPartIndex;
            if (this.enabled && r3 && i3 && e3.frag.type === we) {
              var o2, l2, u2 = e3.frag, h2 = u2.cc, d2 = u2.sn, c2 = null != (o2 = null == e3 || null == (l2 = e3.part) ? void 0 : l2.index) ? o2 : -1;
              d2 === a2 + 1 || d2 === a2 && c2 === s2 + 1 || h2 === n2 || (r3.reset(), i3.reset()), this.lastCc = h2, this.lastSn = d2, this.lastPartIndex = c2;
            }
          }, e2.onFragLoaded = function(t3, e3) {
            var r3 = e3.frag, i3 = e3.payload;
            if (r3.type === _e)
              if (i3.byteLength) {
                var n2 = r3.decryptdata, a2 = "stats" in e3;
                if (null == n2 || !n2.encrypted || a2) {
                  var s2 = this.tracks[r3.level], o2 = this.vttCCs;
                  o2[r3.cc] || (o2[r3.cc] = { start: r3.start, prevCC: this.prevCC, new: true }, this.prevCC = r3.cc), s2 && s2.textCodec === Ma ? this._parseIMSC1(r3, i3) : this._parseVTTs(e3);
                }
              } else
                this.hls.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: false, frag: r3, error: new Error("Empty subtitle payload") });
          }, e2._parseIMSC1 = function(t3, e3) {
            var r3 = this, i3 = this.hls;
            Ba(e3, this.initPTS[t3.cc], function(e4) {
              r3._appendCues(e4, t3.level), i3.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: true, frag: t3 });
            }, function(e4) {
              w.log("Failed to parse IMSC1: " + e4), i3.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: false, frag: t3, error: e4 });
            });
          }, e2._parseVTTs = function(t3) {
            var e3, r3 = this, i3 = t3.frag, n2 = t3.payload, a2 = this.initPTS, s2 = this.unparsedVttFrags, o2 = a2.length - 1;
            if (a2[i3.cc] || -1 !== o2) {
              var l2 = this.hls;
              Fa(null != (e3 = i3.initSegment) && e3.data ? Kt(i3.initSegment.data, new Uint8Array(n2)) : n2, this.initPTS[i3.cc], this.vttCCs, i3.cc, i3.start, function(t4) {
                r3._appendCues(t4, i3.level), l2.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: true, frag: i3 });
              }, function(e4) {
                var a3 = "Missing initPTS for VTT MPEGTS" === e4.message;
                a3 ? s2.push(t3) : r3._fallbackToIMSC1(i3, n2), w.log("Failed to parse VTT cue: " + e4), a3 && o2 > i3.cc || l2.trigger(S.SUBTITLE_FRAG_PROCESSED, { success: false, frag: i3, error: e4 });
              });
            } else
              s2.push(t3);
          }, e2._fallbackToIMSC1 = function(t3, e3) {
            var r3 = this, i3 = this.tracks[t3.level];
            i3.textCodec || Ba(e3, this.initPTS[t3.cc], function() {
              i3.textCodec = Ma, r3._parseIMSC1(t3, e3);
            }, function() {
              i3.textCodec = "wvtt";
            });
          }, e2._appendCues = function(t3, e3) {
            var r3 = this.hls;
            if (this.config.renderTextTracksNatively) {
              var i3 = this.textTracks[e3];
              if (!i3 || "disabled" === i3.mode)
                return;
              t3.forEach(function(t4) {
                return Oe(i3, t4);
              });
            } else {
              var n2 = this.tracks[e3];
              if (!n2)
                return;
              var a2 = n2.default ? "default" : "subtitles" + e3;
              r3.trigger(S.CUES_PARSED, { type: "subtitles", cues: t3, track: a2 });
            }
          }, e2.onFragDecrypted = function(t3, e3) {
            e3.frag.type === _e && this.onFragLoaded(S.FRAG_LOADED, e3);
          }, e2.onSubtitleTracksCleared = function() {
            this.tracks = [], this.captionsTracks = {};
          }, e2.onFragParsingUserdata = function(t3, e3) {
            this.initCea608Parsers();
            var r3 = this.cea608Parser1, i3 = this.cea608Parser2;
            if (this.enabled && r3 && i3) {
              var n2 = e3.frag, a2 = e3.samples;
              if (n2.type !== we || "NONE" !== this.closedCaptionsForLevel(n2))
                for (var s2 = 0; s2 < a2.length; s2++) {
                  var o2 = a2[s2].bytes;
                  if (o2) {
                    var l2 = this.extractCea608Data(o2);
                    r3.addData(a2[s2].pts, l2[0]), i3.addData(a2[s2].pts, l2[1]);
                  }
                }
            }
          }, e2.onBufferFlushing = function(t3, e3) {
            var r3 = e3.startOffset, i3 = e3.endOffset, n2 = e3.endOffsetSubtitles, a2 = e3.type, s2 = this.media;
            if (s2 && !(s2.currentTime < i3)) {
              if (!a2 || "video" === a2) {
                var o2 = this.captionsTracks;
                Object.keys(o2).forEach(function(t4) {
                  return Ue(o2[t4], r3, i3);
                });
              }
              if (this.config.renderTextTracksNatively && 0 === r3 && void 0 !== n2) {
                var l2 = this.textTracks;
                Object.keys(l2).forEach(function(t4) {
                  return Ue(l2[t4], r3, n2);
                });
              }
            }
          }, e2.extractCea608Data = function(t3) {
            for (var e3 = [[], []], r3 = 31 & t3[0], i3 = 2, n2 = 0; n2 < r3; n2++) {
              var a2 = t3[i3++], s2 = 127 & t3[i3++], o2 = 127 & t3[i3++];
              if ((0 !== s2 || 0 !== o2) && 0 != (4 & a2)) {
                var l2 = 3 & a2;
                0 !== l2 && 1 !== l2 || (e3[l2].push(s2), e3[l2].push(o2));
              }
            }
            return e3;
          }, t2;
        }();
        function qa(t2) {
          return t2.characteristics && /transcribes-spoken-dialog/gi.test(t2.characteristics) && /describes-music-and-sound/gi.test(t2.characteristics) ? "captions" : "subtitles";
        }
        function Xa(t2, e2) {
          return !!t2 && t2.kind === qa(e2) && Yn(e2, t2);
        }
        var za = function() {
          function t2(t3) {
            this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = t3, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
          }
          var e2 = t2.prototype;
          return e2.setStreamController = function(t3) {
            this.streamController = t3;
          }, e2.destroy = function() {
            this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
          }, e2.registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t3.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t3.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t3.on(S.BUFFER_CODECS, this.onBufferCodecs, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this);
          }, e2.unregisterListener = function() {
            var t3 = this.hls;
            t3.off(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t3.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t3.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t3.off(S.BUFFER_CODECS, this.onBufferCodecs, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this);
          }, e2.onFpsDropLevelCapping = function(t3, e3) {
            var r3 = this.hls.levels[e3.droppedLevel];
            this.isLevelAllowed(r3) && this.restrictedLevels.push({ bitrate: r3.bitrate, height: r3.height, width: r3.width });
          }, e2.onMediaAttaching = function(t3, e3) {
            this.media = e3.media instanceof HTMLVideoElement ? e3.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
          }, e2.onManifestParsed = function(t3, e3) {
            var r3 = this.hls;
            this.restrictedLevels = [], this.firstLevel = e3.firstLevel, r3.config.capLevelToPlayerSize && e3.video && this.startCapping();
          }, e2.onLevelsUpdated = function(t3, e3) {
            this.timer && y(this.autoLevelCapping) && this.detectPlayerSize();
          }, e2.onBufferCodecs = function(t3, e3) {
            this.hls.config.capLevelToPlayerSize && e3.video && this.startCapping();
          }, e2.onMediaDetaching = function() {
            this.stopCapping();
          }, e2.detectPlayerSize = function() {
            if (this.media) {
              if (this.mediaHeight <= 0 || this.mediaWidth <= 0)
                return void (this.clientRect = null);
              var t3 = this.hls.levels;
              if (t3.length) {
                var e3 = this.hls, r3 = this.getMaxLevel(t3.length - 1);
                r3 !== this.autoLevelCapping && w.log("Setting autoLevelCapping to " + r3 + ": " + t3[r3].height + "p@" + t3[r3].bitrate + " for media " + this.mediaWidth + "x" + this.mediaHeight), e3.autoLevelCapping = r3, e3.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e3.autoLevelCapping;
              }
            }
          }, e2.getMaxLevel = function(e3) {
            var r3 = this, i3 = this.hls.levels;
            if (!i3.length)
              return -1;
            var n2 = i3.filter(function(t3, i4) {
              return r3.isLevelAllowed(t3) && i4 <= e3;
            });
            return this.clientRect = null, t2.getMaxLevelByMediaSize(n2, this.mediaWidth, this.mediaHeight);
          }, e2.startCapping = function() {
            this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
          }, e2.stopCapping = function() {
            this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
          }, e2.getDimensions = function() {
            if (this.clientRect)
              return this.clientRect;
            var t3 = this.media, e3 = { width: 0, height: 0 };
            if (t3) {
              var r3 = t3.getBoundingClientRect();
              e3.width = r3.width, e3.height = r3.height, e3.width || e3.height || (e3.width = r3.right - r3.left || t3.width || 0, e3.height = r3.bottom - r3.top || t3.height || 0);
            }
            return this.clientRect = e3, e3;
          }, e2.isLevelAllowed = function(t3) {
            return !this.restrictedLevels.some(function(e3) {
              return t3.bitrate === e3.bitrate && t3.width === e3.width && t3.height === e3.height;
            });
          }, t2.getMaxLevelByMediaSize = function(t3, e3, r3) {
            if (null == t3 || !t3.length)
              return -1;
            for (var i3, n2, a2 = t3.length - 1, s2 = Math.max(e3, r3), o2 = 0; o2 < t3.length; o2 += 1) {
              var l2 = t3[o2];
              if ((l2.width >= s2 || l2.height >= s2) && (i3 = l2, !(n2 = t3[o2 + 1]) || i3.width !== n2.width || i3.height !== n2.height)) {
                a2 = o2;
                break;
              }
            }
            return a2;
          }, s(t2, [{ key: "mediaWidth", get: function() {
            return this.getDimensions().width * this.contentScaleFactor;
          } }, { key: "mediaHeight", get: function() {
            return this.getDimensions().height * this.contentScaleFactor;
          } }, { key: "contentScaleFactor", get: function() {
            var t3 = 1;
            if (!this.hls.config.ignoreDevicePixelRatio)
              try {
                t3 = self.devicePixelRatio;
              } catch (t4) {
              }
            return t3;
          } }]), t2;
        }(), Qa = function() {
          function t2(t3) {
            this.hls = void 0, this.isVideoPlaybackQualityAvailable = false, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t3, this.registerListeners();
          }
          var e2 = t2.prototype;
          return e2.setStreamController = function(t3) {
            this.streamController = t3;
          }, e2.registerListeners = function() {
            this.hls.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this);
          }, e2.unregisterListeners = function() {
            this.hls.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this);
          }, e2.destroy = function() {
            this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = false, this.media = null;
          }, e2.onMediaAttaching = function(t3, e3) {
            var r3 = this.hls.config;
            if (r3.capLevelOnFPSDrop) {
              var i3 = e3.media instanceof self.HTMLVideoElement ? e3.media : null;
              this.media = i3, i3 && "function" == typeof i3.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = true), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), r3.fpsDroppedMonitoringPeriod);
            }
          }, e2.checkFPS = function(t3, e3, r3) {
            var i3 = performance.now();
            if (e3) {
              if (this.lastTime) {
                var n2 = i3 - this.lastTime, a2 = r3 - this.lastDroppedFrames, s2 = e3 - this.lastDecodedFrames, o2 = 1e3 * a2 / n2, l2 = this.hls;
                if (l2.trigger(S.FPS_DROP, { currentDropped: a2, currentDecoded: s2, totalDroppedFrames: r3 }), o2 > 0 && a2 > l2.config.fpsDroppedMonitoringThreshold * s2) {
                  var u2 = l2.currentLevel;
                  w.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u2), u2 > 0 && (-1 === l2.autoLevelCapping || l2.autoLevelCapping >= u2) && (u2 -= 1, l2.trigger(S.FPS_DROP_LEVEL_CAPPING, { level: u2, droppedLevel: l2.currentLevel }), l2.autoLevelCapping = u2, this.streamController.nextLevelSwitch());
                }
              }
              this.lastTime = i3, this.lastDroppedFrames = r3, this.lastDecodedFrames = e3;
            }
          }, e2.checkFPSInterval = function() {
            var t3 = this.media;
            if (t3)
              if (this.isVideoPlaybackQualityAvailable) {
                var e3 = t3.getVideoPlaybackQuality();
                this.checkFPS(t3, e3.totalVideoFrames, e3.droppedVideoFrames);
              } else
                this.checkFPS(t3, t3.webkitDecodedFrameCount, t3.webkitDroppedFrameCount);
          }, t2;
        }(), Ja = "[eme]", $a = function() {
          function t2(e3) {
            this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = t2.CDMCleanupPromise ? [t2.CDMCleanupPromise] : [], this.onMediaEncrypted = this._onMediaEncrypted.bind(this), this.onWaitingForKey = this._onWaitingForKey.bind(this), this.debug = w.debug.bind(w, Ja), this.log = w.log.bind(w, Ja), this.warn = w.warn.bind(w, Ja), this.error = w.error.bind(w, Ja), this.hls = e3, this.config = e3.config, this.registerListeners();
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
            this.unregisterListeners(), this.onMediaDetached();
            var t3 = this.config;
            t3.requestMediaKeySystemAccessFunc = null, t3.licenseXhrSetup = t3.licenseResponseCallback = void 0, t3.drmSystems = t3.drmSystemOptions = {}, this.hls = this.onMediaEncrypted = this.onWaitingForKey = this.keyIdToKeySessionPromise = null, this.config = null;
          }, e2.registerListeners = function() {
            this.hls.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(S.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(S.MANIFEST_LOADED, this.onManifestLoaded, this);
          }, e2.unregisterListeners = function() {
            this.hls.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(S.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(S.MANIFEST_LOADED, this.onManifestLoaded, this);
          }, e2.getLicenseServerUrl = function(t3) {
            var e3 = this.config, r3 = e3.drmSystems, i3 = e3.widevineLicenseUrl, n2 = r3[t3];
            if (n2)
              return n2.licenseUrl;
            if (t3 === q.WIDEVINE && i3)
              return i3;
            throw new Error('no license server URL configured for key-system "' + t3 + '"');
          }, e2.getServerCertificateUrl = function(t3) {
            var e3 = this.config.drmSystems[t3];
            if (e3)
              return e3.serverCertificateUrl;
            this.log('No Server Certificate in config.drmSystems["' + t3 + '"]');
          }, e2.attemptKeySystemAccess = function(t3) {
            var e3 = this, r3 = this.hls.levels, i3 = function(t4, e4, r4) {
              return !!t4 && r4.indexOf(t4) === e4;
            }, n2 = r3.map(function(t4) {
              return t4.audioCodec;
            }).filter(i3), a2 = r3.map(function(t4) {
              return t4.videoCodec;
            }).filter(i3);
            return n2.length + a2.length === 0 && a2.push("avc1.42e01e"), new Promise(function(r4, i4) {
              !function t4(s2) {
                var o2 = s2.shift();
                e3.getMediaKeysPromise(o2, n2, a2).then(function(t5) {
                  return r4({ keySystem: o2, mediaKeys: t5 });
                }).catch(function(e4) {
                  s2.length ? t4(s2) : i4(e4 instanceof is ? e4 : new is({ type: L.KEY_SYSTEM_ERROR, details: A.KEY_SYSTEM_NO_ACCESS, error: e4, fatal: true }, e4.message));
                });
              }(t3);
            });
          }, e2.requestMediaKeySystemAccess = function(t3, e3) {
            var r3 = this.config.requestMediaKeySystemAccessFunc;
            if ("function" != typeof r3) {
              var i3 = "Configured requestMediaKeySystemAccess is not a function " + r3;
              return null === it && "http:" === self.location.protocol && (i3 = "navigator.requestMediaKeySystemAccess is not available over insecure protocol " + location.protocol), Promise.reject(new Error(i3));
            }
            return r3(t3, e3);
          }, e2.getMediaKeysPromise = function(t3, e3, r3) {
            var i3 = this, n2 = function(t4, e4, r4, i4) {
              var n3;
              switch (t4) {
                case q.FAIRPLAY:
                  n3 = ["cenc", "sinf"];
                  break;
                case q.WIDEVINE:
                case q.PLAYREADY:
                  n3 = ["cenc"];
                  break;
                case q.CLEARKEY:
                  n3 = ["cenc", "keyids"];
                  break;
                default:
                  throw new Error("Unknown key-system: " + t4);
              }
              return function(t5, e5, r5, i5) {
                return [{ initDataTypes: t5, persistentState: i5.persistentState || "optional", distinctiveIdentifier: i5.distinctiveIdentifier || "optional", sessionTypes: i5.sessionTypes || [i5.sessionType || "temporary"], audioCapabilities: e5.map(function(t6) {
                  return { contentType: 'audio/mp4; codecs="' + t6 + '"', robustness: i5.audioRobustness || "", encryptionScheme: i5.audioEncryptionScheme || null };
                }), videoCapabilities: r5.map(function(t6) {
                  return { contentType: 'video/mp4; codecs="' + t6 + '"', robustness: i5.videoRobustness || "", encryptionScheme: i5.videoEncryptionScheme || null };
                }) }];
              }(n3, e4, r4, i4);
            }(t3, e3, r3, this.config.drmSystemOptions), a2 = this.keySystemAccessPromises[t3], s2 = null == a2 ? void 0 : a2.keySystemAccess;
            if (!s2) {
              this.log('Requesting encrypted media "' + t3 + '" key-system access with config: ' + JSON.stringify(n2)), s2 = this.requestMediaKeySystemAccess(t3, n2);
              var o2 = this.keySystemAccessPromises[t3] = { keySystemAccess: s2 };
              return s2.catch(function(e4) {
                i3.log('Failed to obtain access to key-system "' + t3 + '": ' + e4);
              }), s2.then(function(e4) {
                i3.log('Access for key-system "' + e4.keySystem + '" obtained');
                var r4 = i3.fetchServerCertificate(t3);
                return i3.log('Create media-keys for "' + t3 + '"'), o2.mediaKeys = e4.createMediaKeys().then(function(e5) {
                  return i3.log('Media-keys created for "' + t3 + '"'), r4.then(function(r5) {
                    return r5 ? i3.setMediaKeysServerCertificate(e5, t3, r5) : e5;
                  });
                }), o2.mediaKeys.catch(function(e5) {
                  i3.error('Failed to create media-keys for "' + t3 + '"}: ' + e5);
                }), o2.mediaKeys;
              });
            }
            return s2.then(function() {
              return a2.mediaKeys;
            });
          }, e2.createMediaKeySessionContext = function(t3) {
            var e3 = t3.decryptdata, r3 = t3.keySystem, i3 = t3.mediaKeys;
            this.log('Creating key-system session "' + r3 + '" keyId: ' + Lt(e3.keyId || []));
            var n2 = i3.createSession(), a2 = { decryptdata: e3, keySystem: r3, mediaKeys: i3, mediaKeysSession: n2, keyStatus: "status-pending" };
            return this.mediaKeySessions.push(a2), a2;
          }, e2.renewKeySession = function(t3) {
            var e3 = t3.decryptdata;
            if (e3.pssh) {
              var r3 = this.createMediaKeySessionContext(t3), i3 = this.getKeyIdString(e3);
              this.keyIdToKeySessionPromise[i3] = this.generateRequestWithPreferredKeySession(r3, "cenc", e3.pssh, "expired");
            } else
              this.warn("Could not renew expired session. Missing pssh initData.");
            this.removeSession(t3);
          }, e2.getKeyIdString = function(t3) {
            if (!t3)
              throw new Error("Could not read keyId of undefined decryptdata");
            if (null === t3.keyId)
              throw new Error("keyId is null");
            return Lt(t3.keyId);
          }, e2.updateKeySession = function(t3, e3) {
            var r3, i3 = t3.mediaKeysSession;
            return this.log('Updating key-session "' + i3.sessionId + '" for keyID ' + Lt((null == (r3 = t3.decryptdata) ? void 0 : r3.keyId) || []) + "\n      } (data length: " + (e3 ? e3.byteLength : e3) + ")"), i3.update(e3);
          }, e2.selectKeySystemFormat = function(t3) {
            var e3 = Object.keys(t3.levelkeys || {});
            return this.keyFormatPromise || (this.log("Selecting key-system from fragment (sn: " + t3.sn + " " + t3.type + ": " + t3.level + ") key formats " + e3.join(", ")), this.keyFormatPromise = this.getKeyFormatPromise(e3)), this.keyFormatPromise;
          }, e2.getKeyFormatPromise = function(t3) {
            var e3 = this;
            return new Promise(function(r3, i3) {
              var n2 = et(e3.config), a2 = t3.map($).filter(function(t4) {
                return !!t4 && -1 !== n2.indexOf(t4);
              });
              return e3.getKeySystemSelectionPromise(a2).then(function(t4) {
                var e4 = t4.keySystem, n3 = tt(e4);
                n3 ? r3(n3) : i3(new Error('Unable to find format for key-system "' + e4 + '"'));
              }).catch(i3);
            });
          }, e2.loadKey = function(t3) {
            var e3 = this, r3 = t3.keyInfo.decryptdata, i3 = this.getKeyIdString(r3), n2 = "(keyId: " + i3 + ' format: "' + r3.keyFormat + '" method: ' + r3.method + " uri: " + r3.uri + ")";
            this.log("Starting session for key " + n2);
            var a2 = this.keyIdToKeySessionPromise[i3];
            return a2 || (a2 = this.keyIdToKeySessionPromise[i3] = this.getKeySystemForKeyPromise(r3).then(function(i4) {
              var a3 = i4.keySystem, s2 = i4.mediaKeys;
              return e3.throwIfDestroyed(), e3.log("Handle encrypted media sn: " + t3.frag.sn + " " + t3.frag.type + ": " + t3.frag.level + " using key " + n2), e3.attemptSetMediaKeys(a3, s2).then(function() {
                e3.throwIfDestroyed();
                var t4 = e3.createMediaKeySessionContext({ keySystem: a3, mediaKeys: s2, decryptdata: r3 });
                return e3.generateRequestWithPreferredKeySession(t4, "cenc", r3.pssh, "playlist-key");
              });
            })).catch(function(t4) {
              return e3.handleError(t4);
            }), a2;
          }, e2.throwIfDestroyed = function(t3) {
            if (!this.hls)
              throw new Error("invalid state");
          }, e2.handleError = function(t3) {
            this.hls && (this.error(t3.message), t3 instanceof is ? this.hls.trigger(S.ERROR, t3.data) : this.hls.trigger(S.ERROR, { type: L.KEY_SYSTEM_ERROR, details: A.KEY_SYSTEM_NO_KEYS, error: t3, fatal: true }));
          }, e2.getKeySystemForKeyPromise = function(t3) {
            var e3 = this.getKeyIdString(t3), r3 = this.keyIdToKeySessionPromise[e3];
            if (!r3) {
              var i3 = $(t3.keyFormat), n2 = i3 ? [i3] : et(this.config);
              return this.attemptKeySystemAccess(n2);
            }
            return r3;
          }, e2.getKeySystemSelectionPromise = function(t3) {
            if (t3.length || (t3 = et(this.config)), 0 === t3.length)
              throw new is({ type: L.KEY_SYSTEM_ERROR, details: A.KEY_SYSTEM_NO_CONFIGURED_LICENSE, fatal: true }, "Missing key-system license configuration options " + JSON.stringify({ drmSystems: this.config.drmSystems }));
            return this.attemptKeySystemAccess(t3);
          }, e2._onMediaEncrypted = function(t3) {
            var e3 = this, r3 = t3.initDataType, i3 = t3.initData;
            if (this.debug('"' + t3.type + '" event: init data type: "' + r3 + '"'), null !== i3) {
              var n2, a2;
              if ("sinf" === r3 && this.config.drmSystems[q.FAIRPLAY]) {
                var s2 = bt(new Uint8Array(i3));
                try {
                  var o2 = V(JSON.parse(s2).sinf), l2 = Bt(new Uint8Array(o2));
                  if (!l2)
                    return;
                  n2 = l2.subarray(8, 24), a2 = q.FAIRPLAY;
                } catch (t4) {
                  return void this.warn('Failed to parse sinf "encrypted" event message initData');
                }
              } else {
                var u2 = function(t4) {
                  if (!(t4 instanceof ArrayBuffer) || t4.byteLength < 32)
                    return null;
                  var e4 = { version: 0, systemId: "", kids: null, data: null }, r4 = new DataView(t4), i4 = r4.getUint32(0);
                  if (t4.byteLength !== i4 && i4 > 44)
                    return null;
                  if (1886614376 !== r4.getUint32(4))
                    return null;
                  if (e4.version = r4.getUint32(8) >>> 24, e4.version > 1)
                    return null;
                  e4.systemId = Lt(new Uint8Array(t4, 12, 16));
                  var n3 = r4.getUint32(28);
                  if (0 === e4.version) {
                    if (i4 - 32 < n3)
                      return null;
                    e4.data = new Uint8Array(t4, 32, n3);
                  } else if (1 === e4.version) {
                    e4.kids = [];
                    for (var a3 = 0; a3 < n3; a3++)
                      e4.kids.push(new Uint8Array(t4, 32 + 16 * a3, 16));
                  }
                  return e4;
                }(i3);
                if (null === u2)
                  return;
                0 === u2.version && u2.systemId === Z && u2.data && (n2 = u2.data.subarray(8, 24)), a2 = function(t4) {
                  if (t4 === Z)
                    return q.WIDEVINE;
                }(u2.systemId);
              }
              if (a2 && n2) {
                for (var h2, d2 = Lt(n2), c2 = this.keyIdToKeySessionPromise, f2 = this.mediaKeySessions, g2 = c2[d2], v2 = function() {
                  var t4 = f2[m2], a3 = t4.decryptdata;
                  if (a3.pssh || !a3.keyId)
                    return 0;
                  var s3 = Lt(a3.keyId);
                  return d2 === s3 || -1 !== a3.uri.replace(/-/g, "").indexOf(d2) ? (g2 = c2[s3], delete c2[s3], a3.pssh = new Uint8Array(i3), a3.keyId = n2, g2 = c2[d2] = g2.then(function() {
                    return e3.generateRequestWithPreferredKeySession(t4, r3, i3, "encrypted-event-key-match");
                  }), 1) : void 0;
                }, m2 = 0; m2 < f2.length && (0 === (h2 = v2()) || 1 !== h2); m2++)
                  ;
                g2 || (g2 = c2[d2] = this.getKeySystemSelectionPromise([a2]).then(function(t4) {
                  var a3, s3 = t4.keySystem, o3 = t4.mediaKeys;
                  e3.throwIfDestroyed();
                  var l3 = new Xt("ISO-23001-7", d2, null != (a3 = tt(s3)) ? a3 : "");
                  return l3.pssh = new Uint8Array(i3), l3.keyId = n2, e3.attemptSetMediaKeys(s3, o3).then(function() {
                    e3.throwIfDestroyed();
                    var t5 = e3.createMediaKeySessionContext({ decryptdata: l3, keySystem: s3, mediaKeys: o3 });
                    return e3.generateRequestWithPreferredKeySession(t5, r3, i3, "encrypted-event-no-match");
                  });
                })), g2.catch(function(t4) {
                  return e3.handleError(t4);
                });
              }
            }
          }, e2._onWaitingForKey = function(t3) {
            this.log('"' + t3.type + '" event');
          }, e2.attemptSetMediaKeys = function(t3, e3) {
            var r3 = this, i3 = this.setMediaKeysQueue.slice();
            this.log('Setting media-keys for "' + t3 + '"');
            var n2 = Promise.all(i3).then(function() {
              if (!r3.media)
                throw new Error("Attempted to set mediaKeys without media element attached");
              return r3.media.setMediaKeys(e3);
            });
            return this.setMediaKeysQueue.push(n2), n2.then(function() {
              r3.log('Media-keys set for "' + t3 + '"'), i3.push(n2), r3.setMediaKeysQueue = r3.setMediaKeysQueue.filter(function(t4) {
                return -1 === i3.indexOf(t4);
              });
            });
          }, e2.generateRequestWithPreferredKeySession = function(t3, e3, r3, i3) {
            var n2, a2, s2 = this, o2 = null == (n2 = this.config.drmSystems) || null == (a2 = n2[t3.keySystem]) ? void 0 : a2.generateRequest;
            if (o2)
              try {
                var l2 = o2.call(this.hls, e3, r3, t3);
                if (!l2)
                  throw new Error("Invalid response from configured generateRequest filter");
                e3 = l2.initDataType, r3 = t3.decryptdata.pssh = l2.initData ? new Uint8Array(l2.initData) : null;
              } catch (t4) {
                var u2;
                if (this.warn(t4.message), null != (u2 = this.hls) && u2.config.debug)
                  throw t4;
              }
            if (null === r3)
              return this.log('Skipping key-session request for "' + i3 + '" (no initData)'), Promise.resolve(t3);
            var h2 = this.getKeyIdString(t3.decryptdata);
            this.log('Generating key-session request for "' + i3 + '": ' + h2 + " (init data type: " + e3 + " length: " + (r3 ? r3.byteLength : null) + ")");
            var d2 = new Nn(), c2 = t3._onmessage = function(e4) {
              var r4 = t3.mediaKeysSession;
              if (r4) {
                var i4 = e4.messageType, n3 = e4.message;
                s2.log('"' + i4 + '" message event for session "' + r4.sessionId + '" message size: ' + n3.byteLength), "license-request" === i4 || "license-renewal" === i4 ? s2.renewLicense(t3, n3).catch(function(t4) {
                  s2.handleError(t4), d2.emit("error", t4);
                }) : "license-release" === i4 ? t3.keySystem === q.FAIRPLAY && (s2.updateKeySession(t3, W("acknowledged")), s2.removeSession(t3)) : s2.warn('unhandled media key message type "' + i4 + '"');
              } else
                d2.emit("error", new Error("invalid state"));
            }, f2 = t3._onkeystatuseschange = function(e4) {
              if (t3.mediaKeysSession) {
                s2.onKeyStatusChange(t3);
                var r4 = t3.keyStatus;
                d2.emit("keyStatus", r4), "expired" === r4 && (s2.warn(t3.keySystem + " expired for key " + h2), s2.renewKeySession(t3));
              } else
                d2.emit("error", new Error("invalid state"));
            };
            t3.mediaKeysSession.addEventListener("message", c2), t3.mediaKeysSession.addEventListener("keystatuseschange", f2);
            var g2 = new Promise(function(t4, e4) {
              d2.on("error", e4), d2.on("keyStatus", function(r4) {
                r4.startsWith("usable") ? t4() : "output-restricted" === r4 ? e4(new is({ type: L.KEY_SYSTEM_ERROR, details: A.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED, fatal: false }, "HDCP level output restricted")) : "internal-error" === r4 ? e4(new is({ type: L.KEY_SYSTEM_ERROR, details: A.KEY_SYSTEM_STATUS_INTERNAL_ERROR, fatal: true }, 'key status changed to "' + r4 + '"')) : "expired" === r4 ? e4(new Error("key expired while generating request")) : s2.warn('unhandled key status change "' + r4 + '"');
              });
            });
            return t3.mediaKeysSession.generateRequest(e3, r3).then(function() {
              var e4;
              s2.log('Request generated for key-session "' + (null == (e4 = t3.mediaKeysSession) ? void 0 : e4.sessionId) + '" keyId: ' + h2);
            }).catch(function(t4) {
              throw new is({ type: L.KEY_SYSTEM_ERROR, details: A.KEY_SYSTEM_NO_SESSION, error: t4, fatal: false }, "Error generating key-session request: " + t4);
            }).then(function() {
              return g2;
            }).catch(function(e4) {
              throw d2.removeAllListeners(), s2.removeSession(t3), e4;
            }).then(function() {
              return d2.removeAllListeners(), t3;
            });
          }, e2.onKeyStatusChange = function(t3) {
            var e3 = this;
            t3.mediaKeysSession.keyStatuses.forEach(function(r3, i3) {
              e3.log('key status change "' + r3 + '" for keyStatuses keyId: ' + Lt("buffer" in i3 ? new Uint8Array(i3.buffer, i3.byteOffset, i3.byteLength) : new Uint8Array(i3)) + " session keyId: " + Lt(new Uint8Array(t3.decryptdata.keyId || [])) + " uri: " + t3.decryptdata.uri), t3.keyStatus = r3;
            });
          }, e2.fetchServerCertificate = function(t3) {
            var e3 = this.config, r3 = new (0, e3.loader)(e3), n2 = this.getServerCertificateUrl(t3);
            return n2 ? (this.log('Fetching server certificate for "' + t3 + '"'), new Promise(function(a2, s2) {
              var o2 = { responseType: "arraybuffer", url: n2 }, l2 = e3.certLoadPolicy.default, u2 = { loadPolicy: l2, timeout: l2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 }, h2 = { onSuccess: function(t4, e4, r4, i3) {
                a2(t4.data);
              }, onError: function(e4, r4, a3, l3) {
                s2(new is({ type: L.KEY_SYSTEM_ERROR, details: A.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED, fatal: true, networkDetails: a3, response: i2({ url: o2.url, data: void 0 }, e4) }, '"' + t3 + '" certificate request failed (' + n2 + "). Status: " + e4.code + " (" + e4.text + ")"));
              }, onTimeout: function(e4, r4, i3) {
                s2(new is({ type: L.KEY_SYSTEM_ERROR, details: A.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED, fatal: true, networkDetails: i3, response: { url: o2.url, data: void 0 } }, '"' + t3 + '" certificate request timed out (' + n2 + ")"));
              }, onAbort: function(t4, e4, r4) {
                s2(new Error("aborted"));
              } };
              r3.load(o2, u2, h2);
            })) : Promise.resolve();
          }, e2.setMediaKeysServerCertificate = function(t3, e3, r3) {
            var i3 = this;
            return new Promise(function(n2, a2) {
              t3.setServerCertificate(r3).then(function(a3) {
                i3.log("setServerCertificate " + (a3 ? "success" : "not supported by CDM") + " (" + (null == r3 ? void 0 : r3.byteLength) + ') on "' + e3 + '"'), n2(t3);
              }).catch(function(t4) {
                a2(new is({ type: L.KEY_SYSTEM_ERROR, details: A.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED, error: t4, fatal: true }, t4.message));
              });
            });
          }, e2.renewLicense = function(t3, e3) {
            var r3 = this;
            return this.requestLicense(t3, new Uint8Array(e3)).then(function(e4) {
              return r3.updateKeySession(t3, new Uint8Array(e4)).catch(function(t4) {
                throw new is({ type: L.KEY_SYSTEM_ERROR, details: A.KEY_SYSTEM_SESSION_UPDATE_FAILED, error: t4, fatal: true }, t4.message);
              });
            });
          }, e2.unpackPlayReadyKeyMessage = function(t3, e3) {
            var r3 = String.fromCharCode.apply(null, new Uint16Array(e3.buffer));
            if (!r3.includes("PlayReadyKeyMessage"))
              return t3.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), e3;
            var i3 = new DOMParser().parseFromString(r3, "application/xml"), n2 = i3.querySelectorAll("HttpHeader");
            if (n2.length > 0)
              for (var a2, s2 = 0, o2 = n2.length; s2 < o2; s2++) {
                var l2, u2, h2 = null == (l2 = (a2 = n2[s2]).querySelector("name")) ? void 0 : l2.textContent, d2 = null == (u2 = a2.querySelector("value")) ? void 0 : u2.textContent;
                h2 && d2 && t3.setRequestHeader(h2, d2);
              }
            var c2 = i3.querySelector("Challenge"), f2 = null == c2 ? void 0 : c2.textContent;
            if (!f2)
              throw new Error("Cannot find <Challenge> in key message");
            return W(atob(f2));
          }, e2.setupLicenseXHR = function(t3, e3, r3, i3) {
            var n2 = this, a2 = this.config.licenseXhrSetup;
            return a2 ? Promise.resolve().then(function() {
              if (!r3.decryptdata)
                throw new Error("Key removed");
              return a2.call(n2.hls, t3, e3, r3, i3);
            }).catch(function(s2) {
              if (!r3.decryptdata)
                throw s2;
              return t3.open("POST", e3, true), a2.call(n2.hls, t3, e3, r3, i3);
            }).then(function(r4) {
              return t3.readyState || t3.open("POST", e3, true), { xhr: t3, licenseChallenge: r4 || i3 };
            }) : (t3.open("POST", e3, true), Promise.resolve({ xhr: t3, licenseChallenge: i3 }));
          }, e2.requestLicense = function(t3, e3) {
            var r3 = this, i3 = this.config.keyLoadPolicy.default;
            return new Promise(function(n2, a2) {
              var s2 = r3.getLicenseServerUrl(t3.keySystem);
              r3.log("Sending license request to URL: " + s2);
              var o2 = new XMLHttpRequest();
              o2.responseType = "arraybuffer", o2.onreadystatechange = function() {
                if (!r3.hls || !t3.mediaKeysSession)
                  return a2(new Error("invalid state"));
                if (4 === o2.readyState)
                  if (200 === o2.status) {
                    r3._requestLicenseFailureCount = 0;
                    var l2 = o2.response;
                    r3.log("License received " + (l2 instanceof ArrayBuffer ? l2.byteLength : l2));
                    var u2 = r3.config.licenseResponseCallback;
                    if (u2)
                      try {
                        l2 = u2.call(r3.hls, o2, s2, t3);
                      } catch (t4) {
                        r3.error(t4);
                      }
                    n2(l2);
                  } else {
                    var h2 = i3.errorRetry, d2 = h2 ? h2.maxNumRetry : 0;
                    if (r3._requestLicenseFailureCount++, r3._requestLicenseFailureCount > d2 || o2.status >= 400 && o2.status < 500)
                      a2(new is({ type: L.KEY_SYSTEM_ERROR, details: A.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: true, networkDetails: o2, response: { url: s2, data: void 0, code: o2.status, text: o2.statusText } }, "License Request XHR failed (" + s2 + "). Status: " + o2.status + " (" + o2.statusText + ")"));
                    else {
                      var c2 = d2 - r3._requestLicenseFailureCount + 1;
                      r3.warn("Retrying license request, " + c2 + " attempts left"), r3.requestLicense(t3, e3).then(n2, a2);
                    }
                  }
              }, t3.licenseXhr && t3.licenseXhr.readyState !== XMLHttpRequest.DONE && t3.licenseXhr.abort(), t3.licenseXhr = o2, r3.setupLicenseXHR(o2, s2, t3, e3).then(function(e4) {
                var i4 = e4.xhr, n3 = e4.licenseChallenge;
                t3.keySystem == q.PLAYREADY && (n3 = r3.unpackPlayReadyKeyMessage(i4, n3)), i4.send(n3);
              });
            });
          }, e2.onMediaAttached = function(t3, e3) {
            if (this.config.emeEnabled) {
              var r3 = e3.media;
              this.media = r3, r3.addEventListener("encrypted", this.onMediaEncrypted), r3.addEventListener("waitingforkey", this.onWaitingForKey);
            }
          }, e2.onMediaDetached = function() {
            var e3 = this, r3 = this.media, i3 = this.mediaKeySessions;
            r3 && (r3.removeEventListener("encrypted", this.onMediaEncrypted), r3.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, Xt.clearKeyUriToKeyIdMap();
            var n2 = i3.length;
            t2.CDMCleanupPromise = Promise.all(i3.map(function(t3) {
              return e3.removeSession(t3);
            }).concat(null == r3 ? void 0 : r3.setMediaKeys(null).catch(function(t3) {
              e3.log("Could not clear media keys: " + t3);
            }))).then(function() {
              n2 && (e3.log("finished closing key sessions and clearing media keys"), i3.length = 0);
            }).catch(function(t3) {
              e3.log("Could not close sessions and clear media keys: " + t3);
            });
          }, e2.onManifestLoading = function() {
            this.keyFormatPromise = null;
          }, e2.onManifestLoaded = function(t3, e3) {
            var r3 = e3.sessionKeys;
            if (r3 && this.config.emeEnabled && !this.keyFormatPromise) {
              var i3 = r3.reduce(function(t4, e4) {
                return -1 === t4.indexOf(e4.keyFormat) && t4.push(e4.keyFormat), t4;
              }, []);
              this.log("Selecting key-system from session-keys " + i3.join(", ")), this.keyFormatPromise = this.getKeyFormatPromise(i3);
            }
          }, e2.removeSession = function(t3) {
            var e3 = this, r3 = t3.mediaKeysSession, i3 = t3.licenseXhr;
            if (r3) {
              this.log("Remove licenses and keys and close session " + r3.sessionId), t3._onmessage && (r3.removeEventListener("message", t3._onmessage), t3._onmessage = void 0), t3._onkeystatuseschange && (r3.removeEventListener("keystatuseschange", t3._onkeystatuseschange), t3._onkeystatuseschange = void 0), i3 && i3.readyState !== XMLHttpRequest.DONE && i3.abort(), t3.mediaKeysSession = t3.decryptdata = t3.licenseXhr = void 0;
              var n2 = this.mediaKeySessions.indexOf(t3);
              return n2 > -1 && this.mediaKeySessions.splice(n2, 1), r3.remove().catch(function(t4) {
                e3.log("Could not remove session: " + t4);
              }).then(function() {
                return r3.close();
              }).catch(function(t4) {
                e3.log("Could not close session: " + t4);
              });
            }
          }, t2;
        }();
        $a.CDMCleanupPromise = void 0;
        var Za, ts, es, rs, is = function(t2) {
          function e2(e3, r3) {
            var i3;
            return (i3 = t2.call(this, r3) || this).data = void 0, e3.error || (e3.error = new Error(r3)), i3.data = e3, e3.err = e3.error, i3;
          }
          return l(e2, t2), e2;
        }(c(Error));
        !function(t2) {
          t2.MANIFEST = "m", t2.AUDIO = "a", t2.VIDEO = "v", t2.MUXED = "av", t2.INIT = "i", t2.CAPTION = "c", t2.TIMED_TEXT = "tt", t2.KEY = "k", t2.OTHER = "o";
        }(Za || (Za = {})), function(t2) {
          t2.DASH = "d", t2.HLS = "h", t2.SMOOTH = "s", t2.OTHER = "o";
        }(ts || (ts = {})), function(t2) {
          t2.OBJECT = "CMCD-Object", t2.REQUEST = "CMCD-Request", t2.SESSION = "CMCD-Session", t2.STATUS = "CMCD-Status";
        }(es || (es = {}));
        var ns = ((rs = {})[es.OBJECT] = ["br", "d", "ot", "tb"], rs[es.REQUEST] = ["bl", "dl", "mtp", "nor", "nrr", "su"], rs[es.SESSION] = ["cid", "pr", "sf", "sid", "st", "v"], rs[es.STATUS] = ["bs", "rtp"], rs), as = function t2(e2, r3) {
          this.value = void 0, this.params = void 0, Array.isArray(e2) && (e2 = e2.map(function(e3) {
            return e3 instanceof t2 ? e3 : new t2(e3);
          })), this.value = e2, this.params = r3;
        }, ss = function(t2) {
          this.description = void 0, this.description = t2;
        }, os = "Dict";
        function ls(t2, e2, r3, i3) {
          return new Error("failed to " + t2 + ' "' + (n2 = e2, (Array.isArray(n2) ? JSON.stringify(n2) : n2 instanceof Map ? "Map{}" : n2 instanceof Set ? "Set{}" : "object" == typeof n2 ? JSON.stringify(n2) : String(n2)) + '" as ') + r3, { cause: i3 });
          var n2;
        }
        var us = "Bare Item", hs = "Boolean", ds = "Byte Sequence", cs = "Decimal", fs = "Integer", gs = /[\x00-\x1f\x7f]+/, vs = "Token", ms = "Key";
        function ps(t2, e2, r3) {
          return ls("serialize", t2, e2, r3);
        }
        function ys(t2) {
          if (false === ArrayBuffer.isView(t2))
            throw ps(t2, ds);
          return ":" + (e2 = t2, btoa(String.fromCharCode.apply(String, e2)) + ":");
          var e2;
        }
        function Es(t2) {
          if (function(t3) {
            return t3 < -999999999999999 || 999999999999999 < t3;
          }(t2))
            throw ps(t2, fs);
          return t2.toString();
        }
        function Ts(t2, e2) {
          if (t2 < 0)
            return -Ts(-t2, e2);
          var r3 = Math.pow(10, e2);
          if (Math.abs(t2 * r3 % 1 - 0.5) < Number.EPSILON) {
            var i3 = Math.floor(t2 * r3);
            return (i3 % 2 == 0 ? i3 : i3 + 1) / r3;
          }
          return Math.round(t2 * r3) / r3;
        }
        function Ss(t2) {
          var e2 = Ts(t2, 3);
          if (Math.floor(Math.abs(e2)).toString().length > 12)
            throw ps(t2, cs);
          var r3 = e2.toString();
          return r3.includes(".") ? r3 : r3 + ".0";
        }
        var Ls = "String";
        function As(t2) {
          var e2, r3 = (e2 = t2).description || e2.toString().slice(7, -1);
          if (false === /^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(r3))
            throw ps(r3, vs);
          return r3;
        }
        function Rs(t2) {
          switch (typeof t2) {
            case "number":
              if (!y(t2))
                throw ps(t2, us);
              return Number.isInteger(t2) ? Es(t2) : Ss(t2);
            case "string":
              return function(t3) {
                if (gs.test(t3))
                  throw ps(t3, Ls);
                return '"' + t3.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
              }(t2);
            case "symbol":
              return As(t2);
            case "boolean":
              return function(t3) {
                if ("boolean" != typeof t3)
                  throw ps(t3, hs);
                return t3 ? "?1" : "?0";
              }(t2);
            case "object":
              if (t2 instanceof Date)
                return function(t3) {
                  return "@" + Es(t3.getTime() / 1e3);
                }(t2);
              if (t2 instanceof Uint8Array)
                return ys(t2);
              if (t2 instanceof ss)
                return As(t2);
            default:
              throw ps(t2, us);
          }
        }
        function ks(t2) {
          if (false === /^[a-z*][a-z0-9\-_.*]*$/.test(t2))
            throw ps(t2, ms);
          return t2;
        }
        function bs(t2) {
          return null == t2 ? "" : Object.entries(t2).map(function(t3) {
            var e2 = t3[0], r3 = t3[1];
            return true === r3 ? ";" + ks(e2) : ";" + ks(e2) + "=" + Rs(r3);
          }).join("");
        }
        function Ds(t2) {
          return t2 instanceof as ? "" + Rs(t2.value) + bs(t2.params) : Rs(t2);
        }
        function Is(t2, e2) {
          var r3;
          if (void 0 === e2 && (e2 = { whitespace: true }), "object" != typeof t2)
            throw ps(t2, os);
          var i3 = t2 instanceof Map ? t2.entries() : Object.entries(t2), n2 = null != (r3 = e2) && r3.whitespace ? " " : "";
          return Array.from(i3).map(function(t3) {
            var e3 = t3[0], r4 = t3[1];
            r4 instanceof as == 0 && (r4 = new as(r4));
            var i4, n3 = ks(e3);
            return true === r4.value ? n3 += bs(r4.params) : (n3 += "=", Array.isArray(r4.value) ? n3 += "(" + (i4 = r4).value.map(Ds).join(" ") + ")" + bs(i4.params) : n3 += Ds(r4)), n3;
          }).join("," + n2);
        }
        var ws = function(t2) {
          return "ot" === t2 || "sf" === t2 || "st" === t2;
        }, Cs = function(t2) {
          return "number" == typeof t2 ? y(t2) : null != t2 && "" !== t2 && false !== t2;
        }, _s = function(t2) {
          return Math.round(t2);
        }, xs = function(t2) {
          return 100 * _s(t2 / 100);
        }, Ps = { br: _s, d: _s, bl: xs, dl: xs, mtp: xs, nor: function(t2, e2) {
          return null != e2 && e2.baseUrl && (t2 = function(t3, e3) {
            var r3 = new URL(t3), i3 = new URL(e3);
            if (r3.origin !== i3.origin)
              return t3;
            for (var n2 = r3.pathname.split("/").slice(1), a2 = i3.pathname.split("/").slice(1, -1); n2[0] === a2[0]; )
              n2.shift(), a2.shift();
            for (; a2.length; )
              a2.shift(), n2.unshift("..");
            return n2.join("/");
          }(t2, e2.baseUrl)), encodeURIComponent(t2);
        }, rtp: xs, tb: _s };
        function Fs(t2, e2) {
          return void 0 === e2 && (e2 = {}), t2 ? function(t3, e3) {
            return Is(t3, e3);
          }(function(t3, e3) {
            var r3 = {};
            if (null == t3 || "object" != typeof t3)
              return r3;
            var i3 = Object.keys(t3).sort(), n2 = o({}, Ps, null == e3 ? void 0 : e3.formatters), a2 = null == e3 ? void 0 : e3.filter;
            return i3.forEach(function(i4) {
              if (null == a2 || !a2(i4)) {
                var s2 = t3[i4], o2 = n2[i4];
                o2 && (s2 = o2(s2, e3)), "v" === i4 && 1 === s2 || "pr" == i4 && 1 === s2 || Cs(s2) && (ws(i4) && "string" == typeof s2 && (s2 = new ss(s2)), r3[i4] = s2);
              }
            }), r3;
          }(t2, e2), o({ whitespace: false }, e2)) : "";
        }
        function Ms(t2, e2, r3) {
          return o(t2, function(t3, e3) {
            var r4;
            if (void 0 === e3 && (e3 = {}), !t3)
              return {};
            var i3 = Object.entries(t3), n2 = Object.entries(ns).concat(Object.entries((null == (r4 = e3) ? void 0 : r4.customHeaderMap) || {})), a2 = i3.reduce(function(t4, e4) {
              var r5, i4 = e4[0], a3 = e4[1], s2 = (null == (r5 = n2.find(function(t5) {
                return t5[1].includes(i4);
              })) ? void 0 : r5[0]) || es.REQUEST;
              return null != t4[s2] || (t4[s2] = {}), t4[s2][i4] = a3, t4;
            }, {});
            return Object.entries(a2).reduce(function(t4, r5) {
              var i4 = r5[0], n3 = r5[1];
              return t4[i4] = Fs(n3, e3), t4;
            }, {});
          }(e2, r3));
        }
        var Os = "CMCD", Ns = /CMCD=[^&#]+/;
        function Us(t2, e2, r3) {
          var i3 = function(t3, e3) {
            if (void 0 === e3 && (e3 = {}), !t3)
              return "";
            var r4 = Fs(t3, e3);
            return Os + "=" + encodeURIComponent(r4);
          }(e2, r3);
          if (!i3)
            return t2;
          if (Ns.test(t2))
            return t2.replace(Ns, i3);
          var n2 = t2.includes("?") ? "&" : "?";
          return "" + t2 + n2 + i3;
        }
        var Bs = function() {
          function t2(t3) {
            var e3 = this;
            this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = false, this.includeKeys = void 0, this.initialized = false, this.starved = false, this.buffering = true, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = function() {
              e3.initialized && (e3.starved = true), e3.buffering = true;
            }, this.onPlaying = function() {
              e3.initialized || (e3.initialized = true), e3.buffering = false;
            }, this.applyPlaylistData = function(t4) {
              try {
                e3.apply(t4, { ot: Za.MANIFEST, su: !e3.initialized });
              } catch (t5) {
                w.warn("Could not generate manifest CMCD data.", t5);
              }
            }, this.applyFragmentData = function(t4) {
              try {
                var r4 = t4.frag, i4 = e3.hls.levels[r4.level], n2 = e3.getObjectType(r4), a2 = { d: 1e3 * r4.duration, ot: n2 };
                n2 !== Za.VIDEO && n2 !== Za.AUDIO && n2 != Za.MUXED || (a2.br = i4.bitrate / 1e3, a2.tb = e3.getTopBandwidth(n2) / 1e3, a2.bl = e3.getBufferLength(n2)), e3.apply(t4, a2);
              } catch (t5) {
                w.warn("Could not generate segment CMCD data.", t5);
              }
            }, this.hls = t3;
            var r3 = this.config = t3.config, i3 = r3.cmcd;
            null != i3 && (r3.pLoader = this.createPlaylistLoader(), r3.fLoader = this.createFragmentLoader(), this.sid = i3.sessionId || function() {
              try {
                return crypto.randomUUID();
              } catch (i4) {
                try {
                  var t4 = URL.createObjectURL(new Blob()), e4 = t4.toString();
                  return URL.revokeObjectURL(t4), e4.slice(e4.lastIndexOf("/") + 1);
                } catch (t5) {
                  var r4 = (/* @__PURE__ */ new Date()).getTime();
                  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t6) {
                    var e5 = (r4 + 16 * Math.random()) % 16 | 0;
                    return r4 = Math.floor(r4 / 16), ("x" == t6 ? e5 : 3 & e5 | 8).toString(16);
                  });
                }
              }
            }(), this.cid = i3.contentId, this.useHeaders = true === i3.useHeaders, this.includeKeys = i3.includeKeys, this.registerListeners());
          }
          var e2 = t2.prototype;
          return e2.registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.on(S.MEDIA_DETACHED, this.onMediaDetached, this), t3.on(S.BUFFER_CREATED, this.onBufferCreated, this);
          }, e2.unregisterListeners = function() {
            var t3 = this.hls;
            t3.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.off(S.MEDIA_DETACHED, this.onMediaDetached, this), t3.off(S.BUFFER_CREATED, this.onBufferCreated, this);
          }, e2.destroy = function() {
            this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = null;
          }, e2.onMediaAttached = function(t3, e3) {
            this.media = e3.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
          }, e2.onMediaDetached = function() {
            this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
          }, e2.onBufferCreated = function(t3, e3) {
            var r3, i3;
            this.audioBuffer = null == (r3 = e3.tracks.audio) ? void 0 : r3.buffer, this.videoBuffer = null == (i3 = e3.tracks.video) ? void 0 : i3.buffer;
          }, e2.createData = function() {
            var t3;
            return { v: 1, sf: ts.HLS, sid: this.sid, cid: this.cid, pr: null == (t3 = this.media) ? void 0 : t3.playbackRate, mtp: this.hls.bandwidthEstimate / 1e3 };
          }, e2.apply = function(t3, e3) {
            void 0 === e3 && (e3 = {}), o(e3, this.createData());
            var r3 = e3.ot === Za.INIT || e3.ot === Za.VIDEO || e3.ot === Za.MUXED;
            this.starved && r3 && (e3.bs = true, e3.su = true, this.starved = false), null == e3.su && (e3.su = this.buffering);
            var i3 = this.includeKeys;
            i3 && (e3 = Object.keys(e3).reduce(function(t4, r4) {
              return i3.includes(r4) && (t4[r4] = e3[r4]), t4;
            }, {})), this.useHeaders ? (t3.headers || (t3.headers = {}), Ms(t3.headers, e3)) : t3.url = Us(t3.url, e3);
          }, e2.getObjectType = function(t3) {
            var e3 = t3.type;
            return "subtitle" === e3 ? Za.TIMED_TEXT : "initSegment" === t3.sn ? Za.INIT : "audio" === e3 ? Za.AUDIO : "main" === e3 ? this.hls.audioTracks.length ? Za.VIDEO : Za.MUXED : void 0;
          }, e2.getTopBandwidth = function(t3) {
            var e3, r3 = 0, i3 = this.hls;
            if (t3 === Za.AUDIO)
              e3 = i3.audioTracks;
            else {
              var n2 = i3.maxAutoLevel, a2 = n2 > -1 ? n2 + 1 : i3.levels.length;
              e3 = i3.levels.slice(0, a2);
            }
            for (var s2, o2 = g(e3); !(s2 = o2()).done; ) {
              var l2 = s2.value;
              l2.bitrate > r3 && (r3 = l2.bitrate);
            }
            return r3 > 0 ? r3 : NaN;
          }, e2.getBufferLength = function(t3) {
            var e3 = this.hls.media, r3 = t3 === Za.AUDIO ? this.audioBuffer : this.videoBuffer;
            return r3 && e3 ? 1e3 * Jr.bufferInfo(r3, e3.currentTime, this.config.maxBufferHole).len : NaN;
          }, e2.createPlaylistLoader = function() {
            var t3 = this.config.pLoader, e3 = this.applyPlaylistData, r3 = t3 || this.config.loader;
            return function() {
              function t4(t5) {
                this.loader = void 0, this.loader = new r3(t5);
              }
              var i3 = t4.prototype;
              return i3.destroy = function() {
                this.loader.destroy();
              }, i3.abort = function() {
                this.loader.abort();
              }, i3.load = function(t5, r4, i4) {
                e3(t5), this.loader.load(t5, r4, i4);
              }, s(t4, [{ key: "stats", get: function() {
                return this.loader.stats;
              } }, { key: "context", get: function() {
                return this.loader.context;
              } }]), t4;
            }();
          }, e2.createFragmentLoader = function() {
            var t3 = this.config.fLoader, e3 = this.applyFragmentData, r3 = t3 || this.config.loader;
            return function() {
              function t4(t5) {
                this.loader = void 0, this.loader = new r3(t5);
              }
              var i3 = t4.prototype;
              return i3.destroy = function() {
                this.loader.destroy();
              }, i3.abort = function() {
                this.loader.abort();
              }, i3.load = function(t5, r4, i4) {
                e3(t5), this.loader.load(t5, r4, i4);
              }, s(t4, [{ key: "stats", get: function() {
                return this.loader.stats;
              } }, { key: "context", get: function() {
                return this.loader.context;
              } }]), t4;
            }();
          }, t2;
        }(), Gs = function() {
          function t2(t3) {
            this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = false, this.enabled = true, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = t3, this.log = w.log.bind(w, "[content-steering]:"), this.registerListeners();
          }
          var e2 = t2.prototype;
          return e2.registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), t3.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.on(S.ERROR, this.onError, this);
          }, e2.unregisterListeners = function() {
            var t3 = this.hls;
            t3 && (t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), t3.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.off(S.ERROR, this.onError, this));
          }, e2.startLoad = function() {
            if (this.started = true, this.clearTimeout(), this.enabled && this.uri) {
              if (this.updated) {
                var t3 = 1e3 * this.timeToLoad - (performance.now() - this.updated);
                if (t3 > 0)
                  return void this.scheduleRefresh(this.uri, t3);
              }
              this.loadSteeringManifest(this.uri);
            }
          }, e2.stopLoad = function() {
            this.started = false, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
          }, e2.clearTimeout = function() {
            -1 !== this.reloadTimer && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
          }, e2.destroy = function() {
            this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
          }, e2.removeLevel = function(t3) {
            var e3 = this.levels;
            e3 && (this.levels = e3.filter(function(e4) {
              return e4 !== t3;
            }));
          }, e2.onManifestLoading = function() {
            this.stopLoad(), this.enabled = true, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
          }, e2.onManifestLoaded = function(t3, e3) {
            var r3 = e3.contentSteering;
            null !== r3 && (this.pathwayId = r3.pathwayId, this.uri = r3.uri, this.started && this.startLoad());
          }, e2.onManifestParsed = function(t3, e3) {
            this.audioTracks = e3.audioTracks, this.subtitleTracks = e3.subtitleTracks;
          }, e2.onError = function(t3, e3) {
            var r3 = e3.errorAction;
            if ((null == r3 ? void 0 : r3.action) === Lr && r3.flags === br) {
              var i3 = this.levels, n2 = this.pathwayPriority, a2 = this.pathwayId;
              if (e3.context) {
                var s2 = e3.context, o2 = s2.groupId, l2 = s2.pathwayId, u2 = s2.type;
                o2 && i3 ? a2 = this.getPathwayForGroupId(o2, u2, a2) : l2 && (a2 = l2);
              }
              a2 in this.penalizedPathways || (this.penalizedPathways[a2] = performance.now()), !n2 && i3 && (n2 = i3.reduce(function(t4, e4) {
                return -1 === t4.indexOf(e4.pathwayId) && t4.push(e4.pathwayId), t4;
              }, [])), n2 && n2.length > 1 && (this.updatePathwayPriority(n2), r3.resolved = this.pathwayId !== a2), r3.resolved || w.warn("Could not resolve " + e3.details + ' ("' + e3.error.message + '") with content-steering for Pathway: ' + a2 + " levels: " + (i3 ? i3.length : i3) + " priorities: " + JSON.stringify(n2) + " penalized: " + JSON.stringify(this.penalizedPathways));
            }
          }, e2.filterParsedLevels = function(t3) {
            this.levels = t3;
            var e3 = this.getLevelsForPathway(this.pathwayId);
            if (0 === e3.length) {
              var r3 = t3[0].pathwayId;
              this.log("No levels found in Pathway " + this.pathwayId + '. Setting initial Pathway to "' + r3 + '"'), e3 = this.getLevelsForPathway(r3), this.pathwayId = r3;
            }
            return e3.length !== t3.length ? (this.log("Found " + e3.length + "/" + t3.length + ' levels in Pathway "' + this.pathwayId + '"'), e3) : t3;
          }, e2.getLevelsForPathway = function(t3) {
            return null === this.levels ? [] : this.levels.filter(function(e3) {
              return t3 === e3.pathwayId;
            });
          }, e2.updatePathwayPriority = function(t3) {
            var e3;
            this.pathwayPriority = t3;
            var r3 = this.penalizedPathways, i3 = performance.now();
            Object.keys(r3).forEach(function(t4) {
              i3 - r3[t4] > 3e5 && delete r3[t4];
            });
            for (var n2 = 0; n2 < t3.length; n2++) {
              var a2 = t3[n2];
              if (!(a2 in r3)) {
                if (a2 === this.pathwayId)
                  return;
                var s2 = this.hls.nextLoadLevel, o2 = this.hls.levels[s2];
                if ((e3 = this.getLevelsForPathway(a2)).length > 0) {
                  this.log('Setting Pathway to "' + a2 + '"'), this.pathwayId = a2, dr(e3), this.hls.trigger(S.LEVELS_UPDATED, { levels: e3 });
                  var l2 = this.hls.levels[s2];
                  o2 && l2 && this.levels && (l2.attrs["STABLE-VARIANT-ID"] !== o2.attrs["STABLE-VARIANT-ID"] && l2.bitrate !== o2.bitrate && this.log("Unstable Pathways change from bitrate " + o2.bitrate + " to " + l2.bitrate), this.hls.nextLoadLevel = s2);
                  break;
                }
              }
            }
          }, e2.getPathwayForGroupId = function(t3, e3, r3) {
            for (var i3 = this.getLevelsForPathway(r3).concat(this.levels || []), n2 = 0; n2 < i3.length; n2++)
              if (e3 === De && i3[n2].hasAudioGroup(t3) || e3 === Ie && i3[n2].hasSubtitleGroup(t3))
                return i3[n2].pathwayId;
            return r3;
          }, e2.clonePathways = function(t3) {
            var e3 = this, r3 = this.levels;
            if (r3) {
              var i3 = {}, n2 = {};
              t3.forEach(function(t4) {
                var a2 = t4.ID, s2 = t4["BASE-ID"], o2 = t4["URI-REPLACEMENT"];
                if (!r3.some(function(t5) {
                  return t5.pathwayId === a2;
                })) {
                  var l2 = e3.getLevelsForPathway(s2).map(function(t5) {
                    var e4 = new x(t5.attrs);
                    e4["PATHWAY-ID"] = a2;
                    var r4 = e4.AUDIO && e4.AUDIO + "_clone_" + a2, s3 = e4.SUBTITLES && e4.SUBTITLES + "_clone_" + a2;
                    r4 && (i3[e4.AUDIO] = r4, e4.AUDIO = r4), s3 && (n2[e4.SUBTITLES] = s3, e4.SUBTITLES = s3);
                    var l3 = Hs(t5.uri, e4["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", o2), u2 = new rr({ attrs: e4, audioCodec: t5.audioCodec, bitrate: t5.bitrate, height: t5.height, name: t5.name, url: l3, videoCodec: t5.videoCodec, width: t5.width });
                    if (t5.audioGroups)
                      for (var h2 = 1; h2 < t5.audioGroups.length; h2++)
                        u2.addGroupId("audio", t5.audioGroups[h2] + "_clone_" + a2);
                    if (t5.subtitleGroups)
                      for (var d2 = 1; d2 < t5.subtitleGroups.length; d2++)
                        u2.addGroupId("text", t5.subtitleGroups[d2] + "_clone_" + a2);
                    return u2;
                  });
                  r3.push.apply(r3, l2), Ks(e3.audioTracks, i3, o2, a2), Ks(e3.subtitleTracks, n2, o2, a2);
                }
              });
            }
          }, e2.loadSteeringManifest = function(t3) {
            var e3, r3 = this, i3 = this.hls.config, n2 = i3.loader;
            this.loader && this.loader.destroy(), this.loader = new n2(i3);
            try {
              e3 = new self.URL(t3);
            } catch (e4) {
              return this.enabled = false, void this.log("Failed to parse Steering Manifest URI: " + t3);
            }
            if ("data:" !== e3.protocol) {
              var a2 = 0 | (this.hls.bandwidthEstimate || i3.abrEwmaDefaultEstimate);
              e3.searchParams.set("_HLS_pathway", this.pathwayId), e3.searchParams.set("_HLS_throughput", "" + a2);
            }
            var s2 = { responseType: "json", url: e3.href }, o2 = i3.steeringManifestLoadPolicy.default, l2 = o2.errorRetry || o2.timeoutRetry || {}, u2 = { loadPolicy: o2, timeout: o2.maxLoadTimeMs, maxRetry: l2.maxNumRetry || 0, retryDelay: l2.retryDelayMs || 0, maxRetryDelay: l2.maxRetryDelayMs || 0 }, h2 = { onSuccess: function(t4, i4, n3, a3) {
              r3.log('Loaded steering manifest: "' + e3 + '"');
              var s3 = t4.data;
              if (1 === s3.VERSION) {
                r3.updated = performance.now(), r3.timeToLoad = s3.TTL;
                var o3 = s3["RELOAD-URI"], l3 = s3["PATHWAY-CLONES"], u3 = s3["PATHWAY-PRIORITY"];
                if (o3)
                  try {
                    r3.uri = new self.URL(o3, e3).href;
                  } catch (t5) {
                    return r3.enabled = false, void r3.log("Failed to parse Steering Manifest RELOAD-URI: " + o3);
                  }
                r3.scheduleRefresh(r3.uri || n3.url), l3 && r3.clonePathways(l3);
                var h3 = { steeringManifest: s3, url: e3.toString() };
                r3.hls.trigger(S.STEERING_MANIFEST_LOADED, h3), u3 && r3.updatePathwayPriority(u3);
              } else
                r3.log("Steering VERSION " + s3.VERSION + " not supported!");
            }, onError: function(t4, e4, i4, n3) {
              if (r3.log("Error loading steering manifest: " + t4.code + " " + t4.text + " (" + e4.url + ")"), r3.stopLoad(), 410 === t4.code)
                return r3.enabled = false, void r3.log("Steering manifest " + e4.url + " no longer available");
              var a3 = 1e3 * r3.timeToLoad;
              if (429 !== t4.code)
                r3.scheduleRefresh(r3.uri || e4.url, a3);
              else {
                var s3 = r3.loader;
                if ("function" == typeof (null == s3 ? void 0 : s3.getResponseHeader)) {
                  var o3 = s3.getResponseHeader("Retry-After");
                  o3 && (a3 = 1e3 * parseFloat(o3));
                }
                r3.log("Steering manifest " + e4.url + " rate limited");
              }
            }, onTimeout: function(t4, e4, i4) {
              r3.log("Timeout loading steering manifest (" + e4.url + ")"), r3.scheduleRefresh(r3.uri || e4.url);
            } };
            this.log("Requesting steering manifest: " + e3), this.loader.load(s2, u2, h2);
          }, e2.scheduleRefresh = function(t3, e3) {
            var r3 = this;
            void 0 === e3 && (e3 = 1e3 * this.timeToLoad), this.clearTimeout(), this.reloadTimer = self.setTimeout(function() {
              var e4, i3 = null == (e4 = r3.hls) ? void 0 : e4.media;
              !i3 || i3.ended ? r3.scheduleRefresh(t3, 1e3 * r3.timeToLoad) : r3.loadSteeringManifest(t3);
            }, e3);
          }, t2;
        }();
        function Ks(t2, e2, r3, i3) {
          t2 && Object.keys(e2).forEach(function(n2) {
            var a2 = t2.filter(function(t3) {
              return t3.groupId === n2;
            }).map(function(t3) {
              var a3 = o({}, t3);
              return a3.details = void 0, a3.attrs = new x(a3.attrs), a3.url = a3.attrs.URI = Hs(t3.url, t3.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", r3), a3.groupId = a3.attrs["GROUP-ID"] = e2[n2], a3.attrs["PATHWAY-ID"] = i3, a3;
            });
            t2.push.apply(t2, a2);
          });
        }
        function Hs(t2, e2, r3, i3) {
          var n2, a2 = i3.HOST, s2 = i3.PARAMS, o2 = i3[r3];
          e2 && (n2 = null == o2 ? void 0 : o2[e2]) && (t2 = n2);
          var l2 = new self.URL(t2);
          return a2 && !n2 && (l2.host = a2), s2 && Object.keys(s2).sort().forEach(function(t3) {
            t3 && l2.searchParams.set(t3, s2[t3]);
          }), l2.href;
        }
        var Vs = /^age:\s*[\d.]+\s*$/im, Ys = function() {
          function t2(t3) {
            this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = t3 && t3.xhrSetup || null, this.stats = new M(), this.retryDelay = 0;
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
            this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null, this.stats = null;
          }, e2.abortInternal = function() {
            var t3 = this.loader;
            self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), t3 && (t3.onreadystatechange = null, t3.onprogress = null, 4 !== t3.readyState && (this.stats.aborted = true, t3.abort()));
          }, e2.abort = function() {
            var t3;
            this.abortInternal(), null != (t3 = this.callbacks) && t3.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
          }, e2.load = function(t3, e3, r3) {
            if (this.stats.loading.start)
              throw new Error("Loader can only be used once.");
            this.stats.loading.start = self.performance.now(), this.context = t3, this.config = e3, this.callbacks = r3, this.loadInternal();
          }, e2.loadInternal = function() {
            var t3 = this, e3 = this.config, r3 = this.context;
            if (e3 && r3) {
              var i3 = this.loader = new self.XMLHttpRequest(), n2 = this.stats;
              n2.loading.first = 0, n2.loaded = 0, n2.aborted = false;
              var a2 = this.xhrSetup;
              a2 ? Promise.resolve().then(function() {
                if (!t3.stats.aborted)
                  return a2(i3, r3.url);
              }).catch(function(t4) {
                return i3.open("GET", r3.url, true), a2(i3, r3.url);
              }).then(function() {
                t3.stats.aborted || t3.openAndSendXhr(i3, r3, e3);
              }).catch(function(e4) {
                t3.callbacks.onError({ code: i3.status, text: e4.message }, r3, i3, n2);
              }) : this.openAndSendXhr(i3, r3, e3);
            }
          }, e2.openAndSendXhr = function(t3, e3, r3) {
            t3.readyState || t3.open("GET", e3.url, true);
            var i3 = e3.headers, n2 = r3.loadPolicy, a2 = n2.maxTimeToFirstByteMs, s2 = n2.maxLoadTimeMs;
            if (i3)
              for (var o2 in i3)
                t3.setRequestHeader(o2, i3[o2]);
            e3.rangeEnd && t3.setRequestHeader("Range", "bytes=" + e3.rangeStart + "-" + (e3.rangeEnd - 1)), t3.onreadystatechange = this.readystatechange.bind(this), t3.onprogress = this.loadprogress.bind(this), t3.responseType = e3.responseType, self.clearTimeout(this.requestTimeout), r3.timeout = a2 && y(a2) ? a2 : s2, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r3.timeout), t3.send();
          }, e2.readystatechange = function() {
            var t3 = this.context, e3 = this.loader, r3 = this.stats;
            if (t3 && e3) {
              var i3 = e3.readyState, n2 = this.config;
              if (!r3.aborted && i3 >= 2 && (0 === r3.loading.first && (r3.loading.first = Math.max(self.performance.now(), r3.loading.start), n2.timeout !== n2.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), n2.timeout = n2.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), n2.loadPolicy.maxLoadTimeMs - (r3.loading.first - r3.loading.start)))), 4 === i3)) {
                self.clearTimeout(this.requestTimeout), e3.onreadystatechange = null, e3.onprogress = null;
                var a2 = e3.status, s2 = "text" !== e3.responseType;
                if (a2 >= 200 && a2 < 300 && (s2 && e3.response || null !== e3.responseText)) {
                  r3.loading.end = Math.max(self.performance.now(), r3.loading.first);
                  var o2 = s2 ? e3.response : e3.responseText, l2 = "arraybuffer" === e3.responseType ? o2.byteLength : o2.length;
                  if (r3.loaded = r3.total = l2, r3.bwEstimate = 8e3 * r3.total / (r3.loading.end - r3.loading.first), !this.callbacks)
                    return;
                  var u2 = this.callbacks.onProgress;
                  if (u2 && u2(r3, t3, o2, e3), !this.callbacks)
                    return;
                  var h2 = { url: e3.responseURL, data: o2, code: a2 };
                  this.callbacks.onSuccess(h2, r3, t3, e3);
                } else {
                  var d2 = n2.loadPolicy.errorRetry;
                  mr(d2, r3.retry, false, { url: t3.url, data: void 0, code: a2 }) ? this.retry(d2) : (w.error(a2 + " while loading " + t3.url), this.callbacks.onError({ code: a2, text: e3.statusText }, t3, e3, r3));
                }
              }
            }
          }, e2.loadtimeout = function() {
            var t3, e3 = null == (t3 = this.config) ? void 0 : t3.loadPolicy.timeoutRetry;
            if (mr(e3, this.stats.retry, true))
              this.retry(e3);
            else {
              var r3;
              w.warn("timeout while loading " + (null == (r3 = this.context) ? void 0 : r3.url));
              var i3 = this.callbacks;
              i3 && (this.abortInternal(), i3.onTimeout(this.stats, this.context, this.loader));
            }
          }, e2.retry = function(t3) {
            var e3 = this.context, r3 = this.stats;
            this.retryDelay = gr(t3, r3.retry), r3.retry++, w.warn((status ? "HTTP Status " + status : "Timeout") + " while loading " + (null == e3 ? void 0 : e3.url) + ", retrying " + r3.retry + "/" + t3.maxNumRetry + " in " + this.retryDelay + "ms"), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
          }, e2.loadprogress = function(t3) {
            var e3 = this.stats;
            e3.loaded = t3.loaded, t3.lengthComputable && (e3.total = t3.total);
          }, e2.getCacheAge = function() {
            var t3 = null;
            if (this.loader && Vs.test(this.loader.getAllResponseHeaders())) {
              var e3 = this.loader.getResponseHeader("age");
              t3 = e3 ? parseFloat(e3) : null;
            }
            return t3;
          }, e2.getResponseHeader = function(t3) {
            return this.loader && new RegExp("^" + t3 + ":\\s*[\\d.]+\\s*$", "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(t3) : null;
          }, t2;
        }(), Ws = /(\d+)-(\d+)\/(\d+)/, js = function() {
          function t2(t3) {
            this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t3.fetchSetup || qs, this.controller = new self.AbortController(), this.stats = new M();
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
            this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
          }, e2.abortInternal = function() {
            this.controller && !this.stats.loading.end && (this.stats.aborted = true, this.controller.abort());
          }, e2.abort = function() {
            var t3;
            this.abortInternal(), null != (t3 = this.callbacks) && t3.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
          }, e2.load = function(t3, e3, r3) {
            var i3 = this, n2 = this.stats;
            if (n2.loading.start)
              throw new Error("Loader can only be used once.");
            n2.loading.start = self.performance.now();
            var a2 = function(t4, e4) {
              var r4 = { method: "GET", mode: "cors", credentials: "same-origin", signal: e4, headers: new self.Headers(o({}, t4.headers)) };
              return t4.rangeEnd && r4.headers.set("Range", "bytes=" + t4.rangeStart + "-" + String(t4.rangeEnd - 1)), r4;
            }(t3, this.controller.signal), s2 = r3.onProgress, l2 = "arraybuffer" === t3.responseType, u2 = l2 ? "byteLength" : "length", h2 = e3.loadPolicy, d2 = h2.maxTimeToFirstByteMs, c2 = h2.maxLoadTimeMs;
            this.context = t3, this.config = e3, this.callbacks = r3, this.request = this.fetchSetup(t3, a2), self.clearTimeout(this.requestTimeout), e3.timeout = d2 && y(d2) ? d2 : c2, this.requestTimeout = self.setTimeout(function() {
              i3.abortInternal(), r3.onTimeout(n2, t3, i3.response);
            }, e3.timeout), self.fetch(this.request).then(function(a3) {
              i3.response = i3.loader = a3;
              var o2 = Math.max(self.performance.now(), n2.loading.start);
              if (self.clearTimeout(i3.requestTimeout), e3.timeout = c2, i3.requestTimeout = self.setTimeout(function() {
                i3.abortInternal(), r3.onTimeout(n2, t3, i3.response);
              }, c2 - (o2 - n2.loading.start)), !a3.ok) {
                var u3 = a3.status, h3 = a3.statusText;
                throw new zs(h3 || "fetch, bad network response", u3, a3);
              }
              return n2.loading.first = o2, n2.total = function(t4) {
                var e4 = t4.get("Content-Range");
                if (e4) {
                  var r4 = function(t5) {
                    var e5 = Ws.exec(t5);
                    if (e5)
                      return parseInt(e5[2]) - parseInt(e5[1]) + 1;
                  }(e4);
                  if (y(r4))
                    return r4;
                }
                var i4 = t4.get("Content-Length");
                if (i4)
                  return parseInt(i4);
              }(a3.headers) || n2.total, s2 && y(e3.highWaterMark) ? i3.loadProgressively(a3, n2, t3, e3.highWaterMark, s2) : l2 ? a3.arrayBuffer() : "json" === t3.responseType ? a3.json() : a3.text();
            }).then(function(a3) {
              var o2 = i3.response;
              if (!o2)
                throw new Error("loader destroyed");
              self.clearTimeout(i3.requestTimeout), n2.loading.end = Math.max(self.performance.now(), n2.loading.first);
              var l3 = a3[u2];
              l3 && (n2.loaded = n2.total = l3);
              var h3 = { url: o2.url, data: a3, code: o2.status };
              s2 && !y(e3.highWaterMark) && s2(n2, t3, a3, o2), r3.onSuccess(h3, n2, t3, o2);
            }).catch(function(e4) {
              if (self.clearTimeout(i3.requestTimeout), !n2.aborted) {
                var a3 = e4 && e4.code || 0, s3 = e4 ? e4.message : null;
                r3.onError({ code: a3, text: s3 }, t3, e4 ? e4.details : null, n2);
              }
            });
          }, e2.getCacheAge = function() {
            var t3 = null;
            if (this.response) {
              var e3 = this.response.headers.get("age");
              t3 = e3 ? parseFloat(e3) : null;
            }
            return t3;
          }, e2.getResponseHeader = function(t3) {
            return this.response ? this.response.headers.get(t3) : null;
          }, e2.loadProgressively = function(t3, e3, r3, i3, n2) {
            void 0 === i3 && (i3 = 0);
            var a2 = new Di(), s2 = t3.body.getReader();
            return function o2() {
              return s2.read().then(function(s3) {
                if (s3.done)
                  return a2.dataLength && n2(e3, r3, a2.flush(), t3), Promise.resolve(new ArrayBuffer(0));
                var l2 = s3.value, u2 = l2.length;
                return e3.loaded += u2, u2 < i3 || a2.dataLength ? (a2.push(l2), a2.dataLength >= i3 && n2(e3, r3, a2.flush(), t3)) : n2(e3, r3, l2, t3), o2();
              }).catch(function() {
                return Promise.reject();
              });
            }();
          }, t2;
        }();
        function qs(t2, e2) {
          return new self.Request(t2.url, e2);
        }
        var Xs, zs = function(t2) {
          function e2(e3, r3, i3) {
            var n2;
            return (n2 = t2.call(this, e3) || this).code = void 0, n2.details = void 0, n2.code = r3, n2.details = i3, n2;
          }
          return l(e2, t2), e2;
        }(c(Error)), Qs = /\s/, Js = i2(i2({ autoStartLoad: true, startPosition: -1, defaultAudioCodec: void 0, debug: false, capLevelOnFPSDrop: false, capLevelToPlayerSize: false, ignoreDevicePixelRatio: false, preferManagedMediaSource: true, initialLiveManifestSize: 1, maxBufferLength: 30, backBufferLength: 1 / 0, frontBufferFlushThreshold: 1 / 0, maxBufferSize: 6e7, maxBufferHole: 0.1, highBufferWatchdogPeriod: 2, nudgeOffset: 0.1, nudgeMaxRetry: 3, maxFragLookUpTolerance: 0.25, liveSyncDurationCount: 3, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, maxLiveSyncPlaybackRate: 1, liveDurationInfinity: false, liveBackBufferLength: null, maxMaxBufferLength: 600, enableWorker: true, workerPath: null, enableSoftwareAES: true, startLevel: void 0, startFragPrefetch: false, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: 0.2, appendErrorMaxRetry: 3, loader: Ys, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, licenseXhrSetup: void 0, licenseResponseCallback: void 0, abrController: Kr, bufferController: $n, capLevelController: za, errorController: Ir, fpsController: Qa, stretchShortVideoTrack: false, maxAudioFramesDrift: 1, forceKeyFrameOnDiscontinuity: true, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrEwmaDefaultEstimateMax: 5e6, abrBandWidthFactor: 0.95, abrBandWidthUpFactor: 0.7, abrMaxWithRealBitrate: false, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0, emeEnabled: false, widevineLicenseUrl: void 0, drmSystems: {}, drmSystemOptions: {}, requestMediaKeySystemAccessFunc: it, testBandwidth: true, progressive: false, lowLatencyMode: true, cmcd: void 0, enableDateRangeMetadataCues: true, enableEmsgMetadataCues: true, enableID3MetadataCues: true, useMediaCapabilities: true, certLoadPolicy: { default: { maxTimeToFirstByteMs: 8e3, maxLoadTimeMs: 2e4, timeoutRetry: null, errorRetry: null } }, keyLoadPolicy: { default: { maxTimeToFirstByteMs: 8e3, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear" }, errorRetry: { maxNumRetry: 8, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear" } } }, manifestLoadPolicy: { default: { maxTimeToFirstByteMs: 1 / 0, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, playlistLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 2, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, fragLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 12e4, timeoutRetry: { maxNumRetry: 4, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 6, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, steeringManifestLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3 }, { cueHandler: { newCue: function(t2, e2, r3, i3) {
          for (var n2, a2, s2, o2, l2, u2 = [], h2 = self.VTTCue || self.TextTrackCue, d2 = 0; d2 < i3.rows.length; d2++)
            if (s2 = true, o2 = 0, l2 = "", !(n2 = i3.rows[d2]).isEmpty()) {
              for (var c2, f2 = 0; f2 < n2.chars.length; f2++)
                Qs.test(n2.chars[f2].uchar) && s2 ? o2++ : (l2 += n2.chars[f2].uchar, s2 = false);
              n2.cueStartTime = e2, e2 === r3 && (r3 += 1e-4), o2 >= 16 ? o2-- : o2++;
              var g2 = Ia(l2.trim()), v2 = Pa(e2, r3, g2);
              null != t2 && null != (c2 = t2.cues) && c2.getCueById(v2) || ((a2 = new h2(e2, r3, g2)).id = v2, a2.line = d2 + 1, a2.align = "left", a2.position = 10 + Math.min(80, 10 * Math.floor(8 * o2 / 32)), u2.push(a2));
            }
          return t2 && u2.length && (u2.sort(function(t3, e3) {
            return "auto" === t3.line || "auto" === e3.line ? 0 : t3.line > 8 && e3.line > 8 ? e3.line - t3.line : t3.line - e3.line;
          }), u2.forEach(function(e3) {
            return Oe(t2, e3);
          })), u2;
        } }, enableWebVTT: true, enableIMSC1: true, enableCEA708Captions: true, captionsTextTrack1Label: "English", captionsTextTrack1LanguageCode: "en", captionsTextTrack2Label: "Spanish", captionsTextTrack2LanguageCode: "es", captionsTextTrack3Label: "Unknown CC", captionsTextTrack3LanguageCode: "", captionsTextTrack4Label: "Unknown CC", captionsTextTrack4LanguageCode: "", renderTextTracksNatively: true }), {}, { subtitleStreamController: qn, subtitleTrackController: zn, timelineController: ja, audioStreamController: Wn, audioTrackController: jn, emeController: $a, cmcdController: Bs, contentSteeringController: Gs });
        function $s(t2) {
          return t2 && "object" == typeof t2 ? Array.isArray(t2) ? t2.map($s) : Object.keys(t2).reduce(function(e2, r3) {
            return e2[r3] = $s(t2[r3]), e2;
          }, {}) : t2;
        }
        function Zs(t2) {
          var e2 = t2.loader;
          e2 !== js && e2 !== Ys ? (w.log("[config]: Custom loader detected, cannot enable progressive streaming"), t2.progressive = false) : function() {
            if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
              try {
                return new self.ReadableStream({}), true;
              } catch (t3) {
              }
            return false;
          }() && (t2.loader = js, t2.progressive = true, t2.enableSoftwareAES = true, w.log("[config]: Progressive streaming enabled, using FetchLoader"));
        }
        var to = function(t2) {
          function e2(e3, r4) {
            var i3;
            return (i3 = t2.call(this, e3, "[level-controller]") || this)._levels = [], i3._firstLevel = -1, i3._maxAutoLevel = -1, i3._startLevel = void 0, i3.currentLevel = null, i3.currentLevelIndex = -1, i3.manualLevelIndex = -1, i3.steering = void 0, i3.onParsedComplete = void 0, i3.steering = r4, i3._registerListeners(), i3;
          }
          l(e2, t2);
          var r3 = e2.prototype;
          return r3._registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), t3.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t3.on(S.FRAG_BUFFERED, this.onFragBuffered, this), t3.on(S.ERROR, this.onError, this);
          }, r3._unregisterListeners = function() {
            var t3 = this.hls;
            t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), t3.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t3.off(S.FRAG_BUFFERED, this.onFragBuffered, this), t3.off(S.ERROR, this.onError, this);
          }, r3.destroy = function() {
            this._unregisterListeners(), this.steering = null, this.resetLevels(), t2.prototype.destroy.call(this);
          }, r3.stopLoad = function() {
            this._levels.forEach(function(t3) {
              t3.loadError = 0, t3.fragmentError = 0;
            }), t2.prototype.stopLoad.call(this);
          }, r3.resetLevels = function() {
            this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
          }, r3.onManifestLoading = function(t3, e3) {
            this.resetLevels();
          }, r3.onManifestLoaded = function(t3, e3) {
            var r4 = this.hls.config.preferManagedMediaSource, i3 = [], n2 = {}, a2 = {}, s2 = false, o2 = false, l2 = false;
            e3.levels.forEach(function(t4) {
              var e4, u2, h2 = t4.attrs, d2 = t4.audioCodec, c2 = t4.videoCodec;
              -1 !== (null == (e4 = d2) ? void 0 : e4.indexOf("mp4a.40.34")) && (Xs || (Xs = /chrome|firefox/i.test(navigator.userAgent)), Xs && (t4.audioCodec = d2 = void 0)), d2 && (t4.audioCodec = d2 = he(d2, r4)), 0 === (null == (u2 = c2) ? void 0 : u2.indexOf("avc1")) && (c2 = t4.videoCodec = function(t5) {
                var e5 = t5.split(".");
                if (e5.length > 2) {
                  var r5 = e5.shift() + ".";
                  return (r5 += parseInt(e5.shift()).toString(16)) + ("000" + parseInt(e5.shift()).toString(16)).slice(-4);
                }
                return t5;
              }(c2));
              var f2 = t4.width, g2 = t4.height, v2 = t4.unknownCodecs;
              if (s2 || (s2 = !(!f2 || !g2)), o2 || (o2 = !!c2), l2 || (l2 = !!d2), !(null != v2 && v2.length || d2 && !ie(d2, "audio", r4) || c2 && !ie(c2, "video", r4))) {
                var m2 = h2.CODECS, p2 = h2["FRAME-RATE"], y2 = h2["HDCP-LEVEL"], E2 = h2["PATHWAY-ID"], T2 = h2.RESOLUTION, S2 = h2["VIDEO-RANGE"], L2 = (E2 || ".") + "-" + t4.bitrate + "-" + T2 + "-" + p2 + "-" + m2 + "-" + S2 + "-" + y2;
                if (n2[L2])
                  if (n2[L2].uri === t4.url || t4.attrs["PATHWAY-ID"])
                    n2[L2].addGroupId("audio", h2.AUDIO), n2[L2].addGroupId("text", h2.SUBTITLES);
                  else {
                    var A2 = a2[L2] += 1;
                    t4.attrs["PATHWAY-ID"] = new Array(A2 + 1).join(".");
                    var R2 = new rr(t4);
                    n2[L2] = R2, i3.push(R2);
                  }
                else {
                  var k2 = new rr(t4);
                  n2[L2] = k2, a2[L2] = 1, i3.push(k2);
                }
              }
            }), this.filterAndSortMediaOptions(i3, e3, s2, o2, l2);
          }, r3.filterAndSortMediaOptions = function(t3, e3, r4, i3, n2) {
            var a2 = this, s2 = [], o2 = [], l2 = t3;
            if ((r4 || i3) && n2 && (l2 = l2.filter(function(t4) {
              var e4, r5 = t4.videoCodec, i4 = t4.videoRange, n3 = t4.width, a3 = t4.height;
              return (!!r5 || !(!n3 || !a3)) && !!(e4 = i4) && Qe.indexOf(e4) > -1;
            })), 0 !== l2.length) {
              if (e3.audioTracks) {
                var u2 = this.hls.config.preferManagedMediaSource;
                eo(s2 = e3.audioTracks.filter(function(t4) {
                  return !t4.audioCodec || ie(t4.audioCodec, "audio", u2);
                }));
              }
              e3.subtitles && eo(o2 = e3.subtitles);
              var h2 = l2.slice(0);
              l2.sort(function(t4, e4) {
                if (t4.attrs["HDCP-LEVEL"] !== e4.attrs["HDCP-LEVEL"])
                  return (t4.attrs["HDCP-LEVEL"] || "") > (e4.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
                if (r4 && t4.height !== e4.height)
                  return t4.height - e4.height;
                if (t4.frameRate !== e4.frameRate)
                  return t4.frameRate - e4.frameRate;
                if (t4.videoRange !== e4.videoRange)
                  return Qe.indexOf(t4.videoRange) - Qe.indexOf(e4.videoRange);
                if (t4.videoCodec !== e4.videoCodec) {
                  var i4 = se(t4.videoCodec), n3 = se(e4.videoCodec);
                  if (i4 !== n3)
                    return n3 - i4;
                }
                if (t4.uri === e4.uri && t4.codecSet !== e4.codecSet) {
                  var a3 = oe(t4.codecSet), s3 = oe(e4.codecSet);
                  if (a3 !== s3)
                    return s3 - a3;
                }
                return t4.averageBitrate !== e4.averageBitrate ? t4.averageBitrate - e4.averageBitrate : 0;
              });
              var d2 = h2[0];
              if (this.steering && (l2 = this.steering.filterParsedLevels(l2)).length !== h2.length) {
                for (var c2 = 0; c2 < h2.length; c2++)
                  if (h2[c2].pathwayId === l2[0].pathwayId) {
                    d2 = h2[c2];
                    break;
                  }
              }
              this._levels = l2;
              for (var f2 = 0; f2 < l2.length; f2++)
                if (l2[f2] === d2) {
                  var g2;
                  this._firstLevel = f2;
                  var v2 = d2.bitrate, m2 = this.hls.bandwidthEstimate;
                  if (this.log("manifest loaded, " + l2.length + " level(s) found, first bitrate: " + v2), void 0 === (null == (g2 = this.hls.userConfig) ? void 0 : g2.abrEwmaDefaultEstimate)) {
                    var p2 = Math.min(v2, this.hls.config.abrEwmaDefaultEstimateMax);
                    p2 > m2 && m2 === Js.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = p2);
                  }
                  break;
                }
              var y2 = n2 && !i3, E2 = { levels: l2, audioTracks: s2, subtitleTracks: o2, sessionData: e3.sessionData, sessionKeys: e3.sessionKeys, firstLevel: this._firstLevel, stats: e3.stats, audio: n2, video: i3, altAudio: !y2 && s2.some(function(t4) {
                return !!t4.url;
              }) };
              this.hls.trigger(S.MANIFEST_PARSED, E2), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
            } else
              Promise.resolve().then(function() {
                if (a2.hls) {
                  e3.levels.length && a2.warn("One or more CODECS in variant not supported: " + JSON.stringify(e3.levels[0].attrs));
                  var t4 = new Error("no level with compatible codecs found in manifest");
                  a2.hls.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: true, url: e3.url, error: t4, reason: t4.message });
                }
              });
          }, r3.onError = function(t3, e3) {
            !e3.fatal && e3.context && e3.context.type === be && e3.context.level === this.level && this.checkRetry(e3);
          }, r3.onFragBuffered = function(t3, e3) {
            var r4 = e3.frag;
            if (void 0 !== r4 && r4.type === we) {
              var i3 = r4.elementaryStreams;
              if (!Object.keys(i3).some(function(t4) {
                return !!i3[t4];
              }))
                return;
              var n2 = this._levels[r4.level];
              null != n2 && n2.loadError && (this.log("Resetting level error count of " + n2.loadError + " on frag buffered"), n2.loadError = 0);
            }
          }, r3.onLevelLoaded = function(t3, e3) {
            var r4, i3, n2 = e3.level, a2 = e3.details, s2 = this._levels[n2];
            if (!s2)
              return this.warn("Invalid level index " + n2), void (null != (i3 = e3.deliveryDirectives) && i3.skip && (a2.deltaUpdateFailed = true));
            n2 === this.currentLevelIndex ? (0 === s2.fragmentError && (s2.loadError = 0), this.playlistLoaded(n2, e3, s2.details)) : null != (r4 = e3.deliveryDirectives) && r4.skip && (a2.deltaUpdateFailed = true);
          }, r3.loadPlaylist = function(e3) {
            t2.prototype.loadPlaylist.call(this);
            var r4 = this.currentLevelIndex, i3 = this.currentLevel;
            if (i3 && this.shouldLoadPlaylist(i3)) {
              var n2 = i3.uri;
              if (e3)
                try {
                  n2 = e3.addDirectives(n2);
                } catch (t3) {
                  this.warn("Could not construct new URL with HLS Delivery Directives: " + t3);
                }
              var a2 = i3.attrs["PATHWAY-ID"];
              this.log("Loading level index " + r4 + (void 0 !== (null == e3 ? void 0 : e3.msn) ? " at sn " + e3.msn + " part " + e3.part : "") + " with" + (a2 ? " Pathway " + a2 : "") + " " + n2), this.clearTimer(), this.hls.trigger(S.LEVEL_LOADING, { url: n2, level: r4, pathwayId: i3.attrs["PATHWAY-ID"], id: 0, deliveryDirectives: e3 || null });
            }
          }, r3.removeLevel = function(t3) {
            var e3, r4 = this, i3 = this._levels.filter(function(e4, i4) {
              return i4 !== t3 || (r4.steering && r4.steering.removeLevel(e4), e4 === r4.currentLevel && (r4.currentLevel = null, r4.currentLevelIndex = -1, e4.details && e4.details.fragments.forEach(function(t4) {
                return t4.level = -1;
              })), false);
            });
            dr(i3), this._levels = i3, this.currentLevelIndex > -1 && null != (e3 = this.currentLevel) && e3.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.hls.trigger(S.LEVELS_UPDATED, { levels: i3 });
          }, r3.onLevelsUpdated = function(t3, e3) {
            var r4 = e3.levels;
            this._levels = r4;
          }, r3.checkMaxAutoUpdated = function() {
            var t3 = this.hls, e3 = t3.autoLevelCapping, r4 = t3.maxAutoLevel, i3 = t3.maxHdcpLevel;
            this._maxAutoLevel !== r4 && (this._maxAutoLevel = r4, this.hls.trigger(S.MAX_AUTO_LEVEL_UPDATED, { autoLevelCapping: e3, levels: this.levels, maxAutoLevel: r4, minAutoLevel: this.hls.minAutoLevel, maxHdcpLevel: i3 }));
          }, s(e2, [{ key: "levels", get: function() {
            return 0 === this._levels.length ? null : this._levels;
          } }, { key: "level", get: function() {
            return this.currentLevelIndex;
          }, set: function(t3) {
            var e3 = this._levels;
            if (0 !== e3.length) {
              if (t3 < 0 || t3 >= e3.length) {
                var r4 = new Error("invalid level idx"), i3 = t3 < 0;
                if (this.hls.trigger(S.ERROR, { type: L.OTHER_ERROR, details: A.LEVEL_SWITCH_ERROR, level: t3, fatal: i3, error: r4, reason: r4.message }), i3)
                  return;
                t3 = Math.min(t3, e3.length - 1);
              }
              var n2 = this.currentLevelIndex, a2 = this.currentLevel, s2 = a2 ? a2.attrs["PATHWAY-ID"] : void 0, o2 = e3[t3], l2 = o2.attrs["PATHWAY-ID"];
              if (this.currentLevelIndex = t3, this.currentLevel = o2, n2 !== t3 || !o2.details || !a2 || s2 !== l2) {
                this.log("Switching to level " + t3 + " (" + (o2.height ? o2.height + "p " : "") + (o2.videoRange ? o2.videoRange + " " : "") + (o2.codecSet ? o2.codecSet + " " : "") + "@" + o2.bitrate + ")" + (l2 ? " with Pathway " + l2 : "") + " from level " + n2 + (s2 ? " with Pathway " + s2 : ""));
                var u2 = { level: t3, attrs: o2.attrs, details: o2.details, bitrate: o2.bitrate, averageBitrate: o2.averageBitrate, maxBitrate: o2.maxBitrate, realBitrate: o2.realBitrate, width: o2.width, height: o2.height, codecSet: o2.codecSet, audioCodec: o2.audioCodec, videoCodec: o2.videoCodec, audioGroups: o2.audioGroups, subtitleGroups: o2.subtitleGroups, loaded: o2.loaded, loadError: o2.loadError, fragmentError: o2.fragmentError, name: o2.name, id: o2.id, uri: o2.uri, url: o2.url, urlId: 0, audioGroupIds: o2.audioGroupIds, textGroupIds: o2.textGroupIds };
                this.hls.trigger(S.LEVEL_SWITCHING, u2);
                var h2 = o2.details;
                if (!h2 || h2.live) {
                  var d2 = this.switchParams(o2.uri, null == a2 ? void 0 : a2.details, h2);
                  this.loadPlaylist(d2);
                }
              }
            }
          } }, { key: "manualLevel", get: function() {
            return this.manualLevelIndex;
          }, set: function(t3) {
            this.manualLevelIndex = t3, void 0 === this._startLevel && (this._startLevel = t3), -1 !== t3 && (this.level = t3);
          } }, { key: "firstLevel", get: function() {
            return this._firstLevel;
          }, set: function(t3) {
            this._firstLevel = t3;
          } }, { key: "startLevel", get: function() {
            if (void 0 === this._startLevel) {
              var t3 = this.hls.config.startLevel;
              return void 0 !== t3 ? t3 : this.hls.firstAutoLevel;
            }
            return this._startLevel;
          }, set: function(t3) {
            this._startLevel = t3;
          } }, { key: "nextLoadLevel", get: function() {
            return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel;
          }, set: function(t3) {
            this.level = t3, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t3);
          } }]), e2;
        }(wr);
        function eo(t2) {
          var e2 = {};
          t2.forEach(function(t3) {
            var r3 = t3.groupId || "";
            t3.id = e2[r3] = e2[r3] || 0, e2[r3]++;
          });
        }
        var ro = function() {
          function t2(t3) {
            this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = t3;
          }
          var e2 = t2.prototype;
          return e2.abort = function(t3) {
            for (var e3 in this.keyUriToKeyInfo) {
              var r3 = this.keyUriToKeyInfo[e3].loader;
              if (r3) {
                var i3;
                if (t3 && t3 !== (null == (i3 = r3.context) ? void 0 : i3.frag.type))
                  return;
                r3.abort();
              }
            }
          }, e2.detach = function() {
            for (var t3 in this.keyUriToKeyInfo) {
              var e3 = this.keyUriToKeyInfo[t3];
              (e3.mediaKeySessionContext || e3.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[t3];
            }
          }, e2.destroy = function() {
            for (var t3 in this.detach(), this.keyUriToKeyInfo) {
              var e3 = this.keyUriToKeyInfo[t3].loader;
              e3 && e3.destroy();
            }
            this.keyUriToKeyInfo = {};
          }, e2.createKeyLoadError = function(t3, e3, r3, i3, n2) {
            return void 0 === e3 && (e3 = A.KEY_LOAD_ERROR), new li({ type: L.NETWORK_ERROR, details: e3, fatal: false, frag: t3, response: n2, error: r3, networkDetails: i3 });
          }, e2.loadClear = function(t3, e3) {
            var r3 = this;
            if (this.emeController && this.config.emeEnabled)
              for (var i3 = t3.sn, n2 = t3.cc, a2 = function() {
                var t4 = e3[s2];
                if (n2 <= t4.cc && ("initSegment" === i3 || "initSegment" === t4.sn || i3 < t4.sn))
                  return r3.emeController.selectKeySystemFormat(t4).then(function(e4) {
                    t4.setKeyFormat(e4);
                  }), 1;
              }, s2 = 0; s2 < e3.length && !a2(); s2++)
                ;
          }, e2.load = function(t3) {
            var e3 = this;
            return !t3.decryptdata && t3.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(t3).then(function(r3) {
              return e3.loadInternal(t3, r3);
            }) : this.loadInternal(t3);
          }, e2.loadInternal = function(t3, e3) {
            var r3, i3;
            e3 && t3.setKeyFormat(e3);
            var n2 = t3.decryptdata;
            if (!n2) {
              var a2 = new Error(e3 ? "Expected frag.decryptdata to be defined after setting format " + e3 : "Missing decryption data on fragment in onKeyLoading");
              return Promise.reject(this.createKeyLoadError(t3, A.KEY_LOAD_ERROR, a2));
            }
            var s2 = n2.uri;
            if (!s2)
              return Promise.reject(this.createKeyLoadError(t3, A.KEY_LOAD_ERROR, new Error('Invalid key URI: "' + s2 + '"')));
            var o2, l2 = this.keyUriToKeyInfo[s2];
            if (null != (r3 = l2) && r3.decryptdata.key)
              return n2.key = l2.decryptdata.key, Promise.resolve({ frag: t3, keyInfo: l2 });
            if (null != (i3 = l2) && i3.keyLoadPromise)
              switch (null == (o2 = l2.mediaKeySessionContext) ? void 0 : o2.keyStatus) {
                case void 0:
                case "status-pending":
                case "usable":
                case "usable-in-future":
                  return l2.keyLoadPromise.then(function(e4) {
                    return n2.key = e4.keyInfo.decryptdata.key, { frag: t3, keyInfo: l2 };
                  });
              }
            switch (l2 = this.keyUriToKeyInfo[s2] = { decryptdata: n2, keyLoadPromise: null, loader: null, mediaKeySessionContext: null }, n2.method) {
              case "ISO-23001-7":
              case "SAMPLE-AES":
              case "SAMPLE-AES-CENC":
              case "SAMPLE-AES-CTR":
                return "identity" === n2.keyFormat ? this.loadKeyHTTP(l2, t3) : this.loadKeyEME(l2, t3);
              case "AES-128":
                return this.loadKeyHTTP(l2, t3);
              default:
                return Promise.reject(this.createKeyLoadError(t3, A.KEY_LOAD_ERROR, new Error('Key supplied with unsupported METHOD: "' + n2.method + '"')));
            }
          }, e2.loadKeyEME = function(t3, e3) {
            var r3 = { frag: e3, keyInfo: t3 };
            if (this.emeController && this.config.emeEnabled) {
              var i3 = this.emeController.loadKey(r3);
              if (i3)
                return (t3.keyLoadPromise = i3.then(function(e4) {
                  return t3.mediaKeySessionContext = e4, r3;
                })).catch(function(e4) {
                  throw t3.keyLoadPromise = null, e4;
                });
            }
            return Promise.resolve(r3);
          }, e2.loadKeyHTTP = function(t3, e3) {
            var r3 = this, n2 = this.config, a2 = new (0, n2.loader)(n2);
            return e3.keyLoader = t3.loader = a2, t3.keyLoadPromise = new Promise(function(s2, o2) {
              var l2 = { keyInfo: t3, frag: e3, responseType: "arraybuffer", url: t3.decryptdata.uri }, u2 = n2.keyLoadPolicy.default, h2 = { loadPolicy: u2, timeout: u2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 }, d2 = { onSuccess: function(t4, e4, i3, n3) {
                var a3 = i3.frag, l3 = i3.keyInfo, u3 = i3.url;
                if (!a3.decryptdata || l3 !== r3.keyUriToKeyInfo[u3])
                  return o2(r3.createKeyLoadError(a3, A.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), n3));
                l3.decryptdata.key = a3.decryptdata.key = new Uint8Array(t4.data), a3.keyLoader = null, l3.loader = null, s2({ frag: a3, keyInfo: l3 });
              }, onError: function(t4, n3, a3, s3) {
                r3.resetLoader(n3), o2(r3.createKeyLoadError(e3, A.KEY_LOAD_ERROR, new Error("HTTP Error " + t4.code + " loading key " + t4.text), a3, i2({ url: l2.url, data: void 0 }, t4)));
              }, onTimeout: function(t4, i3, n3) {
                r3.resetLoader(i3), o2(r3.createKeyLoadError(e3, A.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), n3));
              }, onAbort: function(t4, i3, n3) {
                r3.resetLoader(i3), o2(r3.createKeyLoadError(e3, A.INTERNAL_ABORTED, new Error("key loading aborted"), n3));
              } };
              a2.load(l2, h2, d2);
            });
          }, e2.resetLoader = function(t3) {
            var e3 = t3.frag, r3 = t3.keyInfo, i3 = t3.url, n2 = r3.loader;
            e3.keyLoader === n2 && (e3.keyLoader = null, r3.loader = null), delete this.keyUriToKeyInfo[i3], n2 && n2.destroy();
          }, t2;
        }();
        function io() {
          return self.SourceBuffer || self.WebKitSourceBuffer;
        }
        function no() {
          if (!ee())
            return false;
          var t2 = io();
          return !t2 || t2.prototype && "function" == typeof t2.prototype.appendBuffer && "function" == typeof t2.prototype.remove;
        }
        var ao = function() {
          function t2(t3, e3, r3, i3) {
            this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = false, this.stalled = null, this.moved = false, this.seeking = false, this.config = t3, this.media = e3, this.fragmentTracker = r3, this.hls = i3;
          }
          var e2 = t2.prototype;
          return e2.destroy = function() {
            this.media = null, this.hls = this.fragmentTracker = null;
          }, e2.poll = function(t3, e3) {
            var r3 = this.config, i3 = this.media, n2 = this.stalled;
            if (null !== i3) {
              var a2 = i3.currentTime, s2 = i3.seeking, o2 = this.seeking && !s2, l2 = !this.seeking && s2;
              if (this.seeking = s2, a2 === t3)
                if (l2 || o2)
                  this.stalled = null;
                else if (i3.paused && !s2 || i3.ended || 0 === i3.playbackRate || !Jr.getBuffered(i3).length)
                  this.nudgeRetry = 0;
                else {
                  var u2 = Jr.bufferInfo(i3, a2, 0), h2 = u2.nextStart || 0;
                  if (s2) {
                    var d2 = u2.len > 2, c2 = !h2 || e3 && e3.start <= a2 || h2 - a2 > 2 && !this.fragmentTracker.getPartialFragment(a2);
                    if (d2 || c2)
                      return;
                    this.moved = false;
                  }
                  if (!this.moved && null !== this.stalled) {
                    var f2;
                    if (!(u2.len > 0 || h2))
                      return;
                    var g2 = Math.max(h2, u2.start || 0) - a2, v2 = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, m2 = (null == v2 || null == (f2 = v2.details) ? void 0 : f2.live) ? 2 * v2.details.targetduration : 2, p2 = this.fragmentTracker.getPartialFragment(a2);
                    if (g2 > 0 && (g2 <= m2 || p2))
                      return void (i3.paused || this._trySkipBufferHole(p2));
                  }
                  var y2 = self.performance.now();
                  if (null !== n2) {
                    var E2 = y2 - n2;
                    if (s2 || !(E2 >= 250) || (this._reportStall(u2), this.media)) {
                      var T2 = Jr.bufferInfo(i3, a2, r3.maxBufferHole);
                      this._tryFixBufferStall(T2, E2);
                    }
                  } else
                    this.stalled = y2;
                }
              else if (this.moved = true, s2 || (this.nudgeRetry = 0), null !== n2) {
                if (this.stallReported) {
                  var S2 = self.performance.now() - n2;
                  w.warn("playback not stuck anymore @" + a2 + ", after " + Math.round(S2) + "ms"), this.stallReported = false;
                }
                this.stalled = null;
              }
            }
          }, e2._tryFixBufferStall = function(t3, e3) {
            var r3 = this.config, i3 = this.fragmentTracker, n2 = this.media;
            if (null !== n2) {
              var a2 = n2.currentTime, s2 = i3.getPartialFragment(a2);
              if (s2 && (this._trySkipBufferHole(s2) || !this.media))
                return;
              (t3.len > r3.maxBufferHole || t3.nextStart && t3.nextStart - a2 < r3.maxBufferHole) && e3 > 1e3 * r3.highBufferWatchdogPeriod && (w.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
            }
          }, e2._reportStall = function(t3) {
            var e3 = this.hls, r3 = this.media;
            if (!this.stallReported && r3) {
              this.stallReported = true;
              var i3 = new Error("Playback stalling at @" + r3.currentTime + " due to low buffer (" + JSON.stringify(t3) + ")");
              w.warn(i3.message), e3.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.BUFFER_STALLED_ERROR, fatal: false, error: i3, buffer: t3.len });
            }
          }, e2._trySkipBufferHole = function(t3) {
            var e3 = this.config, r3 = this.hls, i3 = this.media;
            if (null === i3)
              return 0;
            var n2 = i3.currentTime, a2 = Jr.bufferInfo(i3, n2, 0), s2 = n2 < a2.start ? a2.start : a2.nextStart;
            if (s2) {
              var o2 = a2.len <= e3.maxBufferHole, l2 = a2.len > 0 && a2.len < 1 && i3.readyState < 3, u2 = s2 - n2;
              if (u2 > 0 && (o2 || l2)) {
                if (u2 > e3.maxBufferHole) {
                  var h2 = this.fragmentTracker, d2 = false;
                  if (0 === n2) {
                    var c2 = h2.getAppendedFrag(0, we);
                    c2 && s2 < c2.end && (d2 = true);
                  }
                  if (!d2) {
                    var f2 = t3 || h2.getAppendedFrag(n2, we);
                    if (f2) {
                      for (var g2 = false, v2 = f2.end; v2 < s2; ) {
                        var m2 = h2.getPartialFragment(v2);
                        if (!m2) {
                          g2 = true;
                          break;
                        }
                        v2 += m2.duration;
                      }
                      if (g2)
                        return 0;
                    }
                  }
                }
                var p2 = Math.max(s2 + 0.05, n2 + 0.1);
                if (w.warn("skipping hole, adjusting currentTime from " + n2 + " to " + p2), this.moved = true, this.stalled = null, i3.currentTime = p2, t3 && !t3.gap) {
                  var y2 = new Error("fragment loaded with buffer holes, seeking from " + n2 + " to " + p2);
                  r3.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.BUFFER_SEEK_OVER_HOLE, fatal: false, error: y2, reason: y2.message, frag: t3 });
                }
                return p2;
              }
            }
            return 0;
          }, e2._tryNudgeBuffer = function() {
            var t3 = this.config, e3 = this.hls, r3 = this.media, i3 = this.nudgeRetry;
            if (null !== r3) {
              var n2 = r3.currentTime;
              if (this.nudgeRetry++, i3 < t3.nudgeMaxRetry) {
                var a2 = n2 + (i3 + 1) * t3.nudgeOffset, s2 = new Error("Nudging 'currentTime' from " + n2 + " to " + a2);
                w.warn(s2.message), r3.currentTime = a2, e3.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.BUFFER_NUDGE_ON_STALL, error: s2, fatal: false });
              } else {
                var o2 = new Error("Playhead still not moving while enough data buffered @" + n2 + " after " + t3.nudgeMaxRetry + " nudges");
                w.error(o2.message), e3.trigger(S.ERROR, { type: L.MEDIA_ERROR, details: A.BUFFER_STALLED_ERROR, error: o2, fatal: true });
              }
            }
          }, t2;
        }(), so = function(t2) {
          function e2(e3, r4, i3) {
            var n2;
            return (n2 = t2.call(this, e3, r4, i3, "[stream-controller]", we) || this).audioCodecSwap = false, n2.gapController = null, n2.level = -1, n2._forceStartLoad = false, n2.altAudio = false, n2.audioOnly = false, n2.fragPlaying = null, n2.onvplaying = null, n2.onvseeked = null, n2.fragLastKbps = 0, n2.couldBacktrack = false, n2.backtrackFragment = null, n2.audioCodecSwitch = false, n2.videoBuffer = null, n2._registerListeners(), n2;
          }
          l(e2, t2);
          var r3 = e2.prototype;
          return r3._registerListeners = function() {
            var t3 = this.hls;
            t3.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.on(S.LEVEL_LOADING, this.onLevelLoading, this), t3.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.on(S.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t3.on(S.ERROR, this.onError, this), t3.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t3.on(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t3.on(S.BUFFER_CREATED, this.onBufferCreated, this), t3.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t3.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t3.on(S.FRAG_BUFFERED, this.onFragBuffered, this);
          }, r3._unregisterListeners = function() {
            var t3 = this.hls;
            t3.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t3.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t3.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t3.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t3.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t3.off(S.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t3.off(S.ERROR, this.onError, this), t3.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t3.off(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t3.off(S.BUFFER_CREATED, this.onBufferCreated, this), t3.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t3.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t3.off(S.FRAG_BUFFERED, this.onFragBuffered, this);
          }, r3.onHandlerDestroying = function() {
            this._unregisterListeners(), t2.prototype.onHandlerDestroying.call(this);
          }, r3.startLoad = function(t3) {
            if (this.levels) {
              var e3 = this.lastCurrentTime, r4 = this.hls;
              if (this.stopLoad(), this.setInterval(100), this.level = -1, !this.startFragRequested) {
                var i3 = r4.startLevel;
                -1 === i3 && (r4.config.testBandwidth && this.levels.length > 1 ? (i3 = 0, this.bitrateTest = true) : i3 = r4.firstAutoLevel), r4.nextLoadLevel = i3, this.level = r4.loadLevel, this.loadedmetadata = false;
              }
              e3 > 0 && -1 === t3 && (this.log("Override startPosition with lastCurrentTime @" + e3.toFixed(3)), t3 = e3), this.state = vi, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t3, this.tick();
            } else
              this._forceStartLoad = true, this.state = gi;
          }, r3.stopLoad = function() {
            this._forceStartLoad = false, t2.prototype.stopLoad.call(this);
          }, r3.doTick = function() {
            switch (this.state) {
              case ki:
                var t3 = this.levels, e3 = this.level, r4 = null == t3 ? void 0 : t3[e3], i3 = null == r4 ? void 0 : r4.details;
                if (i3 && (!i3.live || this.levelLastLoaded === r4)) {
                  if (this.waitForCdnTuneIn(i3))
                    break;
                  this.state = vi;
                  break;
                }
                if (this.hls.nextLoadLevel !== this.level) {
                  this.state = vi;
                  break;
                }
                break;
              case yi:
                var n2, a2 = self.performance.now(), s2 = this.retryDate;
                if (!s2 || a2 >= s2 || null != (n2 = this.media) && n2.seeking) {
                  var o2 = this.levels, l2 = this.level, u2 = null == o2 ? void 0 : o2[l2];
                  this.resetStartWhenNotLoaded(u2 || null), this.state = vi;
                }
            }
            this.state === vi && this.doTickIdle(), this.onTickEnd();
          }, r3.onTickEnd = function() {
            t2.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged();
          }, r3.doTickIdle = function() {
            var t3 = this.hls, e3 = this.levelLastLoaded, r4 = this.levels, i3 = this.media;
            if (null !== e3 && (i3 || !this.startFragRequested && t3.config.startFragPrefetch) && (!this.altAudio || !this.audioOnly)) {
              var n2 = t3.nextLoadLevel;
              if (null != r4 && r4[n2]) {
                var a2 = r4[n2], s2 = this.getMainFwdBufferInfo();
                if (null !== s2) {
                  var o2 = this.getLevelDetails();
                  if (o2 && this._streamEnded(s2, o2)) {
                    var l2 = {};
                    return this.altAudio && (l2.type = "video"), this.hls.trigger(S.BUFFER_EOS, l2), void (this.state = Li);
                  }
                  t3.loadLevel !== n2 && -1 === t3.manualLevel && this.log("Adapting to level " + n2 + " from level " + this.level), this.level = t3.nextLoadLevel = n2;
                  var u2 = a2.details;
                  if (!u2 || this.state === ki || u2.live && this.levelLastLoaded !== a2)
                    return this.level = n2, void (this.state = ki);
                  var h2 = s2.len, d2 = this.getMaxBufferLength(a2.maxBitrate);
                  if (!(h2 >= d2)) {
                    this.backtrackFragment && this.backtrackFragment.start > s2.end && (this.backtrackFragment = null);
                    var c2 = this.backtrackFragment ? this.backtrackFragment.start : s2.end, f2 = this.getNextFragment(c2, u2);
                    if (this.couldBacktrack && !this.fragPrevious && f2 && "initSegment" !== f2.sn && this.fragmentTracker.getState(f2) !== jr) {
                      var g2, v2 = (null != (g2 = this.backtrackFragment) ? g2 : f2).sn - u2.startSN, m2 = u2.fragments[v2 - 1];
                      m2 && f2.cc === m2.cc && (f2 = m2, this.fragmentTracker.removeFragment(m2));
                    } else
                      this.backtrackFragment && s2.len && (this.backtrackFragment = null);
                    if (f2 && this.isLoopLoading(f2, c2)) {
                      if (!f2.gap) {
                        var p2 = this.audioOnly && !this.altAudio ? O : N, y2 = (p2 === N ? this.videoBuffer : this.mediaBuffer) || this.media;
                        y2 && this.afterBufferFlushed(y2, p2, we);
                      }
                      f2 = this.getNextFragmentLoopLoading(f2, u2, s2, we, d2);
                    }
                    f2 && (!f2.initSegment || f2.initSegment.data || this.bitrateTest || (f2 = f2.initSegment), this.loadFragment(f2, a2, c2));
                  }
                }
              }
            }
          }, r3.loadFragment = function(e3, r4, i3) {
            var n2 = this.fragmentTracker.getState(e3);
            this.fragCurrent = e3, n2 === Vr || n2 === Wr ? "initSegment" === e3.sn ? this._loadInitSegment(e3, r4) : this.bitrateTest ? (this.log("Fragment " + e3.sn + " of level " + e3.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e3, r4)) : (this.startFragRequested = true, t2.prototype.loadFragment.call(this, e3, r4, i3)) : this.clearTrackerIfNeeded(e3);
          }, r3.getBufferedFrag = function(t3) {
            return this.fragmentTracker.getBufferedFrag(t3, we);
          }, r3.followingBufferedFrag = function(t3) {
            return t3 ? this.getBufferedFrag(t3.end + 0.5) : null;
          }, r3.immediateLevelSwitch = function() {
            this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
          }, r3.nextLevelSwitch = function() {
            var t3 = this.levels, e3 = this.media;
            if (null != e3 && e3.readyState) {
              var r4, i3 = this.getAppendedFrag(e3.currentTime);
              i3 && i3.start > 1 && this.flushMainBuffer(0, i3.start - 1);
              var n2 = this.getLevelDetails();
              if (null != n2 && n2.live) {
                var a2 = this.getMainFwdBufferInfo();
                if (!a2 || a2.len < 2 * n2.targetduration)
                  return;
              }
              if (!e3.paused && t3) {
                var s2 = t3[this.hls.nextLoadLevel], o2 = this.fragLastKbps;
                r4 = o2 && this.fragCurrent ? this.fragCurrent.duration * s2.maxBitrate / (1e3 * o2) + 1 : 0;
              } else
                r4 = 0;
              var l2 = this.getBufferedFrag(e3.currentTime + r4);
              if (l2) {
                var u2 = this.followingBufferedFrag(l2);
                if (u2) {
                  this.abortCurrentFrag();
                  var h2 = u2.maxStartPTS ? u2.maxStartPTS : u2.start, d2 = u2.duration, c2 = Math.max(l2.end, h2 + Math.min(Math.max(d2 - this.config.maxFragLookUpTolerance, d2 * (this.couldBacktrack ? 0.5 : 0.125)), d2 * (this.couldBacktrack ? 0.75 : 0.25)));
                  this.flushMainBuffer(c2, Number.POSITIVE_INFINITY);
                }
              }
            }
          }, r3.abortCurrentFrag = function() {
            var t3 = this.fragCurrent;
            switch (this.fragCurrent = null, this.backtrackFragment = null, t3 && (t3.abortRequests(), this.fragmentTracker.removeFragment(t3)), this.state) {
              case mi:
              case pi:
              case yi:
              case Ti:
              case Si:
                this.state = vi;
            }
            this.nextLoadPosition = this.getLoadPosition();
          }, r3.flushMainBuffer = function(e3, r4) {
            t2.prototype.flushMainBuffer.call(this, e3, r4, this.altAudio ? "video" : null);
          }, r3.onMediaAttached = function(e3, r4) {
            t2.prototype.onMediaAttached.call(this, e3, r4);
            var i3 = r4.media;
            this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i3.addEventListener("playing", this.onvplaying), i3.addEventListener("seeked", this.onvseeked), this.gapController = new ao(this.config, i3, this.fragmentTracker, this.hls);
          }, r3.onMediaDetaching = function() {
            var e3 = this.media;
            e3 && this.onvplaying && this.onvseeked && (e3.removeEventListener("playing", this.onvplaying), e3.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), t2.prototype.onMediaDetaching.call(this);
          }, r3.onMediaPlaying = function() {
            this.tick();
          }, r3.onMediaSeeked = function() {
            var t3 = this.media, e3 = t3 ? t3.currentTime : null;
            y(e3) && this.log("Media seeked to " + e3.toFixed(3));
            var r4 = this.getMainFwdBufferInfo();
            null !== r4 && 0 !== r4.len ? this.tick() : this.warn('Main forward buffer length on "seeked" event ' + (r4 ? r4.len : "empty") + ")");
          }, r3.onManifestLoading = function() {
            this.log("Trigger BUFFER_RESET"), this.hls.trigger(S.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = false, this.startPosition = this.lastCurrentTime = this.fragLastKbps = 0, this.levels = this.fragPlaying = this.backtrackFragment = this.levelLastLoaded = null, this.altAudio = this.audioOnly = this.startFragRequested = false;
          }, r3.onManifestParsed = function(t3, e3) {
            var r4, i3, n2 = false, a2 = false;
            e3.levels.forEach(function(t4) {
              var e4 = t4.audioCodec;
              e4 && (n2 = n2 || -1 !== e4.indexOf("mp4a.40.2"), a2 = a2 || -1 !== e4.indexOf("mp4a.40.5"));
            }), this.audioCodecSwitch = n2 && a2 && !("function" == typeof (null == (i3 = io()) || null == (r4 = i3.prototype) ? void 0 : r4.changeType)), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e3.levels, this.startFragRequested = false;
          }, r3.onLevelLoading = function(t3, e3) {
            var r4 = this.levels;
            if (r4 && this.state === vi) {
              var i3 = r4[e3.level];
              (!i3.details || i3.details.live && this.levelLastLoaded !== i3 || this.waitForCdnTuneIn(i3.details)) && (this.state = ki);
            }
          }, r3.onLevelLoaded = function(t3, e3) {
            var r4, i3 = this.levels, n2 = e3.level, a2 = e3.details, s2 = a2.totalduration;
            if (i3) {
              this.log("Level " + n2 + " loaded [" + a2.startSN + "," + a2.endSN + "]" + (a2.lastPartSn ? "[part-" + a2.lastPartSn + "-" + a2.lastPartIndex + "]" : "") + ", cc [" + a2.startCC + ", " + a2.endCC + "] duration:" + s2);
              var o2 = i3[n2], l2 = this.fragCurrent;
              !l2 || this.state !== pi && this.state !== yi || l2.level !== e3.level && l2.loader && this.abortCurrentFrag();
              var u2 = 0;
              if (a2.live || null != (r4 = o2.details) && r4.live) {
                var h2;
                if (this.checkLiveUpdate(a2), a2.deltaUpdateFailed)
                  return;
                u2 = this.alignPlaylists(a2, o2.details, null == (h2 = this.levelLastLoaded) ? void 0 : h2.details);
              }
              if (o2.details = a2, this.levelLastLoaded = o2, this.hls.trigger(S.LEVEL_UPDATED, { details: a2, level: n2 }), this.state === ki) {
                if (this.waitForCdnTuneIn(a2))
                  return;
                this.state = vi;
              }
              this.startFragRequested ? a2.live && this.synchronizeToLiveEdge(a2) : this.setStartPosition(a2, u2), this.tick();
            } else
              this.warn("Levels were reset while loading level " + n2);
          }, r3._handleFragmentLoadProgress = function(t3) {
            var e3, r4 = t3.frag, i3 = t3.part, n2 = t3.payload, a2 = this.levels;
            if (a2) {
              var s2 = a2[r4.level], o2 = s2.details;
              if (!o2)
                return this.warn("Dropping fragment " + r4.sn + " of level " + r4.level + " after level details were reset"), void this.fragmentTracker.removeFragment(r4);
              var l2 = s2.videoCodec, u2 = o2.PTSKnown || !o2.live, h2 = null == (e3 = r4.initSegment) ? void 0 : e3.data, d2 = this._getAudioCodec(s2), c2 = this.transmuxer = this.transmuxer || new Kn(this.hls, we, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), f2 = i3 ? i3.index : -1, g2 = -1 !== f2, v2 = new $r(r4.level, r4.sn, r4.stats.chunkCount, n2.byteLength, f2, g2), m2 = this.initPTS[r4.cc];
              c2.push(n2, h2, d2, l2, r4, i3, o2.totalduration, u2, v2, m2);
            } else
              this.warn("Levels were reset while fragment load was in progress. Fragment " + r4.sn + " of level " + r4.level + " will not be buffered");
          }, r3.onAudioTrackSwitching = function(t3, e3) {
            var r4 = this.altAudio;
            if (!e3.url) {
              if (this.mediaBuffer !== this.media) {
                this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                var i3 = this.fragCurrent;
                i3 && (this.log("Switching to main audio track, cancel main fragment load"), i3.abortRequests(), this.fragmentTracker.removeFragment(i3)), this.resetTransmuxer(), this.resetLoadingState();
              } else
                this.audioOnly && this.resetTransmuxer();
              var n2 = this.hls;
              r4 && (n2.trigger(S.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: null }), this.fragmentTracker.removeAllFragments()), n2.trigger(S.AUDIO_TRACK_SWITCHED, e3);
            }
          }, r3.onAudioTrackSwitched = function(t3, e3) {
            var r4 = e3.id, i3 = !!this.hls.audioTracks[r4].url;
            if (i3) {
              var n2 = this.videoBuffer;
              n2 && this.mediaBuffer !== n2 && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n2);
            }
            this.altAudio = i3, this.tick();
          }, r3.onBufferCreated = function(t3, e3) {
            var r4, i3, n2 = e3.tracks, a2 = false;
            for (var s2 in n2) {
              var o2 = n2[s2];
              if ("main" === o2.id) {
                if (i3 = s2, r4 = o2, "video" === s2) {
                  var l2 = n2[s2];
                  l2 && (this.videoBuffer = l2.buffer);
                }
              } else
                a2 = true;
            }
            a2 && r4 ? (this.log("Alternate track found, use " + i3 + ".buffered to schedule main fragment loading"), this.mediaBuffer = r4.buffer) : this.mediaBuffer = this.media;
          }, r3.onFragBuffered = function(t3, e3) {
            var r4 = e3.frag, i3 = e3.part;
            if (!r4 || r4.type === we) {
              if (this.fragContextChanged(r4))
                return this.warn("Fragment " + r4.sn + (i3 ? " p: " + i3.index : "") + " of level " + r4.level + " finished buffering, but was aborted. state: " + this.state), void (this.state === Si && (this.state = vi));
              var n2 = i3 ? i3.stats : r4.stats;
              this.fragLastKbps = Math.round(8 * n2.total / (n2.buffering.end - n2.loading.first)), "initSegment" !== r4.sn && (this.fragPrevious = r4), this.fragBufferedComplete(r4, i3);
            }
          }, r3.onError = function(t3, e3) {
            var r4;
            if (e3.fatal)
              this.state = Ai;
            else
              switch (e3.details) {
                case A.FRAG_GAP:
                case A.FRAG_PARSING_ERROR:
                case A.FRAG_DECRYPT_ERROR:
                case A.FRAG_LOAD_ERROR:
                case A.FRAG_LOAD_TIMEOUT:
                case A.KEY_LOAD_ERROR:
                case A.KEY_LOAD_TIMEOUT:
                  this.onFragmentOrKeyLoadError(we, e3);
                  break;
                case A.LEVEL_LOAD_ERROR:
                case A.LEVEL_LOAD_TIMEOUT:
                case A.LEVEL_PARSING_ERROR:
                  e3.levelRetry || this.state !== ki || (null == (r4 = e3.context) ? void 0 : r4.type) !== be || (this.state = vi);
                  break;
                case A.BUFFER_APPEND_ERROR:
                case A.BUFFER_FULL_ERROR:
                  if (!e3.parent || "main" !== e3.parent)
                    return;
                  if (e3.details === A.BUFFER_APPEND_ERROR)
                    return void this.resetLoadingState();
                  this.reduceLengthAndFlushBuffer(e3) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                  break;
                case A.INTERNAL_EXCEPTION:
                  this.recoverWorkerError(e3);
              }
          }, r3.checkBuffer = function() {
            var t3 = this.media, e3 = this.gapController;
            if (t3 && e3 && t3.readyState) {
              if (this.loadedmetadata || !Jr.getBuffered(t3).length) {
                var r4 = this.state !== vi ? this.fragCurrent : null;
                e3.poll(this.lastCurrentTime, r4);
              }
              this.lastCurrentTime = t3.currentTime;
            }
          }, r3.onFragLoadEmergencyAborted = function() {
            this.state = vi, this.loadedmetadata || (this.startFragRequested = false, this.nextLoadPosition = this.startPosition), this.tickImmediate();
          }, r3.onBufferFlushed = function(t3, e3) {
            var r4 = e3.type;
            if (r4 !== O || this.audioOnly && !this.altAudio) {
              var i3 = (r4 === N ? this.videoBuffer : this.mediaBuffer) || this.media;
              this.afterBufferFlushed(i3, r4, we), this.tick();
            }
          }, r3.onLevelsUpdated = function(t3, e3) {
            this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level), this.levels = e3.levels;
          }, r3.swapAudioCodec = function() {
            this.audioCodecSwap = !this.audioCodecSwap;
          }, r3.seekToStartPos = function() {
            var t3 = this.media;
            if (t3) {
              var e3 = t3.currentTime, r4 = this.startPosition;
              if (r4 >= 0 && e3 < r4) {
                if (t3.seeking)
                  return void this.log("could not seek to " + r4 + ", already seeking at " + e3);
                var i3 = Jr.getBuffered(t3), n2 = (i3.length ? i3.start(0) : 0) - r4;
                n2 > 0 && (n2 < this.config.maxBufferHole || n2 < this.config.maxFragLookUpTolerance) && (this.log("adjusting start position by " + n2 + " to match buffer start"), r4 += n2, this.startPosition = r4), this.log("seek to target start position " + r4 + " from current time " + e3), t3.currentTime = r4;
              }
            }
          }, r3._getAudioCodec = function(t3) {
            var e3 = this.config.defaultAudioCodec || t3.audioCodec;
            return this.audioCodecSwap && e3 && (this.log("Swapping audio codec"), e3 = -1 !== e3.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), e3;
          }, r3._loadBitrateTestFrag = function(t3, e3) {
            var r4 = this;
            t3.bitrateTest = true, this._doFragLoad(t3, e3).then(function(i3) {
              var n2 = r4.hls;
              if (i3 && !r4.fragContextChanged(t3)) {
                e3.fragmentError = 0, r4.state = vi, r4.startFragRequested = false, r4.bitrateTest = false;
                var a2 = t3.stats;
                a2.parsing.start = a2.parsing.end = a2.buffering.start = a2.buffering.end = self.performance.now(), n2.trigger(S.FRAG_LOADED, i3), t3.bitrateTest = false;
              }
            });
          }, r3._handleTransmuxComplete = function(t3) {
            var e3, r4 = "main", i3 = this.hls, n2 = t3.remuxResult, a2 = t3.chunkMeta, s2 = this.getCurrentContext(a2);
            if (s2) {
              var o2 = s2.frag, l2 = s2.part, u2 = s2.level, h2 = n2.video, d2 = n2.text, c2 = n2.id3, f2 = n2.initSegment, g2 = u2.details, v2 = this.altAudio ? void 0 : n2.audio;
              if (this.fragContextChanged(o2))
                this.fragmentTracker.removeFragment(o2);
              else {
                if (this.state = Ti, f2) {
                  if (null != f2 && f2.tracks) {
                    var m2 = o2.initSegment || o2;
                    this._bufferInitSegment(u2, f2.tracks, m2, a2), i3.trigger(S.FRAG_PARSING_INIT_SEGMENT, { frag: m2, id: r4, tracks: f2.tracks });
                  }
                  var p2 = f2.initPTS, E2 = f2.timescale;
                  y(p2) && (this.initPTS[o2.cc] = { baseTime: p2, timescale: E2 }, i3.trigger(S.INIT_PTS_FOUND, { frag: o2, id: r4, initPTS: p2, timescale: E2 }));
                }
                if (h2 && g2 && "initSegment" !== o2.sn) {
                  var T2 = g2.fragments[o2.sn - 1 - g2.startSN], L2 = o2.sn === g2.startSN, A2 = !T2 || o2.cc > T2.cc;
                  if (false !== n2.independent) {
                    var R2 = h2.startPTS, k2 = h2.endPTS, b2 = h2.startDTS, D2 = h2.endDTS;
                    if (l2)
                      l2.elementaryStreams[h2.type] = { startPTS: R2, endPTS: k2, startDTS: b2, endDTS: D2 };
                    else if (h2.firstKeyFrame && h2.independent && 1 === a2.id && !A2 && (this.couldBacktrack = true), h2.dropped && h2.independent) {
                      var I2 = this.getMainFwdBufferInfo(), w2 = (I2 ? I2.end : this.getLoadPosition()) + this.config.maxBufferHole, C2 = h2.firstKeyFramePTS ? h2.firstKeyFramePTS : R2;
                      if (!L2 && w2 < C2 - this.config.maxBufferHole && !A2)
                        return void this.backtrack(o2);
                      A2 && (o2.gap = true), o2.setElementaryStreamInfo(h2.type, o2.start, k2, o2.start, D2, true);
                    } else
                      L2 && R2 > 2 && (o2.gap = true);
                    o2.setElementaryStreamInfo(h2.type, R2, k2, b2, D2), this.backtrackFragment && (this.backtrackFragment = o2), this.bufferFragmentData(h2, o2, l2, a2, L2 || A2);
                  } else {
                    if (!L2 && !A2)
                      return void this.backtrack(o2);
                    o2.gap = true;
                  }
                }
                if (v2) {
                  var _2 = v2.startPTS, x2 = v2.endPTS, P2 = v2.startDTS, F2 = v2.endDTS;
                  l2 && (l2.elementaryStreams[O] = { startPTS: _2, endPTS: x2, startDTS: P2, endDTS: F2 }), o2.setElementaryStreamInfo(O, _2, x2, P2, F2), this.bufferFragmentData(v2, o2, l2, a2);
                }
                if (g2 && null != c2 && null != (e3 = c2.samples) && e3.length) {
                  var M2 = { id: r4, frag: o2, details: g2, samples: c2.samples };
                  i3.trigger(S.FRAG_PARSING_METADATA, M2);
                }
                if (g2 && d2) {
                  var N2 = { id: r4, frag: o2, details: g2, samples: d2.samples };
                  i3.trigger(S.FRAG_PARSING_USERDATA, N2);
                }
              }
            } else
              this.resetWhenMissingContext(a2);
          }, r3._bufferInitSegment = function(t3, e3, r4, i3) {
            var n2 = this;
            if (this.state === Ti) {
              this.audioOnly = !!e3.audio && !e3.video, this.altAudio && !this.audioOnly && delete e3.audio;
              var a2 = e3.audio, s2 = e3.video, o2 = e3.audiovideo;
              if (a2) {
                var l2 = t3.audioCodec, u2 = navigator.userAgent.toLowerCase();
                this.audioCodecSwitch && (l2 && (l2 = -1 !== l2.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== a2.metadata.channelCount && -1 === u2.indexOf("firefox") && (l2 = "mp4a.40.5")), l2 && -1 !== l2.indexOf("mp4a.40.5") && -1 !== u2.indexOf("android") && "audio/mpeg" !== a2.container && (l2 = "mp4a.40.2", this.log("Android: force audio codec to " + l2)), t3.audioCodec && t3.audioCodec !== l2 && this.log('Swapping manifest audio codec "' + t3.audioCodec + '" for "' + l2 + '"'), a2.levelCodec = l2, a2.id = "main", this.log("Init audio buffer, container:" + a2.container + ", codecs[selected/level/parsed]=[" + (l2 || "") + "/" + (t3.audioCodec || "") + "/" + a2.codec + "]");
              }
              s2 && (s2.levelCodec = t3.videoCodec, s2.id = "main", this.log("Init video buffer, container:" + s2.container + ", codecs[level/parsed]=[" + (t3.videoCodec || "") + "/" + s2.codec + "]")), o2 && this.log("Init audiovideo buffer, container:" + o2.container + ", codecs[level/parsed]=[" + t3.codecs + "/" + o2.codec + "]"), this.hls.trigger(S.BUFFER_CODECS, e3), Object.keys(e3).forEach(function(t4) {
                var a3 = e3[t4].initSegment;
                null != a3 && a3.byteLength && n2.hls.trigger(S.BUFFER_APPENDING, { type: t4, data: a3, frag: r4, part: null, chunkMeta: i3, parent: r4.type });
              }), this.tickImmediate();
            }
          }, r3.getMainFwdBufferInfo = function() {
            return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, we);
          }, r3.backtrack = function(t3) {
            this.couldBacktrack = true, this.backtrackFragment = t3, this.resetTransmuxer(), this.flushBufferGap(t3), this.fragmentTracker.removeFragment(t3), this.fragPrevious = null, this.nextLoadPosition = t3.start, this.state = vi;
          }, r3.checkFragmentChanged = function() {
            var t3 = this.media, e3 = null;
            if (t3 && t3.readyState > 1 && false === t3.seeking) {
              var r4 = t3.currentTime;
              if (Jr.isBuffered(t3, r4) ? e3 = this.getAppendedFrag(r4) : Jr.isBuffered(t3, r4 + 0.1) && (e3 = this.getAppendedFrag(r4 + 0.1)), e3) {
                this.backtrackFragment = null;
                var i3 = this.fragPlaying, n2 = e3.level;
                i3 && e3.sn === i3.sn && i3.level === n2 || (this.fragPlaying = e3, this.hls.trigger(S.FRAG_CHANGED, { frag: e3 }), i3 && i3.level === n2 || this.hls.trigger(S.LEVEL_SWITCHED, { level: n2 }));
              }
            }
          }, s(e2, [{ key: "nextLevel", get: function() {
            var t3 = this.nextBufferedFrag;
            return t3 ? t3.level : -1;
          } }, { key: "currentFrag", get: function() {
            var t3 = this.media;
            return t3 ? this.fragPlaying || this.getAppendedFrag(t3.currentTime) : null;
          } }, { key: "currentProgramDateTime", get: function() {
            var t3 = this.media;
            if (t3) {
              var e3 = t3.currentTime, r4 = this.currentFrag;
              if (r4 && y(e3) && y(r4.programDateTime)) {
                var i3 = r4.programDateTime + 1e3 * (e3 - r4.start);
                return new Date(i3);
              }
            }
            return null;
          } }, { key: "currentLevel", get: function() {
            var t3 = this.currentFrag;
            return t3 ? t3.level : -1;
          } }, { key: "nextBufferedFrag", get: function() {
            var t3 = this.currentFrag;
            return t3 ? this.followingBufferedFrag(t3) : null;
          } }, { key: "forceStartLoad", get: function() {
            return this._forceStartLoad;
          } }]), e2;
        }(bi), oo = function() {
          function t2(e3) {
            void 0 === e3 && (e3 = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this.started = false, this._emitter = new Nn(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, this.triggeringException = void 0, I(e3.debug || false, "Hls instance");
            var r3 = this.config = function(t3, e4) {
              if ((e4.liveSyncDurationCount || e4.liveMaxLatencyDurationCount) && (e4.liveSyncDuration || e4.liveMaxLatencyDuration))
                throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
              if (void 0 !== e4.liveMaxLatencyDurationCount && (void 0 === e4.liveSyncDurationCount || e4.liveMaxLatencyDurationCount <= e4.liveSyncDurationCount))
                throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
              if (void 0 !== e4.liveMaxLatencyDuration && (void 0 === e4.liveSyncDuration || e4.liveMaxLatencyDuration <= e4.liveSyncDuration))
                throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
              var r4 = $s(t3), n3 = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
              return ["manifest", "level", "frag"].forEach(function(t4) {
                var i3 = ("level" === t4 ? "playlist" : t4) + "LoadPolicy", a3 = void 0 === e4[i3], s3 = [];
                n3.forEach(function(n4) {
                  var o3 = t4 + "Loading" + n4, l3 = e4[o3];
                  if (void 0 !== l3 && a3) {
                    s3.push(o3);
                    var u3 = r4[i3].default;
                    switch (e4[i3] = { default: u3 }, n4) {
                      case "TimeOut":
                        u3.maxLoadTimeMs = l3, u3.maxTimeToFirstByteMs = l3;
                        break;
                      case "MaxRetry":
                        u3.errorRetry.maxNumRetry = l3, u3.timeoutRetry.maxNumRetry = l3;
                        break;
                      case "RetryDelay":
                        u3.errorRetry.retryDelayMs = l3, u3.timeoutRetry.retryDelayMs = l3;
                        break;
                      case "MaxRetryTimeout":
                        u3.errorRetry.maxRetryDelayMs = l3, u3.timeoutRetry.maxRetryDelayMs = l3;
                    }
                  }
                }), s3.length && w.warn('hls.js config: "' + s3.join('", "') + '" setting(s) are deprecated, use "' + i3 + '": ' + JSON.stringify(e4[i3]));
              }), i2(i2({}, r4), e4);
            }(t2.DefaultConfig, e3);
            this.userConfig = e3, r3.progressive && Zs(r3);
            var n2 = r3.abrController, a2 = r3.bufferController, s2 = r3.capLevelController, o2 = r3.errorController, l2 = r3.fpsController, u2 = new o2(this), h2 = this.abrController = new n2(this), d2 = this.bufferController = new a2(this), c2 = this.capLevelController = new s2(this), f2 = new l2(this), g2 = new Fe(this), v2 = new qe(this), m2 = r3.contentSteeringController, p2 = m2 ? new m2(this) : null, y2 = this.levelController = new to(this, p2), E2 = new qr(this), T2 = new ro(this.config), L2 = this.streamController = new so(this, E2, T2);
            c2.setStreamController(L2), f2.setStreamController(L2);
            var A2 = [g2, y2, L2];
            p2 && A2.splice(1, 0, p2), this.networkControllers = A2;
            var R2 = [h2, d2, c2, f2, v2, E2];
            this.audioTrackController = this.createController(r3.audioTrackController, A2);
            var k2 = r3.audioStreamController;
            k2 && A2.push(new k2(this, E2, T2)), this.subtitleTrackController = this.createController(r3.subtitleTrackController, A2);
            var b2 = r3.subtitleStreamController;
            b2 && A2.push(new b2(this, E2, T2)), this.createController(r3.timelineController, R2), T2.emeController = this.emeController = this.createController(r3.emeController, R2), this.cmcdController = this.createController(r3.cmcdController, R2), this.latencyController = this.createController(Xe, R2), this.coreComponents = R2, A2.push(u2);
            var D2 = u2.onErrorOut;
            "function" == typeof D2 && this.on(S.ERROR, D2, u2);
          }
          t2.isMSESupported = function() {
            return no();
          }, t2.isSupported = function() {
            return function() {
              if (!no())
                return false;
              var t3 = ee();
              return "function" == typeof (null == t3 ? void 0 : t3.isTypeSupported) && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some(function(e3) {
                return t3.isTypeSupported(ae(e3, "video"));
              }) || ["mp4a.40.2", "fLaC"].some(function(e3) {
                return t3.isTypeSupported(ae(e3, "audio"));
              }));
            }();
          }, t2.getMediaSource = function() {
            return ee();
          };
          var e2 = t2.prototype;
          return e2.createController = function(t3, e3) {
            if (t3) {
              var r3 = new t3(this);
              return e3 && e3.push(r3), r3;
            }
            return null;
          }, e2.on = function(t3, e3, r3) {
            void 0 === r3 && (r3 = this), this._emitter.on(t3, e3, r3);
          }, e2.once = function(t3, e3, r3) {
            void 0 === r3 && (r3 = this), this._emitter.once(t3, e3, r3);
          }, e2.removeAllListeners = function(t3) {
            this._emitter.removeAllListeners(t3);
          }, e2.off = function(t3, e3, r3, i3) {
            void 0 === r3 && (r3 = this), this._emitter.off(t3, e3, r3, i3);
          }, e2.listeners = function(t3) {
            return this._emitter.listeners(t3);
          }, e2.emit = function(t3, e3, r3) {
            return this._emitter.emit(t3, e3, r3);
          }, e2.trigger = function(t3, e3) {
            if (this.config.debug)
              return this.emit(t3, t3, e3);
            try {
              return this.emit(t3, t3, e3);
            } catch (e4) {
              if (w.error("An internal error happened while handling event " + t3 + '. Error message: "' + e4.message + '". Here is a stacktrace:', e4), !this.triggeringException) {
                this.triggeringException = true;
                var r3 = t3 === S.ERROR;
                this.trigger(S.ERROR, { type: L.OTHER_ERROR, details: A.INTERNAL_EXCEPTION, fatal: r3, event: t3, error: e4 }), this.triggeringException = false;
              }
            }
            return false;
          }, e2.listenerCount = function(t3) {
            return this._emitter.listenerCount(t3);
          }, e2.destroy = function() {
            w.log("destroy"), this.trigger(S.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach(function(t4) {
              return t4.destroy();
            }), this.networkControllers.length = 0, this.coreComponents.forEach(function(t4) {
              return t4.destroy();
            }), this.coreComponents.length = 0;
            var t3 = this.config;
            t3.xhrSetup = t3.fetchSetup = void 0, this.userConfig = null;
          }, e2.attachMedia = function(t3) {
            w.log("attachMedia"), this._media = t3, this.trigger(S.MEDIA_ATTACHING, { media: t3 });
          }, e2.detachMedia = function() {
            w.log("detachMedia"), this.trigger(S.MEDIA_DETACHING, void 0), this._media = null;
          }, e2.loadSource = function(t3) {
            this.stopLoad();
            var e3 = this.media, r3 = this.url, i3 = this.url = p.buildAbsoluteURL(self.location.href, t3, { alwaysNormalize: true });
            this._autoLevelCapping = -1, this._maxHdcpLevel = null, w.log("loadSource:" + i3), e3 && r3 && (r3 !== i3 || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(e3)), this.trigger(S.MANIFEST_LOADING, { url: t3 });
          }, e2.startLoad = function(t3) {
            void 0 === t3 && (t3 = -1), w.log("startLoad(" + t3 + ")"), this.started = true, this.networkControllers.forEach(function(e3) {
              e3.startLoad(t3);
            });
          }, e2.stopLoad = function() {
            w.log("stopLoad"), this.started = false, this.networkControllers.forEach(function(t3) {
              t3.stopLoad();
            });
          }, e2.resumeBuffering = function() {
            this.started && this.networkControllers.forEach(function(t3) {
              "fragmentLoader" in t3 && t3.startLoad(-1);
            });
          }, e2.pauseBuffering = function() {
            this.networkControllers.forEach(function(t3) {
              "fragmentLoader" in t3 && t3.stopLoad();
            });
          }, e2.swapAudioCodec = function() {
            w.log("swapAudioCodec"), this.streamController.swapAudioCodec();
          }, e2.recoverMediaError = function() {
            w.log("recoverMediaError");
            var t3 = this._media;
            this.detachMedia(), t3 && this.attachMedia(t3);
          }, e2.removeLevel = function(t3) {
            this.levelController.removeLevel(t3);
          }, e2.setAudioOption = function(t3) {
            var e3;
            return null == (e3 = this.audioTrackController) ? void 0 : e3.setAudioOption(t3);
          }, e2.setSubtitleOption = function(t3) {
            var e3;
            return null == (e3 = this.subtitleTrackController) || e3.setSubtitleOption(t3), null;
          }, s(t2, [{ key: "levels", get: function() {
            var t3 = this.levelController.levels;
            return t3 || [];
          } }, { key: "currentLevel", get: function() {
            return this.streamController.currentLevel;
          }, set: function(t3) {
            w.log("set currentLevel:" + t3), this.levelController.manualLevel = t3, this.streamController.immediateLevelSwitch();
          } }, { key: "nextLevel", get: function() {
            return this.streamController.nextLevel;
          }, set: function(t3) {
            w.log("set nextLevel:" + t3), this.levelController.manualLevel = t3, this.streamController.nextLevelSwitch();
          } }, { key: "loadLevel", get: function() {
            return this.levelController.level;
          }, set: function(t3) {
            w.log("set loadLevel:" + t3), this.levelController.manualLevel = t3;
          } }, { key: "nextLoadLevel", get: function() {
            return this.levelController.nextLoadLevel;
          }, set: function(t3) {
            this.levelController.nextLoadLevel = t3;
          } }, { key: "firstLevel", get: function() {
            return Math.max(this.levelController.firstLevel, this.minAutoLevel);
          }, set: function(t3) {
            w.log("set firstLevel:" + t3), this.levelController.firstLevel = t3;
          } }, { key: "startLevel", get: function() {
            var t3 = this.levelController.startLevel;
            return -1 === t3 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : t3;
          }, set: function(t3) {
            w.log("set startLevel:" + t3), -1 !== t3 && (t3 = Math.max(t3, this.minAutoLevel)), this.levelController.startLevel = t3;
          } }, { key: "capLevelToPlayerSize", get: function() {
            return this.config.capLevelToPlayerSize;
          }, set: function(t3) {
            var e3 = !!t3;
            e3 !== this.config.capLevelToPlayerSize && (e3 ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e3);
          } }, { key: "autoLevelCapping", get: function() {
            return this._autoLevelCapping;
          }, set: function(t3) {
            this._autoLevelCapping !== t3 && (w.log("set autoLevelCapping:" + t3), this._autoLevelCapping = t3, this.levelController.checkMaxAutoUpdated());
          } }, { key: "bandwidthEstimate", get: function() {
            var t3 = this.abrController.bwEstimator;
            return t3 ? t3.getEstimate() : NaN;
          }, set: function(t3) {
            this.abrController.resetEstimator(t3);
          } }, { key: "ttfbEstimate", get: function() {
            var t3 = this.abrController.bwEstimator;
            return t3 ? t3.getEstimateTTFB() : NaN;
          } }, { key: "maxHdcpLevel", get: function() {
            return this._maxHdcpLevel;
          }, set: function(t3) {
            (function(t4) {
              return ze.indexOf(t4) > -1;
            })(t3) && this._maxHdcpLevel !== t3 && (this._maxHdcpLevel = t3, this.levelController.checkMaxAutoUpdated());
          } }, { key: "autoLevelEnabled", get: function() {
            return -1 === this.levelController.manualLevel;
          } }, { key: "manualLevel", get: function() {
            return this.levelController.manualLevel;
          } }, { key: "minAutoLevel", get: function() {
            var t3 = this.levels, e3 = this.config.minAutoBitrate;
            if (!t3)
              return 0;
            for (var r3 = t3.length, i3 = 0; i3 < r3; i3++)
              if (t3[i3].maxBitrate >= e3)
                return i3;
            return 0;
          } }, { key: "maxAutoLevel", get: function() {
            var t3, e3 = this.levels, r3 = this.autoLevelCapping, i3 = this.maxHdcpLevel;
            if (t3 = -1 === r3 && null != e3 && e3.length ? e3.length - 1 : r3, i3)
              for (var n2 = t3; n2--; ) {
                var a2 = e3[n2].attrs["HDCP-LEVEL"];
                if (a2 && a2 <= i3)
                  return n2;
              }
            return t3;
          } }, { key: "firstAutoLevel", get: function() {
            return this.abrController.firstAutoLevel;
          } }, { key: "nextAutoLevel", get: function() {
            return this.abrController.nextAutoLevel;
          }, set: function(t3) {
            this.abrController.nextAutoLevel = t3;
          } }, { key: "playingDate", get: function() {
            return this.streamController.currentProgramDateTime;
          } }, { key: "mainForwardBufferInfo", get: function() {
            return this.streamController.getMainFwdBufferInfo();
          } }, { key: "allAudioTracks", get: function() {
            var t3 = this.audioTrackController;
            return t3 ? t3.allAudioTracks : [];
          } }, { key: "audioTracks", get: function() {
            var t3 = this.audioTrackController;
            return t3 ? t3.audioTracks : [];
          } }, { key: "audioTrack", get: function() {
            var t3 = this.audioTrackController;
            return t3 ? t3.audioTrack : -1;
          }, set: function(t3) {
            var e3 = this.audioTrackController;
            e3 && (e3.audioTrack = t3);
          } }, { key: "allSubtitleTracks", get: function() {
            var t3 = this.subtitleTrackController;
            return t3 ? t3.allSubtitleTracks : [];
          } }, { key: "subtitleTracks", get: function() {
            var t3 = this.subtitleTrackController;
            return t3 ? t3.subtitleTracks : [];
          } }, { key: "subtitleTrack", get: function() {
            var t3 = this.subtitleTrackController;
            return t3 ? t3.subtitleTrack : -1;
          }, set: function(t3) {
            var e3 = this.subtitleTrackController;
            e3 && (e3.subtitleTrack = t3);
          } }, { key: "media", get: function() {
            return this._media;
          } }, { key: "subtitleDisplay", get: function() {
            var t3 = this.subtitleTrackController;
            return !!t3 && t3.subtitleDisplay;
          }, set: function(t3) {
            var e3 = this.subtitleTrackController;
            e3 && (e3.subtitleDisplay = t3);
          } }, { key: "lowLatencyMode", get: function() {
            return this.config.lowLatencyMode;
          }, set: function(t3) {
            this.config.lowLatencyMode = t3;
          } }, { key: "liveSyncPosition", get: function() {
            return this.latencyController.liveSyncPosition;
          } }, { key: "latency", get: function() {
            return this.latencyController.latency;
          } }, { key: "maxLatency", get: function() {
            return this.latencyController.maxLatency;
          } }, { key: "targetLatency", get: function() {
            return this.latencyController.targetLatency;
          } }, { key: "drift", get: function() {
            return this.latencyController.drift;
          } }, { key: "forceStartLoad", get: function() {
            return this.streamController.forceStartLoad;
          } }], [{ key: "version", get: function() {
            return "1.5.8";
          } }, { key: "Events", get: function() {
            return S;
          } }, { key: "ErrorTypes", get: function() {
            return L;
          } }, { key: "ErrorDetails", get: function() {
            return A;
          } }, { key: "DefaultConfig", get: function() {
            return t2.defaultConfig ? t2.defaultConfig : Js;
          }, set: function(e3) {
            t2.defaultConfig = e3;
          } }]), t2;
        }();
        return oo.defaultConfig = void 0, oo;
      }, "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (r = "undefined" != typeof globalThis ? globalThis : r || self).Hls = i();
    }(false);
  }
});
export default require_hls_min();
//# sourceMappingURL=hls__js_dist_hls__min.js.map
