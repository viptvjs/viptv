import { navbar } from "vuepress-theme-hope";
import { version } from '../../../../package.json'

export const zhNavbar = navbar([
  "/",
  "/iptv/",
  "/vod/",
  "/music/",
  "/tutorial/",
  "/tools/",
  {
    text: "必应壁纸",
    icon: "images",
    link: "/archives/",
  },
  {
    text: "关于",
    icon: "circle-info",
    prefix: "/about/",
    children: [
      {
        text: "关于我们",
        icon: "circle-info",
        link: "",
        activeMatch: "^/about/$",
      },
      {
        text: "我的博客",
        icon: "blog",
        link: "blog",
      },
      {
        text: "友情打赏",
        icon: "heart",
        link: "donate",
      },
      {
        text: version + "日志",
        icon: "fa-brands fa-vuejs",
        link: "changelog",
      },
    ],
  },
]);

