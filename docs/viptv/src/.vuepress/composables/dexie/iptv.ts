import db from "./dexie";
const { iptv } = db;
export default {
  async all() {
    return await iptv.toArray();
  },
  async clear() {
    return await iptv.clear();
  },
  async add(doc) {
    return await iptv.add(doc);
  },
  async bulkAdd(doc: any) {
    return await iptv.bulkAdd(doc);
  },
  async find(doc: any) {
    return await iptv.get(doc);
  },
  async get(id: any) {
    return await iptv.get(id);
  },
  async update(docs: any, id: any) {
    return await iptv.update(docs, id);
  },
  async remove(id: number) {
    return await iptv.delete(id);
  },
  async pagination(keyword: string) {
    let list = await iptv.toArray();
    if (keyword) list = list.filter((item) => item.name.includes(keyword));
    const total = list.length;
    return {
      list: list,
      total: total,
    };
  },
};
