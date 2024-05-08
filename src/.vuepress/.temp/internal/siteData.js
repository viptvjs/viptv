export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"VIPTV\",\"description\":\"便捷 、高效 、最有价值的视听链\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"VIPTV - Cloud Audiovisual\",\"description\":\"Simple, efficient, and the most valuable audio-visual chain\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
