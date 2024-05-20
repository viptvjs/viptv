import { defineClientConfig } from "vuepress/client";


import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "D:/viptv-private/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.42_@vuepress+plugin-pwa@2.0.0-rc.28_typescript@4.9.5_vuepress@2._r6ovetvjjyrqvc7a2ae4k3oyeq/node_modules/vuepress-theme-hope/lib/client/export.js";

import { defineCatalogInfoGetter } from "D:/viptv-private/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.28_typescript@4.9.5_vuepress@2.0.0-rc.9_@vuepress+bundler-v_wddxclfjn7t2manjvi6j2pp3vi/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "D:/viptv-private/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.42_@vuepress+plugin-pwa@2.0.0-rc.28_typescript@4.9.5_vuepress@2._r6ovetvjjyrqvc7a2ae4k3oyeq/node_modules/vuepress-theme-hope/lib/client/modules/blog/export.js";
import "D:/viptv-private/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.42_@vuepress+plugin-pwa@2.0.0-rc.28_typescript@4.9.5_vuepress@2._r6ovetvjjyrqvc7a2ae4k3oyeq/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/layout.scss";
import { GlobalEncrypt, LocalEncrypt } from "D:/viptv-private/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.42_@vuepress+plugin-pwa@2.0.0-rc.28_typescript@4.9.5_vuepress@2._r6ovetvjjyrqvc7a2ae4k3oyeq/node_modules/vuepress-theme-hope/lib/client/modules/encrypt/export.js";
import Slide from "D:/viptv-private/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.42_markdown-it@14.1.0_reveal.js@5.1.0_typescript@4.9.5_vu_gt3llufcjga2gnlxwhtbop6epi/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "D:/viptv-private/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.42_@vuepress+plugin-pwa@2.0.0-rc.28_typescript@4.9.5_vuepress@2._r6ovetvjjyrqvc7a2ae4k3oyeq/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    Slide,
  }
});