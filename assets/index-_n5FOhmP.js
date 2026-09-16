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
let cD, ua, gj, _g, Gf, jA, wj, _, dd, w, b, sv;
let __tla = (async () => {
  var _t2, _e, _n, _a2, _t3, _e2, _n2, _b2, _t4, _c2, _t5, _e3, _n3, _a3, _i2, _r2, _o2, _tO_instances, s_fn, _d2, _t6, _e4, _t7, _e5, _n4, _aO_instances, a_fn, _f2, _t8, _e6, _n5, _g2, _t9, _e7, _n6, _a4, _i3, _r3, _o3, _s2, _h2;
  function _w(t, e) {
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
      for (const s of a) if (s.type === "childList") for (const r of s.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
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
  dd = function(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  };
  var tv = {
    exports: {}
  }, Ul = {};
  var Lw = Symbol.for("react.transitional.element"), Vw = Symbol.for("react.fragment");
  function ev(t, e, n) {
    var i = null;
    if (n !== void 0 && (i = "" + n), e.key !== void 0 && (i = "" + e.key), "key" in e) {
      n = {};
      for (var a in e) a !== "key" && (n[a] = e[a]);
    } else n = e;
    return e = n.ref, {
      $$typeof: Lw,
      type: t,
      key: i,
      ref: e !== void 0 ? e : null,
      props: n
    };
  }
  Ul.Fragment = Vw;
  Ul.jsx = ev;
  Ul.jsxs = ev;
  tv.exports = Ul;
  let nv, Pl, iv, av;
  w = tv.exports;
  nv = {
    exports: {}
  };
  Pl = {};
  iv = {
    exports: {}
  };
  av = {};
  (function(t) {
    function e(R, D) {
      var O = R.length;
      R.push(D);
      t: for (; 0 < O; ) {
        var N = O - 1 >>> 1, U = R[N];
        if (0 < a(U, D)) R[N] = D, R[O] = U, O = N;
        else break t;
      }
    }
    function n(R) {
      return R.length === 0 ? null : R[0];
    }
    function i(R) {
      if (R.length === 0) return null;
      var D = R[0], O = R.pop();
      if (O !== D) {
        R[0] = O;
        t: for (var N = 0, U = R.length, ft = U >>> 1; N < ft; ) {
          var Q = 2 * (N + 1) - 1, Z = R[Q], $ = Q + 1, Tt = R[$];
          if (0 > a(Z, O)) $ < U && 0 > a(Tt, Z) ? (R[N] = Tt, R[$] = O, N = $) : (R[N] = Z, R[Q] = O, N = Q);
          else if ($ < U && 0 > a(Tt, O)) R[N] = Tt, R[$] = O, N = $;
          else break t;
        }
      }
      return D;
    }
    function a(R, D) {
      var O = R.sortIndex - D.sortIndex;
      return O !== 0 ? O : R.id - D.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var s = performance;
      t.unstable_now = function() {
        return s.now();
      };
    } else {
      var r = Date, o = r.now();
      t.unstable_now = function() {
        return r.now() - o;
      };
    }
    var l = [], u = [], c = 1, f = null, h = 3, d = false, v = false, y = false, x = false, p = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
    function S(R) {
      for (var D = n(u); D !== null; ) {
        if (D.callback === null) i(u);
        else if (D.startTime <= R) i(u), D.sortIndex = D.expirationTime, e(l, D);
        else break;
        D = n(u);
      }
    }
    function T(R) {
      if (y = false, S(R), !v) if (n(l) !== null) v = true, A || (A = true, V());
      else {
        var D = n(u);
        D !== null && X(T, D.startTime - R);
      }
    }
    var A = false, E = -1, C = 5, j = -1;
    function z() {
      return x ? true : !(t.unstable_now() - j < C);
    }
    function P() {
      if (x = false, A) {
        var R = t.unstable_now();
        j = R;
        var D = true;
        try {
          t: {
            v = false, y && (y = false, m(E), E = -1), d = true;
            var O = h;
            try {
              e: {
                for (S(R), f = n(l); f !== null && !(f.expirationTime > R && z()); ) {
                  var N = f.callback;
                  if (typeof N == "function") {
                    f.callback = null, h = f.priorityLevel;
                    var U = N(f.expirationTime <= R);
                    if (R = t.unstable_now(), typeof U == "function") {
                      f.callback = U, S(R), D = true;
                      break e;
                    }
                    f === n(l) && i(l), S(R);
                  } else i(l);
                  f = n(l);
                }
                if (f !== null) D = true;
                else {
                  var ft = n(u);
                  ft !== null && X(T, ft.startTime - R), D = false;
                }
              }
              break t;
            } finally {
              f = null, h = O, d = false;
            }
            D = void 0;
          }
        } finally {
          D ? V() : A = false;
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
    function X(R, D) {
      E = p(function() {
        R(t.unstable_now());
      }, D);
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
          var D = 3;
          break;
        default:
          D = h;
      }
      var O = h;
      h = D;
      try {
        return R();
      } finally {
        h = O;
      }
    }, t.unstable_requestPaint = function() {
      x = true;
    }, t.unstable_runWithPriority = function(R, D) {
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
      var O = h;
      h = R;
      try {
        return D();
      } finally {
        h = O;
      }
    }, t.unstable_scheduleCallback = function(R, D, O) {
      var N = t.unstable_now();
      switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? N + O : N) : O = N, R) {
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
      return U = O + U, R = {
        id: c++,
        callback: D,
        priorityLevel: R,
        startTime: O,
        expirationTime: U,
        sortIndex: -1
      }, O > N ? (R.sortIndex = O, e(u, R), n(l) === null && R === n(u) && (y ? (m(E), E = -1) : y = true, X(T, O - N))) : (R.sortIndex = U, e(l, R), v || d || (v = true, A || (A = true, V()))), R;
    }, t.unstable_shouldYield = z, t.unstable_wrapCallback = function(R) {
      var D = h;
      return function() {
        var O = h;
        h = D;
        try {
          return R.apply(this, arguments);
        } finally {
          h = O;
        }
      };
    };
  })(av);
  iv.exports = av;
  sv = iv.exports;
  gj = dd(sv);
  var rv = {
    exports: {}
  }, Y = {};
  var hd = Symbol.for("react.transitional.element"), Bw = Symbol.for("react.portal"), Uw = Symbol.for("react.fragment"), Pw = Symbol.for("react.strict_mode"), Hw = Symbol.for("react.profiler"), kw = Symbol.for("react.consumer"), Yw = Symbol.for("react.context"), Gw = Symbol.for("react.forward_ref"), qw = Symbol.for("react.suspense"), Xw = Symbol.for("react.memo"), ov = Symbol.for("react.lazy"), Qw = Symbol.for("react.activity"), bm = Symbol.iterator;
  function Fw(t) {
    return t === null || typeof t != "object" ? null : (t = bm && t[bm] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var lv = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, uv = Object.assign, cv = {};
  function is(t, e, n) {
    this.props = t, this.context = e, this.refs = cv, this.updater = n || lv;
  }
  is.prototype.isReactComponent = {};
  is.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState");
  };
  is.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function fv() {
  }
  fv.prototype = is.prototype;
  function md(t, e, n) {
    this.props = t, this.context = e, this.refs = cv, this.updater = n || lv;
  }
  var pd = md.prototype = new fv();
  pd.constructor = md;
  uv(pd, is.prototype);
  pd.isPureReactComponent = true;
  var xm = Array.isArray;
  function Nc() {
  }
  var pt = {
    H: null,
    A: null,
    T: null,
    S: null
  }, dv = Object.prototype.hasOwnProperty;
  function gd(t, e, n) {
    var i = n.ref;
    return {
      $$typeof: hd,
      type: t,
      key: e,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  function Kw(t, e) {
    return gd(t.type, e, t.props);
  }
  function yd(t) {
    return typeof t == "object" && t !== null && t.$$typeof === hd;
  }
  function Zw(t) {
    var e = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
      return e[n];
    });
  }
  var Sm = /\/+/g;
  function Su(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Zw("" + t.key) : e.toString(36);
  }
  function $w(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(Nc, Nc) : (t.status = "pending", t.then(function(e) {
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
    var r = false;
    if (t === null) r = true;
    else switch (s) {
      case "bigint":
      case "string":
      case "number":
        r = true;
        break;
      case "object":
        switch (t.$$typeof) {
          case hd:
          case Bw:
            r = true;
            break;
          case ov:
            return r = t._init, ca(r(t._payload), e, n, i, a);
        }
    }
    if (r) return a = a(t), r = i === "" ? "." + Su(t, 0) : i, xm(a) ? (n = "", r != null && (n = r.replace(Sm, "$&/") + "/"), ca(a, e, n, "", function(u) {
      return u;
    })) : a != null && (yd(a) && (a = Kw(a, n + (a.key == null || t && t.key === a.key ? "" : ("" + a.key).replace(Sm, "$&/") + "/") + r)), e.push(a)), 1;
    r = 0;
    var o = i === "" ? "." : i + ":";
    if (xm(t)) for (var l = 0; l < t.length; l++) i = t[l], s = o + Su(i, l), r += ca(i, e, n, s, a);
    else if (l = Fw(t), typeof l == "function") for (t = l.call(t), l = 0; !(i = t.next()).done; ) i = i.value, s = o + Su(i, l++), r += ca(i, e, n, s, a);
    else if (s === "object") {
      if (typeof t.then == "function") return ca($w(t), e, n, i, a);
      throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    }
    return r;
  }
  function Kr(t, e, n) {
    if (t == null) return t;
    var i = [], a = 0;
    return ca(t, i, "", "", function(s) {
      return e.call(n, s, a++);
    }), i;
  }
  function Iw(t) {
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
  var wm = typeof reportError == "function" ? reportError : function(t) {
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
  }, Jw = {
    map: Kr,
    forEach: function(t, e, n) {
      Kr(t, function() {
        e.apply(this, arguments);
      }, n);
    },
    count: function(t) {
      var e = 0;
      return Kr(t, function() {
        e++;
      }), e;
    },
    toArray: function(t) {
      return Kr(t, function(e) {
        return e;
      }) || [];
    },
    only: function(t) {
      if (!yd(t)) throw Error("React.Children.only expected to receive a single React element child.");
      return t;
    }
  };
  Y.Activity = Qw;
  Y.Children = Jw;
  Y.Component = is;
  Y.Fragment = Uw;
  Y.Profiler = Hw;
  Y.PureComponent = md;
  Y.StrictMode = Pw;
  Y.Suspense = qw;
  Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = pt;
  Y.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return pt.H.useMemoCache(t);
    }
  };
  Y.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  };
  Y.cacheSignal = function() {
    return null;
  };
  Y.cloneElement = function(t, e, n) {
    if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
    var i = uv({}, t.props), a = t.key;
    if (e != null) for (s in e.key !== void 0 && (a = "" + e.key), e) !dv.call(e, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && e.ref === void 0 || (i[s] = e[s]);
    var s = arguments.length - 2;
    if (s === 1) i.children = n;
    else if (1 < s) {
      for (var r = Array(s), o = 0; o < s; o++) r[o] = arguments[o + 2];
      i.children = r;
    }
    return gd(t.type, a, i);
  };
  Y.createContext = function(t) {
    return t = {
      $$typeof: Yw,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: kw,
      _context: t
    }, t;
  };
  Y.createElement = function(t, e, n) {
    var i, a = {}, s = null;
    if (e != null) for (i in e.key !== void 0 && (s = "" + e.key), e) dv.call(e, i) && i !== "key" && i !== "__self" && i !== "__source" && (a[i] = e[i]);
    var r = arguments.length - 2;
    if (r === 1) a.children = n;
    else if (1 < r) {
      for (var o = Array(r), l = 0; l < r; l++) o[l] = arguments[l + 2];
      a.children = o;
    }
    if (t && t.defaultProps) for (i in r = t.defaultProps, r) a[i] === void 0 && (a[i] = r[i]);
    return gd(t, s, a);
  };
  Y.createRef = function() {
    return {
      current: null
    };
  };
  Y.forwardRef = function(t) {
    return {
      $$typeof: Gw,
      render: t
    };
  };
  Y.isValidElement = yd;
  Y.lazy = function(t) {
    return {
      $$typeof: ov,
      _payload: {
        _status: -1,
        _result: t
      },
      _init: Iw
    };
  };
  Y.memo = function(t, e) {
    return {
      $$typeof: Xw,
      type: t,
      compare: e === void 0 ? null : e
    };
  };
  Y.startTransition = function(t) {
    var e = pt.T, n = {};
    pt.T = n;
    try {
      var i = t(), a = pt.S;
      a !== null && a(n, i), typeof i == "object" && i !== null && typeof i.then == "function" && i.then(Nc, wm);
    } catch (s) {
      wm(s);
    } finally {
      e !== null && n.types !== null && (e.types = n.types), pt.T = e;
    }
  };
  Y.unstable_useCacheRefresh = function() {
    return pt.H.useCacheRefresh();
  };
  Y.use = function(t) {
    return pt.H.use(t);
  };
  Y.useActionState = function(t, e, n) {
    return pt.H.useActionState(t, e, n);
  };
  Y.useCallback = function(t, e) {
    return pt.H.useCallback(t, e);
  };
  Y.useContext = function(t) {
    return pt.H.useContext(t);
  };
  Y.useDebugValue = function() {
  };
  Y.useDeferredValue = function(t, e) {
    return pt.H.useDeferredValue(t, e);
  };
  Y.useEffect = function(t, e) {
    return pt.H.useEffect(t, e);
  };
  Y.useEffectEvent = function(t) {
    return pt.H.useEffectEvent(t);
  };
  Y.useId = function() {
    return pt.H.useId();
  };
  Y.useImperativeHandle = function(t, e, n) {
    return pt.H.useImperativeHandle(t, e, n);
  };
  Y.useInsertionEffect = function(t, e) {
    return pt.H.useInsertionEffect(t, e);
  };
  Y.useLayoutEffect = function(t, e) {
    return pt.H.useLayoutEffect(t, e);
  };
  Y.useMemo = function(t, e) {
    return pt.H.useMemo(t, e);
  };
  Y.useOptimistic = function(t, e) {
    return pt.H.useOptimistic(t, e);
  };
  Y.useReducer = function(t, e, n) {
    return pt.H.useReducer(t, e, n);
  };
  Y.useRef = function(t) {
    return pt.H.useRef(t);
  };
  Y.useState = function(t) {
    return pt.H.useState(t);
  };
  Y.useSyncExternalStore = function(t, e, n) {
    return pt.H.useSyncExternalStore(t, e, n);
  };
  Y.useTransition = function() {
    return pt.H.useTransition();
  };
  Y.version = "19.2.5";
  rv.exports = Y;
  b = rv.exports;
  let hv;
  _ = dd(b);
  hv = _w({
    __proto__: null,
    default: _
  }, [
    b
  ]);
  var mv = {
    exports: {}
  }, It = {};
  var Ww = b;
  function pv(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ln() {
  }
  var Kt = {
    d: {
      f: Ln,
      r: function() {
        throw Error(pv(522));
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
  }, tT = Symbol.for("react.portal");
  function eT(t, e, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: tT,
      key: i == null ? null : "" + i,
      children: t,
      containerInfo: e,
      implementation: n
    };
  }
  var Us = Ww.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Hl(t, e) {
    if (t === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Kt;
  It.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(pv(299));
    return eT(t, e, null, n);
  };
  It.flushSync = function(t) {
    var e = Us.T, n = Kt.p;
    try {
      if (Us.T = null, Kt.p = 2, t) return t();
    } finally {
      Us.T = e, Kt.p = n, Kt.d.f();
    }
  };
  It.preconnect = function(t, e) {
    typeof t == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, Kt.d.C(t, e));
  };
  It.prefetchDNS = function(t) {
    typeof t == "string" && Kt.d.D(t);
  };
  It.preinit = function(t, e) {
    if (typeof t == "string" && e && typeof e.as == "string") {
      var n = e.as, i = Hl(n, e.crossOrigin), a = typeof e.integrity == "string" ? e.integrity : void 0, s = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
      n === "style" ? Kt.d.S(t, typeof e.precedence == "string" ? e.precedence : void 0, {
        crossOrigin: i,
        integrity: a,
        fetchPriority: s
      }) : n === "script" && Kt.d.X(t, {
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
        var n = Hl(e.as, e.crossOrigin);
        Kt.d.M(t, {
          crossOrigin: n,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    } else e == null && Kt.d.M(t);
  };
  It.preload = function(t, e) {
    if (typeof t == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
      var n = e.as, i = Hl(n, e.crossOrigin);
      Kt.d.L(t, n, {
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
      var n = Hl(e.as, e.crossOrigin);
      Kt.d.m(t, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: n,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      });
    } else Kt.d.m(t);
  };
  It.requestFormReset = function(t) {
    Kt.d.r(t);
  };
  It.unstable_batchedUpdates = function(t, e) {
    return t(e);
  };
  It.useFormState = function(t, e, n) {
    return Us.H.useFormState(t, e, n);
  };
  It.useFormStatus = function() {
    return Us.H.useHostTransitionStatus();
  };
  It.version = "19.2.5";
  function gv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gv);
    } catch (t) {
      console.error(t);
    }
  }
  gv(), mv.exports = It;
  var Rr = mv.exports;
  const yv = dd(Rr);
  var Lt = sv, vv = b, nT = Rr;
  function M(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function bv(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function Or(t) {
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
  function xv(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function Sv(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function Tm(t) {
    if (Or(t) !== t) throw Error(M(188));
  }
  function iT(t) {
    var e = t.alternate;
    if (!e) {
      if (e = Or(t), e === null) throw Error(M(188));
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
          if (s === n) return Tm(a), t;
          if (s === i) return Tm(a), e;
          s = s.sibling;
        }
        throw Error(M(188));
      }
      if (n.return !== i.return) n = a, i = s;
      else {
        for (var r = false, o = a.child; o; ) {
          if (o === n) {
            r = true, n = a, i = s;
            break;
          }
          if (o === i) {
            r = true, i = a, n = s;
            break;
          }
          o = o.sibling;
        }
        if (!r) {
          for (o = s.child; o; ) {
            if (o === n) {
              r = true, n = s, i = a;
              break;
            }
            if (o === i) {
              r = true, i = s, n = a;
              break;
            }
            o = o.sibling;
          }
          if (!r) throw Error(M(189));
        }
      }
      if (n.alternate !== i) throw Error(M(190));
    }
    if (n.tag !== 3) throw Error(M(188));
    return n.stateNode.current === n ? t : e;
  }
  function wv(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = wv(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var gt = Object.assign, aT = Symbol.for("react.element"), Zr = Symbol.for("react.transitional.element"), Ns = Symbol.for("react.portal"), pa = Symbol.for("react.fragment"), Tv = Symbol.for("react.strict_mode"), jc = Symbol.for("react.profiler"), Ev = Symbol.for("react.consumer"), gn = Symbol.for("react.context"), vd = Symbol.for("react.forward_ref"), zc = Symbol.for("react.suspense"), _c = Symbol.for("react.suspense_list"), bd = Symbol.for("react.memo"), Pn = Symbol.for("react.lazy"), Lc = Symbol.for("react.activity"), sT = Symbol.for("react.memo_cache_sentinel"), Em = Symbol.iterator;
  function Ss(t) {
    return t === null || typeof t != "object" ? null : (t = Em && t[Em] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var rT = Symbol.for("react.client.reference");
  function Vc(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === rT ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case pa:
        return "Fragment";
      case jc:
        return "Profiler";
      case Tv:
        return "StrictMode";
      case zc:
        return "Suspense";
      case _c:
        return "SuspenseList";
      case Lc:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case Ns:
        return "Portal";
      case gn:
        return t.displayName || "Context";
      case Ev:
        return (t._context.displayName || "Context") + ".Consumer";
      case vd:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case bd:
        return e = t.displayName || null, e !== null ? e : Vc(t.type) || "Memo";
      case Pn:
        e = t._payload, t = t._init;
        try {
          return Vc(t(e));
        } catch {
        }
    }
    return null;
  }
  var js = Array.isArray, H = vv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, et = nT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ui = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, Bc = [], ga = -1;
  function an(t) {
    return {
      current: t
    };
  }
  function Ut(t) {
    0 > ga || (t.current = Bc[ga], Bc[ga] = null, ga--);
  }
  function ut(t, e) {
    ga++, Bc[ga] = t.current, t.current = e;
  }
  var Je = an(null), ir = an(null), Jn = an(null), Fo = an(null);
  function Ko(t, e) {
    switch (ut(Jn, e), ut(ir, t), ut(Je, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Dp(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = Dp(e), t = qb(e, t);
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
  function Ya() {
    Ut(Je), Ut(ir), Ut(Jn);
  }
  function Uc(t) {
    t.memoizedState !== null && ut(Fo, t);
    var e = Je.current, n = qb(e, t.type);
    e !== n && (ut(ir, t), ut(Je, n));
  }
  function Zo(t) {
    ir.current === t && (Ut(Je), Ut(ir)), Fo.current === t && (Ut(Fo), mr._currentValue = Ui);
  }
  var wu, Am;
  function Ni(t) {
    if (wu === void 0) try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      wu = e && e[1] || "", Am = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + wu + t + Am;
  }
  var Tu = false;
  function Eu(t, e) {
    if (!t || Tu) return "";
    Tu = true;
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
      var s = i.DetermineComponentFrameRoot(), r = s[0], o = s[1];
      if (r && o) {
        var l = r.split(`
`), u = o.split(`
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
      Tu = false, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Ni(n) : "";
  }
  function oT(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ni(t.type);
      case 16:
        return Ni("Lazy");
      case 13:
        return t.child !== e && e !== null ? Ni("Suspense Fallback") : Ni("Suspense");
      case 19:
        return Ni("SuspenseList");
      case 0:
      case 15:
        return Eu(t.type, false);
      case 11:
        return Eu(t.type.render, false);
      case 1:
        return Eu(t.type, true);
      case 31:
        return Ni("Activity");
      default:
        return "";
    }
  }
  function Cm(t) {
    try {
      var e = "", n = null;
      do
        e += oT(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Pc = Object.prototype.hasOwnProperty, xd = Lt.unstable_scheduleCallback, Au = Lt.unstable_cancelCallback, lT = Lt.unstable_shouldYield, uT = Lt.unstable_requestPaint, de = Lt.unstable_now, cT = Lt.unstable_getCurrentPriorityLevel, Av = Lt.unstable_ImmediatePriority, Cv = Lt.unstable_UserBlockingPriority, $o = Lt.unstable_NormalPriority, fT = Lt.unstable_LowPriority, Mv = Lt.unstable_IdlePriority, dT = Lt.log, hT = Lt.unstable_setDisableYieldValue, Dr = null, he = null;
  function Xn(t) {
    if (typeof dT == "function" && hT(t), he && typeof he.setStrictMode == "function") try {
      he.setStrictMode(Dr, t);
    } catch {
    }
  }
  var me = Math.clz32 ? Math.clz32 : gT, mT = Math.log, pT = Math.LN2;
  function gT(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (mT(t) / pT | 0) | 0;
  }
  var $r = 256, Ir = 262144, Jr = 4194304;
  function ji(t) {
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
  function kl(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var a = 0, s = t.suspendedLanes, r = t.pingedLanes;
    t = t.warmLanes;
    var o = i & 134217727;
    return o !== 0 ? (i = o & ~s, i !== 0 ? a = ji(i) : (r &= o, r !== 0 ? a = ji(r) : n || (n = o & ~t, n !== 0 && (a = ji(n))))) : (o = i & ~s, o !== 0 ? a = ji(o) : r !== 0 ? a = ji(r) : n || (n = i & ~t, n !== 0 && (a = ji(n)))), a === 0 ? 0 : e !== 0 && e !== a && !(e & s) && (s = a & -a, n = e & -e, s >= n || s === 32 && (n & 4194048) !== 0) ? e : a;
  }
  function Nr(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function yT(t, e) {
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
  function Rv() {
    var t = Jr;
    return Jr <<= 1, !(Jr & 62914560) && (Jr = 4194304), t;
  }
  function Cu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function jr(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function vT(t, e, n, i, a, s) {
    var r = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var o = t.entanglements, l = t.expirationTimes, u = t.hiddenUpdates;
    for (n = r & ~n; 0 < n; ) {
      var c = 31 - me(n), f = 1 << c;
      o[c] = 0, l[c] = -1;
      var h = u[c];
      if (h !== null) for (u[c] = null, c = 0; c < h.length; c++) {
        var d = h[c];
        d !== null && (d.lane &= -536870913);
      }
      n &= ~f;
    }
    i !== 0 && Ov(t, i, 0), s !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(r & ~e));
  }
  function Ov(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var i = 31 - me(e);
    t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930;
  }
  function Dv(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var i = 31 - me(n), a = 1 << i;
      a & e | t[i] & e && (t[i] |= e), n &= ~a;
    }
  }
  function Nv(t, e) {
    var n = e & -e;
    return n = n & 42 ? 1 : Sd(n), n & (t.suspendedLanes | e) ? 0 : n;
  }
  function Sd(t) {
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
  function wd(t) {
    return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function jv() {
    var t = et.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : e1(t.type));
  }
  function Mm(t, e) {
    var n = et.p;
    try {
      return et.p = t, e();
    } finally {
      et.p = n;
    }
  }
  var vi = Math.random().toString(36).slice(2), kt = "__reactFiber$" + vi, ae = "__reactProps$" + vi, as = "__reactContainer$" + vi, Hc = "__reactEvents$" + vi, bT = "__reactListeners$" + vi, xT = "__reactHandles$" + vi, Rm = "__reactResources$" + vi, zr = "__reactMarker$" + vi;
  function Td(t) {
    delete t[kt], delete t[ae], delete t[Hc], delete t[bT], delete t[xT];
  }
  function ya(t) {
    var e = t[kt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[as] || n[kt]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = Lp(t); t !== null; ) {
          if (n = t[kt]) return n;
          t = Lp(t);
        }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function ss(t) {
    if (t = t[kt] || t[as]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function zs(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(M(33));
  }
  function ja(t) {
    var e = t[Rm];
    return e || (e = t[Rm] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), e;
  }
  function Bt(t) {
    t[zr] = true;
  }
  var zv = /* @__PURE__ */ new Set(), _v = {};
  function $i(t, e) {
    Ga(t, e), Ga(t + "Capture", e);
  }
  function Ga(t, e) {
    for (_v[t] = e, t = 0; t < e.length; t++) zv.add(e[t]);
  }
  var ST = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Om = {}, Dm = {};
  function wT(t) {
    return Pc.call(Dm, t) ? true : Pc.call(Om, t) ? false : ST.test(t) ? Dm[t] = true : (Om[t] = true, false);
  }
  function wo(t, e, n) {
    if (wT(e)) if (n === null) t.removeAttribute(e);
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
  function Wr(t, e, n) {
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
  function Lv(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function TT(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var a = i.get, s = i.set;
      return Object.defineProperty(t, e, {
        configurable: true,
        get: function() {
          return a.call(this);
        },
        set: function(r) {
          n = "" + r, s.call(this, r);
        }
      }), Object.defineProperty(t, e, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(r) {
          n = "" + r;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function kc(t) {
    if (!t._valueTracker) {
      var e = Lv(t) ? "checked" : "value";
      t._valueTracker = TT(t, e, "" + t[e]);
    }
  }
  function Vv(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var n = e.getValue(), i = "";
    return t && (i = Lv(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), true) : false;
  }
  function Io(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ET = /[\n"\\]/g;
  function Ee(t) {
    return t.replace(ET, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Yc(t, e, n, i, a, s, r, o) {
    t.name = "", r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.type = r : t.removeAttribute("type"), e != null ? r === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Se(e)) : t.value !== "" + Se(e) && (t.value = "" + Se(e)) : r !== "submit" && r !== "reset" || t.removeAttribute("value"), e != null ? Gc(t, r, Se(e)) : n != null ? Gc(t, r, Se(n)) : i != null && t.removeAttribute("value"), a == null && s != null && (t.defaultChecked = !!s), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + Se(o) : t.removeAttribute("name");
  }
  function Bv(t, e, n, i, a, s, r, o) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), e != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || e != null)) {
        kc(t);
        return;
      }
      n = n != null ? "" + Se(n) : "", e = e != null ? "" + Se(e) : n, o || e === t.value || (t.value = e), t.defaultValue = e;
    }
    i = i ?? a, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = o ? t.checked : !!i, t.defaultChecked = !!i, r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.name = r), kc(t);
  }
  function Gc(t, e, n) {
    e === "number" && Io(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function za(t, e, n, i) {
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
  function Uv(t, e, n) {
    if (e != null && (e = "" + Se(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Se(n) : "";
  }
  function Pv(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(M(92));
        if (js(i)) {
          if (1 < i.length) throw Error(M(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), e = n;
    }
    n = Se(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i), kc(t);
  }
  function qa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var AT = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Nm(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || AT.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Hv(t, e, n) {
    if (e != null && typeof e != "object") throw Error(M(62));
    if (t = t.style, n != null) {
      for (var i in n) !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
      for (var a in e) i = e[a], e.hasOwnProperty(a) && n[a] !== i && Nm(t, a, i);
    } else for (var s in e) e.hasOwnProperty(s) && Nm(t, s, e[s]);
  }
  function Ed(t) {
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
  var CT = /* @__PURE__ */ new Map([
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
  ]), MT = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function To(t) {
    return MT.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function yn() {
  }
  var qc = null;
  function Ad(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var va = null, _a = null;
  function jm(t) {
    var e = ss(t);
    if (e && (t = e.stateNode)) {
      var n = t[ae] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Yc(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Ee("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var a = i[ae] || null;
                if (!a) throw Error(M(90));
                Yc(i, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
              }
            }
            for (e = 0; e < n.length; e++) i = n[e], i.form === t.form && Vv(i);
          }
          break t;
        case "textarea":
          Uv(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && za(t, !!n.multiple, e, false);
      }
    }
  }
  var Mu = false;
  function kv(t, e, n) {
    if (Mu) return t(e, n);
    Mu = true;
    try {
      var i = t(e);
      return i;
    } finally {
      if (Mu = false, (va !== null || _a !== null) && (Wl(), va && (e = va, t = _a, _a = va = null, jm(e), t))) for (e = 0; e < t.length; e++) jm(t[e]);
    }
  }
  function ar(t, e) {
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
  var wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xc = false;
  if (wn) try {
    var ws = {};
    Object.defineProperty(ws, "passive", {
      get: function() {
        Xc = true;
      }
    }), window.addEventListener("test", ws, ws), window.removeEventListener("test", ws, ws);
  } catch {
    Xc = false;
  }
  var Qn = null, Cd = null, Eo = null;
  function Yv() {
    if (Eo) return Eo;
    var t, e = Cd, n = e.length, i, a = "value" in Qn ? Qn.value : Qn.textContent, s = a.length;
    for (t = 0; t < n && e[t] === a[t]; t++) ;
    var r = n - t;
    for (i = 1; i <= r && e[n - i] === a[s - i]; i++) ;
    return Eo = a.slice(t, 1 < i ? 1 - i : void 0);
  }
  function Ao(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function to() {
    return true;
  }
  function zm() {
    return false;
  }
  function se(t) {
    function e(n, i, a, s, r) {
      this._reactName = n, this._targetInst = a, this.type = i, this.nativeEvent = s, this.target = r, this.currentTarget = null;
      for (var o in t) t.hasOwnProperty(o) && (n = t[o], this[o] = n ? n(s) : s[o]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === false) ? to : zm, this.isPropagationStopped = zm, this;
    }
    return gt(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = to);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = to);
      },
      persist: function() {
      },
      isPersistent: to
    }), e;
  }
  var Ii = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Yl = se(Ii), _r = gt({}, Ii, {
    view: 0,
    detail: 0
  }), RT = se(_r), Ru, Ou, Ts, Gl = gt({}, _r, {
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
    getModifierState: Md,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ts && (Ts && t.type === "mousemove" ? (Ru = t.screenX - Ts.screenX, Ou = t.screenY - Ts.screenY) : Ou = Ru = 0, Ts = t), Ru);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ou;
    }
  }), _m = se(Gl), OT = gt({}, Gl, {
    dataTransfer: 0
  }), DT = se(OT), NT = gt({}, _r, {
    relatedTarget: 0
  }), Du = se(NT), jT = gt({}, Ii, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), zT = se(jT), _T = gt({}, Ii, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), LT = se(_T), VT = gt({}, Ii, {
    data: 0
  }), Lm = se(VT), BT = {
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
  }, UT = {
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
  }, PT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function HT(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = PT[t]) ? !!e[t] : false;
  }
  function Md() {
    return HT;
  }
  var kT = gt({}, _r, {
    key: function(t) {
      if (t.key) {
        var e = BT[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Ao(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? UT[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Md,
    charCode: function(t) {
      return t.type === "keypress" ? Ao(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ao(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), YT = se(kT), GT = gt({}, Gl, {
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
  }), Vm = se(GT), qT = gt({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Md
  }), XT = se(qT), QT = gt({}, Ii, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), FT = se(QT), KT = gt({}, Gl, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ZT = se(KT), $T = gt({}, Ii, {
    newState: 0,
    oldState: 0
  }), IT = se($T), JT = [
    9,
    13,
    27,
    32
  ], Rd = wn && "CompositionEvent" in window, Ps = null;
  wn && "documentMode" in document && (Ps = document.documentMode);
  var WT = wn && "TextEvent" in window && !Ps, Gv = wn && (!Rd || Ps && 8 < Ps && 11 >= Ps), Bm = " ", Um = false;
  function qv(t, e) {
    switch (t) {
      case "keyup":
        return JT.indexOf(e.keyCode) !== -1;
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
  function Xv(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ba = false;
  function tE(t, e) {
    switch (t) {
      case "compositionend":
        return Xv(e);
      case "keypress":
        return e.which !== 32 ? null : (Um = true, Bm);
      case "textInput":
        return t = e.data, t === Bm && Um ? null : t;
      default:
        return null;
    }
  }
  function eE(t, e) {
    if (ba) return t === "compositionend" || !Rd && qv(t, e) ? (t = Yv(), Eo = Cd = Qn = null, ba = false, t) : null;
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
        return Gv && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var nE = {
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
  function Pm(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!nE[t.type] : e === "textarea";
  }
  function Qv(t, e, n, i) {
    va ? _a ? _a.push(i) : _a = [
      i
    ] : va = i, e = pl(e, "onChange"), 0 < e.length && (n = new Yl("onChange", "change", null, n, i), t.push({
      event: n,
      listeners: e
    }));
  }
  var Hs = null, sr = null;
  function iE(t) {
    kb(t, 0);
  }
  function ql(t) {
    var e = zs(t);
    if (Vv(e)) return t;
  }
  function Hm(t, e) {
    if (t === "change") return e;
  }
  var Fv = false;
  if (wn) {
    var Nu;
    if (wn) {
      var ju = "oninput" in document;
      if (!ju) {
        var km = document.createElement("div");
        km.setAttribute("oninput", "return;"), ju = typeof km.oninput == "function";
      }
      Nu = ju;
    } else Nu = false;
    Fv = Nu && (!document.documentMode || 9 < document.documentMode);
  }
  function Ym() {
    Hs && (Hs.detachEvent("onpropertychange", Kv), sr = Hs = null);
  }
  function Kv(t) {
    if (t.propertyName === "value" && ql(sr)) {
      var e = [];
      Qv(e, sr, t, Ad(t)), kv(iE, e);
    }
  }
  function aE(t, e, n) {
    t === "focusin" ? (Ym(), Hs = e, sr = n, Hs.attachEvent("onpropertychange", Kv)) : t === "focusout" && Ym();
  }
  function sE(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return ql(sr);
  }
  function rE(t, e) {
    if (t === "click") return ql(e);
  }
  function oE(t, e) {
    if (t === "input" || t === "change") return ql(e);
  }
  function lE(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ye = typeof Object.is == "function" ? Object.is : lE;
  function rr(t, e) {
    if (ye(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var n = Object.keys(t), i = Object.keys(e);
    if (n.length !== i.length) return false;
    for (i = 0; i < n.length; i++) {
      var a = n[i];
      if (!Pc.call(e, a) || !ye(t[a], e[a])) return false;
    }
    return true;
  }
  function Gm(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function qm(t, e) {
    var n = Gm(t);
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
      n = Gm(n);
    }
  }
  function Zv(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Zv(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function $v(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Io(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Io(t.document);
    }
    return e;
  }
  function Od(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var uE = wn && "documentMode" in document && 11 >= document.documentMode, xa = null, Qc = null, ks = null, Fc = false;
  function Xm(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fc || xa == null || xa !== Io(i) || (i = xa, "selectionStart" in i && Od(i) ? i = {
      start: i.selectionStart,
      end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), ks && rr(ks, i) || (ks = i, i = pl(Qc, "onSelect"), 0 < i.length && (e = new Yl("onSelect", "select", null, e, n), t.push({
      event: e,
      listeners: i
    }), e.target = xa)));
  }
  function Oi(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Sa = {
    animationend: Oi("Animation", "AnimationEnd"),
    animationiteration: Oi("Animation", "AnimationIteration"),
    animationstart: Oi("Animation", "AnimationStart"),
    transitionrun: Oi("Transition", "TransitionRun"),
    transitionstart: Oi("Transition", "TransitionStart"),
    transitioncancel: Oi("Transition", "TransitionCancel"),
    transitionend: Oi("Transition", "TransitionEnd")
  }, zu = {}, Iv = {};
  wn && (Iv = document.createElement("div").style, "AnimationEvent" in window || (delete Sa.animationend.animation, delete Sa.animationiteration.animation, delete Sa.animationstart.animation), "TransitionEvent" in window || delete Sa.transitionend.transition);
  function Ji(t) {
    if (zu[t]) return zu[t];
    if (!Sa[t]) return t;
    var e = Sa[t], n;
    for (n in e) if (e.hasOwnProperty(n) && n in Iv) return zu[t] = e[n];
    return t;
  }
  var Jv = Ji("animationend"), Wv = Ji("animationiteration"), t0 = Ji("animationstart"), cE = Ji("transitionrun"), fE = Ji("transitionstart"), dE = Ji("transitioncancel"), e0 = Ji("transitionend"), n0 = /* @__PURE__ */ new Map(), Kc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Kc.push("scrollEnd");
  function Xe(t, e) {
    n0.set(t, e), $i(e, [
      t
    ]);
  }
  var Jo = typeof reportError == "function" ? reportError : function(t) {
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
  }, xe = [], wa = 0, Dd = 0;
  function Xl() {
    for (var t = wa, e = Dd = wa = 0; e < t; ) {
      var n = xe[e];
      xe[e++] = null;
      var i = xe[e];
      xe[e++] = null;
      var a = xe[e];
      xe[e++] = null;
      var s = xe[e];
      if (xe[e++] = null, i !== null && a !== null) {
        var r = i.pending;
        r === null ? a.next = a : (a.next = r.next, r.next = a), i.pending = a;
      }
      s !== 0 && i0(n, a, s);
    }
  }
  function Ql(t, e, n, i) {
    xe[wa++] = t, xe[wa++] = e, xe[wa++] = n, xe[wa++] = i, Dd |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
  }
  function Nd(t, e, n, i) {
    return Ql(t, e, n, i), Wo(t);
  }
  function Wi(t, e) {
    return Ql(t, null, null, e), Wo(t);
  }
  function i0(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var a = false, s = t.return; s !== null; ) s.childLanes |= n, i = s.alternate, i !== null && (i.childLanes |= n), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (a = true)), t = s, s = s.return;
    return t.tag === 3 ? (s = t.stateNode, a && e !== null && (a = 31 - me(n), t = s.hiddenUpdates, i = t[a], i === null ? t[a] = [
      e
    ] : i.push(e), e.lane = n | 536870912), s) : null;
  }
  function Wo(t) {
    if (50 < $s) throw $s = 0, gf = null, Error(M(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ta = {};
  function hE(t, e, n, i) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ce(t, e, n, i) {
    return new hE(t, e, n, i);
  }
  function jd(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function bn(t, e) {
    var n = t.alternate;
    return n === null ? (n = ce(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function a0(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Co(t, e, n, i, a, s) {
    var r = 0;
    if (i = t, typeof t == "function") jd(t) && (r = 1);
    else if (typeof t == "string") r = vA(t, n, Je.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case Lc:
        return t = ce(31, n, e, a), t.elementType = Lc, t.lanes = s, t;
      case pa:
        return Pi(n.children, a, s, e);
      case Tv:
        r = 8, a |= 24;
        break;
      case jc:
        return t = ce(12, n, e, a | 2), t.elementType = jc, t.lanes = s, t;
      case zc:
        return t = ce(13, n, e, a), t.elementType = zc, t.lanes = s, t;
      case _c:
        return t = ce(19, n, e, a), t.elementType = _c, t.lanes = s, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case gn:
            r = 10;
            break t;
          case Ev:
            r = 9;
            break t;
          case vd:
            r = 11;
            break t;
          case bd:
            r = 14;
            break t;
          case Pn:
            r = 16, i = null;
            break t;
        }
        r = 29, n = Error(M(130, t === null ? "null" : typeof t, "")), i = null;
    }
    return e = ce(r, n, e, a), e.elementType = t, e.type = i, e.lanes = s, e;
  }
  function Pi(t, e, n, i) {
    return t = ce(7, t, i, e), t.lanes = n, t;
  }
  function _u(t, e, n) {
    return t = ce(6, t, null, e), t.lanes = n, t;
  }
  function s0(t) {
    var e = ce(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Lu(t, e, n) {
    return e = ce(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Qm = /* @__PURE__ */ new WeakMap();
  function Ae(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Qm.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Cm(e)
      }, Qm.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Cm(e)
    };
  }
  var Ea = [], Aa = 0, tl = null, or = 0, we = [], Te = 0, li = null, Ke = 1, Ze = "";
  function mn(t, e) {
    Ea[Aa++] = or, Ea[Aa++] = tl, tl = t, or = e;
  }
  function r0(t, e, n) {
    we[Te++] = Ke, we[Te++] = Ze, we[Te++] = li, li = t;
    var i = Ke;
    t = Ze;
    var a = 32 - me(i) - 1;
    i &= ~(1 << a), n += 1;
    var s = 32 - me(e) + a;
    if (30 < s) {
      var r = a - a % 5;
      s = (i & (1 << r) - 1).toString(32), i >>= r, a -= r, Ke = 1 << 32 - me(e) + a | n << a | i, Ze = s + t;
    } else Ke = 1 << s | n << a | i, Ze = t;
  }
  function zd(t) {
    t.return !== null && (mn(t, 1), r0(t, 1, 0));
  }
  function _d(t) {
    for (; t === tl; ) tl = Ea[--Aa], Ea[Aa] = null, or = Ea[--Aa], Ea[Aa] = null;
    for (; t === li; ) li = we[--Te], we[Te] = null, Ze = we[--Te], we[Te] = null, Ke = we[--Te], we[Te] = null;
  }
  function o0(t, e) {
    we[Te++] = Ke, we[Te++] = Ze, we[Te++] = li, Ke = e.id, Ze = e.overflow, li = t;
  }
  var Yt = null, mt = null, W = false, Wn = null, Ce = false, Zc = Error(M(519));
  function ui(t) {
    var e = Error(M(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw lr(Ae(e, t)), Zc;
  }
  function Fm(t) {
    var e = t.stateNode, n = t.type, i = t.memoizedProps;
    switch (e[kt] = t, e[ae] = i, n) {
      case "dialog":
        F("cancel", e), F("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        F("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < dr.length; n++) F(dr[n], e);
        break;
      case "source":
        F("error", e);
        break;
      case "img":
      case "image":
      case "link":
        F("error", e), F("load", e);
        break;
      case "details":
        F("toggle", e);
        break;
      case "input":
        F("invalid", e), Bv(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, true);
        break;
      case "select":
        F("invalid", e);
        break;
      case "textarea":
        F("invalid", e), Pv(e, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === true || Gb(e.textContent, n) ? (i.popover != null && (F("beforetoggle", e), F("toggle", e)), i.onScroll != null && F("scroll", e), i.onScrollEnd != null && F("scrollend", e), i.onClick != null && (e.onclick = yn), e = true) : e = false, e || ui(t, true);
  }
  function Km(t) {
    for (Yt = t.return; Yt; ) switch (Yt.tag) {
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
        Yt = Yt.return;
    }
  }
  function oa(t) {
    if (t !== Yt) return false;
    if (!W) return Km(t), W = true, false;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Sf(t.type, t.memoizedProps)), n = !n), n && mt && ui(t), Km(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(M(317));
      mt = _p(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(M(317));
      mt = _p(t);
    } else e === 27 ? (e = mt, bi(t.type) ? (t = Af, Af = null, mt = t) : mt = e) : mt = Yt ? Oe(t.stateNode.nextSibling) : null;
    return true;
  }
  function qi() {
    mt = Yt = null, W = false;
  }
  function Vu() {
    var t = Wn;
    return t !== null && (ee === null ? ee = t : ee.push.apply(ee, t), Wn = null), t;
  }
  function lr(t) {
    Wn === null ? Wn = [
      t
    ] : Wn.push(t);
  }
  var $c = an(null), ta = null, vn = null;
  function kn(t, e, n) {
    ut($c, e._currentValue), e._currentValue = n;
  }
  function xn(t) {
    t._currentValue = $c.current, Ut($c);
  }
  function Ic(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Jc(t, e, n, i) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var s = a.dependencies;
      if (s !== null) {
        var r = a.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var o = s;
          s = a;
          for (var l = 0; l < e.length; l++) if (o.context === e[l]) {
            s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Ic(s.return, n, t), i || (r = null);
            break t;
          }
          s = o.next;
        }
      } else if (a.tag === 18) {
        if (r = a.return, r === null) throw Error(M(341));
        r.lanes |= n, s = r.alternate, s !== null && (s.lanes |= n), Ic(r, n, t), r = null;
      } else r = a.child;
      if (r !== null) r.return = a;
      else for (r = a; r !== null; ) {
        if (r === t) {
          r = null;
          break;
        }
        if (a = r.sibling, a !== null) {
          a.return = r.return, r = a;
          break;
        }
        r = r.return;
      }
      a = r;
    }
  }
  function rs(t, e, n, i) {
    t = null;
    for (var a = e, s = false; a !== null; ) {
      if (!s) {
        if (a.flags & 524288) s = true;
        else if (a.flags & 262144) break;
      }
      if (a.tag === 10) {
        var r = a.alternate;
        if (r === null) throw Error(M(387));
        if (r = r.memoizedProps, r !== null) {
          var o = a.type;
          ye(a.pendingProps.value, r.value) || (t !== null ? t.push(o) : t = [
            o
          ]);
        }
      } else if (a === Fo.current) {
        if (r = a.alternate, r === null) throw Error(M(387));
        r.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(mr) : t = [
          mr
        ]);
      }
      a = a.return;
    }
    t !== null && Jc(e, t, n, i), e.flags |= 262144;
  }
  function el(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ye(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function Xi(t) {
    ta = t, vn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Gt(t) {
    return l0(ta, t);
  }
  function eo(t, e) {
    return ta === null && Xi(t), l0(t, e);
  }
  function l0(t, e) {
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
  var mE = typeof AbortController < "u" ? AbortController : function() {
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
  }, pE = Lt.unstable_scheduleCallback, gE = Lt.unstable_NormalPriority, Dt = {
    $$typeof: gn,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ld() {
    return {
      controller: new mE(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Lr(t) {
    t.refCount--, t.refCount === 0 && pE(gE, function() {
      t.controller.abort();
    });
  }
  var Ys = null, Wc = 0, Xa = 0, La = null;
  function yE(t, e) {
    if (Ys === null) {
      var n = Ys = [];
      Wc = 0, Xa = rh(), La = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return Wc++, e.then(Zm, Zm), e;
  }
  function Zm() {
    if (--Wc === 0 && Ys !== null) {
      La !== null && (La.status = "fulfilled");
      var t = Ys;
      Ys = null, Xa = 0, La = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function vE(t, e) {
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
  var $m = H.S;
  H.S = function(t, e) {
    wb = de(), typeof e == "object" && e !== null && typeof e.then == "function" && yE(t, e), $m !== null && $m(t, e);
  };
  var Hi = an(null);
  function Vd() {
    var t = Hi.current;
    return t !== null ? t : lt.pooledCache;
  }
  function Mo(t, e) {
    e === null ? ut(Hi, Hi.current) : ut(Hi, e.pool);
  }
  function u0() {
    var t = Vd();
    return t === null ? null : {
      parent: Dt._currentValue,
      pool: t
    };
  }
  var os = Error(M(460)), Bd = Error(M(474)), Fl = Error(M(542)), nl = {
    then: function() {
    }
  };
  function Im(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function c0(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(yn, yn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Wm(t), t;
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
            throw t = e.reason, Wm(t), t;
        }
        throw ki = e, os;
    }
  }
  function zi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ki = n, os) : n;
    }
  }
  var ki = null;
  function Jm() {
    if (ki === null) throw Error(M(459));
    var t = ki;
    return ki = null, t;
  }
  function Wm(t) {
    if (t === os || t === Fl) throw Error(M(483));
  }
  var Va = null, ur = 0;
  function no(t) {
    var e = ur;
    return ur += 1, Va === null && (Va = []), c0(Va, t, e);
  }
  function Es(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function io(t, e) {
    throw e.$$typeof === aT ? Error(M(525)) : (t = Object.prototype.toString.call(e), Error(M(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function f0(t) {
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
    function r(p) {
      return t && p.alternate === null && (p.flags |= 67108866), p;
    }
    function o(p, m, g, S) {
      return m === null || m.tag !== 6 ? (m = _u(g, p.mode, S), m.return = p, m) : (m = a(m, g), m.return = p, m);
    }
    function l(p, m, g, S) {
      var T = g.type;
      return T === pa ? c(p, m, g.props.children, S, g.key) : m !== null && (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Pn && zi(T) === m.type) ? (m = a(m, g.props), Es(m, g), m.return = p, m) : (m = Co(g.type, g.key, g.props, null, p.mode, S), Es(m, g), m.return = p, m);
    }
    function u(p, m, g, S) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = Lu(g, p.mode, S), m.return = p, m) : (m = a(m, g.children || []), m.return = p, m);
    }
    function c(p, m, g, S, T) {
      return m === null || m.tag !== 7 ? (m = Pi(g, p.mode, S, T), m.return = p, m) : (m = a(m, g), m.return = p, m);
    }
    function f(p, m, g) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return m = _u("" + m, p.mode, g), m.return = p, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Zr:
            return g = Co(m.type, m.key, m.props, null, p.mode, g), Es(g, m), g.return = p, g;
          case Ns:
            return m = Lu(m, p.mode, g), m.return = p, m;
          case Pn:
            return m = zi(m), f(p, m, g);
        }
        if (js(m) || Ss(m)) return m = Pi(m, p.mode, g, null), m.return = p, m;
        if (typeof m.then == "function") return f(p, no(m), g);
        if (m.$$typeof === gn) return f(p, eo(p, m), g);
        io(p, m);
      }
      return null;
    }
    function h(p, m, g, S) {
      var T = m !== null ? m.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return T !== null ? null : o(p, m, "" + g, S);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Zr:
            return g.key === T ? l(p, m, g, S) : null;
          case Ns:
            return g.key === T ? u(p, m, g, S) : null;
          case Pn:
            return g = zi(g), h(p, m, g, S);
        }
        if (js(g) || Ss(g)) return T !== null ? null : c(p, m, g, S, null);
        if (typeof g.then == "function") return h(p, m, no(g), S);
        if (g.$$typeof === gn) return h(p, m, eo(p, g), S);
        io(p, g);
      }
      return null;
    }
    function d(p, m, g, S, T) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return p = p.get(g) || null, o(m, p, "" + S, T);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Zr:
            return p = p.get(S.key === null ? g : S.key) || null, l(m, p, S, T);
          case Ns:
            return p = p.get(S.key === null ? g : S.key) || null, u(m, p, S, T);
          case Pn:
            return S = zi(S), d(p, m, g, S, T);
        }
        if (js(S) || Ss(S)) return p = p.get(g) || null, c(m, p, S, T, null);
        if (typeof S.then == "function") return d(p, m, g, no(S), T);
        if (S.$$typeof === gn) return d(p, m, g, eo(m, S), T);
        io(m, S);
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
    function x(p, m, g, S) {
      if (typeof g == "object" && g !== null && g.type === pa && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Zr:
            t: {
              for (var T = g.key; m !== null; ) {
                if (m.key === T) {
                  if (T = g.type, T === pa) {
                    if (m.tag === 7) {
                      n(p, m.sibling), S = a(m, g.props.children), S.return = p, p = S;
                      break t;
                    }
                  } else if (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Pn && zi(T) === m.type) {
                    n(p, m.sibling), S = a(m, g.props), Es(S, g), S.return = p, p = S;
                    break t;
                  }
                  n(p, m);
                  break;
                } else e(p, m);
                m = m.sibling;
              }
              g.type === pa ? (S = Pi(g.props.children, p.mode, S, g.key), S.return = p, p = S) : (S = Co(g.type, g.key, g.props, null, p.mode, S), Es(S, g), S.return = p, p = S);
            }
            return r(p);
          case Ns:
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
              S = Lu(g, p.mode, S), S.return = p, p = S;
            }
            return r(p);
          case Pn:
            return g = zi(g), x(p, m, g, S);
        }
        if (js(g)) return v(p, m, g, S);
        if (Ss(g)) {
          if (T = Ss(g), typeof T != "function") throw Error(M(150));
          return g = T.call(g), y(p, m, g, S);
        }
        if (typeof g.then == "function") return x(p, m, no(g), S);
        if (g.$$typeof === gn) return x(p, m, eo(p, g), S);
        io(p, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, m !== null && m.tag === 6 ? (n(p, m.sibling), S = a(m, g), S.return = p, p = S) : (n(p, m), S = _u(g, p.mode, S), S.return = p, p = S), r(p)) : n(p, m);
    }
    return function(p, m, g, S) {
      try {
        ur = 0;
        var T = x(p, m, g, S);
        return Va = null, T;
      } catch (E) {
        if (E === os || E === Fl) throw E;
        var A = ce(29, E, null, p.mode);
        return A.lanes = S, A.return = p, A;
      } finally {
      }
    };
  }
  var Qi = f0(true), d0 = f0(false), Hn = false;
  function Ud(t) {
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
  function tf(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ti(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function ei(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, tt & 2) {
      var a = i.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), i.pending = e, e = Wo(t), i0(t, null, n), e;
    }
    return Ql(t, i, e, n), Wo(t);
  }
  function Gs(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, Dv(t, n);
    }
  }
  function Bu(t, e) {
    var n = t.updateQueue, i = t.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var a = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var r = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          s === null ? a = s = r : s = s.next = r, n = n.next;
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
  var ef = false;
  function qs() {
    if (ef) {
      var t = La;
      if (t !== null) throw t;
    }
  }
  function Xs(t, e, n, i) {
    ef = false;
    var a = t.updateQueue;
    Hn = false;
    var s = a.firstBaseUpdate, r = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var l = o, u = l.next;
      l.next = null, r === null ? s = u : r.next = u, r = l;
      var c = t.alternate;
      c !== null && (c = c.updateQueue, o = c.lastBaseUpdate, o !== r && (o === null ? c.firstBaseUpdate = u : o.next = u, c.lastBaseUpdate = l));
    }
    if (s !== null) {
      var f = a.baseState;
      r = 0, c = u = l = null, o = s;
      do {
        var h = o.lane & -536870913, d = h !== o.lane;
        if (d ? (I & h) === h : (i & h) === h) {
          h !== 0 && h === Xa && (ef = true), c !== null && (c = c.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          t: {
            var v = t, y = o;
            h = e;
            var x = n;
            switch (y.tag) {
              case 1:
                if (v = y.payload, typeof v == "function") {
                  f = v.call(x, f, h);
                  break t;
                }
                f = v;
                break t;
              case 3:
                v.flags = v.flags & -65537 | 128;
              case 0:
                if (v = y.payload, h = typeof v == "function" ? v.call(x, f, h) : v, h == null) break t;
                f = gt({}, f, h);
                break t;
              case 2:
                Hn = true;
            }
          }
          h = o.callback, h !== null && (t.flags |= 64, d && (t.flags |= 8192), d = a.callbacks, d === null ? a.callbacks = [
            h
          ] : d.push(h));
        } else d = {
          lane: h,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        }, c === null ? (u = c = d, l = f) : c = c.next = d, r |= h;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null) break;
          d = o, o = d.next, d.next = null, a.lastBaseUpdate = d, a.shared.pending = null;
        }
      } while (true);
      c === null && (l = f), a.baseState = l, a.firstBaseUpdate = u, a.lastBaseUpdate = c, s === null && (a.shared.lanes = 0), fi |= r, t.lanes = r, t.memoizedState = f;
    }
  }
  function h0(t, e) {
    if (typeof t != "function") throw Error(M(191, t));
    t.call(e);
  }
  function m0(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) h0(n[t], e);
  }
  var Qa = an(null), il = an(0);
  function tp(t, e) {
    t = Cn, ut(il, t), ut(Qa, e), Cn = t | e.baseLanes;
  }
  function nf() {
    ut(il, Cn), ut(Qa, Qa.current);
  }
  function Pd() {
    Cn = il.current, Ut(Qa), Ut(il);
  }
  var ve = an(null), Re = null;
  function Yn(t) {
    var e = t.alternate;
    ut(Et, Et.current & 1), ut(ve, t), Re === null && (e === null || Qa.current !== null || e.memoizedState !== null) && (Re = t);
  }
  function af(t) {
    ut(Et, Et.current), ut(ve, t), Re === null && (Re = t);
  }
  function p0(t) {
    t.tag === 22 ? (ut(Et, Et.current), ut(ve, t), Re === null && (Re = t)) : Gn();
  }
  function Gn() {
    ut(Et, Et.current), ut(ve, ve.current);
  }
  function le(t) {
    Ut(ve), Re === t && (Re = null), Ut(Et);
  }
  var Et = an(0);
  function al(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Tf(n) || Ef(n))) return e;
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
  var Tn = 0, G = null, ot = null, Rt = null, sl = false, Ba = false, Fi = false, rl = 0, cr = 0, Ua = null, bE = 0;
  function St() {
    throw Error(M(321));
  }
  function Hd(t, e) {
    if (e === null) return false;
    for (var n = 0; n < e.length && n < t.length; n++) if (!ye(t[n], e[n])) return false;
    return true;
  }
  function kd(t, e, n, i, a, s) {
    return Tn = s, G = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, H.H = t === null || t.memoizedState === null ? Q0 : Jd, Fi = false, s = n(i, a), Fi = false, Ba && (s = y0(e, n, i, a)), g0(t), s;
  }
  function g0(t) {
    H.H = fr;
    var e = ot !== null && ot.next !== null;
    if (Tn = 0, Rt = ot = G = null, sl = false, cr = 0, Ua = null, e) throw Error(M(300));
    t === null || Nt || (t = t.dependencies, t !== null && el(t) && (Nt = true));
  }
  function y0(t, e, n, i) {
    G = t;
    var a = 0;
    do {
      if (Ba && (Ua = null), cr = 0, Ba = false, 25 <= a) throw Error(M(301));
      if (a += 1, Rt = ot = null, t.updateQueue != null) {
        var s = t.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      H.H = F0, s = e(n, i);
    } while (Ba);
    return s;
  }
  function xE() {
    var t = H.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Vr(e) : e, t = t.useState()[0], (ot !== null ? ot.memoizedState : null) !== t && (G.flags |= 1024), e;
  }
  function Yd() {
    var t = rl !== 0;
    return rl = 0, t;
  }
  function Gd(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function qd(t) {
    if (sl) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      sl = false;
    }
    Tn = 0, Rt = ot = G = null, Ba = false, cr = rl = 0, Ua = null;
  }
  function Qt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Rt === null ? G.memoizedState = Rt = t : Rt = Rt.next = t, Rt;
  }
  function At() {
    if (ot === null) {
      var t = G.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ot.next;
    var e = Rt === null ? G.memoizedState : Rt.next;
    if (e !== null) Rt = e, ot = t;
    else {
      if (t === null) throw G.alternate === null ? Error(M(467)) : Error(M(310));
      ot = t, t = {
        memoizedState: ot.memoizedState,
        baseState: ot.baseState,
        baseQueue: ot.baseQueue,
        queue: ot.queue,
        next: null
      }, Rt === null ? G.memoizedState = Rt = t : Rt = Rt.next = t;
    }
    return Rt;
  }
  function Kl() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Vr(t) {
    var e = cr;
    return cr += 1, Ua === null && (Ua = []), t = c0(Ua, t, e), e = G, (Rt === null ? e.memoizedState : Rt.next) === null && (e = e.alternate, H.H = e === null || e.memoizedState === null ? Q0 : Jd), t;
  }
  function Zl(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Vr(t);
      if (t.$$typeof === gn) return Gt(t);
    }
    throw Error(M(438, String(t)));
  }
  function Xd(t) {
    var e = null, n = G.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var i = G.alternate;
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
    }), n === null && (n = Kl(), G.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0) for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = sT;
    return e.index++, n;
  }
  function En(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ro(t) {
    var e = At();
    return Qd(e, ot, t);
  }
  function Qd(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(M(311));
    i.lastRenderedReducer = n;
    var a = t.baseQueue, s = i.pending;
    if (s !== null) {
      if (a !== null) {
        var r = a.next;
        a.next = s.next, s.next = r;
      }
      e.baseQueue = a = s, i.pending = null;
    }
    if (s = t.baseState, a === null) t.memoizedState = s;
    else {
      e = a.next;
      var o = r = null, l = null, u = e, c = false;
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
          }), f === Xa && (c = true);
          else if ((Tn & h) === h) {
            u = u.next, h === Xa && (c = true);
            continue;
          } else f = {
            lane: 0,
            revertLane: u.revertLane,
            gesture: null,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          }, l === null ? (o = l = f, r = s) : l = l.next = f, G.lanes |= h, fi |= h;
          f = u.action, Fi && n(s, f), s = u.hasEagerState ? u.eagerState : n(s, f);
        } else h = {
          lane: f,
          revertLane: u.revertLane,
          gesture: u.gesture,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }, l === null ? (o = l = h, r = s) : l = l.next = h, G.lanes |= f, fi |= f;
        u = u.next;
      } while (u !== null && u !== e);
      if (l === null ? r = s : l.next = o, !ye(s, t.memoizedState) && (Nt = true, c && (n = La, n !== null))) throw n;
      t.memoizedState = s, t.baseState = r, t.baseQueue = l, i.lastRenderedState = s;
    }
    return a === null && (i.lanes = 0), [
      t.memoizedState,
      i.dispatch
    ];
  }
  function Uu(t) {
    var e = At(), n = e.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch, a = n.pending, s = e.memoizedState;
    if (a !== null) {
      n.pending = null;
      var r = a = a.next;
      do
        s = t(s, r.action), r = r.next;
      while (r !== a);
      ye(s, e.memoizedState) || (Nt = true), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s;
    }
    return [
      s,
      i
    ];
  }
  function v0(t, e, n) {
    var i = G, a = At(), s = W;
    if (s) {
      if (n === void 0) throw Error(M(407));
      n = n();
    } else n = e();
    var r = !ye((ot || a).memoizedState, n);
    if (r && (a.memoizedState = n, Nt = true), a = a.queue, Fd(S0.bind(null, i, a, t), [
      t
    ]), a.getSnapshot !== e || r || Rt !== null && Rt.memoizedState.tag & 1) {
      if (i.flags |= 2048, Fa(9, {
        destroy: void 0
      }, x0.bind(null, i, a, n, e), null), lt === null) throw Error(M(349));
      s || Tn & 127 || b0(i, e, n);
    }
    return n;
  }
  function b0(t, e, n) {
    t.flags |= 16384, t = {
      getSnapshot: e,
      value: n
    }, e = G.updateQueue, e === null ? (e = Kl(), G.updateQueue = e, e.stores = [
      t
    ]) : (n = e.stores, n === null ? e.stores = [
      t
    ] : n.push(t));
  }
  function x0(t, e, n, i) {
    e.value = n, e.getSnapshot = i, w0(e) && T0(t);
  }
  function S0(t, e, n) {
    return n(function() {
      w0(e) && T0(t);
    });
  }
  function w0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ye(t, n);
    } catch {
      return true;
    }
  }
  function T0(t) {
    var e = Wi(t, 2);
    e !== null && ie(e, t, 2);
  }
  function sf(t) {
    var e = Qt();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Fi) {
        Xn(true);
        try {
          n();
        } finally {
          Xn(false);
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
  function E0(t, e, n, i) {
    return t.baseState = n, Qd(t, ot, typeof i == "function" ? i : En);
  }
  function SE(t, e, n, i, a) {
    if (Il(t)) throw Error(M(485));
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
        then: function(r) {
          s.listeners.push(r);
        }
      };
      H.T !== null ? n(true) : s.isTransition = false, i(s), n = e.pending, n === null ? (s.next = e.pending = s, A0(e, s)) : (s.next = n.next, e.pending = n.next = s);
    }
  }
  function A0(t, e) {
    var n = e.action, i = e.payload, a = t.state;
    if (e.isTransition) {
      var s = H.T, r = {};
      H.T = r;
      try {
        var o = n(a, i), l = H.S;
        l !== null && l(r, o), ep(t, e, o);
      } catch (u) {
        rf(t, e, u);
      } finally {
        s !== null && r.types !== null && (s.types = r.types), H.T = s;
      }
    } else try {
      s = n(a, i), ep(t, e, s);
    } catch (u) {
      rf(t, e, u);
    }
  }
  function ep(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(i) {
      np(t, e, i);
    }, function(i) {
      return rf(t, e, i);
    }) : np(t, e, n);
  }
  function np(t, e, n) {
    e.status = "fulfilled", e.value = n, C0(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, A0(t, n)));
  }
  function rf(t, e, n) {
    var i = t.pending;
    if (t.pending = null, i !== null) {
      i = i.next;
      do
        e.status = "rejected", e.reason = n, C0(e), e = e.next;
      while (e !== i);
    }
    t.action = null;
  }
  function C0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function M0(t, e) {
    return e;
  }
  function ip(t, e) {
    if (W) {
      var n = lt.formState;
      if (n !== null) {
        t: {
          var i = G;
          if (W) {
            if (mt) {
              e: {
                for (var a = mt, s = Ce; a.nodeType !== 8; ) {
                  if (!s) {
                    a = null;
                    break e;
                  }
                  if (a = Oe(a.nextSibling), a === null) {
                    a = null;
                    break e;
                  }
                }
                s = a.data, a = s === "F!" || s === "F" ? a : null;
              }
              if (a) {
                mt = Oe(a.nextSibling), i = a.data === "F!";
                break t;
              }
            }
            ui(i);
          }
          i = false;
        }
        i && (e = n[0]);
      }
    }
    return n = Qt(), n.memoizedState = n.baseState = e, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: M0,
      lastRenderedState: e
    }, n.queue = i, n = G0.bind(null, G, i), i.dispatch = n, i = sf(false), s = Id.bind(null, G, false, i.queue), i = Qt(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, i.queue = a, n = SE.bind(null, G, a, s, n), a.dispatch = n, i.memoizedState = t, [
      e,
      n,
      false
    ];
  }
  function ap(t) {
    var e = At();
    return R0(e, ot, t);
  }
  function R0(t, e, n) {
    if (e = Qd(t, e, M0)[0], t = Ro(En)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var i = Vr(e);
    } catch (r) {
      throw r === os ? Fl : r;
    }
    else i = e;
    e = At();
    var a = e.queue, s = a.dispatch;
    return n !== e.memoizedState && (G.flags |= 2048, Fa(9, {
      destroy: void 0
    }, wE.bind(null, a, n), null)), [
      i,
      s,
      t
    ];
  }
  function wE(t, e) {
    t.action = e;
  }
  function sp(t) {
    var e = At(), n = ot;
    if (n !== null) return R0(e, n, t);
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
    }, e = G.updateQueue, e === null && (e = Kl(), G.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t;
  }
  function O0() {
    return At().memoizedState;
  }
  function Oo(t, e, n, i) {
    var a = Qt();
    G.flags |= t, a.memoizedState = Fa(1 | e, {
      destroy: void 0
    }, n, i === void 0 ? null : i);
  }
  function $l(t, e, n, i) {
    var a = At();
    i = i === void 0 ? null : i;
    var s = a.memoizedState.inst;
    ot !== null && i !== null && Hd(i, ot.memoizedState.deps) ? a.memoizedState = Fa(e, s, n, i) : (G.flags |= t, a.memoizedState = Fa(1 | e, s, n, i));
  }
  function rp(t, e) {
    Oo(8390656, 8, t, e);
  }
  function Fd(t, e) {
    $l(2048, 8, t, e);
  }
  function TE(t) {
    G.flags |= 4;
    var e = G.updateQueue;
    if (e === null) e = Kl(), G.updateQueue = e, e.events = [
      t
    ];
    else {
      var n = e.events;
      n === null ? e.events = [
        t
      ] : n.push(t);
    }
  }
  function D0(t) {
    var e = At().memoizedState;
    return TE({
      ref: e,
      nextImpl: t
    }), function() {
      if (tt & 2) throw Error(M(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function N0(t, e) {
    return $l(4, 2, t, e);
  }
  function j0(t, e) {
    return $l(4, 4, t, e);
  }
  function z0(t, e) {
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
  function _0(t, e, n) {
    n = n != null ? n.concat([
      t
    ]) : null, $l(4, 4, z0.bind(null, e, t), n);
  }
  function Kd() {
  }
  function L0(t, e) {
    var n = At();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Hd(e, i[1]) ? i[0] : (n.memoizedState = [
      t,
      e
    ], t);
  }
  function V0(t, e) {
    var n = At();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Hd(e, i[1])) return i[0];
    if (i = t(), Fi) {
      Xn(true);
      try {
        t();
      } finally {
        Xn(false);
      }
    }
    return n.memoizedState = [
      i,
      e
    ], i;
  }
  function Zd(t, e, n) {
    return n === void 0 || Tn & 1073741824 && !(I & 261930) ? t.memoizedState = e : (t.memoizedState = n, t = Eb(), G.lanes |= t, fi |= t, n);
  }
  function B0(t, e, n, i) {
    return ye(n, e) ? n : Qa.current !== null ? (t = Zd(t, n, i), ye(t, e) || (Nt = true), t) : !(Tn & 42) || Tn & 1073741824 && !(I & 261930) ? (Nt = true, t.memoizedState = n) : (t = Eb(), G.lanes |= t, fi |= t, e);
  }
  function U0(t, e, n, i, a) {
    var s = et.p;
    et.p = s !== 0 && 8 > s ? s : 8;
    var r = H.T, o = {};
    H.T = o, Id(t, false, e, n);
    try {
      var l = a(), u = H.S;
      if (u !== null && u(o, l), l !== null && typeof l == "object" && typeof l.then == "function") {
        var c = vE(l, i);
        Qs(t, e, c, pe(t));
      } else Qs(t, e, i, pe(t));
    } catch (f) {
      Qs(t, e, {
        then: function() {
        },
        status: "rejected",
        reason: f
      }, pe());
    } finally {
      et.p = s, r !== null && o.types !== null && (r.types = o.types), H.T = r;
    }
  }
  function EE() {
  }
  function of(t, e, n, i) {
    if (t.tag !== 5) throw Error(M(476));
    var a = P0(t).queue;
    U0(t, a, e, Ui, n === null ? EE : function() {
      return H0(t), n(i);
    });
  }
  function P0(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Ui,
      baseState: Ui,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: En,
        lastRenderedState: Ui
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
  function H0(t) {
    var e = P0(t);
    e.next === null && (e = t.alternate.memoizedState), Qs(t, e.next.queue, {}, pe());
  }
  function $d() {
    return Gt(mr);
  }
  function k0() {
    return At().memoizedState;
  }
  function Y0() {
    return At().memoizedState;
  }
  function AE(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = pe();
          t = ti(n);
          var i = ei(e, t, n);
          i !== null && (ie(i, e, n), Gs(i, e, n)), e = {
            cache: Ld()
          }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function CE(t, e, n) {
    var i = pe();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Il(t) ? q0(e, n) : (n = Nd(t, e, n, i), n !== null && (ie(n, t, i), X0(n, e, i)));
  }
  function G0(t, e, n) {
    var i = pe();
    Qs(t, e, n, i);
  }
  function Qs(t, e, n, i) {
    var a = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Il(t)) q0(e, a);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null)) try {
        var r = e.lastRenderedState, o = s(r, n);
        if (a.hasEagerState = true, a.eagerState = o, ye(o, r)) return Ql(t, e, a, 0), lt === null && Xl(), false;
      } catch {
      } finally {
      }
      if (n = Nd(t, e, a, i), n !== null) return ie(n, t, i), X0(n, e, i), true;
    }
    return false;
  }
  function Id(t, e, n, i) {
    if (i = {
      lane: 2,
      revertLane: rh(),
      gesture: null,
      action: i,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Il(t)) {
      if (e) throw Error(M(479));
    } else e = Nd(t, n, i, 2), e !== null && ie(e, t, 2);
  }
  function Il(t) {
    var e = t.alternate;
    return t === G || e !== null && e === G;
  }
  function q0(t, e) {
    Ba = sl = true;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function X0(t, e, n) {
    if (n & 4194048) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, Dv(t, n);
    }
  }
  var fr = {
    readContext: Gt,
    use: Zl,
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
  fr.useEffectEvent = St;
  var Q0 = {
    readContext: Gt,
    use: Zl,
    useCallback: function(t, e) {
      return Qt().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Gt,
    useEffect: rp,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([
        t
      ]) : null, Oo(4194308, 4, z0.bind(null, e, t), n);
    },
    useLayoutEffect: function(t, e) {
      return Oo(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Oo(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Qt();
      e = e === void 0 ? null : e;
      var i = t();
      if (Fi) {
        Xn(true);
        try {
          t();
        } finally {
          Xn(false);
        }
      }
      return n.memoizedState = [
        i,
        e
      ], i;
    },
    useReducer: function(t, e, n) {
      var i = Qt();
      if (n !== void 0) {
        var a = n(e);
        if (Fi) {
          Xn(true);
          try {
            n(e);
          } finally {
            Xn(false);
          }
        }
      } else a = e;
      return i.memoizedState = i.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, i.queue = t, t = t.dispatch = CE.bind(null, G, t), [
        i.memoizedState,
        t
      ];
    },
    useRef: function(t) {
      var e = Qt();
      return t = {
        current: t
      }, e.memoizedState = t;
    },
    useState: function(t) {
      t = sf(t);
      var e = t.queue, n = G0.bind(null, G, e);
      return e.dispatch = n, [
        t.memoizedState,
        n
      ];
    },
    useDebugValue: Kd,
    useDeferredValue: function(t, e) {
      var n = Qt();
      return Zd(n, t, e);
    },
    useTransition: function() {
      var t = sf(false);
      return t = U0.bind(null, G, t.queue, true, false), Qt().memoizedState = t, [
        false,
        t
      ];
    },
    useSyncExternalStore: function(t, e, n) {
      var i = G, a = Qt();
      if (W) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (n = e(), lt === null) throw Error(M(349));
        I & 127 || b0(i, e, n);
      }
      a.memoizedState = n;
      var s = {
        value: n,
        getSnapshot: e
      };
      return a.queue = s, rp(S0.bind(null, i, s, t), [
        t
      ]), i.flags |= 2048, Fa(9, {
        destroy: void 0
      }, x0.bind(null, i, s, n, e), null), n;
    },
    useId: function() {
      var t = Qt(), e = lt.identifierPrefix;
      if (W) {
        var n = Ze, i = Ke;
        n = (i & ~(1 << 32 - me(i) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = rl++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else n = bE++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: $d,
    useFormState: ip,
    useActionState: ip,
    useOptimistic: function(t) {
      var e = Qt();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Id.bind(null, G, true, n), n.dispatch = e, [
        t,
        e
      ];
    },
    useMemoCache: Xd,
    useCacheRefresh: function() {
      return Qt().memoizedState = AE.bind(null, G);
    },
    useEffectEvent: function(t) {
      var e = Qt(), n = {
        impl: t
      };
      return e.memoizedState = n, function() {
        if (tt & 2) throw Error(M(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Jd = {
    readContext: Gt,
    use: Zl,
    useCallback: L0,
    useContext: Gt,
    useEffect: Fd,
    useImperativeHandle: _0,
    useInsertionEffect: N0,
    useLayoutEffect: j0,
    useMemo: V0,
    useReducer: Ro,
    useRef: O0,
    useState: function() {
      return Ro(En);
    },
    useDebugValue: Kd,
    useDeferredValue: function(t, e) {
      var n = At();
      return B0(n, ot.memoizedState, t, e);
    },
    useTransition: function() {
      var t = Ro(En)[0], e = At().memoizedState;
      return [
        typeof t == "boolean" ? t : Vr(t),
        e
      ];
    },
    useSyncExternalStore: v0,
    useId: k0,
    useHostTransitionStatus: $d,
    useFormState: ap,
    useActionState: ap,
    useOptimistic: function(t, e) {
      var n = At();
      return E0(n, ot, t, e);
    },
    useMemoCache: Xd,
    useCacheRefresh: Y0
  };
  Jd.useEffectEvent = D0;
  var F0 = {
    readContext: Gt,
    use: Zl,
    useCallback: L0,
    useContext: Gt,
    useEffect: Fd,
    useImperativeHandle: _0,
    useInsertionEffect: N0,
    useLayoutEffect: j0,
    useMemo: V0,
    useReducer: Uu,
    useRef: O0,
    useState: function() {
      return Uu(En);
    },
    useDebugValue: Kd,
    useDeferredValue: function(t, e) {
      var n = At();
      return ot === null ? Zd(n, t, e) : B0(n, ot.memoizedState, t, e);
    },
    useTransition: function() {
      var t = Uu(En)[0], e = At().memoizedState;
      return [
        typeof t == "boolean" ? t : Vr(t),
        e
      ];
    },
    useSyncExternalStore: v0,
    useId: k0,
    useHostTransitionStatus: $d,
    useFormState: sp,
    useActionState: sp,
    useOptimistic: function(t, e) {
      var n = At();
      return ot !== null ? E0(n, ot, t, e) : (n.baseState = t, [
        t,
        n.queue.dispatch
      ]);
    },
    useMemoCache: Xd,
    useCacheRefresh: Y0
  };
  F0.useEffectEvent = D0;
  function Pu(t, e, n, i) {
    e = t.memoizedState, n = n(i, e), n = n == null ? e : gt({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var lf = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var i = pe(), a = ti(i);
      a.payload = e, n != null && (a.callback = n), e = ei(t, a, i), e !== null && (ie(e, t, i), Gs(e, t, i));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var i = pe(), a = ti(i);
      a.tag = 1, a.payload = e, n != null && (a.callback = n), e = ei(t, a, i), e !== null && (ie(e, t, i), Gs(e, t, i));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = pe(), i = ti(n);
      i.tag = 2, e != null && (i.callback = e), e = ei(t, i, n), e !== null && (ie(e, t, n), Gs(e, t, n));
    }
  };
  function op(t, e, n, i, a, s, r) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, s, r) : e.prototype && e.prototype.isPureReactComponent ? !rr(n, i) || !rr(a, s) : true;
  }
  function lp(t, e, n, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && lf.enqueueReplaceState(e, e.state, null);
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
  function K0(t) {
    Jo(t);
  }
  function Z0(t) {
    console.error(t);
  }
  function $0(t) {
    Jo(t);
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
  function up(t, e, n) {
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
  function uf(t, e, n) {
    return n = ti(n), n.tag = 3, n.payload = {
      element: null
    }, n.callback = function() {
      ol(t, e);
    }, n;
  }
  function I0(t) {
    return t = ti(t), t.tag = 3, t;
  }
  function J0(t, e, n, i) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var s = i.value;
      t.payload = function() {
        return a(s);
      }, t.callback = function() {
        up(e, n, i);
      };
    }
    var r = n.stateNode;
    r !== null && typeof r.componentDidCatch == "function" && (t.callback = function() {
      up(e, n, i), typeof a != "function" && (ni === null ? ni = /* @__PURE__ */ new Set([
        this
      ]) : ni.add(this));
      var o = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function ME(t, e, n, i, a) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (e = n.alternate, e !== null && rs(e, n, a, true), n = ve.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Re === null ? dl() : n.alternate === null && wt === 0 && (wt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, i === nl ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([
              i
            ]) : e.add(i), $u(t, i, a)), false;
          case 22:
            return n.flags |= 65536, i === nl ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([
                i
              ])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([
              i
            ]) : n.add(i)), $u(t, i, a)), false;
        }
        throw Error(M(435, n.tag));
      }
      return $u(t, i, a), dl(), false;
    }
    if (W) return e = ve.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = a, i !== Zc && (t = Error(M(422), {
      cause: i
    }), lr(Ae(t, n)))) : (i !== Zc && (e = Error(M(423), {
      cause: i
    }), lr(Ae(e, n))), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, i = Ae(i, n), a = uf(t.stateNode, i, a), Bu(t, a), wt !== 4 && (wt = 2)), false;
    var s = Error(M(520), {
      cause: i
    });
    if (s = Ae(s, n), Zs === null ? Zs = [
      s
    ] : Zs.push(s), wt !== 4 && (wt = 2), e === null) return true;
    i = Ae(i, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = a & -a, n.lanes |= t, t = uf(n.stateNode, i, t), Bu(n, t), false;
        case 1:
          if (e = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (ni === null || !ni.has(s)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = I0(a), J0(a, t, n, i), Bu(n, a), false;
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var Wd = Error(M(461)), Nt = false;
  function Ht(t, e, n, i) {
    e.child = t === null ? d0(e, null, n, i) : Qi(e, t.child, n, i);
  }
  function cp(t, e, n, i, a) {
    n = n.render;
    var s = e.ref;
    if ("ref" in i) {
      var r = {};
      for (var o in i) o !== "ref" && (r[o] = i[o]);
    } else r = i;
    return Xi(e), i = kd(t, e, n, r, s, a), o = Yd(), t !== null && !Nt ? (Gd(t, e, a), An(t, e, a)) : (W && o && zd(e), e.flags |= 1, Ht(t, e, i, a), e.child);
  }
  function fp(t, e, n, i, a) {
    if (t === null) {
      var s = n.type;
      return typeof s == "function" && !jd(s) && s.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = s, W0(t, e, s, i, a)) : (t = Co(n.type, null, i, e, e.mode, a), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (s = t.child, !th(t, a)) {
      var r = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : rr, n(r, i) && t.ref === e.ref) return An(t, e, a);
    }
    return e.flags |= 1, t = bn(s, i), t.ref = e.ref, t.return = e, e.child = t;
  }
  function W0(t, e, n, i, a) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (rr(s, i) && t.ref === e.ref) if (Nt = false, e.pendingProps = i = s, th(t, a)) t.flags & 131072 && (Nt = true);
      else return e.lanes = t.lanes, An(t, e, a);
    }
    return cf(t, e, n, i, a);
  }
  function tb(t, e, n, i) {
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
        return dp(t, e, s, n, i);
      }
      if (n & 536870912) e.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && Mo(e, s !== null ? s.cachePool : null), s !== null ? tp(e, s) : nf(), p0(e);
      else return i = e.lanes = 536870912, dp(t, e, s !== null ? s.baseLanes | n : n, n, i);
    } else s !== null ? (Mo(e, s.cachePool), tp(e, s), Gn(), e.memoizedState = null) : (t !== null && Mo(e, null), nf(), Gn());
    return Ht(t, e, a, n), e.child;
  }
  function _s(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function dp(t, e, n, i, a) {
    var s = Vd();
    return s = s === null ? null : {
      parent: Dt._currentValue,
      pool: s
    }, e.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, t !== null && Mo(e, null), nf(), p0(e), t !== null && rs(t, e, i, true), e.childLanes = a, null;
  }
  function Do(t, e) {
    return e = ll({
      mode: e.mode,
      children: e.children
    }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function hp(t, e, n) {
    return Qi(e, t.child, null, n), t = Do(e, e.pendingProps), t.flags |= 2, le(e), e.memoizedState = null, t;
  }
  function RE(t, e, n) {
    var i = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (W) {
        if (i.mode === "hidden") return t = Do(e, i), e.lanes = 536870912, _s(null, t);
        if (af(e), (t = mt) ? (t = Qb(t, Ce), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: li !== null ? {
            id: Ke,
            overflow: Ze
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = s0(t), n.return = e, e.child = n, Yt = e, mt = null)) : t = null, t === null) throw ui(e);
        return e.lanes = 536870912, null;
      }
      return Do(e, i);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var r = s.dehydrated;
      if (af(e), a) if (e.flags & 256) e.flags &= -257, e = hp(t, e, n);
      else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
      else throw Error(M(558));
      else if (Nt || rs(t, e, n, false), a = (n & t.childLanes) !== 0, Nt || a) {
        if (i = lt, i !== null && (r = Nv(i, n), r !== 0 && r !== s.retryLane)) throw s.retryLane = r, Wi(t, r), ie(i, t, r), Wd;
        dl(), e = hp(t, e, n);
      } else t = s.treeContext, mt = Oe(r.nextSibling), Yt = e, W = true, Wn = null, Ce = false, t !== null && o0(e, t), e = Do(e, i), e.flags |= 4096;
      return e;
    }
    return t = bn(t.child, {
      mode: i.mode,
      children: i.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function No(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(M(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function cf(t, e, n, i, a) {
    return Xi(e), n = kd(t, e, n, i, void 0, a), i = Yd(), t !== null && !Nt ? (Gd(t, e, a), An(t, e, a)) : (W && i && zd(e), e.flags |= 1, Ht(t, e, n, a), e.child);
  }
  function mp(t, e, n, i, a, s) {
    return Xi(e), e.updateQueue = null, n = y0(e, i, n, a), g0(t), i = Yd(), t !== null && !Nt ? (Gd(t, e, s), An(t, e, s)) : (W && i && zd(e), e.flags |= 1, Ht(t, e, n, s), e.child);
  }
  function pp(t, e, n, i, a) {
    if (Xi(e), e.stateNode === null) {
      var s = Ta, r = n.contextType;
      typeof r == "object" && r !== null && (s = Gt(r)), s = new n(i, s), e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = lf, e.stateNode = s, s._reactInternals = e, s = e.stateNode, s.props = i, s.state = e.memoizedState, s.refs = {}, Ud(e), r = n.contextType, s.context = typeof r == "object" && r !== null ? Gt(r) : Ta, s.state = e.memoizedState, r = n.getDerivedStateFromProps, typeof r == "function" && (Pu(e, n, r, i), s.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (r = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), r !== s.state && lf.enqueueReplaceState(s, s.state, null), Xs(e, i, s, a), qs(), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = true;
    } else if (t === null) {
      s = e.stateNode;
      var o = e.memoizedProps, l = Ki(n, o);
      s.props = l;
      var u = s.context, c = n.contextType;
      r = Ta, typeof c == "object" && c !== null && (r = Gt(c));
      var f = n.getDerivedStateFromProps;
      c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o || u !== r) && lp(e, s, i, r), Hn = false;
      var h = e.memoizedState;
      s.state = h, Xs(e, i, s, a), qs(), u = e.memoizedState, o || h !== u || Hn ? (typeof f == "function" && (Pu(e, n, f, i), u = e.memoizedState), (l = Hn || op(e, n, l, i, h, u, r)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = u), s.props = i, s.state = u, s.context = r, i = l) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = false);
    } else {
      s = e.stateNode, tf(t, e), r = e.memoizedProps, c = Ki(n, r), s.props = c, f = e.pendingProps, h = s.context, u = n.contextType, l = Ta, typeof u == "object" && u !== null && (l = Gt(u)), o = n.getDerivedStateFromProps, (u = typeof o == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (r !== f || h !== l) && lp(e, s, i, l), Hn = false, h = e.memoizedState, s.state = h, Xs(e, i, s, a), qs();
      var d = e.memoizedState;
      r !== f || h !== d || Hn || t !== null && t.dependencies !== null && el(t.dependencies) ? (typeof o == "function" && (Pu(e, n, o, i), d = e.memoizedState), (c = Hn || op(e, n, c, i, h, d, l) || t !== null && t.dependencies !== null && el(t.dependencies)) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, d, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, d, l)), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || r === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = d), s.props = i, s.state = d, s.context = l, i = c) : (typeof s.componentDidUpdate != "function" || r === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), i = false);
    }
    return s = i, No(t, e), i = (e.flags & 128) !== 0, s || i ? (s = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : s.render(), e.flags |= 1, t !== null && i ? (e.child = Qi(e, t.child, null, a), e.child = Qi(e, null, n, a)) : Ht(t, e, n, a), e.memoizedState = s.state, t = e.child) : t = An(t, e, a), t;
  }
  function gp(t, e, n, i) {
    return qi(), e.flags |= 256, Ht(t, e, n, i), e.child;
  }
  var Hu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ku(t) {
    return {
      baseLanes: t,
      cachePool: u0()
    };
  }
  function Yu(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= fe), t;
  }
  function eb(t, e, n) {
    var i = e.pendingProps, a = false, s = (e.flags & 128) !== 0, r;
    if ((r = s) || (r = t !== null && t.memoizedState === null ? false : (Et.current & 2) !== 0), r && (a = true, e.flags &= -129), r = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (W) {
        if (a ? Yn(e) : Gn(), (t = mt) ? (t = Qb(t, Ce), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: li !== null ? {
            id: Ke,
            overflow: Ze
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = s0(t), n.return = e, e.child = n, Yt = e, mt = null)) : t = null, t === null) throw ui(e);
        return Ef(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var o = i.children;
      return i = i.fallback, a ? (Gn(), a = e.mode, o = ll({
        mode: "hidden",
        children: o
      }, a), i = Pi(i, a, n, null), o.return = e, i.return = e, o.sibling = i, e.child = o, i = e.child, i.memoizedState = ku(n), i.childLanes = Yu(t, r, n), e.memoizedState = Hu, _s(null, i)) : (Yn(e), ff(e, o));
    }
    var l = t.memoizedState;
    if (l !== null && (o = l.dehydrated, o !== null)) {
      if (s) e.flags & 256 ? (Yn(e), e.flags &= -257, e = Gu(t, e, n)) : e.memoizedState !== null ? (Gn(), e.child = t.child, e.flags |= 128, e = null) : (Gn(), o = i.fallback, a = e.mode, i = ll({
        mode: "visible",
        children: i.children
      }, a), o = Pi(o, a, n, null), o.flags |= 2, i.return = e, o.return = e, i.sibling = o, e.child = i, Qi(e, t.child, null, n), i = e.child, i.memoizedState = ku(n), i.childLanes = Yu(t, r, n), e.memoizedState = Hu, e = _s(null, i));
      else if (Yn(e), Ef(o)) {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
        r = u, i = Error(M(419)), i.stack = "", i.digest = r, lr({
          value: i,
          source: null,
          stack: null
        }), e = Gu(t, e, n);
      } else if (Nt || rs(t, e, n, false), r = (n & t.childLanes) !== 0, Nt || r) {
        if (r = lt, r !== null && (i = Nv(r, n), i !== 0 && i !== l.retryLane)) throw l.retryLane = i, Wi(t, i), ie(r, t, i), Wd;
        Tf(o) || dl(), e = Gu(t, e, n);
      } else Tf(o) ? (e.flags |= 192, e.child = t.child, e = null) : (t = l.treeContext, mt = Oe(o.nextSibling), Yt = e, W = true, Wn = null, Ce = false, t !== null && o0(e, t), e = ff(e, i.children), e.flags |= 4096);
      return e;
    }
    return a ? (Gn(), o = i.fallback, a = e.mode, l = t.child, u = l.sibling, i = bn(l, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = l.subtreeFlags & 65011712, u !== null ? o = bn(u, o) : (o = Pi(o, a, n, null), o.flags |= 2), o.return = e, i.return = e, i.sibling = o, e.child = i, _s(null, i), i = e.child, o = t.child.memoizedState, o === null ? o = ku(n) : (a = o.cachePool, a !== null ? (l = Dt._currentValue, a = a.parent !== l ? {
      parent: l,
      pool: l
    } : a) : a = u0(), o = {
      baseLanes: o.baseLanes | n,
      cachePool: a
    }), i.memoizedState = o, i.childLanes = Yu(t, r, n), e.memoizedState = Hu, _s(t.child, i)) : (Yn(e), n = t.child, t = n.sibling, n = bn(n, {
      mode: "visible",
      children: i.children
    }), n.return = e, n.sibling = null, t !== null && (r = e.deletions, r === null ? (e.deletions = [
      t
    ], e.flags |= 16) : r.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function ff(t, e) {
    return e = ll({
      mode: "visible",
      children: e
    }, t.mode), e.return = t, t.child = e;
  }
  function ll(t, e) {
    return t = ce(22, t, null, e), t.lanes = 0, t;
  }
  function Gu(t, e, n) {
    return Qi(e, t.child, null, n), t = ff(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function yp(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), Ic(t.return, e, n);
  }
  function qu(t, e, n, i, a, s) {
    var r = t.memoizedState;
    r === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: n,
      tailMode: a,
      treeForkCount: s
    } : (r.isBackwards = e, r.rendering = null, r.renderingStartTime = 0, r.last = i, r.tail = n, r.tailMode = a, r.treeForkCount = s);
  }
  function nb(t, e, n) {
    var i = e.pendingProps, a = i.revealOrder, s = i.tail;
    i = i.children;
    var r = Et.current, o = (r & 2) !== 0;
    if (o ? (r = r & 1 | 2, e.flags |= 128) : r &= 1, ut(Et, r), Ht(t, e, i, n), i = W ? or : 0, !o && t !== null && t.flags & 128) t: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && yp(t, n, e);
      else if (t.tag === 19) yp(t, n, e);
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
        for (n = e.child, a = null; n !== null; ) t = n.alternate, t !== null && al(t) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = e.child, e.child = null) : (a = n.sibling, n.sibling = null), qu(e, false, a, n, s, i);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, a = e.child, e.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && al(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = n, n = a, a = t;
        }
        qu(e, true, n, null, s, i);
        break;
      case "together":
        qu(e, false, null, null, void 0, i);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function An(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), fi |= e.lanes, !(n & e.childLanes)) if (t !== null) {
      if (rs(t, e, n, false), (n & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(M(153));
    if (e.child !== null) {
      for (t = e.child, n = bn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = bn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function th(t, e) {
    return t.lanes & e ? true : (t = t.dependencies, !!(t !== null && el(t)));
  }
  function OE(t, e, n) {
    switch (e.tag) {
      case 3:
        Ko(e, e.stateNode.containerInfo), kn(e, Dt, t.memoizedState.cache), qi();
        break;
      case 27:
      case 5:
        Uc(e);
        break;
      case 4:
        Ko(e, e.stateNode.containerInfo);
        break;
      case 10:
        kn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return e.flags |= 128, af(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null) return i.dehydrated !== null ? (Yn(e), e.flags |= 128, null) : n & e.child.childLanes ? eb(t, e, n) : (Yn(e), t = An(t, e, n), t !== null ? t.sibling : null);
        Yn(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (i = (n & e.childLanes) !== 0, i || (rs(t, e, n, false), i = (n & e.childLanes) !== 0), a) {
          if (i) return nb(t, e, n);
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ut(Et, Et.current), i) break;
        return null;
      case 22:
        return e.lanes = 0, tb(t, e, n, e.pendingProps);
      case 24:
        kn(e, Dt, t.memoizedState.cache);
    }
    return An(t, e, n);
  }
  function ib(t, e, n) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) Nt = true;
    else {
      if (!th(t, n) && !(e.flags & 128)) return Nt = false, OE(t, e, n);
      Nt = !!(t.flags & 131072);
    }
    else Nt = false, W && e.flags & 1048576 && r0(e, or, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (t = zi(e.elementType), e.type = t, typeof t == "function") jd(t) ? (i = Ki(t, i), e.tag = 1, e = pp(null, e, t, i, n)) : (e.tag = 0, e = cf(null, e, t, i, n));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === vd) {
                e.tag = 11, e = cp(null, e, t, i, n);
                break t;
              } else if (a === bd) {
                e.tag = 14, e = fp(null, e, t, i, n);
                break t;
              }
            }
            throw e = Vc(t) || t, Error(M(306, e, ""));
          }
        }
        return e;
      case 0:
        return cf(t, e, e.type, e.pendingProps, n);
      case 1:
        return i = e.type, a = Ki(i, e.pendingProps), pp(t, e, i, a, n);
      case 3:
        t: {
          if (Ko(e, e.stateNode.containerInfo), t === null) throw Error(M(387));
          i = e.pendingProps;
          var s = e.memoizedState;
          a = s.element, tf(t, e), Xs(e, i, null, n);
          var r = e.memoizedState;
          if (i = r.cache, kn(e, Dt, i), i !== s.cache && Jc(e, [
            Dt
          ], n, true), qs(), i = r.element, s.isDehydrated) if (s = {
            element: i,
            isDehydrated: false,
            cache: r.cache
          }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
            e = gp(t, e, i, n);
            break t;
          } else if (i !== a) {
            a = Ae(Error(M(424)), e), lr(a), e = gp(t, e, i, n);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (mt = Oe(t.firstChild), Yt = e, W = true, Wn = null, Ce = true, n = d0(e, null, i, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          }
          else {
            if (qi(), i === a) {
              e = An(t, e, n);
              break t;
            }
            Ht(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return No(t, e), t === null ? (n = Bp(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : W || (n = e.type, t = e.pendingProps, i = gl(Jn.current).createElement(n), i[kt] = e, i[ae] = t, qt(i, n, t), Bt(i), e.stateNode = i) : e.memoizedState = Bp(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Uc(e), t === null && W && (i = e.stateNode = Fb(e.type, e.pendingProps, Jn.current), Yt = e, Ce = true, a = mt, bi(e.type) ? (Af = a, mt = Oe(i.firstChild)) : mt = a), Ht(t, e, e.pendingProps.children, n), No(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && W && ((a = i = mt) && (i = sA(i, e.type, e.pendingProps, Ce), i !== null ? (e.stateNode = i, Yt = e, mt = Oe(i.firstChild), Ce = false, a = true) : a = false), a || ui(e)), Uc(e), a = e.type, s = e.pendingProps, r = t !== null ? t.memoizedProps : null, i = s.children, Sf(a, s) ? i = null : r !== null && Sf(a, r) && (e.flags |= 32), e.memoizedState !== null && (a = kd(t, e, xE, null, null, n), mr._currentValue = a), No(t, e), Ht(t, e, i, n), e.child;
      case 6:
        return t === null && W && ((t = n = mt) && (n = rA(n, e.pendingProps, Ce), n !== null ? (e.stateNode = n, Yt = e, mt = null, t = true) : t = false), t || ui(e)), null;
      case 13:
        return eb(t, e, n);
      case 4:
        return Ko(e, e.stateNode.containerInfo), i = e.pendingProps, t === null ? e.child = Qi(e, null, i, n) : Ht(t, e, i, n), e.child;
      case 11:
        return cp(t, e, e.type, e.pendingProps, n);
      case 7:
        return Ht(t, e, e.pendingProps, n), e.child;
      case 8:
        return Ht(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Ht(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return i = e.pendingProps, kn(e, e.type, i.value), Ht(t, e, i.children, n), e.child;
      case 9:
        return a = e.type._context, i = e.pendingProps.children, Xi(e), a = Gt(a), i = i(a), e.flags |= 1, Ht(t, e, i, n), e.child;
      case 14:
        return fp(t, e, e.type, e.pendingProps, n);
      case 15:
        return W0(t, e, e.type, e.pendingProps, n);
      case 19:
        return nb(t, e, n);
      case 31:
        return RE(t, e, n);
      case 22:
        return tb(t, e, n, e.pendingProps);
      case 24:
        return Xi(e), i = Gt(Dt), t === null ? (a = Vd(), a === null && (a = lt, s = Ld(), a.pooledCache = s, s.refCount++, s !== null && (a.pooledCacheLanes |= n), a = s), e.memoizedState = {
          parent: i,
          cache: a
        }, Ud(e), kn(e, Dt, a)) : (t.lanes & n && (tf(t, e), Xs(e, null, null, n), qs()), a = t.memoizedState, s = e.memoizedState, a.parent !== i ? (a = {
          parent: i,
          cache: i
        }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), kn(e, Dt, i)) : (i = s.cache, kn(e, Dt, i), i !== a.cache && Jc(e, [
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
  function Xu(t, e, n, i, a) {
    if ((e = (t.mode & 32) !== 0) && (e = false), e) {
      if (t.flags |= 16777216, (a & 335544128) === a) if (t.stateNode.complete) t.flags |= 8192;
      else if (Mb()) t.flags |= 8192;
      else throw ki = nl, Bd;
    } else t.flags &= -16777217;
  }
  function vp(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
    else if (t.flags |= 16777216, !$b(e)) if (Mb()) t.flags |= 8192;
    else throw ki = nl, Bd;
  }
  function ao(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Rv() : 536870912, t.lanes |= e, Ka |= e);
  }
  function As(t, e) {
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
  function DE(t, e, n) {
    var i = e.pendingProps;
    switch (_d(e), e.tag) {
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
        return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), xn(Dt), Ya(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (oa(e) ? un(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Vu())), dt(e), null;
      case 26:
        var a = e.type, s = e.memoizedState;
        return t === null ? (un(e), s !== null ? (dt(e), vp(e, s)) : (dt(e), Xu(e, a, null, i, n))) : s ? s !== t.memoizedState ? (un(e), dt(e), vp(e, s)) : (dt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && un(e), dt(e), Xu(e, a, t, i, n)), null;
      case 27:
        if (Zo(e), n = Jn.current, a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(M(166));
            return dt(e), null;
          }
          t = Je.current, oa(e) ? Fm(e) : (t = Fb(a, i, n), e.stateNode = t, un(e));
        }
        return dt(e), null;
      case 5:
        if (Zo(e), a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(M(166));
            return dt(e), null;
          }
          if (s = Je.current, oa(e)) Fm(e);
          else {
            var r = gl(Jn.current);
            switch (s) {
              case 1:
                s = r.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                s = r.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    s = r.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    s = r.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                    break;
                  case "script":
                    s = r.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(s.firstChild);
                    break;
                  case "select":
                    s = typeof i.is == "string" ? r.createElement("select", {
                      is: i.is
                    }) : r.createElement("select"), i.multiple ? s.multiple = true : i.size && (s.size = i.size);
                    break;
                  default:
                    s = typeof i.is == "string" ? r.createElement(a, {
                      is: i.is
                    }) : r.createElement(a);
                }
            }
            s[kt] = e, s[ae] = i;
            t: for (r = e.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6) s.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === e) break t;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === e) break t;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
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
        return dt(e), Xu(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(M(166));
          if (t = Jn.current, oa(e)) {
            if (t = e.stateNode, n = e.memoizedProps, i = null, a = Yt, a !== null) switch (a.tag) {
              case 27:
              case 5:
                i = a.memoizedProps;
            }
            t[kt] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === true || Gb(t.nodeValue, n)), t || ui(e, true);
          } else t = gl(t).createTextNode(i), t[kt] = e, e.stateNode = t;
        }
        return dt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (i = oa(e), n !== null) {
            if (t === null) {
              if (!i) throw Error(M(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(M(557));
              t[kt] = e;
            } else qi(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            dt(e), t = false;
          } else n = Vu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = true;
          if (!t) return e.flags & 256 ? (le(e), e) : (le(e), null);
          if (e.flags & 128) throw Error(M(558));
        }
        return dt(e), null;
      case 13:
        if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = oa(e), i !== null && i.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(M(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(M(317));
              a[kt] = e;
            } else qi(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            dt(e), a = false;
          } else a = Vu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = true;
          if (!a) return e.flags & 256 ? (le(e), e) : (le(e), null);
        }
        return le(e), e.flags & 128 ? (e.lanes = n, e) : (n = i !== null, t = t !== null && t.memoizedState !== null, n && (i = e.child, a = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (a = i.alternate.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== a && (i.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), ao(e, e.updateQueue), dt(e), null);
      case 4:
        return Ya(), t === null && oh(e.stateNode.containerInfo), dt(e), null;
      case 10:
        return xn(e.type), dt(e), null;
      case 19:
        if (Ut(Et), i = e.memoizedState, i === null) return dt(e), null;
        if (a = (e.flags & 128) !== 0, s = i.rendering, s === null) if (a) As(i, false);
        else {
          if (wt !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
            if (s = al(t), s !== null) {
              for (e.flags |= 128, As(i, false), t = s.updateQueue, e.updateQueue = t, ao(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; ) a0(n, t), n = n.sibling;
              return ut(Et, Et.current & 1 | 2), W && mn(e, i.treeForkCount), e.child;
            }
            t = t.sibling;
          }
          i.tail !== null && de() > cl && (e.flags |= 128, a = true, As(i, false), e.lanes = 4194304);
        }
        else {
          if (!a) if (t = al(s), t !== null) {
            if (e.flags |= 128, a = true, t = t.updateQueue, e.updateQueue = t, ao(e, t), As(i, true), i.tail === null && i.tailMode === "hidden" && !s.alternate && !W) return dt(e), null;
          } else 2 * de() - i.renderingStartTime > cl && n !== 536870912 && (e.flags |= 128, a = true, As(i, false), e.lanes = 4194304);
          i.isBackwards ? (s.sibling = e.child, e.child = s) : (t = i.last, t !== null ? t.sibling = s : e.child = s, i.last = s);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = de(), t.sibling = null, n = Et.current, ut(Et, a ? n & 1 | 2 : n & 1), W && mn(e, i.treeForkCount), t) : (dt(e), null);
      case 22:
      case 23:
        return le(e), Pd(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? n & 536870912 && !(e.flags & 128) && (dt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : dt(e), n = e.updateQueue, n !== null && ao(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && Ut(Hi), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), xn(Dt), dt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(M(156, e.tag));
  }
  function NE(t, e) {
    switch (_d(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return xn(Dt), Ya(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Zo(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (le(e), e.alternate === null) throw Error(M(340));
          qi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (le(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(M(340));
          qi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Ut(Et), null;
      case 4:
        return Ya(), null;
      case 10:
        return xn(e.type), null;
      case 22:
      case 23:
        return le(e), Pd(), t !== null && Ut(Hi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return xn(Dt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ab(t, e) {
    switch (_d(e), e.tag) {
      case 3:
        xn(Dt), Ya();
        break;
      case 26:
      case 27:
      case 5:
        Zo(e);
        break;
      case 4:
        Ya();
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
        le(e), Pd(), t !== null && Ut(Hi);
        break;
      case 24:
        xn(Dt);
    }
  }
  function Br(t, e) {
    try {
      var n = e.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var a = i.next;
        n = a;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var s = n.create, r = n.inst;
            i = s(), r.destroy = i;
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (o) {
      it(e, e.return, o);
    }
  }
  function ci(t, e, n) {
    try {
      var i = e.updateQueue, a = i !== null ? i.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        i = s;
        do {
          if ((i.tag & t) === t) {
            var r = i.inst, o = r.destroy;
            if (o !== void 0) {
              r.destroy = void 0, a = e;
              var l = n, u = o;
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
  function sb(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        m0(e, n);
      } catch (i) {
        it(t, t.return, i);
      }
    }
  }
  function rb(t, e, n) {
    n.props = Ki(t.type, t.memoizedProps), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      it(t, e, i);
    }
  }
  function Fs(t, e) {
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
  function ob(t) {
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
  function Qu(t, e, n) {
    try {
      var i = t.stateNode;
      WE(i, t.type, n, e), i[ae] = e;
    } catch (a) {
      it(t, t.return, a);
    }
  }
  function lb(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && bi(t.type) || t.tag === 4;
  }
  function Fu(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || lb(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && bi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function df(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = yn));
    else if (i !== 4 && (i === 27 && bi(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null)) for (df(t, e, n), t = t.sibling; t !== null; ) df(t, e, n), t = t.sibling;
  }
  function ul(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && (i === 27 && bi(t.type) && (n = t.stateNode), t = t.child, t !== null)) for (ul(t, e, n), t = t.sibling; t !== null; ) ul(t, e, n), t = t.sibling;
  }
  function ub(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var i = t.type, a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
      qt(e, i, n), e[kt] = t, e[ae] = n;
    } catch (s) {
      it(t, t.return, s);
    }
  }
  var pn = false, Ot = false, Ku = false, bp = typeof WeakSet == "function" ? WeakSet : Set, Vt = null;
  function jE(t, e) {
    if (t = t.containerInfo, bf = xl, t = $v(t), Od(t)) {
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
          var r = 0, o = -1, l = -1, u = 0, c = 0, f = t, h = null;
          e: for (; ; ) {
            for (var d; f !== n || a !== 0 && f.nodeType !== 3 || (o = r + a), f !== s || i !== 0 && f.nodeType !== 3 || (l = r + i), f.nodeType === 3 && (r += f.nodeValue.length), (d = f.firstChild) !== null; ) h = f, f = d;
            for (; ; ) {
              if (f === t) break e;
              if (h === n && ++u === a && (o = r), h === s && ++c === i && (l = r), (d = f.nextSibling) !== null) break;
              f = h, h = f.parentNode;
            }
            f = d;
          }
          n = o === -1 || l === -1 ? null : {
            start: o,
            end: l
          };
        } else n = null;
      }
      n = n || {
        start: 0,
        end: 0
      };
    } else n = null;
    for (xf = {
      focusedElem: t,
      selectionRange: n
    }, xl = false, Vt = e; Vt !== null; ) if (e = Vt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Vt = t;
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
            if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) wf(t);
            else if (n === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                wf(t);
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
  function cb(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        fn(t, n), i & 4 && Br(5, n);
        break;
      case 1:
        if (fn(t, n), i & 4) if (t = n.stateNode, e === null) try {
          t.componentDidMount();
        } catch (r) {
          it(n, n.return, r);
        }
        else {
          var a = Ki(n.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (r) {
            it(n, n.return, r);
          }
        }
        i & 64 && sb(n), i & 512 && Fs(n, n.return);
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
            m0(t, e);
          } catch (r) {
            it(n, n.return, r);
          }
        }
        break;
      case 27:
        e === null && i & 4 && ub(n);
      case 26:
      case 5:
        fn(t, n), e === null && i & 4 && ob(n), i & 512 && Fs(n, n.return);
        break;
      case 12:
        fn(t, n);
        break;
      case 31:
        fn(t, n), i & 4 && hb(t, n);
        break;
      case 13:
        fn(t, n), i & 4 && mb(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = kE.bind(null, n), oA(t, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || pn, !i) {
          e = e !== null && e.memoizedState !== null || Ot, a = pn;
          var s = Ot;
          pn = i, (Ot = e) && !s ? hn(t, n, (n.subtreeFlags & 8772) !== 0) : fn(t, n), pn = a, Ot = s;
        }
        break;
      case 30:
        break;
      default:
        fn(t, n);
    }
  }
  function fb(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, fb(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Td(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var vt = null, te = false;
  function cn(t, e, n) {
    for (n = n.child; n !== null; ) db(t, e, n), n = n.sibling;
  }
  function db(t, e, n) {
    if (he && typeof he.onCommitFiberUnmount == "function") try {
      he.onCommitFiberUnmount(Dr, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        Ot || $e(n, e), cn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ot || $e(n, e);
        var i = vt, a = te;
        bi(n.type) && (vt = n.stateNode, te = false), cn(t, e, n), Is(n.stateNode), vt = i, te = a;
        break;
      case 5:
        Ot || $e(n, e);
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
        vt !== null && (te ? (t = vt, jp(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), Ja(t)) : jp(vt, n.stateNode));
        break;
      case 4:
        i = vt, a = te, vt = n.stateNode.containerInfo, te = true, cn(t, e, n), vt = i, te = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ci(2, n, e), Ot || ci(4, n, e), cn(t, e, n);
        break;
      case 1:
        Ot || ($e(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && rb(n, e, i)), cn(t, e, n);
        break;
      case 21:
        cn(t, e, n);
        break;
      case 22:
        Ot = (i = Ot) || n.memoizedState !== null, cn(t, e, n), Ot = i;
        break;
      default:
        cn(t, e, n);
    }
  }
  function hb(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ja(t);
      } catch (n) {
        it(e, e.return, n);
      }
    }
  }
  function mb(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Ja(t);
    } catch (n) {
      it(e, e.return, n);
    }
  }
  function zE(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new bp()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new bp()), e;
      default:
        throw Error(M(435, t.tag));
    }
  }
  function so(t, e) {
    var n = zE(t);
    e.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var a = YE.bind(null, t, i);
        i.then(a, a);
      }
    });
  }
  function Jt(t, e) {
    var n = e.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var a = n[i], s = t, r = e, o = r;
      t: for (; o !== null; ) {
        switch (o.tag) {
          case 27:
            if (bi(o.type)) {
              vt = o.stateNode, te = false;
              break t;
            }
            break;
          case 5:
            vt = o.stateNode, te = false;
            break t;
          case 3:
          case 4:
            vt = o.stateNode.containerInfo, te = true;
            break t;
        }
        o = o.return;
      }
      if (vt === null) throw Error(M(160));
      db(s, r, a), vt = null, te = false, s = a.alternate, s !== null && (s.return = null), a.return = null;
    }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) pb(e, t), e = e.sibling;
  }
  var ke = null;
  function pb(t, e) {
    var n = t.alternate, i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jt(e, t), Wt(t), i & 4 && (ci(3, t, t.return), Br(3, t), ci(5, t, t.return));
        break;
      case 1:
        Jt(e, t), Wt(t), i & 512 && (Ot || n === null || $e(n, n.return)), i & 64 && pn && (t = t.updateQueue, t !== null && (i = t.callbacks, i !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
      case 26:
        var a = ke;
        if (Jt(e, t), Wt(t), i & 512 && (Ot || n === null || $e(n, n.return)), i & 4) {
          var s = n !== null ? n.memoizedState : null;
          if (i = t.memoizedState, n === null) if (i === null) if (t.stateNode === null) {
            t: {
              i = t.type, n = t.memoizedProps, a = a.ownerDocument || a;
              e: switch (i) {
                case "title":
                  s = a.getElementsByTagName("title")[0], (!s || s[zr] || s[kt] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = a.createElement(i), a.head.insertBefore(s, a.querySelector("head > title"))), qt(s, i, n), s[kt] = t, Bt(s), i = s;
                  break t;
                case "link":
                  var r = Pp("link", "href", a).get(i + (n.href || ""));
                  if (r) {
                    for (var o = 0; o < r.length; o++) if (s = r[o], s.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && s.getAttribute("rel") === (n.rel == null ? null : n.rel) && s.getAttribute("title") === (n.title == null ? null : n.title) && s.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      r.splice(o, 1);
                      break e;
                    }
                  }
                  s = a.createElement(i), qt(s, i, n), a.head.appendChild(s);
                  break;
                case "meta":
                  if (r = Pp("meta", "content", a).get(i + (n.content || ""))) {
                    for (o = 0; o < r.length; o++) if (s = r[o], s.getAttribute("content") === (n.content == null ? null : "" + n.content) && s.getAttribute("name") === (n.name == null ? null : n.name) && s.getAttribute("property") === (n.property == null ? null : n.property) && s.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && s.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                      r.splice(o, 1);
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
          } else Hp(a, t.type, t.stateNode);
          else t.stateNode = Up(a, i, t.memoizedProps);
          else s !== i ? (s === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : s.count--, i === null ? Hp(a, t.type, t.stateNode) : Up(a, i, t.memoizedProps)) : i === null && t.stateNode !== null && Qu(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Jt(e, t), Wt(t), i & 512 && (Ot || n === null || $e(n, n.return)), n !== null && i & 4 && Qu(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (Jt(e, t), Wt(t), i & 512 && (Ot || n === null || $e(n, n.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            qa(a, "");
          } catch (v) {
            it(t, t.return, v);
          }
        }
        i & 4 && t.stateNode != null && (a = t.memoizedProps, Qu(t, a, n !== null ? n.memoizedProps : a)), i & 1024 && (Ku = true);
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
        if (_o = null, a = ke, ke = yl(e.containerInfo), Jt(e, t), ke = a, Wt(t), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ja(e.containerInfo);
        } catch (v) {
          it(t, t.return, v);
        }
        Ku && (Ku = false, gb(t));
        break;
      case 4:
        i = ke, ke = yl(t.stateNode.containerInfo), Jt(e, t), Wt(t), ke = i;
        break;
      case 12:
        Jt(e, t), Wt(t);
        break;
      case 31:
        Jt(e, t), Wt(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, so(t, i)));
        break;
      case 13:
        Jt(e, t), Wt(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Jl = de()), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, so(t, i)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var l = n !== null && n.memoizedState !== null, u = pn, c = Ot;
        if (pn = u || a, Ot = c || l, Jt(e, t), Ot = c, pn = u, Wt(t), i & 8192) t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (n === null || l || pn || Ot || _i(t)), n = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (n === null) {
              l = n = e;
              try {
                if (s = l.stateNode, a) r = s.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                else {
                  o = l.stateNode;
                  var f = l.memoizedProps.style, h = f != null && f.hasOwnProperty("display") ? f.display : null;
                  o.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
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
                a ? zp(d, true) : zp(l.stateNode, false);
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
        i & 4 && (i = t.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, so(t, n))));
        break;
      case 19:
        Jt(e, t), Wt(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, so(t, i)));
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
          if (lb(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(M(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, s = Fu(t);
            ul(t, s, a);
            break;
          case 5:
            var r = n.stateNode;
            n.flags & 32 && (qa(r, ""), n.flags &= -33);
            var o = Fu(t);
            ul(t, o, r);
            break;
          case 3:
          case 4:
            var l = n.stateNode.containerInfo, u = Fu(t);
            df(t, u, l);
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
  function gb(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      gb(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function fn(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) cb(t, e.alternate, e), e = e.sibling;
  }
  function _i(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ci(4, e, e.return), _i(e);
          break;
        case 1:
          $e(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && rb(e, e.return, n), _i(e);
          break;
        case 27:
          Is(e.stateNode);
        case 26:
        case 5:
          $e(e, e.return), _i(e);
          break;
        case 22:
          e.memoizedState === null && _i(e);
          break;
        case 30:
          _i(e);
          break;
        default:
          _i(e);
      }
      t = t.sibling;
    }
  }
  function hn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate, a = t, s = e, r = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          hn(a, s, n), Br(4, s);
          break;
        case 1:
          if (hn(a, s, n), i = s, a = i.stateNode, typeof a.componentDidMount == "function") try {
            a.componentDidMount();
          } catch (u) {
            it(i, i.return, u);
          }
          if (i = s, a = i.updateQueue, a !== null) {
            var o = i.stateNode;
            try {
              var l = a.shared.hiddenCallbacks;
              if (l !== null) for (a.shared.hiddenCallbacks = null, a = 0; a < l.length; a++) h0(l[a], o);
            } catch (u) {
              it(i, i.return, u);
            }
          }
          n && r & 64 && sb(s), Fs(s, s.return);
          break;
        case 27:
          ub(s);
        case 26:
        case 5:
          hn(a, s, n), n && i === null && r & 4 && ob(s), Fs(s, s.return);
          break;
        case 12:
          hn(a, s, n);
          break;
        case 31:
          hn(a, s, n), n && r & 4 && hb(a, s);
          break;
        case 13:
          hn(a, s, n), n && r & 4 && mb(a, s);
          break;
        case 22:
          s.memoizedState === null && hn(a, s, n), Fs(s, s.return);
          break;
        case 30:
          break;
        default:
          hn(a, s, n);
      }
      e = e.sibling;
    }
  }
  function eh(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Lr(n));
  }
  function nh(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Lr(t));
  }
  function Ve(t, e, n, i) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) yb(t, e, n, i), e = e.sibling;
  }
  function yb(t, e, n, i) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ve(t, e, n, i), a & 2048 && Br(9, e);
        break;
      case 1:
        Ve(t, e, n, i);
        break;
      case 3:
        Ve(t, e, n, i), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Lr(t)));
        break;
      case 12:
        if (a & 2048) {
          Ve(t, e, n, i), t = e.stateNode;
          try {
            var s = e.memoizedProps, r = s.id, o = s.onPostCommit;
            typeof o == "function" && o(r, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
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
        s = e.stateNode, r = e.alternate, e.memoizedState !== null ? s._visibility & 2 ? Ve(t, e, n, i) : Ks(t, e) : s._visibility & 2 ? Ve(t, e, n, i) : (s._visibility |= 2, fa(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || false)), a & 2048 && eh(r, e);
        break;
      case 24:
        Ve(t, e, n, i), a & 2048 && nh(e.alternate, e);
        break;
      default:
        Ve(t, e, n, i);
    }
  }
  function fa(t, e, n, i, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
      var s = t, r = e, o = n, l = i, u = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          fa(s, r, o, l, a), Br(8, r);
          break;
        case 23:
          break;
        case 22:
          var c = r.stateNode;
          r.memoizedState !== null ? c._visibility & 2 ? fa(s, r, o, l, a) : Ks(s, r) : (c._visibility |= 2, fa(s, r, o, l, a)), a && u & 2048 && eh(r.alternate, r);
          break;
        case 24:
          fa(s, r, o, l, a), a && u & 2048 && nh(r.alternate, r);
          break;
        default:
          fa(s, r, o, l, a);
      }
      e = e.sibling;
    }
  }
  function Ks(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var n = t, i = e, a = i.flags;
      switch (i.tag) {
        case 22:
          Ks(n, i), a & 2048 && eh(i.alternate, i);
          break;
        case 24:
          Ks(n, i), a & 2048 && nh(i.alternate, i);
          break;
        default:
          Ks(n, i);
      }
      e = e.sibling;
    }
  }
  var Ls = 8192;
  function la(t, e, n) {
    if (t.subtreeFlags & Ls) for (t = t.child; t !== null; ) vb(t, e, n), t = t.sibling;
  }
  function vb(t, e, n) {
    switch (t.tag) {
      case 26:
        la(t, e, n), t.flags & Ls && t.memoizedState !== null && bA(n, ke, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        la(t, e, n);
        break;
      case 3:
      case 4:
        var i = ke;
        ke = yl(t.stateNode.containerInfo), la(t, e, n), ke = i;
        break;
      case 22:
        t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = Ls, Ls = 16777216, la(t, e, n), Ls = i) : la(t, e, n));
        break;
      default:
        la(t, e, n);
    }
  }
  function bb(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Cs(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var i = e[n];
        Vt = i, Sb(i, t);
      }
      bb(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) xb(t), t = t.sibling;
  }
  function xb(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Cs(t), t.flags & 2048 && ci(9, t, t.return);
        break;
      case 3:
        Cs(t);
        break;
      case 12:
        Cs(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, jo(t)) : Cs(t);
        break;
      default:
        Cs(t);
    }
  }
  function jo(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var i = e[n];
        Vt = i, Sb(i, t);
      }
      bb(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          ci(8, e, e.return), jo(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, jo(e));
          break;
        default:
          jo(e);
      }
      t = t.sibling;
    }
  }
  function Sb(t, e) {
    for (; Vt !== null; ) {
      var n = Vt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ci(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Lr(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, Vt = i;
      else t: for (n = t; Vt !== null; ) {
        i = Vt;
        var a = i.sibling, s = i.return;
        if (fb(i), i === n) {
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
  var _E = {
    getCacheForType: function(t) {
      var e = Gt(Dt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return Gt(Dt).controller.signal;
    }
  }, LE = typeof WeakMap == "function" ? WeakMap : Map, tt = 0, lt = null, K = null, I = 0, nt = 0, oe = null, Fn = false, ls = false, ih = false, Cn = 0, wt = 0, fi = 0, Yi = 0, ah = 0, fe = 0, Ka = 0, Zs = null, ee = null, hf = false, Jl = 0, wb = 0, cl = 1 / 0, fl = null, ni = null, _t = 0, ii = null, Za = null, Sn = 0, mf = 0, pf = null, Tb = null, $s = 0, gf = null;
  function pe() {
    return tt & 2 && I !== 0 ? I & -I : H.T !== null ? rh() : jv();
  }
  function Eb() {
    if (fe === 0) if (!(I & 536870912) || W) {
      var t = Ir;
      Ir <<= 1, !(Ir & 3932160) && (Ir = 262144), fe = t;
    } else fe = 536870912;
    return t = ve.current, t !== null && (t.flags |= 32), fe;
  }
  function ie(t, e, n) {
    (t === lt && (nt === 2 || nt === 9) || t.cancelPendingCommit !== null) && ($a(t, 0), Kn(t, I, fe, false)), jr(t, n), (!(tt & 2) || t !== lt) && (t === lt && (!(tt & 2) && (Yi |= n), wt === 4 && Kn(t, I, fe, false)), sn(t));
  }
  function Ab(t, e, n) {
    if (tt & 6) throw Error(M(327));
    var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Nr(t, e), a = i ? UE(t, e) : Zu(t, e, true), s = i;
    do {
      if (a === 0) {
        ls && !i && Kn(t, e, 0, false);
        break;
      } else {
        if (n = t.current.alternate, s && !VE(n)) {
          a = Zu(t, e, false), s = false;
          continue;
        }
        if (a === 2) {
          if (s = e, t.errorRecoveryDisabledLanes & s) var r = 0;
          else r = t.pendingLanes & -536870913, r = r !== 0 ? r : r & 536870912 ? 536870912 : 0;
          if (r !== 0) {
            e = r;
            t: {
              var o = t;
              a = Zs;
              var l = o.current.memoizedState.isDehydrated;
              if (l && ($a(o, r).flags |= 256), r = Zu(o, r, false), r !== 2) {
                if (ih && !l) {
                  o.errorRecoveryDisabledLanes |= s, Yi |= s, a = 4;
                  break t;
                }
                s = ee, ee = a, s !== null && (ee === null ? ee = s : ee.push.apply(ee, s));
              }
              a = r;
            }
            if (s = false, a !== 2) continue;
          }
        }
        if (a === 1) {
          $a(t, 0), Kn(t, e, 0, true);
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
              Kn(i, e, fe, !Fn);
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
          if ((e & 62914560) === e && (a = Jl + 300 - de(), 10 < a)) {
            if (Kn(i, e, fe, !Fn), kl(i, 0, true) !== 0) break t;
            Sn = e, i.timeoutHandle = Xb(xp.bind(null, i, n, ee, fl, hf, e, fe, Yi, Ka, Fn, s, "Throttled", -0, 0), a);
            break t;
          }
          xp(i, n, ee, fl, hf, e, fe, Yi, Ka, Fn, s, null, -0, 0);
        }
      }
      break;
    } while (true);
    sn(t);
  }
  function xp(t, e, n, i, a, s, r, o, l, u, c, f, h, d) {
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
      }, vb(e, s, f);
      var v = (s & 62914560) === s ? Jl - de() : (s & 4194048) === s ? wb - de() : 0;
      if (v = xA(f, v), v !== null) {
        Sn = s, t.cancelPendingCommit = v(wp.bind(null, t, e, s, n, i, a, r, o, l, c, f, null, h, d)), Kn(t, s, r, !u);
        return;
      }
    }
    wp(t, e, s, n, i, a, r, o, l);
  }
  function VE(t) {
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
  function Kn(t, e, n, i) {
    e &= ~ah, e &= ~Yi, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var s = 31 - me(a), r = 1 << s;
      i[s] = -1, a &= ~r;
    }
    n !== 0 && Ov(t, n, e);
  }
  function Wl() {
    return tt & 6 ? true : (Ur(0), false);
  }
  function sh() {
    if (K !== null) {
      if (nt === 0) var t = K.return;
      else t = K, vn = ta = null, qd(t), Va = null, ur = 0, t = K;
      for (; t !== null; ) ab(t.alternate, t), t = t.return;
      K = null;
    }
  }
  function $a(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, nA(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Sn = 0, sh(), lt = t, K = n = bn(t.current, null), I = e, nt = 0, oe = null, Fn = false, ls = Nr(t, e), ih = false, Ka = fe = ah = Yi = fi = wt = 0, ee = Zs = null, hf = false, e & 8 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0) for (t = t.entanglements, i &= e; 0 < i; ) {
      var a = 31 - me(i), s = 1 << a;
      e |= t[a], i &= ~s;
    }
    return Cn = e, Xl(), n;
  }
  function Cb(t, e) {
    G = null, H.H = fr, e === os || e === Fl ? (e = Jm(), nt = 3) : e === Bd ? (e = Jm(), nt = 4) : nt = e === Wd ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, oe = e, K === null && (wt = 1, ol(t, Ae(e, t.current)));
  }
  function Mb() {
    var t = ve.current;
    return t === null ? true : (I & 4194048) === I ? Re === null : (I & 62914560) === I || I & 536870912 ? t === Re : false;
  }
  function Rb() {
    var t = H.H;
    return H.H = fr, t === null ? fr : t;
  }
  function Ob() {
    var t = H.A;
    return H.A = _E, t;
  }
  function dl() {
    wt = 4, Fn || (I & 4194048) !== I && ve.current !== null || (ls = true), !(fi & 134217727) && !(Yi & 134217727) || lt === null || Kn(lt, I, fe, false);
  }
  function Zu(t, e, n) {
    var i = tt;
    tt |= 2;
    var a = Rb(), s = Ob();
    (lt !== t || I !== e) && (fl = null, $a(t, e)), e = false;
    var r = wt;
    t: do
      try {
        if (nt !== 0 && K !== null) {
          var o = K, l = oe;
          switch (nt) {
            case 8:
              sh(), r = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ve.current === null && (e = true);
              var u = nt;
              if (nt = 0, oe = null, Ca(t, o, l, u), n && ls) {
                r = 0;
                break t;
              }
              break;
            default:
              u = nt, nt = 0, oe = null, Ca(t, o, l, u);
          }
        }
        BE(), r = wt;
        break;
      } catch (c) {
        Cb(t, c);
      }
    while (true);
    return e && t.shellSuspendCounter++, vn = ta = null, tt = i, H.H = a, H.A = s, K === null && (lt = null, I = 0, Xl()), r;
  }
  function BE() {
    for (; K !== null; ) Db(K);
  }
  function UE(t, e) {
    var n = tt;
    tt |= 2;
    var i = Rb(), a = Ob();
    lt !== t || I !== e ? (fl = null, cl = de() + 500, $a(t, e)) : ls = Nr(t, e);
    t: do
      try {
        if (nt !== 0 && K !== null) {
          e = K;
          var s = oe;
          e: switch (nt) {
            case 1:
              nt = 0, oe = null, Ca(t, e, s, 1);
              break;
            case 2:
            case 9:
              if (Im(s)) {
                nt = 0, oe = null, Sp(e);
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
              Im(s) ? (nt = 0, oe = null, Sp(e)) : (nt = 0, oe = null, Ca(t, e, s, 7));
              break;
            case 5:
              var r = null;
              switch (K.tag) {
                case 26:
                  r = K.memoizedState;
                case 5:
                case 27:
                  var o = K;
                  if (r ? $b(r) : o.stateNode.complete) {
                    nt = 0, oe = null;
                    var l = o.sibling;
                    if (l !== null) K = l;
                    else {
                      var u = o.return;
                      u !== null ? (K = u, tu(u)) : K = null;
                    }
                    break e;
                  }
              }
              nt = 0, oe = null, Ca(t, e, s, 5);
              break;
            case 6:
              nt = 0, oe = null, Ca(t, e, s, 6);
              break;
            case 8:
              sh(), wt = 6;
              break t;
            default:
              throw Error(M(462));
          }
        }
        PE();
        break;
      } catch (c) {
        Cb(t, c);
      }
    while (true);
    return vn = ta = null, H.H = i, H.A = a, tt = n, K !== null ? 0 : (lt = null, I = 0, Xl(), wt);
  }
  function PE() {
    for (; K !== null && !lT(); ) Db(K);
  }
  function Db(t) {
    var e = ib(t.alternate, t, Cn);
    t.memoizedProps = t.pendingProps, e === null ? tu(t) : K = e;
  }
  function Sp(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = mp(n, e, e.pendingProps, e.type, void 0, I);
        break;
      case 11:
        e = mp(n, e, e.pendingProps, e.type.render, e.ref, I);
        break;
      case 5:
        qd(e);
      default:
        ab(n, e), e = K = a0(e, Cn), e = ib(n, e, Cn);
    }
    t.memoizedProps = t.pendingProps, e === null ? tu(t) : K = e;
  }
  function Ca(t, e, n, i) {
    vn = ta = null, qd(e), Va = null, ur = 0;
    var a = e.return;
    try {
      if (ME(t, a, e, n, I)) {
        wt = 1, ol(t, Ae(n, t.current)), K = null;
        return;
      }
    } catch (s) {
      if (a !== null) throw K = a, s;
      wt = 1, ol(t, Ae(n, t.current)), K = null;
      return;
    }
    e.flags & 32768 ? (W || i === 1 ? t = true : ls || I & 536870912 ? t = false : (Fn = t = true, (i === 2 || i === 9 || i === 3 || i === 6) && (i = ve.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Nb(e, t)) : tu(e);
  }
  function tu(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        Nb(e, Fn);
        return;
      }
      t = e.return;
      var n = DE(e.alternate, e, Cn);
      if (n !== null) {
        K = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        K = e;
        return;
      }
      K = e = t;
    } while (e !== null);
    wt === 0 && (wt = 5);
  }
  function Nb(t, e) {
    do {
      var n = NE(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        K = t;
        return;
      }
      K = t = n;
    } while (t !== null);
    wt = 6, K = null;
  }
  function wp(t, e, n, i, a, s, r, o, l) {
    t.cancelPendingCommit = null;
    do
      eu();
    while (_t !== 0);
    if (tt & 6) throw Error(M(327));
    if (e !== null) {
      if (e === t.current) throw Error(M(177));
      if (s = e.lanes | e.childLanes, s |= Dd, vT(t, n, s, r, o, l), t === lt && (K = lt = null, I = 0), Za = e, ii = t, Sn = n, mf = s, pf = a, Tb = i, e.subtreeFlags & 10256 || e.flags & 10256 ? (t.callbackNode = null, t.callbackPriority = 0, GE($o, function() {
        return Vb(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), i = (e.flags & 13878) !== 0, e.subtreeFlags & 13878 || i) {
        i = H.T, H.T = null, a = et.p, et.p = 2, r = tt, tt |= 4;
        try {
          jE(t, e, n);
        } finally {
          tt = r, et.p = a, H.T = i;
        }
      }
      _t = 1, jb(), zb(), _b();
    }
  }
  function jb() {
    if (_t === 1) {
      _t = 0;
      var t = ii, e = Za, n = (e.flags & 13878) !== 0;
      if (e.subtreeFlags & 13878 || n) {
        n = H.T, H.T = null;
        var i = et.p;
        et.p = 2;
        var a = tt;
        tt |= 4;
        try {
          pb(e, t);
          var s = xf, r = $v(t.containerInfo), o = s.focusedElem, l = s.selectionRange;
          if (r !== o && o && o.ownerDocument && Zv(o.ownerDocument.documentElement, o)) {
            if (l !== null && Od(o)) {
              var u = l.start, c = l.end;
              if (c === void 0 && (c = u), "selectionStart" in o) o.selectionStart = u, o.selectionEnd = Math.min(c, o.value.length);
              else {
                var f = o.ownerDocument || document, h = f && f.defaultView || window;
                if (h.getSelection) {
                  var d = h.getSelection(), v = o.textContent.length, y = Math.min(l.start, v), x = l.end === void 0 ? y : Math.min(l.end, v);
                  !d.extend && y > x && (r = x, x = y, y = r);
                  var p = qm(o, y), m = qm(o, x);
                  if (p && m && (d.rangeCount !== 1 || d.anchorNode !== p.node || d.anchorOffset !== p.offset || d.focusNode !== m.node || d.focusOffset !== m.offset)) {
                    var g = f.createRange();
                    g.setStart(p.node, p.offset), d.removeAllRanges(), y > x ? (d.addRange(g), d.extend(m.node, m.offset)) : (g.setEnd(m.node, m.offset), d.addRange(g));
                  }
                }
              }
            }
            for (f = [], d = o; d = d.parentNode; ) d.nodeType === 1 && f.push({
              element: d,
              left: d.scrollLeft,
              top: d.scrollTop
            });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < f.length; o++) {
              var S = f[o];
              S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
            }
          }
          xl = !!bf, xf = bf = null;
        } finally {
          tt = a, et.p = i, H.T = n;
        }
      }
      t.current = e, _t = 2;
    }
  }
  function zb() {
    if (_t === 2) {
      _t = 0;
      var t = ii, e = Za, n = (e.flags & 8772) !== 0;
      if (e.subtreeFlags & 8772 || n) {
        n = H.T, H.T = null;
        var i = et.p;
        et.p = 2;
        var a = tt;
        tt |= 4;
        try {
          cb(t, e.alternate, e);
        } finally {
          tt = a, et.p = i, H.T = n;
        }
      }
      _t = 3;
    }
  }
  function _b() {
    if (_t === 4 || _t === 3) {
      _t = 0, uT();
      var t = ii, e = Za, n = Sn, i = Tb;
      e.subtreeFlags & 10256 || e.flags & 10256 ? _t = 5 : (_t = 0, Za = ii = null, Lb(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (ni = null), wd(n), e = e.stateNode, he && typeof he.onCommitFiberRoot == "function") try {
        he.onCommitFiberRoot(Dr, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (i !== null) {
        e = H.T, a = et.p, et.p = 2, H.T = null;
        try {
          for (var s = t.onRecoverableError, r = 0; r < i.length; r++) {
            var o = i[r];
            s(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          H.T = e, et.p = a;
        }
      }
      Sn & 3 && eu(), sn(t), a = t.pendingLanes, n & 261930 && a & 42 ? t === gf ? $s++ : ($s = 0, gf = t) : $s = 0, Ur(0);
    }
  }
  function Lb(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Lr(e)));
  }
  function eu() {
    return jb(), zb(), _b(), Vb();
  }
  function Vb() {
    if (_t !== 5) return false;
    var t = ii, e = mf;
    mf = 0;
    var n = wd(Sn), i = H.T, a = et.p;
    try {
      et.p = 32 > n ? 32 : n, H.T = null, n = pf, pf = null;
      var s = ii, r = Sn;
      if (_t = 0, Za = ii = null, Sn = 0, tt & 6) throw Error(M(331));
      var o = tt;
      if (tt |= 4, xb(s.current), yb(s, s.current, r, n), tt = o, Ur(0, false), he && typeof he.onPostCommitFiberRoot == "function") try {
        he.onPostCommitFiberRoot(Dr, s);
      } catch {
      }
      return true;
    } finally {
      et.p = a, H.T = i, Lb(t, e);
    }
  }
  function Tp(t, e, n) {
    e = Ae(n, e), e = uf(t.stateNode, e, 2), t = ei(t, e, 2), t !== null && (jr(t, 2), sn(t));
  }
  function it(t, e, n) {
    if (t.tag === 3) Tp(t, t, n);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        Tp(e, t, n);
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ni === null || !ni.has(i))) {
          t = Ae(n, t), n = I0(2), i = ei(e, n, 2), i !== null && (J0(n, i, e, t), jr(i, 2), sn(i));
          break;
        }
      }
      e = e.return;
    }
  }
  function $u(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new LE();
      var a = /* @__PURE__ */ new Set();
      i.set(e, a);
    } else a = i.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(e, a));
    a.has(n) || (ih = true, a.add(n), t = HE.bind(null, t, e, n), e.then(t, t));
  }
  function HE(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, lt === t && (I & n) === n && (wt === 4 || wt === 3 && (I & 62914560) === I && 300 > de() - Jl ? !(tt & 2) && $a(t, 0) : ah |= n, Ka === I && (Ka = 0)), sn(t);
  }
  function Bb(t, e) {
    e === 0 && (e = Rv()), t = Wi(t, e), t !== null && (jr(t, e), sn(t));
  }
  function kE(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Bb(t, n);
  }
  function YE(t, e) {
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
    i !== null && i.delete(e), Bb(t, n);
  }
  function GE(t, e) {
    return xd(t, e);
  }
  var hl = null, da = null, yf = false, ml = false, Iu = false, Zn = 0;
  function sn(t) {
    t !== da && t.next === null && (da === null ? hl = da = t : da = da.next = t), ml = true, yf || (yf = true, XE());
  }
  function Ur(t, e) {
    if (!Iu && ml) {
      Iu = true;
      do
        for (var n = false, i = hl; i !== null; ) {
          if (t !== 0) {
            var a = i.pendingLanes;
            if (a === 0) var s = 0;
            else {
              var r = i.suspendedLanes, o = i.pingedLanes;
              s = (1 << 31 - me(42 | t) + 1) - 1, s &= a & ~(r & ~o), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = true, Ep(i, s));
          } else s = I, s = kl(i, i === lt ? s : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), !(s & 3) || Nr(i, s) || (n = true, Ep(i, s));
          i = i.next;
        }
      while (n);
      Iu = false;
    }
  }
  function qE() {
    Ub();
  }
  function Ub() {
    ml = yf = false;
    var t = 0;
    Zn !== 0 && eA() && (t = Zn);
    for (var e = de(), n = null, i = hl; i !== null; ) {
      var a = i.next, s = Pb(i, e);
      s === 0 ? (i.next = null, n === null ? hl = a : n.next = a, a === null && (da = n)) : (n = i, (t !== 0 || s & 3) && (ml = true)), i = a;
    }
    _t !== 0 && _t !== 5 || Ur(t), Zn !== 0 && (Zn = 0);
  }
  function Pb(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, a = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var r = 31 - me(s), o = 1 << r, l = a[r];
      l === -1 ? (!(o & n) || o & i) && (a[r] = yT(o, e)) : l <= e && (t.expiredLanes |= o), s &= ~o;
    }
    if (e = lt, n = I, n = kl(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), i = t.callbackNode, n === 0 || t === e && (nt === 2 || nt === 9) || t.cancelPendingCommit !== null) return i !== null && i !== null && Au(i), t.callbackNode = null, t.callbackPriority = 0;
    if (!(n & 3) || Nr(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (i !== null && Au(i), wd(n)) {
        case 2:
        case 8:
          n = Cv;
          break;
        case 32:
          n = $o;
          break;
        case 268435456:
          n = Mv;
          break;
        default:
          n = $o;
      }
      return i = Hb.bind(null, t), n = xd(n, i), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return i !== null && i !== null && Au(i), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Hb(t, e) {
    if (_t !== 0 && _t !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (eu() && t.callbackNode !== n) return null;
    var i = I;
    return i = kl(t, t === lt ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), i === 0 ? null : (Ab(t, i, e), Pb(t, de()), t.callbackNode != null && t.callbackNode === n ? Hb.bind(null, t) : null);
  }
  function Ep(t, e) {
    if (eu()) return null;
    Ab(t, e, true);
  }
  function XE() {
    iA(function() {
      tt & 6 ? xd(Av, qE) : Ub();
    });
  }
  function rh() {
    if (Zn === 0) {
      var t = Xa;
      t === 0 && (t = $r, $r <<= 1, !($r & 261888) && ($r = 256)), Zn = t;
    }
    return Zn;
  }
  function Ap(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : To("" + t);
  }
  function Cp(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function QE(t, e, n, i, a) {
    if (e === "submit" && n && n.stateNode === a) {
      var s = Ap((a[ae] || null).action), r = i.submitter;
      r && (e = (e = r[ae] || null) ? Ap(e.formAction) : r.getAttribute("formAction"), e !== null && (s = e, r = null));
      var o = new Yl("action", "action", null, i, a);
      t.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (Zn !== 0) {
                  var l = r ? Cp(a, r) : new FormData(a);
                  of(n, {
                    pending: true,
                    data: l,
                    method: a.method,
                    action: s
                  }, null, l);
                }
              } else typeof s == "function" && (o.preventDefault(), l = r ? Cp(a, r) : new FormData(a), of(n, {
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
  for (var Ju = 0; Ju < Kc.length; Ju++) {
    var Wu = Kc[Ju], FE = Wu.toLowerCase(), KE = Wu[0].toUpperCase() + Wu.slice(1);
    Xe(FE, "on" + KE);
  }
  Xe(Jv, "onAnimationEnd");
  Xe(Wv, "onAnimationIteration");
  Xe(t0, "onAnimationStart");
  Xe("dblclick", "onDoubleClick");
  Xe("focusin", "onFocus");
  Xe("focusout", "onBlur");
  Xe(cE, "onTransitionRun");
  Xe(fE, "onTransitionStart");
  Xe(dE, "onTransitionCancel");
  Xe(e0, "onTransitionEnd");
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
  $i("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  $i("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  $i("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  $i("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  $i("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  $i("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ZE = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dr));
  function kb(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n], a = i.event;
      i = i.listeners;
      t: {
        var s = void 0;
        if (e) for (var r = i.length - 1; 0 <= r; r--) {
          var o = i[r], l = o.instance, u = o.currentTarget;
          if (o = o.listener, l !== s && a.isPropagationStopped()) break t;
          s = o, a.currentTarget = u;
          try {
            s(a);
          } catch (c) {
            Jo(c);
          }
          a.currentTarget = null, s = l;
        }
        else for (r = 0; r < i.length; r++) {
          if (o = i[r], l = o.instance, u = o.currentTarget, o = o.listener, l !== s && a.isPropagationStopped()) break t;
          s = o, a.currentTarget = u;
          try {
            s(a);
          } catch (c) {
            Jo(c);
          }
          a.currentTarget = null, s = l;
        }
      }
    }
  }
  function F(t, e) {
    var n = e[Hc];
    n === void 0 && (n = e[Hc] = /* @__PURE__ */ new Set());
    var i = t + "__bubble";
    n.has(i) || (Yb(e, t, 2, false), n.add(i));
  }
  function tc(t, e, n) {
    var i = 0;
    e && (i |= 4), Yb(n, t, i, e);
  }
  var ro = "_reactListening" + Math.random().toString(36).slice(2);
  function oh(t) {
    if (!t[ro]) {
      t[ro] = true, zv.forEach(function(n) {
        n !== "selectionchange" && (ZE.has(n) || tc(n, false, t), tc(n, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ro] || (e[ro] = true, tc("selectionchange", false, e));
    }
  }
  function Yb(t, e, n, i) {
    switch (e1(e)) {
      case 2:
        var a = TA;
        break;
      case 8:
        a = EA;
        break;
      default:
        a = fh;
    }
    n = a.bind(null, e, n, t), a = void 0, !Xc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = true), i ? a !== void 0 ? t.addEventListener(e, n, {
      capture: true,
      passive: a
    }) : t.addEventListener(e, n, true) : a !== void 0 ? t.addEventListener(e, n, {
      passive: a
    }) : t.addEventListener(e, n, false);
  }
  function ec(t, e, n, i, a) {
    var s = i;
    if (!(e & 1) && !(e & 2) && i !== null) t: for (; ; ) {
      if (i === null) return;
      var r = i.tag;
      if (r === 3 || r === 4) {
        var o = i.stateNode.containerInfo;
        if (o === a) break;
        if (r === 4) for (r = i.return; r !== null; ) {
          var l = r.tag;
          if ((l === 3 || l === 4) && r.stateNode.containerInfo === a) return;
          r = r.return;
        }
        for (; o !== null; ) {
          if (r = ya(o), r === null) return;
          if (l = r.tag, l === 5 || l === 6 || l === 26 || l === 27) {
            i = s = r;
            continue t;
          }
          o = o.parentNode;
        }
      }
      i = i.return;
    }
    kv(function() {
      var u = s, c = Ad(n), f = [];
      t: {
        var h = n0.get(t);
        if (h !== void 0) {
          var d = Yl, v = t;
          switch (t) {
            case "keypress":
              if (Ao(n) === 0) break t;
            case "keydown":
            case "keyup":
              d = YT;
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
              d = _m;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              d = DT;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              d = XT;
              break;
            case Jv:
            case Wv:
            case t0:
              d = zT;
              break;
            case e0:
              d = FT;
              break;
            case "scroll":
            case "scrollend":
              d = RT;
              break;
            case "wheel":
              d = ZT;
              break;
            case "copy":
            case "cut":
            case "paste":
              d = LT;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              d = Vm;
              break;
            case "toggle":
            case "beforetoggle":
              d = IT;
          }
          var y = (e & 4) !== 0, x = !y && (t === "scroll" || t === "scrollend"), p = y ? h !== null ? h + "Capture" : null : h;
          y = [];
          for (var m = u, g; m !== null; ) {
            var S = m;
            if (g = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || g === null || p === null || (S = ar(m, p), S != null && y.push(hr(m, S, g))), x) break;
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
          if (h = t === "mouseover" || t === "pointerover", d = t === "mouseout" || t === "pointerout", h && n !== qc && (v = n.relatedTarget || n.fromElement) && (ya(v) || v[as])) break t;
          if ((d || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, d ? (v = n.relatedTarget || n.toElement, d = u, v = v ? ya(v) : null, v !== null && (x = Or(v), y = v.tag, v !== x || y !== 5 && y !== 27 && y !== 6) && (v = null)) : (d = null, v = u), d !== v)) {
            if (y = _m, S = "onMouseLeave", p = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (y = Vm, S = "onPointerLeave", p = "onPointerEnter", m = "pointer"), x = d == null ? h : zs(d), g = v == null ? h : zs(v), h = new y(S, m + "leave", d, n, c), h.target = x, h.relatedTarget = g, S = null, ya(c) === u && (y = new y(p, m + "enter", v, n, c), y.target = g, y.relatedTarget = x, S = y), x = S, d && v) e: {
              for (y = $E, p = d, m = v, g = 0, S = p; S; S = y(S)) g++;
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
            d !== null && Mp(f, h, d, y, false), v !== null && x !== null && Mp(f, x, v, y, true);
          }
        }
        t: {
          if (h = u ? zs(u) : window, d = h.nodeName && h.nodeName.toLowerCase(), d === "select" || d === "input" && h.type === "file") var A = Hm;
          else if (Pm(h)) if (Fv) A = oE;
          else {
            A = sE;
            var E = aE;
          }
          else d = h.nodeName, !d || d.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? u && Ed(u.elementType) && (A = Hm) : A = rE;
          if (A && (A = A(t, u))) {
            Qv(f, A, n, c);
            break t;
          }
          E && E(t, h, u), t === "focusout" && u && h.type === "number" && u.memoizedProps.value != null && Gc(h, "number", h.value);
        }
        switch (E = u ? zs(u) : window, t) {
          case "focusin":
            (Pm(E) || E.contentEditable === "true") && (xa = E, Qc = u, ks = null);
            break;
          case "focusout":
            ks = Qc = xa = null;
            break;
          case "mousedown":
            Fc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Fc = false, Xm(f, n, c);
            break;
          case "selectionchange":
            if (uE) break;
          case "keydown":
          case "keyup":
            Xm(f, n, c);
        }
        var C;
        if (Rd) t: {
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
        else ba ? qv(t, n) && (j = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
        j && (Gv && n.locale !== "ko" && (ba || j !== "onCompositionStart" ? j === "onCompositionEnd" && ba && (C = Yv()) : (Qn = c, Cd = "value" in Qn ? Qn.value : Qn.textContent, ba = true)), E = pl(u, j), 0 < E.length && (j = new Lm(j, t, null, n, c), f.push({
          event: j,
          listeners: E
        }), C ? j.data = C : (C = Xv(n), C !== null && (j.data = C)))), (C = WT ? tE(t, n) : eE(t, n)) && (j = pl(u, "onBeforeInput"), 0 < j.length && (E = new Lm("onBeforeInput", "beforeinput", null, n, c), f.push({
          event: E,
          listeners: j
        }), E.data = C)), QE(f, t, u, n, c);
      }
      kb(f, e);
    });
  }
  function hr(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function pl(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var a = t, s = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || s === null || (a = ar(t, n), a != null && i.unshift(hr(t, a, s)), a = ar(t, e), a != null && i.push(hr(t, a, s))), t.tag === 3) return i;
      t = t.return;
    }
    return [];
  }
  function $E(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Mp(t, e, n, i, a) {
    for (var s = e._reactName, r = []; n !== null && n !== i; ) {
      var o = n, l = o.alternate, u = o.stateNode;
      if (o = o.tag, l !== null && l === i) break;
      o !== 5 && o !== 26 && o !== 27 || u === null || (l = u, a ? (u = ar(n, s), u != null && r.unshift(hr(n, u, l))) : a || (u = ar(n, s), u != null && r.push(hr(n, u, l)))), n = n.return;
    }
    r.length !== 0 && t.push({
      event: e,
      listeners: r
    });
  }
  var IE = /\r\n?/g, JE = /\u0000|\uFFFD/g;
  function Rp(t) {
    return (typeof t == "string" ? t : "" + t).replace(IE, `
`).replace(JE, "");
  }
  function Gb(t, e) {
    return e = Rp(e), Rp(t) === e;
  }
  function rt(t, e, n, i, a, s) {
    switch (n) {
      case "children":
        typeof i == "string" ? e === "body" || e === "textarea" && i === "" || qa(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && qa(t, "" + i);
        break;
      case "className":
        Wr(t, "class", i);
        break;
      case "tabIndex":
        Wr(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wr(t, n, i);
        break;
      case "style":
        Hv(t, i, s);
        break;
      case "data":
        if (e !== "object") {
          Wr(t, "data", i);
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
        i = To("" + i), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof s == "function" && (n === "formAction" ? (e !== "input" && rt(t, e, "name", a.name, a, null), rt(t, e, "formEncType", a.formEncType, a, null), rt(t, e, "formMethod", a.formMethod, a, null), rt(t, e, "formTarget", a.formTarget, a, null)) : (rt(t, e, "encType", a.encType, a, null), rt(t, e, "method", a.method, a, null), rt(t, e, "target", a.target, a, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = To("" + i), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = yn);
        break;
      case "onScroll":
        i != null && F("scroll", t);
        break;
      case "onScrollEnd":
        i != null && F("scrollend", t);
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
        n = To("" + i), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
        F("beforetoggle", t), F("toggle", t), wo(t, "popover", i);
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
        wo(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = CT.get(n) || n, wo(t, n, i));
    }
  }
  function vf(t, e, n, i, a, s) {
    switch (n) {
      case "style":
        Hv(t, i, s);
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
        typeof i == "string" ? qa(t, i) : (typeof i == "number" || typeof i == "bigint") && qa(t, "" + i);
        break;
      case "onScroll":
        i != null && F("scroll", t);
        break;
      case "onScrollEnd":
        i != null && F("scrollend", t);
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
        if (!_v.hasOwnProperty(n)) t: {
          if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), e = n.slice(2, a ? n.length - 7 : void 0), s = t[ae] || null, s = s != null ? s[n] : null, typeof s == "function" && t.removeEventListener(e, s, a), typeof i == "function")) {
            typeof s != "function" && s !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, i, a);
            break t;
          }
          n in t ? t[n] = i : i === true ? t.setAttribute(n, "") : wo(t, n, i);
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
        F("error", t), F("load", t);
        var i = false, a = false, s;
        for (s in n) if (n.hasOwnProperty(s)) {
          var r = n[s];
          if (r != null) switch (s) {
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
              rt(t, e, s, r, n, null);
          }
        }
        a && rt(t, e, "srcSet", n.srcSet, n, null), i && rt(t, e, "src", n.src, n, null);
        return;
      case "input":
        F("invalid", t);
        var o = s = r = a = null, l = null, u = null;
        for (i in n) if (n.hasOwnProperty(i)) {
          var c = n[i];
          if (c != null) switch (i) {
            case "name":
              a = c;
              break;
            case "type":
              r = c;
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
              o = c;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (c != null) throw Error(M(137, e));
              break;
            default:
              rt(t, e, i, c, n, null);
          }
        }
        Bv(t, s, o, l, u, r, a, false);
        return;
      case "select":
        F("invalid", t), i = r = s = null;
        for (a in n) if (n.hasOwnProperty(a) && (o = n[a], o != null)) switch (a) {
          case "value":
            s = o;
            break;
          case "defaultValue":
            r = o;
            break;
          case "multiple":
            i = o;
          default:
            rt(t, e, a, o, n, null);
        }
        e = s, n = r, t.multiple = !!i, e != null ? za(t, !!i, e, false) : n != null && za(t, !!i, n, true);
        return;
      case "textarea":
        F("invalid", t), s = a = i = null;
        for (r in n) if (n.hasOwnProperty(r) && (o = n[r], o != null)) switch (r) {
          case "value":
            i = o;
            break;
          case "defaultValue":
            a = o;
            break;
          case "children":
            s = o;
            break;
          case "dangerouslySetInnerHTML":
            if (o != null) throw Error(M(91));
            break;
          default:
            rt(t, e, r, o, n, null);
        }
        Pv(t, i, a, s);
        return;
      case "option":
        for (l in n) if (n.hasOwnProperty(l) && (i = n[l], i != null)) switch (l) {
          case "selected":
            t.selected = i && typeof i != "function" && typeof i != "symbol";
            break;
          default:
            rt(t, e, l, i, n, null);
        }
        return;
      case "dialog":
        F("beforetoggle", t), F("toggle", t), F("cancel", t), F("close", t);
        break;
      case "iframe":
      case "object":
        F("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < dr.length; i++) F(dr[i], t);
        break;
      case "image":
        F("error", t), F("load", t);
        break;
      case "details":
        F("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        F("error", t), F("load", t);
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
            rt(t, e, u, i, n, null);
        }
        return;
      default:
        if (Ed(e)) {
          for (c in n) n.hasOwnProperty(c) && (i = n[c], i !== void 0 && vf(t, e, c, i, n, void 0));
          return;
        }
    }
    for (o in n) n.hasOwnProperty(o) && (i = n[o], i != null && rt(t, e, o, i, n, null));
  }
  function WE(t, e, n, i) {
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
        var a = null, s = null, r = null, o = null, l = null, u = null, c = null;
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
              i.hasOwnProperty(d) || rt(t, e, d, null, i, f);
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
              r = d;
              break;
            case "defaultValue":
              o = d;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (d != null) throw Error(M(137, e));
              break;
            default:
              d !== f && rt(t, e, h, d, i, f);
          }
        }
        Yc(t, r, o, l, u, c, s, a);
        return;
      case "select":
        d = r = o = h = null;
        for (s in n) if (l = n[s], n.hasOwnProperty(s) && l != null) switch (s) {
          case "value":
            break;
          case "multiple":
            d = l;
          default:
            i.hasOwnProperty(s) || rt(t, e, s, null, i, l);
        }
        for (a in i) if (s = i[a], l = n[a], i.hasOwnProperty(a) && (s != null || l != null)) switch (a) {
          case "value":
            h = s;
            break;
          case "defaultValue":
            o = s;
            break;
          case "multiple":
            r = s;
          default:
            s !== l && rt(t, e, a, s, i, l);
        }
        e = o, n = r, i = d, h != null ? za(t, !!n, h, false) : !!i != !!n && (e != null ? za(t, !!n, e, true) : za(t, !!n, n ? [] : "", false));
        return;
      case "textarea":
        d = h = null;
        for (o in n) if (a = n[o], n.hasOwnProperty(o) && a != null && !i.hasOwnProperty(o)) switch (o) {
          case "value":
            break;
          case "children":
            break;
          default:
            rt(t, e, o, null, i, a);
        }
        for (r in i) if (a = i[r], s = n[r], i.hasOwnProperty(r) && (a != null || s != null)) switch (r) {
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
            a !== s && rt(t, e, r, a, i, s);
        }
        Uv(t, h, d);
        return;
      case "option":
        for (var v in n) if (h = n[v], n.hasOwnProperty(v) && h != null && !i.hasOwnProperty(v)) switch (v) {
          case "selected":
            t.selected = false;
            break;
          default:
            rt(t, e, v, null, i, h);
        }
        for (l in i) if (h = i[l], d = n[l], i.hasOwnProperty(l) && h !== d && (h != null || d != null)) switch (l) {
          case "selected":
            t.selected = h && typeof h != "function" && typeof h != "symbol";
            break;
          default:
            rt(t, e, l, h, i, d);
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
        for (var y in n) h = n[y], n.hasOwnProperty(y) && h != null && !i.hasOwnProperty(y) && rt(t, e, y, null, i, h);
        for (u in i) if (h = i[u], d = n[u], i.hasOwnProperty(u) && h !== d && (h != null || d != null)) switch (u) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (h != null) throw Error(M(137, e));
            break;
          default:
            rt(t, e, u, h, i, d);
        }
        return;
      default:
        if (Ed(e)) {
          for (var x in n) h = n[x], n.hasOwnProperty(x) && h !== void 0 && !i.hasOwnProperty(x) && vf(t, e, x, void 0, i, h);
          for (c in i) h = i[c], d = n[c], !i.hasOwnProperty(c) || h === d || h === void 0 && d === void 0 || vf(t, e, c, h, i, d);
          return;
        }
    }
    for (var p in n) h = n[p], n.hasOwnProperty(p) && h != null && !i.hasOwnProperty(p) && rt(t, e, p, null, i, h);
    for (f in i) h = i[f], d = n[f], !i.hasOwnProperty(f) || h === d || h == null && d == null || rt(t, e, f, h, i, d);
  }
  function Op(t) {
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
  function tA() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var a = n[i], s = a.transferSize, r = a.initiatorType, o = a.duration;
        if (s && o && Op(r)) {
          for (r = 0, o = a.responseEnd, i += 1; i < n.length; i++) {
            var l = n[i], u = l.startTime;
            if (u > o) break;
            var c = l.transferSize, f = l.initiatorType;
            c && Op(f) && (l = l.responseEnd, r += c * (l < o ? 1 : (o - u) / (l - u)));
          }
          if (--i, e += 8 * (s + r) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var bf = null, xf = null;
  function gl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Dp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qb(t, e) {
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
  function Sf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var nc = null;
  function eA() {
    var t = window.event;
    return t && t.type === "popstate" ? t === nc ? false : (nc = t, true) : (nc = null, false);
  }
  var Xb = typeof setTimeout == "function" ? setTimeout : void 0, nA = typeof clearTimeout == "function" ? clearTimeout : void 0, Np = typeof Promise == "function" ? Promise : void 0, iA = typeof queueMicrotask == "function" ? queueMicrotask : typeof Np < "u" ? function(t) {
    return Np.resolve(null).then(t).catch(aA);
  } : Xb;
  function aA(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function bi(t) {
    return t === "head";
  }
  function jp(t, e) {
    var n = e, i = 0;
    do {
      var a = n.nextSibling;
      if (t.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$" || n === "/&") {
        if (i === 0) {
          t.removeChild(a), Ja(e);
          return;
        }
        i--;
      } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") i++;
      else if (n === "html") Is(t.ownerDocument.documentElement);
      else if (n === "head") {
        n = t.ownerDocument.head, Is(n);
        for (var s = n.firstChild; s; ) {
          var r = s.nextSibling, o = s.nodeName;
          s[zr] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = r;
        }
      } else n === "body" && Is(t.ownerDocument.body);
      n = a;
    } while (n);
    Ja(e);
  }
  function zp(t, e) {
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
  function wf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wf(n), Td(n);
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
  function sA(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var a = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[zr]) switch (e) {
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
      if (t = Oe(t.nextSibling), t === null) break;
    }
    return null;
  }
  function rA(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Oe(t.nextSibling), t === null)) return null;
    return t;
  }
  function Qb(t, e) {
    for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Oe(t.nextSibling), t === null)) return null;
    return t;
  }
  function Tf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ef(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function oA(t, e) {
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
  function Oe(t) {
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
  var Af = null;
  function _p(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Oe(t.nextSibling);
          e--;
        } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Lp(t) {
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
  function Fb(t, e, n) {
    switch (e = gl(n), t) {
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
  function Is(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Td(t);
  }
  var je = /* @__PURE__ */ new Map(), Vp = /* @__PURE__ */ new Set();
  function yl(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Dn = et.d;
  et.d = {
    f: lA,
    r: uA,
    D: cA,
    C: fA,
    L: dA,
    m: hA,
    X: pA,
    S: mA,
    M: gA
  };
  function lA() {
    var t = Dn.f(), e = Wl();
    return t || e;
  }
  function uA(t) {
    var e = ss(t);
    e !== null && e.tag === 5 && e.type === "form" ? H0(e) : Dn.r(t);
  }
  var us = typeof document > "u" ? null : document;
  function Kb(t, e, n) {
    var i = us;
    if (i && typeof e == "string" && e) {
      var a = Ee(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Vp.has(a) || (Vp.add(a), t = {
        rel: t,
        crossOrigin: n,
        href: e
      }, i.querySelector(a) === null && (e = i.createElement("link"), qt(e, "link", t), Bt(e), i.head.appendChild(e)));
    }
  }
  function cA(t) {
    Dn.D(t), Kb("dns-prefetch", t, null);
  }
  function fA(t, e) {
    Dn.C(t, e), Kb("preconnect", t, e);
  }
  function dA(t, e, n) {
    Dn.L(t, e, n);
    var i = us;
    if (i && t && e) {
      var a = 'link[rel="preload"][as="' + Ee(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + Ee(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + Ee(n.imageSizes) + '"]')) : a += '[href="' + Ee(t) + '"]';
      var s = a;
      switch (e) {
        case "style":
          s = Ia(t);
          break;
        case "script":
          s = cs(t);
      }
      je.has(s) || (t = gt({
        rel: "preload",
        href: e === "image" && n && n.imageSrcSet ? void 0 : t,
        as: e
      }, n), je.set(s, t), i.querySelector(a) !== null || e === "style" && i.querySelector(Pr(s)) || e === "script" && i.querySelector(Hr(s)) || (e = i.createElement("link"), qt(e, "link", t), Bt(e), i.head.appendChild(e)));
    }
  }
  function hA(t, e) {
    Dn.m(t, e);
    var n = us;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Ee(i) + '"][href="' + Ee(t) + '"]', s = a;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = cs(t);
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
            if (n.querySelector(Hr(s))) return;
        }
        i = n.createElement("link"), qt(i, "link", t), Bt(i), n.head.appendChild(i);
      }
    }
  }
  function mA(t, e, n) {
    Dn.S(t, e, n);
    var i = us;
    if (i && t) {
      var a = ja(i).hoistableStyles, s = Ia(t);
      e = e || "default";
      var r = a.get(s);
      if (!r) {
        var o = {
          loading: 0,
          preload: null
        };
        if (r = i.querySelector(Pr(s))) o.loading = 5;
        else {
          t = gt({
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          }, n), (n = je.get(s)) && lh(t, n);
          var l = r = i.createElement("link");
          Bt(l), qt(l, "link", t), l._p = new Promise(function(u, c) {
            l.onload = u, l.onerror = c;
          }), l.addEventListener("load", function() {
            o.loading |= 1;
          }), l.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, zo(r, e, i);
        }
        r = {
          type: "stylesheet",
          instance: r,
          count: 1,
          state: o
        }, a.set(s, r);
      }
    }
  }
  function pA(t, e) {
    Dn.X(t, e);
    var n = us;
    if (n && t) {
      var i = ja(n).hoistableScripts, a = cs(t), s = i.get(a);
      s || (s = n.querySelector(Hr(a)), s || (t = gt({
        src: t,
        async: true
      }, e), (e = je.get(a)) && uh(t, e), s = n.createElement("script"), Bt(s), qt(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(a, s));
    }
  }
  function gA(t, e) {
    Dn.M(t, e);
    var n = us;
    if (n && t) {
      var i = ja(n).hoistableScripts, a = cs(t), s = i.get(a);
      s || (s = n.querySelector(Hr(a)), s || (t = gt({
        src: t,
        async: true,
        type: "module"
      }, e), (e = je.get(a)) && uh(t, e), s = n.createElement("script"), Bt(s), qt(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(a, s));
    }
  }
  function Bp(t, e, n, i) {
    var a = (a = Jn.current) ? yl(a) : null;
    if (!a) throw Error(M(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = Ia(n.href), n = ja(a).hoistableStyles, i = n.get(e), i || (i = {
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
          t = Ia(n.href);
          var s = ja(a).hoistableStyles, r = s.get(t);
          if (r || (a = a.ownerDocument || a, r = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, s.set(t, r), (s = a.querySelector(Pr(t))) && !s._p && (r.instance = s, r.state.loading = 5), je.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, je.set(t, n), s || yA(a, t, n, r.state))), e && i === null) throw Error(M(528, ""));
          return r;
        }
        if (e && i !== null) throw Error(M(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = cs(n), n = ja(a).hoistableScripts, i = n.get(e), i || (i = {
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
  function Ia(t) {
    return 'href="' + Ee(t) + '"';
  }
  function Pr(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Zb(t) {
    return gt({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function yA(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
      return i.loading |= 1;
    }), e.addEventListener("error", function() {
      return i.loading |= 2;
    }), qt(e, "link", n), Bt(e), t.head.appendChild(e));
  }
  function cs(t) {
    return '[src="' + Ee(t) + '"]';
  }
  function Hr(t) {
    return "script[async]" + t;
  }
  function Up(t, e, n) {
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
        return i = (t.ownerDocument || t).createElement("style"), Bt(i), qt(i, "style", a), zo(i, n.precedence, t), e.instance = i;
      case "stylesheet":
        a = Ia(n.href);
        var s = t.querySelector(Pr(a));
        if (s) return e.state.loading |= 4, e.instance = s, Bt(s), s;
        i = Zb(n), (a = je.get(a)) && lh(i, a), s = (t.ownerDocument || t).createElement("link"), Bt(s);
        var r = s;
        return r._p = new Promise(function(o, l) {
          r.onload = o, r.onerror = l;
        }), qt(s, "link", i), e.state.loading |= 4, zo(s, n.precedence, t), e.instance = s;
      case "script":
        return s = cs(n.src), (a = t.querySelector(Hr(s))) ? (e.instance = a, Bt(a), a) : (i = n, (a = je.get(s)) && (i = gt({}, n), uh(i, a)), t = t.ownerDocument || t, a = t.createElement("script"), Bt(a), qt(a, "link", i), t.head.appendChild(a), e.instance = a);
      case "void":
        return null;
      default:
        throw Error(M(443, e.type));
    }
    else e.type === "stylesheet" && !(e.state.loading & 4) && (i = e.instance, e.state.loading |= 4, zo(i, n.precedence, t));
    return e.instance;
  }
  function zo(t, e, n) {
    for (var i = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = i.length ? i[i.length - 1] : null, s = a, r = 0; r < i.length; r++) {
      var o = i[r];
      if (o.dataset.precedence === e) s = o;
      else if (s !== a) break;
    }
    s ? s.parentNode.insertBefore(t, s.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function lh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function uh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var _o = null;
  function Pp(t, e, n) {
    if (_o === null) {
      var i = /* @__PURE__ */ new Map(), a = _o = /* @__PURE__ */ new Map();
      a.set(n, i);
    } else a = _o, i = a.get(n), i || (i = /* @__PURE__ */ new Map(), a.set(n, i));
    if (i.has(t)) return i;
    for (i.set(t, null), n = n.getElementsByTagName(t), a = 0; a < n.length; a++) {
      var s = n[a];
      if (!(s[zr] || s[kt] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var r = s.getAttribute(e) || "";
        r = t + r;
        var o = i.get(r);
        o ? o.push(s) : i.set(r, [
          s
        ]);
      }
    }
    return i;
  }
  function Hp(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null);
  }
  function vA(t, e, n) {
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
  function $b(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  function bA(t, e, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== false) && !(n.state.loading & 4)) {
      if (n.instance === null) {
        var a = Ia(i.href), s = e.querySelector(Pr(a));
        if (s) {
          e = s._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = vl.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = s, Bt(s);
          return;
        }
        s = e.ownerDocument || e, i = Zb(i), (a = je.get(a)) && lh(i, a), s = s.createElement("link"), Bt(s);
        var r = s;
        r._p = new Promise(function(o, l) {
          r.onload = o, r.onerror = l;
        }), qt(s, "link", i), n.instance = s;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && !(n.state.loading & 3) && (t.count++, n = vl.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var ic = 0;
  function xA(t, e) {
    return t.stylesheets && t.count === 0 && Lo(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (t.stylesheets && Lo(t, t.stylesheets), t.unsuspend) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, 6e4 + e);
      0 < t.imgBytes && ic === 0 && (ic = 62500 * tA());
      var a = setTimeout(function() {
        if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && Lo(t, t.stylesheets), t.unsuspend)) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, (t.imgBytes > ic ? 50 : 800) + e);
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(i), clearTimeout(a);
      };
    } : null;
  }
  function vl() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Lo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var bl = null;
  function Lo(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, bl = /* @__PURE__ */ new Map(), e.forEach(SA, t), bl = null, vl.call(t));
  }
  function SA(t, e) {
    if (!(e.state.loading & 4)) {
      var n = bl.get(t);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), bl.set(t, n);
        for (var a = t.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < a.length; s++) {
          var r = a[s];
          (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") && (n.set(r.dataset.precedence, r), i = r);
        }
        i && n.set(null, i);
      }
      a = e.instance, r = a.getAttribute("data-precedence"), s = n.get(r) || i, s === i && n.set(null, a), n.set(r, a), this.count++, i = vl.bind(this), a.addEventListener("load", i), a.addEventListener("error", i), s ? s.parentNode.insertBefore(a, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var mr = {
    $$typeof: gn,
    Provider: null,
    Consumer: null,
    _currentValue: Ui,
    _currentValue2: Ui,
    _threadCount: 0
  };
  function wA(t, e, n, i, a, s, r, o, l) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Cu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cu(0), this.hiddenUpdates = Cu(null), this.identifierPrefix = i, this.onUncaughtError = a, this.onCaughtError = s, this.onRecoverableError = r, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = l, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ib(t, e, n, i, a, s, r, o, l, u, c, f) {
    return t = new wA(t, e, n, r, l, u, c, f, o), e = 1, s === true && (e |= 24), s = ce(3, null, null, e), t.current = s, s.stateNode = t, e = Ld(), e.refCount++, t.pooledCache = e, e.refCount++, s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: e
    }, Ud(s), t;
  }
  function Jb(t) {
    return t ? (t = Ta, t) : Ta;
  }
  function Wb(t, e, n, i, a, s) {
    a = Jb(a), i.context === null ? i.context = a : i.pendingContext = a, i = ti(e), i.payload = {
      element: n
    }, s = s === void 0 ? null : s, s !== null && (i.callback = s), n = ei(t, i, e), n !== null && (ie(n, t, e), Gs(n, t, e));
  }
  function kp(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function ch(t, e) {
    kp(t, e), (t = t.alternate) && kp(t, e);
  }
  function t1(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Wi(t, 67108864);
      e !== null && ie(e, t, 67108864), ch(t, 67108864);
    }
  }
  function Yp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = pe();
      e = Sd(e);
      var n = Wi(t, e);
      n !== null && ie(n, t, e), ch(t, e);
    }
  }
  var xl = true;
  function TA(t, e, n, i) {
    var a = H.T;
    H.T = null;
    var s = et.p;
    try {
      et.p = 2, fh(t, e, n, i);
    } finally {
      et.p = s, H.T = a;
    }
  }
  function EA(t, e, n, i) {
    var a = H.T;
    H.T = null;
    var s = et.p;
    try {
      et.p = 8, fh(t, e, n, i);
    } finally {
      et.p = s, H.T = a;
    }
  }
  function fh(t, e, n, i) {
    if (xl) {
      var a = Cf(i);
      if (a === null) ec(t, e, i, Sl, n), Gp(t, i);
      else if (CA(a, t, e, n, i)) i.stopPropagation();
      else if (Gp(t, i), e & 4 && -1 < AA.indexOf(t)) {
        for (; a !== null; ) {
          var s = ss(a);
          if (s !== null) switch (s.tag) {
            case 3:
              if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                var r = ji(s.pendingLanes);
                if (r !== 0) {
                  var o = s;
                  for (o.pendingLanes |= 2, o.entangledLanes |= 2; r; ) {
                    var l = 1 << 31 - me(r);
                    o.entanglements[1] |= l, r &= ~l;
                  }
                  sn(s), !(tt & 6) && (cl = de() + 500, Ur(0));
                }
              }
              break;
            case 31:
            case 13:
              o = Wi(s, 2), o !== null && ie(o, s, 2), Wl(), ch(s, 2);
          }
          if (s = Cf(i), s === null && ec(t, e, i, Sl, n), s === a) break;
          a = s;
        }
        a !== null && i.stopPropagation();
      } else ec(t, e, i, null, n);
    }
  }
  function Cf(t) {
    return t = Ad(t), dh(t);
  }
  var Sl = null;
  function dh(t) {
    if (Sl = null, t = ya(t), t !== null) {
      var e = Or(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = xv(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = Sv(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Sl = t, null;
  }
  function e1(t) {
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
        switch (cT()) {
          case Av:
            return 2;
          case Cv:
            return 8;
          case $o:
          case fT:
            return 32;
          case Mv:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mf = false, ai = null, si = null, ri = null, pr = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), qn = [], AA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Gp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ai = null;
        break;
      case "dragenter":
      case "dragleave":
        si = null;
        break;
      case "mouseover":
      case "mouseout":
        ri = null;
        break;
      case "pointerover":
      case "pointerout":
        pr.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gr.delete(e.pointerId);
    }
  }
  function Ms(t, e, n, i, a, s) {
    return t === null || t.nativeEvent !== s ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: s,
      targetContainers: [
        a
      ]
    }, e !== null && (e = ss(e), e !== null && t1(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function CA(t, e, n, i, a) {
    switch (e) {
      case "focusin":
        return ai = Ms(ai, t, e, n, i, a), true;
      case "dragenter":
        return si = Ms(si, t, e, n, i, a), true;
      case "mouseover":
        return ri = Ms(ri, t, e, n, i, a), true;
      case "pointerover":
        var s = a.pointerId;
        return pr.set(s, Ms(pr.get(s) || null, t, e, n, i, a)), true;
      case "gotpointercapture":
        return s = a.pointerId, gr.set(s, Ms(gr.get(s) || null, t, e, n, i, a)), true;
    }
    return false;
  }
  function n1(t) {
    var e = ya(t.target);
    if (e !== null) {
      var n = Or(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = xv(n), e !== null) {
            t.blockedOn = e, Mm(t.priority, function() {
              Yp(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = Sv(n), e !== null) {
            t.blockedOn = e, Mm(t.priority, function() {
              Yp(n);
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
  function Vo(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Cf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        qc = i, n.target.dispatchEvent(i), qc = null;
      } else return e = ss(n), e !== null && t1(e), t.blockedOn = n, false;
      e.shift();
    }
    return true;
  }
  function qp(t, e, n) {
    Vo(t) && n.delete(e);
  }
  function MA() {
    Mf = false, ai !== null && Vo(ai) && (ai = null), si !== null && Vo(si) && (si = null), ri !== null && Vo(ri) && (ri = null), pr.forEach(qp), gr.forEach(qp);
  }
  function oo(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Mf || (Mf = true, Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, MA)));
  }
  var lo = null;
  function Xp(t) {
    lo !== t && (lo = t, Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, function() {
      lo === t && (lo = null);
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e], i = t[e + 1], a = t[e + 2];
        if (typeof i != "function") {
          if (dh(i || n) === null) continue;
          break;
        }
        var s = ss(n);
        s !== null && (t.splice(e, 3), e -= 3, of(s, {
          pending: true,
          data: a,
          method: n.method,
          action: i
        }, i, a));
      }
    }));
  }
  function Ja(t) {
    function e(l) {
      return oo(l, t);
    }
    ai !== null && oo(ai, t), si !== null && oo(si, t), ri !== null && oo(ri, t), pr.forEach(e), gr.forEach(e);
    for (var n = 0; n < qn.length; n++) {
      var i = qn[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < qn.length && (n = qn[0], n.blockedOn === null); ) n1(n), n.blockedOn === null && qn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null) for (i = 0; i < n.length; i += 3) {
      var a = n[i], s = n[i + 1], r = a[ae] || null;
      if (typeof s == "function") r || Xp(n);
      else if (r) {
        var o = null;
        if (s && s.hasAttribute("formAction")) {
          if (a = s, r = s[ae] || null) o = r.formAction;
          else if (dh(a) !== null) continue;
        } else o = r.action;
        typeof o == "function" ? n[i + 1] = o : (n.splice(i, 3), i -= 3), Xp(n);
      }
    }
  }
  function i1() {
    function t(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(r) {
            return a = r;
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
  function hh(t) {
    this._internalRoot = t;
  }
  nu.prototype.render = hh.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(M(409));
    var n = e.current, i = pe();
    Wb(n, i, t, e, null, null);
  };
  nu.prototype.unmount = hh.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Wb(t.current, 2, null, t, null, null), Wl(), e[as] = null;
    }
  };
  function nu(t) {
    this._internalRoot = t;
  }
  nu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = jv();
      t = {
        blockedOn: null,
        target: t,
        priority: e
      };
      for (var n = 0; n < qn.length && e !== 0 && e < qn[n].priority; n++) ;
      qn.splice(n, 0, t), n === 0 && n1(t);
    }
  };
  var Qp = vv.version;
  if (Qp !== "19.2.5") throw Error(M(527, Qp, "19.2.5"));
  et.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(M(188)) : (t = Object.keys(t).join(","), Error(M(268, t)));
    return t = iT(e), t = t !== null ? wv(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var RA = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uo.isDisabled && uo.supportsFiber) try {
      Dr = uo.inject(RA), he = uo;
    } catch {
    }
  }
  Pl.createRoot = function(t, e) {
    if (!bv(t)) throw Error(M(299));
    var n = false, i = "", a = K0, s = Z0, r = $0;
    return e != null && (e.unstable_strictMode === true && (n = true), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (s = e.onCaughtError), e.onRecoverableError !== void 0 && (r = e.onRecoverableError)), e = Ib(t, 1, false, null, null, n, i, null, a, s, r, i1), t[as] = e.current, oh(t), new hh(e);
  };
  Pl.hydrateRoot = function(t, e, n) {
    if (!bv(t)) throw Error(M(299));
    var i = false, a = "", s = K0, r = Z0, o = $0, l = null;
    return n != null && (n.unstable_strictMode === true && (i = true), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (o = n.onRecoverableError), n.formState !== void 0 && (l = n.formState)), e = Ib(t, 1, true, e, n ?? null, i, a, l, s, r, o, i1), e.context = Jb(null), n = e.current, i = pe(), i = Sd(i), a = ti(i), a.callback = null, ei(n, a, i), n = i, e.current.lanes = n, jr(e, n), sn(e), t[as] = e.current, oh(t), new nu(e);
  };
  Pl.version = "19.2.5";
  function a1() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a1);
    } catch (t) {
      console.error(t);
    }
  }
  a1(), nv.exports = Pl;
  var OA = nv.exports;
  let DA, NA, Fp, zA, _A;
  DA = "modulepreload";
  NA = function(t) {
    return "/amritaraj-nair-portfolio/" + t;
  };
  Fp = {};
  jA = function(e, n, i) {
    let a = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const r = document.querySelector("meta[property=csp-nonce]"), o = (r == null ? void 0 : r.nonce) || (r == null ? void 0 : r.getAttribute("nonce"));
      a = Promise.allSettled(n.map((l) => {
        if (l = NA(l), l in Fp) return;
        Fp[l] = true;
        const u = l.endsWith(".css"), c = u ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${c}`)) return;
        const f = document.createElement("link");
        if (f.rel = u ? "stylesheet" : DA, u || (f.as = "script"), f.crossOrigin = "", f.href = l, o && f.setAttribute("nonce", o), document.head.appendChild(f), u) return new Promise((h, d) => {
          f.addEventListener("load", h), f.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${l}`)));
        });
      }));
    }
    function s(r) {
      const o = new Event("vite:preloadError", {
        cancelable: true
      });
      if (o.payload = r, window.dispatchEvent(o), !o.defaultPrevented) throw r;
    }
    return a.then((r) => {
      for (const o of r || []) o.status === "rejected" && s(o.reason);
      return e().catch(s);
    });
  };
  zA = 1;
  _A = 1e6;
  let ac = 0;
  function LA() {
    return ac = (ac + 1) % Number.MAX_SAFE_INTEGER, ac.toString();
  }
  const sc = /* @__PURE__ */ new Map(), Kp = (t) => {
    if (sc.has(t)) return;
    const e = setTimeout(() => {
      sc.delete(t), Js({
        type: "REMOVE_TOAST",
        toastId: t
      });
    }, _A);
    sc.set(t, e);
  }, VA = (t, e) => {
    switch (e.type) {
      case "ADD_TOAST":
        return {
          ...t,
          toasts: [
            e.toast,
            ...t.toasts
          ].slice(0, zA)
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
        return n ? Kp(n) : t.toasts.forEach((i) => {
          Kp(i.id);
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
  }, Bo = [];
  let Uo = {
    toasts: []
  };
  function Js(t) {
    Uo = VA(Uo, t), Bo.forEach((e) => {
      e(Uo);
    });
  }
  function BA({ ...t }) {
    const e = LA(), n = (a) => Js({
      type: "UPDATE_TOAST",
      toast: {
        ...a,
        id: e
      }
    }), i = () => Js({
      type: "DISMISS_TOAST",
      toastId: e
    });
    return Js({
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
  function s1() {
    const [t, e] = b.useState(Uo);
    return b.useEffect(() => (Bo.push(e), () => {
      const n = Bo.indexOf(e);
      n > -1 && Bo.splice(n, 1);
    }), [
      t
    ]), {
      ...t,
      toast: BA,
      dismiss: (n) => Js({
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
  function Zp(t, e) {
    if (typeof t == "function") return t(e);
    t != null && (t.current = e);
  }
  function r1(...t) {
    return (e) => {
      let n = false;
      const i = t.map((a) => {
        const s = Zp(a, e);
        return !n && typeof s == "function" && (n = true), s;
      });
      if (n) return () => {
        for (let a = 0; a < i.length; a++) {
          const s = i[a];
          typeof s == "function" ? s() : Zp(t[a], null);
        }
      };
    };
  }
  function Ye(...t) {
    return b.useCallback(r1(...t), t);
  }
  function iu(t, e = []) {
    let n = [];
    function i(s, r) {
      const o = b.createContext(r), l = n.length;
      n = [
        ...n,
        r
      ];
      const u = (f) => {
        var _a5;
        const { scope: h, children: d, ...v } = f, y = ((_a5 = h == null ? void 0 : h[t]) == null ? void 0 : _a5[l]) || o, x = b.useMemo(() => v, Object.values(v));
        return w.jsx(y.Provider, {
          value: x,
          children: d
        });
      };
      u.displayName = s + "Provider";
      function c(f, h) {
        var _a5;
        const d = ((_a5 = h == null ? void 0 : h[t]) == null ? void 0 : _a5[l]) || o, v = b.useContext(d);
        if (v) return v;
        if (r !== void 0) return r;
        throw new Error(`\`${f}\` must be used within \`${s}\``);
      }
      return [
        u,
        c
      ];
    }
    const a = () => {
      const s = n.map((r) => b.createContext(r));
      return function(o) {
        const l = (o == null ? void 0 : o[t]) || s;
        return b.useMemo(() => ({
          [`__scope${t}`]: {
            ...o,
            [t]: l
          }
        }), [
          o,
          l
        ]);
      };
    };
    return a.scopeName = t, [
      i,
      UA(a, ...e)
    ];
  }
  function UA(...t) {
    const e = t[0];
    if (t.length === 1) return e;
    const n = () => {
      const i = t.map((a) => ({
        useScope: a(),
        scopeName: a.scopeName
      }));
      return function(s) {
        const r = i.reduce((o, { useScope: l, scopeName: u }) => {
          const f = l(s)[`__scope${u}`];
          return {
            ...o,
            ...f
          };
        }, {});
        return b.useMemo(() => ({
          [`__scope${e.scopeName}`]: r
        }), [
          r
        ]);
      };
    };
    return n.scopeName = e.scopeName, n;
  }
  function wl(t) {
    const e = HA(t), n = b.forwardRef((i, a) => {
      const { children: s, ...r } = i, o = b.Children.toArray(s), l = o.find(YA);
      if (l) {
        const u = l.props.children, c = o.map((f) => f === l ? b.Children.count(u) > 1 ? b.Children.only(null) : b.isValidElement(u) ? u.props.children : null : f);
        return w.jsx(e, {
          ...r,
          ref: a,
          children: b.isValidElement(u) ? b.cloneElement(u, void 0, c) : null
        });
      }
      return w.jsx(e, {
        ...r,
        ref: a,
        children: s
      });
    });
    return n.displayName = `${t}.Slot`, n;
  }
  var PA = wl("Slot");
  function HA(t) {
    const e = b.forwardRef((n, i) => {
      const { children: a, ...s } = n;
      if (b.isValidElement(a)) {
        const r = qA(a), o = GA(s, a.props);
        return a.type !== b.Fragment && (o.ref = i ? r1(i, r) : r), b.cloneElement(a, o);
      }
      return b.Children.count(a) > 1 ? b.Children.only(null) : null;
    });
    return e.displayName = `${t}.SlotClone`, e;
  }
  var o1 = Symbol("radix.slottable");
  function kA(t) {
    const e = ({ children: n }) => w.jsx(w.Fragment, {
      children: n
    });
    return e.displayName = `${t}.Slottable`, e.__radixId = o1, e;
  }
  function YA(t) {
    return b.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === o1;
  }
  function GA(t, e) {
    const n = {
      ...e
    };
    for (const i in e) {
      const a = t[i], s = e[i];
      /^on[A-Z]/.test(i) ? a && s ? n[i] = (...o) => {
        const l = s(...o);
        return a(...o), l;
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
  function qA(t) {
    var _a5, _b3;
    let e = (_a5 = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : _a5.get, n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (_b3 = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : _b3.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
  }
  function XA(t) {
    const e = t + "CollectionProvider", [n, i] = iu(e), [a, s] = n(e, {
      collectionRef: {
        current: null
      },
      itemMap: /* @__PURE__ */ new Map()
    }), r = (y) => {
      const { scope: x, children: p } = y, m = _.useRef(null), g = _.useRef(/* @__PURE__ */ new Map()).current;
      return w.jsx(a, {
        scope: x,
        itemMap: g,
        collectionRef: m,
        children: p
      });
    };
    r.displayName = e;
    const o = t + "CollectionSlot", l = wl(o), u = _.forwardRef((y, x) => {
      const { scope: p, children: m } = y, g = s(o, p), S = Ye(x, g.collectionRef);
      return w.jsx(l, {
        ref: S,
        children: m
      });
    });
    u.displayName = o;
    const c = t + "CollectionItemSlot", f = "data-radix-collection-item", h = wl(c), d = _.forwardRef((y, x) => {
      const { scope: p, children: m, ...g } = y, S = _.useRef(null), T = Ye(x, S), A = s(c, p);
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
      const x = s(t + "CollectionConsumer", y);
      return _.useCallback(() => {
        const m = x.collectionRef.current;
        if (!m) return [];
        const g = Array.from(m.querySelectorAll(`[${f}]`));
        return Array.from(x.itemMap.values()).sort((A, E) => g.indexOf(A.ref.current) - g.indexOf(E.ref.current));
      }, [
        x.collectionRef,
        x.itemMap
      ]);
    }
    return [
      {
        Provider: r,
        Slot: u,
        ItemSlot: d
      },
      v,
      i
    ];
  }
  var QA = [
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
  ], re = QA.reduce((t, e) => {
    const n = wl(`Primitive.${e}`), i = b.forwardRef((a, s) => {
      const { asChild: r, ...o } = a, l = r ? n : e;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), w.jsx(l, {
        ...o,
        ref: s
      });
    });
    return i.displayName = `Primitive.${e}`, {
      ...t,
      [e]: i
    };
  }, {});
  function l1(t, e) {
    t && Rr.flushSync(() => t.dispatchEvent(e));
  }
  function di(t) {
    const e = b.useRef(t);
    return b.useEffect(() => {
      e.current = t;
    }), b.useMemo(() => (...n) => {
      var _a5;
      return (_a5 = e.current) == null ? void 0 : _a5.call(e, ...n);
    }, []);
  }
  function FA(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = di(t);
    b.useEffect(() => {
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
  var KA = "DismissableLayer", Rf = "dismissableLayer.update", ZA = "dismissableLayer.pointerDownOutside", $A = "dismissableLayer.focusOutside", $p, u1 = b.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  }), mh = b.forwardRef((t, e) => {
    const { disableOutsidePointerEvents: n = false, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: r, onDismiss: o, ...l } = t, u = b.useContext(u1), [c, f] = b.useState(null), h = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, d] = b.useState({}), v = Ye(e, (E) => f(E)), y = Array.from(u.layers), [x] = [
      ...u.layersWithOutsidePointerEventsDisabled
    ].slice(-1), p = y.indexOf(x), m = c ? y.indexOf(c) : -1, g = u.layersWithOutsidePointerEventsDisabled.size > 0, S = m >= p, T = JA((E) => {
      const C = E.target, j = [
        ...u.branches
      ].some((z) => z.contains(C));
      !S || j || (a == null ? void 0 : a(E), r == null ? void 0 : r(E), E.defaultPrevented || (o == null ? void 0 : o()));
    }, h), A = WA((E) => {
      const C = E.target;
      [
        ...u.branches
      ].some((z) => z.contains(C)) || (s == null ? void 0 : s(E), r == null ? void 0 : r(E), E.defaultPrevented || (o == null ? void 0 : o()));
    }, h);
    return FA((E) => {
      m === u.layers.size - 1 && (i == null ? void 0 : i(E), !E.defaultPrevented && o && (E.preventDefault(), o()));
    }, h), b.useEffect(() => {
      if (c) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && ($p = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Ip(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = $p);
      };
    }, [
      c,
      h,
      n,
      u
    ]), b.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Ip());
    }, [
      c,
      u
    ]), b.useEffect(() => {
      const E = () => d({});
      return document.addEventListener(Rf, E), () => document.removeEventListener(Rf, E);
    }, []), w.jsx(re.div, {
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
  mh.displayName = KA;
  var IA = "DismissableLayerBranch", c1 = b.forwardRef((t, e) => {
    const n = b.useContext(u1), i = b.useRef(null), a = Ye(e, i);
    return b.useEffect(() => {
      const s = i.current;
      if (s) return n.branches.add(s), () => {
        n.branches.delete(s);
      };
    }, [
      n.branches
    ]), w.jsx(re.div, {
      ...t,
      ref: a
    });
  });
  c1.displayName = IA;
  function JA(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = di(t), i = b.useRef(false), a = b.useRef(() => {
    });
    return b.useEffect(() => {
      const s = (o) => {
        if (o.target && !i.current) {
          let l = function() {
            f1(ZA, n, u, {
              discrete: true
            });
          };
          const u = {
            originalEvent: o
          };
          o.pointerType === "touch" ? (e.removeEventListener("click", a.current), a.current = l, e.addEventListener("click", a.current, {
            once: true
          })) : l();
        } else e.removeEventListener("click", a.current);
        i.current = false;
      }, r = window.setTimeout(() => {
        e.addEventListener("pointerdown", s);
      }, 0);
      return () => {
        window.clearTimeout(r), e.removeEventListener("pointerdown", s), e.removeEventListener("click", a.current);
      };
    }, [
      e,
      n
    ]), {
      onPointerDownCapture: () => i.current = true
    };
  }
  function WA(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = di(t), i = b.useRef(false);
    return b.useEffect(() => {
      const a = (s) => {
        s.target && !i.current && f1($A, n, {
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
  function Ip() {
    const t = new CustomEvent(Rf);
    document.dispatchEvent(t);
  }
  function f1(t, e, n, { discrete: i }) {
    const a = n.originalEvent.target, s = new CustomEvent(t, {
      bubbles: false,
      cancelable: true,
      detail: n
    });
    e && a.addEventListener(t, e, {
      once: true
    }), i ? l1(a, s) : a.dispatchEvent(s);
  }
  var tC = mh, eC = c1, hi = (globalThis == null ? void 0 : globalThis.document) ? b.useLayoutEffect : () => {
  }, nC = "Portal", d1 = b.forwardRef((t, e) => {
    var _a5;
    const { container: n, ...i } = t, [a, s] = b.useState(false);
    hi(() => s(true), []);
    const r = n || a && ((_a5 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a5.body);
    return r ? yv.createPortal(w.jsx(re.div, {
      ...i,
      ref: e
    }), r) : null;
  });
  d1.displayName = nC;
  function iC(t, e) {
    return b.useReducer((n, i) => e[n][i] ?? n, t);
  }
  var ph = (t) => {
    const { present: e, children: n } = t, i = aC(e), a = typeof n == "function" ? n({
      present: i.isPresent
    }) : b.Children.only(n), s = Ye(i.ref, sC(a));
    return typeof n == "function" || i.isPresent ? b.cloneElement(a, {
      ref: s
    }) : null;
  };
  ph.displayName = "Presence";
  function aC(t) {
    const [e, n] = b.useState(), i = b.useRef(null), a = b.useRef(t), s = b.useRef("none"), r = t ? "mounted" : "unmounted", [o, l] = iC(r, {
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
    return b.useEffect(() => {
      const u = co(i.current);
      s.current = o === "mounted" ? u : "none";
    }, [
      o
    ]), hi(() => {
      const u = i.current, c = a.current;
      if (c !== t) {
        const h = s.current, d = co(u);
        t ? l("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && h !== d ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
      }
    }, [
      t,
      l
    ]), hi(() => {
      if (e) {
        let u;
        const c = e.ownerDocument.defaultView ?? window, f = (d) => {
          const y = co(i.current).includes(d.animationName);
          if (d.target === e && y && (l("ANIMATION_END"), !a.current)) {
            const x = e.style.animationFillMode;
            e.style.animationFillMode = "forwards", u = c.setTimeout(() => {
              e.style.animationFillMode === "forwards" && (e.style.animationFillMode = x);
            });
          }
        }, h = (d) => {
          d.target === e && (s.current = co(i.current));
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
      ].includes(o),
      ref: b.useCallback((u) => {
        i.current = u ? getComputedStyle(u) : null, n(u);
      }, [])
    };
  }
  function co(t) {
    return (t == null ? void 0 : t.animationName) || "none";
  }
  function sC(t) {
    var _a5, _b3;
    let e = (_a5 = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : _a5.get, n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (_b3 = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : _b3.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
  }
  var rC = hv[" useInsertionEffect ".trim().toString()] || hi;
  function oC({ prop: t, defaultProp: e, onChange: n = () => {
  }, caller: i }) {
    const [a, s, r] = lC({
      defaultProp: e,
      onChange: n
    }), o = t !== void 0, l = o ? t : a;
    {
      const c = b.useRef(t !== void 0);
      b.useEffect(() => {
        const f = c.current;
        f !== o && console.warn(`${i} is changing from ${f ? "controlled" : "uncontrolled"} to ${o ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = o;
      }, [
        o,
        i
      ]);
    }
    const u = b.useCallback((c) => {
      var _a5;
      if (o) {
        const f = uC(c) ? c(t) : c;
        f !== t && ((_a5 = r.current) == null ? void 0 : _a5.call(r, f));
      } else s(c);
    }, [
      o,
      t,
      s,
      r
    ]);
    return [
      l,
      u
    ];
  }
  function lC({ defaultProp: t, onChange: e }) {
    const [n, i] = b.useState(t), a = b.useRef(n), s = b.useRef(e);
    return rC(() => {
      s.current = e;
    }, [
      e
    ]), b.useEffect(() => {
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
  function uC(t) {
    return typeof t == "function";
  }
  var cC = Object.freeze({
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
  }), fC = "VisuallyHidden", au = b.forwardRef((t, e) => w.jsx(re.span, {
    ...t,
    ref: e,
    style: {
      ...cC,
      ...t.style
    }
  }));
  au.displayName = fC;
  var dC = au, gh = "ToastProvider", [yh, hC, mC] = XA("Toast"), [h1, yj] = iu("Toast", [
    mC
  ]), [pC, su] = h1(gh), m1 = (t) => {
    const { __scopeToast: e, label: n = "Notification", duration: i = 5e3, swipeDirection: a = "right", swipeThreshold: s = 50, children: r } = t, [o, l] = b.useState(null), [u, c] = b.useState(0), f = b.useRef(false), h = b.useRef(false);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${gh}\`. Expected non-empty \`string\`.`), w.jsx(yh.Provider, {
      scope: e,
      children: w.jsx(pC, {
        scope: e,
        label: n,
        duration: i,
        swipeDirection: a,
        swipeThreshold: s,
        toastCount: u,
        viewport: o,
        onViewportChange: l,
        onToastAdd: b.useCallback(() => c((d) => d + 1), []),
        onToastRemove: b.useCallback(() => c((d) => d - 1), []),
        isFocusedToastEscapeKeyDownRef: f,
        isClosePausedRef: h,
        children: r
      })
    });
  };
  m1.displayName = gh;
  var p1 = "ToastViewport", gC = [
    "F8"
  ], Of = "toast.viewportPause", Df = "toast.viewportResume", g1 = b.forwardRef((t, e) => {
    const { __scopeToast: n, hotkey: i = gC, label: a = "Notifications ({hotkey})", ...s } = t, r = su(p1, n), o = hC(n), l = b.useRef(null), u = b.useRef(null), c = b.useRef(null), f = b.useRef(null), h = Ye(e, f, r.onViewportChange), d = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = r.toastCount > 0;
    b.useEffect(() => {
      const x = (p) => {
        var _a5;
        i.length !== 0 && i.every((g) => p[g] || p.code === g) && ((_a5 = f.current) == null ? void 0 : _a5.focus());
      };
      return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
    }, [
      i
    ]), b.useEffect(() => {
      const x = l.current, p = f.current;
      if (v && x && p) {
        const m = () => {
          if (!r.isClosePausedRef.current) {
            const A = new CustomEvent(Of);
            p.dispatchEvent(A), r.isClosePausedRef.current = true;
          }
        }, g = () => {
          if (r.isClosePausedRef.current) {
            const A = new CustomEvent(Df);
            p.dispatchEvent(A), r.isClosePausedRef.current = false;
          }
        }, S = (A) => {
          !x.contains(A.relatedTarget) && g();
        }, T = () => {
          x.contains(document.activeElement) || g();
        };
        return x.addEventListener("focusin", m), x.addEventListener("focusout", S), x.addEventListener("pointermove", m), x.addEventListener("pointerleave", T), window.addEventListener("blur", m), window.addEventListener("focus", g), () => {
          x.removeEventListener("focusin", m), x.removeEventListener("focusout", S), x.removeEventListener("pointermove", m), x.removeEventListener("pointerleave", T), window.removeEventListener("blur", m), window.removeEventListener("focus", g);
        };
      }
    }, [
      v,
      r.isClosePausedRef
    ]);
    const y = b.useCallback(({ tabbingDirection: x }) => {
      const m = o().map((g) => {
        const S = g.ref.current, T = [
          S,
          ...OC(S)
        ];
        return x === "forwards" ? T : T.reverse();
      });
      return (x === "forwards" ? m.reverse() : m).flat();
    }, [
      o
    ]);
    return b.useEffect(() => {
      const x = f.current;
      if (x) {
        const p = (m) => {
          var _a5, _b3, _c3;
          const g = m.altKey || m.ctrlKey || m.metaKey;
          if (m.key === "Tab" && !g) {
            const T = document.activeElement, A = m.shiftKey;
            if (m.target === x && A) {
              (_a5 = u.current) == null ? void 0 : _a5.focus();
              return;
            }
            const j = y({
              tabbingDirection: A ? "backwards" : "forwards"
            }), z = j.findIndex((P) => P === T);
            rc(j.slice(z + 1)) ? m.preventDefault() : A ? (_b3 = u.current) == null ? void 0 : _b3.focus() : (_c3 = c.current) == null ? void 0 : _c3.focus();
          }
        };
        return x.addEventListener("keydown", p), () => x.removeEventListener("keydown", p);
      }
    }, [
      o,
      y
    ]), w.jsxs(eC, {
      ref: l,
      role: "region",
      "aria-label": a.replace("{hotkey}", d),
      tabIndex: -1,
      style: {
        pointerEvents: v ? void 0 : "none"
      },
      children: [
        v && w.jsx(Nf, {
          ref: u,
          onFocusFromOutsideViewport: () => {
            const x = y({
              tabbingDirection: "forwards"
            });
            rc(x);
          }
        }),
        w.jsx(yh.Slot, {
          scope: n,
          children: w.jsx(re.ol, {
            tabIndex: -1,
            ...s,
            ref: h
          })
        }),
        v && w.jsx(Nf, {
          ref: c,
          onFocusFromOutsideViewport: () => {
            const x = y({
              tabbingDirection: "backwards"
            });
            rc(x);
          }
        })
      ]
    });
  });
  g1.displayName = p1;
  var y1 = "ToastFocusProxy", Nf = b.forwardRef((t, e) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: i, ...a } = t, s = su(y1, n);
    return w.jsx(au, {
      "aria-hidden": true,
      tabIndex: 0,
      ...a,
      ref: e,
      style: {
        position: "fixed"
      },
      onFocus: (r) => {
        var _a5;
        const o = r.relatedTarget;
        !((_a5 = s.viewport) == null ? void 0 : _a5.contains(o)) && i();
      }
    });
  });
  Nf.displayName = y1;
  var kr = "Toast", yC = "toast.swipeStart", vC = "toast.swipeMove", bC = "toast.swipeCancel", xC = "toast.swipeEnd", v1 = b.forwardRef((t, e) => {
    const { forceMount: n, open: i, defaultOpen: a, onOpenChange: s, ...r } = t, [o, l] = oC({
      prop: i,
      defaultProp: a ?? true,
      onChange: s,
      caller: kr
    });
    return w.jsx(ph, {
      present: n || o,
      children: w.jsx(TC, {
        open: o,
        ...r,
        ref: e,
        onClose: () => l(false),
        onPause: di(t.onPause),
        onResume: di(t.onResume),
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
  v1.displayName = kr;
  var [SC, wC] = h1(kr, {
    onClose() {
    }
  }), TC = b.forwardRef((t, e) => {
    const { __scopeToast: n, type: i = "foreground", duration: a, open: s, onClose: r, onEscapeKeyDown: o, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: f, onSwipeCancel: h, onSwipeEnd: d, ...v } = t, y = su(kr, n), [x, p] = b.useState(null), m = Ye(e, (L) => p(L)), g = b.useRef(null), S = b.useRef(null), T = a || y.duration, A = b.useRef(0), E = b.useRef(T), C = b.useRef(0), { onToastAdd: j, onToastRemove: z } = y, P = di(() => {
      var _a5;
      (x == null ? void 0 : x.contains(document.activeElement)) && ((_a5 = y.viewport) == null ? void 0 : _a5.focus()), r();
    }), V = b.useCallback((L) => {
      !L || L === 1 / 0 || (window.clearTimeout(C.current), A.current = (/* @__PURE__ */ new Date()).getTime(), C.current = window.setTimeout(P, L));
    }, [
      P
    ]);
    b.useEffect(() => {
      const L = y.viewport;
      if (L) {
        const X = () => {
          V(E.current), u == null ? void 0 : u();
        }, R = () => {
          const D = (/* @__PURE__ */ new Date()).getTime() - A.current;
          E.current = E.current - D, window.clearTimeout(C.current), l == null ? void 0 : l();
        };
        return L.addEventListener(Of, R), L.addEventListener(Df, X), () => {
          L.removeEventListener(Of, R), L.removeEventListener(Df, X);
        };
      }
    }, [
      y.viewport,
      T,
      l,
      u,
      V
    ]), b.useEffect(() => {
      s && !y.isClosePausedRef.current && V(T);
    }, [
      s,
      T,
      y.isClosePausedRef,
      V
    ]), b.useEffect(() => (j(), () => z()), [
      j,
      z
    ]);
    const J = b.useMemo(() => x ? A1(x) : null, [
      x
    ]);
    return y.viewport ? w.jsxs(w.Fragment, {
      children: [
        J && w.jsx(EC, {
          __scopeToast: n,
          role: "status",
          "aria-live": i === "foreground" ? "assertive" : "polite",
          "aria-atomic": true,
          children: J
        }),
        w.jsx(SC, {
          scope: n,
          onClose: P,
          children: Rr.createPortal(w.jsx(yh.ItemSlot, {
            scope: n,
            children: w.jsx(tC, {
              asChild: true,
              onEscapeKeyDown: zt(o, () => {
                y.isFocusedToastEscapeKeyDownRef.current || P(), y.isFocusedToastEscapeKeyDownRef.current = false;
              }),
              children: w.jsx(re.li, {
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
                  L.key === "Escape" && (o == null ? void 0 : o(L.nativeEvent), L.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = true, P()));
                }),
                onPointerDown: zt(t.onPointerDown, (L) => {
                  L.button === 0 && (g.current = {
                    x: L.clientX,
                    y: L.clientY
                  });
                }),
                onPointerMove: zt(t.onPointerMove, (L) => {
                  if (!g.current) return;
                  const X = L.clientX - g.current.x, R = L.clientY - g.current.y, D = !!S.current, O = [
                    "left",
                    "right"
                  ].includes(y.swipeDirection), N = [
                    "left",
                    "up"
                  ].includes(y.swipeDirection) ? Math.min : Math.max, U = O ? N(0, X) : 0, ft = O ? 0 : N(0, R), Q = L.pointerType === "touch" ? 10 : 2, Z = {
                    x: U,
                    y: ft
                  }, $ = {
                    originalEvent: L,
                    delta: Z
                  };
                  D ? (S.current = Z, fo(vC, f, $, {
                    discrete: false
                  })) : Jp(Z, y.swipeDirection, Q) ? (S.current = Z, fo(yC, c, $, {
                    discrete: false
                  }), L.target.setPointerCapture(L.pointerId)) : (Math.abs(X) > Q || Math.abs(R) > Q) && (g.current = null);
                }),
                onPointerUp: zt(t.onPointerUp, (L) => {
                  const X = S.current, R = L.target;
                  if (R.hasPointerCapture(L.pointerId) && R.releasePointerCapture(L.pointerId), S.current = null, g.current = null, X) {
                    const D = L.currentTarget, O = {
                      originalEvent: L,
                      delta: X
                    };
                    Jp(X, y.swipeDirection, y.swipeThreshold) ? fo(xC, d, O, {
                      discrete: true
                    }) : fo(bC, h, O, {
                      discrete: true
                    }), D.addEventListener("click", (N) => N.preventDefault(), {
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
  }), EC = (t) => {
    const { __scopeToast: e, children: n, ...i } = t, a = su(kr, e), [s, r] = b.useState(false), [o, l] = b.useState(false);
    return MC(() => r(true)), b.useEffect(() => {
      const u = window.setTimeout(() => l(true), 1e3);
      return () => window.clearTimeout(u);
    }, []), o ? null : w.jsx(d1, {
      asChild: true,
      children: w.jsx(au, {
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
  }, AC = "ToastTitle", b1 = b.forwardRef((t, e) => {
    const { __scopeToast: n, ...i } = t;
    return w.jsx(re.div, {
      ...i,
      ref: e
    });
  });
  b1.displayName = AC;
  var CC = "ToastDescription", x1 = b.forwardRef((t, e) => {
    const { __scopeToast: n, ...i } = t;
    return w.jsx(re.div, {
      ...i,
      ref: e
    });
  });
  x1.displayName = CC;
  var S1 = "ToastAction", w1 = b.forwardRef((t, e) => {
    const { altText: n, ...i } = t;
    return n.trim() ? w.jsx(E1, {
      altText: n,
      asChild: true,
      children: w.jsx(vh, {
        ...i,
        ref: e
      })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${S1}\`. Expected non-empty \`string\`.`), null);
  });
  w1.displayName = S1;
  var T1 = "ToastClose", vh = b.forwardRef((t, e) => {
    const { __scopeToast: n, ...i } = t, a = wC(T1, n);
    return w.jsx(E1, {
      asChild: true,
      children: w.jsx(re.button, {
        type: "button",
        ...i,
        ref: e,
        onClick: zt(t.onClick, a.onClose)
      })
    });
  });
  vh.displayName = T1;
  var E1 = b.forwardRef((t, e) => {
    const { __scopeToast: n, altText: i, ...a } = t;
    return w.jsx(re.div, {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": i || void 0,
      ...a,
      ref: e
    });
  });
  function A1(t) {
    const e = [];
    return Array.from(t.childNodes).forEach((i) => {
      if (i.nodeType === i.TEXT_NODE && i.textContent && e.push(i.textContent), RC(i)) {
        const a = i.ariaHidden || i.hidden || i.style.display === "none", s = i.dataset.radixToastAnnounceExclude === "";
        if (!a) if (s) {
          const r = i.dataset.radixToastAnnounceAlt;
          r && e.push(r);
        } else e.push(...A1(i));
      }
    }), e;
  }
  function fo(t, e, n, { discrete: i }) {
    const a = n.originalEvent.currentTarget, s = new CustomEvent(t, {
      bubbles: true,
      cancelable: true,
      detail: n
    });
    e && a.addEventListener(t, e, {
      once: true
    }), i ? l1(a, s) : a.dispatchEvent(s);
  }
  var Jp = (t, e, n = 0) => {
    const i = Math.abs(t.x), a = Math.abs(t.y), s = i > a;
    return e === "left" || e === "right" ? s && i > n : !s && a > n;
  };
  function MC(t = () => {
  }) {
    const e = di(t);
    hi(() => {
      let n = 0, i = 0;
      return n = window.requestAnimationFrame(() => i = window.requestAnimationFrame(e)), () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(i);
      };
    }, [
      e
    ]);
  }
  function RC(t) {
    return t.nodeType === t.ELEMENT_NODE;
  }
  function OC(t) {
    const e = [], n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const a = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || a ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    for (; n.nextNode(); ) e.push(n.currentNode);
    return e;
  }
  function rc(t) {
    const e = document.activeElement;
    return t.some((n) => n === e ? true : (n.focus(), document.activeElement !== e));
  }
  var DC = m1, C1 = g1, M1 = v1, R1 = b1, O1 = x1, D1 = w1, N1 = vh;
  function j1(t) {
    var e, n, i = "";
    if (typeof t == "string" || typeof t == "number") i += t;
    else if (typeof t == "object") if (Array.isArray(t)) {
      var a = t.length;
      for (e = 0; e < a; e++) t[e] && (n = j1(t[e])) && (i && (i += " "), i += n);
    } else for (n in t) t[n] && (i && (i += " "), i += n);
    return i;
  }
  function z1() {
    for (var t, e, n = 0, i = "", a = arguments.length; n < a; n++) (t = arguments[n]) && (e = j1(t)) && (i && (i += " "), i += e);
    return i;
  }
  const Wp = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, tg = z1, _1 = (t, e) => (n) => {
    var i;
    if ((e == null ? void 0 : e.variants) == null) return tg(t, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const { variants: a, defaultVariants: s } = e, r = Object.keys(a).map((u) => {
      const c = n == null ? void 0 : n[u], f = s == null ? void 0 : s[u];
      if (c === null) return null;
      const h = Wp(c) || Wp(f);
      return a[u][h];
    }), o = n && Object.entries(n).reduce((u, c) => {
      let [f, h] = c;
      return h === void 0 || (u[f] = h), u;
    }, {}), l = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((u, c) => {
      let { class: f, className: h, ...d } = c;
      return Object.entries(d).every((v) => {
        let [y, x] = v;
        return Array.isArray(x) ? x.includes({
          ...s,
          ...o
        }[y]) : {
          ...s,
          ...o
        }[y] === x;
      }) ? [
        ...u,
        f,
        h
      ] : u;
    }, []);
    return tg(t, r, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  };
  const NC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), L1 = (...t) => t.filter((e, n, i) => !!e && e.trim() !== "" && i.indexOf(e) === n).join(" ").trim();
  var jC = {
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
  const zC = b.forwardRef(({ color: t = "currentColor", size: e = 24, strokeWidth: n = 2, absoluteStrokeWidth: i, className: a = "", children: s, iconNode: r, ...o }, l) => b.createElement("svg", {
    ref: l,
    ...jC,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(n) * 24 / Number(e) : n,
    className: L1("lucide", a),
    ...o
  }, [
    ...r.map(([u, c]) => b.createElement(u, c)),
    ...Array.isArray(s) ? s : [
      s
    ]
  ]));
  const rn = (t, e) => {
    const n = b.forwardRef(({ className: i, ...a }, s) => b.createElement(zC, {
      ref: s,
      iconNode: e,
      className: L1(`lucide-${NC(t)}`, i),
      ...a
    }));
    return n.displayName = `${t}`, n;
  };
  const _C = rn("ArrowLeft", [
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
  const eg = rn("Check", [
    [
      "path",
      {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
      }
    ]
  ]);
  const LC = rn("Copy", [
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
  const oc = rn("Download", [
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
  const VC = rn("Gamepad2", [
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
  const BC = rn("Link2", [
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
  const ng = rn("Linkedin", [
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
  const ig = rn("Mail", [
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
  const UC = rn("Share2", [
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
  const PC = rn("X", [
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
  ]), bh = "-", HC = (t) => {
    const e = YC(t), { conflictingClassGroups: n, conflictingClassGroupModifiers: i } = t;
    return {
      getClassGroupId: (r) => {
        const o = r.split(bh);
        return o[0] === "" && o.length !== 1 && o.shift(), V1(o, e) || kC(r);
      },
      getConflictingClassGroupIds: (r, o) => {
        const l = n[r] || [];
        return o && i[r] ? [
          ...l,
          ...i[r]
        ] : l;
      }
    };
  }, V1 = (t, e) => {
    var _a5;
    if (t.length === 0) return e.classGroupId;
    const n = t[0], i = e.nextPart.get(n), a = i ? V1(t.slice(1), i) : void 0;
    if (a) return a;
    if (e.validators.length === 0) return;
    const s = t.join(bh);
    return (_a5 = e.validators.find(({ validator: r }) => r(s))) == null ? void 0 : _a5.classGroupId;
  }, ag = /^\[(.+)\]$/, kC = (t) => {
    if (ag.test(t)) {
      const e = ag.exec(t)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  }, YC = (t) => {
    const { theme: e, prefix: n } = t, i = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    return qC(Object.entries(t.classGroups), n).forEach(([s, r]) => {
      jf(r, i, s, e);
    }), i;
  }, jf = (t, e, n, i) => {
    t.forEach((a) => {
      if (typeof a == "string") {
        const s = a === "" ? e : sg(e, a);
        s.classGroupId = n;
        return;
      }
      if (typeof a == "function") {
        if (GC(a)) {
          jf(a(i), e, n, i);
          return;
        }
        e.validators.push({
          validator: a,
          classGroupId: n
        });
        return;
      }
      Object.entries(a).forEach(([s, r]) => {
        jf(r, sg(e, s), n, i);
      });
    });
  }, sg = (t, e) => {
    let n = t;
    return e.split(bh).forEach((i) => {
      n.nextPart.has(i) || n.nextPart.set(i, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      }), n = n.nextPart.get(i);
    }), n;
  }, GC = (t) => t.isThemeGetter, qC = (t, e) => e ? t.map(([n, i]) => {
    const a = i.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([r, o]) => [
      e + r,
      o
    ])) : s);
    return [
      n,
      a
    ];
  }) : t, XC = (t) => {
    if (t < 1) return {
      get: () => {
      },
      set: () => {
      }
    };
    let e = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    const a = (s, r) => {
      n.set(s, r), e++, e > t && (e = 0, i = n, n = /* @__PURE__ */ new Map());
    };
    return {
      get(s) {
        let r = n.get(s);
        if (r !== void 0) return r;
        if ((r = i.get(s)) !== void 0) return a(s, r), r;
      },
      set(s, r) {
        n.has(s) ? n.set(s, r) : a(s, r);
      }
    };
  }, B1 = "!", QC = (t) => {
    const { separator: e, experimentalParseClassName: n } = t, i = e.length === 1, a = e[0], s = e.length, r = (o) => {
      const l = [];
      let u = 0, c = 0, f;
      for (let x = 0; x < o.length; x++) {
        let p = o[x];
        if (u === 0) {
          if (p === a && (i || o.slice(x, x + s) === e)) {
            l.push(o.slice(c, x)), c = x + s;
            continue;
          }
          if (p === "/") {
            f = x;
            continue;
          }
        }
        p === "[" ? u++ : p === "]" && u--;
      }
      const h = l.length === 0 ? o : o.substring(c), d = h.startsWith(B1), v = d ? h.substring(1) : h, y = f && f > c ? f - c : void 0;
      return {
        modifiers: l,
        hasImportantModifier: d,
        baseClassName: v,
        maybePostfixModifierPosition: y
      };
    };
    return n ? (o) => n({
      className: o,
      parseClassName: r
    }) : r;
  }, FC = (t) => {
    if (t.length <= 1) return t;
    const e = [];
    let n = [];
    return t.forEach((i) => {
      i[0] === "[" ? (e.push(...n.sort(), i), n = []) : n.push(i);
    }), e.push(...n.sort()), e;
  }, KC = (t) => ({
    cache: XC(t.cacheSize),
    parseClassName: QC(t),
    ...HC(t)
  }), ZC = /\s+/, $C = (t, e) => {
    const { parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: a } = e, s = [], r = t.trim().split(ZC);
    let o = "";
    for (let l = r.length - 1; l >= 0; l -= 1) {
      const u = r[l], { modifiers: c, hasImportantModifier: f, baseClassName: h, maybePostfixModifierPosition: d } = n(u);
      let v = !!d, y = i(v ? h.substring(0, d) : h);
      if (!y) {
        if (!v) {
          o = u + (o.length > 0 ? " " + o : o);
          continue;
        }
        if (y = i(h), !y) {
          o = u + (o.length > 0 ? " " + o : o);
          continue;
        }
        v = false;
      }
      const x = FC(c).join(":"), p = f ? x + B1 : x, m = p + y;
      if (s.includes(m)) continue;
      s.push(m);
      const g = a(y, v);
      for (let S = 0; S < g.length; ++S) {
        const T = g[S];
        s.push(p + T);
      }
      o = u + (o.length > 0 ? " " + o : o);
    }
    return o;
  };
  function IC() {
    let t = 0, e, n, i = "";
    for (; t < arguments.length; ) (e = arguments[t++]) && (n = U1(e)) && (i && (i += " "), i += n);
    return i;
  }
  const U1 = (t) => {
    if (typeof t == "string") return t;
    let e, n = "";
    for (let i = 0; i < t.length; i++) t[i] && (e = U1(t[i])) && (n && (n += " "), n += e);
    return n;
  };
  function JC(t, ...e) {
    let n, i, a, s = r;
    function r(l) {
      const u = e.reduce((c, f) => f(c), t());
      return n = KC(u), i = n.cache.get, a = n.cache.set, s = o, o(l);
    }
    function o(l) {
      const u = i(l);
      if (u) return u;
      const c = $C(l, n);
      return a(l, c), c;
    }
    return function() {
      return s(IC.apply(null, arguments));
    };
  }
  const ht = (t) => {
    const e = (n) => n[t] || [];
    return e.isThemeGetter = true, e;
  }, P1 = /^\[(?:([a-z-]+):)?(.+)\]$/i, WC = /^\d+\/\d+$/, t2 = /* @__PURE__ */ new Set([
    "px",
    "full",
    "screen"
  ]), e2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, n2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, i2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, a2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, s2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, dn = (t) => Pa(t) || t2.has(t) || WC.test(t), Vn = (t) => fs(t, "length", h2), Pa = (t) => !!t && !Number.isNaN(Number(t)), lc = (t) => fs(t, "number", Pa), Rs = (t) => !!t && Number.isInteger(Number(t)), r2 = (t) => t.endsWith("%") && Pa(t.slice(0, -1)), q = (t) => P1.test(t), Bn = (t) => e2.test(t), o2 = /* @__PURE__ */ new Set([
    "length",
    "size",
    "percentage"
  ]), l2 = (t) => fs(t, o2, H1), u2 = (t) => fs(t, "position", H1), c2 = /* @__PURE__ */ new Set([
    "image",
    "url"
  ]), f2 = (t) => fs(t, c2, p2), d2 = (t) => fs(t, "", m2), Os = () => true, fs = (t, e, n) => {
    const i = P1.exec(t);
    return i ? i[1] ? typeof e == "string" ? i[1] === e : e.has(i[1]) : n(i[2]) : false;
  }, h2 = (t) => n2.test(t) && !i2.test(t), H1 = () => false, m2 = (t) => a2.test(t), p2 = (t) => s2.test(t), g2 = () => {
    const t = ht("colors"), e = ht("spacing"), n = ht("blur"), i = ht("brightness"), a = ht("borderColor"), s = ht("borderRadius"), r = ht("borderSpacing"), o = ht("borderWidth"), l = ht("contrast"), u = ht("grayscale"), c = ht("hueRotate"), f = ht("invert"), h = ht("gap"), d = ht("gradientColorStops"), v = ht("gradientColorStopPositions"), y = ht("inset"), x = ht("margin"), p = ht("opacity"), m = ht("padding"), g = ht("saturate"), S = ht("scale"), T = ht("sepia"), A = ht("skew"), E = ht("space"), C = ht("translate"), j = () => [
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
      Pa,
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
    ], D = () => [
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
    ], O = () => [
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
      Pa,
      q
    ];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [
          Os
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
          r2,
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
              Rs,
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
              Rs,
              q
            ]
          }
        ],
        "grid-cols": [
          {
            "grid-cols": [
              Os
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
                  Rs,
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
              Os
            ]
          }
        ],
        "row-start-end": [
          {
            row: [
              "auto",
              {
                span: [
                  Rs,
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
              ...O()
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
              ...O(),
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
              ...O(),
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
              x
            ]
          }
        ],
        mx: [
          {
            mx: [
              x
            ]
          }
        ],
        my: [
          {
            my: [
              x
            ]
          }
        ],
        ms: [
          {
            ms: [
              x
            ]
          }
        ],
        me: [
          {
            me: [
              x
            ]
          }
        ],
        mt: [
          {
            mt: [
              x
            ]
          }
        ],
        mr: [
          {
            mr: [
              x
            ]
          }
        ],
        mb: [
          {
            mb: [
              x
            ]
          }
        ],
        ml: [
          {
            ml: [
              x
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
              lc
            ]
          }
        ],
        "font-family": [
          {
            font: [
              Os
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
              Pa,
              lc
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
              u2
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
              l2
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
              f2
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
              o
            ]
          }
        ],
        "border-w-x": [
          {
            "border-x": [
              o
            ]
          }
        ],
        "border-w-y": [
          {
            "border-y": [
              o
            ]
          }
        ],
        "border-w-s": [
          {
            "border-s": [
              o
            ]
          }
        ],
        "border-w-e": [
          {
            "border-e": [
              o
            ]
          }
        ],
        "border-w-t": [
          {
            "border-t": [
              o
            ]
          }
        ],
        "border-w-r": [
          {
            "border-r": [
              o
            ]
          }
        ],
        "border-w-b": [
          {
            "border-b": [
              o
            ]
          }
        ],
        "border-w-l": [
          {
            "border-l": [
              o
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
              o
            ]
          }
        ],
        "divide-x-reverse": [
          "divide-x-reverse"
        ],
        "divide-y": [
          {
            "divide-y": [
              o
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
              d2
            ]
          }
        ],
        "shadow-color": [
          {
            shadow: [
              Os
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
              ...D(),
              "plus-lighter",
              "plus-darker"
            ]
          }
        ],
        "bg-blend": [
          {
            "bg-blend": D()
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
              r
            ]
          }
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": [
              r
            ]
          }
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": [
              r
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
              Rs,
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
              lc
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
  }, y2 = JC(g2);
  function xi(...t) {
    return y2(z1(t));
  }
  const v2 = DC, k1 = b.forwardRef(({ className: t, ...e }, n) => w.jsx(C1, {
    ref: n,
    className: xi("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", t),
    ...e
  }));
  k1.displayName = C1.displayName;
  const b2 = _1("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }), Y1 = b.forwardRef(({ className: t, variant: e, ...n }, i) => w.jsx(M1, {
    ref: i,
    className: xi(b2({
      variant: e
    }), t),
    ...n
  }));
  Y1.displayName = M1.displayName;
  const x2 = b.forwardRef(({ className: t, ...e }, n) => w.jsx(D1, {
    ref: n,
    className: xi("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", t),
    ...e
  }));
  x2.displayName = D1.displayName;
  const G1 = b.forwardRef(({ className: t, ...e }, n) => w.jsx(N1, {
    ref: n,
    className: xi("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: w.jsx(PC, {
      className: "h-4 w-4"
    })
  }));
  G1.displayName = N1.displayName;
  const q1 = b.forwardRef(({ className: t, ...e }, n) => w.jsx(R1, {
    ref: n,
    className: xi("text-sm font-semibold", t),
    ...e
  }));
  q1.displayName = R1.displayName;
  const X1 = b.forwardRef(({ className: t, ...e }, n) => w.jsx(O1, {
    ref: n,
    className: xi("text-sm opacity-90", t),
    ...e
  }));
  X1.displayName = O1.displayName;
  function S2() {
    const { toasts: t } = s1();
    return w.jsxs(v2, {
      children: [
        t.map(function({ id: e, title: n, description: i, action: a, ...s }) {
          return w.jsxs(Y1, {
            ...s,
            children: [
              w.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && w.jsx(q1, {
                    children: n
                  }),
                  i && w.jsx(X1, {
                    children: i
                  })
                ]
              }),
              a,
              w.jsx(G1, {})
            ]
          }, e);
        }),
        w.jsx(k1, {})
      ]
    });
  }
  var rg = [
    "light",
    "dark"
  ], w2 = "(prefers-color-scheme: dark)", T2 = b.createContext(void 0), E2 = {
    setTheme: (t) => {
    },
    themes: []
  }, A2 = () => {
    var t;
    return (t = b.useContext(T2)) != null ? t : E2;
  };
  b.memo(({ forcedTheme: t, storageKey: e, attribute: n, enableSystem: i, enableColorScheme: a, defaultTheme: s, value: r, attrs: o, nonce: l }) => {
    let u = s === "system", c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${o.map((v) => `'${v}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = a ? rg.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", h = (v, y = false, x = true) => {
      let p = r ? r[v] : v, m = y ? v + "|| ''" : `'${p}'`, g = "";
      return a && x && !y && rg.includes(v) && (g += `d.style.colorScheme = '${v}';`), n === "class" ? y || p ? g += `c.add(${m})` : g += "null" : p && (g += `d[s](n,${m})`), g;
    }, d = t ? `!function(){${c}${h(t)}}()` : i ? `!function(){try{${c}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${u})){var t='${w2}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${r ? `var x=${JSON.stringify(r)};` : ""}${h(r ? "x[e]" : "e", true)}}${u ? "" : "else{" + h(s, false, false) + "}"}${f}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${e}');if(e){${r ? `var x=${JSON.stringify(r)};` : ""}${h(r ? "x[e]" : "e", true)}}else{${h(s, false, false)};}${f}}catch(t){}}();`;
    return b.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: {
        __html: d
      }
    });
  });
  var C2 = (t) => {
    switch (t) {
      case "success":
        return O2;
      case "info":
        return N2;
      case "warning":
        return D2;
      case "error":
        return j2;
      default:
        return null;
    }
  }, M2 = Array(12).fill(0), R2 = ({ visible: t, className: e }) => _.createElement("div", {
    className: [
      "sonner-loading-wrapper",
      e
    ].filter(Boolean).join(" "),
    "data-visible": t
  }, _.createElement("div", {
    className: "sonner-spinner"
  }, M2.map((n, i) => _.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${i}`
  })))), O2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })), D2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })), N2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })), j2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })), z2 = _.createElement("svg", {
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
  })), _2 = () => {
    let [t, e] = _.useState(document.hidden);
    return _.useEffect(() => {
      let n = () => {
        e(document.hidden);
      };
      return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
    }, []), t;
  }, zf = 1, L2 = class {
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
        let { message: n, ...i } = t, a = typeof (t == null ? void 0 : t.id) == "number" || ((e = t.id) == null ? void 0 : e.length) > 0 ? t.id : zf++, s = this.toasts.find((o) => o.id === a), r = t.dismissible === void 0 ? true : t.dismissible;
        return this.dismissedToasts.has(a) && this.dismissedToasts.delete(a), s ? this.toasts = this.toasts.map((o) => o.id === a ? (this.publish({
          ...o,
          ...t,
          id: a,
          title: n
        }), {
          ...o,
          ...t,
          id: a,
          dismissible: r,
          title: n
        }) : o) : this.addToast({
          title: n,
          ...i,
          dismissible: r,
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
        let i = t instanceof Promise ? t : t(), a = n !== void 0, s, r = i.then(async (l) => {
          if (s = [
            "resolve",
            l
          ], _.isValidElement(l)) a = false, this.create({
            id: n,
            type: "default",
            message: l
          });
          else if (B2(l) && !l.ok) {
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
        }), o = () => new Promise((l, u) => r.then(() => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
        return typeof n != "string" && typeof n != "number" ? {
          unwrap: o
        } : Object.assign(n, {
          unwrap: o
        });
      }, this.custom = (t, e) => {
        let n = (e == null ? void 0 : e.id) || zf++;
        return this.create({
          jsx: t(n),
          id: n,
          ...e
        }), n;
      }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
    }
  }, ne = new L2(), V2 = (t, e) => {
    let n = (e == null ? void 0 : e.id) || zf++;
    return ne.addToast({
      title: t,
      ...e,
      id: n
    }), n;
  }, B2 = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number", U2 = V2, P2 = () => ne.toasts, H2 = () => ne.getActiveToasts();
  Object.assign(U2, {
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
    getHistory: P2,
    getToasts: H2
  });
  function k2(t, { insertAt: e } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", e === "top" && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
  }
  k2(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
  function ho(t) {
    return t.label !== void 0;
  }
  var Y2 = 3, G2 = "32px", q2 = "16px", og = 4e3, X2 = 356, Q2 = 14, F2 = 20, K2 = 200;
  function Be(...t) {
    return t.filter(Boolean).join(" ");
  }
  function Z2(t) {
    let [e, n] = t.split("-"), i = [];
    return e && i.push(e), n && i.push(n), i;
  }
  var $2 = (t) => {
    var e, n, i, a, s, r, o, l, u, c, f;
    let { invert: h, toast: d, unstyled: v, interacting: y, setHeights: x, visibleToasts: p, heights: m, index: g, toasts: S, expanded: T, removeToast: A, defaultRichColors: E, closeButton: C, style: j, cancelButtonStyle: z, actionButtonStyle: P, className: V = "", descriptionClassName: J = "", duration: L, position: X, gap: R, loadingIcon: D, expandByDefault: O, classNames: N, icons: U, closeButtonAriaLabel: ft = "Close toast", pauseWhenPageIsHidden: Q } = t, [Z, $] = _.useState(null), [Tt, Nn] = _.useState(null), [at, na] = _.useState(false), [Ei, ia] = _.useState(false), [Ai, bs] = _.useState(false), [Ci, Sw] = _.useState(false), [ww, dm] = _.useState(false), [Tw, vu] = _.useState(0), [Ew, hm] = _.useState(0), xs = _.useRef(d.duration || L || og), mm = _.useRef(null), Mi = _.useRef(null), Aw = g === 0, Cw = g + 1 <= p, be = d.type, aa = d.dismissible !== false, Mw = d.className || "", Rw = d.descriptionClassName || "", Fr = _.useMemo(() => m.findIndex((k) => k.toastId === d.id) || 0, [
      m,
      d.id
    ]), Ow = _.useMemo(() => {
      var k;
      return (k = d.closeButton) != null ? k : C;
    }, [
      d.closeButton,
      C
    ]), pm = _.useMemo(() => d.duration || L || og, [
      d.duration,
      L
    ]), bu = _.useRef(0), sa = _.useRef(0), gm = _.useRef(0), ra = _.useRef(null), [Dw, Nw] = X.split("-"), ym = _.useMemo(() => m.reduce((k, st, yt) => yt >= Fr ? k : k + st.height, 0), [
      m,
      Fr
    ]), vm = _2(), jw = d.invert || h, xu = be === "loading";
    sa.current = _.useMemo(() => Fr * R + ym, [
      Fr,
      ym
    ]), _.useEffect(() => {
      xs.current = pm;
    }, [
      pm
    ]), _.useEffect(() => {
      na(true);
    }, []), _.useEffect(() => {
      let k = Mi.current;
      if (k) {
        let st = k.getBoundingClientRect().height;
        return hm(st), x((yt) => [
          {
            toastId: d.id,
            height: st,
            position: d.position
          },
          ...yt
        ]), () => x((yt) => yt.filter((ze) => ze.toastId !== d.id));
      }
    }, [
      x,
      d.id
    ]), _.useLayoutEffect(() => {
      if (!at) return;
      let k = Mi.current, st = k.style.height;
      k.style.height = "auto";
      let yt = k.getBoundingClientRect().height;
      k.style.height = st, hm(yt), x((ze) => ze.find((_e8) => _e8.toastId === d.id) ? ze.map((_e8) => _e8.toastId === d.id ? {
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
      x,
      d.id
    ]);
    let jn = _.useCallback(() => {
      ia(true), vu(sa.current), x((k) => k.filter((st) => st.toastId !== d.id)), setTimeout(() => {
        A(d);
      }, K2);
    }, [
      d,
      A,
      x,
      sa
    ]);
    _.useEffect(() => {
      if (d.promise && be === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
      let k;
      return T || y || Q && vm ? (() => {
        if (gm.current < bu.current) {
          let st = (/* @__PURE__ */ new Date()).getTime() - bu.current;
          xs.current = xs.current - st;
        }
        gm.current = (/* @__PURE__ */ new Date()).getTime();
      })() : xs.current !== 1 / 0 && (bu.current = (/* @__PURE__ */ new Date()).getTime(), k = setTimeout(() => {
        var st;
        (st = d.onAutoClose) == null || st.call(d, d), jn();
      }, xs.current)), () => clearTimeout(k);
    }, [
      T,
      y,
      d,
      be,
      Q,
      vm,
      jn
    ]), _.useEffect(() => {
      d.delete && jn();
    }, [
      jn,
      d.delete
    ]);
    function zw() {
      var k, st, yt;
      return U != null && U.loading ? _.createElement("div", {
        className: Be(N == null ? void 0 : N.loader, (k = d == null ? void 0 : d.classNames) == null ? void 0 : k.loader, "sonner-loader"),
        "data-visible": be === "loading"
      }, U.loading) : D ? _.createElement("div", {
        className: Be(N == null ? void 0 : N.loader, (st = d == null ? void 0 : d.classNames) == null ? void 0 : st.loader, "sonner-loader"),
        "data-visible": be === "loading"
      }, D) : _.createElement(R2, {
        className: Be(N == null ? void 0 : N.loader, (yt = d == null ? void 0 : d.classNames) == null ? void 0 : yt.loader),
        visible: be === "loading"
      });
    }
    return _.createElement("li", {
      tabIndex: 0,
      ref: Mi,
      className: Be(V, Mw, N == null ? void 0 : N.toast, (e = d == null ? void 0 : d.classNames) == null ? void 0 : e.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[be], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[be]),
      "data-sonner-toast": "",
      "data-rich-colors": (i = d.richColors) != null ? i : E,
      "data-styled": !(d.jsx || d.unstyled || v),
      "data-mounted": at,
      "data-promise": !!d.promise,
      "data-swiped": ww,
      "data-removed": Ei,
      "data-visible": Cw,
      "data-y-position": Dw,
      "data-x-position": Nw,
      "data-index": g,
      "data-front": Aw,
      "data-swiping": Ai,
      "data-dismissible": aa,
      "data-type": be,
      "data-invert": jw,
      "data-swipe-out": Ci,
      "data-swipe-direction": Tt,
      "data-expanded": !!(T || O && at),
      style: {
        "--index": g,
        "--toasts-before": g,
        "--z-index": S.length - g,
        "--offset": `${Ei ? Tw : sa.current}px`,
        "--initial-height": O ? "auto" : `${Ew}px`,
        ...j,
        ...d.style
      },
      onDragEnd: () => {
        bs(false), $(null), ra.current = null;
      },
      onPointerDown: (k) => {
        xu || !aa || (mm.current = /* @__PURE__ */ new Date(), vu(sa.current), k.target.setPointerCapture(k.pointerId), k.target.tagName !== "BUTTON" && (bs(true), ra.current = {
          x: k.clientX,
          y: k.clientY
        }));
      },
      onPointerUp: () => {
        var k, st, yt, ze;
        if (Ci || !aa) return;
        ra.current = null;
        let _e8 = Number(((k = Mi.current) == null ? void 0 : k.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), zn = Number(((st = Mi.current) == null ? void 0 : st.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ri = (/* @__PURE__ */ new Date()).getTime() - ((yt = mm.current) == null ? void 0 : yt.getTime()), Le = Z === "x" ? _e8 : zn, _n7 = Math.abs(Le) / Ri;
        if (Math.abs(Le) >= F2 || _n7 > 0.11) {
          vu(sa.current), (ze = d.onDismiss) == null || ze.call(d, d), Nn(Z === "x" ? _e8 > 0 ? "right" : "left" : zn > 0 ? "down" : "up"), jn(), Sw(true), dm(false);
          return;
        }
        bs(false), $(null);
      },
      onPointerMove: (k) => {
        var st, yt, ze, _e8;
        if (!ra.current || !aa || ((st = window.getSelection()) == null ? void 0 : st.toString().length) > 0) return;
        let zn = k.clientY - ra.current.y, Ri = k.clientX - ra.current.x, Le = (yt = t.swipeDirections) != null ? yt : Z2(X);
        !Z && (Math.abs(Ri) > 1 || Math.abs(zn) > 1) && $(Math.abs(Ri) > Math.abs(zn) ? "x" : "y");
        let _n7 = {
          x: 0,
          y: 0
        };
        Z === "y" ? (Le.includes("top") || Le.includes("bottom")) && (Le.includes("top") && zn < 0 || Le.includes("bottom") && zn > 0) && (_n7.y = zn) : Z === "x" && (Le.includes("left") || Le.includes("right")) && (Le.includes("left") && Ri < 0 || Le.includes("right") && Ri > 0) && (_n7.x = Ri), (Math.abs(_n7.x) > 0 || Math.abs(_n7.y) > 0) && dm(true), (ze = Mi.current) == null || ze.style.setProperty("--swipe-amount-x", `${_n7.x}px`), (_e8 = Mi.current) == null || _e8.style.setProperty("--swipe-amount-y", `${_n7.y}px`);
      }
    }, Ow && !d.jsx ? _.createElement("button", {
      "aria-label": ft,
      "data-disabled": xu,
      "data-close-button": true,
      onClick: xu || !aa ? () => {
      } : () => {
        var k;
        jn(), (k = d.onDismiss) == null || k.call(d, d);
      },
      className: Be(N == null ? void 0 : N.closeButton, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.closeButton)
    }, (s = U == null ? void 0 : U.close) != null ? s : z2) : null, d.jsx || b.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : _.createElement(_.Fragment, null, be || d.icon || d.promise ? _.createElement("div", {
      "data-icon": "",
      className: Be(N == null ? void 0 : N.icon, (r = d == null ? void 0 : d.classNames) == null ? void 0 : r.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || zw() : null, d.type !== "loading" ? d.icon || (U == null ? void 0 : U[be]) || C2(be) : null) : null, _.createElement("div", {
      "data-content": "",
      className: Be(N == null ? void 0 : N.content, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.content)
    }, _.createElement("div", {
      "data-title": "",
      className: Be(N == null ? void 0 : N.title, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.title)
    }, typeof d.title == "function" ? d.title() : d.title), d.description ? _.createElement("div", {
      "data-description": "",
      className: Be(J, Rw, N == null ? void 0 : N.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description)
    }, typeof d.description == "function" ? d.description() : d.description) : null), b.isValidElement(d.cancel) ? d.cancel : d.cancel && ho(d.cancel) ? _.createElement("button", {
      "data-button": true,
      "data-cancel": true,
      style: d.cancelButtonStyle || z,
      onClick: (k) => {
        var st, yt;
        ho(d.cancel) && aa && ((yt = (st = d.cancel).onClick) == null || yt.call(st, k), jn());
      },
      className: Be(N == null ? void 0 : N.cancelButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.cancelButton)
    }, d.cancel.label) : null, b.isValidElement(d.action) ? d.action : d.action && ho(d.action) ? _.createElement("button", {
      "data-button": true,
      "data-action": true,
      style: d.actionButtonStyle || P,
      onClick: (k) => {
        var st, yt;
        ho(d.action) && ((yt = (st = d.action).onClick) == null || yt.call(st, k), !k.defaultPrevented && jn());
      },
      className: Be(N == null ? void 0 : N.actionButton, (f = d == null ? void 0 : d.classNames) == null ? void 0 : f.actionButton)
    }, d.action.label) : null));
  };
  function lg() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
  }
  function I2(t, e) {
    let n = {};
    return [
      t,
      e
    ].forEach((i, a) => {
      let s = a === 1, r = s ? "--mobile-offset" : "--offset", o = s ? q2 : G2;
      function l(u) {
        [
          "top",
          "right",
          "bottom",
          "left"
        ].forEach((c) => {
          n[`${r}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof i == "number" || typeof i == "string" ? l(i) : typeof i == "object" ? [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((u) => {
        i[u] === void 0 ? n[`${r}-${u}`] = o : n[`${r}-${u}`] = typeof i[u] == "number" ? `${i[u]}px` : i[u];
      }) : l(o);
    }), n;
  }
  var J2 = b.forwardRef(function(t, e) {
    let { invert: n, position: i = "bottom-right", hotkey: a = [
      "altKey",
      "KeyT"
    ], expand: s, closeButton: r, className: o, offset: l, mobileOffset: u, theme: c = "light", richColors: f, duration: h, style: d, visibleToasts: v = Y2, toastOptions: y, dir: x = lg(), gap: p = Q2, loadingIcon: m, icons: g, containerAriaLabel: S = "Notifications", pauseWhenPageIsHidden: T } = t, [A, E] = _.useState([]), C = _.useMemo(() => Array.from(new Set([
      i
    ].concat(A.filter((Q) => Q.position).map((Q) => Q.position)))), [
      A,
      i
    ]), [j, z] = _.useState([]), [P, V] = _.useState(false), [J, L] = _.useState(false), [X, R] = _.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), D = _.useRef(null), O = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), N = _.useRef(null), U = _.useRef(false), ft = _.useCallback((Q) => {
      E((Z) => {
        var $;
        return ($ = Z.find((Tt) => Tt.id === Q.id)) != null && $.delete || ne.dismiss(Q.id), Z.filter(({ id: Tt }) => Tt !== Q.id);
      });
    }, []);
    return _.useEffect(() => ne.subscribe((Q) => {
      if (Q.dismiss) {
        E((Z) => Z.map(($) => $.id === Q.id ? {
          ...$,
          delete: true
        } : $));
        return;
      }
      setTimeout(() => {
        yv.flushSync(() => {
          E((Z) => {
            let $ = Z.findIndex((Tt) => Tt.id === Q.id);
            return $ !== -1 ? [
              ...Z.slice(0, $),
              {
                ...Z[$],
                ...Q
              },
              ...Z.slice($ + 1)
            ] : [
              Q,
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
      let Q = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        Q.addEventListener("change", ({ matches: Z }) => {
          R(Z ? "dark" : "light");
        });
      } catch {
        Q.addListener(({ matches: $ }) => {
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
      let Q = (Z) => {
        var $, Tt;
        a.every((Nn) => Z[Nn] || Z.code === Nn) && (V(true), ($ = D.current) == null || $.focus()), Z.code === "Escape" && (document.activeElement === D.current || (Tt = D.current) != null && Tt.contains(document.activeElement)) && V(false);
      };
      return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
    }, [
      a
    ]), _.useEffect(() => {
      if (D.current) return () => {
        N.current && (N.current.focus({
          preventScroll: true
        }), N.current = null, U.current = false);
      };
    }, [
      D.current
    ]), _.createElement("section", {
      ref: e,
      "aria-label": `${S} ${O}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: true
    }, C.map((Q, Z) => {
      var $;
      let [Tt, Nn] = Q.split("-");
      return A.length ? _.createElement("ol", {
        key: Q,
        dir: x === "auto" ? lg() : x,
        tabIndex: -1,
        ref: D,
        className: o,
        "data-sonner-toaster": true,
        "data-theme": X,
        "data-y-position": Tt,
        "data-lifted": P && A.length > 1 && !s,
        "data-x-position": Nn,
        style: {
          "--front-toast-height": `${(($ = j[0]) == null ? void 0 : $.height) || 0}px`,
          "--width": `${X2}px`,
          "--gap": `${p}px`,
          ...d,
          ...I2(l, u)
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
      }, A.filter((at) => !at.position && Z === 0 || at.position === Q).map((at, na) => {
        var Ei, ia;
        return _.createElement($2, {
          key: at.id,
          icons: g,
          index: na,
          toast: at,
          defaultRichColors: f,
          duration: (Ei = y == null ? void 0 : y.duration) != null ? Ei : h,
          className: y == null ? void 0 : y.className,
          descriptionClassName: y == null ? void 0 : y.descriptionClassName,
          invert: n,
          visibleToasts: v,
          closeButton: (ia = y == null ? void 0 : y.closeButton) != null ? ia : r,
          interacting: J,
          position: Q,
          style: y == null ? void 0 : y.style,
          unstyled: y == null ? void 0 : y.unstyled,
          classNames: y == null ? void 0 : y.classNames,
          cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
          actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
          removeToast: ft,
          toasts: A.filter((Ai) => Ai.position == at.position),
          heights: j.filter((Ai) => Ai.position == at.position),
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
  const W2 = ({ ...t }) => {
    const { theme: e = "system" } = A2();
    return w.jsx(J2, {
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
  }, tM = [
    "top",
    "right",
    "bottom",
    "left"
  ], mi = Math.min, ue = Math.max, Tl = Math.round, mo = Math.floor, We = (t) => ({
    x: t,
    y: t
  }), eM = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  }, nM = {
    start: "end",
    end: "start"
  };
  function _f(t, e, n) {
    return ue(t, mi(e, n));
  }
  function Mn(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function Rn(t) {
    return t.split("-")[0];
  }
  function ds(t) {
    return t.split("-")[1];
  }
  function xh(t) {
    return t === "x" ? "y" : "x";
  }
  function Sh(t) {
    return t === "y" ? "height" : "width";
  }
  const iM = /* @__PURE__ */ new Set([
    "top",
    "bottom"
  ]);
  function Ie(t) {
    return iM.has(Rn(t)) ? "y" : "x";
  }
  function wh(t) {
    return xh(Ie(t));
  }
  function aM(t, e, n) {
    n === void 0 && (n = false);
    const i = ds(t), a = wh(t), s = Sh(a);
    let r = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return e.reference[s] > e.floating[s] && (r = El(r)), [
      r,
      El(r)
    ];
  }
  function sM(t) {
    const e = El(t);
    return [
      Lf(t),
      e,
      Lf(e)
    ];
  }
  function Lf(t) {
    return t.replace(/start|end/g, (e) => nM[e]);
  }
  const ug = [
    "left",
    "right"
  ], cg = [
    "right",
    "left"
  ], rM = [
    "top",
    "bottom"
  ], oM = [
    "bottom",
    "top"
  ];
  function lM(t, e, n) {
    switch (t) {
      case "top":
      case "bottom":
        return n ? e ? cg : ug : e ? ug : cg;
      case "left":
      case "right":
        return e ? rM : oM;
      default:
        return [];
    }
  }
  function uM(t, e, n, i) {
    const a = ds(t);
    let s = lM(Rn(t), n === "start", i);
    return a && (s = s.map((r) => r + "-" + a), e && (s = s.concat(s.map(Lf)))), s;
  }
  function El(t) {
    return t.replace(/left|right|bottom|top/g, (e) => eM[e]);
  }
  function cM(t) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...t
    };
  }
  function Q1(t) {
    return typeof t != "number" ? cM(t) : {
      top: t,
      right: t,
      bottom: t,
      left: t
    };
  }
  function Al(t) {
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
  function fg(t, e, n) {
    let { reference: i, floating: a } = t;
    const s = Ie(e), r = wh(e), o = Sh(r), l = Rn(e), u = s === "y", c = i.x + i.width / 2 - a.width / 2, f = i.y + i.height / 2 - a.height / 2, h = i[o] / 2 - a[o] / 2;
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
    switch (ds(e)) {
      case "start":
        d[r] -= h * (n && u ? -1 : 1);
        break;
      case "end":
        d[r] += h * (n && u ? -1 : 1);
        break;
    }
    return d;
  }
  const fM = async (t, e, n) => {
    const { placement: i = "bottom", strategy: a = "absolute", middleware: s = [], platform: r } = n, o = s.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
    let u = await r.getElementRects({
      reference: t,
      floating: e,
      strategy: a
    }), { x: c, y: f } = fg(u, i, l), h = i, d = {}, v = 0;
    for (let y = 0; y < o.length; y++) {
      const { name: x, fn: p } = o[y], { x: m, y: g, data: S, reset: T } = await p({
        x: c,
        y: f,
        initialPlacement: i,
        placement: h,
        strategy: a,
        middlewareData: d,
        rects: u,
        platform: r,
        elements: {
          reference: t,
          floating: e
        }
      });
      c = m ?? c, f = g ?? f, d = {
        ...d,
        [x]: {
          ...d[x],
          ...S
        }
      }, T && v <= 50 && (v++, typeof T == "object" && (T.placement && (h = T.placement), T.rects && (u = T.rects === true ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: a
      }) : T.rects), { x: c, y: f } = fg(u, h, l)), y = -1);
    }
    return {
      x: c,
      y: f,
      placement: h,
      strategy: a,
      middlewareData: d
    };
  };
  async function yr(t, e) {
    var n;
    e === void 0 && (e = {});
    const { x: i, y: a, platform: s, rects: r, elements: o, strategy: l } = t, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: f = "floating", altBoundary: h = false, padding: d = 0 } = Mn(e, t), v = Q1(d), x = o[h ? f === "floating" ? "reference" : "floating" : f], p = Al(await s.getClippingRect({
      element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(o.floating)),
      boundary: u,
      rootBoundary: c,
      strategy: l
    })), m = f === "floating" ? {
      x: i,
      y: a,
      width: r.floating.width,
      height: r.floating.height
    } : r.reference, g = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(o.floating)), S = await (s.isElement == null ? void 0 : s.isElement(g)) ? await (s.getScale == null ? void 0 : s.getScale(g)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, T = Al(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: o,
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
  const dM = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const { x: n, y: i, placement: a, rects: s, platform: r, elements: o, middlewareData: l } = e, { element: u, padding: c = 0 } = Mn(t, e) || {};
      if (u == null) return {};
      const f = Q1(c), h = {
        x: n,
        y: i
      }, d = wh(a), v = Sh(d), y = await r.getDimensions(u), x = d === "y", p = x ? "top" : "left", m = x ? "bottom" : "right", g = x ? "clientHeight" : "clientWidth", S = s.reference[v] + s.reference[d] - h[d] - s.floating[v], T = h[d] - s.reference[d], A = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u));
      let E = A ? A[g] : 0;
      (!E || !await (r.isElement == null ? void 0 : r.isElement(A))) && (E = o.floating[g] || s.floating[v]);
      const C = S / 2 - T / 2, j = E / 2 - y[v] / 2 - 1, z = mi(f[p], j), P = mi(f[m], j), V = z, J = E - y[v] - P, L = E / 2 - y[v] / 2 + C, X = _f(V, L, J), R = !l.arrow && ds(a) != null && L !== X && s.reference[v] / 2 - (L < V ? z : P) - y[v] / 2 < 0, D = R ? L < V ? L - V : L - J : 0;
      return {
        [d]: h[d] + D,
        data: {
          [d]: X,
          centerOffset: L - X - D,
          ...R && {
            alignmentOffset: D
          }
        },
        reset: R
      };
    }
  }), hM = function(t) {
    return t === void 0 && (t = {}), {
      name: "flip",
      options: t,
      async fn(e) {
        var n, i;
        const { placement: a, middlewareData: s, rects: r, initialPlacement: o, platform: l, elements: u } = e, { mainAxis: c = true, crossAxis: f = true, fallbackPlacements: h, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: y = true, ...x } = Mn(t, e);
        if ((n = s.arrow) != null && n.alignmentOffset) return {};
        const p = Rn(a), m = Ie(o), g = Rn(o) === o, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), T = h || (g || !y ? [
          El(o)
        ] : sM(o)), A = v !== "none";
        !h && A && T.push(...uM(o, y, v, S));
        const E = [
          o,
          ...T
        ], C = await yr(e, x), j = [];
        let z = ((i = s.flip) == null ? void 0 : i.overflows) || [];
        if (c && j.push(C[p]), f) {
          const L = aM(a, r, S);
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
          if (X && (!(f === "alignment" ? m !== Ie(X) : false) || z.every((O) => O.overflows[0] > 0 && Ie(O.placement) === m))) return {
            data: {
              index: L,
              overflows: z
            },
            reset: {
              placement: X
            }
          };
          let R = (V = z.filter((D) => D.overflows[0] <= 0).sort((D, O) => D.overflows[1] - O.overflows[1])[0]) == null ? void 0 : V.placement;
          if (!R) switch (d) {
            case "bestFit": {
              var J;
              const D = (J = z.filter((O) => {
                if (A) {
                  const N = Ie(O.placement);
                  return N === m || N === "y";
                }
                return true;
              }).map((O) => [
                O.placement,
                O.overflows.filter((N) => N > 0).reduce((N, U) => N + U, 0)
              ]).sort((O, N) => O[1] - N[1])[0]) == null ? void 0 : J[0];
              D && (R = D);
              break;
            }
            case "initialPlacement":
              R = o;
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
  function dg(t, e) {
    return {
      top: t.top - e.height,
      right: t.right - e.width,
      bottom: t.bottom - e.height,
      left: t.left - e.width
    };
  }
  function hg(t) {
    return tM.some((e) => t[e] >= 0);
  }
  const mM = function(t) {
    return t === void 0 && (t = {}), {
      name: "hide",
      options: t,
      async fn(e) {
        const { rects: n } = e, { strategy: i = "referenceHidden", ...a } = Mn(t, e);
        switch (i) {
          case "referenceHidden": {
            const s = await yr(e, {
              ...a,
              elementContext: "reference"
            }), r = dg(s, n.reference);
            return {
              data: {
                referenceHiddenOffsets: r,
                referenceHidden: hg(r)
              }
            };
          }
          case "escaped": {
            const s = await yr(e, {
              ...a,
              altBoundary: true
            }), r = dg(s, n.floating);
            return {
              data: {
                escapedOffsets: r,
                escaped: hg(r)
              }
            };
          }
          default:
            return {};
        }
      }
    };
  }, F1 = /* @__PURE__ */ new Set([
    "left",
    "top"
  ]);
  async function pM(t, e) {
    const { placement: n, platform: i, elements: a } = t, s = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), r = Rn(n), o = ds(n), l = Ie(n) === "y", u = F1.has(r) ? -1 : 1, c = s && l ? -1 : 1, f = Mn(e, t);
    let { mainAxis: h, crossAxis: d, alignmentAxis: v } = typeof f == "number" ? {
      mainAxis: f,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: f.mainAxis || 0,
      crossAxis: f.crossAxis || 0,
      alignmentAxis: f.alignmentAxis
    };
    return o && typeof v == "number" && (d = o === "end" ? v * -1 : v), l ? {
      x: d * c,
      y: h * u
    } : {
      x: h * u,
      y: d * c
    };
  }
  const gM = function(t) {
    return t === void 0 && (t = 0), {
      name: "offset",
      options: t,
      async fn(e) {
        var n, i;
        const { x: a, y: s, placement: r, middlewareData: o } = e, l = await pM(e, t);
        return r === ((n = o.offset) == null ? void 0 : n.placement) && (i = o.arrow) != null && i.alignmentOffset ? {} : {
          x: a + l.x,
          y: s + l.y,
          data: {
            ...l,
            placement: r
          }
        };
      }
    };
  }, yM = function(t) {
    return t === void 0 && (t = {}), {
      name: "shift",
      options: t,
      async fn(e) {
        const { x: n, y: i, placement: a } = e, { mainAxis: s = true, crossAxis: r = false, limiter: o = {
          fn: (x) => {
            let { x: p, y: m } = x;
            return {
              x: p,
              y: m
            };
          }
        }, ...l } = Mn(t, e), u = {
          x: n,
          y: i
        }, c = await yr(e, l), f = Ie(Rn(a)), h = xh(f);
        let d = u[h], v = u[f];
        if (s) {
          const x = h === "y" ? "top" : "left", p = h === "y" ? "bottom" : "right", m = d + c[x], g = d - c[p];
          d = _f(m, d, g);
        }
        if (r) {
          const x = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", m = v + c[x], g = v - c[p];
          v = _f(m, v, g);
        }
        const y = o.fn({
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
              [f]: r
            }
          }
        };
      }
    };
  }, vM = function(t) {
    return t === void 0 && (t = {}), {
      options: t,
      fn(e) {
        const { x: n, y: i, placement: a, rects: s, middlewareData: r } = e, { offset: o = 0, mainAxis: l = true, crossAxis: u = true } = Mn(t, e), c = {
          x: n,
          y: i
        }, f = Ie(a), h = xh(f);
        let d = c[h], v = c[f];
        const y = Mn(o, e), x = typeof y == "number" ? {
          mainAxis: y,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...y
        };
        if (l) {
          const g = h === "y" ? "height" : "width", S = s.reference[h] - s.floating[g] + x.mainAxis, T = s.reference[h] + s.reference[g] - x.mainAxis;
          d < S ? d = S : d > T && (d = T);
        }
        if (u) {
          var p, m;
          const g = h === "y" ? "width" : "height", S = F1.has(Rn(a)), T = s.reference[f] - s.floating[g] + (S && ((p = r.offset) == null ? void 0 : p[f]) || 0) + (S ? 0 : x.crossAxis), A = s.reference[f] + s.reference[g] + (S ? 0 : ((m = r.offset) == null ? void 0 : m[f]) || 0) - (S ? x.crossAxis : 0);
          v < T ? v = T : v > A && (v = A);
        }
        return {
          [h]: d,
          [f]: v
        };
      }
    };
  }, bM = function(t) {
    return t === void 0 && (t = {}), {
      name: "size",
      options: t,
      async fn(e) {
        var n, i;
        const { placement: a, rects: s, platform: r, elements: o } = e, { apply: l = () => {
        }, ...u } = Mn(t, e), c = await yr(e, u), f = Rn(a), h = ds(a), d = Ie(a) === "y", { width: v, height: y } = s.floating;
        let x, p;
        f === "top" || f === "bottom" ? (x = f, p = h === (await (r.isRTL == null ? void 0 : r.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (p = f, x = h === "end" ? "top" : "bottom");
        const m = y - c.top - c.bottom, g = v - c.left - c.right, S = mi(y - c[x], m), T = mi(v - c[p], g), A = !e.middlewareData.shift;
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
        const j = await r.getDimensions(o.floating);
        return v !== j.width || y !== j.height ? {
          reset: {
            rects: true
          }
        } : {};
      }
    };
  };
  function ru() {
    return typeof window < "u";
  }
  function hs(t) {
    return K1(t) ? (t.nodeName || "").toLowerCase() : "#document";
  }
  function ge(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
  }
  function on(t) {
    var e;
    return (e = (K1(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
  }
  function K1(t) {
    return ru() ? t instanceof Node || t instanceof ge(t).Node : false;
  }
  function Ge(t) {
    return ru() ? t instanceof Element || t instanceof ge(t).Element : false;
  }
  function en(t) {
    return ru() ? t instanceof HTMLElement || t instanceof ge(t).HTMLElement : false;
  }
  function mg(t) {
    return !ru() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof ge(t).ShadowRoot;
  }
  const xM = /* @__PURE__ */ new Set([
    "inline",
    "contents"
  ]);
  function Yr(t) {
    const { overflow: e, overflowX: n, overflowY: i, display: a } = qe(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !xM.has(a);
  }
  const SM = /* @__PURE__ */ new Set([
    "table",
    "td",
    "th"
  ]);
  function wM(t) {
    return SM.has(hs(t));
  }
  const TM = [
    ":popover-open",
    ":modal"
  ];
  function ou(t) {
    return TM.some((e) => {
      try {
        return t.matches(e);
      } catch {
        return false;
      }
    });
  }
  const EM = [
    "transform",
    "translate",
    "scale",
    "rotate",
    "perspective"
  ], AM = [
    "transform",
    "translate",
    "scale",
    "rotate",
    "perspective",
    "filter"
  ], CM = [
    "paint",
    "layout",
    "strict",
    "content"
  ];
  function Th(t) {
    const e = Eh(), n = Ge(t) ? qe(t) : t;
    return EM.some((i) => n[i] ? n[i] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !e && (n.filter ? n.filter !== "none" : false) || AM.some((i) => (n.willChange || "").includes(i)) || CM.some((i) => (n.contain || "").includes(i));
  }
  function MM(t) {
    let e = pi(t);
    for (; en(e) && !Wa(e); ) {
      if (Th(e)) return e;
      if (ou(e)) return null;
      e = pi(e);
    }
    return null;
  }
  function Eh() {
    return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
  }
  const RM = /* @__PURE__ */ new Set([
    "html",
    "body",
    "#document"
  ]);
  function Wa(t) {
    return RM.has(hs(t));
  }
  function qe(t) {
    return ge(t).getComputedStyle(t);
  }
  function lu(t) {
    return Ge(t) ? {
      scrollLeft: t.scrollLeft,
      scrollTop: t.scrollTop
    } : {
      scrollLeft: t.scrollX,
      scrollTop: t.scrollY
    };
  }
  function pi(t) {
    if (hs(t) === "html") return t;
    const e = t.assignedSlot || t.parentNode || mg(t) && t.host || on(t);
    return mg(e) ? e.host : e;
  }
  function Z1(t) {
    const e = pi(t);
    return Wa(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : en(e) && Yr(e) ? e : Z1(e);
  }
  function vr(t, e, n) {
    var i;
    e === void 0 && (e = []), n === void 0 && (n = true);
    const a = Z1(t), s = a === ((i = t.ownerDocument) == null ? void 0 : i.body), r = ge(a);
    if (s) {
      const o = Vf(r);
      return e.concat(r, r.visualViewport || [], Yr(a) ? a : [], o && n ? vr(o) : []);
    }
    return e.concat(a, vr(a, [], n));
  }
  function Vf(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
  }
  function $1(t) {
    const e = qe(t);
    let n = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
    const a = en(t), s = a ? t.offsetWidth : n, r = a ? t.offsetHeight : i, o = Tl(n) !== s || Tl(i) !== r;
    return o && (n = s, i = r), {
      width: n,
      height: i,
      $: o
    };
  }
  function Ah(t) {
    return Ge(t) ? t : t.contextElement;
  }
  function Ha(t) {
    const e = Ah(t);
    if (!en(e)) return We(1);
    const n = e.getBoundingClientRect(), { width: i, height: a, $: s } = $1(e);
    let r = (s ? Tl(n.width) : n.width) / i, o = (s ? Tl(n.height) : n.height) / a;
    return (!r || !Number.isFinite(r)) && (r = 1), (!o || !Number.isFinite(o)) && (o = 1), {
      x: r,
      y: o
    };
  }
  const OM = We(0);
  function I1(t) {
    const e = ge(t);
    return !Eh() || !e.visualViewport ? OM : {
      x: e.visualViewport.offsetLeft,
      y: e.visualViewport.offsetTop
    };
  }
  function DM(t, e, n) {
    return e === void 0 && (e = false), !n || e && n !== ge(t) ? false : e;
  }
  function Zi(t, e, n, i) {
    e === void 0 && (e = false), n === void 0 && (n = false);
    const a = t.getBoundingClientRect(), s = Ah(t);
    let r = We(1);
    e && (i ? Ge(i) && (r = Ha(i)) : r = Ha(t));
    const o = DM(s, n, i) ? I1(s) : We(0);
    let l = (a.left + o.x) / r.x, u = (a.top + o.y) / r.y, c = a.width / r.x, f = a.height / r.y;
    if (s) {
      const h = ge(s), d = i && Ge(i) ? ge(i) : i;
      let v = h, y = Vf(v);
      for (; y && i && d !== v; ) {
        const x = Ha(y), p = y.getBoundingClientRect(), m = qe(y), g = p.left + (y.clientLeft + parseFloat(m.paddingLeft)) * x.x, S = p.top + (y.clientTop + parseFloat(m.paddingTop)) * x.y;
        l *= x.x, u *= x.y, c *= x.x, f *= x.y, l += g, u += S, v = ge(y), y = Vf(v);
      }
    }
    return Al({
      width: c,
      height: f,
      x: l,
      y: u
    });
  }
  function Ch(t, e) {
    const n = lu(t).scrollLeft;
    return e ? e.left + n : Zi(on(t)).left + n;
  }
  function J1(t, e, n) {
    n === void 0 && (n = false);
    const i = t.getBoundingClientRect(), a = i.left + e.scrollLeft - (n ? 0 : Ch(t, i)), s = i.top + e.scrollTop;
    return {
      x: a,
      y: s
    };
  }
  function NM(t) {
    let { elements: e, rect: n, offsetParent: i, strategy: a } = t;
    const s = a === "fixed", r = on(i), o = e ? ou(e.floating) : false;
    if (i === r || o && s) return n;
    let l = {
      scrollLeft: 0,
      scrollTop: 0
    }, u = We(1);
    const c = We(0), f = en(i);
    if ((f || !f && !s) && ((hs(i) !== "body" || Yr(r)) && (l = lu(i)), en(i))) {
      const d = Zi(i);
      u = Ha(i), c.x = d.x + i.clientLeft, c.y = d.y + i.clientTop;
    }
    const h = r && !f && !s ? J1(r, l, true) : We(0);
    return {
      width: n.width * u.x,
      height: n.height * u.y,
      x: n.x * u.x - l.scrollLeft * u.x + c.x + h.x,
      y: n.y * u.y - l.scrollTop * u.y + c.y + h.y
    };
  }
  function jM(t) {
    return Array.from(t.getClientRects());
  }
  function zM(t) {
    const e = on(t), n = lu(t), i = t.ownerDocument.body, a = ue(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth), s = ue(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
    let r = -n.scrollLeft + Ch(t);
    const o = -n.scrollTop;
    return qe(i).direction === "rtl" && (r += ue(e.clientWidth, i.clientWidth) - a), {
      width: a,
      height: s,
      x: r,
      y: o
    };
  }
  function _M(t, e) {
    const n = ge(t), i = on(t), a = n.visualViewport;
    let s = i.clientWidth, r = i.clientHeight, o = 0, l = 0;
    if (a) {
      s = a.width, r = a.height;
      const u = Eh();
      (!u || u && e === "fixed") && (o = a.offsetLeft, l = a.offsetTop);
    }
    return {
      width: s,
      height: r,
      x: o,
      y: l
    };
  }
  const LM = /* @__PURE__ */ new Set([
    "absolute",
    "fixed"
  ]);
  function VM(t, e) {
    const n = Zi(t, true, e === "fixed"), i = n.top + t.clientTop, a = n.left + t.clientLeft, s = en(t) ? Ha(t) : We(1), r = t.clientWidth * s.x, o = t.clientHeight * s.y, l = a * s.x, u = i * s.y;
    return {
      width: r,
      height: o,
      x: l,
      y: u
    };
  }
  function pg(t, e, n) {
    let i;
    if (e === "viewport") i = _M(t, n);
    else if (e === "document") i = zM(on(t));
    else if (Ge(e)) i = VM(e, n);
    else {
      const a = I1(t);
      i = {
        x: e.x - a.x,
        y: e.y - a.y,
        width: e.width,
        height: e.height
      };
    }
    return Al(i);
  }
  function W1(t, e) {
    const n = pi(t);
    return n === e || !Ge(n) || Wa(n) ? false : qe(n).position === "fixed" || W1(n, e);
  }
  function BM(t, e) {
    const n = e.get(t);
    if (n) return n;
    let i = vr(t, [], false).filter((o) => Ge(o) && hs(o) !== "body"), a = null;
    const s = qe(t).position === "fixed";
    let r = s ? pi(t) : t;
    for (; Ge(r) && !Wa(r); ) {
      const o = qe(r), l = Th(r);
      !l && o.position === "fixed" && (a = null), (s ? !l && !a : !l && o.position === "static" && !!a && LM.has(a.position) || Yr(r) && !l && W1(t, r)) ? i = i.filter((c) => c !== r) : a = o, r = pi(r);
    }
    return e.set(t, i), i;
  }
  function UM(t) {
    let { element: e, boundary: n, rootBoundary: i, strategy: a } = t;
    const r = [
      ...n === "clippingAncestors" ? ou(e) ? [] : BM(e, this._c) : [].concat(n),
      i
    ], o = r[0], l = r.reduce((u, c) => {
      const f = pg(e, c, a);
      return u.top = ue(f.top, u.top), u.right = mi(f.right, u.right), u.bottom = mi(f.bottom, u.bottom), u.left = ue(f.left, u.left), u;
    }, pg(e, o, a));
    return {
      width: l.right - l.left,
      height: l.bottom - l.top,
      x: l.left,
      y: l.top
    };
  }
  function PM(t) {
    const { width: e, height: n } = $1(t);
    return {
      width: e,
      height: n
    };
  }
  function HM(t, e, n) {
    const i = en(e), a = on(e), s = n === "fixed", r = Zi(t, true, s, e);
    let o = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const l = We(0);
    function u() {
      l.x = Ch(a);
    }
    if (i || !i && !s) if ((hs(e) !== "body" || Yr(a)) && (o = lu(e)), i) {
      const d = Zi(e, true, s, e);
      l.x = d.x + e.clientLeft, l.y = d.y + e.clientTop;
    } else a && u();
    s && !i && a && u();
    const c = a && !i && !s ? J1(a, o) : We(0), f = r.left + o.scrollLeft - l.x - c.x, h = r.top + o.scrollTop - l.y - c.y;
    return {
      x: f,
      y: h,
      width: r.width,
      height: r.height
    };
  }
  function uc(t) {
    return qe(t).position === "static";
  }
  function gg(t, e) {
    if (!en(t) || qe(t).position === "fixed") return null;
    if (e) return e(t);
    let n = t.offsetParent;
    return on(t) === n && (n = n.ownerDocument.body), n;
  }
  function tx(t, e) {
    const n = ge(t);
    if (ou(t)) return n;
    if (!en(t)) {
      let a = pi(t);
      for (; a && !Wa(a); ) {
        if (Ge(a) && !uc(a)) return a;
        a = pi(a);
      }
      return n;
    }
    let i = gg(t, e);
    for (; i && wM(i) && uc(i); ) i = gg(i, e);
    return i && Wa(i) && uc(i) && !Th(i) ? n : i || MM(t) || n;
  }
  const kM = async function(t) {
    const e = this.getOffsetParent || tx, n = this.getDimensions, i = await n(t.floating);
    return {
      reference: HM(t.reference, await e(t.floating), t.strategy),
      floating: {
        x: 0,
        y: 0,
        width: i.width,
        height: i.height
      }
    };
  };
  function YM(t) {
    return qe(t).direction === "rtl";
  }
  const GM = {
    convertOffsetParentRelativeRectToViewportRelativeRect: NM,
    getDocumentElement: on,
    getClippingRect: UM,
    getOffsetParent: tx,
    getElementRects: kM,
    getClientRects: jM,
    getDimensions: PM,
    getScale: Ha,
    isElement: Ge,
    isRTL: YM
  };
  function ex(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
  }
  function qM(t, e) {
    let n = null, i;
    const a = on(t);
    function s() {
      var o;
      clearTimeout(i), (o = n) == null || o.disconnect(), n = null;
    }
    function r(o, l) {
      o === void 0 && (o = false), l === void 0 && (l = 1), s();
      const u = t.getBoundingClientRect(), { left: c, top: f, width: h, height: d } = u;
      if (o || e(), !h || !d) return;
      const v = mo(f), y = mo(a.clientWidth - (c + h)), x = mo(a.clientHeight - (f + d)), p = mo(c), g = {
        rootMargin: -v + "px " + -y + "px " + -x + "px " + -p + "px",
        threshold: ue(0, mi(1, l)) || 1
      };
      let S = true;
      function T(A) {
        const E = A[0].intersectionRatio;
        if (E !== l) {
          if (!S) return r();
          E ? r(false, E) : i = setTimeout(() => {
            r(false, 1e-7);
          }, 1e3);
        }
        E === 1 && !ex(u, t.getBoundingClientRect()) && r(), S = false;
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
    return r(true), s;
  }
  function XM(t, e, n, i) {
    i === void 0 && (i = {});
    const { ancestorScroll: a = true, ancestorResize: s = true, elementResize: r = typeof ResizeObserver == "function", layoutShift: o = typeof IntersectionObserver == "function", animationFrame: l = false } = i, u = Ah(t), c = a || s ? [
      ...u ? vr(u) : [],
      ...vr(e)
    ] : [];
    c.forEach((p) => {
      a && p.addEventListener("scroll", n, {
        passive: true
      }), s && p.addEventListener("resize", n);
    });
    const f = u && o ? qM(u, n) : null;
    let h = -1, d = null;
    r && (d = new ResizeObserver((p) => {
      let [m] = p;
      m && m.target === u && d && (d.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
        var g;
        (g = d) == null || g.observe(e);
      })), n();
    }), u && !l && d.observe(u), d.observe(e));
    let v, y = l ? Zi(t) : null;
    l && x();
    function x() {
      const p = Zi(t);
      y && !ex(y, p) && n(), y = p, v = requestAnimationFrame(x);
    }
    return n(), () => {
      var p;
      c.forEach((m) => {
        a && m.removeEventListener("scroll", n), s && m.removeEventListener("resize", n);
      }), f == null ? void 0 : f(), (p = d) == null || p.disconnect(), d = null, l && cancelAnimationFrame(v);
    };
  }
  const QM = gM, FM = yM, KM = hM, ZM = bM, $M = mM, yg = dM, IM = vM, JM = (t, e, n) => {
    const i = /* @__PURE__ */ new Map(), a = {
      platform: GM,
      ...n
    }, s = {
      ...a.platform,
      _c: i
    };
    return fM(t, e, {
      ...a,
      platform: s
    });
  };
  var WM = typeof document < "u", tR = function() {
  }, Po = WM ? b.useLayoutEffect : tR;
  function Cl(t, e) {
    if (t === e) return true;
    if (typeof t != typeof e) return false;
    if (typeof t == "function" && t.toString() === e.toString()) return true;
    let n, i, a;
    if (t && e && typeof t == "object") {
      if (Array.isArray(t)) {
        if (n = t.length, n !== e.length) return false;
        for (i = n; i-- !== 0; ) if (!Cl(t[i], e[i])) return false;
        return true;
      }
      if (a = Object.keys(t), n = a.length, n !== Object.keys(e).length) return false;
      for (i = n; i-- !== 0; ) if (!{}.hasOwnProperty.call(e, a[i])) return false;
      for (i = n; i-- !== 0; ) {
        const s = a[i];
        if (!(s === "_owner" && t.$$typeof) && !Cl(t[s], e[s])) return false;
      }
      return true;
    }
    return t !== t && e !== e;
  }
  function nx(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function vg(t, e) {
    const n = nx(t);
    return Math.round(e * n) / n;
  }
  function cc(t) {
    const e = b.useRef(t);
    return Po(() => {
      e.current = t;
    }), e;
  }
  function eR(t) {
    t === void 0 && (t = {});
    const { placement: e = "bottom", strategy: n = "absolute", middleware: i = [], platform: a, elements: { reference: s, floating: r } = {}, transform: o = true, whileElementsMounted: l, open: u } = t, [c, f] = b.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: e,
      middlewareData: {},
      isPositioned: false
    }), [h, d] = b.useState(i);
    Cl(h, i) || d(i);
    const [v, y] = b.useState(null), [x, p] = b.useState(null), m = b.useCallback((O) => {
      O !== A.current && (A.current = O, y(O));
    }, []), g = b.useCallback((O) => {
      O !== E.current && (E.current = O, p(O));
    }, []), S = s || v, T = r || x, A = b.useRef(null), E = b.useRef(null), C = b.useRef(c), j = l != null, z = cc(l), P = cc(a), V = cc(u), J = b.useCallback(() => {
      if (!A.current || !E.current) return;
      const O = {
        placement: e,
        strategy: n,
        middleware: h
      };
      P.current && (O.platform = P.current), JM(A.current, E.current, O).then((N) => {
        const U = {
          ...N,
          isPositioned: V.current !== false
        };
        L.current && !Cl(C.current, U) && (C.current = U, Rr.flushSync(() => {
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
    Po(() => {
      u === false && C.current.isPositioned && (C.current.isPositioned = false, f((O) => ({
        ...O,
        isPositioned: false
      })));
    }, [
      u
    ]);
    const L = b.useRef(false);
    Po(() => (L.current = true, () => {
      L.current = false;
    }), []), Po(() => {
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
    const X = b.useMemo(() => ({
      reference: A,
      floating: E,
      setReference: m,
      setFloating: g
    }), [
      m,
      g
    ]), R = b.useMemo(() => ({
      reference: S,
      floating: T
    }), [
      S,
      T
    ]), D = b.useMemo(() => {
      const O = {
        position: n,
        left: 0,
        top: 0
      };
      if (!R.floating) return O;
      const N = vg(R.floating, c.x), U = vg(R.floating, c.y);
      return o ? {
        ...O,
        transform: "translate(" + N + "px, " + U + "px)",
        ...nx(R.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: n,
        left: N,
        top: U
      };
    }, [
      n,
      o,
      R.floating,
      c.x,
      c.y
    ]);
    return b.useMemo(() => ({
      ...c,
      update: J,
      refs: X,
      elements: R,
      floatingStyles: D
    }), [
      c,
      J,
      X,
      R,
      D
    ]);
  }
  const nR = (t) => {
    function e(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(n) {
        const { element: i, padding: a } = typeof t == "function" ? t(n) : t;
        return i && e(i) ? i.current != null ? yg({
          element: i.current,
          padding: a
        }).fn(n) : {} : i ? yg({
          element: i,
          padding: a
        }).fn(n) : {};
      }
    };
  }, iR = (t, e) => ({
    ...QM(t),
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
    ...IM(t),
    options: [
      t,
      e
    ]
  }), rR = (t, e) => ({
    ...KM(t),
    options: [
      t,
      e
    ]
  }), oR = (t, e) => ({
    ...ZM(t),
    options: [
      t,
      e
    ]
  }), lR = (t, e) => ({
    ...$M(t),
    options: [
      t,
      e
    ]
  }), uR = (t, e) => ({
    ...nR(t),
    options: [
      t,
      e
    ]
  });
  var cR = "Arrow", ix = b.forwardRef((t, e) => {
    const { children: n, width: i = 10, height: a = 5, ...s } = t;
    return w.jsx(re.svg, {
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
  ix.displayName = cR;
  var fR = ix;
  function dR(t) {
    const [e, n] = b.useState(void 0);
    return hi(() => {
      if (t) {
        n({
          width: t.offsetWidth,
          height: t.offsetHeight
        });
        const i = new ResizeObserver((a) => {
          if (!Array.isArray(a) || !a.length) return;
          const s = a[0];
          let r, o;
          if ("borderBoxSize" in s) {
            const l = s.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
            r = u.inlineSize, o = u.blockSize;
          } else r = t.offsetWidth, o = t.offsetHeight;
          n({
            width: r,
            height: o
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
  var ax = "Popper", [sx, rx] = iu(ax), [vj, ox] = sx(ax), lx = "PopperAnchor", ux = b.forwardRef((t, e) => {
    const { __scopePopper: n, virtualRef: i, ...a } = t, s = ox(lx, n), r = b.useRef(null), o = Ye(e, r);
    return b.useEffect(() => {
      s.onAnchorChange((i == null ? void 0 : i.current) || r.current);
    }), i ? null : w.jsx(re.div, {
      ...a,
      ref: o
    });
  });
  ux.displayName = lx;
  var Mh = "PopperContent", [hR, mR] = sx(Mh), cx = b.forwardRef((t, e) => {
    var _a5, _b3, _c3, _d3, _e8, _f3;
    const { __scopePopper: n, side: i = "bottom", sideOffset: a = 0, align: s = "center", alignOffset: r = 0, arrowPadding: o = 0, avoidCollisions: l = true, collisionBoundary: u = [], collisionPadding: c = 0, sticky: f = "partial", hideWhenDetached: h = false, updatePositionStrategy: d = "optimized", onPlaced: v, ...y } = t, x = ox(Mh, n), [p, m] = b.useState(null), g = Ye(e, (at) => m(at)), [S, T] = b.useState(null), A = dR(S), E = (A == null ? void 0 : A.width) ?? 0, C = (A == null ? void 0 : A.height) ?? 0, j = i + (s !== "center" ? "-" + s : ""), z = typeof c == "number" ? c : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...c
    }, P = Array.isArray(u) ? u : [
      u
    ], V = P.length > 0, J = {
      padding: z,
      boundary: P.filter(gR),
      altBoundary: V
    }, { refs: L, floatingStyles: X, placement: R, isPositioned: D, middlewareData: O } = eR({
      strategy: "fixed",
      placement: j,
      whileElementsMounted: (...at) => XM(...at, {
        animationFrame: d === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        iR({
          mainAxis: a + C,
          alignmentAxis: r
        }),
        l && aR({
          mainAxis: true,
          crossAxis: false,
          limiter: f === "partial" ? sR() : void 0,
          ...J
        }),
        l && rR({
          ...J
        }),
        oR({
          ...J,
          apply: ({ elements: at, rects: na, availableWidth: Ei, availableHeight: ia }) => {
            const { width: Ai, height: bs } = na.reference, Ci = at.floating.style;
            Ci.setProperty("--radix-popper-available-width", `${Ei}px`), Ci.setProperty("--radix-popper-available-height", `${ia}px`), Ci.setProperty("--radix-popper-anchor-width", `${Ai}px`), Ci.setProperty("--radix-popper-anchor-height", `${bs}px`);
          }
        }),
        S && uR({
          element: S,
          padding: o
        }),
        yR({
          arrowWidth: E,
          arrowHeight: C
        }),
        h && lR({
          strategy: "referenceHidden",
          ...J
        })
      ]
    }), [N, U] = hx(R), ft = di(v);
    hi(() => {
      D && (ft == null ? void 0 : ft());
    }, [
      D,
      ft
    ]);
    const Q = (_a5 = O.arrow) == null ? void 0 : _a5.x, Z = (_b3 = O.arrow) == null ? void 0 : _b3.y, $ = ((_c3 = O.arrow) == null ? void 0 : _c3.centerOffset) !== 0, [Tt, Nn] = b.useState();
    return hi(() => {
      p && Nn(window.getComputedStyle(p).zIndex);
    }, [
      p
    ]), w.jsx("div", {
      ref: L.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...X,
        transform: D ? X.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: Tt,
        "--radix-popper-transform-origin": [
          (_d3 = O.transformOrigin) == null ? void 0 : _d3.x,
          (_e8 = O.transformOrigin) == null ? void 0 : _e8.y
        ].join(" "),
        ...((_f3 = O.hide) == null ? void 0 : _f3.referenceHidden) && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      },
      dir: t.dir,
      children: w.jsx(hR, {
        scope: n,
        placedSide: N,
        onArrowChange: T,
        arrowX: Q,
        arrowY: Z,
        shouldHideArrow: $,
        children: w.jsx(re.div, {
          "data-side": N,
          "data-align": U,
          ...y,
          ref: g,
          style: {
            ...y.style,
            animation: D ? void 0 : "none"
          }
        })
      })
    });
  });
  cx.displayName = Mh;
  var fx = "PopperArrow", pR = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }, dx = b.forwardRef(function(e, n) {
    const { __scopePopper: i, ...a } = e, s = mR(fx, i), r = pR[s.placedSide];
    return w.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [r]: 0,
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
      children: w.jsx(fR, {
        ...a,
        ref: n,
        style: {
          ...a.style,
          display: "block"
        }
      })
    });
  });
  dx.displayName = fx;
  function gR(t) {
    return t !== null;
  }
  var yR = (t) => ({
    name: "transformOrigin",
    options: t,
    fn(e) {
      var _a5, _b3, _c3;
      const { placement: n, rects: i, middlewareData: a } = e, r = ((_a5 = a.arrow) == null ? void 0 : _a5.centerOffset) !== 0, o = r ? 0 : t.arrowWidth, l = r ? 0 : t.arrowHeight, [u, c] = hx(n), f = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], h = (((_b3 = a.arrow) == null ? void 0 : _b3.x) ?? 0) + o / 2, d = (((_c3 = a.arrow) == null ? void 0 : _c3.y) ?? 0) + l / 2;
      let v = "", y = "";
      return u === "bottom" ? (v = r ? f : `${h}px`, y = `${-l}px`) : u === "top" ? (v = r ? f : `${h}px`, y = `${i.floating.height + l}px`) : u === "right" ? (v = `${-l}px`, y = r ? f : `${d}px`) : u === "left" && (v = `${i.floating.width + l}px`, y = r ? f : `${d}px`), {
        data: {
          x: v,
          y
        }
      };
    }
  });
  function hx(t) {
    const [e, n = "center"] = t.split("-");
    return [
      e,
      n
    ];
  }
  var vR = ux, bR = cx, xR = dx, [uu, bj] = iu("Tooltip", [
    rx
  ]), Rh = rx(), mx = "TooltipProvider", SR = 700, bg = "tooltip.open", [wR, px] = uu(mx), gx = (t) => {
    const { __scopeTooltip: e, delayDuration: n = SR, skipDelayDuration: i = 300, disableHoverableContent: a = false, children: s } = t, r = b.useRef(true), o = b.useRef(false), l = b.useRef(0);
    return b.useEffect(() => {
      const u = l.current;
      return () => window.clearTimeout(u);
    }, []), w.jsx(wR, {
      scope: e,
      isOpenDelayedRef: r,
      delayDuration: n,
      onOpen: b.useCallback(() => {
        window.clearTimeout(l.current), r.current = false;
      }, []),
      onClose: b.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(() => r.current = true, i);
      }, [
        i
      ]),
      isPointerInTransitRef: o,
      onPointerInTransitChange: b.useCallback((u) => {
        o.current = u;
      }, []),
      disableHoverableContent: a,
      children: s
    });
  };
  gx.displayName = mx;
  var yx = "Tooltip", [xj, cu] = uu(yx), Bf = "TooltipTrigger", TR = b.forwardRef((t, e) => {
    const { __scopeTooltip: n, ...i } = t, a = cu(Bf, n), s = px(Bf, n), r = Rh(n), o = b.useRef(null), l = Ye(e, o, a.onTriggerChange), u = b.useRef(false), c = b.useRef(false), f = b.useCallback(() => u.current = false, []);
    return b.useEffect(() => () => document.removeEventListener("pointerup", f), [
      f
    ]), w.jsx(vR, {
      asChild: true,
      ...r,
      children: w.jsx(re.button, {
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
  TR.displayName = Bf;
  var ER = "TooltipPortal", [Sj, AR] = uu(ER, {
    forceMount: void 0
  }), ts = "TooltipContent", vx = b.forwardRef((t, e) => {
    const n = AR(ts, t.__scopeTooltip), { forceMount: i = n.forceMount, side: a = "top", ...s } = t, r = cu(ts, t.__scopeTooltip);
    return w.jsx(ph, {
      present: i || r.open,
      children: r.disableHoverableContent ? w.jsx(bx, {
        side: a,
        ...s,
        ref: e
      }) : w.jsx(CR, {
        side: a,
        ...s,
        ref: e
      })
    });
  }), CR = b.forwardRef((t, e) => {
    const n = cu(ts, t.__scopeTooltip), i = px(ts, t.__scopeTooltip), a = b.useRef(null), s = Ye(e, a), [r, o] = b.useState(null), { trigger: l, onClose: u } = n, c = a.current, { onPointerInTransitChange: f } = i, h = b.useCallback(() => {
      o(null), f(false);
    }, [
      f
    ]), d = b.useCallback((v, y) => {
      const x = v.currentTarget, p = {
        x: v.clientX,
        y: v.clientY
      }, m = NR(p, x.getBoundingClientRect()), g = jR(p, m), S = zR(y.getBoundingClientRect()), T = LR([
        ...g,
        ...S
      ]);
      o(T), f(true);
    }, [
      f
    ]);
    return b.useEffect(() => () => h(), [
      h
    ]), b.useEffect(() => {
      if (l && c) {
        const v = (x) => d(x, c), y = (x) => d(x, l);
        return l.addEventListener("pointerleave", v), c.addEventListener("pointerleave", y), () => {
          l.removeEventListener("pointerleave", v), c.removeEventListener("pointerleave", y);
        };
      }
    }, [
      l,
      c,
      d,
      h
    ]), b.useEffect(() => {
      if (r) {
        const v = (y) => {
          const x = y.target, p = {
            x: y.clientX,
            y: y.clientY
          }, m = (l == null ? void 0 : l.contains(x)) || (c == null ? void 0 : c.contains(x)), g = !_R(p, r);
          m ? h() : g && (h(), u());
        };
        return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
      }
    }, [
      l,
      c,
      r,
      u,
      h
    ]), w.jsx(bx, {
      ...t,
      ref: s
    });
  }), [MR, RR] = uu(yx, {
    isInside: false
  }), OR = kA("TooltipContent"), bx = b.forwardRef((t, e) => {
    const { __scopeTooltip: n, children: i, "aria-label": a, onEscapeKeyDown: s, onPointerDownOutside: r, ...o } = t, l = cu(ts, n), u = Rh(n), { onClose: c } = l;
    return b.useEffect(() => (document.addEventListener(bg, c), () => document.removeEventListener(bg, c)), [
      c
    ]), b.useEffect(() => {
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
    ]), w.jsx(mh, {
      asChild: true,
      disableOutsidePointerEvents: false,
      onEscapeKeyDown: s,
      onPointerDownOutside: r,
      onFocusOutside: (f) => f.preventDefault(),
      onDismiss: c,
      children: w.jsxs(bR, {
        "data-state": l.stateAttribute,
        ...u,
        ...o,
        ref: e,
        style: {
          ...o.style,
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        },
        children: [
          w.jsx(OR, {
            children: i
          }),
          w.jsx(MR, {
            scope: n,
            isInside: true,
            children: w.jsx(dC, {
              id: l.contentId,
              role: "tooltip",
              children: a || i
            })
          })
        ]
      })
    });
  });
  vx.displayName = ts;
  var xx = "TooltipArrow", DR = b.forwardRef((t, e) => {
    const { __scopeTooltip: n, ...i } = t, a = Rh(n);
    return RR(xx, n).isInside ? null : w.jsx(xR, {
      ...a,
      ...i,
      ref: e
    });
  });
  DR.displayName = xx;
  function NR(t, e) {
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
  function jR(t, e, n = 5) {
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
  function zR(t) {
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
  function _R(t, e) {
    const { x: n, y: i } = t;
    let a = false;
    for (let s = 0, r = e.length - 1; s < e.length; r = s++) {
      const o = e[s], l = e[r], u = o.x, c = o.y, f = l.x, h = l.y;
      c > i != h > i && n < (f - u) * (i - c) / (h - c) + u && (a = !a);
    }
    return a;
  }
  function LR(t) {
    const e = t.slice();
    return e.sort((n, i) => n.x < i.x ? -1 : n.x > i.x ? 1 : n.y < i.y ? -1 : n.y > i.y ? 1 : 0), VR(e);
  }
  function VR(t) {
    if (t.length <= 1) return t.slice();
    const e = [];
    for (let i = 0; i < t.length; i++) {
      const a = t[i];
      for (; e.length >= 2; ) {
        const s = e[e.length - 1], r = e[e.length - 2];
        if ((s.x - r.x) * (a.y - r.y) >= (s.y - r.y) * (a.x - r.x)) e.pop();
        else break;
      }
      e.push(a);
    }
    e.pop();
    const n = [];
    for (let i = t.length - 1; i >= 0; i--) {
      const a = t[i];
      for (; n.length >= 2; ) {
        const s = n[n.length - 1], r = n[n.length - 2];
        if ((s.x - r.x) * (a.y - r.y) >= (s.y - r.y) * (a.x - r.x)) n.pop();
        else break;
      }
      n.push(a);
    }
    return n.pop(), e.length === 1 && n.length === 1 && e[0].x === n[0].x && e[0].y === n[0].y ? e : e.concat(n);
  }
  var BR = gx, Sx = vx;
  const UR = BR, PR = b.forwardRef(({ className: t, sideOffset: e = 4, ...n }, i) => w.jsx(Sx, {
    ref: i,
    sideOffset: e,
    className: xi("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
    ...n
  }));
  PR.displayName = Sx.displayName;
  var fu = class {
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
  }, du = typeof window > "u" || "Deno" in globalThis;
  function He() {
  }
  function HR(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function kR(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0;
  }
  function YR(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0);
  }
  function Uf(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function GR(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function xg(t, e) {
    const { type: n = "all", exact: i, fetchStatus: a, predicate: s, queryKey: r, stale: o } = t;
    if (r) {
      if (i) {
        if (e.queryHash !== Oh(r, e.options)) return false;
      } else if (!xr(e.queryKey, r)) return false;
    }
    if (n !== "all") {
      const l = e.isActive();
      if (n === "active" && !l || n === "inactive" && l) return false;
    }
    return !(typeof o == "boolean" && e.isStale() !== o || a && a !== e.state.fetchStatus || s && !s(e));
  }
  function Sg(t, e) {
    const { exact: n, status: i, predicate: a, mutationKey: s } = t;
    if (s) {
      if (!e.options.mutationKey) return false;
      if (n) {
        if (br(e.options.mutationKey) !== br(s)) return false;
      } else if (!xr(e.options.mutationKey, s)) return false;
    }
    return !(i && e.state.status !== i || a && !a(e));
  }
  function Oh(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || br)(t);
  }
  function br(t) {
    return JSON.stringify(t, (e, n) => Pf(n) ? Object.keys(n).sort().reduce((i, a) => (i[a] = n[a], i), {}) : n);
  }
  function xr(t, e) {
    return t === e ? true : typeof t != typeof e ? false : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every((n) => xr(t[n], e[n])) : false;
  }
  function wx(t, e) {
    if (t === e) return t;
    const n = wg(t) && wg(e);
    if (n || Pf(t) && Pf(e)) {
      const i = n ? t : Object.keys(t), a = i.length, s = n ? e : Object.keys(e), r = s.length, o = n ? [] : {}, l = new Set(i);
      let u = 0;
      for (let c = 0; c < r; c++) {
        const f = n ? c : s[c];
        (!n && l.has(f) || n) && t[f] === void 0 && e[f] === void 0 ? (o[f] = void 0, u++) : (o[f] = wx(t[f], e[f]), o[f] === t[f] && t[f] !== void 0 && u++);
      }
      return a === r && u === a ? t : o;
    }
    return e;
  }
  function wg(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length;
  }
  function Pf(t) {
    if (!Tg(t)) return false;
    const e = t.constructor;
    if (e === void 0) return true;
    const n = e.prototype;
    return !(!Tg(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
  }
  function Tg(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function qR(t) {
    return new Promise((e) => {
      setTimeout(e, t);
    });
  }
  function XR(t, e, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(t, e) : n.structuralSharing !== false ? wx(t, e) : e;
  }
  function QR(t, e, n = 0) {
    const i = [
      ...t,
      e
    ];
    return n && i.length > n ? i.slice(1) : i;
  }
  function FR(t, e, n = 0) {
    const i = [
      e,
      ...t
    ];
    return n && i.length > n ? i.slice(0, -1) : i;
  }
  var Dh = Symbol();
  function Tx(t, e) {
    return !t.queryFn && (e == null ? void 0 : e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Dh ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
  }
  var KR = (_a2 = class extends fu {
    constructor() {
      super();
      __privateAdd(this, _t2);
      __privateAdd(this, _e);
      __privateAdd(this, _n);
      __privateSet(this, _n, (t) => {
        if (!du && window.addEventListener) {
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
  }, _t2 = new WeakMap(), _e = new WeakMap(), _n = new WeakMap(), _a2), Ex = new KR(), ZR = (_b2 = class extends fu {
    constructor() {
      super();
      __privateAdd(this, _t3, true);
      __privateAdd(this, _e2);
      __privateAdd(this, _n2);
      __privateSet(this, _n2, (t) => {
        if (!du && window.addEventListener) {
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
  }, _t3 = new WeakMap(), _e2 = new WeakMap(), _n2 = new WeakMap(), _b2), Ml = new ZR();
  function $R() {
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
  function IR(t) {
    return Math.min(1e3 * 2 ** t, 3e4);
  }
  function Ax(t) {
    return (t ?? "online") === "online" ? Ml.isOnline() : true;
  }
  var Cx = class extends Error {
    constructor(t) {
      super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
    }
  };
  function fc(t) {
    return t instanceof Cx;
  }
  function Mx(t) {
    let e = false, n = 0, i = false, a;
    const s = $R(), r = (y) => {
      var _a5;
      i || (h(new Cx(y)), (_a5 = t.abort) == null ? void 0 : _a5.call(t));
    }, o = () => {
      e = true;
    }, l = () => {
      e = false;
    }, u = () => Ex.isFocused() && (t.networkMode === "always" || Ml.isOnline()) && t.canRun(), c = () => Ax(t.networkMode) && t.canRun(), f = (y) => {
      var _a5;
      i || (i = true, (_a5 = t.onSuccess) == null ? void 0 : _a5.call(t, y), a == null ? void 0 : a(), s.resolve(y));
    }, h = (y) => {
      var _a5;
      i || (i = true, (_a5 = t.onError) == null ? void 0 : _a5.call(t, y), a == null ? void 0 : a(), s.reject(y));
    }, d = () => new Promise((y) => {
      var _a5;
      a = (x) => {
        (i || u()) && y(x);
      }, (_a5 = t.onPause) == null ? void 0 : _a5.call(t);
    }).then(() => {
      var _a5;
      a = void 0, i || ((_a5 = t.onContinue) == null ? void 0 : _a5.call(t));
    }), v = () => {
      if (i) return;
      let y;
      const x = n === 0 ? t.initialPromise : void 0;
      try {
        y = x ?? t.fn();
      } catch (p) {
        y = Promise.reject(p);
      }
      Promise.resolve(y).then(f).catch((p) => {
        var _a5;
        if (i) return;
        const m = t.retry ?? (du ? 0 : 3), g = t.retryDelay ?? IR, S = typeof g == "function" ? g(n, p) : g, T = m === true || typeof m == "number" && n < m || typeof m == "function" && m(n, p);
        if (e || !T) {
          h(p);
          return;
        }
        n++, (_a5 = t.onFail) == null ? void 0 : _a5.call(t, n, p), qR(S).then(() => u() ? void 0 : d()).then(() => {
          e ? h(p) : v();
        });
      });
    };
    return {
      promise: s,
      cancel: r,
      continue: () => (a == null ? void 0 : a(), s),
      cancelRetry: o,
      continueRetry: l,
      canStart: c,
      start: () => (c() ? v() : d().then(v), s)
    };
  }
  var JR = (t) => setTimeout(t, 0);
  function WR() {
    let t = [], e = 0, n = (o) => {
      o();
    }, i = (o) => {
      o();
    }, a = JR;
    const s = (o) => {
      e ? t.push(o) : a(() => {
        n(o);
      });
    }, r = () => {
      const o = t;
      t = [], o.length && a(() => {
        i(() => {
          o.forEach((l) => {
            n(l);
          });
        });
      });
    };
    return {
      batch: (o) => {
        let l;
        e++;
        try {
          l = o();
        } finally {
          e--, e || r();
        }
        return l;
      },
      batchCalls: (o) => (...l) => {
        s(() => {
          o(...l);
        });
      },
      schedule: s,
      setNotifyFunction: (o) => {
        n = o;
      },
      setBatchNotifyFunction: (o) => {
        i = o;
      },
      setScheduler: (o) => {
        a = o;
      }
    };
  }
  var Ft = WR(), Rx = (_c2 = class {
    constructor() {
      __privateAdd(this, _t4);
    }
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(), kR(this.gcTime) && __privateSet(this, _t4, setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime));
    }
    updateGcTime(t) {
      this.gcTime = Math.max(this.gcTime || 0, t ?? (du ? 1 / 0 : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
      __privateGet(this, _t4) && (clearTimeout(__privateGet(this, _t4)), __privateSet(this, _t4, void 0));
    }
  }, _t4 = new WeakMap(), _c2), tO = (_d2 = class extends Rx {
    constructor(t) {
      super();
      __privateAdd(this, _tO_instances);
      __privateAdd(this, _t5);
      __privateAdd(this, _e3);
      __privateAdd(this, _n3);
      __privateAdd(this, _a3);
      __privateAdd(this, _i2);
      __privateAdd(this, _r2);
      __privateAdd(this, _o2);
      __privateSet(this, _o2, false), __privateSet(this, _r2, t.defaultOptions), this.setOptions(t.options), this.observers = [], __privateSet(this, _a3, t.client), __privateSet(this, _n3, __privateGet(this, _a3).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, __privateSet(this, _t5, nO(this.options)), this.state = t.state ?? __privateGet(this, _t5), this.scheduleGc();
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
        ...__privateGet(this, _r2),
        ...t
      }, this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === "idle" && __privateGet(this, _n3).remove(this);
    }
    setData(t, e) {
      const n = XR(this.state.data, t, this.options);
      return __privateMethod(this, _tO_instances, s_fn).call(this, {
        data: n,
        type: "success",
        dataUpdatedAt: e == null ? void 0 : e.updatedAt,
        manual: e == null ? void 0 : e.manual
      }), n;
    }
    setState(t, e) {
      __privateMethod(this, _tO_instances, s_fn).call(this, {
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
      return this.observers.some((t) => GR(t.options.enabled, this) !== false);
    }
    isDisabled() {
      return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Dh || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0 ? this.observers.some((t) => Uf(t.options.staleTime, this) === "static") : false;
    }
    isStale() {
      return this.getObserversCount() > 0 ? this.observers.some((t) => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(t = 0) {
      return this.state.data === void 0 ? true : t === "static" ? false : this.state.isInvalidated ? true : !YR(this.state.dataUpdatedAt, t);
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
      this.observers.includes(t) && (this.observers = this.observers.filter((e) => e !== t), this.observers.length || (__privateGet(this, _i2) && (__privateGet(this, _o2) ? __privateGet(this, _i2).cancel({
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
      this.state.isInvalidated || __privateMethod(this, _tO_instances, s_fn).call(this, {
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
          get: () => (__privateSet(this, _o2, true), n.signal)
        });
      }, a = () => {
        const l = Tx(this.options, e), c = (() => {
          const f = {
            client: __privateGet(this, _a3),
            queryKey: this.queryKey,
            meta: this.meta
          };
          return i(f), f;
        })();
        return __privateSet(this, _o2, false), this.options.persister ? this.options.persister(l, c, this) : l(c);
      }, r = (() => {
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
      (_a5 = this.options.behavior) == null ? void 0 : _a5.onFetch(r, this), __privateSet(this, _e3, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_b3 = r.fetchOptions) == null ? void 0 : _b3.meta)) && __privateMethod(this, _tO_instances, s_fn).call(this, {
        type: "fetch",
        meta: (_c3 = r.fetchOptions) == null ? void 0 : _c3.meta
      });
      const o = (l) => {
        var _a6, _b4, _c4, _d3;
        fc(l) && l.silent || __privateMethod(this, _tO_instances, s_fn).call(this, {
          type: "error",
          error: l
        }), fc(l) || ((_b4 = (_a6 = __privateGet(this, _n3).config).onError) == null ? void 0 : _b4.call(_a6, l, this), (_d3 = (_c4 = __privateGet(this, _n3).config).onSettled) == null ? void 0 : _d3.call(_c4, this.state.data, l, this)), this.scheduleGc();
      };
      return __privateSet(this, _i2, Mx({
        initialPromise: e == null ? void 0 : e.initialPromise,
        fn: r.fetchFn,
        abort: n.abort.bind(n),
        onSuccess: (l) => {
          var _a6, _b4, _c4, _d3;
          if (l === void 0) {
            o(new Error(`${this.queryHash} data is undefined`));
            return;
          }
          try {
            this.setData(l);
          } catch (u) {
            o(u);
            return;
          }
          (_b4 = (_a6 = __privateGet(this, _n3).config).onSuccess) == null ? void 0 : _b4.call(_a6, l, this), (_d3 = (_c4 = __privateGet(this, _n3).config).onSettled) == null ? void 0 : _d3.call(_c4, l, this.state.error, this), this.scheduleGc();
        },
        onError: o,
        onFail: (l, u) => {
          __privateMethod(this, _tO_instances, s_fn).call(this, {
            type: "failed",
            failureCount: l,
            error: u
          });
        },
        onPause: () => {
          __privateMethod(this, _tO_instances, s_fn).call(this, {
            type: "pause"
          });
        },
        onContinue: () => {
          __privateMethod(this, _tO_instances, s_fn).call(this, {
            type: "continue"
          });
        },
        retry: r.options.retry,
        retryDelay: r.options.retryDelay,
        networkMode: r.options.networkMode,
        canRun: () => true
      })), __privateGet(this, _i2).start();
    }
  }, _t5 = new WeakMap(), _e3 = new WeakMap(), _n3 = new WeakMap(), _a3 = new WeakMap(), _i2 = new WeakMap(), _r2 = new WeakMap(), _o2 = new WeakMap(), _tO_instances = new WeakSet(), s_fn = function(t) {
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
            ...eO(n.data, this.options),
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
          return fc(i) && i.revert && __privateGet(this, _e3) ? {
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
    this.state = e(this.state), Ft.batch(() => {
      this.observers.forEach((n) => {
        n.onQueryUpdate();
      }), __privateGet(this, _n3).notify({
        query: this,
        type: "updated",
        action: t
      });
    });
  }, _d2);
  function eO(t, e) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: Ax(e.networkMode) ? "fetching" : "paused",
      ...t === void 0 && {
        error: null,
        status: "pending"
      }
    };
  }
  function nO(t) {
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
  var iO = (_e4 = class extends fu {
    constructor(t = {}) {
      super();
      __privateAdd(this, _t6);
      this.config = t, __privateSet(this, _t6, /* @__PURE__ */ new Map());
    }
    build(t, e, n) {
      const i = e.queryKey, a = e.queryHash ?? Oh(i, e);
      let s = this.get(a);
      return s || (s = new tO({
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
      Ft.batch(() => {
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
      return this.getAll().find((n) => xg(e, n));
    }
    findAll(t = {}) {
      const e = this.getAll();
      return Object.keys(t).length > 0 ? e.filter((n) => xg(t, n)) : e;
    }
    notify(t) {
      Ft.batch(() => {
        this.listeners.forEach((e) => {
          e(t);
        });
      });
    }
    onFocus() {
      Ft.batch(() => {
        this.getAll().forEach((t) => {
          t.onFocus();
        });
      });
    }
    onOnline() {
      Ft.batch(() => {
        this.getAll().forEach((t) => {
          t.onOnline();
        });
      });
    }
  }, _t6 = new WeakMap(), _e4), aO = (_f2 = class extends Rx {
    constructor(t) {
      super();
      __privateAdd(this, _aO_instances);
      __privateAdd(this, _t7);
      __privateAdd(this, _e5);
      __privateAdd(this, _n4);
      this.mutationId = t.mutationId, __privateSet(this, _e5, t.mutationCache), __privateSet(this, _t7, []), this.state = t.state || sO(), this.setOptions(t.options), this.scheduleGc();
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
        __privateMethod(this, _aO_instances, a_fn).call(this, {
          type: "continue"
        });
      };
      __privateSet(this, _n4, Mx({
        fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
        onFail: (a, s) => {
          __privateMethod(this, _aO_instances, a_fn).call(this, {
            type: "failed",
            failureCount: a,
            error: s
          });
        },
        onPause: () => {
          __privateMethod(this, _aO_instances, a_fn).call(this, {
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
          __privateMethod(this, _aO_instances, a_fn).call(this, {
            type: "pending",
            variables: t,
            isPaused: i
          }), await ((_b3 = (_a5 = __privateGet(this, _e5).config).onMutate) == null ? void 0 : _b3.call(_a5, t, this));
          const s = await ((_d3 = (_c3 = this.options).onMutate) == null ? void 0 : _d3.call(_c3, t));
          s !== this.state.context && __privateMethod(this, _aO_instances, a_fn).call(this, {
            type: "pending",
            context: s,
            variables: t,
            isPaused: i
          });
        }
        const a = await __privateGet(this, _n4).start();
        return await ((_f3 = (_e8 = __privateGet(this, _e5).config).onSuccess) == null ? void 0 : _f3.call(_e8, a, t, this.state.context, this)), await ((_h3 = (_g3 = this.options).onSuccess) == null ? void 0 : _h3.call(_g3, a, t, this.state.context)), await ((_j = (_i4 = __privateGet(this, _e5).config).onSettled) == null ? void 0 : _j.call(_i4, a, null, this.state.variables, this.state.context, this)), await ((_l2 = (_k = this.options).onSettled) == null ? void 0 : _l2.call(_k, a, null, t, this.state.context)), __privateMethod(this, _aO_instances, a_fn).call(this, {
          type: "success",
          data: a
        }), a;
      } catch (a) {
        try {
          throw await ((_n7 = (_m2 = __privateGet(this, _e5).config).onError) == null ? void 0 : _n7.call(_m2, a, t, this.state.context, this)), await ((_p2 = (_o4 = this.options).onError) == null ? void 0 : _p2.call(_o4, a, t, this.state.context)), await ((_r4 = (_q = __privateGet(this, _e5).config).onSettled) == null ? void 0 : _r4.call(_q, void 0, a, this.state.variables, this.state.context, this)), await ((_t10 = (_s3 = this.options).onSettled) == null ? void 0 : _t10.call(_s3, void 0, a, t, this.state.context)), a;
        } finally {
          __privateMethod(this, _aO_instances, a_fn).call(this, {
            type: "error",
            error: a
          });
        }
      } finally {
        __privateGet(this, _e5).runNext(this);
      }
    }
  }, _t7 = new WeakMap(), _e5 = new WeakMap(), _n4 = new WeakMap(), _aO_instances = new WeakSet(), a_fn = function(t) {
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
    this.state = e(this.state), Ft.batch(() => {
      __privateGet(this, _t7).forEach((n) => {
        n.onMutationUpdate(t);
      }), __privateGet(this, _e5).notify({
        mutation: this,
        type: "updated",
        action: t
      });
    });
  }, _f2);
  function sO() {
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
  var rO = (_g2 = class extends fu {
    constructor(t = {}) {
      super();
      __privateAdd(this, _t8);
      __privateAdd(this, _e6);
      __privateAdd(this, _n5);
      this.config = t, __privateSet(this, _t8, /* @__PURE__ */ new Set()), __privateSet(this, _e6, /* @__PURE__ */ new Map()), __privateSet(this, _n5, 0);
    }
    build(t, e, n) {
      const i = new aO({
        mutationCache: this,
        mutationId: ++__privateWrapper(this, _n5)._,
        options: t.defaultMutationOptions(e),
        state: n
      });
      return this.add(i), i;
    }
    add(t) {
      __privateGet(this, _t8).add(t);
      const e = po(t);
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
        const e = po(t);
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
      const e = po(t);
      if (typeof e == "string") {
        const i = (_a5 = __privateGet(this, _e6).get(e)) == null ? void 0 : _a5.find((a) => a.state.status === "pending");
        return !i || i === t;
      } else return true;
    }
    runNext(t) {
      var _a5, _b3;
      const e = po(t);
      return typeof e == "string" ? ((_b3 = (_a5 = __privateGet(this, _e6).get(e)) == null ? void 0 : _a5.find((i) => i !== t && i.state.isPaused)) == null ? void 0 : _b3.continue()) ?? Promise.resolve() : Promise.resolve();
    }
    clear() {
      Ft.batch(() => {
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
      return this.getAll().find((n) => Sg(e, n));
    }
    findAll(t = {}) {
      return this.getAll().filter((e) => Sg(t, e));
    }
    notify(t) {
      Ft.batch(() => {
        this.listeners.forEach((e) => {
          e(t);
        });
      });
    }
    resumePausedMutations() {
      const t = this.getAll().filter((e) => e.state.isPaused);
      return Ft.batch(() => Promise.all(t.map((e) => e.continue().catch(He))));
    }
  }, _t8 = new WeakMap(), _e6 = new WeakMap(), _n5 = new WeakMap(), _g2);
  function po(t) {
    var _a5;
    return (_a5 = t.options.scope) == null ? void 0 : _a5.id;
  }
  function Eg(t) {
    return {
      onFetch: (e, n) => {
        var _a5, _b3, _c3, _d3, _e8;
        const i = e.options, a = (_c3 = (_b3 = (_a5 = e.fetchOptions) == null ? void 0 : _a5.meta) == null ? void 0 : _b3.fetchMore) == null ? void 0 : _c3.direction, s = ((_d3 = e.state.data) == null ? void 0 : _d3.pages) || [], r = ((_e8 = e.state.data) == null ? void 0 : _e8.pageParams) || [];
        let o = {
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
          }, h = Tx(e.options, e.fetchOptions), d = async (v, y, x) => {
            if (c) return Promise.reject();
            if (y == null && v.pages.length) return Promise.resolve(v);
            const m = (() => {
              const A = {
                client: e.client,
                queryKey: e.queryKey,
                pageParam: y,
                direction: x ? "backward" : "forward",
                meta: e.options.meta
              };
              return f(A), A;
            })(), g = await h(m), { maxPages: S } = e.options, T = x ? FR : QR;
            return {
              pages: T(v.pages, g, S),
              pageParams: T(v.pageParams, y, S)
            };
          };
          if (a && s.length) {
            const v = a === "backward", y = v ? oO : Ag, x = {
              pages: s,
              pageParams: r
            }, p = y(i, x);
            o = await d(x, p, v);
          } else {
            const v = t ?? s.length;
            do {
              const y = l === 0 ? r[0] ?? i.initialPageParam : Ag(i, o);
              if (l > 0 && y == null) break;
              o = await d(o, y), l++;
            } while (l < v);
          }
          return o;
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
  function Ag(t, { pages: e, pageParams: n }) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, n[i], n) : void 0;
  }
  function oO(t, { pages: e, pageParams: n }) {
    var _a5;
    return e.length > 0 ? (_a5 = t.getPreviousPageParam) == null ? void 0 : _a5.call(t, e[0], e, n[0], n) : void 0;
  }
  var lO = (_h2 = class {
    constructor(t = {}) {
      __privateAdd(this, _t9);
      __privateAdd(this, _e7);
      __privateAdd(this, _n6);
      __privateAdd(this, _a4);
      __privateAdd(this, _i3);
      __privateAdd(this, _r3);
      __privateAdd(this, _o3);
      __privateAdd(this, _s2);
      __privateSet(this, _t9, t.queryCache || new iO()), __privateSet(this, _e7, t.mutationCache || new rO()), __privateSet(this, _n6, t.defaultOptions || {}), __privateSet(this, _a4, /* @__PURE__ */ new Map()), __privateSet(this, _i3, /* @__PURE__ */ new Map()), __privateSet(this, _r3, 0);
    }
    mount() {
      __privateWrapper(this, _r3)._++, __privateGet(this, _r3) === 1 && (__privateSet(this, _o3, Ex.subscribe(async (t) => {
        t && (await this.resumePausedMutations(), __privateGet(this, _t9).onFocus());
      })), __privateSet(this, _s2, Ml.subscribe(async (t) => {
        t && (await this.resumePausedMutations(), __privateGet(this, _t9).onOnline());
      })));
    }
    unmount() {
      var _a5, _b3;
      __privateWrapper(this, _r3)._--, __privateGet(this, _r3) === 0 && ((_a5 = __privateGet(this, _o3)) == null ? void 0 : _a5.call(this), __privateSet(this, _o3, void 0), (_b3 = __privateGet(this, _s2)) == null ? void 0 : _b3.call(this), __privateSet(this, _s2, void 0));
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
      return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && n.isStaleByTime(Uf(e.staleTime, n)) && this.prefetchQuery(e), Promise.resolve(i));
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
      }), s = (_a5 = __privateGet(this, _t9).get(i.queryHash)) == null ? void 0 : _a5.state.data, r = HR(e, s);
      if (r !== void 0) return __privateGet(this, _t9).build(this, i).setData(r, {
        ...n,
        manual: true
      });
    }
    setQueriesData(t, e, n) {
      return Ft.batch(() => __privateGet(this, _t9).findAll(t).map(({ queryKey: i }) => [
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
      Ft.batch(() => {
        e.findAll(t).forEach((n) => {
          e.remove(n);
        });
      });
    }
    resetQueries(t, e) {
      const n = __privateGet(this, _t9);
      return Ft.batch(() => (n.findAll(t).forEach((i) => {
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
      }, i = Ft.batch(() => __privateGet(this, _t9).findAll(t).map((a) => a.cancel(n)));
      return Promise.all(i).then(He).catch(He);
    }
    invalidateQueries(t, e = {}) {
      return Ft.batch(() => (__privateGet(this, _t9).findAll(t).forEach((n) => {
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
      }, i = Ft.batch(() => __privateGet(this, _t9).findAll(t).filter((a) => !a.isDisabled() && !a.isStatic()).map((a) => {
        let s = a.fetch(void 0, n);
        return n.throwOnError || (s = s.catch(He)), a.state.fetchStatus === "paused" ? Promise.resolve() : s;
      }));
      return Promise.all(i).then(He);
    }
    fetchQuery(t) {
      const e = this.defaultQueryOptions(t);
      e.retry === void 0 && (e.retry = false);
      const n = __privateGet(this, _t9).build(this, e);
      return n.isStaleByTime(Uf(e.staleTime, n)) ? n.fetch(e) : Promise.resolve(n.state.data);
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(He).catch(He);
    }
    fetchInfiniteQuery(t) {
      return t.behavior = Eg(t.pages), this.fetchQuery(t);
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(He).catch(He);
    }
    ensureInfiniteQueryData(t) {
      return t.behavior = Eg(t.pages), this.ensureQueryData(t);
    }
    resumePausedMutations() {
      return Ml.isOnline() ? __privateGet(this, _e7).resumePausedMutations() : Promise.resolve();
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
      __privateGet(this, _a4).set(br(t), {
        queryKey: t,
        defaultOptions: e
      });
    }
    getQueryDefaults(t) {
      const e = [
        ...__privateGet(this, _a4).values()
      ], n = {};
      return e.forEach((i) => {
        xr(t, i.queryKey) && Object.assign(n, i.defaultOptions);
      }), n;
    }
    setMutationDefaults(t, e) {
      __privateGet(this, _i3).set(br(t), {
        mutationKey: t,
        defaultOptions: e
      });
    }
    getMutationDefaults(t) {
      const e = [
        ...__privateGet(this, _i3).values()
      ], n = {};
      return e.forEach((i) => {
        xr(t, i.mutationKey) && Object.assign(n, i.defaultOptions);
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
      return e.queryHash || (e.queryHash = Oh(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === Dh && (e.enabled = false), e;
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
  }, _t9 = new WeakMap(), _e7 = new WeakMap(), _n6 = new WeakMap(), _a4 = new WeakMap(), _i3 = new WeakMap(), _r3 = new WeakMap(), _o3 = new WeakMap(), _s2 = new WeakMap(), _h2), uO = b.createContext(void 0), cO = ({ client: t, children: e }) => (b.useEffect(() => (t.mount(), () => {
    t.unmount();
  }), [
    t
  ]), w.jsx(uO.Provider, {
    value: t,
    children: e
  }));
  function Sr() {
    return Sr = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    }, Sr.apply(this, arguments);
  }
  var $n;
  (function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
  })($n || ($n = {}));
  const Cg = "popstate";
  function fO(t) {
    t === void 0 && (t = {});
    function e(a, s) {
      let { pathname: r = "/", search: o = "", hash: l = "" } = ea(a.location.hash.substr(1));
      return !r.startsWith("/") && !r.startsWith(".") && (r = "/" + r), Hf("", {
        pathname: r,
        search: o,
        hash: l
      }, s.state && s.state.usr || null, s.state && s.state.key || "default");
    }
    function n(a, s) {
      let r = a.document.querySelector("base"), o = "";
      if (r && r.getAttribute("href")) {
        let l = a.location.href, u = l.indexOf("#");
        o = u === -1 ? l : l.slice(0, u);
      }
      return o + "#" + (typeof s == "string" ? s : Rl(s));
    }
    function i(a, s) {
      Nh(a.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(s) + ")");
    }
    return hO(e, n, i, t);
  }
  function Ct(t, e) {
    if (t === false || t === null || typeof t > "u") throw new Error(e);
  }
  function Nh(t, e) {
    if (!t) {
      typeof console < "u" && console.warn(e);
      try {
        throw new Error(e);
      } catch {
      }
    }
  }
  function dO() {
    return Math.random().toString(36).substr(2, 8);
  }
  function Mg(t, e) {
    return {
      usr: t.state,
      key: t.key,
      idx: e
    };
  }
  function Hf(t, e, n, i) {
    return n === void 0 && (n = null), Sr({
      pathname: typeof t == "string" ? t : t.pathname,
      search: "",
      hash: ""
    }, typeof e == "string" ? ea(e) : e, {
      state: n,
      key: e && e.key || i || dO()
    });
  }
  function Rl(t) {
    let { pathname: e = "/", search: n = "", hash: i = "" } = t;
    return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i), e;
  }
  function ea(t) {
    let e = {};
    if (t) {
      let n = t.indexOf("#");
      n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
      let i = t.indexOf("?");
      i >= 0 && (e.search = t.substr(i), t = t.substr(0, i)), t && (e.pathname = t);
    }
    return e;
  }
  function hO(t, e, n, i) {
    i === void 0 && (i = {});
    let { window: a = document.defaultView, v5Compat: s = false } = i, r = a.history, o = $n.Pop, l = null, u = c();
    u == null && (u = 0, r.replaceState(Sr({}, r.state, {
      idx: u
    }), ""));
    function c() {
      return (r.state || {
        idx: null
      }).idx;
    }
    function f() {
      o = $n.Pop;
      let x = c(), p = x == null ? null : x - u;
      u = x, l && l({
        action: o,
        location: y.location,
        delta: p
      });
    }
    function h(x, p) {
      o = $n.Push;
      let m = Hf(y.location, x, p);
      n && n(m, x), u = c() + 1;
      let g = Mg(m, u), S = y.createHref(m);
      try {
        r.pushState(g, "", S);
      } catch (T) {
        if (T instanceof DOMException && T.name === "DataCloneError") throw T;
        a.location.assign(S);
      }
      s && l && l({
        action: o,
        location: y.location,
        delta: 1
      });
    }
    function d(x, p) {
      o = $n.Replace;
      let m = Hf(y.location, x, p);
      n && n(m, x), u = c();
      let g = Mg(m, u), S = y.createHref(m);
      r.replaceState(g, "", S), s && l && l({
        action: o,
        location: y.location,
        delta: 0
      });
    }
    function v(x) {
      let p = a.location.origin !== "null" ? a.location.origin : a.location.href, m = typeof x == "string" ? x : Rl(x);
      return m = m.replace(/ $/, "%20"), Ct(p, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, p);
    }
    let y = {
      get action() {
        return o;
      },
      get location() {
        return t(a, r);
      },
      listen(x) {
        if (l) throw new Error("A history only accepts one active listener");
        return a.addEventListener(Cg, f), l = x, () => {
          a.removeEventListener(Cg, f), l = null;
        };
      },
      createHref(x) {
        return e(a, x);
      },
      createURL: v,
      encodeLocation(x) {
        let p = v(x);
        return {
          pathname: p.pathname,
          search: p.search,
          hash: p.hash
        };
      },
      push: h,
      replace: d,
      go(x) {
        return r.go(x);
      }
    };
    return y;
  }
  var Rg;
  (function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error";
  })(Rg || (Rg = {}));
  function mO(t, e, n) {
    return n === void 0 && (n = "/"), pO(t, e, n, false);
  }
  function pO(t, e, n, i) {
    let a = typeof e == "string" ? ea(e) : e, s = jh(a.pathname || "/", n);
    if (s == null) return null;
    let r = Ox(t);
    gO(r);
    let o = null;
    for (let l = 0; o == null && l < r.length; ++l) {
      let u = MO(s);
      o = AO(r[l], u, i);
    }
    return o;
  }
  function Ox(t, e, n, i) {
    e === void 0 && (e = []), n === void 0 && (n = []), i === void 0 && (i = "");
    let a = (s, r, o) => {
      let l = {
        relativePath: o === void 0 ? s.path || "" : o,
        caseSensitive: s.caseSensitive === true,
        childrenIndex: r,
        route: s
      };
      l.relativePath.startsWith("/") && (Ct(l.relativePath.startsWith(i), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(i.length));
      let u = oi([
        i,
        l.relativePath
      ]), c = n.concat(l);
      s.children && s.children.length > 0 && (Ct(s.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Ox(s.children, e, c, u)), !(s.path == null && !s.index) && e.push({
        path: u,
        score: TO(u, s.index),
        routesMeta: c
      });
    };
    return t.forEach((s, r) => {
      var o;
      if (s.path === "" || !((o = s.path) != null && o.includes("?"))) a(s, r);
      else for (let l of Dx(s.path)) a(s, r, l);
    }), e;
  }
  function Dx(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [n, ...i] = e, a = n.endsWith("?"), s = n.replace(/\?$/, "");
    if (i.length === 0) return a ? [
      s,
      ""
    ] : [
      s
    ];
    let r = Dx(i.join("/")), o = [];
    return o.push(...r.map((l) => l === "" ? s : [
      s,
      l
    ].join("/"))), a && o.push(...r), o.map((l) => t.startsWith("/") && l === "" ? "/" : l);
  }
  function gO(t) {
    t.sort((e, n) => e.score !== n.score ? n.score - e.score : EO(e.routesMeta.map((i) => i.childrenIndex), n.routesMeta.map((i) => i.childrenIndex)));
  }
  const yO = /^:[\w-]+$/, vO = 3, bO = 2, xO = 1, SO = 10, wO = -2, Og = (t) => t === "*";
  function TO(t, e) {
    let n = t.split("/"), i = n.length;
    return n.some(Og) && (i += wO), e && (i += bO), n.filter((a) => !Og(a)).reduce((a, s) => a + (yO.test(s) ? vO : s === "" ? xO : SO), i);
  }
  function EO(t, e) {
    return t.length === e.length && t.slice(0, -1).every((i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0;
  }
  function AO(t, e, n) {
    let { routesMeta: i } = t, a = {}, s = "/", r = [];
    for (let o = 0; o < i.length; ++o) {
      let l = i[o], u = o === i.length - 1, c = s === "/" ? e : e.slice(s.length) || "/", f = Dg({
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: u
      }, c), h = l.route;
      if (!f && u && n && !i[i.length - 1].route.index && (f = Dg({
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: false
      }, c)), !f) return null;
      Object.assign(a, f.params), r.push({
        params: a,
        pathname: oi([
          s,
          f.pathname
        ]),
        pathnameBase: NO(oi([
          s,
          f.pathnameBase
        ])),
        route: h
      }), f.pathnameBase !== "/" && (s = oi([
        s,
        f.pathnameBase
      ]));
    }
    return r;
  }
  function Dg(t, e) {
    typeof t == "string" && (t = {
      path: t,
      caseSensitive: false,
      end: true
    });
    let [n, i] = CO(t.path, t.caseSensitive, t.end), a = e.match(n);
    if (!a) return null;
    let s = a[0], r = s.replace(/(.)\/+$/, "$1"), o = a.slice(1);
    return {
      params: i.reduce((u, c, f) => {
        let { paramName: h, isOptional: d } = c;
        if (h === "*") {
          let y = o[f] || "";
          r = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
        }
        const v = o[f];
        return d && !v ? u[h] = void 0 : u[h] = (v || "").replace(/%2F/g, "/"), u;
      }, {}),
      pathname: s,
      pathnameBase: r,
      pattern: t
    };
  }
  function CO(t, e, n) {
    e === void 0 && (e = false), n === void 0 && (n = true), Nh(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = [], a = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (r, o, l) => (i.push({
      paramName: o,
      isOptional: l != null
    }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
      paramName: "*"
    }), a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"), [
      new RegExp(a, e ? void 0 : "i"),
      i
    ];
  }
  function MO(t) {
    try {
      return t.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
    } catch (e) {
      return Nh(false, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t;
    }
  }
  function jh(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length, i = t.charAt(n);
    return i && i !== "/" ? null : t.slice(n) || "/";
  }
  function RO(t, e) {
    e === void 0 && (e = "/");
    let { pathname: n, search: i = "", hash: a = "" } = typeof t == "string" ? ea(t) : t;
    return {
      pathname: n ? n.startsWith("/") ? n : OO(n, e) : e,
      search: jO(i),
      hash: zO(a)
    };
  }
  function OO(t, e) {
    let n = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach((a) => {
      a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
    }), n.length > 1 ? n.join("/") : "/";
  }
  function dc(t, e, n, i) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
  }
  function DO(t) {
    return t.filter((e, n) => n === 0 || e.route.path && e.route.path.length > 0);
  }
  function zh(t, e) {
    let n = DO(t);
    return e ? n.map((i, a) => a === n.length - 1 ? i.pathname : i.pathnameBase) : n.map((i) => i.pathnameBase);
  }
  function _h(t, e, n, i) {
    i === void 0 && (i = false);
    let a;
    typeof t == "string" ? a = ea(t) : (a = Sr({}, t), Ct(!a.pathname || !a.pathname.includes("?"), dc("?", "pathname", "search", a)), Ct(!a.pathname || !a.pathname.includes("#"), dc("#", "pathname", "hash", a)), Ct(!a.search || !a.search.includes("#"), dc("#", "search", "hash", a)));
    let s = t === "" || a.pathname === "", r = s ? "/" : a.pathname, o;
    if (r == null) o = n;
    else {
      let f = e.length - 1;
      if (!i && r.startsWith("..")) {
        let h = r.split("/");
        for (; h[0] === ".."; ) h.shift(), f -= 1;
        a.pathname = h.join("/");
      }
      o = f >= 0 ? e[f] : "/";
    }
    let l = RO(a, o), u = r && r !== "/" && r.endsWith("/"), c = (s || r === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
  }
  const oi = (t) => t.join("/").replace(/\/\/+/g, "/"), NO = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), jO = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, zO = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
  function _O(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
  }
  const Nx = [
    "post",
    "put",
    "patch",
    "delete"
  ];
  new Set(Nx);
  const LO = [
    "get",
    ...Nx
  ];
  new Set(LO);
  function wr() {
    return wr = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    }, wr.apply(this, arguments);
  }
  const Lh = b.createContext(null), VO = b.createContext(null), Si = b.createContext(null), hu = b.createContext(null), wi = b.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  }), jx = b.createContext(null);
  function BO(t, e) {
    let { relative: n } = e === void 0 ? {} : e;
    ms() || Ct(false);
    let { basename: i, navigator: a } = b.useContext(Si), { hash: s, pathname: r, search: o } = _x(t, {
      relative: n
    }), l = r;
    return i !== "/" && (l = r === "/" ? i : oi([
      i,
      r
    ])), a.createHref({
      pathname: l,
      search: o,
      hash: s
    });
  }
  function ms() {
    return b.useContext(hu) != null;
  }
  function ps() {
    return ms() || Ct(false), b.useContext(hu).location;
  }
  function zx(t) {
    b.useContext(Si).static || b.useLayoutEffect(t);
  }
  function Vh() {
    let { isDataRoute: t } = b.useContext(wi);
    return t ? $O() : UO();
  }
  function UO() {
    ms() || Ct(false);
    let t = b.useContext(Lh), { basename: e, future: n, navigator: i } = b.useContext(Si), { matches: a } = b.useContext(wi), { pathname: s } = ps(), r = JSON.stringify(zh(a, n.v7_relativeSplatPath)), o = b.useRef(false);
    return zx(() => {
      o.current = true;
    }), b.useCallback(function(u, c) {
      if (c === void 0 && (c = {}), !o.current) return;
      if (typeof u == "number") {
        i.go(u);
        return;
      }
      let f = _h(u, JSON.parse(r), s, c.relative === "path");
      t == null && e !== "/" && (f.pathname = f.pathname === "/" ? e : oi([
        e,
        f.pathname
      ])), (c.replace ? i.replace : i.push)(f, c.state, c);
    }, [
      e,
      i,
      r,
      s,
      t
    ]);
  }
  function _x(t, e) {
    let { relative: n } = e === void 0 ? {} : e, { future: i } = b.useContext(Si), { matches: a } = b.useContext(wi), { pathname: s } = ps(), r = JSON.stringify(zh(a, i.v7_relativeSplatPath));
    return b.useMemo(() => _h(t, JSON.parse(r), s, n === "path"), [
      t,
      r,
      s,
      n
    ]);
  }
  function PO(t, e) {
    return HO(t, e);
  }
  function HO(t, e, n, i) {
    ms() || Ct(false);
    let { navigator: a } = b.useContext(Si), { matches: s } = b.useContext(wi), r = s[s.length - 1], o = r ? r.params : {};
    r && r.pathname;
    let l = r ? r.pathnameBase : "/";
    r && r.route;
    let u = ps(), c;
    if (e) {
      var f;
      let x = typeof e == "string" ? ea(e) : e;
      l === "/" || (f = x.pathname) != null && f.startsWith(l) || Ct(false), c = x;
    } else c = u;
    let h = c.pathname || "/", d = h;
    if (l !== "/") {
      let x = l.replace(/^\//, "").split("/");
      d = "/" + h.replace(/^\//, "").split("/").slice(x.length).join("/");
    }
    let v = mO(t, {
      pathname: d
    }), y = XO(v && v.map((x) => Object.assign({}, x, {
      params: Object.assign({}, o, x.params),
      pathname: oi([
        l,
        a.encodeLocation ? a.encodeLocation(x.pathname).pathname : x.pathname
      ]),
      pathnameBase: x.pathnameBase === "/" ? l : oi([
        l,
        a.encodeLocation ? a.encodeLocation(x.pathnameBase).pathname : x.pathnameBase
      ])
    })), s, n, i);
    return e && y ? b.createElement(hu.Provider, {
      value: {
        location: wr({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, c),
        navigationType: $n.Pop
      }
    }, y) : y;
  }
  function kO() {
    let t = ZO(), e = _O(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t), n = t instanceof Error ? t.stack : null, a = {
      padding: "0.5rem",
      backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return b.createElement(b.Fragment, null, b.createElement("h2", null, "Unexpected Application Error!"), b.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, e), n ? b.createElement("pre", {
      style: a
    }, n) : null, null);
  }
  const YO = b.createElement(kO, null);
  class GO extends b.Component {
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
      return this.state.error !== void 0 ? b.createElement(wi.Provider, {
        value: this.props.routeContext
      }, b.createElement(jx.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  }
  function qO(t) {
    let { routeContext: e, match: n, children: i } = t, a = b.useContext(Lh);
    return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), b.createElement(wi.Provider, {
      value: e
    }, i);
  }
  function XO(t, e, n, i) {
    var a;
    if (e === void 0 && (e = []), n === void 0 && (n = null), i === void 0 && (i = null), t == null) {
      var s;
      if (!n) return null;
      if (n.errors) t = n.matches;
      else if ((s = i) != null && s.v7_partialHydration && e.length === 0 && !n.initialized && n.matches.length > 0) t = n.matches;
      else return null;
    }
    let r = t, o = (a = n) == null ? void 0 : a.errors;
    if (o != null) {
      let c = r.findIndex((f) => f.route.id && (o == null ? void 0 : o[f.route.id]) !== void 0);
      c >= 0 || Ct(false), r = r.slice(0, Math.min(r.length, c + 1));
    }
    let l = false, u = -1;
    if (n && i && i.v7_partialHydration) for (let c = 0; c < r.length; c++) {
      let f = r[c];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id) {
        let { loaderData: h, errors: d } = n, v = f.route.loader && h[f.route.id] === void 0 && (!d || d[f.route.id] === void 0);
        if (f.route.lazy || v) {
          l = true, u >= 0 ? r = r.slice(0, u + 1) : r = [
            r[0]
          ];
          break;
        }
      }
    }
    return r.reduceRight((c, f, h) => {
      let d, v = false, y = null, x = null;
      n && (d = o && f.route.id ? o[f.route.id] : void 0, y = f.route.errorElement || YO, l && (u < 0 && h === 0 ? (v = true, x = null) : u === h && (v = true, x = f.route.hydrateFallbackElement || null)));
      let p = e.concat(r.slice(0, h + 1)), m = () => {
        let g;
        return d ? g = y : v ? g = x : f.route.Component ? g = b.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = c, b.createElement(qO, {
          match: f,
          routeContext: {
            outlet: c,
            matches: p,
            isDataRoute: n != null
          },
          children: g
        });
      };
      return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? b.createElement(GO, {
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
  var Lx = function(t) {
    return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t;
  }(Lx || {}), Ol = function(t) {
    return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t;
  }(Ol || {});
  function QO(t) {
    let e = b.useContext(Lh);
    return e || Ct(false), e;
  }
  function FO(t) {
    let e = b.useContext(VO);
    return e || Ct(false), e;
  }
  function KO(t) {
    let e = b.useContext(wi);
    return e || Ct(false), e;
  }
  function Vx(t) {
    let e = KO(), n = e.matches[e.matches.length - 1];
    return n.route.id || Ct(false), n.route.id;
  }
  function ZO() {
    var t;
    let e = b.useContext(jx), n = FO(Ol.UseRouteError), i = Vx(Ol.UseRouteError);
    return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[i];
  }
  function $O() {
    let { router: t } = QO(Lx.UseNavigateStable), e = Vx(Ol.UseNavigateStable), n = b.useRef(false);
    return zx(() => {
      n.current = true;
    }), b.useCallback(function(a, s) {
      s === void 0 && (s = {}), n.current && (typeof a == "number" ? t.navigate(a) : t.navigate(a, wr({
        fromRouteId: e
      }, s)));
    }, [
      t,
      e
    ]);
  }
  function IO(t, e) {
    t == null ? void 0 : t.v7_startTransition, t == null ? void 0 : t.v7_relativeSplatPath;
  }
  function JO(t) {
    let { to: e, replace: n, state: i, relative: a } = t;
    ms() || Ct(false);
    let { future: s, static: r } = b.useContext(Si), { matches: o } = b.useContext(wi), { pathname: l } = ps(), u = Vh(), c = _h(e, zh(o, s.v7_relativeSplatPath), l, a === "path"), f = JSON.stringify(c);
    return b.useEffect(() => u(JSON.parse(f), {
      replace: n,
      state: i,
      relative: a
    }), [
      u,
      f,
      a,
      n,
      i
    ]), null;
  }
  function ha(t) {
    Ct(false);
  }
  function WO(t) {
    let { basename: e = "/", children: n = null, location: i, navigationType: a = $n.Pop, navigator: s, static: r = false, future: o } = t;
    ms() && Ct(false);
    let l = e.replace(/^\/*/, "/"), u = b.useMemo(() => ({
      basename: l,
      navigator: s,
      static: r,
      future: wr({
        v7_relativeSplatPath: false
      }, o)
    }), [
      l,
      o,
      s,
      r
    ]);
    typeof i == "string" && (i = ea(i));
    let { pathname: c = "/", search: f = "", hash: h = "", state: d = null, key: v = "default" } = i, y = b.useMemo(() => {
      let x = jh(c, l);
      return x == null ? null : {
        location: {
          pathname: x,
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
    return y == null ? null : b.createElement(Si.Provider, {
      value: u
    }, b.createElement(hu.Provider, {
      children: n,
      value: y
    }));
  }
  function tD(t) {
    let { children: e, location: n } = t;
    return PO(kf(e), n);
  }
  new Promise(() => {
  });
  function kf(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return b.Children.forEach(t, (i, a) => {
      if (!b.isValidElement(i)) return;
      let s = [
        ...e,
        a
      ];
      if (i.type === b.Fragment) {
        n.push.apply(n, kf(i.props.children, s));
        return;
      }
      i.type !== ha && Ct(false), !i.props.index || !i.props.children || Ct(false);
      let r = {
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
      i.props.children && (r.children = kf(i.props.children, s)), n.push(r);
    }), n;
  }
  function Yf() {
    return Yf = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    }, Yf.apply(this, arguments);
  }
  function eD(t, e) {
    if (t == null) return {};
    var n = {}, i = Object.keys(t), a, s;
    for (s = 0; s < i.length; s++) a = i[s], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n;
  }
  function nD(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
  }
  function iD(t, e) {
    return t.button === 0 && (!e || e === "_self") && !nD(t);
  }
  const aD = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition"
  ], sD = "6";
  try {
    window.__reactRouterVersion = sD;
  } catch {
  }
  const rD = "startTransition", Ng = hv[rD];
  function oD(t) {
    let { basename: e, children: n, future: i, window: a } = t, s = b.useRef();
    s.current == null && (s.current = fO({
      window: a,
      v5Compat: true
    }));
    let r = s.current, [o, l] = b.useState({
      action: r.action,
      location: r.location
    }), { v7_startTransition: u } = i || {}, c = b.useCallback((f) => {
      u && Ng ? Ng(() => l(f)) : l(f);
    }, [
      l,
      u
    ]);
    return b.useLayoutEffect(() => r.listen(c), [
      r,
      c
    ]), b.useEffect(() => IO(i), [
      i
    ]), b.createElement(WO, {
      basename: e,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: r,
      future: i
    });
  }
  let lD, uD;
  lD = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  uD = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  cD = b.forwardRef(function(e, n) {
    let { onClick: i, relative: a, reloadDocument: s, replace: r, state: o, target: l, to: u, preventScrollReset: c, viewTransition: f } = e, h = eD(e, aD), { basename: d } = b.useContext(Si), v, y = false;
    if (typeof u == "string" && uD.test(u) && (v = u, lD)) try {
      let g = new URL(window.location.href), S = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u), T = jh(S.pathname, d);
      S.origin === g.origin && T != null ? u = T + S.search + S.hash : y = true;
    } catch {
    }
    let x = BO(u, {
      relative: a
    }), p = fD(u, {
      replace: r,
      state: o,
      target: l,
      preventScrollReset: c,
      relative: a,
      viewTransition: f
    });
    function m(g) {
      i && i(g), g.defaultPrevented || p(g);
    }
    return b.createElement("a", Yf({}, h, {
      href: v || x,
      onClick: y || s ? i : m,
      ref: n,
      target: l
    }));
  });
  var jg;
  (function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState";
  })(jg || (jg = {}));
  var zg;
  (function(t) {
    t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration";
  })(zg || (zg = {}));
  function fD(t, e) {
    let { target: n, replace: i, state: a, preventScrollReset: s, relative: r, viewTransition: o } = e === void 0 ? {} : e, l = Vh(), u = ps(), c = _x(t, {
      relative: r
    });
    return b.useCallback((f) => {
      if (iD(f, n)) {
        f.preventDefault();
        let h = i !== void 0 ? i : Rl(u) === Rl(c);
        l(t, {
          replace: h,
          state: a,
          preventScrollReset: s,
          relative: r,
          viewTransition: o
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
      r,
      o
    ]);
  }
  class dD extends b.Component {
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
  let Vs, Lg, hD, go;
  ua = {
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
        href: "https://www.linkedin.com/in/amritnair1"
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
  _g = [
    {
      id: "thorp",
      name: "THORP",
      detail: "Building parallel agent orchestration to generate and score the feed.",
      color: "#ff7a2f"
    },
    {
      id: "clinicalhours",
      name: "CLINICALHOURS",
      detail: "Scaling the receptionist agent to more clinics after the YC batch.",
      color: "#31d8ff"
    }
  ];
  Gf = [
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
          body: "Shipped Pulsematic, an AI inbox-triage and auto-drafting system for athenaOne and other EHR inboxes.",
          bullets: [
            "Saved physicians 90+ minutes per provider daily \u2014 roughly 3 more patients a day",
            "Built a multi-agent orchestrator on GCP + Vertex AI to route, prioritise and optimise drafts",
            "Automated CI/CD with Google Cloud Build triggers, cutting release turnaround across services",
            "Engineered a PHI-compliant data pipeline on Firestore with strict access controls"
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
            "Engineered scraping and data pipelines extracting high-value legal lead data from public sources",
            "Built LLM-powered outreach generating personalised messaging and legal-opportunity summaries",
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
            "Applied Mesa agent-based modeling and machine learning to nutrition optimisation",
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
          body: "Quantitative models and screening frameworks for equity research across a $70K+ student-managed fund.",
          bullets: [
            "Built valuation tools and data pipelines over financial datasets, speeding analysis",
            "Automated the research workflows powering stock-pitch and portfolio decisions"
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
      radius: 13,
      color: "#00c2a8",
      glow: "#5ef0cf",
      cards: [
        {
          id: "thorp",
          title: "Thorp",
          subtitle: "Founder & Solo Developer",
          meta: "Mar 2026 \u2013 Present",
          body: "The TikTok of finance for next-gen traders \u2014 an iOS and web app that turns finance news into a swipeable short-form feed. Invited by YC partner Ryan Choi to the YC Startup Intern Expo.",
          bullets: [
            "Built a fault-tolerant distributed layer across 5 providers on stateless serverless workers, making market data 10\xD7 faster (1.72s \u2192 0.17s p50) with 50\xD7 fewer API calls",
            "Engineered a backtesting engine \u2014 9 indicators, expectancy, drawdown \u2014 that exposes overfitting",
            "Shipped a visual strategy builder with Python export and a from-scratch SVG charting engine",
            "Built the social layer \u2014 posts, follows, paper-trading P&L \u2014 on PostgreSQL"
          ],
          tags: [
            "iOS",
            "TypeScript",
            "PostgreSQL",
            "Serverless"
          ],
          shot: "shots/thorp-home.jpg",
          links: [
            {
              label: "thorp-trade.vercel.app",
              href: "https://thorp-trade.vercel.app"
            }
          ]
        },
        {
          id: "clinicalhours",
          title: "ClinicalHours",
          subtitle: "CTO",
          meta: "Dec 2025 \u2013 Present",
          body: "An AI email and call automation system acting as a virtual receptionist to schedule clinic meetings. Placed top 10% of the Spring 2026 Y Combinator batch.",
          bullets: [
            "Built the receptionist agent on the Gmail API and GoHighLevel",
            "Integrated MapBox, Google APIs and Resend for geolocation clinic discovery and comms pipelines",
            "Processed large-scale U.S. hospital datasets into production-ready formats in Python",
            "Shipped AI resume and application tools; partnered with clinics including BCS Free Health Clinic"
          ],
          tags: [
            "OpenAI",
            "Gemini",
            "Gmail API",
            "MapBox"
          ],
          shot: "shots/clinicalhours.jpg",
          links: [
            {
              label: "clinicalhours.org",
              href: "https://clinicalhours.org"
            }
          ]
        },
        {
          id: "shotsensei",
          title: "Shot Sensei",
          subtitle: "Co-Founder & Lead Developer",
          meta: "Mar 2026",
          body: "A computer-vision pickleball platform that coaches your strokes. Won the Startup Ready Award at Hook'em Hacks 2026 at UT Austin.",
          bullets: [
            "Shipped a real-time mode \u2014 play against an AI bot \u2014 plus a training mode coaching every stroke",
            "Implemented pose and shot detection with OpenCV and YOLOv8",
            "Used Gemini and ElevenLabs for spoken coaching; Supabase for win/loss and shot-level analytics",
            "Invited to McCombs School of Business to pitch Pear VC"
          ],
          tags: [
            "OpenCV",
            "YOLOv8",
            "Gemini",
            "ElevenLabs",
            "Supabase"
          ],
          shot: "shots/shotsensei.jpg",
          links: [
            {
              label: "playshotsensei.com",
              href: "https://playshotsensei.com"
            },
            {
              label: "Demo video",
              href: "https://www.youtube.com/watch?v=v3SNs0O3G5g"
            }
          ]
        }
      ]
    },
    {
      id: "wins",
      sign: "WINS",
      caption: "Awards, honors & the toolbox",
      position: [
        -54,
        54
      ],
      radius: 13,
      color: "#ff8a3d",
      glow: "#ffb887",
      cards: [
        {
          id: "awards",
          title: "Awards",
          subtitle: "Trophies on the shelf",
          body: "",
          bullets: [
            "YC Startup Intern Expo \u2014 recruited by a YC partner",
            "UT Austin Hook'em Hacks 2026 Winner \u2014 Most Startup Ready + Multimodal Track",
            "TidalTAMU Google Gemini Track \u2014 1st Place, 2026",
            "Outstanding Undergraduate Researcher Award",
            "President's Endowed Scholar"
          ]
        },
        {
          id: "education",
          title: "Texas A&M University",
          subtitle: "B.S. Computer Science Honors, Minor in Mathematics",
          meta: "Expected May 2029",
          body: "",
          bullets: [
            "Data Structures & Algorithms",
            "C++ Design",
            "Discrete Structures",
            "Computer Architecture and Assembly",
            "Python Programming"
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
            "Tools \u2014 Git, Docker, AWS EC2/IAM, Google Cloud, Vercel, PostgreSQL, Supabase, CI/CD"
          ]
        }
      ]
    },
    {
      id: "next",
      sign: "NEXT",
      caption: "What I'm building now",
      position: [
        54,
        54
      ],
      radius: 13,
      color: "#c341ff",
      glow: "#e0a6ff",
      cards: [
        {
          id: "upcoming",
          title: "In progress",
          subtitle: "On the bench right now",
          body: "",
          bullets: [
            "Thorp \u2014 parallel agent orchestration to generate and score feed content",
            "ClinicalHours \u2014 scaling the receptionist agent to more clinics after the YC batch",
            "Bio-economic research \u2014 cross-platform simulations for sustainability outcomes"
          ]
        },
        {
          id: "contact",
          title: "Get in touch",
          subtitle: "Fastest ways to reach me",
          body: "Open to summer 2027 engineering internships and anything ambitious in between.",
          bullets: [],
          links: [
            {
              label: "Email",
              href: "mailto:amritnair23@gmail.com"
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/amritnair1"
            },
            {
              label: "GitHub",
              href: "https://github.com/amritnair"
            }
          ]
        }
      ]
    }
  ];
  wj = Object.fromEntries(Gf.map((t) => [
    t.id,
    t
  ]));
  Vs = (t) => t.startsWith("http") || t.startsWith("mailto:") ? t : `/amritaraj-nair-portfolio/${t}`;
  Lg = "/amritaraj-nair-portfolio/hero/reel";
  hD = "/amritaraj-nair-portfolio/hero/car.jpg";
  go = [
    {
      src: "photos/yc.jpg",
      alt: "Amritaraj outside Y Combinator",
      caption: "yc startup intern expo",
      position: "50% 42%"
    },
    {
      src: "photos/matic.jpg",
      alt: "Amritaraj at the Matic office",
      caption: "matic \u2014 summer 2026",
      position: "38% 50%"
    },
    {
      src: "photos/whiteboard.jpg",
      alt: "Amritaraj in an architecture session at Matic",
      caption: "pulsematic, on the whiteboard",
      position: "72% 40%"
    }
  ];
  function hc({ children: t, tilt: e = 0 }) {
    return w.jsx("span", {
      className: "inline-block whitespace-nowrap rounded-[3px] border border-black px-2.5 py-1 text-[0.7rem] leading-none",
      style: {
        transform: e ? `rotate(${e}deg)` : void 0
      },
      children: t
    });
  }
  function mD() {
    const [t, e] = b.useState(0);
    return b.useEffect(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const n = window.setInterval(() => {
        document.hidden || e((i) => (i + 1) % go.length);
      }, 4200);
      return () => clearInterval(n);
    }, []), w.jsxs("div", {
      className: "relative h-full w-full overflow-hidden bg-[#0b0b0b]",
      children: [
        go.map((n, i) => w.jsx("img", {
          src: Vs(n.src),
          alt: n.alt,
          loading: i === 0 ? "eager" : "lazy",
          className: "absolute inset-0 h-full w-full object-cover",
          style: {
            objectPosition: n.position,
            opacity: i === t ? 1 : 0,
            transition: "opacity 1.1s ease-in-out"
          }
        }, n.src)),
        w.jsxs("div", {
          className: "absolute bottom-4 left-4 flex items-center gap-3",
          children: [
            w.jsx("span", {
              className: "u-grotesk inline-block rounded-[3px] border border-white/70 bg-black/45 px-2.5 py-1 text-[0.68rem] text-white backdrop-blur",
              children: go[t].caption
            }),
            w.jsx("span", {
              className: "flex gap-1.5",
              children: go.map((n, i) => w.jsx("button", {
                type: "button",
                "aria-label": n.alt,
                onClick: () => e(i),
                className: "h-1.5 w-1.5 rounded-full transition-colors",
                style: {
                  background: i === t ? "#fff" : "rgba(255,255,255,0.38)"
                }
              }, n.src))
            })
          ]
        })
      ]
    });
  }
  function pD({ className: t, eager: e }) {
    const n = b.useRef(null), i = () => {
      const a = n.current;
      (a == null ? void 0 : a.paused) && a.play().catch(() => {
      });
    };
    return b.useEffect(i, []), w.jsxs("video", {
      ref: n,
      className: t,
      poster: hD,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: e ? "auto" : "metadata",
      onCanPlay: i,
      onLoadedData: i,
      children: [
        w.jsx("source", {
          src: `${Lg}.webm`,
          type: "video/webm"
        }),
        w.jsx("source", {
          src: `${Lg}.mp4`,
          type: "video/mp4"
        })
      ]
    });
  }
  function Vg({ children: t, className: e = "" }) {
    const n = b.useRef(null), [i, a] = b.useState(false);
    return b.useEffect(() => {
      const s = n.current;
      if (!s) return;
      const r = new IntersectionObserver(([o]) => o.isIntersecting && a(true), {
        rootMargin: "-8% 0px -8% 0px"
      });
      return r.observe(s), () => r.disconnect();
    }, []), w.jsx("div", {
      ref: n,
      className: e,
      style: {
        opacity: i ? 1 : 0,
        transform: i ? "none" : "translateY(22px)",
        transition: "opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)"
      },
      children: t
    });
  }
  function gD() {
    b.useEffect(() => {
      const e = document.documentElement, n = e.style.background;
      return e.style.background = "#ffffff", () => {
        e.style.background = n;
      };
    }, []);
    const t = [
      ...Gf.map((e) => ({
        id: e.id,
        label: e.sign.toLowerCase()
      })),
      {
        id: "play",
        label: "play"
      }
    ];
    return w.jsxs("main", {
      className: "min-h-screen bg-white text-[#0b0b0b] antialiased",
      children: [
        w.jsx("style", {
          children: `
        .u-grotesk { font-family: Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif; }
        @media (prefers-reduced-motion: reduce) { .u-reveal { transition: none !important } }
      `
        }),
        w.jsx("header", {
          className: "sticky top-0 z-50 border-b border-black bg-white/95 backdrop-blur",
          children: w.jsxs("div", {
            className: "flex items-center gap-6 px-4 py-3 sm:px-7",
            children: [
              w.jsxs("a", {
                href: "#top",
                className: "u-grotesk flex items-center gap-2 text-[0.82rem] font-medium tracking-tight",
                children: [
                  w.jsx("span", {
                    "aria-hidden": true,
                    className: "inline-block h-3 w-3 rounded-full border border-black"
                  }),
                  "amritaraj nair."
                ]
              }),
              w.jsx("nav", {
                className: "u-grotesk ml-auto hidden items-center gap-7 text-[0.82rem] text-[#5a5a5a] md:flex",
                children: t.map(({ id: e, label: n }) => w.jsx("a", {
                  href: `#${e}`,
                  className: "transition-colors hover:text-black",
                  children: n
                }, e))
              }),
              w.jsx("a", {
                href: `mailto:${ua.email}`,
                className: "u-grotesk ml-auto rounded-[3px] bg-black px-3.5 py-1.5 text-[0.78rem] text-white transition-opacity hover:opacity-80 md:ml-0",
                children: "contact"
              })
            ]
          })
        }),
        w.jsxs("section", {
          id: "top",
          className: "grid border-b border-black lg:grid-cols-2",
          children: [
            w.jsx("div", {
              className: "relative order-2 aspect-[4/3] overflow-hidden border-t border-black bg-black lg:order-1 lg:aspect-auto lg:min-h-[78vh] lg:border-r lg:border-t-0",
              children: w.jsx(mD, {})
            }),
            w.jsxs("div", {
              className: "order-1 flex flex-col justify-between p-6 sm:p-10 lg:order-2",
              children: [
                w.jsxs("div", {
                  children: [
                    w.jsx(hc, {
                      children: "student \xB7 builder"
                    }),
                    w.jsxs("h1", {
                      className: "u-grotesk mt-8 text-[clamp(2.9rem,8vw,6.2rem)] font-medium leading-[0.88] tracking-[-0.05em]",
                      children: [
                        "amritaraj",
                        w.jsx("br", {}),
                        "nair"
                      ]
                    }),
                    w.jsx("p", {
                      className: "u-grotesk mt-6 max-w-lg text-[clamp(1.05rem,2.2vw,1.5rem)] font-medium leading-tight tracking-[-0.02em] text-[#6a6a6a]",
                      children: "portfolio website"
                    })
                  ]
                }),
                w.jsxs("div", {
                  className: "mt-12 max-w-md",
                  children: [
                    w.jsx("p", {
                      className: "u-grotesk text-[0.98rem] leading-relaxed text-[#3d3d3d]",
                      children: "Computer Science Honors at Texas A&M, minor in Mathematics. I work on healthcare AI at Matic, run engineering at ClinicalHours, and build Thorp solo. Three of the four shipped to real users this year."
                    }),
                    w.jsx("div", {
                      className: "mt-7 flex flex-wrap items-center gap-x-6 gap-y-3",
                      children: ua.links.map((e) => w.jsx("a", {
                        href: Vs(e.href),
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: "u-grotesk border-b border-black pb-0.5 text-[0.82rem] transition-opacity hover:opacity-55",
                        children: e.label.toLowerCase()
                      }, e.label))
                    })
                  ]
                })
              ]
            })
          ]
        }),
        Gf.map((e) => w.jsxs("section", {
          id: e.id,
          className: "scroll-mt-14 border-b border-black",
          children: [
            w.jsxs("div", {
              className: "flex items-baseline justify-between gap-6 px-6 py-5 sm:px-10",
              children: [
                w.jsx("h2", {
                  className: "u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]",
                  children: e.sign.toLowerCase()
                }),
                w.jsx("p", {
                  className: "u-grotesk text-right text-[0.78rem] text-[#5a5a5a]",
                  children: e.caption
                })
              ]
            }),
            w.jsx("div", {
              className: "border-t border-black",
              children: e.cards.map((n) => {
                var _a5, _b3, _c3, _d3;
                return w.jsxs(Vg, {
                  className: "u-reveal grid gap-x-10 gap-y-5 border-b border-[#dcdcdc] px-6 py-10 last:border-b-0 sm:px-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]",
                  children: [
                    w.jsxs("div", {
                      children: [
                        w.jsx("h3", {
                          className: "u-grotesk text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-[1.02] tracking-[-0.035em]",
                          children: n.title
                        }),
                        w.jsx("p", {
                          className: "u-grotesk mt-2 text-[0.88rem] text-[#3d3d3d]",
                          children: n.subtitle
                        }),
                        n.meta && w.jsx("p", {
                          className: "u-grotesk mt-1 text-[0.76rem] text-[#8a8a8a]",
                          children: n.meta
                        })
                      ]
                    }),
                    w.jsxs("div", {
                      children: [
                        n.body && w.jsx("p", {
                          className: "u-grotesk max-w-2xl text-[1rem] leading-relaxed",
                          children: n.body
                        }),
                        n.bullets.length > 0 && w.jsx("ul", {
                          className: `max-w-2xl space-y-2.5 ${n.body ? "mt-6" : ""}`,
                          children: n.bullets.map((i) => w.jsxs("li", {
                            className: "u-grotesk grid grid-cols-[1.1rem_minmax(0,1fr)] text-[0.93rem] leading-relaxed text-[#3d3d3d]",
                            children: [
                              w.jsx("span", {
                                "aria-hidden": true,
                                className: "pt-[0.55rem]",
                                children: w.jsx("span", {
                                  className: "block h-px w-2.5 bg-black"
                                })
                              }),
                              w.jsx("span", {
                                children: i
                              })
                            ]
                          }, i))
                        }),
                        (((_a5 = n.tags) == null ? void 0 : _a5.length) || ((_b3 = n.links) == null ? void 0 : _b3.length)) && w.jsxs("div", {
                          className: "mt-7 flex flex-wrap items-center gap-2",
                          children: [
                            (_c3 = n.tags) == null ? void 0 : _c3.map((i) => w.jsx(hc, {
                              children: i
                            }, i)),
                            (_d3 = n.links) == null ? void 0 : _d3.map((i) => w.jsxs("a", {
                              href: Vs(i.href),
                              target: "_blank",
                              rel: "noreferrer noopener",
                              className: "u-grotesk inline-block rounded-[3px] bg-black px-2.5 py-1 text-[0.7rem] leading-none text-white transition-opacity hover:opacity-80",
                              children: [
                                i.label,
                                " \u2197"
                              ]
                            }, i.label))
                          ]
                        })
                      ]
                    }),
                    n.shot && w.jsx("figure", {
                      className: "col-span-full mt-4 border border-black bg-black",
                      children: w.jsx("img", {
                        src: Vs(n.shot),
                        alt: `${n.title} \u2014 screenshot of the live product`,
                        width: 1600,
                        height: 1e3,
                        loading: "lazy",
                        className: "block w-full"
                      })
                    })
                  ]
                }, n.id);
              })
            })
          ]
        }, e.id)),
        w.jsxs("section", {
          id: "play",
          className: "scroll-mt-14 border-b border-black",
          children: [
            w.jsxs("div", {
              className: "flex items-baseline justify-between gap-6 px-6 py-5 sm:px-10",
              children: [
                w.jsx("h2", {
                  className: "u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]",
                  children: "play"
                }),
                w.jsx(hc, {
                  tilt: -1.5,
                  children: "interactive"
                })
              ]
            }),
            w.jsxs(Vg, {
              className: "u-reveal relative border-t border-black bg-black",
              children: [
                w.jsx(pD, {
                  className: "aspect-[16/9] w-full object-cover"
                }),
                w.jsx("span", {
                  className: "u-grotesk absolute bottom-4 left-4 inline-block rounded-[3px] border border-white/70 bg-black/45 px-2.5 py-1 text-[0.68rem] text-white backdrop-blur",
                  children: "rendered in blender"
                })
              ]
            }),
            w.jsxs("div", {
              className: "grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10",
              children: [
                w.jsxs("h3", {
                  className: "u-grotesk text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-[1.02] tracking-[-0.035em]",
                  children: [
                    "The same r\xE9sum\xE9,",
                    w.jsx("br", {}),
                    "as somewhere you drive"
                  ]
                }),
                w.jsxs("div", {
                  children: [
                    w.jsx("p", {
                      className: "u-grotesk max-w-2xl text-[1rem] leading-relaxed text-[#3d3d3d]",
                      children: "An island with four districts you drive into to read, a race circuit hung above them and a garage you spend points in. Built with React Three Fiber and Rapier; the car is modelled in Blender. It runs in the browser \u2014 no install, no download."
                    }),
                    w.jsxs("div", {
                      className: "mt-7 flex flex-wrap items-center gap-3",
                      children: [
                        w.jsx(cD, {
                          to: "/play",
                          className: "u-grotesk inline-block rounded-[3px] bg-black px-5 py-2.5 text-[0.82rem] text-white transition-opacity hover:opacity-80",
                          children: "enter the world \u2192"
                        }),
                        w.jsx("span", {
                          className: "u-grotesk text-[0.76rem] text-[#8a8a8a]",
                          children: "wasd \xB7 best in fullscreen"
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        w.jsx("footer", {
          className: "px-6 py-14 sm:px-10",
          children: w.jsxs("div", {
            className: "grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10",
            children: [
              w.jsx("h2", {
                className: "u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]",
                children: "get in touch"
              }),
              w.jsxs("div", {
                children: [
                  w.jsx("a", {
                    href: `mailto:${ua.email}`,
                    className: "u-grotesk text-[clamp(1.3rem,3.4vw,2.2rem)] font-medium leading-tight tracking-[-0.035em] underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-55",
                    children: ua.email
                  }),
                  w.jsx("p", {
                    className: "u-grotesk mt-3 text-[0.86rem] text-[#5a5a5a]",
                    children: ua.phone
                  }),
                  w.jsx("div", {
                    className: "mt-8 flex flex-wrap gap-x-7 gap-y-3",
                    children: ua.links.map((e) => w.jsxs("a", {
                      href: Vs(e.href),
                      target: "_blank",
                      rel: "noreferrer noopener",
                      className: "u-grotesk border-b border-black pb-0.5 text-[0.82rem] transition-opacity hover:opacity-55",
                      children: [
                        e.label.toLowerCase(),
                        " \u2197"
                      ]
                    }, e.label))
                  }),
                  w.jsxs("p", {
                    className: "u-grotesk mt-12 max-w-md text-[0.78rem] leading-relaxed text-[#8a8a8a]",
                    children: [
                      "Open to summer 2027 engineering internships.",
                      _g.length > 0 && ` Currently: ${_g.map((e) => e.name.toLowerCase()).join(", ")}.`
                    ]
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }
  const Bx = b.createContext({});
  function yD(t) {
    const e = b.useRef(null);
    return e.current === null && (e.current = t()), e.current;
  }
  const Ux = typeof window < "u", vD = Ux ? b.useLayoutEffect : b.useEffect, Bh = b.createContext(null);
  function Uh(t, e) {
    t.indexOf(e) === -1 && t.push(e);
  }
  function Dl(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }
  const nn = (t, e, n) => n > e ? e : n < t ? t : n;
  let mu = () => {
  }, es = () => {
  };
  const On = {}, Px = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
  function Hx(t) {
    return typeof t == "object" && t !== null;
  }
  const kx = (t) => /^0[^.\s]+$/u.test(t);
  function Ph(t) {
    let e;
    return () => (e === void 0 && (e = t()), e);
  }
  const De = (t) => t, bD = (t, e) => (n) => e(t(n)), Gr = (...t) => t.reduce(bD), Tr = (t, e, n) => {
    const i = e - t;
    return i === 0 ? 1 : (n - t) / i;
  };
  class Hh {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return Uh(this.subscriptions, e), () => Dl(this.subscriptions, e);
    }
    notify(e, n, i) {
      const a = this.subscriptions.length;
      if (a) if (a === 1) this.subscriptions[0](e, n, i);
      else for (let s = 0; s < a; s++) {
        const r = this.subscriptions[s];
        r && r(e, n, i);
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
  function Yx(t, e) {
    return e ? t * (1e3 / e) : 0;
  }
  const Gx = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, xD = 1e-7, SD = 12;
  function wD(t, e, n, i, a) {
    let s, r, o = 0;
    do
      r = e + (n - e) / 2, s = Gx(r, i, a) - t, s > 0 ? n = r : e = r;
    while (Math.abs(s) > xD && ++o < SD);
    return r;
  }
  function qr(t, e, n, i) {
    if (t === e && n === i) return De;
    const a = (s) => wD(s, 0, 1, t, n);
    return (s) => s === 0 || s === 1 ? s : Gx(a(s), e, i);
  }
  const qx = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Xx = (t) => (e) => 1 - t(1 - e), Qx = qr(0.33, 1.53, 0.69, 0.99), kh = Xx(Qx), Fx = qx(kh), Kx = (t) => (t *= 2) < 1 ? 0.5 * kh(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Yh = (t) => 1 - Math.sin(Math.acos(t)), Zx = Xx(Yh), $x = qx(Yh), TD = qr(0.42, 0, 1, 1), ED = qr(0, 0, 0.58, 1), Ix = qr(0.42, 0, 0.58, 1), AD = (t) => Array.isArray(t) && typeof t[0] != "number", Jx = (t) => Array.isArray(t) && typeof t[0] == "number", Bg = {
    linear: De,
    easeIn: TD,
    easeInOut: Ix,
    easeOut: ED,
    circIn: Yh,
    circInOut: $x,
    circOut: Zx,
    backIn: kh,
    backInOut: Fx,
    backOut: Qx,
    anticipate: Kx
  }, CD = (t) => typeof t == "string", Ug = (t) => {
    if (Jx(t)) {
      es(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
      const [e, n, i, a] = t;
      return qr(e, n, i, a);
    } else if (CD(t)) return es(Bg[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), Bg[t];
    return t;
  }, yo = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender"
  ], Pg = {
    value: null,
    addProjectionMetrics: null
  };
  function MD(t, e) {
    let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = false, s = false;
    const r = /* @__PURE__ */ new WeakSet();
    let o = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    }, l = 0;
    function u(f) {
      r.has(f) && (c.schedule(f), t()), l++, f(o);
    }
    const c = {
      schedule: (f, h = false, d = false) => {
        const y = d && a ? n : i;
        return h && r.add(f), y.has(f) || y.add(f), f;
      },
      cancel: (f) => {
        i.delete(f), r.delete(f);
      },
      process: (f) => {
        if (o = f, a) {
          s = true;
          return;
        }
        a = true, [n, i] = [
          i,
          n
        ], n.forEach(u), e && Pg.value && Pg.value.frameloop[e].push(l), l = 0, n.clear(), a = false, s && (s = false, c.process(f));
      }
    };
    return c;
  }
  const RD = 40;
  function Wx(t, e) {
    let n = false, i = true;
    const a = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    }, s = () => n = true, r = yo.reduce((g, S) => (g[S] = MD(s, e ? S : void 0), g), {}), { setup: o, read: l, resolveKeyframes: u, preUpdate: c, update: f, preRender: h, render: d, postRender: v } = r, y = () => {
      const g = On.useManualTiming ? a.timestamp : performance.now();
      n = false, On.useManualTiming || (a.delta = i ? 1e3 / 60 : Math.max(Math.min(g - a.timestamp, RD), 1)), a.timestamp = g, a.isProcessing = true, o.process(a), l.process(a), u.process(a), c.process(a), f.process(a), h.process(a), d.process(a), v.process(a), a.isProcessing = false, n && e && (i = false, t(y));
    }, x = () => {
      n = true, i = true, a.isProcessing || t(y);
    };
    return {
      schedule: yo.reduce((g, S) => {
        const T = r[S];
        return g[S] = (A, E = false, C = false) => (n || x(), T.schedule(A, E, C)), g;
      }, {}),
      cancel: (g) => {
        for (let S = 0; S < yo.length; S++) r[yo[S]].cancel(g);
      },
      state: a,
      steps: r
    };
  }
  const { schedule: ct, cancel: gi, state: Pt, steps: mc } = Wx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : De, true);
  let Ho;
  function OD() {
    Ho = void 0;
  }
  const Zt = {
    now: () => (Ho === void 0 && Zt.set(Pt.isProcessing || On.useManualTiming ? Pt.timestamp : performance.now()), Ho),
    set: (t) => {
      Ho = t, queueMicrotask(OD);
    }
  }, tS = (t) => (e) => typeof e == "string" && e.startsWith(t), eS = tS("--"), DD = tS("var(--"), Gh = (t) => DD(t) ? ND.test(t.split("/*")[0].trim()) : false, ND = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  function Hg(t) {
    return typeof t != "string" ? false : t.split("/*")[0].includes("var(--");
  }
  const gs = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t
  }, Er = {
    ...gs,
    transform: (t) => nn(0, 1, t)
  }, vo = {
    ...gs,
    default: 1
  }, Ws = (t) => Math.round(t * 1e5) / 1e5, qh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function jD(t) {
    return t == null;
  }
  const zD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Xh = (t, e) => (n) => !!(typeof n == "string" && zD.test(n) && n.startsWith(t) || e && !jD(n) && Object.prototype.hasOwnProperty.call(n, e)), nS = (t, e, n) => (i) => {
    if (typeof i != "string") return i;
    const [a, s, r, o] = i.match(qh);
    return {
      [t]: parseFloat(a),
      [e]: parseFloat(s),
      [n]: parseFloat(r),
      alpha: o !== void 0 ? parseFloat(o) : 1
    };
  }, _D = (t) => nn(0, 255, t), pc = {
    ...gs,
    transform: (t) => Math.round(_D(t))
  }, Vi = {
    test: Xh("rgb", "red"),
    parse: nS("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + pc.transform(t) + ", " + pc.transform(e) + ", " + pc.transform(n) + ", " + Ws(Er.transform(i)) + ")"
  };
  function LD(t) {
    let e = "", n = "", i = "", a = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), a = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), a = t.substring(4, 5), e += e, n += n, i += i, a += a), {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(i, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1
    };
  }
  const qf = {
    test: Xh("#"),
    parse: LD,
    transform: Vi.transform
  }, Xr = (t) => ({
    test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`
  }), Un = Xr("deg"), tn = Xr("%"), B = Xr("px"), VD = Xr("vh"), BD = Xr("vw"), kg = {
    ...tn,
    parse: (t) => tn.parse(t) / 100,
    transform: (t) => tn.transform(t * 100)
  }, Ma = {
    test: Xh("hsl", "hue"),
    parse: nS("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + tn.transform(Ws(e)) + ", " + tn.transform(Ws(n)) + ", " + Ws(Er.transform(i)) + ")"
  }, Mt = {
    test: (t) => Vi.test(t) || qf.test(t) || Ma.test(t),
    parse: (t) => Vi.test(t) ? Vi.parse(t) : Ma.test(t) ? Ma.parse(t) : qf.parse(t),
    transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Vi.transform(t) : Ma.transform(t),
    getAnimatableNone: (t) => {
      const e = Mt.parse(t);
      return e.alpha = 0, Mt.transform(e);
    }
  }, UD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function PD(t) {
    var _a5, _b3;
    return isNaN(t) && typeof t == "string" && (((_a5 = t.match(qh)) == null ? void 0 : _a5.length) || 0) + (((_b3 = t.match(UD)) == null ? void 0 : _b3.length) || 0) > 0;
  }
  const iS = "number", aS = "color", HD = "var", kD = "var(", Yg = "${}", YD = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function Ar(t) {
    const e = t.toString(), n = [], i = {
      color: [],
      number: [],
      var: []
    }, a = [];
    let s = 0;
    const o = e.replace(YD, (l) => (Mt.test(l) ? (i.color.push(s), a.push(aS), n.push(Mt.parse(l))) : l.startsWith(kD) ? (i.var.push(s), a.push(HD), n.push(l)) : (i.number.push(s), a.push(iS), n.push(parseFloat(l))), ++s, Yg)).split(Yg);
    return {
      values: n,
      split: o,
      indexes: i,
      types: a
    };
  }
  function sS(t) {
    return Ar(t).values;
  }
  function rS(t) {
    const { split: e, types: n } = Ar(t), i = e.length;
    return (a) => {
      let s = "";
      for (let r = 0; r < i; r++) if (s += e[r], a[r] !== void 0) {
        const o = n[r];
        o === iS ? s += Ws(a[r]) : o === aS ? s += Mt.transform(a[r]) : s += a[r];
      }
      return s;
    };
  }
  const GD = (t) => typeof t == "number" ? 0 : Mt.test(t) ? Mt.getAnimatableNone(t) : t;
  function qD(t) {
    const e = sS(t);
    return rS(t)(e.map(GD));
  }
  const yi = {
    test: PD,
    parse: sS,
    createTransformer: rS,
    getAnimatableNone: qD
  };
  function gc(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
  }
  function XD({ hue: t, saturation: e, lightness: n, alpha: i }) {
    t /= 360, e /= 100, n /= 100;
    let a = 0, s = 0, r = 0;
    if (!e) a = s = r = n;
    else {
      const o = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - o;
      a = gc(l, o, t + 1 / 3), s = gc(l, o, t), r = gc(l, o, t - 1 / 3);
    }
    return {
      red: Math.round(a * 255),
      green: Math.round(s * 255),
      blue: Math.round(r * 255),
      alpha: i
    };
  }
  function Nl(t, e) {
    return (n) => n > 0 ? e : t;
  }
  const xt = (t, e, n) => t + (e - t) * n, yc = (t, e, n) => {
    const i = t * t, a = n * (e * e - i) + i;
    return a < 0 ? 0 : Math.sqrt(a);
  }, QD = [
    qf,
    Vi,
    Ma
  ], FD = (t) => QD.find((e) => e.test(t));
  function Gg(t) {
    const e = FD(t);
    if (mu(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return false;
    let n = e.parse(t);
    return e === Ma && (n = XD(n)), n;
  }
  const qg = (t, e) => {
    const n = Gg(t), i = Gg(e);
    if (!n || !i) return Nl(t, e);
    const a = {
      ...n
    };
    return (s) => (a.red = yc(n.red, i.red, s), a.green = yc(n.green, i.green, s), a.blue = yc(n.blue, i.blue, s), a.alpha = xt(n.alpha, i.alpha, s), Vi.transform(a));
  }, Xf = /* @__PURE__ */ new Set([
    "none",
    "hidden"
  ]);
  function KD(t, e) {
    return Xf.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
  }
  function ZD(t, e) {
    return (n) => xt(t, e, n);
  }
  function Qh(t) {
    return typeof t == "number" ? ZD : typeof t == "string" ? Gh(t) ? Nl : Mt.test(t) ? qg : JD : Array.isArray(t) ? oS : typeof t == "object" ? Mt.test(t) ? qg : $D : Nl;
  }
  function oS(t, e) {
    const n = [
      ...t
    ], i = n.length, a = t.map((s, r) => Qh(s)(s, e[r]));
    return (s) => {
      for (let r = 0; r < i; r++) n[r] = a[r](s);
      return n;
    };
  }
  function $D(t, e) {
    const n = {
      ...t,
      ...e
    }, i = {};
    for (const a in n) t[a] !== void 0 && e[a] !== void 0 && (i[a] = Qh(t[a])(t[a], e[a]));
    return (a) => {
      for (const s in i) n[s] = i[s](a);
      return n;
    };
  }
  function ID(t, e) {
    const n = [], i = {
      color: 0,
      var: 0,
      number: 0
    };
    for (let a = 0; a < e.values.length; a++) {
      const s = e.types[a], r = t.indexes[s][i[s]], o = t.values[r] ?? 0;
      n[a] = o, i[s]++;
    }
    return n;
  }
  const JD = (t, e) => {
    const n = yi.createTransformer(e), i = Ar(t), a = Ar(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? Xf.has(t) && !a.values.length || Xf.has(e) && !i.values.length ? KD(t, e) : Gr(oS(ID(i, a), a.values), n) : (mu(true, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Nl(t, e));
  };
  function lS(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? xt(t, e, n) : Qh(t)(t, e);
  }
  const WD = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: (n = true) => ct.update(e, n),
      stop: () => gi(e),
      now: () => Pt.isProcessing ? Pt.timestamp : Zt.now()
    };
  }, uS = (t, e, n = 10) => {
    let i = "";
    const a = Math.max(Math.round(e / n), 2);
    for (let s = 0; s < a; s++) i += Math.round(t(s / (a - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${i.substring(0, i.length - 2)})`;
  }, jl = 2e4;
  function Fh(t) {
    let e = 0;
    const n = 50;
    let i = t.next(e);
    for (; !i.done && e < jl; ) e += n, i = t.next(e);
    return e >= jl ? 1 / 0 : e;
  }
  function tN(t, e = 100, n) {
    const i = n({
      ...t,
      keyframes: [
        0,
        e
      ]
    }), a = Math.min(Fh(i), jl);
    return {
      type: "keyframes",
      ease: (s) => i.next(a * s).value / e,
      duration: Me(a)
    };
  }
  const eN = 5;
  function cS(t, e, n) {
    const i = Math.max(e - eN, 0);
    return Yx(n - t(i), e - i);
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
  }, vc = 1e-3;
  function nN({ duration: t = bt.duration, bounce: e = bt.bounce, velocity: n = bt.velocity, mass: i = bt.mass }) {
    let a, s;
    mu(t <= Ne(bt.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let r = 1 - e;
    r = nn(bt.minDamping, bt.maxDamping, r), t = nn(bt.minDuration, bt.maxDuration, Me(t)), r < 1 ? (a = (u) => {
      const c = u * r, f = c * t, h = c - n, d = Qf(u, r), v = Math.exp(-f);
      return vc - h / d * v;
    }, s = (u) => {
      const f = u * r * t, h = f * n + n, d = Math.pow(r, 2) * Math.pow(u, 2) * t, v = Math.exp(-f), y = Qf(Math.pow(u, 2), r);
      return (-a(u) + vc > 0 ? -1 : 1) * ((h - d) * v) / y;
    }) : (a = (u) => {
      const c = Math.exp(-u * t), f = (u - n) * t + 1;
      return -vc + c * f;
    }, s = (u) => {
      const c = Math.exp(-u * t), f = (n - u) * (t * t);
      return c * f;
    });
    const o = 5 / t, l = aN(a, s, o);
    if (t = Ne(t), isNaN(l)) return {
      stiffness: bt.stiffness,
      damping: bt.damping,
      duration: t
    };
    {
      const u = Math.pow(l, 2) * i;
      return {
        stiffness: u,
        damping: r * 2 * Math.sqrt(i * u),
        duration: t
      };
    }
  }
  const iN = 12;
  function aN(t, e, n) {
    let i = n;
    for (let a = 1; a < iN; a++) i = i - t(i) / e(i);
    return i;
  }
  function Qf(t, e) {
    return t * Math.sqrt(1 - e * e);
  }
  const sN = [
    "duration",
    "bounce"
  ], rN = [
    "stiffness",
    "damping",
    "mass"
  ];
  function Xg(t, e) {
    return e.some((n) => t[n] !== void 0);
  }
  function oN(t) {
    let e = {
      velocity: bt.velocity,
      stiffness: bt.stiffness,
      damping: bt.damping,
      mass: bt.mass,
      isResolvedFromDuration: false,
      ...t
    };
    if (!Xg(t, rN) && Xg(t, sN)) if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), a = i * i, s = 2 * nn(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
      e = {
        ...e,
        mass: bt.mass,
        stiffness: a,
        damping: s
      };
    } else {
      const n = nN(t);
      e = {
        ...e,
        ...n,
        mass: bt.mass
      }, e.isResolvedFromDuration = true;
    }
    return e;
  }
  function zl(t = bt.visualDuration, e = bt.bounce) {
    const n = typeof t != "object" ? {
      visualDuration: t,
      keyframes: [
        0,
        1
      ],
      bounce: e
    } : t;
    let { restSpeed: i, restDelta: a } = n;
    const s = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], o = {
      done: false,
      value: s
    }, { stiffness: l, damping: u, mass: c, duration: f, velocity: h, isResolvedFromDuration: d } = oN({
      ...n,
      velocity: -Me(n.velocity || 0)
    }), v = h || 0, y = u / (2 * Math.sqrt(l * c)), x = r - s, p = Me(Math.sqrt(l / c)), m = Math.abs(x) < 5;
    i || (i = m ? bt.restSpeed.granular : bt.restSpeed.default), a || (a = m ? bt.restDelta.granular : bt.restDelta.default);
    let g;
    if (y < 1) {
      const T = Qf(p, y);
      g = (A) => {
        const E = Math.exp(-y * p * A);
        return r - E * ((v + y * p * x) / T * Math.sin(T * A) + x * Math.cos(T * A));
      };
    } else if (y === 1) g = (T) => r - Math.exp(-p * T) * (x + (v + p * x) * T);
    else {
      const T = p * Math.sqrt(y * y - 1);
      g = (A) => {
        const E = Math.exp(-y * p * A), C = Math.min(T * A, 300);
        return r - E * ((v + y * p * x) * Math.sinh(C) + T * x * Math.cosh(C)) / T;
      };
    }
    const S = {
      calculatedDuration: d && f || null,
      next: (T) => {
        const A = g(T);
        if (d) o.done = T >= f;
        else {
          let E = T === 0 ? v : 0;
          y < 1 && (E = T === 0 ? Ne(v) : cS(g, T, A));
          const C = Math.abs(E) <= i, j = Math.abs(r - A) <= a;
          o.done = C && j;
        }
        return o.value = o.done ? r : A, o;
      },
      toString: () => {
        const T = Math.min(Fh(S), jl), A = uS((E) => S.next(T * E).value, T, 30);
        return T + "ms " + A;
      },
      toTransition: () => {
      }
    };
    return S;
  }
  zl.applyToOptions = (t) => {
    const e = tN(t, 100, zl);
    return t.ease = e.ease, t.duration = Ne(e.duration), t.type = "keyframes", t;
  };
  function Ff({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: a = 10, bounceStiffness: s = 500, modifyTarget: r, min: o, max: l, restDelta: u = 0.5, restSpeed: c }) {
    const f = t[0], h = {
      done: false,
      value: f
    }, d = (C) => o !== void 0 && C < o || l !== void 0 && C > l, v = (C) => o === void 0 ? l : l === void 0 || Math.abs(o - C) < Math.abs(l - C) ? o : l;
    let y = n * e;
    const x = f + y, p = r === void 0 ? x : r(x);
    p !== x && (y = p - f);
    const m = (C) => -y * Math.exp(-C / i), g = (C) => p + m(C), S = (C) => {
      const j = m(C), z = g(C);
      h.done = Math.abs(j) <= u, h.value = h.done ? p : z;
    };
    let T, A;
    const E = (C) => {
      d(h.value) && (T = C, A = zl({
        keyframes: [
          h.value,
          v(h.value)
        ],
        velocity: cS(g, C, h.value),
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
  function lN(t, e, n) {
    const i = [], a = n || On.mix || lS, s = t.length - 1;
    for (let r = 0; r < s; r++) {
      let o = a(t[r], t[r + 1]);
      if (e) {
        const l = Array.isArray(e) ? e[r] || De : e;
        o = Gr(l, o);
      }
      i.push(o);
    }
    return i;
  }
  function uN(t, e, { clamp: n = true, ease: i, mixer: a } = {}) {
    const s = t.length;
    if (es(s === e.length, "Both input and output ranges must be the same length", "range-length"), s === 1) return () => e[0];
    if (s === 2 && e[0] === e[1]) return () => e[1];
    const r = t[0] === t[1];
    t[0] > t[s - 1] && (t = [
      ...t
    ].reverse(), e = [
      ...e
    ].reverse());
    const o = lN(e, i, a), l = o.length, u = (c) => {
      if (r && c < t[0]) return e[0];
      let f = 0;
      if (l > 1) for (; f < t.length - 2 && !(c < t[f + 1]); f++) ;
      const h = Tr(t[f], t[f + 1], c);
      return o[f](h);
    };
    return n ? (c) => u(nn(t[0], t[s - 1], c)) : u;
  }
  function cN(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
      const a = Tr(0, e, i);
      t.push(xt(n, 1, a));
    }
  }
  function fN(t) {
    const e = [
      0
    ];
    return cN(e, t.length - 1), e;
  }
  function dN(t, e) {
    return t.map((n) => n * e);
  }
  function hN(t, e) {
    return t.map(() => e || Ix).splice(0, t.length - 1);
  }
  function tr({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
    const a = AD(i) ? i.map(Ug) : Ug(i), s = {
      done: false,
      value: e[0]
    }, r = dN(n && n.length === e.length ? n : fN(e), t), o = uN(r, e, {
      ease: Array.isArray(a) ? a : hN(e, a)
    });
    return {
      calculatedDuration: t,
      next: (l) => (s.value = o(l), s.done = l >= t, s)
    };
  }
  const mN = (t) => t !== null;
  function Kh(t, { repeat: e, repeatType: n = "loop" }, i, a = 1) {
    const s = t.filter(mN), o = a < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
    return !o || i === void 0 ? s[o] : i;
  }
  const pN = {
    decay: Ff,
    inertia: Ff,
    tween: tr,
    keyframes: tr,
    spring: zl
  };
  function fS(t) {
    typeof t.type == "string" && (t.type = pN[t.type]);
  }
  class Zh {
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
  const gN = (t) => t / 100;
  class $h extends Zh {
    constructor(e) {
      super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
        var _a5, _b3;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== Zt.now() && this.tick(Zt.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), (_b3 = (_a5 = this.options).onStop) == null ? void 0 : _b3.call(_a5));
      }, this.options = e, this.initAnimation(), this.play(), e.autoplay === false && this.pause();
    }
    initAnimation() {
      const { options: e } = this;
      fS(e);
      const { type: n = tr, repeat: i = 0, repeatDelay: a = 0, repeatType: s, velocity: r = 0 } = e;
      let { keyframes: o } = e;
      const l = n || tr;
      l !== tr && typeof o[0] != "number" && (this.mixKeyframes = Gr(gN, lS(o[0], o[1])), o = [
        0,
        100
      ]);
      const u = l({
        ...e,
        keyframes: o
      });
      s === "mirror" && (this.mirroredGenerator = l({
        ...e,
        keyframes: [
          ...o
        ].reverse(),
        velocity: -r
      })), u.calculatedDuration === null && (u.calculatedDuration = Fh(u));
      const { calculatedDuration: c } = u;
      this.calculatedDuration = c, this.resolvedDuration = c + a, this.totalDuration = this.resolvedDuration * (i + 1) - a, this.generator = u;
    }
    updateTime(e) {
      const n = Math.round(e - this.startTime) * this.playbackSpeed;
      this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
    }
    tick(e, n = false) {
      const { generator: i, totalDuration: a, mixKeyframes: s, mirroredGenerator: r, resolvedDuration: o, calculatedDuration: l } = this;
      if (this.startTime === null) return i.next(0);
      const { delay: u = 0, keyframes: c, repeat: f, repeatType: h, repeatDelay: d, type: v, onUpdate: y, finalKeyframe: x } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - a / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
      const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), m = this.playbackSpeed >= 0 ? p < 0 : p > a;
      this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = a);
      let g = this.currentTime, S = i;
      if (f) {
        const C = Math.min(this.currentTime, a) / o;
        let j = Math.floor(C), z = C % 1;
        !z && C >= 1 && (z = 1), z === 1 && j--, j = Math.min(j, f + 1), !!(j % 2) && (h === "reverse" ? (z = 1 - z, d && (z -= d / o)) : h === "mirror" && (S = r)), g = nn(0, 1, z) * o;
      }
      const T = m ? {
        done: false,
        value: c[0]
      } : S.next(g);
      s && (T.value = s(T.value));
      let { done: A } = T;
      !m && l !== null && (A = this.playbackSpeed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
      const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
      return E && v !== Ff && (T.value = Kh(c, this.options, x, this.speed)), y && y(T.value), E && this.finish(), T;
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
      const { driver: e = WD, startTime: n } = this.options;
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
  function yN(t) {
    for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
  }
  const Bi = (t) => t * 180 / Math.PI, Kf = (t) => {
    const e = Bi(Math.atan2(t[1], t[0]));
    return Zf(e);
  }, vN = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: Kf,
    rotateZ: Kf,
    skewX: (t) => Bi(Math.atan(t[1])),
    skewY: (t) => Bi(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
  }, Zf = (t) => (t = t % 360, t < 0 && (t += 360), t), Qg = Kf, Fg = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Kg = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), bN = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Fg,
    scaleY: Kg,
    scale: (t) => (Fg(t) + Kg(t)) / 2,
    rotateX: (t) => Zf(Bi(Math.atan2(t[6], t[5]))),
    rotateY: (t) => Zf(Bi(Math.atan2(-t[2], t[0]))),
    rotateZ: Qg,
    rotate: Qg,
    skewX: (t) => Bi(Math.atan(t[4])),
    skewY: (t) => Bi(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
  };
  function $f(t) {
    return t.includes("scale") ? 1 : 0;
  }
  function If(t, e) {
    if (!t || t === "none") return $f(e);
    const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let i, a;
    if (n) i = bN, a = n;
    else {
      const o = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      i = vN, a = o;
    }
    if (!a) return $f(e);
    const s = i[e], r = a[1].split(",").map(SN);
    return typeof s == "function" ? s(r) : r[s];
  }
  const xN = (t, e) => {
    const { transform: n = "none" } = getComputedStyle(t);
    return If(n, e);
  };
  function SN(t) {
    return parseFloat(t.trim());
  }
  const ys = [
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
  ], vs = new Set(ys), Zg = (t) => t === gs || t === B, wN = /* @__PURE__ */ new Set([
    "x",
    "y",
    "z"
  ]), TN = ys.filter((t) => !wN.has(t));
  function EN(t) {
    const e = [];
    return TN.forEach((n) => {
      const i = t.getValue(n);
      i !== void 0 && (e.push([
        n,
        i.get()
      ]), i.set(n.startsWith("scale") ? 1 : 0));
    }), e;
  }
  const In = {
    width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, { top: e }) => parseFloat(e),
    left: (t, { left: e }) => parseFloat(e),
    bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
    right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
    x: (t, { transform: e }) => If(e, "x"),
    y: (t, { transform: e }) => If(e, "y")
  };
  In.translateX = In.x;
  In.translateY = In.y;
  const Gi = /* @__PURE__ */ new Set();
  let Jf = false, Wf = false, td = false;
  function dS() {
    if (Wf) {
      const t = Array.from(Gi).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
      e.forEach((i) => {
        const a = EN(i);
        a.length && (n.set(i, a), i.render());
      }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
        i.render();
        const a = n.get(i);
        a && a.forEach(([s, r]) => {
          var _a5;
          (_a5 = i.getValue(s)) == null ? void 0 : _a5.set(r);
        });
      }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
        i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
      });
    }
    Wf = false, Jf = false, Gi.forEach((t) => t.complete(td)), Gi.clear();
  }
  function hS() {
    Gi.forEach((t) => {
      t.readKeyframes(), t.needsMeasurement && (Wf = true);
    });
  }
  function AN() {
    td = true, hS(), dS(), td = false;
  }
  class Ih {
    constructor(e, n, i, a, s, r = false) {
      this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [
        ...e
      ], this.onComplete = n, this.name = i, this.motionValue = a, this.element = s, this.isAsync = r;
    }
    scheduleResolve() {
      this.state = "scheduled", this.isAsync ? (Gi.add(this), Jf || (Jf = true, ct.read(hS), ct.resolveKeyframes(dS))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const { unresolvedKeyframes: e, name: n, element: i, motionValue: a } = this;
      if (e[0] === null) {
        const s = a == null ? void 0 : a.get(), r = e[e.length - 1];
        if (s !== void 0) e[0] = s;
        else if (i && n) {
          const o = i.readValue(n, r);
          o != null && (e[0] = o);
        }
        e[0] === void 0 && (e[0] = r), a && s === void 0 && a.set(e[0]);
      }
      yN(e);
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
  const CN = (t) => t.startsWith("--");
  function MN(t, e, n) {
    CN(e) ? t.style.setProperty(e, n) : t.style[e] = n;
  }
  const RN = Ph(() => window.ScrollTimeline !== void 0), ON = {};
  function DN(t, e) {
    const n = Ph(t);
    return () => ON[e] ?? n();
  }
  const mS = DN(() => {
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
  }, "linearEasing"), Bs = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, $g = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Bs([
      0,
      0.65,
      0.55,
      1
    ]),
    circOut: Bs([
      0.55,
      0,
      1,
      0.45
    ]),
    backIn: Bs([
      0.31,
      0.01,
      0.66,
      -0.59
    ]),
    backOut: Bs([
      0.33,
      1.53,
      0.69,
      0.99
    ])
  };
  function pS(t, e) {
    if (t) return typeof t == "function" ? mS() ? uS(t, e) : "ease-out" : Jx(t) ? Bs(t) : Array.isArray(t) ? t.map((n) => pS(n, e) || $g.easeOut) : $g[t];
  }
  function NN(t, e, n, { delay: i = 0, duration: a = 300, repeat: s = 0, repeatType: r = "loop", ease: o = "easeOut", times: l } = {}, u = void 0) {
    const c = {
      [e]: n
    };
    l && (c.offset = l);
    const f = pS(o, a);
    Array.isArray(f) && (c.easing = f);
    const h = {
      delay: i,
      duration: a,
      easing: Array.isArray(f) ? "linear" : f,
      fill: "both",
      iterations: s + 1,
      direction: r === "reverse" ? "alternate" : "normal"
    };
    return u && (h.pseudoElement = u), t.animate(c, h);
  }
  function gS(t) {
    return typeof t == "function" && "applyToOptions" in t;
  }
  function jN({ type: t, ...e }) {
    return gS(t) && mS() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
  }
  class yS extends Zh {
    constructor(e) {
      if (super(), this.finishedTime = null, this.isStopped = false, this.manualStartTime = null, !e) return;
      const { element: n, name: i, keyframes: a, pseudoElement: s, allowFlatten: r = false, finalKeyframe: o, onComplete: l } = e;
      this.isPseudoElement = !!s, this.allowFlatten = r, this.options = e, es(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
      const u = jN(e);
      this.animation = NN(n, i, a, u, s), u.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
        if (this.finishedTime = this.time, !s) {
          const c = Kh(a, this.options, o, this.speed);
          this.updateMotionValue ? this.updateMotionValue(c) : MN(n, i, c), this.animation.cancel();
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
      })), this.animation.onfinish = null, e && RN() ? (this.animation.timeline = e, De) : n(this);
    }
  }
  const vS = {
    anticipate: Kx,
    backInOut: Fx,
    circInOut: $x
  };
  function zN(t) {
    return t in vS;
  }
  function _N(t) {
    typeof t.ease == "string" && zN(t.ease) && (t.ease = vS[t.ease]);
  }
  const bc = 10;
  class LN extends yS {
    constructor(e) {
      _N(e), fS(e), super(e), e.startTime !== void 0 && (this.startTime = e.startTime), this.options = e;
    }
    updateMotionValue(e) {
      const { motionValue: n, onUpdate: i, onComplete: a, element: s, ...r } = this.options;
      if (!n) return;
      if (e !== void 0) {
        n.set(e);
        return;
      }
      const o = new $h({
        ...r,
        autoplay: false
      }), l = Math.max(bc, Zt.now() - this.startTime), u = nn(0, bc, l - bc);
      n.setWithVelocity(o.sample(Math.max(0, l - u)).value, o.sample(l).value, u), o.stop();
    }
  }
  const Ig = (t, e) => e === "zIndex" ? false : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (yi.test(t) || t === "0") && !t.startsWith("url("));
  function VN(t) {
    const e = t[0];
    if (t.length === 1) return true;
    for (let n = 0; n < t.length; n++) if (t[n] !== e) return true;
  }
  function BN(t, e, n, i) {
    const a = t[0];
    if (a === null) return false;
    if (e === "display" || e === "visibility") return true;
    const s = t[t.length - 1], r = Ig(a, e), o = Ig(s, e);
    return mu(r === o, `You are trying to animate ${e} from "${a}" to "${s}". "${r ? s : a}" is not an animatable value.`, "value-not-animatable"), !r || !o ? false : VN(t) || (n === "spring" || gS(n)) && i;
  }
  function ed(t) {
    t.duration = 0, t.type = "keyframes";
  }
  const UN = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
  ]), PN = Ph(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  function HN(t) {
    var _a5;
    const { motionValue: e, name: n, repeatDelay: i, repeatType: a, damping: s, type: r } = t;
    if (!(((_a5 = e == null ? void 0 : e.owner) == null ? void 0 : _a5.current) instanceof HTMLElement)) return false;
    const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
    return PN() && n && UN.has(n) && (n !== "transform" || !u) && !l && !i && a !== "mirror" && s !== 0 && r !== "inertia";
  }
  const kN = 40;
  class YN extends Zh {
    constructor({ autoplay: e = true, delay: n = 0, type: i = "keyframes", repeat: a = 0, repeatDelay: s = 0, repeatType: r = "loop", keyframes: o, name: l, motionValue: u, element: c, ...f }) {
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
        repeatType: r,
        name: l,
        motionValue: u,
        element: c,
        ...f
      }, d = (c == null ? void 0 : c.KeyframeResolver) || Ih;
      this.keyframeResolver = new d(o, (v, y, x) => this.onKeyframesResolved(v, y, h, !x), l, u, c), (_a5 = this.keyframeResolver) == null ? void 0 : _a5.scheduleResolve();
    }
    onKeyframesResolved(e, n, i, a) {
      var _a5, _b3;
      this.keyframeResolver = void 0;
      const { name: s, type: r, velocity: o, delay: l, isHandoff: u, onUpdate: c } = i;
      this.resolvedAt = Zt.now(), BN(e, s, r, o) || ((On.instantAnimations || !l) && (c == null ? void 0 : c(Kh(e, i, n))), e[0] = e[e.length - 1], ed(i), i.repeat = 0);
      const h = {
        startTime: a ? this.resolvedAt ? this.resolvedAt - this.createdAt > kN ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
        finalKeyframe: n,
        ...i,
        keyframes: e
      }, d = !u && HN(h), v = (_b3 = (_a5 = h.motionValue) == null ? void 0 : _a5.owner) == null ? void 0 : _b3.current, y = d ? new LN({
        ...h,
        element: v
      }) : new $h(h);
      y.finished.then(() => {
        this.notifyFinished();
      }).catch(De), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y;
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
      return this._animation || ((_a5 = this.keyframeResolver) == null ? void 0 : _a5.resume(), AN()), this._animation;
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
  function bS(t, e, n, i = 0, a = 1) {
    const s = Array.from(t).sort((u, c) => u.sortNodePosition(c)).indexOf(e), r = t.size, o = (r - 1) * i;
    return typeof n == "function" ? n(s, r) : a === 1 ? s * i : o - s * i;
  }
  const GN = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function qN(t) {
    const e = GN.exec(t);
    if (!e) return [
      ,
    ];
    const [, n, i, a] = e;
    return [
      `--${n ?? i}`,
      a
    ];
  }
  const XN = 4;
  function xS(t, e, n = 1) {
    es(n <= XN, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [i, a] = qN(t);
    if (!i) return;
    const s = window.getComputedStyle(e).getPropertyValue(i);
    if (s) {
      const r = s.trim();
      return Px(r) ? parseFloat(r) : r;
    }
    return Gh(a) ? xS(a, e, n + 1) : a;
  }
  const QN = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }, FN = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }), KN = {
    type: "keyframes",
    duration: 0.8
  }, ZN = {
    type: "keyframes",
    ease: [
      0.25,
      0.1,
      0.35,
      1
    ],
    duration: 0.3
  }, $N = (t, { keyframes: e }) => e.length > 2 ? KN : vs.has(t) ? t.startsWith("scale") ? FN(e[1]) : QN : ZN, IN = (t) => t !== null;
  function JN(t, { repeat: e, repeatType: n = "loop" }, i) {
    const a = t.filter(IN), s = e && n !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !s || i === void 0 ? a[s] : i;
  }
  function SS(t, e) {
    if ((t == null ? void 0 : t.inherit) && e) {
      const { inherit: n, ...i } = t;
      return {
        ...e,
        ...i
      };
    }
    return t;
  }
  function Jh(t, e) {
    const n = (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
    return n !== t ? SS(n, t) : n;
  }
  function WN({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: a, repeat: s, repeatType: r, repeatDelay: o, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length;
  }
  const Wh = (t, e, n, i = {}, a, s) => (r) => {
    const o = Jh(i, t) || {}, l = o.delay || i.delay || 0;
    let { elapsed: u = 0 } = i;
    u = u - Ne(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [
        null,
        n
      ],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...o,
      delay: -u,
      onUpdate: (h) => {
        e.set(h), o.onUpdate && o.onUpdate(h);
      },
      onComplete: () => {
        r(), o.onComplete && o.onComplete();
      },
      name: t,
      motionValue: e,
      element: s ? void 0 : a
    };
    WN(o) || Object.assign(c, $N(t, c)), c.duration && (c.duration = Ne(c.duration)), c.repeatDelay && (c.repeatDelay = Ne(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = false;
    if ((c.type === false || c.duration === 0 && !c.repeatDelay) && (ed(c), c.delay === 0 && (f = true)), (On.instantAnimations || On.skipAnimations || (a == null ? void 0 : a.shouldSkipAnimations)) && (f = true, ed(c), c.delay = 0), c.allowFlatten = !o.type && !o.ease, f && !s && e.get() !== void 0) {
      const h = JN(c.keyframes, o);
      if (h !== void 0) {
        ct.update(() => {
          c.onUpdate(h), c.onComplete();
        });
        return;
      }
    }
    return o.isSync ? new $h(c) : new YN(c);
  };
  function Jg(t) {
    const e = [
      {},
      {}
    ];
    return t == null ? void 0 : t.values.forEach((n, i) => {
      e[0][i] = n.get(), e[1][i] = n.getVelocity();
    }), e;
  }
  function tm(t, e, n, i) {
    if (typeof e == "function") {
      const [a, s] = Jg(i);
      e = e(n !== void 0 ? n : t.custom, a, s);
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
      const [a, s] = Jg(i);
      e = e(n !== void 0 ? n : t.custom, a, s);
    }
    return e;
  }
  function ka(t, e, n) {
    const i = t.getProps();
    return tm(i, e, n !== void 0 ? n : i.custom, t);
  }
  const wS = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...ys
  ]), Wg = 30, t5 = (t) => !isNaN(parseFloat(t));
  class e5 {
    constructor(e, n = {}) {
      this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
        var _a5;
        const a = Zt.now();
        if (this.updatedAt !== a && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && ((_a5 = this.events.change) == null ? void 0 : _a5.notify(this.current), this.dependents)) for (const s of this.dependents) s.dirty();
      }, this.hasAnimated = false, this.setCurrent(e), this.owner = n.owner;
    }
    setCurrent(e) {
      this.current = e, this.updatedAt = Zt.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = t5(this.current));
    }
    setPrevFrameValue(e = this.current) {
      this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, n) {
      this.events[e] || (this.events[e] = new Hh());
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
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Wg) return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, Wg);
      return Yx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  function ns(t, e) {
    return new e5(t, e);
  }
  const nd = (t) => Array.isArray(t);
  function n5(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ns(n));
  }
  function i5(t) {
    return nd(t) ? t[t.length - 1] || 0 : t;
  }
  function a5(t, e) {
    const n = ka(t, e);
    let { transitionEnd: i = {}, transition: a = {}, ...s } = n || {};
    s = {
      ...s,
      ...i
    };
    for (const r in s) {
      const o = i5(s[r]);
      n5(t, r, o);
    }
  }
  const Xt = (t) => !!(t && t.getVelocity);
  function s5(t) {
    return !!(Xt(t) && t.add);
  }
  function id(t, e) {
    const n = t.getValue("willChange");
    if (s5(n)) return n.add(e);
    if (!n && On.WillChange) {
      const i = new On.WillChange("auto");
      t.addValue("willChange", i), i.add(e);
    }
  }
  function em(t) {
    return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
  }
  const r5 = "framerAppearId", TS = "data-" + em(r5);
  function ES(t) {
    return t.props[TS];
  }
  function o5({ protectedKeys: t, needsAnimating: e }, n) {
    const i = t.hasOwnProperty(n) && e[n] !== true;
    return e[n] = false, i;
  }
  function AS(t, e, { delay: n = 0, transitionOverride: i, type: a } = {}) {
    let { transition: s, transitionEnd: r, ...o } = e;
    const l = t.getDefaultTransition();
    s = s ? SS(s, l) : l;
    const u = s == null ? void 0 : s.reduceMotion;
    i && (s = i);
    const c = [], f = a && t.animationState && t.animationState.getState()[a];
    for (const h in o) {
      const d = t.getValue(h, t.latestValues[h] ?? null), v = o[h];
      if (v === void 0 || f && o5(f, h)) continue;
      const y = {
        delay: n,
        ...Jh(s || {}, h)
      }, x = d.get();
      if (x !== void 0 && !d.isAnimating && !Array.isArray(v) && v === x && !y.velocity) continue;
      let p = false;
      if (window.MotionHandoffAnimation) {
        const S = ES(t);
        if (S) {
          const T = window.MotionHandoffAnimation(S, h, ct);
          T !== null && (y.startTime = T, p = true);
        }
      }
      id(t, h);
      const m = u ?? t.shouldReduceMotion;
      d.start(Wh(h, d, v, m && wS.has(h) ? {
        type: false
      } : y, t, p));
      const g = d.animation;
      g && c.push(g);
    }
    if (r) {
      const h = () => ct.update(() => {
        r && a5(t, r);
      });
      c.length ? Promise.all(c).then(h) : h();
    }
    return c;
  }
  function ad(t, e, n = {}) {
    var _a5;
    const i = ka(t, e, n.type === "exit" ? (_a5 = t.presenceContext) == null ? void 0 : _a5.custom : void 0);
    let { transition: a = t.getDefaultTransition() || {} } = i || {};
    n.transitionOverride && (a = n.transitionOverride);
    const s = i ? () => Promise.all(AS(t, i, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (l = 0) => {
      const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = a;
      return l5(t, e, l, u, c, f, n);
    } : () => Promise.resolve(), { when: o } = a;
    if (o) {
      const [l, u] = o === "beforeChildren" ? [
        s,
        r
      ] : [
        r,
        s
      ];
      return l().then(() => u());
    } else return Promise.all([
      s(),
      r(n.delay)
    ]);
  }
  function l5(t, e, n = 0, i = 0, a = 0, s = 1, r) {
    const o = [];
    for (const l of t.variantChildren) l.notify("AnimationStart", e), o.push(ad(l, e, {
      ...r,
      delay: n + (typeof i == "function" ? 0 : i) + bS(t.variantChildren, l, i, a, s)
    }).then(() => l.notify("AnimationComplete", e)));
    return Promise.all(o);
  }
  function u5(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
      const a = e.map((s) => ad(t, s, n));
      i = Promise.all(a);
    } else if (typeof e == "string") i = ad(t, e, n);
    else {
      const a = typeof e == "function" ? ka(t, e, n.custom) : e;
      i = Promise.all(AS(t, a, n));
    }
    return i.then(() => {
      t.notify("AnimationComplete", e);
    });
  }
  const c5 = {
    test: (t) => t === "auto",
    parse: (t) => t
  }, CS = (t) => (e) => e.test(t), MS = [
    gs,
    B,
    tn,
    Un,
    BD,
    VD,
    c5
  ], ty = (t) => MS.find(CS(t));
  function f5(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || kx(t) : true;
  }
  const d5 = /* @__PURE__ */ new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
  ]);
  function h5(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [i] = n.match(qh) || [];
    if (!i) return t;
    const a = n.replace(i, "");
    let s = d5.has(e) ? 1 : 0;
    return i !== n && (s *= 100), e + "(" + s + a + ")";
  }
  const m5 = /\b([a-z-]*)\(.*?\)/gu, sd = {
    ...yi,
    getAnimatableNone: (t) => {
      const e = t.match(m5);
      return e ? e.map(h5).join(" ") : t;
    }
  }, ey = {
    ...gs,
    transform: Math.round
  }, p5 = {
    rotate: Un,
    rotateX: Un,
    rotateY: Un,
    rotateZ: Un,
    scale: vo,
    scaleX: vo,
    scaleY: vo,
    scaleZ: vo,
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
    opacity: Er,
    originX: kg,
    originY: kg,
    originZ: B
  }, nm = {
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
    ...p5,
    zIndex: ey,
    fillOpacity: Er,
    strokeOpacity: Er,
    numOctaves: ey
  }, g5 = {
    ...nm,
    color: Mt,
    backgroundColor: Mt,
    outlineColor: Mt,
    fill: Mt,
    stroke: Mt,
    borderColor: Mt,
    borderTopColor: Mt,
    borderRightColor: Mt,
    borderBottomColor: Mt,
    borderLeftColor: Mt,
    filter: sd,
    WebkitFilter: sd
  }, RS = (t) => g5[t];
  function OS(t, e) {
    let n = RS(t);
    return n !== sd && (n = yi), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
  }
  const y5 = /* @__PURE__ */ new Set([
    "auto",
    "none",
    "0"
  ]);
  function v5(t, e, n) {
    let i = 0, a;
    for (; i < t.length && !a; ) {
      const s = t[i];
      typeof s == "string" && !y5.has(s) && Ar(s).values.length && (a = t[i]), i++;
    }
    if (a && n) for (const s of e) t[s] = OS(n, a);
  }
  class b5 extends Ih {
    constructor(e, n, i, a, s) {
      super(e, n, i, a, s, true);
    }
    readKeyframes() {
      const { unresolvedKeyframes: e, element: n, name: i } = this;
      if (!n || !n.current) return;
      super.readKeyframes();
      for (let c = 0; c < e.length; c++) {
        let f = e[c];
        if (typeof f == "string" && (f = f.trim(), Gh(f))) {
          const h = xS(f, n.current);
          h !== void 0 && (e[c] = h), c === e.length - 1 && (this.finalKeyframe = f);
        }
      }
      if (this.resolveNoneKeyframes(), !wS.has(i) || e.length !== 2) return;
      const [a, s] = e, r = ty(a), o = ty(s), l = Hg(a), u = Hg(s);
      if (l !== u && In[i]) {
        this.needsMeasurement = true;
        return;
      }
      if (r !== o) if (Zg(r) && Zg(o)) for (let c = 0; c < e.length; c++) {
        const f = e[c];
        typeof f == "string" && (e[c] = parseFloat(f));
      }
      else In[i] && (this.needsMeasurement = true);
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: e, name: n } = this, i = [];
      for (let a = 0; a < e.length; a++) (e[a] === null || f5(e[a])) && i.push(a);
      i.length && v5(e, i, n);
    }
    measureInitialState() {
      const { element: e, unresolvedKeyframes: n, name: i } = this;
      if (!e || !e.current) return;
      i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = In[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
      const a = n[n.length - 1];
      a !== void 0 && e.getValue(i, a).jump(a, false);
    }
    measureEndState() {
      var _a5;
      const { element: e, name: n, unresolvedKeyframes: i } = this;
      if (!e || !e.current) return;
      const a = e.getValue(n);
      a && a.jump(this.measuredOrigin, false);
      const s = i.length - 1, r = i[s];
      i[s] = In[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), ((_a5 = this.removedTransforms) == null ? void 0 : _a5.length) && this.removedTransforms.forEach(([o, l]) => {
        e.getValue(o).set(l);
      }), this.resolveNoneKeyframes();
    }
  }
  const x5 = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
  ]);
  function DS(t, e, n) {
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
  const NS = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
  function S5(t) {
    return Hx(t) && "offsetHeight" in t;
  }
  const { schedule: im, cancel: Tj } = Wx(queueMicrotask, false), Pe = {
    x: false,
    y: false
  };
  function jS() {
    return Pe.x || Pe.y;
  }
  function w5(t) {
    return t === "x" || t === "y" ? Pe[t] ? null : (Pe[t] = true, () => {
      Pe[t] = false;
    }) : Pe.x || Pe.y ? null : (Pe.x = Pe.y = true, () => {
      Pe.x = Pe.y = false;
    });
  }
  function zS(t, e) {
    const n = DS(t), i = new AbortController(), a = {
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
  function T5(t) {
    return !(t.pointerType === "touch" || jS());
  }
  function E5(t, e, n = {}) {
    const [i, a, s] = zS(t, n);
    return i.forEach((r) => {
      let o = false, l = false, u;
      const c = () => {
        r.removeEventListener("pointerleave", v);
      }, f = (x) => {
        u && (u(x), u = void 0), c();
      }, h = (x) => {
        o = false, window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), l && (l = false, f(x));
      }, d = () => {
        o = true, window.addEventListener("pointerup", h, a), window.addEventListener("pointercancel", h, a);
      }, v = (x) => {
        if (x.pointerType !== "touch") {
          if (o) {
            l = true;
            return;
          }
          f(x);
        }
      }, y = (x) => {
        if (!T5(x)) return;
        l = false;
        const p = e(r, x);
        typeof p == "function" && (u = p, r.addEventListener("pointerleave", v, a));
      };
      r.addEventListener("pointerenter", y, a), r.addEventListener("pointerdown", d, a);
    }), s;
  }
  const _S = (t, e) => e ? t === e ? true : _S(t, e.parentElement) : false, am = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false, A5 = /* @__PURE__ */ new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
  ]);
  function C5(t) {
    return A5.has(t.tagName) || t.isContentEditable === true;
  }
  const M5 = /* @__PURE__ */ new Set([
    "INPUT",
    "SELECT",
    "TEXTAREA"
  ]);
  function R5(t) {
    return M5.has(t.tagName) || t.isContentEditable === true;
  }
  const ko = /* @__PURE__ */ new WeakSet();
  function ny(t) {
    return (e) => {
      e.key === "Enter" && t(e);
    };
  }
  function xc(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
      isPrimary: true,
      bubbles: true
    }));
  }
  const O5 = (t, e) => {
    const n = t.currentTarget;
    if (!n) return;
    const i = ny(() => {
      if (ko.has(n)) return;
      xc(n, "down");
      const a = ny(() => {
        xc(n, "up");
      }), s = () => xc(n, "cancel");
      n.addEventListener("keyup", a, e), n.addEventListener("blur", s, e);
    });
    n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
  };
  function iy(t) {
    return am(t) && !jS();
  }
  const ay = /* @__PURE__ */ new WeakSet();
  function D5(t, e, n = {}) {
    const [i, a, s] = zS(t, n), r = (o) => {
      const l = o.currentTarget;
      if (!iy(o) || ay.has(o)) return;
      ko.add(l), n.stopPropagation && ay.add(o);
      const u = e(l, o), c = (d, v) => {
        window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", h), ko.has(l) && ko.delete(l), iy(d) && typeof u == "function" && u(d, {
          success: v
        });
      }, f = (d) => {
        c(d, l === window || l === document || n.useGlobalTarget || _S(l, d.target));
      }, h = (d) => {
        c(d, false);
      };
      window.addEventListener("pointerup", f, a), window.addEventListener("pointercancel", h, a);
    };
    return i.forEach((o) => {
      (n.useGlobalTarget ? window : o).addEventListener("pointerdown", r, a), S5(o) && (o.addEventListener("focus", (u) => O5(u, a)), !C5(o) && !o.hasAttribute("tabindex") && (o.tabIndex = 0));
    }), s;
  }
  function sm(t) {
    return Hx(t) && "ownerSVGElement" in t;
  }
  const Yo = /* @__PURE__ */ new WeakMap();
  let Go;
  const LS = (t, e, n) => (i, a) => a && a[0] ? a[0][t + "Size"] : sm(i) && "getBBox" in i ? i.getBBox()[e] : i[n], N5 = LS("inline", "width", "offsetWidth"), j5 = LS("block", "height", "offsetHeight");
  function z5({ target: t, borderBoxSize: e }) {
    var _a5;
    (_a5 = Yo.get(t)) == null ? void 0 : _a5.forEach((n) => {
      n(t, {
        get width() {
          return N5(t, e);
        },
        get height() {
          return j5(t, e);
        }
      });
    });
  }
  function _5(t) {
    t.forEach(z5);
  }
  function L5() {
    typeof ResizeObserver > "u" || (Go = new ResizeObserver(_5));
  }
  function V5(t, e) {
    Go || L5();
    const n = DS(t);
    return n.forEach((i) => {
      let a = Yo.get(i);
      a || (a = /* @__PURE__ */ new Set(), Yo.set(i, a)), a.add(e), Go == null ? void 0 : Go.observe(i);
    }), () => {
      n.forEach((i) => {
        const a = Yo.get(i);
        a == null ? void 0 : a.delete(e), (a == null ? void 0 : a.size) || (Go == null ? void 0 : Go.unobserve(i));
      });
    };
  }
  const qo = /* @__PURE__ */ new Set();
  let Ra;
  function B5() {
    Ra = () => {
      const t = {
        get width() {
          return window.innerWidth;
        },
        get height() {
          return window.innerHeight;
        }
      };
      qo.forEach((e) => e(t));
    }, window.addEventListener("resize", Ra);
  }
  function U5(t) {
    return qo.add(t), Ra || B5(), () => {
      qo.delete(t), !qo.size && typeof Ra == "function" && (window.removeEventListener("resize", Ra), Ra = void 0);
    };
  }
  function sy(t, e) {
    return typeof t == "function" ? U5(t) : V5(t, e);
  }
  function P5(t) {
    return sm(t) && t.tagName === "svg";
  }
  const H5 = [
    ...MS,
    Mt,
    yi
  ], k5 = (t) => H5.find(CS(t)), ry = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }), Oa = () => ({
    x: ry(),
    y: ry()
  }), oy = () => ({
    min: 0,
    max: 0
  }), jt = () => ({
    x: oy(),
    y: oy()
  }), Y5 = /* @__PURE__ */ new WeakMap();
  function pu(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function";
  }
  function Cr(t) {
    return typeof t == "string" || Array.isArray(t);
  }
  const rm = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ], om = [
    "initial",
    ...rm
  ];
  function gu(t) {
    return pu(t.animate) || om.some((e) => Cr(t[e]));
  }
  function VS(t) {
    return !!(gu(t) || t.variants);
  }
  function G5(t, e, n) {
    for (const i in e) {
      const a = e[i], s = n[i];
      if (Xt(a)) t.addValue(i, a);
      else if (Xt(s)) t.addValue(i, ns(a, {
        owner: t
      }));
      else if (s !== a) if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === true ? r.jump(a) : r.hasAnimated || r.set(a);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, ns(r !== void 0 ? r : a, {
          owner: t
        }));
      }
    }
    for (const i in n) e[i] === void 0 && t.removeValue(i);
    return e;
  }
  const rd = {
    current: null
  }, BS = {
    current: false
  }, q5 = typeof window < "u";
  function X5() {
    if (BS.current = true, !!q5) if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => rd.current = t.matches;
      t.addEventListener("change", e), e();
    } else rd.current = false;
  }
  const ly = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ];
  let _l = {};
  function US(t) {
    _l = t;
  }
  function Q5() {
    return _l;
  }
  class F5 {
    scrapeMotionValuesFromProps(e, n, i) {
      return {};
    }
    constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: a, skipAnimations: s, blockInitialAnimation: r, visualState: o }, l = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.shouldSkipAnimations = false, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ih, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = false, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        const d = Zt.now();
        this.renderScheduledAt < d && (this.renderScheduledAt = d, ct.render(this.render, false, true));
      };
      const { latestValues: u, renderState: c } = o;
      this.latestValues = u, this.baseTarget = {
        ...u
      }, this.initialValues = n.initial ? {
        ...u
      } : {}, this.renderState = c, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = a, this.skipAnimationsConfig = s, this.options = l, this.blockInitialAnimation = !!r, this.isControllingVariants = gu(n), this.isVariantNode = VS(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
      const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
      for (const d in h) {
        const v = h[d];
        u[d] !== void 0 && Xt(v) && v.set(u[d]);
      }
    }
    mount(e) {
      var _a5, _b3;
      if (this.hasBeenMounted) for (const n in this.initialValues) (_a5 = this.values.get(n)) == null ? void 0 : _a5.jump(this.initialValues[n]), this.latestValues[n] = this.initialValues[n];
      this.current = e, Y5.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = false : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = true : (BS.current || X5(), this.shouldReduceMotion = rd.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? false, (_b3 = this.parent) == null ? void 0 : _b3.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = true;
    }
    unmount() {
      var _a5;
      this.projection && this.projection.unmount(), gi(this.notifyUpdate), gi(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (_a5 = this.parent) == null ? void 0 : _a5.removeChild(this);
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
      if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), n.accelerate && x5.has(e) && this.current instanceof HTMLElement) {
        const { factory: r, keyframes: o, times: l, ease: u, duration: c } = n.accelerate, f = new yS({
          element: this.current,
          name: e,
          keyframes: o,
          times: l,
          ease: u,
          duration: Ne(c)
        }), h = r(f);
        this.valueSubscriptions.set(e, () => {
          h(), f.cancel();
        });
        return;
      }
      const i = vs.has(e);
      i && this.onBindTransform && this.onBindTransform();
      const a = n.on("change", (r) => {
        this.latestValues[e] = r, this.props.onUpdate && ct.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
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
      for (e in _l) {
        const n = _l[e];
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
      for (let i = 0; i < ly.length; i++) {
        const a = ly[i];
        this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
        const s = "on" + a, r = e[s];
        r && (this.propEventSubscriptions[a] = this.on(a, r));
      }
      this.prevMotionValues = G5(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
      return i === void 0 && n !== void 0 && (i = ns(n === null ? void 0 : n, {
        owner: this
      }), this.addValue(e, i)), i;
    }
    readValue(e, n) {
      let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
      return i != null && (typeof i == "string" && (Px(i) || kx(i)) ? i = parseFloat(i) : !k5(i) && yi.test(n) && (i = OS(e, n)), this.setBaseTarget(e, Xt(i) ? i.get() : i)), Xt(i) ? i.get() : i;
    }
    setBaseTarget(e, n) {
      this.baseTarget[e] = n;
    }
    getBaseTarget(e) {
      var _a5;
      const { initial: n } = this.props;
      let i;
      if (typeof n == "string" || typeof n == "object") {
        const s = tm(this.props, n, (_a5 = this.presenceContext) == null ? void 0 : _a5.custom);
        s && (i = s[e]);
      }
      if (n && i !== void 0) return i;
      const a = this.getBaseTargetFromProps(this.props, e);
      return a !== void 0 && !Xt(a) ? a : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
    }
    on(e, n) {
      return this.events[e] || (this.events[e] = new Hh()), this.events[e].add(n);
    }
    notify(e, ...n) {
      this.events[e] && this.events[e].notify(...n);
    }
    scheduleRenderMicrotask() {
      im.render(this.render);
    }
  }
  class PS extends F5 {
    constructor() {
      super(...arguments), this.KeyframeResolver = b5;
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
  class Ti {
    constructor(e) {
      this.isMounted = false, this.node = e;
    }
    update() {
    }
  }
  function HS({ top: t, left: e, right: n, bottom: i }) {
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
  function K5({ x: t, y: e }) {
    return {
      top: e.min,
      right: t.max,
      bottom: e.max,
      left: t.min
    };
  }
  function Z5(t, e) {
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
  function Sc(t) {
    return t === void 0 || t === 1;
  }
  function od({ scale: t, scaleX: e, scaleY: n }) {
    return !Sc(t) || !Sc(e) || !Sc(n);
  }
  function Li(t) {
    return od(t) || kS(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
  }
  function kS(t) {
    return uy(t.x) || uy(t.y);
  }
  function uy(t) {
    return t && t !== "0%";
  }
  function Ll(t, e, n) {
    const i = t - n, a = e * i;
    return n + a;
  }
  function cy(t, e, n, i, a) {
    return a !== void 0 && (t = Ll(t, a, i)), Ll(t, n, i) + e;
  }
  function ld(t, e = 0, n = 1, i, a) {
    t.min = cy(t.min, e, n, i, a), t.max = cy(t.max, e, n, i, a);
  }
  function YS(t, { x: e, y: n }) {
    ld(t.x, e.translate, e.scale, e.originPoint), ld(t.y, n.translate, n.scale, n.originPoint);
  }
  const fy = 0.999999999999, dy = 1.0000000000001;
  function $5(t, e, n, i = false) {
    const a = n.length;
    if (!a) return;
    e.x = e.y = 1;
    let s, r;
    for (let o = 0; o < a; o++) {
      s = n[o], r = s.projectionDelta;
      const { visualElement: l } = s.options;
      l && l.props.style && l.props.style.display === "contents" || (i && s.options.layoutScroll && s.scroll && s !== s.root && Na(t, {
        x: -s.scroll.offset.x,
        y: -s.scroll.offset.y
      }), r && (e.x *= r.x.scale, e.y *= r.y.scale, YS(t, r)), i && Li(s.latestValues) && Na(t, s.latestValues));
    }
    e.x < dy && e.x > fy && (e.x = 1), e.y < dy && e.y > fy && (e.y = 1);
  }
  function Da(t, e) {
    t.min = t.min + e, t.max = t.max + e;
  }
  function hy(t, e, n, i, a = 0.5) {
    const s = xt(t.min, t.max, a);
    ld(t, e, n, s, i);
  }
  function Na(t, e) {
    hy(t.x, e.x, e.scaleX, e.scale, e.originX), hy(t.y, e.y, e.scaleY, e.scale, e.originY);
  }
  function GS(t, e) {
    return HS(Z5(t.getBoundingClientRect(), e));
  }
  function I5(t, e, n) {
    const i = GS(t, n), { scroll: a } = e;
    return a && (Da(i.x, a.offset.x), Da(i.y, a.offset.y)), i;
  }
  const J5 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, W5 = ys.length;
  function t3(t, e, n) {
    let i = "", a = true;
    for (let s = 0; s < W5; s++) {
      const r = ys[s], o = t[r];
      if (o === void 0) continue;
      let l = true;
      if (typeof o == "number") l = o === (r.startsWith("scale") ? 1 : 0);
      else {
        const u = parseFloat(o);
        l = r.startsWith("scale") ? u === 1 : u === 0;
      }
      if (!l || n) {
        const u = NS(o, nm[r]);
        if (!l) {
          a = false;
          const c = J5[r] || r;
          i += `${c}(${u}) `;
        }
        n && (e[r] = u);
      }
    }
    return i = i.trim(), n ? i = n(e, a ? "" : i) : a && (i = "none"), i;
  }
  function lm(t, e, n) {
    const { style: i, vars: a, transformOrigin: s } = t;
    let r = false, o = false;
    for (const l in e) {
      const u = e[l];
      if (vs.has(l)) {
        r = true;
        continue;
      } else if (eS(l)) {
        a[l] = u;
        continue;
      } else {
        const c = NS(u, nm[l]);
        l.startsWith("origin") ? (o = true, s[l] = c) : i[l] = c;
      }
    }
    if (e.transform || (r || n ? i.transform = t3(e, t.transform, n) : i.transform && (i.transform = "none")), o) {
      const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
      i.transformOrigin = `${l} ${u} ${c}`;
    }
  }
  function qS(t, { style: e, vars: n }, i, a) {
    const s = t.style;
    let r;
    for (r in e) s[r] = e[r];
    a == null ? void 0 : a.applyProjectionStyles(s, i);
    for (r in n) s.setProperty(r, n[r]);
  }
  function my(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
  }
  const Ds = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string") if (B.test(t)) t = parseFloat(t);
      else return t;
      const n = my(t, e.target.x), i = my(t, e.target.y);
      return `${n}% ${i}%`;
    }
  }, e3 = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const i = t, a = yi.parse(t);
      if (a.length > 5) return i;
      const s = yi.createTransformer(t), r = typeof a[0] != "number" ? 1 : 0, o = n.x.scale * e.x, l = n.y.scale * e.y;
      a[0 + r] /= o, a[1 + r] /= l;
      const u = xt(o, l, 0.5);
      return typeof a[2 + r] == "number" && (a[2 + r] /= u), typeof a[3 + r] == "number" && (a[3 + r] /= u), s(a);
    }
  }, ud = {
    borderRadius: {
      ...Ds,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    },
    borderTopLeftRadius: Ds,
    borderTopRightRadius: Ds,
    borderBottomLeftRadius: Ds,
    borderBottomRightRadius: Ds,
    boxShadow: e3
  };
  function XS(t, { layout: e, layoutId: n }) {
    return vs.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!ud[t] || t === "opacity");
  }
  function um(t, e, n) {
    var _a5;
    const i = t.style, a = e == null ? void 0 : e.style, s = {};
    if (!i) return s;
    for (const r in i) (Xt(i[r]) || a && Xt(a[r]) || XS(r, t) || ((_a5 = n == null ? void 0 : n.getValue(r)) == null ? void 0 : _a5.liveStyle) !== void 0) && (s[r] = i[r]);
    return s;
  }
  function n3(t) {
    return window.getComputedStyle(t);
  }
  class i3 extends PS {
    constructor() {
      super(...arguments), this.type = "html", this.renderInstance = qS;
    }
    readValueFromInstance(e, n) {
      var _a5;
      if (vs.has(n)) return ((_a5 = this.projection) == null ? void 0 : _a5.isProjecting) ? $f(n) : xN(e, n);
      {
        const i = n3(e), a = (eS(n) ? i.getPropertyValue(n) : i[n]) || 0;
        return typeof a == "string" ? a.trim() : a;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: n }) {
      return GS(e, n);
    }
    build(e, n, i) {
      lm(e, n, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, n, i) {
      return um(e, n, i);
    }
  }
  const a3 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  }, s3 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function r3(t, e, n = 1, i = 0, a = true) {
    t.pathLength = 1;
    const s = a ? a3 : s3;
    t[s.offset] = `${-i}`, t[s.array] = `${e} ${n}`;
  }
  const o3 = [
    "offsetDistance",
    "offsetPath",
    "offsetRotate",
    "offsetAnchor"
  ];
  function QS(t, { attrX: e, attrY: n, attrScale: i, pathLength: a, pathSpacing: s = 1, pathOffset: r = 0, ...o }, l, u, c) {
    if (lm(t, o, u), l) {
      t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
      return;
    }
    t.attrs = t.style, t.style = {};
    const { attrs: f, style: h } = t;
    f.transform && (h.transform = f.transform, delete f.transform), (h.transform || f.transformOrigin) && (h.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), h.transform && (h.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete f.transformBox);
    for (const d of o3) f[d] !== void 0 && (h[d] = f[d], delete f[d]);
    e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), i !== void 0 && (f.scale = i), a !== void 0 && r3(f, a, s, r, false);
  }
  const FS = /* @__PURE__ */ new Set([
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
  ]), KS = (t) => typeof t == "string" && t.toLowerCase() === "svg";
  function l3(t, e, n, i) {
    qS(t, e, void 0, i);
    for (const a in e.attrs) t.setAttribute(FS.has(a) ? a : em(a), e.attrs[a]);
  }
  function ZS(t, e, n) {
    const i = um(t, e, n);
    for (const a in t) if (Xt(t[a]) || Xt(e[a])) {
      const s = ys.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
      i[s] = t[a];
    }
    return i;
  }
  class u3 extends PS {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = jt;
    }
    getBaseTargetFromProps(e, n) {
      return e[n];
    }
    readValueFromInstance(e, n) {
      if (vs.has(n)) {
        const i = RS(n);
        return i && i.default || 0;
      }
      return n = FS.has(n) ? n : em(n), e.getAttribute(n);
    }
    scrapeMotionValuesFromProps(e, n, i) {
      return ZS(e, n, i);
    }
    build(e, n, i) {
      QS(e, n, this.isSVGTag, i.transformTemplate, i.style);
    }
    renderInstance(e, n, i, a) {
      l3(e, n, i, a);
    }
    mount(e) {
      this.isSVGTag = KS(e.tagName), super.mount(e);
    }
  }
  const c3 = om.length;
  function $S(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
      const n = t.parent ? $S(t.parent) || {} : {};
      return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
    }
    const e = {};
    for (let n = 0; n < c3; n++) {
      const i = om[n], a = t.props[i];
      (Cr(a) || a === false) && (e[i] = a);
    }
    return e;
  }
  function IS(t, e) {
    if (!Array.isArray(e)) return false;
    const n = e.length;
    if (n !== t.length) return false;
    for (let i = 0; i < n; i++) if (e[i] !== t[i]) return false;
    return true;
  }
  const f3 = [
    ...rm
  ].reverse(), d3 = rm.length;
  function h3(t) {
    return (e) => Promise.all(e.map(({ animation: n, options: i }) => u5(t, n, i)));
  }
  function m3(t) {
    let e = h3(t), n = py(), i = true;
    const a = (l) => (u, c) => {
      var _a5;
      const f = ka(t, c, l === "exit" ? (_a5 = t.presenceContext) == null ? void 0 : _a5.custom : void 0);
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
    function r(l) {
      const { props: u } = t, c = $S(t.parent) || {}, f = [], h = /* @__PURE__ */ new Set();
      let d = {}, v = 1 / 0;
      for (let x = 0; x < d3; x++) {
        const p = f3[x], m = n[p], g = u[p] !== void 0 ? u[p] : c[p], S = Cr(g), T = p === l ? m.isActive : null;
        T === false && (v = x);
        let A = g === c[p] && g !== u[p] && S;
        if (A && i && t.manuallyAnimateOnMount && (A = false), m.protectedKeys = {
          ...d
        }, !m.isActive && T === null || !g && !m.prevProp || pu(g) || typeof g == "boolean") continue;
        if (p === "exit" && m.isActive && T !== true) {
          m.prevResolvedValues && (d = {
            ...d,
            ...m.prevResolvedValues
          });
          continue;
        }
        const E = p3(m.prevProp, g);
        let C = E || p === l && m.isActive && !A && S || x > v && S, j = false;
        const z = Array.isArray(g) ? g : [
          g
        ];
        let P = z.reduce(a(p), {});
        T === false && (P = {});
        const { prevResolvedValues: V = {} } = m, J = {
          ...V,
          ...P
        }, L = (D) => {
          C = true, h.has(D) && (j = true, h.delete(D)), m.needsAnimating[D] = true;
          const O = t.getValue(D);
          O && (O.liveStyle = false);
        };
        for (const D in J) {
          const O = P[D], N = V[D];
          if (d.hasOwnProperty(D)) continue;
          let U = false;
          nd(O) && nd(N) ? U = !IS(O, N) : U = O !== N, U ? O != null ? L(D) : h.add(D) : O !== void 0 && h.has(D) ? L(D) : m.protectedKeys[D] = true;
        }
        m.prevProp = g, m.prevResolvedValues = P, m.isActive && (d = {
          ...d,
          ...P
        }), i && t.blockInitialAnimation && (C = false);
        const X = A && E;
        C && (!X || j) && f.push(...z.map((D) => {
          const O = {
            type: p
          };
          if (typeof D == "string" && i && !X && t.manuallyAnimateOnMount && t.parent) {
            const { parent: N } = t, U = ka(N, D);
            if (N.enteringChildren && U) {
              const { delayChildren: ft } = U.transition || {};
              O.delay = bS(N.enteringChildren, t, ft);
            }
          }
          return {
            animation: D,
            options: O
          };
        }));
      }
      if (h.size) {
        const x = {};
        if (typeof u.initial != "boolean") {
          const p = ka(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
          p && p.transition && (x.transition = p.transition);
        }
        h.forEach((p) => {
          const m = t.getBaseTarget(p), g = t.getValue(p);
          g && (g.liveStyle = true), x[p] = m ?? null;
        }), f.push({
          animation: x
        });
      }
      let y = !!f.length;
      return i && (u.initial === false || u.initial === u.animate) && !t.manuallyAnimateOnMount && (y = false), i = false, y ? e(f) : Promise.resolve();
    }
    function o(l, u) {
      var _a5;
      if (n[l].isActive === u) return Promise.resolve();
      (_a5 = t.variantChildren) == null ? void 0 : _a5.forEach((f) => {
        var _a6;
        return (_a6 = f.animationState) == null ? void 0 : _a6.setActive(l, u);
      }), n[l].isActive = u;
      const c = r(l);
      for (const f in n) n[f].protectedKeys = {};
      return c;
    }
    return {
      animateChanges: r,
      setActive: o,
      setAnimateFunction: s,
      getState: () => n,
      reset: () => {
        n = py();
      }
    };
  }
  function p3(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !IS(e, t) : false;
  }
  function Di(t = false) {
    return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function py() {
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
  function gy(t, e) {
    t.min = e.min, t.max = e.max;
  }
  function Ue(t, e) {
    gy(t.x, e.x), gy(t.y, e.y);
  }
  function yy(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
  }
  const JS = 1e-4, g3 = 1 - JS, y3 = 1 + JS, WS = 0.01, v3 = 0 - WS, b3 = 0 + WS;
  function $t(t) {
    return t.max - t.min;
  }
  function x3(t, e, n) {
    return Math.abs(t - e) <= n;
  }
  function vy(t, e, n, i = 0.5) {
    t.origin = i, t.originPoint = xt(e.min, e.max, t.origin), t.scale = $t(n) / $t(e), t.translate = xt(n.min, n.max, t.origin) - t.originPoint, (t.scale >= g3 && t.scale <= y3 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= v3 && t.translate <= b3 || isNaN(t.translate)) && (t.translate = 0);
  }
  function er(t, e, n, i) {
    vy(t.x, e.x, n.x, i ? i.originX : void 0), vy(t.y, e.y, n.y, i ? i.originY : void 0);
  }
  function by(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + $t(e);
  }
  function S3(t, e, n) {
    by(t.x, e.x, n.x), by(t.y, e.y, n.y);
  }
  function xy(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + $t(e);
  }
  function Vl(t, e, n) {
    xy(t.x, e.x, n.x), xy(t.y, e.y, n.y);
  }
  function Sy(t, e, n, i, a) {
    return t -= e, t = Ll(t, 1 / n, i), a !== void 0 && (t = Ll(t, 1 / a, i)), t;
  }
  function w3(t, e = 0, n = 1, i = 0.5, a, s = t, r = t) {
    if (tn.test(e) && (e = parseFloat(e), e = xt(r.min, r.max, e / 100) - r.min), typeof e != "number") return;
    let o = xt(s.min, s.max, i);
    t === s && (o -= e), t.min = Sy(t.min, e, n, o, a), t.max = Sy(t.max, e, n, o, a);
  }
  function wy(t, e, [n, i, a], s, r) {
    w3(t, e[n], e[i], e[a], e.scale, s, r);
  }
  const T3 = [
    "x",
    "scaleX",
    "originX"
  ], E3 = [
    "y",
    "scaleY",
    "originY"
  ];
  function Ty(t, e, n, i) {
    wy(t.x, e, T3, n ? n.x : void 0, i ? i.x : void 0), wy(t.y, e, E3, n ? n.y : void 0, i ? i.y : void 0);
  }
  function Ey(t) {
    return t.translate === 0 && t.scale === 1;
  }
  function tw(t) {
    return Ey(t.x) && Ey(t.y);
  }
  function Ay(t, e) {
    return t.min === e.min && t.max === e.max;
  }
  function A3(t, e) {
    return Ay(t.x, e.x) && Ay(t.y, e.y);
  }
  function Cy(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
  }
  function ew(t, e) {
    return Cy(t.x, e.x) && Cy(t.y, e.y);
  }
  function My(t) {
    return $t(t.x) / $t(t.y);
  }
  function Ry(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
  }
  function Fe(t) {
    return [
      t("x"),
      t("y")
    ];
  }
  function C3(t, e, n) {
    let i = "";
    const a = t.x.translate / e.x, s = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
    if ((a || s || r) && (i = `translate3d(${a}px, ${s}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
      const { transformPerspective: u, rotate: c, rotateX: f, rotateY: h, skewX: d, skewY: v } = n;
      u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), f && (i += `rotateX(${f}deg) `), h && (i += `rotateY(${h}deg) `), d && (i += `skewX(${d}deg) `), v && (i += `skewY(${v}deg) `);
    }
    const o = t.x.scale * e.x, l = t.y.scale * e.y;
    return (o !== 1 || l !== 1) && (i += `scale(${o}, ${l})`), i || "none";
  }
  const nw = [
    "TopLeft",
    "TopRight",
    "BottomLeft",
    "BottomRight"
  ], M3 = nw.length, Oy = (t) => typeof t == "string" ? parseFloat(t) : t, Dy = (t) => typeof t == "number" || B.test(t);
  function R3(t, e, n, i, a, s) {
    a ? (t.opacity = xt(0, n.opacity ?? 1, O3(i)), t.opacityExit = xt(e.opacity ?? 1, 0, D3(i))) : s && (t.opacity = xt(e.opacity ?? 1, n.opacity ?? 1, i));
    for (let r = 0; r < M3; r++) {
      const o = `border${nw[r]}Radius`;
      let l = Ny(e, o), u = Ny(n, o);
      if (l === void 0 && u === void 0) continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || Dy(l) === Dy(u) ? (t[o] = Math.max(xt(Oy(l), Oy(u), i), 0), (tn.test(u) || tn.test(l)) && (t[o] += "%")) : t[o] = u;
    }
    (e.rotate || n.rotate) && (t.rotate = xt(e.rotate || 0, n.rotate || 0, i));
  }
  function Ny(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius;
  }
  const O3 = iw(0, 0.5, Zx), D3 = iw(0.5, 0.95, De);
  function iw(t, e, n) {
    return (i) => i < t ? 0 : i > e ? 1 : n(Tr(t, e, i));
  }
  function N3(t, e, n) {
    const i = Xt(t) ? t : ns(t);
    return i.start(Wh("", i, e, n)), i.animation;
  }
  function Mr(t, e, n, i = {
    passive: true
  }) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
  }
  const j3 = (t, e) => t.depth - e.depth;
  class z3 {
    constructor() {
      this.children = [], this.isDirty = false;
    }
    add(e) {
      Uh(this.children, e), this.isDirty = true;
    }
    remove(e) {
      Dl(this.children, e), this.isDirty = true;
    }
    forEach(e) {
      this.isDirty && this.children.sort(j3), this.isDirty = false, this.children.forEach(e);
    }
  }
  function _3(t, e) {
    const n = Zt.now(), i = ({ timestamp: a }) => {
      const s = a - n;
      s >= e && (gi(i), t(s - e));
    };
    return ct.setup(i, true), () => gi(i);
  }
  function Xo(t) {
    return Xt(t) ? t.get() : t;
  }
  class L3 {
    constructor() {
      this.members = [];
    }
    add(e) {
      Uh(this.members, e);
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
        const s = this.members[a], r = s.instance;
        if (s.isPresent !== false && (!r || r.isConnected !== false)) {
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
        const { crossfade: o } = e.options;
        o === false && i.hide();
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
  const Qo = {
    hasAnimatedSinceResize: true,
    hasEverUpdated: false
  }, wc = [
    "",
    "X",
    "Y",
    "Z"
  ], V3 = 1e3;
  let B3 = 0;
  function Tc(t, e, n, i) {
    const { latestValues: a } = e;
    a[t] && (n[t] = a[t], e.setStaticValue(t, 0), i && (i[t] = 0));
  }
  function aw(t) {
    if (t.hasCheckedOptimisedAppear = true, t.root === t) return;
    const { visualElement: e } = t.options;
    if (!e) return;
    const n = ES(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const { layout: a, layoutId: s } = t.options;
      window.MotionCancelOptimisedAnimation(n, "transform", ct, !(a || s));
    }
    const { parent: i } = t;
    i && !i.hasCheckedOptimisedAppear && aw(i);
  }
  function sw({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: a }) {
    return class {
      constructor(r = {}, o = e == null ? void 0 : e()) {
        this.id = B3++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = {
          x: 1,
          y: 1
        }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.layoutVersion = 0, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = false, this.nodes.forEach(H3), this.nodes.forEach(q3), this.nodes.forEach(X3), this.nodes.forEach(k3);
        }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = o ? o.root || o : this, this.path = o ? [
          ...o.path,
          o
        ] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0;
        for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = true;
        this.root === this && (this.nodes = new z3());
      }
      addEventListener(r, o) {
        return this.eventHandlers.has(r) || this.eventHandlers.set(r, new Hh()), this.eventHandlers.get(r).add(o);
      }
      notifyListeners(r, ...o) {
        const l = this.eventHandlers.get(r);
        l && l.notify(...o);
      }
      hasListeners(r) {
        return this.eventHandlers.has(r);
      }
      mount(r) {
        if (this.instance) return;
        this.isSVG = sm(r) && !P5(r), this.instance = r;
        const { layoutId: o, layout: l, visualElement: u } = this.options;
        if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || o) && (this.isLayoutDirty = true), t) {
          let c, f = 0;
          const h = () => this.root.updateBlockedByResize = false;
          ct.read(() => {
            f = window.innerWidth;
          }), t(r, () => {
            const d = window.innerWidth;
            d !== f && (f = d, this.root.updateBlockedByResize = true, c && c(), c = _3(h, 250), Qo.hasAnimatedSinceResize && (Qo.hasAnimatedSinceResize = false, this.nodes.forEach(_y)));
          });
        }
        o && this.root.registerSharedNode(o, this), this.options.animate !== false && u && (o || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: f, hasRelativeLayoutChanged: h, layout: d }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const v = this.options.transition || u.getDefaultTransition() || $3, { onLayoutAnimationStart: y, onLayoutAnimationComplete: x } = u.getProps(), p = !this.targetLayout || !ew(this.targetLayout, d), m = !f && h;
          if (this.options.layoutRoot || this.resumeFrom || m || f && (p || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
            const g = {
              ...Jh(v, "layout"),
              onPlay: y,
              onComplete: x
            };
            (u.shouldReduceMotion || this.options.layoutRoot) && (g.delay = 0, g.type = false), this.startAnimation(g), this.setAnimationOrigin(c, m);
          } else f || _y(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = d;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        const r = this.getStack();
        r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), gi(this.updateProjection);
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
        this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(Q3), this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: r } = this.options;
        return r && r.getProps().transformTemplate;
      }
      willUpdate(r = true) {
        if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && aw(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
        this.isLayoutDirty = true;
        for (let c = 0; c < this.path.length; c++) {
          const f = this.path[c];
          f.shouldResetTransform = true, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(false);
        }
        const { layoutId: o, layout: l } = this.options;
        if (o === void 0 && !l) return;
        const u = this.getTransformTemplate();
        this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
      }
      update() {
        if (this.updateScheduled = false, this.isUpdateBlocked()) {
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(jy);
          return;
        }
        if (this.animationId <= this.animationCommitId) {
          this.nodes.forEach(zy);
          return;
        }
        this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(G3), this.nodes.forEach(U3), this.nodes.forEach(P3)) : this.nodes.forEach(zy), this.clearAllSnapshots();
        const o = Zt.now();
        Pt.delta = nn(0, 1e3 / 60, o - Pt.timestamp), Pt.timestamp = o, Pt.isProcessing = true, mc.update.process(Pt), mc.preRender.process(Pt), mc.render.process(Pt), Pt.isProcessing = false;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = true, im.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(Y3), this.sharedNodes.forEach(F3);
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
        const r = this.layout;
        this.layout = this.measure(false), this.layoutVersion++, this.layoutCorrected = jt(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: o } = this.options;
        o && o.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
      }
      updateScroll(r = "measure") {
        let o = !!(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (o = false), o && this.instance) {
          const l = i(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: r,
            isRoot: l,
            offset: n(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : l
          };
        }
      }
      resetTransform() {
        if (!a) return;
        const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, o = this.projectionDelta && !tw(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
        r && this.instance && (o || Li(this.latestValues) || c) && (a(this.instance, u), this.shouldResetTransform = false, this.scheduleRender());
      }
      measure(r = true) {
        const o = this.measurePageBox();
        let l = this.removeElementScroll(o);
        return r && (l = this.removeTransform(l)), I3(l), {
          animationId: this.root.animationId,
          measuredBox: o,
          layoutBox: l,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        var _a5;
        const { visualElement: r } = this.options;
        if (!r) return jt();
        const o = r.measureViewportBox();
        if (!(((_a5 = this.scroll) == null ? void 0 : _a5.wasRoot) || this.path.some(J3))) {
          const { scroll: u } = this.root;
          u && (Da(o.x, u.offset.x), Da(o.y, u.offset.y));
        }
        return o;
      }
      removeElementScroll(r) {
        var _a5;
        const o = jt();
        if (Ue(o, r), (_a5 = this.scroll) == null ? void 0 : _a5.wasRoot) return o;
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l], { scroll: c, options: f } = u;
          u !== this.root && c && f.layoutScroll && (c.wasRoot && Ue(o, r), Da(o.x, c.offset.x), Da(o.y, c.offset.y));
        }
        return o;
      }
      applyTransform(r, o = false) {
        const l = jt();
        Ue(l, r);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !o && c.options.layoutScroll && c.scroll && c !== c.root && Na(l, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
          }), Li(c.latestValues) && Na(l, c.latestValues);
        }
        return Li(this.latestValues) && Na(l, this.latestValues), l;
      }
      removeTransform(r) {
        const o = jt();
        Ue(o, r);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !Li(u.latestValues)) continue;
          od(u.latestValues) && u.updateSnapshot();
          const c = jt(), f = u.measurePageBox();
          Ue(c, f), Ty(o, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
        }
        return Li(this.latestValues) && Ty(o, this.latestValues), o;
      }
      setTargetDelta(r) {
        this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
      }
      setOptions(r) {
        this.options = {
          ...this.options,
          ...r,
          crossfade: r.crossfade !== void 0 ? r.crossfade : true
        };
      }
      clearMeasurements() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Pt.timestamp && this.relativeParent.resolveTargetDelta(true);
      }
      resolveTargetDelta(r = false) {
        var _a5;
        const o = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
        const l = !!this.resumingFrom || this !== o;
        if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a5 = this.parent) == null ? void 0 : _a5.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
        const { layout: c, layoutId: f } = this.options;
        if (!this.layout || !(c || f)) return;
        this.resolvedRelativeTargetAt = Pt.timestamp;
        const h = this.getClosestProjectingParent();
        h && this.linkedParentVersion !== h.layoutVersion && !h.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (h && h.layout ? this.createRelativeTarget(h, this.layout.layoutBox, h.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = jt(), this.targetWithTransforms = jt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), S3(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ue(this.target, this.layout.layoutBox), YS(this.target, this.targetDelta)) : Ue(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? this.createRelativeTarget(h, this.target, h.target) : this.relativeParent = this.relativeTarget = void 0));
      }
      getClosestProjectingParent() {
        if (!(!this.parent || od(this.parent.latestValues) || kS(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      createRelativeTarget(r, o, l) {
        this.relativeParent = r, this.linkedParentVersion = r.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = jt(), this.relativeTargetOrigin = jt(), Vl(this.relativeTargetOrigin, o, l), Ue(this.relativeTarget, this.relativeTargetOrigin);
      }
      removeRelativeTarget() {
        this.relativeParent = this.relativeTarget = void 0;
      }
      calcProjection() {
        var _a5;
        const r = this.getLead(), o = !!this.resumingFrom || this !== r;
        let l = true;
        if ((this.isProjectionDirty || ((_a5 = this.parent) == null ? void 0 : _a5.isProjectionDirty)) && (l = false), o && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = false), this.resolvedRelativeTargetAt === Pt.timestamp && (l = false), l) return;
        const { layout: u, layoutId: c } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c)) return;
        Ue(this.layoutCorrected, this.layout.layoutBox);
        const f = this.treeScale.x, h = this.treeScale.y;
        $5(this.layoutCorrected, this.treeScale, this.path, o), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = jt());
        const { target: d } = r;
        if (!d) {
          this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (yy(this.prevProjectionDelta.x, this.projectionDelta.x), yy(this.prevProjectionDelta.y, this.projectionDelta.y)), er(this.projectionDelta, this.layoutCorrected, d, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !Ry(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ry(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", d));
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender(r = true) {
        var _a5;
        if ((_a5 = this.options.visualElement) == null ? void 0 : _a5.scheduleRender(), r) {
          const o = this.getStack();
          o && o.scheduleRender();
        }
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = Oa(), this.projectionDelta = Oa(), this.projectionDeltaWithTransform = Oa();
      }
      setAnimationOrigin(r, o = false) {
        const l = this.snapshot, u = l ? l.latestValues : {}, c = {
          ...this.latestValues
        }, f = Oa();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !o;
        const h = jt(), d = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, y = d !== v, x = this.getStack(), p = !x || x.members.length <= 1, m = !!(y && !p && this.options.crossfade === true && !this.path.some(Z3));
        this.animationProgress = 0;
        let g;
        this.mixTargetDelta = (S) => {
          const T = S / 1e3;
          Ly(f.x, r.x, T), Ly(f.y, r.y, T), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Vl(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), K3(this.relativeTarget, this.relativeTargetOrigin, h, T), g && A3(this.relativeTarget, g) && (this.isProjectionDirty = false), g || (g = jt()), Ue(g, this.relativeTarget)), y && (this.animationValues = c, R3(c, u, this.latestValues, T, m, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(r) {
        var _a5, _b3, _c3;
        this.notifyListeners("animationStart"), (_a5 = this.currentAnimation) == null ? void 0 : _a5.stop(), (_c3 = (_b3 = this.resumingFrom) == null ? void 0 : _b3.currentAnimation) == null ? void 0 : _c3.stop(), this.pendingAnimation && (gi(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ct.update(() => {
          Qo.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = ns(0)), this.currentAnimation = N3(this.motionValue, [
            0,
            1e3
          ], {
            ...r,
            velocity: 0,
            isSync: true,
            onUpdate: (o) => {
              this.mixTargetDelta(o), r.onUpdate && r.onUpdate(o);
            },
            onStop: () => {
            },
            onComplete: () => {
              r.onComplete && r.onComplete(), this.completeAnimation();
            }
          }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
        const r = this.getStack();
        r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(V3), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const r = this.getLead();
        let { targetWithTransforms: o, target: l, layout: u, latestValues: c } = r;
        if (!(!o || !l || !u)) {
          if (this !== r && this.layout && u && rw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
            l = this.target || jt();
            const f = $t(this.layout.layoutBox.x);
            l.x.min = r.target.x.min, l.x.max = l.x.min + f;
            const h = $t(this.layout.layoutBox.y);
            l.y.min = r.target.y.min, l.y.max = l.y.min + h;
          }
          Ue(o, l), Na(o, c), er(this.projectionDeltaWithTransform, this.layoutCorrected, o, c);
        }
      }
      registerSharedNode(r, o) {
        this.sharedNodes.has(r) || this.sharedNodes.set(r, new L3()), this.sharedNodes.get(r).add(o);
        const u = o.options.initialPromotionConfig;
        o.promote({
          transition: u ? u.transition : void 0,
          preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(o) : void 0
        });
      }
      isLead() {
        const r = this.getStack();
        return r ? r.lead === this : true;
      }
      getLead() {
        var _a5;
        const { layoutId: r } = this.options;
        return r ? ((_a5 = this.getStack()) == null ? void 0 : _a5.lead) || this : this;
      }
      getPrevLead() {
        var _a5;
        const { layoutId: r } = this.options;
        return r ? (_a5 = this.getStack()) == null ? void 0 : _a5.prevLead : void 0;
      }
      getStack() {
        const { layoutId: r } = this.options;
        if (r) return this.root.sharedNodes.get(r);
      }
      promote({ needsReset: r, transition: o, preserveFollowOpacity: l } = {}) {
        const u = this.getStack();
        u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = true), o && this.setOptions({
          transition: o
        });
      }
      relegate() {
        const r = this.getStack();
        return r ? r.relegate(this) : false;
      }
      resetSkewAndRotation() {
        const { visualElement: r } = this.options;
        if (!r) return;
        let o = false;
        const { latestValues: l } = r;
        if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (o = true), !o) return;
        const u = {};
        l.z && Tc("z", r, u, this.animationValues);
        for (let c = 0; c < wc.length; c++) Tc(`rotate${wc[c]}`, r, u, this.animationValues), Tc(`skew${wc[c]}`, r, u, this.animationValues);
        r.render();
        for (const c in u) r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
        r.scheduleRender();
      }
      applyProjectionStyles(r, o) {
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) {
          r.visibility = "hidden";
          return;
        }
        const l = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false, r.visibility = "", r.opacity = "", r.pointerEvents = Xo(o == null ? void 0 : o.pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
          return;
        }
        const u = this.getLead();
        if (!this.projectionDelta || !this.layout || !u.target) {
          this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = Xo(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !Li(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = false);
          return;
        }
        r.visibility = "";
        const c = u.animationValues || u.latestValues;
        this.applyTransformsToTarget();
        let f = C3(this.projectionDeltaWithTransform, this.treeScale, c);
        l && (f = l(c, f)), r.transform = f;
        const { x: h, y: d } = this.projectionDelta;
        r.transformOrigin = `${h.origin * 100}% ${d.origin * 100}% 0`, u.animationValues ? r.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : r.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
        for (const v in ud) {
          if (c[v] === void 0) continue;
          const { correct: y, applyTo: x, isCSSVariable: p } = ud[v], m = f === "none" ? c[v] : y(c[v], u);
          if (x) {
            const g = x.length;
            for (let S = 0; S < g; S++) r[x[S]] = m;
          } else p ? this.options.visualElement.renderState.vars[v] = m : r[v] = m;
        }
        this.options.layoutId && (r.pointerEvents = u === this ? Xo(o == null ? void 0 : o.pointerEvents) || "" : "none");
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((r) => {
          var _a5;
          return (_a5 = r.currentAnimation) == null ? void 0 : _a5.stop();
        }), this.root.nodes.forEach(jy), this.root.sharedNodes.clear();
      }
    };
  }
  function U3(t) {
    t.updateLayout();
  }
  function P3(t) {
    var _a5;
    const e = ((_a5 = t.resumeFrom) == null ? void 0 : _a5.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
      const { layoutBox: n, measuredBox: i } = t.layout, { animationType: a } = t.options, s = e.source !== t.layout.source;
      a === "size" ? Fe((c) => {
        const f = s ? e.measuredBox[c] : e.layoutBox[c], h = $t(f);
        f.min = n[c].min, f.max = f.min + h;
      }) : rw(a, e.layoutBox, n) && Fe((c) => {
        const f = s ? e.measuredBox[c] : e.layoutBox[c], h = $t(n[c]);
        f.max = f.min + h, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = true, t.relativeTarget[c].max = t.relativeTarget[c].min + h);
      });
      const r = Oa();
      er(r, n, e.layoutBox);
      const o = Oa();
      s ? er(o, t.applyTransform(i, true), e.measuredBox) : er(o, n, e.layoutBox);
      const l = !tw(r);
      let u = false;
      if (!t.resumeFrom) {
        const c = t.getClosestProjectingParent();
        if (c && !c.resumeFrom) {
          const { snapshot: f, layout: h } = c;
          if (f && h) {
            const d = jt();
            Vl(d, e.layoutBox, f.layoutBox);
            const v = jt();
            Vl(v, n, h.layoutBox), ew(d, v) || (u = true), c.options.layoutRoot && (t.relativeTarget = v, t.relativeTargetOrigin = d, t.relativeParent = c);
          }
        }
      }
      t.notifyListeners("didUpdate", {
        layout: n,
        snapshot: e,
        delta: o,
        layoutDelta: r,
        hasLayoutChanged: l,
        hasRelativeLayoutChanged: u
      });
    } else if (t.isLead()) {
      const { onExitComplete: n } = t.options;
      n && n();
    }
    t.options.transition = void 0;
  }
  function H3(t) {
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
  }
  function k3(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
  }
  function Y3(t) {
    t.clearSnapshot();
  }
  function jy(t) {
    t.clearMeasurements();
  }
  function zy(t) {
    t.isLayoutDirty = false;
  }
  function G3(t) {
    const { visualElement: e } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
  }
  function _y(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = true;
  }
  function q3(t) {
    t.resolveTargetDelta();
  }
  function X3(t) {
    t.calcProjection();
  }
  function Q3(t) {
    t.resetSkewAndRotation();
  }
  function F3(t) {
    t.removeLeadSnapshot();
  }
  function Ly(t, e, n) {
    t.translate = xt(e.translate, 0, n), t.scale = xt(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
  }
  function Vy(t, e, n, i) {
    t.min = xt(e.min, n.min, i), t.max = xt(e.max, n.max, i);
  }
  function K3(t, e, n, i) {
    Vy(t.x, e.x, n.x, i), Vy(t.y, e.y, n.y, i);
  }
  function Z3(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0;
  }
  const $3 = {
    duration: 0.45,
    ease: [
      0.4,
      0,
      0.1,
      1
    ]
  }, By = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Uy = By("applewebkit/") && !By("chrome/") ? Math.round : De;
  function Py(t) {
    t.min = Uy(t.min), t.max = Uy(t.max);
  }
  function I3(t) {
    Py(t.x), Py(t.y);
  }
  function rw(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !x3(My(e), My(n), 0.2);
  }
  function J3(t) {
    var _a5;
    return t !== t.root && ((_a5 = t.scroll) == null ? void 0 : _a5.wasRoot);
  }
  const W3 = sw({
    attachResizeListener: (t, e) => Mr(t, "resize", e),
    measureScroll: () => {
      var _a5, _b3;
      return {
        x: document.documentElement.scrollLeft || ((_a5 = document.body) == null ? void 0 : _a5.scrollLeft) || 0,
        y: document.documentElement.scrollTop || ((_b3 = document.body) == null ? void 0 : _b3.scrollTop) || 0
      };
    },
    checkIsScrollRoot: () => true
  }), Ec = {
    current: void 0
  }, ow = sw({
    measureScroll: (t) => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!Ec.current) {
        const t = new W3({});
        t.mount(window), t.setOptions({
          layoutScroll: true
        }), Ec.current = t;
      }
      return Ec.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
  }), lw = b.createContext({
    transformPagePoint: (t) => t,
    isStatic: false,
    reducedMotion: "never"
  });
  function t4(t = true) {
    const e = b.useContext(Bh);
    if (e === null) return [
      true,
      null
    ];
    const { isPresent: n, onExitComplete: i, register: a } = e, s = b.useId();
    b.useEffect(() => {
      if (t) return a(s);
    }, [
      t
    ]);
    const r = b.useCallback(() => t && i && i(s), [
      s,
      i,
      t
    ]);
    return !n && i ? [
      false,
      r
    ] : [
      true
    ];
  }
  const uw = b.createContext({
    strict: false
  }), Hy = {
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
  let ky = false;
  function e4() {
    if (ky) return;
    const t = {};
    for (const e in Hy) t[e] = {
      isEnabled: (n) => Hy[e].some((i) => !!n[i])
    };
    US(t), ky = true;
  }
  function cw() {
    return e4(), Q5();
  }
  function n4(t) {
    const e = cw();
    for (const n in t) e[n] = {
      ...e[n],
      ...t[n]
    };
    US(e);
  }
  const i4 = /* @__PURE__ */ new Set([
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
  function Bl(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || i4.has(t);
  }
  let fw = (t) => !Bl(t);
  function a4(t) {
    typeof t == "function" && (fw = (e) => e.startsWith("on") ? !Bl(e) : t(e));
  }
  try {
    a4(require("@emotion/is-prop-valid").default);
  } catch {
  }
  function s4(t, e, n) {
    const i = {};
    for (const a in t) a === "values" && typeof t.values == "object" || (fw(a) || n === true && Bl(a) || !e && !Bl(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i;
  }
  const yu = b.createContext({});
  function r4(t, e) {
    if (gu(t)) {
      const { initial: n, animate: i } = t;
      return {
        initial: n === false || Cr(n) ? n : void 0,
        animate: Cr(i) ? i : void 0
      };
    }
    return t.inherit !== false ? e : {};
  }
  function o4(t) {
    const { initial: e, animate: n } = r4(t, b.useContext(yu));
    return b.useMemo(() => ({
      initial: e,
      animate: n
    }), [
      Yy(e),
      Yy(n)
    ]);
  }
  function Yy(t) {
    return Array.isArray(t) ? t.join(" ") : t;
  }
  const cm = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function dw(t, e, n) {
    for (const i in e) !Xt(e[i]) && !XS(i, n) && (t[i] = e[i]);
  }
  function l4({ transformTemplate: t }, e) {
    return b.useMemo(() => {
      const n = cm();
      return lm(n, e, t), Object.assign({}, n.vars, n.style);
    }, [
      e
    ]);
  }
  function u4(t, e) {
    const n = t.style || {}, i = {};
    return dw(i, n, t), Object.assign(i, l4(t, e)), i;
  }
  function c4(t, e) {
    const n = {}, i = u4(t, e);
    return t.drag && t.dragListener !== false && (n.draggable = false, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
  }
  const hw = () => ({
    ...cm(),
    attrs: {}
  });
  function f4(t, e, n, i) {
    const a = b.useMemo(() => {
      const s = hw();
      return QS(s, e, KS(i), t.transformTemplate, t.style), {
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
      dw(s, t.style, t), a.style = {
        ...s,
        ...a.style
      };
    }
    return a;
  }
  const d4 = [
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
  function fm(t) {
    return typeof t != "string" || t.includes("-") ? false : !!(d4.indexOf(t) > -1 || /[A-Z]/u.test(t));
  }
  function h4(t, e, n, { latestValues: i }, a, s = false, r) {
    const l = (r ?? fm(t) ? f4 : c4)(e, i, a, t), u = s4(e, typeof t == "string", s), c = t !== b.Fragment ? {
      ...u,
      ...l,
      ref: n
    } : {}, { children: f } = e, h = b.useMemo(() => Xt(f) ? f.get() : f, [
      f
    ]);
    return b.createElement(t, {
      ...c,
      children: h
    });
  }
  function m4({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, a) {
    return {
      latestValues: p4(n, i, a, t),
      renderState: e()
    };
  }
  function p4(t, e, n, i) {
    const a = {}, s = i(t, {});
    for (const h in s) a[h] = Xo(s[h]);
    let { initial: r, animate: o } = t;
    const l = gu(t), u = VS(t);
    e && u && !l && t.inherit !== false && (r === void 0 && (r = e.initial), o === void 0 && (o = e.animate));
    let c = n ? n.initial === false : false;
    c = c || r === false;
    const f = c ? o : r;
    if (f && typeof f != "boolean" && !pu(f)) {
      const h = Array.isArray(f) ? f : [
        f
      ];
      for (let d = 0; d < h.length; d++) {
        const v = tm(t, h[d]);
        if (v) {
          const { transitionEnd: y, transition: x, ...p } = v;
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
  const mw = (t) => (e, n) => {
    const i = b.useContext(yu), a = b.useContext(Bh), s = () => m4(t, e, i, a);
    return n ? s() : yD(s);
  }, g4 = mw({
    scrapeMotionValuesFromProps: um,
    createRenderState: cm
  }), y4 = mw({
    scrapeMotionValuesFromProps: ZS,
    createRenderState: hw
  }), v4 = Symbol.for("motionComponentSymbol");
  function b4(t, e, n) {
    const i = b.useRef(n);
    b.useInsertionEffect(() => {
      i.current = n;
    });
    const a = b.useRef(null);
    return b.useCallback((s) => {
      var _a5;
      s && ((_a5 = t.onMount) == null ? void 0 : _a5.call(t, s)), e && (s ? e.mount(s) : e.unmount());
      const r = i.current;
      if (typeof r == "function") if (s) {
        const o = r(s);
        typeof o == "function" && (a.current = o);
      } else a.current ? (a.current(), a.current = null) : r(s);
      else r && (r.current = s);
    }, [
      e
    ]);
  }
  const pw = b.createContext({});
  function ma(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
  }
  function x4(t, e, n, i, a, s) {
    var _a5, _b3;
    const { visualElement: r } = b.useContext(yu), o = b.useContext(uw), l = b.useContext(Bh), u = b.useContext(lw), c = u.reducedMotion, f = u.skipAnimations, h = b.useRef(null), d = b.useRef(false);
    i = i || o.renderer, !h.current && i && (h.current = i(t, {
      visualState: e,
      parent: r,
      props: n,
      presenceContext: l,
      blockInitialAnimation: l ? l.initial === false : false,
      reducedMotionConfig: c,
      skipAnimations: f,
      isSVG: s
    }), d.current && h.current && (h.current.manuallyAnimateOnMount = true));
    const v = h.current, y = b.useContext(pw);
    v && !v.projection && a && (v.type === "html" || v.type === "svg") && S4(h.current, n, a, y);
    const x = b.useRef(false);
    b.useInsertionEffect(() => {
      v && x.current && v.update(n, l);
    });
    const p = n[TS], m = b.useRef(!!p && !((_a5 = window.MotionHandoffIsComplete) == null ? void 0 : _a5.call(window, p)) && ((_b3 = window.MotionHasOptimisedAnimation) == null ? void 0 : _b3.call(window, p)));
    return vD(() => {
      d.current = true, v && (x.current = true, window.MotionIsMounted = true, v.updateFeatures(), v.scheduleRenderMicrotask(), m.current && v.animationState && v.animationState.animateChanges());
    }), b.useEffect(() => {
      v && (!m.current && v.animationState && v.animationState.animateChanges(), m.current && (queueMicrotask(() => {
        var _a6;
        (_a6 = window.MotionHandoffMarkAsComplete) == null ? void 0 : _a6.call(window, p);
      }), m.current = false), v.enteringChildren = void 0);
    }), v;
  }
  function S4(t, e, n, i) {
    const { layoutId: a, layout: s, drag: r, dragConstraints: o, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : gw(t.parent)), t.projection.setOptions({
      layoutId: a,
      layout: s,
      alwaysMeasureLayout: !!r || o && ma(o),
      visualElement: t,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: i,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u
    });
  }
  function gw(t) {
    if (t) return t.options.allowProjection !== false ? t.projection : gw(t.parent);
  }
  function Ac(t, { forwardMotionProps: e = false, type: n } = {}, i, a) {
    i && n4(i);
    const s = n ? n === "svg" : fm(t), r = s ? y4 : g4;
    function o(u, c) {
      let f;
      const h = {
        ...b.useContext(lw),
        ...u,
        layoutId: w4(u)
      }, { isStatic: d } = h, v = o4(u), y = r(u, d);
      if (!d && Ux) {
        T4();
        const x = E4(h);
        f = x.MeasureLayout, v.visualElement = x4(t, y, h, a, x.ProjectionNode, s);
      }
      return w.jsxs(yu.Provider, {
        value: v,
        children: [
          f && v.visualElement ? w.jsx(f, {
            visualElement: v.visualElement,
            ...h
          }) : null,
          h4(t, u, b4(y, v.visualElement, c), y, d, e, s)
        ]
      });
    }
    o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
    const l = b.forwardRef(o);
    return l[v4] = t, l;
  }
  function w4({ layoutId: t }) {
    const e = b.useContext(Bx).id;
    return e && t !== void 0 ? e + "-" + t : t;
  }
  function T4(t, e) {
    b.useContext(uw).strict;
  }
  function E4(t) {
    const e = cw(), { drag: n, layout: i } = e;
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
  function A4(t, e) {
    if (typeof Proxy > "u") return Ac;
    const n = /* @__PURE__ */ new Map(), i = (s, r) => Ac(s, r, t, e), a = (s, r) => i(s, r);
    return new Proxy(a, {
      get: (s, r) => r === "create" ? i : (n.has(r) || n.set(r, Ac(r, void 0, t, e)), n.get(r))
    });
  }
  const C4 = (t, e) => e.isSVG ?? fm(t) ? new u3(e) : new i3(e, {
    allowProjection: t !== b.Fragment
  });
  class M4 extends Ti {
    constructor(e) {
      super(e), e.animationState || (e.animationState = m3(e));
    }
    updateAnimationControlsSubscription() {
      const { animate: e } = this.node.getProps();
      pu(e) && (this.unmountControls = e.subscribe(this.node));
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
  let R4 = 0;
  class O4 extends Ti {
    constructor() {
      super(...arguments), this.id = R4++;
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
  const D4 = {
    animation: {
      Feature: M4
    },
    exit: {
      Feature: O4
    }
  };
  function Qr(t) {
    return {
      point: {
        x: t.pageX,
        y: t.pageY
      }
    };
  }
  const N4 = (t) => (e) => am(e) && t(e, Qr(e));
  function nr(t, e, n, i) {
    return Mr(t, e, N4(n), i);
  }
  const yw = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Gy = (t, e) => Math.abs(t - e);
  function j4(t, e) {
    const n = Gy(t.x, e.x), i = Gy(t.y, e.y);
    return Math.sqrt(n ** 2 + i ** 2);
  }
  const qy = /* @__PURE__ */ new Set([
    "auto",
    "scroll"
  ]);
  class vw {
    constructor(e, n, { transformPagePoint: i, contextWindow: a = window, dragSnapToOrigin: s = false, distanceThreshold: r = 3, element: o } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (d) => {
        this.handleScroll(d.target);
      }, this.onWindowScroll = () => {
        this.handleScroll(window);
      }, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Mc(this.lastMoveEventInfo, this.history), v = this.startEvent !== null, y = j4(d.offset, {
          x: 0,
          y: 0
        }) >= this.distanceThreshold;
        if (!v && !y) return;
        const { point: x } = d, { timestamp: p } = Pt;
        this.history.push({
          ...x,
          timestamp: p
        });
        const { onStart: m, onMove: g } = this.handlers;
        v || (m && m(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, d);
      }, this.handlePointerMove = (d, v) => {
        this.lastMoveEvent = d, this.lastMoveEventInfo = Cc(v, this.transformPagePoint), ct.update(this.updatePoint, true);
      }, this.handlePointerUp = (d, v) => {
        this.end();
        const { onEnd: y, onSessionEnd: x, resumeAnimation: p } = this.handlers;
        if ((this.dragSnapToOrigin || !this.startEvent) && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const m = Mc(d.type === "pointercancel" ? this.lastMoveEventInfo : Cc(v, this.transformPagePoint), this.history);
        this.startEvent && y && y(d, m), x && x(d, m);
      }, !am(e)) return;
      this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = a || window;
      const l = Qr(e), u = Cc(l, this.transformPagePoint), { point: c } = u, { timestamp: f } = Pt;
      this.history = [
        {
          ...c,
          timestamp: f
        }
      ];
      const { onSessionStart: h } = n;
      h && h(e, Mc(u, this.history)), this.removeListeners = Gr(nr(this.contextWindow, "pointermove", this.handlePointerMove), nr(this.contextWindow, "pointerup", this.handlePointerUp), nr(this.contextWindow, "pointercancel", this.handlePointerUp)), o && this.startScrollTracking(o);
    }
    startScrollTracking(e) {
      let n = e.parentElement;
      for (; n; ) {
        const i = getComputedStyle(n);
        (qy.has(i.overflowX) || qy.has(i.overflowY)) && this.scrollPositions.set(n, {
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
      this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), gi(this.updatePoint);
    }
  }
  function Cc(t, e) {
    return e ? {
      point: e(t.point)
    } : t;
  }
  function Xy(t, e) {
    return {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  function Mc({ point: t }, e) {
    return {
      point: t,
      delta: Xy(t, bw(e)),
      offset: Xy(t, z4(e)),
      velocity: _4(e, 0.1)
    };
  }
  function z4(t) {
    return t[0];
  }
  function bw(t) {
    return t[t.length - 1];
  }
  function _4(t, e) {
    if (t.length < 2) return {
      x: 0,
      y: 0
    };
    let n = t.length - 1, i = null;
    const a = bw(t);
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
    const r = {
      x: (a.x - i.x) / s,
      y: (a.y - i.y) / s
    };
    return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
  }
  function L4(t, { min: e, max: n }, i) {
    return e !== void 0 && t < e ? t = i ? xt(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? xt(n, t, i.max) : Math.min(t, n)), t;
  }
  function Qy(t, e, n) {
    return {
      min: e !== void 0 ? t.min + e : void 0,
      max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    };
  }
  function V4(t, { top: e, left: n, bottom: i, right: a }) {
    return {
      x: Qy(t.x, n, a),
      y: Qy(t.y, e, i)
    };
  }
  function Fy(t, e) {
    let n = e.min - t.min, i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, i] = [
      i,
      n
    ]), {
      min: n,
      max: i
    };
  }
  function B4(t, e) {
    return {
      x: Fy(t.x, e.x),
      y: Fy(t.y, e.y)
    };
  }
  function U4(t, e) {
    let n = 0.5;
    const i = $t(t), a = $t(e);
    return a > i ? n = Tr(e.min, e.max - i, t.min) : i > a && (n = Tr(t.min, t.max - a, e.min)), nn(0, 1, n);
  }
  function P4(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
  }
  const cd = 0.35;
  function H4(t = cd) {
    return t === false ? t = 0 : t === true && (t = cd), {
      x: Ky(t, "left", "right"),
      y: Ky(t, "top", "bottom")
    };
  }
  function Ky(t, e, n) {
    return {
      min: Zy(t, e),
      max: Zy(t, n)
    };
  }
  function Zy(t, e) {
    return typeof t == "number" ? t : t[e] || 0;
  }
  const k4 = /* @__PURE__ */ new WeakMap();
  class Y4 {
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
        n && this.snapToCursor(Qr(f).point), this.stopAnimation();
      }, r = (f, h) => {
        const { drag: d, dragPropagation: v, onDragStart: y } = this.getProps();
        if (d && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = w5(d), !this.openDragLock)) return;
        this.latestPointerEvent = f, this.latestPanInfo = h, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), Fe((p) => {
          let m = this.getAxisMotionValue(p).get() || 0;
          if (tn.test(m)) {
            const { projection: g } = this.visualElement;
            if (g && g.layout) {
              const S = g.layout.layoutBox[p];
              S && (m = $t(S) * (parseFloat(m) / 100));
            }
          }
          this.originPoint[p] = m;
        }), y && ct.update(() => y(f, h), false, true), id(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", true);
      }, o = (f, h) => {
        this.latestPointerEvent = f, this.latestPanInfo = h;
        const { dragPropagation: d, dragDirectionLock: v, onDirectionLock: y, onDrag: x } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: p } = h;
        if (v && this.currentDirection === null) {
          this.currentDirection = q4(p), this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", h.point, p), this.updateAxis("y", h.point, p), this.visualElement.render(), x && ct.update(() => x(f, h), false, true);
      }, l = (f, h) => {
        this.latestPointerEvent = f, this.latestPanInfo = h, this.stop(f, h), this.latestPointerEvent = null, this.latestPanInfo = null;
      }, u = () => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f || this.constraints) && this.startAnimation({
          x: 0,
          y: 0
        });
      }, { dragSnapToOrigin: c } = this.getProps();
      this.panSession = new vw(e, {
        onSessionStart: s,
        onStart: r,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: u
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: i,
        contextWindow: yw(this.visualElement),
        element: this.visualElement.current
      });
    }
    stop(e, n) {
      const i = e || this.latestPointerEvent, a = n || this.latestPanInfo, s = this.isDragging;
      if (this.cancel(), !s || !a || !i) return;
      const { velocity: r } = a;
      this.startAnimation(r);
      const { onDragEnd: o } = this.getProps();
      o && ct.postRender(() => o(i, a));
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
      if (!i || !bo(e, a, this.currentDirection)) return;
      const s = this.getAxisMotionValue(e);
      let r = this.originPoint[e] + i[e];
      this.constraints && this.constraints[e] && (r = L4(r, this.constraints[e], this.elastic[e])), s.set(r);
    }
    resolveConstraints() {
      var _a5;
      const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a5 = this.visualElement.projection) == null ? void 0 : _a5.layout, a = this.constraints;
      e && ma(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = V4(i.layoutBox, e) : this.constraints = false, this.elastic = H4(n), a !== this.constraints && !ma(e) && i && this.constraints && !this.hasMutatedConstraints && Fe((s) => {
        this.constraints !== false && this.getAxisMotionValue(s) && (this.constraints[s] = P4(i.layoutBox[s], this.constraints[s]));
      });
    }
    resolveRefConstraints() {
      const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
      if (!e || !ma(e)) return false;
      const i = e.current;
      es(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
      const { projection: a } = this.visualElement;
      if (!a || !a.layout) return false;
      const s = I5(i, a.root, this.visualElement.getTransformPagePoint());
      let r = B4(a.layout.layoutBox, s);
      if (n) {
        const o = n(K5(r));
        this.hasMutatedConstraints = !!o, o && (r = HS(o));
      }
      return r;
    }
    startAnimation(e) {
      const { drag: n, dragMomentum: i, dragElastic: a, dragTransition: s, dragSnapToOrigin: r, onDragTransitionEnd: o } = this.getProps(), l = this.constraints || {}, u = Fe((c) => {
        if (!bo(c, n, this.currentDirection)) return;
        let f = l && l[c] || {};
        r && (f = {
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
      return Promise.all(u).then(o);
    }
    startAxisValueAnimation(e, n) {
      const i = this.getAxisMotionValue(e);
      return id(this.visualElement, e), i.start(Wh(e, i, 0, n, this.visualElement, false));
    }
    stopAnimation() {
      Fe((e) => this.getAxisMotionValue(e).stop());
    }
    getAxisMotionValue(e) {
      const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps(), a = i[n];
      return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
    }
    snapToCursor(e) {
      Fe((n) => {
        const { drag: i } = this.getProps();
        if (!bo(n, i, this.currentDirection)) return;
        const { projection: a } = this.visualElement, s = this.getAxisMotionValue(n);
        if (a && a.layout) {
          const { min: r, max: o } = a.layout.layoutBox[n], l = s.get() || 0;
          s.set(e[n] - xt(r, o, 0.5) + l);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
      if (!ma(n) || !i || !this.constraints) return;
      this.stopAnimation();
      const a = {
        x: 0,
        y: 0
      };
      Fe((r) => {
        const o = this.getAxisMotionValue(r);
        if (o && this.constraints !== false) {
          const l = o.get();
          a[r] = U4({
            min: l,
            max: l
          }, this.constraints[r]);
        }
      });
      const { transformTemplate: s } = this.visualElement.getProps();
      this.visualElement.current.style.transform = s ? s({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = false, this.resolveConstraints(), Fe((r) => {
        if (!bo(r, e, null)) return;
        const o = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
        o.set(xt(l, u, a[r]));
      }), this.visualElement.render();
    }
    addListeners() {
      if (!this.visualElement.current) return;
      k4.set(this.visualElement, this);
      const e = this.visualElement.current, n = nr(e, "pointerdown", (u) => {
        const { drag: c, dragListener: f = true } = this.getProps(), h = u.target, d = h !== e && R5(h);
        c && f && !d && this.start(u);
      });
      let i;
      const a = () => {
        const { dragConstraints: u } = this.getProps();
        ma(u) && u.current && (this.constraints = this.resolveRefConstraints(), i || (i = G4(e, u.current, () => this.scalePositionWithinConstraints())));
      }, { projection: s } = this.visualElement, r = s.addEventListener("measure", a);
      s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), ct.read(a);
      const o = Mr(window, "resize", () => this.scalePositionWithinConstraints()), l = s.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: c }) => {
        this.isDragging && c && (Fe((f) => {
          const h = this.getAxisMotionValue(f);
          h && (this.originPoint[f] += u[f].translate, h.set(h.get() + u[f].translate));
        }), this.visualElement.render());
      });
      return () => {
        o(), n(), r(), l && l(), i && i();
      };
    }
    getProps() {
      const e = this.visualElement.getProps(), { drag: n = false, dragDirectionLock: i = false, dragPropagation: a = false, dragConstraints: s = false, dragElastic: r = cd, dragMomentum: o = true } = e;
      return {
        ...e,
        drag: n,
        dragDirectionLock: i,
        dragPropagation: a,
        dragConstraints: s,
        dragElastic: r,
        dragMomentum: o
      };
    }
  }
  function $y(t) {
    let e = true;
    return () => {
      if (e) {
        e = false;
        return;
      }
      t();
    };
  }
  function G4(t, e, n) {
    const i = sy(t, $y(n)), a = sy(e, $y(n));
    return () => {
      i(), a();
    };
  }
  function bo(t, e, n) {
    return (e === true || e === t) && (n === null || n === t);
  }
  function q4(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
  }
  class X4 extends Ti {
    constructor(e) {
      super(e), this.removeGroupControls = De, this.removeListeners = De, this.controls = new Y4(e);
    }
    mount() {
      const { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || De;
    }
    update() {
      const { dragControls: e } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
      e !== n && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
    }
  }
  const Rc = (t) => (e, n) => {
    t && ct.update(() => t(e, n), false, true);
  };
  class Q4 extends Ti {
    constructor() {
      super(...arguments), this.removePointerDownListener = De;
    }
    onPointerDown(e) {
      this.session = new vw(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: yw(this.node)
      });
    }
    createPanHandlers() {
      const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: a } = this.node.getProps();
      return {
        onSessionStart: Rc(e),
        onStart: Rc(n),
        onMove: Rc(i),
        onEnd: (s, r) => {
          delete this.session, a && ct.postRender(() => a(s, r));
        }
      };
    }
    mount() {
      this.removePointerDownListener = nr(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  let Oc = false;
  class F4 extends b.Component {
    componentDidMount() {
      const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: a } = this.props, { projection: s } = e;
      s && (n.group && n.group.add(s), i && i.register && a && i.register(s), Oc && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), s.setOptions({
        ...s.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      })), Qo.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(e) {
      const { layoutDependency: n, visualElement: i, drag: a, isPresent: s } = this.props, { projection: r } = i;
      return r && (r.isPresent = s, e.layoutDependency !== n && r.setOptions({
        ...r.options,
        layoutDependency: n
      }), Oc = true, a || e.layoutDependency !== n || n === void 0 || e.isPresent !== s ? r.willUpdate() : this.safeToRemove(), e.isPresent !== s && (s ? r.promote() : r.relegate() || ct.postRender(() => {
        const o = r.getStack();
        (!o || !o.members.length) && this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      const { projection: e } = this.props.visualElement;
      e && (e.root.didUpdate(), im.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: a } = e;
      Oc = true, a && (a.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(a), i && i.deregister && i.deregister(a));
    }
    safeToRemove() {
      const { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  }
  function xw(t) {
    const [e, n] = t4(), i = b.useContext(Bx);
    return w.jsx(F4, {
      ...t,
      layoutGroup: i,
      switchLayoutGroup: b.useContext(pw),
      isPresent: e,
      safeToRemove: n
    });
  }
  const K4 = {
    pan: {
      Feature: Q4
    },
    drag: {
      Feature: X4,
      ProjectionNode: ow,
      MeasureLayout: xw
    }
  };
  function Iy(t, e, n) {
    const { props: i } = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const a = "onHover" + n, s = i[a];
    s && ct.postRender(() => s(e, Qr(e)));
  }
  class Z4 extends Ti {
    mount() {
      const { current: e } = this.node;
      e && (this.unmount = E5(e, (n, i) => (Iy(this.node, i, "Start"), (a) => Iy(this.node, a, "End"))));
    }
    unmount() {
    }
  }
  class $4 extends Ti {
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
      this.unmount = Gr(Mr(this.node.current, "focus", () => this.onFocus()), Mr(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  }
  function Jy(t, e, n) {
    const { props: i } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const a = "onTap" + (n === "End" ? "" : n), s = i[a];
    s && ct.postRender(() => s(e, Qr(e)));
  }
  class I4 extends Ti {
    mount() {
      const { current: e } = this.node;
      if (!e) return;
      const { globalTapTarget: n, propagate: i } = this.node.props;
      this.unmount = D5(e, (a, s) => (Jy(this.node, s, "Start"), (r, { success: o }) => Jy(this.node, r, o ? "End" : "Cancel")), {
        useGlobalTarget: n,
        stopPropagation: (i == null ? void 0 : i.tap) === false
      });
    }
    unmount() {
    }
  }
  const fd = /* @__PURE__ */ new WeakMap(), Dc = /* @__PURE__ */ new WeakMap(), J4 = (t) => {
    const e = fd.get(t.target);
    e && e(t);
  }, W4 = (t) => {
    t.forEach(J4);
  };
  function tj({ root: t, ...e }) {
    const n = t || document;
    Dc.has(n) || Dc.set(n, {});
    const i = Dc.get(n), a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(W4, {
      root: t,
      ...e
    })), i[a];
  }
  function ej(t, e, n) {
    const i = tj(e);
    return fd.set(t, n), i.observe(t), () => {
      fd.delete(t), i.unobserve(t);
    };
  }
  const nj = {
    some: 0,
    all: 1
  };
  class ij extends Ti {
    constructor() {
      super(...arguments), this.hasEnteredView = false, this.isInView = false;
    }
    startObserver() {
      this.unmount();
      const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: a = "some", once: s } = e, r = {
        root: n ? n.current : void 0,
        rootMargin: i,
        threshold: typeof a == "number" ? a : nj[a]
      }, o = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView)) return;
        u && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), h = u ? c : f;
        h && h(l);
      };
      return ej(this.node.current, r, o);
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
      ].some(aj(e, n)) && this.startObserver();
    }
    unmount() {
    }
  }
  function aj({ viewport: t = {} }, { viewport: e = {} } = {}) {
    return (n) => t[n] !== e[n];
  }
  const sj = {
    inView: {
      Feature: ij
    },
    tap: {
      Feature: I4
    },
    focus: {
      Feature: $4
    },
    hover: {
      Feature: Z4
    }
  }, rj = {
    layout: {
      ProjectionNode: ow,
      MeasureLayout: xw
    }
  }, oj = {
    ...D4,
    ...sj,
    ...K4,
    ...rj
  }, xo = A4(oj, C4), lj = _1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
  }), Qe = b.forwardRef(({ className: t, variant: e, size: n, asChild: i = false, ...a }, s) => {
    const r = i ? PA : "button";
    return w.jsx(r, {
      className: xi(lj({
        variant: e,
        size: n,
        className: t
      })),
      ref: s,
      ...a
    });
  });
  Qe.displayName = "Button";
  const uj = "/amritaraj-nair-portfolio", Wy = `${uj}/Amritaraj_Nair_Resume.pdf`, So = "https://amritnair.github.io/amritaraj-nair-portfolio/#/resume", cj = () => {
    const t = Vh(), { toast: e } = s1(), [n, i] = b.useState(false), [a, s] = b.useState(false), r = () => {
      const f = document.createElement("a");
      f.href = Wy, f.download = "Amritaraj_Nair_Resume.pdf", document.body.appendChild(f), f.click(), document.body.removeChild(f);
    }, o = async () => {
      try {
        await navigator.clipboard.writeText(So), i(true), e({
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
${So}

Best regards`);
      window.open(`mailto:?subject=${f}&body=${h}`, "_blank");
    }, u = () => {
      const f = encodeURIComponent(So);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${f}`, "_blank");
    }, c = async () => {
      if (navigator.share) try {
        await navigator.share({
          title: "Amritaraj Nair \u2014 Resume",
          text: "Check out Amritaraj Nair's resume",
          url: So
        });
      } catch {
      }
      else s(!a);
    };
    return w.jsxs("div", {
      className: "min-h-screen bg-background relative",
      children: [
        w.jsx(xo.div, {
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
              w.jsxs(Qe, {
                variant: "ghost",
                size: "sm",
                onClick: () => t("/"),
                className: "gap-2 text-muted-foreground hover:text-foreground",
                children: [
                  w.jsx(_C, {
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
                  w.jsxs(Qe, {
                    size: "sm",
                    onClick: () => t("/"),
                    className: "gap-2 bg-gradient-to-r from-[#5b4bff] to-[#c341ff] text-white hover:opacity-90",
                    children: [
                      w.jsx(VC, {
                        className: "h-4 w-4"
                      }),
                      "Play the world"
                    ]
                  }),
                  w.jsxs("div", {
                    className: "relative",
                    children: [
                      w.jsxs(Qe, {
                        variant: "outline",
                        size: "sm",
                        onClick: c,
                        className: "gap-2 border-border hover:border-primary/50 hover:bg-primary/5",
                        children: [
                          w.jsx(UC, {
                            className: "h-4 w-4"
                          }),
                          "Share"
                        ]
                      }),
                      a && w.jsxs(xo.div, {
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
                            onClick: o,
                            className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors",
                            children: [
                              n ? w.jsx(eg, {
                                className: "h-4 w-4 text-green-400"
                              }) : w.jsx(LC, {
                                className: "h-4 w-4 text-muted-foreground"
                              }),
                              n ? "Copied!" : "Copy link"
                            ]
                          }),
                          w.jsxs("button", {
                            onClick: l,
                            className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors",
                            children: [
                              w.jsx(ig, {
                                className: "h-4 w-4 text-muted-foreground"
                              }),
                              "Send via email"
                            ]
                          }),
                          w.jsxs("button", {
                            onClick: u,
                            className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors",
                            children: [
                              w.jsx(ng, {
                                className: "h-4 w-4 text-muted-foreground"
                              }),
                              "Share on LinkedIn"
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  w.jsxs(Qe, {
                    size: "sm",
                    onClick: r,
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
          children: w.jsxs(xo.div, {
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
                  data: Wy,
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
                      w.jsxs(Qe, {
                        onClick: r,
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
              w.jsxs(xo.div, {
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
                  w.jsxs(Qe, {
                    variant: "outline",
                    size: "lg",
                    onClick: r,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      w.jsx(oc, {
                        className: "h-4 w-4"
                      }),
                      "Download Resume"
                    ]
                  }),
                  w.jsxs(Qe, {
                    variant: "outline",
                    size: "lg",
                    onClick: o,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      n ? w.jsx(eg, {
                        className: "h-4 w-4"
                      }) : w.jsx(BC, {
                        className: "h-4 w-4"
                      }),
                      n ? "Link Copied!" : "Copy Share Link"
                    ]
                  }),
                  w.jsxs(Qe, {
                    variant: "outline",
                    size: "lg",
                    onClick: l,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      w.jsx(ig, {
                        className: "h-4 w-4"
                      }),
                      "Email Resume"
                    ]
                  }),
                  w.jsxs(Qe, {
                    variant: "outline",
                    size: "lg",
                    onClick: u,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      w.jsx(ng, {
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
  }, fj = () => {
    const t = ps();
    return b.useEffect(() => {
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
  }, dj = b.lazy(() => jA(() => import("./GamePortfolio-Dor-RvJc.js").then(async (m) => {
    await m.__tla;
    return m;
  }).then((t) => t.b4), [])), hj = new lO(), mj = () => w.jsx("div", {
    className: "flex h-[100dvh] items-center justify-center bg-[#160f34] font-mono text-xs uppercase tracking-[0.3em] text-[#9d8bff]",
    children: "Loading world\u2026"
  }), pj = () => w.jsx(dD, {
    children: w.jsx(cO, {
      client: hj,
      children: w.jsxs(UR, {
        children: [
          w.jsx(S2, {}),
          w.jsx(W2, {}),
          w.jsx(oD, {
            children: w.jsxs(tD, {
              children: [
                w.jsx(ha, {
                  path: "/",
                  element: w.jsx(gD, {})
                }),
                w.jsx(ha, {
                  path: "/play",
                  element: w.jsx(b.Suspense, {
                    fallback: w.jsx(mj, {}),
                    children: w.jsx(dj, {})
                  })
                }),
                w.jsx(ha, {
                  path: "/projects",
                  element: w.jsx(JO, {
                    to: "/",
                    replace: true
                  })
                }),
                w.jsx(ha, {
                  path: "/resume",
                  element: w.jsx(cj, {})
                }),
                w.jsx(ha, {
                  path: "*",
                  element: w.jsx(fj, {})
                })
              ]
            })
          })
        ]
      })
    })
  });
  OA.createRoot(document.getElementById("root")).render(w.jsx(pj, {}));
})();
export {
  cD as L,
  ua as P,
  gj as T,
  _g as U,
  Gf as Z,
  jA as _,
  __tla,
  wj as a,
  _ as e,
  dd as g,
  w as j,
  b as r,
  sv as s
};
