import { defineClientConfig } from "vuepress/client";
import SocialLink from "./composables/SocialLink.js";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss"
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss"
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import CustomBlogHome from "./components/BlogHero.vue";

//const HeroBG = defineAsyncComponent(() => import('./components/HeroBG.vue'));


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("SocialLink", SocialLink);
  },
  setup: () => {
    setupTransparentNavbar({ type: "homepage", light: "#333", dark: "#bbb" });
    setupRunningTimeFooter(
      new Date("2022-01-01"),
      {
        "/en/":
          "Running time: :day days :hour hours :minute minutes :second seconds",
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true
    );
  },
  layouts: { CustomBlogHome },
});
