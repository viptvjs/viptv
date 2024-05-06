export const getTxt = async (url: any) => {
  const res = await (await fetch(url)).text()
  let raw = res.split('\n').filter((item, key, arr) => !key == false)
  const data = raw.map((red, k) => {
    let n = k + 1
    return {
      "title": "第" + n + "视频",
      "url": red
    }
  })
  return data
}
export const getTxtt = async (url: any) => {
  const res = await (await fetch(url)).text()
  let raw = res.split('\n').filter((item, key, arr) => !key == false)
  const data = raw.map((red, k) => {
    return {
      "title": red.split(",")[0],
      "url": red.split(",")[1]
    }
  })
  return data
}
export const getJson = async (url: any) => {
  const res = await (await fetch(url)).json()
  return res.list.map((red: any) => {
    return {
      "title": red.vod_name,
      "vod_pic": red.vod_pic,
      "url": red.vod_play_url.split('$')[1]
    }
  })
}
export const getJsonx = async (url: any) => {
  const res = await (await fetch(url)).json()
  return res.list.map((red: any) => {
    return {
      "vod_name": red.vod_name,
      "vod_pic": red.vod_pic,
      "play_list": red.vod_play_url.split('#').map(req => {
        return {
          title: req.split('$')[0],
          url: req.split('$')[1]
        }
      })
    }
  })
}
export const getM3u8 = async (url: string) => {
  const res = await (await fetch(url)).text()
  let groups = new Map<string, string>();
  const channelRegExp = /\#EXTINF:-1([^,]*),(.*)/;
  const groupRegExp = /group-title="([^"]*)"/;
  for (let i = 1; i < res.length; i += 2) {
    const reg = channelRegExp.exec(res[i]) as RegExpExecArray;
    const group = groupRegExp.exec(reg[1].trim());
    let g = "";
    if (!group) {
      g = "Undefined";
    } else {
      g = group[1].trim();
    }
    if (groups.has(g)) {
      groups.set(
        g,
        `${groups.get(g)}${reg[2].trim().replace(/\s+/g, "_")},${res[i + 1]
        }\n`
      );
    } else {
      groups.set(
        g,
        `${reg[2].trim().replace(/\s+/g, "_")},${res[i + 1]}\n`
      );
    }
  }
  let txt = "";
  groups.forEach((v, k) => {
    txt += `${k},#genre#\n${v}\n`;
  });
  return txt.substring(0, txt.length - 2);
};