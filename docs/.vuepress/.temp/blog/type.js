      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,7,8,9,10,11,12,13,17,1,2,5,3,4,18,6,14,19,20,21,22,15,16]}},"star":{"/":{"path":"/star/","indexes":[0]}},"timeline":{"/":{"path":"/timeline/","indexes":[0,7,8,9,10,11,12,13]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      