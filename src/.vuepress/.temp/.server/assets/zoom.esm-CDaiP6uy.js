/*!
 * reveal.js Zoom plugin
 */
const e = { id: "zoom", init: function(e2) {
  e2.getRevealElement().addEventListener("mousedown", function(t2) {
    var n = /Linux/.test(window.navigator.platform) ? "ctrl" : "alt", i = (e2.getConfig().zoomKey ? e2.getConfig().zoomKey : n) + "Key", d = e2.getConfig().zoomLevel ? e2.getConfig().zoomLevel : 2;
    t2[i] && !e2.isOverview() && (t2.preventDefault(), o.to({ x: t2.clientX, y: t2.clientY, scale: d, pan: false }));
  });
}, destroy: () => {
  o.reset();
} };
var t = () => e, o = function() {
  var e2 = 1, t2 = 0, n = 0, i = -1, d = -1, l = "transform" in document.body.style;
  function s(t3, o2) {
    var n2 = r();
    if (t3.width = t3.width || 1, t3.height = t3.height || 1, t3.x -= (window.innerWidth - t3.width * o2) / 2, t3.y -= (window.innerHeight - t3.height * o2) / 2, l)
      if (1 === o2)
        document.body.style.transform = "";
      else {
        var i2 = n2.x + "px " + n2.y + "px", d2 = "translate(" + -t3.x + "px," + -t3.y + "px) scale(" + o2 + ")";
        document.body.style.transformOrigin = i2, document.body.style.transform = d2;
      }
    else
      1 === o2 ? (document.body.style.position = "", document.body.style.left = "", document.body.style.top = "", document.body.style.width = "", document.body.style.height = "", document.body.style.zoom = "") : (document.body.style.position = "relative", document.body.style.left = -(n2.x + t3.x) / o2 + "px", document.body.style.top = -(n2.y + t3.y) / o2 + "px", document.body.style.width = 100 * o2 + "%", document.body.style.height = 100 * o2 + "%", document.body.style.zoom = o2);
    e2 = o2, document.documentElement.classList && (1 !== e2 ? document.documentElement.classList.add("zoomed") : document.documentElement.classList.remove("zoomed"));
  }
  function c() {
    var o2 = 0.12 * window.innerWidth, i2 = 0.12 * window.innerHeight, d2 = r();
    n < i2 ? window.scroll(d2.x, d2.y - 14 / e2 * (1 - n / i2)) : n > window.innerHeight - i2 && window.scroll(d2.x, d2.y + (1 - (window.innerHeight - n) / i2) * (14 / e2)), t2 < o2 ? window.scroll(d2.x - 14 / e2 * (1 - t2 / o2), d2.y) : t2 > window.innerWidth - o2 && window.scroll(d2.x + (1 - (window.innerWidth - t2) / o2) * (14 / e2), d2.y);
  }
  function r() {
    return { x: void 0 !== window.scrollX ? window.scrollX : window.pageXOffset, y: void 0 !== window.scrollY ? window.scrollY : window.pageYOffset };
  }
  return l && (document.body.style.transition = "transform 0.8s ease"), document.addEventListener("keyup", function(t3) {
    1 !== e2 && 27 === t3.keyCode && o.out();
  }), document.addEventListener("mousemove", function(o2) {
    1 !== e2 && (t2 = o2.clientX, n = o2.clientY);
  }), { to: function(t3) {
    if (1 !== e2)
      o.out();
    else {
      if (t3.x = t3.x || 0, t3.y = t3.y || 0, t3.element) {
        var n2 = t3.element.getBoundingClientRect();
        t3.x = n2.left - 20, t3.y = n2.top - 20, t3.width = n2.width + 40, t3.height = n2.height + 40;
      }
      void 0 !== t3.width && void 0 !== t3.height && (t3.scale = Math.max(Math.min(window.innerWidth / t3.width, window.innerHeight / t3.height), 1)), t3.scale > 1 && (t3.x *= t3.scale, t3.y *= t3.scale, s(t3, t3.scale), false !== t3.pan && (i = setTimeout(function() {
        d = setInterval(c, 1e3 / 60);
      }, 800)));
    }
  }, out: function() {
    clearTimeout(i), clearInterval(d), s({ x: 0, y: 0 }, 1), e2 = 1;
  }, magnify: function(e3) {
    this.to(e3);
  }, reset: function() {
    this.out();
  }, zoomLevel: function() {
    return e2;
  } };
}();
export {
  t as default
};
