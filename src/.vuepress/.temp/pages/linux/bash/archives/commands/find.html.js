import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/bash/archives/commands/find.html.vue"
const data = JSON.parse("{\"path\":\"/linux/bash/archives/commands/find.html\",\"title\":\"find\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"find find 命令用于寻找文件，会包括当前目录的所有下级目录。 如果不带任何参数，find 文件会列出当前目录的所有文件，甚至还包括相对路径。如果把结果导入 sort 效果更好。 如果想要 ls -l 样式的列表，只要在 find 后面加上 -ls。 find 有它自己的一套复杂的过滤语句。下面列举的是一些最常用的您可以用以获取某些文件列表的过滤...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/bash/archives/commands/find.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"find\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"find find 命令用于寻找文件，会包括当前目录的所有下级目录。 如果不带任何参数，find 文件会列出当前目录的所有文件，甚至还包括相对路径。如果把结果导入 sort 效果更好。 如果想要 ls -l 样式的列表，只要在 find 后面加上 -ls。 find 有它自己的一套复杂的过滤语句。下面列举的是一些最常用的您可以用以获取某些文件列表的过滤...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"find\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":1.76,\"words\":527},\"filePathRelative\":\"linux/bash/archives/commands/find.md\",\"excerpt\":\"\\n<p><code>find</code> 命令用于寻找文件，会包括当前目录的所有下级目录。</p>\\n<p>如果不带任何参数，<code>find</code> 文件会列出当前目录的所有文件，甚至还包括相对路径。如果把结果导入 <code>sort</code> 效果更好。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>$ <span class=\\\"token function\\\">find</span> <span class=\\\"token operator\\\">|</span> <span class=\\\"token function\\\">sort</span>\\n<span class=\\\"token builtin class-name\\\">.</span>\\n./Makefile\\n./README\\n./build\\n./client.c\\n./client.h\\n./common.h\\n./project.c\\n./server.c\\n./server.h\\n./tests\\n./tests/suite1.pl\\n./tests/suite2.pl\\n./tests/suite3.pl\\n./tests/suite4.pl\\n</code></pre></div>\",\"autoDesc\":true}")
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
