import { defineClientConfig } from "vuepress/client";


import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.46_@vuepress+plugin-prismjs@2.0.0-rc.32_vuepress@2.0.0-rc.12_@vu_6qs3d6ehvh4h4q6iyzr2pnvlkm/node_modules/vuepress-theme-hope/lib/client/export.js";

import { defineCatalogInfoGetter } from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.31_typescript@4.9.5_vuepress@2.0.0-rc.12_@vuepress+bundler-_nlrxn4tqrtndmcnxh2ytklsyki/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.46_@vuepress+plugin-prismjs@2.0.0-rc.32_vuepress@2.0.0-rc.12_@vu_6qs3d6ehvh4h4q6iyzr2pnvlkm/node_modules/vuepress-theme-hope/lib/client/modules/blog/export.js";
import "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.46_@vuepress+plugin-prismjs@2.0.0-rc.32_vuepress@2.0.0-rc.12_@vu_6qs3d6ehvh4h4q6iyzr2pnvlkm/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/layout.scss";
import { GlobalEncrypt, LocalEncrypt } from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.46_@vuepress+plugin-prismjs@2.0.0-rc.32_vuepress@2.0.0-rc.12_@vu_6qs3d6ehvh4h4q6iyzr2pnvlkm/node_modules/vuepress-theme-hope/lib/client/modules/encrypt/export.js";
import Slide from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.45_markdown-it@14.1.0_reveal.js@5.1.0_sass-loader@14.2.1__loek4huwl7z7rh2lwmpjqbfqcm/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.46_@vuepress+plugin-prismjs@2.0.0-rc.32_vuepress@2.0.0-rc.12_@vu_6qs3d6ehvh4h4q6iyzr2pnvlkm/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

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