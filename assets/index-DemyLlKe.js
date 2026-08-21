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
let kf, wz, VA, _, fd, w, b, av;
let __tla = (async () => {
  var _t2, _e2, _n, _a2, _t3, _e3, _n2, _b2, _t4, _c2, _t5, _e4, _n3, _a3, _i2, _o2, _r2, _aD_instances, s_fn, _d2, _t6, _e5, _t7, _e6, _n4, _lD_instances, a_fn, _f2, _t8, _e7, _n5, _g2, _t9, _e8, _n6, _a4, _i3, _o3, _r3, _s2, _h2;
  function Bw(t, e) {
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
  fd = function(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  };
  var Wy = {
    exports: {}
  }, Vl = {};
  var Pw = Symbol.for("react.transitional.element"), Hw = Symbol.for("react.fragment");
  function tv(t, e, n) {
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
  Vl.Fragment = Hw;
  Vl.jsx = tv;
  Vl.jsxs = tv;
  Wy.exports = Vl;
  let ev, Ul, nv, iv;
  w = Wy.exports;
  ev = {
    exports: {}
  };
  Ul = {};
  nv = {
    exports: {}
  };
  iv = {};
  (function(t) {
    function e(R, N) {
      var O = R.length;
      R.push(N);
      t: for (; 0 < O; ) {
        var z = O - 1 >>> 1, P = R[z];
        if (0 < a(P, N)) R[z] = N, R[O] = P, O = z;
        else break t;
      }
    }
    function n(R) {
      return R.length === 0 ? null : R[0];
    }
    function i(R) {
      if (R.length === 0) return null;
      var N = R[0], O = R.pop();
      if (O !== N) {
        R[0] = O;
        t: for (var z = 0, P = R.length, ft = P >>> 1; z < ft; ) {
          var X = 2 * (z + 1) - 1, $ = R[X], J = X + 1, Tt = R[J];
          if (0 > a($, O)) J < P && 0 > a(Tt, $) ? (R[z] = Tt, R[J] = O, z = J) : (R[z] = $, R[X] = O, z = X);
          else if (J < P && 0 > a(Tt, O)) R[z] = Tt, R[J] = O, z = J;
          else break t;
        }
      }
      return N;
    }
    function a(R, N) {
      var O = R.sortIndex - N.sortIndex;
      return O !== 0 ? O : R.id - N.id;
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
    var l = [], u = [], c = 1, f = null, h = 3, d = false, y = false, v = false, x = false, p = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
    function S(R) {
      for (var N = n(u); N !== null; ) {
        if (N.callback === null) i(u);
        else if (N.startTime <= R) i(u), N.sortIndex = N.expirationTime, e(l, N);
        else break;
        N = n(u);
      }
    }
    function T(R) {
      if (v = false, S(R), !y) if (n(l) !== null) y = true, A || (A = true, V());
      else {
        var N = n(u);
        N !== null && F(T, N.startTime - R);
      }
    }
    var A = false, E = -1, C = 5, D = -1;
    function j() {
      return x ? true : !(t.unstable_now() - D < C);
    }
    function B() {
      if (x = false, A) {
        var R = t.unstable_now();
        D = R;
        var N = true;
        try {
          t: {
            y = false, v && (v = false, m(E), E = -1), d = true;
            var O = h;
            try {
              e: {
                for (S(R), f = n(l); f !== null && !(f.expirationTime > R && j()); ) {
                  var z = f.callback;
                  if (typeof z == "function") {
                    f.callback = null, h = f.priorityLevel;
                    var P = z(f.expirationTime <= R);
                    if (R = t.unstable_now(), typeof P == "function") {
                      f.callback = P, S(R), N = true;
                      break e;
                    }
                    f === n(l) && i(l), S(R);
                  } else i(l);
                  f = n(l);
                }
                if (f !== null) N = true;
                else {
                  var ft = n(u);
                  ft !== null && F(T, ft.startTime - R), N = false;
                }
              }
              break t;
            } finally {
              f = null, h = O, d = false;
            }
            N = void 0;
          }
        } finally {
          N ? V() : A = false;
        }
      }
    }
    var V;
    if (typeof g == "function") V = function() {
      g(B);
    };
    else if (typeof MessageChannel < "u") {
      var Q = new MessageChannel(), L = Q.port2;
      Q.port1.onmessage = B, V = function() {
        L.postMessage(null);
      };
    } else V = function() {
      p(B, 0);
    };
    function F(R, N) {
      E = p(function() {
        R(t.unstable_now());
      }, N);
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
          var N = 3;
          break;
        default:
          N = h;
      }
      var O = h;
      h = N;
      try {
        return R();
      } finally {
        h = O;
      }
    }, t.unstable_requestPaint = function() {
      x = true;
    }, t.unstable_runWithPriority = function(R, N) {
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
        return N();
      } finally {
        h = O;
      }
    }, t.unstable_scheduleCallback = function(R, N, O) {
      var z = t.unstable_now();
      switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? z + O : z) : O = z, R) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = O + P, R = {
        id: c++,
        callback: N,
        priorityLevel: R,
        startTime: O,
        expirationTime: P,
        sortIndex: -1
      }, O > z ? (R.sortIndex = O, e(u, R), n(l) === null && R === n(u) && (v ? (m(E), E = -1) : v = true, F(T, O - z))) : (R.sortIndex = P, e(l, R), y || d || (y = true, A || (A = true, V()))), R;
    }, t.unstable_shouldYield = j, t.unstable_wrapCallback = function(R) {
      var N = h;
      return function() {
        var O = h;
        h = N;
        try {
          return R.apply(this, arguments);
        } finally {
          h = O;
        }
      };
    };
  })(iv);
  nv.exports = iv;
  av = nv.exports;
  wz = fd(av);
  var sv = {
    exports: {}
  }, G = {};
  var dd = Symbol.for("react.transitional.element"), kw = Symbol.for("react.portal"), Gw = Symbol.for("react.fragment"), Yw = Symbol.for("react.strict_mode"), qw = Symbol.for("react.profiler"), Fw = Symbol.for("react.consumer"), Xw = Symbol.for("react.context"), Qw = Symbol.for("react.forward_ref"), Kw = Symbol.for("react.suspense"), Zw = Symbol.for("react.memo"), ov = Symbol.for("react.lazy"), $w = Symbol.for("react.activity"), vm = Symbol.iterator;
  function Jw(t) {
    return t === null || typeof t != "object" ? null : (t = vm && t[vm] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var rv = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, lv = Object.assign, uv = {};
  function ns(t, e, n) {
    this.props = t, this.context = e, this.refs = uv, this.updater = n || rv;
  }
  ns.prototype.isReactComponent = {};
  ns.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState");
  };
  ns.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function cv() {
  }
  cv.prototype = ns.prototype;
  function hd(t, e, n) {
    this.props = t, this.context = e, this.refs = uv, this.updater = n || rv;
  }
  var md = hd.prototype = new cv();
  md.constructor = hd;
  lv(md, ns.prototype);
  md.isPureReactComponent = true;
  var bm = Array.isArray;
  function Dc() {
  }
  var pt = {
    H: null,
    A: null,
    T: null,
    S: null
  }, fv = Object.prototype.hasOwnProperty;
  function pd(t, e, n) {
    var i = n.ref;
    return {
      $$typeof: dd,
      type: t,
      key: e,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  function Iw(t, e) {
    return pd(t.type, e, t.props);
  }
  function gd(t) {
    return typeof t == "object" && t !== null && t.$$typeof === dd;
  }
  function Ww(t) {
    var e = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
      return e[n];
    });
  }
  var xm = /\/+/g;
  function xu(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Ww("" + t.key) : e.toString(36);
  }
  function tT(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(Dc, Dc) : (t.status = "pending", t.then(function(e) {
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
          case dd:
          case kw:
            o = true;
            break;
          case ov:
            return o = t._init, ca(o(t._payload), e, n, i, a);
        }
    }
    if (o) return a = a(t), o = i === "" ? "." + xu(t, 0) : i, bm(a) ? (n = "", o != null && (n = o.replace(xm, "$&/") + "/"), ca(a, e, n, "", function(u) {
      return u;
    })) : a != null && (gd(a) && (a = Iw(a, n + (a.key == null || t && t.key === a.key ? "" : ("" + a.key).replace(xm, "$&/") + "/") + o)), e.push(a)), 1;
    o = 0;
    var r = i === "" ? "." : i + ":";
    if (bm(t)) for (var l = 0; l < t.length; l++) i = t[l], s = r + xu(i, l), o += ca(i, e, n, s, a);
    else if (l = Jw(t), typeof l == "function") for (t = l.call(t), l = 0; !(i = t.next()).done; ) i = i.value, s = r + xu(i, l++), o += ca(i, e, n, s, a);
    else if (s === "object") {
      if (typeof t.then == "function") return ca(tT(t), e, n, i, a);
      throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    }
    return o;
  }
  function Ko(t, e, n) {
    if (t == null) return t;
    var i = [], a = 0;
    return ca(t, i, "", "", function(s) {
      return e.call(n, s, a++);
    }), i;
  }
  function eT(t) {
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
  }, nT = {
    map: Ko,
    forEach: function(t, e, n) {
      Ko(t, function() {
        e.apply(this, arguments);
      }, n);
    },
    count: function(t) {
      var e = 0;
      return Ko(t, function() {
        e++;
      }), e;
    },
    toArray: function(t) {
      return Ko(t, function(e) {
        return e;
      }) || [];
    },
    only: function(t) {
      if (!gd(t)) throw Error("React.Children.only expected to receive a single React element child.");
      return t;
    }
  };
  G.Activity = $w;
  G.Children = nT;
  G.Component = ns;
  G.Fragment = Gw;
  G.Profiler = qw;
  G.PureComponent = hd;
  G.StrictMode = Yw;
  G.Suspense = Kw;
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
    var i = lv({}, t.props), a = t.key;
    if (e != null) for (s in e.key !== void 0 && (a = "" + e.key), e) !fv.call(e, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && e.ref === void 0 || (i[s] = e[s]);
    var s = arguments.length - 2;
    if (s === 1) i.children = n;
    else if (1 < s) {
      for (var o = Array(s), r = 0; r < s; r++) o[r] = arguments[r + 2];
      i.children = o;
    }
    return pd(t.type, a, i);
  };
  G.createContext = function(t) {
    return t = {
      $$typeof: Xw,
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
    if (e != null) for (i in e.key !== void 0 && (s = "" + e.key), e) fv.call(e, i) && i !== "key" && i !== "__self" && i !== "__source" && (a[i] = e[i]);
    var o = arguments.length - 2;
    if (o === 1) a.children = n;
    else if (1 < o) {
      for (var r = Array(o), l = 0; l < o; l++) r[l] = arguments[l + 2];
      a.children = r;
    }
    if (t && t.defaultProps) for (i in o = t.defaultProps, o) a[i] === void 0 && (a[i] = o[i]);
    return pd(t, s, a);
  };
  G.createRef = function() {
    return {
      current: null
    };
  };
  G.forwardRef = function(t) {
    return {
      $$typeof: Qw,
      render: t
    };
  };
  G.isValidElement = gd;
  G.lazy = function(t) {
    return {
      $$typeof: ov,
      _payload: {
        _status: -1,
        _result: t
      },
      _init: eT
    };
  };
  G.memo = function(t, e) {
    return {
      $$typeof: Zw,
      type: t,
      compare: e === void 0 ? null : e
    };
  };
  G.startTransition = function(t) {
    var e = pt.T, n = {};
    pt.T = n;
    try {
      var i = t(), a = pt.S;
      a !== null && a(n, i), typeof i == "object" && i !== null && typeof i.then == "function" && i.then(Dc, Sm);
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
  sv.exports = G;
  b = sv.exports;
  let dv;
  _ = fd(b);
  dv = Bw({
    __proto__: null,
    default: _
  }, [
    b
  ]);
  var hv = {
    exports: {}
  }, Jt = {};
  var iT = b;
  function mv(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Un() {
  }
  var Kt = {
    d: {
      f: Un,
      r: function() {
        throw Error(mv(522));
      },
      D: Un,
      C: Un,
      L: Un,
      m: Un,
      X: Un,
      S: Un,
      M: Un
    },
    p: 0,
    findDOMNode: null
  }, aT = Symbol.for("react.portal");
  function sT(t, e, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: aT,
      key: i == null ? null : "" + i,
      children: t,
      containerInfo: e,
      implementation: n
    };
  }
  var Vs = iT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Bl(t, e) {
    if (t === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Kt;
  Jt.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(mv(299));
    return sT(t, e, null, n);
  };
  Jt.flushSync = function(t) {
    var e = Vs.T, n = Kt.p;
    try {
      if (Vs.T = null, Kt.p = 2, t) return t();
    } finally {
      Vs.T = e, Kt.p = n, Kt.d.f();
    }
  };
  Jt.preconnect = function(t, e) {
    typeof t == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, Kt.d.C(t, e));
  };
  Jt.prefetchDNS = function(t) {
    typeof t == "string" && Kt.d.D(t);
  };
  Jt.preinit = function(t, e) {
    if (typeof t == "string" && e && typeof e.as == "string") {
      var n = e.as, i = Bl(n, e.crossOrigin), a = typeof e.integrity == "string" ? e.integrity : void 0, s = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
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
  Jt.preinitModule = function(t, e) {
    if (typeof t == "string") if (typeof e == "object" && e !== null) {
      if (e.as == null || e.as === "script") {
        var n = Bl(e.as, e.crossOrigin);
        Kt.d.M(t, {
          crossOrigin: n,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    } else e == null && Kt.d.M(t);
  };
  Jt.preload = function(t, e) {
    if (typeof t == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
      var n = e.as, i = Bl(n, e.crossOrigin);
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
  Jt.preloadModule = function(t, e) {
    if (typeof t == "string") if (e) {
      var n = Bl(e.as, e.crossOrigin);
      Kt.d.m(t, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: n,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      });
    } else Kt.d.m(t);
  };
  Jt.requestFormReset = function(t) {
    Kt.d.r(t);
  };
  Jt.unstable_batchedUpdates = function(t, e) {
    return t(e);
  };
  Jt.useFormState = function(t, e, n) {
    return Vs.H.useFormState(t, e, n);
  };
  Jt.useFormStatus = function() {
    return Vs.H.useHostTransitionStatus();
  };
  Jt.version = "19.2.5";
  function pv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pv);
    } catch (t) {
      console.error(t);
    }
  }
  pv(), hv.exports = Jt;
  var Mo = hv.exports;
  const gv = fd(Mo);
  var Lt = av, yv = b, oT = Mo;
  function M(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function vv(t) {
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
  function bv(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function xv(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function wm(t) {
    if (Ro(t) !== t) throw Error(M(188));
  }
  function rT(t) {
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
          if (s === n) return wm(a), t;
          if (s === i) return wm(a), e;
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
  function Sv(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = Sv(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var gt = Object.assign, lT = Symbol.for("react.element"), Zo = Symbol.for("react.transitional.element"), Ds = Symbol.for("react.portal"), ma = Symbol.for("react.fragment"), wv = Symbol.for("react.strict_mode"), Oc = Symbol.for("react.profiler"), Tv = Symbol.for("react.consumer"), gn = Symbol.for("react.context"), yd = Symbol.for("react.forward_ref"), Nc = Symbol.for("react.suspense"), zc = Symbol.for("react.suspense_list"), vd = Symbol.for("react.memo"), kn = Symbol.for("react.lazy"), jc = Symbol.for("react.activity"), uT = Symbol.for("react.memo_cache_sentinel"), Tm = Symbol.iterator;
  function bs(t) {
    return t === null || typeof t != "object" ? null : (t = Tm && t[Tm] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var cT = Symbol.for("react.client.reference");
  function _c(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === cT ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ma:
        return "Fragment";
      case Oc:
        return "Profiler";
      case wv:
        return "StrictMode";
      case Nc:
        return "Suspense";
      case zc:
        return "SuspenseList";
      case jc:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case Ds:
        return "Portal";
      case gn:
        return t.displayName || "Context";
      case Tv:
        return (t._context.displayName || "Context") + ".Consumer";
      case yd:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case vd:
        return e = t.displayName || null, e !== null ? e : _c(t.type) || "Memo";
      case kn:
        e = t._payload, t = t._init;
        try {
          return _c(t(e));
        } catch {
        }
    }
    return null;
  }
  var Os = Array.isArray, H = yv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, et = oT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ui = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, Lc = [], pa = -1;
  function sn(t) {
    return {
      current: t
    };
  }
  function Bt(t) {
    0 > pa || (t.current = Lc[pa], Lc[pa] = null, pa--);
  }
  function ut(t, e) {
    pa++, Lc[pa] = t.current, t.current = e;
  }
  var We = sn(null), eo = sn(null), ti = sn(null), Fr = sn(null);
  function Xr(t, e) {
    switch (ut(ti, e), ut(eo, t), ut(We, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Dp(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = Dp(e), t = Yb(e, t);
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
    Bt(We), ut(We, t);
  }
  function ka() {
    Bt(We), Bt(eo), Bt(ti);
  }
  function Vc(t) {
    t.memoizedState !== null && ut(Fr, t);
    var e = We.current, n = Yb(e, t.type);
    e !== n && (ut(eo, t), ut(We, n));
  }
  function Qr(t) {
    eo.current === t && (Bt(We), Bt(eo)), Fr.current === t && (Bt(Fr), ho._currentValue = Ui);
  }
  var Su, Em;
  function Oi(t) {
    if (Su === void 0) try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Su = e && e[1] || "", Em = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Su + t + Em;
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
  function fT(t, e) {
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
  function Am(t) {
    try {
      var e = "", n = null;
      do
        e += fT(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Uc = Object.prototype.hasOwnProperty, bd = Lt.unstable_scheduleCallback, Eu = Lt.unstable_cancelCallback, dT = Lt.unstable_shouldYield, hT = Lt.unstable_requestPaint, he = Lt.unstable_now, mT = Lt.unstable_getCurrentPriorityLevel, Ev = Lt.unstable_ImmediatePriority, Av = Lt.unstable_UserBlockingPriority, Kr = Lt.unstable_NormalPriority, pT = Lt.unstable_LowPriority, Cv = Lt.unstable_IdlePriority, gT = Lt.log, yT = Lt.unstable_setDisableYieldValue, Do = null, me = null;
  function Qn(t) {
    if (typeof gT == "function" && yT(t), me && typeof me.setStrictMode == "function") try {
      me.setStrictMode(Do, t);
    } catch {
    }
  }
  var pe = Math.clz32 ? Math.clz32 : xT, vT = Math.log, bT = Math.LN2;
  function xT(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (vT(t) / bT | 0) | 0;
  }
  var $o = 256, Jo = 262144, Io = 4194304;
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
  function Pl(t, e, n) {
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
  function ST(t, e) {
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
  function Mv() {
    var t = Io;
    return Io <<= 1, !(Io & 62914560) && (Io = 4194304), t;
  }
  function Au(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function No(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function wT(t, e, n, i, a, s) {
    var o = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var r = t.entanglements, l = t.expirationTimes, u = t.hiddenUpdates;
    for (n = o & ~n; 0 < n; ) {
      var c = 31 - pe(n), f = 1 << c;
      r[c] = 0, l[c] = -1;
      var h = u[c];
      if (h !== null) for (u[c] = null, c = 0; c < h.length; c++) {
        var d = h[c];
        d !== null && (d.lane &= -536870913);
      }
      n &= ~f;
    }
    i !== 0 && Rv(t, i, 0), s !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(o & ~e));
  }
  function Rv(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var i = 31 - pe(e);
    t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930;
  }
  function Dv(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var i = 31 - pe(n), a = 1 << i;
      a & e | t[i] & e && (t[i] |= e), n &= ~a;
    }
  }
  function Ov(t, e) {
    var n = e & -e;
    return n = n & 42 ? 1 : xd(n), n & (t.suspendedLanes | e) ? 0 : n;
  }
  function xd(t) {
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
  function Sd(t) {
    return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function Nv() {
    var t = et.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : t1(t.type));
  }
  function Cm(t, e) {
    var n = et.p;
    try {
      return et.p = t, e();
    } finally {
      et.p = n;
    }
  }
  var xi = Math.random().toString(36).slice(2), kt = "__reactFiber$" + xi, se = "__reactProps$" + xi, is = "__reactContainer$" + xi, Bc = "__reactEvents$" + xi, TT = "__reactListeners$" + xi, ET = "__reactHandles$" + xi, Mm = "__reactResources$" + xi, zo = "__reactMarker$" + xi;
  function wd(t) {
    delete t[kt], delete t[se], delete t[Bc], delete t[TT], delete t[ET];
  }
  function ga(t) {
    var e = t[kt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[is] || n[kt]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = _p(t); t !== null; ) {
          if (n = t[kt]) return n;
          t = _p(t);
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
  function Ns(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(M(33));
  }
  function Na(t) {
    var e = t[Mm];
    return e || (e = t[Mm] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), e;
  }
  function Ut(t) {
    t[zo] = true;
  }
  var zv = /* @__PURE__ */ new Set(), jv = {};
  function Zi(t, e) {
    Ga(t, e), Ga(t + "Capture", e);
  }
  function Ga(t, e) {
    for (jv[t] = e, t = 0; t < e.length; t++) zv.add(e[t]);
  }
  var AT = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Rm = {}, Dm = {};
  function CT(t) {
    return Uc.call(Dm, t) ? true : Uc.call(Rm, t) ? false : AT.test(t) ? Dm[t] = true : (Rm[t] = true, false);
  }
  function xr(t, e, n) {
    if (CT(e)) if (n === null) t.removeAttribute(e);
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
  function Wo(t, e, n) {
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
  function Te(t) {
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
  function _v(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function MT(t, e, n) {
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
  function Pc(t) {
    if (!t._valueTracker) {
      var e = _v(t) ? "checked" : "value";
      t._valueTracker = MT(t, e, "" + t[e]);
    }
  }
  function Lv(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var n = e.getValue(), i = "";
    return t && (i = _v(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), true) : false;
  }
  function Zr(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var RT = /[\n"\\]/g;
  function Ce(t) {
    return t.replace(RT, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Hc(t, e, n, i, a, s, o, r) {
    t.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.type = o : t.removeAttribute("type"), e != null ? o === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Te(e)) : t.value !== "" + Te(e) && (t.value = "" + Te(e)) : o !== "submit" && o !== "reset" || t.removeAttribute("value"), e != null ? kc(t, o, Te(e)) : n != null ? kc(t, o, Te(n)) : i != null && t.removeAttribute("value"), a == null && s != null && (t.defaultChecked = !!s), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.name = "" + Te(r) : t.removeAttribute("name");
  }
  function Vv(t, e, n, i, a, s, o, r) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), e != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || e != null)) {
        Pc(t);
        return;
      }
      n = n != null ? "" + Te(n) : "", e = e != null ? "" + Te(e) : n, r || e === t.value || (t.value = e), t.defaultValue = e;
    }
    i = i ?? a, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = r ? t.checked : !!i, t.defaultChecked = !!i, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.name = o), Pc(t);
  }
  function kc(t, e, n) {
    e === "number" && Zr(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function za(t, e, n, i) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < n.length; a++) e["$" + n[a]] = true;
      for (n = 0; n < t.length; n++) a = e.hasOwnProperty("$" + t[n].value), t[n].selected !== a && (t[n].selected = a), a && i && (t[n].defaultSelected = true);
    } else {
      for (n = "" + Te(n), e = null, a = 0; a < t.length; a++) {
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
    if (e != null && (e = "" + Te(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Te(n) : "";
  }
  function Bv(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(M(92));
        if (Os(i)) {
          if (1 < i.length) throw Error(M(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), e = n;
    }
    n = Te(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i), Pc(t);
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
  var DT = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Om(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || DT.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Pv(t, e, n) {
    if (e != null && typeof e != "object") throw Error(M(62));
    if (t = t.style, n != null) {
      for (var i in n) !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
      for (var a in e) i = e[a], e.hasOwnProperty(a) && n[a] !== i && Om(t, a, i);
    } else for (var s in e) e.hasOwnProperty(s) && Om(t, s, e[s]);
  }
  function Td(t) {
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
  var OT = /* @__PURE__ */ new Map([
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
  ]), NT = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Sr(t) {
    return NT.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function yn() {
  }
  var Gc = null;
  function Ed(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ya = null, ja = null;
  function Nm(t) {
    var e = as(t);
    if (e && (t = e.stateNode)) {
      var n = t[se] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Hc(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Ce("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var a = i[se] || null;
                if (!a) throw Error(M(90));
                Hc(i, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
              }
            }
            for (e = 0; e < n.length; e++) i = n[e], i.form === t.form && Lv(i);
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
  var Cu = false;
  function Hv(t, e, n) {
    if (Cu) return t(e, n);
    Cu = true;
    try {
      var i = t(e);
      return i;
    } finally {
      if (Cu = false, (ya !== null || ja !== null) && (Jl(), ya && (e = ya, t = ja, ja = ya = null, Nm(e), t))) for (e = 0; e < t.length; e++) Nm(t[e]);
    }
  }
  function no(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[se] || null;
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
  var Tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yc = false;
  if (Tn) try {
    var xs = {};
    Object.defineProperty(xs, "passive", {
      get: function() {
        Yc = true;
      }
    }), window.addEventListener("test", xs, xs), window.removeEventListener("test", xs, xs);
  } catch {
    Yc = false;
  }
  var Kn = null, Ad = null, wr = null;
  function kv() {
    if (wr) return wr;
    var t, e = Ad, n = e.length, i, a = "value" in Kn ? Kn.value : Kn.textContent, s = a.length;
    for (t = 0; t < n && e[t] === a[t]; t++) ;
    var o = n - t;
    for (i = 1; i <= o && e[n - i] === a[s - i]; i++) ;
    return wr = a.slice(t, 1 < i ? 1 - i : void 0);
  }
  function Tr(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function tr() {
    return true;
  }
  function zm() {
    return false;
  }
  function oe(t) {
    function e(n, i, a, s, o) {
      this._reactName = n, this._targetInst = a, this.type = i, this.nativeEvent = s, this.target = o, this.currentTarget = null;
      for (var r in t) t.hasOwnProperty(r) && (n = t[r], this[r] = n ? n(s) : s[r]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === false) ? tr : zm, this.isPropagationStopped = zm, this;
    }
    return gt(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = tr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = tr);
      },
      persist: function() {
      },
      isPersistent: tr
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
  }, Hl = oe($i), jo = gt({}, $i, {
    view: 0,
    detail: 0
  }), zT = oe(jo), Mu, Ru, Ss, kl = gt({}, jo, {
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
    getModifierState: Cd,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ss && (Ss && t.type === "mousemove" ? (Mu = t.screenX - Ss.screenX, Ru = t.screenY - Ss.screenY) : Ru = Mu = 0, Ss = t), Mu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ru;
    }
  }), jm = oe(kl), jT = gt({}, kl, {
    dataTransfer: 0
  }), _T = oe(jT), LT = gt({}, jo, {
    relatedTarget: 0
  }), Du = oe(LT), VT = gt({}, $i, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), UT = oe(VT), BT = gt({}, $i, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), PT = oe(BT), HT = gt({}, $i, {
    data: 0
  }), _m = oe(HT), kT = {
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
  }, GT = {
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
  }, YT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function qT(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = YT[t]) ? !!e[t] : false;
  }
  function Cd() {
    return qT;
  }
  var FT = gt({}, jo, {
    key: function(t) {
      if (t.key) {
        var e = kT[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Tr(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? GT[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Cd,
    charCode: function(t) {
      return t.type === "keypress" ? Tr(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Tr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), XT = oe(FT), QT = gt({}, kl, {
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
  }), Lm = oe(QT), KT = gt({}, jo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cd
  }), ZT = oe(KT), $T = gt({}, $i, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), JT = oe($T), IT = gt({}, kl, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), WT = oe(IT), tE = gt({}, $i, {
    newState: 0,
    oldState: 0
  }), eE = oe(tE), nE = [
    9,
    13,
    27,
    32
  ], Md = Tn && "CompositionEvent" in window, Us = null;
  Tn && "documentMode" in document && (Us = document.documentMode);
  var iE = Tn && "TextEvent" in window && !Us, Gv = Tn && (!Md || Us && 8 < Us && 11 >= Us), Vm = " ", Um = false;
  function Yv(t, e) {
    switch (t) {
      case "keyup":
        return nE.indexOf(e.keyCode) !== -1;
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
  function qv(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var va = false;
  function aE(t, e) {
    switch (t) {
      case "compositionend":
        return qv(e);
      case "keypress":
        return e.which !== 32 ? null : (Um = true, Vm);
      case "textInput":
        return t = e.data, t === Vm && Um ? null : t;
      default:
        return null;
    }
  }
  function sE(t, e) {
    if (va) return t === "compositionend" || !Md && Yv(t, e) ? (t = kv(), wr = Ad = Kn = null, va = false, t) : null;
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
  function Bm(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!oE[t.type] : e === "textarea";
  }
  function Fv(t, e, n, i) {
    ya ? ja ? ja.push(i) : ja = [
      i
    ] : ya = i, e = hl(e, "onChange"), 0 < e.length && (n = new Hl("onChange", "change", null, n, i), t.push({
      event: n,
      listeners: e
    }));
  }
  var Bs = null, io = null;
  function rE(t) {
    Hb(t, 0);
  }
  function Gl(t) {
    var e = Ns(t);
    if (Lv(e)) return t;
  }
  function Pm(t, e) {
    if (t === "change") return e;
  }
  var Xv = false;
  if (Tn) {
    var Ou;
    if (Tn) {
      var Nu = "oninput" in document;
      if (!Nu) {
        var Hm = document.createElement("div");
        Hm.setAttribute("oninput", "return;"), Nu = typeof Hm.oninput == "function";
      }
      Ou = Nu;
    } else Ou = false;
    Xv = Ou && (!document.documentMode || 9 < document.documentMode);
  }
  function km() {
    Bs && (Bs.detachEvent("onpropertychange", Qv), io = Bs = null);
  }
  function Qv(t) {
    if (t.propertyName === "value" && Gl(io)) {
      var e = [];
      Fv(e, io, t, Ed(t)), Hv(rE, e);
    }
  }
  function lE(t, e, n) {
    t === "focusin" ? (km(), Bs = e, io = n, Bs.attachEvent("onpropertychange", Qv)) : t === "focusout" && km();
  }
  function uE(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Gl(io);
  }
  function cE(t, e) {
    if (t === "click") return Gl(e);
  }
  function fE(t, e) {
    if (t === "input" || t === "change") return Gl(e);
  }
  function dE(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ve = typeof Object.is == "function" ? Object.is : dE;
  function ao(t, e) {
    if (ve(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var n = Object.keys(t), i = Object.keys(e);
    if (n.length !== i.length) return false;
    for (i = 0; i < n.length; i++) {
      var a = n[i];
      if (!Uc.call(e, a) || !ve(t[a], e[a])) return false;
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
  function Kv(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Kv(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function Zv(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Zr(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Zr(t.document);
    }
    return e;
  }
  function Rd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var hE = Tn && "documentMode" in document && 11 >= document.documentMode, ba = null, qc = null, Ps = null, Fc = false;
  function qm(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fc || ba == null || ba !== Zr(i) || (i = ba, "selectionStart" in i && Rd(i) ? i = {
      start: i.selectionStart,
      end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Ps && ao(Ps, i) || (Ps = i, i = hl(qc, "onSelect"), 0 < i.length && (e = new Hl("onSelect", "select", null, e, n), t.push({
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
  }, zu = {}, $v = {};
  Tn && ($v = document.createElement("div").style, "AnimationEvent" in window || (delete xa.animationend.animation, delete xa.animationiteration.animation, delete xa.animationstart.animation), "TransitionEvent" in window || delete xa.transitionend.transition);
  function Ji(t) {
    if (zu[t]) return zu[t];
    if (!xa[t]) return t;
    var e = xa[t], n;
    for (n in e) if (e.hasOwnProperty(n) && n in $v) return zu[t] = e[n];
    return t;
  }
  var Jv = Ji("animationend"), Iv = Ji("animationiteration"), Wv = Ji("animationstart"), mE = Ji("transitionrun"), pE = Ji("transitionstart"), gE = Ji("transitioncancel"), t0 = Ji("transitionend"), e0 = /* @__PURE__ */ new Map(), Xc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Xc.push("scrollEnd");
  function Qe(t, e) {
    e0.set(t, e), Zi(e, [
      t
    ]);
  }
  var $r = typeof reportError == "function" ? reportError : function(t) {
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
  }, we = [], Sa = 0, Dd = 0;
  function Yl() {
    for (var t = Sa, e = Dd = Sa = 0; e < t; ) {
      var n = we[e];
      we[e++] = null;
      var i = we[e];
      we[e++] = null;
      var a = we[e];
      we[e++] = null;
      var s = we[e];
      if (we[e++] = null, i !== null && a !== null) {
        var o = i.pending;
        o === null ? a.next = a : (a.next = o.next, o.next = a), i.pending = a;
      }
      s !== 0 && n0(n, a, s);
    }
  }
  function ql(t, e, n, i) {
    we[Sa++] = t, we[Sa++] = e, we[Sa++] = n, we[Sa++] = i, Dd |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
  }
  function Od(t, e, n, i) {
    return ql(t, e, n, i), Jr(t);
  }
  function Ii(t, e) {
    return ql(t, null, null, e), Jr(t);
  }
  function n0(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var a = false, s = t.return; s !== null; ) s.childLanes |= n, i = s.alternate, i !== null && (i.childLanes |= n), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (a = true)), t = s, s = s.return;
    return t.tag === 3 ? (s = t.stateNode, a && e !== null && (a = 31 - pe(n), t = s.hiddenUpdates, i = t[a], i === null ? t[a] = [
      e
    ] : i.push(e), e.lane = n | 536870912), s) : null;
  }
  function Jr(t) {
    if (50 < Ks) throw Ks = 0, mf = null, Error(M(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var wa = {};
  function yE(t, e, n, i) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fe(t, e, n, i) {
    return new yE(t, e, n, i);
  }
  function Nd(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function xn(t, e) {
    var n = t.alternate;
    return n === null ? (n = fe(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function i0(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Er(t, e, n, i, a, s) {
    var o = 0;
    if (i = t, typeof t == "function") Nd(t) && (o = 1);
    else if (typeof t == "string") o = wA(t, n, We.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case jc:
        return t = fe(31, n, e, a), t.elementType = jc, t.lanes = s, t;
      case ma:
        return Bi(n.children, a, s, e);
      case wv:
        o = 8, a |= 24;
        break;
      case Oc:
        return t = fe(12, n, e, a | 2), t.elementType = Oc, t.lanes = s, t;
      case Nc:
        return t = fe(13, n, e, a), t.elementType = Nc, t.lanes = s, t;
      case zc:
        return t = fe(19, n, e, a), t.elementType = zc, t.lanes = s, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case gn:
            o = 10;
            break t;
          case Tv:
            o = 9;
            break t;
          case yd:
            o = 11;
            break t;
          case vd:
            o = 14;
            break t;
          case kn:
            o = 16, i = null;
            break t;
        }
        o = 29, n = Error(M(130, t === null ? "null" : typeof t, "")), i = null;
    }
    return e = fe(o, n, e, a), e.elementType = t, e.type = i, e.lanes = s, e;
  }
  function Bi(t, e, n, i) {
    return t = fe(7, t, i, e), t.lanes = n, t;
  }
  function ju(t, e, n) {
    return t = fe(6, t, null, e), t.lanes = n, t;
  }
  function a0(t) {
    var e = fe(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function _u(t, e, n) {
    return e = fe(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Fm = /* @__PURE__ */ new WeakMap();
  function Me(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Fm.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Am(e)
      }, Fm.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Am(e)
    };
  }
  var Ta = [], Ea = 0, Ir = null, so = 0, Ee = [], Ae = 0, ci = null, Ze = 1, $e = "";
  function mn(t, e) {
    Ta[Ea++] = so, Ta[Ea++] = Ir, Ir = t, so = e;
  }
  function s0(t, e, n) {
    Ee[Ae++] = Ze, Ee[Ae++] = $e, Ee[Ae++] = ci, ci = t;
    var i = Ze;
    t = $e;
    var a = 32 - pe(i) - 1;
    i &= ~(1 << a), n += 1;
    var s = 32 - pe(e) + a;
    if (30 < s) {
      var o = a - a % 5;
      s = (i & (1 << o) - 1).toString(32), i >>= o, a -= o, Ze = 1 << 32 - pe(e) + a | n << a | i, $e = s + t;
    } else Ze = 1 << s | n << a | i, $e = t;
  }
  function zd(t) {
    t.return !== null && (mn(t, 1), s0(t, 1, 0));
  }
  function jd(t) {
    for (; t === Ir; ) Ir = Ta[--Ea], Ta[Ea] = null, so = Ta[--Ea], Ta[Ea] = null;
    for (; t === ci; ) ci = Ee[--Ae], Ee[Ae] = null, $e = Ee[--Ae], Ee[Ae] = null, Ze = Ee[--Ae], Ee[Ae] = null;
  }
  function o0(t, e) {
    Ee[Ae++] = Ze, Ee[Ae++] = $e, Ee[Ae++] = ci, Ze = e.id, $e = e.overflow, ci = t;
  }
  var Gt = null, mt = null, W = false, ei = null, Re = false, Qc = Error(M(519));
  function fi(t) {
    var e = Error(M(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw oo(Me(e, t)), Qc;
  }
  function Xm(t) {
    var e = t.stateNode, n = t.type, i = t.memoizedProps;
    switch (e[kt] = t, e[se] = i, n) {
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
        K("invalid", e), Vv(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, true);
        break;
      case "select":
        K("invalid", e);
        break;
      case "textarea":
        K("invalid", e), Bv(e, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === true || Gb(e.textContent, n) ? (i.popover != null && (K("beforetoggle", e), K("toggle", e)), i.onScroll != null && K("scroll", e), i.onScrollEnd != null && K("scrollend", e), i.onClick != null && (e.onclick = yn), e = true) : e = false, e || fi(t, true);
  }
  function Qm(t) {
    for (Gt = t.return; Gt; ) switch (Gt.tag) {
      case 5:
      case 31:
      case 13:
        Re = false;
        return;
      case 27:
      case 3:
        Re = true;
        return;
      default:
        Gt = Gt.return;
    }
  }
  function la(t) {
    if (t !== Gt) return false;
    if (!W) return Qm(t), W = true, false;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || bf(t.type, t.memoizedProps)), n = !n), n && mt && fi(t), Qm(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(M(317));
      mt = jp(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(M(317));
      mt = jp(t);
    } else e === 27 ? (e = mt, Si(t.type) ? (t = Tf, Tf = null, mt = t) : mt = e) : mt = Gt ? Ne(t.stateNode.nextSibling) : null;
    return true;
  }
  function Yi() {
    mt = Gt = null, W = false;
  }
  function Lu() {
    var t = ei;
    return t !== null && (ee === null ? ee = t : ee.push.apply(ee, t), ei = null), t;
  }
  function oo(t) {
    ei === null ? ei = [
      t
    ] : ei.push(t);
  }
  var Kc = sn(null), Wi = null, vn = null;
  function Yn(t, e, n) {
    ut(Kc, e._currentValue), e._currentValue = n;
  }
  function Sn(t) {
    t._currentValue = Kc.current, Bt(Kc);
  }
  function Zc(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function $c(t, e, n, i) {
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
            s.lanes |= n, r = s.alternate, r !== null && (r.lanes |= n), Zc(s.return, n, t), i || (o = null);
            break t;
          }
          s = r.next;
        }
      } else if (a.tag === 18) {
        if (o = a.return, o === null) throw Error(M(341));
        o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Zc(o, n, t), o = null;
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
          ve(a.pendingProps.value, o.value) || (t !== null ? t.push(r) : t = [
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
    t !== null && $c(e, t, n, i), e.flags |= 262144;
  }
  function Wr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ve(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function qi(t) {
    Wi = t, vn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Yt(t) {
    return r0(Wi, t);
  }
  function er(t, e) {
    return Wi === null && qi(t), r0(t, e);
  }
  function r0(t, e) {
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
  var vE = typeof AbortController < "u" ? AbortController : function() {
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
  }, bE = Lt.unstable_scheduleCallback, xE = Lt.unstable_NormalPriority, Dt = {
    $$typeof: gn,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _d() {
    return {
      controller: new vE(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function _o(t) {
    t.refCount--, t.refCount === 0 && bE(xE, function() {
      t.controller.abort();
    });
  }
  var Hs = null, Jc = 0, qa = 0, _a = null;
  function SE(t, e) {
    if (Hs === null) {
      var n = Hs = [];
      Jc = 0, qa = sh(), _a = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return Jc++, e.then(Km, Km), e;
  }
  function Km() {
    if (--Jc === 0 && Hs !== null) {
      _a !== null && (_a.status = "fulfilled");
      var t = Hs;
      Hs = null, qa = 0, _a = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function wE(t, e) {
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
  var Zm = H.S;
  H.S = function(t, e) {
    Sb = he(), typeof e == "object" && e !== null && typeof e.then == "function" && SE(t, e), Zm !== null && Zm(t, e);
  };
  var Pi = sn(null);
  function Ld() {
    var t = Pi.current;
    return t !== null ? t : lt.pooledCache;
  }
  function Ar(t, e) {
    e === null ? ut(Pi, Pi.current) : ut(Pi, e.pool);
  }
  function l0() {
    var t = Ld();
    return t === null ? null : {
      parent: Dt._currentValue,
      pool: t
    };
  }
  var os = Error(M(460)), Vd = Error(M(474)), Fl = Error(M(542)), tl = {
    then: function() {
    }
  };
  function $m(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function u0(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(yn, yn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Im(t), t;
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
            throw t = e.reason, Im(t), t;
        }
        throw Hi = e, os;
    }
  }
  function zi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Hi = n, os) : n;
    }
  }
  var Hi = null;
  function Jm() {
    if (Hi === null) throw Error(M(459));
    var t = Hi;
    return Hi = null, t;
  }
  function Im(t) {
    if (t === os || t === Fl) throw Error(M(483));
  }
  var La = null, ro = 0;
  function nr(t) {
    var e = ro;
    return ro += 1, La === null && (La = []), u0(La, t, e);
  }
  function ws(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function ir(t, e) {
    throw e.$$typeof === lT ? Error(M(525)) : (t = Object.prototype.toString.call(e), Error(M(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function c0(t) {
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
      return p = xn(p, m), p.index = 0, p.sibling = null, p;
    }
    function s(p, m, g) {
      return p.index = g, t ? (g = p.alternate, g !== null ? (g = g.index, g < m ? (p.flags |= 67108866, m) : g) : (p.flags |= 67108866, m)) : (p.flags |= 1048576, m);
    }
    function o(p) {
      return t && p.alternate === null && (p.flags |= 67108866), p;
    }
    function r(p, m, g, S) {
      return m === null || m.tag !== 6 ? (m = ju(g, p.mode, S), m.return = p, m) : (m = a(m, g), m.return = p, m);
    }
    function l(p, m, g, S) {
      var T = g.type;
      return T === ma ? c(p, m, g.props.children, S, g.key) : m !== null && (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === kn && zi(T) === m.type) ? (m = a(m, g.props), ws(m, g), m.return = p, m) : (m = Er(g.type, g.key, g.props, null, p.mode, S), ws(m, g), m.return = p, m);
    }
    function u(p, m, g, S) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = _u(g, p.mode, S), m.return = p, m) : (m = a(m, g.children || []), m.return = p, m);
    }
    function c(p, m, g, S, T) {
      return m === null || m.tag !== 7 ? (m = Bi(g, p.mode, S, T), m.return = p, m) : (m = a(m, g), m.return = p, m);
    }
    function f(p, m, g) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return m = ju("" + m, p.mode, g), m.return = p, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Zo:
            return g = Er(m.type, m.key, m.props, null, p.mode, g), ws(g, m), g.return = p, g;
          case Ds:
            return m = _u(m, p.mode, g), m.return = p, m;
          case kn:
            return m = zi(m), f(p, m, g);
        }
        if (Os(m) || bs(m)) return m = Bi(m, p.mode, g, null), m.return = p, m;
        if (typeof m.then == "function") return f(p, nr(m), g);
        if (m.$$typeof === gn) return f(p, er(p, m), g);
        ir(p, m);
      }
      return null;
    }
    function h(p, m, g, S) {
      var T = m !== null ? m.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return T !== null ? null : r(p, m, "" + g, S);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Zo:
            return g.key === T ? l(p, m, g, S) : null;
          case Ds:
            return g.key === T ? u(p, m, g, S) : null;
          case kn:
            return g = zi(g), h(p, m, g, S);
        }
        if (Os(g) || bs(g)) return T !== null ? null : c(p, m, g, S, null);
        if (typeof g.then == "function") return h(p, m, nr(g), S);
        if (g.$$typeof === gn) return h(p, m, er(p, g), S);
        ir(p, g);
      }
      return null;
    }
    function d(p, m, g, S, T) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return p = p.get(g) || null, r(m, p, "" + S, T);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Zo:
            return p = p.get(S.key === null ? g : S.key) || null, l(m, p, S, T);
          case Ds:
            return p = p.get(S.key === null ? g : S.key) || null, u(m, p, S, T);
          case kn:
            return S = zi(S), d(p, m, g, S, T);
        }
        if (Os(S) || bs(S)) return p = p.get(g) || null, c(m, p, S, T, null);
        if (typeof S.then == "function") return d(p, m, g, nr(S), T);
        if (S.$$typeof === gn) return d(p, m, g, er(m, S), T);
        ir(m, S);
      }
      return null;
    }
    function y(p, m, g, S) {
      for (var T = null, A = null, E = m, C = m = 0, D = null; E !== null && C < g.length; C++) {
        E.index > C ? (D = E, E = null) : D = E.sibling;
        var j = h(p, E, g[C], S);
        if (j === null) {
          E === null && (E = D);
          break;
        }
        t && E && j.alternate === null && e(p, E), m = s(j, m, C), A === null ? T = j : A.sibling = j, A = j, E = D;
      }
      if (C === g.length) return n(p, E), W && mn(p, C), T;
      if (E === null) {
        for (; C < g.length; C++) E = f(p, g[C], S), E !== null && (m = s(E, m, C), A === null ? T = E : A.sibling = E, A = E);
        return W && mn(p, C), T;
      }
      for (E = i(E); C < g.length; C++) D = d(E, p, C, g[C], S), D !== null && (t && D.alternate !== null && E.delete(D.key === null ? C : D.key), m = s(D, m, C), A === null ? T = D : A.sibling = D, A = D);
      return t && E.forEach(function(B) {
        return e(p, B);
      }), W && mn(p, C), T;
    }
    function v(p, m, g, S) {
      if (g == null) throw Error(M(151));
      for (var T = null, A = null, E = m, C = m = 0, D = null, j = g.next(); E !== null && !j.done; C++, j = g.next()) {
        E.index > C ? (D = E, E = null) : D = E.sibling;
        var B = h(p, E, j.value, S);
        if (B === null) {
          E === null && (E = D);
          break;
        }
        t && E && B.alternate === null && e(p, E), m = s(B, m, C), A === null ? T = B : A.sibling = B, A = B, E = D;
      }
      if (j.done) return n(p, E), W && mn(p, C), T;
      if (E === null) {
        for (; !j.done; C++, j = g.next()) j = f(p, j.value, S), j !== null && (m = s(j, m, C), A === null ? T = j : A.sibling = j, A = j);
        return W && mn(p, C), T;
      }
      for (E = i(E); !j.done; C++, j = g.next()) j = d(E, p, C, j.value, S), j !== null && (t && j.alternate !== null && E.delete(j.key === null ? C : j.key), m = s(j, m, C), A === null ? T = j : A.sibling = j, A = j);
      return t && E.forEach(function(V) {
        return e(p, V);
      }), W && mn(p, C), T;
    }
    function x(p, m, g, S) {
      if (typeof g == "object" && g !== null && g.type === ma && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Zo:
            t: {
              for (var T = g.key; m !== null; ) {
                if (m.key === T) {
                  if (T = g.type, T === ma) {
                    if (m.tag === 7) {
                      n(p, m.sibling), S = a(m, g.props.children), S.return = p, p = S;
                      break t;
                    }
                  } else if (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === kn && zi(T) === m.type) {
                    n(p, m.sibling), S = a(m, g.props), ws(S, g), S.return = p, p = S;
                    break t;
                  }
                  n(p, m);
                  break;
                } else e(p, m);
                m = m.sibling;
              }
              g.type === ma ? (S = Bi(g.props.children, p.mode, S, g.key), S.return = p, p = S) : (S = Er(g.type, g.key, g.props, null, p.mode, S), ws(S, g), S.return = p, p = S);
            }
            return o(p);
          case Ds:
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
          case kn:
            return g = zi(g), x(p, m, g, S);
        }
        if (Os(g)) return y(p, m, g, S);
        if (bs(g)) {
          if (T = bs(g), typeof T != "function") throw Error(M(150));
          return g = T.call(g), v(p, m, g, S);
        }
        if (typeof g.then == "function") return x(p, m, nr(g), S);
        if (g.$$typeof === gn) return x(p, m, er(p, g), S);
        ir(p, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, m !== null && m.tag === 6 ? (n(p, m.sibling), S = a(m, g), S.return = p, p = S) : (n(p, m), S = ju(g, p.mode, S), S.return = p, p = S), o(p)) : n(p, m);
    }
    return function(p, m, g, S) {
      try {
        ro = 0;
        var T = x(p, m, g, S);
        return La = null, T;
      } catch (E) {
        if (E === os || E === Fl) throw E;
        var A = fe(29, E, null, p.mode);
        return A.lanes = S, A.return = p, A;
      } finally {
      }
    };
  }
  var Fi = c0(true), f0 = c0(false), Gn = false;
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
  function Ic(t, e) {
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
      return a === null ? e.next = e : (e.next = a.next, a.next = e), i.pending = e, e = Jr(t), n0(t, null, n), e;
    }
    return ql(t, i, e, n), Jr(t);
  }
  function ks(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, Dv(t, n);
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
  var Wc = false;
  function Gs() {
    if (Wc) {
      var t = _a;
      if (t !== null) throw t;
    }
  }
  function Ys(t, e, n, i) {
    Wc = false;
    var a = t.updateQueue;
    Gn = false;
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
          h !== 0 && h === qa && (Wc = true), c !== null && (c = c.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          t: {
            var y = t, v = r;
            h = e;
            var x = n;
            switch (v.tag) {
              case 1:
                if (y = v.payload, typeof y == "function") {
                  f = y.call(x, f, h);
                  break t;
                }
                f = y;
                break t;
              case 3:
                y.flags = y.flags & -65537 | 128;
              case 0:
                if (y = v.payload, h = typeof y == "function" ? y.call(x, f, h) : y, h == null) break t;
                f = gt({}, f, h);
                break t;
              case 2:
                Gn = true;
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
      c === null && (l = f), a.baseState = l, a.firstBaseUpdate = u, a.lastBaseUpdate = c, s === null && (a.shared.lanes = 0), hi |= o, t.lanes = o, t.memoizedState = f;
    }
  }
  function d0(t, e) {
    if (typeof t != "function") throw Error(M(191, t));
    t.call(e);
  }
  function h0(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) d0(n[t], e);
  }
  var Fa = sn(null), el = sn(0);
  function Wm(t, e) {
    t = Mn, ut(el, t), ut(Fa, e), Mn = t | e.baseLanes;
  }
  function tf() {
    ut(el, Mn), ut(Fa, Fa.current);
  }
  function Bd() {
    Mn = el.current, Bt(Fa), Bt(el);
  }
  var be = sn(null), Oe = null;
  function qn(t) {
    var e = t.alternate;
    ut(Et, Et.current & 1), ut(be, t), Oe === null && (e === null || Fa.current !== null || e.memoizedState !== null) && (Oe = t);
  }
  function ef(t) {
    ut(Et, Et.current), ut(be, t), Oe === null && (Oe = t);
  }
  function m0(t) {
    t.tag === 22 ? (ut(Et, Et.current), ut(be, t), Oe === null && (Oe = t)) : Fn();
  }
  function Fn() {
    ut(Et, Et.current), ut(be, be.current);
  }
  function ue(t) {
    Bt(be), Oe === t && (Oe = null), Bt(Et);
  }
  var Et = sn(0);
  function nl(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Sf(n) || wf(n))) return e;
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
  var En = 0, Y = null, rt = null, Mt = null, il = false, Va = false, Xi = false, al = 0, lo = 0, Ua = null, TE = 0;
  function St() {
    throw Error(M(321));
  }
  function Pd(t, e) {
    if (e === null) return false;
    for (var n = 0; n < e.length && n < t.length; n++) if (!ve(t[n], e[n])) return false;
    return true;
  }
  function Hd(t, e, n, i, a, s) {
    return En = s, Y = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, H.H = t === null || t.memoizedState === null ? F0 : Jd, Xi = false, s = n(i, a), Xi = false, Va && (s = g0(e, n, i, a)), p0(t), s;
  }
  function p0(t) {
    H.H = uo;
    var e = rt !== null && rt.next !== null;
    if (En = 0, Mt = rt = Y = null, il = false, lo = 0, Ua = null, e) throw Error(M(300));
    t === null || Ot || (t = t.dependencies, t !== null && Wr(t) && (Ot = true));
  }
  function g0(t, e, n, i) {
    Y = t;
    var a = 0;
    do {
      if (Va && (Ua = null), lo = 0, Va = false, 25 <= a) throw Error(M(301));
      if (a += 1, Mt = rt = null, t.updateQueue != null) {
        var s = t.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      H.H = X0, s = e(n, i);
    } while (Va);
    return s;
  }
  function EE() {
    var t = H.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Lo(e) : e, t = t.useState()[0], (rt !== null ? rt.memoizedState : null) !== t && (Y.flags |= 1024), e;
  }
  function kd() {
    var t = al !== 0;
    return al = 0, t;
  }
  function Gd(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Yd(t) {
    if (il) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      il = false;
    }
    En = 0, Mt = rt = Y = null, Va = false, lo = al = 0, Ua = null;
  }
  function Xt() {
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
  function Xl() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Lo(t) {
    var e = lo;
    return lo += 1, Ua === null && (Ua = []), t = u0(Ua, t, e), e = Y, (Mt === null ? e.memoizedState : Mt.next) === null && (e = e.alternate, H.H = e === null || e.memoizedState === null ? F0 : Jd), t;
  }
  function Ql(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Lo(t);
      if (t.$$typeof === gn) return Yt(t);
    }
    throw Error(M(438, String(t)));
  }
  function qd(t) {
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
    }), n === null && (n = Xl(), Y.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0) for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = uT;
    return e.index++, n;
  }
  function An(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Cr(t) {
    var e = At();
    return Fd(e, rt, t);
  }
  function Fd(t, e, n) {
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
        if (f !== u.lane ? (I & f) === f : (En & f) === f) {
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
          else if ((En & h) === h) {
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
          }, l === null ? (r = l = f, o = s) : l = l.next = f, Y.lanes |= h, hi |= h;
          f = u.action, Xi && n(s, f), s = u.hasEagerState ? u.eagerState : n(s, f);
        } else h = {
          lane: f,
          revertLane: u.revertLane,
          gesture: u.gesture,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }, l === null ? (r = l = h, o = s) : l = l.next = h, Y.lanes |= f, hi |= f;
        u = u.next;
      } while (u !== null && u !== e);
      if (l === null ? o = s : l.next = r, !ve(s, t.memoizedState) && (Ot = true, c && (n = _a, n !== null))) throw n;
      t.memoizedState = s, t.baseState = o, t.baseQueue = l, i.lastRenderedState = s;
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
      var o = a = a.next;
      do
        s = t(s, o.action), o = o.next;
      while (o !== a);
      ve(s, e.memoizedState) || (Ot = true), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s;
    }
    return [
      s,
      i
    ];
  }
  function y0(t, e, n) {
    var i = Y, a = At(), s = W;
    if (s) {
      if (n === void 0) throw Error(M(407));
      n = n();
    } else n = e();
    var o = !ve((rt || a).memoizedState, n);
    if (o && (a.memoizedState = n, Ot = true), a = a.queue, Xd(x0.bind(null, i, a, t), [
      t
    ]), a.getSnapshot !== e || o || Mt !== null && Mt.memoizedState.tag & 1) {
      if (i.flags |= 2048, Xa(9, {
        destroy: void 0
      }, b0.bind(null, i, a, n, e), null), lt === null) throw Error(M(349));
      s || En & 127 || v0(i, e, n);
    }
    return n;
  }
  function v0(t, e, n) {
    t.flags |= 16384, t = {
      getSnapshot: e,
      value: n
    }, e = Y.updateQueue, e === null ? (e = Xl(), Y.updateQueue = e, e.stores = [
      t
    ]) : (n = e.stores, n === null ? e.stores = [
      t
    ] : n.push(t));
  }
  function b0(t, e, n, i) {
    e.value = n, e.getSnapshot = i, S0(e) && w0(t);
  }
  function x0(t, e, n) {
    return n(function() {
      S0(e) && w0(t);
    });
  }
  function S0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ve(t, n);
    } catch {
      return true;
    }
  }
  function w0(t) {
    var e = Ii(t, 2);
    e !== null && ae(e, t, 2);
  }
  function nf(t) {
    var e = Xt();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Xi) {
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
      lastRenderedReducer: An,
      lastRenderedState: t
    }, e;
  }
  function T0(t, e, n, i) {
    return t.baseState = n, Fd(t, rt, typeof i == "function" ? i : An);
  }
  function AE(t, e, n, i, a) {
    if (Zl(t)) throw Error(M(485));
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
      H.T !== null ? n(true) : s.isTransition = false, i(s), n = e.pending, n === null ? (s.next = e.pending = s, E0(e, s)) : (s.next = n.next, e.pending = n.next = s);
    }
  }
  function E0(t, e) {
    var n = e.action, i = e.payload, a = t.state;
    if (e.isTransition) {
      var s = H.T, o = {};
      H.T = o;
      try {
        var r = n(a, i), l = H.S;
        l !== null && l(o, r), tp(t, e, r);
      } catch (u) {
        af(t, e, u);
      } finally {
        s !== null && o.types !== null && (s.types = o.types), H.T = s;
      }
    } else try {
      s = n(a, i), tp(t, e, s);
    } catch (u) {
      af(t, e, u);
    }
  }
  function tp(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(i) {
      ep(t, e, i);
    }, function(i) {
      return af(t, e, i);
    }) : ep(t, e, n);
  }
  function ep(t, e, n) {
    e.status = "fulfilled", e.value = n, A0(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, E0(t, n)));
  }
  function af(t, e, n) {
    var i = t.pending;
    if (t.pending = null, i !== null) {
      i = i.next;
      do
        e.status = "rejected", e.reason = n, A0(e), e = e.next;
      while (e !== i);
    }
    t.action = null;
  }
  function A0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function C0(t, e) {
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
                for (var a = mt, s = Re; a.nodeType !== 8; ) {
                  if (!s) {
                    a = null;
                    break e;
                  }
                  if (a = Ne(a.nextSibling), a === null) {
                    a = null;
                    break e;
                  }
                }
                s = a.data, a = s === "F!" || s === "F" ? a : null;
              }
              if (a) {
                mt = Ne(a.nextSibling), i = a.data === "F!";
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
    return n = Xt(), n.memoizedState = n.baseState = e, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: C0,
      lastRenderedState: e
    }, n.queue = i, n = G0.bind(null, Y, i), i.dispatch = n, i = nf(false), s = $d.bind(null, Y, false, i.queue), i = Xt(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, i.queue = a, n = AE.bind(null, Y, a, s, n), a.dispatch = n, i.memoizedState = t, [
      e,
      n,
      false
    ];
  }
  function ip(t) {
    var e = At();
    return M0(e, rt, t);
  }
  function M0(t, e, n) {
    if (e = Fd(t, e, C0)[0], t = Cr(An)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var i = Lo(e);
    } catch (o) {
      throw o === os ? Fl : o;
    }
    else i = e;
    e = At();
    var a = e.queue, s = a.dispatch;
    return n !== e.memoizedState && (Y.flags |= 2048, Xa(9, {
      destroy: void 0
    }, CE.bind(null, a, n), null)), [
      i,
      s,
      t
    ];
  }
  function CE(t, e) {
    t.action = e;
  }
  function ap(t) {
    var e = At(), n = rt;
    if (n !== null) return M0(e, n, t);
    At(), e = e.memoizedState, n = At();
    var i = n.queue.dispatch;
    return n.memoizedState = t, [
      e,
      i,
      false
    ];
  }
  function Xa(t, e, n, i) {
    return t = {
      tag: t,
      create: n,
      deps: i,
      inst: e,
      next: null
    }, e = Y.updateQueue, e === null && (e = Xl(), Y.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t;
  }
  function R0() {
    return At().memoizedState;
  }
  function Mr(t, e, n, i) {
    var a = Xt();
    Y.flags |= t, a.memoizedState = Xa(1 | e, {
      destroy: void 0
    }, n, i === void 0 ? null : i);
  }
  function Kl(t, e, n, i) {
    var a = At();
    i = i === void 0 ? null : i;
    var s = a.memoizedState.inst;
    rt !== null && i !== null && Pd(i, rt.memoizedState.deps) ? a.memoizedState = Xa(e, s, n, i) : (Y.flags |= t, a.memoizedState = Xa(1 | e, s, n, i));
  }
  function sp(t, e) {
    Mr(8390656, 8, t, e);
  }
  function Xd(t, e) {
    Kl(2048, 8, t, e);
  }
  function ME(t) {
    Y.flags |= 4;
    var e = Y.updateQueue;
    if (e === null) e = Xl(), Y.updateQueue = e, e.events = [
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
    return ME({
      ref: e,
      nextImpl: t
    }), function() {
      if (tt & 2) throw Error(M(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function O0(t, e) {
    return Kl(4, 2, t, e);
  }
  function N0(t, e) {
    return Kl(4, 4, t, e);
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
  function j0(t, e, n) {
    n = n != null ? n.concat([
      t
    ]) : null, Kl(4, 4, z0.bind(null, e, t), n);
  }
  function Qd() {
  }
  function _0(t, e) {
    var n = At();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Pd(e, i[1]) ? i[0] : (n.memoizedState = [
      t,
      e
    ], t);
  }
  function L0(t, e) {
    var n = At();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Pd(e, i[1])) return i[0];
    if (i = t(), Xi) {
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
  function Kd(t, e, n) {
    return n === void 0 || En & 1073741824 && !(I & 261930) ? t.memoizedState = e : (t.memoizedState = n, t = Tb(), Y.lanes |= t, hi |= t, n);
  }
  function V0(t, e, n, i) {
    return ve(n, e) ? n : Fa.current !== null ? (t = Kd(t, n, i), ve(t, e) || (Ot = true), t) : !(En & 42) || En & 1073741824 && !(I & 261930) ? (Ot = true, t.memoizedState = n) : (t = Tb(), Y.lanes |= t, hi |= t, e);
  }
  function U0(t, e, n, i, a) {
    var s = et.p;
    et.p = s !== 0 && 8 > s ? s : 8;
    var o = H.T, r = {};
    H.T = r, $d(t, false, e, n);
    try {
      var l = a(), u = H.S;
      if (u !== null && u(r, l), l !== null && typeof l == "object" && typeof l.then == "function") {
        var c = wE(l, i);
        qs(t, e, c, ge(t));
      } else qs(t, e, i, ge(t));
    } catch (f) {
      qs(t, e, {
        then: function() {
        },
        status: "rejected",
        reason: f
      }, ge());
    } finally {
      et.p = s, o !== null && r.types !== null && (o.types = r.types), H.T = o;
    }
  }
  function RE() {
  }
  function sf(t, e, n, i) {
    if (t.tag !== 5) throw Error(M(476));
    var a = B0(t).queue;
    U0(t, a, e, Ui, n === null ? RE : function() {
      return P0(t), n(i);
    });
  }
  function B0(t) {
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
        lastRenderedReducer: An,
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
        lastRenderedReducer: An,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function P0(t) {
    var e = B0(t);
    e.next === null && (e = t.alternate.memoizedState), qs(t, e.next.queue, {}, ge());
  }
  function Zd() {
    return Yt(ho);
  }
  function H0() {
    return At().memoizedState;
  }
  function k0() {
    return At().memoizedState;
  }
  function DE(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = ge();
          t = ni(n);
          var i = ii(e, t, n);
          i !== null && (ae(i, e, n), ks(i, e, n)), e = {
            cache: _d()
          }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function OE(t, e, n) {
    var i = ge();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Zl(t) ? Y0(e, n) : (n = Od(t, e, n, i), n !== null && (ae(n, t, i), q0(n, e, i)));
  }
  function G0(t, e, n) {
    var i = ge();
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
    if (Zl(t)) Y0(e, a);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null)) try {
        var o = e.lastRenderedState, r = s(o, n);
        if (a.hasEagerState = true, a.eagerState = r, ve(r, o)) return ql(t, e, a, 0), lt === null && Yl(), false;
      } catch {
      } finally {
      }
      if (n = Od(t, e, a, i), n !== null) return ae(n, t, i), q0(n, e, i), true;
    }
    return false;
  }
  function $d(t, e, n, i) {
    if (i = {
      lane: 2,
      revertLane: sh(),
      gesture: null,
      action: i,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Zl(t)) {
      if (e) throw Error(M(479));
    } else e = Od(t, n, i, 2), e !== null && ae(e, t, 2);
  }
  function Zl(t) {
    var e = t.alternate;
    return t === Y || e !== null && e === Y;
  }
  function Y0(t, e) {
    Va = il = true;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function q0(t, e, n) {
    if (n & 4194048) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, Dv(t, n);
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
  var F0 = {
    readContext: Yt,
    use: Ql,
    useCallback: function(t, e) {
      return Xt().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Yt,
    useEffect: sp,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([
        t
      ]) : null, Mr(4194308, 4, z0.bind(null, e, t), n);
    },
    useLayoutEffect: function(t, e) {
      return Mr(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Mr(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Xt();
      e = e === void 0 ? null : e;
      var i = t();
      if (Xi) {
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
      var i = Xt();
      if (n !== void 0) {
        var a = n(e);
        if (Xi) {
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
      }, i.queue = t, t = t.dispatch = OE.bind(null, Y, t), [
        i.memoizedState,
        t
      ];
    },
    useRef: function(t) {
      var e = Xt();
      return t = {
        current: t
      }, e.memoizedState = t;
    },
    useState: function(t) {
      t = nf(t);
      var e = t.queue, n = G0.bind(null, Y, e);
      return e.dispatch = n, [
        t.memoizedState,
        n
      ];
    },
    useDebugValue: Qd,
    useDeferredValue: function(t, e) {
      var n = Xt();
      return Kd(n, t, e);
    },
    useTransition: function() {
      var t = nf(false);
      return t = U0.bind(null, Y, t.queue, true, false), Xt().memoizedState = t, [
        false,
        t
      ];
    },
    useSyncExternalStore: function(t, e, n) {
      var i = Y, a = Xt();
      if (W) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (n = e(), lt === null) throw Error(M(349));
        I & 127 || v0(i, e, n);
      }
      a.memoizedState = n;
      var s = {
        value: n,
        getSnapshot: e
      };
      return a.queue = s, sp(x0.bind(null, i, s, t), [
        t
      ]), i.flags |= 2048, Xa(9, {
        destroy: void 0
      }, b0.bind(null, i, s, n, e), null), n;
    },
    useId: function() {
      var t = Xt(), e = lt.identifierPrefix;
      if (W) {
        var n = $e, i = Ze;
        n = (i & ~(1 << 32 - pe(i) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = al++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else n = TE++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Zd,
    useFormState: np,
    useActionState: np,
    useOptimistic: function(t) {
      var e = Xt();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = $d.bind(null, Y, true, n), n.dispatch = e, [
        t,
        e
      ];
    },
    useMemoCache: qd,
    useCacheRefresh: function() {
      return Xt().memoizedState = DE.bind(null, Y);
    },
    useEffectEvent: function(t) {
      var e = Xt(), n = {
        impl: t
      };
      return e.memoizedState = n, function() {
        if (tt & 2) throw Error(M(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Jd = {
    readContext: Yt,
    use: Ql,
    useCallback: _0,
    useContext: Yt,
    useEffect: Xd,
    useImperativeHandle: j0,
    useInsertionEffect: O0,
    useLayoutEffect: N0,
    useMemo: L0,
    useReducer: Cr,
    useRef: R0,
    useState: function() {
      return Cr(An);
    },
    useDebugValue: Qd,
    useDeferredValue: function(t, e) {
      var n = At();
      return V0(n, rt.memoizedState, t, e);
    },
    useTransition: function() {
      var t = Cr(An)[0], e = At().memoizedState;
      return [
        typeof t == "boolean" ? t : Lo(t),
        e
      ];
    },
    useSyncExternalStore: y0,
    useId: H0,
    useHostTransitionStatus: Zd,
    useFormState: ip,
    useActionState: ip,
    useOptimistic: function(t, e) {
      var n = At();
      return T0(n, rt, t, e);
    },
    useMemoCache: qd,
    useCacheRefresh: k0
  };
  Jd.useEffectEvent = D0;
  var X0 = {
    readContext: Yt,
    use: Ql,
    useCallback: _0,
    useContext: Yt,
    useEffect: Xd,
    useImperativeHandle: j0,
    useInsertionEffect: O0,
    useLayoutEffect: N0,
    useMemo: L0,
    useReducer: Uu,
    useRef: R0,
    useState: function() {
      return Uu(An);
    },
    useDebugValue: Qd,
    useDeferredValue: function(t, e) {
      var n = At();
      return rt === null ? Kd(n, t, e) : V0(n, rt.memoizedState, t, e);
    },
    useTransition: function() {
      var t = Uu(An)[0], e = At().memoizedState;
      return [
        typeof t == "boolean" ? t : Lo(t),
        e
      ];
    },
    useSyncExternalStore: y0,
    useId: H0,
    useHostTransitionStatus: Zd,
    useFormState: ap,
    useActionState: ap,
    useOptimistic: function(t, e) {
      var n = At();
      return rt !== null ? T0(n, rt, t, e) : (n.baseState = t, [
        t,
        n.queue.dispatch
      ]);
    },
    useMemoCache: qd,
    useCacheRefresh: k0
  };
  X0.useEffectEvent = D0;
  function Bu(t, e, n, i) {
    e = t.memoizedState, n = n(i, e), n = n == null ? e : gt({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var of = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var i = ge(), a = ni(i);
      a.payload = e, n != null && (a.callback = n), e = ii(t, a, i), e !== null && (ae(e, t, i), ks(e, t, i));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var i = ge(), a = ni(i);
      a.tag = 1, a.payload = e, n != null && (a.callback = n), e = ii(t, a, i), e !== null && (ae(e, t, i), ks(e, t, i));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = ge(), i = ni(n);
      i.tag = 2, e != null && (i.callback = e), e = ii(t, i, n), e !== null && (ae(e, t, n), ks(e, t, n));
    }
  };
  function op(t, e, n, i, a, s, o) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, s, o) : e.prototype && e.prototype.isPureReactComponent ? !ao(n, i) || !ao(a, s) : true;
  }
  function rp(t, e, n, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && of.enqueueReplaceState(e, e.state, null);
  }
  function Qi(t, e) {
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
  function Q0(t) {
    $r(t);
  }
  function K0(t) {
    console.error(t);
  }
  function Z0(t) {
    $r(t);
  }
  function sl(t, e) {
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
  function rf(t, e, n) {
    return n = ni(n), n.tag = 3, n.payload = {
      element: null
    }, n.callback = function() {
      sl(t, e);
    }, n;
  }
  function $0(t) {
    return t = ni(t), t.tag = 3, t;
  }
  function J0(t, e, n, i) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var s = i.value;
      t.payload = function() {
        return a(s);
      }, t.callback = function() {
        lp(e, n, i);
      };
    }
    var o = n.stateNode;
    o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      lp(e, n, i), typeof a != "function" && (ai === null ? ai = /* @__PURE__ */ new Set([
        this
      ]) : ai.add(this));
      var r = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function NE(t, e, n, i, a) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (e = n.alternate, e !== null && ss(e, n, a, true), n = be.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Oe === null ? cl() : n.alternate === null && wt === 0 && (wt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, i === tl ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([
              i
            ]) : e.add(i), Zu(t, i, a)), false;
          case 22:
            return n.flags |= 65536, i === tl ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
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
      return Zu(t, i, a), cl(), false;
    }
    if (W) return e = be.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = a, i !== Qc && (t = Error(M(422), {
      cause: i
    }), oo(Me(t, n)))) : (i !== Qc && (e = Error(M(423), {
      cause: i
    }), oo(Me(e, n))), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, i = Me(i, n), a = rf(t.stateNode, i, a), Vu(t, a), wt !== 4 && (wt = 2)), false;
    var s = Error(M(520), {
      cause: i
    });
    if (s = Me(s, n), Qs === null ? Qs = [
      s
    ] : Qs.push(s), wt !== 4 && (wt = 2), e === null) return true;
    i = Me(i, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = a & -a, n.lanes |= t, t = rf(n.stateNode, i, t), Vu(n, t), false;
        case 1:
          if (e = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (ai === null || !ai.has(s)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = $0(a), J0(a, t, n, i), Vu(n, a), false;
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var Id = Error(M(461)), Ot = false;
  function Ht(t, e, n, i) {
    e.child = t === null ? f0(e, null, n, i) : Fi(e, t.child, n, i);
  }
  function up(t, e, n, i, a) {
    n = n.render;
    var s = e.ref;
    if ("ref" in i) {
      var o = {};
      for (var r in i) r !== "ref" && (o[r] = i[r]);
    } else o = i;
    return qi(e), i = Hd(t, e, n, o, s, a), r = kd(), t !== null && !Ot ? (Gd(t, e, a), Cn(t, e, a)) : (W && r && zd(e), e.flags |= 1, Ht(t, e, i, a), e.child);
  }
  function cp(t, e, n, i, a) {
    if (t === null) {
      var s = n.type;
      return typeof s == "function" && !Nd(s) && s.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = s, I0(t, e, s, i, a)) : (t = Er(n.type, null, i, e, e.mode, a), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (s = t.child, !Wd(t, a)) {
      var o = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ao, n(o, i) && t.ref === e.ref) return Cn(t, e, a);
    }
    return e.flags |= 1, t = xn(s, i), t.ref = e.ref, t.return = e, e.child = t;
  }
  function I0(t, e, n, i, a) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (ao(s, i) && t.ref === e.ref) if (Ot = false, e.pendingProps = i = s, Wd(t, a)) t.flags & 131072 && (Ot = true);
      else return e.lanes = t.lanes, Cn(t, e, a);
    }
    return lf(t, e, n, i, a);
  }
  function W0(t, e, n, i) {
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
      }, t !== null && Ar(e, s !== null ? s.cachePool : null), s !== null ? Wm(e, s) : tf(), m0(e);
      else return i = e.lanes = 536870912, fp(t, e, s !== null ? s.baseLanes | n : n, n, i);
    } else s !== null ? (Ar(e, s.cachePool), Wm(e, s), Fn(), e.memoizedState = null) : (t !== null && Ar(e, null), tf(), Fn());
    return Ht(t, e, a, n), e.child;
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
    var s = Ld();
    return s = s === null ? null : {
      parent: Dt._currentValue,
      pool: s
    }, e.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, t !== null && Ar(e, null), tf(), m0(e), t !== null && ss(t, e, i, true), e.childLanes = a, null;
  }
  function Rr(t, e) {
    return e = ol({
      mode: e.mode,
      children: e.children
    }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function dp(t, e, n) {
    return Fi(e, t.child, null, n), t = Rr(e, e.pendingProps), t.flags |= 2, ue(e), e.memoizedState = null, t;
  }
  function zE(t, e, n) {
    var i = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (W) {
        if (i.mode === "hidden") return t = Rr(e, i), e.lanes = 536870912, zs(null, t);
        if (ef(e), (t = mt) ? (t = Fb(t, Re), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ci !== null ? {
            id: Ze,
            overflow: $e
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = a0(t), n.return = e, e.child = n, Gt = e, mt = null)) : t = null, t === null) throw fi(e);
        return e.lanes = 536870912, null;
      }
      return Rr(e, i);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var o = s.dehydrated;
      if (ef(e), a) if (e.flags & 256) e.flags &= -257, e = dp(t, e, n);
      else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
      else throw Error(M(558));
      else if (Ot || ss(t, e, n, false), a = (n & t.childLanes) !== 0, Ot || a) {
        if (i = lt, i !== null && (o = Ov(i, n), o !== 0 && o !== s.retryLane)) throw s.retryLane = o, Ii(t, o), ae(i, t, o), Id;
        cl(), e = dp(t, e, n);
      } else t = s.treeContext, mt = Ne(o.nextSibling), Gt = e, W = true, ei = null, Re = false, t !== null && o0(e, t), e = Rr(e, i), e.flags |= 4096;
      return e;
    }
    return t = xn(t.child, {
      mode: i.mode,
      children: i.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Dr(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(M(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function lf(t, e, n, i, a) {
    return qi(e), n = Hd(t, e, n, i, void 0, a), i = kd(), t !== null && !Ot ? (Gd(t, e, a), Cn(t, e, a)) : (W && i && zd(e), e.flags |= 1, Ht(t, e, n, a), e.child);
  }
  function hp(t, e, n, i, a, s) {
    return qi(e), e.updateQueue = null, n = g0(e, i, n, a), p0(t), i = kd(), t !== null && !Ot ? (Gd(t, e, s), Cn(t, e, s)) : (W && i && zd(e), e.flags |= 1, Ht(t, e, n, s), e.child);
  }
  function mp(t, e, n, i, a) {
    if (qi(e), e.stateNode === null) {
      var s = wa, o = n.contextType;
      typeof o == "object" && o !== null && (s = Yt(o)), s = new n(i, s), e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = of, e.stateNode = s, s._reactInternals = e, s = e.stateNode, s.props = i, s.state = e.memoizedState, s.refs = {}, Ud(e), o = n.contextType, s.context = typeof o == "object" && o !== null ? Yt(o) : wa, s.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Bu(e, n, o, i), s.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (o = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), o !== s.state && of.enqueueReplaceState(s, s.state, null), Ys(e, i, s, a), Gs(), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = true;
    } else if (t === null) {
      s = e.stateNode;
      var r = e.memoizedProps, l = Qi(n, r);
      s.props = l;
      var u = s.context, c = n.contextType;
      o = wa, typeof c == "object" && c !== null && (o = Yt(c));
      var f = n.getDerivedStateFromProps;
      c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function", r = e.pendingProps !== r, c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (r || u !== o) && rp(e, s, i, o), Gn = false;
      var h = e.memoizedState;
      s.state = h, Ys(e, i, s, a), Gs(), u = e.memoizedState, r || h !== u || Gn ? (typeof f == "function" && (Bu(e, n, f, i), u = e.memoizedState), (l = Gn || op(e, n, l, i, h, u, o)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = u), s.props = i, s.state = u, s.context = o, i = l) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = false);
    } else {
      s = e.stateNode, Ic(t, e), o = e.memoizedProps, c = Qi(n, o), s.props = c, f = e.pendingProps, h = s.context, u = n.contextType, l = wa, typeof u == "object" && u !== null && (l = Yt(u)), r = n.getDerivedStateFromProps, (u = typeof r == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== f || h !== l) && rp(e, s, i, l), Gn = false, h = e.memoizedState, s.state = h, Ys(e, i, s, a), Gs();
      var d = e.memoizedState;
      o !== f || h !== d || Gn || t !== null && t.dependencies !== null && Wr(t.dependencies) ? (typeof r == "function" && (Bu(e, n, r, i), d = e.memoizedState), (c = Gn || op(e, n, c, i, h, d, l) || t !== null && t.dependencies !== null && Wr(t.dependencies)) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, d, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, d, l)), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || o === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = d), s.props = i, s.state = d, s.context = l, i = c) : (typeof s.componentDidUpdate != "function" || o === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024), i = false);
    }
    return s = i, Dr(t, e), i = (e.flags & 128) !== 0, s || i ? (s = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : s.render(), e.flags |= 1, t !== null && i ? (e.child = Fi(e, t.child, null, a), e.child = Fi(e, null, n, a)) : Ht(t, e, n, a), e.memoizedState = s.state, t = e.child) : t = Cn(t, e, a), t;
  }
  function pp(t, e, n, i) {
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
      cachePool: l0()
    };
  }
  function ku(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= de), t;
  }
  function tb(t, e, n) {
    var i = e.pendingProps, a = false, s = (e.flags & 128) !== 0, o;
    if ((o = s) || (o = t !== null && t.memoizedState === null ? false : (Et.current & 2) !== 0), o && (a = true, e.flags &= -129), o = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (W) {
        if (a ? qn(e) : Fn(), (t = mt) ? (t = Fb(t, Re), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ci !== null ? {
            id: Ze,
            overflow: $e
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = a0(t), n.return = e, e.child = n, Gt = e, mt = null)) : t = null, t === null) throw fi(e);
        return wf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var r = i.children;
      return i = i.fallback, a ? (Fn(), a = e.mode, r = ol({
        mode: "hidden",
        children: r
      }, a), i = Bi(i, a, n, null), r.return = e, i.return = e, r.sibling = i, e.child = r, i = e.child, i.memoizedState = Hu(n), i.childLanes = ku(t, o, n), e.memoizedState = Pu, zs(null, i)) : (qn(e), uf(e, r));
    }
    var l = t.memoizedState;
    if (l !== null && (r = l.dehydrated, r !== null)) {
      if (s) e.flags & 256 ? (qn(e), e.flags &= -257, e = Gu(t, e, n)) : e.memoizedState !== null ? (Fn(), e.child = t.child, e.flags |= 128, e = null) : (Fn(), r = i.fallback, a = e.mode, i = ol({
        mode: "visible",
        children: i.children
      }, a), r = Bi(r, a, n, null), r.flags |= 2, i.return = e, r.return = e, i.sibling = r, e.child = i, Fi(e, t.child, null, n), i = e.child, i.memoizedState = Hu(n), i.childLanes = ku(t, o, n), e.memoizedState = Pu, e = zs(null, i));
      else if (qn(e), wf(r)) {
        if (o = r.nextSibling && r.nextSibling.dataset, o) var u = o.dgst;
        o = u, i = Error(M(419)), i.stack = "", i.digest = o, oo({
          value: i,
          source: null,
          stack: null
        }), e = Gu(t, e, n);
      } else if (Ot || ss(t, e, n, false), o = (n & t.childLanes) !== 0, Ot || o) {
        if (o = lt, o !== null && (i = Ov(o, n), i !== 0 && i !== l.retryLane)) throw l.retryLane = i, Ii(t, i), ae(o, t, i), Id;
        Sf(r) || cl(), e = Gu(t, e, n);
      } else Sf(r) ? (e.flags |= 192, e.child = t.child, e = null) : (t = l.treeContext, mt = Ne(r.nextSibling), Gt = e, W = true, ei = null, Re = false, t !== null && o0(e, t), e = uf(e, i.children), e.flags |= 4096);
      return e;
    }
    return a ? (Fn(), r = i.fallback, a = e.mode, l = t.child, u = l.sibling, i = xn(l, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = l.subtreeFlags & 65011712, u !== null ? r = xn(u, r) : (r = Bi(r, a, n, null), r.flags |= 2), r.return = e, i.return = e, i.sibling = r, e.child = i, zs(null, i), i = e.child, r = t.child.memoizedState, r === null ? r = Hu(n) : (a = r.cachePool, a !== null ? (l = Dt._currentValue, a = a.parent !== l ? {
      parent: l,
      pool: l
    } : a) : a = l0(), r = {
      baseLanes: r.baseLanes | n,
      cachePool: a
    }), i.memoizedState = r, i.childLanes = ku(t, o, n), e.memoizedState = Pu, zs(t.child, i)) : (qn(e), n = t.child, t = n.sibling, n = xn(n, {
      mode: "visible",
      children: i.children
    }), n.return = e, n.sibling = null, t !== null && (o = e.deletions, o === null ? (e.deletions = [
      t
    ], e.flags |= 16) : o.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function uf(t, e) {
    return e = ol({
      mode: "visible",
      children: e
    }, t.mode), e.return = t, t.child = e;
  }
  function ol(t, e) {
    return t = fe(22, t, null, e), t.lanes = 0, t;
  }
  function Gu(t, e, n) {
    return Fi(e, t.child, null, n), t = uf(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function gp(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), Zc(t.return, e, n);
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
  function eb(t, e, n) {
    var i = e.pendingProps, a = i.revealOrder, s = i.tail;
    i = i.children;
    var o = Et.current, r = (o & 2) !== 0;
    if (r ? (o = o & 1 | 2, e.flags |= 128) : o &= 1, ut(Et, o), Ht(t, e, i, n), i = W ? so : 0, !r && t !== null && t.flags & 128) t: for (t = e.child; t !== null; ) {
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
        for (n = e.child, a = null; n !== null; ) t = n.alternate, t !== null && nl(t) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = e.child, e.child = null) : (a = n.sibling, n.sibling = null), Yu(e, false, a, n, s, i);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, a = e.child, e.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && nl(t) === null) {
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
  function Cn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), hi |= e.lanes, !(n & e.childLanes)) if (t !== null) {
      if (ss(t, e, n, false), (n & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(M(153));
    if (e.child !== null) {
      for (t = e.child, n = xn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = xn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Wd(t, e) {
    return t.lanes & e ? true : (t = t.dependencies, !!(t !== null && Wr(t)));
  }
  function jE(t, e, n) {
    switch (e.tag) {
      case 3:
        Xr(e, e.stateNode.containerInfo), Yn(e, Dt, t.memoizedState.cache), Yi();
        break;
      case 27:
      case 5:
        Vc(e);
        break;
      case 4:
        Xr(e, e.stateNode.containerInfo);
        break;
      case 10:
        Yn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return e.flags |= 128, ef(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null) return i.dehydrated !== null ? (qn(e), e.flags |= 128, null) : n & e.child.childLanes ? tb(t, e, n) : (qn(e), t = Cn(t, e, n), t !== null ? t.sibling : null);
        qn(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (i = (n & e.childLanes) !== 0, i || (ss(t, e, n, false), i = (n & e.childLanes) !== 0), a) {
          if (i) return eb(t, e, n);
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ut(Et, Et.current), i) break;
        return null;
      case 22:
        return e.lanes = 0, W0(t, e, n, e.pendingProps);
      case 24:
        Yn(e, Dt, t.memoizedState.cache);
    }
    return Cn(t, e, n);
  }
  function nb(t, e, n) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) Ot = true;
    else {
      if (!Wd(t, n) && !(e.flags & 128)) return Ot = false, jE(t, e, n);
      Ot = !!(t.flags & 131072);
    }
    else Ot = false, W && e.flags & 1048576 && s0(e, so, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (t = zi(e.elementType), e.type = t, typeof t == "function") Nd(t) ? (i = Qi(t, i), e.tag = 1, e = mp(null, e, t, i, n)) : (e.tag = 0, e = lf(null, e, t, i, n));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === yd) {
                e.tag = 11, e = up(null, e, t, i, n);
                break t;
              } else if (a === vd) {
                e.tag = 14, e = cp(null, e, t, i, n);
                break t;
              }
            }
            throw e = _c(t) || t, Error(M(306, e, ""));
          }
        }
        return e;
      case 0:
        return lf(t, e, e.type, e.pendingProps, n);
      case 1:
        return i = e.type, a = Qi(i, e.pendingProps), mp(t, e, i, a, n);
      case 3:
        t: {
          if (Xr(e, e.stateNode.containerInfo), t === null) throw Error(M(387));
          i = e.pendingProps;
          var s = e.memoizedState;
          a = s.element, Ic(t, e), Ys(e, i, null, n);
          var o = e.memoizedState;
          if (i = o.cache, Yn(e, Dt, i), i !== s.cache && $c(e, [
            Dt
          ], n, true), Gs(), i = o.element, s.isDehydrated) if (s = {
            element: i,
            isDehydrated: false,
            cache: o.cache
          }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
            e = pp(t, e, i, n);
            break t;
          } else if (i !== a) {
            a = Me(Error(M(424)), e), oo(a), e = pp(t, e, i, n);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (mt = Ne(t.firstChild), Gt = e, W = true, ei = null, Re = true, n = f0(e, null, i, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          }
          else {
            if (Yi(), i === a) {
              e = Cn(t, e, n);
              break t;
            }
            Ht(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Dr(t, e), t === null ? (n = Vp(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : W || (n = e.type, t = e.pendingProps, i = ml(ti.current).createElement(n), i[kt] = e, i[se] = t, qt(i, n, t), Ut(i), e.stateNode = i) : e.memoizedState = Vp(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Vc(e), t === null && W && (i = e.stateNode = Xb(e.type, e.pendingProps, ti.current), Gt = e, Re = true, a = mt, Si(e.type) ? (Tf = a, mt = Ne(i.firstChild)) : mt = a), Ht(t, e, e.pendingProps.children, n), Dr(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && W && ((a = i = mt) && (i = uA(i, e.type, e.pendingProps, Re), i !== null ? (e.stateNode = i, Gt = e, mt = Ne(i.firstChild), Re = false, a = true) : a = false), a || fi(e)), Vc(e), a = e.type, s = e.pendingProps, o = t !== null ? t.memoizedProps : null, i = s.children, bf(a, s) ? i = null : o !== null && bf(a, o) && (e.flags |= 32), e.memoizedState !== null && (a = Hd(t, e, EE, null, null, n), ho._currentValue = a), Dr(t, e), Ht(t, e, i, n), e.child;
      case 6:
        return t === null && W && ((t = n = mt) && (n = cA(n, e.pendingProps, Re), n !== null ? (e.stateNode = n, Gt = e, mt = null, t = true) : t = false), t || fi(e)), null;
      case 13:
        return tb(t, e, n);
      case 4:
        return Xr(e, e.stateNode.containerInfo), i = e.pendingProps, t === null ? e.child = Fi(e, null, i, n) : Ht(t, e, i, n), e.child;
      case 11:
        return up(t, e, e.type, e.pendingProps, n);
      case 7:
        return Ht(t, e, e.pendingProps, n), e.child;
      case 8:
        return Ht(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Ht(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return i = e.pendingProps, Yn(e, e.type, i.value), Ht(t, e, i.children, n), e.child;
      case 9:
        return a = e.type._context, i = e.pendingProps.children, qi(e), a = Yt(a), i = i(a), e.flags |= 1, Ht(t, e, i, n), e.child;
      case 14:
        return cp(t, e, e.type, e.pendingProps, n);
      case 15:
        return I0(t, e, e.type, e.pendingProps, n);
      case 19:
        return eb(t, e, n);
      case 31:
        return zE(t, e, n);
      case 22:
        return W0(t, e, n, e.pendingProps);
      case 24:
        return qi(e), i = Yt(Dt), t === null ? (a = Ld(), a === null && (a = lt, s = _d(), a.pooledCache = s, s.refCount++, s !== null && (a.pooledCacheLanes |= n), a = s), e.memoizedState = {
          parent: i,
          cache: a
        }, Ud(e), Yn(e, Dt, a)) : (t.lanes & n && (Ic(t, e), Ys(e, null, null, n), Gs()), a = t.memoizedState, s = e.memoizedState, a.parent !== i ? (a = {
          parent: i,
          cache: i
        }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), Yn(e, Dt, i)) : (i = s.cache, Yn(e, Dt, i), i !== a.cache && $c(e, [
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
      else if (Cb()) t.flags |= 8192;
      else throw Hi = tl, Vd;
    } else t.flags &= -16777217;
  }
  function yp(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
    else if (t.flags |= 16777216, !Zb(e)) if (Cb()) t.flags |= 8192;
    else throw Hi = tl, Vd;
  }
  function ar(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Mv() : 536870912, t.lanes |= e, Qa |= e);
  }
  function Ts(t, e) {
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
  function _E(t, e, n) {
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
        return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), Sn(Dt), ka(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (la(e) ? un(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Lu())), dt(e), null;
      case 26:
        var a = e.type, s = e.memoizedState;
        return t === null ? (un(e), s !== null ? (dt(e), yp(e, s)) : (dt(e), qu(e, a, null, i, n))) : s ? s !== t.memoizedState ? (un(e), dt(e), yp(e, s)) : (dt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && un(e), dt(e), qu(e, a, t, i, n)), null;
      case 27:
        if (Qr(e), n = ti.current, a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(M(166));
            return dt(e), null;
          }
          t = We.current, la(e) ? Xm(e) : (t = Xb(a, i, n), e.stateNode = t, un(e));
        }
        return dt(e), null;
      case 5:
        if (Qr(e), a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(M(166));
            return dt(e), null;
          }
          if (s = We.current, la(e)) Xm(e);
          else {
            var o = ml(ti.current);
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
            s[kt] = e, s[se] = i;
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
          if (t = ti.current, la(e)) {
            if (t = e.stateNode, n = e.memoizedProps, i = null, a = Gt, a !== null) switch (a.tag) {
              case 27:
              case 5:
                i = a.memoizedProps;
            }
            t[kt] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === true || Gb(t.nodeValue, n)), t || fi(e, true);
          } else t = ml(t).createTextNode(i), t[kt] = e, e.stateNode = t;
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
          if (!t) return e.flags & 256 ? (ue(e), e) : (ue(e), null);
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
          if (!a) return e.flags & 256 ? (ue(e), e) : (ue(e), null);
        }
        return ue(e), e.flags & 128 ? (e.lanes = n, e) : (n = i !== null, t = t !== null && t.memoizedState !== null, n && (i = e.child, a = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (a = i.alternate.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== a && (i.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), ar(e, e.updateQueue), dt(e), null);
      case 4:
        return ka(), t === null && oh(e.stateNode.containerInfo), dt(e), null;
      case 10:
        return Sn(e.type), dt(e), null;
      case 19:
        if (Bt(Et), i = e.memoizedState, i === null) return dt(e), null;
        if (a = (e.flags & 128) !== 0, s = i.rendering, s === null) if (a) Ts(i, false);
        else {
          if (wt !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
            if (s = nl(t), s !== null) {
              for (e.flags |= 128, Ts(i, false), t = s.updateQueue, e.updateQueue = t, ar(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; ) i0(n, t), n = n.sibling;
              return ut(Et, Et.current & 1 | 2), W && mn(e, i.treeForkCount), e.child;
            }
            t = t.sibling;
          }
          i.tail !== null && he() > ll && (e.flags |= 128, a = true, Ts(i, false), e.lanes = 4194304);
        }
        else {
          if (!a) if (t = nl(s), t !== null) {
            if (e.flags |= 128, a = true, t = t.updateQueue, e.updateQueue = t, ar(e, t), Ts(i, true), i.tail === null && i.tailMode === "hidden" && !s.alternate && !W) return dt(e), null;
          } else 2 * he() - i.renderingStartTime > ll && n !== 536870912 && (e.flags |= 128, a = true, Ts(i, false), e.lanes = 4194304);
          i.isBackwards ? (s.sibling = e.child, e.child = s) : (t = i.last, t !== null ? t.sibling = s : e.child = s, i.last = s);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = he(), t.sibling = null, n = Et.current, ut(Et, a ? n & 1 | 2 : n & 1), W && mn(e, i.treeForkCount), t) : (dt(e), null);
      case 22:
      case 23:
        return ue(e), Bd(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? n & 536870912 && !(e.flags & 128) && (dt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : dt(e), n = e.updateQueue, n !== null && ar(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && Bt(Pi), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Sn(Dt), dt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(M(156, e.tag));
  }
  function LE(t, e) {
    switch (jd(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Sn(Dt), ka(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Qr(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (ue(e), e.alternate === null) throw Error(M(340));
          Yi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (ue(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(M(340));
          Yi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Bt(Et), null;
      case 4:
        return ka(), null;
      case 10:
        return Sn(e.type), null;
      case 22:
      case 23:
        return ue(e), Bd(), t !== null && Bt(Pi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Sn(Dt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ib(t, e) {
    switch (jd(e), e.tag) {
      case 3:
        Sn(Dt), ka();
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
        e.memoizedState !== null && ue(e);
        break;
      case 13:
        ue(e);
        break;
      case 19:
        Bt(Et);
        break;
      case 10:
        Sn(e.type);
        break;
      case 22:
      case 23:
        ue(e), Bd(), t !== null && Bt(Pi);
        break;
      case 24:
        Sn(Dt);
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
  function di(t, e, n) {
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
  function ab(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        h0(e, n);
      } catch (i) {
        it(t, t.return, i);
      }
    }
  }
  function sb(t, e, n) {
    n.props = Qi(t.type, t.memoizedProps), n.state = t.memoizedState;
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
  function Fu(t, e, n) {
    try {
      var i = t.stateNode;
      iA(i, t.type, n, e), i[se] = e;
    } catch (a) {
      it(t, t.return, a);
    }
  }
  function rb(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Si(t.type) || t.tag === 4;
  }
  function Xu(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || rb(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Si(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function cf(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = yn));
    else if (i !== 4 && (i === 27 && Si(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null)) for (cf(t, e, n), t = t.sibling; t !== null; ) cf(t, e, n), t = t.sibling;
  }
  function rl(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && (i === 27 && Si(t.type) && (n = t.stateNode), t = t.child, t !== null)) for (rl(t, e, n), t = t.sibling; t !== null; ) rl(t, e, n), t = t.sibling;
  }
  function lb(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var i = t.type, a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
      qt(e, i, n), e[kt] = t, e[se] = n;
    } catch (s) {
      it(t, t.return, s);
    }
  }
  var pn = false, Rt = false, Qu = false, vp = typeof WeakSet == "function" ? WeakSet : Set, Vt = null;
  function VE(t, e) {
    if (t = t.containerInfo, yf = vl, t = Zv(t), Rd(t)) {
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
    for (vf = {
      focusedElem: t,
      selectionRange: n
    }, vl = false, Vt = e; Vt !== null; ) if (e = Vt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Vt = t;
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
              var y = Qi(n.type, a);
              t = i.getSnapshotBeforeUpdate(y, s), i.__reactInternalSnapshotBeforeUpdate = t;
            } catch (v) {
              it(n, n.return, v);
            }
          }
          break;
        case 3:
          if (t & 1024) {
            if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) xf(t);
            else if (n === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                xf(t);
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
        fn(t, n), i & 4 && Vo(5, n);
        break;
      case 1:
        if (fn(t, n), i & 4) if (t = n.stateNode, e === null) try {
          t.componentDidMount();
        } catch (o) {
          it(n, n.return, o);
        }
        else {
          var a = Qi(n.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (o) {
            it(n, n.return, o);
          }
        }
        i & 64 && ab(n), i & 512 && Fs(n, n.return);
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
            h0(t, e);
          } catch (o) {
            it(n, n.return, o);
          }
        }
        break;
      case 27:
        e === null && i & 4 && lb(n);
      case 26:
      case 5:
        fn(t, n), e === null && i & 4 && ob(n), i & 512 && Fs(n, n.return);
        break;
      case 12:
        fn(t, n);
        break;
      case 31:
        fn(t, n), i & 4 && db(t, n);
        break;
      case 13:
        fn(t, n), i & 4 && hb(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = FE.bind(null, n), fA(t, n))));
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
  function cb(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, cb(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && wd(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var vt = null, te = false;
  function cn(t, e, n) {
    for (n = n.child; n !== null; ) fb(t, e, n), n = n.sibling;
  }
  function fb(t, e, n) {
    if (me && typeof me.onCommitFiberUnmount == "function") try {
      me.onCommitFiberUnmount(Do, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        Rt || Je(n, e), cn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Rt || Je(n, e);
        var i = vt, a = te;
        Si(n.type) && (vt = n.stateNode, te = false), cn(t, e, n), Zs(n.stateNode), vt = i, te = a;
        break;
      case 5:
        Rt || Je(n, e);
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
        vt !== null && (te ? (t = vt, Np(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), Ja(t)) : Np(vt, n.stateNode));
        break;
      case 4:
        i = vt, a = te, vt = n.stateNode.containerInfo, te = true, cn(t, e, n), vt = i, te = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        di(2, n, e), Rt || di(4, n, e), cn(t, e, n);
        break;
      case 1:
        Rt || (Je(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && sb(n, e, i)), cn(t, e, n);
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
  function db(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ja(t);
      } catch (n) {
        it(e, e.return, n);
      }
    }
  }
  function hb(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Ja(t);
    } catch (n) {
      it(e, e.return, n);
    }
  }
  function UE(t) {
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
  function sr(t, e) {
    var n = UE(t);
    e.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var a = XE.bind(null, t, i);
        i.then(a, a);
      }
    });
  }
  function It(t, e) {
    var n = e.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var a = n[i], s = t, o = e, r = o;
      t: for (; r !== null; ) {
        switch (r.tag) {
          case 27:
            if (Si(r.type)) {
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
      fb(s, o, a), vt = null, te = false, s = a.alternate, s !== null && (s.return = null), a.return = null;
    }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) mb(e, t), e = e.sibling;
  }
  var Ye = null;
  function mb(t, e) {
    var n = t.alternate, i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        It(e, t), Wt(t), i & 4 && (di(3, t, t.return), Vo(3, t), di(5, t, t.return));
        break;
      case 1:
        It(e, t), Wt(t), i & 512 && (Rt || n === null || Je(n, n.return)), i & 64 && pn && (t = t.updateQueue, t !== null && (i = t.callbacks, i !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
      case 26:
        var a = Ye;
        if (It(e, t), Wt(t), i & 512 && (Rt || n === null || Je(n, n.return)), i & 4) {
          var s = n !== null ? n.memoizedState : null;
          if (i = t.memoizedState, n === null) if (i === null) if (t.stateNode === null) {
            t: {
              i = t.type, n = t.memoizedProps, a = a.ownerDocument || a;
              e: switch (i) {
                case "title":
                  s = a.getElementsByTagName("title")[0], (!s || s[zo] || s[kt] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = a.createElement(i), a.head.insertBefore(s, a.querySelector("head > title"))), qt(s, i, n), s[kt] = t, Ut(s), i = s;
                  break t;
                case "link":
                  var o = Bp("link", "href", a).get(i + (n.href || ""));
                  if (o) {
                    for (var r = 0; r < o.length; r++) if (s = o[r], s.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && s.getAttribute("rel") === (n.rel == null ? null : n.rel) && s.getAttribute("title") === (n.title == null ? null : n.title) && s.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      o.splice(r, 1);
                      break e;
                    }
                  }
                  s = a.createElement(i), qt(s, i, n), a.head.appendChild(s);
                  break;
                case "meta":
                  if (o = Bp("meta", "content", a).get(i + (n.content || ""))) {
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
              s[kt] = t, Ut(s), i = s;
            }
            t.stateNode = i;
          } else Pp(a, t.type, t.stateNode);
          else t.stateNode = Up(a, i, t.memoizedProps);
          else s !== i ? (s === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : s.count--, i === null ? Pp(a, t.type, t.stateNode) : Up(a, i, t.memoizedProps)) : i === null && t.stateNode !== null && Fu(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        It(e, t), Wt(t), i & 512 && (Rt || n === null || Je(n, n.return)), n !== null && i & 4 && Fu(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (It(e, t), Wt(t), i & 512 && (Rt || n === null || Je(n, n.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            Ya(a, "");
          } catch (y) {
            it(t, t.return, y);
          }
        }
        i & 4 && t.stateNode != null && (a = t.memoizedProps, Fu(t, a, n !== null ? n.memoizedProps : a)), i & 1024 && (Qu = true);
        break;
      case 6:
        if (It(e, t), Wt(t), i & 4) {
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
        if (zr = null, a = Ye, Ye = pl(e.containerInfo), It(e, t), Ye = a, Wt(t), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ja(e.containerInfo);
        } catch (y) {
          it(t, t.return, y);
        }
        Qu && (Qu = false, pb(t));
        break;
      case 4:
        i = Ye, Ye = pl(t.stateNode.containerInfo), It(e, t), Wt(t), Ye = i;
        break;
      case 12:
        It(e, t), Wt(t);
        break;
      case 31:
        It(e, t), Wt(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, sr(t, i)));
        break;
      case 13:
        It(e, t), Wt(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && ($l = he()), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, sr(t, i)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var l = n !== null && n.memoizedState !== null, u = pn, c = Rt;
        if (pn = u || a, Rt = c || l, It(e, t), Rt = c, pn = u, Wt(t), i & 8192) t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (n === null || l || pn || Rt || ji(t)), n = null, e = t; ; ) {
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
                a ? zp(d, true) : zp(l.stateNode, false);
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
        i & 4 && (i = t.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, sr(t, n))));
        break;
      case 19:
        It(e, t), Wt(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, sr(t, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        It(e, t), Wt(t);
    }
  }
  function Wt(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (rb(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(M(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, s = Xu(t);
            rl(t, s, a);
            break;
          case 5:
            var o = n.stateNode;
            n.flags & 32 && (Ya(o, ""), n.flags &= -33);
            var r = Xu(t);
            rl(t, r, o);
            break;
          case 3:
          case 4:
            var l = n.stateNode.containerInfo, u = Xu(t);
            cf(t, u, l);
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
  function fn(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) ub(t, e.alternate, e), e = e.sibling;
  }
  function ji(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          di(4, e, e.return), ji(e);
          break;
        case 1:
          Je(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && sb(e, e.return, n), ji(e);
          break;
        case 27:
          Zs(e.stateNode);
        case 26:
        case 5:
          Je(e, e.return), ji(e);
          break;
        case 22:
          e.memoizedState === null && ji(e);
          break;
        case 30:
          ji(e);
          break;
        default:
          ji(e);
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
              if (l !== null) for (a.shared.hiddenCallbacks = null, a = 0; a < l.length; a++) d0(l[a], r);
            } catch (u) {
              it(i, i.return, u);
            }
          }
          n && o & 64 && ab(s), Fs(s, s.return);
          break;
        case 27:
          lb(s);
        case 26:
        case 5:
          hn(a, s, n), n && i === null && o & 4 && ob(s), Fs(s, s.return);
          break;
        case 12:
          hn(a, s, n);
          break;
        case 31:
          hn(a, s, n), n && o & 4 && db(a, s);
          break;
        case 13:
          hn(a, s, n), n && o & 4 && hb(a, s);
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
  function th(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && _o(n));
  }
  function eh(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && _o(t));
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
        Be(t, e, n, i), a & 2048 && Vo(9, e);
        break;
      case 1:
        Be(t, e, n, i);
        break;
      case 3:
        Be(t, e, n, i), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && _o(t)));
        break;
      case 12:
        if (a & 2048) {
          Be(t, e, n, i), t = e.stateNode;
          try {
            var s = e.memoizedProps, o = s.id, r = s.onPostCommit;
            typeof r == "function" && r(o, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
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
        s = e.stateNode, o = e.alternate, e.memoizedState !== null ? s._visibility & 2 ? Be(t, e, n, i) : Xs(t, e) : s._visibility & 2 ? Be(t, e, n, i) : (s._visibility |= 2, fa(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || false)), a & 2048 && th(o, e);
        break;
      case 24:
        Be(t, e, n, i), a & 2048 && eh(e.alternate, e);
        break;
      default:
        Be(t, e, n, i);
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
          o.memoizedState !== null ? c._visibility & 2 ? fa(s, o, r, l, a) : Xs(s, o) : (c._visibility |= 2, fa(s, o, r, l, a)), a && u & 2048 && th(o.alternate, o);
          break;
        case 24:
          fa(s, o, r, l, a), a && u & 2048 && eh(o.alternate, o);
          break;
        default:
          fa(s, o, r, l, a);
      }
      e = e.sibling;
    }
  }
  function Xs(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var n = t, i = e, a = i.flags;
      switch (i.tag) {
        case 22:
          Xs(n, i), a & 2048 && th(i.alternate, i);
          break;
        case 24:
          Xs(n, i), a & 2048 && eh(i.alternate, i);
          break;
        default:
          Xs(n, i);
      }
      e = e.sibling;
    }
  }
  var js = 8192;
  function ua(t, e, n) {
    if (t.subtreeFlags & js) for (t = t.child; t !== null; ) yb(t, e, n), t = t.sibling;
  }
  function yb(t, e, n) {
    switch (t.tag) {
      case 26:
        ua(t, e, n), t.flags & js && t.memoizedState !== null && TA(n, Ye, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ua(t, e, n);
        break;
      case 3:
      case 4:
        var i = Ye;
        Ye = pl(t.stateNode.containerInfo), ua(t, e, n), Ye = i;
        break;
      case 22:
        t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = js, js = 16777216, ua(t, e, n), js = i) : ua(t, e, n));
        break;
      default:
        ua(t, e, n);
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
  function Es(t) {
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
        Es(t), t.flags & 2048 && di(9, t, t.return);
        break;
      case 3:
        Es(t);
        break;
      case 12:
        Es(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Or(t)) : Es(t);
        break;
      default:
        Es(t);
    }
  }
  function Or(t) {
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
          di(8, e, e.return), Or(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Or(e));
          break;
        default:
          Or(e);
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
          _o(n.memoizedState.cache);
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
  var BE = {
    getCacheForType: function(t) {
      var e = Yt(Dt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return Yt(Dt).controller.signal;
    }
  }, PE = typeof WeakMap == "function" ? WeakMap : Map, tt = 0, lt = null, Z = null, I = 0, nt = 0, le = null, Zn = false, rs = false, nh = false, Mn = 0, wt = 0, hi = 0, ki = 0, ih = 0, de = 0, Qa = 0, Qs = null, ee = null, ff = false, $l = 0, Sb = 0, ll = 1 / 0, ul = null, ai = null, _t = 0, si = null, Ka = null, wn = 0, df = 0, hf = null, wb = null, Ks = 0, mf = null;
  function ge() {
    return tt & 2 && I !== 0 ? I & -I : H.T !== null ? sh() : Nv();
  }
  function Tb() {
    if (de === 0) if (!(I & 536870912) || W) {
      var t = Jo;
      Jo <<= 1, !(Jo & 3932160) && (Jo = 262144), de = t;
    } else de = 536870912;
    return t = be.current, t !== null && (t.flags |= 32), de;
  }
  function ae(t, e, n) {
    (t === lt && (nt === 2 || nt === 9) || t.cancelPendingCommit !== null) && (Za(t, 0), $n(t, I, de, false)), No(t, n), (!(tt & 2) || t !== lt) && (t === lt && (!(tt & 2) && (ki |= n), wt === 4 && $n(t, I, de, false)), on(t));
  }
  function Eb(t, e, n) {
    if (tt & 6) throw Error(M(327));
    var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Oo(t, e), a = i ? GE(t, e) : Ku(t, e, true), s = i;
    do {
      if (a === 0) {
        rs && !i && $n(t, e, 0, false);
        break;
      } else {
        if (n = t.current.alternate, s && !HE(n)) {
          a = Ku(t, e, false), s = false;
          continue;
        }
        if (a === 2) {
          if (s = e, t.errorRecoveryDisabledLanes & s) var o = 0;
          else o = t.pendingLanes & -536870913, o = o !== 0 ? o : o & 536870912 ? 536870912 : 0;
          if (o !== 0) {
            e = o;
            t: {
              var r = t;
              a = Qs;
              var l = r.current.memoizedState.isDehydrated;
              if (l && (Za(r, o).flags |= 256), o = Ku(r, o, false), o !== 2) {
                if (nh && !l) {
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
          Za(t, 0), $n(t, e, 0, true);
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
              $n(i, e, de, !Zn);
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
          if ((e & 62914560) === e && (a = $l + 300 - he(), 10 < a)) {
            if ($n(i, e, de, !Zn), Pl(i, 0, true) !== 0) break t;
            wn = e, i.timeoutHandle = qb(bp.bind(null, i, n, ee, ul, ff, e, de, ki, Qa, Zn, s, "Throttled", -0, 0), a);
            break t;
          }
          bp(i, n, ee, ul, ff, e, de, ki, Qa, Zn, s, null, -0, 0);
        }
      }
      break;
    } while (true);
    on(t);
  }
  function bp(t, e, n, i, a, s, o, r, l, u, c, f, h, d) {
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
      }, yb(e, s, f);
      var y = (s & 62914560) === s ? $l - he() : (s & 4194048) === s ? Sb - he() : 0;
      if (y = EA(f, y), y !== null) {
        wn = s, t.cancelPendingCommit = y(Sp.bind(null, t, e, s, n, i, a, o, r, l, c, f, null, h, d)), $n(t, s, o, !u);
        return;
      }
    }
    Sp(t, e, s, n, i, a, o, r, l);
  }
  function HE(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null))) for (var i = 0; i < n.length; i++) {
        var a = n[i], s = a.getSnapshot;
        a = a.value;
        try {
          if (!ve(s(), a)) return false;
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
    e &= ~ih, e &= ~ki, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var s = 31 - pe(a), o = 1 << s;
      i[s] = -1, a &= ~o;
    }
    n !== 0 && Rv(t, n, e);
  }
  function Jl() {
    return tt & 6 ? true : (Uo(0), false);
  }
  function ah() {
    if (Z !== null) {
      if (nt === 0) var t = Z.return;
      else t = Z, vn = Wi = null, Yd(t), La = null, ro = 0, t = Z;
      for (; t !== null; ) ib(t.alternate, t), t = t.return;
      Z = null;
    }
  }
  function Za(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, oA(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), wn = 0, ah(), lt = t, Z = n = xn(t.current, null), I = e, nt = 0, le = null, Zn = false, rs = Oo(t, e), nh = false, Qa = de = ih = ki = hi = wt = 0, ee = Qs = null, ff = false, e & 8 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0) for (t = t.entanglements, i &= e; 0 < i; ) {
      var a = 31 - pe(i), s = 1 << a;
      e |= t[a], i &= ~s;
    }
    return Mn = e, Yl(), n;
  }
  function Ab(t, e) {
    Y = null, H.H = uo, e === os || e === Fl ? (e = Jm(), nt = 3) : e === Vd ? (e = Jm(), nt = 4) : nt = e === Id ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, le = e, Z === null && (wt = 1, sl(t, Me(e, t.current)));
  }
  function Cb() {
    var t = be.current;
    return t === null ? true : (I & 4194048) === I ? Oe === null : (I & 62914560) === I || I & 536870912 ? t === Oe : false;
  }
  function Mb() {
    var t = H.H;
    return H.H = uo, t === null ? uo : t;
  }
  function Rb() {
    var t = H.A;
    return H.A = BE, t;
  }
  function cl() {
    wt = 4, Zn || (I & 4194048) !== I && be.current !== null || (rs = true), !(hi & 134217727) && !(ki & 134217727) || lt === null || $n(lt, I, de, false);
  }
  function Ku(t, e, n) {
    var i = tt;
    tt |= 2;
    var a = Mb(), s = Rb();
    (lt !== t || I !== e) && (ul = null, Za(t, e)), e = false;
    var o = wt;
    t: do
      try {
        if (nt !== 0 && Z !== null) {
          var r = Z, l = le;
          switch (nt) {
            case 8:
              ah(), o = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              be.current === null && (e = true);
              var u = nt;
              if (nt = 0, le = null, Aa(t, r, l, u), n && rs) {
                o = 0;
                break t;
              }
              break;
            default:
              u = nt, nt = 0, le = null, Aa(t, r, l, u);
          }
        }
        kE(), o = wt;
        break;
      } catch (c) {
        Ab(t, c);
      }
    while (true);
    return e && t.shellSuspendCounter++, vn = Wi = null, tt = i, H.H = a, H.A = s, Z === null && (lt = null, I = 0, Yl()), o;
  }
  function kE() {
    for (; Z !== null; ) Db(Z);
  }
  function GE(t, e) {
    var n = tt;
    tt |= 2;
    var i = Mb(), a = Rb();
    lt !== t || I !== e ? (ul = null, ll = he() + 500, Za(t, e)) : rs = Oo(t, e);
    t: do
      try {
        if (nt !== 0 && Z !== null) {
          e = Z;
          var s = le;
          e: switch (nt) {
            case 1:
              nt = 0, le = null, Aa(t, e, s, 1);
              break;
            case 2:
            case 9:
              if ($m(s)) {
                nt = 0, le = null, xp(e);
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
              $m(s) ? (nt = 0, le = null, xp(e)) : (nt = 0, le = null, Aa(t, e, s, 7));
              break;
            case 5:
              var o = null;
              switch (Z.tag) {
                case 26:
                  o = Z.memoizedState;
                case 5:
                case 27:
                  var r = Z;
                  if (o ? Zb(o) : r.stateNode.complete) {
                    nt = 0, le = null;
                    var l = r.sibling;
                    if (l !== null) Z = l;
                    else {
                      var u = r.return;
                      u !== null ? (Z = u, Il(u)) : Z = null;
                    }
                    break e;
                  }
              }
              nt = 0, le = null, Aa(t, e, s, 5);
              break;
            case 6:
              nt = 0, le = null, Aa(t, e, s, 6);
              break;
            case 8:
              ah(), wt = 6;
              break t;
            default:
              throw Error(M(462));
          }
        }
        YE();
        break;
      } catch (c) {
        Ab(t, c);
      }
    while (true);
    return vn = Wi = null, H.H = i, H.A = a, tt = n, Z !== null ? 0 : (lt = null, I = 0, Yl(), wt);
  }
  function YE() {
    for (; Z !== null && !dT(); ) Db(Z);
  }
  function Db(t) {
    var e = nb(t.alternate, t, Mn);
    t.memoizedProps = t.pendingProps, e === null ? Il(t) : Z = e;
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
        Yd(e);
      default:
        ib(n, e), e = Z = i0(e, Mn), e = nb(n, e, Mn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Il(t) : Z = e;
  }
  function Aa(t, e, n, i) {
    vn = Wi = null, Yd(e), La = null, ro = 0;
    var a = e.return;
    try {
      if (NE(t, a, e, n, I)) {
        wt = 1, sl(t, Me(n, t.current)), Z = null;
        return;
      }
    } catch (s) {
      if (a !== null) throw Z = a, s;
      wt = 1, sl(t, Me(n, t.current)), Z = null;
      return;
    }
    e.flags & 32768 ? (W || i === 1 ? t = true : rs || I & 536870912 ? t = false : (Zn = t = true, (i === 2 || i === 9 || i === 3 || i === 6) && (i = be.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Ob(e, t)) : Il(e);
  }
  function Il(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        Ob(e, Zn);
        return;
      }
      t = e.return;
      var n = _E(e.alternate, e, Mn);
      if (n !== null) {
        Z = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Z = e;
        return;
      }
      Z = e = t;
    } while (e !== null);
    wt === 0 && (wt = 5);
  }
  function Ob(t, e) {
    do {
      var n = LE(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Z = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Z = t;
        return;
      }
      Z = t = n;
    } while (t !== null);
    wt = 6, Z = null;
  }
  function Sp(t, e, n, i, a, s, o, r, l) {
    t.cancelPendingCommit = null;
    do
      Wl();
    while (_t !== 0);
    if (tt & 6) throw Error(M(327));
    if (e !== null) {
      if (e === t.current) throw Error(M(177));
      if (s = e.lanes | e.childLanes, s |= Dd, wT(t, n, s, o, r, l), t === lt && (Z = lt = null, I = 0), Ka = e, si = t, wn = n, df = s, hf = a, wb = i, e.subtreeFlags & 10256 || e.flags & 10256 ? (t.callbackNode = null, t.callbackPriority = 0, QE(Kr, function() {
        return Lb(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), i = (e.flags & 13878) !== 0, e.subtreeFlags & 13878 || i) {
        i = H.T, H.T = null, a = et.p, et.p = 2, o = tt, tt |= 4;
        try {
          VE(t, e, n);
        } finally {
          tt = o, et.p = a, H.T = i;
        }
      }
      _t = 1, Nb(), zb(), jb();
    }
  }
  function Nb() {
    if (_t === 1) {
      _t = 0;
      var t = si, e = Ka, n = (e.flags & 13878) !== 0;
      if (e.subtreeFlags & 13878 || n) {
        n = H.T, H.T = null;
        var i = et.p;
        et.p = 2;
        var a = tt;
        tt |= 4;
        try {
          mb(e, t);
          var s = vf, o = Zv(t.containerInfo), r = s.focusedElem, l = s.selectionRange;
          if (o !== r && r && r.ownerDocument && Kv(r.ownerDocument.documentElement, r)) {
            if (l !== null && Rd(r)) {
              var u = l.start, c = l.end;
              if (c === void 0 && (c = u), "selectionStart" in r) r.selectionStart = u, r.selectionEnd = Math.min(c, r.value.length);
              else {
                var f = r.ownerDocument || document, h = f && f.defaultView || window;
                if (h.getSelection) {
                  var d = h.getSelection(), y = r.textContent.length, v = Math.min(l.start, y), x = l.end === void 0 ? v : Math.min(l.end, y);
                  !d.extend && v > x && (o = x, x = v, v = o);
                  var p = Ym(r, v), m = Ym(r, x);
                  if (p && m && (d.rangeCount !== 1 || d.anchorNode !== p.node || d.anchorOffset !== p.offset || d.focusNode !== m.node || d.focusOffset !== m.offset)) {
                    var g = f.createRange();
                    g.setStart(p.node, p.offset), d.removeAllRanges(), v > x ? (d.addRange(g), d.extend(m.node, m.offset)) : (g.setEnd(m.node, m.offset), d.addRange(g));
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
          vl = !!yf, vf = yf = null;
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
      var t = si, e = Ka, n = (e.flags & 8772) !== 0;
      if (e.subtreeFlags & 8772 || n) {
        n = H.T, H.T = null;
        var i = et.p;
        et.p = 2;
        var a = tt;
        tt |= 4;
        try {
          ub(t, e.alternate, e);
        } finally {
          tt = a, et.p = i, H.T = n;
        }
      }
      _t = 3;
    }
  }
  function jb() {
    if (_t === 4 || _t === 3) {
      _t = 0, hT();
      var t = si, e = Ka, n = wn, i = wb;
      e.subtreeFlags & 10256 || e.flags & 10256 ? _t = 5 : (_t = 0, Ka = si = null, _b(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (ai = null), Sd(n), e = e.stateNode, me && typeof me.onCommitFiberRoot == "function") try {
        me.onCommitFiberRoot(Do, e, void 0, (e.current.flags & 128) === 128);
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
      wn & 3 && Wl(), on(t), a = t.pendingLanes, n & 261930 && a & 42 ? t === mf ? Ks++ : (Ks = 0, mf = t) : Ks = 0, Uo(0);
    }
  }
  function _b(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, _o(e)));
  }
  function Wl() {
    return Nb(), zb(), jb(), Lb();
  }
  function Lb() {
    if (_t !== 5) return false;
    var t = si, e = df;
    df = 0;
    var n = Sd(wn), i = H.T, a = et.p;
    try {
      et.p = 32 > n ? 32 : n, H.T = null, n = hf, hf = null;
      var s = si, o = wn;
      if (_t = 0, Ka = si = null, wn = 0, tt & 6) throw Error(M(331));
      var r = tt;
      if (tt |= 4, bb(s.current), gb(s, s.current, o, n), tt = r, Uo(0, false), me && typeof me.onPostCommitFiberRoot == "function") try {
        me.onPostCommitFiberRoot(Do, s);
      } catch {
      }
      return true;
    } finally {
      et.p = a, H.T = i, _b(t, e);
    }
  }
  function wp(t, e, n) {
    e = Me(n, e), e = rf(t.stateNode, e, 2), t = ii(t, e, 2), t !== null && (No(t, 2), on(t));
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
          t = Me(n, t), n = $0(2), i = ii(e, n, 2), i !== null && (J0(n, i, e, t), No(i, 2), on(i));
          break;
        }
      }
      e = e.return;
    }
  }
  function Zu(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new PE();
      var a = /* @__PURE__ */ new Set();
      i.set(e, a);
    } else a = i.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(e, a));
    a.has(n) || (nh = true, a.add(n), t = qE.bind(null, t, e, n), e.then(t, t));
  }
  function qE(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, lt === t && (I & n) === n && (wt === 4 || wt === 3 && (I & 62914560) === I && 300 > he() - $l ? !(tt & 2) && Za(t, 0) : ih |= n, Qa === I && (Qa = 0)), on(t);
  }
  function Vb(t, e) {
    e === 0 && (e = Mv()), t = Ii(t, e), t !== null && (No(t, e), on(t));
  }
  function FE(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Vb(t, n);
  }
  function XE(t, e) {
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
  function QE(t, e) {
    return bd(t, e);
  }
  var fl = null, da = null, pf = false, dl = false, $u = false, Jn = 0;
  function on(t) {
    t !== da && t.next === null && (da === null ? fl = da = t : da = da.next = t), dl = true, pf || (pf = true, ZE());
  }
  function Uo(t, e) {
    if (!$u && dl) {
      $u = true;
      do
        for (var n = false, i = fl; i !== null; ) {
          if (t !== 0) {
            var a = i.pendingLanes;
            if (a === 0) var s = 0;
            else {
              var o = i.suspendedLanes, r = i.pingedLanes;
              s = (1 << 31 - pe(42 | t) + 1) - 1, s &= a & ~(o & ~r), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = true, Tp(i, s));
          } else s = I, s = Pl(i, i === lt ? s : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1), !(s & 3) || Oo(i, s) || (n = true, Tp(i, s));
          i = i.next;
        }
      while (n);
      $u = false;
    }
  }
  function KE() {
    Ub();
  }
  function Ub() {
    dl = pf = false;
    var t = 0;
    Jn !== 0 && sA() && (t = Jn);
    for (var e = he(), n = null, i = fl; i !== null; ) {
      var a = i.next, s = Bb(i, e);
      s === 0 ? (i.next = null, n === null ? fl = a : n.next = a, a === null && (da = n)) : (n = i, (t !== 0 || s & 3) && (dl = true)), i = a;
    }
    _t !== 0 && _t !== 5 || Uo(t), Jn !== 0 && (Jn = 0);
  }
  function Bb(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, a = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var o = 31 - pe(s), r = 1 << o, l = a[o];
      l === -1 ? (!(r & n) || r & i) && (a[o] = ST(r, e)) : l <= e && (t.expiredLanes |= r), s &= ~r;
    }
    if (e = lt, n = I, n = Pl(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), i = t.callbackNode, n === 0 || t === e && (nt === 2 || nt === 9) || t.cancelPendingCommit !== null) return i !== null && i !== null && Eu(i), t.callbackNode = null, t.callbackPriority = 0;
    if (!(n & 3) || Oo(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (i !== null && Eu(i), Sd(n)) {
        case 2:
        case 8:
          n = Av;
          break;
        case 32:
          n = Kr;
          break;
        case 268435456:
          n = Cv;
          break;
        default:
          n = Kr;
      }
      return i = Pb.bind(null, t), n = bd(n, i), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return i !== null && i !== null && Eu(i), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Pb(t, e) {
    if (_t !== 0 && _t !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Wl() && t.callbackNode !== n) return null;
    var i = I;
    return i = Pl(t, t === lt ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), i === 0 ? null : (Eb(t, i, e), Bb(t, he()), t.callbackNode != null && t.callbackNode === n ? Pb.bind(null, t) : null);
  }
  function Tp(t, e) {
    if (Wl()) return null;
    Eb(t, e, true);
  }
  function ZE() {
    rA(function() {
      tt & 6 ? bd(Ev, KE) : Ub();
    });
  }
  function sh() {
    if (Jn === 0) {
      var t = qa;
      t === 0 && (t = $o, $o <<= 1, !($o & 261888) && ($o = 256)), Jn = t;
    }
    return Jn;
  }
  function Ep(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Sr("" + t);
  }
  function Ap(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function $E(t, e, n, i, a) {
    if (e === "submit" && n && n.stateNode === a) {
      var s = Ep((a[se] || null).action), o = i.submitter;
      o && (e = (e = o[se] || null) ? Ep(e.formAction) : o.getAttribute("formAction"), e !== null && (s = e, o = null));
      var r = new Hl("action", "action", null, i, a);
      t.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (Jn !== 0) {
                  var l = o ? Ap(a, o) : new FormData(a);
                  sf(n, {
                    pending: true,
                    data: l,
                    method: a.method,
                    action: s
                  }, null, l);
                }
              } else typeof s == "function" && (r.preventDefault(), l = o ? Ap(a, o) : new FormData(a), sf(n, {
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
  for (var Ju = 0; Ju < Xc.length; Ju++) {
    var Iu = Xc[Ju], JE = Iu.toLowerCase(), IE = Iu[0].toUpperCase() + Iu.slice(1);
    Qe(JE, "on" + IE);
  }
  Qe(Jv, "onAnimationEnd");
  Qe(Iv, "onAnimationIteration");
  Qe(Wv, "onAnimationStart");
  Qe("dblclick", "onDoubleClick");
  Qe("focusin", "onFocus");
  Qe("focusout", "onBlur");
  Qe(mE, "onTransitionRun");
  Qe(pE, "onTransitionStart");
  Qe(gE, "onTransitionCancel");
  Qe(t0, "onTransitionEnd");
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
  var co = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), WE = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co));
  function Hb(t, e) {
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
            $r(c);
          }
          a.currentTarget = null, s = l;
        }
        else for (o = 0; o < i.length; o++) {
          if (r = i[o], l = r.instance, u = r.currentTarget, r = r.listener, l !== s && a.isPropagationStopped()) break t;
          s = r, a.currentTarget = u;
          try {
            s(a);
          } catch (c) {
            $r(c);
          }
          a.currentTarget = null, s = l;
        }
      }
    }
  }
  function K(t, e) {
    var n = e[Bc];
    n === void 0 && (n = e[Bc] = /* @__PURE__ */ new Set());
    var i = t + "__bubble";
    n.has(i) || (kb(e, t, 2, false), n.add(i));
  }
  function Wu(t, e, n) {
    var i = 0;
    e && (i |= 4), kb(n, t, i, e);
  }
  var or = "_reactListening" + Math.random().toString(36).slice(2);
  function oh(t) {
    if (!t[or]) {
      t[or] = true, zv.forEach(function(n) {
        n !== "selectionchange" && (WE.has(n) || Wu(n, false, t), Wu(n, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[or] || (e[or] = true, Wu("selectionchange", false, e));
    }
  }
  function kb(t, e, n, i) {
    switch (t1(e)) {
      case 2:
        var a = MA;
        break;
      case 8:
        a = RA;
        break;
      default:
        a = ch;
    }
    n = a.bind(null, e, n, t), a = void 0, !Yc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = true), i ? a !== void 0 ? t.addEventListener(e, n, {
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
    Hv(function() {
      var u = s, c = Ed(n), f = [];
      t: {
        var h = e0.get(t);
        if (h !== void 0) {
          var d = Hl, y = t;
          switch (t) {
            case "keypress":
              if (Tr(n) === 0) break t;
            case "keydown":
            case "keyup":
              d = XT;
              break;
            case "focusin":
              y = "focus", d = Du;
              break;
            case "focusout":
              y = "blur", d = Du;
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
              d = jm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              d = _T;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              d = ZT;
              break;
            case Jv:
            case Iv:
            case Wv:
              d = UT;
              break;
            case t0:
              d = JT;
              break;
            case "scroll":
            case "scrollend":
              d = zT;
              break;
            case "wheel":
              d = WT;
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
              d = eE;
          }
          var v = (e & 4) !== 0, x = !v && (t === "scroll" || t === "scrollend"), p = v ? h !== null ? h + "Capture" : null : h;
          v = [];
          for (var m = u, g; m !== null; ) {
            var S = m;
            if (g = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || g === null || p === null || (S = no(m, p), S != null && v.push(fo(m, S, g))), x) break;
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
          if (h = t === "mouseover" || t === "pointerover", d = t === "mouseout" || t === "pointerout", h && n !== Gc && (y = n.relatedTarget || n.fromElement) && (ga(y) || y[is])) break t;
          if ((d || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, d ? (y = n.relatedTarget || n.toElement, d = u, y = y ? ga(y) : null, y !== null && (x = Ro(y), v = y.tag, y !== x || v !== 5 && v !== 27 && v !== 6) && (y = null)) : (d = null, y = u), d !== y)) {
            if (v = jm, S = "onMouseLeave", p = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (v = Lm, S = "onPointerLeave", p = "onPointerEnter", m = "pointer"), x = d == null ? h : Ns(d), g = y == null ? h : Ns(y), h = new v(S, m + "leave", d, n, c), h.target = x, h.relatedTarget = g, S = null, ga(c) === u && (v = new v(p, m + "enter", y, n, c), v.target = g, v.relatedTarget = x, S = v), x = S, d && y) e: {
              for (v = tA, p = d, m = y, g = 0, S = p; S; S = v(S)) g++;
              S = 0;
              for (var T = m; T; T = v(T)) S++;
              for (; 0 < g - S; ) p = v(p), g--;
              for (; 0 < S - g; ) m = v(m), S--;
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
            d !== null && Cp(f, h, d, v, false), y !== null && x !== null && Cp(f, x, y, v, true);
          }
        }
        t: {
          if (h = u ? Ns(u) : window, d = h.nodeName && h.nodeName.toLowerCase(), d === "select" || d === "input" && h.type === "file") var A = Pm;
          else if (Bm(h)) if (Xv) A = fE;
          else {
            A = uE;
            var E = lE;
          }
          else d = h.nodeName, !d || d.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? u && Td(u.elementType) && (A = Pm) : A = cE;
          if (A && (A = A(t, u))) {
            Fv(f, A, n, c);
            break t;
          }
          E && E(t, h, u), t === "focusout" && u && h.type === "number" && u.memoizedProps.value != null && kc(h, "number", h.value);
        }
        switch (E = u ? Ns(u) : window, t) {
          case "focusin":
            (Bm(E) || E.contentEditable === "true") && (ba = E, qc = u, Ps = null);
            break;
          case "focusout":
            Ps = qc = ba = null;
            break;
          case "mousedown":
            Fc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Fc = false, qm(f, n, c);
            break;
          case "selectionchange":
            if (hE) break;
          case "keydown":
          case "keyup":
            qm(f, n, c);
        }
        var C;
        if (Md) t: {
          switch (t) {
            case "compositionstart":
              var D = "onCompositionStart";
              break t;
            case "compositionend":
              D = "onCompositionEnd";
              break t;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break t;
          }
          D = void 0;
        }
        else va ? Yv(t, n) && (D = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
        D && (Gv && n.locale !== "ko" && (va || D !== "onCompositionStart" ? D === "onCompositionEnd" && va && (C = kv()) : (Kn = c, Ad = "value" in Kn ? Kn.value : Kn.textContent, va = true)), E = hl(u, D), 0 < E.length && (D = new _m(D, t, null, n, c), f.push({
          event: D,
          listeners: E
        }), C ? D.data = C : (C = qv(n), C !== null && (D.data = C)))), (C = iE ? aE(t, n) : sE(t, n)) && (D = hl(u, "onBeforeInput"), 0 < D.length && (E = new _m("onBeforeInput", "beforeinput", null, n, c), f.push({
          event: E,
          listeners: D
        }), E.data = C)), $E(f, t, u, n, c);
      }
      Hb(f, e);
    });
  }
  function fo(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function hl(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var a = t, s = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || s === null || (a = no(t, n), a != null && i.unshift(fo(t, a, s)), a = no(t, e), a != null && i.push(fo(t, a, s))), t.tag === 3) return i;
      t = t.return;
    }
    return [];
  }
  function tA(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Cp(t, e, n, i, a) {
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
  var eA = /\r\n?/g, nA = /\u0000|\uFFFD/g;
  function Mp(t) {
    return (typeof t == "string" ? t : "" + t).replace(eA, `
`).replace(nA, "");
  }
  function Gb(t, e) {
    return e = Mp(e), Mp(t) === e;
  }
  function ot(t, e, n, i, a, s) {
    switch (n) {
      case "children":
        typeof i == "string" ? e === "body" || e === "textarea" && i === "" || Ya(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && Ya(t, "" + i);
        break;
      case "className":
        Wo(t, "class", i);
        break;
      case "tabIndex":
        Wo(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wo(t, n, i);
        break;
      case "style":
        Pv(t, i, s);
        break;
      case "data":
        if (e !== "object") {
          Wo(t, "data", i);
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
        i = Sr("" + i), t.setAttribute(n, i);
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
        i = Sr("" + i), t.setAttribute(n, i);
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
        n = Sr("" + i), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
        K("beforetoggle", t), K("toggle", t), xr(t, "popover", i);
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
        xr(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = OT.get(n) || n, xr(t, n, i));
    }
  }
  function gf(t, e, n, i, a, s) {
    switch (n) {
      case "style":
        Pv(t, i, s);
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
        if (!jv.hasOwnProperty(n)) t: {
          if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), e = n.slice(2, a ? n.length - 7 : void 0), s = t[se] || null, s = s != null ? s[n] : null, typeof s == "function" && t.removeEventListener(e, s, a), typeof i == "function")) {
            typeof s != "function" && s !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, i, a);
            break t;
          }
          n in t ? t[n] = i : i === true ? t.setAttribute(n, "") : xr(t, n, i);
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
        Vv(t, s, r, l, u, o, a, false);
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
        e = s, n = o, t.multiple = !!i, e != null ? za(t, !!i, e, false) : n != null && za(t, !!i, n, true);
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
        Bv(t, i, a, s);
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
        if (Td(e)) {
          for (c in n) n.hasOwnProperty(c) && (i = n[c], i !== void 0 && gf(t, e, c, i, n, void 0));
          return;
        }
    }
    for (r in n) n.hasOwnProperty(r) && (i = n[r], i != null && ot(t, e, r, i, n, null));
  }
  function iA(t, e, n, i) {
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
        Hc(t, o, r, l, u, c, s, a);
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
        e = r, n = o, i = d, h != null ? za(t, !!n, h, false) : !!i != !!n && (e != null ? za(t, !!n, e, true) : za(t, !!n, n ? [] : "", false));
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
        Uv(t, h, d);
        return;
      case "option":
        for (var y in n) if (h = n[y], n.hasOwnProperty(y) && h != null && !i.hasOwnProperty(y)) switch (y) {
          case "selected":
            t.selected = false;
            break;
          default:
            ot(t, e, y, null, i, h);
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
        for (var v in n) h = n[v], n.hasOwnProperty(v) && h != null && !i.hasOwnProperty(v) && ot(t, e, v, null, i, h);
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
        if (Td(e)) {
          for (var x in n) h = n[x], n.hasOwnProperty(x) && h !== void 0 && !i.hasOwnProperty(x) && gf(t, e, x, void 0, i, h);
          for (c in i) h = i[c], d = n[c], !i.hasOwnProperty(c) || h === d || h === void 0 && d === void 0 || gf(t, e, c, h, i, d);
          return;
        }
    }
    for (var p in n) h = n[p], n.hasOwnProperty(p) && h != null && !i.hasOwnProperty(p) && ot(t, e, p, null, i, h);
    for (f in i) h = i[f], d = n[f], !i.hasOwnProperty(f) || h === d || h == null && d == null || ot(t, e, f, h, i, d);
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
  function aA() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var a = n[i], s = a.transferSize, o = a.initiatorType, r = a.duration;
        if (s && r && Rp(o)) {
          for (o = 0, r = a.responseEnd, i += 1; i < n.length; i++) {
            var l = n[i], u = l.startTime;
            if (u > r) break;
            var c = l.transferSize, f = l.initiatorType;
            c && Rp(f) && (l = l.responseEnd, o += c * (l < r ? 1 : (r - u) / (l - u)));
          }
          if (--i, e += 8 * (s + o) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var yf = null, vf = null;
  function ml(t) {
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
  function bf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var ec = null;
  function sA() {
    var t = window.event;
    return t && t.type === "popstate" ? t === ec ? false : (ec = t, true) : (ec = null, false);
  }
  var qb = typeof setTimeout == "function" ? setTimeout : void 0, oA = typeof clearTimeout == "function" ? clearTimeout : void 0, Op = typeof Promise == "function" ? Promise : void 0, rA = typeof queueMicrotask == "function" ? queueMicrotask : typeof Op < "u" ? function(t) {
    return Op.resolve(null).then(t).catch(lA);
  } : qb;
  function lA(t) {
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
          t.removeChild(a), Ja(e);
          return;
        }
        i--;
      } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") i++;
      else if (n === "html") Zs(t.ownerDocument.documentElement);
      else if (n === "head") {
        n = t.ownerDocument.head, Zs(n);
        for (var s = n.firstChild; s; ) {
          var o = s.nextSibling, r = s.nodeName;
          s[zo] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = o;
        }
      } else n === "body" && Zs(t.ownerDocument.body);
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
  function xf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          xf(n), wd(n);
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
  function uA(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var a = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[zo]) switch (e) {
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
      if (t = Ne(t.nextSibling), t === null) break;
    }
    return null;
  }
  function cA(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ne(t.nextSibling), t === null)) return null;
    return t;
  }
  function Fb(t, e) {
    for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ne(t.nextSibling), t === null)) return null;
    return t;
  }
  function Sf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function wf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function fA(t, e) {
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
  function Ne(t) {
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
  var Tf = null;
  function jp(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Ne(t.nextSibling);
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
  function Xb(t, e, n) {
    switch (e = ml(n), t) {
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
    wd(t);
  }
  var _e = /* @__PURE__ */ new Map(), Lp = /* @__PURE__ */ new Set();
  function pl(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Nn = et.d;
  et.d = {
    f: dA,
    r: hA,
    D: mA,
    C: pA,
    L: gA,
    m: yA,
    X: bA,
    S: vA,
    M: xA
  };
  function dA() {
    var t = Nn.f(), e = Jl();
    return t || e;
  }
  function hA(t) {
    var e = as(t);
    e !== null && e.tag === 5 && e.type === "form" ? P0(e) : Nn.r(t);
  }
  var ls = typeof document > "u" ? null : document;
  function Qb(t, e, n) {
    var i = ls;
    if (i && typeof e == "string" && e) {
      var a = Ce(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Lp.has(a) || (Lp.add(a), t = {
        rel: t,
        crossOrigin: n,
        href: e
      }, i.querySelector(a) === null && (e = i.createElement("link"), qt(e, "link", t), Ut(e), i.head.appendChild(e)));
    }
  }
  function mA(t) {
    Nn.D(t), Qb("dns-prefetch", t, null);
  }
  function pA(t, e) {
    Nn.C(t, e), Qb("preconnect", t, e);
  }
  function gA(t, e, n) {
    Nn.L(t, e, n);
    var i = ls;
    if (i && t && e) {
      var a = 'link[rel="preload"][as="' + Ce(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + Ce(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + Ce(n.imageSizes) + '"]')) : a += '[href="' + Ce(t) + '"]';
      var s = a;
      switch (e) {
        case "style":
          s = $a(t);
          break;
        case "script":
          s = us(t);
      }
      _e.has(s) || (t = gt({
        rel: "preload",
        href: e === "image" && n && n.imageSrcSet ? void 0 : t,
        as: e
      }, n), _e.set(s, t), i.querySelector(a) !== null || e === "style" && i.querySelector(Bo(s)) || e === "script" && i.querySelector(Po(s)) || (e = i.createElement("link"), qt(e, "link", t), Ut(e), i.head.appendChild(e)));
    }
  }
  function yA(t, e) {
    Nn.m(t, e);
    var n = ls;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Ce(i) + '"][href="' + Ce(t) + '"]', s = a;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = us(t);
      }
      if (!_e.has(s) && (t = gt({
        rel: "modulepreload",
        href: t
      }, e), _e.set(s, t), n.querySelector(a) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Po(s))) return;
        }
        i = n.createElement("link"), qt(i, "link", t), Ut(i), n.head.appendChild(i);
      }
    }
  }
  function vA(t, e, n) {
    Nn.S(t, e, n);
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
        if (o = i.querySelector(Bo(s))) r.loading = 5;
        else {
          t = gt({
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          }, n), (n = _e.get(s)) && rh(t, n);
          var l = o = i.createElement("link");
          Ut(l), qt(l, "link", t), l._p = new Promise(function(u, c) {
            l.onload = u, l.onerror = c;
          }), l.addEventListener("load", function() {
            r.loading |= 1;
          }), l.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, Nr(o, e, i);
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
  function bA(t, e) {
    Nn.X(t, e);
    var n = ls;
    if (n && t) {
      var i = Na(n).hoistableScripts, a = us(t), s = i.get(a);
      s || (s = n.querySelector(Po(a)), s || (t = gt({
        src: t,
        async: true
      }, e), (e = _e.get(a)) && lh(t, e), s = n.createElement("script"), Ut(s), qt(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(a, s));
    }
  }
  function xA(t, e) {
    Nn.M(t, e);
    var n = ls;
    if (n && t) {
      var i = Na(n).hoistableScripts, a = us(t), s = i.get(a);
      s || (s = n.querySelector(Po(a)), s || (t = gt({
        src: t,
        async: true,
        type: "module"
      }, e), (e = _e.get(a)) && lh(t, e), s = n.createElement("script"), Ut(s), qt(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(a, s));
    }
  }
  function Vp(t, e, n, i) {
    var a = (a = ti.current) ? pl(a) : null;
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
          }, s.set(t, o), (s = a.querySelector(Bo(t))) && !s._p && (o.instance = s, o.state.loading = 5), _e.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, _e.set(t, n), s || SA(a, t, n, o.state))), e && i === null) throw Error(M(528, ""));
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
    return 'href="' + Ce(t) + '"';
  }
  function Bo(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Kb(t) {
    return gt({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function SA(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
      return i.loading |= 1;
    }), e.addEventListener("error", function() {
      return i.loading |= 2;
    }), qt(e, "link", n), Ut(e), t.head.appendChild(e));
  }
  function us(t) {
    return '[src="' + Ce(t) + '"]';
  }
  function Po(t) {
    return "script[async]" + t;
  }
  function Up(t, e, n) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var i = t.querySelector('style[data-href~="' + Ce(n.href) + '"]');
        if (i) return e.instance = i, Ut(i), i;
        var a = gt({}, n, {
          "data-href": n.href,
          "data-precedence": n.precedence,
          href: null,
          precedence: null
        });
        return i = (t.ownerDocument || t).createElement("style"), Ut(i), qt(i, "style", a), Nr(i, n.precedence, t), e.instance = i;
      case "stylesheet":
        a = $a(n.href);
        var s = t.querySelector(Bo(a));
        if (s) return e.state.loading |= 4, e.instance = s, Ut(s), s;
        i = Kb(n), (a = _e.get(a)) && rh(i, a), s = (t.ownerDocument || t).createElement("link"), Ut(s);
        var o = s;
        return o._p = new Promise(function(r, l) {
          o.onload = r, o.onerror = l;
        }), qt(s, "link", i), e.state.loading |= 4, Nr(s, n.precedence, t), e.instance = s;
      case "script":
        return s = us(n.src), (a = t.querySelector(Po(s))) ? (e.instance = a, Ut(a), a) : (i = n, (a = _e.get(s)) && (i = gt({}, n), lh(i, a)), t = t.ownerDocument || t, a = t.createElement("script"), Ut(a), qt(a, "link", i), t.head.appendChild(a), e.instance = a);
      case "void":
        return null;
      default:
        throw Error(M(443, e.type));
    }
    else e.type === "stylesheet" && !(e.state.loading & 4) && (i = e.instance, e.state.loading |= 4, Nr(i, n.precedence, t));
    return e.instance;
  }
  function Nr(t, e, n) {
    for (var i = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = i.length ? i[i.length - 1] : null, s = a, o = 0; o < i.length; o++) {
      var r = i[o];
      if (r.dataset.precedence === e) s = r;
      else if (s !== a) break;
    }
    s ? s.parentNode.insertBefore(t, s.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function rh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function lh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var zr = null;
  function Bp(t, e, n) {
    if (zr === null) {
      var i = /* @__PURE__ */ new Map(), a = zr = /* @__PURE__ */ new Map();
      a.set(n, i);
    } else a = zr, i = a.get(n), i || (i = /* @__PURE__ */ new Map(), a.set(n, i));
    if (i.has(t)) return i;
    for (i.set(t, null), n = n.getElementsByTagName(t), a = 0; a < n.length; a++) {
      var s = n[a];
      if (!(s[zo] || s[kt] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function Pp(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null);
  }
  function wA(t, e, n) {
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
  function TA(t, e, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== false) && !(n.state.loading & 4)) {
      if (n.instance === null) {
        var a = $a(i.href), s = e.querySelector(Bo(a));
        if (s) {
          e = s._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = gl.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = s, Ut(s);
          return;
        }
        s = e.ownerDocument || e, i = Kb(i), (a = _e.get(a)) && rh(i, a), s = s.createElement("link"), Ut(s);
        var o = s;
        o._p = new Promise(function(r, l) {
          o.onload = r, o.onerror = l;
        }), qt(s, "link", i), n.instance = s;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && !(n.state.loading & 3) && (t.count++, n = gl.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var nc = 0;
  function EA(t, e) {
    return t.stylesheets && t.count === 0 && jr(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (t.stylesheets && jr(t, t.stylesheets), t.unsuspend) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, 6e4 + e);
      0 < t.imgBytes && nc === 0 && (nc = 62500 * aA());
      var a = setTimeout(function() {
        if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && jr(t, t.stylesheets), t.unsuspend)) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, (t.imgBytes > nc ? 50 : 800) + e);
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(i), clearTimeout(a);
      };
    } : null;
  }
  function gl() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) jr(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var yl = null;
  function jr(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, yl = /* @__PURE__ */ new Map(), e.forEach(AA, t), yl = null, gl.call(t));
  }
  function AA(t, e) {
    if (!(e.state.loading & 4)) {
      var n = yl.get(t);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), yl.set(t, n);
        for (var a = t.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < a.length; s++) {
          var o = a[s];
          (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), i = o);
        }
        i && n.set(null, i);
      }
      a = e.instance, o = a.getAttribute("data-precedence"), s = n.get(o) || i, s === i && n.set(null, a), n.set(o, a), this.count++, i = gl.bind(this), a.addEventListener("load", i), a.addEventListener("error", i), s ? s.parentNode.insertBefore(a, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ho = {
    $$typeof: gn,
    Provider: null,
    Consumer: null,
    _currentValue: Ui,
    _currentValue2: Ui,
    _threadCount: 0
  };
  function CA(t, e, n, i, a, s, o, r, l) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Au(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Au(0), this.hiddenUpdates = Au(null), this.identifierPrefix = i, this.onUncaughtError = a, this.onCaughtError = s, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = l, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $b(t, e, n, i, a, s, o, r, l, u, c, f) {
    return t = new CA(t, e, n, o, l, u, c, f, r), e = 1, s === true && (e |= 24), s = fe(3, null, null, e), t.current = s, s.stateNode = t, e = _d(), e.refCount++, t.pooledCache = e, e.refCount++, s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: e
    }, Ud(s), t;
  }
  function Jb(t) {
    return t ? (t = wa, t) : wa;
  }
  function Ib(t, e, n, i, a, s) {
    a = Jb(a), i.context === null ? i.context = a : i.pendingContext = a, i = ni(e), i.payload = {
      element: n
    }, s = s === void 0 ? null : s, s !== null && (i.callback = s), n = ii(t, i, e), n !== null && (ae(n, t, e), ks(n, t, e));
  }
  function Hp(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function uh(t, e) {
    Hp(t, e), (t = t.alternate) && Hp(t, e);
  }
  function Wb(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ii(t, 67108864);
      e !== null && ae(e, t, 67108864), uh(t, 67108864);
    }
  }
  function kp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ge();
      e = xd(e);
      var n = Ii(t, e);
      n !== null && ae(n, t, e), uh(t, e);
    }
  }
  var vl = true;
  function MA(t, e, n, i) {
    var a = H.T;
    H.T = null;
    var s = et.p;
    try {
      et.p = 2, ch(t, e, n, i);
    } finally {
      et.p = s, H.T = a;
    }
  }
  function RA(t, e, n, i) {
    var a = H.T;
    H.T = null;
    var s = et.p;
    try {
      et.p = 8, ch(t, e, n, i);
    } finally {
      et.p = s, H.T = a;
    }
  }
  function ch(t, e, n, i) {
    if (vl) {
      var a = Ef(i);
      if (a === null) tc(t, e, i, bl, n), Gp(t, i);
      else if (OA(a, t, e, n, i)) i.stopPropagation();
      else if (Gp(t, i), e & 4 && -1 < DA.indexOf(t)) {
        for (; a !== null; ) {
          var s = as(a);
          if (s !== null) switch (s.tag) {
            case 3:
              if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                var o = Ni(s.pendingLanes);
                if (o !== 0) {
                  var r = s;
                  for (r.pendingLanes |= 2, r.entangledLanes |= 2; o; ) {
                    var l = 1 << 31 - pe(o);
                    r.entanglements[1] |= l, o &= ~l;
                  }
                  on(s), !(tt & 6) && (ll = he() + 500, Uo(0));
                }
              }
              break;
            case 31:
            case 13:
              r = Ii(s, 2), r !== null && ae(r, s, 2), Jl(), uh(s, 2);
          }
          if (s = Ef(i), s === null && tc(t, e, i, bl, n), s === a) break;
          a = s;
        }
        a !== null && i.stopPropagation();
      } else tc(t, e, i, null, n);
    }
  }
  function Ef(t) {
    return t = Ed(t), fh(t);
  }
  var bl = null;
  function fh(t) {
    if (bl = null, t = ga(t), t !== null) {
      var e = Ro(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = bv(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = xv(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return bl = t, null;
  }
  function t1(t) {
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
        switch (mT()) {
          case Ev:
            return 2;
          case Av:
            return 8;
          case Kr:
          case pT:
            return 32;
          case Cv:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Af = false, oi = null, ri = null, li = null, mo = /* @__PURE__ */ new Map(), po = /* @__PURE__ */ new Map(), Xn = [], DA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Gp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        oi = null;
        break;
      case "dragenter":
      case "dragleave":
        ri = null;
        break;
      case "mouseover":
      case "mouseout":
        li = null;
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
  function As(t, e, n, i, a, s) {
    return t === null || t.nativeEvent !== s ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: s,
      targetContainers: [
        a
      ]
    }, e !== null && (e = as(e), e !== null && Wb(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function OA(t, e, n, i, a) {
    switch (e) {
      case "focusin":
        return oi = As(oi, t, e, n, i, a), true;
      case "dragenter":
        return ri = As(ri, t, e, n, i, a), true;
      case "mouseover":
        return li = As(li, t, e, n, i, a), true;
      case "pointerover":
        var s = a.pointerId;
        return mo.set(s, As(mo.get(s) || null, t, e, n, i, a)), true;
      case "gotpointercapture":
        return s = a.pointerId, po.set(s, As(po.get(s) || null, t, e, n, i, a)), true;
    }
    return false;
  }
  function e1(t) {
    var e = ga(t.target);
    if (e !== null) {
      var n = Ro(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = bv(n), e !== null) {
            t.blockedOn = e, Cm(t.priority, function() {
              kp(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = xv(n), e !== null) {
            t.blockedOn = e, Cm(t.priority, function() {
              kp(n);
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
  function _r(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Ef(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        Gc = i, n.target.dispatchEvent(i), Gc = null;
      } else return e = as(n), e !== null && Wb(e), t.blockedOn = n, false;
      e.shift();
    }
    return true;
  }
  function Yp(t, e, n) {
    _r(t) && n.delete(e);
  }
  function NA() {
    Af = false, oi !== null && _r(oi) && (oi = null), ri !== null && _r(ri) && (ri = null), li !== null && _r(li) && (li = null), mo.forEach(Yp), po.forEach(Yp);
  }
  function rr(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Af || (Af = true, Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, NA)));
  }
  var lr = null;
  function qp(t) {
    lr !== t && (lr = t, Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, function() {
      lr === t && (lr = null);
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e], i = t[e + 1], a = t[e + 2];
        if (typeof i != "function") {
          if (fh(i || n) === null) continue;
          break;
        }
        var s = as(n);
        s !== null && (t.splice(e, 3), e -= 3, sf(s, {
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
      return rr(l, t);
    }
    oi !== null && rr(oi, t), ri !== null && rr(ri, t), li !== null && rr(li, t), mo.forEach(e), po.forEach(e);
    for (var n = 0; n < Xn.length; n++) {
      var i = Xn[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Xn.length && (n = Xn[0], n.blockedOn === null); ) e1(n), n.blockedOn === null && Xn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null) for (i = 0; i < n.length; i += 3) {
      var a = n[i], s = n[i + 1], o = a[se] || null;
      if (typeof s == "function") o || qp(n);
      else if (o) {
        var r = null;
        if (s && s.hasAttribute("formAction")) {
          if (a = s, o = s[se] || null) r = o.formAction;
          else if (fh(a) !== null) continue;
        } else r = o.action;
        typeof r == "function" ? n[i + 1] = r : (n.splice(i, 3), i -= 3), qp(n);
      }
    }
  }
  function n1() {
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
  function dh(t) {
    this._internalRoot = t;
  }
  tu.prototype.render = dh.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(M(409));
    var n = e.current, i = ge();
    Ib(n, i, t, e, null, null);
  };
  tu.prototype.unmount = dh.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Ib(t.current, 2, null, t, null, null), Jl(), e[is] = null;
    }
  };
  function tu(t) {
    this._internalRoot = t;
  }
  tu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Nv();
      t = {
        blockedOn: null,
        target: t,
        priority: e
      };
      for (var n = 0; n < Xn.length && e !== 0 && e < Xn[n].priority; n++) ;
      Xn.splice(n, 0, t), n === 0 && e1(t);
    }
  };
  var Fp = yv.version;
  if (Fp !== "19.2.5") throw Error(M(527, Fp, "19.2.5"));
  et.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(M(188)) : (t = Object.keys(t).join(","), Error(M(268, t)));
    return t = rT(e), t = t !== null ? Sv(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var zA = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ur.isDisabled && ur.supportsFiber) try {
      Do = ur.inject(zA), me = ur;
    } catch {
    }
  }
  Ul.createRoot = function(t, e) {
    if (!vv(t)) throw Error(M(299));
    var n = false, i = "", a = Q0, s = K0, o = Z0;
    return e != null && (e.unstable_strictMode === true && (n = true), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (s = e.onCaughtError), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = $b(t, 1, false, null, null, n, i, null, a, s, o, n1), t[is] = e.current, oh(t), new dh(e);
  };
  Ul.hydrateRoot = function(t, e, n) {
    if (!vv(t)) throw Error(M(299));
    var i = false, a = "", s = Q0, o = K0, r = Z0, l = null;
    return n != null && (n.unstable_strictMode === true && (i = true), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (o = n.onCaughtError), n.onRecoverableError !== void 0 && (r = n.onRecoverableError), n.formState !== void 0 && (l = n.formState)), e = $b(t, 1, true, e, n ?? null, i, a, l, s, o, r, n1), e.context = Jb(null), n = e.current, i = ge(), i = xd(i), a = ni(i), a.callback = null, ii(n, a, i), n = i, e.current.lanes = n, No(e, n), on(e), t[is] = e.current, oh(t), new tu(e);
  };
  Ul.version = "19.2.5";
  function i1() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i1);
    } catch (t) {
      console.error(t);
    }
  }
  i1(), ev.exports = Ul;
  var jA = ev.exports;
  let _A, LA, Xp, UA, BA;
  _A = "modulepreload";
  LA = function(t) {
    return "/amritaraj-nair-portfolio/" + t;
  };
  Xp = {};
  VA = function(e, n, i) {
    let a = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"), r = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
      a = Promise.allSettled(n.map((l) => {
        if (l = LA(l), l in Xp) return;
        Xp[l] = true;
        const u = l.endsWith(".css"), c = u ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${c}`)) return;
        const f = document.createElement("link");
        if (f.rel = u ? "stylesheet" : _A, u || (f.as = "script"), f.crossOrigin = "", f.href = l, r && f.setAttribute("nonce", r), document.head.appendChild(f), u) return new Promise((h, d) => {
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
  UA = 1;
  BA = 1e6;
  let ic = 0;
  function PA() {
    return ic = (ic + 1) % Number.MAX_SAFE_INTEGER, ic.toString();
  }
  const ac = /* @__PURE__ */ new Map(), Qp = (t) => {
    if (ac.has(t)) return;
    const e = setTimeout(() => {
      ac.delete(t), $s({
        type: "REMOVE_TOAST",
        toastId: t
      });
    }, BA);
    ac.set(t, e);
  }, HA = (t, e) => {
    switch (e.type) {
      case "ADD_TOAST":
        return {
          ...t,
          toasts: [
            e.toast,
            ...t.toasts
          ].slice(0, UA)
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
  }, Lr = [];
  let Vr = {
    toasts: []
  };
  function $s(t) {
    Vr = HA(Vr, t), Lr.forEach((e) => {
      e(Vr);
    });
  }
  function kA({ ...t }) {
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
  function a1() {
    const [t, e] = b.useState(Vr);
    return b.useEffect(() => (Lr.push(e), () => {
      const n = Lr.indexOf(e);
      n > -1 && Lr.splice(n, 1);
    }), [
      t
    ]), {
      ...t,
      toast: kA,
      dismiss: (n) => $s({
        type: "DISMISS_TOAST",
        toastId: n
      })
    };
  }
  function jt(t, e, { checkForDefaultPrevented: n = true } = {}) {
    return function(a) {
      if (t == null ? void 0 : t(a), n === false || !a.defaultPrevented) return e == null ? void 0 : e(a);
    };
  }
  function Kp(t, e) {
    if (typeof t == "function") return t(e);
    t != null && (t.current = e);
  }
  function s1(...t) {
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
  function qe(...t) {
    return b.useCallback(s1(...t), t);
  }
  function eu(t, e = []) {
    let n = [];
    function i(s, o) {
      const r = b.createContext(o), l = n.length;
      n = [
        ...n,
        o
      ];
      const u = (f) => {
        var _a5;
        const { scope: h, children: d, ...y } = f, v = ((_a5 = h == null ? void 0 : h[t]) == null ? void 0 : _a5[l]) || r, x = b.useMemo(() => y, Object.values(y));
        return w.jsx(v.Provider, {
          value: x,
          children: d
        });
      };
      u.displayName = s + "Provider";
      function c(f, h) {
        var _a5;
        const d = ((_a5 = h == null ? void 0 : h[t]) == null ? void 0 : _a5[l]) || r, y = b.useContext(d);
        if (y) return y;
        if (o !== void 0) return o;
        throw new Error(`\`${f}\` must be used within \`${s}\``);
      }
      return [
        u,
        c
      ];
    }
    const a = () => {
      const s = n.map((o) => b.createContext(o));
      return function(r) {
        const l = (r == null ? void 0 : r[t]) || s;
        return b.useMemo(() => ({
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
      GA(a, ...e)
    ];
  }
  function GA(...t) {
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
        return b.useMemo(() => ({
          [`__scope${e.scopeName}`]: o
        }), [
          o
        ]);
      };
    };
    return n.scopeName = e.scopeName, n;
  }
  function xl(t) {
    const e = qA(t), n = b.forwardRef((i, a) => {
      const { children: s, ...o } = i, r = b.Children.toArray(s), l = r.find(XA);
      if (l) {
        const u = l.props.children, c = r.map((f) => f === l ? b.Children.count(u) > 1 ? b.Children.only(null) : b.isValidElement(u) ? u.props.children : null : f);
        return w.jsx(e, {
          ...o,
          ref: a,
          children: b.isValidElement(u) ? b.cloneElement(u, void 0, c) : null
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
  var YA = xl("Slot");
  function qA(t) {
    const e = b.forwardRef((n, i) => {
      const { children: a, ...s } = n;
      if (b.isValidElement(a)) {
        const o = KA(a), r = QA(s, a.props);
        return a.type !== b.Fragment && (r.ref = i ? s1(i, o) : o), b.cloneElement(a, r);
      }
      return b.Children.count(a) > 1 ? b.Children.only(null) : null;
    });
    return e.displayName = `${t}.SlotClone`, e;
  }
  var o1 = Symbol("radix.slottable");
  function FA(t) {
    const e = ({ children: n }) => w.jsx(w.Fragment, {
      children: n
    });
    return e.displayName = `${t}.Slottable`, e.__radixId = o1, e;
  }
  function XA(t) {
    return b.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === o1;
  }
  function QA(t, e) {
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
  function KA(t) {
    var _a5, _b3;
    let e = (_a5 = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : _a5.get, n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (_b3 = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : _b3.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
  }
  function ZA(t) {
    const e = t + "CollectionProvider", [n, i] = eu(e), [a, s] = n(e, {
      collectionRef: {
        current: null
      },
      itemMap: /* @__PURE__ */ new Map()
    }), o = (v) => {
      const { scope: x, children: p } = v, m = _.useRef(null), g = _.useRef(/* @__PURE__ */ new Map()).current;
      return w.jsx(a, {
        scope: x,
        itemMap: g,
        collectionRef: m,
        children: p
      });
    };
    o.displayName = e;
    const r = t + "CollectionSlot", l = xl(r), u = _.forwardRef((v, x) => {
      const { scope: p, children: m } = v, g = s(r, p), S = qe(x, g.collectionRef);
      return w.jsx(l, {
        ref: S,
        children: m
      });
    });
    u.displayName = r;
    const c = t + "CollectionItemSlot", f = "data-radix-collection-item", h = xl(c), d = _.forwardRef((v, x) => {
      const { scope: p, children: m, ...g } = v, S = _.useRef(null), T = qe(x, S), A = s(c, p);
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
    function y(v) {
      const x = s(t + "CollectionConsumer", v);
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
        Provider: o,
        Slot: u,
        ItemSlot: d
      },
      y,
      i
    ];
  }
  var $A = [
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
  ], re = $A.reduce((t, e) => {
    const n = xl(`Primitive.${e}`), i = b.forwardRef((a, s) => {
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
  function r1(t, e) {
    t && Mo.flushSync(() => t.dispatchEvent(e));
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
  var IA = "DismissableLayer", Cf = "dismissableLayer.update", WA = "dismissableLayer.pointerDownOutside", tC = "dismissableLayer.focusOutside", Zp, l1 = b.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  }), hh = b.forwardRef((t, e) => {
    const { disableOutsidePointerEvents: n = false, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: o, onDismiss: r, ...l } = t, u = b.useContext(l1), [c, f] = b.useState(null), h = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, d] = b.useState({}), y = qe(e, (E) => f(E)), v = Array.from(u.layers), [x] = [
      ...u.layersWithOutsidePointerEventsDisabled
    ].slice(-1), p = v.indexOf(x), m = c ? v.indexOf(c) : -1, g = u.layersWithOutsidePointerEventsDisabled.size > 0, S = m >= p, T = nC((E) => {
      const C = E.target, D = [
        ...u.branches
      ].some((j) => j.contains(C));
      !S || D || (a == null ? void 0 : a(E), o == null ? void 0 : o(E), E.defaultPrevented || (r == null ? void 0 : r()));
    }, h), A = iC((E) => {
      const C = E.target;
      [
        ...u.branches
      ].some((j) => j.contains(C)) || (s == null ? void 0 : s(E), o == null ? void 0 : o(E), E.defaultPrevented || (r == null ? void 0 : r()));
    }, h);
    return JA((E) => {
      m === u.layers.size - 1 && (i == null ? void 0 : i(E), !E.defaultPrevented && r && (E.preventDefault(), r()));
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
      return document.addEventListener(Cf, E), () => document.removeEventListener(Cf, E);
    }, []), w.jsx(re.div, {
      ...l,
      ref: y,
      style: {
        pointerEvents: g ? S ? "auto" : "none" : void 0,
        ...t.style
      },
      onFocusCapture: jt(t.onFocusCapture, A.onFocusCapture),
      onBlurCapture: jt(t.onBlurCapture, A.onBlurCapture),
      onPointerDownCapture: jt(t.onPointerDownCapture, T.onPointerDownCapture)
    });
  });
  hh.displayName = IA;
  var eC = "DismissableLayerBranch", u1 = b.forwardRef((t, e) => {
    const n = b.useContext(l1), i = b.useRef(null), a = qe(e, i);
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
  u1.displayName = eC;
  function nC(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = mi(t), i = b.useRef(false), a = b.useRef(() => {
    });
    return b.useEffect(() => {
      const s = (r) => {
        if (r.target && !i.current) {
          let l = function() {
            c1(WA, n, u, {
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
  function iC(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = mi(t), i = b.useRef(false);
    return b.useEffect(() => {
      const a = (s) => {
        s.target && !i.current && c1(tC, n, {
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
    const t = new CustomEvent(Cf);
    document.dispatchEvent(t);
  }
  function c1(t, e, n, { discrete: i }) {
    const a = n.originalEvent.target, s = new CustomEvent(t, {
      bubbles: false,
      cancelable: true,
      detail: n
    });
    e && a.addEventListener(t, e, {
      once: true
    }), i ? r1(a, s) : a.dispatchEvent(s);
  }
  var aC = hh, sC = u1, pi = (globalThis == null ? void 0 : globalThis.document) ? b.useLayoutEffect : () => {
  }, oC = "Portal", f1 = b.forwardRef((t, e) => {
    var _a5;
    const { container: n, ...i } = t, [a, s] = b.useState(false);
    pi(() => s(true), []);
    const o = n || a && ((_a5 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a5.body);
    return o ? gv.createPortal(w.jsx(re.div, {
      ...i,
      ref: e
    }), o) : null;
  });
  f1.displayName = oC;
  function rC(t, e) {
    return b.useReducer((n, i) => e[n][i] ?? n, t);
  }
  var mh = (t) => {
    const { present: e, children: n } = t, i = lC(e), a = typeof n == "function" ? n({
      present: i.isPresent
    }) : b.Children.only(n), s = qe(i.ref, uC(a));
    return typeof n == "function" || i.isPresent ? b.cloneElement(a, {
      ref: s
    }) : null;
  };
  mh.displayName = "Presence";
  function lC(t) {
    const [e, n] = b.useState(), i = b.useRef(null), a = b.useRef(t), s = b.useRef("none"), o = t ? "mounted" : "unmounted", [r, l] = rC(o, {
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
      const u = cr(i.current);
      s.current = r === "mounted" ? u : "none";
    }, [
      r
    ]), pi(() => {
      const u = i.current, c = a.current;
      if (c !== t) {
        const h = s.current, d = cr(u);
        t ? l("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && h !== d ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
      }
    }, [
      t,
      l
    ]), pi(() => {
      if (e) {
        let u;
        const c = e.ownerDocument.defaultView ?? window, f = (d) => {
          const v = cr(i.current).includes(d.animationName);
          if (d.target === e && v && (l("ANIMATION_END"), !a.current)) {
            const x = e.style.animationFillMode;
            e.style.animationFillMode = "forwards", u = c.setTimeout(() => {
              e.style.animationFillMode === "forwards" && (e.style.animationFillMode = x);
            });
          }
        }, h = (d) => {
          d.target === e && (s.current = cr(i.current));
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
      ref: b.useCallback((u) => {
        i.current = u ? getComputedStyle(u) : null, n(u);
      }, [])
    };
  }
  function cr(t) {
    return (t == null ? void 0 : t.animationName) || "none";
  }
  function uC(t) {
    var _a5, _b3;
    let e = (_a5 = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : _a5.get, n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (_b3 = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : _b3.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
  }
  var cC = dv[" useInsertionEffect ".trim().toString()] || pi;
  function fC({ prop: t, defaultProp: e, onChange: n = () => {
  }, caller: i }) {
    const [a, s, o] = dC({
      defaultProp: e,
      onChange: n
    }), r = t !== void 0, l = r ? t : a;
    {
      const c = b.useRef(t !== void 0);
      b.useEffect(() => {
        const f = c.current;
        f !== r && console.warn(`${i} is changing from ${f ? "controlled" : "uncontrolled"} to ${r ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = r;
      }, [
        r,
        i
      ]);
    }
    const u = b.useCallback((c) => {
      var _a5;
      if (r) {
        const f = hC(c) ? c(t) : c;
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
  function dC({ defaultProp: t, onChange: e }) {
    const [n, i] = b.useState(t), a = b.useRef(n), s = b.useRef(e);
    return cC(() => {
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
  function hC(t) {
    return typeof t == "function";
  }
  var mC = Object.freeze({
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
  }), pC = "VisuallyHidden", nu = b.forwardRef((t, e) => w.jsx(re.span, {
    ...t,
    ref: e,
    style: {
      ...mC,
      ...t.style
    }
  }));
  nu.displayName = pC;
  var gC = nu, ph = "ToastProvider", [gh, yC, vC] = ZA("Toast"), [d1, Tz] = eu("Toast", [
    vC
  ]), [bC, iu] = d1(ph), h1 = (t) => {
    const { __scopeToast: e, label: n = "Notification", duration: i = 5e3, swipeDirection: a = "right", swipeThreshold: s = 50, children: o } = t, [r, l] = b.useState(null), [u, c] = b.useState(0), f = b.useRef(false), h = b.useRef(false);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${ph}\`. Expected non-empty \`string\`.`), w.jsx(gh.Provider, {
      scope: e,
      children: w.jsx(bC, {
        scope: e,
        label: n,
        duration: i,
        swipeDirection: a,
        swipeThreshold: s,
        toastCount: u,
        viewport: r,
        onViewportChange: l,
        onToastAdd: b.useCallback(() => c((d) => d + 1), []),
        onToastRemove: b.useCallback(() => c((d) => d - 1), []),
        isFocusedToastEscapeKeyDownRef: f,
        isClosePausedRef: h,
        children: o
      })
    });
  };
  h1.displayName = ph;
  var m1 = "ToastViewport", xC = [
    "F8"
  ], Mf = "toast.viewportPause", Rf = "toast.viewportResume", p1 = b.forwardRef((t, e) => {
    const { __scopeToast: n, hotkey: i = xC, label: a = "Notifications ({hotkey})", ...s } = t, o = iu(m1, n), r = yC(n), l = b.useRef(null), u = b.useRef(null), c = b.useRef(null), f = b.useRef(null), h = qe(e, f, o.onViewportChange), d = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = o.toastCount > 0;
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
      if (y && x && p) {
        const m = () => {
          if (!o.isClosePausedRef.current) {
            const A = new CustomEvent(Mf);
            p.dispatchEvent(A), o.isClosePausedRef.current = true;
          }
        }, g = () => {
          if (o.isClosePausedRef.current) {
            const A = new CustomEvent(Rf);
            p.dispatchEvent(A), o.isClosePausedRef.current = false;
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
      y,
      o.isClosePausedRef
    ]);
    const v = b.useCallback(({ tabbingDirection: x }) => {
      const m = r().map((g) => {
        const S = g.ref.current, T = [
          S,
          ...jC(S)
        ];
        return x === "forwards" ? T : T.reverse();
      });
      return (x === "forwards" ? m.reverse() : m).flat();
    }, [
      r
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
            const D = v({
              tabbingDirection: A ? "backwards" : "forwards"
            }), j = D.findIndex((B) => B === T);
            sc(D.slice(j + 1)) ? m.preventDefault() : A ? (_b3 = u.current) == null ? void 0 : _b3.focus() : (_c3 = c.current) == null ? void 0 : _c3.focus();
          }
        };
        return x.addEventListener("keydown", p), () => x.removeEventListener("keydown", p);
      }
    }, [
      r,
      v
    ]), w.jsxs(sC, {
      ref: l,
      role: "region",
      "aria-label": a.replace("{hotkey}", d),
      tabIndex: -1,
      style: {
        pointerEvents: y ? void 0 : "none"
      },
      children: [
        y && w.jsx(Df, {
          ref: u,
          onFocusFromOutsideViewport: () => {
            const x = v({
              tabbingDirection: "forwards"
            });
            sc(x);
          }
        }),
        w.jsx(gh.Slot, {
          scope: n,
          children: w.jsx(re.ol, {
            tabIndex: -1,
            ...s,
            ref: h
          })
        }),
        y && w.jsx(Df, {
          ref: c,
          onFocusFromOutsideViewport: () => {
            const x = v({
              tabbingDirection: "backwards"
            });
            sc(x);
          }
        })
      ]
    });
  });
  p1.displayName = m1;
  var g1 = "ToastFocusProxy", Df = b.forwardRef((t, e) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: i, ...a } = t, s = iu(g1, n);
    return w.jsx(nu, {
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
  Df.displayName = g1;
  var Ho = "Toast", SC = "toast.swipeStart", wC = "toast.swipeMove", TC = "toast.swipeCancel", EC = "toast.swipeEnd", y1 = b.forwardRef((t, e) => {
    const { forceMount: n, open: i, defaultOpen: a, onOpenChange: s, ...o } = t, [r, l] = fC({
      prop: i,
      defaultProp: a ?? true,
      onChange: s,
      caller: Ho
    });
    return w.jsx(mh, {
      present: n || r,
      children: w.jsx(MC, {
        open: r,
        ...o,
        ref: e,
        onClose: () => l(false),
        onPause: mi(t.onPause),
        onResume: mi(t.onResume),
        onSwipeStart: jt(t.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: jt(t.onSwipeMove, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: jt(t.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: jt(t.onSwipeEnd, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), l(false);
        })
      })
    });
  });
  y1.displayName = Ho;
  var [AC, CC] = d1(Ho, {
    onClose() {
    }
  }), MC = b.forwardRef((t, e) => {
    const { __scopeToast: n, type: i = "foreground", duration: a, open: s, onClose: o, onEscapeKeyDown: r, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: f, onSwipeCancel: h, onSwipeEnd: d, ...y } = t, v = iu(Ho, n), [x, p] = b.useState(null), m = qe(e, (L) => p(L)), g = b.useRef(null), S = b.useRef(null), T = a || v.duration, A = b.useRef(0), E = b.useRef(T), C = b.useRef(0), { onToastAdd: D, onToastRemove: j } = v, B = mi(() => {
      var _a5;
      (x == null ? void 0 : x.contains(document.activeElement)) && ((_a5 = v.viewport) == null ? void 0 : _a5.focus()), o();
    }), V = b.useCallback((L) => {
      !L || L === 1 / 0 || (window.clearTimeout(C.current), A.current = (/* @__PURE__ */ new Date()).getTime(), C.current = window.setTimeout(B, L));
    }, [
      B
    ]);
    b.useEffect(() => {
      const L = v.viewport;
      if (L) {
        const F = () => {
          V(E.current), u == null ? void 0 : u();
        }, R = () => {
          const N = (/* @__PURE__ */ new Date()).getTime() - A.current;
          E.current = E.current - N, window.clearTimeout(C.current), l == null ? void 0 : l();
        };
        return L.addEventListener(Mf, R), L.addEventListener(Rf, F), () => {
          L.removeEventListener(Mf, R), L.removeEventListener(Rf, F);
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
    ]), b.useEffect(() => (D(), () => j()), [
      D,
      j
    ]);
    const Q = b.useMemo(() => x ? E1(x) : null, [
      x
    ]);
    return v.viewport ? w.jsxs(w.Fragment, {
      children: [
        Q && w.jsx(RC, {
          __scopeToast: n,
          role: "status",
          "aria-live": i === "foreground" ? "assertive" : "polite",
          "aria-atomic": true,
          children: Q
        }),
        w.jsx(AC, {
          scope: n,
          onClose: B,
          children: Mo.createPortal(w.jsx(gh.ItemSlot, {
            scope: n,
            children: w.jsx(aC, {
              asChild: true,
              onEscapeKeyDown: jt(r, () => {
                v.isFocusedToastEscapeKeyDownRef.current || B(), v.isFocusedToastEscapeKeyDownRef.current = false;
              }),
              children: w.jsx(re.li, {
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
                onKeyDown: jt(t.onKeyDown, (L) => {
                  L.key === "Escape" && (r == null ? void 0 : r(L.nativeEvent), L.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = true, B()));
                }),
                onPointerDown: jt(t.onPointerDown, (L) => {
                  L.button === 0 && (g.current = {
                    x: L.clientX,
                    y: L.clientY
                  });
                }),
                onPointerMove: jt(t.onPointerMove, (L) => {
                  if (!g.current) return;
                  const F = L.clientX - g.current.x, R = L.clientY - g.current.y, N = !!S.current, O = [
                    "left",
                    "right"
                  ].includes(v.swipeDirection), z = [
                    "left",
                    "up"
                  ].includes(v.swipeDirection) ? Math.min : Math.max, P = O ? z(0, F) : 0, ft = O ? 0 : z(0, R), X = L.pointerType === "touch" ? 10 : 2, $ = {
                    x: P,
                    y: ft
                  }, J = {
                    originalEvent: L,
                    delta: $
                  };
                  N ? (S.current = $, fr(wC, f, J, {
                    discrete: false
                  })) : Jp($, v.swipeDirection, X) ? (S.current = $, fr(SC, c, J, {
                    discrete: false
                  }), L.target.setPointerCapture(L.pointerId)) : (Math.abs(F) > X || Math.abs(R) > X) && (g.current = null);
                }),
                onPointerUp: jt(t.onPointerUp, (L) => {
                  const F = S.current, R = L.target;
                  if (R.hasPointerCapture(L.pointerId) && R.releasePointerCapture(L.pointerId), S.current = null, g.current = null, F) {
                    const N = L.currentTarget, O = {
                      originalEvent: L,
                      delta: F
                    };
                    Jp(F, v.swipeDirection, v.swipeThreshold) ? fr(EC, d, O, {
                      discrete: true
                    }) : fr(TC, h, O, {
                      discrete: true
                    }), N.addEventListener("click", (z) => z.preventDefault(), {
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
  }), RC = (t) => {
    const { __scopeToast: e, children: n, ...i } = t, a = iu(Ho, e), [s, o] = b.useState(false), [r, l] = b.useState(false);
    return NC(() => o(true)), b.useEffect(() => {
      const u = window.setTimeout(() => l(true), 1e3);
      return () => window.clearTimeout(u);
    }, []), r ? null : w.jsx(f1, {
      asChild: true,
      children: w.jsx(nu, {
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
  }, DC = "ToastTitle", v1 = b.forwardRef((t, e) => {
    const { __scopeToast: n, ...i } = t;
    return w.jsx(re.div, {
      ...i,
      ref: e
    });
  });
  v1.displayName = DC;
  var OC = "ToastDescription", b1 = b.forwardRef((t, e) => {
    const { __scopeToast: n, ...i } = t;
    return w.jsx(re.div, {
      ...i,
      ref: e
    });
  });
  b1.displayName = OC;
  var x1 = "ToastAction", S1 = b.forwardRef((t, e) => {
    const { altText: n, ...i } = t;
    return n.trim() ? w.jsx(T1, {
      altText: n,
      asChild: true,
      children: w.jsx(yh, {
        ...i,
        ref: e
      })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${x1}\`. Expected non-empty \`string\`.`), null);
  });
  S1.displayName = x1;
  var w1 = "ToastClose", yh = b.forwardRef((t, e) => {
    const { __scopeToast: n, ...i } = t, a = CC(w1, n);
    return w.jsx(T1, {
      asChild: true,
      children: w.jsx(re.button, {
        type: "button",
        ...i,
        ref: e,
        onClick: jt(t.onClick, a.onClose)
      })
    });
  });
  yh.displayName = w1;
  var T1 = b.forwardRef((t, e) => {
    const { __scopeToast: n, altText: i, ...a } = t;
    return w.jsx(re.div, {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": i || void 0,
      ...a,
      ref: e
    });
  });
  function E1(t) {
    const e = [];
    return Array.from(t.childNodes).forEach((i) => {
      if (i.nodeType === i.TEXT_NODE && i.textContent && e.push(i.textContent), zC(i)) {
        const a = i.ariaHidden || i.hidden || i.style.display === "none", s = i.dataset.radixToastAnnounceExclude === "";
        if (!a) if (s) {
          const o = i.dataset.radixToastAnnounceAlt;
          o && e.push(o);
        } else e.push(...E1(i));
      }
    }), e;
  }
  function fr(t, e, n, { discrete: i }) {
    const a = n.originalEvent.currentTarget, s = new CustomEvent(t, {
      bubbles: true,
      cancelable: true,
      detail: n
    });
    e && a.addEventListener(t, e, {
      once: true
    }), i ? r1(a, s) : a.dispatchEvent(s);
  }
  var Jp = (t, e, n = 0) => {
    const i = Math.abs(t.x), a = Math.abs(t.y), s = i > a;
    return e === "left" || e === "right" ? s && i > n : !s && a > n;
  };
  function NC(t = () => {
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
  function zC(t) {
    return t.nodeType === t.ELEMENT_NODE;
  }
  function jC(t) {
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
  var _C = h1, A1 = p1, C1 = y1, M1 = v1, R1 = b1, D1 = S1, O1 = yh;
  function N1(t) {
    var e, n, i = "";
    if (typeof t == "string" || typeof t == "number") i += t;
    else if (typeof t == "object") if (Array.isArray(t)) {
      var a = t.length;
      for (e = 0; e < a; e++) t[e] && (n = N1(t[e])) && (i && (i += " "), i += n);
    } else for (n in t) t[n] && (i && (i += " "), i += n);
    return i;
  }
  function z1() {
    for (var t, e, n = 0, i = "", a = arguments.length; n < a; n++) (t = arguments[n]) && (e = N1(t)) && (i && (i += " "), i += e);
    return i;
  }
  const Ip = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Wp = z1, vh = (t, e) => (n) => {
    var i;
    if ((e == null ? void 0 : e.variants) == null) return Wp(t, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const { variants: a, defaultVariants: s } = e, o = Object.keys(a).map((u) => {
      const c = n == null ? void 0 : n[u], f = s == null ? void 0 : s[u];
      if (c === null) return null;
      const h = Ip(c) || Ip(f);
      return a[u][h];
    }), r = n && Object.entries(n).reduce((u, c) => {
      let [f, h] = c;
      return h === void 0 || (u[f] = h), u;
    }, {}), l = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((u, c) => {
      let { class: f, className: h, ...d } = c;
      return Object.entries(d).every((y) => {
        let [v, x] = y;
        return Array.isArray(x) ? x.includes({
          ...s,
          ...r
        }[v]) : {
          ...s,
          ...r
        }[v] === x;
      }) ? [
        ...u,
        f,
        h
      ] : u;
    }, []);
    return Wp(t, o, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  };
  const LC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), j1 = (...t) => t.filter((e, n, i) => !!e && e.trim() !== "" && i.indexOf(e) === n).join(" ").trim();
  var VC = {
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
  const UC = b.forwardRef(({ color: t = "currentColor", size: e = 24, strokeWidth: n = 2, absoluteStrokeWidth: i, className: a = "", children: s, iconNode: o, ...r }, l) => b.createElement("svg", {
    ref: l,
    ...VC,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(n) * 24 / Number(e) : n,
    className: j1("lucide", a),
    ...r
  }, [
    ...o.map(([u, c]) => b.createElement(u, c)),
    ...Array.isArray(s) ? s : [
      s
    ]
  ]));
  const xe = (t, e) => {
    const n = b.forwardRef(({ className: i, ...a }, s) => b.createElement(UC, {
      ref: s,
      iconNode: e,
      className: j1(`lucide-${LC(t)}`, i),
      ...a
    }));
    return n.displayName = `${t}`, n;
  };
  const _1 = xe("ArrowLeft", [
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
  const tg = xe("Check", [
    [
      "path",
      {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
      }
    ]
  ]);
  const BC = xe("Copy", [
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
  const oc = xe("Download", [
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
  const PC = xe("ExternalLink", [
    [
      "path",
      {
        d: "M15 3h6v6",
        key: "1q9fwt"
      }
    ],
    [
      "path",
      {
        d: "M10 14 21 3",
        key: "gplh6r"
      }
    ],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp"
      }
    ]
  ]);
  const L1 = xe("Gamepad2", [
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
  const HC = xe("Github", [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef"
      }
    ],
    [
      "path",
      {
        d: "M9 18c-4.51 2-5-2-7-2",
        key: "9comsn"
      }
    ]
  ]);
  const kC = xe("Link2", [
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
  const eg = xe("Linkedin", [
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
  const ng = xe("Mail", [
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
  const GC = xe("Menu", [
    [
      "line",
      {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
      }
    ],
    [
      "line",
      {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
      }
    ],
    [
      "line",
      {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
      }
    ]
  ]);
  const YC = xe("Share2", [
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
  const V1 = xe("X", [
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
  ]), bh = "-", qC = (t) => {
    const e = XC(t), { conflictingClassGroups: n, conflictingClassGroupModifiers: i } = t;
    return {
      getClassGroupId: (o) => {
        const r = o.split(bh);
        return r[0] === "" && r.length !== 1 && r.shift(), U1(r, e) || FC(o);
      },
      getConflictingClassGroupIds: (o, r) => {
        const l = n[o] || [];
        return r && i[o] ? [
          ...l,
          ...i[o]
        ] : l;
      }
    };
  }, U1 = (t, e) => {
    var _a5;
    if (t.length === 0) return e.classGroupId;
    const n = t[0], i = e.nextPart.get(n), a = i ? U1(t.slice(1), i) : void 0;
    if (a) return a;
    if (e.validators.length === 0) return;
    const s = t.join(bh);
    return (_a5 = e.validators.find(({ validator: o }) => o(s))) == null ? void 0 : _a5.classGroupId;
  }, ig = /^\[(.+)\]$/, FC = (t) => {
    if (ig.test(t)) {
      const e = ig.exec(t)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  }, XC = (t) => {
    const { theme: e, prefix: n } = t, i = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    return KC(Object.entries(t.classGroups), n).forEach(([s, o]) => {
      Of(o, i, s, e);
    }), i;
  }, Of = (t, e, n, i) => {
    t.forEach((a) => {
      if (typeof a == "string") {
        const s = a === "" ? e : ag(e, a);
        s.classGroupId = n;
        return;
      }
      if (typeof a == "function") {
        if (QC(a)) {
          Of(a(i), e, n, i);
          return;
        }
        e.validators.push({
          validator: a,
          classGroupId: n
        });
        return;
      }
      Object.entries(a).forEach(([s, o]) => {
        Of(o, ag(e, s), n, i);
      });
    });
  }, ag = (t, e) => {
    let n = t;
    return e.split(bh).forEach((i) => {
      n.nextPart.has(i) || n.nextPart.set(i, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      }), n = n.nextPart.get(i);
    }), n;
  }, QC = (t) => t.isThemeGetter, KC = (t, e) => e ? t.map(([n, i]) => {
    const a = i.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([o, r]) => [
      e + o,
      r
    ])) : s);
    return [
      n,
      a
    ];
  }) : t, ZC = (t) => {
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
  }, B1 = "!", $C = (t) => {
    const { separator: e, experimentalParseClassName: n } = t, i = e.length === 1, a = e[0], s = e.length, o = (r) => {
      const l = [];
      let u = 0, c = 0, f;
      for (let x = 0; x < r.length; x++) {
        let p = r[x];
        if (u === 0) {
          if (p === a && (i || r.slice(x, x + s) === e)) {
            l.push(r.slice(c, x)), c = x + s;
            continue;
          }
          if (p === "/") {
            f = x;
            continue;
          }
        }
        p === "[" ? u++ : p === "]" && u--;
      }
      const h = l.length === 0 ? r : r.substring(c), d = h.startsWith(B1), y = d ? h.substring(1) : h, v = f && f > c ? f - c : void 0;
      return {
        modifiers: l,
        hasImportantModifier: d,
        baseClassName: y,
        maybePostfixModifierPosition: v
      };
    };
    return n ? (r) => n({
      className: r,
      parseClassName: o
    }) : o;
  }, JC = (t) => {
    if (t.length <= 1) return t;
    const e = [];
    let n = [];
    return t.forEach((i) => {
      i[0] === "[" ? (e.push(...n.sort(), i), n = []) : n.push(i);
    }), e.push(...n.sort()), e;
  }, IC = (t) => ({
    cache: ZC(t.cacheSize),
    parseClassName: $C(t),
    ...qC(t)
  }), WC = /\s+/, t2 = (t, e) => {
    const { parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: a } = e, s = [], o = t.trim().split(WC);
    let r = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const u = o[l], { modifiers: c, hasImportantModifier: f, baseClassName: h, maybePostfixModifierPosition: d } = n(u);
      let y = !!d, v = i(y ? h.substring(0, d) : h);
      if (!v) {
        if (!y) {
          r = u + (r.length > 0 ? " " + r : r);
          continue;
        }
        if (v = i(h), !v) {
          r = u + (r.length > 0 ? " " + r : r);
          continue;
        }
        y = false;
      }
      const x = JC(c).join(":"), p = f ? x + B1 : x, m = p + v;
      if (s.includes(m)) continue;
      s.push(m);
      const g = a(v, y);
      for (let S = 0; S < g.length; ++S) {
        const T = g[S];
        s.push(p + T);
      }
      r = u + (r.length > 0 ? " " + r : r);
    }
    return r;
  };
  function e2() {
    let t = 0, e, n, i = "";
    for (; t < arguments.length; ) (e = arguments[t++]) && (n = P1(e)) && (i && (i += " "), i += n);
    return i;
  }
  const P1 = (t) => {
    if (typeof t == "string") return t;
    let e, n = "";
    for (let i = 0; i < t.length; i++) t[i] && (e = P1(t[i])) && (n && (n += " "), n += e);
    return n;
  };
  function n2(t, ...e) {
    let n, i, a, s = o;
    function o(l) {
      const u = e.reduce((c, f) => f(c), t());
      return n = IC(u), i = n.cache.get, a = n.cache.set, s = r, r(l);
    }
    function r(l) {
      const u = i(l);
      if (u) return u;
      const c = t2(l, n);
      return a(l, c), c;
    }
    return function() {
      return s(e2.apply(null, arguments));
    };
  }
  const ht = (t) => {
    const e = (n) => n[t] || [];
    return e.isThemeGetter = true, e;
  }, H1 = /^\[(?:([a-z-]+):)?(.+)\]$/i, i2 = /^\d+\/\d+$/, a2 = /* @__PURE__ */ new Set([
    "px",
    "full",
    "screen"
  ]), s2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, o2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, r2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, l2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, u2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, dn = (t) => Ba(t) || a2.has(t) || i2.test(t), Bn = (t) => cs(t, "length", y2), Ba = (t) => !!t && !Number.isNaN(Number(t)), rc = (t) => cs(t, "number", Ba), Cs = (t) => !!t && Number.isInteger(Number(t)), c2 = (t) => t.endsWith("%") && Ba(t.slice(0, -1)), q = (t) => H1.test(t), Pn = (t) => s2.test(t), f2 = /* @__PURE__ */ new Set([
    "length",
    "size",
    "percentage"
  ]), d2 = (t) => cs(t, f2, k1), h2 = (t) => cs(t, "position", k1), m2 = /* @__PURE__ */ new Set([
    "image",
    "url"
  ]), p2 = (t) => cs(t, m2, b2), g2 = (t) => cs(t, "", v2), Ms = () => true, cs = (t, e, n) => {
    const i = H1.exec(t);
    return i ? i[1] ? typeof e == "string" ? i[1] === e : e.has(i[1]) : n(i[2]) : false;
  }, y2 = (t) => o2.test(t) && !r2.test(t), k1 = () => false, v2 = (t) => l2.test(t), b2 = (t) => u2.test(t), x2 = () => {
    const t = ht("colors"), e = ht("spacing"), n = ht("blur"), i = ht("brightness"), a = ht("borderColor"), s = ht("borderRadius"), o = ht("borderSpacing"), r = ht("borderWidth"), l = ht("contrast"), u = ht("grayscale"), c = ht("hueRotate"), f = ht("invert"), h = ht("gap"), d = ht("gradientColorStops"), y = ht("gradientColorStopPositions"), v = ht("inset"), x = ht("margin"), p = ht("opacity"), m = ht("padding"), g = ht("saturate"), S = ht("scale"), T = ht("sepia"), A = ht("skew"), E = ht("space"), C = ht("translate"), D = () => [
      "auto",
      "contain",
      "none"
    ], j = () => [
      "auto",
      "hidden",
      "clip",
      "visible",
      "scroll"
    ], B = () => [
      "auto",
      q,
      e
    ], V = () => [
      q,
      e
    ], Q = () => [
      "",
      dn,
      Bn
    ], L = () => [
      "auto",
      Ba,
      q
    ], F = () => [
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
    ], N = () => [
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
    ], z = () => [
      "",
      "0",
      q
    ], P = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column"
    ], ft = () => [
      Ba,
      q
    ];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [
          Ms
        ],
        spacing: [
          dn,
          Bn
        ],
        blur: [
          "none",
          "",
          Pn,
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
          Pn,
          q
        ],
        borderSpacing: V(),
        borderWidth: Q(),
        contrast: ft(),
        grayscale: z(),
        hueRotate: ft(),
        invert: z(),
        gap: V(),
        gradientColorStops: [
          t
        ],
        gradientColorStopPositions: [
          c2,
          Bn
        ],
        inset: B(),
        margin: B(),
        opacity: ft(),
        padding: V(),
        saturate: ft(),
        scale: ft(),
        sepia: z(),
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
              Pn
            ]
          }
        ],
        "break-after": [
          {
            "break-after": P()
          }
        ],
        "break-before": [
          {
            "break-before": P()
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
              ...F(),
              q
            ]
          }
        ],
        overflow: [
          {
            overflow: j()
          }
        ],
        "overflow-x": [
          {
            "overflow-x": j()
          }
        ],
        "overflow-y": [
          {
            "overflow-y": j()
          }
        ],
        overscroll: [
          {
            overscroll: D()
          }
        ],
        "overscroll-x": [
          {
            "overscroll-x": D()
          }
        ],
        "overscroll-y": [
          {
            "overscroll-y": D()
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
              Cs,
              q
            ]
          }
        ],
        basis: [
          {
            basis: B()
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
            grow: z()
          }
        ],
        shrink: [
          {
            shrink: z()
          }
        ],
        order: [
          {
            order: [
              "first",
              "last",
              "none",
              Cs,
              q
            ]
          }
        ],
        "grid-cols": [
          {
            "grid-cols": [
              Ms
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
                  Cs,
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
              Ms
            ]
          }
        ],
        "row-start-end": [
          {
            row: [
              "auto",
              {
                span: [
                  Cs,
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
                  Pn
                ]
              },
              Pn
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
              Pn,
              Bn
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
              Ms
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
              Ba,
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
              Bn
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
              ...F(),
              h2
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
              d2
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
              p2
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
              Bn
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
            ring: Q()
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
              Bn
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
              Pn,
              g2
            ]
          }
        ],
        "shadow-color": [
          {
            shadow: [
              Ms
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
              ...N(),
              "plus-lighter",
              "plus-darker"
            ]
          }
        ],
        "bg-blend": [
          {
            "bg-blend": N()
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
              Pn,
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
              Cs,
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
              Bn,
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
  }, S2 = n2(x2);
  function zn(...t) {
    return S2(z1(t));
  }
  const w2 = _C, G1 = b.forwardRef(({ className: t, ...e }, n) => w.jsx(A1, {
    ref: n,
    className: zn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", t),
    ...e
  }));
  G1.displayName = A1.displayName;
  const T2 = vh("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }), Y1 = b.forwardRef(({ className: t, variant: e, ...n }, i) => w.jsx(C1, {
    ref: i,
    className: zn(T2({
      variant: e
    }), t),
    ...n
  }));
  Y1.displayName = C1.displayName;
  const E2 = b.forwardRef(({ className: t, ...e }, n) => w.jsx(D1, {
    ref: n,
    className: zn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", t),
    ...e
  }));
  E2.displayName = D1.displayName;
  const q1 = b.forwardRef(({ className: t, ...e }, n) => w.jsx(O1, {
    ref: n,
    className: zn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: w.jsx(V1, {
      className: "h-4 w-4"
    })
  }));
  q1.displayName = O1.displayName;
  const F1 = b.forwardRef(({ className: t, ...e }, n) => w.jsx(M1, {
    ref: n,
    className: zn("text-sm font-semibold", t),
    ...e
  }));
  F1.displayName = M1.displayName;
  const X1 = b.forwardRef(({ className: t, ...e }, n) => w.jsx(R1, {
    ref: n,
    className: zn("text-sm opacity-90", t),
    ...e
  }));
  X1.displayName = R1.displayName;
  function A2() {
    const { toasts: t } = a1();
    return w.jsxs(w2, {
      children: [
        t.map(function({ id: e, title: n, description: i, action: a, ...s }) {
          return w.jsxs(Y1, {
            ...s,
            children: [
              w.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && w.jsx(F1, {
                    children: n
                  }),
                  i && w.jsx(X1, {
                    children: i
                  })
                ]
              }),
              a,
              w.jsx(q1, {})
            ]
          }, e);
        }),
        w.jsx(G1, {})
      ]
    });
  }
  var sg = [
    "light",
    "dark"
  ], C2 = "(prefers-color-scheme: dark)", M2 = b.createContext(void 0), R2 = {
    setTheme: (t) => {
    },
    themes: []
  }, D2 = () => {
    var t;
    return (t = b.useContext(M2)) != null ? t : R2;
  };
  b.memo(({ forcedTheme: t, storageKey: e, attribute: n, enableSystem: i, enableColorScheme: a, defaultTheme: s, value: o, attrs: r, nonce: l }) => {
    let u = s === "system", c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${r.map((y) => `'${y}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = a ? sg.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", h = (y, v = false, x = true) => {
      let p = o ? o[y] : y, m = v ? y + "|| ''" : `'${p}'`, g = "";
      return a && x && !v && sg.includes(y) && (g += `d.style.colorScheme = '${y}';`), n === "class" ? v || p ? g += `c.add(${m})` : g += "null" : p && (g += `d[s](n,${m})`), g;
    }, d = t ? `!function(){${c}${h(t)}}()` : i ? `!function(){try{${c}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${u})){var t='${C2}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${h(o ? "x[e]" : "e", true)}}${u ? "" : "else{" + h(s, false, false) + "}"}${f}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${e}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${h(o ? "x[e]" : "e", true)}}else{${h(s, false, false)};}${f}}catch(t){}}();`;
    return b.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: {
        __html: d
      }
    });
  });
  var O2 = (t) => {
    switch (t) {
      case "success":
        return j2;
      case "info":
        return L2;
      case "warning":
        return _2;
      case "error":
        return V2;
      default:
        return null;
    }
  }, N2 = Array(12).fill(0), z2 = ({ visible: t, className: e }) => _.createElement("div", {
    className: [
      "sonner-loading-wrapper",
      e
    ].filter(Boolean).join(" "),
    "data-visible": t
  }, _.createElement("div", {
    className: "sonner-spinner"
  }, N2.map((n, i) => _.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${i}`
  })))), j2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })), _2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })), L2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })), V2 = _.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, _.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })), U2 = _.createElement("svg", {
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
  })), B2 = () => {
    let [t, e] = _.useState(document.hidden);
    return _.useEffect(() => {
      let n = () => {
        e(document.hidden);
      };
      return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
    }, []), t;
  }, Nf = 1, P2 = class {
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
        let { message: n, ...i } = t, a = typeof (t == null ? void 0 : t.id) == "number" || ((e = t.id) == null ? void 0 : e.length) > 0 ? t.id : Nf++, s = this.toasts.find((r) => r.id === a), o = t.dismissible === void 0 ? true : t.dismissible;
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
          else if (k2(l) && !l.ok) {
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
        let n = (e == null ? void 0 : e.id) || Nf++;
        return this.create({
          jsx: t(n),
          id: n,
          ...e
        }), n;
      }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
    }
  }, ne = new P2(), H2 = (t, e) => {
    let n = (e == null ? void 0 : e.id) || Nf++;
    return ne.addToast({
      title: t,
      ...e,
      id: n
    }), n;
  }, k2 = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number", G2 = H2, Y2 = () => ne.toasts, q2 = () => ne.getActiveToasts();
  Object.assign(G2, {
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
    getHistory: Y2,
    getToasts: q2
  });
  function F2(t, { insertAt: e } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", e === "top" && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
  }
  F2(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
  function dr(t) {
    return t.label !== void 0;
  }
  var X2 = 3, Q2 = "32px", K2 = "16px", og = 4e3, Z2 = 356, $2 = 14, J2 = 20, I2 = 200;
  function Pe(...t) {
    return t.filter(Boolean).join(" ");
  }
  function W2(t) {
    let [e, n] = t.split("-"), i = [];
    return e && i.push(e), n && i.push(n), i;
  }
  var tM = (t) => {
    var e, n, i, a, s, o, r, l, u, c, f;
    let { invert: h, toast: d, unstyled: y, interacting: v, setHeights: x, visibleToasts: p, heights: m, index: g, toasts: S, expanded: T, removeToast: A, defaultRichColors: E, closeButton: C, style: D, cancelButtonStyle: j, actionButtonStyle: B, className: V = "", descriptionClassName: Q = "", duration: L, position: F, gap: R, loadingIcon: N, expandByDefault: O, classNames: z, icons: P, closeButtonAriaLabel: ft = "Close toast", pauseWhenPageIsHidden: X } = t, [$, J] = _.useState(null), [Tt, jn] = _.useState(null), [at, ia] = _.useState(false), [Ti, aa] = _.useState(false), [Ei, ys] = _.useState(false), [Ai, Aw] = _.useState(false), [Cw, fm] = _.useState(false), [Mw, yu] = _.useState(0), [Rw, dm] = _.useState(0), vs = _.useRef(d.duration || L || og), hm = _.useRef(null), Ci = _.useRef(null), Dw = g === 0, Ow = g + 1 <= p, Se = d.type, sa = d.dismissible !== false, Nw = d.className || "", zw = d.descriptionClassName || "", Qo = _.useMemo(() => m.findIndex((k) => k.toastId === d.id) || 0, [
      m,
      d.id
    ]), jw = _.useMemo(() => {
      var k;
      return (k = d.closeButton) != null ? k : C;
    }, [
      d.closeButton,
      C
    ]), mm = _.useMemo(() => d.duration || L || og, [
      d.duration,
      L
    ]), vu = _.useRef(0), oa = _.useRef(0), pm = _.useRef(0), ra = _.useRef(null), [_w, Lw] = F.split("-"), gm = _.useMemo(() => m.reduce((k, st, yt) => yt >= Qo ? k : k + st.height, 0), [
      m,
      Qo
    ]), ym = B2(), Vw = d.invert || h, bu = Se === "loading";
    oa.current = _.useMemo(() => Qo * R + gm, [
      Qo,
      gm
    ]), _.useEffect(() => {
      vs.current = mm;
    }, [
      mm
    ]), _.useEffect(() => {
      ia(true);
    }, []), _.useEffect(() => {
      let k = Ci.current;
      if (k) {
        let st = k.getBoundingClientRect().height;
        return dm(st), x((yt) => [
          {
            toastId: d.id,
            height: st,
            position: d.position
          },
          ...yt
        ]), () => x((yt) => yt.filter((Le) => Le.toastId !== d.id));
      }
    }, [
      x,
      d.id
    ]), _.useLayoutEffect(() => {
      if (!at) return;
      let k = Ci.current, st = k.style.height;
      k.style.height = "auto";
      let yt = k.getBoundingClientRect().height;
      k.style.height = st, dm(yt), x((Le) => Le.find((Ve) => Ve.toastId === d.id) ? Le.map((Ve) => Ve.toastId === d.id ? {
        ...Ve,
        height: yt
      } : Ve) : [
        {
          toastId: d.id,
          height: yt,
          position: d.position
        },
        ...Le
      ]);
    }, [
      at,
      d.title,
      d.description,
      x,
      d.id
    ]);
    let _n7 = _.useCallback(() => {
      aa(true), yu(oa.current), x((k) => k.filter((st) => st.toastId !== d.id)), setTimeout(() => {
        A(d);
      }, I2);
    }, [
      d,
      A,
      x,
      oa
    ]);
    _.useEffect(() => {
      if (d.promise && Se === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
      let k;
      return T || v || X && ym ? (() => {
        if (pm.current < vu.current) {
          let st = (/* @__PURE__ */ new Date()).getTime() - vu.current;
          vs.current = vs.current - st;
        }
        pm.current = (/* @__PURE__ */ new Date()).getTime();
      })() : vs.current !== 1 / 0 && (vu.current = (/* @__PURE__ */ new Date()).getTime(), k = setTimeout(() => {
        var st;
        (st = d.onAutoClose) == null || st.call(d, d), _n7();
      }, vs.current)), () => clearTimeout(k);
    }, [
      T,
      v,
      d,
      Se,
      X,
      ym,
      _n7
    ]), _.useEffect(() => {
      d.delete && _n7();
    }, [
      _n7,
      d.delete
    ]);
    function Uw() {
      var k, st, yt;
      return P != null && P.loading ? _.createElement("div", {
        className: Pe(z == null ? void 0 : z.loader, (k = d == null ? void 0 : d.classNames) == null ? void 0 : k.loader, "sonner-loader"),
        "data-visible": Se === "loading"
      }, P.loading) : N ? _.createElement("div", {
        className: Pe(z == null ? void 0 : z.loader, (st = d == null ? void 0 : d.classNames) == null ? void 0 : st.loader, "sonner-loader"),
        "data-visible": Se === "loading"
      }, N) : _.createElement(z2, {
        className: Pe(z == null ? void 0 : z.loader, (yt = d == null ? void 0 : d.classNames) == null ? void 0 : yt.loader),
        visible: Se === "loading"
      });
    }
    return _.createElement("li", {
      tabIndex: 0,
      ref: Ci,
      className: Pe(V, Nw, z == null ? void 0 : z.toast, (e = d == null ? void 0 : d.classNames) == null ? void 0 : e.toast, z == null ? void 0 : z.default, z == null ? void 0 : z[Se], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[Se]),
      "data-sonner-toast": "",
      "data-rich-colors": (i = d.richColors) != null ? i : E,
      "data-styled": !(d.jsx || d.unstyled || y),
      "data-mounted": at,
      "data-promise": !!d.promise,
      "data-swiped": Cw,
      "data-removed": Ti,
      "data-visible": Ow,
      "data-y-position": _w,
      "data-x-position": Lw,
      "data-index": g,
      "data-front": Dw,
      "data-swiping": Ei,
      "data-dismissible": sa,
      "data-type": Se,
      "data-invert": Vw,
      "data-swipe-out": Ai,
      "data-swipe-direction": Tt,
      "data-expanded": !!(T || O && at),
      style: {
        "--index": g,
        "--toasts-before": g,
        "--z-index": S.length - g,
        "--offset": `${Ti ? Mw : oa.current}px`,
        "--initial-height": O ? "auto" : `${Rw}px`,
        ...D,
        ...d.style
      },
      onDragEnd: () => {
        ys(false), J(null), ra.current = null;
      },
      onPointerDown: (k) => {
        bu || !sa || (hm.current = /* @__PURE__ */ new Date(), yu(oa.current), k.target.setPointerCapture(k.pointerId), k.target.tagName !== "BUTTON" && (ys(true), ra.current = {
          x: k.clientX,
          y: k.clientY
        }));
      },
      onPointerUp: () => {
        var k, st, yt, Le;
        if (Ai || !sa) return;
        ra.current = null;
        let Ve = Number(((k = Ci.current) == null ? void 0 : k.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), Ln = Number(((st = Ci.current) == null ? void 0 : st.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Mi = (/* @__PURE__ */ new Date()).getTime() - ((yt = hm.current) == null ? void 0 : yt.getTime()), Ue = $ === "x" ? Ve : Ln, Vn = Math.abs(Ue) / Mi;
        if (Math.abs(Ue) >= J2 || Vn > 0.11) {
          yu(oa.current), (Le = d.onDismiss) == null || Le.call(d, d), jn($ === "x" ? Ve > 0 ? "right" : "left" : Ln > 0 ? "down" : "up"), _n7(), Aw(true), fm(false);
          return;
        }
        ys(false), J(null);
      },
      onPointerMove: (k) => {
        var st, yt, Le, Ve;
        if (!ra.current || !sa || ((st = window.getSelection()) == null ? void 0 : st.toString().length) > 0) return;
        let Ln = k.clientY - ra.current.y, Mi = k.clientX - ra.current.x, Ue = (yt = t.swipeDirections) != null ? yt : W2(F);
        !$ && (Math.abs(Mi) > 1 || Math.abs(Ln) > 1) && J(Math.abs(Mi) > Math.abs(Ln) ? "x" : "y");
        let Vn = {
          x: 0,
          y: 0
        };
        $ === "y" ? (Ue.includes("top") || Ue.includes("bottom")) && (Ue.includes("top") && Ln < 0 || Ue.includes("bottom") && Ln > 0) && (Vn.y = Ln) : $ === "x" && (Ue.includes("left") || Ue.includes("right")) && (Ue.includes("left") && Mi < 0 || Ue.includes("right") && Mi > 0) && (Vn.x = Mi), (Math.abs(Vn.x) > 0 || Math.abs(Vn.y) > 0) && fm(true), (Le = Ci.current) == null || Le.style.setProperty("--swipe-amount-x", `${Vn.x}px`), (Ve = Ci.current) == null || Ve.style.setProperty("--swipe-amount-y", `${Vn.y}px`);
      }
    }, jw && !d.jsx ? _.createElement("button", {
      "aria-label": ft,
      "data-disabled": bu,
      "data-close-button": true,
      onClick: bu || !sa ? () => {
      } : () => {
        var k;
        _n7(), (k = d.onDismiss) == null || k.call(d, d);
      },
      className: Pe(z == null ? void 0 : z.closeButton, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.closeButton)
    }, (s = P == null ? void 0 : P.close) != null ? s : U2) : null, d.jsx || b.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : _.createElement(_.Fragment, null, Se || d.icon || d.promise ? _.createElement("div", {
      "data-icon": "",
      className: Pe(z == null ? void 0 : z.icon, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || Uw() : null, d.type !== "loading" ? d.icon || (P == null ? void 0 : P[Se]) || O2(Se) : null) : null, _.createElement("div", {
      "data-content": "",
      className: Pe(z == null ? void 0 : z.content, (r = d == null ? void 0 : d.classNames) == null ? void 0 : r.content)
    }, _.createElement("div", {
      "data-title": "",
      className: Pe(z == null ? void 0 : z.title, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.title)
    }, typeof d.title == "function" ? d.title() : d.title), d.description ? _.createElement("div", {
      "data-description": "",
      className: Pe(Q, zw, z == null ? void 0 : z.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description)
    }, typeof d.description == "function" ? d.description() : d.description) : null), b.isValidElement(d.cancel) ? d.cancel : d.cancel && dr(d.cancel) ? _.createElement("button", {
      "data-button": true,
      "data-cancel": true,
      style: d.cancelButtonStyle || j,
      onClick: (k) => {
        var st, yt;
        dr(d.cancel) && sa && ((yt = (st = d.cancel).onClick) == null || yt.call(st, k), _n7());
      },
      className: Pe(z == null ? void 0 : z.cancelButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.cancelButton)
    }, d.cancel.label) : null, b.isValidElement(d.action) ? d.action : d.action && dr(d.action) ? _.createElement("button", {
      "data-button": true,
      "data-action": true,
      style: d.actionButtonStyle || B,
      onClick: (k) => {
        var st, yt;
        dr(d.action) && ((yt = (st = d.action).onClick) == null || yt.call(st, k), !k.defaultPrevented && _n7());
      },
      className: Pe(z == null ? void 0 : z.actionButton, (f = d == null ? void 0 : d.classNames) == null ? void 0 : f.actionButton)
    }, d.action.label) : null));
  };
  function rg() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
  }
  function eM(t, e) {
    let n = {};
    return [
      t,
      e
    ].forEach((i, a) => {
      let s = a === 1, o = s ? "--mobile-offset" : "--offset", r = s ? K2 : Q2;
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
  var nM = b.forwardRef(function(t, e) {
    let { invert: n, position: i = "bottom-right", hotkey: a = [
      "altKey",
      "KeyT"
    ], expand: s, closeButton: o, className: r, offset: l, mobileOffset: u, theme: c = "light", richColors: f, duration: h, style: d, visibleToasts: y = X2, toastOptions: v, dir: x = rg(), gap: p = $2, loadingIcon: m, icons: g, containerAriaLabel: S = "Notifications", pauseWhenPageIsHidden: T } = t, [A, E] = _.useState([]), C = _.useMemo(() => Array.from(new Set([
      i
    ].concat(A.filter((X) => X.position).map((X) => X.position)))), [
      A,
      i
    ]), [D, j] = _.useState([]), [B, V] = _.useState(false), [Q, L] = _.useState(false), [F, R] = _.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), N = _.useRef(null), O = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), z = _.useRef(null), P = _.useRef(false), ft = _.useCallback((X) => {
      E(($) => {
        var J;
        return (J = $.find((Tt) => Tt.id === X.id)) != null && J.delete || ne.dismiss(X.id), $.filter(({ id: Tt }) => Tt !== X.id);
      });
    }, []);
    return _.useEffect(() => ne.subscribe((X) => {
      if (X.dismiss) {
        E(($) => $.map((J) => J.id === X.id ? {
          ...J,
          delete: true
        } : J));
        return;
      }
      setTimeout(() => {
        gv.flushSync(() => {
          E(($) => {
            let J = $.findIndex((Tt) => Tt.id === X.id);
            return J !== -1 ? [
              ...$.slice(0, J),
              {
                ...$[J],
                ...X
              },
              ...$.slice(J + 1)
            ] : [
              X,
              ...$
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
      let X = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        X.addEventListener("change", ({ matches: $ }) => {
          R($ ? "dark" : "light");
        });
      } catch {
        X.addListener(({ matches: J }) => {
          try {
            R(J ? "dark" : "light");
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
      let X = ($) => {
        var J, Tt;
        a.every((jn) => $[jn] || $.code === jn) && (V(true), (J = N.current) == null || J.focus()), $.code === "Escape" && (document.activeElement === N.current || (Tt = N.current) != null && Tt.contains(document.activeElement)) && V(false);
      };
      return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X);
    }, [
      a
    ]), _.useEffect(() => {
      if (N.current) return () => {
        z.current && (z.current.focus({
          preventScroll: true
        }), z.current = null, P.current = false);
      };
    }, [
      N.current
    ]), _.createElement("section", {
      ref: e,
      "aria-label": `${S} ${O}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: true
    }, C.map((X, $) => {
      var J;
      let [Tt, jn] = X.split("-");
      return A.length ? _.createElement("ol", {
        key: X,
        dir: x === "auto" ? rg() : x,
        tabIndex: -1,
        ref: N,
        className: r,
        "data-sonner-toaster": true,
        "data-theme": F,
        "data-y-position": Tt,
        "data-lifted": B && A.length > 1 && !s,
        "data-x-position": jn,
        style: {
          "--front-toast-height": `${((J = D[0]) == null ? void 0 : J.height) || 0}px`,
          "--width": `${Z2}px`,
          "--gap": `${p}px`,
          ...d,
          ...eM(l, u)
        },
        onBlur: (at) => {
          P.current && !at.currentTarget.contains(at.relatedTarget) && (P.current = false, z.current && (z.current.focus({
            preventScroll: true
          }), z.current = null));
        },
        onFocus: (at) => {
          at.target instanceof HTMLElement && at.target.dataset.dismissible === "false" || P.current || (P.current = true, z.current = at.relatedTarget);
        },
        onMouseEnter: () => V(true),
        onMouseMove: () => V(true),
        onMouseLeave: () => {
          Q || V(false);
        },
        onDragEnd: () => V(false),
        onPointerDown: (at) => {
          at.target instanceof HTMLElement && at.target.dataset.dismissible === "false" || L(true);
        },
        onPointerUp: () => L(false)
      }, A.filter((at) => !at.position && $ === 0 || at.position === X).map((at, ia) => {
        var Ti, aa;
        return _.createElement(tM, {
          key: at.id,
          icons: g,
          index: ia,
          toast: at,
          defaultRichColors: f,
          duration: (Ti = v == null ? void 0 : v.duration) != null ? Ti : h,
          className: v == null ? void 0 : v.className,
          descriptionClassName: v == null ? void 0 : v.descriptionClassName,
          invert: n,
          visibleToasts: y,
          closeButton: (aa = v == null ? void 0 : v.closeButton) != null ? aa : o,
          interacting: Q,
          position: X,
          style: v == null ? void 0 : v.style,
          unstyled: v == null ? void 0 : v.unstyled,
          classNames: v == null ? void 0 : v.classNames,
          cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
          actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
          removeToast: ft,
          toasts: A.filter((Ei) => Ei.position == at.position),
          heights: D.filter((Ei) => Ei.position == at.position),
          setHeights: j,
          expandByDefault: s,
          gap: p,
          loadingIcon: m,
          expanded: B,
          pauseWhenPageIsHidden: T,
          swipeDirections: t.swipeDirections
        });
      })) : null;
    }));
  });
  const iM = ({ ...t }) => {
    const { theme: e = "system" } = D2();
    return w.jsx(nM, {
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
  }, aM = [
    "top",
    "right",
    "bottom",
    "left"
  ], gi = Math.min, ce = Math.max, Sl = Math.round, hr = Math.floor, tn = (t) => ({
    x: t,
    y: t
  }), sM = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  }, oM = {
    start: "end",
    end: "start"
  };
  function zf(t, e, n) {
    return ce(t, gi(e, n));
  }
  function Rn(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function Dn(t) {
    return t.split("-")[0];
  }
  function fs(t) {
    return t.split("-")[1];
  }
  function xh(t) {
    return t === "x" ? "y" : "x";
  }
  function Sh(t) {
    return t === "y" ? "height" : "width";
  }
  const rM = /* @__PURE__ */ new Set([
    "top",
    "bottom"
  ]);
  function Ie(t) {
    return rM.has(Dn(t)) ? "y" : "x";
  }
  function wh(t) {
    return xh(Ie(t));
  }
  function lM(t, e, n) {
    n === void 0 && (n = false);
    const i = fs(t), a = wh(t), s = Sh(a);
    let o = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return e.reference[s] > e.floating[s] && (o = wl(o)), [
      o,
      wl(o)
    ];
  }
  function uM(t) {
    const e = wl(t);
    return [
      jf(t),
      e,
      jf(e)
    ];
  }
  function jf(t) {
    return t.replace(/start|end/g, (e) => oM[e]);
  }
  const lg = [
    "left",
    "right"
  ], ug = [
    "right",
    "left"
  ], cM = [
    "top",
    "bottom"
  ], fM = [
    "bottom",
    "top"
  ];
  function dM(t, e, n) {
    switch (t) {
      case "top":
      case "bottom":
        return n ? e ? ug : lg : e ? lg : ug;
      case "left":
      case "right":
        return e ? cM : fM;
      default:
        return [];
    }
  }
  function hM(t, e, n, i) {
    const a = fs(t);
    let s = dM(Dn(t), n === "start", i);
    return a && (s = s.map((o) => o + "-" + a), e && (s = s.concat(s.map(jf)))), s;
  }
  function wl(t) {
    return t.replace(/left|right|bottom|top/g, (e) => sM[e]);
  }
  function mM(t) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...t
    };
  }
  function Q1(t) {
    return typeof t != "number" ? mM(t) : {
      top: t,
      right: t,
      bottom: t,
      left: t
    };
  }
  function Tl(t) {
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
    const s = Ie(e), o = wh(e), r = Sh(o), l = Dn(e), u = s === "y", c = i.x + i.width / 2 - a.width / 2, f = i.y + i.height / 2 - a.height / 2, h = i[r] / 2 - a[r] / 2;
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
  const pM = async (t, e, n) => {
    const { placement: i = "bottom", strategy: a = "absolute", middleware: s = [], platform: o } = n, r = s.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(e));
    let u = await o.getElementRects({
      reference: t,
      floating: e,
      strategy: a
    }), { x: c, y: f } = cg(u, i, l), h = i, d = {}, y = 0;
    for (let v = 0; v < r.length; v++) {
      const { name: x, fn: p } = r[v], { x: m, y: g, data: S, reset: T } = await p({
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
        [x]: {
          ...d[x],
          ...S
        }
      }, T && y <= 50 && (y++, typeof T == "object" && (T.placement && (h = T.placement), T.rects && (u = T.rects === true ? await o.getElementRects({
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
  async function go(t, e) {
    var n;
    e === void 0 && (e = {});
    const { x: i, y: a, platform: s, rects: o, elements: r, strategy: l } = t, { boundary: u = "clippingAncestors", rootBoundary: c = "viewport", elementContext: f = "floating", altBoundary: h = false, padding: d = 0 } = Rn(e, t), y = Q1(d), x = r[h ? f === "floating" ? "reference" : "floating" : f], p = Tl(await s.getClippingRect({
      element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(r.floating)),
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
    }, T = Tl(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: r,
      rect: m,
      offsetParent: g,
      strategy: l
    }) : m);
    return {
      top: (p.top - T.top + y.top) / S.y,
      bottom: (T.bottom - p.bottom + y.bottom) / S.y,
      left: (p.left - T.left + y.left) / S.x,
      right: (T.right - p.right + y.right) / S.x
    };
  }
  const gM = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const { x: n, y: i, placement: a, rects: s, platform: o, elements: r, middlewareData: l } = e, { element: u, padding: c = 0 } = Rn(t, e) || {};
      if (u == null) return {};
      const f = Q1(c), h = {
        x: n,
        y: i
      }, d = wh(a), y = Sh(d), v = await o.getDimensions(u), x = d === "y", p = x ? "top" : "left", m = x ? "bottom" : "right", g = x ? "clientHeight" : "clientWidth", S = s.reference[y] + s.reference[d] - h[d] - s.floating[y], T = h[d] - s.reference[d], A = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
      let E = A ? A[g] : 0;
      (!E || !await (o.isElement == null ? void 0 : o.isElement(A))) && (E = r.floating[g] || s.floating[y]);
      const C = S / 2 - T / 2, D = E / 2 - v[y] / 2 - 1, j = gi(f[p], D), B = gi(f[m], D), V = j, Q = E - v[y] - B, L = E / 2 - v[y] / 2 + C, F = zf(V, L, Q), R = !l.arrow && fs(a) != null && L !== F && s.reference[y] / 2 - (L < V ? j : B) - v[y] / 2 < 0, N = R ? L < V ? L - V : L - Q : 0;
      return {
        [d]: h[d] + N,
        data: {
          [d]: F,
          centerOffset: L - F - N,
          ...R && {
            alignmentOffset: N
          }
        },
        reset: R
      };
    }
  }), yM = function(t) {
    return t === void 0 && (t = {}), {
      name: "flip",
      options: t,
      async fn(e) {
        var n, i;
        const { placement: a, middlewareData: s, rects: o, initialPlacement: r, platform: l, elements: u } = e, { mainAxis: c = true, crossAxis: f = true, fallbackPlacements: h, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: v = true, ...x } = Rn(t, e);
        if ((n = s.arrow) != null && n.alignmentOffset) return {};
        const p = Dn(a), m = Ie(r), g = Dn(r) === r, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), T = h || (g || !v ? [
          wl(r)
        ] : uM(r)), A = y !== "none";
        !h && A && T.push(...hM(r, v, y, S));
        const E = [
          r,
          ...T
        ], C = await go(e, x), D = [];
        let j = ((i = s.flip) == null ? void 0 : i.overflows) || [];
        if (c && D.push(C[p]), f) {
          const L = lM(a, o, S);
          D.push(C[L[0]], C[L[1]]);
        }
        if (j = [
          ...j,
          {
            placement: a,
            overflows: D
          }
        ], !D.every((L) => L <= 0)) {
          var B, V;
          const L = (((B = s.flip) == null ? void 0 : B.index) || 0) + 1, F = E[L];
          if (F && (!(f === "alignment" ? m !== Ie(F) : false) || j.every((O) => O.overflows[0] > 0 && Ie(O.placement) === m))) return {
            data: {
              index: L,
              overflows: j
            },
            reset: {
              placement: F
            }
          };
          let R = (V = j.filter((N) => N.overflows[0] <= 0).sort((N, O) => N.overflows[1] - O.overflows[1])[0]) == null ? void 0 : V.placement;
          if (!R) switch (d) {
            case "bestFit": {
              var Q;
              const N = (Q = j.filter((O) => {
                if (A) {
                  const z = Ie(O.placement);
                  return z === m || z === "y";
                }
                return true;
              }).map((O) => [
                O.placement,
                O.overflows.filter((z) => z > 0).reduce((z, P) => z + P, 0)
              ]).sort((O, z) => O[1] - z[1])[0]) == null ? void 0 : Q[0];
              N && (R = N);
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
  function fg(t, e) {
    return {
      top: t.top - e.height,
      right: t.right - e.width,
      bottom: t.bottom - e.height,
      left: t.left - e.width
    };
  }
  function dg(t) {
    return aM.some((e) => t[e] >= 0);
  }
  const vM = function(t) {
    return t === void 0 && (t = {}), {
      name: "hide",
      options: t,
      async fn(e) {
        const { rects: n } = e, { strategy: i = "referenceHidden", ...a } = Rn(t, e);
        switch (i) {
          case "referenceHidden": {
            const s = await go(e, {
              ...a,
              elementContext: "reference"
            }), o = fg(s, n.reference);
            return {
              data: {
                referenceHiddenOffsets: o,
                referenceHidden: dg(o)
              }
            };
          }
          case "escaped": {
            const s = await go(e, {
              ...a,
              altBoundary: true
            }), o = fg(s, n.floating);
            return {
              data: {
                escapedOffsets: o,
                escaped: dg(o)
              }
            };
          }
          default:
            return {};
        }
      }
    };
  }, K1 = /* @__PURE__ */ new Set([
    "left",
    "top"
  ]);
  async function bM(t, e) {
    const { placement: n, platform: i, elements: a } = t, s = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), o = Dn(n), r = fs(n), l = Ie(n) === "y", u = K1.has(o) ? -1 : 1, c = s && l ? -1 : 1, f = Rn(e, t);
    let { mainAxis: h, crossAxis: d, alignmentAxis: y } = typeof f == "number" ? {
      mainAxis: f,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: f.mainAxis || 0,
      crossAxis: f.crossAxis || 0,
      alignmentAxis: f.alignmentAxis
    };
    return r && typeof y == "number" && (d = r === "end" ? y * -1 : y), l ? {
      x: d * c,
      y: h * u
    } : {
      x: h * u,
      y: d * c
    };
  }
  const xM = function(t) {
    return t === void 0 && (t = 0), {
      name: "offset",
      options: t,
      async fn(e) {
        var n, i;
        const { x: a, y: s, placement: o, middlewareData: r } = e, l = await bM(e, t);
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
  }, SM = function(t) {
    return t === void 0 && (t = {}), {
      name: "shift",
      options: t,
      async fn(e) {
        const { x: n, y: i, placement: a } = e, { mainAxis: s = true, crossAxis: o = false, limiter: r = {
          fn: (x) => {
            let { x: p, y: m } = x;
            return {
              x: p,
              y: m
            };
          }
        }, ...l } = Rn(t, e), u = {
          x: n,
          y: i
        }, c = await go(e, l), f = Ie(Dn(a)), h = xh(f);
        let d = u[h], y = u[f];
        if (s) {
          const x = h === "y" ? "top" : "left", p = h === "y" ? "bottom" : "right", m = d + c[x], g = d - c[p];
          d = zf(m, d, g);
        }
        if (o) {
          const x = f === "y" ? "top" : "left", p = f === "y" ? "bottom" : "right", m = y + c[x], g = y - c[p];
          y = zf(m, y, g);
        }
        const v = r.fn({
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
              [f]: o
            }
          }
        };
      }
    };
  }, wM = function(t) {
    return t === void 0 && (t = {}), {
      options: t,
      fn(e) {
        const { x: n, y: i, placement: a, rects: s, middlewareData: o } = e, { offset: r = 0, mainAxis: l = true, crossAxis: u = true } = Rn(t, e), c = {
          x: n,
          y: i
        }, f = Ie(a), h = xh(f);
        let d = c[h], y = c[f];
        const v = Rn(r, e), x = typeof v == "number" ? {
          mainAxis: v,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...v
        };
        if (l) {
          const g = h === "y" ? "height" : "width", S = s.reference[h] - s.floating[g] + x.mainAxis, T = s.reference[h] + s.reference[g] - x.mainAxis;
          d < S ? d = S : d > T && (d = T);
        }
        if (u) {
          var p, m;
          const g = h === "y" ? "width" : "height", S = K1.has(Dn(a)), T = s.reference[f] - s.floating[g] + (S && ((p = o.offset) == null ? void 0 : p[f]) || 0) + (S ? 0 : x.crossAxis), A = s.reference[f] + s.reference[g] + (S ? 0 : ((m = o.offset) == null ? void 0 : m[f]) || 0) - (S ? x.crossAxis : 0);
          y < T ? y = T : y > A && (y = A);
        }
        return {
          [h]: d,
          [f]: y
        };
      }
    };
  }, TM = function(t) {
    return t === void 0 && (t = {}), {
      name: "size",
      options: t,
      async fn(e) {
        var n, i;
        const { placement: a, rects: s, platform: o, elements: r } = e, { apply: l = () => {
        }, ...u } = Rn(t, e), c = await go(e, u), f = Dn(a), h = fs(a), d = Ie(a) === "y", { width: y, height: v } = s.floating;
        let x, p;
        f === "top" || f === "bottom" ? (x = f, p = h === (await (o.isRTL == null ? void 0 : o.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (p = f, x = h === "end" ? "top" : "bottom");
        const m = v - c.top - c.bottom, g = y - c.left - c.right, S = gi(v - c[x], m), T = gi(y - c[p], g), A = !e.middlewareData.shift;
        let E = S, C = T;
        if ((n = e.middlewareData.shift) != null && n.enabled.x && (C = g), (i = e.middlewareData.shift) != null && i.enabled.y && (E = m), A && !h) {
          const j = ce(c.left, 0), B = ce(c.right, 0), V = ce(c.top, 0), Q = ce(c.bottom, 0);
          d ? C = y - 2 * (j !== 0 || B !== 0 ? j + B : ce(c.left, c.right)) : E = v - 2 * (V !== 0 || Q !== 0 ? V + Q : ce(c.top, c.bottom));
        }
        await l({
          ...e,
          availableWidth: C,
          availableHeight: E
        });
        const D = await o.getDimensions(r.floating);
        return y !== D.width || v !== D.height ? {
          reset: {
            rects: true
          }
        } : {};
      }
    };
  };
  function au() {
    return typeof window < "u";
  }
  function ds(t) {
    return Z1(t) ? (t.nodeName || "").toLowerCase() : "#document";
  }
  function ye(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
  }
  function rn(t) {
    var e;
    return (e = (Z1(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
  }
  function Z1(t) {
    return au() ? t instanceof Node || t instanceof ye(t).Node : false;
  }
  function Fe(t) {
    return au() ? t instanceof Element || t instanceof ye(t).Element : false;
  }
  function nn(t) {
    return au() ? t instanceof HTMLElement || t instanceof ye(t).HTMLElement : false;
  }
  function hg(t) {
    return !au() || typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof ye(t).ShadowRoot;
  }
  const EM = /* @__PURE__ */ new Set([
    "inline",
    "contents"
  ]);
  function ko(t) {
    const { overflow: e, overflowX: n, overflowY: i, display: a } = Xe(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !EM.has(a);
  }
  const AM = /* @__PURE__ */ new Set([
    "table",
    "td",
    "th"
  ]);
  function CM(t) {
    return AM.has(ds(t));
  }
  const MM = [
    ":popover-open",
    ":modal"
  ];
  function su(t) {
    return MM.some((e) => {
      try {
        return t.matches(e);
      } catch {
        return false;
      }
    });
  }
  const RM = [
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
  ], OM = [
    "paint",
    "layout",
    "strict",
    "content"
  ];
  function Th(t) {
    const e = Eh(), n = Fe(t) ? Xe(t) : t;
    return RM.some((i) => n[i] ? n[i] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !e && (n.filter ? n.filter !== "none" : false) || DM.some((i) => (n.willChange || "").includes(i)) || OM.some((i) => (n.contain || "").includes(i));
  }
  function NM(t) {
    let e = yi(t);
    for (; nn(e) && !Ia(e); ) {
      if (Th(e)) return e;
      if (su(e)) return null;
      e = yi(e);
    }
    return null;
  }
  function Eh() {
    return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
  }
  const zM = /* @__PURE__ */ new Set([
    "html",
    "body",
    "#document"
  ]);
  function Ia(t) {
    return zM.has(ds(t));
  }
  function Xe(t) {
    return ye(t).getComputedStyle(t);
  }
  function ou(t) {
    return Fe(t) ? {
      scrollLeft: t.scrollLeft,
      scrollTop: t.scrollTop
    } : {
      scrollLeft: t.scrollX,
      scrollTop: t.scrollY
    };
  }
  function yi(t) {
    if (ds(t) === "html") return t;
    const e = t.assignedSlot || t.parentNode || hg(t) && t.host || rn(t);
    return hg(e) ? e.host : e;
  }
  function $1(t) {
    const e = yi(t);
    return Ia(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : nn(e) && ko(e) ? e : $1(e);
  }
  function yo(t, e, n) {
    var i;
    e === void 0 && (e = []), n === void 0 && (n = true);
    const a = $1(t), s = a === ((i = t.ownerDocument) == null ? void 0 : i.body), o = ye(a);
    if (s) {
      const r = _f(o);
      return e.concat(o, o.visualViewport || [], ko(a) ? a : [], r && n ? yo(r) : []);
    }
    return e.concat(a, yo(a, [], n));
  }
  function _f(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
  }
  function J1(t) {
    const e = Xe(t);
    let n = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
    const a = nn(t), s = a ? t.offsetWidth : n, o = a ? t.offsetHeight : i, r = Sl(n) !== s || Sl(i) !== o;
    return r && (n = s, i = o), {
      width: n,
      height: i,
      $: r
    };
  }
  function Ah(t) {
    return Fe(t) ? t : t.contextElement;
  }
  function Pa(t) {
    const e = Ah(t);
    if (!nn(e)) return tn(1);
    const n = e.getBoundingClientRect(), { width: i, height: a, $: s } = J1(e);
    let o = (s ? Sl(n.width) : n.width) / i, r = (s ? Sl(n.height) : n.height) / a;
    return (!o || !Number.isFinite(o)) && (o = 1), (!r || !Number.isFinite(r)) && (r = 1), {
      x: o,
      y: r
    };
  }
  const jM = tn(0);
  function I1(t) {
    const e = ye(t);
    return !Eh() || !e.visualViewport ? jM : {
      x: e.visualViewport.offsetLeft,
      y: e.visualViewport.offsetTop
    };
  }
  function _M(t, e, n) {
    return e === void 0 && (e = false), !n || e && n !== ye(t) ? false : e;
  }
  function Ki(t, e, n, i) {
    e === void 0 && (e = false), n === void 0 && (n = false);
    const a = t.getBoundingClientRect(), s = Ah(t);
    let o = tn(1);
    e && (i ? Fe(i) && (o = Pa(i)) : o = Pa(t));
    const r = _M(s, n, i) ? I1(s) : tn(0);
    let l = (a.left + r.x) / o.x, u = (a.top + r.y) / o.y, c = a.width / o.x, f = a.height / o.y;
    if (s) {
      const h = ye(s), d = i && Fe(i) ? ye(i) : i;
      let y = h, v = _f(y);
      for (; v && i && d !== y; ) {
        const x = Pa(v), p = v.getBoundingClientRect(), m = Xe(v), g = p.left + (v.clientLeft + parseFloat(m.paddingLeft)) * x.x, S = p.top + (v.clientTop + parseFloat(m.paddingTop)) * x.y;
        l *= x.x, u *= x.y, c *= x.x, f *= x.y, l += g, u += S, y = ye(v), v = _f(y);
      }
    }
    return Tl({
      width: c,
      height: f,
      x: l,
      y: u
    });
  }
  function Ch(t, e) {
    const n = ou(t).scrollLeft;
    return e ? e.left + n : Ki(rn(t)).left + n;
  }
  function W1(t, e, n) {
    n === void 0 && (n = false);
    const i = t.getBoundingClientRect(), a = i.left + e.scrollLeft - (n ? 0 : Ch(t, i)), s = i.top + e.scrollTop;
    return {
      x: a,
      y: s
    };
  }
  function LM(t) {
    let { elements: e, rect: n, offsetParent: i, strategy: a } = t;
    const s = a === "fixed", o = rn(i), r = e ? su(e.floating) : false;
    if (i === o || r && s) return n;
    let l = {
      scrollLeft: 0,
      scrollTop: 0
    }, u = tn(1);
    const c = tn(0), f = nn(i);
    if ((f || !f && !s) && ((ds(i) !== "body" || ko(o)) && (l = ou(i)), nn(i))) {
      const d = Ki(i);
      u = Pa(i), c.x = d.x + i.clientLeft, c.y = d.y + i.clientTop;
    }
    const h = o && !f && !s ? W1(o, l, true) : tn(0);
    return {
      width: n.width * u.x,
      height: n.height * u.y,
      x: n.x * u.x - l.scrollLeft * u.x + c.x + h.x,
      y: n.y * u.y - l.scrollTop * u.y + c.y + h.y
    };
  }
  function VM(t) {
    return Array.from(t.getClientRects());
  }
  function UM(t) {
    const e = rn(t), n = ou(t), i = t.ownerDocument.body, a = ce(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth), s = ce(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
    let o = -n.scrollLeft + Ch(t);
    const r = -n.scrollTop;
    return Xe(i).direction === "rtl" && (o += ce(e.clientWidth, i.clientWidth) - a), {
      width: a,
      height: s,
      x: o,
      y: r
    };
  }
  function BM(t, e) {
    const n = ye(t), i = rn(t), a = n.visualViewport;
    let s = i.clientWidth, o = i.clientHeight, r = 0, l = 0;
    if (a) {
      s = a.width, o = a.height;
      const u = Eh();
      (!u || u && e === "fixed") && (r = a.offsetLeft, l = a.offsetTop);
    }
    return {
      width: s,
      height: o,
      x: r,
      y: l
    };
  }
  const PM = /* @__PURE__ */ new Set([
    "absolute",
    "fixed"
  ]);
  function HM(t, e) {
    const n = Ki(t, true, e === "fixed"), i = n.top + t.clientTop, a = n.left + t.clientLeft, s = nn(t) ? Pa(t) : tn(1), o = t.clientWidth * s.x, r = t.clientHeight * s.y, l = a * s.x, u = i * s.y;
    return {
      width: o,
      height: r,
      x: l,
      y: u
    };
  }
  function mg(t, e, n) {
    let i;
    if (e === "viewport") i = BM(t, n);
    else if (e === "document") i = UM(rn(t));
    else if (Fe(e)) i = HM(e, n);
    else {
      const a = I1(t);
      i = {
        x: e.x - a.x,
        y: e.y - a.y,
        width: e.width,
        height: e.height
      };
    }
    return Tl(i);
  }
  function tx(t, e) {
    const n = yi(t);
    return n === e || !Fe(n) || Ia(n) ? false : Xe(n).position === "fixed" || tx(n, e);
  }
  function kM(t, e) {
    const n = e.get(t);
    if (n) return n;
    let i = yo(t, [], false).filter((r) => Fe(r) && ds(r) !== "body"), a = null;
    const s = Xe(t).position === "fixed";
    let o = s ? yi(t) : t;
    for (; Fe(o) && !Ia(o); ) {
      const r = Xe(o), l = Th(o);
      !l && r.position === "fixed" && (a = null), (s ? !l && !a : !l && r.position === "static" && !!a && PM.has(a.position) || ko(o) && !l && tx(t, o)) ? i = i.filter((c) => c !== o) : a = r, o = yi(o);
    }
    return e.set(t, i), i;
  }
  function GM(t) {
    let { element: e, boundary: n, rootBoundary: i, strategy: a } = t;
    const o = [
      ...n === "clippingAncestors" ? su(e) ? [] : kM(e, this._c) : [].concat(n),
      i
    ], r = o[0], l = o.reduce((u, c) => {
      const f = mg(e, c, a);
      return u.top = ce(f.top, u.top), u.right = gi(f.right, u.right), u.bottom = gi(f.bottom, u.bottom), u.left = ce(f.left, u.left), u;
    }, mg(e, r, a));
    return {
      width: l.right - l.left,
      height: l.bottom - l.top,
      x: l.left,
      y: l.top
    };
  }
  function YM(t) {
    const { width: e, height: n } = J1(t);
    return {
      width: e,
      height: n
    };
  }
  function qM(t, e, n) {
    const i = nn(e), a = rn(e), s = n === "fixed", o = Ki(t, true, s, e);
    let r = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const l = tn(0);
    function u() {
      l.x = Ch(a);
    }
    if (i || !i && !s) if ((ds(e) !== "body" || ko(a)) && (r = ou(e)), i) {
      const d = Ki(e, true, s, e);
      l.x = d.x + e.clientLeft, l.y = d.y + e.clientTop;
    } else a && u();
    s && !i && a && u();
    const c = a && !i && !s ? W1(a, r) : tn(0), f = o.left + r.scrollLeft - l.x - c.x, h = o.top + r.scrollTop - l.y - c.y;
    return {
      x: f,
      y: h,
      width: o.width,
      height: o.height
    };
  }
  function lc(t) {
    return Xe(t).position === "static";
  }
  function pg(t, e) {
    if (!nn(t) || Xe(t).position === "fixed") return null;
    if (e) return e(t);
    let n = t.offsetParent;
    return rn(t) === n && (n = n.ownerDocument.body), n;
  }
  function ex(t, e) {
    const n = ye(t);
    if (su(t)) return n;
    if (!nn(t)) {
      let a = yi(t);
      for (; a && !Ia(a); ) {
        if (Fe(a) && !lc(a)) return a;
        a = yi(a);
      }
      return n;
    }
    let i = pg(t, e);
    for (; i && CM(i) && lc(i); ) i = pg(i, e);
    return i && Ia(i) && lc(i) && !Th(i) ? n : i || NM(t) || n;
  }
  const FM = async function(t) {
    const e = this.getOffsetParent || ex, n = this.getDimensions, i = await n(t.floating);
    return {
      reference: qM(t.reference, await e(t.floating), t.strategy),
      floating: {
        x: 0,
        y: 0,
        width: i.width,
        height: i.height
      }
    };
  };
  function XM(t) {
    return Xe(t).direction === "rtl";
  }
  const QM = {
    convertOffsetParentRelativeRectToViewportRelativeRect: LM,
    getDocumentElement: rn,
    getClippingRect: GM,
    getOffsetParent: ex,
    getElementRects: FM,
    getClientRects: VM,
    getDimensions: YM,
    getScale: Pa,
    isElement: Fe,
    isRTL: XM
  };
  function nx(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
  }
  function KM(t, e) {
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
      const y = hr(f), v = hr(a.clientWidth - (c + h)), x = hr(a.clientHeight - (f + d)), p = hr(c), g = {
        rootMargin: -y + "px " + -v + "px " + -x + "px " + -p + "px",
        threshold: ce(0, gi(1, l)) || 1
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
        E === 1 && !nx(u, t.getBoundingClientRect()) && o(), S = false;
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
  function ZM(t, e, n, i) {
    i === void 0 && (i = {});
    const { ancestorScroll: a = true, ancestorResize: s = true, elementResize: o = typeof ResizeObserver == "function", layoutShift: r = typeof IntersectionObserver == "function", animationFrame: l = false } = i, u = Ah(t), c = a || s ? [
      ...u ? yo(u) : [],
      ...yo(e)
    ] : [];
    c.forEach((p) => {
      a && p.addEventListener("scroll", n, {
        passive: true
      }), s && p.addEventListener("resize", n);
    });
    const f = u && r ? KM(u, n) : null;
    let h = -1, d = null;
    o && (d = new ResizeObserver((p) => {
      let [m] = p;
      m && m.target === u && d && (d.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
        var g;
        (g = d) == null || g.observe(e);
      })), n();
    }), u && !l && d.observe(u), d.observe(e));
    let y, v = l ? Ki(t) : null;
    l && x();
    function x() {
      const p = Ki(t);
      v && !nx(v, p) && n(), v = p, y = requestAnimationFrame(x);
    }
    return n(), () => {
      var p;
      c.forEach((m) => {
        a && m.removeEventListener("scroll", n), s && m.removeEventListener("resize", n);
      }), f == null ? void 0 : f(), (p = d) == null || p.disconnect(), d = null, l && cancelAnimationFrame(y);
    };
  }
  const $M = xM, JM = SM, IM = yM, WM = TM, tR = vM, gg = gM, eR = wM, nR = (t, e, n) => {
    const i = /* @__PURE__ */ new Map(), a = {
      platform: QM,
      ...n
    }, s = {
      ...a.platform,
      _c: i
    };
    return pM(t, e, {
      ...a,
      platform: s
    });
  };
  var iR = typeof document < "u", aR = function() {
  }, Ur = iR ? b.useLayoutEffect : aR;
  function El(t, e) {
    if (t === e) return true;
    if (typeof t != typeof e) return false;
    if (typeof t == "function" && t.toString() === e.toString()) return true;
    let n, i, a;
    if (t && e && typeof t == "object") {
      if (Array.isArray(t)) {
        if (n = t.length, n !== e.length) return false;
        for (i = n; i-- !== 0; ) if (!El(t[i], e[i])) return false;
        return true;
      }
      if (a = Object.keys(t), n = a.length, n !== Object.keys(e).length) return false;
      for (i = n; i-- !== 0; ) if (!{}.hasOwnProperty.call(e, a[i])) return false;
      for (i = n; i-- !== 0; ) {
        const s = a[i];
        if (!(s === "_owner" && t.$$typeof) && !El(t[s], e[s])) return false;
      }
      return true;
    }
    return t !== t && e !== e;
  }
  function ix(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function yg(t, e) {
    const n = ix(t);
    return Math.round(e * n) / n;
  }
  function uc(t) {
    const e = b.useRef(t);
    return Ur(() => {
      e.current = t;
    }), e;
  }
  function sR(t) {
    t === void 0 && (t = {});
    const { placement: e = "bottom", strategy: n = "absolute", middleware: i = [], platform: a, elements: { reference: s, floating: o } = {}, transform: r = true, whileElementsMounted: l, open: u } = t, [c, f] = b.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: e,
      middlewareData: {},
      isPositioned: false
    }), [h, d] = b.useState(i);
    El(h, i) || d(i);
    const [y, v] = b.useState(null), [x, p] = b.useState(null), m = b.useCallback((O) => {
      O !== A.current && (A.current = O, v(O));
    }, []), g = b.useCallback((O) => {
      O !== E.current && (E.current = O, p(O));
    }, []), S = s || y, T = o || x, A = b.useRef(null), E = b.useRef(null), C = b.useRef(c), D = l != null, j = uc(l), B = uc(a), V = uc(u), Q = b.useCallback(() => {
      if (!A.current || !E.current) return;
      const O = {
        placement: e,
        strategy: n,
        middleware: h
      };
      B.current && (O.platform = B.current), nR(A.current, E.current, O).then((z) => {
        const P = {
          ...z,
          isPositioned: V.current !== false
        };
        L.current && !El(C.current, P) && (C.current = P, Mo.flushSync(() => {
          f(P);
        }));
      });
    }, [
      h,
      e,
      n,
      B,
      V
    ]);
    Ur(() => {
      u === false && C.current.isPositioned && (C.current.isPositioned = false, f((O) => ({
        ...O,
        isPositioned: false
      })));
    }, [
      u
    ]);
    const L = b.useRef(false);
    Ur(() => (L.current = true, () => {
      L.current = false;
    }), []), Ur(() => {
      if (S && (A.current = S), T && (E.current = T), S && T) {
        if (j.current) return j.current(S, T, Q);
        Q();
      }
    }, [
      S,
      T,
      Q,
      j,
      D
    ]);
    const F = b.useMemo(() => ({
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
    ]), N = b.useMemo(() => {
      const O = {
        position: n,
        left: 0,
        top: 0
      };
      if (!R.floating) return O;
      const z = yg(R.floating, c.x), P = yg(R.floating, c.y);
      return r ? {
        ...O,
        transform: "translate(" + z + "px, " + P + "px)",
        ...ix(R.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: n,
        left: z,
        top: P
      };
    }, [
      n,
      r,
      R.floating,
      c.x,
      c.y
    ]);
    return b.useMemo(() => ({
      ...c,
      update: Q,
      refs: F,
      elements: R,
      floatingStyles: N
    }), [
      c,
      Q,
      F,
      R,
      N
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
  }, rR = (t, e) => ({
    ...$M(t),
    options: [
      t,
      e
    ]
  }), lR = (t, e) => ({
    ...JM(t),
    options: [
      t,
      e
    ]
  }), uR = (t, e) => ({
    ...eR(t),
    options: [
      t,
      e
    ]
  }), cR = (t, e) => ({
    ...IM(t),
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
    ...oR(t),
    options: [
      t,
      e
    ]
  });
  var mR = "Arrow", ax = b.forwardRef((t, e) => {
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
  ax.displayName = mR;
  var pR = ax;
  function gR(t) {
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
  var sx = "Popper", [ox, rx] = eu(sx), [Ez, lx] = ox(sx), ux = "PopperAnchor", cx = b.forwardRef((t, e) => {
    const { __scopePopper: n, virtualRef: i, ...a } = t, s = lx(ux, n), o = b.useRef(null), r = qe(e, o);
    return b.useEffect(() => {
      s.onAnchorChange((i == null ? void 0 : i.current) || o.current);
    }), i ? null : w.jsx(re.div, {
      ...a,
      ref: r
    });
  });
  cx.displayName = ux;
  var Mh = "PopperContent", [yR, vR] = ox(Mh), fx = b.forwardRef((t, e) => {
    var _a5, _b3, _c3, _d3, _e9, _f3;
    const { __scopePopper: n, side: i = "bottom", sideOffset: a = 0, align: s = "center", alignOffset: o = 0, arrowPadding: r = 0, avoidCollisions: l = true, collisionBoundary: u = [], collisionPadding: c = 0, sticky: f = "partial", hideWhenDetached: h = false, updatePositionStrategy: d = "optimized", onPlaced: y, ...v } = t, x = lx(Mh, n), [p, m] = b.useState(null), g = qe(e, (at) => m(at)), [S, T] = b.useState(null), A = gR(S), E = (A == null ? void 0 : A.width) ?? 0, C = (A == null ? void 0 : A.height) ?? 0, D = i + (s !== "center" ? "-" + s : ""), j = typeof c == "number" ? c : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...c
    }, B = Array.isArray(u) ? u : [
      u
    ], V = B.length > 0, Q = {
      padding: j,
      boundary: B.filter(xR),
      altBoundary: V
    }, { refs: L, floatingStyles: F, placement: R, isPositioned: N, middlewareData: O } = sR({
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...at) => ZM(...at, {
        animationFrame: d === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        rR({
          mainAxis: a + C,
          alignmentAxis: o
        }),
        l && lR({
          mainAxis: true,
          crossAxis: false,
          limiter: f === "partial" ? uR() : void 0,
          ...Q
        }),
        l && cR({
          ...Q
        }),
        fR({
          ...Q,
          apply: ({ elements: at, rects: ia, availableWidth: Ti, availableHeight: aa }) => {
            const { width: Ei, height: ys } = ia.reference, Ai = at.floating.style;
            Ai.setProperty("--radix-popper-available-width", `${Ti}px`), Ai.setProperty("--radix-popper-available-height", `${aa}px`), Ai.setProperty("--radix-popper-anchor-width", `${Ei}px`), Ai.setProperty("--radix-popper-anchor-height", `${ys}px`);
          }
        }),
        S && hR({
          element: S,
          padding: r
        }),
        SR({
          arrowWidth: E,
          arrowHeight: C
        }),
        h && dR({
          strategy: "referenceHidden",
          ...Q
        })
      ]
    }), [z, P] = mx(R), ft = mi(y);
    pi(() => {
      N && (ft == null ? void 0 : ft());
    }, [
      N,
      ft
    ]);
    const X = (_a5 = O.arrow) == null ? void 0 : _a5.x, $ = (_b3 = O.arrow) == null ? void 0 : _b3.y, J = ((_c3 = O.arrow) == null ? void 0 : _c3.centerOffset) !== 0, [Tt, jn] = b.useState();
    return pi(() => {
      p && jn(window.getComputedStyle(p).zIndex);
    }, [
      p
    ]), w.jsx("div", {
      ref: L.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...F,
        transform: N ? F.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: Tt,
        "--radix-popper-transform-origin": [
          (_d3 = O.transformOrigin) == null ? void 0 : _d3.x,
          (_e9 = O.transformOrigin) == null ? void 0 : _e9.y
        ].join(" "),
        ...((_f3 = O.hide) == null ? void 0 : _f3.referenceHidden) && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      },
      dir: t.dir,
      children: w.jsx(yR, {
        scope: n,
        placedSide: z,
        onArrowChange: T,
        arrowX: X,
        arrowY: $,
        shouldHideArrow: J,
        children: w.jsx(re.div, {
          "data-side": z,
          "data-align": P,
          ...v,
          ref: g,
          style: {
            ...v.style,
            animation: N ? void 0 : "none"
          }
        })
      })
    });
  });
  fx.displayName = Mh;
  var dx = "PopperArrow", bR = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }, hx = b.forwardRef(function(e, n) {
    const { __scopePopper: i, ...a } = e, s = vR(dx, i), o = bR[s.placedSide];
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
      children: w.jsx(pR, {
        ...a,
        ref: n,
        style: {
          ...a.style,
          display: "block"
        }
      })
    });
  });
  hx.displayName = dx;
  function xR(t) {
    return t !== null;
  }
  var SR = (t) => ({
    name: "transformOrigin",
    options: t,
    fn(e) {
      var _a5, _b3, _c3;
      const { placement: n, rects: i, middlewareData: a } = e, o = ((_a5 = a.arrow) == null ? void 0 : _a5.centerOffset) !== 0, r = o ? 0 : t.arrowWidth, l = o ? 0 : t.arrowHeight, [u, c] = mx(n), f = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], h = (((_b3 = a.arrow) == null ? void 0 : _b3.x) ?? 0) + r / 2, d = (((_c3 = a.arrow) == null ? void 0 : _c3.y) ?? 0) + l / 2;
      let y = "", v = "";
      return u === "bottom" ? (y = o ? f : `${h}px`, v = `${-l}px`) : u === "top" ? (y = o ? f : `${h}px`, v = `${i.floating.height + l}px`) : u === "right" ? (y = `${-l}px`, v = o ? f : `${d}px`) : u === "left" && (y = `${i.floating.width + l}px`, v = o ? f : `${d}px`), {
        data: {
          x: y,
          y: v
        }
      };
    }
  });
  function mx(t) {
    const [e, n = "center"] = t.split("-");
    return [
      e,
      n
    ];
  }
  var wR = cx, TR = fx, ER = hx, [ru, Az] = eu("Tooltip", [
    rx
  ]), Rh = rx(), px = "TooltipProvider", AR = 700, vg = "tooltip.open", [CR, gx] = ru(px), yx = (t) => {
    const { __scopeTooltip: e, delayDuration: n = AR, skipDelayDuration: i = 300, disableHoverableContent: a = false, children: s } = t, o = b.useRef(true), r = b.useRef(false), l = b.useRef(0);
    return b.useEffect(() => {
      const u = l.current;
      return () => window.clearTimeout(u);
    }, []), w.jsx(CR, {
      scope: e,
      isOpenDelayedRef: o,
      delayDuration: n,
      onOpen: b.useCallback(() => {
        window.clearTimeout(l.current), o.current = false;
      }, []),
      onClose: b.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(() => o.current = true, i);
      }, [
        i
      ]),
      isPointerInTransitRef: r,
      onPointerInTransitChange: b.useCallback((u) => {
        r.current = u;
      }, []),
      disableHoverableContent: a,
      children: s
    });
  };
  yx.displayName = px;
  var vx = "Tooltip", [Cz, lu] = ru(vx), Lf = "TooltipTrigger", MR = b.forwardRef((t, e) => {
    const { __scopeTooltip: n, ...i } = t, a = lu(Lf, n), s = gx(Lf, n), o = Rh(n), r = b.useRef(null), l = qe(e, r, a.onTriggerChange), u = b.useRef(false), c = b.useRef(false), f = b.useCallback(() => u.current = false, []);
    return b.useEffect(() => () => document.removeEventListener("pointerup", f), [
      f
    ]), w.jsx(wR, {
      asChild: true,
      ...o,
      children: w.jsx(re.button, {
        "aria-describedby": a.open ? a.contentId : void 0,
        "data-state": a.stateAttribute,
        ...i,
        ref: l,
        onPointerMove: jt(t.onPointerMove, (h) => {
          h.pointerType !== "touch" && !c.current && !s.isPointerInTransitRef.current && (a.onTriggerEnter(), c.current = true);
        }),
        onPointerLeave: jt(t.onPointerLeave, () => {
          a.onTriggerLeave(), c.current = false;
        }),
        onPointerDown: jt(t.onPointerDown, () => {
          a.open && a.onClose(), u.current = true, document.addEventListener("pointerup", f, {
            once: true
          });
        }),
        onFocus: jt(t.onFocus, () => {
          u.current || a.onOpen();
        }),
        onBlur: jt(t.onBlur, a.onClose),
        onClick: jt(t.onClick, a.onClose)
      })
    });
  });
  MR.displayName = Lf;
  var RR = "TooltipPortal", [Mz, DR] = ru(RR, {
    forceMount: void 0
  }), Wa = "TooltipContent", bx = b.forwardRef((t, e) => {
    const n = DR(Wa, t.__scopeTooltip), { forceMount: i = n.forceMount, side: a = "top", ...s } = t, o = lu(Wa, t.__scopeTooltip);
    return w.jsx(mh, {
      present: i || o.open,
      children: o.disableHoverableContent ? w.jsx(xx, {
        side: a,
        ...s,
        ref: e
      }) : w.jsx(OR, {
        side: a,
        ...s,
        ref: e
      })
    });
  }), OR = b.forwardRef((t, e) => {
    const n = lu(Wa, t.__scopeTooltip), i = gx(Wa, t.__scopeTooltip), a = b.useRef(null), s = qe(e, a), [o, r] = b.useState(null), { trigger: l, onClose: u } = n, c = a.current, { onPointerInTransitChange: f } = i, h = b.useCallback(() => {
      r(null), f(false);
    }, [
      f
    ]), d = b.useCallback((y, v) => {
      const x = y.currentTarget, p = {
        x: y.clientX,
        y: y.clientY
      }, m = LR(p, x.getBoundingClientRect()), g = VR(p, m), S = UR(v.getBoundingClientRect()), T = PR([
        ...g,
        ...S
      ]);
      r(T), f(true);
    }, [
      f
    ]);
    return b.useEffect(() => () => h(), [
      h
    ]), b.useEffect(() => {
      if (l && c) {
        const y = (x) => d(x, c), v = (x) => d(x, l);
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
      if (o) {
        const y = (v) => {
          const x = v.target, p = {
            x: v.clientX,
            y: v.clientY
          }, m = (l == null ? void 0 : l.contains(x)) || (c == null ? void 0 : c.contains(x)), g = !BR(p, o);
          m ? h() : g && (h(), u());
        };
        return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
      }
    }, [
      l,
      c,
      o,
      u,
      h
    ]), w.jsx(xx, {
      ...t,
      ref: s
    });
  }), [NR, zR] = ru(vx, {
    isInside: false
  }), jR = FA("TooltipContent"), xx = b.forwardRef((t, e) => {
    const { __scopeTooltip: n, children: i, "aria-label": a, onEscapeKeyDown: s, onPointerDownOutside: o, ...r } = t, l = lu(Wa, n), u = Rh(n), { onClose: c } = l;
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
    ]), w.jsx(hh, {
      asChild: true,
      disableOutsidePointerEvents: false,
      onEscapeKeyDown: s,
      onPointerDownOutside: o,
      onFocusOutside: (f) => f.preventDefault(),
      onDismiss: c,
      children: w.jsxs(TR, {
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
          w.jsx(jR, {
            children: i
          }),
          w.jsx(NR, {
            scope: n,
            isInside: true,
            children: w.jsx(gC, {
              id: l.contentId,
              role: "tooltip",
              children: a || i
            })
          })
        ]
      })
    });
  });
  bx.displayName = Wa;
  var Sx = "TooltipArrow", _R = b.forwardRef((t, e) => {
    const { __scopeTooltip: n, ...i } = t, a = Rh(n);
    return zR(Sx, n).isInside ? null : w.jsx(ER, {
      ...a,
      ...i,
      ref: e
    });
  });
  _R.displayName = Sx;
  function LR(t, e) {
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
  function VR(t, e, n = 5) {
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
  function UR(t) {
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
  function BR(t, e) {
    const { x: n, y: i } = t;
    let a = false;
    for (let s = 0, o = e.length - 1; s < e.length; o = s++) {
      const r = e[s], l = e[o], u = r.x, c = r.y, f = l.x, h = l.y;
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
  var kR = yx, wx = bx;
  const GR = kR, YR = b.forwardRef(({ className: t, sideOffset: e = 4, ...n }, i) => w.jsx(wx, {
    ref: i,
    sideOffset: e,
    className: zn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
    ...n
  }));
  YR.displayName = wx.displayName;
  var uu = class {
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
  }, cu = typeof window > "u" || "Deno" in globalThis;
  function Ge() {
  }
  function qR(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function FR(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0;
  }
  function XR(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0);
  }
  function Vf(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function QR(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function bg(t, e) {
    const { type: n = "all", exact: i, fetchStatus: a, predicate: s, queryKey: o, stale: r } = t;
    if (o) {
      if (i) {
        if (e.queryHash !== Dh(o, e.options)) return false;
      } else if (!bo(e.queryKey, o)) return false;
    }
    if (n !== "all") {
      const l = e.isActive();
      if (n === "active" && !l || n === "inactive" && l) return false;
    }
    return !(typeof r == "boolean" && e.isStale() !== r || a && a !== e.state.fetchStatus || s && !s(e));
  }
  function xg(t, e) {
    const { exact: n, status: i, predicate: a, mutationKey: s } = t;
    if (s) {
      if (!e.options.mutationKey) return false;
      if (n) {
        if (vo(e.options.mutationKey) !== vo(s)) return false;
      } else if (!bo(e.options.mutationKey, s)) return false;
    }
    return !(i && e.state.status !== i || a && !a(e));
  }
  function Dh(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || vo)(t);
  }
  function vo(t) {
    return JSON.stringify(t, (e, n) => Uf(n) ? Object.keys(n).sort().reduce((i, a) => (i[a] = n[a], i), {}) : n);
  }
  function bo(t, e) {
    return t === e ? true : typeof t != typeof e ? false : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every((n) => bo(t[n], e[n])) : false;
  }
  function Tx(t, e) {
    if (t === e) return t;
    const n = Sg(t) && Sg(e);
    if (n || Uf(t) && Uf(e)) {
      const i = n ? t : Object.keys(t), a = i.length, s = n ? e : Object.keys(e), o = s.length, r = n ? [] : {}, l = new Set(i);
      let u = 0;
      for (let c = 0; c < o; c++) {
        const f = n ? c : s[c];
        (!n && l.has(f) || n) && t[f] === void 0 && e[f] === void 0 ? (r[f] = void 0, u++) : (r[f] = Tx(t[f], e[f]), r[f] === t[f] && t[f] !== void 0 && u++);
      }
      return a === o && u === a ? t : r;
    }
    return e;
  }
  function Sg(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length;
  }
  function Uf(t) {
    if (!wg(t)) return false;
    const e = t.constructor;
    if (e === void 0) return true;
    const n = e.prototype;
    return !(!wg(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
  }
  function wg(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function KR(t) {
    return new Promise((e) => {
      setTimeout(e, t);
    });
  }
  function ZR(t, e, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(t, e) : n.structuralSharing !== false ? Tx(t, e) : e;
  }
  function $R(t, e, n = 0) {
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
  var Oh = Symbol();
  function Ex(t, e) {
    return !t.queryFn && (e == null ? void 0 : e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Oh ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
  }
  var IR = (_a2 = class extends uu {
    constructor() {
      super();
      __privateAdd(this, _t2);
      __privateAdd(this, _e2);
      __privateAdd(this, _n);
      __privateSet(this, _n, (t) => {
        if (!cu && window.addEventListener) {
          const e = () => t();
          return window.addEventListener("visibilitychange", e, false), () => {
            window.removeEventListener("visibilitychange", e);
          };
        }
      });
    }
    onSubscribe() {
      __privateGet(this, _e2) || this.setEventListener(__privateGet(this, _n));
    }
    onUnsubscribe() {
      var _a5;
      this.hasListeners() || ((_a5 = __privateGet(this, _e2)) == null ? void 0 : _a5.call(this), __privateSet(this, _e2, void 0));
    }
    setEventListener(t) {
      var _a5;
      __privateSet(this, _n, t), (_a5 = __privateGet(this, _e2)) == null ? void 0 : _a5.call(this), __privateSet(this, _e2, t((e) => {
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
  }, _t2 = new WeakMap(), _e2 = new WeakMap(), _n = new WeakMap(), _a2), Ax = new IR(), WR = (_b2 = class extends uu {
    constructor() {
      super();
      __privateAdd(this, _t3, true);
      __privateAdd(this, _e3);
      __privateAdd(this, _n2);
      __privateSet(this, _n2, (t) => {
        if (!cu && window.addEventListener) {
          const e = () => t(true), n = () => t(false);
          return window.addEventListener("online", e, false), window.addEventListener("offline", n, false), () => {
            window.removeEventListener("online", e), window.removeEventListener("offline", n);
          };
        }
      });
    }
    onSubscribe() {
      __privateGet(this, _e3) || this.setEventListener(__privateGet(this, _n2));
    }
    onUnsubscribe() {
      var _a5;
      this.hasListeners() || ((_a5 = __privateGet(this, _e3)) == null ? void 0 : _a5.call(this), __privateSet(this, _e3, void 0));
    }
    setEventListener(t) {
      var _a5;
      __privateSet(this, _n2, t), (_a5 = __privateGet(this, _e3)) == null ? void 0 : _a5.call(this), __privateSet(this, _e3, t(this.setOnline.bind(this)));
    }
    setOnline(t) {
      __privateGet(this, _t3) !== t && (__privateSet(this, _t3, t), this.listeners.forEach((n) => {
        n(t);
      }));
    }
    isOnline() {
      return __privateGet(this, _t3);
    }
  }, _t3 = new WeakMap(), _e3 = new WeakMap(), _n2 = new WeakMap(), _b2), Al = new WR();
  function tD() {
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
  function eD(t) {
    return Math.min(1e3 * 2 ** t, 3e4);
  }
  function Cx(t) {
    return (t ?? "online") === "online" ? Al.isOnline() : true;
  }
  var Mx = class extends Error {
    constructor(t) {
      super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
    }
  };
  function cc(t) {
    return t instanceof Mx;
  }
  function Rx(t) {
    let e = false, n = 0, i = false, a;
    const s = tD(), o = (v) => {
      var _a5;
      i || (h(new Mx(v)), (_a5 = t.abort) == null ? void 0 : _a5.call(t));
    }, r = () => {
      e = true;
    }, l = () => {
      e = false;
    }, u = () => Ax.isFocused() && (t.networkMode === "always" || Al.isOnline()) && t.canRun(), c = () => Cx(t.networkMode) && t.canRun(), f = (v) => {
      var _a5;
      i || (i = true, (_a5 = t.onSuccess) == null ? void 0 : _a5.call(t, v), a == null ? void 0 : a(), s.resolve(v));
    }, h = (v) => {
      var _a5;
      i || (i = true, (_a5 = t.onError) == null ? void 0 : _a5.call(t, v), a == null ? void 0 : a(), s.reject(v));
    }, d = () => new Promise((v) => {
      var _a5;
      a = (x) => {
        (i || u()) && v(x);
      }, (_a5 = t.onPause) == null ? void 0 : _a5.call(t);
    }).then(() => {
      var _a5;
      a = void 0, i || ((_a5 = t.onContinue) == null ? void 0 : _a5.call(t));
    }), y = () => {
      if (i) return;
      let v;
      const x = n === 0 ? t.initialPromise : void 0;
      try {
        v = x ?? t.fn();
      } catch (p) {
        v = Promise.reject(p);
      }
      Promise.resolve(v).then(f).catch((p) => {
        var _a5;
        if (i) return;
        const m = t.retry ?? (cu ? 0 : 3), g = t.retryDelay ?? eD, S = typeof g == "function" ? g(n, p) : g, T = m === true || typeof m == "number" && n < m || typeof m == "function" && m(n, p);
        if (e || !T) {
          h(p);
          return;
        }
        n++, (_a5 = t.onFail) == null ? void 0 : _a5.call(t, n, p), KR(S).then(() => u() ? void 0 : d()).then(() => {
          e ? h(p) : y();
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
      start: () => (c() ? y() : d().then(y), s)
    };
  }
  var nD = (t) => setTimeout(t, 0);
  function iD() {
    let t = [], e = 0, n = (r) => {
      r();
    }, i = (r) => {
      r();
    }, a = nD;
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
  var Qt = iD(), Dx = (_c2 = class {
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
      this.gcTime = Math.max(this.gcTime || 0, t ?? (cu ? 1 / 0 : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
      __privateGet(this, _t4) && (clearTimeout(__privateGet(this, _t4)), __privateSet(this, _t4, void 0));
    }
  }, _t4 = new WeakMap(), _c2), aD = (_d2 = class extends Dx {
    constructor(t) {
      super();
      __privateAdd(this, _aD_instances);
      __privateAdd(this, _t5);
      __privateAdd(this, _e4);
      __privateAdd(this, _n3);
      __privateAdd(this, _a3);
      __privateAdd(this, _i2);
      __privateAdd(this, _o2);
      __privateAdd(this, _r2);
      __privateSet(this, _r2, false), __privateSet(this, _o2, t.defaultOptions), this.setOptions(t.options), this.observers = [], __privateSet(this, _a3, t.client), __privateSet(this, _n3, __privateGet(this, _a3).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, __privateSet(this, _t5, oD(this.options)), this.state = t.state ?? __privateGet(this, _t5), this.scheduleGc();
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
      const n = ZR(this.state.data, t, this.options);
      return __privateMethod(this, _aD_instances, s_fn).call(this, {
        data: n,
        type: "success",
        dataUpdatedAt: e == null ? void 0 : e.updatedAt,
        manual: e == null ? void 0 : e.manual
      }), n;
    }
    setState(t, e) {
      __privateMethod(this, _aD_instances, s_fn).call(this, {
        type: "setState",
        state: t,
        setStateOptions: e
      });
    }
    cancel(t) {
      var _a5, _b3;
      const e = (_a5 = __privateGet(this, _i2)) == null ? void 0 : _a5.promise;
      return (_b3 = __privateGet(this, _i2)) == null ? void 0 : _b3.cancel(t), e ? e.then(Ge).catch(Ge) : Promise.resolve();
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
      return this.observers.some((t) => QR(t.options.enabled, this) !== false);
    }
    isDisabled() {
      return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Oh || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0 ? this.observers.some((t) => Vf(t.options.staleTime, this) === "static") : false;
    }
    isStale() {
      return this.getObserversCount() > 0 ? this.observers.some((t) => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(t = 0) {
      return this.state.data === void 0 ? true : t === "static" ? false : this.state.isInvalidated ? true : !XR(this.state.dataUpdatedAt, t);
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
      this.state.isInvalidated || __privateMethod(this, _aD_instances, s_fn).call(this, {
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
        const l = Ex(this.options, e), c = (() => {
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
      (_a5 = this.options.behavior) == null ? void 0 : _a5.onFetch(o, this), __privateSet(this, _e4, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_b3 = o.fetchOptions) == null ? void 0 : _b3.meta)) && __privateMethod(this, _aD_instances, s_fn).call(this, {
        type: "fetch",
        meta: (_c3 = o.fetchOptions) == null ? void 0 : _c3.meta
      });
      const r = (l) => {
        var _a6, _b4, _c4, _d3;
        cc(l) && l.silent || __privateMethod(this, _aD_instances, s_fn).call(this, {
          type: "error",
          error: l
        }), cc(l) || ((_b4 = (_a6 = __privateGet(this, _n3).config).onError) == null ? void 0 : _b4.call(_a6, l, this), (_d3 = (_c4 = __privateGet(this, _n3).config).onSettled) == null ? void 0 : _d3.call(_c4, this.state.data, l, this)), this.scheduleGc();
      };
      return __privateSet(this, _i2, Rx({
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
          __privateMethod(this, _aD_instances, s_fn).call(this, {
            type: "failed",
            failureCount: l,
            error: u
          });
        },
        onPause: () => {
          __privateMethod(this, _aD_instances, s_fn).call(this, {
            type: "pause"
          });
        },
        onContinue: () => {
          __privateMethod(this, _aD_instances, s_fn).call(this, {
            type: "continue"
          });
        },
        retry: o.options.retry,
        retryDelay: o.options.retryDelay,
        networkMode: o.options.networkMode,
        canRun: () => true
      })), __privateGet(this, _i2).start();
    }
  }, _t5 = new WeakMap(), _e4 = new WeakMap(), _n3 = new WeakMap(), _a3 = new WeakMap(), _i2 = new WeakMap(), _o2 = new WeakMap(), _r2 = new WeakMap(), _aD_instances = new WeakSet(), s_fn = function(t) {
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
            ...sD(n.data, this.options),
            fetchMeta: t.meta ?? null
          };
        case "success":
          return __privateSet(this, _e4, void 0), {
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
          return cc(i) && i.revert && __privateGet(this, _e4) ? {
            ...__privateGet(this, _e4),
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
  function sD(t, e) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: Cx(e.networkMode) ? "fetching" : "paused",
      ...t === void 0 && {
        error: null,
        status: "pending"
      }
    };
  }
  function oD(t) {
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
  var rD = (_e5 = class extends uu {
    constructor(t = {}) {
      super();
      __privateAdd(this, _t6);
      this.config = t, __privateSet(this, _t6, /* @__PURE__ */ new Map());
    }
    build(t, e, n) {
      const i = e.queryKey, a = e.queryHash ?? Dh(i, e);
      let s = this.get(a);
      return s || (s = new aD({
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
  }, _t6 = new WeakMap(), _e5), lD = (_f2 = class extends Dx {
    constructor(t) {
      super();
      __privateAdd(this, _lD_instances);
      __privateAdd(this, _t7);
      __privateAdd(this, _e6);
      __privateAdd(this, _n4);
      this.mutationId = t.mutationId, __privateSet(this, _e6, t.mutationCache), __privateSet(this, _t7, []), this.state = t.state || uD(), this.setOptions(t.options), this.scheduleGc();
    }
    setOptions(t) {
      this.options = t, this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(t) {
      __privateGet(this, _t7).includes(t) || (__privateGet(this, _t7).push(t), this.clearGcTimeout(), __privateGet(this, _e6).notify({
        type: "observerAdded",
        mutation: this,
        observer: t
      }));
    }
    removeObserver(t) {
      __privateSet(this, _t7, __privateGet(this, _t7).filter((e) => e !== t)), this.scheduleGc(), __privateGet(this, _e6).notify({
        type: "observerRemoved",
        mutation: this,
        observer: t
      });
    }
    optionalRemove() {
      __privateGet(this, _t7).length || (this.state.status === "pending" ? this.scheduleGc() : __privateGet(this, _e6).remove(this));
    }
    continue() {
      var _a5;
      return ((_a5 = __privateGet(this, _n4)) == null ? void 0 : _a5.continue()) ?? this.execute(this.state.variables);
    }
    async execute(t) {
      var _a5, _b3, _c3, _d3, _e9, _f3, _g3, _h3, _i4, _j, _k, _l2, _m2, _n7, _o4, _p2, _q, _r4, _s3, _t10;
      const e = () => {
        __privateMethod(this, _lD_instances, a_fn).call(this, {
          type: "continue"
        });
      };
      __privateSet(this, _n4, Rx({
        fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
        onFail: (a, s) => {
          __privateMethod(this, _lD_instances, a_fn).call(this, {
            type: "failed",
            failureCount: a,
            error: s
          });
        },
        onPause: () => {
          __privateMethod(this, _lD_instances, a_fn).call(this, {
            type: "pause"
          });
        },
        onContinue: e,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => __privateGet(this, _e6).canRun(this)
      }));
      const n = this.state.status === "pending", i = !__privateGet(this, _n4).canStart();
      try {
        if (n) e();
        else {
          __privateMethod(this, _lD_instances, a_fn).call(this, {
            type: "pending",
            variables: t,
            isPaused: i
          }), await ((_b3 = (_a5 = __privateGet(this, _e6).config).onMutate) == null ? void 0 : _b3.call(_a5, t, this));
          const s = await ((_d3 = (_c3 = this.options).onMutate) == null ? void 0 : _d3.call(_c3, t));
          s !== this.state.context && __privateMethod(this, _lD_instances, a_fn).call(this, {
            type: "pending",
            context: s,
            variables: t,
            isPaused: i
          });
        }
        const a = await __privateGet(this, _n4).start();
        return await ((_f3 = (_e9 = __privateGet(this, _e6).config).onSuccess) == null ? void 0 : _f3.call(_e9, a, t, this.state.context, this)), await ((_h3 = (_g3 = this.options).onSuccess) == null ? void 0 : _h3.call(_g3, a, t, this.state.context)), await ((_j = (_i4 = __privateGet(this, _e6).config).onSettled) == null ? void 0 : _j.call(_i4, a, null, this.state.variables, this.state.context, this)), await ((_l2 = (_k = this.options).onSettled) == null ? void 0 : _l2.call(_k, a, null, t, this.state.context)), __privateMethod(this, _lD_instances, a_fn).call(this, {
          type: "success",
          data: a
        }), a;
      } catch (a) {
        try {
          throw await ((_n7 = (_m2 = __privateGet(this, _e6).config).onError) == null ? void 0 : _n7.call(_m2, a, t, this.state.context, this)), await ((_p2 = (_o4 = this.options).onError) == null ? void 0 : _p2.call(_o4, a, t, this.state.context)), await ((_r4 = (_q = __privateGet(this, _e6).config).onSettled) == null ? void 0 : _r4.call(_q, void 0, a, this.state.variables, this.state.context, this)), await ((_t10 = (_s3 = this.options).onSettled) == null ? void 0 : _t10.call(_s3, void 0, a, t, this.state.context)), a;
        } finally {
          __privateMethod(this, _lD_instances, a_fn).call(this, {
            type: "error",
            error: a
          });
        }
      } finally {
        __privateGet(this, _e6).runNext(this);
      }
    }
  }, _t7 = new WeakMap(), _e6 = new WeakMap(), _n4 = new WeakMap(), _lD_instances = new WeakSet(), a_fn = function(t) {
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
      }), __privateGet(this, _e6).notify({
        mutation: this,
        type: "updated",
        action: t
      });
    });
  }, _f2);
  function uD() {
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
  var cD = (_g2 = class extends uu {
    constructor(t = {}) {
      super();
      __privateAdd(this, _t8);
      __privateAdd(this, _e7);
      __privateAdd(this, _n5);
      this.config = t, __privateSet(this, _t8, /* @__PURE__ */ new Set()), __privateSet(this, _e7, /* @__PURE__ */ new Map()), __privateSet(this, _n5, 0);
    }
    build(t, e, n) {
      const i = new lD({
        mutationCache: this,
        mutationId: ++__privateWrapper(this, _n5)._,
        options: t.defaultMutationOptions(e),
        state: n
      });
      return this.add(i), i;
    }
    add(t) {
      __privateGet(this, _t8).add(t);
      const e = mr(t);
      if (typeof e == "string") {
        const n = __privateGet(this, _e7).get(e);
        n ? n.push(t) : __privateGet(this, _e7).set(e, [
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
        const e = mr(t);
        if (typeof e == "string") {
          const n = __privateGet(this, _e7).get(e);
          if (n) if (n.length > 1) {
            const i = n.indexOf(t);
            i !== -1 && n.splice(i, 1);
          } else n[0] === t && __privateGet(this, _e7).delete(e);
        }
      }
      this.notify({
        type: "removed",
        mutation: t
      });
    }
    canRun(t) {
      var _a5;
      const e = mr(t);
      if (typeof e == "string") {
        const i = (_a5 = __privateGet(this, _e7).get(e)) == null ? void 0 : _a5.find((a) => a.state.status === "pending");
        return !i || i === t;
      } else return true;
    }
    runNext(t) {
      var _a5, _b3;
      const e = mr(t);
      return typeof e == "string" ? ((_b3 = (_a5 = __privateGet(this, _e7).get(e)) == null ? void 0 : _a5.find((i) => i !== t && i.state.isPaused)) == null ? void 0 : _b3.continue()) ?? Promise.resolve() : Promise.resolve();
    }
    clear() {
      Qt.batch(() => {
        __privateGet(this, _t8).forEach((t) => {
          this.notify({
            type: "removed",
            mutation: t
          });
        }), __privateGet(this, _t8).clear(), __privateGet(this, _e7).clear();
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
      return Qt.batch(() => Promise.all(t.map((e) => e.continue().catch(Ge))));
    }
  }, _t8 = new WeakMap(), _e7 = new WeakMap(), _n5 = new WeakMap(), _g2);
  function mr(t) {
    var _a5;
    return (_a5 = t.options.scope) == null ? void 0 : _a5.id;
  }
  function Tg(t) {
    return {
      onFetch: (e, n) => {
        var _a5, _b3, _c3, _d3, _e9;
        const i = e.options, a = (_c3 = (_b3 = (_a5 = e.fetchOptions) == null ? void 0 : _a5.meta) == null ? void 0 : _b3.fetchMore) == null ? void 0 : _c3.direction, s = ((_d3 = e.state.data) == null ? void 0 : _d3.pages) || [], o = ((_e9 = e.state.data) == null ? void 0 : _e9.pageParams) || [];
        let r = {
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
          }, h = Ex(e.options, e.fetchOptions), d = async (y, v, x) => {
            if (c) return Promise.reject();
            if (v == null && y.pages.length) return Promise.resolve(y);
            const m = (() => {
              const A = {
                client: e.client,
                queryKey: e.queryKey,
                pageParam: v,
                direction: x ? "backward" : "forward",
                meta: e.options.meta
              };
              return f(A), A;
            })(), g = await h(m), { maxPages: S } = e.options, T = x ? JR : $R;
            return {
              pages: T(y.pages, g, S),
              pageParams: T(y.pageParams, v, S)
            };
          };
          if (a && s.length) {
            const y = a === "backward", v = y ? fD : Eg, x = {
              pages: s,
              pageParams: o
            }, p = v(i, x);
            r = await d(x, p, y);
          } else {
            const y = t ?? s.length;
            do {
              const v = l === 0 ? o[0] ?? i.initialPageParam : Eg(i, r);
              if (l > 0 && v == null) break;
              r = await d(r, v), l++;
            } while (l < y);
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
  function Eg(t, { pages: e, pageParams: n }) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, n[i], n) : void 0;
  }
  function fD(t, { pages: e, pageParams: n }) {
    var _a5;
    return e.length > 0 ? (_a5 = t.getPreviousPageParam) == null ? void 0 : _a5.call(t, e[0], e, n[0], n) : void 0;
  }
  var dD = (_h2 = class {
    constructor(t = {}) {
      __privateAdd(this, _t9);
      __privateAdd(this, _e8);
      __privateAdd(this, _n6);
      __privateAdd(this, _a4);
      __privateAdd(this, _i3);
      __privateAdd(this, _o3);
      __privateAdd(this, _r3);
      __privateAdd(this, _s2);
      __privateSet(this, _t9, t.queryCache || new rD()), __privateSet(this, _e8, t.mutationCache || new cD()), __privateSet(this, _n6, t.defaultOptions || {}), __privateSet(this, _a4, /* @__PURE__ */ new Map()), __privateSet(this, _i3, /* @__PURE__ */ new Map()), __privateSet(this, _o3, 0);
    }
    mount() {
      __privateWrapper(this, _o3)._++, __privateGet(this, _o3) === 1 && (__privateSet(this, _r3, Ax.subscribe(async (t) => {
        t && (await this.resumePausedMutations(), __privateGet(this, _t9).onFocus());
      })), __privateSet(this, _s2, Al.subscribe(async (t) => {
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
      return __privateGet(this, _e8).findAll({
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
      return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && n.isStaleByTime(Vf(e.staleTime, n)) && this.prefetchQuery(e), Promise.resolve(i));
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
      }), s = (_a5 = __privateGet(this, _t9).get(i.queryHash)) == null ? void 0 : _a5.state.data, o = qR(e, s);
      if (o !== void 0) return __privateGet(this, _t9).build(this, i).setData(o, {
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
      return Promise.all(i).then(Ge).catch(Ge);
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
        return n.throwOnError || (s = s.catch(Ge)), a.state.fetchStatus === "paused" ? Promise.resolve() : s;
      }));
      return Promise.all(i).then(Ge);
    }
    fetchQuery(t) {
      const e = this.defaultQueryOptions(t);
      e.retry === void 0 && (e.retry = false);
      const n = __privateGet(this, _t9).build(this, e);
      return n.isStaleByTime(Vf(e.staleTime, n)) ? n.fetch(e) : Promise.resolve(n.state.data);
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(Ge).catch(Ge);
    }
    fetchInfiniteQuery(t) {
      return t.behavior = Tg(t.pages), this.fetchQuery(t);
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(Ge).catch(Ge);
    }
    ensureInfiniteQueryData(t) {
      return t.behavior = Tg(t.pages), this.ensureQueryData(t);
    }
    resumePausedMutations() {
      return Al.isOnline() ? __privateGet(this, _e8).resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return __privateGet(this, _t9);
    }
    getMutationCache() {
      return __privateGet(this, _e8);
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
      return e.queryHash || (e.queryHash = Dh(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === Oh && (e.enabled = false), e;
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
      __privateGet(this, _t9).clear(), __privateGet(this, _e8).clear();
    }
  }, _t9 = new WeakMap(), _e8 = new WeakMap(), _n6 = new WeakMap(), _a4 = new WeakMap(), _i3 = new WeakMap(), _o3 = new WeakMap(), _r3 = new WeakMap(), _s2 = new WeakMap(), _h2), hD = b.createContext(void 0), mD = ({ client: t, children: e }) => (b.useEffect(() => (t.mount(), () => {
    t.unmount();
  }), [
    t
  ]), w.jsx(hD.Provider, {
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
  const Ag = "popstate";
  function pD(t) {
    t === void 0 && (t = {});
    function e(a, s) {
      let { pathname: o = "/", search: r = "", hash: l = "" } = ta(a.location.hash.substr(1));
      return !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o), Bf("", {
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
      return r + "#" + (typeof s == "string" ? s : Cl(s));
    }
    function i(a, s) {
      Nh(a.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(s) + ")");
    }
    return yD(e, n, i, t);
  }
  function Nt(t, e) {
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
  function gD() {
    return Math.random().toString(36).substr(2, 8);
  }
  function Cg(t, e) {
    return {
      usr: t.state,
      key: t.key,
      idx: e
    };
  }
  function Bf(t, e, n, i) {
    return n === void 0 && (n = null), xo({
      pathname: typeof t == "string" ? t : t.pathname,
      search: "",
      hash: ""
    }, typeof e == "string" ? ta(e) : e, {
      state: n,
      key: e && e.key || i || gD()
    });
  }
  function Cl(t) {
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
  function yD(t, e, n, i) {
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
      let x = c(), p = x == null ? null : x - u;
      u = x, l && l({
        action: r,
        location: v.location,
        delta: p
      });
    }
    function h(x, p) {
      r = In.Push;
      let m = Bf(v.location, x, p);
      n && n(m, x), u = c() + 1;
      let g = Cg(m, u), S = v.createHref(m);
      try {
        o.pushState(g, "", S);
      } catch (T) {
        if (T instanceof DOMException && T.name === "DataCloneError") throw T;
        a.location.assign(S);
      }
      s && l && l({
        action: r,
        location: v.location,
        delta: 1
      });
    }
    function d(x, p) {
      r = In.Replace;
      let m = Bf(v.location, x, p);
      n && n(m, x), u = c();
      let g = Cg(m, u), S = v.createHref(m);
      o.replaceState(g, "", S), s && l && l({
        action: r,
        location: v.location,
        delta: 0
      });
    }
    function y(x) {
      let p = a.location.origin !== "null" ? a.location.origin : a.location.href, m = typeof x == "string" ? x : Cl(x);
      return m = m.replace(/ $/, "%20"), Nt(p, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, p);
    }
    let v = {
      get action() {
        return r;
      },
      get location() {
        return t(a, o);
      },
      listen(x) {
        if (l) throw new Error("A history only accepts one active listener");
        return a.addEventListener(Ag, f), l = x, () => {
          a.removeEventListener(Ag, f), l = null;
        };
      },
      createHref(x) {
        return e(a, x);
      },
      createURL: y,
      encodeLocation(x) {
        let p = y(x);
        return {
          pathname: p.pathname,
          search: p.search,
          hash: p.hash
        };
      },
      push: h,
      replace: d,
      go(x) {
        return o.go(x);
      }
    };
    return v;
  }
  var Mg;
  (function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error";
  })(Mg || (Mg = {}));
  function vD(t, e, n) {
    return n === void 0 && (n = "/"), bD(t, e, n, false);
  }
  function bD(t, e, n, i) {
    let a = typeof e == "string" ? ta(e) : e, s = zh(a.pathname || "/", n);
    if (s == null) return null;
    let o = Ox(t);
    xD(o);
    let r = null;
    for (let l = 0; r == null && l < o.length; ++l) {
      let u = ND(s);
      r = DD(o[l], u, i);
    }
    return r;
  }
  function Ox(t, e, n, i) {
    e === void 0 && (e = []), n === void 0 && (n = []), i === void 0 && (i = "");
    let a = (s, o, r) => {
      let l = {
        relativePath: r === void 0 ? s.path || "" : r,
        caseSensitive: s.caseSensitive === true,
        childrenIndex: o,
        route: s
      };
      l.relativePath.startsWith("/") && (Nt(l.relativePath.startsWith(i), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(i.length));
      let u = ui([
        i,
        l.relativePath
      ]), c = n.concat(l);
      s.children && s.children.length > 0 && (Nt(s.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Ox(s.children, e, c, u)), !(s.path == null && !s.index) && e.push({
        path: u,
        score: MD(u, s.index),
        routesMeta: c
      });
    };
    return t.forEach((s, o) => {
      var r;
      if (s.path === "" || !((r = s.path) != null && r.includes("?"))) a(s, o);
      else for (let l of Nx(s.path)) a(s, o, l);
    }), e;
  }
  function Nx(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [n, ...i] = e, a = n.endsWith("?"), s = n.replace(/\?$/, "");
    if (i.length === 0) return a ? [
      s,
      ""
    ] : [
      s
    ];
    let o = Nx(i.join("/")), r = [];
    return r.push(...o.map((l) => l === "" ? s : [
      s,
      l
    ].join("/"))), a && r.push(...o), r.map((l) => t.startsWith("/") && l === "" ? "/" : l);
  }
  function xD(t) {
    t.sort((e, n) => e.score !== n.score ? n.score - e.score : RD(e.routesMeta.map((i) => i.childrenIndex), n.routesMeta.map((i) => i.childrenIndex)));
  }
  const SD = /^:[\w-]+$/, wD = 3, TD = 2, ED = 1, AD = 10, CD = -2, Rg = (t) => t === "*";
  function MD(t, e) {
    let n = t.split("/"), i = n.length;
    return n.some(Rg) && (i += CD), e && (i += TD), n.filter((a) => !Rg(a)).reduce((a, s) => a + (SD.test(s) ? wD : s === "" ? ED : AD), i);
  }
  function RD(t, e) {
    return t.length === e.length && t.slice(0, -1).every((i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0;
  }
  function DD(t, e, n) {
    let { routesMeta: i } = t, a = {}, s = "/", o = [];
    for (let r = 0; r < i.length; ++r) {
      let l = i[r], u = r === i.length - 1, c = s === "/" ? e : e.slice(s.length) || "/", f = Dg({
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: u
      }, c), h = l.route;
      if (!f && u && n && !i[i.length - 1].route.index && (f = Dg({
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: false
      }, c)), !f) return null;
      Object.assign(a, f.params), o.push({
        params: a,
        pathname: ui([
          s,
          f.pathname
        ]),
        pathnameBase: LD(ui([
          s,
          f.pathnameBase
        ])),
        route: h
      }), f.pathnameBase !== "/" && (s = ui([
        s,
        f.pathnameBase
      ]));
    }
    return o;
  }
  function Dg(t, e) {
    typeof t == "string" && (t = {
      path: t,
      caseSensitive: false,
      end: true
    });
    let [n, i] = OD(t.path, t.caseSensitive, t.end), a = e.match(n);
    if (!a) return null;
    let s = a[0], o = s.replace(/(.)\/+$/, "$1"), r = a.slice(1);
    return {
      params: i.reduce((u, c, f) => {
        let { paramName: h, isOptional: d } = c;
        if (h === "*") {
          let v = r[f] || "";
          o = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1");
        }
        const y = r[f];
        return d && !y ? u[h] = void 0 : u[h] = (y || "").replace(/%2F/g, "/"), u;
      }, {}),
      pathname: s,
      pathnameBase: o,
      pattern: t
    };
  }
  function OD(t, e, n) {
    e === void 0 && (e = false), n === void 0 && (n = true), Nh(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
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
  function ND(t) {
    try {
      return t.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
    } catch (e) {
      return Nh(false, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t;
    }
  }
  function zh(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length, i = t.charAt(n);
    return i && i !== "/" ? null : t.slice(n) || "/";
  }
  function zD(t, e) {
    e === void 0 && (e = "/");
    let { pathname: n, search: i = "", hash: a = "" } = typeof t == "string" ? ta(t) : t;
    return {
      pathname: n ? n.startsWith("/") ? n : jD(n, e) : e,
      search: VD(i),
      hash: UD(a)
    };
  }
  function jD(t, e) {
    let n = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach((a) => {
      a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
    }), n.length > 1 ? n.join("/") : "/";
  }
  function fc(t, e, n, i) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
  }
  function _D(t) {
    return t.filter((e, n) => n === 0 || e.route.path && e.route.path.length > 0);
  }
  function zx(t, e) {
    let n = _D(t);
    return e ? n.map((i, a) => a === n.length - 1 ? i.pathname : i.pathnameBase) : n.map((i) => i.pathnameBase);
  }
  function jx(t, e, n, i) {
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
    let l = zD(a, r), u = o && o !== "/" && o.endsWith("/"), c = (s || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
  }
  const ui = (t) => t.join("/").replace(/\/\/+/g, "/"), LD = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), VD = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, UD = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
  function BD(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
  }
  const _x = [
    "post",
    "put",
    "patch",
    "delete"
  ];
  new Set(_x);
  const PD = [
    "get",
    ..._x
  ];
  new Set(PD);
  function So() {
    return So = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    }, So.apply(this, arguments);
  }
  const jh = b.createContext(null), HD = b.createContext(null), ea = b.createContext(null), fu = b.createContext(null), na = b.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  }), Lx = b.createContext(null);
  function kD(t, e) {
    let { relative: n } = e === void 0 ? {} : e;
    Go() || Nt(false);
    let { basename: i, navigator: a } = b.useContext(ea), { hash: s, pathname: o, search: r } = Bx(t, {
      relative: n
    }), l = o;
    return i !== "/" && (l = o === "/" ? i : ui([
      i,
      o
    ])), a.createHref({
      pathname: l,
      search: r,
      hash: s
    });
  }
  function Go() {
    return b.useContext(fu) != null;
  }
  function hs() {
    return Go() || Nt(false), b.useContext(fu).location;
  }
  function Vx(t) {
    b.useContext(ea).static || b.useLayoutEffect(t);
  }
  function Ux() {
    let { isDataRoute: t } = b.useContext(na);
    return t ? tO() : GD();
  }
  function GD() {
    Go() || Nt(false);
    let t = b.useContext(jh), { basename: e, future: n, navigator: i } = b.useContext(ea), { matches: a } = b.useContext(na), { pathname: s } = hs(), o = JSON.stringify(zx(a, n.v7_relativeSplatPath)), r = b.useRef(false);
    return Vx(() => {
      r.current = true;
    }), b.useCallback(function(u, c) {
      if (c === void 0 && (c = {}), !r.current) return;
      if (typeof u == "number") {
        i.go(u);
        return;
      }
      let f = jx(u, JSON.parse(o), s, c.relative === "path");
      t == null && e !== "/" && (f.pathname = f.pathname === "/" ? e : ui([
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
  function Bx(t, e) {
    let { relative: n } = e === void 0 ? {} : e, { future: i } = b.useContext(ea), { matches: a } = b.useContext(na), { pathname: s } = hs(), o = JSON.stringify(zx(a, i.v7_relativeSplatPath));
    return b.useMemo(() => jx(t, JSON.parse(o), s, n === "path"), [
      t,
      o,
      s,
      n
    ]);
  }
  function YD(t, e) {
    return qD(t, e);
  }
  function qD(t, e, n, i) {
    Go() || Nt(false);
    let { navigator: a } = b.useContext(ea), { matches: s } = b.useContext(na), o = s[s.length - 1], r = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = hs(), c;
    if (e) {
      var f;
      let x = typeof e == "string" ? ta(e) : e;
      l === "/" || (f = x.pathname) != null && f.startsWith(l) || Nt(false), c = x;
    } else c = u;
    let h = c.pathname || "/", d = h;
    if (l !== "/") {
      let x = l.replace(/^\//, "").split("/");
      d = "/" + h.replace(/^\//, "").split("/").slice(x.length).join("/");
    }
    let y = vD(t, {
      pathname: d
    }), v = ZD(y && y.map((x) => Object.assign({}, x, {
      params: Object.assign({}, r, x.params),
      pathname: ui([
        l,
        a.encodeLocation ? a.encodeLocation(x.pathname).pathname : x.pathname
      ]),
      pathnameBase: x.pathnameBase === "/" ? l : ui([
        l,
        a.encodeLocation ? a.encodeLocation(x.pathnameBase).pathname : x.pathnameBase
      ])
    })), s, n, i);
    return e && v ? b.createElement(fu.Provider, {
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
    }, v) : v;
  }
  function FD() {
    let t = WD(), e = BD(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t), n = t instanceof Error ? t.stack : null, a = {
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
  const XD = b.createElement(FD, null);
  class QD extends b.Component {
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
      return this.state.error !== void 0 ? b.createElement(na.Provider, {
        value: this.props.routeContext
      }, b.createElement(Lx.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  }
  function KD(t) {
    let { routeContext: e, match: n, children: i } = t, a = b.useContext(jh);
    return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), b.createElement(na.Provider, {
      value: e
    }, i);
  }
  function ZD(t, e, n, i) {
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
        let { loaderData: h, errors: d } = n, y = f.route.loader && h[f.route.id] === void 0 && (!d || d[f.route.id] === void 0);
        if (f.route.lazy || y) {
          l = true, u >= 0 ? o = o.slice(0, u + 1) : o = [
            o[0]
          ];
          break;
        }
      }
    }
    return o.reduceRight((c, f, h) => {
      let d, y = false, v = null, x = null;
      n && (d = r && f.route.id ? r[f.route.id] : void 0, v = f.route.errorElement || XD, l && (u < 0 && h === 0 ? (y = true, x = null) : u === h && (y = true, x = f.route.hydrateFallbackElement || null)));
      let p = e.concat(o.slice(0, h + 1)), m = () => {
        let g;
        return d ? g = v : y ? g = x : f.route.Component ? g = b.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = c, b.createElement(KD, {
          match: f,
          routeContext: {
            outlet: c,
            matches: p,
            isDataRoute: n != null
          },
          children: g
        });
      };
      return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? b.createElement(QD, {
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
  var Px = function(t) {
    return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t;
  }(Px || {}), Ml = function(t) {
    return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t;
  }(Ml || {});
  function $D(t) {
    let e = b.useContext(jh);
    return e || Nt(false), e;
  }
  function JD(t) {
    let e = b.useContext(HD);
    return e || Nt(false), e;
  }
  function ID(t) {
    let e = b.useContext(na);
    return e || Nt(false), e;
  }
  function Hx(t) {
    let e = ID(), n = e.matches[e.matches.length - 1];
    return n.route.id || Nt(false), n.route.id;
  }
  function WD() {
    var t;
    let e = b.useContext(Lx), n = JD(Ml.UseRouteError), i = Hx(Ml.UseRouteError);
    return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[i];
  }
  function tO() {
    let { router: t } = $D(Px.UseNavigateStable), e = Hx(Ml.UseNavigateStable), n = b.useRef(false);
    return Vx(() => {
      n.current = true;
    }), b.useCallback(function(a, s) {
      s === void 0 && (s = {}), n.current && (typeof a == "number" ? t.navigate(a) : t.navigate(a, So({
        fromRouteId: e
      }, s)));
    }, [
      t,
      e
    ]);
  }
  function eO(t, e) {
    t == null ? void 0 : t.v7_startTransition, t == null ? void 0 : t.v7_relativeSplatPath;
  }
  function _s(t) {
    Nt(false);
  }
  function nO(t) {
    let { basename: e = "/", children: n = null, location: i, navigationType: a = In.Pop, navigator: s, static: o = false, future: r } = t;
    Go() && Nt(false);
    let l = e.replace(/^\/*/, "/"), u = b.useMemo(() => ({
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
    let { pathname: c = "/", search: f = "", hash: h = "", state: d = null, key: y = "default" } = i, v = b.useMemo(() => {
      let x = zh(c, l);
      return x == null ? null : {
        location: {
          pathname: x,
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
    return v == null ? null : b.createElement(ea.Provider, {
      value: u
    }, b.createElement(fu.Provider, {
      children: n,
      value: v
    }));
  }
  function iO(t) {
    let { children: e, location: n } = t;
    return YD(Pf(e), n);
  }
  new Promise(() => {
  });
  function Pf(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return b.Children.forEach(t, (i, a) => {
      if (!b.isValidElement(i)) return;
      let s = [
        ...e,
        a
      ];
      if (i.type === b.Fragment) {
        n.push.apply(n, Pf(i.props.children, s));
        return;
      }
      i.type !== _s && Nt(false), !i.props.index || !i.props.children || Nt(false);
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
      i.props.children && (o.children = Pf(i.props.children, s)), n.push(o);
    }), n;
  }
  function Hf() {
    return Hf = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    }, Hf.apply(this, arguments);
  }
  function aO(t, e) {
    if (t == null) return {};
    var n = {}, i = Object.keys(t), a, s;
    for (s = 0; s < i.length; s++) a = i[s], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n;
  }
  function sO(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
  }
  function oO(t, e) {
    return t.button === 0 && (!e || e === "_self") && !sO(t);
  }
  const rO = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition"
  ], lO = "6";
  try {
    window.__reactRouterVersion = lO;
  } catch {
  }
  const uO = "startTransition", Og = dv[uO];
  function cO(t) {
    let { basename: e, children: n, future: i, window: a } = t, s = b.useRef();
    s.current == null && (s.current = pD({
      window: a,
      v5Compat: true
    }));
    let o = s.current, [r, l] = b.useState({
      action: o.action,
      location: o.location
    }), { v7_startTransition: u } = i || {}, c = b.useCallback((f) => {
      u && Og ? Og(() => l(f)) : l(f);
    }, [
      l,
      u
    ]);
    return b.useLayoutEffect(() => o.listen(c), [
      o,
      c
    ]), b.useEffect(() => eO(i), [
      i
    ]), b.createElement(nO, {
      basename: e,
      children: n,
      location: r.location,
      navigationType: r.action,
      navigator: o,
      future: i
    });
  }
  let fO, dO;
  fO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  dO = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  kf = b.forwardRef(function(e, n) {
    let { onClick: i, relative: a, reloadDocument: s, replace: o, state: r, target: l, to: u, preventScrollReset: c, viewTransition: f } = e, h = aO(e, rO), { basename: d } = b.useContext(ea), y, v = false;
    if (typeof u == "string" && dO.test(u) && (y = u, fO)) try {
      let g = new URL(window.location.href), S = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u), T = zh(S.pathname, d);
      S.origin === g.origin && T != null ? u = T + S.search + S.hash : v = true;
    } catch {
    }
    let x = kD(u, {
      relative: a
    }), p = hO(u, {
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
    return b.createElement("a", Hf({}, h, {
      href: y || x,
      onClick: v || s ? i : m,
      ref: n,
      target: l
    }));
  });
  var Ng;
  (function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState";
  })(Ng || (Ng = {}));
  var zg;
  (function(t) {
    t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration";
  })(zg || (zg = {}));
  function hO(t, e) {
    let { target: n, replace: i, state: a, preventScrollReset: s, relative: o, viewTransition: r } = e === void 0 ? {} : e, l = Ux(), u = hs(), c = Bx(t, {
      relative: o
    });
    return b.useCallback((f) => {
      if (oO(f, n)) {
        f.preventDefault();
        let h = i !== void 0 ? i : Cl(u) === Cl(c);
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
  class mO extends b.Component {
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
  const _h = b.createContext({});
  function Lh(t) {
    const e = b.useRef(null);
    return e.current === null && (e.current = t()), e.current;
  }
  const kx = typeof window < "u", Gx = kx ? b.useLayoutEffect : b.useEffect, du = b.createContext(null);
  function Vh(t, e) {
    t.indexOf(e) === -1 && t.push(e);
  }
  function Rl(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }
  const an = (t, e, n) => n > e ? e : n < t ? t : n;
  let hu = () => {
  }, ts = () => {
  };
  const On = {}, Yx = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
  function qx(t) {
    return typeof t == "object" && t !== null;
  }
  const Fx = (t) => /^0[^.\s]+$/u.test(t);
  function Uh(t) {
    let e;
    return () => (e === void 0 && (e = t()), e);
  }
  const ze = (t) => t, pO = (t, e) => (n) => e(t(n)), Yo = (...t) => t.reduce(pO), wo = (t, e, n) => {
    const i = e - t;
    return i === 0 ? 1 : (n - t) / i;
  };
  class Bh {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return Vh(this.subscriptions, e), () => Rl(this.subscriptions, e);
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
  const je = (t) => t * 1e3, De = (t) => t / 1e3;
  function Xx(t, e) {
    return e ? t * (1e3 / e) : 0;
  }
  const Qx = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, gO = 1e-7, yO = 12;
  function vO(t, e, n, i, a) {
    let s, o, r = 0;
    do
      o = e + (n - e) / 2, s = Qx(o, i, a) - t, s > 0 ? n = o : e = o;
    while (Math.abs(s) > gO && ++r < yO);
    return o;
  }
  function qo(t, e, n, i) {
    if (t === e && n === i) return ze;
    const a = (s) => vO(s, 0, 1, t, n);
    return (s) => s === 0 || s === 1 ? s : Qx(a(s), e, i);
  }
  const Kx = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Zx = (t) => (e) => 1 - t(1 - e), $x = qo(0.33, 1.53, 0.69, 0.99), Ph = Zx($x), Jx = Kx(Ph), Ix = (t) => (t *= 2) < 1 ? 0.5 * Ph(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Hh = (t) => 1 - Math.sin(Math.acos(t)), Wx = Zx(Hh), tS = Kx(Hh), bO = qo(0.42, 0, 1, 1), xO = qo(0, 0, 0.58, 1), eS = qo(0.42, 0, 0.58, 1), SO = (t) => Array.isArray(t) && typeof t[0] != "number", nS = (t) => Array.isArray(t) && typeof t[0] == "number", jg = {
    linear: ze,
    easeIn: bO,
    easeInOut: eS,
    easeOut: xO,
    circIn: Hh,
    circInOut: tS,
    circOut: Wx,
    backIn: Ph,
    backInOut: Jx,
    backOut: $x,
    anticipate: Ix
  }, wO = (t) => typeof t == "string", _g = (t) => {
    if (nS(t)) {
      ts(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
      const [e, n, i, a] = t;
      return qo(e, n, i, a);
    } else if (wO(t)) return ts(jg[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), jg[t];
    return t;
  }, pr = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender"
  ], Lg = {
    value: null,
    addProjectionMetrics: null
  };
  function TO(t, e) {
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
        const v = d && a ? n : i;
        return h && o.add(f), v.has(f) || v.add(f), f;
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
        ], n.forEach(u), e && Lg.value && Lg.value.frameloop[e].push(l), l = 0, n.clear(), a = false, s && (s = false, c.process(f));
      }
    };
    return c;
  }
  const EO = 40;
  function iS(t, e) {
    let n = false, i = true;
    const a = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    }, s = () => n = true, o = pr.reduce((g, S) => (g[S] = TO(s, e ? S : void 0), g), {}), { setup: r, read: l, resolveKeyframes: u, preUpdate: c, update: f, preRender: h, render: d, postRender: y } = o, v = () => {
      const g = On.useManualTiming ? a.timestamp : performance.now();
      n = false, On.useManualTiming || (a.delta = i ? 1e3 / 60 : Math.max(Math.min(g - a.timestamp, EO), 1)), a.timestamp = g, a.isProcessing = true, r.process(a), l.process(a), u.process(a), c.process(a), f.process(a), h.process(a), d.process(a), y.process(a), a.isProcessing = false, n && e && (i = false, t(v));
    }, x = () => {
      n = true, i = true, a.isProcessing || t(v);
    };
    return {
      schedule: pr.reduce((g, S) => {
        const T = o[S];
        return g[S] = (A, E = false, C = false) => (n || x(), T.schedule(A, E, C)), g;
      }, {}),
      cancel: (g) => {
        for (let S = 0; S < pr.length; S++) o[pr[S]].cancel(g);
      },
      state: a,
      steps: o
    };
  }
  const { schedule: ct, cancel: vi, state: Pt, steps: dc } = iS(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ze, true);
  let Br;
  function AO() {
    Br = void 0;
  }
  const Zt = {
    now: () => (Br === void 0 && Zt.set(Pt.isProcessing || On.useManualTiming ? Pt.timestamp : performance.now()), Br),
    set: (t) => {
      Br = t, queueMicrotask(AO);
    }
  }, aS = (t) => (e) => typeof e == "string" && e.startsWith(t), sS = aS("--"), CO = aS("var(--"), kh = (t) => CO(t) ? MO.test(t.split("/*")[0].trim()) : false, MO = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  function Vg(t) {
    return typeof t != "string" ? false : t.split("/*")[0].includes("var(--");
  }
  const ms = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t
  }, To = {
    ...ms,
    transform: (t) => an(0, 1, t)
  }, gr = {
    ...ms,
    default: 1
  }, Js = (t) => Math.round(t * 1e5) / 1e5, Gh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function RO(t) {
    return t == null;
  }
  const DO = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Yh = (t, e) => (n) => !!(typeof n == "string" && DO.test(n) && n.startsWith(t) || e && !RO(n) && Object.prototype.hasOwnProperty.call(n, e)), oS = (t, e, n) => (i) => {
    if (typeof i != "string") return i;
    const [a, s, o, r] = i.match(Gh);
    return {
      [t]: parseFloat(a),
      [e]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: r !== void 0 ? parseFloat(r) : 1
    };
  }, OO = (t) => an(0, 255, t), hc = {
    ...ms,
    transform: (t) => Math.round(OO(t))
  }, Li = {
    test: Yh("rgb", "red"),
    parse: oS("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + hc.transform(t) + ", " + hc.transform(e) + ", " + hc.transform(n) + ", " + Js(To.transform(i)) + ")"
  };
  function NO(t) {
    let e = "", n = "", i = "", a = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), a = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), a = t.substring(4, 5), e += e, n += n, i += i, a += a), {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(i, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1
    };
  }
  const Gf = {
    test: Yh("#"),
    parse: NO,
    transform: Li.transform
  }, Fo = (t) => ({
    test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`
  }), Hn = Fo("deg"), en = Fo("%"), U = Fo("px"), zO = Fo("vh"), jO = Fo("vw"), Ug = {
    ...en,
    parse: (t) => en.parse(t) / 100,
    transform: (t) => en.transform(t * 100)
  }, Ca = {
    test: Yh("hsl", "hue"),
    parse: oS("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + en.transform(Js(e)) + ", " + en.transform(Js(n)) + ", " + Js(To.transform(i)) + ")"
  }, Ct = {
    test: (t) => Li.test(t) || Gf.test(t) || Ca.test(t),
    parse: (t) => Li.test(t) ? Li.parse(t) : Ca.test(t) ? Ca.parse(t) : Gf.parse(t),
    transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Li.transform(t) : Ca.transform(t),
    getAnimatableNone: (t) => {
      const e = Ct.parse(t);
      return e.alpha = 0, Ct.transform(e);
    }
  }, _O = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function LO(t) {
    var _a5, _b3;
    return isNaN(t) && typeof t == "string" && (((_a5 = t.match(Gh)) == null ? void 0 : _a5.length) || 0) + (((_b3 = t.match(_O)) == null ? void 0 : _b3.length) || 0) > 0;
  }
  const rS = "number", lS = "color", VO = "var", UO = "var(", Bg = "${}", BO = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function Eo(t) {
    const e = t.toString(), n = [], i = {
      color: [],
      number: [],
      var: []
    }, a = [];
    let s = 0;
    const r = e.replace(BO, (l) => (Ct.test(l) ? (i.color.push(s), a.push(lS), n.push(Ct.parse(l))) : l.startsWith(UO) ? (i.var.push(s), a.push(VO), n.push(l)) : (i.number.push(s), a.push(rS), n.push(parseFloat(l))), ++s, Bg)).split(Bg);
    return {
      values: n,
      split: r,
      indexes: i,
      types: a
    };
  }
  function uS(t) {
    return Eo(t).values;
  }
  function cS(t) {
    const { split: e, types: n } = Eo(t), i = e.length;
    return (a) => {
      let s = "";
      for (let o = 0; o < i; o++) if (s += e[o], a[o] !== void 0) {
        const r = n[o];
        r === rS ? s += Js(a[o]) : r === lS ? s += Ct.transform(a[o]) : s += a[o];
      }
      return s;
    };
  }
  const PO = (t) => typeof t == "number" ? 0 : Ct.test(t) ? Ct.getAnimatableNone(t) : t;
  function HO(t) {
    const e = uS(t);
    return cS(t)(e.map(PO));
  }
  const bi = {
    test: LO,
    parse: uS,
    createTransformer: cS,
    getAnimatableNone: HO
  };
  function mc(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
  }
  function kO({ hue: t, saturation: e, lightness: n, alpha: i }) {
    t /= 360, e /= 100, n /= 100;
    let a = 0, s = 0, o = 0;
    if (!e) a = s = o = n;
    else {
      const r = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - r;
      a = mc(l, r, t + 1 / 3), s = mc(l, r, t), o = mc(l, r, t - 1 / 3);
    }
    return {
      red: Math.round(a * 255),
      green: Math.round(s * 255),
      blue: Math.round(o * 255),
      alpha: i
    };
  }
  function Dl(t, e) {
    return (n) => n > 0 ? e : t;
  }
  const xt = (t, e, n) => t + (e - t) * n, pc = (t, e, n) => {
    const i = t * t, a = n * (e * e - i) + i;
    return a < 0 ? 0 : Math.sqrt(a);
  }, GO = [
    Gf,
    Li,
    Ca
  ], YO = (t) => GO.find((e) => e.test(t));
  function Pg(t) {
    const e = YO(t);
    if (hu(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return false;
    let n = e.parse(t);
    return e === Ca && (n = kO(n)), n;
  }
  const Hg = (t, e) => {
    const n = Pg(t), i = Pg(e);
    if (!n || !i) return Dl(t, e);
    const a = {
      ...n
    };
    return (s) => (a.red = pc(n.red, i.red, s), a.green = pc(n.green, i.green, s), a.blue = pc(n.blue, i.blue, s), a.alpha = xt(n.alpha, i.alpha, s), Li.transform(a));
  }, Yf = /* @__PURE__ */ new Set([
    "none",
    "hidden"
  ]);
  function qO(t, e) {
    return Yf.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
  }
  function FO(t, e) {
    return (n) => xt(t, e, n);
  }
  function qh(t) {
    return typeof t == "number" ? FO : typeof t == "string" ? kh(t) ? Dl : Ct.test(t) ? Hg : KO : Array.isArray(t) ? fS : typeof t == "object" ? Ct.test(t) ? Hg : XO : Dl;
  }
  function fS(t, e) {
    const n = [
      ...t
    ], i = n.length, a = t.map((s, o) => qh(s)(s, e[o]));
    return (s) => {
      for (let o = 0; o < i; o++) n[o] = a[o](s);
      return n;
    };
  }
  function XO(t, e) {
    const n = {
      ...t,
      ...e
    }, i = {};
    for (const a in n) t[a] !== void 0 && e[a] !== void 0 && (i[a] = qh(t[a])(t[a], e[a]));
    return (a) => {
      for (const s in i) n[s] = i[s](a);
      return n;
    };
  }
  function QO(t, e) {
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
  const KO = (t, e) => {
    const n = bi.createTransformer(e), i = Eo(t), a = Eo(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? Yf.has(t) && !a.values.length || Yf.has(e) && !i.values.length ? qO(t, e) : Yo(fS(QO(i, a), a.values), n) : (hu(true, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Dl(t, e));
  };
  function dS(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? xt(t, e, n) : qh(t)(t, e);
  }
  const ZO = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: (n = true) => ct.update(e, n),
      stop: () => vi(e),
      now: () => Pt.isProcessing ? Pt.timestamp : Zt.now()
    };
  }, hS = (t, e, n = 10) => {
    let i = "";
    const a = Math.max(Math.round(e / n), 2);
    for (let s = 0; s < a; s++) i += Math.round(t(s / (a - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${i.substring(0, i.length - 2)})`;
  }, Ol = 2e4;
  function Fh(t) {
    let e = 0;
    const n = 50;
    let i = t.next(e);
    for (; !i.done && e < Ol; ) e += n, i = t.next(e);
    return e >= Ol ? 1 / 0 : e;
  }
  function $O(t, e = 100, n) {
    const i = n({
      ...t,
      keyframes: [
        0,
        e
      ]
    }), a = Math.min(Fh(i), Ol);
    return {
      type: "keyframes",
      ease: (s) => i.next(a * s).value / e,
      duration: De(a)
    };
  }
  const JO = 5;
  function mS(t, e, n) {
    const i = Math.max(e - JO, 0);
    return Xx(n - t(i), e - i);
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
  }, gc = 1e-3;
  function IO({ duration: t = bt.duration, bounce: e = bt.bounce, velocity: n = bt.velocity, mass: i = bt.mass }) {
    let a, s;
    hu(t <= je(bt.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let o = 1 - e;
    o = an(bt.minDamping, bt.maxDamping, o), t = an(bt.minDuration, bt.maxDuration, De(t)), o < 1 ? (a = (u) => {
      const c = u * o, f = c * t, h = c - n, d = qf(u, o), y = Math.exp(-f);
      return gc - h / d * y;
    }, s = (u) => {
      const f = u * o * t, h = f * n + n, d = Math.pow(o, 2) * Math.pow(u, 2) * t, y = Math.exp(-f), v = qf(Math.pow(u, 2), o);
      return (-a(u) + gc > 0 ? -1 : 1) * ((h - d) * y) / v;
    }) : (a = (u) => {
      const c = Math.exp(-u * t), f = (u - n) * t + 1;
      return -gc + c * f;
    }, s = (u) => {
      const c = Math.exp(-u * t), f = (n - u) * (t * t);
      return c * f;
    });
    const r = 5 / t, l = tN(a, s, r);
    if (t = je(t), isNaN(l)) return {
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
  const WO = 12;
  function tN(t, e, n) {
    let i = n;
    for (let a = 1; a < WO; a++) i = i - t(i) / e(i);
    return i;
  }
  function qf(t, e) {
    return t * Math.sqrt(1 - e * e);
  }
  const eN = [
    "duration",
    "bounce"
  ], nN = [
    "stiffness",
    "damping",
    "mass"
  ];
  function kg(t, e) {
    return e.some((n) => t[n] !== void 0);
  }
  function iN(t) {
    let e = {
      velocity: bt.velocity,
      stiffness: bt.stiffness,
      damping: bt.damping,
      mass: bt.mass,
      isResolvedFromDuration: false,
      ...t
    };
    if (!kg(t, nN) && kg(t, eN)) if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), a = i * i, s = 2 * an(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
      e = {
        ...e,
        mass: bt.mass,
        stiffness: a,
        damping: s
      };
    } else {
      const n = IO(t);
      e = {
        ...e,
        ...n,
        mass: bt.mass
      }, e.isResolvedFromDuration = true;
    }
    return e;
  }
  function Nl(t = bt.visualDuration, e = bt.bounce) {
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
    }, { stiffness: l, damping: u, mass: c, duration: f, velocity: h, isResolvedFromDuration: d } = iN({
      ...n,
      velocity: -De(n.velocity || 0)
    }), y = h || 0, v = u / (2 * Math.sqrt(l * c)), x = o - s, p = De(Math.sqrt(l / c)), m = Math.abs(x) < 5;
    i || (i = m ? bt.restSpeed.granular : bt.restSpeed.default), a || (a = m ? bt.restDelta.granular : bt.restDelta.default);
    let g;
    if (v < 1) {
      const T = qf(p, v);
      g = (A) => {
        const E = Math.exp(-v * p * A);
        return o - E * ((y + v * p * x) / T * Math.sin(T * A) + x * Math.cos(T * A));
      };
    } else if (v === 1) g = (T) => o - Math.exp(-p * T) * (x + (y + p * x) * T);
    else {
      const T = p * Math.sqrt(v * v - 1);
      g = (A) => {
        const E = Math.exp(-v * p * A), C = Math.min(T * A, 300);
        return o - E * ((y + v * p * x) * Math.sinh(C) + T * x * Math.cosh(C)) / T;
      };
    }
    const S = {
      calculatedDuration: d && f || null,
      next: (T) => {
        const A = g(T);
        if (d) r.done = T >= f;
        else {
          let E = T === 0 ? y : 0;
          v < 1 && (E = T === 0 ? je(y) : mS(g, T, A));
          const C = Math.abs(E) <= i, D = Math.abs(o - A) <= a;
          r.done = C && D;
        }
        return r.value = r.done ? o : A, r;
      },
      toString: () => {
        const T = Math.min(Fh(S), Ol), A = hS((E) => S.next(T * E).value, T, 30);
        return T + "ms " + A;
      },
      toTransition: () => {
      }
    };
    return S;
  }
  Nl.applyToOptions = (t) => {
    const e = $O(t, 100, Nl);
    return t.ease = e.ease, t.duration = je(e.duration), t.type = "keyframes", t;
  };
  function Ff({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: a = 10, bounceStiffness: s = 500, modifyTarget: o, min: r, max: l, restDelta: u = 0.5, restSpeed: c }) {
    const f = t[0], h = {
      done: false,
      value: f
    }, d = (C) => r !== void 0 && C < r || l !== void 0 && C > l, y = (C) => r === void 0 ? l : l === void 0 || Math.abs(r - C) < Math.abs(l - C) ? r : l;
    let v = n * e;
    const x = f + v, p = o === void 0 ? x : o(x);
    p !== x && (v = p - f);
    const m = (C) => -v * Math.exp(-C / i), g = (C) => p + m(C), S = (C) => {
      const D = m(C), j = g(C);
      h.done = Math.abs(D) <= u, h.value = h.done ? p : j;
    };
    let T, A;
    const E = (C) => {
      d(h.value) && (T = C, A = Nl({
        keyframes: [
          h.value,
          y(h.value)
        ],
        velocity: mS(g, C, h.value),
        damping: a,
        stiffness: s,
        restDelta: u,
        restSpeed: c
      }));
    };
    return E(0), {
      calculatedDuration: null,
      next: (C) => {
        let D = false;
        return !A && T === void 0 && (D = true, S(C), E(C)), T !== void 0 && C >= T ? A.next(C - T) : (!D && S(C), h);
      }
    };
  }
  function aN(t, e, n) {
    const i = [], a = n || On.mix || dS, s = t.length - 1;
    for (let o = 0; o < s; o++) {
      let r = a(t[o], t[o + 1]);
      if (e) {
        const l = Array.isArray(e) ? e[o] || ze : e;
        r = Yo(l, r);
      }
      i.push(r);
    }
    return i;
  }
  function sN(t, e, { clamp: n = true, ease: i, mixer: a } = {}) {
    const s = t.length;
    if (ts(s === e.length, "Both input and output ranges must be the same length", "range-length"), s === 1) return () => e[0];
    if (s === 2 && e[0] === e[1]) return () => e[1];
    const o = t[0] === t[1];
    t[0] > t[s - 1] && (t = [
      ...t
    ].reverse(), e = [
      ...e
    ].reverse());
    const r = aN(e, i, a), l = r.length, u = (c) => {
      if (o && c < t[0]) return e[0];
      let f = 0;
      if (l > 1) for (; f < t.length - 2 && !(c < t[f + 1]); f++) ;
      const h = wo(t[f], t[f + 1], c);
      return r[f](h);
    };
    return n ? (c) => u(an(t[0], t[s - 1], c)) : u;
  }
  function oN(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
      const a = wo(0, e, i);
      t.push(xt(n, 1, a));
    }
  }
  function rN(t) {
    const e = [
      0
    ];
    return oN(e, t.length - 1), e;
  }
  function lN(t, e) {
    return t.map((n) => n * e);
  }
  function uN(t, e) {
    return t.map(() => e || eS).splice(0, t.length - 1);
  }
  function Is({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
    const a = SO(i) ? i.map(_g) : _g(i), s = {
      done: false,
      value: e[0]
    }, o = lN(n && n.length === e.length ? n : rN(e), t), r = sN(o, e, {
      ease: Array.isArray(a) ? a : uN(e, a)
    });
    return {
      calculatedDuration: t,
      next: (l) => (s.value = r(l), s.done = l >= t, s)
    };
  }
  const cN = (t) => t !== null;
  function Xh(t, { repeat: e, repeatType: n = "loop" }, i, a = 1) {
    const s = t.filter(cN), r = a < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
    return !r || i === void 0 ? s[r] : i;
  }
  const fN = {
    decay: Ff,
    inertia: Ff,
    tween: Is,
    keyframes: Is,
    spring: Nl
  };
  function pS(t) {
    typeof t.type == "string" && (t.type = fN[t.type]);
  }
  class Qh {
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
  const dN = (t) => t / 100;
  class Kh extends Qh {
    constructor(e) {
      super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
        var _a5, _b3;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== Zt.now() && this.tick(Zt.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), (_b3 = (_a5 = this.options).onStop) == null ? void 0 : _b3.call(_a5));
      }, this.options = e, this.initAnimation(), this.play(), e.autoplay === false && this.pause();
    }
    initAnimation() {
      const { options: e } = this;
      pS(e);
      const { type: n = Is, repeat: i = 0, repeatDelay: a = 0, repeatType: s, velocity: o = 0 } = e;
      let { keyframes: r } = e;
      const l = n || Is;
      l !== Is && typeof r[0] != "number" && (this.mixKeyframes = Yo(dN, dS(r[0], r[1])), r = [
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
      })), u.calculatedDuration === null && (u.calculatedDuration = Fh(u));
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
      const { delay: u = 0, keyframes: c, repeat: f, repeatType: h, repeatDelay: d, type: y, onUpdate: v, finalKeyframe: x } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - a / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
      const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), m = this.playbackSpeed >= 0 ? p < 0 : p > a;
      this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = a);
      let g = this.currentTime, S = i;
      if (f) {
        const C = Math.min(this.currentTime, a) / r;
        let D = Math.floor(C), j = C % 1;
        !j && C >= 1 && (j = 1), j === 1 && D--, D = Math.min(D, f + 1), !!(D % 2) && (h === "reverse" ? (j = 1 - j, d && (j -= d / r)) : h === "mirror" && (S = o)), g = an(0, 1, j) * r;
      }
      const T = m ? {
        done: false,
        value: c[0]
      } : S.next(g);
      s && (T.value = s(T.value));
      let { done: A } = T;
      !m && l !== null && (A = this.playbackSpeed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
      const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
      return E && y !== Ff && (T.value = Xh(c, this.options, x, this.speed)), v && v(T.value), E && this.finish(), T;
    }
    then(e, n) {
      return this.finished.then(e, n);
    }
    get duration() {
      return De(this.calculatedDuration);
    }
    get iterationDuration() {
      const { delay: e = 0 } = this.options || {};
      return this.duration + De(e);
    }
    get time() {
      return De(this.currentTime);
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
      this.playbackSpeed = e, n && (this.time = De(this.currentTime));
    }
    play() {
      var _a5, _b3;
      if (this.isStopped) return;
      const { driver: e = ZO, startTime: n } = this.options;
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
  function hN(t) {
    for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
  }
  const Vi = (t) => t * 180 / Math.PI, Xf = (t) => {
    const e = Vi(Math.atan2(t[1], t[0]));
    return Qf(e);
  }, mN = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: Xf,
    rotateZ: Xf,
    skewX: (t) => Vi(Math.atan(t[1])),
    skewY: (t) => Vi(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
  }, Qf = (t) => (t = t % 360, t < 0 && (t += 360), t), Gg = Xf, Yg = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), qg = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), pN = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Yg,
    scaleY: qg,
    scale: (t) => (Yg(t) + qg(t)) / 2,
    rotateX: (t) => Qf(Vi(Math.atan2(t[6], t[5]))),
    rotateY: (t) => Qf(Vi(Math.atan2(-t[2], t[0]))),
    rotateZ: Gg,
    rotate: Gg,
    skewX: (t) => Vi(Math.atan(t[4])),
    skewY: (t) => Vi(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
  };
  function Kf(t) {
    return t.includes("scale") ? 1 : 0;
  }
  function Zf(t, e) {
    if (!t || t === "none") return Kf(e);
    const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let i, a;
    if (n) i = pN, a = n;
    else {
      const r = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      i = mN, a = r;
    }
    if (!a) return Kf(e);
    const s = i[e], o = a[1].split(",").map(yN);
    return typeof s == "function" ? s(o) : o[s];
  }
  const gN = (t, e) => {
    const { transform: n = "none" } = getComputedStyle(t);
    return Zf(n, e);
  };
  function yN(t) {
    return parseFloat(t.trim());
  }
  const ps = [
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
  ], gs = new Set(ps), Fg = (t) => t === ms || t === U, vN = /* @__PURE__ */ new Set([
    "x",
    "y",
    "z"
  ]), bN = ps.filter((t) => !vN.has(t));
  function xN(t) {
    const e = [];
    return bN.forEach((n) => {
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
    x: (t, { transform: e }) => Zf(e, "x"),
    y: (t, { transform: e }) => Zf(e, "y")
  };
  Wn.translateX = Wn.x;
  Wn.translateY = Wn.y;
  const Gi = /* @__PURE__ */ new Set();
  let $f = false, Jf = false, If = false;
  function gS() {
    if (Jf) {
      const t = Array.from(Gi).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
      e.forEach((i) => {
        const a = xN(i);
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
    Jf = false, $f = false, Gi.forEach((t) => t.complete(If)), Gi.clear();
  }
  function yS() {
    Gi.forEach((t) => {
      t.readKeyframes(), t.needsMeasurement && (Jf = true);
    });
  }
  function SN() {
    If = true, yS(), gS(), If = false;
  }
  class Zh {
    constructor(e, n, i, a, s, o = false) {
      this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [
        ...e
      ], this.onComplete = n, this.name = i, this.motionValue = a, this.element = s, this.isAsync = o;
    }
    scheduleResolve() {
      this.state = "scheduled", this.isAsync ? (Gi.add(this), $f || ($f = true, ct.read(yS), ct.resolveKeyframes(gS))) : (this.readKeyframes(), this.complete());
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
      hN(e);
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
  const wN = (t) => t.startsWith("--");
  function TN(t, e, n) {
    wN(e) ? t.style.setProperty(e, n) : t.style[e] = n;
  }
  const EN = Uh(() => window.ScrollTimeline !== void 0), AN = {};
  function CN(t, e) {
    const n = Uh(t);
    return () => AN[e] ?? n();
  }
  const vS = CN(() => {
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
  }, "linearEasing"), Ls = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, Xg = {
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
  function bS(t, e) {
    if (t) return typeof t == "function" ? vS() ? hS(t, e) : "ease-out" : nS(t) ? Ls(t) : Array.isArray(t) ? t.map((n) => bS(n, e) || Xg.easeOut) : Xg[t];
  }
  function MN(t, e, n, { delay: i = 0, duration: a = 300, repeat: s = 0, repeatType: o = "loop", ease: r = "easeOut", times: l } = {}, u = void 0) {
    const c = {
      [e]: n
    };
    l && (c.offset = l);
    const f = bS(r, a);
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
  function xS(t) {
    return typeof t == "function" && "applyToOptions" in t;
  }
  function RN({ type: t, ...e }) {
    return xS(t) && vS() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
  }
  class SS extends Qh {
    constructor(e) {
      if (super(), this.finishedTime = null, this.isStopped = false, this.manualStartTime = null, !e) return;
      const { element: n, name: i, keyframes: a, pseudoElement: s, allowFlatten: o = false, finalKeyframe: r, onComplete: l } = e;
      this.isPseudoElement = !!s, this.allowFlatten = o, this.options = e, ts(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
      const u = RN(e);
      this.animation = MN(n, i, a, u, s), u.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
        if (this.finishedTime = this.time, !s) {
          const c = Xh(a, this.options, r, this.speed);
          this.updateMotionValue ? this.updateMotionValue(c) : TN(n, i, c), this.animation.cancel();
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
      return De(Number(e));
    }
    get iterationDuration() {
      const { delay: e = 0 } = this.options || {};
      return this.duration + De(e);
    }
    get time() {
      return De(Number(this.animation.currentTime) || 0);
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
      })), this.animation.onfinish = null, e && EN() ? (this.animation.timeline = e, ze) : n(this);
    }
  }
  const wS = {
    anticipate: Ix,
    backInOut: Jx,
    circInOut: tS
  };
  function DN(t) {
    return t in wS;
  }
  function ON(t) {
    typeof t.ease == "string" && DN(t.ease) && (t.ease = wS[t.ease]);
  }
  const yc = 10;
  class NN extends SS {
    constructor(e) {
      ON(e), pS(e), super(e), e.startTime !== void 0 && (this.startTime = e.startTime), this.options = e;
    }
    updateMotionValue(e) {
      const { motionValue: n, onUpdate: i, onComplete: a, element: s, ...o } = this.options;
      if (!n) return;
      if (e !== void 0) {
        n.set(e);
        return;
      }
      const r = new Kh({
        ...o,
        autoplay: false
      }), l = Math.max(yc, Zt.now() - this.startTime), u = an(0, yc, l - yc);
      n.setWithVelocity(r.sample(Math.max(0, l - u)).value, r.sample(l).value, u), r.stop();
    }
  }
  const Qg = (t, e) => e === "zIndex" ? false : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (bi.test(t) || t === "0") && !t.startsWith("url("));
  function zN(t) {
    const e = t[0];
    if (t.length === 1) return true;
    for (let n = 0; n < t.length; n++) if (t[n] !== e) return true;
  }
  function jN(t, e, n, i) {
    const a = t[0];
    if (a === null) return false;
    if (e === "display" || e === "visibility") return true;
    const s = t[t.length - 1], o = Qg(a, e), r = Qg(s, e);
    return hu(o === r, `You are trying to animate ${e} from "${a}" to "${s}". "${o ? s : a}" is not an animatable value.`, "value-not-animatable"), !o || !r ? false : zN(t) || (n === "spring" || xS(n)) && i;
  }
  function Wf(t) {
    t.duration = 0, t.type = "keyframes";
  }
  const _N = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
  ]), LN = Uh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  function VN(t) {
    var _a5;
    const { motionValue: e, name: n, repeatDelay: i, repeatType: a, damping: s, type: o } = t;
    if (!(((_a5 = e == null ? void 0 : e.owner) == null ? void 0 : _a5.current) instanceof HTMLElement)) return false;
    const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
    return LN() && n && _N.has(n) && (n !== "transform" || !u) && !l && !i && a !== "mirror" && s !== 0 && o !== "inertia";
  }
  const UN = 40;
  class BN extends Qh {
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
      }, d = (c == null ? void 0 : c.KeyframeResolver) || Zh;
      this.keyframeResolver = new d(r, (y, v, x) => this.onKeyframesResolved(y, v, h, !x), l, u, c), (_a5 = this.keyframeResolver) == null ? void 0 : _a5.scheduleResolve();
    }
    onKeyframesResolved(e, n, i, a) {
      var _a5, _b3;
      this.keyframeResolver = void 0;
      const { name: s, type: o, velocity: r, delay: l, isHandoff: u, onUpdate: c } = i;
      this.resolvedAt = Zt.now(), jN(e, s, o, r) || ((On.instantAnimations || !l) && (c == null ? void 0 : c(Xh(e, i, n))), e[0] = e[e.length - 1], Wf(i), i.repeat = 0);
      const h = {
        startTime: a ? this.resolvedAt ? this.resolvedAt - this.createdAt > UN ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
        finalKeyframe: n,
        ...i,
        keyframes: e
      }, d = !u && VN(h), y = (_b3 = (_a5 = h.motionValue) == null ? void 0 : _a5.owner) == null ? void 0 : _b3.current, v = d ? new NN({
        ...h,
        element: y
      }) : new Kh(h);
      v.finished.then(() => {
        this.notifyFinished();
      }).catch(ze), this.pendingTimeline && (this.stopTimeline = v.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = v;
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
      return this._animation || ((_a5 = this.keyframeResolver) == null ? void 0 : _a5.resume(), SN()), this._animation;
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
  function TS(t, e, n, i = 0, a = 1) {
    const s = Array.from(t).sort((u, c) => u.sortNodePosition(c)).indexOf(e), o = t.size, r = (o - 1) * i;
    return typeof n == "function" ? n(s, o) : a === 1 ? s * i : r - s * i;
  }
  const PN = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function HN(t) {
    const e = PN.exec(t);
    if (!e) return [
      ,
    ];
    const [, n, i, a] = e;
    return [
      `--${n ?? i}`,
      a
    ];
  }
  const kN = 4;
  function ES(t, e, n = 1) {
    ts(n <= kN, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [i, a] = HN(t);
    if (!i) return;
    const s = window.getComputedStyle(e).getPropertyValue(i);
    if (s) {
      const o = s.trim();
      return Yx(o) ? parseFloat(o) : o;
    }
    return kh(a) ? ES(a, e, n + 1) : a;
  }
  const GN = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }, YN = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }), qN = {
    type: "keyframes",
    duration: 0.8
  }, FN = {
    type: "keyframes",
    ease: [
      0.25,
      0.1,
      0.35,
      1
    ],
    duration: 0.3
  }, XN = (t, { keyframes: e }) => e.length > 2 ? qN : gs.has(t) ? t.startsWith("scale") ? YN(e[1]) : GN : FN, QN = (t) => t !== null;
  function KN(t, { repeat: e, repeatType: n = "loop" }, i) {
    const a = t.filter(QN), s = e && n !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !s || i === void 0 ? a[s] : i;
  }
  function AS(t, e) {
    if ((t == null ? void 0 : t.inherit) && e) {
      const { inherit: n, ...i } = t;
      return {
        ...e,
        ...i
      };
    }
    return t;
  }
  function $h(t, e) {
    const n = (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
    return n !== t ? AS(n, t) : n;
  }
  function ZN({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: a, repeat: s, repeatType: o, repeatDelay: r, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length;
  }
  const Jh = (t, e, n, i = {}, a, s) => (o) => {
    const r = $h(i, t) || {}, l = r.delay || i.delay || 0;
    let { elapsed: u = 0 } = i;
    u = u - je(l);
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
    ZN(r) || Object.assign(c, XN(t, c)), c.duration && (c.duration = je(c.duration)), c.repeatDelay && (c.repeatDelay = je(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = false;
    if ((c.type === false || c.duration === 0 && !c.repeatDelay) && (Wf(c), c.delay === 0 && (f = true)), (On.instantAnimations || On.skipAnimations || (a == null ? void 0 : a.shouldSkipAnimations)) && (f = true, Wf(c), c.delay = 0), c.allowFlatten = !r.type && !r.ease, f && !s && e.get() !== void 0) {
      const h = KN(c.keyframes, r);
      if (h !== void 0) {
        ct.update(() => {
          c.onUpdate(h), c.onComplete();
        });
        return;
      }
    }
    return r.isSync ? new Kh(c) : new BN(c);
  };
  function Kg(t) {
    const e = [
      {},
      {}
    ];
    return t == null ? void 0 : t.values.forEach((n, i) => {
      e[0][i] = n.get(), e[1][i] = n.getVelocity();
    }), e;
  }
  function Ih(t, e, n, i) {
    if (typeof e == "function") {
      const [a, s] = Kg(i);
      e = e(n !== void 0 ? n : t.custom, a, s);
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
      const [a, s] = Kg(i);
      e = e(n !== void 0 ? n : t.custom, a, s);
    }
    return e;
  }
  function Ha(t, e, n) {
    const i = t.getProps();
    return Ih(i, e, n !== void 0 ? n : i.custom, t);
  }
  const CS = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...ps
  ]), Zg = 30, $N = (t) => !isNaN(parseFloat(t));
  class JN {
    constructor(e, n = {}) {
      this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
        var _a5;
        const a = Zt.now();
        if (this.updatedAt !== a && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && ((_a5 = this.events.change) == null ? void 0 : _a5.notify(this.current), this.dependents)) for (const s of this.dependents) s.dirty();
      }, this.hasAnimated = false, this.setCurrent(e), this.owner = n.owner;
    }
    setCurrent(e) {
      this.current = e, this.updatedAt = Zt.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = $N(this.current));
    }
    setPrevFrameValue(e = this.current) {
      this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, n) {
      this.events[e] || (this.events[e] = new Bh());
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
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Zg) return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, Zg);
      return Xx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
    return new JN(t, e);
  }
  const td = (t) => Array.isArray(t);
  function IN(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, es(n));
  }
  function WN(t) {
    return td(t) ? t[t.length - 1] || 0 : t;
  }
  function t5(t, e) {
    const n = Ha(t, e);
    let { transitionEnd: i = {}, transition: a = {}, ...s } = n || {};
    s = {
      ...s,
      ...i
    };
    for (const o in s) {
      const r = WN(s[o]);
      IN(t, o, r);
    }
  }
  const Ft = (t) => !!(t && t.getVelocity);
  function e5(t) {
    return !!(Ft(t) && t.add);
  }
  function ed(t, e) {
    const n = t.getValue("willChange");
    if (e5(n)) return n.add(e);
    if (!n && On.WillChange) {
      const i = new On.WillChange("auto");
      t.addValue("willChange", i), i.add(e);
    }
  }
  function Wh(t) {
    return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
  }
  const n5 = "framerAppearId", MS = "data-" + Wh(n5);
  function RS(t) {
    return t.props[MS];
  }
  function i5({ protectedKeys: t, needsAnimating: e }, n) {
    const i = t.hasOwnProperty(n) && e[n] !== true;
    return e[n] = false, i;
  }
  function DS(t, e, { delay: n = 0, transitionOverride: i, type: a } = {}) {
    let { transition: s, transitionEnd: o, ...r } = e;
    const l = t.getDefaultTransition();
    s = s ? AS(s, l) : l;
    const u = s == null ? void 0 : s.reduceMotion;
    i && (s = i);
    const c = [], f = a && t.animationState && t.animationState.getState()[a];
    for (const h in r) {
      const d = t.getValue(h, t.latestValues[h] ?? null), y = r[h];
      if (y === void 0 || f && i5(f, h)) continue;
      const v = {
        delay: n,
        ...$h(s || {}, h)
      }, x = d.get();
      if (x !== void 0 && !d.isAnimating && !Array.isArray(y) && y === x && !v.velocity) continue;
      let p = false;
      if (window.MotionHandoffAnimation) {
        const S = RS(t);
        if (S) {
          const T = window.MotionHandoffAnimation(S, h, ct);
          T !== null && (v.startTime = T, p = true);
        }
      }
      ed(t, h);
      const m = u ?? t.shouldReduceMotion;
      d.start(Jh(h, d, y, m && CS.has(h) ? {
        type: false
      } : v, t, p));
      const g = d.animation;
      g && c.push(g);
    }
    if (o) {
      const h = () => ct.update(() => {
        o && t5(t, o);
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
    const s = i ? () => Promise.all(DS(t, i, n)) : () => Promise.resolve(), o = t.variantChildren && t.variantChildren.size ? (l = 0) => {
      const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = a;
      return a5(t, e, l, u, c, f, n);
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
  function a5(t, e, n = 0, i = 0, a = 0, s = 1, o) {
    const r = [];
    for (const l of t.variantChildren) l.notify("AnimationStart", e), r.push(nd(l, e, {
      ...o,
      delay: n + (typeof i == "function" ? 0 : i) + TS(t.variantChildren, l, i, a, s)
    }).then(() => l.notify("AnimationComplete", e)));
    return Promise.all(r);
  }
  function s5(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
      const a = e.map((s) => nd(t, s, n));
      i = Promise.all(a);
    } else if (typeof e == "string") i = nd(t, e, n);
    else {
      const a = typeof e == "function" ? Ha(t, e, n.custom) : e;
      i = Promise.all(DS(t, a, n));
    }
    return i.then(() => {
      t.notify("AnimationComplete", e);
    });
  }
  const o5 = {
    test: (t) => t === "auto",
    parse: (t) => t
  }, OS = (t) => (e) => e.test(t), NS = [
    ms,
    U,
    en,
    Hn,
    jO,
    zO,
    o5
  ], $g = (t) => NS.find(OS(t));
  function r5(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Fx(t) : true;
  }
  const l5 = /* @__PURE__ */ new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
  ]);
  function u5(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [i] = n.match(Gh) || [];
    if (!i) return t;
    const a = n.replace(i, "");
    let s = l5.has(e) ? 1 : 0;
    return i !== n && (s *= 100), e + "(" + s + a + ")";
  }
  const c5 = /\b([a-z-]*)\(.*?\)/gu, id = {
    ...bi,
    getAnimatableNone: (t) => {
      const e = t.match(c5);
      return e ? e.map(u5).join(" ") : t;
    }
  }, Jg = {
    ...ms,
    transform: Math.round
  }, f5 = {
    rotate: Hn,
    rotateX: Hn,
    rotateY: Hn,
    rotateZ: Hn,
    scale: gr,
    scaleX: gr,
    scaleY: gr,
    scaleZ: gr,
    skew: Hn,
    skewX: Hn,
    skewY: Hn,
    distance: U,
    translateX: U,
    translateY: U,
    translateZ: U,
    x: U,
    y: U,
    z: U,
    perspective: U,
    transformPerspective: U,
    opacity: To,
    originX: Ug,
    originY: Ug,
    originZ: U
  }, tm = {
    borderWidth: U,
    borderTopWidth: U,
    borderRightWidth: U,
    borderBottomWidth: U,
    borderLeftWidth: U,
    borderRadius: U,
    borderTopLeftRadius: U,
    borderTopRightRadius: U,
    borderBottomRightRadius: U,
    borderBottomLeftRadius: U,
    width: U,
    maxWidth: U,
    height: U,
    maxHeight: U,
    top: U,
    right: U,
    bottom: U,
    left: U,
    inset: U,
    insetBlock: U,
    insetBlockStart: U,
    insetBlockEnd: U,
    insetInline: U,
    insetInlineStart: U,
    insetInlineEnd: U,
    padding: U,
    paddingTop: U,
    paddingRight: U,
    paddingBottom: U,
    paddingLeft: U,
    paddingBlock: U,
    paddingBlockStart: U,
    paddingBlockEnd: U,
    paddingInline: U,
    paddingInlineStart: U,
    paddingInlineEnd: U,
    margin: U,
    marginTop: U,
    marginRight: U,
    marginBottom: U,
    marginLeft: U,
    marginBlock: U,
    marginBlockStart: U,
    marginBlockEnd: U,
    marginInline: U,
    marginInlineStart: U,
    marginInlineEnd: U,
    fontSize: U,
    backgroundPositionX: U,
    backgroundPositionY: U,
    ...f5,
    zIndex: Jg,
    fillOpacity: To,
    strokeOpacity: To,
    numOctaves: Jg
  }, d5 = {
    ...tm,
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
  }, zS = (t) => d5[t];
  function jS(t, e) {
    let n = zS(t);
    return n !== id && (n = bi), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
  }
  const h5 = /* @__PURE__ */ new Set([
    "auto",
    "none",
    "0"
  ]);
  function m5(t, e, n) {
    let i = 0, a;
    for (; i < t.length && !a; ) {
      const s = t[i];
      typeof s == "string" && !h5.has(s) && Eo(s).values.length && (a = t[i]), i++;
    }
    if (a && n) for (const s of e) t[s] = jS(n, a);
  }
  class p5 extends Zh {
    constructor(e, n, i, a, s) {
      super(e, n, i, a, s, true);
    }
    readKeyframes() {
      const { unresolvedKeyframes: e, element: n, name: i } = this;
      if (!n || !n.current) return;
      super.readKeyframes();
      for (let c = 0; c < e.length; c++) {
        let f = e[c];
        if (typeof f == "string" && (f = f.trim(), kh(f))) {
          const h = ES(f, n.current);
          h !== void 0 && (e[c] = h), c === e.length - 1 && (this.finalKeyframe = f);
        }
      }
      if (this.resolveNoneKeyframes(), !CS.has(i) || e.length !== 2) return;
      const [a, s] = e, o = $g(a), r = $g(s), l = Vg(a), u = Vg(s);
      if (l !== u && Wn[i]) {
        this.needsMeasurement = true;
        return;
      }
      if (o !== r) if (Fg(o) && Fg(r)) for (let c = 0; c < e.length; c++) {
        const f = e[c];
        typeof f == "string" && (e[c] = parseFloat(f));
      }
      else Wn[i] && (this.needsMeasurement = true);
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: e, name: n } = this, i = [];
      for (let a = 0; a < e.length; a++) (e[a] === null || r5(e[a])) && i.push(a);
      i.length && m5(e, i, n);
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
      const s = i.length - 1, o = i[s];
      i[s] = Wn[n](e.measureViewportBox(), window.getComputedStyle(e.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), ((_a5 = this.removedTransforms) == null ? void 0 : _a5.length) && this.removedTransforms.forEach(([r, l]) => {
        e.getValue(r).set(l);
      }), this.resolveNoneKeyframes();
    }
  }
  const g5 = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
  ]);
  function _S(t, e, n) {
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
  const LS = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
  function ad(t) {
    return qx(t) && "offsetHeight" in t;
  }
  const { schedule: em, cancel: Rz } = iS(queueMicrotask, false), ke = {
    x: false,
    y: false
  };
  function VS() {
    return ke.x || ke.y;
  }
  function y5(t) {
    return t === "x" || t === "y" ? ke[t] ? null : (ke[t] = true, () => {
      ke[t] = false;
    }) : ke.x || ke.y ? null : (ke.x = ke.y = true, () => {
      ke.x = ke.y = false;
    });
  }
  function US(t, e) {
    const n = _S(t), i = new AbortController(), a = {
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
  function v5(t) {
    return !(t.pointerType === "touch" || VS());
  }
  function b5(t, e, n = {}) {
    const [i, a, s] = US(t, n);
    return i.forEach((o) => {
      let r = false, l = false, u;
      const c = () => {
        o.removeEventListener("pointerleave", y);
      }, f = (x) => {
        u && (u(x), u = void 0), c();
      }, h = (x) => {
        r = false, window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), l && (l = false, f(x));
      }, d = () => {
        r = true, window.addEventListener("pointerup", h, a), window.addEventListener("pointercancel", h, a);
      }, y = (x) => {
        if (x.pointerType !== "touch") {
          if (r) {
            l = true;
            return;
          }
          f(x);
        }
      }, v = (x) => {
        if (!v5(x)) return;
        l = false;
        const p = e(o, x);
        typeof p == "function" && (u = p, o.addEventListener("pointerleave", y, a));
      };
      o.addEventListener("pointerenter", v, a), o.addEventListener("pointerdown", d, a);
    }), s;
  }
  const BS = (t, e) => e ? t === e ? true : BS(t, e.parentElement) : false, nm = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false, x5 = /* @__PURE__ */ new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
  ]);
  function S5(t) {
    return x5.has(t.tagName) || t.isContentEditable === true;
  }
  const w5 = /* @__PURE__ */ new Set([
    "INPUT",
    "SELECT",
    "TEXTAREA"
  ]);
  function T5(t) {
    return w5.has(t.tagName) || t.isContentEditable === true;
  }
  const Pr = /* @__PURE__ */ new WeakSet();
  function Ig(t) {
    return (e) => {
      e.key === "Enter" && t(e);
    };
  }
  function vc(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
      isPrimary: true,
      bubbles: true
    }));
  }
  const E5 = (t, e) => {
    const n = t.currentTarget;
    if (!n) return;
    const i = Ig(() => {
      if (Pr.has(n)) return;
      vc(n, "down");
      const a = Ig(() => {
        vc(n, "up");
      }), s = () => vc(n, "cancel");
      n.addEventListener("keyup", a, e), n.addEventListener("blur", s, e);
    });
    n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
  };
  function Wg(t) {
    return nm(t) && !VS();
  }
  const ty = /* @__PURE__ */ new WeakSet();
  function A5(t, e, n = {}) {
    const [i, a, s] = US(t, n), o = (r) => {
      const l = r.currentTarget;
      if (!Wg(r) || ty.has(r)) return;
      Pr.add(l), n.stopPropagation && ty.add(r);
      const u = e(l, r), c = (d, y) => {
        window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", h), Pr.has(l) && Pr.delete(l), Wg(d) && typeof u == "function" && u(d, {
          success: y
        });
      }, f = (d) => {
        c(d, l === window || l === document || n.useGlobalTarget || BS(l, d.target));
      }, h = (d) => {
        c(d, false);
      };
      window.addEventListener("pointerup", f, a), window.addEventListener("pointercancel", h, a);
    };
    return i.forEach((r) => {
      (n.useGlobalTarget ? window : r).addEventListener("pointerdown", o, a), ad(r) && (r.addEventListener("focus", (u) => E5(u, a)), !S5(r) && !r.hasAttribute("tabindex") && (r.tabIndex = 0));
    }), s;
  }
  function im(t) {
    return qx(t) && "ownerSVGElement" in t;
  }
  const Hr = /* @__PURE__ */ new WeakMap();
  let kr;
  const PS = (t, e, n) => (i, a) => a && a[0] ? a[0][t + "Size"] : im(i) && "getBBox" in i ? i.getBBox()[e] : i[n], C5 = PS("inline", "width", "offsetWidth"), M5 = PS("block", "height", "offsetHeight");
  function R5({ target: t, borderBoxSize: e }) {
    var _a5;
    (_a5 = Hr.get(t)) == null ? void 0 : _a5.forEach((n) => {
      n(t, {
        get width() {
          return C5(t, e);
        },
        get height() {
          return M5(t, e);
        }
      });
    });
  }
  function D5(t) {
    t.forEach(R5);
  }
  function O5() {
    typeof ResizeObserver > "u" || (kr = new ResizeObserver(D5));
  }
  function N5(t, e) {
    kr || O5();
    const n = _S(t);
    return n.forEach((i) => {
      let a = Hr.get(i);
      a || (a = /* @__PURE__ */ new Set(), Hr.set(i, a)), a.add(e), kr == null ? void 0 : kr.observe(i);
    }), () => {
      n.forEach((i) => {
        const a = Hr.get(i);
        a == null ? void 0 : a.delete(e), (a == null ? void 0 : a.size) || (kr == null ? void 0 : kr.unobserve(i));
      });
    };
  }
  const Gr = /* @__PURE__ */ new Set();
  let Ma;
  function z5() {
    Ma = () => {
      const t = {
        get width() {
          return window.innerWidth;
        },
        get height() {
          return window.innerHeight;
        }
      };
      Gr.forEach((e) => e(t));
    }, window.addEventListener("resize", Ma);
  }
  function j5(t) {
    return Gr.add(t), Ma || z5(), () => {
      Gr.delete(t), !Gr.size && typeof Ma == "function" && (window.removeEventListener("resize", Ma), Ma = void 0);
    };
  }
  function ey(t, e) {
    return typeof t == "function" ? j5(t) : N5(t, e);
  }
  function _5(t) {
    return im(t) && t.tagName === "svg";
  }
  const L5 = [
    ...NS,
    Ct,
    bi
  ], V5 = (t) => L5.find(OS(t)), ny = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }), Ra = () => ({
    x: ny(),
    y: ny()
  }), iy = () => ({
    min: 0,
    max: 0
  }), zt = () => ({
    x: iy(),
    y: iy()
  }), U5 = /* @__PURE__ */ new WeakMap();
  function mu(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function";
  }
  function Ao(t) {
    return typeof t == "string" || Array.isArray(t);
  }
  const am = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ], sm = [
    "initial",
    ...am
  ];
  function pu(t) {
    return mu(t.animate) || sm.some((e) => Ao(t[e]));
  }
  function HS(t) {
    return !!(pu(t) || t.variants);
  }
  function B5(t, e, n) {
    for (const i in e) {
      const a = e[i], s = n[i];
      if (Ft(a)) t.addValue(i, a);
      else if (Ft(s)) t.addValue(i, es(a, {
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
  const sd = {
    current: null
  }, kS = {
    current: false
  }, P5 = typeof window < "u";
  function H5() {
    if (kS.current = true, !!P5) if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => sd.current = t.matches;
      t.addEventListener("change", e), e();
    } else sd.current = false;
  }
  const ay = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ];
  let zl = {};
  function GS(t) {
    zl = t;
  }
  function k5() {
    return zl;
  }
  class G5 {
    scrapeMotionValuesFromProps(e, n, i) {
      return {};
    }
    constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: a, skipAnimations: s, blockInitialAnimation: o, visualState: r }, l = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.shouldSkipAnimations = false, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Zh, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = false, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
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
      } : {}, this.renderState = c, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = a, this.skipAnimationsConfig = s, this.options = l, this.blockInitialAnimation = !!o, this.isControllingVariants = pu(n), this.isVariantNode = HS(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
      const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
      for (const d in h) {
        const y = h[d];
        u[d] !== void 0 && Ft(y) && y.set(u[d]);
      }
    }
    mount(e) {
      var _a5, _b3;
      if (this.hasBeenMounted) for (const n in this.initialValues) (_a5 = this.values.get(n)) == null ? void 0 : _a5.jump(this.initialValues[n]), this.latestValues[n] = this.initialValues[n];
      this.current = e, U5.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = false : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = true : (kS.current || H5(), this.shouldReduceMotion = sd.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? false, (_b3 = this.parent) == null ? void 0 : _b3.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = true;
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
      if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), n.accelerate && g5.has(e) && this.current instanceof HTMLElement) {
        const { factory: o, keyframes: r, times: l, ease: u, duration: c } = n.accelerate, f = new SS({
          element: this.current,
          name: e,
          keyframes: r,
          times: l,
          ease: u,
          duration: je(c)
        }), h = o(f);
        this.valueSubscriptions.set(e, () => {
          h(), f.cancel();
        });
        return;
      }
      const i = gs.has(e);
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
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : zt();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, n) {
      this.latestValues[e] = n;
    }
    update(e, n) {
      (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
      for (let i = 0; i < ay.length; i++) {
        const a = ay[i];
        this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
        const s = "on" + a, o = e[s];
        o && (this.propEventSubscriptions[a] = this.on(a, o));
      }
      this.prevMotionValues = B5(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
      return i != null && (typeof i == "string" && (Yx(i) || Fx(i)) ? i = parseFloat(i) : !V5(i) && bi.test(n) && (i = jS(e, n)), this.setBaseTarget(e, Ft(i) ? i.get() : i)), Ft(i) ? i.get() : i;
    }
    setBaseTarget(e, n) {
      this.baseTarget[e] = n;
    }
    getBaseTarget(e) {
      var _a5;
      const { initial: n } = this.props;
      let i;
      if (typeof n == "string" || typeof n == "object") {
        const s = Ih(this.props, n, (_a5 = this.presenceContext) == null ? void 0 : _a5.custom);
        s && (i = s[e]);
      }
      if (n && i !== void 0) return i;
      const a = this.getBaseTargetFromProps(this.props, e);
      return a !== void 0 && !Ft(a) ? a : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
    }
    on(e, n) {
      return this.events[e] || (this.events[e] = new Bh()), this.events[e].add(n);
    }
    notify(e, ...n) {
      this.events[e] && this.events[e].notify(...n);
    }
    scheduleRenderMicrotask() {
      em.render(this.render);
    }
  }
  class YS extends G5 {
    constructor() {
      super(...arguments), this.KeyframeResolver = p5;
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
      Ft(e) && (this.childSubscription = e.on("change", (n) => {
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
  function qS({ top: t, left: e, right: n, bottom: i }) {
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
  function Y5({ x: t, y: e }) {
    return {
      top: e.min,
      right: t.max,
      bottom: e.max,
      left: t.min
    };
  }
  function q5(t, e) {
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
  function bc(t) {
    return t === void 0 || t === 1;
  }
  function od({ scale: t, scaleX: e, scaleY: n }) {
    return !bc(t) || !bc(e) || !bc(n);
  }
  function _i(t) {
    return od(t) || FS(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
  }
  function FS(t) {
    return sy(t.x) || sy(t.y);
  }
  function sy(t) {
    return t && t !== "0%";
  }
  function jl(t, e, n) {
    const i = t - n, a = e * i;
    return n + a;
  }
  function oy(t, e, n, i, a) {
    return a !== void 0 && (t = jl(t, a, i)), jl(t, n, i) + e;
  }
  function rd(t, e = 0, n = 1, i, a) {
    t.min = oy(t.min, e, n, i, a), t.max = oy(t.max, e, n, i, a);
  }
  function XS(t, { x: e, y: n }) {
    rd(t.x, e.translate, e.scale, e.originPoint), rd(t.y, n.translate, n.scale, n.originPoint);
  }
  const ry = 0.999999999999, ly = 1.0000000000001;
  function F5(t, e, n, i = false) {
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
      }), o && (e.x *= o.x.scale, e.y *= o.y.scale, XS(t, o)), i && _i(s.latestValues) && Oa(t, s.latestValues));
    }
    e.x < ly && e.x > ry && (e.x = 1), e.y < ly && e.y > ry && (e.y = 1);
  }
  function Da(t, e) {
    t.min = t.min + e, t.max = t.max + e;
  }
  function uy(t, e, n, i, a = 0.5) {
    const s = xt(t.min, t.max, a);
    rd(t, e, n, s, i);
  }
  function Oa(t, e) {
    uy(t.x, e.x, e.scaleX, e.scale, e.originX), uy(t.y, e.y, e.scaleY, e.scale, e.originY);
  }
  function QS(t, e) {
    return qS(q5(t.getBoundingClientRect(), e));
  }
  function X5(t, e, n) {
    const i = QS(t, n), { scroll: a } = e;
    return a && (Da(i.x, a.offset.x), Da(i.y, a.offset.y)), i;
  }
  const Q5 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, K5 = ps.length;
  function Z5(t, e, n) {
    let i = "", a = true;
    for (let s = 0; s < K5; s++) {
      const o = ps[s], r = t[o];
      if (r === void 0) continue;
      let l = true;
      if (typeof r == "number") l = r === (o.startsWith("scale") ? 1 : 0);
      else {
        const u = parseFloat(r);
        l = o.startsWith("scale") ? u === 1 : u === 0;
      }
      if (!l || n) {
        const u = LS(r, tm[o]);
        if (!l) {
          a = false;
          const c = Q5[o] || o;
          i += `${c}(${u}) `;
        }
        n && (e[o] = u);
      }
    }
    return i = i.trim(), n ? i = n(e, a ? "" : i) : a && (i = "none"), i;
  }
  function om(t, e, n) {
    const { style: i, vars: a, transformOrigin: s } = t;
    let o = false, r = false;
    for (const l in e) {
      const u = e[l];
      if (gs.has(l)) {
        o = true;
        continue;
      } else if (sS(l)) {
        a[l] = u;
        continue;
      } else {
        const c = LS(u, tm[l]);
        l.startsWith("origin") ? (r = true, s[l] = c) : i[l] = c;
      }
    }
    if (e.transform || (o || n ? i.transform = Z5(e, t.transform, n) : i.transform && (i.transform = "none")), r) {
      const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
      i.transformOrigin = `${l} ${u} ${c}`;
    }
  }
  function KS(t, { style: e, vars: n }, i, a) {
    const s = t.style;
    let o;
    for (o in e) s[o] = e[o];
    a == null ? void 0 : a.applyProjectionStyles(s, i);
    for (o in n) s.setProperty(o, n[o]);
  }
  function cy(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
  }
  const Rs = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string") if (U.test(t)) t = parseFloat(t);
      else return t;
      const n = cy(t, e.target.x), i = cy(t, e.target.y);
      return `${n}% ${i}%`;
    }
  }, $5 = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const i = t, a = bi.parse(t);
      if (a.length > 5) return i;
      const s = bi.createTransformer(t), o = typeof a[0] != "number" ? 1 : 0, r = n.x.scale * e.x, l = n.y.scale * e.y;
      a[0 + o] /= r, a[1 + o] /= l;
      const u = xt(r, l, 0.5);
      return typeof a[2 + o] == "number" && (a[2 + o] /= u), typeof a[3 + o] == "number" && (a[3 + o] /= u), s(a);
    }
  }, ld = {
    borderRadius: {
      ...Rs,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    },
    borderTopLeftRadius: Rs,
    borderTopRightRadius: Rs,
    borderBottomLeftRadius: Rs,
    borderBottomRightRadius: Rs,
    boxShadow: $5
  };
  function ZS(t, { layout: e, layoutId: n }) {
    return gs.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!ld[t] || t === "opacity");
  }
  function rm(t, e, n) {
    var _a5;
    const i = t.style, a = e == null ? void 0 : e.style, s = {};
    if (!i) return s;
    for (const o in i) (Ft(i[o]) || a && Ft(a[o]) || ZS(o, t) || ((_a5 = n == null ? void 0 : n.getValue(o)) == null ? void 0 : _a5.liveStyle) !== void 0) && (s[o] = i[o]);
    return s;
  }
  function J5(t) {
    return window.getComputedStyle(t);
  }
  class I5 extends YS {
    constructor() {
      super(...arguments), this.type = "html", this.renderInstance = KS;
    }
    readValueFromInstance(e, n) {
      var _a5;
      if (gs.has(n)) return ((_a5 = this.projection) == null ? void 0 : _a5.isProjecting) ? Kf(n) : gN(e, n);
      {
        const i = J5(e), a = (sS(n) ? i.getPropertyValue(n) : i[n]) || 0;
        return typeof a == "string" ? a.trim() : a;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: n }) {
      return QS(e, n);
    }
    build(e, n, i) {
      om(e, n, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, n, i) {
      return rm(e, n, i);
    }
  }
  const W5 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  }, t3 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function e3(t, e, n = 1, i = 0, a = true) {
    t.pathLength = 1;
    const s = a ? W5 : t3;
    t[s.offset] = `${-i}`, t[s.array] = `${e} ${n}`;
  }
  const n3 = [
    "offsetDistance",
    "offsetPath",
    "offsetRotate",
    "offsetAnchor"
  ];
  function $S(t, { attrX: e, attrY: n, attrScale: i, pathLength: a, pathSpacing: s = 1, pathOffset: o = 0, ...r }, l, u, c) {
    if (om(t, r, u), l) {
      t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
      return;
    }
    t.attrs = t.style, t.style = {};
    const { attrs: f, style: h } = t;
    f.transform && (h.transform = f.transform, delete f.transform), (h.transform || f.transformOrigin) && (h.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), h.transform && (h.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete f.transformBox);
    for (const d of n3) f[d] !== void 0 && (h[d] = f[d], delete f[d]);
    e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), i !== void 0 && (f.scale = i), a !== void 0 && e3(f, a, s, o, false);
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
  ]), IS = (t) => typeof t == "string" && t.toLowerCase() === "svg";
  function i3(t, e, n, i) {
    KS(t, e, void 0, i);
    for (const a in e.attrs) t.setAttribute(JS.has(a) ? a : Wh(a), e.attrs[a]);
  }
  function WS(t, e, n) {
    const i = rm(t, e, n);
    for (const a in t) if (Ft(t[a]) || Ft(e[a])) {
      const s = ps.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
      i[s] = t[a];
    }
    return i;
  }
  class a3 extends YS {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = zt;
    }
    getBaseTargetFromProps(e, n) {
      return e[n];
    }
    readValueFromInstance(e, n) {
      if (gs.has(n)) {
        const i = zS(n);
        return i && i.default || 0;
      }
      return n = JS.has(n) ? n : Wh(n), e.getAttribute(n);
    }
    scrapeMotionValuesFromProps(e, n, i) {
      return WS(e, n, i);
    }
    build(e, n, i) {
      $S(e, n, this.isSVGTag, i.transformTemplate, i.style);
    }
    renderInstance(e, n, i, a) {
      i3(e, n, i, a);
    }
    mount(e) {
      this.isSVGTag = IS(e.tagName), super.mount(e);
    }
  }
  const s3 = sm.length;
  function tw(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
      const n = t.parent ? tw(t.parent) || {} : {};
      return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
    }
    const e = {};
    for (let n = 0; n < s3; n++) {
      const i = sm[n], a = t.props[i];
      (Ao(a) || a === false) && (e[i] = a);
    }
    return e;
  }
  function ew(t, e) {
    if (!Array.isArray(e)) return false;
    const n = e.length;
    if (n !== t.length) return false;
    for (let i = 0; i < n; i++) if (e[i] !== t[i]) return false;
    return true;
  }
  const o3 = [
    ...am
  ].reverse(), r3 = am.length;
  function l3(t) {
    return (e) => Promise.all(e.map(({ animation: n, options: i }) => s5(t, n, i)));
  }
  function u3(t) {
    let e = l3(t), n = fy(), i = true;
    const a = (l) => (u, c) => {
      var _a5;
      const f = Ha(t, c, l === "exit" ? (_a5 = t.presenceContext) == null ? void 0 : _a5.custom : void 0);
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
    function o(l) {
      const { props: u } = t, c = tw(t.parent) || {}, f = [], h = /* @__PURE__ */ new Set();
      let d = {}, y = 1 / 0;
      for (let x = 0; x < r3; x++) {
        const p = o3[x], m = n[p], g = u[p] !== void 0 ? u[p] : c[p], S = Ao(g), T = p === l ? m.isActive : null;
        T === false && (y = x);
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
        const E = c3(m.prevProp, g);
        let C = E || p === l && m.isActive && !A && S || x > y && S, D = false;
        const j = Array.isArray(g) ? g : [
          g
        ];
        let B = j.reduce(a(p), {});
        T === false && (B = {});
        const { prevResolvedValues: V = {} } = m, Q = {
          ...V,
          ...B
        }, L = (N) => {
          C = true, h.has(N) && (D = true, h.delete(N)), m.needsAnimating[N] = true;
          const O = t.getValue(N);
          O && (O.liveStyle = false);
        };
        for (const N in Q) {
          const O = B[N], z = V[N];
          if (d.hasOwnProperty(N)) continue;
          let P = false;
          td(O) && td(z) ? P = !ew(O, z) : P = O !== z, P ? O != null ? L(N) : h.add(N) : O !== void 0 && h.has(N) ? L(N) : m.protectedKeys[N] = true;
        }
        m.prevProp = g, m.prevResolvedValues = B, m.isActive && (d = {
          ...d,
          ...B
        }), i && t.blockInitialAnimation && (C = false);
        const F = A && E;
        C && (!F || D) && f.push(...j.map((N) => {
          const O = {
            type: p
          };
          if (typeof N == "string" && i && !F && t.manuallyAnimateOnMount && t.parent) {
            const { parent: z } = t, P = Ha(z, N);
            if (z.enteringChildren && P) {
              const { delayChildren: ft } = P.transition || {};
              O.delay = TS(z.enteringChildren, t, ft);
            }
          }
          return {
            animation: N,
            options: O
          };
        }));
      }
      if (h.size) {
        const x = {};
        if (typeof u.initial != "boolean") {
          const p = Ha(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
          p && p.transition && (x.transition = p.transition);
        }
        h.forEach((p) => {
          const m = t.getBaseTarget(p), g = t.getValue(p);
          g && (g.liveStyle = true), x[p] = m ?? null;
        }), f.push({
          animation: x
        });
      }
      let v = !!f.length;
      return i && (u.initial === false || u.initial === u.animate) && !t.manuallyAnimateOnMount && (v = false), i = false, v ? e(f) : Promise.resolve();
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
        n = fy();
      }
    };
  }
  function c3(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !ew(e, t) : false;
  }
  function Di(t = false) {
    return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function fy() {
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
  function dy(t, e) {
    t.min = e.min, t.max = e.max;
  }
  function He(t, e) {
    dy(t.x, e.x), dy(t.y, e.y);
  }
  function hy(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
  }
  const nw = 1e-4, f3 = 1 - nw, d3 = 1 + nw, iw = 0.01, h3 = 0 - iw, m3 = 0 + iw;
  function $t(t) {
    return t.max - t.min;
  }
  function p3(t, e, n) {
    return Math.abs(t - e) <= n;
  }
  function my(t, e, n, i = 0.5) {
    t.origin = i, t.originPoint = xt(e.min, e.max, t.origin), t.scale = $t(n) / $t(e), t.translate = xt(n.min, n.max, t.origin) - t.originPoint, (t.scale >= f3 && t.scale <= d3 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= h3 && t.translate <= m3 || isNaN(t.translate)) && (t.translate = 0);
  }
  function Ws(t, e, n, i) {
    my(t.x, e.x, n.x, i ? i.originX : void 0), my(t.y, e.y, n.y, i ? i.originY : void 0);
  }
  function py(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + $t(e);
  }
  function g3(t, e, n) {
    py(t.x, e.x, n.x), py(t.y, e.y, n.y);
  }
  function gy(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + $t(e);
  }
  function _l(t, e, n) {
    gy(t.x, e.x, n.x), gy(t.y, e.y, n.y);
  }
  function yy(t, e, n, i, a) {
    return t -= e, t = jl(t, 1 / n, i), a !== void 0 && (t = jl(t, 1 / a, i)), t;
  }
  function y3(t, e = 0, n = 1, i = 0.5, a, s = t, o = t) {
    if (en.test(e) && (e = parseFloat(e), e = xt(o.min, o.max, e / 100) - o.min), typeof e != "number") return;
    let r = xt(s.min, s.max, i);
    t === s && (r -= e), t.min = yy(t.min, e, n, r, a), t.max = yy(t.max, e, n, r, a);
  }
  function vy(t, e, [n, i, a], s, o) {
    y3(t, e[n], e[i], e[a], e.scale, s, o);
  }
  const v3 = [
    "x",
    "scaleX",
    "originX"
  ], b3 = [
    "y",
    "scaleY",
    "originY"
  ];
  function by(t, e, n, i) {
    vy(t.x, e, v3, n ? n.x : void 0, i ? i.x : void 0), vy(t.y, e, b3, n ? n.y : void 0, i ? i.y : void 0);
  }
  function xy(t) {
    return t.translate === 0 && t.scale === 1;
  }
  function aw(t) {
    return xy(t.x) && xy(t.y);
  }
  function Sy(t, e) {
    return t.min === e.min && t.max === e.max;
  }
  function x3(t, e) {
    return Sy(t.x, e.x) && Sy(t.y, e.y);
  }
  function wy(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
  }
  function sw(t, e) {
    return wy(t.x, e.x) && wy(t.y, e.y);
  }
  function Ty(t) {
    return $t(t.x) / $t(t.y);
  }
  function Ey(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
  }
  function Ke(t) {
    return [
      t("x"),
      t("y")
    ];
  }
  function S3(t, e, n) {
    let i = "";
    const a = t.x.translate / e.x, s = t.y.translate / e.y, o = (n == null ? void 0 : n.z) || 0;
    if ((a || s || o) && (i = `translate3d(${a}px, ${s}px, ${o}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
      const { transformPerspective: u, rotate: c, rotateX: f, rotateY: h, skewX: d, skewY: y } = n;
      u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), f && (i += `rotateX(${f}deg) `), h && (i += `rotateY(${h}deg) `), d && (i += `skewX(${d}deg) `), y && (i += `skewY(${y}deg) `);
    }
    const r = t.x.scale * e.x, l = t.y.scale * e.y;
    return (r !== 1 || l !== 1) && (i += `scale(${r}, ${l})`), i || "none";
  }
  const ow = [
    "TopLeft",
    "TopRight",
    "BottomLeft",
    "BottomRight"
  ], w3 = ow.length, Ay = (t) => typeof t == "string" ? parseFloat(t) : t, Cy = (t) => typeof t == "number" || U.test(t);
  function T3(t, e, n, i, a, s) {
    a ? (t.opacity = xt(0, n.opacity ?? 1, E3(i)), t.opacityExit = xt(e.opacity ?? 1, 0, A3(i))) : s && (t.opacity = xt(e.opacity ?? 1, n.opacity ?? 1, i));
    for (let o = 0; o < w3; o++) {
      const r = `border${ow[o]}Radius`;
      let l = My(e, r), u = My(n, r);
      if (l === void 0 && u === void 0) continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || Cy(l) === Cy(u) ? (t[r] = Math.max(xt(Ay(l), Ay(u), i), 0), (en.test(u) || en.test(l)) && (t[r] += "%")) : t[r] = u;
    }
    (e.rotate || n.rotate) && (t.rotate = xt(e.rotate || 0, n.rotate || 0, i));
  }
  function My(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius;
  }
  const E3 = rw(0, 0.5, Wx), A3 = rw(0.5, 0.95, ze);
  function rw(t, e, n) {
    return (i) => i < t ? 0 : i > e ? 1 : n(wo(t, e, i));
  }
  function C3(t, e, n) {
    const i = Ft(t) ? t : es(t);
    return i.start(Jh("", i, e, n)), i.animation;
  }
  function Co(t, e, n, i = {
    passive: true
  }) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
  }
  const M3 = (t, e) => t.depth - e.depth;
  class R3 {
    constructor() {
      this.children = [], this.isDirty = false;
    }
    add(e) {
      Vh(this.children, e), this.isDirty = true;
    }
    remove(e) {
      Rl(this.children, e), this.isDirty = true;
    }
    forEach(e) {
      this.isDirty && this.children.sort(M3), this.isDirty = false, this.children.forEach(e);
    }
  }
  function D3(t, e) {
    const n = Zt.now(), i = ({ timestamp: a }) => {
      const s = a - n;
      s >= e && (vi(i), t(s - e));
    };
    return ct.setup(i, true), () => vi(i);
  }
  function Yr(t) {
    return Ft(t) ? t.get() : t;
  }
  class O3 {
    constructor() {
      this.members = [];
    }
    add(e) {
      Vh(this.members, e);
      for (let n = this.members.length - 1; n >= 0; n--) {
        const i = this.members[n];
        if (i === e || i === this.lead || i === this.prevLead) continue;
        const a = i.instance;
        a && a.isConnected === false && i.isPresent !== false && !i.snapshot && Rl(this.members, i);
      }
      e.scheduleRender();
    }
    remove(e) {
      if (Rl(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
  const qr = {
    hasAnimatedSinceResize: true,
    hasEverUpdated: false
  }, xc = [
    "",
    "X",
    "Y",
    "Z"
  ], N3 = 1e3;
  let z3 = 0;
  function Sc(t, e, n, i) {
    const { latestValues: a } = e;
    a[t] && (n[t] = a[t], e.setStaticValue(t, 0), i && (i[t] = 0));
  }
  function lw(t) {
    if (t.hasCheckedOptimisedAppear = true, t.root === t) return;
    const { visualElement: e } = t.options;
    if (!e) return;
    const n = RS(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const { layout: a, layoutId: s } = t.options;
      window.MotionCancelOptimisedAnimation(n, "transform", ct, !(a || s));
    }
    const { parent: i } = t;
    i && !i.hasCheckedOptimisedAppear && lw(i);
  }
  function uw({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: a }) {
    return class {
      constructor(o = {}, r = e == null ? void 0 : e()) {
        this.id = z3++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = {
          x: 1,
          y: 1
        }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.layoutVersion = 0, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = false, this.nodes.forEach(L3), this.nodes.forEach(P3), this.nodes.forEach(H3), this.nodes.forEach(V3);
        }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = r ? r.root || r : this, this.path = r ? [
          ...r.path,
          r
        ] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
        for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = true;
        this.root === this && (this.nodes = new R3());
      }
      addEventListener(o, r) {
        return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Bh()), this.eventHandlers.get(o).add(r);
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
        this.isSVG = im(o) && !_5(o), this.instance = o;
        const { layoutId: r, layout: l, visualElement: u } = this.options;
        if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || r) && (this.isLayoutDirty = true), t) {
          let c, f = 0;
          const h = () => this.root.updateBlockedByResize = false;
          ct.read(() => {
            f = window.innerWidth;
          }), t(o, () => {
            const d = window.innerWidth;
            d !== f && (f = d, this.root.updateBlockedByResize = true, c && c(), c = D3(h, 250), qr.hasAnimatedSinceResize && (qr.hasAnimatedSinceResize = false, this.nodes.forEach(Oy)));
          });
        }
        r && this.root.registerSharedNode(r, this), this.options.animate !== false && u && (r || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: f, hasRelativeLayoutChanged: h, layout: d }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const y = this.options.transition || u.getDefaultTransition() || F3, { onLayoutAnimationStart: v, onLayoutAnimationComplete: x } = u.getProps(), p = !this.targetLayout || !sw(this.targetLayout, d), m = !f && h;
          if (this.options.layoutRoot || this.resumeFrom || m || f && (p || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
            const g = {
              ...$h(y, "layout"),
              onPlay: v,
              onComplete: x
            };
            (u.shouldReduceMotion || this.options.layoutRoot) && (g.delay = 0, g.type = false), this.startAnimation(g), this.setAnimationOrigin(c, m);
          } else f || Oy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = d;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        const o = this.getStack();
        o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), vi(this.updateProjection);
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
        this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(k3), this.animationId++);
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
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && lw(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
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
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ry);
          return;
        }
        if (this.animationId <= this.animationCommitId) {
          this.nodes.forEach(Dy);
          return;
        }
        this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(B3), this.nodes.forEach(j3), this.nodes.forEach(_3)) : this.nodes.forEach(Dy), this.clearAllSnapshots();
        const r = Zt.now();
        Pt.delta = an(0, 1e3 / 60, r - Pt.timestamp), Pt.timestamp = r, Pt.isProcessing = true, dc.update.process(Pt), dc.preRender.process(Pt), dc.render.process(Pt), Pt.isProcessing = false;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = true, em.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(U3), this.sharedNodes.forEach(G3);
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
        this.layout = this.measure(false), this.layoutVersion++, this.layoutCorrected = zt(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
        const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, r = this.projectionDelta && !aw(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
        o && this.instance && (r || _i(this.latestValues) || c) && (a(this.instance, u), this.shouldResetTransform = false, this.scheduleRender());
      }
      measure(o = true) {
        const r = this.measurePageBox();
        let l = this.removeElementScroll(r);
        return o && (l = this.removeTransform(l)), X3(l), {
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
        if (!o) return zt();
        const r = o.measureViewportBox();
        if (!(((_a5 = this.scroll) == null ? void 0 : _a5.wasRoot) || this.path.some(Q3))) {
          const { scroll: u } = this.root;
          u && (Da(r.x, u.offset.x), Da(r.y, u.offset.y));
        }
        return r;
      }
      removeElementScroll(o) {
        var _a5;
        const r = zt();
        if (He(r, o), (_a5 = this.scroll) == null ? void 0 : _a5.wasRoot) return r;
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l], { scroll: c, options: f } = u;
          u !== this.root && c && f.layoutScroll && (c.wasRoot && He(r, o), Da(r.x, c.offset.x), Da(r.y, c.offset.y));
        }
        return r;
      }
      applyTransform(o, r = false) {
        const l = zt();
        He(l, o);
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
        const r = zt();
        He(r, o);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !_i(u.latestValues)) continue;
          od(u.latestValues) && u.updateSnapshot();
          const c = zt(), f = u.measurePageBox();
          He(c, f), by(r, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
        }
        return _i(this.latestValues) && by(r, this.latestValues), r;
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
        h && this.linkedParentVersion !== h.layoutVersion && !h.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (h && h.layout ? this.createRelativeTarget(h, this.layout.layoutBox, h.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = zt(), this.targetWithTransforms = zt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), g3(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : He(this.target, this.layout.layoutBox), XS(this.target, this.targetDelta)) : He(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? this.createRelativeTarget(h, this.target, h.target) : this.relativeParent = this.relativeTarget = void 0));
      }
      getClosestProjectingParent() {
        if (!(!this.parent || od(this.parent.latestValues) || FS(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      createRelativeTarget(o, r, l) {
        this.relativeParent = o, this.linkedParentVersion = o.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = zt(), this.relativeTargetOrigin = zt(), _l(this.relativeTargetOrigin, r, l), He(this.relativeTarget, this.relativeTargetOrigin);
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
        He(this.layoutCorrected, this.layout.layoutBox);
        const f = this.treeScale.x, h = this.treeScale.y;
        F5(this.layoutCorrected, this.treeScale, this.path, r), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = zt());
        const { target: d } = o;
        if (!d) {
          this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (hy(this.prevProjectionDelta.x, this.projectionDelta.x), hy(this.prevProjectionDelta.y, this.projectionDelta.y)), Ws(this.projectionDelta, this.layoutCorrected, d, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !Ey(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ey(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", d));
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
        const h = zt(), d = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, v = d !== y, x = this.getStack(), p = !x || x.members.length <= 1, m = !!(v && !p && this.options.crossfade === true && !this.path.some(q3));
        this.animationProgress = 0;
        let g;
        this.mixTargetDelta = (S) => {
          const T = S / 1e3;
          Ny(f.x, o.x, T), Ny(f.y, o.y, T), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (_l(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Y3(this.relativeTarget, this.relativeTargetOrigin, h, T), g && x3(this.relativeTarget, g) && (this.isProjectionDirty = false), g || (g = zt()), He(g, this.relativeTarget)), v && (this.animationValues = c, T3(c, u, this.latestValues, T, m, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(o) {
        var _a5, _b3, _c3;
        this.notifyListeners("animationStart"), (_a5 = this.currentAnimation) == null ? void 0 : _a5.stop(), (_c3 = (_b3 = this.resumingFrom) == null ? void 0 : _b3.currentAnimation) == null ? void 0 : _c3.stop(), this.pendingAnimation && (vi(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ct.update(() => {
          qr.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = es(0)), this.currentAnimation = C3(this.motionValue, [
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
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(N3), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const o = this.getLead();
        let { targetWithTransforms: r, target: l, layout: u, latestValues: c } = o;
        if (!(!r || !l || !u)) {
          if (this !== o && this.layout && u && cw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
            l = this.target || zt();
            const f = $t(this.layout.layoutBox.x);
            l.x.min = o.target.x.min, l.x.max = l.x.min + f;
            const h = $t(this.layout.layoutBox.y);
            l.y.min = o.target.y.min, l.y.max = l.y.min + h;
          }
          He(r, l), Oa(r, c), Ws(this.projectionDeltaWithTransform, this.layoutCorrected, r, c);
        }
      }
      registerSharedNode(o, r) {
        this.sharedNodes.has(o) || this.sharedNodes.set(o, new O3()), this.sharedNodes.get(o).add(r);
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
        l.z && Sc("z", o, u, this.animationValues);
        for (let c = 0; c < xc.length; c++) Sc(`rotate${xc[c]}`, o, u, this.animationValues), Sc(`skew${xc[c]}`, o, u, this.animationValues);
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
          this.needsReset = false, o.visibility = "", o.opacity = "", o.pointerEvents = Yr(r == null ? void 0 : r.pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
          return;
        }
        const u = this.getLead();
        if (!this.projectionDelta || !this.layout || !u.target) {
          this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = Yr(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !_i(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = false);
          return;
        }
        o.visibility = "";
        const c = u.animationValues || u.latestValues;
        this.applyTransformsToTarget();
        let f = S3(this.projectionDeltaWithTransform, this.treeScale, c);
        l && (f = l(c, f)), o.transform = f;
        const { x: h, y: d } = this.projectionDelta;
        o.transformOrigin = `${h.origin * 100}% ${d.origin * 100}% 0`, u.animationValues ? o.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
        for (const y in ld) {
          if (c[y] === void 0) continue;
          const { correct: v, applyTo: x, isCSSVariable: p } = ld[y], m = f === "none" ? c[y] : v(c[y], u);
          if (x) {
            const g = x.length;
            for (let S = 0; S < g; S++) o[x[S]] = m;
          } else p ? this.options.visualElement.renderState.vars[y] = m : o[y] = m;
        }
        this.options.layoutId && (o.pointerEvents = u === this ? Yr(r == null ? void 0 : r.pointerEvents) || "" : "none");
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((o) => {
          var _a5;
          return (_a5 = o.currentAnimation) == null ? void 0 : _a5.stop();
        }), this.root.nodes.forEach(Ry), this.root.sharedNodes.clear();
      }
    };
  }
  function j3(t) {
    t.updateLayout();
  }
  function _3(t) {
    var _a5;
    const e = ((_a5 = t.resumeFrom) == null ? void 0 : _a5.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
      const { layoutBox: n, measuredBox: i } = t.layout, { animationType: a } = t.options, s = e.source !== t.layout.source;
      a === "size" ? Ke((c) => {
        const f = s ? e.measuredBox[c] : e.layoutBox[c], h = $t(f);
        f.min = n[c].min, f.max = f.min + h;
      }) : cw(a, e.layoutBox, n) && Ke((c) => {
        const f = s ? e.measuredBox[c] : e.layoutBox[c], h = $t(n[c]);
        f.max = f.min + h, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = true, t.relativeTarget[c].max = t.relativeTarget[c].min + h);
      });
      const o = Ra();
      Ws(o, n, e.layoutBox);
      const r = Ra();
      s ? Ws(r, t.applyTransform(i, true), e.measuredBox) : Ws(r, n, e.layoutBox);
      const l = !aw(o);
      let u = false;
      if (!t.resumeFrom) {
        const c = t.getClosestProjectingParent();
        if (c && !c.resumeFrom) {
          const { snapshot: f, layout: h } = c;
          if (f && h) {
            const d = zt();
            _l(d, e.layoutBox, f.layoutBox);
            const y = zt();
            _l(y, n, h.layoutBox), sw(d, y) || (u = true), c.options.layoutRoot && (t.relativeTarget = y, t.relativeTargetOrigin = d, t.relativeParent = c);
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
  function L3(t) {
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
  }
  function V3(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
  }
  function U3(t) {
    t.clearSnapshot();
  }
  function Ry(t) {
    t.clearMeasurements();
  }
  function Dy(t) {
    t.isLayoutDirty = false;
  }
  function B3(t) {
    const { visualElement: e } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
  }
  function Oy(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = true;
  }
  function P3(t) {
    t.resolveTargetDelta();
  }
  function H3(t) {
    t.calcProjection();
  }
  function k3(t) {
    t.resetSkewAndRotation();
  }
  function G3(t) {
    t.removeLeadSnapshot();
  }
  function Ny(t, e, n) {
    t.translate = xt(e.translate, 0, n), t.scale = xt(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
  }
  function zy(t, e, n, i) {
    t.min = xt(e.min, n.min, i), t.max = xt(e.max, n.max, i);
  }
  function Y3(t, e, n, i) {
    zy(t.x, e.x, n.x, i), zy(t.y, e.y, n.y, i);
  }
  function q3(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0;
  }
  const F3 = {
    duration: 0.45,
    ease: [
      0.4,
      0,
      0.1,
      1
    ]
  }, jy = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), _y = jy("applewebkit/") && !jy("chrome/") ? Math.round : ze;
  function Ly(t) {
    t.min = _y(t.min), t.max = _y(t.max);
  }
  function X3(t) {
    Ly(t.x), Ly(t.y);
  }
  function cw(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !p3(Ty(e), Ty(n), 0.2);
  }
  function Q3(t) {
    var _a5;
    return t !== t.root && ((_a5 = t.scroll) == null ? void 0 : _a5.wasRoot);
  }
  const K3 = uw({
    attachResizeListener: (t, e) => Co(t, "resize", e),
    measureScroll: () => {
      var _a5, _b3;
      return {
        x: document.documentElement.scrollLeft || ((_a5 = document.body) == null ? void 0 : _a5.scrollLeft) || 0,
        y: document.documentElement.scrollTop || ((_b3 = document.body) == null ? void 0 : _b3.scrollTop) || 0
      };
    },
    checkIsScrollRoot: () => true
  }), wc = {
    current: void 0
  }, fw = uw({
    measureScroll: (t) => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!wc.current) {
        const t = new K3({});
        t.mount(window), t.setOptions({
          layoutScroll: true
        }), wc.current = t;
      }
      return wc.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
  }), lm = b.createContext({
    transformPagePoint: (t) => t,
    isStatic: false,
    reducedMotion: "never"
  });
  function Vy(t, e) {
    if (typeof t == "function") return t(e);
    t != null && (t.current = e);
  }
  function Z3(...t) {
    return (e) => {
      let n = false;
      const i = t.map((a) => {
        const s = Vy(a, e);
        return !n && typeof s == "function" && (n = true), s;
      });
      if (n) return () => {
        for (let a = 0; a < i.length; a++) {
          const s = i[a];
          typeof s == "function" ? s() : Vy(t[a], null);
        }
      };
    };
  }
  function $3(...t) {
    return b.useCallback(Z3(...t), t);
  }
  class J3 extends b.Component {
    getSnapshotBeforeUpdate(e) {
      const n = this.props.childRef.current;
      if (n && e.isPresent && !this.props.isPresent && this.props.pop !== false) {
        const i = n.offsetParent, a = ad(i) && i.offsetWidth || 0, s = ad(i) && i.offsetHeight || 0, o = this.props.sizeRef.current;
        o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = a - o.width - o.left, o.bottom = s - o.height - o.top;
      }
      return null;
    }
    componentDidUpdate() {
    }
    render() {
      return this.props.children;
    }
  }
  function I3({ children: t, isPresent: e, anchorX: n, anchorY: i, root: a, pop: s }) {
    var _a5;
    const o = b.useId(), r = b.useRef(null), l = b.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }), { nonce: u } = b.useContext(lm), c = ((_a5 = t.props) == null ? void 0 : _a5.ref) ?? (t == null ? void 0 : t.ref), f = $3(r, c);
    return b.useInsertionEffect(() => {
      const { width: h, height: d, top: y, left: v, right: x, bottom: p } = l.current;
      if (e || s === false || !r.current || !h || !d) return;
      const m = n === "left" ? `left: ${v}` : `right: ${x}`, g = i === "bottom" ? `bottom: ${p}` : `top: ${y}`;
      r.current.dataset.motionPopId = o;
      const S = document.createElement("style");
      u && (S.nonce = u);
      const T = a ?? document.head;
      return T.appendChild(S), S.sheet && S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${d}px !important;
            ${m}px !important;
            ${g}px !important;
          }
        `), () => {
        T.contains(S) && T.removeChild(S);
      };
    }, [
      e
    ]), w.jsx(J3, {
      isPresent: e,
      childRef: r,
      sizeRef: l,
      pop: s,
      children: s === false ? t : b.cloneElement(t, {
        ref: f
      })
    });
  }
  const W3 = ({ children: t, initial: e, isPresent: n, onExitComplete: i, custom: a, presenceAffectsLayout: s, mode: o, anchorX: r, anchorY: l, root: u }) => {
    const c = Lh(t4), f = b.useId();
    let h = true, d = b.useMemo(() => (h = false, {
      id: f,
      initial: e,
      isPresent: n,
      custom: a,
      onExitComplete: (y) => {
        c.set(y, true);
        for (const v of c.values()) if (!v) return;
        i && i();
      },
      register: (y) => (c.set(y, false), () => c.delete(y))
    }), [
      n,
      c,
      i
    ]);
    return s && h && (d = {
      ...d
    }), b.useMemo(() => {
      c.forEach((y, v) => c.set(v, false));
    }, [
      n
    ]), b.useEffect(() => {
      !n && !c.size && i && i();
    }, [
      n
    ]), t = w.jsx(I3, {
      pop: o === "popLayout",
      isPresent: n,
      anchorX: r,
      anchorY: l,
      root: u,
      children: t
    }), w.jsx(du.Provider, {
      value: d,
      children: t
    });
  };
  function t4() {
    return /* @__PURE__ */ new Map();
  }
  function dw(t = true) {
    const e = b.useContext(du);
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
    const o = b.useCallback(() => t && i && i(s), [
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
  const yr = (t) => t.key || "";
  function Uy(t) {
    const e = [];
    return b.Children.forEach(t, (n) => {
      b.isValidElement(n) && e.push(n);
    }), e;
  }
  const e4 = ({ children: t, custom: e, initial: n = true, onExitComplete: i, presenceAffectsLayout: a = true, mode: s = "sync", propagate: o = false, anchorX: r = "left", anchorY: l = "top", root: u }) => {
    const [c, f] = dw(o), h = b.useMemo(() => Uy(t), [
      t
    ]), d = o && !c ? [] : h.map(yr), y = b.useRef(true), v = b.useRef(h), x = Lh(() => /* @__PURE__ */ new Map()), p = b.useRef(/* @__PURE__ */ new Set()), [m, g] = b.useState(h), [S, T] = b.useState(h);
    Gx(() => {
      y.current = false, v.current = h;
      for (let C = 0; C < S.length; C++) {
        const D = yr(S[C]);
        d.includes(D) ? (x.delete(D), p.current.delete(D)) : x.get(D) !== true && x.set(D, false);
      }
    }, [
      S,
      d.length,
      d.join("-")
    ]);
    const A = [];
    if (h !== m) {
      let C = [
        ...h
      ];
      for (let D = 0; D < S.length; D++) {
        const j = S[D], B = yr(j);
        d.includes(B) || (C.splice(D, 0, j), A.push(j));
      }
      return s === "wait" && A.length && (C = A), T(Uy(C)), g(h), null;
    }
    const { forceRender: E } = b.useContext(_h);
    return w.jsx(w.Fragment, {
      children: S.map((C) => {
        const D = yr(C), j = o && !c ? false : h === S || d.includes(D), B = () => {
          if (p.current.has(D)) return;
          if (p.current.add(D), x.has(D)) x.set(D, true);
          else return;
          let V = true;
          x.forEach((Q) => {
            Q || (V = false);
          }), V && (E == null ? void 0 : E(), T(v.current), o && (f == null ? void 0 : f()), i && i());
        };
        return w.jsx(W3, {
          isPresent: j,
          initial: !y.current || n ? void 0 : false,
          custom: e,
          presenceAffectsLayout: a,
          mode: s,
          root: u,
          onExitComplete: j ? void 0 : B,
          anchorX: r,
          anchorY: l,
          children: C
        }, D);
      })
    });
  }, hw = b.createContext({
    strict: false
  }), By = {
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
  function n4() {
    if (Py) return;
    const t = {};
    for (const e in By) t[e] = {
      isEnabled: (n) => By[e].some((i) => !!n[i])
    };
    GS(t), Py = true;
  }
  function mw() {
    return n4(), k5();
  }
  function i4(t) {
    const e = mw();
    for (const n in t) e[n] = {
      ...e[n],
      ...t[n]
    };
    GS(e);
  }
  const a4 = /* @__PURE__ */ new Set([
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
  function Ll(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || a4.has(t);
  }
  let pw = (t) => !Ll(t);
  function s4(t) {
    typeof t == "function" && (pw = (e) => e.startsWith("on") ? !Ll(e) : t(e));
  }
  try {
    s4(require("@emotion/is-prop-valid").default);
  } catch {
  }
  function o4(t, e, n) {
    const i = {};
    for (const a in t) a === "values" && typeof t.values == "object" || (pw(a) || n === true && Ll(a) || !e && !Ll(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i;
  }
  const gu = b.createContext({});
  function r4(t, e) {
    if (pu(t)) {
      const { initial: n, animate: i } = t;
      return {
        initial: n === false || Ao(n) ? n : void 0,
        animate: Ao(i) ? i : void 0
      };
    }
    return t.inherit !== false ? e : {};
  }
  function l4(t) {
    const { initial: e, animate: n } = r4(t, b.useContext(gu));
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
  function gw(t, e, n) {
    for (const i in e) !Ft(e[i]) && !ZS(i, n) && (t[i] = e[i]);
  }
  function u4({ transformTemplate: t }, e) {
    return b.useMemo(() => {
      const n = um();
      return om(n, e, t), Object.assign({}, n.vars, n.style);
    }, [
      e
    ]);
  }
  function c4(t, e) {
    const n = t.style || {}, i = {};
    return gw(i, n, t), Object.assign(i, u4(t, e)), i;
  }
  function f4(t, e) {
    const n = {}, i = c4(t, e);
    return t.drag && t.dragListener !== false && (n.draggable = false, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
  }
  const yw = () => ({
    ...um(),
    attrs: {}
  });
  function d4(t, e, n, i) {
    const a = b.useMemo(() => {
      const s = yw();
      return $S(s, e, IS(i), t.transformTemplate, t.style), {
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
      gw(s, t.style, t), a.style = {
        ...s,
        ...a.style
      };
    }
    return a;
  }
  const h4 = [
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
    return typeof t != "string" || t.includes("-") ? false : !!(h4.indexOf(t) > -1 || /[A-Z]/u.test(t));
  }
  function m4(t, e, n, { latestValues: i }, a, s = false, o) {
    const l = (o ?? cm(t) ? d4 : f4)(e, i, a, t), u = o4(e, typeof t == "string", s), c = t !== b.Fragment ? {
      ...u,
      ...l,
      ref: n
    } : {}, { children: f } = e, h = b.useMemo(() => Ft(f) ? f.get() : f, [
      f
    ]);
    return b.createElement(t, {
      ...c,
      children: h
    });
  }
  function p4({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, a) {
    return {
      latestValues: g4(n, i, a, t),
      renderState: e()
    };
  }
  function g4(t, e, n, i) {
    const a = {}, s = i(t, {});
    for (const h in s) a[h] = Yr(s[h]);
    let { initial: o, animate: r } = t;
    const l = pu(t), u = HS(t);
    e && u && !l && t.inherit !== false && (o === void 0 && (o = e.initial), r === void 0 && (r = e.animate));
    let c = n ? n.initial === false : false;
    c = c || o === false;
    const f = c ? r : o;
    if (f && typeof f != "boolean" && !mu(f)) {
      const h = Array.isArray(f) ? f : [
        f
      ];
      for (let d = 0; d < h.length; d++) {
        const y = Ih(t, h[d]);
        if (y) {
          const { transitionEnd: v, transition: x, ...p } = y;
          for (const m in p) {
            let g = p[m];
            if (Array.isArray(g)) {
              const S = c ? g.length - 1 : 0;
              g = g[S];
            }
            g !== null && (a[m] = g);
          }
          for (const m in v) a[m] = v[m];
        }
      }
    }
    return a;
  }
  const vw = (t) => (e, n) => {
    const i = b.useContext(gu), a = b.useContext(du), s = () => p4(t, e, i, a);
    return n ? s() : Lh(s);
  }, y4 = vw({
    scrapeMotionValuesFromProps: rm,
    createRenderState: um
  }), v4 = vw({
    scrapeMotionValuesFromProps: WS,
    createRenderState: yw
  }), b4 = Symbol.for("motionComponentSymbol");
  function x4(t, e, n) {
    const i = b.useRef(n);
    b.useInsertionEffect(() => {
      i.current = n;
    });
    const a = b.useRef(null);
    return b.useCallback((s) => {
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
  const bw = b.createContext({});
  function ha(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
  }
  function S4(t, e, n, i, a, s) {
    var _a5, _b3;
    const { visualElement: o } = b.useContext(gu), r = b.useContext(hw), l = b.useContext(du), u = b.useContext(lm), c = u.reducedMotion, f = u.skipAnimations, h = b.useRef(null), d = b.useRef(false);
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
    const y = h.current, v = b.useContext(bw);
    y && !y.projection && a && (y.type === "html" || y.type === "svg") && w4(h.current, n, a, v);
    const x = b.useRef(false);
    b.useInsertionEffect(() => {
      y && x.current && y.update(n, l);
    });
    const p = n[MS], m = b.useRef(!!p && !((_a5 = window.MotionHandoffIsComplete) == null ? void 0 : _a5.call(window, p)) && ((_b3 = window.MotionHasOptimisedAnimation) == null ? void 0 : _b3.call(window, p)));
    return Gx(() => {
      d.current = true, y && (x.current = true, window.MotionIsMounted = true, y.updateFeatures(), y.scheduleRenderMicrotask(), m.current && y.animationState && y.animationState.animateChanges());
    }), b.useEffect(() => {
      y && (!m.current && y.animationState && y.animationState.animateChanges(), m.current && (queueMicrotask(() => {
        var _a6;
        (_a6 = window.MotionHandoffMarkAsComplete) == null ? void 0 : _a6.call(window, p);
      }), m.current = false), y.enteringChildren = void 0);
    }), y;
  }
  function w4(t, e, n, i) {
    const { layoutId: a, layout: s, drag: o, dragConstraints: r, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : xw(t.parent)), t.projection.setOptions({
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
  function xw(t) {
    if (t) return t.options.allowProjection !== false ? t.projection : xw(t.parent);
  }
  function Tc(t, { forwardMotionProps: e = false, type: n } = {}, i, a) {
    i && i4(i);
    const s = n ? n === "svg" : cm(t), o = s ? v4 : y4;
    function r(u, c) {
      let f;
      const h = {
        ...b.useContext(lm),
        ...u,
        layoutId: T4(u)
      }, { isStatic: d } = h, y = l4(u), v = o(u, d);
      if (!d && kx) {
        E4();
        const x = A4(h);
        f = x.MeasureLayout, y.visualElement = S4(t, v, h, a, x.ProjectionNode, s);
      }
      return w.jsxs(gu.Provider, {
        value: y,
        children: [
          f && y.visualElement ? w.jsx(f, {
            visualElement: y.visualElement,
            ...h
          }) : null,
          m4(t, u, x4(v, y.visualElement, c), v, d, e, s)
        ]
      });
    }
    r.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
    const l = b.forwardRef(r);
    return l[b4] = t, l;
  }
  function T4({ layoutId: t }) {
    const e = b.useContext(_h).id;
    return e && t !== void 0 ? e + "-" + t : t;
  }
  function E4(t, e) {
    b.useContext(hw).strict;
  }
  function A4(t) {
    const e = mw(), { drag: n, layout: i } = e;
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
  function C4(t, e) {
    if (typeof Proxy > "u") return Tc;
    const n = /* @__PURE__ */ new Map(), i = (s, o) => Tc(s, o, t, e), a = (s, o) => i(s, o);
    return new Proxy(a, {
      get: (s, o) => o === "create" ? i : (n.has(o) || n.set(o, Tc(o, void 0, t, e)), n.get(o))
    });
  }
  const M4 = (t, e) => e.isSVG ?? cm(t) ? new a3(e) : new I5(e, {
    allowProjection: t !== b.Fragment
  });
  class R4 extends wi {
    constructor(e) {
      super(e), e.animationState || (e.animationState = u3(e));
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
  let D4 = 0;
  class O4 extends wi {
    constructor() {
      super(...arguments), this.id = D4++;
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
  const N4 = {
    animation: {
      Feature: R4
    },
    exit: {
      Feature: O4
    }
  };
  function Xo(t) {
    return {
      point: {
        x: t.pageX,
        y: t.pageY
      }
    };
  }
  const z4 = (t) => (e) => nm(e) && t(e, Xo(e));
  function to(t, e, n, i) {
    return Co(t, e, z4(n), i);
  }
  const Sw = ({ current: t }) => t ? t.ownerDocument.defaultView : null, ky = (t, e) => Math.abs(t - e);
  function j4(t, e) {
    const n = ky(t.x, e.x), i = ky(t.y, e.y);
    return Math.sqrt(n ** 2 + i ** 2);
  }
  const Gy = /* @__PURE__ */ new Set([
    "auto",
    "scroll"
  ]);
  class ww {
    constructor(e, n, { transformPagePoint: i, contextWindow: a = window, dragSnapToOrigin: s = false, distanceThreshold: o = 3, element: r } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (d) => {
        this.handleScroll(d.target);
      }, this.onWindowScroll = () => {
        this.handleScroll(window);
      }, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Ac(this.lastMoveEventInfo, this.history), y = this.startEvent !== null, v = j4(d.offset, {
          x: 0,
          y: 0
        }) >= this.distanceThreshold;
        if (!y && !v) return;
        const { point: x } = d, { timestamp: p } = Pt;
        this.history.push({
          ...x,
          timestamp: p
        });
        const { onStart: m, onMove: g } = this.handlers;
        y || (m && m(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, d);
      }, this.handlePointerMove = (d, y) => {
        this.lastMoveEvent = d, this.lastMoveEventInfo = Ec(y, this.transformPagePoint), ct.update(this.updatePoint, true);
      }, this.handlePointerUp = (d, y) => {
        this.end();
        const { onEnd: v, onSessionEnd: x, resumeAnimation: p } = this.handlers;
        if ((this.dragSnapToOrigin || !this.startEvent) && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const m = Ac(d.type === "pointercancel" ? this.lastMoveEventInfo : Ec(y, this.transformPagePoint), this.history);
        this.startEvent && v && v(d, m), x && x(d, m);
      }, !nm(e)) return;
      this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = o, this.contextWindow = a || window;
      const l = Xo(e), u = Ec(l, this.transformPagePoint), { point: c } = u, { timestamp: f } = Pt;
      this.history = [
        {
          ...c,
          timestamp: f
        }
      ];
      const { onSessionStart: h } = n;
      h && h(e, Ac(u, this.history)), this.removeListeners = Yo(to(this.contextWindow, "pointermove", this.handlePointerMove), to(this.contextWindow, "pointerup", this.handlePointerUp), to(this.contextWindow, "pointercancel", this.handlePointerUp)), r && this.startScrollTracking(r);
    }
    startScrollTracking(e) {
      let n = e.parentElement;
      for (; n; ) {
        const i = getComputedStyle(n);
        (Gy.has(i.overflowX) || Gy.has(i.overflowY)) && this.scrollPositions.set(n, {
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
  function Ec(t, e) {
    return e ? {
      point: e(t.point)
    } : t;
  }
  function Yy(t, e) {
    return {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  function Ac({ point: t }, e) {
    return {
      point: t,
      delta: Yy(t, Tw(e)),
      offset: Yy(t, _4(e)),
      velocity: L4(e, 0.1)
    };
  }
  function _4(t) {
    return t[0];
  }
  function Tw(t) {
    return t[t.length - 1];
  }
  function L4(t, e) {
    if (t.length < 2) return {
      x: 0,
      y: 0
    };
    let n = t.length - 1, i = null;
    const a = Tw(t);
    for (; n >= 0 && (i = t[n], !(a.timestamp - i.timestamp > je(e))); ) n--;
    if (!i) return {
      x: 0,
      y: 0
    };
    i === t[0] && t.length > 2 && a.timestamp - i.timestamp > je(e) * 2 && (i = t[1]);
    const s = De(a.timestamp - i.timestamp);
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
  function V4(t, { min: e, max: n }, i) {
    return e !== void 0 && t < e ? t = i ? xt(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? xt(n, t, i.max) : Math.min(t, n)), t;
  }
  function qy(t, e, n) {
    return {
      min: e !== void 0 ? t.min + e : void 0,
      max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    };
  }
  function U4(t, { top: e, left: n, bottom: i, right: a }) {
    return {
      x: qy(t.x, n, a),
      y: qy(t.y, e, i)
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
  function P4(t, e) {
    let n = 0.5;
    const i = $t(t), a = $t(e);
    return a > i ? n = wo(e.min, e.max - i, t.min) : i > a && (n = wo(t.min, t.max - a, e.min)), an(0, 1, n);
  }
  function H4(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
  }
  const ud = 0.35;
  function k4(t = ud) {
    return t === false ? t = 0 : t === true && (t = ud), {
      x: Xy(t, "left", "right"),
      y: Xy(t, "top", "bottom")
    };
  }
  function Xy(t, e, n) {
    return {
      min: Qy(t, e),
      max: Qy(t, n)
    };
  }
  function Qy(t, e) {
    return typeof t == "number" ? t : t[e] || 0;
  }
  const G4 = /* @__PURE__ */ new WeakMap();
  class Y4 {
    constructor(e) {
      this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = {
        x: 0,
        y: 0
      }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = zt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
    }
    start(e, { snapToCursor: n = false, distanceThreshold: i } = {}) {
      const { presenceContext: a } = this.visualElement;
      if (a && a.isPresent === false) return;
      const s = (f) => {
        n && this.snapToCursor(Xo(f).point), this.stopAnimation();
      }, o = (f, h) => {
        const { drag: d, dragPropagation: y, onDragStart: v } = this.getProps();
        if (d && !y && (this.openDragLock && this.openDragLock(), this.openDragLock = y5(d), !this.openDragLock)) return;
        this.latestPointerEvent = f, this.latestPanInfo = h, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), Ke((p) => {
          let m = this.getAxisMotionValue(p).get() || 0;
          if (en.test(m)) {
            const { projection: g } = this.visualElement;
            if (g && g.layout) {
              const S = g.layout.layoutBox[p];
              S && (m = $t(S) * (parseFloat(m) / 100));
            }
          }
          this.originPoint[p] = m;
        }), v && ct.update(() => v(f, h), false, true), ed(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", true);
      }, r = (f, h) => {
        this.latestPointerEvent = f, this.latestPanInfo = h;
        const { dragPropagation: d, dragDirectionLock: y, onDirectionLock: v, onDrag: x } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: p } = h;
        if (y && this.currentDirection === null) {
          this.currentDirection = F4(p), this.currentDirection !== null && v && v(this.currentDirection);
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
      this.panSession = new ww(e, {
        onSessionStart: s,
        onStart: o,
        onMove: r,
        onSessionEnd: l,
        resumeAnimation: u
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: i,
        contextWindow: Sw(this.visualElement),
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
      this.constraints && this.constraints[e] && (o = V4(o, this.constraints[e], this.elastic[e])), s.set(o);
    }
    resolveConstraints() {
      var _a5;
      const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a5 = this.visualElement.projection) == null ? void 0 : _a5.layout, a = this.constraints;
      e && ha(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = U4(i.layoutBox, e) : this.constraints = false, this.elastic = k4(n), a !== this.constraints && !ha(e) && i && this.constraints && !this.hasMutatedConstraints && Ke((s) => {
        this.constraints !== false && this.getAxisMotionValue(s) && (this.constraints[s] = H4(i.layoutBox[s], this.constraints[s]));
      });
    }
    resolveRefConstraints() {
      const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
      if (!e || !ha(e)) return false;
      const i = e.current;
      ts(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
      const { projection: a } = this.visualElement;
      if (!a || !a.layout) return false;
      const s = X5(i, a.root, this.visualElement.getTransformPagePoint());
      let o = B4(a.layout.layoutBox, s);
      if (n) {
        const r = n(Y5(o));
        this.hasMutatedConstraints = !!r, r && (o = qS(r));
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
      return Promise.all(u).then(r);
    }
    startAxisValueAnimation(e, n) {
      const i = this.getAxisMotionValue(e);
      return ed(this.visualElement, e), i.start(Jh(e, i, 0, n, this.visualElement, false));
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
          a[o] = P4({
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
      G4.set(this.visualElement, this);
      const e = this.visualElement.current, n = to(e, "pointerdown", (u) => {
        const { drag: c, dragListener: f = true } = this.getProps(), h = u.target, d = h !== e && T5(h);
        c && f && !d && this.start(u);
      });
      let i;
      const a = () => {
        const { dragConstraints: u } = this.getProps();
        ha(u) && u.current && (this.constraints = this.resolveRefConstraints(), i || (i = q4(e, u.current, () => this.scalePositionWithinConstraints())));
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
      const e = this.visualElement.getProps(), { drag: n = false, dragDirectionLock: i = false, dragPropagation: a = false, dragConstraints: s = false, dragElastic: o = ud, dragMomentum: r = true } = e;
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
  function Ky(t) {
    let e = true;
    return () => {
      if (e) {
        e = false;
        return;
      }
      t();
    };
  }
  function q4(t, e, n) {
    const i = ey(t, Ky(n)), a = ey(e, Ky(n));
    return () => {
      i(), a();
    };
  }
  function vr(t, e, n) {
    return (e === true || e === t) && (n === null || n === t);
  }
  function F4(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
  }
  class X4 extends wi {
    constructor(e) {
      super(e), this.removeGroupControls = ze, this.removeListeners = ze, this.controls = new Y4(e);
    }
    mount() {
      const { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ze;
    }
    update() {
      const { dragControls: e } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
      e !== n && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
    }
  }
  const Cc = (t) => (e, n) => {
    t && ct.update(() => t(e, n), false, true);
  };
  class Q4 extends wi {
    constructor() {
      super(...arguments), this.removePointerDownListener = ze;
    }
    onPointerDown(e) {
      this.session = new ww(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Sw(this.node)
      });
    }
    createPanHandlers() {
      const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: a } = this.node.getProps();
      return {
        onSessionStart: Cc(e),
        onStart: Cc(n),
        onMove: Cc(i),
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
  let Mc = false;
  class K4 extends b.Component {
    componentDidMount() {
      const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: a } = this.props, { projection: s } = e;
      s && (n.group && n.group.add(s), i && i.register && a && i.register(s), Mc && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), s.setOptions({
        ...s.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      })), qr.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(e) {
      const { layoutDependency: n, visualElement: i, drag: a, isPresent: s } = this.props, { projection: o } = i;
      return o && (o.isPresent = s, e.layoutDependency !== n && o.setOptions({
        ...o.options,
        layoutDependency: n
      }), Mc = true, a || e.layoutDependency !== n || n === void 0 || e.isPresent !== s ? o.willUpdate() : this.safeToRemove(), e.isPresent !== s && (s ? o.promote() : o.relegate() || ct.postRender(() => {
        const r = o.getStack();
        (!r || !r.members.length) && this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      const { projection: e } = this.props.visualElement;
      e && (e.root.didUpdate(), em.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: a } = e;
      Mc = true, a && (a.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(a), i && i.deregister && i.deregister(a));
    }
    safeToRemove() {
      const { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  }
  function Ew(t) {
    const [e, n] = dw(), i = b.useContext(_h);
    return w.jsx(K4, {
      ...t,
      layoutGroup: i,
      switchLayoutGroup: b.useContext(bw),
      isPresent: e,
      safeToRemove: n
    });
  }
  const Z4 = {
    pan: {
      Feature: Q4
    },
    drag: {
      Feature: X4,
      ProjectionNode: fw,
      MeasureLayout: Ew
    }
  };
  function Zy(t, e, n) {
    const { props: i } = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const a = "onHover" + n, s = i[a];
    s && ct.postRender(() => s(e, Xo(e)));
  }
  class $4 extends wi {
    mount() {
      const { current: e } = this.node;
      e && (this.unmount = b5(e, (n, i) => (Zy(this.node, i, "Start"), (a) => Zy(this.node, a, "End"))));
    }
    unmount() {
    }
  }
  class J4 extends wi {
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
      this.unmount = Yo(Co(this.node.current, "focus", () => this.onFocus()), Co(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  }
  function $y(t, e, n) {
    const { props: i } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const a = "onTap" + (n === "End" ? "" : n), s = i[a];
    s && ct.postRender(() => s(e, Xo(e)));
  }
  class I4 extends wi {
    mount() {
      const { current: e } = this.node;
      if (!e) return;
      const { globalTapTarget: n, propagate: i } = this.node.props;
      this.unmount = A5(e, (a, s) => ($y(this.node, s, "Start"), (o, { success: r }) => $y(this.node, o, r ? "End" : "Cancel")), {
        useGlobalTarget: n,
        stopPropagation: (i == null ? void 0 : i.tap) === false
      });
    }
    unmount() {
    }
  }
  const cd = /* @__PURE__ */ new WeakMap(), Rc = /* @__PURE__ */ new WeakMap(), W4 = (t) => {
    const e = cd.get(t.target);
    e && e(t);
  }, tz = (t) => {
    t.forEach(W4);
  };
  function ez({ root: t, ...e }) {
    const n = t || document;
    Rc.has(n) || Rc.set(n, {});
    const i = Rc.get(n), a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(tz, {
      root: t,
      ...e
    })), i[a];
  }
  function nz(t, e, n) {
    const i = ez(e);
    return cd.set(t, n), i.observe(t), () => {
      cd.delete(t), i.unobserve(t);
    };
  }
  const iz = {
    some: 0,
    all: 1
  };
  class az extends wi {
    constructor() {
      super(...arguments), this.hasEnteredView = false, this.isInView = false;
    }
    startObserver() {
      this.unmount();
      const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: a = "some", once: s } = e, o = {
        root: n ? n.current : void 0,
        rootMargin: i,
        threshold: typeof a == "number" ? a : iz[a]
      }, r = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView)) return;
        u && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), h = u ? c : f;
        h && h(l);
      };
      return nz(this.node.current, o, r);
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
      ].some(sz(e, n)) && this.startObserver();
    }
    unmount() {
    }
  }
  function sz({ viewport: t = {} }, { viewport: e = {} } = {}) {
    return (n) => t[n] !== e[n];
  }
  const oz = {
    inView: {
      Feature: az
    },
    tap: {
      Feature: I4
    },
    focus: {
      Feature: J4
    },
    hover: {
      Feature: $4
    }
  }, rz = {
    layout: {
      ProjectionNode: fw,
      MeasureLayout: Ew
    }
  }, lz = {
    ...N4,
    ...oz,
    ...Z4,
    ...rz
  }, bn = C4(lz, M4), uz = vh("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  });
  function Jy({ className: t, variant: e, ...n }) {
    return w.jsx("div", {
      className: zn(uz({
        variant: e
      }), t),
      ...n
    });
  }
  const cz = vh("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
  }), ie = b.forwardRef(({ className: t, variant: e, size: n, asChild: i = false, ...a }, s) => {
    const o = i ? YA : "button";
    return w.jsx(o, {
      className: zn(cz({
        variant: e,
        size: n,
        className: t
      })),
      ref: s,
      ...a
    });
  });
  ie.displayName = "Button";
  const fz = [
    {
      title: "AlphaForge",
      description: "The Robinhood + Scratch for aspiring quants. Full-stack quantitative investing platform where users design, backtest, and deploy trading strategies. Users have consistently improved their portfolio performance by ~10% month-over-month over 6 months.",
      fullDescription: "AlphaForge is a full-stack quantitative investing platform built to democratize algorithmic trading. It features a multi-level Quant IDE. Scratch-like drag-and-drop builder for beginners and full multi-language coding environment for advanced users. Users can design strategies, backtest them against historical data, and paper trade in real time. AlphaForge has demonstrated measurable results: users consistently improve portfolio performance by ~10% month-over-month over 6 months.",
      highlights: [
        "Multi-level Quant IDE: drag-and-drop builder + advanced code editor",
        "Backtesting & paper trading engine with real historical data",
        "Real-time market tracker: stocks, ETFs, indices, crypto",
        "Integrated financial news and analytics dashboard",
        "Yahoo Finance, Alpaca & Seeking Alpha API integrations",
        "Deployed on Vercel for low-latency, scalable performance"
      ],
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Falphaforgeai.lovable.app?w=1200",
      technologies: [
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "Alpaca API",
        "Yahoo Finance",
        "Supabase",
        "Vercel"
      ],
      liveUrl: "https://alphaforgeai.lovable.app",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Shot Sensei",
      description: "AI-powered pickleball coaching and competitive game platform. Winner of the Startup Ready Award at Hook'em Hacks 2026 (UT Austin) and invited to pitch to Pear VC at the McCombs School of Business.",
      fullDescription: "Shot Sensei is a computer vision platform for competitive and training-based pickleball. It won the Startup Ready Award at Hook'em Hacks 2026 at UT Austin and was later invited to pitch to Pear VC (Khalil Fuller) at the McCombs School of Business. The platform features two modes: a real-time AI opponent game, and a training mode that uses Gemini + ElevenLabs to analyze every stroke in real time. Analyzes serve, volley, forehand, and backhand. Delivers voice coaching feedback.",
      highlights: [
        "Won Hook'em Hacks 2026: Startup Ready Award + Multimodal Track",
        "Invited to pitch to Pear VC at UT Austin McCombs",
        "Real-time AI opponent game mode playable anytime",
        "Stroke analysis using YOLOv8 pose estimation + OpenCV",
        "Voice coaching powered by Gemini + ElevenLabs",
        "Player win/loss and shot-level analytics via Supabase"
      ],
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fplayshotsensei.com?w=1200",
      technologies: [
        "Python",
        "OpenCV",
        "YOLOv8",
        "Gemini",
        "ElevenLabs",
        "Supabase",
        "React"
      ],
      liveUrl: "https://playshotsensei.com",
      githubUrl: "#",
      demoUrl: "https://www.youtube.com/watch?v=v3SNs0O3G5g",
      featured: true
    },
    {
      title: "ClinicalHours",
      description: "AI-powered virtual receptionist platform that automates email and call workflows for pre-med students seeking clinical hours. Integrates Gmail API and GoHighLevel to schedule clinic meetings at scale.",
      fullDescription: "ClinicalHours is an AI-powered automation platform built to help pre-med students find and schedule clinical experience hours. It acts as a virtual receptionist. Uses the Gmail API and GoHighLevel to autonomously reach out to clinics, schedule meetings, and follow up. The platform integrates MapBox and Google APIs for geolocation-based clinic discovery, and processes large-scale U.S. hospital datasets to identify opportunities. Premium features include AI-assisted resume and application tools powered by OpenAI and Gemini.",
      highlights: [
        "AI virtual receptionist automates clinic outreach and scheduling",
        "Gmail API + GoHighLevel for end-to-end communication pipelines",
        "MapBox + Google APIs for geolocation-based clinic discovery",
        "Processed large-scale U.S. hospital datasets in Python",
        "OpenAI & Gemini-powered resume and application tools",
        "Partnered with BCS Free Health Clinic"
      ],
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fclinicalhours.org?w=1200",
      technologies: [
        "React",
        "Python",
        "Gmail API",
        "GoHighLevel",
        "MapBox",
        "OpenAI",
        "Gemini",
        "Supabase"
      ],
      liveUrl: "https://clinicalhours.org",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Harbor",
      description: "Disaster preparedness and response platform helping communities plan for and recover from emergencies. Won 1st Place in the 2026 TidalTAMU Google Gemini Track.",
      fullDescription: "Harbor is a disaster preparedness and community response platform built at TidalTAMU 2026, where it won 1st Place in the Google Gemini Track. It helps communities plan for, coordinate during, and recover from natural disasters and emergencies using AI-driven resource matching and communication tools.",
      highlights: [
        "1st Place: TidalTAMU 2026 Google Gemini Track",
        "AI-powered resource matching for disaster response",
        "Community coordination and communication tools",
        "Built with Google Gemini for intelligent decision support"
      ],
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fharbordisaster.xyz?w=1200",
      technologies: [
        "React",
        "TypeScript",
        "Google Gemini",
        "Supabase"
      ],
      liveUrl: "https://harbordisaster.xyz",
      githubUrl: "#",
      featured: false
    },
    {
      title: "AI Livestock Modeling Research",
      description: "Python-based agent-based nutrition model simulating beef cattle growth using NRC standards at Texas A&M. Migrated legacy R workflows to Python and built cross-platform simulation systems.",
      fullDescription: "TAMU research project applying agent-based modeling (Mesa) and machine learning to optimize livestock nutrition under economic and environmental constraints. Migrated legacy R workflows to Python, improving reproducibility and scalability. Built cross-platform simulation systems in Python, Java, and NetLogo to evaluate sustainability and production outcomes.",
      highlights: [
        "Applied Mesa agent-based modeling for livestock nutrition optimization",
        "Migrated legacy R workflows to Python for reproducibility",
        "Multi-language simulation: Python, Java, NetLogo",
        "NRC-standard cattle growth and reproduction modeling"
      ],
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Faggiecollaborate.tamu.edu?w=1200",
      technologies: [
        "Python",
        "Mesa",
        "NumPy",
        "Machine Learning",
        "Java",
        "NetLogo"
      ],
      liveUrl: "https://aggiecollaborate.tamu.edu",
      githubUrl: "https://github.com/CNM-University-of-Guelph/NASEM-Model-Python/blob/main/README.qmd",
      featured: false
    },
    {
      title: "Cybersecurity Research",
      description: "Evaluated Cyber Reasoning Systems powered by LLMs including Theori RoboDuck and TAMU AYNIAFB. Benchmarked vulnerability detection across real-world C, Python, and Java repositories.",
      fullDescription: "TAMU research evaluating LLM-powered Cyber Reasoning Systems (CRS) for automated vulnerability detection. Benchmarked Theori RoboDuck and TAMU AYNIAFB against real-world C, Python, and Java repositories. Analyzed model performance across heterogeneous systems to assess reliability, generalization, and practical applicability in cybersecurity workflows.",
      highlights: [
        "Evaluated Theori RoboDuck and TAMU AYNIAFB CRS systems",
        "Benchmarked on real-world C, Python, and Java repositories",
        "Analyzed reliability and generalization across heterogeneous systems",
        "Contributed to TAMU AI-driven security research program"
      ],
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftheori.io%2Fblog%2Faixcc-and-roboduck-63447?w=1200",
      technologies: [
        "Python",
        "LLM Research",
        "Cybersecurity",
        "Vulnerability Analysis"
      ],
      liveUrl: "https://theori.io/blog/aixcc-and-roboduck-63447",
      githubUrl: "https://github.com/theori-io/aixcc-afc-archive/",
      featured: false
    }
  ], dz = () => {
    const [t, e] = b.useState(false), [n, i] = b.useState(false), s = hs().pathname === "/", o = [
      {
        name: "About",
        href: "#about"
      },
      {
        name: "Projects",
        href: "#projects"
      },
      {
        name: "Contact",
        href: "#contact"
      }
    ];
    b.useEffect(() => {
      const l = () => e(window.scrollY > 60);
      return window.addEventListener("scroll", l), () => window.removeEventListener("scroll", l);
    }, []);
    const r = (l) => {
      var _a5;
      l === "#" ? window.scrollTo({
        top: 0,
        behavior: "smooth"
      }) : (_a5 = document.getElementById(l.substring(1))) == null ? void 0 : _a5.scrollIntoView({
        behavior: "smooth"
      }), i(false);
    };
    return w.jsxs(w.Fragment, {
      children: [
        w.jsx(bn.nav, {
          initial: {
            y: -80,
            opacity: 0
          },
          animate: {
            y: 0,
            opacity: 1
          },
          transition: {
            duration: 0.6,
            ease: [
              0.22,
              1,
              0.36,
              1
            ]
          },
          className: `fixed top-0 w-full z-50 transition-all duration-300 ${t ? "backdrop-blur-xl border-b border-border/70 shadow-sm" : "bg-transparent"}`,
          style: t ? {
            background: "hsl(205 66% 96% / 0.92)"
          } : {},
          children: w.jsx("div", {
            className: "container mx-auto px-6",
            children: w.jsxs("div", {
              className: "flex items-center justify-between h-16",
              children: [
                s ? w.jsxs("button", {
                  onClick: () => r("#"),
                  className: "display font-black text-lg tracking-tight hover:text-primary transition-colors duration-200",
                  children: [
                    w.jsx("span", {
                      className: "text-gradient",
                      children: "AN"
                    }),
                    w.jsx("span", {
                      className: "text-muted-foreground/40",
                      children: "."
                    })
                  ]
                }) : w.jsxs(kf, {
                  to: "/",
                  className: "display font-black text-lg tracking-tight hover:text-primary transition-colors duration-200",
                  children: [
                    w.jsx("span", {
                      className: "text-gradient",
                      children: "AN"
                    }),
                    w.jsx("span", {
                      className: "text-muted-foreground/40",
                      children: "."
                    })
                  ]
                }),
                w.jsxs("div", {
                  className: "hidden md:flex items-center gap-1",
                  children: [
                    s && o.map((l) => w.jsx("button", {
                      onClick: () => r(l.href),
                      className: "px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-sky-50/75",
                      children: l.name
                    }, l.name)),
                    w.jsx(ie, {
                      onClick: () => s ? r("#contact") : window.location.href = "/#contact",
                      size: "sm",
                      className: "ml-2 btn-primary text-white border-0 text-xs px-5 font-mono font-semibold rounded-lg",
                      children: "Get in Touch"
                    })
                  ]
                }),
                w.jsx("button", {
                  className: "md:hidden p-2 rounded-lg hover:bg-sky-50/70 transition-colors text-foreground",
                  "aria-label": "Toggle menu",
                  onClick: () => i(!n),
                  children: n ? w.jsx(V1, {
                    className: "h-5 w-5"
                  }) : w.jsx(GC, {
                    className: "h-5 w-5"
                  })
                })
              ]
            })
          })
        }),
        w.jsx(e4, {
          children: n && w.jsxs(w.Fragment, {
            children: [
              w.jsx(bn.div, {
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                exit: {
                  opacity: 0
                },
                className: "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden",
                onClick: () => i(false)
              }),
              w.jsxs(bn.div, {
                initial: {
                  opacity: 0,
                  y: -16
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                exit: {
                  opacity: 0,
                  y: -16
                },
                transition: {
                  duration: 0.22,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1
                  ]
                },
                className: "fixed top-16 left-3 right-3 z-50 p-4 space-y-2 md:hidden border border-border shadow-lg rounded-lg",
                style: {
                  background: "hsl(205 72% 96% / 0.96)"
                },
                children: [
                  s && o.map((l) => w.jsx("button", {
                    onClick: () => r(l.href),
                    className: "block w-full text-left text-lg font-medium py-3 text-foreground hover:text-primary transition-colors border-b border-border/40",
                    children: l.name
                  }, l.name)),
                  w.jsx(ie, {
                    onClick: () => {
                      s ? r("#contact") : window.location.href = "/#contact";
                    },
                    className: "w-full mt-4 btn-primary text-white border-0 font-mono font-semibold rounded-lg",
                    children: "Get in Touch"
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }, hz = () => {
    const t = b.useRef(null), [e] = b.useState(() => typeof window < "u" && "ontouchstart" in window);
    return b.useEffect(() => {
      if (e) return;
      const n = t.current;
      if (!n) return;
      const i = (s) => {
        n.style.left = `${s.clientX}px`, n.style.top = `${s.clientY}px`, n.style.opacity = "1";
      }, a = () => {
        n.style.opacity = "0";
      };
      return window.addEventListener("mousemove", i), document.addEventListener("mouseleave", a), () => {
        window.removeEventListener("mousemove", i), document.removeEventListener("mouseleave", a);
      };
    }, [
      e
    ]), w.jsx(w.Fragment, {
      children: !e && w.jsx("div", {
        ref: t,
        className: "cursor-glow",
        "aria-hidden": "true"
      })
    });
  }, mz = () => {
    const t = fz, e = t.filter((a) => a.featured), n = t.filter((a) => !a.featured), i = ({ project: a, index: s }) => w.jsxs(bn.div, {
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
        delay: 0.05 * s
      },
      className: "group surface-panel overflow-hidden card-glow transition-all duration-300",
      children: [
        w.jsx("div", {
          className: "overflow-hidden",
          children: w.jsx("img", {
            src: a.image,
            alt: a.title,
            className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
          })
        }),
        w.jsxs("div", {
          className: "p-6",
          children: [
            w.jsxs("div", {
              className: "flex items-start justify-between mb-3",
              children: [
                w.jsx("h3", {
                  className: "text-lg font-bold group-hover:text-primary transition-colors",
                  children: a.title
                }),
                a.featured && w.jsx(Jy, {
                  variant: "outline",
                  className: "text-[10px] border-primary/30 text-primary rounded-full",
                  children: "Featured"
                })
              ]
            }),
            w.jsx("p", {
              className: "text-sm text-muted-foreground leading-relaxed mb-4",
              children: a.description
            }),
            w.jsx("div", {
              className: "flex flex-wrap gap-1.5 mb-5",
              children: a.technologies.map((o) => w.jsx(Jy, {
                variant: "outline",
                className: "text-[10px] border-border/50 text-muted-foreground rounded-full",
                children: o
              }, o))
            }),
            w.jsxs("div", {
              className: "flex gap-3",
              children: [
                w.jsxs("a", {
                  href: a.liveUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors",
                  children: [
                    w.jsx(PC, {
                      className: "h-3.5 w-3.5"
                    }),
                    " Live"
                  ]
                }),
                a.githubUrl && a.githubUrl !== "#" && w.jsxs("a", {
                  href: a.githubUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",
                  children: [
                    w.jsx(HC, {
                      className: "h-3.5 w-3.5"
                    }),
                    " Source"
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
    return w.jsxs("div", {
      className: "min-h-screen bg-background relative overflow-hidden noise dot-grid",
      children: [
        w.jsx("div", {
          className: "absolute inset-0 pointer-events-none",
          style: {
            background: "linear-gradient(180deg, hsl(210 82% 96%) 0%, hsl(198 58% 91%) 42%, hsl(164 32% 84%) 100%)"
          }
        }),
        w.jsx(hz, {}),
        w.jsx(dz, {}),
        w.jsx("div", {
          className: "container mx-auto px-6 pt-24 pb-20 relative z-10",
          children: w.jsxs("div", {
            className: "max-w-5xl mx-auto",
            children: [
              w.jsxs("div", {
                className: "mb-8 flex items-center gap-2",
                children: [
                  w.jsx(ie, {
                    asChild: true,
                    variant: "ghost",
                    size: "sm",
                    className: "text-muted-foreground hover:text-foreground rounded-lg",
                    children: w.jsxs(kf, {
                      to: "/",
                      children: [
                        w.jsx(_1, {
                          className: "w-4 h-4 mr-2"
                        }),
                        "Back"
                      ]
                    })
                  }),
                  w.jsx(ie, {
                    asChild: true,
                    size: "sm",
                    className: "rounded-lg bg-gradient-to-r from-[#5b4bff] to-[#c341ff] text-white hover:opacity-90",
                    children: w.jsxs(kf, {
                      to: "/",
                      children: [
                        w.jsx(L1, {
                          className: "w-4 h-4 mr-2"
                        }),
                        "Play the world"
                      ]
                    })
                  })
                ]
              }),
              w.jsxs(bn.div, {
                initial: {
                  opacity: 0,
                  y: 20
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.5
                },
                children: [
                  w.jsx("p", {
                    className: "mono text-primary text-sm tracking-widest uppercase mb-4",
                    children: "Portfolio"
                  }),
                  w.jsxs("h1", {
                    className: "section-title mb-4",
                    children: [
                      "All ",
                      w.jsx("span", {
                        className: "text-gradient",
                        children: "Projects"
                      })
                    ]
                  }),
                  w.jsx("p", {
                    className: "text-muted-foreground text-lg mb-16 max-w-2xl",
                    children: "Research, engineering, nonprofit work, and community impact."
                  })
                ]
              }),
              w.jsxs("div", {
                className: "mb-16",
                children: [
                  w.jsx("h2", {
                    className: "text-xl font-bold mb-6 mono text-muted-foreground",
                    children: "Featured"
                  }),
                  w.jsx("div", {
                    className: "grid md:grid-cols-2 gap-6",
                    children: e.map((a, s) => w.jsx(i, {
                      project: a,
                      index: s
                    }, a.title))
                  })
                ]
              }),
              n.length > 0 && w.jsxs("div", {
                children: [
                  w.jsx("h2", {
                    className: "text-xl font-bold mb-6 mono text-muted-foreground",
                    children: "Other"
                  }),
                  w.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: n.map((a, s) => w.jsx(i, {
                      project: a,
                      index: s
                    }, a.title))
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }, pz = "/amritaraj-nair-portfolio", Iy = `${pz}/Amritaraj_Nair_Resume.pdf`, br = "https://amritnair.github.io/amritaraj-nair-portfolio/#/resume", gz = () => {
    const t = Ux(), { toast: e } = a1(), [n, i] = b.useState(false), [a, s] = b.useState(false), o = () => {
      const f = document.createElement("a");
      f.href = Iy, f.download = "Amritaraj_Nair_Resume.pdf", document.body.appendChild(f), f.click(), document.body.removeChild(f);
    }, r = async () => {
      try {
        await navigator.clipboard.writeText(br), i(true), e({
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
${br}

Best regards`);
      window.open(`mailto:?subject=${f}&body=${h}`, "_blank");
    }, u = () => {
      const f = encodeURIComponent(br);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${f}`, "_blank");
    }, c = async () => {
      if (navigator.share) try {
        await navigator.share({
          title: "Amritaraj Nair \u2014 Resume",
          text: "Check out Amritaraj Nair's resume",
          url: br
        });
      } catch {
      }
      else s(!a);
    };
    return w.jsxs("div", {
      className: "min-h-screen bg-background relative",
      children: [
        w.jsx(bn.div, {
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
              w.jsxs(ie, {
                variant: "ghost",
                size: "sm",
                onClick: () => t("/"),
                className: "gap-2 text-muted-foreground hover:text-foreground",
                children: [
                  w.jsx(_1, {
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
                  w.jsxs(ie, {
                    size: "sm",
                    onClick: () => t("/"),
                    className: "gap-2 bg-gradient-to-r from-[#5b4bff] to-[#c341ff] text-white hover:opacity-90",
                    children: [
                      w.jsx(L1, {
                        className: "h-4 w-4"
                      }),
                      "Play the world"
                    ]
                  }),
                  w.jsxs("div", {
                    className: "relative",
                    children: [
                      w.jsxs(ie, {
                        variant: "outline",
                        size: "sm",
                        onClick: c,
                        className: "gap-2 border-border hover:border-primary/50 hover:bg-primary/5",
                        children: [
                          w.jsx(YC, {
                            className: "h-4 w-4"
                          }),
                          "Share"
                        ]
                      }),
                      a && w.jsxs(bn.div, {
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
                              n ? w.jsx(tg, {
                                className: "h-4 w-4 text-green-400"
                              }) : w.jsx(BC, {
                                className: "h-4 w-4 text-muted-foreground"
                              }),
                              n ? "Copied!" : "Copy link"
                            ]
                          }),
                          w.jsxs("button", {
                            onClick: l,
                            className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors",
                            children: [
                              w.jsx(ng, {
                                className: "h-4 w-4 text-muted-foreground"
                              }),
                              "Send via email"
                            ]
                          }),
                          w.jsxs("button", {
                            onClick: u,
                            className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors",
                            children: [
                              w.jsx(eg, {
                                className: "h-4 w-4 text-muted-foreground"
                              }),
                              "Share on LinkedIn"
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  w.jsxs(ie, {
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
          children: w.jsxs(bn.div, {
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
                  data: Iy,
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
                      w.jsxs(ie, {
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
              w.jsxs(bn.div, {
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
                  w.jsxs(ie, {
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
                  w.jsxs(ie, {
                    variant: "outline",
                    size: "lg",
                    onClick: r,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      n ? w.jsx(tg, {
                        className: "h-4 w-4"
                      }) : w.jsx(kC, {
                        className: "h-4 w-4"
                      }),
                      n ? "Link Copied!" : "Copy Share Link"
                    ]
                  }),
                  w.jsxs(ie, {
                    variant: "outline",
                    size: "lg",
                    onClick: l,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      w.jsx(ng, {
                        className: "h-4 w-4"
                      }),
                      "Email Resume"
                    ]
                  }),
                  w.jsxs(ie, {
                    variant: "outline",
                    size: "lg",
                    onClick: u,
                    className: "gap-2 rounded-full px-8 border-border hover:border-primary/50 hover:bg-primary/5",
                    children: [
                      w.jsx(eg, {
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
  }, yz = () => {
    const t = hs();
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
  }, vz = b.lazy(() => VA(() => import("./GamePortfolio-DYtmVuGo.js").then(async (m) => {
    await m.__tla;
    return m;
  }).then((t) => t.aY), [])), bz = new dD(), xz = () => w.jsx("div", {
    className: "flex h-[100dvh] items-center justify-center bg-[#160f34] font-mono text-xs uppercase tracking-[0.3em] text-[#9d8bff]",
    children: "Loading world\u2026"
  }), Sz = () => w.jsx(mO, {
    children: w.jsx(mD, {
      client: bz,
      children: w.jsxs(GR, {
        children: [
          w.jsx(A2, {}),
          w.jsx(iM, {}),
          w.jsx(cO, {
            children: w.jsxs(iO, {
              children: [
                w.jsx(_s, {
                  path: "/",
                  element: w.jsx(b.Suspense, {
                    fallback: w.jsx(xz, {}),
                    children: w.jsx(vz, {})
                  })
                }),
                w.jsx(_s, {
                  path: "/projects",
                  element: w.jsx(mz, {})
                }),
                w.jsx(_s, {
                  path: "/resume",
                  element: w.jsx(gz, {})
                }),
                w.jsx(_s, {
                  path: "*",
                  element: w.jsx(yz, {})
                })
              ]
            })
          })
        ]
      })
    })
  });
  jA.createRoot(document.getElementById("root")).render(w.jsx(Sz, {}));
})();
export {
  kf as L,
  wz as T,
  VA as _,
  __tla,
  _ as e,
  fd as g,
  w as j,
  b as r,
  av as s
};
