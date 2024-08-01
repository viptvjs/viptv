import { token } from "./consts";
import { enc, mode, AES, DES, pad } from "crypto-js";
const timeStamp = {
  Milliseconds: new Date().getTime(),
  Seconds:
    Date.UTC(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getSeconds()
    ) -
    8 * 3600 * 1e3,
  Minutes:
    Date.UTC(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getHours(),
      new Date().getMinutes()
    ) -
    8 * 3600 * 1e3,
  Hours:
    Date.UTC(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getHours()
    ) -
    8 * 3600 * 1e3,
  Day:
    Date.UTC(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDay()
    ) -
    8 * 3600 * 1e3,
  Date:
    Date.UTC(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    ) -
    8 * 3600 * 1e3,
  Month:
    Date.UTC(new Date().getFullYear(), new Date().getMonth()) - 8 * 3600 * 1e3,
  Year: Date.UTC(new Date().getFullYear()) - 8 * 3600 * 1e3,
};
const keyHex = (token + timeStamp.Hours).toLocaleUpperCase();

export const encryptDes = (message: string, key: string = keyHex) => {
  let keyHex = enc.Utf8.parse(key);
  let option = {
    mode: mode.ECB,
    padding: pad.Pkcs7,
  };
  let encrypted = DES.encrypt(message, keyHex, option);
  return encrypted.ciphertext.toString().toLocaleUpperCase();
};
export const decryptDes = (message: string, key: string = keyHex) => {
  let keyHex = enc.Utf8.parse(key);
  let decrypted = DES.decrypt(
    {
      ciphertext: enc.Hex.parse(message),
    },
    keyHex,
    {
      mode: mode.ECB,
      padding: pad.Pkcs7,
    }
  );
  return decrypted.toString(enc.Utf8);
};

export function aseEnc(word: string, key: string = keyHex, offset: string) {
  const wordUTF8 = enc.Utf8.parse(word);
  const keyUTF8 = enc.Utf8.parse(key);
  const offsetUTF8 = enc.Utf8.parse(offset);
  const encrypted = AES.encrypt(wordUTF8, keyUTF8, {
    iv: offsetUTF8,
    mode: mode.CBC,
    padding: pad.Pkcs7,
  });
  return encrypted.toString();
}

export function aesDec(
  encryptedWord: string,
  key: string = keyHex,
  offset: string
) {
  const keyUTF8 = enc.Utf8.parse(key);
  const offsetUTF8 = enc.Utf8.parse(offset);
  const bytes = AES.decrypt(encryptedWord, keyUTF8, {
    iv: offsetUTF8,
    mode: mode.CBC,
    padding: pad.Pkcs7,
  });
  return bytes.toString(enc.Utf8);
}
