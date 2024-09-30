---
title: 影视点播
icon: file-video
index: false
date: 2020-01-01
order: 1
star: true
isOriginal: true
category:
  - 影视点播
tag:
  - 影视点播
dns:
  - name: VIPTV - 主站
    desc: 极速 、 高清 、 无广告
    logo: /logo.svg
    url: https://viptv.work/
    preview: /assets/png/viptv-2.png

  - name: VIPTV - DNS1
    desc: 极速 、 高清 、 无广告
    logo: /logo.svg
    url: https://dns1.viptv.work/
    preview: /assets/png/viptv-2.png

  - name: VIPTV - DNS2
    desc: 极速 、 高清 、 无广告
    logo: /logo.svg
    url: https://dns2.viptv.work/
    preview: /assets/png/viptv-2.png

  - name: VIPTV - DNS3
    desc: 极速 、 高清 、 无广告
    logo: /logo.svg
    url: https://dns3.viptv.work/
    preview: /assets/png/viptv-2.png
vpb:
  - title: 相关服务
    content: 利用Cloudflare 、Github 提供DNS缓存以及代码托管服务。
    logo: /logo.svg
    background: var(--bg-4)
    color: var(--banner-text)
    actions:
      - text: DNS托管平台
        link: https://www.cloudflare.com/
      - text: 代码托管平台
        link: https://github.com/viptv-work/viptv
---

<VPBanner v-for="item in $frontmatter.vpb" :key="item.link" v-bind="item" />

## VIPTV - 官网镜像(◕‿◕)

<SiteInfo v-for="item in $frontmatter.dns" :key="item.link" v-bind="item" />
