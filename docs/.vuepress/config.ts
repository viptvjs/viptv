import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "VIPTV - 云视听",
  description: "简单,快捷,高效，打造最佳的视听链",
  plugins: [],
  alias: {
    "db": path.resolve(__dirname, "../../src/db"),

  },
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
