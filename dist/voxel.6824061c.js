// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({66:[function(require,module,exports) {
!function () {
  function n(n) {
    function e(n, e) {
      n = "on" + n, "function" == typeof e && (s[n] || (s[n] = []), s[n].indexOf(e) > -1 || s[n].push(e));
    }function i(n, e) {
      n = "on" + n, s[n] && s[n].splice(s[n].indexOf(e), 1);
    }function o(n, e) {
      n = "on" + n;var i = s[n];if (i) for (var o, t = 0; o = i[t++];) {
        o(e);
      }
    }var t = n || new Function(),
        s = {};return t.addEventListener = e, t.removeEventListener = i, t.triggerEvent = o, t;
  }window.voxelcss || (window.voxelcss = {}), window.voxelcss.interfaces || (window.voxelcss.interfaces = {}), voxelcss.interfaces.EventListener = n;
}();
!function () {
  function r() {
    function n() {
      return 1 === arguments.length && arguments[0].constructor != Number ? arguments[0].constructor == String ? i(arguments[0]) : c(arguments[0]) : a.apply(this, arguments);
    }function t() {
      return { r: b.r, g: b.g, b: b.b, a: b.a };
    }function e() {
      return g(b.r, b.g, b.b);
    }function u() {
      return JSON.stringify(b);
    }function o() {
      return new r(b);
    }function a(r, n, e, u) {
      var o = t();return r != l && r.constructor == Number && (b.r = r), n != l && n.constructor == Number && (b.g = n), e != l && e.constructor == Number && (b.b = e), u != l && u.constructor == Number && (b.a = u), f(), o;
    }function c(r) {
      return r === l ? t() : a(r.r, r.g, r.b, r.a);
    }function i(r) {
      if (!r || r.constructor !== String) return t();var n = t();return b = s(r), b.a = 1, f(), n;
    }function s(r) {
      var n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;r = r.replace(n, function (r, n, t, e) {
        return n + n + t + t + e + e;
      });var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
    }function g(r, n, t) {
      return "" + ((1 << 24) + (r << 16) + (n << 8) + t).toString(16).slice(1);
    }function f() {
      m.triggerEvent("change", { target: m });
    }var l,
        m = this,
        b = { r: 0, g: 0, b: 0, a: 1 };m.setColor = n, m.getRGBA = t, m.getHex = e, m.serialize = u, m.clone = o, function () {
      voxelcss.interfaces.EventListener(m), n.apply(this, arguments);
    }.apply(m, arguments);
  }window.voxelcss || (window.voxelcss = {}), r.loadFromSerial = function (n) {
    var t = JSON.parse(n);return new r(t);
  }, window.voxelcss.ColorFace = r;
}();
!function () {
  function n(n) {
    function t(n, t, i) {
      d = !1;var u = { x: e(n), y: r(t), z: o(i) };return d = !0, x.triggerEvent("move"), u;
    }function e(n) {
      if (void 0 === n || "number" != typeof n) return g.x;var t = g.x;return g.x = n, d && x.triggerEvent("move"), t;
    }function r(n) {
      if (void 0 === n || "number" != typeof n) return g.y;var t = g.y;return g.y = n, d && x.triggerEvent("move"), t;
    }function o(n) {
      if (void 0 === n || "number" != typeof n) return g.z;var t = g.z;return g.z = n, d && x.triggerEvent("move"), t;
    }function i(n, t, e) {
      d = !1;var r = { x: u(n), y: s(t), z: v(e) };return d = !0, x.triggerEvent("move"), r;
    }function u(n) {
      return void 0 === n || "number" != typeof n ? g.x : e(n + g.x);
    }function s(n) {
      return void 0 === n || "number" != typeof n ? g.y : r(n + g.y);
    }function v(n) {
      return void 0 === n || "number" != typeof n ? g.z : o(n + g.z);
    }function f() {
      return { x: g.x, y: g.y, z: g.z };
    }function c() {
      return g.x;
    }function a() {
      return g.y;
    }function y() {
      return g.z;
    }var x = n || new Function(),
        g = { x: 0, y: 0, z: 0 },
        d = !0;return x.setPosition = t, x.setPositionX = e, x.setPositionY = r, x.setPositionZ = o, x.translate = i, x.translateX = u, x.translateY = s, x.translateZ = v, x.getPosition = f, x.getPositionX = c, x.getPositionY = a, x.getPositionZ = y, x;
  }window.voxelcss || (window.voxelcss = {}), window.voxelcss.interfaces || (window.voxelcss.interfaces = {}), voxelcss.interfaces.Positioned = n;
}();
!function () {
  function e() {
    function e() {
      F = !0;
    }function n() {
      F = !1;
    }function t() {
      return F;
    }function i() {
      V = !0;
    }function r() {
      V = !1;
    }function o() {
      return V;
    }function a() {
      M.save();
    }function c() {
      var e = M.load();return B(), e;
    }function v() {
      return M.isSaved();
    }function u() {
      return M.deleteSave();
    }function s() {
      return M["export"]();
    }function f(e) {
      var n = M["import"](e);return B(), n;
    }function l(e) {
      L(e);var n = M.add(e);return V && a(), n;
    }function d(e) {
      var n = M.remove(e);return n && k(e), V && a(), n;
    }function m() {
      return M;
    }function E(e) {
      if (e === A) return R.mesh;var n = R.mesh;return R.mesh = e, n;
    }function L(e) {
      e.addEventListener("VoxelClick", C), e.addEventListener("TopClick", g), e.addEventListener("BottomClick", h), e.addEventListener("FrontClick", p), e.addEventListener("BackClick", x), e.addEventListener("LeftClick", S), e.addEventListener("RightClick", b), e.addEventListener("MeshChange", function () {
        V && a();
      });
    }function k(e) {
      e.removeEventListener("VoxelClick", C), e.removeEventListener("TopClick", g), e.removeEventListener("BottomClick", h), e.removeEventListener("FrontClick", p), e.removeEventListener("BackClick", x), e.removeEventListener("LeftClick", S), e.removeEventListener("RightClick", b);
    }function C(e) {
      if (F) {
        var n = e.target;d(n);
      }
    }function g(e) {
      if (F) {
        var n = e.target;w(n, 0, 1, 0);
      }
    }function h(e) {
      if (F) {
        var n = e.target;w(n, 0, -1, 0);
      }
    }function p(e) {
      if (F) {
        var n = e.target;w(n, 0, 0, 1);
      }
    }function x(e) {
      if (F) {
        var n = e.target;w(n, 0, 0, -1);
      }
    }function S(e) {
      if (F) {
        var n = e.target;w(n, -1, 0, 0);
      }
    }function b(e) {
      if (F) {
        var n = e.target;w(n, 1, 0, 0);
      }
    }function w(e, n, t, i) {
      var r = e.clone(),
          o = r.getDimension();r.setMesh(R.mesh), r.translate(n * o, t * o, i * o), l(r);
    }function B() {
      for (var e, n = 0; e = M.getVoxels()[n++];) {
        L(e);
      }
    }var A,
        M,
        T = this,
        V = !1,
        F = !0,
        R = { mesh: {} };T.enable = e, T.disable = n, T.isEnabled = t, T.enableAutoSave = i, T.disableAutoSave = r, T.canAutoSave = o, T.save = a, T.load = c, T.isSaved = v, T.deleteSave = u, T["export"] = s, T["import"] = f, T.add = l, T.remove = d, T.getWorld = m, T.setToolMesh = E, function (e, n) {
      if (e === A) throw "Editor requires World instance for initialization";M = e, n !== A && n.autosave === !0 && i(), B();
    }.apply(T, arguments);
  }window.voxelcss || (window.voxelcss = {}), voxelcss.Editor = e;
}();
!function () {
  function n() {
    function A(n) {
      if (!n) return u;var e = u;return u = n, o(), e;
    }function t() {
      return u;
    }function r() {
      return u;
    }function i() {
      return new n(u);
    }function o() {
      c.triggerEvent("change", { target: c });
    }var c = this,
        u = e;c.setSource = A, c.getSource = t, c.serialize = r, c.clone = i, function (n) {
      voxelcss.interfaces.EventListener(c), A(n);
    }.apply(c, arguments);
  }window.voxelcss || (window.voxelcss = {});var e = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";n.loadFromSerial = function (e) {
    return new n(e);
  }, window.voxelcss.ImageFace = n;
}();
!function () {
  function e() {
    function e(e) {
      if (e === i || "number" != typeof e) return o;var t = o;return o = e, s.triggerEvent("change", { target: s }), t;
    }function t() {
      return o;
    }function n(e, t) {
      var n = r();return "number" == typeof t && (c = t), "number" == typeof e && (u = e), s.triggerEvent("change", { target: s }), n;
    }function r() {
      return [u, c];
    }var i,
        s = this,
        o = 500,
        c = 1,
        u = 0;s.setTravelDistance = e, s.getTravelDistance = t, s.setBrightness = n, s.getBrightness = r, function (t, r, i, o, c, u) {
      voxelcss.interfaces.Positioned(voxelcss.interfaces.EventListener(s)), s.setPosition(t, r, i), e(o), n(c, u);
    }.apply(s, arguments);
  }window.voxelcss || (window.voxelcss = {}), window.voxelcss.LightSource = e;
}();
!function () {
  function t() {
    function t(t) {
      if (void 0 !== t && L(t)) {
        var e = F;return e && e.removeEventListener("change", b), F = t, F.addEventListener("change", b), y && p(), e;
      }
    }function e(t) {
      if (void 0 !== t && L(t)) {
        var e = k;return e && e.removeEventListener("change", b), k = t, k.addEventListener("change", b), y && p(), e;
      }
    }function r(t) {
      if (void 0 !== t && L(t)) {
        var e = w;return e && e.removeEventListener("change", b), w = t, w.addEventListener("change", b), y && p(), e;
      }
    }function o(t) {
      if (void 0 !== t && L(t)) {
        var e = x;return e && e.removeEventListener("change", b), x = t, x.addEventListener("change", b), y && p(), e;
      }
    }function i(t) {
      if (void 0 !== t && L(t)) {
        var e = B;return e && e.removeEventListener("change", b), B = t, B.addEventListener("change", b), y && p(), e;
      }
    }function c(t) {
      if (void 0 !== t && L(t)) {
        var e = S;return e && e.removeEventListener("change", b), S = t, S.addEventListener("change", b), y && p(), e;
      }
    }function a() {
      return F;
    }function f() {
      return k;
    }function u() {
      return w;
    }function s() {
      return x;
    }function v() {
      return B;
    }function g() {
      return S;
    }function l(n) {
      var a = d();return void 0 === n ? a : (L(n) && (n = { front: n, back: n, top: n, bottom: n, left: n, right: n }), y = !1, t(n.front), e(n.back), r(n.left), o(n.right), i(n.top), c(n.bottom), p(), y = !0, a);
    }function d() {
      return { front: F, back: k, left: w, right: x, top: B, bottom: S };
    }function h() {
      return JSON.stringify({ front: m(F), back: m(k), left: m(w), right: m(x), top: m(B), bottom: m(S) });
    }function m(t) {
      return E(t.constructor) + "(" + t.serialize() + ")";
    }function L(t) {
      return !!E(t.constructor);
    }function E(t) {
      for (var e in n) {
        var r = n[e];if (r == t) return e;
      }return null;
    }function b() {
      p();
    }function p() {
      O.triggerEvent("change", { target: O, faces: d() });
    }var F,
        k,
        w,
        x,
        B,
        S,
        O = this,
        y = !0;O.setFront = t, O.setBack = e, O.setLeft = r, O.setRight = o, O.setTop = i, O.setBottom = c, O.getFront = a, O.getBack = f, O.getLeft = u, O.getRight = s, O.getTop = v, O.getBottom = g, O.setFaces = l, O.getFaces = d, O.serialize = h, function (t) {
      voxelcss.interfaces.EventListener(O), l(new voxelcss.ImageFace()), l(t);
    }.apply(O, arguments);
  }function e(t) {
    var e = t.indexOf("("),
        r = t.slice(0, e),
        o = t.slice(e + 1, -1);return n[r].loadFromSerial(o);
  }window.voxelcss || (window.voxelcss = {});var n = { image: voxelcss.ImageFace, color: voxelcss.ColorFace };t.loadFromSerial = function (n) {
    var r = JSON.parse(n);return new t({ front: e(r.front), back: e(r.back), left: e(r.left), right: e(r.right), top: e(r.top), bottom: e(r.bottom) });
  }, window.voxelcss.Mesh = t;
}();
!function () {
  function t() {
    function t(t, o, i) {
      return { x: n(t), y: e(o), z: r(i) };
    }function n(t) {
      if (t === rt || "number" != typeof t) return st.x;var n = st.x;return st.x += t, nt(), n;
    }function e(t) {
      if (t === rt || "number" != typeof t) return st.y;var n = st.y;return st.y += t, nt(), n;
    }function r(t) {
      if (t === rt || "number" != typeof t) return st.z;var n = st.z;return st.z += t, nt(), n;
    }function o(t, n, e) {
      var r = { x: i(t), y: u(n), z: a(e) };return nt(), r;
    }function i(t) {
      if (t === rt || "number" != typeof t) return st.x;var n = st.x;return st.x = t, nt(), n;
    }function u(t) {
      if (t === rt || "number" != typeof t) return st.y;var n = st.y;return st.y = t, nt(), n;
    }function a(t) {
      if (t === rt || "number" != typeof t) return st.z;var n = st.z;return st.z = t, nt(), n;
    }function c() {
      return { x: st.x, y: st.y, z: st.z };
    }function f() {
      return st.x;
    }function s() {
      return st.y;
    }function d() {
      return st.z;
    }function v(t, n, e) {
      return { x: y(t), y: l(n), z: m(e) };
    }function y(t) {
      if (t === rt || "number" != typeof t) return dt.x;var n = dt.x;return dt.x += t, nt(), n;
    }function l(t) {
      if (t === rt || "number" != typeof t) return dt.y;var n = dt.y;return dt.y += t, nt(), n;
    }function m(t) {
      if (t === rt || "number" != typeof t) return dt.z;var n = dt.z;return dt.z += t, nt(), n;
    }function x(t, n, e) {
      var r = { x: p(t), y: h(n), z: g(e) };return nt(), r;
    }function p(t) {
      if (t === rt || "number" != typeof t) return dt.x;var n = dt.x;return dt.x = t, nt(), n;
    }function h(t) {
      if (t === rt || "number" != typeof t) return dt.y;var n = dt.y;return dt.y = t, nt(), n;
    }function g(t) {
      if (t === rt || "number" != typeof t) return dt.z;var n = dt.z;return dt.z = t, nt(), n;
    }function w() {
      return { x: dt.x, y: dt.y, z: dt.z };
    }function z() {
      return dt.x;
    }function b() {
      return dt.y;
    }function E() {
      return dt.z;
    }function L(t) {
      if (t === rt || "number" != typeof t) return vt;var n = vt;return vt += t, nt(), n;
    }function P(t) {
      if (t === rt || "number" != typeof t) return vt;return vt = t, nt(), vt;
    }function Y() {
      return vt;
    }function Z(t) {
      if (ft) throw "Cannot attach currently attached scene";ot = t, t.appendChild(it), ft = !0;
    }function X() {
      if (!ft) throw "Cannot detach currently detached scene";ft = !1, it.parentElement.removeChild(it);
    }function C() {
      return ft;
    }function M() {
      return ot;
    }function R() {
      lt || (lt = !0);
    }function S() {
      lt && (lt = !1);
    }function D() {
      return lt;
    }function O() {
      mt || (mt = !0);
    }function k() {
      mt && (mt = !1);
    }function A() {
      return mt;
    }function I() {
      xt || (xt = !0);
    }function H() {
      xt && (xt = !1);
    }function V() {
      return xt;
    }function W(t) {
      at.appendChild(t.getDomElement()), ht.push(t), t.setParentScene(ct), 0 !== pt.length && t.updateLightSource(pt);
    }function j(t) {
      at.removeChild(t.getDomElement()), ht.splice(ht.indexOf(t), 1), t.removeParentScene();
    }function q() {
      return ht.concat([]);
    }function B(t) {
      var n = pt.indexOf(t);return -1 !== n ? !1 : (t.addEventListener("change", et), t.addEventListener("move", et), pt.push(t), et(), !0);
    }function F(t) {
      var n = pt.indexOf(t);return -1 === n ? !1 : (t.removeEventListener("change", et), t.removeEventListener("move", et), pt.splice(n, 1), et(), !0);
    }function G() {
      return pt;
    }function J() {
      it = document.createElement("div"), it.setAttribute("class", "scene"), ut = document.createElement("div"), ut.setAttribute("class", "zoom"), at = document.createElement("div"), at.setAttribute("class", "camera"), it.appendChild(ut), ut.appendChild(at);
    }function K() {
      it.addEventListener("mousedown", N), it.addEventListener("mousewheel", U), it.addEventListener("wheel", U);
    }function N(t) {
      yt.start.x = t.x || t.clientX, yt.start.y = t.y || t.clientY, yt.current.x = t.x || t.clientX, yt.current.y = t.y || t.clientY, window.addEventListener("mousemove", T), window.addEventListener("mouseup", Q);
    }function Q(t) {
      window.removeEventListener("mousemove", T), window.removeEventListener("mouseup", Q);
    }function T(t) {
      if (yt.lastMove.dx = (t.x || t.clientX) - yt.current.x, yt.lastMove.dy = (t.y || t.clientY) - yt.current.y, yt.current.x = t.x || t.clientX, yt.current.y = t.y || t.clientY, mt && yt.shiftDown) v(yt.lastMove.dx, yt.lastMove.dy), nt(), ct.triggerEvent("pan", { rotation: c(), pan: w(), zoom: Y(), target: ct });else if (lt) {
        var n = 2;st.y += yt.lastMove.dx / window.innerWidth * Math.PI * 2 * n, st.x -= yt.lastMove.dy / window.innerHeight * Math.PI * 2 * n, nt(), ct.triggerEvent("orbit", { rotation: c(), pan: w(), zoom: Y(), target: ct });
      }
    }function U(t) {
      return xt ? (vt += t.deltaY / 5e3, nt(), t.preventDefault(), ct.triggerEvent("zoom", { rotation: c(), pan: w(), zoom: Y(), target: ct }), !1) : void 0;
    }function $() {
      window.addEventListener("keydown", _), window.addEventListener("keyup", tt);
    }function _(t) {
      (16 === t.keyCode || 16 === t.which) && (yt.shiftDown = !0);
    }function tt(t) {
      (16 === t.keyCode || 16 === t.which) && (yt.shiftDown = !1);
    }function nt() {
      at.style.transform = "rotateX(" + st.x + "rad) rotateY(" + st.y + "rad) rotateZ(" + st.z + "rad)", ut.style.transform = "scale(" + vt + ", " + vt + ")", ut.style.transform += " translateX(" + dt.x + "px) translateY(" + dt.y + "px) translateZ(" + dt.z + "px)", et();
    }function et() {
      if (0 !== pt.length) for (var t, n = 0; t = ht[n++];) {
        t.updateLightSource(pt);
      }
    }var rt,
        ot,
        it,
        ut,
        at,
        ct = this,
        ft = !1,
        st = { x: 0, y: 0, z: 0 },
        dt = { x: 0, y: 0, z: 0 },
        vt = 1,
        yt = { start: { x: 0, y: 0 }, current: { x: 0, y: 0 }, lastMove: { x: 0, y: 0 }, shiftDown: !1 },
        lt = !0,
        mt = !0,
        xt = !0,
        pt = [],
        ht = [];ct.rotate = t, ct.rotateX = n, ct.rotateY = e, ct.rotateZ = r, ct.setRotation = o, ct.setRotationX = i, ct.setRotationY = u, ct.setRotationZ = a, ct.getRotation = c, ct.getRotationX = f, ct.getRotationY = s, ct.getRotationZ = d, ct.pan = v, ct.panX = y, ct.panY = l, ct.panZ = m, ct.setPan = x, ct.setPanX = p, ct.setPanY = h, ct.setPanZ = g, ct.getPan = w, ct.getPanX = z, ct.getPanY = b, ct.getPanZ = E, ct.zoom = L, ct.setZoom = P, ct.getZoom = Y, ct.attach = Z, ct.detach = X, ct.isAttached = C, ct.getParentElement = M, ct.enableOrbit = R, ct.disableOrbit = S, ct.canOrbit = D, ct.enablePan = O, ct.disablePan = k, ct.canPan = A, ct.enableZoom = I, ct.disableZoom = H, ct.canZoom = V, ct.add = W, ct.remove = j, ct.getVoxels = q, ct.addLightSource = B, ct.removeLightSource = F, ct.getLightSources = G, function () {
      voxelcss.interfaces.EventListener(ct), J(), K(), $();
    }.apply(ct, arguments);
  }window.voxelcss || (window.voxelcss = {}), voxelcss.Scene = t;
}();
!function () {
  function t() {
    function t(t) {
      if (t !== Z && t.constructor === voxelcss.Mesh) {
        var e = I;return e && e.removeEventListener("change", p), I = t, I.addEventListener("change", p), x(), e;
      }
    }function e() {
      return I;
    }function n(t) {
      if (t === Z) throw "Scene required to add voxel to scene";X = t, T.setAttribute("class", "anim up"), k();
    }function a(t) {
      if (t === Z) throw "Scene required to add voxel to scene";X = t, T.setAttribute("class", "anim down"), k();
    }function i(t) {
      if (t === Z) throw "Scene required to add voxel to scene";X = t, T.setAttribute("class", "anim"), k();
    }function r() {
      X !== Z && X.removeChild(S);
    }function o(t) {
      X = t;
    }function s() {
      X = Z;
    }function c(t) {
      if (t === Z || "number" != typeof t) return F;var e = F;return F = t, e;
    }function l() {
      return F;
    }function h() {
      return S;
    }function g() {
      return new voxelcss.Voxel(Y.getPositionX(), Y.getPositionY(), Y.getPositionZ(), F, { mesh: I });
    }function v(t) {
      for (var e, n = 1, a = 1, i = 1, r = 1, o = 1, s = 1, c = 0; e = t[c++];) {
        var l = e.getBrightness(),
            h = l[1] - l[0],
            g = 1 - l[1],
            v = e.getPositionX(),
            u = e.getPositionY(),
            m = e.getPositionZ();if (a > 0) {
          var M = f(v, u, m, { A: 0, B: 0, C: -1 }),
              p = M.angle,
              x = 1 - p / (Math.PI / 2);x = d(x), x = Math.min(1, x + Math.pow(M.distance / e.getTravelDistance(), 6));var y = (M.direction < 0 ? 1 : x) * h + g;a = Math.max(0, a - (1 - y));
        }if (n > 0) {
          var M = f(v, u, m, { A: 0, B: 0, C: 1 }),
              p = M.angle,
              x = 1 - p / (Math.PI / 2);x = d(x), x = Math.min(1, x + Math.pow(M.distance / e.getTravelDistance(), 6));var y = (M.direction < 0 ? 1 : x) * h + g;n = Math.max(0, n - (1 - y));
        }if (i > 0) {
          var M = f(v, u, m, { A: -1, B: 0, C: 0 }),
              p = M.angle,
              x = 1 - p / (Math.PI / 2);x = d(x), x = Math.min(1, x + Math.pow(M.distance / e.getTravelDistance(), 6));var y = (M.direction < 0 ? 1 : x) * h + g;i = Math.max(0, i - (1 - y));
        }if (r > 0) {
          var M = f(v, u, m, { A: 1, B: 0, C: 0 }),
              p = M.angle,
              x = 1 - p / (Math.PI / 2);x = d(x), x = Math.min(1, x + Math.pow(M.distance / e.getTravelDistance(), 6));var y = (M.direction < 0 ? 1 : x) * h + g;r = Math.max(0, r - (1 - y));
        }if (o > 0) {
          var M = f(v, u, m, { A: 0, B: 1, C: 0 }),
              p = M.angle,
              x = 1 - p / (Math.PI / 2);x = d(x), x = Math.min(1, x + Math.pow(M.distance / e.getTravelDistance(), 6));var y = (M.direction < 0 ? 1 : x) * h + g;o = Math.max(0, o - (1 - y));
        }if (s > 0) {
          var M = f(v, u, m, { A: 0, B: -1, C: 0 }),
              p = M.angle,
              x = 1 - p / (Math.PI / 2);x = d(x), x = Math.min(1, x + Math.pow(M.distance / e.getTravelDistance(), 6));var y = (M.direction < 0 ? 1 : x) * h + g;s = Math.max(0, s - (1 - y));
        }
      }q.front.shader.style.opacity = n, q.back.shader.style.opacity = a, q.left.shader.style.opacity = i, q.right.shader.style.opacity = r, q.top.shader.style.opacity = o, q.bottom.shader.style.opacity = s;
    }function d(t) {
      return Math.pow(t, 3);
    }function f(t, e, n, a) {
      var i = u(X.getRotationX(), -X.getRotationY(), X.getRotationZ()),
          r = { x: t, y: e, z: n },
          o = m(r, i);o = { x: o.x - Y.getPositionX() - a.A * Y.getDimension() / 2, y: o.y - Y.getPositionY() - a.B * Y.getDimension() / 2, z: o.z - Y.getPositionZ() - a.C * Y.getDimension() / 2 };var s = Math.sqrt(Math.pow(o.x, 2) + Math.pow(o.y, 2) + Math.pow(o.z, 2)),
          c = 1 == Math.abs(a.C) ? a.C * o.z : 1 == Math.abs(a.B) ? a.B * o.y : a.A * o.x,
          l = Math.asin(Math.abs(o.x * a.A + o.y * a.B + o.z * a.C) / Math.sqrt(Math.pow(o.x, 2) + Math.pow(o.y, 2) + Math.pow(o.z, 2)));return { angle: l, direction: c, distance: s };
    }function u(t, e, n) {
      var a = [[1, 0, 0], [0, Math.cos(t), -Math.sin(t)], [0, Math.sin(t), Math.cos(t)]],
          i = [[Math.cos(e), 0, Math.sin(e)], [0, 1, 0], [-Math.sin(e), 0, Math.cos(e)]],
          r = [[Math.cos(n), -Math.sin(n), 0], [Math.sin(n), Math.cos(n), 0], [0, 0, 1]];return M(M(r, i), a);
    }function m(t, e) {
      var n = [[t.x], [t.y], [t.z]],
          a = M(e, n);return { x: a[0][0], y: a[1][0], z: a[2][0] };
    }function M(t, e) {
      for (var n = t.length, a = t[0].length, i = (e.length, e[0].length), r = new Array(n), o = 0; n > o; ++o) {
        r[o] = new Array(i);for (var s = 0; i > s; ++s) {
          r[o][s] = 0;for (var c = 0; a > c; ++c) {
            r[o][s] += t[o][c] * e[c][s];
          }
        }
      }return r;
    }function p() {
      x(), Y.triggerEvent("MeshChange", { target: Y, mesh: I });
    }function x() {
      var t = I.getFaces();for (var e in q) {
        var n = t[e];if (n instanceof voxelcss.ImageFace) q[e].src = n.getSource(), q[e].removeAttribute("class");else if (n instanceof voxelcss.ColorFace) {
          var a = q[e].parentElement;a.style.background = "#" + n.getHex(), q[e].setAttribute("class", "colored");
        }
      }
    }function y() {
      S = C("div", "cube"), T = C("div", "anim"), w("top"), w("bottom"), w("front"), w("back"), w("left"), w("right"), S.appendChild(T);
    }function w(t) {
      var e = C("div", "face " + t);switch (e.style.width = F + "px", e.style.height = F + "px", e.style.marginLeft = -F / 2 + "px", e.style.marginTop = -F / 2 + "px", t) {case "top":
          e.style.transform = "rotateX(90deg) translateZ(" + F / 2 + "px)", e.addEventListener("click", P);break;case "bottom":
          e.style.transform = "rotateX(90deg) translateZ(-" + F / 2 + "px)", e.addEventListener("click", A);break;case "left":
          e.style.transform = "rotateY(90deg) translateZ(-" + F / 2 + "px)", e.addEventListener("click", D);break;case "right":
          e.style.transform = "rotateY(90deg) translateZ(" + F / 2 + "px)", e.addEventListener("click", L);break;case "front":
          e.style.transform = "translateZ(" + F / 2 + "px)", e.addEventListener("click", B);break;case "back":
          e.style.transform = "translateZ(-" + F / 2 + "px)", e.addEventListener("click", z);}e.addEventListener("contextmenu", E);var n = C("img", "");q[t] = n;var a = C("div", "shader");q[t].shader = a, e.appendChild(n), e.appendChild(a), T.appendChild(e);
    }function C(t, e) {
      var n = document.createElement(t);return n.setAttribute("class", e), n;
    }function b() {
      var t = Y.getPosition();S.style.transform = "translate3d(" + t.x + "px, " + -t.y + "px, " + t.z + "px)";
    }function k() {
      X.add(Y);
    }function E(t) {
      return t.preventDefault(), Y.triggerEvent("VoxelClick", { target: Y }), !1;
    }function P() {
      Y.triggerEvent("TopClick", { target: Y });
    }function A() {
      Y.triggerEvent("BottomClick", { target: Y });
    }function D() {
      Y.triggerEvent("LeftClick", { target: Y });
    }function L() {
      Y.triggerEvent("RightClick", { target: Y });
    }function B() {
      Y.triggerEvent("FrontClick", { target: Y });
    }function z() {
      Y.triggerEvent("BackClick", { target: Y });
    }var Z,
        S,
        T,
        I,
        X,
        Y = this,
        q = {},
        F = 0;Y.setMesh = t, Y.getMesh = e, Y.animUp = n, Y.animDown = a, Y.addToScene = i, Y.removeFromScene = r, Y.setParentScene = o, Y.removeParentScene = s, Y.setDimension = c, Y.getDimension = l, Y.getDomElement = h, Y.clone = g, Y.updateLightSource = v, function (e, n, a, i, r) {
      voxelcss.interfaces.Positioned(voxelcss.interfaces.EventListener(Y)), Y.addEventListener("move", b), c(i), y(), Y.setPosition(e, n, a), t(new voxelcss.Mesh()), r !== Z && r.mesh !== Z && t(r.mesh);
    }.apply(Y, arguments);
  }window.voxelcss || (window.voxelcss = {}), voxelcss.Voxel = t;
}();
!function () {
  function e() {
    function e(e) {
      return p.push(e), v.add(e);
    }function n(e) {
      var n = p.indexOf(e);return -1 == n ? !1 : (v.remove(e), p.splice(n, 1), !0);
    }function o() {
      for (var e, n = [], o = 0; e = p[o++];) {
        n.push({ position: e.getPosition(), dimension: e.getDimension(), mesh: e.getMesh().serialize() });
      }return JSON.stringify(n);
    }function t(n) {
      u();for (var o, t = JSON.parse(n + ""), i = 0; o = t[i++];) {
        var r = new voxelcss.Voxel(o.position.x, o.position.y, o.position.z, o.dimension);r.setMesh(voxelcss.Mesh.loadFromSerial(o.mesh)), e(r);
      }
    }function i() {
      localStorage.setItem(f(), o());
    }function r() {
      t(localStorage.getItem(f()) || "[]");
    }function s() {
      return !!localStorage.getItem(f());
    }function a() {
      localStorage.setItem(f(), "");
    }function c() {
      return v;
    }function l() {
      return p.concat([]);
    }function u() {
      for (; p.length > 0;) {
        n(p[0]);
      }
    }function f() {
      return "savedWorld<" + m + ">";
    }var d,
        v,
        g = this,
        m = "*",
        p = [];g.add = e, g.remove = n, g["export"] = o, g["import"] = t, g.save = i, g.load = r, g.isSaved = s, g.deleteSave = a, g.getScene = c, g.getVoxels = l, function (e, n) {
      if (e === d) throw "World cannot be instantiated without a Scene instance";v = e, n !== d && (m = n);
    }.apply(g, arguments);
  }window.voxelcss || (window.voxelcss = {}), voxelcss.World = e;
}();
!function () {
  window.voxelcss || (window.voxelcss = {}), voxelcss.Meshes = { dirt: new voxelcss.Mesh(new voxelcss.ImageFace("http://voxelcss.com/res/dirt/main.png")), grass: new voxelcss.Mesh({ top: new voxelcss.ImageFace("http://voxelcss.com/res/grass/top.png"), bottom: new voxelcss.ImageFace("http://voxelcss.com/res/grass/bottom.png"), front: new voxelcss.ImageFace("http://voxelcss.com/res/grass/side.png"), back: new voxelcss.ImageFace("http://voxelcss.com/res/grass/side.png"), left: new voxelcss.ImageFace("http://voxelcss.com/res/grass/side.png"), right: new voxelcss.ImageFace("http://voxelcss.com/res/grass/side.png") }), water: new voxelcss.Mesh(new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png")), waterFall: new voxelcss.Mesh({ top: new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png"), bottom: new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png"), front: new voxelcss.ImageFace("http://voxelcss.com/res/water/fall.png"), back: new voxelcss.ImageFace("http://voxelcss.com/res/water/fall.png"), left: new voxelcss.ImageFace("http://voxelcss.com/res/water/fall.png"), right: new voxelcss.ImageFace("http://voxelcss.com/res/water/fall.png") }), waterFallTop: new voxelcss.Mesh({ top: new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png"), bottom: new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png"), front: new voxelcss.ImageFace("http://voxelcss.com/res/water/falltop.png"), back: new voxelcss.ImageFace("http://voxelcss.com/res/water/falltop.png"), left: new voxelcss.ImageFace("http://voxelcss.com/res/water/falltop.png"), right: new voxelcss.ImageFace("http://voxelcss.com/res/water/falltop.png") }), waterFallCrash: new voxelcss.Mesh({ top: new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png"), bottom: new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png"), front: new voxelcss.ImageFace("http://voxelcss.com/res/water/crash.png"), back: new voxelcss.ImageFace("http://voxelcss.com/res/water/crash.png"), left: new voxelcss.ImageFace("http://voxelcss.com/res/water/crash.png"), right: new voxelcss.ImageFace("http://voxelcss.com/res/water/crash.png") }), treeTrunk: new voxelcss.Mesh({ top: new voxelcss.ImageFace("http://voxelcss.com/res/tree/rings.png"), bottom: new voxelcss.ImageFace("http://voxelcss.com/res/tree/rings.png"), front: new voxelcss.ImageFace("http://voxelcss.com/res/tree/bark.png"), back: new voxelcss.ImageFace("http://voxelcss.com/res/tree/bark.png"), left: new voxelcss.ImageFace("http://voxelcss.com/res/tree/bark.png"), right: new voxelcss.ImageFace("http://voxelcss.com/res/tree/bark.png") }), treeLeaves: new voxelcss.Mesh(new voxelcss.ImageFace("http://voxelcss.com/res/tree/leaves.png")) };
}();
},{}],9:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '39981' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[9,66], null)
//# sourceMappingURL=/voxel.6824061c.map