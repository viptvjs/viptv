
import cryptoJs from 'crypto-js';
const token = "8aae43f148f990410b9a2af38324af24e87ab9227c9265627ddd10145db744295fcd8701dc45b1ab8985e142f491516295dd965bae848761274a577a62b0fdc54a50284d1e434dcc04ca6d1a52333c9a"
const timeStamp = {
  Milliseconds: new Date().getTime(),
  Seconds: Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(),
    new Date().getMinutes(), new Date().getSeconds()) - 8 * 3600 * 1e3,
  Minutes: Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(),
    new Date().getMinutes()) - 8 * 3600 * 1e3,
  Hours: Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours()) - 8 *
    3600 * 1e3,
  Day: Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDay()) - 8 * 3600 * 1e3,
  Date: Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()) - 8 * 3600 * 1e3,
  Month: Date.UTC(new Date().getFullYear(), new Date().getMonth()) - 8 * 3600 * 1e3,
  Year: Date.UTC(new Date().getFullYear()) - 8 * 3600 * 1e3
}
const key = (token + timeStamp.Hours).toLocaleUpperCase()
export const Enc = (message) => {
  let keyHex = cryptoJs.enc.Utf8.parse(key)
  let option = {
    mode: cryptoJs.mode.ECB,
    padding: cryptoJs.pad.Pkcs7
  }
  let encrypted = cryptoJs.DES.encrypt(message, keyHex, option)
  return encrypted.ciphertext.toString().toLocaleUpperCase()
}
export const Dec = (message) => {
  let keyHex = cryptoJs.enc.Utf8.parse(key)
  let decrypted = cryptoJs.DES.decrypt({
    ciphertext: cryptoJs.enc.Hex.parse(message)
  }, // 若message是base64格式，则无需转16进制hex，直接传入message即可
    keyHex, {
    mode: cryptoJs.mode.ECB,
    padding: cryptoJs.pad.Pkcs7
  }
  )
  return decrypted.toString(cryptoJs.enc.Utf8)
}

