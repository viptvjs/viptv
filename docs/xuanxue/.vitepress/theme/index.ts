import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { h } from 'vue'
import './all.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import ShareButton from './ShareButton.vue'
import googleAnalytics from './googleAnalytics'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(ShareButton)
    })
  },
  enhanceApp: () => {
    googleAnalytics({ id: 'G-6QN23XNMXB' })

  },
  setup() {
    const route = useRoute()
    imageViewer(route)
  }
}
