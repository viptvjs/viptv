import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/bash/archives/commands/ps.html.vue"
const data = JSON.parse("{\"path\":\"/linux/bash/archives/commands/ps.html\",\"title\":\"ps\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"ps ps 命令列出当前正在执行的进程信息。 由于进程很多，所以为了快速找到某个进程，一般与 grep 配合使用。 参数 -u 参数列出指定用户拥有的进程。\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/bash/archives/commands/ps.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"ps\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"ps ps 命令列出当前正在执行的进程信息。 由于进程很多，所以为了快速找到某个进程，一般与 grep 配合使用。 参数 -u 参数列出指定用户拥有的进程。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"ps\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"参数\",\"slug\":\"参数\",\"link\":\"#参数\",\"children\":[]}],\"readingTime\":{\"minutes\":0.26,\"words\":77},\"filePathRelative\":\"linux/bash/archives/commands/ps.md\",\"excerpt\":\"\\n<p><code>ps</code> 命令列出当前正在执行的进程信息。</p>\\n<p>由于进程很多，所以为了快速找到某个进程，一般与 <code>grep</code> 配合使用。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token comment\\\"># 找出正在运行 vim 的进程</span>\\n$ <span class=\\\"token function\\\">ps</span> <span class=\\\"token operator\\\">|</span> <span class=\\\"token function\\\">grep</span> <span class=\\\"token function\\\">vi</span>\\n</code></pre></div>\",\"autoDesc\":true}")
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
