import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: '云视听区',
    icon: 'lightbulb',
    children: ['/iptv/', '/vod/', '/music/'],
  },

  {
    text: "小说壁纸",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
