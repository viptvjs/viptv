import { sidebar } from "vuepress-theme-hope";
import archives from "./archives.js";
export const zhSidebar = sidebar({
  "/vod/": "structure",
  "/iptv/": "structure",
  "/music/": "structure",
  "/archives/": archives,
  "/tutorial/": "structure",
  "/posts/": "structure",
  "/about/": "structure",
});
