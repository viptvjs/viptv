import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/bash/archives/commands/dd.html.vue"
const data = JSON.parse("{\"path\":\"/linux/bash/archives/commands/dd.html\",\"title\":\"dd\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"dd dd 命令用于复制磁盘或文件系统。 复制磁盘 上面命令表示将/dev/sda 磁盘复制到/dev/sdb 设备。参数 if 表示来源地，of 表示目的地。 除了复制，dd 还允许将磁盘做成一个镜像文件。 dd 还可以复制单个分区。 上面命令中，参数 bs 表示单次拷贝的字节数(bytes)。 要将镜像文件复原，也很简单。 清除数据 dd 也可以用...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/bash/archives/commands/dd.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"dd\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"dd dd 命令用于复制磁盘或文件系统。 复制磁盘 上面命令表示将/dev/sda 磁盘复制到/dev/sdb 设备。参数 if 表示来源地，of 表示目的地。 除了复制，dd 还允许将磁盘做成一个镜像文件。 dd 还可以复制单个分区。 上面命令中，参数 bs 表示单次拷贝的字节数(bytes)。 要将镜像文件复原，也很简单。 清除数据 dd 也可以用...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"dd\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"复制磁盘\",\"slug\":\"复制磁盘\",\"link\":\"#复制磁盘\",\"children\":[]},{\"level\":2,\"title\":\"清除数据\",\"slug\":\"清除数据\",\"link\":\"#清除数据\",\"children\":[]},{\"level\":2,\"title\":\"监控进展\",\"slug\":\"监控进展\",\"link\":\"#监控进展\",\"children\":[]},{\"level\":2,\"title\":\"参考链接\",\"slug\":\"参考链接\",\"link\":\"#参考链接\",\"children\":[]}],\"readingTime\":{\"minutes\":0.98,\"words\":294},\"filePathRelative\":\"linux/bash/archives/commands/dd.md\",\"excerpt\":\"\\n<p><code>dd</code> 命令用于复制磁盘或文件系统。</p>\\n<h2>复制磁盘</h2>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token function\\\">dd</span> <span class=\\\"token assign-left variable\\\">if</span><span class=\\\"token operator\\\">=</span>/dev/sda <span class=\\\"token assign-left variable\\\">of</span><span class=\\\"token operator\\\">=</span>/dev/sdb\\n</code></pre></div>\",\"autoDesc\":true}")
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
