import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/bash/archives/commands/uniq.html.vue"
const data = JSON.parse("{\"path\":\"/linux/bash/archives/commands/uniq.html\",\"title\":\"uniq\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"uniq uniq 用于过滤掉重复的行，该命令只对排序后的文件有效。 下面是 example.txt 文件的内容。 对该文件进行排序后，再过滤掉重复的行。 参数 -c 参数会显示每行一共出现了多少次。\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/bash/archives/commands/uniq.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"uniq\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"uniq uniq 用于过滤掉重复的行，该命令只对排序后的文件有效。 下面是 example.txt 文件的内容。 对该文件进行排序后，再过滤掉重复的行。 参数 -c 参数会显示每行一共出现了多少次。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"uniq\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"参数\",\"slug\":\"参数\",\"link\":\"#参数\",\"children\":[]}],\"readingTime\":{\"minutes\":0.33,\"words\":98},\"filePathRelative\":\"linux/bash/archives/commands/uniq.md\",\"excerpt\":\"\\n<p><code>uniq</code> 用于过滤掉重复的行，该命令只对排序后的文件有效。</p>\\n<p>下面是 <code>example.txt</code> 文件的内容。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>a\\na\\nb\\na\\nb\\nc\\nd\\nc\\n</code></pre></div><p>对该文件进行排序后，再过滤掉重复的行。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>$ <span class=\\\"token function\\\">sort</span> example.txt <span class=\\\"token operator\\\">|</span> <span class=\\\"token function\\\">uniq</span>\\na\\nb\\nc\\nd\\n</code></pre></div>\",\"autoDesc\":true}")
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
