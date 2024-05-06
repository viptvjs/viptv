import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/intro/startup.html.vue"
const data = JSON.parse("{\"path\":\"/linux/intro/startup.html\",\"title\":\"Linux 系统启动过程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"Linux 系统启动过程 提示 本篇教程以 CentOS 为例介绍系统的启动过程。 Linux 启动时我们会看到许多启动信息。 Linux 系统的启动过程并不是大家想象中的那么复杂，其过程可以分为 5 个阶段: 内核的引导。 运行 init。 系统初始化。 建立终端 。 用户登录系统。 提示 init 程序的类型: SysV: init, CentOS...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/intro/startup.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Linux 系统启动过程\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Linux 系统启动过程 提示 本篇教程以 CentOS 为例介绍系统的启动过程。 Linux 启动时我们会看到许多启动信息。 Linux 系统的启动过程并不是大家想象中的那么复杂，其过程可以分为 5 个阶段: 内核的引导。 运行 init。 系统初始化。 建立终端 。 用户登录系统。 提示 init 程序的类型: SysV: init, CentOS...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Linux 系统启动过程\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"内核引导\",\"slug\":\"内核引导\",\"link\":\"#内核引导\",\"children\":[]},{\"level\":2,\"title\":\"运行 init\",\"slug\":\"运行-init\",\"link\":\"#运行-init\",\"children\":[{\"level\":3,\"title\":\"运行级别\",\"slug\":\"运行级别\",\"link\":\"#运行级别\",\"children\":[]}]},{\"level\":2,\"title\":\"系统初始化\",\"slug\":\"系统初始化\",\"link\":\"#系统初始化\",\"children\":[]}],\"readingTime\":{\"minutes\":3.37,\"words\":1010},\"filePathRelative\":\"linux/intro/startup.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">提示</p>\\n<p>本篇教程以 CentOS 为例介绍系统的启动过程。</p>\\n</div>\\n<p>Linux 启动时我们会看到许多启动信息。</p>\\n<p>Linux 系统的启动过程并不是大家想象中的那么复杂，其过程可以分为 5 个阶段:</p>\\n<ul>\\n<li>内核的引导。</li>\\n<li>运行 init。</li>\\n<li>系统初始化。</li>\\n<li>建立终端 。</li>\\n<li>用户登录系统。</li>\\n</ul>\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">提示</p>\\n<p>init 程序的类型:</p>\\n<ul>\\n<li>SysV: init, CentOS 5 之前, 配置文件: /etc/inittab。</li>\\n<li>Upstart: init,CentOS 6, 配置文件: /etc/inittab, /etc/init/*.conf。</li>\\n<li>Systemd: systemd, CentOS 7,配置文件: /usr/lib/systemd/system、 /etc/systemd/system。</li>\\n</ul>\\n</div>\",\"autoDesc\":true}")
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
