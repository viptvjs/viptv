import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);
const base = (process.env["BASE"] as "/" | `/${string}/`) || "/";
export default defineUserConfig({
  base,
  dest: "./dist",
  lang: "zh-CN",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VIPTV - 云视听",
      description: "简单,快捷,高效，打造最佳的视听链",
    },
    "/en/": {
      lang: "en-US",
      title: "viptv - play",
      description: "best iptv play",
    },
  },
  alias: {
    "db": path.resolve(__dirname, "./lib/dexie"),
    "cpn": path.resolve(__dirname, "./components"),
    "cps": path.resolve(__dirname, "./composables"),
    //"@theme-hope/components/HeroInfo": path.resolve(__dirname, "./components/HopeHero.js",),
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(__dirname, "./components/BlogHero.vue"),
  },
  theme,
  shouldPrefetch: false,
  clientConfigFile: path.resolve(__dirname, "./client.ts"),
});
