import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { onMounted } from 'vue'

import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/round-blogger-avatar.scss"
//import "vuepress-theme-hope/presets/left-blog-info.scss"
import "vuepress-theme-hope/presets/bounce-icon.scss"


export default defineClientConfig({
  setup() {
    onMounted(() => {
      // 在 mounted 之后使用 DOM API
      document.querySelector('#app')
    })
    setupRunningTimeFooter(
      new Date("2022-01-01"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true
    );
  },
});