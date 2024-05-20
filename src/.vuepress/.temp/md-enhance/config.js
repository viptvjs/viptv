import { defineClientConfig } from "vuepress/client";
import CodeTabs from "D:/viptv-private/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.42_markdown-it@14.1.0_reveal.js@5.1.0_typescript@4.9.5_vu_gt3llufcjga2gnlxwhtbop6epi/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "D:/viptv-private/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.42_markdown-it@14.1.0_reveal.js@5.1.0_typescript@4.9.5_vu_gt3llufcjga2gnlxwhtbop6epi/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHintContainers } from "D:/viptv-private/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.42_markdown-it@14.1.0_reveal.js@5.1.0_typescript@4.9.5_vu_gt3llufcjga2gnlxwhtbop6epi/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "D:/viptv-private/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.42_markdown-it@14.1.0_reveal.js@5.1.0_typescript@4.9.5_vu_gt3llufcjga2gnlxwhtbop6epi/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "D:/viptv-private/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.42_markdown-it@14.1.0_reveal.js@5.1.0_typescript@4.9.5_vu_gt3llufcjga2gnlxwhtbop6epi/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import "D:/viptv-private/node_modules/.pnpm/reveal.js@5.1.0/node_modules/reveal.js/dist/reveal.css";
import RevealJs from "D:/viptv-private/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.42_markdown-it@14.1.0_reveal.js@5.1.0_typescript@4.9.5_vu_gt3llufcjga2gnlxwhtbop6epi/node_modules/vuepress-plugin-md-enhance/lib/client/components/RevealJs.js";
import { injectRevealJsConfig } from "D:/viptv-private/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.42_markdown-it@14.1.0_reveal.js@5.1.0_typescript@4.9.5_vu_gt3llufcjga2gnlxwhtbop6epi/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Tabs from "D:/viptv-private/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.42_markdown-it@14.1.0_reveal.js@5.1.0_typescript@4.9.5_vu_gt3llufcjga2gnlxwhtbop6epi/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "D:/viptv-private/node_modules/.pnpm/@mdit+plugin-spoiler@0.10.1_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "D:/viptv-private/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.42_markdown-it@14.1.0_reveal.js@5.1.0_typescript@4.9.5_vu_gt3llufcjga2gnlxwhtbop6epi/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    injectRevealJsConfig(app);
    app.component("RevealJs", RevealJs);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
