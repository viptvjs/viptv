export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/使用指南/","indexes":[0,1,2,3,4]},"指南":{"path":"/category/指南/","indexes":[5]},"网络直播":{"path":"/category/网络直播/","indexes":[6]},"影视点播":{"path":"/category/影视点播/","indexes":[7,8,9,10,11,12,13,14]},"加密":{"path":"/category/加密/","indexes":[15]},"公开":{"path":"/category/公开/","indexes":[16]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/禁用/","indexes":[1]},"加密":{"path":"/tag/加密/","indexes":[2]},"布局":{"path":"/tag/布局/","indexes":[5]},"Markdown":{"path":"/tag/markdown/","indexes":[3]},"页面配置":{"path":"/tag/页面配置/","indexes":[0]},"使用指南":{"path":"/tag/使用指南/","indexes":[0]},"快手":{"path":"/tag/快手/","indexes":[7,11]},"广场舞":{"path":"/tag/广场舞/","indexes":[7,11]},"林正英":{"path":"/tag/林正英/","indexes":[8]},"短剧":{"path":"/tag/短剧/","indexes":[9]},"小姐姐":{"path":"/tag/小姐姐/","indexes":[10,12,13]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

