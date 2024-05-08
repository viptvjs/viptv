import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",
  dest: "./dist",
  clientConfigFile: path.resolve(__dirname, "./client.ts"),
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VIPTV - 云视听",
      description: "简捷 、高效 、最有价值的视听链",
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
    "cps": path.resolve(__dirname, "./composables")
  },
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ['@fancyapps/ui'],
      },
      build: {
        chunkSizeWarningLimit: 1500,
      },
    },
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === "ms-store-badge",
        },
      },
    },
  }),
  theme,
  shouldPrefetch: false,
});
