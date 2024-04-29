import Dexie from "dexie";
const getTxt = async (url) => {
  const res = await (await fetch(url)).text();
  let raw = res.split("\n").filter((item, key, arr) => !key == 0);
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
  let raw = res.split("\n").filter((item, key, arr) => !key == 0);
  const data = raw.map((red, k) => {
    return {
      "title": red.split(",")[0],
      "url": red.split(",")[1]
    };
  });
  return data;
};
const db = new Dexie("viptv");
const urlx = [
  {
    "id": 101,
    "name": "twxjj",
    "url": "https://fastly.jsdelivr.net/gh/maintell/xjj@master/video/ks.dance.txt"
  },
  {
    "id": 102,
    "name": "mtxjj",
    "url": "https://fastly.jsdelivr.net/gh/maintell/xjj@master/video/ks.meitui.txt"
  },
  {
    "id": 103,
    "name": "ksxjj",
    "url": "https://fastly.jsdelivr.net/gh/maintell/xjj@master/video/ks.txt"
  }
];
const urly = [
  {
    "id": 201,
    "name": "ksgcw",
    "url": "https://fastly.jsdelivr.net/gh/vodtv/iptv-sources@gh-pages/txt/vod_gcw.txt"
  }
];
db.version(1).stores({ vod: "++id, name, data" });
db.on("populate", () => {
  urlx.map(async (res) => {
    const data = await getTxt(res.url);
    db.vod.bulkAdd([{
      "id": res.id,
      "name": res.name,
      "data": data
      //加密太大了，存不了Enc(JSON.stringify(data))
    }]);
  });
});
db.on("populate", () => {
  urly.map(async (res) => {
    const data = await getTxtt(res.url);
    db.vod.bulkAdd([{
      "id": res.id,
      "name": res.name,
      "data": data
    }]);
  });
});
db.open();
const { vod } = db;
const vod$1 = {
  async all() {
    return await vod.toArray();
  },
  async clear() {
    return await vod.clear();
  },
  async add(doc) {
    return await vod.add(doc);
  },
  async bulkAdd(doc) {
    return await vod.bulkAdd(doc);
  },
  async find(doc) {
    return await vod.get(doc);
  },
  async get(id) {
    return await vod.get(id);
  },
  async update(id, docs) {
    return await vod.update(id, docs);
  },
  async remove(id) {
    return await vod.delete(id);
  },
  async pagination(keyword) {
    let list = await vod.toArray();
    if (keyword)
      list = list.filter((item) => item.name.includes(keyword));
    const total = list.length;
    return {
      list,
      total
    };
  }
};
export {
  vod$1 as v
};
