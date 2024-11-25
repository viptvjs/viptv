import Dexie, { type EntityTable } from "dexie";

interface type {
  id?: number;
  name: string;
  data: any;
}

import { getTxt, getTxtt, getJson, getJsonx, raw, xgsp } from "./init/getAjax";
import { vodId, vodIdx, tvId, movieId, xgspId, movieIdx } from "./init/api";

const db = new Dexie("viptv") as Dexie & {
  vod: EntityTable<type, "id">;
  iptv: EntityTable<type, "id">;
};

db.version(1).stores({
  vod: "++id, name, data",
  iptv: "++id, name, data",
});

db.on("populate", () => {
  vodId.map(async (res) => {
    const data = (await getTxt(raw + "/movie/" + res + ".txt")).slice(0, 100);
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
    const data = (await getTxtt(raw + "/movie/" + res + ".txt")).slice(0, 100);
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
    const data = await getJson(raw + "/movie/" + res + ".json");
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
    const data = await getJsonx(raw + "/movie/" + res + ".json");
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
    const data = await getTxtt(raw + "/txt/" + res + ".txt");
    db.iptv.bulkAdd([
      {
        name: res,
        data: data,
      },
    ]);
  });
});

db.on("populate", () => {
  xgspId.map(async (res) => {
    const data = await xgsp(raw + "/movie/" + res + ".json");
    db.iptv.bulkAdd([
      {
        name: res,
        data: data,
      },
    ]);
  });
});

db.open();

export default db;
