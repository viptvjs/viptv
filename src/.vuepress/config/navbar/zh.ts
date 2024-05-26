import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/iptv/",
  "/vod/",
  {
    text: "必应壁纸",
    icon: "images",
    link: "/archives/",
    activeMatch: "^/archives/$",
  },
  {
    text: "博客",
    icon: "blog",
    link: "/blog"
  },
]);
