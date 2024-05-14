import v from"node-fetch";import{existsSync as m,writeFileSync as g,writeFile as d,readFileSync as w,mkdirSync as D}from"fs";import{dirname as y}from"path";var h={bingUrl:"https://cn.bing.com",pictureURL:"http://www.bing.com/HPImageArchive.aspx",queries:{idx:0,n:1,format:"js",mkt:"zh-CN"}};async function $(){try{let{idx:o,n:s,format:n,mkt:c}=h.queries,t=h.pictureURL+`?idx=${o}&n=${s}&format=${n}&mkt=${c}&uhd=1&uhdwidth=1920&uhdheight=1080`;return console.log(`Request url: ${t}`),(await(await v(t)).json()).images}catch(o){throw console.log(o),o}}async function b(){try{let o=await $();for(let s of o){let{enddate:n,url:c,copyright:t,title:e,hsh:l}=s,a=n.slice(0,4)+"-"+n.slice(4,6)+"-"+n.slice(-2),i=h.bingUrl+c,p=i.replace("1920","480").replace("1080","270"),u=i.replace("1920","3840").replace("1080","2160");S({hsh:l,date:a,title:e,copyright:t,url_preview:p,url_1080:i,url_4k:u})}}catch(o){throw console.log(o),o}}function S(o){try{m("./map.json")||g("./map.json",'{"images": [],"archives": []}');let n=w("./map.json").toString(),c=JSON.parse(n),{images:t,archives:e}=c;if(t.some(a=>a.date===o.date)){console.log("Warning: Duplicate data, not written! \u2193"),console.log(o);return}t.unshift(o),t.sort((a,i)=>new Date(i.date).getTime()-new Date(a.date).getTime()),g("./map.json",JSON.stringify(c)),console.log("Done: Write map.json completed! \u2193"),console.log(o),I(o,t,e)}catch(s){throw console.log(s),s}}function I(o,s,n){let c=s.slice(0,31),t=[];c.forEach(e=>{t.push(`## ${e.date} ${e.title}

`),t.push(e.copyright+`

`),t.push(`![](${e.url_1080})

`),t.push(`[Download 1920 * 1080](${e.url_1080}) | [Download 3840 * 2160](${e.url_4k})

`)}),d("./docs/archives/README.md",t.join(""),e=>{if(e)throw console.log(e),e;console.log("Done: Write ./docs/archives/README.md completed!")}),x(o,n),j(n)}function x(o,s){if(!s.length){console.log("Warnning: no archives!");return}let n=null;if(s.forEach(r=>{o.date.includes(r.date)&&(n=r)}),!n){console.log("Error: cannot find picture's archive! \u2193"),console.log(o);return}let{date:c,mapPath:t}=n,l=w(t).toString(),a=JSON.parse(l),i=[];a.forEach(r=>{i.push(`## ${r.date} ${r.title}

`),i.push(r.copyright+`

`),i.push(`![](${r.url_1080})

`),i.push(`[Download 1920 * 1080](${r.url_1080}) | [Download 3840 * 2160](${r.url_4k})

`)});let u=`./docs/archives/${c.split("-")[0]}/${c}.md`,f=y(u);m(f)||D(f,{recursive:!0}),d(u,i.join(""),r=>{if(r)throw console.log(r),r;console.log(`Done: Write ${u} completed!`)})}function j(o){let s=[{text:"\u6700\u8FD1\u66F4\u65B0 31",link:"/archives/"}],n={};o.forEach(t=>{let e=t.date.split("-")[0];t.date.includes(e)&&(n[e]||(n[e]=[]),n[e].push({text:t.date,icon:"images",link:`/archives/${e}/${t.date}.md`}))}),Object.keys(n).forEach(t=>{s.push({text:t,collapsible:!0,icon:"lock-open",children:n[t]})}),s.sort((t,e)=>+e.text-+t.text);let c="export default "+JSON.stringify(s);d("./docs/.vuepress/config/sidebar/archives.ts",c,t=>{if(t)throw console.log(t),t;console.log("Done: Write ./docs/.vuepress/config/sidebar/archives.ts completed!")})}b();
