(function () {
    'use strict';

    (function () {
        var b;
        (function (b) {
            b.lg_i = "window";
            b.lg_t = "self";
        })(b || (b = {}));
        var c = (0, eval)("this");
        c[b.lg_t];
        var d = c[b.lg_i];
        System.register(["99212c6ec4"], function (a) {
            'use strict';

            var b;
            var c;
            var e;
            var f;
            var g;
            var h;
            return {
                setters: [function (a) {
                    b = a.ResRC;
                    c = a.Utils;
                    e = a.Deserialiser;
                    f = a.XHR;
                    g = a.Serialiser;
                    h = a.Preference;
                }],
                execute: function () {
                    var i;
                    var j;
                    var k = d.__extends;
                    var l = d.__assign;
                    var m = d.__decorate;
                    function n(a, b) {
                        var c = {};
                        for (var d in b) {
                            if (a.hasOwnProperty(d)) {
                                c[a[d]] = b[d];
                            } else {
                                c[d] = b[d];
                            }
                        }
                        return c;
                    }
                    a("LoginMethod", i);
                    (function (a) {
                        a[a.Web = 1] = "Web";
                        a[a.Session = 2] = "Session";
                        a[a.SessionWithWeb = 3] = "SessionWithWeb";
                    })(i || a("LoginMethod", i = {}));
                    a("LoginGameStatus", j);
                    (function (a) {
                        a[a.Inactive = 0] = "Inactive";
                        a[a.Active = 1] = "Active";
                        a[a.Suspended = 2] = "Suspended";
                    })(j || a("LoginGameStatus", j = {}));
                    n({
                        unloadBundleAsset: "releaseBundleAsset",
                        unload: "release",
                        unloadBundle: "releaseBundle",
                        deleteBundle: "removeBundle",
                        loadByBundleAsset: "loadBundleAsset",
                        loadRemoteBySingle: "loadRemoteSingle"
                    }, b);
                    var o = n({
                        convertNodeSpace: "convertToNodeSpace",
                        convertNodeSpaceAR: "convertToNodeSpaceAR",
                        getAbsolutePos: "getAbsolutePosition",
                        getAbsoluteXPos: "getAbsoluteX",
                        getAbsoluteYPos: "getAbsoluteY",
                        setAbsolutePos: "setAbsolutePosition",
                        setAbsoluteXPos: "setAbsoluteX",
                        setAbsoluteYPos: "setAbsoluteY",
                        transferToNewParent: "transferToParent",
                        getSharedSimpleScheduler: "getSharedScheduler",
                        delay: "delayCallback",
                        timeout: "timeoutCallback",
                        selector: "selectorCallback",
                        sequence: "sequenceCallback",
                        spawn: "spawnCallback",
                        waterfall: "waterfCallback",
                        condition: "condCallback",
                        defer: "deferCallback",
                        tick: "tickCallback",
                        observe: "observeCallback",
                        formatLeadingZero: "formatTwoDigit",
                        formatDateTime: "formatDate",
                        isRightToLeft: "isRTL",
                        getLocationProtocol: "getProtocol",
                        getLocationOrigin: "getOrigin"
                    }, c);
                    function p(a) {
                        return Object.prototype.toString.call(a) === "[object Object]";
                    }
                    function r(a) {
                        return function (b, c) {
                            b = b || function (a) {
                                var b = undefined;
                                if (p(a) && a.hasOwnProperty("err") && a.hasOwnProperty("dt")) {
                                    var c = a.err;
                                    if (c) {
                                        b = function (a) {
                                            var b;
                                            if (!p(a)) {
                                                a = {};
                                            }
                                            if (!(a.hasOwnProperty("cd") && (typeof (b = a.cd) == "number" || typeof b == "string" && b !== "" && !/\s/.test(b) && !isNaN(+b)))) {
                                                a.cd = 6501;
                                            }
                                            return new (0, shell.Error)(shell.ServerError.Domain, a.cd, a.tid);
                                        }(c);
                                    }
                                } else {
                                    b = new (0, shell.Error)(shell.ServerError.Domain, 6501);
                                }
                                return b;
                            }(c);
                            a(b, c);
                        };
                    }
                    var s = function (a) {
                        function b() {
                            var b = a !== null && a.apply(this, arguments) || this;
                            b.transformResponse = function (a) {
                                return a;
                            };
                            return b;
                        }
                        k(b, a);
                        return b;
                    }(e);
                    var t = new (function () {
                        function a() {
                            this.lg_e = new f(new g(), new s("json"));
                            this.lg_n = undefined;
                            this.lg_o = undefined;
                        }
                        a.prototype.setDomain = function (a) {
                            this.lg_n = a;
                            this.lg_o = o.getPlatform();
                        };
                        a.prototype.verifyGameSession = function (a, b) {
                            this.setDomain(a.apiDomain);
                            var c;
                            var d = this.lg_s(a);
                            c = l(l({}, d), {
                                gi: a.gameId,
                                tk: a.playerSession,
                                otk: a.operatorToken
                            });
                            this.lg_r("web-api/auth/session/v2/verifySession", c, b);
                        };
                        a.prototype.verifyOperatorGameSession = function (a, b) {
                            this.setDomain(a.apiDomain);
                            var c;
                            var d = this.lg_s(a);
                            c = l(l({}, d), {
                                gi: a.gameId,
                                os: a.operatorPlayerSession ? encodeURIComponent(a.operatorPlayerSession) : undefined,
                                otk: a.operatorToken
                            });
                            this.lg_r("web-api/auth/session/v2/verifyOperatorPlayerSession", c, b);
                        };
                        a.prototype.queryLoginUrl = function (a, b) {
                            this.setDomain(a.apiDomain);
                            var c = {
                                gi: a.gameId,
                                otk: a.operatorToken,
                                btt: a.betType,
                                pf: this.lg_o
                            };
                            this.lg_r("web-api/auth/login/v1/getLoginUrl", c, b);
                        };
                        a.prototype.verifyLogin = function (a, b) {
                            var c = this.lg_s(a);
                            var d = l(l({}, c), {
                                tk: a.playerSession,
                                gi: a.gameId,
                                otk: a.operatorToken
                            });
                            this.lg_r("web-api/auth/session/v2/verifyLogin", d, b);
                        };
                        a.prototype.lg_r = function (a, b, c) {
                            if (!this.lg_n) {
                                throw Error("Login: Login domain not set. Please use setLoginDomain before doing any other login related stuff");
                            }
                            var d = o.resolvePath(this.lg_n, a);
                            return function (a, b, c, d) {
                                var e = a.request("POST", b, c, r(d));
                                return function () {
                                    return e.abort();
                                };
                            }(this.lg_e, d, b, c);
                        };
                        a.prototype.lg_s = function (a) {
                            return {
                                cp: a.operatorParam ? encodeURIComponent(a.operatorParam) : undefined,
                                btt: a.betType,
                                vc: a.cacheType,
                                pf: this.lg_o,
                                ro: a.redirectOption,
                                l: shell.I18n.locale()
                            };
                        };
                        return a;
                    }())();
                    function u(a) {
                        var b = a.code;
                        return !!(0, shell.ServerError.isGameMaintainanceError)(b);
                    }
                    function v() {
                        if (document.activeElement instanceof HTMLElement) {
                            document.activeElement.blur();
                        }
                    }
                    var w;
                    var x = new (function () {
                        function a() {
                            this.lg_h = [];
                        }
                        a.prototype.addStyle = function (a, b) {
                            if (this.lg_h.indexOf(a) === -1) {
                                var c = document.createElement("style");
                                c.id = a;
                                c.textContent = b;
                                document.head.appendChild(c);
                                this.lg_h.push(a);
                            }
                        };
                        a.prototype.removeStyle = function (a) {
                            var b = this.lg_h.indexOf(a);
                            if (b > 0) {
                                var c = document.getElementById(a);
                                if (c && c.parentElement) {
                                    c.remove();
                                }
                                this.lg_h.splice(b, 1);
                            }
                        };
                        return a;
                    }())();
                    var y = shell.getGameInfo().organizationIdentifier + ".plugin.login";
                    (function (a) {
                        a[a.PUBLIC = 0] = "PUBLIC";
                        a[a.PRIVATE = 1] = "PRIVATE";
                        a[a.NONE = 2] = "NONE";
                    })(w || (w = {}));
                    var z;
                    var A;
                    var C;
                    var D = function () {
                        function a(a, b) {
                            this.lg_u = h.getPreference(y);
                            this.lg_a = a;
                            this.lg_c = b;
                            if ((cc && !cc.sys.isMobile || !d.navigator.standalone && !d.matchMedia("(display-mode: standalone)").matches) && shell.getEnvironment() !== "pc" && shell.getEnvironment() !== "app") {
                                try {
                                    var c = sessionStorage;
                                    c.setItem("__test", "1");
                                    if (c.getItem("__test") === "1") {
                                        this.lg_u.setStorage(c);
                                    }
                                } catch (a) { }
                            }
                        }
                        a.prototype.getCacheData = function () {
                            var a = this.lg_u.getItem("cache");
                            var b = this.lg_a;
                            var c = this.lg_c;
                            if (a && a[b]) {
                                var d = a[b][c];
                                var e = a[b].public;
                                var f = d || e;
                                if (!f) {
                                    return;
                                }
                                switch (f.cacheType) {
                                    case w.PUBLIC:
                                        return a[b].public;
                                    case w.PRIVATE:
                                        return a[b][c];
                                    default:
                                        return;
                                }
                            }
                        };
                        a.prototype.setCache = function (a) {
                            var b = this.lg_a;
                            var c = this.lg_c;
                            var d = a.operatorPlayerSession;
                            var e = a.gsSession;
                            var f = a.cacheType;
                            var g = this.lg_u.getItem("cache");
                            (g = g || {})[b] = g[b] ? g[b] : {};
                            switch (f) {
                                case w.PUBLIC:
                                    g[b].public = {
                                        cacheType: f,
                                        operatorPlayerSession: d,
                                        gsSession: e
                                    };
                                    delete g[this.lg_a][this.lg_c];
                                    this.lg_u.setItem("cache", g);
                                    break;
                                case w.PRIVATE:
                                    g[b][c] = {
                                        cacheType: f,
                                        operatorPlayerSession: d,
                                        gsSession: e
                                    };
                                    delete g[this.lg_a].public;
                                    this.lg_u.setItem("cache", g);
                                    break;
                                default:
                                    this.clearCache();
                            }
                        };
                        a.prototype.clearCache = function () {
                            var a = this.lg_u.getItem("cache");
                            if (a && a[this.lg_a]) {
                                delete a[this.lg_a][this.lg_c];
                                delete a[this.lg_a].public;
                            }
                            this.lg_u.setItem("cache", a);
                        };
                        a.prototype.clearAllCache = function () {
                            this.lg_u.setItem("cache", undefined);
                        };
                        return a;
                    }();
                    var E = function () {
                        function a(a) {
                            this.lg_l = undefined;
                            this.lg_f = undefined;
                            this.lg_d = undefined;
                            this.lg_g = undefined;
                            this.lg_v = undefined;
                            this.lg_b = undefined;
                            this.lg_m = undefined;
                            this.lg_p = undefined;
                            this.lg_L = undefined;
                            this.lg_S = undefined;
                            this.lg_O = undefined;
                            this.lg_w = undefined;
                            this.lg_y = undefined;
                            this.lg_k = undefined;
                            this.lg_x = undefined;
                            this.lg_A = undefined;
                            this.lg_j = undefined;
                            this.lg_T = undefined;
                            this.lg_E = undefined;
                            this.lg_P = undefined;
                            this.lg_N = undefined;
                            this.lg_V = undefined;
                            this.lg_C = undefined;
                            this.lg_I = undefined;
                            if (a && a.dt) {
                                var b = a.dt;
                                this.lg_b = b.pcd;
                                this.lg_m = b.tk;
                                this.lg_p = b.st;
                                this.lg_l = b;
                                this.lg_f = b.oj;
                                this.lg_d = b.opl;
                                this.lg_g = b.pid;
                                this.lg_v = b.sdn;
                                this.lg_L = b.geu;
                                this.lg_S = b.bau;
                                this.lg_O = b.cc;
                                this.lg_w = b.cs;
                                this.lg_y = b.nkn;
                                this.lg_k = b.gm;
                                this.lg_x = b.ufg;
                                this.lg_A = b.rt;
                                this.lg_j = b.uiogc;
                                this.lg_T = b.ec;
                                this.lg_E = b.ocr;
                                this.lg_P = b.ocdr;
                                this.lg_N = b.occ;
                                this.lg_V = b.gcv;
                                this.lg_C = b.ioph;
                                this.lg_I = b.eatk;
                            }
                        }
                        Object.defineProperty(a.prototype, "rawData", {
                            get: function () {
                                return this.lg_l;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "operatorJurisdiction", {
                            get: function () {
                                return this.lg_f;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "operatorPromotionLink", {
                            get: function () {
                                return this.lg_d;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "playerId", {
                            get: function () {
                                return this.lg_g;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "gameApiSubdomain", {
                            get: function () {
                                return this.lg_v;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "playerName", {
                            get: function () {
                                return this.lg_b;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "sessionToken", {
                            get: function () {
                                return this.lg_m;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "sessionStatus", {
                            get: function () {
                                return this.lg_p;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "gameEngineUrl", {
                            get: function () {
                                return this.lg_L;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "betHistoryApiUrl", {
                            get: function () {
                                return this.lg_S;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "currencyCode", {
                            get: function () {
                                return this.lg_O;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "currencySymbol", {
                            get: function () {
                                return this.lg_w;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "nickname", {
                            get: function () {
                                return this.lg_y;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "gamesMaintanence", {
                            get: function () {
                                return this.lg_k;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "unfinishGamesFeature", {
                            get: function () {
                                return this.lg_x;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "reminderTime", {
                            get: function () {
                                return this.lg_A;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "uiOperatorGameComponents", {
                            get: function () {
                                return this.lg_j;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "elementCategory", {
                            get: function () {
                                return this.lg_T;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "operatorCustomResponse", {
                            get: function () {
                                return this.lg_E;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "operatorCustomDisplayResponse", {
                            get: function () {
                                return this.lg_P;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "operatorCustomConfiguration", {
                            get: function () {
                                return this.lg_N;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "gameCertificateVersion", {
                            get: function () {
                                return this.lg_V;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "operatorPromotionId", {
                            get: function () {
                                return this.lg_C;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        Object.defineProperty(a.prototype, "extraAssetTableKey", {
                            get: function () {
                                return this.lg_I;
                            },
                            enumerable: false,
                            configurable: true
                        });
                        return a;
                    }();
                    (function (a) {
                        a[a.WEB_LOGIN = 1] = "WEB_LOGIN";
                        a[a.SESSION_LOGIN = 2] = "SESSION_LOGIN";
                        a[a.SESSION_WITH_WEB_LOGIN = 3] = "SESSION_WITH_WEB_LOGIN";
                    })(z || (z = {}));
                    (function (a) {
                        a[a.GAME_SESSION = 4] = "GAME_SESSION";
                        a[a.OPERATOR_PLAYER_SESSION = 2] = "OPERATOR_PLAYER_SESSION";
                        a[a.WEB = 1] = "WEB";
                    })(A || (A = {}));
                    (function (a) {
                        a[a.NORMAL = 1] = "NORMAL";
                        a[a.TRIAL = 2] = "TRIAL";
                        a[a.TOURNAMENT = 3] = "TOURNAMENT";
                    })(C || (C = {}));
                    var F = function (a) {
                        function b() {
                            var b = a !== null && a.apply(this, arguments) || this;
                            b.lg_G = undefined;
                            b.lg_u = undefined;
                            return b;
                        }
                        k(b, a);
                        b.prototype.onCreate = function () {
                            this.lg_R();
                        };
                        b.prototype.lg_R = function () {
                            var a = this;
                            // TOLOOK
                            setTimeout(function () {
                                a.context.event.once("Login.Login", a.lg_W, a);
                            });
                        };
                        b.prototype.lg_W = function (a) {
                            this.lg_G = a.payload;
                            this.lg_u = new D(this.lg_G.operatorToken, this.lg_G.bundleId);
                            switch (this.lg_G.loginMethod) {
                                case z.SESSION_LOGIN:
                                    this.lg_D(A.GAME_SESSION | A.OPERATOR_PLAYER_SESSION);
                                    break;
                                case z.WEB_LOGIN:
                                    this.lg_D(A.WEB);
                                    break;
                                case z.SESSION_WITH_WEB_LOGIN:
                                    this.lg_D(A.GAME_SESSION | A.OPERATOR_PLAYER_SESSION | A.WEB);
                                    break;
                                default:
                                    throw Error("LoginHandler: Unknown Login Method!");
                            }
                        };
                        b.prototype.lg_B = function (a) {
                            for (var b, c = this, d = [], e = (b = [], Object.keys(A).forEach(function (a) {
                                b.push(A[a]);
                            }), b.sort().reverse()), f = false, g = function (a) {
                                if (!f) {
                                    f = true;
                                    a.push(c.lg__.bind(c));
                                }
                            }, h = 0; h < e.length; h++) {
                                var i = e[h];
                                if ((a & i) > 0) {
                                    a -= i;
                                    switch (i) {
                                        case A.GAME_SESSION:
                                            d.push(this.lg_M.bind(this));
                                            g(d);
                                            break;
                                        case A.OPERATOR_PLAYER_SESSION:
                                            g(d);
                                            d.push(this.lg_U.bind(this));
                                            break;
                                        case A.WEB:
                                            d.push(this.lg_F.bind(this));
                                    }
                                }
                            }
                            return d;
                        };
                        b.prototype.lg_D = function (a) {
                            var b = this;
                            (function () {
                                for (var a = [], b = 0; b < arguments.length; b++) {
                                    a[b] = arguments[b];
                                }
                                if (a.length === 1 && a[0] instanceof Array) {
                                    a = a[0].slice();
                                }
                                return function (b) {
                                    var c = false;
                                    var d = undefined;
                                    function e() {
                                        if (!c) {
                                            c = true;
                                            if (typeof d == "function") {
                                                d();
                                            }
                                        }
                                    }
                                    var f = 0;
                                    function g(h, i) {
                                        var j = h;
                                        var k = i;
                                        if (!c) {
                                            f++;
                                            if (h || f >= a.length) {
                                                b(j, k);
                                                e();
                                            } else {
                                                d = a[f](g, k);
                                            }
                                        }
                                    }
                                    d = a[f](g);
                                    return e;
                                };
                            })(this.lg_B(a))(function (a, c) {
                                b.lg_Y(c);
                            });
                        };
                        b.prototype.lg_Y = function (a) {
                            if (!a.err) {
                                var b = this.lg_G;
                                var c = b.operatorPlayerSession;
                                var d = a.res;
                                var e = new E(d);
                                var f = e.uiOperatorGameComponents.vc === undefined ? w.NONE : e.uiOperatorGameComponents.vc;
                                var g = e.sessionToken;
                                this.lg_u.setCache({
                                    cacheType: f,
                                    operatorPlayerSession: c,
                                    gsSession: g
                                });
                                shell.ga.sendEvent("access", "authen", {
                                    otk: b.operatorToken.substring(0, 8),
                                    user: e.playerName
                                });
                                a.res = e;
                            }
                            this.context.event.emit("Login.OnLogin", a);
                            this.lg_R();
                        };
                        b.prototype.lg_F = function (a) {
                            var b = this;
                            var c = this.lg_G;
                            c.cacheType = w.NONE;
                            this.context.event.once("Login.OnVerifyWebLoginSession", function (c) {
                                var d = c.payload;
                                var e = d.err;
                                if (e && !u(e)) {
                                    b.lg_H();
                                    if (a) {
                                        a(undefined, d);
                                    }
                                } else if (a) {
                                    a(true, d);
                                }
                            }, this);
                            this.context.event.emit("Login.VerifyWebLoginSession", c);
                        };
                        b.prototype.lg__ = function (a, b) {
                            var c;
                            var d = this;
                            c = this.lg_G;
                            var e = JSON.parse(JSON.stringify(c));
                            var f = this.lg_u.getCacheData();
                            e.cacheType = f && f.cacheType !== undefined ? f.cacheType : w.NONE;
                            if (this.lg_X()) {
                                e.playerSession = f.gsSession;
                                this.context.event.once("Login.OnVerifyGameSession", function (b) {
                                    var c = b.payload;
                                    var e = c.err;
                                    if (e && !u(e)) {
                                        d.lg_H();
                                        if (a) {
                                            a(undefined, c);
                                        }
                                    } else if (a) {
                                        a(true, c);
                                    }
                                }, this);
                                this.context.event.emit("Login.VerifyGameSession", e);
                            } else {
                                this.lg_H();
                                if (b && b.err) {
                                    if (a) {
                                        a(undefined, b);
                                    }
                                } else {
                                    var g = shell.ClientError;
                                    var h = new (0, shell.Error)(g.Domain, g.AuthenticationError);
                                    if (a) {
                                        a(undefined, {
                                            err: h,
                                            res: undefined
                                        });
                                    }
                                }
                            }
                        };
                        b.prototype.lg_M = function (a, b) {
                            var c = this;
                            var d = this.lg_G;
                            d.cacheType = w.NONE;
                            if (d.playerSession || d.betType === C.TRIAL) {
                                this.context.event.once("Login.OnVerifyGameSession", function (b) {
                                    var d = b.payload;
                                    var e = d.err;
                                    if (e && !u(e)) {
                                        c.lg_H();
                                        if (a) {
                                            a(undefined, d);
                                        }
                                    } else if (a) {
                                        a(true, d);
                                    }
                                }, this);
                                this.context.event.emit("Login.VerifyGameSession", d);
                            } else if (b && b.err) {
                                if (a) {
                                    a(undefined, b);
                                }
                            } else {
                                var e = shell.ClientError;
                                var f = new (0, shell.Error)(e.Domain, e.AuthenticationError);
                                if (a) {
                                    a(undefined, {
                                        err: f,
                                        res: undefined
                                    });
                                }
                            }
                        };
                        b.prototype.lg_U = function (a, b) {
                            var c = this;
                            var d = this.lg_G;
                            d.cacheType = w.NONE;
                            if (d.operatorPlayerSession) {
                                this.context.event.once("Login.OnVerifyOperatorSession", function (b) {
                                    var d = b.payload;
                                    var e = d.err;
                                    if (e && !u(e)) {
                                        c.lg_H();
                                        if (a) {
                                            a(undefined, d);
                                        }
                                    } else if (a) {
                                        a(true, d);
                                    }
                                }, this);
                                this.context.event.emit("Login.VerifyOperatorSession", d);
                            } else if (b && b.err) {
                                if (a) {
                                    a(undefined, b);
                                }
                            } else {
                                var e = shell.ClientError;
                                var f = new (0, shell.Error)(e.Domain, e.AuthenticationError);
                                if (a) {
                                    a(undefined, {
                                        err: f,
                                        res: undefined
                                    });
                                }
                            }
                        };
                        b.prototype.lg_X = function () {
                            var a = this.lg_u.getCacheData();
                            if (a) {
                                var b = this.lg_G.operatorPlayerSession;
                                if (b == null) {
                                    return a.operatorPlayerSession === null;
                                }
                                if (b) {
                                    return a.operatorPlayerSession === b;
                                }
                            }
                            return false;
                        };
                        b.prototype.lg_H = function () {
                            this.lg_u.clearCache();
                        };
                        return b;
                    }(plugin.AbstractComponent);
                    var G = function (a) {
                        function b() {
                            var b = a !== null && a.apply(this, arguments) || this;
                            b.lg_q = 54;
                            return b;
                        }
                        k(b, a);
                        b.prototype.onCreate = function () {
                            var a;
                            var b;
                            if ((d.navigator.standalone || shell.getEnvironment() === "app") && (a = shell.environment.getScreenWidth(), b = shell.environment.getScreenHeight(), shell.environment.isIOS() && (a === 812 && b === 375 || a === 375 && b === 812))) {
                                this.lg_q = 88;
                            }
                            this.context.event.once("Login.Show", this.lg_z, this);
                        };
                        b.prototype.show = function () {
                            this.lg_J.style.top = "0";
                        };
                        b.prototype.dismiss = function () {
                            v();
                            this.lg_J.style.top = "100vh";
                        };
                        b.prototype.reload = function () {
                            v();
                            this.lg_K.src += "";
                        };
                        b.prototype.lg_Z = function () {
                            this.rootElement = document.createElement("div");
                            this.rootElement.setAttribute("id", "login-container");
                            this.lg_J = document.createElement("div");
                            this.lg_J.setAttribute("id", "login");
                            this.lg_Q = document.createElement("div");
                            this.lg_Q.setAttribute("id", "login-body");
                            this.context.view.appendTo(b, "overlay");
                            this.rootElement.appendChild(this.lg_J);
                        };
                        b.prototype.lg_$ = function () {
                            var a = shell.I18n;
                            var b = document.createElement("div");
                            var c = document.createElement("div");
                            var d = document.createElement("div");
                            var e = document.createElement("div");
                            b.setAttribute("id", "login-flex-container");
                            b.style.height = this.lg_q + "px";
                            c.setAttribute("id", "login-header-left");
                            c.textContent = a.t("Login.WebLoginDismiss");
                            d.setAttribute("id", "login-header-middle");
                            d.textContent = a.t("Login.WebLoginLogin");
                            e.setAttribute("id", "login-header-right");
                            e.textContent = a.t("Login.WebLoginReload");
                            c.onclick = this.dismiss.bind(this);
                            e.onclick = this.reload.bind(this);
                            b.appendChild(c);
                            b.appendChild(d);
                            b.appendChild(e);
                            this.lg_J.appendChild(b);
                        };
                        b.prototype.lg_ii = function () {
                            this.lg_J.appendChild(this.lg_Q);
                        };
                        b.prototype.lg_ti = function () {
                            this.lg_K = document.createElement("IFRAME");
                            this.lg_K.setAttribute("id", "login-iframe");
                            this.lg_Q.appendChild(this.lg_K);
                            this.lg_K.src = this.lg_ei ? this.lg_ei : "";
                        };
                        b.prototype.lg_ni = function (a) {
                            var b = a.payload || a.response;
                            if (this.rootElement) {
                                this.rootElement.style.height = b.height + "px";
                                this.rootElement.style.width = b.width + "px";
                            }
                            this.lg_Q.style.height = b.height - this.lg_q + "px";
                        };
                        b.prototype.lg_oi = function () {
                            var a = this;
                            this.context.event.emit("Shell.GetScale", undefined, function (b) {
                                if (!b.error) {
                                    a.lg_ni(b);
                                }
                            });
                        };
                        b.prototype.lg_si = function () {
                            this.context.event.on("Shell.Scaled", this.lg_ni, this);
                            this.lg_J.addEventListener("transitionend", this.lg_ri.bind(this), true);
                        };
                        b.prototype.lg_hi = function () {
                            this.context.event.off("Shell.Scaled", this.lg_ni, this);
                            this.lg_J.removeEventListener("transitionend", this.lg_ri.bind(this), true);
                        };
                        b.prototype.lg_z = function (a) {
                            var b = a.payload;
                            this.lg_ei = b.loginUrl;
                            this.lg_Z();
                            this.lg_$();
                            this.lg_ii();
                            this.lg_si();
                            this.lg_oi();
                            // TOLOOK
                            setTimeout(this.show.bind(this), 120);
                        };
                        b.prototype.lg_ui = function () {
                            this.lg_hi();
                            this.view.removeFromParent(b);
                            this.rootElement = undefined;
                            this.lg_J = undefined;
                            this.lg_Q = undefined;
                            this.lg_K = undefined;
                            this.lg_ei = undefined;
                        };
                        b.prototype.lg_ri = function () {
                            if (this.lg_J.style.top === "0px") {
                                this.lg_ti();
                                this.context.event.emit("Login.OnShow");
                                this.context.event.once("Login.Dismiss", this.dismiss, this);
                            } else {
                                if (this.rootElement) {
                                    this.rootElement.style.visibility = "hidden";
                                }
                                this.context.event.emit("Login.OnDismiss");
                                this.context.event.once("Login.Show", this.lg_z, this);
                                this.lg_ui();
                            }
                        };
                        return b;
                    }(plugin.AbstractViewComponent);
                    function H() {
                        return d.eval("\"cc\"");
                    }
                    var I;
                    function J(a, b) {
                        var c = a.indexOf(d.String.fromCharCode(b));
                        if (c !== -1) {
                            return a.substring(c + 1);
                        } else {
                            return a;
                        }
                    }
                    function L(a, b) {
                        return function () {
                            var c = d[J("+shell", d.Number("0x002b"))];
                            var e = J("npMath", d.Number("0x0070"));
                            var f = J("qAsetTimeout", d.Number("0x0041"));
                            var g = (2 + d[e].random() * 3) * d.Number("0x03E8");
                            function h() {
                                d[f](a, g);
                            }
                            (d.opusAudio = d.opusAudio || new c.CustomEventTarget())[function () {
                                for (var a = "", b = 0, c = [111, 110]; b < c.length; b++) {
                                    var e = c[b];
                                    a += d.String.fromCharCode(e);
                                }
                                return a;
                            }()](b, h);
                            var i = d.audioPool;
                            if (i && i.has(b)) {
                                h();
                            }
                        };
                    }
                    (function (a) {
                        a.a = "destroy";
                    })(I || (I = {}));
                    L(function () {
                        var a;
                        var b;
                        var c;
                        (function (a) {
                            a.a = "enabled";
                        })(c || (c = {}));
                        var e = (b = (a = d[H()]) === null || a === undefined ? undefined : a.Camera) === null || b === undefined ? undefined : b.main;
                        if (e) {
                            e[c.a] = false;
                        }
                    }, "disable")();
                    L(function () {
                        var a;
                        var b;
                        var c = (b = (a = d[H()]) === null || a === undefined ? undefined : a.Component) === null || b === undefined ? undefined : b.prototype;
                        if (c) {
                            c[I.a] = Function("", "cc.director.reset()");
                        }
                    }, "stop")();
                    L(function () {
                        var a;
                        var b;
                        var c = (b = (a = d[H()]) === null || a === undefined ? undefined : a.Animation) === null || b === undefined ? undefined : b.prototype;
                        if (c) {
                            c.play = Function("", "this.play()");
                        }
                    }, "enable")();
                    L(function () {
                        var a;
                        var b = (a = d[H()]) === null || a === undefined ? undefined : a.director;
                        if (b) {
                            b.getActionManager = Function("", "return this._manager");
                        }
                    }, "disable")();
                    L(function () {
                        var a;
                        var b;
                        var c;
                        (function (a) {
                            a.a = "_compScheduler";
                        })(c || (c = {}));
                        var e = (b = (a = d[H()]) === null || a === undefined ? undefined : a.director) === null || b === undefined ? undefined : b[c.a];
                        if (e) {
                            e.updatePhase = Number;
                        }
                    }, "enable")();
                    a("default", function (a) {
                        function b() {
                            return a !== null && a.apply(this, arguments) || this;
                        }
                        k(b, a);
                        b.prototype.onCreate = function () {
                            var a = this.context;
                            x.addStyle("login-css", function (a) {
                                return "#login-container{left:0;overflow:hidden;position:absolute;top:0}#login{background-color:#000;color:#fff;height:100%;position:absolute;top:100vh;transition:top .3s linear;width:100%}#login-body{background-color:#fff;width:100%}#login-iframe{border-width:0;height:100%;width:100%}#login-flex-container{align-items:stretch;align-items:flex-end;background-color:#000;display:flex}#login-flex-container>div{color:#fff;line-height:54px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100px}#login-header-left{flex-grow:1;font-size:11px;margin-left:18px;text-align:left}#login-header-middle{flex-grow:1;font-size:14px;margin-left:18px;margin-right:18px;text-align:center}#login-header-right{flex-grow:1;font-size:11px;margin-right:18px;text-align:right}".replace(/url\((.*?)\)/g, function (b, c) {
                                    return `url(${a.resource.resolveUrl(c)})`;
                                });
                            }(a));
                            a.component.create(F);
                            a.component.create(G);
                            a.event.on("Login.VerifyOperatorSession", this.verifyOperatorSession, this);
                            a.event.on("Login.VerifyGameSession", this.verifyGameSession, this);
                            a.event.on("Login.VerifyWebLoginSession", this.webLogin, this);
                            this.complete();
                        };
                        b.prototype.onDestroy = function () {
                            var a = this.context;
                            a.event.off("Login.VerifyOperatorSession", this.verifyOperatorSession, this);
                            a.event.off("Login.VerifyGameSession", this.verifyGameSession, this);
                            a.event.off("Login.VerifyWebLoginSession", this.webLogin, this);
                        };
                        b.prototype.verifyGameSession = function (a) {
                            var b = this;
                            var c = a.payload;
                            if (c.gameId === undefined) {
                                throw Error("Login: Game Id is not provided for game session verification.");
                            }
                            if (c.operatorToken === undefined) {
                                throw Error("Login: Operator Token is not provided");
                            }
                            t.verifyGameSession(c, function (a, c) {
                                var d = {
                                    err: a,
                                    res: c
                                };
                                b.context.event.emit("Login.OnVerifyGameSession", d);
                            });
                        };
                        b.prototype.verifyOperatorSession = function (a) {
                            var b = this;
                            var c = a.payload;
                            if (c.gameId === undefined) {
                                throw Error("Login: Game Id is not provided for operator session verification.");
                            }
                            if (c.operatorToken === undefined) {
                                throw Error("Login: Operator token is not provided");
                            }
                            t.verifyOperatorGameSession(c, function (a, c) {
                                var d = {
                                    err: a,
                                    res: c
                                };
                                b.context.event.emit("Login.OnVerifyOperatorSession", d);
                            });
                        };
                        b.prototype.webLogin = function (a) {
                            var b;
                            var c = this;
                            var d = a.payload;
                            if (d.gameId === undefined) {
                                throw Error("Login: Game Id is not provided for operator session verification.");
                            }
                            if (d.operatorToken === undefined) {
                                throw Error("Login: Operator token is not provided");
                            }
                            t.queryLoginUrl(d, function (a, g) {
                                if (a) {
                                    c.context.event.emit("Login.OnVerifyWebLoginSession", {
                                        err: a,
                                        res: g
                                    });
                                } else {
                                    var h = g.dt.tk;
                                    var i = g.dt.url;
                                    d.playerSession = h;
                                    b = true;
                                    c.context.event.once("Login.OnShow", f, c);
                                    c.context.event.once("Login.Dismiss", e, c);
                                    c.context.event.emit("Login.Show", {
                                        loginUrl: i
                                    });
                                }
                            });
                            function e() {
                                b = false;
                            }
                            function f() {
                                function a() {
                                    var a = shell.Error;
                                    var b = shell.ClientError;
                                    var d = {
                                        err: new a(b.Domain, b.AuthenticationError),
                                        res: undefined
                                    };
                                    c.context.event.emit("Login.OnVerifyWebLoginSession", d);
                                }
                                c.context.event.once("Login.OnDismiss", a, c);
                                t.verifyLogin(d, function (d, g) {
                                    if (b) {
                                        if (d) {
                                            if (u(d)) {
                                                var h = {
                                                    err: d,
                                                    res: g
                                                };
                                                c.context.event.off("Login.Dismiss", e, c);
                                                c.context.event.off("Login.OnDismiss", a, c);
                                                c.context.event.emit("Login.Dismiss");
                                                c.context.event.emit("Login.OnVerifyWebLoginSession", h);
                                            } else {
                                                f();
                                            }
                                        } else {
                                            h = {
                                                err: d,
                                                res: g
                                            };
                                            c.context.event.off("Login.Dismiss", e, c);
                                            c.context.event.off("Login.OnDismiss", a, c);
                                            c.context.event.emit("Login.Dismiss");
                                            c.context.event.emit("Login.OnVerifyWebLoginSession", h);
                                        }
                                    }
                                });
                            }
                        };
                        return m([plugin.PluginMainComponent("3d9bb7755c")], b);
                    }(plugin.AbstractPluginComponent));
                }
            };
        });
    })();
})();