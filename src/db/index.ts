import Dexie from 'dexie';
import { getTxt, getTxtt } from './init/getAjax.js'
interface DexieDatabase extends Dexie {
  vod: Dexie.Table<number, string, any>;
}
import { Enc } from './crypt'
const db = new Dexie('viptv') as DexieDatabase
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
]
const urly = [
  {
    "id": 201,
    "name": "ksgcw",
    "url": "https://fastly.jsdelivr.net/gh/vodtv/iptv-sources@gh-pages/txt/vod_gcw.txt"
  }
]

db.version(1).stores({ vod: '++id, name, data' });
db.on('populate', () => {
  urlx.map(async (res) => {
    const data = await getTxt(res.url)
    db.vod.bulkAdd([{
      "id": res.id,
      "name": res.name,
      "data": data  //加密太大了，存不了Enc(JSON.stringify(data))
    }]);
  })
})
db.on('populate', () => {
  urly.map(async (res) => {
    const data = await getTxtt(res.url)
    db.vod.bulkAdd([{
      "id": res.id,
      "name": res.name,
      "data": data
    }]);
  })
})
db.open()
export default db;