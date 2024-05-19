import Dexie from "dexie";

import { getTxt, getTxtt, getJson, getJsonx, gethema } from "./getAjax.js";
import {
  vodId,
  vodIdx,
  tvId,
  movieId,
  movieIdx,
  dataPath,
  txtPath,
} from "./api.js";

const db = new Dexie("viptv");

db.version(1).stores({
  vod: "++id, name, data",
  iptv: "++id, name, data",
});

db.on("populate", () => {
  vodId.map(async (res) => {
    const data = (await getTxt(dataPath + res + ".txt")).slice(0, 100);
    db.vod.bulkAdd([
      {
        name: res,
        data: data, //加密太大了，存不了Enc(JSON.stringify(data))
      },
    ]);
  });
});
db.on("populate", () => {
  vodIdx.map(async (res) => {
    const data = (await getTxtt(dataPath + res + ".txt")).slice(0, 100);
    db.vod.bulkAdd([
      {
        name: res,
        data: data,
      },
    ]);
  });
});

db.on("populate", () => {
  movieId.map(async (res) => {
    const data = await getJson(dataPath + res + ".json");
    db.vod.bulkAdd([
      {
        name: res,
        data: data,
      },
    ]);
  });
});

db.on("populate", () => {
  movieIdx.map(async (res) => {
    const data = await getJsonx(dataPath + res + ".json");
    db.vod.bulkAdd([
      {
        name: res,
        data: data,
      },
    ]);
  });
});

db.on("populate", () => {
  tvId.map(async (res) => {
    const data = await getTxtt(txtPath + res + ".txt");
    db.iptv.bulkAdd([
      {
        name: res,
        data: data,
      },
    ]);
  });
});

db.on("populate", async () => {
  const data = await gethema();
  db.iptv.bulkAdd([
    {
      name: "hema",
      data: data,
    },
  ]);
});

db.open();

export default db;
