import { defineClientConfig } from "vuepress/client";
import SocialLink from "./composables/SocialLink";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import CustomBlogHome from "./layouts/BlogHero.vue";

//const HeroBG = defineAsyncComponent(() => import('./components/HeroBG.vue'));

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("SocialLink", SocialLink);
  },
  setup: () => {
    setupRunningTimeFooter(
      new Date("2022-01-01"),
      {
        "/en/": "Running time: :day days :hour hours :minute minutes :second seconds",
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      false,
    );
    setupTransparentNavbar({ type: "blog-homepage", light: "#333", dark: "#bbb" });
  },
  layouts: {
    CustomBlogHome,
  },
});
