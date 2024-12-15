import { defineComponent, type VNode,h } from "vue";
import "../styles/cove.scss"
export default defineComponent({
  name: "BlogBg",
  setup() {
    return (): VNode =>
      !__VUEPRESS_SSR__ ? h("div", { class: "page-bg" }) : h("");
  },
});