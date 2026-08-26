var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
let dc, Xn, lj, mj, _s, RA, pj, _, cd, w, x, Jy;
let __tla = (async () => {
  var _t2, _e, _n, _a2, _t3, _e2, _n2, _b2, _t4, _c2, _t5, _e3, _n3, _a3, _i2, _o2, _r2, _$R_instances, s_fn, _d2, _t6, _e4, _t7, _e5, _n4, _tD_instances, a_fn, _f2, _t8, _e6, _n5, _g2, _t9, _e7, _n6, _a4, _i3, _o3, _r3, _s2, _h2;
  function Ow(t, e) {
    for (var n = 0; n < e.length; n++) {
      const i = e[n];
      if (typeof i != "string" && !Array.isArray(i)) {
        for (const a in i) if (a !== "default" && !(a in t)) {
          const s = Object.getOwnPropertyDescriptor(i, a);
          s && Object.defineProperty(t, a, s.get ? s : {
            enumerable: true,
            get: () => i[a]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver((a) => {
      for (const s of a) if (s.type === "childList") for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(a) {
      const s = {};
      return a.integrity && (s.integrity = a.integrity), a.referrerPolicy && (s.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? s.credentials = "include" : a.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
    }
    function i(a) {
      if (a.ep) return;
      a.ep = true;
      const s = n(a);
      fetch(a.href, s);
    }
  })();
  cd = function(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  };
  var Ky = {
    exports: {}
  }, Bl = {};
  var Nw = Symbol.for("react.transitional.element"), jw = Symbol.for("react.fragment");
  function Qy(t, e, n) {
    var i = null;
    if (n !== void 0 && (i = "" + n), e.key !== void 0 && (i = "" + e.key), "key" in e) {
      n = {};
      for (var a in e) a !== "key" && (n[a] = e[a]);
    } else n = e;
    return e = n.ref, {
      $$typeof: Nw,
      type: t,
      key: i,
      ref: e !== void 0 ? e : null,
      props: n
    };
  }
  Bl.Fragment = jw;
  Bl.jsx = Qy;
  Bl.jsxs = Qy;
  Ky.exports = Bl;
  let Zy, Ul, $y, Iy;
  w = Ky.exports;
  Zy = {
    exports: {}
  };
  Ul = {};
  $y = {
    exports: {}
  };
  Iy = {};
  (function(t) {
    function e(R, O) {
      var D = R.length;
      R.push(O);
      t: for (; 0 < D; ) {
        var N = D - 1 >>> 1, U = R[N];
        if (0 < a(U, O)) R[N] = O, R[D] = U, D = N;
        else break t;
      }
    }
    function n(R) {
      return R.length === 0 ? null : R[0];
    }
    function i(R) {
      if (R.length === 0) return null;
      var O = R[0], D = R.pop();
      if (D !== O) {
        R[0] = D;
        t: for (var N = 0, U = R.length, ft = U >>> 1; N < ft; ) {
          var F = 2 * (N + 1) - 1, Z = R[F], $ = F + 1, Tt = R[$];
          if (0 > a(Z, D)) $ < U && 0 > a(Tt, Z) ? (R[N] = Tt, R[$] = D, N = $) : (R[N] = Z, R[F] = D, N = F);
          else if ($ < U && 0 > a(Tt, D)) R[N] = Tt, R[$] = D, N = $;
          else break t;
        }
      }
      return O;
    }
    function a(R, O) {
      var D = R.sortIndex - O.sortIndex;
      return D !== 0 ? D : R.id - O.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var s = performance;
      t.unstable_now = function() {
        return s.now();
      };
    } else {
      var o = Date, r = o.now();
      t.unstable_now = function() {
        return o.now() - r;
      };
    }
    var l = [], u = [], c = 1, f = null, h = 3, d = false, v = false, y = false, b = false, p = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
    function S(R) {
      for (var O = n(u); O !== null; ) {
        if (O.callback === null) i(u);
        else if (O.startTime <= R) i(u), O.sortIndex = O.expirationTime, e(l, O);
        else break;
        O = n(u);
      }
    }
    function T(R) {
      if (y = false, S(R), !v) if (n(l) !== null) v = true, A || (A = true, V());
      else {
        var O = n(u);
        O !== null && X(T, O.startTime - R);
      }
    }
    var A = false, E = -1, C = 5, j = -1;
    function z() {
      return b ? true : !(t.unstable_now() - j < C);
    }
    function P() {
      if (b = false, A) {
        var R = t.unstable_now();
        j = R;
        var O = true;
        try {
          t: {
            v = false, y && (y = false, m(E), E = -1), d = true;
            var D = h;
            try {
              e: {
                for (S(R), f = n(l); f !== null && !(f.expirationTime > R && z()); ) {
                  var N = f.callback;
                  if (typeof N == "function") {
                    f.callback = null, h = f.priorityLevel;
                    var U = N(f.expirationTime <= R);
                    if (R = t.unstable_now(), typeof U == "function") {
                      f.callback = U, S(R), O = true;
                      break e;
                    }
                    f === n(l) && i(l), S(R);
                  } else i(l);
                  f = n(l);
                }
                if (f !== null) O = true;
                else {
                  var ft = n(u);
                  ft !== null && X(T, ft.startTime - R), O = false;
                }
              }
              break t;
            } finally {
              f = null, h = D, d = false;
            }
            O = void 0;
          }
        } finally {
          O ? V() : A = false;
        }
      }
    }
    var V;
    if (typeof g == "function") V = function() {
      g(P);
    };
    else if (typeof MessageChannel < "u") {
      var J = new MessageChannel(), L = J.port2;
      J.port1.onmessage = P, V = function() {
        L.postMessage(null);
      };
    } else V = function() {
      p(P, 0);
    };
    function X(R, O) {
      E = p(function() {
        R(t.unstable_now());
      }, O);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, t.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < R ? Math.floor(1e3 / R) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return h;
    }, t.unstable_next = function(R) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = h;
      }
      var D = h;
      h = O;
      try {
        return R();
      } finally {
        h = D;
      }
    }, t.unstable_requestPaint = function() {
      b = true;
    }, t.unstable_runWithPriority = function(R, O) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var D = h;
      h = R;
      try {
        return O();
      } finally {
        h = D;
      }
    }, t.unstable_scheduleCallback = function(R, O, D) {
      var N = t.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? N + D : N) : D = N, R) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return U = D + U, R = {
        id: c++,
        callback: O,
        priorityLevel: R,
        startTime: D,
        expirationTime: U,
        sortIndex: -1
      }, D > N ? (R.sortIndex = D, e(u, R), n(l) === null && R === n(u) && (y ? (m(E), E = -1) : y = true, X(T, D - N))) : (R.sortIndex = U, e(l, R), v || d || (v = true, A || (A = true, V()))), R;
    }, t.unstable_shouldYield = z, t.unstable_wrapCallback = function(R) {
      var O = h;
      return function() {
        var D = h;
        h = O;
        try {
          return R.apply(this, arguments);
        } finally {
          h = D;
        }
      };
    };
  })(Iy);
  $y.exports = Iy;
  Jy = $y.exports;
  lj = cd(Jy);
  var Wy = {
    exports: {}
  }, G = {};
  var fd = Symbol.for("react.transitional.element"), zw = Symbol.for("react.portal"), _w = Symbol.for("react.fragment"), Lw = Symbol.for("react.strict_mode"), Vw = Symbol.for("react.profiler"), Bw = Symbol.for("react.consumer"), Uw = Symbol.for("react.context"), Pw = Symbol.for("react.forward_ref"), Hw = Symbol.for("react.suspense"), kw = Symbol.for("react.memo"), tv = Symbol.for("react.lazy"), Gw = Symbol.for("react.activity"), mm = Symbol.iterator;
  function Yw(t) {
    return t === null || typeof t != "object" ? null : (t = mm && t[mm] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ev = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, nv = Object.assign, iv = {};
  function ns(t, e, n) {
    this.props = t, this.context = e, this.refs = iv, this.updater = n || ev;
  }
  ns.prototype.isReactComponent = {};
  ns.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState");
  };
  ns.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function av() {
  }
  av.prototype = ns.prototype;
  function dd(t, e, n) {
    this.props = t, this.context = e, this.refs = iv, this.updater = n || ev;
  }
  var hd = dd.prototype = new av();
  hd.constructor = dd;
  nv(hd, ns.prototype);
  hd.isPureReactComponent = true;
  var pm = Array.isArray;
  function Oc() {
  }
  var pt = {
    H: null,
    A: null,
    T: null,
    S: null
  }, sv = Object.prototype.hasOwnProperty;
  function md(t, e, n) {
    var i = n.ref;
    return {
      $$typeof: fd,
      type: t,
      key: e,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  function qw(t, e) {
    return md(t.type, e, t.props);
  }
  function pd(t) {
    return typeof t == "object" && t !== null && t.$$typeof === fd;
  }
  function Xw(t) {
    var e = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
      return e[n];
    });
  }
  var gm = /\/+/g;
  function xu(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Xw("" + t.key) : e.toString(36);
  }
  function Fw(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(Oc, Oc) : (t.status = "pending", t.then(function(e) {
          t.status === "pending" && (t.status = "fulfilled", t.value = e);
        }, function(e) {
          t.status === "pending" && (t.status = "rejected", t.reason = e);
        })), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function ca(t, e, n, i, a) {
    var s = typeof t;
    (s === "undefined" || s === "boolean") && (t = null);
    var o = false;
    if (t === null) o = true;
    else switch (s) {
      case "bigint":
      case "string":
      case "number":
        o = true;
        break;
      case "object":
        switch (t.$$typeof) {
          case fd:
          case zw:
            o = true;
            break;
          case tv:
            return o = t._init, ca(o(t._payload), e, n, i, a);
        }
    }
    if (o) return a = a(t), o = i === "" ? "." + xu(t, 0) : i, pm(a) ? (n = "", o != null && (n = o.replace(gm, "$&/") + "/"), ca(a, e, n, "", function(u) {
      return u;
    })) : a != null && (pd(a) && (a = qw(a, n + (a.key == null || t && t.key === a.key ? "" : ("" + a.key).replace(gm, "$&/") + "/") + o)), e.push(a)), 1;
    o = 0;
    var r = i === "" ? "." : i + ":";
    if (pm(t)) for (var l = 0; l < t.length; l++) i = t[l], s = r + xu(i, l), o += ca(i, e, n, s, a);
    else if (l = Yw(t), typeof l == "function") for (t = l.call(t), l = 0; !(i = t.next()).done; ) i = i.value, s = r + xu(i, l++), o += ca(i, e, n, s, a);
    else if (s === "object") {
      if (typeof t.then == "function") return ca(Fw(t), e, n, i, a);
      throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    }
    return o;
  }
  function Zo(t, e, n) {
    if (t == null) return t;
    var i = [], a = 0;
    return ca(t, i, "", "", function(s) {
      return e.call(n, s, a++);
    }), i;
  }
  function Kw(t) {
    if (t._status === -1) {
      var e = t._result;
      e = e(), e.then(function(n) {
        (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n);
      }, function(n) {
        (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n);
      }), t._status === -1 && (t._status = 0, t._result = e);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var ym = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Qw = {
    map: Zo,
    forEach: function(t, e, n) {
      Zo(t, function() {
        e.apply(this, arguments);
      }, n);
    },
    count: function(t) {
      var e = 0;
      return Zo(t, function() {
        e++;
      }), e;
    },
    toArray: function(t) {
      return Zo(t, function(e) {
        return e;
      }) || [];
    },
    only: function(t) {
      if (!pd(t)) throw Error("React.Children.only expected to receive a single React element child.");
      return t;
    }
  };
  G.Activity = Gw;
  G.Children = Qw;
  G.Component = ns;
  G.Fragment = _w;
  G.Profiler = Vw;
  G.PureComponent = dd;
  G.StrictMode = Lw;
  G.Suspense = Hw;
  G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = pt;
  G.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return pt.H.useMemoCache(t);
    }
  };
  G.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  };
  G.cacheSignal = function() {
    return null;
  };
  G.cloneElement = function(t, e, n) {
    if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
    var i = nv({}, t.props), a = t.key;
    if (e != null) for (s in e.key !== void 0 && (a = "" + e.key), e) !sv.call(e, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && e.ref === void 0 || (i[s] = e[s]);
    var s = arguments.length - 2;
    if (s === 1) i.children = n;
    else if (1 < s) {
      for (var o = Array(s), r = 0; r < s; r++) o[r] = arguments[r + 2];
      i.children = o;
    }
    return md(t.type, a, i);
  };
  G.createContext = function(t) {
    return t = {
      $$typeof: Uw,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: Bw,
      _context: t
    }, t;
  };
  G.createElement = function(t, e, n) {
    var i, a = {}, s = null;
    if (e != null) for (i in e.key !== void 0 && (s = "" + e.key), e) sv.call(e, i) && i !== "key" && i !== "__self" && i !== "__source" && (a[i] = e[i]);
    var o = arguments.length - 2;
    if (o === 1) a.children = n;
    else if (1 < o) {
      for (var r = Array(o), l = 0; l < o; l++) r[l] = arguments[l + 2];
      a.children = r;
    }
    if (t && t.defaultProps) for (i in o = t.defaultProps, o) a[i] === void 0 && (a[i] = o[i]);
    return md(t, s, a);
  };
  G.createRef = function() {
    return {
      current: null
    };
  };
  G.forwardRef = function(t) {
    return {
      $$typeof: Pw,
      render: t
    };
  };
  G.isValidElement = pd;
  G.lazy = function(t) {
    return {
      $$typeof: tv,
      _payload: {
        _status: -1,
        _result: t
      },
      _init: Kw
    };
  };
  G.memo = function(t, e) {
    return {
      $$typeof: kw,
      type: t,
      compare: e === void 0 ? null : e
    };
  };
  G.startTransition = function(t) {
    var e = pt.T, n = {};
    pt.T = n;
    try {
      var i = t(), a = pt.S;
      a !== null && a(n, i), typeof i == "object" && i !== null && typeof i.then == "function" && i.then(Oc, ym);
    } catch (s) {
      ym(s);
    } finally {
      e !== null && n.types !== null && (e.types = n.types), pt.T = e;
    }
  };
  G.unstable_useCacheRefresh = function() {
    return pt.H.useCacheRefresh();
  };
  G.use = function(t) {
    return pt.H.use(t);
  };
  G.useActionState = function(t, e, n) {
    return pt.H.useActionState(t, e, n);
  };
  G.useCallback = function(t, e) {
    return pt.H.useCallback(t, e);
  };
  G.useContext = function(t) {
    return pt.H.useContext(t);
  };
  G.useDebugValue = function() {
  };
  G.useDeferredValue = function(t, e) {
    return pt.H.useDeferredValue(t, e);
  };
  G.useEffect = function(t, e) {
    return pt.H.useEffect(t, e);
  };
  G.useEffectEvent = function(t) {
    return pt.H.useEffectEvent(t);
  };
  G.useId = function() {
    return pt.H.useId();
  };
  G.useImperativeHandle = function(t, e, n) {
    return pt.H.useImperativeHandle(t, e, n);
  };
  G.useInsertionEffect = function(t, e) {
    return pt.H.useInsertionEffect(t, e);
  };
  G.useLayoutEffect = function(t, e) {
    return pt.H.useLayoutEffect(t, e);
  };
  G.useMemo = function(t, e) {
    return pt.H.useMemo(t, e);
  };
  G.useOptimistic = function(t, e) {
    return pt.H.useOptimistic(t, e);
  };
  G.useReducer = function(t, e, n) {
    return pt.H.useReducer(t, e, n);
  };
  G.useRef = function(t) {
    return pt.H.useRef(t);
  };
  G.useState = function(t) {
    return pt.H.useState(t);
  };
  G.useSyncExternalStore = function(t, e, n) {
    return pt.H.useSyncExternalStore(t, e, n);
  };
  G.useTransition = function() {
    return pt.H.useTransition();
  };
  G.version = "19.2.5";
  Wy.exports = G;
  x = Wy.exports;
  let ov;
  _ = cd(x);
  ov = Ow({
    __proto__: null,
    default: _
  }, [
    x
  ]);
  var rv = {
    exports: {}
  }, It = {};
  var Zw = x;
  function lv(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ln() {
  }
  var Qt = {
    d: {
      f: Ln,
      r: function() {
        throw Error(lv(522));
      },
      D: Ln,
      C: Ln,
      L: Ln,
      m: Ln,
      X: Ln,
      S: Ln,
      M: Ln
    },
    p: 0,
    findDOMNode: null
  }, $w = Symbol.for("react.portal");
  function Iw(t, e, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: $w,
      key: i == null ? null : "" + i,
      children: t,
      containerInfo: e,
      implementation: n
    };
  }
  var Vs = Zw.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Pl(t, e) {
    if (t === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Qt;
  It.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(lv(299));
    return Iw(t, e, null, n);
  };
  It.flushSync = function(t) {
    var e = Vs.T, n = Qt.p;
    try {
      if (Vs.T = null, Qt.p = 2, t) return t();
    } finally {
      Vs.T = e, Qt.p = n, Qt.d.f();
    }
  };
  It.preconnect = function(t, e) {
    typeof t == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, Qt.d.C(t, e));
  };
  It.prefetchDNS = function(t) {
    typeof t == "string" && Qt.d.D(t);
  };
  It.preinit = function(t, e) {
    if (typeof t == "string" && e && typeof e.as == "string") {
      var n = e.as, i = Pl(n, e.crossOrigin), a = typeof e.integrity == "string" ? e.integrity : void 0, s = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
      n === "style" ? Qt.d.S(t, typeof e.precedence == "string" ? e.precedence : void 0, {
        crossOrigin: i,
        integrity: a,
        fetchPriority: s
      }) : n === "script" && Qt.d.X(t, {
        crossOrigin: i,
        integrity: a,
        fetchPriority: s,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      });
    }
  };
  It.preinitModule = function(t, e) {
    if (typeof t == "string") if (typeof e == "object" && e !== null) {
      if (e.as == null || e.as === "script") {
        var n = Pl(e.as, e.crossOrigin);
        Qt.d.M(t, {
          crossOrigin: n,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    } else e == null && Qt.d.M(t);
  };
  It.preload = function(t, e) {
    if (typeof t == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
      var n = e.as, i = Pl(n, e.crossOrigin);
      Qt.d.L(t, n, {
        crossOrigin: i,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0,
        type: typeof e.type == "string" ? e.type : void 0,
        fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
        referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
        imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
        imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
        media: typeof e.media == "string" ? e.media : void 0
      });
    }
  };
  It.preloadModule = function(t, e) {
    if (typeof t == "string") if (e) {
      var n = Pl(e.as, e.crossOrigin);
      Qt.d.m(t, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: n,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      });
    } else Qt.d.m(t);
  };
  It.requestFormReset = function(t) {
    Qt.d.r(t);
  };
  It.unstable_batchedUpdates = function(t, e) {
    return t(e);
  };
  It.useFormState = function(t, e, n) {
    return Vs.H.useFormState(t, e, n);
  };
  It.useFormStatus = function() {
    return Vs.H.useHostTransitionStatus();
  };
  It.version = "19.2.5";
  function uv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uv);
    } catch (t) {
      console.error(t);
    }
  }
  uv(), rv.exports = It;
  var Mo = rv.exports;
  const cv = cd(Mo);
  var Lt = Jy, fv = x, Jw = Mo;
  function M(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function dv(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function Ro(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, e.flags & 4098 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function hv(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function mv(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function vm(t) {
    if (Ro(t) !== t) throw Error(M(188));
  }
  function Ww(t) {
    var e = t.alternate;
    if (!e) {
      if (e = Ro(t), e === null) throw Error(M(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var a = n.return;
      if (a === null) break;
      var s = a.alternate;
      if (s === null) {
        if (i = a.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (a.child === s.child) {
        for (s = a.child; s; ) {
          if (s === n) return vm(a), t;
          if (s === i) return vm(a), e;
          s = s.sibling;
        }
        throw Error(M(188));
      }
      if (n.return !== i.return) n = a, i = s;
      else {
        for (var o = false, r = a.child; r; ) {
          if (r === n) {
            o = true, n = a, i = s;
            break;
          }
          if (r === i) {
            o = true, i = a, n = s;
            break;
          }
          r = r.sibling;
        }
        if (!o) {
          for (r = s.child; r; ) {
            if (r === n) {
              o = true, n = s, i = a;
              break;
            }
            if (r === i) {
              o = true, i = s, n = a;
              break;
            }
            r = r.sibling;
          }
          if (!o) throw Error(M(189));
        }
      }
      if (n.alternate !== i) throw Error(M(190));
    }
    if (n.tag !== 3) throw Error(M(188));
    return n.stateNode.current === n ? t : e;
  }
  function pv(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = pv(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var gt = Object.assign, tT = Symbol.for("react.element"), $o = Symbol.for("react.transitional.element"), Rs = Symbol.for("react.portal"), ma = Symbol.for("react.fragment"), gv = Symbol.for("react.strict_mode"), Nc = Symbol.for("react.profiler"), yv = Symbol.for("react.consumer"), gn = Symbol.for("react.context"), gd = Symbol.for("react.forward_ref"), jc = Symbol.for("react.suspense"), zc = Symbol.for("react.suspense_list"), yd = Symbol.for("react.memo"), Pn = Symbol.for("react.lazy"), _c = Symbol.for("react.activity"), eT = Symbol.for("react.memo_cache_sentinel"), bm = Symbol.iterator;
  function vs(t) {
    return t === null || typeof t != "object" ? null : (t = bm && t[bm] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var nT = Symbol.for("react.client.reference");
  function Lc(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === nT ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ma:
        return "Fragment";
      case Nc:
        return "Profiler";
      case gv:
        return "StrictMode";
      case jc:
        return "Suspense";
      case zc:
        return "SuspenseList";
      case _c:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case Rs:
        return "Portal";
      case gn:
        return t.displayName || "Context";
      case yv:
        return (t._context.displayName || "Context") + ".Consumer";
      case gd:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case yd:
        return e = t.displayName || null, e !== null ? e : Lc(t.type) || "Memo";
      case Pn:
        e = t._payload, t = t._init;
        try {
          return Lc(t(e));
        } catch {
        }
    }
    return null;
  }
  var Ds = Array.isArray, H = fv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, et = Jw.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Bi = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, Vc = [], pa = -1;
  function an(t) {
    return {
      current: t
    };
  }
  function Ut(t) {
    0 > pa || (t.current = Vc[pa], Vc[pa] = null, pa--);
  }
  function ut(t, e) {
    pa++, Vc[pa] = t.current, t.current = e;
  }
  var Je = an(null), eo = an(null), Wn = an(null), Fr = an(null);
  function Kr(t, e) {
    switch (ut(Wn, e), ut(eo, t), ut(Je, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ap(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = Ap(e), t = Bb(e, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    Ut(Je), ut(Je, t);
  }
  function ka() {
    Ut(Je), Ut(eo), Ut(Wn);
  }
  function Bc(t) {
    t.memoizedState !== null && ut(Fr, t);
    var e = Je.current, n = Bb(e, t.type);
    e !== n && (ut(eo, t), ut(Je, n));
  }
  function Qr(t) {
    eo.current === t && (Ut(Je), Ut(eo)), Fr.current === t && (Ut(Fr), ho._currentValue = Bi);
  }
  var Su, xm;
  function Oi(t) {
    if (Su === void 0) try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Su = e && e[1] || "", xm = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Su + t + xm;
  }
  var wu = false;
  function Tu(t, e) {
    if (!t || wu) return "";
    wu = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var f = function() {
                throw Error();
              };
              if (Object.defineProperty(f.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(f, []);
                } catch (d) {
                  var h = d;
                }
                Reflect.construct(t, [], f);
              } else {
                try {
                  f.call();
                } catch (d) {
                  h = d;
                }
                t.call(f.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (d) {
                h = d;
              }
              (f = t()) && typeof f.catch == "function" && f.catch(function() {
              });
            }
          } catch (d) {
            if (d && h && typeof d.stack == "string") return [
              d.stack,
              h.stack
            ];
          }
          return [
            null,
            null
          ];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
      a && a.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var s = i.DetermineComponentFrameRoot(), o = s[0], r = s[1];
      if (o && r) {
        var l = o.split(`
`), u = r.split(`
`);
        for (a = i = 0; i < l.length && !l[i].includes("DetermineComponentFrameRoot"); ) i++;
        for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot"); ) a++;
        if (i === l.length || a === u.length) for (i = l.length - 1, a = u.length - 1; 1 <= i && 0 <= a && l[i] !== u[a]; ) a--;
        for (; 1 <= i && 0 <= a; i--, a--) if (l[i] !== u[a]) {
          if (i !== 1 || a !== 1) do
            if (i--, a--, 0 > a || l[i] !== u[a]) {
              var c = `
` + l[i].replace(" at new ", " at ");
              return t.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", t.displayName)), c;
            }
          while (1 <= i && 0 <= a);
          break;
        }
      }
    } finally {
      wu = false, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Oi(n) : "";
  }
  function iT(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Oi(t.type);
      case 16:
        return Oi("Lazy");
      case 13:
        return t.child !== e && e !== null ? Oi("Suspense Fallback") : Oi("Suspense");
      case 19:
        return Oi("SuspenseList");
      case 0:
      case 15:
        return Tu(t.type, false);
      case 11:
        return Tu(t.type.render, false);
      case 1:
        return Tu(t.type, true);
      case 31:
        return Oi("Activity");
      default:
        return "";
    }
  }
  function Sm(t) {
    try {
      var e = "", n = null;
      do
        e += iT(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Uc = Object.prototype.hasOwnProperty, vd = Lt.unstable_scheduleCallback, Eu = Lt.unstable_cancelCallback, aT = Lt.unstable_shouldYield, sT = Lt.unstable_requestPaint, de = Lt.unstable_now, oT = Lt.unstable_getCurrentPriorityLevel, vv = Lt.unstable_ImmediatePriority, bv = Lt.unstable_UserBlockingPriority, Zr = Lt.unstable_NormalPriority, rT = Lt.unstable_LowPriority, xv = Lt.unstable_IdlePriority, lT = Lt.log, uT = Lt.unstable_setDisableYieldValue, Do = null, he = null;
  function Fn(t) {
    if (typeof lT == "function" && uT(t), he && typeof he.setStrictMode == "function") try {
      he.setStrictMode(Do, t);
    } catch {
    }
  }
  var me = Math.clz32 ? Math.clz32 : dT, cT = Math.log, fT = Math.LN2;
  function dT(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (cT(t) / fT | 0) | 0;
  }
  var Io = 256, Jo = 262144, Wo = 4194304;
  function Ni(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Hl(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var a = 0, s = t.suspendedLanes, o = t.pingedLanes;
    t = t.warmLanes;
    var r = i & 134217727;
    return r !== 0 ? (i = r & ~s, i !== 0 ? a = Ni(i) : (o &= r, o !== 0 ? a = Ni(o) : n || (n = r & ~t, n !== 0 && (a = Ni(n))))) : (r = i & ~s, r !== 0 ? a = Ni(r) : o !== 0 ? a = Ni(o) : n || (n = i & ~t, n !== 0 && (a = Ni(n)))), a === 0 ? 0 : e !== 0 && e !== a && !(e & s) && (s = a & -a, n = e & -e, s >= n || s === 32 && (n & 4194048) !== 0) ? e : a;
  }
  function Oo(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function hT(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Sv() {
    var t = Wo;
    return Wo <<= 1, !(Wo & 62914560) && (Wo = 4194304), t;
  }
  function Au(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function No(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function mT(t, e, n, i, a, s) {
    var o = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var r = t.entanglements, l = t.expirationTimes, u = t.hiddenUpdates;
    for (n = o & ~n; 0 < n; ) {
      var c = 31 - me(n), f = 1 << c;
      r[c] = 0, l[c] = -1;
      var h = u[c];
      if (h !== null) for (u[c] = null, c = 0; c < h.length; c++) {
        var d = h[c];
        d !== null && (d.lane &= -536870913);
      }
      n &= ~f;
    }
    i !== 0 && wv(t, i, 0), s !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(o & ~e));
  }
  function wv(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var i = 31 - me(e);
    t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930;
  }
  function Tv(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var i = 31 - me(n), a = 1 << i;
      a & e | t[i] & e && (t[i] |= e), n &= ~a;
    }
  }
  function Ev(t, e) {
    var n = e & -e;
    return n = n & 42 ? 1 : bd(n), n & (t.suspendedLanes | e) ? 0 : n;
  }
  function bd(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function xd(t) {
    return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function Av() {
    var t = et.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Qb(t.type));
  }
  function wm(t, e) {
    var n = et.p;
    try {
      return et.p = t, e();
    } finally {
      et.p = n;
    }
  }
  var bi = Math.random().toString(36).slice(2), kt = "__reactFiber$" + bi, ae = "__reactProps$" + bi, is = "__reactContainer$" + bi, Pc = "__reactEvents$" + bi, pT = "__reactListeners$" + bi, gT = "__reactHandles$" + bi, Tm = "__reactResources$" + bi, jo = "__reactMarker$" + bi;
  function Sd(t) {
    delete t[kt], delete t[ae], delete t[Pc], delete t[pT], delete t[gT];
  }
  function ga(t) {
    var e = t[kt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[is] || n[kt]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = Op(t); t !== null; ) {
          if (n = t[kt]) return n;
          t = Op(t);
        }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function as(t) {
    if (t = t[kt] || t[is]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Os(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(M(33));
  }
  function Na(t) {
    var e = t[Tm];
    return e || (e = t[Tm] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), e;
  }
  function Bt(t) {
    t[jo] = true;
  }
  var Cv = /* @__PURE__ */ new Set(), Mv = {};
  function Zi(t, e) {
    Ga(t, e), Ga(t + "Capture", e);
  }
  function Ga(t, e) {
    for (Mv[t] = e, t = 0; t < e.length; t++) Cv.add(e[t]);
  }
  var yT = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Em = {}, Am = {};
  function vT(t) {
    return Uc.call(Am, t) ? true : Uc.call(Em, t) ? false : yT.test(t) ? Am[t] = true : (Em[t] = true, false);
  }
  function Sr(t, e, n) {
    if (vT(e)) if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var i = e.toLowerCase().slice(0, 5);
          if (i !== "data-" && i !== "aria-") {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, "" + n);
    }
  }
  function tr(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function ln(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  function Se(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Rv(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function bT(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var a = i.get, s = i.set;
      return Object.defineProperty(t, e, {
        configurable: true,
        get: function() {
          return a.call(this);
        },
        set: function(o) {
          n = "" + o, s.call(this, o);
        }
      }), Object.defineProperty(t, e, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(o) {
          n = "" + o;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Hc(t) {
    if (!t._valueTracker) {
      var e = Rv(t) ? "checked" : "value";
      t._valueTracker = bT(t, e, "" + t[e]);
    }
  }
  function Dv(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var n = e.getValue(), i = "";
    return t && (i = Rv(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), true) : false;
  }
  function $r(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var xT = /[\n"\\]/g;
  function Ee(t) {
    return t.replace(xT, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function kc(t, e, n, i, a, s, o, r) {
    t.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.type = o : t.removeAttribute("type"), e != null ? o === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Se(e)) : t.value !== "" + Se(e) && (t.value = "" + Se(e)) : o !== "submit" && o !== "reset" || t.removeAttribute("value"), e != null ? Gc(t, o, Se(e)) : n != null ? Gc(t, o, Se(n)) : i != null && t.removeAttribute("value"), a == null && s != null && (t.defaultChecked = !!s), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.name = "" + Se(r) : t.removeAttribute("name");
  }
  function Ov(t, e, n, i, a, s, o, r) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), e != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || e != null)) {
        Hc(t);
        return;
      }
      n = n != null ? "" + Se(n) : "", e = e != null ? "" + Se(e) : n, r || e === t.value || (t.value = e), t.defaultValue = e;
    }
    i = i ?? a, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = r ? t.checked : !!i, t.defaultChecked = !!i, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.name = o), Hc(t);
  }
  function Gc(t, e, n) {
    e === "number" && $r(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function ja(t, e, n, i) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < n.length; a++) e["$" + n[a]] = true;
      for (n = 0; n < t.length; n++) a = e.hasOwnProperty("$" + t[n].value), t[n].selected !== a && (t[n].selected = a), a && i && (t[n].defaultSelected = true);
    } else {
      for (n = "" + Se(n), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === n) {
          t[a].selected = true, i && (t[a].defaultSelected = true);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = true);
    }
  }
  function Nv(t, e, n) {
    if (e != null && (e = "" + Se(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Se(n) : "";
  }
  function jv(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(M(92));
        if (Ds(i)) {
          if (1 < i.length) throw Error(M(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), e = n;
    }
    n = Se(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i), Hc(t);
  }
  function Ya(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var ST = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Cm(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || ST.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function zv(t, e, n) {
    if (e != null && typeof e != "object") throw Error(M(62));
    if (t = t.style, n != null) {
      for (var i in n) !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
      for (var a in e) i = e[a], e.hasOwnProperty(a) && n[a] !== i && Cm(t, a, i);
    } else for (var s in e) e.hasOwnProperty(s) && Cm(t, s, e[s]);
  }
  function wd(t) {
    if (t.indexOf("-") === -1) return false;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wT = /* @__PURE__ */ new Map([
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ],
    [
      "crossOrigin",
      "crossorigin"
    ],
    [
      "accentHeight",
      "accent-height"
    ],
    [
      "alignmentBaseline",
      "alignment-baseline"
    ],
    [
      "arabicForm",
      "arabic-form"
    ],
    [
      "baselineShift",
      "baseline-shift"
    ],
    [
      "capHeight",
      "cap-height"
    ],
    [
      "clipPath",
      "clip-path"
    ],
    [
      "clipRule",
      "clip-rule"
    ],
    [
      "colorInterpolation",
      "color-interpolation"
    ],
    [
      "colorInterpolationFilters",
      "color-interpolation-filters"
    ],
    [
      "colorProfile",
      "color-profile"
    ],
    [
      "colorRendering",
      "color-rendering"
    ],
    [
      "dominantBaseline",
      "dominant-baseline"
    ],
    [
      "enableBackground",
      "enable-background"
    ],
    [
      "fillOpacity",
      "fill-opacity"
    ],
    [
      "fillRule",
      "fill-rule"
    ],
    [
      "floodColor",
      "flood-color"
    ],
    [
      "floodOpacity",
      "flood-opacity"
    ],
    [
      "fontFamily",
      "font-family"
    ],
    [
      "fontSize",
      "font-size"
    ],
    [
      "fontSizeAdjust",
      "font-size-adjust"
    ],
    [
      "fontStretch",
      "font-stretch"
    ],
    [
      "fontStyle",
      "font-style"
    ],
    [
      "fontVariant",
      "font-variant"
    ],
    [
      "fontWeight",
      "font-weight"
    ],
    [
      "glyphName",
      "glyph-name"
    ],
    [
      "glyphOrientationHorizontal",
      "glyph-orientation-horizontal"
    ],
    [
      "glyphOrientationVertical",
      "glyph-orientation-vertical"
    ],
    [
      "horizAdvX",
      "horiz-adv-x"
    ],
    [
      "horizOriginX",
      "horiz-origin-x"
    ],
    [
      "imageRendering",
      "image-rendering"
    ],
    [
      "letterSpacing",
      "letter-spacing"
    ],
    [
      "lightingColor",
      "lighting-color"
    ],
    [
      "markerEnd",
      "marker-end"
    ],
    [
      "markerMid",
      "marker-mid"
    ],
    [
      "markerStart",
      "marker-start"
    ],
    [
      "overlinePosition",
      "overline-position"
    ],
    [
      "overlineThickness",
      "overline-thickness"
    ],
    [
      "paintOrder",
      "paint-order"
    ],
    [
      "panose-1",
      "panose-1"
    ],
    [
      "pointerEvents",
      "pointer-events"
    ],
    [
      "renderingIntent",
      "rendering-intent"
    ],
    [
      "shapeRendering",
      "shape-rendering"
    ],
    [
      "stopColor",
      "stop-color"
    ],
    [
      "stopOpacity",
      "stop-opacity"
    ],
    [
      "strikethroughPosition",
      "strikethrough-position"
    ],
    [
      "strikethroughThickness",
      "strikethrough-thickness"
    ],
    [
      "strokeDasharray",
      "stroke-dasharray"
    ],
    [
      "strokeDashoffset",
      "stroke-dashoffset"
    ],
    [
      "strokeLinecap",
      "stroke-linecap"
    ],
    [
      "strokeLinejoin",
      "stroke-linejoin"
    ],
    [
      "strokeMiterlimit",
      "stroke-miterlimit"
    ],
    [
      "strokeOpacity",
      "stroke-opacity"
    ],
    [
      "strokeWidth",
      "stroke-width"
    ],
    [
      "textAnchor",
      "text-anchor"
    ],
    [
      "textDecoration",
      "text-decoration"
    ],
    [
      "textRendering",
      "text-rendering"
    ],
    [
      "transformOrigin",
      "transform-origin"
    ],
    [
      "underlinePosition",
      "underline-position"
    ],
    [
      "underlineThickness",
      "underline-thickness"
    ],
    [
      "unicodeBidi",
      "unicode-bidi"
    ],
    [
      "unicodeRange",
      "unicode-range"
    ],
    [
      "unitsPerEm",
      "units-per-em"
    ],
    [
      "vAlphabetic",
      "v-alphabetic"
    ],
    [
      "vHanging",
      "v-hanging"
    ],
    [
      "vIdeographic",
      "v-ideographic"
    ],
    [
      "vMathematical",
      "v-mathematical"
    ],
    [
      "vectorEffect",
      "vector-effect"
    ],
    [
      "vertAdvY",
      "vert-adv-y"
    ],
    [
      "vertOriginX",
      "vert-origin-x"
    ],
    [
      "vertOriginY",
      "vert-origin-y"
    ],
    [
      "wordSpacing",
      "word-spacing"
    ],
    [
      "writingMode",
      "writing-mode"
    ],
    [
      "xmlnsXlink",
      "xmlns:xlink"
    ],
    [
      "xHeight",
      "x-height"
    ]
  ]), TT = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wr(t) {
    return TT.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function yn() {
  }
  var Yc = null;
  function Td(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ya = null, za = null;
  function Mm(t) {
    var e = as(t);
    if (e && (t = e.stateNode)) {
      var n = t[ae] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (kc(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Ee("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var a = i[ae] || null;
                if (!a) throw Error(M(90));
                kc(i, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
              }
            }
            for (e = 0; e < n.length; e++) i = n[e], i.form === t.form && Dv(i);
          }
          break t;
        case "textarea":
          Nv(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && ja(t, !!n.multiple, e, false);
      }
    }
  }
  var Cu = false;
  function _v(t, e, n) {
    if (Cu) return t(e, n);
    Cu = true;
    try {
      var i = t(e);
      return i;
    } finally {
      if (Cu = false, (ya !== null || za !== null) && (Jl(), ya && (e = ya, t = za, za = ya = null, Mm(e), t))) for (e = 0; e < t.length; e++) Mm(t[e]);
    }
  }
  function no(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[ae] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
        break t;
      default:
        t = false;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(M(231, e, typeof n));
    return n;
  }
  var wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), qc = false;
  if (wn) try {
    var bs = {};
    Object.defineProperty(bs, "passive", {
      get: function() {
        qc = true;
      }
    }), window.addEventListener("test", bs, bs), window.removeEventListener("test", bs, bs);
  } catch {
    qc = false;
  }
  var Kn = null, Ed = null, Tr = null;
  function Lv() {
    if (Tr) return Tr;
    var t, e = Ed, n = e.length, i, a = "value" in Kn ? Kn.value : Kn.textContent, s = a.length;
    for (t = 0; t < n && e[t] === a[t]; t++) ;
    var o = n - t;
    for (i = 1; i <= o && e[n - i] === a[s - i]; i++) ;
    return Tr = a.slice(t, 1 < i ? 1 - i : void 0);
  }
  function Er(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function er() {
    return true;
  }
  function Rm() {
    return false;
  }
  function se(t) {
    function e(n, i, a, s, o) {
      this._reactName = n, this._targetInst = a, this.type = i, this.nativeEvent = s, this.target = o, this.currentTarget = null;
      for (var r in t) t.hasOwnProperty(r) && (n = t[r], this[r] = n ? n(s) : s[r]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === false) ? er : Rm, this.isPropagationStopped = Rm, this;
    }
    return gt(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = er);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = er);
      },
      persist: function() {
      },
      isPersistent: er
    }), e;
  }
  var $i = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, kl = se($i), zo = gt({}, $i, {
    view: 0,
    detail: 0
  }), ET = se(zo), Mu, Ru, xs, Gl = gt({}, zo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ad,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== xs && (xs && t.type === "mousemove" ? (Mu = t.screenX - xs.screenX, Ru = t.screenY - xs.screenY) : Ru = Mu = 0, xs = t), Mu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ru;
    }
  }), Dm = se(Gl), AT = gt({}, Gl, {
    dataTransfer: 0
  }), CT = se(AT), MT = gt({}, zo, {
    relatedTarget: 0
  }), Du = se(MT), RT = gt({}, $i, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), DT = se(RT), OT = gt({}, $i, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), NT = se(OT), jT = gt({}, $i, {
    data: 0
  }), Om = se(jT), zT = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, _T = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, LT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function VT(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = LT[t]) ? !!e[t] : false;
  }
  function Ad() {
    return VT;
  }
  var BT = gt({}, zo, {
    key: function(t) {
      if (t.key) {
        var e = zT[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Er(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? _T[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ad,
    charCode: function(t) {
      return t.type === "keypress" ? Er(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Er(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), UT = se(BT), PT = gt({}, Gl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Nm = se(PT), HT = gt({}, zo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ad
  }), kT = se(HT), GT = gt({}, $i, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), YT = se(GT), qT = gt({}, Gl, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), XT = se(qT), FT = gt({}, $i, {
    newState: 0,
    oldState: 0
  }), KT = se(FT), QT = [
    9,
    13,
    27,
    32
  ], Cd = wn && "CompositionEvent" in window, Bs = null;
  wn && "documentMode" in document && (Bs = document.documentMode);
  var ZT = wn && "TextEvent" in window && !Bs, Vv = wn && (!Cd || Bs && 8 < Bs && 11 >= Bs), jm = " ", zm = false;
  function Bv(t, e) {
    switch (t) {
      case "keyup":
        return QT.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Uv(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var va = false;
  function $T(t, e) {
    switch (t) {
      case "compositionend":
        return Uv(e);
      case "keypress":
        return e.which !== 32 ? null : (zm = true, jm);
      case "textInput":
        return t = e.data, t === jm && zm ? null : t;
      default:
        return null;
    }
  }
  function IT(t, e) {
    if (va) return t === "compositionend" || !Cd && Bv(t, e) ? (t = Lv(), Tr = Ed = Kn = null, va = false, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Vv && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var JT = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function _m(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!JT[t.type] : e === "textarea";
  }
  function Pv(t, e, n, i) {
    ya ? za ? za.push(i) : za = [
      i
    ] : ya = i, e = ml(e, "onChange"), 0 < e.length && (n = new kl("onChange", "change", null, n, i), t.push({
      event: n,
      listeners: e
    }));
  }
  var Us = null, io = null;
  function WT(t) {
    _b(t, 0);
  }
  function Yl(t) {
    var e = Os(t);
    if (Dv(e)) return t;
  }
  function Lm(t, e) {
    if (t === "change") return e;
  }
  var Hv = false;
  if (wn) {
    var Ou;
    if (wn) {
      var Nu = "oninput" in document;
      if (!Nu) {
        var Vm = document.createElement("div");
        Vm.setAttribute("oninput", "return;"), Nu = typeof Vm.oninput == "function";
      }
      Ou = Nu;
    } else Ou = false;
    Hv = Ou && (!document.documentMode || 9 < document.documentMode);
  }
  function Bm() {
    Us && (Us.detachEvent("onpropertychange", kv), io = Us = null);
  }
  function kv(t) {
    if (t.propertyName === "value" && Yl(io)) {
      var e = [];
      Pv(e, io, t, Td(t)), _v(WT, e);
    }
  }
  function tE(t, e, n) {
    t === "focusin" ? (Bm(), Us = e, io = n, Us.attachEvent("onpropertychange", kv)) : t === "focusout" && Bm();
  }
  function eE(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Yl(io);
  }
  function nE(t, e) {
    if (t === "click") return Yl(e);
  }
  function iE(t, e) {
    if (t === "input" || t === "change") return Yl(e);
  }
  function aE(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ye = typeof Object.is == "function" ? Object.is : aE;
  function ao(t, e) {
    if (ye(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var n = Object.keys(t), i = Object.keys(e);
    if (n.length !== i.length) return false;
    for (i = 0; i < n.length; i++) {
      var a = n[i];
      if (!Uc.call(e, a) || !ye(t[a], e[a])) return false;
    }
    return true;
  }
  function Um(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Pm(t, e) {
    var n = Um(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = t + n.textContent.length, t <= e && i >= e) return {
          node: n,
          offset: e - t
        };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Um(n);
    }
  }
  function Gv(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Gv(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function Yv(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = $r(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) t = e.contentWindow;
      else break;
      e = $r(t.document);
    }
    return e;
  }
  function Md(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var sE = wn && "documentMode" in document && 11 >= document.documentMode, ba = null, Xc = null, Ps = null, Fc = false;
  function Hm(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fc || ba == null || ba !== $r(i) || (i = ba, "selectionStart" in i && Md(i) ? i = {
      start: i.selectionStart,
      end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Ps && ao(Ps, i) || (Ps = i, i = ml(Xc, "onSelect"), 0 < i.length && (e = new kl("onSelect", "select", null, e, n), t.push({
      event: e,
      listeners: i
    }), e.target = ba)));
  }
  function Ri(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var xa = {
    animationend: Ri("Animation", "AnimationEnd"),
    animationiteration: Ri("Animation", "AnimationIteration"),
    animationstart: Ri("Animation", "AnimationStart"),
    transitionrun: Ri("Transition", "TransitionRun"),
    transitionstart: Ri("Transition", "TransitionStart"),
    transitioncancel: Ri("Transition", "TransitionCancel"),
    transitionend: Ri("Transition", "TransitionEnd")
  }, ju = {}, qv = {};
  wn && (qv = document.createElement("div").style, "AnimationEvent" in window || (delete xa.animationend.animation, delete xa.animationiteration.animation, delete xa.animationstart.animation), "TransitionEvent" in window || delete xa.transitionend.transition);
  function Ii(t) {
    if (ju[t]) return ju[t];
    if (!xa[t]) return t;
    var e = xa[t], n;
    for (n in e) if (e.hasOwnProperty(n) && n in qv) return ju[t] = e[n];
    return t;
  }
  var Xv = Ii("animationend"), Fv = Ii("animationiteration"), Kv = Ii("animationstart"), oE = Ii("transitionrun"), rE = Ii("transitionstart"), lE = Ii("transitioncancel"), Qv = Ii("transitionend"), Zv = /* @__PURE__ */ new Map(), Kc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Kc.push("scrollEnd");
  function Xe(t, e) {
    Zv.set(t, e), Zi(e, [
      t
    ]);
  }
  var Ir = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, xe = [], Sa = 0, Rd = 0;
  function ql() {
    for (var t = Sa, e = Rd = Sa = 0; e < t; ) {
      var n = xe[e];
      xe[e++] = null;
      var i = xe[e];
      xe[e++] = null;
      var a = xe[e];
      xe[e++] = null;
      var s = xe[e];
      if (xe[e++] = null, i !== null && a !== null) {
        var o = i.pending;
        o === null ? a.next = a : (a.next = o.next, o.next = a), i.pending = a;
      }
      s !== 0 && $v(n, a, s);
    }
  }
  function Xl(t, e, n, i) {
    xe[Sa++] = t, xe[Sa++] = e, xe[Sa++] = n, xe[Sa++] = i, Rd |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
  }
  function Dd(t, e, n, i) {
    return Xl(t, e, n, i), Jr(t);
  }
  function Ji(t, e) {
    return Xl(t, null, null, e), Jr(t);
  }
  function $v(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var a = false, s = t.return; s !== null; ) s.childLanes |= n, i = s.alternate, i !== null && (i.childLanes |= n), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (a = true)), t = s, s = s.return;
    return t.tag === 3 ? (s = t.stateNode, a && e !== null && (a = 31 - me(n), t = s.hiddenUpdates, i = t[a], i === null ? t[a] = [
      e
    ] : i.push(e), e.lane = n | 536870912), s) : null;
  }
  function Jr(t) {
    if (50 < Qs) throw Qs = 0, pf = null, Error(M(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var wa = {};
  function uE(t, e, n, i) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ce(t, e, n, i) {
    return new uE(t, e, n, i);
  }
  function Od(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function bn(t, e) {
    var n = t.alternate;
    return n === null ? (n = ce(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Iv(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Ar(t, e, n, i, a, s) {
    var o = 0;
    if (i = t, typeof t == "function") Od(t) && (o = 1);
    else if (typeof t == "string") o = mA(t, n, Je.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case _c:
        return t = ce(31, n, e, a), t.elementType = _c, t.lanes = s, t;
      case ma:
        return Ui(n.children, a, s, e);
      case gv:
        o = 8, a |= 24;
        break;
      case Nc:
        return t = ce(12, n, e, a | 2), t.elementType = Nc, t.lanes = s, t;
      case jc:
        return t = ce(13, n, e, a), t.elementType = jc, t.lanes = s, t;
      case zc:
        return t = ce(19, n, e, a), t.elementType = zc, t.lanes = s, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case gn:
            o = 10;
            break t;
          case yv:
            o = 9;
            break t;
          case gd:
            o = 11;
            break t;
          case yd:
            o = 14;
            break t;
          case Pn:
            o = 16, i = null;
            break t;
        }
        o = 29, n = Error(M(130, t === null ? "null" : typeof t, "")), i = null;
    }
    return e = ce(o, n, e, a), e.elementType = t, e.type = i, e.lanes = s, e;
  }
  function Ui(t, e, n, i) {
    return t = ce(7, t, i, e), t.lanes = n, t;
  }
  function zu(t, e, n) {
    return t = ce(6, t, null, e), t.lanes = n, t;
  }
  function Jv(t) {
    var e = ce(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function _u(t, e, n) {
    return e = ce(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var km = /* @__PURE__ */ new WeakMap();
  function Ae(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = km.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Sm(e)
      }, km.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Sm(e)
    };
  }
  var Ta = [], Ea = 0, Wr = null, so = 0, we = [], Te = 0, ui = null, Qe = 1, Ze = "";
  function mn(t, e) {
    Ta[Ea++] = so, Ta[Ea++] = Wr, Wr = t, so = e;
  }
  function Wv(t, e, n) {
    we[Te++] = Qe, we[Te++] = Ze, we[Te++] = ui, ui = t;
    var i = Qe;
    t = Ze;
    var a = 32 - me(i) - 1;
    i &= ~(1 << a), n += 1;
    var s = 32 - me(e) + a;
    if (30 < s) {
      var o = a - a % 5;
      s = (i & (1 << o) - 1).toString(32), i >>= o, a -= o, Qe = 1 << 32 - me(e) + a | n << a | i, Ze = s + t;
    } else Qe = 1 << s | n << a | i, Ze = t;
  }
  function Nd(t) {
    t.return !== null && (mn(t, 1), Wv(t, 1, 0));
  }
  function jd(t) {
    for (; t === Wr; ) Wr = Ta[--Ea], Ta[Ea] = null, so = Ta[--Ea], Ta[Ea] = null;
    for (; t === ui; ) ui = we[--Te], we[Te] = null, Ze = we[--Te], we[Te] = null, Qe = we[--Te], we[Te] = null;
  }
  function t0(t, e) {
    we[Te++] = Qe, we[Te++] = Ze, we[Te++] = ui, Qe = e.id, Ze = e.overflow, ui = t;
  }
  var Gt = null, mt = null, W = false, ti = null, Ce = false, Qc = Error(M(519));
  function ci(t) {
    var e = Error(M(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw oo(Ae(e, t)), Qc;
  }
  function Gm(t) {
    var e = t.stateNode, n = t.type, i = t.memoizedProps;
    switch (e[kt] = t, e[ae] = i, n) {
      case "dialog":
        K("cancel", e), K("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < co.length; n++) K(co[n], e);
        break;
      case "source":
        K("error", e);
        break;
      case "img":
      case "image":
      case "link":
        K("error", e), K("load", e);
        break;
      case "details":
        K("toggle", e);
        break;
      case "input":
        K("invalid", e), Ov(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, true);
        break;
      case "select":
        K("invalid", e);
        break;
      case "textarea":
        K("invalid", e), jv(e, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === true || Vb(e.textContent, n) ? (i.popover != null && (K("beforetoggle", e), K("toggle", e)), i.onScroll != null && K("scroll", e), i.onScrollEnd != null && K("scrollend", e), i.onClick != null && (e.onclick = yn), e = true) : e = false, e || ci(t, true);
  }
  function Ym(t) {
    for (Gt = t.return; Gt; ) switch (Gt.tag) {
      case 5:
      case 31:
      case 13:
        Ce = false;
        return;
      case 27:
      case 3:
        Ce = true;
        return;
      default:
        Gt = Gt.return;
    }
  }
  function la(t) {
    if (t !== Gt) return false;
    if (!W) return Ym(t), W = true, false;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || xf(t.type, t.memoizedProps)), n = !n), n && mt && ci(t), Ym(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(M(317));
      mt = Dp(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(M(317));
      mt = Dp(t);
    } else e === 27 ? (e = mt, xi(t.type) ? (t = Ef, Ef = null, mt = t) : mt = e) : mt = Gt ? De(t.stateNode.nextSibling) : null;
    return true;
  }
  function Yi() {
    mt = Gt = null, W = false;
  }
  function Lu() {
    var t = ti;
    return t !== null && (ee === null ? ee = t : ee.push.apply(ee, t), ti = null), t;
  }
  function oo(t) {
    ti === null ? ti = [
      t
    ] : ti.push(t);
  }
  var Zc = an(null), Wi = null, vn = null;
  function kn(t, e, n) {
    ut(Zc, e._currentValue), e._currentValue = n;
  }
  function xn(t) {
    t._currentValue = Zc.current, Ut(Zc);
  }
  function $c(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Ic(t, e, n, i) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var s = a.dependencies;
      if (s !== null) {
        var o = a.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var r = s;
          s = a;
          for (var l = 0; l < e.length; l++) if (r.context === e[l]) {
            s.lanes |= n, r = s.alternate, r !== null && (r.lanes |= n), $c(s.return, n, t), i || (o = null);
            break t;
          }
          s = r.next;
        }
      } else if (a.tag === 18) {
        if (o = a.return, o === null) throw Error(M(341));
        o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), $c(o, n, t), o = null;
      } else o = a.child;
      if (o !== null) o.return = a;
      else for (o = a; o !== null; ) {
        if (o === t) {
          o = null;
          break;
        }
        if (a = o.sibling, a !== null) {
          a.return = o.return, o = a;
          break;
        }
        o = o.return;
      }
      a = o;
    }
  }
  function ss(t, e, n, i) {
    t = null;
    for (var a = e, s = false; a !== null; ) {
      if (!s) {
        if (a.flags & 524288) s = true;
        else if (a.flags & 262144) break;
      }
      if (a.tag === 10) {
        var o = a.alternate;
        if (o === null) throw Error(M(387));
        if (o = o.memoizedProps, o !== null) {
          var r = a.type;
          ye(a.pendingProps.value, o.value) || (t !== null ? t.push(r) : t = [
            r
          ]);
        }
      } else if (a === Fr.current) {
        if (o = a.alternate, o === null) throw Error(M(387));
        o.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(ho) : t = [
          ho
        ]);
      }
      a = a.return;
    }
    t !== null && Ic(e, t, n, i), e.flags |= 262144;
  }
  function tl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ye(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function qi(t) {
    Wi = t, vn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Yt(t) {
    return e0(Wi, t);
  }
  function nr(t, e) {
    return Wi === null && qi(t), e0(t, e);
  }
  function e0(t, e) {
    var n = e._currentValue;
    if (e = {
      context: e,
      memoizedValue: n,
      next: null
    }, vn === null) {
      if (t === null) throw Error(M(308));
      vn = e, t.dependencies = {
        lanes: 0,
        firstContext: e
      }, t.flags |= 524288;
    } else vn = vn.next = e;
    return n;
  }
  var cE = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: false,
      addEventListener: function(n, i) {
        t.push(i);
      }
    };
    this.abort = function() {
      e.aborted = true, t.forEach(function(n) {
        return n();
      });
    };
  }, fE = Lt.unstable_scheduleCallback, dE = Lt.unstable_NormalPriority, Dt = {
    $$typeof: gn,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function zd() {
    return {
      controller: new cE(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function _o(t) {
    t.refCount--, t.refCount === 0 && fE(dE, function() {
      t.controller.abort();
    });
  }
  var Hs = null, Jc = 0, qa = 0, _a = null;
  function hE(t, e) {
    if (Hs === null) {
      var n = Hs = [];
      Jc = 0, qa = ah(), _a = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return Jc++, e.then(qm, qm), e;
  }
  function qm() {
    if (--Jc === 0 && Hs !== null) {
      _a !== null && (_a.status = "fulfilled");
      var t = Hs;
      Hs = null, qa = 0, _a = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function mE(t, e) {
    var n = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        n.push(a);
      }
    };
    return t.then(function() {
      i.status = "fulfilled", i.value = e;
      for (var a = 0; a < n.length; a++) (0, n[a])(e);
    }, function(a) {
      for (i.status = "rejected", i.reason = a, a = 0; a < n.length; a++) (0, n[a])(void 0);
    }), i;
  }
  var Xm = H.S;
  H.S = function(t, e) {
    pb = de(), typeof e == "object" && e !== null && typeof e.then == "function" && hE(t, e), Xm !== null && Xm(t, e);
  };
  var Pi = an(null);
  function _d() {
    var t = Pi.current;
    return t !== null ? t : lt.pooledCache;
  }
  function Cr(t, e) {
    e === null ? ut(Pi, Pi.current) : ut(Pi, e.pool);
  }
  function n0() {
    var t = _d();
    return t === null ? null : {
      parent: Dt._currentValue,
      pool: t
    };
  }
  var os = Error(M(460)), Ld = Error(M(474)), Fl = Error(M(542)), el = {
    then: function() {
    }
  };
  function Fm(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function i0(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(yn, yn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Qm(t), t;
      default:
        if (typeof e.status == "string") e.then(yn, yn);
        else {
          if (t = lt, t !== null && 100 < t.shellSuspendCounter) throw Error(M(482));
          t = e, t.status = "pending", t.then(function(i) {
            if (e.status === "pending") {
              var a = e;
              a.status = "fulfilled", a.value = i;
            }
          }, function(i) {
            if (e.status === "pending") {
              var a = e;
              a.status = "rejected", a.reason = i;
            }
          });
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Qm(t), t;
        }
        throw Hi = e, os;
    }
  }
  function ji(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Hi = n, os) : n;
    }
  }
  var Hi = null;
  function Km() {
    if (Hi === null) throw Error(M(459));
    var t = Hi;
    return Hi = null, t;
  }
  function Qm(t) {
    if (t === os || t === Fl) throw Error(M(483));
  }
  var La = null, ro = 0;
  function ir(t) {
    var e = ro;
    return ro += 1, La === null && (La = []), i0(La, t, e);
  }
  function Ss(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function ar(t, e) {
    throw e.$$typeof === tT ? Error(M(525)) : (t = Object.prototype.toString.call(e), Error(M(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function a0(t) {
    function e(p, m) {
      if (t) {
        var g = p.deletions;
        g === null ? (p.deletions = [
          m
        ], p.flags |= 16) : g.push(m);
      }
    }
    function n(p, m) {
      if (!t) return null;
      for (; m !== null; ) e(p, m), m = m.sibling;
      return null;
    }
    function i(p) {
      for (var m = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
      return m;
    }
    function a(p, m) {
      return p = bn(p, m), p.index = 0, p.sibling = null, p;
    }
    function s(p, m, g) {
      return p.index = g, t ? (g = p.alternate, g !== null ? (g = g.index, g < m ? (p.flags |= 67108866, m) : g) : (p.flags |= 67108866, m)) : (p.flags |= 1048576, m);
    }
    function o(p) {
      return t && p.alternate === null && (p.flags |= 67108866), p;
    }
    function r(p, m, g, S) {
      return m === null || m.tag !== 6 ? (m = zu(g, p.mode, S), m.return = p, m) : (m = a(m, g), m.return = p, m);
    }
    function l(p, m, g, S) {
      var T = g.type;
      return T === ma ? c(p, m, g.props.children, S, g.key) : m !== null && (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Pn && ji(T) === m.type) ? (m = a(m, g.props), Ss(m, g), m.return = p, m) : (m = Ar(g.type, g.key, g.props, null, p.mode, S), Ss(m, g), m.return = p, m);
    }
    function u(p, m, g, S) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = _u(g, p.mode, S), m.return = p, m) : (m = a(m, g.children || []), m.return = p, m);
    }
    function c(p, m, g, S, T) {
      return m === null || m.tag !== 7 ? (m = Ui(g, p.mode, S, T), m.return = p, m) : (m = a(m, g), m.return = p, m);
    }
    function f(p, m, g) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return m = zu("" + m, p.mode, g), m.return = p, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case $o:
            return g = Ar(m.type, m.key, m.props, null, p.mode, g), Ss(g, m), g.return = p, g;
          case Rs:
            return m = _u(m, p.mode, g), m.return = p, m;
          case Pn:
            return m = ji(m), f(p, m, g);
        }
        if (Ds(m) || vs(m)) return m = Ui(m, p.mode, g, null), m.return = p, m;
        if (typeof m.then == "function") return f(p, ir(m), g);
        if (m.$$typeof === gn) return f(p, nr(p, m), g);
        ar(p, m);
      }
      return null;
    }
    function h(p, m, g, S) {
      var T = m !== null ? m.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return T !== null ? null : r(p, m, "" + g, S);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case $o:
            return g.key === T ? l(p, m, g, S) : null;
          case Rs:
            return g.key === T ? u(p, m, g, S) : null;
          case Pn:
            return g = ji(g), h(p, m, g, S);
        }
        if (Ds(g) || vs(g)) return T !== null ? null : c(p, m, g, S, null);
        if (typeof g.then == "function") return h(p, m, ir(g), S);
        if (g.$$typeof === gn) return h(p, m, nr(p, g), S);
        ar(p, g);
      }
      return null;
    }
    function d(p, m, g, S, T) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return p = p.get(g) || null, r(m, p, "" + S, T);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case $o:
            return p = p.get(S.key === null ? g : S.key) || null, l(m, p, S, T);
          case Rs:
            return p = p.get(S.key === null ? g : S.key) || null, u(m, p, S, T);
          case Pn:
            return S = ji(S), d(p, m, g, S, T);
        }
        if (Ds(S) || vs(S)) return p = p.get(g) || null, c(m, p, S, T, null);
        if (typeof S.then == "function") return d(p, m, g, ir(S), T);
        if (S.$$typeof === gn) return d(p, m, g, nr(m, S), T);
        ar(m, S);
      }
      return null;
    }
    function v(p, m, g, S) {
      for (var T = null, A = null, E = m, C = m = 0, j = null; E !== null && C < g.length; C++) {
        E.index > C ? (j = E, E = null) : j = E.sibling;
        var z = h(p, E, g[C], S);
        if (z === null) {
          E === null && (E = j);
          break;
        }
        t && E && z.alternate === null && e(p, E), m = s(z, m, C), A === null ? T = z : A.sibling = z, A = z, E = j;
      }
      if (C === g.length) return n(p, E), W && mn(p, C), T;
      if (E === null) {
        for (; C < g.length; C++) E = f(p, g[C], S), E !== null && (m = s(E, m, C), A === null ? T = E : A.sibling = E, A = E);
        return W && mn(p, C), T;
      }
      for (E = i(E); C < g.length; C++) j = d(E, p, C, g[C], S), j !== null && (t && j.alternate !== null && E.delete(j.key === null ? C : j.key), m = s(j, m, C), A === null ? T = j : A.sibling = j, A = j);
      return t && E.forEach(function(P) {
        return e(p, P);
      }), W && mn(p, C), T;
    }
    function y(p, m, g, S) {
      if (g == null) throw Error(M(151));
      for (var T = null, A = null, E = m, C = m = 0, j = null, z = g.next(); E !== null && !z.done; C++, z = g.next()) {
        E.index > C ? (j = E, E = null) : j = E.sibling;
        var P = h(p, E, z.value, S);
        if (P === null) {
          E === null && (E = j);
          break;
        }
        t && E && P.alternate === null && e(p, E), m = s(P, m, C), A === null ? T = P : A.sibling = P, A = P, E = j;
      }
      if (z.done) return n(p, E), W && mn(p, C), T;
      if (E === null) {
        for (; !z.done; C++, z = g.next()) z = f(p, z.value, S), z !== null && (m = s(z, m, C), A === null ? T = z : A.sibling = z, A = z);
        return W && mn(p, C), T;
      }
      for (E = i(E); !z.done; C++, z = g.next()) z = d(E, p, C, z.value, S), z !== null && (t && z.alternate !== null && E.delete(z.key === null ? C : z.key), m = s(z, m, C), A === null ? T = z : A.sibling = z, A = z);
      return t && E.forEach(function(V) {
        return e(p, V);
      }), W && mn(p, C), T;
    }
    function b(p, m, g, S) {
      if (typeof g == "object" && g !== null && g.type === ma && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case $o:
            t: {
              for (var T = g.key; m !== null; ) {
                if (m.key === T) {
                  if (T = g.type, T === ma) {
                    if (m.tag === 7) {
                      n(p, m.sibling), S = a(m, g.props.children), S.return = p, p = S;
                      break t;
                    }
                  } else if (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Pn && ji(T) === m.type) {
                    n(p, m.sibling), S = a(m, g.props), Ss(S, g), S.return = p, p = S;
                    break t;
                  }
                  n(p, m);
                  break;
                } else e(p, m);
                m = m.sibling;
              }
              g.type === ma ? (S = Ui(g.props.children, p.mode, S, g.key), S.return = p, p = S) : (S = Ar(g.type, g.key, g.props, null, p.mode, S), Ss(S, g), S.return = p, p = S);
            }
            return o(p);
          case Rs:
            t: {
              for (T = g.key; m !== null; ) {
                if (m.key === T) if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                  n(p, m.sibling), S = a(m, g.children || []), S.return = p, p = S;
                  break t;
                } else {
                  n(p, m);
                  break;
                }
                else e(p, m);
                m = m.sibling;
              }
              S = _u(g, p.mode, S), S.return = p, p = S;
            }
            return o(p);
          case Pn:
            return g = ji(g), b(p, m, g, S);
        }
        if (Ds(g)) return v(p, m, g, S);
        if (vs(g)) {
          if (T = vs(g), typeof T != "function") throw Error(M(150));
          return g = T.call(g), y(p, m, g, S);
        }
        if (typeof g.then == "function") return b(p, m, ir(g), S);
        if (g.$$typeof === gn) return b(p, m, nr(p, g), S);
        ar(p, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, m !== null && m.tag === 6 ? (n(p, m.sibling), S = a(m, g), S.return = p, p = S) : (n(p, m), S = zu(g, p.mode, S), S.return = p, p = S), o(p)) : n(p, m);
    }
    return function(p, m, g, S) {
      try {
        ro = 0;
        var T = b(p, m, g, S);
        return La = null, T;
      } catch (E) {
        if (E === os || E === Fl) throw E;
        var A = ce(29, E, null, p.mode);
        return A.lanes = S, A.return = p, A;
      } finally {
      }
    };
  }
  var Xi = a0(true), s0 = a0(false), Hn = false;
  function Vd(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function Wc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ei(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function ni(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, tt & 2) {
      var a = i.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), i.pending = e, e = Jr(t), $v(t, null, n), e;
    }
    return Xl(t, i, e, n), Jr(t);
  }
  function ks(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, Tv(t, n);
    }
  }
  function Vu(t, e) {
    var n = t.updateQueue, i = t.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var a = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          s === null ? a = s = o : s = s.next = o, n = n.next;
        } while (n !== null);
        s === null ? a = s = e : s = s.next = e;
      } else a = s = e;
      n = {
        baseState: i.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: s,
        shared: i.shared,
        callbacks: i.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var tf = false;
  function Gs() {
    if (tf) {
      var t = _a;
      if (t !== null) throw t;
    }
  }
  function Ys(t, e, n, i) {
    tf = false;
    var a = t.updateQueue;
    Hn = false;
    var s = a.firstBaseUpdate, o = a.lastBaseUpdate, r = a.shared.pending;
    if (r !== null) {
      a.shared.pending = null;
      var l = r, u = l.next;
      l.next = null, o === null ? s = u : o.next = u, o = l;
      var c = t.alternate;
      c !== null && (c = c.updateQueue, r = c.lastBaseUpdate, r !== o && (r === null ? c.firstBaseUpdate = u : r.next = u, c.lastBaseUpdate = l));
    }
    if (s !== null) {
      var f = a.baseState;
      o = 0, c = u = l = null, r = s;
      do {
        var h = r.lane & -536870913, d = h !== r.lane;
        if (d ? (I & h) === h : (i & h) === h) {
          h !== 0 && h === qa && (tf = true), c !== null && (c = c.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          t: {
            var v = t, y = r;
            h = e;
            var b = n;
            switch (y.tag) {
              case 1:
                if (v = y.payload, typeof v == "function") {
                  f = v.call(b, f, h);
                  break t;
                }
                f = v;
                break t;
              case 3:
                v.flags = v.flags & -65537 | 128;
              case 0:
                if (v = y.payload, h = typeof v == "function" ? v.call(b, f, h) : v, h == null) break t;
                f = gt({}, f, h);
                break t;
              case 2:
                Hn = true;
            }
          }
          h = r.callback, h !== null && (t.flags |= 64, d && (t.flags |= 8192), d = a.callbacks, d === null ? a.callbacks = [
            h
          ] : d.push(h));
        } else d = {
          lane: h,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null
        }, c === null ? (u = c = d, l = f) : c = c.next = d, o |= h;
        if (r = r.next, r === null) {
          if (r = a.shared.pending, r === null) break;
          d = r, r = d.next, d.next = null, a.lastBaseUpdate = d, a.shared.pending = null;
        }
      } while (true);
      c === null && (l = f), a.baseState = l, a.firstBaseUpdate = u, a.lastBaseUpdate = c, s === null && (a.shared.lanes = 0), di |= o, t.lanes = o, t.memoizedState = f;
    }
  }
  function o0(t, e) {
    if (typeof t != "function") throw Error(M(191, t));
    t.call(e);
  }
  function r0(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) o0(n[t], e);
  }
  var Xa = an(null), nl = an(0);
  function Zm(t, e) {
    t = Cn, ut(nl, t), ut(Xa, e), Cn = t | e.baseLanes;
  }
  function ef() {
    ut(nl, Cn), ut(Xa, Xa.current);
  }
  function Bd() {
    Cn = nl.current, Ut(Xa), Ut(nl);
  }
  var ve = an(null), Re = null;
  function Gn(t) {
    var e = t.alternate;
    ut(Et, Et.current & 1), ut(ve, t), Re === null && (e === null || Xa.current !== null || e.memoizedState !== null) && (Re = t);
  }
  function nf(t) {
    ut(Et, Et.current), ut(ve, t), Re === null && (Re = t);
  }
  function l0(t) {
    t.tag === 22 ? (ut(Et, Et.current), ut(ve, t), Re === null && (Re = t)) : Yn();
  }
  function Yn() {
    ut(Et, Et.current), ut(ve, ve.current);
  }
  function le(t) {
    Ut(ve), Re === t && (Re = null), Ut(Et);
  }
  var Et = an(0);
  function il(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || wf(n) || Tf(n))) return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if (e.flags & 128) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Tn = 0, Y = null, rt = null, Mt = null, al = false, Va = false, Fi = false, sl = 0, lo = 0, Ba = null, pE = 0;
  function St() {
    throw Error(M(321));
  }
  function Ud(t, e) {
    if (e === null) return false;
    for (var n = 0; n < e.length && n < t.length; n++) if (!ye(t[n], e[n])) return false;
    return true;
  }
  function Pd(t, e, n, i, a, s) {
    return Tn = s, Y = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, H.H = t === null || t.memoizedState === null ? P0 : $d, Fi = false, s = n(i, a), Fi = false, Va && (s = c0(e, n, i, a)), u0(t), s;
  }
  function u0(t) {
    H.H = uo;
    var e = rt !== null && rt.next !== null;
    if (Tn = 0, Mt = rt = Y = null, al = false, lo = 0, Ba = null, e) throw Error(M(300));
    t === null || Ot || (t = t.dependencies, t !== null && tl(t) && (Ot = true));
  }
  function c0(t, e, n, i) {
    Y = t;
    var a = 0;
    do {
      if (Va && (Ba = null), lo = 0, Va = false, 25 <= a) throw Error(M(301));
      if (a += 1, Mt = rt = null, t.updateQueue != null) {
        var s = t.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      H.H = H0, s = e(n, i);
    } while (Va);
    return s;
  }
  function gE() {
    var t = H.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Lo(e) : e, t = t.useState()[0], (rt !== null ? rt.memoizedState : null) !== t && (Y.flags |= 1024), e;
  }
  function Hd() {
    var t = sl !== 0;
    return sl = 0, t;
  }
  function kd(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Gd(t) {
    if (al) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      al = false;
    }
    Tn = 0, Mt = rt = Y = null, Va = false, lo = sl = 0, Ba = null;
  }
  function Ft() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Mt === null ? Y.memoizedState = Mt = t : Mt = Mt.next = t, Mt;
  }
  function At() {
    if (rt === null) {
      var t = Y.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = rt.next;
    var e = Mt === null ? Y.memoizedState : Mt.next;
    if (e !== null) Mt = e, rt = t;
    else {
      if (t === null) throw Y.alternate === null ? Error(M(467)) : Error(M(310));
      rt = t, t = {
        memoizedState: rt.memoizedState,
        baseState: rt.baseState,
        baseQueue: rt.baseQueue,
        queue: rt.queue,
        next: null
      }, Mt === null ? Y.memoizedState = Mt = t : Mt = Mt.next = t;
    }
    return Mt;
  }
  function Kl() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Lo(t) {
    var e = lo;
    return lo += 1, Ba === null && (Ba = []), t = i0(Ba, t, e), e = Y, (Mt === null ? e.memoizedState : Mt.next) === null && (e = e.alternate, H.H = e === null || e.memoizedState === null ? P0 : $d), t;
  }
  function Ql(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Lo(t);
      if (t.$$typeof === gn) return Yt(t);
    }
    throw Error(M(438, String(t)));
  }
  function Yd(t) {
    var e = null, n = Y.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var i = Y.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
        data: i.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = {
      data: [],
      index: 0
    }), n === null && (n = Kl(), Y.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0) for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = eT;
    return e.index++, n;
  }
  function En(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Mr(t) {
    var e = At();
    return qd(e, rt, t);
  }
  function qd(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(M(311));
    i.lastRenderedReducer = n;
    var a = t.baseQueue, s = i.pending;
    if (s !== null) {
      if (a !== null) {
        var o = a.next;
        a.next = s.next, s.next = o;
      }
      e.baseQueue = a = s, i.pending = null;
    }
    if (s = t.baseState, a === null) t.memoizedState = s;
    else {
      e = a.next;
      var r = o = null, l = null, u = e, c = false;
      do {
        var f = u.lane & -536870913;
        if (f !== u.lane ? (I & f) === f : (Tn & f) === f) {
          var h = u.revertLane;
          if (h === 0) l !== null && (l = l.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          }), f === qa && (c = true);
          else if ((Tn & h) === h) {
            u = u.next, h === qa && (c = true);
            continue;
          } else f = {
            lane: 0,
            revertLane: u.revertLane,
            gesture: null,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          }, l === null ? (r = l = f, o = s) : l = l.next = f, Y.lanes |= h, di |= h;
          f = u.action, Fi && n(s, f), s = u.hasEagerState ? u.eagerState : n(s, f);
        } else h = {
          lane: f,
          revertLane: u.revertLane,
          gesture: u.gesture,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }, l === null ? (r = l = h, o = s) : l = l.next = h, Y.lanes |= f, di |= f;
        u = u.next;
      } while (u !== null && u !== e);
      if (l === null ? o = s : l.next = r, !ye(s, t.memoizedState) && (Ot = true, c && (n = _a, n !== null))) throw n;
      t.memoizedState = s, t.baseState = o, t.baseQueue = l, i.lastRenderedState = s;
    }
    return a === null && (i.lanes = 0), [
      t.memoizedState,
      i.dispatch
    ];
  }
  function Bu(t) {
    var e = At(), n = e.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch, a = n.pending, s = e.memoizedState;
    if (a !== null) {
      n.pending = null;
      var o = a = a.next;
      do
        s = t(s, o.action), o = o.next;
      while (o !== a);
      ye(s, e.memoizedState) || (Ot = true), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s;
    }
    return [
      s,
      i
    ];
  }
  function f0(t, e, n) {
    var i = Y, a = At(), s = W;
    if (s) {
      if (n === void 0) throw Error(M(407));
      n = n();
    } else n = e();
    var o = !ye((rt || a).memoizedState, n);
    if (o && (a.memoizedState = n, Ot = true), a = a.queue, Xd(m0.bind(null, i, a, t), [
      t
    ]), a.getSnapshot !== e || o || Mt !== null && Mt.memoizedState.tag & 1) {
      if (i.flags |= 2048, Fa(9, {
        destroy: void 0
      }, h0.bind(null, i, a, n, e), null), lt === null) throw Error(M(349));
      s || Tn & 127 || d0(i, e, n);
    }
    return n;
  }
  function d0(t, e, n) {
    t.flags |= 16384, t = {
      getSnapshot: e,
      value: n
    }, e = Y.updateQueue, e === null ? (e = Kl(), Y.updateQueue = e, e.stores = [
      t
    ]) : (n = e.stores, n === null ? e.stores = [
      t
    ] : n.push(t));
  }
  function h0(t, e, n, i) {
    e.value = n, e.getSnapshot = i, p0(e) && g0(t);
  }
  function m0(t, e, n) {
    return n(function() {
      p0(e) && g0(t);
    });
  }
  function p0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ye(t, n);
    } catch {
      return true;
    }
  }
  function g0(t) {
    var e = Ji(t, 2);
    e !== null && ie(e, t, 2);
  }
  function af(t) {
    var e = Ft();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Fi) {
        Fn(true);
        try {
          n();
        } finally {
          Fn(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: En,
      lastRenderedState: t
    }, e;
  }
  function y0(t, e, n, i) {
    return t.baseState = n, qd(t, rt, typeof i == "function" ? i : En);
  }
  function yE(t, e, n, i, a) {
    if ($l(t)) throw Error(M(485));
    if (t = e.action, t !== null) {
      var s = {
        payload: a,
        action: t,
        next: null,
        isTransition: true,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(o) {
          s.listeners.push(o);
        }
      };
      H.T !== null ? n(true) : s.isTransition = false, i(s), n = e.pending, n === null ? (s.next = e.pending = s, v0(e, s)) : (s.next = n.next, e.pending = n.next = s);
    }
  }
  function v0(t, e) {
    var n = e.action, i = e.payload, a = t.state;
    if (e.isTransition) {
      var s = H.T, o = {};
      H.T = o;
      try {
        var r = n(a, i), l = H.S;
        l !== null && l(o, r), $m(t, e, r);
      } catch (u) {
        sf(t, e, u);
      } finally {
        s !== null && o.types !== null && (s.types = o.types), H.T = s;
      }
    } else try {
      s = n(a, i), $m(t, e, s);
    } catch (u) {
      sf(t, e, u);
    }
  }
  function $m(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(i) {
      Im(t, e, i);
    }, function(i) {
      return sf(t, e, i);
    }) : Im(t, e, n);
  }
  function Im(t, e, n) {
    e.status = "fulfilled", e.value = n, b0(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, v0(t, n)));
  }
  function sf(t, e, n) {
    var i = t.pending;
    if (t.pending = null, i !== null) {
      i = i.next;
      do
        e.status = "rejected", e.reason = n, b0(e), e = e.next;
      while (e !== i);
    }
    t.action = null;
  }
  function b0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function x0(t, e) {
    return e;
  }
  function Jm(t, e) {
    if (W) {
      var n = lt.formState;
      if (n !== null) {
        t: {
          var i = Y;
          if (W) {
            if (mt) {
              e: {
                for (var a = mt, s = Ce; a.nodeType !== 8; ) {
                  if (!s) {
                    a = null;
                    break e;
                  }
                  if (a = De(a.nextSibling), a === null) {
                    a = null;
                    break e;
                  }
                }
                s = a.data, a = s === "F!" || s === "F" ? a : null;
              }
              if (a) {
                mt = De(a.nextSibling), i = a.data === "F!";
                break t;
              }
            }
            ci(i);
          }
          i = false;
        }
        i && (e = n[0]);
      }
    }
    return n = Ft(), n.memoizedState = n.baseState = e, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: x0,
      lastRenderedState: e
    }, n.queue = i, n = V0.bind(null, Y, i), i.dispatch = n, i = af(false), s = Zd.bind(null, Y, false, i.queue), i = Ft(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, i.queue = a, n = yE.bind(null, Y, a, s, n), a.dispatch = n, i.memoizedState = t, [
      e,
      n,
      false
    ];
  }
  function Wm(t) {
    var e = At();
    return S0(e, rt, t);
  }
  function S0(t, e, n) {
    if (e = qd(t, e, x0)[0], t = Mr(En)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var i = Lo(e);
    } catch (o) {
      throw o === os ? Fl : o;
    }
    else i = e;
    e = At();
    var a = e.queue, s = a.dispatch;
    return n !== e.memoizedState && (Y.flags |= 2048, Fa(9, {
      destroy: void 0
    }, vE.bind(null, a, n), null)), [
      i,
      s,
      t
    ];
  }
  function vE(t, e) {
    t.action = e;
  }
  function tp(t) {
    var e = At(), n = rt;
    if (n !== null) return S0(e, n, t);
    At(), e = e.memoizedState, n = At();
    var i = n.queue.dispatch;
    return n.memoizedState = t, [
      e,
      i,
      false
    ];
  }
  function Fa(t, e, n, i) {
    return t = {
      tag: t,
      create: n,
      deps: i,
      inst: e,
      next: null
    }, e = Y.updateQueue, e === null && (e = Kl(), Y.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t;
  }
  function w0() {
    return At().memoizedState;
  }
  function Rr(t, e, n, i) {
    var a = Ft();
    Y.flags |= t, a.memoizedState = Fa(1 | e, {
      destroy: void 0
    }, n, i === void 0 ? null : i);
  }
  function Zl(t, e, n, i) {
    var a = At();
    i = i === void 0 ? null : i;
    var s = a.memoizedState.inst;
    rt !== null && i !== null && Ud(i, rt.memoizedState.deps) ? a.memoizedState = Fa(e, s, n, i) : (Y.flags |= t, a.memoizedState = Fa(1 | e, s, n, i));
  }
  function ep(t, e) {
    Rr(8390656, 8, t, e);
  }
  function Xd(t, e) {
    Zl(2048, 8, t, e);
  }
  function bE(t) {
    Y.flags |= 4;
    var e = Y.updateQueue;
    if (e === null) e = Kl(), Y.updateQueue = e, e.events = [
      t
    ];
    else {
      var n = e.events;
      n === null ? e.events = [
        t
      ] : n.push(t);
    }
  }
  function T0(t) {
    var e = At().memoizedState;
    return bE({
      ref: e,
      nextImpl: t
    }), function() {
      if (tt & 2) throw Error(M(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function E0(t, e) {
    return Zl(4, 2, t, e);
  }
  function A0(t, e) {
    return Zl(4, 4, t, e);
  }
  function C0(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null) return t = t(), e.current = t, function() {
      e.current = null;
    };
  }
  function M0(t, e, n) {
    n = n != null ? n.concat([
      t
    ]) : null, Zl(4, 4, C0.bind(null, e, t), n);
  }
  function Fd() {
  }
  function R0(t, e) {
    var n = At();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Ud(e, i[1]) ? i[0] : (n.memoizedState = [
      t,
      e
    ], t);
  }
  function D0(t, e) {
    var n = At();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Ud(e, i[1])) return i[0];
    if (i = t(), Fi) {
      Fn(true);
      try {
        t();
      } finally {
        Fn(false);
      }
    }
    return n.memoizedState = [
      i,
      e
    ], i;
  }
  function Kd(t, e, n) {
    return n === void 0 || Tn & 1073741824 && !(I & 261930) ? t.memoizedState = e : (t.memoizedState = n, t = yb(), Y.lanes |= t, di |= t, n);
  }
  function O0(t, e, n, i) {
    return ye(n, e) ? n : Xa.current !== null ? (t = Kd(t, n, i), ye(t, e) || (Ot = true), t) : !(Tn & 42) || Tn & 1073741824 && !(I & 261930) ? (Ot = true, t.memoizedState = n) : (t = yb(), Y.lanes |= t, di |= t, e);
  }
  function N0(t, e, n, i, a) {
    var s = et.p;
    et.p = s !== 0 && 8 > s ? s : 8;
    var o = H.T, r = {};
    H.T = r, Zd(t, false, e, n);
    try {
      var l = a(), u = H.S;
      if (u !== null && u(r, l), l !== null && typeof l == "object" && typeof l.then == "function") {
        var c = mE(l, i);
        qs(t, e, c, pe(t));
      } else qs(t, e, i, pe(t));
    } catch (f) {
      qs(t, e, {
        then: function() {
        },
        status: "rejected",
        reason: f
      }, pe());
    } finally {
      et.p = s, o !== null && r.types !== null && (o.types = r.types), H.T = o;
    }
  }
  function xE() {
  }
  function of(t, e, n, i) {
    if (t.tag !== 5) throw Error(M(476));
    var a = j0(t).queue;
    N0(t, a, e, Bi, n === null ? xE : function() {
      return z0(t), n(i);
    });
  }
  function j0(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Bi,
      baseState: Bi,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: En,
        lastRenderedState: Bi
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: En,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function z0(t) {
    var e = j0(t);
    e.next === null && (e = t.alternate.memoizedState), qs(t, e.next.queue, {}, pe());
  }
  function Qd() {
    return Yt(ho);
  }
  function _0() {
    return At().memoizedState;
  }
  function L0() {
    return At().memoizedState;
  }
  function SE(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = pe();
          t = ei(n);
          var i = ni(e, t, n);
          i !== null && (ie(i, e, n), ks(i, e, n)), e = {
            cache: zd()
          }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function wE(t, e, n) {
    var i = pe();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, $l(t) ? B0(e, n) : (n = Dd(t, e, n, i), n !== null && (ie(n, t, i), U0(n, e, i)));
  }
  function V0(t, e, n) {
    var i = pe();
    qs(t, e, n, i);
  }
  function qs(t, e, n, i) {
    var a = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if ($l(t)) B0(e, a);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null)) try {
        var o = e.lastRenderedState, r = s(o, n);
        if (a.hasEagerState = true, a.eagerState = r, ye(r, o)) return Xl(t, e, a, 0), lt === null && ql(), false;
      } catch {
      } finally {
      }
      if (n = Dd(t, e, a, i), n !== null) return ie(n, t, i), U0(n, e, i), true;
    }
    return false;
  }
  function Zd(t, e, n, i) {
    if (i = {
      lane: 2,
      revertLane: ah(),
      gesture: null,
      action: i,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, $l(t)) {
      if (e) throw Error(M(479));
    } else e = Dd(t, n, i, 2), e !== null && ie(e, t, 2);
  }
  function $l(t) {
    var e = t.alternate;
    return t === Y || e !== null && e === Y;
  }
  function B0(t, e) {
    Va = al = true;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function U0(t, e, n) {
    if (n & 4194048) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, Tv(t, n);
    }
  }
  var uo = {
    readContext: Yt,
    use: Ql,
    useCallback: St,
    useContext: St,
    useEffect: St,
    useImperativeHandle: St,
    useLayoutEffect: St,
    useInsertionEffect: St,
    useMemo: St,
    useReducer: St,
    useRef: St,
    useState: St,
    useDebugValue: St,
    useDeferredValue: St,
    useTransition: St,
    useSyncExternalStore: St,
    useId: St,
    useHostTransitionStatus: St,
    useFormState: St,
    useActionState: St,
    useOptimistic: St,
    useMemoCache: St,
    useCacheRefresh: St
  };
  uo.useEffectEvent = St;
  var P0 = {
    readContext: Yt,
    use: Ql,
    useCallback: function(t, e) {
      return Ft().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Yt,
    useEffect: ep,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([
        t
      ]) : null, Rr(4194308, 4, C0.bind(null, e, t), n);
    },
    useLayoutEffect: function(t, e) {
      return Rr(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Rr(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Ft();
      e = e === void 0 ? null : e;
      var i = t();
      if (Fi) {
        Fn(true);
        try {
          t();
        } finally {
          Fn(false);
        }
      }
      return n.memoizedState = [
        i,
        e
      ], i;
    },
    useReducer: function(t, e, n) {
      var i = Ft();
      if (n !== void 0) {
        var a = n(e);
        if (Fi) {
          Fn(true);
          try {
            n(e);
          } finally {
            Fn(false);
          }
        }
      } else a = e;
      return i.memoizedState = i.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, i.queue = t, t = t.dispatch = wE.bind(null, Y, t), [
        i.memoizedState,
        t
      ];
    },
    useRef: function(t) {
      var e = Ft();
      return t = {
        current: t
      }, e.memoizedState = t;
    },
    useState: function(t) {
      t = af(t);
      var e = t.queue, n = V0.bind(null, Y, e);
      return e.dispatch = n, [
        t.memoizedState,
        n
      ];
    },
    useDebugValue: Fd,
    useDeferredValue: function(t, e) {
      var n = Ft();
      return Kd(n, t, e);
    },
    useTransition: function() {
      var t = af(false);
      return t = N0.bind(null, Y, t.queue, true, false), Ft().memoizedState = t, [
        false,
        t
      ];
    },
    useSyncExternalStore: function(t, e, n) {
      var i = Y, a = Ft();
      if (W) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (n = e(), lt === null) throw Error(M(349));
        I & 127 || d0(i, e, n);
      }
      a.memoizedState = n;
      var s = {
        value: n,
        getSnapshot: e
      };
      return a.queue = s, ep(m0.bind(null, i, s, t), [
        t
      ]), i.flags |= 2048, Fa(9, {
        destroy: void 0
      }, h0.bind(null, i, s, n, e), null), n;
    },
    useId: function() {
      var t = Ft(), e = lt.identifierPrefix;
      if (W) {
        var n = Ze, i = Qe;
        n = (i & ~(1 << 32 - me(i) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = sl++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else n = pE++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Qd,
    useFormState: Jm,
    useActionState: Jm,
    useOptimistic: function(t) {
      var e = Ft();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Zd.bind(null, Y, true, n), n.dispatch = e, [
        t,
        e
      ];
    },
    useMemoCache: Yd,
    useCacheRefresh: function() {
      return Ft().memoizedState = SE.bind(null, Y);
    },
    useEffectEvent: function(t) {
      var e = Ft(), n = {
        impl: t
      };
      return e.memoizedState = n, function() {
        if (tt & 2) throw Error(M(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, $d = {
    readContext: Yt,
    use: Ql,
    useCallback: R0,
    useContext: Yt,
    useEffect: Xd,
    useImperativeHandle: M0,
    useInsertionEffect: E0,
    useLayoutEffect: A0,
    useMemo: D0,
    useReducer: Mr,
    useRef: w0,
    useState: function() {
      return Mr(En);
    },
    useDebugValue: Fd,
    useDeferredValue: function(t, e) {
      var n = At();
      return O0(n, rt.memoizedState, t, e);
    },
    useTransition: function() {
      var t = Mr(En)[0], e = At().memoizedState;
      return [
        typeof t == "boolean" ? t : Lo(t),
        e
      ];
    },
    useSyncExternalStore: f0,
    useId: _0,
    useHostTransitionStatus: Qd,
    useFormState: Wm,
    useActionState: Wm,
    useOptimistic: function(t, e) {
      var n = At();
      return y0(n, rt, t, e);
    },
    useMemoCache: Yd,
    useCacheRefresh: L0
  };
  $d.useEffectEvent = T0;
  var H0 = {
    readContext: Yt,
    use: Ql,
    useCallback: R0,
    useContext: Yt,
    useEffect: Xd,
    useImperativeHandle: M0,
    useInsertionEffect: E0,
    useLayoutEffect: A0,
    useMemo: D0,
    useReducer: Bu,
    useRef: w0,
    useState: function() {
      return Bu(En);
    },
    useDebugValue: Fd,
    useDeferredValue: function(t, e) {
      var n = At();
      return rt === null ? Kd(n, t, e) : O0(n, rt.memoizedState, t, e);
    },
    useTransition: function() {
      var t = Bu(En)[0], e = At().memoizedState;
      return [
        typeof t == "boolean" ? t : Lo(t),
        e
      ];
    },
    useSyncExternalStore: f0,
    useId: _0,
    useHostTransitionStatus: Qd,
    useFormState: tp,
    useActionState: tp,
    useOptimistic: function(t, e) {
      var n = At();
      return rt !== null ? y0(n, rt, t, e) : (n.baseState = t, [
        t,
        n.queue.dispatch
      ]);
    },
    useMemoCache: Yd,
    useCacheRefresh: L0
  };
  H0.useEffectEvent = T0;
  function Uu(t, e, n, i) {
    e = t.memoizedState, n = n(i, e), n = n == null ? e : gt({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var rf = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var i = pe(), a = ei(i);
      a.payload = e, n != null && (a.callback = n), e = ni(t, a, i), e !== null && (ie(e, t, i), ks(e, t, i));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var i = pe(), a = ei(i);
      a.tag = 1, a.payload = e, n != null && (a.callback = n), e = ni(t, a, i), e !== null && (ie(e, t, i), ks(e, t, i));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = pe(), i = ei(n);
      i.tag = 2, e != null && (i.callback = e), e = ni(t, i, n), e !== null && (ie(e, t, n), ks(e, t, n));
    }
  };
  function np(t, e, n, i, a, s, o) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, s, o) : e.prototype && e.prototype.isPureReactComponent ? !ao(n, i) || !ao(a, s) : true;
  }
  function ip(t, e, n, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && rf.enqueueReplaceState(e, e.state, null);
  }
  function Ki(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if (t = t.defaultProps) {
      n === e && (n = gt({}, n));
      for (var a in t) n[a] === void 0 && (n[a] = t[a]);
    }
    return n;
  }
  function k0(t) {
    Ir(t);
  }
  function G0(t) {
    console.error(t);
  }
  function Y0(t) {
    Ir(t);
  }
  function ol(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, {
        componentStack: e.stack
      });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function ap(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function lf(t, e, n) {
    return n = ei(n), n.tag = 3, n.payload = {
      element: null
    }, n.callback = function() {
      ol(t, e);
    }, n;
  }
  function q0(t) {
    return t = ei(t), t.tag = 3, t;
  }
  function X0(t, e, n, i) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var s = i.value;
      t.payload = function() {
        return a(s);
      }, t.callback = function() {
        ap(e, n, i);
      };
    }
    var o = n.stateNode;
    o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      ap(e, n, i), typeof a != "function" && (ii === null ? ii = /* @__PURE__ */ new Set([
        this
      ]) : ii.add(this));
      var r = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function TE(t, e, n, i, a) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (e = n.alternate, e !== null && ss(e, n, a, true), n = ve.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Re === null ? fl() : n.alternate === null && wt === 0 && (wt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, i === el ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([
              i
            ]) : e.add(i), Zu(t, i, a)), false;
          case 22:
            return n.flags |= 65536, i === el ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([
                i
              ])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([
              i
            ]) : n.add(i)), Zu(t, i, a)), false;
        }
        throw Error(M(435, n.tag));
      }
      return Zu(t, i, a), fl(), false;
    }
    if (W) return e = ve.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = a, i !== Qc && (t = Error(M(422), {
      cause: i
    }), oo(Ae(t, n)))) : (i !== Qc && (e = Error(M(423), {
      cause: i
    }), oo(Ae(e, n))), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, i = Ae(i, n), a = lf(t.stateNode, i, a), Vu(t, a), wt !== 4 && (wt = 2)), false;
    var s = Error(M(520), {
      cause: i
    });
    if (s = Ae(s, n), Ks === null ? Ks = [
      s
    ] : Ks.push(s), wt !== 4 && (wt = 2), e === null) return true;
    i = Ae(i, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = a & -a, n.lanes |= t, t = lf(n.stateNode, i, t), Vu(n, t), false;
        case 1:
          if (e = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (ii === null || !ii.has(s)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = q0(a), X0(a, t, n, i), Vu(n, a), false;
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var Id = Error(M(461)), Ot = false;
  function Ht(t, e, n, i) {
    e.child = t === null ? s0(e, null, n, i) : Xi(e, t.child, n, i);
  }
  function sp(t, e, n, i, a) {
    n = n.render;
    var s = e.ref;
    if ("ref" in i) {
      var o = {};
      for (var r in i) r !== "ref" && (o[r] = i[r]);
    } else o = i;
    return qi(e), i = Pd(t, e, n, o, s, a), r = Hd(), t !== null && !Ot ? (kd(t, e, a), An(t, e, a)) : (W && r && Nd(e), e.flags |= 1, Ht(t, e, i, a), e.child);
  }
  function op(t, e, n, i, a) {
    if (t === null) {
      var s = n.type;
      return typeof s == "function" && !Od(s) && s.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = s, F0(t, e, s, i, a)) : (t = Ar(n.type, null, i, e, e.mode, a), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (s = t.child, !Jd(t, a)) {
      var o = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ao, n(o, i) && t.ref === e.ref) return An(t, e, a);
    }
    return e.flags |= 1, t = bn(s, i), t.ref = e.ref, t.return = e, e.child = t;
  }
  function F0(t, e, n, i, a) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (ao(s, i) && t.ref === e.ref) if (Ot = false, e.pendingProps = i = s, Jd(t, a)) t.flags & 131072 && (Ot = true);
      else return e.lanes = t.lanes, An(t, e, a);
    }
    return uf(t, e, n, i, a);
  }
  function K0(t, e, n, i) {
    var a = i.children, s = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if (e.flags & 128) {
        if (s = s !== null ? s.baseLanes | n : n, t !== null) {
          for (i = e.child = t.child, a = 0; i !== null; ) a = a | i.lanes | i.childLanes, i = i.sibling;
          i = a & ~s;
        } else i = 0, e.child = null;
        return rp(t, e, s, n, i);
      }
      if (n & 536870912) e.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && Cr(e, s !== null ? s.cachePool : null), s !== null ? Zm(e, s) : ef(), l0(e);
      else return i = e.lanes = 536870912, rp(t, e, s !== null ? s.baseLanes | n : n, n, i);
    } else s !== null ? (Cr(e, s.cachePool), Zm(e, s), Yn(), e.memoizedState = null) : (t !== null && Cr(e, null), ef(), Yn());
    return Ht(t, e, a, n), e.child;
  }
  function Ns(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function rp(t, e, n, i, a) {
    var s = _d();
    return s = s === null ? null : {
      parent: Dt._currentValue,
      pool: s
    }, e.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, t !== null && Cr(e, null), ef(), l0(e), t !== null && ss(t, e, i, true), e.childLanes = a, null;
  }
  function Dr(t, e) {
    return e = rl({
      mode: e.mode,
      children: e.children
    }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function lp(t, e, n) {
    return Xi(e, t.child, null, n), t = Dr(e, e.pendingProps), t.flags |= 2, le(e), e.memoizedState = null, t;
  }
  function EE(t, e, n) {
    var i = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (W) {
        if (i.mode === "hidden") return t = Dr(e, i), e.lanes = 536870912, Ns(null, t);
        if (nf(e), (t = mt) ? (t = Pb(t, Ce), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ui !== null ? {
            id: Qe,
            overflow: Ze
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Jv(t), n.return = e, e.child = n, Gt = e, mt = null)) : t = null, t === null) throw ci(e);
        return e.lanes = 536870912, null;
      }
      return Dr(e, i);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var o = s.dehydrated;
      if (nf(e), a) if (e.flags & 256) e.flags &= -257, e = lp(t, e, n);
      else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
      else throw Error(M(558));
      else if (Ot || ss(t, e, n, false), a = (n & t.childLanes) !== 0, Ot || a) {
        if (i = lt, i !== null && (o = Ev(i, n), o !== 0 && o !== s.retryLane)) throw s.retryLane = o, Ji(t, o), ie(i, t, o), Id;
        fl(), e = lp(t, e, n);
      } else t = s.treeContext, mt = De(o.nextSibling), Gt = e, W = true, ti = null, Ce = false, t !== null && t0(e, t), e = Dr(e, i), e.flags |= 4096;
      return e;
    }
    return t = bn(t.child, {
      mode: i.mode,
      children: i.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Or(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(M(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function uf(t, e, n, i, a) {
    return qi(e), n = Pd(t, e, n, i, void 0, a), i = Hd(), t !== null && !Ot ? (kd(t, e, a), An(t, e, a)) : (W && i && Nd(e), e.flags |= 1, Ht(t, e, n, a), e.child);
  }
  function up(t, e, n, i, a, s) {
    return qi(e), e.updateQueue = null, n = c0(e, i, n, a), u0(t), i = Hd(), t !== null && !Ot ? (kd(t, e, s), An(t, e, s)) : (W && i && Nd(e), e.flags |= 1, Ht(t, e, n, s), e.child);
  }
  function cp(t, e, n, i, a) {
    if (qi(e), e.stateNode === null) {
      var s = wa, o = n.contextType;
      typeof o == "object" && o !== null && (s = Yt(o)), s = new n(i, s), e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = rf, e.stateNode = s, s._reactInternals = e, s = e.stateNode, s.props = i, s.state = e.memoizedState, s.refs = {}, Vd(e), o = n.contextType, s.context = typeof o == "object" && o !== null ? Yt(o) : wa, s.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Uu(e, n, o, i), s.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (o = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), o !== s.state && rf.enqueueReplaceState(s, s.state, null), Ys(e, i, s, a), Gs(), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = true;
    } else if (t === null) {
      s = e.stateNode;
      var r = e.memoizedProps, l = Ki(n, r);
      s.props = l;
      var u = s.context, c = n.contextType;
      o = wa, typeof c == "object" && c !== null && (o = Yt(c));
      var f = n.getDerivedStateFromProps;
      c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function", r = e.pendingProps !== r, c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (r || u !== o) && ip(e, s, i, o), Hn = false;
      var h = e.memoizedState;
      s.state = h, Ys(e, i, s, a), Gs(), u = e.memoizedState, r || h !== u || Hn ? (typeof f == "function" && (Uu(e, n, f, i), u = e.memoizedState), (l = Hn || np(e, n, l, i, h, u, o)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = u), s.props = i, s.state = u, s.context = o, i = l) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = false);
    } else {
      s = e.stateNode, Wc(t, e), o = e.memoizedProps, c = Ki(n, o), s.props = c, f = e.pendingProps, h = s.context, u = n.contextType, l = wa, typeof u == "object" && u !== null && (l = Yt(u)), r = n.getDerivedStateFromProps, (u = typeof r == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== f || h !== l) && ip(e, s, i, l), Hn = false, h = e.memoizedState, s.state = h, Ys(e, i, s, a), Gs();
      var d = e.memoizedState;
      o !== f || h !== d || Hn || t !== null && t.dependencies !== null && tl(t.dependencies) ? (typeof r == "function" && (Uu(e, n, r, i), d = e.memoizedState), (c = Hn || np(e, n, c, i, h, d, l) || t !== null && t.dependencies !== null && tl(t.dependencies)) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, d, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, d, l)), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || o === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = d), s.props = i, s.state = d, s.context = l, i = c) : (typeof s.componentDidUpdate != "function" || o === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), i = false);
    }
    return s = i, Or(t, e), i = (e.flags & 128) !== 0, s || i ? (s = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : s.render(), e.flags |= 1, t !== null && i ? (e.child = Xi(e, t.child, null, a), e.child = Xi(e, null, n, a)) : Ht(t, e, n, a), e.memoizedState = s.state, t = e.child) : t = An(t, e, a), t;
  }
  function fp(t, e, n, i) {
    return Yi(), e.flags |= 256, Ht(t, e, n, i), e.child;
  }
  var Pu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Hu(t) {
    return {
      baseLanes: t,
      cachePool: n0()
    };
  }
  function ku(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= fe), t;
  }
  function Q0(t, e, n) {
    var i = e.pendingProps, a = false, s = (e.flags & 128) !== 0, o;
    if ((o = s) || (o = t !== null && t.memoizedState === null ? false : (Et.current & 2) !== 0), o && (a = true, e.flags &= -129), o = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (W) {
        if (a ? Gn(e) : Yn(), (t = mt) ? (t = Pb(t, Ce), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ui !== null ? {
            id: Qe,
            overflow: Ze
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Jv(t), n.return = e, e.child = n, Gt = e, mt = null)) : t = null, t === null) throw ci(e);
        return Tf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var r = i.children;
      return i = i.fallback, a ? (Yn(), a = e.mode, r = rl({
        mode: "hidden",
        children: r
      }, a), i = Ui(i, a, n, null), r.return = e, i.return = e, r.sibling = i, e.child = r, i = e.child, i.memoizedState = Hu(n), i.childLanes = ku(t, o, n), e.memoizedState = Pu, Ns(null, i)) : (Gn(e), cf(e, r));
    }
    var l = t.memoizedState;
    if (l !== null && (r = l.dehydrated, r !== null)) {
      if (s) e.flags & 256 ? (Gn(e), e.flags &= -257, e = Gu(t, e, n)) : e.memoizedState !== null ? (Yn(), e.child = t.child, e.flags |= 128, e = null) : (Yn(), r = i.fallback, a = e.mode, i = rl({
        mode: "visible",
        children: i.children
      }, a), r = Ui(r, a, n, null), r.flags |= 2, i.return = e, r.return = e, i.sibling = r, e.child = i, Xi(e, t.child, null, n), i = e.child, i.memoizedState = Hu(n), i.childLanes = ku(t, o, n), e.memoizedState = Pu, e = Ns(null, i));
      else if (Gn(e), Tf(r)) {
        if (o = r.nextSibling && r.nextSibling.dataset, o) var u = o.dgst;
        o = u, i = Error(M(419)), i.stack = "", i.digest = o, oo({
          value: i,
          source: null,
          stack: null
        }), e = Gu(t, e, n);
      } else if (Ot || ss(t, e, n, false), o = (n & t.childLanes) !== 0, Ot || o) {
        if (o = lt, o !== null && (i = Ev(o, n), i !== 0 && i !== l.retryLane)) throw l.retryLane = i, Ji(t, i), ie(o, t, i), Id;
        wf(r) || fl(), e = Gu(t, e, n);
      } else wf(r) ? (e.flags |= 192, e.child = t.child, e = null) : (t = l.treeContext, mt = De(r.nextSibling), Gt = e, W = true, ti = null, Ce = false, t !== null && t0(e, t), e = cf(e, i.children), e.flags |= 4096);
      return e;
    }
    return a ? (Yn(), r = i.fallback, a = e.mode, l = t.child, u = l.sibling, i = bn(l, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = l.subtreeFlags & 65011712, u !== null ? r = bn(u, r) : (r = Ui(r, a, n, null), r.flags |= 2), r.return = e, i.return = e, i.sibling = r, e.child = i, Ns(null, i), i = e.child, r = t.child.memoizedState, r === null ? r = Hu(n) : (a = r.cachePool, a !== null ? (l = Dt._currentValue, a = a.parent !== l ? {
      parent: l,
      pool: l
    } : a) : a = n0(), r = {
      baseLanes: r.baseLanes | n,
      cachePool: a
    }), i.memoizedState = r, i.childLanes = ku(t, o, n), e.memoizedState = Pu, Ns(t.child, i)) : (Gn(e), n = t.child, t = n.sibling, n = bn(n, {
      mode: "visible",
      children: i.children
    }), n.return = e, n.sibling = null, t !== null && (o = e.deletions, o === null ? (e.deletions = [
      t
    ], e.flags |= 16) : o.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function cf(t, e) {
    return e = rl({
      mode: "visible",
      children: e
    }, t.mode), e.return = t, t.child = e;
  }
  function rl(t, e) {
    return t = ce(22, t, null, e), t.lanes = 0, t;
  }
  function Gu(t, e, n) {
    return Xi(e, t.child, null, n), t = cf(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function dp(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), $c(t.return, e, n);
  }
  function Yu(t, e, n, i, a, s) {
    var o = t.memoizedState;
    o === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: n,
      tailMode: a,
      treeForkCount: s
    } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = i, o.tail = n, o.tailMode = a, o.treeForkCount = s);
  }
  function Z0(t, e, n) {
    var i = e.pendingProps, a = i.revealOrder, s = i.tail;
    i = i.children;
    var o = Et.current, r = (o & 2) !== 0;
    if (r ? (o = o & 1 | 2, e.flags |= 128) : o &= 1, ut(Et, o), Ht(t, e, i, n), i = W ? so : 0, !r && t !== null && t.flags & 128) t: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && dp(t, n, e);
      else if (t.tag === 19) dp(t, n, e);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break t;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) break t;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    switch (a) {
      case "forwards":
        for (n = e.child, a = null; n !== null; ) t = n.alternate, t !== null && il(t) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = e.child, e.child = null) : (a = n.sibling, n.sibling = null), Yu(e, false, a, n, s, i);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, a = e.child, e.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && il(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = n, n = a, a = t;
        }
        Yu(e, true, n, null, s, i);
        break;
      case "together":
        Yu(e, false, null, null, void 0, i);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function An(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), di |= e.lanes, !(n & e.childLanes)) if (t !== null) {
      if (ss(t, e, n, false), (n & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(M(153));
    if (e.child !== null) {
      for (t = e.child, n = bn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = bn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Jd(t, e) {
    return t.lanes & e ? true : (t = t.dependencies, !!(t !== null && tl(t)));
  }
  function AE(t, e, n) {
    switch (e.tag) {
      case 3:
        Kr(e, e.stateNode.containerInfo), kn(e, Dt, t.memoizedState.cache), Yi();
        break;
      case 27:
      case 5:
        Bc(e);
        break;
      case 4:
        Kr(e, e.stateNode.containerInfo);
        break;
      case 10:
        kn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return e.flags |= 128, nf(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null) return i.dehydrated !== null ? (Gn(e), e.flags |= 128, null) : n & e.child.childLanes ? Q0(t, e, n) : (Gn(e), t = An(t, e, n), t !== null ? t.sibling : null);
        Gn(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (i = (n & e.childLanes) !== 0, i || (ss(t, e, n, false), i = (n & e.childLanes) !== 0), a) {
          if (i) return Z0(t, e, n);
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ut(Et, Et.current), i) break;
        return null;
      case 22:
        return e.lanes = 0, K0(t, e, n, e.pendingProps);
      case 24:
        kn(e, Dt, t.memoizedState.cache);
    }
    return An(t, e, n);
  }
  function $0(t, e, n) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) Ot = true;
    else {
      if (!Jd(t, n) && !(e.flags & 128)) return Ot = false, AE(t, e, n);
      Ot = !!(t.flags & 131072);
    }
    else Ot = false, W && e.flags & 1048576 && Wv(e, so, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (t = ji(e.elementType), e.type = t, typeof t == "function") Od(t) ? (i = Ki(t, i), e.tag = 1, e = cp(null, e, t, i, n)) : (e.tag = 0, e = uf(null, e, t, i, n));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === gd) {
                e.tag = 11, e = sp(null, e, t, i, n);
                break t;
              } else if (a === yd) {
                e.tag = 14, e = op(null, e, t, i, n);
                break t;
              }
            }
            throw e = Lc(t) || t, Error(M(306, e, ""));
          }
        }
        return e;
      case 0:
        return uf(t, e, e.type, e.pendingProps, n);
      case 1:
        return i = e.type, a = Ki(i, e.pendingProps), cp(t, e, i, a, n);
      case 3:
        t: {
          if (Kr(e, e.stateNode.containerInfo), t === null) throw Error(M(387));
          i = e.pendingProps;
          var s = e.memoizedState;
          a = s.element, Wc(t, e), Ys(e, i, null, n);
          var o = e.memoizedState;
          if (i = o.cache, kn(e, Dt, i), i !== s.cache && Ic(e, [
            Dt
          ], n, true), Gs(), i = o.element, s.isDehydrated) if (s = {
            element: i,
            isDehydrated: false,
            cache: o.cache
          }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
            e = fp(t, e, i, n);
            break t;
          } else if (i !== a) {
            a = Ae(Error(M(424)), e), oo(a), e = fp(t, e, i, n);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (mt = De(t.firstChild), Gt = e, W = true, ti = null, Ce = true, n = s0(e, null, i, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          }
          else {
            if (Yi(), i === a) {
              e = An(t, e, n);
              break t;
            }
            Ht(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Or(t, e), t === null ? (n = jp(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : W || (n = e.type, t = e.pendingProps, i = pl(Wn.current).createElement(n), i[kt] = e, i[ae] = t, qt(i, n, t), Bt(i), e.stateNode = i) : e.memoizedState = jp(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Bc(e), t === null && W && (i = e.stateNode = Hb(e.type, e.pendingProps, Wn.current), Gt = e, Ce = true, a = mt, xi(e.type) ? (Ef = a, mt = De(i.firstChild)) : mt = a), Ht(t, e, e.pendingProps.children, n), Or(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && W && ((a = i = mt) && (i = eA(i, e.type, e.pendingProps, Ce), i !== null ? (e.stateNode = i, Gt = e, mt = De(i.firstChild), Ce = false, a = true) : a = false), a || ci(e)), Bc(e), a = e.type, s = e.pendingProps, o = t !== null ? t.memoizedProps : null, i = s.children, xf(a, s) ? i = null : o !== null && xf(a, o) && (e.flags |= 32), e.memoizedState !== null && (a = Pd(t, e, gE, null, null, n), ho._currentValue = a), Or(t, e), Ht(t, e, i, n), e.child;
      case 6:
        return t === null && W && ((t = n = mt) && (n = nA(n, e.pendingProps, Ce), n !== null ? (e.stateNode = n, Gt = e, mt = null, t = true) : t = false), t || ci(e)), null;
      case 13:
        return Q0(t, e, n);
      case 4:
        return Kr(e, e.stateNode.containerInfo), i = e.pendingProps, t === null ? e.child = Xi(e, null, i, n) : Ht(t, e, i, n), e.child;
      case 11:
        return sp(t, e, e.type, e.pendingProps, n);
      case 7:
        return Ht(t, e, e.pendingProps, n), e.child;
      case 8:
        return Ht(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Ht(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return i = e.pendingProps, kn(e, e.type, i.value), Ht(t, e, i.children, n), e.child;
      case 9:
        return a = e.type._context, i = e.pendingProps.children, qi(e), a = Yt(a), i = i(a), e.flags |= 1, Ht(t, e, i, n), e.child;
      case 14:
        return op(t, e, e.type, e.pendingProps, n);
      case 15:
        return F0(t, e, e.type, e.pendingProps, n);
      case 19:
        return Z0(t, e, n);
      case 31:
        return EE(t, e, n);
      case 22:
        return K0(t, e, n, e.pendingProps);
      case 24:
        return qi(e), i = Yt(Dt), t === null ? (a = _d(), a === null && (a = lt, s = zd(), a.pooledCache = s, s.refCount++, s !== null && (a.pooledCacheLanes |= n), a = s), e.memoizedState = {
          parent: i,
          cache: a
        }, Vd(e), kn(e, Dt, a)) : (t.lanes & n && (Wc(t, e), Ys(e, null, null, n), Gs()), a = t.memoizedState, s = e.memoizedState, a.parent !== i ? (a = {
          parent: i,
          cache: i
        }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), kn(e, Dt, i)) : (i = s.cache, kn(e, Dt, i), i !== a.cache && Ic(e, [
          Dt
        ], n, true))), Ht(t, e, e.pendingProps.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(M(156, e.tag));
  }
  function un(t) {
    t.flags |= 4;
  }
  function qu(t, e, n, i, a) {
    if ((e = (t.mode & 32) !== 0) && (e = false), e) {
      if (t.flags |= 16777216, (a & 335544128) === a) if (t.stateNode.complete) t.flags |= 8192;
      else if (xb()) t.flags |= 8192;
      else throw Hi = el, Ld;
    } else t.flags &= -16777217;
  }
  function hp(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
    else if (t.flags |= 16777216, !Yb(e)) if (xb()) t.flags |= 8192;
    else throw Hi = el, Ld;
  }
  function sr(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Sv() : 536870912, t.lanes |= e, Ka |= e);
  }
  function ws(t, e) {
    if (!W) switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; ) e.alternate !== null && (n = e), e = e.sibling;
        n === null ? t.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = t.tail;
        for (var i = null; n !== null; ) n.alternate !== null && (i = n), n = n.sibling;
        i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null;
    }
  }
  function dt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, i = 0;
    if (e) for (var a = t.child; a !== null; ) n |= a.lanes | a.childLanes, i |= a.subtreeFlags & 65011712, i |= a.flags & 65011712, a.return = t, a = a.sibling;
    else for (a = t.child; a !== null; ) n |= a.lanes | a.childLanes, i |= a.subtreeFlags, i |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= i, t.childLanes = n, e;
  }
  function CE(t, e, n) {
    var i = e.pendingProps;
    switch (jd(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dt(e), null;
      case 1:
        return dt(e), null;
      case 3:
        return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), xn(Dt), ka(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (la(e) ? un(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Lu())), dt(e), null;
      case 26:
        var a = e.type, s = e.memoizedState;
        return t === null ? (un(e), s !== null ? (dt(e), hp(e, s)) : (dt(e), qu(e, a, null, i, n))) : s ? s !== t.memoizedState ? (un(e), dt(e), hp(e, s)) : (dt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && un(e), dt(e), qu(e, a, t, i, n)), null;
      case 27:
        if (Qr(e), n = Wn.current, a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(M(166));
            return dt(e), null;
          }
          t = Je.current, la(e) ? Gm(e) : (t = Hb(a, i, n), e.stateNode = t, un(e));
        }
        return dt(e), null;
      case 5:
        if (Qr(e), a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(M(166));
            return dt(e), null;
          }
          if (s = Je.current, la(e)) Gm(e);
          else {
            var o = pl(Wn.current);
            switch (s) {
              case 1:
                s = o.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                s = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    s = o.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    s = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                    break;
                  case "script":
                    s = o.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(s.firstChild);
                    break;
                  case "select":
                    s = typeof i.is == "string" ? o.createElement("select", {
                      is: i.is
                    }) : o.createElement("select"), i.multiple ? s.multiple = true : i.size && (s.size = i.size);
                    break;
                  default:
                    s = typeof i.is == "string" ? o.createElement(a, {
                      is: i.is
                    }) : o.createElement(a);
                }
            }
            s[kt] = e, s[ae] = i;
            t: for (o = e.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6) s.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue;
              }
              if (o === e) break t;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === e) break t;
                o = o.return;
              }
              o.sibling.return = o.return, o = o.sibling;
            }
            e.stateNode = s;
            t: switch (qt(s, a, i), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = true;
                break t;
              default:
                i = false;
            }
            i && un(e);
          }
        }
        return dt(e), qu(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(M(166));
          if (t = Wn.current, la(e)) {
            if (t = e.stateNode, n = e.memoizedProps, i = null, a = Gt, a !== null) switch (a.tag) {
              case 27:
              case 5:
                i = a.memoizedProps;
            }
            t[kt] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === true || Vb(t.nodeValue, n)), t || ci(e, true);
          } else t = pl(t).createTextNode(i), t[kt] = e, e.stateNode = t;
        }
        return dt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (i = la(e), n !== null) {
            if (t === null) {
              if (!i) throw Error(M(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(M(557));
              t[kt] = e;
            } else Yi(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            dt(e), t = false;
          } else n = Lu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = true;
          if (!t) return e.flags & 256 ? (le(e), e) : (le(e), null);
          if (e.flags & 128) throw Error(M(558));
        }
        return dt(e), null;
      case 13:
        if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = la(e), i !== null && i.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(M(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(M(317));
              a[kt] = e;
            } else Yi(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            dt(e), a = false;
          } else a = Lu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = true;
          if (!a) return e.flags & 256 ? (le(e), e) : (le(e), null);
        }
        return le(e), e.flags & 128 ? (e.lanes = n, e) : (n = i !== null, t = t !== null && t.memoizedState !== null, n && (i = e.child, a = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (a = i.alternate.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== a && (i.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), sr(e, e.updateQueue), dt(e), null);
      case 4:
        return ka(), t === null && sh(e.stateNode.containerInfo), dt(e), null;
      case 10:
        return xn(e.type), dt(e), null;
      case 19:
        if (Ut(Et), i = e.memoizedState, i === null) return dt(e), null;
        if (a = (e.flags & 128) !== 0, s = i.rendering, s === null) if (a) ws(i, false);
        else {
          if (wt !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
            if (s = il(t), s !== null) {
              for (e.flags |= 128, ws(i, false), t = s.updateQueue, e.updateQueue = t, sr(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; ) Iv(n, t), n = n.sibling;
              return ut(Et, Et.current & 1 | 2), W && mn(e, i.treeForkCount), e.child;
            }
            t = t.sibling;
          }
          i.tail !== null && de() > ul && (e.flags |= 128, a = true, ws(i, false), e.lanes = 4194304);
        }
        else {
          if (!a) if (t = il(s), t !== null) {
            if (e.flags |= 128, a = true, t = t.updateQueue, e.updateQueue = t, sr(e, t), ws(i, true), i.tail === null && i.tailMode === "hidden" && !s.alternate && !W) return dt(e), null;
          } else 2 * de() - i.renderingStartTime > ul && n !== 536870912 && (e.flags |= 128, a = true, ws(i, false), e.lanes = 4194304);
          i.isBackwards ? (s.sibling = e.child, e.child = s) : (t = i.last, t !== null ? t.sibling = s : e.child = s, i.last = s);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = de(), t.sibling = null, n = Et.current, ut(Et, a ? n & 1 | 2 : n & 1), W && mn(e, i.treeForkCount), t) : (dt(e), null);
      case 22:
      case 23:
        return le(e), Bd(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? n & 536870912 && !(e.flags & 128) && (dt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : dt(e), n = e.updateQueue, n !== null && sr(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && Ut(Pi), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), xn(Dt), dt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(M(156, e.tag));
  }
  function ME(t, e) {
    switch (jd(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return xn(Dt), ka(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Qr(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (le(e), e.alternate === null) throw Error(M(340));
          Yi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (le(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(M(340));
          Yi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Ut(Et), null;
      case 4:
        return ka(), null;
      case 10:
        return xn(e.type), null;
      case 22:
      case 23:
        return le(e), Bd(), t !== null && Ut(Pi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return xn(Dt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function I0(t, e) {
    switch (jd(e), e.tag) {
      case 3:
        xn(Dt), ka();
        break;
      case 26:
      case 27:
      case 5:
        Qr(e);
        break;
      case 4:
        ka();
        break;
      case 31:
        e.memoizedState !== null && le(e);
        break;
      case 13:
        le(e);
        break;
      case 19:
        Ut(Et);
        break;
      case 10:
        xn(e.type);
        break;
      case 22:
      case 23:
        le(e), Bd(), t !== null && Ut(Pi);
        break;
      case 24:
        xn(Dt);
    }
  }
  function Vo(t, e) {
    try {
      var n = e.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var a = i.next;
        n = a;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var s = n.create, o = n.inst;
            i = s(), o.destroy = i;
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (r) {
      it(e, e.return, r);
    }
  }
  function fi(t, e, n) {
    try {
      var i = e.updateQueue, a = i !== null ? i.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        i = s;
        do {
          if ((i.tag & t) === t) {
            var o = i.inst, r = o.destroy;
            if (r !== void 0) {
              o.destroy = void 0, a = e;
              var l = n, u = r;
              try {
                u();
              } catch (c) {
                it(a, l, c);
              }
            }
          }
          i = i.next;
        } while (i !== s);
      }
    } catch (c) {
      it(e, e.return, c);
    }
  }
  function J0(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        r0(e, n);
      } catch (i) {
        it(t, t.return, i);
      }
    }
  }
  function W0(t, e, n) {
    n.props = Ki(t.type, t.memoizedProps), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      it(t, e, i);
    }
  }
  function Xs(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(i) : n.current = i;
      }
    } catch (a) {
      it(t, e, a);
    }
  }
  function $e(t, e) {
    var n = t.ref, i = t.refCleanup;
    if (n !== null) if (typeof i == "function") try {
      i();
    } catch (a) {
      it(t, e, a);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof n == "function") try {
      n(null);
    } catch (a) {
      it(t, e, a);
    }
    else n.current = null;
  }
  function tb(t) {
    var e = t.type, n = t.memoizedProps, i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (a) {
      it(t, t.return, a);
    }
  }
  function Xu(t, e, n) {
    try {
      var i = t.stateNode;
      ZE(i, t.type, n, e), i[ae] = e;
    } catch (a) {
      it(t, t.return, a);
    }
  }
  function eb(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && xi(t.type) || t.tag === 4;
  }
  function Fu(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || eb(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && xi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ff(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = yn));
    else if (i !== 4 && (i === 27 && xi(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null)) for (ff(t, e, n), t = t.sibling; t !== null; ) ff(t, e, n), t = t.sibling;
  }
  function ll(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && (i === 27 && xi(t.type) && (n = t.stateNode), t = t.child, t !== null)) for (ll(t, e, n), t = t.sibling; t !== null; ) ll(t, e, n), t = t.sibling;
  }
  function nb(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var i = t.type, a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
      qt(e, i, n), e[kt] = t, e[ae] = n;
    } catch (s) {
      it(t, t.return, s);
    }
  }
  var pn = false, Rt = false, Ku = false, mp = typeof WeakSet == "function" ? WeakSet : Set, Vt = null;
  function RE(t, e) {
    if (t = t.containerInfo, vf = bl, t = Yv(t), Md(t)) {
      if ("selectionStart" in t) var n = {
        start: t.selectionStart,
        end: t.selectionEnd
      };
      else t: {
        n = (n = t.ownerDocument) && n.defaultView || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var a = i.anchorOffset, s = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break t;
          }
          var o = 0, r = -1, l = -1, u = 0, c = 0, f = t, h = null;
          e: for (; ; ) {
            for (var d; f !== n || a !== 0 && f.nodeType !== 3 || (r = o + a), f !== s || i !== 0 && f.nodeType !== 3 || (l = o + i), f.nodeType === 3 && (o += f.nodeValue.length), (d = f.firstChild) !== null; ) h = f, f = d;
            for (; ; ) {
              if (f === t) break e;
              if (h === n && ++u === a && (r = o), h === s && ++c === i && (l = o), (d = f.nextSibling) !== null) break;
              f = h, h = f.parentNode;
            }
            f = d;
          }
          n = r === -1 || l === -1 ? null : {
            start: r,
            end: l
          };
        } else n = null;
      }
      n = n || {
        start: 0,
        end: 0
      };
    } else n = null;
    for (bf = {
      focusedElem: t,
      selectionRange: n
    }, bl = false, Vt = e; Vt !== null; ) if (e = Vt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Vt = t;
    else for (; Vt !== null; ) {
      switch (e = Vt, s = e.alternate, t = e.flags, e.tag) {
        case 0:
          if (t & 4 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (n = 0; n < t.length; n++) a = t[n], a.ref.impl = a.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if (t & 1024 && s !== null) {
            t = void 0, n = e, a = s.memoizedProps, s = s.memoizedState, i = n.stateNode;
            try {
              var v = Ki(n.type, a);
              t = i.getSnapshotBeforeUpdate(v, s), i.__reactInternalSnapshotBeforeUpdate = t;
            } catch (y) {
              it(n, n.return, y);
            }
          }
          break;
        case 3:
          if (t & 1024) {
            if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) Sf(t);
            else if (n === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Sf(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if (t & 1024) throw Error(M(163));
      }
      if (t = e.sibling, t !== null) {
        t.return = e.return, Vt = t;
        break;
      }
      Vt = e.return;
    }
  }
  function ib(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        fn(t, n), i & 4 && Vo(5, n);
        break;
      case 1:
        if (fn(t, n), i & 4) if (t = n.stateNode, e === null) try {
          t.componentDidMount();
        } catch (o) {
          it(n, n.return, o);
        }
        else {
          var a = Ki(n.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (o) {
            it(n, n.return, o);
          }
        }
        i & 64 && J0(n), i & 512 && Xs(n, n.return);
        break;
      case 3:
        if (fn(t, n), i & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null) switch (n.child.tag) {
            case 27:
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
          try {
            r0(t, e);
          } catch (o) {
            it(n, n.return, o);
          }
        }
        break;
      case 27:
        e === null && i & 4 && nb(n);
      case 26:
      case 5:
        fn(t, n), e === null && i & 4 && tb(n), i & 512 && Xs(n, n.return);
        break;
      case 12:
        fn(t, n);
        break;
      case 31:
        fn(t, n), i & 4 && ob(t, n);
        break;
      case 13:
        fn(t, n), i & 4 && rb(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = BE.bind(null, n), iA(t, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || pn, !i) {
          e = e !== null && e.memoizedState !== null || Rt, a = pn;
          var s = Rt;
          pn = i, (Rt = e) && !s ? hn(t, n, (n.subtreeFlags & 8772) !== 0) : fn(t, n), pn = a, Rt = s;
        }
        break;
      case 30:
        break;
      default:
        fn(t, n);
    }
  }
  function ab(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, ab(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Sd(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var vt = null, te = false;
  function cn(t, e, n) {
    for (n = n.child; n !== null; ) sb(t, e, n), n = n.sibling;
  }
  function sb(t, e, n) {
    if (he && typeof he.onCommitFiberUnmount == "function") try {
      he.onCommitFiberUnmount(Do, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        Rt || $e(n, e), cn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Rt || $e(n, e);
        var i = vt, a = te;
        xi(n.type) && (vt = n.stateNode, te = false), cn(t, e, n), Zs(n.stateNode), vt = i, te = a;
        break;
      case 5:
        Rt || $e(n, e);
      case 6:
        if (i = vt, a = te, vt = null, cn(t, e, n), vt = i, te = a, vt !== null) if (te) try {
          (vt.nodeType === 9 ? vt.body : vt.nodeName === "HTML" ? vt.ownerDocument.body : vt).removeChild(n.stateNode);
        } catch (s) {
          it(n, e, s);
        }
        else try {
          vt.removeChild(n.stateNode);
        } catch (s) {
          it(n, e, s);
        }
        break;
      case 18:
        vt !== null && (te ? (t = vt, Mp(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), Ia(t)) : Mp(vt, n.stateNode));
        break;
      case 4:
        i = vt, a = te, vt = n.stateNode.containerInfo, te = true, cn(t, e, n), vt = i, te = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        fi(2, n, e), Rt || fi(4, n, e), cn(t, e, n);
        break;
      case 1:
        Rt || ($e(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && W0(n, e, i)), cn(t, e, n);
        break;
      case 21:
        cn(t, e, n);
        break;
      case 22:
        Rt = (i = Rt) || n.memoizedState !== null, cn(t, e, n), Rt = i;
        break;
      default:
        cn(t, e, n);
    }
  }
  function ob(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ia(t);
      } catch (n) {
        it(e, e.return, n);
      }
    }
  }
  function rb(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Ia(t);
    } catch (n) {
      it(e, e.return, n);
    }
  }
  function DE(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new mp()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new mp()), e;
      default:
        throw Error(M(435, t.tag));
    }
  }
  function or(t, e) {
    var n = DE(t);
    e.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var a = UE.bind(null, t, i);
        i.then(a, a);
      }
    });
  }
  function Jt(t, e) {
    var n = e.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var a = n[i], s = t, o = e, r = o;
      t: for (; r !== null; ) {
        switch (r.tag) {
          case 27:
            if (xi(r.type)) {
              vt = r.stateNode, te = false;
              break t;
            }
            break;
          case 5:
            vt = r.stateNode, te = false;
            break t;
          case 3:
          case 4:
            vt = r.stateNode.containerInfo, te = true;
            break t;
        }
        r = r.return;
      }
      if (vt === null) throw Error(M(160));
      sb(s, o, a), vt = null, te = false, s = a.alternate, s !== null && (s.return = null), a.return = null;
    }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) lb(e, t), e = e.sibling;
  }
  var ke = null;
  function lb(t, e) {
    var n = t.alternate, i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jt(e, t), Wt(t), i & 4 && (fi(3, t, t.return), Vo(3, t), fi(5, t, t.return));
        break;
      case 1:
        Jt(e, t), Wt(t), i & 512 && (Rt || n === null || $e(n, n.return)), i & 64 && pn && (t = t.updateQueue, t !== null && (i = t.callbacks, i !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
      case 26:
        var a = ke;
        if (Jt(e, t), Wt(t), i & 512 && (Rt || n === null || $e(n, n.return)), i & 4) {
          var s = n !== null ? n.memoizedState : null;
          if (i = t.memoizedState, n === null) if (i === null) if (t.stateNode === null) {
            t: {
              i = t.type, n = t.memoizedProps, a = a.ownerDocument || a;
              e: switch (i) {
                case "title":
                  s = a.getElementsByTagName("title")[0], (!s || s[jo] || s[kt] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = a.createElement(i), a.head.insertBefore(s, a.querySelector("head > title"))), qt(s, i, n), s[kt] = t, Bt(s), i = s;
                  break t;
                case "link":
                  var o = _p("link", "href", a).get(i + (n.href || ""));
                  if (o) {
                    for (var r = 0; r < o.length; r++) if (s = o[r], s.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && s.getAttribute("rel") === (n.rel == null ? null : n.rel) && s.getAttribute("title") === (n.title == null ? null : n.title) && s.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      o.splice(r, 1);
                      break e;
                    }
                  }
                  s = a.createElement(i), qt(s, i, n), a.head.appendChild(s);
                  break;
                case "meta":
                  if (o = _p("meta", "content", a).get(i + (n.content || ""))) {
                    for (r = 0; r < o.length; r++) if (s = o[r], s.getAttribute("content") === (n.content == null ? null : "" + n.content) && s.getAttribute("name") === (n.name == null ? null : n.name) && s.getAttribute("property") === (n.property == null ? null : n.property) && s.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && s.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                      o.splice(r, 1);
                      break e;
                    }
                  }
                  s = a.createElement(i), qt(s, i, n), a.head.appendChild(s);
                  break;
                default:
                  throw Error(M(468, i));
              }
              s[kt] = t, Bt(s), i = s;
            }
            t.stateNode = i;
          } else Lp(a, t.type, t.stateNode);
          else t.stateNode = zp(a, i, t.memoizedProps);
          else s !== i ? (s === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : s.count--, i === null ? Lp(a, t.type, t.stateNode) : zp(a, i, t.memoizedProps)) : i === null && t.stateNode !== null && Xu(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Jt(e, t), Wt(t), i & 512 && (Rt || n === null || $e(n, n.return)), n !== null && i & 4 && Xu(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (Jt(e, t), Wt(t), i & 512 && (Rt || n === null || $e(n, n.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            Ya(a, "");
          } catch (v) {
            it(t, t.return, v);
          }
        }
        i & 4 && t.stateNode != null && (a = t.memoizedProps, Xu(t, a, n !== null ? n.memoizedProps : a)), i & 1024 && (Ku = true);
        break;
      case 6:
        if (Jt(e, t), Wt(t), i & 4) {
          if (t.stateNode === null) throw Error(M(162));
          i = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = i;
          } catch (v) {
            it(t, t.return, v);
          }
        }
        break;
      case 3:
        if (zr = null, a = ke, ke = gl(e.containerInfo), Jt(e, t), ke = a, Wt(t), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ia(e.containerInfo);
        } catch (v) {
          it(t, t.return, v);
        }
        Ku && (Ku = false, ub(t));
        break;
      case 4:
        i = ke, ke = gl(t.stateNode.containerInfo), Jt(e, t), Wt(t), ke = i;
        break;
      case 12:
        Jt(e, t), Wt(t);
        break;
      case 31:
        Jt(e, t), Wt(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, or(t, i)));
        break;
      case 13:
        Jt(e, t), Wt(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Il = de()), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, or(t, i)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var l = n !== null && n.memoizedState !== null, u = pn, c = Rt;
        if (pn = u || a, Rt = c || l, Jt(e, t), Rt = c, pn = u, Wt(t), i & 8192) t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (n === null || l || pn || Rt || zi(t)), n = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (n === null) {
              l = n = e;
              try {
                if (s = l.stateNode, a) o = s.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
                else {
                  r = l.stateNode;
                  var f = l.memoizedProps.style, h = f != null && f.hasOwnProperty("display") ? f.display : null;
                  r.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                }
              } catch (v) {
                it(l, l.return, v);
              }
            }
          } else if (e.tag === 6) {
            if (n === null) {
              l = e;
              try {
                l.stateNode.nodeValue = a ? "" : l.memoizedProps;
              } catch (v) {
                it(l, l.return, v);
              }
            }
          } else if (e.tag === 18) {
            if (n === null) {
              l = e;
              try {
                var d = l.stateNode;
                a ? Rp(d, true) : Rp(l.stateNode, false);
              } catch (v) {
                it(l, l.return, v);
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break t;
            n === e && (n = null), e = e.return;
          }
          n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
        }
        i & 4 && (i = t.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, or(t, n))));
        break;
      case 19:
        Jt(e, t), Wt(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, or(t, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Jt(e, t), Wt(t);
    }
  }
  function Wt(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (eb(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(M(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, s = Fu(t);
            ll(t, s, a);
            break;
          case 5:
            var o = n.stateNode;
            n.flags & 32 && (Ya(o, ""), n.flags &= -33);
            var r = Fu(t);
            ll(t, r, o);
            break;
          case 3:
          case 4:
            var l = n.stateNode.containerInfo, u = Fu(t);
            ff(t, u, l);
            break;
          default:
            throw Error(M(161));
        }
      } catch (c) {
        it(t, t.return, c);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function ub(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      ub(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function fn(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) ib(t, e.alternate, e), e = e.sibling;
  }
  function zi(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          fi(4, e, e.return), zi(e);
          break;
        case 1:
          $e(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && W0(e, e.return, n), zi(e);
          break;
        case 27:
          Zs(e.stateNode);
        case 26:
        case 5:
          $e(e, e.return), zi(e);
          break;
        case 22:
          e.memoizedState === null && zi(e);
          break;
        case 30:
          zi(e);
          break;
        default:
          zi(e);
      }
      t = t.sibling;
    }
  }
  function hn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate, a = t, s = e, o = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          hn(a, s, n), Vo(4, s);
          break;
        case 1:
          if (hn(a, s, n), i = s, a = i.stateNode, typeof a.componentDidMount == "function") try {
            a.componentDidMount();
          } catch (u) {
            it(i, i.return, u);
          }
          if (i = s, a = i.updateQueue, a !== null) {
            var r = i.stateNode;
            try {
              var l = a.shared.hiddenCallbacks;
              if (l !== null) for (a.shared.hiddenCallbacks = null, a = 0; a < l.length; a++) o0(l[a], r);
            } catch (u) {
              it(i, i.return, u);
            }
          }
          n && o & 64 && J0(s), Xs(s, s.return);
          break;
        case 27:
          nb(s);
        case 26:
        case 5:
          hn(a, s, n), n && i === null && o & 4 && tb(s), Xs(s, s.return);
          break;
        case 12:
          hn(a, s, n);
          break;
        case 31:
          hn(a, s, n), n && o & 4 && ob(a, s);
          break;
        case 13:
          hn(a, s, n), n && o & 4 && rb(a, s);
          break;
        case 22:
          s.memoizedState === null && hn(a, s, n), Xs(s, s.return);
          break;
        case 30:
          break;
        default:
          hn(a, s, n);
      }
      e = e.sibling;
    }
  }
  function Wd(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && _o(n));
  }
  function th(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && _o(t));
  }
  function Ve(t, e, n, i) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) cb(t, e, n, i), e = e.sibling;
  }
  function cb(t, e, n, i) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ve(t, e, n, i), a & 2048 && Vo(9, e);
        break;
      case 1:
        Ve(t, e, n, i);
        break;
      case 3:
        Ve(t, e, n, i), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && _o(t)));
        break;
      case 12:
        if (a & 2048) {
          Ve(t, e, n, i), t = e.stateNode;
          try {
            var s = e.memoizedProps, o = s.id, r = s.onPostCommit;
            typeof r == "function" && r(o, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (l) {
            it(e, e.return, l);
          }
        } else Ve(t, e, n, i);
        break;
      case 31:
        Ve(t, e, n, i);
        break;
      case 13:
        Ve(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        s = e.stateNode, o = e.alternate, e.memoizedState !== null ? s._visibility & 2 ? Ve(t, e, n, i) : Fs(t, e) : s._visibility & 2 ? Ve(t, e, n, i) : (s._visibility |= 2, fa(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || false)), a & 2048 && Wd(o, e);
        break;
      case 24:
        Ve(t, e, n, i), a & 2048 && th(e.alternate, e);
        break;
      default:
        Ve(t, e, n, i);
    }
  }
  function fa(t, e, n, i, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
      var s = t, o = e, r = n, l = i, u = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          fa(s, o, r, l, a), Vo(8, o);
          break;
        case 23:
          break;
        case 22:
          var c = o.stateNode;
          o.memoizedState !== null ? c._visibility & 2 ? fa(s, o, r, l, a) : Fs(s, o) : (c._visibility |= 2, fa(s, o, r, l, a)), a && u & 2048 && Wd(o.alternate, o);
          break;
        case 24:
          fa(s, o, r, l, a), a && u & 2048 && th(o.alternate, o);
          break;
        default:
          fa(s, o, r, l, a);
      }
      e = e.sibling;
    }
  }
  function Fs(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var n = t, i = e, a = i.flags;
      switch (i.tag) {
        case 22:
          Fs(n, i), a & 2048 && Wd(i.alternate, i);
          break;
        case 24:
          Fs(n, i), a & 2048 && th(i.alternate, i);
          break;
        default:
          Fs(n, i);
      }
      e = e.sibling;
    }
  }
  var js = 8192;
  function ua(t, e, n) {
    if (t.subtreeFlags & js) for (t = t.child; t !== null; ) fb(t, e, n), t = t.sibling;
  }
  function fb(t, e, n) {
    switch (t.tag) {
      case 26:
        ua(t, e, n), t.flags & js && t.memoizedState !== null && pA(n, ke, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ua(t, e, n);
        break;
      case 3:
      case 4:
        var i = ke;
        ke = gl(t.stateNode.containerInfo), ua(t, e, n), ke = i;
        break;
      case 22:
        t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = js, js = 16777216, ua(t, e, n), js = i) : ua(t, e, n));
        break;
      default:
        ua(t, e, n);
    }
  }
  function db(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Ts(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var i = e[n];
        Vt = i, mb(i, t);
      }
      db(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) hb(t), t = t.sibling;
  }
  function hb(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ts(t), t.flags & 2048 && fi(9, t, t.return);
        break;
      case 3:
        Ts(t);
        break;
      case 12:
        Ts(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Nr(t)) : Ts(t);
        break;
      default:
        Ts(t);
    }
  }
  function Nr(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var i = e[n];
        Vt = i, mb(i, t);
      }
      db(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          fi(8, e, e.return), Nr(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Nr(e));
          break;
        default:
          Nr(e);
      }
      t = t.sibling;
    }
  }
  function mb(t, e) {
    for (; Vt !== null; ) {
      var n = Vt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          fi(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          _o(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, Vt = i;
      else t: for (n = t; Vt !== null; ) {
        i = Vt;
        var a = i.sibling, s = i.return;
        if (ab(i), i === n) {
          Vt = null;
          break t;
        }
        if (a !== null) {
          a.return = s, Vt = a;
          break t;
        }
        Vt = s;
      }
    }
  }
  var OE = {
    getCacheForType: function(t) {
      var e = Yt(Dt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return Yt(Dt).controller.signal;
    }
  }, NE = typeof WeakMap == "function" ? WeakMap : Map, tt = 0, lt = null, Q = null, I = 0, nt = 0, re = null, Qn = false, rs = false, eh = false, Cn = 0, wt = 0, di = 0, ki = 0, nh = 0, fe = 0, Ka = 0, Ks = null, ee = null, df = false, Il = 0, pb = 0, ul = 1 / 0, cl = null, ii = null, _t = 0, ai = null, Qa = null, Sn = 0, hf = 0, mf = null, gb = null, Qs = 0, pf = null;
  function pe() {
    return tt & 2 && I !== 0 ? I & -I : H.T !== null ? ah() : Av();
  }
  function yb() {
    if (fe === 0) if (!(I & 536870912) || W) {
      var t = Jo;
      Jo <<= 1, !(Jo & 3932160) && (Jo = 262144), fe = t;
    } else fe = 536870912;
    return t = ve.current, t !== null && (t.flags |= 32), fe;
  }
  function ie(t, e, n) {
    (t === lt && (nt === 2 || nt === 9) || t.cancelPendingCommit !== null) && (Za(t, 0), Zn(t, I, fe, false)), No(t, n), (!(tt & 2) || t !== lt) && (t === lt && (!(tt & 2) && (ki |= n), wt === 4 && Zn(t, I, fe, false)), sn(t));
  }
  function vb(t, e, n) {
    if (tt & 6) throw Error(M(327));
    var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Oo(t, e), a = i ? _E(t, e) : Qu(t, e, true), s = i;
    do {
      if (a === 0) {
        rs && !i && Zn(t, e, 0, false);
        break;
      } else {
        if (n = t.current.alternate, s && !jE(n)) {
          a = Qu(t, e, false), s = false;
          continue;
        }
        if (a === 2) {
          if (s = e, t.errorRecoveryDisabledLanes & s) var o = 0;
          else o = t.pendingLanes & -536870913, o = o !== 0 ? o : o & 536870912 ? 536870912 : 0;
          if (o !== 0) {
            e = o;
            t: {
              var r = t;
              a = Ks;
              var l = r.current.memoizedState.isDehydrated;
              if (l && (Za(r, o).flags |= 256), o = Qu(r, o, false), o !== 2) {
                if (eh && !l) {
                  r.errorRecoveryDisabledLanes |= s, ki |= s, a = 4;
                  break t;
                }
                s = ee, ee = a, s !== null && (ee === null ? ee = s : ee.push.apply(ee, s));
              }
              a = o;
            }
            if (s = false, a !== 2) continue;
          }
        }
        if (a === 1) {
          Za(t, 0), Zn(t, e, 0, true);
          break;
        }
        t: {
          switch (i = t, s = a, s) {
            case 0:
            case 1:
              throw Error(M(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Zn(i, e, fe, !Qn);
              break t;
            case 2:
              ee = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(M(329));
          }
          if ((e & 62914560) === e && (a = Il + 300 - de(), 10 < a)) {
            if (Zn(i, e, fe, !Qn), Hl(i, 0, true) !== 0) break t;
            Sn = e, i.timeoutHandle = Ub(pp.bind(null, i, n, ee, cl, df, e, fe, ki, Ka, Qn, s, "Throttled", -0, 0), a);
            break t;
          }
          pp(i, n, ee, cl, df, e, fe, ki, Ka, Qn, s, null, -0, 0);
        }
      }
      break;
    } while (true);
    sn(t);
  }
  function pp(t, e, n, i, a, s, o, r, l, u, c, f, h, d) {
    if (t.timeoutHandle = -1, f = e.subtreeFlags, f & 8192 || (f & 16785408) === 16785408) {
      f = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: true,
        waitingForViewTransition: false,
        unsuspend: yn
      }, fb(e, s, f);
      var v = (s & 62914560) === s ? Il - de() : (s & 4194048) === s ? pb - de() : 0;
      if (v = gA(f, v), v !== null) {
        Sn = s, t.cancelPendingCommit = v(yp.bind(null, t, e, s, n, i, a, o, r, l, c, f, null, h, d)), Zn(t, s, o, !u);
        return;
      }
    }
    yp(t, e, s, n, i, a, o, r, l);
  }
  function jE(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null))) for (var i = 0; i < n.length; i++) {
        var a = n[i], s = a.getSnapshot;
        a = a.value;
        try {
          if (!ye(s(), a)) return false;
        } catch {
          return false;
        }
      }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return true;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return true;
  }
  function Zn(t, e, n, i) {
    e &= ~nh, e &= ~ki, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var s = 31 - me(a), o = 1 << s;
      i[s] = -1, a &= ~o;
    }
    n !== 0 && wv(t, n, e);
  }
  function Jl() {
    return tt & 6 ? true : (Bo(0), false);
  }
  function ih() {
    if (Q !== null) {
      if (nt === 0) var t = Q.return;
      else t = Q, vn = Wi = null, Gd(t), La = null, ro = 0, t = Q;
      for (; t !== null; ) I0(t.alternate, t), t = t.return;
      Q = null;
    }
  }
  function Za(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, JE(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Sn = 0, ih(), lt = t, Q = n = bn(t.current, null), I = e, nt = 0, re = null, Qn = false, rs = Oo(t, e), eh = false, Ka = fe = nh = ki = di = wt = 0, ee = Ks = null, df = false, e & 8 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0) for (t = t.entanglements, i &= e; 0 < i; ) {
      var a = 31 - me(i), s = 1 << a;
      e |= t[a], i &= ~s;
    }
    return Cn = e, ql(), n;
  }
  function bb(t, e) {
    Y = null, H.H = uo, e === os || e === Fl ? (e = Km(), nt = 3) : e === Ld ? (e = Km(), nt = 4) : nt = e === Id ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, re = e, Q === null && (wt = 1, ol(t, Ae(e, t.current)));
  }
  function xb() {
    var t = ve.current;
    return t === null ? true : (I & 4194048) === I ? Re === null : (I & 62914560) === I || I & 536870912 ? t === Re : false;
  }
  function Sb() {
    var t = H.H;
    return H.H = uo, t === null ? uo : t;
  }
  function wb() {
    var t = H.A;
    return H.A = OE, t;
  }
  function fl() {
    wt = 4, Qn || (I & 4194048) !== I && ve.current !== null || (rs = true), !(di & 134217727) && !(ki & 134217727) || lt === null || Zn(lt, I, fe, false);
  }
  function Qu(t, e, n) {
    var i = tt;
    tt |= 2;
    var a = Sb(), s = wb();
    (lt !== t || I !== e) && (cl = null, Za(t, e)), e = false;
    var o = wt;
    t: do
      try {
        if (nt !== 0 && Q !== null) {
          var r = Q, l = re;
          switch (nt) {
            case 8:
              ih(), o = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ve.current === null && (e = true);
              var u = nt;
              if (nt = 0, re = null, Aa(t, r, l, u), n && rs) {
                o = 0;
                break t;
              }
              break;
            default:
              u = nt, nt = 0, re = null, Aa(t, r, l, u);
          }
        }
        zE(), o = wt;
        break;
      } catch (c) {
        bb(t, c);
      }
    while (true);
    return e && t.shellSuspendCounter++, vn = Wi = null, tt = i, H.H = a, H.A = s, Q === null && (lt = null, I = 0, ql()), o;
  }
  function zE() {
    for (; Q !== null; ) Tb(Q);
  }
  function _E(t, e) {
    var n = tt;
    tt |= 2;
    var i = Sb(), a = wb();
    lt !== t || I !== e ? (cl = null, ul = de() + 500, Za(t, e)) : rs = Oo(t, e);
    t: do
      try {
        if (nt !== 0 && Q !== null) {
          e = Q;
          var s = re;
          e: switch (nt) {
            case 1:
              nt = 0, re = null, Aa(t, e, s, 1);
              break;
            case 2:
            case 9:
              if (Fm(s)) {
                nt = 0, re = null, gp(e);
                break;
              }
              e = function() {
                nt !== 2 && nt !== 9 || lt !== t || (nt = 7), sn(t);
              }, s.then(e, e);
              break t;
            case 3:
              nt = 7;
              break t;
            case 4:
              nt = 5;
              break t;
            case 7:
              Fm(s) ? (nt = 0, re = null, gp(e)) : (nt = 0, re = null, Aa(t, e, s, 7));
              break;
            case 5:
              var o = null;
              switch (Q.tag) {
                case 26:
                  o = Q.memoizedState;
                case 5:
                case 27:
                  var r = Q;
                  if (o ? Yb(o) : r.stateNode.complete) {
                    nt = 0, re = null;
                    var l = r.sibling;
                    if (l !== null) Q = l;
                    else {
                      var u = r.return;
                      u !== null ? (Q = u, Wl(u)) : Q = null;
                    }
                    break e;
                  }
              }
              nt = 0, re = null, Aa(t, e, s, 5);
              break;
            case 6:
              nt = 0, re = null, Aa(t, e, s, 6);
              break;
            case 8:
              ih(), wt = 6;
              break t;
            default:
              throw Error(M(462));
          }
        }
        LE();
        break;
      } catch (c) {
        bb(t, c);
      }
    while (true);
    return vn = Wi = null, H.H = i, H.A = a, tt = n, Q !== null ? 0 : (lt = null, I = 0, ql(), wt);
  }
  function LE() {
    for (; Q !== null && !aT(); ) Tb(Q);
  }
  function Tb(t) {
    var e = $0(t.alternate, t, Cn);
    t.memoizedProps = t.pendingProps, e === null ? Wl(t) : Q = e;
  }
  function gp(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = up(n, e, e.pendingProps, e.type, void 0, I);
        break;
      case 11:
        e = up(n, e, e.pendingProps, e.type.render, e.ref, I);
        break;
      case 5:
        Gd(e);
      default:
        I0(n, e), e = Q = Iv(e, Cn), e = $0(n, e, Cn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Wl(t) : Q = e;
  }
  function Aa(t, e, n, i) {
    vn = Wi = null, Gd(e), La = null, ro = 0;
    var a = e.return;
    try {
      if (TE(t, a, e, n, I)) {
        wt = 1, ol(t, Ae(n, t.current)), Q = null;
        return;
      }
    } catch (s) {
      if (a !== null) throw Q = a, s;
      wt = 1, ol(t, Ae(n, t.current)), Q = null;
      return;
    }
    e.flags & 32768 ? (W || i === 1 ? t = true : rs || I & 536870912 ? t = false : (Qn = t = true, (i === 2 || i === 9 || i === 3 || i === 6) && (i = ve.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Eb(e, t)) : Wl(e);
  }
  function Wl(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        Eb(e, Qn);
        return;
      }
      t = e.return;
      var n = CE(e.alternate, e, Cn);
      if (n !== null) {
        Q = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Q = e;
        return;
      }
      Q = e = t;
    } while (e !== null);
    wt === 0 && (wt = 5);
  }
  function Eb(t, e) {
    do {
      var n = ME(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Q = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Q = t;
        return;
      }
      Q = t = n;
    } while (t !== null);
    wt = 6, Q = null;
  }
  function yp(t, e, n, i, a, s, o, r, l) {
    t.cancelPendingCommit = null;
    do
      tu();
    while (_t !== 0);
    if (tt & 6) throw Error(M(327));
    if (e !== null) {
      if (e === t.current) throw Error(M(177));
      if (s = e.lanes | e.childLanes, s |= Rd, mT(t, n, s, o, r, l), t === lt && (Q = lt = null, I = 0), Qa = e, ai = t, Sn = n, hf = s, mf = a, gb = i, e.subtreeFlags & 10256 || e.flags & 10256 ? (t.callbackNode = null, t.callbackPriority = 0, PE(Zr, function() {
        return Db(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), i = (e.flags & 13878) !== 0, e.subtreeFlags & 13878 || i) {
        i = H.T, H.T = null, a = et.p, et.p = 2, o = tt, tt |= 4;
        try {
          RE(t, e, n);
        } finally {
          tt = o, et.p = a, H.T = i;
        }
      }
      _t = 1, Ab(), Cb(), Mb();
    }
  }
  function Ab() {
    if (_t === 1) {
      _t = 0;
      var t = ai, e = Qa, n = (e.flags & 13878) !== 0;
      if (e.subtreeFlags & 13878 || n) {
        n = H.T, H.T = null;
        var i = et.p;
        et.p = 2;
        var a = tt;
        tt |= 4;
        try {
          lb(e, t);
          var s = bf, o = Yv(t.containerInfo), r = s.focusedElem, l = s.selectionRange;
          if (o !== r && r && r.ownerDocument && Gv(r.ownerDocument.documentElement, r)) {
            if (l !== null && Md(r)) {
              var u = l.start, c = l.end;
              if (c === void 0 && (c = u), "selectionStart" in r) r.selectionStart = u, r.selectionEnd = Math.min(c, r.value.length);
              else {
                var f = r.ownerDocument || document, h = f && f.defaultView || window;
                if (h.getSelection) {
                  var d = h.getSelection(), v = r.textContent.length, y = Math.min(l.start, v), b = l.end === void 0 ? y : Math.min(l.end, v);
                  !d.extend && y > b && (o = b, b = y, y = o);
                  var p = Pm(r, y), m = Pm(r, b);
                  if (p && m && (d.rangeCount !== 1 || d.anchorNode !== p.node || d.anchorOffset !== p.offset || d.focusNode !== m.node || d.focusOffset !== m.offset)) {
                    var g = f.createRange();
                    g.setStart(p.node, p.offset), d.removeAllRanges(), y > b ? (d.addRange(g), d.extend(m.node, m.offset)) : (g.setEnd(m.node, m.offset), d.addRange(g));
                  }
                }
              }
            }
            for (f = [], d = r; d = d.parentNode; ) d.nodeType === 1 && f.push({
              element: d,
              left: d.scrollLeft,
              top: d.scrollTop
            });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < f.length; r++) {
              var S = f[r];
              S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
            }
          }
          bl = !!vf, bf = vf = null;
        } finally {
          tt = a, et.p = i, H.T = n;
        }
      }
      t.current = e, _t = 2;
    }
  }
  function Cb() {
    if (_t === 2) {
      _t = 0;
      var t = ai, e = Qa, n = (e.flags & 8772) !== 0;
      if (e.subtreeFlags & 8772 || n) {
        n = H.T, H.T = null;
        var i = et.p;
        et.p = 2;
        var a = tt;
        tt |= 4;
        try {
          ib(t, e.alternate, e);
        } finally {
          tt = a, et.p = i, H.T = n;
        }
      }
      _t = 3;
    }
  }
  function Mb() {
    if (_t === 4 || _t === 3) {
      _t = 0, sT();
      var t = ai, e = Qa, n = Sn, i = gb;
      e.subtreeFlags & 10256 || e.flags & 10256 ? _t = 5 : (_t = 0, Qa = ai = null, Rb(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (ii = null), xd(n), e = e.stateNode, he && typeof he.onCommitFiberRoot == "function") try {
        he.onCommitFiberRoot(Do, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (i !== null) {
        e = H.T, a = et.p, et.p = 2, H.T = null;
        try {
          for (var s = t.onRecoverableError, o = 0; o < i.length; o++) {
            var r = i[o];
            s(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          H.T = e, et.p = a;
        }
      }
      Sn & 3 && tu(), sn(t), a = t.pendingLanes, n & 261930 && a & 42 ? t === pf ? Qs++ : (Qs = 0, pf = t) : Qs = 0, Bo(0);
    }
  }
  function Rb(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, _o(e)));
  }
  function tu() {
    return Ab(), Cb(), Mb(), Db();
  }
  function Db() {
    if (_t !== 5) return false;
    var t = ai, e = hf;
    hf = 0;
    var n = xd(Sn), i = H.T, a = et.p;
    try {
      et.p = 32 > n ? 32 : n, H.T = null, n = mf, mf = null;
      var s = ai, o = Sn;
      if (_t = 0, Qa = ai = null, Sn = 0, tt & 6) throw Error(M(331));
      var r = tt;
      if (tt |= 4, hb(s.current), cb(s, s.current, o, n), tt = r, Bo(0, false), he && typeof he.onPostCommitFiberRoot == "function") try {
        he.onPostCommitFiberRoot(Do, s);
      } catch {
      }
      return true;
    } finally {
      et.p = a, H.T = i, Rb(t, e);
    }
  }
  function vp(t, e, n) {
    e = Ae(n, e), e = lf(t.stateNode, e, 2), t = ni(t, e, 2), t !== null && (No(t, 2), sn(t));
  }
  function it(t, e, n) {
    if (t.tag === 3) vp(t, t, n);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        vp(e, t, n);
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ii === null || !ii.has(i))) {
          t = Ae(n, t), n = q0(2), i = ni(e, n, 2), i !== null && (X0(n, i, e, t), No(i, 2), sn(i));
          break;
        }
      }
      e = e.return;
    }
  }
  function Zu(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new NE();
      var a = /* @__PURE__ */ new Set();
      i.set(e, a);
    } else a = i.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(e, a));
    a.has(n) || (eh = true, a.add(n), t = VE.bind(null, t, e, n), e.then(t, t));
  }
  function VE(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, lt === t && (I & n) === n && (wt === 4 || wt === 3 && (I & 62914560) === I && 300 > de() - Il ? !(tt & 2) && Za(t, 0) : nh |= n, Ka === I && (Ka = 0)), sn(t);
  }
  function Ob(t, e) {
    e === 0 && (e = Sv()), t = Ji(t, e), t !== null && (No(t, e), sn(t));
  }
  function BE(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Ob(t, n);
  }
  function UE(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode, a = t.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(M(314));
    }
    i !== null && i.delete(e), Ob(t, n);
  }
  function PE(t, e) {
    return vd(t, e);
  }
  var dl = null, da = null, gf = false, hl = false, $u = false, $n = 0;
  function sn(t) {
    t !== da && t.next === null && (da === null ? dl = da = t : da = da.next = t), hl = true, gf || (gf = true, kE());
  }
  function Bo(t, e) {
    if (!$u && hl) {
      $u = true;
      do
        for (var n = false, i = dl; i !== null; ) {
          if (t !== 0) {
            var a = i.pendingLanes;
            if (a === 0) var s = 0;
            else {
              var o = i.suspendedLanes, r = i.pingedLanes;
              s = (1 << 31 - me(42 | t) + 1) - 1, s &= a & ~(o & ~r), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = true, bp(i, s));
          } else s = I, s = Hl(i, i === lt ? s : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), !(s & 3) || Oo(i, s) || (n = true, bp(i, s));
          i = i.next;
        }
      while (n);
      $u = false;
    }
  }
  function HE() {
    Nb();
  }
  function Nb() {
    hl = gf = false;
    var t = 0;
    $n !== 0 && IE() && (t = $n);
    for (var e = de(), n = null, i = dl; i !== null; ) {
      var a = i.next, s = jb(i, e);
      s === 0 ? (i.next = null, n === null ? dl = a : n.next = a, a === null && (da = n)) : (n = i, (t !== 0 || s & 3) && (hl = true)), i = a;
    }
    _t !== 0 && _t !== 5 || Bo(t), $n !== 0 && ($n = 0);
  }
  function jb(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, a = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var o = 31 - me(s), r = 1 << o, l = a[o];
      l === -1 ? (!(r & n) || r & i) && (a[o] = hT(r, e)) : l <= e && (t.expiredLanes |= r), s &= ~r;
    }
    if (e = lt, n = I, n = Hl(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), i = t.callbackNode, n === 0 || t === e && (nt === 2 || nt === 9) || t.cancelPendingCommit !== null) return i !== null && i !== null && Eu(i), t.callbackNode = null, t.callbackPriority = 0;
    if (!(n & 3) || Oo(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (i !== null && Eu(i), xd(n)) {
        case 2:
        case 8:
          n = bv;
          break;
        case 32:
          n = Zr;
          break;
        case 268435456:
          n = xv;
          break;
        default:
          n = Zr;
      }
      return i = zb.bind(null, t), n = vd(n, i), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return i !== null && i !== null && Eu(i), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function zb(t, e) {
    if (_t !== 0 && _t !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (tu() && t.callbackNode !== n) return null;
    var i = I;
    return i = Hl(t, t === lt ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), i === 0 ? null : (vb(t, i, e), jb(t, de()), t.callbackNode != null && t.callbackNode === n ? zb.bind(null, t) : null);
  }
  function bp(t, e) {
    if (tu()) return null;
    vb(t, e, true);
  }
  function kE() {
    WE(function() {
      tt & 6 ? vd(vv, HE) : Nb();
    });
  }
  function ah() {
    if ($n === 0) {
      var t = qa;
      t === 0 && (t = Io, Io <<= 1, !(Io & 261888) && (Io = 256)), $n = t;
    }
    return $n;
  }
  function xp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : wr("" + t);
  }
  function Sp(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function GE(t, e, n, i, a) {
    if (e === "submit" && n && n.stateNode === a) {
      var s = xp((a[ae] || null).action), o = i.submitter;
      o && (e = (e = o[ae] || null) ? xp(e.formAction) : o.getAttribute("formAction"), e !== null && (s = e, o = null));
      var r = new kl("action", "action", null, i, a);
      t.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if ($n !== 0) {
                  var l = o ? Sp(a, o) : new FormData(a);
                  of(n, {
                    pending: true,
                    data: l,
                    method: a.method,
                    action: s
                  }, null, l);
                }
              } else typeof s == "function" && (r.preventDefault(), l = o ? Sp(a, o) : new FormData(a), of(n, {
                pending: true,
                data: l,
                method: a.method,
                action: s
              }, s, l));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Iu = 0; Iu < Kc.length; Iu++) {
    var Ju = Kc[Iu], YE = Ju.toLowerCase(), qE = Ju[0].toUpperCase() + Ju.slice(1);
    Xe(YE, "on" + qE);
  }
  Xe(Xv, "onAnimationEnd");
  Xe(Fv, "onAnimationIteration");
  Xe(Kv, "onAnimationStart");
  Xe("dblclick", "onDoubleClick");
  Xe("focusin", "onFocus");
  Xe("focusout", "onBlur");
  Xe(oE, "onTransitionRun");
  Xe(rE, "onTransitionStart");
  Xe(lE, "onTransitionCancel");
  Xe(Qv, "onTransitionEnd");
  Ga("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  Ga("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  Ga("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  Ga("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  Zi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Zi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Zi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  Zi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Zi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Zi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var co = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), XE = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co));
  function _b(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n], a = i.event;
      i = i.listeners;
      t: {
        var s = void 0;
        if (e) for (var o = i.length - 1; 0 <= o; o--) {
          var r = i[o], l = r.instance, u = r.currentTarget;
          if (r = r.listener, l !== s && a.isPropagationStopped()) break t;
          s = r, a.currentTarget = u;
          try {
            s(a);
          } catch (c) {
            Ir(c);
          }
          a.currentTarget = null, s = l;
        }
        else for (o = 0; o < i.length; o++) {
          if (r = i[o], l = r.instance, u = r.currentTarget, r = r.listener, l !== s && a.isPropagationStopped()) break t;
          s = r, a.currentTarget = u;
          try {
            s(a);
          } catch (c) {
            Ir(c);
          }
          a.currentTarget = null, s = l;
        }
      }
    }
  }
  function K(t, e) {
    var n = e[Pc];
    n === void 0 && (n = e[Pc] = /* @__PURE__ */ new Set());
    var i = t + "__bubble";
    n.has(i) || (Lb(e, t, 2, false), n.add(i));
  }
  function Wu(t, e, n) {
    var i = 0;
    e && (i |= 4), Lb(n, t, i, e);
  }
  var rr = "_reactListening" + Math.random().toString(36).slice(2);
  function sh(t) {
    if (!t[rr]) {
      t[rr] = true, Cv.forEach(function(n) {
        n !== "selectionchange" && (XE.has(n) || Wu(n, false, t), Wu(n, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[rr] || (e[rr] = true, Wu("selectionchange", false, e));
    }
  }
  function Lb(t, e, n, i) {
    switch (Qb(e)) {
      case 2:
        var a = bA;
        break;
      case 8:
        a = xA;
        break;
      default:
        a = uh;
    }
    n = a.bind(null, e, n, t), a = void 0, !qc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = true), i ? a !== void 0 ? t.addEventListener(e, n, {
      capture: true,
      passive: a
    }) : t.addEventListener(e, n, true) : a !== void 0 ? t.addEventListener(e, n, {
      passive: a
    }) : t.addEventListener(e, n, false);
  }
  function tc(t, e, n, i, a) {
    var s = i;
    if (!(e & 1) && !(e & 2) && i !== null) t: for (; ; ) {
      if (i === null) return;
      var o = i.tag;
      if (o === 3 || o === 4) {
        var r = i.stateNode.containerInfo;
        if (r === a) break;
        if (o === 4) for (o = i.return; o !== null; ) {
          var l = o.tag;
          if ((l === 3 || l === 4) && o.stateNode.containerInfo === a) return;
          o = o.return;
        }
        for (; r !== null; ) {
          if (o = ga(r), o === null) return;
          if (l = o.tag, l === 5 || l === 6 || l === 26 || l === 27) {
            i = s = o;
            continue t;
          }
          r = r.parentNode;
        }
      }
      i = i.return;
    }
    _v(function() {
      var u = s, c = Td(n), f = [];
      t: {
        var h = Zv.get(t);
        if (h !== void 0) {
          var d = kl, v = t;
          switch (t) {
            case "keypress":
              if (Er(n) === 0) break t;
            case "keydown":
            case "keyup":
              d = UT;
              break;
            case "focusin":
              v = "focus", d = Du;
              break;
            case "focusout":
              v = "blur", d = Du;
              break;
            case "beforeblur":
            case "afterblur":
              d = Du;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              d = Dm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              d = CT;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              d = kT;
              break;
            case Xv:
            case Fv:
            case Kv:
              d = DT;
              break;
            case Qv:
              d = YT;
              break;
            case "scroll":
            case "scrollend":
              d = ET;
              break;
            case "wheel":
              d = XT;
              break;
            case "copy":
            case "cut":
            case "paste":
              d = NT;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              d = Nm;
              break;
            case "toggle":
            case "beforetoggle":
              d = KT;
          }
          var y = (e & 4) !== 0, b = !y && (t === "scroll" || t === "scrollend"), p = y ? h !== null ? h + "Capture" : null : h;
          y = [];
          for (var m = u, g; m !== null; ) {
            var S = m;
            if (g = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || g === null || p === null || (S = no(m, p), S != null && y.push(fo(m, S, g))), b) break;
            m = m.return;
          }
          0 < y.length && (h = new d(h, v, null, n, c), f.push({
            event: h,
            listeners: y
          }));
        }
      }
      if (!(e & 7)) {
        t: {
          if (h = t === "mouseover" || t === "pointerover", d = t === "mouseout" || t === "pointerout", h && n !== Yc && (v = n.relatedTarget || n.fromElement) && (ga(v) || v[is])) break t;
          if ((d || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, d ? (v = n.relatedTarget || n.toElement, d = u, v = v ? ga(v) : null, v !== null && (b = Ro(v), y = v.tag, v !== b || y !== 5 && y !== 27 && y !== 6) && (v = null)) : (d = null, v = u), d !== v)) {
            if (y = Dm, S = "onMouseLeave", p = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (y = Nm, S = "onPointerLeave", p = "onPointerEnter", m = "pointer"), b = d == null ? h : Os(d), g = v == null ? h : Os(v), h = new y(S, m + "leave", d, n, c), h.target = b, h.relatedTarget = g, S = null, ga(c) === u && (y = new y(p, m + "enter", v, n, c), y.target = g, y.relatedTarget = b, S = y), b = S, d && v) e: {
              for (y = FE, p = d, m = v, g = 0, S = p; S; S = y(S)) g++;
              S = 0;
              for (var T = m; T; T = y(T)) S++;
              for (; 0 < g - S; ) p = y(p), g--;
              for (; 0 < S - g; ) m = y(m), S--;
              for (; g--; ) {
                if (p === m || m !== null && p === m.alternate) {
                  y = p;
                  break e;
                }
                p = y(p), m = y(m);
              }
              y = null;
            }
            else y = null;
            d !== null && wp(f, h, d, y, false), v !== null && b !== null && wp(f, b, v, y, true);
          }
        }
        t: {
          if (h = u ? Os(u) : window, d = h.nodeName && h.nodeName.toLowerCase(), d === "select" || d === "input" && h.type === "file") var A = Lm;
          else if (_m(h)) if (Hv) A = iE;
          else {
            A = eE;
            var E = tE;
          }
          else d = h.nodeName, !d || d.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? u && wd(u.elementType) && (A = Lm) : A = nE;
          if (A && (A = A(t, u))) {
            Pv(f, A, n, c);
            break t;
          }
          E && E(t, h, u), t === "focusout" && u && h.type === "number" && u.memoizedProps.value != null && Gc(h, "number", h.value);
        }
        switch (E = u ? Os(u) : window, t) {
          case "focusin":
            (_m(E) || E.contentEditable === "true") && (ba = E, Xc = u, Ps = null);
            break;
          case "focusout":
            Ps = Xc = ba = null;
            break;
          case "mousedown":
            Fc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Fc = false, Hm(f, n, c);
            break;
          case "selectionchange":
            if (sE) break;
          case "keydown":
          case "keyup":
            Hm(f, n, c);
        }
        var C;
        if (Cd) t: {
          switch (t) {
            case "compositionstart":
              var j = "onCompositionStart";
              break t;
            case "compositionend":
              j = "onCompositionEnd";
              break t;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break t;
          }
          j = void 0;
        }
        else va ? Bv(t, n) && (j = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
        j && (Vv && n.locale !== "ko" && (va || j !== "onCompositionStart" ? j === "onCompositionEnd" && va && (C = Lv()) : (Kn = c, Ed = "value" in Kn ? Kn.value : Kn.textContent, va = true)), E = ml(u, j), 0 < E.length && (j = new Om(j, t, null, n, c), f.push({
          event: j,
          listeners: E
        }), C ? j.data = C : (C = Uv(n), C !== null && (j.data = C)))), (C = ZT ? $T(t, n) : IT(t, n)) && (j = ml(u, "onBeforeInput"), 0 < j.length && (E = new Om("onBeforeInput", "beforeinput", null, n, c), f.push({
          event: E,
          listeners: j
        }), E.data = C)), GE(f, t, u, n, c);
      }
      _b(f, e);
    });
  }
  function fo(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function ml(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var a = t, s = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || s === null || (a = no(t, n), a != null && i.unshift(fo(t, a, s)), a = no(t, e), a != null && i.push(fo(t, a, s))), t.tag === 3) return i;
      t = t.return;
    }
    return [];
  }
  function FE(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function wp(t, e, n, i, a) {
    for (var s = e._reactName, o = []; n !== null && n !== i; ) {
      var r = n, l = r.alternate, u = r.stateNode;
      if (r = r.tag, l !== null && l === i) break;
      r !== 5 && r !== 26 && r !== 27 || u === null || (l = u, a ? (u = no(n, s), u != null && o.unshift(fo(n, u, l))) : a || (u = no(n, s), u != null && o.push(fo(n, u, l)))), n = n.return;
    }
    o.length !== 0 && t.push({
      event: e,
      listeners: o
    });
  }
  var KE = /\r\n?/g, QE = /\u0000|\uFFFD/g;
  function Tp(t) {
    return (typeof t == "string" ? t : "" + t).replace(KE, `
`).replace(QE, "");
  }
  function Vb(t, e) {
    return e = Tp(e), Tp(t) === e;
  }
  function ot(t, e, n, i, a, s) {
    switch (n) {
      case "children":
        typeof i == "string" ? e === "body" || e === "textarea" && i === "" || Ya(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && Ya(t, "" + i);
        break;
      case "className":
        tr(t, "class", i);
        break;
      case "tabIndex":
        tr(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        tr(t, n, i);
        break;
      case "style":
        zv(t, i, s);
        break;
      case "data":
        if (e !== "object") {
          tr(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = wr("" + i), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof s == "function" && (n === "formAction" ? (e !== "input" && ot(t, e, "name", a.name, a, null), ot(t, e, "formEncType", a.formEncType, a, null), ot(t, e, "formMethod", a.formMethod, a, null), ot(t, e, "formTarget", a.formTarget, a, null)) : (ot(t, e, "encType", a.encType, a, null), ot(t, e, "method", a.method, a, null), ot(t, e, "target", a.target, a, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = wr("" + i), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = yn);
        break;
      case "onScroll":
        i != null && K("scroll", t);
        break;
      case "onScrollEnd":
        i != null && K("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(M(61));
          if (n = i.__html, n != null) {
            if (a.children != null) throw Error(M(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = wr("" + i), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "" + i) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === true ? t.setAttribute(n, "") : i !== false && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
        break;
      case "popover":
        K("beforetoggle", t), K("toggle", t), Sr(t, "popover", i);
        break;
      case "xlinkActuate":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        ln(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        ln(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        ln(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Sr(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = wT.get(n) || n, Sr(t, n, i));
    }
  }
  function yf(t, e, n, i, a, s) {
    switch (n) {
      case "style":
        zv(t, i, s);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(M(61));
          if (n = i.__html, n != null) {
            if (a.children != null) throw Error(M(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string" ? Ya(t, i) : (typeof i == "number" || typeof i == "bigint") && Ya(t, "" + i);
        break;
      case "onScroll":
        i != null && K("scroll", t);
        break;
      case "onScrollEnd":
        i != null && K("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = yn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Mv.hasOwnProperty(n)) t: {
          if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), e = n.slice(2, a ? n.length - 7 : void 0), s = t[ae] || null, s = s != null ? s[n] : null, typeof s == "function" && t.removeEventListener(e, s, a), typeof i == "function")) {
            typeof s != "function" && s !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, i, a);
            break t;
          }
          n in t ? t[n] = i : i === true ? t.setAttribute(n, "") : Sr(t, n, i);
        }
    }
  }
  function qt(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        K("error", t), K("load", t);
        var i = false, a = false, s;
        for (s in n) if (n.hasOwnProperty(s)) {
          var o = n[s];
          if (o != null) switch (s) {
            case "src":
              i = true;
              break;
            case "srcSet":
              a = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(M(137, e));
            default:
              ot(t, e, s, o, n, null);
          }
        }
        a && ot(t, e, "srcSet", n.srcSet, n, null), i && ot(t, e, "src", n.src, n, null);
        return;
      case "input":
        K("invalid", t);
        var r = s = o = a = null, l = null, u = null;
        for (i in n) if (n.hasOwnProperty(i)) {
          var c = n[i];
          if (c != null) switch (i) {
            case "name":
              a = c;
              break;
            case "type":
              o = c;
              break;
            case "checked":
              l = c;
              break;
            case "defaultChecked":
              u = c;
              break;
            case "value":
              s = c;
              break;
            case "defaultValue":
              r = c;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (c != null) throw Error(M(137, e));
              break;
            default:
              ot(t, e, i, c, n, null);
          }
        }
        Ov(t, s, r, l, u, o, a, false);
        return;
      case "select":
        K("invalid", t), i = o = s = null;
        for (a in n) if (n.hasOwnProperty(a) && (r = n[a], r != null)) switch (a) {
          case "value":
            s = r;
            break;
          case "defaultValue":
            o = r;
            break;
          case "multiple":
            i = r;
          default:
            ot(t, e, a, r, n, null);
        }
        e = s, n = o, t.multiple = !!i, e != null ? ja(t, !!i, e, false) : n != null && ja(t, !!i, n, true);
        return;
      case "textarea":
        K("invalid", t), s = a = i = null;
        for (o in n) if (n.hasOwnProperty(o) && (r = n[o], r != null)) switch (o) {
          case "value":
            i = r;
            break;
          case "defaultValue":
            a = r;
            break;
          case "children":
            s = r;
            break;
          case "dangerouslySetInnerHTML":
            if (r != null) throw Error(M(91));
            break;
          default:
            ot(t, e, o, r, n, null);
        }
        jv(t, i, a, s);
        return;
      case "option":
        for (l in n) if (n.hasOwnProperty(l) && (i = n[l], i != null)) switch (l) {
          case "selected":
            t.selected = i && typeof i != "function" && typeof i != "symbol";
            break;
          default:
            ot(t, e, l, i, n, null);
        }
        return;
      case "dialog":
        K("beforetoggle", t), K("toggle", t), K("cancel", t), K("close", t);
        break;
      case "iframe":
      case "object":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < co.length; i++) K(co[i], t);
        break;
      case "image":
        K("error", t), K("load", t);
        break;
      case "details":
        K("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        K("error", t), K("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (u in n) if (n.hasOwnProperty(u) && (i = n[u], i != null)) switch (u) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(M(137, e));
          default:
            ot(t, e, u, i, n, null);
        }
        return;
      default:
        if (wd(e)) {
          for (c in n) n.hasOwnProperty(c) && (i = n[c], i !== void 0 && yf(t, e, c, i, n, void 0));
          return;
        }
    }
    for (r in n) n.hasOwnProperty(r) && (i = n[r], i != null && ot(t, e, r, i, n, null));
  }
  function ZE(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, s = null, o = null, r = null, l = null, u = null, c = null;
        for (d in n) {
          var f = n[d];
          if (n.hasOwnProperty(d) && f != null) switch (d) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              l = f;
            default:
              i.hasOwnProperty(d) || ot(t, e, d, null, i, f);
          }
        }
        for (var h in i) {
          var d = i[h];
          if (f = n[h], i.hasOwnProperty(h) && (d != null || f != null)) switch (h) {
            case "type":
              s = d;
              break;
            case "name":
              a = d;
              break;
            case "checked":
              u = d;
              break;
            case "defaultChecked":
              c = d;
              break;
            case "value":
              o = d;
              break;
            case "defaultValue":
              r = d;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (d != null) throw Error(M(137, e));
              break;
            default:
              d !== f && ot(t, e, h, d, i, f);
          }
        }
        kc(t, o, r, l, u, c, s, a);
        return;
      case "select":
        d = o = r = h = null;
        for (s in n) if (l = n[s], n.hasOwnProperty(s) && l != null) switch (s) {
          case "value":
            break;
          case "multiple":
            d = l;
          default:
            i.hasOwnProperty(s) || ot(t, e, s, null, i, l);
        }
        for (a in i) if (s = i[a], l = n[a], i.hasOwnProperty(a) && (s != null || l != null)) switch (a) {
          case "value":
            h = s;
            break;
          case "defaultValue":
            r = s;
            break;
          case "multiple":
            o = s;
          default:
            s !== l && ot(t, e, a, s, i, l);
        }
        e = r, n = o, i = d, h != null ? ja(t, !!n, h, false) : !!i != !!n && (e != null ? ja(t, !!n, e, true) : ja(t, !!n, n ? [] : "", false));
        return;
      case "textarea":
        d = h = null;
        for (r in n) if (a = n[r], n.hasOwnProperty(r) && a != null && !i.hasOwnProperty(r)) switch (r) {
          case "value":
            break;
          case "children":
            break;
          default:
            ot(t, e, r, null, i, a);
        }
        for (o in i) if (a = i[o], s = n[o], i.hasOwnProperty(o) && (a != null || s != null)) switch (o) {
          case "value":
            h = a;
            break;
          case "defaultValue":
            d = a;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (a != null) throw Error(M(91));
            break;
          default:
            a !== s && ot(t, e, o, a, i, s);
        }
        Nv(t, h, d);
        return;
      case "option":
        for (var v in n) if (h = n[v], n.hasOwnProperty(v) && h != null && !i.hasOwnProperty(v)) switch (v) {
          case "selected":
            t.selected = false;
            break;
          default:
            ot(t, e, v, null, i, h);
        }
        for (l in i) if (h = i[l], d = n[l], i.hasOwnProperty(l) && h !== d && (h != null || d != null)) switch (l) {
          case "selected":
            t.selected = h && typeof h != "function" && typeof h != "symbol";
            break;
          default:
            ot(t, e, l, h, i, d);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var y in n) h = n[y], n.hasOwnProperty(y) && h != null && !i.hasOwnProperty(y) && ot(t, e, y, null, i, h);
        for (u in i) if (h = i[u], d = n[u], i.hasOwnProperty(u) && h !== d && (h != null || d != null)) switch (u) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (h != null) throw Error(M(137, e));
            break;
          default:
            ot(t, e, u, h, i, d);
        }
        return;
      default:
        if (wd(e)) {
          for (var b in n) h = n[b], n.hasOwnProperty(b) && h !== void 0 && !i.hasOwnProperty(b) && yf(t, e, b, void 0, i, h);
          for (c in i) h = i[c], d = n[c], !i.hasOwnProperty(c) || h === d || h === void 0 && d === void 0 || yf(t, e, c, h, i, d);
          return;
        }
    }
    for (var p in n) h = n[p], n.hasOwnProperty(p) && h != null && !i.hasOwnProperty(p) && ot(t, e, p, null, i, h);
    for (f in i) h = i[f], d = n[f], !i.hasOwnProperty(f) || h === d || h == null && d == null || ot(t, e, f, h, i, d);
  }
  function Ep(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function $E() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var a = n[i], s = a.transferSize, o = a.initiatorType, r = a.duration;
        if (s && r && Ep(o)) {
          for (o = 0, r = a.responseEnd, i += 1; i < n.length; i++) {
            var l = n[i], u = l.startTime;
            if (u > r) break;
            var c = l.transferSize, f = l.initiatorType;
            c && Ep(f) && (l = l.responseEnd, o += c * (l < r ? 1 : (r - u) / (l - u)));
          }
          if (--i, e += 8 * (s + o) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var vf = null, bf = null;
  function pl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ap(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Bb(t, e) {
    if (t === 0) switch (e) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function xf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var ec = null;
  function IE() {
    var t = window.event;
    return t && t.type === "popstate" ? t === ec ? false : (ec = t, true) : (ec = null, false);
  }
  var Ub = typeof setTimeout == "function" ? setTimeout : void 0, JE = typeof clearTimeout == "function" ? clearTimeout : void 0, Cp = typeof Promise == "function" ? Promise : void 0, WE = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cp < "u" ? function(t) {
    return Cp.resolve(null).then(t).catch(tA);
  } : Ub;
  function tA(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function xi(t) {
    return t === "head";
  }
  function Mp(t, e) {
    var n = e, i = 0;
    do {
      var a = n.nextSibling;
      if (t.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$" || n === "/&") {
        if (i === 0) {
          t.removeChild(a), Ia(e);
          return;
        }
        i--;
      } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") i++;
      else if (n === "html") Zs(t.ownerDocument.documentElement);
      else if (n === "head") {
        n = t.ownerDocument.head, Zs(n);
        for (var s = n.firstChild; s; ) {
          var o = s.nextSibling, r = s.nodeName;
          s[jo] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = o;
        }
      } else n === "body" && Zs(t.ownerDocument.body);
      n = a;
    } while (n);
    Ia(e);
  }
  function Rp(t, e) {
    var n = t;
    t = 0;
    do {
      var i = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (t === 0) break;
        t--;
      } else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = i;
    } while (n);
  }
  function Sf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Sf(n), Sd(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function eA(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var a = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[jo]) switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (s = t.getAttribute("rel"), s === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (s !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (s = t.getAttribute("src"), (s !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && s && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (e === "input" && t.type === "hidden") {
        var s = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === s) return t;
      } else return t;
      if (t = De(t.nextSibling), t === null) break;
    }
    return null;
  }
  function nA(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = De(t.nextSibling), t === null)) return null;
    return t;
  }
  function Pb(t, e) {
    for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = De(t.nextSibling), t === null)) return null;
    return t;
  }
  function wf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Tf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function iA(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var i = function() {
        e(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), t._reactRetry = i;
    }
  }
  function De(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Ef = null;
  function Dp(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return De(t.nextSibling);
          e--;
        } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Op(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Hb(t, e, n) {
    switch (e = pl(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(M(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(M(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(M(454));
        return t;
      default:
        throw Error(M(451));
    }
  }
  function Zs(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Sd(t);
  }
  var je = /* @__PURE__ */ new Map(), Np = /* @__PURE__ */ new Set();
  function gl(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var On = et.d;
  et.d = {
    f: aA,
    r: sA,
    D: oA,
    C: rA,
    L: lA,
    m: uA,
    X: fA,
    S: cA,
    M: dA
  };
  function aA() {
    var t = On.f(), e = Jl();
    return t || e;
  }
  function sA(t) {
    var e = as(t);
    e !== null && e.tag === 5 && e.type === "form" ? z0(e) : On.r(t);
  }
  var ls = typeof document > "u" ? null : document;
  function kb(t, e, n) {
    var i = ls;
    if (i && typeof e == "string" && e) {
      var a = Ee(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Np.has(a) || (Np.add(a), t = {
        rel: t,
        crossOrigin: n,
        href: e
      }, i.querySelector(a) === null && (e = i.createElement("link"), qt(e, "link", t), Bt(e), i.head.appendChild(e)));
    }
  }
  function oA(t) {
    On.D(t), kb("dns-prefetch", t, null);
  }
  function rA(t, e) {
    On.C(t, e), kb("preconnect", t, e);
  }
  function lA(t, e, n) {
    On.L(t, e, n);
    var i = ls;
    if (i && t && e) {
      var a = 'link[rel="preload"][as="' + Ee(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + Ee(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + Ee(n.imageSizes) + '"]')) : a += '[href="' + Ee(t) + '"]';
      var s = a;
      switch (e) {
        case "style":
          s = $a(t);
          break;
        case "script":
          s = us(t);
      }
      je.has(s) || (t = gt({
        rel: "preload",
        href: e === "image" && n && n.imageSrcSet ? void 0 : t,
        as: e
      }, n), je.set(s, t), i.querySelector(a) !== null || e === "style" && i.querySelector(Uo(s)) || e === "script" && i.querySelector(Po(s)) || (e = i.createElement("link"), qt(e, "link", t), Bt(e), i.head.appendChild(e)));
    }
  }
  function uA(t, e) {
    On.m(t, e);
    var n = ls;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Ee(i) + '"][href="' + Ee(t) + '"]', s = a;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = us(t);
      }
      if (!je.has(s) && (t = gt({
        rel: "modulepreload",
        href: t
      }, e), je.set(s, t), n.querySelector(a) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Po(s))) return;
        }
        i = n.createElement("link"), qt(i, "link", t), Bt(i), n.head.appendChild(i);
      }
    }
  }
  function cA(t, e, n) {
    On.S(t, e, n);
    var i = ls;
    if (i && t) {
      var a = Na(i).hoistableStyles, s = $a(t);
      e = e || "default";
      var o = a.get(s);
      if (!o) {
        var r = {
          loading: 0,
          preload: null
        };
        if (o = i.querySelector(Uo(s))) r.loading = 5;
        else {
          t = gt({
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          }, n), (n = je.get(s)) && oh(t, n);
          var l = o = i.createElement("link");
          Bt(l), qt(l, "link", t), l._p = new Promise(function(u, c) {
            l.onload = u, l.onerror = c;
          }), l.addEventListener("load", function() {
            r.loading |= 1;
          }), l.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, jr(o, e, i);
        }
        o = {
          type: "stylesheet",
          instance: o,
          count: 1,
          state: r
        }, a.set(s, o);
      }
    }
  }
  function fA(t, e) {
    On.X(t, e);
    var n = ls;
    if (n && t) {
      var i = Na(n).hoistableScripts, a = us(t), s = i.get(a);
      s || (s = n.querySelector(Po(a)), s || (t = gt({
        src: t,
        async: true
      }, e), (e = je.get(a)) && rh(t, e), s = n.createElement("script"), Bt(s), qt(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(a, s));
    }
  }
  function dA(t, e) {
    On.M(t, e);
    var n = ls;
    if (n && t) {
      var i = Na(n).hoistableScripts, a = us(t), s = i.get(a);
      s || (s = n.querySelector(Po(a)), s || (t = gt({
        src: t,
        async: true,
        type: "module"
      }, e), (e = je.get(a)) && rh(t, e), s = n.createElement("script"), Bt(s), qt(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(a, s));
    }
  }
  function jp(t, e, n, i) {
    var a = (a = Wn.current) ? gl(a) : null;
    if (!a) throw Error(M(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = $a(n.href), n = Na(a).hoistableStyles, i = n.get(e), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, i)), i) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = $a(n.href);
          var s = Na(a).hoistableStyles, o = s.get(t);
          if (o || (a = a.ownerDocument || a, o = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, s.set(t, o), (s = a.querySelector(Uo(t))) && !s._p && (o.instance = s, o.state.loading = 5), je.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, je.set(t, n), s || hA(a, t, n, o.state))), e && i === null) throw Error(M(528, ""));
          return o;
        }
        if (e && i !== null) throw Error(M(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = us(n), n = Na(a).hoistableScripts, i = n.get(e), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, i)), i) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(M(444, t));
    }
  }
  function $a(t) {
    return 'href="' + Ee(t) + '"';
  }
  function Uo(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Gb(t) {
    return gt({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function hA(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
      return i.loading |= 1;
    }), e.addEventListener("error", function() {
      return i.loading |= 2;
    }), qt(e, "link", n), Bt(e), t.head.appendChild(e));
  }
  function us(t) {
    return '[src="' + Ee(t) + '"]';
  }
  function Po(t) {
    return "script[async]" + t;
  }
  function zp(t, e, n) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var i = t.querySelector('style[data-href~="' + Ee(n.href) + '"]');
        if (i) return e.instance = i, Bt(i), i;
        var a = gt({}, n, {
          "data-href": n.href,
          "data-precedence": n.precedence,
          href: null,
          precedence: null
        });
        return i = (t.ownerDocument || t).createElement("style"), Bt(i), qt(i, "style", a), jr(i, n.precedence, t), e.instance = i;
      case "stylesheet":
        a = $a(n.href);
        var s = t.querySelector(Uo(a));
        if (s) return e.state.loading |= 4, e.instance = s, Bt(s), s;
        i = Gb(n), (a = je.get(a)) && oh(i, a), s = (t.ownerDocument || t).createElement("link"), Bt(s);
        var o = s;
        return o._p = new Promise(function(r, l) {
          o.onload = r, o.onerror = l;
        }), qt(s, "link", i), e.state.loading |= 4, jr(s, n.precedence, t), e.instance = s;
      case "script":
        return s = us(n.src), (a = t.querySelector(Po(s))) ? (e.instance = a, Bt(a), a) : (i = n, (a = je.get(s)) && (i = gt({}, n), rh(i, a)), t = t.ownerDocument || t, a = t.createElement("script"), Bt(a), qt(a, "link", i), t.head.appendChild(a), e.instance = a);
      case "void":
        return null;
      default:
        throw Error(M(443, e.type));
    }
    else e.type === "stylesheet" && !(e.state.loading & 4) && (i = e.instance, e.state.loading |= 4, jr(i, n.precedence, t));
    return e.instance;
  }
  function jr(t, e, n) {
    for (var i = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = i.length ? i[i.length - 1] : null, s = a, o = 0; o < i.length; o++) {
      var r = i[o];
      if (r.dataset.precedence === e) s = r;
      else if (s !== a) break;
    }
    s ? s.parentNode.insertBefore(t, s.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function oh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function rh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var zr = null;
  function _p(t, e, n) {
    if (zr === null) {
      var i = /* @__PURE__ */ new Map(), a = zr = /* @__PURE__ */ new Map();
      a.set(n, i);
    } else a = zr, i = a.get(n), i || (i = /* @__PURE__ */ new Map(), a.set(n, i));
    if (i.has(t)) return i;
    for (i.set(t, null), n = n.getElementsByTagName(t), a = 0; a < n.length; a++) {
      var s = n[a];
      if (!(s[jo] || s[kt] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var o = s.getAttribute(e) || "";
        o = t + o;
        var r = i.get(o);
        r ? r.push(s) : i.set(o, [
          s
        ]);
      }
    }
    return i;
  }
  function Lp(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null);
  }
  function mA(t, e, n) {
    if (n === 1 || e.itemProp != null) return false;
    switch (t) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return true;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return true;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
    }
    return false;
  }
  function Yb(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  function pA(t, e, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== false) && !(n.state.loading & 4)) {
      if (n.instance === null) {
        var a = $a(i.href), s = e.querySelector(Uo(a));
        if (s) {
          e = s._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = yl.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = s, Bt(s);
          return;
        }
        s = e.ownerDocument || e, i = Gb(i), (a = je.get(a)) && oh(i, a), s = s.createElement("link"), Bt(s);
        var o = s;
        o._p = new Promise(function(r, l) {
          o.onload = r, o.onerror = l;
        }), qt(s, "link", i), n.instance = s;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && !(n.state.loading & 3) && (t.count++, n = yl.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var nc = 0;
  function gA(t, e) {
    return t.stylesheets && t.count === 0 && _r(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (t.stylesheets && _r(t, t.stylesheets), t.unsuspend) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, 6e4 + e);
      0 < t.imgBytes && nc === 0 && (nc = 62500 * $E());
      var a = setTimeout(function() {
        if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && _r(t, t.stylesheets), t.unsuspend)) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, (t.imgBytes > nc ? 50 : 800) + e);
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(i), clearTimeout(a);
      };
    } : null;
  }
  function yl() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) _r(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var vl = null;
  function _r(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, vl = /* @__PURE__ */ new Map(), e.forEach(yA, t), vl = null, yl.call(t));
  }
  function yA(t, e) {
    if (!(e.state.loading & 4)) {
      var n = vl.get(t);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), vl.set(t, n);
        for (var a = t.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < a.length; s++) {
          var o = a[s];
          (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), i = o);
        }
        i && n.set(null, i);
      }
      a = e.instance, o = a.getAttribute("data-precedence"), s = n.get(o) || i, s === i && n.set(null, a), n.set(o, a), this.count++, i = yl.bind(this), a.addEventListener("load", i), a.addEventListener("error", i), s ? s.parentNode.insertBefore(a, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ho = {
    $$typeof: gn,
    Provider: null,
    Consumer: null,
    _currentValue: Bi,
    _currentValue2: Bi,
    _threadCount: 0
  };
  function vA(t, e, n, i, a, s, o, r, l) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Au(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Au(0), this.hiddenUpdates = Au(null), this.identifierPrefix = i, this.onUncaughtError = a, this.onCaughtError = s, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = l, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qb(t, e, n, i, a, s, o, r, l, u, c, f) {
    return t = new vA(t, e, n, o, l, u, c, f, r), e = 1, s === true && (e |= 24), s = ce(3, null, null, e), t.current = s, s.stateNode = t, e = zd(), e.refCount++, t.pooledCache = e, e.refCount++, s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: e
    }, Vd(s), t;
  }
  function Xb(t) {
    return t ? (t = wa, t) : wa;
  }
  function Fb(t, e, n, i, a, s) {
    a = Xb(a), i.context === null ? i.context = a : i.pendingContext = a, i = ei(e), i.payload = {
      element: n
    }, s = s === void 0 ? null : s, s !== null && (i.callback = s), n = ni(t, i, e), n !== null && (ie(n, t, e), ks(n, t, e));
  }
  function Vp(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function lh(t, e) {
    Vp(t, e), (t = t.alternate) && Vp(t, e);
  }
  function Kb(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ji(t, 67108864);
      e !== null && ie(e, t, 67108864), lh(t, 67108864);
    }
  }
  function Bp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = pe();
      e = bd(e);
      var n = Ji(t, e);
      n !== null && ie(n, t, e), lh(t, e);
    }
  }
  var bl = true;
  function bA(t, e, n, i) {
    var a = H.T;
    H.T = null;
    var s = et.p;
    try {
      et.p = 2, uh(t, e, n, i);
    } finally {
      et.p = s, H.T = a;
    }
  }
  function xA(t, e, n, i) {
    var a = H.T;
    H.T = null;
    var s = et.p;
    try {
      et.p = 8, uh(t, e, n, i);
    } finally {
      et.p = s, H.T = a;
    }
  }
  function uh(t, e, n, i) {
    if (bl) {
      var a = Af(i);
      if (a === null) tc(t, e, i, xl, n), Up(t, i);
      else if (wA(a, t, e, n, i)) i.stopPropagation();
      else if (Up(t, i), e & 4 && -1 < SA.indexOf(t)) {
        for (; a !== null; ) {
          var s = as(a);
          if (s !== null) switch (s.tag) {
            case 3:
              if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                var o = Ni(s.pendingLanes);
                if (o !== 0) {
                  var r = s;
                  for (r.pendingLanes |= 2, r.entangledLanes |= 2; o; ) {
                    var l = 1 << 31 - me(o);
                    r.entanglements[1] |= l, o &= ~l;
                  }
                  sn(s), !(tt & 6) && (ul = de() + 500, Bo(0));
                }
              }
              break;
            case 31:
            case 13:
              r = Ji(s, 2), r !== null && ie(r, s, 2), Jl(), lh(s, 2);
          }
          if (s = Af(i), s === null && tc(t, e, i, xl, n), s === a) break;
          a = s;
        }
        a !== null && i.stopPropagation();
      } else tc(t, e, i, null, n);
    }
  }
  function Af(t) {
    return t = Td(t), ch(t);
  }
  var xl = null;
  function ch(t) {
    if (xl = null, t = ga(t), t !== null) {
      var e = Ro(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = hv(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = mv(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return xl = t, null;
  }
  function Qb(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (oT()) {
          case vv:
            return 2;
          case bv:
            return 8;
          case Zr:
          case rT:
            return 32;
          case xv:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Cf = false, si = null, oi = null, ri = null, mo = /* @__PURE__ */ new Map(), po = /* @__PURE__ */ new Map(), qn = [], SA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Up(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        si = null;
        break;
      case "dragenter":
      case "dragleave":
        oi = null;
        break;
      case "mouseover":
      case "mouseout":
        ri = null;
        break;
      case "pointerover":
      case "pointerout":
        mo.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        po.delete(e.pointerId);
    }
  }
  function Es(t, e, n, i, a, s) {
    return t === null || t.nativeEvent !== s ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: s,
      targetContainers: [
        a
      ]
    }, e !== null && (e = as(e), e !== null && Kb(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function wA(t, e, n, i, a) {
    switch (e) {
      case "focusin":
        return si = Es(si, t, e, n, i, a), true;
      case "dragenter":
        return oi = Es(oi, t, e, n, i, a), true;
      case "mouseover":
        return ri = Es(ri, t, e, n, i, a), true;
      case "pointerover":
        var s = a.pointerId;
        return mo.set(s, Es(mo.get(s) || null, t, e, n, i, a)), true;
      case "gotpointercapture":
        return s = a.pointerId, po.set(s, Es(po.get(s) || null, t, e, n, i, a)), true;
    }
    return false;
  }
  function Zb(t) {
    var e = ga(t.target);
    if (e !== null) {
      var n = Ro(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = hv(n), e !== null) {
            t.blockedOn = e, wm(t.priority, function() {
              Bp(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = mv(n), e !== null) {
            t.blockedOn = e, wm(t.priority, function() {
              Bp(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Lr(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Af(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        Yc = i, n.target.dispatchEvent(i), Yc = null;
      } else return e = as(n), e !== null && Kb(e), t.blockedOn = n, false;
      e.shift();
    }
    return true;
  }
  function Pp(t, e, n) {
    Lr(t) && n.delete(e);
  }
  function TA() {
    Cf = false, si !== null && Lr(si) && (si = null), oi !== null && Lr(oi) && (oi = null), ri !== null && Lr(ri) && (ri = null), mo.forEach(Pp), po.forEach(Pp);
  }
  function lr(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Cf || (Cf = true, Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, TA)));
  }
  var ur = null;
  function Hp(t) {
    ur !== t && (ur = t, Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, function() {
      ur === t && (ur = null);
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e], i = t[e + 1], a = t[e + 2];
        if (typeof i != "function") {
          if (ch(i || n) === null) continue;
          break;
        }
        var s = as(n);
        s !== null && (t.splice(e, 3), e -= 3, of(s, {
          pending: true,
          data: a,
          method: n.method,
          action: i
        }, i, a));
      }
    }));
  }
  function Ia(t) {
    function e(l) {
      return lr(l, t);
    }
    si !== null && lr(si, t), oi !== null && lr(oi, t), ri !== null && lr(ri, t), mo.forEach(e), po.forEach(e);
    for (var n = 0; n < qn.length; n++) {
      var i = qn[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < qn.length && (n = qn[0], n.blockedOn === null); ) Zb(n), n.blockedOn === null && qn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null) for (i = 0; i < n.length; i += 3) {
      var a = n[i], s = n[i + 1], o = a[ae] || null;
      if (typeof s == "function") o || Hp(n);
      else if (o) {
        var r = null;
        if (s && s.hasAttribute("formAction")) {
          if (a = s, o = s[ae] || null) r = o.formAction;
          else if (ch(a) !== null) continue;
        } else r = o.action;
        typeof r == "function" ? n[i + 1] = r : (n.splice(i, 3), i -= 3), Hp(n);
      }
    }
  }
  function $b() {
    function t(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(o) {
            return a = o;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      a !== null && (a(), a = null), i || setTimeout(n, 20);
    }
    function n() {
      if (!i && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = false, a = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        i = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), a !== null && (a(), a = null);
      };
    }
  }
  function fh(t) {
    this._internalRoot = t;
  }
  eu.prototype.render = fh.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(M(409));
    var n = e.current, i = pe();
    Fb(n, i, t, e, null, null);
  };
  eu.prototype.unmount = fh.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Fb(t.current, 2, null, t, null, null), Jl(), e[is] = null;
    }
  };
  function eu(t) {
    this._internalRoot = t;
  }
  eu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Av();
      t = {
        blockedOn: null,
        target: t,
        priority: e
      };
      for (var n = 0; n < qn.length && e !== 0 && e < qn[n].priority; n++) ;
      qn.splice(n, 0, t), n === 0 && Zb(t);
    }
  };
  var kp = fv.version;
  if (kp !== "19.2.5") throw Error(M(527, kp, "19.2.5"));
  et.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(M(188)) : (t = Object.keys(t).join(","), Error(M(268, t)));
    return t = Ww(e), t = t !== null ? pv(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var EA = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cr.isDisabled && cr.supportsFiber) try {
      Do = cr.inject(EA), he = cr;
    } catch {
    }
  }
  Ul.createRoot = function(t, e) {
    if (!dv(t)) throw Error(M(299));
    var n = false, i = "", a = k0, s = G0, o = Y0;
    return e != null && (e.unstable_strictMode === true && (n = true), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (s = e.onCaughtError), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = qb(t, 1, false, null, null, n, i, null, a, s, o, $b), t[is] = e.current, sh(t), new fh(e);
  };
  Ul.hydrateRoot = function(t, e, n) {
    if (!dv(t)) throw Error(M(299));
    var i = false, a = "", s = k0, o = G0, r = Y0, l = null;
    return n != null && (n.unstable_strictMode === true && (i = true), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (o = n.onCaughtError), n.onRecoverableError !== void 0 && (r = n.onRecoverableError), n.formState !== void 0 && (l = n.formState)), e = qb(t, 1, true, e, n ?? null, i, a, l, s, o, r, $b), e.context = Xb(null), n = e.current, i = pe(), i = bd(i), a = ei(i), a.callback = null, ni(n, a, i), n = i, e.current.lanes = n, No(e, n), sn(e), t[is] = e.current, sh(t), new eu(e);
  };
  Ul.version = "19.2.5";
  function Ib() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ib);
    } catch (t) {
      console.error(t);
    }
  }
  Ib(), Zy.exports = Ul;
  var AA = Zy.exports;
  let CA, MA, Gp, DA, OA;
  CA = "modulepreload";
  MA = function(t) {
    return "/amritaraj-nair-portfolio/" + t;
  };
  Gp = {};
  RA = function(e, n, i) {
    let a = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"), r = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
      a = Promise.allSettled(n.map((l) => {
        if (l = MA(l), l in Gp) return;
        Gp[l] = true;
        const u = l.endsWith(".css"), c = u ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${c}`)) return;
        const f = document.createElement("link");
        if (f.rel = u ? "stylesheet" : CA, u || (f.as = "script"), f.crossOrigin = "", f.href = l, r && f.setAttribute("nonce", r), document.head.appendChild(f), u) return new Promise((h, d) => {
          f.addEventListener("load", h), f.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${l}`)));
        });
      }));
    }
    function s(o) {
      const r = new Event("vite:preloadError", {
        cancelable: true
      });
      if (r.payload = o, window.dispatchEvent(r), !r.defaultPrevented) throw o;
    }
    return a.then((o) => {
      for (const r of o || []) r.status === "rejected" && s(r.reason);
      return e().catch(s);
    });
  };
  DA = 1;
  OA = 1e6;
  let ic = 0;
  function NA() {
    return ic = (ic + 1) % Number.MAX_SAFE_INTEGER, ic.toString();
  }
  const ac = /* @__PURE__ */ new Map(), Yp = (t) => {
    if (ac.has(t)) return;
    const e = setTimeout(() => {
      ac.delete(t), $s({
        type: "REMOVE_TOAST",
        toastId: t
      });
    }, OA);
    ac.set(t, e);
  }, jA = (t, e) => {
    switch (e.type) {
      case "ADD_TOAST":
        return {
          ...t,
          toasts: [
            e.toast,
            ...t.toasts
          ].slice(0, DA)
        };
      case "UPDATE_TOAST":
        return {
          ...t,
          toasts: t.toasts.map((n) => n.id === e.toast.id ? {
            ...n,
            ...e.toast
          } : n)
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = e;
        return n ? Yp(n) : t.toasts.forEach((i) => {
          Yp(i.id);
        }), {
          ...t,
          toasts: t.toasts.map((i) => i.id === n || n === void 0 ? {
            ...i,
            open: false
          } : i)
        };
      }
      case "REMOVE_TOAST":
        return e.toastId === void 0 ? {
          ...t,
          toasts: []
        } : {
          ...t,
          toasts: t.toasts.filter((n) => n.id !== e.toastId)
        };
    }
  }, Vr = [];
  let Br = {
    toasts: []
  };
  function $s(t) {
    Br = jA(Br, t), Vr.forEach((e) => {
      e(Br);
    });
  }
  function zA({ ...t }) {
    const e = NA(), n = (a) => $s({
      type: "UPDATE_TOAST",
      toast: {
        ...a,
        id: e
      }
    }), i = () => $s({
      type: "DISMISS_TOAST",
      toastId: e
    });
    return $s({
      type: "ADD_TOAST",
      toast: {
        ...t,
        id: e,
        open: true,
        onOpenChange: (a) => {
          a || i();
        }
      }
    }), {
      id: e,
      dismiss: i,
      update: n
    };
  }
  function Jb() {
    const [t, e] = x.useState(Br);
    return x.useEffect(() => (Vr.push(e), () => {
      const n = Vr.indexOf(e);
      n > -1 && Vr.splice(n, 1);
    }), [
      t
    ]), {
      ...t,
      toast: zA,
      dismiss: (n) => $s({
        type: "DISMISS_TOAST",
        toastId: n
      })
    };
  }
  function zt(t, e, { checkForDefaultPrevented: n = true } = {}) {
    return function(a) {
      if (t == null ? void 0 : t(a), n === false || !a.defaultPrevented) return e == null ? void 0 : e(a);
    };
  }
  function qp(t, e) {
    if (typeof t == "function") return t(e);
    t != null && (t.current = e);
  }
  function Wb(...t) {
    return (e) => {
      let n = false;
      const i = t.map((a) => {
        const s = qp(a, e);
        return !n && typeof s == "function" && (n = true), s;
      });
      if (n) return () => {
        for (let a = 0; a < i.length; a++) {
          const s = i[a];
          typeof s == "function" ? s() : qp(t[a], null);
        }
      };
    };
  }
  function Ge(...t) {
    return x.useCallback(Wb(...t), t);
  }
  function nu(t, e = []) {
    let n = [];
    function i(s, o) {
      const r = x.createContext(o), l = n.length;
      n = [
        ...n,
        o
      ];
      const u = (f) => {
        var _a5;
        const { scope: h, children: d, ...v } = f, y = ((_a5 = h == null ? void 0 : h[t]) == null ? void 0 : _a5[l]) || r, b = x.useMemo(() => v, Object.values(v));
        return w.jsx(y.Provider, {
          value: b,
          children: d
        });
      };
      u.displayName = s + "Provider";
      function c(f, h) {
        var _a5;
        const d = ((_a5 = h == null ? void 0 : h[t]) == null ? void 0 : _a5[l]) || r, v = x.useContext(d);
        if (v) return v;
        if (o !== void 0) return o;
        throw new Error(`\`${f}\` must be used within \`${s}\``);
      }
      return [
        u,
        c
      ];
    }
    const a = () => {
      const s = n.map((o) => x.createContext(o));
      return function(r) {
        const l = (r == null ? void 0 : r[t]) || s;
        return x.useMemo(() => ({
          [`__scope${t}`]: {
            ...r,
            [t]: l
          }
        }), [
          r,
          l
        ]);
      };
    };
    return a.scopeName = t, [
      i,
      _A(a, ...e)
    ];
  }
  function _A(...t) {
    const e = t[0];
    if (t.length === 1) return e;
    const n = () => {
      const i = t.map((a) => ({
        useScope: a(),
        scopeName: a.scopeName
      }));
      return function(s) {
        const o = i.reduce((r, { useScope: l, scopeName: u }) => {
          const f = l(s)[`__scope${u}`];
          return {
            ...r,
            ...f
          };
        }, {});
        return x.useMemo(() => ({
          [`__scope${e.scopeName}`]: o
        }), [
          o
        ]);
      };
    };
    return n.scopeName = e.scopeName, n;
  }
  function Sl(t) {
    const e = VA(t), n = x.forwardRef((i, a) => {
      const { children: s, ...o } = i, r = x.Children.toArray(s), l = r.find(UA);
      if (l) {
        const u = l.props.children, c = r.map((f) => f === l ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : f);
        return w.jsx(e, {
          ...o,
          ref: a,
          children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null
        });
      }
      return w.jsx(e, {
        ...o,
        ref: a,
        children: s
      });
    });
    return n.displayName = `${t}.Slot`, n;
  }
  var LA = Sl("Slot");
  function VA(t) {
    const e = x.forwardRef((n, i) => {
      const { children: a, ...s } = n;
      if (x.isValidElement(a)) {
        const o = HA(a), r = PA(s, a.props);
        return a.type !== x.Fragment && (r.ref = i ? Wb(i, o) : o), x.cloneElement(a, r);
      }
      return x.Children.count(a) > 1 ? x.Children.only(null) : null;
    });
    return e.displayName = `${t}.SlotClone`, e;
  }
  var t1 = Symbol("radix.slottable");
  function BA(t) {
    const e = ({ children: n }) => w.jsx(w.Fragment, {
      children: n
    });
    return e.displayName = `${t}.Slottable`, e.__radixId = t1, e;
  }
  function UA(t) {
    return x.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === t1;
  }
  function PA(t, e) {
    const n = {
      ...e
    };
    for (const i in e) {
      const a = t[i], s = e[i];
      /^on[A-Z]/.test(i) ? a && s ? n[i] = (...r) => {
        const l = s(...r);
        return a(...r), l;
      } : a && (n[i] = a) : i === "style" ? n[i] = {
        ...a,
        ...s
      } : i === "className" && (n[i] = [
        a,
        s
      ].filter(Boolean).join(" "));
    }
    return {
      ...t,
      ...n
    };
  }
  function HA(t) {
    var _a5, _b3;
    let e = (_a5 = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : _a5.get, n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (_b3 = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : _b3.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
  }
  function kA(t) {
    const e = t + "CollectionProvider", [n, i] = nu(e), [a, s] = n(e, {
      collectionRef: {
        current: null
      },
      itemMap: /* @__PURE__ */ new Map()
    }), o = (y) => {
      const { scope: b, children: p } = y, m = _.useRef(null), g = _.useRef(/* @__PURE__ */ new Map()).current;
      return w.jsx(a, {
        scope: b,
        itemMap: g,
        collectionRef: m,
        children: p
      });
    };
    o.displayName = e;
    const r = t + "CollectionSlot", l = Sl(r), u = _.forwardRef((y, b) => {
      const { scope: p, children: m } = y, g = s(r, p), S = Ge(b, g.collectionRef);
      return w.jsx(l, {
        ref: S,
        children: m
      });
    });
    u.displayName = r;
    const c = t + "CollectionItemSlot", f = "data-radix-collection-item", h = Sl(c), d = _.forwardRef((y, b) => {
      const { scope: p, children: m, ...g } = y, S = _.useRef(null), T = Ge(b, S), A = s(c, p);
      return _.useEffect(() => (A.itemMap.set(S, {
        ref: S,
        ...g
      }), () => void A.itemMap.delete(S))), w.jsx(h, {
        [f]: "",
        ref: T,
        children: m
      });
    });
    d.displayName = c;
    function v(y) {
      const b = s(t + "CollectionConsumer", y);
      return _.useCallback(() => {
        const m = b.collectionRef.current;
        if (!m) return [];
        const g = Array.from(m.querySelectorAll(`[${f}]`));
        return Array.from(b.itemMap.values()).sort((A, E) => g.indexOf(A.ref.current) - g.indexOf(E.ref.current));
      }, [
        b.collectionRef,
        b.itemMap
      ]);
    }
    return [
      {
        Provider: o,
        Slot: u,
        ItemSlot: d
      },
      v,
      i
    ];
  }
  var GA = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
  ], oe = GA.reduce((t, e) => {
    const n = Sl(`Primitive.${e}`), i = x.forwardRef((a, s) => {
      const { asChild: o, ...r } = a, l = o ? n : e;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), w.jsx(l, {
        ...r,
        ref: s
      });
    });
    return i.displayName = `Primitive.${e}`, {
      ...t,
      [e]: i
    };
  }, {});
  function e1(t, e) {
    t && Mo.flushSync(() => t.dispatchEvent(e));
  }
  function hi(t) {
    const e = x.useRef(t);
    return x.useEffect(() => {
      e.current = t;
    }), x.useMemo(() => (...n) => {
      var _a5;
      return (_a5 = e.current) == null ? void 0 : _a5.call(e, ...n);
    }, []);
  }
  function YA(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = hi(t);
    x.useEffect(() => {
      const i = (a) => {
        a.key === "Escape" && n(a);
      };
      return e.addEventListener("keydown", i, {
        capture: true
      }), () => e.removeEventListener("keydown", i, {
        capture: true
      });
    }, [
      n,
      e
    ]);
  }
  var qA = "DismissableLayer", Mf = "dismissableLayer.update", XA = "dismissableLayer.pointerDownOutside", FA = "dismissableLayer.focusOutside", Xp, n1 = x.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  }), dh = x.forwardRef((t, e) => {
    const { disableOutsidePointerEvents: n = false, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: o, onDismiss: r, ...l } = t, u = x.useContext(n1), [c, f] = x.useState(null), h = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, d] = x.useState({}), v = Ge(e, (E) => f(E)), y = Array.from(u.layers), [b] = [
      ...u.layersWithOutsidePointerEventsDisabled
    ].slice(-1), p = y.indexOf(b), m = c ? y.indexOf(c) : -1, g = u.layersWithOutsidePointerEventsDisabled.size > 0, S = m >= p, T = QA((E) => {
      const C = E.target, j = [
        ...u.branches
      ].some((z) => z.contains(C));
      !S || j || (a == null ? void 0 : a(E), o == null ? void 0 : o(E), E.defaultPrevented || (r == null ? void 0 : r()));
    }, h), A = ZA((E) => {
      const C = E.target;
      [
        ...u.branches
      ].some((z) => z.contains(C)) || (s == null ? void 0 : s(E), o == null ? void 0 : o(E), E.defaultPrevented || (r == null ? void 0 : r()));
    }, h);
    return YA((E) => {
      m === u.layers.size - 1 && (i == null ? void 0 : i(E), !E.defaultPrevented && r && (E.preventDefault(), r()));
    }, h), x.useEffect(() => {
      if (c) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Xp = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Fp(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Xp);
      };
    }, [
      c,
      h,
      n,
      u
    ]), x.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Fp());
    }, [
      c,
      u
    ]), x.useEffect(() => {
      const E = () => d({});
      return document.addEventListener(Mf, E), () => document.removeEventListener(Mf, E);
    }, []), w.jsx(oe.div, {
      ...l,
      ref: v,
      style: {
        pointerEvents: g ? S ? "auto" : "none" : void 0,
        ...t.style
      },
      onFocusCapture: zt(t.onFocusCapture, A.onFocusCapture),
      onBlurCapture: zt(t.onBlurCapture, A.onBlurCapture),
      onPointerDownCapture: zt(t.onPointerDownCapture, T.onPointerDownCapture)
    });
  });
  dh.displayName = qA;
  var KA = "DismissableLayerBranch", i1 = x.forwardRef((t, e) => {
    const n = x.useContext(n1), i = x.useRef(null), a = Ge(e, i);
    return x.useEffect(() => {
      const s = i.current;
      if (s) return n.branches.add(s), () => {
        n.branches.delete(s);
      };
    }, [
      n.branches
    ]), w.jsx(oe.div, {
      ...t,
      ref: a
    });
  });
  i1.displayName = KA;
  function QA(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = hi(t), i = x.useRef(false), a = x.useRef(() => {
    });
    return x.useEffect(() => {
      const s = (r) => {
        if (r.target && !i.current) {
          let l = function() {
            a1(XA, n, u, {
              discrete: true
            });
          };
          const u = {
            originalEvent: r
          };
          r.pointerType === "touch" ? (e.removeEventListener("click", a.current), a.current = l, e.addEventListener("click", a.current, {
            once: true
          })) : l();
        } else e.removeEventListener("click", a.current);
        i.current = false;
      }, o = window.setTimeout(() => {
        e.addEventListener("pointerdown", s);
      }, 0);
      return () => {
        window.clearTimeout(o), e.removeEventListener("pointerdown", s), e.removeEventListener("click", a.current);
      };
    }, [
      e,
      n
    ]), {
      onPointerDownCapture: () => i.current = true
    };
  }
  function ZA(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = hi(t), i = x.useRef(false);
    return x.useEffect(() => {
      const a = (s) => {
        s.target && !i.current && a1(FA, n, {
          originalEvent: s
        }, {
          discrete: false
        });
      };
      return e.addEventListener("focusin", a), () => e.removeEventListener("focusin", a);
    }, [
      e,
      n
    ]), {
      onFocusCapture: () => i.current = true,
      onBlurCapture: () => i.current = false
    };
  }
  function Fp() {
    const t = new CustomEvent(Mf);
    document.dispatchEvent(t);
  }
  function a1(t, e, n, { discrete: i }) {
    const a = n.originalEvent.target, s = new CustomEvent(t, {
      bubbles: false,
      cancelable: true,
      detail: n
    });
    e && a.addEventListener(t, e, {
      once: true
    }), i ? e1(a, s) : a.dispatchEvent(s);
  }
  var $A = dh, IA = i1, mi = (globalThis == null ? void 0 : globalThis.document) ? x.useLayoutEffect : () => {
  }, JA = "Portal", s1 = x.forwardRef((t, e) => {
    var _a5;
    const { container: n, ...i } = t, [a, s] = x.useState(false);
    mi(() => s(true), []);
    const o = n || a && ((_a5 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a5.body);
    return o ? cv.createPortal(w.jsx(oe.div, {
      ...i,
      ref: e
    }), o) : null;
  });
  s1.displayName = JA;
  function WA(t, e) {
    return x.useReducer((n, i) => e[n][i] ?? n, t);
  }
  var hh = (t) => {
    const { present: e, children: n } = t, i = tC(e), a = typeof n == "function" ? n({
      present: i.isPresent
    }) : x.Children.only(n), s = Ge(i.ref, eC(a));
    return typeof n == "function" || i.isPresent ? x.cloneElement(a, {
      ref: s
    }) : null;
  };
  hh.displayName = "Presence";
  function tC(t) {
    const [e, n] = x.useState(), i = x.useRef(null), a = x.useRef(t), s = x.useRef("none"), o = t ? "mounted" : "unmounted", [r, l] = WA(o, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
    return x.useEffect(() => {
      const u = fr(i.current);
      s.current = r === "mounted" ? u : "none";
    }, [
      r
    ]), mi(() => {
      const u = i.current, c = a.current;
      if (c !== t) {
        const h = s.current, d = fr(u);
        t ? l("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && h !== d ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
      }
    }, [
      t,
      l
    ]), mi(() => {
      if (e) {
        let u;
        const c = e.ownerDocument.defaultView ?? window, f = (d) => {
          const y = fr(i.current).includes(d.animationName);
          if (d.target === e && y && (l("ANIMATION_END"), !a.current)) {
            const b = e.style.animationFillMode;
            e.style.animationFillMode = "forwards", u = c.setTimeout(() => {
              e.style.animationFillMode === "forwards" && (e.style.animationFillMode = b);
            });
          }
        }, h = (d) => {
          d.target === e && (s.current = fr(i.current));
        };
        return e.addEventListener("animationstart", h), e.addEventListener("animationcancel", f), e.addEventListener("animationend", f), () => {
          c.clearTimeout(u), e.removeEventListener("animationstart", h), e.removeEventListener("animationcancel", f), e.removeEventListener("animationend", f);
        };
      } else l("ANIMATION_END");
    }, [
      e,
      l
    ]), {
      isPresent: [
        "mounted",
        "unmountSuspended"
      ].includes(r),
      ref: x.useCallback((u) => {
        i.current = u ? getComputedStyle(u) : null, n(u);
      }, [])
    };
  }
  function fr(t) {
    return (t == null ? void 0 : t.animationName) || "none";
  }
  function eC(t) {
    var _a5, _b3;
    let e = (_a5 = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : _a5.get, n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (_b3 = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : _b3.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
  }
  var nC = ov[" useInsertionEffect ".trim().toString()] || mi;
  function iC({ prop: t, defaultProp: e, onChange: n = () => {
  }, caller: i }) {
    const [a, s, o] = aC({
      defaultProp: e,
      onChange: n
    }), r = t !== void 0, l = r ? t : a;
    {
      const c = x.useRef(t !== void 0);
      x.useEffect(() => {
        const f = c.current;
        f !== r && console.warn(`${i} is changing from ${f ? "controlled" : "uncontrolled"} to ${r ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = r;
      }, [
        r,
        i
      ]);
    }
    const u = x.useCallback((c) => {
      var _a5;
      if (r) {
        const f = sC(c) ? c(t) : c;
        f !== t && ((_a5 = o.current) == null ? void 0 : _a5.call(o, f));
      } else s(c);
    }, [
      r,
      t,
      s,
      o
    ]);
    return [
      l,
      u
    ];
  }
  function aC({ defaultProp: t, onChange: e }) {
    const [n, i] = x.useState(t), a = x.useRef(n), s = x.useRef(e);
    return nC(() => {
      s.current = e;
    }, [
      e
    ]), x.useEffect(() => {
      var _a5;
      a.current !== n && ((_a5 = s.current) == null ? void 0 : _a5.call(s, n), a.current = n);
    }, [
      n,
      a
    ]), [
      n,
      i,
      s
    ];
  }
  function sC(t) {
    return typeof t == "function";
  }
  var oC = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  }), rC = "VisuallyHidden", iu = x.forwardRef((t, e) => w.jsx(oe.span, {
    ...t,
    ref: e,
    style: {
      ...oC,
      ...t.style
    }
  }));
  iu.displayName = rC;
  var lC = iu, mh = "ToastProvider", [ph, uC, cC] = kA("Toast"), [o1, uj] = nu("Toast", [
    cC
  ]), [fC, au] = o1(mh), r1 = (t) => {
    const { __scopeToast: e, label: n = "Notification", duration: i = 5e3, swipeDirection: a = "right", swipeThreshold: s = 50, children: o } = t, [r, l] = x.useState(null), [u, c] = x.useState(0), f = x.useRef(false), h = x.useRef(false);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${mh}\`. Expected non-empty \`string\`.`), w.jsx(ph.Provider, {
      scope: e,
      children: w.jsx(fC, {
        scope: e,
        label: n,
        duration: i,
        swipeDirection: a,
        swipeThreshold: s,
        toastCount: u,
        viewport: r,
        onViewportChange: l,
        onToastAdd: x.useCallback(() => c((d) => d + 1), []),
        onToastRemove: x.useCallback(() => c((d) => d - 1), []),
        isFocusedToastEscapeKeyDownRef: f,
        isClosePausedRef: h,
        children: o
      })
    });
  };
  r1.displayName = mh;
  var l1 = "ToastViewport", dC = [
    "F8"
  ], Rf = "toast.viewportPause", Df = "toast.viewportResume", u1 = x.forwardRef((t, e) => {
    const { __scopeToast: n, hotkey: i = dC, label: a = "Notifications ({hotkey})", ...s } = t, o = au(l1, n), r = uC(n), l = x.useRef(null), u = x.useRef(null), c = x.useRef(null), f = x.useRef(null), h = Ge(e, f, o.onViewportChange), d = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = o.toastCount > 0;
    x.useEffect(() => {
      const b = (p) => {
        var _a5;
        i.length !== 0 && i.every((g) => p[g] || p.code === g) && ((_a5 = f.current) == null ? void 0 : _a5.focus());
      };
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
    }, [
      i
    ]), x.useEffect(() => {
      const b = l.current, p = f.current;
      if (v && b && p) {
        const m = () => {
          if (!o.isClosePausedRef.current) {
            const A = new CustomEvent(Rf);
            p.dispatchEvent(A), o.isClosePausedRef.current = true;
          }
        }, g = () => {
          if (o.isClosePausedRef.current) {
            const A = new CustomEvent(Df);
            p.dispatchEvent(A), o.isClosePausedRef.current = false;
          }
        }, S = (A) => {
          !b.contains(A.relatedTarget) && g();
        }, T = () => {
          b.contains(document.activeElement) || g();
        };
        return b.addEventListener("focusin", m), b.addEventListener("focusout", S), b.addEventListener("pointermove", m), b.addEventListener("pointerleave", T), window.addEventListener("blur", m), window.addEventListener("focus", g), () => {
          b.removeEventListener("focusin", m), b.removeEventListener("focusout", S), b.removeEventListener("pointermove", m), b.removeEventListener("pointerleave", T), window.removeEventListener("blur", m), window.removeEventListener("focus", g);
        };
      }
    }, [
      v,
      o.isClosePausedRef
    ]);
    const y = x.useCallback(({ tabbingDirection: b }) => {
      const m = r().map((g) => {
        const S = g.ref.current, T = [
          S,
          ...AC(S)
        ];
        return b === "forwards" ? T : T.reverse();
      });
      return (b === "forwards" ? m.reverse() : m).flat();
    }, [
      r
    ]);
    return x.useEffect(() => {
      const b = f.current;
      if (b) {
        const p = (m) => {
          var _a5, _b3, _c3;
          const g = m.altKey || m.ctrlKey || m.metaKey;
          if (m.key === "Tab" && !g) {
            const T = document.activeElement, A = m.shiftKey;
            if (m.target === b && A) {
              (_a5 = u.current) == null ? void 0 : _a5.focus();
              return;
            }
            const j = y({
              tabbingDirection: A ? "backwards" : "forwards"
            }), z = j.findIndex((P) => P === T);
            sc(j.slice(z + 1)) ? m.preventDefault() : A ? (_b3 = u.current) == null ? void 0 : _b3.focus() : (_c3 = c.current) == null ? void 0 : _c3.focus();
          }
        };
        return b.addEventListener("keydown", p), () => b.removeEventListener("keydown", p);
      }
    }, [
      r,
      y
    ]), w.jsxs(IA, {
      ref: l,
      role: "region",
      "aria-label": a.replace("{hotkey}", d),
      tabIndex: -1,
      style: {
        pointerEvents: v ? void 0 : "none"
      },
      children: [
        v && w.jsx(Of, {
          ref: u,
          onFocusFromOutsideViewport: () => {
            const b = y({
              tabbingDirection: "forwards"
            });
            sc(b);
          }
        }),
        w.jsx(ph.Slot, {
          scope: n,
          children: w.jsx(oe.ol, {
            tabIndex: -1,
            ...s,
            ref: h
          })
        }),
        v && w.jsx(Of, {
          ref: c,
          onFocusFromOutsideViewport: () => {
            const b = y({
              tabbingDirection: "backwards"
            });
            sc(b);
          }
        })
      ]
    });
  });
  u1.displayName = l1;
  var c1 = "ToastFocusProxy", Of = x.forwardRef((t, e) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: i, ...a } = t, s = au(c1, n);
    return w.jsx(iu, {
      "aria-hidden": true,
      tabIndex: 0,
      ...a,
      ref: e,
      style: {
        position: "fixed"
      },
      onFocus: (o) => {
        var _a5;
        const r = o.relatedTarget;
        !((_a5 = s.viewport) == null ? void 0 : _a5.contains(r)) && i();
      }
    });
  });
  Of.displayName = c1;
  var Ho = "Toast", hC = "toast.swipeStart", mC = "toast.swipeMove", pC = "toast.swipeCancel", gC = "toast.swipeEnd", f1 = x.forwardRef((t, e) => {
    const { forceMount: n, open: i, defaultOpen: a, onOpenChange: s, ...o } = t, [r, l] = iC({
      prop: i,
      defaultProp: a ?? true,
      onChange: s,
      caller: Ho
    });
    return w.jsx(hh, {
      present: n || r,
      children: w.jsx(bC, {
        open: r,
        ...o,
        ref: e,
        onClose: () => l(false),
        onPause: hi(t.onPause),
        onResume: hi(t.onResume),
        onSwipeStart: zt(t.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: zt(t.onSwipeMove, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: zt(t.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: zt(t.onSwipeEnd, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), l(false);
        })
      })
    });
  });
  f1.displayName = Ho;
  var [yC, vC] = o1(Ho, {
    onClose() {
    }
  }), bC = x.forwardRef((t, e) => {
    const { __scopeToast: n, type: i = "foreground", duration: a, open: s, onClose: o, onEscapeKeyDown: r, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: f, onSwipeCancel: h, onSwipeEnd: d, ...v } = t, y = au(Ho, n), [b, p] = x.useState(null), m = Ge(e, (L) => p(L)), g = x.useRef(null), S = x.useRef(null), T = a || y.duration, A = x.useRef(0), E = x.useRef(T), C = x.useRef(0), { onToastAdd: j, onToastRemove: z } = y, P = hi(() => {
      var _a5;
      (b == null ? void 0 : b.contains(document.activeElement)) && ((_a5 = y.viewport) == null ? void 0 : _a5.focus()), o();
    }), V = x.useCallback((L) => {
      !L || L === 1 / 0 || (window.clearTimeout(C.current), A.current = (/* @__PURE__ */ new Date()).getTime(), C.current = window.setTimeout(P, L));
    }, [
      P
    ]);
    x.useEffect(() => {
      const L = y.viewport;
      if (L) {
        const X = () => {
          V(E.current), u == null ? void 0 : u();
        }, R = () => {
          const O = (/* @__PURE__ */ new Date()).getTime() - A.current;
          E.current = E.current - O, window.clearTimeout(C.current), l == null ? void 0 : l();
        };
        return L.addEventListener(Rf, R), L.addEventListener(Df, X), () => {
          L.removeEventListener(Rf, R), L.removeEventListener(Df, X);
        };
      }
    }, [
      y.viewport,
      T,
      l,
      u,
      V
    ]), x.useEffect(() => {
      s && !y.isClosePausedRef.current && V(T);
    }, [
      s,
      T,
      y.isClosePausedRef,
      V
    ]), x.useEffect(() => (j(), () => z()), [
      j,
      z
    ]);
    const J = x.useMemo(() => b ? v1(b) : null, [
      b
    ]);
    return y.viewport ? w.jsxs(w.Fragment, {
      children: [
        J && w.jsx(xC, {
          __scopeToast: n,
          role: "status",
          "aria-live": i === "foreground" ? "assertive" : "polite",
          "aria-atomic": true,
          children: J
        }),
        w.jsx(yC, {
          scope: n,
          onClose: P,
          children: Mo.createPortal(w.jsx(ph.ItemSlot, {
            scope: n,
            children: w.jsx($A, {
              asChild: true,
              onEscapeKeyDown: zt(r, () => {
                y.isFocusedToastEscapeKeyDownRef.current || P(), y.isFocusedToastEscapeKeyDownRef.current = false;
              }),
              children: w.jsx(oe.li, {
                role: "status",
                "aria-live": "off",
                "aria-atomic": true,
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": y.swipeDirection,
                ...v,
                ref: m,
                style: {
                  userSelect: "none",
                  touchAction: "none",
                  ...t.style
                },
                onKeyDown: zt(t.onKeyDown, (L) => {
                  L.key === "Escape" && (r == null ? void 0 : r(L.nativeEvent), L.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = true, P()));
                }),
                onPointerDown: zt(t.onPointerDown, (L) => {
                  L.button === 0 && (g.current = {
                    x: L.clientX,
                    y: L.clientY
                  });
                }),
                onPointerMove: zt(t.onPointerMove, (L) => {
                  if (!g.current) return;
                  const X = L.clientX - g.current.x, R = L.clientY - g.current.y, O = !!S.current, D = [
                    "left",
                    "right"
                  ].includes(y.swipeDirection), N = [
                    "left",
                    "up"
                  ].includes(y.swipeDirection) ? Math.min : Math.max, U = D ? N(0, X) : 0, ft = D ? 0 : N(0, R), F = L.pointerType === "touch" ? 10 : 2, Z = {
                    x: U,
                    y: ft
                  }, $ = {
                    originalEvent: L,
                    delta: Z
                  };
                  O ? (S.current = Z, dr(mC, f, $, {
                    discrete: false
                  })) : Kp(Z, y.swipeDirection, F) ? (S.current = Z, dr(hC, c, $, {
                    discrete: false
                  }), L.target.setPointerCapture(L.pointerId)) : (Math.abs(X) > F || Math.abs(R) > F) && (g.current = null);
                }),
                onPointerUp: zt(t.onPointerUp, (L) => {
                  const X = S.current, R = L.target;
                  if (R.hasPointerCapture(L.pointerId) && R.releasePointerCapture(L.pointerId), S.current = null, g.current = null, X) {
                    const O = L.currentTarget, D = {
                      originalEvent: L,
                      delta: X
                    };
                    Kp(X, y.swipeDirection, y.swipeThreshold) ? dr(gC, d, D, {
                      discrete: true
                    }) : dr(pC, h, D, {
                      discrete: true
                    }), O.addEventListener("click", (N) => N.preventDefault(), {
                      once: true
                    });
                  }
                })
              })
            })
          }), y.viewport)
        })
      ]
    }) : null;
  }), xC = (t) => {
    const { __scopeToast: e, children: n, ...i } = t, a = au(Ho, e), [s, o] = x.useState(false), [r, l] = x.useState(false);
    return TC(() => o(true)), x.useEffect(() => {
      const u = window.setTimeout(() => l(true), 1e3);
      return () => window.clearTimeout(u);
    }, []), r ? null : w.jsx(s1, {
      asChild: true,
      children: w.jsx(iu, {
        ...i,
        children: s && w.jsxs(w.Fragment, {
          children: [
            a.label,
            " ",
            n
          ]
        })
      })
    });
  }, SC = "ToastTitle", d1 = x.forwardRef((t, e) => {
    const { __scopeToast: n, ...i } = t;
    return w.jsx(oe.div, {
      ...i,
      ref: e
    });
  });
  d1.displayName = SC;
  var wC = "ToastDescription", h1 = x.forwardRef((t, e) => {
    const { __scopeToast: n, ...i } = t;
    return w.jsx(oe.div, {
      ...i,
      ref: e
    });
  });
  h1.displayName = wC;
  var m1 = "ToastAction", p1 = x.forwardRef((t, e) => {
    const { altText: n, ...i } = t;
    return n.trim() ? w.jsx(y1, {
      altText: n,
      asChild: true,
      children: w.jsx(gh, {
        ...i,
        ref: e
      })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${m1}\`. Expected non-empty \`string\`.`), null);
  });
  p1.displayName = m1;
  var g1 = "ToastClose", gh = x.forwardRef((t, e) => {
    const { __scopeToast: n, ...i } = t, a = vC(g1, n);
    return w.jsx(y1, {
      asChild: true,
      children: w.jsx(oe.button, {
        type: "button",
        ...i,
        ref: e,
        onClick: zt(t.onClick, a.onClose)
      })
    });
  });
  gh.displayName = g1;
  var y1 = x.forwardRef((t, e) => {
    const { __scopeToast: n, altText: i, ...a } = t;
    return w.jsx(oe.div, {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": i || void 0,
      ...a,
      ref: e
    });
  });
  function v1(t) {
    const e = [];
    return Array.from(t.childNodes).forEach((i) => {
      if (i.nodeType === i.TEXT_NODE && i.textContent && e.push(i.textContent), EC(i)) {
        const a = i.ariaHidden || i.hidden || i.style.display === "none", s = i.dataset.radixToastAnnounceExclude === "";
        if (!a) if (s) {
          const o = i.dataset.radixToastAnnounceAlt;
          o && e.push(o);
        } else e.push(...v1(i));
      }
    }), e;
  }
  function dr(t, e, n, { discrete: i }) {
    const a = n.originalEvent.currentTarget, s = new CustomEvent(t, {
      bubbles: true,
      cancelable: true,
      detail: n
    });
    e && a.addEventListener(t, e, {
      once: true
    }), i ? e1(a, s) : a.dispatchEvent(s);
  }
  var Kp = (t, e, n = 0) => {
    const i = Math.abs(t.x), a = Math.abs(t.y), s = i > a;
    return e === "left" || e === "right" ? s && i > n : !s && a > n;
  };
  function TC(t = () => {
  }) {
    const e = hi(t);
    mi(() => {
      let n = 0, i = 0;
      return n = window.requestAnimationFrame(() => i = window.requestAnimationFrame(e)), () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(i);
      };
    }, [
      e
    ]);
  }
  function EC(t) {
    return t.nodeType === t.ELEMENT_NODE;
  }
  function AC(t) {
    const e = [], n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const a = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || a ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    for (; n.nextNode(); ) e.push(n.currentNode);
    return e;
  }
  function sc(t) {
    const e = document.activeElement;
    return t.some((n) => n === e ? true : (n.focus(), document.activeElement !== e));
  }
  var CC = r1, b1 = u1, x1 = f1, S1 = d1, w1 = h1, T1 = p1, E1 = gh;
  function A1(t) {
    var e, n, i = "";
    if (typeof t == "string" || typeof t == "number") i += t;
    else if (typeof t == "object") if (Array.isArray(t)) {
      var a = t.length;
      for (e = 0; e < a; e++) t[e] && (n = A1(t[e])) && (i && (i += " "), i += n);
    } else for (n in t) t[n] && (i && (i += " "), i += n);
    return i;
  }
  function C1() {
    for (var t, e, n = 0, i = "", a = arguments.length; n < a; n++) (t = arguments[n]) && (e = A1(t)) && (i && (i += " "), i += e);
    return i;
  }
  const Qp = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Zp = C1, M1 = (t, e) => (n) => {
    var i;
    if ((e == null ? void 0 : e.variants) == null) return Zp(t, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const { variants: a, defaultVariants: s } = e, o = Object.keys(a).map((u) => {
      const c = n == null ? void 0 : n[u], f = s == null ? void 0 : s[u];
      if (c === null) return null;
      const h = Qp(c) || Qp(f);
      return a[u][h];
    }), r = n && Object.entries(n).reduce((u, c) => {
      let [f, h] = c;
      return h === void 0 || (u[f] = h), u;
    }, {}), l = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((u, c) => {
      let { class: f, className: h, ...d } = c;
      return Object.entries(d).every((v) => {
        let [y, b] = v;
        return Array.isArray(b) ? b.includes({
          ...s,
          ...r
        }[y]) : {
          ...s,
          ...r
        }[y] === b;
      }) ? [
        ...u,
        f,
        h
      ] : u;
    }, []);
    return Zp(t, o, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  };
  const MC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), R1 = (...t) => t.filter((e, n, i) => !!e && e.trim() !== "" && i.indexOf(e) === n).join(" ").trim();
  var RC = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const DC = x.forwardRef(({ color: t = "currentColor", size: e = 24, strokeWidth: n = 2, absoluteStrokeWidth: i, className: a = "", children: s, iconNode: o, ...r }, l) => x.createElement("svg", {
    ref: l,
    ...RC,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(n) * 24 / Number(e) : n,
    className: R1("lucide", a),
    ...r
  }, [
    ...o.map(([u, c]) => x.createElement(u, c)),
    ...Array.isArray(s) ? s : [
      s
    ]
  ]));
  const on = (t, e) => {
    const n = x.forwardRef(({ className: i, ...a }, s) => x.createElement(DC, {
      ref: s,
      iconNode: e,
      className: R1(`lucide-${MC(t)}`, i),
      ...a
    }));
    return n.displayName = `${t}`, n;
  };
  const OC = on("ArrowLeft", [
    [
      "path",
      {
        d: "m12 19-7-7 7-7",
        key: "1l729n"
      }
    ],
    [
      "path",
      {
        d: "M19 12H5",
        key: "x3x0zl"
      }
    ]
  ]);
  const $p = on("Check", [
    [
      "path",
      {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
      }
    ]
  ]);
  const NC = on("Copy", [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
      }
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
      }
    ]
  ]);
  const oc = on("Download", [
    [
      "path",
      {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h"
      }
    ],
    [
      "polyline",
      {
        points: "7 10 12 15 17 10",
        key: "2ggqvy"
      }
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12",
        y1: "15",
        y2: "3",
        key: "1vk2je"
      }
    ]
  ]);
  const jC = on("Gamepad2", [
    [
      "line",
      {
        x1: "6",
        x2: "10",
        y1: "11",
        y2: "11",
        key: "1gktln"
      }
    ],
    [
      "line",
      {
        x1: "8",
        x2: "8",
        y1: "9",
        y2: "13",
        key: "qnk9ow"
      }
    ],
    [
      "line",
      {
        x1: "15",
        x2: "15.01",
        y1: "12",
        y2: "12",
        key: "krot7o"
      }
    ],
    [
      "line",
      {
        x1: "18",
        x2: "18.01",
        y1: "10",
        y2: "10",
        key: "1lcuu1"
      }
    ],
    [
      "path",
      {
        d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
        key: "mfqc10"
      }
    ]
  ]);
  const zC = on("Link2", [
    [
      "path",
      {
        d: "M9 17H7A5 5 0 0 1 7 7h2",
        key: "8i5ue5"
      }
    ],
    [
      "path",
      {
        d: "M15 7h2a5 5 0 1 1 0 10h-2",
        key: "1b9ql8"
      }
    ],
    [
      "line",
      {
        x1: "8",
        x2: "16",
        y1: "12",
        y2: "12",
        key: "1jonct"
      }
    ]
  ]);
  const Ip = on("Linkedin", [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f"
      }
    ],
    [
      "rect",
      {
        width: "4",
        height: "12",
        x: "2",
        y: "9",
        key: "mk3on5"
      }
    ],
    [
      "circle",
      {
        cx: "4",
        cy: "4",
        r: "2",
        key: "bt5ra8"
      }
    ]
  ]);
  const Jp = on("Mail", [
    [
      "rect",
      {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
      }
    ],
    [
      "path",
      {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
      }
    ]
  ]);
  const _C = on("Share2", [
    [
      "circle",
      {
        cx: "18",
        cy: "5",
        r: "3",
        key: "gq8acd"
      }
    ],
    [
      "circle",
      {
        cx: "6",
        cy: "12",
        r: "3",
        key: "w7nqdw"
      }
    ],
    [
      "circle",
      {
        cx: "18",
        cy: "19",
        r: "3",
        key: "1xt0gg"
      }
    ],
    [
      "line",
      {
        x1: "8.59",
        x2: "15.42",
        y1: "13.51",
        y2: "17.49",
        key: "47mynk"
      }
    ],
    [
      "line",
      {
        x1: "15.41",
        x2: "8.59",
        y1: "6.51",
        y2: "10.49",
        key: "1n3mei"
      }
    ]
  ]);
  const LC = on("X", [
    [
      "path",
      {
        d: "M18 6 6 18",
        key: "1bl5f8"
      }
    ],
    [
      "path",
      {
        d: "m6 6 12 12",
        key: "d8bk6v"
      }
    ]
  ]), yh = "-", VC = (t) => {
    const e = UC(t), { conflictingClassGroups: n, conflictingClassGroupModifiers: i } = t;
    return {
      getClassGroupId: (o) => {
        const r = o.split(yh);
        return r[0] === "" && r.length !== 1 && r.shift(), D1(r, e) || BC(o);
      },
      getConflictingClassGroupIds: (o, r) => {
        const l = n[o] || [];
        return r && i[o] ? [
          ...l,
          ...i[o]
        ] : l;
      }
    };
  }, D1 = (t, e) => {
    var _a5;
    if (t.length === 0) return e.classGroupId;
    const n = t[0], i = e.nextPart.get(n), a = i ? D1(t.slice(1), i) : void 0;
    if (a) return a;
    if (e.validators.length === 0) return;
    const s = t.join(yh);
    return (_a5 = e.validators.find(({ validator: o }) => o(s))) == null ? void 0 : _a5.classGroupId;
  }, Wp = /^\[(.+)\]$/, BC = (t) => {
    if (Wp.test(t)) {
      const e = Wp.exec(t)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  }, UC = (t) => {
    const { theme: e, prefix: n } = t, i = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    return HC(Object.entries(t.classGroups), n).forEach(([s, o]) => {
      Nf(o, i, s, e);
    }), i;
  }, Nf = (t, e, n, i) => {
    t.forEach((a) => {
      if (typeof a == "string") {
        const s = a === "" ? e : tg(e, a);
        s.classGroupId = n;
        return;
      }
      if (typeof a == "function") {
        if (PC(a)) {
          Nf(a(i), e, n, i);
          return;
        }
        e.validators.push({
          validator: a,
          classGroupId: n
        });
        return;
      }
      Object.entries(a).forEach(([s, o]) => {
        Nf(o, tg(e, s), n, i);
      });
    });
  }, tg = (t, e) => {
    let n = t;
    return e.split(yh).forEach((i) => {
      n.nextPart.has(i) || n.nextPart.set(i, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      }), n = n.nextPart.get(i);
    }), n;
  }, PC = (t) => t.isThemeGetter, HC = (t, e) => e ? t.map(([n, i]) => {
    const a = i.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([o, r]) => [
      e + o,
      r
    ])) : s);
    return [
      n,
      a
    ];
  }) : t, kC = (t) => {
    if (t < 1) return {
      get: () => {
      },
      set: () => {
      }
    };
    let e = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    const a = (s, o) => {
      n.set(s, o), e++, e > t && (e = 0, i = n, n = /* @__PURE__ */ new Map());
    };
    return {
      get(s) {
        let o = n.get(s);
        if (o !== void 0) return o;
        if ((o = i.get(s)) !== void 0) return a(s, o), o;
      },
      set(s, o) {
        n.has(s) ? n.set(s, o) : a(s, o);
      }
    };
  }, O1 = "!", GC = (t) => {
    const { separator: e, experimentalParseClassName: n } = t, i = e.length === 1, a = e[0], s = e.length, o = (r) => {
      const l = [];
      let u = 0, c = 0, f;
      for (let b = 0; b < r.length; b++) {
        let p = r[b];
        if (u === 0) {
          if (p === a && (i || r.slice(b, b + s) === e)) {
            l.push(r.slice(c, b)), c = b + s;
            continue;
          }
          if (p === "/") {
            f = b;
            continue;
          }
        }
        p === "[" ? u++ : p === "]" && u--;
      }
      const h = l.length === 0 ? r : r.substring(c), d = h.startsWith(O1), v = d ? h.substring(1) : h, y = f && f > c ? f - c : void 0;
      return {
        modifiers: l,
        hasImportantModifier: d,
        baseClassName: v,
        maybePostfixModifierPosition: y
      };
    };
    return n ? (r) => n({
      className: r,
      parseClassName: o
    }) : o;
  }, YC = (t) => {
    if (t.length <= 1) return t;
    const e = [];
    let n = [];
    return t.forEach((i) => {
      i[0] === "[" ? (e.push(...n.sort(), i), n = []) : n.push(i);
    }), e.push(...n.sort()), e;
  }, qC = (t) => ({
    cache: kC(t.cacheSize),
    parseClassName: GC(t),
    ...VC(t)
  }), XC = /\s+/, FC = (t, e) => {
    const { parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: a } = e, s = [], o = t.trim().split(XC);
    let r = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const u = o[l], { modifiers: c, hasImportantModifier: f, baseClassName: h, maybePostfixModifierPosition: d } = n(u);
      let v = !!d, y = i(v ? h.substring(0, d) : h);
      if (!y) {
        if (!v) {
          r = u + (r.length > 0 ? " " + r : r);
          continue;
        }
        if (y = i(h), !y) {
          r = u + (r.length > 0 ? " " + r : r);
          continue;
        }
        v = false;
      }
      const b = YC(c).join(":"), p = f ? b + O1 : b, m = p + y;
      if (s.includes(m)) continue;
      s.push(m);
      const g = a(y, v);
      for (let S = 0; S < g.length; ++S) {
        const T = g[S];
        s.push(p + T);
      }
      r = u + (r.length > 0 ? " " + r : r);
    }
    return r;
  };
  function KC() {
    let t = 0, e, n, i = "";
    for (; t < arguments.length; ) (e = arguments[t++]) && (n = N1(e)) && (i && (i += " "), i += n);
    return i;
  }
  const N1 = (t) => {
    if (typeof t == "string") return t;
    let e, n = "";
    for (let i = 0; i < t.length; i++) t[i] && (e = N1(t[i])) && (n && (n += " "), n += e);
    return n;
  };
  function QC(t, ...e) {
    let n, i, a, s = o;
    function o(l) {
      const u = e.reduce((c, f) => f(c), t());
      return n = qC(u), i = n.cache.get, a = n.cache.set, s = r, r(l);
    }
    function r(l) {
      const u = i(l);
      if (u) return u;
      const c = FC(l, n);
      return a(l, c), c;
    }
    return function() {
      return s(KC.apply(null, arguments));
    };
  }
  const ht = (t) => {
    const e = (n) => n[t] || [];
    return e.isThemeGetter = true, e;
  }, j1 = /^\[(?:([a-z-]+):)?(.+)\]$/i, ZC = /^\d+\/\d+$/, $C = /* @__PURE__ */ new Set([
    "px",
    "full",
    "screen"
  ]), IC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, JC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, WC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, t2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, e2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, dn = (t) => Ua(t) || $C.has(t) || ZC.test(t), Vn = (t) => cs(t, "length", u2), Ua = (t) => !!t && !Number.isNaN(Number(t)), rc = (t) => cs(t, "number", Ua), As = (t) => !!t && Number.isInteger(Number(t)), n2 = (t) => t.endsWith("%") && Ua(t.slice(0, -1)), q = (t) => j1.test(t), Bn = (t) => IC.test(t), i2 = /* @__PURE__ */ new Set([
    "length",
    "size",
    "percentage"
  ]), a2 = (t) => cs(t, i2, z1), s2 = (t) => cs(t, "position", z1), o2 = /* @__PURE__ */ new Set([
    "image",
    "url"
  ]), r2 = (t) => cs(t, o2, f2), l2 = (t) => cs(t, "", c2), Cs = () => true, cs = (t, e, n) => {
    const i = j1.exec(t);
    return i ? i[1] ? typeof e == "string" ? i[1] === e : e.has(i[1]) : n(i[2]) : false;
  }, u2 = (t) => JC.test(t) && !WC.test(t), z1 = () => false, c2 = (t) => t2.test(t), f2 = (t) => e2.test(t), d2 = () => {
    const t = ht("colors"), e = ht("spacing"), n = ht("blur"), i = ht("brightness"), a = ht("borderColor"), s = ht("borderRadius"), o = ht("borderSpacing"), r = ht("borderWidth"), l = ht("contrast"), u = ht("grayscale"), c = ht("hueRotate"), f = ht("invert"), h = ht("gap"), d = ht("gradientColorStops"), v = ht("gradientColorStopPositions"), y = ht("inset"), b = ht("margin"), p = ht("opacity"), m = ht("padding"), g = ht("saturate"), S = ht("scale"), T = ht("sepia"), A = ht("skew"), E = ht("space"), C = ht("translate"), j = () => [
      "auto",
      "contain",
      "none"
    ], z = () => [
      "auto",
      "hidden",
      "clip",
      "visible",
      "scroll"
    ], P = () => [
      "auto",
      q,
      e
    ], V = () => [
      q,
      e
    ], J = () => [
      "",
      dn,
      Vn
    ], L = () => [
      "auto",
      Ua,
      q
    ], X = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top"
    ], R = () => [
      "solid",
      "dashed",
      "dotted",
      "double",
      "none"
    ], O = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity"
    ], D = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch"
    ], N = () => [
      "",
      "0",
      q
    ], U = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column"
    ], ft = () => [
      Ua,
      q
    ];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [
          Cs
        ],
        spacing: [
          dn,
          Vn
        ],
        blur: [
          "none",
          "",
          Bn,
          q
        ],
        brightness: ft(),
        borderColor: [
          t
        ],
        borderRadius: [
          "none",
          "",
          "full",
          Bn,
          q
        ],
        borderSpacing: V(),
        borderWidth: J(),
        contrast: ft(),
        grayscale: N(),
        hueRotate: ft(),
        invert: N(),
        gap: V(),
        gradientColorStops: [
          t
        ],
        gradientColorStopPositions: [
          n2,
          Vn
        ],
        inset: P(),
        margin: P(),
        opacity: ft(),
        padding: V(),
        saturate: ft(),
        scale: ft(),
        sepia: N(),
        skew: ft(),
        space: V(),
        translate: V()
      },
      classGroups: {
        aspect: [
          {
            aspect: [
              "auto",
              "square",
              "video",
              q
            ]
          }
        ],
        container: [
          "container"
        ],
        columns: [
          {
            columns: [
              Bn
            ]
          }
        ],
        "break-after": [
          {
            "break-after": U()
          }
        ],
        "break-before": [
          {
            "break-before": U()
          }
        ],
        "break-inside": [
          {
            "break-inside": [
              "auto",
              "avoid",
              "avoid-page",
              "avoid-column"
            ]
          }
        ],
        "box-decoration": [
          {
            "box-decoration": [
              "slice",
              "clone"
            ]
          }
        ],
        box: [
          {
            box: [
              "border",
              "content"
            ]
          }
        ],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        float: [
          {
            float: [
              "right",
              "left",
              "none",
              "start",
              "end"
            ]
          }
        ],
        clear: [
          {
            clear: [
              "left",
              "right",
              "both",
              "none",
              "start",
              "end"
            ]
          }
        ],
        isolation: [
          "isolate",
          "isolation-auto"
        ],
        "object-fit": [
          {
            object: [
              "contain",
              "cover",
              "fill",
              "none",
              "scale-down"
            ]
          }
        ],
        "object-position": [
          {
            object: [
              ...X(),
              q
            ]
          }
        ],
        overflow: [
          {
            overflow: z()
          }
        ],
        "overflow-x": [
          {
            "overflow-x": z()
          }
        ],
        "overflow-y": [
          {
            "overflow-y": z()
          }
        ],
        overscroll: [
          {
            overscroll: j()
          }
        ],
        "overscroll-x": [
          {
            "overscroll-x": j()
          }
        ],
        "overscroll-y": [
          {
            "overscroll-y": j()
          }
        ],
        position: [
          "static",
          "fixed",
          "absolute",
          "relative",
          "sticky"
        ],
        inset: [
          {
            inset: [
              y
            ]
          }
        ],
        "inset-x": [
          {
            "inset-x": [
              y
            ]
          }
        ],
        "inset-y": [
          {
            "inset-y": [
              y
            ]
          }
        ],
        start: [
          {
            start: [
              y
            ]
          }
        ],
        end: [
          {
            end: [
              y
            ]
          }
        ],
        top: [
          {
            top: [
              y
            ]
          }
        ],
        right: [
          {
            right: [
              y
            ]
          }
        ],
        bottom: [
          {
            bottom: [
              y
            ]
          }
        ],
        left: [
          {
            left: [
              y
            ]
          }
        ],
        visibility: [
          "visible",
          "invisible",
          "collapse"
        ],
        z: [
          {
            z: [
              "auto",
              As,
              q
            ]
          }
        ],
        basis: [
          {
            basis: P()
          }
        ],
        "flex-direction": [
          {
            flex: [
              "row",
              "row-reverse",
              "col",
              "col-reverse"
            ]
          }
        ],
        "flex-wrap": [
          {
            flex: [
              "wrap",
              "wrap-reverse",
              "nowrap"
            ]
          }
        ],
        flex: [
          {
            flex: [
              "1",
              "auto",
              "initial",
              "none",
              q
            ]
          }
        ],
        grow: [
          {
            grow: N()
          }
        ],
        shrink: [
          {
            shrink: N()
          }
        ],
        order: [
          {
            order: [
              "first",
              "last",
              "none",
              As,
              q
            ]
          }
        ],
        "grid-cols": [
          {
            "grid-cols": [
              Cs
            ]
          }
        ],
        "col-start-end": [
          {
            col: [
              "auto",
              {
                span: [
                  "full",
                  As,
                  q
                ]
              },
              q
            ]
          }
        ],
        "col-start": [
          {
            "col-start": L()
          }
        ],
        "col-end": [
          {
            "col-end": L()
          }
        ],
        "grid-rows": [
          {
            "grid-rows": [
              Cs
            ]
          }
        ],
        "row-start-end": [
          {
            row: [
              "auto",
              {
                span: [
                  As,
                  q
                ]
              },
              q
            ]
          }
        ],
        "row-start": [
          {
            "row-start": L()
          }
        ],
        "row-end": [
          {
            "row-end": L()
          }
        ],
        "grid-flow": [
          {
            "grid-flow": [
              "row",
              "col",
              "dense",
              "row-dense",
              "col-dense"
            ]
          }
        ],
        "auto-cols": [
          {
            "auto-cols": [
              "auto",
              "min",
              "max",
              "fr",
              q
            ]
          }
        ],
        "auto-rows": [
          {
            "auto-rows": [
              "auto",
              "min",
              "max",
              "fr",
              q
            ]
          }
        ],
        gap: [
          {
            gap: [
              h
            ]
          }
        ],
        "gap-x": [
          {
            "gap-x": [
              h
            ]
          }
        ],
        "gap-y": [
          {
            "gap-y": [
              h
            ]
          }
        ],
        "justify-content": [
          {
            justify: [
              "normal",
              ...D()
            ]
          }
        ],
        "justify-items": [
          {
            "justify-items": [
              "start",
              "end",
              "center",
              "stretch"
            ]
          }
        ],
        "justify-self": [
          {
            "justify-self": [
              "auto",
              "start",
              "end",
              "center",
              "stretch"
            ]
          }
        ],
        "align-content": [
          {
            content: [
              "normal",
              ...D(),
              "baseline"
            ]
          }
        ],
        "align-items": [
          {
            items: [
              "start",
              "end",
              "center",
              "baseline",
              "stretch"
            ]
          }
        ],
        "align-self": [
          {
            self: [
              "auto",
              "start",
              "end",
              "center",
              "stretch",
              "baseline"
            ]
          }
        ],
        "place-content": [
          {
            "place-content": [
              ...D(),
              "baseline"
            ]
          }
        ],
        "place-items": [
          {
            "place-items": [
              "start",
              "end",
              "center",
              "baseline",
              "stretch"
            ]
          }
        ],
        "place-self": [
          {
            "place-self": [
              "auto",
              "start",
              "end",
              "center",
              "stretch"
            ]
          }
        ],
        p: [
          {
            p: [
              m
            ]
          }
        ],
        px: [
          {
            px: [
              m
            ]
          }
        ],
        py: [
          {
            py: [
              m
            ]
          }
        ],
        ps: [
          {
            ps: [
              m
            ]
          }
        ],
        pe: [
          {
            pe: [
              m
            ]
          }
        ],
        pt: [
          {
            pt: [
              m
            ]
          }
        ],
        pr: [
          {
            pr: [
              m
            ]
          }
        ],
        pb: [
          {
            pb: [
              m
            ]
          }
        ],
        pl: [
          {
            pl: [
              m
            ]
          }
        ],
        m: [
          {
            m: [
              b
            ]
          }
        ],
        mx: [
          {
            mx: [
              b
            ]
          }
        ],
        my: [
          {
            my: [
              b
            ]
          }
        ],
        ms: [
          {
            ms: [
              b
            ]
          }
        ],
        me: [
          {
            me: [
              b
            ]
          }
        ],
        mt: [
          {
            mt: [
              b
            ]
          }
        ],
        mr: [
          {
            mr: [
              b
            ]
          }
        ],
        mb: [
          {
            mb: [
              b
            ]
          }
        ],
        ml: [
          {
            ml: [
              b
            ]
          }
        ],
        "space-x": [
          {
            "space-x": [
              E
            ]
          }
        ],
        "space-x-reverse": [
          "space-x-reverse"
        ],
        "space-y": [
          {
            "space-y": [
              E
            ]
          }
        ],
        "space-y-reverse": [
          "space-y-reverse"
        ],
        w: [
          {
            w: [
              "auto",
              "min",
              "max",
              "fit",
              "svw",
              "lvw",
              "dvw",
              q,
              e
            ]
          }
        ],
        "min-w": [
          {
            "min-w": [
              q,
              e,
              "min",
              "max",
              "fit"
            ]
          }
        ],
        "max-w": [
          {
            "max-w": [
              q,
              e,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              {
                screen: [
                  Bn
                ]
              },
              Bn
            ]
          }
        ],
        h: [
          {
            h: [
              q,
              e,
              "auto",
              "min",
              "max",
              "fit",
              "svh",
              "lvh",
              "dvh"
            ]
          }
        ],
        "min-h": [
          {
            "min-h": [
              q,
              e,
              "min",
              "max",
              "fit",
              "svh",
              "lvh",
              "dvh"
            ]
          }
        ],
        "max-h": [
          {
            "max-h": [
              q,
              e,
              "min",
              "max",
              "fit",
              "svh",
              "lvh",
              "dvh"
            ]
          }
        ],
        size: [
          {
            size: [
              q,
              e,
              "auto",
              "min",
              "max",
              "fit"
            ]
          }
        ],
        "font-size": [
          {
            text: [
              "base",
              Bn,
              Vn
            ]
          }
        ],
        "font-smoothing": [
          "antialiased",
          "subpixel-antialiased"
        ],
        "font-style": [
          "italic",
          "not-italic"
        ],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              rc
            ]
          }
        ],
        "font-family": [
          {
            font: [
              Cs
            ]
          }
        ],
        "fvn-normal": [
          "normal-nums"
        ],
        "fvn-ordinal": [
          "ordinal"
        ],
        "fvn-slashed-zero": [
          "slashed-zero"
        ],
        "fvn-figure": [
          "lining-nums",
          "oldstyle-nums"
        ],
        "fvn-spacing": [
          "proportional-nums",
          "tabular-nums"
        ],
        "fvn-fraction": [
          "diagonal-fractions",
          "stacked-fractions"
        ],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              q
            ]
          }
        ],
        "line-clamp": [
          {
            "line-clamp": [
              "none",
              Ua,
              rc
            ]
          }
        ],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              dn,
              q
            ]
          }
        ],
        "list-image": [
          {
            "list-image": [
              "none",
              q
            ]
          }
        ],
        "list-style-type": [
          {
            list: [
              "none",
              "disc",
              "decimal",
              q
            ]
          }
        ],
        "list-style-position": [
          {
            list: [
              "inside",
              "outside"
            ]
          }
        ],
        "placeholder-color": [
          {
            placeholder: [
              t
            ]
          }
        ],
        "placeholder-opacity": [
          {
            "placeholder-opacity": [
              p
            ]
          }
        ],
        "text-alignment": [
          {
            text: [
              "left",
              "center",
              "right",
              "justify",
              "start",
              "end"
            ]
          }
        ],
        "text-color": [
          {
            text: [
              t
            ]
          }
        ],
        "text-opacity": [
          {
            "text-opacity": [
              p
            ]
          }
        ],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline"
        ],
        "text-decoration-style": [
          {
            decoration: [
              ...R(),
              "wavy"
            ]
          }
        ],
        "text-decoration-thickness": [
          {
            decoration: [
              "auto",
              "from-font",
              dn,
              Vn
            ]
          }
        ],
        "underline-offset": [
          {
            "underline-offset": [
              "auto",
              dn,
              q
            ]
          }
        ],
        "text-decoration-color": [
          {
            decoration: [
              t
            ]
          }
        ],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case"
        ],
        "text-overflow": [
          "truncate",
          "text-ellipsis",
          "text-clip"
        ],
        "text-wrap": [
          {
            text: [
              "wrap",
              "nowrap",
              "balance",
              "pretty"
            ]
          }
        ],
        indent: [
          {
            indent: V()
          }
        ],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              q
            ]
          }
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces"
            ]
          }
        ],
        break: [
          {
            break: [
              "normal",
              "words",
              "all",
              "keep"
            ]
          }
        ],
        hyphens: [
          {
            hyphens: [
              "none",
              "manual",
              "auto"
            ]
          }
        ],
        content: [
          {
            content: [
              "none",
              q
            ]
          }
        ],
        "bg-attachment": [
          {
            bg: [
              "fixed",
              "local",
              "scroll"
            ]
          }
        ],
        "bg-clip": [
          {
            "bg-clip": [
              "border",
              "padding",
              "content",
              "text"
            ]
          }
        ],
        "bg-opacity": [
          {
            "bg-opacity": [
              p
            ]
          }
        ],
        "bg-origin": [
          {
            "bg-origin": [
              "border",
              "padding",
              "content"
            ]
          }
        ],
        "bg-position": [
          {
            bg: [
              ...X(),
              s2
            ]
          }
        ],
        "bg-repeat": [
          {
            bg: [
              "no-repeat",
              {
                repeat: [
                  "",
                  "x",
                  "y",
                  "round",
                  "space"
                ]
              }
            ]
          }
        ],
        "bg-size": [
          {
            bg: [
              "auto",
              "cover",
              "contain",
              a2
            ]
          }
        ],
        "bg-image": [
          {
            bg: [
              "none",
              {
                "gradient-to": [
                  "t",
                  "tr",
                  "r",
                  "br",
                  "b",
                  "bl",
                  "l",
                  "tl"
                ]
              },
              r2
            ]
          }
        ],
        "bg-color": [
          {
            bg: [
              t
            ]
          }
        ],
        "gradient-from-pos": [
          {
            from: [
              v
            ]
          }
        ],
        "gradient-via-pos": [
          {
            via: [
              v
            ]
          }
        ],
        "gradient-to-pos": [
          {
            to: [
              v
            ]
          }
        ],
        "gradient-from": [
          {
            from: [
              d
            ]
          }
        ],
        "gradient-via": [
          {
            via: [
              d
            ]
          }
        ],
        "gradient-to": [
          {
            to: [
              d
            ]
          }
        ],
        rounded: [
          {
            rounded: [
              s
            ]
          }
        ],
        "rounded-s": [
          {
            "rounded-s": [
              s
            ]
          }
        ],
        "rounded-e": [
          {
            "rounded-e": [
              s
            ]
          }
        ],
        "rounded-t": [
          {
            "rounded-t": [
              s
            ]
          }
        ],
        "rounded-r": [
          {
            "rounded-r": [
              s
            ]
          }
        ],
        "rounded-b": [
          {
            "rounded-b": [
              s
            ]
          }
        ],
        "rounded-l": [
          {
            "rounded-l": [
              s
            ]
          }
        ],
        "rounded-ss": [
          {
            "rounded-ss": [
              s
            ]
          }
        ],
        "rounded-se": [
          {
            "rounded-se": [
              s
            ]
          }
        ],
        "rounded-ee": [
          {
            "rounded-ee": [
              s
            ]
          }
        ],
        "rounded-es": [
          {
            "rounded-es": [
              s
            ]
          }
        ],
        "rounded-tl": [
          {
            "rounded-tl": [
              s
            ]
          }
        ],
        "rounded-tr": [
          {
            "rounded-tr": [
              s
            ]
          }
        ],
        "rounded-br": [
          {
            "rounded-br": [
              s
            ]
          }
        ],
        "rounded-bl": [
          {
            "rounded-bl": [
              s
            ]
          }
        ],
        "border-w": [
          {
            border: [
              r
            ]
          }
        ],
        "border-w-x": [
          {
            "border-x": [
              r
            ]
          }
        ],
        "border-w-y": [
          {
            "border-y": [
              r
            ]
          }
        ],
        "border-w-s": [
          {
            "border-s": [
              r
            ]
          }
        ],
        "border-w-e": [
          {
            "border-e": [
              r
            ]
          }
        ],
        "border-w-t": [
          {
            "border-t": [
              r
            ]
          }
        ],
        "border-w-r": [
          {
            "border-r": [
              r
            ]
          }
        ],
        "border-w-b": [
          {
            "border-b": [
              r
            ]
          }
        ],
        "border-w-l": [
          {
            "border-l": [
              r
            ]
          }
        ],
        "border-opacity": [
          {
            "border-opacity": [
              p
            ]
          }
        ],
        "border-style": [
          {
            border: [
              ...R(),
              "hidden"
            ]
          }
        ],
        "divide-x": [
          {
            "divide-x": [
              r
            ]
          }
        ],
        "divide-x-reverse": [
          "divide-x-reverse"
        ],
        "divide-y": [
          {
            "divide-y": [
              r
            ]
          }
        ],
        "divide-y-reverse": [
          "divide-y-reverse"
        ],
        "divide-opacity": [
          {
            "divide-opacity": [
              p
            ]
          }
        ],
        "divide-style": [
          {
            divide: R()
          }
        ],
        "border-color": [
          {
            border: [
              a
            ]
          }
        ],
        "border-color-x": [
          {
            "border-x": [
              a
            ]
          }
        ],
        "border-color-y": [
          {
            "border-y": [
              a
            ]
          }
        ],
        "border-color-s": [
          {
            "border-s": [
              a
            ]
          }
        ],
        "border-color-e": [
          {
            "border-e": [
              a
            ]
          }
        ],
        "border-color-t": [
          {
            "border-t": [
              a
            ]
          }
        ],
        "border-color-r": [
          {
            "border-r": [
              a
            ]
          }
        ],
        "border-color-b": [
          {
            "border-b": [
              a
            ]
          }
        ],
        "border-color-l": [
          {
            "border-l": [
              a
            ]
          }
        ],
        "divide-color": [
          {
            divide: [
              a
            ]
          }
        ],
        "outline-style": [
          {
            outline: [
              "",
              ...R()
            ]
          }
        ],
        "outline-offset": [
          {
            "outline-offset": [
              dn,
              q
            ]
          }
        ],
        "outline-w": [
          {
            outline: [
              dn,
              Vn
            ]
          }
        ],
        "outline-color": [
          {
            outline: [
              t
            ]
          }
        ],
        "ring-w": [
          {
            ring: J()
          }
        ],
        "ring-w-inset": [
          "ring-inset"
        ],
        "ring-color": [
          {
            ring: [
              t
            ]
          }
        ],
        "ring-opacity": [
          {
            "ring-opacity": [
              p
            ]
          }
        ],
        "ring-offset-w": [
          {
            "ring-offset": [
              dn,
              Vn
            ]
          }
        ],
        "ring-offset-color": [
          {
            "ring-offset": [
              t
            ]
          }
        ],
        shadow: [
          {
            shadow: [
              "",
              "inner",
              "none",
              Bn,
              l2
            ]
          }
        ],
        "shadow-color": [
          {
            shadow: [
              Cs
            ]
          }
        ],
        opacity: [
          {
            opacity: [
              p
            ]
          }
        ],
        "mix-blend": [
          {
            "mix-blend": [
              ...O(),
              "plus-lighter",
              "plus-darker"
            ]
          }
        ],
        "bg-blend": [
          {
            "bg-blend": O()
          }
        ],
        filter: [
          {
            filter: [
              "",
              "none"
            ]
          }
        ],
        blur: [
          {
            blur: [
              n
            ]
          }
        ],
        brightness: [
          {
            brightness: [
              i
            ]
          }
        ],
        contrast: [
          {
            contrast: [
              l
            ]
          }
        ],
        "drop-shadow": [
          {
            "drop-shadow": [
              "",
              "none",
              Bn,
              q
            ]
          }
        ],
        grayscale: [
          {
            grayscale: [
              u
            ]
          }
        ],
        "hue-rotate": [
          {
            "hue-rotate": [
              c
            ]
          }
        ],
        invert: [
          {
            invert: [
              f
            ]
          }
        ],
        saturate: [
          {
            saturate: [
              g
            ]
          }
        ],
        sepia: [
          {
            sepia: [
              T
            ]
          }
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": [
              "",
              "none"
            ]
          }
        ],
        "backdrop-blur": [
          {
            "backdrop-blur": [
              n
            ]
          }
        ],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [
              i
            ]
          }
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [
              l
            ]
          }
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [
              u
            ]
          }
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [
              c
            ]
          }
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": [
              f
            ]
          }
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [
              p
            ]
          }
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [
              g
            ]
          }
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": [
              T
            ]
          }
        ],
        "border-collapse": [
          {
            border: [
              "collapse",
              "separate"
            ]
          }
        ],
        "border-spacing": [
          {
            "border-spacing": [
              o
            ]
          }
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": [
              o
            ]
          }
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": [
              o
            ]
          }
        ],
        "table-layout": [
          {
            table: [
              "auto",
              "fixed"
            ]
          }
        ],
        caption: [
          {
            caption: [
              "top",
              "bottom"
            ]
          }
        ],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              q
            ]
          }
        ],
        duration: [
          {
            duration: ft()
          }
        ],
        ease: [
          {
            ease: [
              "linear",
              "in",
              "out",
              "in-out",
              q
            ]
          }
        ],
        delay: [
          {
            delay: ft()
          }
        ],
        animate: [
          {
            animate: [
              "none",
              "spin",
              "ping",
              "pulse",
              "bounce",
              q
            ]
          }
        ],
        transform: [
          {
            transform: [
              "",
              "gpu",
              "none"
            ]
          }
        ],
        scale: [
          {
            scale: [
              S
            ]
          }
        ],
        "scale-x": [
          {
            "scale-x": [
              S
            ]
          }
        ],
        "scale-y": [
          {
            "scale-y": [
              S
            ]
          }
        ],
        rotate: [
          {
            rotate: [
              As,
              q
            ]
          }
        ],
        "translate-x": [
          {
            "translate-x": [
              C
            ]
          }
        ],
        "translate-y": [
          {
            "translate-y": [
              C
            ]
          }
        ],
        "skew-x": [
          {
            "skew-x": [
              A
            ]
          }
        ],
        "skew-y": [
          {
            "skew-y": [
              A
            ]
          }
        ],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              q
            ]
          }
        ],
        accent: [
          {
            accent: [
              "auto",
              t
            ]
          }
        ],
        appearance: [
          {
            appearance: [
              "none",
              "auto"
            ]
          }
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              q
            ]
          }
        ],
        "caret-color": [
          {
            caret: [
              t
            ]
          }
        ],
        "pointer-events": [
          {
            "pointer-events": [
              "none",
              "auto"
            ]
          }
        ],
        resize: [
          {
            resize: [
              "none",
              "y",
              "x",
              ""
            ]
          }
        ],
        "scroll-behavior": [
          {
            scroll: [
              "auto",
              "smooth"
            ]
          }
        ],
        "scroll-m": [
          {
            "scroll-m": V()
          }
        ],
        "scroll-mx": [
          {
            "scroll-mx": V()
          }
        ],
        "scroll-my": [
          {
            "scroll-my": V()
          }
        ],
        "scroll-ms": [
          {
            "scroll-ms": V()
          }
        ],
        "scroll-me": [
          {
            "scroll-me": V()
          }
        ],
        "scroll-mt": [
          {
            "scroll-mt": V()
          }
        ],
        "scroll-mr": [
          {
            "scroll-mr": V()
          }
        ],
        "scroll-mb": [
          {
            "scroll-mb": V()
          }
        ],
        "scroll-ml": [
          {
            "scroll-ml": V()
          }
        ],
        "scroll-p": [
          {
            "scroll-p": V()
          }
        ],
        "scroll-px": [
          {
            "scroll-px": V()
          }
        ],
        "scroll-py": [
          {
            "scroll-py": V()
          }
        ],
        "scroll-ps": [
          {
            "scroll-ps": V()
          }
        ],
        "scroll-pe": [
          {
            "scroll-pe": V()
          }
        ],
        "scroll-pt": [
          {
            "scroll-pt": V()
          }
        ],
        "scroll-pr": [
          {
            "scroll-pr": V()
          }
        ],
        "scroll-pb": [
          {
            "scroll-pb": V()
          }
        ],
        "scroll-pl": [
          {
            "scroll-pl": V()
          }
        ],
        "snap-align": [
          {
            snap: [
              "start",
              "end",
              "center",
              "align-none"
            ]
          }
        ],
        "snap-stop": [
          {
            snap: [
              "normal",
              "always"
            ]
          }
        ],
        "snap-type": [
          {
            snap: [
              "none",
              "x",
              "y",
              "both"
            ]
          }
        ],
        "snap-strictness": [
          {
            snap: [
              "mandatory",
              "proximity"
            ]
          }
        ],
        touch: [
          {
            touch: [
              "auto",
              "none",
              "manipulation"
            ]
          }
        ],
        "touch-x": [
          {
            "touch-pan": [
              "x",
              "left",
              "right"
            ]
          }
        ],
        "touch-y": [
          {
            "touch-pan": [
              "y",
              "up",
              "down"
            ]
          }
        ],
        "touch-pz": [
          "touch-pinch-zoom"
        ],
        select: [
          {
            select: [
              "none",
              "text",
              "all",
              "auto"
            ]
          }
        ],
        "will-change": [
          {
            "will-change": [
              "auto",
              "scroll",
              "contents",
              "transform",
              q
            ]
          }
        ],
        fill: [
          {
            fill: [
              t,
              "none"
            ]
          }
        ],
        "stroke-w": [
          {
            stroke: [
              dn,
              Vn,
              rc
            ]
          }
        ],
        stroke: [
          {
            stroke: [
              t,
              "none"
            ]
          }
        ],
        sr: [
          "sr-only",
          "not-sr-only"
        ],
        "forced-color-adjust": [
          {
            "forced-color-adjust": [
              "auto",
              "none"
            ]
          }
        ]
      },
      conflictingClassGroups: {
        overflow: [
          "overflow-x",
          "overflow-y"
        ],
        overscroll: [
          "overscroll-x",
          "overscroll-y"
        ],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left"
        ],
        "inset-x": [
          "right",
          "left"
        ],
        "inset-y": [
          "top",
          "bottom"
        ],
        flex: [
          "basis",
          "grow",
          "shrink"
        ],
        gap: [
          "gap-x",
          "gap-y"
        ],
        p: [
          "px",
          "py",
          "ps",
          "pe",
          "pt",
          "pr",
          "pb",
          "pl"
        ],
        px: [
          "pr",
          "pl"
        ],
        py: [
          "pt",
          "pb"
        ],
        m: [
          "mx",
          "my",
          "ms",
          "me",
          "mt",
          "mr",
          "mb",
          "ml"
        ],
        mx: [
          "mr",
          "ml"
        ],
        my: [
          "mt",
          "mb"
        ],
        size: [
          "w",
          "h"
        ],
        "font-size": [
          "leading"
        ],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction"
        ],
        "fvn-ordinal": [
          "fvn-normal"
        ],
        "fvn-slashed-zero": [
          "fvn-normal"
        ],
        "fvn-figure": [
          "fvn-normal"
        ],
        "fvn-spacing": [
          "fvn-normal"
        ],
        "fvn-fraction": [
          "fvn-normal"
        ],
        "line-clamp": [
          "display",
          "overflow"
        ],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-s": [
          "rounded-ss",
          "rounded-es"
        ],
        "rounded-e": [
          "rounded-se",
          "rounded-ee"
        ],
        "rounded-t": [
          "rounded-tl",
          "rounded-tr"
        ],
        "rounded-r": [
          "rounded-tr",
          "rounded-br"
        ],
        "rounded-b": [
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-l": [
          "rounded-tl",
          "rounded-bl"
        ],
        "border-spacing": [
          "border-spacing-x",
          "border-spacing-y"
        ],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l"
        ],
        "border-w-x": [
          "border-w-r",
          "border-w-l"
        ],
        "border-w-y": [
          "border-w-t",
          "border-w-b"
        ],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l"
        ],
        "border-color-x": [
          "border-color-r",
          "border-color-l"
        ],
        "border-color-y": [
          "border-color-t",
          "border-color-b"
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml"
        ],
        "scroll-mx": [
          "scroll-mr",
          "scroll-ml"
        ],
        "scroll-my": [
          "scroll-mt",
          "scroll-mb"
        ],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl"
        ],
        "scroll-px": [
          "scroll-pr",
          "scroll-pl"
        ],
        "scroll-py": [
          "scroll-pt",
          "scroll-pb"
        ],
        touch: [
          "touch-x",
          "touch-y",
          "touch-pz"
        ],
        "touch-x": [
          "touch"
        ],
        "touch-y": [
          "touch"
        ],
        "touch-pz": [
          "touch"
        ]
      },
      conflictingClassGroupModifiers: {
        "font-size": [
          "leading"
        ]
      }
    };
  }, h2 = QC(d2);
  function Si(...t) {
    return h2(C1(t));
  }
  const m2 = CC, _1 = x.forwardRef(({ className: t, ...e }, n) => w.jsx(b1, {
    ref: n,
    className: Si("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", t),
    ...e
  }));
  _1.displayName = b1.displayName;
  const p2 = M1("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }), L1 = x.forwardRef(({ className: t, variant: e, ...n }, i) => w.jsx(x1, {
    ref: i,
    className: Si(p2({
      variant: e
    }), t),
    ...n
  }));
  L1.displayName = x1.displayName;
  const g2 = x.forwardRef(({ className: t, ...e }, n) => w.jsx(T1, {
    ref: n,
    className: Si("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", t),
    ...e
  }));
  g2.displayName = T1.displayName;
  const V1 = x.forwardRef(({ className: t, ...e }, n) => w.jsx(E1, {
    ref: n,
    className: Si("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: w.jsx(LC, {
      className: "h-4 w-4"
    })
  }));
  V1.displayName = E1.displayName;
  const B1 = x.forwardRef(({ className: t, ...e }, n) => w.jsx(S1, {
    ref: n,
    className: Si("text-sm font-semibold", t),
    ...e
  }));
  B1.displayName = S1.displayName;
  const U1 = x.forwardRef(({ className: t, ...e }, n) => w.jsx(w1, {
    ref: n,
    className: Si("text-sm opacity-90", t),
    ...e
  }));
  U1.displayName = w1.displayName;
  function y2() {
    const { toasts: t } = Jb();
    return w.jsxs(m2, {
      children: [
        t.map(function({ id: e, title: n, description: i, action: a, ...s }) {
          return w.jsxs(L1, {
            ...s,
            children: [
              w.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && w.jsx(B1, {
                    children: n
                  }),
                  i && w.jsx(U1, {
                    children: i
                  })
                ]
              }),
              a,
              w.jsx(V1, {})
            ]
          }, e);
        }),
        w.jsx(_1, {})
      ]
    });
  }
  var eg = [
    "light",
    "dark"
  ], v2 = "(prefers-color-scheme: dark)", b2 = x.createContext(void 0), x2 = {
    setTheme: (t) => {
    },
    themes: []
  }, S2 = () => {
    var t;
    return (t = x.useContext(b2)) != null ? t : x2;
  };
  x.memo(({ forcedTheme: t, storageKey: e, attribute: n, enableSystem: i, enableColorScheme: a, defaultTheme: s, value: o, attrs: r, nonce: l }) => {
    let u = s === "system", c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${r.map((v) => `'${v}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = a ? eg.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", h = (v, y = false, b = true) => {
      let p = o ? o[v] : v, m = y ? v + "|| ''" : `'${p}'`, g = "";
      return a && b && !y && eg.includes(v) && (g += `d.style.colorScheme = '${v}';`), n === "class" ? y || p ? g += `c.add(${m})` : g += "null" : p && (g += `d[s](n,${m})`), g;
    }, d = t ? `!function(){${c}${h(t)}}()` : i ? `!function(){try{${c}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${u})){var t='${v2}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${h(o ? "x[e]" : "e", true)}}${u ? "" : "else{" + h(s, false, false) + "}"}${f}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${e}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${h(o ? "x[e]" : "e", true)}}else{${h(s, false, false)};}${f}}catch(t){}}();`;
    return x.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: {
        __html: d
      }
    });
  });
  var w2 = (t) => {
    switch (t) {
      case "success":
        return A2;
      case "info":
        return M2;
      case "warning":
        return C2;
      case "error":
        return R2;
      default:
        return null;
    }
  }, T2 = Array(12).fill(0), E2 = ({ visible: t, className: e }) => _.createElement("div", {
    className: [
      "sonner-loading-wrapper",
      e
    ].filter(Boolean).join(" "),
    "data-visible": t
  }, _.createElement("div", {
    className: "sonner-spinner"
  }, T2.map((n, i) => _.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${i}`
  })))), A2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })), C2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })), M2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })), R2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })), D2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), _.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })), O2 = () => {
    let [t, e] = _.useState(document.hidden);
    return _.useEffect(() => {
      let n = () => {
        e(document.hidden);
      };
      return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
    }, []), t;
  }, jf = 1, N2 = class {
    constructor() {
      this.subscribe = (t) => (this.subscribers.push(t), () => {
        let e = this.subscribers.indexOf(t);
        this.subscribers.splice(e, 1);
      }), this.publish = (t) => {
        this.subscribers.forEach((e) => e(t));
      }, this.addToast = (t) => {
        this.publish(t), this.toasts = [
          ...this.toasts,
          t
        ];
      }, this.create = (t) => {
        var e;
        let { message: n, ...i } = t, a = typeof (t == null ? void 0 : t.id) == "number" || ((e = t.id) == null ? void 0 : e.length) > 0 ? t.id : jf++, s = this.toasts.find((r) => r.id === a), o = t.dismissible === void 0 ? true : t.dismissible;
        return this.dismissedToasts.has(a) && this.dismissedToasts.delete(a), s ? this.toasts = this.toasts.map((r) => r.id === a ? (this.publish({
          ...r,
          ...t,
          id: a,
          title: n
        }), {
          ...r,
          ...t,
          id: a,
          dismissible: o,
          title: n
        }) : r) : this.addToast({
          title: n,
          ...i,
          dismissible: o,
          id: a
        }), a;
      }, this.dismiss = (t) => (this.dismissedToasts.add(t), t || this.toasts.forEach((e) => {
        this.subscribers.forEach((n) => n({
          id: e.id,
          dismiss: true
        }));
      }), this.subscribers.forEach((e) => e({
        id: t,
        dismiss: true
      })), t), this.message = (t, e) => this.create({
        ...e,
        message: t
      }), this.error = (t, e) => this.create({
        ...e,
        message: t,
        type: "error"
      }), this.success = (t, e) => this.create({
        ...e,
        type: "success",
        message: t
      }), this.info = (t, e) => this.create({
        ...e,
        type: "info",
        message: t
      }), this.warning = (t, e) => this.create({
        ...e,
        type: "warning",
        message: t
      }), this.loading = (t, e) => this.create({
        ...e,
        type: "loading",
        message: t
      }), this.promise = (t, e) => {
        if (!e) return;
        let n;
        e.loading !== void 0 && (n = this.create({
          ...e,
          promise: t,
          type: "loading",
          message: e.loading,
          description: typeof e.description != "function" ? e.description : void 0
        }));
        let i = t instanceof Promise ? t : t(), a = n !== void 0, s, o = i.then(async (l) => {
          if (s = [
            "resolve",
            l
          ], _.isValidElement(l)) a = false, this.create({
            id: n,
            type: "default",
            message: l
          });
          else if (z2(l) && !l.ok) {
            a = false;
            let u = typeof e.error == "function" ? await e.error(`HTTP error! status: ${l.status}`) : e.error, c = typeof e.description == "function" ? await e.description(`HTTP error! status: ${l.status}`) : e.description;
            this.create({
              id: n,
              type: "error",
              message: u,
              description: c
            });
          } else if (e.success !== void 0) {
            a = false;
            let u = typeof e.success == "function" ? await e.success(l) : e.success, c = typeof e.description == "function" ? await e.description(l) : e.description;
            this.create({
              id: n,
              type: "success",
              message: u,
              description: c
            });
          }
        }).catch(async (l) => {
          if (s = [
            "reject",
            l
          ], e.error !== void 0) {
            a = false;
            let u = typeof e.error == "function" ? await e.error(l) : e.error, c = typeof e.description == "function" ? await e.description(l) : e.description;
            this.create({
              id: n,
              type: "error",
              message: u,
              description: c
            });
          }
        }).finally(() => {
          var l;
          a && (this.dismiss(n), n = void 0), (l = e.finally) == null || l.call(e);
        }), r = () => new Promise((l, u) => o.then(() => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
        return typeof n != "string" && typeof n != "number" ? {
          unwrap: r
        } : Object.assign(n, {
          unwrap: r
        });
      }, this.custom = (t, e) => {
        let n = (e == null ? void 0 : e.id) || jf++;
        return this.create({
          jsx: t(n),
          id: n,
          ...e
        }), n;
      }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
    }
  }, ne = new N2(), j2 = (t, e) => {
    let n = (e == null ? void 0 : e.id) || jf++;
    return ne.addToast({
      title: t,
      ...e,
      id: n
    }), n;
  }, z2 = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number", _2 = j2, L2 = () => ne.toasts, V2 = () => ne.getActiveToasts();
  Object.assign(_2, {
    success: ne.success,
    info: ne.info,
    warning: ne.warning,
    error: ne.error,
    custom: ne.custom,
    message: ne.message,
    promise: ne.promise,
    dismiss: ne.dismiss,
    loading: ne.loading
  }, {
    getHistory: L2,
    getToasts: V2
  });
  function B2(t, { insertAt: e } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", e === "top" && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
  }
  B2(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
  function hr(t) {
    return t.label !== void 0;
  }
  var U2 = 3, P2 = "32px", H2 = "16px", ng = 4e3, k2 = 356, G2 = 14, Y2 = 20, q2 = 200;
  function Be(...t) {
    return t.filter(Boolean).join(" ");
  }
  function X2(t) {
    let [e, n] = t.split("-"), i = [];
    return e && i.push(e), n && i.push(n), i;
  }
  var F2 = (t) => {
    var e, n, i, a, s, o, r, l, u, c, f;
    let { invert: h, toast: d, unstyled: v, interacting: y, setHeights: b, visibleToasts: p, heights: m, index: g, toasts: S, expanded: T, removeToast: A, defaultRichColors: E, closeButton: C, style: j, cancelButtonStyle: z, actionButtonStyle: P, className: V = "", descriptionClassName: J = "", duration: L, position: X, gap: R, loadingIcon: O, expandByDefault: D, classNames: N, icons: U, closeButtonAriaLabel: ft = "Close toast", pauseWhenPageIsHidden: F } = t, [Z, $] = _.useState(null), [Tt, Nn] = _.useState(null), [at, ia] = _.useState(false), [Ti, aa] = _.useState(false), [Ei, gs] = _.useState(false), [Ai, yw] = _.useState(false), [vw, rm] = _.useState(false), [bw, yu] = _.useState(0), [xw, lm] = _.useState(0), ys = _.useRef(d.duration || L || ng), um = _.useRef(null), Ci = _.useRef(null), Sw = g === 0, ww = g + 1 <= p, be = d.type, sa = d.dismissible !== false, Tw = d.className || "", Ew = d.descriptionClassName || "", Qo = _.useMemo(() => m.findIndex((k) => k.toastId === d.id) || 0, [
      m,
      d.id
    ]), Aw = _.useMemo(() => {
      var k;
      return (k = d.closeButton) != null ? k : C;
    }, [
      d.closeButton,
      C
    ]), cm = _.useMemo(() => d.duration || L || ng, [
      d.duration,
      L
    ]), vu = _.useRef(0), oa = _.useRef(0), fm = _.useRef(0), ra = _.useRef(null), [Cw, Mw] = X.split("-"), dm = _.useMemo(() => m.reduce((k, st, yt) => yt >= Qo ? k : k + st.height, 0), [
      m,
      Qo
    ]), hm = O2(), Rw = d.invert || h, bu = be === "loading";
    oa.current = _.useMemo(() => Qo * R + dm, [
      Qo,
      dm
    ]), _.useEffect(() => {
      ys.current = cm;
    }, [
      cm
    ]), _.useEffect(() => {
      ia(true);
    }, []), _.useEffect(() => {
      let k = Ci.current;
      if (k) {
        let st = k.getBoundingClientRect().height;
        return lm(st), b((yt) => [
          {
            toastId: d.id,
            height: st,
            position: d.position
          },
          ...yt
        ]), () => b((yt) => yt.filter((ze) => ze.toastId !== d.id));
      }
    }, [
      b,
      d.id
    ]), _.useLayoutEffect(() => {
      if (!at) return;
      let k = Ci.current, st = k.style.height;
      k.style.height = "auto";
      let yt = k.getBoundingClientRect().height;
      k.style.height = st, lm(yt), b((ze) => ze.find((_e8) => _e8.toastId === d.id) ? ze.map((_e8) => _e8.toastId === d.id ? {
        ..._e8,
        height: yt
      } : _e8) : [
        {
          toastId: d.id,
          height: yt,
          position: d.position
        },
        ...ze
      ]);
    }, [
      at,
      d.title,
      d.description,
      b,
      d.id
    ]);
    let jn = _.useCallback(() => {
      aa(true), yu(oa.current), b((k) => k.filter((st) => st.toastId !== d.id)), setTimeout(() => {
        A(d);
      }, q2);
    }, [
      d,
      A,
      b,
      oa
    ]);
    _.useEffect(() => {
      if (d.promise && be === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
      let k;
      return T || y || F && hm ? (() => {
        if (fm.current < vu.current) {
          let st = (/* @__PURE__ */ new Date()).getTime() - vu.current;
          ys.current = ys.current - st;
        }
        fm.current = (/* @__PURE__ */ new Date()).getTime();
      })() : ys.current !== 1 / 0 && (vu.current = (/* @__PURE__ */ new Date()).getTime(), k = setTimeout(() => {
        var st;
        (st = d.onAutoClose) == null || st.call(d, d), jn();
      }, ys.current)), () => clearTimeout(k);
    }, [
      T,
      y,
      d,
      be,
      F,
      hm,
      jn
    ]), _.useEffect(() => {
      d.delete && jn();
    }, [
      jn,
      d.delete
    ]);
    function Dw() {
      var k, st, yt;
      return U != null && U.loading ? _.createElement("div", {
        className: Be(N == null ? void 0 : N.loader, (k = d == null ? void 0 : d.classNames) == null ? void 0 : k.loader, "sonner-loader"),
        "data-visible": be === "loading"
      }, U.loading) : O ? _.createElement("div", {
        className: Be(N == null ? void 0 : N.loader, (st = d == null ? void 0 : d.classNames) == null ? void 0 : st.loader, "sonner-loader"),
        "data-visible": be === "loading"
      }, O) : _.createElement(E2, {
        className: Be(N == null ? void 0 : N.loader, (yt = d == null ? void 0 : d.classNames) == null ? void 0 : yt.loader),
        visible: be === "loading"
      });
    }
    return _.createElement("li", {
      tabIndex: 0,
      ref: Ci,
      className: Be(V, Tw, N == null ? void 0 : N.toast, (e = d == null ? void 0 : d.classNames) == null ? void 0 : e.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[be], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[be]),
      "data-sonner-toast": "",
      "data-rich-colors": (i = d.richColors) != null ? i : E,
      "data-styled": !(d.jsx || d.unstyled || v),
      "data-mounted": at,
      "data-promise": !!d.promise,
      "data-swiped": vw,
      "data-removed": Ti,
      "data-visible": ww,
      "data-y-position": Cw,
      "data-x-position": Mw,
      "data-index": g,
      "data-front": Sw,
      "data-swiping": Ei,
      "data-dismissible": sa,
      "data-type": be,
      "data-invert": Rw,
      "data-swipe-out": Ai,
      "data-swipe-direction": Tt,
      "data-expanded": !!(T || D && at),
      style: {
        "--index": g,
        "--toasts-before": g,
        "--z-index": S.length - g,
        "--offset": `${Ti ? bw : oa.current}px`,
        "--initial-height": D ? "auto" : `${xw}px`,
        ...j,
        ...d.style
      },
      onDragEnd: () => {
        gs(false), $(null), ra.current = null;
      },
      onPointerDown: (k) => {
        bu || !sa || (um.current = /* @__PURE__ */ new Date(), yu(oa.current), k.target.setPointerCapture(k.pointerId), k.target.tagName !== "BUTTON" && (gs(true), ra.current = {
          x: k.clientX,
          y: k.clientY
        }));
      },
      onPointerUp: () => {
        var k, st, yt, ze;
        if (Ai || !sa) return;
        ra.current = null;
        let _e8 = Number(((k = Ci.current) == null ? void 0 : k.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), zn = Number(((st = Ci.current) == null ? void 0 : st.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Mi = (/* @__PURE__ */ new Date()).getTime() - ((yt = um.current) == null ? void 0 : yt.getTime()), Le = Z === "x" ? _e8 : zn, _n7 = Math.abs(Le) / Mi;
        if (Math.abs(Le) >= Y2 || _n7 > 0.11) {
          yu(oa.current), (ze = d.onDismiss) == null || ze.call(d, d), Nn(Z === "x" ? _e8 > 0 ? "right" : "left" : zn > 0 ? "down" : "up"), jn(), yw(true), rm(false);
          return;
        }
        gs(false), $(null);
      },
      onPointerMove: (k) => {
        var st, yt, ze, _e8;
        if (!ra.current || !sa || ((st = window.getSelection()) == null ? void 0 : st.toString().length) > 0) return;
        let zn = k.clientY - ra.current.y, Mi = k.clientX - ra.current.x, Le = (yt = t.swipeDirections) != null ? yt : X2(X);
        !Z && (Math.abs(Mi) > 1 || Math.abs(zn) > 1) && $(Math.abs(Mi) > Math.abs(zn) ? "x" : "y");
        let _n7 = {
          x: 0,
          y: 0
        };
        Z === "y" ? (Le.includes("top") || Le.includes("bottom")) && (Le.includes("top") && zn < 0 || Le.includes("bottom") && zn > 0) && (_n7.y = zn) : Z === "x" && (Le.includes("left") || Le.includes("right")) && (Le.includes("left") && Mi < 0 || Le.includes("right") && Mi > 0) && (_n7.x = Mi), (Math.abs(_n7.x) > 0 || Math.abs(_n7.y) > 0) && rm(true), (ze = Ci.current) == null || ze.style.setProperty("--swipe-amount-x", `${_n7.x}px`), (_e8 = Ci.current) == null || _e8.style.setProperty("--swipe-amount-y", `${_n7.y}px`);
      }
    }, Aw && !d.jsx ? _.createElement("button", {
      "aria-label": ft,
      "data-disabled": bu,
      "data-close-button": true,
      onClick: bu || !sa ? () => {
      } : () => {
        var k;
        jn(), (k = d.onDismiss) == null || k.call(d, d);
      },
      className: Be(N == null ? void 0 : N.closeButton, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.closeButton)
    }, (s = U == null ? void 0 : U.close) != null ? s : D2) : null, d.jsx || x.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : _.createElement(_.Fragment, null, be || d.icon || d.promise ? _.createElement("div", {
      "data-icon": "",
      className: Be(N == null ? void 0 : N.icon, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || Dw() : null, d.type !== "loading" ? d.icon || (U == null ? void 0 : U[be]) || w2(be) : null) : null, _.createElement("div", {
      "data-content": "",
      className: Be(N == null ? void 0 : N.content, (r = d == null ? void 0 : d.classNames) == null ? void 0 : r.content)
    }, _.createElement("div", {
      "data-title": "",
      className: Be(N == null ? void 0 : N.title, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.title)
    }, typeof d.title == "function" ? d.title() : d.title), d.description ? _.createElement("div", {
      "data-description": "",
      className: Be(J, Ew, N == null ? void 0 : N.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description)
    }, typeof d.description == "function" ? d.description() : d.description) : null), x.isValidElement(d.cancel) ? d.cancel : d.cancel && hr(d.cancel) ? _.createElement("button", {
      "data-button": true,
      "data-cancel": true,
      style: d.cancelButtonStyle || z,
      onClick: (k) => {
        var st, yt;
        hr(d.cancel) && sa && ((yt = (st = d.cancel).onClick) == null || yt.call(st, k), jn());
      },
      className: Be(N == null ? void 0 : N.cancelButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.cancelButton)
    }, d.cancel.label) : null, x.isValidElement(d.action) ? d.action : d.action && hr(d.action) ? _.createElement("button", {
      "data-button": true,
      "data-action": true,
      style: d.actionButtonStyle || P,
      onClick: (k) => {
        var st, yt;
        hr(d.action) && ((yt = (st = d.action).onClick) == null || yt.call(st, k), !k.defaultPrevented && jn());
      },
      className: Be(N == null ? void 0 : N.actionButton, (f = d == null ? void 0 : d.classNames) == null ? void 0 : f.actionButton)
    }, d.action.label) : null));
  };
  function ig() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
  }
  function K2(t, e) {
    let n = {};
    return [
      t,
      e
    ].forEach((i, a) => {
      let s = a === 1, o = s ? "--mobile-offset" : "--offset", r = s ? H2 : P2;
      function l(u) {
        [
          "top",
          "right",
          "bottom",
          "left"
        ].forEach((c) => {
          n[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof i == "number" || typeof i == "string" ? l(i) : typeof i == "object" ? [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((u) => {
        i[u] === void 0 ? n[`${o}-${u}`] = r : n[`${o}-${u}`] = typeof i[u] == "number" ? `${i[u]}px` : i[u];
      }) : l(r);
    }), n;
  }
  var Q2 = x.forwardRef(function(t, e) {
    let { invert: n, position: i = "bottom-right", hotkey: a = [
      "altKey",
      "KeyT"
    ], expand: s, closeButton: o, className: r, offset: l, mobileOffset: u, theme: c = "light", richColors: f, duration: h, style: d, visibleToasts: v = U2, toastOptions: y, dir: b = ig(), gap: p = G2, loadingIcon: m, icons: g, containerAriaLabel: S = "Notifications", pauseWhenPageIsHidden: T } = t, [A, E] = _.useState([]), C = _.useMemo(() => Array.from(new Set([
      i
    ].concat(A.filter((F) => F.position).map((F) => F.position)))), [
      A,
      i
    ]), [j, z] = _.useState([]), [P, V] = _.useState(false), [J, L] = _.useState(false), [X, R] = _.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), O = _.useRef(null), D = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), N = _.useRef(null), U = _.useRef(false), ft = _.useCallback((F) => {
      E((Z) => {
        var $;
        return ($ = Z.find((Tt) => Tt.id === F.id)) != null && $.delete || ne.dismiss(F.id), Z.filter(({ id: Tt }) => Tt !== F.id);
      });
    }, []);
    return _.useEffect(() => ne.subscribe((F) => {
      if (F.dismiss) {
        E((Z) => Z.map(($) => $.id === F.id ? {
          ...$,
          delete: true
        } : $));
        return;
      }
      setTimeout(() => {
        cv.flushSync(() => {
          E((Z) => {
            let $ = Z.findIndex((Tt) => Tt.id === F.id);
            return $ !== -1 ? [
              ...Z.slice(0, $),
              {
                ...Z[$],
                ...F
              },
              ...Z.slice($ + 1)
            ] : [
              F,
              ...Z
            ];
          });
        });
      });
    }), []), _.useEffect(() => {
      if (c !== "system") {
        R(c);
        return;
      }
      if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? R("dark") : R("light")), typeof window > "u") return;
      let F = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        F.addEventListener("change", ({ matches: Z }) => {
          R(Z ? "dark" : "light");
        });
      } catch {
        F.addListener(({ matches: $ }) => {
          try {
            R($ ? "dark" : "light");
          } catch (Tt) {
            console.error(Tt);
          }
        });
      }
    }, [
      c
    ]), _.useEffect(() => {
      A.length <= 1 && V(false);
    }, [
      A
    ]), _.useEffect(() => {
      let F = (Z) => {
        var $, Tt;
        a.every((Nn) => Z[Nn] || Z.code === Nn) && (V(true), ($ = O.current) == null || $.focus()), Z.code === "Escape" && (document.activeElement === O.current || (Tt = O.current) != null && Tt.contains(document.activeElement)) && V(false);
      };
      return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
    }, [
      a
    ]), _.useEffect(() => {
      if (O.current) return () => {
        N.current && (N.current.focus({
          preventScroll: true
        }), N.current = null, U.current = false);
      };
    }, [
      O.current
    ]), _.createElement("section", {
      ref: e,
      "aria-label": `${S} ${D}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: true
    }, C.map((F, Z) => {
      var $;
      let [Tt, Nn] = F.split("-");
      return A.length ? _.createElement("ol", {
        key: F,
        dir: b === "auto" ? ig() : b,
        tabIndex: -1,
        ref: O,
        className: r,
        "data-sonner-toaster": true,
        "data-theme": X,
        "data-y-position": Tt,
        "data-lifted": P && A.length > 1 && !s,
        "data-x-position": Nn,
        style: {
          "--front-toast-height": `${(($ = j[0]) == null ? void 0 : $.height) || 0}px`,
          "--width": `${k2}px`,
          "--gap": `${p}px`,
          ...d,
          ...K2(l, u)
        },
        onBlur: (at) => {
          U.current && !at.currentTarget.contains(at.relatedTarget) && (U.current = false, N.current && (N.current.focus({
            preventScroll: true
          }), N.current = null));
        },
        onFocus: (at) => {
          at.target instanceof HTMLElement && at.target.dataset.dismissible === "false" || U.current || (U.current = true, N.current = at.relatedTarget);
        },
        onMouseEnter: () => V(true),
        onMouseMove: () => V(true),
        onMouseLeave: () => {
          J || V(false);
        },
        onDragEnd: () => V(false),
        onPointerDown: (at) => {
          at.target instanceof HTMLElement && at.target.dataset.dismissible === "false" || L(true);
        },
        onPointerUp: () => L(false)
      }, A.filter((at) => !at.position && Z === 0 || at.position === F).map((at, ia) => {
        var Ti, aa;
        return _.createElement(F2, {
          key: at.id,
          icons: g,
          index: ia,
          toast: at,
          defaultRichColors: f,
          duration: (Ti = y == null ? void 0 : y.duration) != null ? Ti : h,
          className: y == null ? void 0 : y.className,
          descriptionClassName: y == null ? void 0 : y.descriptionClassName,
          invert: n,
          visibleToasts: v,
          closeButton: (aa = y == null ? void 0 : y.closeButton) != null ? aa : o,
          interacting: J,
          position: F,
          style: y == null ? void 0 : y.style,
          unstyled: y == null ? void 0 : y.unstyled,
          classNames: y == null ? void 0 : y.classNames,
          cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
          actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
          removeToast: ft,
          toasts: A.filter((Ei) => Ei.position == at.position),
          heights: j.filter((Ei) => Ei.position == at.position),
          setHeights: z,
          expandByDefault: s,
          gap: p,
          loadingIcon: m,
          expanded: P,
          pauseWhenPageIsHidden: T,
          swipeDirections: t.swipeDirections
        });
      })) : null;
    }));
  });
  const Z2 = ({ ...t }) => {
    const { theme: e = "system" } = S2();
    return w.jsx(Q2, {
      theme: e,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...t
    });
  }, $2 = [
    "top",
    "right",
    "bottom",
    "left"
  ], pi = Math.min, ue = Math.max, wl = Math.round, mr = Math.floor, We = (t) => ({
    x: t,
    y: t
  }), I2 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  }, J2 = {
    start: "end",
    end: "start"
  };
  function zf(t, e, n) {
    return ue(t, pi(e, n));
  }
  function Mn(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function Rn(t) {
    return t.split("-")[0];
  }
  function fs(t) {
    return t.split("-")[1];
  }
  function vh(t) {
    return t === "x" ? "y" : "x";
  }
  function bh(t) {
    return t === "y" ? "height" : "width";
  }
  const W2 = /* @__PURE__ */ new Set([
    "top",
    "bottom"
  ]);
  function Ie(t) {
    return W2.has(Rn(t)) ? "y" : "x";
  }
  function xh(t) {
    return vh(Ie(t));
  }
  function tM(t, e, n) {
    n === void 0 && (n = false);
    const i = fs(t), a = xh(t), s = bh(a);
    let o = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return e.reference[s] > e.floating[s] && (o = Tl(o)), [
      o,
      Tl(o)
    ];
  }
  function eM(t) {
    const e = Tl(t);
    return [
      _f(t),
      e,
      _f(e)
    ];
  }
  function _f(t) {
    return t.replace(/start|end/g, (e) => J2[e]);
  }
  const ag = [
    "left",
    "right"
  ], sg = [
    "right",
    "left"
  ], nM = [
    "top",
    "bottom"
  ], iM = [
    "bottom",
    "top"
  ];
  function aM(t, e, n) {
    switch (t) {
      case "top":
      case "bottom":
        return n ? e ? sg : ag : e ? ag : sg;
      case "left":
      case "right":
        return e ? nM : iM;
      default:
        return [];
    }
  }
  function sM(t, e, n, i) {
    const a = fs(t);
    let s = aM(Rn(t), n === "start", i);
    return a && (s = s.map((o) => o + "-" + a), e && (s = s.concat(s.map(_f)))), s;
  }
  function Tl(t) {
    return t.replace(/left|right|bottom|top/g, (e) => I2[e]);
  }
  function oM(t) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...t
    };
  }
  function P1(t) {
    return typeof t != "number" ? oM(t) : {
      top: t,
      right: t,
      bottom: t,
      left: t
    };
  }
  function El(t) {
    const { x: e, y: n, width: i, height: a } = t;
    return {
      width: i,
      height: a,
      top: n,
      left: e,
      right: e + i,
      bottom: n + a,
      x: e,
      y: n
    };
  }
  function og(t, e, n) {
    let { reference: i, floating: a } = t;
    const s = Ie(e), o = xh(e), r = bh(o), l = Rn(e), u = s === "y", c = i.x + i.width / 2 - a.width / 2, f = i.y + i.height / 2 - a.height / 2, h = i[r] / 2 - a[r] / 2;
    let d;
    switch (l) {
      case "top":
        d = {
          x: c,
          y: i.y - a.height
        };
        break;
      case "bottom":
        d = {
          x: c,
          y: i.y + i.height
        };
        break;
      case "right":
        d = {
          x: i.x + i.width,
          y: f
        };
        break;
      case "left":
        d = {
          x: i.x - a.width,
          y: f
        };
        break;
      default:
        d = {
          x: i.x,
          y: i.y
        };
    }
    switch (fs(e)) {
      case "start":
        d[o] -= h * (n && u ? -1 : 1);
        break;
      case "end":
        d[o] += h * (n && u ? -1 : 1);
        break;
    }
    return d;
  }
  const rM = async (t, e, n) => {
    const { placement: i = "bottom", strategy: a = "absolute", middleware: s = [], platform: o } = n, r = s.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(e));
    let u = await o.getElementRects({
      reference: t,
      floating: e,
      strategy: a
    }), { x: c, y: f } = og(u, i, l), h = i, d = {}, v = 0;
    for (let y = 0; y < r.length; y++) {
      const { name: b, fn: p } = r[y], { x: m, y: g, data: S, reset: T } = await p({
        x: c,
        y: f,
        initialPlacement: i,
        placement: h,
        strategy: a,
        middlewareData: d,
        rects: u,
        platform: o,
        elements: {
          reference: t,
          floating: e
        }
      });
      c = m ?? c, f = g ?? f, d = {
        ...d,
        [b]: {
          ...d[b],
          ...S
        }
      }, T && v <= 50 && (v++, typeof T == "object" && (T.placement && (h = T.placement), T.rects && (u = T.rects === true ? await o.getElementRects({
        reference: t,
        floating: e,
        strategy: a
      }) : T.rects), { x: c, y: f } = og(u, h, l)), y = -1);
    }
    return {
      x: c,
      y: f,
      placement: h,
      strategy: a,
      middlewareData: d
    };
  };
  async function go(t, e) {
    var n;
    e === void 0 && (e = {});
    const { x: i, y: a, platform: s, rects: o, elements: r, strategy: l } = t, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: f = "floating", altBoundary: h = false, padding: d = 0 } = Mn(e, t), v = P1(d), b = r[h ? f === "floating" ? "reference" : "floating" : f], p = El(await s.getClippingRect({
      element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(r.floating)),
      boundary: u,
      rootBoundary: c,
      strategy: l
    })), m = f === "floating" ? {
      x: i,
      y: a,
      width: o.floating.width,
      height: o.floating.height
    } : o.reference, g = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(r.floating)), S = await (s.isElement == null ? void 0 : s.isElement(g)) ? await (s.getScale == null ? void 0 : s.getScale(g)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, T = El(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: r,
      rect: m,
      offsetParent: g,
      strategy: l
    }) : m);
    return {
      top: (p.top - T.top + v.top) / S.y,
      bottom: (T.bottom - p.bottom + v.bottom) / S.y,
      left: (p.left - T.left + v.left) / S.x,
      right: (T.right - p.right + v.right) / S.x
    };
  }
  const lM = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const { x: n, y: i, placement: a, rects: s, platform: o, elements: r, middlewareData: l } = e, { element: u, padding: c = 0 } = Mn(t, e) || {};
      if (u == null) return {};
      const f = P1(c), h = {
        x: n,
        y: i
      }, d = xh(a), v = bh(d), y = await o.getDimensions(u), b = d === "y", p = b ? "top" : "left", m = b ? "bottom" : "right", g = b ? "clientHeight" : "clientWidth", S = s.reference[v] + s.reference[d] - h[d] - s.floating[v], T = h[d] - s.reference[d], A = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
      let E = A ? A[g] : 0;
      (!E || !await (o.isElement == null ? void 0 : o.isElement(A))) && (E = r.floating[g] || s.floating[v]);
      const C = S / 2 - T / 2, j = E / 2 - y[v] / 2 - 1, z = pi(f[p], j), P = pi(f[m], j), V = z, J = E - y[v] - P, L = E / 2 - y[v] / 2 + C, X = zf(V, L, J), R = !l.arrow && fs(a) != null && L !== X && s.reference[v] / 2 - (L < V ? z : P) - y[v] / 2 < 0, O = R ? L < V ? L - V : L - J : 0;
      return {
        [d]: h[d] + O,
        data: {
          [d]: X,
          centerOffset: L - X - O,
          ...R && {
            alignmentOffset: O
          }
        },
        reset: R
      };
    }
  }), uM = function(t) {
    return t === void 0 && (t = {}), {
      name: "flip",
      options: t,
      async fn(e) {
        var n, i;
        const { placement: a, middlewareData: s, rects: o, initialPlacement: r, platform: l, elements: u } = e, { mainAxis: c = true, crossAxis: f = true, fallbackPlacements: h, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: y = true, ...b } = Mn(t, e);
        if ((n = s.arrow) != null && n.alignmentOffset) return {};
        const p = Rn(a), m = Ie(r), g = Rn(r) === r, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), T = h || (g || !y ? [
          Tl(r)
        ] : eM(r)), A = v !== "none";
        !h && A && T.push(...sM(r, y, v, S));
        const E = [
          r,
          ...T
        ], C = await go(e, b), j = [];
        let z = ((i = s.flip) == null ? void 0 : i.overflows) || [];
        if (c && j.push(C[p]), f) {
          const L = tM(a, o, S);
          j.push(C[L[0]], C[L[1]]);
        }
        if (z = [
          ...z,
          {
            placement: a,
            overflows: j
          }
        ], !j.every((L) => L <= 0)) {
          var P, V;
          const L = (((P = s.flip) == null ? void 0 : P.index) || 0) + 1, X = E[L];
          if (X && (!(f === "alignment" ? m !== Ie(X) : false) || z.every((D) => D.overflows[0] > 0 && Ie(D.placement) === m))) return {
            data: {
              index: L,
              overflows: z
            },
            reset: {
              placement: X
            }
          };
          let R = (V = z.filter((O) => O.overflows[0] <= 0).sort((O, D) => O.overflows[1] - D.overflows[1])[0]) == null ? void 0 : V.placement;
          if (!R) switch (d) {
            case "bestFit": {
              var J;
              const O = (J = z.filter((D) => {
                if (A) {
                  const N = Ie(D.placement);
                  return N === m || N === "y";
                }
                return true;
              }).map((D) => [
                D.placement,
                D.overflows.filter((N) => N > 0).reduce((N, U) => N + U, 0)
              ]).sort((D, N) => D[1] - N[1])[0]) == null ? void 0 : J[0];
              O && (R = O);
              break;
            }
            case "initialPlacement":
              R = r;
              break;
          }
          if (a !== R) return {
            reset: {
              placement: R
            }
          };
        }
        return {};
      }
    };
  };
  function rg(t, e) {
    return {
      top: t.top - e.height,
      right: t.right - e.width,
      bottom: t.bottom - e.height,
      left: t.left - e.width
    };
  }
  function lg(t) {
    return $2.some((e) => t[e] >= 0);
  }
  const cM = function(t) {
    return t === void 0 && (t = {}), {
      name: "hide",
      options: t,
      async fn(e) {
        const { rects: n } = e, { strategy: i = "referenceHidden", ...a } = Mn(t, e);
        switch (i) {
          case "referenceHidden": {
            const s = await go(e, {
              ...a,
              elementContext: "reference"
            }), o = rg(s, n.reference);
            return {
              data: {
                referenceHiddenOffsets: o,
                referenceHidden: lg(o)
              }
            };
          }
          case "escaped": {
            const s = await go(e, {
              ...a,
              altBoundary: true
            }), o = rg(s, n.floating);
            return {
              data: {
                escapedOffsets: o,
                escaped: lg(o)
              }
            };
          }
          default:
            return {};
        }
      }
    };
  }, H1 = /* @__PURE__ */ new Set([
    "left",
    "top"
  ]);
  async function fM(t, e) {
    const { placement: n, platform: i, elements: a } = t, s = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), o = Rn(n), r = fs(n), l = Ie(n) === "y", u = H1.has(o) ? -1 : 1, c = s && l ? -1 : 1, f = Mn(e, t);
    let { mainAxis: h, crossAxis: d, alignmentAxis: v } = typeof f == "number" ? {
      mainAxis: f,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: f.mainAxis || 0,
      crossAxis: f.crossAxis || 0,
      alignmentAxis: f.alignmentAxis
    };
    return r && typeof v == "number" && (d = r === "end" ? v * -1 : v), l ? {
      x: d * c,
      y: h * u
    } : {
      x: h * u,
      y: d * c
    };
  }
  const dM = function(t) {
    return t === void 0 && (t = 0), {
      name: "offset",
      options: t,
      async fn(e) {
        var n, i;
        const { x: a, y: s, placement: o, middlewareData: r } = e, l = await fM(e, t);
        return o === ((n = r.offset) == null ? void 0 : n.placement) && (i = r.arrow) != null && i.alignmentOffset ? {} : {
          x: a + l.x,
          y: s + l.y,
          data: {
            ...l,
            placement: o
          }
        };
      }
    };
  }, hM = function(t) {
    return t === void 0 && (t = {}), {
      name: "shift",
      options: t,
      async fn(e) {
        const { x: n, y: i, placement: a } = e, { mainAxis: s = true, crossAxis: o = false, limiter: r = {
          fn: (b) => {
            let { x: p, y: m } = b;
            return {
              x: p,
              y: m
            };
          }
        }, ...l } = Mn(t, e), u = {
          x: n,
          y: i
        }, c = await go(e, l), f = Ie(Rn(a)), h = vh(f);
        let d = u[h], v = u[f];
        if (s) {
          const b = h === "y" ? "top" : "left", p = h === "y" ? "bottom" : "right", m = d + c[b], g = d - c[p];
          d = zf(m, d, g);
        }
        if (o) {
          const b = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", m = v + c[b], g = v - c[p];
          v = zf(m, v, g);
        }
        const y = r.fn({
          ...e,
          [h]: d,
          [f]: v
        });
        return {
          ...y,
          data: {
            x: y.x - n,
            y: y.y - i,
            enabled: {
              [h]: s,
              [f]: o
            }
          }
        };
      }
    };
  }, mM = function(t) {
    return t === void 0 && (t = {}), {
      options: t,
      fn(e) {
        const { x: n, y: i, placement: a, rects: s, middlewareData: o } = e, { offset: r = 0, mainAxis: l = true, crossAxis: u = true } = Mn(t, e), c = {
          x: n,
          y: i
        }, f = Ie(a), h = vh(f);
        let d = c[h], v = c[f];
        const y = Mn(r, e), b = typeof y == "number" ? {
          mainAxis: y,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...y
        };
        if (l) {
          const g = h === "y" ? "height" : "width", S = s.reference[h] - s.floating[g] + b.mainAxis, T = s.reference[h] + s.reference[g] - b.mainAxis;
          d < S ? d = S : d > T && (d = T);
        }
        if (u) {
          var p, m;
          const g = h === "y" ? "width" : "height", S = H1.has(Rn(a)), T = s.reference[f] - s.floating[g] + (S && ((p = o.offset) == null ? void 0 : p[f]) || 0) + (S ? 0 : b.crossAxis), A = s.reference[f] + s.reference[g] + (S ? 0 : ((m = o.offset) == null ? void 0 : m[f]) || 0) - (S ? b.crossAxis : 0);
          v < T ? v = T : v > A && (v = A);
        }
        return {
          [h]: d,
          [f]: v
        };
      }
    };
  }, pM = function(t) {
    return t === void 0 && (t = {}), {
      name: "size",
      options: t,
      async fn(e) {
        var n, i;
        const { placement: a, rects: s, platform: o, elements: r } = e, { apply: l = () => {
        }, ...u } = Mn(t, e), c = await go(e, u), f = Rn(a), h = fs(a), d = Ie(a) === "y", { width: v, height: y } = s.floating;
        let b, p;
        f === "top" || f === "bottom" ? (b = f, p = h === (await (o.isRTL == null ? void 0 : o.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (p = f, b = h === "end" ? "top" : "bottom");
        const m = y - c.top - c.bottom, g = v - c.left - c.right, S = pi(y - c[b], m), T = pi(v - c[p], g), A = !e.middlewareData.shift;
        let E = S, C = T;
        if ((n = e.middlewareData.shift) != null && n.enabled.x && (C = g), (i = e.middlewareData.shift) != null && i.enabled.y && (E = m), A && !h) {
          const z = ue(c.left, 0), P = ue(c.right, 0), V = ue(c.top, 0), J = ue(c.bottom, 0);
          d ? C = v - 2 * (z !== 0 || P !== 0 ? z + P : ue(c.left, c.right)) : E = y - 2 * (V !== 0 || J !== 0 ? V + J : ue(c.top, c.bottom));
        }
        await l({
          ...e,
          availableWidth: C,
          availableHeight: E
        });
        const j = await o.getDimensions(r.floating);
        return v !== j.width || y !== j.height ? {
          reset: {
            rects: true
          }
        } : {};
      }
    };
  };
  function su() {
    return typeof window < "u";
  }
  function ds(t) {
    return k1(t) ? (t.nodeName || "").toLowerCase() : "#document";
  }
  function ge(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
  }
  function rn(t) {
    var e;
    return (e = (k1(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
  }
  function k1(t) {
    return su() ? t instanceof Node || t instanceof ge(t).Node : false;
  }
  function Ye(t) {
    return su() ? t instanceof Element || t instanceof ge(t).Element : false;
  }
  function en(t) {
    return su() ? t instanceof HTMLElement || t instanceof ge(t).HTMLElement : false;
  }
  function ug(t) {
    return !su() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof ge(t).ShadowRoot;
  }
  const gM = /* @__PURE__ */ new Set([
    "inline",
    "contents"
  ]);
  function ko(t) {
    const { overflow: e, overflowX: n, overflowY: i, display: a } = qe(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !gM.has(a);
  }
  const yM = /* @__PURE__ */ new Set([
    "table",
    "td",
    "th"
  ]);
  function vM(t) {
    return yM.has(ds(t));
  }
  const bM = [
    ":popover-open",
    ":modal"
  ];
  function ou(t) {
    return bM.some((e) => {
      try {
        return t.matches(e);
      } catch {
        return false;
      }
    });
  }
  const xM = [
    "transform",
    "translate",
    "scale",
    "rotate",
    "perspective"
  ], SM = [
    "transform",
    "translate",
    "scale",
    "rotate",
    "perspective",
    "filter"
  ], wM = [
    "paint",
    "layout",
    "strict",
    "content"
  ];
  function Sh(t) {
    const e = wh(), n = Ye(t) ? qe(t) : t;
    return xM.some((i) => n[i] ? n[i] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !e && (n.filter ? n.filter !== "none" : false) || SM.some((i) => (n.willChange || "").includes(i)) || wM.some((i) => (n.contain || "").includes(i));
  }
  function TM(t) {
    let e = gi(t);
    for (; en(e) && !Ja(e); ) {
      if (Sh(e)) return e;
      if (ou(e)) return null;
      e = gi(e);
    }
    return null;
  }
  function wh() {
    return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
  }
  const EM = /* @__PURE__ */ new Set([
    "html",
    "body",
    "#document"
  ]);
  function Ja(t) {
    return EM.has(ds(t));
  }
  function qe(t) {
    return ge(t).getComputedStyle(t);
  }
  function ru(t) {
    return Ye(t) ? {
      scrollLeft: t.scrollLeft,
      scrollTop: t.scrollTop
    } : {
      scrollLeft: t.scrollX,
      scrollTop: t.scrollY
    };
  }
  function gi(t) {
    if (ds(t) === "html") return t;
    const e = t.assignedSlot || t.parentNode || ug(t) && t.host || rn(t);
    return ug(e) ? e.host : e;
  }
  function G1(t) {
    const e = gi(t);
    return Ja(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : en(e) && ko(e) ? e : G1(e);
  }
  function yo(t, e, n) {
    var i;
    e === void 0 && (e = []), n === void 0 && (n = true);
    const a = G1(t), s = a === ((i = t.ownerDocument) == null ? void 0 : i.body), o = ge(a);
    if (s) {
      const r = Lf(o);
      return e.concat(o, o.visualViewport || [], ko(a) ? a : [], r && n ? yo(r) : []);
    }
    return e.concat(a, yo(a, [], n));
  }
  function Lf(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
  }
  function Y1(t) {
    const e = qe(t);
    let n = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
    const a = en(t), s = a ? t.offsetWidth : n, o = a ? t.offsetHeight : i, r = wl(n) !== s || wl(i) !== o;
    return r && (n = s, i = o), {
      width: n,
      height: i,
      $: r
    };
  }
  function Th(t) {
    return Ye(t) ? t : t.contextElement;
  }
  function Pa(t) {
    const e = Th(t);
    if (!en(e)) return We(1);
    const n = e.getBoundingClientRect(), { width: i, height: a, $: s } = Y1(e);
    let o = (s ? wl(n.width) : n.width) / i, r = (s ? wl(n.height) : n.height) / a;
    return (!o || !Number.isFinite(o)) && (o = 1), (!r || !Number.isFinite(r)) && (r = 1), {
      x: o,
      y: r
    };
  }
  const AM = We(0);
  function q1(t) {
    const e = ge(t);
    return !wh() || !e.visualViewport ? AM : {
      x: e.visualViewport.offsetLeft,
      y: e.visualViewport.offsetTop
    };
  }
  function CM(t, e, n) {
    return e === void 0 && (e = false), !n || e && n !== ge(t) ? false : e;
  }
  function Qi(t, e, n, i) {
    e === void 0 && (e = false), n === void 0 && (n = false);
    const a = t.getBoundingClientRect(), s = Th(t);
    let o = We(1);
    e && (i ? Ye(i) && (o = Pa(i)) : o = Pa(t));
    const r = CM(s, n, i) ? q1(s) : We(0);
    let l = (a.left + r.x) / o.x, u = (a.top + r.y) / o.y, c = a.width / o.x, f = a.height / o.y;
    if (s) {
      const h = ge(s), d = i && Ye(i) ? ge(i) : i;
      let v = h, y = Lf(v);
      for (; y && i && d !== v; ) {
        const b = Pa(y), p = y.getBoundingClientRect(), m = qe(y), g = p.left + (y.clientLeft + parseFloat(m.paddingLeft)) * b.x, S = p.top + (y.clientTop + parseFloat(m.paddingTop)) * b.y;
        l *= b.x, u *= b.y, c *= b.x, f *= b.y, l += g, u += S, v = ge(y), y = Lf(v);
      }
    }
    return El({
      width: c,
      height: f,
      x: l,
      y: u
    });
  }
  function Eh(t, e) {
    const n = ru(t).scrollLeft;
    return e ? e.left + n : Qi(rn(t)).left + n;
  }
  function X1(t, e, n) {
    n === void 0 && (n = false);
    const i = t.getBoundingClientRect(), a = i.left + e.scrollLeft - (n ? 0 : Eh(t, i)), s = i.top + e.scrollTop;
    return {
      x: a,
      y: s
    };
  }
  function MM(t) {
    let { elements: e, rect: n, offsetParent: i, strategy: a } = t;
    const s = a === "fixed", o = rn(i), r = e ? ou(e.floating) : false;
    if (i === o || r && s) return n;
    let l = {
      scrollLeft: 0,
      scrollTop: 0
    }, u = We(1);
    const c = We(0), f = en(i);
    if ((f || !f && !s) && ((ds(i) !== "body" || ko(o)) && (l = ru(i)), en(i))) {
      const d = Qi(i);
      u = Pa(i), c.x = d.x + i.clientLeft, c.y = d.y + i.clientTop;
    }
    const h = o && !f && !s ? X1(o, l, true) : We(0);
    return {
      width: n.width * u.x,
      height: n.height * u.y,
      x: n.x * u.x - l.scrollLeft * u.x + c.x + h.x,
      y: n.y * u.y - l.scrollTop * u.y + c.y + h.y
    };
  }
  function RM(t) {
    return Array.from(t.getClientRects());
  }
  function DM(t) {
    const e = rn(t), n = ru(t), i = t.ownerDocument.body, a = ue(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth), s = ue(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
    let o = -n.scrollLeft + Eh(t);
    const r = -n.scrollTop;
    return qe(i).direction === "rtl" && (o += ue(e.clientWidth, i.clientWidth) - a), {
      width: a,
      height: s,
      x: o,
      y: r
    };
  }
  function OM(t, e) {
    const n = ge(t), i = rn(t), a = n.visualViewport;
    let s = i.clientWidth, o = i.clientHeight, r = 0, l = 0;
    if (a) {
      s = a.width, o = a.height;
      const u = wh();
      (!u || u && e === "fixed") && (r = a.offsetLeft, l = a.offsetTop);
    }
    return {
      width: s,
      height: o,
      x: r,
      y: l
    };
  }
  const NM = /* @__PURE__ */ new Set([
    "absolute",
    "fixed"
  ]);
  function jM(t, e) {
    const n = Qi(t, true, e === "fixed"), i = n.top + t.clientTop, a = n.left + t.clientLeft, s = en(t) ? Pa(t) : We(1), o = t.clientWidth * s.x, r = t.clientHeight * s.y, l = a * s.x, u = i * s.y;
    return {
      width: o,
      height: r,
      x: l,
      y: u
    };
  }
  function cg(t, e, n) {
    let i;
    if (e === "viewport") i = OM(t, n);
    else if (e === "document") i = DM(rn(t));
    else if (Ye(e)) i = jM(e, n);
    else {
      const a = q1(t);
      i = {
        x: e.x - a.x,
        y: e.y - a.y,
        width: e.width,
        height: e.height
      };
    }
    return El(i);
  }
  function F1(t, e) {
    const n = gi(t);
    return n === e || !Ye(n) || Ja(n) ? false : qe(n).position === "fixed" || F1(n, e);
  }
  function zM(t, e) {
    const n = e.get(t);
    if (n) return n;
    let i = yo(t, [], false).filter((r) => Ye(r) && ds(r) !== "body"), a = null;
    const s = qe(t).position === "fixed";
    let o = s ? gi(t) : t;
    for (; Ye(o) && !Ja(o); ) {
      const r = qe(o), l = Sh(o);
      !l && r.position === "fixed" && (a = null), (s ? !l && !a : !l && r.position === "static" && !!a && NM.has(a.position) || ko(o) && !l && F1(t, o)) ? i = i.filter((c) => c !== o) : a = r, o = gi(o);
    }
    return e.set(t, i), i;
  }
  function _M(t) {
    let { element: e, boundary: n, rootBoundary: i, strategy: a } = t;
    const o = [
      ...n === "clippingAncestors" ? ou(e) ? [] : zM(e, this._c) : [].concat(n),
      i
    ], r = o[0], l = o.reduce((u, c) => {
      const f = cg(e, c, a);
      return u.top = ue(f.top, u.top), u.right = pi(f.right, u.right), u.bottom = pi(f.bottom, u.bottom), u.left = ue(f.left, u.left), u;
    }, cg(e, r, a));
    return {
      width: l.right - l.left,
      height: l.bottom - l.top,
      x: l.left,
      y: l.top
    };
  }
  function LM(t) {
    const { width: e, height: n } = Y1(t);
    return {
      width: e,
      height: n
    };
  }
  function VM(t, e, n) {
    const i = en(e), a = rn(e), s = n === "fixed", o = Qi(t, true, s, e);
    let r = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const l = We(0);
    function u() {
      l.x = Eh(a);
    }
    if (i || !i && !s) if ((ds(e) !== "body" || ko(a)) && (r = ru(e)), i) {
      const d = Qi(e, true, s, e);
      l.x = d.x + e.clientLeft, l.y = d.y + e.clientTop;
    } else a && u();
    s && !i && a && u();
    const c = a && !i && !s ? X1(a, r) : We(0), f = o.left + r.scrollLeft - l.x - c.x, h = o.top + r.scrollTop - l.y - c.y;
    return {
      x: f,
      y: h,
      width: o.width,
      height: o.height
    };
  }
  function lc(t) {
    return qe(t).position === "static";
  }
  function fg(t, e) {
    if (!en(t) || qe(t).position === "fixed") return null;
    if (e) return e(t);
    let n = t.offsetParent;
    return rn(t) === n && (n = n.ownerDocument.body), n;
  }
  function K1(t, e) {
    const n = ge(t);
    if (ou(t)) return n;
    if (!en(t)) {
      let a = gi(t);
      for (; a && !Ja(a); ) {
        if (Ye(a) && !lc(a)) return a;
        a = gi(a);
      }
      return n;
    }
    let i = fg(t, e);
    for (; i && vM(i) && lc(i); ) i = fg(i, e);
    return i && Ja(i) && lc(i) && !Sh(i) ? n : i || TM(t) || n;
  }
  const BM = async function(t) {
    const e = this.getOffsetParent || K1, n = this.getDimensions, i = await n(t.floating);
    return {
      reference: VM(t.reference, await e(t.floating), t.strategy),
      floating: {
        x: 0,
        y: 0,
        width: i.width,
        height: i.height
      }
    };
  };
  function UM(t) {
    return qe(t).direction === "rtl";
  }
  const PM = {
    convertOffsetParentRelativeRectToViewportRelativeRect: MM,
    getDocumentElement: rn,
    getClippingRect: _M,
    getOffsetParent: K1,
    getElementRects: BM,
    getClientRects: RM,
    getDimensions: LM,
    getScale: Pa,
    isElement: Ye,
    isRTL: UM
  };
  function Q1(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
  }
  function HM(t, e) {
    let n = null, i;
    const a = rn(t);
    function s() {
      var r;
      clearTimeout(i), (r = n) == null || r.disconnect(), n = null;
    }
    function o(r, l) {
      r === void 0 && (r = false), l === void 0 && (l = 1), s();
      const u = t.getBoundingClientRect(), { left: c, top: f, width: h, height: d } = u;
      if (r || e(), !h || !d) return;
      const v = mr(f), y = mr(a.clientWidth - (c + h)), b = mr(a.clientHeight - (f + d)), p = mr(c), g = {
        rootMargin: -v + "px " + -y + "px " + -b + "px " + -p + "px",
        threshold: ue(0, pi(1, l)) || 1
      };
      let S = true;
      function T(A) {
        const E = A[0].intersectionRatio;
        if (E !== l) {
          if (!S) return o();
          E ? o(false, E) : i = setTimeout(() => {
            o(false, 1e-7);
          }, 1e3);
        }
        E === 1 && !Q1(u, t.getBoundingClientRect()) && o(), S = false;
      }
      try {
        n = new IntersectionObserver(T, {
          ...g,
          root: a.ownerDocument
        });
      } catch {
        n = new IntersectionObserver(T, g);
      }
      n.observe(t);
    }
    return o(true), s;
  }
  function kM(t, e, n, i) {
    i === void 0 && (i = {});
    const { ancestorScroll: a = true, ancestorResize: s = true, elementResize: o = typeof ResizeObserver == "function", layoutShift: r = typeof IntersectionObserver == "function", animationFrame: l = false } = i, u = Th(t), c = a || s ? [
      ...u ? yo(u) : [],
      ...yo(e)
    ] : [];
    c.forEach((p) => {
      a && p.addEventListener("scroll", n, {
        passive: true
      }), s && p.addEventListener("resize", n);
    });
    const f = u && r ? HM(u, n) : null;
    let h = -1, d = null;
    o && (d = new ResizeObserver((p) => {
      let [m] = p;
      m && m.target === u && d && (d.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
        var g;
        (g = d) == null || g.observe(e);
      })), n();
    }), u && !l && d.observe(u), d.observe(e));
    let v, y = l ? Qi(t) : null;
    l && b();
    function b() {
      const p = Qi(t);
      y && !Q1(y, p) && n(), y = p, v = requestAnimationFrame(b);
    }
    return n(), () => {
      var p;
      c.forEach((m) => {
        a && m.removeEventListener("scroll", n), s && m.removeEventListener("resize", n);
      }), f == null ? void 0 : f(), (p = d) == null || p.disconnect(), d = null, l && cancelAnimationFrame(v);
    };
  }
  const GM = dM, YM = hM, qM = uM, XM = pM, FM = cM, dg = lM, KM = mM, QM = (t, e, n) => {
    const i = /* @__PURE__ */ new Map(), a = {
      platform: PM,
      ...n
    }, s = {
      ...a.platform,
      _c: i
    };
    return rM(t, e, {
      ...a,
      platform: s
    });
  };
  var ZM = typeof document < "u", $M = function() {
  }, Ur = ZM ? x.useLayoutEffect : $M;
  function Al(t, e) {
    if (t === e) return true;
    if (typeof t != typeof e) return false;
    if (typeof t == "function" && t.toString() === e.toString()) return true;
    let n, i, a;
    if (t && e && typeof t == "object") {
      if (Array.isArray(t)) {
        if (n = t.length, n !== e.length) return false;
        for (i = n; i-- !== 0; ) if (!Al(t[i], e[i])) return false;
        return true;
      }
      if (a = Object.keys(t), n = a.length, n !== Object.keys(e).length) return false;
      for (i = n; i-- !== 0; ) if (!{}.hasOwnProperty.call(e, a[i])) return false;
      for (i = n; i-- !== 0; ) {
        const s = a[i];
        if (!(s === "_owner" && t.$$typeof) && !Al(t[s], e[s])) return false;
      }
      return true;
    }
    return t !== t && e !== e;
  }
  function Z1(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function hg(t, e) {
    const n = Z1(t);
    return Math.round(e * n) / n;
  }
  function uc(t) {
    const e = x.useRef(t);
    return Ur(() => {
      e.current = t;
    }), e;
  }
  function IM(t) {
    t === void 0 && (t = {});
    const { placement: e = "bottom", strategy: n = "absolute", middleware: i = [], platform: a, elements: { reference: s, floating: o } = {}, transform: r = true, whileElementsMounted: l, open: u } = t, [c, f] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: e,
      middlewareData: {},
      isPositioned: false
    }), [h, d] = x.useState(i);
    Al(h, i) || d(i);
    const [v, y] = x.useState(null), [b, p] = x.useState(null), m = x.useCallback((D) => {
      D !== A.current && (A.current = D, y(D));
    }, []), g = x.useCallback((D) => {
      D !== E.current && (E.current = D, p(D));
    }, []), S = s || v, T = o || b, A = x.useRef(null), E = x.useRef(null), C = x.useRef(c), j = l != null, z = uc(l), P = uc(a), V = uc(u), J = x.useCallback(() => {
      if (!A.current || !E.current) return;
      const D = {
        placement: e,
        strategy: n,
        middleware: h
      };
      P.current && (D.platform = P.current), QM(A.current, E.current, D).then((N) => {
        const U = {
          ...N,
          isPositioned: V.current !== false
        };
        L.current && !Al(C.current, U) && (C.current = U, Mo.flushSync(() => {
          f(U);
        }));
      });
    }, [
      h,
      e,
      n,
      P,
      V
    ]);
    Ur(() => {
      u === false && C.current.isPositioned && (C.current.isPositioned = false, f((D) => ({
        ...D,
        isPositioned: false
      })));
    }, [
      u
    ]);
    const L = x.useRef(false);
    Ur(() => (L.current = true, () => {
      L.current = false;
    }), []), Ur(() => {
      if (S && (A.current = S), T && (E.current = T), S && T) {
        if (z.current) return z.current(S, T, J);
        J();
      }
    }, [
      S,
      T,
      J,
      z,
      j
    ]);
    const X = x.useMemo(() => ({
      reference: A,
      floating: E,
      setReference: m,
      setFloating: g
    }), [
      m,
      g
    ]), R = x.useMemo(() => ({
      reference: S,
      floating: T
    }), [
      S,
      T
    ]), O = x.useMemo(() => {
      const D = {
        position: n,
        left: 0,
        top: 0
      };
      if (!R.floating) return D;
      const N = hg(R.floating, c.x), U = hg(R.floating, c.y);
      return r ? {
        ...D,
        transform: "translate(" + N + "px, " + U + "px)",
        ...Z1(R.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: n,
        left: N,
        top: U
      };
    }, [
      n,
      r,
      R.floating,
      c.x,
      c.y
    ]);
    return x.useMemo(() => ({
      ...c,
      update: J,
      refs: X,
      elements: R,
      floatingStyles: O
    }), [
      c,
      J,
      X,
      R,
      O
    ]);
  }
  const JM = (t) => {
    function e(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(n) {
        const { element: i, padding: a } = typeof t == "function" ? t(n) : t;
        return i && e(i) ? i.current != null ? dg({
          element: i.current,
          padding: a
        }).fn(n) : {} : i ? dg({
          element: i,
          padding: a
        }).fn(n) : {};
      }
    };
  }, WM = (t, e) => ({
    ...GM(t),
    options: [
      t,
      e
    ]
  }), tR = (t, e) => ({
    ...YM(t),
    options: [
      t,
      e
    ]
  }), eR = (t, e) => ({
    ...KM(t),
    options: [
      t,
      e
    ]
  }), nR = (t, e) => ({
    ...qM(t),
    options: [
      t,
      e
    ]
  }), iR = (t, e) => ({
    ...XM(t),
    options: [
      t,
      e
    ]
  }), aR = (t, e) => ({
    ...FM(t),
    options: [
      t,
      e
    ]
  }), sR = (t, e) => ({
    ...JM(t),
    options: [
      t,
      e
    ]
  });
  var oR = "Arrow", $1 = x.forwardRef((t, e) => {
    const { children: n, width: i = 10, height: a = 5, ...s } = t;
    return w.jsx(oe.svg, {
      ...s,
      ref: e,
      width: i,
      height: a,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? n : w.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    });
  });
  $1.displayName = oR;
  var rR = $1;
  function lR(t) {
    const [e, n] = x.useState(void 0);
    return mi(() => {
      if (t) {
        n({
          width: t.offsetWidth,
          height: t.offsetHeight
        });
        const i = new ResizeObserver((a) => {
          if (!Array.isArray(a) || !a.length) return;
          const s = a[0];
          let o, r;
          if ("borderBoxSize" in s) {
            const l = s.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
            o = u.inlineSize, r = u.blockSize;
          } else o = t.offsetWidth, r = t.offsetHeight;
          n({
            width: o,
            height: r
          });
        });
        return i.observe(t, {
          box: "border-box"
        }), () => i.unobserve(t);
      } else n(void 0);
    }, [
      t
    ]), e;
  }
  var I1 = "Popper", [J1, W1] = nu(I1), [cj, tx] = J1(I1), ex = "PopperAnchor", nx = x.forwardRef((t, e) => {
    const { __scopePopper: n, virtualRef: i, ...a } = t, s = tx(ex, n), o = x.useRef(null), r = Ge(e, o);
    return x.useEffect(() => {
      s.onAnchorChange((i == null ? void 0 : i.current) || o.current);
    }), i ? null : w.jsx(oe.div, {
      ...a,
      ref: r
    });
  });
  nx.displayName = ex;
  var Ah = "PopperContent", [uR, cR] = J1(Ah), ix = x.forwardRef((t, e) => {
    var _a5, _b3, _c3, _d3, _e8, _f3;
    const { __scopePopper: n, side: i = "bottom", sideOffset: a = 0, align: s = "center", alignOffset: o = 0, arrowPadding: r = 0, avoidCollisions: l = true, collisionBoundary: u = [], collisionPadding: c = 0, sticky: f = "partial", hideWhenDetached: h = false, updatePositionStrategy: d = "optimized", onPlaced: v, ...y } = t, b = tx(Ah, n), [p, m] = x.useState(null), g = Ge(e, (at) => m(at)), [S, T] = x.useState(null), A = lR(S), E = (A == null ? void 0 : A.width) ?? 0, C = (A == null ? void 0 : A.height) ?? 0, j = i + (s !== "center" ? "-" + s : ""), z = typeof c == "number" ? c : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...c
    }, P = Array.isArray(u) ? u : [
      u
    ], V = P.length > 0, J = {
      padding: z,
      boundary: P.filter(dR),
      altBoundary: V
    }, { refs: L, floatingStyles: X, placement: R, isPositioned: O, middlewareData: D } = IM({
      strategy: "fixed",
      placement: j,
      whileElementsMounted: (...at) => kM(...at, {
        animationFrame: d === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        WM({
          mainAxis: a + C,
          alignmentAxis: o
        }),
        l && tR({
          mainAxis: true,
          crossAxis: false,
          limiter: f === "partial" ? eR() : void 0,
          ...J
        }),
        l && nR({
          ...J
        }),
        iR({
          ...J,
          apply: ({ elements: at, rects: ia, availableWidth: Ti, availableHeight: aa }) => {
            const { width: Ei, height: gs } = ia.reference, Ai = at.floating.style;
            Ai.setProperty("--radix-popper-available-width", `${Ti}px`), Ai.setProperty("--radix-popper-available-height", `${aa}px`), Ai.setProperty("--radix-popper-anchor-width", `${Ei}px`), Ai.setProperty("--radix-popper-anchor-height", `${gs}px`);
          }
        }),
        S && sR({
          element: S,
          padding: r
        }),
        hR({
          arrowWidth: E,
          arrowHeight: C
        }),
        h && aR({
          strategy: "referenceHidden",
          ...J
        })
      ]
    }), [N, U] = ox(R), ft = hi(v);
    mi(() => {
      O && (ft == null ? void 0 : ft());
    }, [
      O,
      ft
    ]);
    const F = (_a5 = D.arrow) == null ? void 0 : _a5.x, Z = (_b3 = D.arrow) == null ? void 0 : _b3.y, $ = ((_c3 = D.arrow) == null ? void 0 : _c3.centerOffset) !== 0, [Tt, Nn] = x.useState();
    return mi(() => {
      p && Nn(window.getComputedStyle(p).zIndex);
    }, [
      p
    ]), w.jsx("div", {
      ref: L.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...X,
        transform: O ? X.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: Tt,
        "--radix-popper-transform-origin": [
          (_d3 = D.transformOrigin) == null ? void 0 : _d3.x,
          (_e8 = D.transformOrigin) == null ? void 0 : _e8.y
        ].join(" "),
        ...((_f3 = D.hide) == null ? void 0 : _f3.referenceHidden) && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      },
      dir: t.dir,
      children: w.jsx(uR, {
        scope: n,
        placedSide: N,
        onArrowChange: T,
        arrowX: F,
        arrowY: Z,
        shouldHideArrow: $,
        children: w.jsx(oe.div, {
          "data-side": N,
          "data-align": U,
          ...y,
          ref: g,
          style: {
            ...y.style,
            animation: O ? void 0 : "none"
          }
        })
      })
    });
  });
  ix.displayName = Ah;
  var ax = "PopperArrow", fR = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }, sx = x.forwardRef(function(e, n) {
    const { __scopePopper: i, ...a } = e, s = cR(ax, i), o = fR[s.placedSide];
    return w.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0
      },
      children: w.jsx(rR, {
        ...a,
        ref: n,
        style: {
          ...a.style,
          display: "block"
        }
      })
    });
  });
  sx.displayName = ax;
  function dR(t) {
    return t !== null;
  }
  var hR = (t) => ({
    name: "transformOrigin",
    options: t,
    fn(e) {
      var _a5, _b3, _c3;
      const { placement: n, rects: i, middlewareData: a } = e, o = ((_a5 = a.arrow) == null ? void 0 : _a5.centerOffset) !== 0, r = o ? 0 : t.arrowWidth, l = o ? 0 : t.arrowHeight, [u, c] = ox(n), f = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], h = (((_b3 = a.arrow) == null ? void 0 : _b3.x) ?? 0) + r / 2, d = (((_c3 = a.arrow) == null ? void 0 : _c3.y) ?? 0) + l / 2;
      let v = "", y = "";
      return u === "bottom" ? (v = o ? f : `${h}px`, y = `${-l}px`) : u === "top" ? (v = o ? f : `${h}px`, y = `${i.floating.height + l}px`) : u === "right" ? (v = `${-l}px`, y = o ? f : `${d}px`) : u === "left" && (v = `${i.floating.width + l}px`, y = o ? f : `${d}px`), {
        data: {
          x: v,
          y
        }
      };
    }
  });
  function ox(t) {
    const [e, n = "center"] = t.split("-");
    return [
      e,
      n
    ];
  }
  var mR = nx, pR = ix, gR = sx, [lu, fj] = nu("Tooltip", [
    W1
  ]), Ch = W1(), rx = "TooltipProvider", yR = 700, mg = "tooltip.open", [vR, lx] = lu(rx), ux = (t) => {
    const { __scopeTooltip: e, delayDuration: n = yR, skipDelayDuration: i = 300, disableHoverableContent: a = false, children: s } = t, o = x.useRef(true), r = x.useRef(false), l = x.useRef(0);
    return x.useEffect(() => {
      const u = l.current;
      return () => window.clearTimeout(u);
    }, []), w.jsx(vR, {
      scope: e,
      isOpenDelayedRef: o,
      delayDuration: n,
      onOpen: x.useCallback(() => {
        window.clearTimeout(l.current), o.current = false;
      }, []),
      onClose: x.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(() => o.current = true, i);
      }, [
        i
      ]),
      isPointerInTransitRef: r,
      onPointerInTransitChange: x.useCallback((u) => {
        r.current = u;
      }, []),
      disableHoverableContent: a,
      children: s
    });
  };
  ux.displayName = rx;
  var cx = "Tooltip", [dj, uu] = lu(cx), Vf = "TooltipTrigger", bR = x.forwardRef((t, e) => {
    const { __scopeTooltip: n, ...i } = t, a = uu(Vf, n), s = lx(Vf, n), o = Ch(n), r = x.useRef(null), l = Ge(e, r, a.onTriggerChange), u = x.useRef(false), c = x.useRef(false), f = x.useCallback(() => u.current = false, []);
    return x.useEffect(() => () => document.removeEventListener("pointerup", f), [
      f
    ]), w.jsx(mR, {
      asChild: true,
      ...o,
      children: w.jsx(oe.button, {
        "aria-describedby": a.open ? a.contentId : void 0,
        "data-state": a.stateAttribute,
        ...i,
        ref: l,
        onPointerMove: zt(t.onPointerMove, (h) => {
          h.pointerType !== "touch" && !c.current && !s.isPointerInTransitRef.current && (a.onTriggerEnter(), c.current = true);
        }),
        onPointerLeave: zt(t.onPointerLeave, () => {
          a.onTriggerLeave(), c.current = false;
        }),
        onPointerDown: zt(t.onPointerDown, () => {
          a.open && a.onClose(), u.current = true, document.addEventListener("pointerup", f, {
            once: true
          });
        }),
        onFocus: zt(t.onFocus, () => {
          u.current || a.onOpen();
        }),
        onBlur: zt(t.onBlur, a.onClose),
        onClick: zt(t.onClick, a.onClose)
      })
    });
  });
  bR.displayName = Vf;
  var xR = "TooltipPortal", [hj, SR] = lu(xR, {
    forceMount: void 0
  }), Wa = "TooltipContent", fx = x.forwardRef((t, e) => {
    const n = SR(Wa, t.__scopeTooltip), { forceMount: i = n.forceMount, side: a = "top", ...s } = t, o = uu(Wa, t.__scopeTooltip);
    return w.jsx(hh, {
      present: i || o.open,
      children: o.disableHoverableContent ? w.jsx(dx, {
        side: a,
        ...s,
        ref: e
      }) : w.jsx(wR, {
        side: a,
        ...s,
        ref: e
      })
    });
  }), wR = x.forwardRef((t, e) => {
    const n = uu(Wa, t.__scopeTooltip), i = lx(Wa, t.__scopeTooltip), a = x.useRef(null), s = Ge(e, a), [o, r] = x.useState(null), { trigger: l, onClose: u } = n, c = a.current, { onPointerInTransitChange: f } = i, h = x.useCallback(() => {
      r(null), f(false);
    }, [
      f
    ]), d = x.useCallback((v, y) => {
      const b = v.currentTarget, p = {
        x: v.clientX,
        y: v.clientY
      }, m = MR(p, b.getBoundingClientRect()), g = RR(p, m), S = DR(y.getBoundingClientRect()), T = NR([
        ...g,
        ...S
      ]);
      r(T), f(true);
    }, [
      f
    ]);
    return x.useEffect(() => () => h(), [
      h
    ]), x.useEffect(() => {
      if (l && c) {
        const v = (b) => d(b, c), y = (b) => d(b, l);
        return l.addEventListener("pointerleave", v), c.addEventListener("pointerleave", y), () => {
          l.removeEventListener("pointerleave", v), c.removeEventListener("pointerleave", y);
        };
      }
    }, [
      l,
      c,
      d,
      h
    ]), x.useEffect(() => {
      if (o) {
        const v = (y) => {
          const b = y.target, p = {
            x: y.clientX,
            y: y.clientY
          }, m = (l == null ? void 0 : l.contains(b)) || (c == null ? void 0 : c.contains(b)), g = !OR(p, o);
          m ? h() : g && (h(), u());
        };
        return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
      }
    }, [
      l,
      c,
      o,
      u,
      h
    ]), w.jsx(dx, {
      ...t,
      ref: s
    });
  }), [TR, ER] = lu(cx, {
    isInside: false
  }), AR = BA("TooltipContent"), dx = x.forwardRef((t, e) => {
    const { __scopeTooltip: n, children: i, "aria-label": a, onEscapeKeyDown: s, onPointerDownOutside: o, ...r } = t, l = uu(Wa, n), u = Ch(n), { onClose: c } = l;
    return x.useEffect(() => (document.addEventListener(mg, c), () => document.removeEventListener(mg, c)), [
      c
    ]), x.useEffect(() => {
      if (l.trigger) {
        const f = (h) => {
          var _a5;
          ((_a5 = h.target) == null ? void 0 : _a5.contains(l.trigger)) && c();
        };
        return window.addEventListener("scroll", f, {
          capture: true
        }), () => window.removeEventListener("scroll", f, {
          capture: true
        });
      }
    }, [
      l.trigger,
      c
    ]), w.jsx(dh, {
      asChild: true,
      disableOutsidePointerEvents: false,
      onEscapeKeyDown: s,
      onPointerDownOutside: o,
      onFocusOutside: (f) => f.preventDefault(),
      onDismiss: c,
      children: w.jsxs(pR, {
        "data-state": l.stateAttribute,
        ...u,
        ...r,
        ref: e,
        style: {
          ...r.style,
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        },
        children: [
          w.jsx(AR, {
            children: i
          }),
          w.jsx(TR, {
            scope: n,
            isInside: true,
            children: w.jsx(lC, {
              id: l.contentId,
              role: "tooltip",
              children: a || i
            })
          })
        ]
      })
    });
  });
  fx.displayName = Wa;
  var hx = "TooltipArrow", CR = x.forwardRef((t, e) => {
    const { __scopeTooltip: n, ...i } = t, a = Ch(n);
    return ER(hx, n).isInside ? null : w.jsx(gR, {
      ...a,
      ...i,
      ref: e
    });
  });
  CR.displayName = hx;
  function MR(t, e) {
    const n = Math.abs(e.top - t.y), i = Math.abs(e.bottom - t.y), a = Math.abs(e.right - t.x), s = Math.abs(e.left - t.x);
    switch (Math.min(n, i, a, s)) {
      case s:
        return "left";
      case a:
        return "right";
      case n:
        return "top";
      case i:
        return "bottom";
      default:
        throw new Error("unreachable");
    }
  }
  function RR(t, e, n = 5) {
    const i = [];
    switch (e) {
      case "top":
        i.push({
          x: t.x - n,
          y: t.y + n
        }, {
          x: t.x + n,
          y: t.y + n
        });
        break;
      case "bottom":
        i.push({
          x: t.x - n,
          y: t.y - n
        }, {
          x: t.x + n,
          y: t.y - n
        });
        break;
      case "left":
        i.push({
          x: t.x + n,
          y: t.y - n
        }, {
          x: t.x + n,
          y: t.y + n
        });
        break;
      case "right":
        i.push({
          x: t.x - n,
          y: t.y - n
        }, {
          x: t.x - n,
          y: t.y + n
        });
        break;
    }
    return i;
  }
  function DR(t) {
    const { top: e, right: n, bottom: i, left: a } = t;
    return [
      {
        x: a,
        y: e
      },
      {
        x: n,
        y: e
      },
      {
        x: n,
        y: i
      },
      {
        x: a,
        y: i
      }
    ];
  }
  function OR(t, e) {
    const { x: n, y: i } = t;
    let a = false;
    for (let s = 0, o = e.length - 1; s < e.length; o = s++) {
      const r = e[s], l = e[o], u = r.x, c = r.y, f = l.x, h = l.y;
      c > i != h > i && n < (f - u) * (i - c) / (h - c) + u && (a = !a);
    }
    return a;
  }
  function NR(t) {
    const e = t.slice();
    return e.sort((n, i) => n.x < i.x ? -1 : n.x > i.x ? 1 : n.y < i.y ? -1 : n.y > i.y ? 1 : 0), jR(e);
  }
  function jR(t) {
    if (t.length <= 1) return t.slice();
    const e = [];
    for (let i = 0; i < t.length; i++) {
      const a = t[i];
      for (; e.length >= 2; ) {
        const s = e[e.length - 1], o = e[e.length - 2];
        if ((s.x - o.x) * (a.y - o.y) >= (s.y - o.y) * (a.x - o.x)) e.pop();
        else break;
      }
      e.push(a);
    }
    e.pop();
    const n = [];
    for (let i = t.length - 1; i >= 0; i--) {
      const a = t[i];
      for (; n.length >= 2; ) {
        const s = n[n.length - 1], o = n[n.length - 2];
        if ((s.x - o.x) * (a.y - o.y) >= (s.y - o.y) * (a.x - o.x)) n.pop();
        else break;
      }
      n.push(a);
    }
    return n.pop(), e.length === 1 && n.length === 1 && e[0].x === n[0].x && e[0].y === n[0].y ? e : e.concat(n);
  }
  var zR = ux, mx = fx;
  const _R = zR, LR = x.forwardRef(({ className: t, sideOffset: e = 4, ...n }, i) => w.jsx(mx, {
    ref: i,
    sideOffset: e,
    className: Si("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
    ...n
  }));
  LR.displayName = mx.displayName;
  var cu = class {
    constructor() {
      this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
    }
    subscribe(t) {
      return this.listeners.add(t), this.onSubscribe(), () => {
        this.listeners.delete(t), this.onUnsubscribe();
      };
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {
    }
    onUnsubscribe() {
    }
  }, fu = typeof window > "u" || "Deno" in globalThis;
  function He() {
  }
  function VR(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function BR(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0;
  }
  function UR(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0);
  }
  function Bf(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function PR(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function pg(t, e) {
    const { type: n = "all", exact: i, fetchStatus: a, predicate: s, queryKey: o, stale: r } = t;
    if (o) {
      if (i) {
        if (e.queryHash !== Mh(o, e.options)) return false;
      } else if (!bo(e.queryKey, o)) return false;
    }
    if (n !== "all") {
      const l = e.isActive();
      if (n === "active" && !l || n === "inactive" && l) return false;
    }
    return !(typeof r == "boolean" && e.isStale() !== r || a && a !== e.state.fetchStatus || s && !s(e));
  }
  function gg(t, e) {
    const { exact: n, status: i, predicate: a, mutationKey: s } = t;
    if (s) {
      if (!e.options.mutationKey) return false;
      if (n) {
        if (vo(e.options.mutationKey) !== vo(s)) return false;
      } else if (!bo(e.options.mutationKey, s)) return false;
    }
    return !(i && e.state.status !== i || a && !a(e));
  }
  function Mh(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || vo)(t);
  }
  function vo(t) {
    return JSON.stringify(t, (e, n) => Uf(n) ? Object.keys(n).sort().reduce((i, a) => (i[a] = n[a], i), {}) : n);
  }
  function bo(t, e) {
    return t === e ? true : typeof t != typeof e ? false : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every((n) => bo(t[n], e[n])) : false;
  }
  function px(t, e) {
    if (t === e) return t;
    const n = yg(t) && yg(e);
    if (n || Uf(t) && Uf(e)) {
      const i = n ? t : Object.keys(t), a = i.length, s = n ? e : Object.keys(e), o = s.length, r = n ? [] : {}, l = new Set(i);
      let u = 0;
      for (let c = 0; c < o; c++) {
        const f = n ? c : s[c];
        (!n && l.has(f) || n) && t[f] === void 0 && e[f] === void 0 ? (r[f] = void 0, u++) : (r[f] = px(t[f], e[f]), r[f] === t[f] && t[f] !== void 0 && u++);
      }
      return a === o && u === a ? t : r;
    }
    return e;
  }
  function yg(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length;
  }
  function Uf(t) {
    if (!vg(t)) return false;
    const e = t.constructor;
    if (e === void 0) return true;
    const n = e.prototype;
    return !(!vg(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
  }
  function vg(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function HR(t) {
    return new Promise((e) => {
      setTimeout(e, t);
    });
  }
  function kR(t, e, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(t, e) : n.structuralSharing !== false ? px(t, e) : e;
  }
  function GR(t, e, n = 0) {
    const i = [
      ...t,
      e
    ];
    return n && i.length > n ? i.slice(1) : i;
  }
  function YR(t, e, n = 0) {
    const i = [
      e,
      ...t
    ];
    return n && i.length > n ? i.slice(0, -1) : i;
  }
  var Rh = Symbol();
  function gx(t, e) {
    return !t.queryFn && (e == null ? void 0 : e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Rh ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
  }
  var qR = (_a2 = class extends cu {
    constructor() {
      super();
      __privateAdd(this, _t2);
      __privateAdd(this, _e);
      __privateAdd(this, _n);
      __privateSet(this, _n, (t) => {
        if (!fu && window.addEventListener) {
          const e = () => t();
          return window.addEventListener("visibilitychange", e, false), () => {
            window.removeEventListener("visibilitychange", e);
          };
        }
      });
    }
    onSubscribe() {
      __privateGet(this, _e) || this.setEventListener(__privateGet(this, _n));
    }
    onUnsubscribe() {
      var _a5;
      this.hasListeners() || ((_a5 = __privateGet(this, _e)) == null ? void 0 : _a5.call(this), __privateSet(this, _e, void 0));
    }
    setEventListener(t) {
      var _a5;
      __privateSet(this, _n, t), (_a5 = __privateGet(this, _e)) == null ? void 0 : _a5.call(this), __privateSet(this, _e, t((e) => {
        typeof e == "boolean" ? this.setFocused(e) : this.onFocus();
      }));
    }
    setFocused(t) {
      __privateGet(this, _t2) !== t && (__privateSet(this, _t2, t), this.onFocus());
    }
    onFocus() {
      const t = this.isFocused();
      this.listeners.forEach((e) => {
        e(t);
      });
    }
    isFocused() {
      var _a5;
      return typeof __privateGet(this, _t2) == "boolean" ? __privateGet(this, _t2) : ((_a5 = globalThis.document) == null ? void 0 : _a5.visibilityState) !== "hidden";
    }
  }, _t2 = new WeakMap(), _e = new WeakMap(), _n = new WeakMap(), _a2), yx = new qR(), XR = (_b2 = class extends cu {
    constructor() {
      super();
      __privateAdd(this, _t3, true);
      __privateAdd(this, _e2);
      __privateAdd(this, _n2);
      __privateSet(this, _n2, (t) => {
        if (!fu && window.addEventListener) {
          const e = () => t(true), n = () => t(false);
          return window.addEventListener("online", e, false), window.addEventListener("offline", n, false), () => {
            window.removeEventListener("online", e), window.removeEventListener("offline", n);
          };
        }
      });
    }
    onSubscribe() {
      __privateGet(this, _e2) || this.setEventListener(__privateGet(this, _n2));
    }
    onUnsubscribe() {
      var _a5;
      this.hasListeners() || ((_a5 = __privateGet(this, _e2)) == null ? void 0 : _a5.call(this), __privateSet(this, _e2, void 0));
    }
    setEventListener(t) {
      var _a5;
      __privateSet(this, _n2, t), (_a5 = __privateGet(this, _e2)) == null ? void 0 : _a5.call(this), __privateSet(this, _e2, t(this.setOnline.bind(this)));
    }
    setOnline(t) {
      __privateGet(this, _t3) !== t && (__privateSet(this, _t3, t), this.listeners.forEach((n) => {
        n(t);
      }));
    }
    isOnline() {
      return __privateGet(this, _t3);
    }
  }, _t3 = new WeakMap(), _e2 = new WeakMap(), _n2 = new WeakMap(), _b2), Cl = new XR();
  function FR() {
    let t, e;
    const n = new Promise((a, s) => {
      t = a, e = s;
    });
    n.status = "pending", n.catch(() => {
    });
    function i(a) {
      Object.assign(n, a), delete n.resolve, delete n.reject;
    }
    return n.resolve = (a) => {
      i({
        status: "fulfilled",
        value: a
      }), t(a);
    }, n.reject = (a) => {
      i({
        status: "rejected",
        reason: a
      }), e(a);
    }, n;
  }
  function KR(t) {
    return Math.min(1e3 * 2 ** t, 3e4);
  }
  function vx(t) {
    return (t ?? "online") === "online" ? Cl.isOnline() : true;
  }
  var bx = class extends Error {
    constructor(t) {
      super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
    }
  };
  function cc(t) {
    return t instanceof bx;
  }
  function xx(t) {
    let e = false, n = 0, i = false, a;
    const s = FR(), o = (y) => {
      var _a5;
      i || (h(new bx(y)), (_a5 = t.abort) == null ? void 0 : _a5.call(t));
    }, r = () => {
      e = true;
    }, l = () => {
      e = false;
    }, u = () => yx.isFocused() && (t.networkMode === "always" || Cl.isOnline()) && t.canRun(), c = () => vx(t.networkMode) && t.canRun(), f = (y) => {
      var _a5;
      i || (i = true, (_a5 = t.onSuccess) == null ? void 0 : _a5.call(t, y), a == null ? void 0 : a(), s.resolve(y));
    }, h = (y) => {
      var _a5;
      i || (i = true, (_a5 = t.onError) == null ? void 0 : _a5.call(t, y), a == null ? void 0 : a(), s.reject(y));
    }, d = () => new Promise((y) => {
      var _a5;
      a = (b) => {
        (i || u()) && y(b);
      }, (_a5 = t.onPause) == null ? void 0 : _a5.call(t);
    }).then(() => {
      var _a5;
      a = void 0, i || ((_a5 = t.onContinue) == null ? void 0 : _a5.call(t));
    }), v = () => {
      if (i) return;
      let y;
      const b = n === 0 ? t.initialPromise : void 0;
      try {
        y = b ?? t.fn();
      } catch (p) {
        y = Promise.reject(p);
      }
      Promise.resolve(y).then(f).catch((p) => {
        var _a5;
        if (i) return;
        const m = t.retry ?? (fu ? 0 : 3), g = t.retryDelay ?? KR, S = typeof g == "function" ? g(n, p) : g, T = m === true || typeof m == "number" && n < m || typeof m == "function" && m(n, p);
        if (e || !T) {
          h(p);
          return;
        }
        n++, (_a5 = t.onFail) == null ? void 0 : _a5.call(t, n, p), HR(S).then(() => u() ? void 0 : d()).then(() => {
          e ? h(p) : v();
        });
      });
    };
    return {
      promise: s,
      cancel: o,
      continue: () => (a == null ? void 0 : a(), s),
      cancelRetry: r,
      continueRetry: l,
      canStart: c,
      start: () => (c() ? v() : d().then(v), s)
    };
  }
  var QR = (t) => setTimeout(t, 0);
  function ZR() {
    let t = [], e = 0, n = (r) => {
      r();
    }, i = (r) => {
      r();
    }, a = QR;
    const s = (r) => {
      e ? t.push(r) : a(() => {
        n(r);
      });
    }, o = () => {
      const r = t;
      t = [], r.length && a(() => {
        i(() => {
          r.forEach((l) => {
            n(l);
          });
        });
      });
    };
    return {
      batch: (r) => {
        let l;
        e++;
        try {
          l = r();
        } finally {
          e--, e || o();
        }
        return l;
      },
      batchCalls: (r) => (...l) => {
        s(() => {
          r(...l);
        });
      },
      schedule: s,
      setNotifyFunction: (r) => {
        n = r;
      },
      setBatchNotifyFunction: (r) => {
        i = r;
      },
      setScheduler: (r) => {
        a = r;
      }
    };
  }
  var Kt = ZR(), Sx = (_c2 = class {
    constructor() {
      __privateAdd(this, _t4);
    }
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(), BR(this.gcTime) && __privateSet(this, _t4, setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime));
    }
    updateGcTime(t) {
      this.gcTime = Math.max(this.gcTime || 0, t ?? (fu ? 1 / 0 : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
      __privateGet(this, _t4) && (clearTimeout(__privateGet(this, _t4)), __privateSet(this, _t4, void 0));
    }
  }, _t4 = new WeakMap(), _c2), $R = (_d2 = class extends Sx {
    constructor(t) {
      super();
      __privateAdd(this, _$R_instances);
      __privateAdd(this, _t5);
      __privateAdd(this, _e3);
      __privateAdd(this, _n3);
      __privateAdd(this, _a3);
      __privateAdd(this, _i2);
      __privateAdd(this, _o2);
      __privateAdd(this, _r2);
      __privateSet(this, _r2, false), __privateSet(this, _o2, t.defaultOptions), this.setOptions(t.options), this.observers = [], __privateSet(this, _a3, t.client), __privateSet(this, _n3, __privateGet(this, _a3).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, __privateSet(this, _t5, JR(this.options)), this.state = t.state ?? __privateGet(this, _t5), this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      var _a5;
      return (_a5 = __privateGet(this, _i2)) == null ? void 0 : _a5.promise;
    }
    setOptions(t) {
      this.options = {
        ...__privateGet(this, _o2),
        ...t
      }, this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === "idle" && __privateGet(this, _n3).remove(this);
    }
    setData(t, e) {
      const n = kR(this.state.data, t, this.options);
      return __privateMethod(this, _$R_instances, s_fn).call(this, {
        data: n,
        type: "success",
        dataUpdatedAt: e == null ? void 0 : e.updatedAt,
        manual: e == null ? void 0 : e.manual
      }), n;
    }
    setState(t, e) {
      __privateMethod(this, _$R_instances, s_fn).call(this, {
        type: "setState",
        state: t,
        setStateOptions: e
      });
    }
    cancel(t) {
      var _a5, _b3;
      const e = (_a5 = __privateGet(this, _i2)) == null ? void 0 : _a5.promise;
      return (_b3 = __privateGet(this, _i2)) == null ? void 0 : _b3.cancel(t), e ? e.then(He).catch(He) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({
        silent: true
      });
    }
    reset() {
      this.destroy(), this.setState(__privateGet(this, _t5));
    }
    isActive() {
      return this.observers.some((t) => PR(t.options.enabled, this) !== false);
    }
    isDisabled() {
      return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Rh || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0 ? this.observers.some((t) => Bf(t.options.staleTime, this) === "static") : false;
    }
    isStale() {
      return this.getObserversCount() > 0 ? this.observers.some((t) => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(t = 0) {
      return this.state.data === void 0 ? true : t === "static" ? false : this.state.isInvalidated ? true : !UR(this.state.dataUpdatedAt, t);
    }
    onFocus() {
      var _a5, _b3;
      (_a5 = this.observers.find((e) => e.shouldFetchOnWindowFocus())) == null ? void 0 : _a5.refetch({
        cancelRefetch: false
      }), (_b3 = __privateGet(this, _i2)) == null ? void 0 : _b3.continue();
    }
    onOnline() {
      var _a5, _b3;
      (_a5 = this.observers.find((e) => e.shouldFetchOnReconnect())) == null ? void 0 : _a5.refetch({
        cancelRefetch: false
      }), (_b3 = __privateGet(this, _i2)) == null ? void 0 : _b3.continue();
    }
    addObserver(t) {
      this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), __privateGet(this, _n3).notify({
        type: "observerAdded",
        query: this,
        observer: t
      }));
    }
    removeObserver(t) {
      this.observers.includes(t) && (this.observers = this.observers.filter((e) => e !== t), this.observers.length || (__privateGet(this, _i2) && (__privateGet(this, _r2) ? __privateGet(this, _i2).cancel({
        revert: true
      }) : __privateGet(this, _i2).cancelRetry()), this.scheduleGc()), __privateGet(this, _n3).notify({
        type: "observerRemoved",
        query: this,
        observer: t
      }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || __privateMethod(this, _$R_instances, s_fn).call(this, {
        type: "invalidate"
      });
    }
    fetch(t, e) {
      var _a5, _b3, _c3;
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && (e == null ? void 0 : e.cancelRefetch)) this.cancel({
          silent: true
        });
        else if (__privateGet(this, _i2)) return __privateGet(this, _i2).continueRetry(), __privateGet(this, _i2).promise;
      }
      if (t && this.setOptions(t), !this.options.queryFn) {
        const l = this.observers.find((u) => u.options.queryFn);
        l && this.setOptions(l.options);
      }
      const n = new AbortController(), i = (l) => {
        Object.defineProperty(l, "signal", {
          enumerable: true,
          get: () => (__privateSet(this, _r2, true), n.signal)
        });
      }, a = () => {
        const l = gx(this.options, e), c = (() => {
          const f = {
            client: __privateGet(this, _a3),
            queryKey: this.queryKey,
            meta: this.meta
          };
          return i(f), f;
        })();
        return __privateSet(this, _r2, false), this.options.persister ? this.options.persister(l, c, this) : l(c);
      }, o = (() => {
        const l = {
          fetchOptions: e,
          options: this.options,
          queryKey: this.queryKey,
          client: __privateGet(this, _a3),
          state: this.state,
          fetchFn: a
        };
        return i(l), l;
      })();
      (_a5 = this.options.behavior) == null ? void 0 : _a5.onFetch(o, this), __privateSet(this, _e3, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_b3 = o.fetchOptions) == null ? void 0 : _b3.meta)) && __privateMethod(this, _$R_instances, s_fn).call(this, {
        type: "fetch",
        meta: (_c3 = o.fetchOptions) == null ? void 0 : _c3.meta
      });
      const r = (l) => {
        var _a6, _b4, _c4, _d3;
        cc(l) && l.silent || __privateMethod(this, _$R_instances, s_fn).call(this, {
          type: "error",
          error: l
        }), cc(l) || ((_b4 = (_a6 = __privateGet(this, _n3).config).onError) == null ? void 0 : _b4.call(_a6, l, this), (_d3 = (_c4 = __privateGet(this, _n3).config).onSettled) == null ? void 0 : _d3.call(_c4, this.state.data, l, this)), this.scheduleGc();
      };
      return __privateSet(this, _i2, xx({
        initialPromise: e == null ? void 0 : e.initialPromise,
        fn: o.fetchFn,
        abort: n.abort.bind(n),
        onSuccess: (l) => {
          var _a6, _b4, _c4, _d3;
          if (l === void 0) {
            r(new Error(`${this.queryHash} data is undefined`));
            return;
          }
          try {
            this.setData(l);
          } catch (u) {
            r(u);
            return;
          }
          (_b4 = (_a6 = __privateGet(this, _n3).config).onSuccess) == null ? void 0 : _b4.call(_a6, l, this), (_d3 = (_c4 = __privateGet(this, _n3).config).onSettled) == null ? void 0 : _d3.call(_c4, l, this.state.error, this), this.scheduleGc();
        },
        onError: r,
        onFail: (l, u) => {
          __privateMethod(this, _$R_instances, s_fn).call(this, {
            type: "failed",
            failureCount: l,
            error: u
          });
        },
        onPause: () => {
          __privateMethod(this, _$R_instances, s_fn).call(this, {
            type: "pause"
          });
        },
        onContinue: () => {
          __privateMethod(this, _$R_instances, s_fn).call(this, {
            type: "continue"
          });
        },
        retry: o.options.retry,
        retryDelay: o.options.retryDelay,
        networkMode: o.options.networkMode,
        canRun: () => true
      })), __privateGet(this, _i2).start();
    }
  }, _t5 = new WeakMap(), _e3 = new WeakMap(), _n3 = new WeakMap(), _a3 = new WeakMap(), _i2 = new WeakMap(), _o2 = new WeakMap(), _r2 = new WeakMap(), _$R_instances = new WeakSet(), s_fn = function(t) {
    const e = (n) => {
      switch (t.type) {
        case "failed":
          return {
            ...n,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error
          };
        case "pause":
          return {
            ...n,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...n,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...n,
            ...IR(n.data, this.options),
            fetchMeta: t.meta ?? null
          };
        case "success":
          return __privateSet(this, _e3, void 0), {
            ...n,
            data: t.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const i = t.error;
          return cc(i) && i.revert && __privateGet(this, _e3) ? {
            ...__privateGet(this, _e3),
            fetchStatus: "idle"
          } : {
            ...n,
            error: i,
            errorUpdateCount: n.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: n.fetchFailureCount + 1,
            fetchFailureReason: i,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...n,
            isInvalidated: true
          };
        case "setState":
          return {
            ...n,
            ...t.state
          };
      }
    };
    this.state = e(this.state), Kt.batch(() => {
      this.observers.forEach((n) => {
        n.onQueryUpdate();
      }), __privateGet(this, _n3).notify({
        query: this,
        type: "updated",
        action: t
      });
    });
  }, _d2);
  function IR(t, e) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: vx(e.networkMode) ? "fetching" : "paused",
      ...t === void 0 && {
        error: null,
        status: "pending"
      }
    };
  }
  function JR(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, n = e !== void 0, i = n ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
      data: e,
      dataUpdateCount: 0,
      dataUpdatedAt: n ? i ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: false,
      status: n ? "success" : "pending",
      fetchStatus: "idle"
    };
  }
  var WR = (_e4 = class extends cu {
    constructor(t = {}) {
      super();
      __privateAdd(this, _t6);
      this.config = t, __privateSet(this, _t6, /* @__PURE__ */ new Map());
    }
    build(t, e, n) {
      const i = e.queryKey, a = e.queryHash ?? Mh(i, e);
      let s = this.get(a);
      return s || (s = new $R({
        client: t,
        queryKey: i,
        queryHash: a,
        options: t.defaultQueryOptions(e),
        state: n,
        defaultOptions: t.getQueryDefaults(i)
      }), this.add(s)), s;
    }
    add(t) {
      __privateGet(this, _t6).has(t.queryHash) || (__privateGet(this, _t6).set(t.queryHash, t), this.notify({
        type: "added",
        query: t
      }));
    }
    remove(t) {
      const e = __privateGet(this, _t6).get(t.queryHash);
      e && (t.destroy(), e === t && __privateGet(this, _t6).delete(t.queryHash), this.notify({
        type: "removed",
        query: t
      }));
    }
    clear() {
      Kt.batch(() => {
        this.getAll().forEach((t) => {
          this.remove(t);
        });
      });
    }
    get(t) {
      return __privateGet(this, _t6).get(t);
    }
    getAll() {
      return [
        ...__privateGet(this, _t6).values()
      ];
    }
    find(t) {
      const e = {
        exact: true,
        ...t
      };
      return this.getAll().find((n) => pg(e, n));
    }
    findAll(t = {}) {
      const e = this.getAll();
      return Object.keys(t).length > 0 ? e.filter((n) => pg(t, n)) : e;
    }
    notify(t) {
      Kt.batch(() => {
        this.listeners.forEach((e) => {
          e(t);
        });
      });
    }
    onFocus() {
      Kt.batch(() => {
        this.getAll().forEach((t) => {
          t.onFocus();
        });
      });
    }
    onOnline() {
      Kt.batch(() => {
        this.getAll().forEach((t) => {
          t.onOnline();
        });
      });
    }
  }, _t6 = new WeakMap(), _e4), tD = (_f2 = class extends Sx {
    constructor(t) {
      super();
      __privateAdd(this, _tD_instances);
      __privateAdd(this, _t7);
      __privateAdd(this, _e5);
      __privateAdd(this, _n4);
      this.mutationId = t.mutationId, __privateSet(this, _e5, t.mutationCache), __privateSet(this, _t7, []), this.state = t.state || eD(), this.setOptions(t.options), this.scheduleGc();
    }
    setOptions(t) {
      this.options = t, this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(t) {
      __privateGet(this, _t7).includes(t) || (__privateGet(this, _t7).push(t), this.clearGcTimeout(), __privateGet(this, _e5).notify({
        type: "observerAdded",
        mutation: this,
        observer: t
      }));
    }
    removeObserver(t) {
      __privateSet(this, _t7, __privateGet(this, _t7).filter((e) => e !== t)), this.scheduleGc(), __privateGet(this, _e5).notify({
        type: "observerRemoved",
        mutation: this,
        observer: t
      });
    }
    optionalRemove() {
      __privateGet(this, _t7).length || (this.state.status === "pending" ? this.scheduleGc() : __privateGet(this, _e5).remove(this));
    }
    continue() {
      var _a5;
      return ((_a5 = __privateGet(this, _n4)) == null ? void 0 : _a5.continue()) ?? this.execute(this.state.variables);
    }
    async execute(t) {
      var _a5, _b3, _c3, _d3, _e8, _f3, _g3, _h3, _i4, _j, _k, _l2, _m2, _n7, _o4, _p2, _q, _r4, _s3, _t10;
      const e = () => {
        __privateMethod(this, _tD_instances, a_fn).call(this, {
          type: "continue"
        });
      };
      __privateSet(this, _n4, xx({
        fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
        onFail: (a, s) => {
          __privateMethod(this, _tD_instances, a_fn).call(this, {
            type: "failed",
            failureCount: a,
            error: s
          });
        },
        onPause: () => {
          __privateMethod(this, _tD_instances, a_fn).call(this, {
            type: "pause"
          });
        },
        onContinue: e,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => __privateGet(this, _e5).canRun(this)
      }));
      const n = this.state.status === "pending", i = !__privateGet(this, _n4).canStart();
      try {
        if (n) e();
        else {
          __privateMethod(this, _tD_instances, a_fn).call(this, {
            type: "pending",
            variables: t,
            isPaused: i
          }), await ((_b3 = (_a5 = __privateGet(this, _e5).config).onMutate) == null ? void 0 : _b3.call(_a5, t, this));
          const s = await ((_d3 = (_c3 = this.options).onMutate) == null ? void 0 : _d3.call(_c3, t));
          s !== this.state.context && __privateMethod(this, _tD_instances, a_fn).call(this, {
            type: "pending",
            context: s,
            variables: t,
            isPaused: i
          });
        }
        const a = await __privateGet(this, _n4).start();
        return await ((_f3 = (_e8 = __privateGet(this, _e5).config).onSuccess) == null ? void 0 : _f3.call(_e8, a, t, this.state.context, this)), await ((_h3 = (_g3 = this.options).onSuccess) == null ? void 0 : _h3.call(_g3, a, t, this.state.context)), await ((_j = (_i4 = __privateGet(this, _e5).config).onSettled) == null ? void 0 : _j.call(_i4, a, null, this.state.variables, this.state.context, this)), await ((_l2 = (_k = this.options).onSettled) == null ? void 0 : _l2.call(_k, a, null, t, this.state.context)), __privateMethod(this, _tD_instances, a_fn).call(this, {
          type: "success",
          data: a
        }), a;
      } catch (a) {
        try {
          throw await ((_n7 = (_m2 = __privateGet(this, _e5).config).onError) == null ? void 0 : _n7.call(_m2, a, t, this.state.context, this)), await ((_p2 = (_o4 = this.options).onError) == null ? void 0 : _p2.call(_o4, a, t, this.state.context)), await ((_r4 = (_q = __privateGet(this, _e5).config).onSettled) == null ? void 0 : _r4.call(_q, void 0, a, this.state.variables, this.state.context, this)), await ((_t10 = (_s3 = this.options).onSettled) == null ? void 0 : _t10.call(_s3, void 0, a, t, this.state.context)), a;
        } finally {
          __privateMethod(this, _tD_instances, a_fn).call(this, {
            type: "error",
            error: a
          });
        }
      } finally {
        __privateGet(this, _e5).runNext(this);
      }
    }
  }, _t7 = new WeakMap(), _e5 = new WeakMap(), _n4 = new WeakMap(), _tD_instances = new WeakSet(), a_fn = function(t) {
    const e = (n) => {
      switch (t.type) {
        case "failed":
          return {
            ...n,
            failureCount: t.failureCount,
            failureReason: t.error
          };
        case "pause":
          return {
            ...n,
            isPaused: true
          };
        case "continue":
          return {
            ...n,
            isPaused: false
          };
        case "pending":
          return {
            ...n,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: t.isPaused,
            status: "pending",
            variables: t.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...n,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...n,
            data: void 0,
            error: t.error,
            failureCount: n.failureCount + 1,
            failureReason: t.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = e(this.state), Kt.batch(() => {
      __privateGet(this, _t7).forEach((n) => {
        n.onMutationUpdate(t);
      }), __privateGet(this, _e5).notify({
        mutation: this,
        type: "updated",
        action: t
      });
    });
  }, _f2);
  function eD() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: false,
      status: "idle",
      variables: void 0,
      submittedAt: 0
    };
  }
  var nD = (_g2 = class extends cu {
    constructor(t = {}) {
      super();
      __privateAdd(this, _t8);
      __privateAdd(this, _e6);
      __privateAdd(this, _n5);
      this.config = t, __privateSet(this, _t8, /* @__PURE__ */ new Set()), __privateSet(this, _e6, /* @__PURE__ */ new Map()), __privateSet(this, _n5, 0);
    }
    build(t, e, n) {
      const i = new tD({
        mutationCache: this,
        mutationId: ++__privateWrapper(this, _n5)._,
        options: t.defaultMutationOptions(e),
        state: n
      });
      return this.add(i), i;
    }
    add(t) {
      __privateGet(this, _t8).add(t);
      const e = pr(t);
      if (typeof e == "string") {
        const n = __privateGet(this, _e6).get(e);
        n ? n.push(t) : __privateGet(this, _e6).set(e, [
          t
        ]);
      }
      this.notify({
        type: "added",
        mutation: t
      });
    }
    remove(t) {
      if (__privateGet(this, _t8).delete(t)) {
        const e = pr(t);
        if (typeof e == "string") {
          const n = __privateGet(this, _e6).get(e);
          if (n) if (n.length > 1) {
            const i = n.indexOf(t);
            i !== -1 && n.splice(i, 1);
          } else n[0] === t && __privateGet(this, _e6).delete(e);
        }
      }
      this.notify({
        type: "removed",
        mutation: t
      });
    }
    canRun(t) {
      var _a5;
      const e = pr(t);
      if (typeof e == "string") {
        const i = (_a5 = __privateGet(this, _e6).get(e)) == null ? void 0 : _a5.find((a) => a.state.status === "pending");
        return !i || i === t;
      } else return true;
    }
    runNext(t) {
      var _a5, _b3;
      const e = pr(t);
      return typeof e == "string" ? ((_b3 = (_a5 = __privateGet(this, _e6).get(e)) == null ? void 0 : _a5.find((i) => i !== t && i.state.isPaused)) == null ? void 0 : _b3.continue()) ?? Promise.resolve() : Promise.resolve();
    }
    clear() {
      Kt.batch(() => {
        __privateGet(this, _t8).forEach((t) => {
          this.notify({
            type: "removed",
            mutation: t
          });
        }), __privateGet(this, _t8).clear(), __privateGet(this, _e6).clear();
      });
    }
    getAll() {
      return Array.from(__privateGet(this, _t8));
    }
    find(t) {
      const e = {
        exact: true,
        ...t
      };
      return this.getAll().find((n) => gg(e, n));
    }
    findAll(t = {}) {
      return this.getAll().filter((e) => gg(t, e));
    }
    notify(t) {
      Kt.batch(() => {
        this.listeners.forEach((e) => {
          e(t);
        });
      });
    }
    resumePausedMutations() {
      const t = this.getAll().filter((e) => e.state.isPaused);
      return Kt.batch(() => Promise.all(t.map((e) => e.continue().catch(He))));
    }
  }, _t8 = new WeakMap(), _e6 = new WeakMap(), _n5 = new WeakMap(), _g2);
  function pr(t) {
    var _a5;
    return (_a5 = t.options.scope) == null ? void 0 : _a5.id;
  }
  function bg(t) {
    return {
      onFetch: (e, n) => {
        var _a5, _b3, _c3, _d3, _e8;
        const i = e.options, a = (_c3 = (_b3 = (_a5 = e.fetchOptions) == null ? void 0 : _a5.meta) == null ? void 0 : _b3.fetchMore) == null ? void 0 : _c3.direction, s = ((_d3 = e.state.data) == null ? void 0 : _d3.pages) || [], o = ((_e8 = e.state.data) == null ? void 0 : _e8.pageParams) || [];
        let r = {
          pages: [],
          pageParams: []
        }, l = 0;
        const u = async () => {
          let c = false;
          const f = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: true,
              get: () => (e.signal.aborted ? c = true : e.signal.addEventListener("abort", () => {
                c = true;
              }), e.signal)
            });
          }, h = gx(e.options, e.fetchOptions), d = async (v, y, b) => {
            if (c) return Promise.reject();
            if (y == null && v.pages.length) return Promise.resolve(v);
            const m = (() => {
              const A = {
                client: e.client,
                queryKey: e.queryKey,
                pageParam: y,
                direction: b ? "backward" : "forward",
                meta: e.options.meta
              };
              return f(A), A;
            })(), g = await h(m), { maxPages: S } = e.options, T = b ? YR : GR;
            return {
              pages: T(v.pages, g, S),
              pageParams: T(v.pageParams, y, S)
            };
          };
          if (a && s.length) {
            const v = a === "backward", y = v ? iD : xg, b = {
              pages: s,
              pageParams: o
            }, p = y(i, b);
            r = await d(b, p, v);
          } else {
            const v = t ?? s.length;
            do {
              const y = l === 0 ? o[0] ?? i.initialPageParam : xg(i, r);
              if (l > 0 && y == null) break;
              r = await d(r, y), l++;
            } while (l < v);
          }
          return r;
        };
        e.options.persister ? e.fetchFn = () => {
          var _a6, _b4;
          return (_b4 = (_a6 = e.options).persister) == null ? void 0 : _b4.call(_a6, u, {
            client: e.client,
            queryKey: e.queryKey,
            meta: e.options.meta,
            signal: e.signal
          }, n);
        } : e.fetchFn = u;
      }
    };
  }
  function xg(t, { pages: e, pageParams: n }) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, n[i], n) : void 0;
  }
  function iD(t, { pages: e, pageParams: n }) {
    var _a5;
    return e.length > 0 ? (_a5 = t.getPreviousPageParam) == null ? void 0 : _a5.call(t, e[0], e, n[0], n) : void 0;
  }
  var aD = (_h2 = class {
    constructor(t = {}) {
      __privateAdd(this, _t9);
      __privateAdd(this, _e7);
      __privateAdd(this, _n6);
      __privateAdd(this, _a4);
      __privateAdd(this, _i3);
      __privateAdd(this, _o3);
      __privateAdd(this, _r3);
      __privateAdd(this, _s2);
      __privateSet(this, _t9, t.queryCache || new WR()), __privateSet(this, _e7, t.mutationCache || new nD()), __privateSet(this, _n6, t.defaultOptions || {}), __privateSet(this, _a4, /* @__PURE__ */ new Map()), __privateSet(this, _i3, /* @__PURE__ */ new Map()), __privateSet(this, _o3, 0);
    }
    mount() {
      __privateWrapper(this, _o3)._++, __privateGet(this, _o3) === 1 && (__privateSet(this, _r3, yx.subscribe(async (t) => {
        t && (await this.resumePausedMutations(), __privateGet(this, _t9).onFocus());
      })), __privateSet(this, _s2, Cl.subscribe(async (t) => {
        t && (await this.resumePausedMutations(), __privateGet(this, _t9).onOnline());
      })));
    }
    unmount() {
      var _a5, _b3;
      __privateWrapper(this, _o3)._--, __privateGet(this, _o3) === 0 && ((_a5 = __privateGet(this, _r3)) == null ? void 0 : _a5.call(this), __privateSet(this, _r3, void 0), (_b3 = __privateGet(this, _s2)) == null ? void 0 : _b3.call(this), __privateSet(this, _s2, void 0));
    }
    isFetching(t) {
      return __privateGet(this, _t9).findAll({
        ...t,
        fetchStatus: "fetching"
      }).length;
    }
    isMutating(t) {
      return __privateGet(this, _e7).findAll({
        ...t,
        status: "pending"
      }).length;
    }
    getQueryData(t) {
      var _a5;
      const e = this.defaultQueryOptions({
        queryKey: t
      });
      return (_a5 = __privateGet(this, _t9).get(e.queryHash)) == null ? void 0 : _a5.state.data;
    }
    ensureQueryData(t) {
      const e = this.defaultQueryOptions(t), n = __privateGet(this, _t9).build(this, e), i = n.state.data;
      return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && n.isStaleByTime(Bf(e.staleTime, n)) && this.prefetchQuery(e), Promise.resolve(i));
    }
    getQueriesData(t) {
      return __privateGet(this, _t9).findAll(t).map(({ queryKey: e, state: n }) => {
        const i = n.data;
        return [
          e,
          i
        ];
      });
    }
    setQueryData(t, e, n) {
      var _a5;
      const i = this.defaultQueryOptions({
        queryKey: t
      }), s = (_a5 = __privateGet(this, _t9).get(i.queryHash)) == null ? void 0 : _a5.state.data, o = VR(e, s);
      if (o !== void 0) return __privateGet(this, _t9).build(this, i).setData(o, {
        ...n,
        manual: true
      });
    }
    setQueriesData(t, e, n) {
      return Kt.batch(() => __privateGet(this, _t9).findAll(t).map(({ queryKey: i }) => [
        i,
        this.setQueryData(i, e, n)
      ]));
    }
    getQueryState(t) {
      var _a5;
      const e = this.defaultQueryOptions({
        queryKey: t
      });
      return (_a5 = __privateGet(this, _t9).get(e.queryHash)) == null ? void 0 : _a5.state;
    }
    removeQueries(t) {
      const e = __privateGet(this, _t9);
      Kt.batch(() => {
        e.findAll(t).forEach((n) => {
          e.remove(n);
        });
      });
    }
    resetQueries(t, e) {
      const n = __privateGet(this, _t9);
      return Kt.batch(() => (n.findAll(t).forEach((i) => {
        i.reset();
      }), this.refetchQueries({
        type: "active",
        ...t
      }, e)));
    }
    cancelQueries(t, e = {}) {
      const n = {
        revert: true,
        ...e
      }, i = Kt.batch(() => __privateGet(this, _t9).findAll(t).map((a) => a.cancel(n)));
      return Promise.all(i).then(He).catch(He);
    }
    invalidateQueries(t, e = {}) {
      return Kt.batch(() => (__privateGet(this, _t9).findAll(t).forEach((n) => {
        n.invalidate();
      }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
        ...t,
        type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
      }, e)));
    }
    refetchQueries(t, e = {}) {
      const n = {
        ...e,
        cancelRefetch: e.cancelRefetch ?? true
      }, i = Kt.batch(() => __privateGet(this, _t9).findAll(t).filter((a) => !a.isDisabled() && !a.isStatic()).map((a) => {
        let s = a.fetch(void 0, n);
        return n.throwOnError || (s = s.catch(He)), a.state.fetchStatus === "paused" ? Promise.resolve() : s;
      }));
      return Promise.all(i).then(He);
    }
    fetchQuery(t) {
      const e = this.defaultQueryOptions(t);
      e.retry === void 0 && (e.retry = false);
      const n = __privateGet(this, _t9).build(this, e);
      return n.isStaleByTime(Bf(e.staleTime, n)) ? n.fetch(e) : Promise.resolve(n.state.data);
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(He).catch(He);
    }
    fetchInfiniteQuery(t) {
      return t.behavior = bg(t.pages), this.fetchQuery(t);
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(He).catch(He);
    }
    ensureInfiniteQueryData(t) {
      return t.behavior = bg(t.pages), this.ensureQueryData(t);
    }
    resumePausedMutations() {
      return Cl.isOnline() ? __privateGet(this, _e7).resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return __privateGet(this, _t9);
    }
    getMutationCache() {
      return __privateGet(this, _e7);
    }
    getDefaultOptions() {
      return __privateGet(this, _n6);
    }
    setDefaultOptions(t) {
      __privateSet(this, _n6, t);
    }
    setQueryDefaults(t, e) {
      __privateGet(this, _a4).set(vo(t), {
        queryKey: t,
        defaultOptions: e
      });
    }
    getQueryDefaults(t) {
      const e = [
        ...__privateGet(this, _a4).values()
      ], n = {};
      return e.forEach((i) => {
        bo(t, i.queryKey) && Object.assign(n, i.defaultOptions);
      }), n;
    }
    setMutationDefaults(t, e) {
      __privateGet(this, _i3).set(vo(t), {
        mutationKey: t,
        defaultOptions: e
      });
    }
    getMutationDefaults(t) {
      const e = [
        ...__privateGet(this, _i3).values()
      ], n = {};
      return e.forEach((i) => {
        bo(t, i.mutationKey) && Object.assign(n, i.defaultOptions);
      }), n;
    }
    defaultQueryOptions(t) {
      if (t._defaulted) return t;
      const e = {
        ...__privateGet(this, _n6).queries,
        ...this.getQueryDefaults(t.queryKey),
        ...t,
        _defaulted: true
      };
      return e.queryHash || (e.queryHash = Mh(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === Rh && (e.enabled = false), e;
    }
    defaultMutationOptions(t) {
      return (t == null ? void 0 : t._defaulted) ? t : {
        ...__privateGet(this, _n6).mutations,
        ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
        ...t,
        _defaulted: true
      };
    }
    clear() {
      __privateGet(this, _t9).clear(), __privateGet(this, _e7).clear();
    }
  }, _t9 = new WeakMap(), _e7 = new WeakMap(), _n6 = new WeakMap(), _a4 = new WeakMap(), _i3 = new WeakMap(), _o3 = new WeakMap(), _r3 = new WeakMap(), _s2 = new WeakMap(), _h2), sD = x.createContext(void 0), oD = ({ client: t, children: e }) => (x.useEffect(() => (t.mount(), () => {
    t.unmount();
  }), [
    t
  ]), w.jsx(sD.Provider, {
    value: t,
    children: e
  }));
  function xo() {
    return xo = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    }, xo.apply(this, arguments);
  }
  var In;
  (function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
  })(In || (In = {}));
  const Sg = "popstate";
  function rD(t) {
    t === void 0 && (t = {});
    function e(a, s) {
      let { pathname: o = "/", search: r = "", hash: l = "" } = ta(a.location.hash.substr(1));
      return !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o), Pf("", {
        pathname: o,
        search: r,
        hash: l
      }, s.state && s.state.usr || null, s.state && s.state.key || "default");
    }
    function n(a, s) {
      let o = a.document.querySelector("base"), r = "";
      if (o && o.getAttribute("href")) {
        let l = a.location.href, u = l.indexOf("#");
        r = u === -1 ? l : l.slice(0, u);
      }
      return r + "#" + (typeof s == "string" ? s : Ml(s));
    }
    function i(a, s) {
      Dh(a.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(s) + ")");
    }
    return uD(e, n, i, t);
  }
  function Nt(t, e) {
    if (t === false || t === null || typeof t > "u") throw new Error(e);
  }
  function Dh(t, e) {
    if (!t) {
      typeof console < "u" && console.warn(e);
      try {
        throw new Error(e);
      } catch {
      }
    }
  }
  function lD() {
    return Math.random().toString(36).substr(2, 8);
  }
  function wg(t, e) {
    return {
      usr: t.state,
      key: t.key,
      idx: e
    };
  }
  function Pf(t, e, n, i) {
    return n === void 0 && (n = null), xo({
      pathname: typeof t == "string" ? t : t.pathname,
      search: "",
      hash: ""
    }, typeof e == "string" ? ta(e) : e, {
      state: n,
      key: e && e.key || i || lD()
    });
  }
  function Ml(t) {
    let { pathname: e = "/", search: n = "", hash: i = "" } = t;
    return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i), e;
  }
  function ta(t) {
    let e = {};
    if (t) {
      let n = t.indexOf("#");
      n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
      let i = t.indexOf("?");
      i >= 0 && (e.search = t.substr(i), t = t.substr(0, i)), t && (e.pathname = t);
    }
    return e;
  }
  function uD(t, e, n, i) {
    i === void 0 && (i = {});
    let { window: a = document.defaultView, v5Compat: s = false } = i, o = a.history, r = In.Pop, l = null, u = c();
    u == null && (u = 0, o.replaceState(xo({}, o.state, {
      idx: u
    }), ""));
    function c() {
      return (o.state || {
        idx: null
      }).idx;
    }
    function f() {
      r = In.Pop;
      let b = c(), p = b == null ? null : b - u;
      u = b, l && l({
        action: r,
        location: y.location,
        delta: p
      });
    }
    function h(b, p) {
      r = In.Push;
      let m = Pf(y.location, b, p);
      n && n(m, b), u = c() + 1;
      let g = wg(m, u), S = y.createHref(m);
      try {
        o.pushState(g, "", S);
      } catch (T) {
        if (T instanceof DOMException && T.name === "DataCloneError") throw T;
        a.location.assign(S);
      }
      s && l && l({
        action: r,
        location: y.location,
        delta: 1
      });
    }
    function d(b, p) {
      r = In.Replace;
      let m = Pf(y.location, b, p);
      n && n(m, b), u = c();
      let g = wg(m, u), S = y.createHref(m);
      o.replaceState(g, "", S), s && l && l({
        action: r,
        location: y.location,
        delta: 0
      });
    }
    function v(b) {
      let p = a.location.origin !== "null" ? a.location.origin : a.location.href, m = typeof b == "string" ? b : Ml(b);
      return m = m.replace(/ $/, "%20"), Nt(p, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, p);
    }
    let y = {
      get action() {
        return r;
      },
      get location() {
        return t(a, o);
      },
      listen(b) {
        if (l) throw new Error("A history only accepts one active listener");
        return a.addEventListener(Sg, f), l = b, () => {
          a.removeEventListener(Sg, f), l = null;
        };
      },
      createHref(b) {
        return e(a, b);
      },
      createURL: v,
      encodeLocation(b) {
        let p = v(b);
        return {
          pathname: p.pathname,
          search: p.search,
          hash: p.hash
        };
      },
      push: h,
      replace: d,
      go(b) {
        return o.go(b);
      }
    };
    return y;
  }
  var Tg;
  (function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error";
  })(Tg || (Tg = {}));
  function cD(t, e, n) {
    return n === void 0 && (n = "/"), fD(t, e, n, false);
  }
  function fD(t, e, n, i) {
    let a = typeof e == "string" ? ta(e) : e, s = Oh(a.pathname || "/", n);
    if (s == null) return null;
    let o = wx(t);
    dD(o);
    let r = null;
    for (let l = 0; r == null && l < o.length; ++l) {
      let u = TD(s);
      r = SD(o[l], u, i);
    }
    return r;
  }
  function wx(t, e, n, i) {
    e === void 0 && (e = []), n === void 0 && (n = []), i === void 0 && (i = "");
    let a = (s, o, r) => {
      let l = {
        relativePath: r === void 0 ? s.path || "" : r,
        caseSensitive: s.caseSensitive === true,
        childrenIndex: o,
        route: s
      };
      l.relativePath.startsWith("/") && (Nt(l.relativePath.startsWith(i), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(i.length));
      let u = li([
        i,
        l.relativePath
      ]), c = n.concat(l);
      s.children && s.children.length > 0 && (Nt(s.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), wx(s.children, e, c, u)), !(s.path == null && !s.index) && e.push({
        path: u,
        score: bD(u, s.index),
        routesMeta: c
      });
    };
    return t.forEach((s, o) => {
      var r;
      if (s.path === "" || !((r = s.path) != null && r.includes("?"))) a(s, o);
      else for (let l of Tx(s.path)) a(s, o, l);
    }), e;
  }
  function Tx(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [n, ...i] = e, a = n.endsWith("?"), s = n.replace(/\?$/, "");
    if (i.length === 0) return a ? [
      s,
      ""
    ] : [
      s
    ];
    let o = Tx(i.join("/")), r = [];
    return r.push(...o.map((l) => l === "" ? s : [
      s,
      l
    ].join("/"))), a && r.push(...o), r.map((l) => t.startsWith("/") && l === "" ? "/" : l);
  }
  function dD(t) {
    t.sort((e, n) => e.score !== n.score ? n.score - e.score : xD(e.routesMeta.map((i) => i.childrenIndex), n.routesMeta.map((i) => i.childrenIndex)));
  }
  const hD = /^:[\w-]+$/, mD = 3, pD = 2, gD = 1, yD = 10, vD = -2, Eg = (t) => t === "*";
  function bD(t, e) {
    let n = t.split("/"), i = n.length;
    return n.some(Eg) && (i += vD), e && (i += pD), n.filter((a) => !Eg(a)).reduce((a, s) => a + (hD.test(s) ? mD : s === "" ? gD : yD), i);
  }
  function xD(t, e) {
    return t.length === e.length && t.slice(0, -1).every((i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0;
  }
  function SD(t, e, n) {
    let { routesMeta: i } = t, a = {}, s = "/", o = [];
    for (let r = 0; r < i.length; ++r) {
      let l = i[r], u = r === i.length - 1, c = s === "/" ? e : e.slice(s.length) || "/", f = Ag({
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: u
      }, c), h = l.route;
      if (!f && u && n && !i[i.length - 1].route.index && (f = Ag({
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: false
      }, c)), !f) return null;
      Object.assign(a, f.params), o.push({
        params: a,
        pathname: li([
          s,
          f.pathname
        ]),
        pathnameBase: MD(li([
          s,
          f.pathnameBase
        ])),
        route: h
      }), f.pathnameBase !== "/" && (s = li([
        s,
        f.pathnameBase
      ]));
    }
    return o;
  }
  function Ag(t, e) {
    typeof t == "string" && (t = {
      path: t,
      caseSensitive: false,
      end: true
    });
    let [n, i] = wD(t.path, t.caseSensitive, t.end), a = e.match(n);
    if (!a) return null;
    let s = a[0], o = s.replace(/(.)\/+$/, "$1"), r = a.slice(1);
    return {
      params: i.reduce((u, c, f) => {
        let { paramName: h, isOptional: d } = c;
        if (h === "*") {
          let y = r[f] || "";
          o = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
        }
        const v = r[f];
        return d && !v ? u[h] = void 0 : u[h] = (v || "").replace(/%2F/g, "/"), u;
      }, {}),
      pathname: s,
      pathnameBase: o,
      pattern: t
    };
  }
  function wD(t, e, n) {
    e === void 0 && (e = false), n === void 0 && (n = true), Dh(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = [], a = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, r, l) => (i.push({
      paramName: r,
      isOptional: l != null
    }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
      paramName: "*"
    }), a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"), [
      new RegExp(a, e ? void 0 : "i"),
      i
    ];
  }
  function TD(t) {
    try {
      return t.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
    } catch (e) {
      return Dh(false, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t;
    }
  }
  function Oh(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length, i = t.charAt(n);
    return i && i !== "/" ? null : t.slice(n) || "/";
  }
  function ED(t, e) {
    e === void 0 && (e = "/");
    let { pathname: n, search: i = "", hash: a = "" } = typeof t == "string" ? ta(t) : t;
    return {
      pathname: n ? n.startsWith("/") ? n : AD(n, e) : e,
      search: RD(i),
      hash: DD(a)
    };
  }
  function AD(t, e) {
    let n = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach((a) => {
      a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
    }), n.length > 1 ? n.join("/") : "/";
  }
  function fc(t, e, n, i) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
  }
  function CD(t) {
    return t.filter((e, n) => n === 0 || e.route.path && e.route.path.length > 0);
  }
  function Ex(t, e) {
    let n = CD(t);
    return e ? n.map((i, a) => a === n.length - 1 ? i.pathname : i.pathnameBase) : n.map((i) => i.pathnameBase);
  }
  function Ax(t, e, n, i) {
    i === void 0 && (i = false);
    let a;
    typeof t == "string" ? a = ta(t) : (a = xo({}, t), Nt(!a.pathname || !a.pathname.includes("?"), fc("?", "pathname", "search", a)), Nt(!a.pathname || !a.pathname.includes("#"), fc("#", "pathname", "hash", a)), Nt(!a.search || !a.search.includes("#"), fc("#", "search", "hash", a)));
    let s = t === "" || a.pathname === "", o = s ? "/" : a.pathname, r;
    if (o == null) r = n;
    else {
      let f = e.length - 1;
      if (!i && o.startsWith("..")) {
        let h = o.split("/");
        for (; h[0] === ".."; ) h.shift(), f -= 1;
        a.pathname = h.join("/");
      }
      r = f >= 0 ? e[f] : "/";
    }
    let l = ED(a, r), u = o && o !== "/" && o.endsWith("/"), c = (s || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
  }
  const li = (t) => t.join("/").replace(/\/\/+/g, "/"), MD = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), RD = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, DD = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
  function OD(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
  }
  const Cx = [
    "post",
    "put",
    "patch",
    "delete"
  ];
  new Set(Cx);
  const ND = [
    "get",
    ...Cx
  ];
  new Set(ND);
  function So() {
    return So = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    }, So.apply(this, arguments);
  }
  const Nh = x.createContext(null), jD = x.createContext(null), ea = x.createContext(null), du = x.createContext(null), na = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  }), Mx = x.createContext(null);
  function zD(t, e) {
    let { relative: n } = e === void 0 ? {} : e;
    Go() || Nt(false);
    let { basename: i, navigator: a } = x.useContext(ea), { hash: s, pathname: o, search: r } = Ox(t, {
      relative: n
    }), l = o;
    return i !== "/" && (l = o === "/" ? i : li([
      i,
      o
    ])), a.createHref({
      pathname: l,
      search: r,
      hash: s
    });
  }
  function Go() {
    return x.useContext(du) != null;
  }
  function Yo() {
    return Go() || Nt(false), x.useContext(du).location;
  }
  function Rx(t) {
    x.useContext(ea).static || x.useLayoutEffect(t);
  }
  function Dx() {
    let { isDataRoute: t } = x.useContext(na);
    return t ? FD() : _D();
  }
  function _D() {
    Go() || Nt(false);
    let t = x.useContext(Nh), { basename: e, future: n, navigator: i } = x.useContext(ea), { matches: a } = x.useContext(na), { pathname: s } = Yo(), o = JSON.stringify(Ex(a, n.v7_relativeSplatPath)), r = x.useRef(false);
    return Rx(() => {
      r.current = true;
    }), x.useCallback(function(u, c) {
      if (c === void 0 && (c = {}), !r.current) return;
      if (typeof u == "number") {
        i.go(u);
        return;
      }
      let f = Ax(u, JSON.parse(o), s, c.relative === "path");
      t == null && e !== "/" && (f.pathname = f.pathname === "/" ? e : li([
        e,
        f.pathname
      ])), (c.replace ? i.replace : i.push)(f, c.state, c);
    }, [
      e,
      i,
      o,
      s,
      t
    ]);
  }
  function Ox(t, e) {
    let { relative: n } = e === void 0 ? {} : e, { future: i } = x.useContext(ea), { matches: a } = x.useContext(na), { pathname: s } = Yo(), o = JSON.stringify(Ex(a, i.v7_relativeSplatPath));
    return x.useMemo(() => Ax(t, JSON.parse(o), s, n === "path"), [
      t,
      o,
      s,
      n
    ]);
  }
  function LD(t, e) {
    return VD(t, e);
  }
  function VD(t, e, n, i) {
    Go() || Nt(false);
    let { navigator: a } = x.useContext(ea), { matches: s } = x.useContext(na), o = s[s.length - 1], r = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = Yo(), c;
    if (e) {
      var f;
      let b = typeof e == "string" ? ta(e) : e;
      l === "/" || (f = b.pathname) != null && f.startsWith(l) || Nt(false), c = b;
    } else c = u;
    let h = c.pathname || "/", d = h;
    if (l !== "/") {
      let b = l.replace(/^\//, "").split("/");
      d = "/" + h.replace(/^\//, "").split("/").slice(b.length).join("/");
    }
    let v = cD(t, {
      pathname: d
    }), y = kD(v && v.map((b) => Object.assign({}, b, {
      params: Object.assign({}, r, b.params),
      pathname: li([
        l,
        a.encodeLocation ? a.encodeLocation(b.pathname).pathname : b.pathname
      ]),
      pathnameBase: b.pathnameBase === "/" ? l : li([
        l,
        a.encodeLocation ? a.encodeLocation(b.pathnameBase).pathname : b.pathnameBase
      ])
    })), s, n, i);
    return e && y ? x.createElement(du.Provider, {
      value: {
        location: So({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, c),
        navigationType: In.Pop
      }
    }, y) : y;
  }
  function BD() {
    let t = XD(), e = OD(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t), n = t instanceof Error ? t.stack : null, a = {
      padding: "0.5rem",
      backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, e), n ? x.createElement("pre", {
      style: a
    }, n) : null, null);
  }
  const UD = x.createElement(BD, null);
  class PD extends x.Component {
    constructor(e) {
      super(e), this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error
      };
    }
    static getDerivedStateFromError(e) {
      return {
        error: e
      };
    }
    static getDerivedStateFromProps(e, n) {
      return n.location !== e.location || n.revalidation !== "idle" && e.revalidation === "idle" ? {
        error: e.error,
        location: e.location,
        revalidation: e.revalidation
      } : {
        error: e.error !== void 0 ? e.error : n.error,
        location: n.location,
        revalidation: e.revalidation || n.revalidation
      };
    }
    componentDidCatch(e, n) {
      console.error("React Router caught the following error during render", e, n);
    }
    render() {
      return this.state.error !== void 0 ? x.createElement(na.Provider, {
        value: this.props.routeContext
      }, x.createElement(Mx.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  }
  function HD(t) {
    let { routeContext: e, match: n, children: i } = t, a = x.useContext(Nh);
    return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), x.createElement(na.Provider, {
      value: e
    }, i);
  }
  function kD(t, e, n, i) {
    var a;
    if (e === void 0 && (e = []), n === void 0 && (n = null), i === void 0 && (i = null), t == null) {
      var s;
      if (!n) return null;
      if (n.errors) t = n.matches;
      else if ((s = i) != null && s.v7_partialHydration && e.length === 0 && !n.initialized && n.matches.length > 0) t = n.matches;
      else return null;
    }
    let o = t, r = (a = n) == null ? void 0 : a.errors;
    if (r != null) {
      let c = o.findIndex((f) => f.route.id && (r == null ? void 0 : r[f.route.id]) !== void 0);
      c >= 0 || Nt(false), o = o.slice(0, Math.min(o.length, c + 1));
    }
    let l = false, u = -1;
    if (n && i && i.v7_partialHydration) for (let c = 0; c < o.length; c++) {
      let f = o[c];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id) {
        let { loaderData: h, errors: d } = n, v = f.route.loader && h[f.route.id] === void 0 && (!d || d[f.route.id] === void 0);
        if (f.route.lazy || v) {
          l = true, u >= 0 ? o = o.slice(0, u + 1) : o = [
            o[0]
          ];
          break;
        }
      }
    }
    return o.reduceRight((c, f, h) => {
      let d, v = false, y = null, b = null;
      n && (d = r && f.route.id ? r[f.route.id] : void 0, y = f.route.errorElement || UD, l && (u < 0 && h === 0 ? (v = true, b = null) : u === h && (v = true, b = f.route.hydrateFallbackElement || null)));
      let p = e.concat(o.slice(0, h + 1)), m = () => {
        let g;
        return d ? g = y : v ? g = b : f.route.Component ? g = x.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = c, x.createElement(HD, {
          match: f,
          routeContext: {
            outlet: c,
            matches: p,
            isDataRoute: n != null
          },
          children: g
        });
      };
      return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? x.createElement(PD, {
        location: n.location,
        revalidation: n.revalidation,
        component: y,
        error: d,
        children: m(),
        routeContext: {
          outlet: null,
          matches: p,
          isDataRoute: true
        }
      }) : m();
    }, null);
  }
  var Nx = function(t) {
    return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t;
  }(Nx || {}), Rl = function(t) {
    return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t;
  }(Rl || {});
  function GD(t) {
    let e = x.useContext(Nh);
    return e || Nt(false), e;
  }
  function YD(t) {
    let e = x.useContext(jD);
    return e || Nt(false), e;
  }
  function qD(t) {
    let e = x.useContext(na);
    return e || Nt(false), e;
  }
  function jx(t) {
    let e = qD(), n = e.matches[e.matches.length - 1];
    return n.route.id || Nt(false), n.route.id;
  }
  function XD() {
    var t;
    let e = x.useContext(Mx), n = YD(Rl.UseRouteError), i = jx(Rl.UseRouteError);
    return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[i];
  }
  function FD() {
    let { router: t } = GD(Nx.UseNavigateStable), e = jx(Rl.UseNavigateStable), n = x.useRef(false);
    return Rx(() => {
      n.current = true;
    }), x.useCallback(function(a, s) {
      s === void 0 && (s = {}), n.current && (typeof a == "number" ? t.navigate(a) : t.navigate(a, So({
        fromRouteId: e
      }, s)));
    }, [
      t,
      e
    ]);
  }
  function KD(t, e) {
    t == null ? void 0 : t.v7_startTransition, t == null ? void 0 : t.v7_relativeSplatPath;
  }
  function zs(t) {
    Nt(false);
  }
  function QD(t) {
    let { basename: e = "/", children: n = null, location: i, navigationType: a = In.Pop, navigator: s, static: o = false, future: r } = t;
    Go() && Nt(false);
    let l = e.replace(/^\/*/, "/"), u = x.useMemo(() => ({
      basename: l,
      navigator: s,
      static: o,
      future: So({
        v7_relativeSplatPath: false
      }, r)
    }), [
      l,
      r,
      s,
      o
    ]);
    typeof i == "string" && (i = ta(i));
    let { pathname: c = "/", search: f = "", hash: h = "", state: d = null, key: v = "default" } = i, y = x.useMemo(() => {
      let b = Oh(c, l);
      return b == null ? null : {
        location: {
          pathname: b,
          search: f,
          hash: h,
          state: d,
          key: v
        },
        navigationType: a
      };
    }, [
      l,
      c,
      f,
      h,
      d,
      v,
      a
    ]);
    return y == null ? null : x.createElement(ea.Provider, {
      value: u
    }, x.createElement(du.Provider, {
      children: n,
      value: y
    }));
  }
  function ZD(t) {
    let { children: e, location: n } = t;
    return LD(Hf(e), n);
  }
  new Promise(() => {
  });
  function Hf(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return x.Children.forEach(t, (i, a) => {
      if (!x.isValidElement(i)) return;
      let s = [
        ...e,
        a
      ];
      if (i.type === x.Fragment) {
        n.push.apply(n, Hf(i.props.children, s));
        return;
      }
      i.type !== zs && Nt(false), !i.props.index || !i.props.children || Nt(false);
      let o = {
        id: i.props.id || s.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy
      };
      i.props.children && (o.children = Hf(i.props.children, s)), n.push(o);
    }), n;
  }
  function kf() {
    return kf = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    }, kf.apply(this, arguments);
  }
  function $D(t, e) {
    if (t == null) return {};
    var n = {}, i = Object.keys(t), a, s;
    for (s = 0; s < i.length; s++) a = i[s], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n;
  }
  function ID(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
  }
  function JD(t, e) {
    return t.button === 0 && (!e || e === "_self") && !ID(t);
  }
  const WD = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition"
  ], tO = "6";
  try {
    window.__reactRouterVersion = tO;
  } catch {
  }
  const eO = "startTransition", Cg = ov[eO];
  function nO(t) {
    let { basename: e, children: n, future: i, window: a } = t, s = x.useRef();
    s.current == null && (s.current = rD({
      window: a,
      v5Compat: true
    }));
    let o = s.current, [r, l] = x.useState({
      action: o.action,
      location: o.location
    }), { v7_startTransition: u } = i || {}, c = x.useCallback((f) => {
      u && Cg ? Cg(() => l(f)) : l(f);
    }, [
      l,
      u
    ]);
    return x.useLayoutEffect(() => o.listen(c), [
      o,
      c
    ]), x.useEffect(() => KD(i), [
      i
    ]), x.createElement(QD, {
      basename: e,
      children: n,
      location: r.location,
      navigationType: r.action,
      navigator: o,
      future: i
    });
  }
  let iO, aO;
  iO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  aO = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  dc = x.forwardRef(function(e, n) {
    let { onClick: i, relative: a, reloadDocument: s, replace: o, state: r, target: l, to: u, preventScrollReset: c, viewTransition: f } = e, h = $D(e, WD), { basename: d } = x.useContext(ea), v, y = false;
    if (typeof u == "string" && aO.test(u) && (v = u, iO)) try {
      let g = new URL(window.location.href), S = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u), T = Oh(S.pathname, d);
      S.origin === g.origin && T != null ? u = T + S.search + S.hash : y = true;
    } catch {
    }
    let b = zD(u, {
      relative: a
    }), p = sO(u, {
      replace: o,
      state: r,
      target: l,
      preventScrollReset: c,
      relative: a,
      viewTransition: f
    });
    function m(g) {
      i && i(g), g.defaultPrevented || p(g);
    }
    return x.createElement("a", kf({}, h, {
      href: v || b,
      onClick: y || s ? i : m,
      ref: n,
      target: l
    }));
  });
  var Mg;
  (function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState";
  })(Mg || (Mg = {}));
  var Rg;
  (function(t) {
    t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration";
  })(Rg || (Rg = {}));
  function sO(t, e) {
    let { target: n, replace: i, state: a, preventScrollReset: s, relative: o, viewTransition: r } = e === void 0 ? {} : e, l = Dx(), u = Yo(), c = Ox(t, {
      relative: o
    });
    return x.useCallback((f) => {
      if (JD(f, n)) {
        f.preventDefault();
        let h = i !== void 0 ? i : Ml(u) === Ml(c);
        l(t, {
          replace: h,
          state: a,
          preventScrollReset: s,
          relative: o,
          viewTransition: r
        });
      }
    }, [
      u,
      l,
      c,
      i,
      a,
      n,
      t,
      s,
      o,
      r
    ]);
  }
  class oO extends x.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", {
        hasError: false
      });
    }
    static getDerivedStateFromError(e) {
      return {
        hasError: true,
        error: e
      };
    }
    componentDidCatch(e, n) {
      console.error("Uncaught error:", e, n);
    }
    render() {
      var _a5, _b3;
      return this.state.hasError ? w.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-background p-4",
        children: w.jsxs("div", {
          className: "text-center max-w-md",
          children: [
            w.jsx("h1", {
              className: "text-2xl font-bold text-destructive mb-4",
              children: "Something went wrong"
            }),
            w.jsx("p", {
              className: "text-muted-foreground mb-4",
              children: ((_a5 = this.state.error) == null ? void 0 : _a5.message) || "An unexpected error occurred"
            }),
            w.jsx("button", {
              onClick: () => window.location.reload(),
              className: "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",
              children: "Reload Page"
            }),
            w.jsxs("details", {
              className: "mt-4 text-left",
              children: [
                w.jsx("summary", {
                  className: "cursor-pointer text-sm text-muted-foreground",
                  children: "Error Details"
                }),
                w.jsx("pre", {
                  className: "mt-2 text-xs bg-muted p-2 rounded overflow-auto",
                  children: (_b3 = this.state.error) == null ? void 0 : _b3.stack
                })
              ]
            })
          ]
        })
      }) : this.props.children;
    }
  }
  let Dg;
  Xn = {
    name: "AMRITARAJ NAIR",
    short: "AMRIT",
    tagline: "CS Honors @ Texas A&M \xB7 builds AI products that ship",
    email: "amritnair23@gmail.com",
    phone: "214-316-6196",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/amritnair"
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/amritnair1"
      },
      {
        label: "Email",
        href: "mailto:amritnair23@gmail.com"
      },
      {
        label: "R\xE9sum\xE9 (PDF)",
        href: "Amritaraj_Nair_Resume.pdf"
      }
    ]
  };
  mj = [
    {
      id: "yc",
      name: "YC INTERNSHIP EXPO",
      detail: "Meeting YC-backed teams about summer engineering roles.",
      color: "#ff7a2f"
    },
    {
      id: "hackmit",
      name: "HACKMIT",
      detail: "Heading to Cambridge to build something ambitious in 36 hours.",
      color: "#31d8ff"
    }
  ];
  _s = [
    {
      id: "work",
      sign: "WORK",
      caption: "Internships, research & the fund",
      position: [
        -46,
        -46
      ],
      radius: 13,
      color: "#3b5bff",
      glow: "#8fa8ff",
      cards: [
        {
          id: "matic",
          title: "Matic",
          subtitle: "Software Engineer Intern",
          meta: "Jun 2026 \u2013 Aug 2026",
          body: "Shipped Pulsematic, an AI inbox-triage and auto-response system for athenaOne and other EHR platforms \u2014 giving physicians back 90+ minutes a day, roughly three more patients seen.",
          bullets: [
            "Architected a multi-agent orchestrator on GCP with Vertex AI to route, prioritise and draft across heterogeneous message types",
            "Built CI/CD pipelines on Google Cloud Build triggers, cutting release turnaround across services",
            "Engineered a PHI-compliant data pipeline on Firestore with strict access controls for protected health information at scale"
          ],
          tags: [
            "GCP",
            "Vertex AI",
            "Firestore",
            "Multi-agent",
            "CI/CD"
          ]
        },
        {
          id: "magnet",
          title: "MagNet Agents",
          subtitle: "Software Engineer Intern",
          meta: "May 2025 \u2013 Aug 2025",
          body: "Cornell-backed legal-tech startup at the intersection of law and AI. Built the systems that turned public records into qualified leads.",
          bullets: [
            "Engineered scraping + data pipelines extracting high-value legal lead data from public sources",
            "Built LLM-powered outreach generation for personalised messaging and opportunity summaries",
            "Shipped the lead matching and tracking backend behind a platform doing $50K+ ARR"
          ],
          tags: [
            "Python",
            "LLMs",
            "Web scraping",
            "Backend"
          ]
        },
        {
          id: "research",
          title: "AI Modeling for Bio-Economic Systems",
          subtitle: "Undergraduate Research \xB7 Texas A&M",
          meta: "Aug 2025 \u2013 Present",
          body: "Agent-based modeling and ML to optimise livestock nutrition under economic and environmental constraints.",
          bullets: [
            "Applied Mesa agent-based modeling + machine learning to nutrition optimisation",
            "Migrated legacy R workflows to Python for reproducibility and scale",
            "Built cross-platform simulations in Python, Java and NetLogo"
          ],
          tags: [
            "Mesa",
            "Python",
            "NetLogo",
            "ML"
          ]
        },
        {
          id: "maroon",
          title: "Maroon Fund \u2014 Scholars of Finance",
          subtitle: "Quantitative Developer",
          meta: "Feb 2025 \u2013 Present",
          body: "Quant tooling for a $70K+ student-managed fund.",
          bullets: [
            "Built quantitative models and screening frameworks for equity research",
            "Engineered data pipelines and valuation tools over financial datasets",
            "Automated research workflows feeding stock pitches and portfolio decisions"
          ],
          tags: [
            "Quant",
            "Pandas",
            "Valuation"
          ]
        }
      ]
    },
    {
      id: "builds",
      sign: "BUILDS",
      caption: "Things I made from zero",
      position: [
        46,
        -46
      ],
      radius: 14,
      color: "#00d68f",
      glow: "#7dffd0",
      cards: [
        {
          id: "alphaforge",
          title: "AlphaForge",
          subtitle: "Founder & Solo Developer",
          meta: "March 2026",
          body: "The Robinhood + Scratch for aspiring quants. A full-stack platform to design, backtest and deploy trading strategies.",
          bullets: [
            "Multi-level Quant IDE: Scratch-like builder for beginners, multi-language editor for advanced users",
            "Backtesting and paper-trading engine over real historical data",
            "Real-time tracker for stocks, ETFs, indices and crypto with analytics and news",
            "Interactive learning layer that explains financial metrics inline",
            "Yahoo Finance, Alpaca and Seeking Alpha integrations, deployed on Vercel"
          ],
          tags: [
            "React",
            "TypeScript",
            "FastAPI",
            "Alpaca",
            "Vercel"
          ],
          links: [
            {
              label: "Live site",
              href: "https://alphaforgeai.lovable.app"
            }
          ]
        },
        {
          id: "shotsensei",
          title: "Shot Sensei",
          subtitle: "Lead Developer & Co-Founder",
          meta: "Mar 2026 \u2013 Present",
          body: "Computer-vision pickleball coach and AI opponent. Won Hook'em Hacks 2026 and got invited back to McCombs to pitch Pear VC.",
          bullets: [
            "Real-time mode where you rally against an AI bot, anywhere",
            "Training mode using Gemini + ElevenLabs to coach serve, volley, forehand and backhand",
            "Pose and shot detection with OpenCV and YOLOv8 for stroke classification",
            "Supabase backend tracking win/loss records and shot-level scoring",
            "Pitched to Pear VC (Khalil Fuller) at UT Austin McCombs"
          ],
          tags: [
            "OpenCV",
            "YOLOv8",
            "Gemini",
            "ElevenLabs",
            "Supabase"
          ],
          links: [
            {
              label: "Live site",
              href: "https://playshotsensei.com"
            },
            {
              label: "Demo video",
              href: "https://www.youtube.com/watch?v=v3SNs0O3G5g"
            }
          ]
        },
        {
          id: "clinicalhours",
          title: "ClinicalHours",
          subtitle: "CTO & Lead Engineer",
          meta: "Dec 2025 \u2013 Present",
          body: "An AI virtual receptionist that books clinical hours for pre-med students while they sleep. Placed in the top 10% of the Spring 2026 Y Combinator batch.",
          bullets: [
            "Top 10% of the Spring 2026 Y Combinator batch",
            "Email + call automation over the Gmail API and GoHighLevel to schedule clinic meetings",
            "MapBox and Google APIs for geolocation-based clinic discovery",
            "Processed large-scale U.S. hospital datasets in Python into production-ready formats",
            "Premium AI r\xE9sum\xE9 and application tooling on OpenAI + Gemini",
            "Partnered with clinics including BCS Free Health Clinic"
          ],
          tags: [
            "Gmail API",
            "GoHighLevel",
            "MapBox",
            "OpenAI",
            "Gemini"
          ],
          links: [
            {
              label: "Live site",
              href: "https://clinicalhours.org"
            }
          ]
        },
        {
          id: "harbor",
          title: "Harbor",
          subtitle: "Disaster preparedness platform",
          meta: "TidalTAMU 2026",
          body: "Helps communities plan for, coordinate during and recover from emergencies. 1st place in the Google Gemini track.",
          bullets: [
            "AI-powered resource matching for disaster response",
            "Community coordination and communication tooling",
            "Built on Google Gemini for decision support"
          ],
          tags: [
            "React",
            "Gemini",
            "Supabase"
          ],
          links: [
            {
              label: "Live site",
              href: "https://harbordisaster.xyz"
            }
          ]
        },
        {
          id: "security",
          title: "Cyber Reasoning Systems Research",
          subtitle: "Texas A&M",
          meta: "Ongoing",
          body: "Benchmarked LLM-powered Cyber Reasoning Systems \u2014 Theori RoboDuck and TAMU AYNIAFB \u2014 on real-world repositories.",
          bullets: [
            "Evaluated automated vulnerability detection across C, Python and Java codebases",
            "Analysed reliability and generalisation across heterogeneous systems"
          ],
          tags: [
            "Security",
            "LLM eval",
            "Python"
          ],
          links: [
            {
              label: "Background",
              href: "https://theori.io/blog/aixcc-and-roboduck-63447"
            }
          ]
        }
      ]
    },
    {
      id: "wins",
      sign: "WINS",
      caption: "Awards, scholarships & hardware",
      position: [
        -54,
        54
      ],
      radius: 13,
      color: "#ffb32f",
      glow: "#ffe08a",
      cards: [
        {
          id: "awards",
          title: "Awards",
          subtitle: "Trophies on the shelf",
          body: "Knock the trophies over with the dog. They respawn.",
          bullets: [
            "Hook'em Hacks 2026 (UT Austin) \u2014 Most Startup Ready + Multimodal Track winner",
            "TidalTAMU 2026 \u2014 Google Gemini Track, 1st place",
            "Outstanding Undergraduate Researcher Award",
            "President's Endowed Scholar",
            "Google Labs Makeathon",
            "FRC 4192 Impact Award"
          ]
        },
        {
          id: "education",
          title: "Texas A&M University",
          subtitle: "B.S. Computer Science Honors, Minor in Mathematics",
          meta: "Expected May 2029",
          body: "Coursework: Data Structures & Algorithms, C++ Design, Discrete Structures, Engineering Calculus III, Python Programming.",
          bullets: [],
          tags: [
            "Honors",
            "Math minor"
          ]
        },
        {
          id: "stack",
          title: "Toolbox",
          subtitle: "What I reach for",
          body: "",
          bullets: [
            "Languages \u2014 Python, C++, Java, TypeScript, SQL",
            "Frameworks \u2014 React, Flask, FastAPI, Pandas, NumPy, Matplotlib",
            "Tools \u2014 Git, Docker, AWS EC2/IAM, Google Cloud, Supabase, CI/CD"
          ],
          tags: [
            "Python",
            "C++",
            "TypeScript",
            "React",
            "Docker",
            "GCP"
          ]
        }
      ]
    },
    {
      id: "next",
      sign: "NEXT",
      caption: "Where I'll be soon",
      position: [
        54,
        54
      ],
      radius: 13,
      color: "#ff4d9d",
      glow: "#ffa6d0",
      cards: [
        {
          id: "upcoming",
          title: "Upcoming",
          subtitle: "On the calendar",
          body: "Two things I'm heading to next \u2014 come say hi at either.",
          bullets: [
            "YC Internship Expo \u2014 meeting YC-backed teams about summer engineering roles",
            "HackMIT \u2014 building something ambitious in Cambridge over 36 hours"
          ],
          tags: [
            "YC Internship Expo",
            "HackMIT"
          ]
        },
        {
          id: "contact",
          title: "Get in touch",
          subtitle: "Fastest ways to reach me",
          body: "Always up for talking about AI products, quant tooling or a good hackathon idea.",
          bullets: [
            `Email \u2014 ${Xn.email}`,
            `Phone \u2014 ${Xn.phone}`,
            "Available year-round \u2014 internship, part-time or full-time research and engineering roles"
          ],
          links: Xn.links
        }
      ]
    }
  ];
  pj = Object.fromEntries(_s.map((t) => [
    t.id,
    t
  ]));
  Dg = (t) => t.startsWith("http") || t.startsWith("mailto:") ? t : `/amritaraj-nair-portfolio/${t}`;
  function rO() {
    const [t, e] = x.useState(_s[0].id);
    return x.useEffect(() => {
      const n = new IntersectionObserver((i) => {
        const a = i.filter((s) => s.isIntersecting);
        a[0] && e(a[0].target.id);
      }, {
        rootMargin: "-20% 0px -70% 0px"
      });
      return _s.forEach((i) => {
        const a = document.getElementById(i.id);
        a && n.observe(a);
      }), () => n.disconnect();
    }, []), w.jsxs("main", {
      className: "min-h-screen bg-[#08061a] text-white",
      children: [
        w.jsx("style", {
          children: `
        @keyframes rise { from { opacity:0; transform:translateY(18px) } to { opacity:1; transform:none } }
      `
        }),
        w.jsxs("header", {
          className: "relative overflow-hidden border-b border-white/10 px-6 pb-14 pt-16 sm:px-10",
          children: [
            w.jsx("div", {
              "aria-hidden": true,
              className: "pointer-events-none absolute inset-0 opacity-70",
              style: {
                background: "radial-gradient(70rem 30rem at 20% -10%, #3b2b8f55, transparent 60%), radial-gradient(50rem 24rem at 90% 0%, #c341ff22, transparent 60%)"
              }
            }),
            w.jsxs("div", {
              className: "relative mx-auto max-w-4xl",
              children: [
                w.jsx("p", {
                  className: "font-mono text-[0.62rem] uppercase tracking-[0.42em] text-[#9d8bff]",
                  children: "Portfolio"
                }),
                w.jsx("h1", {
                  className: "mt-3 text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl",
                  children: w.jsx("span", {
                    className: "bg-gradient-to-br from-[#c9d4ff] via-white to-[#8f7bff] bg-clip-text text-transparent",
                    children: Xn.name
                  })
                }),
                w.jsx("p", {
                  className: "mt-4 max-w-xl text-base text-[#b9b2e8]",
                  children: Xn.tagline
                }),
                w.jsxs("div", {
                  className: "mt-7 flex flex-wrap items-center gap-3",
                  children: [
                    w.jsx(dc, {
                      to: "/",
                      className: "rounded-full bg-gradient-to-r from-[#5b4bff] to-[#c341ff] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:scale-[1.03]",
                      children: "\u25B6 Play the world"
                    }),
                    w.jsx(dc, {
                      to: "/resume",
                      className: "rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b9b2e8] transition hover:border-white/35 hover:text-white",
                      children: "R\xE9sum\xE9"
                    })
                  ]
                }),
                w.jsx("div", {
                  className: "mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm",
                  children: Xn.links.map((n) => w.jsx("a", {
                    href: Dg(n.href),
                    target: "_blank",
                    rel: "noreferrer noopener",
                    className: "text-[#b9b2e8] underline decoration-[#6b5fd1] underline-offset-4 transition hover:text-white",
                    children: n.label
                  }, n.label))
                })
              ]
            })
          ]
        }),
        w.jsx("nav", {
          className: "sticky top-0 z-20 border-b border-white/10 bg-[#08061a]/92 backdrop-blur-xl",
          children: w.jsx("div", {
            className: "mx-auto flex max-w-4xl gap-1 overflow-x-auto px-6 py-2.5 sm:px-10",
            children: _s.map((n) => w.jsx("a", {
              href: `#${n.id}`,
              className: "shrink-0 rounded-full px-3.5 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] transition",
              style: t === n.id ? {
                background: `${n.color}22`,
                color: n.glow
              } : {
                color: "#7b74ab"
              },
              children: n.sign
            }, n.id))
          })
        }),
        w.jsx("div", {
          className: "mx-auto max-w-4xl px-6 pb-24 sm:px-10",
          children: _s.map((n) => w.jsxs("section", {
            id: n.id,
            className: "scroll-mt-16 pt-14",
            children: [
              w.jsxs("div", {
                className: "flex items-baseline gap-3",
                children: [
                  w.jsx("span", {
                    "aria-hidden": true,
                    className: "h-3 w-3 rounded-sm",
                    style: {
                      background: n.glow,
                      boxShadow: `0 0 16px ${n.glow}`
                    }
                  }),
                  w.jsx("h2", {
                    className: "text-2xl font-black tracking-tight sm:text-3xl",
                    children: n.sign
                  }),
                  w.jsx("p", {
                    className: "text-xs uppercase tracking-[0.18em]",
                    style: {
                      color: n.glow
                    },
                    children: n.caption
                  })
                ]
              }),
              w.jsx("div", {
                className: "mt-6 space-y-3",
                children: n.cards.map((i, a) => w.jsxs("article", {
                  className: "relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.018] p-6 pl-7 transition-colors hover:border-white/20",
                  style: {
                    animation: `rise 0.5s ease-out ${a * 60}ms both`
                  },
                  children: [
                    w.jsx("span", {
                      "aria-hidden": true,
                      className: "absolute inset-y-5 left-0 w-[3px] rounded-full",
                      style: {
                        background: `linear-gradient(${n.glow}, transparent)`
                      }
                    }),
                    w.jsxs("div", {
                      className: "flex flex-wrap items-baseline justify-between gap-2",
                      children: [
                        w.jsx("h3", {
                          className: "text-lg font-black tracking-tight",
                          children: i.title
                        }),
                        i.meta && w.jsx("span", {
                          className: "rounded-md bg-black/40 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-[#8a83bb]",
                          children: i.meta
                        })
                      ]
                    }),
                    w.jsx("p", {
                      className: "mt-0.5 text-sm font-semibold",
                      style: {
                        color: n.glow
                      },
                      children: i.subtitle
                    }),
                    i.body && w.jsx("p", {
                      className: "mt-3 text-[0.9rem] leading-relaxed text-[#c2bce6]",
                      children: i.body
                    }),
                    i.bullets.length > 0 && w.jsx("ul", {
                      className: "mt-4 space-y-2 border-t border-white/[0.07] pt-4",
                      children: i.bullets.map((s) => w.jsxs("li", {
                        className: "flex gap-3 text-[0.86rem] leading-relaxed",
                        children: [
                          w.jsx("span", {
                            "aria-hidden": true,
                            className: "mt-[0.45rem] h-1 w-1 shrink-0 rounded-full",
                            style: {
                              background: n.glow
                            }
                          }),
                          w.jsx("span", {
                            className: "text-[#a8a1d4]",
                            children: lO(s, n.glow)
                          })
                        ]
                      }, s))
                    }),
                    i.tags && i.tags.length > 0 && w.jsx("div", {
                      className: "mt-4 flex flex-wrap gap-1.5",
                      children: i.tags.map((s) => w.jsx("span", {
                        className: "rounded-md border px-2 py-[0.15rem] font-mono text-[0.6rem]",
                        style: {
                          borderColor: `${n.color}40`,
                          background: `${n.color}12`,
                          color: n.glow
                        },
                        children: s
                      }, s))
                    }),
                    i.links && i.links.length > 0 && w.jsx("div", {
                      className: "mt-4 flex flex-wrap gap-2",
                      children: i.links.map((s) => w.jsxs("a", {
                        href: Dg(s.href),
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: "group inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[0.74rem] font-bold text-[#08061a] transition hover:brightness-110",
                        style: {
                          backgroundColor: n.glow
                        },
                        children: [
                          s.label,
                          w.jsx("span", {
                            className: "transition-transform group-hover:translate-x-0.5",
                            children: "\u2192"
                          })
                        ]
                      }, s.label))
                    })
                  ]
                }, i.id))
              })
            ]
          }, n.id))
        }),
        w.jsx("footer", {
          className: "border-t border-white/10 px-6 py-10 sm:px-10",
          children: w.jsxs("div", {
            className: "mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4",
            children: [
              w.jsxs("p", {
                className: "font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[#635c93]",
                children: [
                  Xn.email,
                  " \xB7 ",
                  Xn.phone
                ]
              }),
              w.jsx(dc, {
                to: "/",
                className: "font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[#9d8bff] transition hover:text-white",
                children: "\u2190 Back to the world"
              })
            ]
          })
        })
      ]
    });
  }
  function lO(t, e) {
    return t.split(/(\$?\d[\d,.]*\+?%?[KMB]?\+?)/g).map((i, a) => /^\$?\d/.test(i) ? w.jsx("strong", {
      style: {
        color: e
      },
      className: "font-bold",
      children: i
    }, a) : w.jsx("span", {
      children: i
    }, a));
  }
  const zx = x.createContext({});
  function uO(t) {
    const e = x.useRef(null);
    return e.current === null && (e.current = t()), e.current;
  }
  const _x = typeof window < "u", cO = _x ? x.useLayoutEffect : x.useEffect, jh = x.createContext(null);
  function zh(t, e) {
    t.indexOf(e) === -1 && t.push(e);
  }
  function Dl(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }
  const nn = (t, e, n) => n > e ? e : n < t ? t : n;
  let hu = () => {
  }, ts = () => {
  };
  const Dn = {}, Lx = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
  function Vx(t) {
    return typeof t == "object" && t !== null;
  }
  const Bx = (t) => /^0[^.\s]+$/u.test(t);
  function _h(t) {
    let e;
    return () => (e === void 0 && (e = t()), e);
  }
  const Oe = (t) => t, fO = (t, e) => (n) => e(t(n)), qo = (...t) => t.reduce(fO), wo = (t, e, n) => {
    const i = e - t;
    return i === 0 ? 1 : (n - t) / i;
  };
  class Lh {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return zh(this.subscriptions, e), () => Dl(this.subscriptions, e);
    }
    notify(e, n, i) {
      const a = this.subscriptions.length;
      if (a) if (a === 1) this.subscriptions[0](e, n, i);
      else for (let s = 0; s < a; s++) {
        const o = this.subscriptions[s];
        o && o(e, n, i);
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  const Ne = (t) => t * 1e3, Me = (t) => t / 1e3;
  function Ux(t, e) {
    return e ? t * (1e3 / e) : 0;
  }
  const Px = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, dO = 1e-7, hO = 12;
  function mO(t, e, n, i, a) {
    let s, o, r = 0;
    do
      o = e + (n - e) / 2, s = Px(o, i, a) - t, s > 0 ? n = o : e = o;
    while (Math.abs(s) > dO && ++r < hO);
    return o;
  }
  function Xo(t, e, n, i) {
    if (t === e && n === i) return Oe;
    const a = (s) => mO(s, 0, 1, t, n);
    return (s) => s === 0 || s === 1 ? s : Px(a(s), e, i);
  }
  const Hx = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, kx = (t) => (e) => 1 - t(1 - e), Gx = Xo(0.33, 1.53, 0.69, 0.99), Vh = kx(Gx), Yx = Hx(Vh), qx = (t) => (t *= 2) < 1 ? 0.5 * Vh(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Bh = (t) => 1 - Math.sin(Math.acos(t)), Xx = kx(Bh), Fx = Hx(Bh), pO = Xo(0.42, 0, 1, 1), gO = Xo(0, 0, 0.58, 1), Kx = Xo(0.42, 0, 0.58, 1), yO = (t) => Array.isArray(t) && typeof t[0] != "number", Qx = (t) => Array.isArray(t) && typeof t[0] == "number", Og = {
    linear: Oe,
    easeIn: pO,
    easeInOut: Kx,
    easeOut: gO,
    circIn: Bh,
    circInOut: Fx,
    circOut: Xx,
    backIn: Vh,
    backInOut: Yx,
    backOut: Gx,
    anticipate: qx
  }, vO = (t) => typeof t == "string", Ng = (t) => {
    if (Qx(t)) {
      ts(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
      const [e, n, i, a] = t;
      return Xo(e, n, i, a);
    } else if (vO(t)) return ts(Og[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), Og[t];
    return t;
  }, gr = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender"
  ], jg = {
    value: null,
    addProjectionMetrics: null
  };
  function bO(t, e) {
    let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = false, s = false;
    const o = /* @__PURE__ */ new WeakSet();
    let r = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    }, l = 0;
    function u(f) {
      o.has(f) && (c.schedule(f), t()), l++, f(r);
    }
    const c = {
      schedule: (f, h = false, d = false) => {
        const y = d && a ? n : i;
        return h && o.add(f), y.has(f) || y.add(f), f;
      },
      cancel: (f) => {
        i.delete(f), o.delete(f);
      },
      process: (f) => {
        if (r = f, a) {
          s = true;
          return;
        }
        a = true, [n, i] = [
          i,
          n
        ], n.forEach(u), e && jg.value && jg.value.frameloop[e].push(l), l = 0, n.clear(), a = false, s && (s = false, c.process(f));
      }
    };
    return c;
  }
  const xO = 40;
  function Zx(t, e) {
    let n = false, i = true;
    const a = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    }, s = () => n = true, o = gr.reduce((g, S) => (g[S] = bO(s, e ? S : void 0), g), {}), { setup: r, read: l, resolveKeyframes: u, preUpdate: c, update: f, preRender: h, render: d, postRender: v } = o, y = () => {
      const g = Dn.useManualTiming ? a.timestamp : performance.now();
      n = false, Dn.useManualTiming || (a.delta = i ? 1e3 / 60 : Math.max(Math.min(g - a.timestamp, xO), 1)), a.timestamp = g, a.isProcessing = true, r.process(a), l.process(a), u.process(a), c.process(a), f.process(a), h.process(a), d.process(a), v.process(a), a.isProcessing = false, n && e && (i = false, t(y));
    }, b = () => {
      n = true, i = true, a.isProcessing || t(y);
    };
    return {
      schedule: gr.reduce((g, S) => {
        const T = o[S];
        return g[S] = (A, E = false, C = false) => (n || b(), T.schedule(A, E, C)), g;
      }, {}),
      cancel: (g) => {
        for (let S = 0; S < gr.length; S++) o[gr[S]].cancel(g);
      },
      state: a,
      steps: o
    };
  }
  const { schedule: ct, cancel: yi, state: Pt, steps: hc } = Zx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Oe, true);
  let Pr;
  function SO() {
    Pr = void 0;
  }
  const Zt = {
    now: () => (Pr === void 0 && Zt.set(Pt.isProcessing || Dn.useManualTiming ? Pt.timestamp : performance.now()), Pr),
    set: (t) => {
      Pr = t, queueMicrotask(SO);
    }
  }, $x = (t) => (e) => typeof e == "string" && e.startsWith(t), Ix = $x("--"), wO = $x("var(--"), Uh = (t) => wO(t) ? TO.test(t.split("/*")[0].trim()) : false, TO = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  function zg(t) {
    return typeof t != "string" ? false : t.split("/*")[0].includes("var(--");
  }
  const hs = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t
  }, To = {
    ...hs,
    transform: (t) => nn(0, 1, t)
  }, yr = {
    ...hs,
    default: 1
  }, Is = (t) => Math.round(t * 1e5) / 1e5, Ph = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function EO(t) {
    return t == null;
  }
  const AO = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Hh = (t, e) => (n) => !!(typeof n == "string" && AO.test(n) && n.startsWith(t) || e && !EO(n) && Object.prototype.hasOwnProperty.call(n, e)), Jx = (t, e, n) => (i) => {
    if (typeof i != "string") return i;
    const [a, s, o, r] = i.match(Ph);
    return {
      [t]: parseFloat(a),
      [e]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: r !== void 0 ? parseFloat(r) : 1
    };
  }, CO = (t) => nn(0, 255, t), mc = {
    ...hs,
    transform: (t) => Math.round(CO(t))
  }, Li = {
    test: Hh("rgb", "red"),
    parse: Jx("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + mc.transform(t) + ", " + mc.transform(e) + ", " + mc.transform(n) + ", " + Is(To.transform(i)) + ")"
  };
  function MO(t) {
    let e = "", n = "", i = "", a = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), a = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), a = t.substring(4, 5), e += e, n += n, i += i, a += a), {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(i, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1
    };
  }
  const Gf = {
    test: Hh("#"),
    parse: MO,
    transform: Li.transform
  }, Fo = (t) => ({
    test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`
  }), Un = Fo("deg"), tn = Fo("%"), B = Fo("px"), RO = Fo("vh"), DO = Fo("vw"), _g = {
    ...tn,
    parse: (t) => tn.parse(t) / 100,
    transform: (t) => tn.transform(t * 100)
  }, Ca = {
    test: Hh("hsl", "hue"),
    parse: Jx("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + tn.transform(Is(e)) + ", " + tn.transform(Is(n)) + ", " + Is(To.transform(i)) + ")"
  }, Ct = {
    test: (t) => Li.test(t) || Gf.test(t) || Ca.test(t),
    parse: (t) => Li.test(t) ? Li.parse(t) : Ca.test(t) ? Ca.parse(t) : Gf.parse(t),
    transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Li.transform(t) : Ca.transform(t),
    getAnimatableNone: (t) => {
      const e = Ct.parse(t);
      return e.alpha = 0, Ct.transform(e);
    }
  }, OO = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function NO(t) {
    var _a5, _b3;
    return isNaN(t) && typeof t == "string" && (((_a5 = t.match(Ph)) == null ? void 0 : _a5.length) || 0) + (((_b3 = t.match(OO)) == null ? void 0 : _b3.length) || 0) > 0;
  }
  const Wx = "number", tS = "color", jO = "var", zO = "var(", Lg = "${}", _O = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function Eo(t) {
    const e = t.toString(), n = [], i = {
      color: [],
      number: [],
      var: []
    }, a = [];
    let s = 0;
    const r = e.replace(_O, (l) => (Ct.test(l) ? (i.color.push(s), a.push(tS), n.push(Ct.parse(l))) : l.startsWith(zO) ? (i.var.push(s), a.push(jO), n.push(l)) : (i.number.push(s), a.push(Wx), n.push(parseFloat(l))), ++s, Lg)).split(Lg);
    return {
      values: n,
      split: r,
      indexes: i,
      types: a
    };
  }
  function eS(t) {
    return Eo(t).values;
  }
  function nS(t) {
    const { split: e, types: n } = Eo(t), i = e.length;
    return (a) => {
      let s = "";
      for (let o = 0; o < i; o++) if (s += e[o], a[o] !== void 0) {
        const r = n[o];
        r === Wx ? s += Is(a[o]) : r === tS ? s += Ct.transform(a[o]) : s += a[o];
      }
      return s;
    };
  }
  const LO = (t) => typeof t == "number" ? 0 : Ct.test(t) ? Ct.getAnimatableNone(t) : t;
  function VO(t) {
    const e = eS(t);
    return nS(t)(e.map(LO));
  }
  const vi = {
    test: NO,
    parse: eS,
    createTransformer: nS,
    getAnimatableNone: VO
  };
  function pc(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
  }
  function BO({ hue: t, saturation: e, lightness: n, alpha: i }) {
    t /= 360, e /= 100, n /= 100;
    let a = 0, s = 0, o = 0;
    if (!e) a = s = o = n;
    else {
      const r = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - r;
      a = pc(l, r, t + 1 / 3), s = pc(l, r, t), o = pc(l, r, t - 1 / 3);
    }
    return {
      red: Math.round(a * 255),
      green: Math.round(s * 255),
      blue: Math.round(o * 255),
      alpha: i
    };
  }
  function Ol(t, e) {
    return (n) => n > 0 ? e : t;
  }
  const xt = (t, e, n) => t + (e - t) * n, gc = (t, e, n) => {
    const i = t * t, a = n * (e * e - i) + i;
    return a < 0 ? 0 : Math.sqrt(a);
  }, UO = [
    Gf,
    Li,
    Ca
  ], PO = (t) => UO.find((e) => e.test(t));
  function Vg(t) {
    const e = PO(t);
    if (hu(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return false;
    let n = e.parse(t);
    return e === Ca && (n = BO(n)), n;
  }
  const Bg = (t, e) => {
    const n = Vg(t), i = Vg(e);
    if (!n || !i) return Ol(t, e);
    const a = {
      ...n
    };
    return (s) => (a.red = gc(n.red, i.red, s), a.green = gc(n.green, i.green, s), a.blue = gc(n.blue, i.blue, s), a.alpha = xt(n.alpha, i.alpha, s), Li.transform(a));
  }, Yf = /* @__PURE__ */ new Set([
    "none",
    "hidden"
  ]);
  function HO(t, e) {
    return Yf.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
  }
  function kO(t, e) {
    return (n) => xt(t, e, n);
  }
  function kh(t) {
    return typeof t == "number" ? kO : typeof t == "string" ? Uh(t) ? Ol : Ct.test(t) ? Bg : qO : Array.isArray(t) ? iS : typeof t == "object" ? Ct.test(t) ? Bg : GO : Ol;
  }
  function iS(t, e) {
    const n = [
      ...t
    ], i = n.length, a = t.map((s, o) => kh(s)(s, e[o]));
    return (s) => {
      for (let o = 0; o < i; o++) n[o] = a[o](s);
      return n;
    };
  }
  function GO(t, e) {
    const n = {
      ...t,
      ...e
    }, i = {};
    for (const a in n) t[a] !== void 0 && e[a] !== void 0 && (i[a] = kh(t[a])(t[a], e[a]));
    return (a) => {
      for (const s in i) n[s] = i[s](a);
      return n;
    };
  }
  function YO(t, e) {
    const n = [], i = {
      color: 0,
      var: 0,
      number: 0
    };
    for (let a = 0; a < e.values.length; a++) {
      const s = e.types[a], o = t.indexes[s][i[s]], r = t.values[o] ?? 0;
      n[a] = r, i[s]++;
    }
    return n;
  }
  const qO = (t, e) => {
    const n = vi.createTransformer(e), i = Eo(t), a = Eo(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? Yf.has(t) && !a.values.length || Yf.has(e) && !i.values.length ? HO(t, e) : qo(iS(YO(i, a), a.values), n) : (hu(true, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Ol(t, e));
  };
  function aS(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? xt(t, e, n) : kh(t)(t, e);
  }
  const XO = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: (n = true) => ct.update(e, n),
      stop: () => yi(e),
      now: () => Pt.isProcessing ? Pt.timestamp : Zt.now()
    };
  }, sS = (t, e, n = 10) => {
    let i = "";
    const a = Math.max(Math.round(e / n), 2);
    for (let s = 0; s < a; s++) i += Math.round(t(s / (a - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${i.substring(0, i.length - 2)})`;
  }, Nl = 2e4;
  function Gh(t) {
    let e = 0;
    const n = 50;
    let i = t.next(e);
    for (; !i.done && e < Nl; ) e += n, i = t.next(e);
    return e >= Nl ? 1 / 0 : e;
  }
  function FO(t, e = 100, n) {
    const i = n({
      ...t,
      keyframes: [
        0,
        e
      ]
    }), a = Math.min(Gh(i), Nl);
    return {
      type: "keyframes",
      ease: (s) => i.next(a * s).value / e,
      duration: Me(a)
    };
  }
  const KO = 5;
  function oS(t, e, n) {
    const i = Math.max(e - KO, 0);
    return Ux(n - t(i), e - i);
  }
  const bt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: {
      granular: 0.01,
      default: 2
    },
    restDelta: {
      granular: 5e-3,
      default: 0.5
    },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1
  }, yc = 1e-3;
  function QO({ duration: t = bt.duration, bounce: e = bt.bounce, velocity: n = bt.velocity, mass: i = bt.mass }) {
    let a, s;
    hu(t <= Ne(bt.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let o = 1 - e;
    o = nn(bt.minDamping, bt.maxDamping, o), t = nn(bt.minDuration, bt.maxDuration, Me(t)), o < 1 ? (a = (u) => {
      const c = u * o, f = c * t, h = c - n, d = qf(u, o), v = Math.exp(-f);
      return yc - h / d * v;
    }, s = (u) => {
      const f = u * o * t, h = f * n + n, d = Math.pow(o, 2) * Math.pow(u, 2) * t, v = Math.exp(-f), y = qf(Math.pow(u, 2), o);
      return (-a(u) + yc > 0 ? -1 : 1) * ((h - d) * v) / y;
    }) : (a = (u) => {
      const c = Math.exp(-u * t), f = (u - n) * t + 1;
      return -yc + c * f;
    }, s = (u) => {
      const c = Math.exp(-u * t), f = (n - u) * (t * t);
      return c * f;
    });
    const r = 5 / t, l = $O(a, s, r);
    if (t = Ne(t), isNaN(l)) return {
      stiffness: bt.stiffness,
      damping: bt.damping,
      duration: t
    };
    {
      const u = Math.pow(l, 2) * i;
      return {
        stiffness: u,
        damping: o * 2 * Math.sqrt(i * u),
        duration: t
      };
    }
  }
  const ZO = 12;
  function $O(t, e, n) {
    let i = n;
    for (let a = 1; a < ZO; a++) i = i - t(i) / e(i);
    return i;
  }
  function qf(t, e) {
    return t * Math.sqrt(1 - e * e);
  }
  const IO = [
    "duration",
    "bounce"
  ], JO = [
    "stiffness",
    "damping",
    "mass"
  ];
  function Ug(t, e) {
    return e.some((n) => t[n] !== void 0);
  }
  function WO(t) {
    let e = {
      velocity: bt.velocity,
      stiffness: bt.stiffness,
      damping: bt.damping,
      mass: bt.mass,
      isResolvedFromDuration: false,
      ...t
    };
    if (!Ug(t, JO) && Ug(t, IO)) if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), a = i * i, s = 2 * nn(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
      e = {
        ...e,
        mass: bt.mass,
        stiffness: a,
        damping: s
      };
    } else {
      const n = QO(t);
      e = {
        ...e,
        ...n,
        mass: bt.mass
      }, e.isResolvedFromDuration = true;
    }
    return e;
  }
  function jl(t = bt.visualDuration, e = bt.bounce) {
    const n = typeof t != "object" ? {
      visualDuration: t,
      keyframes: [
        0,
        1
      ],
      bounce: e
    } : t;
    let { restSpeed: i, restDelta: a } = n;
    const s = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], r = {
      done: false,
      value: s
    }, { stiffness: l, damping: u, mass: c, duration: f, velocity: h, isResolvedFromDuration: d } = WO({
      ...n,
      velocity: -Me(n.velocity || 0)
    }), v = h || 0, y = u / (2 * Math.sqrt(l * c)), b = o - s, p = Me(Math.sqrt(l / c)), m = Math.abs(b) < 5;
    i || (i = m ? bt.restSpeed.granular : bt.restSpeed.default), a || (a = m ? bt.restDelta.granular : bt.restDelta.default);
    let g;
    if (y < 1) {
      const T = qf(p, y);
      g = (A) => {
        const E = Math.exp(-y * p * A);
        return o - E * ((v + y * p * b) / T * Math.sin(T * A) + b * Math.cos(T * A));
      };
    } else if (y === 1) g = (T) => o - Math.exp(-p * T) * (b + (v + p * b) * T);
    else {
      const T = p * Math.sqrt(y * y - 1);
      g = (A) => {
        const E = Math.exp(-y * p * A), C = Math.min(T * A, 300);
        return o - E * ((v + y * p * b) * Math.sinh(C) + T * b * Math.cosh(C)) / T;
      };
    }
    const S = {
      calculatedDuration: d && f || null,
      next: (T) => {
        const A = g(T);
        if (d) r.done = T >= f;
        else {
          let E = T === 0 ? v : 0;
          y < 1 && (E = T === 0 ? Ne(v) : oS(g, T, A));
          const C = Math.abs(E) <= i, j = Math.abs(o - A) <= a;
          r.done = C && j;
        }
        return r.value = r.done ? o : A, r;
      },
      toString: () => {
        const T = Math.min(Gh(S), Nl), A = sS((E) => S.next(T * E).value, T, 30);
        return T + "ms " + A;
      },
      toTransition: () => {
      }
    };
    return S;
  }
  jl.applyToOptions = (t) => {
    const e = FO(t, 100, jl);
    return t.ease = e.ease, t.duration = Ne(e.duration), t.type = "keyframes", t;
  };
  function Xf({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: a = 10, bounceStiffness: s = 500, modifyTarget: o, min: r, max: l, restDelta: u = 0.5, restSpeed: c }) {
    const f = t[0], h = {
      done: false,
      value: f
    }, d = (C) => r !== void 0 && C < r || l !== void 0 && C > l, v = (C) => r === void 0 ? l : l === void 0 || Math.abs(r - C) < Math.abs(l - C) ? r : l;
    let y = n * e;
    const b = f + y, p = o === void 0 ? b : o(b);
    p !== b && (y = p - f);
    const m = (C) => -y * Math.exp(-C / i), g = (C) => p + m(C), S = (C) => {
      const j = m(C), z = g(C);
      h.done = Math.abs(j) <= u, h.value = h.done ? p : z;
    };
    let T, A;
    const E = (C) => {
      d(h.value) && (T = C, A = jl({
        keyframes: [
          h.value,
          v(h.value)
        ],
        velocity: oS(g, C, h.value),
        damping: a,
        stiffness: s,
        restDelta: u,
        restSpeed: c
      }));
    };
    return E(0), {
      calculatedDuration: null,
      next: (C) => {
        let j = false;
        return !A && T === void 0 && (j = true, S(C), E(C)), T !== void 0 && C >= T ? A.next(C - T) : (!j && S(C), h);
      }
    };
  }
  function tN(t, e, n) {
    const i = [], a = n || Dn.mix || aS, s = t.length - 1;
    for (let o = 0; o < s; o++) {
      let r = a(t[o], t[o + 1]);
      if (e) {
        const l = Array.isArray(e) ? e[o] || Oe : e;
        r = qo(l, r);
      }
      i.push(r);
    }
    return i;
  }
  function eN(t, e, { clamp: n = true, ease: i, mixer: a } = {}) {
    const s = t.length;
    if (ts(s === e.length, "Both input and output ranges must be the same length", "range-length"), s === 1) return () => e[0];
    if (s === 2 && e[0] === e[1]) return () => e[1];
    const o = t[0] === t[1];
    t[0] > t[s - 1] && (t = [
      ...t
    ].reverse(), e = [
      ...e
    ].reverse());
    const r = tN(e, i, a), l = r.length, u = (c) => {
      if (o && c < t[0]) return e[0];
      let f = 0;
      if (l > 1) for (; f < t.length - 2 && !(c < t[f + 1]); f++) ;
      const h = wo(t[f], t[f + 1], c);
      return r[f](h);
    };
    return n ? (c) => u(nn(t[0], t[s - 1], c)) : u;
  }
  function nN(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
      const a = wo(0, e, i);
      t.push(xt(n, 1, a));
    }
  }
  function iN(t) {
    const e = [
      0
    ];
    return nN(e, t.length - 1), e;
  }
  function aN(t, e) {
    return t.map((n) => n * e);
  }
  function sN(t, e) {
    return t.map(() => e || Kx).splice(0, t.length - 1);
  }
  function Js({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
    const a = yO(i) ? i.map(Ng) : Ng(i), s = {
      done: false,
      value: e[0]
    }, o = aN(n && n.length === e.length ? n : iN(e), t), r = eN(o, e, {
      ease: Array.isArray(a) ? a : sN(e, a)
    });
    return {
      calculatedDuration: t,
      next: (l) => (s.value = r(l), s.done = l >= t, s)
    };
  }
  const oN = (t) => t !== null;
  function Yh(t, { repeat: e, repeatType: n = "loop" }, i, a = 1) {
    const s = t.filter(oN), r = a < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
    return !r || i === void 0 ? s[r] : i;
  }
  const rN = {
    decay: Xf,
    inertia: Xf,
    tween: Js,
    keyframes: Js,
    spring: jl
  };
  function rS(t) {
    typeof t.type == "string" && (t.type = rN[t.type]);
  }
  class qh {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((e) => {
        this.resolve = e;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(e, n) {
      return this.finished.then(e, n);
    }
  }
  const lN = (t) => t / 100;
  class Xh extends qh {
    constructor(e) {
      super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
        var _a5, _b3;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== Zt.now() && this.tick(Zt.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), (_b3 = (_a5 = this.options).onStop) == null ? void 0 : _b3.call(_a5));
      }, this.options = e, this.initAnimation(), this.play(), e.autoplay === false && this.pause();
    }
    initAnimation() {
      const { options: e } = this;
      rS(e);
      const { type: n = Js, repeat: i = 0, repeatDelay: a = 0, repeatType: s, velocity: o = 0 } = e;
      let { keyframes: r } = e;
      const l = n || Js;
      l !== Js && typeof r[0] != "number" && (this.mixKeyframes = qo(lN, aS(r[0], r[1])), r = [
        0,
        100
      ]);
      const u = l({
        ...e,
        keyframes: r
      });
      s === "mirror" && (this.mirroredGenerator = l({
        ...e,
        keyframes: [
          ...r
        ].reverse(),
        velocity: -o
      })), u.calculatedDuration === null && (u.calculatedDuration = Gh(u));
      const { calculatedDuration: c } = u;
      this.calculatedDuration = c, this.resolvedDuration = c + a, this.totalDuration = this.resolvedDuration * (i + 1) - a, this.generator = u;
    }
    updateTime(e) {
      const n = Math.round(e - this.startTime) * this.playbackSpeed;
      this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
    }
    tick(e, n = false) {
      const { generator: i, totalDuration: a, mixKeyframes: s, mirroredGenerator: o, resolvedDuration: r, calculatedDuration: l } = this;
      if (this.startTime === null) return i.next(0);
      const { delay: u = 0, keyframes: c, repeat: f, repeatType: h, repeatDelay: d, type: v, onUpdate: y, finalKeyframe: b } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - a / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
      const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), m = this.playbackSpeed >= 0 ? p < 0 : p > a;
      this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = a);
      let g = this.currentTime, S = i;
      if (f) {
        const C = Math.min(this.currentTime, a) / r;
        let j = Math.floor(C), z = C % 1;
        !z && C >= 1 && (z = 1), z === 1 && j--, j = Math.min(j, f + 1), !!(j % 2) && (h === "reverse" ? (z = 1 - z, d && (z -= d / r)) : h === "mirror" && (S = o)), g = nn(0, 1, z) * r;
      }
      const T = m ? {
        done: false,
        value: c[0]
      } : S.next(g);
      s && (T.value = s(T.value));
      let { done: A } = T;
      !m && l !== null && (A = this.playbackSpeed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
      const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
      return E && v !== Xf && (T.value = Yh(c, this.options, b, this.speed)), y && y(T.value), E && this.finish(), T;
    }
    then(e, n) {
      return this.finished.then(e, n);
    }
    get duration() {
      return Me(this.calculatedDuration);
    }
    get iterationDuration() {
      const { delay: e = 0 } = this.options || {};
      return this.duration + Me(e);
    }
    get time() {
      return Me(this.currentTime);
    }
    set time(e) {
      var _a5;
      e = Ne(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), (_a5 = this.driver) == null ? void 0 : _a5.start(false);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      this.updateTime(Zt.now());
      const n = this.playbackSpeed !== e;
      this.playbackSpeed = e, n && (this.time = Me(this.currentTime));
    }
    play() {
      var _a5, _b3;
      if (this.isStopped) return;
      const { driver: e = XO, startTime: n } = this.options;
      this.driver || (this.driver = e((a) => this.tick(a))), (_b3 = (_a5 = this.options).onPlay) == null ? void 0 : _b3.call(_a5);
      const i = this.driver.now();
      this.state === "finished" ? (this.updateFinished(), this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = n ?? i), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
    }
    pause() {
      this.state = "paused", this.updateTime(Zt.now()), this.holdTime = this.currentTime;
    }
    complete() {
      this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
    }
    finish() {
      var _a5, _b3;
      this.notifyFinished(), this.teardown(), this.state = "finished", (_b3 = (_a5 = this.options).onComplete) == null ? void 0 : _b3.call(_a5);
    }
    cancel() {
      var _a5, _b3;
      this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (_b3 = (_a5 = this.options).onCancel) == null ? void 0 : _b3.call(_a5);
    }
    teardown() {
      this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
    }
    stopDriver() {
      this.driver && (this.driver.stop(), this.driver = void 0);
    }
    sample(e) {
      return this.startTime = 0, this.tick(e, true);
    }
    attachTimeline(e) {
      var _a5;
      return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (_a5 = this.driver) == null ? void 0 : _a5.stop(), e.observe(this);
    }
  }
  function uN(t) {
    for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
  }
  const Vi = (t) => t * 180 / Math.PI, Ff = (t) => {
    const e = Vi(Math.atan2(t[1], t[0]));
    return Kf(e);
  }, cN = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: Ff,
    rotateZ: Ff,
    skewX: (t) => Vi(Math.atan(t[1])),
    skewY: (t) => Vi(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
  }, Kf = (t) => (t = t % 360, t < 0 && (t += 360), t), Pg = Ff, Hg = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), kg = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), fN = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Hg,
    scaleY: kg,
    scale: (t) => (Hg(t) + kg(t)) / 2,
    rotateX: (t) => Kf(Vi(Math.atan2(t[6], t[5]))),
    rotateY: (t) => Kf(Vi(Math.atan2(-t[2], t[0]))),
    rotateZ: Pg,
    rotate: Pg,
    skewX: (t) => Vi(Math.atan(t[4])),
    skewY: (t) => Vi(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
  };
  function Qf(t) {
    return t.includes("scale") ? 1 : 0;
  }
  function Zf(t, e) {
    if (!t || t === "none") return Qf(e);
    const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let i, a;
    if (n) i = fN, a = n;
    else {
      const r = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      i = cN, a = r;
    }
    if (!a) return Qf(e);
    const s = i[e], o = a[1].split(",").map(hN);
    return typeof s == "function" ? s(o) : o[s];
  }
  const dN = (t, e) => {
    const { transform: n = "none" } = getComputedStyle(t);
    return Zf(n, e);
  };
  function hN(t) {
    return parseFloat(t.trim());
  }
  const ms = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
  ], ps = new Set(ms), Gg = (t) => t === hs || t === B, mN = /* @__PURE__ */ new Set([
    "x",
    "y",
    "z"
  ]), pN = ms.filter((t) => !mN.has(t));
  function gN(t) {
    const e = [];
    return pN.forEach((n) => {
      const i = t.getValue(n);
      i !== void 0 && (e.push([
        n,
        i.get()
      ]), i.set(n.startsWith("scale") ? 1 : 0));
    }), e;
  }
  const Jn = {
    width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, { top: e }) => parseFloat(e),
    left: (t, { left: e }) => parseFloat(e),
    bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
    right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
    x: (t, { transform: e }) => Zf(e, "x"),
    y: (t, { transform: e }) => Zf(e, "y")
  };
  Jn.translateX = Jn.x;
  Jn.translateY = Jn.y;
  const Gi = /* @__PURE__ */ new Set();
  let $f = false, If = false, Jf = false;
  function lS() {
    if (If) {
      const t = Array.from(Gi).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
      e.forEach((i) => {
        const a = gN(i);
        a.length && (n.set(i, a), i.render());
      }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
        i.render();
        const a = n.get(i);
        a && a.forEach(([s, o]) => {
          var _a5;
          (_a5 = i.getValue(s)) == null ? void 0 : _a5.set(o);
        });
      }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
        i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
      });
    }
    If = false, $f = false, Gi.forEach((t) => t.complete(Jf)), Gi.clear();
  }
  function uS() {
    Gi.forEach((t) => {
      t.readKeyframes(), t.needsMeasurement && (If = true);
    });
  }
  function yN() {
    Jf = true, uS(), lS(), Jf = false;
  }
  class Fh {
    constructor(e, n, i, a, s, o = false) {
      this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [
        ...e
      ], this.onComplete = n, this.name = i, this.motionValue = a, this.element = s, this.isAsync = o;
    }
    scheduleResolve() {
      this.state = "scheduled", this.isAsync ? (Gi.add(this), $f || ($f = true, ct.read(uS), ct.resolveKeyframes(lS))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const { unresolvedKeyframes: e, name: n, element: i, motionValue: a } = this;
      if (e[0] === null) {
        const s = a == null ? void 0 : a.get(), o = e[e.length - 1];
        if (s !== void 0) e[0] = s;
        else if (i && n) {
          const r = i.readValue(n, o);
          r != null && (e[0] = r);
        }
        e[0] === void 0 && (e[0] = o), a && s === void 0 && a.set(e[0]);
      }
      uN(e);
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete(e = false) {
      this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Gi.delete(this);
    }
    cancel() {
      this.state === "scheduled" && (Gi.delete(this), this.state = "pending");
    }
    resume() {
      this.state === "pending" && this.scheduleResolve();
    }
  }
  const vN = (t) => t.startsWith("--");
  function bN(t, e, n) {
    vN(e) ? t.style.setProperty(e, n) : t.style[e] = n;
  }
  const xN = _h(() => window.ScrollTimeline !== void 0), SN = {};
  function wN(t, e) {
    const n = _h(t);
    return () => SN[e] ?? n();
  }
  const cS = wN(() => {
    try {
      document.createElement("div").animate({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      });
    } catch {
      return false;
    }
    return true;
  }, "linearEasing"), Ls = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, Yg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ls([
      0,
      0.65,
      0.55,
      1
    ]),
    circOut: Ls([
      0.55,
      0,
      1,
      0.45
    ]),
    backIn: Ls([
      0.31,
      0.01,
      0.66,
      -0.59
    ]),
    backOut: Ls([
      0.33,
      1.53,
      0.69,
      0.99
    ])
  };
  function fS(t, e) {
    if (t) return typeof t == "function" ? cS() ? sS(t, e) : "ease-out" : Qx(t) ? Ls(t) : Array.isArray(t) ? t.map((n) => fS(n, e) || Yg.easeOut) : Yg[t];
  }
  function TN(t, e, n, { delay: i = 0, duration: a = 300, repeat: s = 0, repeatType: o = "loop", ease: r = "easeOut", times: l } = {}, u = void 0) {
    const c = {
      [e]: n
    };
    l && (c.offset = l);
    const f = fS(r, a);
    Array.isArray(f) && (c.easing = f);
    const h = {
      delay: i,
      duration: a,
      easing: Array.isArray(f) ? "linear" : f,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal"
    };
    return u && (h.pseudoElement = u), t.animate(c, h);
  }
  function dS(t) {
    return typeof t == "function" && "applyToOptions" in t;
  }
  function EN({ type: t, ...e }) {
    return dS(t) && cS() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
  }
  class hS extends qh {
    constructor(e) {
      if (super(), this.finishedTime = null, this.isStopped = false, this.manualStartTime = null, !e) return;
      const { element: n, name: i, keyframes: a, pseudoElement: s, allowFlatten: o = false, finalKeyframe: r, onComplete: l } = e;
      this.isPseudoElement = !!s, this.allowFlatten = o, this.options = e, ts(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
      const u = EN(e);
      this.animation = TN(n, i, a, u, s), u.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
        if (this.finishedTime = this.time, !s) {
          const c = Yh(a, this.options, r, this.speed);
          this.updateMotionValue ? this.updateMotionValue(c) : bN(n, i, c), this.animation.cancel();
        }
        l == null ? void 0 : l(), this.notifyFinished();
      };
    }
    play() {
      this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      var _a5, _b3;
      (_b3 = (_a5 = this.animation).finish) == null ? void 0 : _b3.call(_a5);
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch {
      }
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = true;
      const { state: e } = this;
      e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      var _a5, _b3, _c3;
      const e = (_a5 = this.options) == null ? void 0 : _a5.element;
      !this.isPseudoElement && (e == null ? void 0 : e.isConnected) && ((_c3 = (_b3 = this.animation).commitStyles) == null ? void 0 : _c3.call(_b3));
    }
    get duration() {
      var _a5, _b3;
      const e = ((_b3 = (_a5 = this.animation.effect) == null ? void 0 : _a5.getComputedTiming) == null ? void 0 : _b3.call(_a5).duration) || 0;
      return Me(Number(e));
    }
    get iterationDuration() {
      const { delay: e = 0 } = this.options || {};
      return this.duration + Me(e);
    }
    get time() {
      return Me(Number(this.animation.currentTime) || 0);
    }
    set time(e) {
      this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = Ne(e);
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(e) {
      e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
    }
    get state() {
      return this.finishedTime !== null ? "finished" : this.animation.playState;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(e) {
      this.manualStartTime = this.animation.startTime = e;
    }
    attachTimeline({ timeline: e, observe: n }) {
      var _a5;
      return this.allowFlatten && ((_a5 = this.animation.effect) == null ? void 0 : _a5.updateTiming({
        easing: "linear"
      })), this.animation.onfinish = null, e && xN() ? (this.animation.timeline = e, Oe) : n(this);
    }
  }
  const mS = {
    anticipate: qx,
    backInOut: Yx,
    circInOut: Fx
  };
  function AN(t) {
    return t in mS;
  }
  function CN(t) {
    typeof t.ease == "string" && AN(t.ease) && (t.ease = mS[t.ease]);
  }
  const vc = 10;
  class MN extends hS {
    constructor(e) {
      CN(e), rS(e), super(e), e.startTime !== void 0 && (this.startTime = e.startTime), this.options = e;
    }
    updateMotionValue(e) {
      const { motionValue: n, onUpdate: i, onComplete: a, element: s, ...o } = this.options;
      if (!n) return;
      if (e !== void 0) {
        n.set(e);
        return;
      }
      const r = new Xh({
        ...o,
        autoplay: false
      }), l = Math.max(vc, Zt.now() - this.startTime), u = nn(0, vc, l - vc);
      n.setWithVelocity(r.sample(Math.max(0, l - u)).value, r.sample(l).value, u), r.stop();
    }
  }
  const qg = (t, e) => e === "zIndex" ? false : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (vi.test(t) || t === "0") && !t.startsWith("url("));
  function RN(t) {
    const e = t[0];
    if (t.length === 1) return true;
    for (let n = 0; n < t.length; n++) if (t[n] !== e) return true;
  }
  function DN(t, e, n, i) {
    const a = t[0];
    if (a === null) return false;
    if (e === "display" || e === "visibility") return true;
    const s = t[t.length - 1], o = qg(a, e), r = qg(s, e);
    return hu(o === r, `You are trying to animate ${e} from "${a}" to "${s}". "${o ? s : a}" is not an animatable value.`, "value-not-animatable"), !o || !r ? false : RN(t) || (n === "spring" || dS(n)) && i;
  }
  function Wf(t) {
    t.duration = 0, t.type = "keyframes";
  }
  const ON = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
  ]), NN = _h(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  function jN(t) {
    var _a5;
    const { motionValue: e, name: n, repeatDelay: i, repeatType: a, damping: s, type: o } = t;
    if (!(((_a5 = e == null ? void 0 : e.owner) == null ? void 0 : _a5.current) instanceof HTMLElement)) return false;
    const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
    return NN() && n && ON.has(n) && (n !== "transform" || !u) && !l && !i && a !== "mirror" && s !== 0 && o !== "inertia";
  }
  const zN = 40;
  class _N extends qh {
    constructor({ autoplay: e = true, delay: n = 0, type: i = "keyframes", repeat: a = 0, repeatDelay: s = 0, repeatType: o = "loop", keyframes: r, name: l, motionValue: u, element: c, ...f }) {
      var _a5;
      super(), this.stop = () => {
        var _a6, _b3;
        this._animation && (this._animation.stop(), (_a6 = this.stopTimeline) == null ? void 0 : _a6.call(this)), (_b3 = this.keyframeResolver) == null ? void 0 : _b3.cancel();
      }, this.createdAt = Zt.now();
      const h = {
        autoplay: e,
        delay: n,
        type: i,
        repeat: a,
        repeatDelay: s,
        repeatType: o,
        name: l,
        motionValue: u,
        element: c,
        ...f
      }, d = (c == null ? void 0 : c.KeyframeResolver) || Fh;
      this.keyframeResolver = new d(r, (v, y, b) => this.onKeyframesResolved(v, y, h, !b), l, u, c), (_a5 = this.keyframeResolver) == null ? void 0 : _a5.scheduleResolve();
    }
    onKeyframesResolved(e, n, i, a) {
      var _a5, _b3;
      this.keyframeResolver = void 0;
      const { name: s, type: o, velocity: r, delay: l, isHandoff: u, onUpdate: c } = i;
      this.resolvedAt = Zt.now(), DN(e, s, o, r) || ((Dn.instantAnimations || !l) && (c == null ? void 0 : c(Yh(e, i, n))), e[0] = e[e.length - 1], Wf(i), i.repeat = 0);
      const h = {
        startTime: a ? this.resolvedAt ? this.resolvedAt - this.createdAt > zN ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
        finalKeyframe: n,
        ...i,
        keyframes: e
      }, d = !u && jN(h), v = (_b3 = (_a5 = h.motionValue) == null ? void 0 : _a5.owner) == null ? void 0 : _b3.current, y = d ? new MN({
        ...h,
        element: v
      }) : new Xh(h);
      y.finished.then(() => {
        this.notifyFinished();
      }).catch(Oe), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y;
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(e, n) {
      return this.finished.finally(e).then(() => {
      });
    }
    get animation() {
      var _a5;
      return this._animation || ((_a5 = this.keyframeResolver) == null ? void 0 : _a5.resume(), yN()), this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(e) {
      this.animation.time = e;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(e) {
      this.animation.speed = e;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(e) {
      return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      var _a5;
      this._animation && this.animation.cancel(), (_a5 = this.keyframeResolver) == null ? void 0 : _a5.cancel();
    }
  }
  function pS(t, e, n, i = 0, a = 1) {
    const s = Array.from(t).sort((u, c) => u.sortNodePosition(c)).indexOf(e), o = t.size, r = (o - 1) * i;
    return typeof n == "function" ? n(s, o) : a === 1 ? s * i : r - s * i;
  }
  const LN = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function VN(t) {
    const e = LN.exec(t);
    if (!e) return [
      ,
    ];
    const [, n, i, a] = e;
    return [
      `--${n ?? i}`,
      a
    ];
  }
  const BN = 4;
  function gS(t, e, n = 1) {
    ts(n <= BN, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [i, a] = VN(t);
    if (!i) return;
    const s = window.getComputedStyle(e).getPropertyValue(i);
    if (s) {
      const o = s.trim();
      return Lx(o) ? parseFloat(o) : o;
    }
    return Uh(a) ? gS(a, e, n + 1) : a;
  }
  const UN = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }, PN = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }), HN = {
    type: "keyframes",
    duration: 0.8
  }, kN = {
    type: "keyframes",
    ease: [
      0.25,
      0.1,
      0.35,
      1
    ],
    duration: 0.3
  }, GN = (t, { keyframes: e }) => e.length > 2 ? HN : ps.has(t) ? t.startsWith("scale") ? PN(e[1]) : UN : kN, YN = (t) => t !== null;
  function qN(t, { repeat: e, repeatType: n = "loop" }, i) {
    const a = t.filter(YN), s = e && n !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !s || i === void 0 ? a[s] : i;
  }
  function yS(t, e) {
    if ((t == null ? void 0 : t.inherit) && e) {
      const { inherit: n, ...i } = t;
      return {
        ...e,
        ...i
      };
    }
    return t;
  }
  function Kh(t, e) {
    const n = (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
    return n !== t ? yS(n, t) : n;
  }
  function XN({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: a, repeat: s, repeatType: o, repeatDelay: r, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length;
  }
  const Qh = (t, e, n, i = {}, a, s) => (o) => {
    const r = Kh(i, t) || {}, l = r.delay || i.delay || 0;
    let { elapsed: u = 0 } = i;
    u = u - Ne(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [
        null,
        n
      ],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...r,
      delay: -u,
      onUpdate: (h) => {
        e.set(h), r.onUpdate && r.onUpdate(h);
      },
      onComplete: () => {
        o(), r.onComplete && r.onComplete();
      },
      name: t,
      motionValue: e,
      element: s ? void 0 : a
    };
    XN(r) || Object.assign(c, GN(t, c)), c.duration && (c.duration = Ne(c.duration)), c.repeatDelay && (c.repeatDelay = Ne(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = false;
    if ((c.type === false || c.duration === 0 && !c.repeatDelay) && (Wf(c), c.delay === 0 && (f = true)), (Dn.instantAnimations || Dn.skipAnimations || (a == null ? void 0 : a.shouldSkipAnimations)) && (f = true, Wf(c), c.delay = 0), c.allowFlatten = !r.type && !r.ease, f && !s && e.get() !== void 0) {
      const h = qN(c.keyframes, r);
      if (h !== void 0) {
        ct.update(() => {
          c.onUpdate(h), c.onComplete();
        });
        return;
      }
    }
    return r.isSync ? new Xh(c) : new _N(c);
  };
  function Xg(t) {
    const e = [
      {},
      {}
    ];
    return t == null ? void 0 : t.values.forEach((n, i) => {
      e[0][i] = n.get(), e[1][i] = n.getVelocity();
    }), e;
  }
  function Zh(t, e, n, i) {
    if (typeof e == "function") {
      const [a, s] = Xg(i);
      e = e(n !== void 0 ? n : t.custom, a, s);
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
      const [a, s] = Xg(i);
      e = e(n !== void 0 ? n : t.custom, a, s);
    }
    return e;
  }
  function Ha(t, e, n) {
    const i = t.getProps();
    return Zh(i, e, n !== void 0 ? n : i.custom, t);
  }
  const vS = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...ms
  ]), Fg = 30, FN = (t) => !isNaN(parseFloat(t));
  class KN {
    constructor(e, n = {}) {
      this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
        var _a5;
        const a = Zt.now();
        if (this.updatedAt !== a && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && ((_a5 = this.events.change) == null ? void 0 : _a5.notify(this.current), this.dependents)) for (const s of this.dependents) s.dirty();
      }, this.hasAnimated = false, this.setCurrent(e), this.owner = n.owner;
    }
    setCurrent(e) {
      this.current = e, this.updatedAt = Zt.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = FN(this.current));
    }
    setPrevFrameValue(e = this.current) {
      this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, n) {
      this.events[e] || (this.events[e] = new Lh());
      const i = this.events[e].add(n);
      return e === "change" ? () => {
        i(), ct.read(() => {
          this.events.change.getSize() || this.stop();
        });
      } : i;
    }
    clearListeners() {
      for (const e in this.events) this.events[e].clear();
    }
    attach(e, n) {
      this.passiveEffect = e, this.stopPassiveEffect = n;
    }
    set(e) {
      this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
    }
    setWithVelocity(e, n, i) {
      this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
    }
    jump(e, n = true) {
      this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    dirty() {
      var _a5;
      (_a5 = this.events.change) == null ? void 0 : _a5.notify(this.current);
    }
    addDependent(e) {
      this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
    }
    removeDependent(e) {
      this.dependents && this.dependents.delete(e);
    }
    get() {
      return this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      const e = Zt.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Fg) return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, Fg);
      return Ux(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
    }
    start(e) {
      return this.stop(), new Promise((n) => {
        this.hasAnimated = true, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      });
    }
    stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      var _a5, _b3;
      (_a5 = this.dependents) == null ? void 0 : _a5.clear(), (_b3 = this.events.destroy) == null ? void 0 : _b3.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function es(t, e) {
    return new KN(t, e);
  }
  const td = (t) => Array.isArray(t);
  function QN(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, es(n));
  }
  function ZN(t) {
    return td(t) ? t[t.length - 1] || 0 : t;
  }
  function $N(t, e) {
    const n = Ha(t, e);
    let { transitionEnd: i = {}, transition: a = {}, ...s } = n || {};
    s = {
      ...s,
      ...i
    };
    for (const o in s) {
      const r = ZN(s[o]);
      QN(t, o, r);
    }
  }
  const Xt = (t) => !!(t && t.getVelocity);
  function IN(t) {
    return !!(Xt(t) && t.add);
  }
  function ed(t, e) {
    const n = t.getValue("willChange");
    if (IN(n)) return n.add(e);
    if (!n && Dn.WillChange) {
      const i = new Dn.WillChange("auto");
      t.addValue("willChange", i), i.add(e);
    }
  }
  function $h(t) {
    return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
  }
  const JN = "framerAppearId", bS = "data-" + $h(JN);
  function xS(t) {
    return t.props[bS];
  }
  function WN({ protectedKeys: t, needsAnimating: e }, n) {
    const i = t.hasOwnProperty(n) && e[n] !== true;
    return e[n] = false, i;
  }
  function SS(t, e, { delay: n = 0, transitionOverride: i, type: a } = {}) {
    let { transition: s, transitionEnd: o, ...r } = e;
    const l = t.getDefaultTransition();
    s = s ? yS(s, l) : l;
    const u = s == null ? void 0 : s.reduceMotion;
    i && (s = i);
    const c = [], f = a && t.animationState && t.animationState.getState()[a];
    for (const h in r) {
      const d = t.getValue(h, t.latestValues[h] ?? null), v = r[h];
      if (v === void 0 || f && WN(f, h)) continue;
      const y = {
        delay: n,
        ...Kh(s || {}, h)
      }, b = d.get();
      if (b !== void 0 && !d.isAnimating && !Array.isArray(v) && v === b && !y.velocity) continue;
      let p = false;
      if (window.MotionHandoffAnimation) {
        const S = xS(t);
        if (S) {
          const T = window.MotionHandoffAnimation(S, h, ct);
          T !== null && (y.startTime = T, p = true);
        }
      }
      ed(t, h);
      const m = u ?? t.shouldReduceMotion;
      d.start(Qh(h, d, v, m && vS.has(h) ? {
        type: false
      } : y, t, p));
      const g = d.animation;
      g && c.push(g);
    }
    if (o) {
      const h = () => ct.update(() => {
        o && $N(t, o);
      });
      c.length ? Promise.all(c).then(h) : h();
    }
    return c;
  }
  function nd(t, e, n = {}) {
    var _a5;
    const i = Ha(t, e, n.type === "exit" ? (_a5 = t.presenceContext) == null ? void 0 : _a5.custom : void 0);
    let { transition: a = t.getDefaultTransition() || {} } = i || {};
    n.transitionOverride && (a = n.transitionOverride);
    const s = i ? () => Promise.all(SS(t, i, n)) : () => Promise.resolve(), o = t.variantChildren && t.variantChildren.size ? (l = 0) => {
      const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = a;
      return t3(t, e, l, u, c, f, n);
    } : () => Promise.resolve(), { when: r } = a;
    if (r) {
      const [l, u] = r === "beforeChildren" ? [
        s,
        o
      ] : [
        o,
        s
      ];
      return l().then(() => u());
    } else return Promise.all([
      s(),
      o(n.delay)
    ]);
  }
  function t3(t, e, n = 0, i = 0, a = 0, s = 1, o) {
    const r = [];
    for (const l of t.variantChildren) l.notify("AnimationStart", e), r.push(nd(l, e, {
      ...o,
      delay: n + (typeof i == "function" ? 0 : i) + pS(t.variantChildren, l, i, a, s)
    }).then(() => l.notify("AnimationComplete", e)));
    return Promise.all(r);
  }
  function e3(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
      const a = e.map((s) => nd(t, s, n));
      i = Promise.all(a);
    } else if (typeof e == "string") i = nd(t, e, n);
    else {
      const a = typeof e == "function" ? Ha(t, e, n.custom) : e;
      i = Promise.all(SS(t, a, n));
    }
    return i.then(() => {
      t.notify("AnimationComplete", e);
    });
  }
  const n3 = {
    test: (t) => t === "auto",
    parse: (t) => t
  }, wS = (t) => (e) => e.test(t), TS = [
    hs,
    B,
    tn,
    Un,
    DO,
    RO,
    n3
  ], Kg = (t) => TS.find(wS(t));
  function i3(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Bx(t) : true;
  }
  const a3 = /* @__PURE__ */ new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
  ]);
  function s3(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [i] = n.match(Ph) || [];
    if (!i) return t;
    const a = n.replace(i, "");
    let s = a3.has(e) ? 1 : 0;
    return i !== n && (s *= 100), e + "(" + s + a + ")";
  }
  const o3 = /\b([a-z-]*)\(.*?\)/gu, id = {
    ...vi,
    getAnimatableNone: (t) => {
      const e = t.match(o3);
      return e ? e.map(s3).join(" ") : t;
    }
  }, Qg = {
    ...hs,
    transform: Math.round
  }, r3 = {
    rotate: Un,
    rotateX: Un,
    rotateY: Un,
    rotateZ: Un,
    scale: yr,
    scaleX: yr,
    scaleY: yr,
    scaleZ: yr,
    skew: Un,
    skewX: Un,
    skewY: Un,
    distance: B,
    translateX: B,
    translateY: B,
    translateZ: B,
    x: B,
    y: B,
    z: B,
    perspective: B,
    transformPerspective: B,
    opacity: To,
    originX: _g,
    originY: _g,
    originZ: B
  }, Ih = {
    borderWidth: B,
    borderTopWidth: B,
    borderRightWidth: B,
    borderBottomWidth: B,
    borderLeftWidth: B,
    borderRadius: B,
    borderTopLeftRadius: B,
    borderTopRightRadius: B,
    borderBottomRightRadius: B,
    borderBottomLeftRadius: B,
    width: B,
    maxWidth: B,
    height: B,
    maxHeight: B,
    top: B,
    right: B,
    bottom: B,
    left: B,
    inset: B,
    insetBlock: B,
    insetBlockStart: B,
    insetBlockEnd: B,
    insetInline: B,
    insetInlineStart: B,
    insetInlineEnd: B,
    padding: B,
    paddingTop: B,
    paddingRight: B,
    paddingBottom: B,
    paddingLeft: B,
    paddingBlock: B,
    paddingBlockStart: B,
    paddingBlockEnd: B,
    paddingInline: B,
    paddingInlineStart: B,
    paddingInlineEnd: B,
    margin: B,
    marginTop: B,
    marginRight: B,
    marginBottom: B,
    marginLeft: B,
    marginBlock: B,
    marginBlockStart: B,
    marginBlockEnd: B,
    marginInline: B,
    marginInlineStart: B,
    marginInlineEnd: B,
    fontSize: B,
    backgroundPositionX: B,
    backgroundPositionY: B,
    ...r3,
    zIndex: Qg,
    fillOpacity: To,
    strokeOpacity: To,
    numOctaves: Qg
  }, l3 = {
    ...Ih,
    color: Ct,
    backgroundColor: Ct,
    outlineColor: Ct,
    fill: Ct,
    stroke: Ct,
    borderColor: Ct,
    borderTopColor: Ct,
    borderRightColor: Ct,
    borderBottomColor: Ct,
    borderLeftColor: Ct,
    filter: id,
    WebkitFilter: id
  }, ES = (t) => l3[t];
  function AS(t, e) {
    let n = ES(t);
    return n !== id && (n = vi), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
  }
  const u3 = /* @__PURE__ */ new Set([
    "auto",
    "none",
    "0"
  ]);
  function c3(t, e, n) {
    let i = 0, a;
    for (; i < t.length && !a; ) {
      const s = t[i];
      typeof s == "string" && !u3.has(s) && Eo(s).values.length && (a = t[i]), i++;
    }
    if (a && n) for (const s of e) t[s] = AS(n, a);
  }
  class f3 extends Fh {
    constructor(e, n, i, a, s) {
      super(e, n, i, a, s, true);
    }
    readKeyframes() {
      const { unresolvedKeyframes: e, element: n, name: i } = this;
      if (!n || !n.current) return;
      super.readKeyframes();
      for (let c = 0; c < e.length; c++) {
        let f = e[c];
        if (typeof f == "string" && (f = f.trim(), Uh(f))) {
          const h = gS(f, n.current);
          h !== void 0 && (e[c] = h), c === e.length - 1 && (this.finalKeyframe = f);
        }
      }
      if (this.resolveNoneKeyframes(), !vS.has(i) || e.length !== 2) return;
      const [a, s] = e, o = Kg(a), r = Kg(s), l = zg(a), u = zg(s);
      if (l !== u && Jn[i]) {
        this.needsMeasurement = true;
        return;
      }
      if (o !== r) if (Gg(o) && Gg(r)) for (let c = 0; c < e.length; c++) {
        const f = e[c];
        typeof f == "string" && (e[c] = parseFloat(f));
      }
      else Jn[i] && (this.needsMeasurement = true);
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: e, name: n } = this, i = [];
      for (let a = 0; a < e.length; a++) (e[a] === null || i3(e[a])) && i.push(a);
      i.length && c3(e, i, n);
    }
    measureInitialState() {
      const { element: e, unresolvedKeyframes: n, name: i } = this;
      if (!e || !e.current) return;
      i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Jn[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
      const a = n[n.length - 1];
      a !== void 0 && e.getValue(i, a).jump(a, false);
    }
    measureEndState() {
      var _a5;
      const { element: e, name: n, unresolvedKeyframes: i } = this;
      if (!e || !e.current) return;
      const a = e.getValue(n);
      a && a.jump(this.measuredOrigin, false);
      const s = i.length - 1, o = i[s];
      i[s] = Jn[n](e.measureViewportBox(), window.getComputedStyle(e.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), ((_a5 = this.removedTransforms) == null ? void 0 : _a5.length) && this.removedTransforms.forEach(([r, l]) => {
        e.getValue(r).set(l);
      }), this.resolveNoneKeyframes();
    }
  }
  const d3 = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
  ]);
  function CS(t, e, n) {
    if (t == null) return [];
    if (t instanceof EventTarget) return [
      t
    ];
    if (typeof t == "string") {
      const a = document.querySelectorAll(t);
      return a ? Array.from(a) : [];
    }
    return Array.from(t).filter((i) => i != null);
  }
  const MS = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
  function h3(t) {
    return Vx(t) && "offsetHeight" in t;
  }
  const { schedule: Jh, cancel: gj } = Zx(queueMicrotask, false), Pe = {
    x: false,
    y: false
  };
  function RS() {
    return Pe.x || Pe.y;
  }
  function m3(t) {
    return t === "x" || t === "y" ? Pe[t] ? null : (Pe[t] = true, () => {
      Pe[t] = false;
    }) : Pe.x || Pe.y ? null : (Pe.x = Pe.y = true, () => {
      Pe.x = Pe.y = false;
    });
  }
  function DS(t, e) {
    const n = CS(t), i = new AbortController(), a = {
      passive: true,
      ...e,
      signal: i.signal
    };
    return [
      n,
      a,
      () => i.abort()
    ];
  }
  function p3(t) {
    return !(t.pointerType === "touch" || RS());
  }
  function g3(t, e, n = {}) {
    const [i, a, s] = DS(t, n);
    return i.forEach((o) => {
      let r = false, l = false, u;
      const c = () => {
        o.removeEventListener("pointerleave", v);
      }, f = (b) => {
        u && (u(b), u = void 0), c();
      }, h = (b) => {
        r = false, window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), l && (l = false, f(b));
      }, d = () => {
        r = true, window.addEventListener("pointerup", h, a), window.addEventListener("pointercancel", h, a);
      }, v = (b) => {
        if (b.pointerType !== "touch") {
          if (r) {
            l = true;
            return;
          }
          f(b);
        }
      }, y = (b) => {
        if (!p3(b)) return;
        l = false;
        const p = e(o, b);
        typeof p == "function" && (u = p, o.addEventListener("pointerleave", v, a));
      };
      o.addEventListener("pointerenter", y, a), o.addEventListener("pointerdown", d, a);
    }), s;
  }
  const OS = (t, e) => e ? t === e ? true : OS(t, e.parentElement) : false, Wh = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false, y3 = /* @__PURE__ */ new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
  ]);
  function v3(t) {
    return y3.has(t.tagName) || t.isContentEditable === true;
  }
  const b3 = /* @__PURE__ */ new Set([
    "INPUT",
    "SELECT",
    "TEXTAREA"
  ]);
  function x3(t) {
    return b3.has(t.tagName) || t.isContentEditable === true;
  }
  const Hr = /* @__PURE__ */ new WeakSet();
  function Zg(t) {
    return (e) => {
      e.key === "Enter" && t(e);
    };
  }
  function bc(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
      isPrimary: true,
      bubbles: true
    }));
  }
  const S3 = (t, e) => {
    const n = t.currentTarget;
    if (!n) return;
    const i = Zg(() => {
      if (Hr.has(n)) return;
      bc(n, "down");
      const a = Zg(() => {
        bc(n, "up");
      }), s = () => bc(n, "cancel");
      n.addEventListener("keyup", a, e), n.addEventListener("blur", s, e);
    });
    n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
  };
  function $g(t) {
    return Wh(t) && !RS();
  }
  const Ig = /* @__PURE__ */ new WeakSet();
  function w3(t, e, n = {}) {
    const [i, a, s] = DS(t, n), o = (r) => {
      const l = r.currentTarget;
      if (!$g(r) || Ig.has(r)) return;
      Hr.add(l), n.stopPropagation && Ig.add(r);
      const u = e(l, r), c = (d, v) => {
        window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", h), Hr.has(l) && Hr.delete(l), $g(d) && typeof u == "function" && u(d, {
          success: v
        });
      }, f = (d) => {
        c(d, l === window || l === document || n.useGlobalTarget || OS(l, d.target));
      }, h = (d) => {
        c(d, false);
      };
      window.addEventListener("pointerup", f, a), window.addEventListener("pointercancel", h, a);
    };
    return i.forEach((r) => {
      (n.useGlobalTarget ? window : r).addEventListener("pointerdown", o, a), h3(r) && (r.addEventListener("focus", (u) => S3(u, a)), !v3(r) && !r.hasAttribute("tabindex") && (r.tabIndex = 0));
    }), s;
  }
  function tm(t) {
    return Vx(t) && "ownerSVGElement" in t;
  }
  const kr = /* @__PURE__ */ new WeakMap();
  let Gr;
  const NS = (t, e, n) => (i, a) => a && a[0] ? a[0][t + "Size"] : tm(i) && "getBBox" in i ? i.getBBox()[e] : i[n], T3 = NS("inline", "width", "offsetWidth"), E3 = NS("block", "height", "offsetHeight");
  function A3({ target: t, borderBoxSize: e }) {
    var _a5;
    (_a5 = kr.get(t)) == null ? void 0 : _a5.forEach((n) => {
      n(t, {
        get width() {
          return T3(t, e);
        },
        get height() {
          return E3(t, e);
        }
      });
    });
  }
  function C3(t) {
    t.forEach(A3);
  }
  function M3() {
    typeof ResizeObserver > "u" || (Gr = new ResizeObserver(C3));
  }
  function R3(t, e) {
    Gr || M3();
    const n = CS(t);
    return n.forEach((i) => {
      let a = kr.get(i);
      a || (a = /* @__PURE__ */ new Set(), kr.set(i, a)), a.add(e), Gr == null ? void 0 : Gr.observe(i);
    }), () => {
      n.forEach((i) => {
        const a = kr.get(i);
        a == null ? void 0 : a.delete(e), (a == null ? void 0 : a.size) || (Gr == null ? void 0 : Gr.unobserve(i));
      });
    };
  }
  const Yr = /* @__PURE__ */ new Set();
  let Ma;
  function D3() {
    Ma = () => {
      const t = {
        get width() {
          return window.innerWidth;
        },
        get height() {
          return window.innerHeight;
        }
      };
      Yr.forEach((e) => e(t));
    }, window.addEventListener("resize", Ma);
  }
  function O3(t) {
    return Yr.add(t), Ma || D3(), () => {
      Yr.delete(t), !Yr.size && typeof Ma == "function" && (window.removeEventListener("resize", Ma), Ma = void 0);
    };
  }
  function Jg(t, e) {
    return typeof t == "function" ? O3(t) : R3(t, e);
  }
  function N3(t) {
    return tm(t) && t.tagName === "svg";
  }
  const j3 = [
    ...TS,
    Ct,
    vi
  ], z3 = (t) => j3.find(wS(t)), Wg = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }), Ra = () => ({
    x: Wg(),
    y: Wg()
  }), ty = () => ({
    min: 0,
    max: 0
  }), jt = () => ({
    x: ty(),
    y: ty()
  }), _3 = /* @__PURE__ */ new WeakMap();
  function mu(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function";
  }
  function Ao(t) {
    return typeof t == "string" || Array.isArray(t);
  }
  const em = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ], nm = [
    "initial",
    ...em
  ];
  function pu(t) {
    return mu(t.animate) || nm.some((e) => Ao(t[e]));
  }
  function jS(t) {
    return !!(pu(t) || t.variants);
  }
  function L3(t, e, n) {
    for (const i in e) {
      const a = e[i], s = n[i];
      if (Xt(a)) t.addValue(i, a);
      else if (Xt(s)) t.addValue(i, es(a, {
        owner: t
      }));
      else if (s !== a) if (t.hasValue(i)) {
        const o = t.getValue(i);
        o.liveStyle === true ? o.jump(a) : o.hasAnimated || o.set(a);
      } else {
        const o = t.getStaticValue(i);
        t.addValue(i, es(o !== void 0 ? o : a, {
          owner: t
        }));
      }
    }
    for (const i in n) e[i] === void 0 && t.removeValue(i);
    return e;
  }
  const ad = {
    current: null
  }, zS = {
    current: false
  }, V3 = typeof window < "u";
  function B3() {
    if (zS.current = true, !!V3) if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => ad.current = t.matches;
      t.addEventListener("change", e), e();
    } else ad.current = false;
  }
  const ey = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ];
  let zl = {};
  function _S(t) {
    zl = t;
  }
  function U3() {
    return zl;
  }
  class P3 {
    scrapeMotionValuesFromProps(e, n, i) {
      return {};
    }
    constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: a, skipAnimations: s, blockInitialAnimation: o, visualState: r }, l = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.shouldSkipAnimations = false, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Fh, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = false, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        const d = Zt.now();
        this.renderScheduledAt < d && (this.renderScheduledAt = d, ct.render(this.render, false, true));
      };
      const { latestValues: u, renderState: c } = r;
      this.latestValues = u, this.baseTarget = {
        ...u
      }, this.initialValues = n.initial ? {
        ...u
      } : {}, this.renderState = c, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = a, this.skipAnimationsConfig = s, this.options = l, this.blockInitialAnimation = !!o, this.isControllingVariants = pu(n), this.isVariantNode = jS(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
      const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
      for (const d in h) {
        const v = h[d];
        u[d] !== void 0 && Xt(v) && v.set(u[d]);
      }
    }
    mount(e) {
      var _a5, _b3;
      if (this.hasBeenMounted) for (const n in this.initialValues) (_a5 = this.values.get(n)) == null ? void 0 : _a5.jump(this.initialValues[n]), this.latestValues[n] = this.initialValues[n];
      this.current = e, _3.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = false : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = true : (zS.current || B3(), this.shouldReduceMotion = ad.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? false, (_b3 = this.parent) == null ? void 0 : _b3.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = true;
    }
    unmount() {
      var _a5;
      this.projection && this.projection.unmount(), yi(this.notifyUpdate), yi(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (_a5 = this.parent) == null ? void 0 : _a5.removeChild(this);
      for (const e in this.events) this.events[e].clear();
      for (const e in this.features) {
        const n = this.features[e];
        n && (n.unmount(), n.isMounted = false);
      }
      this.current = null;
    }
    addChild(e) {
      this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
    }
    removeChild(e) {
      this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
    }
    bindToMotionValue(e, n) {
      if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), n.accelerate && d3.has(e) && this.current instanceof HTMLElement) {
        const { factory: o, keyframes: r, times: l, ease: u, duration: c } = n.accelerate, f = new hS({
          element: this.current,
          name: e,
          keyframes: r,
          times: l,
          ease: u,
          duration: Ne(c)
        }), h = o(f);
        this.valueSubscriptions.set(e, () => {
          h(), f.cancel();
        });
        return;
      }
      const i = ps.has(e);
      i && this.onBindTransform && this.onBindTransform();
      const a = n.on("change", (o) => {
        this.latestValues[e] = o, this.props.onUpdate && ct.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
      });
      let s;
      typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
        a(), s && s(), n.owner && n.stop();
      });
    }
    sortNodePosition(e) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = "animation";
      for (e in zl) {
        const n = zl[e];
        if (!n) continue;
        const { isEnabled: i, Feature: a } = n;
        if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)), this.features[e]) {
          const s = this.features[e];
          s.isMounted ? s.update() : (s.mount(), s.isMounted = true);
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : jt();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, n) {
      this.latestValues[e] = n;
    }
    update(e, n) {
      (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
      for (let i = 0; i < ey.length; i++) {
        const a = ey[i];
        this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
        const s = "on" + a, o = e[s];
        o && (this.propEventSubscriptions[a] = this.on(a, o));
      }
      this.prevMotionValues = L3(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(e) {
      const n = this.getClosestVariantNode();
      if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
    }
    addValue(e, n) {
      const i = this.values.get(e);
      n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
    }
    removeValue(e) {
      this.values.delete(e);
      const n = this.valueSubscriptions.get(e);
      n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, n) {
      if (this.props.values && this.props.values[e]) return this.props.values[e];
      let i = this.values.get(e);
      return i === void 0 && n !== void 0 && (i = es(n === null ? void 0 : n, {
        owner: this
      }), this.addValue(e, i)), i;
    }
    readValue(e, n) {
      let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
      return i != null && (typeof i == "string" && (Lx(i) || Bx(i)) ? i = parseFloat(i) : !z3(i) && vi.test(n) && (i = AS(e, n)), this.setBaseTarget(e, Xt(i) ? i.get() : i)), Xt(i) ? i.get() : i;
    }
    setBaseTarget(e, n) {
      this.baseTarget[e] = n;
    }
    getBaseTarget(e) {
      var _a5;
      const { initial: n } = this.props;
      let i;
      if (typeof n == "string" || typeof n == "object") {
        const s = Zh(this.props, n, (_a5 = this.presenceContext) == null ? void 0 : _a5.custom);
        s && (i = s[e]);
      }
      if (n && i !== void 0) return i;
      const a = this.getBaseTargetFromProps(this.props, e);
      return a !== void 0 && !Xt(a) ? a : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
    }
    on(e, n) {
      return this.events[e] || (this.events[e] = new Lh()), this.events[e].add(n);
    }
    notify(e, ...n) {
      this.events[e] && this.events[e].notify(...n);
    }
    scheduleRenderMicrotask() {
      Jh.render(this.render);
    }
  }
  class LS extends P3 {
    constructor() {
      super(...arguments), this.KeyframeResolver = f3;
    }
    sortInstanceNodePosition(e, n) {
      return e.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, n) {
      const i = e.style;
      return i ? i[n] : void 0;
    }
    removeValueFromRenderState(e, { vars: n, style: i }) {
      delete n[e], delete i[e];
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const { children: e } = this.props;
      Xt(e) && (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
    }
  }
  class wi {
    constructor(e) {
      this.isMounted = false, this.node = e;
    }
    update() {
    }
  }
  function VS({ top: t, left: e, right: n, bottom: i }) {
    return {
      x: {
        min: e,
        max: n
      },
      y: {
        min: t,
        max: i
      }
    };
  }
  function H3({ x: t, y: e }) {
    return {
      top: e.min,
      right: t.max,
      bottom: e.max,
      left: t.min
    };
  }
  function k3(t, e) {
    if (!e) return t;
    const n = e({
      x: t.left,
      y: t.top
    }), i = e({
      x: t.right,
      y: t.bottom
    });
    return {
      top: n.y,
      left: n.x,
      bottom: i.y,
      right: i.x
    };
  }
  function xc(t) {
    return t === void 0 || t === 1;
  }
  function sd({ scale: t, scaleX: e, scaleY: n }) {
    return !xc(t) || !xc(e) || !xc(n);
  }
  function _i(t) {
    return sd(t) || BS(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
  }
  function BS(t) {
    return ny(t.x) || ny(t.y);
  }
  function ny(t) {
    return t && t !== "0%";
  }
  function _l(t, e, n) {
    const i = t - n, a = e * i;
    return n + a;
  }
  function iy(t, e, n, i, a) {
    return a !== void 0 && (t = _l(t, a, i)), _l(t, n, i) + e;
  }
  function od(t, e = 0, n = 1, i, a) {
    t.min = iy(t.min, e, n, i, a), t.max = iy(t.max, e, n, i, a);
  }
  function US(t, { x: e, y: n }) {
    od(t.x, e.translate, e.scale, e.originPoint), od(t.y, n.translate, n.scale, n.originPoint);
  }
  const ay = 0.999999999999, sy = 1.0000000000001;
  function G3(t, e, n, i = false) {
    const a = n.length;
    if (!a) return;
    e.x = e.y = 1;
    let s, o;
    for (let r = 0; r < a; r++) {
      s = n[r], o = s.projectionDelta;
      const { visualElement: l } = s.options;
      l && l.props.style && l.props.style.display === "contents" || (i && s.options.layoutScroll && s.scroll && s !== s.root && Oa(t, {
        x: -s.scroll.offset.x,
        y: -s.scroll.offset.y
      }), o && (e.x *= o.x.scale, e.y *= o.y.scale, US(t, o)), i && _i(s.latestValues) && Oa(t, s.latestValues));
    }
    e.x < sy && e.x > ay && (e.x = 1), e.y < sy && e.y > ay && (e.y = 1);
  }
  function Da(t, e) {
    t.min = t.min + e, t.max = t.max + e;
  }
  function oy(t, e, n, i, a = 0.5) {
    const s = xt(t.min, t.max, a);
    od(t, e, n, s, i);
  }
  function Oa(t, e) {
    oy(t.x, e.x, e.scaleX, e.scale, e.originX), oy(t.y, e.y, e.scaleY, e.scale, e.originY);
  }
  function PS(t, e) {
    return VS(k3(t.getBoundingClientRect(), e));
  }
  function Y3(t, e, n) {
    const i = PS(t, n), { scroll: a } = e;
    return a && (Da(i.x, a.offset.x), Da(i.y, a.offset.y)), i;
  }
  const q3 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, X3 = ms.length;
  function F3(t, e, n) {
    let i = "", a = true;
    for (let s = 0; s < X3; s++) {
      const o = ms[s], r = t[o];
      if (r === void 0) continue;
      let l = true;
      if (typeof r == "number") l = r === (o.startsWith("scale") ? 1 : 0);
      else {
        const u = parseFloat(r);
        l = o.startsWith("scale") ? u === 1 : u === 0;
      }
      if (!l || n) {
        const u = MS(r, Ih[o]);
        if (!l) {
          a = false;
          const c = q3[o] || o;
          i += `${c}(${u}) `;
        }
        n && (e[o] = u);
      }
    }
    return i = i.trim(), n ? i = n(e, a ? "" : i) : a && (i = "none"), i;
  }
  function im(t, e, n) {
    const { style: i, vars: a, transformOrigin: s } = t;
    let o = false, r = false;
    for (const l in e) {
      const u = e[l];
      if (ps.has(l)) {
        o = true;
        continue;
      } else if (Ix(l)) {
        a[l] = u;
        continue;
      } else {
        const c = MS(u, Ih[l]);
        l.startsWith("origin") ? (r = true, s[l] = c) : i[l] = c;
      }
    }
    if (e.transform || (o || n ? i.transform = F3(e, t.transform, n) : i.transform && (i.transform = "none")), r) {
      const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
      i.transformOrigin = `${l} ${u} ${c}`;
    }
  }
  function HS(t, { style: e, vars: n }, i, a) {
    const s = t.style;
    let o;
    for (o in e) s[o] = e[o];
    a == null ? void 0 : a.applyProjectionStyles(s, i);
    for (o in n) s.setProperty(o, n[o]);
  }
  function ry(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
  }
  const Ms = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string") if (B.test(t)) t = parseFloat(t);
      else return t;
      const n = ry(t, e.target.x), i = ry(t, e.target.y);
      return `${n}% ${i}%`;
    }
  }, K3 = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const i = t, a = vi.parse(t);
      if (a.length > 5) return i;
      const s = vi.createTransformer(t), o = typeof a[0] != "number" ? 1 : 0, r = n.x.scale * e.x, l = n.y.scale * e.y;
      a[0 + o] /= r, a[1 + o] /= l;
      const u = xt(r, l, 0.5);
      return typeof a[2 + o] == "number" && (a[2 + o] /= u), typeof a[3 + o] == "number" && (a[3 + o] /= u), s(a);
    }
  }, rd = {
    borderRadius: {
      ...Ms,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    },
    borderTopLeftRadius: Ms,
    borderTopRightRadius: Ms,
    borderBottomLeftRadius: Ms,
    borderBottomRightRadius: Ms,
    boxShadow: K3
  };
  function kS(t, { layout: e, layoutId: n }) {
    return ps.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!rd[t] || t === "opacity");
  }
  function am(t, e, n) {
    var _a5;
    const i = t.style, a = e == null ? void 0 : e.style, s = {};
    if (!i) return s;
    for (const o in i) (Xt(i[o]) || a && Xt(a[o]) || kS(o, t) || ((_a5 = n == null ? void 0 : n.getValue(o)) == null ? void 0 : _a5.liveStyle) !== void 0) && (s[o] = i[o]);
    return s;
  }
  function Q3(t) {
    return window.getComputedStyle(t);
  }
  class Z3 extends LS {
    constructor() {
      super(...arguments), this.type = "html", this.renderInstance = HS;
    }
    readValueFromInstance(e, n) {
      var _a5;
      if (ps.has(n)) return ((_a5 = this.projection) == null ? void 0 : _a5.isProjecting) ? Qf(n) : dN(e, n);
      {
        const i = Q3(e), a = (Ix(n) ? i.getPropertyValue(n) : i[n]) || 0;
        return typeof a == "string" ? a.trim() : a;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: n }) {
      return PS(e, n);
    }
    build(e, n, i) {
      im(e, n, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, n, i) {
      return am(e, n, i);
    }
  }
  const $3 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  }, I3 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function J3(t, e, n = 1, i = 0, a = true) {
    t.pathLength = 1;
    const s = a ? $3 : I3;
    t[s.offset] = `${-i}`, t[s.array] = `${e} ${n}`;
  }
  const W3 = [
    "offsetDistance",
    "offsetPath",
    "offsetRotate",
    "offsetAnchor"
  ];
  function GS(t, { attrX: e, attrY: n, attrScale: i, pathLength: a, pathSpacing: s = 1, pathOffset: o = 0, ...r }, l, u, c) {
    if (im(t, r, u), l) {
      t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
      return;
    }
    t.attrs = t.style, t.style = {};
    const { attrs: f, style: h } = t;
    f.transform && (h.transform = f.transform, delete f.transform), (h.transform || f.transformOrigin) && (h.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), h.transform && (h.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete f.transformBox);
    for (const d of W3) f[d] !== void 0 && (h[d] = f[d], delete f[d]);
    e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), i !== void 0 && (f.scale = i), a !== void 0 && J3(f, a, s, o, false);
  }
  const YS = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
  ]), qS = (t) => typeof t == "string" && t.toLowerCase() === "svg";
  function t5(t, e, n, i) {
    HS(t, e, void 0, i);
    for (const a in e.attrs) t.setAttribute(YS.has(a) ? a : $h(a), e.attrs[a]);
  }
  function XS(t, e, n) {
    const i = am(t, e, n);
    for (const a in t) if (Xt(t[a]) || Xt(e[a])) {
      const s = ms.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
      i[s] = t[a];
    }
    return i;
  }
  class e5 extends LS {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = jt;
    }
    getBaseTargetFromProps(e, n) {
      return e[n];
    }
    readValueFromInstance(e, n) {
      if (ps.has(n)) {
        const i = ES(n);
        return i && i.default || 0;
      }
      return n = YS.has(n) ? n : $h(n), e.getAttribute(n);
    }
    scrapeMotionValuesFromProps(e, n, i) {
      return XS(e, n, i);
    }
    build(e, n, i) {
      GS(e, n, this.isSVGTag, i.transformTemplate, i.style);
    }
    renderInstance(e, n, i, a) {
      t5(e, n, i, a);
    }
    mount(e) {
      this.isSVGTag = qS(e.tagName), super.mount(e);
    }
  }
  const n5 = nm.length;
  function FS(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
      const n = t.parent ? FS(t.parent) || {} : {};
      return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
    }
    const e = {};
    for (let n = 0; n < n5; n++) {
      const i = nm[n], a = t.props[i];
      (Ao(a) || a === false) && (e[i] = a);
    }
    return e;
  }
  function KS(t, e) {
    if (!Array.isArray(e)) return false;
    const n = e.length;
    if (n !== t.length) return false;
    for (let i = 0; i < n; i++) if (e[i] !== t[i]) return false;
    return true;
  }
  const i5 = [
    ...em
  ].reverse(), a5 = em.length;
  function s5(t) {
    return (e) => Promise.all(e.map(({ animation: n, options: i }) => e3(t, n, i)));
  }
  function o5(t) {
    let e = s5(t), n = ly(), i = true;
    const a = (l) => (u, c) => {
      var _a5;
      const f = Ha(t, c, l === "exit" ? (_a5 = t.presenceContext) == null ? void 0 : _a5.custom : void 0);
      if (f) {
        const { transition: h, transitionEnd: d, ...v } = f;
        u = {
          ...u,
          ...v,
          ...d
        };
      }
      return u;
    };
    function s(l) {
      e = l(t);
    }
    function o(l) {
      const { props: u } = t, c = FS(t.parent) || {}, f = [], h = /* @__PURE__ */ new Set();
      let d = {}, v = 1 / 0;
      for (let b = 0; b < a5; b++) {
        const p = i5[b], m = n[p], g = u[p] !== void 0 ? u[p] : c[p], S = Ao(g), T = p === l ? m.isActive : null;
        T === false && (v = b);
        let A = g === c[p] && g !== u[p] && S;
        if (A && i && t.manuallyAnimateOnMount && (A = false), m.protectedKeys = {
          ...d
        }, !m.isActive && T === null || !g && !m.prevProp || mu(g) || typeof g == "boolean") continue;
        if (p === "exit" && m.isActive && T !== true) {
          m.prevResolvedValues && (d = {
            ...d,
            ...m.prevResolvedValues
          });
          continue;
        }
        const E = r5(m.prevProp, g);
        let C = E || p === l && m.isActive && !A && S || b > v && S, j = false;
        const z = Array.isArray(g) ? g : [
          g
        ];
        let P = z.reduce(a(p), {});
        T === false && (P = {});
        const { prevResolvedValues: V = {} } = m, J = {
          ...V,
          ...P
        }, L = (O) => {
          C = true, h.has(O) && (j = true, h.delete(O)), m.needsAnimating[O] = true;
          const D = t.getValue(O);
          D && (D.liveStyle = false);
        };
        for (const O in J) {
          const D = P[O], N = V[O];
          if (d.hasOwnProperty(O)) continue;
          let U = false;
          td(D) && td(N) ? U = !KS(D, N) : U = D !== N, U ? D != null ? L(O) : h.add(O) : D !== void 0 && h.has(O) ? L(O) : m.protectedKeys[O] = true;
        }
        m.prevProp = g, m.prevResolvedValues = P, m.isActive && (d = {
          ...d,
          ...P
        }), i && t.blockInitialAnimation && (C = false);
        const X = A && E;
        C && (!X || j) && f.push(...z.map((O) => {
          const D = {
            type: p
          };
          if (typeof O == "string" && i && !X && t.manuallyAnimateOnMount && t.parent) {
            const { parent: N } = t, U = Ha(N, O);
            if (N.enteringChildren && U) {
              const { delayChildren: ft } = U.transition || {};
              D.delay = pS(N.enteringChildren, t, ft);
            }
          }
          return {
            animation: O,
            options: D
          };
        }));
      }
      if (h.size) {
        const b = {};
        if (typeof u.initial != "boolean") {
          const p = Ha(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
          p && p.transition && (b.transition = p.transition);
        }
        h.forEach((p) => {
          const m = t.getBaseTarget(p), g = t.getValue(p);
          g && (g.liveStyle = true), b[p] = m ?? null;
        }), f.push({
          animation: b
        });
      }
      let y = !!f.length;
      return i && (u.initial === false || u.initial === u.animate) && !t.manuallyAnimateOnMount && (y = false), i = false, y ? e(f) : Promise.resolve();
    }
    function r(l, u) {
      var _a5;
      if (n[l].isActive === u) return Promise.resolve();
      (_a5 = t.variantChildren) == null ? void 0 : _a5.forEach((f) => {
        var _a6;
        return (_a6 = f.animationState) == null ? void 0 : _a6.setActive(l, u);
      }), n[l].isActive = u;
      const c = o(l);
      for (const f in n) n[f].protectedKeys = {};
      return c;
    }
    return {
      animateChanges: o,
      setActive: r,
      setAnimateFunction: s,
      getState: () => n,
      reset: () => {
        n = ly();
      }
    };
  }
  function r5(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !KS(e, t) : false;
  }
  function Di(t = false) {
    return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function ly() {
    return {
      animate: Di(true),
      whileInView: Di(),
      whileHover: Di(),
      whileTap: Di(),
      whileDrag: Di(),
      whileFocus: Di(),
      exit: Di()
    };
  }
  function uy(t, e) {
    t.min = e.min, t.max = e.max;
  }
  function Ue(t, e) {
    uy(t.x, e.x), uy(t.y, e.y);
  }
  function cy(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
  }
  const QS = 1e-4, l5 = 1 - QS, u5 = 1 + QS, ZS = 0.01, c5 = 0 - ZS, f5 = 0 + ZS;
  function $t(t) {
    return t.max - t.min;
  }
  function d5(t, e, n) {
    return Math.abs(t - e) <= n;
  }
  function fy(t, e, n, i = 0.5) {
    t.origin = i, t.originPoint = xt(e.min, e.max, t.origin), t.scale = $t(n) / $t(e), t.translate = xt(n.min, n.max, t.origin) - t.originPoint, (t.scale >= l5 && t.scale <= u5 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= c5 && t.translate <= f5 || isNaN(t.translate)) && (t.translate = 0);
  }
  function Ws(t, e, n, i) {
    fy(t.x, e.x, n.x, i ? i.originX : void 0), fy(t.y, e.y, n.y, i ? i.originY : void 0);
  }
  function dy(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + $t(e);
  }
  function h5(t, e, n) {
    dy(t.x, e.x, n.x), dy(t.y, e.y, n.y);
  }
  function hy(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + $t(e);
  }
  function Ll(t, e, n) {
    hy(t.x, e.x, n.x), hy(t.y, e.y, n.y);
  }
  function my(t, e, n, i, a) {
    return t -= e, t = _l(t, 1 / n, i), a !== void 0 && (t = _l(t, 1 / a, i)), t;
  }
  function m5(t, e = 0, n = 1, i = 0.5, a, s = t, o = t) {
    if (tn.test(e) && (e = parseFloat(e), e = xt(o.min, o.max, e / 100) - o.min), typeof e != "number") return;
    let r = xt(s.min, s.max, i);
    t === s && (r -= e), t.min = my(t.min, e, n, r, a), t.max = my(t.max, e, n, r, a);
  }
  function py(t, e, [n, i, a], s, o) {
    m5(t, e[n], e[i], e[a], e.scale, s, o);
  }
  const p5 = [
    "x",
    "scaleX",
    "originX"
  ], g5 = [
    "y",
    "scaleY",
    "originY"
  ];
  function gy(t, e, n, i) {
    py(t.x, e, p5, n ? n.x : void 0, i ? i.x : void 0), py(t.y, e, g5, n ? n.y : void 0, i ? i.y : void 0);
  }
  function yy(t) {
    return t.translate === 0 && t.scale === 1;
  }
  function $S(t) {
    return yy(t.x) && yy(t.y);
  }
  function vy(t, e) {
    return t.min === e.min && t.max === e.max;
  }
  function y5(t, e) {
    return vy(t.x, e.x) && vy(t.y, e.y);
  }
  function by(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
  }
  function IS(t, e) {
    return by(t.x, e.x) && by(t.y, e.y);
  }
  function xy(t) {
    return $t(t.x) / $t(t.y);
  }
  function Sy(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
  }
  function Ke(t) {
    return [
      t("x"),
      t("y")
    ];
  }
  function v5(t, e, n) {
    let i = "";
    const a = t.x.translate / e.x, s = t.y.translate / e.y, o = (n == null ? void 0 : n.z) || 0;
    if ((a || s || o) && (i = `translate3d(${a}px, ${s}px, ${o}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
      const { transformPerspective: u, rotate: c, rotateX: f, rotateY: h, skewX: d, skewY: v } = n;
      u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), f && (i += `rotateX(${f}deg) `), h && (i += `rotateY(${h}deg) `), d && (i += `skewX(${d}deg) `), v && (i += `skewY(${v}deg) `);
    }
    const r = t.x.scale * e.x, l = t.y.scale * e.y;
    return (r !== 1 || l !== 1) && (i += `scale(${r}, ${l})`), i || "none";
  }
  const JS = [
    "TopLeft",
    "TopRight",
    "BottomLeft",
    "BottomRight"
  ], b5 = JS.length, wy = (t) => typeof t == "string" ? parseFloat(t) : t, Ty = (t) => typeof t == "number" || B.test(t);
  function x5(t, e, n, i, a, s) {
    a ? (t.opacity = xt(0, n.opacity ?? 1, S5(i)), t.opacityExit = xt(e.opacity ?? 1, 0, w5(i))) : s && (t.opacity = xt(e.opacity ?? 1, n.opacity ?? 1, i));
    for (let o = 0; o < b5; o++) {
      const r = `border${JS[o]}Radius`;
      let l = Ey(e, r), u = Ey(n, r);
      if (l === void 0 && u === void 0) continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || Ty(l) === Ty(u) ? (t[r] = Math.max(xt(wy(l), wy(u), i), 0), (tn.test(u) || tn.test(l)) && (t[r] += "%")) : t[r] = u;
    }
    (e.rotate || n.rotate) && (t.rotate = xt(e.rotate || 0, n.rotate || 0, i));
  }
  function Ey(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius;
  }
  const S5 = WS(0, 0.5, Xx), w5 = WS(0.5, 0.95, Oe);
  function WS(t, e, n) {
    return (i) => i < t ? 0 : i > e ? 1 : n(wo(t, e, i));
  }
  function T5(t, e, n) {
    const i = Xt(t) ? t : es(t);
    return i.start(Qh("", i, e, n)), i.animation;
  }
  function Co(t, e, n, i = {
    passive: true
  }) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
  }
  const E5 = (t, e) => t.depth - e.depth;
  class A5 {
    constructor() {
      this.children = [], this.isDirty = false;
    }
    add(e) {
      zh(this.children, e), this.isDirty = true;
    }
    remove(e) {
      Dl(this.children, e), this.isDirty = true;
    }
    forEach(e) {
      this.isDirty && this.children.sort(E5), this.isDirty = false, this.children.forEach(e);
    }
  }
  function C5(t, e) {
    const n = Zt.now(), i = ({ timestamp: a }) => {
      const s = a - n;
      s >= e && (yi(i), t(s - e));
    };
    return ct.setup(i, true), () => yi(i);
  }
  function qr(t) {
    return Xt(t) ? t.get() : t;
  }
  class M5 {
    constructor() {
      this.members = [];
    }
    add(e) {
      zh(this.members, e);
      for (let n = this.members.length - 1; n >= 0; n--) {
        const i = this.members[n];
        if (i === e || i === this.lead || i === this.prevLead) continue;
        const a = i.instance;
        a && a.isConnected === false && i.isPresent !== false && !i.snapshot && Dl(this.members, i);
      }
      e.scheduleRender();
    }
    remove(e) {
      if (Dl(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
        const n = this.members[this.members.length - 1];
        n && this.promote(n);
      }
    }
    relegate(e) {
      const n = this.members.findIndex((a) => e === a);
      if (n === 0) return false;
      let i;
      for (let a = n; a >= 0; a--) {
        const s = this.members[a], o = s.instance;
        if (s.isPresent !== false && (!o || o.isConnected !== false)) {
          i = s;
          break;
        }
      }
      return i ? (this.promote(i), true) : false;
    }
    promote(e, n) {
      const i = this.lead;
      if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
        i.instance && i.scheduleRender(), e.scheduleRender();
        const a = i.options.layoutDependency, s = e.options.layoutDependency;
        if (!(a !== void 0 && s !== void 0 && a === s)) {
          const l = i.instance;
          l && l.isConnected === false && !i.snapshot || (e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = true), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = true));
        }
        const { crossfade: r } = e.options;
        r === false && i.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e) => {
        const { options: n, resumingFrom: i } = e;
        n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((e) => {
        e.instance && e.scheduleRender(false);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  const Xr = {
    hasAnimatedSinceResize: true,
    hasEverUpdated: false
  }, Sc = [
    "",
    "X",
    "Y",
    "Z"
  ], R5 = 1e3;
  let D5 = 0;
  function wc(t, e, n, i) {
    const { latestValues: a } = e;
    a[t] && (n[t] = a[t], e.setStaticValue(t, 0), i && (i[t] = 0));
  }
  function tw(t) {
    if (t.hasCheckedOptimisedAppear = true, t.root === t) return;
    const { visualElement: e } = t.options;
    if (!e) return;
    const n = xS(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const { layout: a, layoutId: s } = t.options;
      window.MotionCancelOptimisedAnimation(n, "transform", ct, !(a || s));
    }
    const { parent: i } = t;
    i && !i.hasCheckedOptimisedAppear && tw(i);
  }
  function ew({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: a }) {
    return class {
      constructor(o = {}, r = e == null ? void 0 : e()) {
        this.id = D5++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = {
          x: 1,
          y: 1
        }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.layoutVersion = 0, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = false, this.nodes.forEach(j5), this.nodes.forEach(V5), this.nodes.forEach(B5), this.nodes.forEach(z5);
        }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = r ? r.root || r : this, this.path = r ? [
          ...r.path,
          r
        ] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
        for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = true;
        this.root === this && (this.nodes = new A5());
      }
      addEventListener(o, r) {
        return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Lh()), this.eventHandlers.get(o).add(r);
      }
      notifyListeners(o, ...r) {
        const l = this.eventHandlers.get(o);
        l && l.notify(...r);
      }
      hasListeners(o) {
        return this.eventHandlers.has(o);
      }
      mount(o) {
        if (this.instance) return;
        this.isSVG = tm(o) && !N3(o), this.instance = o;
        const { layoutId: r, layout: l, visualElement: u } = this.options;
        if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || r) && (this.isLayoutDirty = true), t) {
          let c, f = 0;
          const h = () => this.root.updateBlockedByResize = false;
          ct.read(() => {
            f = window.innerWidth;
          }), t(o, () => {
            const d = window.innerWidth;
            d !== f && (f = d, this.root.updateBlockedByResize = true, c && c(), c = C5(h, 250), Xr.hasAnimatedSinceResize && (Xr.hasAnimatedSinceResize = false, this.nodes.forEach(My)));
          });
        }
        r && this.root.registerSharedNode(r, this), this.options.animate !== false && u && (r || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: f, hasRelativeLayoutChanged: h, layout: d }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const v = this.options.transition || u.getDefaultTransition() || G5, { onLayoutAnimationStart: y, onLayoutAnimationComplete: b } = u.getProps(), p = !this.targetLayout || !IS(this.targetLayout, d), m = !f && h;
          if (this.options.layoutRoot || this.resumeFrom || m || f && (p || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
            const g = {
              ...Kh(v, "layout"),
              onPlay: y,
              onComplete: b
            };
            (u.shouldReduceMotion || this.options.layoutRoot) && (g.delay = 0, g.type = false), this.startAnimation(g), this.setAnimationOrigin(c, m);
          } else f || My(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = d;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        const o = this.getStack();
        o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), yi(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      startUpdate() {
        this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(U5), this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: o } = this.options;
        return o && o.getProps().transformTemplate;
      }
      willUpdate(o = true) {
        if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && tw(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
        this.isLayoutDirty = true;
        for (let c = 0; c < this.path.length; c++) {
          const f = this.path[c];
          f.shouldResetTransform = true, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(false);
        }
        const { layoutId: r, layout: l } = this.options;
        if (r === void 0 && !l) return;
        const u = this.getTransformTemplate();
        this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
      }
      update() {
        if (this.updateScheduled = false, this.isUpdateBlocked()) {
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ay);
          return;
        }
        if (this.animationId <= this.animationCommitId) {
          this.nodes.forEach(Cy);
          return;
        }
        this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(L5), this.nodes.forEach(O5), this.nodes.forEach(N5)) : this.nodes.forEach(Cy), this.clearAllSnapshots();
        const r = Zt.now();
        Pt.delta = nn(0, 1e3 / 60, r - Pt.timestamp), Pt.timestamp = r, Pt.isProcessing = true, hc.update.process(Pt), hc.preRender.process(Pt), hc.render.process(Pt), Pt.isProcessing = false;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = true, Jh.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(_5), this.sharedNodes.forEach(P5);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, ct.preRender(this.updateProjection, false, true));
      }
      scheduleCheckAfterUnmount() {
        ct.postRender(() => {
          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !$t(this.snapshot.measuredBox.x) && !$t(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
        if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
        const o = this.layout;
        this.layout = this.measure(false), this.layoutVersion++, this.layoutCorrected = jt(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: r } = this.options;
        r && r.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
      }
      updateScroll(o = "measure") {
        let r = !!(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (r = false), r && this.instance) {
          const l = i(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: l,
            offset: n(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : l
          };
        }
      }
      resetTransform() {
        if (!a) return;
        const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, r = this.projectionDelta && !$S(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
        o && this.instance && (r || _i(this.latestValues) || c) && (a(this.instance, u), this.shouldResetTransform = false, this.scheduleRender());
      }
      measure(o = true) {
        const r = this.measurePageBox();
        let l = this.removeElementScroll(r);
        return o && (l = this.removeTransform(l)), Y5(l), {
          animationId: this.root.animationId,
          measuredBox: r,
          layoutBox: l,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        var _a5;
        const { visualElement: o } = this.options;
        if (!o) return jt();
        const r = o.measureViewportBox();
        if (!(((_a5 = this.scroll) == null ? void 0 : _a5.wasRoot) || this.path.some(q5))) {
          const { scroll: u } = this.root;
          u && (Da(r.x, u.offset.x), Da(r.y, u.offset.y));
        }
        return r;
      }
      removeElementScroll(o) {
        var _a5;
        const r = jt();
        if (Ue(r, o), (_a5 = this.scroll) == null ? void 0 : _a5.wasRoot) return r;
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l], { scroll: c, options: f } = u;
          u !== this.root && c && f.layoutScroll && (c.wasRoot && Ue(r, o), Da(r.x, c.offset.x), Da(r.y, c.offset.y));
        }
        return r;
      }
      applyTransform(o, r = false) {
        const l = jt();
        Ue(l, o);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !r && c.options.layoutScroll && c.scroll && c !== c.root && Oa(l, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
          }), _i(c.latestValues) && Oa(l, c.latestValues);
        }
        return _i(this.latestValues) && Oa(l, this.latestValues), l;
      }
      removeTransform(o) {
        const r = jt();
        Ue(r, o);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !_i(u.latestValues)) continue;
          sd(u.latestValues) && u.updateSnapshot();
          const c = jt(), f = u.measurePageBox();
          Ue(c, f), gy(r, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
        }
        return _i(this.latestValues) && gy(r, this.latestValues), r;
      }
      setTargetDelta(o) {
        this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
      }
      setOptions(o) {
        this.options = {
          ...this.options,
          ...o,
          crossfade: o.crossfade !== void 0 ? o.crossfade : true
        };
      }
      clearMeasurements() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Pt.timestamp && this.relativeParent.resolveTargetDelta(true);
      }
      resolveTargetDelta(o = false) {
        var _a5;
        const r = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
        const l = !!this.resumingFrom || this !== r;
        if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a5 = this.parent) == null ? void 0 : _a5.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
        const { layout: c, layoutId: f } = this.options;
        if (!this.layout || !(c || f)) return;
        this.resolvedRelativeTargetAt = Pt.timestamp;
        const h = this.getClosestProjectingParent();
        h && this.linkedParentVersion !== h.layoutVersion && !h.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (h && h.layout ? this.createRelativeTarget(h, this.layout.layoutBox, h.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = jt(), this.targetWithTransforms = jt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), h5(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ue(this.target, this.layout.layoutBox), US(this.target, this.targetDelta)) : Ue(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? this.createRelativeTarget(h, this.target, h.target) : this.relativeParent = this.relativeTarget = void 0));
      }
      getClosestProjectingParent() {
        if (!(!this.parent || sd(this.parent.latestValues) || BS(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      createRelativeTarget(o, r, l) {
        this.relativeParent = o, this.linkedParentVersion = o.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = jt(), this.relativeTargetOrigin = jt(), Ll(this.relativeTargetOrigin, r, l), Ue(this.relativeTarget, this.relativeTargetOrigin);
      }
      removeRelativeTarget() {
        this.relativeParent = this.relativeTarget = void 0;
      }
      calcProjection() {
        var _a5;
        const o = this.getLead(), r = !!this.resumingFrom || this !== o;
        let l = true;
        if ((this.isProjectionDirty || ((_a5 = this.parent) == null ? void 0 : _a5.isProjectionDirty)) && (l = false), r && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = false), this.resolvedRelativeTargetAt === Pt.timestamp && (l = false), l) return;
        const { layout: u, layoutId: c } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c)) return;
        Ue(this.layoutCorrected, this.layout.layoutBox);
        const f = this.treeScale.x, h = this.treeScale.y;
        G3(this.layoutCorrected, this.treeScale, this.path, r), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = jt());
        const { target: d } = o;
        if (!d) {
          this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (cy(this.prevProjectionDelta.x, this.projectionDelta.x), cy(this.prevProjectionDelta.y, this.projectionDelta.y)), Ws(this.projectionDelta, this.layoutCorrected, d, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !Sy(this.projectionDelta.x, this.prevProjectionDelta.x) || !Sy(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", d));
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender(o = true) {
        var _a5;
        if ((_a5 = this.options.visualElement) == null ? void 0 : _a5.scheduleRender(), o) {
          const r = this.getStack();
          r && r.scheduleRender();
        }
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = Ra(), this.projectionDelta = Ra(), this.projectionDeltaWithTransform = Ra();
      }
      setAnimationOrigin(o, r = false) {
        const l = this.snapshot, u = l ? l.latestValues : {}, c = {
          ...this.latestValues
        }, f = Ra();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !r;
        const h = jt(), d = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, y = d !== v, b = this.getStack(), p = !b || b.members.length <= 1, m = !!(y && !p && this.options.crossfade === true && !this.path.some(k5));
        this.animationProgress = 0;
        let g;
        this.mixTargetDelta = (S) => {
          const T = S / 1e3;
          Ry(f.x, o.x, T), Ry(f.y, o.y, T), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ll(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), H5(this.relativeTarget, this.relativeTargetOrigin, h, T), g && y5(this.relativeTarget, g) && (this.isProjectionDirty = false), g || (g = jt()), Ue(g, this.relativeTarget)), y && (this.animationValues = c, x5(c, u, this.latestValues, T, m, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(o) {
        var _a5, _b3, _c3;
        this.notifyListeners("animationStart"), (_a5 = this.currentAnimation) == null ? void 0 : _a5.stop(), (_c3 = (_b3 = this.resumingFrom) == null ? void 0 : _b3.currentAnimation) == null ? void 0 : _c3.stop(), this.pendingAnimation && (yi(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ct.update(() => {
          Xr.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = es(0)), this.currentAnimation = T5(this.motionValue, [
            0,
            1e3
          ], {
            ...o,
            velocity: 0,
            isSync: true,
            onUpdate: (r) => {
              this.mixTargetDelta(r), o.onUpdate && o.onUpdate(r);
            },
            onStop: () => {
            },
            onComplete: () => {
              o.onComplete && o.onComplete(), this.completeAnimation();
            }
          }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
        const o = this.getStack();
        o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(R5), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const o = this.getLead();
        let { targetWithTransforms: r, target: l, layout: u, latestValues: c } = o;
        if (!(!r || !l || !u)) {
          if (this !== o && this.layout && u && nw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
            l = this.target || jt();
            const f = $t(this.layout.layoutBox.x);
            l.x.min = o.target.x.min, l.x.max = l.x.min + f;
            const h = $t(this.layout.layoutBox.y);
            l.y.min = o.target.y.min, l.y.max = l.y.min + h;
          }
          Ue(r, l), Oa(r, c), Ws(this.projectionDeltaWithTransform, this.layoutCorrected, r, c);
        }
      }
      registerSharedNode(o, r) {
        this.sharedNodes.has(o) || this.sharedNodes.set(o, new M5()), this.sharedNodes.get(o).add(r);
        const u = r.options.initialPromotionConfig;
        r.promote({
          transition: u ? u.transition : void 0,
          preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(r) : void 0
        });
      }
      isLead() {
        const o = this.getStack();
        return o ? o.lead === this : true;
      }
      getLead() {
        var _a5;
        const { layoutId: o } = this.options;
        return o ? ((_a5 = this.getStack()) == null ? void 0 : _a5.lead) || this : this;
      }
      getPrevLead() {
        var _a5;
        const { layoutId: o } = this.options;
        return o ? (_a5 = this.getStack()) == null ? void 0 : _a5.prevLead : void 0;
      }
      getStack() {
        const { layoutId: o } = this.options;
        if (o) return this.root.sharedNodes.get(o);
      }
      promote({ needsReset: o, transition: r, preserveFollowOpacity: l } = {}) {
        const u = this.getStack();
        u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = true), r && this.setOptions({
          transition: r
        });
      }
      relegate() {
        const o = this.getStack();
        return o ? o.relegate(this) : false;
      }
      resetSkewAndRotation() {
        const { visualElement: o } = this.options;
        if (!o) return;
        let r = false;
        const { latestValues: l } = o;
        if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (r = true), !r) return;
        const u = {};
        l.z && wc("z", o, u, this.animationValues);
        for (let c = 0; c < Sc.length; c++) wc(`rotate${Sc[c]}`, o, u, this.animationValues), wc(`skew${Sc[c]}`, o, u, this.animationValues);
        o.render();
        for (const c in u) o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
        o.scheduleRender();
      }
      applyProjectionStyles(o, r) {
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) {
          o.visibility = "hidden";
          return;
        }
        const l = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false, o.visibility = "", o.opacity = "", o.pointerEvents = qr(r == null ? void 0 : r.pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
          return;
        }
        const u = this.getLead();
        if (!this.projectionDelta || !this.layout || !u.target) {
          this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = qr(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !_i(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = false);
          return;
        }
        o.visibility = "";
        const c = u.animationValues || u.latestValues;
        this.applyTransformsToTarget();
        let f = v5(this.projectionDeltaWithTransform, this.treeScale, c);
        l && (f = l(c, f)), o.transform = f;
        const { x: h, y: d } = this.projectionDelta;
        o.transformOrigin = `${h.origin * 100}% ${d.origin * 100}% 0`, u.animationValues ? o.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
        for (const v in rd) {
          if (c[v] === void 0) continue;
          const { correct: y, applyTo: b, isCSSVariable: p } = rd[v], m = f === "none" ? c[v] : y(c[v], u);
          if (b) {
            const g = b.length;
            for (let S = 0; S < g; S++) o[b[S]] = m;
          } else p ? this.options.visualElement.renderState.vars[v] = m : o[v] = m;
        }
        this.options.layoutId && (o.pointerEvents = u === this ? qr(r == null ? void 0 : r.pointerEvents) || "" : "none");
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((o) => {
          var _a5;
          return (_a5 = o.currentAnimation) == null ? void 0 : _a5.stop();
        }), this.root.nodes.forEach(Ay), this.root.sharedNodes.clear();
      }
    };
  }
  function O5(t) {
    t.updateLayout();
  }
  function N5(t) {
    var _a5;
    const e = ((_a5 = t.resumeFrom) == null ? void 0 : _a5.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
      const { layoutBox: n, measuredBox: i } = t.layout, { animationType: a } = t.options, s = e.source !== t.layout.source;
      a === "size" ? Ke((c) => {
        const f = s ? e.measuredBox[c] : e.layoutBox[c], h = $t(f);
        f.min = n[c].min, f.max = f.min + h;
      }) : nw(a, e.layoutBox, n) && Ke((c) => {
        const f = s ? e.measuredBox[c] : e.layoutBox[c], h = $t(n[c]);
        f.max = f.min + h, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = true, t.relativeTarget[c].max = t.relativeTarget[c].min + h);
      });
      const o = Ra();
      Ws(o, n, e.layoutBox);
      const r = Ra();
      s ? Ws(r, t.applyTransform(i, true), e.measuredBox) : Ws(r, n, e.layoutBox);
      const l = !$S(o);
      let u = false;
      if (!t.resumeFrom) {
        const c = t.getClosestProjectingParent();
        if (c && !c.resumeFrom) {
          const { snapshot: f, layout: h } = c;
          if (f && h) {
            const d = jt();
            Ll(d, e.layoutBox, f.layoutBox);
            const v = jt();
            Ll(v, n, h.layoutBox), IS(d, v) || (u = true), c.options.layoutRoot && (t.relativeTarget = v, t.relativeTargetOrigin = d, t.relativeParent = c);
          }
        }
      }
      t.notifyListeners("didUpdate", {
        layout: n,
        snapshot: e,
        delta: r,
        layoutDelta: o,
        hasLayoutChanged: l,
        hasRelativeLayoutChanged: u
      });
    } else if (t.isLead()) {
      const { onExitComplete: n } = t.options;
      n && n();
    }
    t.options.transition = void 0;
  }
  function j5(t) {
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
  }
  function z5(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
  }
  function _5(t) {
    t.clearSnapshot();
  }
  function Ay(t) {
    t.clearMeasurements();
  }
  function Cy(t) {
    t.isLayoutDirty = false;
  }
  function L5(t) {
    const { visualElement: e } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
  }
  function My(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = true;
  }
  function V5(t) {
    t.resolveTargetDelta();
  }
  function B5(t) {
    t.calcProjection();
  }
  function U5(t) {
    t.resetSkewAndRotation();
  }
  function P5(t) {
    t.removeLeadSnapshot();
  }
  function Ry(t, e, n) {
    t.translate = xt(e.translate, 0, n), t.scale = xt(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
  }
  function Dy(t, e, n, i) {
    t.min = xt(e.min, n.min, i), t.max = xt(e.max, n.max, i);
  }
  function H5(t, e, n, i) {
    Dy(t.x, e.x, n.x, i), Dy(t.y, e.y, n.y, i);
  }
  function k5(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0;
  }
  const G5 = {
    duration: 0.45,
    ease: [
      0.4,
      0,
      0.1,
      1
    ]
  }, Oy = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ny = Oy("applewebkit/") && !Oy("chrome/") ? Math.round : Oe;
  function jy(t) {
    t.min = Ny(t.min), t.max = Ny(t.max);
  }
  function Y5(t) {
    jy(t.x), jy(t.y);
  }
  function nw(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !d5(xy(e), xy(n), 0.2);
  }
  function q5(t) {
    var _a5;
    return t !== t.root && ((_a5 = t.scroll) == null ? void 0 : _a5.wasRoot);
  }
  const X5 = ew({
    attachResizeListener: (t, e) => Co(t, "resize", e),
    measureScroll: () => {
      var _a5, _b3;
      return {
        x: document.documentElement.scrollLeft || ((_a5 = document.body) == null ? void 0 : _a5.scrollLeft) || 0,
        y: document.documentElement.scrollTop || ((_b3 = document.body) == null ? void 0 : _b3.scrollTop) || 0
      };
    },
    checkIsScrollRoot: () => true
  }), Tc = {
    current: void 0
  }, iw = ew({
    measureScroll: (t) => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!Tc.current) {
        const t = new X5({});
        t.mount(window), t.setOptions({
          layoutScroll: true
        }), Tc.current = t;
      }
      return Tc.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
  }), aw = x.createContext({
    transformPagePoint: (t) => t,
    isStatic: false,
    reducedMotion: "never"
  });
  function F5(t = true) {
    const e = x.useContext(jh);
    if (e === null) return [
      true,
      null
    ];
    const { isPresent: n, onExitComplete: i, register: a } = e, s = x.useId();
    x.useEffect(() => {
      if (t) return a(s);
    }, [
      t
    ]);
    const o = x.useCallback(() => t && i && i(s), [
      s,
      i,
      t
    ]);
    return !n && i ? [
      false,
      o
    ] : [
      true
    ];
  }
  const sw = x.createContext({
    strict: false
  }), zy = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag"
    ],
    exit: [
      "exit"
    ],
    drag: [
      "drag",
      "dragControls"
    ],
    focus: [
      "whileFocus"
    ],
    hover: [
      "whileHover",
      "onHoverStart",
      "onHoverEnd"
    ],
    tap: [
      "whileTap",
      "onTap",
      "onTapStart",
      "onTapCancel"
    ],
    pan: [
      "onPan",
      "onPanStart",
      "onPanSessionStart",
      "onPanEnd"
    ],
    inView: [
      "whileInView",
      "onViewportEnter",
      "onViewportLeave"
    ],
    layout: [
      "layout",
      "layoutId"
    ]
  };
  let _y = false;
  function K5() {
    if (_y) return;
    const t = {};
    for (const e in zy) t[e] = {
      isEnabled: (n) => zy[e].some((i) => !!n[i])
    };
    _S(t), _y = true;
  }
  function ow() {
    return K5(), U3();
  }
  function Q5(t) {
    const e = ow();
    for (const n in t) e[n] = {
      ...e[n],
      ...t[n]
    };
    _S(e);
  }
  const Z5 = /* @__PURE__ */ new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "propagate",
    "ignoreStrict",
    "viewport"
  ]);
  function Vl(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Z5.has(t);
  }
  let rw = (t) => !Vl(t);
  function $5(t) {
    typeof t == "function" && (rw = (e) => e.startsWith("on") ? !Vl(e) : t(e));
  }
  try {
    $5(require("@emotion/is-prop-valid").default);
  } catch {
  }
  function I5(t, e, n) {
    const i = {};
    for (const a in t) a === "values" && typeof t.values == "object" || (rw(a) || n === true && Vl(a) || !e && !Vl(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i;
  }
  const gu = x.createContext({});
  function J5(t, e) {
    if (pu(t)) {
      const { initial: n, animate: i } = t;
      return {
        initial: n === false || Ao(n) ? n : void 0,
        animate: Ao(i) ? i : void 0
      };
    }
    return t.inherit !== false ? e : {};
  }
  function W5(t) {
    const { initial: e, animate: n } = J5(t, x.useContext(gu));
    return x.useMemo(() => ({
      initial: e,
      animate: n
    }), [
      Ly(e),
      Ly(n)
    ]);
  }
  function Ly(t) {
    return Array.isArray(t) ? t.join(" ") : t;
  }
  const sm = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function lw(t, e, n) {
    for (const i in e) !Xt(e[i]) && !kS(i, n) && (t[i] = e[i]);
  }
  function t4({ transformTemplate: t }, e) {
    return x.useMemo(() => {
      const n = sm();
      return im(n, e, t), Object.assign({}, n.vars, n.style);
    }, [
      e
    ]);
  }
  function e4(t, e) {
    const n = t.style || {}, i = {};
    return lw(i, n, t), Object.assign(i, t4(t, e)), i;
  }
  function n4(t, e) {
    const n = {}, i = e4(t, e);
    return t.drag && t.dragListener !== false && (n.draggable = false, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
  }
  const uw = () => ({
    ...sm(),
    attrs: {}
  });
  function i4(t, e, n, i) {
    const a = x.useMemo(() => {
      const s = uw();
      return GS(s, e, qS(i), t.transformTemplate, t.style), {
        ...s.attrs,
        style: {
          ...s.style
        }
      };
    }, [
      e
    ]);
    if (t.style) {
      const s = {};
      lw(s, t.style, t), a.style = {
        ...s,
        ...a.style
      };
    }
    return a;
  }
  const a4 = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
  ];
  function om(t) {
    return typeof t != "string" || t.includes("-") ? false : !!(a4.indexOf(t) > -1 || /[A-Z]/u.test(t));
  }
  function s4(t, e, n, { latestValues: i }, a, s = false, o) {
    const l = (o ?? om(t) ? i4 : n4)(e, i, a, t), u = I5(e, typeof t == "string", s), c = t !== x.Fragment ? {
      ...u,
      ...l,
      ref: n
    } : {}, { children: f } = e, h = x.useMemo(() => Xt(f) ? f.get() : f, [
      f
    ]);
    return x.createElement(t, {
      ...c,
      children: h
    });
  }
  function o4({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, a) {
    return {
      latestValues: r4(n, i, a, t),
      renderState: e()
    };
  }
  function r4(t, e, n, i) {
    const a = {}, s = i(t, {});
    for (const h in s) a[h] = qr(s[h]);
    let { initial: o, animate: r } = t;
    const l = pu(t), u = jS(t);
    e && u && !l && t.inherit !== false && (o === void 0 && (o = e.initial), r === void 0 && (r = e.animate));
    let c = n ? n.initial === false : false;
    c = c || o === false;
    const f = c ? r : o;
    if (f && typeof f != "boolean" && !mu(f)) {
      const h = Array.isArray(f) ? f : [
        f
      ];
      for (let d = 0; d < h.length; d++) {
        const v = Zh(t, h[d]);
        if (v) {
          const { transitionEnd: y, transition: b, ...p } = v;
          for (const m in p) {
            let g = p[m];
            if (Array.isArray(g)) {
              const S = c ? g.length - 1 : 0;
              g = g[S];
            }
            g !== null && (a[m] = g);
          }
          for (const m in y) a[m] = y[m];
        }
      }
    }
    return a;
  }
  const cw = (t) => (e, n) => {
    const i = x.useContext(gu), a = x.useContext(jh), s = () => o4(t, e, i, a);
    return n ? s() : uO(s);
  }, l4 = cw({
    scrapeMotionValuesFromProps: am,
    createRenderState: sm
  }), u4 = cw({
    scrapeMotionValuesFromProps: XS,
    createRenderState: uw
  }), c4 = Symbol.for("motionComponentSymbol");
  function f4(t, e, n) {
    const i = x.useRef(n);
    x.useInsertionEffect(() => {
      i.current = n;
    });
    const a = x.useRef(null);
    return x.useCallback((s) => {
      var _a5;
      s && ((_a5 = t.onMount) == null ? void 0 : _a5.call(t, s)), e && (s ? e.mount(s) : e.unmount());
      const o = i.current;
      if (typeof o == "function") if (s) {
        const r = o(s);
        typeof r == "function" && (a.current = r);
      } else a.current ? (a.current(), a.current = null) : o(s);
      else o && (o.current = s);
    }, [
      e
    ]);
  }
  const fw = x.createContext({});
  function ha(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
  }
  function d4(t, e, n, i, a, s) {
    var _a5, _b3;
    const { visualElement: o } = x.useContext(gu), r = x.useContext(sw), l = x.useContext(jh), u = x.useContext(aw), c = u.reducedMotion, f = u.skipAnimations, h = x.useRef(null), d = x.useRef(false);
    i = i || r.renderer, !h.current && i && (h.current = i(t, {
      visualState: e,
      parent: o,
      props: n,
      presenceContext: l,
      blockInitialAnimation: l ? l.initial === false : false,
      reducedMotionConfig: c,
      skipAnimations: f,
      isSVG: s
    }), d.current && h.current && (h.current.manuallyAnimateOnMount = true));
    const v = h.current, y = x.useContext(fw);
    v && !v.projection && a && (v.type === "html" || v.type === "svg") && h4(h.current, n, a, y);
    const b = x.useRef(false);
    x.useInsertionEffect(() => {
      v && b.current && v.update(n, l);
    });
    const p = n[bS], m = x.useRef(!!p && !((_a5 = window.MotionHandoffIsComplete) == null ? void 0 : _a5.call(window, p)) && ((_b3 = window.MotionHasOptimisedAnimation) == null ? void 0 : _b3.call(window, p)));
    return cO(() => {
      d.current = true, v && (b.current = true, window.MotionIsMounted = true, v.updateFeatures(), v.scheduleRenderMicrotask(), m.current && v.animationState && v.animationState.animateChanges());
    }), x.useEffect(() => {
      v && (!m.current && v.animationState && v.animationState.animateChanges(), m.current && (queueMicrotask(() => {
        var _a6;
        (_a6 = window.MotionHandoffMarkAsComplete) == null ? void 0 : _a6.call(window, p);
      }), m.current = false), v.enteringChildren = void 0);
    }), v;
  }
  function h4(t, e, n, i) {
    const { layoutId: a, layout: s, drag: o, dragConstraints: r, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : dw(t.parent)), t.projection.setOptions({
      layoutId: a,
      layout: s,
      alwaysMeasureLayout: !!o || r && ha(r),
      visualElement: t,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: i,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u
    });
  }
  function dw(t) {
    if (t) return t.options.allowProjection !== false ? t.projection : dw(t.parent);
  }
  function Ec(t, { forwardMotionProps: e = false, type: n } = {}, i, a) {
    i && Q5(i);
    const s = n ? n === "svg" : om(t), o = s ? u4 : l4;
    function r(u, c) {
      let f;
      const h = {
        ...x.useContext(aw),
        ...u,
        layoutId: m4(u)
      }, { isStatic: d } = h, v = W5(u), y = o(u, d);
      if (!d && _x) {
        p4();
        const b = g4(h);
        f = b.MeasureLayout, v.visualElement = d4(t, y, h, a, b.ProjectionNode, s);
      }
      return w.jsxs(gu.Provider, {
        value: v,
        children: [
          f && v.visualElement ? w.jsx(f, {
            visualElement: v.visualElement,
            ...h
          }) : null,
          s4(t, u, f4(y, v.visualElement, c), y, d, e, s)
        ]
      });
    }
    r.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
    const l = x.forwardRef(r);
    return l[c4] = t, l;
  }
  function m4({ layoutId: t }) {
    const e = x.useContext(zx).id;
    return e && t !== void 0 ? e + "-" + t : t;
  }
  function p4(t, e) {
    x.useContext(sw).strict;
  }
  function g4(t) {
    const e = ow(), { drag: n, layout: i } = e;
    if (!n && !i) return {};
    const a = {
      ...n,
      ...i
    };
    return {
      MeasureLayout: (n == null ? void 0 : n.isEnabled(t)) || (i == null ? void 0 : i.isEnabled(t)) ? a.MeasureLayout : void 0,
      ProjectionNode: a.ProjectionNode
    };
  }
  function y4(t, e) {
    if (typeof Proxy > "u") return Ec;
    const n = /* @__PURE__ */ new Map(), i = (s, o) => Ec(s, o, t, e), a = (s, o) => i(s, o);
    return new Proxy(a, {
      get: (s, o) => o === "create" ? i : (n.has(o) || n.set(o, Ec(o, void 0, t, e)), n.get(o))
    });
  }
  const v4 = (t, e) => e.isSVG ?? om(t) ? new e5(e) : new Z3(e, {
    allowProjection: t !== x.Fragment
  });
  class b4 extends wi {
    constructor(e) {
      super(e), e.animationState || (e.animationState = o5(e));
    }
    updateAnimationControlsSubscription() {
      const { animate: e } = this.node.getProps();
      mu(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
      e !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var _a5;
      this.node.animationState.reset(), (_a5 = this.unmountControls) == null ? void 0 : _a5.call(this);
    }
  }
  let x4 = 0;
  class S4 extends wi {
    constructor() {
      super(...arguments), this.id = x4++;
    }
    update() {
      if (!this.node.presenceContext) return;
      const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === i) return;
      const a = this.node.animationState.setActive("exit", !e);
      n && !e && a.then(() => {
        n(this.id);
      });
    }
    mount() {
      const { register: e, onExitComplete: n } = this.node.presenceContext || {};
      n && n(this.id), e && (this.unmount = e(this.id));
    }
    unmount() {
    }
  }
  const w4 = {
    animation: {
      Feature: b4
    },
    exit: {
      Feature: S4
    }
  };
  function Ko(t) {
    return {
      point: {
        x: t.pageX,
        y: t.pageY
      }
    };
  }
  const T4 = (t) => (e) => Wh(e) && t(e, Ko(e));
  function to(t, e, n, i) {
    return Co(t, e, T4(n), i);
  }
  const hw = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Vy = (t, e) => Math.abs(t - e);
  function E4(t, e) {
    const n = Vy(t.x, e.x), i = Vy(t.y, e.y);
    return Math.sqrt(n ** 2 + i ** 2);
  }
  const By = /* @__PURE__ */ new Set([
    "auto",
    "scroll"
  ]);
  class mw {
    constructor(e, n, { transformPagePoint: i, contextWindow: a = window, dragSnapToOrigin: s = false, distanceThreshold: o = 3, element: r } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (d) => {
        this.handleScroll(d.target);
      }, this.onWindowScroll = () => {
        this.handleScroll(window);
      }, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Cc(this.lastMoveEventInfo, this.history), v = this.startEvent !== null, y = E4(d.offset, {
          x: 0,
          y: 0
        }) >= this.distanceThreshold;
        if (!v && !y) return;
        const { point: b } = d, { timestamp: p } = Pt;
        this.history.push({
          ...b,
          timestamp: p
        });
        const { onStart: m, onMove: g } = this.handlers;
        v || (m && m(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, d);
      }, this.handlePointerMove = (d, v) => {
        this.lastMoveEvent = d, this.lastMoveEventInfo = Ac(v, this.transformPagePoint), ct.update(this.updatePoint, true);
      }, this.handlePointerUp = (d, v) => {
        this.end();
        const { onEnd: y, onSessionEnd: b, resumeAnimation: p } = this.handlers;
        if ((this.dragSnapToOrigin || !this.startEvent) && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const m = Cc(d.type === "pointercancel" ? this.lastMoveEventInfo : Ac(v, this.transformPagePoint), this.history);
        this.startEvent && y && y(d, m), b && b(d, m);
      }, !Wh(e)) return;
      this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = o, this.contextWindow = a || window;
      const l = Ko(e), u = Ac(l, this.transformPagePoint), { point: c } = u, { timestamp: f } = Pt;
      this.history = [
        {
          ...c,
          timestamp: f
        }
      ];
      const { onSessionStart: h } = n;
      h && h(e, Cc(u, this.history)), this.removeListeners = qo(to(this.contextWindow, "pointermove", this.handlePointerMove), to(this.contextWindow, "pointerup", this.handlePointerUp), to(this.contextWindow, "pointercancel", this.handlePointerUp)), r && this.startScrollTracking(r);
    }
    startScrollTracking(e) {
      let n = e.parentElement;
      for (; n; ) {
        const i = getComputedStyle(n);
        (By.has(i.overflowX) || By.has(i.overflowY)) && this.scrollPositions.set(n, {
          x: n.scrollLeft,
          y: n.scrollTop
        }), n = n.parentElement;
      }
      this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY
      }), window.addEventListener("scroll", this.onElementScroll, {
        capture: true,
        passive: true
      }), window.addEventListener("scroll", this.onWindowScroll, {
        passive: true
      }), this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: true
        }), window.removeEventListener("scroll", this.onWindowScroll);
      };
    }
    handleScroll(e) {
      const n = this.scrollPositions.get(e);
      if (!n) return;
      const i = e === window, a = i ? {
        x: window.scrollX,
        y: window.scrollY
      } : {
        x: e.scrollLeft,
        y: e.scrollTop
      }, s = {
        x: a.x - n.x,
        y: a.y - n.y
      };
      s.x === 0 && s.y === 0 || (i ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x, this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x, this.history[0].y -= s.y), this.scrollPositions.set(e, a), ct.update(this.updatePoint, true));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), yi(this.updatePoint);
    }
  }
  function Ac(t, e) {
    return e ? {
      point: e(t.point)
    } : t;
  }
  function Uy(t, e) {
    return {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  function Cc({ point: t }, e) {
    return {
      point: t,
      delta: Uy(t, pw(e)),
      offset: Uy(t, A4(e)),
      velocity: C4(e, 0.1)
    };
  }
  function A4(t) {
    return t[0];
  }
  function pw(t) {
    return t[t.length - 1];
  }
  function C4(t, e) {
    if (t.length < 2) return {
      x: 0,
      y: 0
    };
    let n = t.length - 1, i = null;
    const a = pw(t);
    for (; n >= 0 && (i = t[n], !(a.timestamp - i.timestamp > Ne(e))); ) n--;
    if (!i) return {
      x: 0,
      y: 0
    };
    i === t[0] && t.length > 2 && a.timestamp - i.timestamp > Ne(e) * 2 && (i = t[1]);
    const s = Me(a.timestamp - i.timestamp);
    if (s === 0) return {
      x: 0,
      y: 0
    };
    const o = {
      x: (a.x - i.x) / s,
      y: (a.y - i.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
  }
  function M4(t, { min: e, max: n }, i) {
    return e !== void 0 && t < e ? t = i ? xt(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? xt(n, t, i.max) : Math.min(t, n)), t;
  }
  function Py(t, e, n) {
    return {
      min: e !== void 0 ? t.min + e : void 0,
      max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    };
  }
  function R4(t, { top: e, left: n, bottom: i, right: a }) {
    return {
      x: Py(t.x, n, a),
      y: Py(t.y, e, i)
    };
  }
  function Hy(t, e) {
    let n = e.min - t.min, i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, i] = [
      i,
      n
    ]), {
      min: n,
      max: i
    };
  }
  function D4(t, e) {
    return {
      x: Hy(t.x, e.x),
      y: Hy(t.y, e.y)
    };
  }
  function O4(t, e) {
    let n = 0.5;
    const i = $t(t), a = $t(e);
    return a > i ? n = wo(e.min, e.max - i, t.min) : i > a && (n = wo(t.min, t.max - a, e.min)), nn(0, 1, n);
  }
  function N4(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
  }
  const ld = 0.35;
  function j4(t = ld) {
    return t === false ? t = 0 : t === true && (t = ld), {
      x: ky(t, "left", "right"),
      y: ky(t, "top", "bottom")
    };
  }
  function ky(t, e, n) {
    return {
      min: Gy(t, e),
      max: Gy(t, n)
    };
  }
  function Gy(t, e) {
    return typeof t == "number" ? t : t[e] || 0;
  }
  const z4 = /* @__PURE__ */ new WeakMap();
  class _4 {
    constructor(e) {
      this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = {
        x: 0,
        y: 0
      }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = jt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
    }
    start(e, { snapToCursor: n = false, distanceThreshold: i } = {}) {
      const { presenceContext: a } = this.visualElement;
      if (a && a.isPresent === false) return;
      const s = (f) => {
        n && this.snapToCursor(Ko(f).point), this.stopAnimation();
      }, o = (f, h) => {
        const { drag: d, dragPropagation: v, onDragStart: y } = this.getProps();
        if (d && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = m3(d), !this.openDragLock)) return;
        this.latestPointerEvent = f, this.latestPanInfo = h, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), Ke((p) => {
          let m = this.getAxisMotionValue(p).get() || 0;
          if (tn.test(m)) {
            const { projection: g } = this.visualElement;
            if (g && g.layout) {
              const S = g.layout.layoutBox[p];
              S && (m = $t(S) * (parseFloat(m) / 100));
            }
          }
          this.originPoint[p] = m;
        }), y && ct.update(() => y(f, h), false, true), ed(this.visualElement, "transform");
        const { animationState: b } = this.visualElement;
        b && b.setActive("whileDrag", true);
      }, r = (f, h) => {
        this.latestPointerEvent = f, this.latestPanInfo = h;
        const { dragPropagation: d, dragDirectionLock: v, onDirectionLock: y, onDrag: b } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: p } = h;
        if (v && this.currentDirection === null) {
          this.currentDirection = V4(p), this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", h.point, p), this.updateAxis("y", h.point, p), this.visualElement.render(), b && ct.update(() => b(f, h), false, true);
      }, l = (f, h) => {
        this.latestPointerEvent = f, this.latestPanInfo = h, this.stop(f, h), this.latestPointerEvent = null, this.latestPanInfo = null;
      }, u = () => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f || this.constraints) && this.startAnimation({
          x: 0,
          y: 0
        });
      }, { dragSnapToOrigin: c } = this.getProps();
      this.panSession = new mw(e, {
        onSessionStart: s,
        onStart: o,
        onMove: r,
        onSessionEnd: l,
        resumeAnimation: u
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: i,
        contextWindow: hw(this.visualElement),
        element: this.visualElement.current
      });
    }
    stop(e, n) {
      const i = e || this.latestPointerEvent, a = n || this.latestPanInfo, s = this.isDragging;
      if (this.cancel(), !s || !a || !i) return;
      const { velocity: o } = a;
      this.startAnimation(o);
      const { onDragEnd: r } = this.getProps();
      r && ct.postRender(() => r(i, a));
    }
    cancel() {
      this.isDragging = false;
      const { projection: e, animationState: n } = this.visualElement;
      e && (e.isAnimationBlocked = false), this.endPanSession();
      const { dragPropagation: i } = this.getProps();
      !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", false);
    }
    endPanSession() {
      this.panSession && this.panSession.end(), this.panSession = void 0;
    }
    updateAxis(e, n, i) {
      const { drag: a } = this.getProps();
      if (!i || !vr(e, a, this.currentDirection)) return;
      const s = this.getAxisMotionValue(e);
      let o = this.originPoint[e] + i[e];
      this.constraints && this.constraints[e] && (o = M4(o, this.constraints[e], this.elastic[e])), s.set(o);
    }
    resolveConstraints() {
      var _a5;
      const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a5 = this.visualElement.projection) == null ? void 0 : _a5.layout, a = this.constraints;
      e && ha(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = R4(i.layoutBox, e) : this.constraints = false, this.elastic = j4(n), a !== this.constraints && !ha(e) && i && this.constraints && !this.hasMutatedConstraints && Ke((s) => {
        this.constraints !== false && this.getAxisMotionValue(s) && (this.constraints[s] = N4(i.layoutBox[s], this.constraints[s]));
      });
    }
    resolveRefConstraints() {
      const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
      if (!e || !ha(e)) return false;
      const i = e.current;
      ts(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
      const { projection: a } = this.visualElement;
      if (!a || !a.layout) return false;
      const s = Y3(i, a.root, this.visualElement.getTransformPagePoint());
      let o = D4(a.layout.layoutBox, s);
      if (n) {
        const r = n(H3(o));
        this.hasMutatedConstraints = !!r, r && (o = VS(r));
      }
      return o;
    }
    startAnimation(e) {
      const { drag: n, dragMomentum: i, dragElastic: a, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: r } = this.getProps(), l = this.constraints || {}, u = Ke((c) => {
        if (!vr(c, n, this.currentDirection)) return;
        let f = l && l[c] || {};
        o && (f = {
          min: 0,
          max: 0
        });
        const h = a ? 200 : 1e6, d = a ? 40 : 1e7, v = {
          type: "inertia",
          velocity: i ? e[c] : 0,
          bounceStiffness: h,
          bounceDamping: d,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...s,
          ...f
        };
        return this.startAxisValueAnimation(c, v);
      });
      return Promise.all(u).then(r);
    }
    startAxisValueAnimation(e, n) {
      const i = this.getAxisMotionValue(e);
      return ed(this.visualElement, e), i.start(Qh(e, i, 0, n, this.visualElement, false));
    }
    stopAnimation() {
      Ke((e) => this.getAxisMotionValue(e).stop());
    }
    getAxisMotionValue(e) {
      const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps(), a = i[n];
      return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
    }
    snapToCursor(e) {
      Ke((n) => {
        const { drag: i } = this.getProps();
        if (!vr(n, i, this.currentDirection)) return;
        const { projection: a } = this.visualElement, s = this.getAxisMotionValue(n);
        if (a && a.layout) {
          const { min: o, max: r } = a.layout.layoutBox[n], l = s.get() || 0;
          s.set(e[n] - xt(o, r, 0.5) + l);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
      if (!ha(n) || !i || !this.constraints) return;
      this.stopAnimation();
      const a = {
        x: 0,
        y: 0
      };
      Ke((o) => {
        const r = this.getAxisMotionValue(o);
        if (r && this.constraints !== false) {
          const l = r.get();
          a[o] = O4({
            min: l,
            max: l
          }, this.constraints[o]);
        }
      });
      const { transformTemplate: s } = this.visualElement.getProps();
      this.visualElement.current.style.transform = s ? s({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = false, this.resolveConstraints(), Ke((o) => {
        if (!vr(o, e, null)) return;
        const r = this.getAxisMotionValue(o), { min: l, max: u } = this.constraints[o];
        r.set(xt(l, u, a[o]));
      }), this.visualElement.render();
    }
    addListeners() {
      if (!this.visualElement.current) return;
      z4.set(this.visualElement, this);
      const e = this.visualElement.current, n = to(e, "pointerdown", (u) => {
        const { drag: c, dragListener: f = true } = this.getProps(), h = u.target, d = h !== e && x3(h);
        c && f && !d && this.start(u);
      });
      let i;
      const a = () => {
        const { dragConstraints: u } = this.getProps();
        ha(u) && u.current && (this.constraints = this.resolveRefConstraints(), i || (i = L4(e, u.current, () => this.scalePositionWithinConstraints())));
      }, { projection: s } = this.visualElement, o = s.addEventListener("measure", a);
      s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), ct.read(a);
      const r = Co(window, "resize", () => this.scalePositionWithinConstraints()), l = s.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: c }) => {
        this.isDragging && c && (Ke((f) => {
          const h = this.getAxisMotionValue(f);
          h && (this.originPoint[f] += u[f].translate, h.set(h.get() + u[f].translate));
        }), this.visualElement.render());
      });
      return () => {
        r(), n(), o(), l && l(), i && i();
      };
    }
    getProps() {
      const e = this.visualElement.getProps(), { drag: n = false, dragDirectionLock: i = false, dragPropagation: a = false, dragConstraints: s = false, dragElastic: o = ld, dragMomentum: r = true } = e;
      return {
        ...e,
        drag: n,
        dragDirectionLock: i,
        dragPropagation: a,
        dragConstraints: s,
        dragElastic: o,
        dragMomentum: r
      };
    }
  }
  function Yy(t) {
    let e = true;
    return () => {
      if (e) {
        e = false;
        return;
      }
      t();
    };
  }
  function L4(t, e, n) {
    const i = Jg(t, Yy(n)), a = Jg(e, Yy(n));
    return () => {
      i(), a();
    };
  }
  function vr(t, e, n) {
    return (e === true || e === t) && (n === null || n === t);
  }
  function V4(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
  }
  class B4 extends wi {
    constructor(e) {
      super(e), this.removeGroupControls = Oe, this.removeListeners = Oe, this.controls = new _4(e);
    }
    mount() {
      const { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Oe;
    }
    update() {
      const { dragControls: e } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
      e !== n && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
    }
  }
  const Mc = (t) => (e, n) => {
    t && ct.update(() => t(e, n), false, true);
  };
  class U4 extends wi {
    constructor() {
      super(...arguments), this.removePointerDownListener = Oe;
    }
    onPointerDown(e) {
      this.session = new mw(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: hw(this.node)
      });
    }
    createPanHandlers() {
      const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: a } = this.node.getProps();
      return {
        onSessionStart: Mc(e),
        onStart: Mc(n),
        onMove: Mc(i),
        onEnd: (s, o) => {
          delete this.session, a && ct.postRender(() => a(s, o));
        }
      };
    }
    mount() {
      this.removePointerDownListener = to(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  let Rc = false;
  class P4 extends x.Component {
    componentDidMount() {
      const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: a } = this.props, { projection: s } = e;
      s && (n.group && n.group.add(s), i && i.register && a && i.register(s), Rc && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), s.setOptions({
        ...s.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      })), Xr.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(e) {
      const { layoutDependency: n, visualElement: i, drag: a, isPresent: s } = this.props, { projection: o } = i;
      return o && (o.isPresent = s, e.layoutDependency !== n && o.setOptions({
        ...o.options,
        layoutDependency: n
      }), Rc = true, a || e.layoutDependency !== n || n === void 0 || e.isPresent !== s ? o.willUpdate() : this.safeToRemove(), e.isPresent !== s && (s ? o.promote() : o.relegate() || ct.postRender(() => {
        const r = o.getStack();
        (!r || !r.members.length) && this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      const { projection: e } = this.props.visualElement;
      e && (e.root.didUpdate(), Jh.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: a } = e;
      Rc = true, a && (a.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(a), i && i.deregister && i.deregister(a));
    }
    safeToRemove() {
      const { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  }
  function gw(t) {
    const [e, n] = F5(), i = x.useContext(zx);
    return w.jsx(P4, {
      ...t,
      layoutGroup: i,
      switchLayoutGroup: x.useContext(fw),
      isPresent: e,
      safeToRemove: n
    });
  }
  const H4 = {
    pan: {
      Feature: U4
    },
    drag: {
      Feature: B4,
      ProjectionNode: iw,
      MeasureLayout: gw
    }
  };
  function qy(t, e, n) {
    const { props: i } = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const a = "onHover" + n, s = i[a];
    s && ct.postRender(() => s(e, Ko(e)));
  }
  class k4 extends wi {
    mount() {
      const { current: e } = this.node;
      e && (this.unmount = g3(e, (n, i) => (qy(this.node, i, "Start"), (a) => qy(this.node, a, "End"))));
    }
    unmount() {
    }
  }
  class G4 extends wi {
    constructor() {
      super(...arguments), this.isActive = false;
    }
    onFocus() {
      let e = false;
      try {
        e = this.node.current.matches(":focus-visible");
      } catch {
        e = true;
      }
      !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
    }
    onBlur() {
      !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
    }
    mount() {
      this.unmount = qo(Co(this.node.current, "focus", () => this.onFocus()), Co(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  }
  function Xy(t, e, n) {
    const { props: i } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const a = "onTap" + (n === "End" ? "" : n), s = i[a];
    s && ct.postRender(() => s(e, Ko(e)));
  }
  class Y4 extends wi {
    mount() {
      const { current: e } = this.node;
      if (!e) return;
      const { globalTapTarget: n, propagate: i } = this.node.props;
      this.unmount = w3(e, (a, s) => (Xy(this.node, s, "Start"), (o, { success: r }) => Xy(this.node, o, r ? "End" : "Cancel")), {
        useGlobalTarget: n,
        stopPropagation: (i == null ? void 0 : i.tap) === false
      });
    }
    unmount() {
    }
  }
  const ud = /* @__PURE__ */ new WeakMap(), Dc = /* @__PURE__ */ new WeakMap(), q4 = (t) => {
    const e = ud.get(t.target);
    e && e(t);
  }, X4 = (t) => {
    t.forEach(q4);
  };
  function F4({ root: t, ...e }) {
    const n = t || document;
    Dc.has(n) || Dc.set(n, {});
    const i = Dc.get(n), a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(X4, {
      root: t,
      ...e
    })), i[a];
  }
  function K4(t, e, n) {
    const i = F4(e);
    return ud.set(t, n), i.observe(t), () => {
      ud.delete(t), i.unobserve(t);
    };
  }
  const Q4 = {
    some: 0,
    all: 1
  };
  class Z4 extends wi {
    constructor() {
      super(...arguments), this.hasEnteredView = false, this.isInView = false;
    }
    startObserver() {
      this.unmount();
      const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: a = "some", once: s } = e, o = {
        root: n ? n.current : void 0,
        rootMargin: i,
        threshold: typeof a == "number" ? a : Q4[a]
      }, r = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView)) return;
        u && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), h = u ? c : f;
        h && h(l);
      };
      return K4(this.node.current, o, r);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      const { props: e, prevProps: n } = this.node;
      [
        "amount",
        "margin",
        "root"
      ].some($4(e, n)) && this.startObserver();
    }
    unmount() {
    }
  }
  function $4({ viewport: t = {} }, { viewport: e = {} } = {}) {
    return (n) => t[n] !== e[n];
  }
  const I4 = {
    inView: {
      Feature: Z4
    },
    tap: {
      Feature: Y4
    },
    focus: {
      Feature: G4
    },
    hover: {
      Feature: k4
    }
  }, J4 = {
    layout: {
      ProjectionNode: iw,
      MeasureLayout: gw
    }
  }, W4 = {
    ...w4,
    ...I4,
    ...H4,
    ...J4
  }, br = y4(W4, v4), tj = M1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }), Fe = x.forwardRef(({ className: t, variant: e, size: n, asChild: i = false, ...a }, s) => {
    const o = i ? LA : "button";
    return w.jsx(o, {
      className: Si(tj({
        variant: e,
        size: n,
        className: t
      })),
      ref: s,
      ...a
    });
  });
  Fe.displayName = "Button";
  const ej = "/amritaraj-nair-portfolio", Fy = `${ej}/Amritaraj_Nair_Resume.pdf`, xr = "https://amritnair.github.io/amritaraj-nair-portfolio/#/resume", nj = () => {
    const t = Dx(), { toast: e } = Jb(), [n, i] = x.useState(false), [a, s] = x.useState(false), o = () => {
      const f = document.createElement("a");
      f.href = Fy, f.download = "Amritaraj_Nair_Resume.pdf", document.body.appendChild(f), f.click(), document.body.removeChild(f);
    }, r = async () => {
      try {
        await navigator.clipboard.writeText(xr), i(true), e({
          title: "Link copied!",
          description: "Resume page link copied to clipboard."
        }), setTimeout(() => i(false), 2e3);
      } catch {
        e({
          title: "Error",
          description: "Could not copy link.",
          variant: "destructive"
        });
      }
    }, l = () => {
      const f = encodeURIComponent("Amritaraj Nair \u2014 Resume"), h = encodeURIComponent(`Hi,

Here is Amritaraj Nair's resume:
${xr}

Best regards`);
      window.open(`mailto:?subject=${f}&body=${h}`, "_blank");
    }, u = () => {
      const f = encodeURIComponent(xr);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${f}`, "_blank");
    }, c = async () => {
      if (navigator.share) try {
        await navigator.share({
          title: "Amritaraj Nair \u2014 Resume",
          text: "Check out Amritaraj Nair's resume",
          url: xr
        });
      } catch {
      }
      else s(!a);
    };
    return w.jsxs("div", {
      className: "min-h-screen bg-background relative",
      children: [
        w.jsx(br.div, {
          initial: {
            opacity: 0,
            y: -20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.4
          },
          className: "sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl",
          children: w.jsxs("div", {
            className: "container mx-auto px-6 py-4 flex items-center justify-between",
            children: [
              w.jsxs(Fe, {
                variant: "ghost",
                size: "sm",
                onClick: () => t("/"),
                className: "gap-2 text-muted-foreground hover:text-foreground",
                children: [
                  w.jsx(OC, {
                    className: "h-4 w-4"
                  }),
                  "Back"
                ]
              }),
              w.jsx("h1", {
                className: "text-sm font-medium mono tracking-wider uppercase text-muted-foreground",
                children: "Resume"
              }),
              w.jsxs("div", {
                className: "flex gap-2",
                children: [
                  w.jsxs(Fe, {
                    size: "sm",
                    onClick: () => t("/"),
                    className: "gap-2 bg-gradient-to-r from-[#5b4bff] to-[#c341ff] text-white hover:opacity-90",
                    children: [
                      w.jsx(jC, {
                        className: "h-4 w-4"
                      }),
                      "Play the world"
                    ]
                  }),
                  w.jsxs("div", {
                    className: "relative",
                    children: [
                      w.jsxs(Fe, {
                        variant: "outline",
                        size: "sm",
                        onClick: c,
                        className: "gap-2 border-border hover:border-primary/50 hover:bg-primary/5",
                        children: [
                          w.jsx(_C, {
                            className: "h-4 w-4"
                          }),
                          "Share"
                        ]
                      }),
                      a && w.jsxs(br.div, {
                        initial: {
                          opacity: 0,
                          y: 8,
                          scale: 0.95
                        },
                        animate: {
                          opacity: 1,
                          y: 0,
                          scale: 1
                        },
                        transition: {
                          duration: 0.15
                        },
                        className: "absolute right-0 top-12 z-50 w-56 rounded-xl border border-border bg-card p-2 shadow-lg",
                        children: [
                          w.jsxs("button", {
                            onClick: r,
                            className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors",
                            children: [
                              n ? w.jsx($p, {
                                className: "h-4 w-4 text-green-400"
                              }) : w.jsx(NC, {
                                className: "h-4 w-4 text-muted-foreground"
                              }),
                              n ? "Copied!" : "Copy link"
                            ]
                          }),
                          w.jsxs("button", {
                            onClick: l,
                            className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors",
                            children: [
                              w.jsx(Jp, {
                                className: "h-4 w-4 text-muted-foreground"
                              }),
                              "Send via email"
                            ]
                          }),
                          w.jsxs("button", {
                            onClick: u,
                            className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors",
                            children: [
                              w.jsx(Ip, {
                                className: "h-4 w-4 text-muted-foreground"
                              }),
                              "Share on LinkedIn"
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  w.jsxs(Fe, {
                    size: "sm",
                    onClick: o,
                    className: "gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow",
                    children: [
                      w.jsx(oc, {
                        className: "h-4 w-4"
                      }),
                      "Download PDF"
                    ]
                  })
                ]
              })
            ]
          })
        }),
        a && w.jsx("div", {
          className: "fixed inset-0 z-40",
          onClick: () => s(false)
        }),
        w.jsx("div", {
          className: "container mx-auto px-6 py-12",
          children: w.jsxs(br.div, {
            initial: {
              opacity: 0,
              y: 30
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.5,
              delay: 0.1
            },
            className: "max-w-4xl mx-auto",
            children: [
              w.jsx("div", {
                className: "rounded-2xl border border-border/50 overflow-hidden bg-white shadow-2xl shadow-primary/5",
                children: w.jsx("object", {
                  data: Fy,
                  type: "application/pdf",
                  className: "w-full",
                  style: {
                    height: "calc(100vh - 160px)",
                    minHeight: "600px"
                  },
                  children: w.jsxs("div", {
                    className: "flex flex-col items-center justify-center py-20 px-6 text-center bg-card",
                    children: [
                      w.jsx("p", {
                        className: "text-muted-foreground mb-4",
                        children: "Your browser doesn't support inline PDF viewing."
                      }),
                      w.jsxs(Fe, {
                        onClick: o,
                        className: "gap-2 bg-primary hover:bg-primary/90",
                        children: [
                          w.jsx(oc, {
                            className: "h-4 w-4"
                          }),
                          "Download Resume PDF"
                        ]
                      })
                    ]
                  })
                })
              }),
              w.jsxs(br.div, {
                initial: {
                  opacity: 0,
                  y: 20
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.4,
                  delay: 0.3
                },
                className: "flex flex-wrap items-center justify-center gap-4 mt-8",
                children: [
                  w.jsxs(Fe, {
                    variant: "outline",
                    size: "lg",
                    onClick: o,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      w.jsx(oc, {
                        className: "h-4 w-4"
                      }),
                      "Download Resume"
                    ]
                  }),
                  w.jsxs(Fe, {
                    variant: "outline",
                    size: "lg",
                    onClick: r,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      n ? w.jsx($p, {
                        className: "h-4 w-4"
                      }) : w.jsx(zC, {
                        className: "h-4 w-4"
                      }),
                      n ? "Link Copied!" : "Copy Share Link"
                    ]
                  }),
                  w.jsxs(Fe, {
                    variant: "outline",
                    size: "lg",
                    onClick: l,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      w.jsx(Jp, {
                        className: "h-4 w-4"
                      }),
                      "Email Resume"
                    ]
                  }),
                  w.jsxs(Fe, {
                    variant: "outline",
                    size: "lg",
                    onClick: u,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      w.jsx(Ip, {
                        className: "h-4 w-4"
                      }),
                      "Share on LinkedIn"
                    ]
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }, ij = () => {
    const t = Yo();
    return x.useEffect(() => {
      console.error("404 Error: User attempted to access non-existent route:", t.pathname);
    }, [
      t.pathname
    ]), w.jsx("div", {
      className: "flex min-h-screen items-center justify-center bg-gray-100",
      children: w.jsxs("div", {
        className: "text-center",
        children: [
          w.jsx("h1", {
            className: "mb-4 text-4xl font-bold",
            children: "404"
          }),
          w.jsx("p", {
            className: "mb-4 text-xl text-gray-600",
            children: "Oops! Page not found"
          }),
          w.jsx("a", {
            href: "/",
            className: "text-primary underline hover:opacity-90",
            children: "Return to Home"
          })
        ]
      })
    });
  }, aj = x.lazy(() => RA(() => import("./GamePortfolio-_ewHBJbE.js").then(async (m) => {
    await m.__tla;
    return m;
  }).then((t) => t.b2), [])), sj = new aD(), oj = () => w.jsx("div", {
    className: "flex h-[100dvh] items-center justify-center bg-[#160f34] font-mono text-xs uppercase tracking-[0.3em] text-[#9d8bff]",
    children: "Loading world\u2026"
  }), rj = () => w.jsx(oO, {
    children: w.jsx(oD, {
      client: sj,
      children: w.jsxs(_R, {
        children: [
          w.jsx(y2, {}),
          w.jsx(Z2, {}),
          w.jsx(nO, {
            children: w.jsxs(ZD, {
              children: [
                w.jsx(zs, {
                  path: "/",
                  element: w.jsx(x.Suspense, {
                    fallback: w.jsx(oj, {}),
                    children: w.jsx(aj, {})
                  })
                }),
                w.jsx(zs, {
                  path: "/projects",
                  element: w.jsx(rO, {})
                }),
                w.jsx(zs, {
                  path: "/resume",
                  element: w.jsx(nj, {})
                }),
                w.jsx(zs, {
                  path: "*",
                  element: w.jsx(ij, {})
                })
              ]
            })
          })
        ]
      })
    })
  });
  AA.createRoot(document.getElementById("root")).render(w.jsx(rj, {}));
})();
export {
  dc as L,
  Xn as P,
  lj as T,
  mj as U,
  _s as Z,
  RA as _,
  __tla,
  pj as a,
  _ as e,
  cd as g,
  w as j,
  x as r,
  Jy as s
};
