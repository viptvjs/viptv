import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": ["",],
  "/vod/": [
    {
      text: "案例分享",
      icon: "lock-open",
      prefix: "open/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "案例分享",
      icon: "lock",
      prefix: "lock/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/tv/": [
    {
      text: "案例分享",
      icon: "fa-solid fa-house-lock",
      children: "structure",
    },
  ]
});
