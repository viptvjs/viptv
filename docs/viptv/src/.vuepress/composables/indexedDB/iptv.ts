import type { IndexableType } from "dexie";
import db from "./index";
const { iptv } = db;  


export default {
  async all() {
    return await iptv.toArray();
  },
  async clear() {
    return await iptv.clear();
  },
  async add(doc: Iptv) {
    return await iptv.add(doc);
  },
  async bulkAdd(doc: readonly Iptv[]) {
    return await iptv.bulkAdd(doc);
  },
  async find(doc: number) {
    return await iptv.get(doc);
  },
  async get(id: number) {
    return await iptv.get(id);
  },
  async update(docs: number | Iptv, id: (obj: Iptv, ctx: { value: any; primKey: IndexableType; }) => void | boolean) {
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
