
(function () {
    'use strict';
  
    (function () {
      var b;
      (function (c) {
        c.u = "window";
        c.l = "self";
      })(b || (b = {}));
      var c = (0, eval)("this");
      var d = c[b.l];
      var e = c[b.u];
      (function () {
        'use strict';
  
        function a(b, c) {
          a = Object.setPrototypeOf || {
            "__proto__": []
          } instanceof Array && function (a, b) {
            a.__proto__ = b;
          } || function (a, b) {
            for (var c in b) {
              if (Object.prototype.hasOwnProperty.call(b, c)) {
                a[c] = b[c];
              }
            }
          };
          return a(b, c);
        }
        function b(b, c) {
          if (typeof c != "function" && c !== null) {
            throw new TypeError("Class extends value " + c + " is not a constructor or null");
          }
          function d() {
            this.constructor = b;
          }
          a(b, c);
          b.prototype = c === null ? Object.create(c) : (d.prototype = c.prototype, new d());
        }
        function f() {
          f = Object.assign || function (a) {
            for (var b, c = 1, d = arguments.length; c < d; c++) {
              for (var e in b = arguments[c]) {
                if (Object.prototype.hasOwnProperty.call(b, e)) {
                  a[e] = b[e];
                }
              }
            }
            return a;
          };
          return f.apply(this, arguments);
        }
        function g(a, b, c, d) {
          return new (c || (c = Promise))(function (e, f) {
            function g(a) {
              try {
                i(d.next(a));
              } catch (a) {
                f(a);
              }
            }
            function h(a) {
              try {
                i(d.throw(a));
              } catch (a) {
                f(a);
              }
            }
            function i(a) {
              var b;
              if (a.done) {
                e(a.value);
              } else {
                (b = a.value, b instanceof c ? b : new c(function (a) {
                  a(b);
                })).then(g, h);
              }
            }
            i((d = d.apply(a, b || [])).next());
          });
        }
        function h(a, b) {
          var c;
          var d;
          var e;
          var f;
          var g = {
            label: 0,
            sent: function () {
              if (e[0] & 1) {
                throw e[1];
              }
              return e[1];
            },
            trys: [],
            ops: []
          };
          f = {
            next: h(0),
            throw: h(1),
            return: h(2)
          };
          if (typeof Symbol == "function") {
            f[Symbol.iterator] = function () {
              return this;
            };
          }
          return f;
          function h(h) {
            return function (i) {
              return function (h) {
                if (c) {
                  throw new TypeError("Generator is already executing.");
                }
                for (; f && (f = 0, h[0] && (g = 0)), g;) {
                  try {
                    c = 1;
                    if (d && (e = h[0] & 2 ? d.return : h[0] ? d.throw || ((e = d.return) && e.call(d), 0) : d.next) && !(e = e.call(d, h[1])).done) {
                      return e;
                    }
                    d = 0;
                    if (e) {
                      h = [h[0] & 2, e.value];
                    }
                    switch (h[0]) {
                      case 0:
                      case 1:
                        e = h;
                        break;
                      case 4:
                        g.label++;
                        return {
                          value: h[1],
                          done: false
                        };
                      case 5:
                        g.label++;
                        d = h[1];
                        h = [0];
                        continue;
                      case 7:
                        h = g.ops.pop();
                        g.trys.pop();
                        continue;
                      default:
                        if (!((e = (e = g.trys).length > 0 && e[e.length - 1]) || h[0] !== 6 && h[0] !== 2)) {
                          g = 0;
                          continue;
                        }
                        if (h[0] === 3 && (!e || h[1] > e[0] && h[1] < e[3])) {
                          g.label = h[1];
                          break;
                        }
                        if (h[0] === 6 && g.label < e[1]) {
                          g.label = e[1];
                          e = h;
                          break;
                        }
                        if (e && g.label < e[2]) {
                          g.label = e[2];
                          g.ops.push(h);
                          break;
                        }
                        if (e[2]) {
                          g.ops.pop();
                        }
                        g.trys.pop();
                        continue;
                    }
                    h = b.call(a, g);
                  } catch (a) {
                    h = [6, a];
                    d = 0;
                  } finally {
                    c = e = 0;
                  }
                }
                if (h[0] & 5) {
                  throw h[1];
                }
                return {
                  value: h[0] ? h[1] : undefined,
                  done: true
                };
              }([h, i]);
            };
          }
        }
        var i = Object.create ? function (a, b, c, d) {
          if (d === undefined) {
            d = c;
          }
          var e = Object.getOwnPropertyDescriptor(b, c);
          if (!(e && !("get" in e ? !b.__esModule : e.writable || e.configurable))) {
            e = {
              enumerable: true,
              get: function () {
                return b[c];
              }
            };
          }
          Object.defineProperty(a, d, e);
        } : function (a, b, c, d) {
          if (d === undefined) {
            d = c;
          }
          a[d] = b[c];
        };
        function j(a) {
          var b = typeof Symbol == "function" && Symbol.iterator;
          var c = b && a[b];
          var d = 0;
          if (c) {
            return c.call(a);
          }
          if (a && typeof a.length == "number") {
            return {
              next: function () {
                if (a && d >= a.length) {
                  a = undefined;
                }
                return {
                  value: a && a[d++],
                  done: !a
                };
              }
            };
          }
          throw new TypeError(b ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function k(a, b) {
          var c = typeof Symbol == "function" && a[Symbol.iterator];
          if (!c) {
            return a;
          }
          var d;
          var e;
          var f = c.call(a);
          var g = [];
          try {
            for (; (b === undefined || b-- > 0) && !(d = f.next()).done;) {
              g.push(d.value);
            }
          } catch (a) {
            e = {
              error: a
            };
          } finally {
            try {
              if (d && !d.done && (c = f.return)) {
                c.call(f);
              }
            } finally {
              if (e) {
                throw e.error;
              }
            }
          }
          return g;
        }
        function l(a, b, c) {
          if (c || arguments.length === 2) {
            for (var d, e = 0, f = b.length; e < f; e++) {
              if (!(!d && e in b)) {
                if (!d) {
                  d = Array.prototype.slice.call(b, 0, e);
                }
                d[e] = b[e];
              }
            }
          }
          return a.concat(d || Array.prototype.slice.call(b));
        }
        function m(a) {
          if (this instanceof m) {
            this.v = a;
            return this;
          } else {
            return new m(a);
          }
        }
        var n = Object.create ? function (a, b) {
          Object.defineProperty(a, "default", {
            enumerable: true,
            value: b
          });
        } : function (a, b) {
          a.default = b;
        };
        d.__assign = f;
        d.__asyncDelegator = function (a) {
          var b;
          var c;
          b = {};
          d("next");
          d("throw", function (a) {
            throw a;
          });
          d("return");
          b[Symbol.iterator] = function () {
            return this;
          };
          return b;
          function d(d, e) {
            b[d] = a[d] ? function (b) {
              if (c = !c) {
                return {
                  value: m(a[d](b)),
                  done: false
                };
              } else if (e) {
                return e(b);
              } else {
                return b;
              }
            } : e;
          }
        };
        d.__asyncGenerator = function (a, b, c) {
          if (!Symbol.asyncIterator) {
            throw new TypeError("Symbol.asyncIterator is not defined.");
          }
          var d;
          var e = c.apply(a, b || []);
          var f = [];
          d = {};
          g("next");
          g("throw");
          g("return");
          d[Symbol.asyncIterator] = function () {
            return this;
          };
          return d;
          function g(a) {
            if (e[a]) {
              d[a] = function (b) {
                return new Promise(function (c, d) {
                  if (!(f.push([a, b, c, d]) > 1)) {
                    h(a, b);
                  }
                });
              };
            }
          }
          function h(a, b) {
            try {
              (function (a) {
                if (a.value instanceof m) {
                  Promise.resolve(a.value.v).then(i, j);
                } else {
                  k(f[0][2], a);
                }
              })(e[a](b));
            } catch (a) {
              k(f[0][3], a);
            }
          }
          function i(a) {
            h("next", a);
          }
          function j(a) {
            h("throw", a);
          }
          function k(a, b) {
            a(b);
            f.shift();
            if (f.length) {
              h(f[0][0], f[0][1]);
            }
          }
        };
        d.__asyncValues = function (a) {
          if (!Symbol.asyncIterator) {
            throw new TypeError("Symbol.asyncIterator is not defined.");
          }
          var b;
          var c = a[Symbol.asyncIterator];
          if (c) {
            return c.call(a);
          } else {
            a = j(a);
            b = {};
            d("next");
            d("throw");
            d("return");
            b[Symbol.asyncIterator] = function () {
              return this;
            };
            return b;
          }
          function d(c) {
            b[c] = a[c] && function (b) {
              return new Promise(function (d, e) {
                (function (a, b, c, d) {
                  Promise.resolve(d).then(function (b) {
                    a({
                      value: b,
                      done: c
                    });
                  }, b);
                })(d, e, (b = a[c](b)).done, b.value);
              });
            };
          }
        };
        d.__await = m;
        d.__awaiter = g;
        d.__createBinding = i;
        d.__decorate = function (a, b, c, d) {
          var e;
          var f = arguments.length;
          var g = f < 3 ? b : d === null ? d = Object.getOwnPropertyDescriptor(b, c) : d;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            g = Reflect.decorate(a, b, c, d);
          } else {
            for (var h = a.length - 1; h >= 0; h--) {
              if (e = a[h]) {
                g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g;
              }
            }
          }
          if (f > 3 && g) {
            Object.defineProperty(b, c, g);
          }
          return g;
        };
        d.__exportStar = function (a, b) {
          for (var c in a) {
            if (!(c === "default" || Object.prototype.hasOwnProperty.call(b, c))) {
              i(b, a, c);
            }
          }
        };
        d.__extends = b;
        d.__generator = h;
        d.__importDefault = function (a) {
          if (a && a.__esModule) {
            return a;
          } else {
            return {
              default: a
            };
          }
        };
        d.__importStar = function (a) {
          if (a && a.__esModule) {
            return a;
          }
          var b = {};
          if (a != null) {
            for (var c in a) {
              if (c !== "default" && Object.prototype.hasOwnProperty.call(a, c)) {
                i(b, a, c);
              }
            }
          }
          n(b, a);
          return b;
        };
        d.__makeTemplateObject = function (a, b) {
          if (Object.defineProperty) {
            Object.defineProperty(a, "raw", {
              value: b
            });
          } else {
            a.raw = b;
          }
          return a;
        };
        d.__metadata = function (a, b) {
          if (typeof Reflect == "object" && typeof Reflect.metadata == "function") {
            return Reflect.metadata(a, b);
          }
        };
        d.__param = function (a, b) {
          return function (c, d) {
            b(c, d, a);
          };
        };
        d.__read = k;
        d.__rest = function (a, b) {
          var c = {};
          for (var d in a) {
            if (Object.prototype.hasOwnProperty.call(a, d) && b.indexOf(d) < 0) {
              c[d] = a[d];
            }
          }
          if (a != null && typeof Object.getOwnPropertySymbols == "function") {
            var e = 0;
            for (d = Object.getOwnPropertySymbols(a); e < d.length; e++) {
              if (b.indexOf(d[e]) < 0 && Object.prototype.propertyIsEnumerable.call(a, d[e])) {
                c[d[e]] = a[d[e]];
              }
            }
          }
          return c;
        };
        d.__spread = function () {
          for (var a = [], b = 0; b < arguments.length; b++) {
            a = a.concat(k(arguments[b]));
          }
          return a;
        };
        d.__spreadArray = l;
        d.__spreadArrays = function () {
          for (var a = 0, b = 0, c = arguments.length; b < c; b++) {
            a += arguments[b].length;
          }
          var d = Array(a);
          var e = 0;
          for (b = 0; b < c; b++) {
            for (var f = arguments[b], g = 0, h = f.length; g < h; g++, e++) {
              d[e] = f[g];
            }
          }
          return d;
        };
        d.__values = j;
        d.__classPrivateFieldGet = function (a, b, c, d) {
          if (c === "a" && !d) {
            throw new TypeError("Private accessor was defined without a getter");
          }
          if (typeof b == "function" ? a !== b || !d : !b.has(a)) {
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          }
          if (c === "m") {
            return d;
          } else if (c === "a") {
            return d.call(a);
          } else if (d) {
            return d.value;
          } else {
            return b.get(a);
          }
        };
        d.__classPrivateFieldSet = function (a, b, c, d, e) {
          if (d === "m") {
            throw new TypeError("Private method is not writable");
          }
          if (d === "a" && !e) {
            throw new TypeError("Private accessor was defined without a setter");
          }
          if (typeof b == "function" ? a !== b || !e : !b.has(a)) {
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          }
          if (d === "a") {
            e.call(a, c);
          } else if (e) {
            e.value = c;
          } else {
            b.set(a, c);
          }
          return c;
        };
        var o = c !== undefined ? c : e !== undefined ? e : typeof global != "undefined" ? global : d !== undefined ? d : {};
        function p(a) {
          return a && a.Math == Math && a;
        }
        var q = p(typeof c == "object" && c) || p(typeof e == "object" && e) || p(typeof d == "object" && d) || p(typeof o == "object" && o) || function () {
          return this;
        }() || Function("", "return this")();
        var r = {};
        function s(a) {
          try {
            return !!a();
          } catch (a) {
            return true;
          }
        }
        var t = !s(function () {
          return Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            }
          })[1] != 7;
        });
        var u = !s(function () {
          var a = function () {}.bind();
          return typeof a != "function" || a.hasOwnProperty("prototype");
        });
        var v = u;
        var w = Function.prototype.call;
        var x = v ? w.bind(w) : function () {
          return w.apply(w, arguments);
        };
        var y = {};
        var z = {}.propertyIsEnumerable;
        var A = Object.getOwnPropertyDescriptor;
        var B = A && !z.call({
          1: 2
        }, 1);
        y.f = B ? function (a) {
          var b = A(this, a);
          return !!b && b.enumerable;
        } : z;
        var C;
        var D;
        function E(a, b) {
          return {
            enumerable: !(a & 1),
            configurable: !(a & 2),
            writable: !(a & 4),
            value: b
          };
        }
        var F = u;
        var G = Function.prototype;
        var H = G.call;
        var I = F && G.bind.bind(H, H);
        var J = F ? I : function (a) {
          return function () {
            return H.apply(a, arguments);
          };
        };
        var K = J;
        var L = K({}.toString);
        var M = K("".slice);
        function N(a) {
          return M(L(a), 8, -1);
        }
        var O = s;
        var P = N;
        var Q = Object;
        var R = J("".split);
        var S = O(function () {
          return !Q("z").propertyIsEnumerable(0);
        }) ? function (a) {
          if (P(a) == "String") {
            return R(a, "");
          } else {
            return Q(a);
          }
        } : Q;
        function T(a) {
          return a == null;
        }
        var U = T;
        var V = TypeError;
        function W(a) {
          if (U(a)) {
            throw V("Can't call method on " + a);
          }
          return a;
        }
        var X = S;
        var Y = W;
        function Z(a) {
          return X(Y(a));
        }
        var $ = typeof document == "object" && document.all;
        var _ = {
          all: $,
          IS_HTMLDDA: $ === undefined && $ !== undefined
        };
        var aa = _.all;
        var ba = _.IS_HTMLDDA ? function (a) {
          return typeof a == "function" || a === aa;
        } : function (a) {
          return typeof a == "function";
        };
        var ca = ba;
        var da = _.all;
        var ea = _.IS_HTMLDDA ? function (a) {
          if (typeof a == "object") {
            return a !== null;
          } else {
            return ca(a) || a === da;
          }
        } : function (a) {
          if (typeof a == "object") {
            return a !== null;
          } else {
            return ca(a);
          }
        };
        var fa = q;
        var ha = ba;
        function ia(a) {
          if (ha(a)) {
            return a;
          } else {
            return undefined;
          }
        }
        function ja(a, b) {
          if (arguments.length < 2) {
            return ia(fa[a]);
          } else {
            return fa[a] && fa[a][b];
          }
        }
        var ka = J({}.isPrototypeOf);
        var la = typeof navigator != "undefined" && navigator.userAgent + "" || "";
        var ma = q;
        var na = la;
        var oa = ma.process;
        var pa = ma.Deno;
        var qa = oa && oa.versions || pa && pa.version;
        var ra = qa && qa.v8;
        if (ra) {
          D = (C = ra.split("."))[0] > 0 && C[0] < 4 ? 1 : +(C[0] + C[1]);
        }
        if (!D && na && (!(C = na.match(/Edge\/(\d+)/)) || C[1] >= 74) && (C = na.match(/Chrome\/(\d+)/))) {
          D = +C[1];
        }
        var sa = D;
        var ta = !!Object.getOwnPropertySymbols && !s(function () {
          var a = Symbol();
          return !(a + "") || !(Object(a) instanceof Symbol) || !Symbol.sham && sa && sa < 41;
        });
        var ua = ta && !Symbol.sham && typeof Symbol.iterator == "symbol";
        var va = ja;
        var wa = ba;
        var xa = ka;
        var ya = Object;
        var za = ua ? function (a) {
          return typeof a == "symbol";
        } : function (a) {
          var b = va("Symbol");
          return wa(b) && xa(b.prototype, ya(a));
        };
        var Aa = String;
        var Ba = ba;
        var Ca = TypeError;
        function Da(a) {
          if (Ba(a)) {
            return a;
          }
          throw Ca(function (a) {
            try {
              return Aa(a);
            } catch (a) {
              return "Object";
            }
          }(a) + " is not a function");
        }
        var Ea = T;
        var Fa = x;
        var Ga = ba;
        var Ha = ea;
        var Ia = TypeError;
        var Ja = {
          exports: {}
        };
        var Ka = q;
        var La = Object.defineProperty;
        function Ma(a, b) {
          try {
            La(Ka, a, {
              value: b,
              configurable: true,
              writable: true
            });
          } catch (c) {
            Ka[a] = b;
          }
          return b;
        }
        var Na = Ma;
        var Oa = "__core-js_shared__";
        var Pa = q[Oa] || Na(Oa, {});
        var Qa = Pa;
        (Ja.exports = function (a, b) {
          return Qa[a] || (Qa[a] = b !== undefined ? b : {});
        })("versions", []).push({
          version: "3.29.1",
          mode: "global",
          copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",
          source: "https://github.com/zloirock/core-js"
        });
        var Ra = Ja.exports;
        var Sa = W;
        var Ta = Object;
        var Ua = J({}.hasOwnProperty);
        var Va = Object.hasOwn || function (a, b) {
          return Ua(Ta(Sa(a)), b);
        };
        var Wa = J;
        var Xa = 0;
        var Ya = Math.random();
        var Za = Wa(1 .toString);
        function $a(a) {
          return "Symbol(" + (a === undefined ? "" : a) + ")_" + Za(++Xa + Ya, 36);
        }
        var _a = Ra;
        var ab = Va;
        var cb = $a;
        var db = ta;
        var eb = ua;
        var gb = q.Symbol;
        var hb = _a("wks");
        var ib = eb ? gb.for || gb : gb && gb.withoutSetter || cb;
        function jb(a) {
          if (!ab(hb, a)) {
            hb[a] = db && ab(gb, a) ? gb[a] : ib("Symbol." + a);
          }
          return hb[a];
        }
        var kb = x;
        var lb = ea;
        var mb = za;
        var pb = TypeError;
        var qb = jb("toPrimitive");
        function rb(a, b) {
          if (!lb(a) || mb(a)) {
            return a;
          }
          var c;
          var d = function (a, b) {
            var c = a[b];
            if (Ea(c)) {
              return undefined;
            } else {
              return Da(c);
            }
          }(a, qb);
          if (d) {
            if (b === undefined) {
              b = "default";
            }
            c = kb(d, a, b);
            if (!lb(c) || mb(c)) {
              return c;
            }
            throw pb("Can't convert object to primitive value");
          }
          if (b === undefined) {
            b = "number";
          }
          return function (a, b) {
            var c;
            var d;
            if (b === "string" && Ga(c = a.toString) && !Ha(d = Fa(c, a))) {
              return d;
            }
            if (Ga(c = a.valueOf) && !Ha(d = Fa(c, a))) {
              return d;
            }
            if (b !== "string" && Ga(c = a.toString) && !Ha(d = Fa(c, a))) {
              return d;
            }
            throw Ia("Can't convert object to primitive value");
          }(a, b);
        }
        var tb = za;
        function vb(a) {
          var b = rb(a, "string");
          if (tb(b)) {
            return b;
          } else {
            return b + "";
          }
        }
        var wb = ea;
        var xb = q.document;
        var zb = wb(xb) && wb(xb.createElement);
        function Ab(a) {
          if (zb) {
            return xb.createElement(a);
          } else {
            return {};
          }
        }
        var Bb = Ab;
        var Cb = !t && !s(function () {
          return Object.defineProperty(Bb("div"), "a", {
            get: function () {
              return 7;
            }
          }).a != 7;
        });
        var Db = t;
        var Eb = x;
        var Fb = y;
        var Gb = E;
        var Hb = Z;
        var Ib = vb;
        var Kb = Va;
        var Mb = Cb;
        var Nb = Object.getOwnPropertyDescriptor;
        r.f = Db ? Nb : function (a, b) {
          a = Hb(a);
          b = Ib(b);
          if (Mb) {
            try {
              return Nb(a, b);
            } catch (a) {}
          }
          if (Kb(a, b)) {
            return Gb(!Eb(Fb.f, a, b), a[b]);
          }
        };
        var Qb = {};
        var Rb = t && s(function () {
          return Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: false
          }).prototype != 42;
        });
        var Sb = ea;
        var Ub = String;
        var Vb = TypeError;
        function Wb(a) {
          if (Sb(a)) {
            return a;
          }
          throw Vb(Ub(a) + " is not an object");
        }
        var Xb = t;
        var Yb = Cb;
        var Zb = Rb;
        var $b = Wb;
        var _b = vb;
        var ac = TypeError;
        var bc = Object.defineProperty;
        var dc = Object.getOwnPropertyDescriptor;
        var ec = "enumerable";
        var fc = "configurable";
        var gc = "writable";
        Qb.f = Xb ? Zb ? function (a, b, c) {
          $b(a);
          b = _b(b);
          $b(c);
          if (typeof a == "function" && b === "prototype" && "value" in c && gc in c && !c[gc]) {
            var d = dc(a, b);
            if (d && d[gc]) {
              a[b] = c.value;
              c = {
                configurable: fc in c ? c[fc] : d[fc],
                enumerable: ec in c ? c[ec] : d[ec],
                writable: false
              };
            }
          }
          return bc(a, b, c);
        } : bc : function (a, b, c) {
          $b(a);
          b = _b(b);
          $b(c);
          if (Yb) {
            try {
              return bc(a, b, c);
            } catch (a) {}
          }
          if ("get" in c || "set" in c) {
            throw ac("Accessors not supported");
          }
          if ("value" in c) {
            a[b] = c.value;
          }
          return a;
        };
        var hc = Qb;
        var ic = E;
        var jc = t ? function (a, b, c) {
          return hc.f(a, b, ic(1, c));
        } : function (a, b, c) {
          a[b] = c;
          return a;
        };
        var kc = {
          exports: {}
        };
        var lc = t;
        var mc = Function.prototype;
        var nc = lc && Object.getOwnPropertyDescriptor;
        var oc = Va(mc, "name");
        var pc = {
          EXISTS: oc,
          PROPER: oc && false,
          CONFIGURABLE: oc && (!lc || lc && nc(mc, "name").configurable)
        };
        var qc = ba;
        var rc = Pa;
        var sc = J(Function.toString);
        if (!qc(rc.inspectSource)) {
          rc.inspectSource = function (a) {
            return sc(a);
          };
        }
        var tc;
        var uc;
        var vc;
        var wc = rc.inspectSource;
        var xc = ba;
        var yc = q.WeakMap;
        var zc = xc(yc) && /native code/.test(yc + "");
        var Ac = $a;
        var Bc = Ra("keys");
        function Cc(a) {
          return Bc[a] || (Bc[a] = Ac(a));
        }
        var Dc = {};
        var Ec = zc;
        var Fc = q;
        var Gc = ea;
        var Hc = jc;
        var Ic = Va;
        var Jc = Pa;
        var Kc = Cc;
        var Lc = Dc;
        var Mc = "Object already initialized";
        var Nc = Fc.TypeError;
        var Oc = Fc.WeakMap;
        if (Ec || Jc.state) {
          var Pc = Jc.state || (Jc.state = new Oc());
          Pc.get = Pc.get;
          Pc.has = Pc.has;
          Pc.set = Pc.set;
          tc = function (a, b) {
            if (Pc.has(a)) {
              throw Nc(Mc);
            }
            b.facade = a;
            Pc.set(a, b);
            return b;
          };
          uc = function (a) {
            return Pc.get(a) || {};
          };
          vc = function (a) {
            return Pc.has(a);
          };
        } else {
          var Qc = Kc("state");
          Lc[Qc] = true;
          tc = function (a, b) {
            if (Ic(a, Qc)) {
              throw Nc(Mc);
            }
            b.facade = a;
            Hc(a, Qc, b);
            return b;
          };
          uc = function (a) {
            if (Ic(a, Qc)) {
              return a[Qc];
            } else {
              return {};
            }
          };
          vc = function (a) {
            return Ic(a, Qc);
          };
        }
        var Rc = {
          set: tc,
          get: uc,
          has: vc,
          enforce: function (a) {
            if (vc(a)) {
              return uc(a);
            } else {
              return tc(a, {});
            }
          },
          getterFor: function (a) {
            return function (b) {
              var c;
              if (!Gc(b) || (c = uc(b)).type !== a) {
                throw Nc("Incompatible receiver, " + a + " required");
              }
              return c;
            };
          }
        };
        var Sc = J;
        var Tc = s;
        var Uc = ba;
        var Vc = Va;
        var Wc = t;
        var Xc = pc.CONFIGURABLE;
        var Yc = wc;
        var Zc = Rc.enforce;
        var $c = Rc.get;
        var _c = String;
        var ad = Object.defineProperty;
        var cd = Sc("".slice);
        var dd = Sc("".replace);
        var ed = Sc([].join);
        var gd = Wc && !Tc(function () {
          return ad(function () {}, "length", {
            value: 8
          }).length !== 8;
        });
        var hd = (String + "").split("String");
        var id = kc.exports = function (a, b, c) {
          if (cd(_c(b), 0, 7) === "Symbol(") {
            b = "[" + dd(_c(b), /^Symbol\(([^)]*)\)/, "$1") + "]";
          }
          if (c && c.getter) {
            b = "get " + b;
          }
          if (c && c.setter) {
            b = "set " + b;
          }
          if (!Vc(a, "name") || Xc && a.name !== b) {
            if (Wc) {
              ad(a, "name", {
                value: b,
                configurable: true
              });
            } else {
              a.name = b;
            }
          }
          if (gd && c && Vc(c, "arity") && a.length !== c.arity) {
            ad(a, "length", {
              value: c.arity
            });
          }
          try {
            if (c && Vc(c, "constructor") && c.constructor) {
              if (Wc) {
                ad(a, "prototype", {
                  writable: false
                });
              }
            } else if (a.prototype) {
              a.prototype = undefined;
            }
          } catch (a) {}
          var d = Zc(a);
          if (!Vc(d, "source")) {
            d.source = ed(hd, typeof b == "string" ? b : "");
          }
          return a;
        };
        Function.prototype.toString = id(function () {
          return Uc(this) && $c(this).source || Yc(this);
        }, "toString");
        var jd = kc.exports;
        var kd = ba;
        var ld = Qb;
        var md = jd;
        var pd = Ma;
        var qd = {};
        var rd = Math.ceil;
        var nb = Math.floor;
        var sd = Math.trunc || function (a) {
          var b = +a;
          return (b > 0 ? nb : rd)(b);
        };
        var td = sd;
        function vd(a) {
          var b = +a;
          if (b != b || b === 0) {
            return 0;
          } else {
            return td(b);
          }
        }
        var wd = vd;
        var xd = Math.max;
        var zd = Math.min;
        var Ad = vd;
        var Bd = Math.min;
        function Cd(a) {
          if (a > 0) {
            return Bd(Ad(a), 9007199254740991);
          } else {
            return 0;
          }
        }
        var Dd = Cd;
        var Ed = Z;
        function Fd(a) {
          return function (b, c, d) {
            var e;
            var f = Ed(b);
            var g = Dd(f.length);
            var h = function (a, b) {
              var c = wd(a);
              if (c < 0) {
                return xd(c + b, 0);
              } else {
                return zd(c, b);
              }
            }(d, g);
            if (a && c != c) {
              for (; g > h;) {
                if ((e = f[h++]) != e) {
                  return true;
                }
              }
            } else {
              for (; g > h; h++) {
                if ((a || h in f) && f[h] === c) {
                  return a || h || 0;
                }
              }
            }
            return !a && -1;
          };
        }
        var Gd = {
          includes: Fd(true),
          indexOf: Fd(false)
        };
        var nd = Va;
        var Hd = Z;
        var Id = Gd.indexOf;
        var Kd = Dc;
        var Md = J([].push);
        function Nd(a, b) {
          var c;
          var d = Hd(a);
          var e = 0;
          var f = [];
          for (c in d) {
            if (!nd(Kd, c) && nd(d, c)) {
              Md(f, c);
            }
          }
          for (; b.length > e;) {
            if (nd(d, c = b[e++])) {
              if (!~Id(f, c)) {
                Md(f, c);
              }
            }
          }
          return f;
        }
        var Qd = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        var Rd = Nd;
        var Sd = Qd.concat("length", "prototype");
        qd.f = Object.getOwnPropertyNames || function (a) {
          return Rd(a, Sd);
        };
        var Ud = {
          f: Object.getOwnPropertySymbols
        };
        var Vd = ja;
        var Wd = qd;
        var Xd = Ud;
        var Yd = Wb;
        var Zd = J([].concat);
        var $d = Vd("Reflect", "ownKeys") || function (a) {
          var b = Wd.f(Yd(a));
          var c = Xd.f;
          if (c) {
            return Zd(b, c(a));
          } else {
            return b;
          }
        };
        var _d = Va;
        var ae = $d;
        var be = r;
        var ce = Qb;
        var de = s;
        var ee = ba;
        var fe = /#|\.prototype\./;
        function ge(a, b) {
          var c = ie[he(a)];
          return c == ke || c != je && (ee(b) ? de(b) : !!b);
        }
        var he = ge.normalize = function (a) {
          return (a + "").replace(fe, ".").toLowerCase();
        };
        var ie = ge.data = {};
        var je = ge.NATIVE = "N";
        var ke = ge.POLYFILL = "P";
        var le = ge;
        var me = q;
        var ne = r.f;
        var oe = jc;
        function pe(a, b, c, d) {
          if (!d) {
            d = {};
          }
          var e = d.enumerable;
          var f = d.name !== undefined ? d.name : b;
          if (kd(c)) {
            md(c, f, d);
          }
          if (d.global) {
            if (e) {
              a[b] = c;
            } else {
              pd(b, c);
            }
          } else {
            try {
              if (d.unsafe) {
                if (a[b]) {
                  e = true;
                }
              } else {
                delete a[b];
              }
            } catch (a) {}
            if (e) {
              a[b] = c;
            } else {
              ld.f(a, b, {
                value: c,
                enumerable: false,
                configurable: !d.nonConfigurable,
                writable: !d.nonWritable
              });
            }
          }
          return a;
        }
        var qe = Ma;
        function re(a, b, c) {
          for (var d = ae(b), e = ce.f, f = be.f, g = 0; g < d.length; g++) {
            var h = d[g];
            if (!(_d(a, h) || c && _d(c, h))) {
              e(a, h, f(b, h));
            }
          }
        }
        var Pb = le;
        function se(a, b) {
          var c;
          var d;
          var e;
          var f;
          var g;
          var h = a.target;
          var i = a.global;
          var j = a.stat;
          if (c = i ? me : j ? me[h] || qe(h, {}) : (me[h] || {}).prototype) {
            for (d in b) {
              f = b[d];
              e = a.dontCallGetSet ? (g = ne(c, d)) && g.value : c[d];
              if (!Pb(i ? d : h + (j ? "." : "#") + d, a.forced) && e !== undefined) {
                if (typeof f == typeof e) {
                  continue;
                }
                re(f, e);
              }
              if (a.sham || e && e.sham) {
                oe(f, "sham", true);
              }
              pe(c, d, f, a);
            }
          }
        }
        var te = {};
        var ue = Nd;
        var ve = Qd;
        var we = Object.keys || function (a) {
          return ue(a, ve);
        };
        var xe = t;
        var ye = Rb;
        var ze = Qb;
        var Ae = Wb;
        var Be = Z;
        var Ce = we;
        te.f = xe && !ye ? Object.defineProperties : function (a, b) {
          Ae(a);
          for (var c, d = Be(b), e = Ce(b), f = e.length, g = 0; f > g;) {
            ze.f(a, c = e[g++], d[c]);
          }
          return a;
        };
        var De;
        var Ee = ja("document", "documentElement");
        var Pd = Wb;
        var Fe = te;
        var Ge = Qd;
        var He = Dc;
        var Ie = Ee;
        var Je = Ab;
        var Ke = "prototype";
        var Le = "script";
        var Me = Cc("IE_PROTO");
        function Ne() {}
        function Oe(a) {
          return "<" + Le + ">" + a + "</" + Le + ">";
        }
        function Pe(a) {
          a.write(Oe(""));
          a.close();
          var b = a.parentWindow.Object;
          a = null;
          return b;
        }
        function Qe() {
          try {
            De = new ActiveXObject("htmlfile");
          } catch (a) {}
          var a;
          var b;
          var c;
          Qe = typeof document != "undefined" ? document.domain && De ? Pe(De) : (b = Je("iframe"), c = "java" + Le + ":", b.style.display = "none", Ie.appendChild(b), b.src = c + "", (a = b.contentWindow.document).open(), a.write(Oe("document.F=Object")), a.close(), a.F) : Pe(De);
          for (var d = Ge.length; d--;) {
            delete Qe[Ke][Ge[d]];
          }
          return Qe();
        }
        He[Me] = true;
        var Re = jb;
        var Se = Object.create || function (a, b) {
          var c;
          if (a !== null) {
            Ne[Ke] = Pd(a);
            c = new Ne();
            Ne[Ke] = null;
            c[Me] = a;
          } else {
            c = Qe();
          }
          if (b === undefined) {
            return c;
          } else {
            return Fe.f(c, b);
          }
        };
        var Te = Qb.f;
        var Ue = Re("unscopables");
        var Ve = Array.prototype;
        if (Ve[Ue] == null) {
          Te(Ve, Ue, {
            configurable: true,
            value: Se(null)
          });
        }
        var We;
        var Xe = Gd.includes;
        se({
          target: "Array",
          proto: true,
          forced: s(function () {
            return ![,].includes();
          })
        }, {
          includes: function (a) {
            return Xe(this, a, arguments.length > 1 ? arguments[1] : undefined);
          }
        });
        We = "includes";
        Ve[Ue][We] = true;
        var Ye = q;
        var Ze = J;
        function $e(a, b) {
          return Ze(Ye[a].prototype[b]);
        }
        $e("Array", "includes");
        var _e = {
          [jb("toStringTag")]: "z"
        };
        var af = _e + "" == "[object z]";
        var bf = ba;
        var cf = N;
        var df = jb("toStringTag");
        var ef = Object;
        var ff = cf(function () {
          return arguments;
        }()) == "Arguments";
        var gf = af ? cf : function (a) {
          var b;
          var c;
          var d;
          if (a === undefined) {
            return "Undefined";
          } else if (a === null) {
            return "Null";
          } else if (typeof (c = function (a, b) {
            try {
              return a[b];
            } catch (a) {}
          }(b = ef(a), df)) == "string") {
            return c;
          } else if (ff) {
            return cf(b);
          } else if ((d = cf(b)) == "Object" && bf(b.callee)) {
            return "Arguments";
          } else {
            return d;
          }
        };
        var hf = String;
        function jf(a) {
          if (gf(a) === "Symbol") {
            throw TypeError("Cannot convert a Symbol value to a string");
          }
          return hf(a);
        }
        var kf = vd;
        var lf = jf;
        var yb = W;
        var mf = RangeError;
        var nf = J;
        var of = Cd;
        var pf = jf;
        var qf = W;
        var rf = nf(function (a) {
          var b = lf(yb(this));
          var c = "";
          var d = kf(a);
          if (d < 0 || d == Infinity) {
            throw mf("Wrong number of repetitions");
          }
          for (; d > 0; (d >>>= 1) && (b += b)) {
            if (d & 1) {
              c += b;
            }
          }
          return c;
        });
        var sf = nf("".slice);
        var tf = Math.ceil;
        function uf(a) {
          return function (b, c, d) {
            var e;
            var f;
            var g = pf(qf(b));
            var h = of(c);
            var i = g.length;
            var j = d === undefined ? " " : pf(d);
            if (h <= i || j == "") {
              return g;
            } else {
              if ((f = rf(j, tf((e = h - i) / j.length))).length > e) {
                f = sf(f, 0, e);
              }
              if (a) {
                return g + f;
              } else {
                return f + g;
              }
            }
          };
        }
        var vf = {
          start: uf(false),
          end: uf(true)
        };
        var wf = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(la);
        var xf = vf.start;
        se({
          target: "String",
          proto: true,
          forced: wf
        }, {
          padStart: function (a) {
            return xf(this, a, arguments.length > 1 ? arguments[1] : undefined);
          }
        });
        $e("String", "padStart");
        var yf = vf.end;
        se({
          target: "String",
          proto: true,
          forced: wf
        }, {
          padEnd: function (a) {
            return yf(this, a, arguments.length > 1 ? arguments[1] : undefined);
          }
        });
        $e("String", "padEnd");
        var zf = t;
        var yd = J;
        var Af = we;
        var Bf = Z;
        var Cf = yd(y.f);
        var Df = yd([].push);
        function Ef(a) {
          return function (b) {
            for (var c, d = Bf(b), e = Af(d), f = e.length, g = 0, h = []; f > g;) {
              c = e[g++];
              if (!(zf && !Cf(d, c))) {
                Df(h, a ? [c, d[c]] : d[c]);
              }
            }
            return h;
          };
        }
        var Ff = {
          entries: Ef(true),
          values: Ef(false)
        };
        var Gf = Ff.values;
        se({
          target: "Object",
          stat: true
        }, {
          values: function (a) {
            return Gf(a);
          }
        });
        var Hf = q;
        Hf.Object.values;
        var If = Ff.entries;
        se({
          target: "Object",
          stat: true
        }, {
          entries: function (a) {
            return If(a);
          }
        });
        Hf.Object.entries;
        var Kf = vb;
        var Mf = Qb;
        var Nf = E;
        var Of = $d;
        var Pf = Z;
        var Qf = r;
        function Rf(a, b, c) {
          var d = Kf(b);
          if (d in a) {
            Mf.f(a, d, Nf(0, c));
          } else {
            a[d] = c;
          }
        }
        se({
          target: "Object",
          stat: true,
          sham: !t
        }, {
          getOwnPropertyDescriptors: function (a) {
            for (var b, c, d = Pf(a), e = Qf.f, f = Of(d), g = {}, h = 0; f.length > h;) {
              if ((c = e(d, b = f[h++])) !== undefined) {
                Rf(g, b, c);
              }
            }
            return g;
          }
        });
        Hf.Object.getOwnPropertyDescriptors;
        var Sf;
        var Uf;
        var Vf = {
          exports: {}
        };
        Sf = Vf;
        Uf = Vf.exports;
        (function (a, b) {
          var c = "function";
          var d = "object";
          var e = "string";
          var f = "model";
          var g = "name";
          var h = "type";
          var i = "vendor";
          var j = "version";
          var k = "architecture";
          var l = "console";
          var m = "mobile";
          var n = "tablet";
          var o = "smarttv";
          var p = "wearable";
          var q = "embedded";
          var r = {
            extend: function (a, b) {
              var c = {};
              for (var d in a) {
                if (b[d] && b[d].length % 2 == 0) {
                  c[d] = b[d].concat(a[d]);
                } else {
                  c[d] = a[d];
                }
              }
              return c;
            },
            has: function (a, b) {
              return typeof a === e && b.toLowerCase().indexOf(a.toLowerCase()) !== -1;
            },
            lowerize: function (a) {
              return a.toLowerCase();
            },
            major: function (a) {
              if (typeof a === e) {
                return a.replace(/[^\d\.]/g, "").split(".")[0];
              } else {
                return b;
              }
            },
            trim: function (a, b) {
              a = a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              if (b === undefined) {
                return a;
              } else {
                return a.substring(0, 255);
              }
            }
          };
          var s = {
            rgx: function (a, e) {
              for (var f, g, h, i, j, k, l = 0; l < e.length && !j;) {
                var m = e[l];
                var n = e[l + 1];
                for (f = g = 0; f < m.length && !j;) {
                  if (j = m[f++].exec(a)) {
                    for (h = 0; h < n.length; h++) {
                      k = j[++g];
                      if (typeof (i = n[h]) === d && i.length > 0) {
                        if (i.length == 2) {
                          if (typeof i[1] == c) {
                            this[i[0]] = i[1].call(this, k);
                          } else {
                            this[i[0]] = i[1];
                          }
                        } else if (i.length == 3) {
                          if (typeof i[1] !== c || i[1].exec && i[1].test) {
                            this[i[0]] = k ? k.replace(i[1], i[2]) : b;
                          } else {
                            this[i[0]] = k ? i[1].call(this, k, i[2]) : b;
                          }
                        } else if (i.length == 4) {
                          this[i[0]] = k ? i[3].call(this, k.replace(i[1], i[2])) : b;
                        }
                      } else {
                        this[i] = k || b;
                      }
                    }
                  }
                }
                l += 2;
              }
            },
            str: function (a, c) {
              for (var e in c) {
                if (typeof c[e] === d && c[e].length > 0) {
                  for (var f = 0; f < c[e].length; f++) {
                    if (r.has(c[e][f], a)) {
                      if (e === "?") {
                        return b;
                      } else {
                        return e;
                      }
                    }
                  }
                } else if (r.has(c[e], a)) {
                  if (e === "?") {
                    return b;
                  } else {
                    return e;
                  }
                }
              }
              return a;
            }
          };
          var t = {
            browser: {
              oldSafari: {
                version: {
                  "1.0": "/8",
                  1.2: "/1",
                  1.3: "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/"
                }
              },
              oldEdge: {
                version: {
                  0.1: "12.",
                  21: "13.",
                  31: "14.",
                  39: "15.",
                  41: "16.",
                  42: "17.",
                  44: "18."
                }
              }
            },
            os: {
              windows: {
                version: {
                  ME: "4.90",
                  "NT 3.11": "NT3.51",
                  "NT 4.0": "NT4.0",
                  2000: "NT 5.0",
                  XP: ["NT 5.1", "NT 5.2"],
                  Vista: "NT 6.0",
                  7: "NT 6.1",
                  8: "NT 6.2",
                  8.1: "NT 6.3",
                  10: ["NT 6.4", "NT 10.0"],
                  RT: "ARM"
                }
              }
            }
          };
          var u = {
            browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [j, [g, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [j, [g, "Edge"]], [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i], [g, j], [/opios[\/\s]+([\w\.]+)/i], [j, [g, "Opera Mini"]], [/\sopr\/([\w\.]+)/i], [j, [g, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i], [g, j], [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [j, [g, "UCBrowser"]], [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i], [j, [g, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [j, [g, "WeChat"]], [/konqueror\/([\w\.]+)/i], [j, [g, "Konqueror"]], [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i], [j, [g, "IE"]], [/yabrowser\/([\w\.]+)/i], [j, [g, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[g, /(.+)/, "$1 Secure Browser"], j], [/focus\/([\w\.]+)/i], [j, [g, "Firefox Focus"]], [/opt\/([\w\.]+)/i], [j, [g, "Opera Touch"]], [/coc_coc_browser\/([\w\.]+)/i], [j, [g, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [j, [g, "Dolphin"]], [/coast\/([\w\.]+)/i], [j, [g, "Opera Coast"]], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [j, [g, "MIUI Browser"]], [/fxios\/([\w\.-]+)/i], [j, [g, "Firefox"]], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[g, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[g, /(.+)/, "$1 Browser"], j], [/(comodo_dragon)\/([\w\.]+)/i], [[g, /_/g, " "], j], [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i], [g, j], [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i], [g], [/;fbav\/([\w\.]+);/i], [j, [g, "Facebook"]], [/FBAN\/FBIOS|FB_IAB\/FB4A/i], [[g, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i], [g, j], [/\bgsa\/([\w\.]+)\s.*safari\//i], [j, [g, "GSA"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [j, [g, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[g, "Chrome WebView"], j], [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i], [j, [g, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [g, j], [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i], [j, [g, "Mobile Safari"]], [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i], [j, g], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [g, [j, s.str, t.browser.oldSafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [g, j], [/(navigator|netscape)\/([\w\.-]+)/i], [[g, "Netscape"], j], [/ile\svr;\srv:([\w\.]+)\).+firefox/i], [j, [g, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [g, j]],
            cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[k, "amd64"]], [/(ia32(?=;))/i], [[k, r.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[k, "ia32"]], [/\b(aarch64|armv?8e?l?)\b/i], [[k, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[k, "armhf"]], [/windows\s(ce|mobile);\sppc;/i], [[k, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[k, /ower/, "", r.lowerize]], [/(sun4\w)[;\)]/i], [[k, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[k, r.lowerize]]],
            device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i], [f, [i, "Samsung"], [h, n]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i], [f, [i, "Samsung"], [h, m]], [/\((ip(?:hone|od)[\s\w]*);/i], [f, [i, "Apple"], [h, m]], [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [f, [i, "Apple"], [h, n]], [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i], [f, [i, "Huawei"], [h, n]], [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i], [f, [i, "Huawei"], [h, m]], [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i], [[f, /_/g, " "], [i, "Xiaomi"], [h, m]], [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i], [[f, /_/g, " "], [i, "Xiaomi"], [h, n]], [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i], [f, [i, "OPPO"], [h, m]], [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i], [f, [i, "Vivo"], [h, m]], [/\s(rmx[12]\d{3})(?:\sbuild|;)/i], [f, [i, "Realme"], [h, m]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i], [f, [i, "Motorola"], [h, m]], [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [f, [i, "Motorola"], [h, n]], [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i], [f, [i, "LG"], [h, n]], [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i], [f, [i, "LG"], [h, m]], [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i], [f, [i, "Lenovo"], [h, n]], [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i], [[f, /_/g, " "], [i, "Nokia"], [h, m]], [/droid.+;\s(pixel\sc)[\s)]/i], [f, [i, "Google"], [h, n]], [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i], [f, [i, "Google"], [h, m]], [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [f, [i, "Sony"], [h, m]], [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i], [[f, "Xperia Tablet"], [i, "Sony"], [h, n]], [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i], [f, [i, "OnePlus"], [h, m]], [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i], [f, [i, "Amazon"], [h, n]], [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i], [[f, "Fire Phone"], [i, "Amazon"], [h, m]], [/\((playbook);[\w\s\),;-]+(rim)/i], [f, i, [h, n]], [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i], [f, [i, "BlackBerry"], [h, m]], [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i], [f, [i, "ASUS"], [h, n]], [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i], [f, [i, "ASUS"], [h, m]], [/(nexus\s9)/i], [f, [i, "HTC"], [h, n]], [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [i, [f, /_/g, " "], [h, m]], [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [f, [i, "Acer"], [h, n]], [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i], [f, [i, "Meizu"], [h, m]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [i, f, [h, m]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i], [i, f, [h, n]], [/\s(surface\sduo)\s/i], [f, [i, "Microsoft"], [h, n]], [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i], [f, [i, "Fairphone"], [h, m]], [/\s(u304aa)\sbuild/i], [f, [i, "AT&T"], [h, m]], [/sie-(\w*)/i], [f, [i, "Siemens"], [h, m]], [/[;\/]\s?(rct\w+)\sbuild/i], [f, [i, "RCA"], [h, n]], [/[;\/\s](venue[\d\s]{2,7})\sbuild/i], [f, [i, "Dell"], [h, n]], [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i], [f, [i, "Verizon"], [h, n]], [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i], [f, [i, "Barnes & Noble"], [h, n]], [/[;\/]\s(tm\d{3}\w+)\sbuild/i], [f, [i, "NuVision"], [h, n]], [/;\s(k88)\sbuild/i], [f, [i, "ZTE"], [h, n]], [/;\s(nx\d{3}j)\sbuild/i], [f, [i, "ZTE"], [h, m]], [/[;\/]\s?(gen\d{3})\sbuild.*49h/i], [f, [i, "Swiss"], [h, m]], [/[;\/]\s?(zur\d{3})\sbuild/i], [f, [i, "Swiss"], [h, n]], [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i], [f, [i, "Zeki"], [h, n]], [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i], [[i, "Dragon Touch"], f, [h, n]], [/[;\/]\s?(ns-?\w{0,9})\sbuild/i], [f, [i, "Insignia"], [h, n]], [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i], [f, [i, "NextBook"], [h, n]], [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i], [[i, "Voice"], f, [h, m]], [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i], [[i, "LvTel"], f, [h, m]], [/;\s(ph-1)\s/i], [f, [i, "Essential"], [h, m]], [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i], [f, [i, "Envizen"], [h, n]], [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i], [f, [i, "MachSpeed"], [h, n]], [/[;\/]\s?tu_(1491)\sbuild/i], [f, [i, "Rotor"], [h, n]], [/(shield[\w\s]+)\sbuild/i], [f, [i, "Nvidia"], [h, n]], [/(sprint)\s(\w+)/i], [i, f, [h, m]], [/(kin\.[onetw]{3})/i], [[f, /\./g, " "], [i, "Microsoft"], [h, m]], [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [f, [i, "Zebra"], [h, n]], [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i], [f, [i, "Zebra"], [h, m]], [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i], [i, f, [h, l]], [/droid.+;\s(shield)\sbuild/i], [f, [i, "Nvidia"], [h, l]], [/(playstation\s[345portablevi]+)/i], [f, [i, "Sony"], [h, l]], [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i], [f, [i, "Microsoft"], [h, l]], [/smart-tv.+(samsung)/i], [i, [h, o]], [/hbbtv.+maple;(\d+)/i], [[f, /^/, "SmartTV"], [i, "Samsung"], [h, o]], [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i], [[i, "LG"], [h, o]], [/(apple)\s?tv/i], [i, [f, "Apple TV"], [h, o]], [/crkey/i], [[f, "Chromecast"], [i, "Google"], [h, o]], [/droid.+aft([\w])(\sbuild\/|\))/i], [f, [i, "Amazon"], [h, o]], [/\(dtv[\);].+(aquos)/i], [f, [i, "Sharp"], [h, o]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[i, r.trim], [f, r.trim], [h, o]], [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i], [[h, o]], [/((pebble))app\/[\d\.]+\s/i], [i, f, [h, p]], [/droid.+;\s(glass)\s\d/i], [f, [i, "Google"], [h, p]], [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i], [f, [i, "Zebra"], [h, p]], [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i], [i, [h, q]], [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i], [f, [h, m]], [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i], [f, [h, n]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[h, r.lowerize]], [/(android[\w\.\s\-]{0,9});.+build/i], [f, [i, "Generic"]], [/(phone)/i], [[h, m]]],
            engine: [[/windows.+\sedge\/([\w\.]+)/i], [j, [g, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [j, [g, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [g, j], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [j, g]],
            os: [[/microsoft\s(windows)\s(vista|xp)/i], [g, j], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i], [g, [j, s.str, t.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[g, "Windows"], [j, s.str, t.os.windows.version]], [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i], [[j, /_/g, "."], [g, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i], [[g, "Mac OS"], [j, /_/g, "."]], [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i], [g, j], [/\(bb(10);/i], [j, [g, "BlackBerry"]], [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i], [j, [g, "Symbian"]], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[g, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [j, [g, "webOS"]], [/crkey\/([\d\.]+)/i], [j, [g, "Chromecast"]], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[g, "Chromium OS"], j], [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i], [g, j], [/(sunos)\s?([\w\.\d]*)/i], [[g, "Solaris"], j], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [g, j]]
          };
          function v(c, d) {
            if (typeof c == "object") {
              d = c;
              c = b;
            }
            if (!(this instanceof v)) {
              return new v(c, d).getResult();
            }
            var f = c || (a !== undefined && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : "");
            var g = d ? r.extend(u, d) : u;
            this.getBrowser = function () {
              var a = {
                name: b,
                version: b
              };
              s.rgx.call(a, f, g.browser);
              a.major = r.major(a.version);
              return a;
            };
            this.getCPU = function () {
              var a = {
                architecture: b
              };
              s.rgx.call(a, f, g.cpu);
              return a;
            };
            this.getDevice = function () {
              var a = {
                vendor: b,
                model: b,
                type: b
              };
              s.rgx.call(a, f, g.device);
              return a;
            };
            this.getEngine = function () {
              var a = {
                name: b,
                version: b
              };
              s.rgx.call(a, f, g.engine);
              return a;
            };
            this.getOS = function () {
              var a = {
                name: b,
                version: b
              };
              s.rgx.call(a, f, g.os);
              return a;
            };
            this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
              };
            };
            this.getUA = function () {
              return f;
            };
            this.setUA = function (a) {
              f = typeof a === e && a.length > 255 ? r.trim(a, 255) : a;
              return this;
            };
            this.setUA(f);
            return this;
          }
          v.VERSION = "0.7.28";
          v.BROWSER = {
            NAME: g,
            MAJOR: "major",
            VERSION: j
          };
          v.CPU = {
            ARCHITECTURE: k
          };
          v.DEVICE = {
            MODEL: f,
            VENDOR: i,
            TYPE: h,
            CONSOLE: l,
            MOBILE: m,
            SMARTTV: o,
            TABLET: n,
            WEARABLE: p,
            EMBEDDED: q
          };
          v.ENGINE = {
            NAME: g,
            VERSION: j
          };
          v.OS = {
            NAME: g,
            VERSION: j
          };
          if (Sf.exports) {
            Uf = Sf.exports = v;
          }
          Uf.UAParser = v;
          var w = a !== undefined && (a.jQuery || a.Zepto);
          if (w && !w.ua) {
            var x = new v();
            w.ua = x.getResult();
            w.ua.get = function () {
              return x.getUA();
            };
            w.ua.set = function (a) {
              x.setUA(a);
              var b = x.getResult();
              for (var c in b) {
                w.ua[c] = b[c];
              }
            };
          }
        })(typeof e == "object" ? e : Vf.exports);
        var Wf = Vf.exports;
        var Xf = "safari";
        var Yf = "safari webview";
        var Zf = "Android";
        var $f = "iOS";
        var _f = "OS X";
        var ag = "Windows";
        var cg = "app";
        var dg = Wf.UAParser.DEVICE.VENDOR;
        var eg = Wf.UAParser.DEVICE.MODEL;
        var gg = Wf.UAParser.DEVICE.TYPE;
        var hg = Wf.UAParser.DEVICE.MOBILE;
        var ig = Wf.UAParser.BROWSER.NAME;
        var jg = Wf.UAParser.BROWSER.VERSION;
        var kg = {
          device: [[/android.+;\s(vivo)\s?([\w\s]+)\sbuild/i], [dg, eg, [gg, hg]], [/d\/honor([\w\s-]+)[;\)]/i], [eg, [dg, "Huawei"], [gg, hg]]],
          browser: [[/(trident)\/([\w\.]+)/i], [[ig, "ie"], jg], [/(?:ms|\()(ie)\s([\w\.]+)/i], [ig, jg], [/(edge|edgios|edga)\/([\w\.]+)/i], [[ig, "edge"], jg], [/(ucbrowser)\/([\w\.]+)/i, /(ucmini)\/([\w\.]+)/i], [[ig, "ucbrowser"], jg], [/(qihoobrowser|qhbrowser)\/([\w\.]+)/i], [[ig, "360browser"], jg], [/(lite baiduboxapp)\/([\w\.]+)/i], [[ig, "lite baidu"], jg], [/(baiduboxapp|baidubrowser|bidubrowser|bdbrowser)\/([\w\.]+)/i], [[ig, "baidubrowser"], jg], [/(maxthon|mxbrowser|mxios)\/([\w\.]+)/i], [[ig, "maxthon"], jg], [/(fxios|firefox)\/([\w\.]+)/i], [[ig, "firefox"], jg], [/(opera|oupeng|opr\/?)\/([\w\.]+)/i], [[ig, "opera"], jg], [/(alohabrowser)\/([\w\.]+)/i], [[ig, "alohabrowser"], jg], [/(sogoumobilebrowser|sogou)\/([\w\.]+)/i], [[ig, "sogou"], jg], [/(liebaofast|liebao)\/([\w\.]+)/i], [[ig, "liebao"], jg], [/(miuibrowser)\/([\w\.]+)/i], [[ig, "MIUI Browser"], jg], [/(qzone)\/([\w\.]+)/i], [ig, jg]]
        };
        var Tb = {
          browser: [[/(edge|edgios|edga)\/([\w\.]+)/i], [[ig, "edge"], jg], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [jg, [ig, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[ig, /(.+)/, "$1 WebView"], jg], [/(chrome|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [ig, jg], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[ig, "Chrome"], jg], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [jg, [ig, "Mobile Safari"]], [/version\/([\w\.]+).+?(safari)/i], [jg, ig], [/(fxios|firefox)\/([\w\.]+)/i], [[ig, "firefox"], jg], [/(trident)\/([\w\.]+)/i], [[ig, "ie"], jg], [/(?:ms|\()(ie)\s([\w\.]+)/i], [ig, jg], [/iphone os/i], [[ig, "Safari WebView"], [jg, "0"]]]
        };
        e.UAParser = Wf.UAParser;
        var lg = function () {
          function a() {
            this._ua = new Wf.UAParser(e.navigator.userAgent, kg);
            var a = this._ua.getBrowser();
            this.A = a.version;
            this.p = a.name;
            var b = new Wf.UAParser(e.navigator.userAgent, Tb).getBrowser();
            this.m = b.version;
            this.g = b.name;
            var c;
            var d = this._ua.getOS().name;
            if (!d) {
              d = "";
            }
            d = /Android/i.test(d) ? Zf : /ios/i.test(d) ? $f : /Mac OS/i.test(d) ? _f : /Windows (Phone|Mobile)/i.test(d) ? "WP8" : /Windows/i.test(d) ? ag : "Unknown";
            this.S = d;
            var f = /pgmobileshell/;
            var g = /pgshell/;
            c = /pgapp/.test(this._ua.getUA()) || f.test(this._ua.getUA()) ? cg : g.test(this._ua.getUA()) ? "pc" : "browser";
            this.k = c;
            if (c === cg && d === $f) {
              this.p = Xf;
              this.A = this._ua.getOS().version;
            }
          }
          a.prototype.getUA = function () {
            return this._ua;
          };
          a.prototype.isMobile = function () {
            if (this.M === undefined) {
              this.M = /mobile|android|iphone|ipad/i.test(this._ua.getUA());
            }
            return this.M;
          };
          a.prototype.getOSName = function () {
            return this.S;
          };
          a.prototype.getPlatform = function () {
            return this.k;
          };
          a.prototype.getOSMajorVersion = function () {
            if (!this.H) {
              this.H = -1;
              var a = this._ua.getOS().version;
              if (a === undefined) {
                return -1;
              }
              if (!(a = a.match(/[^.]+/g))) {
                return -1;
              }
              this.H = +a[0];
            }
            return this.H;
          };
          a.prototype.getOSVersion = function () {
            return this._ua.getOS().version || "-1";
          };
          a.prototype.getBrowserType = function () {
            if (this.p) {
              return this.p;
            } else {
              return "";
            }
          };
          a.prototype.getBrowserBaseType = function () {
            if (this.g) {
              return this.g;
            } else {
              return "";
            }
          };
          a.prototype.getBrowserVersion = function () {
            if (this.A) {
              return this.A;
            } else {
              return "-1";
            }
          };
          a.prototype.getBrowserBaseVersion = function () {
            if (this.m) {
              return this.m;
            } else {
              return "-1";
            }
          };
          a.prototype.getDeviceInfo = function () {
            if (!this.V) {
              this.V = this._ua.getDevice();
            }
            return this.V;
          };
          return a;
        }();
        function mg(a, b) {
          var c = [];
          if (a) {
            var d = b.split("-")[1];
            c = b.split("-")[0].split(".");
            var e = d.split(".");
            c = c.concat(e);
          } else {
            c = b.split(".");
          }
          return c;
        }
        function Tf(a) {
          return a.map(function (a) {
            if (isNaN(a)) {
              return a;
            } else {
              return parseInt(a, 10);
            }
          });
        }
        function ng(a, b) {
          for (var c = a.indexOf("-") > -1, d = b.indexOf("-") > -1, e = Tf(mg(c, a)), f = Tf(mg(d, b)), g = Math.max(e.length, f.length), h = 0; h < g; h++) {
            e[h] = e[h] === undefined ? 0 : e[h];
            f[h] = f[h] === undefined ? 0 : f[h];
            if (e[h] > f[h]) {
              return 1;
            }
            if (e[h] < f[h]) {
              return -1;
            }
          }
          return 0;
        }
        location.port;
        var pg;
        var og;
        var qg;
        var rg;
        var sg;
        var tg = "shell:compatible_failure_reason";
        var vg = "game_shell";
        var wg = "Cache Install";
        var xg = "Cache Update";
        var yg = "";
        var Td = "";
        var zg = "";
        function Ag(a) {
          return function () {
            var b = a.reduce(function (a, b) {
              return a.then(function (a) {
                if (a) {
                  return b();
                } else {
                  return a;
                }
              });
            }, e.Promise.resolve(1)).catch(function () {
              return 0;
            });
            return b;
          };
        }
        function Bg(a, b) {
          if (a < 0) {
            return b.substring(e.Number("0x0"), b.length + a);
          } else {
            return b.substring(a);
          }
        }
        function Cg(a) {
          return Bg(1, a);
        }
        function Dg(a) {
          return Bg(2, a);
        }
        function Eg(a) {
          return new e.Uint8Array(a).reduce(function (a, b) {
            return a + e.Number(b).toString(16).padStart(2, "0");
          }, "");
        }
        function Fg(a, b, c) {
          return !(!a || !b) && (c ? a.substring(e.Number("0x0"), b.length) === b : a === b);
        }
        function Gg() {
          var a = "subtle";
          var b = Mg(e, "crypto");
          return !(!b || Ig(b, a) || !Ng(b, a));
        }
        function Hg(a) {
          return (a + "").indexOf("[native code]") !== -1;
        }
        function Ig(a, b) {
          return e.Object.prototype.hasOwnProperty.call(a, b);
        }
        function Kg(a, b) {
          if (a) {
            if (a.get) {
              if (Hg(a.get)) {
                return a.get.apply(b);
              } else {
                return undefined;
              }
            } else {
              return a.value;
            }
          } else {
            return a;
          }
        }
        function Mg(a, b) {
          try {
            return Kg(e.Object.getOwnPropertyDescriptor(a, b), a);
          } catch (a) {}
        }
        function Ng(a, b) {
          try {
            var c = e.Object.getPrototypeOf(a);
            return Kg(e.Object.getOwnPropertyDescriptor(c, b), a);
          } catch (a) {}
        }
        function Pg(a, b) {
          if (b === undefined) {
            b = e;
          }
          return Ug(a).split(".").reduce(function (a, b) {
            if (a != null) {
              return Mg(a, b);
            } else {
              return a;
            }
          }, b);
        }
        function Qg() {
          return [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"].find(function (a) {
            return !Hg(Pg(a));
          }) == null;
        }
        function Rg(a) {
          for (var b = [" SamsungBrowser", "UCBrowser", " Quark", "QQBrowser", " OppoBrowser", " VivoBrowser", " 360(SE|EE) ", " b(?:ai)?d(?:u)?browser "], c = [], d = 0; a;) {
            if (a & 1 && d < b.length) {
              c.push(Ug(b[d]));
            }
            a >>= 1;
            d++;
          }
          if (c.length) {
            var f = new e.RegExp(c.join(Ug(" | ")), Ug(" i "));
            return function () {
              return f.test(e.navigator.userAgent);
            };
          }
          return function () {
            return false;
          };
        }
        function Sg(a) {
          var b = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][a];
          return b.substring(e.Number("0xf") - e.Number("0x0" + b[0]));
        }
        function Tg() {
          return Vg(1, e[Sg(4)].random() * 20);
        }
        function Ug(a) {
          return a.replace(/ /g, "");
        }
        function Vg(a, b) {
          return a === e[Sg(4)].max(a, b);
        }
        function Wg(a) {
          for (var b = "", c = 0, d = a.length; c < d; c++) {
            b += a[c] || "";
          }
          return b;
        }
        function Xg(a) {
          for (var b = e.atob(a), c = new e.Uint8Array(b.length), d = 0; d < b.length; d++) {
            c[d] = b.charCodeAt(d);
          }
          return c;
        }
        function Yg() {
          var a = [95, 95].map(function (a) {
            return e.String.fromCharCode(a);
          }).join("");
          var b = a + "refer or " + a + Cg("ahv");
          var c = Sg(1);
          var d = Cg("esplit");
          function f(a) {
            var f = new e.URLSearchParams(e[c].search);
            var g = b[d](" ")[a];
            if (g) {
              return f.get(g);
            } else {
              return null;
            }
          }
          var g = Sg(3);
          var h = e[c][g];
          var i = f(0);
          var j = f(1);
          var k = f(2);
          var l = k == null ? undefined : k.substring(e.Number("0x0"), e.Number("0x2"));
          var m = k == null ? undefined : k.substring(e.Number("0x2"));
          var n = Object.create(null);
          n.B = l;
          n.j = h;
          n.P = i;
          n.G = j;
          n.R = k;
          n.Z = m;
          return n;
        }
        (function (a) {
          a[a.WebWindow = 1] = "WebWindow";
          a[a.WebMacOS = 2] = "WebMacOS";
          a[a.WebAndroid = 3] = "WebAndroid";
          a[a.WebIOS = 4] = "WebIOS";
          a[a.WebOthers = 5] = "WebOthers";
          a[a.CordovaAndroid = 6] = "CordovaAndroid";
          a[a.CordovaIOS = 7] = "CordovaIOS";
          a[a.ElectronWindow = 8] = "ElectronWindow";
          a[a.ElectronMac = 9] = "ElectronMac";
          a[a.NativeWindow = 10] = "NativeWindow";
          a[a.NativeMac = 11] = "NativeMac";
          a[a.NativeAndroid = 12] = "NativeAndroid";
          a[a.NativeIOS = 13] = "NativeIOS";
          a[a.Robot = 99] = "Robot";
        })(pg || (pg = {}));
        (function (a) {
          a[a.All = 0] = "All";
          a[a.Portrait = 1] = "Portrait";
          a[a.Landscape = 2] = "Landscape";
        })(og || (og = {}));
        (function (a) {
          a[a.None = 0] = "None";
          a[a.All = 1] = "All";
          a[a.Portrait = 2] = "Portrait";
          a[a.Landscape = 3] = "Landscape";
        })(qg || (qg = {}));
        (function (a) {
          a[a.Image = 1] = "Image";
        })(rg || (rg = {}));
        var Zg;
        var $g = undefined;
        function _g(a) {
          $g = a;
        }
        function ah() {
          return $g || e.location;
        }
        Zg = {
          language: ["l", "language"],
          token: ["ot", "operator_token"],
          session: ["ops", "operator_player_session"],
          type: ["btt", "bet_type"],
          from: ["f", "from"],
          definition: ["definition"],
          tourid: ["tournament_id"],
          real: ["rurl", "real_url"],
          no_audio: ["no_audio"],
          plugin: ["pg_plugin"],
          time_elapsed: ["te", "time_elapsed"],
          reminder_interval: ["ri", "reminder_interval"],
          operator_param: ["op", "operator_param"],
          cached_t: ["ct", "cached_t"],
          or_cover: ["oc", "or_cover"],
          origin: ["or"],
          api_origin: ["ao"],
          login_method: ["lgm"]
        };
        var bh = function () {
          function a(a) {
            this.O = new URLSearchParams(a);
          }
          a.prototype.entries = function () {
            return this.O.entries();
          };
          a.prototype.keys = function () {
            return this.O.keys();
          };
          a.prototype.values = function () {
            return this.O.values();
          };
          a.prototype[Symbol.iterator] = function () {
            return this.O[Symbol.iterator]();
          };
          a.prototype.append = function (a, b) {
            this.O.append(a, b);
          };
          a.prototype.delete = function (a) {
            var b = Zg && Zg[a] || a;
            if (Array.isArray(b)) {
              for (var c = 0; c < b.length; c++) {
                if (this.O.has(b[c])) {
                  return this.O.delete(b[c]);
                }
              }
            }
            this.O.delete(b);
          };
          a.prototype.get = function (a) {
            var b = Zg && Zg[a] || a;
            if (Array.isArray(b)) {
              for (var c = 0; c < b.length; c++) {
                if (this.O.has(b[c])) {
                  return this.O.get(b[c]);
                }
              }
            }
            if (this.O.has(b)) {
              return this.O.get(b);
            } else {
              return this.O.get(a);
            }
          };
          a.prototype.getAll = function (a) {
            return this.O.getAll(a);
          };
          a.prototype.has = function (a) {
            var b = Zg && Zg[a] || a;
            if (Array.isArray(b)) {
              for (var c = 0; c < b.length; c++) {
                if (this.O.has(b[c])) {
                  return this.O.has(b[c]);
                }
              }
            }
            return this.O.has(b);
          };
          a.prototype.set = function (a, b) {
            this.O.set(a, b);
          };
          a.prototype.sort = function () {
            this.O.sort();
          };
          a.prototype.toString = function () {
            return this.O.toString();
          };
          a.prototype.forEach = function (a, b) {
            return this.O.forEach(a, b);
          };
          return a;
        }();
        function ch(a, b) {
          if (!b || b.length == 0) {
            throw Error("Invalid key!");
          }
          for (var c = "", d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            var f = b.charCodeAt(d % b.length);
            c += String.fromCharCode(e ^ f);
          }
          return c;
        }
        function dh(a) {
          if (!eh(a)) {
            return a;
          }
          var b = function (a) {
            return a.replace(/^CAkQ(xzA|C3z|2Q5)/, "");
          }(a);
          var c = b.length % 4 > 0 ? 4 - b.length % 4 : 0;
          if (c > 0) {
            for (var d = 0; d < c; d++) {
              b += "=";
            }
          }
          return b;
        }
        function eh(a) {
          return /^CAkQ(xzA|C3z|2Q5)/.test(a);
        }
        function fh(a) {
          var b;
          (function (a) {
            a.kReplacer = "[a-zA-Z=]";
          })(b || (b = {}));
          var c = typeof e == "object" ? e : global;
          var d = c.parseInt;
          var f = c.isNaN;
          var g = c.String;
          var h = c.RegExp;
          var i = c.Number;
          var j = h(b.kReplacer, "g");
          var k = d(a == null ? undefined : a.substring(i("0x0"), i("0x2")), i("0xa"));
          if (f(k) && (a == null ? undefined : a.includes("."))) {
            return a;
          } else if (a == null) {
            return undefined;
          } else {
            return a.substring(i("0x2")).replace(j, function (a) {
              if (a === "=") {
                return ".";
              }
              var b = a.charCodeAt(0);
              var c = b >= i("0x61") ? i("0x61") : i("0x41");
              var d = (b - c - k + i("0x1a")) % i("0x1a") + c;
              return g.fromCharCode(d);
            });
          }
        }
        var gh = function () {
          function a() {
            this.D = new bh(e.location.search);
            this.N = new lg();
            var a = e.location;
            if (this.D.get("origin")) {
              a = function (a) {
                if (a.indexOf("//") === 0) {
                  a = e.location.protocol + a;
                } else if (!/^https?:/.test(a)) {
                  a = e.location.protocol + "//" + a;
                }
                if (e.URL) {
                  var b = new URL(a);
                  return {
                    href: a,
                    host: b.host,
                    origin: b.origin,
                    protocol: b.protocol,
                    pathname: b.pathname
                  };
                }
                var c = /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(\?[^#]*)?(#.*)?/.exec(a);
                if (!c) {
                  throw Error("Unable to create location");
                }
                return {
                  href: c[0],
                  host: c[2],
                  origin: c[1] + "://" + c[2],
                  protocol: c[1] + ":",
                  pathname: c[3]
                };
              }(fh(this.D.get("origin")) + e.location.pathname);
              _g(a);
            }
            var b = e.location.host;
            if (this.D.get("api_origin")) {
              b = fh(this.D.get("api_origin"));
            }
            (function (a) {
              if (!e.ApiDomain) {
                e.ApiDomain = function (a) {
                  var b = a;
                  if (b.split(".").length > 2) {
                    b = b.substr(b.indexOf(".") + 1);
                  }
                  return "https://api." + b + "/";
                }(a);
              }
            })(b);
            if (this.D.get("orientation")) {
              var c = this.D.get("orientation");
              if (!(c !== "port" && c !== "land")) {
                this.T = c;
              }
            }
            if (this.D.get("resize") !== undefined) {
              this.W = this.D.get("resize");
            }
          }
          a.prototype.getGPU = function () {
            for (var a = document.createElement("canvas"), b = undefined, c = "", d = 0, e = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"]; d < e.length; d++) {
              var f = e[d];
              if (b = a.getContext(f)) {
                break;
              }
            }
            if (b) {
              var g = b.getExtension("WEBGL_debug_renderer_info");
              c = g ? b.getParameter(g.UNMASKED_RENDERER_WEBGL) : "";
            }
            return c;
          };
          a.prototype.getBrowserType = function () {
            return this.N.getBrowserType();
          };
          a.prototype.getBrowserBaseType = function () {
            return this.N.getBrowserBaseType();
          };
          a.prototype.getBrowserVersion = function () {
            return this.N.getBrowserVersion();
          };
          a.prototype.getBrowserBaseVersion = function () {
            return this.N.getBrowserBaseVersion();
          };
          a.prototype.getRequestType = function () {
            return this.D.get("req_api") || sg.RequestType || "fetch";
          };
          a.prototype.getDeviceMemory = function () {
            return e.navigator.deviceMemory;
          };
          a.prototype.isWkWebview = function () {
            if (this.U === undefined) {
              this.U = !!e.webkit;
            }
            return this.U;
          };
          a.prototype.isCacheStorageSupported = function () {
            var a;
            if (this.q !== undefined) {
              return this.q;
            }
            try {
              this.q = ((a = e.caches) === null || a === undefined ? undefined : a.open("__test")) instanceof Promise;
            } catch (a) {
              this.q = false;
            }
            return this.q;
          };
          a.prototype.isIOSStandalone = function () {
            if (this.Y === undefined) {
              this.Y = this.getOSName() === $f && navigator.standalone || false;
            }
            return this.Y;
          };
          a.prototype.isChromeStandalone = function () {
            if (this.J === undefined) {
              var a = false;
              if (this.getOSName() === Zf && matchMedia) {
                a = matchMedia("(display-mode: standalone)").matches;
              }
              this.J = a;
            }
            return this.J;
          };
          a.prototype.isMobile = function () {
            return this.N.isMobile();
          };
          a.prototype.isIOS = function () {
            if (this.X === undefined) {
              this.X = $f === this.getOSName();
            }
            return this.X;
          };
          a.prototype.isAndroid = function () {
            if (this.K === undefined) {
              this.K = Zf === this.getOSName();
            }
            return this.K;
          };
          a.prototype.isMac = function () {
            if (this.$ === undefined) {
              this.$ = _f === this.getOSName();
            }
            return this.$;
          };
          a.prototype.isWindows = function () {
            if (this.tt === undefined) {
              this.tt = ag === this.getOSName();
            }
            return this.tt;
          };
          a.prototype.isApp = function () {
            if (this.it === undefined) {
              this.it = cg === this.N.getPlatform();
            }
            return this.it;
          };
          a.prototype.isPc = function () {
            if (this.nt === undefined) {
              this.nt = this.N.getPlatform() === "pc";
            }
            return this.nt;
          };
          a.prototype.isSafari = function () {
            var a = this.getBrowserBaseType().toLowerCase();
            var b = this.getBrowserType().toLowerCase();
            return a === Yf || a === "mobile safari" || b === Xf;
          };
          a.prototype.getResizeMode = function () {
            return this.W || undefined;
          };
          a.prototype.getOSName = function () {
            return this.N.getOSName();
          };
          a.prototype.getOSMajorVersion = function () {
            return this.N.getOSMajorVersion();
          };
          a.prototype.getOSVersion = function () {
            return this.N.getOSVersion();
          };
          a.prototype.getDeviceCompatibleTerms = function () {
            if (!this.et) {
              this.et = sg.Requirements;
            }
            return this.et;
          };
          a.prototype.getURLSearchParam = function () {
            return this.D;
          };
          a.prototype.getPlatform = function () {
            return this.N.getPlatform();
          };
          a.prototype.isIPad = function () {
            if (this.rt === undefined) {
              this.rt = /iPad/.test(this.N.getUA().getUA()) || this.isMac() && navigator.maxTouchPoints > 1;
            }
            return this.rt;
          };
          a.prototype.getDeviceInfo = function () {
            return this.N.getDeviceInfo();
          };
          a.prototype.getRunPlatform = function () {
            if (this.ot === undefined) {
              var a;
              a = this.isAndroid() ? pg.WebAndroid : this.isIOS() ? pg.WebIOS : this.isWindows() ? pg.WebWindow : this.isMac() ? pg.WebMacOS : pg.WebOthers;
              this.ot = a;
            }
            return this.ot;
          };
          a.prototype.getSupportedBrowsers = function () {
            if (!this.st && this.getDeviceCompatibleTerms().whiteList) {
              this.st = [];
              for (var a = 0, b = this.getDeviceCompatibleTerms().whiteList.split(","); a < b.length; a++) {
                var c = b[a].split("-")[0];
                this.st.push(c.toLowerCase());
              }
            }
            return this.st;
          };
          a.prototype.isBrowserTypeSupported = function () {
            for (var a = 0, b = this.getSupportedBrowsers(); a < b.length; a++) {
              var c = b[a];
              if (this.getBrowserBaseType().toLowerCase() === c) {
                return true;
              }
            }
            return false;
          };
          a.prototype.isSecureContext = function () {
            if (e.isSecureContext !== undefined) {
              return e.isSecureContext;
            } else {
              return e.location.protocol === "https:";
            }
          };
          a.prototype.getWhiteListCompatibleCheckInfo = function () {
            if (this.ct === undefined) {
              var a = false;
              var b = false;
              var c = false;
              if (this.getDeviceCompatibleTerms().whiteList) {
                a = true;
                for (var d = 0, e = this.getDeviceCompatibleTerms().whiteList.split(","); d < e.length; d++) {
                  var f = e[d].split("-");
                  var g = f[0];
                  var h = f.length > 1 ? f[1] : "0.0.0";
                  var i = false;
                  if (!(b = RegExp(g, "i").test(this.getBrowserType()))) {
                    if (b = RegExp(g, "i").test(this.getBrowserBaseType())) {
                      i = true;
                    }
                  }
                  if (b && g.toLowerCase() === "webkit" && !this.isWkWebview() && this.isIOS()) {
                    b = false;
                  }
                  if (b) {
                    c = this.getBrowserVersion() === "-1" || ng(i ? this.getBrowserBaseVersion() : this.getBrowserVersion(), h) >= 0;
                    break;
                  }
                }
              }
              this.ct = {
                hasWhiteList: a,
                foundBrowser: b,
                isMinBrowserVersion: c
              };
            }
            return this.ct;
          };
          a.prototype.getMinOSVersionInfo = function () {
            if (this.ut === undefined) {
              var a = false;
              var b = false;
              var c = false;
              if (this.getDeviceCompatibleTerms().minOSVersion) {
                a = true;
                for (var d = 0, e = this.getDeviceCompatibleTerms().minOSVersion.split(","); d < e.length; d++) {
                  var f = e[d].split("-");
                  var g = /MacOS/i.test(f[0]) ? _f : f[0];
                  var h = f.length > 1 ? f[1] : "0.0.0";
                  if (b = RegExp(g, "i").test(this.getOSName())) {
                    c = this.getOSVersion() === "-1" || ng(this.getOSVersion(), h) >= 0;
                    break;
                  }
                }
              }
              this.ut = {
                hasMinOSVersion: a,
                foundOS: b,
                isMinOSVersion: c
              };
            }
            return this.ut;
          };
          a.prototype.getOrientation = function () {
            var a = e.orientation;
            if (a !== undefined) {
              return +a;
            }
            var b = screen.orientation;
            var c = 0;
            if (b) {
              if (b.type === "landscape-primary") {
                c = b.angle;
              }
            } else if (this.getHeight() < this.getWidth()) {
              c = 90;
            }
            return c;
          };
          a.prototype.getOrientationMode = function () {
            if (this.T) {
              return this.T;
            }
            switch (sg.Orientation) {
              case og.All:
                this.T = this.getWidth() > this.getHeight() && !this.isMobile() ? "land" : "port";
                break;
              case og.Landscape:
                this.T = "land";
                break;
              case og.Portrait:
              default:
                this.T = "port";
            }
            return this.T;
          };
          a.prototype.getIs1959Supported = function () {
            if (!(this.ht !== undefined)) {
              if (this.getOrientationMode() === "land") {
                this.ht = sg.SupportXSMaxRatio === qg.All || sg.SupportXSMaxRatio === qg.Landscape;
              } else {
                this.ht = sg.SupportXSMaxRatio === qg.All || sg.SupportXSMaxRatio === qg.Portrait;
              }
            }
            return this.ht;
          };
          a.prototype.getAscpectRatioSupport = function () {
            var a;
            var b;
            if (this.lt) {
              return this.lt;
            }
            var c = this.getOrientationMode() === "land" ? "Landscape" : "Portrait";
            var d = this.isMobile() ? "Mobile" : "Desktop";
            var e = ((b = (a = sg.AspectRatio) === null || a === undefined ? undefined : a[d]) === null || b === undefined ? undefined : b[c]) || undefined;
            if (e) {
              this.lt = e;
              return this.lt;
            } else {
              if (this.getIs1959Supported()) {
                this.lt = {
                  MinRatio: 16 / 9,
                  MaxRatio: 19.5 / 9
                };
              } else if (!this.getIs1959Supported()) {
                this.lt = {
                  MinRatio: 16 / 9,
                  MaxRatio: 16 / 9
                };
              }
              return this.lt;
            }
          };
          a.prototype.isPortrait = function () {
            var a = this.getOrientation();
            return a === 0 || a === 180;
          };
          Object.defineProperty(a.prototype, "audioSupported", {
            get: function () {
              if (!(this.ft !== undefined)) {
                if (this.D.get("no_audio") === "1") {
                  this.ft = false;
                } else {
                  this.ft = this.dt();
                }
              }
              return this.ft;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(a.prototype, "audioContext", {
            get: function () {
              this.vt;
              return this.vt;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(a.prototype, "webpSupported", {
            get: function () {
              return this.At;
            },
            set: function (a) {
              this.At = a;
            },
            enumerable: false,
            configurable: true
          });
          a.prototype.dt = function () {
            if (this.isAndroid() && e.navigator && e.navigator.userAgent) {
              var a = e.navigator.userAgent;
              var b = a.match(/OPR\/([0-6].)/gi);
              if (b && b.length > 0) {
                if (b && parseInt(b[0].split("/")[1], 10) < 46) {
                  return false;
                }
              } else {
                if (a.match(/(edge|edga)\/((\d+)?[\w\.]+)/i)) {
                  return false;
                }
                if (a.match(/vivobrowser/gi)) {
                  return false;
                }
                if (a.match(/bdbrowser/gi)) {
                  return false;
                }
                if (a.match(/baiduboxapp/gi)) {
                  return false;
                }
              }
              if (this.getBrowserType().toLowerCase() === "firefox" && this.getBrowserVersion().indexOf("68.0") === 0) {
                return false;
              }
            }
            if (this.isMac() && this.isSafari()) {
              var c = this.getOSMajorVersion();
              var d = this.getBrowserVersion().split(".")[0];
              if (c === 10 && d === "15") {
                return false;
              }
            }
            try {
              this.vt = new (e.AudioContext || e.webkitAudioContext || e.mozAudioContext || e.oAudioContext)();
            } catch (a) {
              return false;
            }
            if (e.Audio) {
              var f = new Audio();
              var g = f.canPlayType("audio/mp3;").replace(/^no$/, "") !== "";
              var h = f.canPlayType("audio/mpeg;").replace(/^no$/, "") !== "";
              return g || h;
            }
            return false;
          };
          a.prototype.isSwipeUpSupported = function () {
            if (!!this.isMobile()) {
              this.isApp();
            }
            return false;
          };
          a.prototype.shouldShowExceptionAlert = function () {
            return this.D.get("disable_exception_alert") !== "1";
          };
          a.prototype.getWidth = function () {
            return e.innerWidth;
          };
          a.prototype.getHeight = function () {
            return e.innerHeight;
          };
          a.prototype.getDevicePixelRatio = function () {
            return e.devicePixelRatio || 1;
          };
          a.prototype.getScreenWidth = function () {
            return e.screen.width;
          };
          a.prototype.getScreenHeight = function () {
            return e.screen.height;
          };
          a.prototype.getScreenRatio = function () {
            if (this.getScreenWidth() > this.getScreenHeight()) {
              return this.getScreenWidth() / this.getScreenHeight();
            } else {
              return this.getScreenHeight() / this.getScreenWidth();
            }
          };
          a.prototype.hasNotch = function () {
            return this.isIOS() && this.getOrientationMode() === "port" && (this.getWidth() === 375 && this.getHeight() === 812 || this.getWidth() === 414 && this.getHeight() === 896) && this.getIs1959Supported();
          };
          a.prototype.getSafeAreaPadding = function () {
            var a = {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            };
            if (!this.isIOS() || !this.getIs1959Supported()) {
              return a;
            }
            switch (true) {
              case this.isIOSStandalone():
                a.top = 30;
                break;
              case this.isApp():
              case this.hasNotch():
                a.top = 30;
                a.bottom = 15;
            }
            return a;
          };
          a.prototype.getEIF = function () {
            return sg.EIF || 0;
          };
          a.prototype.gt = function () {
            try {
              return e.self !== e.top;
            } catch (a) {
              return true;
            }
          };
          return a;
        }();
        var hh = new gh();
        var Ob = ["language", "definition", "orientation", "browser", "os"];
        var ih = {
          os: ["ios", "android", "windows", "osx"],
          browser: ["safari", "chrome", "edge", "ie", "firefox"],
          definition: ["sd", "hd"],
          language: ["az", "ar", "bg", "bn", "cs", "el", "en", "zh", "da", "de", "es", "et", "fa", "fi", "fr", "hi", "hu", "hy", "id", "it", "ja", "ko", "lo", "lt", "mn", "my", "nl", "no", "pl", "pt", "ro", "ru", "sh", "si", "sk", "sq", "sv", "th", "tr", "uk", "ur", "uz", "vi", "en-stkus", "pt-br"],
          orientation: ["port", "land"]
        };
        function jh(a) {
          var b = {};
          for (var c in a) {
            if (Object.prototype.hasOwnProperty.call(a, c)) {
              var d = a[c];
              b[c] = d !== null && typeof d == "object" ? jh(d) : d;
            }
          }
          return b;
        }
        var kh = {
          basename: "",
          dirname: "",
          extname: ""
        };
        function lh(a) {
          var b = a.lastIndexOf("/");
          if (b === -1) {
            kh.dirname = "";
            kh.basename = a;
          } else {
            kh.dirname = a.substring(0, b);
            kh.basename = a.substring(b + 1);
          }
          var c = kh.basename;
          var d = c.lastIndexOf(".");
          if (d !== -1) {
            kh.extname = c.substring(d + 1);
          }
          return kh;
        }
        var mh = {
          qualifier: "",
          subqualifier: undefined
        };
        function nh(a) {
          var b = a.indexOf("_");
          if (b !== -1) {
            mh.subqualifier = a.substring(b + 1);
            mh.qualifier = a.substring(0, b);
          } else {
            mh.subqualifier = undefined;
            mh.qualifier = a;
          }
          return mh;
        }
        var oh = {
          qualifier: "",
          index: -1
        };
        function ph(a, b) {
          if (b === undefined) {
            b = 0;
          }
          var c = a.indexOf("-", b);
          if (c > 0) {
            oh.qualifier = a.substring(b, c);
            oh.index = c;
          } else {
            oh.qualifier = a.substring(b);
            oh.index = -1;
          }
          return oh;
        }
        var qh = function () {
          function a(a, b, c) {
            this.bt = false;
            this.wt = [];
            (function (a, b) {
              for (var c in a) {
                if (Object.prototype.hasOwnProperty.call(a, c)) {
                  var d = a[c];
                  var e = ih[c];
                  if (e == null || d == null || e.indexOf(d) === -1) {
                    throw Error(`ResourceQualifier: "${c}" is not a valid qualifier definition`);
                  }
                }
              }
              if (b != null) {
                for (var c in b) {
                  if (Object.prototype.hasOwnProperty.call(b, c) && Ob.indexOf(c) === -1) {
                    throw Error(`ResourceQualifier: "${c}" is not a valid subqualifier definition`);
                  }
                }
              }
            })(a, b);
            this.xt = jh(a);
            this.yt = b && jh(b);
            this.St = Ob.filter(function (b) {
              return Object.prototype.hasOwnProperty.call(a, b);
            });
            this.kt = c;
          }
          Object.defineProperty(a.prototype, "urlValidator", {
            get: function () {
              return this.Et;
            },
            set: function (a) {
              this.Et = a;
            },
            enumerable: false,
            configurable: true
          });
          a.prototype.setAssetTable = function (a, b) {
            if (b === undefined) {
              b = false;
            }
            this.assetTable = a;
            this.bt = b;
          };
          Object.defineProperty(a.prototype, "assetTable", {
            get: function () {
              return this.Ct;
            },
            set: function (a) {
              if (this.Ct !== a) {
                if (a != null) {
                  this.Ct = a.slice();
                  this.Mt = Object.create(null);
                } else {
                  this.Ct = undefined;
                  this.Mt = undefined;
                }
                this.bt = false;
              }
            },
            enumerable: false,
            configurable: true
          });
          a.prototype.getResourceURL = function (a, b) {
            var c = this.Ct;
            var d = this.Mt;
            if (!c) {
              throw Error("ResourceQualifier: assetTable is not setup properly!");
            }
            var e = d[a];
            if (e !== undefined) {
              return e;
            }
            var f = this.St;
            var g = this.bt ? this.wt : undefined;
            var h = lh(a);
            var i = h.dirname;
            var j = h.basename;
            var k = h.extname;
            var l = RegExp("^" + (i ? i + "/" : "") + "[^/]+/" + j + "$");
            var m = c.filter(function (a) {
              return l.test(a);
            });
            var n = a;
            if (m.length) {
              for (var o = this.xt, p = this.yt, q = 0, r = 0, s = null, t = 0, u = m.length; t < u; t++) {
                var v = m[t];
                var w = lh(lh(v).dirname).basename;
                var x = 0;
                var y = 0;
                var z = 0;
                do {
                  for (var A = ph(w, z), B = A.qualifier, C = A.index, D = nh(B), E = D.qualifier, F = D.subqualifier, G = 0, H = 0, I = 0, J = f.length; I < J; I++) {
                    var K = f[I];
                    if (E === o[K]) {
                      if (F !== undefined) {
                        var L = p && p[K];
                        if (L) {
                          H = L(F);
                        }
                        if (H > 0) {
                          G = 1 << I;
                        }
                      } else {
                        G = 1 << I;
                      }
                      break;
                    }
                  }
                  if (!(G > 0)) {
                    x = 0;
                    y = 0;
                    break;
                  }
                  x += G;
                  y += H;
                  z = C + 1;
                } while (z > 0);
                if (x > q) {
                  q = x;
                  r = y;
                  s = v;
                } else if (x === q && y > r) {
                  r = y;
                  s = v;
                } else if (x === 0 && g) {
                  g.push(v);
                }
              }
              if (s) {
                n = s;
              }
            }
            if (g && g.length) {
              this.Ct = c.filter(function (a) {
                return g.indexOf(a) === -1;
              });
              g.length = 0;
            }
            if ((n = this.Ht(n, c, k)) && c.indexOf(n) !== -1 && (this.Et == null || this.Et(n, b))) {
              d[a] = n;
            } else {
              d[a] = n = null;
            }
            return n;
          };
          a.prototype.Ht = function (a, b, c) {
            var d;
            if (!a) {
              return null;
            }
            var e = a.replace(c, "");
            var f = (d = this.kt) === null || d === undefined ? undefined : d[c];
            if (!(f == null)) {
              f.some(function (c) {
                var d = `${e}${c}`;
                return !!b.includes(d) && (a = d, true);
              });
            }
            return a;
          };
          return a;
        }();
        var rh = function () {
          function a() {
            for (var a = [], b = 0; b < arguments.length; b++) {
              a[b] = arguments[b];
            }
            if (a.length) {
              this.Vt = a.slice();
            } else {
              this.Vt = [];
            }
          }
          a.prototype.Bt = function () {
            this.Vt.forEach(function (a) {
              return a();
            });
            this.Vt.length = 0;
          };
          Object.defineProperty(a.prototype, "jt", {
            get: function () {
              return this.Vt.length === 0;
            },
            enumerable: false,
            configurable: true
          });
          return a;
        }();
        function sh(a, b, c) {
          return (a += "t. ").substring(b, c);
        }
        function th(a, b) {
          return function (c) {
            if (c === undefined) {
              var d = e["M1at0h".replace(/[0-9]/g, "")];
              c = d.random() * e.Number("0x01f4") * e.Number("0xa") | 0;
            }
            var f = " on".split("").reverse();
            var g = sh("eve" + f[0], 0, 5);
            e["she".padEnd(e.Number("0x5"), "l")].context[g][f[1].concat(f[0])](b, function () {
              (function (a, b) {
                var c = sh("setTimeou", 0, e.Number("0xA"));
                e[c](b, a);
              })(c, a);
            });
          };
        }
        var uh = th(function () {
          var a;
          var b;
          var c = (b = (a = e[e.eval("\"cc\"")]) === null || a === undefined ? undefined : a.Node) === null || b === undefined ? undefined : b.prototype;
          if (c) {
            c.setScale = function () {
              if (this.destroy) {
                this.destroy();
              }
            };
          }
        }, "Game.ViewLoading");
        var Od = th(function () {
          var a;
          var b;
          var c;
          var d;
          (function (a) {
            a.i = "Game.TransactionStateTransition";
            a.o = "intercept";
          })(d || (d = {}));
          if (!((c = (b = (a = e.shell) === null || a === undefined ? undefined : a.context) === null || b === undefined ? undefined : b.event) === null || c === undefined)) {
            c.on(d.i, function (a) {
              a[d.o]();
            });
          }
        }, "Game.ViewSuccess");
        var vh = th(function () {
          var a;
          var b;
          var c;
          var d;
          (function (a) {
            a.i = "Game.TransactionStateComplete";
            a.o = "intercept";
          })(d || (d = {}));
          if (!((c = (b = (a = e.shell) === null || a === undefined ? undefined : a.context) === null || b === undefined ? undefined : b.event) === null || c === undefined)) {
            c.on(d.i, function (a) {
              a[d.o]();
            });
          }
        }, "Game.ViewPopulated");
        function wh() {}
        var xh = wh;
        function yh(a, b, c) {
          if ((typeof a == "object" || typeof a == "string" || a === undefined) && b === undefined && c === undefined) {
            return function (b, c, d) {
              if (d) {
                return zh(b, c, d, a);
              } else {
                return Ah(b, c, a);
              }
            };
          }
          if ((typeof a == "object" || typeof a == "function") && typeof b == "string") {
            var d = a;
            if (c) {
              zh(d, b, c);
            } else {
              Ah(d, b);
            }
          }
        }
        function zh(a, b, c, d) {
          var e = undefined;
          var f = "Class [ " + a.constructor.name + " ] \" " + b + "(...) \" has been deprecated but still in use";
          if (typeof d == "string") {
            e = a[d];
          }
          var g = e || c.value;
          if (d && e) {
            f = "Class [ " + a.constructor.name + " ] Please use \"" + d + "(...)\" instead of \"" + b + "(...)\"";
          } else if (d) {
            f = "Class [ " + a.constructor.name + " ] Unable replace from \"" + b + "(...)\" to \"" + d + "(...)\"";
          }
          c.value = function () {
            xh(f);
            return g.apply(this, arguments);
          };
          return c;
        }
        function Ah(a, b, c) {
          var d;
          var e = "Class [ " + a.constructor.name + " ] \"" + b + "\" has been deprecated but still in use";
          switch (typeof c) {
            case "object":
              if (c) {
                var f = c;
                if (f.newReference) {
                  e = "Class [ " + a.constructor.name + " ] Please use \"" + f.newReference + "\" instead of \"" + b + "\"";
                }
                d = f.defaultValue;
              } else {
                d = a[b];
              }
              break;
            case "string":
              if (c) {
                e = "Class [ " + a.constructor.name + " ] Please use \"" + c + "\" instead of \"" + b + "\"";
              }
              d = a[b];
              break;
            default:
              d = a[b];
          }
          if (delete a[b]) {
            Object.defineProperty(a, b, {
              get: function () {
                xh(e);
                return d;
              },
              set: function (a) {
                xh(e);
                d = a;
              },
              enumerable: true,
              configurable: true
            });
          }
        }
        function Bh(a, b) {
          var c = a.length;
          if (!(b < 0 || b >= c)) {
            a[b] = a[c - 1];
            a.length = c - 1;
          }
        }
        var Ch;
        var Dh = function () {
          function a(a, b) {
            this.count = 0;
            this.Pt = Array(b);
            this.Gt = a;
          }
          a.prototype.get = function () {
            if (this.count > 0) {
              --this.count;
              var a = this.Pt[this.count];
              this.Pt[this.count] = null;
              return a;
            }
            return null;
          };
          a.prototype.put = function (a) {
            var b = this.Pt;
            if (this.count < b.length) {
              if (this.Gt && this.Gt(a) === false) {
                return;
              }
              b[this.count] = a;
              ++this.count;
            }
          };
          a.prototype.resize = function (a) {
            if (a >= 0) {
              this.Pt.length = a;
              if (this.count > a) {
                this.count = a;
              }
            }
          };
          return a;
        }();
        var Eh = new Dh(function (a) {
          a.callback = function () {};
          a.target = undefined;
          a.once = false;
          return true;
        }, 32);
        var Fh = function () {
          function a() {
            this.callback = function () {};
            this.target = undefined;
            this.once = false;
          }
          a.prototype.set = function (a, b, c) {
            this.callback = a;
            this.target = b;
            this.once = !!c;
          };
          return a;
        }();
        var Gh = function () {
          function a() {
            this.callbackInfos = [];
            this.isInvoking = false;
            this.containCancelled = false;
          }
          a.prototype.removeByCallback = function (a) {
            for (var b = 0; b < this.callbackInfos.length; ++b) {
              var c = this.callbackInfos[b];
              if (c && c.callback === a) {
                Eh.put(c);
                Bh(this.callbackInfos, b);
                --b;
              }
            }
          };
          a.prototype.removeByTarget = function (a) {
            for (var b = 0; b < this.callbackInfos.length; ++b) {
              var c = this.callbackInfos[b];
              if (c && c.target === a) {
                Eh.put(c);
                Bh(this.callbackInfos, b);
                --b;
              }
            }
          };
          a.prototype.cancel = function (a) {
            var b = this.callbackInfos[a];
            if (b) {
              Eh.put(b);
              this.callbackInfos[a] = null;
            }
            this.containCancelled = true;
          };
          a.prototype.cancelAll = function () {
            for (var a = 0; a < this.callbackInfos.length; a++) {
              var b = this.callbackInfos[a];
              if (b) {
                Eh.put(b);
                this.callbackInfos[a] = null;
              }
            }
            this.containCancelled = true;
          };
          a.prototype.purgeCancelled = function () {
            for (var a = this.callbackInfos.length - 1; a >= 0; --a) {
              if (!this.callbackInfos[a]) {
                Bh(this.callbackInfos, a);
              }
            }
            this.containCancelled = false;
          };
          a.prototype.clear = function () {
            this.cancelAll();
            this.callbackInfos.length = 0;
            this.isInvoking = false;
            this.containCancelled = false;
          };
          return a;
        }();
        var Hh = new Dh(function (a) {
          a.callbackInfos.length = 0;
          a.isInvoking = false;
          a.containCanceled = false;
          return true;
        }, 16);
        var Ih = function () {
          function a() {
            var a;
            this.callbackTable = ((a = Object.create(null))["."] = true, a["/"] = true, delete a["."], delete a["/"], a);
          }
          a.prototype.on = function (a, b, c, d) {
            var e = this.callbackTable[a];
            if (!e) {
              e = this.callbackTable[a] = Hh.get() || new Gh();
            }
            var f = Eh.get() || new Fh();
            f.set(b, c, d);
            e.callbackInfos.push(f);
          };
          a.prototype.hasEventListener = function (a, b, c) {
            var d = this.callbackTable[a];
            if (!d) {
              return false;
            }
            var e = d.callbackInfos;
            if (!b) {
              if (d.isInvoking) {
                for (var f = 0; f < e.length; ++f) {
                  if (e[f]) {
                    return true;
                  }
                }
                return false;
              }
              return e.length > 0;
            }
            for (f = 0; f < e.length; ++f) {
              var g = e[f];
              if (g && g.callback === b && g.target === c) {
                return true;
              }
            }
            return false;
          };
          a.prototype.removeAll = function (a) {
            if (typeof a != "string") {
              if (a === undefined) {
                for (var b in this.callbackTable) {
                  if (b !== undefined && (c = this.callbackTable[b])) {
                    if (c.isInvoking) {
                      c.cancelAll();
                    } else {
                      c.clear();
                      Hh.put(c);
                      delete this.callbackTable[b];
                    }
                  }
                }
              } else {
                for (var b in this.callbackTable) {
                  var c;
                  if (b !== undefined) {
                    if ((c = this.callbackTable[b]).isInvoking) {
                      for (var d = c.callbackInfos, e = 0; e < d.length; ++e) {
                        var f = d[e];
                        if (f && f.target === a) {
                          c.cancel(e);
                        }
                      }
                    } else {
                      c.removeByTarget(a);
                    }
                  }
                }
              }
            } else if (c = this.callbackTable[a]) {
              if (c.isInvoking) {
                c.cancelAll();
              } else {
                c.clear();
                Hh.put(c);
                delete this.callbackTable[a];
              }
            }
          };
          a.prototype.off = function (a, b, c) {
            var d = this.callbackTable[a];
            if (d) {
              for (var e = d.callbackInfos, f = 0; f < e.length; ++f) {
                var g = e[f];
                if (g && g.callback === b && g.target === c) {
                  if (d.isInvoking) {
                    d.cancel(f);
                  } else {
                    Bh(e, f);
                    Eh.put(g);
                  }
                  return true;
                }
              }
            }
            return false;
          };
          a.prototype.emit = function (a, b, c, d, e, f) {
            var g = this.callbackTable[a];
            if (g) {
              var h = !g.isInvoking;
              g.isInvoking = true;
              for (var i = g.callbackInfos, j = 0, k = i.length; j < k; ++j) {
                var l = i[j];
                if (l) {
                  var m = l.target;
                  var n = l.callback;
                  if (l.once) {
                    this.off(a, n, m);
                  }
                  if (m) {
                    n.call(m, b, c, d, e, f);
                  } else {
                    n(b, c, d, e, f);
                  }
                }
              }
              if (h) {
                g.isInvoking = false;
                if (g.containCancelled) {
                  g.purgeCancelled();
                }
              }
            }
          };
          a.prototype.add = function (a, b, c, d) {
            this.on(a, b, c, d);
          };
          a.prototype.remove = function (a, b, c) {
            return this.off(a, b, c);
          };
          a.prototype.invoke = function (a, b, c, d, e, f) {
            this.emit(a, b, c, d, e, f);
          };
          return a;
        }();
        function Og(a, b) {
          var c = a.indexOf(b);
          if (c >= 0) {
            a[c] = a[a.length - 1];
            --a.length;
          }
        }
        (function (a) {
          a.__eventTargets = "__eventTargets";
        })(Ch || (Ch = {}));
        var Jh;
        var Kh;
        var Lh;
        var Mh = function (a) {
          function c() {
            return a.call(this) || this;
          }
          b(c, a);
          c.prototype.on = function (b, c, d, e) {
            if (!c) {
              throw Error("Callback of event must be non-nil");
            }
            if (!this.hasEventListener(b, c, d)) {
              a.prototype.on.call(this, b, c, d, e);
              if (d && d[Ch.__eventTargets]) {
                d[Ch.__eventTargets].push(this);
              }
            }
            return c;
          };
          c.prototype.off = function (b, c, d) {
            if (!c) {
              var e = this.callbackTable[b];
              if (!e) {
                return false;
              }
              for (var f = e.callbackInfos, g = f.length, h = 0; h < g; ++h) {
                var i = f[h];
                var j = i && i.target;
                if (j && j[Ch.__eventTargets]) {
                  Og(j[Ch.__eventTargets], this);
                }
              }
              this.removeAll(b);
              return g > 0;
            }
            var k = a.prototype.off.call(this, b, c, d);
            if (k && d && d[Ch.__eventTargets]) {
              Og(d[Ch.__eventTargets], this);
            }
            return k;
          };
          c.prototype.targetOff = function (a) {
            this.removeAll(a);
            if (a && a[Ch.__eventTargets]) {
              (function (a, b) {
                for (var c; (c = a.indexOf(b, c)) !== -1;) {
                  a[c] = a[a.length - 1];
                  --a.length;
                }
              })(a[Ch.__eventTargets], this);
            }
          };
          c.prototype.once = function (a, b, c) {
            this.on(a, b, c, true);
          };
          c.prototype.dispatchEvent = function (a) {
            this.emit(a.type, a);
          };
          return c;
        }(Ih);
        (function (a) {
          a[a.STOPPED = 0] = "STOPPED";
          a[a.PAUSED = 1] = "PAUSED";
          a[a.PLAYING = 2] = "PLAYING";
        })(Jh || (Jh = {}));
        (function (a) {
          a.PLAY = "play";
          a.STOP = "stop";
          a.ENDED = "ended";
          a.PAUSE = "pause";
          a.RESUME = "resume";
          a.FADED = "faded";
          a.VOLUME = "volume";
          a.MUTE = "mute";
          a.RATE = "rate";
          a.LOOP = "loop";
          a.SEEK = "seek";
        })(Kh || (Kh = {}));
        var Nh;
        var Oh;
        var Ph;
        var Qh = function (a) {
          function c(b, d) {
            var e = a.call(this) || this;
            e.Rt = false;
            e.Zt = 0;
            e.Ot = 0;
            e.Dt = 1;
            e.Nt = false;
            e.Tt = -1;
            e.Qt = 0;
            var f = c.context;
            var g = e.Lt = f.createGain();
            var h = e.It = b;
            e.Ft = Jh.STOPPED;
            g.connect(f.destination);
            if (d) {
              e.reset(d);
            } else {
              e.Ot = h.duration;
            }
            return e;
          }
          b(c, a);
          Object.defineProperty(c, "context", {
            get: function () {
              if (typeof Lh == "function") {
                Lh = Lh();
              }
              if (Lh) {
                return Lh;
              }
              try {
                Lh = new (e.AudioContext || e.webkitAudioContext || e.mozAudioContext || e.oAudioContext || e.msAudioContext)();
              } catch (a) {
                throw Error(`WebAudio :: context : Audio context not supported in your browser! Error: '${a instanceof Error ? a.message : a}'`);
              }
              return Lh;
            },
            enumerable: false,
            configurable: true
          });
          c.setContext = function (a) {
            Lh = a;
          };
          c.prototype.reset = function (a) {
            this.zt();
            this.Wt(false);
            this.Ut = undefined;
            this.Rt = false;
            this.Dt = 1;
            this.Nt = false;
            this.Tt = -1;
            this.Qt = 0;
            this.Zt = 0;
            this.Ot = this.It.duration;
            if (a !== undefined) {
              var b = a.loop;
              var c = a.volume;
              var d = a.muted;
              var e = a.rate;
              if (typeof b == "boolean") {
                this.Rt = b;
              }
              if (typeof c == "number" && c >= 0 && c <= 1) {
                this.Dt = c;
              }
              if (typeof d == "boolean") {
                this.Nt = d;
              }
              if (typeof e == "number" && e > 0) {
                this.Ut = {
                  applyTime: undefined,
                  rate: e,
                  offset: 0
                };
              }
            }
            this.qt();
            this.Ft = Jh.STOPPED;
          };
          c.prototype.destroy = function () {
            this.reset();
            this.removeAll();
            this.Lt = undefined;
          };
          c.prototype.zt = function () {
            var a = this.Yt;
            if (a) {
              this.Yt = undefined;
              a.onended = null;
              a.stop(0);
              try {
                a.buffer = c.ScratchAudioBuffer || null;
              } catch (a) {}
            }
          };
          c.prototype.play = function (a, b) {
            if (!this.paused) {
              this.Jt(a, b);
              this.emit(Kh.PLAY, this);
            }
          };
          c.prototype.stop = function () {
            if (!this.stopped) {
              if (this.Ut !== undefined) {
                if (this.Ut.rate === 1) {
                  this.Ut = undefined;
                } else {
                  this.Ut.applyTime = undefined;
                  this.Ut.offset = 0;
                }
              }
              this.Xt();
              this.Ft = Jh.STOPPED;
              try {
                this.Kt(0);
              } catch (a) {
                throw Error(`WebAudio :: stop : ${a instanceof Error ? a.message : a}`);
              }
              this.emit(Kh.STOP, this);
            }
          };
          c.prototype.resume = function () {
            if (this.paused) {
              this.Jt();
              this.emit(Kh.RESUME, this);
              return;
            }
          };
          c.prototype.pause = function () {
            if (this.Ft === Jh.PLAYING) {
              this.Xt();
              this.Ft = Jh.PAUSED;
              this.emit(Kh.PAUSE, this);
            }
          };
          c.prototype.Jt = function (a, b, d) {
            if (d === undefined) {
              d = false;
            }
            if (this.playing) {
              this.zt();
              if (!d) {
                this.Qt = 0;
              }
              this.Wt(true);
            }
            var e = this.Qt;
            var f = this.It.duration;
            var g = typeof a == "number" && a >= 0 && a < f;
            var h = typeof b == "number" && b > 0 && (g ? b + a <= f : b <= f);
            if (g || h) {
              a = this.Zt = g ? a : 0;
              b = this.Ot = h ? b : f - a;
            } else {
              a = this.Zt + e;
              b = this.Ot - e;
            }
            var i = c.context;
            var j = i.createBufferSource();
            j.buffer = this.It;
            j.connect(this.Lt);
            this.Tt = i.currentTime - e;
            if (this.Rt) {
              j.loop = true;
              j.loopStart = this.Zt;
              j.loopEnd = this.Zt + this.Ot;
              j.start(0, a);
            } else {
              j.start(0, a, b);
            }
            this.Ft = Jh.PLAYING;
            if (this.Ut && this.Ut.applyTime === undefined) {
              if (this.Ut.rate === 1) {
                this.Ut = undefined;
              } else {
                j.playbackRate.value = this.Ut.rate;
                this.Ut.applyTime = i.currentTime;
              }
            }
            this.$t();
            this.Yt = j;
            j.onended = this.ti.bind(this);
          };
          c.prototype.Xt = function () {
            var a = c.context.currentTime - this.Tt;
            this.Tt = -1;
            if (this.Yt) {
              this.zt();
              if (this.Ut && this.Ut.applyTime !== undefined) {
                a += this.ii();
                this.Ut.applyTime = undefined;
                this.Ut.offset = 0;
              }
            }
            this.Qt = a % this.Ot;
            this.ni();
          };
          Object.defineProperty(c.prototype, "paused", {
            get: function () {
              return this.Ft === Jh.PAUSED;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(c.prototype, "playing", {
            get: function () {
              return this.Ft === Jh.PLAYING;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(c.prototype, "stopped", {
            get: function () {
              return this.Ft === Jh.STOPPED;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(c.prototype, "volume", {
            get: function () {
              return this.Dt;
            },
            set: function (a) {
              this.Dt = a;
              this.Wt(false);
              this.qt();
              this.emit(Kh.VOLUME, this);
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(c.prototype, "instantVolume", {
            get: function () {
              return this.Lt.gain.value;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(c.prototype, "muted", {
            get: function () {
              return this.Nt;
            },
            set: function (a) {
              if (a !== this.Nt) {
                this.Nt = a;
                this.Wt(false);
                this.qt();
                this.emit(Kh.MUTE, this);
              }
            },
            enumerable: false,
            configurable: true
          });
          c.prototype.qt = function () {
            var a = this.Nt ? 0 : this.Dt;
            this.Lt.gain.setValueAtTime(a, c.context.currentTime);
          };
          Object.defineProperty(c.prototype, "rate", {
            get: function () {
              if (this.Ut) {
                return this.Ut.rate;
              } else {
                return 1;
              }
            },
            set: function (a) {
              if (!(a <= 0)) {
                if (this.Ut === undefined) {
                  this.Ut = {
                    applyTime: this.playing ? c.context.currentTime : undefined,
                    rate: a,
                    offset: 0
                  };
                } else {
                  if (this.Ut.rate === a) {
                    return;
                  }
                  if (this.Ut.applyTime !== undefined && this.playing) {
                    this.Ut.offset = this.ii();
                    this.Ut.applyTime = c.context.currentTime;
                  }
                  this.Ut.rate = a;
                }
                if (this.Ut.applyTime !== undefined && this.Yt) {
                  this.Yt.playbackRate.value = a;
                  this.ni();
                  this.$t();
                }
                this.emit(Kh.RATE, this);
              }
            },
            enumerable: false,
            configurable: true
          });
          c.prototype.ii = function () {
            if (this.Ut && this.Ut.applyTime !== undefined) {
              var a = (c.context.currentTime - this.Ut.applyTime) * (this.Ut.rate - 1);
              return this.Ut.offset + a;
            }
            return 0;
          };
          c.prototype.fade = function (a, b, d) {
            var e = this.Nt;
            var f = e ? 0 : a;
            var g = e ? 0 : b;
            if (this.Ft !== Jh.PLAYING || this.Nt || a === b || d === 0) {
              this.volume = b;
            } else {
              var h = d;
              if (this.Ut) {
                d /= this.Ut.rate;
              }
              this.volume = a;
              this.Lt.gain.linearRampToValueAtTime(b, c.context.currentTime + d);
              this.Dt = b;
              this.ei = {
                from: f,
                to: g,
                duration: h,
                cancel: // TOLOOK
                setTimeout(this.ri.bind(this), d * 1000)
              };
            }
          };
          c.prototype.Wt = function (a) {
            if (this.ei !== undefined) {
              if (this.ei.cancel !== undefined) {
                clearTimeout(this.ei.cancel);
              }
              this.Lt.gain.cancelScheduledValues(c.context.currentTime);
              if (a) {
                this.Dt = this.ei.to;
                this.qt();
              }
              this.ei = undefined;
            }
          };
          c.prototype.ni = function () {
            if (this.ei !== undefined && this.ei.cancel) {
              clearTimeout(this.ei.cancel);
              this.ei.cancel = undefined;
              this.Lt.gain.cancelScheduledValues(c.context.currentTime);
            }
          };
          c.prototype.$t = function () {
            if (this.ei !== undefined && !this.ei.cancel) {
              var a = this.ei.to;
              var b = this.ei.from;
              var d = this.ei.duration;
              var e = a - b;
              var f = (this.Lt.gain.value - b) / e;
              if (f < 0 || f > 1) {
                f = 0;
                this.Lt.gain.setValueAtTime(b, c.context.currentTime);
              }
              var g = d * (1 - f);
              if (this.Ut && this.Ut.applyTime !== undefined) {
                g /= this.Ut.rate;
              }
              this.Dt = a;
              this.Lt.gain.linearRampToValueAtTime(a, c.context.currentTime + g);
              this.ei.cancel = // TOLOOK
              setTimeout(this.ri.bind(this), g * 1000);
            }
          };
          Object.defineProperty(c.prototype, "loop", {
            get: function () {
              return this.Rt;
            },
            set: function (a) {
              if (this.Rt !== a) {
                if (this.playing) {
                  this.Xt();
                  this.Rt = a;
                  this.Jt();
                } else {
                  this.Rt = a;
                }
                this.emit(Kh.LOOP, this);
              }
            },
            enumerable: false,
            configurable: true
          });
          c.prototype.seek = function (a) {
            if (!this.stopped) {
              if (a >= this.Ot) {
                if (!this.loop) {
                  if (this.ei) {
                    this.Wt(true);
                  }
                  this.ti();
                  return;
                }
                a %= this.duration;
              }
              try {
                this.Kt(a);
              } catch (a) {
                throw Error(`WebAudio :: seek : ${a instanceof Error ? a.message : a}`);
              }
              if (this.paused) {
                this.resume();
              }
              this.emit(Kh.SEEK, this);
            }
          };
          c.prototype.Kt = function (a) {
            if (a < 0) {
              throw Error("Time value cannot be smaller than 0.");
            }
            this.Wt(true);
            if (this.playing) {
              if (this.Ut && this.Ut.applyTime !== undefined) {
                this.Ut.applyTime = undefined;
                this.Ut.offset = 0;
              }
              this.Xt();
              this.Qt = a;
              this.Jt(undefined, undefined, true);
            } else {
              this.Qt = a;
            }
          };
          Object.defineProperty(c.prototype, "currentTime", {
            get: function () {
              if (this.Ft !== Jh.PLAYING) {
                return this.Qt;
              }
              var a = c.context.currentTime - this.Tt;
              return (a += this.ii()) % this.Ot;
            },
            enumerable: false,
            configurable: true
          });
          c.prototype.ti = function () {
            this.Ft = Jh.STOPPED;
            this.Qt = 0;
            this.zt();
            if (this.Ut !== undefined) {
              if (this.Ut.rate === 1) {
                this.Ut = undefined;
              } else {
                this.Ut.applyTime = undefined;
                this.Ut.offset = 0;
              }
            }
            if (this.ei) {
              this.Wt(true);
              this.emit(Kh.FADED, this);
            }
            this.emit(Kh.ENDED, this);
          };
          c.prototype.ri = function () {
            if (this.ei) {
              this.ei = undefined;
              this.emit(Kh.FADED, this);
            }
          };
          Object.defineProperty(c.prototype, "duration", {
            get: function () {
              return this.Ot;
            },
            enumerable: false,
            configurable: true
          });
          return c;
        }(Mh);
        var Rh = "FCGame";
        var Sh = "FCShared";
        var Th = /\/index(?:\.[a-z0-9]{3})?\.(?:html|json|js|jsonc)$/;
        var Uh = /\/[A-Za-z0-9._~@-]+\.[a-f0-9]{5}\.[a-z0-9]{2,6}$/;
        var Vh = /^FCGame\/|^FCShared|^FCEntry/;
        var Wh = [Rh, Sh];
        var Xh = /^(text|application)\/javascript(;|$)/;
        function Yh(a, b, c, d) {
          if (d === undefined) {
            d = true;
          }
          return g(this, undefined, undefined, function () {
            var e;
            var f;
            var g;
            return h(this, function (i) {
              switch (i.label) {
                case 0:
                  if (c == null || c.status !== 200) {
                    return [2, false];
                  } else {
                    return [4, (0, new Promise(function (a) {
                      // TOLOOK
                      setTimeout(a, 0);
                    }))];
                  }
                case 1:
                  i.sent();
                  e = d ? Wh.slice() : undefined;
                  f = function () {
                    var d;
                    var f;
                    return h(this, function (g) {
                      switch (g.label) {
                        case 0:
                          g.trys.push([0, 2,, 4]);
                          return [4, caches.open(a).then(function (a) {
                            return a.put(b, c);
                          })];
                        case 1:
                          g.sent();
                          return [2, {
                            value: true
                          }];
                        case 2:
                          if (!((d = g.sent()) instanceof Error) || d.name !== "QuotaExceededError") {
                            throw d;
                          }
                          if (f = e == null ? undefined : e[0]) {
                            return [4, caches.keys().then(function (b) {
                              return Promise.all(b.map(function (b) {
                                if (b !== a && b.startsWith(f)) {
                                  return caches.delete(b);
                                } else {
                                  return undefined;
                                }
                              }));
                            })];
                          } else {
                            return [2, "continue"];
                          }
                        case 3:
                          g.sent();
                          return [3, 4];
                        case 4:
                          return [2];
                      }
                    });
                  };
                  i.label = 2;
                case 2:
                  return [5, f()];
                case 3:
                  if (typeof (g = i.sent()) == "object") {
                    return [2, g.value];
                  }
                  i.label = 4;
                case 4:
                  if ((e == null ? undefined : e.shift()) !== undefined) {
                    return [3, 2];
                  }
                  i.label = 5;
                case 5:
                  return [2, false];
              }
            });
          });
        }
        var Zh = {
          html: "text/html",
          css: "text/css",
          js: "application/javascript",
          json: "application/json",
          jsonc: "application/json",
          txt: "text/plain",
          plist: "text/plain",
          atlas: "text/plain",
          tiff: "image/jpeg",
          jpeg: "image/jpeg",
          jpg: "image/jpeg",
          png: "image/png",
          gif: "image/gif",
          mp3: "audio/mpeg",
          wav: "audio/wav"
        };
        function $h(a, b) {
          return function () {
            var a;
            if (Oh) {
              return Oh;
            }
            var b;
            var c = "serviceWorker" in navigator && navigator.serviceWorker !== undefined && navigator.serviceWorker.controller != null;
            var e = "caches" in d && d.caches !== undefined && caches.open("__test").catch(function () {});
            var f = {
              oi: c,
              si: false,
              ai: b = RegExp(`blob:${location.origin}/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}:`, "g"),
              ci: ((a = Ph == null ? undefined : Ph.cacheOrigins) === null || a === undefined ? undefined : a.slice()) || []
            };
            var g = Ph == null ? undefined : Ph.blobRegistry;
            if (g && b) {
              Object.assign(bi, g);
            }
            Oh = Promise.resolve(e).then(function (a) {
              f.si = !!a;
              if (f.oi && f.si) {
                return caches.keys().then(function (a) {
                  return Promise.all(a.map(function (a) {
                    if (Vh.test(a)) {
                      return caches.delete(a);
                    } else {
                      return undefined;
                    }
                  }));
                }).then(function () {
                  return Nh = f;
                });
              } else {
                return Nh = f;
              }
            });
            return Oh;
          }().then(function (c) {
            function f() {
              if (d.sign) {
                return function (a, b) {
                  return g(this, undefined, undefined, function () {
                    var c;
                    var d;
                    return h(this, function (f) {
                      switch (f.label) {
                        case 0:
                          if (typeof a != "string") {
                            return [3, 2];
                          } else {
                            return [4, e.sign.getSignedUrl(a)];
                          }
                        case 1:
                          c = f.sent();
                          return [2, new Request(c, b)];
                        case 2:
                          return [4, e.sign.getSignedUrl(a.url)];
                        case 3:
                          d = f.sent();
                          return [2, new Request(d, a)];
                      }
                    });
                  });
                }(a, b).then(function (a) {
                  return d.fetch(a);
                });
              } else {
                return d.fetch(a, b);
              }
            }
            if (c.oi || !c.si) {
              return f();
            }
            var i = new URL(typeof a == "string" ? a : a.url, location.href);
            var j = i.origin === location.origin;
            var k = j || c.ci.includes(i.origin);
            var l = i.pathname;
            if (i.protocol === "file:") {
              return function (a, b) {
                return new Promise(function (c, d) {
                  var e = new XMLHttpRequest();
                  e.open("GET", a, true);
                  e.onload = function () {
                    var a;
                    if (b) {
                      a = {
                        "content-type": b
                      };
                    }
                    var d = {
                      status: 200,
                      headers: a
                    };
                    var f = new Response(e.response, d);
                    c(f);
                  };
                  e.onerror = function () {
                    d(Error("Local request failed"));
                  };
                  e.responseType = "blob";
                  if (b) {
                    e.overrideMimeType(b);
                  }
                  e.send();
                });
              }(i, function (a) {
                var b = a.lastIndexOf(".");
                var c = b > 0 ? a.substring(b + 1) : undefined;
                if (c) {
                  return Zh[c];
                } else {
                  return undefined;
                }
              }(l));
            }
            if (!j && !k) {
              return f();
            }
            var m = i.origin + l;
            if (Th.test(l)) {
              return f().then(function (a) {
                Yh("FCEntry", m, a.clone(), false).catch(function () {});
                return a;
              }).catch(function (a) {
                return caches.match(m).then(function (b) {
                  if (b) {
                    return b;
                  }
                  throw a;
                });
              });
            }
            if (!Uh.test(l)) {
              return f();
            }
            var n = l.startsWith("/shared/") ? Sh : `${Rh}/${l.substring(1, l.indexOf("/", 1))}`;
            return caches.open(n).then(function (a) {
              return a.match(m).then(function (a) {
                return a || f().then(function (a) {
                  Yh(n, m, a.clone()).catch(function () {});
                  return a;
                });
              });
            });
          });
        }
        function _h(a) {
          return $h(a).then(function (b) {
            if (!b.ok) {
              throw b.status;
            }
            return b.blob().then(function (c) {
              var d = b.headers.get("content-type") || "";
              var e = Xh.test(d);
              var f = e ? b.url || new URL(a, location.href).href : undefined;
              if (e && Nh.ai === undefined) {
                c = new Blob([c, `
  //# sourceURL=${f}`], {
                  type: d
                });
              }
              var g = URL.createObjectURL(c);
              if (e && Nh.ai !== undefined) {
                ci(g, f);
              }
              return g;
            });
          });
        }
        var ai;
        var bi = Object.create(null);
        function ci(a, b) {
          if ((Nh == null ? undefined : Nh.ai) !== undefined) {
            bi[a] = b;
          }
        }
        function di(a) {
          return delete bi[a];
        }
        function ei(a) {
          return bi[a];
        }
        function fi(a) {
          var b = Nh == null ? undefined : Nh.ai;
          if (a && b !== undefined) {
            return a.replace(b, function (a) {
              var b = bi[a.slice(0, -1)];
              if (b !== undefined) {
                return b + ":";
              } else {
                return a;
              }
            });
          } else {
            return a;
          }
        }
        function gi(a) {
          return eh(a);
        }
        function hi(a) {
          return JSON.parse((c = dh(b = a), b !== c && (c = ch(c = atob(c), "kA7xqJZa")), c));
          var b;
          var c;
        }
        var ii = Object.prototype.hasOwnProperty;
        function ji(a, b) {
          return ii.call(a, b);
        }
        var ki = String.prototype.trim;
        function li() {}
        var mi = String.prototype.replace;
        var ni = String.prototype.split;
        var oi = "||||";
        function bd(a) {
          var b = a % 10;
          if (a !== 11 && b === 1) {
            return 0;
          } else if (b >= 2 && b <= 4 && !(a >= 12 && a <= 14)) {
            return 1;
          } else {
            return 2;
          }
        }
        var pi = {
          arabic: function (a) {
            if (a < 3) {
              return a;
            }
            var b = a % 100;
            if (b >= 3 && b <= 10) {
              return 3;
            } else if (b >= 11) {
              return 4;
            } else {
              return 5;
            }
          },
          bosnian_serbian: bd,
          chinese: function () {
            return 0;
          },
          croatian: bd,
          french: function (a) {
            if (a > 1) {
              return 1;
            } else {
              return 0;
            }
          },
          german: function (a) {
            if (a !== 1) {
              return 1;
            } else {
              return 0;
            }
          },
          russian: bd,
          lithuanian: function (a) {
            if (a % 10 == 1 && a % 100 != 11) {
              return 0;
            } else if (a % 10 >= 2 && a % 10 <= 9 && (a % 100 < 11 || a % 100 > 19)) {
              return 1;
            } else {
              return 2;
            }
          },
          czech: function (a) {
            if (a === 1) {
              return 0;
            } else if (a >= 2 && a <= 4) {
              return 1;
            } else {
              return 2;
            }
          },
          polish: function (a) {
            if (a === 1) {
              return 0;
            }
            var b = a % 10;
            if (b >= 2 && b <= 4 && (a % 100 < 10 || a % 100 >= 20)) {
              return 1;
            } else {
              return 2;
            }
          },
          icelandic: function (a) {
            if (a % 10 != 1 || a % 100 == 11) {
              return 1;
            } else {
              return 0;
            }
          },
          slovenian: function (a) {
            var b = a % 100;
            if (b === 1) {
              return 0;
            } else if (b === 2) {
              return 1;
            } else if (b === 3 || b === 4) {
              return 2;
            } else {
              return 3;
            }
          }
        };
        var qi = function (a) {
          var b = {};
          for (var c in a) {
            if (ji(a, c)) {
              for (var d = a[c], e = 0; e < d.length; ++e) {
                b[d[e]] = c;
              }
            }
          }
          return b;
        }({
          arabic: ["ar"],
          bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
          chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
          croatian: ["hr", "hr-HR"],
          german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
          french: ["fr", "tl", "pt-br"],
          russian: ["ru", "ru-RU"],
          lithuanian: ["lt"],
          czech: ["cs", "cs-CZ", "sk"],
          polish: ["pl"],
          icelandic: ["is"],
          slovenian: ["sl-SL"]
        });
        function ri(a) {
          return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        var si = /\$/g;
        var ti = /%\{(.*?)\}/g;
        function ui(a, b, c, d) {
          if (typeof a != "string") {
            throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
          }
          if (b == null) {
            return a;
          }
          var e = a;
          var f = d || ti;
          var g = typeof b == "number" ? {
            smart_count: b
          } : b;
          if (g.smart_count != null && e) {
            var h = ni.call(e, oi);
            e = ki.call(h[function (a, b) {
              return pi[function (a) {
                return qi[a] || qi[ni.call(a, /-/, 1)[0]] || qi.en;
              }(a)](b);
            }(c || "en", g.smart_count)] || h[0]);
          }
          e = mi.call(e, f, function (a, b) {
            if (!ji(g, b) || g[b] == null) {
              return a;
            }
            var d = g[b];
            if (typeof d == "object") {
              if (ji(d, "ordinal")) {
                d = function (a, b) {
                  switch (b) {
                    case "en":
                      return a + ((c = ["th", "st", "nd", "rd"])[((d = a % 100) - 20) % 10] || c[d] || c[0]);
                    case "da":
                    case "de":
                    case "fi":
                    case "no":
                    case "tr":
                      return a + ".";
                    case "es":
                    case "it":
                      return a + "ª";
                    case "fr":
                      return a + (a === 1 ? "re" : "e");
                    case "id":
                      return "Ke-" + a;
                    case "nl":
                      return a + "e";
                    case "pt":
                      return a + ".ª";
                    case "ro":
                      if (a === 1) {
                        return a + "-a";
                      } else {
                        return "A " + a + "-a";
                      }
                    case "ru":
                      return a + "-й";
                    case "sv":
                      var c;
                      var d;
                      return a + ((c = ["e", "a", "a"])[((d = a % 100) - 20) % 10] || c[d] || c[0]);
                    case "th":
                      return "ที่ " + a;
                    case "vi":
                      return "thứ " + a;
                    case "zh":
                      return "第" + a;
                    default:
                      return a;
                  }
                }(d.ordinal, c);
              } else {
                for (var e in d) {
                  if (ji(d, e)) {
                    d = d[e];
                    break;
                  }
                }
              }
            }
            return mi.call(d, si, "$$");
          });
          return e;
        }
        function vi(a) {
          var b = a || {};
          this.phrases = {};
          this.extend(b.phrases || {});
          this.currentLocale = b.locale || "en";
          var c = b.allowMissing ? ui : null;
          this.onMissingKey = typeof b.onMissingKey == "function" ? b.onMissingKey : c;
          this.warn = b.warn || li;
          this.tokenRegex = function (a) {
            var b = a && a.prefix || "%{";
            var c = a && a.suffix || "}";
            if (b === oi || c === oi) {
              throw new RangeError("\"||||\" token is reserved for pluralization");
            }
            return RegExp(ri(b) + "(.*?)" + ri(c), "g");
          }(b.interpolation);
        }
        vi.prototype.locale = function (a) {
          if (a) {
            this.currentLocale = a;
          }
          return this.currentLocale;
        };
        vi.prototype.extend = function (a, b) {
          for (var c in a) {
            if (ji(a, c)) {
              var d = a[c];
              var e = b ? b + "." + c : c;
              if (typeof d == "object") {
                this.extend(d, e);
              } else {
                this.phrases[e] = d;
              }
            }
          }
        };
        vi.prototype.unset = function (a, b) {
          if (typeof a == "string") {
            delete this.phrases[a];
          } else {
            for (var c in a) {
              if (ji(a, c)) {
                var d = a[c];
                var e = b ? b + "." + c : c;
                if (typeof d == "object") {
                  this.unset(d, e);
                } else {
                  delete this.phrases[e];
                }
              }
            }
          }
        };
        vi.prototype.clear = function () {
          this.phrases = {};
        };
        vi.prototype.replace = function (a) {
          this.clear();
          this.extend(a);
        };
        vi.prototype.t = function (a, b) {
          var c;
          var d;
          var e = b == null ? {} : b;
          if (typeof this.phrases[a] == "string") {
            c = this.phrases[a];
          } else if (typeof e._ == "string") {
            c = e._;
          } else if (this.onMissingKey) {
            d = (0, this.onMissingKey)(a, e, this.currentLocale, this.tokenRegex);
          } else {
            this.warn("Missing translation for key: \"" + a + "\"");
            d = a;
          }
          if (typeof c == "string") {
            d = ui(c, e, this.currentLocale, this.tokenRegex);
          }
          return d;
        };
        vi.prototype.has = function (a) {
          return ji(this.phrases, a);
        };
        vi.transformPhrase = function (a, b, c) {
          return ui(a, b, c);
        };
        var wi = new vi({
          warn: function () {}
        });
        function xi(a) {
          return wi.t(a);
        }
        function yi() {
          return wi.locale();
        }
        function zi() {
          var a = wi.locale();
          return ["ar", "fa", "ur"].includes(a);
        }
        function Ai(a) {
          var b = {};
          for (var c in a) {
            if (a[c] !== null && typeof a[c] == "object" && a.hasOwnProperty(c)) {
              b[c] = Ai(a[c]);
            } else {
              b[c] = a[c];
            }
          }
          return b;
        }
        var Bi;
        var Ci = function () {
          function a(a, b, c, d, e) {
            if (c === undefined) {
              c = undefined;
            }
            if (d === undefined) {
              d = null;
            }
            if (e === undefined) {
              e = null;
            }
            this.key = a;
            this.value = b;
            this.bufferInfo = c;
            this.next = d;
            this.prev = e;
          }
          Object.defineProperty(a.prototype, "memorySize", {
            get: function () {
              return this.bufferInfo && this.bufferInfo.memorySize;
            },
            enumerable: false,
            configurable: true
          });
          return a;
        }();
        var bg = function () {
          function a(a) {
            if (a === undefined) {
              a = {
                arraySize: 10
              };
            }
            this.ui = undefined;
            this.hi = undefined;
            this.li = undefined;
            this.fi = undefined;
            this.di = null;
            this.vi = null;
            this.Ai = Object.create(null);
            var b = a.arraySize;
            var c = a.memorySize;
            this.di = null;
            this.vi = null;
            this.Ai = Object.create(null);
            this.ui = b !== undefined ? 0 : undefined;
            this.hi = b !== undefined && b ? b : undefined;
            this.li = c !== undefined ? 0 : undefined;
            this.fi = c !== undefined && c ? c : undefined;
          }
          Object.defineProperty(a.prototype, "size", {
            get: function () {
              return Object.keys(this.Ai).length;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(a.prototype, "memory", {
            get: function () {
              return this.li;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(a.prototype, "maxSize", {
            get: function () {
              return this.hi;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(a.prototype, "maxMemory", {
            get: function () {
              return this.fi;
            },
            enumerable: false,
            configurable: true
          });
          a.prototype.oldest = function () {
            if (this.vi) {
              return [this.vi.key, this.vi.value];
            } else {
              return undefined;
            }
          };
          a.prototype.newest = function () {
            if (this.di) {
              return [this.di.key, this.di.value];
            } else {
              return undefined;
            }
          };
          a.prototype.set = function (a, b, c) {
            var d = c && c.memorySize ? c.memorySize : undefined;
            this.pi();
            if (d !== undefined) {
              this.mi(d);
            }
            if (this.di) {
              var e = new Ci(a, b, c, this.di);
              this.di.prev = e;
              this.di = e;
            } else {
              this.di = this.vi = new Ci(a, b, c);
            }
            var f = this.Ai[a] = this.di;
            this.gi(1);
            if (d !== undefined) {
              this.bi(f.memorySize);
            }
          };
          a.prototype.pop = function () {
            if (this.vi) {
              var a = this.vi;
              var b = a.key;
              var c = a.value;
              this._i(b);
              return [b, c];
            }
          };
          a.prototype.get = function (a) {
            if (this.Ai[a]) {
              var b = this.Ai[a];
              var c = b.value;
              var d = b.bufferInfo;
              this._i(a);
              this.set(a, c, d);
              return c;
            }
          };
          a.prototype.has = function (a) {
            return !!this.Ai[a];
          };
          a.prototype.find = function (a) {
            return this.Ai[a] && this.Ai[a].value;
          };
          a.prototype.delete = function (a) {
            var b = this.Ai[a];
            if (b) {
              this._i(a);
              return b.value;
            }
          };
          a.prototype.clear = function () {
            this.di = null;
            this.vi = null;
            this.ui = this.ui && 0;
            this.li = this.li && 0;
            this.Ai = Object.create(null);
          };
          a.prototype.keys = function () {
            var a = [];
            this.forEach(function (b) {
              return a.push(b.key);
            });
            return a;
          };
          a.prototype.values = function () {
            var a = [];
            this.forEach(function (b) {
              return a.push(b.value);
            });
            return a;
          };
          a.prototype.forEach = function (a) {
            for (var b = this.di, c = 0; b;) {
              a({
                key: b.key,
                value: b.value
              }, c);
              b = b.next;
              c++;
            }
          };
          a.prototype.toJSON = function () {
            return Ai(this.Ai);
          };
          a.prototype.toString = function () {
            return JSON.stringify(this.Ai);
          };
          a.prototype._i = function (a) {
            var b = this.Ai[a];
            var c = b.memorySize;
            if (b.prev !== null) {
              b.prev.next = b.next;
            } else {
              this.di = b.next;
            }
            if (b.next !== null) {
              b.next.prev = b.prev;
            } else {
              this.vi = b.prev;
            }
            delete this.Ai[a];
            this.gi(-1);
            if (c !== undefined) {
              this.bi(-c);
            }
          };
          a.prototype.bi = function (a) {
            if (this.li !== undefined && a !== undefined) {
              this.li += a;
            }
          };
          a.prototype.gi = function (a) {
            if (this.ui !== undefined && a !== undefined) {
              this.ui += a;
            }
          };
          a.prototype.pi = function () {
            if (this.ui !== undefined && this.ui === this.hi && this.vi) {
              this._i(this.vi.key);
            }
          };
          a.prototype.mi = function (a) {
            if (this.li !== undefined && this.fi !== undefined && this.li + a > this.fi) {
              if (this.vi) {
                this._i(this.vi.key);
              }
              this.mi(a);
            }
          };
          return a;
        }();
        function Di(a, b) {
          for (var c in b) {
            if (typeof a[c] != "object") {
              a[c] = b[c];
            } else if (typeof b[c] == "object") {
              a[c] = Di(a[c], b[c]);
            }
          }
          return a;
        }
        var Ei = function () {
          function a(a, b, c) {
            this.wi = Object.create(null);
            this.xi = Object.create(null);
            this.yi = undefined;
            this.wi = a && Di(Object.create(null), a) || Object.create(null);
            this.yi = b ? new bg({
              arraySize: c || 5
            }) : undefined;
          }
          a.prototype.v = function (a) {
            var b = this.yi;
            var c = b && b.get(a);
            if (c !== undefined) {
              return c;
            }
            for (var d, e = a.split("."), f = 0, g = e.length; f < g; f++) {
              var h = e[f];
              if ((d = d && d[h] || this.wi[h]) === undefined) {
                if (b) {
                  b.set(a, null);
                }
                return null;
              }
            }
            var i;
            var j = typeof d != "string" ? d[0] : d;
            if (RegExp(/^\$\{.*\}/).test(j)) {
              return this.v(j.substring(j.indexOf("{") + 1, j.lastIndexOf("}")));
            }
            if (!Array.isArray(d)) {
              throw Error(`The key : ${a} does not refer to a final value in this domain!`);
            }
            var k = d.slice(1);
            var l = this.xi[j];
            if (l === undefined) {
              throw Error(`UIAppearance :: v : unable to locate interpreter for <${j}>`);
            }
            i = l.interpret(k);
            if (b) {
              b.set(a, i);
            }
            return i;
          };
          a.prototype.extend = function (a) {
            if (this.yi) {
              this.yi.clear();
            }
            this.wi = Di(this.wi, a);
          };
          a.prototype.registerInterpreter = function (a, b) {
            if (this.xi[a] === undefined) {
              this.xi[a] = b;
            }
          };
          a.prototype.unregisterInterpreter = function (a) {
            var b = this.xi[a];
            this.xi[a] = undefined;
            return b || null;
          };
          Object.defineProperty(a.prototype, "dataSource", {
            get: function () {
              return Di(Object.create(null), this.wi);
            },
            enumerable: false,
            configurable: true
          });
          return a;
        }();
        var Fi = new Ei(undefined, true);
        var Gi = {
          black: 1,
          white: 2
        };
        (Bi = {})[ag] = {
          browser: 1,
          pc: 8,
          app: -1
        };
        Bi[_f] = {
          browser: 2,
          pc: 9,
          app: -1
        };
        Bi[Zf] = {
          browser: 3,
          pc: -1,
          app: 6
        };
        Bi[$f] = {
          browser: 4,
          pc: -1,
          app: 7
        };
        var Hi = Bi;
        Qh.setContext(function () {
          if (hh.audioSupported) {
            return hh.audioContext;
          }
        });
        var Ii;
        var Ji = function () {
          function a() {
            this.StatusBarStyle = Gi;
            this.I18n = wi;
            this.uiAppearance = Fi;
            this.environment = hh;
            this.ResourceQualifier = qh;
            this.deprecated = yh;
            this.WebAudio = Qh;
            this.WebAudioEvent = Kh;
            this.WebAudioState = Jh;
            this.CustomEventTarget = Mh;
            this.fetch = $h;
            this.fetchBlobURL = _h;
            this.registerBlobURL = ci;
            this.unregisterBlobURL = di;
            this.translateLocation = fi;
            this.revealBlobURL = ei;
            this.isValidAssets = gi;
            this.parseAssets = hi;
          }
          a.prototype.getEnvironment = function () {
            return hh.getPlatform();
          };
          a.prototype.getOSName = function () {
            return hh.getOSName();
          };
          a.prototype.getGameContext = function () {
            return ai;
          };
          a.prototype.getBrowserBaseType = function () {
            return hh.getBrowserBaseType();
          };
          a.prototype.getBrowserBaseVersion = function () {
            return hh.getBrowserBaseVersion();
          };
          a.prototype.isRTLLanguage = function () {
            return zi();
          };
          a.prototype.getVersionName = function () {
            if (this.getVersionNameHander) {
              return this.getVersionNameHander();
            } else {
              return undefined;
            }
          };
          a.prototype.setStatusBarStyle = function (a) {
            if (this.setStatusBarStyleHandler) {
              this.setStatusBarStyleHandler(a);
            }
          };
          a.prototype.setStatusBarHidden = function (a) {
            if (this.setStatusBarHiddenHandler) {
              this.setStatusBarHiddenHandler(a);
            }
          };
          a.prototype.requestGameStart = function (a, b) {
            if (this.requestGameStartHandler) {
              this.requestGameStartHandler(a, b);
            }
          };
          a.prototype.setProgressMessage = function (a) {
            if (this.setProgressMessageHandler) {
              this.setProgressMessageHandler(a);
            }
          };
          a.prototype.setProgress = function (a, b) {
            if (this.setProgressHandler) {
              this.setProgressHandler(a, b);
            }
          };
          a.prototype.setProgressVisible = function (a) {
            if (this.setProgressVisibleHandler) {
              this.setProgressVisibleHandler(a);
            }
          };
          a.prototype.showAlert = function (a) {
            if (this.showAlertHandler) {
              this.showAlertHandler(a);
            }
          };
          Object.defineProperty(a.prototype, "location", {
            get: function () {
              return ah();
            },
            enumerable: false,
            configurable: true
          });
          a.prototype.enablePromBeforeUnload = function (a) {
            this.context.event.emit("Shell.EnableUnloadAlert", a);
          };
          Object.defineProperty(a.prototype, "urlSearch", {
            get: function () {
              return hh.getURLSearchParam();
            },
            enumerable: false,
            configurable: true
          });
          a.prototype.enableCanvasTouchPropagation = function (a) {
            if (this.enableCanvasTouchPropagationHandler) {
              this.enableCanvasTouchPropagationHandler(a);
            }
          };
          a.prototype.addPreloadPlugin = function (a, b, c) {
            if (this.addPreloadPluginHandler) {
              this.addPreloadPluginHandler(a, b, c);
            }
          };
          a.prototype.loadPlugin = function (a, b) {
            if (this.loadPluginHandler) {
              this.loadPluginHandler(a, b);
            }
          };
          a.prototype.getPlatform = function () {
            var a = hh.getOSName();
            var b = this.getEnvironment();
            var c = b === "browser" ? 5 : -1;
            if (Hi[a] && Hi[a][b]) {
              return Hi[a][b];
            } else {
              return c;
            }
          };
          a.prototype.getGameInfo = function () {
            var a;
            var b = sg.Identifier;
            if (b) {
              a = b.split(".").slice(0, 2).join(".");
            }
            return {
              name: sg.Name,
              version: sg.Version.split("/")[0],
              index: sg.Index,
              identifier: b,
              organizationIdentifier: a
            };
          };
          a.prototype.wasmTest = function () {
            return Promise.resolve([0, 0, 0]);
          };
          return a;
        }();
        var Ki = e.shell = new Ji();
        function Li() {
          return e.eval("\"cc\"");
        }
        function Mi(a, b) {
          var c = a.indexOf(e.String.fromCharCode(b));
          if (c !== -1) {
            return a.substring(c + 1);
          } else {
            return a;
          }
        }
        function Ni(a, b) {
          return function () {
            var c = e[Mi("+shell", e.Number("0x002b"))];
            var d = Mi("npMath", e.Number("0x0070"));
            var f = Mi("qAsetTimeout", e.Number("0x0041"));
            var g = (2 + e[d].random() * 3) * e.Number("0x03E8");
            function h() {
              e[f](a, g);
            }
            (e.opusAudio = e.opusAudio || new c.CustomEventTarget())[function () {
              for (var a = "", b = 0, c = [111, 110]; b < c.length; b++) {
                var d = c[b];
                a += e.String.fromCharCode(d);
              }
              return a;
            }()](b, h);
            var i = e.audioPool;
            if (i && i.has(b)) {
              h();
            }
          };
        }
        Ni(function () {
          var a;
          var b = (a = e[Li()]) === null || a === undefined ? undefined : a.renderer;
          if (b) {
            b.render = Function("", "");
          }
        }, "enable")();
        Ni(function () {
          var a;
          var b;
          var c;
          (function (a) {
            a.a = "_compScheduler";
          })(c || (c = {}));
          var d = (b = (a = e[Li()]) === null || a === undefined ? undefined : a.director) === null || b === undefined ? undefined : b[c.a];
          if (d) {
            d.startInvoker = Object.create(null);
          }
        }, "enable")();
        Ni(function () {
          var a;
          var b;
          var c = (b = (a = e[Li()]) === null || a === undefined ? undefined : a.internal) === null || b === undefined ? undefined : b.eventManager;
          if (c) {
            c.dispatchEvent = Function("", "");
          }
        }, "disable")();
        Ni(function () {
          var a;
          var b;
          var c = (b = (a = e.sp) === null || a === undefined ? undefined : a.Skeleton) === null || b === undefined ? undefined : b.prototype;
          if (c) {
            c.markForRender = function () {
              var a;
              var b;
              var c = (b = (a = e[Li()]) === null || a === undefined ? undefined : a.Sprite) === null || b === undefined ? undefined : b.prototype;
              if (c) {
                Function("e", "e._validateRender=e.disableRender")(c);
              }
            };
          }
        }, "start")();
        Ni(function () {
          var a;
          var b = (a = e[Li()]) === null || a === undefined ? undefined : a.director;
          if (b) {
            b.getActionManager = Function("", "return this._manager");
          }
        }, "disable")();
        var Oi = e.gtag;
        var Pi = function () {
          function a() {
            this.Si = undefined;
          }
          a.prototype.setUserId = function (a) {
            Oi("set", {
              user_id: a
            });
          };
          a.prototype.setTitle = function (a) {
            Oi("set", {
              page_title: a
            });
          };
          a.prototype.sendEvent = function (a, b, c) {
            for (var d = [], e = 3; e < arguments.length; e++) {
              d[e - 3] = arguments[e];
            }
            if (b !== "") {
              switch (typeof c) {
                case "number":
                  c = {
                    value: c
                  };
                  break;
                case "string":
                  d.unshift(c);
                  c = undefined;
                  break;
                case "object":
                case "undefined":
                  break;
                default:
                  c = undefined;
              }
              var f;
              if ((c == null ? undefined : c.value) !== undefined) {
                f = c.value;
                c.value = undefined;
              }
              d.push(this.ki(c));
              var g;
              var h = this.Ei(d);
              var i = h.join("|");
              if (i) {
                g = i;
              }
              var j = {
                event_category: a,
                event_label: g
              };
              if (f !== undefined) {
                j.value = f;
              }
              Oi("event", b, j);
            }
          };
          a.prototype.sendScreen = function (a) {
            if (a) {
              Oi("event", "screen_view", {
                screen_name: a
              });
            }
            this.setCurrentScreen(a);
          };
          a.prototype.getCurrentScreen = function () {
            return this.Si;
          };
          a.prototype.setCurrentScreen = function (a) {
            if (a) {
              Oi("set", {
                screen_name: a
              });
            }
            this.Si = a;
          };
          a.prototype.sendTiming = function (a, b, c) {
            for (var d = [], e = 3; e < arguments.length; e++) {
              d[e - 3] = arguments[e];
            }
            if (b !== "") {
              if (d === undefined) {
                d = [];
              }
              var f;
              var g = this.Ei(d);
              var h = g.join("|");
              if (h) {
                f = h;
              }
              Oi("event", "timing_complete", {
                name: b,
                value: c,
                event_category: a,
                event_label: f
              });
            }
          };
          a.prototype.sendException = function (a) {
            Oi("event", "exception", {
              description: a,
              fatal: false
            });
          };
          a.prototype.raw = function () {
            Oi.apply(null, arguments);
          };
          a.prototype.setFrequentErrorHandler = function (a) {
            e.onGAFrequentError = a;
          };
          a.prototype.ki = function (a) {
            var b = [];
            for (var c in a) {
              if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d !== undefined) {
                  b.push(`${c}=${d}`);
                }
              }
            }
            return b.join("&");
          };
          a.prototype.Ei = function (a) {
            return a.filter(function (a) {
              return a !== undefined && ("" + a).length > 0;
            });
          };
          return a;
        }();
        var Qi = Pi.prototype;
        Qi.CATEGORY_ACCESS = "access";
        Qi.CATEGORY_GAME = "game";
        Qi.CATEGORY_FREE_GAME = "free_game";
        Qi.CATEGORY_GENERAL = "general";
        Qi.CATEGORY_QUERY = "query";
        Qi.CATEGORY_SPLASH_VIDEO = "";
        Qi.SCREEN_LAUNCH = "";
        Qi.SCREEN_LOGIN = "";
        Qi.SCREEN_GAME = "";
        Qi.SCREEN_WALLET = "";
        Qi.SCREEN_BET_SETTING = "";
        Qi.SCREEN_SETTINGS = "";
        Qi.SCREEN_PAY_TABLE = "";
        Qi.SCREEN_GAME_RULE = "";
        Qi.SCREEN_HISTORY_DETAIL = "";
        Qi.SCREEN_HISTORY_CALENDAR = "";
        Qi.EVENT_LOGIN = "";
        Qi.EVENT_READ_INFO = "";
        Qi.EVENT_RETRY = "";
        Qi.EVENT_HISTORY_CHANGE_DAYS = "";
        Qi.EVENT_QUIT_GAME = "";
        Qi.EVENT_ERROR_REPORT = "fault";
        Qi.EVENT_CHANGE_SETTING = "";
        Qi.SCREEN_SLOT_AUTO_SPIN = "";
        Qi.SCREEN_SLOT_FREE_GAME = "";
        Qi.SCREEN_SLOT_DAILY_JACKPOT = "";
        Qi.SCREEN_SLOT_DRAGON_JACKPOT = "";
        Qi.EVENT_SLOT_START_SPIN = "";
        Qi.EVENT_SLOT_STOP_SPIN = "";
        Qi.EVENT_SLOT_AUTO_SPIN = "";
        Qi.EVENT_SLOT_CHANGE_BET = "";
        Qi.EVENT_SLOT_MAX_BET = "";
        Qi.EVENT_SLOT_SKIP_EFFECT = "";
        Qi.EVENT_SLOT_PICK_FREE_GAME = "";
        Qi.EVENT_SLOT_DROP_FREE_GAME = "";
        Qi.EVENT_SLOT_HISTORY_SWIPE_PAGE = "";
        Qi.EVENT_SLOT_HISTORY_SELECT_PAGE = "";
        Qi.EVENT_SLOT_DAILY_JACKPOT_SWIPE = "";
        Qi.EVENT_SLOT_DRAGON_JACKPOT_CLICK_COIN = "";
        Qi.EVENT_SLOT_CHANGE_INGOT_BET = "";
        Qi.SCREEN_CARD_ROADMAP = "";
        Qi.SCREEN_CARD_SELECT_LIMIT = "";
        Qi.SCREEN_CARD_JACKPOT_PAY_TABLE = "";
        Qi.EVENT_CARD_DEAL = "";
        Qi.EVENT_CARD_FLIP = "";
        Qi.EVENT_CARD_PEEK = "";
        Qi.EVENT_CARD_ANTE = "";
        Qi.EVENT_CARD_RAISE = "";
        Qi.EVENT_CARD_FOLD = "";
        Qi.EVENT_CARD_HIT = "";
        Qi.EVENT_CARD_DOUBLE = "";
        Qi.EVENT_CARD_SPLIT = "";
        Qi.EVENT_CARD_STAND = "";
        Qi.EVENT_CARD_BUY_INSURANCE = "";
        Qi.EVENT_CARD_CANCEL_INSURANCE = "";
        Qi.EVENT_CARD_BUY_JACKPOT = "";
        Qi.EVENT_CARD_CANCEL_JACKPOT = "";
        Qi.EVENT_CARD_CHANGE_CHIP = "";
        Qi.EVENT_CARD_CHANGE_VALUE = "";
        Qi.EVENT_CARD_CHANGE_BET = "";
        Qi.EVENT_CARD_CHANGE_LIMIT = "";
        Qi.EVENT_CARD_SKIP_EFFECT = "";
        Qi.EVENT_SPLASH_FINISH = "";
        function Ri(a, b) {
          this.bundleInfo = a;
          this.manager = b;
        }
        var Si = function (a) {
          function c(b, c, d, e, f, g, h, i) {
            var j = a.call(this, b, c) || this;
            j.component = d;
            j.event = e;
            j.plugin = f;
            j.view = g;
            j.cocos = h;
            j.resource = i;
            return j;
          }
          b(c, a);
          c.prototype.createBundle = function (a) {
            return this.manager.createBundle(a);
          };
          c.prototype.destroyBundle = function (a) {
            return this.manager.destroyBundle(a);
          };
          c.prototype.getContext = function (a) {
            return this.manager.getContext(a);
          };
          c.prototype.queryBundle = function (a) {
            return this.manager.queryBundle(a);
          };
          c.prototype.destroy = function () {
            this.manager.destroyBundle(this.bundleInfo);
          };
          return c;
        }(Ri);
        var Ti = undefined;
        var Ui = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.create = function (a, b) {
            return this.manager.create(a, b || this.bundleInfo);
          };
          c.prototype.getInstance = function (a) {
            return this.manager.getInstance(a);
          };
          c.prototype.updateState = function (a, b) {
            this.manager.updateState(a, b, this.bundleInfo);
          };
          c.prototype.destroy = function (a) {
            this.manager.destroy(a, this.bundleInfo);
          };
          return c;
        }(Ri);
        var Vi = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.on = function (a, b, c, d) {
            this.manager.on(a, b, c, d, this.bundleInfo);
          };
          c.prototype.once = function (a, b, c, d) {
            this.manager.once(a, b, c, d, this.bundleInfo);
          };
          c.prototype.off = function (a, b, c) {
            this.manager.off(a, b, c);
          };
          c.prototype.emit = function (a, b, c) {
            this.manager.emit(a, b, c, this.bundleInfo);
          };
          c.prototype.hasListeners = function (a) {
            return this.manager.hasListeners(a);
          };
          return c;
        }(Ri);
        function ub(a) {
          return {
            name: a,
            rawUrl: a,
            baseUrl: `${sg.SharedPath}${a}`
          };
        }
        var Wi = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.load = function (a, b) {
            var c = {};
            if (Array.isArray(a)) {
              for (var d = 0, e = a; d < e.length; d++) {
                var f = ub(e[d]);
                if (f) {
                  c[f.name] = f;
                }
              }
            } else {
              c = a;
            }
            this.manager.load(c, b);
          };
          return c;
        }(Ri);
        var Xi = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.register = function (a, b) {
            this.manager.register(a, b);
          };
          c.prototype.append = function (a, b, c) {
            this.manager.append(a, b, c);
          };
          c.prototype.appendTo = function (a, b) {
            this.manager.appendTo(a, b);
          };
          c.prototype.removeFromParent = function (a) {
            this.manager.removeFromParent(a);
          };
          c.prototype.show = function (a) {
            this.manager.show(a);
          };
          c.prototype.hide = function (a) {
            this.manager.hide(a);
          };
          c.prototype.getContainerElement = function (a, b) {
            return this.manager.getContainerElement(a, b);
          };
          c.prototype.getRootElement = function (a) {
            return this.manager.getRootElement(a);
          };
          c.prototype.enableUIBlock = function (a) {
            a.__$enableUIBlock = true;
          };
          c.prototype.setUIBlockConfig = function (a, b) {
            for (var c in b) {
              if (b[c] !== undefined) {
                a[`__$${c}`] = b[c];
              }
            }
          };
          return c;
        }(Ri);
        var Yi = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.setCocosBundleVers = function (a) {
            this.manager.bundleVers = a;
          };
          c.prototype.loadBundle = function (a, b, c) {
            this.manager.loadBundle(a, b, c);
          };
          c.prototype.getURL = function (a) {
            return this.manager.getURL(a, this.bundleInfo);
          };
          c.prototype.hasEntry = function (a) {
            return this.manager.hasEntry(a);
          };
          c.prototype.resolveBundleName = function (a) {
            return this.manager.resolveBundleName(a, this.bundleInfo);
          };
          return c;
        }(Ri);
        var Zi = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.setQualifierConfig = function (a, b) {
            if (Array.isArray(a)) {
              var c = a;
              this.manager.setQualifierConfig(c, this.bundleInfo);
            } else {
              this.manager.setQualifierConfig(a, b, this.bundleInfo);
            }
          };
          c.prototype.addAssets = function (a, b) {
            this.manager.addAssets(a, this.bundleInfo, b);
          };
          c.prototype.resolveUrl = function (a, b) {
            return this.manager.resolveUrl(a, this.bundleInfo, b);
          };
          c.prototype.hasEntry = function (a) {
            return this.manager.hasEntry(a, this.bundleInfo);
          };
          return c;
        }(Ri);
        var $i = {
          bundle: undefined,
          component: undefined,
          event: undefined,
          plugin: undefined,
          view: undefined,
          resource: undefined,
          cocos: undefined,
          createContext: function (a) {
            if (!(this.bundle && this.component && this.event && this.plugin && this.view && this.resource && this.cocos)) {
              throw Error("Create bundle context error");
            }
            return new Si(a, this.bundle, new Ui(a, this.component), new Vi(a, this.event), new Wi(a, this.plugin), new Xi(a, this.view), new Yi(a, this.cocos), new Zi(a, this.resource));
          }
        };
        var _i = function () {
          function a() {
            this.cls = this.constructor;
            this.ref = this.cls;
            this.state = {};
          }
          a.prototype.onInstantiate = function (a) {
            this.context = a;
            this.event = a.event;
            this.component = a.component;
            this.plugin = a.plugin;
            this.view = a.view;
            this.cocos = a.cocos;
            this.resource = a.resource;
          };
          return a;
        }();
        var aj = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.on = function (a, b, c) {
            this.event.on(a, b, this, c);
          };
          c.prototype.once = function (a, b, c) {
            this.event.once(a, b, this, c);
          };
          c.prototype.off = function (a, b) {
            this.event.off(a, b, this);
          };
          c.prototype.emit = function (a, b, c) {
            this.event.emit(a, b, c);
          };
          return c;
        }(_i);
        var bj = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          return c;
        }(aj);
        var cj = {
          Domain: 4,
          LoadAppCacheError: 1000,
          LoadResourceError: 1002,
          SettingsUndefinedError: 1003,
          CCUndefinedError: 1004,
          CacheManifestError: 1005,
          GameBootError: 1006,
          EngineScriptError: 1007,
          PluginScriptError: 1008,
          WatchDogError: 1009,
          WebGLError: 1010,
          ResourceVersionError: 1011,
          ResourceFailureDateTime: 1012,
          CrossSiteScriptingError: 1013,
          PluginReactRenderError: 1014,
          getMessageKey: function (a) {
            switch (a) {
              case cj.LoadAppCacheError:
                return "LoadAppCacheErrorMessage";
              case cj.LoadResourceError:
              case cj.GameBootError:
              case cj.EngineScriptError:
                return "LoadProjectFailedErrorMessage";
              case cj.PluginScriptError:
              case cj.PluginReactRenderError:
              case cj.WatchDogError:
              case cj.CrossSiteScriptingError:
                return "ErrorAndReload";
              case cj.SettingsUndefinedError:
                return "SettingsUndefinedErrorMessage";
              case cj.CCUndefinedError:
                return "CCUndefinedErrorMessage";
              case cj.CacheManifestError:
                return "CacheManifestErrorMessage";
              case cj.WebGLError:
                return "WebGLErrorMessage";
              case cj.ResourceVersionError:
                return "ResourceVersionErrorMessage";
              case cj.ResourceFailureDateTime:
                return "ResourceFailureDateTimeMessage";
              default:
                return "";
            }
          },
          canReload: function (a) {
            return !isNaN(+a);
          },
          canDismiss: function (a) {
            var b = +a;
            if (isNaN(b)) {
              return false;
            }
            switch (b) {
              case cj.WatchDogError:
              case cj.PluginReactRenderError:
                return true;
              default:
                return false;
            }
          }
        };
        (function () {
          function a(a, b) {
            return (b || "") + " (" + a + ")";
          }
          var b;
          var c = typeof Symbol != "undefined";
          var f = typeof document != "undefined";
          var g = d !== undefined ? d : o;
          if (f) {
            var h = document.querySelector("base[href]");
            if (h) {
              b = h.href;
            }
          }
          if (!b && typeof location != "undefined") {
            var i = (b = location.href.split("#")[0].split("?")[0]).lastIndexOf("/");
            if (i !== -1) {
              b = b.slice(0, i + 1);
            }
          }
          var j = /\\/g;
          function k(a, b) {
            if (a.indexOf("\\") !== -1) {
              a = a.replace(j, "/");
            }
            if (a[0] === "/" && a[1] === "/") {
              return b.slice(0, b.indexOf(":") + 1) + a;
            }
            if (a[0] === "." && (a[1] === "/" || a[1] === "." && (a[2] === "/" || a.length === 2 && (a += "/")) || a.length === 1 && (a += "/")) || a[0] === "/") {
              var c;
              var d = b.slice(0, b.indexOf(":") + 1);
              c = b[d.length + 1] === "/" ? d !== "file:" ? (c = b.slice(d.length + 2)).slice(c.indexOf("/") + 1) : b.slice(8) : b.slice(d.length + (b[d.length] === "/"));
              if (a[0] === "/") {
                return b.slice(0, b.length - c.length - 1) + a;
              }
              for (var e = c.slice(0, c.lastIndexOf("/") + 1) + a, f = [], g = -1, h = 0; h < e.length; h++) {
                if (g !== -1) {
                  if (e[h] === "/") {
                    f.push(e.slice(g, h + 1));
                    g = -1;
                  }
                } else if (e[h] === ".") {
                  if (e[h + 1] !== "." || e[h + 2] !== "/" && h + 2 !== e.length) {
                    if (e[h + 1] === "/" || h + 1 === e.length) {
                      h += 1;
                    } else {
                      g = h;
                    }
                  } else {
                    f.pop();
                    h += 2;
                  }
                } else {
                  g = h;
                }
              }
              if (g !== -1) {
                f.push(e.slice(g));
              }
              return b.slice(0, b.length - c.length) + f.join("");
            }
          }
          function l(a, b) {
            for (var c in b) {
              a[c] = b[c];
            }
            return a;
          }
          function m(a, b, c, d, e) {
            for (var f in a) {
              var g = k(f, c) || f;
              var h = a[f];
              if (typeof h == "string") {
                var i = q(d, k(h, c) || h, e);
                if (i) {
                  b[g] = i;
                }
              }
            }
          }
          function n(a, b) {
            if (b[a]) {
              return a;
            }
            var c = a.length;
            do {
              var d = a.slice(0, c + 1);
              if (d in b) {
                return d;
              }
            } while ((c = a.lastIndexOf("/", c - 1)) !== -1);
          }
          function p(a, b) {
            var c = n(a, b);
            if (c) {
              var d = b[c];
              if (d === null) {
                return;
              }
              if (!(a.length > c.length && d[d.length - 1] !== "/")) {
                return d + a.slice(c.length);
              }
            }
          }
          function q(a, b, c) {
            for (var d = a.scopes, e = c && n(c, d); e;) {
              var f = p(b, d[e]);
              if (f) {
                return f;
              }
              e = n(e.slice(0, e.lastIndexOf("/")), d);
            }
            return p(b, a.imports) || b.indexOf(":") !== -1 && b;
          }
          var r = c && Symbol.toStringTag;
          var s = c ? Symbol() : "@";
          var t = c ? Symbol() : "@";
          function u() {
            this[s] = {};
          }
          var v;
          var w = u.prototype;
          function x(a) {
            return a.id;
          }
          function y(a, b, c, d) {
            a.onload(c, b.id, b.d && b.d.map(x), !!d);
            if (c) {
              throw c;
            }
          }
          function z(b, c, d) {
            var e = b[s][c];
            if (e) {
              return e;
            }
            var f = [];
            var g = Object.create(null);
            if (r) {
              Object.defineProperty(g, r, {
                value: "Module"
              });
            }
            var h = Promise.resolve().then(function () {
              return b.instantiate(c, d);
            }).then(function (d) {
              if (!d) {
                throw Error(a(2, "Module " + c + " did not instantiate"));
              }
              var h = d[1](function (a, b) {
                e.h = true;
                var c = false;
                if (typeof a != "object") {
                  if (!(a in g && g[a] === b)) {
                    g[a] = b;
                    c = true;
                  }
                } else {
                  for (var d in a) {
                    b = a[d];
                    if (!(d in g && g[d] === b)) {
                      g[d] = b;
                      c = true;
                    }
                  }
                  if (a.__esModule) {
                    g.__esModule = a.__esModule;
                  }
                }
                if (c) {
                  for (var h = 0; h < f.length; h++) {
                    var i = f[h];
                    if (i) {
                      i(g);
                    }
                  }
                }
                return b;
              }, d[1].length === 2 ? {
                import: function (a) {
                  return b.import(a, c);
                },
                meta: b.createContext(c)
              } : undefined);
              e.e = h.execute || function () {};
              return [d[0], h.setters || []];
            });
            var i = (h = h.catch(function (a) {
              y(b, e, a, true);
            })).then(function (a) {
              return Promise.all(a[0].map(function (d, e) {
                var f = a[1][e];
                return Promise.resolve(b.resolve(d, c)).then(function (a) {
                  var d = z(b, a, c);
                  return Promise.resolve(d.I).then(function () {
                    if (f) {
                      f[t] = e;
                      d.i.push(f);
                      if (!(!d.h && d.I)) {
                        f(d.n);
                      }
                    }
                    return d;
                  });
                });
              })).then(function (a) {
                e.d = a;
              }, function (a) {
                y(b, e, a, false);
              });
            });
            i.catch(function (a) {
              e.e = null;
              e.er = a;
            });
            return e = b[s][c] = {
              id: c,
              i: f,
              n: g,
              I: h,
              L: i,
              h: false,
              d: undefined,
              e: undefined,
              er: undefined,
              E: undefined,
              C: undefined
            };
          }
          function A(a, b, c) {
            if (!c[b.id]) {
              c[b.id] = true;
              return Promise.resolve(b.L).then(function () {
                return Promise.all(b.d.map(function (b) {
                  return A(a, b, c);
                }));
              });
            }
          }
          w.import = function (a, b) {
            var c = this;
            return Promise.resolve(c.prepareImport()).then(function () {
              return c.resolve(a, b);
            }).then(function (a) {
              var b = z(c, a);
              return b.C || function (a, b) {
                return b.C = A(a, b, {}).then(function () {
                  return C(a, b, {});
                }).then(function () {
                  return b.n;
                });
              }(c, b);
            });
          };
          w.createContext = function (a) {
            return {
              url: a
            };
          };
          w.onload = function () {};
          w.register = function (a, b) {
            v = [a, b];
          };
          w.getRegister = function () {
            var a = v;
            v = undefined;
            return a;
          };
          var B = Object.freeze(Object.create(null));
          function C(a, b, c) {
            if (!c[b.id]) {
              c[b.id] = true;
              if (!b.e) {
                if (b.er) {
                  throw b.er;
                }
                if (b.E) {
                  return b.E;
                } else {
                  return undefined;
                }
              }
              var d;
              b.d.forEach(function (e) {
                try {
                  var f = C(a, e, c);
                  if (f) {
                    (d = d || []).push(f);
                  }
                } catch (c) {
                  b.e = null;
                  b.er = c;
                  y(a, b, c, false);
                }
              });
              if (d) {
                return Promise.all(d).then(e, function (c) {
                  b.e = null;
                  b.er = c;
                  y(a, b, c, false);
                });
              } else {
                return e();
              }
            }
            function e() {
              try {
                var c = b.e.call(B);
                if (c) {
                  c = c.then(function () {
                    b.C = b.n;
                    b.E = null;
                    y(a, b, null, true);
                  }, function (c) {
                    b.er = c;
                    b.E = null;
                    y(a, b, c, true);
                  });
                  return b.E = b.E || c;
                }
                b.C = b.n;
                y(a, b, null, true);
              } catch (c) {
                b.er = c;
                y(a, b, c, true);
              } finally {
                b.L = b.I = undefined;
                b.e = null;
              }
            }
          }
          g.System = new u();
          var D;
          var E;
          var F = c ? Symbol() : "#";
          var G = c ? Symbol() : "$";
          function H(a, b) {
            if (f) {
              Array.prototype.forEach.call(document.querySelectorAll("script[type=\"systemjs-importmap\"]" + b), a);
            }
          }
          H(function (a) {
            a._t = fetch(a.src).then(function (a) {
              return a.text();
            });
          }, "[src]");
          w.prepareImport = function () {
            var c = this;
            if (!c[G]) {
              c[F] = {
                imports: {},
                scopes: {}
              };
              c[G] = Promise.resolve();
              H(function (d) {
                c[G] = c[G].then(function () {
                  return (d._t || d.src && fetch(d.src).then(function (a) {
                    return a.text();
                  }) || Promise.resolve(d.innerHTML)).then(function (b) {
                    try {
                      return JSON.parse(b);
                    } catch (b) {
                      throw Error(a(1, "systemjs-importmap contains invalid JSON"));
                    }
                  }).then(function (a) {
                    c[F] = function (a, b, c) {
                      var d;
                      var e;
                      var f = {
                        imports: l({}, c.imports),
                        scopes: l({}, c.scopes)
                      };
                      if (a.imports) {
                        m(a.imports, f.imports, b, c, null);
                      }
                      if (a.scopes) {
                        for (var g in a.scopes) {
                          var h = k(d = g, e = b) || (d.indexOf(":") !== -1 ? d : k("./" + d, e));
                          m(a.scopes[g], f.scopes[h] || (f.scopes[h] = {}), b, c, h);
                        }
                      }
                      return f;
                    }(a, d.src || b, c[F]);
                  });
                });
              }, "");
            }
            return c[G];
          };
          w.resolve = function (c, d) {
            d = d || b;
            return q(this[F], k(c, d) || c, d) || function (b, c) {
              throw Error(a(8, "Unable to resolve bare specifier '" + b + (c ? "' from " + c : "'")));
            }(c, d);
          };
          w.resolveUrl = function (a, c) {
            return k(a, c || b) || a;
          };
          if (f) {
            e.addEventListener("error", function (a) {
              D = a.filename;
              E = a.error;
            });
            var I = location.origin;
          }
          w.createScript = function (a) {
            var b = document.createElement("script");
            b.async = true;
            if (a.indexOf(I + "/")) {
              b.crossOrigin = "anonymous";
            }
            b.src = a;
            return b;
          };
          w.instantiate = function (b, c) {
            var d = this;
            var e = w.createScript(b);
            if (e instanceof Promise) {
              return e.then(function (a) {
                e = a;
                return new Promise(f);
              });
            } else {
              return new Promise(f);
            }
            function f(f, g) {
              e.addEventListener("error", function () {
                document.head.removeChild(e);
                g(Error(a(3, "Error loading " + b + (c ? " from " + c : ""))));
              });
              e.addEventListener("load", function () {
                document.head.removeChild(e);
                if (D === e.src) {
                  g(E);
                } else {
                  f(d.getRegister());
                }
              });
              document.head.appendChild(e);
            }
          };
          (function (a) {
            var b;
            var c;
            var d;
            var f = a.System.constructor.prototype;
            var g = f.import;
            f.import = function (e, f) {
              (function () {
                b = c = undefined;
                for (var e in a) {
                  if (!k(e)) {
                    if (b) {
                      if (!c) {
                        c = e;
                      }
                    } else {
                      b = e;
                    }
                    d = e;
                  }
                }
              })();
              return g.call(this, e, f);
            };
            var h = [[], function () {
              return {};
            }];
            var i = f.getRegister;
            f.getRegister = function () {
              var e = i.call(this);
              if (e) {
                return e;
              }
              var f;
              var g = function () {
                var e;
                var f = 0;
                for (var g in a) {
                  if (!k(g)) {
                    if (f === 0 && g !== b || f === 1 && g !== c) {
                      return g;
                    }
                    f++;
                    e = g;
                  }
                }
                if (e !== d) {
                  return e;
                }
              }();
              if (!g) {
                return h;
              }
              try {
                f = a[g];
              } catch (a) {
                return h;
              }
              return [[], function (a) {
                return {
                  execute: function () {
                    a({
                      default: f,
                      __useDefault: true
                    });
                  }
                };
              }];
            };
            var j = typeof navigator != "undefined" && navigator.userAgent.indexOf("Trident") !== -1;
            function k(b) {
              return !a.hasOwnProperty(b) || !isNaN(b) && b < a.length || j && a[b] && e !== undefined && a[b].parent === e;
            }
          })(d !== undefined ? d : o);
          (function (b) {
            var c = b.System.constructor.prototype;
            var d = c.instantiate;
            var e = /\.(css|json|wasm)$/;
            c.shouldFetch = function (a) {
              var b = a.split("?")[0].split("#")[0];
              return b.slice(b.lastIndexOf(".")).match(e);
            };
            c.fetch = function (a) {
              return fetch(a);
            };
            c.instantiate = function (b, c) {
              if (this.shouldFetch(b)) {
                return this.fetch(b).then(function (d) {
                  if (!d.ok) {
                    throw Error(a(7, "Error loading: " + d.status + " " + d.statusText + ", loading " + b + (c ? " from " + c : "")));
                  }
                  var e = d.headers.get("content-type");
                  if (!e) {
                    throw Error(a(4, "Error loading: Missing header \"Content-Type\", loading " + b + (c ? " from " + c : "")));
                  }
                  if (e.match(/^application\/json(;|$)/)) {
                    return d.json().then(function (a) {
                      return [[], function (b) {
                        return {
                          execute: function () {
                            b("default", a);
                          }
                        };
                      }];
                    }, function (d) {
                      throw Error(a(3, "Content error: Error \"" + d + "\", loading " + b + ", from " + c));
                    });
                  }
                  if (e.match(/^text\/css(;|$)/)) {
                    return d.text().then(function (a) {
                      return [[], function (b) {
                        return {
                          execute: function () {
                            var c = new CSSStyleSheet();
                            c.replaceSync(a);
                            b("default", c);
                          }
                        };
                      }];
                    }, function (d) {
                      throw Error(a(3, "Content error: Error \"" + d + "\", loading " + b + ", from " + c));
                    });
                  }
                  if (e.match(/^application\/wasm(;|$)/)) {
                    return (WebAssembly.compileStreaming ? WebAssembly.compileStreaming(d) : d.arrayBuffer().then(WebAssembly.compile)).then(function (a) {
                      var b = [];
                      var c = [];
                      var d = {};
                      if (WebAssembly.Module.imports) {
                        WebAssembly.Module.imports(a).forEach(function (a) {
                          var e = a.module;
                          if (b.indexOf(e) === -1) {
                            b.push(e);
                            c.push(function (a) {
                              d[e] = a;
                            });
                          }
                        });
                      }
                      return [b, function (b) {
                        return {
                          setters: c,
                          execute: function () {
                            return WebAssembly.instantiate(a, d).then(function (a) {
                              b(a.exports);
                            });
                          }
                        };
                      }];
                    }, function (d) {
                      throw Error(a(3, "Content error: Error \"" + d + "\", loading " + b + ", from " + c));
                    });
                  }
                  throw Error(a(4, "Error loading: Unknown module type \"" + e + "\", loading " + b + ", from " + c));
                }, function (d) {
                  throw Error(a(3, "Error loading: Error \"" + d + "\", loading " + b + ", from " + c));
                });
              } else {
                return d.apply(this, arguments);
              }
            };
          })(d !== undefined ? d : o);
          var J = typeof Symbol != "undefined" && Symbol.toStringTag;
          w.get = function (a) {
            var b = this[s][a];
            if (b && b.e === null && !b.E) {
              if (b.er) {
                return null;
              } else {
                return b.n;
              }
            }
          };
          w.set = function (a, b) {
            try {
              new URL(a);
            } catch (a) {}
            var c;
            if (J && b[J] === "Module") {
              c = b;
            } else {
              c = Object.assign(Object.create(null), b);
              if (J) {
                Object.defineProperty(c, J, {
                  value: "Module"
                });
              }
            }
            var d = Promise.resolve(c);
            var e = this[s][a] || (this[s][a] = {
              id: a,
              i: [],
              h: false,
              d: [],
              e: null,
              er: undefined,
              E: undefined
            });
            return !e.e && !e.E && (Object.assign(e, {
              n: c,
              I: undefined,
              L: undefined,
              C: d
            }), c);
          };
          w.has = function (a) {
            return !!this[s][a];
          };
          w.delete = function (a) {
            var b = this[s];
            var c = b[a];
            if (!c || c.e !== null || c.E) {
              return false;
            }
            var d = c.i.splice(0);
            if (c.er) {
              c.C = Promise.reject(c.er);
            }
            if (c.d) {
              c.d.forEach(function (a, b) {
                a.i.some(function (c, d) {
                  if (c[t] === b) {
                    a.i.splice(d, 1);
                    return true;
                  }
                });
              });
            }
            delete b[a];
            return function () {
              var c = b[a];
              if (!c || !d || c.e !== null || c.E) {
                return false;
              }
              d.forEach(function (a) {
                c.i.push(a);
                a(c.n);
              });
              d = null;
            };
          };
          var K = typeof Symbol != "undefined" && Symbol.iterator;
          w.entries = function () {
            var a;
            var b;
            var c = this;
            var d = Object.keys(c[s]);
            var e = 0;
            var f = {
              next: function () {
                for (; (b = d[e++]) !== undefined && (a = c.get(b)) === undefined;);
                return {
                  done: b === undefined,
                  value: b !== undefined && [b, a]
                };
              }
            };
            f[K] = function () {
              return this;
            };
            return f;
          };
        })();
        var dj = new (function () {
          function a() {
            this.Ci = Object.create(null);
          }
          a.prototype.getMeta = function () {
            return this.Ci;
          };
          a.prototype.setMeta = function (a, b) {
            if (!this.Ci[a]) {
              this.Ci[a] = b;
            }
          };
          a.prototype.removeMeta = function (a) {
            delete this.Ci[a];
          };
          return a;
        }())();
        var ej = {
          exports: {}
        };
        (function (a) {
          a.exports = function () {
            var a = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
            function b(a) {
              var b;
              var c;
              var d = a.replace(/^v/, "").replace(/\+.*$/, "");
              c = "-";
              var e = (b = d).indexOf(c) === -1 ? b.length : b.indexOf(c);
              var f = d.substring(0, e).split(".");
              f.push(d.substring(e + 1));
              return f;
            }
            function c(a) {
              if (isNaN(+a)) {
                return a;
              } else {
                return +a;
              }
            }
            function d(b) {
              if (typeof b != "string") {
                throw new TypeError("Invalid argument expected string");
              }
              if (!a.test(b)) {
                throw Error("Invalid argument not valid semver ('" + b + "' received)");
              }
            }
            function e(a, e) {
              [a, e].forEach(d);
              for (var f = b(a), g = b(e), h = 0; h < Math.max(f.length - 1, g.length - 1); h++) {
                var i = parseInt(f[h] || 0, 10);
                var j = parseInt(g[h] || 0, 10);
                if (i > j) {
                  return 1;
                }
                if (j > i) {
                  return -1;
                }
              }
              var k = f[f.length - 1];
              var l = g[g.length - 1];
              if (k && l) {
                var m = k.split(".").map(c);
                var n = l.split(".").map(c);
                for (h = 0; h < Math.max(m.length, n.length); h++) {
                  if (m[h] === undefined || typeof n[h] == "string" && typeof m[h] == "number") {
                    return -1;
                  }
                  if (n[h] === undefined || typeof m[h] == "string" && typeof n[h] == "number") {
                    return 1;
                  }
                  if (m[h] > n[h]) {
                    return 1;
                  }
                  if (n[h] > m[h]) {
                    return -1;
                  }
                }
              } else if (k || l) {
                if (k) {
                  return -1;
                } else {
                  return 1;
                }
              }
              return 0;
            }
            var f = [">", ">=", "=", "<", "<="];
            var g = {
              ">": [1],
              ">=": [0, 1],
              "=": [0],
              "<=": [-1, 0],
              "<": [-1]
            };
            e.validate = function (b) {
              return typeof b == "string" && a.test(b);
            };
            e.compare = function (a, b, c) {
              (function (a) {
                if (typeof a != "string") {
                  throw new TypeError("Invalid operator type, expected string but got " + typeof a);
                }
                if (f.indexOf(a) === -1) {
                  throw new TypeError("Invalid operator, expected one of " + f.join("|"));
                }
              })(c);
              var d = e(a, b);
              return g[c].indexOf(d) > -1;
            };
            return e;
          }();
        })(ej);
        var gj = ej.exports;
        function hj(a, b) {
          return b.split("||").map(function (a) {
            return a.trim();
          }).some(function (b) {
            return b.split(" ").every(function (b) {
              var c = 0;
              if (b[0] === "<" || b[0] === ">") {
                c = 1;
                if (b[1] === "=") {
                  c++;
                }
              } else if (b[0] === "=") {
                c = 1;
              }
              var d = b.substring(0, c) || "=";
              var e = b.substring(c);
              return gj.compare(a, e, d);
            });
          });
        }
        var ud;
        var ij = System.constructor.prototype;
        var jj = System.constructor;
        var kj = [];
        function lj(a) {
          a.registerRegistry = Object.create(null);
        }
        lj(System);
        function mj() {
          jj.call(this);
          lj(this);
        }
        mj.prototype = ij;
        System.constructor = mj;
        var nj = ij.register;
        ij.register = function (a, b, c) {
          if (typeof a != "string") {
            return nj.apply(this, arguments);
          }
          var d = [b, c];
          this.registerRegistry[a] = d;
          ud = d;
          Promise.resolve().then(function () {
            ud = null;
          }).catch(function () {});
          return nj.apply(this, arguments);
        };
        var pj = ij.resolve;
        function qj(a) {
          var b = a.name;
          var c = sg.PluginDependencies;
          if (c && c[b]) {
            var d = c[b];
            var e = a.version;
            if (!hj(e, d)) {
              var f = `Incompatible plugin version. Game required plugin ${b} version is conflict
  current version: ${e} : expected: ${d}`;
              throw Error(f);
            }
          }
        }
        ij.resolve = function (a, b) {
          try {
            return pj.call(this, a, b);
          } catch (b) {
            if (a in this.registerRegistry) {
              return a;
            }
            throw b;
          }
        };
        var rj = ij.instantiate;
        ij.instantiate = function (a, b) {
          for (var c = this.registerRegistry[a], d = dj.getMeta(), e = 0, f = Object.entries(d); e < f.length; e++) {
            var g = f[e];
            var h = g[0];
            var i = g[1];
            if (!kj.includes(h)) {
              qj(i);
              var j = i.dependencies;
              var k = true;
              for (var l in j) {
                var m = d[l];
                var n = j[l];
                if (!m) {
                  k = false;
                  break;
                }
                if (!hj(m.version, n)) {
                  throw Error(`Incompatible plugin version: ${m.name} load ${l} ${m.version}, expected: ${n}`);
                }
              }
              if (k) {
                kj.push(h);
              }
            }
          }
          if (c) {
            this.registerRegistry[a] = null;
            return c;
          } else {
            return rj.call(this, a, b);
          }
        };
        var sj = ij.getRegister;
        ij.getRegister = function () {
          var a = sj.call(this) || ud;
          ud = null;
          return a;
        };
        var tj = new (function () {
          function a() {
            this.pluginRegistries = Object.create(null);
          }
          a.prototype.setPluginRegistry = function (a, b) {
            if (!this.pluginRegistries[a]) {
              this.pluginRegistries[a] = b;
            }
          };
          a.prototype.getPluginRegistry = function (a) {
            return this.pluginRegistries[a];
          };
          a.prototype.getPluginRegistries = function () {
            return Object.assign({}, this.pluginRegistries);
          };
          a.prototype.removePluginRegistry = function (a) {
            delete this.pluginRegistries[a];
          };
          return a;
        }())();
        var uj = /\\/g;
        function vj() {
          for (var a = [], b = 0; b < arguments.length; b++) {
            a[b] = arguments[b];
          }
          for (var c = "", d = 0, e = a.length; d < e; ++d) {
            var f = a[d];
            if (f) {
              if (c.length > 0) {
                var g = c[c.length - 1];
                if (g !== "/" && !f.startsWith("/")) {
                  c += "/";
                }
              }
              c += f;
            }
          }
          return c;
        }
        function wj(a) {
          return a.indexOf("file://") === 0;
        }
        function ug(a) {
          return a.indexOf("http://") === 0 || a.indexOf("https://") === 0;
        }
        function xj(a) {
          return a.startsWith("/") || a.startsWith("./") || a.startsWith("../");
        }
        function yj(a, b) {
          if (a.includes("\\")) {
            a = a.replace(uj, "/");
          }
          if (a.startsWith("/") && a[1] === "/") {
            return b.slice(0, b.indexOf(":") + 1) + a;
          }
          if (a[0] === "." && (a[1] === "/" || a[1] === "." && (a[2] === "/" || a.length === 2 && (a += "/")) || a.length === 1 && (a += "/")) || a[0] === "/") {
            var c = b.slice(0, b.indexOf(":") + 1);
            var d = undefined;
            d = b[c.length + 1] === "/" ? c !== "file:" ? (d = b.slice(c.length + 2)).slice(d.indexOf("/") + 1) : b.slice(8) : b.slice(c.length + +(b[c.length] === "/"));
            if (a.startsWith("/")) {
              return b.slice(0, b.length - d.length - 1) + a;
            }
            for (var e = d.slice(0, d.lastIndexOf("/") + 1) + a, f = [], g = -1, h = 0; h < e.length; h++) {
              if (g !== -1) {
                if (e[h] === "/") {
                  f.push(e.slice(g, h + 1));
                  g = -1;
                }
              } else if (e[h] === ".") {
                if (e[h + 1] !== "." || e[h + 2] !== "/" && h + 2 !== e.length) {
                  if (e[h + 1] === "/" || h + 1 === e.length) {
                    h += 1;
                  } else {
                    g = h;
                  }
                } else {
                  f.pop();
                  h += 2;
                }
              } else {
                g = h;
              }
            }
            if (g !== -1) {
              f.push(e.slice(g));
            }
            return b.slice(0, b.length - d.length) + f.join("");
          }
        }
        function zj(a) {
          if (/^[a-z0-9A-Z-_]+:/.test(a)) {
            if (a.startsWith("javascript:")) {
              return;
            }
          } else {
            if (!a.startsWith("//")) {
              a = "//" + a;
            }
            a = e.location.protocol + a;
          }
          return a;
        }
        function Aj(a) {
          var b = a.split("//").pop() || a;
          return a.replace(b, b.substring(0, b.lastIndexOf("/")));
        }
        var Bj = System;
        var Cj = System.constructor.prototype;
        function Dj() {
          return sg.SharedPath;
        }
        var Ej;
        var Fj = Cj.resolve;
        Cj.resolve = function (a, b) {
          try {
            return Fj.call(this, a, b);
          } catch (b) {
            var c = function (a) {
              var b = tj.getPluginRegistry(a);
              if (!b) {
                var c = `${a}/index.js`;
                b = {
                  name: a,
                  rawUrl: a,
                  url: "./" + c,
                  noPrefixUrlPath: c,
                  parentUrl: Dj()
                };
                tj.setPluginRegistry(a, b);
              }
              return b;
            }(a);
            (function (a) {
              var b = Dj();
              if (b.startsWith("../") && a.parentUrl === b) {
                a.parentUrl = undefined;
              }
            })(c);
            var d = dj.getMeta()[a];
            if (d && d.entry) {
              var e = d.entry;
              var f = d.name;
              var g = yj(e, `${f}/`);
              var h = c.parentUrl ? c.parentUrl + g : Dj() + g;
              if (!h) {
                throw Error(`Resolved url error: ${h}`);
              }
              return Fj.call(this, h, c.parentUrl);
            }
            if (!c.url) {
              throw Error(`Registry url error: ${c.url}`);
            }
            var i = c.parentUrl ? c.parentUrl + c.noPrefixUrlPath : c.url;
            return Fj.call(this, i, c.parentUrl);
          }
        };
        (function (a) {
          a[a.LoadingError = 1] = "LoadingError";
          a[a.ScriptError = 2] = "ScriptError";
          a[a.VersionError = 3] = "VersionError";
        })(Ej || (Ej = {}));
        var Gj = Object.getOwnPropertySymbols || undefined;
        var Hj = Gj && Gj(System)[0] || "@";
        var Ij = function () {
          function a() {
            this.errorItems = [];
          }
          a.prototype.getAbsoluteUrl = function (a) {
            var b = tj.getPluginRegistry(a);
            if (!b) {
              return a;
            }
            var c = b.entry ? b.entry : b.noPrefixUrlPath;
            var d = b.absoluteUrl;
            if (!d) {
              var e = this.getRawEntries();
              for (var f in e) {
                if (f.includes(c)) {
                  d = b.absoluteUrl = f;
                  break;
                }
              }
            }
            return d || "";
          };
          a.prototype.getRawEntries = function () {
            return Object.assign({}, System[Hj]);
          };
          a.prototype.forceDelete = function (a) {
            var b = tj.getPluginRegistry(a);
            var c = this.getRawEntries();
            if (b) {
              var d = this.getAbsoluteUrl(a);
              var e = c[d].d;
              var f = (e == null ? undefined : e.length) && e[e.length - 1].id;
              if (f) {
                this.removeRawEntry(f);
              }
              this.removeRawEntry(d);
              tj.removePluginRegistry(a);
            } else {
              this.removeRawEntry(a);
            }
          };
          a.prototype.getDeps = function (a) {
            var b = [];
            var c = this.getRawEntries()[a];
            if (c && c.d) {
              b.push.apply(b, c.d);
            }
            return b;
          };
          a.prototype.cleanErrorModule = function () {
            var a = this.getRawEntries();
            for (var b in a) {
              var c = a[b];
              if (c.er) {
                System.delete(c.id);
              }
            }
          };
          a.prototype.addErrorItem = function (a) {
            this.errorItems.push(a);
          };
          a.prototype.getErrorItems = function () {
            return this.errorItems.slice();
          };
          a.prototype.cleanErrorItems = function () {
            this.errorItems.length = 0;
          };
          a.prototype.removeRawEntry = function (a) {
            delete System[Hj][a];
          };
          return a;
        }();
        var Kj = new Ij();
        var Mj = Bj.constructor.prototype;
        Mj.onload = function (a, b) {
          if (a) {
            var c = a.message.startsWith("Error loading");
            Kj.addErrorItem({
              src: b,
              type: c ? Ej.LoadingError : Ej.ScriptError,
              error: a
            });
          }
        };
        var Nj = Mj.get;
        Mj.get = function (a) {
          return Nj.call(this, Kj.getAbsoluteUrl(a));
        };
        var Oj;
        var Pj = Mj.createScript;
        Mj.createScript = function (a) {
          var b = this;
          return _h(a).then(function (a) {
            var c = Pj.call(b, a);
            if (!(c instanceof HTMLScriptElement)) {
              throw Error("Unexpected script element");
            }
            function d(b) {
              URL.revokeObjectURL(a);
              if (b.type === "error") {
                di(a);
              }
            }
            c.addEventListener("error", d);
            c.addEventListener("load", d);
            return c;
          }).catch(function () {
            throw Error(`Error loading ${a}`);
          });
        };
        Mj.fetch = $h;
        (function (a) {
          a[a.Blob = 0] = "Blob";
          a[a.Image = 1] = "Image";
          a[a.Script = 2] = "Script";
          a[a.Style = 3] = "Style";
          a[a.Json = 4] = "Json";
          a[a.SystemScript = 5] = "SystemScript";
          a[a.Text = 6] = "Text";
          a[a.ArrayBuffer = 7] = "ArrayBuffer";
        })(Oj || (Oj = {}));
        var Qj = {
          css: Oj.Style,
          js: Oj.SystemScript,
          png: Oj.Image,
          jpg: Oj.Image,
          json: Oj.Json,
          mp3: Oj.ArrayBuffer
        };
        var Rj = function () {
          function a() {
            this.Mi = 0;
            this.Hi = false;
            this.onPreload = undefined;
            this.onRetry = undefined;
            this.onLoad = undefined;
          }
          a.prototype.load = function (a) {
            if (a && a.length !== 0) {
              this.Mi = a.length;
              for (var b = 0, c = a; b < c.length; b++) {
                var d = c[b];
                var e = undefined;
                if (typeof d == "string") {
                  e = {
                    src: d,
                    type: this.Vi(d)
                  };
                } else {
                  if (!d.src) {
                    --this.Mi;
                    continue;
                  }
                  if ((e = d).type === undefined) {
                    d.type = this.Vi(d.src);
                  }
                }
                this.Bi(e);
              }
            } else if (this.onComplete) {
              this.onComplete();
            }
          };
          a.prototype.Bi = function (b) {
            var c = this;
            a.context.event.emit("Shell.PWDReset");
            var d = b.retry = b.retry || 0;
            if (d > (b.maxAttemptCount === undefined ? a.ji : b.maxAttemptCount)) {
              if (b.optional) {
                this.Pi(b);
              } else if (this.onError) {
                this.onError(b);
              }
            } else if (d === 0) {
              if (this.onPreload) {
                this.onPreload(b);
              }
              this.Gi(b);
            } else {
              // TOLOOK
              setTimeout(function () {
                if (c.onRetry) {
                  c.onRetry(b);
                }
                if (b.shouldRetry === false) {
                  c.Pi(b);
                } else {
                  c.Gi(b);
                }
              }, (1 << d) * 1000);
            }
          };
          a.prototype.Gi = function (a) {
            if (a.type === Oj.Script) {
              this.Ri(a);
            } else if (a.type === Oj.SystemScript) {
              this.Zi(a);
            } else if (a.type === Oj.Style) {
              this.Oi(a);
            } else if (a.type === Oj.Image) {
              this.Di(a);
            } else {
              this.Ni(a);
            }
          };
          a.prototype.Ni = function (a) {
            var b = this;
            $h(a.src).then(function (b) {
              if (!b.ok) {
                throw b.status;
              }
              switch (a.type) {
                case Oj.Json:
                  return b.json();
                case Oj.Blob:
                  return b.blob();
                case Oj.ArrayBuffer:
                  return b.arrayBuffer();
                default:
                  return b.text();
              }
            }).then(function (c) {
              a.response = c;
              b.Pi(a);
            }).catch(function (c) {
              if (typeof c == "number") {
                a.errCode = c;
              }
              b.Ti(a);
            });
          };
          a.prototype.Zi = function (b) {
            var c = this;
            Bj.import(b.src).then(function (a) {
              b.response = a;
              c.Pi(b);
            }).catch(function (d) {
              if (d.message.startsWith("Incompatible plugin version")) {
                if (c.Hi) {
                  return;
                }
                c.Hi = true;
                a.context.event.emit("Shell.PWDDisabled");
                a.context.event.emit("Error.Occurred", {
                  context: "Preload",
                  info: {
                    category: vg,
                    domain: cj.Domain,
                    code: cj.ResourceVersionError,
                    error: d
                  },
                  report: true
                }, function () {
                  a.context.event.emit("Window.Reload");
                });
              } else {
                c.Qi(d, b);
              }
            });
          };
          a.prototype.Qi = function (b, c) {
            var d = Kj.getErrorItems();
            Kj.cleanErrorItems();
            Kj.cleanErrorModule();
            if (d.length !== 0) {
              var e = d.map(function (a) {
                return a.src;
              }).join(",") || c.src;
              var f = d[0].type === Ej.ScriptError ? cj.PluginScriptError : cj.LoadResourceError;
              if (f === cj.PluginScriptError) {
                a.context.event.emit("Shell.PWDDisabled");
                a.context.event.emit("Error.SendExceptionReport", b);
                c.errCode = f;
                c.err = b;
                if (this.onError) {
                  this.onError(c);
                }
                this.onComplete = undefined;
                this.onError = undefined;
                this.onRetry = undefined;
                this.onLoad = undefined;
              } else {
                var g = c.retry || 0;
                this.Li(e, g, f);
                c.errCode = f;
                c.err = "load resource fail";
                c.retry = g + 1;
                this.Bi(c);
              }
            }
          };
          a.prototype.Ii = function (a) {
            return function (b) {
              return new Promise(function (c, d) {
                var e = document.createElement(a);
                e.onload = function () {
                  URL.revokeObjectURL(b);
                  if (e instanceof HTMLScriptElement) {
                    e.parentElement.removeChild(e);
                  }
                  c(e);
                };
                e.onerror = function () {
                  var a;
                  URL.revokeObjectURL(b);
                  di(b);
                  if (!((a = e.parentElement) === null || a === undefined)) {
                    a.removeChild(e);
                  }
                  d("onerror");
                };
                if (e instanceof HTMLScriptElement) {
                  e.async = true;
                  e.src = b;
                  document.head.appendChild(e);
                } else if (e instanceof HTMLImageElement) {
                  e.src = b;
                } else if (e instanceof HTMLLinkElement) {
                  e.rel = "stylesheet";
                  e.type = "text/css";
                  e.href = b;
                  document.head.appendChild(e);
                } else {
                  d("unknown");
                }
              });
            };
          };
          a.prototype.Fi = function (a, b) {
            var c = this;
            _h(a.src).then(this.Ii(b)).then(function (b) {
              a.response = b;
              c.Pi(a);
            }).catch(function (b) {
              if (typeof b == "number") {
                a.errCode = b;
              }
              c.Ti(a);
            });
          };
          a.prototype.Ri = function (a) {
            this.Fi(a, "script");
          };
          a.prototype.Di = function (a) {
            this.Fi(a, "img");
          };
          a.prototype.Oi = function (a) {
            this.Fi(a, "link");
          };
          a.prototype.Pi = function (a) {
            if (this.onLoad) {
              this.onLoad(a);
            }
            --this.Mi;
            if (this.Mi === 0 && this.onComplete) {
              this.onComplete();
            }
          };
          a.prototype.Ti = function (a) {
            var b = a.retry || 0;
            this.Li(a.src, b, cj.LoadResourceError);
            a.retry = b + 1;
            this.Bi(a);
          };
          a.prototype.Vi = function (a) {
            return Qj[a.split("?")[0].substring(a.lastIndexOf(".") + 1)] || Oj.Blob;
          };
          a.prototype.Li = function (b, c, d) {
            a.context.event.emit("Shell.PWDDisabled");
            var e = "src: " + b.split("?")[0];
            a.context.event.emit("Error.Report", {
              category: vg,
              error: "load resource fail",
              domain: cj.Domain,
              code: d,
              retry: c,
              messages: e
            });
          };
          a.ji = 5;
          return a;
        }();
        var Lb = {};
        function Sj(a, b, c) {
          var d = c && c.delayComplete || false;
          var e = {
            mainComponent: b,
            delayComplete: d
          };
          Lb[a] = e;
          if (d) {
            return function (a) {
              if (e.completeCallback) {
                e.completeCallback(a);
              }
            };
          }
        }
        function Tj(a) {
          return function (b) {
            b.prototype.complete = Sj(a, b, {
              delayComplete: true
            });
          };
        }
        var Lf = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onDestroy = function () {
            if (this.root && cc.isValid(this.root)) {
              this.root.removeFromParent(true);
            }
          };
          return c;
        }(_i);
        function Uj(a) {
          return function (b) {
            b.prototype.complete = Sj(a, b, {
              delayComplete: true
            });
          };
        }
        var Vj;
        var Wj;
        var Xj;
        var Yj;
        var Zj;
        var $j;
        var _j = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          return c;
        }(_i);
        var ak = function () {
          function a() {}
          a.prototype.getClassInfo = function (a) {
            var b = a._$cInfo;
            if (b && b.componentCls !== a) {
              b = a._$cInfo = undefined;
            }
            return b;
          };
          a.prototype.getProperty = function (a) {
            if (a && a._$prop) {
              return a._$prop;
            }
          };
          a.prototype.getComponentBundle = function (a) {
            var b = this.getClassInfo(a);
            if (b) {
              return b.bundleInfo;
            }
          };
          a.prototype.injectClassInfo = function (a, b) {
            var c = this.getClassInfo(a);
            if (!(c && c !== undefined)) {
              c = a._$cInfo = {
                bundleInfo: b,
                componentCls: a,
                componentID: undefined
              };
            }
            return c;
          };
          a.prototype.injectProperty = function (a) {
            var b = this.getProperty(a);
            if (!b) {
              b = a._$prop = {};
            }
            return b;
          };
          a.prototype.checkCrossBundleOperation = function (a, b) {
            var c = this.getClassInfo(a);
            if (c && c.bundleInfo !== b) {
              throw Error("Cross bundle operation not allowed");
            }
          };
          return a;
        }();
        var bk = new ak();
        var ck = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.zi = function (a, b, c, d) {
            var e = this;
            if (d === undefined) {
              d = true;
            }
            var f = l([], c, true);
            if (a.stack) {
              f.push(a.stack);
            }
            var g = {
              category: vg,
              domain: cj.Domain,
              code: cj.PluginScriptError,
              error: a,
              messages: f
            };
            this.event.emit("Error.SendExceptionReport", a);
            if (b && b.optional) {
              var h = this.context.getContext(b);
              if (h) {
                h.destroy();
              }
            } else if (d) {
              this.event.emit("Error.Occurred", {
                context: "Unknown",
                info: g,
                report: false
              }, function () {
                e.event.emit("Window.Reload");
              });
            }
          };
          return c;
        }(_i);
        var Ld = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Wi = [];
            return b;
          }
          b(c, a);
          c.prototype.onInstantiate = function (b) {
            a.prototype.onInstantiate.call(this, b);
            this.event.on("Core.BundleCreated", this.Ui, this);
            this.event.on("Core.BundleDestroyed", this.qi, this);
          };
          c.prototype.create = function (a, b) {
            var c = this.Wi[b.id];
            var d = bk.injectClassInfo(a, b);
            if (d.componentID === undefined) {
              c.push(undefined);
              d.componentID = c.length - 1;
            }
            if (!c[d.componentID]) {
              var e = this.context.getContext(b);
              if (!e) {
                throw Error("Unable to get bundle context");
              }
              try {
                var f = new a();
                bk.injectProperty(f);
                if (f.onInstantiate) {
                  f.onInstantiate(e);
                }
                c[d.componentID] = f;
                if (f.onCreate) {
                  f.onCreate(b.config);
                }
                this.event.emit("Core.ComponentCreated", a);
              } catch (a) {
                if (d.componentID !== undefined) {
                  c[d.componentID] = undefined;
                }
                this.zi(a, b, ["Component create"], !e.bundleInfo.optional);
                throw a;
              }
            }
          };
          c.prototype.getInstance = function (a) {
            var b = bk.getClassInfo(a);
            if (b) {
              var c = this.Wi[b.bundleInfo.id];
              if (c) {
                return c[b.componentID];
              }
            }
          };
          c.prototype.destroy = function (a, b) {
            var c = bk.getClassInfo(a);
            if (c) {
              var d = c.componentID;
              var e = this.Wi[c.bundleInfo.id];
              var f = e[d];
              if (f) {
                e[d] = undefined;
                this._destroy(f, b);
              }
            }
          };
          c.prototype.updateState = function (a, b) {
            var c = bk.getClassInfo(a);
            if (c) {
              var d = c.bundleInfo.id ? this.Wi[c.bundleInfo.id][c.componentID] : undefined;
              if (d) {
                if (d.state) {
                  Object.assign(d.state, b);
                }
                try {
                  if (d.onStateChange) {
                    d.onStateChange(b);
                  }
                } catch (a) {
                  this.zi(a, c.bundleInfo, ["Component updateState"]);
                }
              }
            }
          };
          c.prototype.Ui = function (a) {
            var b = a.payload;
            if (!b.id) {
              throw Error("Unable to get bundle id");
            }
            this.Wi[b.id] = [];
          };
          c.prototype.qi = function (a) {
            var b = a.payload;
            if (!b.id) {
              throw Error("Unable to get bundle id");
            }
            var c = this.Wi[b.id];
            if (c && c.length > 0) {
              for (var d = 0; d < c.length; ++d) {
                if (c[d]) {
                  this._destroy(c[d], b);
                }
              }
            }
            this.Wi[b.id] = undefined;
          };
          c.prototype._destroy = function (a, b) {
            try {
              if (a.onDestroy) {
                a.onDestroy();
              }
            } catch (a) {
              this.zi(a, b, ["Component destroy"]);
            }
            this.event.emit("Core.ComponentDestroyed", {
              componentCls: a.cls,
              component: a
            });
          };
          return c;
        }(ck);
        var dk = typeof Symbol != "undefined";
        var ek = dk ? Symbol() : "_type";
        var gk = dk ? Symbol() : "_propagationStopped";
        var hk = dk ? Symbol() : "_intercepted";
        var Lj = dk ? Symbol() : "_propagateCb";
        var ik = dk ? Symbol() : "_emittingBundle";
        var jk = dk ? Symbol() : "_subscribers";
        var kk = function () {
          function a() {
            this.cleanUp();
          }
          Object.defineProperty(a.prototype, "type", {
            get: function () {
              return this[ek];
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(a.prototype, "emittingBundle", {
            get: function () {
              return this[ik];
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(a.prototype, "propagationCanceled", {
            get: function () {
              return this[gk];
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(a.prototype, "intercepted", {
            get: function () {
              return this[hk];
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(a.prototype, "subscribers", {
            get: function () {
              return this[jk];
            },
            enumerable: false,
            configurable: true
          });
          a.prototype.init = function (a, b, c, d, e) {
            this[ek] = a;
            this[Lj] = c;
            this[ik] = d;
            this[jk] = e;
            this.payload = b;
          };
          a.prototype.intercept = function () {
            this[hk] = true;
          };
          a.prototype.propagate = function () {
            if (!this[hk]) {
              throw Error("Propagation called on non intercepted event");
            }
            this[hk] = false;
            this[Lj](this);
          };
          a.prototype.stopPropagation = function () {
            this[gk] = true;
          };
          a.prototype.cleanUp = function () {
            this[ek] = undefined;
            this[gk] = false;
            this[hk] = false;
            this[Lj] = undefined;
            this[ik] = undefined;
            this[jk] = undefined;
            this.payload = undefined;
            this.response = undefined;
            this.responseCb = undefined;
            this.callbackRef = undefined;
            this.error = undefined;
          };
          return a;
        }();
        var lk = typeof Symbol != "undefined";
        var mk = lk ? Symbol() : "_subscriptionTable";
        var nk = lk ? Symbol() : "_pendingEmitOnceTable";
        var pk = lk ? Symbol() : "_emitQueue";
        var qk = lk ? Symbol() : "_eventPool";
        var rk = lk ? Symbol() : "_currentEvent";
        var Lg = lk ? Symbol() : "_processing";
        var sk = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b[Vj] = {};
            b[Wj] = {};
            b[Xj] = [];
            b[Yj] = [];
            b[Zj] = undefined;
            b[$j] = false;
            return b;
          }
          b(c, a);
          c.prototype.onInstantiate = function (b) {
            a.prototype.onInstantiate.call(this, b);
            this.event.on("Core.ComponentDestroyed", this.Yi, this);
          };
          c.prototype.on = function (a, b, c, d, e) {
            this.Ji(a, b, c, false, this.Xi(d), e);
          };
          c.prototype.once = function (a, b, c, d, e) {
            this.Ji(a, b, c, true, this.Xi(d), e);
          };
          c.prototype.off = function (a, b, c) {
            this.Ki(a, b, c);
          };
          c.prototype.emit = function (a, b, c, d) {
            var e = this[qk].pop() || new kk();
            var f = this[mk][a] ? l([], this[mk][a], true) : [];
            e.init(a, b, this.propagate.bind(this), d, f);
            e.responseCb = c;
            this.propagate(e);
          };
          c.prototype.propagate = function (a) {
            if (this[rk] !== a) {
              this[pk].push(a);
              this.$i();
            }
          };
          c.prototype.hasListeners = function (a) {
            var b = this[mk][a];
            return !(!b || b.length === 0);
          };
          c.prototype.Yi = function (a) {
            var b = bk.getProperty(a.payload.component).subscriptions;
            if (b) {
              for (; b.length !== 0;) {
                var c = b[b.length - 1];
                this.Ki(c.type, c.callback, a.payload.component);
              }
            }
          };
          c.prototype.Ji = function (a, b, c, d, e, f) {
            var g = this[mk][a];
            if (g === undefined) {
              g = this[mk][a] = [];
            }
            for (var h = 0; h < g.length; ++h) {
              var i = g[h];
              if (i !== undefined && i.callback === b && i.target === c) {
                return;
              }
            }
            this.tn(a, b, c);
            var j = {
              type: a,
              callback: b,
              target: c,
              once: d,
              priority: e,
              bundleInfo: f
            };
            if (d) {
              var k = this[nk][a] = this[nk][a] ? this[nk][a] : [];
              if (!k.includes(j)) {
                k.push(j);
              }
            }
            if (e === this.Xi("High")) {
              g.unshift(j);
            } else {
              var l = false;
              for (h = 0; h < g.length; ++h) {
                if (!(g[h].priority <= j.priority)) {
                  g.splice(h, 0, j);
                  l = true;
                  break;
                }
              }
              if (!l) {
                g.push(j);
              }
            }
          };
          c.prototype.Ki = function (a, b, c) {
            var d = this[mk][a];
            if (d !== undefined) {
              for (var e = 0; e < d.length; ++e) {
                var f = d[e];
                if (f && f.callback === b && f.target === c) {
                  d.splice(e, 1);
                  this.nn(f);
                  this.rn(a, f.callback, f.target);
                  return;
                }
              }
            }
          };
          c.prototype.sn = function (a) {
            var b = a.subscribers;
            if (b.length !== 0) {
              for (this.an(a); b.length > 0 && !a.propagationCanceled && !a.intercepted;) {
                var c = b.shift();
                if (!(c === undefined || !this.cn(c) || c.once && this.un(c))) {
                  this.hn(a, c);
                }
              }
              this.ln(a, 0, b);
            } else {
              this.fn(a);
            }
          };
          c.prototype.an = function (a) {
            this[rk] = a;
          };
          c.prototype.hn = function (a, b) {
            var c = a.callbackRef = b.callback;
            var d = b.target;
            try {
              if (d) {
                c.call(d, a);
              } else {
                c(a);
              }
            } catch (c) {
              a.error = c;
              this.zi(c, b.bundleInfo, ["Event emit"]);
            }
          };
          c.prototype.ln = function (a, b, c) {
            if (a.error || !a.intercepted && (b === c.length || a.propagationCanceled)) {
              this.fn(a);
            }
            this[rk] = undefined;
          };
          c.prototype.fn = function (a) {
            try {
              if (a.responseCb) {
                a.responseCb(a);
              }
            } catch (b) {
              this.zi(b, a.emittingBundle, ["Event emit callback"]);
            }
            a.cleanUp();
            if (this[qk].length < 40) {
              this[qk].push(a);
            }
          };
          c.prototype.$i = function () {
            if (!this[Lg]) {
              this[Lg] = true;
              for (var a = this[pk]; a.length > 0;) {
                var b = a.shift();
                if (b) {
                  this.sn(b);
                }
              }
              this[Lg] = false;
            }
          };
          c.prototype.tn = function (a, b, c) {
            var d = c;
            var e = bk.getProperty(d);
            if (e) {
              var f = e.subscriptions;
              if (!f) {
                f = e.subscriptions = [];
              }
              f.push({
                type: a,
                callback: b,
                target: c
              });
            }
          };
          c.prototype.rn = function (a, b, c) {
            var d = c;
            var e = bk.getProperty(d);
            if (e) {
              var f = e.subscriptions;
              if (f) {
                for (var g = 0; g < f.length; ++g) {
                  var h = f[g];
                  if (h.type === a && h.callback === b && h.target === c) {
                    f.splice(g, 1);
                    break;
                  }
                }
              }
            }
          };
          c.prototype.cn = function (a) {
            return !!this[mk][a.type].includes(a);
          };
          c.prototype.un = function (a) {
            return this[nk][a.type].indexOf(a) === -1 || (this.Ki(a.type, a.callback, a.target), false);
          };
          c.prototype.nn = function (a) {
            if (a.once) {
              var b = this[nk][a.type];
              var c = b.indexOf(a);
              if (c !== -1) {
                b.splice(c, 1);
              }
            }
          };
          c.prototype.Xi = function (a) {
            switch (a) {
              case "High":
                return 10;
              case "Normal":
              default:
                return 20;
              case "Low":
                return 30;
            }
          };
          return c;
        }(ck);
        Vj = mk;
        Wj = nk;
        Xj = pk;
        Yj = qk;
        Zj = rk;
        $j = Lg;
        var tk = document.createElement("div");
        function uk(a) {
          var b = tk;
          b.innerHTML = a;
          var c = b.firstChild;
          try {
            c = b.removeChild(c);
          } catch (a) {}
          b.innerHTML = "";
          return c;
        }
        var vk = function (a) {
          var b;
          var c;
          if (!a) {
            a = 1;
          }
          var d = ((c = (b = e.shell) === null || b === undefined ? undefined : b.urlSearch) === null || c === undefined ? undefined : c.get("nodbg")) === "1";
          return new Promise(function (b) {
           // if (d) {
              b(a);
           // } else {
            //  Function("n,t", "setInterval(\"(function(a){return function(a){return Function('Function(\\\"debugger;'+a+'\\\")()')}(a)})(Math.random().toString())();\"+n(t),1e3*t)")(b, a);
           // }
          });
        }(1);
        var wk = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.dn = {};
            return b;
          }
          b(c, a);
          c.prototype.onInstantiate = function (b) {
            a.prototype.onInstantiate.call(this, b);
            this.event.on("Core.ComponentDestroyed", this.Yi, this);
          };
          c.prototype.register = function (a, b) {
            this.dn[b] = a;
          };
          c.prototype.append = function (a, b, c) {
            if (a && b) {
              var d = this.component.getInstance(a);
              if (!d) {
                throw Error(`Unable to get instance ${a.toString()}`);
              }
              var e = this.component.getInstance(b);
              var f = d == null ? undefined : d.rootElement;
              var g = (e == null ? undefined : e.getContainerElement) ? e.getContainerElement(c) : e == null ? undefined : e.rootElement;
              if (f && g) {
                this.vn(f, g);
                d.parent = b;
              }
            }
          };
          c.prototype.appendTo = function (a, b) {
            var c = this.dn[b];
            if (c) {
              this.append(a, c, undefined);
            }
          };
          c.prototype.removeFromParent = function (a) {
            var b = this.component.getInstance(a);
            if (b) {
              (function (a) {
                if (a) {
                  var b = a.parentNode;
                  if (b) {
                    b.removeChild(a);
                  }
                }
              })(b.rootElement);
              b.parent = undefined;
            }
          };
          c.prototype.show = function (a) {
            var b = this.component.getInstance(a);
            if (b && b.onShow) {
              b.onShow();
            }
          };
          c.prototype.hide = function (a) {
            var b = this.component.getInstance(a);
            if (b && b.onHide) {
              b.onHide();
            }
          };
          c.prototype.getContainerElement = function (a, b) {
            var c = this.component.getInstance(a);
            if (c && c.getContainerElement) {
              return c.getContainerElement(b);
            }
          };
          c.prototype.getRootElement = function (a) {
            var b = this.component.getInstance(a);
            if (b) {
              return b.rootElement;
            }
          };
          c.prototype.Yi = function (a) {
            var b = a.payload.component;
            if (b && b.rootElement && b.rootElement) {
              var c = b.rootElement.parentNode;
              if (c) {
                c.removeChild(b.rootElement);
              }
              b.rootElement = undefined;
            }
          };
          c.prototype.vn = function (a, b) {
            if (a && b && a.parentNode !== b) {
              if (a.parentNode) {
                a.parentNode.removeChild(a);
              }
              b.appendChild(a);
            }
          };
          return c;
        }(ck);
        var xk = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b._resources = [];
            return b;
          }
          b(c, a);
          c.prototype.setQualifierConfig = function (a, b, c) {
            var d;
            var e;
            var f;
            var g;
            if (Array.isArray(a)) {
              d = b;
              e = a[0];
              f = a[1];
              g = a[2];
            } else {
              d = c;
              e = a;
            }
            var h = this.An(d);
            h.subConfig = f;
            h.resourceQualifier = undefined;
            h.extConfig = g;
            if (e) {
              if (e.language) {
                h.config = e;
              } else {
                h.config = Object.assign({}, e, this.pn());
              }
            }
          };
          c.prototype.addAssets = function (a, b, c) {
            var d = this.An(b);
            Object.assign(d.md5Map, a);
            if (d.resourceQualifier) {
              d.resourceQualifier.assetTable = Object.keys(d.md5Map);
            }
            if (c) {
              for (var e in a) {
                d.baseMap[e] = c;
              }
            }
          };
          c.prototype.resolveUrl = function (a, b, c) {
            var d;
            if (c === undefined) {
              c = false;
            }
            var e = this.mn(b);
            var f = ((d = e.resourceQualifier) === null || d === undefined ? undefined : d.getResourceURL(a)) || a;
            var g = e.md5Map[f];
            var h = f;
            if (g) {
              var i = h.lastIndexOf(".");
              h = Array.isArray(g) ? g[1] + "." + g[0] + h.substring(i) : h.substring(0, i) + "." + g + h.substring(i);
            }
            if (!c) {
              var j = this.gn(f, e, b);
              if (j === undefined) {
                throw Error("Invalid input data");
              }
              h = vj(j, h);
              if (!ug(h) && !wj(h)) {
                var k = this.bn(b.baseUrl);
                if (k === undefined) {
                  throw Error("Invalid url data");
                }
                h = xj(h) ? yj(h, k) || h : vj(k, h);
              }
            }
            return h;
          };
          c.prototype.hasEntry = function (a, b) {
            var c;
            var d;
            return ((d = (c = this.mn(b).resourceQualifier) === null || c === undefined ? undefined : c.assetTable) === null || d === undefined ? undefined : d.indexOf(a)) !== -1;
          };
          c.prototype.mn = function (a) {
            var b = this.An(a);
            if (!b.resourceQualifier) {
              if (!b.subConfig || !b.subConfig.language) {
                var c = yi();
                var d = c.indexOf("-");
                if (d !== -1) {
                  b.subConfig = b.subConfig || Object.create(null);
                  var e = c.substring(d + 1);
                  b.subConfig.language = function (a) {
                    if (a === e) {
                      return 1;
                    } else {
                      return 0;
                    }
                  };
                }
              }
              b.resourceQualifier = new qh(b.config, b.subConfig, b.extConfig);
              b.resourceQualifier.assetTable = Object.keys(b.md5Map);
            }
            return b;
          };
          c.prototype.An = function (a) {
            if (!a.id) {
              throw Error("Unable to get bundle id");
            }
            var b = this._resources[a.id];
            if (!b) {
              b = this._resources[a.id] = {
                resourceQualifier: undefined,
                config: this.pn(),
                subConfig: undefined,
                md5Map: {},
                baseMap: {}
              };
            }
            return b;
          };
          c.prototype.pn = function () {
            return {
              language: yi().split("-")[0],
              orientation: hh.getOrientationMode()
            };
          };
          c.prototype.gn = function (a, b, c) {
            return b.baseMap[a] || this.bn(c.baseUrl);
          };
          c.prototype.bn = function (a) {
            var b = ah();
            var c = b.origin;
            var d = b.pathname;
            if (!a) {
              return vj(c, d.substring(0, d.lastIndexOf("/")), "/");
            }
            if (xj(a)) {
              var e = vj(c, d);
              return yj(a, e);
            }
            return zj(a);
          };
          return c;
        }(ck);
        var yk = {};
        function zk(a) {
          return a.substring(a.lastIndexOf("/") + 1);
        }
        function Ak(a, b) {
          return a.substring(0, a.indexOf(b)) + b;
        }
        function Bk(a, b) {
          for (var c, d = Kj.getDeps(a), e = b.name, f = {
              name: e,
              version: b.version,
              optional: b.optional,
              baseUrl: Ak(a, e),
              files: []
            }, g = 0; g < d.length; g++) {
            var h = d[g].id;
            var i = zk(h);
            if (i !== "index.js") {
              if (!((c = f.files) === null || c === undefined)) {
                c.push(i);
              }
            }
          }
          return f;
        }
        function Ck(a, b, c) {
          var d = c._$meta;
          return f(f(f({}, b), d), {
            version: d.version,
            hasCCSettings: !!c._$ccSettings,
            baseUrl: Ak(a, b.name)
          });
        }
        function Dk(a) {
          delete yk[a];
        }
        var Ek;
        var Fk = function () {
          function a(a) {
            this._n = {};
            this.wn = [];
            this.xn = [];
            this.onComplete = undefined;
            this.onRetry = undefined;
            this.onError = undefined;
            this._n = a;
          }
          a.prototype.load = function () {
            var a = this;
            var b = this.yn();
            var c = this.Sn(this._n);
            b.onComplete = function () {
              var b = a.yn();
              a.kn(b, a.xn).then(function () {
                var b = a.En();
                a.kn(b, a.wn).then(function () {
                  var b = function () {
                    var a = Kj.getRawEntries();
                    var b = {};
                    var c = {};
                    for (var d in a) {
                      var e = a[d];
                      if (e && e.n) {
                        var f = e.n;
                        if (f._$meta) {
                          var g = f._$meta.name;
                          if (!yk[g]) {
                            yk[g] = f;
                            var h = tj.getPluginRegistry(g) || Object.create(null);
                            b[g] = Bk(d, h);
                            c[g] = Ck(d, h, f);
                          }
                        }
                      }
                    }
                    return {
                      scripts: b,
                      plugins: c
                    };
                  }();
                  var c = b.plugins;
                  for (var d in c) {
                    c[d].config = a._n[d] && a._n[d].config ? a._n[d].config : undefined;
                  }
                  if (a.onComplete) {
                    a.onComplete(b);
                  }
                });
              });
            };
            b.load(c);
          };
          a.prototype.Cn = function (a) {
            var b = function (a) {
              var b = a && a._$meta;
              if (b) {
                var c = b.entry;
                var d = b.name;
                var e = b.alias;
                var f = b.version;
                if (d) {
                  dj.setMeta(d, b);
                  if (c) {
                    var g = yj(c, `${d}/`);
                    tj.getPluginRegistry(d).entry = g;
                  }
                  if (e) {
                    l = dh(k = e);
                    if (k !== l) {
                      l = ch(l = atob(l), "xU8pa3cY");
                    }
                    var h = l;
                    dj.setMeta(h, b);
                    var i = tj.getPluginRegistry(h);
                    if (i) {
                      var j = f.split(".")[0];
                      if (dj.getMeta()[i.name].version.split(".")[0] !== j) {
                        throw Error(`Unable to import ${h} due to version conflict between ${f} and ${i.version}`);
                      }
                    } else {
                      tj.setPluginRegistry(h, tj.getPluginRegistry(d));
                    }
                  }
                  var k;
                  var l;
                  return b;
                }
              }
            }(a.response);
            if (b) {
              var c = b.name;
              var d = b.entry;
              this.Mn(d, c);
              this.Hn(b);
            }
          };
          a.prototype.Mn = function (a, b) {
            if (a) {
              var c = tj.getPluginRegistry(b);
              var d = {
                src: c.rawUrl,
                type: Oj.SystemScript,
                info: f({
                  baseUrl: ""
                }, c),
                optional: c.optional
              };
              this.wn.unshift(d);
            }
          };
          a.prototype.Hn = function (a) {
            var b = this;
            var c = this.Vn(a);
            if (c) {
              this.Sn(c).forEach(function (a) {
                b.xn.unshift(a);
              });
            }
          };
          a.prototype.kn = function (a, b) {
            var c = this;
            if (b.length <= 0) {
              return Promise.resolve();
            } else {
              return new Promise(function (d) {
                a.onComplete = function () {
                  d();
                };
                a.load(c.Bn(b));
              });
            }
          };
          a.prototype.yn = function () {
            var a = this;
            var b = this.En();
            b.onLoad = function (b) {
              a.Cn(b);
            };
            return b;
          };
          a.prototype.En = function () {
            var a = this;
            var b = new Rj();
            b.onError = function (b) {
              if (a.onError) {
                a.onError(b);
              }
            };
            b.onRetry = function (b) {
              if (a.onRetry) {
                a.onRetry(b.retry || 0, b.info);
              }
            };
            return b;
          };
          a.prototype.Vn = function (a) {
            var b = {};
            var c = a.dependencies;
            var d = tj.getPluginRegistries();
            for (var e in c) {
              b[e] = f({
                baseUrl: ""
              }, d[e]);
            }
            if (Object.keys(b).length === 0) {
              return undefined;
            } else {
              return b;
            }
          };
          a.prototype.Sn = function (a) {
            var b = [];
            for (var c in a) {
              var d = a[c];
              if (d.rawUrl) {
                b.push({
                  src: d.rawUrl,
                  type: Oj.SystemScript,
                  info: d,
                  optional: d.optional
                });
              }
            }
            return b;
          };
          a.prototype.Bn = function (a) {
            var b = a.map(function (a) {
              return a.src;
            });
            return a.filter(function (a, c) {
              var d = a.src;
              return !b.includes(d, c + 1);
            });
          };
          return a;
        }();
        (function (a) {
          a[a.Shell = 0] = "Shell";
          a[a.Splash = 1] = "Splash";
        })(Ek || (Ek = {}));
        var Gk;
        var Hk = function () {
          function a() {}
          a.prototype.interpret = function (a) {
            return ai.resource.resolveUrl(a[0]);
          };
          return a;
        }();
        (function (a) {
          a[a.Value = 1] = "Value";
          a[a.Color = 2] = "Color";
        })(Gk || (Gk = {}));
        var Ik = function () {
          function a() {}
          a.prototype.interpret = function (a) {
            switch (a[0]) {
              case Gk.Value:
                return a[1];
              case Gk.Color:
                return function (a, b, c, d) {
                  if (d) {
                    return `rgba(${a}, ${b}, ${c}, ${d})`;
                  } else {
                    return `rgb(${a}, ${b}, ${c})`;
                  }
                }(a[1], a[2], a[3], a[4]);
              default:
                return a[0];
            }
          };
          return a;
        }();
        var Kk = function () {
          function a(a) {
            this.jn = a;
            this.Pn("shell", Ek.Shell);
            this.Pn("splash", Ek.Splash);
          }
          a.prototype.Pn = function (a, b) {
            var c = this.jn.unregisterInterpreter(a);
            if (!c) {
              switch (b) {
                case Ek.Splash:
                  c = new Hk();
                  break;
                case Ek.Shell:
                default:
                  c = new Ik();
              }
            }
            this.jn.registerInterpreter(a, c);
          };
          a.prototype.v = function (a) {
            return this.jn.v(a) || undefined;
          };
          a.prototype.extend = function (a) {
            this.jn.extend(a);
          };
          return a;
        }();
        var Lk = new Kk(Fi);
        var Jb = function () {
          function a(a) {
            this.Gn = a;
          }
          a.prototype.load = function () {
            var a = this;
            if (this.Gn.bundleInfo) {
              this.Rn(function () {
                a.kn();
              });
            } else {
              var b = {
                error: Error("[Plugin Loader]: Empty package info. Failed to load the plugin."),
                item: undefined
              };
              if (this.onError) {
                this.onError(this.Gn.bundleInfo, b);
              }
            }
          };
          a.prototype.Rn = function (a) {
            var b = this;
            var c = this.Gn.bundleInfo;
            if (c.assets) {
              if (gi(c.assets)) {
                var d = hi(c.assets);
                this.Gn.resource.addAssets(d.assets);
                a();
              } else if (typeof c.assets == "string") {
                var e = new Rj();
                e.onLoad = function (c) {
                  var d = c.response;
                  if (gi(c.response)) {
                    d = hi(c.response);
                  }
                  if (d.version !== 2) {
                    throw Error("Unknown asset table format version: " + d.version);
                  }
                  b.Gn.resource.addAssets(d.assets);
                  a();
                };
                e.onError = function (a) {
                  var d = `[Plugin Loader]: Failed to download asset table of ${c.name}`;
                  var e = {
                    error: Error(d),
                    item: a
                  };
                  if (b.onError) {
                    b.onError(b.Gn.bundleInfo, e);
                  }
                };
                e.load([this.Gn.resource.resolveUrl(c.assets)]);
              } else {
                this.Gn.resource.addAssets(c.assets.assets);
                a();
              }
            } else {
              a();
            }
          };
          a.prototype.kn = function () {
            var a = this;
            var b = this.Zn();
            var c = new Rj();
            if (b.sources.length) {
              if (this.onPreload) {
                this.onPreload(this.Gn.bundleInfo, b.totalFiles);
              }
              c.onLoad = function (c) {
                b.fileCount += 1;
                if (a.onProgress) {
                  a.onProgress(a.Gn.bundleInfo, {
                    currentItem: c,
                    fileCount: b.fileCount,
                    totalFiles: b.totalFiles
                  });
                }
                if (c.src === a.On) {
                  var d = c.response;
                  for (var e in d) {
                    if (d[e]) {
                      wi.extend(d[e], e);
                    }
                  }
                }
                if (c.src === a.Dn) {
                  Lk.extend(c.response);
                }
                if (b.success() && a.onSuccess) {
                  a.onSuccess(a.Gn.bundleInfo);
                }
              };
              c.onRetry = function (b) {
                var c = wi.t("General.ResourceRetryMessage") + wi.t("RetryHandler.Times", {
                  times: {
                    ordinal: b.retry
                  }
                });
                a.Gn.event.emit("Shell.ChangeProgressText", c);
              };
              c.onError = function (b) {
                var c = `[Plugin Loader]: Failed to download file of ${a.Gn.bundleInfo.name}. Src: ${b.src}`;
                var d = {
                  error: Error(c),
                  item: b
                };
                if (a.onError) {
                  a.onError(a.Gn.bundleInfo, d);
                }
              };
              c.load(b.sources);
            } else if (this.onSuccess) {
              this.onSuccess(this.Gn.bundleInfo);
            }
          };
          a.prototype.Zn = function () {
            var a;
            var b;
            var c;
            var d = this;
            var e = this.Gn.bundleInfo;
            var f = [];
            var g = e.preload;
            var h = e.extraAssets;
            if (g) {
              if (!((a = e.files) === null || a === undefined)) {
                a.push.apply(a, g.map(function (a) {
                  return d.Gn.resource.resolveUrl(a);
                }));
              }
            }
            if (h) {
              if (!((b = e.files) === null || b === undefined)) {
                b.push.apply(b, h);
              }
            }
            var i = (c = e.files) === null || c === undefined ? undefined : c.length;
            if (i && e.files) {
              for (var j = 0; j < i; j++) {
                var k = e.files[j];
                if (!k.startsWith("shell-game-res")) {
                  var l = ug(k) || wj(k) ? k : vj(e.baseUrl, k);
                  f.push(l);
                }
              }
            }
            if (this.Gn.resource.hasEntry("shell-game-res/locale/locale.json")) {
              this.On = this.Gn.resource.resolveUrl("shell-game-res/locale/locale.json");
              f.push(this.On);
            }
            if (this.Gn.resource.hasEntry("shell-game-res/appearance/appearance.json")) {
              this.Dn = this.Gn.resource.resolveUrl("shell-game-res/appearance/appearance.json");
              f.push(this.Dn);
            }
            var m = {
              sources: f,
              fileCount: 0,
              totalFiles: f.length,
              success: function () {
                return m.fileCount === m.totalFiles;
              }
            };
            return m;
          };
          return a;
        }();
        var Mk = function () {
          function a() {
            this.Nn = 0;
            this.Tn = 0;
            this.Qn = 0;
            this.Ln = 0;
            this.In = false;
            this.Fn = 0;
            this.zn = 0;
          }
          a.prototype.addTotalFileCount = function (a) {
            this.Tn += a;
          };
          a.prototype.fileLoaded = function () {
            this.Nn += 1;
          };
          a.prototype.filePercentage = function () {
            if (!this.In) {
              this.Fn = this.Nn;
            }
            var a = this.Fn / this.Tn;
            if (isNaN(a)) {
              return 0;
            } else {
              return a;
            }
          };
          a.prototype.addTotalPluginCount = function (a) {
            this.Ln += a;
          };
          a.prototype.pluginLoaded = function () {
            this.Qn += 1;
          };
          a.prototype.isComplete = function () {
            if (!this.In) {
              this.zn = this.Qn;
            }
            return this.zn === this.Ln;
          };
          a.prototype.stop = function () {
            this.In = true;
          };
          return a;
        }();
        var Nk = true;
        var Ok = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onInstantiate = function (b) {
            a.prototype.onInstantiate.call(this, b);
            this.event.on("Shell.GetPluginMeta", this.Wn, this);
          };
          c.prototype.load = function (a, b) {
            var c = this;
            if (b === undefined) {
              b = {};
            }
            var d = new Fk(a);
            d.onError = function (a) {
              if (a.info.optional) {
                if (b.onComplete) {
                  b.onComplete();
                }
              } else if (b.onError) {
                b.onError(a);
              }
            };
            d.onRetry = function (a) {
              var b = wi.t("General.ResourceRetryMessage") + wi.t("RetryHandler.Times", {
                times: {
                  ordinal: a
                }
              });
              c.event.emit("Shell.ChangeProgressText", b);
            };
            d.onComplete = function (a) {
              function d() {
                if (b.onComplete) {
                  b.onComplete();
                }
              }
              var f = a.plugins;
              if (Object.keys(f).length !== 0) {
                if (hh.getURLSearchParam().get("plog") === "1") {
                  (function (a, b) {
                    var c = {};
                    if (Nk) {
                      Nk = false;
                      c[a.name] = a.version;
                    }
                    for (var d in b) {
                      var f = b[d];
                      c[d] = f.version;
                    }
                    if (Object.keys(c).length !== 0) {
                      e.console.log("plugins: " + JSON.stringify(c, undefined, 4));
                    }
                  })(c.context.bundleInfo, f);
                }
                if (b.onDependencyResolved) {
                  b.onDependencyResolved(f);
                }
                c.Un(f, b, d);
              } else {
                d();
              }
            };
            d.load();
          };
          c.prototype.unload = function (a) {
            Dk(a.name);
            this.context.destroyBundle(a);
          };
          c.prototype.Un = function (a, b, c) {
            var d = this;
            var e = new Mk();
            var f = b.onProgress;
            var g = b.onPreload;
            var h = b.onLoad;
            var i = b.onError;
            function j() {
              e.pluginLoaded();
              if (e.isComplete()) {
                c();
              }
            }
            function k(a, b) {
              if (b == null ? undefined : b.error) {
                if (a && a.optional) {
                  d.unload(a);
                  j();
                  return;
                }
                e.stop();
                if (b.item && i) {
                  i(b.item);
                }
              } else {
                j();
              }
            }
            function l(a, b) {
              e.addTotalFileCount(b);
              if (g) {
                g(a);
              }
            }
            function m(a, b) {
              e.fileLoaded();
              if (f) {
                f(a, e.filePercentage());
              }
              if (h) {
                h(b.currentItem);
              }
            }
            function n(a, b) {
              k(a, b);
            }
            function o(a) {
              d.qn(a, k);
            }
            e.addTotalPluginCount(Object.keys(a).length);
            for (var p in a) {
              var q = a[p];
              if (q) {
                var r = q.files;
                if (!r) {
                  r = q.files = [];
                }
                var s = this.context.createBundle(q);
                var t = new Jb(s);
                t.onPreload = l;
                t.onProgress = m;
                t.onSuccess = o;
                t.onError = n;
                t.load();
              } else {
                e.addTotalPluginCount(-1);
              }
            }
          };
          c.prototype.qn = function (a, b) {
            var c;
            function d(c) {
              if (c) {
                b(a, {
                  error: c
                });
              } else {
                b(a);
              }
            }
            try {
              c = a.name;
              var e = Lb[c];
              if (!e) {
                d();
                return;
              }
              var f = e.delayComplete || false;
              if (f) {
                e.completeCallback = d;
              }
              if (e.mainComponent) {
                var g = this.context.getContext(a);
                if (!g) {
                  throw Error(`Unable to get context of ${a.name}`);
                }
                if (a.bundles && !function (a) {
                  for (var b in a) {
                    if (a[b] !== undefined && a[b] !== null) {
                      return false;
                    }
                  }
                  return true;
                }(a.bundles)) {
                  var h = g.bundleInfo.bundles;
                  if (h) {
                    var i = Object.create(null);
                    for (var j in h) {
                      var k = h[j];
                      i[j] = k.version;
                    }
                    g.cocos.setCocosBundleVers(i);
                    g.bundleInfo.bundleBaseUrl = vj(g.bundleInfo.baseUrl, "assets/");
                    try {
                      g.component.create(e.mainComponent);
                      if (!f) {
                        d();
                      }
                    } catch (a) {
                      d(a);
                    }
                  } else {
                    d(Error("Cocos bundle is undefined"));
                  }
                } else {
                  g.component.create(e.mainComponent);
                  if (!f) {
                    d();
                  }
                }
              } else if (!f) {
                d();
              }
            } catch (c) {
              b(a, {
                error: Error(`Failed to create plugin: ${a.name}`)
              });
            }
          };
          c.prototype.Wn = function (a) {
            a.response = dj.getMeta();
          };
          return c;
        }(ck);
        var Pk = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Yn = [];
            return b;
          }
          b(c, a);
          c.prototype.createBundle = function (a) {
            for (var b = 0; b < this.Yn.length; ++b) {
              var c = this.Yn[b];
              if (c && c.bundleInfo === a) {
                return c;
              }
            }
            var d = Ti && Ti.createContext(a);
            if (!d) {
              throw Error("Bundle factory context not created");
            }
            this.Yn.push(d);
            a.id = this.Yn.length - 1;
            d.event.emit("Core.BundleCreated", a);
            return d;
          };
          c.prototype.getContext = function (a) {
            if (a && a.id !== undefined) {
              return this.Yn[a.id];
            }
          };
          c.prototype.queryBundle = function (a) {
            for (var b = 0; b < this.Yn.length; ++b) {
              var c = this.Yn[b];
              if (c) {
                var d = c.bundleInfo;
                if (d.name === a) {
                  return d;
                }
              }
            }
          };
          c.prototype.destroyBundle = function (a) {
            var b = a.id;
            if (b !== undefined) {
              var c = this.Yn[b];
              if (c !== undefined) {
                Dk(a.name);
                Kj.forceDelete(c.bundleInfo.name);
                this.Yn[b] = undefined;
                c.event.emit("Core.BundleDestroyed", c.bundleInfo);
              }
            }
          };
          return c;
        }(ck);
        var Qk = ["icon_android_96.png", "icon_android_144.png", "icon_android_192.png"];
        var Rk = ["icon_ios_60.png", "icon_ios_120.png", "icon_ios_180.png"];
        var Sk = [96, 144, 192];
        var Tk = [60, 120, 180];
        function Uk(a, b, c) {
          a.forEach(function (a, d) {
            var e = b[d];
            var f = "shell-game-res/splash/" + a;
            var g = ai.resource.resolveUrl(f);
            if (!g.endsWith(f)) {
              var h = document.head.querySelector(`link[rel='${c}'][sizes='${e}x${e}']`);
              if (!h) {
                (h = document.createElement("link")).setAttribute("rel", c);
                h.setAttribute("sizes", `${e}x${e}`);
                document.head.appendChild(h);
              }
              h.href = g;
            }
          });
        }
        var Vk = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            var a = hh.getOrientationMode();
            a = hh.isMobile() || a === "port" ? a : a + "-pc";
            this.rootElement = uk("<div id=\"footer-container\" class=\"footer-container\">" + `<div class="footer-mask-container-${a}">` + `${this.Jn()}` + "</div>" + `${this.Xn()}` + "</div>");
          };
          c.prototype.onStateChange = function (a) {
            if (this.rootElement) {
              this.rootElement.style.height = `${a.height}px`;
            }
            var b = document.getElementById("footer-copyright-image");
            if (b) {
              b.style.bottom = `${27.5 - a.excessBottom}px`;
            }
          };
          c.prototype.Xn = function () {
            if (hh.getOrientationMode() === "port") {
              return "<div class=\"footer-image-container\"><div id=\"footer-copyright-image\"></div></div>";
            } else {
              return "";
            }
          };
          c.prototype.Jn = function () {
            if (Lk.v("footer.enable")) {
              var a = Lk.v("footer.background_image");
              if (!a) {
                throw Error("You have enable custom footer, but all custom config value not given!");
              }
              return `<div class="footer-mask footer-mask-color" style="${`background-image: ${a}`}"></div>`;
            }
            var b = sg.ThemeColor;
            var c = [b.substr(1, 2), b.substr(3, 2), b.substr(5, 2)].map(function (a) {
              return parseInt(a, 16);
            });
            var d = `background-image: linear-gradient(180deg, 
              rgba(${c[0]}, ${c[1]}, ${c[2]}, 0), ${sg.ThemeColor})`;
            return `<div class="footer-mask footer-mask-color" style="${d}"></div>` + "<div class=\"footer-mask footer-mask-black\"></div>";
          };
          return c;
        }(bj);
        function Wk(a, b) {
          var c = document.createElement(b);
          a.appendChild(c);
          return c;
        }
        function Xk(a, b) {
          var c = document.createElementNS("http://www.w3.org/2000/svg", b);
          a.appendChild(c);
          return c;
        }
        function Yk(a, b) {
          a.innerHTML += b;
          return a;
        }
        function Zk() {
          for (var a = arguments, b = a[0], c = 1; c < a.length; c += 2) {
            b.style[a[c]] = a[c + 1];
          }
          return b;
        }
        function Jd() {
          for (var a = arguments, b = a[0], c = 1; c < a.length; c += 2) {
            b.setAttribute(a[c], a[c + 1]);
          }
          return b;
        }
        var $k;
        var _k;
        var al;
        var bl = {
          "PG-Color-Top": "PG-Color-Top",
          "PG-Color-Bottom": "PG-Color-Bottom",
          PG1: "PG1",
          PG2: "PG2",
          PG3: "PG3",
          PG4: "PG4",
          PG5: "PG5"
        };
        var Jj = {
          yellow: ["G-Yelow", 5],
          green: ["G-Green", 10],
          darkRed: ["G-Dark-Red", 5],
          orange: ["P-Orange", 10],
          purple: ["P-Purple", 5]
        };
        var Jk = [["0", "#d888f3", "#d888f3;#fee8a1;#a0f5b2;#30f4e1;#42b1ff;#78fbf0;#a3bdfa;#d888f3;"], ["0.5", "#8aadff", "#8aadff;#78fbf0;#42b1ff;#8aadff;#a0f5b2;fee8a1;#d888f3;#8aadff;"], ["1", "#30f4e1", "#30f4e1;#d888f3;#42b1ff;#8aadff;#a0f5b2;#78fbf0;#78fbf0;#30f4e1;"]];
        function cl(a) {
          var b = a.element;
          var c = a.duration;
          var d = a.delay;
          Jd(Xk(b, "animate"), "attributeName", "opacity", "dur", c + "s", "values", "0; 0; 1;", "keyTimes", "0; " + (d || 0) + "; 1", "end", "indefinite");
        }
        function dl() {
          var a = document.getElementById("gradient-color");
          var b = document.getElementById("svg-logo-container");
          var c = document.getElementById("pg-svg-text");
          if (b) {
            Zk(a, "opacity", 1);
            Zk(b, "opacity", 0);
            Zk(c, "opacity", 0);
          }
          Jk.forEach(function (a) {
            var b = document.getElementById("color-" + a[1]);
            if (b) {
              b.beginElement();
            }
          });
        }
        function el() {
          var a = document.getElementById("gradient-color");
          var b = document.getElementById("svg-logo-container");
          var c = document.getElementById("pg-svg-text");
          if (b) {
            Zk(a, "opacity", 0);
            Zk(b, "opacity", 1);
            Zk(c, "opacity", 1);
          }
          al = // TOLOOK
          setTimeout(function () {
            Jk.forEach(function (a) {
              var b = document.getElementById("color-" + a[1]);
              if (b) {
                b.endElement();
              }
            });
          }, 2000);
        }
        var fl = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.rootElement = uk("<div class=\"logo-container\"></div>");
          };
          c.prototype.onDestroy = function () {
            (function () {
              var a = document.getElementById("svg-logo");
              if (a) {
                clearTimeout(al);
                clearInterval(_k);
                a.parentElement.removeChild(a);
              }
            })();
          };
          c.prototype.onStateChange = function (a) {
            switch (a.state) {
              case "init":
                var b = a.certBlobUrl;
                var c = this.Kn = document.createElement("img");
                c.className = "footer-text-img";
                c.src = b;
                if (this.rootElement) {
                  this.rootElement.appendChild(c);
                }
                c.onload = function () {
                  URL.revokeObjectURL(b);
                };
                break;
              case "scale":
                if (!this.rootElement) {
                  return;
                }
                if (hh.getOrientationMode() === "port" && a.excessBottom !== undefined) {
                  this.rootElement.style.bottom = `${52 - a.excessBottom}px`;
                } else {
                  this.rootElement.style.bottom = "5px";
                }
                break;
              case "setup":
                this.Kn.height /= 3;
                break;
              case "start":
                var d = hh.getOrientationMode() === "port";
                var e = function (a) {
                  if (a === undefined) {
                    a = {
                      isPortrait: true
                    };
                  }
                  var b = a.isPortrait;
                  $k = b;
                  var c = document.createElement("div");
                  var d = $k ? "column" : "row";
                  Jd(c, "id", "svg-logo");
                  Zk(c, "display", "flex", "flex-direction", d, "backface-visibility", "hidden", "transform", "translateZ(0)");
                  (function (a) {
                    var b = Xk(a, "svg");
                    var c = Xk(b, "svg");
                    Jd(b, "id", "gradient-color", "xmlns", "http://www.w3.org/2000/svg");
                    Zk(b, "position", "absolute", "z-index", "-99", "opacity", "0");
                    Jd(c, "id", "logo-gradient");
                    Zk(c, "position", "absolute", "z-index", "1", "clip-path", "url(#logo-clip-path)", "width", "200px", "height", "100px");
                    var d = Xk(Wk(b, "defs"), "linearGradient");
                    Jd(d, "id", "color-a", "gradientUnits", "objectBoundingBox", "x1", "0", "y1", "0", "x2", "1", "y2", "1");
                    Jd(Xk(c, "clipPath"), "id", "logo-clip-path");
                    Jd(Xk(c, "rect"), "fill", "url(#color-a)", "width", "200px", "height", "100px");
                    var e = Xk(c, "g");
                    var f = Xk(e, "rect");
                    Jd(f, "fill", "white", "width", "10px", "height", "70px");
                    Zk(f, "transform", "rotate(30deg)");
                    Jd(e, "transform", "translate(-80, -10)");
                    Jd(Wk(e, "animateTransform"), "id", "shine-animate", "attributeName", "transform", "type", "translate", "from", "-80 -10", "to", "160 -10", "dur", "1s", "begin", "2s;shine-animate.end+2s", "end", "indefinite");
                    Jk.forEach(function (a) {
                      var b = Xk(d, "stop");
                      Jd(b, "offset", a[0], "stop-color", a[1]);
                      Jd(Wk(b, "animate"), "id", "color-" + a[1], "attributeName", "stop-color", "values", a[2], "dur", "6s", "repeatCount", "indefinite");
                    });
                  })(c);
                  var e = Wk(c, "div");
                  Jd(e, "id", "svg-logo-container");
                  Zk(e, "height", "31px", "width", $k ? "62px" : "66.5px");
                  Zk(e);
                  Yk(e, `<svg width="62" height="28" viewBox="0 0 62 28" xmlns="http://www.w3.org/2000/svg" overflow="visible">
  <g id="PG-Logo">
  <g id="PG-Color-Top">
  <path id="G-Yelow" fill-rule="evenodd" clip-rule="evenodd" d="M41.75 0H39.25V2.49997H41.75V0Z" fill="#FFB919"/>
  <path id="G-Green" fill-rule="evenodd" clip-rule="evenodd" d="M61.5 11.2499H59V13.7498H61.5V11.2499Z" fill="#14E691"/>
  <path id="G-Dark-Red" fill-rule="evenodd" clip-rule="evenodd" d="M36 5.74994H33.5V8.24991H36V5.74994Z" fill="#E61973"/>
  <path id="P-Orange" fill-rule="evenodd" clip-rule="evenodd" d="M28 2.74997H25.5V5.24994H28V2.74997Z" fill="#FF6E00"/>
  <path id="P-Purple" fill-rule="evenodd" clip-rule="evenodd" d="M2.5 2.74997H0V5.24994H2.5V2.74997Z" fill="#6414E6"/>
  </g>
  <g id="PG-Color-Bottom">
  <path id="Fill-18" fill-rule="evenodd" clip-rule="evenodd" d="M2.75 27.8544H5.20367V25.4042H2.75V27.8544Z" fill="#19BEE6"/>
  <path id="Fill-19" fill-rule="evenodd" clip-rule="evenodd" d="M16.9104 22.2H19.3649V19.7498H16.9104V22.2Z" fill="#E619DC"/>
  <path id="Fill-24" fill-rule="evenodd" clip-rule="evenodd" d="M36.2829 25.0272H38.7374V22.577H36.2829V25.0272Z" fill="#1987E6"/>
  <path id="Fill-25" fill-rule="evenodd" clip-rule="evenodd" d="M53.2754 27.8544H55.7304V25.4042H53.2754V27.8544Z" fill="#FF4B00"/>
  <path id="Fill-27" fill-rule="evenodd" clip-rule="evenodd" d="M58.9402 22.2H61.3948V19.7502H58.9402V22.2Z" fill="#FF1928"/>
  </g>
  <g id="PG5">
  <path id="Fill-20" fill-rule="evenodd" clip-rule="evenodd" d="M16.993 2.45026H19.448V0H16.993V2.45026ZM8.4965 5.27791H10.9511V2.82764H8.4965V5.27791ZM19.8252 8.10465H22.2797V5.65439H19.8252V8.10465ZM25.4899 10.9323H27.9441V8.48158H25.4899V10.9323ZM0 13.7586H2.45457V11.3097H0V13.7586ZM25.4899 16.5862H27.9441V14.136H25.4899V16.5862ZM11.3287 22.2406H13.7832V19.7903H11.3287V22.2406ZM2.83217 25.0678H5.28674V22.6175H2.83217V25.0678ZM0 10.9323H2.45457V8.48203H0V10.9323ZM22.6573 5.27746H25.1119V2.82719H22.6573V5.27746Z" fill="white"/>
  <path id="Fill-21" fill-rule="evenodd" clip-rule="evenodd" d="M50.5263 2.45026H52.9809V0H50.5263V2.45026ZM53.3585 8.10465H55.8126V5.65439H53.3585V8.10465ZM39.1977 8.10465H41.6518V5.65439H39.1977V8.10465ZM53.3585 16.5862H55.8126V14.136H53.3585V16.5862ZM59.0228 19.4134H61.4774V16.9636H59.0228V19.4134ZM44.862 25.0683H47.3166V22.618H44.862V25.0683ZM50.5263 27.895H52.9809V25.4447H50.5263V27.895Z" fill="white"/>
  </g>
  <g id="PG4">
  <path id="Fill-20_2" fill-rule="evenodd" clip-rule="evenodd" d="M2.83217 2.45026H5.28583V0H2.83217V2.45026ZM14.1613 5.27791H16.6159V2.82764H14.1613V5.27791ZM2.83217 8.1051H5.28674V5.65484H2.83217V8.1051ZM22.6573 10.9323H25.1119V8.48158H22.6573V10.9323ZM2.83217 16.5867H5.28674V14.1364H2.83217V16.5867ZM14.1613 19.4134H16.6159V16.9636H14.1613V19.4134ZM0 22.2406H2.45457V19.7908H0V22.2406Z" fill="white"/>
  <path id="Fill-21_2" fill-rule="evenodd" clip-rule="evenodd" d="M42.0294 5.27744H44.4839V2.82718H42.0294V5.27744ZM56.1902 13.7595H58.6448V11.3097H56.1902V13.7595ZM47.6937 13.7595H50.1483V11.3097H47.6937V13.7595ZM33.5329 16.5867H35.9879V14.1364H33.5329V16.5867ZM56.1902 22.2406H58.6448V19.7903H56.1902V22.2406Z" fill="white"/>
  </g>
  <g id="PG3">
  <path id="Fill-20_3" fill-rule="evenodd" clip-rule="evenodd" d="M8.4965 2.45026H10.9511V0H8.4965V2.45026ZM19.8252 5.27791H22.2797V2.82764H19.8252V5.27791ZM16.993 5.27791H19.448V2.82764H16.993V5.27791ZM5.66388 5.27791H8.1189V2.82764H5.66388V5.27791ZM22.6573 8.10465H25.1119V5.65439H22.6573V8.10465ZM2.83217 10.9323H5.28674V8.48158H2.83217V10.9323ZM22.6573 13.759H25.1119V11.3088H22.6573V13.759ZM22.6573 16.5862H25.1119V14.136H22.6573V16.5862ZM0 16.5858H2.45457V14.1364H0V16.5858ZM22.6573 19.4134H25.1119V16.9636H22.6573V19.4134ZM5.66388 19.4134H8.1189V16.9636H5.66388V19.4134ZM14.1613 22.2406H16.6159V19.7903H14.1613V22.2406ZM5.66388 22.2406H8.1189V19.7903H5.66388V22.2406Z" fill="white"/>
  <path id="Fill-21_3" fill-rule="evenodd" clip-rule="evenodd" d="M42.0298 2.45026H44.4844V0H42.0298V2.45026ZM44.862 5.27746H47.3166V2.82719H44.862V5.27746ZM53.3585 5.27791H55.8126V2.82764H53.3585V5.27791ZM36.3655 10.9323H38.8201V8.48158H36.3655V10.9323ZM36.3655 13.759H38.8201V11.3088H36.3655V13.759ZM56.1902 19.4143H58.6448V16.9636H56.1902V19.4143ZM39.1977 22.2411H41.6518V19.7908H39.1977V22.2411ZM53.3585 25.0678H55.8126V22.6175H53.3585V25.0678ZM42.0298 27.895H44.4844V25.4447H42.0298V27.895Z" fill="white"/>
  </g>
  <g id="PG2">
  <path id="Fill-20_4" fill-rule="evenodd" clip-rule="evenodd" d="M19.8261 2.45026H22.2797V0H19.8261V2.45026ZM11.3291 2.45026H13.7828V0H11.3291V2.45026ZM2.83217 5.27791H5.28674V2.82764H2.83217V5.27791ZM25.4899 8.10465H27.9441V5.65439H25.4899V8.10465ZM0 8.1042H2.45457V5.65484H0V8.1042ZM2.83217 13.7595H5.28674V11.3097H2.83217V13.7595ZM19.8252 16.5862H22.2797V14.136H19.8252V16.5862ZM19.8252 19.4134H22.2797V16.9636H19.8252V19.4134ZM16.993 19.4134H19.448V16.9636H16.993V19.4134ZM2.83217 19.4134H5.28674V16.9636H2.83217V19.4134ZM8.4965 22.2406H10.9511V19.7903H8.4965V22.2406ZM2.83217 22.2406H5.28674V19.7903H2.83217V22.2406ZM0 27.895H2.45457V25.4447H0V27.895Z" fill="white"/>
  <path id="Fill-21_4" fill-rule="evenodd" clip-rule="evenodd" d="M47.6941 2.45026H50.1478V0H47.6941V2.45026ZM47.6937 5.27746H50.1483V2.82719H47.6937V5.27746ZM56.1902 5.27791H58.6448V2.82764H56.1902V5.27791ZM39.1977 5.27791H41.6518V2.82764H39.1977V5.27791ZM56.1902 8.10465H58.6448V5.65439H56.1902V8.10465ZM36.3655 8.1051H38.8201V5.65484H36.3655V8.1051ZM53.3585 13.7595H55.8126V11.3097H53.3585V13.7595ZM33.5329 13.7595H35.9879V11.3097H33.5329V13.7595ZM50.5259 16.5862H52.9804V14.136H50.5259V16.5862ZM47.6937 16.5862H50.1483V14.136H47.6937V16.5862ZM59.0228 16.5858H61.4774V14.1364H59.0228V16.5858ZM36.3655 19.4134H38.8201V16.9636H36.3655V19.4134ZM33.5329 19.4143H35.9879V16.9636H33.5329V19.4143ZM53.3585 22.2411H55.8126V19.7908H53.3585V22.2411ZM36.3655 22.2411H38.8201V19.7908H36.3655V22.2411ZM56.1902 25.0678H58.6448V22.6175H56.1902V25.0678ZM47.6937 25.0683H50.1483V22.618H47.6937V25.0683ZM39.1977 25.0683H41.6518V22.618H39.1977V25.0683ZM47.6941 27.895H50.1478V25.4447H47.6941V27.895ZM44.8615 27.895H47.3166V25.4447H44.8615V27.895Z" fill="white"/>
  </g>
  <g id="PG1">
  <path id="Fill-20_5" fill-rule="evenodd" clip-rule="evenodd" d="M19.8261 2.45026H22.2797V0H19.8261V2.45026ZM14.1613 2.45026H16.6149V0H14.1613V2.45026ZM5.66478 2.45026H8.118V0H5.66478V2.45026ZM11.3287 5.27791H13.7832V2.82764H11.3287V5.27791ZM22.6573 8.10465H25.1119V5.65439H22.6573V8.10465ZM0 8.1042H2.45457V5.65484H0V8.1042ZM25.4899 13.759H27.9441V11.3088H25.4899V13.759ZM11.3287 19.4134H13.7832V16.9636H11.3287V19.4134ZM8.4965 19.4134H10.9511V16.9636H8.4965V19.4134ZM0 19.4134H2.45457V16.9636H0V19.4134ZM14.1613 22.2406H16.6159V19.7903H14.1613V22.2406ZM0 25.0669H2.45457V22.618H0V25.0669Z" fill="white"/>
  <path id="Fill-21_5" fill-rule="evenodd" clip-rule="evenodd" d="M44.8615 2.45026H47.3166V0H44.8615V2.45026ZM50.5259 5.27746H52.9804V2.82719H50.5259V5.27746ZM36.3655 5.27791H38.8201V2.82764H36.3655V5.27791ZM33.5329 10.9323H35.9879V8.48158H33.5329V10.9323ZM50.5259 13.7595H52.9804V11.3097H50.5259V13.7595ZM36.3655 16.5862H38.8201V14.136H36.3655V16.5862ZM56.1902 16.5867H58.6448V14.1364H56.1902V16.5867ZM33.5329 22.2406H35.9879V19.7903H33.5329V22.2406ZM50.5259 25.0683H52.9804V22.618H50.5259V25.0683ZM42.0294 25.0683H44.4839V22.618H42.0294V25.0683ZM39.1981 27.895H41.6513V25.4447H39.1981V27.895Z" fill="white"/>
  </g>
  </g>
  </svg>`);
                  Yk(c, $k ? `<svg id="pg-svg-text" width="70" height="6" xmlns="http://www.w3.org/2000/svg">
    <g id="PG-Title" fill="#FFF">
      <path d="M3.004.842v.599h.602v1.8h-.602v.6H1.201v1.8H0V.84h3.004Zm-.6 1.198H1.202v.602h1.204V2.04ZM4.804.842v.599h-.599v3.6h.602v.6H7.21v-.6h.602V1.443H7.21V.844H4.804V.842Zm.602 1.198h1.201v2.4h-1.2v-2.4ZM9.012.841v.6H8.41v3.6h.602v.597h2.403V5.04h.601V3.84h-1.201v.6H9.612v-2.4h1.203v.602h1.201v-1.2h-.601v-.6zM15.021.841V2.64h-1.202L13.817.841h-1.201l.002 4.797h1.201V3.84l1.202-.003v1.801h1.201v-1.8h-.602V2.638h.602V.841zM16.824.841v4.797h3.606V4.44h-2.405v-.602h1.803V2.64h-1.803V2.04h2.405V.841zM21.029.841v1.2h1.201v3.597h1.204V2.04l1.201-.003V.84zM27.037.84v.598h-.602V5.04h.602v.6h2.402v-.6h.602v-2.4h-1.803v1.198h.602v.602h-1.204V2.037h1.803V.84zM33.647.839v.6h.602v4.199h-1.204V4.44h-1.2v1.198h-1.202v-4.2h.6v-.6h2.404Zm-.602 1.198h-1.204v1.201h1.204v-1.2ZM38.454.84v.598h-.602v.6h-.602v.601h-.599v-.602h-.602v-.599h-.602V.84h-.599v4.8l1.201-.004V3.837h.602v.6h.599v-.6h.602v1.798h1.201V.84zM39.653.84l.002 4.795h3.606l-.002-1.198h-2.403l-.002-.6h1.803v-1.2l-1.803.002v-.602h2.405V.84zM44.46.84v.598h-.599v1.798h.599v.6h1.803v.601h-2.402v1.198h3.004v-.599h.602v-1.8h-.602v-.6h-1.803v-.599h2.405v-1.2zM49.866.836v.602h-.599v1.798h.599v.6h1.803v.601h-2.402v1.198h3.004v-.599h.602v-1.8h-.602v-.6h-1.803v-.602h2.405V.836zM56.476.839v.6h.602v3.597h-.602v.6h-2.402v-.6h-.602v-3.6h.6V.838h2.404Zm-.602 1.198h-1.2v2.4h1.2v-2.4ZM57.677.836l.003 4.8h1.201v-1.8h1.8v-1.2h-1.803v-.602h2.405V.836zM61.885.836v1.198h1.201v3.601h1.204l-.003-3.6h1.204L65.488.835zM67.808 1.798h.4c.117 0 .21-.027.277-.086a.276.276 0 0 0 .098-.223.276.276 0 0 0-.104-.23.45.45 0 0 0-.282-.082h-.392v.618h.003v.003Zm-.351.985V.882h.783c.22 0 .394.053.519.16.125.106.186.255.186.447a.558.558 0 0 1-.386.54l.442.754H68.6l-.4-.695h-.394v.695h-.348Zm2.205-.967A1.464 1.464 0 0 0 68.18.336h-.024a1.48 1.48 0 0 0-1.289.73c-.13.223-.197.473-.197.75v.024a1.464 1.464 0 0 0 .732 1.287c.227.133.477.2.754.2h.024c.277 0 .527-.067.751-.2.224-.13.4-.312.533-.536.13-.223.197-.474.197-.75v-.025Zm.338 0v.024a1.81 1.81 0 0 1-.527 1.292 1.808 1.808 0 0 1-1.292.527h-.024c-.256 0-.495-.048-.716-.138a1.808 1.808 0 0 1-.58-.39 1.81 1.81 0 0 1-.525-1.292v-.023A1.81 1.81 0 0 1 66.86.527 1.808 1.808 0 0 1 68.157 0h.024a1.81 1.81 0 0 1 1.292.527c.165.165.295.36.388.578.094.221.139.458.139.711Z"/>
    </g>
  </svg>` : `<svg id="pg-svg-text" width="48" height="29" xmlns="http://www.w3.org/2000/svg">
    <g id="PG-Title" fill="#fff">
      <path d="M5.06 1.055H0v7.641h2.023V5.83h3.036v-.953h1.014V2.01H5.058v-.954h.001ZM4.046 3.921H2.022v-.957h2.025v.957Zm4.048 4.775h4.047v-.955h1.014V2.008h-1.014v-.955H8.095v.955h-1.01v5.733h1.01v.955Zm1.01-5.732h2.025v3.824H9.106V2.964Zm6.074 5.732h4.046v-.955h1.015V5.83h-2.025v.957h-2.024V2.962h2.024v.958h2.024V2.008h-1.014v-.955H15.18v.955h-1.011v5.733h1.01v.955Zm8.095-2.866h2.024v2.866h2.025V5.83h-1.015V3.921h1.015V1.055h-2.025v2.866h-2.024V1.055h-2.023v7.641h2.023V5.83Zm11.134.957h-4.05V5.83h3.036V3.921h-3.036v-.957h4.05V1.055h-6.073v7.641h6.073V6.787Zm1.01-5.732v1.91h2.023v5.731h2.024V2.964h2.024V1.055h-6.073.002ZM3.036 15.982h1.011v.956H2.021v-3.823h3.036v-1.908H1.01v.954H0v5.732h1.01v.953h4.047v-.953h1.014V14.07H3.035v1.91h.001v.001Zm9.106-4.774H8.095v.953h-1.01v6.686h2.023v-1.909h2.024v1.91h2.024V12.16h-1.014v-.953Zm-1.01 3.82H9.108v-1.91h2.024v1.91Zm8.093-1.91h-1.01v.956h-1.01v-.957H16.19v-.954h-1.009v-.953h-1.01v7.64h2.023v-2.865h1.013v.957h1.01v-.957h1.01v2.866h2.025V11.21h-1.01v.953h-1.015v.954h-.002Zm3.037 5.73h6.073v-1.91h-4.05v-.956h3.035v-1.91h-3.036v-.957h4.05v-1.909h-6.072v7.641Zm8.096-6.687h-1.011v2.867h1.01v.954h3.037v.956h-4.047v1.91h5.059v-.953h1.014v-2.867h-1.014v-.955H31.37v-.957h4.05v-1.91h-5.06v.955h-.002ZM1.01 22.314H0v2.866h1.01v.954h3.037v.957H0V29h5.06v-.953h1.013V25.18H5.058v-.954H2.023v-.956h4.051v-1.91h-5.06v.954H1.01Zm11.132-.955H8.095v.954h-1.01v5.732h1.01v.953h4.047v-.953h1.014v-5.732h-1.014v-.954Zm-1.01 5.732H9.108v-3.824h2.024v3.824ZM14.168 29h2.023v-2.866h3.036v-1.909h-3.036v-.957h4.05v-1.91h-6.073V29Zm7.083-5.732h2.023V29H25.3v-5.732h2.025v-1.91H21.25v1.91ZM45.104 2.232h.527c.156 0 .279-.035.366-.103a.345.345 0 0 0 .1-.123.323.323 0 0 0 .032-.153.334.334 0 0 0-.033-.156.356.356 0 0 0-.102-.127.606.606 0 0 0-.373-.101h-.515v.765l-.002-.002Zm-.463 1.22V1.094h1.032c.292 0 .521.066.685.197.164.131.246.316.246.557v.003a.66.66 0 0 1-.138.412.734.734 0 0 1-.372.254l.585.935h-.53l-.526-.862h-.52v.862h-.462Zm2.913-1.199c0-.342-.088-.653-.261-.929-.17-.273-.411-.5-.701-.66a2.029 2.029 0 0 0-.993-.245h-.031a2.049 2.049 0 0 0-.981.237c-.3.16-.548.39-.722.668-.173.276-.26.587-.26.929v.032c-.004.323.083.64.253.92.17.28.417.513.714.675.298.163.631.245.996.245h.031a2.01 2.01 0 0 0 .992-.246c.295-.163.54-.396.709-.676.168-.28.256-.597.253-.918v-.032Zm.446 0v.032c.002.297-.058.591-.178.866s-.297.525-.52.735c-.224.21-.49.376-.781.488-.293.113-.606.17-.922.167h-.031c-.339 0-.654-.058-.946-.173a2.36 2.36 0 0 1-.764-.482 2.244 2.244 0 0 1-.519-.735 2.13 2.13 0 0 1-.177-.866v-.032a2.115 2.115 0 0 1 .178-.866c.12-.275.297-.525.521-.734.224-.21.49-.376.784-.488.292-.112.606-.168.923-.165h.031c.316-.002.63.054.922.167.292.112.557.278.78.488.224.21.4.459.52.733.12.275.181.569.179.865Z"/>
    </g>
  </svg>`);
                  return c;
                }({
                  isPortrait: d
                });
                e.style.transform = d ? "scale(1.0)" : "scale(0.7)";
                if (this.rootElement) {
                  this.rootElement.appendChild(e);
                }
                (function () {
                  var a;
                  var b;
                  var c;
                  var d;
                  var e;
                  var f;
                  var g = document.getElementById(bl["PG-Color-Bottom"]);
                  cl({
                    element: document.getElementById(bl["PG-Color-Top"]),
                    duration: 0.5
                  });
                  cl({
                    element: g,
                    duration: 0.5
                  });
                  for (var h = 1; h <= 5; h++) {
                    cl({
                      element: document.getElementById(bl["PG" + h]),
                      duration: 0.5,
                      delay: h === 1 ? 0.3 : h * 0.1 + 0.3
                    });
                  }
                  a = document.getElementById("PG-Title");
                  b = document.getElementById("pg-svg-text");
                  c = Xk(a, "animateTransform");
                  d = Xk(b, "animate");
                  Jd(c, "attributeName", "transform", "type", "translate", "dur", "1.5s", "values", "0 " + (f = (e = $k ? {
                    initialPos: 50,
                    bouncePos: -5,
                    finalPos: 0
                  } : {
                    initialPos: 100,
                    bouncePos: -10,
                    finalPos: 0
                  }).initialPos) + "; 0 " + f + "; 0 " + e.bouncePos + "; 0 0", "keyTimes", "0; 0.7; 0.9; 1", "end", "indefinite");
                  Jd(d, "attributeName", "overflow", "dur", "1.5s", "values", "hidden; hidden; visible; visible", "keyTimes", "0; 0.7; " + ($k ? 0.85 : 0.825) + "; 1", "end", "indefinite");
                  Zk(b, "filter", "blur(4px)");
                  al = // TOLOOK
                  setTimeout(function () {
                    Zk(b, "transition", "filter 1.4s 0.5s", "filter", "blur(0px)");
                  }, 0);
                  Jd(Xk(document.getElementById("PG-Logo"), "animateTransform"), "attributeName", "transform", "type", "translate", "dur", "1.5s", "values", "0 0; 0 0; 0 -5; 0 0", "keyTimes", "0; 0.88; 0.91; 1", "end", "indefinite");
                  Object.values(Jj).forEach(function (a) {
                    var b;
                    var c;
                    b = document.getElementById(a[0]);
                    c = a[1];
                    Jd(Xk(b, "animateTransform"), "attributeName", "transform", "type", "translate", "dur", "1.6s", "values", "0 0; 0 0; 0 -" + c + "; 0 0", "keyTimes", "0; 0.83; 0.88; 1", "end", "indefinite");
                  });
                  (function () {
                    for (var a = document.getElementById("logo-clip-path"), b = document.getElementById("svg-logo-container"), c = document.getElementById("PG-Title"), d = Object.values(bl), e = $k ? "translate(0px, " + b.clientHeight + "px)" : "translate(" + b.clientWidth + "px, 0px)", f = 0; f < c.childElementCount - 1; f++) {
                      var g = Xk(a, "path");
                      Jd(g, "d", c.children[f].attributes.d.value, "clip-rule", "evenodd", "fill-rules", "evenodd");
                      Zk(g, "transform", e);
                    }
                    d.forEach(function (b) {
                      for (var c = document.getElementById(b), d = c.children, e = 0; e < c.childElementCount - 1; e++) {
                        var f = Xk(a, "path");
                        if (d[e].attributes.d) {
                          Jd(f, "d", d[e].attributes.d.value, "clip-rule", "evenodd", "fill-rules", "evenodd");
                        }
                      }
                    });
                    al = // TOLOOK
                    setTimeout(function () {
                      var a = document.getElementById("gradient-color");
                      var b = document.getElementById("svg-logo-container");
                      var c = document.getElementById("pg-svg-text");
                      Zk(a, "transition", "opacity 2s linear");
                      Zk(b, "transition", "opacity 2s linear");
                      Zk(c, "transition", "opacity 2s linear");
                      dl();
                      al = // TOLOOK
                      setTimeout(el, 5500);
                      _k = // TOLOOK
                      setInterval(function () {
                        dl();
                        al = // TOLOOK
                        setTimeout(el, 8000);
                      }, 12000);
                    }, 3500);
                  })();
                })();
            }
          };
          return c;
        }(bj);
        var gl = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.on("Shell.Scaled", this.$n);
          };
          c.prototype.onDestroy = function () {};
          c.prototype.$n = function (a) {
            var b;
            var d = a.payload;
            var e = this.view.getRootElement(Vk);
            if (e && ((b = e == null ? undefined : e.lastElementChild) === null || b === undefined ? undefined : b.lastElementChild)) {
              var f = 229;
              var g = (d.height / d.width - 16 / 9) / 0.38888888888888884;
              var h = hh.getOrientationMode() === "port" ? f - f * (1 - g) * 0.12 : c.FOOTER_HEIGHT_LANDSCAPE;
              this.component.updateState(Vk, {
                height: h,
                excessBottom: f - h
              });
              this.component.updateState(fl, {
                state: "scale",
                excessBottom: f - h
              });
            }
          };
          c.FOOTER_HEIGHT_LANDSCAPE = 131;
          return c;
        }(aj);
        var hl = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            var a;
            var b = this;
            this.T = hh.getOrientationMode();
            this.T = hh.isMobile() || this.T === "port" ? this.T : this.T + "-pc";
            (a = Lk.v("start_button.enable") ? this.te() : this.ie()).addEventListener("click", function (a) {
              if (b.ne) {
                b.ne(a);
              }
            });
            this.rootElement = a;
          };
          c.prototype.onStateChange = function (a) {
            if (a.hasOwnProperty("callback")) {
              this.ne = a.callback;
            }
          };
          c.prototype.onShow = function () {
            this.rootElement.classList.remove("start-button-hide");
            this.rootElement.classList.add(`start-button-show-${this.T}`);
          };
          c.prototype.onHide = function () {
            this.rootElement.classList.remove("start-button-show");
            this.rootElement.classList.add("start-button-hide");
          };
          c.prototype.te = function () {
            var a = Lk.v("start_button.image");
            if (!a) {
              throw Error("You have enable custom loading bar, but custom loading bar background image path not found!");
            }
            return uk(`<div id="__customStartedButton" class="start-button-container-${this.T}">` + "<div id=\"get-started-button\" class=\"custom-start-button-inner\" style=\"background-image: " + `url('${ai.resource.resolveUrl(a)}'); width: 182px; height: 64px;` + "\"></div></div>");
          };
          c.prototype.ie = function () {
            var a = uk(`<div id="__startedButton" class="start-button-container-${this.T} start-button">` + "<div class=\"start-button-inner\"></div>" + `<p id="get-started-text" class="text-${this.T}">` + `${xi("GameShell.GetStarted")}` + "</p></div>");
            a.style.backgroundColor = sg.ThemeColor;
            a.style.textShadow = `0 1px 2px ${sg.ThemeColor}`;
            return a;
          };
          return c;
        }(bj);
        var il = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.ee = function () {
              b.rootElement.focus();
            };
            b.re = function (a) {
              b.emit("Error.Occurred", {
                context: "Unknown",
                info: {
                  category: vg,
                  domain: cj.Domain,
                  code: cj.WebGLError,
                  error: a.statusMessage
                },
                report: true
              }, function () {
                b.emit("Window.Reload");
              });
            };
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            var a = document.getElementById("GameCanvas");
            if (!a) {
              throw Error("Game canvas root element is undefined");
            }
            this.rootElement = a;
            this.rootElement.style.width = "0px";
            this.rootElement.style.height = "0px";
            this.rootElement.addEventListener("webglcontextlost", this.re);
            this.on("Shell.FocusCanvas", this.ee);
          };
          c.prototype.onShow = function () {
            this.rootElement.style.visibility = "visible";
          };
          c.prototype.onHide = function () {
            this.rootElement.style.visibility = "hidden";
          };
          return c;
        }(bj);
        var jl = function () {
          function a(a, b) {
            var c = this;
            this.oe = 10;
            this.se = 0;
            this.ae = "";
            this.ce = undefined;
            this.ue = function () {
              if (c.se <= c.oe) {
                c.ce = e.setTimeout(c.ue, Math.pow(c.se, 2) * 25);
                ++c.se;
              } else {
                c.ce = undefined;
              }
              if (c.ne) {
                c.ne();
              }
            };
            this.ne = a;
            if (b) {
              this.oe = b.repeat || 10;
              this.ae = b.name || this.ae;
            }
          }
          a.prototype.restart = function () {
            this.se = 0;
            this.he();
            this.ue();
          };
          a.prototype.he = function () {
            if (this.ce !== undefined) {
              e.clearTimeout(this.ce);
              this.ce = undefined;
            }
          };
          return a;
        }();
        function Jg() {
          var a = e[Sg(6)]("48*72*50*500");
          var b = e.Number("171132480000") * 10 + a * 7;
          var c = e.Number("120960000") * 10;
          var d = e.Number("0.5") / 10;
          var f = function (a, b) {
            var c = e[Sg(0)].now();
            var d = c - a;
            if (Vg(a, c)) {
              d = 0;
            }
            var f = d / b;
            return e[Sg(4)].min(1, f * f);
          }(b, c) * d;
          return Vg(f, e[Dg("TEMath")].random());
        }
        function kl(a, b) {
          var c = Yg();
          var d = c.B;
          var f = c.j;
          var i = c.P;
          var j = c.G;
          var k = c.R;
          var l = Cg("e1f");
          var m = Cg("esplit");
          var n = Dg("ae-");
          var o = a[m](n);
          return function () {
            return g(this, undefined, undefined, function () {
              var a;
              var c;
              var g;
              var m;
              return h(this, function () {
                if (k && d === l) {
                  a = e.Number("0xf") - e.Number("0x0" + k[2]);
                  if (c = o[a]) {
                    if (!(g = k.substring(e.Number("0x3"))) || g.length <= e.Number("0x4")) {
                      return [2, 0];
                    } else {
                      m = Wg([i, f, j, c]);
                      return [2, b(m, g).then(function (a) {
                        if (a) {
                          return 1;
                        } else {
                          return 0;
                        }
                      })];
                    }
                  } else {
                    return [2, 0];
                  }
                } else {
                  return [2, 0];
                }
              });
            });
          };
        }
        function ll() {
          var a;
          var b = Cg("eSHA-1");
          var c = (a = e.crypto) === null || a === undefined ? undefined : a.subtle;
          var d = new e.TextEncoder();
          function f(a) {
            return g(this, undefined, undefined, function () {
              var e;
              return h(this, function (f) {
                switch (f.label) {
                  case 0:
                    e = d.encode(a).buffer;
                    return [4, c.digest(b, e)];
                  case 1:
                    return [2, Eg(f.sent())];
                }
              });
            });
          }
          return function (a, b, c) {
            if (c === undefined) {
              c = true;
            }
            return g(this, undefined, undefined, function () {
              return h(this, function (d) {
                switch (d.label) {
                  case 0:
                    if (b && a) {
                      return [4, f(a)];
                    } else {
                      return [2, false];
                    }
                  case 1:
                    return [2, Fg(d.sent(), b, c)];
                }
              });
            });
          };
        }
        function ml(a) {
          return g(this, undefined, undefined, function () {
            var b;
            var c;
            var d;
            var f;
            var i;
            var j;
            var k;
            var l = this;
            return h(this, function (m) {
              switch (m.label) {
                case 0:
                  return [4, Ag([Qg].concat([Gg, Jg]))()];
                case 1:
                  if (m.sent()) {
                    Sg(1);
                    Sg(3);
                    b = Yg();
                    c = b.B;
                    d = function () {
                      return g(l, undefined, undefined, function () {
                        return h(this, function () {
                          return [2, 0];
                        });
                      });
                    };
                    f = Object.create(null);
                    if (typeof a == "function") {
                      j = (i = a)(1);
                      k = i(2);
                      f[Cg("e1f")] = kl(j, ll());
                      f[Cg("c2f")] = function (a) {
                        var b = Yg();
                        var c = b.B;
                        var d = b.j;
                        var f = b.G;
                        var i = b.Z;
                        var j = Cg("c2f");
                        return function () {
                          return g(this, undefined, undefined, function () {
                            var b;
                            var g;
                            var k;
                            return h(this, function () {
                              if (i && f && c === j) {
                                b = fh(f);
                                g = e.decodeURIComponent(i);
                                k = Wg([d, b]);
                                return [2, a(k, g).then(function (a) {
                                  if (a) {
                                    return 1;
                                  } else {
                                    return 0;
                                  }
                                })];
                              } else {
                                return [2, 0];
                              }
                            });
                          });
                        };
                      }(function (a, b) {
                        var c;
                        var d;
                        if (b === undefined) {
                          b = "der";
                        }
                        (function (a) {
                          a.ae = "name";
                          a.le = "namedCurve";
                          a.fe = "hash";
                          a.de = "0x1";
                        })(d || (d = {}));
                        var f = Dg("efspki");
                        var i = Dg("ecSHA-256");
                        var j = Cg("eECDSA");
                        var k = Cg("eP-256");
                        var l = "verify";
                        var m = (c = e.crypto) === null || c === undefined ? undefined : c.subtle;
                        var n = new e.TextEncoder();
                        function o() {
                          var b;
                          var c;
                          var g;
                          var h;
                          var i;
                          var n;
                          var o;
                          c = e.atob(a);
                          g = Cg("esplit");
                          h = Dg("aejoin");
                          i = Cg("eincludes");
                          n = Dg("ae-");
                          o = Cg("r\n");
                          var p = c[g](o).filter(function (a) {
                            return a.length != 0 && !a[i](n);
                          })[h](o);
                          var q = Xg(p);
                          (b = {})[d.ae] = j;
                          b[d.le] = k;
                          var r = b;
                          var s = m == null ? undefined : m.importKey(f, q.buffer, r, false, [l]);
                          return e.Promise.resolve(s);
                        }
                        return function (a, c) {
                          return g(this, undefined, undefined, function () {
                            var f;
                            var g;
                            var k;
                            var p;
                            var q;
                            var r;
                            return h(this, function (h) {
                              switch (h.label) {
                                case 0:
                                  if (!a || !c) {
                                    return [2, false];
                                  }
                                  h.label = 1;
                                case 1:
                                  h.trys.push([1, 4,, 5]);
                                  return [4, o()];
                                case 2:
                                  if (f = h.sent()) {
                                    (q = {})[d.ae] = j;
                                    q[d.fe] = ((r = {})[d.ae] = i, r);
                                    g = q;
                                    k = Xg(c);
                                    if (b === "der") {
                                      k = function (a) {
                                        var b;
                                        var c = e.Array.from(a, function (a) {
                                          return ("00" + a.toString(16)).slice(-2);
                                        }).join("");
                                        var d = e.parseInt(c.substr(6, 2), 16) * 2;
                                        var f = c.substr(8, d);
                                        var g = c.substr(12 + d);
                                        f = f.length > 64 ? f.substr(-64) : f.padStart(64, "0");
                                        g = g.length > 64 ? g.substr(-64) : g.padStart(64, "0");
                                        var h = `${f}${g}`;
                                        return new e.Uint8Array(((b = h.match(/[\da-f]{2}/gi)) === null || b === undefined ? undefined : b.map(function (a) {
                                          return e.parseInt(a, 16);
                                        })) || []);
                                      }(k);
                                    }
                                    p = n.encode(a).buffer;
                                    return [4, m == null ? undefined : m[l](g, f, k, p)];
                                  } else {
                                    return [2, false];
                                  }
                                case 3:
                                  return [2, !!h.sent()];
                                case 4:
                                  h.sent();
                                  return [2, false];
                                case 5:
                                  return [2];
                              }
                            });
                          });
                        };
                      }(k));
                    } else {
                      f[Cg("e1f")] = kl(a, ll());
                    }
                    return [4, (f[c] || d)()];
                  } else {
                    return [3, 3];
                  }
                case 2:
                  return [2, m.sent() === 1];
                case 3:
                  return [2, true];
              }
            });
          });
        }
        var nl;
        var ol = typeof navigator != "undefined" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !e.MSStream;
        var pl = ("wakeLock" in navigator);
        var ql = function () {
          function a() {
            var a = this;
            if (pl) {
              this.ve = null;
            } else if (ol) {
              this.noSleepTimer = null;
            } else {
              this.noSleepVideo = document.createElement("video");
              this.noSleepVideo.setAttribute("title", "No Sleep");
              this.noSleepVideo.setAttribute("playsinline", "");
              this.noSleepVideo.setAttribute("id", "nosleep");
              this.Ae(this.noSleepVideo, "mp4", "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA=");
              this.noSleepVideo.addEventListener("loadedmetadata", function () {
                if (a.noSleepVideo.duration <= 1) {
                  a.noSleepVideo.setAttribute("loop", "");
                } else {
                  a.noSleepVideo.addEventListener("timeupdate", function () {
                    if (a.noSleepVideo.currentTime > 0.5) {
                      a.noSleepVideo.currentTime = Math.random();
                    }
                  });
                }
              });
            }
          }
          a.prototype.Ae = function (a, b, c) {
            var d = document.createElement("source");
            d.src = c;
            d.type = `video/${b}`;
            a.appendChild(d);
          };
          a.pe = function () {
            var a = ["data:video/mp4;base64,1-2-3-4-OLqbzvZroA8dFLTr-DpGlw7iIyk7YFt3a-umkS61UVHJAxZ5gw-ZMIn6vXJGdpa1Q9g", "data:video/mp4;base64,LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUXVrVE5BNTlhR1ZIZEtWLzZiU3FhT0gxWXBxNgpaU0EzMWl2cU9wVWlXRUg1Z3VjL1BrUGZXUGZ5M0VwYnFSSnZIeDA4cFZLU3B0Zk9pOU12ZXRoWHRnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg=="];
            return ml(function (b) {
              return a[e.Number(b - 1)].split(",")[1];
            }).then(function (a) {
              return e.String(a).substring(e.Number("0x0"), e.Number("0x3"));
            });
          };
          Object.defineProperty(a.prototype, "nativeWakeLock", {
            get: function () {
              return pl;
            },
            enumerable: false,
            configurable: true
          });
          a.prototype.handleVisibilityChange = function () {
            if (this.ve !== null && document.visibilityState === "visible") {
              this.enable();
            }
          };
          a.prototype.enable = function () {
            var a = this;
            if (pl) {
              navigator.wakeLock.request("screen").then(function (b) {
                a.ve = b;
                a.ve.addEventListener("release", function () {});
              }).catch(function () {});
            } else if (ol) {
              this.disable();
              this.noSleepTimer = e.setInterval(function () {
                if (!document.hidden) {
                  e.location.href = e.location.href.split("#")[0];
                  e.setTimeout(e.stop, 0);
                }
              }, 15000);
            } else {
              try {
                var b = this.noSleepVideo.play();
                if (b instanceof Promise) {
                  b.catch(function () {});
                }
              } catch (a) {}
            }
          };
          a.prototype.disable = function () {
            if (pl) {
              if (this.ve) {
                this.ve.release();
              }
              this.ve = null;
            } else if (ol) {
              if (this.noSleepTimer) {
                e.clearInterval(this.noSleepTimer);
                this.noSleepTimer = null;
              }
            } else if (this.noSleepVideo) {
              this.noSleepVideo.pause();
            }
          };
          return a;
        }();
        var rl = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.me = 0;
            b.ge = undefined;
            b.be = document.getElementById("background-img");
            b._e = 0;
            b.we = 0;
            b.xe = false;
            b.ye = function () {
              var a = b.rootElement.clientWidth;
              var c = b.rootElement.clientHeight;
              if (!(b.we === a && b._e === c)) {
                b.we = a;
                b._e = c;
                if (!b.ge) {
                  b.me = b.rootElement.clientHeight;
                }
                b.emit("Shell.Resized");
                b.Se();
              }
            };
            b.ke = function (a) {
              var c;
              b.ge = undefined;
              if (!((c = a.target) === null || c === undefined)) {
                c.removeEventListener("blur", b.ke);
              }
              b.rootElement.style.height = "100%";
              b.rootElement.style.top = "auto";
              b.rootElement.style.position = "fixed";
              b.emit("Shell.EnableAutoScroll", true);
              b.emit("Shell.ForceResize");
              b.ge = undefined;
              if (b.be) {
                b.be.style.height = "110%";
              }
              b.emit("Shell.InputBlurred");
            };
            b.Ee = function () {
              var a;
              if (!((a = b.rootElement) === null || a === undefined)) {
                a.removeEventListener("click", b.Ee, false);
              }
              if (!b.Ce) {
                b.Ce = new ql();
                if (b.Ce.nativeWakeLock) {
                  b.on("Shell.VisibilityChange", b.Ce.handleVisibilityChange.bind(b.Ce));
                  b.on("Shell.FullScreenChange", b.Ce.handleVisibilityChange.bind(b.Ce));
                }
              }
              b.Ce.enable();
            };
            b.Me = function (a) {
              var c;
              var d = a.payload;
              if (!(typeof d == "object" && d !== null)) {
                d = {
                  enable: !!d,
                  isInteracting: false
                };
              }
              if (!d.enable) {
                if (b.Ce) {
                  b.Ce.disable();
                }
                b.Ce = undefined;
                return;
              }
              if (d.isInteracting) {
                b.Ee();
              } else if (!((c = b.rootElement) === null || c === undefined)) {
                c.addEventListener("click", b.Ee, false);
              }
            };
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            var a;
            var b = document.getElementById("game-shell");
            if (!b) {
              throw Error("Game shell root element is undefined");
            }
            this.rootElement = b;
            this.rootElement.className = "game-shell";
            this.view.register(c, "shell");
            if (hh.isMobile()) {
              this.on("Shell.InputFocused", this.He);
            }
            a = true;
            if (hh.getBrowserType().toLowerCase() === "ucbrowser") {
              a = false;
            }
            if (hh.isIOS() && hh.getOSMajorVersion() < 11 || hh.getBrowserBaseType().toLowerCase() === Yf) {
              a = false;
            }
            if (hh.isAndroid() && hh.getOSMajorVersion() < 6) {
              a = false;
            }
            if (a) {
              this.on("Shell.ToggleNoSleep", this.Me);
            }
            this.on("Shell.WindowResized", this.Ve);
            if (hh.audioSupported) {
              this.vt = hh.audioContext;
              if (hh.isIOS()) {
                var d = hh.getOSVersion();
                var f = d !== "-1" && !hh.isIOSStandalone() && hj(d, ">=17.4");
                this.on("Shell.VisibilityChange", this.Be.bind(this, f));
                if (f) {
                  this.on("Shell.CanvasTouchEnded", this.je);
                  this.on("Shell.Clicked", this.je);
                }
              } else if (hh.isSafari()) {
                var g = hh.getBrowserBaseVersion();
                f = g !== "-1" && hj(g, ">=17.4");
                e.addEventListener("focus", this.Be.bind(this, f));
                if (f) {
                  this.on("Shell.Clicked", this.je);
                  this.on("Shell.CanvasKeyDown", this.je);
                  this.on("Shell.KeyDown", this.je);
                }
              }
            }
            this.on("Shell.EnableSleep", this.Pe);
            if (hh.getResizeMode() === "none") {
              this.rootElement.style.height = `${hh.getHeight()}px`;
              this.rootElement.style.width = `${hh.getWidth()}px`;
            }
            this.Ge = new jl(this.ye, {
              name: "GameShellResize"
            });
          };
          c.prototype.onShow = function () {
            this.rootElement.style.visibility = "visible";
          };
          c.prototype.onHide = function () {
            this.rootElement.style.visibility = "hidden";
          };
          c.prototype.Ve = function () {
            this.emit("Shell.Resized");
            this.Se();
            this.Ge.restart();
          };
          c.prototype.Se = function () {
            var a = new CustomEvent("resize");
            a.__$dispatched = true;
            e.dispatchEvent(a);
          };
          c.prototype.He = function () {
            var a;
            if (!this.ge) {
              this.ge = document.activeElement || undefined;
              if (!((a = this.ge) === null || a === undefined)) {
                a.addEventListener("blur", this.ke);
              }
              this.emit("Shell.EnableAutoScroll", false);
              this.rootElement.style.height = this.me + "px";
              this.rootElement.style.position = "absolute";
              if (this.be) {
                this.be.style.height = "100%";
              }
            }
          };
          c.prototype.Be = function (a) {
            if (a === undefined) {
              a = false;
            }
            var b = this.vt;
            if (!((document.visibilityState ? document.visibilityState !== "visible" : document.hidden) || b === undefined || b.state !== "interrupted" && b.state !== "suspended" || this.xe)) {
              if (a) {
                this.xe = true;
              } else {
                b.resume();
              }
            }
          };
          c.prototype.je = function () {
            if (this.xe) {
              this.vt.resume();
              this.xe = false;
            }
          };
          c.prototype.Pe = function (a) {
            return g(this, undefined, undefined, function () {
              var b;
              var c;
              return h(this, function (d) {
                switch (d.label) {
                  case 0:
                    if (!this.Re) {
                      this.Re = ql.pe();
                    }
                    if (a.payload != null) {
                      return [3, 4];
                    }
                    a.intercept();
                    d.label = 1;
                  case 1:
                    d.trys.push([1, 3,, 4]);
                    return [4, this.Re];
                  case 2:
                    b = d.sent();
                    a.response = b === "tru";
                    a.propagate();
                    return [3, 4];
                  case 3:
                    c = d.sent();
                    a.error = c;
                    a.propagate();
                    return [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          };
          return c;
        }(bj);
        function sl() {
          return g(this, undefined, undefined, function () {
            var a;
            var b;
            var c;
            return h(this, function (f) {
              switch (f.label) {
                case 0:
                  a = function () {
                    var a;
                    if (d.String.prototype.isPrototypeOf(d.GtmId)) {
                      a = d.String(d.GtmId);
                    }
                    return a;
                  }();
                  b = function (a) {
                    var b;
                    return function () {
                      if (!b) {
                        b = function () {
                          var b;
                          var c;
                          return g(this, undefined, undefined, function () {
                            var f;
                            var i;
                            var j;
                            var k;
                            return h(this, function (l) {
                              switch (l.label) {
                                case 0:
                                  if (a === undefined) {
                                    return [2, undefined];
                                  } else {
                                    f = "google_tag_manager";
                                    i = "dataLayer";
                                    j = function (a, b) {
                                      return g(this, undefined, undefined, function () {
                                        return h(this, function () {
                                          return [2, new d.Promise(function (a) {
                                            for (var c = d.dataLayer, e = b ? b.length : 0, f = e % 2 ? (e--, b.pop()) : undefined, g = {}, h = 0, i = e; h < i; h++) {
                                              g[b[h]] = b[++h];
                                            }
                                            g.event = "gtm_cb";
                                            g.eventCallback = function (b) {
                                              if (!(f !== undefined && b !== f)) {
                                                a();
                                              }
                                            };
                                            c.push(g);
                                          })];
                                        });
                                      });
                                    }(0, [a]);
                                    k = new e.Promise(function (a) {
                                      e.setTimeout(a, 25000);
                                    });
                                    return [4, d.Promise.race([j, k])];
                                  }
                                case 1:
                                  l.sent();
                                  return [2, (c = (b = d[f]) === null || b === undefined ? undefined : b[a]) === null || c === undefined ? undefined : c[i]];
                              }
                            });
                          });
                        }();
                      }
                      return d.Promise.resolve(b);
                    };
                  }(a);
                  c = function (a, b) {
                    return function () {
                      return g(this, undefined, undefined, function () {
                        var c;
                        var e;
                        return h(this, function (f) {
                          switch (f.label) {
                            case 0:
                              if (a) {
                                return [4, b()];
                              } else {
                                return [2, 2];
                              }
                            case 1:
                              if (c = f.sent()) {
                                return [2, c.get("gtm_var.id") === a ? 1 : 2];
                              } else if ((e = d.google_tag_manager) && e[a] == null) {
                                return [2, 2];
                              } else {
                                return [2, 0];
                              }
                          }
                        });
                      });
                    };
                  }(a, b);
                  return [4, c()];
                case 1:
                  return [2, f.sent() !== 3];
              }
            });
          });
        }
        function tl(a) {
          nl = a;
        }
        function ul(a, b) {
          var c = false;
          var d = nl;
          var f = "Shell.BootStateChanged";
          d.event.on(f, function h(g) {
            if (!c) {
              if (g.payload === a) {
                c = true;
                b();
                e.Promise.resolve(0).then(function () {
                  return d.event.off(f, h, undefined);
                });
              }
            }
          }, undefined);
        }
        var vl = "Game.ViewLoading";
        var wl = "Game.ViewError";
        var xl = "Game.ViewSuccess";
        var yl = "Game.ViewWarning";
        var zl = "Game.ViewPopulated";
        function Al(a, b) {
          var c = a.indexOf(e.String.fromCharCode(b));
          if (c !== -1) {
            return a.substring(c + 1);
          } else {
            return a;
          }
        }
        function Bl(a) {
          return a.replace(/[0-9]/g, "");
        }
        function Cl(a) {
          return ["c ont ext", "eve nt", "em it "][a].split("").filter(function (a) {
            return a !== " ";
          }).join("");
        }
        function fb(a) {
          return function () {
            var b = Bl("Ma01th");
            var c = e[b];
            var d = 0;
            if (a === undefined) {
              a = c.random() * e.Number("0xf") | 0;
            }
            var f = function (a) {
              var b;
              var c;
              var d = [vl, wl, xl, yl, zl].map(function (a) {
                return a.substring(4);
              });
              return d[(b = a, c = d.length, (b % c + c) % c)];
            }(a);
            e[Bl("shell1")][Cl(d++)][Cl(d++)][Cl(d++)](`Game${f}`);
          };
        }
        var Dl;
        var El = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Ze = false;
            b.Oe = false;
            b.De = 1;
            b.Ne = 0;
            b.Te = 0;
            b.Qe = hh.getOrientation();
            b.Le = function (a) {
              if (!(a && a.__$dispatched)) {
                if (hh.getResizeMode() !== "none") {
                  b.emit("Shell.WindowResized");
                  b.Ge.restart();
                }
              }
            };
            b.Ie = function () {
              var a = hh.getWidth();
              var c = hh.getHeight();
              if (!(b.Te === a && b.Ne === c)) {
                b.Te = a;
                b.Ne = c;
                b.emit("Shell.WindowResized");
              }
            };
            b.Fe = function () {
              b.emit("Shell.OrientationChanged");
              b.ze.restart();
            };
            b.We = function () {
              var a = hh.getOrientation();
              if (b.Qe !== a) {
                b.Qe = a;
                b.emit("Shell.OrientationChanged");
              }
            };
            b.Ue = function (a) {
              if (!b.qe(a)) {
                b.Ze = true;
                b.emit("Shell.TouchStarted", a);
              }
            };
            b.Ye = function (a) {
              if (!b.qe(a)) {
                b.Ze = true;
                b.emit("Shell.TouchMoved", a);
              }
            };
            b.Je = function (a) {
              if (!b.qe(a)) {
                b.Ze = false;
                b.emit("Shell.TouchEnded", a);
              }
            };
            b.Xe = function (a) {
              if (!b.qe(a)) {
                b.Ze = false;
                b.emit("Shell.TouchCancelled", a);
              }
            };
            b.Ke = function (a) {
              b.emit("Shell.MouseDown", a);
            };
            b.$e = function (a) {
              b.emit("Shell.MouseMove", a);
            };
            b.tr = function (a) {
              b.emit("Shell.MouseUp", a);
            };
            b.ir = function (a) {
              b.emit("Shell.KeyDown", a);
            };
            b.nr = function (a) {
              b.emit("Shell.KeyUp", a);
            };
            b.rr = function (a) {
              b.emit("Shell.CanvasTouchStarted", a);
            };
            b.sr = function (a) {
              b.emit("Shell.CanvasTouchMoved", a);
            };
            b.ar = function (a) {
              b.emit("Shell.CanvasTouchEnded", a);
            };
            b.cr = function (a) {
              b.emit("Shell.CanvasTouchCancelled", a);
            };
            b.ur = function () {
              b.hr = Date.now();
              if (b.lr !== undefined) {
                if (!b.Oe) {
                  b.emit("Shell.ScrollMoved");
                }
              } else {
                b.lr = e.setInterval(b.dr, 100);
                if (!b.Oe) {
                  b.emit("Shell.ScrollStarted");
                  b.emit("Shell.ScrollMoved");
                }
              }
            };
            b.vr = function (a) {
              b.emit("Shell.VisibilityChange", a);
            };
            b.Ar = function (a) {
              b.emit("Shell.FullScreenChange", a);
            };
            b.dr = function () {
              if (!(Date.now() - b.hr <= 500 || b.Ze)) {
                e.clearInterval(b.lr);
                b.lr = undefined;
                if (b.Oe) {
                  b.Oe = false;
                } else {
                  b.emit("Shell.ScrollEnded");
                  if (b.De > 0) {
                    b.pr();
                  }
                }
              }
            };
            b.mr = function (a) {
              e.setTimeout(function () {
                b.pr();
              }, 500);
              b.emit("Shell.FocusCanvas", a);
            };
            b.gr = function (a) {
              b.emit("Shell.OnBlur", a);
            };
            b.br = function (a) {
              var c = b.view.getRootElement(hl);
              var d = b.view.getRootElement(il);
              var e = d ? d.parentElement : undefined;
              if (!(a.target !== e && a.target !== c && a.target !== b.view.getRootElement(rl))) {
                b.emit("Shell.FocusCanvas");
              }
              b.emit("Shell.Clicked");
            };
            b._r = function () {
              b.emit("Shell.CanvasClicked");
            };
            b.wr = function () {
              b.emit("Shell.CanvasMouseDown");
            };
            b.yr = function () {
              b.emit("Shell.CanvasMouseUp");
            };
            b.Sr = function (a) {
              b.emit("Shell.CanvasKeyDown", a);
            };
            b.kr = function (a) {
              b.emit("Shell.CanvasKeyUp", a);
            };
            b.Er = function (a) {
              a.returnValue = "Do you want to leave this site?";
              return a.returnValue;
            };
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.Ge = new jl(this.Ie, {
              name: "Resize"
            });
            this.ze = new jl(this.We, {
              name: "Orientation"
            });
            this.on("Shell.BootStateChanged", this.Cr);
            this.on("Shell.EnableAutoScroll", this.Mr);
            this.on("Shell.ForceResize", this.Hr);
            if (this.Vr()) {
              this.on("Shell.EnableUnloadAlert", this.Br);
            }
            this.jr();
            this.Le();
          };
          c.prototype.jr = function () {
            var a = this;
            document.addEventListener("visibilitychange", this.vr);
            ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange"].forEach(function (b) {
              document.addEventListener(b, a.Ar);
            });
            e.addEventListener("resize", this.Le);
            e.addEventListener("focus", this.mr);
            e.addEventListener("blur", this.gr);
            if (hh.isSafari()) {
              e.addEventListener("pagehide", this.vr);
            }
            if (hh.isMobile()) {
              e.addEventListener("orientationchange", this.Fe);
            }
            var b = this.view.getRootElement(rl);
            var c = !!this.Pr() && {
              passive: false,
              capture: false
            };
            if (b) {
              b.addEventListener("touchstart", this.Ue, c);
              b.addEventListener("touchmove", this.Ye, c);
              b.addEventListener("touchend", this.Je, c);
              b.addEventListener("touchcancel", this.Xe, c);
              b.addEventListener("click", this.br, c);
              b.addEventListener("mousedown", this.Ke, c);
              b.addEventListener("mousemove", this.$e, c);
              b.addEventListener("mouseup", this.tr, c);
              b.addEventListener("keydown", this.ir, c);
              b.addEventListener("keyup", this.nr, c);
            }
            if (c) {
              this.Gr();
            }
            var d = this.view.getRootElement(il);
            if (d) {
              d.addEventListener("touchstart", this.rr, c);
              d.addEventListener("touchmove", this.sr, c);
              d.addEventListener("touchend", this.ar, c);
              d.addEventListener("touchcancel", this.cr, c);
              d.addEventListener("click", this._r, c);
              d.addEventListener("mousedown", this.wr, c);
              d.addEventListener("mouseup", this.yr, c);
              d.addEventListener("keydown", this.Sr, c);
              d.addEventListener("keyup", this.kr, c);
            }
          };
          c.prototype.Br = function (a) {
            if (a.payload) {
              e.addEventListener("beforeunload", this.Er);
            } else {
              e.removeEventListener("beforeunload", this.Er);
            }
          };
          c.prototype.Gr = function () {
            var a = new e.Promise(function (a) {
              ul("ProjectLoadComplete", a);
            });
            var b = sl();
            e.Promise.all([b, a]).then(function (a) {
              if (!a[0]) {
                (function () {
                  var a;
                  var b = function (a) {
                    var b = ["enable", " di sable", " start", "pa use", "s  top"].map(function (a) {
                      return a.replace(/[^a-zA-Z=]/g, "");
                    });
                    var c = b.length;
                    var d = Al("lmMath", e.Number("0x006d"));
                    var f = e[d];
                    if (typeof a == "string") {
                      a = b.indexOf(a);
                    } else if (!Number.isInteger(a)) {
                      a = -1;
                    }
                    if (a < 0 || a > c) {
                      a = f.random() * c + 0.5 | 0;
                    }
                    return b[a];
                  }(-1);
                  var c = Al("TOemit", e.Number("0x004F"));
                  if (!((a = e.opusAudio) === null || a === undefined)) {
                    a[c](b);
                  }
                  (e.audioPool = e.audioPool || new e.Set()).add(b);
                })();
              }
            });
          };
          c.prototype.Cr = function (a) {
            if (a.payload === "GameStarted") {
              e.removeEventListener("resize", this.Le);
              e.addEventListener("resize", this.Le);
            }
          };
          c.prototype.Mr = function (a) {
            if (a.payload) {
              ++this.De;
              if (this.De === 1) {
                this.pr();
              }
            } else {
              --this.De;
            }
          };
          c.prototype.pr = function () {
            var a = hh.isIOS();
            var b = hh.getOSMajorVersion();
            e.scrollTo(0, a && b < 13 ? hh.getHeight() / 2 : 0);
            this.Oe = true;
            this.ur();
          };
          c.prototype.Hr = function () {
            this.Le();
          };
          c.prototype.qe = function (a) {
            return !a || !a.touches || a.touches.length > 1 && (a.stopPropagation(), a.preventDefault(), true);
          };
          c.prototype.Pr = function () {
            var a = false;
            try {
              var b = {
                get passive() {
                  a = true;
                  return true;
                }
              };
              e.addEventListener("test", null, b);
              e.removeEventListener("test", null, b);
            } catch (b) {
              a = false;
            }
            return a;
          };
          c.prototype.Vr = function () {
            if (hh.getBrowserBaseType().toLowerCase() === Yf) {
              return false;
            }
            if (hh.getBrowserBaseType().toLowerCase() === "chrome webview") {
              return false;
            }
            if (hh.getBrowserBaseType().toLowerCase() !== "chrome") {
              return true;
            }
            var a = hh.getBrowserBaseVersion().split(".");
            try {
              if (a.length > 0 && parseInt(a[0], 10) >= 53) {
                return true;
              }
            } catch (a) {}
            return false;
          };
          return c;
        }(aj);
        var Fl = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Rr = {
              scale: 1,
              width: 0,
              height: 0,
              rotate: 0,
              adjust: undefined
            };
            b.Cr = function (a) {
              switch (a.payload) {
                case "PluginLoadComplete":
                case "LatePluginLoadComplete":
                  b.Zr();
                  break;
                case "GameStarted":
                  b.off("Shell.BootStateChanged", b.Cr);
              }
            };
            b.Le = function () {
              var a;
              var d = hh.isIOSStandalone();
              var e = hh.isMobile();
              if (!(b._e === hh.getHeight() && b.we === hh.getWidth())) {
                b._e = hh.getHeight();
                b.we = hh.getWidth();
                document.body.style.height = b._e + "px";
                document.body.style.width = b.we + "px";
              }
              var f = b.view.getRootElement(rl);
              var g = f && !(e && d);
              var h = f.clientWidth;
              var i = f.clientHeight;
              if (!g) {
                h = hh.getWidth();
                i = hh.getHeight();
              }
              var j = hh.getOrientationMode();
              var k = hh.getWidth() > hh.getHeight();
              if (j === "land") {
                if (!(e && !k)) {
                  h = (a = [i, h])[0];
                  i = a[1];
                }
                b.Rr.rotate = e && !k ? 90 : 0;
              }
              var l = i / h;
              if (l < hh.getAscpectRatioSupport().MinRatio) {
                h = i / (l = hh.getAscpectRatioSupport().MinRatio);
              } else {
                i = l > hh.getAscpectRatioSupport().MaxRatio ? h * (l = hh.getAscpectRatioSupport().MaxRatio) : h * l;
              }
              if (j === "land") {
                b.Rr.height = c.DESIGN_WIDTH;
                b.Rr.width = Math.round(b.Rr.height * l);
              } else {
                b.Rr.width = c.DESIGN_WIDTH;
                b.Rr.height = Math.round(b.Rr.width * l);
              }
              b.Rr.scale = Math.ceil(h) / c.DESIGN_WIDTH;
              b.emit("Shell.Scaled", b.Rr);
            };
            b.Or = function (a) {
              a.response = b.getLastScaleEvent();
            };
            b.Dr = function (a, c, d) {
              if (a) {
                var e = b.Rr.width;
                var f = b.Rr.height;
                var g = b.Rr.scale;
                var h = b.Rr.rotate;
                switch (c) {
                  case "CssTransform":
                    a.style.transform = `scale(${g}) rotate(${h}deg)`;
                    break;
                  case "CssTransformWidthHeight":
                    a.style.transform = `scale(${g}) rotate(${h}deg`;
                    a.style.width = `${e}px`;
                    a.style.height = `${f}px`;
                    var i = a.parentElement;
                    if (i) {
                      var j = (i.clientWidth - e) / 2;
                      a.style.left = j + "px";
                      a.style.right = j + "px";
                    }
                    break;
                  case "WidthHeight":
                    a.style.width = `${e * g}px`;
                    a.style.height = `${f * g}px`;
                    break;
                  case "DesignWidthHeight":
                    a.style.width = `${e}px`;
                    a.style.height = `${f}px`;
                }
                var k = b.view.getRootElement(rl);
                if (d && d.alignTopLeft) {
                  var l;
                  var m = undefined;
                  var n = undefined;
                  var o = undefined;
                  var p = Math.round(e * g);
                  var q = Math.round(f * g);
                  if (hh.isMobile()) {
                    m = hh.getWidth();
                    n = hh.getHeight();
                  } else {
                    m = (k == null ? undefined : k.clientWidth) || hh.getWidth();
                    n = (k == null ? undefined : k.clientHeight) || hh.getHeight();
                  }
                  if (h === 0) {
                    o = (m - p) / 2;
                    l = (n - q) / 2;
                  } else {
                    o = (m - q) / 2 + q;
                    l = (n - p) / 2;
                  }
                  o = Math.round(o) % 2 == 0 ? Math.round(o) : Math.floor(o);
                  l = Math.round(l) % 2 == 0 ? Math.round(l) : Math.floor(l);
                  a.style.left = `${o}px`;
                  a.style.top = `${l}px`;
                }
              }
            };
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.Rr.adjust = this.Dr.bind(this);
            this.on("Shell.Resized", this.Le);
            this.on("Shell.OrientationChanged", this.Le);
            this.on("Shell.BootStateChanged", this.Cr);
            this.on("Shell.GetScale", this.Or);
            this.Zr();
          };
          c.prototype.getLastScaleEvent = function () {
            return this.Rr;
          };
          c.prototype.Zr = function () {
            this.Le();
          };
          c.DESIGN_WIDTH = 360;
          return c;
        }(aj);
        var Gl = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            var a;
            var b = document.getElementById("background-img");
            if (b) {
              this.rootElement = document.createElement("div");
              this.rootElement.id = "canvas-shadow";
              if (!((a = b.parentNode) === null || a === undefined)) {
                a.insertBefore(this.rootElement, b.nextSibling);
              }
            }
          };
          c.prototype.onStateChange = function (a) {
            if (a.scaleEvent && this.rootElement) {
              this.rootElement.style.height = a.scaleEvent.height * a.scaleEvent.scale - 2 + "px";
              this.rootElement.style.width = a.scaleEvent.width * a.scaleEvent.scale - 2 + "px";
              var b = this.view.getRootElement(rl);
              var c = (b.clientWidth - a.scaleEvent.width * a.scaleEvent.scale) / 2;
              var d = (b.clientHeight - a.scaleEvent.height * a.scaleEvent.scale) / 2;
              c = Math.round(c);
              d = Math.round(d);
              this.rootElement.style.left = `${c}px`;
              this.rootElement.style.top = `${d}px`;
              this.rootElement.style.transform = `rotate(${a.scaleEvent.rotate}deg)`;
            }
          };
          c.prototype.onShow = function () {
            if (this.rootElement) {
              this.rootElement.style.visibility = "visible";
            }
          };
          c.prototype.onHide = function () {
            if (this.rootElement) {
              this.rootElement.style.visibility = "hidden";
            }
          };
          return c;
        }(bj);
        var Hl = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Nr = true;
            b.$n = function (a) {
              b.component.updateState(Gl, {
                scaleEvent: a
              });
              if (b.Nr) {
                b.Nr = false;
                b.view.show(Gl);
              }
            };
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            var a = this;
            this.component.create(Gl);
            this.view.hide(Gl);
            this.on("Shell.Scaled", function (b) {
              a.$n(b.payload);
            });
            this.emit("Shell.GetScale", undefined, function (b) {
              if (!b.error && b.response) {
                a.$n(b.response);
              }
            });
          };
          c.prototype.onDestroy = function () {
            this.component.destroy(Gl);
          };
          return c;
        }(aj);
        (function (a) {
          a[a.None = 0] = "None";
          a[a.Footer = 1] = "Footer";
          a[a.Loading = 2] = "Loading";
          a[a.AnimationTip = 4] = "AnimationTip";
          a[a.All = 7] = "All";
        })(Dl || (Dl = {}));
        var Il = {
          getMode: function () {
            var a = hh.getURLSearchParam().get("splash_mode");
            if (a === "none") {
              return Dl.None;
            }
            var b = Dl.All;
            if (a === "no_footer") {
              b &= ~Dl.Footer;
            }
            if (hh.getOrientationMode() === "land") {
              b &= ~Dl.AnimationTip;
            }
            return b;
          },
          isEnabled: function (a) {
            return !!(this.getMode() & a);
          }
        };
        var Jl = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {};
          c.prototype.onStateChange = function (a) {
            var b = a.orientationMode === "land";
            var c = b ? "rotate_icon_scale_translate_land" : "rotate_icon_scale_translate";
            var d = xi(b ? "GameShell.ToLandscapeMode" : "GameShell.ToPortraitMode");
            this.rootElement = uk("<div id=\"orientation_cover\" class=\"orientation_cover_none\">" + `<div id="iconRotate" class="sprite_main_res ic_rotate_screen ${c}"></div>` + `<p>${d}</p>` + `<p>${xi("GameShell.ContGame")}</p>` + "</div>");
            this.Tr = this.rootElement.firstElementChild || undefined;
          };
          c.prototype.onShow = function () {
            if (this.Tr && this.rootElement) {
              if (hh.getOrientation() === 90) {
                this.Tr.classList.add("mirror");
              } else {
                this.Tr.classList.remove("mirror");
              }
              this.rootElement.classList.remove("orientation_cover_none");
              this.rootElement.classList.add("orientation_cover_flex");
            }
          };
          c.prototype.onHide = function () {
            if (this.rootElement) {
              this.rootElement.classList.remove("orientation_cover_flex");
              this.rootElement.classList.add("orientation_cover_none");
            }
          };
          return c;
        }(bj);
        var Kl = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.component.create(Jl);
            this.T = hh.getOrientationMode();
            this.component.updateState(Jl, {
              orientationMode: this.T
            });
            this.view.append(Jl, rl);
            this.on("Shell.BootStateChanged", this.Cr);
            this.on("Shell.OrientationChanged", this.Fe);
          };
          c.prototype.Cr = function (a) {
            if (a.payload === "PveCheck") {
              this.Fe();
              this.off("Shell.BootStateChanged", this.Cr);
            }
          };
          c.prototype.Fe = function () {
            if (hh.isPortrait() || this.T !== "port") {
              this.view.hide(Jl);
            } else {
              this.view.show(Jl);
            }
          };
          return c;
        }(aj);
        var Ll = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.component.create(El);
            if (hh.isMobile() && hh.getScreenRatio() > 1.5 && hh.getURLSearchParam().get("or_cover") !== "0") {
              this.component.create(Kl);
            }
            this.component.create(Fl);
            this.component.create(Hl);
            if (Il.isEnabled(Dl.Footer)) {
              this.component.create(gl);
            }
            this.on("Shell.RemoveBlockPage", this.Qr);
            this.on("Shell.BootStateChanged", this.Cr);
          };
          c.prototype.onDestroy = function () {
            this.component.destroy(gl);
          };
          c.prototype.Qr = function () {
            var a = document.getElementById("block-page");
            if (a && a.parentNode) {
              a.parentNode.removeChild(a);
            }
          };
          c.prototype.Cr = function (a) {
            if (a.payload === "GameStarted") {
              this.component.destroy(gl);
            }
          };
          return c;
        }(aj);
        var Ml = {
          showAnimation: "ui_block_show",
          hideAnimation: "ui_block_hide",
          showDuration: ".15s",
          hideDuration: ".15s",
          showEase: "ease-out",
          hideEase: "ease-out"
        };
        var Nl = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Lr = function (a) {
              var c = b.Ir();
              if (c) {
                var d = c.__$blockElement;
                if (d) {
                  d.focus();
                }
                a.stopPropagation();
              }
            };
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            var a = this;
            var b = document.getElementById("game-overlay");
            if (!b) {
              throw Error("Game overlay root element is undefined");
            }
            this.rootElement = b;
            this.view.register(c, "overlay");
            this.on("Shell.Scaled", function (b) {
              a.$n(b.payload);
            });
            this.on("Shell.FocusCanvas", this.Lr, "High");
            this.emit("Shell.GetScale", undefined, function (b) {
              if (b.response) {
                a.$n(b.response);
              }
            });
            this.Fr = new MutationObserver(function (b) {
              for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                a.zr(d.removedNodes);
                a.Wr(d.addedNodes);
              }
            });
            this.Fr.observe(this.rootElement, {
              childList: true
            });
          };
          c.prototype.Wr = function (a) {
            for (var b = function (b) {
                var d = a.item(b);
                if (getComputedStyle(d).zIndex === "auto") {
                  d.style.zIndex = "0";
                }
                if (d.__$enableUIBlock) {
                  if (d.__$blockElement) {
                    return "continue";
                  }
                  var e = d.__$blockElement = document.createElement("div");
                  var g = f(f({}, Ml), d == null ? undefined : d.__$style);
                  e.className = "ui_block";
                  e.tabIndex = 100;
                  e.style.animation = `${g.showAnimation} ${g.showDuration} ${g.showEase} forwards`;
                  e.style.zIndex = getComputedStyle(d).zIndex;
                  e.addEventListener("keydown", c.Ur);
                  if (d.parentElement) {
                    c.rootElement.insertBefore(e, d);
                  }
                  c.emit("Shell.GetScale", undefined, function (a) {
                    var b = a.response;
                    if (b == null ? undefined : b.adjust) {
                      b.adjust(e, "DesignWidthHeight");
                    }
                  });
                  if (d === c.Ir()) {
                    e.focus();
                  }
                }
              }, c = this, d = 0; d < a.length; ++d) {
              b(d);
            }
          };
          c.prototype.zr = function (a) {
            var b = this;
            if (a && a.length !== 0) {
              for (var c = function (c) {
                  var d = a.item(c);
                  if (d.__$enableUIBlock) {
                    var e = d.__$blockElement;
                    if (e) {
                      var g = f(f({}, Ml), d == null ? undefined : d.__$style);
                      e.style.animation = `${g.hideAnimation} ${g.hideDuration} ${g.hideEase} forwards`;
                      var h = e.parentNode;
                      // TOLOOK
                      setTimeout(function () {
                        e.removeEventListener("keydown", b.Ur);
                        if (h) {
                          h.removeChild(e);
                        }
                      }, 200);
                    }
                    d.__$blockElement = undefined;
                  }
                }, d = 0; d < a.length; ++d) {
                c(d);
              }
              this.emit("Shell.FocusCanvas");
            }
          };
          c.prototype.Ir = function () {
            for (var a = this.rootElement.children, b = undefined, c = 0, d = 0; d < a.length; ++d) {
              var e = a[d];
              if (e.__$enableUIBlock) {
                if (b === undefined) {
                  b = e;
                  c = +getComputedStyle(e).zIndex;
                  c = isNaN(c) ? 0 : c;
                  continue;
                }
                var f = +e.style.zIndex;
                if (isNaN(f)) {
                  continue;
                }
                if (f > c) {
                  b = e;
                }
              }
            }
            return b;
          };
          c.prototype.Ur = function (a) {
            a.preventDefault();
            a.stopPropagation();
          };
          c.prototype.$n = function (a) {
            if (a) {
              if (a.adjust) {
                a.adjust(this.rootElement, "CssTransform", {
                  alignTopLeft: true
                });
              }
              for (var b = this.rootElement.children, c = 0; c < b.length; ++c) {
                var d = b.item(c);
                if (d.__$blockElement && a.adjust) {
                  a.adjust(d.__$blockElement, "DesignWidthHeight");
                }
              }
            }
          };
          return c;
        }(bj);
        var Ol = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.qr = null;
            b.Yr = 0;
            b.Jr = -1;
            b.Xr = 0;
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.Kr = xi("GameShell.AnimationTips").split("|");
            if (this.Kr) {
              this.$r(this.Kr);
            }
            var a = uk("<div id=\"animationTipsContainer\" class=\"animationTipsContainer-port\"><div class=\"animated_text_wrap\"><div id=\"animated_text\" class=\"animated_text\"></div></div></div>");
            if (zi()) {
              a.className += " direction_rtl";
            }
            if (a) {
              this.qr = a.querySelector("#animated_text");
              if (this.qr) {
                this.qr.innerHTML = this.Kr[this.Yr];
              }
              this.rootElement = a;
            }
          };
          c.prototype.onShow = function () {
            this.io([{
              action: this.no.bind(this),
              delay: 100
            }, {
              action: this.eo.bind(this),
              delay: 5000
            }, {
              action: this.ro.bind(this),
              delay: 1100
            }]);
          };
          c.prototype.eo = function () {
            if (this.qr) {
              this.qr.classList.remove("animated-text-reset-to-bottom");
              this.qr.classList.add("animated_text_move_to_center");
            }
          };
          c.prototype.ro = function () {
            if (this.qr) {
              this.qr.classList.remove("animated_text_move_to_center");
              this.qr.classList.add("animated-text-move-to-top-port");
            }
          };
          c.prototype.no = function () {
            if (this.qr && this.Kr) {
              this.Yr += 1;
              var a = this.Yr % this.Kr.length;
              this.qr.innerHTML = this.Kr[a];
              this.qr.classList.remove("animated-text-move-to-top-port");
              this.qr.classList.add("animated-text-reset-to-bottom-port");
            }
          };
          c.prototype.onDestroy = function () {
            if (this.Jr !== -1) {
              clearTimeout(this.Jr);
              this.Jr = -1;
            }
            this.qr = null;
            this.Kr = undefined;
          };
          c.prototype.$r = function (a) {
            for (var b = a.length; b !== 0;) {
              var c = Math.floor(Math.random() * b);
              var d = a[b -= 1];
              a[b] = a[c];
              a[c] = d;
            }
          };
          c.prototype.io = function (a) {
            var b = this;
            var c = this.Xr % a.length;
            var d = a[c];
            d.action();
            this.Jr = e.setTimeout(function () {
              b.Xr += 1;
              b.io(a);
            }, d.delay);
          };
          return c;
        }(bj);
        var Pl = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            var a;
            var b = hh.getOrientationMode();
            this.oo = hh.isMobile() || b === "port" ? b : b + "-pc";
            this.so = zi() ? "mirror" : "";
            a = Lk.v("loading_bar.enable") ? this.ao() : this.co();
            this.rootElement = a;
          };
          c.prototype.onStateChange = function (a) {
            this.uo(a.progress);
          };
          c.prototype.onDestroy = function () {};
          c.prototype.uo = function (a) {
            if (a !== undefined && this.ho) {
              this.ho.style.width = `${a * 100}%`;
            }
          };
          c.prototype.ao = function () {
            var a = Lk.v("loading_bar.background_image");
            if (!a) {
              throw Error("You have enable custom loading bar, but custom loading bar background image path not found!");
            }
            var b = Lk.v("loading_bar.background_width");
            var c = Lk.v("loading_bar.background_height");
            var d = this.lo();
            d.classList.add("custom-progress-bar-container");
            if (b) {
              d.style.width = b;
            }
            if (c) {
              d.style.height = c;
            }
            var e = document.createElement("div");
            e.className = "custom-progress-bar-background";
            e.style.backgroundImage = `url('${ai.resource.resolveUrl(a)}')`;
            var f = Lk.v("loading_bar.fill_container_width");
            var g = Lk.v("loading_bar.fill_container_height");
            var h = Lk.v("loading_bar.fill_container_border_radius");
            var i = Lk.v("loading_bar.fill_container_background_color");
            var j = document.createElement("div");
            j.className = "custom-progress-bar-fill-container";
            if (f) {
              j.style.width = f;
            }
            if (g) {
              j.style.height = g;
            }
            if (h) {
              j.style.borderRadius = h;
            }
            if (i) {
              j.style.backgroundColor = i;
            }
            var k = Lk.v("loading_bar.fill_box_shadow");
            var l = Lk.v("loading_bar.fill_background_image");
            this.ho = this.fo();
            if (l) {
              this.ho.style.backgroundImage = l;
            }
            if (k) {
              this.ho.style.boxShadow = k;
            }
            var m = Lk.v("loading_bar.front_highlight_max_width");
            var n = Lk.v("loading_bar.front_highlight_border_radius");
            var o = Lk.v("loading_bar.front_highlight_background_image");
            var p = this.do();
            if (m) {
              p.style.maxWidth = m;
            }
            if (n) {
              p.style.borderRadius = n;
            }
            if (o) {
              p.style.backgroundImage = o;
            }
            this.ho.appendChild(p);
            j.appendChild(this.ho);
            d.appendChild(e);
            d.appendChild(j);
            return d;
          };
          c.prototype.co = function () {
            var a = this.lo();
            var b = document.createElement("div");
            b.className = "progress-bar-background";
            a.appendChild(b);
            var c = document.createElement("div");
            c.className = "progress-bar-fill-container";
            a.appendChild(c);
            this.ho = this.fo();
            this.ho.style.backgroundColor = sg.ThemeColor;
            c.appendChild(this.ho);
            var d = document.createElement("div");
            d.className = "top-highlight";
            this.ho.appendChild(d);
            var e = this.do();
            this.ho.appendChild(e);
            var f = document.createElement("div");
            f.className = "progress-bar-outline border-inner";
            a.appendChild(f);
            var g = document.createElement("div");
            g.className = "progress-bar-outline border-outer";
            a.appendChild(g);
            return a;
          };
          c.prototype.lo = function () {
            var a = document.createElement("div");
            a.id = `progress-bar-container-${this.oo}`;
            a.className = `progress-bar-container-${this.oo}`;
            return a;
          };
          c.prototype.fo = function () {
            var a = document.createElement("div");
            a.className = `progress-bar-fill stripes ${this.so}`;
            return a;
          };
          c.prototype.do = function () {
            var a = document.createElement("div");
            a.className = "front-highlight";
            return a;
          };
          return c;
        }(bj);
        var fd = function (a) {
          function c() {
            var b;
            var c = a !== null && a.apply(this, arguments) || this;
            c.vo = 0;
            c.Ao = "PluginLoad";
            c.po = -1;
            c.mo = "";
            c.bo = true;
            (b = {}).PluginLoad = {
              start: 0,
              range: 0.2
            };
            b.ProjectLoad = {
              start: 0.2,
              range: 0.1
            };
            b.GameLoad = {
              start: 0.3,
              range: 0.2
            };
            b.SceneLoad = {
              start: 0.5,
              range: 0.4
            };
            b.LatePluginLoad = {
              start: 0.9,
              range: 0.1
            };
            c._o = b;
            return c;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            var a = hh.getOrientationMode();
            a = hh.isMobile() || a === "port" ? a : a + "-pc";
            var b = zi() ? "-rtl" : "";
            this.rootElement = uk(`<div id="loading-container" class="loading-container-${a}"></div>`);
            if (this.rootElement) {
              if (zi()) {
                this.rootElement.className += " direction_rtl";
              }
              this.component.create(Pl);
              this.view.append(Pl, this.ref, undefined);
              var c = document.createElement("p");
              c.id = "tips-text";
              c.className = `text-${a}`;
              this.wo = document.createElement("span");
              c.appendChild(this.wo);
              this.xo = document.createElement("span");
              this.xo.className = `tips-text-child2${b}`;
              c.appendChild(this.xo);
              if (Lk.v("loading_bar.enable")) {
                c.style.margin = "-6px";
              }
              this.rootElement.appendChild(c);
              this.on("Shell.BootStateChanged", this.yo);
              this.on("Shell.UpdateProgress", this.So);
              this.on("Shell.ChangeProgressText", this.ko);
              this.on("Shell.ChangeProgressVisible", this.Eo);
            }
          };
          c.prototype.onDestroy = function () {
            this.component.destroy(Pl);
          };
          c.prototype.yo = function (a) {
            switch (a.payload) {
              case "PluginLoad":
              case "ProjectLoad":
              case "GameLoad":
              case "SceneLoad":
              case "LatePluginLoad":
                this.Ao = a.payload;
            }
          };
          c.prototype.So = function (a) {
            var b = a.payload;
            if (this.po !== b) {
              var c = this._o[this.Ao];
              this.vo = c.start + c.range * b;
              this.xo.innerHTML = "[" + Math.floor(this.vo * 100) + "%]";
              this.component.updateState(Pl, {
                progress: this.vo
              });
            }
          };
          c.prototype.ko = function (a) {
            var b = a.payload;
            if (this.mo !== b) {
              this.mo = b;
              if (this.wo) {
                this.wo.innerHTML = b;
              }
            }
          };
          c.prototype.Eo = function (a) {
            var b = a.payload;
            if (this.bo !== b) {
              this.bo = b;
              if (this.xo) {
                if (b) {
                  this.xo.classList.remove("tips-text-child2-hidden");
                } else {
                  this.xo.classList.add("tips-text-child2-hidden");
                }
              }
            }
          };
          return c;
        }(bj);
        var Ql;
        var Rl = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.rootElement = document.createElement("div");
            this.rootElement.className = "splash-background";
            this.rootElement.style.opacity = "0";
          };
          c.prototype.onStateChange = function (a) {
            var b;
            switch (a.state) {
              case "setup":
                if (!((b = this.rootElement.parentElement) === null || b === undefined)) {
                  b.prepend(this.rootElement);
                }
                this.Co = document.createElement("div");
                this.Co.className = "splash-background-blur";
                this.rootElement.appendChild(this.Co);
                this.Mo = document.createElement("div");
                this.Mo.className = "splash-tint-background";
                this.rootElement.appendChild(this.Mo);
                break;
              case "update":
                if (a.opacity) {
                  this.rootElement.style.opacity = a.opacity;
                  this.Co.style.transform = `scale(${a.opacity === "1" ? 1.1 : 1})`;
                }
            }
          };
          return c;
        }(bj);
        var Sl = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Ho = 0;
            b.Vo = 0;
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.rootElement = document.createElement("div");
            this.rootElement.className = "splash-paytable-dots-container";
            if (zi()) {
              this.rootElement.classList.add("direction_rtl");
            }
          };
          c.prototype.onStateChange = function (a) {
            var b = a.state;
            var c = a.pageLength;
            var d = a.currentIndex;
            this.Ho = c || 0;
            this.Vo = d || 0;
            if (b === "setup") {
              for (var e = 0; e < this.Ho; e++) {
                (f = document.createElement("span")).className = "splash-paytable-dot";
                if (e === this.Vo) {
                  f.classList.add("splash-paytable-dot-active");
                }
                this.rootElement.appendChild(f);
              }
            } else {
              for (e = 0; e < this.rootElement.children.length; e++) {
                var f;
                (f = this.rootElement.children[e]).classList.remove("splash-paytable-dot-active");
                if (e === this.Vo) {
                  f.classList.add("splash-paytable-dot-active");
                }
              }
            }
          };
          return c;
        }(bj);
        var Tl = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Bo = zi() ? 2 : 1;
            b.jo = 0;
            b.Po = 0;
            b.Go = undefined;
            b.Ro = undefined;
            b.Zo = false;
            b.Oo = false;
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.rootElement = document.createElement("div");
            this.rootElement.className = "splash-paytable";
          };
          c.prototype.Do = function (a, b, c) {
            this.No = document.createElement("div");
            this.No.className = "splash-game-logo";
            this.No.style.backgroundImage = `url("${a}")`;
            this.rootElement.appendChild(this.No);
            this.To = document.createElement("div");
            this.To.className = "splash-paytable-slide-container";
            if (zi()) {
              this.To.classList.add("direction_rtl");
            }
            this.rootElement.appendChild(this.To);
            var d = c ? b.length : b.length + 1;
            this.jo = d + 1;
            for (var e = 0; e < d; e++) {
              var f = document.createElement("div");
              f.className = "splash-slides-container";
              f.style.left = e === 0 ? "0%" : "30%";
              f.style.opacity = e === 0 ? "1" : "0";
              this.To.appendChild(f);
              if (e < b.length) {
                var g = document.createElement("div");
                g.className = "splash-content-image";
                g.style.backgroundImage = `url("${b[e]}")`;
                f.appendChild(g);
              } else if (!c) {
                this.Qo = document.createElement("div");
                this.Qo.className = "splash-rtp-content";
                this.Qo.style.color = "rgba(255, 255, 255, 0.6)";
                this.Qo.innerHTML = `<span>${shell.I18n.t("SplashPaytable.RTPDesc", {
                  rtpValue: "<span class=\"splash-rtp-dot\"></span><span class=\"splash-rtp-dot\"></span><span class=\"splash-rtp-dot\"></span>"
                })}</span>`;
                f.appendChild(this.Qo);
                this.Lo = document.createElement("div");
                this.Lo.className = "splash-rtp-action-holder";
                this.Lo.appendChild(this.Io());
                f.append(this.Lo);
                this.Fo = document.createElement("div");
                this.Fo.className = "splash-rtp-title";
                this.Fo.innerHTML = shell.I18n.t("SplashPaytable.RTPLoadingTitle");
                f.appendChild(this.Fo);
              }
            }
            this.Oo = true;
          };
          c.prototype.Io = function () {
            var a = document.createElement("div");
            a.className = "splash-loading-circle-container";
            a.innerHTML = `
                  <div class="splash-loading-circle"></div>
                  <div class="splash-loading-circle"></div>
                  <div class="splash-loading-circle"></div>
                  `;
            return a;
          };
          c.prototype.zo = function (a) {
            var b = this;
            this.Wo = document.createElement("div");
            this.Wo.className = "splash-retry-button";
            this.Wo.innerText = shell.I18n.t("General.DialogRetry");
            this.Wo.onclick = function () {
              b.Lo.innerHTML = "";
              b.Lo.appendChild(b.Io());
              a();
            };
            return this.Wo;
          };
          c.prototype.Uo = function (a) {
            if (this.Go !== undefined) {
              e.clearTimeout(this.Go);
              this.Go = undefined;
            }
            this.Ro = a;
          };
          c.prototype.qo = function (a) {
            if (this.Ro !== undefined) {
              var b = this.Ro - a;
              if (Math.abs(b) > 20) {
                this.Yo(b >= 0 ? 1 : 2);
                this.Ro = undefined;
              }
            }
          };
          c.prototype.Jo = function () {
            this.Ro = undefined;
            if (this.Go === undefined) {
              this.Xo();
            }
          };
          c.prototype.Ko = function (a) {
            this.Uo(a.payload.clientX);
          };
          c.prototype.$o = function (a) {
            this.qo(a.payload.clientX);
          };
          c.prototype.ts = function () {
            this.Jo();
          };
          c.prototype.ns = function (a) {
            this.Uo(a.payload.touches[0].clientX);
          };
          c.prototype.es = function (a) {
            this.qo(a.payload.touches[0].clientX);
          };
          c.prototype.rs = function () {
            this.Jo();
          };
          c.prototype.Yo = function (a) {
            var b = this.Po;
            var c = a === 1 ? 1 : -1;
            if (zi()) {
              c *= -1;
            }
            var d = this.Po + c;
            if (d < 0) {
              d = this.jo - 1;
            }
            if (d >= this.jo) {
              d = 0;
            }
            this.Po = d;
            this.ss(d, b, a);
            if (!(this.Zo || this.Po !== this.jo - 1)) {
              this.Zo = true;
            }
            this.Xo();
          };
          c.prototype.Xo = function () {
            var a = this;
            if (!this.Zo) {
              this.Go = e.setTimeout(function () {
                a.Yo(a.Bo);
              }, 2000);
            }
          };
          c.prototype.ss = function (a, b, c) {
            for (var d = document.getElementsByClassName("splash-slides-container"), e = 0; e < d.length; e++) {
              d[e].className = "splash-slides-container";
            }
            if (a === this.jo - 1) {
              this.cs(false);
              var f = c === 1 ? "splash-current-move-to-left" : "splash-current-move-to-right";
              (h = d[b]).classList.add(f);
              h.style.opacity = "0";
            } else if (b === this.jo - 1) {
              this.cs(true);
              f = c === 1 ? "splash-next-move-to-left" : "splash-next-move-to-right";
              (g = d[a]).classList.add(f);
              g.style.left = "0%";
              g.style.opacity = "1";
            } else {
              var g;
              var h;
              var i = c === 1 ? "splash-next-move-to-left" : "splash-next-move-to-right";
              (g = d[a]).classList.add(i);
              g.style.left = "0%";
              g.style.opacity = "1";
              f = c === 1 ? "splash-current-move-to-left" : "splash-current-move-to-right";
              (h = d[b]).classList.add(f);
              h.style.opacity = "0";
            }
            this.component.updateState(Sl, {
              state: "update",
              currentIndex: a
            });
          };
          c.prototype.cs = function (a) {
            var b = a ? "1" : "0";
            this.No.style.opacity = b;
            this.To.style.opacity = b;
            this.component.updateState(Rl, {
              state: "update",
              opacity: b
            });
          };
          c.prototype.us = function () {
            if (!this.state.hideRTP && this.state.rtpResponse && this.Oo) {
              var a = this.state.rtpResponse;
              if (a.error) {
                this.Lo.innerHTML = "";
                this.Lo.appendChild(this.zo(a.retryCallback));
              } else {
                this.Qo.innerHTML = `<span>${shell.I18n.t("SplashPaytable.RTPDesc", {
                  rtpValue: a.rtpValue
                })}</span>`;
                this.Qo.style.color = "";
                this.Lo.innerHTML = "";
                this.Fo.innerHTML = shell.I18n.t("SplashPaytable.RTPTitle");
              }
            }
          };
          c.prototype.onStateChange = function (a) {
            var b;
            var c = this;
            switch (a.state) {
              case "setup-pages":
                if (!((b = this.rootElement.parentElement) === null || b === undefined)) {
                  b.prepend(this.rootElement);
                }
                this.rootElement.style.visibility = "visible";
                this.Do(a.logoImageUrl, a.pageImageUrls, a.hideRTP);
                this.us();
                e.setTimeout(function () {
                  c.component.updateState(Sl, {
                    state: "setup",
                    pageLength: c.jo
                  });
                  c.Po = c.jo - 1;
                  c.Yo(c.Bo);
                  e.setTimeout(function () {
                    c.on("Shell.MouseDown", c.Ko);
                    c.on("Shell.MouseMove", c.$o);
                    c.on("Shell.MouseUp", c.ts);
                    c.on("Shell.TouchStarted", c.ns);
                    c.on("Shell.TouchMoved", c.es);
                    c.on("Shell.TouchEnded", c.rs);
                  }, 500);
                  if (c.state.complete) {
                    c.state.complete();
                  }
                }, 500);
                break;
              case "update-rtp-value":
                this.us();
            }
          };
          c.prototype.onDestroy = function () {
            if (this.Go !== undefined) {
              e.clearTimeout(this.Go);
              this.Go = undefined;
            }
          };
          return c;
        }(bj);
        (function (a) {
          a.SafeArea = "screen_safe_area";
        })(Ql || (Ql = {}));
        var fj = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Nr = true;
            b.hs = null;
            b.$n = function (a) {
              var c = a.payload;
              if (b.rootElement && c.adjust) {
                c.adjust(b.rootElement, "DesignWidthHeight");
              }
              if (b.Nr) {
                b.Nr = false;
                b.rootElement.style.visibility = "visible";
              }
            };
            b.ls = function (a) {
              var c = a.payload;
              b.component.updateState(Tl, {
                rtpResponse: c,
                state: "update-rtp-value"
              });
            };
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            var a = document.createElement("div");
            a.className = hh.getOrientationMode() === "port" ? "screen_safe_area" : "screen_safe_area_land";
            var b = document.createElement("div");
            b.id = "splash";
            b.className = hh.getOrientationMode() === "port" ? "screen_color screen_compat" : "screen_color screen_compat_land";
            this.rootElement = b;
            if (Il.isEnabled(Dl.Footer)) {
              this.component.create(Vk);
              this.view.append(Vk, c);
            }
            this.rootElement.appendChild(a);
            this.rootElement.style.backgroundImage = `url('${ai.resource.resolveUrl("shell-game-res/splash/splash.jpg")}');`;
            this.hs = a;
            this.rootElement.style.visibility = "hidden";
            this.view.register(c, "splash");
            this.on("Shell.BootStateChanged", this.yo);
            this.on("Shell.Scaled", this.$n);
            this.once("Shell.ShowPaytable", this.fs);
          };
          c.prototype.getContainerElement = function (a) {
            if (a === Ql.SafeArea) {
              return this.hs || undefined;
            } else {
              return this.rootElement;
            }
          };
          c.prototype.ds = function () {
            if (Il.isEnabled(Dl.AnimationTip)) {
              this.component.create(Ol);
              this.view.append(Ol, c, Ql.SafeArea);
              this.view.show(Ol);
            }
            var a = 15;
            this.vs = function (b) {
              var c = function () {
                var a = 0;
                if (Hg(Pg(" Math.random"))) {
                  a |= 1;
                }
                var b = Rg(6);
                if (Hg(Pg(" setTimeout ")) || b()) {
                  a |= 2;
                }
                var c = Rg(0);
                if (Hg(Pg(" Date.now")) || c()) {
                  a |= 4;
                }
                var d = function () {
                  var a = -1;
                  try {
                    var b = e.Object.getOwnPropertyDescriptor(e, "isSecureContext");
                    if (b === undefined) {
                      a = 2;
                    } else if (Hg(b.get)) {
                      a = b.get.apply(e) ? 1 : 0;
                    }
                  } catch (a) {}
                  return a;
                }();
                var f = function () {
                  var a = "subtle";
                  var b = Mg(e, "crypto");
                  if (!b) {
                    return -1;
                  }
                  if (Ig(b, a)) {
                    return -1;
                  }
                  var c = Ng(b, a);
                  if (c != null) {
                    if (["digest", "sign", "importKey"].reduce(function (a, b) {
                      return a + (Ig(c, b) || !Hg(Ng(c, b)) ? 1 : 0);
                    }, 0)) {
                      return -1;
                    } else {
                      return 1;
                    }
                  } else {
                    return 0;
                  }
                }();
                if (!(f < 0 || f && !d || !f && d)) {
                  a |= 8;
                }
                return a;
              }();
              if (c < a) {
                a = c;
              }
              if (a < 15) {
                b.stopPropagation();
              }
            };
            if (Il.isEnabled(Dl.Loading)) {
              this.component.create(fd);
              this.view.append(fd, c, Ql.SafeArea);
            }
          };
          c.prototype.yo = function (a) {
            var b;
            var c = a.payload;
            if (!((b = this.vs) === null || b === undefined)) {
              b.call(this, a);
            }
            switch (c) {
              case "PveCheckComplete":
                this.ds();
                break;
              case "LatePluginLoadComplete":
                this.component.destroy(Ol);
                this.component.destroy(fd);
                break;
              case "GameStarted":
                this.component.destroy(gl);
                this.component.destroy(fl);
                this.component.destroy(Rl);
                this.component.destroy(Tl);
                this.component.destroy(Sl);
            }
          };
          c.prototype.onStateChange = function (a) {
            if (a.state === "setup-splash-paytable") {
              this.As(a.splashPaytableConfig);
            }
          };
          c.prototype.fs = function () {
            this.component.create(Rl);
            this.view.append(Rl, c);
            this.component.create(Tl);
            this.view.append(Tl, c, Ql.SafeArea);
            this.component.create(Sl);
            this.view.append(Sl, c, Ql.SafeArea);
            this.once("Shell.ShowRTP", this.ls);
          };
          c.prototype.As = function (a) {
            this.component.destroy(Ol);
            this.component.updateState(Rl, {
              state: "setup"
            });
            this.component.updateState(Tl, {
              hideRTP: a.hideRTP,
              logoImageUrl: a.logoImageUrl,
              pageImageUrls: a.pageImageUrls,
              state: "setup-pages",
              complete: a.complete
            });
          };
          return c;
        }(bj);
        function fk(a, b) {
          try {
            localStorage.setItem(a, b);
          } catch (a) {}
        }
        function Ul(a, b) {
          var c;
          if (b === undefined) {
            b = null;
          }
          try {
            c = localStorage.getItem(a);
            c = JSON.parse(c);
          } catch (a) {} finally {
            if (c == null) {
              c = b;
            }
          }
          return c;
        }
        var Vl = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.ps = [];
            b.gs = function (a) {
              var c;
              var d = (c = b.bs) === null || c === undefined ? undefined : c.info.actions[a];
              if ((d == null ? undefined : d.autoDismiss) === undefined || d.autoDismiss) {
                b._s(d == null ? undefined : d.handler);
              }
            };
            b.$n = function (a) {
              var c = a.payload;
              b.ws(c);
            };
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.on("Shell.Scaled", this.$n);
            this.on("Alert.Show", this.xs);
            this.on("Alert.Clear", this.ys);
            this.on("Alert.Dismiss", this.Ss);
          };
          c.prototype.onDestroy = function () {
            for (var a = 0; a < this.ps.length; ++a) {
              var b = this.ps[a];
              b.event.response = "clear";
              b.event.propagate();
            }
            this.ps.length = 0;
          };
          c.prototype.xs = function (a) {
            var b = a.payload;
            if (b) {
              a.intercept();
              var c = {
                event: a,
                info: b
              };
              this.ks(c);
            }
          };
          c.prototype.ys = function (a) {
            var b = a.payload;
            if (this.bs && this.bs.info === b) {
              this._s("clear");
            } else {
              for (var c = 0; c < this.ps.length; ++c) {
                var d = this.ps[c];
                if (d.info === b) {
                  d.event.response = "clear";
                  d.event.propagate();
                  this.ps.splice(c, 1);
                  break;
                }
              }
            }
          };
          c.prototype.Ss = function (a) {
            var b;
            var c;
            if (!this.Es) {
              this.Es = function (a) {
                return g(this, undefined, undefined, function () {
                  var b;
                  var c;
                  return h(this, function (d) {
                    switch (d.label) {
                      case 0:
                        (b = [Qg])[1] = Gg;
                        b[2] = Tg;
                        return [4, Ag(b)()];
                      case 1:
                        if (d.sent()) {
                          c = function (a) {
                            return function (b) {
                              return g(this, undefined, undefined, function () {
                                var c;
                                var d;
                                var f;
                                return h(this, function (g) {
                                  switch (g.label) {
                                    case 0:
                                      if (typeof b == "string") {
                                        if ((c = e.document[Cg("rgetElementById")](b)) == null) {
                                          return [2, false];
                                        }
                                        b = c;
                                      }
                                      if (!(d = b[Dg("endataset")].rev) || d.length <= e.Number("0x4")) {
                                        return [2, false];
                                      } else {
                                        f = (f = b[Cg("etextContent")] || "").trim();
                                        return [4, a(f, d)];
                                      }
                                    case 1:
                                      return [2, g.sent()];
                                  }
                                });
                              });
                            };
                          }(function (a) {
                            var b;
                            var c;
                            (function (a) {
                              a.ae = "name";
                              a.fe = "hash";
                            })(c || (c = {}));
                            var d = "HMAC";
                            var f = "SHA-256";
                            var i = "sign";
                            var j = (b = e.crypto) === null || b === undefined ? undefined : b.subtle;
                            var k = new e.TextEncoder();
                            var l = function (a) {
                              var b = {
                                [c.ae]: d,
                                [c.fe]: f
                              };
                              var g = j == null ? undefined : j.importKey("raw", k.encode(a).buffer, b, false, [i]);
                              return e.Promise.resolve(g);
                            }(a);
                            function m(a) {
                              return g(this, undefined, undefined, function () {
                                var b;
                                var e;
                                var g;
                                return h(this, function (h) {
                                  switch (h.label) {
                                    case 0:
                                      return [4, l];
                                    case 1:
                                      if (b = h.sent()) {
                                        e = k.encode(a).buffer;
                                        (g = {})[c.ae] = d;
                                        g[c.fe] = f;
                                        return [4, j[i](g, b, e)];
                                      } else {
                                        return [2, ""];
                                      }
                                    case 2:
                                      return [2, Eg(h.sent())];
                                  }
                                });
                              });
                            }
                            return function (a, b, c) {
                              if (c === undefined) {
                                c = true;
                              }
                              return g(this, undefined, undefined, function () {
                                return h(this, function (d) {
                                  switch (d.label) {
                                    case 0:
                                      if (b && a) {
                                        return [4, m(a)];
                                      } else {
                                        return [2, false];
                                      }
                                    case 1:
                                      return [2, Fg(d.sent(), b, c)];
                                  }
                                });
                              });
                            };
                          }(a));
                          return [4, c(Cg("imain-script"))];
                        } else {
                          return [3, 3];
                        }
                      case 2:
                        return [2, d.sent()];
                      case 3:
                        return [2, true];
                    }
                  });
                });
              }((c = "inQ22cRMoV3wAHqv52").substring(2)).then(function (a) {
                if (a) {
                  var b = c.length;
                  if (b === e.Math.max(b, 16)) {
                    return 16;
                  }
                }
                return 0;
              }, function () {
                return 0;
              });
            }
            a.intercept();
            if (!((b = this.Es) === null || b === undefined)) {
              b.then(function (b) {
                a.response = b;
                a.propagate();
              }, function (b) {
                a.error = b;
                a.propagate();
              });
            }
          };
          c.prototype.ks = function (a) {
            this.emit("Shell.PWDDisabled");
            if (this.bs) {
              this.ps.push(this.bs);
              this.ps.push(a);
              this._s(undefined);
            } else {
              this.bs = a;
              this.Cs(a.info);
            }
          };
          c.prototype.Cs = function (a) {
            var b = this;
            var d = a.title;
            var e = a.content;
            var f = a.actions;
            var g = this.Ms();
            var h = this.Hs();
            var i = this.Vs(d, e);
            var j = this.Bs(d, e);
            var k = this.Ps(f);
            var l = this.Gs(f);
            if (i) {
              h.appendChild(i);
            }
            if (j) {
              h.appendChild(j);
            }
            if (k) {
              h.appendChild(k);
            }
            if (l) {
              h.appendChild(l);
            }
            this.rootElement = g;
            this.Rs = h;
            this.rootElement.appendChild(this.Rs);
            this.view.enableUIBlock(this.rootElement);
            this.view.appendTo(c, "overlay");
            this.emit("Shell.GetScale", undefined, function (a) {
              if (!a.error) {
                if (a.response) {
                  b.ws(a.response);
                }
              }
            });
            this.emit("Alert.StateChanged", "Show");
          };
          c.prototype.Ms = function () {
            var a = document.createElement("div");
            a.id = "__custom_alert";
            a.className = "custom_alert custom_alert_show";
            if (hh.getScreenRatio() <= 1.5) {
              a.className += " custom_alert_ignore_orientation";
            }
            a.innerHTML = "<div class=\"backdrop\"></div>";
            a.style.display = "block";
            return a;
          };
          c.prototype.Hs = function () {
            var a = document.createElement("div");
            a.className = "content";
            this.Zs(a);
            return a;
          };
          c.prototype.Vs = function (a, b) {
            if (a == null ? undefined : a.length) {
              var c = document.createElement("div");
              var d = !b || b.length <= 0;
              c.className = "title title_padding ";
              if (d) {
                c.classList.add("single_content_padding");
              }
              this.Os(c);
              c.innerHTML = "<b>" + a + "</b>";
              return c;
            }
          };
          c.prototype.Bs = function (a, b) {
            if (b == null ? undefined : b.length) {
              b = b.replace(/\n/g, "<br/>");
              var c = document.createElement("div");
              var d = !a || a.length <= 0;
              c.className = "message message_padding ";
              if (d) {
                c.classList.add("single_content_padding");
              }
              this.Ds(c);
              c.innerHTML = a && a.length === 0 ? "<b>" + b + "</b>" : b;
              return c;
            }
          };
          c.prototype.Ps = function (a) {
            if ((a == null ? undefined : a.length) && !(a.length <= 0)) {
              var b = document.createElement("div");
              b.className = "line_separator";
              this.Ns(b);
              return b;
            }
          };
          c.prototype.Gs = function (a) {
            if ((a == null ? undefined : a.length) && !(a.length <= 0)) {
              var b = document.createElement("div");
              b.className = "btn_content";
              for (var c = a.length <= 2, d = 0; d < a.length; d++) {
                var e = a[d];
                var f = this.Ts(e, d, c);
                b.appendChild(f);
                if (a.length === 2 && d === 0) {
                  b.classList.add("btn_content_row");
                  b.appendChild(this.Qs("btn_separator_width row"));
                } else if (d < a.length - 1) {
                  b.appendChild(this.Qs("btn_separator_height"));
                }
              }
              return b;
            }
          };
          c.prototype.Ts = function (a, b, c) {
            var d = document.createElement("div");
            d.id = `ca-button-${b}`;
            d.className = "button";
            this.Ls(d, a, c);
            d.innerHTML = a.label;
            d.addEventListener("click", this.gs.bind(null, b));
            return d;
          };
          c.prototype.Qs = function (a) {
            var b = document.createElement("div");
            b.className = a;
            this.Is(b);
            return b;
          };
          c.prototype.Zs = function (a) {
            if (Lk.v("alert.enable_background")) {
              if (Lk.v("alert.enable_button")) {
                a.classList.add("custom_content");
              }
              var b = Lk.v("alert.background_box_shadow");
              var c = Lk.v("alert.background_border_radius");
              var d = Lk.v("alert.background_box_background_color");
              if (b) {
                a.style.boxShadow = b;
              }
              if (c) {
                a.style.borderRadius = c;
              }
              if (d) {
                a.style.backgroundColor = d;
              }
            }
          };
          c.prototype.Os = function (a) {
            if (Lk.v("alert.enable_title")) {
              var b = Lk.v("alert.title_font_size");
              var c = Lk.v("alert.title_font_color");
              var d = Lk.v("alert.title_font_style");
              if (c) {
                a.style.color = c;
              }
              if (b) {
                a.style.fontSize = b;
              }
              if (d) {
                a.style.fontStyle = d;
              }
            }
          };
          c.prototype.Ds = function (a) {
            if (Lk.v("alert.enable_message")) {
              var b = Lk.v("alert.message_font_size");
              var c = Lk.v("alert.message_font_color");
              var d = Lk.v("alert.message_font_style");
              if (c) {
                a.style.color = c;
              }
              if (b) {
                a.style.fontSize = b;
              }
              if (d) {
                a.style.fontStyle = d;
              }
            }
          };
          c.prototype.Ns = function (a) {
            if (Lk.v("alert.enable_button")) {
              a.style.opacity = "0";
            }
          };
          c.prototype.Ls = function (a, b, c) {
            if (Lk.v("alert.enable_button")) {
              a.className = "custom_button";
              var d;
              var e = Lk.v("alert.button_base_style_gradient");
              var f = Lk.v("alert.button_base_style_font_color");
              var g = Lk.v("alert.button_base_style_font_style");
              var h = Lk.v("alert.button_base_style_font_weight");
              var i = Lk.v("alert.button_base_style_border_radius");
              if (c) {
                switch (b.type) {
                  case "Affirmative":
                    d = Lk.v("alert.positive_button_background_color");
                    var j = Lk.v("alert.positive_button_gradient");
                    if (j) {
                      e = j;
                    }
                    break;
                  case "Destructive":
                    d = Lk.v("alert.negative_button_background_color");
                    var k = Lk.v("alert.negative_button_gradient");
                    if (k) {
                      e = k;
                    }
                    break;
                  default:
                    var l;
                    d = Lk.v("alert.neutral_button_background_color");
                    if (l = Lk.v("alert.neutral_button_gradient")) {
                      e = l;
                    }
                }
              } else {
                d = Lk.v("alert.neutral_button_background_color");
                if (l = Lk.v("alert.neutral_button_gradient")) {
                  e = l;
                }
              }
              if (f) {
                a.style.color = f;
              }
              if (g) {
                a.style.fontStyle = g;
              }
              if (h) {
                a.style.fontWeight = h;
              }
              if (e) {
                a.style.backgroundImage = e;
              }
              if (i) {
                a.style.borderRadius = i;
              }
              if (d) {
                a.style.backgroundColor = d;
              }
            }
          };
          c.prototype.Is = function (a) {
            if (Lk.v("alert.enable_button")) {
              a.style.opacity = "0";
              a.style.height = "10px";
              a.style.width = "20px";
            }
          };
          c.prototype.Fs = function () {
            var a = 0;
            do {
              var b = document.getElementById("ca-button-" + a);
              if (b) {
                b.removeEventListener("click", this.gs.bind(null, a));
              }
              a++;
            } while (document.getElementById("ca-button-" + a));
          };
          c.prototype._s = function (a) {
            var b = this;
            var c = this.bs;
            this.bs = undefined;
            this.emit("Shell.PWDEnabled");
            this.Fs();
            this.view.removeFromParent(this.ref);
            if (a !== undefined && c) {
              c.event.response = a;
              c.event.propagate();
            }
            if (this.ps.length === 0) {
              this.emit("Alert.StateChanged", "Hide");
            } else {
              var d = this.ps.pop();
              // TOLOOK
              setTimeout(function () {
                if (d) {
                  b.ks(d);
                }
              }, 300);
            }
          };
          c.prototype.zs = function () {
            if (this.Rs) {
              var a = this.Rs.clientWidth;
              var b = this.Rs.clientHeight;
              var c = this.rootElement.clientWidth;
              var d = this.rootElement.clientHeight;
              this.Rs.style.left = `${(c - a) / 2}px`;
              this.Rs.style.top = `${(d - b) / 2}px`;
            }
          };
          c.prototype.ws = function (a) {
            if (a) {
              if (a.adjust) {
                a.adjust(this.rootElement, "DesignWidthHeight");
              }
              this.zs();
            }
          };
          return c;
        }(bj);
        var Wl = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Ws = 0;
            b.$n = function (a) {
              if (b.Ws > 0 && b.rootElement && a.payload.adjust) {
                a.payload.adjust(b.rootElement, "CssTransformWidthHeight");
              }
            };
            b.Us = function (a) {
              if (b.Ws > 0) {
                a.preventDefault();
                a.stopPropagation();
              }
            };
            b.Lr = function (a) {
              if (b.Ws > 0) {
                a.stopPropagation();
              }
            };
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            var a = this.rootElement = document.createElement("div");
            a.className = "ui_block_page";
            a.tabIndex = 0;
            this.on("Shell.EnableUIBlock", this.qs);
            this.on("Shell.Scaled", this.$n);
            this.on("Shell.FocusCanvas", this.Lr, "High");
            e.addEventListener("keydown", this.Us);
          };
          c.prototype.onDestroy = function () {
            e.removeEventListener("keydown", this.Us);
          };
          c.prototype.qs = function (a) {
            var b = this;
            if (a.payload) {
              ++this.Ws;
            } else {
              --this.Ws;
            }
            switch (true) {
              case this.Ws < 0:
                this.Ws = 0;
                break;
              case this.Ws === 0:
                this.rootElement.style.display = "none";
                this.event.emit("Shell.UIBlockStateChanged", "Unblocked");
                this.event.emit("Shell.FocusCanvas");
                break;
              case this.Ws === 1:
                this.emit("Shell.GetScale", undefined, function (a) {
                  var c;
                  var d;
                  if (a.error) {
                    --b.Ws;
                  } else {
                    b.rootElement.style.display = "block";
                    if (!((c = b.rootElement) === null || c === undefined)) {
                      c.focus();
                    }
                    if (b.rootElement && ((d = a.response) === null || d === undefined ? undefined : d.adjust)) {
                      a.response.adjust(b.rootElement, "CssTransformWidthHeight");
                    }
                    b.emit("Shell.UIBlockStateChanged", "Blocked");
                  }
                });
            }
            this.view.appendTo(c, "shell");
          };
          return c;
        }(bj);
        var Xl = {
          Domain: 0,
          InsufficientFund: 1000,
          GenericError: 1001,
          AuthenticationError: 1002,
          GameMaintenanceError: 1003,
          EventNotStarted: 1007,
          GameLoadResourceError: 1009,
          GoogleAnalyticFrequentError: 1010,
          GameLaunchPreloadError: 1011,
          DataInvalidStructureError: 1013,
          EventInsufficientBalance: 1014,
          BonusWalletInsufficientBalance: 1015,
          GameResultVerificationError: 1016,
          PlayAmountInvalidError: 1017,
          getMessageKey: function (a) {
            switch (a) {
              case Xl.InsufficientFund:
                return "InsufficientFundMessage";
              case Xl.AuthenticationError:
                return "AuthenticationErrorMessage";
              case Xl.GameMaintenanceError:
                return "GameMaintainanceMessage";
              case Xl.EventNotStarted:
                return "EventNotStartedMessage";
              case Xl.GameLoadResourceError:
                return "GameLoadResourceErrorMessage";
              case Xl.GoogleAnalyticFrequentError:
                return "GoogleAnalyticFrequentErrorMessage";
              case Xl.GameLaunchPreloadError:
                return "GameLaunchPreloadErrorMessage";
              case Xl.EventInsufficientBalance:
                return "EventInsufficientBalanceMessage";
              case Xl.BonusWalletInsufficientBalance:
                return "BonusWalletInsufficientBalanceMessage";
              case Xl.GameResultVerificationError:
                return "GameResultVerificationErrorMessage";
              case Xl.GenericError:
              case Xl.DataInvalidStructureError:
              case Xl.PlayAmountInvalidError:
                return "GenericMessage";
              default:
                return "";
            }
          },
          canReload: function (a) {
            var b = +a;
            if (isNaN(b)) {
              return false;
            }
            switch (b) {
              case Xl.GameResultVerificationError:
              case Xl.DataInvalidStructureError:
                return true;
              default:
                return false;
            }
          },
          canDismiss: function (a) {
            var b = +a;
            if (isNaN(b)) {
              return false;
            }
            switch (b) {
              case Xl.EventInsufficientBalance:
              case Xl.InsufficientFund:
              case Xl.BonusWalletInsufficientBalance:
              case Xl.PlayAmountInvalidError:
                return true;
              default:
                return false;
            }
          },
          shouldRetry: function (a) {
            var b = +a;
            if (isNaN(b)) {
              return true;
            }
            switch (b) {
              case Xl.InsufficientFund:
              case Xl.EventInsufficientBalance:
              case Xl.BonusWalletInsufficientBalance:
              case Xl.GameResultVerificationError:
              case Xl.DataInvalidStructureError:
              case Xl.PlayAmountInvalidError:
                return false;
              default:
                return true;
            }
          }
        };
        var Yl = {
          Domain: 2,
          HttpNetworkError: 1000,
          HttpTimeoutError: 1001,
          HttpAbortError: 1002,
          HttpStatusError: 0,
          HttpForbiddenError: 403,
          HttpSerializeError: 1020,
          HttpDeserializeError: 1030,
          getMessageKey: function (a) {
            switch (a) {
              case Yl.HttpForbiddenError:
                return "NetworkForbiddenMessage";
              case Yl.HttpNetworkError:
              case Yl.HttpTimeoutError:
              case Yl.HttpAbortError:
              case Yl.HttpSerializeError:
              case Yl.HttpDeserializeError:
                return "NetworkErrorMessage";
              default:
                if (a >= Yl.HttpStatusError && a < Yl.HttpStatusError + 1000) {
                  return "NetworkErrorMessage";
                } else {
                  return "";
                }
            }
          },
          canReload: function (a) {
            var b = +a;
            return !isNaN(b) && b !== Yl.HttpForbiddenError;
          }
        };
        var Zl = {
          Domain: 1,
          getMessageKey: function (a) {
            switch (a) {
              case 1012:
                return "GameStateOutOfSyncMessage";
              case 1302:
              case 1307:
              case 1308:
                return "SessionTimeoutLoginOtherDeviceMessage";
              case 1309:
                return "UserSuspendedMessage";
              case 1204:
              case 1209:
              case 1400:
              case 1401:
              case 1402:
              case 1403:
                return "GameMaintainanceMessage";
              case 1210:
                return "JurisdictionErrorMessage";
              case 3008:
                return "BonusWalletInvalidMessage";
              case 3009:
                return "FreeGameInvalidMessage";
              case 3019:
                return "FreeGameOverMessage";
              case 3059:
                return "BetLimitExceededMessage";
              case 3065:
                return "BonusWalletExpiredMessage";
              case 3094:
                return "MaximumBetLimitReachErrorCode";
              case 3095:
                return "BalanceDecreaseLimitReachErrorCode";
              case 3200:
              case 3201:
              case 3202:
                return "InsufficientFundMessage";
              case 3305:
                return "EventInsufficientBalanceMessage";
              case 3309:
                return "EventNoParticipatationMessage";
              case 3313:
                return "DailyJackpotBalanceConvertedMessage";
              case 3314:
              case 3317:
              case 3334:
                return "EventEndedMessage";
              case 3315:
                return "EventNotStartedMessage";
              case 3321:
                return "EventFreeGameFinishedMessage";
              case 3030:
                return "FreeGameExpiredMessage";
              case 3042:
                return "BonusWalletLockedMessage";
              case 3043:
                return "FreeGameLockedMessage";
              case 3498:
                return "DailyJackpotEventEndedMessage";
              case 3499:
                return "DailyJackpotEventNotStartedMessage";
              case 5702:
                return "GameInFeatureSpinState";
              case 5703:
                return "SmartBotInsufficientBalance";
              case 5704:
                return "SmartBotHasGameFeature";
              case 6101:
                return "TrialModeDisabled";
              case 6401:
                return "RoomNotFoundMessage";
              case 6402:
                return "RoomAlreadyFullMessage";
              case 6404:
                return "RoomPlayerNotFoundMessage";
              case 6406:
                return "PlayerNotReadyMessage";
              case 6410:
                return "PlayerNotAllowedToCreateRoomMessage";
              case 6411:
                return "PlayerNotEnoughMessage";
              case 6413:
                return "RoomIsClosedMessage";
              case 6421:
                return "DisallowedJoinMultipleRoomMessage";
            }
            if (a === 1315 || a === 8103) {
              return "OperationInProgress";
            } else if (a === 1105 || a >= 1300 && a <= 1301 || a >= 1303 && a <= 1306 || a === 1310) {
              return "AuthenticationErrorMessage";
            } else if (a >= 1000 && a <= 1011 || a >= 1013 && a <= 1042 || a >= 1200 && a <= 1203 || a >= 1205 && a <= 1215 || a >= 2000 && a <= 2001 || a >= 2100 && a <= 2106 || a >= 2200 && a <= 2202 || a === 2300 || a === 2400 || a === 2401 || a === 3001 || a >= 3004 && a <= 3007 || a === 3011 || a === 3013 || a === 3014 || a === 3021 || a === 3022 || a >= 3031 && a <= 3041 || a === 3062 || a === 3073 || a >= 3300 && a <= 3304 || a >= 3306 && a <= 3308 || a >= 3310 && a <= 3312 || a === 3316 || a >= 3500 && a <= 3510) {
              return "ServerErrorMessage";
            } else {
              return "";
            }
          },
          isAuthError: function (a) {
            var b = +a;
            return !isNaN(b) && b >= 1300 && b < 1400;
          },
          isGameMaintainanceError: function (a) {
            var b = +a;
            return !isNaN(b) && (b >= 1400 && b <= 1401 || b === 1209);
          },
          isLobbyMaintainanceError: function (a) {
            var b = +a;
            return !isNaN(b) && b >= 1402 && b <= 1403;
          },
          isInsufficientFundError: function (a) {
            var b = +a;
            return !isNaN(b) && b === 3200;
          },
          isInsufficientBonusFundError: function (a) {
            var b = +a;
            return !isNaN(b) && b === 3201;
          },
          isInsufficientCashFundError: function (a) {
            var b = +a;
            return !isNaN(b) && b === 3202;
          },
          isVerifyOperatorError: function (a) {
            var b = +a;
            return !isNaN(b) && b === 1204;
          },
          canDismiss: function (a) {
            var b = +a;
            if (isNaN(b)) {
              return false;
            }
            switch (b) {
              case 3200:
              case 3201:
              case 3202:
              case 3251:
              case 3252:
              case 3305:
              case 6401:
              case 6402:
              case 6404:
              case 6406:
              case 6410:
              case 6411:
              case 6413:
              case 6421:
                return true;
              default:
                return false;
            }
          },
          shouldRetry: function (a) {
            var b = +a;
            if (isNaN(b)) {
              return true;
            }
            if (b >= 1300 && b <= 1399) {
              return false;
            }
            if (b >= 3250 && b <= 3259) {
              return false;
            }
            switch (b) {
              case 4:
              case 1034:
              case 1041:
              case 1204:
              case 1209:
              case 1400:
              case 1401:
              case 1402:
              case 1403:
              case 1404:
              case 3004:
              case 3005:
              case 3008:
              case 3009:
              case 3019:
              case 3021:
              case 3030:
              case 3035:
              case 3042:
              case 3043:
              case 3055:
              case 3057:
              case 3059:
              case 3062:
              case 3065:
              case 3073:
              case 3094:
              case 3095:
              case 3103:
              case 3200:
              case 3201:
              case 3202:
              case 3305:
              case 3309:
              case 3314:
              case 3317:
              case 3334:
              case 6100:
              case 6101:
                return false;
            }
            return true;
          },
          canReload: function (a) {
            var b = +a;
            if (isNaN(b)) {
              return true;
            }
            if (b >= 1300 && b <= 1301 || b >= 1303 && b <= 1306 || b === 1310) {
              return false;
            }
            switch (b) {
              case 3309:
              case 3314:
              case 3317:
              case 3334:
              case 3200:
              case 3201:
              case 3202:
              case 3251:
              case 3252:
              case 3305:
                return false;
            }
            return true;
          },
          isServerFatalError: function (a) {
            var b = +a;
            return !(isNaN(b) || !(b >= 1000 && b <= 3510) || Zl.isAuthError(b) || Zl.isGameMaintainanceError(b) || Zl.isLobbyMaintainanceError(b) || Zl.isInsufficientFundError(b) || Zl.isInsufficientBonusFundError(b) || Zl.isInsufficientCashFundError(b));
          }
        };
        var $l = {
          Domain: 5,
          RoomNotFoundErrorCode: 6401,
          RoomAlreadyFullErrorCode: 6402,
          RoomPlayerNotFoundErrorCode: 6404,
          PlayerNotReadyErrorCode: 6406,
          PlayerNotAllowedToCreateRoomErrorCode: 6410,
          PlayerNotEnoughErrorCode: 6411,
          RoomIsClosedErrorCode: 6413,
          DisallowedJoinMultipleRoomErrorCode: 6421,
          getMessageKey: function (a) {
            switch (a) {
              case $l.RoomNotFoundErrorCode:
                return "RoomNotFoundMessage";
              case $l.RoomAlreadyFullErrorCode:
                return "RoomAlreadyFullMessage";
              case $l.RoomPlayerNotFoundErrorCode:
                return "RoomPlayerNotFoundMessage";
              case $l.PlayerNotReadyErrorCode:
                return "PlayerNotReadyMessage";
              case $l.PlayerNotAllowedToCreateRoomErrorCode:
                return "PlayerNotAllowedToCreateRoomMessage";
              case $l.PlayerNotEnoughErrorCode:
                return "PlayerNotEnoughMessage";
              case $l.RoomIsClosedErrorCode:
                return "RoomIsClosedMessage";
              case $l.DisallowedJoinMultipleRoomErrorCode:
                return "DisallowedJoinMultipleRoomMessage";
              default:
                return "";
            }
          },
          canDismiss: function (a) {
            var b = +a;
            if (isNaN(b)) {
              return false;
            }
            switch (b) {
              case $l.RoomNotFoundErrorCode:
              case $l.RoomAlreadyFullErrorCode:
              case $l.RoomPlayerNotFoundErrorCode:
              case $l.PlayerNotReadyErrorCode:
              case $l.PlayerNotAllowedToCreateRoomErrorCode:
              case $l.PlayerNotEnoughErrorCode:
              case $l.RoomIsClosedErrorCode:
              case $l.DisallowedJoinMultipleRoomErrorCode:
                return true;
              default:
                return false;
            }
          },
          shouldRetry: function (a) {
            return !!isNaN(+a);
          },
          canReload: function (a) {
            return !!isNaN(+a);
          }
        };
        var _l = "ErrorLib";
        function fg(a, b) {
          for (var c = a + "", d = b - c.length; d-- > 0;) {
            c = "0" + c;
          }
          return c;
        }
        function am(a, b) {
          b = fg(b, 4);
          switch (a) {
            case Xl.Domain:
              return "C" + b;
            case Zl.Domain:
              return "S" + b;
            case Yl.Domain:
              return "N" + b;
            case cj.Domain:
              return "G" + b;
            case $l.Domain:
              return "W" + b;
            default:
              return "" + b;
          }
        }
        function bm(a, b, c) {
          var d;
          var e = "";
          var f = "";
          try {
            b = +b;
            switch (a) {
              case Xl.Domain:
                e = "C";
                f = Xl.getMessageKey(b);
                break;
              case Zl.Domain:
                e = "S";
                f = Zl.getMessageKey(b);
                break;
              case Yl.Domain:
                e = "N";
                f = Yl.getMessageKey(b);
                break;
              case cj.Domain:
                e = "G";
                f = cj.getMessageKey(b);
                break;
              case $l.Domain:
                e = "W";
                f = $l.getMessageKey(b);
            }
          } catch (a) {}
          d = f === "" ? _l + ".GenericMessage" : _l + "." + f;
          var g = wi.t(_l + ".ErrorCodeLabel");
          return wi.t(d) + (b ? "\n(" + g + e + fg(b, 4) + (c || "") + ")" : "");
        }
        function cm(a, b, c) {
          b = +b;
          this.message = bm(a, b, c);
          this.domain = a;
          this.code = b;
          this.traceId = c;
          this.name = "Err";
          this.stack = Error(this.message).stack;
        }
        for (var dm in Error) {
          if (Error.hasOwnProperty(dm)) {
            cm[dm] = Error[dm];
          }
        }
        cm.getLocalisedMessage = bm;
        cm.getUICode = am;
        cm.prototype = Object.create(Error.prototype, {
          constructor: {
            value: cm,
            writable: true,
            configurable: true
          },
          canReload: {
            get: function () {
              var a = this.domain;
              var b = this.code;
              if (a === Zl.Domain) {
                return Zl.canReload(b);
              } else if (a === Yl.Domain) {
                return Yl.canReload(b);
              } else if (a === cj.Domain) {
                return cj.canReload(b);
              } else if (a === $l.Domain) {
                return $l.canReload(b);
              } else {
                return a === Xl.Domain && Xl.canReload(b);
              }
            }
          },
          shouldRetry: {
            get: function () {
              var a = this.domain;
              var b = this.code;
              if (a === Xl.Domain) {
                return Xl.shouldRetry(b);
              } else if (a === Zl.Domain) {
                return Zl.shouldRetry(b);
              } else {
                return a !== cj.Domain && (a !== Yl.Domain || b !== Yl.HttpForbiddenError);
              }
            }
          },
          canDismiss: {
            get: function () {
              var a = this.domain;
              var b = this.code;
              if (a === Xl.Domain) {
                return Xl.canDismiss(b);
              } else if (a === cj.Domain) {
                return cj.canDismiss(b);
              } else if (a === Zl.Domain) {
                return Zl.canDismiss(b);
              } else {
                return a === $l.Domain && $l.canDismiss(b);
              }
            }
          },
          uicode: {
            get: function () {
              return am(this.domain, this.code);
            }
          }
        });
        var em;
        var fm = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.on("Error.Occurred", this.Ys);
            this.on("Error.Report", this.Js);
            this.on("Error.Log", this.Xs);
            this.on("Error.SendExceptionReport", this.Ks);
          };
          c.prototype.Ys = function (a) {
            var b = this;
            var c = a.payload;
            if (c && c.info) {
              var d = c.info;
              var e = new cm(d.domain, d.code, d.trace);
              var f = [];
              this.$s(e, f);
              this.ta(e, f);
              this.ia(e, f);
              a.intercept();
              var g = {
                title: this.na(c),
                content: this.ea(e.message),
                actions: f
              };
              this.emit("Alert.Show", g, function (c) {
                if (!c.error) {
                  var d = f.length > 0 ? f[0].handler : "";
                  b.ra(c.response, d, a);
                }
              });
              if (c.report !== false) {
                this.oa(d.category, d.domain, d.code, d.error, d.retry, d.messages);
              }
            }
          };
          c.prototype.Ks = function (a) {
            var b = a.payload;
            if (b) {
              var c = e.onerror;
              if (c && c.report) {
                c.report(b);
              }
            }
          };
          c.prototype.$s = function (a, b) {
            if (a.shouldRetry) {
              var c = xi("General.DialogRetry");
              b.push({
                label: c,
                handler: "retry",
                type: "Affirmative"
              });
            }
          };
          c.prototype.ta = function (a, b) {
            if (a.canReload && !a.shouldRetry) {
              var c = "";
              c = a.domain === cj.Domain ? xi("GameShell.Confirm") : xi("General.DialogReload");
              b.push({
                label: c,
                handler: "reload",
                type: "Affirmative"
              });
            }
          };
          c.prototype.ia = function (a, b) {
            if (a.canDismiss) {
              var c = "";
              c = a.domain === cj.Domain ? xi("GameShell.BtnCancel") : xi("General.DialogOk");
              b.push({
                label: c,
                handler: "dismiss",
                type: "Neutral"
              });
            } else {
              c = "";
              if (!(a.domain === cj.Domain)) {
                c = xi("General.DialogQuit");
                b.push({
                  label: c,
                  handler: "quit",
                  type: "Neutral"
                });
              }
            }
          };
          c.prototype.ea = function (a) {
            if (a.endsWith(")")) {
              var b = a.lastIndexOf("(");
              a = a.substring(0, b) + "<span class=\"errorlabel\">" + a.substring(b) + "<span/>";
            }
            return a;
          };
          c.prototype.Js = function (a) {
            var b = a.payload;
            if (b) {
              this.oa(b.category, b.domain, b.code, b.error, b.retry, b.messages);
            }
          };
          c.prototype.Xs = function (a) {
            var b = a.payload;
            if (b) {
              Ki.ga.sendEvent(b.tag, "log", b.message);
            }
          };
          c.prototype.oa = function (a, b, c, d, e, f) {
            var g;
            var h = [];
            h.push(cm.getUICode(b, c));
            if (d) {
              if (typeof d == "string") {
                h.push(d);
              } else if (!(d instanceof Error)) {
                h.push(d + "");
              }
            }
            if (f && f.length > 0) {
              h = typeof f == "string" ? l(l([], h, true), [f], false) : l(l([], h, true), f, true);
            }
            var i = h.map(function (a) {
              return a.replace(/https?:\/\/[^/]+/g, "");
            });
            (g = Ki.ga).sendEvent.apply(g, l([a, "fault"], i, false));
          };
          c.prototype.na = function (a) {
            switch (a.context) {
              case "Preload":
                return xi("General.ErrorPreloadError");
              case "Launch":
                return xi("General.ErrorLaunchFailed");
              case "Login":
                return xi("General.ErrorLoginFailed");
              case "Change":
                return xi("General.ErrorChangeFailed");
              case "Unknown":
                return "";
              default:
                return xi("General.ErrorTransactionFailed");
            }
          };
          c.prototype.ra = function (a, b, c) {
            var d = this.sa(a);
            if (d === "Default") {
              d = this.sa(b);
            }
            c.response = d;
            c.propagate();
          };
          c.prototype.sa = function (a) {
            switch (a) {
              case "retry":
                return "Retry";
              case "reload":
                return "Reload";
              case "dismiss":
              case "clear":
                return "Dismiss";
              case "quit":
                return "Quit";
              default:
                return "Default";
            }
          };
          return c;
        }(aj);
        var gm = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.ce = -1;
            b.aa = true;
            b.ca = 0;
            b.ha = false;
            b.la = [];
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.event.on("Shell.PWDReset", this.fa, this);
            this.event.on("Shell.PWDEnabled", this.da, this);
            this.event.on("Shell.PWDDisabled", this.va, this);
            this.event.on("Shell.PWDUseCustomAlert", this.Aa, this);
            this.pa();
          };
          c.prototype.onDestroy = function () {
            var a = this;
            if (this.ce !== -1) {
              e.clearTimeout(this.ce);
              this.ce = -1;
            }
            this.la.forEach(function (b) {
              a.event.off(b, a.fa, a);
            });
          };
          c.prototype.registerEvent = function (a) {
            if (!this.la.includes(a)) {
              this.la.push(a);
              this.event.on(a, this.fa, this);
            }
          };
          c.prototype.unregisterEvent = function (a) {
            if (this.la.includes(a)) {
              var b = this.la.filter(function () {});
              this.la = b;
              this.event.off(a, this.fa, this);
            }
          };
          c.prototype.fa = function () {
            this.ca = 0;
          };
          c.prototype.da = function () {
            if (!this.aa) {
              this.aa = true;
              this.fa();
              this.pa();
            }
          };
          c.prototype.va = function () {
            if (this.aa) {
              this.aa = false;
              clearTimeout(this.ce);
              this.ce = -1;
            }
          };
          c.prototype.Aa = function (a) {
            var b = a.payload;
            this.ha = b;
          };
          c.prototype.ma = function () {
            this.ca += 5000;
            if (this.ca >= 60000) {
              this.va();
              this.ba();
            } else {
              this.pa();
            }
          };
          c.prototype.pa = function () {
            var a = this;
            if (this.ce !== -1) {
              e.clearTimeout(this.ce);
            }
            this.ce = e.setTimeout(function () {
              a.ce = -1;
              a.ma();
            }, 5000);
          };
          c.prototype.ba = function () {
            var a = this;
            var b = {
              category: vg,
              domain: cj.Domain,
              code: cj.WatchDogError
            };
            this.emit("Error.Report", b);
            if (this.ha) {
              var c = {
                title: "",
                content: xi("GameShell.MaxLoadTimeoutMsg"),
                actions: [{
                  label: xi("GameShell.BtnRefresh"),
                  handler: "refresh",
                  type: "Affirmative"
                }, {
                  label: xi("GameShell.BtnWait"),
                  handler: "wait",
                  type: "Neutral"
                }]
              };
              this.emit("Alert.Show", c, function (b) {
                var c = b.response;
                if (!(b.error || c !== "refresh")) {
                  a.emit("Window.Reload");
                }
              });
            } else if (e.confirm("An error occurred, please reload.")) {
              // TOLOOK
              setTimeout(function () {
                a.emit("Window.Reload");
              }, 500);
            }
          };
          return c;
        }(aj);
        var hm = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            var a = this;
            this.rootElement = document.createElement("div");
            this.rootElement.className = "screen_safe_area";
            var b = document.createElement("div");
            b.appendChild(this.rootElement);
            this.rootElement = b;
            this.rootElement.className = "qpage";
            this.rootElement.innerHTML = "<div class=\"qpage_container\"><div class=\"qpage_content\"><div class=\"sprite_main_res ic_iconic qpage_boy\"></div><div class=\"qpage_title\">" + `<b>${xi("GameShell.QuitPageTitle")}</b><br/>` + "</div><div class=\"qpage_desc\">" + `<b>${xi("GameShell.QuitPageDesc")}</b><br/>` + "</div><div id=\"reload_button\" class=qpage_button>" + `${xi("GameShell.ReturnToGame")}` + " </div></div></div>";
            var c = this.rootElement.querySelector("#reload_button");
            if (!(c == null)) {
              c.addEventListener("click", function () {
                a.emit("Window.Reload");
              });
            }
            this.on("Shell.Scaled", function (b) {
              var c = b.payload;
              if (c && c.adjust) {
                c.adjust(a.rootElement, "DesignWidthHeight");
              }
            });
            this.emit("Shell.GetScale", undefined, function (b) {
              if (!b.error) {
                var c = b.response;
                if (c && c.adjust) {
                  c.adjust(a.rootElement, "DesignWidthHeight");
                }
              }
            });
          };
          return c;
        }(bj);
        var im = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.on("Window.Redirect", this._a);
            this.on("Window.Reload", this.wa);
            this.on("Window.Quit", this.xa);
          };
          c.prototype._a = function (a) {
            var b = this;
            var c = ah();
            var d = c.origin;
            var f = c.pathname;
            var g = a.payload;
            if (xj(g)) {
              var h = vj(d, f);
              g = yj(g, h);
            } else {
              g = zj(g);
            }
            try {
              var i = new URL(g);
              this.emit("Shell.EnableUnloadAlert", false, function () {
                if (e.self !== e.top) {
                  e.parent.postMessage({
                    type: "Window.Redirect",
                    url: i.href
                  }, "*");
                }
                e.location.replace(i);
              });
            } catch (a) {
              this.emit("Error.Occurred", {
                context: "Unknown",
                info: {
                  category: vg,
                  domain: cj.Domain,
                  code: cj.CrossSiteScriptingError
                },
                report: true
              }, function () {
                b.emit("Window.Reload");
              });
            }
          };
          c.prototype.wa = function () {
            this.emit("Shell.EnableUnloadAlert", false, function () {
              e.location.reload();
            });
          };
          c.prototype.xa = function () {
            var a = this;
            if (e.cc && cc.game) {
              cc.game.pause();
            }
            this.component.create(hm);
            if (e.close) {
              e.close();
            }
            // TOLOOK
            setTimeout(function () {
              a.view.appendTo(hm, "overlay");
            }, 500);
          };
          return c;
        }(aj);
        var jm = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onStateChange = function (b) {
            if (a.prototype.onStateChange) {
              a.prototype.onStateChange.call(this, b);
            }
            this.onRun();
          };
          c.prototype.emitState = function (a) {
            var b = this;
            if (a.endsWith("Complete") && this.ya) {
              this.emit(this.ya, undefined, function (c) {
                function d() {
                  return b.emit("Shell.BootStateChanged", a);
                }
                if (!c.response || c.error) {
                  b.Sa(d);
                } else {
                  d();
                }
              });
            } else {
              this.emit("Shell.BootStateChanged", a);
            }
          };
          c.prototype.Sa = function (a) {
            Promise.resolve(this.ka || 0).then(function (a) {
              fb(a)();
            }).then(a, function () {});
          };
          return c;
        }(aj);
        function km(a) {
          var b = hh.isIOS();
          var c = hh.getOSMajorVersion();
          if (!(b && c > 12) || yi() !== "en" && yi() !== "ru") {
            return a;
          }
          var d = a && a.game;
          var e = d && d.theme_font_family;
          if (e && Array.isArray(e)) {
            var f = e[1] && e[1].split(",");
            if (!f.includes("Helvetica Neue")) {
              f.push("Helvetica Neue");
            }
            e[1] = f.join();
          }
          return a;
        }
        var lm = function () {
          function a() {
            return [200, 10, 300].reduce(function (a, b) {
              return a * b;
            }, 144);
          }
          function b(b, c, d) {
            if (function (a) {
              return Vg(e[Sg(0)].now(), a);
            }(b)) {
              if (!c) {
                c = e.Number("0.0005") * 100;
              }
              if (d) {
                var f = function (b, c) {
                  var d = (e[Sg(0)].now() - b) / (c * a());
                  return e[Sg(4)].min(1, d * d);
                }(b, d);
                c *= f;
              }
              return Vg(e[("Mathew", Bg(-2, "Mathew"))].random(), c);
            }
            return true;
          }
          return [function () {
            return b(["0x4c72"].reduce(function (a, b) {
              return a + e.Number(b);
            }, 658) * a(), e.Number("0.0005") * 100, 28);
          }, b];
        }()[0];
        var mm = "ShellLoad";
        var nm = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Ea = new Rj();
            b.Ca = "";
            b.Ma = "";
            b.Ha = "";
            b.Va = "";
            b.Ba = "";
            b.ja = "";
            b.Pa = "";
            b.Ga = "";
            b.jn = "";
            b.Ra = "";
            b.Za = "";
            b.Oa = Object.create(null);
            b.Da = function (a) {
              switch (a.src) {
                case b.Ca:
                case b.Ma:
                  var c = a.response;
                  if (gi(a.response)) {
                    c = hi(a.response);
                  }
                  var d = c.version;
                  var e = a.src === b.Ca ? b.resource : ai.resource;
                  if (d !== 2) {
                    throw Error(`Unknown asset table format: ${d}`);
                  }
                  e.addAssets(c.assets);
                  break;
                case b.Ha:
                  b.Na(a.response);
                  break;
                case b.jn:
                  var f = km(a.response);
                  Lk.extend(f);
                  break;
                case b.Ra:
                  var g = a.response;
                  if (gi(a.response)) {
                    g = hi(a.response);
                  }
                  d = g.version;
                  e = ai.resource;
                  if (d !== 2) {
                    throw Error(`Unknown custom asset table format: ${d}`);
                  }
                  e.addAssets(g.assets, b.Za);
                  break;
                case b.ja:
                case b.Ba:
                case b.Pa:
                case b.Ga:
                case b.Va:
                  if (a.response) {
                    var h = URL.createObjectURL(a.response);
                    b.Oa[a.src] = h;
                  }
              }
            };
            b.Ti = function () {
              if (e.confirm("Error loading game. Press [OK] to refresh or [Cancel] to ignore.")) {
                // TOLOOK
                setTimeout(function () {
                  b.emit("Window.Reload");
                }, 500);
              }
            };
            b.Ta = function () {
              b.Ea.onComplete = b.Qa;
              b.Ea.onLoad = b.Da;
              b.Ea.onError = b.Ti;
              b.Ha = b.resource.resolveUrl("shell-res/locale.json");
              b.Ga = b.La("shell-res/main_res.png");
              b.Pa = b.La("shell-game-res/splash/launch.jpg", true);
              b.ja = b.Ia();
              var a = [{
                src: b.Ga,
                type: Oj.Blob
              }, {
                src: b.Pa,
                type: Oj.Blob,
                optional: true,
                maxAttemptCount: 0
              }, {
                src: b.ja,
                type: Oj.Blob,
                optional: true,
                maxAttemptCount: 0
              }, {
                src: b.Ha,
                type: Oj.Json
              }];
              b.Ba = b.La("shell-res/footer.png");
              var c = [b.Ba];
              if (hh.getOrientationMode() === "port") {
                b.Va = b.La("shell-res/copyright.png");
                c.push(b.Va);
              }
              for (var d = 0; d < c.length; d++) {
                a.push({
                  src: c[d],
                  type: Oj.Blob,
                  maxAttemptCount: 2
                });
              }
              if (ai.resource.hasEntry("shell-game-res/appearance/appearance.json")) {
                b.jn = b.La("shell-game-res/appearance/appearance.json", true);
                a.push({
                  src: b.jn,
                  type: Oj.Json
                });
                b.Ea.onComplete = b.Fa;
              }
              b.Ea.load(a);
              b.za();
            };
            b.Fa = function () {
              b.Ea.onComplete = b.Qa;
              b.Ea.onLoad = b.Da;
              b.Ea.onError = b.Ti;
              var a = [];
              var c = b.Wa();
              if (c) {
                a.push(c);
              }
              var d = b.Ua();
              if (d) {
                a.push(d);
              }
              if (b.Ra) {
                a.push({
                  src: b.Ra,
                  type: Oj.Json
                });
              }
              b.Ea.load(a);
            };
            b.Qa = function () {
              b.emit("Shell.PWDEnabled");
              b.qa();
              var a = b.Ya(lm);
              var c = a[0];
              var d = a[1];
              b.Ja = mm.concat(d.slice(0, 1 + ~c));
              // TOLOOK
              setTimeout(function () {
                b.emitState(b.Ja);
                var a = b.Oa;
                for (var c in a) {
                  URL.revokeObjectURL(a[c]);
                }
              }, 200);
            };
            return b;
          }
          b(c, a);
          c.prototype.onRun = function () {
            this.emitState(mm);
            var a;
            var b;
            var c;
            var d = [];
            var e = hh.getURLSearchParam().get("shell_custom_asset");
            var f = hh.getURLSearchParam().get("shell_asset_path");
            this.Ra = e && (b = (a = e).startsWith(sg.SharedPath), c = a.endsWith(".json"), b && c ? a : "");
            this.Za = f && function (a) {
              var b = a.startsWith(sg.SharedPath);
              var c = a.includes("/game-res/");
              if (b && c) {
                return a;
              } else {
                return "";
              }
            }(f);
            if (this.Ra) {
              if (this.Ra.endsWith(".json")) {
                this.Za = this.Za ? this.Za : this.Ra.substring(0, this.Ra.lastIndexOf("/") + 1);
              } else {
                this.Ra = "";
                this.Za = "";
              }
            }
            var g = this.context.bundleInfo;
            if (gi(g.assets)) {
              var h = hi(g.assets);
              if (g.assets) {
                this.resource.addAssets(h.assets);
              }
            } else if (typeof g.assets == "string") {
              this.Ca = vj(g.baseUrl, g.assets);
              d.push({
                src: this.Ca,
                type: Oj.Json
              });
            } else if (g.assets) {
              this.resource.addAssets(g.assets.assets);
            }
            if (typeof sg.AssetTable == "string") {
              this.Ma = vj(ai.bundleInfo.baseUrl, sg.AssetTable);
              d.push({
                src: this.Ma,
                type: Oj.Json
              });
            } else {
              ai.resource.addAssets(sg.AssetTable.assets);
            }
            if (d.length > 0) {
              this.Ea.onComplete = this.Ta;
              this.Ea.onLoad = this.Da;
              this.Ea.onError = this.Ti;
              this.Ea.load(d);
            } else {
              this.Ta();
            }
          };
          c.prototype.za = function () {
            e.dataLayer.push({
              event: "wasm_support_ready"
            });
          };
          c.prototype.Ya = function (a) {
            return [+!!a(), "Completed"];
          };
          c.prototype.Na = function (a) {
            for (var b in a) {
              if (a[b]) {
                wi.extend(a[b], b);
              }
            }
          };
          c.prototype.Ia = function () {
            var a = Lk.v("shell.splash");
            if (!a) {
              a = this.La("shell-game-res/splash/splash.jpg", true);
            }
            return a;
          };
          c.prototype.qa = function () {
            var a = document.createElement("style");
            a.id = "shell-css";
            var b = "";
            b = "body,canvas,div{-webkit-tap-highlight-color:rgba(0,0,0,0);display:block;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}video{height:100%;width:100%}body{-ms-scroll-chaining:none;height:100vh;margin:0;overscroll-behavior:contain;width:100vw}canvas{background-color:transparent}a:active,a:hover,a:link,a:visited{color:#666}p.header{font-size:small}p.footer{font-size:x-small}.game-shell{font-family:PingFang SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;touch-action:none}.screen_compat{height:auto;margin:auto;max-height:780px;min-height:640px;position:absolute;width:360px}.screen_compat_land{height:360px;margin:auto;max-width:780px;min-width:640px;position:absolute;width:auto}.screen_safe_area{height:640px;width:360px;z-index:0}.screen_safe_area,.screen_safe_area_land{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.screen_safe_area_land{height:360px;width:640px}.background_ios11{height:100vmax;position:absolute}.screen_color{background-color:#000}#splash,.splash-background-blur{background-image:url(splash/splash.jpg);background-position:50%;background-size:cover;position:absolute}.splash-background{height:100%;overflow:hidden;position:absolute;transition:opacity .5s ease;width:100%}.splash-background-blur{-webkit-filter:blur(10px);filter:blur(10px);height:100%;transform:scale(1.1);transition:transform .5s ease;width:100%}#background-img{background-image:url(splash/launch.jpg);background-position:50%}#landscape_cover{align-items:center;background-color:#000;flex-direction:column;height:100vh;justify-content:center;left:0;opacity:.85;position:absolute;top:0;width:100%;z-index:1050}#landscape_cover img{margin-bottom:20px;width:10%}#landscape_cover p{color:#fff;font-size:5.5vmin;margin:0;padding:0}#orientation_cover{align-items:center;background-color:#000;flex-direction:column;height:100vh;justify-content:center;left:0;opacity:.85;position:absolute;top:0;width:100%;z-index:1050}#orientation_cover img{margin-bottom:20px;width:10%}#orientation_cover p{color:#fff;font-size:5.5vmin;margin:0;padding:0}.orientation_cover_flex{display:flex}.orientation_cover_none{display:none}.landscape_cover_flex{display:flex}.landscape_cover_none{display:none}.mirror{transform:scaleX(-1)}.direction_rtl{direction:rtl}.rotate_icon_scale_translate{transform:scale(1.8) translateY(-50%)}.rotate_icon_scale_translate_land{transform:scale(1.8) translateY(-50%) rotate(270deg)}.rotate_icon_scale_translate.mirror{transform:scale(-1.8,1.8) translateY(-50%)}#tips-text{margin-top:4px;text-align:center;text-overflow:ellipsis;width:90%}.tips-text-child2-hidden{display:none}.tips-text-child2{margin-left:5px}.tips-text-child2-rtl{margin-right:5px}@media only screen and (orientation:landscape){.background_ios11{height:100vmin}.landscape_cover_show{display:flex}}.splash_hidden{visibility:hidden}.start-button-container-land,.start-button-container-land-pc,.start-button-container-port{align-items:center;display:flex;justify-content:center;left:0;margin:auto;position:absolute;right:0}.start-button-container-port{height:32px;top:481px;width:151.7px}.start-button-container-land,.start-button-container-land-pc{font-size:12px;height:22px;top:271px;width:106px}.start-button{background-color:#30a2d0;border:2px solid rgba(0,0,0,.15);border-radius:8px;text-shadow:0 2px 3px #30a2d0}.start-button-show-land,.start-button-show-land-pc,.start-button-show-port{animation-name:show-bounce}.start-button-show-land,.start-button-show-land-pc{animation-name:show-bounce-land}.start-button-inner{background-image:linear-gradient(180deg,hsla(0,0%,100%,.5),hsla(0,0%,100%,0));background-origin:border-box;border:.87px solid hsla(0,0%,100%,.4);border-radius:6px;bottom:0;left:0;position:absolute;right:0;top:0}.custom-start-button-inner{background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:100%}@keyframes show-bounce{0%{transform:scale(0)}20%{transform:scale(1.2)}50%{transform:scale(.98)}to{transform:scale(1)}}@keyframes show-bounce-land{0%{transform:scale(0)}20%{transform:scale(.84)}50%{transform:scale(.68)}to{transform:scale(.7)}}.text-land,.text-land-pc,.text-port{color:#fff;font-size:10.3px;margin:0;padding:0}.text-land,.text-land-pc{transform:scale(.8)}.start-button .text-land,.start-button .text-land-pc,.start-button .text-port{font-size:12px;font-weight:900}.version{bottom:86px;font-size:12px;position:absolute;text-align:center;width:100%}.dark .text-port{color:#000}.animationTipsContainer-land,.animationTipsContainer-land-pc,.animationTipsContainer-port{align-items:center;display:flex;flex-direction:column;height:35px;margin:522px auto 0;position:relative;width:100%}.animationTipsContainer-port{margin-top:522px;z-index:1}.animationTipsContainer-land,.animationTipsContainer-land-pc{margin-top:288px;transform:scale(.8)}.ui_block_page{margin:auto;z-index:1100}.ui_block,.ui_block_page{background-color:#000;bottom:0;left:0;opacity:.6;position:absolute;right:0;top:0}.ui_block{transform:translateZ(0)}@keyframes ui_block_show{0%{opacity:0}to{opacity:.6}}@keyframes ui_block_hide{0%{opacity:.6}to{opacity:0}}.custom_alert .content .btn_content .button,.custom_alert .content .btn_content .custom_button{color:inherit;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.custom_alert{display:block;display:none;height:100%;height:640px;margin:auto;position:absolute;width:inherit;width:360px;z-index:1000}.custom_alert .content{background-color:#fff;border-radius:6px;box-shadow:1px 1px 8.7px #444;position:absolute;text-align:center;width:243px}.custom_alert .content .message,.custom_alert .content .title{font-size:14px;margin-left:5%;margin-right:5%;width:90%}.custom_alert .content .message{white-space:normal}.custom_alert .content .title_padding{padding-bottom:0;padding-top:9.7px}.custom_alert .content .message_padding{padding-bottom:9.7px;padding-top:9.7px}.custom_alert .content .single_content_padding{padding-bottom:9.7px;padding-top:19.3px}.custom_alert .content .line_separator{border-bottom:1px solid #000;opacity:.1;padding-top:8.7px}.custom_alert .content .btn_content_row{display:table;table-layout:fixed;width:100%}.custom_alert .content .btn_content .button{animation:btn_release .1s linear forwards;padding:9.7px 10px 11.3px}.custom_alert .content .btn_content .button:active{animation:btn_press .1s linear forwards}.custom_alert .content .btn_content .custom_button{align-items:center;display:flex;height:32px;justify-content:center}.custom_alert .content .btn_content .row{display:table-cell}.custom_alert .content .btn_content .btn_separator_height{background-color:#000;height:1px;opacity:.1;width:inherit}.custom_alert .content .btn_content .btn_separator_width{background-color:#000;height:inherit;opacity:.1;width:1px}.custom_alert .custom_content{padding:20px}@media screen and (orientation:portrait){.custom_alert{display:block;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}}@media screen and (orientation:landscape){.custom_alert{display:none;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}}.custom_alert_ignore_orientation{display:block;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}@keyframes custom_alert_anim_show{0%{opacity:0}60%{opacity:1;transform:scale(1)}80%{opacity:1;transform:scale(1.12)}to{opacity:1;transform:scale(1)}}@keyframes custom_alert_anim_hide{0%{opacity:1}to{opacity:0}}.custom_alert_show{animation:custom_alert_anim_show .3s linear forwards}@keyframes btn_press{0%{opacity:1}to{opacity:.5}}@keyframes btn_release{0%{opacity:.5}to{opacity:1}}.errorlabel{font-size:10px}.animated_text_wrap{color:#fff;font-size:10px;height:26px;line-height:26px;position:relative;text-align:center;width:100%}.dark .animated_text_wrap{color:#000}.animated_text_wrap_hide{display:none}.animated_text{align-items:center;display:flex;flex-direction:column;height:26px;justify-content:flex-start;line-height:13px;margin:0;opacity:0;position:absolute;top:100%;width:100%}.animated-text-move-to-top-port,.animated-text-reset-to-bottom-port{opacity:0}.animated-text-reset-to-bottom-port{top:26px}.animated-text-move-to-top-port,.animated_text_move_to_center{transition:top 1s,opacity 1s;transition-timing-function:linear}.animated_text_move_to_center{opacity:1;top:0}.animated-text-move-to-top-port{top:-30px}.sprite_main_res{background-image:url(shell-res/main_res.png);background-repeat:no-repeat;background-size:222px 248px;display:inline-block}.ic_360{background-position:-162px -217px;height:21px;width:20px}.ic_arrow_back{background-position:-110px -181px;height:22px;width:22px}.ic_arrow_right{background-position:-211px -95px;height:12px;width:8px}.ic_chrome{background-position:-182px -193px;height:20px;width:20px}.ic_close_white{background-position:-187px -95px;height:22px;width:22px}.ic_dialog_close{background-position:-134px -181px;height:22px;width:22px}.ic_iconic{background-position:-1px -1px;height:178px;width:158px}.ic_ios_share_button{background-position:-184px -215px;height:23px;width:16px}.ic_operator_logo_details{background-position:-68px -223px;height:24px;width:92px}.ic_operator_select{background-position:-187px -119px;height:22px;width:22px}.ic_pg_logo{background-position:-68px -181px;height:40px;width:40px}.ic_pg_logo_small{background-position:-110px -205px;height:12px;width:27px}.ic_qq{background-position:-187px -143px}.ic_qq,.ic_quark{height:22px;width:22px}.ic_quark{background-position:-187px -167px}.ic_rotate_screen{background-position:-161px -1px;height:60px;width:60px}.ic_step_1{background-position:-204px -191px;height:14px;width:14px}.ic_step_2{background-position:-139px -205px;height:14px;width:15px}.ic_step_arrow{background-position:-211px -109px;height:12px;width:7px}.ic_swipeup_arrow{background-position:-161px -63px;height:128px;width:24px}.ic_swipeup_hand{background-position:-1px -181px;height:55px;width:65px}.ic_swipeup_round{background-position:-187px -63px;height:30px;width:30px}.ic_uc{background-position:-158px -193px;height:22px;width:22px}.loading-container-land,.loading-container-land-pc,.loading-container-port{align-items:center;display:flex;flex-direction:column;left:0;position:absolute;right:0}.loading-container-port{top:477px}.loading-container-land,.loading-container-land-pc{top:265px}.progress-bar-container-land,.progress-bar-container-land-pc,.progress-bar-container-port{background-color:initial;height:13px;position:relative;width:212px}.progress-bar-container-land,.progress-bar-container-land-pc{transform:scale(.7)}.progress-bar-background{background-color:#111;border-radius:3.5px;height:100%;position:absolute;width:100%}.progress-bar-outline{border-radius:3.5px;bottom:0;left:0;position:absolute;right:0;top:0;transform:translateZ(0)}.border-inner{border:1.7px solid #272727}.border-outer{border:.85px solid #111}.progress-bar-fill-container{bottom:.87px;left:.87px;position:absolute;right:.87px;top:.87px}.progress-bar-fill{-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:#30a2d0;background-size:8.7px 100%;border-radius:3.5px;height:100%;position:absolute;width:0}.stripes{animation-duration:1s;animation-iteration-count:infinite;animation-name:animate-stripes;animation-timing-function:linear;background-image:linear-gradient(-75deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.1) 0,hsla(0,0%,100%,.1) 75%,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0))}.front-highlight{background-image:linear-gradient(90deg,hsla(0,0%,100%,0),#fff);border-radius:0 3.5px 3.5px 0;height:100%;max-width:20px;right:0;width:50%}.front-highlight,.top-highlight{position:absolute;transform:translateZ(0)}.top-highlight{background-color:hsla(0,0%,100%,.2);border-radius:3.5px 3.5px 0 0;height:50%;width:100%}@keyframes animate-stripes{0%{background-position:0 0}to{background-position:34.7px 0}}.custom-progress-bar-container{align-items:center;display:flex;height:40px;justify-content:center;width:240px}.custom-progress-bar-background{background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;position:absolute;top:0;width:100%;z-index:3}.custom-progress-bar-fill-container{border-radius:3px;height:24px;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:221px;z-index:2}#npveSplash{z-index:975}.npve_container .npve_bottom_content .npve_bottom_button_title_land,.npve_container .npve_bottom_content .npve_bottom_button_title_port,.npve_container .npve_bottom_content .npve_bottom_land,.npve_container .npve_bottom_content .npve_bottom_port,.npve_container .npve_bottom_content .npve_grid_1,.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc,.npve_container .npve_bottom_content .npve_text_bold_port,.npve_container .npve_bottom_content .npve_text_content_land,.npve_container .npve_bottom_content .npve_text_content_port,.npve_container .npve_bottom_content .npve_text_note_land,.npve_container .npve_bottom_content .npve_text_note_port,.npve_container .npve_bottom_content .npve_text_wrapper_land,.npve_container .npve_bottom_content .npve_text_wrapper_port,.npve_container .npve_middle_content .npve_main_desc_land,.npve_container .npve_middle_content .npve_main_desc_port{transform:scale(.87)}.npve_container .npve_middle_content .npve_continue_desc_land,.npve_container .npve_middle_content .npve_continue_desc_port{transform:scale(.75)}.npve_screen_compact{background-color:#fff;height:640px;margin:auto;position:absolute;transform:translateZ(0);width:360px}.npve_visible{visibility:visible}.npve_container{background-color:#fff;display:flex;flex-direction:column;font-size:12px;height:100%;position:relative;width:100%}.npve_container .npve_top_content{display:flex;justify-content:space-between;margin:26px}.npve_container .npve_top_content .title{color:#000;font-size:16px;line-height:16px;max-width:216.7px;text-align:right}.npve_container .npve_middle_content_port{margin:0 43.3px}.npve_container .npve_middle_content{align-items:center;display:flex;flex-direction:column;justify-content:center}.npve_container .npve_middle_content .npve_iconic_port{display:table;transform:scale(.87)}.npve_container .npve_middle_content .npve_iconic_land{display:table;margin-top:-90px;transform:scale(.62)}.npve_container .npve_middle_content .npve_main_desc_land,.npve_container .npve_middle_content .npve_main_desc_port{color:#000;display:flex;line-height:20px}.npve_container .npve_middle_content .npve_main_desc_port{line-height:26px;margin-top:-16px;min-height:150px;text-align:justify;width:312px;word-break:break-word}.npve_container .npve_middle_content .npve_main_desc_land{justify-content:center;margin:-25px 0 10px;min-height:50px;text-align:center;width:700px}.npve_container .npve_middle_content .npve_continue_button:hover,.npve_container .npve_middle_content .npve_continue_button_land:hover,.npve_container .npve_middle_content .npve_continue_button_port:hover{cursor:pointer;opacity:.5}.npve_container .npve_middle_content .npve_continue_button,.npve_container .npve_middle_content .npve_continue_button_land,.npve_container .npve_middle_content .npve_continue_button_port{background-color:rgba(81,211,33,.2);border:1px solid #51d321;border-radius:4px;color:#50d221;text-align:center;width:100%}.npve_container .npve_middle_content .npve_continue_button_port{height:43.3px;line-height:43.3px}.npve_container .npve_middle_content .npve_continue_button_land{font-size:13px;height:32px;line-height:32px;width:314px}.npve_container .npve_middle_content .npve_continue_button_active{opacity:.5}.npve_container .npve_middle_content .npve_continue_desc_land,.npve_container .npve_middle_content .npve_continue_desc_port{color:#000;line-height:17.3px;opacity:.3;text-align:center}.npve_container .npve_middle_content .npve_continue_desc_port{margin-top:5px;width:364px}.npve_container .npve_middle_content .npve_continue_desc_land{height:34px;margin-top:8px;width:736px}.npve_container .npve_bottom_content_port{min-height:130px}.npve_container .npve_bottom_content_land{max-height:80px;min-height:60px}.npve_container .npve_bottom_content{bottom:0;display:flex;flex:1;flex-direction:column;left:0;position:absolute;right:0}.npve_container .npve_bottom_content .npve_separate_line_port{background-color:#000;height:1.3px;margin-left:43.3px;margin-right:43.3px;margin-top:10px;opacity:.1}.npve_container .npve_bottom_content .npve_separate_line_land{background-color:#000;height:1.3px;margin-left:20px;margin-right:20px;opacity:.1}.npve_container .npve_bottom_content .npve_bottom_port{display:block}.npve_container .npve_bottom_content .npve_bottom_land{align-items:center;display:flex;justify-content:center;min-height:60px}.npve_container .npve_bottom_content .npve_bottom_button_title_land,.npve_container .npve_bottom_content .npve_bottom_button_title_port,.npve_container .npve_bottom_content .npve_text_wrapper_land,.npve_container .npve_bottom_content .npve_text_wrapper_port{color:#000;flex:1;line-height:14px}.npve_container .npve_bottom_content .npve_bottom_button_title_port{margin-bottom:10px;margin-top:10px;text-align:justify}.npve_container .npve_bottom_content .npve_bottom_button_title_land{display:block;margin-right:30px;max-width:260px;min-width:260px;text-align:center}.npve_container .npve_bottom_content .npve_text_wrapper_port{text-align:justify}.npve_container .npve_bottom_content .npve_text_wrapper_land{align-items:center;display:flex;flex-direction:column;justify-content:center}.npve_container .npve_bottom_content .npve_text_content_land,.npve_container .npve_bottom_content .npve_text_content_port{align-items:center;display:flex}.npve_container .npve_bottom_content .npve_text_content_port{justify-content:left}.npve_container .npve_bottom_content .npve_text_content_land{justify-content:center;width:736px}.npve_container .npve_bottom_content .npve_text_bold_port{font-weight:700;margin:10px 0}.npve_container .npve_bottom_content .npve_text_bold_land{font-weight:700;margin-right:16px;max-width:200px;text-align:center}.npve_container .npve_bottom_content .npve_line_text_port{max-width:130px;text-align:justify}.npve_container .npve_bottom_content .npve_line_text_land{max-width:250px;text-align:justify}.npve_container .npve_bottom_content .npve_line_num{margin-right:12px;min-width:14px;transform:scale(1.2)}.npve_container .npve_bottom_content .npve_line_arrow_land,.npve_container .npve_bottom_content .npve_line_arrow_port{min-width:7px;transform:scale(1.2)}.npve_container .npve_bottom_content .npve_line_arrow_port{margin:0 20px}.npve_container .npve_bottom_content .npve_line_arrow_land{margin:0 16px}.npve_container .npve_bottom_content .npve_text_note_land,.npve_container .npve_bottom_content .npve_text_note_port{line-height:16px;opacity:.3}.npve_container .npve_bottom_content .npve_text_note_port{margin-top:15px;text-align:justify}.npve_container .npve_bottom_content .npve_text_note_land{margin-top:11px;text-align:center;width:736px}.npve_container .npve_bottom_content .npve_grid_1{align-items:center;display:flex;flex:2;justify-content:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content:hover{color:#0f55cc;cursor:pointer}.npve_container .npve_bottom_content .npve_grid_1 .grid_content{align-items:center;color:#000;display:flex;flex:1;flex-direction:column}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row{align-items:center;display:flex;flex-direction:row}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_icon{min-width:20px}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc{display:block;line-height:12px;margin-left:5px;max-width:150px;text-align:left}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_title{text-decoration:underline}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_seperator{height:5px}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_content{opacity:.3}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc_active_color{color:#0f55cc}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text{color:#000;display:flex;flex:1;line-height:10px;opacity:.3;text-align:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_center{justify-content:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_left{justify-content:flex-start}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_right{justify-content:flex-end}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_center{align-items:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_left{align-items:flex-start}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_right{align-items:flex-end}.qpage{background-color:#fff;height:640px;margin:auto;position:absolute;width:360px;z-index:975}.qpage_container{background-color:#fff;display:flex;flex-direction:column;height:100%;text-align:center;width:100%;z-index:950}.qpage_container .qpage_content{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.qpage_container .qpage_content .qpage_boy{transform:scale(.82)}.qpage_container .qpage_content .qpage_title{color:#000;font-size:20px;line-height:20px;position:relative;text-align:center;top:0;width:80%}.qpage_container .qpage_content .qpage_desc{color:#000;font-size:11.3px;line-height:14px;opacity:.3;position:relative;text-align:center;top:8.7px;width:80%}.qpage_container .qpage_content .qpage_button{background-color:rgba(24,17,84,.075);border-radius:2px;color:#000;font-size:10.3px;height:36.3px;line-height:36.3px;margin-top:20px;max-width:303.3px;min-width:156px}.footer-container{display:flex;height:77px}.footer-container,.footer-mask-container-land,.footer-mask-container-port{bottom:0;position:absolute;width:100%}.footer-mask-container-port{display:flex;flex-direction:column;height:229px}.footer-mask-container-land{height:131px}.footer-mask{height:100%;position:absolute;width:100%}.footer-mask-black{background-image:linear-gradient(180deg,rgba(0,0,0,.03),#000)}.footer-mask-color{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#fff)}.footer-container img{height:117px;width:100%}.footer-image-container{display:flex;height:100%;justify-content:center;position:absolute;width:100%;z-index:0}#footer-copyright-image{background-image:url(shell-res/copyright.png);background-position:50%;background-size:cover;height:25px;position:absolute;transform:scale(.333);width:1080px}.footer-text-img{transition:.2s}.logo-container{align-items:center;display:flex;flex-direction:row-reverse;position:absolute;right:0}.swipeup_text{bottom:40px;font-size:12px}.swipeup_container,.swipeup_text{color:#fff;left:0;position:absolute;right:0}.swipeup_container{bottom:0;height:270px;margin:auto;top:0;width:224px}.swipeup_slide_container{left:50%;position:absolute;top:29px;transform:scale(1);transform-origin:center top}.swipeup_background{animation:swipeup_background_anim .75s forwards;background-color:#000;border-radius:7px;height:100%;opacity:.8;width:100%}.swipeup_arrow{animation:swipeup_arrow_fade_anim,swipeup_arrow_clip_anim;animation-duration:2.4s,2.4s;animation-iteration-count:infinite,infinite;animation-timing-function:ease,cubic-bezier(.84,0,.16,1);left:-12px;opacity:0;position:absolute}.swipeup_slide{animation:swipeup_slide_anim;animation-duration:2.4s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(.84,0,.16,1);position:absolute;top:126px}.swipeup_round{animation:swipeup_round_anim 2.4s infinite;left:-16px;opacity:1;position:absolute;top:-20px}.swipeup_hand{animation:swipeup_hand_anim 2.4s infinite;left:-9px;opacity:1;position:absolute;top:-12px}@keyframes swipeup_background_anim{0%{opacity:0}to{opacity:.8}}@keyframes swipeup_arrow_clip_anim{0%,33%{height:129px}to{height:0}}@keyframes swipeup_arrow_fade_anim{0%,17%{opacity:0}50%,to{opacity:.6}}@keyframes swipeup_slide_anim{0%,33%{transform:translateY(0)}to{transform:translateY(-120px)}}@keyframes swipeup_round_anim{0%{opacity:0}33%,to{opacity:1}}@keyframes swipeup_hand_anim{0%{transform:scale(1)}33%,to{transform:scale(.9)}}#canvas-shadow{background-color:#000;display:block;-webkit-filter:drop-shadow(2px 2px 10px rgba(0,0,0,.5));filter:drop-shadow(2px 2px 10px rgba(0,0,0,.5));height:736px;position:absolute;width:414px}.splash-paytable{height:100%;transition:opacity .5s ease;visibility:hidden;width:100%}.splash-tint-background{background-color:rgba(0,0,0,.6);height:100%;position:absolute;width:100%}.splash-game-logo{background-size:320px 120px;height:120px;margin:0 auto;opacity:0;transition:opacity .5s ease;width:320px}.splash-paytable-slide-container{height:345px;margin:0 auto 54px;opacity:0;overflow:hidden;position:relative;transition:opacity .5s ease;width:360px}.splash-paytable-dots-container{bottom:100px;position:absolute;text-align:center;width:100%}.splash-paytable-dot{background-color:#fff;border-radius:50%;display:inline-block;height:6px;margin:0 6px;opacity:.3;transition:opacity .3s ease;width:6px}.splash-paytable-dot-active,.splash-paytable-dot-active:hover{opacity:1}.splash-slides-container{display:block;left:0;margin:0 20px;opacity:1;position:absolute;transition:opacity .5s ease;width:320px}.splash-content-image{background-size:320px 345px;height:345px;width:320px}.splash-current-move-to-left{animation-duration:.5s;animation-name:splash-current-move-to-left}@keyframes splash-current-move-to-left{0%{left:0}to{left:-30%}}.splash-next-move-to-left{animation-duration:.5s;animation-name:splash-next-move-to-left}@keyframes splash-next-move-to-left{0%{left:30%}to{left:0}}.splash-current-move-to-right{animation-duration:.5s;animation-name:splash-current-move-to-right}@keyframes splash-current-move-to-right{0%{left:0}to{left:30%}}.splash-next-move-to-right{animation-duration:.5s;animation-name:splash-next-move-to-right}@keyframes splash-next-move-to-right{0%{left:-30%}to{left:0}}.splash-rtp-content{align-items:center;color:#fff;display:flex;font-size:13px;height:240px;line-height:20px;margin:0 auto;text-align:center;transition:color .5s ease;width:260px}.splash-rtp-title{color:#fff;font-size:16px;height:40px;text-align:center}.splash-rtp-dot{background-color:#fff;border-radius:50%;display:inline-block;height:6px;margin:0 1.5px;width:6px}.splash-rtp-action-holder{align-items:center;display:flex;height:40px;justify-content:center;margin:10px 0 15px}.splash-loading-circle-container{display:flex;margin-top:10px}.splash-loading-circle{animation-direction:alternate;animation-duration:.25s;animation-iteration-count:infinite;animation-name:splash_loading_circle_bounce;animation-timing-function:ease-out;background-color:#fff;border-radius:50%;height:6px;margin:0 1.5px;position:relative;width:6px}.splash-loading-circle:first-of-type{animation-delay:0s}.splash-loading-circle:nth-of-type(2){animation-delay:-75ms}.splash-loading-circle:nth-of-type(3){animation-delay:-.15s}@keyframes splash_loading_circle_bounce{0%{bottom:0}90%,to{bottom:13px}}.splash-retry-button{align-items:center;border:2px solid hsla(0,0%,100%,.4);border-radius:8px;color:#fff;display:flex;font-size:16px;height:40px;justify-content:center;line-height:20px;max-width:180px;opacity:1;padding:0 40px;text-align:center;transform:scale(1)}.splash-retry-button:active{opacity:.8;transform:scale(.95)}.splash-retry-button:hover{opacity:.8}";
            if (yi() === "vi") {
              b = b.replace("PingFang SC", "Arial");
            }
            var c = this.Oa;
            b = b.replace("shell-res/main_res.png", c[this.Ga]);
            delete c[this.Ga];
            if (hh.getOrientationMode() === "port") {
              b = b.replace("shell-res/copyright.png", c[this.Va]);
            }
            this.Xa(c[this.Ba]);
            delete c[this.Ba];
            b = (b = b.replace("splash/launch.jpg", c[this.Pa])).replace(/splash\/splash.jpg/g, c[this.ja]);
            a.innerHTML = b;
            document.head.appendChild(a);
          };
          c.prototype.La = function (a, b) {
            if (b === undefined) {
              b = false;
            }
            if (b) {
              return ai.resource.resolveUrl(a);
            } else {
              return this.resource.resolveUrl(a);
            }
          };
          c.prototype.Wa = function () {
            if (Lk.v("start_button.enable")) {
              var a = Lk.v("start_button.mode");
              var b = Lk.v("start_button.image");
              if (a && b && ai.resource.hasEntry(b)) {
                return {
                  src: ai.resource.resolveUrl(b),
                  type: Oj.Image
                };
              }
            }
          };
          c.prototype.Ua = function () {
            if (Lk.v("loading_bar.enable")) {
              var a = Lk.v("loading_bar.mode");
              var b = Lk.v("loading_bar.background_image");
              if (a && b && ai.resource.hasEntry(b)) {
                return {
                  src: ai.resource.resolveUrl(b),
                  type: Oj.Image
                };
              }
            }
          };
          c.prototype.Xa = function (a) {
            this.component.updateState(fl, {
              state: "init",
              certBlobUrl: a
            });
          };
          return c;
        }(jm);
        (function (a) {
          a[a.Disabled = 0] = "Disabled";
          a[a.Enabled = 1] = "Enabled";
          a[a.NotSupported = -1] = "NotSupported";
        })(em || (em = {}));
        var pm;
        var qm;
        var rm;
        var sm;
        var tm = {
          Ka: undefined,
          getWebGLStatus: function () {
            if (this.Ka === undefined) {
              this.Ka = function () {
                if (e.WebGLRenderingContext) {
                  for (var a = e.document.createElement("canvas"), b = 0, c = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"]; b < c.length; b++) {
                    var d = c[b];
                    try {
                      var f = a.getContext(d);
                      if (f && typeof f.getParameter == "function") {
                        return em.Enabled;
                      }
                    } catch (a) {}
                  }
                  return em.Disabled;
                }
                return em.NotSupported;
              }();
            }
            return this.Ka;
          }
        };
        (function (a) {
          a[a.WebGLNotSupported = 1] = "WebGLNotSupported";
          a[a.WebGLSupportedButDisabled = 2] = "WebGLSupportedButDisabled";
          a[a.BrowserVersionTooLow = 3] = "BrowserVersionTooLow";
          a[a.BrowserNotInclude = 4] = "BrowserNotInclude";
          a[a.LowSpec = 5] = "LowSpec";
          a[a.NativeBrowserTooLow = 6] = "NativeBrowserTooLow";
          a[a.OSVersionTooLow = 7] = "OSVersionTooLow";
          a[a.NativeWebGLNotSupported = 8] = "NativeWebGLNotSupported";
          a[a.AdblockDetected = 9] = "AdblockDetected";
          a[a.APINotDetected = 10] = "APINotDetected";
          a[a.ES6NotSupported = 11] = "ES6NotSupported";
          a[a.InsecureContext = 12] = "InsecureContext";
        })(pm || (pm = {}));
        (function (a) {
          a[a.QuitPage = 0] = "QuitPage";
          a[a.Continue = 1] = "Continue";
        })(qm || (qm = {}));
        (function (a) {
          a[a.Top = 1] = "Top";
          a[a.Middle = 2] = "Middle";
        })(rm || (rm = {}));
        (function (a) {
          a[a.Auto = 0] = "Auto";
          a[a.Chrome = 1] = "Chrome";
          a[a.QQ = 2] = "QQ";
          a[a.UC = 3] = "UC";
          a[a.Quark = 4] = "Quark";
        })(sm || (sm = {}));
        var ob;
        var um;
        var vm;
        var wm = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.$a = undefined;
            b.tc = undefined;
            b.ic = undefined;
            b.nc = [];
            b.ec = function () {
              if (b.$a) {
                b.$a();
              }
            };
            b.rc = function (a) {
              var b = a.currentTarget;
              if (b) {
                b.classList.add("npve_continue_button_active");
              }
            };
            b.oc = function (a) {
              var b = a.currentTarget;
              if (b) {
                b.classList.remove("npve_continue_button_active");
              }
            };
            b.sc = function (a) {
              var b = a.currentTarget;
              if (b) {
                var c = b.querySelector(".grid_row .grid_desc");
                if (c) {
                  c.classList.add("grid_desc_active_color");
                }
              }
            };
            b.ac = function (a) {
              var b = a.currentTarget;
              if (b) {
                var c = b.querySelector(".grid_row .grid_desc");
                if (c) {
                  c.classList.remove("grid_desc_active_color");
                }
              }
            };
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {};
          c.prototype.onStateChange = function (a) {
            var b = this;
            if (this.rootElement) {
              this.rootElement.classList.remove("npve_dismiss");
              this.rootElement.classList.add("npve_visible");
            } else {
              var c = this.uc(a.reason, a.onContinue, a.onDiscontinue);
              this.T = hh.getOrientationMode();
              this.rootElement = this.hc("npve_visible npve_screen_compact", undefined, "npveSplash");
              var d = this.hc(this.T === "port" ? "screen_safe_area" : `screen_safe_area_${this.T}`);
              var f = this.lc();
              var g = this.fc();
              var h = this.dc(c.descText);
              var i = this.vc(c, a);
              f.appendChild(g);
              f.appendChild(h);
              if (i) {
                f.appendChild(i);
              }
              this.rootElement.appendChild(d);
              this.rootElement.appendChild(f);
              if (this.ic) {
                e.addEventListener("beforeunload", this.ic);
              }
              this.on("Shell.Scaled", function (a) {
                var c = a.payload;
                if (c.adjust) {
                  c.adjust(b.rootElement, "DesignWidthHeight");
                }
              });
            }
            this.emit("Shell.GetScale", undefined, function (a) {
              if (!a.error) {
                var c = a.response;
                if (c == null ? undefined : c.adjust) {
                  c.adjust(b.rootElement, "DesignWidthHeight");
                }
              }
            });
          };
          c.prototype.onShow = function () {};
          c.prototype.onDestroy = function () {
            for (var a = 0; a < this.nc.length; a++) {
              var b = document.getElementById(`pveBtn_${a}`);
              if (b) {
                b.removeEventListener("click", this.nc[a]);
              }
              if (b) {
                b.removeEventListener("touchstart", this.sc);
              }
              if (b) {
                b.removeEventListener("touchend", this.ac);
              }
            }
            if (this.tc) {
              this.tc.removeEventListener("click", this.ec);
            }
            if (this.tc) {
              this.tc.removeEventListener("touchstart", this.rc);
            }
            if (this.tc) {
              this.tc.removeEventListener("touchend", this.oc);
            }
            if (this.ic) {
              e.removeEventListener("beforeunload", this.ic);
            }
            var c = this.rootElement.parentNode;
            if (c) {
              c.removeChild(this.rootElement);
            }
            this.$a = undefined;
            this.tc = undefined;
            this.ic = undefined;
            this.nc = [];
          };
          c.prototype.uc = function (a, b, c) {
            hh.getURLSearchParam().get("operator_token");
            var d = hh.getOSName();
            var e = "";
            var f = "";
            var g = [];
            this.$a = function () {
              if (b) {
                b();
              }
            };
            this.ic = function () {
              if (c) {
                c();
              }
            };
            if (a === pm.LowSpec) {
              e = xi("GameShell.NpveDeviceNotSupportDesc");
            } else if (a === pm.OSVersionTooLow) {
              e = xi("GameShell.NpveSystemVersionTooLowDesc");
              if (d === Zf) {
                f = (f = xi("GameShell.AndroidUpdateTutorialStep")).replace("<<#1>>", xi("GameShell.PveUpdateTutorial"));
              } else if (d === $f) {
                f = (f = xi("GameShell.IosUpdateTutorialStep")).replace("<<#1>>", xi("GameShell.PveUpdateTutorial"));
              }
            } else if (a === pm.BrowserNotInclude || a === pm.BrowserVersionTooLow || a === pm.NativeBrowserTooLow || a === pm.APINotDetected) {
              e = xi("GameShell.NpveBrowserVersionTooLowDesc");
              g = this.Ac();
            } else if (a === pm.NativeWebGLNotSupported || a === pm.WebGLSupportedButDisabled || a === pm.WebGLNotSupported) {
              e = xi("GameShell.NpveWebGLNotSupportDesc");
              g = this.Ac();
              this.$a = undefined;
            } else if (a === pm.AdblockDetected) {
              e = xi("GameShell.PveAdblockDetectedMessage");
            } else if (a === pm.ES6NotSupported) {
              e = xi("GameShell.NpveBrowserVersionTooLowDesc");
              g = this.Ac();
              this.$a = undefined;
            } else if (a === pm.InsecureContext) {
              e = xi("GameShell.NpveInsecureContextDesc");
              g = this.Ac();
            }
            return {
              descText: e,
              tutorialText: f,
              buttons: g
            };
          };
          c.prototype.Ac = function () {
            var a = hh.getURLSearchParam().get("pve_bb") || "0";
            var b = [];
            var c = "https://browser.qq.com/";
            switch (parseInt(a, 10)) {
              case sm.Chrome:
                break;
              case sm.QQ:
                b.push({
                  iconClass: "ic_qq",
                  desc: xi("GameShell.PveQQBrowser"),
                  desc1: xi("GameShell.PveQQBrowserDesc"),
                  action: function () {
                    e.open(c);
                  }
                });
                break;
              case sm.UC:
                b.push({
                  iconClass: "ic_uc",
                  desc: xi("GameShell.PveUCBrowser"),
                  desc1: xi("GameShell.PveUCBrowserDesc"),
                  action: function () {
                    e.open("https://www.uc.cn/");
                  }
                });
                break;
              case sm.Quark:
                b.push({
                  iconClass: "ic_quark",
                  desc: xi("GameShell.PveQuarkBrowser"),
                  desc1: xi("GameShell.PveQuarkBrowserDesc"),
                  action: function () {
                    e.open("https://myquark.cn/");
                  }
                });
                break;
              case sm.Auto:
              default:
                if (wi.locale() === "zh") {
                  b.push({
                    iconClass: "ic_qq",
                    desc: xi("GameShell.PveQQBrowser"),
                    desc1: xi("GameShell.PveQQBrowserDesc"),
                    action: function () {
                      e.open(c);
                    }
                  });
                }
            }
            b.push({
              iconClass: "ic_chrome",
              desc: xi("GameShell.PveChromeBrowser"),
              desc1: xi("GameShell.PveChromeBrowserDesc"),
              action: function () {
                e.open("https://www.google.com/chrome/");
              }
            });
            return b;
          };
          c.prototype.lc = function () {
            return this.hc("npve_container");
          };
          c.prototype.fc = function () {
            var a = this.hc(`npve_top_content npve_top_content_${this.T}`);
            var b = this.hc("sprite_main_res ic_operator_logo_details");
            a.appendChild(b);
            if (this.mc() === rm.Top) {
              a.appendChild(this.gc());
            }
            return a;
          };
          c.prototype.dc = function (a) {
            var b = this.T;
            var c = this.hc(`npve_middle_content npve_middle_content_${b}`);
            var d = this.hc(`npve_iconic_${b}`);
            var e = this.hc("sprite_main_res ic_iconic");
            var f = this.hc(`npve_main_desc_${b}`, `${xi("GameShell.PveDearClient")}<br />${a}`);
            if (this.mc() === rm.Middle) {
              c.appendChild(this.gc());
              c.appendChild(this.bc());
            }
            d.appendChild(e);
            c.appendChild(d);
            c.appendChild(f);
            if (this.$a) {
              this.tc = this._c();
              c.appendChild(this.tc);
              c.appendChild(this.wc());
            }
            return c;
          };
          c.prototype.vc = function (a, b) {
            var c = this.xc(a.buttons);
            var d = this.yc(a.tutorialText);
            if (this.Sc(c, d)) {
              var e = this.hc(`npve_bottom_content npve_bottom_content_${this.T}`);
              var f = this.kc(a.buttons.length, b);
              if (f) {
                e.appendChild(f);
              }
              if (c) {
                e.appendChild(c);
              }
              if (d) {
                e.appendChild(d);
              }
              return e;
            }
          };
          c.prototype.Sc = function () {
            return true;
          };
          c.prototype._c = function () {
            var a = this.hc(`npve_continue_button_${this.T}`, xi("GameShell.PveContVisit"));
            a.addEventListener("click", this.ec);
            a.addEventListener("touchstart", this.rc);
            a.addEventListener("touchend", this.oc);
            return a;
          };
          c.prototype.wc = function () {
            return this.hc(`npve_continue_desc_${this.T}`, xi("GameShell.PveContVisitWarn"));
          };
          c.prototype.kc = function (a, b) {
            if (a > 0 || b.onContinue) {
              return this.hc(`npve_separate_line_${this.T}`);
            }
          };
          c.prototype.xc = function (a) {
            var b = a.length;
            if (!(b <= 0)) {
              for (var c = this.T, d = this.hc(`npve_bottom_${c}`), e = this.hc(`npve_bottom_button_title_${c}`, xi("GameShell.PveDownloadClientApp")), f = this.hc("npve_grid_1"), g = 0; g < b; g++) {
                var h = a[g];
                var i = "grid_item_center";
                if (this.T === "port") {
                  if (g === 0 && b > 1) {
                    i = "grid_item_left";
                  } else if (g === b && b > 1) {
                    i = "grid_item_right";
                  }
                }
                var j = this.hc(`grid_content ${i}`, undefined, `pveBtn_${g}`);
                var k = this.hc("grid_row");
                var l = this.hc(`sprite_main_res ${h.iconClass} grid_icon`);
                var m = this.hc("grid_desc", undefined, `grid_desc_${g}`);
                var n = this.hc("grid_desc_title", h.desc);
                var o = this.hc("grid_desc_seperator");
                var p = this.hc("grid_desc_content", h.desc1);
                if (h.action) {
                  j.addEventListener("click", h.action);
                  j.addEventListener("touchstart", this.sc);
                  j.addEventListener("touchend", this.ac);
                  this.nc.push(h.action);
                }
                m.appendChild(n);
                m.appendChild(o);
                m.appendChild(p);
                k.appendChild(l);
                k.appendChild(m);
                j.appendChild(k);
                f.appendChild(j);
              }
              d.appendChild(e);
              d.appendChild(f);
              return d;
            }
          };
          c.prototype.yc = function (a) {
            if (!(a.length <= 0)) {
              var b = this.T;
              var c = this.hc(`npve_text_wrapper_${b}`);
              var d = this.hc(`npve_text_content_${b}`);
              var e = a.split("|");
              var f = e.shift();
              if (f) {
                var g = this.hc(`npve_text_bold_${b}`, f);
                if (b === "port") {
                  c.appendChild(g);
                } else {
                  d.appendChild(g);
                }
              }
              for (var h = "", i = 0; i < e.length; i++) {
                var j = e[i].trim();
                if (j.startsWith("*")) {
                  if (h.length > 0) {
                    h += "<br />";
                  }
                  h += j;
                } else {
                  if (i !== 0) {
                    d.appendChild(this.hc(`sprite_main_res ic_step_arrow npve_line_arrow_${b}`));
                  }
                  d.appendChild(this.hc(`sprite_main_res ic_step_${i + 1} npve_line_num`));
                  d.appendChild(this.hc(`npve_line_text_${b}`, j));
                }
              }
              c.appendChild(d);
              if (h.length > 0) {
                c.appendChild(this.hc(`npve_text_note_${b}`, h));
              }
              return c;
            }
          };
          c.prototype.mc = function () {
            return rm.Top;
          };
          c.prototype.gc = function () {
            return this.hc("title", xi("GameShell.PveCheck"));
          };
          c.prototype.bc = function () {
            return this.hc(`npve_separate_line_${this.T}`);
          };
          c.prototype.hc = function (a, b, c) {
            var d = document.createElement("div");
            if (a) {
              d.className = a;
            }
            if (b) {
              d.innerHTML = b;
            }
            if (c) {
              d.id = c;
            }
            return d;
          };
          return c;
        }(bj);
        var xm = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onRun = function () {
            return g(this, undefined, undefined, function () {
              var a;
              var b;
              return h(this, function (c) {
                switch (c.label) {
                  case 0:
                    this.emitState("PveCheck");
                    a = hh;
                    return [4, this.Ec()];
                  case 1:
                    a.webpSupported = c.sent();
                    if ((b = hh.getURLSearchParam().get("pve")) === "false" || b === "0") {
                      this.Cc();
                      return [2];
                    } else if (this.Mc()) {
                      if (hh.isSecureContext()) {
                        if (sg.StorageKey && Ul(sg.StorageKey.forcePlay, false)) {
                          this.state.param.reason = Ul(tg);
                          this.Cc();
                          return [2];
                        } else if (this.Es()) {
                          return [2];
                        } else if (hh.isIOSStandalone()) {
                          this.Cc();
                          return [2];
                        } else if (hh.isApp()) {
                          return [3, 3];
                        } else {
                          return [4, this.Hc()];
                        }
                      } else {
                        this.Vc(pm.InsecureContext);
                        return [2];
                      }
                    } else {
                      this.Vc(pm.ES6NotSupported);
                      return [2];
                    }
                  case 2:
                    c.sent();
                    c.label = 3;
                  case 3:
                    if (hh.isIOS()) {
                      this.Bc();
                    } else if (hh.isAndroid()) {
                      this.jc();
                    } else if (hh.isPc()) {
                      this.Pc();
                    } else if (hh.isWindows() || hh.isMac()) {
                      this.Gc();
                    } else {
                      this.Cc();
                    }
                    return [2];
                }
              });
            });
          };
          c.prototype.Ec = function () {
            return new Promise(function (a) {
              var b = false;
              try {
                var c = document.createElement("canvas");
                b = c.toDataURL("image/webp").startsWith("data:image/webp");
              } catch (a) {
                b = false;
              }
              if (b) {
                a(b);
              } else {
                var d = new Image();
                d.onload = function () {
                  b = d.width > 0 && d.height > 0;
                  a(b);
                };
                d.onerror = function () {
                  a(false);
                };
                d.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
              }
            });
          };
          c.prototype.Hc = function () {
            var a = this;
            var b = this.context.resource.resolveUrl("shell-res/ad/ad_adv_dfp_test.js");
            return new Promise(function (c) {
              fetch(b).then(function () {
                c();
              }).catch(function () {
                a.Vc(pm.AdblockDetected);
              });
            });
          };
          c.prototype.Mc = function () {
            try {
              Function("", "");
              return true;
            } catch (a) {
              return false;
            }
          };
          c.prototype.Bc = function () {
            if (this.Rc()) {
              this.Vc(pm.LowSpec);
            } else {
              var a = hh.getMinOSVersionInfo();
              if (a.hasMinOSVersion && a.foundOS && !a.isMinOSVersion) {
                this.Vc(pm.OSVersionTooLow);
              } else if (hh.getBrowserType().toLowerCase() === "webkit") {
                if (hh.isWkWebview() || hh.isCacheStorageSupported()) {
                  this.Cc();
                } else {
                  this.Vc(pm.BrowserNotInclude);
                }
              } else if (tm.getWebGLStatus() !== em.Enabled) {
                this.Vc(pm.WebGLNotSupported);
              } else {
                this.Cc();
              }
            }
          };
          c.prototype.jc = function () {
            if (this.Rc()) {
              this.Vc(pm.LowSpec);
            } else {
              var a = hh.getMinOSVersionInfo();
              if (a.hasMinOSVersion && a.foundOS && !a.isMinOSVersion) {
                this.Vc(pm.OSVersionTooLow);
              } else if (tm.getWebGLStatus() !== em.Enabled) {
                this.Vc(pm.WebGLNotSupported);
              } else if (hh.isApp()) {
                this.Cc();
              } else if (hh.isBrowserTypeSupported()) {
                var b = hh.getWhiteListCompatibleCheckInfo();
                if (b.hasWhiteList && b.foundBrowser && !b.isMinBrowserVersion) {
                  this.Vc(pm.BrowserVersionTooLow);
                } else {
                  this.Cc();
                }
              } else {
                this.Vc(pm.BrowserNotInclude);
              }
            }
          };
          c.prototype.Pc = function () {
            if (tm.getWebGLStatus() !== em.Enabled) {
              this.Vc(pm.WebGLNotSupported);
            } else {
              this.Cc();
            }
          };
          c.prototype.Gc = function () {
            if (tm.getWebGLStatus() !== em.Enabled) {
              this.Vc(pm.WebGLNotSupported);
            } else {
              var a = hh.getWhiteListCompatibleCheckInfo();
              if (hh.isBrowserTypeSupported()) {
                if (a.hasWhiteList && a.foundBrowser && !a.isMinBrowserVersion) {
                  this.Vc(pm.BrowserVersionTooLow);
                } else {
                  this.Cc();
                }
              } else {
                this.Vc(pm.BrowserNotInclude);
              }
            }
          };
          c.prototype.Es = function () {
            this.emit("Alert.Dismiss", undefined, function (a) {
              if (a.response !== 16 || a.error) {
                ul("GameReady", fb(2));
              }
            });
          };
          c.prototype.Rc = function () {
            var a = hh.getDeviceCompatibleTerms();
            if (!a) {
              return false;
            }
            if (!a.minMemory) {
              return false;
            }
            if (+a.minMemory < 2048) {
              return false;
            }
            if (hh.isIOS()) {
              var b = e.devicePixelRatio || 1;
              var c = Math.min(hh.getScreenHeight(), hh.getScreenWidth()) * b;
              if (c === 1242 || c === 750) {
                switch (hh.getGPU()) {
                  case "Apple A8 GPU":
                    return true;
                  case "Apple A9 GPU":
                    if (hh.getOSMajorVersion() <= 10) {
                      return true;
                    }
                }
              }
            }
            return !(Math.min(hh.getScreenWidth(), hh.getScreenHeight()) * devicePixelRatio >= 720) && hh.getGPU() !== "Apple A9 GPU";
          };
          c.prototype.Cc = function () {
            this.emitState("PveCheckComplete");
          };
          c.prototype.Vc = function (a) {
            var b = this;
            fk(tg, a);
            this.state.param.reason = a;
            this.state.param.reasonString = this.Zc(a);
            this.component.create(wm);
            this.component.updateState(wm, {
              reason: a,
              onContinue: function () {
                var a;
                b.emit("Shell.PWDEnabled");
                b.Oc(qm.Continue);
                var c = (a = sg.StorageKey) === null || a === undefined ? undefined : a.forcePlay;
                if (c && !Ul(c, false)) {
                  fk(c, true);
                }
                b.component.destroy(wm);
                b.emitState("PveCheckComplete");
              },
              onDiscontinue: function () {
                b.Oc(qm.QuitPage);
              }
            });
            if (!(a !== pm.ES6NotSupported && a !== pm.NativeWebGLNotSupported && a !== pm.WebGLSupportedButDisabled && a !== pm.WebGLNotSupported && a !== pm.InsecureContext)) {
              this.Oc();
            }
            this.view.appendTo(wm, "overlay");
            this.view.show(wm);
            this.emit("Shell.PWDDisabled");
          };
          c.prototype.Zc = function (a) {
            var b;
            switch (a) {
              case pm.BrowserNotInclude:
                b = "(pve - browser not included)";
                break;
              case pm.BrowserVersionTooLow:
                b = "(pve - browser version too low)";
                break;
              case pm.WebGLNotSupported:
                b = "(pve - webgl not support)";
                break;
              case pm.WebGLSupportedButDisabled:
                b = "(pve - webgl supported but disabled)";
                break;
              case pm.NativeBrowserTooLow:
                b = "(pve - native browser version too low)";
                break;
              case pm.OSVersionTooLow:
                b = "(pve - os version too low)";
                break;
              case pm.NativeWebGLNotSupported:
                b = "(pve - native webgl not support)";
                break;
              case pm.AdblockDetected:
                b = "(pve - adblock detected)";
                break;
              case pm.APINotDetected:
              case pm.ES6NotSupported:
                b = "(pve - api not detected)";
                break;
              case pm.InsecureContext:
                b = "(pve - insecure context)";
                break;
              default:
                b = "";
            }
            return b;
          };
          c.prototype.Oc = function (a) {
            var b;
            switch (this.state.param.reason) {
              case pm.BrowserNotInclude:
              case pm.BrowserVersionTooLow:
                b = "browser not compatible";
                break;
              case pm.WebGLNotSupported:
                b = "webgl not supported";
                break;
              case pm.WebGLSupportedButDisabled:
                b = "webgl supported but disabled";
                break;
              case pm.LowSpec:
                b = "(pve - spec too low)";
                break;
              case pm.NativeBrowserTooLow:
                b = "native browser version too low";
                break;
              case pm.OSVersionTooLow:
                b = "os version too low";
                break;
              case pm.NativeWebGLNotSupported:
                b = "native webgl not support";
                break;
              case pm.AdblockDetected:
                b = "adblock detected";
                break;
              case pm.APINotDetected:
                b = "api not detected";
                break;
              case pm.ES6NotSupported:
                b = "es6 not supported";
                break;
              case pm.InsecureContext:
                b = "insecure context";
                break;
              default:
                b = "unknown";
            }
            Ki.ga.sendEvent(vg, "poor_visit_experience", {
              reason: b,
              action: a
            });
          };
          return c;
        }(jm);
        var ym = {};
        function zm(a) {
          var b = ym[a];
          if (b) {
            b.t = Date.now();
          } else {
            b = {
              t: Date.now()
            };
            ym[a] = b;
          }
        }
        function Am(a) {
          var b = ym[a];
          if (b) {
            var c = Date.now() - b.t;
            delete ym[a];
            return c;
          }
          return -1;
        }
        (function (a) {
          a.ya = "";
          a.Dc = "_CCSettings";
          a.Nc = "_builtins";
        })(vm || (vm = {}));
        var Bm;
        var Cm = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Tc = 0;
            b.ya = vm.ya;
            return b;
          }
          b(c, a);
          c.prototype.onRun = function () {
            this.emitState("GameLoad");
            this.Qc();
          };
          c.prototype.Lc = function () {
            var a;
            var b = this;
            var c = e[vm.Dc];
            var d = e.cc;
            return !(c && d || (a = c ? cj.CCUndefinedError : cj.SettingsUndefinedError, b.emit("Error.Occurred", {
              context: "Preload",
              info: {
                category: vg,
                domain: cj.Domain,
                code: a
              },
              report: true
            }, function () {
              b.emit("Window.Reload");
            }), 0));
          };
          c.prototype.Qc = function () {
            var a = this;
            if (!this.Lc()) {
              this.emit("Shell.ChangeProgressText", xi("GameShell.LoadingGame"));
              var b = e[vm.Dc];
              e[vm.Dc] = undefined;
              var c = cc[vm.Nc];
              cc[vm.Nc] = undefined;
              var d = hh.getURLSearchParam().get("origin") ? vj(ah().origin, Aj(location.pathname)) : "";
              cc.assetManager.init({
                bundleVers: f(f({}, b.bundleVers), c == null ? undefined : c.bundleVers),
                server: d
              });
              var g = cc.AssetManager.BuiltinBundleName;
              var h = g.RESOURCES;
              var i = g.INTERNAL;
              var j = g.MAIN;
              var k = g.START_SCENE;
              var l = [c ? vj(Aj(c.url), c.folder, i) : i, j];
              if (b.hasStartSceneBundle) {
                l.push(k);
              }
              if (b.hasResourcesBundle) {
                l.push(h);
              }
              var m = cc.debug.DebugMode.INFO;
              var n = cc.debug.DebugMode.NONE;
              var o = {
                id: "GameCanvas",
                scenes: b.scenes,
                debugMode: b.debug ? m : n,
                showFPS: b.debug,
                frameRate: 60,
                groupList: b.groupList,
                collisionMatrix: b.collisionMatrix,
                renderMode: 0,
                localeHint: yi()
              };
              Ki.ga.sendEvent(vg, "");
              zm("");
              cc.assetManager._onProgress = function () {
                if (a.Tc < 25) {
                  ++a.Tc;
                }
                a.emit("Shell.UpdateProgress", a.Tc / 25);
              };
              function r(c) {
                if (c) {
                  a.emit("Shell.PWDDisabled");
                  a.emit("Error.Occurred", {
                    context: "Preload",
                    info: {
                      category: vg,
                      error: c,
                      domain: cj.Domain,
                      code: cj.GameBootError
                    },
                    report: true
                  }, function () {
                    a.emit("Window.Reload");
                  });
                  return;
                }
                cc.view.resizeWithBrowserSize(true);
                cc.view.enableRetina(true);
                if (hh.getOrientationMode() === "land") {
                  cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                } else {
                  cc.view.setOrientation(cc.macro.ORIENTATION_AUTO);
                }
                var d = b.launchScene;
                var e = Am("");
                Ki.ga.sendTiming(vg, "", e);
                Ki.ga.sendEvent(vg, "");
                zm("");
                cc.assetManager.bundles.find(function (a) {
                  return a.getSceneInfo(d);
                }).loadScene(d, undefined, undefined, function (b) {
                  if (b) {
                    a.emit("Shell.PWDDisabled");
                    a.emit("Error.Occurred", {
                      context: "Preload",
                      info: {
                        category: vg,
                        domain: cj.Domain,
                        code: cj.GameBootError,
                        error: b
                      },
                      report: true
                    }, function () {
                      a.emit("Window.Reload");
                    });
                    return;
                  }
                  a.Ic();
                  var c = Am("");
                  Ki.ga.sendTiming(vg, "", c);
                  (function (a) {
                    if (hh.audioSupported) {
                      var b = ob = hh.audioContext;
                      if (b.state !== "running") {
                        b.resume();
                      }
                      um = b.createBuffer(1, 1, 22050);
                      if (hh.isIOS()) {
                        Qh.ScratchAudioBuffer = um;
                      }
                    }
                    if (a) {
                      a();
                    }
                  })(function () {
                    cc.assetManager._onProgress = undefined;
                  });
                  a.state.param.scene = d;
                  a.emitState("GameLoadComplete");
                });
              }
              var p = 0;
              function s(a) {
                if (a) {
                  r(a);
                }
                if (++p === l.length + 1) {
                  try {
                    cc.game.run(o, r);
                  } catch (a) {
                    r(a);
                  }
                }
              }
              cc.assetManager.loadScript(b.jsList.map(function (a) {
                return vj(d, "src/", a);
              }), s);
              for (var q = 0; q < l.length; q++) {
                cc.assetManager.loadBundle(l[q], s);
              }
            }
          };
          c.prototype.Ic = function () {
            this.emit("Shell.EnableUnloadAlert", true);
          };
          return c;
        }(jm);
        (function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onRun = function () {
            this.emitState("GameLoad");
            this.Fc();
          };
          c.prototype.Fc = function () {
            var a = this;
            var b = document.getElementById("background-img");
            if (b) {
              b.style.height = "100%";
              b.style.bottom = "0";
            }
            this.emit("Shell.ChangeProgressText", xi("GameShell.LoadingGame"));
            var c = e.Dc;
            e.Dc = undefined;
            cc.assetManager.init({
              importBase: "assets/others/import",
              nativeBase: "assets/others/native"
            });
            var d = cc.AssetManager.BuiltinBundleName;
            var f = d.RESOURCES;
            var g = d.INTERNAL;
            var h = d.MAIN;
            var i = d.START_SCENE;
            var j = [g, h];
            if (c.hasStartSceneBundle) {
              j.push(i);
            }
            if (c.hasResourcesBundle) {
              j.push(f);
            }
            var k = document.getElementById("GameCanvas");
            var l = document.getElementById("opts-debug-mode");
            var m = document.getElementById("btn-show-fps");
            var n = document.getElementById("input-set-fps");
            var o = {
              id: k,
              renderMode: 0,
              debugMode: parseInt(l.value, 10),
              showFPS: Array.prototype.indexOf.call(m == null ? undefined : m.classList, "checked") !== -1,
              frameRate: parseInt(n.value, 10),
              groupList: c.groupList,
              collisionMatrix: c.collisionMatrix,
              localeHint: yi()
            };
            cc.assetManager._onProgress = function (b, c) {
              a.emit("Shell.UpdateProgress", b / c);
            };
            function p(b) {
              if (b) {
                throw b;
              }
              if (e.updateResolution) {
                e.updateResolution();
              }
              if (!(cc.sys.os === cc.sys.OS_ANDROID && cc.sys.browserType === cc.sys.BROWSER_TYPE_UC)) {
                cc.view.enableRetina(true);
              }
              cc.debug.setDisplayStats(true);
              cc.game.pause();
              cc.assetManager.loadAny({
                url: "preview-scene.json",
                __isNative__: false
              }, undefined, undefined, function (b, c) {
                if (b) {
                  cc.error(b.stack);
                } else {
                  var d = c.scene;
                  d.ae = c.ae;
                  cc.director.runSceneImmediate(d, function () {
                    cc.game.resume();
                  });
                  cc.assetManager._onProgress = undefined;
                  a.emit("Shell.BootStateChanged", "GameLoadComplete");
                }
              });
            }
            var q = 0;
            function r(a) {
              if (a) {
                p(a);
              }
              if (++q === j.length + 1) {
                try {
                  cc.game.run(o, p);
                } catch (a) {
                  p(a);
                }
              }
            }
            cc.assetManager.loadScript(c.jsList.map(function (a) {
              return "plugins/" + a;
            }), r);
            for (var s = 0; s < j.length; s++) {
              cc.assetManager.loadBundle(j[s], r);
            }
          };
        })(jm);
        var Dm = "SceneLoad";
        var Em = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.ya = Dm;
            b.ka = 2;
            b.zc = function (a) {
              if (a) {
                b.Wc(a);
              } else {
                var c = Am(Td);
                Ki.ga.sendTiming(vg, Td, c);
                Ki.ga.sendEvent(vg, zg);
                zm(zg);
              }
            };
            return b;
          }
          b(c, a);
          c.prototype.onRun = function () {
            this.emitState(Dm);
            this.ya = "";
            this.ka--;
            Ki.ga.sendEvent(vg, Td);
            zm(Td);
            if (!cc.director.loadScene(this.state.param.scene, this.zc)) {
              this.Wc(Error("Load Scene Fail"));
            }
          };
          c.prototype.Wc = function (a) {
            var b = this;
            this.emit("Shell.PWDDisabled");
            this.emit("Error.Occurred", {
              context: "Preload",
              info: {
                category: vg,
                domain: cj.Domain,
                code: cj.GameBootError,
                error: a
              },
              report: true
            }, function () {
              b.emit("Window.Reload");
            });
          };
          return c;
        }(jm);
        var Fm = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onRun = function () {
            var a = this;
            this.emitState("ProjectLoad");
            Ki.ga.sendEvent(vg, "", undefined, this.state.param.reasonString, this.state.param.firstTimeRunApp ? wg : xg);
            zm("");
            this.emit("Shell.ChangeProgressText", xi("GameShell.Initialization"));
            this.emit("Shell.UpdateProgress", 0);
            var b = new Rj();
            var c = "";
            var d = "";
            var e = [];
            if (ai.resource.hasEntry("shell-game-res/locale/locale.json")) {
              e.push({
                src: d = ai.resource.resolveUrl("shell-game-res/locale/locale.json"),
                type: Oj.Json
              });
            }
            if (ai.resource.hasEntry("src/settings.js")) {
              e.push({
                src: c = ai.resource.resolveUrl("src/settings.js"),
                type: Oj.Script
              });
            } else {
              this.ya = "Shell.EnableSleep";
              this.ka = 4;
            }
            if (e.length !== 0) {
              var f = 0;
              var g = e.length;
              var h = false;
              b.onError = function (b) {
                a.emit("Shell.PWDDisabled");
                var c = b.src.split("?")[0];
                var d = {
                  category: vg,
                  domain: cj.Domain,
                  code: cj.LoadResourceError,
                  messages: [c]
                };
                a.emit("Error.Report", d);
                if (!h) {
                  h = true;
                  a.emit("Error.Occurred", {
                    context: "Preload",
                    info: d,
                    report: false
                  }, function () {
                    a.emit("Window.Reload");
                  });
                }
              };
              b.onLoad = function (b) {
                switch (b.src) {
                  case c:
                    var e = Am("");
                    Ki.ga.sendTiming(vg, "", e);
                    break;
                  case d:
                    var h = b.response;
                    for (var i in h) {
                      if (h[i]) {
                        wi.extend(h[i], i);
                      }
                    }
                }
                a.emit("Shell.UpdateProgress", ++f / g);
              };
              b.onComplete = function () {
                a.emitState("ProjectLoadComplete");
              };
              Ki.ga.sendEvent(vg, "");
              zm("");
              b.load(e);
            } else {
              this.emitState("ProjectLoadComplete");
            }
          };
          return c;
        }(jm);
        var Gm = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.ya = "";
            return b;
          }
          b(c, a);
          c.prototype.onRun = function () {
            var a = this;
            this.emitState("GameReady");
            var b = Am("");
            Ki.ga.sendTiming(vg, "", b, this.state.param.firstTimeRunApp ? wg : xg);
            Ki.ga.sendEvent(vg, "");
            if (this.state.param.showStartButton) {
              this.component.create(hl);
              this.view.append(hl, fj, Ql.SafeArea);
              this.component.updateState(hl, {
                callback: function () {
                  a.component.destroy(hl);
                  a.Uc();
                }
              });
              this.view.show(hl);
              this.emitState("GameAwaitStart");
            } else {
              this.Uc();
            }
          };
          c.prototype.Uc = function () {
            this.on("Shell.BootStateChanged", this.qc);
            this.emitState("GameStarted");
          };
          c.prototype.qc = function (a) {
            if (a.payload === "GameStarted") {
              this.off("Shell.BootStateChanged", this.qc);
              Ki.ga.sendEvent(vg, "");
              (function () {
                if (ob && um) {
                  var a = ob.createBufferSource();
                  a.buffer = um;
                  a.connect(ob.destination);
                  if (a.start === undefined) {
                    a.noteOn(0);
                  } else {
                    a.start(0);
                  }
                  if (typeof ob.resume == "function") {
                    ob.resume();
                  }
                  a.onended = function () {
                    a.disconnect(0);
                    a.onended = null;
                    try {
                      a.buffer = null;
                    } catch (a) {}
                    ob = undefined;
                    um = undefined;
                  };
                }
              })();
              cc.game.resume();
              if (Ii) {
                Ii();
                Ii = null;
              }
            }
          };
          return c;
        }(jm);
        var od = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Yc = [];
            b.Jc = false;
            b.Xc = function (a) {
              b.Kc = {};
              for (var c in a) {
                b.Kc[c] = 0;
              }
            };
            b.$c = function (a) {
              if (a.files) {
                b.tu(a.files);
              }
              if (a.files) {
                for (var c = 0; c < a.files.length; c++) {
                  if (b.iu(a.files[c])) {
                    Ki.ga.sendEvent(vg, yg);
                    zm(yg);
                  }
                }
              }
            };
            b.Bi = function (a) {
              if (b.iu(a.src)) {
                var c = Am(yg);
                Ki.ga.sendTiming(vg, yg, c);
              }
              if (b.nu(a.src)) {
                var d = a.response;
                for (var e in d) {
                  if (d[e]) {
                    wi.extend(d[e], e);
                  }
                }
              }
            };
            b.vo = function (a, c) {
              var d = b.Kc;
              if (d && d[a.name] !== undefined) {
                d[a.name] = c;
                var e = 0;
                var f = 0;
                for (var g in d) {
                  ++e;
                  f += d[g];
                }
                b.emit("Shell.UpdateProgress", f / e);
              }
            };
            b.eu = function (a, c) {
              if (!c.optional) {
                var d = a.filename;
                d = d.substring(d.lastIndexOf("/") + 1);
                if (b.iu(d)) {
                  b.ru(a.message, a.filename, cj.EngineScriptError);
                } else {
                  b.ru(a.message, a.filename, cj.PluginScriptError);
                }
              }
            };
            b.ou = function (a) {
              b.ru(a.err, undefined, a.errCode);
            };
            return b;
          }
          b(c, a);
          c.prototype.su = function (a) {
            var b = {
              onDependencyResolved: this.Xc,
              onPreload: this.$c,
              onLoad: this.Bi,
              onProgress: this.vo,
              onComplete: a,
              onError: this.ou,
              onScriptError: this.eu
            };
            var c = this.state.param.packages;
            this.plugin.load(c, b);
          };
          c.prototype.au = function (a, b) {
            var c = {
              onDependencyResolved: this.Xc,
              onPreload: this.$c,
              onLoad: this.Bi,
              onProgress: this.vo,
              onComplete: b,
              onError: this.ou,
              onScriptError: this.eu
            };
            this.plugin.load(a, c);
          };
          c.prototype.tu = function (a) {
            for (var b = 0; b < a.length; b++) {
              var c = a[b].substring(a[b].lastIndexOf("/") + 1);
              if (c.substring(c.lastIndexOf(".")) === ".js") {
                this.Yc.push(c);
              }
            }
          };
          c.prototype.iu = function (a) {
            return a.indexOf("cocos2d-js") !== -1;
          };
          c.prototype.nu = function (a) {
            return a.indexOf("/locale.") !== -1;
          };
          c.prototype.ru = function (a, b, c) {
            var d = this;
            var e = {
              category: vg,
              domain: cj.Domain,
              code: c,
              error: a,
              messages: b ? ["src: " + b] : undefined
            };
            this.emit("Error.Report", e);
            if (!this.Jc) {
              this.Jc = true;
              this.emit("Error.Occurred", {
                context: "Preload",
                info: e,
                report: false
              }, function () {
                d.emit("Window.Reload");
              });
            }
          };
          return c;
        }(jm);
        var Hm = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.cu = function () {
              b.emit("Shell.ChangeProgressText", xi("GameShell.Complete"));
              b.emit("Shell.UpdateProgress", 1);
              b.emit("Shell.ChangeProgressVisible", false);
              // TOLOOK
              setTimeout(function () {
                b.emitState("LatePluginLoadComplete");
              }, 500);
            };
            return b;
          }
          b(c, a);
          c.prototype.onRun = function () {
            this.emitState("LatePluginLoad");
            this.su(this.cu);
          };
          return c;
        }(od);
        var Im = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.uu = function () {
              b.emitState("DynamicPluginLoadComplete");
            };
            return b;
          }
          b(c, a);
          c.prototype.onRun = function () {
            this.emitState("DynamicPluginLoad");
            if (this.hu) {
              this.load(this.hu);
            }
          };
          c.prototype.load = function (a) {
            this.au(a, this.uu);
          };
          return c;
        }(od);
        var Jm = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.uu = function () {
              b.emitState("PluginLoadComplete");
            };
            return b;
          }
          b(c, a);
          c.prototype.onRun = function () {
            this.emitState("PluginLoad");
            this.emit("Shell.ChangeProgressText", xi("GameShell.Loading"));
            this.emit("Shell.UpdateProgress", 0);
            this.lu();
            this.su(this.uu);
          };
          c.prototype.lu = function () {
            var a = this.state.param.packages;
            var b = sg.Plugins;
            var c = hh.getURLSearchParam().get("plugin");
            if (c) {
              b = b.concat.apply(b, c.split(","));
            }
            for (var d = 0; d < b.length; d++) {
              var e = b[d];
              var f = ub(e);
              a[e] = f;
            }
          };
          return c;
        }(od);
        var Km = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onRun = function () {
            this.emitState("NativeLoad");
            this.Bi();
          };
          c.prototype.Bi = function () {
            this.emitState("NativeLoadComplete");
          };
          return c;
        }(jm);
        var oj = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onRun = function () {
            this.emitState("WebWorkerLoad");
            this.Bi();
          };
          c.prototype.Bi = function () {
            return g(this, undefined, undefined, function () {
              return h(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [3, 2];
                  case 1:
                    a.sent();
                    this.emitState("WebWorkerLoadComplete");
                    return [2];
                  case 2:
                    if ("serviceWorker" in navigator) {
                      navigator.serviceWorker.register("/shared/service-worker/sw.js", {
                        scope: "/"
                      }).then(function () {}).catch(function () {});
                    }
                    this.emitState("WebWorkerLoadComplete");
                    return [2];
                }
              });
            });
          };
          return c;
        }(jm);
        var ok = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.rootElement = uk("<div id=\"back-overlay\"></div>");
            this.view.getRootElement(Nl).before(this.rootElement);
            this.view.appendTo(c, "shell");
            this.view.register(c, "back-overlay");
          };
          return c;
        }(bj);
        var Lm = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.rootElement = uk("<div id=\"front-overlay\"></div>");
            this.view.getRootElement(Nl).after(this.rootElement);
            this.view.appendTo(c, "shell");
            this.view.register(c, "front-overlay");
          };
          return c;
        }(bj);
        var Mm = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Ea = new Rj();
            b.fu = Object.create(null);
            b.du = "";
            b.vu = [];
            b.Au = false;
            b.Jc = false;
            b.pu = 0;
            b.mu = false;
            b.Qa = function () {
              var a = b.fu[b.du];
              var c = [];
              b.vu.forEach(function (a) {
                c.push(b.fu[a]);
              });
              b.component.updateState(fj, {
                state: "setup-splash-paytable",
                splashPaytableConfig: {
                  hideRTP: b.Au,
                  logoImageUrl: a,
                  pageImageUrls: c,
                  complete: function () {
                    b.gu();
                    b.pu = 2;
                    if (b.mu) {
                      b.emitState("SplashExtraProcessComplete");
                    }
                  }
                }
              });
            };
            b.Da = function (a) {
              b.fu[a.src] = URL.createObjectURL(a.response);
            };
            b.Ti = function (a) {
              var c = a.src.split("?")[0];
              var d = {
                category: vg,
                domain: cj.Domain,
                code: cj.LoadResourceError,
                messages: [c]
              };
              b.emit("Error.Report", d);
              if (!b.Jc) {
                b.Jc = true;
                b.emit("Error.Occurred", {
                  context: "Preload",
                  info: d,
                  report: false
                }, function () {
                  b.emit("Window.Reload");
                });
              }
            };
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.once("Shell.ShowPaytable", this.bu, "High");
          };
          c.prototype.onRun = function () {
            this.mu = true;
            if (this.pu !== 1) {
              this.emitState("SplashExtraProcessComplete");
            }
          };
          c.prototype.bu = function (a) {
            this.pu = 1;
            var b = "shell-game-res/paytable-rules/logo.png";
            this.du = ai.resource.resolveUrl(b);
            if (this.du.includes(b)) {
              this.pu = 2;
              a.intercept();
              return;
            }
            this.Au = !(!a.payload || !a.payload.hideRTP);
            var c = [];
            c.push({
              src: this.du,
              type: Oj.Blob
            });
            for (var d = 1; d <= 10; d++) {
              var e = `shell-game-res/paytable-rules/p${d}.png`;
              var f = ai.resource.resolveUrl(e);
              if (f.includes(e)) {
                break;
              }
              this.vu.push(f);
              c.push({
                src: f,
                type: Oj.Blob
              });
            }
            this.Ea.onComplete = this.Qa;
            this.Ea.onLoad = this.Da;
            this.Ea.onError = this.Ti;
            this.Ea.load(c);
          };
          c.prototype.gu = function () {
            var a = this;
            Object.keys(this.fu).forEach(function (b) {
              URL.revokeObjectURL(a.fu[b]);
              delete a.fu[b];
            });
          };
          return c;
        }(jm);
        var Nm = function (a) {
          function c() {
            return a !== null && a.apply(this, arguments) || this;
          }
          b(c, a);
          c.prototype.onRun = function () {
            this.emitState("Complete");
          };
          return c;
        }(jm);
        var Om = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b._u = b.wu();
            b.xu = {
              param: {
                bootState: "Init",
                packages: {}
              }
            };
            b.yu = false;
            return b;
          }
          b(c, a);
          c.prototype.onCreate = function () {
            this.component.create(im);
            this.component.create(fm);
            this.component.create(gm);
            var a = this.component.getInstance(gm);
            if (a) {
              a.registerEvent("Shell.UpdateProgress");
              a.registerEvent("Error.Occurred");
              a.registerEvent("Shell.BootStateChanged");
            }
            this.component.create(fl);
            this.on("Shell.BootStateChanged", this.Su, "High");
            this.on("Shell.BootStateChanged", this.ku, "Low");
          };
          c.prototype.onStateChange = function (b) {
            if (a.prototype.onStateChange) {
              a.prototype.onStateChange.call(this, b);
            }
            if (!this.yu) {
              this.yu = true;
              this.emit("Shell.BootStateChanged", "Init");
            }
          };
          c.prototype.onDestroy = function () {
            this.yu = false;
          };
          c.prototype.Su = function (a) {
            switch (a.payload) {
              case "ShellLoadComplete":
                this.Eu();
                this.Cu();
                this.Mu();
                this.Hu();
                this.Vu();
                Uk(Qk, Sk, "icon");
                Uk(Rk, Tk, "apple-touch-icon");
                this.Bu();
                this.emit("Shell.PWDUseCustomAlert", true);
                break;
              case "PveCheckComplete":
                this.ju();
                this.Pu();
                break;
              case "ProjectLoadComplete":
                this.Gu();
                this.Ru();
                break;
              case "GameLoadComplete":
                this.component.create(Mm);
                break;
              case "GameReady":
                this.component.destroy(gm);
                break;
              case "GameStarted":
                this.view.show(il);
                this.emit("Shell.FocusCanvas");
                this.component.destroy(Vl);
                this.component.destroy(fj);
            }
          };
          c.prototype.ku = function (a) {
            var b = a.payload;
            var c = this._u[b];
            if (c || b === "Complete") {
              if (this.Zu) {
                this.component.destroy(this.Zu);
                this.Zu = undefined;
              }
              if (c) {
                this.xu.param.bootState = b;
                this.Zu = c;
                this.component.create(c);
                this.component.updateState(c, this.xu);
              } else if (this.state.complete) {
                this.state.complete();
              }
            }
          };
          c.prototype.Cu = function () {
            if (!document.head.querySelector("[rel=\"shortcut icon\"]")) {
              var a = document.createElement("link");
              a.rel = "shortcut icon";
              a.id = "favicon";
              a.href = this.resource.resolveUrl("shell-res/favicon.ico");
              document.head.appendChild(a);
            }
          };
          c.prototype.Mu = function () {
            var a;
            var b = (a = sg.StorageKey) === null || a === undefined ? undefined : a.firstRunAPP;
            var c = b ? Ul(b, true) : undefined;
            if (c && b) {
              fk(b, false);
            }
            this.xu.param.firstTimeRunApp = c;
          };
          c.prototype.Vu = function () {
            this.component.create(Ll);
          };
          c.prototype.Hu = function () {
            this.component.create(rl);
            this.component.create(Nl);
            this.component.create(ok);
            this.component.create(Lm);
            this.component.create(il);
            this.component.create(fj);
            this.component.create(Vl);
            this.component.create(Wl);
            this.view.append(fj, Nl);
            this.view.append(fl, fj);
            this.component.updateState(fl, {
              state: "setup"
            });
          };
          c.prototype.Ou = function () {
            var a = this;
            this.component.updateState(fl, {
              state: "start"
            });
            this.emit("Shell.GetScale", undefined, function (b) {
              if (!b.error) {
                var c = b.response;
                a.emit("Shell.Scaled", c);
              }
            });
          };
          c.prototype.Du = function () {
            var a = this;
            var b = document.getElementById("initial-loader");
            if (b) {
              b.classList.add("hide-loading");
              // TOLOOK
              setTimeout(function () {
                var c;
                var d;
                if (!((c = b.parentElement) === null || c === undefined)) {
                  c.removeChild(b);
                }
                var e = document.getElementById("loader-style");
                if (!((d = e == null ? undefined : e.parentElement) === null || d === undefined)) {
                  d.removeChild(e);
                }
                a.Ou();
              }, 350);
            }
          };
          c.prototype.Eu = function () {
            var a = this;
            var b = Date.now() - sg.BootTime;
            // TOLOOK
            setTimeout(function () {
              a.Du();
            }, b < 1800 ? 1800 - b : 0);
          };
          c.prototype.Bu = function () {
            Ki.setStatusBarStyleHandler = function (a) {
              var b = e.app;
              if (b) {
                b.emit("SetStatusBar", a);
              }
            };
          };
          c.prototype.Gu = function () {
            var a = this;
            Ki.is1959Supported = hh.getIs1959Supported();
            Ki.requestGameStartHandler = function (b, c) {
              var d = Am(zg);
              Ki.ga.sendTiming(vg, zg, d);
              Ii = c;
              a.xu.param.showStartButton = b;
              a.emit("Shell.ChangeProgressText", xi("GameShell.LoadingResource"));
              a.emit("Shell.ChangeProgressVisible", true);
              a.emit("Shell.BootStateChanged", "SceneLoadComplete");
            };
            Ki.addPreloadPluginHandler = function (b, c) {
              var d = typeof b == "string" ? b : b.name;
              var e = typeof c == "object" ? c : undefined;
              var f = ub(d);
              f.config = e;
              f.optional = true;
              a.xu.param.packages[d] = f;
            };
            Ki.loadPluginHandler = function (b) {
              var c;
              var d = ub(b);
              d.optional = true;
              a.xu.param.packages[b] = d;
              var e = {
                name: d
              };
              if (!((c = a.component.getInstance(Im)) === null || c === undefined)) {
                c.load(e);
              }
            };
            Ki.setProgressMessageHandler = function (b) {
              a.emit("Shell.ChangeProgressText", b);
            };
            Ki.setProgressHandler = function (b, c) {
              var d = b / c * 1;
              if (isNaN(d)) {
                d = 0;
              }
              a.emit("Shell.UpdateProgress", d);
            };
            Ki.setProgressVisibleHandler = function (b) {
              a.emit("Shell.ChangeProgressVisible", b);
            };
            Ki.enableCanvasTouchPropagation = function (a) {
              var b = cc.internal.inputManager;
              if (b && b.allowTouchPropagation) {
                b.allowTouchPropagation(a);
              }
            };
          };
          c.prototype.Ru = function () {
            document.title = wi.t(sg.LocalizedTitleKey);
          };
          c.prototype.ju = function () {
            if (hh.webpSupported) {
              ai.resource.setQualifierConfig([undefined, undefined, {
                png: ["webp", "jpg"],
                jpg: ["webp"]
              }]);
            }
          };
          c.prototype.Pu = function () {
            this.component.create(Im);
          };
          c.prototype.wu = function () {
            return {
              Init: oj,
              WebWorkerLoadComplete: Km,
              NativeLoadComplete: nm,
              ShellLoadComplete: xm,
              PveCheckComplete: Jm,
              PluginLoadComplete: Fm,
              ProjectLoadComplete: Cm,
              GameLoadComplete: Em,
              SceneLoadComplete: Mm,
              SplashExtraProcessComplete: Hm,
              LatePluginLoadComplete: Gm,
              GameStarted: Nm
            };
          };
          return c;
        }(aj);
        (function (a) {
          a.Nu = "_config";
          a.Tu = "_map";
        })(Bm || (Bm = {}));
        var Pm = function (a) {
          function c() {
            var b = a !== null && a.apply(this, arguments) || this;
            b.Qu = Object.create(null);
            return b;
          }
          b(c, a);
          Object.defineProperty(c.prototype, "bundleVers", {
            get: function () {
              return this.Qu;
            },
            set: function (a) {
              this.Qu = a;
            },
            enumerable: false,
            configurable: true
          });
          c.prototype.loadBundle = function (a, b, c) {
            var d = this;
            function e(a, b) {
              if (c) {
                // TOLOOK
                setTimeout(function () {
                  c(a, b);
                }, 0);
              }
            }
            if (cc) {
              var f = [];
              var g = Array.isArray(a);
              function c(a) {
                var h = a.shift();
                if (h) {
                  var i = cc.assetManager.getBundle(h);
                  if (i) {
                    f.push(i);
                    c(a);
                  } else {
                    var j = b.bundleInfo.bundleBaseUrl + h;
                    var k = {
                      version: d.Qu[h]
                    };
                    cc.assetManager.loadBundle(j, k, function (d, g) {
                      if (g) {
                        f.push(g);
                        (function (a, b) {
                          var c = `@${a.name}/`;
                          var d = a[Bm.Nu].paths[Bm.Tu];
                          var e = {};
                          Object.keys(d).map(function (a) {
                            e[c + a] = "";
                          });
                          b.resource.addAssets(e);
                        })(g, b);
                        c(a);
                      } else {
                        if (!d) {
                          d = Error("Cannot find res after loading");
                        }
                        e(d, undefined);
                      }
                    });
                  }
                } else {
                  e(undefined, g ? f : f[0]);
                }
              }
              c(g ? a.slice() : [a]);
            } else {
              e(Error("CocosManager loadBundle - cc not found"), undefined);
            }
          };
          c.prototype.getURL = function (a, b) {
            var c = this.context.getContext(b);
            if (!c) {
              throw Error("Unable to get bundle context");
            }
            return c.resource.resolveUrl(a, true);
          };
          c.prototype.hasEntry = function (a) {
            return this.context.resource.hasEntry(a);
          };
          c.prototype.resolveBundleName = function (a, b) {
            var c = b.bundleBaseUrl;
            var d = this.Qu[a];
            if (d && c && a) {
              if (typeof d == "string") {
                return {
                  index: vj(c, a, `index.${d}.js`),
                  config: vj(c, a, `config.${d}.json`)
                };
              }
              var e = d.config;
              var f = d.index;
              if (e && f) {
                return {
                  index: vj(c, a, `index.${f}.js`),
                  config: vj(c, a, `index.${e}.js`)
                };
              }
            }
          };
          return c;
        }(ck);
        var om = function () {
          function a() {}
          a.prototype.load = function (a) {
            return g(this, undefined, undefined, function () {
              return h(this, function (b) {
                switch (b.label) {
                  case 0:
                    this.Lu();
                    this.Iu();
                    this.Fu();
                    this.zu();
                    this.Wu();
                    return [4, vk];
                  case 1:
                    if (b.sent() !== 1) {
                      return [2];
                    } else {
                      this.Uu(a);
                      return [4, this.qu.component.create(Om)];
                    }
                  case 2:
                    b.sent();
                    return [4, this.Yu()];
                  case 3:
                    b.sent();
                    return [2];
                }
              });
            });
          };
          a.prototype.Yu = function () {
            var a = this;
            return new Promise(function (b) {
              a.qu.component.updateState(Om, {
                complete: function () {
                  a.qu.component.destroy(Om);
                  // TOLOOK
                  setTimeout(b, 0);
                }
              });
            });
          };
          a.prototype.Wu = function () {
            var a;
            var b = ah();
            if (b !== location) {
              a = [b.origin];
            }
            var c = sg.Blobs;
            Ph = {
              cacheOrigins: a,
              blobRegistry: c
            };
          };
          a.prototype.Lu = function () {
            Ki.ga = new Pi();
            e.onGAReceiveError = fi;
            if (e.onerror) {
              e.onerror.onFormat = fi;
            }
          };
          a.prototype.Iu = function () {
            var a = hh.getURLSearchParam().get("language");
            a = a ? this.Ju(a) : navigator.language ? this.Ju(navigator.language) : "en";
            wi.locale(a);
          };
          a.prototype.zu = function () {
            Ki.Error = cm;
            Ki.ClientError = Xl;
            Ki.ServerError = Zl;
            Ki.NetworkError = Yl;
            Ki.GameShellError = cj;
            Ki.WebSocketError = $l;
          };
          a.prototype.Ju = function (a) {
            var b = sg.SupportedLanguages;
            var c = "en";
            if (b.indexOf(a) !== -1) {
              c = a;
            } else {
              for (var d = 0, e = b; d < e.length; d++) {
                var f = e[d];
                if (a.indexOf(f) === 0) {
                  c = f;
                  break;
                }
              }
            }
            return c;
          };
          a.prototype.Fu = function () {
            document.title = sg.Name;
          };
          a.prototype.Uu = function (a) {
            if (!a) {
              a = {
                name: undefined,
                version: undefined,
                baseUrl: undefined
              };
            }
            if (sg.ShellDir) {
              a.baseUrl = sg.SharedPath + sg.ShellDir;
            } else {
              a.baseUrl = sg.MainDir;
            }
            var b = new Pk();
            var c = {
              bundle: b,
              component: new Ld(),
              event: new sk(),
              view: new wk(),
              resource: new xk(),
              plugin: new Ok(),
              cocos: new Pm()
            };
            (function (a) {
              Object.assign($i, a);
              Ti = $i;
            })(c);
            var d = Object.assign({}, a);
            var f = b.createBundle(d);
            for (var g in c) {
              var h = c[g];
              if (h) {
                h.onInstantiate(f);
              }
            }
            var i = Object.assign({}, a);
            i.name = "Shell";
            var j;
            var k = this.qu = b.createBundle(i);
            Rj.context = this.qu;
            Ki.context = this.qu;
            tl(this.qu);
            j = function (a) {
              k.event.emit("Error.Log", {
                tag: "Deprecated",
                message: a
              });
            };
            (function (a) {
              try {
                a.Bt();
                a.jt;
              } catch (a) {
                return false;
              }
            })(new rh(uh, Od, vh));
            xh = j || wh;
            var l;
            var m = Object.assign({}, a);
            m.name = "Game";
            m.baseUrl = sg.GameDir;
            (function (a) {
              ai = a;
            })(b.createBundle(m));
            l = {
              AbstractComponent: _i,
              AbstractEventComponent: aj,
              AbstractViewComponent: bj,
              AbstractCocosComponent: Lf,
              AbstractPluginComponent: _j,
              CocosComponent: Tj,
              PluginMainComponent: Uj,
              LoadType: Oj,
              Loader: Rj
            };
            e.plugin = l;
          };
          return a;
        }();
        Ki.start = function (a, b, c) {
          function d(a) {
            if (c) {
              c(a);
            } else if (a) {
              throw a;
            }
          }
          try {
            (function (a) {
              if (!a) {
                a = {};
              }
              (sg = Object.assign({}, a)).Name = sg.Name || sg.AppName || "Unnamed";
              sg.Version = sg.Version || sg.AppVersion || "0.0.0";
              sg.AssetTable = sg.AssetTable || {
                version: 2,
                assets: {}
              };
              sg.AspectRatio = sg.AspectRatio || undefined;
              sg.GameDir = sg.GameDir || "";
              sg.Identifier = sg.Identifier || undefined;
              sg.Index = sg.Index || undefined;
              sg.LocalizedTitleKey = sg.LocalizedTitleKey || "Game.Title";
              sg.MainDir = sg.MainDir || "";
              sg.Orientation = sg.Orientation !== undefined ? sg.Orientation : og.Portrait;
              sg.SupportXSMaxRatio = +sg.SupportXSMaxRatio;
              sg.ThemeColor = sg.ThemeColor || "#FFFFFF";
              sg.BootTime = sg.BootTime || 0;
              if (!sg.SharedPath) {
                sg.SharedPath = "../shared/";
              }
              (function () {
                if (sg.Plugins === undefined) {
                  sg.Plugins = [];
                } else {
                  var a = sg.Plugins;
                  if (a && typeof a == "string") {
                    a = a.split(",");
                    for (var b = 0; b < a.length; ++b) {
                      a[b] = a[b].trim();
                    }
                  }
                  sg.Plugins = a;
                }
              })();
              (function () {
                if (sg.CompatibleCondition) {
                  sg.Requirements = sg.CompatibleCondition;
                }
                if (sg.Requirements === undefined) {
                  sg.Requirements = {
                    minMemory: 1024,
                    whiteList: "chrome-40,chrome webview-40,firefox-44,safari-10,edge-15.15063",
                    minOSVersion: "iOS-10,Android-5,MacOS-10.10,Windows-7"
                  };
                } else {
                  var a = sg.Requirements;
                  if (a && typeof a == "string") {
                    var b = new URLSearchParams(a);
                    a = {
                      minMemory: +b.get("minMemory"),
                      whiteList: b.get("whiteList"),
                      minOSVersion: b.get("minOSVersion")
                    };
                  }
                  sg.Requirements = a;
                }
              })();
              (function () {
                if (sg.SupportedLanguages === undefined) {
                  sg.SupportedLanguages = ["en"];
                } else {
                  var a = sg.SupportedLanguages;
                  if (a && typeof a == "string") {
                    a = a.split(",");
                    for (var b = 0; b < a.length; ++b) {
                      a[b] = a[b].trim();
                    }
                  }
                  sg.SupportedLanguages = a;
                }
              })();
              (function () {
                if (sg.StorageKey) {
                  var a = sg.StorageKey;
                  if (a && typeof a == "string") {
                    a = JSON.parse(a);
                  }
                  if (a.forcePlay !== undefined) {
                    sg.StorageKey.forcePlay = a.forcePlay;
                  }
                  if (a.firstRunAPP !== undefined) {
                    sg.StorageKey.firstRunAPP = a.firstRunAPP;
                  }
                } else {
                  sg.StorageKey = {
                    forcePlay: `shell:${sg.Name}_force_play`,
                    firstRunAPP: `shell/${sg.Name}:first_time_run_apps`
                  };
                }
              })();
              sg = Object.freeze(sg);
            })(b);
            new om().load(a).then(d, d);
          } catch (a) {
            d(a);
          }
        };
      })();
    })();
  })();