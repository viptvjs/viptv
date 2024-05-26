import { defineClientConfig } from "vuepress/client";
import SocialLink from "./composables/SocialLink.js";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss"
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss"

//const HeroBG = defineAsyncComponent(() => import('./components/HeroBG.vue'));

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("SocialLink", SocialLink);
  },
});
