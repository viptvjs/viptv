import { navbar } from "vuepress-theme-hope";
import { version } from '../../../../package.json'

export const zhNavbar = navbar([
  "/",
  "/iptv/",
  "/vod/",
  "/music/",
  "/tutorial/",
  {
    text: "必应壁纸",
    icon: "images",
    link: "/archives/",
    activeMatch: "^/archives/$",
  },
  {
    text: "关于",
    icon: "circle-info",
    children: [
      {
        text: "我的博客",
        icon: "blog",
        link: "about/blog",
      },
      {
        text: "友情打赏",
        icon: "heart",
        link: "about/donate",
      },
      {
        text: version + "版本",
        icon: "fa-brands fa-vuejs",
        link: "about/changelog",
      },
    ],
  },
]);
