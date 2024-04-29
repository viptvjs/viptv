export const getTxt = async (url) => {
  const res = await (await fetch(url)).text()
  let raw = res.split('\n').filter((item, key, arr) => !key == 0)
  const data = raw.map((red, k) => {
    let n = k + 1
    return {
      "title": "第" + n + "视频",
      "url": red
    }
  })
  return data
}
export const getTxtt = async (url) => {
  const res = await (await fetch(url)).text()
  let raw = res.split('\n').filter((item, key, arr) => !key == 0)
  const data = raw.map((red, k) => {
    return {
      "title": red.split(",")[0],
      "url": red.split(",")[1]
    }
  })
  return data
}