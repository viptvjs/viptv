/*!
 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
 * by navigatating to that slide and highlighting it.
 *
 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
 */
const e = () => {
  let e2, t, n, l, i, o, r;
  function s() {
    t = document.createElement("div"), t.classList.add("searchbox"), t.style.position = "absolute", t.style.top = "10px", t.style.right = "10px", t.style.zIndex = 10, t.innerHTML = '<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n		</span>', n = t.querySelector(".searchinput"), n.style.width = "240px", n.style.fontSize = "14px", n.style.padding = "4px 6px", n.style.color = "#000", n.style.background = "#fff", n.style.borderRadius = "2px", n.style.border = "0", n.style.outline = "0", n.style.boxShadow = "0 2px 18px rgba(0, 0, 0, 0.2)", n.style["-webkit-appearance"] = "none", e2.getRevealElement().appendChild(t), n.addEventListener("keyup", function(t2) {
      if (13 === t2.keyCode)
        t2.preventDefault(), function() {
          if (o) {
            var t3 = n.value;
            "" === t3 ? (r && r.remove(), l = null) : (r = new c("slidecontent"), l = r.apply(t3), i = 0);
          }
          l && (l.length && l.length <= i && (i = 0), l.length > i && (e2.slide(l[i].h, l[i].v), i++));
        }(), o = false;
      else
        o = true;
    }, false), d();
  }
  function a() {
    t || s(), t.style.display = "inline", n.focus(), n.select();
  }
  function d() {
    t || s(), t.style.display = "none", r && r.remove();
  }
  function c(t2, n2) {
    var l2 = document.getElementById(t2) || document.body, i2 = n2 || "EM", o2 = new RegExp("^(?:" + i2 + "|SCRIPT|FORM)$"), r2 = ["#ff6", "#a0ffff", "#9f9", "#f99", "#f6f"], s2 = [], a2 = 0, d2 = "", c2 = [];
    this.setRegex = function(e3) {
      e3 = e3.trim(), d2 = new RegExp("(" + e3 + ")", "i");
    }, this.getRegex = function() {
      return d2.toString().replace(/^\/\\b\(|\)\\b\/i$/g, "").replace(/\|/g, " ");
    }, this.hiliteWords = function(t3) {
      if (null != t3 && t3 && d2 && !o2.test(t3.nodeName)) {
        if (t3.hasChildNodes())
          for (var n3 = 0; n3 < t3.childNodes.length; n3++)
            this.hiliteWords(t3.childNodes[n3]);
        var l3, p;
        if (3 == t3.nodeType) {
          if ((l3 = t3.nodeValue) && (p = d2.exec(l3))) {
            for (var u = t3; null != u && "SECTION" != u.nodeName; )
              u = u.parentNode;
            var h = e2.getIndices(u), f = c2.length, y = false;
            for (n3 = 0; n3 < f; n3++)
              c2[n3].h === h.h && c2[n3].v === h.v && (y = true);
            y || c2.push(h), s2[p[0].toLowerCase()] || (s2[p[0].toLowerCase()] = r2[a2++ % r2.length]);
            var g = document.createElement(i2);
            g.appendChild(document.createTextNode(p[0])), g.style.backgroundColor = s2[p[0].toLowerCase()], g.style.fontStyle = "inherit", g.style.color = "#000";
            var v = t3.splitText(p.index);
            v.nodeValue = v.nodeValue.substring(p[0].length), t3.parentNode.insertBefore(g, v);
          }
        }
      }
    }, this.remove = function() {
      for (var e3, t3 = document.getElementsByTagName(i2); t3.length && (e3 = t3[0]); )
        e3.parentNode.replaceChild(e3.firstChild, e3);
    }, this.apply = function(e3) {
      if (null != e3 && e3)
        return this.remove(), this.setRegex(e3), this.hiliteWords(l2), c2;
    };
  }
  return { id: "search", init: (n2) => {
    e2 = n2, e2.registerKeyboardShortcut("CTRL + Shift + F", "Search"), document.addEventListener("keydown", function(e3) {
      "F" == e3.key && (e3.ctrlKey || e3.metaKey) && (e3.preventDefault(), t || s(), "inline" !== t.style.display ? a() : d());
    }, false);
  }, open: a };
};
export {
  e as default
};
