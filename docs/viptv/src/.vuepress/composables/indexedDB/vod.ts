import type { IndexableType } from "dexie";
import db from "./index";
const { vod } = db;
export default {
  async all() {
    return await vod.toArray();
  },
  async clear() {
    return await vod.clear();
  },
  async add(doc: Vod) {
    return await vod.add(doc);
  },
  async bulkAdd(doc: readonly Vod[]) {
    return await vod.bulkAdd(doc);
  },
  async find(doc: number) {
    return await vod.get(doc);
  },
  async get(id: number) {
    return await vod.get(id);
  },
  async update(id: number | Vod, docs: (obj: Vod, ctx: { value: any; primKey: IndexableType; }) => void | boolean) {
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
