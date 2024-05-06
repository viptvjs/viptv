import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/bash/archives/archiving.html.vue"
const data = JSON.parse("{\"path\":\"/linux/bash/archives/archiving.html\",\"title\":\"归档和备份\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"归档和备份 gzip gzip 程序用来压缩文件，原文件的压缩版(添加 gz 后缀名)会替代原文件。gunzip 程序用来还原压缩版本。 gzip 的参数如下。 -c 把输出写入到标准输出，并且保留原始文件。也有可能用--stdout 和--to-stdout 选项来指定。 -d 解压缩。正如 gunzip 命令一样。也可以用--decompress ...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/bash/archives/archiving.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"归档和备份\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"归档和备份 gzip gzip 程序用来压缩文件，原文件的压缩版(添加 gz 后缀名)会替代原文件。gunzip 程序用来还原压缩版本。 gzip 的参数如下。 -c 把输出写入到标准输出，并且保留原始文件。也有可能用--stdout 和--to-stdout 选项来指定。 -d 解压缩。正如 gunzip 命令一样。也可以用--decompress ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"归档和备份\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"gzip\",\"slug\":\"gzip\",\"link\":\"#gzip\",\"children\":[]},{\"level\":2,\"title\":\"bzip2\",\"slug\":\"bzip2\",\"link\":\"#bzip2\",\"children\":[]},{\"level\":2,\"title\":\"zip\",\"slug\":\"zip\",\"link\":\"#zip\",\"children\":[]},{\"level\":2,\"title\":\"tar\",\"slug\":\"tar\",\"link\":\"#tar\",\"children\":[]},{\"level\":2,\"title\":\"rsync\",\"slug\":\"rsync\",\"link\":\"#rsync\",\"children\":[]}],\"readingTime\":{\"minutes\":5.21,\"words\":1563},\"filePathRelative\":\"linux/bash/archives/archiving.md\",\"excerpt\":\"\\n<h2>gzip</h2>\\n<p>gzip 程序用来压缩文件，原文件的压缩版(添加 <code>gz</code> 后缀名)会替代原文件。gunzip 程序用来还原压缩版本。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token function\\\">gzip</span> foo.txt\\ngunzip foo.txt.gz\\n</code></pre></div><p><code>gzip</code> 的参数如下。</p>\",\"autoDesc\":true}")
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
