import type { DefaultTheme } from 'vitepress'
// 社交链接设置

export const socialLinks: DefaultTheme.Config['socialLinks'] = [
  {
    icon: { svg: '<i class="fab fa-github fa-lg" alt="Github"></i>' },
    link: 'https://github.com/viptv-work',
    ariaLabel: 'Github'
  },
  {
    icon: { svg: '<i class="fas fa-envelope fa-lg" alt="Gmail"></i>' },
    link: 'mailto:viptvx@gmail.com',
    ariaLabel: 'Gmail'
  },
  {
    icon: { svg: '<i class="fab fa-telegram fa-lg" alt="Telegram"></i>' },
    link: 'https://t.me/viptv.work',
    ariaLabel: 'Telegram'
  },
  {
    icon: {
      svg: '<i class="fas fa-heart fa-lg" style="color: #EA4AAA;" alt="Github Sponsors"></i>'
    },
    link: 'https://www.viptv.work/about/donate.html',
    ariaLabel: 'VIPTV Sponsors'
  }
]
