export const getTxt = async (url: string) => {
  const res = await (await fetch(url)).text();
  let raw = res.split("\n").filter((item, key, arr) => !key == false);
  const data = raw.map((red, k) => {
    let n = k + 1;
    return {
      title: "第" + n + "视频",
      url: red,
    };
  });
  return data;
};
export const getTxtt = async (url: string) => {
  const res = await (await fetch(url)).text();
  let raw = res.split("\n").filter((item, key, arr) => !key == false);
  const data = raw.map((red) => {
    return {
      title: red.split(",")[0],
      url: red.split(",")[1],
    };
  });
  return data;
};
export const getJson = async (url: string) => {
  const res = await (await fetch(url)).json();
  return res.list.map((red: any) => {
    return {
      title: red.vod_name,
      vod_pic: red.vod_pic,
      url: red.vod_play_url.split("$")[1],
    };
  });
};
export const getJsonx = async (url: string) => {
  const res = await (await fetch(url)).json();
  return res.list.map((red) => {
    return {
      vod_name: red.vod_name,
      vod_pic: red.vod_pic,
      play_list: red.vod_play_url.split("#").map((req: any) => {
        return {
          title: req.split("$")[0],
          url: req.split("$")[1],
        };
      }),
    };
  });
};
export const xgsp = async (url: string) => {
  const data = await (await fetch(url)).json();
  return data.models.map((res: any) => {
    return {
      title: res.username,
      url: res.hlsPlaylist,
      avatar: res.avatarUrl,
      preview: res.previewUrlThumbBig,
    };
  });
};

export const raw = "https://iptv.viptv.work/";
export const cf = "https://cf.viptv.work/";
export const cors = "https://cors.eu.org/";
