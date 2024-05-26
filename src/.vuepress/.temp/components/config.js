import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.28_vuepress@2.0.0-rc.11_@vuepress+bundler-vite@2.0.0-rc.11_@types+n_ifjedblvwmoacyzgk37trfzm5m/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/@vueuse+core@10.9.0_vue@3.4.27/node_modules/@vueuse/core/index.mjs";
import FontIcon from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.43_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.8_mpegts.js@1._gpqjdlmkdqru7im7dote2vyh7u/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.43_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.8_mpegts.js@1._gpqjdlmkdqru7im7dote2vyh7u/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.43_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.8_mpegts.js@1._gpqjdlmkdqru7im7dote2vyh7u/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import ArtPlayer from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.43_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.8_mpegts.js@1._gpqjdlmkdqru7im7dote2vyh7u/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import VPBanner from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.43_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.8_mpegts.js@1._gpqjdlmkdqru7im7dote2vyh7u/node_modules/vuepress-plugin-components/lib/client/components/VPBanner.js";
import SiteInfo from "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.43_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.8_mpegts.js@1._gpqjdlmkdqru7im7dote2vyh7u/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";

import "D:/Administrator/Desktop/viptv-private/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.43_artplayer@5.1.1_dashjs@4.7.4_hls.js@1.5.8_mpegts.js@1._gpqjdlmkdqru7im7dote2vyh7u/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

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
  `https://theme-hope-assets.vuejs.press/fontawesome/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://theme-hope-assets.vuejs.press/fontawesome/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://theme-hope-assets.vuejs.press/fontawesome/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
