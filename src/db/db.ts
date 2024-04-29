import Dexie from 'dexie';
import { getTxt } from './init/getAjax.js'
interface DexieDatabase extends Dexie {
  vod: Dexie.Table<number, string, any>;
}
const db = new Dexie('viptv') as DexieDatabase

db.version(1).stores({ vod: '++id, name, data' });
db.on('populate', () => {
  const res = getTxt("https://fastly.jsdelivr.net/gh/maintell/xjj@master/video/ks.dance.txt")
  db.vod.bulkAdd([{
    "id": 0,
    "name": "twxjj",
    "danmuku": "https://raw.viptv.work/data/artdm-1.xml",
    "data": res
  }]);
})
db.open().catch((err) => {
  console.log('err.stack || err: ', err.stack || err);
});

export default db;