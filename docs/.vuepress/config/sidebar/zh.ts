import { sidebar } from "vuepress-theme-hope";
import archives from "./archives.js";
export const zhSidebar = sidebar({
  "/posts/": "structure",
  "/tutorial/": "structure",
  "/vod/": "structure",
  "/iptv/": "structure",
  "/music/": "structure",
  "/archives/": archives,
});
