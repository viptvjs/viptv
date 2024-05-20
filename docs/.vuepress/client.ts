import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import SocialLink from "./composables/SocialLink.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("SocialLink", SocialLink);
  },
  setup: () => {
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
});
