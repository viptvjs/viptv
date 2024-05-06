import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/software/git/merge.html.vue"
const data = JSON.parse("{\"path\":\"/software/git/merge.html\",\"title\":\"高级合并\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"高级合并\",\"icon\":\"merge\",\"order\":17,\"category\":\"Git\",\"tag\":[\"Git\",\"软件\"],\"description\":\"Squash merge 通过使用 --squash 选项，你可以在合并中将多个 commit 合并为一个。 也就是对于以下的例子 git merge feature 得到的结果为: 而如果 feature 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 git merge --squash featur...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/software/git/merge.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"高级合并\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Squash merge 通过使用 --squash 选项，你可以在合并中将多个 commit 合并为一个。 也就是对于以下的例子 git merge feature 得到的结果为: 而如果 feature 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 git merge --squash featur...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Git\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"软件\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"高级合并\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Squash merge\",\"slug\":\"squash-merge\",\"link\":\"#squash-merge\",\"children\":[]},{\"level\":2,\"title\":\"Cherry pick\",\"slug\":\"cherry-pick\",\"link\":\"#cherry-pick\",\"children\":[]}],\"readingTime\":{\"minutes\":1.36,\"words\":407},\"filePathRelative\":\"software/git/merge.md\",\"excerpt\":\"<h2>Squash merge</h2>\\n<p>通过使用 <code>--squash</code> 选项，你可以在合并中将多个 commit 合并为一个。</p>\\n<p>也就是对于以下的例子</p>\\n<div class=\\\"language-git-graph\\\" data-ext=\\\"git-graph\\\" data-title=\\\"git-graph\\\"><pre class=\\\"language-git-graph\\\"><code>commit id:\\\"main1\\\"\\nbranch feature\\ncommit id:\\\"feature1\\\"\\ncheckout main\\ncommit id:\\\"main2\\\"\\ncheckout feature\\ncommit id:\\\"feature2\\\"\\ncheckout main\\nmerge feature\\n</code></pre></div>\",\"autoDesc\":true}")
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
