import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/bash/archives/process.html.vue"
const data = JSON.parse("{\"path\":\"/linux/bash/archives/process.html\",\"title\":\"进程管理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"进程管理 ps ps 命令用来列出进程信息。 不带任何参数时，ps 只列出与当前 Session 相关的进程。输出结果中，PID 是进程 ID、TTY 是进程的终端号(如果显示?，则表示进程没有终端)，TIME 是消耗的 CPU 时间，CMD 是触发进程的命令。 x 参数列出所有进程的详细信息，包括不在当前 Session 的信息。 这时的输出结果，会...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/bash/archives/process.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"进程管理\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"进程管理 ps ps 命令用来列出进程信息。 不带任何参数时，ps 只列出与当前 Session 相关的进程。输出结果中，PID 是进程 ID、TTY 是进程的终端号(如果显示?，则表示进程没有终端)，TIME 是消耗的 CPU 时间，CMD 是触发进程的命令。 x 参数列出所有进程的详细信息，包括不在当前 Session 的信息。 这时的输出结果，会...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"进程管理\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"ps\",\"slug\":\"ps\",\"link\":\"#ps\",\"children\":[]},{\"level\":2,\"title\":\"top\",\"slug\":\"top\",\"link\":\"#top\",\"children\":[]},{\"level\":2,\"title\":\"jobs\",\"slug\":\"jobs\",\"link\":\"#jobs\",\"children\":[]},{\"level\":2,\"title\":\"fg\",\"slug\":\"fg\",\"link\":\"#fg\",\"children\":[]},{\"level\":2,\"title\":\"bg\",\"slug\":\"bg\",\"link\":\"#bg\",\"children\":[]},{\"level\":2,\"title\":\"kill\",\"slug\":\"kill\",\"link\":\"#kill\",\"children\":[]},{\"level\":2,\"title\":\"killall\",\"slug\":\"killall\",\"link\":\"#killall\",\"children\":[]},{\"level\":2,\"title\":\"其他进程相关命令\",\"slug\":\"其他进程相关命令\",\"link\":\"#其他进程相关命令\",\"children\":[]}],\"readingTime\":{\"minutes\":5.25,\"words\":1575},\"filePathRelative\":\"linux/bash/archives/process.md\",\"excerpt\":\"\\n<h2>ps</h2>\\n<p><code>ps</code> 命令用来列出进程信息。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>$ <span class=\\\"token function\\\">ps</span>\\nPID TTY           TIME CMD\\n<span class=\\\"token number\\\">5198</span> pts/1    00:00:00 <span class=\\\"token function\\\">bash</span>\\n<span class=\\\"token number\\\">10129</span> pts/1   00:00:00 <span class=\\\"token function\\\">ps</span>\\n</code></pre></div>\",\"autoDesc\":true}")
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
