import { sidebar } from "vuepress-theme-hope";
import archives from "./archives.js";
export const zhSidebar = sidebar({
  "/about/": "structure",
  "/vod/": "structure",
  "/iptv/": "structure",
  "/music/": "structure",
  "/tutorial/": "structure",
  "/private/": "structure",
  "/archives/": archives,
});
