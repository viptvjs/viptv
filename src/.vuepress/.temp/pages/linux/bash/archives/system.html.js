import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/bash/archives/system.html.vue"
const data = JSON.parse("{\"path\":\"/linux/bash/archives/system.html\",\"title\":\"系统信息\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"系统信息 uname uname 命令返回当前机器的信息。 如果要了解操作系统的版本，可以查看/etc/issue 文件。 service service 命令可以查看当前正在运行的服务。 上面代码中，+ 表示正在运行，- 表示已经停止，?表示 service 命令不了解相关信息。\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/bash/archives/system.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"系统信息\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"系统信息 uname uname 命令返回当前机器的信息。 如果要了解操作系统的版本，可以查看/etc/issue 文件。 service service 命令可以查看当前正在运行的服务。 上面代码中，+ 表示正在运行，- 表示已经停止，?表示 service 命令不了解相关信息。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"系统信息\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"uname\",\"slug\":\"uname\",\"link\":\"#uname\",\"children\":[]},{\"level\":2,\"title\":\"service\",\"slug\":\"service\",\"link\":\"#service\",\"children\":[]}],\"readingTime\":{\"minutes\":0.38,\"words\":114},\"filePathRelative\":\"linux/bash/archives/system.md\",\"excerpt\":\"\\n<h2>uname</h2>\\n<p><code>uname</code> 命令返回当前机器的信息。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token comment\\\"># 内核的版本</span>\\n$ <span class=\\\"token function\\\">uname</span> <span class=\\\"token parameter variable\\\">-r</span>\\n<span class=\\\"token number\\\">3.2</span>.0-24-virtual\\n\\n<span class=\\\"token comment\\\"># CPU 架构</span>\\n$ <span class=\\\"token function\\\">uname</span> <span class=\\\"token parameter variable\\\">-m</span>\\nx86_64\\n</code></pre></div>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
