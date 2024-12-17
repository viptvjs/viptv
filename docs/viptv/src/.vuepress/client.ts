import { defineClientConfig } from "vuepress/client";
import { defineAsyncComponent, onMounted } from 'vue';
import SocialLink from "./composables/SocialLink";
import ProjectLink from "./composables/ProjectLink";
import Experiences from "./components/Experiences.vue";
import BlogHome from "./components/BlogHome.vue";
import { db } from './composables/db';
import NormalPage from "./components/NormalPage.vue";
// import BlogBg from "./components/BlogBg.vue";
// import Hitokoto from "./components/Hitokoto.vue";

import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));
export default defineClientConfig({
  // 你可以在这里覆盖或新增布局
  layouts: {
    BlogHome,
    NormalPage
  },
  enhance: ({ app }) => {
    app.component("SocialLink", SocialLink);
    app.component("ProjectLink", ProjectLink);
    app.component("Experiences", Experiences);
  },
  setup: () => {
    setupRunningTimeFooter(
      new Date("2022-01-01"),
      {
        "/en/": "Running time: :day days :hour hours :minute minutes :second seconds",
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
    setupTransparentNavbar();
    onMounted(() => {
      db
    });
  },
  rootComponents: [
    NavMusic,    
  ],
});
