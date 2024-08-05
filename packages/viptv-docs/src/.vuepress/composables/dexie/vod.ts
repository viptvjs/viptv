import db from "./dexie";
const { vod } = db;
export default {
  async all() {
    return await vod.toArray();
  },
  async clear() {
    return await vod.clear();
  },
  async add(doc: any) {
    return await vod.add(doc);
  },
  async bulkAdd(doc: any) {
    return await vod.bulkAdd(doc);
  },
  async find(doc: any) {
    return await vod.get(doc);
  },
  async get(id: number) {
    return await vod.get(id);
  },
  async update(id: number, docs: any) {
    return await vod.update(id, docs);
  },
  async remove(id: number) {
    return await vod.delete(id);
  },
  async pagination(keyword: string) {
    let list = await vod.toArray();
    if (keyword) list = list.filter((item) => item.name.includes(keyword));
    const total = list.length;
    return {
      list: list,
      total: total,
    };
  },
};
