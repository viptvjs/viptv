import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
import metingPlugin from "vuepress-plugin-meting2";
const __dirname = getDirname(import.meta.url);
const base = (process.env["BASE"] as "/" | `/${string}/`) || "/";

export default defineUserConfig({
  base,
  dest: "./dist",
  head: [
    [
      "meta",
      {
        name: "baidu-site-verification",
        content: "codeva-iazwBEuOEA",
      },
    ],
    [
      "meta",
      {
        name: "msvalidate.01",
        content: "60990E7826770BD82AE9B5EFB468E0BB",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
    ["meta", { name: "theme-color", content: "#46bd87" }],

    [
      "link",
      {
        rel: "icon",
        href: `/assets/png/VIPTV-LOGO-600x600.png`,
        type: "image/png",
        sizes: "600x600",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: `/assets/png/VIPTV-LOGO-512x512.png`,
        type: "image/png",
        sizes: "512x512",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: `/assets/png/VIPTV-LOGO-192x192.png`,
        type: "image/png",
        sizes: "192x192",
      },
    ],

  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VIPTV - 工作室",
      description: "便捷 、高效 、最有价值的视听链",
    },
    "/en/": {
      lang: "en-US",
      title: "VIPTV",
      description: " VIPTV Is The Highest Quality IPTV Service",
    },
  },
  alias: {
    "@db": path.resolve(__dirname, "composables/dexie"),
    "@act": path.resolve(__dirname, "composables/artConst.ts"),
    "@theme-hope/components/NormalPage": path.resolve(__dirname, "./components/NormalPage.vue"),
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(__dirname, "./components/BlogHome.vue"),
  },
  theme,
  port: 80,
  plugins: [
    metingPlugin({
      metingOptions: {
        global: false,
        server: "tencent",
        api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
        type: "playlist",
        mid: "851947617",
        aplayerOptions: {
          lrcDisplay: "hide",
        },
      },
    }),
  ],

  shouldPrefetch: false,
});
