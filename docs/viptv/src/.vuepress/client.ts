import { defineClientConfig } from "vuepress/client";
import { defineAsyncComponent, onMounted } from 'vue';
import SocialLink from "./composables/SocialLink";
import ProjectLink from "./composables/ProjectLink";
import Experiences from "./components/Experiences.vue";
import BlogHome from "./components/BlogHome.vue";
// import BlogBg from "./components/BlogBg.vue";
// import Hitokoto from "./components/Hitokoto.vue";

import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));
export default defineClientConfig({
  // 你可以在这里覆盖或新增布局
  layouts: {
    BlogHome,

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
      console.log(
        `%c ✨HeFung的博客 ✨ %c ✨HeFung's Blog✨ %c\n
               你，对，你，就是你\n
                  🍻- ( ゜- ゜)つロ 乾杯~🍻\n
                          ---- 最是春风留不住，徒留我孤直。\n
                                  欲寄彩笺兼尺素，山长水阔知何处？\n`,
        `background: #eb507e; padding:5px; font-size:12px; color: #f9f4dc;`,
        `background: #030307; padding:5px; font-size:12px; color:#fff;`,
        `color: #51c4d3; font-size:12px;`
      );
    });
  },
  rootComponents: [
    NavMusic,    
  ],
});
