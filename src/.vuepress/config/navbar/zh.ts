import { navbar } from "vuepress-theme-hope";
import { version } from '../../../../package.json'

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
    link: "/blog/",
    activeMatch: "^/archives/$",
  },
  {
    text: version,
    icon: "book",
    children: [
      {
        text: "更新日志",
        link: "blog/auto-push",
      },
      {
        text: "友情打赏",
        link: "about/support",
      },
    ],
  },
]);
