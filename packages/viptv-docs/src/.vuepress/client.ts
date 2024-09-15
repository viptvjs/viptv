import { defineClientConfig } from "vuepress/client";
import SocialLink from "./composables/SocialLink";
import ProjectLink from "./composables/ProjectLink";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("SocialLink", SocialLink);
    app.component("ProjectLink", ProjectLink);
  },
  setup: () => {
    setupRunningTimeFooter(
      new Date("2022-01-01"),
      {
        "/en/":
          "Running time: :day days :hour hours :minute minutes :second seconds",
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      false
    );
  }
});
