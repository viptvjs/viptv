---
title: 我们
icon: person
watermark: true
star: true
isOriginal: true

dns:
  - name: VIPTV - 主站
    desc: 极速 、 高清 、 无广告
    logo: /logo.svg
    url: https://viptv.work/
    preview: /assets/png/4h-transparent-file.png

  - name: VIPTV - DNS1
    desc: 极速 、 高清 、 无广告
    logo: /logo.svg
    url: https://dns1.viptv.work/
    preview: /assets/png/4h-transparent-file.png

  - name: VIPTV - DNS2
    desc: 极速 、 高清 、 无广告
    logo: /logo.svg
    url: https://dns2.viptv.work/
    preview: /assets/png/4h-transparent-file.png

  - name: VIPTV - DNS3
    desc: 极速 、 高清 、 无广告
    logo: /logo.svg
    url: https://dns3.viptv.work/
    preview: /assets/png/4h-transparent-file.png

github:
  - name: VIPTV - WEB库
    desc: 开源WEB端，任何人都可以访问
    logo: /logo.svg
    url: https://github.com/viptv-work/viptv
    repo: https://github.com/viptv-work/viptv
    preview: /assets/webp/vip-tv-logo.webp
  - name: VIPTV - DEV库
    desc: 内部DEV端,授权成员可以访问。
    logo: /logo.svg
    url: https://github.com/viptv-work/docs
    repo: https://github.com/viptv-work/docs
    preview: /assets/webp/vip-tv-logo.webp

---

```component VPBanner
title: 相关服务
content: 利用Cloudflare 、Github 提供DNS缓存以及代码托管服务。
logo: /logo.svg
background: var(--bg-2)
color: var(--banner-text)
actions:
  - text: DNS托管平台
    link: https://www.cloudflare.com/
  - text: 代码托管平台
    link: https://github.com/viptv-work/viptv/tree/gh-pages
```


## VIPTV - 官网镜像

<SiteInfo
  v-for="item in $frontmatter.dns"
  :key="item.link"
  v-bind="item"
/>

## 官网仓库

<SiteInfo
  v-for="item in $frontmatter.github"
  :key="item.link"
  v-bind="item"
/>
