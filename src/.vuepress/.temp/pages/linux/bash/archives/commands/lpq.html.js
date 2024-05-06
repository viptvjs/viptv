import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/bash/archives/commands/lpq.html.vue"
const data = JSON.parse("{\"path\":\"/linux/bash/archives/commands/lpq.html\",\"title\":\"lpq\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"lpq lpq 命令显示打印机队列。\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/bash/archives/commands/lpq.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"lpq\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"lpq lpq 命令显示打印机队列。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"lpq\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.11,\"words\":32},\"filePathRelative\":\"linux/bash/archives/commands/lpq.md\",\"excerpt\":\"\\n<p><code>lpq</code> 命令显示打印机队列。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>$ lpq\\nRank    Owner   Job     File<span class=\\\"token punctuation\\\">(</span>s<span class=\\\"token punctuation\\\">)</span>                         Total Size\\nactive  adnanad <span class=\\\"token number\\\">59</span>      demo                            <span class=\\\"token number\\\">399360</span> bytes\\n1st     adnanad <span class=\\\"token number\\\">60</span>      <span class=\\\"token punctuation\\\">(</span>stdin<span class=\\\"token punctuation\\\">)</span>                         <span class=\\\"token number\\\">0</span> bytes\\n</code></pre></div>\",\"autoDesc\":true}")
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
