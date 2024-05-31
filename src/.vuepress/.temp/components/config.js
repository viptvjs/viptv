import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.33_typescript@4.9.5_vuepress@2.0.0-rc.12_@vuepress+bundler-vite@2.0_y4exy6xpflr7mw7jmchapk2oxu/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/@vueuse+core@10.10.0_vue@3.4.27_typescript@4.9.5_/node_modules/@vueuse/core/index.mjs";
import FontIcon from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.47_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.9_mpegts.js@1._5ckbqu7p4h3kjw6zjii6nhdxca/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.47_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.9_mpegts.js@1._5ckbqu7p4h3kjw6zjii6nhdxca/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.47_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.9_mpegts.js@1._5ckbqu7p4h3kjw6zjii6nhdxca/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import ArtPlayer from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.47_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.9_mpegts.js@1._5ckbqu7p4h3kjw6zjii6nhdxca/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import VPBanner from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.47_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.9_mpegts.js@1._5ckbqu7p4h3kjw6zjii6nhdxca/node_modules/vuepress-plugin-components/lib/client/components/VPBanner.js";
import SiteInfo from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.47_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.9_mpegts.js@1._5ckbqu7p4h3kjw6zjii6nhdxca/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";

import "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.47_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.9_mpegts.js@1._5ckbqu7p4h3kjw6zjii6nhdxca/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    if(!hasGlobalComponent("VPBanner")) app.component("VPBanner", VPBanner);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
