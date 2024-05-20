import hlsjs from "hls.js/dist/hls.min.js";
import Dexie from "dexie";
const artplayerPlaylist = (options) => (art) => {
  const addedI18n = {
    "zh-cn": {
      playlist: "播放列表"
    },
    en: {
      playlist: "Playlist"
    }
  };
  art.i18n.update(addedI18n);
  const changeVideo = (art2, index) => {
    if (!options.playlist[index]) {
      return;
    }
    const artOptions = art2.option;
    let newArtplayer = art2;
    if (options.rebuildPlayer) {
      art2.destroy();
      newArtplayer = new Artplayer({
        ...artOptions,
        ...options.playlist[index],
        autoplay: options.autoNext ?? artOptions.autoplay,
        i18n: addedI18n,
        id: `${artOptions.id}-${index === 0 ? "" : index}`
      });
    } else {
      art2.switchUrl(options.playlist[index].url, options.playlist[index].title);
      if (options.autoNext ?? artOptions.autoplay) {
        art2.play();
      }
    }
    if (typeof options.onchanged === "function") {
      options.onchanged(newArtplayer);
    }
  };
  const currentEp = options.playlist.findIndex((videoInfo) => videoInfo.url === art.option.url);
  if (options.autoNext && currentEp < options.playlist.length) {
    art.on("video:ended", () => {
      changeVideo(art, currentEp + 1);
    });
  }
  const icon = '<i class="art-icon"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M810.666667 384H85.333333v85.333333h725.333334V384z m0-170.666667H85.333333v85.333334h725.333334v-85.333334zM85.333333 640h554.666667v-85.333333H85.333333v85.333333z m640-85.333333v256l213.333334-128-213.333334-128z" fill="#ffffff"></path></svg></i>';
  art.controls.add({
    name: "playlist",
    position: "right",
    html: options.showText ? art.i18n.get("playlist") : icon,
    style: { padding: "0 10px" },
    selector: options.playlist.map((videoInfo, index) => ({
      html: `${index + 1}. ${videoInfo.title || `Ep.${index + 1}`}`,
      style: { textAlign: "left" },
      index,
      default: currentEp === index
    })),
    onSelect(item) {
      changeVideo(art, item.index);
      return options.showText ? art.i18n.get("playlist") : icon;
    }
  });
  return {
    name: "artplayerPlaylist"
  };
};
if (typeof window !== "undefined") {
  window.artplayerPlaylist = artplayerPlaylist;
}
const poster = "https://img.viptv.work/iptv/ads.png";
const Hls = (video, url, art) => {
  if (hlsjs.isSupported()) {
    if (art.hls)
      art.hls.destroy();
    let hls = new hlsjs();
    hls.loadSource(url);
    hls.attachMedia(video);
    art.hls = hls;
    art.on("destroy", () => hls.destroy());
  } else if (video.canPlayType("application/x-mpegURL") || video.canPlayType("application/vnd.apple.mpegURL")) {
    video.src = url;
  } else {
    art.notice.show = "Unsupported playback format: m3u8";
  }
};
const getTxt = async (url) => {
  const res = await (await fetch(url)).text();
  let raw = res.split("\n").filter((item, key, arr) => !key == false);
  const data = raw.map((red, k) => {
    let n = k + 1;
    return {
      "title": "第" + n + "视频",
      "url": red
    };
  });
  return data;
};
const getTxtt = async (url) => {
  const res = await (await fetch(url)).text();
  let raw = res.split("\n").filter((item, key, arr) => !key == false);
  const data = raw.map((red, k) => {
    return {
      "title": red.split(",")[0],
      "url": red.split(",")[1]
    };
  });
  return data;
};
const getJson = async (url) => {
  const res = await (await fetch(url)).json();
  return res.list.map((red) => {
    return {
      "title": red.vod_name,
      "vod_pic": red.vod_pic,
      "url": red.vod_play_url.split("$")[1]
    };
  });
};
const getJsonx = async (url) => {
  const res = await (await fetch(url)).json();
  return res.list.map((red) => {
    return {
      "vod_name": red.vod_name,
      "vod_pic": red.vod_pic,
      "play_list": red.vod_play_url.split("#").map((req) => {
        return {
          title: req.split("$")[0],
          url: req.split("$")[1]
        };
      })
    };
  });
};
const vodId = ["ks-dance", "ks-meitui", "ks", "ks-xjj", "ks-meinv", "tiktok"];
const vodIdx = ["vod-gcw", "vod-djw"];
const tvId = ["ss_itv", "fmml_dv6"];
const movieId = ["5151md-mdsp", "ylzy-fzsj", "ylzy-lanqiu", "ylzy-swdj", "ylzy-zuqiu", "ylzy-gzxx", "ylzy-dongzuo", "ylzy-ndcy", "lzcaiji-dzp", "lzcaiji-xjp", "lzcaiji-aqp", "lzcaiji-kbp", "lzcaiji-khp", "lzcaiji-jqp", "lzcaiji-zzp", "suonizy-gtsj", "suonizy-hgll", "suonizy-lanqiu", "suonizy-rbll", "suonizy-swdj", "suonizy-xfll", "suonizy-zuqiu", "bfzy-dzp", "bfzy-xjp", "bfzy-kbp", "bfzy-khp", "bfzy-aqp", "bfzy-jqp", "bfzy-zzp", "bfzy-zuqiu", "bfzy-lanqiu", "bfzy-snk"];
const movieIdx = ["lzcaiji-duanju", "lzcaiji-gcj", "lzcaiji-hkj", "lzcaiji-hgj", "lzcaiji-omj", "lzcaiji-hwj", "lzcaiji-dlzy", "lzcaiji-gtzy", "lzcaiji-rhzy", "lzcaiji-omzy", "lzcaiji-gcdm", "lzcaiji-rhdm", "lzcaiji-omdm", "lzcaiji-gtdm", "lzcaiji-hwdm", "lzcaiji-llp", "moduapi-gcdm", "ylzy-guochanju", "suonizy-gcdm", "suonizy-dlzy", "suonizy-gtzy", "suonizy-gzxx", "suonizy-ndxy", "suonizy-ndla", "suonizy-xdds", "suonizy-rhdm", "bfzy-gcju", "bfzy-omju", "bfzy-hkju", "bfzy-hgju", "bfzy-twju", "bfzy-rbju", "bfzy-hwju", "bfzy-tgju", "bfzy-gcdm", "bfzy-rhdm", "bfzy-omdm", "bfzy-gtdm", "bfzy-hwdm", "bfzy-dlzy", "bfzy-gtzy", "bfzy-rhzy", "bfzy-omzy", "bfzy-dsnd", "bfzy-gzxx"];
const dataPath = "https://raw.viptv.work/data/";
const txtPath = "https://raw.viptv.work/txt/";
const db = new Dexie("viptv");
db.version(1).stores({
  vod: "++id, name, data",
  iptv: "++id, name, data"
});
db.on("populate", () => {
  vodId.map(async (res) => {
    const data = (await getTxt(dataPath + res + ".txt")).slice(0, 100);
    db.vod.bulkAdd([{
      "name": res,
      "data": data
      //加密太大了，存不了Enc(JSON.stringify(data))
    }]);
  });
});
db.on("populate", () => {
  vodIdx.map(async (res) => {
    const data = (await getTxtt(dataPath + res + ".txt")).slice(0, 100);
    db.vod.bulkAdd([{
      "name": res,
      "data": data
    }]);
  });
});
db.on("populate", () => {
  movieId.map(async (res) => {
    const data = await getJson(dataPath + res + ".json");
    db.vod.bulkAdd([{
      "name": res,
      "data": data
    }]);
  });
});
db.on("populate", () => {
  movieIdx.map(async (res) => {
    const data = await getJsonx(dataPath + res + ".json");
    db.vod.bulkAdd([{
      "name": res,
      "data": data
    }]);
  });
});
db.on("populate", () => {
  tvId.map(async (res) => {
    const data = await getTxtt(txtPath + res + ".txt");
    db.iptv.bulkAdd([{
      "name": res,
      "data": data
    }]);
  });
});
db.open();
export {
  Hls as H,
  artplayerPlaylist as a,
  db as d,
  poster as p
};
