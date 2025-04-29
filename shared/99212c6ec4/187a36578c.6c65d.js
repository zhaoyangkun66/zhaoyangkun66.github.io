
(function () {
    'use strict';
  
    (function () {
      var c;
      (function (a) {
        a.u = "window";
        a.h = "self";
      })(c || (c = {}));
      var d = (0, eval)("this");
      var e = d[c.h];
      var f = d[c.u];
      System.register([], function (a) {
        'use strict';
  
        return {
          execute: function () {
            var b;
            function c(a, b, c) {
              var d;
              if (b || c) {
                if (b) {
                  if (Array.isArray(b) && b.indexOf("") !== -1) {
                    d = `Relative url cannot be extracted from  ${a[b.indexOf("")]}.`;
                  } else if (c) {
                    if (!cc.assetManager.bundles.has(c)) {
                      d = `Bundle ${c} not exist in cc.assetManager.`;
                    }
                  } else {
                    d = `Bundle name cannot be extracted from  ${a}.`;
                  }
                } else {
                  d = `Relative url cannot be extracted from  ${a}.`;
                }
              } else {
                d = `There is issue when resolving url ${a} that leads to both bundle and relative url cannot be found.`;
              }
              return d;
            }
            function g(a) {
              var b = Array.isArray(a);
              var d = b ? a[0] : a;
              if (typeof d == "string") {
                var e = d.startsWith("@");
                var f = e ? d.indexOf("/") : -1;
                if (e && f === -1) {
                  return {
                    errorMessage: c(a, d, undefined)
                  };
                }
                var g;
                var h = f !== -1 ? d.substring(1, f) : "resources";
                g = b ? a.map(function (a) {
                  if (e && a.indexOf(h) !== 1) {
                    return "";
                  } else {
                    return a.substring(f + 1);
                  }
                }) : d.substring(f + 1);
                return {
                  bundleName: h,
                  relativeUrl: g,
                  errorMessage: c(a, g, h)
                };
              }
              return {
                errorMessage: "No url passed in!"
              };
            }
            function h(a, b, c) {
              var d = cc.assetManager.assets.get(a);
              if (!d) {
                if (!b) {
                  var e = g(a);
                  var f = e.relativeUrl;
                  var h = e.bundleName;
                  var i = e.errorMessage;
                  if (i) {
                    throw Error(`ResRC _getAssetFromUuidOrUrl : ${i}`);
                  }
                  if (h && f) {
                    a = f;
                    b = cc.assetManager.getBundle(h);
                  }
                }
                d = b ? b.get(a, c) : undefined;
              }
              return d;
            }
            function i(a) {
              var b = typeof a == "string" ? cc.assetManager.getBundle(a) : a;
              if (b) {
                b.releaseAll();
              }
            }
            function j(a, b) {
              var c;
              var d;
              var e;
              var f;
              if (typeof b == "string") {
                c = b;
              } else {
                c = b.bundleName;
                d = b.type;
                e = b.progressCallback;
                f = b.completeCallback;
              }
              var g = cc.assetManager.getBundle(c);
              if (!g) {
                throw Error(`ResRC loadBundleAsset : Cannot load ${a} from unknown bundle ${c}`);
              }
              var h;
              var i;
              var j = function (a, b, c) {
                var d;
                if (Array.isArray(a)) {
                  for (var e = 0; e < a.length; e++) {
                    var f = a[e];
                    if (!c.getInfoWithPath(f, b)) {
                      d = f;
                      break;
                    }
                  }
                } else if (!c.getInfoWithPath(a, b)) {
                  d = a;
                }
                return d;
              }(a, d, g);
              if (j === undefined) {
                g.load(a, d, e, function (a, b) {
                  if (!a && b) {
                    if (Array.isArray(b)) {
                      b.forEach(function (a) {
                        return a.addRef();
                      });
                    } else {
                      b.addRef();
                    }
                  }
                  if (f) {
                    f(a, b);
                  }
                });
              } else if (f) {
                h = f;
                i = j;
                (function (a) {
                  // TOLOOK
                  setTimeout(a, 0);
                })(function () {
                  h(Error(cc.debug.getError(4914, i)), null);
                });
              }
            }
            function k(a, b, c) {
              var d = b ? {
                ext: b.startsWith(".") ? b : `.${b}`
              } : null;
              cc.assetManager.loadRemote(a, d, function (a, b) {
                if (!a && b) {
                  b.addRef();
                }
                if (c) {
                  c(a, b);
                }
              });
            }
            (function (a) {
              a._parseLoadResArgs = "_parseLoadResArgs";
            })(b || (b = {}));
            a("ResRC", Object.freeze({
              "__proto__": null,
              deleteBundle: function (a) {
                var b = typeof a == "string" ? cc.assetManager.getBundle(a) : a;
                if (b) {
                  i(b);
                  cc.assetManager.removeBundle(b);
                }
              },
              load: function (a, c, d, e) {
                var f = cc.assetManager[b._parseLoadResArgs](c, d, e);
                c = f.type;
                d = f.onProgress;
                e = f.onComplete;
                var h = g(a);
                var i = h.bundleName;
                var k = h.relativeUrl;
                var l = h.errorMessage;
                if (k && !l) {
                  j(k, {
                    completeCallback: e,
                    bundleName: i,
                    type: c
                  });
                } else if (l) {
                  throw Error(`ResRC load : ${l}`);
                }
              },
              loadBundle: function (a, b, c) {
                if (typeof b == "function") {
                  c = b;
                  b = undefined;
                }
                cc.assetManager.loadBundle(a, b, c);
              },
              loadBundleArr: function (a, b) {
                var c = [];
                function d(a) {
                  var e = a.shift();
                  if (e) {
                    var f = typeof e == "string" ? e : e.name;
                    var g = Object.create(null);
                    if (typeof e != "string" && e.version) {
                      g.version = e.version;
                    }
                    cc.assetManager.loadBundle(f, g, function (e, f) {
                      if (f) {
                        c.push(f);
                        d(a);
                      } else {
                        if (!e) {
                          e = Error("Cannot find res after loading");
                        }
                        if (b) {
                          b(e, undefined);
                        }
                      }
                    });
                  } else if (b) {
                    b(undefined, c);
                  }
                }
                d(a.slice());
              },
              loadByBundleAsset: j,
              loadRemote: function (a, b) {
                if (Array.isArray(a)) {
                  var c = 0;
                  var d = a.length;
                  var e = [];
                  var f = [];
                  a.forEach(function (a, g) {
                    var h;
                    var i = typeof a == "string";
                    k(i ? a : a.url, i ? undefined : a.ext, (h = g, function (a, g) {
                      if (c === d) {
                        throw Error("ResRC :: loadRemote : Error in iterator when loading an array of remote resources");
                      }
                      f[h] = a;
                      e[h] = g;
                      if (++c === d && b) {
                        b(f, e);
                      }
                    }));
                  });
                } else {
                  var g = typeof a == "string";
                  k(g ? a : a.url, g ? undefined : a.ext, b);
                }
              },
              loadRemoteBySingle: k,
              retain: function (a, b) {
                var c = typeof a == "string" ? h(a, undefined, b) : a;
                if (c instanceof cc.Asset) {
                  c.addRef();
                }
              },
              unload: function (a, b) {
                var c = typeof a == "string" ? h(a, undefined, b) : a;
                if (c instanceof cc.Asset) {
                  c.decRef();
                }
              },
              unloadBundle: i,
              unloadBundleAsset: function (a, b, c) {
                var d = cc.assetManager.getBundle(b);
                if (!d) {
                  throw Error(`ResRC releaseBundleAsset : Cannot release ${a} from unknown bundle ${b}`);
                }
                if (!Array.isArray(a)) {
                  a = [a];
                }
                for (var e = 0, f = a; e < f.length; e++) {
                  var g = f[e];
                  var h = d.get(g, c);
                  if (h instanceof cc.Asset) {
                    h.decRef();
                  }
                }
              }
            }));
            var l = {
              writable: false,
              value: undefined,
              enumerable: false,
              configurable: false
            };
            function m(a, b, c) {
              for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e];
                if (f) {
                  f(b, c);
                }
              }
            }
            function n(a, b, c) {
              if (typeof a != "object" || a === null) {
                throw Error("Invalid parameter at index 0");
              }
              if (typeof b != "string" || b === "") {
                throw Error("Invalid parameter at index 1");
              }
              var d = a.watch_eventPool;
              if (d) {
                var e = d[b];
                if (e) {
                  if (c === undefined) {
                    e.length = 0;
                  } else {
                    var f = e.indexOf(c);
                    if (f !== -1) {
                      e.splice(f, 1);
                    }
                  }
                }
              }
            }
            var o;
            var p = function () {
              function a() {
                this.v = false;
                if (cc.director.getScheduler() != null) {
                  this.g();
                } else {
                  cc.game.once(cc.game.EVENT_ENGINE_INITED, this.g, this);
                }
              }
              Object.defineProperty(a.prototype, "paused", {
                get: function () {
                  return this.v;
                },
                set: function (a) {
                  if (this.v !== a) {
                    this.v = a;
                    if (a) {
                      this.k.pauseTarget(this);
                    } else {
                      this.k.resumeTarget(this);
                    }
                  }
                },
                enumerable: false,
                configurable: true
              });
              a.prototype.g = function () {
                this.v = false;
                this.k = cc.director.getScheduler();
                this.k.enableForTarget(this);
              };
              a.prototype.schedule = function (a, b, c, d) {
                if (!(a == null || b < 0)) {
                  b = b || 0;
                  c = isNaN(c) ? cc.macro.REPEAT_FOREVER : c;
                  d = d || 0;
                  this.k.schedule(a, this, b, c, d, this.v);
                }
              };
              a.prototype.scheduleOnce = function (a, b) {
                this.schedule(a, 0, 0, b);
              };
              a.prototype.unschedule = function (a) {
                if (a) {
                  this.k.unschedule(a, this);
                }
              };
              a.prototype.unscheduleAllCallbacks = function () {
                this.k.unscheduleAllForTarget(this);
              };
              return a;
            }();
            var q = function () {
              function a() {
                this.S = 5;
                this.O = 0;
                this.R = 0;
                this.A = 0;
                this.EXPECTED_FRAME_RATE = 50;
                this.MAX_COUNTER = 5;
                this.T = false;
              }
              a.prototype.enableTracker = function (a) {
                if (!this.T) {
                  this.T = true;
                  this.O = 0;
                  this.R = 0;
                  this.A = cc.director.getTotalFrames();
                  this.C = a;
                  cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, this._, this);
                }
              };
              a.prototype.setTrackingInterval = function (a) {
                this.S = a;
              };
              a.prototype.D = function () {
                this.R = 0;
                this.T = false;
                this.C = undefined;
                cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, this._, this);
              };
              a.prototype._ = function () {
                var a = cc.director.getDeltaTime();
                this.O += a;
                if (this.O >= this.S) {
                  this.O = 0;
                  var b = this.A;
                  this.A = cc.director.getTotalFrames();
                  if (this.A - b < this.EXPECTED_FRAME_RATE * this.S) {
                    this.R++;
                    if (this.R >= this.MAX_COUNTER) {
                      var c = this.C;
                      cc.game.setFrameRate(30);
                      this.D();
                      if (c) {
                        c();
                      }
                    }
                  } else {
                    this.R = 0;
                  }
                }
              };
              return a;
            }();
            var r = function () {
              function a(a) {
                this.B = false;
                this.M = a;
              }
              a.prototype.dispose = function () {
                if (!this.B) {
                  this.B = true;
                  var a = this.P;
                  this.P = undefined;
                  for (var b = 0, c = a ? a.length : 0; b < c; b++) {
                    var d = a[b];
                    try {
                      d.I = undefined;
                      d.dispose();
                    } catch (a) {}
                  }
                  var e = this.M;
                  this.M = undefined;
                  try {
                    if (e) {
                      e();
                    }
                  } catch (a) {}
                  if (this.I) {
                    this.I.del(this);
                  }
                }
              };
              a.prototype.set = function (a) {
                return a instanceof Function && (this.B ? (a(), false) : (this.M = a, true));
              };
              a.prototype.add = function (b) {
                if (b instanceof Function) {
                  b = new a(b);
                } else if (!(b instanceof a)) {
                  return false;
                }
                if (this.B) {
                  b.dispose();
                  return false;
                }
                var c = b.I;
                if (c) {
                  c.del(b);
                }
                var d = this.P;
                if (!d) {
                  d = this.P = [];
                }
                d.push(b);
                b.I = this;
                return true;
              };
              a.prototype.del = function (b) {
                var c = b instanceof a;
                if (!(c || b instanceof Function)) {
                  return false;
                }
                if (b === this.M) {
                  this.M = undefined;
                  return true;
                }
                for (var d = this.P, e = 0, f = d ? d.length : 0; e < f; e++) {
                  var g = d[e];
                  if (c && g === b || g.M === b) {
                    d.splice(e);
                    g.I = undefined;
                    return true;
                  }
                }
                return false;
              };
              Object.defineProperty(a.prototype, "disposed", {
                get: function () {
                  return this.B;
                },
                enumerable: false,
                configurable: true
              });
              a.prototype.asDisposable = function () {
                return this.dispose.bind(this);
              };
              return a;
            }();
            var s = {
              ARS: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              BRL: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              COP: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              CRC: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              CZK: {
                groupSeparator: " ",
                decimalSeparator: ","
              },
              DKK: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              EUR: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              HRK: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              HUF: {
                groupSeparator: " ",
                decimalSeparator: "."
              },
              IDR: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              ILS: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              MKD: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              NOK: {
                groupSeparator: " ",
                decimalSeparator: ","
              },
              RON: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              RSD: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              RUB: {
                groupSeparator: " ",
                decimalSeparator: ","
              },
              SEK: {
                groupSeparator: " ",
                decimalSeparator: ","
              },
              TRY: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              UAH: {
                groupSeparator: " ",
                decimalSeparator: ","
              },
              UYU: {
                groupSeparator: ".",
                decimalSeparator: ","
              },
              ZAR: {
                groupSeparator: " ",
                decimalSeparator: "."
              }
            };
            (function (a) {
              a.N = "_val";
            })(o || (o = {}));
            var t = Object.freeze({});
            function u() {}
            function v(a, b, c) {
              return c.convertToNodeSpaceAR(a.convertToWorldSpaceAR(b));
            }
            var w;
            w = undefined;
            function x() {
              if (w === undefined) {
                w = new p();
              }
              return w;
            }
            function y(a) {
              return function (b) {
                var c = // TOLOOK
                setTimeout(b, a * 1000);
                return function () {
                  clearTimeout(c);
                };
              };
            }
            function z() {
              var a;
              a = arguments.length === 1 && arguments[0] instanceof Array ? arguments[0].slice() : Array.prototype.slice.call(arguments);
              return function (b) {
                var c = new r();
                var d = 0;
                function e(f) {
                  if (!c.disposed) {
                    if (f != null || ++d === a.length) {
                      b(f);
                      c.dispose();
                    } else {
                      c.set(a[d](e));
                    }
                  }
                }
                c.set(a[d](e));
                return c.asDisposable();
              };
            }
            function A() {
              var a;
              a = arguments.length === 1 && arguments[0] instanceof Array ? arguments[0].slice() : Array.prototype.slice.call(arguments);
              return function (b) {
                for (var c = new r(), d = a.length, e = function (a) {
                    if (!(c.disposed || a == null && --d != 0)) {
                      b(a);
                      c.dispose();
                    }
                  }, f = 0, g = a.length; f < g; f++) {
                  c.add(a[f](e));
                }
                return c.asDisposable();
              };
            }
            function B() {
              z = function () {
                return function () {};
              };
            }
            function C(a) {
              var b = 0;
              var c = 0;
              var d = [];
              var e = [];
              function f() {
                b = 2;
                d.unshift.apply(d, e);
                e.length = 0;
                for (var c = 1; c < d.length - 1; c += 3) {
                  var g = d[c];
                  if (g) {
                    var h = d[c + 1];
                    if (h) {
                      g.apply(h);
                    } else {
                      g();
                    }
                  }
                }
                d.length = 0;
                if (e.length) {
                  b = 1;
                  a(f);
                } else {
                  b = 0;
                }
              }
              return function (g, h) {
                return function (i) {
                  if (typeof g == "boolean" && h === undefined) {
                    h = g;
                    g = undefined;
                  }
                  var j = c++;
                  if (b === 2 && h) {
                    e.push(j, i, g);
                  } else {
                    d.push(j, i, g);
                    if (b === 0) {
                      b = 1;
                      a(f);
                    }
                  }
                  return function () {
                    var a = e.indexOf(j);
                    if (a !== -1) {
                      e.splice(a, 3);
                    } else if ((a = d.indexOf(j)) !== -1) {
                      d[a + 1] = undefined;
                      d[a + 2] = undefined;
                    }
                  };
                };
              };
            }
            var D = C(function (a) {
              cc.director.once(cc.Director.EVENT_AFTER_UPDATE, a);
            });
            var E = C(function (a) {
              Promise.resolve().then(a);
            });
            function F(a, b) {
              return +(Math.round(+(a + "e" + b)) + "e-" + b);
            }
            function G(a, b) {
              return F(a, b).toFixed(b);
            }
            function H(a) {
              return ("0" + a).slice(-2);
            }
            function I(a) {
              return RegExp("^[^A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿Ⰰ-﬜﷾-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]").test(a);
            }
            var J;
            var K;
            var L;
            var M;
            var N = {
              groupSeparator: ",",
              decimalSeparator: ".",
              currencySymbol: "",
              baseUnit: "",
              hideDecimal: false,
              format: function (a) {
                var b;
                var c;
                var d = this.currencySymbol;
                var e = this.baseUnit;
                var f = this.hideDecimal ? 0 : 2;
                if (a < 0) {
                  b = G(-a, f);
                  c = "-";
                } else {
                  b = G(a, f);
                  c = "";
                }
                if (!this.hideDecimal) {
                  var g = this.decimalSeparator;
                  if (g !== ".") {
                    b = b.replace(".", g);
                  }
                }
                var h = this.groupSeparator;
                if (h !== "") {
                  b = b.replace(/\B(?=(\d{3})+(?!\d))/g, h);
                }
                var i = b + e;
                if (I(d)) {
                  return c + i + d;
                } else {
                  return c + d + i;
                }
              }
            };
            function O(a) {
              if (a.groupSeparator != null || a.decimalSeparator != null) {
                if (a.groupSeparator != null) {
                  N.groupSeparator = a.groupSeparator;
                }
                if (a.decimalSeparator != null) {
                  N.decimalSeparator = a.decimalSeparator;
                }
              } else if (a.currencyCode != null) {
                var b = s[a.currencyCode];
                if (b) {
                  N.groupSeparator = b.groupSeparator;
                  N.decimalSeparator = b.decimalSeparator;
                }
              }
              if (a.currencySymbol != null) {
                N.currencySymbol = a.currencySymbol;
              }
              if (a.baseUnit != null) {
                N.baseUnit = a.baseUnit;
              }
              if (a.hideDecimal != null) {
                N.hideDecimal = a.hideDecimal;
              }
            }
            function P() {
              return {
                groupSeparator: N.groupSeparator,
                decimalSeparator: N.decimalSeparator,
                currencySymbol: N.currencySymbol,
                baseUnit: N.baseUnit,
                hideDecimal: N.hideDecimal
              };
            }
            function Q() {
              return location.protocol;
            }
            function R() {
              return location.origin;
            }
            function S(a, b) {
              if (a.endsWith("/") && b.startsWith("/")) {
                return a.substring(0, a.length - 1) + b;
              } else if (a.endsWith("/") || b.startsWith("/")) {
                return a + b;
              } else {
                return a + "/" + b;
              }
            }
            function T(a) {
              var b = f[a];
              if (typeof b == "string") {
                return parseInt(b);
              }
              throw Error("The engine does not exists or is not loaded");
            }
            var U = Object.freeze({
              "__proto__": null,
              CompoundDisposable: r,
              SimpleScheduler: p,
              clearElements: function (a) {
                return a.splice(0);
              },
              clearSequence: B,
              clearSpawn: function () {
                A = function () {
                  return function () {};
                };
              },
              condition: function (a, b, c) {
                return function (d) {
                  var e = new r();
                  function f() {
                    if (!e.disposed) {
                      d.apply(undefined, Array.prototype.slice.call(arguments));
                      e.dispose();
                    }
                  }
                  e.set(a(function (a, g) {
                    if (!e.disposed) {
                      var h = a == null;
                      if (h && g) {
                        e.set(b(f));
                      } else if (h && c) {
                        e.set(c(f));
                      } else {
                        d(a);
                        e.dispose();
                      }
                    }
                  }));
                  return e.asDisposable();
                };
              },
              convertNodeSpace: function (a, b, c) {
                return c.convertToNodeSpace(a.convertToWorldSpace(b));
              },
              convertNodeSpaceAR: v,
              currencyFormatter: N,
              defer: D,
              delay: function (a) {
                return function (b) {
                  function c() {
                    b();
                  }
                  var d = x();
                  d.scheduleOnce(c, a);
                  return function () {
                    d.unschedule(c);
                  };
                };
              },
              emptyFunc: u,
              emptyObj: t,
              enableFPSTracker: function () {
                if (K === undefined) {
                  K = new q();
                }
                K.enableTracker();
              },
              firstElement: function (a) {
                if (a.length > 0) {
                  return a[0];
                } else {
                  return undefined;
                }
              },
              formatCurrency: function (a, b, c) {
                var d = P();
                O({
                  currencySymbol: b !== undefined ? b : N.currencySymbol,
                  baseUnit: c !== undefined ? c : N.baseUnit
                });
                var e = N.format(a);
                O(d);
                return e;
              },
              formatDateTime: function (a) {
                return a.getFullYear() + "/" + H(a.getMonth() + 1) + "/" + H(a.getDate()) + " " + H(a.getHours()) + ":" + H(a.getMinutes());
              },
              formatGroup: function (a, b) {
                if (b == null) {
                  b = N.groupSeparator;
                }
                return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, b);
              },
              formatLeadingZero: H,
              getAbsolutePos: function (a) {
                var b = a.parent;
                if (!b) {
                  return a.position;
                }
                var c = a.getAnchorPoint();
                var d = b.getAnchorPoint();
                var e = a.position;
                e.x = Math.floor(e.x + d.x * b.width - c.x * a.width);
                e.y = Math.floor(e.y + d.y * b.height - c.y * a.height);
                return e;
              },
              getAbsoluteXPos: function (a) {
                var b = a.parent;
                if (b) {
                  return Math.floor(a.x + b.anchorX * b.width - a.anchorX * a.width);
                } else {
                  return a.x;
                }
              },
              getAbsoluteYPos: function (a) {
                var b = a.parent;
                if (b) {
                  return Math.floor(a.y + b.anchorY * b.height - a.anchorY * a.height);
                } else {
                  return a.y;
                }
              },
              getCocosMajor: function () {
                if (M === undefined) {
                  M = T("CocosEngine");
                }
                return M;
              },
              getDefaultCurrencyFormat: P,
              getEngineMajor: function () {
                if (L === undefined) {
                  L = T("COCOS_ENGINE");
                }
                return L;
              },
              getLocationOrigin: R,
              getLocationProtocol: Q,
              getPlatform: function () {
                return shell.getPlatform();
              },
              getSharedSimpleScheduler: x,
              hasMethod: function (a, b) {
                return typeof a[b] == "function";
              },
              hasProperty: function (a, b) {
                return a[b] !== undefined;
              },
              insertElement: function (a, b, c) {
                a.splice(c, 0, b);
              },
              isNumeric: function (a) {
                return !isNaN(parseFloat(a)) && isFinite(a);
              },
              isRightToLeft: I,
              joinPath: S,
              lastElement: function (a) {
                var b = a.length;
                if (b > 0) {
                  return a[b - 1];
                } else {
                  return undefined;
                }
              },
              observe: function (a, b) {
                return function (c) {
                  try {
                    var d = c.bind(undefined, undefined);
                    (function (a, b, c) {
                      if (typeof a != "object" || a === null) {
                        throw Error("Invalid parameter at index 0");
                      }
                      if (typeof b != "string" || b === "") {
                        throw Error("Invalid parameter at index 1");
                      }
                      if (typeof c != "function") {
                        throw Error("Invalid parameter at index 2");
                      }
                      var d = a.watch_eventPool;
                      if (!d) {
                        if (!Object.isExtensible(a)) {
                          throw Error("Object is not extensible");
                        }
                        d = l.value = Object.create(null);
                        Object.defineProperty(a, "watch_eventPool", l);
                      }
                      var e = d[b];
                      if (!e) {
                        var f = Object.getOwnPropertyDescriptor(a, b);
                        if (!f) {
                          throw Error("Object property not exists");
                        }
                        if (f.writable === false || f.get !== undefined && f.set === undefined) {
                          throw Error("Object property is readonly");
                        }
                        if (!f.configurable) {
                          throw Error("Object property is not configurable");
                        }
                        e = d[b] = [];
                        (function (a, b, c) {
                          if (c.writable) {
                            var d = c.value;
                            c.get = function () {
                              return d;
                            };
                            c.set = function (a) {
                              var c = d;
                              d = a;
                              m(this.watch_eventPool[b], a, c);
                            };
                            delete c.value;
                            delete c.writable;
                          } else if (c.get) {
                            var e = c.set;
                            c.set = function (a) {
                              e.call(this, a);
                              m(this.watch_eventPool[b], this[b]);
                            };
                          } else {
                            var f = c.set;
                            c.set = function (a) {
                              f.call(this, a);
                              m(this.watch_eventPool[b], a);
                            };
                          }
                          Object.defineProperty(a, b, c);
                        })(a, b, f);
                      }
                      if (e.indexOf(c) !== -1) {
                        throw Error("Watch callback exists");
                      }
                      e.push(c);
                    })(a, b, d);
                    var e = n.bind(undefined, a, b, d);
                    return new r(e).asDisposable();
                  } catch (a) {
                    c(a);
                    return u;
                  }
                };
              },
              randomInt: function (a, b) {
                return Math.floor(Math.random() * (b - a + 1)) + a;
              },
              removeElement: function (a, b) {
                var c = a.indexOf(b);
                if (c !== -1) {
                  return a.splice(c, 1);
                } else {
                  return undefined;
                }
              },
              removeIndex: function (a, b) {
                if (a.length >= Math.abs(b)) {
                  return a.splice(b, 1);
                } else {
                  return undefined;
                }
              },
              resolvePath: function (a, b) {
                var c;
                c = b === undefined ? a : /^([a-z0-9+-.]+:)?\/\//.test(b) ? b : S(a, b);
                if (/^[a-z0-9+-.]+:\/\//.test(c)) {
                  return c;
                } else if (c.startsWith("//")) {
                  return S(Q(), c);
                } else {
                  return S(R(), c);
                }
              },
              selector: function (a, b) {
                for (var c, d, e = [], f = 2; f < arguments.length; f++) {
                  e[f - 2] = arguments[f];
                }
                return function (f) {
                  try {
                    d = b != null || e.length > 0 ? a.apply(b, e) : a();
                  } catch (a) {
                    c = a;
                  }
                  f(c, d);
                  return u;
                };
              },
              get sequence() {
                return z;
              },
              setAbsolutePos: function (a, b) {
                var c = a.parent;
                if (c) {
                  var d = a.getAnchorPoint();
                  var e = c.getAnchorPoint();
                  a.setPosition(new cc.Vec2(Math.floor(b.x - e.x * c.width + d.x * a.width), Math.round(b.y - e.y * c.height + d.y * a.height)));
                } else {
                  a.setPosition(b);
                }
              },
              setAbsoluteXPos: function (a, b) {
                var c = a.parent;
                a.x = c ? Math.floor(b - c.anchorX * c.width + a.anchorX * a.width) : b;
              },
              setAbsoluteYPos: function (a, b) {
                var c = a.parent;
                a.y = c ? Math.floor(b - c.anchorY * c.height + a.anchorY * a.height) : b;
              },
              setDefaultCurrencyFormat: O,
              setFPSTrackerInterval: function (a) {
                if (K === undefined) {
                  K = new q();
                }
                K.setTrackingInterval(a);
              },
              setNodeColorWithOpacity: function (a, b) {
                if (!J) {
                  J = cc.Color.WHITE.clone();
                }
                J[o.N] = b[o.N] | 4278190080;
                a.color = J;
                a.opacity = b.getA();
              },
              get spawn() {
                return A;
              },
              stringToBoolean: function (a) {
                if (a == null) {
                  return false;
                }
                switch (a.toLowerCase().trim()) {
                  case "true":
                  case "yes":
                  case "1":
                    return true;
                  case "false":
                  case "no":
                  case "0":
                    return false;
                  default:
                    return !!a;
                }
              },
              tick: E,
              timeout: y,
              toDecimalWithExp: F,
              toFixed: G,
              transferToNewParent: function (a, b) {
                a.position = v(a.parent, a.position, b);
                a.parent = b;
              },
              waterfall: function () {
                var a;
                a = arguments.length === 1 && arguments[0] instanceof Array ? arguments[0].slice() : Array.prototype.slice.call(arguments);
                return function (b) {
                  var c = new r();
                  var d = 0;
                  function e(f) {
                    if (!c.disposed) {
                      if (f != null || ++d === a.length) {
                        var g = Array.prototype.slice.call(arguments);
                        b.apply(undefined, g);
                        c.dispose();
                      } else {
                        var h = a[d];
                        var i = h.length;
                        if (i > 1) {
                          (g = Array.prototype.slice.call(arguments, 1, i)).push(e);
                          c.set(h.apply(undefined, g));
                        } else {
                          c.set(h(e));
                        }
                      }
                    }
                  }
                  c.set(a[d](e));
                  return c.asDisposable();
                };
              }
            });
            a("Utils", U);
            var V;
            var W = d !== undefined ? d : f !== undefined ? f : typeof global != "undefined" ? global : e !== undefined ? e : {};
            var X = {
              exports: {}
            };
            V = X;
            if (!(e !== undefined || f !== undefined || W !== undefined)) {
              Function("", "return this")();
            }
            V.exports = function (a) {
              var b = {};
              function c(d) {
                if (b[d]) {
                  return b[d].exports;
                }
                var e = b[d] = {
                  i: d,
                  l: false,
                  exports: {}
                };
                a[d].call(e.exports, e, e.exports, c);
                e.l = true;
                return e.exports;
              }
              c.m = a;
              c.c = b;
              c.d = function (a, b, d) {
                if (!c.o(a, b)) {
                  Object.defineProperty(a, b, {
                    enumerable: true,
                    get: d
                  });
                }
              };
              c.r = function (a) {
                if (typeof Symbol != "undefined" && Symbol.toStringTag) {
                  Object.defineProperty(a, Symbol.toStringTag, {
                    value: "Module"
                  });
                }
                Object.defineProperty(a, "__esModule", {
                  value: true
                });
              };
              c.t = function (a, b) {
                if (b & 1) {
                  a = c(a);
                }
                if (b & 8) {
                  return a;
                }
                if (b & 4 && typeof a == "object" && a && a.__esModule) {
                  return a;
                }
                var d = Object.create(null);
                c.r(d);
                Object.defineProperty(d, "default", {
                  enumerable: true,
                  value: a
                });
                if (b & 2 && typeof a != "string") {
                  for (var e in a) {
                    c.d(d, e, function (b) {
                      return a[b];
                    }.bind(null, e));
                  }
                }
                return d;
              };
              c.n = function (a) {
                var b = a && a.__esModule ? function () {
                  return a.default;
                } : function () {
                  return a;
                };
                c.d(b, "a", b);
                return b;
              };
              c.o = function (a, b) {
                return Object.prototype.hasOwnProperty.call(a, b);
              };
              c.p = "";
              return c(c.s = 18);
            }([function (a) {
              function b(a) {
                if (a) {
                  return function (a) {
                    for (var c in b.prototype) {
                      a[c] = b.prototype[c];
                    }
                    return a;
                  }(a);
                }
              }
              a.exports = b;
              b.prototype.on = b.prototype.addEventListener = function (a, b) {
                this.U = this.U || {};
                (this.U["$" + a] = this.U["$" + a] || []).push(b);
                return this;
              };
              b.prototype.once = function (a, b) {
                function c() {
                  this.off(a, c);
                  b.apply(this, arguments);
                }
                c.fn = b;
                this.on(a, c);
                return this;
              };
              b.prototype.off = b.prototype.removeListener = b.prototype.removeAllListeners = b.prototype.removeEventListener = function (a, b) {
                this.U = this.U || {};
                if (arguments.length == 0) {
                  this.U = {};
                  return this;
                }
                var c;
                var d = this.U["$" + a];
                if (!d) {
                  return this;
                }
                if (arguments.length == 1) {
                  delete this.U["$" + a];
                  return this;
                }
                for (var e = 0; e < d.length; e++) {
                  if ((c = d[e]) === b || c.fn === b) {
                    d.splice(e, 1);
                    break;
                  }
                }
                if (d.length === 0) {
                  delete this.U["$" + a];
                }
                return this;
              };
              b.prototype.emit = function (a) {
                this.U = this.U || {};
                for (var b = Array(arguments.length - 1), c = this.U["$" + a], d = 1; d < arguments.length; d++) {
                  b[d - 1] = arguments[d];
                }
                if (c) {
                  d = 0;
                  for (var e = (c = c.slice(0)).length; d < e; ++d) {
                    c[d].apply(this, b);
                  }
                }
                return this;
              };
              b.prototype.listeners = function (a) {
                this.U = this.U || {};
                return this.U["$" + a] || [];
              };
              b.prototype.hasListeners = function (a) {
                return !!this.listeners(a).length;
              };
            }, function (a, b, c) {
              var d = c(24);
              var e = c(25);
              a.exports = {
                protocol: 4,
                encodePacket: d,
                encodePayload: function (a, b) {
                  var c = a.length;
                  var e = Array(c);
                  var f = 0;
                  a.forEach(function (a, g) {
                    d(a, false, function (a) {
                      e[g] = a;
                      if (++f === c) {
                        b(e.join(""));
                      }
                    });
                  });
                },
                decodePacket: e,
                decodePayload: function (a, b) {
                  for (var c = a.split(""), d = [], f = 0; f < c.length; f++) {
                    var g = e(c[f], b);
                    d.push(g);
                    if (g.type === "error") {
                      break;
                    }
                  }
                  return d;
                }
              };
            }, function (a) {
              a.exports = e !== undefined ? e : f !== undefined ? f : Function("", "return this")();
            }, function (a, b, c) {
              var d = c(22);
              var e = c(2);
              a.exports = function (a) {
                var b = a.xdomain;
                var c = a.xscheme;
                var f = a.enablesXDR;
                try {
                  if (typeof XMLHttpRequest != "undefined" && (!b || d)) {
                    return new XMLHttpRequest();
                  }
                } catch (a) {}
                try {
                  if (typeof XDomainRequest != "undefined" && !c && f) {
                    return new XDomainRequest();
                  }
                } catch (a) {}
                if (!b) {
                  try {
                    return new e[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
                  } catch (a) {}
                }
              };
            }, function (a, b, c) {
              function d(a) {
                return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
                  return typeof a;
                } : function (a) {
                  if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                    return "symbol";
                  } else {
                    return typeof a;
                  }
                })(a);
              }
              function e(a, b) {
                return (e = Object.setPrototypeOf || function (a, b) {
                  a.__proto__ = b;
                  return a;
                })(a, b);
              }
              function f(a) {
                var b = function () {
                  if (typeof Reflect == "undefined" || !Reflect.construct) {
                    return false;
                  }
                  if (Reflect.construct.sham) {
                    return false;
                  }
                  if (typeof Proxy == "function") {
                    return true;
                  }
                  try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                    return true;
                  } catch (a) {
                    return false;
                  }
                }();
                return function () {
                  var c;
                  var d = h(a);
                  if (b) {
                    var e = h(this).constructor;
                    c = Reflect.construct(d, arguments, e);
                  } else {
                    c = d.apply(this, arguments);
                  }
                  return g(this, c);
                };
              }
              function g(a, b) {
                if (!b || d(b) !== "object" && typeof b != "function") {
                  return function (a) {
                    if (a === undefined) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return a;
                  }(a);
                } else {
                  return b;
                }
              }
              function h(a) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (a) {
                  return a.__proto__ || Object.getPrototypeOf(a);
                })(a);
              }
              var i = c(1);
              var j = function (a) {
                (function (a, b) {
                  if (typeof b != "function" && b !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                      value: a,
                      writable: true,
                      configurable: true
                    }
                  });
                  if (b) {
                    e(a, b);
                  }
                })(d, a);
                var b;
                var c = f(d);
                function d(a) {
                  var b;
                  (function (a, b) {
                    if (!(a instanceof b)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  })(this, d);
                  (b = c.call(this)).opts = a;
                  b.query = a.query;
                  b.readyState = "";
                  b.socket = a.socket;
                  return b;
                }
                if (b = [{
                  key: "onError",
                  value: function (a, b) {
                    var c = Error(a);
                    c.type = "TransportError";
                    c.description = b;
                    this.emit("error", c);
                    return this;
                  }
                }, {
                  key: "open",
                  value: function () {
                    if (!(this.readyState !== "closed" && this.readyState !== "")) {
                      this.readyState = "opening";
                      this.doOpen();
                    }
                    return this;
                  }
                }, {
                  key: "close",
                  value: function () {
                    if (!(this.readyState !== "opening" && this.readyState !== "open")) {
                      this.doClose();
                      this.onClose();
                    }
                    return this;
                  }
                }, {
                  key: "send",
                  value: function (a) {
                    if (this.readyState !== "open") {
                      throw Error("Transport not open");
                    }
                    this.write(a);
                  }
                }, {
                  key: "onOpen",
                  value: function () {
                    this.readyState = "open";
                    this.writable = true;
                    this.emit("open");
                  }
                }, {
                  key: "onData",
                  value: function (a) {
                    var b = i.decodePacket(a, this.socket.binaryType);
                    this.onPacket(b);
                  }
                }, {
                  key: "onPacket",
                  value: function (a) {
                    this.emit("packet", a);
                  }
                }, {
                  key: "onClose",
                  value: function () {
                    this.readyState = "closed";
                    this.emit("close");
                  }
                }]) {
                  (function (a, b) {
                    for (var c = 0; c < b.length; c++) {
                      var d = b[c];
                      d.enumerable = d.enumerable || false;
                      d.configurable = true;
                      if ("value" in d) {
                        d.writable = true;
                      }
                      Object.defineProperty(a, d.key, d);
                    }
                  })(d.prototype, b);
                }
                return d;
              }(c(0));
              a.exports = j;
            }, function (a, b) {
              b.encode = function (a) {
                var b = "";
                for (var c in a) {
                  if (a.hasOwnProperty(c)) {
                    if (b.length) {
                      b += "&";
                    }
                    b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]);
                  }
                }
                return b;
              };
              b.decode = function (a) {
                for (var b = {}, c = a.split("&"), d = 0, e = c.length; d < e; d++) {
                  var f = c[d].split("=");
                  b[decodeURIComponent(f[0])] = decodeURIComponent(f[1]);
                }
                return b;
              };
            }, function (a, b, c) {
              function d(a) {
                return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
                  return typeof a;
                } : function (a) {
                  if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                    return "symbol";
                  } else {
                    return typeof a;
                  }
                })(a);
              }
              function e(a, b, c) {
                return (e = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function (a, b, c) {
                  var d = function (a, b) {
                    for (; !Object.prototype.hasOwnProperty.call(a, b) && (a = h(a)) !== null;);
                    return a;
                  }(a, b);
                  if (d) {
                    var e = Object.getOwnPropertyDescriptor(d, b);
                    if (e.get) {
                      return e.get.call(c);
                    } else {
                      return e.value;
                    }
                  }
                })(a, b, c || a);
              }
              function f(a, b) {
                return (f = Object.setPrototypeOf || function (a, b) {
                  a.__proto__ = b;
                  return a;
                })(a, b);
              }
              function g(a, b) {
                if (!b || d(b) !== "object" && typeof b != "function") {
                  return function (a) {
                    if (a === undefined) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return a;
                  }(a);
                } else {
                  return b;
                }
              }
              function h(a) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (a) {
                  return a.__proto__ || Object.getPrototypeOf(a);
                })(a);
              }
              function i(a, b) {
                if (!(a instanceof b)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              function j(a, b) {
                for (var c = 0; c < b.length; c++) {
                  var d = b[c];
                  d.enumerable = d.enumerable || false;
                  d.configurable = true;
                  if ("value" in d) {
                    d.writable = true;
                  }
                  Object.defineProperty(a, d.key, d);
                }
              }
              function k(a, b, c) {
                if (b) {
                  j(a.prototype, b);
                }
                if (c) {
                  j(a, c);
                }
                return a;
              }
              Object.defineProperty(b, "__esModule", {
                value: true
              });
              b.Decoder = b.Encoder = b.PacketType = b.protocol = undefined;
              var l;
              var m = c(0);
              var n = c(30);
              var o = c(15);
              b.protocol = 5;
              (function (a) {
                a[a.CONNECT = 0] = "CONNECT";
                a[a.DISCONNECT = 1] = "DISCONNECT";
                a[a.EVENT = 2] = "EVENT";
                a[a.ACK = 3] = "ACK";
                a[a.CONNECT_ERROR = 4] = "CONNECT_ERROR";
                a[a.BINARY_EVENT = 5] = "BINARY_EVENT";
                a[a.BINARY_ACK = 6] = "BINARY_ACK";
              })(l = b.PacketType || (b.PacketType = {}));
              var p = function () {
                function a() {
                  i(this, a);
                }
                k(a, [{
                  key: "encode",
                  value: function (a) {
                    if (a.type !== l.EVENT && a.type !== l.ACK || !o.hasBinary(a)) {
                      return [this.encodeAsString(a)];
                    } else {
                      a.type = a.type === l.EVENT ? l.BINARY_EVENT : l.BINARY_ACK;
                      return this.encodeAsBinary(a);
                    }
                  }
                }, {
                  key: "encodeAsString",
                  value: function (a) {
                    var b = "" + a.type;
                    if (!(a.type !== l.BINARY_EVENT && a.type !== l.BINARY_ACK)) {
                      b += a.attachments + "-";
                    }
                    if (a.nsp && a.nsp !== "/") {
                      b += a.nsp + ",";
                    }
                    if (a.id != null) {
                      b += a.id;
                    }
                    if (a.data != null) {
                      b += JSON.stringify(a.data);
                    }
                    return b;
                  }
                }, {
                  key: "encodeAsBinary",
                  value: function (a) {
                    var b = n.deconstructPacket(a);
                    var c = this.encodeAsString(b.packet);
                    var d = b.buffers;
                    d.unshift(c);
                    return d;
                  }
                }]);
                return a;
              }();
              b.Encoder = p;
              var q = function (a) {
                (function (a, b) {
                  if (typeof b != "function" && b !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                      value: a,
                      writable: true,
                      configurable: true
                    }
                  });
                  if (b) {
                    f(a, b);
                  }
                })(c, a);
                var b = function (a) {
                  var b = function () {
                    if (typeof Reflect == "undefined" || !Reflect.construct) {
                      return false;
                    }
                    if (Reflect.construct.sham) {
                      return false;
                    }
                    if (typeof Proxy == "function") {
                      return true;
                    }
                    try {
                      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                      return true;
                    } catch (a) {
                      return false;
                    }
                  }();
                  return function () {
                    var c;
                    var d = h(a);
                    if (b) {
                      var e = h(this).constructor;
                      c = Reflect.construct(d, arguments, e);
                    } else {
                      c = d.apply(this, arguments);
                    }
                    return g(this, c);
                  };
                }(c);
                function c() {
                  i(this, c);
                  return b.call(this);
                }
                k(c, [{
                  key: "add",
                  value: function (a) {
                    var b;
                    if (typeof a == "string") {
                      if ((b = this.decodeString(a)).type === l.BINARY_EVENT || b.type === l.BINARY_ACK) {
                        this.reconstructor = new r(b);
                        if (b.attachments === 0) {
                          e(h(c.prototype), "emit", this).call(this, "decoded", b);
                        }
                      } else {
                        e(h(c.prototype), "emit", this).call(this, "decoded", b);
                      }
                    } else {
                      if (!o.isBinary(a) && !a.base64) {
                        throw Error("Unknown type: " + a);
                      }
                      if (!this.reconstructor) {
                        throw Error("got binary data when not reconstructing a packet");
                      }
                      if (b = this.reconstructor.takeBinaryData(a)) {
                        this.reconstructor = null;
                        e(h(c.prototype), "emit", this).call(this, "decoded", b);
                      }
                    }
                  }
                }, {
                  key: "decodeString",
                  value: function (a) {
                    var b = 0;
                    var d = {
                      type: +a.charAt(0)
                    };
                    if (l[d.type] === undefined) {
                      throw Error("unknown packet type " + d.type);
                    }
                    if (d.type === l.BINARY_EVENT || d.type === l.BINARY_ACK) {
                      for (var e = b + 1; a.charAt(++b) !== "-" && b != a.length;);
                      var f = a.substring(e, b);
                      if (f != +f || a.charAt(b) !== "-") {
                        throw Error("Illegal attachments");
                      }
                      d.attachments = +f;
                    }
                    if (a.charAt(b + 1) === "/") {
                      for (var g = b + 1; ++b && a.charAt(b) !== "," && b !== a.length;);
                      d.nsp = a.substring(g, b);
                    } else {
                      d.nsp = "/";
                    }
                    var h = a.charAt(b + 1);
                    if (h !== "" && +h == h) {
                      for (var i = b + 1; ++b;) {
                        var j = a.charAt(b);
                        if (j == null || +j != j) {
                          --b;
                          break;
                        }
                        if (b === a.length) {
                          break;
                        }
                      }
                      d.id = +a.substring(i, b + 1);
                    }
                    if (a.charAt(++b)) {
                      var k = function (a) {
                        try {
                          return JSON.parse(a);
                        } catch (a) {
                          return false;
                        }
                      }(a.substr(b));
                      if (!c.isPayloadValid(d.type, k)) {
                        throw Error("invalid payload");
                      }
                      d.data = k;
                    }
                    return d;
                  }
                }, {
                  key: "destroy",
                  value: function () {
                    if (this.reconstructor) {
                      this.reconstructor.finishedReconstruction();
                    }
                  }
                }], [{
                  key: "isPayloadValid",
                  value: function (a, b) {
                    switch (a) {
                      case l.CONNECT:
                        return d(b) === "object";
                      case l.DISCONNECT:
                        return b === undefined;
                      case l.CONNECT_ERROR:
                        return typeof b == "string" || d(b) === "object";
                      case l.EVENT:
                      case l.BINARY_EVENT:
                        return Array.isArray(b) && typeof b[0] == "string";
                      case l.ACK:
                      case l.BINARY_ACK:
                        return Array.isArray(b);
                    }
                  }
                }]);
                return c;
              }(m);
              b.Decoder = q;
              var r = function () {
                function a(b) {
                  i(this, a);
                  this.packet = b;
                  this.buffers = [];
                  this.reconPack = b;
                }
                k(a, [{
                  key: "takeBinaryData",
                  value: function (a) {
                    this.buffers.push(a);
                    if (this.buffers.length === this.reconPack.attachments) {
                      var b = n.reconstructPacket(this.reconPack, this.buffers);
                      this.finishedReconstruction();
                      return b;
                    }
                    return null;
                  }
                }, {
                  key: "finishedReconstruction",
                  value: function () {
                    this.reconPack = null;
                    this.buffers = [];
                  }
                }]);
                return a;
              }();
            }, function (a) {
              var b = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
              var c = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
              a.exports = function (a) {
                var d = a;
                var e = a.indexOf("[");
                var f = a.indexOf("]");
                if (e != -1 && f != -1) {
                  a = a.substring(0, e) + a.substring(e, f).replace(/:/g, ";") + a.substring(f, a.length);
                }
                for (var g, h, i = b.exec(a || ""), j = {}, k = 14; k--;) {
                  j[c[k]] = i[k] || "";
                }
                if (e != -1 && f != -1) {
                  j.source = d;
                  j.host = j.host.substring(1, j.host.length - 1).replace(/;/g, ":");
                  j.authority = j.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
                  j.ipv6uri = true;
                }
                j.pathNames = function (a, b) {
                  var c = b.replace(/\/{2,9}/g, "/").split("/");
                  if (!(b.substr(0, 1) != "/" && b.length !== 0)) {
                    c.splice(0, 1);
                  }
                  if (b.substr(b.length - 1, 1) == "/") {
                    c.splice(c.length - 1, 1);
                  }
                  return c;
                }(0, j.path);
                g = j.query;
                h = {};
                g.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (a, b, c) {
                  if (b) {
                    h[b] = c;
                  }
                });
                j.queryKey = h;
                return j;
              };
            }, function (a, b, c) {
              function d(a) {
                return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
                  return typeof a;
                } : function (a) {
                  if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                    return "symbol";
                  } else {
                    return typeof a;
                  }
                })(a);
              }
              function e(a, b, c) {
                return (e = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function (a, b, c) {
                  var d = function (a, b) {
                    for (; !Object.prototype.hasOwnProperty.call(a, b) && (a = h(a)) !== null;);
                    return a;
                  }(a, b);
                  if (d) {
                    var e = Object.getOwnPropertyDescriptor(d, b);
                    if (e.get) {
                      return e.get.call(c);
                    } else {
                      return e.value;
                    }
                  }
                })(a, b, c || a);
              }
              function f(a, b) {
                return (f = Object.setPrototypeOf || function (a, b) {
                  a.__proto__ = b;
                  return a;
                })(a, b);
              }
              function g(a, b) {
                if (!b || d(b) !== "object" && typeof b != "function") {
                  return function (a) {
                    if (a === undefined) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return a;
                  }(a);
                } else {
                  return b;
                }
              }
              function h(a) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (a) {
                  return a.__proto__ || Object.getPrototypeOf(a);
                })(a);
              }
              Object.defineProperty(b, "__esModule", {
                value: true
              });
              b.Manager = undefined;
              var i = c(20);
              var j = c(14);
              var k = c(0);
              var l = c(6);
              var m = c(16);
              var n = c(17);
              var o = c(31);
              var p = function (a) {
                (function (a, b) {
                  if (typeof b != "function" && b !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                      value: a,
                      writable: true,
                      configurable: true
                    }
                  });
                  if (b) {
                    f(a, b);
                  }
                })(k, a);
                var b;
                var c = function (a) {
                  var b = function () {
                    if (typeof Reflect == "undefined" || !Reflect.construct) {
                      return false;
                    }
                    if (Reflect.construct.sham) {
                      return false;
                    }
                    if (typeof Proxy == "function") {
                      return true;
                    }
                    try {
                      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                      return true;
                    } catch (a) {
                      return false;
                    }
                  }();
                  return function () {
                    var c;
                    var d = h(a);
                    if (b) {
                      var e = h(this).constructor;
                      c = Reflect.construct(d, arguments, e);
                    } else {
                      c = d.apply(this, arguments);
                    }
                    return g(this, c);
                  };
                }(k);
                function k(a, b) {
                  var e;
                  (function (a, b) {
                    if (!(a instanceof b)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  })(this, k);
                  (e = c.call(this)).nsps = {};
                  e.subs = [];
                  e.connecting = [];
                  if (a && d(a) === "object") {
                    b = a;
                    a = undefined;
                  }
                  (b = b || {}).path = b.path || "/socket.io";
                  e.opts = b;
                  e.reconnection(b.reconnection !== false);
                  e.reconnectionAttempts(b.reconnectionAttempts || Infinity);
                  e.reconnectionDelay(b.reconnectionDelay || 1000);
                  e.reconnectionDelayMax(b.reconnectionDelayMax || 5000);
                  e.randomizationFactor(b.randomizationFactor || 0.5);
                  e.backoff = new o({
                    min: e.reconnectionDelay(),
                    max: e.reconnectionDelayMax(),
                    jitter: e.randomizationFactor()
                  });
                  e.timeout(b.timeout == null ? 20000 : b.timeout);
                  e._readyState = "closed";
                  e.uri = a;
                  var f = b.parser || l;
                  e.encoder = new f.Encoder();
                  e.decoder = new f.Decoder();
                  e._autoConnect = b.autoConnect !== false;
                  if (e._autoConnect) {
                    e.open();
                  }
                  return e;
                }
                if (b = [{
                  key: "reconnection",
                  value: function (a) {
                    if (arguments.length) {
                      this.F = !!a;
                      return this;
                    } else {
                      return this.F;
                    }
                  }
                }, {
                  key: "reconnectionAttempts",
                  value: function (a) {
                    if (a === undefined) {
                      return this.L;
                    } else {
                      this.L = a;
                      return this;
                    }
                  }
                }, {
                  key: "reconnectionDelay",
                  value: function (a) {
                    if (a === undefined) {
                      return this.X;
                    } else {
                      this.X = a;
                      if (this.backoff) {
                        this.backoff.setMin(a);
                      }
                      return this;
                    }
                  }
                }, {
                  key: "randomizationFactor",
                  value: function (a) {
                    if (a === undefined) {
                      return this.H;
                    } else {
                      this.H = a;
                      if (this.backoff) {
                        this.backoff.setJitter(a);
                      }
                      return this;
                    }
                  }
                }, {
                  key: "reconnectionDelayMax",
                  value: function (a) {
                    if (a === undefined) {
                      return this.q;
                    } else {
                      this.q = a;
                      if (this.backoff) {
                        this.backoff.setMax(a);
                      }
                      return this;
                    }
                  }
                }, {
                  key: "timeout",
                  value: function (a) {
                    if (arguments.length) {
                      this.K = a;
                      return this;
                    } else {
                      return this.K;
                    }
                  }
                }, {
                  key: "maybeReconnectOnOpen",
                  value: function () {
                    if (!this._reconnecting && this.F && this.backoff.attempts === 0) {
                      this.reconnect();
                    }
                  }
                }, {
                  key: "open",
                  value: function (a) {
                    var b = this;
                    if (~this._readyState.indexOf("open")) {
                      return this;
                    }
                    this.engine = i(this.uri, this.opts);
                    var c = this.engine;
                    var d = this;
                    this._readyState = "opening";
                    this.skipReconnect = false;
                    var f = m.on(c, "open", function () {
                      d.onopen();
                      if (a) {
                        a();
                      }
                    });
                    var g = m.on(c, "error", function (c) {
                      d.cleanup();
                      d._readyState = "closed";
                      e(h(k.prototype), "emit", b).call(b, "error", c);
                      if (a) {
                        a(c);
                      } else {
                        d.maybeReconnectOnOpen();
                      }
                    });
                    if (this.K !== false) {
                      var j = this.K;
                      if (j === 0) {
                        f.destroy();
                      }
                      var l = // TOLOOK
                      setTimeout(function () {
                        f.destroy();
                        c.close();
                        c.emit("error", Error("timeout"));
                      }, j);
                      this.subs.push({
                        destroy: function () {
                          clearTimeout(l);
                        }
                      });
                    }
                    this.subs.push(f);
                    this.subs.push(g);
                    return this;
                  }
                }, {
                  key: "connect",
                  value: function (a) {
                    return this.open(a);
                  }
                }, {
                  key: "onopen",
                  value: function () {
                    this.cleanup();
                    this._readyState = "open";
                    e(h(k.prototype), "emit", this).call(this, "open");
                    var a = this.engine;
                    this.subs.push(m.on(a, "data", n(this, "ondata")));
                    this.subs.push(m.on(a, "ping", n(this, "onping")));
                    this.subs.push(m.on(a, "error", n(this, "onerror")));
                    this.subs.push(m.on(a, "close", n(this, "onclose")));
                    this.subs.push(m.on(this.decoder, "decoded", n(this, "ondecoded")));
                  }
                }, {
                  key: "onping",
                  value: function () {
                    e(h(k.prototype), "emit", this).call(this, "ping");
                  }
                }, {
                  key: "ondata",
                  value: function (a) {
                    this.decoder.add(a);
                  }
                }, {
                  key: "ondecoded",
                  value: function (a) {
                    e(h(k.prototype), "emit", this).call(this, "packet", a);
                  }
                }, {
                  key: "onerror",
                  value: function (a) {
                    e(h(k.prototype), "emit", this).call(this, "error", a);
                  }
                }, {
                  key: "socket",
                  value: function (a, b) {
                    var c = this.nsps[a];
                    if (!c) {
                      c = new j.Socket(this, a, b);
                      this.nsps[a] = c;
                      var d = this;
                      c.on("connecting", e);
                      if (this._autoConnect) {
                        e();
                      }
                    }
                    function e() {
                      if (!~d.connecting.indexOf(c)) {
                        d.connecting.push(c);
                      }
                    }
                    return c;
                  }
                }, {
                  key: "_destroy",
                  value: function (a) {
                    var b = this.connecting.indexOf(a);
                    if (~b) {
                      this.connecting.splice(b, 1);
                    }
                    if (!this.connecting.length) {
                      this._close();
                    }
                  }
                }, {
                  key: "_packet",
                  value: function (a) {
                    if (a.query && a.type === 0) {
                      a.nsp += "?" + a.query;
                    }
                    for (var b = this.encoder.encode(a), c = 0; c < b.length; c++) {
                      this.engine.write(b[c], a.options);
                    }
                  }
                }, {
                  key: "cleanup",
                  value: function () {
                    for (var a = this.subs.length, b = 0; b < a; b++) {
                      this.subs.shift().destroy();
                    }
                    this.decoder.destroy();
                  }
                }, {
                  key: "_close",
                  value: function () {
                    this.skipReconnect = true;
                    this._reconnecting = false;
                    if (this._readyState === "opening") {
                      this.cleanup();
                    }
                    this.backoff.reset();
                    this._readyState = "closed";
                    if (this.engine) {
                      this.engine.close();
                    }
                  }
                }, {
                  key: "disconnect",
                  value: function () {
                    return this._close();
                  }
                }, {
                  key: "onclose",
                  value: function (a) {
                    this.cleanup();
                    this.backoff.reset();
                    this._readyState = "closed";
                    e(h(k.prototype), "emit", this).call(this, "close", a);
                    if (this.F && !this.skipReconnect) {
                      this.reconnect();
                    }
                  }
                }, {
                  key: "reconnect",
                  value: function () {
                    var a = this;
                    if (this._reconnecting || this.skipReconnect) {
                      return this;
                    }
                    var b = this;
                    if (this.backoff.attempts >= this.L) {
                      this.backoff.reset();
                      e(h(k.prototype), "emit", this).call(this, "reconnect_failed");
                      this._reconnecting = false;
                    } else {
                      var c = this.backoff.duration();
                      this._reconnecting = true;
                      var d = // TOLOOK
                      setTimeout(function () {
                        if (!b.skipReconnect) {
                          e(h(k.prototype), "emit", a).call(a, "reconnect_attempt", b.backoff.attempts);
                          if (!b.skipReconnect) {
                            b.open(function (c) {
                              if (c) {
                                b._reconnecting = false;
                                b.reconnect();
                                e(h(k.prototype), "emit", a).call(a, "reconnect_error", c);
                              } else {
                                b.onreconnect();
                              }
                            });
                          }
                        }
                      }, c);
                      this.subs.push({
                        destroy: function () {
                          clearTimeout(d);
                        }
                      });
                    }
                  }
                }, {
                  key: "onreconnect",
                  value: function () {
                    var a = this.backoff.attempts;
                    this._reconnecting = false;
                    this.backoff.reset();
                    e(h(k.prototype), "emit", this).call(this, "reconnect", a);
                  }
                }]) {
                  (function (a, b) {
                    for (var c = 0; c < b.length; c++) {
                      var d = b[c];
                      d.enumerable = d.enumerable || false;
                      d.configurable = true;
                      if ("value" in d) {
                        d.writable = true;
                      }
                      Object.defineProperty(a, d.key, d);
                    }
                  })(k.prototype, b);
                }
                return k;
              }(k);
              b.Manager = p;
            }, function (a, b, c) {
              var d = c(3);
              var e = c(23);
              var f = c(27);
              var g = c(28);
              b.polling = function (a) {
                var b = false;
                var c = false;
                var g = a.jsonp !== false;
                if (typeof location != "undefined") {
                  var h = location.protocol === "https:";
                  var i = location.port;
                  if (!i) {
                    i = h ? 443 : 80;
                  }
                  b = a.hostname !== location.hostname || i !== a.port;
                  c = a.secure !== h;
                }
                a.xdomain = b;
                a.xscheme = c;
                if ("open" in new d(a) && !a.forceJSONP) {
                  return new e(a);
                }
                if (!g) {
                  throw Error("JSONP disabled");
                }
                return new f(a);
              };
              b.websocket = g;
            }, function (a, b, c) {
              function d(a) {
                return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
                  return typeof a;
                } : function (a) {
                  if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                    return "symbol";
                  } else {
                    return typeof a;
                  }
                })(a);
              }
              function e(a, b) {
                if (!(a instanceof b)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              function f(a, b) {
                return (f = Object.setPrototypeOf || function (a, b) {
                  a.__proto__ = b;
                  return a;
                })(a, b);
              }
              function g(a) {
                var b = function () {
                  if (typeof Reflect == "undefined" || !Reflect.construct) {
                    return false;
                  }
                  if (Reflect.construct.sham) {
                    return false;
                  }
                  if (typeof Proxy == "function") {
                    return true;
                  }
                  try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                    return true;
                  } catch (a) {
                    return false;
                  }
                }();
                return function () {
                  var c;
                  var d = i(a);
                  if (b) {
                    var e = i(this).constructor;
                    c = Reflect.construct(d, arguments, e);
                  } else {
                    c = d.apply(this, arguments);
                  }
                  return h(this, c);
                };
              }
              function h(a, b) {
                if (!b || d(b) !== "object" && typeof b != "function") {
                  return function (a) {
                    if (a === undefined) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return a;
                  }(a);
                } else {
                  return b;
                }
              }
              function i(a) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (a) {
                  return a.__proto__ || Object.getPrototypeOf(a);
                })(a);
              }
              var j = c(4);
              var k = c(5);
              var l = c(1);
              var m = c(12);
              var n = function (a) {
                (function (a, b) {
                  if (typeof b != "function" && b !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                      value: a,
                      writable: true,
                      configurable: true
                    }
                  });
                  if (b) {
                    f(a, b);
                  }
                })(d, a);
                var b;
                var c = g(d);
                function d() {
                  e(this, d);
                  return c.apply(this, arguments);
                }
                if (b = [{
                  key: "doOpen",
                  value: function () {
                    this.poll();
                  }
                }, {
                  key: "pause",
                  value: function (a) {
                    var b = this;
                    function c() {
                      b.readyState = "paused";
                      a();
                    }
                    this.readyState = "pausing";
                    if (this.polling || !this.writable) {
                      var d = 0;
                      if (this.polling) {
                        d++;
                        this.once("pollComplete", function () {
                          if (! --d) {
                            c();
                          }
                        });
                      }
                      if (!this.writable) {
                        d++;
                        this.once("drain", function () {
                          if (! --d) {
                            c();
                          }
                        });
                      }
                    } else {
                      c();
                    }
                  }
                }, {
                  key: "poll",
                  value: function () {
                    this.polling = true;
                    this.doPoll();
                    this.emit("poll");
                  }
                }, {
                  key: "onData",
                  value: function (a) {
                    var b = this;
                    l.decodePayload(a, this.socket.binaryType).forEach(function (a) {
                      if (b.readyState === "opening" && a.type === "open") {
                        b.onOpen();
                      }
                      if (a.type === "close") {
                        b.onClose();
                        return false;
                      }
                      b.onPacket(a);
                    });
                    if (this.readyState !== "closed") {
                      this.polling = false;
                      this.emit("pollComplete");
                      if (this.readyState === "open") {
                        this.poll();
                      }
                    }
                  }
                }, {
                  key: "doClose",
                  value: function () {
                    var a = this;
                    function b() {
                      a.write([{
                        type: "close"
                      }]);
                    }
                    if (this.readyState === "open") {
                      b();
                    } else {
                      this.once("open", b);
                    }
                  }
                }, {
                  key: "write",
                  value: function (a) {
                    var b = this;
                    this.writable = false;
                    l.encodePayload(a, function (a) {
                      b.doWrite(a, function () {
                        b.writable = true;
                        b.emit("drain");
                      });
                    });
                  }
                }, {
                  key: "uri",
                  value: function () {
                    var a = this.query || {};
                    var b = this.opts.secure ? "https" : "http";
                    var c = "";
                    if (this.opts.timestampRequests !== false) {
                      a[this.opts.timestampParam] = m();
                    }
                    if (!(this.supportsBinary || a.sid)) {
                      a.b64 = 1;
                    }
                    a = k.encode(a);
                    if (this.opts.port && (b === "https" && +this.opts.port != 443 || b === "http" && +this.opts.port != 80)) {
                      c = ":" + this.opts.port;
                    }
                    if (a.length) {
                      a = "?" + a;
                    }
                    return b + "://" + (this.opts.hostname.indexOf(":") !== -1 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + c + this.opts.path + a;
                  }
                }, {
                  key: "name",
                  get: function () {
                    return "polling";
                  }
                }]) {
                  (function (a, b) {
                    for (var c = 0; c < b.length; c++) {
                      var d = b[c];
                      d.enumerable = d.enumerable || false;
                      d.configurable = true;
                      if ("value" in d) {
                        d.writable = true;
                      }
                      Object.defineProperty(a, d.key, d);
                    }
                  })(d.prototype, b);
                }
                return d;
              }(j);
              a.exports = n;
            }, function (a) {
              var b = Object.create(null);
              b.open = "0";
              b.close = "1";
              b.ping = "2";
              b.pong = "3";
              b.message = "4";
              b.upgrade = "5";
              b.noop = "6";
              var c = Object.create(null);
              Object.keys(b).forEach(function (a) {
                c[b[a]] = a;
              });
              a.exports = {
                PACKET_TYPES: b,
                PACKET_TYPES_REVERSE: c,
                ERROR_PACKET: {
                  type: "error",
                  data: "parser error"
                }
              };
            }, function (a) {
              var b;
              var c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
              var d = {};
              var e = 0;
              var f = 0;
              function g(a) {
                var b = "";
                do {
                  b = c[a % 64] + b;
                  a = Math.floor(a / 64);
                } while (a > 0);
                return b;
              }
              function h() {
                var a = g(+new Date());
                if (a !== b) {
                  e = 0;
                  return b = a;
                } else {
                  return a + "." + g(e++);
                }
              }
              for (; f < 64; f++) {
                d[c[f]] = f;
              }
              h.encode = g;
              h.decode = function (a) {
                var b = 0;
                for (f = 0; f < a.length; f++) {
                  b = b * 64 + d[a.charAt(f)];
                }
                return b;
              };
              a.exports = h;
            }, function (a) {
              a.exports.pick = function (a) {
                for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) {
                  c[d - 1] = arguments[d];
                }
                return c.reduce(function (b, c) {
                  b[c] = a[c];
                  return b;
                }, {});
              };
            }, function (a, b, c) {
              function d(a) {
                return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
                  return typeof a;
                } : function (a) {
                  if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                    return "symbol";
                  } else {
                    return typeof a;
                  }
                })(a);
              }
              function e(a, b) {
                var c;
                if (typeof Symbol == "undefined" || a[Symbol.iterator] == null) {
                  if (Array.isArray(a) || (c = function (a, b) {
                    if (a) {
                      if (typeof a == "string") {
                        return f(a, b);
                      }
                      var c = Object.prototype.toString.call(a).slice(8, -1);
                      if (c === "Object" && a.constructor) {
                        c = a.constructor.name;
                      }
                      if (c === "Map" || c === "Set") {
                        return Array.from(a);
                      } else if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
                        return f(a, b);
                      } else {
                        return undefined;
                      }
                    }
                  }(a)) || b) {
                    if (c) {
                      a = c;
                    }
                    var d = 0;
                    function b() {}
                    return {
                      s: b,
                      n: function () {
                        if (d >= a.length) {
                          return {
                            done: true
                          };
                        } else {
                          return {
                            done: false,
                            value: a[d++]
                          };
                        }
                      },
                      e: function (a) {
                        throw a;
                      },
                      f: b
                    };
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var e;
                var g = true;
                var h = false;
                return {
                  s: function () {
                    c = a[Symbol.iterator]();
                  },
                  n: function () {
                    var a = c.next();
                    g = a.done;
                    return a;
                  },
                  e: function (a) {
                    h = true;
                    e = a;
                  },
                  f: function () {
                    try {
                      if (!(g || c.return == null)) {
                        c.return();
                      }
                    } finally {
                      if (h) {
                        throw e;
                      }
                    }
                  }
                };
              }
              function f(a, b) {
                if (b == null || b > a.length) {
                  b = a.length;
                }
                for (var c = 0, d = Array(b); c < b; c++) {
                  d[c] = a[c];
                }
                return d;
              }
              function g(a, b, c) {
                return (g = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function (a, b, c) {
                  var d = function (a, b) {
                    for (; !Object.prototype.hasOwnProperty.call(a, b) && (a = k(a)) !== null;);
                    return a;
                  }(a, b);
                  if (d) {
                    var e = Object.getOwnPropertyDescriptor(d, b);
                    if (e.get) {
                      return e.get.call(c);
                    } else {
                      return e.value;
                    }
                  }
                })(a, b, c || a);
              }
              function h(a, b) {
                return (h = Object.setPrototypeOf || function (a, b) {
                  a.__proto__ = b;
                  return a;
                })(a, b);
              }
              function i(a) {
                var b = function () {
                  if (typeof Reflect == "undefined" || !Reflect.construct) {
                    return false;
                  }
                  if (Reflect.construct.sham) {
                    return false;
                  }
                  if (typeof Proxy == "function") {
                    return true;
                  }
                  try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                    return true;
                  } catch (a) {
                    return false;
                  }
                }();
                return function () {
                  var c;
                  var d = k(a);
                  if (b) {
                    var e = k(this).constructor;
                    c = Reflect.construct(d, arguments, e);
                  } else {
                    c = d.apply(this, arguments);
                  }
                  return j(this, c);
                };
              }
              function j(a, b) {
                if (!b || d(b) !== "object" && typeof b != "function") {
                  return function (a) {
                    if (a === undefined) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return a;
                  }(a);
                } else {
                  return b;
                }
              }
              function k(a) {
                return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function (a) {
                  return a.__proto__ || Object.getPrototypeOf(a);
                })(a);
              }
              Object.defineProperty(b, "__esModule", {
                value: true
              });
              b.Socket = undefined;
              var l = c(6);
              var m = c(0);
              var n = c(16);
              var o = c(17);
              var p = {
                connect: 1,
                connect_error: 1,
                disconnect: 1,
                disconnecting: 1,
                newListener: 1,
                removeListener: 1
              };
              var q = function (a) {
                (function (a, b) {
                  if (typeof b != "function" && b !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                      value: a,
                      writable: true,
                      configurable: true
                    }
                  });
                  if (b) {
                    h(a, b);
                  }
                })(d, a);
                var b;
                var c = i(d);
                function d(a, b, e) {
                  var f;
                  (function (a, b) {
                    if (!(a instanceof b)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  })(this, d);
                  (f = c.call(this)).ids = 0;
                  f.acks = {};
                  f.receiveBuffer = [];
                  f.sendBuffer = [];
                  f.flags = {};
                  f.io = a;
                  f.nsp = b;
                  f.ids = 0;
                  f.acks = {};
                  f.receiveBuffer = [];
                  f.sendBuffer = [];
                  f.connected = false;
                  f.disconnected = true;
                  f.flags = {};
                  if (e && e.auth) {
                    f.auth = e.auth;
                  }
                  if (f.io._autoConnect) {
                    f.open();
                  }
                  return f;
                }
                if (b = [{
                  key: "subEvents",
                  value: function () {
                    if (!this.subs) {
                      var a = this.io;
                      this.subs = [n.on(a, "open", o(this, "onopen")), n.on(a, "packet", o(this, "onpacket")), n.on(a, "close", o(this, "onclose"))];
                    }
                  }
                }, {
                  key: "connect",
                  value: function () {
                    if (!this.connected) {
                      this.subEvents();
                      if (!this.io._reconnecting) {
                        this.io.open();
                      }
                      if (this.io._readyState === "open") {
                        this.onopen();
                      }
                    }
                    return this;
                  }
                }, {
                  key: "open",
                  value: function () {
                    return this.connect();
                  }
                }, {
                  key: "send",
                  value: function () {
                    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) {
                      b[c] = arguments[c];
                    }
                    b.unshift("message");
                    this.emit.apply(this, b);
                    return this;
                  }
                }, {
                  key: "emit",
                  value: function (a) {
                    if (p.hasOwnProperty(a)) {
                      throw Error("\"" + a + "\" is a reserved event name");
                    }
                    for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) {
                      c[d - 1] = arguments[d];
                    }
                    c.unshift(a);
                    var e = {
                      type: l.PacketType.EVENT,
                      data: c,
                      options: {}
                    };
                    e.options.compress = this.flags.compress !== false;
                    if (typeof c[c.length - 1] == "function") {
                      this.acks[this.ids] = c.pop();
                      e.id = this.ids++;
                    }
                    var f = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                    if (!(this.flags.volatile && (!f || !this.connected))) {
                      if (this.connected) {
                        this.packet(e);
                      } else {
                        this.sendBuffer.push(e);
                      }
                    }
                    this.flags = {};
                    return this;
                  }
                }, {
                  key: "packet",
                  value: function (a) {
                    a.nsp = this.nsp;
                    this.io._packet(a);
                  }
                }, {
                  key: "onopen",
                  value: function () {
                    var a = this;
                    if (typeof this.auth == "function") {
                      this.auth(function (b) {
                        a.packet({
                          type: l.PacketType.CONNECT,
                          data: b
                        });
                      });
                    } else {
                      this.packet({
                        type: l.PacketType.CONNECT,
                        data: this.auth
                      });
                    }
                  }
                }, {
                  key: "onclose",
                  value: function (a) {
                    this.connected = false;
                    this.disconnected = true;
                    delete this.id;
                    g(k(d.prototype), "emit", this).call(this, "disconnect", a);
                  }
                }, {
                  key: "onpacket",
                  value: function (a) {
                    if (a.nsp === this.nsp) {
                      switch (a.type) {
                        case l.PacketType.CONNECT:
                          var b = a.data.sid;
                          this.onconnect(b);
                          break;
                        case l.PacketType.EVENT:
                        case l.PacketType.BINARY_EVENT:
                          this.onevent(a);
                          break;
                        case l.PacketType.ACK:
                        case l.PacketType.BINARY_ACK:
                          this.onack(a);
                          break;
                        case l.PacketType.DISCONNECT:
                          this.ondisconnect();
                          break;
                        case l.PacketType.CONNECT_ERROR:
                          var c = Error(a.data.message);
                          c.data = a.data.data;
                          g(k(d.prototype), "emit", this).call(this, "connect_error", c);
                      }
                    }
                  }
                }, {
                  key: "onevent",
                  value: function (a) {
                    var b = a.data || [];
                    if (a.id != null) {
                      b.push(this.ack(a.id));
                    }
                    if (this.connected) {
                      this.emitEvent(b);
                    } else {
                      this.receiveBuffer.push(b);
                    }
                  }
                }, {
                  key: "emitEvent",
                  value: function (a) {
                    if (this.W && this.W.length) {
                      var b;
                      var c = e(this.W.slice());
                      try {
                        for (c.s(); !(b = c.n()).done;) {
                          b.value.apply(this, a);
                        }
                      } catch (a) {
                        c.e(a);
                      } finally {
                        c.f();
                      }
                    }
                    g(k(d.prototype), "emit", this).apply(this, a);
                  }
                }, {
                  key: "ack",
                  value: function (a) {
                    var b = this;
                    var c = false;
                    return function () {
                      if (!c) {
                        c = true;
                        for (var d = arguments.length, e = Array(d), f = 0; f < d; f++) {
                          e[f] = arguments[f];
                        }
                        b.packet({
                          type: l.PacketType.ACK,
                          id: a,
                          data: e
                        });
                      }
                    };
                  }
                }, {
                  key: "onack",
                  value: function (a) {
                    var b = this.acks[a.id];
                    if (typeof b == "function") {
                      b.apply(this, a.data);
                      delete this.acks[a.id];
                    }
                  }
                }, {
                  key: "onconnect",
                  value: function (a) {
                    this.id = a;
                    this.connected = true;
                    this.disconnected = false;
                    g(k(d.prototype), "emit", this).call(this, "connect");
                    this.emitBuffered();
                  }
                }, {
                  key: "emitBuffered",
                  value: function () {
                    for (var a = 0; a < this.receiveBuffer.length; a++) {
                      this.emitEvent(this.receiveBuffer[a]);
                    }
                    this.receiveBuffer = [];
                    for (var b = 0; b < this.sendBuffer.length; b++) {
                      this.packet(this.sendBuffer[b]);
                    }
                    this.sendBuffer = [];
                  }
                }, {
                  key: "ondisconnect",
                  value: function () {
                    this.destroy();
                    this.onclose("io server disconnect");
                  }
                }, {
                  key: "destroy",
                  value: function () {
                    if (this.subs) {
                      for (var a = 0; a < this.subs.length; a++) {
                        this.subs[a].destroy();
                      }
                      this.subs = null;
                    }
                    this.io._destroy(this);
                  }
                }, {
                  key: "disconnect",
                  value: function () {
                    if (this.connected) {
                      this.packet({
                        type: l.PacketType.DISCONNECT
                      });
                    }
                    this.destroy();
                    if (this.connected) {
                      this.onclose("io client disconnect");
                    }
                    return this;
                  }
                }, {
                  key: "close",
                  value: function () {
                    return this.disconnect();
                  }
                }, {
                  key: "compress",
                  value: function (a) {
                    this.flags.compress = a;
                    return this;
                  }
                }, {
                  key: "onAny",
                  value: function (a) {
                    this.W = this.W || [];
                    this.W.push(a);
                    return this;
                  }
                }, {
                  key: "prependAny",
                  value: function (a) {
                    this.W = this.W || [];
                    this.W.unshift(a);
                    return this;
                  }
                }, {
                  key: "offAny",
                  value: function (a) {
                    if (!this.W) {
                      return this;
                    }
                    if (a) {
                      for (var b = this.W, c = 0; c < b.length; c++) {
                        if (a === b[c]) {
                          b.splice(c, 1);
                          return this;
                        }
                      }
                    } else {
                      this.W = [];
                    }
                    return this;
                  }
                }, {
                  key: "listenersAny",
                  value: function () {
                    return this.W || [];
                  }
                }, {
                  key: "volatile",
                  get: function () {
                    this.flags.volatile = true;
                    return this;
                  }
                }]) {
                  (function (a, b) {
                    for (var c = 0; c < b.length; c++) {
                      var d = b[c];
                      d.enumerable = d.enumerable || false;
                      d.configurable = true;
                      if ("value" in d) {
                        d.writable = true;
                      }
                      Object.defineProperty(a, d.key, d);
                    }
                  })(d.prototype, b);
                }
                return d;
              }(m);
              b.Socket = q;
            }, function (a, b) {
              function c(a) {
                return (c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
                  return typeof a;
                } : function (a) {
                  if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                    return "symbol";
                  } else {
                    return typeof a;
                  }
                })(a);
              }
              Object.defineProperty(b, "__esModule", {
                value: true
              });
              b.hasBinary = b.isBinary = undefined;
              var d = typeof ArrayBuffer == "function";
              var e = Object.prototype.toString;
              var f = typeof Blob == "function" || typeof Blob != "undefined" && e.call(Blob) === "[object BlobConstructor]";
              var g = typeof File == "function" || typeof File != "undefined" && e.call(File) === "[object FileConstructor]";
              function h(a) {
                return d && (a instanceof ArrayBuffer || function (a) {
                  if (typeof ArrayBuffer.isView == "function") {
                    return ArrayBuffer.isView(a);
                  } else {
                    return a.buffer instanceof ArrayBuffer;
                  }
                }(a)) || f && a instanceof Blob || g && a instanceof File;
              }
              b.isBinary = h;
              b.hasBinary = function d(a, b) {
                if (!a || c(a) !== "object") {
                  return false;
                }
                if (Array.isArray(a)) {
                  for (var e = 0, f = a.length; e < f; e++) {
                    if (d(a[e])) {
                      return true;
                    }
                  }
                  return false;
                }
                if (h(a)) {
                  return true;
                }
                if (a.toJSON && typeof a.toJSON == "function" && arguments.length === 1) {
                  return d(a.toJSON(), true);
                }
                for (var g in a) {
                  if (Object.prototype.hasOwnProperty.call(a, g) && d(a[g])) {
                    return true;
                  }
                }
                return false;
              };
            }, function (a, b) {
              Object.defineProperty(b, "__esModule", {
                value: true
              });
              b.on = undefined;
              b.on = function (a, b, c) {
                a.on(b, c);
                return {
                  destroy: function () {
                    a.removeListener(b, c);
                  }
                };
              };
            }, function (a) {
              var b = [].slice;
              a.exports = function (a, c) {
                if (typeof c == "string") {
                  c = a[c];
                }
                if (typeof c != "function") {
                  throw Error("bind() requires a function");
                }
                var d = b.call(arguments, 2);
                return function () {
                  return c.apply(a, d.concat(b.call(arguments)));
                };
              };
            }, function (a, b, c) {
              function d(a) {
                return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
                  return typeof a;
                } : function (a) {
                  if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                    return "symbol";
                  } else {
                    return typeof a;
                  }
                })(a);
              }
              Object.defineProperty(b, "__esModule", {
                value: true
              });
              b.Socket = b.io = b.Manager = b.protocol = undefined;
              var e = c(19);
              var f = c(8);
              var g = c(14);
              Object.defineProperty(b, "Socket", {
                enumerable: true,
                get: function () {
                  return g.Socket;
                }
              });
              a.exports = b = i;
              var h = b.managers = {};
              function i(a, b) {
                if (d(a) === "object") {
                  b = a;
                  a = undefined;
                }
                b = b || {};
                var c;
                var g = e.url(a);
                var i = g.source;
                var j = g.id;
                var k = g.path;
                var l = h[j] && k in h[j].nsps;
                if (b.forceNew || b["force new connection"] || b.multiplex === false || l) {
                  c = new f.Manager(i, b);
                } else {
                  if (!h[j]) {
                    h[j] = new f.Manager(i, b);
                  }
                  c = h[j];
                }
                if (g.query && !b.query) {
                  b.query = g.query;
                }
                return c.socket(g.path, b);
              }
              b.io = i;
              var j = c(6);
              Object.defineProperty(b, "protocol", {
                enumerable: true,
                get: function () {
                  return j.protocol;
                }
              });
              b.connect = i;
              var k = c(8);
              Object.defineProperty(b, "Manager", {
                enumerable: true,
                get: function () {
                  return k.Manager;
                }
              });
            }, function (a, b, c) {
              Object.defineProperty(b, "__esModule", {
                value: true
              });
              b.url = undefined;
              var d = c(7);
              b.url = function (a, b) {
                var c = a;
                b = b || typeof location != "undefined" && location;
                if (a == null) {
                  a = b.protocol + "//" + b.host;
                }
                if (typeof a == "string") {
                  if (a.charAt(0) === "/") {
                    a = a.charAt(1) === "/" ? b.protocol + a : b.host + a;
                  }
                  if (!/^(https?|wss?):\/\//.test(a)) {
                    a = b !== undefined ? b.protocol + "//" + a : "https://" + a;
                  }
                  c = d(a);
                }
                if (!c.port) {
                  if (/^(http|ws)$/.test(c.protocol)) {
                    c.port = "80";
                  } else if (/^(http|ws)s$/.test(c.protocol)) {
                    c.port = "443";
                  }
                }
                c.path = c.path || "/";
                var e = c.host.indexOf(":") !== -1 ? "[" + c.host + "]" : c.host;
                c.id = c.protocol + "://" + e + ":" + c.port;
                c.href = c.protocol + "://" + e + (b && b.port === c.port ? "" : ":" + c.port);
                return c;
              };
            }, function (a, b, c) {
              var d = c(21);
              a.exports = function (a, b) {
                return new d(a, b);
              };
              a.exports.Socket = d;
              a.exports.protocol = d.protocol;
              a.exports.Transport = c(4);
              a.exports.transports = c(9);
              a.exports.parser = c(1);
            }, function (a, b, c) {
              function d() {
                return (d = Object.assign || function (a) {
                  for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b];
                    for (var d in c) {
                      if (Object.prototype.hasOwnProperty.call(c, d)) {
                        a[d] = c[d];
                      }
                    }
                  }
                  return a;
                }).apply(this, arguments);
              }
              function e(a) {
                return (e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
                  return typeof a;
                } : function (a) {
                  if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                    return "symbol";
                  } else {
                    return typeof a;
                  }
                })(a);
              }
              function f(a, b) {
                if (!(a instanceof b)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              function g(a, b) {
                return (g = Object.setPrototypeOf || function (a, b) {
                  a.__proto__ = b;
                  return a;
                })(a, b);
              }
              function h(a) {
                var b = function () {
                  if (typeof Reflect == "undefined" || !Reflect.construct) {
                    return false;
                  }
                  if (Reflect.construct.sham) {
                    return false;
                  }
                  if (typeof Proxy == "function") {
                    return true;
                  }
                  try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                    return true;
                  } catch (a) {
                    return false;
                  }
                }();
                return function () {
                  var c;
                  var d = j(a);
                  if (b) {
                    var e = j(this).constructor;
                    c = Reflect.construct(d, arguments, e);
                  } else {
                    c = d.apply(this, arguments);
                  }
                  return i(this, c);
                };
              }
              function i(a, b) {
                if (!b || e(b) !== "object" && typeof b != "function") {
                  return function (a) {
                    if (a === undefined) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return a;
                  }(a);
                } else {
                  return b;
                }
              }
              function j(a) {
                return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function (a) {
                  return a.__proto__ || Object.getPrototypeOf(a);
                })(a);
              }
              var k = c(9);
              var l = c(0);
              var m = c(1);
              var n = c(7);
              var o = c(5);
              var p = function (a) {
                (function (a, b) {
                  if (typeof b != "function" && b !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                      value: a,
                      writable: true,
                      configurable: true
                    }
                  });
                  if (b) {
                    g(a, b);
                  }
                })(i, a);
                var b;
                var c = h(i);
                function i(a) {
                  var b;
                  var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  f(this, i);
                  b = c.call(this);
                  if (a && e(a) === "object") {
                    g = a;
                    a = null;
                  }
                  if (a) {
                    a = n(a);
                    g.hostname = a.host;
                    g.secure = a.protocol === "https" || a.protocol === "wss";
                    g.port = a.port;
                    if (a.query) {
                      g.query = a.query;
                    }
                  } else if (g.host) {
                    g.hostname = n(g.host).host;
                  }
                  b.secure = g.secure != null ? g.secure : typeof location != "undefined" && location.protocol === "https:";
                  if (g.hostname && !g.port) {
                    g.port = b.secure ? "443" : "80";
                  }
                  b.hostname = g.hostname || (typeof location != "undefined" ? location.hostname : "localhost");
                  b.port = g.port || (typeof location != "undefined" && location.port ? location.port : b.secure ? 443 : 80);
                  b.transports = g.transports || ["polling", "websocket"];
                  b.readyState = "";
                  b.writeBuffer = [];
                  b.prevBufferLen = 0;
                  b.opts = d({
                    path: "/engine.io",
                    agent: false,
                    withCredentials: false,
                    upgrade: true,
                    jsonp: true,
                    timestampParam: "t",
                    policyPort: 843,
                    rememberUpgrade: false,
                    rejectUnauthorized: true,
                    perMessageDeflate: {
                      threshold: 1024
                    },
                    transportOptions: {}
                  }, g);
                  b.opts.path = b.opts.path.replace(/\/$/, "") + "/";
                  if (typeof b.opts.query == "string") {
                    b.opts.query = o.decode(b.opts.query);
                  }
                  b.id = null;
                  b.upgrades = null;
                  b.pingInterval = null;
                  b.pingTimeout = null;
                  b.pingTimeoutTimer = null;
                  b.open();
                  return b;
                }
                if (b = [{
                  key: "createTransport",
                  value: function (a) {
                    var b = function (a) {
                      var b = {};
                      for (var c in a) {
                        if (a.hasOwnProperty(c)) {
                          b[c] = a[c];
                        }
                      }
                      return b;
                    }(this.opts.query);
                    b.EIO = m.protocol;
                    b.transport = a;
                    if (this.id) {
                      b.sid = this.id;
                    }
                    var c = d({}, this.opts.transportOptions[a], this.opts, {
                      query: b,
                      socket: this,
                      hostname: this.hostname,
                      secure: this.secure,
                      port: this.port
                    });
                    return new k[a](c);
                  }
                }, {
                  key: "open",
                  value: function () {
                    var a;
                    if (this.opts.rememberUpgrade && i.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
                      a = "websocket";
                    } else {
                      if (this.transports.length === 0) {
                        var b = this;
                        // TOLOOK
                        setTimeout(function () {
                          b.emit("error", "No transports available");
                        }, 0);
                        return;
                      }
                      a = this.transports[0];
                    }
                    this.readyState = "opening";
                    try {
                      a = this.createTransport(a);
                    } catch (a) {
                      this.transports.shift();
                      this.open();
                      return;
                    }
                    a.open();
                    this.setTransport(a);
                  }
                }, {
                  key: "setTransport",
                  value: function (a) {
                    var b = this;
                    if (this.transport) {
                      this.transport.removeAllListeners();
                    }
                    this.transport = a;
                    a.on("drain", function () {
                      b.onDrain();
                    }).on("packet", function (a) {
                      b.onPacket(a);
                    }).on("error", function (a) {
                      b.onError(a);
                    }).on("close", function () {
                      b.onClose("transport close");
                    });
                  }
                }, {
                  key: "probe",
                  value: function (a) {
                    var b = this.createTransport(a, {
                      probe: 1
                    });
                    var c = false;
                    var d = this;
                    function e() {
                      if (d.onlyBinaryUpgrades) {
                        var a = !this.supportsBinary && d.transport.supportsBinary;
                        c = c || a;
                      }
                      if (!c) {
                        b.send([{
                          type: "ping",
                          data: "probe"
                        }]);
                        b.once("packet", function (a) {
                          if (!c) {
                            if (a.type === "pong" && a.data === "probe") {
                              d.upgrading = true;
                              d.emit("upgrading", b);
                              if (!b) {
                                return;
                              }
                              i.priorWebsocketSuccess = b.name === "websocket";
                              d.transport.pause(function () {
                                if (!c) {
                                  if (d.readyState !== "closed") {
                                    l();
                                    d.setTransport(b);
                                    b.send([{
                                      type: "upgrade"
                                    }]);
                                    d.emit("upgrade", b);
                                    b = null;
                                    d.upgrading = false;
                                    d.flush();
                                  }
                                }
                              });
                            } else {
                              var e = Error("probe error");
                              e.transport = b.name;
                              d.emit("upgradeError", e);
                            }
                          }
                        });
                      }
                    }
                    function f() {
                      if (!c) {
                        c = true;
                        l();
                        b.close();
                        b = null;
                      }
                    }
                    function g(a) {
                      var c = Error("probe error: " + a);
                      c.transport = b.name;
                      f();
                      d.emit("upgradeError", c);
                    }
                    function h() {
                      g("transport closed");
                    }
                    function j() {
                      g("socket closed");
                    }
                    function k(a) {
                      if (b && a.name !== b.name) {
                        f();
                      }
                    }
                    function l() {
                      b.removeListener("open", e);
                      b.removeListener("error", g);
                      b.removeListener("close", h);
                      d.removeListener("close", j);
                      d.removeListener("upgrading", k);
                    }
                    i.priorWebsocketSuccess = false;
                    b.once("open", e);
                    b.once("error", g);
                    b.once("close", h);
                    this.once("close", j);
                    this.once("upgrading", k);
                    b.open();
                  }
                }, {
                  key: "onOpen",
                  value: function () {
                    this.readyState = "open";
                    i.priorWebsocketSuccess = this.transport.name === "websocket";
                    this.emit("open");
                    this.flush();
                    if (this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
                      for (var a = 0, b = this.upgrades.length; a < b; a++) {
                        this.probe(this.upgrades[a]);
                      }
                    }
                  }
                }, {
                  key: "onPacket",
                  value: function (a) {
                    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
                      this.emit("packet", a);
                      this.emit("heartbeat");
                      switch (a.type) {
                        case "open":
                          this.onHandshake(JSON.parse(a.data));
                          break;
                        case "ping":
                          this.resetPingTimeout();
                          this.sendPacket("pong");
                          this.emit("pong");
                          break;
                        case "error":
                          var b = Error("server error");
                          b.code = a.data;
                          this.onError(b);
                          break;
                        case "message":
                          this.emit("data", a.data);
                          this.emit("message", a.data);
                      }
                    }
                  }
                }, {
                  key: "onHandshake",
                  value: function (a) {
                    this.emit("handshake", a);
                    this.id = a.sid;
                    this.transport.query.sid = a.sid;
                    this.upgrades = this.filterUpgrades(a.upgrades);
                    this.pingInterval = a.pingInterval;
                    this.pingTimeout = a.pingTimeout;
                    this.onOpen();
                    if (this.readyState !== "closed") {
                      this.resetPingTimeout();
                    }
                  }
                }, {
                  key: "resetPingTimeout",
                  value: function () {
                    var a = this;
                    clearTimeout(this.pingTimeoutTimer);
                    this.pingTimeoutTimer = // TOLOOK
                    setTimeout(function () {
                      a.onClose("ping timeout");
                    }, this.pingInterval + this.pingTimeout);
                  }
                }, {
                  key: "onDrain",
                  value: function () {
                    this.writeBuffer.splice(0, this.prevBufferLen);
                    this.prevBufferLen = 0;
                    if (this.writeBuffer.length === 0) {
                      this.emit("drain");
                    } else {
                      this.flush();
                    }
                  }
                }, {
                  key: "flush",
                  value: function () {
                    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                      this.transport.send(this.writeBuffer);
                      this.prevBufferLen = this.writeBuffer.length;
                      this.emit("flush");
                    }
                  }
                }, {
                  key: "write",
                  value: function (a, b, c) {
                    this.sendPacket("message", a, b, c);
                    return this;
                  }
                }, {
                  key: "send",
                  value: function (a, b, c) {
                    this.sendPacket("message", a, b, c);
                    return this;
                  }
                }, {
                  key: "sendPacket",
                  value: function (a, b, c, d) {
                    if (typeof b == "function") {
                      d = b;
                      b = undefined;
                    }
                    if (typeof c == "function") {
                      d = c;
                      c = null;
                    }
                    if (this.readyState !== "closing" && this.readyState !== "closed") {
                      (c = c || {}).compress = c.compress !== false;
                      var e = {
                        type: a,
                        data: b,
                        options: c
                      };
                      this.emit("packetCreate", e);
                      this.writeBuffer.push(e);
                      if (d) {
                        this.once("flush", d);
                      }
                      this.flush();
                    }
                  }
                }, {
                  key: "close",
                  value: function () {
                    var a = this;
                    function b() {
                      a.onClose("forced close");
                      a.transport.close();
                    }
                    function c() {
                      a.removeListener("upgrade", c);
                      a.removeListener("upgradeError", c);
                      b();
                    }
                    function d() {
                      a.once("upgrade", c);
                      a.once("upgradeError", c);
                    }
                    if (!(this.readyState !== "opening" && this.readyState !== "open")) {
                      this.readyState = "closing";
                      if (this.writeBuffer.length) {
                        this.once("drain", function () {
                          if (this.upgrading) {
                            d();
                          } else {
                            b();
                          }
                        });
                      } else if (this.upgrading) {
                        d();
                      } else {
                        b();
                      }
                    }
                    return this;
                  }
                }, {
                  key: "onError",
                  value: function (a) {
                    i.priorWebsocketSuccess = false;
                    this.emit("error", a);
                    this.onClose("transport error", a);
                  }
                }, {
                  key: "onClose",
                  value: function (a, b) {
                    if (!(this.readyState !== "opening" && this.readyState !== "open" && this.readyState !== "closing")) {
                      clearTimeout(this.pingIntervalTimer);
                      clearTimeout(this.pingTimeoutTimer);
                      this.transport.removeAllListeners("close");
                      this.transport.close();
                      this.transport.removeAllListeners();
                      this.readyState = "closed";
                      this.id = null;
                      this.emit("close", a, b);
                      this.writeBuffer = [];
                      this.prevBufferLen = 0;
                    }
                  }
                }, {
                  key: "filterUpgrades",
                  value: function (a) {
                    for (var b = [], c = 0, d = a.length; c < d; c++) {
                      if (~this.transports.indexOf(a[c])) {
                        b.push(a[c]);
                      }
                    }
                    return b;
                  }
                }]) {
                  (function (a, b) {
                    for (var c = 0; c < b.length; c++) {
                      var d = b[c];
                      d.enumerable = d.enumerable || false;
                      d.configurable = true;
                      if ("value" in d) {
                        d.writable = true;
                      }
                      Object.defineProperty(a, d.key, d);
                    }
                  })(i.prototype, b);
                }
                return i;
              }(l);
              p.priorWebsocketSuccess = false;
              p.protocol = m.protocol;
              a.exports = p;
            }, function (a) {
              try {
                a.exports = typeof XMLHttpRequest != "undefined" && "withCredentials" in new XMLHttpRequest();
              } catch (b) {
                a.exports = false;
              }
            }, function (a, b, c) {
              function d(a) {
                return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
                  return typeof a;
                } : function (a) {
                  if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                    return "symbol";
                  } else {
                    return typeof a;
                  }
                })(a);
              }
              function e() {
                return (e = Object.assign || function (a) {
                  for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b];
                    for (var d in c) {
                      if (Object.prototype.hasOwnProperty.call(c, d)) {
                        a[d] = c[d];
                      }
                    }
                  }
                  return a;
                }).apply(this, arguments);
              }
              function f(a, b) {
                if (!(a instanceof b)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              function g(a, b) {
                if (b) {
                  (function (a, b) {
                    for (var c = 0; c < b.length; c++) {
                      var d = b[c];
                      d.enumerable = d.enumerable || false;
                      d.configurable = true;
                      if ("value" in d) {
                        d.writable = true;
                      }
                      Object.defineProperty(a, d.key, d);
                    }
                  })(a.prototype, b);
                }
                return a;
              }
              function h(a, b) {
                if (typeof b != "function" && b !== null) {
                  throw new TypeError("Super expression must either be null or a function");
                }
                a.prototype = Object.create(b && b.prototype, {
                  constructor: {
                    value: a,
                    writable: true,
                    configurable: true
                  }
                });
                if (b) {
                  i(a, b);
                }
              }
              function i(a, b) {
                return (i = Object.setPrototypeOf || function (a, b) {
                  a.__proto__ = b;
                  return a;
                })(a, b);
              }
              function j(a) {
                var b = function () {
                  if (typeof Reflect == "undefined" || !Reflect.construct) {
                    return false;
                  }
                  if (Reflect.construct.sham) {
                    return false;
                  }
                  if (typeof Proxy == "function") {
                    return true;
                  }
                  try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                    return true;
                  } catch (a) {
                    return false;
                  }
                }();
                return function () {
                  var c;
                  var d = l(a);
                  if (b) {
                    var e = l(this).constructor;
                    c = Reflect.construct(d, arguments, e);
                  } else {
                    c = d.apply(this, arguments);
                  }
                  return k(this, c);
                };
              }
              function k(a, b) {
                if (!b || d(b) !== "object" && typeof b != "function") {
                  return function (a) {
                    if (a === undefined) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return a;
                  }(a);
                } else {
                  return b;
                }
              }
              function l(a) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (a) {
                  return a.__proto__ || Object.getPrototypeOf(a);
                })(a);
              }
              var m = c(3);
              var n = c(10);
              var o = c(0);
              var p = c(13).pick;
              var q = c(2);
              function r() {}
              var s = new (c(3))({
                xdomain: false
              }).responseType != null;
              var t = function (a) {
                h(c, a);
                var b = j(c);
                function c(a) {
                  var d;
                  f(this, c);
                  d = b.call(this, a);
                  if (typeof location != "undefined") {
                    var e = location.protocol === "https:";
                    var g = location.port;
                    if (!g) {
                      g = e ? 443 : 80;
                    }
                    d.xd = typeof location != "undefined" && a.hostname !== location.hostname || g !== a.port;
                    d.xs = a.secure !== e;
                  }
                  var h = a && a.forceBase64;
                  d.supportsBinary = s && !h;
                  return d;
                }
                g(c, [{
                  key: "request",
                  value: function () {
                    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    e(a, {
                      xd: this.xd,
                      xs: this.xs
                    }, this.opts);
                    return new u(this.uri(), a);
                  }
                }, {
                  key: "doWrite",
                  value: function (a, b) {
                    var c = this.request({
                      method: "POST",
                      data: a
                    });
                    var d = this;
                    c.on("success", b);
                    c.on("error", function (a) {
                      d.onError("xhr post error", a);
                    });
                  }
                }, {
                  key: "doPoll",
                  value: function () {
                    var a = this.request();
                    var b = this;
                    a.on("data", function (a) {
                      b.onData(a);
                    });
                    a.on("error", function (a) {
                      b.onError("xhr poll error", a);
                    });
                    this.pollXhr = a;
                  }
                }]);
                return c;
              }(n);
              var u = function (a) {
                h(c, a);
                var b = j(c);
                function c(a, d) {
                  var e;
                  f(this, c);
                  (e = b.call(this)).opts = d;
                  e.method = d.method || "GET";
                  e.uri = a;
                  e.async = d.async !== false;
                  e.data = d.data !== undefined ? d.data : null;
                  e.create();
                  return e;
                }
                g(c, [{
                  key: "create",
                  value: function () {
                    var a = p(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized");
                    a.xdomain = !!this.opts.xd;
                    a.xscheme = !!this.opts.xs;
                    var b = this.xhr = new m(a);
                    var d = this;
                    try {
                      b.open(this.method, this.uri, this.async);
                      try {
                        if (this.opts.extraHeaders) {
                          if (b.setDisableHeaderCheck) {
                            b.setDisableHeaderCheck(true);
                          }
                          for (var e in this.opts.extraHeaders) {
                            if (this.opts.extraHeaders.hasOwnProperty(e)) {
                              b.setRequestHeader(e, this.opts.extraHeaders[e]);
                            }
                          }
                        }
                      } catch (a) {}
                      if (this.method === "POST") {
                        try {
                          b.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                        } catch (a) {}
                      }
                      try {
                        b.setRequestHeader("Accept", "*/*");
                      } catch (a) {}
                      if ("withCredentials" in b) {
                        b.withCredentials = this.opts.withCredentials;
                      }
                      if (this.opts.requestTimeout) {
                        b.timeout = this.opts.requestTimeout;
                      }
                      if (this.hasXDR()) {
                        b.onload = function () {
                          d.onLoad();
                        };
                        b.onerror = function () {
                          d.onError(b.responseText);
                        };
                      } else {
                        b.onreadystatechange = function () {
                          if (b.readyState === 4) {
                            if (b.status === 200 || b.status === 1223) {
                              d.onLoad();
                            } else {
                              // TOLOOK
                              setTimeout(function () {
                                d.onError(typeof b.status == "number" ? b.status : 0);
                              }, 0);
                            }
                          }
                        };
                      }
                      b.send(this.data);
                    } catch (a) {
                      // TOLOOK
                      setTimeout(function () {
                        d.onError(a);
                      }, 0);
                      return;
                    }
                    if (typeof document != "undefined") {
                      this.index = c.requestsCount++;
                      c.requests[this.index] = this;
                    }
                  }
                }, {
                  key: "onSuccess",
                  value: function () {
                    this.emit("success");
                    this.cleanup();
                  }
                }, {
                  key: "onData",
                  value: function (a) {
                    this.emit("data", a);
                    this.onSuccess();
                  }
                }, {
                  key: "onError",
                  value: function (a) {
                    this.emit("error", a);
                    this.cleanup(true);
                  }
                }, {
                  key: "cleanup",
                  value: function (a) {
                    if (this.xhr !== undefined && this.xhr !== null) {
                      if (this.hasXDR()) {
                        this.xhr.onload = this.xhr.onerror = r;
                      } else {
                        this.xhr.onreadystatechange = r;
                      }
                      if (a) {
                        try {
                          this.xhr.abort();
                        } catch (a) {}
                      }
                      if (typeof document != "undefined") {
                        delete c.requests[this.index];
                      }
                      this.xhr = null;
                    }
                  }
                }, {
                  key: "onLoad",
                  value: function () {
                    var a = this.xhr.responseText;
                    if (a !== null) {
                      this.onData(a);
                    }
                  }
                }, {
                  key: "hasXDR",
                  value: function () {
                    return typeof XDomainRequest != "undefined" && !this.xs && this.enablesXDR;
                  }
                }, {
                  key: "abort",
                  value: function () {
                    this.cleanup();
                  }
                }]);
                return c;
              }(o);
              function v() {
                for (var a in u.requests) {
                  if (u.requests.hasOwnProperty(a)) {
                    u.requests[a].abort();
                  }
                }
              }
              u.requestsCount = 0;
              u.requests = {};
              if (typeof document != "undefined") {
                if (typeof attachEvent == "function") {
                  attachEvent("onunload", v);
                } else if (typeof addEventListener == "function") {
                  addEventListener("onpagehide" in q ? "pagehide" : "unload", v, false);
                }
              }
              a.exports = t;
              a.exports.Request = u;
            }, function (a, b, c) {
              var d = c(11).PACKET_TYPES;
              var e = typeof Blob == "function" || typeof Blob != "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
              var f = typeof ArrayBuffer == "function";
              function g(a, b) {
                var c = new FileReader();
                c.onload = function () {
                  var a = c.result.split(",")[1];
                  b("b" + a);
                };
                return c.readAsDataURL(a);
              }
              a.exports = function (a, b, c) {
                var h;
                var i = a.type;
                var j = a.data;
                if (e && j instanceof Blob) {
                  if (b) {
                    return c(j);
                  } else {
                    return g(j, c);
                  }
                } else if (f && (j instanceof ArrayBuffer || (h = j, typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(h) : h && h.buffer instanceof ArrayBuffer))) {
                  if (b) {
                    return c(j instanceof ArrayBuffer ? j : j.buffer);
                  } else {
                    return g(new Blob([j]), c);
                  }
                } else {
                  return c(d[i] + (j || ""));
                }
              };
            }, function (a, b, c) {
              var d;
              var e = c(11);
              var f = e.PACKET_TYPES_REVERSE;
              var g = e.ERROR_PACKET;
              if (typeof ArrayBuffer == "function") {
                d = c(26);
              }
              function h(a, b) {
                if (d) {
                  var c = d.decode(a);
                  return i(c, b);
                }
                return {
                  base64: true,
                  data: a
                };
              }
              function i(a, b) {
                if (b === "blob" && a instanceof ArrayBuffer) {
                  return new Blob([a]);
                } else {
                  return a;
                }
              }
              a.exports = function (a, b) {
                if (typeof a != "string") {
                  return {
                    type: "message",
                    data: i(a, b)
                  };
                }
                var c = a.charAt(0);
                if (c === "b") {
                  return {
                    type: "message",
                    data: h(a.substring(1), b)
                  };
                } else if (f[c]) {
                  if (a.length > 1) {
                    return {
                      type: f[c],
                      data: a.substring(1)
                    };
                  } else {
                    return {
                      type: f[c]
                    };
                  }
                } else {
                  return g;
                }
              };
            }, function (a, b) {
              (function () {
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = new Uint8Array(256), d = 0; d < 64; d++) {
                  c[a.charCodeAt(d)] = d;
                }
                b.encode = function (b) {
                  var c;
                  var d = new Uint8Array(b);
                  var e = d.length;
                  var f = "";
                  for (c = 0; c < e; c += 3) {
                    f += a[d[c] >> 2];
                    f += a[(d[c] & 3) << 4 | d[c + 1] >> 4];
                    f += a[(d[c + 1] & 15) << 2 | d[c + 2] >> 6];
                    f += a[d[c + 2] & 63];
                  }
                  if (e % 3 == 2) {
                    f = f.substring(0, f.length - 1) + "=";
                  } else if (e % 3 == 1) {
                    f = f.substring(0, f.length - 2) + "==";
                  }
                  return f;
                };
                b.decode = function (a) {
                  var b;
                  var d;
                  var e;
                  var f;
                  var g;
                  var h = a.length * 0.75;
                  var i = a.length;
                  var j = 0;
                  if (a[a.length - 1] === "=") {
                    h--;
                    if (a[a.length - 2] === "=") {
                      h--;
                    }
                  }
                  var k = new ArrayBuffer(h);
                  var l = new Uint8Array(k);
                  for (b = 0; b < i; b += 4) {
                    d = c[a.charCodeAt(b)];
                    e = c[a.charCodeAt(b + 1)];
                    f = c[a.charCodeAt(b + 2)];
                    g = c[a.charCodeAt(b + 3)];
                    l[j++] = d << 2 | e >> 4;
                    l[j++] = (e & 15) << 4 | f >> 2;
                    l[j++] = (f & 3) << 6 | g & 63;
                  }
                  return k;
                };
              })();
            }, function (a, b, c) {
              function d(a) {
                return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
                  return typeof a;
                } : function (a) {
                  if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                    return "symbol";
                  } else {
                    return typeof a;
                  }
                })(a);
              }
              function e(a, b, c) {
                return (e = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function (a, b, c) {
                  var d = function (a, b) {
                    for (; !Object.prototype.hasOwnProperty.call(a, b) && (a = j(a)) !== null;);
                    return a;
                  }(a, b);
                  if (d) {
                    var e = Object.getOwnPropertyDescriptor(d, b);
                    if (e.get) {
                      return e.get.call(c);
                    } else {
                      return e.value;
                    }
                  }
                })(a, b, c || a);
              }
              function f(a, b) {
                return (f = Object.setPrototypeOf || function (a, b) {
                  a.__proto__ = b;
                  return a;
                })(a, b);
              }
              function g(a) {
                var b = function () {
                  if (typeof Reflect == "undefined" || !Reflect.construct) {
                    return false;
                  }
                  if (Reflect.construct.sham) {
                    return false;
                  }
                  if (typeof Proxy == "function") {
                    return true;
                  }
                  try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                    return true;
                  } catch (a) {
                    return false;
                  }
                }();
                return function () {
                  var c;
                  var d = j(a);
                  if (b) {
                    var e = j(this).constructor;
                    c = Reflect.construct(d, arguments, e);
                  } else {
                    c = d.apply(this, arguments);
                  }
                  return h(this, c);
                };
              }
              function h(a, b) {
                if (!b || d(b) !== "object" && typeof b != "function") {
                  return i(a);
                } else {
                  return b;
                }
              }
              function i(a) {
                if (a === undefined) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return a;
              }
              function j(a) {
                return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function (a) {
                  return a.__proto__ || Object.getPrototypeOf(a);
                })(a);
              }
              var k;
              var l = c(10);
              var m = c(2);
              var n = /\n/g;
              var o = /\\n/g;
              function p() {}
              var q = function (a) {
                (function (a, b) {
                  if (typeof b != "function" && b !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                      value: a,
                      writable: true,
                      configurable: true
                    }
                  });
                  if (b) {
                    f(a, b);
                  }
                })(d, a);
                var b;
                var c = g(d);
                function d(a) {
                  var b;
                  (function (a, b) {
                    if (!(a instanceof b)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  })(this, d);
                  (b = c.call(this, a)).query = b.query || {};
                  if (!k) {
                    k = m.___eio = m.___eio || [];
                  }
                  b.index = k.length;
                  var e = i(b);
                  k.push(function (a) {
                    e.onData(a);
                  });
                  b.query.j = b.index;
                  if (typeof addEventListener == "function") {
                    addEventListener("beforeunload", function () {
                      if (e.script) {
                        e.script.onerror = p;
                      }
                    }, false);
                  }
                  return b;
                }
                if (b = [{
                  key: "doClose",
                  value: function () {
                    if (this.script) {
                      this.script.parentNode.removeChild(this.script);
                      this.script = null;
                    }
                    if (this.form) {
                      this.form.parentNode.removeChild(this.form);
                      this.form = null;
                      this.iframe = null;
                    }
                    e(j(d.prototype), "doClose", this).call(this);
                  }
                }, {
                  key: "doPoll",
                  value: function () {
                    var a = this;
                    var b = document.createElement("script");
                    if (this.script) {
                      this.script.parentNode.removeChild(this.script);
                      this.script = null;
                    }
                    b.async = true;
                    b.src = this.uri();
                    b.onerror = function (b) {
                      a.onError("jsonp poll error", b);
                    };
                    var c = document.getElementsByTagName("script")[0];
                    if (c) {
                      c.parentNode.insertBefore(b, c);
                    } else {
                      (document.head || document.body).appendChild(b);
                    }
                    this.script = b;
                    if (typeof navigator != "undefined" && /gecko/i.test(navigator.userAgent)) {
                      // TOLOOK
                      setTimeout(function () {
                        var a = document.createElement("iframe");
                        document.body.appendChild(a);
                        document.body.removeChild(a);
                      }, 100);
                    }
                  }
                }, {
                  key: "doWrite",
                  value: function (a, b) {
                    var c;
                    var d = this;
                    if (!this.form) {
                      var e = document.createElement("form");
                      var f = document.createElement("textarea");
                      var g = this.iframeId = "eio_iframe_" + this.index;
                      e.className = "socketio";
                      e.style.position = "absolute";
                      e.style.top = "-1000px";
                      e.style.left = "-1000px";
                      e.target = g;
                      e.method = "POST";
                      e.setAttribute("accept-charset", "utf-8");
                      f.name = "d";
                      e.appendChild(f);
                      document.body.appendChild(e);
                      this.form = e;
                      this.area = f;
                    }
                    function h() {
                      i();
                      b();
                    }
                    function i() {
                      if (d.iframe) {
                        try {
                          d.form.removeChild(d.iframe);
                        } catch (a) {
                          d.onError("jsonp polling iframe removal error", a);
                        }
                      }
                      try {
                        var a = "<iframe src=\"javascript:0\" name=\"" + d.iframeId + "\">";
                        c = document.createElement(a);
                      } catch (a) {
                        (c = document.createElement("iframe")).name = d.iframeId;
                        c.src = "javascript:0";
                      }
                      c.id = d.iframeId;
                      d.form.appendChild(c);
                      d.iframe = c;
                    }
                    this.form.action = this.uri();
                    i();
                    a = a.replace(o, "\\\n");
                    this.area.value = a.replace(n, "\\n");
                    try {
                      this.form.submit();
                    } catch (a) {}
                    if (this.iframe.attachEvent) {
                      this.iframe.onreadystatechange = function () {
                        if (d.iframe.readyState === "complete") {
                          h();
                        }
                      };
                    } else {
                      this.iframe.onload = h;
                    }
                  }
                }, {
                  key: "supportsBinary",
                  get: function () {
                    return false;
                  }
                }]) {
                  (function (a, b) {
                    for (var c = 0; c < b.length; c++) {
                      var d = b[c];
                      d.enumerable = d.enumerable || false;
                      d.configurable = true;
                      if ("value" in d) {
                        d.writable = true;
                      }
                      Object.defineProperty(a, d.key, d);
                    }
                  })(d.prototype, b);
                }
                return d;
              }(l);
              a.exports = q;
            }, function (a, b, c) {
              function d(a) {
                return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
                  return typeof a;
                } : function (a) {
                  if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                    return "symbol";
                  } else {
                    return typeof a;
                  }
                })(a);
              }
              function e(a, b) {
                return (e = Object.setPrototypeOf || function (a, b) {
                  a.__proto__ = b;
                  return a;
                })(a, b);
              }
              function f(a) {
                var b = function () {
                  if (typeof Reflect == "undefined" || !Reflect.construct) {
                    return false;
                  }
                  if (Reflect.construct.sham) {
                    return false;
                  }
                  if (typeof Proxy == "function") {
                    return true;
                  }
                  try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                    return true;
                  } catch (a) {
                    return false;
                  }
                }();
                return function () {
                  var c;
                  var d = h(a);
                  if (b) {
                    var e = h(this).constructor;
                    c = Reflect.construct(d, arguments, e);
                  } else {
                    c = d.apply(this, arguments);
                  }
                  return g(this, c);
                };
              }
              function g(a, b) {
                if (!b || d(b) !== "object" && typeof b != "function") {
                  return function (a) {
                    if (a === undefined) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return a;
                  }(a);
                } else {
                  return b;
                }
              }
              function h(a) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (a) {
                  return a.__proto__ || Object.getPrototypeOf(a);
                })(a);
              }
              var i = c(4);
              var j = c(1);
              var k = c(5);
              var l = c(12);
              var m = c(13).pick;
              var n = c(29);
              var o = n.WebSocket;
              var p = n.usingBrowserWebSocket;
              var q = n.defaultBinaryType;
              var r = typeof navigator != "undefined" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
              var s = function (a) {
                (function (a, b) {
                  if (typeof b != "function" && b !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                      value: a,
                      writable: true,
                      configurable: true
                    }
                  });
                  if (b) {
                    e(a, b);
                  }
                })(d, a);
                var b;
                var c = f(d);
                function d(a) {
                  var b;
                  (function (a, b) {
                    if (!(a instanceof b)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  })(this, d);
                  (b = c.call(this, a)).supportsBinary = !a.forceBase64;
                  return b;
                }
                if (b = [{
                  key: "doOpen",
                  value: function () {
                    if (this.check()) {
                      var a = this.uri();
                      var b = this.opts.protocols;
                      var c = r ? {} : m(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress");
                      if (this.opts.extraHeaders) {
                        c.headers = this.opts.extraHeaders;
                      }
                      try {
                        this.ws = p && !r ? b ? new o(a, b) : new o(a) : new o(a, b, c);
                      } catch (a) {
                        return this.emit("error", a);
                      }
                      this.ws.binaryType = this.socket.binaryType || q;
                      this.addEventListeners();
                    }
                  }
                }, {
                  key: "addEventListeners",
                  value: function () {
                    var a = this;
                    this.ws.onopen = function () {
                      a.onOpen();
                    };
                    this.ws.onclose = function () {
                      a.onClose();
                    };
                    this.ws.onmessage = function (b) {
                      a.onData(b.data);
                    };
                    this.ws.onerror = function (b) {
                      a.onError("websocket error", b);
                    };
                  }
                }, {
                  key: "write",
                  value: function (a) {
                    var b = this;
                    this.writable = false;
                    for (var c = a.length, d = 0, e = c; d < e; d++) {
                      (function (a) {
                        j.encodePacket(a, b.supportsBinary, function (d) {
                          var e = {};
                          if (!p) {
                            if (a.options) {
                              e.compress = a.options.compress;
                            }
                            if (b.opts.perMessageDeflate && (typeof d == "string" ? Buffer.byteLength(d) : d.length) < b.opts.perMessageDeflate.threshold) {
                              e.compress = false;
                            }
                          }
                          try {
                            if (p) {
                              b.ws.send(d);
                            } else {
                              b.ws.send(d, e);
                            }
                          } catch (a) {}
                          if (! --c) {
                            b.emit("flush");
                            // TOLOOK
                            setTimeout(function () {
                              b.writable = true;
                              b.emit("drain");
                            }, 0);
                          }
                        });
                      })(a[d]);
                    }
                  }
                }, {
                  key: "onClose",
                  value: function () {
                    i.prototype.onClose.call(this);
                  }
                }, {
                  key: "doClose",
                  value: function () {
                    if (this.ws !== undefined) {
                      this.ws.close();
                    }
                  }
                }, {
                  key: "uri",
                  value: function () {
                    var a = this.query || {};
                    var b = this.opts.secure ? "wss" : "ws";
                    var c = "";
                    if (this.opts.port && (b === "wss" && +this.opts.port != 443 || b === "ws" && +this.opts.port != 80)) {
                      c = ":" + this.opts.port;
                    }
                    if (this.opts.timestampRequests) {
                      a[this.opts.timestampParam] = l();
                    }
                    if (!this.supportsBinary) {
                      a.b64 = 1;
                    }
                    if ((a = k.encode(a)).length) {
                      a = "?" + a;
                    }
                    return b + "://" + (this.opts.hostname.indexOf(":") !== -1 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + c + this.opts.path + a;
                  }
                }, {
                  key: "check",
                  value: function () {
                    return !(!o || "__initialize" in o && this.name === d.prototype.name);
                  }
                }, {
                  key: "name",
                  get: function () {
                    return "websocket";
                  }
                }]) {
                  (function (a, b) {
                    for (var c = 0; c < b.length; c++) {
                      var d = b[c];
                      d.enumerable = d.enumerable || false;
                      d.configurable = true;
                      if ("value" in d) {
                        d.writable = true;
                      }
                      Object.defineProperty(a, d.key, d);
                    }
                  })(d.prototype, b);
                }
                return d;
              }(i);
              a.exports = s;
            }, function (a, b, c) {
              var d = c(2);
              a.exports = {
                WebSocket: d.WebSocket || d.MozWebSocket,
                usingBrowserWebSocket: true,
                defaultBinaryType: "arraybuffer"
              };
            }, function (a, b, c) {
              function d(a) {
                return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
                  return typeof a;
                } : function (a) {
                  if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
                    return "symbol";
                  } else {
                    return typeof a;
                  }
                })(a);
              }
              Object.defineProperty(b, "__esModule", {
                value: true
              });
              b.reconstructPacket = b.deconstructPacket = undefined;
              var e = c(15);
              b.deconstructPacket = function (a) {
                var b = [];
                var c = a.data;
                var f = a;
                f.data = function c(a, b) {
                  if (!a) {
                    return a;
                  }
                  if (e.isBinary(a)) {
                    var f = {
                      $: true,
                      num: b.length
                    };
                    b.push(a);
                    return f;
                  }
                  if (Array.isArray(a)) {
                    for (var g = Array(a.length), h = 0; h < a.length; h++) {
                      g[h] = c(a[h], b);
                    }
                    return g;
                  }
                  if (d(a) === "object" && !(a instanceof Date)) {
                    var i = {};
                    for (var j in a) {
                      if (a.hasOwnProperty(j)) {
                        i[j] = c(a[j], b);
                      }
                    }
                    return i;
                  }
                  return a;
                }(c, b);
                f.attachments = b.length;
                return {
                  packet: f,
                  buffers: b
                };
              };
              b.reconstructPacket = function (a, b) {
                a.data = function c(a, b) {
                  if (!a) {
                    return a;
                  }
                  if (a && a.$) {
                    return b[a.num];
                  }
                  if (Array.isArray(a)) {
                    for (var e = 0; e < a.length; e++) {
                      a[e] = c(a[e], b);
                    }
                  } else if (d(a) === "object") {
                    for (var f in a) {
                      if (a.hasOwnProperty(f)) {
                        a[f] = c(a[f], b);
                      }
                    }
                  }
                  return a;
                }(a.data, b);
                a.attachments = undefined;
                return a;
              };
            }, function (a) {
              function b(a) {
                a = a || {};
                this.ms = a.min || 100;
                this.max = a.max || 10000;
                this.factor = a.factor || 2;
                this.jitter = a.jitter > 0 && a.jitter <= 1 ? a.jitter : 0;
                this.attempts = 0;
              }
              a.exports = b;
              b.prototype.duration = function () {
                var a = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                  var b = Math.random();
                  var c = Math.floor(b * this.jitter * a);
                  a = (Math.floor(b * 10) & 1) == 0 ? a - c : a + c;
                }
                return Math.min(a, this.max) | 0;
              };
              b.prototype.reset = function () {
                this.attempts = 0;
              };
              b.prototype.setMin = function (a) {
                this.ms = a;
              };
              b.prototype.setMax = function (a) {
                this.max = a;
              };
              b.prototype.setJitter = function (a) {
                this.jitter = a;
              };
            }]);
            var Y = X.exports;
            function Z(a) {
              var b = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][a];
              return b.substring(f.Number("0xf") - f.Number("0x0" + b[0]));
            }
            function $(a, b) {
              return a === f[Z(4)].max(a, b);
            }
            var _;
            var aa = function () {
              function a() {
                return [200, 10, 300].reduce(function (a, b) {
                  return a * b;
                }, 144);
              }
              function b(b, c, d) {
                if (function (a) {
                  return $(f[Z(0)].now(), a);
                }(b)) {
                  if (!c) {
                    c = f.Number("0.0005") * 100;
                  }
                  if (d) {
                    var e = function (b, c) {
                      var d = (f[Z(0)].now() - b) / (c * a());
                      return f[Z(4)].min(1, d * d);
                    }(b, d);
                    c *= e;
                  }
                  return $(f[(g = "Mathew", function (a, b) {
                    return b.substring(f.Number("0x0"), b.length + -2);
                  }(0, g))].random(), c);
                }
                var g;
                return true;
              }
              return [function () {
                return b(["0x4c72"].reduce(function (a, b) {
                  return a + f.Number(b);
                }, 658) * a(), f.Number("0.0005") * 100, 28);
              }, b];
            }()[0];
            function ba() {
              y(0)(function () {
                B();
              });
            }
            function ca(a) {
              var b = aa();
              var c = Object.create(null);
              c.J = !b && ba;
              if (a) {
                a(c);
              }
            }
            (function (a) {
              a._resizeCallback = "_resizeCallback";
            })(_ || (_ = {}));
            var da;
            var ea = function () {
              function a() {
                this.Y = [];
                this.G = true;
              }
              a.prototype.subscribe = function (a) {
                var b = this;
                if (a) {
                  this.Y.push(a);
                  return function () {
                    var c = b.Y.indexOf(a);
                    if (c > -1) {
                      b.Y.splice(c, 1);
                    }
                  };
                } else {
                  cc.error("canvasResizeBroadcaster: Invalid subscribe() arguments");
                  return false;
                }
              };
              a.prototype.V = function () {
                var a = this.G;
                this.G = !a;
                if (a) {
                  this.Y.forEach(function (a) {
                    a();
                  });
                  cc.view.emit("canvas-resize");
                  cc.view[_._resizeCallback]();
                }
              };
              a.prototype.init = function () {
                cc.view.setResizeCallback(this.V.bind(this));
              };
              return a;
            }();
            var fa = a("CanvasResizeBroadcaster", new ea());
            (function (a) {
              a[a.FIXEDW = 1] = "FIXEDW";
              a[a.FIXEDWH_16x9 = 2] = "FIXEDWH_16x9";
              a[a.FIXEDWH_19_5x9 = 3] = "FIXEDWH_19_5x9";
              a[a.FIXEDWH_9X16 = 4] = "FIXEDWH_9X16";
            })(da || (da = {}));
            var ga;
            var ha = function () {
              function a() {
                this.mode = 0;
                this.isPortrait = true;
              }
              a.prototype.init = function () {
                this.isPortrait = shell.environment.getOrientationMode() !== "land";
                fa.subscribe(this.V.bind(this));
                this.V();
              };
              a.prototype.toggleResize = function () {
                this.mode = 0;
                this.V();
              };
              a.prototype.V = function () {
                if (this.isPortrait) {
                  var a = cc.view.getFrameSize();
                  if (a.height / a.width <= 16 / 9) {
                    if (this.mode !== da.FIXEDWH_16x9) {
                      this.mode = da.FIXEDWH_16x9;
                      cc.view.setDesignResolutionSize(1080, 1920, new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER));
                    }
                  } else if (a.height / a.width > 16 / 9 && a.height / a.width <= 19.5 / 9) {
                    if (this.mode !== da.FIXEDW) {
                      this.mode = da.FIXEDW;
                      cc.view.setDesignResolutionSize(1080, 2340, new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.FIXED_WIDTH));
                    }
                  } else if (this.mode !== da.FIXEDWH_19_5x9) {
                    this.mode = da.FIXEDWH_19_5x9;
                    cc.view.setDesignResolutionSize(1080, 2340, new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER));
                  }
                } else {
                  this.mode = da.FIXEDWH_9X16;
                  cc.view.setDesignResolutionSize(1920, 1080, new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.FIXED_HEIGHT));
                }
              };
              return a;
            }();
            a("MultiResHandler", new ha());
            var ia = Object.create(null);
            ga = Object.create(null);
            function ja(a, b, c, d, e) {
              if (typeof d != "function") {
                e = d;
                d = undefined;
              }
              ga.get = c;
              ga.set = d;
              ga.enumerable = e;
              Object.defineProperty(a, b, ga);
              ga.get = undefined;
              ga.set = undefined;
            }
            var ka = function () {
              var a;
              try {
                if ((a = localStorage) == null) {
                  throw Error();
                }
                a.setItem("__test", "1");
                if (a.getItem("__test") !== "1") {
                  a = undefined;
                }
              } catch (b) {
                a = undefined;
              }
              if (!a) {
                a = {
                  Z: Object.create(null),
                  get length() {
                    return Object.keys(this.Z).length;
                  },
                  clear: function () {
                    this.Z = Object.create(null);
                  },
                  getItem: function (a) {
                    var b = this.Z[a];
                    if (b != null) {
                      return b;
                    } else {
                      return null;
                    }
                  },
                  key: function (a) {
                    var b = Object.keys(this.Z)[a];
                    if (b != null) {
                      return b;
                    } else {
                      return null;
                    }
                  },
                  removeItem: function (a) {
                    if (a in this.Z) {
                      delete this.Z[a];
                    }
                  },
                  setItem: function (a, b) {
                    this.Z[a] = b;
                  }
                };
              }
              return a;
            }();
            function la(a, b) {
              var c = a.indexOf(b);
              if (c !== -1) {
                a.splice(c, 1);
              }
            }
            a("Preference", function () {
              function a(a) {
                this.tt = ka;
                this.nt = a;
                this.et = a + "$prefkeysep$";
                this.rt = [];
                this.it = {};
              }
              Object.defineProperty(a.prototype, "domain", {
                get: function () {
                  return this.nt;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(a.prototype, "length", {
                get: function () {
                  return this.ot.length;
                },
                enumerable: false,
                configurable: true
              });
              a.prototype.clear = function () {
                for (var a = this.ot, b = 0, c = a.length; b < c; b++) {
                  this.tt.removeItem(a[b]);
                }
              };
              a.prototype.getItem = function (a, b) {
                var c = this.tt.getItem(this.et + a);
                if (c) {
                  return JSON.parse(c);
                } else {
                  return b;
                }
              };
              a.prototype.key = function (a) {
                var b = this.ot[a];
                if (b != null) {
                  return b.substring(this.et.length);
                } else {
                  return null;
                }
              };
              a.prototype.removeItem = function (a) {
                this.tt.removeItem(this.et + a);
              };
              a.prototype.setItem = function (a, b) {
                if (b === undefined) {
                  this.removeItem(a);
                } else {
                  this.tt.setItem(this.et + a, JSON.stringify(b));
                }
              };
              a.prototype.getRawItem = function (a) {
                return this.tt.getItem(this.et + a);
              };
              a.prototype.setRawItem = function (a, b) {
                if (b === undefined) {
                  this.removeItem(a);
                } else {
                  this.tt.setItem(this.et + a, b);
                }
              };
              Object.defineProperty(a.prototype, "ot", {
                get: function () {
                  for (var a = [], b = 0, c = this.tt.length; b < c; b++) {
                    var d = this.tt.key(b);
                    if (d && d.indexOf(this.et) === 0) {
                      a.push(d);
                    }
                  }
                  return a;
                },
                enumerable: false,
                configurable: true
              });
              a.prototype.setStorage = function (a) {
                if (this.tt !== a) {
                  this.tt = a;
                }
              };
              a.prototype.defineItem = function (a, b) {
                var c = this;
                if (!(a in this)) {
                  ja(this, a, function () {
                    return c.getItem(a, b);
                  }, function (d) {
                    var e = c.getItem(a, b);
                    c.setItem(a, d);
                    c.ut(a, d, e);
                  });
                }
              };
              a.prototype.addObserver = function (a, b) {
                if (b == null) {
                  if (typeof a != "function") {
                    throw Error("Invalid parameter");
                  }
                  b = a;
                  a = undefined;
                }
                var c;
                if (a !== undefined) {
                  if (!(c = this.it[a])) {
                    c = this.it[a] = [];
                  }
                } else {
                  c = this.rt;
                }
                if (c.indexOf(b) !== -1) {
                  throw Error("Callback registered");
                }
                c.push(b);
              };
              a.prototype.removeObserver = function (a, b) {
                if (b == null) {
                  if (typeof a != "function") {
                    throw Error("Invalid parameter");
                  }
                  b = a;
                  a = undefined;
                }
                if (a !== undefined) {
                  var c = this.it[a];
                  if (c) {
                    la(c, b);
                  }
                } else {
                  la(this.rt, b);
                }
              };
              a.prototype.ut = function (a, b, c) {
                this.rt.forEach(function (d) {
                  return d(a, b, c);
                });
                var d = this.it[a];
                if (d) {
                  d.forEach(function (a) {
                    return a(b, c);
                  });
                }
              };
              a.getPreference = function (b) {
                if (ia[b]) {
                  return ia[b];
                }
                var c = new a(b);
                ia[b] = c;
                return c;
              };
              return a;
            }());
            var ma = f.__extends;
            var na = shell.NetworkError;
            var oa = shell.Error;
            var pa = a("Serialiser", function () {
              function a() {
                this.encodingParameters = a.encodingParameters;
                this.auth = a.auth;
              }
              a.prototype.serializing = function (b, c, d) {
                var e = undefined;
                var f = undefined;
                if (d) {
                  var g = this.encodingParameters(d);
                  if (a.encodingParametersInURI(b)) {
                    c = c.indexOf("?") !== -1 ? `${c}&${g}` : `${c}?${g}`;
                  } else {
                    e = {
                      "Content-Type": "application/x-www-form-urlencoded"
                    };
                    f = g;
                  }
                }
                this.url = this.auth(c);
                this.headers = e;
                this.body = f;
              };
              a.encodingParametersInURI = function (a) {
                return a === "GET" || a === "HEAD" || a === "DELETE";
              };
              a.encodingParameters = function (b) {
                var c = a.ct;
                c.length = 0;
                for (var d in b) {
                  if (Object.prototype.hasOwnProperty.call(b, d)) {
                    var e = b[d];
                    if (e !== undefined) {
                      if (typeof e == "object") {
                        c.push(`${encodeURIComponent(d)}=${encodeURIComponent(JSON.stringify(e))}`);
                      } else {
                        c.push(`${encodeURIComponent(d)}=${encodeURIComponent(e + "")}`);
                      }
                    }
                  }
                }
                var f = c.join("&");
                c.length = 0;
                return f;
              };
              a.auth = function (a) {
                if (shell && shell.authenticate) {
                  return shell.authenticate(a);
                } else {
                  return a;
                }
              };
              a.ct = [];
              return a;
            }());
            a("JSONSerialiser", function (a) {
              function b() {
                return a !== null && a.apply(this, arguments) || this;
              }
              ma(b, a);
              b.prototype.serializing = function (b, c, d) {
                if (pa.encodingParametersInURI(b)) {
                  return a.prototype.serializing.call(this, b, c, d);
                }
                this.url = this.auth(c);
                if (d) {
                  this.headers = {
                    "Content-Type": "application/json"
                  };
                  this.body = JSON.stringify(d);
                } else {
                  this.headers = undefined;
                  this.body = undefined;
                }
              };
              return b;
            }(pa));
            var qa = a("Deserialiser", function () {
              function a(b, c) {
                this.transformResponse = a.transformResponse;
                this.type = b;
                this.mimeType = c;
              }
              a.prototype.deserializing = function (a) {
                var b = a.response;
                if (this.type === "json" && typeof b == "string") {
                  try {
                    b = JSON.parse(b);
                  } catch (a) {
                    this.data = undefined;
                    return a;
                  }
                }
                this.data = this.transformResponse(b);
              };
              a.isHttpStatusError = function (a) {
                var b = a.status;
                return (b < 200 || b > 299) && !(b === 0 && a.response != null);
              };
              a.transformResponse = function (a) {
                return a;
              };
              return a;
            }());
            a("XHR", function () {
              function a(a, b) {
                this.timeout = 60000;
                this.serializer = a || new pa();
                this.deserializer = b || new qa("json");
              }
              a.prototype.get = function (a, b, c) {
                return this.request("GET", a, b, c);
              };
              a.prototype.head = function (a, b, c) {
                return this.request("HEAD", a, b, c);
              };
              a.prototype.post = function (a, b, c) {
                return this.request("POST", a, b, c);
              };
              a.prototype.put = function (a, b, c) {
                return this.request("PUT", a, b, c);
              };
              a.prototype.patch = function (a, b, c) {
                return this.request("PATCH", a, b, c);
              };
              a.prototype.delete = function (a, b, c) {
                return this.request("DELETE", a, b, c);
              };
              a.prototype.request = function (a, b, c, d) {
                if (d === undefined) {
                  if (typeof c != "function") {
                    throw Error("Invalid arguments");
                  }
                  d = c;
                  c = undefined;
                }
                var e;
                var f = this.serializer;
                var g = this.deserializer;
                var h = new XMLHttpRequest();
                var i = shell.environment.getURLSearchParam().get("otid") || `${function () {
                  for (var a = [], b = 0; b < 6; b++) {
                    a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * 26)));
                  }
                  return a.join("");
                }()}${(e = new Date().getUTCDate() + "").length > 1 ? e : `0${e}`}`;
                var j = function (a, b) {
                  if (a.indexOf("?") !== -1) {
                    return `${a}&traceId=${b}`;
                  } else {
                    return `${a}?traceId=JLTNST29`;
                  }
                }(b, i);
                var k = f.serializing(a, j, c);
                if (k) {
                  // TOLOOK
                  setTimeout(function () {
                    d(k, undefined);
                  }, 0);
                  return h;
                }
                h.open(a, f.url, true);
                h.timeout = this.timeout;
                h.onload = function () {
                  var a = undefined;
                  if (qa.isHttpStatusError(h)) {
                    a = new oa(na.Domain, na.HttpStatusError + h.status, i);
                    g.data = undefined;
                  } else {
                    a = g.deserializing(h);
                  }
                  if (a) {
                    d(a, undefined);
                  } else {
                    d(undefined, g.data);
                  }
                };
                h.onerror = function () {
                  var a = new oa(na.Domain, na.HttpNetworkError, i);
                  d(a, undefined);
                };
                h.ontimeout = function () {
                  var a = new oa(na.Domain, na.HttpTimeoutError, i);
                  d(a, undefined);
                };
                h.onabort = function () {
                  var a = new oa(na.Domain, na.HttpAbortError, i);
                  d(a, undefined);
                };
                h.responseType = g.type;
                if (g.mimeType) {
                  h.overrideMimeType(g.mimeType);
                }
                var l = f.headers;
                if (l) {
                  for (var m in l) {
                    if (Object.prototype.hasOwnProperty.call(l, m)) {
                      h.setRequestHeader(m, l[m]);
                    }
                  }
                }
                h.send(f.body);
                return h;
              };
              return a;
            }());
            f.io = Y.io;
            z(function (a) {
              z(y(0), ca)(function (b) {
                if (a) {
                  a(b);
                }
              });
            })(function (a, b) {
              if (b) {
                throw Error(b.message);
              }
              if (a && a.J) {
                a.J();
              }
            });
            a("default", Y.io);
          }
        };
      });
    })();
  })();