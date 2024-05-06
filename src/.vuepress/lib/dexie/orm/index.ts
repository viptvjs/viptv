import Dexie from 'dexie';
import { getTxt, getTxtt, getJson, getJsonx } from '../init/getAjax.js'

interface Vod {
  id?: number;
  name: string;
  data: any;
}

interface Iptv {
  id?: number;
  name: string;
  data: any;
}

interface DexieDatabase extends Dexie {
  vod: Dexie.Table<Vod, number>;
  iptv: Dexie.Table<Iptv, number>;
}

const db = new Dexie('viptv') as DexieDatabase

db.version(1).stores({
  vod: '++id, name, data',
  iptv: '++id, name, data',
})

const txtUrl = [
  {
    "name": "ks-dance",
  },
  {
    "name": "ks-meitui",
  },
  {

    "name": "ks",

  },
  {
    "name": "ks-xjj",
  },
  {

    "name": "ks-meinv",
  },
  {

    "name": "tiktok",
  }
]
const txtUrlx = [
  {
    "name": "vod-gcw",
  },
  {
    "name": "vod-djw",
  }
]
const txtUrly = [
  {
    "name": "ysp",
  },
  {
    "name": "xiongmao",
  }
]
const jsonUrl = [
  {
    "name": "5151md-mdsp",
  },
  {
    "name": "ylzy-fzsj",
  },
  {
    "name": "ylzy-lanqiu",
  },
  {
    "name": "ylzy-swdj",
  },
  {
    "name": "ylzy-zuqiu",
  },
  {
    "name": "ylzy-gzxx",
  },
  {
    "name": "ylzy-dongzuo",
  },
  {
    "name": "ylzy-ndcy",
  },
  {
    "name": "lzcaiji-dzp",
  },
  {
    "name": "lzcaiji-xjp",
  },
  {
    "name": "lzcaiji-aqp",
  },
  {
    "name": "lzcaiji-kbp",
  },
  {
    "name": "lzcaiji-jqp",
  },
  {
    "name": "lzcaiji-zzp",
  },
  {
    "name": "suonizy-gtsj",
  },
  {
    "name": "suonizy-hgll",
  },
  {
    "name": "suonizy-lanqiu",
  },
  {
    "name": "suonizy-rbll",
  },
  {
    "name": "suonizy-swdj",
  },
  {
    "name": "suonizy-xfll",
  },
  {
    "name": "suonizy-zuqiu",
  },
  {
    "name": "bfzy-dzp",
  },
  {
    "name": "bfzy-xjp",
  },
  {
    "name": "bfzy-kbp",
  },
  {
    "name": "bfzy-khp",
  },
  {
    "name": "bfzy-aqp",
  },
  {
    "name": "bfzy-jqp",
  },
  {
    "name": "bfzy-zzp",
  },
  {
    "name": "bfzy-zuqiu",
  },
  {
    "name": "bfzy-lanqiu",
  },
  {
    "name": "bfzy-snk",
  },
]
const jsonUrlx = [
  {
    "name": "lzcaiji-duanju",
  },
  {
    "name": "lzcaiji-gcj",
  },
  {
    "name": "lzcaiji-hkj",
  },
  {
    "name": "lzcaiji-hgj",
  },
  {
    "name": "lzcaiji-omj",
  },
  {
    "name": "lzcaiji-hwj",
  },
  {
    "name": "lzcaiji-dlzy",
  },
  {
    "name": "lzcaiji-gtzy",
  },
  {
    "name": "lzcaiji-rhzy",
  },
  {
    "name": "lzcaiji-omzy",
  },
  {
    "name": "lzcaiji-gcdm",
  },
  {
    "name": "lzcaiji-rhdm",
  },
  {
    "name": "lzcaiji-omdm",
  },
  {
    "name": "lzcaiji-gtdm",
  },
  {
    "name": "lzcaiji-hwdm",
  },
  {
    "name": "lzcaiji-llp",
  },
  {
    "name": "moduapi-gcdm",
  },
  {
    "name": "ylzy-guochanju",
  },
  {
    "name": "suonizy-gcdm",
  },
  {
    "name": "suonizy-dlzy",
  },
  {
    "name": "suonizy-gtzy",
  },
  {
    "name": "suonizy-gzxx",
  },
  {
    "name": "suonizy-ndxy",
  },
  {
    "name": "suonizy-ndla",
  },
  {
    "name": "suonizy-xdds",
  },
  {
    "name": "suonizy-rhdm",
  },
  {
    "name": "bfzy-gcju",
  },
  {
    "name": "bfzy-omju",
  },
  {
    "name": "bfzy-hkju",
  },
  {
    "name": "bfzy-hgju",
  },
  {
    "name": "bfzy-twju",
  },
  {
    "name": "bfzy-rbju",
  },
  {
    "name": "bfzy-hwju",
  },
  {
    "name": "bfzy-tgju",
  },
  {
    "name": "bfzy-gcdm",
  },
  {
    "name": "bfzy-rhdm",
  },
  {
    "name": "bfzy-omdm",
  },
  {
    "name": "bfzy-gtdm",
  },
  {
    "name": "bfzy-hwdm",
  },
  {
    "name": "bfzy-dlzy",
  },
  {
    "name": "bfzy-gtzy",
  },
  {
    "name": "bfzy-rhzy",
  },
  {
    "name": "bfzy-omzy",
  },
  {
    "name": "bfzy-dsnd",
  },
  {
    "name": "bfzy-gzxx",
  },
]
const api = "https://raw.viptv.work/data/"
const apitxt = "https://raw.viptv.work/txt/"


db.on('populate', () => {
  txtUrl.map(async (res) => {
    const data = (await getTxt(api + res.name + ".txt")).slice(0, 999)
    db.vod.bulkAdd([{
      "name": res.name,
      "data": data  //加密太大了，存不了Enc(JSON.stringify(data))
    }]);
  })
})
db.on('populate', () => {
  txtUrlx.map(async (res) => {
    const data = (await getTxtt(api + res.name + ".txt")).slice(0, 999)
    db.vod.bulkAdd([{
      "name": res.name,
      "data": data
    }]);
  })
})

db.on('populate', () => {
  jsonUrl.map(async (res) => {
    const data = await getJson(api + res.name + ".json")
    db.vod.bulkAdd([{
      "name": res.name,
      "data": data
    }]);
  })
})

db.on('populate', () => {
  jsonUrlx.map(async (res) => {
    const data = await getJsonx(api + res.name + ".json")
    db.vod.bulkAdd([{
      "name": res.name,
      "data": data
    }]);
  })
})


db.on('populate', () => {
  txtUrly.map(async (res) => {
    const data = await getTxtt(apitxt + res.name + ".txt")
    db.iptv.bulkAdd([{
      "name": res.name,
      "data": data
    }]);
  })
})

db.open()

export default db;