export const getTxt = async (url: string | URL | Request) => {
  const res = await (await fetch(url)).text();
  let raw = res.split("\n").filter((_item, key, _arr) => !key == false);
  const data = raw.map((red, k) => {
    let n = k + 1;
    return {
      title: "第" + n + "视频",
      url: red,
    };
  });
  return data;
};
export const getTxtt = async (url: string | URL | Request) => {
  const res = await (await fetch(url)).text();
  let raw = res.split("\n").filter((_item, key, _arr) => !key == false);
  const data = raw.map((red) => {
    return {
      title: red.split(",")[0],
      url: red.split(",")[1],
    };
  });
  return data;
};
export const getJson = async (url: string | URL | Request) => {
  const res = await (await fetch(url)).json();
  return res.list.map((red: { vod_name: any; vod_pic: any; vod_play_url: string; }) => {
    return {
      title: red.vod_name,
      vod_pic: red.vod_pic,
      url: red.vod_play_url.split("$")[1],
    };
  });
};
export const getJsonx = async (url: string | URL | Request) => {
  const res = await (await fetch(url)).json();
  return res.list.map((red: { vod_name: any; vod_pic: any; vod_play_url: string; }) => {
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
export const xgsp = async (url: string | URL | Request) => {
  const data = await (await fetch(url)).json();
  return data.models.map((res: { username: any; hlsPlaylist: any; avatarUrl: any; previewUrlThumbBig: any; }) => {
    return {
      title: res.username,
      url: res.hlsPlaylist,
      avatar: res.avatarUrl,
      preview: res.previewUrlThumbBig,
    };
  });
};

export const raw = "https://raw.viptv.work";
export const cf = "https://cf.viptv.work";
export const cors = "https://cors.eu.org";
