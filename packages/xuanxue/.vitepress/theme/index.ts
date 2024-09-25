import DefaultTheme from 'vitepress/theme'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import { h } from 'vue'
import '@theojs/lumen/theme'

import {
  ShareButton
} from '@theojs/lumen'


export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(ShareButton)
    })
  },
  enhanceApp: ({ app }, ctx) => {
    googleAnalytics({ id: 'G-6381PF894J' })
  }
}
