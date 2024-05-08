import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  '/',
  {
    text: '云视听区',
    icon: 'lightbulb',
    prefix: "/",
    children: ['/iptv/', '/vod/', '/music/'],
  },

  {
    text: "小说壁纸",
    prefix: "/",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);