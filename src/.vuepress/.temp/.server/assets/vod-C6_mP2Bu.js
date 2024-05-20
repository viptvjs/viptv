import { d as db } from "./dexie-CPFAlEcK.js";
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
