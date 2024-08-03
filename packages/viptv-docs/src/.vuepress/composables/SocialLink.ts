import type { VNode } from "vue";
import { computed, defineComponent, h } from "vue";
import { useRouteLocale } from "vuepress/client";

export default defineComponent({
  name: "SocialLink",

  setup() {
    const routeLocale = useRouteLocale();

    const link = computed(() =>
      routeLocale.value === "/"
        ? "https://qm.qq.com/q/jHDv3RLK9y"
        : "https://x.com/viptv_work",
    );

   
    const icon = computed(
      () =>
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style="width:1.25rem;height:1.25rem;vertical-align:middle"><path d="${routeLocale.value === "/"
          ? "M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
          : "M778.4 96h141.2L611.2 448.4 974 928H690L467.4 637.2 213 928H71.6l329.8-377L53.6 96h291.2l201 265.8L778.4 96z m-49.6 747.6H807L302.2 176h-84l510.6 667.6z"
        }" fill="currentColor"/></svg>`,
    );

    return (): VNode =>
      h(
        "div",
        { class: "vp-nav-item vp-action" },
        h("a", {
          class: "vp-action-link",
          href: link.value,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "telegram",
          innerHTML: icon.value,
        }),
      );
  },
});