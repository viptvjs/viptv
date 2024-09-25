import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  // 设置图标
  ['link', { rel: 'icon', href: 'https://img.viptv.work/viptv/logo.svg' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ['meta', { name: 'author', content: 'viptv-work' }],
  ['meta', { name: 'copyright', content: 'viptv-work' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ['meta', { name: 'description', content: '中华传统五术书籍传世经典著作' }],
  ['meta', { name: 'og:type', content: 'website' }],
  ['meta', { name: 'og:locale', content: 'zh-CN' }],
  ['meta', { name: 'og:site_name', content: '玄学宝典' }],
  ['meta', { name: 'og:image', content: 'https://img.viptv.work/viptv/logo.svg' }],
  ['meta', { name: 'og:description', content: '中华传统五术书籍传世经典著作' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@viptv_work' }],
  ['meta', { name: 'twitter:title', content: '玄学宝典' }],
  ['meta', { name: 'twitter:description', content: '中华传统五术书籍传世经典著作' }],
  ['meta', { name: 'twitter:image', content: 'https://img.viptv.work/viptv/logo.svg' }]
]
