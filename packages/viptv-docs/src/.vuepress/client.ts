import { defineClientConfig } from "vuepress/client";
import SocialLink from "./composables/SocialLink";
import ProjectLink from "./composables/ProjectLink";
import Experiences from "./components/Experiences.vue";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";




export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("SocialLink", SocialLink);
    app.component("ProjectLink", ProjectLink);
    app.component("Experiences", Experiences);
  },
  setup: () => {
    setupRunningTimeFooter(
      new Date("2022-01-01"),
      {
        "/en/":
          "Running time: :day days :hour hours :minute minutes :second seconds",
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
    setupTransparentNavbar();
  }
});
