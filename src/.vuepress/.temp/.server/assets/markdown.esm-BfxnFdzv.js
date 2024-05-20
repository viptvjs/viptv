var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function e() {
  return { async: false, baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, hooks: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
}
let t = { async: false, baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, hooks: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
const n = /[&<>"']/, s = new RegExp(n.source, "g"), r = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, i = new RegExp(r.source, "g"), l = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, o = (e2) => l[e2];
function a(e2, t2) {
  if (t2) {
    if (n.test(e2))
      return e2.replace(s, o);
  } else if (r.test(e2))
    return e2.replace(i, o);
  return e2;
}
const c = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function h(e2) {
  return e2.replace(c, (e3, t2) => "colon" === (t2 = t2.toLowerCase()) ? ":" : "#" === t2.charAt(0) ? "x" === t2.charAt(1) ? String.fromCharCode(parseInt(t2.substring(2), 16)) : String.fromCharCode(+t2.substring(1)) : "");
}
const p = /(^|[^\[])\^/g;
function u(e2, t2) {
  e2 = "string" == typeof e2 ? e2 : e2.source, t2 = t2 || "";
  const n2 = { replace: (t3, s2) => (s2 = (s2 = s2.source || s2).replace(p, "$1"), e2 = e2.replace(t3, s2), n2), getRegex: () => new RegExp(e2, t2) };
  return n2;
}
const g = /[^\w:]/g, d = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function f(e2, t2, n2) {
  if (e2) {
    let e3;
    try {
      e3 = decodeURIComponent(h(n2)).replace(g, "").toLowerCase();
    } catch (e4) {
      return null;
    }
    if (0 === e3.indexOf("javascript:") || 0 === e3.indexOf("vbscript:") || 0 === e3.indexOf("data:"))
      return null;
  }
  t2 && !d.test(n2) && (n2 = function(e3, t3) {
    k[" " + e3] || (x.test(e3) ? k[" " + e3] = e3 + "/" : k[" " + e3] = y(e3, "/", true));
    e3 = k[" " + e3];
    const n3 = -1 === e3.indexOf(":");
    return "//" === t3.substring(0, 2) ? n3 ? t3 : e3.replace(m, "$1") + t3 : "/" === t3.charAt(0) ? n3 ? t3 : e3.replace(b, "$1") + t3 : e3 + t3;
  }(t2, n2));
  try {
    n2 = encodeURI(n2).replace(/%25/g, "%");
  } catch (e3) {
    return null;
  }
  return n2;
}
const k = {}, x = /^[^:]+:\/*[^/]*$/, m = /^([^:]+:)[\s\S]*$/, b = /^([^:]+:\/*[^/]*)[\s\S]*$/;
const w = { exec: function() {
} };
function _(e2, t2) {
  const n2 = e2.replace(/\|/g, (e3, t3, n3) => {
    let s3 = false, r2 = t3;
    for (; --r2 >= 0 && "\\" === n3[r2]; )
      s3 = !s3;
    return s3 ? "|" : " |";
  }).split(/ \|/);
  let s2 = 0;
  if (n2[0].trim() || n2.shift(), n2.length > 0 && !n2[n2.length - 1].trim() && n2.pop(), n2.length > t2)
    n2.splice(t2);
  else
    for (; n2.length < t2; )
      n2.push("");
  for (; s2 < n2.length; s2++)
    n2[s2] = n2[s2].trim().replace(/\\\|/g, "|");
  return n2;
}
function y(e2, t2, n2) {
  const s2 = e2.length;
  if (0 === s2)
    return "";
  let r2 = 0;
  for (; r2 < s2; ) {
    const i2 = e2.charAt(s2 - r2 - 1);
    if (i2 !== t2 || n2) {
      if (i2 === t2 || !n2)
        break;
      r2++;
    } else
      r2++;
  }
  return e2.slice(0, s2 - r2);
}
function $(e2, t2) {
  if (t2 < 1)
    return "";
  let n2 = "";
  for (; t2 > 1; )
    1 & t2 && (n2 += e2), t2 >>= 1, e2 += e2;
  return n2 + e2;
}
function z(e2, t2, n2, s2) {
  const r2 = t2.href, i2 = t2.title ? a(t2.title) : null, l2 = e2[1].replace(/\\([\[\]])/g, "$1");
  if ("!" !== e2[0].charAt(0)) {
    s2.state.inLink = true;
    const e3 = { type: "link", raw: n2, href: r2, title: i2, text: l2, tokens: s2.inlineTokens(l2) };
    return s2.state.inLink = false, e3;
  }
  return { type: "image", raw: n2, href: r2, title: i2, text: a(l2) };
}
class S {
  constructor(e2) {
    this.options = e2 || t;
  }
  space(e2) {
    const t2 = this.rules.block.newline.exec(e2);
    if (t2 && t2[0].length > 0)
      return { type: "space", raw: t2[0] };
  }
  code(e2) {
    const t2 = this.rules.block.code.exec(e2);
    if (t2) {
      const e3 = t2[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: t2[0], codeBlockStyle: "indented", text: this.options.pedantic ? e3 : y(e3, "\n") };
    }
  }
  fences(e2) {
    const t2 = this.rules.block.fences.exec(e2);
    if (t2) {
      const e3 = t2[0], n2 = function(e4, t3) {
        const n3 = e4.match(/^(\s+)(?:```)/);
        if (null === n3)
          return t3;
        const s2 = n3[1];
        return t3.split("\n").map((e5) => {
          const t4 = e5.match(/^\s+/);
          if (null === t4)
            return e5;
          const [n4] = t4;
          return n4.length >= s2.length ? e5.slice(s2.length) : e5;
        }).join("\n");
      }(e3, t2[3] || "");
      return { type: "code", raw: e3, lang: t2[2] ? t2[2].trim().replace(this.rules.inline._escapes, "$1") : t2[2], text: n2 };
    }
  }
  heading(e2) {
    const t2 = this.rules.block.heading.exec(e2);
    if (t2) {
      let e3 = t2[2].trim();
      if (/#$/.test(e3)) {
        const t3 = y(e3, "#");
        this.options.pedantic ? e3 = t3.trim() : t3 && !/ $/.test(t3) || (e3 = t3.trim());
      }
      return { type: "heading", raw: t2[0], depth: t2[1].length, text: e3, tokens: this.lexer.inline(e3) };
    }
  }
  hr(e2) {
    const t2 = this.rules.block.hr.exec(e2);
    if (t2)
      return { type: "hr", raw: t2[0] };
  }
  blockquote(e2) {
    const t2 = this.rules.block.blockquote.exec(e2);
    if (t2) {
      const e3 = t2[0].replace(/^ *>[ \t]?/gm, ""), n2 = this.lexer.state.top;
      this.lexer.state.top = true;
      const s2 = this.lexer.blockTokens(e3);
      return this.lexer.state.top = n2, { type: "blockquote", raw: t2[0], tokens: s2, text: e3 };
    }
  }
  list(e2) {
    let t2 = this.rules.block.list.exec(e2);
    if (t2) {
      let n2, s2, r2, i2, l2, o2, a2, c2, h2, p2, u2, g2, d2 = t2[1].trim();
      const f2 = d2.length > 1, k2 = { type: "list", raw: "", ordered: f2, start: f2 ? +d2.slice(0, -1) : "", loose: false, items: [] };
      d2 = f2 ? `\\d{1,9}\\${d2.slice(-1)}` : `\\${d2}`, this.options.pedantic && (d2 = f2 ? d2 : "[*+-]");
      const x2 = new RegExp(`^( {0,3}${d2})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (; e2 && (g2 = false, t2 = x2.exec(e2)) && !this.rules.block.hr.test(e2); ) {
        if (n2 = t2[0], e2 = e2.substring(n2.length), c2 = t2[2].split("\n", 1)[0].replace(/^\t+/, (e3) => " ".repeat(3 * e3.length)), h2 = e2.split("\n", 1)[0], this.options.pedantic ? (i2 = 2, u2 = c2.trimLeft()) : (i2 = t2[2].search(/[^ ]/), i2 = i2 > 4 ? 1 : i2, u2 = c2.slice(i2), i2 += t2[1].length), o2 = false, !c2 && /^ *$/.test(h2) && (n2 += h2 + "\n", e2 = e2.substring(h2.length + 1), g2 = true), !g2) {
          const t3 = new RegExp(`^ {0,${Math.min(3, i2 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), s3 = new RegExp(`^ {0,${Math.min(3, i2 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), r3 = new RegExp(`^ {0,${Math.min(3, i2 - 1)}}(?:\`\`\`|~~~)`), l3 = new RegExp(`^ {0,${Math.min(3, i2 - 1)}}#`);
          for (; e2 && (p2 = e2.split("\n", 1)[0], h2 = p2, this.options.pedantic && (h2 = h2.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !r3.test(h2)) && !l3.test(h2) && !t3.test(h2) && !s3.test(e2); ) {
            if (h2.search(/[^ ]/) >= i2 || !h2.trim())
              u2 += "\n" + h2.slice(i2);
            else {
              if (o2)
                break;
              if (c2.search(/[^ ]/) >= 4)
                break;
              if (r3.test(c2))
                break;
              if (l3.test(c2))
                break;
              if (s3.test(c2))
                break;
              u2 += "\n" + h2;
            }
            o2 || h2.trim() || (o2 = true), n2 += p2 + "\n", e2 = e2.substring(p2.length + 1), c2 = h2.slice(i2);
          }
        }
        k2.loose || (a2 ? k2.loose = true : /\n *\n *$/.test(n2) && (a2 = true)), this.options.gfm && (s2 = /^\[[ xX]\] /.exec(u2), s2 && (r2 = "[ ] " !== s2[0], u2 = u2.replace(/^\[[ xX]\] +/, ""))), k2.items.push({ type: "list_item", raw: n2, task: !!s2, checked: r2, loose: false, text: u2 }), k2.raw += n2;
      }
      k2.items[k2.items.length - 1].raw = n2.trimRight(), k2.items[k2.items.length - 1].text = u2.trimRight(), k2.raw = k2.raw.trimRight();
      const m2 = k2.items.length;
      for (l2 = 0; l2 < m2; l2++)
        if (this.lexer.state.top = false, k2.items[l2].tokens = this.lexer.blockTokens(k2.items[l2].text, []), !k2.loose) {
          const e3 = k2.items[l2].tokens.filter((e4) => "space" === e4.type), t3 = e3.length > 0 && e3.some((e4) => /\n.*\n/.test(e4.raw));
          k2.loose = t3;
        }
      if (k2.loose)
        for (l2 = 0; l2 < m2; l2++)
          k2.items[l2].loose = true;
      return k2;
    }
  }
  html(e2) {
    const t2 = this.rules.block.html.exec(e2);
    if (t2) {
      const e3 = { type: "html", raw: t2[0], pre: !this.options.sanitizer && ("pre" === t2[1] || "script" === t2[1] || "style" === t2[1]), text: t2[0] };
      if (this.options.sanitize) {
        const n2 = this.options.sanitizer ? this.options.sanitizer(t2[0]) : a(t2[0]);
        e3.type = "paragraph", e3.text = n2, e3.tokens = this.lexer.inline(n2);
      }
      return e3;
    }
  }
  def(e2) {
    const t2 = this.rules.block.def.exec(e2);
    if (t2) {
      const e3 = t2[1].toLowerCase().replace(/\s+/g, " "), n2 = t2[2] ? t2[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", s2 = t2[3] ? t2[3].substring(1, t2[3].length - 1).replace(this.rules.inline._escapes, "$1") : t2[3];
      return { type: "def", tag: e3, raw: t2[0], href: n2, title: s2 };
    }
  }
  table(e2) {
    const t2 = this.rules.block.table.exec(e2);
    if (t2) {
      const e3 = { type: "table", header: _(t2[1]).map((e4) => ({ text: e4 })), align: t2[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: t2[3] && t2[3].trim() ? t2[3].replace(/\n[ \t]*$/, "").split("\n") : [] };
      if (e3.header.length === e3.align.length) {
        e3.raw = t2[0];
        let n2, s2, r2, i2, l2 = e3.align.length;
        for (n2 = 0; n2 < l2; n2++)
          /^ *-+: *$/.test(e3.align[n2]) ? e3.align[n2] = "right" : /^ *:-+: *$/.test(e3.align[n2]) ? e3.align[n2] = "center" : /^ *:-+ *$/.test(e3.align[n2]) ? e3.align[n2] = "left" : e3.align[n2] = null;
        for (l2 = e3.rows.length, n2 = 0; n2 < l2; n2++)
          e3.rows[n2] = _(e3.rows[n2], e3.header.length).map((e4) => ({ text: e4 }));
        for (l2 = e3.header.length, s2 = 0; s2 < l2; s2++)
          e3.header[s2].tokens = this.lexer.inline(e3.header[s2].text);
        for (l2 = e3.rows.length, s2 = 0; s2 < l2; s2++)
          for (i2 = e3.rows[s2], r2 = 0; r2 < i2.length; r2++)
            i2[r2].tokens = this.lexer.inline(i2[r2].text);
        return e3;
      }
    }
  }
  lheading(e2) {
    const t2 = this.rules.block.lheading.exec(e2);
    if (t2)
      return { type: "heading", raw: t2[0], depth: "=" === t2[2].charAt(0) ? 1 : 2, text: t2[1], tokens: this.lexer.inline(t2[1]) };
  }
  paragraph(e2) {
    const t2 = this.rules.block.paragraph.exec(e2);
    if (t2) {
      const e3 = "\n" === t2[1].charAt(t2[1].length - 1) ? t2[1].slice(0, -1) : t2[1];
      return { type: "paragraph", raw: t2[0], text: e3, tokens: this.lexer.inline(e3) };
    }
  }
  text(e2) {
    const t2 = this.rules.block.text.exec(e2);
    if (t2)
      return { type: "text", raw: t2[0], text: t2[0], tokens: this.lexer.inline(t2[0]) };
  }
  escape(e2) {
    const t2 = this.rules.inline.escape.exec(e2);
    if (t2)
      return { type: "escape", raw: t2[0], text: a(t2[1]) };
  }
  tag(e2) {
    const t2 = this.rules.inline.tag.exec(e2);
    if (t2)
      return !this.lexer.state.inLink && /^<a /i.test(t2[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t2[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t2[0]) && (this.lexer.state.inRawBlock = false), { type: this.options.sanitize ? "text" : "html", raw: t2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t2[0]) : a(t2[0]) : t2[0] };
  }
  link(e2) {
    const t2 = this.rules.inline.link.exec(e2);
    if (t2) {
      const e3 = t2[2].trim();
      if (!this.options.pedantic && /^</.test(e3)) {
        if (!/>$/.test(e3))
          return;
        const t3 = y(e3.slice(0, -1), "\\");
        if ((e3.length - t3.length) % 2 == 0)
          return;
      } else {
        const e4 = function(e5, t3) {
          if (-1 === e5.indexOf(t3[1]))
            return -1;
          const n3 = e5.length;
          let s3 = 0, r2 = 0;
          for (; r2 < n3; r2++)
            if ("\\" === e5[r2])
              r2++;
            else if (e5[r2] === t3[0])
              s3++;
            else if (e5[r2] === t3[1] && (s3--, s3 < 0))
              return r2;
          return -1;
        }(t2[2], "()");
        if (e4 > -1) {
          const n3 = (0 === t2[0].indexOf("!") ? 5 : 4) + t2[1].length + e4;
          t2[2] = t2[2].substring(0, e4), t2[0] = t2[0].substring(0, n3).trim(), t2[3] = "";
        }
      }
      let n2 = t2[2], s2 = "";
      if (this.options.pedantic) {
        const e4 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n2);
        e4 && (n2 = e4[1], s2 = e4[3]);
      } else
        s2 = t2[3] ? t2[3].slice(1, -1) : "";
      return n2 = n2.trim(), /^</.test(n2) && (n2 = this.options.pedantic && !/>$/.test(e3) ? n2.slice(1) : n2.slice(1, -1)), z(t2, { href: n2 ? n2.replace(this.rules.inline._escapes, "$1") : n2, title: s2 ? s2.replace(this.rules.inline._escapes, "$1") : s2 }, t2[0], this.lexer);
    }
  }
  reflink(e2, t2) {
    let n2;
    if ((n2 = this.rules.inline.reflink.exec(e2)) || (n2 = this.rules.inline.nolink.exec(e2))) {
      let e3 = (n2[2] || n2[1]).replace(/\s+/g, " ");
      if (e3 = t2[e3.toLowerCase()], !e3) {
        const e4 = n2[0].charAt(0);
        return { type: "text", raw: e4, text: e4 };
      }
      return z(n2, e3, n2[0], this.lexer);
    }
  }
  emStrong(e2, t2, n2 = "") {
    let s2 = this.rules.inline.emStrong.lDelim.exec(e2);
    if (!s2)
      return;
    if (s2[3] && n2.match(/[\p{L}\p{N}]/u))
      return;
    const r2 = s2[1] || s2[2] || "";
    if (!r2 || r2 && ("" === n2 || this.rules.inline.punctuation.exec(n2))) {
      const n3 = s2[0].length - 1;
      let r3, i2, l2 = n3, o2 = 0;
      const a2 = "*" === s2[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (a2.lastIndex = 0, t2 = t2.slice(-1 * e2.length + n3); null != (s2 = a2.exec(t2)); ) {
        if (r3 = s2[1] || s2[2] || s2[3] || s2[4] || s2[5] || s2[6], !r3)
          continue;
        if (i2 = r3.length, s2[3] || s2[4]) {
          l2 += i2;
          continue;
        }
        if ((s2[5] || s2[6]) && n3 % 3 && !((n3 + i2) % 3)) {
          o2 += i2;
          continue;
        }
        if (l2 -= i2, l2 > 0)
          continue;
        i2 = Math.min(i2, i2 + l2 + o2);
        const t3 = e2.slice(0, n3 + s2.index + (s2[0].length - r3.length) + i2);
        if (Math.min(n3, i2) % 2) {
          const e3 = t3.slice(1, -1);
          return { type: "em", raw: t3, text: e3, tokens: this.lexer.inlineTokens(e3) };
        }
        const a3 = t3.slice(2, -2);
        return { type: "strong", raw: t3, text: a3, tokens: this.lexer.inlineTokens(a3) };
      }
    }
  }
  codespan(e2) {
    const t2 = this.rules.inline.code.exec(e2);
    if (t2) {
      let e3 = t2[2].replace(/\n/g, " ");
      const n2 = /[^ ]/.test(e3), s2 = /^ /.test(e3) && / $/.test(e3);
      return n2 && s2 && (e3 = e3.substring(1, e3.length - 1)), e3 = a(e3, true), { type: "codespan", raw: t2[0], text: e3 };
    }
  }
  br(e2) {
    const t2 = this.rules.inline.br.exec(e2);
    if (t2)
      return { type: "br", raw: t2[0] };
  }
  del(e2) {
    const t2 = this.rules.inline.del.exec(e2);
    if (t2)
      return { type: "del", raw: t2[0], text: t2[2], tokens: this.lexer.inlineTokens(t2[2]) };
  }
  autolink(e2, t2) {
    const n2 = this.rules.inline.autolink.exec(e2);
    if (n2) {
      let e3, s2;
      return "@" === n2[2] ? (e3 = a(this.options.mangle ? t2(n2[1]) : n2[1]), s2 = "mailto:" + e3) : (e3 = a(n2[1]), s2 = e3), { type: "link", raw: n2[0], text: e3, href: s2, tokens: [{ type: "text", raw: e3, text: e3 }] };
    }
  }
  url(e2, t2) {
    let n2;
    if (n2 = this.rules.inline.url.exec(e2)) {
      let e3, s2;
      if ("@" === n2[2])
        e3 = a(this.options.mangle ? t2(n2[0]) : n2[0]), s2 = "mailto:" + e3;
      else {
        let t3;
        do {
          t3 = n2[0], n2[0] = this.rules.inline._backpedal.exec(n2[0])[0];
        } while (t3 !== n2[0]);
        e3 = a(n2[0]), s2 = "www." === n2[1] ? "http://" + n2[0] : n2[0];
      }
      return { type: "link", raw: n2[0], text: e3, href: s2, tokens: [{ type: "text", raw: e3, text: e3 }] };
    }
  }
  inlineText(e2, t2) {
    const n2 = this.rules.inline.text.exec(e2);
    if (n2) {
      let e3;
      return e3 = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n2[0]) : a(n2[0]) : n2[0] : a(this.options.smartypants ? t2(n2[0]) : n2[0]), { type: "text", raw: n2[0], text: e3 };
    }
  }
}
const R = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: w, lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
R.def = u(R.def).replace("label", R._label).replace("title", R._title).getRegex(), R.bullet = /(?:[*+-]|\d{1,9}[.)])/, R.listItemStart = u(/^( *)(bull) */).replace("bull", R.bullet).getRegex(), R.list = u(R.list).replace(/bull/g, R.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + R.def.source + ")").getRegex(), R._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", R._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, R.html = u(R.html, "i").replace("comment", R._comment).replace("tag", R._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), R.paragraph = u(R._paragraph).replace("hr", R.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", R._tag).getRegex(), R.blockquote = u(R.blockquote).replace("paragraph", R.paragraph).getRegex(), R.normal = { ...R }, R.gfm = { ...R.normal, table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }, R.gfm.table = u(R.gfm.table).replace("hr", R.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", R._tag).getRegex(), R.gfm.paragraph = u(R._paragraph).replace("hr", R.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", R.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", R._tag).getRegex(), R.pedantic = { ...R.normal, html: u(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", R._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: w, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: u(R.normal._paragraph).replace("hr", R.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", R.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() };
const T = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: w, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/, rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: w, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/ };
function A(e2) {
  return e2.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function E(e2) {
  let t2, n2, s2 = "";
  const r2 = e2.length;
  for (t2 = 0; t2 < r2; t2++)
    n2 = e2.charCodeAt(t2), Math.random() > 0.5 && (n2 = "x" + n2.toString(16)), s2 += "&#" + n2 + ";";
  return s2;
}
T._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", T.punctuation = u(T.punctuation).replace(/punctuation/g, T._punctuation).getRegex(), T.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, T.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g, T._comment = u(R._comment).replace("(?:-->|$)", "-->").getRegex(), T.emStrong.lDelim = u(T.emStrong.lDelim).replace(/punct/g, T._punctuation).getRegex(), T.emStrong.rDelimAst = u(T.emStrong.rDelimAst, "g").replace(/punct/g, T._punctuation).getRegex(), T.emStrong.rDelimUnd = u(T.emStrong.rDelimUnd, "g").replace(/punct/g, T._punctuation).getRegex(), T._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, T._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, T._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, T.autolink = u(T.autolink).replace("scheme", T._scheme).replace("email", T._email).getRegex(), T._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, T.tag = u(T.tag).replace("comment", T._comment).replace("attribute", T._attribute).getRegex(), T._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, T._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, T._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, T.link = u(T.link).replace("label", T._label).replace("href", T._href).replace("title", T._title).getRegex(), T.reflink = u(T.reflink).replace("label", T._label).replace("ref", R._label).getRegex(), T.nolink = u(T.nolink).replace("ref", R._label).getRegex(), T.reflinkSearch = u(T.reflinkSearch, "g").replace("reflink", T.reflink).replace("nolink", T.nolink).getRegex(), T.normal = { ...T }, T.pedantic = { ...T.normal, strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: u(/^!?\[(label)\]\((.*?)\)/).replace("label", T._label).getRegex(), reflink: u(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", T._label).getRegex() }, T.gfm = { ...T.normal, escape: u(T.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, T.gfm.url = u(T.gfm.url, "i").replace("email", T.gfm._extended_email).getRegex(), T.breaks = { ...T.gfm, br: u(T.br).replace("{2,}", "*").getRegex(), text: u(T.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
class v {
  constructor(e2) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e2 || t, this.options.tokenizer = this.options.tokenizer || new S(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    const n2 = { block: R.normal, inline: T.normal };
    this.options.pedantic ? (n2.block = R.pedantic, n2.inline = T.pedantic) : this.options.gfm && (n2.block = R.gfm, this.options.breaks ? n2.inline = T.breaks : n2.inline = T.gfm), this.tokenizer.rules = n2;
  }
  static get rules() {
    return { block: R, inline: T };
  }
  static lex(e2, t2) {
    return new v(t2).lex(e2);
  }
  static lexInline(e2, t2) {
    return new v(t2).inlineTokens(e2);
  }
  lex(e2) {
    let t2;
    for (e2 = e2.replace(/\r\n|\r/g, "\n"), this.blockTokens(e2, this.tokens); t2 = this.inlineQueue.shift(); )
      this.inlineTokens(t2.src, t2.tokens);
    return this.tokens;
  }
  blockTokens(e2, t2 = []) {
    let n2, s2, r2, i2;
    for (e2 = this.options.pedantic ? e2.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e2.replace(/^( *)(\t+)/gm, (e3, t3, n3) => t3 + "    ".repeat(n3.length)); e2; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((s3) => !!(n2 = s3.call({ lexer: this }, e2, t2)) && (e2 = e2.substring(n2.raw.length), t2.push(n2), true))))
        if (n2 = this.tokenizer.space(e2))
          e2 = e2.substring(n2.raw.length), 1 === n2.raw.length && t2.length > 0 ? t2[t2.length - 1].raw += "\n" : t2.push(n2);
        else if (n2 = this.tokenizer.code(e2))
          e2 = e2.substring(n2.raw.length), s2 = t2[t2.length - 1], !s2 || "paragraph" !== s2.type && "text" !== s2.type ? t2.push(n2) : (s2.raw += "\n" + n2.raw, s2.text += "\n" + n2.text, this.inlineQueue[this.inlineQueue.length - 1].src = s2.text);
        else if (n2 = this.tokenizer.fences(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.heading(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.hr(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.blockquote(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.list(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.html(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.def(e2))
          e2 = e2.substring(n2.raw.length), s2 = t2[t2.length - 1], !s2 || "paragraph" !== s2.type && "text" !== s2.type ? this.tokens.links[n2.tag] || (this.tokens.links[n2.tag] = { href: n2.href, title: n2.title }) : (s2.raw += "\n" + n2.raw, s2.text += "\n" + n2.raw, this.inlineQueue[this.inlineQueue.length - 1].src = s2.text);
        else if (n2 = this.tokenizer.table(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.lheading(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else {
          if (r2 = e2, this.options.extensions && this.options.extensions.startBlock) {
            let t3 = 1 / 0;
            const n3 = e2.slice(1);
            let s3;
            this.options.extensions.startBlock.forEach(function(e3) {
              s3 = e3.call({ lexer: this }, n3), "number" == typeof s3 && s3 >= 0 && (t3 = Math.min(t3, s3));
            }), t3 < 1 / 0 && t3 >= 0 && (r2 = e2.substring(0, t3 + 1));
          }
          if (this.state.top && (n2 = this.tokenizer.paragraph(r2)))
            s2 = t2[t2.length - 1], i2 && "paragraph" === s2.type ? (s2.raw += "\n" + n2.raw, s2.text += "\n" + n2.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s2.text) : t2.push(n2), i2 = r2.length !== e2.length, e2 = e2.substring(n2.raw.length);
          else if (n2 = this.tokenizer.text(e2))
            e2 = e2.substring(n2.raw.length), s2 = t2[t2.length - 1], s2 && "text" === s2.type ? (s2.raw += "\n" + n2.raw, s2.text += "\n" + n2.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s2.text) : t2.push(n2);
          else if (e2) {
            const t3 = "Infinite loop on byte: " + e2.charCodeAt(0);
            if (this.options.silent) {
              console.error(t3);
              break;
            }
            throw new Error(t3);
          }
        }
    return this.state.top = true, t2;
  }
  inline(e2, t2 = []) {
    return this.inlineQueue.push({ src: e2, tokens: t2 }), t2;
  }
  inlineTokens(e2, t2 = []) {
    let n2, s2, r2, i2, l2, o2, a2 = e2;
    if (this.tokens.links) {
      const e3 = Object.keys(this.tokens.links);
      if (e3.length > 0)
        for (; null != (i2 = this.tokenizer.rules.inline.reflinkSearch.exec(a2)); )
          e3.includes(i2[0].slice(i2[0].lastIndexOf("[") + 1, -1)) && (a2 = a2.slice(0, i2.index) + "[" + $("a", i2[0].length - 2) + "]" + a2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; null != (i2 = this.tokenizer.rules.inline.blockSkip.exec(a2)); )
      a2 = a2.slice(0, i2.index) + "[" + $("a", i2[0].length - 2) + "]" + a2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; null != (i2 = this.tokenizer.rules.inline.escapedEmSt.exec(a2)); )
      a2 = a2.slice(0, i2.index + i2[0].length - 2) + "++" + a2.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    for (; e2; )
      if (l2 || (o2 = ""), l2 = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((s3) => !!(n2 = s3.call({ lexer: this }, e2, t2)) && (e2 = e2.substring(n2.raw.length), t2.push(n2), true))))
        if (n2 = this.tokenizer.escape(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.tag(e2))
          e2 = e2.substring(n2.raw.length), s2 = t2[t2.length - 1], s2 && "text" === n2.type && "text" === s2.type ? (s2.raw += n2.raw, s2.text += n2.text) : t2.push(n2);
        else if (n2 = this.tokenizer.link(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.reflink(e2, this.tokens.links))
          e2 = e2.substring(n2.raw.length), s2 = t2[t2.length - 1], s2 && "text" === n2.type && "text" === s2.type ? (s2.raw += n2.raw, s2.text += n2.text) : t2.push(n2);
        else if (n2 = this.tokenizer.emStrong(e2, a2, o2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.codespan(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.br(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.del(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.autolink(e2, E))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (this.state.inLink || !(n2 = this.tokenizer.url(e2, E))) {
          if (r2 = e2, this.options.extensions && this.options.extensions.startInline) {
            let t3 = 1 / 0;
            const n3 = e2.slice(1);
            let s3;
            this.options.extensions.startInline.forEach(function(e3) {
              s3 = e3.call({ lexer: this }, n3), "number" == typeof s3 && s3 >= 0 && (t3 = Math.min(t3, s3));
            }), t3 < 1 / 0 && t3 >= 0 && (r2 = e2.substring(0, t3 + 1));
          }
          if (n2 = this.tokenizer.inlineText(r2, A))
            e2 = e2.substring(n2.raw.length), "_" !== n2.raw.slice(-1) && (o2 = n2.raw.slice(-1)), l2 = true, s2 = t2[t2.length - 1], s2 && "text" === s2.type ? (s2.raw += n2.raw, s2.text += n2.text) : t2.push(n2);
          else if (e2) {
            const t3 = "Infinite loop on byte: " + e2.charCodeAt(0);
            if (this.options.silent) {
              console.error(t3);
              break;
            }
            throw new Error(t3);
          }
        } else
          e2 = e2.substring(n2.raw.length), t2.push(n2);
    return t2;
  }
}
class I {
  constructor(e2) {
    this.options = e2 || t;
  }
  code(e2, t2, n2) {
    const s2 = (t2 || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const t3 = this.options.highlight(e2, s2);
      null != t3 && t3 !== e2 && (n2 = true, e2 = t3);
    }
    return e2 = e2.replace(/\n$/, "") + "\n", s2 ? '<pre><code class="' + this.options.langPrefix + a(s2) + '">' + (n2 ? e2 : a(e2, true)) + "</code></pre>\n" : "<pre><code>" + (n2 ? e2 : a(e2, true)) + "</code></pre>\n";
  }
  blockquote(e2) {
    return `<blockquote>
${e2}</blockquote>
`;
  }
  html(e2) {
    return e2;
  }
  heading(e2, t2, n2, s2) {
    if (this.options.headerIds) {
      return `<h${t2} id="${this.options.headerPrefix + s2.slug(n2)}">${e2}</h${t2}>
`;
    }
    return `<h${t2}>${e2}</h${t2}>
`;
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(e2, t2, n2) {
    const s2 = t2 ? "ol" : "ul";
    return "<" + s2 + (t2 && 1 !== n2 ? ' start="' + n2 + '"' : "") + ">\n" + e2 + "</" + s2 + ">\n";
  }
  listitem(e2) {
    return `<li>${e2}</li>
`;
  }
  checkbox(e2) {
    return "<input " + (e2 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(e2) {
    return `<p>${e2}</p>
`;
  }
  table(e2, t2) {
    return t2 && (t2 = `<tbody>${t2}</tbody>`), "<table>\n<thead>\n" + e2 + "</thead>\n" + t2 + "</table>\n";
  }
  tablerow(e2) {
    return `<tr>
${e2}</tr>
`;
  }
  tablecell(e2, t2) {
    const n2 = t2.header ? "th" : "td";
    return (t2.align ? `<${n2} align="${t2.align}">` : `<${n2}>`) + e2 + `</${n2}>
`;
  }
  strong(e2) {
    return `<strong>${e2}</strong>`;
  }
  em(e2) {
    return `<em>${e2}</em>`;
  }
  codespan(e2) {
    return `<code>${e2}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(e2) {
    return `<del>${e2}</del>`;
  }
  link(e2, t2, n2) {
    if (null === (e2 = f(this.options.sanitize, this.options.baseUrl, e2)))
      return n2;
    let s2 = '<a href="' + e2 + '"';
    return t2 && (s2 += ' title="' + t2 + '"'), s2 += ">" + n2 + "</a>", s2;
  }
  image(e2, t2, n2) {
    if (null === (e2 = f(this.options.sanitize, this.options.baseUrl, e2)))
      return n2;
    let s2 = `<img src="${e2}" alt="${n2}"`;
    return t2 && (s2 += ` title="${t2}"`), s2 += this.options.xhtml ? "/>" : ">", s2;
  }
  text(e2) {
    return e2;
  }
}
class q {
  strong(e2) {
    return e2;
  }
  em(e2) {
    return e2;
  }
  codespan(e2) {
    return e2;
  }
  del(e2) {
    return e2;
  }
  html(e2) {
    return e2;
  }
  text(e2) {
    return e2;
  }
  link(e2, t2, n2) {
    return "" + n2;
  }
  image(e2, t2, n2) {
    return "" + n2;
  }
  br() {
    return "";
  }
}
class L {
  constructor() {
    this.seen = {};
  }
  serialize(e2) {
    return e2.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(e2, t2) {
    let n2 = e2, s2 = 0;
    if (this.seen.hasOwnProperty(n2)) {
      s2 = this.seen[e2];
      do {
        s2++, n2 = e2 + "-" + s2;
      } while (this.seen.hasOwnProperty(n2));
    }
    return t2 || (this.seen[e2] = s2, this.seen[n2] = 0), n2;
  }
  slug(e2, t2 = {}) {
    const n2 = this.serialize(e2);
    return this.getNextSafeSlug(n2, t2.dryrun);
  }
}
class C {
  constructor(e2) {
    this.options = e2 || t, this.options.renderer = this.options.renderer || new I(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new q(), this.slugger = new L();
  }
  static parse(e2, t2) {
    return new C(t2).parse(e2);
  }
  static parseInline(e2, t2) {
    return new C(t2).parseInline(e2);
  }
  parse(e2, t2 = true) {
    let n2, s2, r2, i2, l2, o2, a2, c2, p2, u2, g2, d2, f2, k2, x2, m2, b2, w2, _2, y2 = "";
    const $2 = e2.length;
    for (n2 = 0; n2 < $2; n2++)
      if (u2 = e2[n2], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[u2.type] && (_2 = this.options.extensions.renderers[u2.type].call({ parser: this }, u2), false !== _2 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(u2.type)))
        y2 += _2 || "";
      else
        switch (u2.type) {
          case "space":
            continue;
          case "hr":
            y2 += this.renderer.hr();
            continue;
          case "heading":
            y2 += this.renderer.heading(this.parseInline(u2.tokens), u2.depth, h(this.parseInline(u2.tokens, this.textRenderer)), this.slugger);
            continue;
          case "code":
            y2 += this.renderer.code(u2.text, u2.lang, u2.escaped);
            continue;
          case "table":
            for (c2 = "", a2 = "", i2 = u2.header.length, s2 = 0; s2 < i2; s2++)
              a2 += this.renderer.tablecell(this.parseInline(u2.header[s2].tokens), { header: true, align: u2.align[s2] });
            for (c2 += this.renderer.tablerow(a2), p2 = "", i2 = u2.rows.length, s2 = 0; s2 < i2; s2++) {
              for (o2 = u2.rows[s2], a2 = "", l2 = o2.length, r2 = 0; r2 < l2; r2++)
                a2 += this.renderer.tablecell(this.parseInline(o2[r2].tokens), { header: false, align: u2.align[r2] });
              p2 += this.renderer.tablerow(a2);
            }
            y2 += this.renderer.table(c2, p2);
            continue;
          case "blockquote":
            p2 = this.parse(u2.tokens), y2 += this.renderer.blockquote(p2);
            continue;
          case "list":
            for (g2 = u2.ordered, d2 = u2.start, f2 = u2.loose, i2 = u2.items.length, p2 = "", s2 = 0; s2 < i2; s2++)
              x2 = u2.items[s2], m2 = x2.checked, b2 = x2.task, k2 = "", x2.task && (w2 = this.renderer.checkbox(m2), f2 ? x2.tokens.length > 0 && "paragraph" === x2.tokens[0].type ? (x2.tokens[0].text = w2 + " " + x2.tokens[0].text, x2.tokens[0].tokens && x2.tokens[0].tokens.length > 0 && "text" === x2.tokens[0].tokens[0].type && (x2.tokens[0].tokens[0].text = w2 + " " + x2.tokens[0].tokens[0].text)) : x2.tokens.unshift({ type: "text", text: w2 }) : k2 += w2), k2 += this.parse(x2.tokens, f2), p2 += this.renderer.listitem(k2, b2, m2);
            y2 += this.renderer.list(p2, g2, d2);
            continue;
          case "html":
            y2 += this.renderer.html(u2.text);
            continue;
          case "paragraph":
            y2 += this.renderer.paragraph(this.parseInline(u2.tokens));
            continue;
          case "text":
            for (p2 = u2.tokens ? this.parseInline(u2.tokens) : u2.text; n2 + 1 < $2 && "text" === e2[n2 + 1].type; )
              u2 = e2[++n2], p2 += "\n" + (u2.tokens ? this.parseInline(u2.tokens) : u2.text);
            y2 += t2 ? this.renderer.paragraph(p2) : p2;
            continue;
          default: {
            const e3 = 'Token with "' + u2.type + '" type was not found.';
            if (this.options.silent)
              return void console.error(e3);
            throw new Error(e3);
          }
        }
    return y2;
  }
  parseInline(e2, t2) {
    t2 = t2 || this.renderer;
    let n2, s2, r2, i2 = "";
    const l2 = e2.length;
    for (n2 = 0; n2 < l2; n2++)
      if (s2 = e2[n2], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s2.type] && (r2 = this.options.extensions.renderers[s2.type].call({ parser: this }, s2), false !== r2 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s2.type)))
        i2 += r2 || "";
      else
        switch (s2.type) {
          case "escape":
          case "text":
            i2 += t2.text(s2.text);
            break;
          case "html":
            i2 += t2.html(s2.text);
            break;
          case "link":
            i2 += t2.link(s2.href, s2.title, this.parseInline(s2.tokens, t2));
            break;
          case "image":
            i2 += t2.image(s2.href, s2.title, s2.text);
            break;
          case "strong":
            i2 += t2.strong(this.parseInline(s2.tokens, t2));
            break;
          case "em":
            i2 += t2.em(this.parseInline(s2.tokens, t2));
            break;
          case "codespan":
            i2 += t2.codespan(s2.text);
            break;
          case "br":
            i2 += t2.br();
            break;
          case "del":
            i2 += t2.del(this.parseInline(s2.tokens, t2));
            break;
          default: {
            const e3 = 'Token with "' + s2.type + '" type was not found.';
            if (this.options.silent)
              return void console.error(e3);
            throw new Error(e3);
          }
        }
    return i2;
  }
}
class Z {
  constructor(e2) {
    this.options = e2 || t;
  }
  preprocess(e2) {
    return e2;
  }
  postprocess(e2) {
    return e2;
  }
}
__publicField(Z, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess"]));
function P(e2, t2) {
  return (n2, s2, r2) => {
    "function" == typeof s2 && (r2 = s2, s2 = null);
    const i2 = { ...s2 }, l2 = /* @__PURE__ */ function(e3, t3, n3) {
      return (s3) => {
        if (s3.message += "\nPlease report this to https://github.com/markedjs/marked.", e3) {
          const e4 = "<p>An error occurred:</p><pre>" + a(s3.message + "", true) + "</pre>";
          return t3 ? Promise.resolve(e4) : n3 ? void n3(null, e4) : e4;
        }
        if (t3)
          return Promise.reject(s3);
        if (!n3)
          throw s3;
        n3(s3);
      };
    }((s2 = { ...M.defaults, ...i2 }).silent, s2.async, r2);
    if (null == n2)
      return l2(new Error("marked(): input parameter is undefined or null"));
    if ("string" != typeof n2)
      return l2(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n2) + ", string expected"));
    if (function(e3) {
      e3 && e3.sanitize && !e3.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
    }(s2), s2.hooks && (s2.hooks.options = s2), r2) {
      const i3 = s2.highlight;
      let o2;
      try {
        s2.hooks && (n2 = s2.hooks.preprocess(n2)), o2 = e2(n2, s2);
      } catch (e3) {
        return l2(e3);
      }
      const a2 = function(e3) {
        let n3;
        if (!e3)
          try {
            s2.walkTokens && M.walkTokens(o2, s2.walkTokens), n3 = t2(o2, s2), s2.hooks && (n3 = s2.hooks.postprocess(n3));
          } catch (t3) {
            e3 = t3;
          }
        return s2.highlight = i3, e3 ? l2(e3) : r2(null, n3);
      };
      if (!i3 || i3.length < 3)
        return a2();
      if (delete s2.highlight, !o2.length)
        return a2();
      let c2 = 0;
      return M.walkTokens(o2, function(e3) {
        "code" === e3.type && (c2++, setTimeout(() => {
          i3(e3.text, e3.lang, function(t3, n3) {
            if (t3)
              return a2(t3);
            null != n3 && n3 !== e3.text && (e3.text = n3, e3.escaped = true), c2--, 0 === c2 && a2();
          });
        }, 0));
      }), void (0 === c2 && a2());
    }
    if (s2.async)
      return Promise.resolve(s2.hooks ? s2.hooks.preprocess(n2) : n2).then((t3) => e2(t3, s2)).then((e3) => s2.walkTokens ? Promise.all(M.walkTokens(e3, s2.walkTokens)).then(() => e3) : e3).then((e3) => t2(e3, s2)).then((e3) => s2.hooks ? s2.hooks.postprocess(e3) : e3).catch(l2);
    try {
      s2.hooks && (n2 = s2.hooks.preprocess(n2));
      const r3 = e2(n2, s2);
      s2.walkTokens && M.walkTokens(r3, s2.walkTokens);
      let i3 = t2(r3, s2);
      return s2.hooks && (i3 = s2.hooks.postprocess(i3)), i3;
    } catch (e3) {
      return l2(e3);
    }
  };
}
function M(e2, t2, n2) {
  return P(v.lex, C.parse)(e2, t2, n2);
}
M.options = M.setOptions = function(e2) {
  var n2;
  return M.defaults = { ...M.defaults, ...e2 }, n2 = M.defaults, t = n2, M;
}, M.getDefaults = e, M.defaults = t, M.use = function(...e2) {
  const t2 = M.defaults.extensions || { renderers: {}, childTokens: {} };
  e2.forEach((e3) => {
    const n2 = { ...e3 };
    if (n2.async = M.defaults.async || n2.async || false, e3.extensions && (e3.extensions.forEach((e4) => {
      if (!e4.name)
        throw new Error("extension name required");
      if (e4.renderer) {
        const n3 = t2.renderers[e4.name];
        t2.renderers[e4.name] = n3 ? function(...t3) {
          let s2 = e4.renderer.apply(this, t3);
          return false === s2 && (s2 = n3.apply(this, t3)), s2;
        } : e4.renderer;
      }
      if (e4.tokenizer) {
        if (!e4.level || "block" !== e4.level && "inline" !== e4.level)
          throw new Error("extension level must be 'block' or 'inline'");
        t2[e4.level] ? t2[e4.level].unshift(e4.tokenizer) : t2[e4.level] = [e4.tokenizer], e4.start && ("block" === e4.level ? t2.startBlock ? t2.startBlock.push(e4.start) : t2.startBlock = [e4.start] : "inline" === e4.level && (t2.startInline ? t2.startInline.push(e4.start) : t2.startInline = [e4.start]));
      }
      e4.childTokens && (t2.childTokens[e4.name] = e4.childTokens);
    }), n2.extensions = t2), e3.renderer) {
      const t3 = M.defaults.renderer || new I();
      for (const n3 in e3.renderer) {
        const s2 = t3[n3];
        t3[n3] = (...r2) => {
          let i2 = e3.renderer[n3].apply(t3, r2);
          return false === i2 && (i2 = s2.apply(t3, r2)), i2;
        };
      }
      n2.renderer = t3;
    }
    if (e3.tokenizer) {
      const t3 = M.defaults.tokenizer || new S();
      for (const n3 in e3.tokenizer) {
        const s2 = t3[n3];
        t3[n3] = (...r2) => {
          let i2 = e3.tokenizer[n3].apply(t3, r2);
          return false === i2 && (i2 = s2.apply(t3, r2)), i2;
        };
      }
      n2.tokenizer = t3;
    }
    if (e3.hooks) {
      const t3 = M.defaults.hooks || new Z();
      for (const n3 in e3.hooks) {
        const s2 = t3[n3];
        Z.passThroughHooks.has(n3) ? t3[n3] = (r2) => {
          if (M.defaults.async)
            return Promise.resolve(e3.hooks[n3].call(t3, r2)).then((e4) => s2.call(t3, e4));
          const i2 = e3.hooks[n3].call(t3, r2);
          return s2.call(t3, i2);
        } : t3[n3] = (...r2) => {
          let i2 = e3.hooks[n3].apply(t3, r2);
          return false === i2 && (i2 = s2.apply(t3, r2)), i2;
        };
      }
      n2.hooks = t3;
    }
    if (e3.walkTokens) {
      const t3 = M.defaults.walkTokens;
      n2.walkTokens = function(n3) {
        let s2 = [];
        return s2.push(e3.walkTokens.call(this, n3)), t3 && (s2 = s2.concat(t3.call(this, n3))), s2;
      };
    }
    M.setOptions(n2);
  });
}, M.walkTokens = function(e2, t2) {
  let n2 = [];
  for (const s2 of e2)
    switch (n2 = n2.concat(t2.call(M, s2)), s2.type) {
      case "table":
        for (const e3 of s2.header)
          n2 = n2.concat(M.walkTokens(e3.tokens, t2));
        for (const e3 of s2.rows)
          for (const s3 of e3)
            n2 = n2.concat(M.walkTokens(s3.tokens, t2));
        break;
      case "list":
        n2 = n2.concat(M.walkTokens(s2.items, t2));
        break;
      default:
        M.defaults.extensions && M.defaults.extensions.childTokens && M.defaults.extensions.childTokens[s2.type] ? M.defaults.extensions.childTokens[s2.type].forEach(function(e3) {
          n2 = n2.concat(M.walkTokens(s2[e3], t2));
        }) : s2.tokens && (n2 = n2.concat(M.walkTokens(s2.tokens, t2)));
    }
  return n2;
}, M.parseInline = P(v.lexInline, C.parseInline), M.Parser = C, M.parser = C.parse, M.Renderer = I, M.TextRenderer = q, M.Lexer = v, M.lexer = v.lex, M.Tokenizer = S, M.Slugger = L, M.Hooks = Z, M.parse = M, M.options, M.setOptions, M.use, M.walkTokens, M.parseInline, C.parse, v.lex;
/*!
 * The reveal.js markdown plugin. Handles parsing of
 * markdown inside of presentations as well as loading
 * of external markdown documents.
 */
const N = "__SCRIPT_END__", O = /\[\s*((\d*):)?\s*([\s\d,|-]*)\]/, D = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, B = () => {
  let e2;
  function t2(e3) {
    let t3 = (e3.querySelector("[data-template]") || e3.querySelector("script") || e3).textContent;
    t3 = t3.replace(new RegExp(N, "g"), "<\/script>");
    const n3 = t3.match(/^\n?(\s*)/)[1].length, s3 = t3.match(/^\n?(\t*)/)[1].length;
    return s3 > 0 ? t3 = t3.replace(new RegExp("\\n?\\t{" + s3 + "}(.*)", "g"), function(e4, t4) {
      return "\n" + t4;
    }) : n3 > 1 && (t3 = t3.replace(new RegExp("\\n? {" + n3 + "}(.*)", "g"), function(e4, t4) {
      return "\n" + t4;
    })), t3;
  }
  function n2(e3) {
    const t3 = e3.attributes, n3 = [];
    for (let e4 = 0, s3 = t3.length; e4 < s3; e4++) {
      const s4 = t3[e4].name, r3 = t3[e4].value;
      /data\-(markdown|separator|vertical|notes)/gi.test(s4) || (r3 ? n3.push(s4 + '="' + r3 + '"') : n3.push(s4));
    }
    return n3.join(" ");
  }
  function s2(t3) {
    var _a;
    const n3 = (_a = e2 == null ? void 0 : e2.getConfig) == null ? void 0 : _a.call(e2).markdown;
    return (t3 = t3 || {}).separator = t3.separator || (n3 == null ? void 0 : n3.separator) || "\r?\n---\r?\n", t3.verticalSeparator = t3.verticalSeparator || (n3 == null ? void 0 : n3.verticalSeparator) || null, t3.notesSeparator = t3.notesSeparator || (n3 == null ? void 0 : n3.notesSeparator) || "^s*notes?:", t3.attributes = t3.attributes || "", t3;
  }
  function r2(e3, t3) {
    t3 = s2(t3);
    const n3 = e3.split(new RegExp(t3.notesSeparator, "mgi"));
    return 2 === n3.length && (e3 = n3[0] + '<aside class="notes">' + M(n3[1].trim()) + "</aside>"), '<script type="text/template">' + (e3 = e3.replace(/<\/script>/g, N)) + "<\/script>";
  }
  function i2(e3, t3) {
    t3 = s2(t3);
    const n3 = new RegExp(t3.separator + (t3.verticalSeparator ? "|" + t3.verticalSeparator : ""), "mg"), i3 = new RegExp(t3.separator);
    let l3, o3, a3, c3 = 0, h2 = true, p2 = [];
    for (; l3 = n3.exec(e3); )
      o3 = i3.test(l3[0]), !o3 && h2 && p2.push([]), a3 = e3.substring(c3, l3.index), o3 && h2 ? p2.push(a3) : p2[p2.length - 1].push(a3), c3 = n3.lastIndex, h2 = o3;
    (h2 ? p2 : p2[p2.length - 1]).push(e3.substring(c3));
    let u2 = "";
    for (let e4 = 0, n4 = p2.length; e4 < n4; e4++)
      p2[e4] instanceof Array ? (u2 += "<section " + t3.attributes + ">", p2[e4].forEach(function(e5) {
        u2 += "<section data-markdown>" + r2(e5, t3) + "</section>";
      }), u2 += "</section>") : u2 += "<section " + t3.attributes + " data-markdown>" + r2(p2[e4], t3) + "</section>";
    return u2;
  }
  function l2(e3) {
    return new Promise(function(s3) {
      const r3 = [];
      [].slice.call(e3.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach(function(e4, s4) {
        e4.getAttribute("data-markdown").length ? r3.push(function(e5) {
          return new Promise(function(t3, n3) {
            const s5 = new XMLHttpRequest(), r4 = e5.getAttribute("data-markdown"), i3 = e5.getAttribute("data-charset");
            null !== i3 && "" !== i3 && s5.overrideMimeType("text/html; charset=" + i3), s5.onreadystatechange = (function(e6, s6) {
              4 === s6.readyState && (s6.status >= 200 && s6.status < 300 || 0 === s6.status ? t3(s6, r4) : n3(s6, r4));
            }).bind(this, e5, s5), s5.open("GET", r4, true);
            try {
              s5.send();
            } catch (e6) {
              console.warn("Failed to get the Markdown file " + r4 + ". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. " + e6), t3(s5, r4);
            }
          });
        }(e4).then(function(t3, s5) {
          e4.outerHTML = i2(t3.responseText, { separator: e4.getAttribute("data-separator"), verticalSeparator: e4.getAttribute("data-separator-vertical"), notesSeparator: e4.getAttribute("data-separator-notes"), attributes: n2(e4) });
        }, function(t3, n3) {
          e4.outerHTML = '<section data-state="alert">ERROR: The attempt to fetch ' + n3 + " failed with HTTP status " + t3.status + ".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>";
        })) : e4.outerHTML = i2(t2(e4), { separator: e4.getAttribute("data-separator"), verticalSeparator: e4.getAttribute("data-separator-vertical"), notesSeparator: e4.getAttribute("data-separator-notes"), attributes: n2(e4) });
      }), Promise.all(r3).then(s3);
    });
  }
  function o2(e3, t3, n3) {
    const s3 = new RegExp(n3, "mg"), r3 = new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])', "mg");
    let i3, l3, o3 = e3.nodeValue;
    if (i3 = s3.exec(o3)) {
      const n4 = i3[1];
      for (o3 = o3.substring(0, i3.index) + o3.substring(s3.lastIndex), e3.nodeValue = o3; l3 = r3.exec(n4); )
        l3[2] ? t3.setAttribute(l3[1], l3[2]) : t3.setAttribute(l3[3], "");
      return true;
    }
    return false;
  }
  function a2(e3, t3, n3, s3, r3) {
    if (null !== t3 && void 0 !== t3.childNodes && t3.childNodes.length > 0) {
      let n4 = t3;
      for (let i3 = 0; i3 < t3.childNodes.length; i3++) {
        const l3 = t3.childNodes[i3];
        if (i3 > 0) {
          let e4 = i3 - 1;
          for (; e4 >= 0; ) {
            const s4 = t3.childNodes[e4];
            if ("function" == typeof s4.setAttribute && "BR" !== s4.tagName) {
              n4 = s4;
              break;
            }
            e4 -= 1;
          }
        }
        let o3 = e3;
        "section" === l3.nodeName && (o3 = l3, n4 = l3), "function" != typeof l3.setAttribute && l3.nodeType !== Node.COMMENT_NODE || a2(o3, l3, n4, s3, r3);
      }
    }
    t3.nodeType === Node.COMMENT_NODE && false === o2(t3, n3, s3) && o2(t3, e3, r3);
  }
  function c2() {
    const n3 = e2.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");
    return [].slice.call(n3).forEach(function(e3) {
      e3.setAttribute("data-markdown-parsed", true);
      const n4 = e3.querySelector("aside.notes"), s3 = t2(e3);
      e3.innerHTML = M(s3), a2(e3, e3, null, e3.getAttribute("data-element-attributes") || e3.parentNode.getAttribute("data-element-attributes") || "\\.element\\s*?(.+?)$", e3.getAttribute("data-attributes") || e3.parentNode.getAttribute("data-attributes") || "\\.slide:\\s*?(\\S.+?)$"), n4 && e3.appendChild(n4);
    }), Promise.resolve();
  }
  return { id: "markdown", init: function(t3) {
    e2 = t3;
    let { renderer: n3, animateLists: s3, ...r3 } = e2.getConfig().markdown || {};
    return n3 || (n3 = new M.Renderer(), n3.code = (e3, t4) => {
      let n4 = "", s4 = "";
      if (O.test(t4)) {
        let e4 = t4.match(O)[2];
        e4 && (n4 = `data-ln-start-from="${e4.trim()}"`), s4 = t4.match(O)[3].trim(), s4 = `data-line-numbers="${s4}"`, t4 = t4.replace(O, "").trim();
      }
      return `<pre><code ${s4} ${n4} class="${t4}">${e3 = e3.replace(/([&<>'"])/g, (e4) => D[e4])}</code></pre>`;
    }), true === s3 && (n3.listitem = (e3) => `<li class="fragment">${e3}</li>`), M.setOptions({ renderer: n3, ...r3 }), l2(e2.getRevealElement()).then(c2);
  }, processSlides: l2, convertSlides: c2, slidify: i2, marked: M };
};
export {
  B as default
};
