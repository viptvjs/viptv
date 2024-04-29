import {
  __commonJS
} from "./chunk-LQ2VYIYD.js";

// node_modules/.pnpm/artplayer-playlist@1.0.3/node_modules/artplayer-playlist/dist/artplayer-plugin-playlist.js
var require_artplayer_plugin_playlist = __commonJS({
  "node_modules/.pnpm/artplayer-playlist@1.0.3/node_modules/artplayer-playlist/dist/artplayer-plugin-playlist.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.artplayerPlaylist = void 0;
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
          _defineProperty(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
      }
      return e;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var artplayerPlaylist = exports.artplayerPlaylist = function artplayerPlaylist2(options) {
      return function(art) {
        var addedI18n = {
          "zh-cn": {
            playlist: "播放列表"
          },
          en: {
            playlist: "Playlist"
          }
        };
        art.i18n.update(addedI18n);
        var changeVideo = function changeVideo2(art2, index) {
          if (!options.playlist[index]) {
            return;
          }
          var artOptions = art2.option;
          var newArtplayer = art2;
          if (options.rebuildPlayer) {
            var _options$autoNext;
            art2.destroy();
            newArtplayer = new Artplayer(_objectSpread(_objectSpread(_objectSpread({}, artOptions), options.playlist[index]), {}, {
              autoplay: (_options$autoNext = options.autoNext) !== null && _options$autoNext !== void 0 ? _options$autoNext : artOptions.autoplay,
              i18n: addedI18n,
              id: "".concat(artOptions.id, "-").concat(index === 0 ? "" : index)
            }));
          } else {
            var _options$autoNext2;
            art2.switchUrl(options.playlist[index].url, options.playlist[index].title);
            if ((_options$autoNext2 = options.autoNext) !== null && _options$autoNext2 !== void 0 ? _options$autoNext2 : artOptions.autoplay) {
              art2.play();
            }
          }
          if (typeof options.onchanged === "function") {
            options.onchanged(newArtplayer);
          }
        };
        var currentEp = options.playlist.findIndex(function(videoInfo) {
          return videoInfo.url === art.option.url;
        });
        if (options.autoNext && currentEp < options.playlist.length) {
          art.on("video:ended", function() {
            changeVideo(art, currentEp + 1);
          });
        }
        var icon = '<i class="art-icon"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M810.666667 384H85.333333v85.333333h725.333334V384z m0-170.666667H85.333333v85.333334h725.333334v-85.333334zM85.333333 640h554.666667v-85.333333H85.333333v85.333333z m640-85.333333v256l213.333334-128-213.333334-128z" fill="#ffffff"></path></svg></i>';
        art.controls.add({
          name: "playlist",
          position: "right",
          html: options.showText ? art.i18n.get("playlist") : icon,
          style: {
            padding: "0 10px"
          },
          selector: options.playlist.map(function(videoInfo, index) {
            return {
              html: "".concat(index + 1, ". ").concat(videoInfo.title || "Ep.".concat(index + 1)),
              style: {
                textAlign: "left"
              },
              index,
              "default": currentEp === index
            };
          }),
          onSelect: function onSelect(item) {
            changeVideo(art, item.index);
            return options.showText ? art.i18n.get("playlist") : icon;
          }
        });
        return {
          name: "artplayerPlaylist"
        };
      };
    };
    if (typeof window !== "undefined") {
      window.artplayerPlaylist = artplayerPlaylist;
    }
  }
});
export default require_artplayer_plugin_playlist();
//# sourceMappingURL=artplayer-playlist.js.map
