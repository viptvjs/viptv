import db from "./dexie.js";
const { vod } = db;
export default {
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
    if (keyword) list = list.filter((item) => item.name.includes(keyword));
    const total = list.length;
    return {
      list: list,
      total: total,
    };
  },
};
