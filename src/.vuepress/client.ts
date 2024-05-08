import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
import { onBeforeUnmount, onMounted } from 'vue';
import { defineClientConfig } from 'vuepress/client';

export default defineClientConfig({
  setup() {
    onMounted(() => Fancybox.bind('#vp-comment .wl-content img'));
    onBeforeUnmount(() => Fancybox.destroy());
  },
});