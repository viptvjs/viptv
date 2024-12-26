import { defineClientConfig } from "vuepress/client";
import {  onMounted } from 'vue';
import SocialLink from "./composables/SocialLink";
import ProjectLink from "./composables/ProjectLink";
//import Experiences from "./components/Experiences.vue";
import { db } from './composables/db';
import BlogBg from "./components/BlogBg.vue";
import NavMusic from "./components/NavMusic.vue";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
export default defineClientConfig({
  // 添加或覆盖组件
  layouts: {
   
  },
  enhance: ({ app }) => {
    // 注册全局组件
    app.component("SocialLink", SocialLink);
    app.component("ProjectLink", ProjectLink);
    // 注册路由守卫
    
  },
  setup: () => {
    // 注册全局组合式 API
    setupRunningTimeFooter(
      new Date("20224-01-01"),
      {
        "/en/": "Running time: :day days :hour hours :minute minutes :second seconds",
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
    setupTransparentNavbar();
    // 在客户端中访问 DOM
    onMounted(() => {     
      db
    });
  },
  // 全局组件
  rootComponents: [
    NavMusic,  
    BlogBg 
  ]
});
