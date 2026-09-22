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
let Is, Ze, z4, zg, wr, BA, U4, _, md, x, b, a0;
let __tla = (async () => {
  var _t2, _e, _n, _a2, _t3, _e2, _n2, _b2, _t4, _c2, _t5, _e3, _n3, _a3, _i2, _r2, _o2, _sO_instances, s_fn, _d2, _t6, _e4, _t7, _e5, _n4, _uO_instances, a_fn, _f2, _t8, _e6, _n5, _g2, _t9, _e7, _n6, _a4, _i3, _r3, _o3, _s2, _h2;
  function Uw(t, e) {
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
  md = function(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  };
  var Wy = {
    exports: {}
  }, Hl = {};
  var Pw = Symbol.for("react.transitional.element"), Hw = Symbol.for("react.fragment");
  function t0(t, e, n) {
    var i = null;
    if (n !== void 0 && (i = "" + n), e.key !== void 0 && (i = "" + e.key), "key" in e) {
      n = {};
      for (var a in e) a !== "key" && (n[a] = e[a]);
    } else n = e;
    return e = n.ref, {
      $$typeof: Pw,
      type: t,
      key: i,
      ref: e !== void 0 ? e : null,
      props: n
    };
  }
  Hl.Fragment = Hw;
  Hl.jsx = t0;
  Hl.jsxs = t0;
  Wy.exports = Hl;
  let e0, Gl, n0, i0;
  x = Wy.exports;
  e0 = {
    exports: {}
  };
  Gl = {};
  n0 = {
    exports: {}
  };
  i0 = {};
  (function(t) {
    function e(R, D) {
      var O = R.length;
      R.push(D);
      t: for (; 0 < O; ) {
        var N = O - 1 >>> 1, k = R[N];
        if (0 < a(k, D)) R[N] = D, R[O] = k, O = N;
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
        t: for (var N = 0, k = R.length, ft = k >>> 1; N < ft; ) {
          var F = 2 * (N + 1) - 1, Z = R[F], $ = F + 1, Tt = R[$];
          if (0 > a(Z, O)) $ < k && 0 > a(Tt, Z) ? (R[N] = Tt, R[$] = O, N = $) : (R[N] = Z, R[F] = O, N = F);
          else if ($ < k && 0 > a(Tt, O)) R[N] = Tt, R[$] = O, N = $;
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
    var l = [], u = [], c = 1, f = null, h = 3, d = false, y = false, v = false, S = false, p = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
    function w(R) {
      for (var D = n(u); D !== null; ) {
        if (D.callback === null) i(u);
        else if (D.startTime <= R) i(u), D.sortIndex = D.expirationTime, e(l, D);
        else break;
        D = n(u);
      }
    }
    function T(R) {
      if (v = false, w(R), !y) if (n(l) !== null) y = true, A || (A = true, V());
      else {
        var D = n(u);
        D !== null && X(T, D.startTime - R);
      }
    }
    var A = false, E = -1, C = 5, j = -1;
    function z() {
      return S ? true : !(t.unstable_now() - j < C);
    }
    function U() {
      if (S = false, A) {
        var R = t.unstable_now();
        j = R;
        var D = true;
        try {
          t: {
            y = false, v && (v = false, m(E), E = -1), d = true;
            var O = h;
            try {
              e: {
                for (w(R), f = n(l); f !== null && !(f.expirationTime > R && z()); ) {
                  var N = f.callback;
                  if (typeof N == "function") {
                    f.callback = null, h = f.priorityLevel;
                    var k = N(f.expirationTime <= R);
                    if (R = t.unstable_now(), typeof k == "function") {
                      f.callback = k, w(R), D = true;
                      break e;
                    }
                    f === n(l) && i(l), w(R);
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
      g(U);
    };
    else if (typeof MessageChannel < "u") {
      var J = new MessageChannel(), L = J.port2;
      J.port1.onmessage = U, V = function() {
        L.postMessage(null);
      };
    } else V = function() {
      p(U, 0);
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
      S = true;
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
          var k = -1;
          break;
        case 2:
          k = 250;
          break;
        case 5:
          k = 1073741823;
          break;
        case 4:
          k = 1e4;
          break;
        default:
          k = 5e3;
      }
      return k = O + k, R = {
        id: c++,
        callback: D,
        priorityLevel: R,
        startTime: O,
        expirationTime: k,
        sortIndex: -1
      }, O > N ? (R.sortIndex = O, e(u, R), n(l) === null && R === n(u) && (v ? (m(E), E = -1) : v = true, X(T, O - N))) : (R.sortIndex = k, e(l, R), y || d || (y = true, A || (A = true, V()))), R;
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
  })(i0);
  n0.exports = i0;
  a0 = n0.exports;
  z4 = md(a0);
  var s0 = {
    exports: {}
  }, G = {};
  var pd = Symbol.for("react.transitional.element"), Gw = Symbol.for("react.portal"), Yw = Symbol.for("react.fragment"), qw = Symbol.for("react.strict_mode"), Xw = Symbol.for("react.profiler"), Fw = Symbol.for("react.consumer"), Qw = Symbol.for("react.context"), Kw = Symbol.for("react.forward_ref"), Zw = Symbol.for("react.suspense"), $w = Symbol.for("react.memo"), r0 = Symbol.for("react.lazy"), Iw = Symbol.for("react.activity"), vm = Symbol.iterator;
  function Jw(t) {
    return t === null || typeof t != "object" ? null : (t = vm && t[vm] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var o0 = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, l0 = Object.assign, u0 = {};
  function as(t, e, n) {
    this.props = t, this.context = e, this.refs = u0, this.updater = n || o0;
  }
  as.prototype.isReactComponent = {};
  as.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState");
  };
  as.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function c0() {
  }
  c0.prototype = as.prototype;
  function gd(t, e, n) {
    this.props = t, this.context = e, this.refs = u0, this.updater = n || o0;
  }
  var yd = gd.prototype = new c0();
  yd.constructor = gd;
  l0(yd, as.prototype);
  yd.isPureReactComponent = true;
  var bm = Array.isArray;
  function zc() {
  }
  var pt = {
    H: null,
    A: null,
    T: null,
    S: null
  }, f0 = Object.prototype.hasOwnProperty;
  function vd(t, e, n) {
    var i = n.ref;
    return {
      $$typeof: pd,
      type: t,
      key: e,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  function Ww(t, e) {
    return vd(t.type, e, t.props);
  }
  function bd(t) {
    return typeof t == "object" && t !== null && t.$$typeof === pd;
  }
  function tT(t) {
    var e = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
      return e[n];
    });
  }
  var xm = /\/+/g;
  function Eu(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? tT("" + t.key) : e.toString(36);
  }
  function eT(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(zc, zc) : (t.status = "pending", t.then(function(e) {
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
  function fa(t, e, n, i, a) {
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
          case pd:
          case Gw:
            r = true;
            break;
          case r0:
            return r = t._init, fa(r(t._payload), e, n, i, a);
        }
    }
    if (r) return a = a(t), r = i === "" ? "." + Eu(t, 0) : i, bm(a) ? (n = "", r != null && (n = r.replace(xm, "$&/") + "/"), fa(a, e, n, "", function(u) {
      return u;
    })) : a != null && (bd(a) && (a = Ww(a, n + (a.key == null || t && t.key === a.key ? "" : ("" + a.key).replace(xm, "$&/") + "/") + r)), e.push(a)), 1;
    r = 0;
    var o = i === "" ? "." : i + ":";
    if (bm(t)) for (var l = 0; l < t.length; l++) i = t[l], s = o + Eu(i, l), r += fa(i, e, n, s, a);
    else if (l = Jw(t), typeof l == "function") for (t = l.call(t), l = 0; !(i = t.next()).done; ) i = i.value, s = o + Eu(i, l++), r += fa(i, e, n, s, a);
    else if (s === "object") {
      if (typeof t.then == "function") return fa(eT(t), e, n, i, a);
      throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    }
    return r;
  }
  function $r(t, e, n) {
    if (t == null) return t;
    var i = [], a = 0;
    return fa(t, i, "", "", function(s) {
      return e.call(n, s, a++);
    }), i;
  }
  function nT(t) {
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
  var Sm = typeof reportError == "function" ? reportError : function(t) {
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
  }, iT = {
    map: $r,
    forEach: function(t, e, n) {
      $r(t, function() {
        e.apply(this, arguments);
      }, n);
    },
    count: function(t) {
      var e = 0;
      return $r(t, function() {
        e++;
      }), e;
    },
    toArray: function(t) {
      return $r(t, function(e) {
        return e;
      }) || [];
    },
    only: function(t) {
      if (!bd(t)) throw Error("React.Children.only expected to receive a single React element child.");
      return t;
    }
  };
  G.Activity = Iw;
  G.Children = iT;
  G.Component = as;
  G.Fragment = Yw;
  G.Profiler = Xw;
  G.PureComponent = gd;
  G.StrictMode = qw;
  G.Suspense = Zw;
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
    var i = l0({}, t.props), a = t.key;
    if (e != null) for (s in e.key !== void 0 && (a = "" + e.key), e) !f0.call(e, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && e.ref === void 0 || (i[s] = e[s]);
    var s = arguments.length - 2;
    if (s === 1) i.children = n;
    else if (1 < s) {
      for (var r = Array(s), o = 0; o < s; o++) r[o] = arguments[o + 2];
      i.children = r;
    }
    return vd(t.type, a, i);
  };
  G.createContext = function(t) {
    return t = {
      $$typeof: Qw,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: Fw,
      _context: t
    }, t;
  };
  G.createElement = function(t, e, n) {
    var i, a = {}, s = null;
    if (e != null) for (i in e.key !== void 0 && (s = "" + e.key), e) f0.call(e, i) && i !== "key" && i !== "__self" && i !== "__source" && (a[i] = e[i]);
    var r = arguments.length - 2;
    if (r === 1) a.children = n;
    else if (1 < r) {
      for (var o = Array(r), l = 0; l < r; l++) o[l] = arguments[l + 2];
      a.children = o;
    }
    if (t && t.defaultProps) for (i in r = t.defaultProps, r) a[i] === void 0 && (a[i] = r[i]);
    return vd(t, s, a);
  };
  G.createRef = function() {
    return {
      current: null
    };
  };
  G.forwardRef = function(t) {
    return {
      $$typeof: Kw,
      render: t
    };
  };
  G.isValidElement = bd;
  G.lazy = function(t) {
    return {
      $$typeof: r0,
      _payload: {
        _status: -1,
        _result: t
      },
      _init: nT
    };
  };
  G.memo = function(t, e) {
    return {
      $$typeof: $w,
      type: t,
      compare: e === void 0 ? null : e
    };
  };
  G.startTransition = function(t) {
    var e = pt.T, n = {};
    pt.T = n;
    try {
      var i = t(), a = pt.S;
      a !== null && a(n, i), typeof i == "object" && i !== null && typeof i.then == "function" && i.then(zc, Sm);
    } catch (s) {
      Sm(s);
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
  s0.exports = G;
  b = s0.exports;
  let d0;
  _ = md(b);
  d0 = Uw({
    __proto__: null,
    default: _
  }, [
    b
  ]);
  var h0 = {
    exports: {}
  }, It = {};
  var aT = b;
  function m0(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Bn() {
  }
  var Kt = {
    d: {
      f: Bn,
      r: function() {
        throw Error(m0(522));
      },
      D: Bn,
      C: Bn,
      L: Bn,
      m: Bn,
      X: Bn,
      S: Bn,
      M: Bn
    },
    p: 0,
    findDOMNode: null
  }, sT = Symbol.for("react.portal");
  function rT(t, e, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: sT,
      key: i == null ? null : "" + i,
      children: t,
      containerInfo: e,
      implementation: n
    };
  }
  var Vs = aT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Yl(t, e) {
    if (t === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Kt;
  It.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(m0(299));
    return rT(t, e, null, n);
  };
  It.flushSync = function(t) {
    var e = Vs.T, n = Kt.p;
    try {
      if (Vs.T = null, Kt.p = 2, t) return t();
    } finally {
      Vs.T = e, Kt.p = n, Kt.d.f();
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
      var n = e.as, i = Yl(n, e.crossOrigin), a = typeof e.integrity == "string" ? e.integrity : void 0, s = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
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
        var n = Yl(e.as, e.crossOrigin);
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
      var n = e.as, i = Yl(n, e.crossOrigin);
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
      var n = Yl(e.as, e.crossOrigin);
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
    return Vs.H.useFormState(t, e, n);
  };
  It.useFormStatus = function() {
    return Vs.H.useHostTransitionStatus();
  };
  It.version = "19.2.5";
  function p0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p0);
    } catch (t) {
      console.error(t);
    }
  }
  p0(), h0.exports = It;
  var Rr = h0.exports;
  const g0 = md(Rr);
  var Lt = a0, y0 = b, oT = Rr;
  function M(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function v0(t) {
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
  function b0(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function x0(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function wm(t) {
    if (Or(t) !== t) throw Error(M(188));
  }
  function lT(t) {
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
          if (s === n) return wm(a), t;
          if (s === i) return wm(a), e;
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
  function S0(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = S0(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var gt = Object.assign, uT = Symbol.for("react.element"), Ir = Symbol.for("react.transitional.element"), Ds = Symbol.for("react.portal"), ga = Symbol.for("react.fragment"), w0 = Symbol.for("react.strict_mode"), _c = Symbol.for("react.profiler"), T0 = Symbol.for("react.consumer"), vn = Symbol.for("react.context"), xd = Symbol.for("react.forward_ref"), Lc = Symbol.for("react.suspense"), Vc = Symbol.for("react.suspense_list"), Sd = Symbol.for("react.memo"), Hn = Symbol.for("react.lazy"), Bc = Symbol.for("react.activity"), cT = Symbol.for("react.memo_cache_sentinel"), Tm = Symbol.iterator;
  function xs(t) {
    return t === null || typeof t != "object" ? null : (t = Tm && t[Tm] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var fT = Symbol.for("react.client.reference");
  function kc(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === fT ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ga:
        return "Fragment";
      case _c:
        return "Profiler";
      case w0:
        return "StrictMode";
      case Lc:
        return "Suspense";
      case Vc:
        return "SuspenseList";
      case Bc:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case Ds:
        return "Portal";
      case vn:
        return t.displayName || "Context";
      case T0:
        return (t._context.displayName || "Context") + ".Consumer";
      case xd:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case Sd:
        return e = t.displayName || null, e !== null ? e : kc(t.type) || "Memo";
      case Hn:
        e = t._payload, t = t._init;
        try {
          return kc(t(e));
        } catch {
        }
    }
    return null;
  }
  var Ns = Array.isArray, P = y0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, et = oT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ki = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, Uc = [], ya = -1;
  function rn(t) {
    return {
      current: t
    };
  }
  function kt(t) {
    0 > ya || (t.current = Uc[ya], Uc[ya] = null, ya--);
  }
  function ut(t, e) {
    ya++, Uc[ya] = t.current, t.current = e;
  }
  var tn = rn(null), nr = rn(null), ti = rn(null), Zo = rn(null);
  function $o(t, e) {
    switch (ut(ti, e), ut(nr, t), ut(tn, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Op(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = Op(e), t = Yb(e, t);
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
    kt(tn), ut(tn, t);
  }
  function Ya() {
    kt(tn), kt(nr), kt(ti);
  }
  function Pc(t) {
    t.memoizedState !== null && ut(Zo, t);
    var e = tn.current, n = Yb(e, t.type);
    e !== n && (ut(nr, t), ut(tn, n));
  }
  function Io(t) {
    nr.current === t && (kt(tn), kt(nr)), Zo.current === t && (kt(Zo), hr._currentValue = ki);
  }
  var Au, Em;
  function Ni(t) {
    if (Au === void 0) try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Au = e && e[1] || "", Em = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Au + t + Em;
  }
  var Cu = false;
  function Mu(t, e) {
    if (!t || Cu) return "";
    Cu = true;
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
      Cu = false, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Ni(n) : "";
  }
  function dT(t, e) {
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
        return Mu(t.type, false);
      case 11:
        return Mu(t.type.render, false);
      case 1:
        return Mu(t.type, true);
      case 31:
        return Ni("Activity");
      default:
        return "";
    }
  }
  function Am(t) {
    try {
      var e = "", n = null;
      do
        e += dT(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Hc = Object.prototype.hasOwnProperty, wd = Lt.unstable_scheduleCallback, Ru = Lt.unstable_cancelCallback, hT = Lt.unstable_shouldYield, mT = Lt.unstable_requestPaint, de = Lt.unstable_now, pT = Lt.unstable_getCurrentPriorityLevel, E0 = Lt.unstable_ImmediatePriority, A0 = Lt.unstable_UserBlockingPriority, Jo = Lt.unstable_NormalPriority, gT = Lt.unstable_LowPriority, C0 = Lt.unstable_IdlePriority, yT = Lt.log, vT = Lt.unstable_setDisableYieldValue, Dr = null, he = null;
  function Qn(t) {
    if (typeof yT == "function" && vT(t), he && typeof he.setStrictMode == "function") try {
      he.setStrictMode(Dr, t);
    } catch {
    }
  }
  var me = Math.clz32 ? Math.clz32 : ST, bT = Math.log, xT = Math.LN2;
  function ST(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (bT(t) / xT | 0) | 0;
  }
  var Jr = 256, Wr = 262144, to = 4194304;
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
  function ql(t, e, n) {
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
  function wT(t, e) {
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
  function M0() {
    var t = to;
    return to <<= 1, !(to & 62914560) && (to = 4194304), t;
  }
  function Ou(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function jr(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function TT(t, e, n, i, a, s) {
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
    i !== 0 && R0(t, i, 0), s !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(r & ~e));
  }
  function R0(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var i = 31 - me(e);
    t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930;
  }
  function O0(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var i = 31 - me(n), a = 1 << i;
      a & e | t[i] & e && (t[i] |= e), n &= ~a;
    }
  }
  function D0(t, e) {
    var n = e & -e;
    return n = n & 42 ? 1 : Td(n), n & (t.suspendedLanes | e) ? 0 : n;
  }
  function Td(t) {
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
  function Ed(t) {
    return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function N0() {
    var t = et.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : tx(t.type));
  }
  function Cm(t, e) {
    var n = et.p;
    try {
      return et.p = t, e();
    } finally {
      et.p = n;
    }
  }
  var xi = Math.random().toString(36).slice(2), Ht = "__reactFiber$" + xi, ae = "__reactProps$" + xi, ss = "__reactContainer$" + xi, Gc = "__reactEvents$" + xi, ET = "__reactListeners$" + xi, AT = "__reactHandles$" + xi, Mm = "__reactResources$" + xi, zr = "__reactMarker$" + xi;
  function Ad(t) {
    delete t[Ht], delete t[ae], delete t[Gc], delete t[ET], delete t[AT];
  }
  function va(t) {
    var e = t[Ht];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[ss] || n[Ht]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = _p(t); t !== null; ) {
          if (n = t[Ht]) return n;
          t = _p(t);
        }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function rs(t) {
    if (t = t[Ht] || t[ss]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function js(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(M(33));
  }
  function za(t) {
    var e = t[Mm];
    return e || (e = t[Mm] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), e;
  }
  function Bt(t) {
    t[zr] = true;
  }
  var j0 = /* @__PURE__ */ new Set(), z0 = {};
  function $i(t, e) {
    qa(t, e), qa(t + "Capture", e);
  }
  function qa(t, e) {
    for (z0[t] = e, t = 0; t < e.length; t++) j0.add(e[t]);
  }
  var CT = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Rm = {}, Om = {};
  function MT(t) {
    return Hc.call(Om, t) ? true : Hc.call(Rm, t) ? false : CT.test(t) ? Om[t] = true : (Rm[t] = true, false);
  }
  function Eo(t, e, n) {
    if (MT(e)) if (n === null) t.removeAttribute(e);
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
  function eo(t, e, n) {
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
  function cn(t, e, n, i) {
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
  function _0(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function RT(t, e, n) {
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
  function Yc(t) {
    if (!t._valueTracker) {
      var e = _0(t) ? "checked" : "value";
      t._valueTracker = RT(t, e, "" + t[e]);
    }
  }
  function L0(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var n = e.getValue(), i = "";
    return t && (i = _0(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), true) : false;
  }
  function Wo(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var OT = /[\n"\\]/g;
  function Ee(t) {
    return t.replace(OT, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function qc(t, e, n, i, a, s, r, o) {
    t.name = "", r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.type = r : t.removeAttribute("type"), e != null ? r === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Se(e)) : t.value !== "" + Se(e) && (t.value = "" + Se(e)) : r !== "submit" && r !== "reset" || t.removeAttribute("value"), e != null ? Xc(t, r, Se(e)) : n != null ? Xc(t, r, Se(n)) : i != null && t.removeAttribute("value"), a == null && s != null && (t.defaultChecked = !!s), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + Se(o) : t.removeAttribute("name");
  }
  function V0(t, e, n, i, a, s, r, o) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), e != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || e != null)) {
        Yc(t);
        return;
      }
      n = n != null ? "" + Se(n) : "", e = e != null ? "" + Se(e) : n, o || e === t.value || (t.value = e), t.defaultValue = e;
    }
    i = i ?? a, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = o ? t.checked : !!i, t.defaultChecked = !!i, r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.name = r), Yc(t);
  }
  function Xc(t, e, n) {
    e === "number" && Wo(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function _a(t, e, n, i) {
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
  function B0(t, e, n) {
    if (e != null && (e = "" + Se(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Se(n) : "";
  }
  function k0(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(M(92));
        if (Ns(i)) {
          if (1 < i.length) throw Error(M(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), e = n;
    }
    n = Se(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i), Yc(t);
  }
  function Xa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var DT = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Dm(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || DT.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function U0(t, e, n) {
    if (e != null && typeof e != "object") throw Error(M(62));
    if (t = t.style, n != null) {
      for (var i in n) !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
      for (var a in e) i = e[a], e.hasOwnProperty(a) && n[a] !== i && Dm(t, a, i);
    } else for (var s in e) e.hasOwnProperty(s) && Dm(t, s, e[s]);
  }
  function Cd(t) {
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
  var NT = /* @__PURE__ */ new Map([
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
  ]), jT = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ao(t) {
    return jT.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function bn() {
  }
  var Fc = null;
  function Md(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ba = null, La = null;
  function Nm(t) {
    var e = rs(t);
    if (e && (t = e.stateNode)) {
      var n = t[ae] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (qc(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Ee("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var a = i[ae] || null;
                if (!a) throw Error(M(90));
                qc(i, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
              }
            }
            for (e = 0; e < n.length; e++) i = n[e], i.form === t.form && L0(i);
          }
          break t;
        case "textarea":
          B0(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && _a(t, !!n.multiple, e, false);
      }
    }
  }
  var Du = false;
  function P0(t, e, n) {
    if (Du) return t(e, n);
    Du = true;
    try {
      var i = t(e);
      return i;
    } finally {
      if (Du = false, (ba !== null || La !== null) && (nu(), ba && (e = ba, t = La, La = ba = null, Nm(e), t))) for (e = 0; e < t.length; e++) Nm(t[e]);
    }
  }
  function ir(t, e) {
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
  var En = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qc = false;
  if (En) try {
    var Ss = {};
    Object.defineProperty(Ss, "passive", {
      get: function() {
        Qc = true;
      }
    }), window.addEventListener("test", Ss, Ss), window.removeEventListener("test", Ss, Ss);
  } catch {
    Qc = false;
  }
  var Kn = null, Rd = null, Co = null;
  function H0() {
    if (Co) return Co;
    var t, e = Rd, n = e.length, i, a = "value" in Kn ? Kn.value : Kn.textContent, s = a.length;
    for (t = 0; t < n && e[t] === a[t]; t++) ;
    var r = n - t;
    for (i = 1; i <= r && e[n - i] === a[s - i]; i++) ;
    return Co = a.slice(t, 1 < i ? 1 - i : void 0);
  }
  function Mo(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function no() {
    return true;
  }
  function jm() {
    return false;
  }
  function se(t) {
    function e(n, i, a, s, r) {
      this._reactName = n, this._targetInst = a, this.type = i, this.nativeEvent = s, this.target = r, this.currentTarget = null;
      for (var o in t) t.hasOwnProperty(o) && (n = t[o], this[o] = n ? n(s) : s[o]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === false) ? no : jm, this.isPropagationStopped = jm, this;
    }
    return gt(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = no);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = no);
      },
      persist: function() {
      },
      isPersistent: no
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
  }, Xl = se(Ii), _r = gt({}, Ii, {
    view: 0,
    detail: 0
  }), zT = se(_r), Nu, ju, ws, Fl = gt({}, _r, {
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
    getModifierState: Od,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ws && (ws && t.type === "mousemove" ? (Nu = t.screenX - ws.screenX, ju = t.screenY - ws.screenY) : ju = Nu = 0, ws = t), Nu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : ju;
    }
  }), zm = se(Fl), _T = gt({}, Fl, {
    dataTransfer: 0
  }), LT = se(_T), VT = gt({}, _r, {
    relatedTarget: 0
  }), zu = se(VT), BT = gt({}, Ii, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), kT = se(BT), UT = gt({}, Ii, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), PT = se(UT), HT = gt({}, Ii, {
    data: 0
  }), _m = se(HT), GT = {
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
  }, YT = {
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
  }, qT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function XT(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = qT[t]) ? !!e[t] : false;
  }
  function Od() {
    return XT;
  }
  var FT = gt({}, _r, {
    key: function(t) {
      if (t.key) {
        var e = GT[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Mo(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? YT[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Od,
    charCode: function(t) {
      return t.type === "keypress" ? Mo(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Mo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), QT = se(FT), KT = gt({}, Fl, {
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
  }), Lm = se(KT), ZT = gt({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Od
  }), $T = se(ZT), IT = gt({}, Ii, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), JT = se(IT), WT = gt({}, Fl, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), tE = se(WT), eE = gt({}, Ii, {
    newState: 0,
    oldState: 0
  }), nE = se(eE), iE = [
    9,
    13,
    27,
    32
  ], Dd = En && "CompositionEvent" in window, Bs = null;
  En && "documentMode" in document && (Bs = document.documentMode);
  var aE = En && "TextEvent" in window && !Bs, G0 = En && (!Dd || Bs && 8 < Bs && 11 >= Bs), Vm = " ", Bm = false;
  function Y0(t, e) {
    switch (t) {
      case "keyup":
        return iE.indexOf(e.keyCode) !== -1;
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
  function q0(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var xa = false;
  function sE(t, e) {
    switch (t) {
      case "compositionend":
        return q0(e);
      case "keypress":
        return e.which !== 32 ? null : (Bm = true, Vm);
      case "textInput":
        return t = e.data, t === Vm && Bm ? null : t;
      default:
        return null;
    }
  }
  function rE(t, e) {
    if (xa) return t === "compositionend" || !Dd && Y0(t, e) ? (t = H0(), Co = Rd = Kn = null, xa = false, t) : null;
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
        return G0 && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var oE = {
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
  function km(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!oE[t.type] : e === "textarea";
  }
  function X0(t, e, n, i) {
    ba ? La ? La.push(i) : La = [
      i
    ] : ba = i, e = yl(e, "onChange"), 0 < e.length && (n = new Xl("onChange", "change", null, n, i), t.push({
      event: n,
      listeners: e
    }));
  }
  var ks = null, ar = null;
  function lE(t) {
    Pb(t, 0);
  }
  function Ql(t) {
    var e = js(t);
    if (L0(e)) return t;
  }
  function Um(t, e) {
    if (t === "change") return e;
  }
  var F0 = false;
  if (En) {
    var _u;
    if (En) {
      var Lu = "oninput" in document;
      if (!Lu) {
        var Pm = document.createElement("div");
        Pm.setAttribute("oninput", "return;"), Lu = typeof Pm.oninput == "function";
      }
      _u = Lu;
    } else _u = false;
    F0 = _u && (!document.documentMode || 9 < document.documentMode);
  }
  function Hm() {
    ks && (ks.detachEvent("onpropertychange", Q0), ar = ks = null);
  }
  function Q0(t) {
    if (t.propertyName === "value" && Ql(ar)) {
      var e = [];
      X0(e, ar, t, Md(t)), P0(lE, e);
    }
  }
  function uE(t, e, n) {
    t === "focusin" ? (Hm(), ks = e, ar = n, ks.attachEvent("onpropertychange", Q0)) : t === "focusout" && Hm();
  }
  function cE(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ql(ar);
  }
  function fE(t, e) {
    if (t === "click") return Ql(e);
  }
  function dE(t, e) {
    if (t === "input" || t === "change") return Ql(e);
  }
  function hE(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ye = typeof Object.is == "function" ? Object.is : hE;
  function sr(t, e) {
    if (ye(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var n = Object.keys(t), i = Object.keys(e);
    if (n.length !== i.length) return false;
    for (i = 0; i < n.length; i++) {
      var a = n[i];
      if (!Hc.call(e, a) || !ye(t[a], e[a])) return false;
    }
    return true;
  }
  function Gm(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ym(t, e) {
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
  function K0(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? K0(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function Z0(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Wo(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Wo(t.document);
    }
    return e;
  }
  function Nd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var mE = En && "documentMode" in document && 11 >= document.documentMode, Sa = null, Kc = null, Us = null, Zc = false;
  function qm(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zc || Sa == null || Sa !== Wo(i) || (i = Sa, "selectionStart" in i && Nd(i) ? i = {
      start: i.selectionStart,
      end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Us && sr(Us, i) || (Us = i, i = yl(Kc, "onSelect"), 0 < i.length && (e = new Xl("onSelect", "select", null, e, n), t.push({
      event: e,
      listeners: i
    }), e.target = Sa)));
  }
  function Oi(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var wa = {
    animationend: Oi("Animation", "AnimationEnd"),
    animationiteration: Oi("Animation", "AnimationIteration"),
    animationstart: Oi("Animation", "AnimationStart"),
    transitionrun: Oi("Transition", "TransitionRun"),
    transitionstart: Oi("Transition", "TransitionStart"),
    transitioncancel: Oi("Transition", "TransitionCancel"),
    transitionend: Oi("Transition", "TransitionEnd")
  }, Vu = {}, $0 = {};
  En && ($0 = document.createElement("div").style, "AnimationEvent" in window || (delete wa.animationend.animation, delete wa.animationiteration.animation, delete wa.animationstart.animation), "TransitionEvent" in window || delete wa.transitionend.transition);
  function Ji(t) {
    if (Vu[t]) return Vu[t];
    if (!wa[t]) return t;
    var e = wa[t], n;
    for (n in e) if (e.hasOwnProperty(n) && n in $0) return Vu[t] = e[n];
    return t;
  }
  var I0 = Ji("animationend"), J0 = Ji("animationiteration"), W0 = Ji("animationstart"), pE = Ji("transitionrun"), gE = Ji("transitionstart"), yE = Ji("transitioncancel"), tv = Ji("transitionend"), ev = /* @__PURE__ */ new Map(), $c = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  $c.push("scrollEnd");
  function Fe(t, e) {
    ev.set(t, e), $i(e, [
      t
    ]);
  }
  var tl = typeof reportError == "function" ? reportError : function(t) {
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
  }, xe = [], Ta = 0, jd = 0;
  function Kl() {
    for (var t = Ta, e = jd = Ta = 0; e < t; ) {
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
      s !== 0 && nv(n, a, s);
    }
  }
  function Zl(t, e, n, i) {
    xe[Ta++] = t, xe[Ta++] = e, xe[Ta++] = n, xe[Ta++] = i, jd |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
  }
  function zd(t, e, n, i) {
    return Zl(t, e, n, i), el(t);
  }
  function Wi(t, e) {
    return Zl(t, null, null, e), el(t);
  }
  function nv(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var a = false, s = t.return; s !== null; ) s.childLanes |= n, i = s.alternate, i !== null && (i.childLanes |= n), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (a = true)), t = s, s = s.return;
    return t.tag === 3 ? (s = t.stateNode, a && e !== null && (a = 31 - me(n), t = s.hiddenUpdates, i = t[a], i === null ? t[a] = [
      e
    ] : i.push(e), e.lane = n | 536870912), s) : null;
  }
  function el(t) {
    if (50 < Ks) throw Ks = 0, vf = null, Error(M(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ea = {};
  function vE(t, e, n, i) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ce(t, e, n, i) {
    return new vE(t, e, n, i);
  }
  function _d(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Sn(t, e) {
    var n = t.alternate;
    return n === null ? (n = ce(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function iv(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Ro(t, e, n, i, a, s) {
    var r = 0;
    if (i = t, typeof t == "function") _d(t) && (r = 1);
    else if (typeof t == "string") r = TA(t, n, tn.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case Bc:
        return t = ce(31, n, e, a), t.elementType = Bc, t.lanes = s, t;
      case ga:
        return Ui(n.children, a, s, e);
      case w0:
        r = 8, a |= 24;
        break;
      case _c:
        return t = ce(12, n, e, a | 2), t.elementType = _c, t.lanes = s, t;
      case Lc:
        return t = ce(13, n, e, a), t.elementType = Lc, t.lanes = s, t;
      case Vc:
        return t = ce(19, n, e, a), t.elementType = Vc, t.lanes = s, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case vn:
            r = 10;
            break t;
          case T0:
            r = 9;
            break t;
          case xd:
            r = 11;
            break t;
          case Sd:
            r = 14;
            break t;
          case Hn:
            r = 16, i = null;
            break t;
        }
        r = 29, n = Error(M(130, t === null ? "null" : typeof t, "")), i = null;
    }
    return e = ce(r, n, e, a), e.elementType = t, e.type = i, e.lanes = s, e;
  }
  function Ui(t, e, n, i) {
    return t = ce(7, t, i, e), t.lanes = n, t;
  }
  function Bu(t, e, n) {
    return t = ce(6, t, null, e), t.lanes = n, t;
  }
  function av(t) {
    var e = ce(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function ku(t, e, n) {
    return e = ce(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Xm = /* @__PURE__ */ new WeakMap();
  function Ae(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Xm.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Am(e)
      }, Xm.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Am(e)
    };
  }
  var Aa = [], Ca = 0, nl = null, rr = 0, we = [], Te = 0, ci = null, $e = 1, Ie = "";
  function gn(t, e) {
    Aa[Ca++] = rr, Aa[Ca++] = nl, nl = t, rr = e;
  }
  function sv(t, e, n) {
    we[Te++] = $e, we[Te++] = Ie, we[Te++] = ci, ci = t;
    var i = $e;
    t = Ie;
    var a = 32 - me(i) - 1;
    i &= ~(1 << a), n += 1;
    var s = 32 - me(e) + a;
    if (30 < s) {
      var r = a - a % 5;
      s = (i & (1 << r) - 1).toString(32), i >>= r, a -= r, $e = 1 << 32 - me(e) + a | n << a | i, Ie = s + t;
    } else $e = 1 << s | n << a | i, Ie = t;
  }
  function Ld(t) {
    t.return !== null && (gn(t, 1), sv(t, 1, 0));
  }
  function Vd(t) {
    for (; t === nl; ) nl = Aa[--Ca], Aa[Ca] = null, rr = Aa[--Ca], Aa[Ca] = null;
    for (; t === ci; ) ci = we[--Te], we[Te] = null, Ie = we[--Te], we[Te] = null, $e = we[--Te], we[Te] = null;
  }
  function rv(t, e) {
    we[Te++] = $e, we[Te++] = Ie, we[Te++] = ci, $e = e.id, Ie = e.overflow, ci = t;
  }
  var Gt = null, mt = null, W = false, ei = null, Ce = false, Ic = Error(M(519));
  function fi(t) {
    var e = Error(M(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw or(Ae(e, t)), Ic;
  }
  function Fm(t) {
    var e = t.stateNode, n = t.type, i = t.memoizedProps;
    switch (e[Ht] = t, e[ae] = i, n) {
      case "dialog":
        Q("cancel", e), Q("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Q("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < fr.length; n++) Q(fr[n], e);
        break;
      case "source":
        Q("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Q("error", e), Q("load", e);
        break;
      case "details":
        Q("toggle", e);
        break;
      case "input":
        Q("invalid", e), V0(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, true);
        break;
      case "select":
        Q("invalid", e);
        break;
      case "textarea":
        Q("invalid", e), k0(e, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === true || Gb(e.textContent, n) ? (i.popover != null && (Q("beforetoggle", e), Q("toggle", e)), i.onScroll != null && Q("scroll", e), i.onScrollEnd != null && Q("scrollend", e), i.onClick != null && (e.onclick = bn), e = true) : e = false, e || fi(t, true);
  }
  function Qm(t) {
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
  function ua(t) {
    if (t !== Gt) return false;
    if (!W) return Qm(t), W = true, false;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Tf(t.type, t.memoizedProps)), n = !n), n && mt && fi(t), Qm(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(M(317));
      mt = zp(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(M(317));
      mt = zp(t);
    } else e === 27 ? (e = mt, Si(t.type) ? (t = Mf, Mf = null, mt = t) : mt = e) : mt = Gt ? De(t.stateNode.nextSibling) : null;
    return true;
  }
  function qi() {
    mt = Gt = null, W = false;
  }
  function Uu() {
    var t = ei;
    return t !== null && (ee === null ? ee = t : ee.push.apply(ee, t), ei = null), t;
  }
  function or(t) {
    ei === null ? ei = [
      t
    ] : ei.push(t);
  }
  var Jc = rn(null), ta = null, xn = null;
  function Yn(t, e, n) {
    ut(Jc, e._currentValue), e._currentValue = n;
  }
  function wn(t) {
    t._currentValue = Jc.current, kt(Jc);
  }
  function Wc(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function tf(t, e, n, i) {
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
            s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Wc(s.return, n, t), i || (r = null);
            break t;
          }
          s = o.next;
        }
      } else if (a.tag === 18) {
        if (r = a.return, r === null) throw Error(M(341));
        r.lanes |= n, s = r.alternate, s !== null && (s.lanes |= n), Wc(r, n, t), r = null;
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
  function os(t, e, n, i) {
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
      } else if (a === Zo.current) {
        if (r = a.alternate, r === null) throw Error(M(387));
        r.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(hr) : t = [
          hr
        ]);
      }
      a = a.return;
    }
    t !== null && tf(e, t, n, i), e.flags |= 262144;
  }
  function il(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ye(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function Xi(t) {
    ta = t, xn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Yt(t) {
    return ov(ta, t);
  }
  function io(t, e) {
    return ta === null && Xi(t), ov(t, e);
  }
  function ov(t, e) {
    var n = e._currentValue;
    if (e = {
      context: e,
      memoizedValue: n,
      next: null
    }, xn === null) {
      if (t === null) throw Error(M(308));
      xn = e, t.dependencies = {
        lanes: 0,
        firstContext: e
      }, t.flags |= 524288;
    } else xn = xn.next = e;
    return n;
  }
  var bE = typeof AbortController < "u" ? AbortController : function() {
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
  }, xE = Lt.unstable_scheduleCallback, SE = Lt.unstable_NormalPriority, Ot = {
    $$typeof: vn,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Bd() {
    return {
      controller: new bE(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Lr(t) {
    t.refCount--, t.refCount === 0 && xE(SE, function() {
      t.controller.abort();
    });
  }
  var Ps = null, ef = 0, Fa = 0, Va = null;
  function wE(t, e) {
    if (Ps === null) {
      var n = Ps = [];
      ef = 0, Fa = lh(), Va = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return ef++, e.then(Km, Km), e;
  }
  function Km() {
    if (--ef === 0 && Ps !== null) {
      Va !== null && (Va.status = "fulfilled");
      var t = Ps;
      Ps = null, Fa = 0, Va = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function TE(t, e) {
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
  var Zm = P.S;
  P.S = function(t, e) {
    Sb = de(), typeof e == "object" && e !== null && typeof e.then == "function" && wE(t, e), Zm !== null && Zm(t, e);
  };
  var Pi = rn(null);
  function kd() {
    var t = Pi.current;
    return t !== null ? t : lt.pooledCache;
  }
  function Oo(t, e) {
    e === null ? ut(Pi, Pi.current) : ut(Pi, e.pool);
  }
  function lv() {
    var t = kd();
    return t === null ? null : {
      parent: Ot._currentValue,
      pool: t
    };
  }
  var ls = Error(M(460)), Ud = Error(M(474)), $l = Error(M(542)), al = {
    then: function() {
    }
  };
  function $m(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function uv(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(bn, bn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Jm(t), t;
      default:
        if (typeof e.status == "string") e.then(bn, bn);
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
            throw t = e.reason, Jm(t), t;
        }
        throw Hi = e, ls;
    }
  }
  function zi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Hi = n, ls) : n;
    }
  }
  var Hi = null;
  function Im() {
    if (Hi === null) throw Error(M(459));
    var t = Hi;
    return Hi = null, t;
  }
  function Jm(t) {
    if (t === ls || t === $l) throw Error(M(483));
  }
  var Ba = null, lr = 0;
  function ao(t) {
    var e = lr;
    return lr += 1, Ba === null && (Ba = []), uv(Ba, t, e);
  }
  function Ts(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function so(t, e) {
    throw e.$$typeof === uT ? Error(M(525)) : (t = Object.prototype.toString.call(e), Error(M(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function cv(t) {
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
      return p = Sn(p, m), p.index = 0, p.sibling = null, p;
    }
    function s(p, m, g) {
      return p.index = g, t ? (g = p.alternate, g !== null ? (g = g.index, g < m ? (p.flags |= 67108866, m) : g) : (p.flags |= 67108866, m)) : (p.flags |= 1048576, m);
    }
    function r(p) {
      return t && p.alternate === null && (p.flags |= 67108866), p;
    }
    function o(p, m, g, w) {
      return m === null || m.tag !== 6 ? (m = Bu(g, p.mode, w), m.return = p, m) : (m = a(m, g), m.return = p, m);
    }
    function l(p, m, g, w) {
      var T = g.type;
      return T === ga ? c(p, m, g.props.children, w, g.key) : m !== null && (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Hn && zi(T) === m.type) ? (m = a(m, g.props), Ts(m, g), m.return = p, m) : (m = Ro(g.type, g.key, g.props, null, p.mode, w), Ts(m, g), m.return = p, m);
    }
    function u(p, m, g, w) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = ku(g, p.mode, w), m.return = p, m) : (m = a(m, g.children || []), m.return = p, m);
    }
    function c(p, m, g, w, T) {
      return m === null || m.tag !== 7 ? (m = Ui(g, p.mode, w, T), m.return = p, m) : (m = a(m, g), m.return = p, m);
    }
    function f(p, m, g) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return m = Bu("" + m, p.mode, g), m.return = p, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ir:
            return g = Ro(m.type, m.key, m.props, null, p.mode, g), Ts(g, m), g.return = p, g;
          case Ds:
            return m = ku(m, p.mode, g), m.return = p, m;
          case Hn:
            return m = zi(m), f(p, m, g);
        }
        if (Ns(m) || xs(m)) return m = Ui(m, p.mode, g, null), m.return = p, m;
        if (typeof m.then == "function") return f(p, ao(m), g);
        if (m.$$typeof === vn) return f(p, io(p, m), g);
        so(p, m);
      }
      return null;
    }
    function h(p, m, g, w) {
      var T = m !== null ? m.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return T !== null ? null : o(p, m, "" + g, w);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Ir:
            return g.key === T ? l(p, m, g, w) : null;
          case Ds:
            return g.key === T ? u(p, m, g, w) : null;
          case Hn:
            return g = zi(g), h(p, m, g, w);
        }
        if (Ns(g) || xs(g)) return T !== null ? null : c(p, m, g, w, null);
        if (typeof g.then == "function") return h(p, m, ao(g), w);
        if (g.$$typeof === vn) return h(p, m, io(p, g), w);
        so(p, g);
      }
      return null;
    }
    function d(p, m, g, w, T) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return p = p.get(g) || null, o(m, p, "" + w, T);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ir:
            return p = p.get(w.key === null ? g : w.key) || null, l(m, p, w, T);
          case Ds:
            return p = p.get(w.key === null ? g : w.key) || null, u(m, p, w, T);
          case Hn:
            return w = zi(w), d(p, m, g, w, T);
        }
        if (Ns(w) || xs(w)) return p = p.get(g) || null, c(m, p, w, T, null);
        if (typeof w.then == "function") return d(p, m, g, ao(w), T);
        if (w.$$typeof === vn) return d(p, m, g, io(m, w), T);
        so(m, w);
      }
      return null;
    }
    function y(p, m, g, w) {
      for (var T = null, A = null, E = m, C = m = 0, j = null; E !== null && C < g.length; C++) {
        E.index > C ? (j = E, E = null) : j = E.sibling;
        var z = h(p, E, g[C], w);
        if (z === null) {
          E === null && (E = j);
          break;
        }
        t && E && z.alternate === null && e(p, E), m = s(z, m, C), A === null ? T = z : A.sibling = z, A = z, E = j;
      }
      if (C === g.length) return n(p, E), W && gn(p, C), T;
      if (E === null) {
        for (; C < g.length; C++) E = f(p, g[C], w), E !== null && (m = s(E, m, C), A === null ? T = E : A.sibling = E, A = E);
        return W && gn(p, C), T;
      }
      for (E = i(E); C < g.length; C++) j = d(E, p, C, g[C], w), j !== null && (t && j.alternate !== null && E.delete(j.key === null ? C : j.key), m = s(j, m, C), A === null ? T = j : A.sibling = j, A = j);
      return t && E.forEach(function(U) {
        return e(p, U);
      }), W && gn(p, C), T;
    }
    function v(p, m, g, w) {
      if (g == null) throw Error(M(151));
      for (var T = null, A = null, E = m, C = m = 0, j = null, z = g.next(); E !== null && !z.done; C++, z = g.next()) {
        E.index > C ? (j = E, E = null) : j = E.sibling;
        var U = h(p, E, z.value, w);
        if (U === null) {
          E === null && (E = j);
          break;
        }
        t && E && U.alternate === null && e(p, E), m = s(U, m, C), A === null ? T = U : A.sibling = U, A = U, E = j;
      }
      if (z.done) return n(p, E), W && gn(p, C), T;
      if (E === null) {
        for (; !z.done; C++, z = g.next()) z = f(p, z.value, w), z !== null && (m = s(z, m, C), A === null ? T = z : A.sibling = z, A = z);
        return W && gn(p, C), T;
      }
      for (E = i(E); !z.done; C++, z = g.next()) z = d(E, p, C, z.value, w), z !== null && (t && z.alternate !== null && E.delete(z.key === null ? C : z.key), m = s(z, m, C), A === null ? T = z : A.sibling = z, A = z);
      return t && E.forEach(function(V) {
        return e(p, V);
      }), W && gn(p, C), T;
    }
    function S(p, m, g, w) {
      if (typeof g == "object" && g !== null && g.type === ga && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Ir:
            t: {
              for (var T = g.key; m !== null; ) {
                if (m.key === T) {
                  if (T = g.type, T === ga) {
                    if (m.tag === 7) {
                      n(p, m.sibling), w = a(m, g.props.children), w.return = p, p = w;
                      break t;
                    }
                  } else if (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Hn && zi(T) === m.type) {
                    n(p, m.sibling), w = a(m, g.props), Ts(w, g), w.return = p, p = w;
                    break t;
                  }
                  n(p, m);
                  break;
                } else e(p, m);
                m = m.sibling;
              }
              g.type === ga ? (w = Ui(g.props.children, p.mode, w, g.key), w.return = p, p = w) : (w = Ro(g.type, g.key, g.props, null, p.mode, w), Ts(w, g), w.return = p, p = w);
            }
            return r(p);
          case Ds:
            t: {
              for (T = g.key; m !== null; ) {
                if (m.key === T) if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                  n(p, m.sibling), w = a(m, g.children || []), w.return = p, p = w;
                  break t;
                } else {
                  n(p, m);
                  break;
                }
                else e(p, m);
                m = m.sibling;
              }
              w = ku(g, p.mode, w), w.return = p, p = w;
            }
            return r(p);
          case Hn:
            return g = zi(g), S(p, m, g, w);
        }
        if (Ns(g)) return y(p, m, g, w);
        if (xs(g)) {
          if (T = xs(g), typeof T != "function") throw Error(M(150));
          return g = T.call(g), v(p, m, g, w);
        }
        if (typeof g.then == "function") return S(p, m, ao(g), w);
        if (g.$$typeof === vn) return S(p, m, io(p, g), w);
        so(p, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, m !== null && m.tag === 6 ? (n(p, m.sibling), w = a(m, g), w.return = p, p = w) : (n(p, m), w = Bu(g, p.mode, w), w.return = p, p = w), r(p)) : n(p, m);
    }
    return function(p, m, g, w) {
      try {
        lr = 0;
        var T = S(p, m, g, w);
        return Ba = null, T;
      } catch (E) {
        if (E === ls || E === $l) throw E;
        var A = ce(29, E, null, p.mode);
        return A.lanes = w, A.return = p, A;
      } finally {
      }
    };
  }
  var Fi = cv(true), fv = cv(false), Gn = false;
  function Pd(t) {
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
  function nf(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ni(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function ii(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, tt & 2) {
      var a = i.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), i.pending = e, e = el(t), nv(t, null, n), e;
    }
    return Zl(t, i, e, n), el(t);
  }
  function Hs(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, O0(t, n);
    }
  }
  function Pu(t, e) {
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
  var af = false;
  function Gs() {
    if (af) {
      var t = Va;
      if (t !== null) throw t;
    }
  }
  function Ys(t, e, n, i) {
    af = false;
    var a = t.updateQueue;
    Gn = false;
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
          h !== 0 && h === Fa && (af = true), c !== null && (c = c.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          t: {
            var y = t, v = o;
            h = e;
            var S = n;
            switch (v.tag) {
              case 1:
                if (y = v.payload, typeof y == "function") {
                  f = y.call(S, f, h);
                  break t;
                }
                f = y;
                break t;
              case 3:
                y.flags = y.flags & -65537 | 128;
              case 0:
                if (y = v.payload, h = typeof y == "function" ? y.call(S, f, h) : y, h == null) break t;
                f = gt({}, f, h);
                break t;
              case 2:
                Gn = true;
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
      c === null && (l = f), a.baseState = l, a.firstBaseUpdate = u, a.lastBaseUpdate = c, s === null && (a.shared.lanes = 0), hi |= r, t.lanes = r, t.memoizedState = f;
    }
  }
  function dv(t, e) {
    if (typeof t != "function") throw Error(M(191, t));
    t.call(e);
  }
  function hv(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) dv(n[t], e);
  }
  var Qa = rn(null), sl = rn(0);
  function Wm(t, e) {
    t = Rn, ut(sl, t), ut(Qa, e), Rn = t | e.baseLanes;
  }
  function sf() {
    ut(sl, Rn), ut(Qa, Qa.current);
  }
  function Hd() {
    Rn = sl.current, kt(Qa), kt(sl);
  }
  var ve = rn(null), Oe = null;
  function qn(t) {
    var e = t.alternate;
    ut(Et, Et.current & 1), ut(ve, t), Oe === null && (e === null || Qa.current !== null || e.memoizedState !== null) && (Oe = t);
  }
  function rf(t) {
    ut(Et, Et.current), ut(ve, t), Oe === null && (Oe = t);
  }
  function mv(t) {
    t.tag === 22 ? (ut(Et, Et.current), ut(ve, t), Oe === null && (Oe = t)) : Xn();
  }
  function Xn() {
    ut(Et, Et.current), ut(ve, ve.current);
  }
  function le(t) {
    kt(ve), Oe === t && (Oe = null), kt(Et);
  }
  var Et = rn(0);
  function rl(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Af(n) || Cf(n))) return e;
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
  var An = 0, Y = null, ot = null, Mt = null, ol = false, ka = false, Qi = false, ll = 0, ur = 0, Ua = null, EE = 0;
  function St() {
    throw Error(M(321));
  }
  function Gd(t, e) {
    if (e === null) return false;
    for (var n = 0; n < e.length && n < t.length; n++) if (!ye(t[n], e[n])) return false;
    return true;
  }
  function Yd(t, e, n, i, a, s) {
    return An = s, Y = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, P.H = t === null || t.memoizedState === null ? Xv : th, Qi = false, s = n(i, a), Qi = false, ka && (s = gv(e, n, i, a)), pv(t), s;
  }
  function pv(t) {
    P.H = cr;
    var e = ot !== null && ot.next !== null;
    if (An = 0, Mt = ot = Y = null, ol = false, ur = 0, Ua = null, e) throw Error(M(300));
    t === null || Dt || (t = t.dependencies, t !== null && il(t) && (Dt = true));
  }
  function gv(t, e, n, i) {
    Y = t;
    var a = 0;
    do {
      if (ka && (Ua = null), ur = 0, ka = false, 25 <= a) throw Error(M(301));
      if (a += 1, Mt = ot = null, t.updateQueue != null) {
        var s = t.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      P.H = Fv, s = e(n, i);
    } while (ka);
    return s;
  }
  function AE() {
    var t = P.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Vr(e) : e, t = t.useState()[0], (ot !== null ? ot.memoizedState : null) !== t && (Y.flags |= 1024), e;
  }
  function qd() {
    var t = ll !== 0;
    return ll = 0, t;
  }
  function Xd(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Fd(t) {
    if (ol) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ol = false;
    }
    An = 0, Mt = ot = Y = null, ka = false, ur = ll = 0, Ua = null;
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
    if (ot === null) {
      var t = Y.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ot.next;
    var e = Mt === null ? Y.memoizedState : Mt.next;
    if (e !== null) Mt = e, ot = t;
    else {
      if (t === null) throw Y.alternate === null ? Error(M(467)) : Error(M(310));
      ot = t, t = {
        memoizedState: ot.memoizedState,
        baseState: ot.baseState,
        baseQueue: ot.baseQueue,
        queue: ot.queue,
        next: null
      }, Mt === null ? Y.memoizedState = Mt = t : Mt = Mt.next = t;
    }
    return Mt;
  }
  function Il() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Vr(t) {
    var e = ur;
    return ur += 1, Ua === null && (Ua = []), t = uv(Ua, t, e), e = Y, (Mt === null ? e.memoizedState : Mt.next) === null && (e = e.alternate, P.H = e === null || e.memoizedState === null ? Xv : th), t;
  }
  function Jl(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Vr(t);
      if (t.$$typeof === vn) return Yt(t);
    }
    throw Error(M(438, String(t)));
  }
  function Qd(t) {
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
    }), n === null && (n = Il(), Y.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0) for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = cT;
    return e.index++, n;
  }
  function Cn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Do(t) {
    var e = At();
    return Kd(e, ot, t);
  }
  function Kd(t, e, n) {
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
        if (f !== u.lane ? (I & f) === f : (An & f) === f) {
          var h = u.revertLane;
          if (h === 0) l !== null && (l = l.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          }), f === Fa && (c = true);
          else if ((An & h) === h) {
            u = u.next, h === Fa && (c = true);
            continue;
          } else f = {
            lane: 0,
            revertLane: u.revertLane,
            gesture: null,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          }, l === null ? (o = l = f, r = s) : l = l.next = f, Y.lanes |= h, hi |= h;
          f = u.action, Qi && n(s, f), s = u.hasEagerState ? u.eagerState : n(s, f);
        } else h = {
          lane: f,
          revertLane: u.revertLane,
          gesture: u.gesture,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }, l === null ? (o = l = h, r = s) : l = l.next = h, Y.lanes |= f, hi |= f;
        u = u.next;
      } while (u !== null && u !== e);
      if (l === null ? r = s : l.next = o, !ye(s, t.memoizedState) && (Dt = true, c && (n = Va, n !== null))) throw n;
      t.memoizedState = s, t.baseState = r, t.baseQueue = l, i.lastRenderedState = s;
    }
    return a === null && (i.lanes = 0), [
      t.memoizedState,
      i.dispatch
    ];
  }
  function Hu(t) {
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
      ye(s, e.memoizedState) || (Dt = true), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s;
    }
    return [
      s,
      i
    ];
  }
  function yv(t, e, n) {
    var i = Y, a = At(), s = W;
    if (s) {
      if (n === void 0) throw Error(M(407));
      n = n();
    } else n = e();
    var r = !ye((ot || a).memoizedState, n);
    if (r && (a.memoizedState = n, Dt = true), a = a.queue, Zd(xv.bind(null, i, a, t), [
      t
    ]), a.getSnapshot !== e || r || Mt !== null && Mt.memoizedState.tag & 1) {
      if (i.flags |= 2048, Ka(9, {
        destroy: void 0
      }, bv.bind(null, i, a, n, e), null), lt === null) throw Error(M(349));
      s || An & 127 || vv(i, e, n);
    }
    return n;
  }
  function vv(t, e, n) {
    t.flags |= 16384, t = {
      getSnapshot: e,
      value: n
    }, e = Y.updateQueue, e === null ? (e = Il(), Y.updateQueue = e, e.stores = [
      t
    ]) : (n = e.stores, n === null ? e.stores = [
      t
    ] : n.push(t));
  }
  function bv(t, e, n, i) {
    e.value = n, e.getSnapshot = i, Sv(e) && wv(t);
  }
  function xv(t, e, n) {
    return n(function() {
      Sv(e) && wv(t);
    });
  }
  function Sv(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ye(t, n);
    } catch {
      return true;
    }
  }
  function wv(t) {
    var e = Wi(t, 2);
    e !== null && ie(e, t, 2);
  }
  function of(t) {
    var e = Ft();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Qi) {
        Qn(true);
        try {
          n();
        } finally {
          Qn(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cn,
      lastRenderedState: t
    }, e;
  }
  function Tv(t, e, n, i) {
    return t.baseState = n, Kd(t, ot, typeof i == "function" ? i : Cn);
  }
  function CE(t, e, n, i, a) {
    if (tu(t)) throw Error(M(485));
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
      P.T !== null ? n(true) : s.isTransition = false, i(s), n = e.pending, n === null ? (s.next = e.pending = s, Ev(e, s)) : (s.next = n.next, e.pending = n.next = s);
    }
  }
  function Ev(t, e) {
    var n = e.action, i = e.payload, a = t.state;
    if (e.isTransition) {
      var s = P.T, r = {};
      P.T = r;
      try {
        var o = n(a, i), l = P.S;
        l !== null && l(r, o), tp(t, e, o);
      } catch (u) {
        lf(t, e, u);
      } finally {
        s !== null && r.types !== null && (s.types = r.types), P.T = s;
      }
    } else try {
      s = n(a, i), tp(t, e, s);
    } catch (u) {
      lf(t, e, u);
    }
  }
  function tp(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(i) {
      ep(t, e, i);
    }, function(i) {
      return lf(t, e, i);
    }) : ep(t, e, n);
  }
  function ep(t, e, n) {
    e.status = "fulfilled", e.value = n, Av(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Ev(t, n)));
  }
  function lf(t, e, n) {
    var i = t.pending;
    if (t.pending = null, i !== null) {
      i = i.next;
      do
        e.status = "rejected", e.reason = n, Av(e), e = e.next;
      while (e !== i);
    }
    t.action = null;
  }
  function Av(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Cv(t, e) {
    return e;
  }
  function np(t, e) {
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
            fi(i);
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
      lastRenderedReducer: Cv,
      lastRenderedState: e
    }, n.queue = i, n = Gv.bind(null, Y, i), i.dispatch = n, i = of(false), s = Wd.bind(null, Y, false, i.queue), i = Ft(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, i.queue = a, n = CE.bind(null, Y, a, s, n), a.dispatch = n, i.memoizedState = t, [
      e,
      n,
      false
    ];
  }
  function ip(t) {
    var e = At();
    return Mv(e, ot, t);
  }
  function Mv(t, e, n) {
    if (e = Kd(t, e, Cv)[0], t = Do(Cn)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var i = Vr(e);
    } catch (r) {
      throw r === ls ? $l : r;
    }
    else i = e;
    e = At();
    var a = e.queue, s = a.dispatch;
    return n !== e.memoizedState && (Y.flags |= 2048, Ka(9, {
      destroy: void 0
    }, ME.bind(null, a, n), null)), [
      i,
      s,
      t
    ];
  }
  function ME(t, e) {
    t.action = e;
  }
  function ap(t) {
    var e = At(), n = ot;
    if (n !== null) return Mv(e, n, t);
    At(), e = e.memoizedState, n = At();
    var i = n.queue.dispatch;
    return n.memoizedState = t, [
      e,
      i,
      false
    ];
  }
  function Ka(t, e, n, i) {
    return t = {
      tag: t,
      create: n,
      deps: i,
      inst: e,
      next: null
    }, e = Y.updateQueue, e === null && (e = Il(), Y.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t;
  }
  function Rv() {
    return At().memoizedState;
  }
  function No(t, e, n, i) {
    var a = Ft();
    Y.flags |= t, a.memoizedState = Ka(1 | e, {
      destroy: void 0
    }, n, i === void 0 ? null : i);
  }
  function Wl(t, e, n, i) {
    var a = At();
    i = i === void 0 ? null : i;
    var s = a.memoizedState.inst;
    ot !== null && i !== null && Gd(i, ot.memoizedState.deps) ? a.memoizedState = Ka(e, s, n, i) : (Y.flags |= t, a.memoizedState = Ka(1 | e, s, n, i));
  }
  function sp(t, e) {
    No(8390656, 8, t, e);
  }
  function Zd(t, e) {
    Wl(2048, 8, t, e);
  }
  function RE(t) {
    Y.flags |= 4;
    var e = Y.updateQueue;
    if (e === null) e = Il(), Y.updateQueue = e, e.events = [
      t
    ];
    else {
      var n = e.events;
      n === null ? e.events = [
        t
      ] : n.push(t);
    }
  }
  function Ov(t) {
    var e = At().memoizedState;
    return RE({
      ref: e,
      nextImpl: t
    }), function() {
      if (tt & 2) throw Error(M(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Dv(t, e) {
    return Wl(4, 2, t, e);
  }
  function Nv(t, e) {
    return Wl(4, 4, t, e);
  }
  function jv(t, e) {
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
  function zv(t, e, n) {
    n = n != null ? n.concat([
      t
    ]) : null, Wl(4, 4, jv.bind(null, e, t), n);
  }
  function $d() {
  }
  function _v(t, e) {
    var n = At();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Gd(e, i[1]) ? i[0] : (n.memoizedState = [
      t,
      e
    ], t);
  }
  function Lv(t, e) {
    var n = At();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Gd(e, i[1])) return i[0];
    if (i = t(), Qi) {
      Qn(true);
      try {
        t();
      } finally {
        Qn(false);
      }
    }
    return n.memoizedState = [
      i,
      e
    ], i;
  }
  function Id(t, e, n) {
    return n === void 0 || An & 1073741824 && !(I & 261930) ? t.memoizedState = e : (t.memoizedState = n, t = Tb(), Y.lanes |= t, hi |= t, n);
  }
  function Vv(t, e, n, i) {
    return ye(n, e) ? n : Qa.current !== null ? (t = Id(t, n, i), ye(t, e) || (Dt = true), t) : !(An & 42) || An & 1073741824 && !(I & 261930) ? (Dt = true, t.memoizedState = n) : (t = Tb(), Y.lanes |= t, hi |= t, e);
  }
  function Bv(t, e, n, i, a) {
    var s = et.p;
    et.p = s !== 0 && 8 > s ? s : 8;
    var r = P.T, o = {};
    P.T = o, Wd(t, false, e, n);
    try {
      var l = a(), u = P.S;
      if (u !== null && u(o, l), l !== null && typeof l == "object" && typeof l.then == "function") {
        var c = TE(l, i);
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
      et.p = s, r !== null && o.types !== null && (r.types = o.types), P.T = r;
    }
  }
  function OE() {
  }
  function uf(t, e, n, i) {
    if (t.tag !== 5) throw Error(M(476));
    var a = kv(t).queue;
    Bv(t, a, e, ki, n === null ? OE : function() {
      return Uv(t), n(i);
    });
  }
  function kv(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ki,
      baseState: ki,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cn,
        lastRenderedState: ki
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
        lastRenderedReducer: Cn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Uv(t) {
    var e = kv(t);
    e.next === null && (e = t.alternate.memoizedState), qs(t, e.next.queue, {}, pe());
  }
  function Jd() {
    return Yt(hr);
  }
  function Pv() {
    return At().memoizedState;
  }
  function Hv() {
    return At().memoizedState;
  }
  function DE(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = pe();
          t = ni(n);
          var i = ii(e, t, n);
          i !== null && (ie(i, e, n), Hs(i, e, n)), e = {
            cache: Bd()
          }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function NE(t, e, n) {
    var i = pe();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, tu(t) ? Yv(e, n) : (n = zd(t, e, n, i), n !== null && (ie(n, t, i), qv(n, e, i)));
  }
  function Gv(t, e, n) {
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
    if (tu(t)) Yv(e, a);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null)) try {
        var r = e.lastRenderedState, o = s(r, n);
        if (a.hasEagerState = true, a.eagerState = o, ye(o, r)) return Zl(t, e, a, 0), lt === null && Kl(), false;
      } catch {
      } finally {
      }
      if (n = zd(t, e, a, i), n !== null) return ie(n, t, i), qv(n, e, i), true;
    }
    return false;
  }
  function Wd(t, e, n, i) {
    if (i = {
      lane: 2,
      revertLane: lh(),
      gesture: null,
      action: i,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, tu(t)) {
      if (e) throw Error(M(479));
    } else e = zd(t, n, i, 2), e !== null && ie(e, t, 2);
  }
  function tu(t) {
    var e = t.alternate;
    return t === Y || e !== null && e === Y;
  }
  function Yv(t, e) {
    ka = ol = true;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function qv(t, e, n) {
    if (n & 4194048) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, O0(t, n);
    }
  }
  var cr = {
    readContext: Yt,
    use: Jl,
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
  cr.useEffectEvent = St;
  var Xv = {
    readContext: Yt,
    use: Jl,
    useCallback: function(t, e) {
      return Ft().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Yt,
    useEffect: sp,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([
        t
      ]) : null, No(4194308, 4, jv.bind(null, e, t), n);
    },
    useLayoutEffect: function(t, e) {
      return No(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      No(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Ft();
      e = e === void 0 ? null : e;
      var i = t();
      if (Qi) {
        Qn(true);
        try {
          t();
        } finally {
          Qn(false);
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
        if (Qi) {
          Qn(true);
          try {
            n(e);
          } finally {
            Qn(false);
          }
        }
      } else a = e;
      return i.memoizedState = i.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, i.queue = t, t = t.dispatch = NE.bind(null, Y, t), [
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
      t = of(t);
      var e = t.queue, n = Gv.bind(null, Y, e);
      return e.dispatch = n, [
        t.memoizedState,
        n
      ];
    },
    useDebugValue: $d,
    useDeferredValue: function(t, e) {
      var n = Ft();
      return Id(n, t, e);
    },
    useTransition: function() {
      var t = of(false);
      return t = Bv.bind(null, Y, t.queue, true, false), Ft().memoizedState = t, [
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
        I & 127 || vv(i, e, n);
      }
      a.memoizedState = n;
      var s = {
        value: n,
        getSnapshot: e
      };
      return a.queue = s, sp(xv.bind(null, i, s, t), [
        t
      ]), i.flags |= 2048, Ka(9, {
        destroy: void 0
      }, bv.bind(null, i, s, n, e), null), n;
    },
    useId: function() {
      var t = Ft(), e = lt.identifierPrefix;
      if (W) {
        var n = Ie, i = $e;
        n = (i & ~(1 << 32 - me(i) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = ll++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else n = EE++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Jd,
    useFormState: np,
    useActionState: np,
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
      return e.queue = n, e = Wd.bind(null, Y, true, n), n.dispatch = e, [
        t,
        e
      ];
    },
    useMemoCache: Qd,
    useCacheRefresh: function() {
      return Ft().memoizedState = DE.bind(null, Y);
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
  }, th = {
    readContext: Yt,
    use: Jl,
    useCallback: _v,
    useContext: Yt,
    useEffect: Zd,
    useImperativeHandle: zv,
    useInsertionEffect: Dv,
    useLayoutEffect: Nv,
    useMemo: Lv,
    useReducer: Do,
    useRef: Rv,
    useState: function() {
      return Do(Cn);
    },
    useDebugValue: $d,
    useDeferredValue: function(t, e) {
      var n = At();
      return Vv(n, ot.memoizedState, t, e);
    },
    useTransition: function() {
      var t = Do(Cn)[0], e = At().memoizedState;
      return [
        typeof t == "boolean" ? t : Vr(t),
        e
      ];
    },
    useSyncExternalStore: yv,
    useId: Pv,
    useHostTransitionStatus: Jd,
    useFormState: ip,
    useActionState: ip,
    useOptimistic: function(t, e) {
      var n = At();
      return Tv(n, ot, t, e);
    },
    useMemoCache: Qd,
    useCacheRefresh: Hv
  };
  th.useEffectEvent = Ov;
  var Fv = {
    readContext: Yt,
    use: Jl,
    useCallback: _v,
    useContext: Yt,
    useEffect: Zd,
    useImperativeHandle: zv,
    useInsertionEffect: Dv,
    useLayoutEffect: Nv,
    useMemo: Lv,
    useReducer: Hu,
    useRef: Rv,
    useState: function() {
      return Hu(Cn);
    },
    useDebugValue: $d,
    useDeferredValue: function(t, e) {
      var n = At();
      return ot === null ? Id(n, t, e) : Vv(n, ot.memoizedState, t, e);
    },
    useTransition: function() {
      var t = Hu(Cn)[0], e = At().memoizedState;
      return [
        typeof t == "boolean" ? t : Vr(t),
        e
      ];
    },
    useSyncExternalStore: yv,
    useId: Pv,
    useHostTransitionStatus: Jd,
    useFormState: ap,
    useActionState: ap,
    useOptimistic: function(t, e) {
      var n = At();
      return ot !== null ? Tv(n, ot, t, e) : (n.baseState = t, [
        t,
        n.queue.dispatch
      ]);
    },
    useMemoCache: Qd,
    useCacheRefresh: Hv
  };
  Fv.useEffectEvent = Ov;
  function Gu(t, e, n, i) {
    e = t.memoizedState, n = n(i, e), n = n == null ? e : gt({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var cf = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var i = pe(), a = ni(i);
      a.payload = e, n != null && (a.callback = n), e = ii(t, a, i), e !== null && (ie(e, t, i), Hs(e, t, i));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var i = pe(), a = ni(i);
      a.tag = 1, a.payload = e, n != null && (a.callback = n), e = ii(t, a, i), e !== null && (ie(e, t, i), Hs(e, t, i));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = pe(), i = ni(n);
      i.tag = 2, e != null && (i.callback = e), e = ii(t, i, n), e !== null && (ie(e, t, n), Hs(e, t, n));
    }
  };
  function rp(t, e, n, i, a, s, r) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, s, r) : e.prototype && e.prototype.isPureReactComponent ? !sr(n, i) || !sr(a, s) : true;
  }
  function op(t, e, n, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && cf.enqueueReplaceState(e, e.state, null);
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
  function Qv(t) {
    tl(t);
  }
  function Kv(t) {
    console.error(t);
  }
  function Zv(t) {
    tl(t);
  }
  function ul(t, e) {
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
  function lp(t, e, n) {
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
  function ff(t, e, n) {
    return n = ni(n), n.tag = 3, n.payload = {
      element: null
    }, n.callback = function() {
      ul(t, e);
    }, n;
  }
  function $v(t) {
    return t = ni(t), t.tag = 3, t;
  }
  function Iv(t, e, n, i) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var s = i.value;
      t.payload = function() {
        return a(s);
      }, t.callback = function() {
        lp(e, n, i);
      };
    }
    var r = n.stateNode;
    r !== null && typeof r.componentDidCatch == "function" && (t.callback = function() {
      lp(e, n, i), typeof a != "function" && (ai === null ? ai = /* @__PURE__ */ new Set([
        this
      ]) : ai.add(this));
      var o = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function jE(t, e, n, i, a) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (e = n.alternate, e !== null && os(e, n, a, true), n = ve.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Oe === null ? ml() : n.alternate === null && wt === 0 && (wt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, i === al ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([
              i
            ]) : e.add(i), Wu(t, i, a)), false;
          case 22:
            return n.flags |= 65536, i === al ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([
                i
              ])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([
              i
            ]) : n.add(i)), Wu(t, i, a)), false;
        }
        throw Error(M(435, n.tag));
      }
      return Wu(t, i, a), ml(), false;
    }
    if (W) return e = ve.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = a, i !== Ic && (t = Error(M(422), {
      cause: i
    }), or(Ae(t, n)))) : (i !== Ic && (e = Error(M(423), {
      cause: i
    }), or(Ae(e, n))), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, i = Ae(i, n), a = ff(t.stateNode, i, a), Pu(t, a), wt !== 4 && (wt = 2)), false;
    var s = Error(M(520), {
      cause: i
    });
    if (s = Ae(s, n), Qs === null ? Qs = [
      s
    ] : Qs.push(s), wt !== 4 && (wt = 2), e === null) return true;
    i = Ae(i, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = a & -a, n.lanes |= t, t = ff(n.stateNode, i, t), Pu(n, t), false;
        case 1:
          if (e = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (ai === null || !ai.has(s)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = $v(a), Iv(a, t, n, i), Pu(n, a), false;
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var eh = Error(M(461)), Dt = false;
  function Pt(t, e, n, i) {
    e.child = t === null ? fv(e, null, n, i) : Fi(e, t.child, n, i);
  }
  function up(t, e, n, i, a) {
    n = n.render;
    var s = e.ref;
    if ("ref" in i) {
      var r = {};
      for (var o in i) o !== "ref" && (r[o] = i[o]);
    } else r = i;
    return Xi(e), i = Yd(t, e, n, r, s, a), o = qd(), t !== null && !Dt ? (Xd(t, e, a), Mn(t, e, a)) : (W && o && Ld(e), e.flags |= 1, Pt(t, e, i, a), e.child);
  }
  function cp(t, e, n, i, a) {
    if (t === null) {
      var s = n.type;
      return typeof s == "function" && !_d(s) && s.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = s, Jv(t, e, s, i, a)) : (t = Ro(n.type, null, i, e, e.mode, a), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (s = t.child, !nh(t, a)) {
      var r = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : sr, n(r, i) && t.ref === e.ref) return Mn(t, e, a);
    }
    return e.flags |= 1, t = Sn(s, i), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Jv(t, e, n, i, a) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (sr(s, i) && t.ref === e.ref) if (Dt = false, e.pendingProps = i = s, nh(t, a)) t.flags & 131072 && (Dt = true);
      else return e.lanes = t.lanes, Mn(t, e, a);
    }
    return df(t, e, n, i, a);
  }
  function Wv(t, e, n, i) {
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
        return fp(t, e, s, n, i);
      }
      if (n & 536870912) e.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && Oo(e, s !== null ? s.cachePool : null), s !== null ? Wm(e, s) : sf(), mv(e);
      else return i = e.lanes = 536870912, fp(t, e, s !== null ? s.baseLanes | n : n, n, i);
    } else s !== null ? (Oo(e, s.cachePool), Wm(e, s), Xn(), e.memoizedState = null) : (t !== null && Oo(e, null), sf(), Xn());
    return Pt(t, e, a, n), e.child;
  }
  function zs(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function fp(t, e, n, i, a) {
    var s = kd();
    return s = s === null ? null : {
      parent: Ot._currentValue,
      pool: s
    }, e.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, t !== null && Oo(e, null), sf(), mv(e), t !== null && os(t, e, i, true), e.childLanes = a, null;
  }
  function jo(t, e) {
    return e = cl({
      mode: e.mode,
      children: e.children
    }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function dp(t, e, n) {
    return Fi(e, t.child, null, n), t = jo(e, e.pendingProps), t.flags |= 2, le(e), e.memoizedState = null, t;
  }
  function zE(t, e, n) {
    var i = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (W) {
        if (i.mode === "hidden") return t = jo(e, i), e.lanes = 536870912, zs(null, t);
        if (rf(e), (t = mt) ? (t = Xb(t, Ce), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ci !== null ? {
            id: $e,
            overflow: Ie
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = av(t), n.return = e, e.child = n, Gt = e, mt = null)) : t = null, t === null) throw fi(e);
        return e.lanes = 536870912, null;
      }
      return jo(e, i);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var r = s.dehydrated;
      if (rf(e), a) if (e.flags & 256) e.flags &= -257, e = dp(t, e, n);
      else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
      else throw Error(M(558));
      else if (Dt || os(t, e, n, false), a = (n & t.childLanes) !== 0, Dt || a) {
        if (i = lt, i !== null && (r = D0(i, n), r !== 0 && r !== s.retryLane)) throw s.retryLane = r, Wi(t, r), ie(i, t, r), eh;
        ml(), e = dp(t, e, n);
      } else t = s.treeContext, mt = De(r.nextSibling), Gt = e, W = true, ei = null, Ce = false, t !== null && rv(e, t), e = jo(e, i), e.flags |= 4096;
      return e;
    }
    return t = Sn(t.child, {
      mode: i.mode,
      children: i.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function zo(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(M(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function df(t, e, n, i, a) {
    return Xi(e), n = Yd(t, e, n, i, void 0, a), i = qd(), t !== null && !Dt ? (Xd(t, e, a), Mn(t, e, a)) : (W && i && Ld(e), e.flags |= 1, Pt(t, e, n, a), e.child);
  }
  function hp(t, e, n, i, a, s) {
    return Xi(e), e.updateQueue = null, n = gv(e, i, n, a), pv(t), i = qd(), t !== null && !Dt ? (Xd(t, e, s), Mn(t, e, s)) : (W && i && Ld(e), e.flags |= 1, Pt(t, e, n, s), e.child);
  }
  function mp(t, e, n, i, a) {
    if (Xi(e), e.stateNode === null) {
      var s = Ea, r = n.contextType;
      typeof r == "object" && r !== null && (s = Yt(r)), s = new n(i, s), e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = cf, e.stateNode = s, s._reactInternals = e, s = e.stateNode, s.props = i, s.state = e.memoizedState, s.refs = {}, Pd(e), r = n.contextType, s.context = typeof r == "object" && r !== null ? Yt(r) : Ea, s.state = e.memoizedState, r = n.getDerivedStateFromProps, typeof r == "function" && (Gu(e, n, r, i), s.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (r = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), r !== s.state && cf.enqueueReplaceState(s, s.state, null), Ys(e, i, s, a), Gs(), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = true;
    } else if (t === null) {
      s = e.stateNode;
      var o = e.memoizedProps, l = Ki(n, o);
      s.props = l;
      var u = s.context, c = n.contextType;
      r = Ea, typeof c == "object" && c !== null && (r = Yt(c));
      var f = n.getDerivedStateFromProps;
      c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o || u !== r) && op(e, s, i, r), Gn = false;
      var h = e.memoizedState;
      s.state = h, Ys(e, i, s, a), Gs(), u = e.memoizedState, o || h !== u || Gn ? (typeof f == "function" && (Gu(e, n, f, i), u = e.memoizedState), (l = Gn || rp(e, n, l, i, h, u, r)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = u), s.props = i, s.state = u, s.context = r, i = l) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = false);
    } else {
      s = e.stateNode, nf(t, e), r = e.memoizedProps, c = Ki(n, r), s.props = c, f = e.pendingProps, h = s.context, u = n.contextType, l = Ea, typeof u == "object" && u !== null && (l = Yt(u)), o = n.getDerivedStateFromProps, (u = typeof o == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (r !== f || h !== l) && op(e, s, i, l), Gn = false, h = e.memoizedState, s.state = h, Ys(e, i, s, a), Gs();
      var d = e.memoizedState;
      r !== f || h !== d || Gn || t !== null && t.dependencies !== null && il(t.dependencies) ? (typeof o == "function" && (Gu(e, n, o, i), d = e.memoizedState), (c = Gn || rp(e, n, c, i, h, d, l) || t !== null && t.dependencies !== null && il(t.dependencies)) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, d, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, d, l)), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || r === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = d), s.props = i, s.state = d, s.context = l, i = c) : (typeof s.componentDidUpdate != "function" || r === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), i = false);
    }
    return s = i, zo(t, e), i = (e.flags & 128) !== 0, s || i ? (s = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : s.render(), e.flags |= 1, t !== null && i ? (e.child = Fi(e, t.child, null, a), e.child = Fi(e, null, n, a)) : Pt(t, e, n, a), e.memoizedState = s.state, t = e.child) : t = Mn(t, e, a), t;
  }
  function pp(t, e, n, i) {
    return qi(), e.flags |= 256, Pt(t, e, n, i), e.child;
  }
  var Yu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function qu(t) {
    return {
      baseLanes: t,
      cachePool: lv()
    };
  }
  function Xu(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= fe), t;
  }
  function tb(t, e, n) {
    var i = e.pendingProps, a = false, s = (e.flags & 128) !== 0, r;
    if ((r = s) || (r = t !== null && t.memoizedState === null ? false : (Et.current & 2) !== 0), r && (a = true, e.flags &= -129), r = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (W) {
        if (a ? qn(e) : Xn(), (t = mt) ? (t = Xb(t, Ce), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ci !== null ? {
            id: $e,
            overflow: Ie
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = av(t), n.return = e, e.child = n, Gt = e, mt = null)) : t = null, t === null) throw fi(e);
        return Cf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var o = i.children;
      return i = i.fallback, a ? (Xn(), a = e.mode, o = cl({
        mode: "hidden",
        children: o
      }, a), i = Ui(i, a, n, null), o.return = e, i.return = e, o.sibling = i, e.child = o, i = e.child, i.memoizedState = qu(n), i.childLanes = Xu(t, r, n), e.memoizedState = Yu, zs(null, i)) : (qn(e), hf(e, o));
    }
    var l = t.memoizedState;
    if (l !== null && (o = l.dehydrated, o !== null)) {
      if (s) e.flags & 256 ? (qn(e), e.flags &= -257, e = Fu(t, e, n)) : e.memoizedState !== null ? (Xn(), e.child = t.child, e.flags |= 128, e = null) : (Xn(), o = i.fallback, a = e.mode, i = cl({
        mode: "visible",
        children: i.children
      }, a), o = Ui(o, a, n, null), o.flags |= 2, i.return = e, o.return = e, i.sibling = o, e.child = i, Fi(e, t.child, null, n), i = e.child, i.memoizedState = qu(n), i.childLanes = Xu(t, r, n), e.memoizedState = Yu, e = zs(null, i));
      else if (qn(e), Cf(o)) {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
        r = u, i = Error(M(419)), i.stack = "", i.digest = r, or({
          value: i,
          source: null,
          stack: null
        }), e = Fu(t, e, n);
      } else if (Dt || os(t, e, n, false), r = (n & t.childLanes) !== 0, Dt || r) {
        if (r = lt, r !== null && (i = D0(r, n), i !== 0 && i !== l.retryLane)) throw l.retryLane = i, Wi(t, i), ie(r, t, i), eh;
        Af(o) || ml(), e = Fu(t, e, n);
      } else Af(o) ? (e.flags |= 192, e.child = t.child, e = null) : (t = l.treeContext, mt = De(o.nextSibling), Gt = e, W = true, ei = null, Ce = false, t !== null && rv(e, t), e = hf(e, i.children), e.flags |= 4096);
      return e;
    }
    return a ? (Xn(), o = i.fallback, a = e.mode, l = t.child, u = l.sibling, i = Sn(l, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = l.subtreeFlags & 65011712, u !== null ? o = Sn(u, o) : (o = Ui(o, a, n, null), o.flags |= 2), o.return = e, i.return = e, i.sibling = o, e.child = i, zs(null, i), i = e.child, o = t.child.memoizedState, o === null ? o = qu(n) : (a = o.cachePool, a !== null ? (l = Ot._currentValue, a = a.parent !== l ? {
      parent: l,
      pool: l
    } : a) : a = lv(), o = {
      baseLanes: o.baseLanes | n,
      cachePool: a
    }), i.memoizedState = o, i.childLanes = Xu(t, r, n), e.memoizedState = Yu, zs(t.child, i)) : (qn(e), n = t.child, t = n.sibling, n = Sn(n, {
      mode: "visible",
      children: i.children
    }), n.return = e, n.sibling = null, t !== null && (r = e.deletions, r === null ? (e.deletions = [
      t
    ], e.flags |= 16) : r.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function hf(t, e) {
    return e = cl({
      mode: "visible",
      children: e
    }, t.mode), e.return = t, t.child = e;
  }
  function cl(t, e) {
    return t = ce(22, t, null, e), t.lanes = 0, t;
  }
  function Fu(t, e, n) {
    return Fi(e, t.child, null, n), t = hf(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function gp(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), Wc(t.return, e, n);
  }
  function Qu(t, e, n, i, a, s) {
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
  function eb(t, e, n) {
    var i = e.pendingProps, a = i.revealOrder, s = i.tail;
    i = i.children;
    var r = Et.current, o = (r & 2) !== 0;
    if (o ? (r = r & 1 | 2, e.flags |= 128) : r &= 1, ut(Et, r), Pt(t, e, i, n), i = W ? rr : 0, !o && t !== null && t.flags & 128) t: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && gp(t, n, e);
      else if (t.tag === 19) gp(t, n, e);
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
        for (n = e.child, a = null; n !== null; ) t = n.alternate, t !== null && rl(t) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = e.child, e.child = null) : (a = n.sibling, n.sibling = null), Qu(e, false, a, n, s, i);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, a = e.child, e.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && rl(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = n, n = a, a = t;
        }
        Qu(e, true, n, null, s, i);
        break;
      case "together":
        Qu(e, false, null, null, void 0, i);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Mn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), hi |= e.lanes, !(n & e.childLanes)) if (t !== null) {
      if (os(t, e, n, false), (n & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(M(153));
    if (e.child !== null) {
      for (t = e.child, n = Sn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = Sn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function nh(t, e) {
    return t.lanes & e ? true : (t = t.dependencies, !!(t !== null && il(t)));
  }
  function _E(t, e, n) {
    switch (e.tag) {
      case 3:
        $o(e, e.stateNode.containerInfo), Yn(e, Ot, t.memoizedState.cache), qi();
        break;
      case 27:
      case 5:
        Pc(e);
        break;
      case 4:
        $o(e, e.stateNode.containerInfo);
        break;
      case 10:
        Yn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return e.flags |= 128, rf(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null) return i.dehydrated !== null ? (qn(e), e.flags |= 128, null) : n & e.child.childLanes ? tb(t, e, n) : (qn(e), t = Mn(t, e, n), t !== null ? t.sibling : null);
        qn(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (i = (n & e.childLanes) !== 0, i || (os(t, e, n, false), i = (n & e.childLanes) !== 0), a) {
          if (i) return eb(t, e, n);
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ut(Et, Et.current), i) break;
        return null;
      case 22:
        return e.lanes = 0, Wv(t, e, n, e.pendingProps);
      case 24:
        Yn(e, Ot, t.memoizedState.cache);
    }
    return Mn(t, e, n);
  }
  function nb(t, e, n) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) Dt = true;
    else {
      if (!nh(t, n) && !(e.flags & 128)) return Dt = false, _E(t, e, n);
      Dt = !!(t.flags & 131072);
    }
    else Dt = false, W && e.flags & 1048576 && sv(e, rr, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (t = zi(e.elementType), e.type = t, typeof t == "function") _d(t) ? (i = Ki(t, i), e.tag = 1, e = mp(null, e, t, i, n)) : (e.tag = 0, e = df(null, e, t, i, n));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === xd) {
                e.tag = 11, e = up(null, e, t, i, n);
                break t;
              } else if (a === Sd) {
                e.tag = 14, e = cp(null, e, t, i, n);
                break t;
              }
            }
            throw e = kc(t) || t, Error(M(306, e, ""));
          }
        }
        return e;
      case 0:
        return df(t, e, e.type, e.pendingProps, n);
      case 1:
        return i = e.type, a = Ki(i, e.pendingProps), mp(t, e, i, a, n);
      case 3:
        t: {
          if ($o(e, e.stateNode.containerInfo), t === null) throw Error(M(387));
          i = e.pendingProps;
          var s = e.memoizedState;
          a = s.element, nf(t, e), Ys(e, i, null, n);
          var r = e.memoizedState;
          if (i = r.cache, Yn(e, Ot, i), i !== s.cache && tf(e, [
            Ot
          ], n, true), Gs(), i = r.element, s.isDehydrated) if (s = {
            element: i,
            isDehydrated: false,
            cache: r.cache
          }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
            e = pp(t, e, i, n);
            break t;
          } else if (i !== a) {
            a = Ae(Error(M(424)), e), or(a), e = pp(t, e, i, n);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (mt = De(t.firstChild), Gt = e, W = true, ei = null, Ce = true, n = fv(e, null, i, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          }
          else {
            if (qi(), i === a) {
              e = Mn(t, e, n);
              break t;
            }
            Pt(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return zo(t, e), t === null ? (n = Vp(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : W || (n = e.type, t = e.pendingProps, i = vl(ti.current).createElement(n), i[Ht] = e, i[ae] = t, qt(i, n, t), Bt(i), e.stateNode = i) : e.memoizedState = Vp(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Pc(e), t === null && W && (i = e.stateNode = Fb(e.type, e.pendingProps, ti.current), Gt = e, Ce = true, a = mt, Si(e.type) ? (Mf = a, mt = De(i.firstChild)) : mt = a), Pt(t, e, e.pendingProps.children, n), zo(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && W && ((a = i = mt) && (i = cA(i, e.type, e.pendingProps, Ce), i !== null ? (e.stateNode = i, Gt = e, mt = De(i.firstChild), Ce = false, a = true) : a = false), a || fi(e)), Pc(e), a = e.type, s = e.pendingProps, r = t !== null ? t.memoizedProps : null, i = s.children, Tf(a, s) ? i = null : r !== null && Tf(a, r) && (e.flags |= 32), e.memoizedState !== null && (a = Yd(t, e, AE, null, null, n), hr._currentValue = a), zo(t, e), Pt(t, e, i, n), e.child;
      case 6:
        return t === null && W && ((t = n = mt) && (n = fA(n, e.pendingProps, Ce), n !== null ? (e.stateNode = n, Gt = e, mt = null, t = true) : t = false), t || fi(e)), null;
      case 13:
        return tb(t, e, n);
      case 4:
        return $o(e, e.stateNode.containerInfo), i = e.pendingProps, t === null ? e.child = Fi(e, null, i, n) : Pt(t, e, i, n), e.child;
      case 11:
        return up(t, e, e.type, e.pendingProps, n);
      case 7:
        return Pt(t, e, e.pendingProps, n), e.child;
      case 8:
        return Pt(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Pt(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return i = e.pendingProps, Yn(e, e.type, i.value), Pt(t, e, i.children, n), e.child;
      case 9:
        return a = e.type._context, i = e.pendingProps.children, Xi(e), a = Yt(a), i = i(a), e.flags |= 1, Pt(t, e, i, n), e.child;
      case 14:
        return cp(t, e, e.type, e.pendingProps, n);
      case 15:
        return Jv(t, e, e.type, e.pendingProps, n);
      case 19:
        return eb(t, e, n);
      case 31:
        return zE(t, e, n);
      case 22:
        return Wv(t, e, n, e.pendingProps);
      case 24:
        return Xi(e), i = Yt(Ot), t === null ? (a = kd(), a === null && (a = lt, s = Bd(), a.pooledCache = s, s.refCount++, s !== null && (a.pooledCacheLanes |= n), a = s), e.memoizedState = {
          parent: i,
          cache: a
        }, Pd(e), Yn(e, Ot, a)) : (t.lanes & n && (nf(t, e), Ys(e, null, null, n), Gs()), a = t.memoizedState, s = e.memoizedState, a.parent !== i ? (a = {
          parent: i,
          cache: i
        }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), Yn(e, Ot, i)) : (i = s.cache, Yn(e, Ot, i), i !== a.cache && tf(e, [
          Ot
        ], n, true))), Pt(t, e, e.pendingProps.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(M(156, e.tag));
  }
  function fn(t) {
    t.flags |= 4;
  }
  function Ku(t, e, n, i, a) {
    if ((e = (t.mode & 32) !== 0) && (e = false), e) {
      if (t.flags |= 16777216, (a & 335544128) === a) if (t.stateNode.complete) t.flags |= 8192;
      else if (Cb()) t.flags |= 8192;
      else throw Hi = al, Ud;
    } else t.flags &= -16777217;
  }
  function yp(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
    else if (t.flags |= 16777216, !Zb(e)) if (Cb()) t.flags |= 8192;
    else throw Hi = al, Ud;
  }
  function ro(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? M0() : 536870912, t.lanes |= e, Za |= e);
  }
  function Es(t, e) {
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
  function LE(t, e, n) {
    var i = e.pendingProps;
    switch (Vd(e), e.tag) {
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
        return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), wn(Ot), Ya(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (ua(e) ? fn(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Uu())), dt(e), null;
      case 26:
        var a = e.type, s = e.memoizedState;
        return t === null ? (fn(e), s !== null ? (dt(e), yp(e, s)) : (dt(e), Ku(e, a, null, i, n))) : s ? s !== t.memoizedState ? (fn(e), dt(e), yp(e, s)) : (dt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && fn(e), dt(e), Ku(e, a, t, i, n)), null;
      case 27:
        if (Io(e), n = ti.current, a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && fn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(M(166));
            return dt(e), null;
          }
          t = tn.current, ua(e) ? Fm(e) : (t = Fb(a, i, n), e.stateNode = t, fn(e));
        }
        return dt(e), null;
      case 5:
        if (Io(e), a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && fn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(M(166));
            return dt(e), null;
          }
          if (s = tn.current, ua(e)) Fm(e);
          else {
            var r = vl(ti.current);
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
            s[Ht] = e, s[ae] = i;
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
            i && fn(e);
          }
        }
        return dt(e), Ku(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && fn(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(M(166));
          if (t = ti.current, ua(e)) {
            if (t = e.stateNode, n = e.memoizedProps, i = null, a = Gt, a !== null) switch (a.tag) {
              case 27:
              case 5:
                i = a.memoizedProps;
            }
            t[Ht] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === true || Gb(t.nodeValue, n)), t || fi(e, true);
          } else t = vl(t).createTextNode(i), t[Ht] = e, e.stateNode = t;
        }
        return dt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (i = ua(e), n !== null) {
            if (t === null) {
              if (!i) throw Error(M(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(M(557));
              t[Ht] = e;
            } else qi(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            dt(e), t = false;
          } else n = Uu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = true;
          if (!t) return e.flags & 256 ? (le(e), e) : (le(e), null);
          if (e.flags & 128) throw Error(M(558));
        }
        return dt(e), null;
      case 13:
        if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = ua(e), i !== null && i.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(M(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(M(317));
              a[Ht] = e;
            } else qi(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            dt(e), a = false;
          } else a = Uu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = true;
          if (!a) return e.flags & 256 ? (le(e), e) : (le(e), null);
        }
        return le(e), e.flags & 128 ? (e.lanes = n, e) : (n = i !== null, t = t !== null && t.memoizedState !== null, n && (i = e.child, a = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (a = i.alternate.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== a && (i.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), ro(e, e.updateQueue), dt(e), null);
      case 4:
        return Ya(), t === null && uh(e.stateNode.containerInfo), dt(e), null;
      case 10:
        return wn(e.type), dt(e), null;
      case 19:
        if (kt(Et), i = e.memoizedState, i === null) return dt(e), null;
        if (a = (e.flags & 128) !== 0, s = i.rendering, s === null) if (a) Es(i, false);
        else {
          if (wt !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
            if (s = rl(t), s !== null) {
              for (e.flags |= 128, Es(i, false), t = s.updateQueue, e.updateQueue = t, ro(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; ) iv(n, t), n = n.sibling;
              return ut(Et, Et.current & 1 | 2), W && gn(e, i.treeForkCount), e.child;
            }
            t = t.sibling;
          }
          i.tail !== null && de() > dl && (e.flags |= 128, a = true, Es(i, false), e.lanes = 4194304);
        }
        else {
          if (!a) if (t = rl(s), t !== null) {
            if (e.flags |= 128, a = true, t = t.updateQueue, e.updateQueue = t, ro(e, t), Es(i, true), i.tail === null && i.tailMode === "hidden" && !s.alternate && !W) return dt(e), null;
          } else 2 * de() - i.renderingStartTime > dl && n !== 536870912 && (e.flags |= 128, a = true, Es(i, false), e.lanes = 4194304);
          i.isBackwards ? (s.sibling = e.child, e.child = s) : (t = i.last, t !== null ? t.sibling = s : e.child = s, i.last = s);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = de(), t.sibling = null, n = Et.current, ut(Et, a ? n & 1 | 2 : n & 1), W && gn(e, i.treeForkCount), t) : (dt(e), null);
      case 22:
      case 23:
        return le(e), Hd(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? n & 536870912 && !(e.flags & 128) && (dt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : dt(e), n = e.updateQueue, n !== null && ro(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && kt(Pi), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), wn(Ot), dt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(M(156, e.tag));
  }
  function VE(t, e) {
    switch (Vd(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return wn(Ot), Ya(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Io(e), null;
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
        return kt(Et), null;
      case 4:
        return Ya(), null;
      case 10:
        return wn(e.type), null;
      case 22:
      case 23:
        return le(e), Hd(), t !== null && kt(Pi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return wn(Ot), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ib(t, e) {
    switch (Vd(e), e.tag) {
      case 3:
        wn(Ot), Ya();
        break;
      case 26:
      case 27:
      case 5:
        Io(e);
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
        kt(Et);
        break;
      case 10:
        wn(e.type);
        break;
      case 22:
      case 23:
        le(e), Hd(), t !== null && kt(Pi);
        break;
      case 24:
        wn(Ot);
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
  function di(t, e, n) {
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
  function ab(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        hv(e, n);
      } catch (i) {
        it(t, t.return, i);
      }
    }
  }
  function sb(t, e, n) {
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
  function Je(t, e) {
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
  function rb(t) {
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
  function Zu(t, e, n) {
    try {
      var i = t.stateNode;
      aA(i, t.type, n, e), i[ae] = e;
    } catch (a) {
      it(t, t.return, a);
    }
  }
  function ob(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Si(t.type) || t.tag === 4;
  }
  function $u(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || ob(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Si(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function mf(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = bn));
    else if (i !== 4 && (i === 27 && Si(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null)) for (mf(t, e, n), t = t.sibling; t !== null; ) mf(t, e, n), t = t.sibling;
  }
  function fl(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && (i === 27 && Si(t.type) && (n = t.stateNode), t = t.child, t !== null)) for (fl(t, e, n), t = t.sibling; t !== null; ) fl(t, e, n), t = t.sibling;
  }
  function lb(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var i = t.type, a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
      qt(e, i, n), e[Ht] = t, e[ae] = n;
    } catch (s) {
      it(t, t.return, s);
    }
  }
  var yn = false, Rt = false, Iu = false, vp = typeof WeakSet == "function" ? WeakSet : Set, Vt = null;
  function BE(t, e) {
    if (t = t.containerInfo, Sf = wl, t = Z0(t), Nd(t)) {
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
    for (wf = {
      focusedElem: t,
      selectionRange: n
    }, wl = false, Vt = e; Vt !== null; ) if (e = Vt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Vt = t;
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
              var y = Ki(n.type, a);
              t = i.getSnapshotBeforeUpdate(y, s), i.__reactInternalSnapshotBeforeUpdate = t;
            } catch (v) {
              it(n, n.return, v);
            }
          }
          break;
        case 3:
          if (t & 1024) {
            if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) Ef(t);
            else if (n === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Ef(t);
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
  function ub(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        hn(t, n), i & 4 && Br(5, n);
        break;
      case 1:
        if (hn(t, n), i & 4) if (t = n.stateNode, e === null) try {
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
        i & 64 && ab(n), i & 512 && Xs(n, n.return);
        break;
      case 3:
        if (hn(t, n), i & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null) switch (n.child.tag) {
            case 27:
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
          try {
            hv(t, e);
          } catch (r) {
            it(n, n.return, r);
          }
        }
        break;
      case 27:
        e === null && i & 4 && lb(n);
      case 26:
      case 5:
        hn(t, n), e === null && i & 4 && rb(n), i & 512 && Xs(n, n.return);
        break;
      case 12:
        hn(t, n);
        break;
      case 31:
        hn(t, n), i & 4 && db(t, n);
        break;
      case 13:
        hn(t, n), i & 4 && hb(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = FE.bind(null, n), dA(t, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || yn, !i) {
          e = e !== null && e.memoizedState !== null || Rt, a = yn;
          var s = Rt;
          yn = i, (Rt = e) && !s ? pn(t, n, (n.subtreeFlags & 8772) !== 0) : hn(t, n), yn = a, Rt = s;
        }
        break;
      case 30:
        break;
      default:
        hn(t, n);
    }
  }
  function cb(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, cb(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ad(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var vt = null, te = false;
  function dn(t, e, n) {
    for (n = n.child; n !== null; ) fb(t, e, n), n = n.sibling;
  }
  function fb(t, e, n) {
    if (he && typeof he.onCommitFiberUnmount == "function") try {
      he.onCommitFiberUnmount(Dr, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        Rt || Je(n, e), dn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Rt || Je(n, e);
        var i = vt, a = te;
        Si(n.type) && (vt = n.stateNode, te = false), dn(t, e, n), Zs(n.stateNode), vt = i, te = a;
        break;
      case 5:
        Rt || Je(n, e);
      case 6:
        if (i = vt, a = te, vt = null, dn(t, e, n), vt = i, te = a, vt !== null) if (te) try {
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
        vt !== null && (te ? (t = vt, Np(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), Wa(t)) : Np(vt, n.stateNode));
        break;
      case 4:
        i = vt, a = te, vt = n.stateNode.containerInfo, te = true, dn(t, e, n), vt = i, te = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        di(2, n, e), Rt || di(4, n, e), dn(t, e, n);
        break;
      case 1:
        Rt || (Je(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && sb(n, e, i)), dn(t, e, n);
        break;
      case 21:
        dn(t, e, n);
        break;
      case 22:
        Rt = (i = Rt) || n.memoizedState !== null, dn(t, e, n), Rt = i;
        break;
      default:
        dn(t, e, n);
    }
  }
  function db(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Wa(t);
      } catch (n) {
        it(e, e.return, n);
      }
    }
  }
  function hb(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Wa(t);
    } catch (n) {
      it(e, e.return, n);
    }
  }
  function kE(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new vp()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new vp()), e;
      default:
        throw Error(M(435, t.tag));
    }
  }
  function oo(t, e) {
    var n = kE(t);
    e.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var a = QE.bind(null, t, i);
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
            if (Si(o.type)) {
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
      fb(s, r, a), vt = null, te = false, s = a.alternate, s !== null && (s.return = null), a.return = null;
    }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) mb(e, t), e = e.sibling;
  }
  var Ge = null;
  function mb(t, e) {
    var n = t.alternate, i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jt(e, t), Wt(t), i & 4 && (di(3, t, t.return), Br(3, t), di(5, t, t.return));
        break;
      case 1:
        Jt(e, t), Wt(t), i & 512 && (Rt || n === null || Je(n, n.return)), i & 64 && yn && (t = t.updateQueue, t !== null && (i = t.callbacks, i !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
      case 26:
        var a = Ge;
        if (Jt(e, t), Wt(t), i & 512 && (Rt || n === null || Je(n, n.return)), i & 4) {
          var s = n !== null ? n.memoizedState : null;
          if (i = t.memoizedState, n === null) if (i === null) if (t.stateNode === null) {
            t: {
              i = t.type, n = t.memoizedProps, a = a.ownerDocument || a;
              e: switch (i) {
                case "title":
                  s = a.getElementsByTagName("title")[0], (!s || s[zr] || s[Ht] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = a.createElement(i), a.head.insertBefore(s, a.querySelector("head > title"))), qt(s, i, n), s[Ht] = t, Bt(s), i = s;
                  break t;
                case "link":
                  var r = kp("link", "href", a).get(i + (n.href || ""));
                  if (r) {
                    for (var o = 0; o < r.length; o++) if (s = r[o], s.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && s.getAttribute("rel") === (n.rel == null ? null : n.rel) && s.getAttribute("title") === (n.title == null ? null : n.title) && s.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      r.splice(o, 1);
                      break e;
                    }
                  }
                  s = a.createElement(i), qt(s, i, n), a.head.appendChild(s);
                  break;
                case "meta":
                  if (r = kp("meta", "content", a).get(i + (n.content || ""))) {
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
              s[Ht] = t, Bt(s), i = s;
            }
            t.stateNode = i;
          } else Up(a, t.type, t.stateNode);
          else t.stateNode = Bp(a, i, t.memoizedProps);
          else s !== i ? (s === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : s.count--, i === null ? Up(a, t.type, t.stateNode) : Bp(a, i, t.memoizedProps)) : i === null && t.stateNode !== null && Zu(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Jt(e, t), Wt(t), i & 512 && (Rt || n === null || Je(n, n.return)), n !== null && i & 4 && Zu(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (Jt(e, t), Wt(t), i & 512 && (Rt || n === null || Je(n, n.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            Xa(a, "");
          } catch (y) {
            it(t, t.return, y);
          }
        }
        i & 4 && t.stateNode != null && (a = t.memoizedProps, Zu(t, a, n !== null ? n.memoizedProps : a)), i & 1024 && (Iu = true);
        break;
      case 6:
        if (Jt(e, t), Wt(t), i & 4) {
          if (t.stateNode === null) throw Error(M(162));
          i = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = i;
          } catch (y) {
            it(t, t.return, y);
          }
        }
        break;
      case 3:
        if (Vo = null, a = Ge, Ge = bl(e.containerInfo), Jt(e, t), Ge = a, Wt(t), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Wa(e.containerInfo);
        } catch (y) {
          it(t, t.return, y);
        }
        Iu && (Iu = false, pb(t));
        break;
      case 4:
        i = Ge, Ge = bl(t.stateNode.containerInfo), Jt(e, t), Wt(t), Ge = i;
        break;
      case 12:
        Jt(e, t), Wt(t);
        break;
      case 31:
        Jt(e, t), Wt(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, oo(t, i)));
        break;
      case 13:
        Jt(e, t), Wt(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (eu = de()), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, oo(t, i)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var l = n !== null && n.memoizedState !== null, u = yn, c = Rt;
        if (yn = u || a, Rt = c || l, Jt(e, t), Rt = c, yn = u, Wt(t), i & 8192) t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (n === null || l || yn || Rt || _i(t)), n = null, e = t; ; ) {
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
              } catch (y) {
                it(l, l.return, y);
              }
            }
          } else if (e.tag === 6) {
            if (n === null) {
              l = e;
              try {
                l.stateNode.nodeValue = a ? "" : l.memoizedProps;
              } catch (y) {
                it(l, l.return, y);
              }
            }
          } else if (e.tag === 18) {
            if (n === null) {
              l = e;
              try {
                var d = l.stateNode;
                a ? jp(d, true) : jp(l.stateNode, false);
              } catch (y) {
                it(l, l.return, y);
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
        i & 4 && (i = t.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, oo(t, n))));
        break;
      case 19:
        Jt(e, t), Wt(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, oo(t, i)));
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
          if (ob(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(M(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, s = $u(t);
            fl(t, s, a);
            break;
          case 5:
            var r = n.stateNode;
            n.flags & 32 && (Xa(r, ""), n.flags &= -33);
            var o = $u(t);
            fl(t, o, r);
            break;
          case 3:
          case 4:
            var l = n.stateNode.containerInfo, u = $u(t);
            mf(t, u, l);
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
  function pb(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      pb(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function hn(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) ub(t, e.alternate, e), e = e.sibling;
  }
  function _i(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          di(4, e, e.return), _i(e);
          break;
        case 1:
          Je(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && sb(e, e.return, n), _i(e);
          break;
        case 27:
          Zs(e.stateNode);
        case 26:
        case 5:
          Je(e, e.return), _i(e);
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
  function pn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate, a = t, s = e, r = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          pn(a, s, n), Br(4, s);
          break;
        case 1:
          if (pn(a, s, n), i = s, a = i.stateNode, typeof a.componentDidMount == "function") try {
            a.componentDidMount();
          } catch (u) {
            it(i, i.return, u);
          }
          if (i = s, a = i.updateQueue, a !== null) {
            var o = i.stateNode;
            try {
              var l = a.shared.hiddenCallbacks;
              if (l !== null) for (a.shared.hiddenCallbacks = null, a = 0; a < l.length; a++) dv(l[a], o);
            } catch (u) {
              it(i, i.return, u);
            }
          }
          n && r & 64 && ab(s), Xs(s, s.return);
          break;
        case 27:
          lb(s);
        case 26:
        case 5:
          pn(a, s, n), n && i === null && r & 4 && rb(s), Xs(s, s.return);
          break;
        case 12:
          pn(a, s, n);
          break;
        case 31:
          pn(a, s, n), n && r & 4 && db(a, s);
          break;
        case 13:
          pn(a, s, n), n && r & 4 && hb(a, s);
          break;
        case 22:
          s.memoizedState === null && pn(a, s, n), Xs(s, s.return);
          break;
        case 30:
          break;
        default:
          pn(a, s, n);
      }
      e = e.sibling;
    }
  }
  function ih(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Lr(n));
  }
  function ah(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Lr(t));
  }
  function Be(t, e, n, i) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) gb(t, e, n, i), e = e.sibling;
  }
  function gb(t, e, n, i) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Be(t, e, n, i), a & 2048 && Br(9, e);
        break;
      case 1:
        Be(t, e, n, i);
        break;
      case 3:
        Be(t, e, n, i), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Lr(t)));
        break;
      case 12:
        if (a & 2048) {
          Be(t, e, n, i), t = e.stateNode;
          try {
            var s = e.memoizedProps, r = s.id, o = s.onPostCommit;
            typeof o == "function" && o(r, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (l) {
            it(e, e.return, l);
          }
        } else Be(t, e, n, i);
        break;
      case 31:
        Be(t, e, n, i);
        break;
      case 13:
        Be(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        s = e.stateNode, r = e.alternate, e.memoizedState !== null ? s._visibility & 2 ? Be(t, e, n, i) : Fs(t, e) : s._visibility & 2 ? Be(t, e, n, i) : (s._visibility |= 2, da(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || false)), a & 2048 && ih(r, e);
        break;
      case 24:
        Be(t, e, n, i), a & 2048 && ah(e.alternate, e);
        break;
      default:
        Be(t, e, n, i);
    }
  }
  function da(t, e, n, i, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
      var s = t, r = e, o = n, l = i, u = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          da(s, r, o, l, a), Br(8, r);
          break;
        case 23:
          break;
        case 22:
          var c = r.stateNode;
          r.memoizedState !== null ? c._visibility & 2 ? da(s, r, o, l, a) : Fs(s, r) : (c._visibility |= 2, da(s, r, o, l, a)), a && u & 2048 && ih(r.alternate, r);
          break;
        case 24:
          da(s, r, o, l, a), a && u & 2048 && ah(r.alternate, r);
          break;
        default:
          da(s, r, o, l, a);
      }
      e = e.sibling;
    }
  }
  function Fs(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var n = t, i = e, a = i.flags;
      switch (i.tag) {
        case 22:
          Fs(n, i), a & 2048 && ih(i.alternate, i);
          break;
        case 24:
          Fs(n, i), a & 2048 && ah(i.alternate, i);
          break;
        default:
          Fs(n, i);
      }
      e = e.sibling;
    }
  }
  var _s = 8192;
  function ca(t, e, n) {
    if (t.subtreeFlags & _s) for (t = t.child; t !== null; ) yb(t, e, n), t = t.sibling;
  }
  function yb(t, e, n) {
    switch (t.tag) {
      case 26:
        ca(t, e, n), t.flags & _s && t.memoizedState !== null && EA(n, Ge, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ca(t, e, n);
        break;
      case 3:
      case 4:
        var i = Ge;
        Ge = bl(t.stateNode.containerInfo), ca(t, e, n), Ge = i;
        break;
      case 22:
        t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = _s, _s = 16777216, ca(t, e, n), _s = i) : ca(t, e, n));
        break;
      default:
        ca(t, e, n);
    }
  }
  function vb(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function As(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var i = e[n];
        Vt = i, xb(i, t);
      }
      vb(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) bb(t), t = t.sibling;
  }
  function bb(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        As(t), t.flags & 2048 && di(9, t, t.return);
        break;
      case 3:
        As(t);
        break;
      case 12:
        As(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, _o(t)) : As(t);
        break;
      default:
        As(t);
    }
  }
  function _o(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var n = 0; n < e.length; n++) {
        var i = e[n];
        Vt = i, xb(i, t);
      }
      vb(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          di(8, e, e.return), _o(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, _o(e));
          break;
        default:
          _o(e);
      }
      t = t.sibling;
    }
  }
  function xb(t, e) {
    for (; Vt !== null; ) {
      var n = Vt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          di(8, n, e);
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
        if (cb(i), i === n) {
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
  var UE = {
    getCacheForType: function(t) {
      var e = Yt(Ot), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return Yt(Ot).controller.signal;
    }
  }, PE = typeof WeakMap == "function" ? WeakMap : Map, tt = 0, lt = null, K = null, I = 0, nt = 0, oe = null, Zn = false, us = false, sh = false, Rn = 0, wt = 0, hi = 0, Gi = 0, rh = 0, fe = 0, Za = 0, Qs = null, ee = null, pf = false, eu = 0, Sb = 0, dl = 1 / 0, hl = null, ai = null, _t = 0, si = null, $a = null, Tn = 0, gf = 0, yf = null, wb = null, Ks = 0, vf = null;
  function pe() {
    return tt & 2 && I !== 0 ? I & -I : P.T !== null ? lh() : N0();
  }
  function Tb() {
    if (fe === 0) if (!(I & 536870912) || W) {
      var t = Wr;
      Wr <<= 1, !(Wr & 3932160) && (Wr = 262144), fe = t;
    } else fe = 536870912;
    return t = ve.current, t !== null && (t.flags |= 32), fe;
  }
  function ie(t, e, n) {
    (t === lt && (nt === 2 || nt === 9) || t.cancelPendingCommit !== null) && (Ia(t, 0), $n(t, I, fe, false)), jr(t, n), (!(tt & 2) || t !== lt) && (t === lt && (!(tt & 2) && (Gi |= n), wt === 4 && $n(t, I, fe, false)), on(t));
  }
  function Eb(t, e, n) {
    if (tt & 6) throw Error(M(327));
    var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Nr(t, e), a = i ? YE(t, e) : Ju(t, e, true), s = i;
    do {
      if (a === 0) {
        us && !i && $n(t, e, 0, false);
        break;
      } else {
        if (n = t.current.alternate, s && !HE(n)) {
          a = Ju(t, e, false), s = false;
          continue;
        }
        if (a === 2) {
          if (s = e, t.errorRecoveryDisabledLanes & s) var r = 0;
          else r = t.pendingLanes & -536870913, r = r !== 0 ? r : r & 536870912 ? 536870912 : 0;
          if (r !== 0) {
            e = r;
            t: {
              var o = t;
              a = Qs;
              var l = o.current.memoizedState.isDehydrated;
              if (l && (Ia(o, r).flags |= 256), r = Ju(o, r, false), r !== 2) {
                if (sh && !l) {
                  o.errorRecoveryDisabledLanes |= s, Gi |= s, a = 4;
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
          Ia(t, 0), $n(t, e, 0, true);
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
              $n(i, e, fe, !Zn);
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
          if ((e & 62914560) === e && (a = eu + 300 - de(), 10 < a)) {
            if ($n(i, e, fe, !Zn), ql(i, 0, true) !== 0) break t;
            Tn = e, i.timeoutHandle = qb(bp.bind(null, i, n, ee, hl, pf, e, fe, Gi, Za, Zn, s, "Throttled", -0, 0), a);
            break t;
          }
          bp(i, n, ee, hl, pf, e, fe, Gi, Za, Zn, s, null, -0, 0);
        }
      }
      break;
    } while (true);
    on(t);
  }
  function bp(t, e, n, i, a, s, r, o, l, u, c, f, h, d) {
    if (t.timeoutHandle = -1, f = e.subtreeFlags, f & 8192 || (f & 16785408) === 16785408) {
      f = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: true,
        waitingForViewTransition: false,
        unsuspend: bn
      }, yb(e, s, f);
      var y = (s & 62914560) === s ? eu - de() : (s & 4194048) === s ? Sb - de() : 0;
      if (y = AA(f, y), y !== null) {
        Tn = s, t.cancelPendingCommit = y(Sp.bind(null, t, e, s, n, i, a, r, o, l, c, f, null, h, d)), $n(t, s, r, !u);
        return;
      }
    }
    Sp(t, e, s, n, i, a, r, o, l);
  }
  function HE(t) {
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
  function $n(t, e, n, i) {
    e &= ~rh, e &= ~Gi, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var s = 31 - me(a), r = 1 << s;
      i[s] = -1, a &= ~r;
    }
    n !== 0 && R0(t, n, e);
  }
  function nu() {
    return tt & 6 ? true : (kr(0), false);
  }
  function oh() {
    if (K !== null) {
      if (nt === 0) var t = K.return;
      else t = K, xn = ta = null, Fd(t), Ba = null, lr = 0, t = K;
      for (; t !== null; ) ib(t.alternate, t), t = t.return;
      K = null;
    }
  }
  function Ia(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, oA(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Tn = 0, oh(), lt = t, K = n = Sn(t.current, null), I = e, nt = 0, oe = null, Zn = false, us = Nr(t, e), sh = false, Za = fe = rh = Gi = hi = wt = 0, ee = Qs = null, pf = false, e & 8 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0) for (t = t.entanglements, i &= e; 0 < i; ) {
      var a = 31 - me(i), s = 1 << a;
      e |= t[a], i &= ~s;
    }
    return Rn = e, Kl(), n;
  }
  function Ab(t, e) {
    Y = null, P.H = cr, e === ls || e === $l ? (e = Im(), nt = 3) : e === Ud ? (e = Im(), nt = 4) : nt = e === eh ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, oe = e, K === null && (wt = 1, ul(t, Ae(e, t.current)));
  }
  function Cb() {
    var t = ve.current;
    return t === null ? true : (I & 4194048) === I ? Oe === null : (I & 62914560) === I || I & 536870912 ? t === Oe : false;
  }
  function Mb() {
    var t = P.H;
    return P.H = cr, t === null ? cr : t;
  }
  function Rb() {
    var t = P.A;
    return P.A = UE, t;
  }
  function ml() {
    wt = 4, Zn || (I & 4194048) !== I && ve.current !== null || (us = true), !(hi & 134217727) && !(Gi & 134217727) || lt === null || $n(lt, I, fe, false);
  }
  function Ju(t, e, n) {
    var i = tt;
    tt |= 2;
    var a = Mb(), s = Rb();
    (lt !== t || I !== e) && (hl = null, Ia(t, e)), e = false;
    var r = wt;
    t: do
      try {
        if (nt !== 0 && K !== null) {
          var o = K, l = oe;
          switch (nt) {
            case 8:
              oh(), r = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ve.current === null && (e = true);
              var u = nt;
              if (nt = 0, oe = null, Ma(t, o, l, u), n && us) {
                r = 0;
                break t;
              }
              break;
            default:
              u = nt, nt = 0, oe = null, Ma(t, o, l, u);
          }
        }
        GE(), r = wt;
        break;
      } catch (c) {
        Ab(t, c);
      }
    while (true);
    return e && t.shellSuspendCounter++, xn = ta = null, tt = i, P.H = a, P.A = s, K === null && (lt = null, I = 0, Kl()), r;
  }
  function GE() {
    for (; K !== null; ) Ob(K);
  }
  function YE(t, e) {
    var n = tt;
    tt |= 2;
    var i = Mb(), a = Rb();
    lt !== t || I !== e ? (hl = null, dl = de() + 500, Ia(t, e)) : us = Nr(t, e);
    t: do
      try {
        if (nt !== 0 && K !== null) {
          e = K;
          var s = oe;
          e: switch (nt) {
            case 1:
              nt = 0, oe = null, Ma(t, e, s, 1);
              break;
            case 2:
            case 9:
              if ($m(s)) {
                nt = 0, oe = null, xp(e);
                break;
              }
              e = function() {
                nt !== 2 && nt !== 9 || lt !== t || (nt = 7), on(t);
              }, s.then(e, e);
              break t;
            case 3:
              nt = 7;
              break t;
            case 4:
              nt = 5;
              break t;
            case 7:
              $m(s) ? (nt = 0, oe = null, xp(e)) : (nt = 0, oe = null, Ma(t, e, s, 7));
              break;
            case 5:
              var r = null;
              switch (K.tag) {
                case 26:
                  r = K.memoizedState;
                case 5:
                case 27:
                  var o = K;
                  if (r ? Zb(r) : o.stateNode.complete) {
                    nt = 0, oe = null;
                    var l = o.sibling;
                    if (l !== null) K = l;
                    else {
                      var u = o.return;
                      u !== null ? (K = u, iu(u)) : K = null;
                    }
                    break e;
                  }
              }
              nt = 0, oe = null, Ma(t, e, s, 5);
              break;
            case 6:
              nt = 0, oe = null, Ma(t, e, s, 6);
              break;
            case 8:
              oh(), wt = 6;
              break t;
            default:
              throw Error(M(462));
          }
        }
        qE();
        break;
      } catch (c) {
        Ab(t, c);
      }
    while (true);
    return xn = ta = null, P.H = i, P.A = a, tt = n, K !== null ? 0 : (lt = null, I = 0, Kl(), wt);
  }
  function qE() {
    for (; K !== null && !hT(); ) Ob(K);
  }
  function Ob(t) {
    var e = nb(t.alternate, t, Rn);
    t.memoizedProps = t.pendingProps, e === null ? iu(t) : K = e;
  }
  function xp(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = hp(n, e, e.pendingProps, e.type, void 0, I);
        break;
      case 11:
        e = hp(n, e, e.pendingProps, e.type.render, e.ref, I);
        break;
      case 5:
        Fd(e);
      default:
        ib(n, e), e = K = iv(e, Rn), e = nb(n, e, Rn);
    }
    t.memoizedProps = t.pendingProps, e === null ? iu(t) : K = e;
  }
  function Ma(t, e, n, i) {
    xn = ta = null, Fd(e), Ba = null, lr = 0;
    var a = e.return;
    try {
      if (jE(t, a, e, n, I)) {
        wt = 1, ul(t, Ae(n, t.current)), K = null;
        return;
      }
    } catch (s) {
      if (a !== null) throw K = a, s;
      wt = 1, ul(t, Ae(n, t.current)), K = null;
      return;
    }
    e.flags & 32768 ? (W || i === 1 ? t = true : us || I & 536870912 ? t = false : (Zn = t = true, (i === 2 || i === 9 || i === 3 || i === 6) && (i = ve.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Db(e, t)) : iu(e);
  }
  function iu(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        Db(e, Zn);
        return;
      }
      t = e.return;
      var n = LE(e.alternate, e, Rn);
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
  function Db(t, e) {
    do {
      var n = VE(t.alternate, t);
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
  function Sp(t, e, n, i, a, s, r, o, l) {
    t.cancelPendingCommit = null;
    do
      au();
    while (_t !== 0);
    if (tt & 6) throw Error(M(327));
    if (e !== null) {
      if (e === t.current) throw Error(M(177));
      if (s = e.lanes | e.childLanes, s |= jd, TT(t, n, s, r, o, l), t === lt && (K = lt = null, I = 0), $a = e, si = t, Tn = n, gf = s, yf = a, wb = i, e.subtreeFlags & 10256 || e.flags & 10256 ? (t.callbackNode = null, t.callbackPriority = 0, KE(Jo, function() {
        return Lb(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), i = (e.flags & 13878) !== 0, e.subtreeFlags & 13878 || i) {
        i = P.T, P.T = null, a = et.p, et.p = 2, r = tt, tt |= 4;
        try {
          BE(t, e, n);
        } finally {
          tt = r, et.p = a, P.T = i;
        }
      }
      _t = 1, Nb(), jb(), zb();
    }
  }
  function Nb() {
    if (_t === 1) {
      _t = 0;
      var t = si, e = $a, n = (e.flags & 13878) !== 0;
      if (e.subtreeFlags & 13878 || n) {
        n = P.T, P.T = null;
        var i = et.p;
        et.p = 2;
        var a = tt;
        tt |= 4;
        try {
          mb(e, t);
          var s = wf, r = Z0(t.containerInfo), o = s.focusedElem, l = s.selectionRange;
          if (r !== o && o && o.ownerDocument && K0(o.ownerDocument.documentElement, o)) {
            if (l !== null && Nd(o)) {
              var u = l.start, c = l.end;
              if (c === void 0 && (c = u), "selectionStart" in o) o.selectionStart = u, o.selectionEnd = Math.min(c, o.value.length);
              else {
                var f = o.ownerDocument || document, h = f && f.defaultView || window;
                if (h.getSelection) {
                  var d = h.getSelection(), y = o.textContent.length, v = Math.min(l.start, y), S = l.end === void 0 ? v : Math.min(l.end, y);
                  !d.extend && v > S && (r = S, S = v, v = r);
                  var p = Ym(o, v), m = Ym(o, S);
                  if (p && m && (d.rangeCount !== 1 || d.anchorNode !== p.node || d.anchorOffset !== p.offset || d.focusNode !== m.node || d.focusOffset !== m.offset)) {
                    var g = f.createRange();
                    g.setStart(p.node, p.offset), d.removeAllRanges(), v > S ? (d.addRange(g), d.extend(m.node, m.offset)) : (g.setEnd(m.node, m.offset), d.addRange(g));
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
              var w = f[o];
              w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
            }
          }
          wl = !!Sf, wf = Sf = null;
        } finally {
          tt = a, et.p = i, P.T = n;
        }
      }
      t.current = e, _t = 2;
    }
  }
  function jb() {
    if (_t === 2) {
      _t = 0;
      var t = si, e = $a, n = (e.flags & 8772) !== 0;
      if (e.subtreeFlags & 8772 || n) {
        n = P.T, P.T = null;
        var i = et.p;
        et.p = 2;
        var a = tt;
        tt |= 4;
        try {
          ub(t, e.alternate, e);
        } finally {
          tt = a, et.p = i, P.T = n;
        }
      }
      _t = 3;
    }
  }
  function zb() {
    if (_t === 4 || _t === 3) {
      _t = 0, mT();
      var t = si, e = $a, n = Tn, i = wb;
      e.subtreeFlags & 10256 || e.flags & 10256 ? _t = 5 : (_t = 0, $a = si = null, _b(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (ai = null), Ed(n), e = e.stateNode, he && typeof he.onCommitFiberRoot == "function") try {
        he.onCommitFiberRoot(Dr, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (i !== null) {
        e = P.T, a = et.p, et.p = 2, P.T = null;
        try {
          for (var s = t.onRecoverableError, r = 0; r < i.length; r++) {
            var o = i[r];
            s(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          P.T = e, et.p = a;
        }
      }
      Tn & 3 && au(), on(t), a = t.pendingLanes, n & 261930 && a & 42 ? t === vf ? Ks++ : (Ks = 0, vf = t) : Ks = 0, kr(0);
    }
  }
  function _b(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Lr(e)));
  }
  function au() {
    return Nb(), jb(), zb(), Lb();
  }
  function Lb() {
    if (_t !== 5) return false;
    var t = si, e = gf;
    gf = 0;
    var n = Ed(Tn), i = P.T, a = et.p;
    try {
      et.p = 32 > n ? 32 : n, P.T = null, n = yf, yf = null;
      var s = si, r = Tn;
      if (_t = 0, $a = si = null, Tn = 0, tt & 6) throw Error(M(331));
      var o = tt;
      if (tt |= 4, bb(s.current), gb(s, s.current, r, n), tt = o, kr(0, false), he && typeof he.onPostCommitFiberRoot == "function") try {
        he.onPostCommitFiberRoot(Dr, s);
      } catch {
      }
      return true;
    } finally {
      et.p = a, P.T = i, _b(t, e);
    }
  }
  function wp(t, e, n) {
    e = Ae(n, e), e = ff(t.stateNode, e, 2), t = ii(t, e, 2), t !== null && (jr(t, 2), on(t));
  }
  function it(t, e, n) {
    if (t.tag === 3) wp(t, t, n);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        wp(e, t, n);
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ai === null || !ai.has(i))) {
          t = Ae(n, t), n = $v(2), i = ii(e, n, 2), i !== null && (Iv(n, i, e, t), jr(i, 2), on(i));
          break;
        }
      }
      e = e.return;
    }
  }
  function Wu(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new PE();
      var a = /* @__PURE__ */ new Set();
      i.set(e, a);
    } else a = i.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(e, a));
    a.has(n) || (sh = true, a.add(n), t = XE.bind(null, t, e, n), e.then(t, t));
  }
  function XE(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, lt === t && (I & n) === n && (wt === 4 || wt === 3 && (I & 62914560) === I && 300 > de() - eu ? !(tt & 2) && Ia(t, 0) : rh |= n, Za === I && (Za = 0)), on(t);
  }
  function Vb(t, e) {
    e === 0 && (e = M0()), t = Wi(t, e), t !== null && (jr(t, e), on(t));
  }
  function FE(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Vb(t, n);
  }
  function QE(t, e) {
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
    i !== null && i.delete(e), Vb(t, n);
  }
  function KE(t, e) {
    return wd(t, e);
  }
  var pl = null, ha = null, bf = false, gl = false, tc = false, In = 0;
  function on(t) {
    t !== ha && t.next === null && (ha === null ? pl = ha = t : ha = ha.next = t), gl = true, bf || (bf = true, $E());
  }
  function kr(t, e) {
    if (!tc && gl) {
      tc = true;
      do
        for (var n = false, i = pl; i !== null; ) {
          if (t !== 0) {
            var a = i.pendingLanes;
            if (a === 0) var s = 0;
            else {
              var r = i.suspendedLanes, o = i.pingedLanes;
              s = (1 << 31 - me(42 | t) + 1) - 1, s &= a & ~(r & ~o), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = true, Tp(i, s));
          } else s = I, s = ql(i, i === lt ? s : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), !(s & 3) || Nr(i, s) || (n = true, Tp(i, s));
          i = i.next;
        }
      while (n);
      tc = false;
    }
  }
  function ZE() {
    Bb();
  }
  function Bb() {
    gl = bf = false;
    var t = 0;
    In !== 0 && rA() && (t = In);
    for (var e = de(), n = null, i = pl; i !== null; ) {
      var a = i.next, s = kb(i, e);
      s === 0 ? (i.next = null, n === null ? pl = a : n.next = a, a === null && (ha = n)) : (n = i, (t !== 0 || s & 3) && (gl = true)), i = a;
    }
    _t !== 0 && _t !== 5 || kr(t), In !== 0 && (In = 0);
  }
  function kb(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, a = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var r = 31 - me(s), o = 1 << r, l = a[r];
      l === -1 ? (!(o & n) || o & i) && (a[r] = wT(o, e)) : l <= e && (t.expiredLanes |= o), s &= ~o;
    }
    if (e = lt, n = I, n = ql(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), i = t.callbackNode, n === 0 || t === e && (nt === 2 || nt === 9) || t.cancelPendingCommit !== null) return i !== null && i !== null && Ru(i), t.callbackNode = null, t.callbackPriority = 0;
    if (!(n & 3) || Nr(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (i !== null && Ru(i), Ed(n)) {
        case 2:
        case 8:
          n = A0;
          break;
        case 32:
          n = Jo;
          break;
        case 268435456:
          n = C0;
          break;
        default:
          n = Jo;
      }
      return i = Ub.bind(null, t), n = wd(n, i), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return i !== null && i !== null && Ru(i), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Ub(t, e) {
    if (_t !== 0 && _t !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (au() && t.callbackNode !== n) return null;
    var i = I;
    return i = ql(t, t === lt ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), i === 0 ? null : (Eb(t, i, e), kb(t, de()), t.callbackNode != null && t.callbackNode === n ? Ub.bind(null, t) : null);
  }
  function Tp(t, e) {
    if (au()) return null;
    Eb(t, e, true);
  }
  function $E() {
    lA(function() {
      tt & 6 ? wd(E0, ZE) : Bb();
    });
  }
  function lh() {
    if (In === 0) {
      var t = Fa;
      t === 0 && (t = Jr, Jr <<= 1, !(Jr & 261888) && (Jr = 256)), In = t;
    }
    return In;
  }
  function Ep(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ao("" + t);
  }
  function Ap(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function IE(t, e, n, i, a) {
    if (e === "submit" && n && n.stateNode === a) {
      var s = Ep((a[ae] || null).action), r = i.submitter;
      r && (e = (e = r[ae] || null) ? Ep(e.formAction) : r.getAttribute("formAction"), e !== null && (s = e, r = null));
      var o = new Xl("action", "action", null, i, a);
      t.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (In !== 0) {
                  var l = r ? Ap(a, r) : new FormData(a);
                  uf(n, {
                    pending: true,
                    data: l,
                    method: a.method,
                    action: s
                  }, null, l);
                }
              } else typeof s == "function" && (o.preventDefault(), l = r ? Ap(a, r) : new FormData(a), uf(n, {
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
  for (var ec = 0; ec < $c.length; ec++) {
    var nc = $c[ec], JE = nc.toLowerCase(), WE = nc[0].toUpperCase() + nc.slice(1);
    Fe(JE, "on" + WE);
  }
  Fe(I0, "onAnimationEnd");
  Fe(J0, "onAnimationIteration");
  Fe(W0, "onAnimationStart");
  Fe("dblclick", "onDoubleClick");
  Fe("focusin", "onFocus");
  Fe("focusout", "onBlur");
  Fe(pE, "onTransitionRun");
  Fe(gE, "onTransitionStart");
  Fe(yE, "onTransitionCancel");
  Fe(tv, "onTransitionEnd");
  qa("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  qa("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  qa("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  qa("onPointerLeave", [
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
  var fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), tA = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fr));
  function Pb(t, e) {
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
            tl(c);
          }
          a.currentTarget = null, s = l;
        }
        else for (r = 0; r < i.length; r++) {
          if (o = i[r], l = o.instance, u = o.currentTarget, o = o.listener, l !== s && a.isPropagationStopped()) break t;
          s = o, a.currentTarget = u;
          try {
            s(a);
          } catch (c) {
            tl(c);
          }
          a.currentTarget = null, s = l;
        }
      }
    }
  }
  function Q(t, e) {
    var n = e[Gc];
    n === void 0 && (n = e[Gc] = /* @__PURE__ */ new Set());
    var i = t + "__bubble";
    n.has(i) || (Hb(e, t, 2, false), n.add(i));
  }
  function ic(t, e, n) {
    var i = 0;
    e && (i |= 4), Hb(n, t, i, e);
  }
  var lo = "_reactListening" + Math.random().toString(36).slice(2);
  function uh(t) {
    if (!t[lo]) {
      t[lo] = true, j0.forEach(function(n) {
        n !== "selectionchange" && (tA.has(n) || ic(n, false, t), ic(n, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[lo] || (e[lo] = true, ic("selectionchange", false, e));
    }
  }
  function Hb(t, e, n, i) {
    switch (tx(e)) {
      case 2:
        var a = RA;
        break;
      case 8:
        a = OA;
        break;
      default:
        a = hh;
    }
    n = a.bind(null, e, n, t), a = void 0, !Qc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = true), i ? a !== void 0 ? t.addEventListener(e, n, {
      capture: true,
      passive: a
    }) : t.addEventListener(e, n, true) : a !== void 0 ? t.addEventListener(e, n, {
      passive: a
    }) : t.addEventListener(e, n, false);
  }
  function ac(t, e, n, i, a) {
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
          if (r = va(o), r === null) return;
          if (l = r.tag, l === 5 || l === 6 || l === 26 || l === 27) {
            i = s = r;
            continue t;
          }
          o = o.parentNode;
        }
      }
      i = i.return;
    }
    P0(function() {
      var u = s, c = Md(n), f = [];
      t: {
        var h = ev.get(t);
        if (h !== void 0) {
          var d = Xl, y = t;
          switch (t) {
            case "keypress":
              if (Mo(n) === 0) break t;
            case "keydown":
            case "keyup":
              d = QT;
              break;
            case "focusin":
              y = "focus", d = zu;
              break;
            case "focusout":
              y = "blur", d = zu;
              break;
            case "beforeblur":
            case "afterblur":
              d = zu;
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
              d = zm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              d = LT;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              d = $T;
              break;
            case I0:
            case J0:
            case W0:
              d = kT;
              break;
            case tv:
              d = JT;
              break;
            case "scroll":
            case "scrollend":
              d = zT;
              break;
            case "wheel":
              d = tE;
              break;
            case "copy":
            case "cut":
            case "paste":
              d = PT;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              d = Lm;
              break;
            case "toggle":
            case "beforetoggle":
              d = nE;
          }
          var v = (e & 4) !== 0, S = !v && (t === "scroll" || t === "scrollend"), p = v ? h !== null ? h + "Capture" : null : h;
          v = [];
          for (var m = u, g; m !== null; ) {
            var w = m;
            if (g = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || g === null || p === null || (w = ir(m, p), w != null && v.push(dr(m, w, g))), S) break;
            m = m.return;
          }
          0 < v.length && (h = new d(h, y, null, n, c), f.push({
            event: h,
            listeners: v
          }));
        }
      }
      if (!(e & 7)) {
        t: {
          if (h = t === "mouseover" || t === "pointerover", d = t === "mouseout" || t === "pointerout", h && n !== Fc && (y = n.relatedTarget || n.fromElement) && (va(y) || y[ss])) break t;
          if ((d || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, d ? (y = n.relatedTarget || n.toElement, d = u, y = y ? va(y) : null, y !== null && (S = Or(y), v = y.tag, y !== S || v !== 5 && v !== 27 && v !== 6) && (y = null)) : (d = null, y = u), d !== y)) {
            if (v = zm, w = "onMouseLeave", p = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (v = Lm, w = "onPointerLeave", p = "onPointerEnter", m = "pointer"), S = d == null ? h : js(d), g = y == null ? h : js(y), h = new v(w, m + "leave", d, n, c), h.target = S, h.relatedTarget = g, w = null, va(c) === u && (v = new v(p, m + "enter", y, n, c), v.target = g, v.relatedTarget = S, w = v), S = w, d && y) e: {
              for (v = eA, p = d, m = y, g = 0, w = p; w; w = v(w)) g++;
              w = 0;
              for (var T = m; T; T = v(T)) w++;
              for (; 0 < g - w; ) p = v(p), g--;
              for (; 0 < w - g; ) m = v(m), w--;
              for (; g--; ) {
                if (p === m || m !== null && p === m.alternate) {
                  v = p;
                  break e;
                }
                p = v(p), m = v(m);
              }
              v = null;
            }
            else v = null;
            d !== null && Cp(f, h, d, v, false), y !== null && S !== null && Cp(f, S, y, v, true);
          }
        }
        t: {
          if (h = u ? js(u) : window, d = h.nodeName && h.nodeName.toLowerCase(), d === "select" || d === "input" && h.type === "file") var A = Um;
          else if (km(h)) if (F0) A = dE;
          else {
            A = cE;
            var E = uE;
          }
          else d = h.nodeName, !d || d.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? u && Cd(u.elementType) && (A = Um) : A = fE;
          if (A && (A = A(t, u))) {
            X0(f, A, n, c);
            break t;
          }
          E && E(t, h, u), t === "focusout" && u && h.type === "number" && u.memoizedProps.value != null && Xc(h, "number", h.value);
        }
        switch (E = u ? js(u) : window, t) {
          case "focusin":
            (km(E) || E.contentEditable === "true") && (Sa = E, Kc = u, Us = null);
            break;
          case "focusout":
            Us = Kc = Sa = null;
            break;
          case "mousedown":
            Zc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zc = false, qm(f, n, c);
            break;
          case "selectionchange":
            if (mE) break;
          case "keydown":
          case "keyup":
            qm(f, n, c);
        }
        var C;
        if (Dd) t: {
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
        else xa ? Y0(t, n) && (j = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
        j && (G0 && n.locale !== "ko" && (xa || j !== "onCompositionStart" ? j === "onCompositionEnd" && xa && (C = H0()) : (Kn = c, Rd = "value" in Kn ? Kn.value : Kn.textContent, xa = true)), E = yl(u, j), 0 < E.length && (j = new _m(j, t, null, n, c), f.push({
          event: j,
          listeners: E
        }), C ? j.data = C : (C = q0(n), C !== null && (j.data = C)))), (C = aE ? sE(t, n) : rE(t, n)) && (j = yl(u, "onBeforeInput"), 0 < j.length && (E = new _m("onBeforeInput", "beforeinput", null, n, c), f.push({
          event: E,
          listeners: j
        }), E.data = C)), IE(f, t, u, n, c);
      }
      Pb(f, e);
    });
  }
  function dr(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function yl(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var a = t, s = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || s === null || (a = ir(t, n), a != null && i.unshift(dr(t, a, s)), a = ir(t, e), a != null && i.push(dr(t, a, s))), t.tag === 3) return i;
      t = t.return;
    }
    return [];
  }
  function eA(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Cp(t, e, n, i, a) {
    for (var s = e._reactName, r = []; n !== null && n !== i; ) {
      var o = n, l = o.alternate, u = o.stateNode;
      if (o = o.tag, l !== null && l === i) break;
      o !== 5 && o !== 26 && o !== 27 || u === null || (l = u, a ? (u = ir(n, s), u != null && r.unshift(dr(n, u, l))) : a || (u = ir(n, s), u != null && r.push(dr(n, u, l)))), n = n.return;
    }
    r.length !== 0 && t.push({
      event: e,
      listeners: r
    });
  }
  var nA = /\r\n?/g, iA = /\u0000|\uFFFD/g;
  function Mp(t) {
    return (typeof t == "string" ? t : "" + t).replace(nA, `
`).replace(iA, "");
  }
  function Gb(t, e) {
    return e = Mp(e), Mp(t) === e;
  }
  function rt(t, e, n, i, a, s) {
    switch (n) {
      case "children":
        typeof i == "string" ? e === "body" || e === "textarea" && i === "" || Xa(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && Xa(t, "" + i);
        break;
      case "className":
        eo(t, "class", i);
        break;
      case "tabIndex":
        eo(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        eo(t, n, i);
        break;
      case "style":
        U0(t, i, s);
        break;
      case "data":
        if (e !== "object") {
          eo(t, "data", i);
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
        i = Ao("" + i), t.setAttribute(n, i);
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
        i = Ao("" + i), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = bn);
        break;
      case "onScroll":
        i != null && Q("scroll", t);
        break;
      case "onScrollEnd":
        i != null && Q("scrollend", t);
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
        n = Ao("" + i), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
        Q("beforetoggle", t), Q("toggle", t), Eo(t, "popover", i);
        break;
      case "xlinkActuate":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        cn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        cn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        cn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Eo(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = NT.get(n) || n, Eo(t, n, i));
    }
  }
  function xf(t, e, n, i, a, s) {
    switch (n) {
      case "style":
        U0(t, i, s);
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
        typeof i == "string" ? Xa(t, i) : (typeof i == "number" || typeof i == "bigint") && Xa(t, "" + i);
        break;
      case "onScroll":
        i != null && Q("scroll", t);
        break;
      case "onScrollEnd":
        i != null && Q("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = bn);
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
        if (!z0.hasOwnProperty(n)) t: {
          if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), e = n.slice(2, a ? n.length - 7 : void 0), s = t[ae] || null, s = s != null ? s[n] : null, typeof s == "function" && t.removeEventListener(e, s, a), typeof i == "function")) {
            typeof s != "function" && s !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, i, a);
            break t;
          }
          n in t ? t[n] = i : i === true ? t.setAttribute(n, "") : Eo(t, n, i);
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
        Q("error", t), Q("load", t);
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
        Q("invalid", t);
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
        V0(t, s, o, l, u, r, a, false);
        return;
      case "select":
        Q("invalid", t), i = r = s = null;
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
        e = s, n = r, t.multiple = !!i, e != null ? _a(t, !!i, e, false) : n != null && _a(t, !!i, n, true);
        return;
      case "textarea":
        Q("invalid", t), s = a = i = null;
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
        k0(t, i, a, s);
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
        Q("beforetoggle", t), Q("toggle", t), Q("cancel", t), Q("close", t);
        break;
      case "iframe":
      case "object":
        Q("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < fr.length; i++) Q(fr[i], t);
        break;
      case "image":
        Q("error", t), Q("load", t);
        break;
      case "details":
        Q("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Q("error", t), Q("load", t);
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
        if (Cd(e)) {
          for (c in n) n.hasOwnProperty(c) && (i = n[c], i !== void 0 && xf(t, e, c, i, n, void 0));
          return;
        }
    }
    for (o in n) n.hasOwnProperty(o) && (i = n[o], i != null && rt(t, e, o, i, n, null));
  }
  function aA(t, e, n, i) {
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
        qc(t, r, o, l, u, c, s, a);
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
        e = o, n = r, i = d, h != null ? _a(t, !!n, h, false) : !!i != !!n && (e != null ? _a(t, !!n, e, true) : _a(t, !!n, n ? [] : "", false));
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
        B0(t, h, d);
        return;
      case "option":
        for (var y in n) if (h = n[y], n.hasOwnProperty(y) && h != null && !i.hasOwnProperty(y)) switch (y) {
          case "selected":
            t.selected = false;
            break;
          default:
            rt(t, e, y, null, i, h);
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
        for (var v in n) h = n[v], n.hasOwnProperty(v) && h != null && !i.hasOwnProperty(v) && rt(t, e, v, null, i, h);
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
        if (Cd(e)) {
          for (var S in n) h = n[S], n.hasOwnProperty(S) && h !== void 0 && !i.hasOwnProperty(S) && xf(t, e, S, void 0, i, h);
          for (c in i) h = i[c], d = n[c], !i.hasOwnProperty(c) || h === d || h === void 0 && d === void 0 || xf(t, e, c, h, i, d);
          return;
        }
    }
    for (var p in n) h = n[p], n.hasOwnProperty(p) && h != null && !i.hasOwnProperty(p) && rt(t, e, p, null, i, h);
    for (f in i) h = i[f], d = n[f], !i.hasOwnProperty(f) || h === d || h == null && d == null || rt(t, e, f, h, i, d);
  }
  function Rp(t) {
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
  function sA() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var a = n[i], s = a.transferSize, r = a.initiatorType, o = a.duration;
        if (s && o && Rp(r)) {
          for (r = 0, o = a.responseEnd, i += 1; i < n.length; i++) {
            var l = n[i], u = l.startTime;
            if (u > o) break;
            var c = l.transferSize, f = l.initiatorType;
            c && Rp(f) && (l = l.responseEnd, r += c * (l < o ? 1 : (o - u) / (l - u)));
          }
          if (--i, e += 8 * (s + r) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Sf = null, wf = null;
  function vl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Op(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Yb(t, e) {
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
  function Tf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var sc = null;
  function rA() {
    var t = window.event;
    return t && t.type === "popstate" ? t === sc ? false : (sc = t, true) : (sc = null, false);
  }
  var qb = typeof setTimeout == "function" ? setTimeout : void 0, oA = typeof clearTimeout == "function" ? clearTimeout : void 0, Dp = typeof Promise == "function" ? Promise : void 0, lA = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dp < "u" ? function(t) {
    return Dp.resolve(null).then(t).catch(uA);
  } : qb;
  function uA(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Si(t) {
    return t === "head";
  }
  function Np(t, e) {
    var n = e, i = 0;
    do {
      var a = n.nextSibling;
      if (t.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$" || n === "/&") {
        if (i === 0) {
          t.removeChild(a), Wa(e);
          return;
        }
        i--;
      } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") i++;
      else if (n === "html") Zs(t.ownerDocument.documentElement);
      else if (n === "head") {
        n = t.ownerDocument.head, Zs(n);
        for (var s = n.firstChild; s; ) {
          var r = s.nextSibling, o = s.nodeName;
          s[zr] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = r;
        }
      } else n === "body" && Zs(t.ownerDocument.body);
      n = a;
    } while (n);
    Wa(e);
  }
  function jp(t, e) {
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
  function Ef(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ef(n), Ad(n);
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
  function cA(t, e, n, i) {
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
      if (t = De(t.nextSibling), t === null) break;
    }
    return null;
  }
  function fA(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = De(t.nextSibling), t === null)) return null;
    return t;
  }
  function Xb(t, e) {
    for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = De(t.nextSibling), t === null)) return null;
    return t;
  }
  function Af(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Cf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function dA(t, e) {
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
  var Mf = null;
  function zp(t) {
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
  function _p(t) {
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
    switch (e = vl(n), t) {
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
    Ad(t);
  }
  var ze = /* @__PURE__ */ new Map(), Lp = /* @__PURE__ */ new Set();
  function bl(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var jn = et.d;
  et.d = {
    f: hA,
    r: mA,
    D: pA,
    C: gA,
    L: yA,
    m: vA,
    X: xA,
    S: bA,
    M: SA
  };
  function hA() {
    var t = jn.f(), e = nu();
    return t || e;
  }
  function mA(t) {
    var e = rs(t);
    e !== null && e.tag === 5 && e.type === "form" ? Uv(e) : jn.r(t);
  }
  var cs = typeof document > "u" ? null : document;
  function Qb(t, e, n) {
    var i = cs;
    if (i && typeof e == "string" && e) {
      var a = Ee(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Lp.has(a) || (Lp.add(a), t = {
        rel: t,
        crossOrigin: n,
        href: e
      }, i.querySelector(a) === null && (e = i.createElement("link"), qt(e, "link", t), Bt(e), i.head.appendChild(e)));
    }
  }
  function pA(t) {
    jn.D(t), Qb("dns-prefetch", t, null);
  }
  function gA(t, e) {
    jn.C(t, e), Qb("preconnect", t, e);
  }
  function yA(t, e, n) {
    jn.L(t, e, n);
    var i = cs;
    if (i && t && e) {
      var a = 'link[rel="preload"][as="' + Ee(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + Ee(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + Ee(n.imageSizes) + '"]')) : a += '[href="' + Ee(t) + '"]';
      var s = a;
      switch (e) {
        case "style":
          s = Ja(t);
          break;
        case "script":
          s = fs(t);
      }
      ze.has(s) || (t = gt({
        rel: "preload",
        href: e === "image" && n && n.imageSrcSet ? void 0 : t,
        as: e
      }, n), ze.set(s, t), i.querySelector(a) !== null || e === "style" && i.querySelector(Ur(s)) || e === "script" && i.querySelector(Pr(s)) || (e = i.createElement("link"), qt(e, "link", t), Bt(e), i.head.appendChild(e)));
    }
  }
  function vA(t, e) {
    jn.m(t, e);
    var n = cs;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Ee(i) + '"][href="' + Ee(t) + '"]', s = a;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = fs(t);
      }
      if (!ze.has(s) && (t = gt({
        rel: "modulepreload",
        href: t
      }, e), ze.set(s, t), n.querySelector(a) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Pr(s))) return;
        }
        i = n.createElement("link"), qt(i, "link", t), Bt(i), n.head.appendChild(i);
      }
    }
  }
  function bA(t, e, n) {
    jn.S(t, e, n);
    var i = cs;
    if (i && t) {
      var a = za(i).hoistableStyles, s = Ja(t);
      e = e || "default";
      var r = a.get(s);
      if (!r) {
        var o = {
          loading: 0,
          preload: null
        };
        if (r = i.querySelector(Ur(s))) o.loading = 5;
        else {
          t = gt({
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          }, n), (n = ze.get(s)) && ch(t, n);
          var l = r = i.createElement("link");
          Bt(l), qt(l, "link", t), l._p = new Promise(function(u, c) {
            l.onload = u, l.onerror = c;
          }), l.addEventListener("load", function() {
            o.loading |= 1;
          }), l.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, Lo(r, e, i);
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
  function xA(t, e) {
    jn.X(t, e);
    var n = cs;
    if (n && t) {
      var i = za(n).hoistableScripts, a = fs(t), s = i.get(a);
      s || (s = n.querySelector(Pr(a)), s || (t = gt({
        src: t,
        async: true
      }, e), (e = ze.get(a)) && fh(t, e), s = n.createElement("script"), Bt(s), qt(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(a, s));
    }
  }
  function SA(t, e) {
    jn.M(t, e);
    var n = cs;
    if (n && t) {
      var i = za(n).hoistableScripts, a = fs(t), s = i.get(a);
      s || (s = n.querySelector(Pr(a)), s || (t = gt({
        src: t,
        async: true,
        type: "module"
      }, e), (e = ze.get(a)) && fh(t, e), s = n.createElement("script"), Bt(s), qt(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(a, s));
    }
  }
  function Vp(t, e, n, i) {
    var a = (a = ti.current) ? bl(a) : null;
    if (!a) throw Error(M(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = Ja(n.href), n = za(a).hoistableStyles, i = n.get(e), i || (i = {
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
          t = Ja(n.href);
          var s = za(a).hoistableStyles, r = s.get(t);
          if (r || (a = a.ownerDocument || a, r = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, s.set(t, r), (s = a.querySelector(Ur(t))) && !s._p && (r.instance = s, r.state.loading = 5), ze.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, ze.set(t, n), s || wA(a, t, n, r.state))), e && i === null) throw Error(M(528, ""));
          return r;
        }
        if (e && i !== null) throw Error(M(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = fs(n), n = za(a).hoistableScripts, i = n.get(e), i || (i = {
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
  function Ja(t) {
    return 'href="' + Ee(t) + '"';
  }
  function Ur(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Kb(t) {
    return gt({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function wA(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
      return i.loading |= 1;
    }), e.addEventListener("error", function() {
      return i.loading |= 2;
    }), qt(e, "link", n), Bt(e), t.head.appendChild(e));
  }
  function fs(t) {
    return '[src="' + Ee(t) + '"]';
  }
  function Pr(t) {
    return "script[async]" + t;
  }
  function Bp(t, e, n) {
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
        return i = (t.ownerDocument || t).createElement("style"), Bt(i), qt(i, "style", a), Lo(i, n.precedence, t), e.instance = i;
      case "stylesheet":
        a = Ja(n.href);
        var s = t.querySelector(Ur(a));
        if (s) return e.state.loading |= 4, e.instance = s, Bt(s), s;
        i = Kb(n), (a = ze.get(a)) && ch(i, a), s = (t.ownerDocument || t).createElement("link"), Bt(s);
        var r = s;
        return r._p = new Promise(function(o, l) {
          r.onload = o, r.onerror = l;
        }), qt(s, "link", i), e.state.loading |= 4, Lo(s, n.precedence, t), e.instance = s;
      case "script":
        return s = fs(n.src), (a = t.querySelector(Pr(s))) ? (e.instance = a, Bt(a), a) : (i = n, (a = ze.get(s)) && (i = gt({}, n), fh(i, a)), t = t.ownerDocument || t, a = t.createElement("script"), Bt(a), qt(a, "link", i), t.head.appendChild(a), e.instance = a);
      case "void":
        return null;
      default:
        throw Error(M(443, e.type));
    }
    else e.type === "stylesheet" && !(e.state.loading & 4) && (i = e.instance, e.state.loading |= 4, Lo(i, n.precedence, t));
    return e.instance;
  }
  function Lo(t, e, n) {
    for (var i = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = i.length ? i[i.length - 1] : null, s = a, r = 0; r < i.length; r++) {
      var o = i[r];
      if (o.dataset.precedence === e) s = o;
      else if (s !== a) break;
    }
    s ? s.parentNode.insertBefore(t, s.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function ch(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function fh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Vo = null;
  function kp(t, e, n) {
    if (Vo === null) {
      var i = /* @__PURE__ */ new Map(), a = Vo = /* @__PURE__ */ new Map();
      a.set(n, i);
    } else a = Vo, i = a.get(n), i || (i = /* @__PURE__ */ new Map(), a.set(n, i));
    if (i.has(t)) return i;
    for (i.set(t, null), n = n.getElementsByTagName(t), a = 0; a < n.length; a++) {
      var s = n[a];
      if (!(s[zr] || s[Ht] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function Up(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null);
  }
  function TA(t, e, n) {
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
  function Zb(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  function EA(t, e, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== false) && !(n.state.loading & 4)) {
      if (n.instance === null) {
        var a = Ja(i.href), s = e.querySelector(Ur(a));
        if (s) {
          e = s._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = xl.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = s, Bt(s);
          return;
        }
        s = e.ownerDocument || e, i = Kb(i), (a = ze.get(a)) && ch(i, a), s = s.createElement("link"), Bt(s);
        var r = s;
        r._p = new Promise(function(o, l) {
          r.onload = o, r.onerror = l;
        }), qt(s, "link", i), n.instance = s;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && !(n.state.loading & 3) && (t.count++, n = xl.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var rc = 0;
  function AA(t, e) {
    return t.stylesheets && t.count === 0 && Bo(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (t.stylesheets && Bo(t, t.stylesheets), t.unsuspend) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, 6e4 + e);
      0 < t.imgBytes && rc === 0 && (rc = 62500 * sA());
      var a = setTimeout(function() {
        if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && Bo(t, t.stylesheets), t.unsuspend)) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, (t.imgBytes > rc ? 50 : 800) + e);
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(i), clearTimeout(a);
      };
    } : null;
  }
  function xl() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Bo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Sl = null;
  function Bo(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Sl = /* @__PURE__ */ new Map(), e.forEach(CA, t), Sl = null, xl.call(t));
  }
  function CA(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Sl.get(t);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Sl.set(t, n);
        for (var a = t.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < a.length; s++) {
          var r = a[s];
          (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") && (n.set(r.dataset.precedence, r), i = r);
        }
        i && n.set(null, i);
      }
      a = e.instance, r = a.getAttribute("data-precedence"), s = n.get(r) || i, s === i && n.set(null, a), n.set(r, a), this.count++, i = xl.bind(this), a.addEventListener("load", i), a.addEventListener("error", i), s ? s.parentNode.insertBefore(a, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var hr = {
    $$typeof: vn,
    Provider: null,
    Consumer: null,
    _currentValue: ki,
    _currentValue2: ki,
    _threadCount: 0
  };
  function MA(t, e, n, i, a, s, r, o, l) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ou(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ou(0), this.hiddenUpdates = Ou(null), this.identifierPrefix = i, this.onUncaughtError = a, this.onCaughtError = s, this.onRecoverableError = r, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = l, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $b(t, e, n, i, a, s, r, o, l, u, c, f) {
    return t = new MA(t, e, n, r, l, u, c, f, o), e = 1, s === true && (e |= 24), s = ce(3, null, null, e), t.current = s, s.stateNode = t, e = Bd(), e.refCount++, t.pooledCache = e, e.refCount++, s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: e
    }, Pd(s), t;
  }
  function Ib(t) {
    return t ? (t = Ea, t) : Ea;
  }
  function Jb(t, e, n, i, a, s) {
    a = Ib(a), i.context === null ? i.context = a : i.pendingContext = a, i = ni(e), i.payload = {
      element: n
    }, s = s === void 0 ? null : s, s !== null && (i.callback = s), n = ii(t, i, e), n !== null && (ie(n, t, e), Hs(n, t, e));
  }
  function Pp(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function dh(t, e) {
    Pp(t, e), (t = t.alternate) && Pp(t, e);
  }
  function Wb(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Wi(t, 67108864);
      e !== null && ie(e, t, 67108864), dh(t, 67108864);
    }
  }
  function Hp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = pe();
      e = Td(e);
      var n = Wi(t, e);
      n !== null && ie(n, t, e), dh(t, e);
    }
  }
  var wl = true;
  function RA(t, e, n, i) {
    var a = P.T;
    P.T = null;
    var s = et.p;
    try {
      et.p = 2, hh(t, e, n, i);
    } finally {
      et.p = s, P.T = a;
    }
  }
  function OA(t, e, n, i) {
    var a = P.T;
    P.T = null;
    var s = et.p;
    try {
      et.p = 8, hh(t, e, n, i);
    } finally {
      et.p = s, P.T = a;
    }
  }
  function hh(t, e, n, i) {
    if (wl) {
      var a = Rf(i);
      if (a === null) ac(t, e, i, Tl, n), Gp(t, i);
      else if (NA(a, t, e, n, i)) i.stopPropagation();
      else if (Gp(t, i), e & 4 && -1 < DA.indexOf(t)) {
        for (; a !== null; ) {
          var s = rs(a);
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
                  on(s), !(tt & 6) && (dl = de() + 500, kr(0));
                }
              }
              break;
            case 31:
            case 13:
              o = Wi(s, 2), o !== null && ie(o, s, 2), nu(), dh(s, 2);
          }
          if (s = Rf(i), s === null && ac(t, e, i, Tl, n), s === a) break;
          a = s;
        }
        a !== null && i.stopPropagation();
      } else ac(t, e, i, null, n);
    }
  }
  function Rf(t) {
    return t = Md(t), mh(t);
  }
  var Tl = null;
  function mh(t) {
    if (Tl = null, t = va(t), t !== null) {
      var e = Or(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = b0(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = x0(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Tl = t, null;
  }
  function tx(t) {
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
        switch (pT()) {
          case E0:
            return 2;
          case A0:
            return 8;
          case Jo:
          case gT:
            return 32;
          case C0:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Of = false, ri = null, oi = null, li = null, mr = /* @__PURE__ */ new Map(), pr = /* @__PURE__ */ new Map(), Fn = [], DA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Gp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ri = null;
        break;
      case "dragenter":
      case "dragleave":
        oi = null;
        break;
      case "mouseover":
      case "mouseout":
        li = null;
        break;
      case "pointerover":
      case "pointerout":
        mr.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pr.delete(e.pointerId);
    }
  }
  function Cs(t, e, n, i, a, s) {
    return t === null || t.nativeEvent !== s ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: s,
      targetContainers: [
        a
      ]
    }, e !== null && (e = rs(e), e !== null && Wb(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function NA(t, e, n, i, a) {
    switch (e) {
      case "focusin":
        return ri = Cs(ri, t, e, n, i, a), true;
      case "dragenter":
        return oi = Cs(oi, t, e, n, i, a), true;
      case "mouseover":
        return li = Cs(li, t, e, n, i, a), true;
      case "pointerover":
        var s = a.pointerId;
        return mr.set(s, Cs(mr.get(s) || null, t, e, n, i, a)), true;
      case "gotpointercapture":
        return s = a.pointerId, pr.set(s, Cs(pr.get(s) || null, t, e, n, i, a)), true;
    }
    return false;
  }
  function ex(t) {
    var e = va(t.target);
    if (e !== null) {
      var n = Or(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = b0(n), e !== null) {
            t.blockedOn = e, Cm(t.priority, function() {
              Hp(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = x0(n), e !== null) {
            t.blockedOn = e, Cm(t.priority, function() {
              Hp(n);
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
  function ko(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Rf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        Fc = i, n.target.dispatchEvent(i), Fc = null;
      } else return e = rs(n), e !== null && Wb(e), t.blockedOn = n, false;
      e.shift();
    }
    return true;
  }
  function Yp(t, e, n) {
    ko(t) && n.delete(e);
  }
  function jA() {
    Of = false, ri !== null && ko(ri) && (ri = null), oi !== null && ko(oi) && (oi = null), li !== null && ko(li) && (li = null), mr.forEach(Yp), pr.forEach(Yp);
  }
  function uo(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Of || (Of = true, Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, jA)));
  }
  var co = null;
  function qp(t) {
    co !== t && (co = t, Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, function() {
      co === t && (co = null);
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e], i = t[e + 1], a = t[e + 2];
        if (typeof i != "function") {
          if (mh(i || n) === null) continue;
          break;
        }
        var s = rs(n);
        s !== null && (t.splice(e, 3), e -= 3, uf(s, {
          pending: true,
          data: a,
          method: n.method,
          action: i
        }, i, a));
      }
    }));
  }
  function Wa(t) {
    function e(l) {
      return uo(l, t);
    }
    ri !== null && uo(ri, t), oi !== null && uo(oi, t), li !== null && uo(li, t), mr.forEach(e), pr.forEach(e);
    for (var n = 0; n < Fn.length; n++) {
      var i = Fn[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Fn.length && (n = Fn[0], n.blockedOn === null); ) ex(n), n.blockedOn === null && Fn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null) for (i = 0; i < n.length; i += 3) {
      var a = n[i], s = n[i + 1], r = a[ae] || null;
      if (typeof s == "function") r || qp(n);
      else if (r) {
        var o = null;
        if (s && s.hasAttribute("formAction")) {
          if (a = s, r = s[ae] || null) o = r.formAction;
          else if (mh(a) !== null) continue;
        } else o = r.action;
        typeof o == "function" ? n[i + 1] = o : (n.splice(i, 3), i -= 3), qp(n);
      }
    }
  }
  function nx() {
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
  function ph(t) {
    this._internalRoot = t;
  }
  su.prototype.render = ph.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(M(409));
    var n = e.current, i = pe();
    Jb(n, i, t, e, null, null);
  };
  su.prototype.unmount = ph.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Jb(t.current, 2, null, t, null, null), nu(), e[ss] = null;
    }
  };
  function su(t) {
    this._internalRoot = t;
  }
  su.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = N0();
      t = {
        blockedOn: null,
        target: t,
        priority: e
      };
      for (var n = 0; n < Fn.length && e !== 0 && e < Fn[n].priority; n++) ;
      Fn.splice(n, 0, t), n === 0 && ex(t);
    }
  };
  var Xp = y0.version;
  if (Xp !== "19.2.5") throw Error(M(527, Xp, "19.2.5"));
  et.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(M(188)) : (t = Object.keys(t).join(","), Error(M(268, t)));
    return t = lT(e), t = t !== null ? S0(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var zA = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: P,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fo.isDisabled && fo.supportsFiber) try {
      Dr = fo.inject(zA), he = fo;
    } catch {
    }
  }
  Gl.createRoot = function(t, e) {
    if (!v0(t)) throw Error(M(299));
    var n = false, i = "", a = Qv, s = Kv, r = Zv;
    return e != null && (e.unstable_strictMode === true && (n = true), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (s = e.onCaughtError), e.onRecoverableError !== void 0 && (r = e.onRecoverableError)), e = $b(t, 1, false, null, null, n, i, null, a, s, r, nx), t[ss] = e.current, uh(t), new ph(e);
  };
  Gl.hydrateRoot = function(t, e, n) {
    if (!v0(t)) throw Error(M(299));
    var i = false, a = "", s = Qv, r = Kv, o = Zv, l = null;
    return n != null && (n.unstable_strictMode === true && (i = true), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (o = n.onRecoverableError), n.formState !== void 0 && (l = n.formState)), e = $b(t, 1, true, e, n ?? null, i, a, l, s, r, o, nx), e.context = Ib(null), n = e.current, i = pe(), i = Td(i), a = ni(i), a.callback = null, ii(n, a, i), n = i, e.current.lanes = n, jr(e, n), on(e), t[ss] = e.current, uh(t), new su(e);
  };
  Gl.version = "19.2.5";
  function ix() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ix);
    } catch (t) {
      console.error(t);
    }
  }
  ix(), e0.exports = Gl;
  var _A = e0.exports;
  let LA, VA, Fp, kA, UA;
  LA = "modulepreload";
  VA = function(t) {
    return "/amritaraj-nair-portfolio/" + t;
  };
  Fp = {};
  BA = function(e, n, i) {
    let a = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const r = document.querySelector("meta[property=csp-nonce]"), o = (r == null ? void 0 : r.nonce) || (r == null ? void 0 : r.getAttribute("nonce"));
      a = Promise.allSettled(n.map((l) => {
        if (l = VA(l), l in Fp) return;
        Fp[l] = true;
        const u = l.endsWith(".css"), c = u ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${c}`)) return;
        const f = document.createElement("link");
        if (f.rel = u ? "stylesheet" : LA, u || (f.as = "script"), f.crossOrigin = "", f.href = l, o && f.setAttribute("nonce", o), document.head.appendChild(f), u) return new Promise((h, d) => {
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
  kA = 1;
  UA = 1e6;
  let oc = 0;
  function PA() {
    return oc = (oc + 1) % Number.MAX_SAFE_INTEGER, oc.toString();
  }
  const lc = /* @__PURE__ */ new Map(), Qp = (t) => {
    if (lc.has(t)) return;
    const e = setTimeout(() => {
      lc.delete(t), $s({
        type: "REMOVE_TOAST",
        toastId: t
      });
    }, UA);
    lc.set(t, e);
  }, HA = (t, e) => {
    switch (e.type) {
      case "ADD_TOAST":
        return {
          ...t,
          toasts: [
            e.toast,
            ...t.toasts
          ].slice(0, kA)
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
        return n ? Qp(n) : t.toasts.forEach((i) => {
          Qp(i.id);
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
  }, Uo = [];
  let Po = {
    toasts: []
  };
  function $s(t) {
    Po = HA(Po, t), Uo.forEach((e) => {
      e(Po);
    });
  }
  function GA({ ...t }) {
    const e = PA(), n = (a) => $s({
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
  function ax() {
    const [t, e] = b.useState(Po);
    return b.useEffect(() => (Uo.push(e), () => {
      const n = Uo.indexOf(e);
      n > -1 && Uo.splice(n, 1);
    }), [
      t
    ]), {
      ...t,
      toast: GA,
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
  function Kp(t, e) {
    if (typeof t == "function") return t(e);
    t != null && (t.current = e);
  }
  function sx(...t) {
    return (e) => {
      let n = false;
      const i = t.map((a) => {
        const s = Kp(a, e);
        return !n && typeof s == "function" && (n = true), s;
      });
      if (n) return () => {
        for (let a = 0; a < i.length; a++) {
          const s = i[a];
          typeof s == "function" ? s() : Kp(t[a], null);
        }
      };
    };
  }
  function Ye(...t) {
    return b.useCallback(sx(...t), t);
  }
  function ru(t, e = []) {
    let n = [];
    function i(s, r) {
      const o = b.createContext(r), l = n.length;
      n = [
        ...n,
        r
      ];
      const u = (f) => {
        var _a5;
        const { scope: h, children: d, ...y } = f, v = ((_a5 = h == null ? void 0 : h[t]) == null ? void 0 : _a5[l]) || o, S = b.useMemo(() => y, Object.values(y));
        return x.jsx(v.Provider, {
          value: S,
          children: d
        });
      };
      u.displayName = s + "Provider";
      function c(f, h) {
        var _a5;
        const d = ((_a5 = h == null ? void 0 : h[t]) == null ? void 0 : _a5[l]) || o, y = b.useContext(d);
        if (y) return y;
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
      YA(a, ...e)
    ];
  }
  function YA(...t) {
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
  function El(t) {
    const e = XA(t), n = b.forwardRef((i, a) => {
      const { children: s, ...r } = i, o = b.Children.toArray(s), l = o.find(QA);
      if (l) {
        const u = l.props.children, c = o.map((f) => f === l ? b.Children.count(u) > 1 ? b.Children.only(null) : b.isValidElement(u) ? u.props.children : null : f);
        return x.jsx(e, {
          ...r,
          ref: a,
          children: b.isValidElement(u) ? b.cloneElement(u, void 0, c) : null
        });
      }
      return x.jsx(e, {
        ...r,
        ref: a,
        children: s
      });
    });
    return n.displayName = `${t}.Slot`, n;
  }
  var qA = El("Slot");
  function XA(t) {
    const e = b.forwardRef((n, i) => {
      const { children: a, ...s } = n;
      if (b.isValidElement(a)) {
        const r = ZA(a), o = KA(s, a.props);
        return a.type !== b.Fragment && (o.ref = i ? sx(i, r) : r), b.cloneElement(a, o);
      }
      return b.Children.count(a) > 1 ? b.Children.only(null) : null;
    });
    return e.displayName = `${t}.SlotClone`, e;
  }
  var rx = Symbol("radix.slottable");
  function FA(t) {
    const e = ({ children: n }) => x.jsx(x.Fragment, {
      children: n
    });
    return e.displayName = `${t}.Slottable`, e.__radixId = rx, e;
  }
  function QA(t) {
    return b.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === rx;
  }
  function KA(t, e) {
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
  function ZA(t) {
    var _a5, _b3;
    let e = (_a5 = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : _a5.get, n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (_b3 = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : _b3.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
  }
  function $A(t) {
    const e = t + "CollectionProvider", [n, i] = ru(e), [a, s] = n(e, {
      collectionRef: {
        current: null
      },
      itemMap: /* @__PURE__ */ new Map()
    }), r = (v) => {
      const { scope: S, children: p } = v, m = _.useRef(null), g = _.useRef(/* @__PURE__ */ new Map()).current;
      return x.jsx(a, {
        scope: S,
        itemMap: g,
        collectionRef: m,
        children: p
      });
    };
    r.displayName = e;
    const o = t + "CollectionSlot", l = El(o), u = _.forwardRef((v, S) => {
      const { scope: p, children: m } = v, g = s(o, p), w = Ye(S, g.collectionRef);
      return x.jsx(l, {
        ref: w,
        children: m
      });
    });
    u.displayName = o;
    const c = t + "CollectionItemSlot", f = "data-radix-collection-item", h = El(c), d = _.forwardRef((v, S) => {
      const { scope: p, children: m, ...g } = v, w = _.useRef(null), T = Ye(S, w), A = s(c, p);
      return _.useEffect(() => (A.itemMap.set(w, {
        ref: w,
        ...g
      }), () => void A.itemMap.delete(w))), x.jsx(h, {
        [f]: "",
        ref: T,
        children: m
      });
    });
    d.displayName = c;
    function y(v) {
      const S = s(t + "CollectionConsumer", v);
      return _.useCallback(() => {
        const m = S.collectionRef.current;
        if (!m) return [];
        const g = Array.from(m.querySelectorAll(`[${f}]`));
        return Array.from(S.itemMap.values()).sort((A, E) => g.indexOf(A.ref.current) - g.indexOf(E.ref.current));
      }, [
        S.collectionRef,
        S.itemMap
      ]);
    }
    return [
      {
        Provider: r,
        Slot: u,
        ItemSlot: d
      },
      y,
      i
    ];
  }
  var IA = [
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
  ], re = IA.reduce((t, e) => {
    const n = El(`Primitive.${e}`), i = b.forwardRef((a, s) => {
      const { asChild: r, ...o } = a, l = r ? n : e;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), x.jsx(l, {
        ...o,
        ref: s
      });
    });
    return i.displayName = `Primitive.${e}`, {
      ...t,
      [e]: i
    };
  }, {});
  function ox(t, e) {
    t && Rr.flushSync(() => t.dispatchEvent(e));
  }
  function mi(t) {
    const e = b.useRef(t);
    return b.useEffect(() => {
      e.current = t;
    }), b.useMemo(() => (...n) => {
      var _a5;
      return (_a5 = e.current) == null ? void 0 : _a5.call(e, ...n);
    }, []);
  }
  function JA(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = mi(t);
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
  var WA = "DismissableLayer", Df = "dismissableLayer.update", t2 = "dismissableLayer.pointerDownOutside", e2 = "dismissableLayer.focusOutside", Zp, lx = b.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  }), gh = b.forwardRef((t, e) => {
    const { disableOutsidePointerEvents: n = false, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: r, onDismiss: o, ...l } = t, u = b.useContext(lx), [c, f] = b.useState(null), h = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, d] = b.useState({}), y = Ye(e, (E) => f(E)), v = Array.from(u.layers), [S] = [
      ...u.layersWithOutsidePointerEventsDisabled
    ].slice(-1), p = v.indexOf(S), m = c ? v.indexOf(c) : -1, g = u.layersWithOutsidePointerEventsDisabled.size > 0, w = m >= p, T = i2((E) => {
      const C = E.target, j = [
        ...u.branches
      ].some((z) => z.contains(C));
      !w || j || (a == null ? void 0 : a(E), r == null ? void 0 : r(E), E.defaultPrevented || (o == null ? void 0 : o()));
    }, h), A = a2((E) => {
      const C = E.target;
      [
        ...u.branches
      ].some((z) => z.contains(C)) || (s == null ? void 0 : s(E), r == null ? void 0 : r(E), E.defaultPrevented || (o == null ? void 0 : o()));
    }, h);
    return JA((E) => {
      m === u.layers.size - 1 && (i == null ? void 0 : i(E), !E.defaultPrevented && o && (E.preventDefault(), o()));
    }, h), b.useEffect(() => {
      if (c) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Zp = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), $p(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Zp);
      };
    }, [
      c,
      h,
      n,
      u
    ]), b.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), $p());
    }, [
      c,
      u
    ]), b.useEffect(() => {
      const E = () => d({});
      return document.addEventListener(Df, E), () => document.removeEventListener(Df, E);
    }, []), x.jsx(re.div, {
      ...l,
      ref: y,
      style: {
        pointerEvents: g ? w ? "auto" : "none" : void 0,
        ...t.style
      },
      onFocusCapture: zt(t.onFocusCapture, A.onFocusCapture),
      onBlurCapture: zt(t.onBlurCapture, A.onBlurCapture),
      onPointerDownCapture: zt(t.onPointerDownCapture, T.onPointerDownCapture)
    });
  });
  gh.displayName = WA;
  var n2 = "DismissableLayerBranch", ux = b.forwardRef((t, e) => {
    const n = b.useContext(lx), i = b.useRef(null), a = Ye(e, i);
    return b.useEffect(() => {
      const s = i.current;
      if (s) return n.branches.add(s), () => {
        n.branches.delete(s);
      };
    }, [
      n.branches
    ]), x.jsx(re.div, {
      ...t,
      ref: a
    });
  });
  ux.displayName = n2;
  function i2(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = mi(t), i = b.useRef(false), a = b.useRef(() => {
    });
    return b.useEffect(() => {
      const s = (o) => {
        if (o.target && !i.current) {
          let l = function() {
            cx(t2, n, u, {
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
  function a2(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = mi(t), i = b.useRef(false);
    return b.useEffect(() => {
      const a = (s) => {
        s.target && !i.current && cx(e2, n, {
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
  function $p() {
    const t = new CustomEvent(Df);
    document.dispatchEvent(t);
  }
  function cx(t, e, n, { discrete: i }) {
    const a = n.originalEvent.target, s = new CustomEvent(t, {
      bubbles: false,
      cancelable: true,
      detail: n
    });
    e && a.addEventListener(t, e, {
      once: true
    }), i ? ox(a, s) : a.dispatchEvent(s);
  }
  var s2 = gh, r2 = ux, pi = (globalThis == null ? void 0 : globalThis.document) ? b.useLayoutEffect : () => {
  }, o2 = "Portal", fx = b.forwardRef((t, e) => {
    var _a5;
    const { container: n, ...i } = t, [a, s] = b.useState(false);
    pi(() => s(true), []);
    const r = n || a && ((_a5 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a5.body);
    return r ? g0.createPortal(x.jsx(re.div, {
      ...i,
      ref: e
    }), r) : null;
  });
  fx.displayName = o2;
  function l2(t, e) {
    return b.useReducer((n, i) => e[n][i] ?? n, t);
  }
  var yh = (t) => {
    const { present: e, children: n } = t, i = u2(e), a = typeof n == "function" ? n({
      present: i.isPresent
    }) : b.Children.only(n), s = Ye(i.ref, c2(a));
    return typeof n == "function" || i.isPresent ? b.cloneElement(a, {
      ref: s
    }) : null;
  };
  yh.displayName = "Presence";
  function u2(t) {
    const [e, n] = b.useState(), i = b.useRef(null), a = b.useRef(t), s = b.useRef("none"), r = t ? "mounted" : "unmounted", [o, l] = l2(r, {
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
      const u = ho(i.current);
      s.current = o === "mounted" ? u : "none";
    }, [
      o
    ]), pi(() => {
      const u = i.current, c = a.current;
      if (c !== t) {
        const h = s.current, d = ho(u);
        t ? l("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && h !== d ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
      }
    }, [
      t,
      l
    ]), pi(() => {
      if (e) {
        let u;
        const c = e.ownerDocument.defaultView ?? window, f = (d) => {
          const v = ho(i.current).includes(d.animationName);
          if (d.target === e && v && (l("ANIMATION_END"), !a.current)) {
            const S = e.style.animationFillMode;
            e.style.animationFillMode = "forwards", u = c.setTimeout(() => {
              e.style.animationFillMode === "forwards" && (e.style.animationFillMode = S);
            });
          }
        }, h = (d) => {
          d.target === e && (s.current = ho(i.current));
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
  function ho(t) {
    return (t == null ? void 0 : t.animationName) || "none";
  }
  function c2(t) {
    var _a5, _b3;
    let e = (_a5 = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : _a5.get, n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (_b3 = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : _b3.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
  }
  var f2 = d0[" useInsertionEffect ".trim().toString()] || pi;
  function d2({ prop: t, defaultProp: e, onChange: n = () => {
  }, caller: i }) {
    const [a, s, r] = h2({
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
        const f = m2(c) ? c(t) : c;
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
  function h2({ defaultProp: t, onChange: e }) {
    const [n, i] = b.useState(t), a = b.useRef(n), s = b.useRef(e);
    return f2(() => {
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
  function m2(t) {
    return typeof t == "function";
  }
  var p2 = Object.freeze({
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
  }), g2 = "VisuallyHidden", ou = b.forwardRef((t, e) => x.jsx(re.span, {
    ...t,
    ref: e,
    style: {
      ...p2,
      ...t.style
    }
  }));
  ou.displayName = g2;
  var y2 = ou, vh = "ToastProvider", [bh, v2, b2] = $A("Toast"), [dx, _4] = ru("Toast", [
    b2
  ]), [x2, lu] = dx(vh), hx = (t) => {
    const { __scopeToast: e, label: n = "Notification", duration: i = 5e3, swipeDirection: a = "right", swipeThreshold: s = 50, children: r } = t, [o, l] = b.useState(null), [u, c] = b.useState(0), f = b.useRef(false), h = b.useRef(false);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${vh}\`. Expected non-empty \`string\`.`), x.jsx(bh.Provider, {
      scope: e,
      children: x.jsx(x2, {
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
  hx.displayName = vh;
  var mx = "ToastViewport", S2 = [
    "F8"
  ], Nf = "toast.viewportPause", jf = "toast.viewportResume", px = b.forwardRef((t, e) => {
    const { __scopeToast: n, hotkey: i = S2, label: a = "Notifications ({hotkey})", ...s } = t, r = lu(mx, n), o = v2(n), l = b.useRef(null), u = b.useRef(null), c = b.useRef(null), f = b.useRef(null), h = Ye(e, f, r.onViewportChange), d = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = r.toastCount > 0;
    b.useEffect(() => {
      const S = (p) => {
        var _a5;
        i.length !== 0 && i.every((g) => p[g] || p.code === g) && ((_a5 = f.current) == null ? void 0 : _a5.focus());
      };
      return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
    }, [
      i
    ]), b.useEffect(() => {
      const S = l.current, p = f.current;
      if (y && S && p) {
        const m = () => {
          if (!r.isClosePausedRef.current) {
            const A = new CustomEvent(Nf);
            p.dispatchEvent(A), r.isClosePausedRef.current = true;
          }
        }, g = () => {
          if (r.isClosePausedRef.current) {
            const A = new CustomEvent(jf);
            p.dispatchEvent(A), r.isClosePausedRef.current = false;
          }
        }, w = (A) => {
          !S.contains(A.relatedTarget) && g();
        }, T = () => {
          S.contains(document.activeElement) || g();
        };
        return S.addEventListener("focusin", m), S.addEventListener("focusout", w), S.addEventListener("pointermove", m), S.addEventListener("pointerleave", T), window.addEventListener("blur", m), window.addEventListener("focus", g), () => {
          S.removeEventListener("focusin", m), S.removeEventListener("focusout", w), S.removeEventListener("pointermove", m), S.removeEventListener("pointerleave", T), window.removeEventListener("blur", m), window.removeEventListener("focus", g);
        };
      }
    }, [
      y,
      r.isClosePausedRef
    ]);
    const v = b.useCallback(({ tabbingDirection: S }) => {
      const m = o().map((g) => {
        const w = g.ref.current, T = [
          w,
          ..._2(w)
        ];
        return S === "forwards" ? T : T.reverse();
      });
      return (S === "forwards" ? m.reverse() : m).flat();
    }, [
      o
    ]);
    return b.useEffect(() => {
      const S = f.current;
      if (S) {
        const p = (m) => {
          var _a5, _b3, _c3;
          const g = m.altKey || m.ctrlKey || m.metaKey;
          if (m.key === "Tab" && !g) {
            const T = document.activeElement, A = m.shiftKey;
            if (m.target === S && A) {
              (_a5 = u.current) == null ? void 0 : _a5.focus();
              return;
            }
            const j = v({
              tabbingDirection: A ? "backwards" : "forwards"
            }), z = j.findIndex((U) => U === T);
            uc(j.slice(z + 1)) ? m.preventDefault() : A ? (_b3 = u.current) == null ? void 0 : _b3.focus() : (_c3 = c.current) == null ? void 0 : _c3.focus();
          }
        };
        return S.addEventListener("keydown", p), () => S.removeEventListener("keydown", p);
      }
    }, [
      o,
      v
    ]), x.jsxs(r2, {
      ref: l,
      role: "region",
      "aria-label": a.replace("{hotkey}", d),
      tabIndex: -1,
      style: {
        pointerEvents: y ? void 0 : "none"
      },
      children: [
        y && x.jsx(zf, {
          ref: u,
          onFocusFromOutsideViewport: () => {
            const S = v({
              tabbingDirection: "forwards"
            });
            uc(S);
          }
        }),
        x.jsx(bh.Slot, {
          scope: n,
          children: x.jsx(re.ol, {
            tabIndex: -1,
            ...s,
            ref: h
          })
        }),
        y && x.jsx(zf, {
          ref: c,
          onFocusFromOutsideViewport: () => {
            const S = v({
              tabbingDirection: "backwards"
            });
            uc(S);
          }
        })
      ]
    });
  });
  px.displayName = mx;
  var gx = "ToastFocusProxy", zf = b.forwardRef((t, e) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: i, ...a } = t, s = lu(gx, n);
    return x.jsx(ou, {
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
  zf.displayName = gx;
  var Hr = "Toast", w2 = "toast.swipeStart", T2 = "toast.swipeMove", E2 = "toast.swipeCancel", A2 = "toast.swipeEnd", yx = b.forwardRef((t, e) => {
    const { forceMount: n, open: i, defaultOpen: a, onOpenChange: s, ...r } = t, [o, l] = d2({
      prop: i,
      defaultProp: a ?? true,
      onChange: s,
      caller: Hr
    });
    return x.jsx(yh, {
      present: n || o,
      children: x.jsx(R2, {
        open: o,
        ...r,
        ref: e,
        onClose: () => l(false),
        onPause: mi(t.onPause),
        onResume: mi(t.onResume),
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
  yx.displayName = Hr;
  var [C2, M2] = dx(Hr, {
    onClose() {
    }
  }), R2 = b.forwardRef((t, e) => {
    const { __scopeToast: n, type: i = "foreground", duration: a, open: s, onClose: r, onEscapeKeyDown: o, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: f, onSwipeCancel: h, onSwipeEnd: d, ...y } = t, v = lu(Hr, n), [S, p] = b.useState(null), m = Ye(e, (L) => p(L)), g = b.useRef(null), w = b.useRef(null), T = a || v.duration, A = b.useRef(0), E = b.useRef(T), C = b.useRef(0), { onToastAdd: j, onToastRemove: z } = v, U = mi(() => {
      var _a5;
      (S == null ? void 0 : S.contains(document.activeElement)) && ((_a5 = v.viewport) == null ? void 0 : _a5.focus()), r();
    }), V = b.useCallback((L) => {
      !L || L === 1 / 0 || (window.clearTimeout(C.current), A.current = (/* @__PURE__ */ new Date()).getTime(), C.current = window.setTimeout(U, L));
    }, [
      U
    ]);
    b.useEffect(() => {
      const L = v.viewport;
      if (L) {
        const X = () => {
          V(E.current), u == null ? void 0 : u();
        }, R = () => {
          const D = (/* @__PURE__ */ new Date()).getTime() - A.current;
          E.current = E.current - D, window.clearTimeout(C.current), l == null ? void 0 : l();
        };
        return L.addEventListener(Nf, R), L.addEventListener(jf, X), () => {
          L.removeEventListener(Nf, R), L.removeEventListener(jf, X);
        };
      }
    }, [
      v.viewport,
      T,
      l,
      u,
      V
    ]), b.useEffect(() => {
      s && !v.isClosePausedRef.current && V(T);
    }, [
      s,
      T,
      v.isClosePausedRef,
      V
    ]), b.useEffect(() => (j(), () => z()), [
      j,
      z
    ]);
    const J = b.useMemo(() => S ? Ex(S) : null, [
      S
    ]);
    return v.viewport ? x.jsxs(x.Fragment, {
      children: [
        J && x.jsx(O2, {
          __scopeToast: n,
          role: "status",
          "aria-live": i === "foreground" ? "assertive" : "polite",
          "aria-atomic": true,
          children: J
        }),
        x.jsx(C2, {
          scope: n,
          onClose: U,
          children: Rr.createPortal(x.jsx(bh.ItemSlot, {
            scope: n,
            children: x.jsx(s2, {
              asChild: true,
              onEscapeKeyDown: zt(o, () => {
                v.isFocusedToastEscapeKeyDownRef.current || U(), v.isFocusedToastEscapeKeyDownRef.current = false;
              }),
              children: x.jsx(re.li, {
                role: "status",
                "aria-live": "off",
                "aria-atomic": true,
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...y,
                ref: m,
                style: {
                  userSelect: "none",
                  touchAction: "none",
                  ...t.style
                },
                onKeyDown: zt(t.onKeyDown, (L) => {
                  L.key === "Escape" && (o == null ? void 0 : o(L.nativeEvent), L.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = true, U()));
                }),
                onPointerDown: zt(t.onPointerDown, (L) => {
                  L.button === 0 && (g.current = {
                    x: L.clientX,
                    y: L.clientY
                  });
                }),
                onPointerMove: zt(t.onPointerMove, (L) => {
                  if (!g.current) return;
                  const X = L.clientX - g.current.x, R = L.clientY - g.current.y, D = !!w.current, O = [
                    "left",
                    "right"
                  ].includes(v.swipeDirection), N = [
                    "left",
                    "up"
                  ].includes(v.swipeDirection) ? Math.min : Math.max, k = O ? N(0, X) : 0, ft = O ? 0 : N(0, R), F = L.pointerType === "touch" ? 10 : 2, Z = {
                    x: k,
                    y: ft
                  }, $ = {
                    originalEvent: L,
                    delta: Z
                  };
                  D ? (w.current = Z, mo(T2, f, $, {
                    discrete: false
                  })) : Ip(Z, v.swipeDirection, F) ? (w.current = Z, mo(w2, c, $, {
                    discrete: false
                  }), L.target.setPointerCapture(L.pointerId)) : (Math.abs(X) > F || Math.abs(R) > F) && (g.current = null);
                }),
                onPointerUp: zt(t.onPointerUp, (L) => {
                  const X = w.current, R = L.target;
                  if (R.hasPointerCapture(L.pointerId) && R.releasePointerCapture(L.pointerId), w.current = null, g.current = null, X) {
                    const D = L.currentTarget, O = {
                      originalEvent: L,
                      delta: X
                    };
                    Ip(X, v.swipeDirection, v.swipeThreshold) ? mo(A2, d, O, {
                      discrete: true
                    }) : mo(E2, h, O, {
                      discrete: true
                    }), D.addEventListener("click", (N) => N.preventDefault(), {
                      once: true
                    });
                  }
                })
              })
            })
          }), v.viewport)
        })
      ]
    }) : null;
  }), O2 = (t) => {
    const { __scopeToast: e, children: n, ...i } = t, a = lu(Hr, e), [s, r] = b.useState(false), [o, l] = b.useState(false);
    return j2(() => r(true)), b.useEffect(() => {
      const u = window.setTimeout(() => l(true), 1e3);
      return () => window.clearTimeout(u);
    }, []), o ? null : x.jsx(fx, {
      asChild: true,
      children: x.jsx(ou, {
        ...i,
        children: s && x.jsxs(x.Fragment, {
          children: [
            a.label,
            " ",
            n
          ]
        })
      })
    });
  }, D2 = "ToastTitle", vx = b.forwardRef((t, e) => {
    const { __scopeToast: n, ...i } = t;
    return x.jsx(re.div, {
      ...i,
      ref: e
    });
  });
  vx.displayName = D2;
  var N2 = "ToastDescription", bx = b.forwardRef((t, e) => {
    const { __scopeToast: n, ...i } = t;
    return x.jsx(re.div, {
      ...i,
      ref: e
    });
  });
  bx.displayName = N2;
  var xx = "ToastAction", Sx = b.forwardRef((t, e) => {
    const { altText: n, ...i } = t;
    return n.trim() ? x.jsx(Tx, {
      altText: n,
      asChild: true,
      children: x.jsx(xh, {
        ...i,
        ref: e
      })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${xx}\`. Expected non-empty \`string\`.`), null);
  });
  Sx.displayName = xx;
  var wx = "ToastClose", xh = b.forwardRef((t, e) => {
    const { __scopeToast: n, ...i } = t, a = M2(wx, n);
    return x.jsx(Tx, {
      asChild: true,
      children: x.jsx(re.button, {
        type: "button",
        ...i,
        ref: e,
        onClick: zt(t.onClick, a.onClose)
      })
    });
  });
  xh.displayName = wx;
  var Tx = b.forwardRef((t, e) => {
    const { __scopeToast: n, altText: i, ...a } = t;
    return x.jsx(re.div, {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": i || void 0,
      ...a,
      ref: e
    });
  });
  function Ex(t) {
    const e = [];
    return Array.from(t.childNodes).forEach((i) => {
      if (i.nodeType === i.TEXT_NODE && i.textContent && e.push(i.textContent), z2(i)) {
        const a = i.ariaHidden || i.hidden || i.style.display === "none", s = i.dataset.radixToastAnnounceExclude === "";
        if (!a) if (s) {
          const r = i.dataset.radixToastAnnounceAlt;
          r && e.push(r);
        } else e.push(...Ex(i));
      }
    }), e;
  }
  function mo(t, e, n, { discrete: i }) {
    const a = n.originalEvent.currentTarget, s = new CustomEvent(t, {
      bubbles: true,
      cancelable: true,
      detail: n
    });
    e && a.addEventListener(t, e, {
      once: true
    }), i ? ox(a, s) : a.dispatchEvent(s);
  }
  var Ip = (t, e, n = 0) => {
    const i = Math.abs(t.x), a = Math.abs(t.y), s = i > a;
    return e === "left" || e === "right" ? s && i > n : !s && a > n;
  };
  function j2(t = () => {
  }) {
    const e = mi(t);
    pi(() => {
      let n = 0, i = 0;
      return n = window.requestAnimationFrame(() => i = window.requestAnimationFrame(e)), () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(i);
      };
    }, [
      e
    ]);
  }
  function z2(t) {
    return t.nodeType === t.ELEMENT_NODE;
  }
  function _2(t) {
    const e = [], n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const a = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || a ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    for (; n.nextNode(); ) e.push(n.currentNode);
    return e;
  }
  function uc(t) {
    const e = document.activeElement;
    return t.some((n) => n === e ? true : (n.focus(), document.activeElement !== e));
  }
  var L2 = hx, Ax = px, Cx = yx, Mx = vx, Rx = bx, Ox = Sx, Dx = xh;
  function Nx(t) {
    var e, n, i = "";
    if (typeof t == "string" || typeof t == "number") i += t;
    else if (typeof t == "object") if (Array.isArray(t)) {
      var a = t.length;
      for (e = 0; e < a; e++) t[e] && (n = Nx(t[e])) && (i && (i += " "), i += n);
    } else for (n in t) t[n] && (i && (i += " "), i += n);
    return i;
  }
  function jx() {
    for (var t, e, n = 0, i = "", a = arguments.length; n < a; n++) (t = arguments[n]) && (e = Nx(t)) && (i && (i += " "), i += e);
    return i;
  }
  const Jp = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Wp = jx, zx = (t, e) => (n) => {
    var i;
    if ((e == null ? void 0 : e.variants) == null) return Wp(t, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const { variants: a, defaultVariants: s } = e, r = Object.keys(a).map((u) => {
      const c = n == null ? void 0 : n[u], f = s == null ? void 0 : s[u];
      if (c === null) return null;
      const h = Jp(c) || Jp(f);
      return a[u][h];
    }), o = n && Object.entries(n).reduce((u, c) => {
      let [f, h] = c;
      return h === void 0 || (u[f] = h), u;
    }, {}), l = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((u, c) => {
      let { class: f, className: h, ...d } = c;
      return Object.entries(d).every((y) => {
        let [v, S] = y;
        return Array.isArray(S) ? S.includes({
          ...s,
          ...o
        }[v]) : {
          ...s,
          ...o
        }[v] === S;
      }) ? [
        ...u,
        f,
        h
      ] : u;
    }, []);
    return Wp(t, r, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  };
  const V2 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _x = (...t) => t.filter((e, n, i) => !!e && e.trim() !== "" && i.indexOf(e) === n).join(" ").trim();
  var B2 = {
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
  const k2 = b.forwardRef(({ color: t = "currentColor", size: e = 24, strokeWidth: n = 2, absoluteStrokeWidth: i, className: a = "", children: s, iconNode: r, ...o }, l) => b.createElement("svg", {
    ref: l,
    ...B2,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(n) * 24 / Number(e) : n,
    className: _x("lucide", a),
    ...o
  }, [
    ...r.map(([u, c]) => b.createElement(u, c)),
    ...Array.isArray(s) ? s : [
      s
    ]
  ]));
  const ln = (t, e) => {
    const n = b.forwardRef(({ className: i, ...a }, s) => b.createElement(k2, {
      ref: s,
      iconNode: e,
      className: _x(`lucide-${V2(t)}`, i),
      ...a
    }));
    return n.displayName = `${t}`, n;
  };
  const U2 = ln("ArrowLeft", [
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
  const tg = ln("Check", [
    [
      "path",
      {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
      }
    ]
  ]);
  const P2 = ln("Copy", [
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
  const cc = ln("Download", [
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
  const H2 = ln("Gamepad2", [
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
  const G2 = ln("Link2", [
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
  const eg = ln("Linkedin", [
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
  const ng = ln("Mail", [
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
  const Y2 = ln("Share2", [
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
  const q2 = ln("X", [
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
  ]), Sh = "-", X2 = (t) => {
    const e = Q2(t), { conflictingClassGroups: n, conflictingClassGroupModifiers: i } = t;
    return {
      getClassGroupId: (r) => {
        const o = r.split(Sh);
        return o[0] === "" && o.length !== 1 && o.shift(), Lx(o, e) || F2(r);
      },
      getConflictingClassGroupIds: (r, o) => {
        const l = n[r] || [];
        return o && i[r] ? [
          ...l,
          ...i[r]
        ] : l;
      }
    };
  }, Lx = (t, e) => {
    var _a5;
    if (t.length === 0) return e.classGroupId;
    const n = t[0], i = e.nextPart.get(n), a = i ? Lx(t.slice(1), i) : void 0;
    if (a) return a;
    if (e.validators.length === 0) return;
    const s = t.join(Sh);
    return (_a5 = e.validators.find(({ validator: r }) => r(s))) == null ? void 0 : _a5.classGroupId;
  }, ig = /^\[(.+)\]$/, F2 = (t) => {
    if (ig.test(t)) {
      const e = ig.exec(t)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  }, Q2 = (t) => {
    const { theme: e, prefix: n } = t, i = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    return Z2(Object.entries(t.classGroups), n).forEach(([s, r]) => {
      _f(r, i, s, e);
    }), i;
  }, _f = (t, e, n, i) => {
    t.forEach((a) => {
      if (typeof a == "string") {
        const s = a === "" ? e : ag(e, a);
        s.classGroupId = n;
        return;
      }
      if (typeof a == "function") {
        if (K2(a)) {
          _f(a(i), e, n, i);
          return;
        }
        e.validators.push({
          validator: a,
          classGroupId: n
        });
        return;
      }
      Object.entries(a).forEach(([s, r]) => {
        _f(r, ag(e, s), n, i);
      });
    });
  }, ag = (t, e) => {
    let n = t;
    return e.split(Sh).forEach((i) => {
      n.nextPart.has(i) || n.nextPart.set(i, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      }), n = n.nextPart.get(i);
    }), n;
  }, K2 = (t) => t.isThemeGetter, Z2 = (t, e) => e ? t.map(([n, i]) => {
    const a = i.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([r, o]) => [
      e + r,
      o
    ])) : s);
    return [
      n,
      a
    ];
  }) : t, $2 = (t) => {
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
  }, Vx = "!", I2 = (t) => {
    const { separator: e, experimentalParseClassName: n } = t, i = e.length === 1, a = e[0], s = e.length, r = (o) => {
      const l = [];
      let u = 0, c = 0, f;
      for (let S = 0; S < o.length; S++) {
        let p = o[S];
        if (u === 0) {
          if (p === a && (i || o.slice(S, S + s) === e)) {
            l.push(o.slice(c, S)), c = S + s;
            continue;
          }
          if (p === "/") {
            f = S;
            continue;
          }
        }
        p === "[" ? u++ : p === "]" && u--;
      }
      const h = l.length === 0 ? o : o.substring(c), d = h.startsWith(Vx), y = d ? h.substring(1) : h, v = f && f > c ? f - c : void 0;
      return {
        modifiers: l,
        hasImportantModifier: d,
        baseClassName: y,
        maybePostfixModifierPosition: v
      };
    };
    return n ? (o) => n({
      className: o,
      parseClassName: r
    }) : r;
  }, J2 = (t) => {
    if (t.length <= 1) return t;
    const e = [];
    let n = [];
    return t.forEach((i) => {
      i[0] === "[" ? (e.push(...n.sort(), i), n = []) : n.push(i);
    }), e.push(...n.sort()), e;
  }, W2 = (t) => ({
    cache: $2(t.cacheSize),
    parseClassName: I2(t),
    ...X2(t)
  }), tC = /\s+/, eC = (t, e) => {
    const { parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: a } = e, s = [], r = t.trim().split(tC);
    let o = "";
    for (let l = r.length - 1; l >= 0; l -= 1) {
      const u = r[l], { modifiers: c, hasImportantModifier: f, baseClassName: h, maybePostfixModifierPosition: d } = n(u);
      let y = !!d, v = i(y ? h.substring(0, d) : h);
      if (!v) {
        if (!y) {
          o = u + (o.length > 0 ? " " + o : o);
          continue;
        }
        if (v = i(h), !v) {
          o = u + (o.length > 0 ? " " + o : o);
          continue;
        }
        y = false;
      }
      const S = J2(c).join(":"), p = f ? S + Vx : S, m = p + v;
      if (s.includes(m)) continue;
      s.push(m);
      const g = a(v, y);
      for (let w = 0; w < g.length; ++w) {
        const T = g[w];
        s.push(p + T);
      }
      o = u + (o.length > 0 ? " " + o : o);
    }
    return o;
  };
  function nC() {
    let t = 0, e, n, i = "";
    for (; t < arguments.length; ) (e = arguments[t++]) && (n = Bx(e)) && (i && (i += " "), i += n);
    return i;
  }
  const Bx = (t) => {
    if (typeof t == "string") return t;
    let e, n = "";
    for (let i = 0; i < t.length; i++) t[i] && (e = Bx(t[i])) && (n && (n += " "), n += e);
    return n;
  };
  function iC(t, ...e) {
    let n, i, a, s = r;
    function r(l) {
      const u = e.reduce((c, f) => f(c), t());
      return n = W2(u), i = n.cache.get, a = n.cache.set, s = o, o(l);
    }
    function o(l) {
      const u = i(l);
      if (u) return u;
      const c = eC(l, n);
      return a(l, c), c;
    }
    return function() {
      return s(nC.apply(null, arguments));
    };
  }
  const ht = (t) => {
    const e = (n) => n[t] || [];
    return e.isThemeGetter = true, e;
  }, kx = /^\[(?:([a-z-]+):)?(.+)\]$/i, aC = /^\d+\/\d+$/, sC = /* @__PURE__ */ new Set([
    "px",
    "full",
    "screen"
  ]), rC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, oC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, lC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, uC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, cC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, mn = (t) => Pa(t) || sC.has(t) || aC.test(t), kn = (t) => ds(t, "length", vC), Pa = (t) => !!t && !Number.isNaN(Number(t)), fc = (t) => ds(t, "number", Pa), Ms = (t) => !!t && Number.isInteger(Number(t)), fC = (t) => t.endsWith("%") && Pa(t.slice(0, -1)), q = (t) => kx.test(t), Un = (t) => rC.test(t), dC = /* @__PURE__ */ new Set([
    "length",
    "size",
    "percentage"
  ]), hC = (t) => ds(t, dC, Ux), mC = (t) => ds(t, "position", Ux), pC = /* @__PURE__ */ new Set([
    "image",
    "url"
  ]), gC = (t) => ds(t, pC, xC), yC = (t) => ds(t, "", bC), Rs = () => true, ds = (t, e, n) => {
    const i = kx.exec(t);
    return i ? i[1] ? typeof e == "string" ? i[1] === e : e.has(i[1]) : n(i[2]) : false;
  }, vC = (t) => oC.test(t) && !lC.test(t), Ux = () => false, bC = (t) => uC.test(t), xC = (t) => cC.test(t), SC = () => {
    const t = ht("colors"), e = ht("spacing"), n = ht("blur"), i = ht("brightness"), a = ht("borderColor"), s = ht("borderRadius"), r = ht("borderSpacing"), o = ht("borderWidth"), l = ht("contrast"), u = ht("grayscale"), c = ht("hueRotate"), f = ht("invert"), h = ht("gap"), d = ht("gradientColorStops"), y = ht("gradientColorStopPositions"), v = ht("inset"), S = ht("margin"), p = ht("opacity"), m = ht("padding"), g = ht("saturate"), w = ht("scale"), T = ht("sepia"), A = ht("skew"), E = ht("space"), C = ht("translate"), j = () => [
      "auto",
      "contain",
      "none"
    ], z = () => [
      "auto",
      "hidden",
      "clip",
      "visible",
      "scroll"
    ], U = () => [
      "auto",
      q,
      e
    ], V = () => [
      q,
      e
    ], J = () => [
      "",
      mn,
      kn
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
    ], k = () => [
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
          Rs
        ],
        spacing: [
          mn,
          kn
        ],
        blur: [
          "none",
          "",
          Un,
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
          Un,
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
          fC,
          kn
        ],
        inset: U(),
        margin: U(),
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
              Un
            ]
          }
        ],
        "break-after": [
          {
            "break-after": k()
          }
        ],
        "break-before": [
          {
            "break-before": k()
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
              v
            ]
          }
        ],
        "inset-x": [
          {
            "inset-x": [
              v
            ]
          }
        ],
        "inset-y": [
          {
            "inset-y": [
              v
            ]
          }
        ],
        start: [
          {
            start: [
              v
            ]
          }
        ],
        end: [
          {
            end: [
              v
            ]
          }
        ],
        top: [
          {
            top: [
              v
            ]
          }
        ],
        right: [
          {
            right: [
              v
            ]
          }
        ],
        bottom: [
          {
            bottom: [
              v
            ]
          }
        ],
        left: [
          {
            left: [
              v
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
              Ms,
              q
            ]
          }
        ],
        basis: [
          {
            basis: U()
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
              Ms,
              q
            ]
          }
        ],
        "grid-cols": [
          {
            "grid-cols": [
              Rs
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
                  Ms,
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
              Rs
            ]
          }
        ],
        "row-start-end": [
          {
            row: [
              "auto",
              {
                span: [
                  Ms,
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
              S
            ]
          }
        ],
        mx: [
          {
            mx: [
              S
            ]
          }
        ],
        my: [
          {
            my: [
              S
            ]
          }
        ],
        ms: [
          {
            ms: [
              S
            ]
          }
        ],
        me: [
          {
            me: [
              S
            ]
          }
        ],
        mt: [
          {
            mt: [
              S
            ]
          }
        ],
        mr: [
          {
            mr: [
              S
            ]
          }
        ],
        mb: [
          {
            mb: [
              S
            ]
          }
        ],
        ml: [
          {
            ml: [
              S
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
                  Un
                ]
              },
              Un
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
              Un,
              kn
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
              fc
            ]
          }
        ],
        "font-family": [
          {
            font: [
              Rs
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
              fc
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
              mn,
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
              mn,
              kn
            ]
          }
        ],
        "underline-offset": [
          {
            "underline-offset": [
              "auto",
              mn,
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
              mC
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
              hC
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
              gC
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
              y
            ]
          }
        ],
        "gradient-via-pos": [
          {
            via: [
              y
            ]
          }
        ],
        "gradient-to-pos": [
          {
            to: [
              y
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
              mn,
              q
            ]
          }
        ],
        "outline-w": [
          {
            outline: [
              mn,
              kn
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
              mn,
              kn
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
              Un,
              yC
            ]
          }
        ],
        "shadow-color": [
          {
            shadow: [
              Rs
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
              Un,
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
              w
            ]
          }
        ],
        "scale-x": [
          {
            "scale-x": [
              w
            ]
          }
        ],
        "scale-y": [
          {
            "scale-y": [
              w
            ]
          }
        ],
        rotate: [
          {
            rotate: [
              Ms,
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
              mn,
              kn,
              fc
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
  }, wC = iC(SC);
  function wi(...t) {
    return wC(jx(t));
  }
  const TC = L2, Px = b.forwardRef(({ className: t, ...e }, n) => x.jsx(Ax, {
    ref: n,
    className: wi("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", t),
    ...e
  }));
  Px.displayName = Ax.displayName;
  const EC = zx("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }), Hx = b.forwardRef(({ className: t, variant: e, ...n }, i) => x.jsx(Cx, {
    ref: i,
    className: wi(EC({
      variant: e
    }), t),
    ...n
  }));
  Hx.displayName = Cx.displayName;
  const AC = b.forwardRef(({ className: t, ...e }, n) => x.jsx(Ox, {
    ref: n,
    className: wi("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", t),
    ...e
  }));
  AC.displayName = Ox.displayName;
  const Gx = b.forwardRef(({ className: t, ...e }, n) => x.jsx(Dx, {
    ref: n,
    className: wi("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: x.jsx(q2, {
      className: "h-4 w-4"
    })
  }));
  Gx.displayName = Dx.displayName;
  const Yx = b.forwardRef(({ className: t, ...e }, n) => x.jsx(Mx, {
    ref: n,
    className: wi("text-sm font-semibold", t),
    ...e
  }));
  Yx.displayName = Mx.displayName;
  const qx = b.forwardRef(({ className: t, ...e }, n) => x.jsx(Rx, {
    ref: n,
    className: wi("text-sm opacity-90", t),
    ...e
  }));
  qx.displayName = Rx.displayName;
  function CC() {
    const { toasts: t } = ax();
    return x.jsxs(TC, {
      children: [
        t.map(function({ id: e, title: n, description: i, action: a, ...s }) {
          return x.jsxs(Hx, {
            ...s,
            children: [
              x.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && x.jsx(Yx, {
                    children: n
                  }),
                  i && x.jsx(qx, {
                    children: i
                  })
                ]
              }),
              a,
              x.jsx(Gx, {})
            ]
          }, e);
        }),
        x.jsx(Px, {})
      ]
    });
  }
  var sg = [
    "light",
    "dark"
  ], MC = "(prefers-color-scheme: dark)", RC = b.createContext(void 0), OC = {
    setTheme: (t) => {
    },
    themes: []
  }, DC = () => {
    var t;
    return (t = b.useContext(RC)) != null ? t : OC;
  };
  b.memo(({ forcedTheme: t, storageKey: e, attribute: n, enableSystem: i, enableColorScheme: a, defaultTheme: s, value: r, attrs: o, nonce: l }) => {
    let u = s === "system", c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${o.map((y) => `'${y}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = a ? sg.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", h = (y, v = false, S = true) => {
      let p = r ? r[y] : y, m = v ? y + "|| ''" : `'${p}'`, g = "";
      return a && S && !v && sg.includes(y) && (g += `d.style.colorScheme = '${y}';`), n === "class" ? v || p ? g += `c.add(${m})` : g += "null" : p && (g += `d[s](n,${m})`), g;
    }, d = t ? `!function(){${c}${h(t)}}()` : i ? `!function(){try{${c}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${u})){var t='${MC}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${r ? `var x=${JSON.stringify(r)};` : ""}${h(r ? "x[e]" : "e", true)}}${u ? "" : "else{" + h(s, false, false) + "}"}${f}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${e}');if(e){${r ? `var x=${JSON.stringify(r)};` : ""}${h(r ? "x[e]" : "e", true)}}else{${h(s, false, false)};}${f}}catch(t){}}();`;
    return b.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: {
        __html: d
      }
    });
  });
  var NC = (t) => {
    switch (t) {
      case "success":
        return _C;
      case "info":
        return VC;
      case "warning":
        return LC;
      case "error":
        return BC;
      default:
        return null;
    }
  }, jC = Array(12).fill(0), zC = ({ visible: t, className: e }) => _.createElement("div", {
    className: [
      "sonner-loading-wrapper",
      e
    ].filter(Boolean).join(" "),
    "data-visible": t
  }, _.createElement("div", {
    className: "sonner-spinner"
  }, jC.map((n, i) => _.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${i}`
  })))), _C = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })), LC = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })), VC = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })), BC = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })), kC = _.createElement("svg", {
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
  })), UC = () => {
    let [t, e] = _.useState(document.hidden);
    return _.useEffect(() => {
      let n = () => {
        e(document.hidden);
      };
      return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
    }, []), t;
  }, Lf = 1, PC = class {
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
        let { message: n, ...i } = t, a = typeof (t == null ? void 0 : t.id) == "number" || ((e = t.id) == null ? void 0 : e.length) > 0 ? t.id : Lf++, s = this.toasts.find((o) => o.id === a), r = t.dismissible === void 0 ? true : t.dismissible;
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
          else if (GC(l) && !l.ok) {
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
        let n = (e == null ? void 0 : e.id) || Lf++;
        return this.create({
          jsx: t(n),
          id: n,
          ...e
        }), n;
      }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
    }
  }, ne = new PC(), HC = (t, e) => {
    let n = (e == null ? void 0 : e.id) || Lf++;
    return ne.addToast({
      title: t,
      ...e,
      id: n
    }), n;
  }, GC = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number", YC = HC, qC = () => ne.toasts, XC = () => ne.getActiveToasts();
  Object.assign(YC, {
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
    getHistory: qC,
    getToasts: XC
  });
  function FC(t, { insertAt: e } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", e === "top" && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
  }
  FC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
  function po(t) {
    return t.label !== void 0;
  }
  var QC = 3, KC = "32px", ZC = "16px", rg = 4e3, $C = 356, IC = 14, JC = 20, WC = 200;
  function ke(...t) {
    return t.filter(Boolean).join(" ");
  }
  function tM(t) {
    let [e, n] = t.split("-"), i = [];
    return e && i.push(e), n && i.push(n), i;
  }
  var eM = (t) => {
    var e, n, i, a, s, r, o, l, u, c, f;
    let { invert: h, toast: d, unstyled: y, interacting: v, setHeights: S, visibleToasts: p, heights: m, index: g, toasts: w, expanded: T, removeToast: A, defaultRichColors: E, closeButton: C, style: j, cancelButtonStyle: z, actionButtonStyle: U, className: V = "", descriptionClassName: J = "", duration: L, position: X, gap: R, loadingIcon: D, expandByDefault: O, classNames: N, icons: k, closeButtonAriaLabel: ft = "Close toast", pauseWhenPageIsHidden: F } = t, [Z, $] = _.useState(null), [Tt, zn] = _.useState(null), [at, aa] = _.useState(false), [Ei, sa] = _.useState(false), [Ai, vs] = _.useState(false), [Ci, Cw] = _.useState(false), [Mw, fm] = _.useState(false), [Rw, Su] = _.useState(0), [Ow, dm] = _.useState(0), bs = _.useRef(d.duration || L || rg), hm = _.useRef(null), Mi = _.useRef(null), Dw = g === 0, Nw = g + 1 <= p, be = d.type, ra = d.dismissible !== false, jw = d.className || "", zw = d.descriptionClassName || "", Zr = _.useMemo(() => m.findIndex((H) => H.toastId === d.id) || 0, [
      m,
      d.id
    ]), _w = _.useMemo(() => {
      var H;
      return (H = d.closeButton) != null ? H : C;
    }, [
      d.closeButton,
      C
    ]), mm = _.useMemo(() => d.duration || L || rg, [
      d.duration,
      L
    ]), wu = _.useRef(0), oa = _.useRef(0), pm = _.useRef(0), la = _.useRef(null), [Lw, Vw] = X.split("-"), gm = _.useMemo(() => m.reduce((H, st, yt) => yt >= Zr ? H : H + st.height, 0), [
      m,
      Zr
    ]), ym = UC(), Bw = d.invert || h, Tu = be === "loading";
    oa.current = _.useMemo(() => Zr * R + gm, [
      Zr,
      gm
    ]), _.useEffect(() => {
      bs.current = mm;
    }, [
      mm
    ]), _.useEffect(() => {
      aa(true);
    }, []), _.useEffect(() => {
      let H = Mi.current;
      if (H) {
        let st = H.getBoundingClientRect().height;
        return dm(st), S((yt) => [
          {
            toastId: d.id,
            height: st,
            position: d.position
          },
          ...yt
        ]), () => S((yt) => yt.filter((_e8) => _e8.toastId !== d.id));
      }
    }, [
      S,
      d.id
    ]), _.useLayoutEffect(() => {
      if (!at) return;
      let H = Mi.current, st = H.style.height;
      H.style.height = "auto";
      let yt = H.getBoundingClientRect().height;
      H.style.height = st, dm(yt), S((_e8) => _e8.find((Le) => Le.toastId === d.id) ? _e8.map((Le) => Le.toastId === d.id ? {
        ...Le,
        height: yt
      } : Le) : [
        {
          toastId: d.id,
          height: yt,
          position: d.position
        },
        ..._e8
      ]);
    }, [
      at,
      d.title,
      d.description,
      S,
      d.id
    ]);
    let _n7 = _.useCallback(() => {
      sa(true), Su(oa.current), S((H) => H.filter((st) => st.toastId !== d.id)), setTimeout(() => {
        A(d);
      }, WC);
    }, [
      d,
      A,
      S,
      oa
    ]);
    _.useEffect(() => {
      if (d.promise && be === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
      let H;
      return T || v || F && ym ? (() => {
        if (pm.current < wu.current) {
          let st = (/* @__PURE__ */ new Date()).getTime() - wu.current;
          bs.current = bs.current - st;
        }
        pm.current = (/* @__PURE__ */ new Date()).getTime();
      })() : bs.current !== 1 / 0 && (wu.current = (/* @__PURE__ */ new Date()).getTime(), H = setTimeout(() => {
        var st;
        (st = d.onAutoClose) == null || st.call(d, d), _n7();
      }, bs.current)), () => clearTimeout(H);
    }, [
      T,
      v,
      d,
      be,
      F,
      ym,
      _n7
    ]), _.useEffect(() => {
      d.delete && _n7();
    }, [
      _n7,
      d.delete
    ]);
    function kw() {
      var H, st, yt;
      return k != null && k.loading ? _.createElement("div", {
        className: ke(N == null ? void 0 : N.loader, (H = d == null ? void 0 : d.classNames) == null ? void 0 : H.loader, "sonner-loader"),
        "data-visible": be === "loading"
      }, k.loading) : D ? _.createElement("div", {
        className: ke(N == null ? void 0 : N.loader, (st = d == null ? void 0 : d.classNames) == null ? void 0 : st.loader, "sonner-loader"),
        "data-visible": be === "loading"
      }, D) : _.createElement(zC, {
        className: ke(N == null ? void 0 : N.loader, (yt = d == null ? void 0 : d.classNames) == null ? void 0 : yt.loader),
        visible: be === "loading"
      });
    }
    return _.createElement("li", {
      tabIndex: 0,
      ref: Mi,
      className: ke(V, jw, N == null ? void 0 : N.toast, (e = d == null ? void 0 : d.classNames) == null ? void 0 : e.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[be], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[be]),
      "data-sonner-toast": "",
      "data-rich-colors": (i = d.richColors) != null ? i : E,
      "data-styled": !(d.jsx || d.unstyled || y),
      "data-mounted": at,
      "data-promise": !!d.promise,
      "data-swiped": Mw,
      "data-removed": Ei,
      "data-visible": Nw,
      "data-y-position": Lw,
      "data-x-position": Vw,
      "data-index": g,
      "data-front": Dw,
      "data-swiping": Ai,
      "data-dismissible": ra,
      "data-type": be,
      "data-invert": Bw,
      "data-swipe-out": Ci,
      "data-swipe-direction": Tt,
      "data-expanded": !!(T || O && at),
      style: {
        "--index": g,
        "--toasts-before": g,
        "--z-index": w.length - g,
        "--offset": `${Ei ? Rw : oa.current}px`,
        "--initial-height": O ? "auto" : `${Ow}px`,
        ...j,
        ...d.style
      },
      onDragEnd: () => {
        vs(false), $(null), la.current = null;
      },
      onPointerDown: (H) => {
        Tu || !ra || (hm.current = /* @__PURE__ */ new Date(), Su(oa.current), H.target.setPointerCapture(H.pointerId), H.target.tagName !== "BUTTON" && (vs(true), la.current = {
          x: H.clientX,
          y: H.clientY
        }));
      },
      onPointerUp: () => {
        var H, st, yt, _e8;
        if (Ci || !ra) return;
        la.current = null;
        let Le = Number(((H = Mi.current) == null ? void 0 : H.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), Ln = Number(((st = Mi.current) == null ? void 0 : st.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ri = (/* @__PURE__ */ new Date()).getTime() - ((yt = hm.current) == null ? void 0 : yt.getTime()), Ve = Z === "x" ? Le : Ln, Vn = Math.abs(Ve) / Ri;
        if (Math.abs(Ve) >= JC || Vn > 0.11) {
          Su(oa.current), (_e8 = d.onDismiss) == null || _e8.call(d, d), zn(Z === "x" ? Le > 0 ? "right" : "left" : Ln > 0 ? "down" : "up"), _n7(), Cw(true), fm(false);
          return;
        }
        vs(false), $(null);
      },
      onPointerMove: (H) => {
        var st, yt, _e8, Le;
        if (!la.current || !ra || ((st = window.getSelection()) == null ? void 0 : st.toString().length) > 0) return;
        let Ln = H.clientY - la.current.y, Ri = H.clientX - la.current.x, Ve = (yt = t.swipeDirections) != null ? yt : tM(X);
        !Z && (Math.abs(Ri) > 1 || Math.abs(Ln) > 1) && $(Math.abs(Ri) > Math.abs(Ln) ? "x" : "y");
        let Vn = {
          x: 0,
          y: 0
        };
        Z === "y" ? (Ve.includes("top") || Ve.includes("bottom")) && (Ve.includes("top") && Ln < 0 || Ve.includes("bottom") && Ln > 0) && (Vn.y = Ln) : Z === "x" && (Ve.includes("left") || Ve.includes("right")) && (Ve.includes("left") && Ri < 0 || Ve.includes("right") && Ri > 0) && (Vn.x = Ri), (Math.abs(Vn.x) > 0 || Math.abs(Vn.y) > 0) && fm(true), (_e8 = Mi.current) == null || _e8.style.setProperty("--swipe-amount-x", `${Vn.x}px`), (Le = Mi.current) == null || Le.style.setProperty("--swipe-amount-y", `${Vn.y}px`);
      }
    }, _w && !d.jsx ? _.createElement("button", {
      "aria-label": ft,
      "data-disabled": Tu,
      "data-close-button": true,
      onClick: Tu || !ra ? () => {
      } : () => {
        var H;
        _n7(), (H = d.onDismiss) == null || H.call(d, d);
      },
      className: ke(N == null ? void 0 : N.closeButton, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.closeButton)
    }, (s = k == null ? void 0 : k.close) != null ? s : kC) : null, d.jsx || b.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : _.createElement(_.Fragment, null, be || d.icon || d.promise ? _.createElement("div", {
      "data-icon": "",
      className: ke(N == null ? void 0 : N.icon, (r = d == null ? void 0 : d.classNames) == null ? void 0 : r.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || kw() : null, d.type !== "loading" ? d.icon || (k == null ? void 0 : k[be]) || NC(be) : null) : null, _.createElement("div", {
      "data-content": "",
      className: ke(N == null ? void 0 : N.content, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.content)
    }, _.createElement("div", {
      "data-title": "",
      className: ke(N == null ? void 0 : N.title, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.title)
    }, typeof d.title == "function" ? d.title() : d.title), d.description ? _.createElement("div", {
      "data-description": "",
      className: ke(J, zw, N == null ? void 0 : N.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description)
    }, typeof d.description == "function" ? d.description() : d.description) : null), b.isValidElement(d.cancel) ? d.cancel : d.cancel && po(d.cancel) ? _.createElement("button", {
      "data-button": true,
      "data-cancel": true,
      style: d.cancelButtonStyle || z,
      onClick: (H) => {
        var st, yt;
        po(d.cancel) && ra && ((yt = (st = d.cancel).onClick) == null || yt.call(st, H), _n7());
      },
      className: ke(N == null ? void 0 : N.cancelButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.cancelButton)
    }, d.cancel.label) : null, b.isValidElement(d.action) ? d.action : d.action && po(d.action) ? _.createElement("button", {
      "data-button": true,
      "data-action": true,
      style: d.actionButtonStyle || U,
      onClick: (H) => {
        var st, yt;
        po(d.action) && ((yt = (st = d.action).onClick) == null || yt.call(st, H), !H.defaultPrevented && _n7());
      },
      className: ke(N == null ? void 0 : N.actionButton, (f = d == null ? void 0 : d.classNames) == null ? void 0 : f.actionButton)
    }, d.action.label) : null));
  };
  function og() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
  }
  function nM(t, e) {
    let n = {};
    return [
      t,
      e
    ].forEach((i, a) => {
      let s = a === 1, r = s ? "--mobile-offset" : "--offset", o = s ? ZC : KC;
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
  var iM = b.forwardRef(function(t, e) {
    let { invert: n, position: i = "bottom-right", hotkey: a = [
      "altKey",
      "KeyT"
    ], expand: s, closeButton: r, className: o, offset: l, mobileOffset: u, theme: c = "light", richColors: f, duration: h, style: d, visibleToasts: y = QC, toastOptions: v, dir: S = og(), gap: p = IC, loadingIcon: m, icons: g, containerAriaLabel: w = "Notifications", pauseWhenPageIsHidden: T } = t, [A, E] = _.useState([]), C = _.useMemo(() => Array.from(new Set([
      i
    ].concat(A.filter((F) => F.position).map((F) => F.position)))), [
      A,
      i
    ]), [j, z] = _.useState([]), [U, V] = _.useState(false), [J, L] = _.useState(false), [X, R] = _.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), D = _.useRef(null), O = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), N = _.useRef(null), k = _.useRef(false), ft = _.useCallback((F) => {
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
        g0.flushSync(() => {
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
        a.every((zn) => Z[zn] || Z.code === zn) && (V(true), ($ = D.current) == null || $.focus()), Z.code === "Escape" && (document.activeElement === D.current || (Tt = D.current) != null && Tt.contains(document.activeElement)) && V(false);
      };
      return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
    }, [
      a
    ]), _.useEffect(() => {
      if (D.current) return () => {
        N.current && (N.current.focus({
          preventScroll: true
        }), N.current = null, k.current = false);
      };
    }, [
      D.current
    ]), _.createElement("section", {
      ref: e,
      "aria-label": `${w} ${O}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: true
    }, C.map((F, Z) => {
      var $;
      let [Tt, zn] = F.split("-");
      return A.length ? _.createElement("ol", {
        key: F,
        dir: S === "auto" ? og() : S,
        tabIndex: -1,
        ref: D,
        className: o,
        "data-sonner-toaster": true,
        "data-theme": X,
        "data-y-position": Tt,
        "data-lifted": U && A.length > 1 && !s,
        "data-x-position": zn,
        style: {
          "--front-toast-height": `${(($ = j[0]) == null ? void 0 : $.height) || 0}px`,
          "--width": `${$C}px`,
          "--gap": `${p}px`,
          ...d,
          ...nM(l, u)
        },
        onBlur: (at) => {
          k.current && !at.currentTarget.contains(at.relatedTarget) && (k.current = false, N.current && (N.current.focus({
            preventScroll: true
          }), N.current = null));
        },
        onFocus: (at) => {
          at.target instanceof HTMLElement && at.target.dataset.dismissible === "false" || k.current || (k.current = true, N.current = at.relatedTarget);
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
      }, A.filter((at) => !at.position && Z === 0 || at.position === F).map((at, aa) => {
        var Ei, sa;
        return _.createElement(eM, {
          key: at.id,
          icons: g,
          index: aa,
          toast: at,
          defaultRichColors: f,
          duration: (Ei = v == null ? void 0 : v.duration) != null ? Ei : h,
          className: v == null ? void 0 : v.className,
          descriptionClassName: v == null ? void 0 : v.descriptionClassName,
          invert: n,
          visibleToasts: y,
          closeButton: (sa = v == null ? void 0 : v.closeButton) != null ? sa : r,
          interacting: J,
          position: F,
          style: v == null ? void 0 : v.style,
          unstyled: v == null ? void 0 : v.unstyled,
          classNames: v == null ? void 0 : v.classNames,
          cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
          actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
          removeToast: ft,
          toasts: A.filter((Ai) => Ai.position == at.position),
          heights: j.filter((Ai) => Ai.position == at.position),
          setHeights: z,
          expandByDefault: s,
          gap: p,
          loadingIcon: m,
          expanded: U,
          pauseWhenPageIsHidden: T,
          swipeDirections: t.swipeDirections
        });
      })) : null;
    }));
  });
  const aM = ({ ...t }) => {
    const { theme: e = "system" } = DC();
    return x.jsx(iM, {
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
  }, sM = [
    "top",
    "right",
    "bottom",
    "left"
  ], gi = Math.min, ue = Math.max, Al = Math.round, go = Math.floor, en = (t) => ({
    x: t,
    y: t
  }), rM = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  }, oM = {
    start: "end",
    end: "start"
  };
  function Vf(t, e, n) {
    return ue(t, gi(e, n));
  }
  function On(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function Dn(t) {
    return t.split("-")[0];
  }
  function hs(t) {
    return t.split("-")[1];
  }
  function wh(t) {
    return t === "x" ? "y" : "x";
  }
  function Th(t) {
    return t === "y" ? "height" : "width";
  }
  const lM = /* @__PURE__ */ new Set([
    "top",
    "bottom"
  ]);
  function We(t) {
    return lM.has(Dn(t)) ? "y" : "x";
  }
  function Eh(t) {
    return wh(We(t));
  }
  function uM(t, e, n) {
    n === void 0 && (n = false);
    const i = hs(t), a = Eh(t), s = Th(a);
    let r = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return e.reference[s] > e.floating[s] && (r = Cl(r)), [
      r,
      Cl(r)
    ];
  }
  function cM(t) {
    const e = Cl(t);
    return [
      Bf(t),
      e,
      Bf(e)
    ];
  }
  function Bf(t) {
    return t.replace(/start|end/g, (e) => oM[e]);
  }
  const lg = [
    "left",
    "right"
  ], ug = [
    "right",
    "left"
  ], fM = [
    "top",
    "bottom"
  ], dM = [
    "bottom",
    "top"
  ];
  function hM(t, e, n) {
    switch (t) {
      case "top":
      case "bottom":
        return n ? e ? ug : lg : e ? lg : ug;
      case "left":
      case "right":
        return e ? fM : dM;
      default:
        return [];
    }
  }
  function mM(t, e, n, i) {
    const a = hs(t);
    let s = hM(Dn(t), n === "start", i);
    return a && (s = s.map((r) => r + "-" + a), e && (s = s.concat(s.map(Bf)))), s;
  }
  function Cl(t) {
    return t.replace(/left|right|bottom|top/g, (e) => rM[e]);
  }
  function pM(t) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...t
    };
  }
  function Xx(t) {
    return typeof t != "number" ? pM(t) : {
      top: t,
      right: t,
      bottom: t,
      left: t
    };
  }
  function Ml(t) {
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
  function cg(t, e, n) {
    let { reference: i, floating: a } = t;
    const s = We(e), r = Eh(e), o = Th(r), l = Dn(e), u = s === "y", c = i.x + i.width / 2 - a.width / 2, f = i.y + i.height / 2 - a.height / 2, h = i[o] / 2 - a[o] / 2;
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
    switch (hs(e)) {
      case "start":
        d[r] -= h * (n && u ? -1 : 1);
        break;
      case "end":
        d[r] += h * (n && u ? -1 : 1);
        break;
    }
    return d;
  }
  const gM = async (t, e, n) => {
    const { placement: i = "bottom", strategy: a = "absolute", middleware: s = [], platform: r } = n, o = s.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
    let u = await r.getElementRects({
      reference: t,
      floating: e,
      strategy: a
    }), { x: c, y: f } = cg(u, i, l), h = i, d = {}, y = 0;
    for (let v = 0; v < o.length; v++) {
      const { name: S, fn: p } = o[v], { x: m, y: g, data: w, reset: T } = await p({
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
        [S]: {
          ...d[S],
          ...w
        }
      }, T && y <= 50 && (y++, typeof T == "object" && (T.placement && (h = T.placement), T.rects && (u = T.rects === true ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: a
      }) : T.rects), { x: c, y: f } = cg(u, h, l)), v = -1);
    }
    return {
      x: c,
      y: f,
      placement: h,
      strategy: a,
      middlewareData: d
    };
  };
  async function gr(t, e) {
    var n;
    e === void 0 && (e = {});
    const { x: i, y: a, platform: s, rects: r, elements: o, strategy: l } = t, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: f = "floating", altBoundary: h = false, padding: d = 0 } = On(e, t), y = Xx(d), S = o[h ? f === "floating" ? "reference" : "floating" : f], p = Ml(await s.getClippingRect({
      element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(o.floating)),
      boundary: u,
      rootBoundary: c,
      strategy: l
    })), m = f === "floating" ? {
      x: i,
      y: a,
      width: r.floating.width,
      height: r.floating.height
    } : r.reference, g = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(o.floating)), w = await (s.isElement == null ? void 0 : s.isElement(g)) ? await (s.getScale == null ? void 0 : s.getScale(g)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, T = Ml(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: o,
      rect: m,
      offsetParent: g,
      strategy: l
    }) : m);
    return {
      top: (p.top - T.top + y.top) / w.y,
      bottom: (T.bottom - p.bottom + y.bottom) / w.y,
      left: (p.left - T.left + y.left) / w.x,
      right: (T.right - p.right + y.right) / w.x
    };
  }
  const yM = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const { x: n, y: i, placement: a, rects: s, platform: r, elements: o, middlewareData: l } = e, { element: u, padding: c = 0 } = On(t, e) || {};
      if (u == null) return {};
      const f = Xx(c), h = {
        x: n,
        y: i
      }, d = Eh(a), y = Th(d), v = await r.getDimensions(u), S = d === "y", p = S ? "top" : "left", m = S ? "bottom" : "right", g = S ? "clientHeight" : "clientWidth", w = s.reference[y] + s.reference[d] - h[d] - s.floating[y], T = h[d] - s.reference[d], A = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u));
      let E = A ? A[g] : 0;
      (!E || !await (r.isElement == null ? void 0 : r.isElement(A))) && (E = o.floating[g] || s.floating[y]);
      const C = w / 2 - T / 2, j = E / 2 - v[y] / 2 - 1, z = gi(f[p], j), U = gi(f[m], j), V = z, J = E - v[y] - U, L = E / 2 - v[y] / 2 + C, X = Vf(V, L, J), R = !l.arrow && hs(a) != null && L !== X && s.reference[y] / 2 - (L < V ? z : U) - v[y] / 2 < 0, D = R ? L < V ? L - V : L - J : 0;
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
  }), vM = function(t) {
    return t === void 0 && (t = {}), {
      name: "flip",
      options: t,
      async fn(e) {
        var n, i;
        const { placement: a, middlewareData: s, rects: r, initialPlacement: o, platform: l, elements: u } = e, { mainAxis: c = true, crossAxis: f = true, fallbackPlacements: h, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: v = true, ...S } = On(t, e);
        if ((n = s.arrow) != null && n.alignmentOffset) return {};
        const p = Dn(a), m = We(o), g = Dn(o) === o, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), T = h || (g || !v ? [
          Cl(o)
        ] : cM(o)), A = y !== "none";
        !h && A && T.push(...mM(o, v, y, w));
        const E = [
          o,
          ...T
        ], C = await gr(e, S), j = [];
        let z = ((i = s.flip) == null ? void 0 : i.overflows) || [];
        if (c && j.push(C[p]), f) {
          const L = uM(a, r, w);
          j.push(C[L[0]], C[L[1]]);
        }
        if (z = [
          ...z,
          {
            placement: a,
            overflows: j
          }
        ], !j.every((L) => L <= 0)) {
          var U, V;
          const L = (((U = s.flip) == null ? void 0 : U.index) || 0) + 1, X = E[L];
          if (X && (!(f === "alignment" ? m !== We(X) : false) || z.every((O) => O.overflows[0] > 0 && We(O.placement) === m))) return {
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
                  const N = We(O.placement);
                  return N === m || N === "y";
                }
                return true;
              }).map((O) => [
                O.placement,
                O.overflows.filter((N) => N > 0).reduce((N, k) => N + k, 0)
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
  function fg(t, e) {
    return {
      top: t.top - e.height,
      right: t.right - e.width,
      bottom: t.bottom - e.height,
      left: t.left - e.width
    };
  }
  function dg(t) {
    return sM.some((e) => t[e] >= 0);
  }
  const bM = function(t) {
    return t === void 0 && (t = {}), {
      name: "hide",
      options: t,
      async fn(e) {
        const { rects: n } = e, { strategy: i = "referenceHidden", ...a } = On(t, e);
        switch (i) {
          case "referenceHidden": {
            const s = await gr(e, {
              ...a,
              elementContext: "reference"
            }), r = fg(s, n.reference);
            return {
              data: {
                referenceHiddenOffsets: r,
                referenceHidden: dg(r)
              }
            };
          }
          case "escaped": {
            const s = await gr(e, {
              ...a,
              altBoundary: true
            }), r = fg(s, n.floating);
            return {
              data: {
                escapedOffsets: r,
                escaped: dg(r)
              }
            };
          }
          default:
            return {};
        }
      }
    };
  }, Fx = /* @__PURE__ */ new Set([
    "left",
    "top"
  ]);
  async function xM(t, e) {
    const { placement: n, platform: i, elements: a } = t, s = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), r = Dn(n), o = hs(n), l = We(n) === "y", u = Fx.has(r) ? -1 : 1, c = s && l ? -1 : 1, f = On(e, t);
    let { mainAxis: h, crossAxis: d, alignmentAxis: y } = typeof f == "number" ? {
      mainAxis: f,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: f.mainAxis || 0,
      crossAxis: f.crossAxis || 0,
      alignmentAxis: f.alignmentAxis
    };
    return o && typeof y == "number" && (d = o === "end" ? y * -1 : y), l ? {
      x: d * c,
      y: h * u
    } : {
      x: h * u,
      y: d * c
    };
  }
  const SM = function(t) {
    return t === void 0 && (t = 0), {
      name: "offset",
      options: t,
      async fn(e) {
        var n, i;
        const { x: a, y: s, placement: r, middlewareData: o } = e, l = await xM(e, t);
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
  }, wM = function(t) {
    return t === void 0 && (t = {}), {
      name: "shift",
      options: t,
      async fn(e) {
        const { x: n, y: i, placement: a } = e, { mainAxis: s = true, crossAxis: r = false, limiter: o = {
          fn: (S) => {
            let { x: p, y: m } = S;
            return {
              x: p,
              y: m
            };
          }
        }, ...l } = On(t, e), u = {
          x: n,
          y: i
        }, c = await gr(e, l), f = We(Dn(a)), h = wh(f);
        let d = u[h], y = u[f];
        if (s) {
          const S = h === "y" ? "top" : "left", p = h === "y" ? "bottom" : "right", m = d + c[S], g = d - c[p];
          d = Vf(m, d, g);
        }
        if (r) {
          const S = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", m = y + c[S], g = y - c[p];
          y = Vf(m, y, g);
        }
        const v = o.fn({
          ...e,
          [h]: d,
          [f]: y
        });
        return {
          ...v,
          data: {
            x: v.x - n,
            y: v.y - i,
            enabled: {
              [h]: s,
              [f]: r
            }
          }
        };
      }
    };
  }, TM = function(t) {
    return t === void 0 && (t = {}), {
      options: t,
      fn(e) {
        const { x: n, y: i, placement: a, rects: s, middlewareData: r } = e, { offset: o = 0, mainAxis: l = true, crossAxis: u = true } = On(t, e), c = {
          x: n,
          y: i
        }, f = We(a), h = wh(f);
        let d = c[h], y = c[f];
        const v = On(o, e), S = typeof v == "number" ? {
          mainAxis: v,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...v
        };
        if (l) {
          const g = h === "y" ? "height" : "width", w = s.reference[h] - s.floating[g] + S.mainAxis, T = s.reference[h] + s.reference[g] - S.mainAxis;
          d < w ? d = w : d > T && (d = T);
        }
        if (u) {
          var p, m;
          const g = h === "y" ? "width" : "height", w = Fx.has(Dn(a)), T = s.reference[f] - s.floating[g] + (w && ((p = r.offset) == null ? void 0 : p[f]) || 0) + (w ? 0 : S.crossAxis), A = s.reference[f] + s.reference[g] + (w ? 0 : ((m = r.offset) == null ? void 0 : m[f]) || 0) - (w ? S.crossAxis : 0);
          y < T ? y = T : y > A && (y = A);
        }
        return {
          [h]: d,
          [f]: y
        };
      }
    };
  }, EM = function(t) {
    return t === void 0 && (t = {}), {
      name: "size",
      options: t,
      async fn(e) {
        var n, i;
        const { placement: a, rects: s, platform: r, elements: o } = e, { apply: l = () => {
        }, ...u } = On(t, e), c = await gr(e, u), f = Dn(a), h = hs(a), d = We(a) === "y", { width: y, height: v } = s.floating;
        let S, p;
        f === "top" || f === "bottom" ? (S = f, p = h === (await (r.isRTL == null ? void 0 : r.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (p = f, S = h === "end" ? "top" : "bottom");
        const m = v - c.top - c.bottom, g = y - c.left - c.right, w = gi(v - c[S], m), T = gi(y - c[p], g), A = !e.middlewareData.shift;
        let E = w, C = T;
        if ((n = e.middlewareData.shift) != null && n.enabled.x && (C = g), (i = e.middlewareData.shift) != null && i.enabled.y && (E = m), A && !h) {
          const z = ue(c.left, 0), U = ue(c.right, 0), V = ue(c.top, 0), J = ue(c.bottom, 0);
          d ? C = y - 2 * (z !== 0 || U !== 0 ? z + U : ue(c.left, c.right)) : E = v - 2 * (V !== 0 || J !== 0 ? V + J : ue(c.top, c.bottom));
        }
        await l({
          ...e,
          availableWidth: C,
          availableHeight: E
        });
        const j = await r.getDimensions(o.floating);
        return y !== j.width || v !== j.height ? {
          reset: {
            rects: true
          }
        } : {};
      }
    };
  };
  function uu() {
    return typeof window < "u";
  }
  function ms(t) {
    return Qx(t) ? (t.nodeName || "").toLowerCase() : "#document";
  }
  function ge(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
  }
  function un(t) {
    var e;
    return (e = (Qx(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
  }
  function Qx(t) {
    return uu() ? t instanceof Node || t instanceof ge(t).Node : false;
  }
  function qe(t) {
    return uu() ? t instanceof Element || t instanceof ge(t).Element : false;
  }
  function an(t) {
    return uu() ? t instanceof HTMLElement || t instanceof ge(t).HTMLElement : false;
  }
  function hg(t) {
    return !uu() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof ge(t).ShadowRoot;
  }
  const AM = /* @__PURE__ */ new Set([
    "inline",
    "contents"
  ]);
  function Gr(t) {
    const { overflow: e, overflowX: n, overflowY: i, display: a } = Xe(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !AM.has(a);
  }
  const CM = /* @__PURE__ */ new Set([
    "table",
    "td",
    "th"
  ]);
  function MM(t) {
    return CM.has(ms(t));
  }
  const RM = [
    ":popover-open",
    ":modal"
  ];
  function cu(t) {
    return RM.some((e) => {
      try {
        return t.matches(e);
      } catch {
        return false;
      }
    });
  }
  const OM = [
    "transform",
    "translate",
    "scale",
    "rotate",
    "perspective"
  ], DM = [
    "transform",
    "translate",
    "scale",
    "rotate",
    "perspective",
    "filter"
  ], NM = [
    "paint",
    "layout",
    "strict",
    "content"
  ];
  function Ah(t) {
    const e = Ch(), n = qe(t) ? Xe(t) : t;
    return OM.some((i) => n[i] ? n[i] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !e && (n.filter ? n.filter !== "none" : false) || DM.some((i) => (n.willChange || "").includes(i)) || NM.some((i) => (n.contain || "").includes(i));
  }
  function jM(t) {
    let e = yi(t);
    for (; an(e) && !ts(e); ) {
      if (Ah(e)) return e;
      if (cu(e)) return null;
      e = yi(e);
    }
    return null;
  }
  function Ch() {
    return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
  }
  const zM = /* @__PURE__ */ new Set([
    "html",
    "body",
    "#document"
  ]);
  function ts(t) {
    return zM.has(ms(t));
  }
  function Xe(t) {
    return ge(t).getComputedStyle(t);
  }
  function fu(t) {
    return qe(t) ? {
      scrollLeft: t.scrollLeft,
      scrollTop: t.scrollTop
    } : {
      scrollLeft: t.scrollX,
      scrollTop: t.scrollY
    };
  }
  function yi(t) {
    if (ms(t) === "html") return t;
    const e = t.assignedSlot || t.parentNode || hg(t) && t.host || un(t);
    return hg(e) ? e.host : e;
  }
  function Kx(t) {
    const e = yi(t);
    return ts(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : an(e) && Gr(e) ? e : Kx(e);
  }
  function yr(t, e, n) {
    var i;
    e === void 0 && (e = []), n === void 0 && (n = true);
    const a = Kx(t), s = a === ((i = t.ownerDocument) == null ? void 0 : i.body), r = ge(a);
    if (s) {
      const o = kf(r);
      return e.concat(r, r.visualViewport || [], Gr(a) ? a : [], o && n ? yr(o) : []);
    }
    return e.concat(a, yr(a, [], n));
  }
  function kf(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
  }
  function Zx(t) {
    const e = Xe(t);
    let n = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
    const a = an(t), s = a ? t.offsetWidth : n, r = a ? t.offsetHeight : i, o = Al(n) !== s || Al(i) !== r;
    return o && (n = s, i = r), {
      width: n,
      height: i,
      $: o
    };
  }
  function Mh(t) {
    return qe(t) ? t : t.contextElement;
  }
  function Ha(t) {
    const e = Mh(t);
    if (!an(e)) return en(1);
    const n = e.getBoundingClientRect(), { width: i, height: a, $: s } = Zx(e);
    let r = (s ? Al(n.width) : n.width) / i, o = (s ? Al(n.height) : n.height) / a;
    return (!r || !Number.isFinite(r)) && (r = 1), (!o || !Number.isFinite(o)) && (o = 1), {
      x: r,
      y: o
    };
  }
  const _M = en(0);
  function $x(t) {
    const e = ge(t);
    return !Ch() || !e.visualViewport ? _M : {
      x: e.visualViewport.offsetLeft,
      y: e.visualViewport.offsetTop
    };
  }
  function LM(t, e, n) {
    return e === void 0 && (e = false), !n || e && n !== ge(t) ? false : e;
  }
  function Zi(t, e, n, i) {
    e === void 0 && (e = false), n === void 0 && (n = false);
    const a = t.getBoundingClientRect(), s = Mh(t);
    let r = en(1);
    e && (i ? qe(i) && (r = Ha(i)) : r = Ha(t));
    const o = LM(s, n, i) ? $x(s) : en(0);
    let l = (a.left + o.x) / r.x, u = (a.top + o.y) / r.y, c = a.width / r.x, f = a.height / r.y;
    if (s) {
      const h = ge(s), d = i && qe(i) ? ge(i) : i;
      let y = h, v = kf(y);
      for (; v && i && d !== y; ) {
        const S = Ha(v), p = v.getBoundingClientRect(), m = Xe(v), g = p.left + (v.clientLeft + parseFloat(m.paddingLeft)) * S.x, w = p.top + (v.clientTop + parseFloat(m.paddingTop)) * S.y;
        l *= S.x, u *= S.y, c *= S.x, f *= S.y, l += g, u += w, y = ge(v), v = kf(y);
      }
    }
    return Ml({
      width: c,
      height: f,
      x: l,
      y: u
    });
  }
  function Rh(t, e) {
    const n = fu(t).scrollLeft;
    return e ? e.left + n : Zi(un(t)).left + n;
  }
  function Ix(t, e, n) {
    n === void 0 && (n = false);
    const i = t.getBoundingClientRect(), a = i.left + e.scrollLeft - (n ? 0 : Rh(t, i)), s = i.top + e.scrollTop;
    return {
      x: a,
      y: s
    };
  }
  function VM(t) {
    let { elements: e, rect: n, offsetParent: i, strategy: a } = t;
    const s = a === "fixed", r = un(i), o = e ? cu(e.floating) : false;
    if (i === r || o && s) return n;
    let l = {
      scrollLeft: 0,
      scrollTop: 0
    }, u = en(1);
    const c = en(0), f = an(i);
    if ((f || !f && !s) && ((ms(i) !== "body" || Gr(r)) && (l = fu(i)), an(i))) {
      const d = Zi(i);
      u = Ha(i), c.x = d.x + i.clientLeft, c.y = d.y + i.clientTop;
    }
    const h = r && !f && !s ? Ix(r, l, true) : en(0);
    return {
      width: n.width * u.x,
      height: n.height * u.y,
      x: n.x * u.x - l.scrollLeft * u.x + c.x + h.x,
      y: n.y * u.y - l.scrollTop * u.y + c.y + h.y
    };
  }
  function BM(t) {
    return Array.from(t.getClientRects());
  }
  function kM(t) {
    const e = un(t), n = fu(t), i = t.ownerDocument.body, a = ue(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth), s = ue(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
    let r = -n.scrollLeft + Rh(t);
    const o = -n.scrollTop;
    return Xe(i).direction === "rtl" && (r += ue(e.clientWidth, i.clientWidth) - a), {
      width: a,
      height: s,
      x: r,
      y: o
    };
  }
  function UM(t, e) {
    const n = ge(t), i = un(t), a = n.visualViewport;
    let s = i.clientWidth, r = i.clientHeight, o = 0, l = 0;
    if (a) {
      s = a.width, r = a.height;
      const u = Ch();
      (!u || u && e === "fixed") && (o = a.offsetLeft, l = a.offsetTop);
    }
    return {
      width: s,
      height: r,
      x: o,
      y: l
    };
  }
  const PM = /* @__PURE__ */ new Set([
    "absolute",
    "fixed"
  ]);
  function HM(t, e) {
    const n = Zi(t, true, e === "fixed"), i = n.top + t.clientTop, a = n.left + t.clientLeft, s = an(t) ? Ha(t) : en(1), r = t.clientWidth * s.x, o = t.clientHeight * s.y, l = a * s.x, u = i * s.y;
    return {
      width: r,
      height: o,
      x: l,
      y: u
    };
  }
  function mg(t, e, n) {
    let i;
    if (e === "viewport") i = UM(t, n);
    else if (e === "document") i = kM(un(t));
    else if (qe(e)) i = HM(e, n);
    else {
      const a = $x(t);
      i = {
        x: e.x - a.x,
        y: e.y - a.y,
        width: e.width,
        height: e.height
      };
    }
    return Ml(i);
  }
  function Jx(t, e) {
    const n = yi(t);
    return n === e || !qe(n) || ts(n) ? false : Xe(n).position === "fixed" || Jx(n, e);
  }
  function GM(t, e) {
    const n = e.get(t);
    if (n) return n;
    let i = yr(t, [], false).filter((o) => qe(o) && ms(o) !== "body"), a = null;
    const s = Xe(t).position === "fixed";
    let r = s ? yi(t) : t;
    for (; qe(r) && !ts(r); ) {
      const o = Xe(r), l = Ah(r);
      !l && o.position === "fixed" && (a = null), (s ? !l && !a : !l && o.position === "static" && !!a && PM.has(a.position) || Gr(r) && !l && Jx(t, r)) ? i = i.filter((c) => c !== r) : a = o, r = yi(r);
    }
    return e.set(t, i), i;
  }
  function YM(t) {
    let { element: e, boundary: n, rootBoundary: i, strategy: a } = t;
    const r = [
      ...n === "clippingAncestors" ? cu(e) ? [] : GM(e, this._c) : [].concat(n),
      i
    ], o = r[0], l = r.reduce((u, c) => {
      const f = mg(e, c, a);
      return u.top = ue(f.top, u.top), u.right = gi(f.right, u.right), u.bottom = gi(f.bottom, u.bottom), u.left = ue(f.left, u.left), u;
    }, mg(e, o, a));
    return {
      width: l.right - l.left,
      height: l.bottom - l.top,
      x: l.left,
      y: l.top
    };
  }
  function qM(t) {
    const { width: e, height: n } = Zx(t);
    return {
      width: e,
      height: n
    };
  }
  function XM(t, e, n) {
    const i = an(e), a = un(e), s = n === "fixed", r = Zi(t, true, s, e);
    let o = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const l = en(0);
    function u() {
      l.x = Rh(a);
    }
    if (i || !i && !s) if ((ms(e) !== "body" || Gr(a)) && (o = fu(e)), i) {
      const d = Zi(e, true, s, e);
      l.x = d.x + e.clientLeft, l.y = d.y + e.clientTop;
    } else a && u();
    s && !i && a && u();
    const c = a && !i && !s ? Ix(a, o) : en(0), f = r.left + o.scrollLeft - l.x - c.x, h = r.top + o.scrollTop - l.y - c.y;
    return {
      x: f,
      y: h,
      width: r.width,
      height: r.height
    };
  }
  function dc(t) {
    return Xe(t).position === "static";
  }
  function pg(t, e) {
    if (!an(t) || Xe(t).position === "fixed") return null;
    if (e) return e(t);
    let n = t.offsetParent;
    return un(t) === n && (n = n.ownerDocument.body), n;
  }
  function Wx(t, e) {
    const n = ge(t);
    if (cu(t)) return n;
    if (!an(t)) {
      let a = yi(t);
      for (; a && !ts(a); ) {
        if (qe(a) && !dc(a)) return a;
        a = yi(a);
      }
      return n;
    }
    let i = pg(t, e);
    for (; i && MM(i) && dc(i); ) i = pg(i, e);
    return i && ts(i) && dc(i) && !Ah(i) ? n : i || jM(t) || n;
  }
  const FM = async function(t) {
    const e = this.getOffsetParent || Wx, n = this.getDimensions, i = await n(t.floating);
    return {
      reference: XM(t.reference, await e(t.floating), t.strategy),
      floating: {
        x: 0,
        y: 0,
        width: i.width,
        height: i.height
      }
    };
  };
  function QM(t) {
    return Xe(t).direction === "rtl";
  }
  const KM = {
    convertOffsetParentRelativeRectToViewportRelativeRect: VM,
    getDocumentElement: un,
    getClippingRect: YM,
    getOffsetParent: Wx,
    getElementRects: FM,
    getClientRects: BM,
    getDimensions: qM,
    getScale: Ha,
    isElement: qe,
    isRTL: QM
  };
  function t1(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
  }
  function ZM(t, e) {
    let n = null, i;
    const a = un(t);
    function s() {
      var o;
      clearTimeout(i), (o = n) == null || o.disconnect(), n = null;
    }
    function r(o, l) {
      o === void 0 && (o = false), l === void 0 && (l = 1), s();
      const u = t.getBoundingClientRect(), { left: c, top: f, width: h, height: d } = u;
      if (o || e(), !h || !d) return;
      const y = go(f), v = go(a.clientWidth - (c + h)), S = go(a.clientHeight - (f + d)), p = go(c), g = {
        rootMargin: -y + "px " + -v + "px " + -S + "px " + -p + "px",
        threshold: ue(0, gi(1, l)) || 1
      };
      let w = true;
      function T(A) {
        const E = A[0].intersectionRatio;
        if (E !== l) {
          if (!w) return r();
          E ? r(false, E) : i = setTimeout(() => {
            r(false, 1e-7);
          }, 1e3);
        }
        E === 1 && !t1(u, t.getBoundingClientRect()) && r(), w = false;
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
  function $M(t, e, n, i) {
    i === void 0 && (i = {});
    const { ancestorScroll: a = true, ancestorResize: s = true, elementResize: r = typeof ResizeObserver == "function", layoutShift: o = typeof IntersectionObserver == "function", animationFrame: l = false } = i, u = Mh(t), c = a || s ? [
      ...u ? yr(u) : [],
      ...yr(e)
    ] : [];
    c.forEach((p) => {
      a && p.addEventListener("scroll", n, {
        passive: true
      }), s && p.addEventListener("resize", n);
    });
    const f = u && o ? ZM(u, n) : null;
    let h = -1, d = null;
    r && (d = new ResizeObserver((p) => {
      let [m] = p;
      m && m.target === u && d && (d.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
        var g;
        (g = d) == null || g.observe(e);
      })), n();
    }), u && !l && d.observe(u), d.observe(e));
    let y, v = l ? Zi(t) : null;
    l && S();
    function S() {
      const p = Zi(t);
      v && !t1(v, p) && n(), v = p, y = requestAnimationFrame(S);
    }
    return n(), () => {
      var p;
      c.forEach((m) => {
        a && m.removeEventListener("scroll", n), s && m.removeEventListener("resize", n);
      }), f == null ? void 0 : f(), (p = d) == null || p.disconnect(), d = null, l && cancelAnimationFrame(y);
    };
  }
  const IM = SM, JM = wM, WM = vM, tR = EM, eR = bM, gg = yM, nR = TM, iR = (t, e, n) => {
    const i = /* @__PURE__ */ new Map(), a = {
      platform: KM,
      ...n
    }, s = {
      ...a.platform,
      _c: i
    };
    return gM(t, e, {
      ...a,
      platform: s
    });
  };
  var aR = typeof document < "u", sR = function() {
  }, Ho = aR ? b.useLayoutEffect : sR;
  function Rl(t, e) {
    if (t === e) return true;
    if (typeof t != typeof e) return false;
    if (typeof t == "function" && t.toString() === e.toString()) return true;
    let n, i, a;
    if (t && e && typeof t == "object") {
      if (Array.isArray(t)) {
        if (n = t.length, n !== e.length) return false;
        for (i = n; i-- !== 0; ) if (!Rl(t[i], e[i])) return false;
        return true;
      }
      if (a = Object.keys(t), n = a.length, n !== Object.keys(e).length) return false;
      for (i = n; i-- !== 0; ) if (!{}.hasOwnProperty.call(e, a[i])) return false;
      for (i = n; i-- !== 0; ) {
        const s = a[i];
        if (!(s === "_owner" && t.$$typeof) && !Rl(t[s], e[s])) return false;
      }
      return true;
    }
    return t !== t && e !== e;
  }
  function e1(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function yg(t, e) {
    const n = e1(t);
    return Math.round(e * n) / n;
  }
  function hc(t) {
    const e = b.useRef(t);
    return Ho(() => {
      e.current = t;
    }), e;
  }
  function rR(t) {
    t === void 0 && (t = {});
    const { placement: e = "bottom", strategy: n = "absolute", middleware: i = [], platform: a, elements: { reference: s, floating: r } = {}, transform: o = true, whileElementsMounted: l, open: u } = t, [c, f] = b.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: e,
      middlewareData: {},
      isPositioned: false
    }), [h, d] = b.useState(i);
    Rl(h, i) || d(i);
    const [y, v] = b.useState(null), [S, p] = b.useState(null), m = b.useCallback((O) => {
      O !== A.current && (A.current = O, v(O));
    }, []), g = b.useCallback((O) => {
      O !== E.current && (E.current = O, p(O));
    }, []), w = s || y, T = r || S, A = b.useRef(null), E = b.useRef(null), C = b.useRef(c), j = l != null, z = hc(l), U = hc(a), V = hc(u), J = b.useCallback(() => {
      if (!A.current || !E.current) return;
      const O = {
        placement: e,
        strategy: n,
        middleware: h
      };
      U.current && (O.platform = U.current), iR(A.current, E.current, O).then((N) => {
        const k = {
          ...N,
          isPositioned: V.current !== false
        };
        L.current && !Rl(C.current, k) && (C.current = k, Rr.flushSync(() => {
          f(k);
        }));
      });
    }, [
      h,
      e,
      n,
      U,
      V
    ]);
    Ho(() => {
      u === false && C.current.isPositioned && (C.current.isPositioned = false, f((O) => ({
        ...O,
        isPositioned: false
      })));
    }, [
      u
    ]);
    const L = b.useRef(false);
    Ho(() => (L.current = true, () => {
      L.current = false;
    }), []), Ho(() => {
      if (w && (A.current = w), T && (E.current = T), w && T) {
        if (z.current) return z.current(w, T, J);
        J();
      }
    }, [
      w,
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
      reference: w,
      floating: T
    }), [
      w,
      T
    ]), D = b.useMemo(() => {
      const O = {
        position: n,
        left: 0,
        top: 0
      };
      if (!R.floating) return O;
      const N = yg(R.floating, c.x), k = yg(R.floating, c.y);
      return o ? {
        ...O,
        transform: "translate(" + N + "px, " + k + "px)",
        ...e1(R.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: n,
        left: N,
        top: k
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
  const oR = (t) => {
    function e(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(n) {
        const { element: i, padding: a } = typeof t == "function" ? t(n) : t;
        return i && e(i) ? i.current != null ? gg({
          element: i.current,
          padding: a
        }).fn(n) : {} : i ? gg({
          element: i,
          padding: a
        }).fn(n) : {};
      }
    };
  }, lR = (t, e) => ({
    ...IM(t),
    options: [
      t,
      e
    ]
  }), uR = (t, e) => ({
    ...JM(t),
    options: [
      t,
      e
    ]
  }), cR = (t, e) => ({
    ...nR(t),
    options: [
      t,
      e
    ]
  }), fR = (t, e) => ({
    ...WM(t),
    options: [
      t,
      e
    ]
  }), dR = (t, e) => ({
    ...tR(t),
    options: [
      t,
      e
    ]
  }), hR = (t, e) => ({
    ...eR(t),
    options: [
      t,
      e
    ]
  }), mR = (t, e) => ({
    ...oR(t),
    options: [
      t,
      e
    ]
  });
  var pR = "Arrow", n1 = b.forwardRef((t, e) => {
    const { children: n, width: i = 10, height: a = 5, ...s } = t;
    return x.jsx(re.svg, {
      ...s,
      ref: e,
      width: i,
      height: a,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? n : x.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    });
  });
  n1.displayName = pR;
  var gR = n1;
  function yR(t) {
    const [e, n] = b.useState(void 0);
    return pi(() => {
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
  var i1 = "Popper", [a1, s1] = ru(i1), [L4, r1] = a1(i1), o1 = "PopperAnchor", l1 = b.forwardRef((t, e) => {
    const { __scopePopper: n, virtualRef: i, ...a } = t, s = r1(o1, n), r = b.useRef(null), o = Ye(e, r);
    return b.useEffect(() => {
      s.onAnchorChange((i == null ? void 0 : i.current) || r.current);
    }), i ? null : x.jsx(re.div, {
      ...a,
      ref: o
    });
  });
  l1.displayName = o1;
  var Oh = "PopperContent", [vR, bR] = a1(Oh), u1 = b.forwardRef((t, e) => {
    var _a5, _b3, _c3, _d3, _e8, _f3;
    const { __scopePopper: n, side: i = "bottom", sideOffset: a = 0, align: s = "center", alignOffset: r = 0, arrowPadding: o = 0, avoidCollisions: l = true, collisionBoundary: u = [], collisionPadding: c = 0, sticky: f = "partial", hideWhenDetached: h = false, updatePositionStrategy: d = "optimized", onPlaced: y, ...v } = t, S = r1(Oh, n), [p, m] = b.useState(null), g = Ye(e, (at) => m(at)), [w, T] = b.useState(null), A = yR(w), E = (A == null ? void 0 : A.width) ?? 0, C = (A == null ? void 0 : A.height) ?? 0, j = i + (s !== "center" ? "-" + s : ""), z = typeof c == "number" ? c : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...c
    }, U = Array.isArray(u) ? u : [
      u
    ], V = U.length > 0, J = {
      padding: z,
      boundary: U.filter(SR),
      altBoundary: V
    }, { refs: L, floatingStyles: X, placement: R, isPositioned: D, middlewareData: O } = rR({
      strategy: "fixed",
      placement: j,
      whileElementsMounted: (...at) => $M(...at, {
        animationFrame: d === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        lR({
          mainAxis: a + C,
          alignmentAxis: r
        }),
        l && uR({
          mainAxis: true,
          crossAxis: false,
          limiter: f === "partial" ? cR() : void 0,
          ...J
        }),
        l && fR({
          ...J
        }),
        dR({
          ...J,
          apply: ({ elements: at, rects: aa, availableWidth: Ei, availableHeight: sa }) => {
            const { width: Ai, height: vs } = aa.reference, Ci = at.floating.style;
            Ci.setProperty("--radix-popper-available-width", `${Ei}px`), Ci.setProperty("--radix-popper-available-height", `${sa}px`), Ci.setProperty("--radix-popper-anchor-width", `${Ai}px`), Ci.setProperty("--radix-popper-anchor-height", `${vs}px`);
          }
        }),
        w && mR({
          element: w,
          padding: o
        }),
        wR({
          arrowWidth: E,
          arrowHeight: C
        }),
        h && hR({
          strategy: "referenceHidden",
          ...J
        })
      ]
    }), [N, k] = d1(R), ft = mi(y);
    pi(() => {
      D && (ft == null ? void 0 : ft());
    }, [
      D,
      ft
    ]);
    const F = (_a5 = O.arrow) == null ? void 0 : _a5.x, Z = (_b3 = O.arrow) == null ? void 0 : _b3.y, $ = ((_c3 = O.arrow) == null ? void 0 : _c3.centerOffset) !== 0, [Tt, zn] = b.useState();
    return pi(() => {
      p && zn(window.getComputedStyle(p).zIndex);
    }, [
      p
    ]), x.jsx("div", {
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
      children: x.jsx(vR, {
        scope: n,
        placedSide: N,
        onArrowChange: T,
        arrowX: F,
        arrowY: Z,
        shouldHideArrow: $,
        children: x.jsx(re.div, {
          "data-side": N,
          "data-align": k,
          ...v,
          ref: g,
          style: {
            ...v.style,
            animation: D ? void 0 : "none"
          }
        })
      })
    });
  });
  u1.displayName = Oh;
  var c1 = "PopperArrow", xR = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }, f1 = b.forwardRef(function(e, n) {
    const { __scopePopper: i, ...a } = e, s = bR(c1, i), r = xR[s.placedSide];
    return x.jsx("span", {
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
      children: x.jsx(gR, {
        ...a,
        ref: n,
        style: {
          ...a.style,
          display: "block"
        }
      })
    });
  });
  f1.displayName = c1;
  function SR(t) {
    return t !== null;
  }
  var wR = (t) => ({
    name: "transformOrigin",
    options: t,
    fn(e) {
      var _a5, _b3, _c3;
      const { placement: n, rects: i, middlewareData: a } = e, r = ((_a5 = a.arrow) == null ? void 0 : _a5.centerOffset) !== 0, o = r ? 0 : t.arrowWidth, l = r ? 0 : t.arrowHeight, [u, c] = d1(n), f = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], h = (((_b3 = a.arrow) == null ? void 0 : _b3.x) ?? 0) + o / 2, d = (((_c3 = a.arrow) == null ? void 0 : _c3.y) ?? 0) + l / 2;
      let y = "", v = "";
      return u === "bottom" ? (y = r ? f : `${h}px`, v = `${-l}px`) : u === "top" ? (y = r ? f : `${h}px`, v = `${i.floating.height + l}px`) : u === "right" ? (y = `${-l}px`, v = r ? f : `${d}px`) : u === "left" && (y = `${i.floating.width + l}px`, v = r ? f : `${d}px`), {
        data: {
          x: y,
          y: v
        }
      };
    }
  });
  function d1(t) {
    const [e, n = "center"] = t.split("-");
    return [
      e,
      n
    ];
  }
  var TR = l1, ER = u1, AR = f1, [du, V4] = ru("Tooltip", [
    s1
  ]), Dh = s1(), h1 = "TooltipProvider", CR = 700, vg = "tooltip.open", [MR, m1] = du(h1), p1 = (t) => {
    const { __scopeTooltip: e, delayDuration: n = CR, skipDelayDuration: i = 300, disableHoverableContent: a = false, children: s } = t, r = b.useRef(true), o = b.useRef(false), l = b.useRef(0);
    return b.useEffect(() => {
      const u = l.current;
      return () => window.clearTimeout(u);
    }, []), x.jsx(MR, {
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
  p1.displayName = h1;
  var g1 = "Tooltip", [B4, hu] = du(g1), Uf = "TooltipTrigger", RR = b.forwardRef((t, e) => {
    const { __scopeTooltip: n, ...i } = t, a = hu(Uf, n), s = m1(Uf, n), r = Dh(n), o = b.useRef(null), l = Ye(e, o, a.onTriggerChange), u = b.useRef(false), c = b.useRef(false), f = b.useCallback(() => u.current = false, []);
    return b.useEffect(() => () => document.removeEventListener("pointerup", f), [
      f
    ]), x.jsx(TR, {
      asChild: true,
      ...r,
      children: x.jsx(re.button, {
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
  RR.displayName = Uf;
  var OR = "TooltipPortal", [k4, DR] = du(OR, {
    forceMount: void 0
  }), es = "TooltipContent", y1 = b.forwardRef((t, e) => {
    const n = DR(es, t.__scopeTooltip), { forceMount: i = n.forceMount, side: a = "top", ...s } = t, r = hu(es, t.__scopeTooltip);
    return x.jsx(yh, {
      present: i || r.open,
      children: r.disableHoverableContent ? x.jsx(v1, {
        side: a,
        ...s,
        ref: e
      }) : x.jsx(NR, {
        side: a,
        ...s,
        ref: e
      })
    });
  }), NR = b.forwardRef((t, e) => {
    const n = hu(es, t.__scopeTooltip), i = m1(es, t.__scopeTooltip), a = b.useRef(null), s = Ye(e, a), [r, o] = b.useState(null), { trigger: l, onClose: u } = n, c = a.current, { onPointerInTransitChange: f } = i, h = b.useCallback(() => {
      o(null), f(false);
    }, [
      f
    ]), d = b.useCallback((y, v) => {
      const S = y.currentTarget, p = {
        x: y.clientX,
        y: y.clientY
      }, m = VR(p, S.getBoundingClientRect()), g = BR(p, m), w = kR(v.getBoundingClientRect()), T = PR([
        ...g,
        ...w
      ]);
      o(T), f(true);
    }, [
      f
    ]);
    return b.useEffect(() => () => h(), [
      h
    ]), b.useEffect(() => {
      if (l && c) {
        const y = (S) => d(S, c), v = (S) => d(S, l);
        return l.addEventListener("pointerleave", y), c.addEventListener("pointerleave", v), () => {
          l.removeEventListener("pointerleave", y), c.removeEventListener("pointerleave", v);
        };
      }
    }, [
      l,
      c,
      d,
      h
    ]), b.useEffect(() => {
      if (r) {
        const y = (v) => {
          const S = v.target, p = {
            x: v.clientX,
            y: v.clientY
          }, m = (l == null ? void 0 : l.contains(S)) || (c == null ? void 0 : c.contains(S)), g = !UR(p, r);
          m ? h() : g && (h(), u());
        };
        return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
      }
    }, [
      l,
      c,
      r,
      u,
      h
    ]), x.jsx(v1, {
      ...t,
      ref: s
    });
  }), [jR, zR] = du(g1, {
    isInside: false
  }), _R = FA("TooltipContent"), v1 = b.forwardRef((t, e) => {
    const { __scopeTooltip: n, children: i, "aria-label": a, onEscapeKeyDown: s, onPointerDownOutside: r, ...o } = t, l = hu(es, n), u = Dh(n), { onClose: c } = l;
    return b.useEffect(() => (document.addEventListener(vg, c), () => document.removeEventListener(vg, c)), [
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
    ]), x.jsx(gh, {
      asChild: true,
      disableOutsidePointerEvents: false,
      onEscapeKeyDown: s,
      onPointerDownOutside: r,
      onFocusOutside: (f) => f.preventDefault(),
      onDismiss: c,
      children: x.jsxs(ER, {
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
          x.jsx(_R, {
            children: i
          }),
          x.jsx(jR, {
            scope: n,
            isInside: true,
            children: x.jsx(y2, {
              id: l.contentId,
              role: "tooltip",
              children: a || i
            })
          })
        ]
      })
    });
  });
  y1.displayName = es;
  var b1 = "TooltipArrow", LR = b.forwardRef((t, e) => {
    const { __scopeTooltip: n, ...i } = t, a = Dh(n);
    return zR(b1, n).isInside ? null : x.jsx(AR, {
      ...a,
      ...i,
      ref: e
    });
  });
  LR.displayName = b1;
  function VR(t, e) {
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
  function BR(t, e, n = 5) {
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
  function kR(t) {
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
  function UR(t, e) {
    const { x: n, y: i } = t;
    let a = false;
    for (let s = 0, r = e.length - 1; s < e.length; r = s++) {
      const o = e[s], l = e[r], u = o.x, c = o.y, f = l.x, h = l.y;
      c > i != h > i && n < (f - u) * (i - c) / (h - c) + u && (a = !a);
    }
    return a;
  }
  function PR(t) {
    const e = t.slice();
    return e.sort((n, i) => n.x < i.x ? -1 : n.x > i.x ? 1 : n.y < i.y ? -1 : n.y > i.y ? 1 : 0), HR(e);
  }
  function HR(t) {
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
  var GR = p1, x1 = y1;
  const YR = GR, qR = b.forwardRef(({ className: t, sideOffset: e = 4, ...n }, i) => x.jsx(x1, {
    ref: i,
    sideOffset: e,
    className: wi("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
    ...n
  }));
  qR.displayName = x1.displayName;
  var mu = class {
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
  }, pu = typeof window > "u" || "Deno" in globalThis;
  function He() {
  }
  function XR(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function FR(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0;
  }
  function QR(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0);
  }
  function Pf(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function KR(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function bg(t, e) {
    const { type: n = "all", exact: i, fetchStatus: a, predicate: s, queryKey: r, stale: o } = t;
    if (r) {
      if (i) {
        if (e.queryHash !== Nh(r, e.options)) return false;
      } else if (!br(e.queryKey, r)) return false;
    }
    if (n !== "all") {
      const l = e.isActive();
      if (n === "active" && !l || n === "inactive" && l) return false;
    }
    return !(typeof o == "boolean" && e.isStale() !== o || a && a !== e.state.fetchStatus || s && !s(e));
  }
  function xg(t, e) {
    const { exact: n, status: i, predicate: a, mutationKey: s } = t;
    if (s) {
      if (!e.options.mutationKey) return false;
      if (n) {
        if (vr(e.options.mutationKey) !== vr(s)) return false;
      } else if (!br(e.options.mutationKey, s)) return false;
    }
    return !(i && e.state.status !== i || a && !a(e));
  }
  function Nh(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || vr)(t);
  }
  function vr(t) {
    return JSON.stringify(t, (e, n) => Hf(n) ? Object.keys(n).sort().reduce((i, a) => (i[a] = n[a], i), {}) : n);
  }
  function br(t, e) {
    return t === e ? true : typeof t != typeof e ? false : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every((n) => br(t[n], e[n])) : false;
  }
  function S1(t, e) {
    if (t === e) return t;
    const n = Sg(t) && Sg(e);
    if (n || Hf(t) && Hf(e)) {
      const i = n ? t : Object.keys(t), a = i.length, s = n ? e : Object.keys(e), r = s.length, o = n ? [] : {}, l = new Set(i);
      let u = 0;
      for (let c = 0; c < r; c++) {
        const f = n ? c : s[c];
        (!n && l.has(f) || n) && t[f] === void 0 && e[f] === void 0 ? (o[f] = void 0, u++) : (o[f] = S1(t[f], e[f]), o[f] === t[f] && t[f] !== void 0 && u++);
      }
      return a === r && u === a ? t : o;
    }
    return e;
  }
  function Sg(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length;
  }
  function Hf(t) {
    if (!wg(t)) return false;
    const e = t.constructor;
    if (e === void 0) return true;
    const n = e.prototype;
    return !(!wg(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
  }
  function wg(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function ZR(t) {
    return new Promise((e) => {
      setTimeout(e, t);
    });
  }
  function $R(t, e, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(t, e) : n.structuralSharing !== false ? S1(t, e) : e;
  }
  function IR(t, e, n = 0) {
    const i = [
      ...t,
      e
    ];
    return n && i.length > n ? i.slice(1) : i;
  }
  function JR(t, e, n = 0) {
    const i = [
      e,
      ...t
    ];
    return n && i.length > n ? i.slice(0, -1) : i;
  }
  var jh = Symbol();
  function w1(t, e) {
    return !t.queryFn && (e == null ? void 0 : e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === jh ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
  }
  var WR = (_a2 = class extends mu {
    constructor() {
      super();
      __privateAdd(this, _t2);
      __privateAdd(this, _e);
      __privateAdd(this, _n);
      __privateSet(this, _n, (t) => {
        if (!pu && window.addEventListener) {
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
  }, _t2 = new WeakMap(), _e = new WeakMap(), _n = new WeakMap(), _a2), T1 = new WR(), tO = (_b2 = class extends mu {
    constructor() {
      super();
      __privateAdd(this, _t3, true);
      __privateAdd(this, _e2);
      __privateAdd(this, _n2);
      __privateSet(this, _n2, (t) => {
        if (!pu && window.addEventListener) {
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
  }, _t3 = new WeakMap(), _e2 = new WeakMap(), _n2 = new WeakMap(), _b2), Ol = new tO();
  function eO() {
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
  function nO(t) {
    return Math.min(1e3 * 2 ** t, 3e4);
  }
  function E1(t) {
    return (t ?? "online") === "online" ? Ol.isOnline() : true;
  }
  var A1 = class extends Error {
    constructor(t) {
      super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
    }
  };
  function mc(t) {
    return t instanceof A1;
  }
  function C1(t) {
    let e = false, n = 0, i = false, a;
    const s = eO(), r = (v) => {
      var _a5;
      i || (h(new A1(v)), (_a5 = t.abort) == null ? void 0 : _a5.call(t));
    }, o = () => {
      e = true;
    }, l = () => {
      e = false;
    }, u = () => T1.isFocused() && (t.networkMode === "always" || Ol.isOnline()) && t.canRun(), c = () => E1(t.networkMode) && t.canRun(), f = (v) => {
      var _a5;
      i || (i = true, (_a5 = t.onSuccess) == null ? void 0 : _a5.call(t, v), a == null ? void 0 : a(), s.resolve(v));
    }, h = (v) => {
      var _a5;
      i || (i = true, (_a5 = t.onError) == null ? void 0 : _a5.call(t, v), a == null ? void 0 : a(), s.reject(v));
    }, d = () => new Promise((v) => {
      var _a5;
      a = (S) => {
        (i || u()) && v(S);
      }, (_a5 = t.onPause) == null ? void 0 : _a5.call(t);
    }).then(() => {
      var _a5;
      a = void 0, i || ((_a5 = t.onContinue) == null ? void 0 : _a5.call(t));
    }), y = () => {
      if (i) return;
      let v;
      const S = n === 0 ? t.initialPromise : void 0;
      try {
        v = S ?? t.fn();
      } catch (p) {
        v = Promise.reject(p);
      }
      Promise.resolve(v).then(f).catch((p) => {
        var _a5;
        if (i) return;
        const m = t.retry ?? (pu ? 0 : 3), g = t.retryDelay ?? nO, w = typeof g == "function" ? g(n, p) : g, T = m === true || typeof m == "number" && n < m || typeof m == "function" && m(n, p);
        if (e || !T) {
          h(p);
          return;
        }
        n++, (_a5 = t.onFail) == null ? void 0 : _a5.call(t, n, p), ZR(w).then(() => u() ? void 0 : d()).then(() => {
          e ? h(p) : y();
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
      start: () => (c() ? y() : d().then(y), s)
    };
  }
  var iO = (t) => setTimeout(t, 0);
  function aO() {
    let t = [], e = 0, n = (o) => {
      o();
    }, i = (o) => {
      o();
    }, a = iO;
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
  var Qt = aO(), M1 = (_c2 = class {
    constructor() {
      __privateAdd(this, _t4);
    }
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(), FR(this.gcTime) && __privateSet(this, _t4, setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime));
    }
    updateGcTime(t) {
      this.gcTime = Math.max(this.gcTime || 0, t ?? (pu ? 1 / 0 : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
      __privateGet(this, _t4) && (clearTimeout(__privateGet(this, _t4)), __privateSet(this, _t4, void 0));
    }
  }, _t4 = new WeakMap(), _c2), sO = (_d2 = class extends M1 {
    constructor(t) {
      super();
      __privateAdd(this, _sO_instances);
      __privateAdd(this, _t5);
      __privateAdd(this, _e3);
      __privateAdd(this, _n3);
      __privateAdd(this, _a3);
      __privateAdd(this, _i2);
      __privateAdd(this, _r2);
      __privateAdd(this, _o2);
      __privateSet(this, _o2, false), __privateSet(this, _r2, t.defaultOptions), this.setOptions(t.options), this.observers = [], __privateSet(this, _a3, t.client), __privateSet(this, _n3, __privateGet(this, _a3).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, __privateSet(this, _t5, oO(this.options)), this.state = t.state ?? __privateGet(this, _t5), this.scheduleGc();
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
      const n = $R(this.state.data, t, this.options);
      return __privateMethod(this, _sO_instances, s_fn).call(this, {
        data: n,
        type: "success",
        dataUpdatedAt: e == null ? void 0 : e.updatedAt,
        manual: e == null ? void 0 : e.manual
      }), n;
    }
    setState(t, e) {
      __privateMethod(this, _sO_instances, s_fn).call(this, {
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
      return this.observers.some((t) => KR(t.options.enabled, this) !== false);
    }
    isDisabled() {
      return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === jh || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0 ? this.observers.some((t) => Pf(t.options.staleTime, this) === "static") : false;
    }
    isStale() {
      return this.getObserversCount() > 0 ? this.observers.some((t) => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(t = 0) {
      return this.state.data === void 0 ? true : t === "static" ? false : this.state.isInvalidated ? true : !QR(this.state.dataUpdatedAt, t);
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
      this.state.isInvalidated || __privateMethod(this, _sO_instances, s_fn).call(this, {
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
        const l = w1(this.options, e), c = (() => {
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
      (_a5 = this.options.behavior) == null ? void 0 : _a5.onFetch(r, this), __privateSet(this, _e3, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_b3 = r.fetchOptions) == null ? void 0 : _b3.meta)) && __privateMethod(this, _sO_instances, s_fn).call(this, {
        type: "fetch",
        meta: (_c3 = r.fetchOptions) == null ? void 0 : _c3.meta
      });
      const o = (l) => {
        var _a6, _b4, _c4, _d3;
        mc(l) && l.silent || __privateMethod(this, _sO_instances, s_fn).call(this, {
          type: "error",
          error: l
        }), mc(l) || ((_b4 = (_a6 = __privateGet(this, _n3).config).onError) == null ? void 0 : _b4.call(_a6, l, this), (_d3 = (_c4 = __privateGet(this, _n3).config).onSettled) == null ? void 0 : _d3.call(_c4, this.state.data, l, this)), this.scheduleGc();
      };
      return __privateSet(this, _i2, C1({
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
          __privateMethod(this, _sO_instances, s_fn).call(this, {
            type: "failed",
            failureCount: l,
            error: u
          });
        },
        onPause: () => {
          __privateMethod(this, _sO_instances, s_fn).call(this, {
            type: "pause"
          });
        },
        onContinue: () => {
          __privateMethod(this, _sO_instances, s_fn).call(this, {
            type: "continue"
          });
        },
        retry: r.options.retry,
        retryDelay: r.options.retryDelay,
        networkMode: r.options.networkMode,
        canRun: () => true
      })), __privateGet(this, _i2).start();
    }
  }, _t5 = new WeakMap(), _e3 = new WeakMap(), _n3 = new WeakMap(), _a3 = new WeakMap(), _i2 = new WeakMap(), _r2 = new WeakMap(), _o2 = new WeakMap(), _sO_instances = new WeakSet(), s_fn = function(t) {
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
            ...rO(n.data, this.options),
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
          return mc(i) && i.revert && __privateGet(this, _e3) ? {
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
    this.state = e(this.state), Qt.batch(() => {
      this.observers.forEach((n) => {
        n.onQueryUpdate();
      }), __privateGet(this, _n3).notify({
        query: this,
        type: "updated",
        action: t
      });
    });
  }, _d2);
  function rO(t, e) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: E1(e.networkMode) ? "fetching" : "paused",
      ...t === void 0 && {
        error: null,
        status: "pending"
      }
    };
  }
  function oO(t) {
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
  var lO = (_e4 = class extends mu {
    constructor(t = {}) {
      super();
      __privateAdd(this, _t6);
      this.config = t, __privateSet(this, _t6, /* @__PURE__ */ new Map());
    }
    build(t, e, n) {
      const i = e.queryKey, a = e.queryHash ?? Nh(i, e);
      let s = this.get(a);
      return s || (s = new sO({
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
      Qt.batch(() => {
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
      return this.getAll().find((n) => bg(e, n));
    }
    findAll(t = {}) {
      const e = this.getAll();
      return Object.keys(t).length > 0 ? e.filter((n) => bg(t, n)) : e;
    }
    notify(t) {
      Qt.batch(() => {
        this.listeners.forEach((e) => {
          e(t);
        });
      });
    }
    onFocus() {
      Qt.batch(() => {
        this.getAll().forEach((t) => {
          t.onFocus();
        });
      });
    }
    onOnline() {
      Qt.batch(() => {
        this.getAll().forEach((t) => {
          t.onOnline();
        });
      });
    }
  }, _t6 = new WeakMap(), _e4), uO = (_f2 = class extends M1 {
    constructor(t) {
      super();
      __privateAdd(this, _uO_instances);
      __privateAdd(this, _t7);
      __privateAdd(this, _e5);
      __privateAdd(this, _n4);
      this.mutationId = t.mutationId, __privateSet(this, _e5, t.mutationCache), __privateSet(this, _t7, []), this.state = t.state || cO(), this.setOptions(t.options), this.scheduleGc();
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
      var _a5, _b3, _c3, _d3, _e8, _f3, _g3, _h3, _i4, _j2, _k, _l2, _m2, _n7, _o4, _p2, _q, _r4, _s3, _t10;
      const e = () => {
        __privateMethod(this, _uO_instances, a_fn).call(this, {
          type: "continue"
        });
      };
      __privateSet(this, _n4, C1({
        fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
        onFail: (a, s) => {
          __privateMethod(this, _uO_instances, a_fn).call(this, {
            type: "failed",
            failureCount: a,
            error: s
          });
        },
        onPause: () => {
          __privateMethod(this, _uO_instances, a_fn).call(this, {
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
          __privateMethod(this, _uO_instances, a_fn).call(this, {
            type: "pending",
            variables: t,
            isPaused: i
          }), await ((_b3 = (_a5 = __privateGet(this, _e5).config).onMutate) == null ? void 0 : _b3.call(_a5, t, this));
          const s = await ((_d3 = (_c3 = this.options).onMutate) == null ? void 0 : _d3.call(_c3, t));
          s !== this.state.context && __privateMethod(this, _uO_instances, a_fn).call(this, {
            type: "pending",
            context: s,
            variables: t,
            isPaused: i
          });
        }
        const a = await __privateGet(this, _n4).start();
        return await ((_f3 = (_e8 = __privateGet(this, _e5).config).onSuccess) == null ? void 0 : _f3.call(_e8, a, t, this.state.context, this)), await ((_h3 = (_g3 = this.options).onSuccess) == null ? void 0 : _h3.call(_g3, a, t, this.state.context)), await ((_j2 = (_i4 = __privateGet(this, _e5).config).onSettled) == null ? void 0 : _j2.call(_i4, a, null, this.state.variables, this.state.context, this)), await ((_l2 = (_k = this.options).onSettled) == null ? void 0 : _l2.call(_k, a, null, t, this.state.context)), __privateMethod(this, _uO_instances, a_fn).call(this, {
          type: "success",
          data: a
        }), a;
      } catch (a) {
        try {
          throw await ((_n7 = (_m2 = __privateGet(this, _e5).config).onError) == null ? void 0 : _n7.call(_m2, a, t, this.state.context, this)), await ((_p2 = (_o4 = this.options).onError) == null ? void 0 : _p2.call(_o4, a, t, this.state.context)), await ((_r4 = (_q = __privateGet(this, _e5).config).onSettled) == null ? void 0 : _r4.call(_q, void 0, a, this.state.variables, this.state.context, this)), await ((_t10 = (_s3 = this.options).onSettled) == null ? void 0 : _t10.call(_s3, void 0, a, t, this.state.context)), a;
        } finally {
          __privateMethod(this, _uO_instances, a_fn).call(this, {
            type: "error",
            error: a
          });
        }
      } finally {
        __privateGet(this, _e5).runNext(this);
      }
    }
  }, _t7 = new WeakMap(), _e5 = new WeakMap(), _n4 = new WeakMap(), _uO_instances = new WeakSet(), a_fn = function(t) {
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
    this.state = e(this.state), Qt.batch(() => {
      __privateGet(this, _t7).forEach((n) => {
        n.onMutationUpdate(t);
      }), __privateGet(this, _e5).notify({
        mutation: this,
        type: "updated",
        action: t
      });
    });
  }, _f2);
  function cO() {
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
  var fO = (_g2 = class extends mu {
    constructor(t = {}) {
      super();
      __privateAdd(this, _t8);
      __privateAdd(this, _e6);
      __privateAdd(this, _n5);
      this.config = t, __privateSet(this, _t8, /* @__PURE__ */ new Set()), __privateSet(this, _e6, /* @__PURE__ */ new Map()), __privateSet(this, _n5, 0);
    }
    build(t, e, n) {
      const i = new uO({
        mutationCache: this,
        mutationId: ++__privateWrapper(this, _n5)._,
        options: t.defaultMutationOptions(e),
        state: n
      });
      return this.add(i), i;
    }
    add(t) {
      __privateGet(this, _t8).add(t);
      const e = yo(t);
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
        const e = yo(t);
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
      const e = yo(t);
      if (typeof e == "string") {
        const i = (_a5 = __privateGet(this, _e6).get(e)) == null ? void 0 : _a5.find((a) => a.state.status === "pending");
        return !i || i === t;
      } else return true;
    }
    runNext(t) {
      var _a5, _b3;
      const e = yo(t);
      return typeof e == "string" ? ((_b3 = (_a5 = __privateGet(this, _e6).get(e)) == null ? void 0 : _a5.find((i) => i !== t && i.state.isPaused)) == null ? void 0 : _b3.continue()) ?? Promise.resolve() : Promise.resolve();
    }
    clear() {
      Qt.batch(() => {
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
      return this.getAll().find((n) => xg(e, n));
    }
    findAll(t = {}) {
      return this.getAll().filter((e) => xg(t, e));
    }
    notify(t) {
      Qt.batch(() => {
        this.listeners.forEach((e) => {
          e(t);
        });
      });
    }
    resumePausedMutations() {
      const t = this.getAll().filter((e) => e.state.isPaused);
      return Qt.batch(() => Promise.all(t.map((e) => e.continue().catch(He))));
    }
  }, _t8 = new WeakMap(), _e6 = new WeakMap(), _n5 = new WeakMap(), _g2);
  function yo(t) {
    var _a5;
    return (_a5 = t.options.scope) == null ? void 0 : _a5.id;
  }
  function Tg(t) {
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
          const f = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: true,
              get: () => (e.signal.aborted ? c = true : e.signal.addEventListener("abort", () => {
                c = true;
              }), e.signal)
            });
          }, h = w1(e.options, e.fetchOptions), d = async (y, v, S) => {
            if (c) return Promise.reject();
            if (v == null && y.pages.length) return Promise.resolve(y);
            const m = (() => {
              const A = {
                client: e.client,
                queryKey: e.queryKey,
                pageParam: v,
                direction: S ? "backward" : "forward",
                meta: e.options.meta
              };
              return f(A), A;
            })(), g = await h(m), { maxPages: w } = e.options, T = S ? JR : IR;
            return {
              pages: T(y.pages, g, w),
              pageParams: T(y.pageParams, v, w)
            };
          };
          if (a && s.length) {
            const y = a === "backward", v = y ? dO : Eg, S = {
              pages: s,
              pageParams: r
            }, p = v(i, S);
            o = await d(S, p, y);
          } else {
            const y = t ?? s.length;
            do {
              const v = l === 0 ? r[0] ?? i.initialPageParam : Eg(i, o);
              if (l > 0 && v == null) break;
              o = await d(o, v), l++;
            } while (l < y);
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
  function Eg(t, { pages: e, pageParams: n }) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, n[i], n) : void 0;
  }
  function dO(t, { pages: e, pageParams: n }) {
    var _a5;
    return e.length > 0 ? (_a5 = t.getPreviousPageParam) == null ? void 0 : _a5.call(t, e[0], e, n[0], n) : void 0;
  }
  var hO = (_h2 = class {
    constructor(t = {}) {
      __privateAdd(this, _t9);
      __privateAdd(this, _e7);
      __privateAdd(this, _n6);
      __privateAdd(this, _a4);
      __privateAdd(this, _i3);
      __privateAdd(this, _r3);
      __privateAdd(this, _o3);
      __privateAdd(this, _s2);
      __privateSet(this, _t9, t.queryCache || new lO()), __privateSet(this, _e7, t.mutationCache || new fO()), __privateSet(this, _n6, t.defaultOptions || {}), __privateSet(this, _a4, /* @__PURE__ */ new Map()), __privateSet(this, _i3, /* @__PURE__ */ new Map()), __privateSet(this, _r3, 0);
    }
    mount() {
      __privateWrapper(this, _r3)._++, __privateGet(this, _r3) === 1 && (__privateSet(this, _o3, T1.subscribe(async (t) => {
        t && (await this.resumePausedMutations(), __privateGet(this, _t9).onFocus());
      })), __privateSet(this, _s2, Ol.subscribe(async (t) => {
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
      return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && n.isStaleByTime(Pf(e.staleTime, n)) && this.prefetchQuery(e), Promise.resolve(i));
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
      }), s = (_a5 = __privateGet(this, _t9).get(i.queryHash)) == null ? void 0 : _a5.state.data, r = XR(e, s);
      if (r !== void 0) return __privateGet(this, _t9).build(this, i).setData(r, {
        ...n,
        manual: true
      });
    }
    setQueriesData(t, e, n) {
      return Qt.batch(() => __privateGet(this, _t9).findAll(t).map(({ queryKey: i }) => [
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
      Qt.batch(() => {
        e.findAll(t).forEach((n) => {
          e.remove(n);
        });
      });
    }
    resetQueries(t, e) {
      const n = __privateGet(this, _t9);
      return Qt.batch(() => (n.findAll(t).forEach((i) => {
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
      }, i = Qt.batch(() => __privateGet(this, _t9).findAll(t).map((a) => a.cancel(n)));
      return Promise.all(i).then(He).catch(He);
    }
    invalidateQueries(t, e = {}) {
      return Qt.batch(() => (__privateGet(this, _t9).findAll(t).forEach((n) => {
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
      }, i = Qt.batch(() => __privateGet(this, _t9).findAll(t).filter((a) => !a.isDisabled() && !a.isStatic()).map((a) => {
        let s = a.fetch(void 0, n);
        return n.throwOnError || (s = s.catch(He)), a.state.fetchStatus === "paused" ? Promise.resolve() : s;
      }));
      return Promise.all(i).then(He);
    }
    fetchQuery(t) {
      const e = this.defaultQueryOptions(t);
      e.retry === void 0 && (e.retry = false);
      const n = __privateGet(this, _t9).build(this, e);
      return n.isStaleByTime(Pf(e.staleTime, n)) ? n.fetch(e) : Promise.resolve(n.state.data);
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(He).catch(He);
    }
    fetchInfiniteQuery(t) {
      return t.behavior = Tg(t.pages), this.fetchQuery(t);
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(He).catch(He);
    }
    ensureInfiniteQueryData(t) {
      return t.behavior = Tg(t.pages), this.ensureQueryData(t);
    }
    resumePausedMutations() {
      return Ol.isOnline() ? __privateGet(this, _e7).resumePausedMutations() : Promise.resolve();
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
      __privateGet(this, _a4).set(vr(t), {
        queryKey: t,
        defaultOptions: e
      });
    }
    getQueryDefaults(t) {
      const e = [
        ...__privateGet(this, _a4).values()
      ], n = {};
      return e.forEach((i) => {
        br(t, i.queryKey) && Object.assign(n, i.defaultOptions);
      }), n;
    }
    setMutationDefaults(t, e) {
      __privateGet(this, _i3).set(vr(t), {
        mutationKey: t,
        defaultOptions: e
      });
    }
    getMutationDefaults(t) {
      const e = [
        ...__privateGet(this, _i3).values()
      ], n = {};
      return e.forEach((i) => {
        br(t, i.mutationKey) && Object.assign(n, i.defaultOptions);
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
      return e.queryHash || (e.queryHash = Nh(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === jh && (e.enabled = false), e;
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
  }, _t9 = new WeakMap(), _e7 = new WeakMap(), _n6 = new WeakMap(), _a4 = new WeakMap(), _i3 = new WeakMap(), _r3 = new WeakMap(), _o3 = new WeakMap(), _s2 = new WeakMap(), _h2), mO = b.createContext(void 0), pO = ({ client: t, children: e }) => (b.useEffect(() => (t.mount(), () => {
    t.unmount();
  }), [
    t
  ]), x.jsx(mO.Provider, {
    value: t,
    children: e
  }));
  function xr() {
    return xr = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    }, xr.apply(this, arguments);
  }
  var Jn;
  (function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
  })(Jn || (Jn = {}));
  const Ag = "popstate";
  function gO(t) {
    t === void 0 && (t = {});
    function e(a, s) {
      let { pathname: r = "/", search: o = "", hash: l = "" } = ea(a.location.hash.substr(1));
      return !r.startsWith("/") && !r.startsWith(".") && (r = "/" + r), Gf("", {
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
      return o + "#" + (typeof s == "string" ? s : Dl(s));
    }
    function i(a, s) {
      zh(a.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(s) + ")");
    }
    return vO(e, n, i, t);
  }
  function Nt(t, e) {
    if (t === false || t === null || typeof t > "u") throw new Error(e);
  }
  function zh(t, e) {
    if (!t) {
      typeof console < "u" && console.warn(e);
      try {
        throw new Error(e);
      } catch {
      }
    }
  }
  function yO() {
    return Math.random().toString(36).substr(2, 8);
  }
  function Cg(t, e) {
    return {
      usr: t.state,
      key: t.key,
      idx: e
    };
  }
  function Gf(t, e, n, i) {
    return n === void 0 && (n = null), xr({
      pathname: typeof t == "string" ? t : t.pathname,
      search: "",
      hash: ""
    }, typeof e == "string" ? ea(e) : e, {
      state: n,
      key: e && e.key || i || yO()
    });
  }
  function Dl(t) {
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
  function vO(t, e, n, i) {
    i === void 0 && (i = {});
    let { window: a = document.defaultView, v5Compat: s = false } = i, r = a.history, o = Jn.Pop, l = null, u = c();
    u == null && (u = 0, r.replaceState(xr({}, r.state, {
      idx: u
    }), ""));
    function c() {
      return (r.state || {
        idx: null
      }).idx;
    }
    function f() {
      o = Jn.Pop;
      let S = c(), p = S == null ? null : S - u;
      u = S, l && l({
        action: o,
        location: v.location,
        delta: p
      });
    }
    function h(S, p) {
      o = Jn.Push;
      let m = Gf(v.location, S, p);
      n && n(m, S), u = c() + 1;
      let g = Cg(m, u), w = v.createHref(m);
      try {
        r.pushState(g, "", w);
      } catch (T) {
        if (T instanceof DOMException && T.name === "DataCloneError") throw T;
        a.location.assign(w);
      }
      s && l && l({
        action: o,
        location: v.location,
        delta: 1
      });
    }
    function d(S, p) {
      o = Jn.Replace;
      let m = Gf(v.location, S, p);
      n && n(m, S), u = c();
      let g = Cg(m, u), w = v.createHref(m);
      r.replaceState(g, "", w), s && l && l({
        action: o,
        location: v.location,
        delta: 0
      });
    }
    function y(S) {
      let p = a.location.origin !== "null" ? a.location.origin : a.location.href, m = typeof S == "string" ? S : Dl(S);
      return m = m.replace(/ $/, "%20"), Nt(p, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, p);
    }
    let v = {
      get action() {
        return o;
      },
      get location() {
        return t(a, r);
      },
      listen(S) {
        if (l) throw new Error("A history only accepts one active listener");
        return a.addEventListener(Ag, f), l = S, () => {
          a.removeEventListener(Ag, f), l = null;
        };
      },
      createHref(S) {
        return e(a, S);
      },
      createURL: y,
      encodeLocation(S) {
        let p = y(S);
        return {
          pathname: p.pathname,
          search: p.search,
          hash: p.hash
        };
      },
      push: h,
      replace: d,
      go(S) {
        return r.go(S);
      }
    };
    return v;
  }
  var Mg;
  (function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error";
  })(Mg || (Mg = {}));
  function bO(t, e, n) {
    return n === void 0 && (n = "/"), xO(t, e, n, false);
  }
  function xO(t, e, n, i) {
    let a = typeof e == "string" ? ea(e) : e, s = _h(a.pathname || "/", n);
    if (s == null) return null;
    let r = R1(t);
    SO(r);
    let o = null;
    for (let l = 0; o == null && l < r.length; ++l) {
      let u = jO(s);
      o = DO(r[l], u, i);
    }
    return o;
  }
  function R1(t, e, n, i) {
    e === void 0 && (e = []), n === void 0 && (n = []), i === void 0 && (i = "");
    let a = (s, r, o) => {
      let l = {
        relativePath: o === void 0 ? s.path || "" : o,
        caseSensitive: s.caseSensitive === true,
        childrenIndex: r,
        route: s
      };
      l.relativePath.startsWith("/") && (Nt(l.relativePath.startsWith(i), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(i.length));
      let u = ui([
        i,
        l.relativePath
      ]), c = n.concat(l);
      s.children && s.children.length > 0 && (Nt(s.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), R1(s.children, e, c, u)), !(s.path == null && !s.index) && e.push({
        path: u,
        score: RO(u, s.index),
        routesMeta: c
      });
    };
    return t.forEach((s, r) => {
      var o;
      if (s.path === "" || !((o = s.path) != null && o.includes("?"))) a(s, r);
      else for (let l of O1(s.path)) a(s, r, l);
    }), e;
  }
  function O1(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [n, ...i] = e, a = n.endsWith("?"), s = n.replace(/\?$/, "");
    if (i.length === 0) return a ? [
      s,
      ""
    ] : [
      s
    ];
    let r = O1(i.join("/")), o = [];
    return o.push(...r.map((l) => l === "" ? s : [
      s,
      l
    ].join("/"))), a && o.push(...r), o.map((l) => t.startsWith("/") && l === "" ? "/" : l);
  }
  function SO(t) {
    t.sort((e, n) => e.score !== n.score ? n.score - e.score : OO(e.routesMeta.map((i) => i.childrenIndex), n.routesMeta.map((i) => i.childrenIndex)));
  }
  const wO = /^:[\w-]+$/, TO = 3, EO = 2, AO = 1, CO = 10, MO = -2, Rg = (t) => t === "*";
  function RO(t, e) {
    let n = t.split("/"), i = n.length;
    return n.some(Rg) && (i += MO), e && (i += EO), n.filter((a) => !Rg(a)).reduce((a, s) => a + (wO.test(s) ? TO : s === "" ? AO : CO), i);
  }
  function OO(t, e) {
    return t.length === e.length && t.slice(0, -1).every((i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0;
  }
  function DO(t, e, n) {
    let { routesMeta: i } = t, a = {}, s = "/", r = [];
    for (let o = 0; o < i.length; ++o) {
      let l = i[o], u = o === i.length - 1, c = s === "/" ? e : e.slice(s.length) || "/", f = Og({
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: u
      }, c), h = l.route;
      if (!f && u && n && !i[i.length - 1].route.index && (f = Og({
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: false
      }, c)), !f) return null;
      Object.assign(a, f.params), r.push({
        params: a,
        pathname: ui([
          s,
          f.pathname
        ]),
        pathnameBase: VO(ui([
          s,
          f.pathnameBase
        ])),
        route: h
      }), f.pathnameBase !== "/" && (s = ui([
        s,
        f.pathnameBase
      ]));
    }
    return r;
  }
  function Og(t, e) {
    typeof t == "string" && (t = {
      path: t,
      caseSensitive: false,
      end: true
    });
    let [n, i] = NO(t.path, t.caseSensitive, t.end), a = e.match(n);
    if (!a) return null;
    let s = a[0], r = s.replace(/(.)\/+$/, "$1"), o = a.slice(1);
    return {
      params: i.reduce((u, c, f) => {
        let { paramName: h, isOptional: d } = c;
        if (h === "*") {
          let v = o[f] || "";
          r = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1");
        }
        const y = o[f];
        return d && !y ? u[h] = void 0 : u[h] = (y || "").replace(/%2F/g, "/"), u;
      }, {}),
      pathname: s,
      pathnameBase: r,
      pattern: t
    };
  }
  function NO(t, e, n) {
    e === void 0 && (e = false), n === void 0 && (n = true), zh(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
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
  function jO(t) {
    try {
      return t.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
    } catch (e) {
      return zh(false, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t;
    }
  }
  function _h(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length, i = t.charAt(n);
    return i && i !== "/" ? null : t.slice(n) || "/";
  }
  function zO(t, e) {
    e === void 0 && (e = "/");
    let { pathname: n, search: i = "", hash: a = "" } = typeof t == "string" ? ea(t) : t;
    return {
      pathname: n ? n.startsWith("/") ? n : _O(n, e) : e,
      search: BO(i),
      hash: kO(a)
    };
  }
  function _O(t, e) {
    let n = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach((a) => {
      a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
    }), n.length > 1 ? n.join("/") : "/";
  }
  function pc(t, e, n, i) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
  }
  function LO(t) {
    return t.filter((e, n) => n === 0 || e.route.path && e.route.path.length > 0);
  }
  function D1(t, e) {
    let n = LO(t);
    return e ? n.map((i, a) => a === n.length - 1 ? i.pathname : i.pathnameBase) : n.map((i) => i.pathnameBase);
  }
  function N1(t, e, n, i) {
    i === void 0 && (i = false);
    let a;
    typeof t == "string" ? a = ea(t) : (a = xr({}, t), Nt(!a.pathname || !a.pathname.includes("?"), pc("?", "pathname", "search", a)), Nt(!a.pathname || !a.pathname.includes("#"), pc("#", "pathname", "hash", a)), Nt(!a.search || !a.search.includes("#"), pc("#", "search", "hash", a)));
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
    let l = zO(a, o), u = r && r !== "/" && r.endsWith("/"), c = (s || r === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
  }
  const ui = (t) => t.join("/").replace(/\/\/+/g, "/"), VO = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), BO = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, kO = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
  function UO(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
  }
  const j1 = [
    "post",
    "put",
    "patch",
    "delete"
  ];
  new Set(j1);
  const PO = [
    "get",
    ...j1
  ];
  new Set(PO);
  function Sr() {
    return Sr = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    }, Sr.apply(this, arguments);
  }
  const Lh = b.createContext(null), HO = b.createContext(null), na = b.createContext(null), gu = b.createContext(null), ia = b.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  }), z1 = b.createContext(null);
  function GO(t, e) {
    let { relative: n } = e === void 0 ? {} : e;
    Yr() || Nt(false);
    let { basename: i, navigator: a } = b.useContext(na), { hash: s, pathname: r, search: o } = V1(t, {
      relative: n
    }), l = r;
    return i !== "/" && (l = r === "/" ? i : ui([
      i,
      r
    ])), a.createHref({
      pathname: l,
      search: o,
      hash: s
    });
  }
  function Yr() {
    return b.useContext(gu) != null;
  }
  function qr() {
    return Yr() || Nt(false), b.useContext(gu).location;
  }
  function _1(t) {
    b.useContext(na).static || b.useLayoutEffect(t);
  }
  function L1() {
    let { isDataRoute: t } = b.useContext(ia);
    return t ? eD() : YO();
  }
  function YO() {
    Yr() || Nt(false);
    let t = b.useContext(Lh), { basename: e, future: n, navigator: i } = b.useContext(na), { matches: a } = b.useContext(ia), { pathname: s } = qr(), r = JSON.stringify(D1(a, n.v7_relativeSplatPath)), o = b.useRef(false);
    return _1(() => {
      o.current = true;
    }), b.useCallback(function(u, c) {
      if (c === void 0 && (c = {}), !o.current) return;
      if (typeof u == "number") {
        i.go(u);
        return;
      }
      let f = N1(u, JSON.parse(r), s, c.relative === "path");
      t == null && e !== "/" && (f.pathname = f.pathname === "/" ? e : ui([
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
  function V1(t, e) {
    let { relative: n } = e === void 0 ? {} : e, { future: i } = b.useContext(na), { matches: a } = b.useContext(ia), { pathname: s } = qr(), r = JSON.stringify(D1(a, i.v7_relativeSplatPath));
    return b.useMemo(() => N1(t, JSON.parse(r), s, n === "path"), [
      t,
      r,
      s,
      n
    ]);
  }
  function qO(t, e) {
    return XO(t, e);
  }
  function XO(t, e, n, i) {
    Yr() || Nt(false);
    let { navigator: a } = b.useContext(na), { matches: s } = b.useContext(ia), r = s[s.length - 1], o = r ? r.params : {};
    r && r.pathname;
    let l = r ? r.pathnameBase : "/";
    r && r.route;
    let u = qr(), c;
    if (e) {
      var f;
      let S = typeof e == "string" ? ea(e) : e;
      l === "/" || (f = S.pathname) != null && f.startsWith(l) || Nt(false), c = S;
    } else c = u;
    let h = c.pathname || "/", d = h;
    if (l !== "/") {
      let S = l.replace(/^\//, "").split("/");
      d = "/" + h.replace(/^\//, "").split("/").slice(S.length).join("/");
    }
    let y = bO(t, {
      pathname: d
    }), v = $O(y && y.map((S) => Object.assign({}, S, {
      params: Object.assign({}, o, S.params),
      pathname: ui([
        l,
        a.encodeLocation ? a.encodeLocation(S.pathname).pathname : S.pathname
      ]),
      pathnameBase: S.pathnameBase === "/" ? l : ui([
        l,
        a.encodeLocation ? a.encodeLocation(S.pathnameBase).pathname : S.pathnameBase
      ])
    })), s, n, i);
    return e && v ? b.createElement(gu.Provider, {
      value: {
        location: Sr({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, c),
        navigationType: Jn.Pop
      }
    }, v) : v;
  }
  function FO() {
    let t = tD(), e = UO(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t), n = t instanceof Error ? t.stack : null, a = {
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
  const QO = b.createElement(FO, null);
  class KO extends b.Component {
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
      return this.state.error !== void 0 ? b.createElement(ia.Provider, {
        value: this.props.routeContext
      }, b.createElement(z1.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  }
  function ZO(t) {
    let { routeContext: e, match: n, children: i } = t, a = b.useContext(Lh);
    return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), b.createElement(ia.Provider, {
      value: e
    }, i);
  }
  function $O(t, e, n, i) {
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
      c >= 0 || Nt(false), r = r.slice(0, Math.min(r.length, c + 1));
    }
    let l = false, u = -1;
    if (n && i && i.v7_partialHydration) for (let c = 0; c < r.length; c++) {
      let f = r[c];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id) {
        let { loaderData: h, errors: d } = n, y = f.route.loader && h[f.route.id] === void 0 && (!d || d[f.route.id] === void 0);
        if (f.route.lazy || y) {
          l = true, u >= 0 ? r = r.slice(0, u + 1) : r = [
            r[0]
          ];
          break;
        }
      }
    }
    return r.reduceRight((c, f, h) => {
      let d, y = false, v = null, S = null;
      n && (d = o && f.route.id ? o[f.route.id] : void 0, v = f.route.errorElement || QO, l && (u < 0 && h === 0 ? (y = true, S = null) : u === h && (y = true, S = f.route.hydrateFallbackElement || null)));
      let p = e.concat(r.slice(0, h + 1)), m = () => {
        let g;
        return d ? g = v : y ? g = S : f.route.Component ? g = b.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = c, b.createElement(ZO, {
          match: f,
          routeContext: {
            outlet: c,
            matches: p,
            isDataRoute: n != null
          },
          children: g
        });
      };
      return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? b.createElement(KO, {
        location: n.location,
        revalidation: n.revalidation,
        component: v,
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
  var B1 = function(t) {
    return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t;
  }(B1 || {}), Nl = function(t) {
    return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t;
  }(Nl || {});
  function IO(t) {
    let e = b.useContext(Lh);
    return e || Nt(false), e;
  }
  function JO(t) {
    let e = b.useContext(HO);
    return e || Nt(false), e;
  }
  function WO(t) {
    let e = b.useContext(ia);
    return e || Nt(false), e;
  }
  function k1(t) {
    let e = WO(), n = e.matches[e.matches.length - 1];
    return n.route.id || Nt(false), n.route.id;
  }
  function tD() {
    var t;
    let e = b.useContext(z1), n = JO(Nl.UseRouteError), i = k1(Nl.UseRouteError);
    return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[i];
  }
  function eD() {
    let { router: t } = IO(B1.UseNavigateStable), e = k1(Nl.UseNavigateStable), n = b.useRef(false);
    return _1(() => {
      n.current = true;
    }), b.useCallback(function(a, s) {
      s === void 0 && (s = {}), n.current && (typeof a == "number" ? t.navigate(a) : t.navigate(a, Sr({
        fromRouteId: e
      }, s)));
    }, [
      t,
      e
    ]);
  }
  function nD(t, e) {
    t == null ? void 0 : t.v7_startTransition, t == null ? void 0 : t.v7_relativeSplatPath;
  }
  function ma(t) {
    Nt(false);
  }
  function iD(t) {
    let { basename: e = "/", children: n = null, location: i, navigationType: a = Jn.Pop, navigator: s, static: r = false, future: o } = t;
    Yr() && Nt(false);
    let l = e.replace(/^\/*/, "/"), u = b.useMemo(() => ({
      basename: l,
      navigator: s,
      static: r,
      future: Sr({
        v7_relativeSplatPath: false
      }, o)
    }), [
      l,
      o,
      s,
      r
    ]);
    typeof i == "string" && (i = ea(i));
    let { pathname: c = "/", search: f = "", hash: h = "", state: d = null, key: y = "default" } = i, v = b.useMemo(() => {
      let S = _h(c, l);
      return S == null ? null : {
        location: {
          pathname: S,
          search: f,
          hash: h,
          state: d,
          key: y
        },
        navigationType: a
      };
    }, [
      l,
      c,
      f,
      h,
      d,
      y,
      a
    ]);
    return v == null ? null : b.createElement(na.Provider, {
      value: u
    }, b.createElement(gu.Provider, {
      children: n,
      value: v
    }));
  }
  function aD(t) {
    let { children: e, location: n } = t;
    return qO(Yf(e), n);
  }
  new Promise(() => {
  });
  function Yf(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return b.Children.forEach(t, (i, a) => {
      if (!b.isValidElement(i)) return;
      let s = [
        ...e,
        a
      ];
      if (i.type === b.Fragment) {
        n.push.apply(n, Yf(i.props.children, s));
        return;
      }
      i.type !== ma && Nt(false), !i.props.index || !i.props.children || Nt(false);
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
      i.props.children && (r.children = Yf(i.props.children, s)), n.push(r);
    }), n;
  }
  function qf() {
    return qf = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    }, qf.apply(this, arguments);
  }
  function sD(t, e) {
    if (t == null) return {};
    var n = {}, i = Object.keys(t), a, s;
    for (s = 0; s < i.length; s++) a = i[s], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n;
  }
  function rD(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
  }
  function oD(t, e) {
    return t.button === 0 && (!e || e === "_self") && !rD(t);
  }
  const lD = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition"
  ], uD = "6";
  try {
    window.__reactRouterVersion = uD;
  } catch {
  }
  const cD = "startTransition", Dg = d0[cD];
  function fD(t) {
    let { basename: e, children: n, future: i, window: a } = t, s = b.useRef();
    s.current == null && (s.current = gO({
      window: a,
      v5Compat: true
    }));
    let r = s.current, [o, l] = b.useState({
      action: r.action,
      location: r.location
    }), { v7_startTransition: u } = i || {}, c = b.useCallback((f) => {
      u && Dg ? Dg(() => l(f)) : l(f);
    }, [
      l,
      u
    ]);
    return b.useLayoutEffect(() => r.listen(c), [
      r,
      c
    ]), b.useEffect(() => nD(i), [
      i
    ]), b.createElement(iD, {
      basename: e,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: r,
      future: i
    });
  }
  let dD, hD;
  dD = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  hD = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  Is = b.forwardRef(function(e, n) {
    let { onClick: i, relative: a, reloadDocument: s, replace: r, state: o, target: l, to: u, preventScrollReset: c, viewTransition: f } = e, h = sD(e, lD), { basename: d } = b.useContext(na), y, v = false;
    if (typeof u == "string" && hD.test(u) && (y = u, dD)) try {
      let g = new URL(window.location.href), w = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u), T = _h(w.pathname, d);
      w.origin === g.origin && T != null ? u = T + w.search + w.hash : v = true;
    } catch {
    }
    let S = GO(u, {
      relative: a
    }), p = mD(u, {
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
    return b.createElement("a", qf({}, h, {
      href: y || S,
      onClick: v || s ? i : m,
      ref: n,
      target: l
    }));
  });
  var Ng;
  (function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState";
  })(Ng || (Ng = {}));
  var jg;
  (function(t) {
    t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration";
  })(jg || (jg = {}));
  function mD(t, e) {
    let { target: n, replace: i, state: a, preventScrollReset: s, relative: r, viewTransition: o } = e === void 0 ? {} : e, l = L1(), u = qr(), c = V1(t, {
      relative: r
    });
    return b.useCallback((f) => {
      if (oD(f, n)) {
        f.preventDefault();
        let h = i !== void 0 ? i : Dl(u) === Dl(c);
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
  class pD extends b.Component {
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
      return this.state.hasError ? x.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-background p-4",
        children: x.jsxs("div", {
          className: "text-center max-w-md",
          children: [
            x.jsx("h1", {
              className: "text-2xl font-bold text-destructive mb-4",
              children: "Something went wrong"
            }),
            x.jsx("p", {
              className: "text-muted-foreground mb-4",
              children: ((_a5 = this.state.error) == null ? void 0 : _a5.message) || "An unexpected error occurred"
            }),
            x.jsx("button", {
              onClick: () => window.location.reload(),
              className: "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",
              children: "Reload Page"
            }),
            x.jsxs("details", {
              className: "mt-4 text-left",
              children: [
                x.jsx("summary", {
                  className: "cursor-pointer text-sm text-muted-foreground",
                  children: "Error Details"
                }),
                x.jsx("pre", {
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
  let Me;
  Ze = {
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
  zg = [
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
  wr = [
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
          body: "The TikTok of finance for next-gen traders. An iOS and web app that turns finance news into a swipeable short-form feed. Invited by YC partner Ryan Choi to the YC Startup Intern Expo.",
          bullets: [
            "Built a fault-tolerant distributed layer across 5 providers on stateless serverless workers, making market data 10\xD7 faster (1.72s \u2192 0.17s p50) with 50\xD7 fewer API calls",
            "Engineered a backtesting engine \u2014 9 indicators, expectancy, drawdown \u2014 that exposes overfitting",
            "Shipped a visual strategy builder with Python export and a from-scratch SVG charting engine",
            "Built the social layer \u2014 posts, follows, paper-trading P&L \u2014 on PostgreSQL"
          ],
          tags: [
            "iOS",
            "TypeScript",
            "PostgreSQL"
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
          id: "harbor",
          title: "Harbor",
          subtitle: "Disaster preparedness platform",
          meta: "TidalTAMU 2026",
          body: "Helps communities plan for, coordinate during and recover from emergencies. First place in the Google Gemini track.",
          bullets: [
            "AI-powered resource matching for disaster response",
            "Community coordination and communication tooling",
            "Live natural-disaster news and an interactive globe, built on Google Gemini"
          ],
          tags: [
            "React",
            "Gemini",
            "Supabase"
          ],
          archived: true,
          links: [
            {
              label: "harbordisaster.xyz",
              href: "https://harbordisaster.xyz"
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
          video: "shots/shotsensei",
          poster: "shots/shotsensei-poster.jpg",
          links: [
            {
              label: "Devpost",
              href: "https://devpost.com/software/a-d3b6nf"
            },
            {
              label: "playshotsensei.com",
              href: "https://playshotsensei.com"
            }
          ]
        },
        {
          id: "prophecy",
          title: "Prophecy",
          subtitle: "Lead Developer \xB7 HackMIT 2026 Track Finalist",
          meta: "Sep 2026",
          body: "An MCP-powered developer tool that maps a codebase's dependencies and hands AI coding agents the exact context, and the blast radius, before they touch anything.",
          bullets: [
            "Maps codebase dependencies to find a change's blast radius and deliver targeted context to AI coding agents",
            "Built collaborative agent workflows so multiple AI assistants share file-level findings, track overlapping work, and skip redundant exploration",
            "Automated change-risk analysis over the dependency graph and concurrent agent sessions to surface breaking changes before a commit"
          ],
          tags: [
            "MCP",
            "AI agents",
            "Dependency graphs",
            "Developer tools"
          ],
          shot: "shots/prophecy.jpg",
          links: [
            {
              label: "amritnair.github.io/prophecy",
              href: "https://amritnair.github.io/prophecy/"
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
            "HackMIT 2026 \u2014 Track Finalist",
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
  U4 = Object.fromEntries(wr.map((t) => [
    t.id,
    t
  ]));
  Me = (t) => t.startsWith("http") || t.startsWith("mailto:") ? t : `/amritaraj-nair-portfolio/${t}`;
  function _g(t) {
    var _a5;
    if (t === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    (_a5 = document.getElementById(t)) == null ? void 0 : _a5.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  function jl({ children: t, tilt: e = 0 }) {
    return x.jsx("span", {
      className: "inline-block whitespace-nowrap rounded-[3px] border border-[var(--ink)] px-2.5 py-1 text-[0.7rem] leading-none",
      style: {
        transform: e ? `rotate(${e}deg)` : void 0
      },
      children: t
    });
  }
  function Xf({ children: t, className: e = "" }) {
    const n = b.useRef(null), [i, a] = b.useState(false);
    return b.useEffect(() => {
      const s = n.current;
      if (!s) return;
      const r = new IntersectionObserver(([o]) => o.isIntersecting && a(true), {
        rootMargin: "-8% 0px -8% 0px"
      });
      return r.observe(s), () => r.disconnect();
    }, []), x.jsx("div", {
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
  function U1({ card: t, zone: e, index: n }) {
    var _a5, _b3, _c3, _d3;
    return x.jsxs(Xf, {
      className: "u-reveal grid gap-x-10 gap-y-5 border-b border-[var(--rule-soft)] px-6 py-10 last:border-b-0 sm:px-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]",
      children: [
        x.jsxs("div", {
          children: [
            x.jsx("h3", {
              className: "u-grotesk text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-[1.02] tracking-[-0.035em]",
              children: t.title
            }),
            x.jsx("p", {
              className: "u-grotesk mt-2 text-[0.88rem] text-[var(--ink-2)]",
              children: t.subtitle
            }),
            t.meta && x.jsx("p", {
              className: "u-grotesk mt-1 text-[0.76rem] text-[var(--ink-4)]",
              children: t.meta
            })
          ]
        }),
        x.jsxs("div", {
          children: [
            t.body && x.jsx("p", {
              className: "u-grotesk max-w-2xl text-[1rem] leading-relaxed",
              children: t.body
            }),
            t.bullets.length > 0 && x.jsx("ul", {
              className: `max-w-2xl space-y-2.5 ${t.body ? "mt-6" : ""}`,
              children: t.bullets.map((i) => x.jsxs("li", {
                className: "u-grotesk grid grid-cols-[1.1rem_minmax(0,1fr)] text-[0.93rem] leading-relaxed text-[var(--ink-2)]",
                children: [
                  x.jsx("span", {
                    "aria-hidden": true,
                    className: "pt-[0.55rem]",
                    children: x.jsx("span", {
                      className: "block h-px w-2.5 bg-[var(--ink)]"
                    })
                  }),
                  x.jsx("span", {
                    children: i
                  })
                ]
              }, i))
            }),
            (((_a5 = t.tags) == null ? void 0 : _a5.length) || ((_b3 = t.links) == null ? void 0 : _b3.length)) && x.jsxs("div", {
              className: "mt-7 flex flex-wrap items-center gap-2",
              children: [
                (_c3 = t.tags) == null ? void 0 : _c3.map((i) => x.jsx(jl, {
                  children: i
                }, i)),
                (_d3 = t.links) == null ? void 0 : _d3.map((i) => x.jsxs("a", {
                  href: Me(i.href),
                  target: "_blank",
                  rel: "noreferrer noopener",
                  className: "u-grotesk inline-block rounded-[3px] bg-[var(--ink)] px-2.5 py-1 text-[0.7rem] leading-none text-[var(--paper)] transition-opacity hover:opacity-80",
                  children: [
                    i.label,
                    " \u2197"
                  ]
                }, i.label))
              ]
            })
          ]
        }),
        x.jsx(gD, {
          card: t,
          index: n
        })
      ]
    });
  }
  function gD({ card: t, index: e }) {
    var _a5, _b3;
    if (!t.video && !t.shot) return null;
    const n = (_b3 = (_a5 = t.links) == null ? void 0 : _a5.find((i) => /^[\w-]+(\.[\w-]+)+$/.test(i.label))) == null ? void 0 : _b3.label;
    return x.jsx("figure", {
      className: "col-span-full mt-4",
      children: x.jsx(yD, {
        label: n,
        children: t.video ? x.jsx(vD, {
          base: t.video,
          poster: t.poster ?? t.shot,
          eager: e === 0
        }) : x.jsx(bD, {
          src: Me(t.shot),
          alt: `${t.title}, the live site`,
          eager: e === 0
        })
      })
    });
  }
  function yD({ label: t, children: e }) {
    return x.jsxs("div", {
      className: "overflow-hidden rounded-[4px] border border-[var(--ink)] bg-black",
      children: [
        x.jsxs("div", {
          className: "flex items-center gap-2 border-b border-white/10 bg-[#0e0e0e] px-3 py-2",
          children: [
            x.jsxs("span", {
              className: "flex gap-1.5",
              "aria-hidden": true,
              children: [
                x.jsx("span", {
                  className: "h-2.5 w-2.5 rounded-full bg-white/25"
                }),
                x.jsx("span", {
                  className: "h-2.5 w-2.5 rounded-full bg-white/25"
                }),
                x.jsx("span", {
                  className: "h-2.5 w-2.5 rounded-full bg-white/25"
                })
              ]
            }),
            t && x.jsx("span", {
              className: "mx-auto max-w-[75%] truncate rounded-[3px] bg-white/[0.08] px-2 py-0.5 text-center text-[0.62rem] text-white/60",
              children: t
            })
          ]
        }),
        x.jsx("div", {
          className: "relative aspect-[16/10] w-full overflow-hidden bg-black",
          children: e
        })
      ]
    });
  }
  function vD({ base: t, poster: e, eager: n }) {
    const i = b.useRef(null), a = b.useRef(false), s = () => {
      const r = i.current;
      (r == null ? void 0 : r.paused) && a.current && !document.hidden && r.play().catch(() => {
      });
    };
    return b.useEffect(() => {
      const r = i.current;
      if (!r) return;
      const o = new IntersectionObserver(([l]) => {
        a.current = l.isIntersecting, s();
      });
      return o.observe(r), document.addEventListener("visibilitychange", s), () => {
        o.disconnect(), document.removeEventListener("visibilitychange", s);
      };
    }, []), x.jsxs("video", {
      ref: i,
      className: "absolute inset-0 h-full w-full object-cover",
      poster: e ? Me(e) : void 0,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: n ? "auto" : "metadata",
      onCanPlay: s,
      onLoadedData: s,
      onPause: s,
      children: [
        x.jsx("source", {
          src: `${Me(t)}.mp4`,
          type: "video/mp4"
        }),
        x.jsx("source", {
          src: `${Me(t)}.webm`,
          type: "video/webm"
        })
      ]
    });
  }
  function bD({ src: t, alt: e, eager: n }) {
    const i = b.useRef(null), a = b.useRef(null), s = b.useRef(false), r = b.useRef(false);
    return b.useEffect(() => {
      const o = i.current, l = o == null ? void 0 : o.parentElement;
      if (!l || !o || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const u = () => s.current && !r.current, c = () => {
        a.current && (u() ? a.current.play() : a.current.pause());
      }, f = () => {
        var _a5;
        if (!o.complete || !o.naturalWidth) return;
        const y = o.clientHeight - l.clientHeight;
        (_a5 = a.current) == null ? void 0 : _a5.cancel(), a.current = null, !(y <= 4) && (a.current = o.animate([
          {
            transform: "translateY(0)"
          },
          {
            transform: `translateY(${-y}px)`
          }
        ], {
          duration: y / 46 * 1e3,
          direction: "alternate",
          iterations: 1 / 0,
          easing: "linear"
        }), c());
      };
      o.complete ? f() : o.addEventListener("load", f, {
        once: true
      });
      const h = new IntersectionObserver(([y]) => {
        s.current = y.isIntersecting, c();
      }, {
        threshold: 0.05
      });
      h.observe(l);
      const d = new ResizeObserver(f);
      return d.observe(l), () => {
        var _a5;
        h.disconnect(), d.disconnect(), (_a5 = a.current) == null ? void 0 : _a5.cancel(), o.removeEventListener("load", f);
      };
    }, [
      t
    ]), x.jsx("img", {
      ref: i,
      src: t,
      alt: e,
      loading: n ? "eager" : "lazy",
      draggable: false,
      onMouseEnter: () => {
        var _a5;
        r.current = true, (_a5 = a.current) == null ? void 0 : _a5.pause();
      },
      onMouseLeave: () => {
        var _a5;
        r.current = false, s.current && ((_a5 = a.current) == null ? void 0 : _a5.play());
      },
      className: "absolute inset-x-0 top-0 w-full"
    });
  }
  function xD() {
    const [t, e] = b.useState(() => typeof document < "u" && document.documentElement.classList.contains("dark"));
    return {
      dark: t,
      toggle: () => {
        const i = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", i);
        try {
          localStorage.setItem("theme", i ? "dark" : "light");
        } catch {
        }
        e(i);
      }
    };
  }
  function P1() {
    const { dark: t, toggle: e } = xD();
    return x.jsx("button", {
      type: "button",
      onClick: e,
      "aria-label": t ? "Switch to light mode" : "Switch to dark mode",
      title: t ? "Light mode" : "Dark mode",
      className: "u-grotesk flex h-7 w-7 items-center justify-center rounded-[3px] border border-[var(--ink)] text-[var(--ink)] transition-opacity hover:opacity-60",
      children: x.jsxs("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 16 16",
        "aria-hidden": true,
        children: [
          x.jsx("circle", {
            cx: "8",
            cy: "8",
            r: "6.25",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5"
          }),
          x.jsx("path", {
            d: "M8 1.75a6.25 6.25 0 0 1 0 12.5z",
            fill: "currentColor"
          })
        ]
      })
    });
  }
  function H1() {
    b.useEffect(() => {
      const t = document.documentElement, e = t.style.background;
      return t.style.background = "var(--paper)", () => {
        t.style.background = e;
      };
    }, []);
  }
  const SD = "amritnair";
  function wD(t) {
    const [e, n] = b.useState(t);
    return b.useEffect(() => {
      const i = new AbortController();
      return fetch(`https://github-contributions-api.jogruber.de/v4/${SD}?y=last`, {
        signal: i.signal
      }).then((a) => a.ok ? a.json() : Promise.reject(a.status)).then((a) => {
        var _a5;
        ((_a5 = a == null ? void 0 : a.contributions) == null ? void 0 : _a5.length) && n({
          total: a.total.lastYear,
          from: a.contributions[0].date,
          levels: a.contributions.map((s) => s.level).join("")
        });
      }).catch(() => {
      }), () => i.abort();
    }, []), e;
  }
  function TD({ levels: t, from: e }) {
    const n = (/* @__PURE__ */ new Date(`${e}T00:00:00`)).getDay(), i = [
      ...Array(n).fill(-1),
      ...t.split("").map(Number)
    ], a = [];
    for (let r = 0; r < i.length; r += 7) a.push(i.slice(r, r + 7));
    const s = [
      0.09,
      0.3,
      0.52,
      0.76,
      1
    ];
    return x.jsx("div", {
      className: "overflow-x-auto",
      children: x.jsx("div", {
        className: "flex gap-[3px]",
        role: "img",
        "aria-label": "GitHub contribution calendar",
        children: a.map((r, o) => x.jsx("div", {
          className: "flex flex-col gap-[3px]",
          children: r.map((l, u) => x.jsx("span", {
            className: "block h-[9px] w-[9px] rounded-[2px]",
            style: {
              background: l < 0 ? "transparent" : "var(--ink)",
              opacity: l < 0 ? 0 : s[l]
            }
          }, u))
        }, o))
      })
    });
  }
  const ED = 582, AD = "2025-09-14", CD = "2026-09-16", MD = "00001000000000000000001000000000001000001000000000000020100100000000000000000000010000000000000000000000000000000000000000000100000001000000000000111111000000000000000000000000000000000000000000002444400000000000000020110100424100240002000000000000000000000000000000000000000000000012020000000000000000000010001100001100012000100101100000004400211200023113220000021024", RD = {
    total: ED,
    from: AD,
    to: CD,
    levels: MD
  }, Lg = "/amritaraj-nair-portfolio/hero/reel", OD = "/amritaraj-nair-portfolio/hero/car.jpg", vo = [
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
    },
    {
      src: "photos/demo.jpg",
      alt: "Pulsematic being demonstrated to the team at Matic",
      caption: "demoing pulsematic",
      position: "50% 46%"
    },
    {
      src: "photos/research.jpg",
      alt: "Amritaraj with his cattle-nutrition research poster at Texas A&M",
      caption: "research poster, texas a&m",
      position: "32% 28%"
    },
    {
      src: "photos/tidal.jpg",
      alt: "Amritaraj and teammates with the TidalTAMU mascot",
      caption: "tidaltamu 2026",
      position: "50% 42%"
    },
    {
      src: "photos/shotsensei.jpg",
      alt: "Amritaraj demoing ShotSensei with a pickleball paddle",
      caption: "shotsensei, demo day",
      position: "55% 38%"
    },
    {
      src: "photos/hackathon.jpg",
      alt: "Amritaraj and teammates at HackMIT",
      caption: "hackmit",
      position: "50% 40%"
    }
  ];
  function DD() {
    const [t, e] = b.useState(0);
    return b.useEffect(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const n = window.setInterval(() => {
        document.hidden || e((i) => (i + 1) % vo.length);
      }, 4200);
      return () => clearInterval(n);
    }, []), x.jsxs("div", {
      className: "relative h-full w-full overflow-hidden bg-[#0b0b0b]",
      children: [
        vo.map((n, i) => x.jsx("img", {
          src: Me(n.src),
          alt: n.alt,
          loading: i === 0 ? "eager" : "lazy",
          className: "absolute inset-0 h-full w-full object-cover",
          style: {
            objectPosition: n.position,
            opacity: i === t ? 1 : 0,
            transition: "opacity 1.1s ease-in-out"
          }
        }, n.src)),
        x.jsxs("div", {
          className: "absolute bottom-4 left-4 flex items-center gap-3",
          children: [
            x.jsx("span", {
              className: "u-grotesk inline-block rounded-[3px] border border-white/70 bg-black/45 px-2.5 py-1 text-[0.68rem] text-white backdrop-blur",
              children: vo[t].caption
            }),
            x.jsx("span", {
              className: "flex gap-1.5",
              children: vo.map((n, i) => x.jsx("button", {
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
  function ND({ className: t, eager: e }) {
    const n = b.useRef(null), i = () => {
      const a = n.current;
      (a == null ? void 0 : a.paused) && a.play().catch(() => {
      });
    };
    return b.useEffect(i, []), x.jsxs("video", {
      ref: n,
      className: t,
      poster: OD,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: e ? "auto" : "metadata",
      onCanPlay: i,
      onLoadedData: i,
      children: [
        x.jsx("source", {
          src: `${Lg}.mp4`,
          type: "video/mp4"
        }),
        x.jsx("source", {
          src: `${Lg}.webm`,
          type: "video/webm"
        })
      ]
    });
  }
  function jD() {
    H1();
    const t = wD(RD), e = [
      ...wr.map((n) => ({
        id: n.id,
        label: n.sign.toLowerCase()
      })),
      {
        id: "resume",
        label: "r\xE9sum\xE9"
      },
      {
        id: "play",
        label: "play"
      }
    ];
    return x.jsxs("main", {
      className: "min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased",
      children: [
        x.jsx("style", {
          children: `
        .u-grotesk { font-family: Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif; }
        @media (prefers-reduced-motion: reduce) { .u-reveal { transition: none !important } }
      `
        }),
        x.jsx("header", {
          className: "sticky top-0 z-50 border-b border-[var(--ink)] bg-[var(--paper-glass)] backdrop-blur",
          children: x.jsxs("div", {
            className: "flex items-center gap-6 px-4 py-3 sm:px-7",
            children: [
              x.jsxs("button", {
                type: "button",
                onClick: () => _g("top"),
                className: "u-grotesk flex items-center gap-2 text-[0.82rem] font-medium tracking-tight",
                children: [
                  x.jsx("span", {
                    "aria-hidden": true,
                    className: "inline-block h-3 w-3 rounded-full border border-[var(--ink)]"
                  }),
                  "amritaraj nair."
                ]
              }),
              x.jsx("nav", {
                className: "u-grotesk ml-auto hidden items-center gap-7 text-[0.82rem] text-[var(--ink-3)] md:flex",
                children: e.map(({ id: n, label: i }) => x.jsx("button", {
                  type: "button",
                  onClick: () => _g(n),
                  className: "transition-colors hover:text-[var(--ink)]",
                  children: i
                }, n))
              }),
              x.jsx("div", {
                className: "ml-auto md:ml-0",
                children: x.jsx(P1, {})
              }),
              x.jsx("a", {
                href: `mailto:${Ze.email}`,
                className: "u-grotesk rounded-[3px] bg-[var(--ink)] px-3.5 py-1.5 text-[0.78rem] text-[var(--paper)] transition-opacity hover:opacity-80 md:ml-0",
                children: "contact"
              })
            ]
          })
        }),
        x.jsxs("section", {
          id: "top",
          className: "grid border-b border-[var(--ink)] lg:grid-cols-2",
          children: [
            x.jsx("div", {
              className: "relative order-2 aspect-[4/3] overflow-hidden border-t border-[var(--ink)] bg-black lg:order-1 lg:aspect-auto lg:min-h-[78vh] lg:border-r lg:border-t-0",
              children: x.jsx(DD, {})
            }),
            x.jsxs("div", {
              className: "order-1 flex flex-col justify-between p-6 sm:p-10 lg:order-2",
              children: [
                x.jsxs("div", {
                  children: [
                    x.jsx(jl, {
                      children: "student \xB7 builder"
                    }),
                    x.jsxs("h1", {
                      className: "u-grotesk mt-8 text-[clamp(2.9rem,8vw,6.2rem)] font-medium leading-[0.88] tracking-[-0.05em]",
                      children: [
                        "amritaraj",
                        x.jsx("br", {}),
                        "nair"
                      ]
                    }),
                    x.jsx("p", {
                      className: "u-grotesk mt-6 max-w-lg text-[clamp(1.05rem,2.2vw,1.5rem)] font-medium leading-tight tracking-[-0.02em] text-[var(--ink-3)]",
                      children: "portfolio website"
                    })
                  ]
                }),
                x.jsxs("div", {
                  className: "mt-12 max-w-md",
                  children: [
                    x.jsx("p", {
                      className: "u-grotesk text-[0.98rem] leading-relaxed text-[var(--ink-2)]",
                      children: "Computer Science Honors at Texas A&M, minor in Mathematics. I build AI products that ship: healthcare AI at Matic, engineering at ClinicalHours as CTO, and Thorp, which I build solo. Every one of them is live for real users this year."
                    }),
                    x.jsx("div", {
                      className: "mt-7 flex flex-wrap items-center gap-x-6 gap-y-3",
                      children: Ze.links.map((n) => x.jsx("a", {
                        href: Me(n.href),
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: "u-grotesk border-b border-[var(--ink)] pb-0.5 text-[0.82rem] transition-opacity hover:opacity-55",
                        children: n.label.toLowerCase()
                      }, n.label))
                    })
                  ]
                })
              ]
            })
          ]
        }),
        x.jsx("section", {
          id: "github",
          className: "scroll-mt-14 border-b border-[var(--ink)]",
          children: x.jsxs("div", {
            className: "grid items-center gap-6 px-6 py-8 sm:px-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10",
            children: [
              x.jsx("div", {
                children: x.jsxs("a", {
                  href: "https://github.com/amritnair",
                  target: "_blank",
                  rel: "noreferrer noopener",
                  className: "u-grotesk group inline-block",
                  children: [
                    x.jsx("span", {
                      className: "block text-[clamp(2.2rem,5vw,3.4rem)] font-medium leading-none tracking-[-0.045em]",
                      children: t.total.toLocaleString()
                    }),
                    x.jsx("span", {
                      className: "mt-2 block text-[0.84rem] text-[var(--ink-3)] transition-colors group-hover:text-[var(--ink)]",
                      children: "contributions on github in the last year \u2197"
                    })
                  ]
                })
              }),
              x.jsx(TD, {
                levels: t.levels,
                from: t.from
              })
            ]
          })
        }),
        wr.map((n) => {
          const i = n.cards.filter((s) => !s.archived), a = n.cards.length - i.length;
          return x.jsxs("section", {
            id: n.id,
            className: "scroll-mt-14 border-b border-[var(--ink)]",
            children: [
              x.jsxs("div", {
                className: "flex items-baseline justify-between gap-6 px-6 py-5 sm:px-10",
                children: [
                  x.jsx("h2", {
                    className: "u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]",
                    children: n.sign.toLowerCase()
                  }),
                  x.jsx("p", {
                    className: "u-grotesk text-right text-[0.78rem] text-[var(--ink-3)]",
                    children: n.caption
                  })
                ]
              }),
              x.jsx("div", {
                className: "border-t border-[var(--ink)]",
                children: i.map((s, r) => x.jsx(U1, {
                  card: s,
                  zone: n,
                  index: r
                }, s.id))
              }),
              a > 0 && x.jsx("div", {
                className: "border-t border-[var(--ink)] px-6 py-5 sm:px-10",
                children: x.jsxs(Is, {
                  to: "/projects",
                  className: "u-grotesk inline-flex items-center gap-2 text-[0.86rem] transition-opacity hover:opacity-55",
                  children: [
                    x.jsxs("span", {
                      className: "border-b border-[var(--ink)] pb-0.5",
                      children: [
                        "see all ",
                        n.cards.length,
                        " in the gallery"
                      ]
                    }),
                    x.jsx("span", {
                      "aria-hidden": true,
                      children: "\u2192"
                    })
                  ]
                })
              })
            ]
          }, n.id);
        }),
        x.jsxs("section", {
          id: "resume",
          className: "scroll-mt-14 border-b border-[var(--ink)]",
          children: [
            x.jsxs("div", {
              className: "flex flex-wrap items-baseline justify-between gap-4 px-6 py-5 sm:px-10",
              children: [
                x.jsx("h2", {
                  className: "u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]",
                  children: "r\xE9sum\xE9"
                }),
                x.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    x.jsx("a", {
                      href: Me("Amritaraj_Nair_Resume.pdf"),
                      target: "_blank",
                      rel: "noreferrer noopener",
                      className: "u-grotesk inline-block rounded-[3px] bg-[var(--ink)] px-3.5 py-1.5 text-[0.78rem] text-[var(--paper)] transition-opacity hover:opacity-80",
                      children: "open pdf \u2197"
                    }),
                    x.jsx("a", {
                      href: Me("Amritaraj_Nair_Resume.pdf"),
                      download: true,
                      className: "u-grotesk border-b border-[var(--ink)] pb-0.5 text-[0.8rem] transition-opacity hover:opacity-55",
                      children: "download"
                    })
                  ]
                })
              ]
            }),
            x.jsx(Xf, {
              className: "u-reveal border-t border-[var(--ink)] bg-[var(--panel)] px-6 py-10 sm:px-10",
              children: x.jsx("img", {
                src: Me("resume-preview.png"),
                alt: "Amritaraj Nair's r\xE9sum\xE9",
                width: 1891,
                height: 2448,
                loading: "lazy",
                className: "mx-auto block w-full max-w-3xl border border-[var(--ink)] bg-white"
              })
            })
          ]
        }),
        x.jsxs("section", {
          id: "play",
          className: "scroll-mt-14 border-b border-[var(--ink)]",
          children: [
            x.jsxs("div", {
              className: "flex items-baseline justify-between gap-6 px-6 py-5 sm:px-10",
              children: [
                x.jsx("h2", {
                  className: "u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]",
                  children: "play"
                }),
                x.jsx(jl, {
                  tilt: -1.5,
                  children: "interactive"
                })
              ]
            }),
            x.jsxs(Xf, {
              className: "u-reveal relative border-t border-[var(--ink)] bg-black",
              children: [
                x.jsx(ND, {
                  className: "aspect-[16/9] w-full object-cover"
                }),
                x.jsx("span", {
                  className: "u-grotesk absolute bottom-4 left-4 inline-block rounded-[3px] border border-white/70 bg-black/45 px-2.5 py-1 text-[0.68rem] text-white backdrop-blur",
                  children: "rendered in blender"
                })
              ]
            }),
            x.jsxs("div", {
              className: "grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10",
              children: [
                x.jsxs("h3", {
                  className: "u-grotesk text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-[1.02] tracking-[-0.035em]",
                  children: [
                    "The same r\xE9sum\xE9,",
                    x.jsx("br", {}),
                    "as somewhere you drive"
                  ]
                }),
                x.jsxs("div", {
                  children: [
                    x.jsx("p", {
                      className: "u-grotesk max-w-2xl text-[1rem] leading-relaxed text-[var(--ink-2)]",
                      children: "An island with four districts you drive into to read, a race circuit hung above them and a garage you spend points in. Built with React Three Fiber and Rapier; the car is modelled in Blender. It runs in the browser. No install, no download."
                    }),
                    x.jsxs("div", {
                      className: "mt-7 flex flex-wrap items-center gap-3",
                      children: [
                        x.jsx(Is, {
                          to: "/play",
                          className: "u-grotesk inline-block rounded-[3px] bg-[var(--ink)] px-5 py-2.5 text-[0.82rem] text-[var(--paper)] transition-opacity hover:opacity-80",
                          children: "enter the world \u2192"
                        }),
                        x.jsx("span", {
                          className: "u-grotesk text-[0.76rem] text-[var(--ink-4)]",
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
        x.jsx("footer", {
          className: "px-6 py-14 sm:px-10",
          children: x.jsxs("div", {
            className: "grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10",
            children: [
              x.jsx("h2", {
                className: "u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]",
                children: "get in touch"
              }),
              x.jsxs("div", {
                children: [
                  x.jsx("a", {
                    href: `mailto:${Ze.email}`,
                    className: "u-grotesk text-[clamp(1.3rem,3.4vw,2.2rem)] font-medium leading-tight tracking-[-0.035em] underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-55",
                    children: Ze.email
                  }),
                  x.jsx("p", {
                    className: "u-grotesk mt-3 text-[0.86rem] text-[var(--ink-3)]",
                    children: Ze.phone
                  }),
                  x.jsx("div", {
                    className: "mt-8 flex flex-wrap gap-x-7 gap-y-3",
                    children: Ze.links.map((n) => x.jsxs("a", {
                      href: Me(n.href),
                      target: "_blank",
                      rel: "noreferrer noopener",
                      className: "u-grotesk border-b border-[var(--ink)] pb-0.5 text-[0.82rem] transition-opacity hover:opacity-55",
                      children: [
                        n.label.toLowerCase(),
                        " \u2197"
                      ]
                    }, n.label))
                  }),
                  x.jsxs("p", {
                    className: "u-grotesk mt-12 max-w-md text-[0.78rem] leading-relaxed text-[var(--ink-4)]",
                    children: [
                      "Open to summer 2027 engineering internships.",
                      zg.length > 0 && ` Currently: ${zg.map((n) => n.name.toLowerCase()).join(", ")}.`
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
  function zD() {
    H1(), b.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const t = wr.reduce((e, n) => e + n.cards.length, 0);
    return x.jsxs("main", {
      className: "min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased",
      children: [
        x.jsx("style", {
          children: ".u-grotesk { font-family: Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif; }"
        }),
        x.jsx("header", {
          className: "sticky top-0 z-50 border-b border-[var(--ink)] bg-[var(--paper-glass)] backdrop-blur",
          children: x.jsxs("div", {
            className: "flex items-center gap-6 px-4 py-3 sm:px-7",
            children: [
              x.jsxs(Is, {
                to: "/",
                className: "u-grotesk flex items-center gap-2 text-[0.82rem] font-medium tracking-tight",
                children: [
                  x.jsx("span", {
                    "aria-hidden": true,
                    className: "inline-block h-3 w-3 rounded-full border border-[var(--ink)]"
                  }),
                  "amritaraj nair."
                ]
              }),
              x.jsx(Is, {
                to: "/",
                className: "u-grotesk ml-auto text-[0.82rem] text-[var(--ink-3)] transition-colors hover:text-[var(--ink)]",
                children: "\u2190 back"
              }),
              x.jsx(P1, {}),
              x.jsx("a", {
                href: `mailto:${Ze.email}`,
                className: "u-grotesk rounded-[3px] bg-[var(--ink)] px-3.5 py-1.5 text-[0.78rem] text-[var(--paper)] transition-opacity hover:opacity-80",
                children: "contact"
              })
            ]
          })
        }),
        x.jsxs("section", {
          className: "border-b border-[var(--ink)] px-6 py-14 sm:px-10",
          children: [
            x.jsx(jl, {
              children: "everything"
            }),
            x.jsxs("h1", {
              className: "u-grotesk mt-7 text-[clamp(2.4rem,7vw,5rem)] font-medium leading-[0.9] tracking-[-0.05em]",
              children: [
                "the full",
                x.jsx("br", {}),
                "gallery"
              ]
            }),
            x.jsxs("p", {
              className: "u-grotesk mt-6 max-w-lg text-[0.98rem] leading-relaxed text-[var(--ink-2)]",
              children: [
                "Every piece of work on this site, archived entries included, ",
                t,
                " in all. The front page carries the ones worth leading with."
              ]
            })
          ]
        }),
        wr.map((e) => x.jsxs("section", {
          className: "border-b border-[var(--ink)]",
          children: [
            x.jsxs("div", {
              className: "flex items-baseline justify-between gap-6 px-6 py-5 sm:px-10",
              children: [
                x.jsx("h2", {
                  className: "u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]",
                  children: e.sign.toLowerCase()
                }),
                x.jsx("p", {
                  className: "u-grotesk text-right text-[0.78rem] text-[var(--ink-3)]",
                  children: e.caption
                })
              ]
            }),
            x.jsx("div", {
              className: "border-t border-[var(--ink)]",
              children: e.cards.map((n, i) => x.jsxs("div", {
                className: "relative",
                children: [
                  n.archived && x.jsx("span", {
                    className: "u-grotesk absolute right-6 top-10 z-10 rounded-[3px] border border-[var(--ink-4)] px-2 py-0.5 text-[0.62rem] text-[var(--ink-4)] sm:right-10",
                    children: "archived"
                  }),
                  x.jsx(U1, {
                    card: n,
                    zone: e,
                    index: i
                  })
                ]
              }, n.id))
            })
          ]
        }, e.id)),
        x.jsxs("footer", {
          className: "px-6 py-14 sm:px-10",
          children: [
            x.jsx(Is, {
              to: "/",
              className: "u-grotesk border-b border-[var(--ink)] pb-0.5 text-[0.86rem] transition-opacity hover:opacity-55",
              children: "\u2190 back to the front page"
            }),
            x.jsxs("p", {
              className: "u-grotesk mt-6 text-[0.78rem] text-[var(--ink-4)]",
              children: [
                x.jsx("a", {
                  href: `mailto:${Ze.email}`,
                  className: "hover:text-[var(--ink)]",
                  children: Ze.email
                }),
                " \xB7 ",
                x.jsx("a", {
                  href: Me(Ze.links[1].href),
                  target: "_blank",
                  rel: "noreferrer noopener",
                  className: "hover:text-[var(--ink)]",
                  children: "linkedin"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  const G1 = b.createContext({});
  function _D(t) {
    const e = b.useRef(null);
    return e.current === null && (e.current = t()), e.current;
  }
  const Y1 = typeof window < "u", LD = Y1 ? b.useLayoutEffect : b.useEffect, Vh = b.createContext(null);
  function Bh(t, e) {
    t.indexOf(e) === -1 && t.push(e);
  }
  function zl(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }
  const sn = (t, e, n) => n > e ? e : n < t ? t : n;
  let yu = () => {
  }, ns = () => {
  };
  const Nn = {}, q1 = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
  function X1(t) {
    return typeof t == "object" && t !== null;
  }
  const F1 = (t) => /^0[^.\s]+$/u.test(t);
  function kh(t) {
    let e;
    return () => (e === void 0 && (e = t()), e);
  }
  const Ne = (t) => t, VD = (t, e) => (n) => e(t(n)), Xr = (...t) => t.reduce(VD), Tr = (t, e, n) => {
    const i = e - t;
    return i === 0 ? 1 : (n - t) / i;
  };
  class Uh {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return Bh(this.subscriptions, e), () => zl(this.subscriptions, e);
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
  const je = (t) => t * 1e3, Re = (t) => t / 1e3;
  function Q1(t, e) {
    return e ? t * (1e3 / e) : 0;
  }
  const K1 = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, BD = 1e-7, kD = 12;
  function UD(t, e, n, i, a) {
    let s, r, o = 0;
    do
      r = e + (n - e) / 2, s = K1(r, i, a) - t, s > 0 ? n = r : e = r;
    while (Math.abs(s) > BD && ++o < kD);
    return r;
  }
  function Fr(t, e, n, i) {
    if (t === e && n === i) return Ne;
    const a = (s) => UD(s, 0, 1, t, n);
    return (s) => s === 0 || s === 1 ? s : K1(a(s), e, i);
  }
  const Z1 = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, $1 = (t) => (e) => 1 - t(1 - e), I1 = Fr(0.33, 1.53, 0.69, 0.99), Ph = $1(I1), J1 = Z1(Ph), W1 = (t) => (t *= 2) < 1 ? 0.5 * Ph(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Hh = (t) => 1 - Math.sin(Math.acos(t)), tS = $1(Hh), eS = Z1(Hh), PD = Fr(0.42, 0, 1, 1), HD = Fr(0, 0, 0.58, 1), nS = Fr(0.42, 0, 0.58, 1), GD = (t) => Array.isArray(t) && typeof t[0] != "number", iS = (t) => Array.isArray(t) && typeof t[0] == "number", Vg = {
    linear: Ne,
    easeIn: PD,
    easeInOut: nS,
    easeOut: HD,
    circIn: Hh,
    circInOut: eS,
    circOut: tS,
    backIn: Ph,
    backInOut: J1,
    backOut: I1,
    anticipate: W1
  }, YD = (t) => typeof t == "string", Bg = (t) => {
    if (iS(t)) {
      ns(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
      const [e, n, i, a] = t;
      return Fr(e, n, i, a);
    } else if (YD(t)) return ns(Vg[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), Vg[t];
    return t;
  }, bo = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender"
  ], kg = {
    value: null,
    addProjectionMetrics: null
  };
  function qD(t, e) {
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
        const v = d && a ? n : i;
        return h && r.add(f), v.has(f) || v.add(f), f;
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
        ], n.forEach(u), e && kg.value && kg.value.frameloop[e].push(l), l = 0, n.clear(), a = false, s && (s = false, c.process(f));
      }
    };
    return c;
  }
  const XD = 40;
  function aS(t, e) {
    let n = false, i = true;
    const a = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    }, s = () => n = true, r = bo.reduce((g, w) => (g[w] = qD(s, e ? w : void 0), g), {}), { setup: o, read: l, resolveKeyframes: u, preUpdate: c, update: f, preRender: h, render: d, postRender: y } = r, v = () => {
      const g = Nn.useManualTiming ? a.timestamp : performance.now();
      n = false, Nn.useManualTiming || (a.delta = i ? 1e3 / 60 : Math.max(Math.min(g - a.timestamp, XD), 1)), a.timestamp = g, a.isProcessing = true, o.process(a), l.process(a), u.process(a), c.process(a), f.process(a), h.process(a), d.process(a), y.process(a), a.isProcessing = false, n && e && (i = false, t(v));
    }, S = () => {
      n = true, i = true, a.isProcessing || t(v);
    };
    return {
      schedule: bo.reduce((g, w) => {
        const T = r[w];
        return g[w] = (A, E = false, C = false) => (n || S(), T.schedule(A, E, C)), g;
      }, {}),
      cancel: (g) => {
        for (let w = 0; w < bo.length; w++) r[bo[w]].cancel(g);
      },
      state: a,
      steps: r
    };
  }
  const { schedule: ct, cancel: vi, state: Ut, steps: gc } = aS(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ne, true);
  let Go;
  function FD() {
    Go = void 0;
  }
  const Zt = {
    now: () => (Go === void 0 && Zt.set(Ut.isProcessing || Nn.useManualTiming ? Ut.timestamp : performance.now()), Go),
    set: (t) => {
      Go = t, queueMicrotask(FD);
    }
  }, sS = (t) => (e) => typeof e == "string" && e.startsWith(t), rS = sS("--"), QD = sS("var(--"), Gh = (t) => QD(t) ? KD.test(t.split("/*")[0].trim()) : false, KD = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  function Ug(t) {
    return typeof t != "string" ? false : t.split("/*")[0].includes("var(--");
  }
  const ps = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t
  }, Er = {
    ...ps,
    transform: (t) => sn(0, 1, t)
  }, xo = {
    ...ps,
    default: 1
  }, Js = (t) => Math.round(t * 1e5) / 1e5, Yh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function ZD(t) {
    return t == null;
  }
  const $D = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, qh = (t, e) => (n) => !!(typeof n == "string" && $D.test(n) && n.startsWith(t) || e && !ZD(n) && Object.prototype.hasOwnProperty.call(n, e)), oS = (t, e, n) => (i) => {
    if (typeof i != "string") return i;
    const [a, s, r, o] = i.match(Yh);
    return {
      [t]: parseFloat(a),
      [e]: parseFloat(s),
      [n]: parseFloat(r),
      alpha: o !== void 0 ? parseFloat(o) : 1
    };
  }, ID = (t) => sn(0, 255, t), yc = {
    ...ps,
    transform: (t) => Math.round(ID(t))
  }, Vi = {
    test: qh("rgb", "red"),
    parse: oS("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + yc.transform(t) + ", " + yc.transform(e) + ", " + yc.transform(n) + ", " + Js(Er.transform(i)) + ")"
  };
  function JD(t) {
    let e = "", n = "", i = "", a = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), a = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), a = t.substring(4, 5), e += e, n += n, i += i, a += a), {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(i, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1
    };
  }
  const Ff = {
    test: qh("#"),
    parse: JD,
    transform: Vi.transform
  }, Qr = (t) => ({
    test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`
  }), Pn = Qr("deg"), nn = Qr("%"), B = Qr("px"), WD = Qr("vh"), tN = Qr("vw"), Pg = {
    ...nn,
    parse: (t) => nn.parse(t) / 100,
    transform: (t) => nn.transform(t * 100)
  }, Ra = {
    test: qh("hsl", "hue"),
    parse: oS("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + nn.transform(Js(e)) + ", " + nn.transform(Js(n)) + ", " + Js(Er.transform(i)) + ")"
  }, Ct = {
    test: (t) => Vi.test(t) || Ff.test(t) || Ra.test(t),
    parse: (t) => Vi.test(t) ? Vi.parse(t) : Ra.test(t) ? Ra.parse(t) : Ff.parse(t),
    transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Vi.transform(t) : Ra.transform(t),
    getAnimatableNone: (t) => {
      const e = Ct.parse(t);
      return e.alpha = 0, Ct.transform(e);
    }
  }, eN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function nN(t) {
    var _a5, _b3;
    return isNaN(t) && typeof t == "string" && (((_a5 = t.match(Yh)) == null ? void 0 : _a5.length) || 0) + (((_b3 = t.match(eN)) == null ? void 0 : _b3.length) || 0) > 0;
  }
  const lS = "number", uS = "color", iN = "var", aN = "var(", Hg = "${}", sN = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function Ar(t) {
    const e = t.toString(), n = [], i = {
      color: [],
      number: [],
      var: []
    }, a = [];
    let s = 0;
    const o = e.replace(sN, (l) => (Ct.test(l) ? (i.color.push(s), a.push(uS), n.push(Ct.parse(l))) : l.startsWith(aN) ? (i.var.push(s), a.push(iN), n.push(l)) : (i.number.push(s), a.push(lS), n.push(parseFloat(l))), ++s, Hg)).split(Hg);
    return {
      values: n,
      split: o,
      indexes: i,
      types: a
    };
  }
  function cS(t) {
    return Ar(t).values;
  }
  function fS(t) {
    const { split: e, types: n } = Ar(t), i = e.length;
    return (a) => {
      let s = "";
      for (let r = 0; r < i; r++) if (s += e[r], a[r] !== void 0) {
        const o = n[r];
        o === lS ? s += Js(a[r]) : o === uS ? s += Ct.transform(a[r]) : s += a[r];
      }
      return s;
    };
  }
  const rN = (t) => typeof t == "number" ? 0 : Ct.test(t) ? Ct.getAnimatableNone(t) : t;
  function oN(t) {
    const e = cS(t);
    return fS(t)(e.map(rN));
  }
  const bi = {
    test: nN,
    parse: cS,
    createTransformer: fS,
    getAnimatableNone: oN
  };
  function vc(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
  }
  function lN({ hue: t, saturation: e, lightness: n, alpha: i }) {
    t /= 360, e /= 100, n /= 100;
    let a = 0, s = 0, r = 0;
    if (!e) a = s = r = n;
    else {
      const o = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - o;
      a = vc(l, o, t + 1 / 3), s = vc(l, o, t), r = vc(l, o, t - 1 / 3);
    }
    return {
      red: Math.round(a * 255),
      green: Math.round(s * 255),
      blue: Math.round(r * 255),
      alpha: i
    };
  }
  function _l(t, e) {
    return (n) => n > 0 ? e : t;
  }
  const xt = (t, e, n) => t + (e - t) * n, bc = (t, e, n) => {
    const i = t * t, a = n * (e * e - i) + i;
    return a < 0 ? 0 : Math.sqrt(a);
  }, uN = [
    Ff,
    Vi,
    Ra
  ], cN = (t) => uN.find((e) => e.test(t));
  function Gg(t) {
    const e = cN(t);
    if (yu(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return false;
    let n = e.parse(t);
    return e === Ra && (n = lN(n)), n;
  }
  const Yg = (t, e) => {
    const n = Gg(t), i = Gg(e);
    if (!n || !i) return _l(t, e);
    const a = {
      ...n
    };
    return (s) => (a.red = bc(n.red, i.red, s), a.green = bc(n.green, i.green, s), a.blue = bc(n.blue, i.blue, s), a.alpha = xt(n.alpha, i.alpha, s), Vi.transform(a));
  }, Qf = /* @__PURE__ */ new Set([
    "none",
    "hidden"
  ]);
  function fN(t, e) {
    return Qf.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
  }
  function dN(t, e) {
    return (n) => xt(t, e, n);
  }
  function Xh(t) {
    return typeof t == "number" ? dN : typeof t == "string" ? Gh(t) ? _l : Ct.test(t) ? Yg : pN : Array.isArray(t) ? dS : typeof t == "object" ? Ct.test(t) ? Yg : hN : _l;
  }
  function dS(t, e) {
    const n = [
      ...t
    ], i = n.length, a = t.map((s, r) => Xh(s)(s, e[r]));
    return (s) => {
      for (let r = 0; r < i; r++) n[r] = a[r](s);
      return n;
    };
  }
  function hN(t, e) {
    const n = {
      ...t,
      ...e
    }, i = {};
    for (const a in n) t[a] !== void 0 && e[a] !== void 0 && (i[a] = Xh(t[a])(t[a], e[a]));
    return (a) => {
      for (const s in i) n[s] = i[s](a);
      return n;
    };
  }
  function mN(t, e) {
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
  const pN = (t, e) => {
    const n = bi.createTransformer(e), i = Ar(t), a = Ar(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? Qf.has(t) && !a.values.length || Qf.has(e) && !i.values.length ? fN(t, e) : Xr(dS(mN(i, a), a.values), n) : (yu(true, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), _l(t, e));
  };
  function hS(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? xt(t, e, n) : Xh(t)(t, e);
  }
  const gN = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: (n = true) => ct.update(e, n),
      stop: () => vi(e),
      now: () => Ut.isProcessing ? Ut.timestamp : Zt.now()
    };
  }, mS = (t, e, n = 10) => {
    let i = "";
    const a = Math.max(Math.round(e / n), 2);
    for (let s = 0; s < a; s++) i += Math.round(t(s / (a - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${i.substring(0, i.length - 2)})`;
  }, Ll = 2e4;
  function Fh(t) {
    let e = 0;
    const n = 50;
    let i = t.next(e);
    for (; !i.done && e < Ll; ) e += n, i = t.next(e);
    return e >= Ll ? 1 / 0 : e;
  }
  function yN(t, e = 100, n) {
    const i = n({
      ...t,
      keyframes: [
        0,
        e
      ]
    }), a = Math.min(Fh(i), Ll);
    return {
      type: "keyframes",
      ease: (s) => i.next(a * s).value / e,
      duration: Re(a)
    };
  }
  const vN = 5;
  function pS(t, e, n) {
    const i = Math.max(e - vN, 0);
    return Q1(n - t(i), e - i);
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
  }, xc = 1e-3;
  function bN({ duration: t = bt.duration, bounce: e = bt.bounce, velocity: n = bt.velocity, mass: i = bt.mass }) {
    let a, s;
    yu(t <= je(bt.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let r = 1 - e;
    r = sn(bt.minDamping, bt.maxDamping, r), t = sn(bt.minDuration, bt.maxDuration, Re(t)), r < 1 ? (a = (u) => {
      const c = u * r, f = c * t, h = c - n, d = Kf(u, r), y = Math.exp(-f);
      return xc - h / d * y;
    }, s = (u) => {
      const f = u * r * t, h = f * n + n, d = Math.pow(r, 2) * Math.pow(u, 2) * t, y = Math.exp(-f), v = Kf(Math.pow(u, 2), r);
      return (-a(u) + xc > 0 ? -1 : 1) * ((h - d) * y) / v;
    }) : (a = (u) => {
      const c = Math.exp(-u * t), f = (u - n) * t + 1;
      return -xc + c * f;
    }, s = (u) => {
      const c = Math.exp(-u * t), f = (n - u) * (t * t);
      return c * f;
    });
    const o = 5 / t, l = SN(a, s, o);
    if (t = je(t), isNaN(l)) return {
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
  const xN = 12;
  function SN(t, e, n) {
    let i = n;
    for (let a = 1; a < xN; a++) i = i - t(i) / e(i);
    return i;
  }
  function Kf(t, e) {
    return t * Math.sqrt(1 - e * e);
  }
  const wN = [
    "duration",
    "bounce"
  ], TN = [
    "stiffness",
    "damping",
    "mass"
  ];
  function qg(t, e) {
    return e.some((n) => t[n] !== void 0);
  }
  function EN(t) {
    let e = {
      velocity: bt.velocity,
      stiffness: bt.stiffness,
      damping: bt.damping,
      mass: bt.mass,
      isResolvedFromDuration: false,
      ...t
    };
    if (!qg(t, TN) && qg(t, wN)) if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), a = i * i, s = 2 * sn(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
      e = {
        ...e,
        mass: bt.mass,
        stiffness: a,
        damping: s
      };
    } else {
      const n = bN(t);
      e = {
        ...e,
        ...n,
        mass: bt.mass
      }, e.isResolvedFromDuration = true;
    }
    return e;
  }
  function Vl(t = bt.visualDuration, e = bt.bounce) {
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
    }, { stiffness: l, damping: u, mass: c, duration: f, velocity: h, isResolvedFromDuration: d } = EN({
      ...n,
      velocity: -Re(n.velocity || 0)
    }), y = h || 0, v = u / (2 * Math.sqrt(l * c)), S = r - s, p = Re(Math.sqrt(l / c)), m = Math.abs(S) < 5;
    i || (i = m ? bt.restSpeed.granular : bt.restSpeed.default), a || (a = m ? bt.restDelta.granular : bt.restDelta.default);
    let g;
    if (v < 1) {
      const T = Kf(p, v);
      g = (A) => {
        const E = Math.exp(-v * p * A);
        return r - E * ((y + v * p * S) / T * Math.sin(T * A) + S * Math.cos(T * A));
      };
    } else if (v === 1) g = (T) => r - Math.exp(-p * T) * (S + (y + p * S) * T);
    else {
      const T = p * Math.sqrt(v * v - 1);
      g = (A) => {
        const E = Math.exp(-v * p * A), C = Math.min(T * A, 300);
        return r - E * ((y + v * p * S) * Math.sinh(C) + T * S * Math.cosh(C)) / T;
      };
    }
    const w = {
      calculatedDuration: d && f || null,
      next: (T) => {
        const A = g(T);
        if (d) o.done = T >= f;
        else {
          let E = T === 0 ? y : 0;
          v < 1 && (E = T === 0 ? je(y) : pS(g, T, A));
          const C = Math.abs(E) <= i, j = Math.abs(r - A) <= a;
          o.done = C && j;
        }
        return o.value = o.done ? r : A, o;
      },
      toString: () => {
        const T = Math.min(Fh(w), Ll), A = mS((E) => w.next(T * E).value, T, 30);
        return T + "ms " + A;
      },
      toTransition: () => {
      }
    };
    return w;
  }
  Vl.applyToOptions = (t) => {
    const e = yN(t, 100, Vl);
    return t.ease = e.ease, t.duration = je(e.duration), t.type = "keyframes", t;
  };
  function Zf({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: a = 10, bounceStiffness: s = 500, modifyTarget: r, min: o, max: l, restDelta: u = 0.5, restSpeed: c }) {
    const f = t[0], h = {
      done: false,
      value: f
    }, d = (C) => o !== void 0 && C < o || l !== void 0 && C > l, y = (C) => o === void 0 ? l : l === void 0 || Math.abs(o - C) < Math.abs(l - C) ? o : l;
    let v = n * e;
    const S = f + v, p = r === void 0 ? S : r(S);
    p !== S && (v = p - f);
    const m = (C) => -v * Math.exp(-C / i), g = (C) => p + m(C), w = (C) => {
      const j = m(C), z = g(C);
      h.done = Math.abs(j) <= u, h.value = h.done ? p : z;
    };
    let T, A;
    const E = (C) => {
      d(h.value) && (T = C, A = Vl({
        keyframes: [
          h.value,
          y(h.value)
        ],
        velocity: pS(g, C, h.value),
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
        return !A && T === void 0 && (j = true, w(C), E(C)), T !== void 0 && C >= T ? A.next(C - T) : (!j && w(C), h);
      }
    };
  }
  function AN(t, e, n) {
    const i = [], a = n || Nn.mix || hS, s = t.length - 1;
    for (let r = 0; r < s; r++) {
      let o = a(t[r], t[r + 1]);
      if (e) {
        const l = Array.isArray(e) ? e[r] || Ne : e;
        o = Xr(l, o);
      }
      i.push(o);
    }
    return i;
  }
  function CN(t, e, { clamp: n = true, ease: i, mixer: a } = {}) {
    const s = t.length;
    if (ns(s === e.length, "Both input and output ranges must be the same length", "range-length"), s === 1) return () => e[0];
    if (s === 2 && e[0] === e[1]) return () => e[1];
    const r = t[0] === t[1];
    t[0] > t[s - 1] && (t = [
      ...t
    ].reverse(), e = [
      ...e
    ].reverse());
    const o = AN(e, i, a), l = o.length, u = (c) => {
      if (r && c < t[0]) return e[0];
      let f = 0;
      if (l > 1) for (; f < t.length - 2 && !(c < t[f + 1]); f++) ;
      const h = Tr(t[f], t[f + 1], c);
      return o[f](h);
    };
    return n ? (c) => u(sn(t[0], t[s - 1], c)) : u;
  }
  function MN(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
      const a = Tr(0, e, i);
      t.push(xt(n, 1, a));
    }
  }
  function RN(t) {
    const e = [
      0
    ];
    return MN(e, t.length - 1), e;
  }
  function ON(t, e) {
    return t.map((n) => n * e);
  }
  function DN(t, e) {
    return t.map(() => e || nS).splice(0, t.length - 1);
  }
  function Ws({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
    const a = GD(i) ? i.map(Bg) : Bg(i), s = {
      done: false,
      value: e[0]
    }, r = ON(n && n.length === e.length ? n : RN(e), t), o = CN(r, e, {
      ease: Array.isArray(a) ? a : DN(e, a)
    });
    return {
      calculatedDuration: t,
      next: (l) => (s.value = o(l), s.done = l >= t, s)
    };
  }
  const NN = (t) => t !== null;
  function Qh(t, { repeat: e, repeatType: n = "loop" }, i, a = 1) {
    const s = t.filter(NN), o = a < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
    return !o || i === void 0 ? s[o] : i;
  }
  const jN = {
    decay: Zf,
    inertia: Zf,
    tween: Ws,
    keyframes: Ws,
    spring: Vl
  };
  function gS(t) {
    typeof t.type == "string" && (t.type = jN[t.type]);
  }
  class Kh {
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
  const zN = (t) => t / 100;
  class Zh extends Kh {
    constructor(e) {
      super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
        var _a5, _b3;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== Zt.now() && this.tick(Zt.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), (_b3 = (_a5 = this.options).onStop) == null ? void 0 : _b3.call(_a5));
      }, this.options = e, this.initAnimation(), this.play(), e.autoplay === false && this.pause();
    }
    initAnimation() {
      const { options: e } = this;
      gS(e);
      const { type: n = Ws, repeat: i = 0, repeatDelay: a = 0, repeatType: s, velocity: r = 0 } = e;
      let { keyframes: o } = e;
      const l = n || Ws;
      l !== Ws && typeof o[0] != "number" && (this.mixKeyframes = Xr(zN, hS(o[0], o[1])), o = [
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
      const { delay: u = 0, keyframes: c, repeat: f, repeatType: h, repeatDelay: d, type: y, onUpdate: v, finalKeyframe: S } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - a / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
      const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), m = this.playbackSpeed >= 0 ? p < 0 : p > a;
      this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = a);
      let g = this.currentTime, w = i;
      if (f) {
        const C = Math.min(this.currentTime, a) / o;
        let j = Math.floor(C), z = C % 1;
        !z && C >= 1 && (z = 1), z === 1 && j--, j = Math.min(j, f + 1), !!(j % 2) && (h === "reverse" ? (z = 1 - z, d && (z -= d / o)) : h === "mirror" && (w = r)), g = sn(0, 1, z) * o;
      }
      const T = m ? {
        done: false,
        value: c[0]
      } : w.next(g);
      s && (T.value = s(T.value));
      let { done: A } = T;
      !m && l !== null && (A = this.playbackSpeed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
      const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
      return E && y !== Zf && (T.value = Qh(c, this.options, S, this.speed)), v && v(T.value), E && this.finish(), T;
    }
    then(e, n) {
      return this.finished.then(e, n);
    }
    get duration() {
      return Re(this.calculatedDuration);
    }
    get iterationDuration() {
      const { delay: e = 0 } = this.options || {};
      return this.duration + Re(e);
    }
    get time() {
      return Re(this.currentTime);
    }
    set time(e) {
      var _a5;
      e = je(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), (_a5 = this.driver) == null ? void 0 : _a5.start(false);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      this.updateTime(Zt.now());
      const n = this.playbackSpeed !== e;
      this.playbackSpeed = e, n && (this.time = Re(this.currentTime));
    }
    play() {
      var _a5, _b3;
      if (this.isStopped) return;
      const { driver: e = gN, startTime: n } = this.options;
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
  function _N(t) {
    for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
  }
  const Bi = (t) => t * 180 / Math.PI, $f = (t) => {
    const e = Bi(Math.atan2(t[1], t[0]));
    return If(e);
  }, LN = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: $f,
    rotateZ: $f,
    skewX: (t) => Bi(Math.atan(t[1])),
    skewY: (t) => Bi(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
  }, If = (t) => (t = t % 360, t < 0 && (t += 360), t), Xg = $f, Fg = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Qg = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), VN = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Fg,
    scaleY: Qg,
    scale: (t) => (Fg(t) + Qg(t)) / 2,
    rotateX: (t) => If(Bi(Math.atan2(t[6], t[5]))),
    rotateY: (t) => If(Bi(Math.atan2(-t[2], t[0]))),
    rotateZ: Xg,
    rotate: Xg,
    skewX: (t) => Bi(Math.atan(t[4])),
    skewY: (t) => Bi(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
  };
  function Jf(t) {
    return t.includes("scale") ? 1 : 0;
  }
  function Wf(t, e) {
    if (!t || t === "none") return Jf(e);
    const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let i, a;
    if (n) i = VN, a = n;
    else {
      const o = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      i = LN, a = o;
    }
    if (!a) return Jf(e);
    const s = i[e], r = a[1].split(",").map(kN);
    return typeof s == "function" ? s(r) : r[s];
  }
  const BN = (t, e) => {
    const { transform: n = "none" } = getComputedStyle(t);
    return Wf(n, e);
  };
  function kN(t) {
    return parseFloat(t.trim());
  }
  const gs = [
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
  ], ys = new Set(gs), Kg = (t) => t === ps || t === B, UN = /* @__PURE__ */ new Set([
    "x",
    "y",
    "z"
  ]), PN = gs.filter((t) => !UN.has(t));
  function HN(t) {
    const e = [];
    return PN.forEach((n) => {
      const i = t.getValue(n);
      i !== void 0 && (e.push([
        n,
        i.get()
      ]), i.set(n.startsWith("scale") ? 1 : 0));
    }), e;
  }
  const Wn = {
    width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, { top: e }) => parseFloat(e),
    left: (t, { left: e }) => parseFloat(e),
    bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
    right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
    x: (t, { transform: e }) => Wf(e, "x"),
    y: (t, { transform: e }) => Wf(e, "y")
  };
  Wn.translateX = Wn.x;
  Wn.translateY = Wn.y;
  const Yi = /* @__PURE__ */ new Set();
  let td = false, ed = false, nd = false;
  function yS() {
    if (ed) {
      const t = Array.from(Yi).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
      e.forEach((i) => {
        const a = HN(i);
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
    ed = false, td = false, Yi.forEach((t) => t.complete(nd)), Yi.clear();
  }
  function vS() {
    Yi.forEach((t) => {
      t.readKeyframes(), t.needsMeasurement && (ed = true);
    });
  }
  function GN() {
    nd = true, vS(), yS(), nd = false;
  }
  class $h {
    constructor(e, n, i, a, s, r = false) {
      this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [
        ...e
      ], this.onComplete = n, this.name = i, this.motionValue = a, this.element = s, this.isAsync = r;
    }
    scheduleResolve() {
      this.state = "scheduled", this.isAsync ? (Yi.add(this), td || (td = true, ct.read(vS), ct.resolveKeyframes(yS))) : (this.readKeyframes(), this.complete());
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
      _N(e);
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
      this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Yi.delete(this);
    }
    cancel() {
      this.state === "scheduled" && (Yi.delete(this), this.state = "pending");
    }
    resume() {
      this.state === "pending" && this.scheduleResolve();
    }
  }
  const YN = (t) => t.startsWith("--");
  function qN(t, e, n) {
    YN(e) ? t.style.setProperty(e, n) : t.style[e] = n;
  }
  const XN = kh(() => window.ScrollTimeline !== void 0), FN = {};
  function QN(t, e) {
    const n = kh(t);
    return () => FN[e] ?? n();
  }
  const bS = QN(() => {
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
  }, "linearEasing"), Ls = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, Zg = {
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
  function xS(t, e) {
    if (t) return typeof t == "function" ? bS() ? mS(t, e) : "ease-out" : iS(t) ? Ls(t) : Array.isArray(t) ? t.map((n) => xS(n, e) || Zg.easeOut) : Zg[t];
  }
  function KN(t, e, n, { delay: i = 0, duration: a = 300, repeat: s = 0, repeatType: r = "loop", ease: o = "easeOut", times: l } = {}, u = void 0) {
    const c = {
      [e]: n
    };
    l && (c.offset = l);
    const f = xS(o, a);
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
  function SS(t) {
    return typeof t == "function" && "applyToOptions" in t;
  }
  function ZN({ type: t, ...e }) {
    return SS(t) && bS() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
  }
  class wS extends Kh {
    constructor(e) {
      if (super(), this.finishedTime = null, this.isStopped = false, this.manualStartTime = null, !e) return;
      const { element: n, name: i, keyframes: a, pseudoElement: s, allowFlatten: r = false, finalKeyframe: o, onComplete: l } = e;
      this.isPseudoElement = !!s, this.allowFlatten = r, this.options = e, ns(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
      const u = ZN(e);
      this.animation = KN(n, i, a, u, s), u.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
        if (this.finishedTime = this.time, !s) {
          const c = Qh(a, this.options, o, this.speed);
          this.updateMotionValue ? this.updateMotionValue(c) : qN(n, i, c), this.animation.cancel();
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
      return Re(Number(e));
    }
    get iterationDuration() {
      const { delay: e = 0 } = this.options || {};
      return this.duration + Re(e);
    }
    get time() {
      return Re(Number(this.animation.currentTime) || 0);
    }
    set time(e) {
      this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = je(e);
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
      })), this.animation.onfinish = null, e && XN() ? (this.animation.timeline = e, Ne) : n(this);
    }
  }
  const TS = {
    anticipate: W1,
    backInOut: J1,
    circInOut: eS
  };
  function $N(t) {
    return t in TS;
  }
  function IN(t) {
    typeof t.ease == "string" && $N(t.ease) && (t.ease = TS[t.ease]);
  }
  const Sc = 10;
  class JN extends wS {
    constructor(e) {
      IN(e), gS(e), super(e), e.startTime !== void 0 && (this.startTime = e.startTime), this.options = e;
    }
    updateMotionValue(e) {
      const { motionValue: n, onUpdate: i, onComplete: a, element: s, ...r } = this.options;
      if (!n) return;
      if (e !== void 0) {
        n.set(e);
        return;
      }
      const o = new Zh({
        ...r,
        autoplay: false
      }), l = Math.max(Sc, Zt.now() - this.startTime), u = sn(0, Sc, l - Sc);
      n.setWithVelocity(o.sample(Math.max(0, l - u)).value, o.sample(l).value, u), o.stop();
    }
  }
  const $g = (t, e) => e === "zIndex" ? false : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (bi.test(t) || t === "0") && !t.startsWith("url("));
  function WN(t) {
    const e = t[0];
    if (t.length === 1) return true;
    for (let n = 0; n < t.length; n++) if (t[n] !== e) return true;
  }
  function t5(t, e, n, i) {
    const a = t[0];
    if (a === null) return false;
    if (e === "display" || e === "visibility") return true;
    const s = t[t.length - 1], r = $g(a, e), o = $g(s, e);
    return yu(r === o, `You are trying to animate ${e} from "${a}" to "${s}". "${r ? s : a}" is not an animatable value.`, "value-not-animatable"), !r || !o ? false : WN(t) || (n === "spring" || SS(n)) && i;
  }
  function id(t) {
    t.duration = 0, t.type = "keyframes";
  }
  const e5 = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
  ]), n5 = kh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  function i5(t) {
    var _a5;
    const { motionValue: e, name: n, repeatDelay: i, repeatType: a, damping: s, type: r } = t;
    if (!(((_a5 = e == null ? void 0 : e.owner) == null ? void 0 : _a5.current) instanceof HTMLElement)) return false;
    const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
    return n5() && n && e5.has(n) && (n !== "transform" || !u) && !l && !i && a !== "mirror" && s !== 0 && r !== "inertia";
  }
  const a5 = 40;
  class s5 extends Kh {
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
      }, d = (c == null ? void 0 : c.KeyframeResolver) || $h;
      this.keyframeResolver = new d(o, (y, v, S) => this.onKeyframesResolved(y, v, h, !S), l, u, c), (_a5 = this.keyframeResolver) == null ? void 0 : _a5.scheduleResolve();
    }
    onKeyframesResolved(e, n, i, a) {
      var _a5, _b3;
      this.keyframeResolver = void 0;
      const { name: s, type: r, velocity: o, delay: l, isHandoff: u, onUpdate: c } = i;
      this.resolvedAt = Zt.now(), t5(e, s, r, o) || ((Nn.instantAnimations || !l) && (c == null ? void 0 : c(Qh(e, i, n))), e[0] = e[e.length - 1], id(i), i.repeat = 0);
      const h = {
        startTime: a ? this.resolvedAt ? this.resolvedAt - this.createdAt > a5 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
        finalKeyframe: n,
        ...i,
        keyframes: e
      }, d = !u && i5(h), y = (_b3 = (_a5 = h.motionValue) == null ? void 0 : _a5.owner) == null ? void 0 : _b3.current, v = d ? new JN({
        ...h,
        element: y
      }) : new Zh(h);
      v.finished.then(() => {
        this.notifyFinished();
      }).catch(Ne), this.pendingTimeline && (this.stopTimeline = v.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = v;
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
      return this._animation || ((_a5 = this.keyframeResolver) == null ? void 0 : _a5.resume(), GN()), this._animation;
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
  function ES(t, e, n, i = 0, a = 1) {
    const s = Array.from(t).sort((u, c) => u.sortNodePosition(c)).indexOf(e), r = t.size, o = (r - 1) * i;
    return typeof n == "function" ? n(s, r) : a === 1 ? s * i : o - s * i;
  }
  const r5 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function o5(t) {
    const e = r5.exec(t);
    if (!e) return [
      ,
    ];
    const [, n, i, a] = e;
    return [
      `--${n ?? i}`,
      a
    ];
  }
  const l5 = 4;
  function AS(t, e, n = 1) {
    ns(n <= l5, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [i, a] = o5(t);
    if (!i) return;
    const s = window.getComputedStyle(e).getPropertyValue(i);
    if (s) {
      const r = s.trim();
      return q1(r) ? parseFloat(r) : r;
    }
    return Gh(a) ? AS(a, e, n + 1) : a;
  }
  const u5 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }, c5 = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }), f5 = {
    type: "keyframes",
    duration: 0.8
  }, d5 = {
    type: "keyframes",
    ease: [
      0.25,
      0.1,
      0.35,
      1
    ],
    duration: 0.3
  }, h5 = (t, { keyframes: e }) => e.length > 2 ? f5 : ys.has(t) ? t.startsWith("scale") ? c5(e[1]) : u5 : d5, m5 = (t) => t !== null;
  function p5(t, { repeat: e, repeatType: n = "loop" }, i) {
    const a = t.filter(m5), s = e && n !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !s || i === void 0 ? a[s] : i;
  }
  function CS(t, e) {
    if ((t == null ? void 0 : t.inherit) && e) {
      const { inherit: n, ...i } = t;
      return {
        ...e,
        ...i
      };
    }
    return t;
  }
  function Ih(t, e) {
    const n = (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
    return n !== t ? CS(n, t) : n;
  }
  function g5({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: a, repeat: s, repeatType: r, repeatDelay: o, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length;
  }
  const Jh = (t, e, n, i = {}, a, s) => (r) => {
    const o = Ih(i, t) || {}, l = o.delay || i.delay || 0;
    let { elapsed: u = 0 } = i;
    u = u - je(l);
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
    g5(o) || Object.assign(c, h5(t, c)), c.duration && (c.duration = je(c.duration)), c.repeatDelay && (c.repeatDelay = je(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = false;
    if ((c.type === false || c.duration === 0 && !c.repeatDelay) && (id(c), c.delay === 0 && (f = true)), (Nn.instantAnimations || Nn.skipAnimations || (a == null ? void 0 : a.shouldSkipAnimations)) && (f = true, id(c), c.delay = 0), c.allowFlatten = !o.type && !o.ease, f && !s && e.get() !== void 0) {
      const h = p5(c.keyframes, o);
      if (h !== void 0) {
        ct.update(() => {
          c.onUpdate(h), c.onComplete();
        });
        return;
      }
    }
    return o.isSync ? new Zh(c) : new s5(c);
  };
  function Ig(t) {
    const e = [
      {},
      {}
    ];
    return t == null ? void 0 : t.values.forEach((n, i) => {
      e[0][i] = n.get(), e[1][i] = n.getVelocity();
    }), e;
  }
  function Wh(t, e, n, i) {
    if (typeof e == "function") {
      const [a, s] = Ig(i);
      e = e(n !== void 0 ? n : t.custom, a, s);
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
      const [a, s] = Ig(i);
      e = e(n !== void 0 ? n : t.custom, a, s);
    }
    return e;
  }
  function Ga(t, e, n) {
    const i = t.getProps();
    return Wh(i, e, n !== void 0 ? n : i.custom, t);
  }
  const MS = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...gs
  ]), Jg = 30, y5 = (t) => !isNaN(parseFloat(t));
  class v5 {
    constructor(e, n = {}) {
      this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
        var _a5;
        const a = Zt.now();
        if (this.updatedAt !== a && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && ((_a5 = this.events.change) == null ? void 0 : _a5.notify(this.current), this.dependents)) for (const s of this.dependents) s.dirty();
      }, this.hasAnimated = false, this.setCurrent(e), this.owner = n.owner;
    }
    setCurrent(e) {
      this.current = e, this.updatedAt = Zt.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = y5(this.current));
    }
    setPrevFrameValue(e = this.current) {
      this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, n) {
      this.events[e] || (this.events[e] = new Uh());
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
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Jg) return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, Jg);
      return Q1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  function is(t, e) {
    return new v5(t, e);
  }
  const ad = (t) => Array.isArray(t);
  function b5(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, is(n));
  }
  function x5(t) {
    return ad(t) ? t[t.length - 1] || 0 : t;
  }
  function S5(t, e) {
    const n = Ga(t, e);
    let { transitionEnd: i = {}, transition: a = {}, ...s } = n || {};
    s = {
      ...s,
      ...i
    };
    for (const r in s) {
      const o = x5(s[r]);
      b5(t, r, o);
    }
  }
  const Xt = (t) => !!(t && t.getVelocity);
  function w5(t) {
    return !!(Xt(t) && t.add);
  }
  function sd(t, e) {
    const n = t.getValue("willChange");
    if (w5(n)) return n.add(e);
    if (!n && Nn.WillChange) {
      const i = new Nn.WillChange("auto");
      t.addValue("willChange", i), i.add(e);
    }
  }
  function tm(t) {
    return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
  }
  const T5 = "framerAppearId", RS = "data-" + tm(T5);
  function OS(t) {
    return t.props[RS];
  }
  function E5({ protectedKeys: t, needsAnimating: e }, n) {
    const i = t.hasOwnProperty(n) && e[n] !== true;
    return e[n] = false, i;
  }
  function DS(t, e, { delay: n = 0, transitionOverride: i, type: a } = {}) {
    let { transition: s, transitionEnd: r, ...o } = e;
    const l = t.getDefaultTransition();
    s = s ? CS(s, l) : l;
    const u = s == null ? void 0 : s.reduceMotion;
    i && (s = i);
    const c = [], f = a && t.animationState && t.animationState.getState()[a];
    for (const h in o) {
      const d = t.getValue(h, t.latestValues[h] ?? null), y = o[h];
      if (y === void 0 || f && E5(f, h)) continue;
      const v = {
        delay: n,
        ...Ih(s || {}, h)
      }, S = d.get();
      if (S !== void 0 && !d.isAnimating && !Array.isArray(y) && y === S && !v.velocity) continue;
      let p = false;
      if (window.MotionHandoffAnimation) {
        const w = OS(t);
        if (w) {
          const T = window.MotionHandoffAnimation(w, h, ct);
          T !== null && (v.startTime = T, p = true);
        }
      }
      sd(t, h);
      const m = u ?? t.shouldReduceMotion;
      d.start(Jh(h, d, y, m && MS.has(h) ? {
        type: false
      } : v, t, p));
      const g = d.animation;
      g && c.push(g);
    }
    if (r) {
      const h = () => ct.update(() => {
        r && S5(t, r);
      });
      c.length ? Promise.all(c).then(h) : h();
    }
    return c;
  }
  function rd(t, e, n = {}) {
    var _a5;
    const i = Ga(t, e, n.type === "exit" ? (_a5 = t.presenceContext) == null ? void 0 : _a5.custom : void 0);
    let { transition: a = t.getDefaultTransition() || {} } = i || {};
    n.transitionOverride && (a = n.transitionOverride);
    const s = i ? () => Promise.all(DS(t, i, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (l = 0) => {
      const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = a;
      return A5(t, e, l, u, c, f, n);
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
  function A5(t, e, n = 0, i = 0, a = 0, s = 1, r) {
    const o = [];
    for (const l of t.variantChildren) l.notify("AnimationStart", e), o.push(rd(l, e, {
      ...r,
      delay: n + (typeof i == "function" ? 0 : i) + ES(t.variantChildren, l, i, a, s)
    }).then(() => l.notify("AnimationComplete", e)));
    return Promise.all(o);
  }
  function C5(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
      const a = e.map((s) => rd(t, s, n));
      i = Promise.all(a);
    } else if (typeof e == "string") i = rd(t, e, n);
    else {
      const a = typeof e == "function" ? Ga(t, e, n.custom) : e;
      i = Promise.all(DS(t, a, n));
    }
    return i.then(() => {
      t.notify("AnimationComplete", e);
    });
  }
  const M5 = {
    test: (t) => t === "auto",
    parse: (t) => t
  }, NS = (t) => (e) => e.test(t), jS = [
    ps,
    B,
    nn,
    Pn,
    tN,
    WD,
    M5
  ], Wg = (t) => jS.find(NS(t));
  function R5(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || F1(t) : true;
  }
  const O5 = /* @__PURE__ */ new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
  ]);
  function D5(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [i] = n.match(Yh) || [];
    if (!i) return t;
    const a = n.replace(i, "");
    let s = O5.has(e) ? 1 : 0;
    return i !== n && (s *= 100), e + "(" + s + a + ")";
  }
  const N5 = /\b([a-z-]*)\(.*?\)/gu, od = {
    ...bi,
    getAnimatableNone: (t) => {
      const e = t.match(N5);
      return e ? e.map(D5).join(" ") : t;
    }
  }, ty = {
    ...ps,
    transform: Math.round
  }, j5 = {
    rotate: Pn,
    rotateX: Pn,
    rotateY: Pn,
    rotateZ: Pn,
    scale: xo,
    scaleX: xo,
    scaleY: xo,
    scaleZ: xo,
    skew: Pn,
    skewX: Pn,
    skewY: Pn,
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
    originX: Pg,
    originY: Pg,
    originZ: B
  }, em = {
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
    ...j5,
    zIndex: ty,
    fillOpacity: Er,
    strokeOpacity: Er,
    numOctaves: ty
  }, z5 = {
    ...em,
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
    filter: od,
    WebkitFilter: od
  }, zS = (t) => z5[t];
  function _S(t, e) {
    let n = zS(t);
    return n !== od && (n = bi), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
  }
  const _5 = /* @__PURE__ */ new Set([
    "auto",
    "none",
    "0"
  ]);
  function L5(t, e, n) {
    let i = 0, a;
    for (; i < t.length && !a; ) {
      const s = t[i];
      typeof s == "string" && !_5.has(s) && Ar(s).values.length && (a = t[i]), i++;
    }
    if (a && n) for (const s of e) t[s] = _S(n, a);
  }
  class V5 extends $h {
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
          const h = AS(f, n.current);
          h !== void 0 && (e[c] = h), c === e.length - 1 && (this.finalKeyframe = f);
        }
      }
      if (this.resolveNoneKeyframes(), !MS.has(i) || e.length !== 2) return;
      const [a, s] = e, r = Wg(a), o = Wg(s), l = Ug(a), u = Ug(s);
      if (l !== u && Wn[i]) {
        this.needsMeasurement = true;
        return;
      }
      if (r !== o) if (Kg(r) && Kg(o)) for (let c = 0; c < e.length; c++) {
        const f = e[c];
        typeof f == "string" && (e[c] = parseFloat(f));
      }
      else Wn[i] && (this.needsMeasurement = true);
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: e, name: n } = this, i = [];
      for (let a = 0; a < e.length; a++) (e[a] === null || R5(e[a])) && i.push(a);
      i.length && L5(e, i, n);
    }
    measureInitialState() {
      const { element: e, unresolvedKeyframes: n, name: i } = this;
      if (!e || !e.current) return;
      i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Wn[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
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
      i[s] = Wn[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), ((_a5 = this.removedTransforms) == null ? void 0 : _a5.length) && this.removedTransforms.forEach(([o, l]) => {
        e.getValue(o).set(l);
      }), this.resolveNoneKeyframes();
    }
  }
  const B5 = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
  ]);
  function LS(t, e, n) {
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
  const VS = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
  function k5(t) {
    return X1(t) && "offsetHeight" in t;
  }
  const { schedule: nm, cancel: P4 } = aS(queueMicrotask, false), Pe = {
    x: false,
    y: false
  };
  function BS() {
    return Pe.x || Pe.y;
  }
  function U5(t) {
    return t === "x" || t === "y" ? Pe[t] ? null : (Pe[t] = true, () => {
      Pe[t] = false;
    }) : Pe.x || Pe.y ? null : (Pe.x = Pe.y = true, () => {
      Pe.x = Pe.y = false;
    });
  }
  function kS(t, e) {
    const n = LS(t), i = new AbortController(), a = {
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
  function P5(t) {
    return !(t.pointerType === "touch" || BS());
  }
  function H5(t, e, n = {}) {
    const [i, a, s] = kS(t, n);
    return i.forEach((r) => {
      let o = false, l = false, u;
      const c = () => {
        r.removeEventListener("pointerleave", y);
      }, f = (S) => {
        u && (u(S), u = void 0), c();
      }, h = (S) => {
        o = false, window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), l && (l = false, f(S));
      }, d = () => {
        o = true, window.addEventListener("pointerup", h, a), window.addEventListener("pointercancel", h, a);
      }, y = (S) => {
        if (S.pointerType !== "touch") {
          if (o) {
            l = true;
            return;
          }
          f(S);
        }
      }, v = (S) => {
        if (!P5(S)) return;
        l = false;
        const p = e(r, S);
        typeof p == "function" && (u = p, r.addEventListener("pointerleave", y, a));
      };
      r.addEventListener("pointerenter", v, a), r.addEventListener("pointerdown", d, a);
    }), s;
  }
  const US = (t, e) => e ? t === e ? true : US(t, e.parentElement) : false, im = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false, G5 = /* @__PURE__ */ new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
  ]);
  function Y5(t) {
    return G5.has(t.tagName) || t.isContentEditable === true;
  }
  const q5 = /* @__PURE__ */ new Set([
    "INPUT",
    "SELECT",
    "TEXTAREA"
  ]);
  function X5(t) {
    return q5.has(t.tagName) || t.isContentEditable === true;
  }
  const Yo = /* @__PURE__ */ new WeakSet();
  function ey(t) {
    return (e) => {
      e.key === "Enter" && t(e);
    };
  }
  function wc(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
      isPrimary: true,
      bubbles: true
    }));
  }
  const F5 = (t, e) => {
    const n = t.currentTarget;
    if (!n) return;
    const i = ey(() => {
      if (Yo.has(n)) return;
      wc(n, "down");
      const a = ey(() => {
        wc(n, "up");
      }), s = () => wc(n, "cancel");
      n.addEventListener("keyup", a, e), n.addEventListener("blur", s, e);
    });
    n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
  };
  function ny(t) {
    return im(t) && !BS();
  }
  const iy = /* @__PURE__ */ new WeakSet();
  function Q5(t, e, n = {}) {
    const [i, a, s] = kS(t, n), r = (o) => {
      const l = o.currentTarget;
      if (!ny(o) || iy.has(o)) return;
      Yo.add(l), n.stopPropagation && iy.add(o);
      const u = e(l, o), c = (d, y) => {
        window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", h), Yo.has(l) && Yo.delete(l), ny(d) && typeof u == "function" && u(d, {
          success: y
        });
      }, f = (d) => {
        c(d, l === window || l === document || n.useGlobalTarget || US(l, d.target));
      }, h = (d) => {
        c(d, false);
      };
      window.addEventListener("pointerup", f, a), window.addEventListener("pointercancel", h, a);
    };
    return i.forEach((o) => {
      (n.useGlobalTarget ? window : o).addEventListener("pointerdown", r, a), k5(o) && (o.addEventListener("focus", (u) => F5(u, a)), !Y5(o) && !o.hasAttribute("tabindex") && (o.tabIndex = 0));
    }), s;
  }
  function am(t) {
    return X1(t) && "ownerSVGElement" in t;
  }
  const qo = /* @__PURE__ */ new WeakMap();
  let Xo;
  const PS = (t, e, n) => (i, a) => a && a[0] ? a[0][t + "Size"] : am(i) && "getBBox" in i ? i.getBBox()[e] : i[n], K5 = PS("inline", "width", "offsetWidth"), Z5 = PS("block", "height", "offsetHeight");
  function $5({ target: t, borderBoxSize: e }) {
    var _a5;
    (_a5 = qo.get(t)) == null ? void 0 : _a5.forEach((n) => {
      n(t, {
        get width() {
          return K5(t, e);
        },
        get height() {
          return Z5(t, e);
        }
      });
    });
  }
  function I5(t) {
    t.forEach($5);
  }
  function J5() {
    typeof ResizeObserver > "u" || (Xo = new ResizeObserver(I5));
  }
  function W5(t, e) {
    Xo || J5();
    const n = LS(t);
    return n.forEach((i) => {
      let a = qo.get(i);
      a || (a = /* @__PURE__ */ new Set(), qo.set(i, a)), a.add(e), Xo == null ? void 0 : Xo.observe(i);
    }), () => {
      n.forEach((i) => {
        const a = qo.get(i);
        a == null ? void 0 : a.delete(e), (a == null ? void 0 : a.size) || (Xo == null ? void 0 : Xo.unobserve(i));
      });
    };
  }
  const Fo = /* @__PURE__ */ new Set();
  let Oa;
  function tj() {
    Oa = () => {
      const t = {
        get width() {
          return window.innerWidth;
        },
        get height() {
          return window.innerHeight;
        }
      };
      Fo.forEach((e) => e(t));
    }, window.addEventListener("resize", Oa);
  }
  function ej(t) {
    return Fo.add(t), Oa || tj(), () => {
      Fo.delete(t), !Fo.size && typeof Oa == "function" && (window.removeEventListener("resize", Oa), Oa = void 0);
    };
  }
  function ay(t, e) {
    return typeof t == "function" ? ej(t) : W5(t, e);
  }
  function nj(t) {
    return am(t) && t.tagName === "svg";
  }
  const ij = [
    ...jS,
    Ct,
    bi
  ], aj = (t) => ij.find(NS(t)), sy = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }), Da = () => ({
    x: sy(),
    y: sy()
  }), ry = () => ({
    min: 0,
    max: 0
  }), jt = () => ({
    x: ry(),
    y: ry()
  }), sj = /* @__PURE__ */ new WeakMap();
  function vu(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function";
  }
  function Cr(t) {
    return typeof t == "string" || Array.isArray(t);
  }
  const sm = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ], rm = [
    "initial",
    ...sm
  ];
  function bu(t) {
    return vu(t.animate) || rm.some((e) => Cr(t[e]));
  }
  function HS(t) {
    return !!(bu(t) || t.variants);
  }
  function rj(t, e, n) {
    for (const i in e) {
      const a = e[i], s = n[i];
      if (Xt(a)) t.addValue(i, a);
      else if (Xt(s)) t.addValue(i, is(a, {
        owner: t
      }));
      else if (s !== a) if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === true ? r.jump(a) : r.hasAnimated || r.set(a);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, is(r !== void 0 ? r : a, {
          owner: t
        }));
      }
    }
    for (const i in n) e[i] === void 0 && t.removeValue(i);
    return e;
  }
  const ld = {
    current: null
  }, GS = {
    current: false
  }, oj = typeof window < "u";
  function lj() {
    if (GS.current = true, !!oj) if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => ld.current = t.matches;
      t.addEventListener("change", e), e();
    } else ld.current = false;
  }
  const oy = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ];
  let Bl = {};
  function YS(t) {
    Bl = t;
  }
  function uj() {
    return Bl;
  }
  class cj {
    scrapeMotionValuesFromProps(e, n, i) {
      return {};
    }
    constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: a, skipAnimations: s, blockInitialAnimation: r, visualState: o }, l = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.shouldSkipAnimations = false, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = $h, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = false, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
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
      } : {}, this.renderState = c, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = a, this.skipAnimationsConfig = s, this.options = l, this.blockInitialAnimation = !!r, this.isControllingVariants = bu(n), this.isVariantNode = HS(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
      const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
      for (const d in h) {
        const y = h[d];
        u[d] !== void 0 && Xt(y) && y.set(u[d]);
      }
    }
    mount(e) {
      var _a5, _b3;
      if (this.hasBeenMounted) for (const n in this.initialValues) (_a5 = this.values.get(n)) == null ? void 0 : _a5.jump(this.initialValues[n]), this.latestValues[n] = this.initialValues[n];
      this.current = e, sj.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = false : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = true : (GS.current || lj(), this.shouldReduceMotion = ld.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? false, (_b3 = this.parent) == null ? void 0 : _b3.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = true;
    }
    unmount() {
      var _a5;
      this.projection && this.projection.unmount(), vi(this.notifyUpdate), vi(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (_a5 = this.parent) == null ? void 0 : _a5.removeChild(this);
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
      if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), n.accelerate && B5.has(e) && this.current instanceof HTMLElement) {
        const { factory: r, keyframes: o, times: l, ease: u, duration: c } = n.accelerate, f = new wS({
          element: this.current,
          name: e,
          keyframes: o,
          times: l,
          ease: u,
          duration: je(c)
        }), h = r(f);
        this.valueSubscriptions.set(e, () => {
          h(), f.cancel();
        });
        return;
      }
      const i = ys.has(e);
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
      for (e in Bl) {
        const n = Bl[e];
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
      for (let i = 0; i < oy.length; i++) {
        const a = oy[i];
        this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
        const s = "on" + a, r = e[s];
        r && (this.propEventSubscriptions[a] = this.on(a, r));
      }
      this.prevMotionValues = rj(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
      return i === void 0 && n !== void 0 && (i = is(n === null ? void 0 : n, {
        owner: this
      }), this.addValue(e, i)), i;
    }
    readValue(e, n) {
      let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
      return i != null && (typeof i == "string" && (q1(i) || F1(i)) ? i = parseFloat(i) : !aj(i) && bi.test(n) && (i = _S(e, n)), this.setBaseTarget(e, Xt(i) ? i.get() : i)), Xt(i) ? i.get() : i;
    }
    setBaseTarget(e, n) {
      this.baseTarget[e] = n;
    }
    getBaseTarget(e) {
      var _a5;
      const { initial: n } = this.props;
      let i;
      if (typeof n == "string" || typeof n == "object") {
        const s = Wh(this.props, n, (_a5 = this.presenceContext) == null ? void 0 : _a5.custom);
        s && (i = s[e]);
      }
      if (n && i !== void 0) return i;
      const a = this.getBaseTargetFromProps(this.props, e);
      return a !== void 0 && !Xt(a) ? a : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
    }
    on(e, n) {
      return this.events[e] || (this.events[e] = new Uh()), this.events[e].add(n);
    }
    notify(e, ...n) {
      this.events[e] && this.events[e].notify(...n);
    }
    scheduleRenderMicrotask() {
      nm.render(this.render);
    }
  }
  class qS extends cj {
    constructor() {
      super(...arguments), this.KeyframeResolver = V5;
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
  function XS({ top: t, left: e, right: n, bottom: i }) {
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
  function fj({ x: t, y: e }) {
    return {
      top: e.min,
      right: t.max,
      bottom: e.max,
      left: t.min
    };
  }
  function dj(t, e) {
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
  function Tc(t) {
    return t === void 0 || t === 1;
  }
  function ud({ scale: t, scaleX: e, scaleY: n }) {
    return !Tc(t) || !Tc(e) || !Tc(n);
  }
  function Li(t) {
    return ud(t) || FS(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
  }
  function FS(t) {
    return ly(t.x) || ly(t.y);
  }
  function ly(t) {
    return t && t !== "0%";
  }
  function kl(t, e, n) {
    const i = t - n, a = e * i;
    return n + a;
  }
  function uy(t, e, n, i, a) {
    return a !== void 0 && (t = kl(t, a, i)), kl(t, n, i) + e;
  }
  function cd(t, e = 0, n = 1, i, a) {
    t.min = uy(t.min, e, n, i, a), t.max = uy(t.max, e, n, i, a);
  }
  function QS(t, { x: e, y: n }) {
    cd(t.x, e.translate, e.scale, e.originPoint), cd(t.y, n.translate, n.scale, n.originPoint);
  }
  const cy = 0.999999999999, fy = 1.0000000000001;
  function hj(t, e, n, i = false) {
    const a = n.length;
    if (!a) return;
    e.x = e.y = 1;
    let s, r;
    for (let o = 0; o < a; o++) {
      s = n[o], r = s.projectionDelta;
      const { visualElement: l } = s.options;
      l && l.props.style && l.props.style.display === "contents" || (i && s.options.layoutScroll && s.scroll && s !== s.root && ja(t, {
        x: -s.scroll.offset.x,
        y: -s.scroll.offset.y
      }), r && (e.x *= r.x.scale, e.y *= r.y.scale, QS(t, r)), i && Li(s.latestValues) && ja(t, s.latestValues));
    }
    e.x < fy && e.x > cy && (e.x = 1), e.y < fy && e.y > cy && (e.y = 1);
  }
  function Na(t, e) {
    t.min = t.min + e, t.max = t.max + e;
  }
  function dy(t, e, n, i, a = 0.5) {
    const s = xt(t.min, t.max, a);
    cd(t, e, n, s, i);
  }
  function ja(t, e) {
    dy(t.x, e.x, e.scaleX, e.scale, e.originX), dy(t.y, e.y, e.scaleY, e.scale, e.originY);
  }
  function KS(t, e) {
    return XS(dj(t.getBoundingClientRect(), e));
  }
  function mj(t, e, n) {
    const i = KS(t, n), { scroll: a } = e;
    return a && (Na(i.x, a.offset.x), Na(i.y, a.offset.y)), i;
  }
  const pj = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, gj = gs.length;
  function yj(t, e, n) {
    let i = "", a = true;
    for (let s = 0; s < gj; s++) {
      const r = gs[s], o = t[r];
      if (o === void 0) continue;
      let l = true;
      if (typeof o == "number") l = o === (r.startsWith("scale") ? 1 : 0);
      else {
        const u = parseFloat(o);
        l = r.startsWith("scale") ? u === 1 : u === 0;
      }
      if (!l || n) {
        const u = VS(o, em[r]);
        if (!l) {
          a = false;
          const c = pj[r] || r;
          i += `${c}(${u}) `;
        }
        n && (e[r] = u);
      }
    }
    return i = i.trim(), n ? i = n(e, a ? "" : i) : a && (i = "none"), i;
  }
  function om(t, e, n) {
    const { style: i, vars: a, transformOrigin: s } = t;
    let r = false, o = false;
    for (const l in e) {
      const u = e[l];
      if (ys.has(l)) {
        r = true;
        continue;
      } else if (rS(l)) {
        a[l] = u;
        continue;
      } else {
        const c = VS(u, em[l]);
        l.startsWith("origin") ? (o = true, s[l] = c) : i[l] = c;
      }
    }
    if (e.transform || (r || n ? i.transform = yj(e, t.transform, n) : i.transform && (i.transform = "none")), o) {
      const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
      i.transformOrigin = `${l} ${u} ${c}`;
    }
  }
  function ZS(t, { style: e, vars: n }, i, a) {
    const s = t.style;
    let r;
    for (r in e) s[r] = e[r];
    a == null ? void 0 : a.applyProjectionStyles(s, i);
    for (r in n) s.setProperty(r, n[r]);
  }
  function hy(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
  }
  const Os = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string") if (B.test(t)) t = parseFloat(t);
      else return t;
      const n = hy(t, e.target.x), i = hy(t, e.target.y);
      return `${n}% ${i}%`;
    }
  }, vj = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const i = t, a = bi.parse(t);
      if (a.length > 5) return i;
      const s = bi.createTransformer(t), r = typeof a[0] != "number" ? 1 : 0, o = n.x.scale * e.x, l = n.y.scale * e.y;
      a[0 + r] /= o, a[1 + r] /= l;
      const u = xt(o, l, 0.5);
      return typeof a[2 + r] == "number" && (a[2 + r] /= u), typeof a[3 + r] == "number" && (a[3 + r] /= u), s(a);
    }
  }, fd = {
    borderRadius: {
      ...Os,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    },
    borderTopLeftRadius: Os,
    borderTopRightRadius: Os,
    borderBottomLeftRadius: Os,
    borderBottomRightRadius: Os,
    boxShadow: vj
  };
  function $S(t, { layout: e, layoutId: n }) {
    return ys.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!fd[t] || t === "opacity");
  }
  function lm(t, e, n) {
    var _a5;
    const i = t.style, a = e == null ? void 0 : e.style, s = {};
    if (!i) return s;
    for (const r in i) (Xt(i[r]) || a && Xt(a[r]) || $S(r, t) || ((_a5 = n == null ? void 0 : n.getValue(r)) == null ? void 0 : _a5.liveStyle) !== void 0) && (s[r] = i[r]);
    return s;
  }
  function bj(t) {
    return window.getComputedStyle(t);
  }
  class xj extends qS {
    constructor() {
      super(...arguments), this.type = "html", this.renderInstance = ZS;
    }
    readValueFromInstance(e, n) {
      var _a5;
      if (ys.has(n)) return ((_a5 = this.projection) == null ? void 0 : _a5.isProjecting) ? Jf(n) : BN(e, n);
      {
        const i = bj(e), a = (rS(n) ? i.getPropertyValue(n) : i[n]) || 0;
        return typeof a == "string" ? a.trim() : a;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: n }) {
      return KS(e, n);
    }
    build(e, n, i) {
      om(e, n, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, n, i) {
      return lm(e, n, i);
    }
  }
  const Sj = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  }, wj = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function Tj(t, e, n = 1, i = 0, a = true) {
    t.pathLength = 1;
    const s = a ? Sj : wj;
    t[s.offset] = `${-i}`, t[s.array] = `${e} ${n}`;
  }
  const Ej = [
    "offsetDistance",
    "offsetPath",
    "offsetRotate",
    "offsetAnchor"
  ];
  function IS(t, { attrX: e, attrY: n, attrScale: i, pathLength: a, pathSpacing: s = 1, pathOffset: r = 0, ...o }, l, u, c) {
    if (om(t, o, u), l) {
      t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
      return;
    }
    t.attrs = t.style, t.style = {};
    const { attrs: f, style: h } = t;
    f.transform && (h.transform = f.transform, delete f.transform), (h.transform || f.transformOrigin) && (h.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), h.transform && (h.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete f.transformBox);
    for (const d of Ej) f[d] !== void 0 && (h[d] = f[d], delete f[d]);
    e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), i !== void 0 && (f.scale = i), a !== void 0 && Tj(f, a, s, r, false);
  }
  const JS = /* @__PURE__ */ new Set([
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
  ]), WS = (t) => typeof t == "string" && t.toLowerCase() === "svg";
  function Aj(t, e, n, i) {
    ZS(t, e, void 0, i);
    for (const a in e.attrs) t.setAttribute(JS.has(a) ? a : tm(a), e.attrs[a]);
  }
  function tw(t, e, n) {
    const i = lm(t, e, n);
    for (const a in t) if (Xt(t[a]) || Xt(e[a])) {
      const s = gs.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
      i[s] = t[a];
    }
    return i;
  }
  class Cj extends qS {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = jt;
    }
    getBaseTargetFromProps(e, n) {
      return e[n];
    }
    readValueFromInstance(e, n) {
      if (ys.has(n)) {
        const i = zS(n);
        return i && i.default || 0;
      }
      return n = JS.has(n) ? n : tm(n), e.getAttribute(n);
    }
    scrapeMotionValuesFromProps(e, n, i) {
      return tw(e, n, i);
    }
    build(e, n, i) {
      IS(e, n, this.isSVGTag, i.transformTemplate, i.style);
    }
    renderInstance(e, n, i, a) {
      Aj(e, n, i, a);
    }
    mount(e) {
      this.isSVGTag = WS(e.tagName), super.mount(e);
    }
  }
  const Mj = rm.length;
  function ew(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
      const n = t.parent ? ew(t.parent) || {} : {};
      return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
    }
    const e = {};
    for (let n = 0; n < Mj; n++) {
      const i = rm[n], a = t.props[i];
      (Cr(a) || a === false) && (e[i] = a);
    }
    return e;
  }
  function nw(t, e) {
    if (!Array.isArray(e)) return false;
    const n = e.length;
    if (n !== t.length) return false;
    for (let i = 0; i < n; i++) if (e[i] !== t[i]) return false;
    return true;
  }
  const Rj = [
    ...sm
  ].reverse(), Oj = sm.length;
  function Dj(t) {
    return (e) => Promise.all(e.map(({ animation: n, options: i }) => C5(t, n, i)));
  }
  function Nj(t) {
    let e = Dj(t), n = my(), i = true;
    const a = (l) => (u, c) => {
      var _a5;
      const f = Ga(t, c, l === "exit" ? (_a5 = t.presenceContext) == null ? void 0 : _a5.custom : void 0);
      if (f) {
        const { transition: h, transitionEnd: d, ...y } = f;
        u = {
          ...u,
          ...y,
          ...d
        };
      }
      return u;
    };
    function s(l) {
      e = l(t);
    }
    function r(l) {
      const { props: u } = t, c = ew(t.parent) || {}, f = [], h = /* @__PURE__ */ new Set();
      let d = {}, y = 1 / 0;
      for (let S = 0; S < Oj; S++) {
        const p = Rj[S], m = n[p], g = u[p] !== void 0 ? u[p] : c[p], w = Cr(g), T = p === l ? m.isActive : null;
        T === false && (y = S);
        let A = g === c[p] && g !== u[p] && w;
        if (A && i && t.manuallyAnimateOnMount && (A = false), m.protectedKeys = {
          ...d
        }, !m.isActive && T === null || !g && !m.prevProp || vu(g) || typeof g == "boolean") continue;
        if (p === "exit" && m.isActive && T !== true) {
          m.prevResolvedValues && (d = {
            ...d,
            ...m.prevResolvedValues
          });
          continue;
        }
        const E = jj(m.prevProp, g);
        let C = E || p === l && m.isActive && !A && w || S > y && w, j = false;
        const z = Array.isArray(g) ? g : [
          g
        ];
        let U = z.reduce(a(p), {});
        T === false && (U = {});
        const { prevResolvedValues: V = {} } = m, J = {
          ...V,
          ...U
        }, L = (D) => {
          C = true, h.has(D) && (j = true, h.delete(D)), m.needsAnimating[D] = true;
          const O = t.getValue(D);
          O && (O.liveStyle = false);
        };
        for (const D in J) {
          const O = U[D], N = V[D];
          if (d.hasOwnProperty(D)) continue;
          let k = false;
          ad(O) && ad(N) ? k = !nw(O, N) : k = O !== N, k ? O != null ? L(D) : h.add(D) : O !== void 0 && h.has(D) ? L(D) : m.protectedKeys[D] = true;
        }
        m.prevProp = g, m.prevResolvedValues = U, m.isActive && (d = {
          ...d,
          ...U
        }), i && t.blockInitialAnimation && (C = false);
        const X = A && E;
        C && (!X || j) && f.push(...z.map((D) => {
          const O = {
            type: p
          };
          if (typeof D == "string" && i && !X && t.manuallyAnimateOnMount && t.parent) {
            const { parent: N } = t, k = Ga(N, D);
            if (N.enteringChildren && k) {
              const { delayChildren: ft } = k.transition || {};
              O.delay = ES(N.enteringChildren, t, ft);
            }
          }
          return {
            animation: D,
            options: O
          };
        }));
      }
      if (h.size) {
        const S = {};
        if (typeof u.initial != "boolean") {
          const p = Ga(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
          p && p.transition && (S.transition = p.transition);
        }
        h.forEach((p) => {
          const m = t.getBaseTarget(p), g = t.getValue(p);
          g && (g.liveStyle = true), S[p] = m ?? null;
        }), f.push({
          animation: S
        });
      }
      let v = !!f.length;
      return i && (u.initial === false || u.initial === u.animate) && !t.manuallyAnimateOnMount && (v = false), i = false, v ? e(f) : Promise.resolve();
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
        n = my();
      }
    };
  }
  function jj(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !nw(e, t) : false;
  }
  function Di(t = false) {
    return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function my() {
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
  function py(t, e) {
    t.min = e.min, t.max = e.max;
  }
  function Ue(t, e) {
    py(t.x, e.x), py(t.y, e.y);
  }
  function gy(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
  }
  const iw = 1e-4, zj = 1 - iw, _j = 1 + iw, aw = 0.01, Lj = 0 - aw, Vj = 0 + aw;
  function $t(t) {
    return t.max - t.min;
  }
  function Bj(t, e, n) {
    return Math.abs(t - e) <= n;
  }
  function yy(t, e, n, i = 0.5) {
    t.origin = i, t.originPoint = xt(e.min, e.max, t.origin), t.scale = $t(n) / $t(e), t.translate = xt(n.min, n.max, t.origin) - t.originPoint, (t.scale >= zj && t.scale <= _j || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Lj && t.translate <= Vj || isNaN(t.translate)) && (t.translate = 0);
  }
  function tr(t, e, n, i) {
    yy(t.x, e.x, n.x, i ? i.originX : void 0), yy(t.y, e.y, n.y, i ? i.originY : void 0);
  }
  function vy(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + $t(e);
  }
  function kj(t, e, n) {
    vy(t.x, e.x, n.x), vy(t.y, e.y, n.y);
  }
  function by(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + $t(e);
  }
  function Ul(t, e, n) {
    by(t.x, e.x, n.x), by(t.y, e.y, n.y);
  }
  function xy(t, e, n, i, a) {
    return t -= e, t = kl(t, 1 / n, i), a !== void 0 && (t = kl(t, 1 / a, i)), t;
  }
  function Uj(t, e = 0, n = 1, i = 0.5, a, s = t, r = t) {
    if (nn.test(e) && (e = parseFloat(e), e = xt(r.min, r.max, e / 100) - r.min), typeof e != "number") return;
    let o = xt(s.min, s.max, i);
    t === s && (o -= e), t.min = xy(t.min, e, n, o, a), t.max = xy(t.max, e, n, o, a);
  }
  function Sy(t, e, [n, i, a], s, r) {
    Uj(t, e[n], e[i], e[a], e.scale, s, r);
  }
  const Pj = [
    "x",
    "scaleX",
    "originX"
  ], Hj = [
    "y",
    "scaleY",
    "originY"
  ];
  function wy(t, e, n, i) {
    Sy(t.x, e, Pj, n ? n.x : void 0, i ? i.x : void 0), Sy(t.y, e, Hj, n ? n.y : void 0, i ? i.y : void 0);
  }
  function Ty(t) {
    return t.translate === 0 && t.scale === 1;
  }
  function sw(t) {
    return Ty(t.x) && Ty(t.y);
  }
  function Ey(t, e) {
    return t.min === e.min && t.max === e.max;
  }
  function Gj(t, e) {
    return Ey(t.x, e.x) && Ey(t.y, e.y);
  }
  function Ay(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
  }
  function rw(t, e) {
    return Ay(t.x, e.x) && Ay(t.y, e.y);
  }
  function Cy(t) {
    return $t(t.x) / $t(t.y);
  }
  function My(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
  }
  function Ke(t) {
    return [
      t("x"),
      t("y")
    ];
  }
  function Yj(t, e, n) {
    let i = "";
    const a = t.x.translate / e.x, s = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
    if ((a || s || r) && (i = `translate3d(${a}px, ${s}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
      const { transformPerspective: u, rotate: c, rotateX: f, rotateY: h, skewX: d, skewY: y } = n;
      u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), f && (i += `rotateX(${f}deg) `), h && (i += `rotateY(${h}deg) `), d && (i += `skewX(${d}deg) `), y && (i += `skewY(${y}deg) `);
    }
    const o = t.x.scale * e.x, l = t.y.scale * e.y;
    return (o !== 1 || l !== 1) && (i += `scale(${o}, ${l})`), i || "none";
  }
  const ow = [
    "TopLeft",
    "TopRight",
    "BottomLeft",
    "BottomRight"
  ], qj = ow.length, Ry = (t) => typeof t == "string" ? parseFloat(t) : t, Oy = (t) => typeof t == "number" || B.test(t);
  function Xj(t, e, n, i, a, s) {
    a ? (t.opacity = xt(0, n.opacity ?? 1, Fj(i)), t.opacityExit = xt(e.opacity ?? 1, 0, Qj(i))) : s && (t.opacity = xt(e.opacity ?? 1, n.opacity ?? 1, i));
    for (let r = 0; r < qj; r++) {
      const o = `border${ow[r]}Radius`;
      let l = Dy(e, o), u = Dy(n, o);
      if (l === void 0 && u === void 0) continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || Oy(l) === Oy(u) ? (t[o] = Math.max(xt(Ry(l), Ry(u), i), 0), (nn.test(u) || nn.test(l)) && (t[o] += "%")) : t[o] = u;
    }
    (e.rotate || n.rotate) && (t.rotate = xt(e.rotate || 0, n.rotate || 0, i));
  }
  function Dy(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius;
  }
  const Fj = lw(0, 0.5, tS), Qj = lw(0.5, 0.95, Ne);
  function lw(t, e, n) {
    return (i) => i < t ? 0 : i > e ? 1 : n(Tr(t, e, i));
  }
  function Kj(t, e, n) {
    const i = Xt(t) ? t : is(t);
    return i.start(Jh("", i, e, n)), i.animation;
  }
  function Mr(t, e, n, i = {
    passive: true
  }) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
  }
  const Zj = (t, e) => t.depth - e.depth;
  class $j {
    constructor() {
      this.children = [], this.isDirty = false;
    }
    add(e) {
      Bh(this.children, e), this.isDirty = true;
    }
    remove(e) {
      zl(this.children, e), this.isDirty = true;
    }
    forEach(e) {
      this.isDirty && this.children.sort(Zj), this.isDirty = false, this.children.forEach(e);
    }
  }
  function Ij(t, e) {
    const n = Zt.now(), i = ({ timestamp: a }) => {
      const s = a - n;
      s >= e && (vi(i), t(s - e));
    };
    return ct.setup(i, true), () => vi(i);
  }
  function Qo(t) {
    return Xt(t) ? t.get() : t;
  }
  class Jj {
    constructor() {
      this.members = [];
    }
    add(e) {
      Bh(this.members, e);
      for (let n = this.members.length - 1; n >= 0; n--) {
        const i = this.members[n];
        if (i === e || i === this.lead || i === this.prevLead) continue;
        const a = i.instance;
        a && a.isConnected === false && i.isPresent !== false && !i.snapshot && zl(this.members, i);
      }
      e.scheduleRender();
    }
    remove(e) {
      if (zl(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
  const Ko = {
    hasAnimatedSinceResize: true,
    hasEverUpdated: false
  }, Ec = [
    "",
    "X",
    "Y",
    "Z"
  ], Wj = 1e3;
  let t3 = 0;
  function Ac(t, e, n, i) {
    const { latestValues: a } = e;
    a[t] && (n[t] = a[t], e.setStaticValue(t, 0), i && (i[t] = 0));
  }
  function uw(t) {
    if (t.hasCheckedOptimisedAppear = true, t.root === t) return;
    const { visualElement: e } = t.options;
    if (!e) return;
    const n = OS(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const { layout: a, layoutId: s } = t.options;
      window.MotionCancelOptimisedAnimation(n, "transform", ct, !(a || s));
    }
    const { parent: i } = t;
    i && !i.hasCheckedOptimisedAppear && uw(i);
  }
  function cw({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: a }) {
    return class {
      constructor(r = {}, o = e == null ? void 0 : e()) {
        this.id = t3++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = {
          x: 1,
          y: 1
        }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.layoutVersion = 0, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = false, this.nodes.forEach(i3), this.nodes.forEach(o3), this.nodes.forEach(l3), this.nodes.forEach(a3);
        }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = o ? o.root || o : this, this.path = o ? [
          ...o.path,
          o
        ] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0;
        for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = true;
        this.root === this && (this.nodes = new $j());
      }
      addEventListener(r, o) {
        return this.eventHandlers.has(r) || this.eventHandlers.set(r, new Uh()), this.eventHandlers.get(r).add(o);
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
        this.isSVG = am(r) && !nj(r), this.instance = r;
        const { layoutId: o, layout: l, visualElement: u } = this.options;
        if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || o) && (this.isLayoutDirty = true), t) {
          let c, f = 0;
          const h = () => this.root.updateBlockedByResize = false;
          ct.read(() => {
            f = window.innerWidth;
          }), t(r, () => {
            const d = window.innerWidth;
            d !== f && (f = d, this.root.updateBlockedByResize = true, c && c(), c = Ij(h, 250), Ko.hasAnimatedSinceResize && (Ko.hasAnimatedSinceResize = false, this.nodes.forEach(zy)));
          });
        }
        o && this.root.registerSharedNode(o, this), this.options.animate !== false && u && (o || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: f, hasRelativeLayoutChanged: h, layout: d }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const y = this.options.transition || u.getDefaultTransition() || h3, { onLayoutAnimationStart: v, onLayoutAnimationComplete: S } = u.getProps(), p = !this.targetLayout || !rw(this.targetLayout, d), m = !f && h;
          if (this.options.layoutRoot || this.resumeFrom || m || f && (p || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
            const g = {
              ...Ih(y, "layout"),
              onPlay: v,
              onComplete: S
            };
            (u.shouldReduceMotion || this.options.layoutRoot) && (g.delay = 0, g.type = false), this.startAnimation(g), this.setAnimationOrigin(c, m);
          } else f || zy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = d;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        const r = this.getStack();
        r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), vi(this.updateProjection);
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
        this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(u3), this.animationId++);
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
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && uw(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
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
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ny);
          return;
        }
        if (this.animationId <= this.animationCommitId) {
          this.nodes.forEach(jy);
          return;
        }
        this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(r3), this.nodes.forEach(e3), this.nodes.forEach(n3)) : this.nodes.forEach(jy), this.clearAllSnapshots();
        const o = Zt.now();
        Ut.delta = sn(0, 1e3 / 60, o - Ut.timestamp), Ut.timestamp = o, Ut.isProcessing = true, gc.update.process(Ut), gc.preRender.process(Ut), gc.render.process(Ut), Ut.isProcessing = false;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = true, nm.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(s3), this.sharedNodes.forEach(c3);
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
        const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, o = this.projectionDelta && !sw(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
        r && this.instance && (o || Li(this.latestValues) || c) && (a(this.instance, u), this.shouldResetTransform = false, this.scheduleRender());
      }
      measure(r = true) {
        const o = this.measurePageBox();
        let l = this.removeElementScroll(o);
        return r && (l = this.removeTransform(l)), m3(l), {
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
        if (!(((_a5 = this.scroll) == null ? void 0 : _a5.wasRoot) || this.path.some(p3))) {
          const { scroll: u } = this.root;
          u && (Na(o.x, u.offset.x), Na(o.y, u.offset.y));
        }
        return o;
      }
      removeElementScroll(r) {
        var _a5;
        const o = jt();
        if (Ue(o, r), (_a5 = this.scroll) == null ? void 0 : _a5.wasRoot) return o;
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l], { scroll: c, options: f } = u;
          u !== this.root && c && f.layoutScroll && (c.wasRoot && Ue(o, r), Na(o.x, c.offset.x), Na(o.y, c.offset.y));
        }
        return o;
      }
      applyTransform(r, o = false) {
        const l = jt();
        Ue(l, r);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !o && c.options.layoutScroll && c.scroll && c !== c.root && ja(l, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
          }), Li(c.latestValues) && ja(l, c.latestValues);
        }
        return Li(this.latestValues) && ja(l, this.latestValues), l;
      }
      removeTransform(r) {
        const o = jt();
        Ue(o, r);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !Li(u.latestValues)) continue;
          ud(u.latestValues) && u.updateSnapshot();
          const c = jt(), f = u.measurePageBox();
          Ue(c, f), wy(o, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
        }
        return Li(this.latestValues) && wy(o, this.latestValues), o;
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
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ut.timestamp && this.relativeParent.resolveTargetDelta(true);
      }
      resolveTargetDelta(r = false) {
        var _a5;
        const o = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
        const l = !!this.resumingFrom || this !== o;
        if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a5 = this.parent) == null ? void 0 : _a5.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
        const { layout: c, layoutId: f } = this.options;
        if (!this.layout || !(c || f)) return;
        this.resolvedRelativeTargetAt = Ut.timestamp;
        const h = this.getClosestProjectingParent();
        h && this.linkedParentVersion !== h.layoutVersion && !h.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (h && h.layout ? this.createRelativeTarget(h, this.layout.layoutBox, h.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = jt(), this.targetWithTransforms = jt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), kj(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ue(this.target, this.layout.layoutBox), QS(this.target, this.targetDelta)) : Ue(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? this.createRelativeTarget(h, this.target, h.target) : this.relativeParent = this.relativeTarget = void 0));
      }
      getClosestProjectingParent() {
        if (!(!this.parent || ud(this.parent.latestValues) || FS(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      createRelativeTarget(r, o, l) {
        this.relativeParent = r, this.linkedParentVersion = r.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = jt(), this.relativeTargetOrigin = jt(), Ul(this.relativeTargetOrigin, o, l), Ue(this.relativeTarget, this.relativeTargetOrigin);
      }
      removeRelativeTarget() {
        this.relativeParent = this.relativeTarget = void 0;
      }
      calcProjection() {
        var _a5;
        const r = this.getLead(), o = !!this.resumingFrom || this !== r;
        let l = true;
        if ((this.isProjectionDirty || ((_a5 = this.parent) == null ? void 0 : _a5.isProjectionDirty)) && (l = false), o && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = false), this.resolvedRelativeTargetAt === Ut.timestamp && (l = false), l) return;
        const { layout: u, layoutId: c } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c)) return;
        Ue(this.layoutCorrected, this.layout.layoutBox);
        const f = this.treeScale.x, h = this.treeScale.y;
        hj(this.layoutCorrected, this.treeScale, this.path, o), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = jt());
        const { target: d } = r;
        if (!d) {
          this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (gy(this.prevProjectionDelta.x, this.projectionDelta.x), gy(this.prevProjectionDelta.y, this.projectionDelta.y)), tr(this.projectionDelta, this.layoutCorrected, d, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !My(this.projectionDelta.x, this.prevProjectionDelta.x) || !My(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", d));
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
        this.prevProjectionDelta = Da(), this.projectionDelta = Da(), this.projectionDeltaWithTransform = Da();
      }
      setAnimationOrigin(r, o = false) {
        const l = this.snapshot, u = l ? l.latestValues : {}, c = {
          ...this.latestValues
        }, f = Da();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !o;
        const h = jt(), d = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, v = d !== y, S = this.getStack(), p = !S || S.members.length <= 1, m = !!(v && !p && this.options.crossfade === true && !this.path.some(d3));
        this.animationProgress = 0;
        let g;
        this.mixTargetDelta = (w) => {
          const T = w / 1e3;
          _y(f.x, r.x, T), _y(f.y, r.y, T), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ul(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), f3(this.relativeTarget, this.relativeTargetOrigin, h, T), g && Gj(this.relativeTarget, g) && (this.isProjectionDirty = false), g || (g = jt()), Ue(g, this.relativeTarget)), v && (this.animationValues = c, Xj(c, u, this.latestValues, T, m, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(r) {
        var _a5, _b3, _c3;
        this.notifyListeners("animationStart"), (_a5 = this.currentAnimation) == null ? void 0 : _a5.stop(), (_c3 = (_b3 = this.resumingFrom) == null ? void 0 : _b3.currentAnimation) == null ? void 0 : _c3.stop(), this.pendingAnimation && (vi(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ct.update(() => {
          Ko.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = is(0)), this.currentAnimation = Kj(this.motionValue, [
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
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Wj), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const r = this.getLead();
        let { targetWithTransforms: o, target: l, layout: u, latestValues: c } = r;
        if (!(!o || !l || !u)) {
          if (this !== r && this.layout && u && fw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
            l = this.target || jt();
            const f = $t(this.layout.layoutBox.x);
            l.x.min = r.target.x.min, l.x.max = l.x.min + f;
            const h = $t(this.layout.layoutBox.y);
            l.y.min = r.target.y.min, l.y.max = l.y.min + h;
          }
          Ue(o, l), ja(o, c), tr(this.projectionDeltaWithTransform, this.layoutCorrected, o, c);
        }
      }
      registerSharedNode(r, o) {
        this.sharedNodes.has(r) || this.sharedNodes.set(r, new Jj()), this.sharedNodes.get(r).add(o);
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
        l.z && Ac("z", r, u, this.animationValues);
        for (let c = 0; c < Ec.length; c++) Ac(`rotate${Ec[c]}`, r, u, this.animationValues), Ac(`skew${Ec[c]}`, r, u, this.animationValues);
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
          this.needsReset = false, r.visibility = "", r.opacity = "", r.pointerEvents = Qo(o == null ? void 0 : o.pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
          return;
        }
        const u = this.getLead();
        if (!this.projectionDelta || !this.layout || !u.target) {
          this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = Qo(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !Li(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = false);
          return;
        }
        r.visibility = "";
        const c = u.animationValues || u.latestValues;
        this.applyTransformsToTarget();
        let f = Yj(this.projectionDeltaWithTransform, this.treeScale, c);
        l && (f = l(c, f)), r.transform = f;
        const { x: h, y: d } = this.projectionDelta;
        r.transformOrigin = `${h.origin * 100}% ${d.origin * 100}% 0`, u.animationValues ? r.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : r.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
        for (const y in fd) {
          if (c[y] === void 0) continue;
          const { correct: v, applyTo: S, isCSSVariable: p } = fd[y], m = f === "none" ? c[y] : v(c[y], u);
          if (S) {
            const g = S.length;
            for (let w = 0; w < g; w++) r[S[w]] = m;
          } else p ? this.options.visualElement.renderState.vars[y] = m : r[y] = m;
        }
        this.options.layoutId && (r.pointerEvents = u === this ? Qo(o == null ? void 0 : o.pointerEvents) || "" : "none");
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((r) => {
          var _a5;
          return (_a5 = r.currentAnimation) == null ? void 0 : _a5.stop();
        }), this.root.nodes.forEach(Ny), this.root.sharedNodes.clear();
      }
    };
  }
  function e3(t) {
    t.updateLayout();
  }
  function n3(t) {
    var _a5;
    const e = ((_a5 = t.resumeFrom) == null ? void 0 : _a5.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
      const { layoutBox: n, measuredBox: i } = t.layout, { animationType: a } = t.options, s = e.source !== t.layout.source;
      a === "size" ? Ke((c) => {
        const f = s ? e.measuredBox[c] : e.layoutBox[c], h = $t(f);
        f.min = n[c].min, f.max = f.min + h;
      }) : fw(a, e.layoutBox, n) && Ke((c) => {
        const f = s ? e.measuredBox[c] : e.layoutBox[c], h = $t(n[c]);
        f.max = f.min + h, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = true, t.relativeTarget[c].max = t.relativeTarget[c].min + h);
      });
      const r = Da();
      tr(r, n, e.layoutBox);
      const o = Da();
      s ? tr(o, t.applyTransform(i, true), e.measuredBox) : tr(o, n, e.layoutBox);
      const l = !sw(r);
      let u = false;
      if (!t.resumeFrom) {
        const c = t.getClosestProjectingParent();
        if (c && !c.resumeFrom) {
          const { snapshot: f, layout: h } = c;
          if (f && h) {
            const d = jt();
            Ul(d, e.layoutBox, f.layoutBox);
            const y = jt();
            Ul(y, n, h.layoutBox), rw(d, y) || (u = true), c.options.layoutRoot && (t.relativeTarget = y, t.relativeTargetOrigin = d, t.relativeParent = c);
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
  function i3(t) {
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
  }
  function a3(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
  }
  function s3(t) {
    t.clearSnapshot();
  }
  function Ny(t) {
    t.clearMeasurements();
  }
  function jy(t) {
    t.isLayoutDirty = false;
  }
  function r3(t) {
    const { visualElement: e } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
  }
  function zy(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = true;
  }
  function o3(t) {
    t.resolveTargetDelta();
  }
  function l3(t) {
    t.calcProjection();
  }
  function u3(t) {
    t.resetSkewAndRotation();
  }
  function c3(t) {
    t.removeLeadSnapshot();
  }
  function _y(t, e, n) {
    t.translate = xt(e.translate, 0, n), t.scale = xt(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
  }
  function Ly(t, e, n, i) {
    t.min = xt(e.min, n.min, i), t.max = xt(e.max, n.max, i);
  }
  function f3(t, e, n, i) {
    Ly(t.x, e.x, n.x, i), Ly(t.y, e.y, n.y, i);
  }
  function d3(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0;
  }
  const h3 = {
    duration: 0.45,
    ease: [
      0.4,
      0,
      0.1,
      1
    ]
  }, Vy = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), By = Vy("applewebkit/") && !Vy("chrome/") ? Math.round : Ne;
  function ky(t) {
    t.min = By(t.min), t.max = By(t.max);
  }
  function m3(t) {
    ky(t.x), ky(t.y);
  }
  function fw(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !Bj(Cy(e), Cy(n), 0.2);
  }
  function p3(t) {
    var _a5;
    return t !== t.root && ((_a5 = t.scroll) == null ? void 0 : _a5.wasRoot);
  }
  const g3 = cw({
    attachResizeListener: (t, e) => Mr(t, "resize", e),
    measureScroll: () => {
      var _a5, _b3;
      return {
        x: document.documentElement.scrollLeft || ((_a5 = document.body) == null ? void 0 : _a5.scrollLeft) || 0,
        y: document.documentElement.scrollTop || ((_b3 = document.body) == null ? void 0 : _b3.scrollTop) || 0
      };
    },
    checkIsScrollRoot: () => true
  }), Cc = {
    current: void 0
  }, dw = cw({
    measureScroll: (t) => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!Cc.current) {
        const t = new g3({});
        t.mount(window), t.setOptions({
          layoutScroll: true
        }), Cc.current = t;
      }
      return Cc.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
  }), hw = b.createContext({
    transformPagePoint: (t) => t,
    isStatic: false,
    reducedMotion: "never"
  });
  function y3(t = true) {
    const e = b.useContext(Vh);
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
  const mw = b.createContext({
    strict: false
  }), Uy = {
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
  let Py = false;
  function v3() {
    if (Py) return;
    const t = {};
    for (const e in Uy) t[e] = {
      isEnabled: (n) => Uy[e].some((i) => !!n[i])
    };
    YS(t), Py = true;
  }
  function pw() {
    return v3(), uj();
  }
  function b3(t) {
    const e = pw();
    for (const n in t) e[n] = {
      ...e[n],
      ...t[n]
    };
    YS(e);
  }
  const x3 = /* @__PURE__ */ new Set([
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
  function Pl(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || x3.has(t);
  }
  let gw = (t) => !Pl(t);
  function S3(t) {
    typeof t == "function" && (gw = (e) => e.startsWith("on") ? !Pl(e) : t(e));
  }
  try {
    S3(require("@emotion/is-prop-valid").default);
  } catch {
  }
  function w3(t, e, n) {
    const i = {};
    for (const a in t) a === "values" && typeof t.values == "object" || (gw(a) || n === true && Pl(a) || !e && !Pl(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i;
  }
  const xu = b.createContext({});
  function T3(t, e) {
    if (bu(t)) {
      const { initial: n, animate: i } = t;
      return {
        initial: n === false || Cr(n) ? n : void 0,
        animate: Cr(i) ? i : void 0
      };
    }
    return t.inherit !== false ? e : {};
  }
  function E3(t) {
    const { initial: e, animate: n } = T3(t, b.useContext(xu));
    return b.useMemo(() => ({
      initial: e,
      animate: n
    }), [
      Hy(e),
      Hy(n)
    ]);
  }
  function Hy(t) {
    return Array.isArray(t) ? t.join(" ") : t;
  }
  const um = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function yw(t, e, n) {
    for (const i in e) !Xt(e[i]) && !$S(i, n) && (t[i] = e[i]);
  }
  function A3({ transformTemplate: t }, e) {
    return b.useMemo(() => {
      const n = um();
      return om(n, e, t), Object.assign({}, n.vars, n.style);
    }, [
      e
    ]);
  }
  function C3(t, e) {
    const n = t.style || {}, i = {};
    return yw(i, n, t), Object.assign(i, A3(t, e)), i;
  }
  function M3(t, e) {
    const n = {}, i = C3(t, e);
    return t.drag && t.dragListener !== false && (n.draggable = false, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
  }
  const vw = () => ({
    ...um(),
    attrs: {}
  });
  function R3(t, e, n, i) {
    const a = b.useMemo(() => {
      const s = vw();
      return IS(s, e, WS(i), t.transformTemplate, t.style), {
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
      yw(s, t.style, t), a.style = {
        ...s,
        ...a.style
      };
    }
    return a;
  }
  const O3 = [
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
  function cm(t) {
    return typeof t != "string" || t.includes("-") ? false : !!(O3.indexOf(t) > -1 || /[A-Z]/u.test(t));
  }
  function D3(t, e, n, { latestValues: i }, a, s = false, r) {
    const l = (r ?? cm(t) ? R3 : M3)(e, i, a, t), u = w3(e, typeof t == "string", s), c = t !== b.Fragment ? {
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
  function N3({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, a) {
    return {
      latestValues: j3(n, i, a, t),
      renderState: e()
    };
  }
  function j3(t, e, n, i) {
    const a = {}, s = i(t, {});
    for (const h in s) a[h] = Qo(s[h]);
    let { initial: r, animate: o } = t;
    const l = bu(t), u = HS(t);
    e && u && !l && t.inherit !== false && (r === void 0 && (r = e.initial), o === void 0 && (o = e.animate));
    let c = n ? n.initial === false : false;
    c = c || r === false;
    const f = c ? o : r;
    if (f && typeof f != "boolean" && !vu(f)) {
      const h = Array.isArray(f) ? f : [
        f
      ];
      for (let d = 0; d < h.length; d++) {
        const y = Wh(t, h[d]);
        if (y) {
          const { transitionEnd: v, transition: S, ...p } = y;
          for (const m in p) {
            let g = p[m];
            if (Array.isArray(g)) {
              const w = c ? g.length - 1 : 0;
              g = g[w];
            }
            g !== null && (a[m] = g);
          }
          for (const m in v) a[m] = v[m];
        }
      }
    }
    return a;
  }
  const bw = (t) => (e, n) => {
    const i = b.useContext(xu), a = b.useContext(Vh), s = () => N3(t, e, i, a);
    return n ? s() : _D(s);
  }, z3 = bw({
    scrapeMotionValuesFromProps: lm,
    createRenderState: um
  }), _3 = bw({
    scrapeMotionValuesFromProps: tw,
    createRenderState: vw
  }), L3 = Symbol.for("motionComponentSymbol");
  function V3(t, e, n) {
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
  const xw = b.createContext({});
  function pa(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
  }
  function B3(t, e, n, i, a, s) {
    var _a5, _b3;
    const { visualElement: r } = b.useContext(xu), o = b.useContext(mw), l = b.useContext(Vh), u = b.useContext(hw), c = u.reducedMotion, f = u.skipAnimations, h = b.useRef(null), d = b.useRef(false);
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
    const y = h.current, v = b.useContext(xw);
    y && !y.projection && a && (y.type === "html" || y.type === "svg") && k3(h.current, n, a, v);
    const S = b.useRef(false);
    b.useInsertionEffect(() => {
      y && S.current && y.update(n, l);
    });
    const p = n[RS], m = b.useRef(!!p && !((_a5 = window.MotionHandoffIsComplete) == null ? void 0 : _a5.call(window, p)) && ((_b3 = window.MotionHasOptimisedAnimation) == null ? void 0 : _b3.call(window, p)));
    return LD(() => {
      d.current = true, y && (S.current = true, window.MotionIsMounted = true, y.updateFeatures(), y.scheduleRenderMicrotask(), m.current && y.animationState && y.animationState.animateChanges());
    }), b.useEffect(() => {
      y && (!m.current && y.animationState && y.animationState.animateChanges(), m.current && (queueMicrotask(() => {
        var _a6;
        (_a6 = window.MotionHandoffMarkAsComplete) == null ? void 0 : _a6.call(window, p);
      }), m.current = false), y.enteringChildren = void 0);
    }), y;
  }
  function k3(t, e, n, i) {
    const { layoutId: a, layout: s, drag: r, dragConstraints: o, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Sw(t.parent)), t.projection.setOptions({
      layoutId: a,
      layout: s,
      alwaysMeasureLayout: !!r || o && pa(o),
      visualElement: t,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: i,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u
    });
  }
  function Sw(t) {
    if (t) return t.options.allowProjection !== false ? t.projection : Sw(t.parent);
  }
  function Mc(t, { forwardMotionProps: e = false, type: n } = {}, i, a) {
    i && b3(i);
    const s = n ? n === "svg" : cm(t), r = s ? _3 : z3;
    function o(u, c) {
      let f;
      const h = {
        ...b.useContext(hw),
        ...u,
        layoutId: U3(u)
      }, { isStatic: d } = h, y = E3(u), v = r(u, d);
      if (!d && Y1) {
        P3();
        const S = H3(h);
        f = S.MeasureLayout, y.visualElement = B3(t, v, h, a, S.ProjectionNode, s);
      }
      return x.jsxs(xu.Provider, {
        value: y,
        children: [
          f && y.visualElement ? x.jsx(f, {
            visualElement: y.visualElement,
            ...h
          }) : null,
          D3(t, u, V3(v, y.visualElement, c), v, d, e, s)
        ]
      });
    }
    o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
    const l = b.forwardRef(o);
    return l[L3] = t, l;
  }
  function U3({ layoutId: t }) {
    const e = b.useContext(G1).id;
    return e && t !== void 0 ? e + "-" + t : t;
  }
  function P3(t, e) {
    b.useContext(mw).strict;
  }
  function H3(t) {
    const e = pw(), { drag: n, layout: i } = e;
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
  function G3(t, e) {
    if (typeof Proxy > "u") return Mc;
    const n = /* @__PURE__ */ new Map(), i = (s, r) => Mc(s, r, t, e), a = (s, r) => i(s, r);
    return new Proxy(a, {
      get: (s, r) => r === "create" ? i : (n.has(r) || n.set(r, Mc(r, void 0, t, e)), n.get(r))
    });
  }
  const Y3 = (t, e) => e.isSVG ?? cm(t) ? new Cj(e) : new xj(e, {
    allowProjection: t !== b.Fragment
  });
  class q3 extends Ti {
    constructor(e) {
      super(e), e.animationState || (e.animationState = Nj(e));
    }
    updateAnimationControlsSubscription() {
      const { animate: e } = this.node.getProps();
      vu(e) && (this.unmountControls = e.subscribe(this.node));
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
  let X3 = 0;
  class F3 extends Ti {
    constructor() {
      super(...arguments), this.id = X3++;
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
  const Q3 = {
    animation: {
      Feature: q3
    },
    exit: {
      Feature: F3
    }
  };
  function Kr(t) {
    return {
      point: {
        x: t.pageX,
        y: t.pageY
      }
    };
  }
  const K3 = (t) => (e) => im(e) && t(e, Kr(e));
  function er(t, e, n, i) {
    return Mr(t, e, K3(n), i);
  }
  const ww = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Gy = (t, e) => Math.abs(t - e);
  function Z3(t, e) {
    const n = Gy(t.x, e.x), i = Gy(t.y, e.y);
    return Math.sqrt(n ** 2 + i ** 2);
  }
  const Yy = /* @__PURE__ */ new Set([
    "auto",
    "scroll"
  ]);
  class Tw {
    constructor(e, n, { transformPagePoint: i, contextWindow: a = window, dragSnapToOrigin: s = false, distanceThreshold: r = 3, element: o } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (d) => {
        this.handleScroll(d.target);
      }, this.onWindowScroll = () => {
        this.handleScroll(window);
      }, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Oc(this.lastMoveEventInfo, this.history), y = this.startEvent !== null, v = Z3(d.offset, {
          x: 0,
          y: 0
        }) >= this.distanceThreshold;
        if (!y && !v) return;
        const { point: S } = d, { timestamp: p } = Ut;
        this.history.push({
          ...S,
          timestamp: p
        });
        const { onStart: m, onMove: g } = this.handlers;
        y || (m && m(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, d);
      }, this.handlePointerMove = (d, y) => {
        this.lastMoveEvent = d, this.lastMoveEventInfo = Rc(y, this.transformPagePoint), ct.update(this.updatePoint, true);
      }, this.handlePointerUp = (d, y) => {
        this.end();
        const { onEnd: v, onSessionEnd: S, resumeAnimation: p } = this.handlers;
        if ((this.dragSnapToOrigin || !this.startEvent) && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const m = Oc(d.type === "pointercancel" ? this.lastMoveEventInfo : Rc(y, this.transformPagePoint), this.history);
        this.startEvent && v && v(d, m), S && S(d, m);
      }, !im(e)) return;
      this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = a || window;
      const l = Kr(e), u = Rc(l, this.transformPagePoint), { point: c } = u, { timestamp: f } = Ut;
      this.history = [
        {
          ...c,
          timestamp: f
        }
      ];
      const { onSessionStart: h } = n;
      h && h(e, Oc(u, this.history)), this.removeListeners = Xr(er(this.contextWindow, "pointermove", this.handlePointerMove), er(this.contextWindow, "pointerup", this.handlePointerUp), er(this.contextWindow, "pointercancel", this.handlePointerUp)), o && this.startScrollTracking(o);
    }
    startScrollTracking(e) {
      let n = e.parentElement;
      for (; n; ) {
        const i = getComputedStyle(n);
        (Yy.has(i.overflowX) || Yy.has(i.overflowY)) && this.scrollPositions.set(n, {
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
      this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), vi(this.updatePoint);
    }
  }
  function Rc(t, e) {
    return e ? {
      point: e(t.point)
    } : t;
  }
  function qy(t, e) {
    return {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  function Oc({ point: t }, e) {
    return {
      point: t,
      delta: qy(t, Ew(e)),
      offset: qy(t, $3(e)),
      velocity: I3(e, 0.1)
    };
  }
  function $3(t) {
    return t[0];
  }
  function Ew(t) {
    return t[t.length - 1];
  }
  function I3(t, e) {
    if (t.length < 2) return {
      x: 0,
      y: 0
    };
    let n = t.length - 1, i = null;
    const a = Ew(t);
    for (; n >= 0 && (i = t[n], !(a.timestamp - i.timestamp > je(e))); ) n--;
    if (!i) return {
      x: 0,
      y: 0
    };
    i === t[0] && t.length > 2 && a.timestamp - i.timestamp > je(e) * 2 && (i = t[1]);
    const s = Re(a.timestamp - i.timestamp);
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
  function J3(t, { min: e, max: n }, i) {
    return e !== void 0 && t < e ? t = i ? xt(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? xt(n, t, i.max) : Math.min(t, n)), t;
  }
  function Xy(t, e, n) {
    return {
      min: e !== void 0 ? t.min + e : void 0,
      max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    };
  }
  function W3(t, { top: e, left: n, bottom: i, right: a }) {
    return {
      x: Xy(t.x, n, a),
      y: Xy(t.y, e, i)
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
  function t4(t, e) {
    return {
      x: Fy(t.x, e.x),
      y: Fy(t.y, e.y)
    };
  }
  function e4(t, e) {
    let n = 0.5;
    const i = $t(t), a = $t(e);
    return a > i ? n = Tr(e.min, e.max - i, t.min) : i > a && (n = Tr(t.min, t.max - a, e.min)), sn(0, 1, n);
  }
  function n4(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
  }
  const dd = 0.35;
  function i4(t = dd) {
    return t === false ? t = 0 : t === true && (t = dd), {
      x: Qy(t, "left", "right"),
      y: Qy(t, "top", "bottom")
    };
  }
  function Qy(t, e, n) {
    return {
      min: Ky(t, e),
      max: Ky(t, n)
    };
  }
  function Ky(t, e) {
    return typeof t == "number" ? t : t[e] || 0;
  }
  const a4 = /* @__PURE__ */ new WeakMap();
  class s4 {
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
        n && this.snapToCursor(Kr(f).point), this.stopAnimation();
      }, r = (f, h) => {
        const { drag: d, dragPropagation: y, onDragStart: v } = this.getProps();
        if (d && !y && (this.openDragLock && this.openDragLock(), this.openDragLock = U5(d), !this.openDragLock)) return;
        this.latestPointerEvent = f, this.latestPanInfo = h, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), Ke((p) => {
          let m = this.getAxisMotionValue(p).get() || 0;
          if (nn.test(m)) {
            const { projection: g } = this.visualElement;
            if (g && g.layout) {
              const w = g.layout.layoutBox[p];
              w && (m = $t(w) * (parseFloat(m) / 100));
            }
          }
          this.originPoint[p] = m;
        }), v && ct.update(() => v(f, h), false, true), sd(this.visualElement, "transform");
        const { animationState: S } = this.visualElement;
        S && S.setActive("whileDrag", true);
      }, o = (f, h) => {
        this.latestPointerEvent = f, this.latestPanInfo = h;
        const { dragPropagation: d, dragDirectionLock: y, onDirectionLock: v, onDrag: S } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: p } = h;
        if (y && this.currentDirection === null) {
          this.currentDirection = o4(p), this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", h.point, p), this.updateAxis("y", h.point, p), this.visualElement.render(), S && ct.update(() => S(f, h), false, true);
      }, l = (f, h) => {
        this.latestPointerEvent = f, this.latestPanInfo = h, this.stop(f, h), this.latestPointerEvent = null, this.latestPanInfo = null;
      }, u = () => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f || this.constraints) && this.startAnimation({
          x: 0,
          y: 0
        });
      }, { dragSnapToOrigin: c } = this.getProps();
      this.panSession = new Tw(e, {
        onSessionStart: s,
        onStart: r,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: u
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: i,
        contextWindow: ww(this.visualElement),
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
      if (!i || !So(e, a, this.currentDirection)) return;
      const s = this.getAxisMotionValue(e);
      let r = this.originPoint[e] + i[e];
      this.constraints && this.constraints[e] && (r = J3(r, this.constraints[e], this.elastic[e])), s.set(r);
    }
    resolveConstraints() {
      var _a5;
      const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a5 = this.visualElement.projection) == null ? void 0 : _a5.layout, a = this.constraints;
      e && pa(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = W3(i.layoutBox, e) : this.constraints = false, this.elastic = i4(n), a !== this.constraints && !pa(e) && i && this.constraints && !this.hasMutatedConstraints && Ke((s) => {
        this.constraints !== false && this.getAxisMotionValue(s) && (this.constraints[s] = n4(i.layoutBox[s], this.constraints[s]));
      });
    }
    resolveRefConstraints() {
      const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
      if (!e || !pa(e)) return false;
      const i = e.current;
      ns(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
      const { projection: a } = this.visualElement;
      if (!a || !a.layout) return false;
      const s = mj(i, a.root, this.visualElement.getTransformPagePoint());
      let r = t4(a.layout.layoutBox, s);
      if (n) {
        const o = n(fj(r));
        this.hasMutatedConstraints = !!o, o && (r = XS(o));
      }
      return r;
    }
    startAnimation(e) {
      const { drag: n, dragMomentum: i, dragElastic: a, dragTransition: s, dragSnapToOrigin: r, onDragTransitionEnd: o } = this.getProps(), l = this.constraints || {}, u = Ke((c) => {
        if (!So(c, n, this.currentDirection)) return;
        let f = l && l[c] || {};
        r && (f = {
          min: 0,
          max: 0
        });
        const h = a ? 200 : 1e6, d = a ? 40 : 1e7, y = {
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
        return this.startAxisValueAnimation(c, y);
      });
      return Promise.all(u).then(o);
    }
    startAxisValueAnimation(e, n) {
      const i = this.getAxisMotionValue(e);
      return sd(this.visualElement, e), i.start(Jh(e, i, 0, n, this.visualElement, false));
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
        if (!So(n, i, this.currentDirection)) return;
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
      if (!pa(n) || !i || !this.constraints) return;
      this.stopAnimation();
      const a = {
        x: 0,
        y: 0
      };
      Ke((r) => {
        const o = this.getAxisMotionValue(r);
        if (o && this.constraints !== false) {
          const l = o.get();
          a[r] = e4({
            min: l,
            max: l
          }, this.constraints[r]);
        }
      });
      const { transformTemplate: s } = this.visualElement.getProps();
      this.visualElement.current.style.transform = s ? s({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = false, this.resolveConstraints(), Ke((r) => {
        if (!So(r, e, null)) return;
        const o = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
        o.set(xt(l, u, a[r]));
      }), this.visualElement.render();
    }
    addListeners() {
      if (!this.visualElement.current) return;
      a4.set(this.visualElement, this);
      const e = this.visualElement.current, n = er(e, "pointerdown", (u) => {
        const { drag: c, dragListener: f = true } = this.getProps(), h = u.target, d = h !== e && X5(h);
        c && f && !d && this.start(u);
      });
      let i;
      const a = () => {
        const { dragConstraints: u } = this.getProps();
        pa(u) && u.current && (this.constraints = this.resolveRefConstraints(), i || (i = r4(e, u.current, () => this.scalePositionWithinConstraints())));
      }, { projection: s } = this.visualElement, r = s.addEventListener("measure", a);
      s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), ct.read(a);
      const o = Mr(window, "resize", () => this.scalePositionWithinConstraints()), l = s.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: c }) => {
        this.isDragging && c && (Ke((f) => {
          const h = this.getAxisMotionValue(f);
          h && (this.originPoint[f] += u[f].translate, h.set(h.get() + u[f].translate));
        }), this.visualElement.render());
      });
      return () => {
        o(), n(), r(), l && l(), i && i();
      };
    }
    getProps() {
      const e = this.visualElement.getProps(), { drag: n = false, dragDirectionLock: i = false, dragPropagation: a = false, dragConstraints: s = false, dragElastic: r = dd, dragMomentum: o = true } = e;
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
  function Zy(t) {
    let e = true;
    return () => {
      if (e) {
        e = false;
        return;
      }
      t();
    };
  }
  function r4(t, e, n) {
    const i = ay(t, Zy(n)), a = ay(e, Zy(n));
    return () => {
      i(), a();
    };
  }
  function So(t, e, n) {
    return (e === true || e === t) && (n === null || n === t);
  }
  function o4(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
  }
  class l4 extends Ti {
    constructor(e) {
      super(e), this.removeGroupControls = Ne, this.removeListeners = Ne, this.controls = new s4(e);
    }
    mount() {
      const { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ne;
    }
    update() {
      const { dragControls: e } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
      e !== n && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
    }
  }
  const Dc = (t) => (e, n) => {
    t && ct.update(() => t(e, n), false, true);
  };
  class u4 extends Ti {
    constructor() {
      super(...arguments), this.removePointerDownListener = Ne;
    }
    onPointerDown(e) {
      this.session = new Tw(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: ww(this.node)
      });
    }
    createPanHandlers() {
      const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: a } = this.node.getProps();
      return {
        onSessionStart: Dc(e),
        onStart: Dc(n),
        onMove: Dc(i),
        onEnd: (s, r) => {
          delete this.session, a && ct.postRender(() => a(s, r));
        }
      };
    }
    mount() {
      this.removePointerDownListener = er(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  let Nc = false;
  class c4 extends b.Component {
    componentDidMount() {
      const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: a } = this.props, { projection: s } = e;
      s && (n.group && n.group.add(s), i && i.register && a && i.register(s), Nc && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), s.setOptions({
        ...s.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      })), Ko.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(e) {
      const { layoutDependency: n, visualElement: i, drag: a, isPresent: s } = this.props, { projection: r } = i;
      return r && (r.isPresent = s, e.layoutDependency !== n && r.setOptions({
        ...r.options,
        layoutDependency: n
      }), Nc = true, a || e.layoutDependency !== n || n === void 0 || e.isPresent !== s ? r.willUpdate() : this.safeToRemove(), e.isPresent !== s && (s ? r.promote() : r.relegate() || ct.postRender(() => {
        const o = r.getStack();
        (!o || !o.members.length) && this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      const { projection: e } = this.props.visualElement;
      e && (e.root.didUpdate(), nm.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: a } = e;
      Nc = true, a && (a.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(a), i && i.deregister && i.deregister(a));
    }
    safeToRemove() {
      const { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  }
  function Aw(t) {
    const [e, n] = y3(), i = b.useContext(G1);
    return x.jsx(c4, {
      ...t,
      layoutGroup: i,
      switchLayoutGroup: b.useContext(xw),
      isPresent: e,
      safeToRemove: n
    });
  }
  const f4 = {
    pan: {
      Feature: u4
    },
    drag: {
      Feature: l4,
      ProjectionNode: dw,
      MeasureLayout: Aw
    }
  };
  function $y(t, e, n) {
    const { props: i } = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const a = "onHover" + n, s = i[a];
    s && ct.postRender(() => s(e, Kr(e)));
  }
  class d4 extends Ti {
    mount() {
      const { current: e } = this.node;
      e && (this.unmount = H5(e, (n, i) => ($y(this.node, i, "Start"), (a) => $y(this.node, a, "End"))));
    }
    unmount() {
    }
  }
  class h4 extends Ti {
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
      this.unmount = Xr(Mr(this.node.current, "focus", () => this.onFocus()), Mr(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  }
  function Iy(t, e, n) {
    const { props: i } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const a = "onTap" + (n === "End" ? "" : n), s = i[a];
    s && ct.postRender(() => s(e, Kr(e)));
  }
  class m4 extends Ti {
    mount() {
      const { current: e } = this.node;
      if (!e) return;
      const { globalTapTarget: n, propagate: i } = this.node.props;
      this.unmount = Q5(e, (a, s) => (Iy(this.node, s, "Start"), (r, { success: o }) => Iy(this.node, r, o ? "End" : "Cancel")), {
        useGlobalTarget: n,
        stopPropagation: (i == null ? void 0 : i.tap) === false
      });
    }
    unmount() {
    }
  }
  const hd = /* @__PURE__ */ new WeakMap(), jc = /* @__PURE__ */ new WeakMap(), p4 = (t) => {
    const e = hd.get(t.target);
    e && e(t);
  }, g4 = (t) => {
    t.forEach(p4);
  };
  function y4({ root: t, ...e }) {
    const n = t || document;
    jc.has(n) || jc.set(n, {});
    const i = jc.get(n), a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(g4, {
      root: t,
      ...e
    })), i[a];
  }
  function v4(t, e, n) {
    const i = y4(e);
    return hd.set(t, n), i.observe(t), () => {
      hd.delete(t), i.unobserve(t);
    };
  }
  const b4 = {
    some: 0,
    all: 1
  };
  class x4 extends Ti {
    constructor() {
      super(...arguments), this.hasEnteredView = false, this.isInView = false;
    }
    startObserver() {
      this.unmount();
      const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: a = "some", once: s } = e, r = {
        root: n ? n.current : void 0,
        rootMargin: i,
        threshold: typeof a == "number" ? a : b4[a]
      }, o = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView)) return;
        u && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), h = u ? c : f;
        h && h(l);
      };
      return v4(this.node.current, r, o);
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
      ].some(S4(e, n)) && this.startObserver();
    }
    unmount() {
    }
  }
  function S4({ viewport: t = {} }, { viewport: e = {} } = {}) {
    return (n) => t[n] !== e[n];
  }
  const w4 = {
    inView: {
      Feature: x4
    },
    tap: {
      Feature: m4
    },
    focus: {
      Feature: h4
    },
    hover: {
      Feature: d4
    }
  }, T4 = {
    layout: {
      ProjectionNode: dw,
      MeasureLayout: Aw
    }
  }, E4 = {
    ...Q3,
    ...w4,
    ...f4,
    ...T4
  }, wo = G3(E4, Y3), A4 = zx("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
    const r = i ? qA : "button";
    return x.jsx(r, {
      className: wi(A4({
        variant: e,
        size: n,
        className: t
      })),
      ref: s,
      ...a
    });
  });
  Qe.displayName = "Button";
  const C4 = "/amritaraj-nair-portfolio", Jy = `${C4}/Amritaraj_Nair_Resume.pdf`, To = "https://amritnair.github.io/amritaraj-nair-portfolio/#/resume", M4 = () => {
    const t = L1(), { toast: e } = ax(), [n, i] = b.useState(false), [a, s] = b.useState(false), r = () => {
      const f = document.createElement("a");
      f.href = Jy, f.download = "Amritaraj_Nair_Resume.pdf", document.body.appendChild(f), f.click(), document.body.removeChild(f);
    }, o = async () => {
      try {
        await navigator.clipboard.writeText(To), i(true), e({
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
${To}

Best regards`);
      window.open(`mailto:?subject=${f}&body=${h}`, "_blank");
    }, u = () => {
      const f = encodeURIComponent(To);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${f}`, "_blank");
    }, c = async () => {
      if (navigator.share) try {
        await navigator.share({
          title: "Amritaraj Nair \u2014 Resume",
          text: "Check out Amritaraj Nair's resume",
          url: To
        });
      } catch {
      }
      else s(!a);
    };
    return x.jsxs("div", {
      className: "min-h-screen bg-background relative",
      children: [
        x.jsx(wo.div, {
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
          children: x.jsxs("div", {
            className: "container mx-auto px-6 py-4 flex items-center justify-between",
            children: [
              x.jsxs(Qe, {
                variant: "ghost",
                size: "sm",
                onClick: () => t("/"),
                className: "gap-2 text-muted-foreground hover:text-foreground",
                children: [
                  x.jsx(U2, {
                    className: "h-4 w-4"
                  }),
                  "Back"
                ]
              }),
              x.jsx("h1", {
                className: "text-sm font-medium mono tracking-wider uppercase text-muted-foreground",
                children: "Resume"
              }),
              x.jsxs("div", {
                className: "flex gap-2",
                children: [
                  x.jsxs(Qe, {
                    size: "sm",
                    onClick: () => t("/"),
                    className: "gap-2 bg-gradient-to-r from-[#5b4bff] to-[#c341ff] text-white hover:opacity-90",
                    children: [
                      x.jsx(H2, {
                        className: "h-4 w-4"
                      }),
                      "Play the world"
                    ]
                  }),
                  x.jsxs("div", {
                    className: "relative",
                    children: [
                      x.jsxs(Qe, {
                        variant: "outline",
                        size: "sm",
                        onClick: c,
                        className: "gap-2 border-border hover:border-primary/50 hover:bg-primary/5",
                        children: [
                          x.jsx(Y2, {
                            className: "h-4 w-4"
                          }),
                          "Share"
                        ]
                      }),
                      a && x.jsxs(wo.div, {
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
                          x.jsxs("button", {
                            onClick: o,
                            className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors",
                            children: [
                              n ? x.jsx(tg, {
                                className: "h-4 w-4 text-green-400"
                              }) : x.jsx(P2, {
                                className: "h-4 w-4 text-muted-foreground"
                              }),
                              n ? "Copied!" : "Copy link"
                            ]
                          }),
                          x.jsxs("button", {
                            onClick: l,
                            className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors",
                            children: [
                              x.jsx(ng, {
                                className: "h-4 w-4 text-muted-foreground"
                              }),
                              "Send via email"
                            ]
                          }),
                          x.jsxs("button", {
                            onClick: u,
                            className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors",
                            children: [
                              x.jsx(eg, {
                                className: "h-4 w-4 text-muted-foreground"
                              }),
                              "Share on LinkedIn"
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  x.jsxs(Qe, {
                    size: "sm",
                    onClick: r,
                    className: "gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow",
                    children: [
                      x.jsx(cc, {
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
        a && x.jsx("div", {
          className: "fixed inset-0 z-40",
          onClick: () => s(false)
        }),
        x.jsx("div", {
          className: "container mx-auto px-6 py-12",
          children: x.jsxs(wo.div, {
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
              x.jsx("div", {
                className: "rounded-2xl border border-border/50 overflow-hidden bg-white shadow-2xl shadow-primary/5",
                children: x.jsx("object", {
                  data: Jy,
                  type: "application/pdf",
                  className: "w-full",
                  style: {
                    height: "calc(100vh - 160px)",
                    minHeight: "600px"
                  },
                  children: x.jsxs("div", {
                    className: "flex flex-col items-center justify-center py-20 px-6 text-center bg-card",
                    children: [
                      x.jsx("p", {
                        className: "text-muted-foreground mb-4",
                        children: "Your browser doesn't support inline PDF viewing."
                      }),
                      x.jsxs(Qe, {
                        onClick: r,
                        className: "gap-2 bg-primary hover:bg-primary/90",
                        children: [
                          x.jsx(cc, {
                            className: "h-4 w-4"
                          }),
                          "Download Resume PDF"
                        ]
                      })
                    ]
                  })
                })
              }),
              x.jsxs(wo.div, {
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
                  x.jsxs(Qe, {
                    variant: "outline",
                    size: "lg",
                    onClick: r,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      x.jsx(cc, {
                        className: "h-4 w-4"
                      }),
                      "Download Resume"
                    ]
                  }),
                  x.jsxs(Qe, {
                    variant: "outline",
                    size: "lg",
                    onClick: o,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      n ? x.jsx(tg, {
                        className: "h-4 w-4"
                      }) : x.jsx(G2, {
                        className: "h-4 w-4"
                      }),
                      n ? "Link Copied!" : "Copy Share Link"
                    ]
                  }),
                  x.jsxs(Qe, {
                    variant: "outline",
                    size: "lg",
                    onClick: l,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      x.jsx(ng, {
                        className: "h-4 w-4"
                      }),
                      "Email Resume"
                    ]
                  }),
                  x.jsxs(Qe, {
                    variant: "outline",
                    size: "lg",
                    onClick: u,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      x.jsx(eg, {
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
  }, R4 = () => {
    const t = qr();
    return b.useEffect(() => {
      console.error("404 Error: User attempted to access non-existent route:", t.pathname);
    }, [
      t.pathname
    ]), x.jsx("div", {
      className: "flex min-h-screen items-center justify-center bg-gray-100",
      children: x.jsxs("div", {
        className: "text-center",
        children: [
          x.jsx("h1", {
            className: "mb-4 text-4xl font-bold",
            children: "404"
          }),
          x.jsx("p", {
            className: "mb-4 text-xl text-gray-600",
            children: "Oops! Page not found"
          }),
          x.jsx("a", {
            href: "/",
            className: "text-primary underline hover:opacity-90",
            children: "Return to Home"
          })
        ]
      })
    });
  }, O4 = b.lazy(() => BA(() => import("./GamePortfolio-SvjzF_fw.js").then(async (m) => {
    await m.__tla;
    return m;
  }).then((t) => t.b6), [])), D4 = new hO(), N4 = () => x.jsx("div", {
    className: "flex h-[100dvh] items-center justify-center bg-[#160f34] font-mono text-xs uppercase tracking-[0.3em] text-[#9d8bff]",
    children: "Loading world\u2026"
  }), j4 = () => x.jsx(pD, {
    children: x.jsx(pO, {
      client: D4,
      children: x.jsxs(YR, {
        children: [
          x.jsx(CC, {}),
          x.jsx(aM, {}),
          x.jsx(fD, {
            children: x.jsxs(aD, {
              children: [
                x.jsx(ma, {
                  path: "/",
                  element: x.jsx(jD, {})
                }),
                x.jsx(ma, {
                  path: "/play",
                  element: x.jsx(b.Suspense, {
                    fallback: x.jsx(N4, {}),
                    children: x.jsx(O4, {})
                  })
                }),
                x.jsx(ma, {
                  path: "/projects",
                  element: x.jsx(zD, {})
                }),
                x.jsx(ma, {
                  path: "/resume",
                  element: x.jsx(M4, {})
                }),
                x.jsx(ma, {
                  path: "*",
                  element: x.jsx(R4, {})
                })
              ]
            })
          })
        ]
      })
    })
  });
  _A.createRoot(document.getElementById("root")).render(x.jsx(j4, {}));
})();
export {
  Is as L,
  Ze as P,
  z4 as T,
  zg as U,
  wr as Z,
  BA as _,
  __tla,
  U4 as a,
  _ as e,
  md as g,
  x as j,
  b as r,
  a0 as s
};
