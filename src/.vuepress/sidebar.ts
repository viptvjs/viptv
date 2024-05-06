import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": ["",],
  "/vod/": [
    {
      text: "电影",
      icon: "lock-open",
      prefix: "movie/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "剧集",
      icon: "lock-open",
      prefix: "tvb/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "动漫",
      icon: "lock-open",
      prefix: "dongman/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "综艺",
      icon: "lock-open",
      prefix: "zongyi/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "体育",
      icon: "lock-open",
      prefix: "sport/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "短剧",
      icon: "lock-open",
      prefix: "duanju/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "视频",
      icon: "lock-open",
      prefix: "video/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "伦理",
      icon: "lock",
      prefix: "lunli/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/iptv/": [
    {
      text: "网络电视",
      collapsible: true,
      icon: "tv",
      children: "structure",
    },
  ]
});
