var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as x, j as l, e as si } from "./index-DyDp6vqf.js";
import { R as sr, M as Dr, I as ni, S as Ue, D as Ze, a as Ks, H as ze, F as Je, b as St, L as Se, c as Zt, d as ii, C as pt, e as Er, O as Zs, P as Js, W as Fe, U as wr, f as ai, g as oi, h as Jt, T as tt, i as ci, j as li, B as ui, k as di, l as qe, m as hi, n as fi, o as qs, p as As, q as Me, r as mr, V as ge, N as nt, u as lt, s as Mr, t as gi, E as vi, v as pi, w as Ai, x as Re, y as mi, z as $s, _ as xi, A as ms, G as Br, J as en, K as Ei, Q as xe, X as wi, Y as Mi, Z as Ci, $ as Jr, a0 as tn, a1 as Et, a2 as yt, a3 as Di, a4 as ur, a5 as Bi, a6 as V, a7 as rn, a8 as Si, a9 as Ot, aa as qt, ab as Ii, ac as xs, ad as Ti, ae as Es, af as ut, ag as Ve, ah as It, ai as Ct, aj as At, ak as H, al as Rt, am as bt, an as sn, ao as $t, ap as b, aq as ot, ar as yi, as as Pt, at as qr, au as Yr, av as Wr, aw as Ri, ax as er, ay as $r, az as ws, aA as st, aB as bi, aC as nn, aD as an, aE as Pi, aF as Oi, aG as Fi, aH as Ui, aI as Li, aJ as Gi, aK as Vr, aL as Nt, aM as Hi, aN as Ni, aO as zi, aP as ki, aQ as Qi } from "./GamePortfolio-B5FVH52M.js";
const on = parseInt(sr.replace(/\D+/g, ""));
var Xe = Uint8Array, mt = Uint16Array, Xr = Uint32Array, cn = new Xe([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), ln = new Xe([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), ji = new Xe([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), un = function(e3, t) {
  for (var r = new mt(31), s = 0; s < 31; ++s) r[s] = t += 1 << e3[s - 1];
  for (var n = new Xr(r[30]), s = 1; s < 30; ++s) for (var a = r[s]; a < r[s + 1]; ++a) n[a] = a - r[s] << 5 | s;
  return [r, n];
}, dn = un(cn, 2), hn = dn[0], Yi = dn[1];
hn[28] = 258, Yi[258] = 28;
var Wi = un(ln, 0), Vi = Wi[0], _r = new mt(32768);
for (var ve = 0; ve < 32768; ++ve) {
  var ht = (ve & 43690) >>> 1 | (ve & 21845) << 1;
  ht = (ht & 52428) >>> 2 | (ht & 13107) << 2, ht = (ht & 61680) >>> 4 | (ht & 3855) << 4, _r[ve] = ((ht & 65280) >>> 8 | (ht & 255) << 8) >>> 1;
}
var Wt = function(e3, t, r) {
  for (var s = e3.length, n = 0, a = new mt(t); n < s; ++n) ++a[e3[n] - 1];
  var o = new mt(t);
  for (n = 0; n < t; ++n) o[n] = o[n - 1] + a[n - 1] << 1;
  var u;
  if (r) {
    u = new mt(1 << t);
    var h = 15 - t;
    for (n = 0; n < s; ++n) if (e3[n]) for (var f = n << 4 | e3[n], A = t - e3[n], m = o[e3[n] - 1]++ << A, w = m | (1 << A) - 1; m <= w; ++m) u[_r[m] >>> h] = f;
  } else for (u = new mt(s), n = 0; n < s; ++n) e3[n] && (u[n] = _r[o[e3[n] - 1]++] >>> 15 - e3[n]);
  return u;
}, nr = new Xe(288);
for (var ve = 0; ve < 144; ++ve) nr[ve] = 8;
for (var ve = 144; ve < 256; ++ve) nr[ve] = 9;
for (var ve = 256; ve < 280; ++ve) nr[ve] = 7;
for (var ve = 280; ve < 288; ++ve) nr[ve] = 8;
var fn = new Xe(32);
for (var ve = 0; ve < 32; ++ve) fn[ve] = 5;
var Xi = Wt(nr, 9, 1), _i = Wt(fn, 5, 1), yr = function(e3) {
  for (var t = e3[0], r = 1; r < e3.length; ++r) e3[r] > t && (t = e3[r]);
  return t;
}, Ke = function(e3, t, r) {
  var s = t / 8 | 0;
  return (e3[s] | e3[s + 1] << 8) >> (t & 7) & r;
}, Rr = function(e3, t) {
  var r = t / 8 | 0;
  return (e3[r] | e3[r + 1] << 8 | e3[r + 2] << 16) >> (t & 7);
}, Ki = function(e3) {
  return (e3 / 8 | 0) + (e3 & 7 && 1);
}, Zi = function(e3, t, r) {
  (r == null || r > e3.length) && (r = e3.length);
  var s = new (e3 instanceof mt ? mt : e3 instanceof Xr ? Xr : Xe)(r - t);
  return s.set(e3.subarray(t, r)), s;
}, Ji = function(e3, t, r) {
  var s = e3.length;
  if (!s || r && !r.l && s < 5) return t || new Xe(0);
  var n = !t || r, a = !r || r.i;
  r || (r = {}), t || (t = new Xe(s * 3));
  var o = function(ne) {
    var He = t.length;
    if (ne > He) {
      var ke = new Xe(Math.max(He * 2, ne));
      ke.set(t), t = ke;
    }
  }, u = r.f || 0, h = r.p || 0, f = r.b || 0, A = r.l, m = r.d, w = r.m, D = r.n, O = s * 8;
  do {
    if (!A) {
      r.f = u = Ke(e3, h, 1);
      var X = Ke(e3, h + 1, 3);
      if (h += 3, X) if (X == 1) A = Xi, m = _i, w = 9, D = 5;
      else if (X == 2) {
        var P = Ke(e3, h, 31) + 257, Y = Ke(e3, h + 10, 15) + 4, N = P + Ke(e3, h + 5, 31) + 1;
        h += 14;
        for (var W = new Xe(N), se = new Xe(19), E = 0; E < Y; ++E) se[ji[E]] = Ke(e3, h + E * 3, 7);
        h += Y * 3;
        for (var y = yr(se), z = (1 << y) - 1, K = Wt(se, y, 1), E = 0; E < N; ) {
          var Q = K[Ke(e3, h, z)];
          h += Q & 15;
          var j = Q >>> 4;
          if (j < 16) W[E++] = j;
          else {
            var $ = 0, U = 0;
            for (j == 16 ? (U = 3 + Ke(e3, h, 3), h += 2, $ = W[E - 1]) : j == 17 ? (U = 3 + Ke(e3, h, 7), h += 3) : j == 18 && (U = 11 + Ke(e3, h, 127), h += 7); U--; ) W[E++] = $;
          }
        }
        var re = W.subarray(0, P), Z = W.subarray(P);
        w = yr(re), D = yr(Z), A = Wt(re, w, 1), m = Wt(Z, D, 1);
      } else throw "invalid block type";
      else {
        var j = Ki(h) + 4, L = e3[j - 4] | e3[j - 3] << 8, k = j + L;
        if (k > s) {
          if (a) throw "unexpected EOF";
          break;
        }
        n && o(f + L), t.set(e3.subarray(j, k), f), r.b = f += L, r.p = h = k * 8;
        continue;
      }
      if (h > O) {
        if (a) throw "unexpected EOF";
        break;
      }
    }
    n && o(f + 131072);
    for (var Te = (1 << w) - 1, _e = (1 << D) - 1, Le = h; ; Le = h) {
      var $ = A[Rr(e3, h) & Te], ae = $ >>> 4;
      if (h += $ & 15, h > O) {
        if (a) throw "unexpected EOF";
        break;
      }
      if (!$) throw "invalid length/literal";
      if (ae < 256) t[f++] = ae;
      else if (ae == 256) {
        Le = h, A = null;
        break;
      } else {
        var $e = ae - 254;
        if (ae > 264) {
          var E = ae - 257, oe = cn[E];
          $e = Ke(e3, h, (1 << oe) - 1) + hn[E], h += oe;
        }
        var me = m[Rr(e3, h) & _e], Ge = me >>> 4;
        if (!me) throw "invalid distance";
        h += me & 15;
        var Z = Vi[Ge];
        if (Ge > 3) {
          var oe = ln[Ge];
          Z += Rr(e3, h) & (1 << oe) - 1, h += oe;
        }
        if (h > O) {
          if (a) throw "unexpected EOF";
          break;
        }
        n && o(f + 131072);
        for (var wt = f + $e; f < wt; f += 4) t[f] = t[f - Z], t[f + 1] = t[f + 1 - Z], t[f + 2] = t[f + 2 - Z], t[f + 3] = t[f + 3 - Z];
        f = wt;
      }
    }
    r.l = A, r.p = Le, r.b = f, A && (u = 1, r.m = w, r.d = m, r.n = D);
  } while (!u);
  return f == t.length ? t : Zi(t, 0, f);
}, qi = new Xe(0), $i = function(e3) {
  if ((e3[0] & 15) != 8 || e3[0] >>> 4 > 7 || (e3[0] << 8 | e3[1]) % 31) throw "invalid zlib data";
  if (e3[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
function dr(e3, t) {
  return Ji(($i(e3), e3.subarray(2, -4)), t);
}
var ea = typeof TextDecoder < "u" && new TextDecoder(), ta = 0;
try {
  ea.decode(qi, { stream: true }), ta = 1;
} catch {
}
const ra = (e3) => e3 && e3.isCubeTexture;
class sa extends Dr {
  constructor(t, r) {
    var s, n;
    const a = ra(t), u = ((n = a ? (s = t.image[0]) == null ? void 0 : s.width : t.image.width) != null ? n : 1024) / 4, h = Math.floor(Math.log2(u)), f = Math.pow(2, h), A = 3 * Math.max(f, 16 * 7), m = 4 * f, w = [a ? "#define ENVMAP_TYPE_CUBE" : "", `#define CUBEUV_TEXEL_WIDTH ${1 / A}`, `#define CUBEUV_TEXEL_HEIGHT ${1 / m}`, `#define CUBEUV_MAX_MIP ${h}.0`], D = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `, O = w.join(`
`) + `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${on >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, X = { map: { value: t }, height: { value: (r == null ? void 0 : r.height) || 15 }, radius: { value: (r == null ? void 0 : r.radius) || 100 } }, j = new ni(1, 16), L = new Ue({ uniforms: X, fragmentShader: O, vertexShader: D, side: Ze });
    super(j, L);
  }
  set radius(t) {
    this.material.uniforms.radius.value = t;
  }
  get radius() {
    return this.material.uniforms.radius.value;
  }
  set height(t) {
    this.material.uniforms.height.value = t;
  }
  get height() {
    return this.material.uniforms.height.value;
  }
}
class na extends Ks {
  constructor(t) {
    super(t), this.type = ze;
  }
  parse(t) {
    const o = function(E, y) {
      switch (E) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (y || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (y || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (y || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (y || ""));
      }
    }, A = `
`, m = function(E, y, z) {
      y = y || 1024;
      let Q = E.pos, $ = -1, U = 0, re = "", Z = String.fromCharCode.apply(null, new Uint16Array(E.subarray(Q, Q + 128)));
      for (; 0 > ($ = Z.indexOf(A)) && U < y && Q < E.byteLength; ) re += Z, U += Z.length, Q += 128, Z += String.fromCharCode.apply(null, new Uint16Array(E.subarray(Q, Q + 128)));
      return -1 < $ ? (E.pos += U + $ + 1, re + Z.slice(0, $)) : false;
    }, w = function(E) {
      const y = /^#\?(\S+)/, z = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, K = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, Q = /^\s*FORMAT=(\S+)\s*$/, $ = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, U = { valid: 0, string: "", comments: "", programtype: "RGBE", format: "", gamma: 1, exposure: 1, width: 0, height: 0 };
      let re, Z;
      for ((E.pos >= E.byteLength || !(re = m(E))) && o(1, "no header found"), (Z = re.match(y)) || o(3, "bad initial token"), U.valid |= 1, U.programtype = Z[1], U.string += re + `
`; re = m(E), re !== false; ) {
        if (U.string += re + `
`, re.charAt(0) === "#") {
          U.comments += re + `
`;
          continue;
        }
        if ((Z = re.match(z)) && (U.gamma = parseFloat(Z[1])), (Z = re.match(K)) && (U.exposure = parseFloat(Z[1])), (Z = re.match(Q)) && (U.valid |= 2, U.format = Z[1]), (Z = re.match($)) && (U.valid |= 4, U.height = parseInt(Z[1], 10), U.width = parseInt(Z[2], 10)), U.valid & 2 && U.valid & 4) break;
      }
      return U.valid & 2 || o(3, "missing format specifier"), U.valid & 4 || o(3, "missing image size specifier"), U;
    }, D = function(E, y, z) {
      const K = y;
      if (K < 8 || K > 32767 || E[0] !== 2 || E[1] !== 2 || E[2] & 128) return new Uint8Array(E);
      K !== (E[2] << 8 | E[3]) && o(3, "wrong scanline width");
      const Q = new Uint8Array(4 * y * z);
      Q.length || o(4, "unable to allocate buffer space");
      let $ = 0, U = 0;
      const re = 4 * K, Z = new Uint8Array(4), Te = new Uint8Array(re);
      let _e = z;
      for (; _e > 0 && U < E.byteLength; ) {
        U + 4 > E.byteLength && o(1), Z[0] = E[U++], Z[1] = E[U++], Z[2] = E[U++], Z[3] = E[U++], (Z[0] != 2 || Z[1] != 2 || (Z[2] << 8 | Z[3]) != K) && o(3, "bad rgbe scanline format");
        let Le = 0, ae;
        for (; Le < re && U < E.byteLength; ) {
          ae = E[U++];
          const oe = ae > 128;
          if (oe && (ae -= 128), (ae === 0 || Le + ae > re) && o(3, "bad scanline data"), oe) {
            const me = E[U++];
            for (let Ge = 0; Ge < ae; Ge++) Te[Le++] = me;
          } else Te.set(E.subarray(U, U + ae), Le), Le += ae, U += ae;
        }
        const $e = K;
        for (let oe = 0; oe < $e; oe++) {
          let me = 0;
          Q[$] = Te[oe + me], me += K, Q[$ + 1] = Te[oe + me], me += K, Q[$ + 2] = Te[oe + me], me += K, Q[$ + 3] = Te[oe + me], $ += 4;
        }
        _e--;
      }
      return Q;
    }, O = function(E, y, z, K) {
      const Q = E[y + 3], $ = Math.pow(2, Q - 128) / 255;
      z[K + 0] = E[y + 0] * $, z[K + 1] = E[y + 1] * $, z[K + 2] = E[y + 2] * $, z[K + 3] = 1;
    }, X = function(E, y, z, K) {
      const Q = E[y + 3], $ = Math.pow(2, Q - 128) / 255;
      z[K + 0] = St.toHalfFloat(Math.min(E[y + 0] * $, 65504)), z[K + 1] = St.toHalfFloat(Math.min(E[y + 1] * $, 65504)), z[K + 2] = St.toHalfFloat(Math.min(E[y + 2] * $, 65504)), z[K + 3] = St.toHalfFloat(1);
    }, j = new Uint8Array(t);
    j.pos = 0;
    const L = w(j), k = L.width, P = L.height, Y = D(j.subarray(j.pos), k, P);
    let N, W, se;
    switch (this.type) {
      case Je:
        se = Y.length / 4;
        const E = new Float32Array(se * 4);
        for (let z = 0; z < se; z++) O(Y, z * 4, E, z * 4);
        N = E, W = Je;
        break;
      case ze:
        se = Y.length / 4;
        const y = new Uint16Array(se * 4);
        for (let z = 0; z < se; z++) X(Y, z * 4, y, z * 4);
        N = y, W = ze;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return { width: k, height: P, data: N, header: L.string, gamma: L.gamma, exposure: L.exposure, type: W };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, s, n) {
    function a(o, u) {
      switch (o.type) {
        case Je:
        case ze:
          "colorSpace" in o ? o.colorSpace = "srgb-linear" : o.encoding = 3e3, o.minFilter = Se, o.magFilter = Se, o.generateMipmaps = false, o.flipY = true;
          break;
      }
      r && r(o, u);
    }
    return super.load(t, a, s, n);
  }
}
const zt = on >= 152;
class ia extends Ks {
  constructor(t) {
    super(t), this.type = ze;
  }
  parse(t) {
    const y = Math.pow(2.7182818, 2.2);
    function z(i, c) {
      for (var d = 0, g = 0; g < 65536; ++g) (g == 0 || i[g >> 3] & 1 << (g & 7)) && (c[d++] = g);
      for (var v = d - 1; d < 65536; ) c[d++] = 0;
      return v;
    }
    function K(i) {
      for (var c = 0; c < 16384; c++) i[c] = {}, i[c].len = 0, i[c].lit = 0, i[c].p = null;
    }
    const Q = { l: 0, c: 0, lc: 0 };
    function $(i, c, d, g, v) {
      for (; d < i; ) c = c << 8 | vs(g, v), d += 8;
      d -= i, Q.l = c >> d & (1 << i) - 1, Q.c = c, Q.lc = d;
    }
    const U = new Array(59);
    function re(i) {
      for (var c = 0; c <= 58; ++c) U[c] = 0;
      for (var c = 0; c < 65537; ++c) U[i[c]] += 1;
      for (var d = 0, c = 58; c > 0; --c) {
        var g = d + U[c] >> 1;
        U[c] = d, d = g;
      }
      for (var c = 0; c < 65537; ++c) {
        var v = i[c];
        v > 0 && (i[c] = v | U[v]++ << 6);
      }
    }
    function Z(i, c, d, g, v, p, C) {
      for (var M = d, I = 0, S = 0; v <= p; v++) {
        if (M.value - d.value > g) return false;
        $(6, I, S, i, M);
        var T = Q.l;
        if (I = Q.c, S = Q.lc, C[v] = T, T == 63) {
          if (M.value - d.value > g) throw "Something wrong with hufUnpackEncTable";
          $(8, I, S, i, M);
          var B = Q.l + 6;
          if (I = Q.c, S = Q.lc, v + B > p + 1) throw "Something wrong with hufUnpackEncTable";
          for (; B--; ) C[v++] = 0;
          v--;
        } else if (T >= 59) {
          var B = T - 59 + 2;
          if (v + B > p + 1) throw "Something wrong with hufUnpackEncTable";
          for (; B--; ) C[v++] = 0;
          v--;
        }
      }
      re(C);
    }
    function Te(i) {
      return i & 63;
    }
    function _e(i) {
      return i >> 6;
    }
    function Le(i, c, d, g) {
      for (; c <= d; c++) {
        var v = _e(i[c]), p = Te(i[c]);
        if (v >> p) throw "Invalid table entry";
        if (p > 14) {
          var C = g[v >> p - 14];
          if (C.len) throw "Invalid table entry";
          if (C.lit++, C.p) {
            var M = C.p;
            C.p = new Array(C.lit);
            for (var I = 0; I < C.lit - 1; ++I) C.p[I] = M[I];
          } else C.p = new Array(1);
          C.p[C.lit - 1] = c;
        } else if (p) for (var S = 0, I = 1 << 14 - p; I > 0; I--) {
          var C = g[(v << 14 - p) + S];
          if (C.len || C.p) throw "Invalid table entry";
          C.len = p, C.lit = c, S++;
        }
      }
      return true;
    }
    const ae = { c: 0, lc: 0 };
    function $e(i, c, d, g) {
      i = i << 8 | vs(d, g), c += 8, ae.c = i, ae.lc = c;
    }
    const oe = { c: 0, lc: 0 };
    function me(i, c, d, g, v, p, C, M, I, S) {
      if (i == c) {
        g < 8 && ($e(d, g, v, C), d = ae.c, g = ae.lc), g -= 8;
        var T = d >> g, T = new Uint8Array([T])[0];
        if (I.value + T > S) return false;
        for (var B = M[I.value - 1]; T-- > 0; ) M[I.value++] = B;
      } else if (I.value < S) M[I.value++] = i;
      else return false;
      oe.c = d, oe.lc = g;
    }
    function Ge(i) {
      return i & 65535;
    }
    function wt(i) {
      var c = Ge(i);
      return c > 32767 ? c - 65536 : c;
    }
    const ne = { a: 0, b: 0 };
    function He(i, c) {
      var d = wt(i), g = wt(c), v = g, p = d + (v & 1) + (v >> 1), C = p, M = p - v;
      ne.a = C, ne.b = M;
    }
    function ke(i, c) {
      var d = Ge(i), g = Ge(c), v = d - (g >> 1) & 65535, p = g + v - 32768 & 65535;
      ne.a = p, ne.b = v;
    }
    function Dt(i, c, d, g, v, p, C) {
      for (var M = C < 16384, I = d > v ? v : d, S = 1, T; S <= I; ) S <<= 1;
      for (S >>= 1, T = S, S >>= 1; S >= 1; ) {
        for (var B = 0, Ae = B + p * (v - T), F = p * S, G = p * T, _ = g * S, J = g * T, ce, de, Ee, ye; B <= Ae; B += G) {
          for (var he = B, et = B + g * (d - T); he <= et; he += J) {
            var fe = he + _, we = he + F, it = we + _;
            M ? (He(i[he + c], i[we + c]), ce = ne.a, Ee = ne.b, He(i[fe + c], i[it + c]), de = ne.a, ye = ne.b, He(ce, de), i[he + c] = ne.a, i[fe + c] = ne.b, He(Ee, ye), i[we + c] = ne.a, i[it + c] = ne.b) : (ke(i[he + c], i[we + c]), ce = ne.a, Ee = ne.b, ke(i[fe + c], i[it + c]), de = ne.a, ye = ne.b, ke(ce, de), i[he + c] = ne.a, i[fe + c] = ne.b, ke(Ee, ye), i[we + c] = ne.a, i[it + c] = ne.b);
          }
          if (d & S) {
            var we = he + F;
            M ? He(i[he + c], i[we + c]) : ke(i[he + c], i[we + c]), ce = ne.a, i[we + c] = ne.b, i[he + c] = ce;
          }
        }
        if (v & S) for (var he = B, et = B + g * (d - T); he <= et; he += J) {
          var fe = he + _;
          M ? He(i[he + c], i[fe + c]) : ke(i[he + c], i[fe + c]), ce = ne.a, i[fe + c] = ne.b, i[he + c] = ce;
        }
        T = S, S >>= 1;
      }
      return B;
    }
    function ir(i, c, d, g, v, p, C, M, I, S) {
      for (var T = 0, B = 0, Ae = M, F = Math.trunc(v.value + (p + 7) / 8); v.value < F; ) for ($e(T, B, d, v), T = ae.c, B = ae.lc; B >= 14; ) {
        var G = T >> B - 14 & 16383, _ = c[G];
        if (_.len) B -= _.len, me(_.lit, C, T, B, d, g, v, I, S, Ae), T = oe.c, B = oe.lc;
        else {
          if (!_.p) throw "hufDecode issues";
          var J;
          for (J = 0; J < _.lit; J++) {
            for (var ce = Te(i[_.p[J]]); B < ce && v.value < F; ) $e(T, B, d, v), T = ae.c, B = ae.lc;
            if (B >= ce && _e(i[_.p[J]]) == (T >> B - ce & (1 << ce) - 1)) {
              B -= ce, me(_.p[J], C, T, B, d, g, v, I, S, Ae), T = oe.c, B = oe.lc;
              break;
            }
          }
          if (J == _.lit) throw "hufDecode issues";
        }
      }
      var de = 8 - p & 7;
      for (T >>= de, B -= de; B > 0; ) {
        var _ = c[T << 14 - B & 16383];
        if (_.len) B -= _.len, me(_.lit, C, T, B, d, g, v, I, S, Ae), T = oe.c, B = oe.lc;
        else throw "hufDecode issues";
      }
      return true;
    }
    function Pe(i, c, d, g, v, p) {
      var C = { value: 0 }, M = d.value, I = Oe(c, d), S = Oe(c, d);
      d.value += 4;
      var T = Oe(c, d);
      if (d.value += 4, I < 0 || I >= 65537 || S < 0 || S >= 65537) throw "Something wrong with HUF_ENCSIZE";
      var B = new Array(65537), Ae = new Array(16384);
      K(Ae);
      var F = g - (d.value - M);
      if (Z(i, c, d, F, I, S, B), T > 8 * (g - (d.value - M))) throw "Something wrong with hufUncompress";
      Le(B, I, S, Ae), ir(B, Ae, i, c, d, T, S, p, v, C);
    }
    function Ir(i, c, d) {
      for (var g = 0; g < d; ++g) c[g] = i[c[g]];
    }
    function ar(i) {
      for (var c = 1; c < i.length; c++) {
        var d = i[c - 1] + i[c] - 128;
        i[c] = d;
      }
    }
    function or(i, c) {
      for (var d = 0, g = Math.floor((i.length + 1) / 2), v = 0, p = i.length - 1; !(v > p || (c[v++] = i[d++], v > p)); ) c[v++] = i[g++];
    }
    function hs(i) {
      for (var c = i.byteLength, d = new Array(), g = 0, v = new DataView(i); c > 0; ) {
        var p = v.getInt8(g++);
        if (p < 0) {
          var C = -p;
          c -= C + 1;
          for (var M = 0; M < C; M++) d.push(v.getUint8(g++));
        } else {
          var C = p;
          c -= 2;
          for (var I = v.getUint8(g++), M = 0; M < C + 1; M++) d.push(I);
        }
      }
      return d;
    }
    function Rn(i, c, d, g, v, p) {
      var fe = new DataView(p.buffer), C = d[i.idx[0]].width, M = d[i.idx[0]].height, I = 3, S = Math.floor(C / 8), T = Math.ceil(C / 8), B = Math.ceil(M / 8), Ae = C - (T - 1) * 8, F = M - (B - 1) * 8, G = { value: 0 }, _ = new Array(I), J = new Array(I), ce = new Array(I), de = new Array(I), Ee = new Array(I);
      for (let le = 0; le < I; ++le) Ee[le] = c[i.idx[le]], _[le] = le < 1 ? 0 : _[le - 1] + T * B, J[le] = new Float32Array(64), ce[le] = new Uint16Array(64), de[le] = new Uint16Array(T * 64);
      for (let le = 0; le < B; ++le) {
        var ye = 8;
        le == B - 1 && (ye = F);
        var he = 8;
        for (let pe = 0; pe < T; ++pe) {
          pe == T - 1 && (he = Ae);
          for (let ie = 0; ie < I; ++ie) ce[ie].fill(0), ce[ie][0] = v[_[ie]++], bn(G, g, ce[ie]), Pn(ce[ie], J[ie]), On(J[ie]);
          Fn(J);
          for (let ie = 0; ie < I; ++ie) Un(J[ie], de[ie], pe * 64);
        }
        let De = 0;
        for (let pe = 0; pe < I; ++pe) {
          const ie = d[i.idx[pe]].type;
          for (let Ye = 8 * le; Ye < 8 * le + ye; ++Ye) {
            De = Ee[pe][Ye];
            for (let Mt = 0; Mt < S; ++Mt) {
              const Ne = Mt * 64 + (Ye & 7) * 8;
              fe.setUint16(De + 0 * 2 * ie, de[pe][Ne + 0], true), fe.setUint16(De + 1 * 2 * ie, de[pe][Ne + 1], true), fe.setUint16(De + 2 * 2 * ie, de[pe][Ne + 2], true), fe.setUint16(De + 3 * 2 * ie, de[pe][Ne + 3], true), fe.setUint16(De + 4 * 2 * ie, de[pe][Ne + 4], true), fe.setUint16(De + 5 * 2 * ie, de[pe][Ne + 5], true), fe.setUint16(De + 6 * 2 * ie, de[pe][Ne + 6], true), fe.setUint16(De + 7 * 2 * ie, de[pe][Ne + 7], true), De += 8 * 2 * ie;
            }
          }
          if (S != T) for (let Ye = 8 * le; Ye < 8 * le + ye; ++Ye) {
            const Mt = Ee[pe][Ye] + 8 * S * 2 * ie, Ne = S * 64 + (Ye & 7) * 8;
            for (let dt = 0; dt < he; ++dt) fe.setUint16(Mt + dt * 2 * ie, de[pe][Ne + dt], true);
          }
        }
      }
      for (var et = new Uint16Array(C), fe = new DataView(p.buffer), we = 0; we < I; ++we) {
        d[i.idx[we]].decoded = true;
        var it = d[i.idx[we]].type;
        if (d[we].type == 2) for (var Ht = 0; Ht < M; ++Ht) {
          const le = Ee[we][Ht];
          for (var je = 0; je < C; ++je) et[je] = fe.getUint16(le + je * 2 * it, true);
          for (var je = 0; je < C; ++je) fe.setFloat32(le + je * 2 * it, R(et[je]), true);
        }
      }
    }
    function bn(i, c, d) {
      for (var g, v = 1; v < 64; ) g = c[i.value], g == 65280 ? v = 64 : g >> 8 == 255 ? v += g & 255 : (d[v] = g, v++), i.value++;
    }
    function Pn(i, c) {
      c[0] = R(i[0]), c[1] = R(i[1]), c[2] = R(i[5]), c[3] = R(i[6]), c[4] = R(i[14]), c[5] = R(i[15]), c[6] = R(i[27]), c[7] = R(i[28]), c[8] = R(i[2]), c[9] = R(i[4]), c[10] = R(i[7]), c[11] = R(i[13]), c[12] = R(i[16]), c[13] = R(i[26]), c[14] = R(i[29]), c[15] = R(i[42]), c[16] = R(i[3]), c[17] = R(i[8]), c[18] = R(i[12]), c[19] = R(i[17]), c[20] = R(i[25]), c[21] = R(i[30]), c[22] = R(i[41]), c[23] = R(i[43]), c[24] = R(i[9]), c[25] = R(i[11]), c[26] = R(i[18]), c[27] = R(i[24]), c[28] = R(i[31]), c[29] = R(i[40]), c[30] = R(i[44]), c[31] = R(i[53]), c[32] = R(i[10]), c[33] = R(i[19]), c[34] = R(i[23]), c[35] = R(i[32]), c[36] = R(i[39]), c[37] = R(i[45]), c[38] = R(i[52]), c[39] = R(i[54]), c[40] = R(i[20]), c[41] = R(i[22]), c[42] = R(i[33]), c[43] = R(i[38]), c[44] = R(i[46]), c[45] = R(i[51]), c[46] = R(i[55]), c[47] = R(i[60]), c[48] = R(i[21]), c[49] = R(i[34]), c[50] = R(i[37]), c[51] = R(i[47]), c[52] = R(i[50]), c[53] = R(i[56]), c[54] = R(i[59]), c[55] = R(i[61]), c[56] = R(i[35]), c[57] = R(i[36]), c[58] = R(i[48]), c[59] = R(i[49]), c[60] = R(i[57]), c[61] = R(i[58]), c[62] = R(i[62]), c[63] = R(i[63]);
    }
    function On(i) {
      const c = 0.5 * Math.cos(0.7853975), d = 0.5 * Math.cos(3.14159 / 16), g = 0.5 * Math.cos(3.14159 / 8), v = 0.5 * Math.cos(3 * 3.14159 / 16), p = 0.5 * Math.cos(5 * 3.14159 / 16), C = 0.5 * Math.cos(3 * 3.14159 / 8), M = 0.5 * Math.cos(7 * 3.14159 / 16);
      for (var I = new Array(4), S = new Array(4), T = new Array(4), B = new Array(4), Ae = 0; Ae < 8; ++Ae) {
        var F = Ae * 8;
        I[0] = g * i[F + 2], I[1] = C * i[F + 2], I[2] = g * i[F + 6], I[3] = C * i[F + 6], S[0] = d * i[F + 1] + v * i[F + 3] + p * i[F + 5] + M * i[F + 7], S[1] = v * i[F + 1] - M * i[F + 3] - d * i[F + 5] - p * i[F + 7], S[2] = p * i[F + 1] - d * i[F + 3] + M * i[F + 5] + v * i[F + 7], S[3] = M * i[F + 1] - p * i[F + 3] + v * i[F + 5] - d * i[F + 7], T[0] = c * (i[F + 0] + i[F + 4]), T[3] = c * (i[F + 0] - i[F + 4]), T[1] = I[0] + I[3], T[2] = I[1] - I[2], B[0] = T[0] + T[1], B[1] = T[3] + T[2], B[2] = T[3] - T[2], B[3] = T[0] - T[1], i[F + 0] = B[0] + S[0], i[F + 1] = B[1] + S[1], i[F + 2] = B[2] + S[2], i[F + 3] = B[3] + S[3], i[F + 4] = B[3] - S[3], i[F + 5] = B[2] - S[2], i[F + 6] = B[1] - S[1], i[F + 7] = B[0] - S[0];
      }
      for (var G = 0; G < 8; ++G) I[0] = g * i[16 + G], I[1] = C * i[16 + G], I[2] = g * i[48 + G], I[3] = C * i[48 + G], S[0] = d * i[8 + G] + v * i[24 + G] + p * i[40 + G] + M * i[56 + G], S[1] = v * i[8 + G] - M * i[24 + G] - d * i[40 + G] - p * i[56 + G], S[2] = p * i[8 + G] - d * i[24 + G] + M * i[40 + G] + v * i[56 + G], S[3] = M * i[8 + G] - p * i[24 + G] + v * i[40 + G] - d * i[56 + G], T[0] = c * (i[G] + i[32 + G]), T[3] = c * (i[G] - i[32 + G]), T[1] = I[0] + I[3], T[2] = I[1] - I[2], B[0] = T[0] + T[1], B[1] = T[3] + T[2], B[2] = T[3] - T[2], B[3] = T[0] - T[1], i[0 + G] = B[0] + S[0], i[8 + G] = B[1] + S[1], i[16 + G] = B[2] + S[2], i[24 + G] = B[3] + S[3], i[32 + G] = B[3] - S[3], i[40 + G] = B[2] - S[2], i[48 + G] = B[1] - S[1], i[56 + G] = B[0] - S[0];
    }
    function Fn(i) {
      for (var c = 0; c < 64; ++c) {
        var d = i[0][c], g = i[1][c], v = i[2][c];
        i[0][c] = d + 1.5747 * v, i[1][c] = d - 0.1873 * g - 0.4682 * v, i[2][c] = d + 1.8556 * g;
      }
    }
    function Un(i, c, d) {
      for (var g = 0; g < 64; ++g) c[d + g] = St.toHalfFloat(Ln(i[g]));
    }
    function Ln(i) {
      return i <= 1 ? Math.sign(i) * Math.pow(Math.abs(i), 2.2) : Math.sign(i) * Math.pow(y, Math.abs(i) - 1);
    }
    function fs(i) {
      return new DataView(i.array.buffer, i.offset.value, i.size);
    }
    function Gn(i) {
      var c = i.viewer.buffer.slice(i.offset.value, i.offset.value + i.size), d = new Uint8Array(hs(c)), g = new Uint8Array(d.length);
      return ar(d), or(d, g), new DataView(g.buffer);
    }
    function Tr(i) {
      var c = i.array.slice(i.offset.value, i.offset.value + i.size), d = dr(c), g = new Uint8Array(d.length);
      return ar(d), or(d, g), new DataView(g.buffer);
    }
    function Hn(i) {
      for (var c = i.viewer, d = { value: i.offset.value }, g = new Uint16Array(i.width * i.scanlineBlockSize * (i.channels * i.type)), v = new Uint8Array(8192), p = 0, C = new Array(i.channels), M = 0; M < i.channels; M++) C[M] = {}, C[M].start = p, C[M].end = C[M].start, C[M].nx = i.width, C[M].ny = i.lines, C[M].size = i.type, p += C[M].nx * C[M].ny * C[M].size;
      var I = Ut(c, d), S = Ut(c, d);
      if (S >= 8192) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (I <= S) for (var M = 0; M < S - I + 1; M++) v[M + I] = Bt(c, d);
      var T = new Uint16Array(65536), B = z(v, T), Ae = Oe(c, d);
      Pe(i.array, c, d, Ae, g, p);
      for (var M = 0; M < i.channels; ++M) for (var F = C[M], G = 0; G < C[M].size; ++G) Dt(g, F.start + G, F.nx, F.size, F.ny, F.nx * F.size, B);
      Ir(T, g, p);
      for (var _ = 0, J = new Uint8Array(g.buffer.byteLength), ce = 0; ce < i.lines; ce++) for (var de = 0; de < i.channels; de++) {
        var F = C[de], Ee = F.nx * F.size, ye = new Uint8Array(g.buffer, F.end * 2, Ee * 2);
        J.set(ye, _), _ += Ee * 2, F.end += Ee;
      }
      return new DataView(J.buffer);
    }
    function Nn(i) {
      var c = i.array.slice(i.offset.value, i.offset.value + i.size), d = dr(c);
      const g = i.lines * i.channels * i.width, v = i.type == 1 ? new Uint16Array(g) : new Uint32Array(g);
      let p = 0, C = 0;
      const M = new Array(4);
      for (let I = 0; I < i.lines; I++) for (let S = 0; S < i.channels; S++) {
        let T = 0;
        switch (i.type) {
          case 1:
            M[0] = p, M[1] = M[0] + i.width, p = M[1] + i.width;
            for (let B = 0; B < i.width; ++B) {
              const Ae = d[M[0]++] << 8 | d[M[1]++];
              T += Ae, v[C] = T, C++;
            }
            break;
          case 2:
            M[0] = p, M[1] = M[0] + i.width, M[2] = M[1] + i.width, p = M[2] + i.width;
            for (let B = 0; B < i.width; ++B) {
              const Ae = d[M[0]++] << 24 | d[M[1]++] << 16 | d[M[2]++] << 8;
              T += Ae, v[C] = T, C++;
            }
            break;
        }
      }
      return new DataView(v.buffer);
    }
    function gs(i) {
      var c = i.viewer, d = { value: i.offset.value }, g = new Uint8Array(i.width * i.lines * (i.channels * i.type * 2)), v = { version: Qe(c, d), unknownUncompressedSize: Qe(c, d), unknownCompressedSize: Qe(c, d), acCompressedSize: Qe(c, d), dcCompressedSize: Qe(c, d), rleCompressedSize: Qe(c, d), rleUncompressedSize: Qe(c, d), rleRawSize: Qe(c, d), totalAcUncompressedCount: Qe(c, d), totalDcUncompressedCount: Qe(c, d), acCompression: Qe(c, d) };
      if (v.version < 2) throw "EXRLoader.parse: " + Gt.compression + " version " + v.version + " is unsupported";
      for (var p = new Array(), C = Ut(c, d) - 2; C > 0; ) {
        var M = cr(c.buffer, d), I = Bt(c, d), S = I >> 2 & 3, T = (I >> 4) - 1, B = new Int8Array([T])[0], Ae = Bt(c, d);
        p.push({ name: M, index: B, type: Ae, compression: S }), C -= M.length + 3;
      }
      for (var F = Gt.channels, G = new Array(i.channels), _ = 0; _ < i.channels; ++_) {
        var J = G[_] = {}, ce = F[_];
        J.name = ce.name, J.compression = 0, J.decoded = false, J.type = ce.pixelType, J.pLinear = ce.pLinear, J.width = i.width, J.height = i.lines;
      }
      for (var de = { idx: new Array(3) }, Ee = 0; Ee < i.channels; ++Ee) for (var J = G[Ee], _ = 0; _ < p.length; ++_) {
        var ye = p[_];
        J.name == ye.name && (J.compression = ye.compression, ye.index >= 0 && (de.idx[ye.index] = Ee), J.offset = Ee);
      }
      if (v.acCompressedSize > 0) switch (v.acCompression) {
        case 0:
          var fe = new Uint16Array(v.totalAcUncompressedCount);
          Pe(i.array, c, d, v.acCompressedSize, fe, v.totalAcUncompressedCount);
          break;
        case 1:
          var he = i.array.slice(d.value, d.value + v.totalAcUncompressedCount), et = dr(he), fe = new Uint16Array(et.buffer);
          d.value += v.totalAcUncompressedCount;
          break;
      }
      if (v.dcCompressedSize > 0) {
        var we = { array: i.array, offset: d, size: v.dcCompressedSize }, it = new Uint16Array(Tr(we).buffer);
        d.value += v.dcCompressedSize;
      }
      if (v.rleRawSize > 0) {
        var he = i.array.slice(d.value, d.value + v.rleCompressedSize), et = dr(he), Ht = hs(et.buffer);
        d.value += v.rleCompressedSize;
      }
      for (var je = 0, le = new Array(G.length), _ = 0; _ < le.length; ++_) le[_] = new Array();
      for (var De = 0; De < i.lines; ++De) for (var pe = 0; pe < G.length; ++pe) le[pe].push(je), je += G[pe].width * i.type * 2;
      Rn(de, le, G, fe, it, g);
      for (var _ = 0; _ < G.length; ++_) {
        var J = G[_];
        if (!J.decoded) switch (J.compression) {
          case 2:
            for (var ie = 0, Ye = 0, De = 0; De < i.lines; ++De) {
              for (var Mt = le[_][ie], Ne = 0; Ne < J.width; ++Ne) {
                for (var dt = 0; dt < 2 * J.type; ++dt) g[Mt++] = Ht[Ye + dt * J.width * J.height];
                Ye++;
              }
              ie++;
            }
            break;
          case 1:
          default:
            throw "EXRLoader.parse: unsupported channel compression";
        }
      }
      return new DataView(g.buffer);
    }
    function cr(i, c) {
      for (var d = new Uint8Array(i), g = 0; d[c.value + g] != 0; ) g += 1;
      var v = new TextDecoder().decode(d.slice(c.value, c.value + g));
      return c.value = c.value + g + 1, v;
    }
    function zn(i, c, d) {
      var g = new TextDecoder().decode(new Uint8Array(i).slice(c.value, c.value + d));
      return c.value = c.value + d, g;
    }
    function kn(i, c) {
      var d = Ft(i, c), g = Oe(i, c);
      return [d, g];
    }
    function Qn(i, c) {
      var d = Oe(i, c), g = Oe(i, c);
      return [d, g];
    }
    function Ft(i, c) {
      var d = i.getInt32(c.value, true);
      return c.value = c.value + 4, d;
    }
    function Oe(i, c) {
      var d = i.getUint32(c.value, true);
      return c.value = c.value + 4, d;
    }
    function vs(i, c) {
      var d = i[c.value];
      return c.value = c.value + 1, d;
    }
    function Bt(i, c) {
      var d = i.getUint8(c.value);
      return c.value = c.value + 1, d;
    }
    const Qe = function(i, c) {
      let d;
      return "getBigInt64" in DataView.prototype ? d = Number(i.getBigInt64(c.value, true)) : d = i.getUint32(c.value + 4, true) + Number(i.getUint32(c.value, true) << 32), c.value += 8, d;
    };
    function Ce(i, c) {
      var d = i.getFloat32(c.value, true);
      return c.value += 4, d;
    }
    function jn(i, c) {
      return St.toHalfFloat(Ce(i, c));
    }
    function R(i) {
      var c = (i & 31744) >> 10, d = i & 1023;
      return (i >> 15 ? -1 : 1) * (c ? c === 31 ? d ? NaN : 1 / 0 : Math.pow(2, c - 15) * (1 + d / 1024) : 6103515625e-14 * (d / 1024));
    }
    function Ut(i, c) {
      var d = i.getUint16(c.value, true);
      return c.value += 2, d;
    }
    function Yn(i, c) {
      return R(Ut(i, c));
    }
    function Wn(i, c, d, g) {
      for (var v = d.value, p = []; d.value < v + g - 1; ) {
        var C = cr(c, d), M = Ft(i, d), I = Bt(i, d);
        d.value += 3;
        var S = Ft(i, d), T = Ft(i, d);
        p.push({ name: C, pixelType: M, pLinear: I, xSampling: S, ySampling: T });
      }
      return d.value += 1, p;
    }
    function Vn(i, c) {
      var d = Ce(i, c), g = Ce(i, c), v = Ce(i, c), p = Ce(i, c), C = Ce(i, c), M = Ce(i, c), I = Ce(i, c), S = Ce(i, c);
      return { redX: d, redY: g, greenX: v, greenY: p, blueX: C, blueY: M, whiteX: I, whiteY: S };
    }
    function Xn(i, c) {
      var d = ["NO_COMPRESSION", "RLE_COMPRESSION", "ZIPS_COMPRESSION", "ZIP_COMPRESSION", "PIZ_COMPRESSION", "PXR24_COMPRESSION", "B44_COMPRESSION", "B44A_COMPRESSION", "DWAA_COMPRESSION", "DWAB_COMPRESSION"], g = Bt(i, c);
      return d[g];
    }
    function _n(i, c) {
      var d = Oe(i, c), g = Oe(i, c), v = Oe(i, c), p = Oe(i, c);
      return { xMin: d, yMin: g, xMax: v, yMax: p };
    }
    function Kn(i, c) {
      var d = ["INCREASING_Y"], g = Bt(i, c);
      return d[g];
    }
    function Zn(i, c) {
      var d = Ce(i, c), g = Ce(i, c);
      return [d, g];
    }
    function Jn(i, c) {
      var d = Ce(i, c), g = Ce(i, c), v = Ce(i, c);
      return [d, g, v];
    }
    function qn(i, c, d, g, v) {
      if (g === "string" || g === "stringvector" || g === "iccProfile") return zn(c, d, v);
      if (g === "chlist") return Wn(i, c, d, v);
      if (g === "chromaticities") return Vn(i, d);
      if (g === "compression") return Xn(i, d);
      if (g === "box2i") return _n(i, d);
      if (g === "lineOrder") return Kn(i, d);
      if (g === "float") return Ce(i, d);
      if (g === "v2f") return Zn(i, d);
      if (g === "v3f") return Jn(i, d);
      if (g === "int") return Ft(i, d);
      if (g === "rational") return kn(i, d);
      if (g === "timecode") return Qn(i, d);
      if (g === "preview") return d.value += v, "skipped";
      d.value += v;
    }
    function $n(i, c, d) {
      const g = {};
      if (i.getUint32(0, true) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      g.version = i.getUint8(4);
      const v = i.getUint8(5);
      g.spec = { singleTile: !!(v & 2), longName: !!(v & 4), deepFormat: !!(v & 8), multiPart: !!(v & 16) }, d.value = 8;
      for (var p = true; p; ) {
        var C = cr(c, d);
        if (C == 0) p = false;
        else {
          var M = cr(c, d), I = Oe(i, d), S = qn(i, c, d, M, I);
          S === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${M}'.`) : g[C] = S;
        }
      }
      if (v & -5) throw console.error("EXRHeader:", g), "THREE.EXRLoader: provided file is currently unsupported.";
      return g;
    }
    function ei(i, c, d, g, v) {
      const p = { size: 0, viewer: c, array: d, offset: g, width: i.dataWindow.xMax - i.dataWindow.xMin + 1, height: i.dataWindow.yMax - i.dataWindow.yMin + 1, channels: i.channels.length, bytesPerLine: null, lines: null, inputSize: null, type: i.channels[0].pixelType, uncompress: null, getter: null, format: null, [zt ? "colorSpace" : "encoding"]: null };
      switch (i.compression) {
        case "NO_COMPRESSION":
          p.lines = 1, p.uncompress = fs;
          break;
        case "RLE_COMPRESSION":
          p.lines = 1, p.uncompress = Gn;
          break;
        case "ZIPS_COMPRESSION":
          p.lines = 1, p.uncompress = Tr;
          break;
        case "ZIP_COMPRESSION":
          p.lines = 16, p.uncompress = Tr;
          break;
        case "PIZ_COMPRESSION":
          p.lines = 32, p.uncompress = Hn;
          break;
        case "PXR24_COMPRESSION":
          p.lines = 16, p.uncompress = Nn;
          break;
        case "DWAA_COMPRESSION":
          p.lines = 32, p.uncompress = gs;
          break;
        case "DWAB_COMPRESSION":
          p.lines = 256, p.uncompress = gs;
          break;
        default:
          throw "EXRLoader.parse: " + i.compression + " is unsupported";
      }
      if (p.scanlineBlockSize = p.lines, p.type == 1) switch (v) {
        case Je:
          p.getter = Yn, p.inputSize = 2;
          break;
        case ze:
          p.getter = Ut, p.inputSize = 2;
          break;
      }
      else if (p.type == 2) switch (v) {
        case Je:
          p.getter = Ce, p.inputSize = 4;
          break;
        case ze:
          p.getter = jn, p.inputSize = 4;
      }
      else throw "EXRLoader.parse: unsupported pixelType " + p.type + " for " + i.compression + ".";
      p.blockCount = (i.dataWindow.yMax + 1) / p.scanlineBlockSize;
      for (var C = 0; C < p.blockCount; C++) Qe(c, g);
      p.outputChannels = p.channels == 3 ? 4 : p.channels;
      const M = p.width * p.height * p.outputChannels;
      switch (v) {
        case Je:
          p.byteArray = new Float32Array(M), p.channels < p.outputChannels && p.byteArray.fill(1, 0, M);
          break;
        case ze:
          p.byteArray = new Uint16Array(M), p.channels < p.outputChannels && p.byteArray.fill(15360, 0, M);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", v);
          break;
      }
      return p.bytesPerLine = p.width * p.inputSize * p.channels, p.outputChannels == 4 ? p.format = Zt : p.format = ii, zt ? p.colorSpace = "srgb-linear" : p.encoding = 3e3, p;
    }
    const lr = new DataView(t), ti = new Uint8Array(t), Lt = { value: 0 }, Gt = $n(lr, t, Lt), ee = ei(Gt, lr, ti, Lt, this.type), ps = { value: 0 }, ri = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let i = 0; i < ee.height / ee.scanlineBlockSize; i++) {
      const c = Oe(lr, Lt);
      ee.size = Oe(lr, Lt), ee.lines = c + ee.scanlineBlockSize > ee.height ? ee.height - c : ee.scanlineBlockSize;
      const g = ee.size < ee.lines * ee.bytesPerLine ? ee.uncompress(ee) : fs(ee);
      Lt.value += ee.size;
      for (let v = 0; v < ee.scanlineBlockSize; v++) {
        const p = v + i * ee.scanlineBlockSize;
        if (p >= ee.height) break;
        for (let C = 0; C < ee.channels; C++) {
          const M = ri[Gt.channels[C].name];
          for (let I = 0; I < ee.width; I++) {
            ps.value = (v * (ee.channels * ee.width) + C * ee.width + I) * ee.inputSize;
            const S = (ee.height - 1 - p) * (ee.width * ee.outputChannels) + I * ee.outputChannels + M;
            ee.byteArray[S] = ee.getter(g, ps);
          }
        }
      }
    }
    return { header: Gt, width: ee.width, height: ee.height, data: ee.byteArray, format: ee.format, [zt ? "colorSpace" : "encoding"]: ee[zt ? "colorSpace" : "encoding"], type: this.type };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, s, n) {
    function a(o, u) {
      zt ? o.colorSpace = u.colorSpace : o.encoding = u.encoding, o.minFilter = Se, o.magFilter = Se, o.generateMipmaps = false, o.flipY = false, r && r(o, u);
    }
    return super.load(t, a, s, n);
  }
}
const aa = () => parseInt(sr.replace(/\D+/g, "")), oa = aa(), gn = (e3, t, r) => {
  let s;
  switch (e3) {
    case qe:
      s = new Uint8ClampedArray(t * r * 4);
      break;
    case ze:
      s = new Uint16Array(t * r * 4);
      break;
    case di:
      s = new Uint32Array(t * r * 4);
      break;
    case ui:
      s = new Int8Array(t * r * 4);
      break;
    case li:
      s = new Int16Array(t * r * 4);
      break;
    case ci:
      s = new Int32Array(t * r * 4);
      break;
    case Je:
      s = new Float32Array(t * r * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return s;
};
let hr;
const ca = (e3, t, r, s) => {
  if (hr !== void 0) return hr;
  const n = new Fe(1, 1, s);
  t.setRenderTarget(n);
  const a = new Dr(new Js(), new hi({ color: 16777215 }));
  t.render(a, r), t.setRenderTarget(null);
  const o = gn(e3, n.width, n.height);
  return t.readRenderTargetPixels(n, 0, 0, n.width, n.height, o), n.dispose(), a.geometry.dispose(), a.material.dispose(), hr = o[0] !== 0, hr;
};
class es {
  constructor(t) {
    __publicField(this, "_renderer");
    __publicField(this, "_rendererIsDisposable", false);
    __publicField(this, "_material");
    __publicField(this, "_scene");
    __publicField(this, "_camera");
    __publicField(this, "_quad");
    __publicField(this, "_renderTarget");
    __publicField(this, "_width");
    __publicField(this, "_height");
    __publicField(this, "_type");
    __publicField(this, "_colorSpace");
    __publicField(this, "_supportsReadPixels", true);
    __publicField(this, "render", () => {
      this._renderer.setRenderTarget(this._renderTarget);
      try {
        this._renderer.render(this._scene, this._camera);
      } catch (t) {
        throw this._renderer.setRenderTarget(null), t;
      }
      this._renderer.setRenderTarget(null);
    });
    var _a2, _b, _c2, _d, _e, _f, _g, _h, _i2, _j, _k, _l, _m, _n, _o2, _p;
    this._width = t.width, this._height = t.height, this._type = t.type, this._colorSpace = t.colorSpace;
    const r = { format: Zt, depthBuffer: false, stencilBuffer: false, type: this._type, colorSpace: this._colorSpace, anisotropy: ((_a2 = t.renderTargetOptions) == null ? void 0 : _a2.anisotropy) !== void 0 ? (_b = t.renderTargetOptions) == null ? void 0 : _b.anisotropy : 1, generateMipmaps: ((_c2 = t.renderTargetOptions) == null ? void 0 : _c2.generateMipmaps) !== void 0 ? (_d = t.renderTargetOptions) == null ? void 0 : _d.generateMipmaps : false, magFilter: ((_e = t.renderTargetOptions) == null ? void 0 : _e.magFilter) !== void 0 ? (_f = t.renderTargetOptions) == null ? void 0 : _f.magFilter : Se, minFilter: ((_g = t.renderTargetOptions) == null ? void 0 : _g.minFilter) !== void 0 ? (_h = t.renderTargetOptions) == null ? void 0 : _h.minFilter : Se, samples: ((_i2 = t.renderTargetOptions) == null ? void 0 : _i2.samples) !== void 0 ? (_j = t.renderTargetOptions) == null ? void 0 : _j.samples : void 0, wrapS: ((_k = t.renderTargetOptions) == null ? void 0 : _k.wrapS) !== void 0 ? (_l = t.renderTargetOptions) == null ? void 0 : _l.wrapS : pt, wrapT: ((_m = t.renderTargetOptions) == null ? void 0 : _m.wrapT) !== void 0 ? (_n = t.renderTargetOptions) == null ? void 0 : _n.wrapT : pt };
    if (this._material = t.material, t.renderer ? this._renderer = t.renderer : (this._renderer = es.instantiateRenderer(), this._rendererIsDisposable = true), this._scene = new Er(), this._camera = new Zs(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !ca(this._type, this._renderer, this._camera, r)) {
      let s;
      switch (this._type) {
        case ze:
          s = this._renderer.extensions.has("EXT_color_buffer_float") ? Je : void 0;
          break;
      }
      s !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${Je}`), this._type = s) : (this._supportsReadPixels = false, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
    }
    this._quad = new Dr(new Js(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new Fe(this.width, this.height, r), this._renderTarget.texture.mapping = ((_o2 = t.renderTargetOptions) == null ? void 0 : _o2.mapping) !== void 0 ? (_p = t.renderTargetOptions) == null ? void 0 : _p.mapping : wr;
  }
  static instantiateRenderer() {
    const t = new ai();
    return t.setSize(128, 128), t;
  }
  toArray() {
    if (!this._supportsReadPixels) throw new Error("Can't read pixels in this browser");
    const t = gn(this._type, this._width, this._height);
    return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, t), t;
  }
  toDataTexture(t) {
    const r = new oi(this.toArray(), this.width, this.height, Zt, this._type, (t == null ? void 0 : t.mapping) || wr, (t == null ? void 0 : t.wrapS) || pt, (t == null ? void 0 : t.wrapT) || pt, (t == null ? void 0 : t.magFilter) || Se, (t == null ? void 0 : t.minFilter) || Se, (t == null ? void 0 : t.anisotropy) || 1, Jt);
    return r.generateMipmaps = (t == null ? void 0 : t.generateMipmaps) !== void 0 ? t == null ? void 0 : t.generateMipmaps : false, r;
  }
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
  }
  dispose(t) {
    this.disposeOnDemandRenderer(), t && this.renderTarget.dispose(), this.material instanceof Ue && Object.values(this.material.uniforms).forEach((r) => {
      r.value instanceof tt && r.value.dispose();
    }), Object.values(this.material).forEach((r) => {
      r instanceof tt && r.dispose();
    }), this.material.dispose(), this._quad.geometry.dispose();
  }
  get width() {
    return this._width;
  }
  set width(t) {
    this._width = t, this._renderTarget.setSize(this._width, this._height);
  }
  get height() {
    return this._height;
  }
  set height(t) {
    this._height = t, this._renderTarget.setSize(this._width, this._height);
  }
  get renderer() {
    return this._renderer;
  }
  get renderTarget() {
    return this._renderTarget;
  }
  set renderTarget(t) {
    this._renderTarget = t, this._width = t.width, this._height = t.height;
  }
  get material() {
    return this._material;
  }
  get type() {
    return this._type;
  }
  get colorSpace() {
    return this._colorSpace;
  }
}
class vn extends Error {
}
class pn extends Error {
}
const kt = (e3, t, r) => {
  const s = new RegExp(`${t}="([^"]*)"`, "i").exec(e3);
  if (s) return s[1];
  const n = new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i").exec(e3);
  if (n) {
    const a = n[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return a && a.length === 3 ? a.map((o) => o.replace(/<\/?rdf:li>/g, "")) : n[1].trim();
  }
  if (r !== void 0) return r;
  throw new Error(`Can't find ${t} in gainmap metadata`);
}, la = (e3) => {
  let t;
  typeof TextDecoder < "u" ? t = new TextDecoder().decode(e3) : t = e3.toString();
  let r = t.indexOf("<x:xmpmeta");
  for (; r !== -1; ) {
    const s = t.indexOf("x:xmpmeta>", r), n = t.slice(r, s + 10);
    try {
      const a = kt(n, "hdrgm:GainMapMin", "0"), o = kt(n, "hdrgm:GainMapMax"), u = kt(n, "hdrgm:Gamma", "1"), h = kt(n, "hdrgm:OffsetSDR", "0.015625"), f = kt(n, "hdrgm:OffsetHDR", "0.015625"), A = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(n), m = A ? A[1] : "0", w = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(n);
      if (!w) throw new Error("Incomplete gainmap metadata");
      const D = w[1];
      return { gainMapMin: Array.isArray(a) ? a.map((O) => parseFloat(O)) : [parseFloat(a), parseFloat(a), parseFloat(a)], gainMapMax: Array.isArray(o) ? o.map((O) => parseFloat(O)) : [parseFloat(o), parseFloat(o), parseFloat(o)], gamma: Array.isArray(u) ? u.map((O) => parseFloat(O)) : [parseFloat(u), parseFloat(u), parseFloat(u)], offsetSdr: Array.isArray(h) ? h.map((O) => parseFloat(O)) : [parseFloat(h), parseFloat(h), parseFloat(h)], offsetHdr: Array.isArray(f) ? f.map((O) => parseFloat(O)) : [parseFloat(f), parseFloat(f), parseFloat(f)], hdrCapacityMin: parseFloat(m), hdrCapacityMax: parseFloat(D) };
    } catch {
    }
    r = t.indexOf("<x:xmpmeta", s);
  }
};
class ua {
  constructor(t) {
    __publicField(this, "options");
    this.options = { debug: t && t.debug !== void 0 ? t.debug : false, extractFII: t && t.extractFII !== void 0 ? t.extractFII : true, extractNonFII: t && t.extractNonFII !== void 0 ? t.extractNonFII : true };
  }
  extract(t) {
    return new Promise((r, s) => {
      const n = this.options.debug, a = new DataView(t.buffer);
      if (a.getUint16(0) !== 65496) {
        s(new Error("Not a valid jpeg"));
        return;
      }
      const o = a.byteLength;
      let u = 2, h = 0, f;
      for (; u < o; ) {
        if (++h > 250) {
          s(new Error(`Found no marker after ${h} loops \u{1F635}`));
          return;
        }
        if (a.getUint8(u) !== 255) {
          s(new Error(`Not a valid marker at offset 0x${u.toString(16)}, found: 0x${a.getUint8(u).toString(16)}`));
          return;
        }
        if (f = a.getUint8(u + 1), n && console.log(`Marker: ${f.toString(16)}`), f === 226) {
          n && console.log("Found APP2 marker (0xffe2)");
          const A = u + 4;
          if (a.getUint32(A) === 1297106432) {
            const m = A + 4;
            let w;
            if (a.getUint16(m) === 18761) w = false;
            else if (a.getUint16(m) === 19789) w = true;
            else {
              s(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (a.getUint16(m + 2, !w) !== 42) {
              s(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const D = a.getUint32(m + 4, !w);
            if (D < 8) {
              s(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const O = m + D, X = a.getUint16(O, !w), j = O + 2;
            let L = 0;
            for (let N = j; N < j + 12 * X; N += 12) a.getUint16(N, !w) === 45057 && (L = a.getUint32(N + 8, !w));
            const P = O + 2 + X * 12 + 4, Y = [];
            for (let N = P; N < P + L * 16; N += 16) {
              const W = { MPType: a.getUint32(N, !w), size: a.getUint32(N + 4, !w), dataOffset: a.getUint32(N + 8, !w), dependantImages: a.getUint32(N + 12, !w), start: -1, end: -1, isFII: false };
              W.dataOffset ? (W.start = m + W.dataOffset, W.isFII = false) : (W.start = 0, W.isFII = true), W.end = W.start + W.size, Y.push(W);
            }
            if (this.options.extractNonFII && Y.length) {
              const N = new Blob([a]), W = [];
              for (const se of Y) {
                if (se.isFII && !this.options.extractFII) continue;
                const E = N.slice(se.start, se.end + 1, "image/jpeg");
                W.push(E);
              }
              r(W);
            }
          }
        }
        u += 2 + a.getUint16(u + 2);
      }
    });
  }
}
const da = async (e3) => {
  const t = la(e3);
  if (!t) throw new pn("Gain map XMP metadata not found");
  const s = await new ua({ extractFII: true, extractNonFII: true }).extract(e3);
  if (s.length !== 2) throw new vn("Gain map recovery image not found");
  return { sdr: new Uint8Array(await s[0].arrayBuffer()), gainMap: new Uint8Array(await s[1].arrayBuffer()), metadata: t };
}, Ms = (e3) => new Promise((t, r) => {
  const s = document.createElement("img");
  s.onload = () => {
    t(s);
  }, s.onerror = (n) => {
    r(n);
  }, s.src = URL.createObjectURL(e3);
});
class ha extends fi {
  constructor(t, r) {
    super(r);
    __publicField(this, "_renderer");
    __publicField(this, "_renderTargetOptions");
    __publicField(this, "_internalLoadingManager");
    __publicField(this, "_config");
    this._config = t, t.renderer && (this._renderer = t.renderer), this._internalLoadingManager = new qs();
  }
  setRenderer(t) {
    return this._renderer = t, this;
  }
  setRenderTargetOptions(t) {
    return this._renderTargetOptions = t, this;
  }
  prepareQuadRenderer() {
    this._renderer || console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    const t = this._config.createMaterial({ gainMapMax: [1, 1, 1], gainMapMin: [0, 0, 0], gamma: [1, 1, 1], offsetHdr: [1, 1, 1], offsetSdr: [1, 1, 1], hdrCapacityMax: 1, hdrCapacityMin: 0, maxDisplayBoost: 1, gainMap: new tt(), sdr: new tt() });
    return this._config.createQuadRenderer({ width: 16, height: 16, type: ze, colorSpace: Jt, material: t, renderer: this._renderer, renderTargetOptions: this._renderTargetOptions });
  }
  async processImages(t, r, s) {
    const n = r ? new Blob([r], { type: "image/jpeg" }) : void 0, a = new Blob([t], { type: "image/jpeg" });
    let o, u, h = false;
    if (typeof createImageBitmap > "u") {
      const f = await Promise.all([n ? Ms(n) : Promise.resolve(void 0), Ms(a)]);
      u = f[0], o = f[1], h = s === "flipY";
    } else {
      const f = await Promise.all([n ? createImageBitmap(n, { imageOrientation: s || "flipY" }) : Promise.resolve(void 0), createImageBitmap(a, { imageOrientation: s || "flipY" })]);
      u = f[0], o = f[1];
    }
    return { sdrImage: o, gainMapImage: u, needsFlip: h };
  }
  createTextures(t, r, s) {
    const n = new tt(r || new ImageData(2, 2), wr, pt, pt, Se, As, Zt, qe, 1, Jt);
    n.flipY = s, n.needsUpdate = true;
    const a = new tt(t, wr, pt, pt, Se, As, Zt, qe, 1, Me);
    return a.flipY = s, a.needsUpdate = true, { gainMap: n, sdr: a };
  }
  updateQuadRenderer(t, r, s, n, a) {
    t.width = r.width, t.height = r.height, t.material.gainMap = s, t.material.sdr = n, t.material.gainMapMin = a.gainMapMin, t.material.gainMapMax = a.gainMapMax, t.material.offsetHdr = a.offsetHdr, t.material.offsetSdr = a.offsetSdr, t.material.gamma = a.gamma, t.material.hdrCapacityMin = a.hdrCapacityMin, t.material.hdrCapacityMax = a.hdrCapacityMax, t.material.maxDisplayBoost = Math.pow(2, a.hdrCapacityMax), t.material.needsUpdate = true;
  }
}
const fa = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, ga = `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;
class va extends Ue {
  constructor({ gamma: t, offsetHdr: r, offsetSdr: s, gainMapMin: n, gainMapMax: a, maxDisplayBoost: o, hdrCapacityMin: u, hdrCapacityMax: h, sdr: f, gainMap: A }) {
    super({ name: "GainMapDecoderMaterial", vertexShader: fa, fragmentShader: ga, uniforms: { sdr: { value: f }, gainMap: { value: A }, gamma: { value: new ge(1 / t[0], 1 / t[1], 1 / t[2]) }, offsetHdr: { value: new ge().fromArray(r) }, offsetSdr: { value: new ge().fromArray(s) }, gainMapMin: { value: new ge().fromArray(n) }, gainMapMax: { value: new ge().fromArray(a) }, weightFactor: { value: (Math.log2(o) - u) / (h - u) } }, blending: nt, depthTest: false, depthWrite: false });
    __publicField(this, "_maxDisplayBoost");
    __publicField(this, "_hdrCapacityMin");
    __publicField(this, "_hdrCapacityMax");
    this._maxDisplayBoost = o, this._hdrCapacityMin = u, this._hdrCapacityMax = h, this.needsUpdate = true, this.uniformsNeedUpdate = true;
  }
  get sdr() {
    return this.uniforms.sdr.value;
  }
  set sdr(t) {
    this.uniforms.sdr.value = t;
  }
  get gainMap() {
    return this.uniforms.gainMap.value;
  }
  set gainMap(t) {
    this.uniforms.gainMap.value = t;
  }
  get offsetHdr() {
    return this.uniforms.offsetHdr.value.toArray();
  }
  set offsetHdr(t) {
    this.uniforms.offsetHdr.value.fromArray(t);
  }
  get offsetSdr() {
    return this.uniforms.offsetSdr.value.toArray();
  }
  set offsetSdr(t) {
    this.uniforms.offsetSdr.value.fromArray(t);
  }
  get gainMapMin() {
    return this.uniforms.gainMapMin.value.toArray();
  }
  set gainMapMin(t) {
    this.uniforms.gainMapMin.value.fromArray(t);
  }
  get gainMapMax() {
    return this.uniforms.gainMapMax.value.toArray();
  }
  set gainMapMax(t) {
    this.uniforms.gainMapMax.value.fromArray(t);
  }
  get gamma() {
    const t = this.uniforms.gamma.value;
    return [1 / t.x, 1 / t.y, 1 / t.z];
  }
  set gamma(t) {
    const r = this.uniforms.gamma.value;
    r.x = 1 / t[0], r.y = 1 / t[1], r.z = 1 / t[2];
  }
  get hdrCapacityMin() {
    return this._hdrCapacityMin;
  }
  set hdrCapacityMin(t) {
    this._hdrCapacityMin = t, this.calculateWeight();
  }
  get hdrCapacityMax() {
    return this._hdrCapacityMax;
  }
  set hdrCapacityMax(t) {
    this._hdrCapacityMax = t, this.calculateWeight();
  }
  get maxDisplayBoost() {
    return this._maxDisplayBoost;
  }
  set maxDisplayBoost(t) {
    this._maxDisplayBoost = Math.max(1, Math.min(65504, t)), this.calculateWeight();
  }
  calculateWeight() {
    const t = (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) / (this._hdrCapacityMax - this._hdrCapacityMin);
    this.uniforms.weightFactor.value = Math.max(0, Math.min(1, t));
  }
}
class An extends ha {
  constructor(t, r) {
    super({ renderer: t, createMaterial: (s) => new va(s), createQuadRenderer: (s) => new es(s) }, r);
  }
  async render(t, r, s, n) {
    const { sdrImage: a, gainMapImage: o, needsFlip: u } = await this.processImages(s, n, "flipY"), { gainMap: h, sdr: f } = this.createTextures(a, o, u);
    this.updateQuadRenderer(t, a, h, f, r), t.render();
  }
}
class pa extends An {
  load([t, r, s], n, a, o) {
    const u = this.prepareQuadRenderer();
    let h, f, A;
    const m = async () => {
      if (h && f && A) {
        try {
          await this.render(u, A, h, f);
        } catch (y) {
          this.manager.itemError(t), this.manager.itemError(r), this.manager.itemError(s), typeof o == "function" && o(y), u.disposeOnDemandRenderer();
          return;
        }
        typeof n == "function" && n(u), this.manager.itemEnd(t), this.manager.itemEnd(r), this.manager.itemEnd(s), u.disposeOnDemandRenderer();
      }
    };
    let w = true, D = 0, O = 0, X = true, j = 0, L = 0, k = true, P = 0, Y = 0;
    const N = () => {
      if (typeof a == "function") {
        const y = D + j + P, z = O + L + Y, K = w && X && k;
        a(new ProgressEvent("progress", { lengthComputable: K, loaded: z, total: y }));
      }
    };
    this.manager.itemStart(t), this.manager.itemStart(r), this.manager.itemStart(s);
    const W = new mr(this._internalLoadingManager);
    W.setResponseType("arraybuffer"), W.setRequestHeader(this.requestHeader), W.setPath(this.path), W.setWithCredentials(this.withCredentials), W.load(t, async (y) => {
      if (typeof y == "string") throw new Error("Invalid sdr buffer");
      h = y, await m();
    }, (y) => {
      w = y.lengthComputable, O = y.loaded, D = y.total, N();
    }, (y) => {
      this.manager.itemError(t), typeof o == "function" && o(y);
    });
    const se = new mr(this._internalLoadingManager);
    se.setResponseType("arraybuffer"), se.setRequestHeader(this.requestHeader), se.setPath(this.path), se.setWithCredentials(this.withCredentials), se.load(r, async (y) => {
      if (typeof y == "string") throw new Error("Invalid gainmap buffer");
      f = y, await m();
    }, (y) => {
      X = y.lengthComputable, L = y.loaded, j = y.total, N();
    }, (y) => {
      this.manager.itemError(r), typeof o == "function" && o(y);
    });
    const E = new mr(this._internalLoadingManager);
    return E.setRequestHeader(this.requestHeader), E.setPath(this.path), E.setWithCredentials(this.withCredentials), E.load(s, async (y) => {
      if (typeof y != "string") throw new Error("Invalid metadata string");
      A = JSON.parse(y), await m();
    }, (y) => {
      k = y.lengthComputable, Y = y.loaded, P = y.total, N();
    }, (y) => {
      this.manager.itemError(s), typeof o == "function" && o(y);
    }), u;
  }
}
class Aa extends An {
  load(t, r, s, n) {
    const a = this.prepareQuadRenderer(), o = new mr(this._internalLoadingManager);
    return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(this.withCredentials), this.manager.itemStart(t), o.load(t, async (u) => {
      if (typeof u == "string") throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const h = new Uint8Array(u);
      let f, A, m;
      try {
        const w = await da(h);
        f = w.sdr, A = w.gainMap, m = w.metadata;
      } catch (w) {
        if (w instanceof pn || w instanceof vn) console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), m = { gainMapMin: [0, 0, 0], gainMapMax: [1, 1, 1], gamma: [1, 1, 1], hdrCapacityMin: 0, hdrCapacityMax: 1, offsetHdr: [0, 0, 0], offsetSdr: [0, 0, 0] }, f = h;
        else throw w;
      }
      try {
        await this.render(a, m, f.buffer, A == null ? void 0 : A.buffer);
      } catch (w) {
        this.manager.itemError(t), typeof n == "function" && n(w), a.disposeOnDemandRenderer();
        return;
      }
      typeof r == "function" && r(a), this.manager.itemEnd(t), a.disposeOnDemandRenderer();
    }, s, (u) => {
      this.manager.itemError(t), typeof n == "function" && n(u);
    }), a;
  }
}
const tr = { apartment: "lebombo_1k.hdr", city: "potsdamer_platz_1k.hdr", dawn: "kiara_1_dawn_1k.hdr", forest: "forest_slope_1k.hdr", lobby: "st_fagans_interior_1k.hdr", night: "dikhololo_night_1k.hdr", park: "rooitou_park_1k.hdr", studio: "studio_small_03_1k.hdr", sunset: "venice_sunset_1k.hdr", warehouse: "empty_warehouse_01_1k.hdr" }, mn = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", Tt = (e3) => Array.isArray(e3), ts = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function Sr({ files: e3 = ts, path: t = "", preset: r = void 0, colorSpace: s = void 0, extensions: n } = {}) {
  r && (rs(r), e3 = tr[r], t = mn);
  const a = Tt(e3), { extension: o, isCubemap: u } = ss(e3), h = ns(o);
  if (!h) throw new Error("useEnvironment: Unrecognized file extension: " + e3);
  const f = lt((D) => D.gl);
  x.useLayoutEffect(() => {
    if (o !== "webp" && o !== "jpg" && o !== "jpeg") return;
    function D() {
      Mr.clear(h, a ? [e3] : e3);
    }
    f.domElement.addEventListener("webglcontextlost", D, { once: true });
  }, [e3, f.domElement]);
  const A = Mr(h, a ? [e3] : e3, (D) => {
    (o === "webp" || o === "jpg" || o === "jpeg") && D.setRenderer(f), D.setPath == null || D.setPath(t), n && n(D);
  });
  let m = a ? A[0] : A;
  if (o === "jpg" || o === "jpeg" || o === "webp") {
    var w;
    m = (w = m.renderTarget) == null ? void 0 : w.texture;
  }
  return m.mapping = u ? gi : vi, m.colorSpace = s ?? (u ? "srgb" : "srgb-linear"), m;
}
const ma = { files: ts, path: "", preset: void 0, extensions: void 0 };
Sr.preload = (e3) => {
  const t = { ...ma, ...e3 };
  let { files: r, path: s = "" } = t;
  const { preset: n, extensions: a } = t;
  n && (rs(n), r = tr[n], s = mn);
  const { extension: o } = ss(r);
  if (o === "webp" || o === "jpg" || o === "jpeg") throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const u = ns(o);
  if (!u) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  Mr.preload(u, Tt(r) ? [r] : r, (h) => {
    h.setPath == null || h.setPath(s), a && a(h);
  });
};
const xa = { files: ts, preset: void 0 };
Sr.clear = (e3) => {
  const t = { ...xa, ...e3 };
  let { files: r } = t;
  const { preset: s } = t;
  s && (rs(s), r = tr[s]);
  const { extension: n } = ss(r), a = ns(n);
  if (!a) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  Mr.clear(a, Tt(r) ? [r] : r);
};
function rs(e3) {
  if (!(e3 in tr)) throw new Error("Preset must be one of: " + Object.keys(tr).join(", "));
}
function ss(e3) {
  var t;
  const r = Tt(e3) && e3.length === 6, s = Tt(e3) && e3.length === 3 && e3.some((o) => o.endsWith("json")), n = Tt(e3) ? e3[0] : e3;
  return { extension: r ? "cube" : s ? "webp" : n.startsWith("data:application/exr") ? "exr" : n.startsWith("data:application/hdr") ? "hdr" : n.startsWith("data:image/jpeg") ? "jpg" : (t = n.split(".").pop()) == null || (t = t.split("?")) == null || (t = t.shift()) == null ? void 0 : t.toLowerCase(), isCubemap: r, isGainmap: s };
}
function ns(e3) {
  return e3 === "cube" ? pi : e3 === "hdr" ? na : e3 === "exr" ? ia : e3 === "jpg" || e3 === "jpeg" ? Aa : e3 === "webp" ? pa : null;
}
const Ea = (e3) => e3.current && e3.current.isScene, wa = (e3) => Ea(e3) ? e3.current : e3;
function is(e3, t, r, s, n = {}) {
  var a, o, u, h;
  n = { backgroundBlurriness: 0, backgroundIntensity: 1, backgroundRotation: [0, 0, 0], environmentIntensity: 1, environmentRotation: [0, 0, 0], ...n };
  const f = wa(t || r), A = f.background, m = f.environment, w = { backgroundBlurriness: f.backgroundBlurriness, backgroundIntensity: f.backgroundIntensity, backgroundRotation: (a = (o = f.backgroundRotation) == null || o.clone == null ? void 0 : o.clone()) !== null && a !== void 0 ? a : [0, 0, 0], environmentIntensity: f.environmentIntensity, environmentRotation: (u = (h = f.environmentRotation) == null || h.clone == null ? void 0 : h.clone()) !== null && u !== void 0 ? u : [0, 0, 0] };
  return e3 !== "only" && (f.environment = s), e3 && (f.background = s), ms(f, n), () => {
    e3 !== "only" && (f.environment = m), e3 && (f.background = A), ms(f, w);
  };
}
function as({ scene: e3, background: t = false, map: r, ...s }) {
  const n = lt((a) => a.scene);
  return x.useLayoutEffect(() => {
    if (r) return is(t, e3, n, r, s);
  }), null;
}
function xn({ background: e3 = false, scene: t, blur: r, backgroundBlurriness: s, backgroundIntensity: n, backgroundRotation: a, environmentIntensity: o, environmentRotation: u, ...h }) {
  const f = Sr(h), A = lt((m) => m.scene);
  return x.useLayoutEffect(() => is(e3, t, A, f, { backgroundBlurriness: r ?? s, backgroundIntensity: n, backgroundRotation: a, environmentIntensity: o, environmentRotation: u })), x.useEffect(() => () => {
    f.dispose();
  }, [f]), null;
}
function Ma({ children: e3, near: t = 0.1, far: r = 1e3, resolution: s = 256, frames: n = 1, map: a, background: o = false, blur: u, backgroundBlurriness: h, backgroundIntensity: f, backgroundRotation: A, environmentIntensity: m, environmentRotation: w, scene: D, files: O, path: X, preset: j = void 0, extensions: L }) {
  const k = lt((E) => E.gl), P = lt((E) => E.scene), Y = x.useRef(null), [N] = x.useState(() => new Er()), W = x.useMemo(() => {
    const E = new Ai(s);
    return E.texture.type = ze, E;
  }, [s]);
  x.useEffect(() => () => {
    W.dispose();
  }, [W]), x.useLayoutEffect(() => {
    if (n === 1) {
      const E = k.autoClear;
      k.autoClear = true, Y.current.update(k, N), k.autoClear = E;
    }
    return is(o, D, P, W.texture, { backgroundBlurriness: u ?? h, backgroundIntensity: f, backgroundRotation: A, environmentIntensity: m, environmentRotation: w });
  }, [e3, N, W.texture, D, P, o, n, k]);
  let se = 1;
  return Re(() => {
    if (n === 1 / 0 || se < n) {
      const E = k.autoClear;
      k.autoClear = true, Y.current.update(k, N), k.autoClear = E, se++;
    }
  }), x.createElement(x.Fragment, null, mi(x.createElement(x.Fragment, null, e3, x.createElement("cubeCamera", { ref: Y, args: [t, r, W] }), O || j ? x.createElement(xn, { background: true, files: O, preset: j, path: X, extensions: L }) : a ? x.createElement(as, { background: true, map: a, extensions: L }) : null), N));
}
function Ca(e3) {
  var t, r, s, n;
  const a = Sr(e3), o = e3.map || a;
  x.useMemo(() => $s({ GroundProjectedEnvImpl: sa }), []), x.useEffect(() => () => {
    a.dispose();
  }, [a]);
  const u = x.useMemo(() => [o], [o]), h = (t = e3.ground) == null ? void 0 : t.height, f = (r = e3.ground) == null ? void 0 : r.radius, A = (s = (n = e3.ground) == null ? void 0 : n.scale) !== null && s !== void 0 ? s : 1e3;
  return x.createElement(x.Fragment, null, x.createElement(as, xi({}, e3, { map: o })), x.createElement("groundProjectedEnvImpl", { args: u, scale: A, height: h, radius: f }));
}
function Da(e3) {
  return e3.ground ? x.createElement(Ca, e3) : e3.map ? x.createElement(as, e3) : e3.children ? x.createElement(Ma, e3) : x.createElement(xn, e3);
}
class Ba extends Ue {
  constructor() {
    super({ uniforms: { time: { value: 0 }, fade: { value: 1 } }, vertexShader: `
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`, fragmentShader: `
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${oa >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
      }` });
  }
}
const Sa = (e3) => new ge().setFromSpherical(new Ei(e3, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI)), Ia = x.forwardRef(({ radius: e3 = 100, depth: t = 50, count: r = 5e3, saturation: s = 0, factor: n = 4, fade: a = false, speed: o = 1 }, u) => {
  const h = x.useRef(null), [f, A, m] = x.useMemo(() => {
    const D = [], O = [], X = Array.from({ length: r }, () => (0.5 + 0.5 * Math.random()) * n), j = new Br();
    let L = e3 + t;
    const k = t / r;
    for (let P = 0; P < r; P++) L -= k * Math.random(), D.push(...Sa(L).toArray()), j.setHSL(P / r, s, 0.9), O.push(j.r, j.g, j.b);
    return [new Float32Array(D), new Float32Array(O), new Float32Array(X)];
  }, [r, t, n, e3, s]);
  Re((D) => h.current && (h.current.uniforms.time.value = D.clock.elapsedTime * o));
  const [w] = x.useState(() => new Ba());
  return x.createElement("points", { ref: u }, x.createElement("bufferGeometry", null, x.createElement("bufferAttribute", { attach: "attributes-position", args: [f, 3] }), x.createElement("bufferAttribute", { attach: "attributes-color", args: [A, 3] }), x.createElement("bufferAttribute", { attach: "attributes-size", args: [m, 1] })), x.createElement("primitive", { ref: h, object: w, attach: "material", blending: en, "uniforms-fade-value": a, depthWrite: false, transparent: true, vertexColors: true }));
});
/**
* postprocessing v6.39.1 build Fri Apr 17 2026
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2026 Raoul van Rüschen
* @license Zlib
*/
var Ta = (() => {
  const e3 = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), t = new Float32Array([0, 0, 2, 0, 0, 2]), r = new Ot();
  return r.setAttribute("position", new qt(e3, 3)), r.setAttribute("uv", new qt(t, 2)), r;
})(), be = class Kr {
  static get fullscreenGeometry() {
    return Ta;
  }
  constructor(t = "Pass", r = new Er(), s = new Zs()) {
    this.name = t, this.renderer = null, this.scene = r, this.camera = s, this.screen = null, this.rtt = true, this.needsSwap = true, this.needsDepthBlit = false, this.needsDepthTexture = false, this.enabled = true;
  }
  get renderToScreen() {
    return !this.rtt;
  }
  set renderToScreen(t) {
    if (this.rtt === t) {
      const r = this.fullscreenMaterial;
      r !== null && (r.needsUpdate = true), this.rtt = !t;
    }
  }
  set mainScene(t) {
  }
  set mainCamera(t) {
  }
  setRenderer(t) {
    this.renderer = t;
  }
  isEnabled() {
    return this.enabled;
  }
  setEnabled(t) {
    this.enabled = t;
  }
  get fullscreenMaterial() {
    return this.screen !== null ? this.screen.material : null;
  }
  set fullscreenMaterial(t) {
    let r = this.screen;
    r !== null ? r.material = t : (r = new Dr(Kr.fullscreenGeometry, t), r.frustumCulled = false, this.scene === null && (this.scene = new Er()), this.scene.add(r), this.screen = r);
  }
  getFullscreenMaterial() {
    return this.fullscreenMaterial;
  }
  setFullscreenMaterial(t) {
    this.fullscreenMaterial = t;
  }
  getDepthTexture() {
    return null;
  }
  setDepthTexture(t, r = Et) {
  }
  render(t, r, s, n, a) {
    throw new Error("Render method not implemented!");
  }
  setSize(t, r) {
  }
  initialize(t, r, s) {
  }
  dispose() {
    for (const t of Object.keys(this)) {
      const r = this[t];
      (r instanceof Fe || r instanceof rn || r instanceof tt || r instanceof Kr) && this[t].dispose();
    }
    this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
  }
}, ya = class extends be {
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = false;
  }
  render(e3, t, r, s, n) {
    const a = e3.state.buffers.stencil;
    a.setLocked(false), a.setTest(false);
  }
}, Ra = `#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`, En = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", wn = class extends Ue {
  constructor() {
    super({ name: "CopyMaterial", defines: { COLOR_SPACE_CONVERSION: "1", DEPTH_PACKING: "0", COLOR_WRITE: "1" }, uniforms: { inputBuffer: new V(null), depthBuffer: new V(null), channelWeights: new V(null), opacity: new V(1) }, blending: nt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Ra, vertexShader: En }), this.depthFunc = Ii;
  }
  get inputBuffer() {
    return this.uniforms.inputBuffer.value;
  }
  set inputBuffer(e3) {
    const t = e3 !== null;
    this.colorWrite !== t && (t ? this.defines.COLOR_WRITE = true : delete this.defines.COLOR_WRITE, this.colorWrite = t, this.needsUpdate = true), this.uniforms.inputBuffer.value = e3;
  }
  get depthBuffer() {
    return this.uniforms.depthBuffer.value;
  }
  set depthBuffer(e3) {
    const t = e3 !== null;
    this.depthWrite !== t && (t ? this.defines.DEPTH_WRITE = true : delete this.defines.DEPTH_WRITE, this.depthTest = t, this.depthWrite = t, this.needsUpdate = true), this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  get colorSpaceConversion() {
    return this.defines.COLOR_SPACE_CONVERSION !== void 0;
  }
  set colorSpaceConversion(e3) {
    this.colorSpaceConversion !== e3 && (e3 ? this.defines.COLOR_SPACE_CONVERSION = true : delete this.defines.COLOR_SPACE_CONVERSION, this.needsUpdate = true);
  }
  get channelWeights() {
    return this.uniforms.channelWeights.value;
  }
  set channelWeights(e3) {
    e3 !== null ? (this.defines.USE_WEIGHTS = "1", this.uniforms.channelWeights.value = e3) : delete this.defines.USE_WEIGHTS, this.needsUpdate = true;
  }
  setInputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  getOpacity(e3) {
    return this.uniforms.opacity.value;
  }
  setOpacity(e3) {
    this.uniforms.opacity.value = e3;
  }
}, ba = class extends be {
  constructor(e3, t = true) {
    super("CopyPass"), this.fullscreenMaterial = new wn(), this.needsSwap = false, this.renderTarget = e3, e3 === void 0 && (this.renderTarget = new Fe(1, 1, { minFilter: Se, magFilter: Se, stencilBuffer: false, depthBuffer: false }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = t;
  }
  get resize() {
    return this.autoResize;
  }
  set resize(e3) {
    this.autoResize = e3;
  }
  get texture() {
    return this.renderTarget.texture;
  }
  getTexture() {
    return this.renderTarget.texture;
  }
  setAutoResizeEnabled(e3) {
    this.autoResize = e3;
  }
  render(e3, t, r, s, n) {
    this.fullscreenMaterial.inputBuffer = t.texture, e3.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e3.render(this.scene, this.camera);
  }
  setSize(e3, t) {
    this.autoResize && this.renderTarget.setSize(e3, t);
  }
  initialize(e3, t, r) {
    r !== void 0 && (this.renderTarget.texture.type = r, r !== qe ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : e3 !== null && e3.outputColorSpace === Me && (this.renderTarget.texture.colorSpace = Me));
  }
}, Cs = new Br(), os = class extends be {
  constructor(e3 = true, t = true, r = false) {
    super("ClearPass", null, null), this.needsSwap = false, this.color = e3, this.depth = t, this.stencil = r, this.overrideClearColor = null, this.overrideClearAlpha = -1;
  }
  setClearFlags(e3, t, r) {
    this.color = e3, this.depth = t, this.stencil = r;
  }
  getOverrideClearColor() {
    return this.overrideClearColor;
  }
  setOverrideClearColor(e3) {
    this.overrideClearColor = e3;
  }
  getOverrideClearAlpha() {
    return this.overrideClearAlpha;
  }
  setOverrideClearAlpha(e3) {
    this.overrideClearAlpha = e3;
  }
  render(e3, t, r, s, n) {
    const a = this.overrideClearColor, o = this.overrideClearAlpha, u = e3.getClearAlpha(), h = a !== null, f = o >= 0;
    h ? (e3.getClearColor(Cs), e3.setClearColor(a, f ? o : u)) : f && e3.setClearAlpha(o), e3.setRenderTarget(this.renderToScreen ? null : t), e3.clear(this.color, this.depth, this.stencil), h ? e3.setClearColor(Cs, u) : f && e3.setClearAlpha(u);
  }
}, Pa = class extends be {
  constructor(e3, t) {
    super("MaskPass", e3, t), this.needsSwap = false, this.clearPass = new os(false, false, true), this.inverse = false;
  }
  set mainScene(e3) {
    this.scene = e3;
  }
  set mainCamera(e3) {
    this.camera = e3;
  }
  get inverted() {
    return this.inverse;
  }
  set inverted(e3) {
    this.inverse = e3;
  }
  get clear() {
    return this.clearPass.enabled;
  }
  set clear(e3) {
    this.clearPass.enabled = e3;
  }
  getClearPass() {
    return this.clearPass;
  }
  isInverted() {
    return this.inverted;
  }
  setInverted(e3) {
    this.inverted = e3;
  }
  render(e3, t, r, s, n) {
    const a = e3.getContext(), o = e3.state.buffers, u = this.scene, h = this.camera, f = this.clearPass, A = this.inverted ? 0 : 1, m = 1 - A;
    o.color.setMask(false), o.depth.setMask(false), o.color.setLocked(true), o.depth.setLocked(true), o.stencil.setTest(true), o.stencil.setOp(a.REPLACE, a.REPLACE, a.REPLACE), o.stencil.setFunc(a.ALWAYS, A, 4294967295), o.stencil.setClear(m), o.stencil.setLocked(true), this.clearPass.enabled && (this.renderToScreen ? f.render(e3, null) : (f.render(e3, t), f.render(e3, r))), this.renderToScreen ? (e3.setRenderTarget(null), e3.render(u, h)) : (e3.setRenderTarget(t), e3.render(u, h), e3.setRenderTarget(r), e3.render(u, h)), o.color.setLocked(false), o.depth.setLocked(false), o.stencil.setLocked(false), o.stencil.setFunc(a.EQUAL, 1, 4294967295), o.stencil.setOp(a.KEEP, a.KEEP, a.KEEP), o.stencil.setLocked(true);
  }
}, br = 1 / 1e3, Oa = 1e3, Fa = class {
  constructor() {
    this.startTime = performance.now(), this.previousTime = 0, this.currentTime = 0, this._delta = 0, this._elapsed = 0, this._fixedDelta = 1e3 / 60, this.timescale = 1, this.useFixedDelta = false, this._autoReset = false;
  }
  get autoReset() {
    return this._autoReset;
  }
  set autoReset(e3) {
    typeof document < "u" && document.hidden !== void 0 && (e3 ? document.addEventListener("visibilitychange", this) : document.removeEventListener("visibilitychange", this), this._autoReset = e3);
  }
  get delta() {
    return this._delta * br;
  }
  get fixedDelta() {
    return this._fixedDelta * br;
  }
  set fixedDelta(e3) {
    this._fixedDelta = e3 * Oa;
  }
  get elapsed() {
    return this._elapsed * br;
  }
  update(e3) {
    this.useFixedDelta ? this._delta = this.fixedDelta : (this.previousTime = this.currentTime, this.currentTime = (e3 !== void 0 ? e3 : performance.now()) - this.startTime, this._delta = this.currentTime - this.previousTime), this._delta *= this.timescale, this._elapsed += this._delta;
  }
  reset() {
    this._delta = 0, this._elapsed = 0, this.currentTime = performance.now() - this.startTime;
  }
  getDelta() {
    return this.delta;
  }
  getElapsed() {
    return this.elapsed;
  }
  handleEvent(e3) {
    document.hidden || (this.currentTime = performance.now() - this.startTime);
  }
  dispose() {
    this.autoReset = false;
  }
}, Ua = class {
  constructor(e3 = null, { depthBuffer: t = true, stencilBuffer: r = false, multisampling: s = 0, frameBufferType: n } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(t, r, n, s), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new ba(), this.depthTexture = null, this.depthRenderTarget = null, this.passes = [], this.timer = new Fa(), this.autoRenderToScreen = true, this.setRenderer(e3);
  }
  get multisampling() {
    return this.inputBuffer.samples;
  }
  set multisampling(e3) {
    const t = this.inputBuffer, r = this.multisampling;
    r > 0 && e3 > 0 ? (this.inputBuffer.samples = e3, this.outputBuffer.samples = e3, this.inputBuffer.dispose(), this.outputBuffer.dispose()) : r !== e3 && (this.inputBuffer.dispose(), this.outputBuffer.dispose(), this.inputBuffer = this.createBuffer(t.depthBuffer, t.stencilBuffer, t.texture.type, e3), this.outputBuffer = this.inputBuffer.clone());
  }
  getTimer() {
    return this.timer;
  }
  getRenderer() {
    return this.renderer;
  }
  setRenderer(e3) {
    if (this.renderer = e3, e3 !== null) {
      const t = e3.getSize(new xe()), r = e3.getContext().getContextAttributes().alpha, s = this.inputBuffer.texture.type;
      s === qe && e3.outputColorSpace === Me && (this.inputBuffer.texture.colorSpace = Me, this.outputBuffer.texture.colorSpace = Me, this.inputBuffer.dispose(), this.outputBuffer.dispose()), e3.autoClear = false, this.setSize(t.width, t.height);
      for (const n of this.passes) n.initialize(e3, r, s);
    }
  }
  replaceRenderer(e3, t = true) {
    const r = this.renderer, s = r.domElement.parentNode;
    return this.setRenderer(e3), t && s !== null && (s.removeChild(r.domElement), s.appendChild(e3.domElement)), r;
  }
  createDepthTexture() {
    const e3 = this.inputBuffer, t = new wi();
    this.depthTexture = t, e3.stencilBuffer ? (t.format = Mi, t.type = Ci) : t.type = Je;
    const r = t.clone();
    return r.name = "EffectComposer.StableDepth", this.depthRenderTarget = new Fe(e3.width, e3.height, { depthBuffer: true, stencilBuffer: e3.stencilBuffer, depthTexture: r }), r;
  }
  blitDepthBuffer(e3) {
    const t = this.renderer, r = this.depthRenderTarget, s = t.properties, n = t.getContext();
    t.setRenderTarget(r);
    const a = s.get(e3).__webglFramebuffer, o = s.get(r).__webglFramebuffer, u = e3.stencilBuffer ? n.DEPTH_BUFFER_BIT | n.STENCIL_BUFFER_BIT : n.DEPTH_BUFFER_BIT;
    n.bindFramebuffer(n.READ_FRAMEBUFFER, a), n.bindFramebuffer(n.DRAW_FRAMEBUFFER, o), n.blitFramebuffer(0, 0, e3.width, e3.height, 0, 0, r.width, r.height, u, n.NEAREST), n.bindFramebuffer(n.READ_FRAMEBUFFER, null), n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), t.setRenderTarget(null);
  }
  deleteDepthTexture() {
    if (this.depthTexture !== null) {
      this.depthTexture.dispose(), this.depthTexture = null, this.depthRenderTarget.dispose(), this.depthRenderTarget = null, this.inputBuffer.depthTexture = null, this.outputBuffer.depthTexture = null;
      for (const e3 of this.passes) e3.setDepthTexture(null);
    }
  }
  createBuffer(e3, t, r, s) {
    const n = this.renderer, a = n === null ? new xe() : n.getDrawingBufferSize(new xe()), o = { minFilter: Se, magFilter: Se, stencilBuffer: t, depthBuffer: e3, type: r }, u = new Fe(a.width, a.height, o);
    return s > 0 && (u.samples = s), r === qe && n !== null && n.outputColorSpace === Me && (u.texture.colorSpace = Me), u.texture.name = "EffectComposer.Buffer", u.texture.generateMipmaps = false, u;
  }
  setMainScene(e3) {
    for (const t of this.passes) t.mainScene = e3;
  }
  setMainCamera(e3) {
    for (const t of this.passes) t.mainCamera = e3;
  }
  addPass(e3, t) {
    const r = this.passes, s = this.renderer, n = s.getDrawingBufferSize(new xe()), a = s.getContext().getContextAttributes().alpha, o = this.inputBuffer.texture.type;
    if (e3.renderer = s, e3.setSize(n.width, n.height), e3.initialize(s, a, o), this.autoRenderToScreen && (r.length > 0 && (r[r.length - 1].renderToScreen = false), e3.renderToScreen && (this.autoRenderToScreen = false)), t !== void 0 ? r.splice(t, 0, e3) : r.push(e3), this.autoRenderToScreen && (r[r.length - 1].renderToScreen = true), e3.needsDepthTexture || this.depthTexture !== null) if (this.depthTexture === null) {
      const u = this.createDepthTexture();
      for (e3 of r) e3.setDepthTexture(u);
    } else {
      const u = this.depthRenderTarget.depthTexture;
      e3.setDepthTexture(u);
    }
  }
  removePass(e3) {
    const t = this.passes, r = t.indexOf(e3);
    if (r !== -1 && t.splice(r, 1).length > 0) {
      if (this.depthTexture !== null) {
        const a = (u, h) => u || h.needsDepthTexture;
        if (!t.reduce(a, false)) {
          const u = this.depthRenderTarget.depthTexture;
          e3.getDepthTexture() === u && e3.setDepthTexture(null), this.deleteDepthTexture();
        }
      }
      this.autoRenderToScreen && r === t.length && (e3.renderToScreen = false, t.length > 0 && (t[t.length - 1].renderToScreen = true));
    }
  }
  removeAllPasses() {
    const e3 = this.passes;
    this.deleteDepthTexture(), e3.length > 0 && (this.autoRenderToScreen && (e3[e3.length - 1].renderToScreen = false), this.passes = []);
  }
  render(e3) {
    const t = this.renderer, r = this.copyPass;
    let s = this.inputBuffer, n = this.outputBuffer, a, o = false;
    e3 === void 0 && (this.timer.update(), e3 = this.timer.getDelta());
    for (const u of this.passes) if (u.enabled) {
      if (s.depthTexture = this.depthTexture, n.depthTexture = null, u.render(t, s, n, e3, o), u.needsDepthBlit && this.depthRenderTarget !== null && this.blitDepthBuffer(s), u.needsSwap) {
        if (o) {
          r.renderToScreen = u.renderToScreen;
          const h = t.getContext(), f = t.state.buffers.stencil;
          f.setFunc(h.NOTEQUAL, 1, 4294967295), r.render(t, s, n, e3, o), f.setFunc(h.EQUAL, 1, 4294967295);
        }
        a = s, s = n, n = a;
      }
      u instanceof Pa ? o = true : u instanceof ya && (o = false);
    }
  }
  setSize(e3, t, r) {
    const s = this.renderer, n = s.getSize(new xe());
    (e3 === void 0 || t === void 0) && (e3 = n.width, t = n.height), (n.width !== e3 || n.height !== t) && s.setSize(e3, t, r);
    const a = s.getDrawingBufferSize(new xe());
    this.inputBuffer.setSize(a.width, a.height), this.outputBuffer.setSize(a.width, a.height), this.depthRenderTarget !== null && this.depthRenderTarget.setSize(a.width, a.height);
    for (const o of this.passes) o.setSize(a.width, a.height);
  }
  reset() {
    this.dispose(), this.autoRenderToScreen = true;
  }
  dispose() {
    for (const e3 of this.passes) e3.dispose();
    this.passes = [], this.inputBuffer !== null && this.inputBuffer.dispose(), this.outputBuffer !== null && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose(), be.fullscreenGeometry.dispose();
  }
}, ct = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }, te = { FRAGMENT_HEAD: "FRAGMENT_HEAD", FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV", FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE", VERTEX_HEAD: "VERTEX_HEAD", VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT" }, La = class {
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([[te.FRAGMENT_HEAD, null], [te.FRAGMENT_MAIN_UV, null], [te.FRAGMENT_MAIN_IMAGE, null], [te.VERTEX_HEAD, null], [te.VERTEX_MAIN_SUPPORT, null]]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = ct.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = false, this.readDepth = false, this.colorSpace = Jt;
  }
}, Pr = false, Ds = class {
  constructor(e3 = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(e3), this.meshCount = 0, this.replaceMaterial = (t) => {
      if (t.isMesh) {
        let r;
        if (t.material.flatShading) switch (t.material.side) {
          case Ze:
            r = this.materialsFlatShadedDoubleSide;
            break;
          case ur:
            r = this.materialsFlatShadedBackSide;
            break;
          default:
            r = this.materialsFlatShaded;
            break;
        }
        else switch (t.material.side) {
          case Ze:
            r = this.materialsDoubleSide;
            break;
          case ur:
            r = this.materialsBackSide;
            break;
          default:
            r = this.materials;
            break;
        }
        this.originalMaterials.set(t, t.material), t.isSkinnedMesh ? t.material = r[2] : t.isInstancedMesh ? t.material = r[1] : t.material = r[0], ++this.meshCount;
      }
    };
  }
  cloneMaterial(e3) {
    if (!(e3 instanceof Ue)) return e3.clone();
    const t = e3.uniforms, r = /* @__PURE__ */ new Map();
    for (const n in t) {
      const a = t[n].value;
      a.isRenderTargetTexture && (t[n].value = null, r.set(n, a));
    }
    const s = e3.clone();
    for (const n of r) t[n[0]].value = n[1], s.uniforms[n[0]].value = n[1];
    return s;
  }
  setMaterial(e3) {
    if (this.disposeMaterials(), this.material = e3, e3 !== null) {
      const t = this.materials = [this.cloneMaterial(e3), this.cloneMaterial(e3), this.cloneMaterial(e3)];
      for (const r of t) r.uniforms = Object.assign({}, e3.uniforms), r.side = Bi;
      t[2].skinning = true, this.materialsBackSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.side = ur, s;
      }), this.materialsDoubleSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.side = Ze, s;
      }), this.materialsFlatShaded = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s;
      }), this.materialsFlatShadedBackSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s.side = ur, s;
      }), this.materialsFlatShadedDoubleSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s.side = Ze, s;
      });
    }
  }
  render(e3, t, r) {
    const s = e3.shadowMap.enabled;
    if (e3.shadowMap.enabled = false, Pr) {
      const n = this.originalMaterials;
      this.meshCount = 0, t.traverse(this.replaceMaterial), e3.render(t, r);
      for (const a of n) a[0].material = a[1];
      this.meshCount !== n.size && n.clear();
    } else {
      const n = t.overrideMaterial;
      t.overrideMaterial = this.material, e3.render(t, r), t.overrideMaterial = n;
    }
    e3.shadowMap.enabled = s;
  }
  disposeMaterials() {
    if (this.material !== null) {
      const e3 = this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);
      for (const t of e3) t.dispose();
    }
  }
  dispose() {
    this.originalMaterials.clear(), this.disposeMaterials();
  }
  static get workaroundEnabled() {
    return Pr;
  }
  static set workaroundEnabled(e3) {
    Pr = e3;
  }
}, ft = -1, Ie = class extends Jr {
  constructor(e3 = null, t = ft, r = ft, s = 1) {
    super(), e3 !== null && this.addEventListener("change", () => e3.setSize(this.baseSize.width, this.baseSize.height)), this.baseSize = new xe(1, 1), this.preferredSize = new xe(t, r), this.target = this.preferredSize, this.s = s, this.effectiveSize = new xe(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
  }
  updateEffectiveSize() {
    const e3 = this.baseSize, t = this.preferredSize, r = this.effectiveSize, s = this.scale;
    t.width !== ft ? r.width = t.width : t.height !== ft ? r.width = Math.round(t.height * (e3.width / Math.max(e3.height, 1))) : r.width = Math.round(e3.width * s), t.height !== ft ? r.height = t.height : t.width !== ft ? r.height = Math.round(t.width / Math.max(e3.width / Math.max(e3.height, 1), 1)) : r.height = Math.round(e3.height * s);
  }
  get width() {
    return this.effectiveSize.width;
  }
  set width(e3) {
    this.preferredWidth = e3;
  }
  get height() {
    return this.effectiveSize.height;
  }
  set height(e3) {
    this.preferredHeight = e3;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  get scale() {
    return this.s;
  }
  set scale(e3) {
    this.s !== e3 && (this.s = e3, this.preferredSize.setScalar(ft), this.dispatchEvent({ type: "change" }));
  }
  getScale() {
    return this.scale;
  }
  setScale(e3) {
    this.scale = e3;
  }
  get baseWidth() {
    return this.baseSize.width;
  }
  set baseWidth(e3) {
    this.baseSize.width !== e3 && (this.baseSize.width = e3, this.dispatchEvent({ type: "change" }));
  }
  getBaseWidth() {
    return this.baseWidth;
  }
  setBaseWidth(e3) {
    this.baseWidth = e3;
  }
  get baseHeight() {
    return this.baseSize.height;
  }
  set baseHeight(e3) {
    this.baseSize.height !== e3 && (this.baseSize.height = e3, this.dispatchEvent({ type: "change" }));
  }
  getBaseHeight() {
    return this.baseHeight;
  }
  setBaseHeight(e3) {
    this.baseHeight = e3;
  }
  setBaseSize(e3, t) {
    (this.baseSize.width !== e3 || this.baseSize.height !== t) && (this.baseSize.set(e3, t), this.dispatchEvent({ type: "change" }));
  }
  get preferredWidth() {
    return this.preferredSize.width;
  }
  set preferredWidth(e3) {
    this.preferredSize.width !== e3 && (this.preferredSize.width = e3, this.dispatchEvent({ type: "change" }));
  }
  getPreferredWidth() {
    return this.preferredWidth;
  }
  setPreferredWidth(e3) {
    this.preferredWidth = e3;
  }
  get preferredHeight() {
    return this.preferredSize.height;
  }
  set preferredHeight(e3) {
    this.preferredSize.height !== e3 && (this.preferredSize.height = e3, this.dispatchEvent({ type: "change" }));
  }
  getPreferredHeight() {
    return this.preferredHeight;
  }
  setPreferredHeight(e3) {
    this.preferredHeight = e3;
  }
  setPreferredSize(e3, t) {
    (this.preferredSize.width !== e3 || this.preferredSize.height !== t) && (this.preferredSize.set(e3, t), this.dispatchEvent({ type: "change" }));
  }
  copy(e3) {
    this.s = e3.scale, this.baseSize.set(e3.baseWidth, e3.baseHeight), this.preferredSize.set(e3.preferredWidth, e3.preferredHeight), this.dispatchEvent({ type: "change" });
  }
  static get AUTO_SIZE() {
    return ft;
  }
}, q = { SKIP: 9, SET: 30, ADD: 0, ALPHA: 1, AVERAGE: 2, COLOR: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, DIVIDE: 8, DST: 9, EXCLUSION: 10, HARD_LIGHT: 11, HARD_MIX: 12, HUE: 13, INVERT: 14, INVERT_RGB: 15, LIGHTEN: 16, LINEAR_BURN: 17, LINEAR_DODGE: 18, LINEAR_LIGHT: 19, LUMINOSITY: 20, MULTIPLY: 21, NEGATION: 22, NORMAL: 23, OVERLAY: 24, PIN_LIGHT: 25, REFLECT: 26, SATURATION: 27, SCREEN: 28, SOFT_LIGHT: 29, SRC: 30, SUBTRACT: 31, VIVID_LIGHT: 32 }, Ga = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ha = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}", Na = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", za = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ka = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Qa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ja = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ya = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Wa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Va = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Xa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", _a = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ka = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Za = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ja = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", qa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", $a = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", eo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", to = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ro = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", so = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", no = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", io = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}", ao = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", oo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", co = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", lo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", uo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ho = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", fo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}", go = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", vo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", po = /* @__PURE__ */ new Map([[q.ADD, Ga], [q.ALPHA, Ha], [q.AVERAGE, Na], [q.COLOR, za], [q.COLOR_BURN, ka], [q.COLOR_DODGE, Qa], [q.DARKEN, ja], [q.DIFFERENCE, Ya], [q.DIVIDE, Wa], [q.DST, null], [q.EXCLUSION, Va], [q.HARD_LIGHT, Xa], [q.HARD_MIX, _a], [q.HUE, Ka], [q.INVERT, Za], [q.INVERT_RGB, Ja], [q.LIGHTEN, qa], [q.LINEAR_BURN, $a], [q.LINEAR_DODGE, eo], [q.LINEAR_LIGHT, to], [q.LUMINOSITY, ro], [q.MULTIPLY, so], [q.NEGATION, no], [q.NORMAL, io], [q.OVERLAY, ao], [q.PIN_LIGHT, oo], [q.REFLECT, co], [q.SATURATION, lo], [q.SCREEN, uo], [q.SOFT_LIGHT, ho], [q.SRC, fo], [q.SUBTRACT, go], [q.VIVID_LIGHT, vo]]), Ao = class extends Jr {
  constructor(e3, t = 1) {
    super(), this._blendFunction = e3, this.opacity = new V(t);
  }
  getOpacity() {
    return this.opacity.value;
  }
  setOpacity(e3) {
    this.opacity.value = e3;
  }
  get blendFunction() {
    return this._blendFunction;
  }
  set blendFunction(e3) {
    this._blendFunction = e3, this.dispatchEvent({ type: "change" });
  }
  getBlendFunction() {
    return this.blendFunction;
  }
  setBlendFunction(e3) {
    this.blendFunction = e3;
  }
  getShaderCode() {
    return po.get(this.blendFunction);
  }
}, rr = class extends Jr {
  constructor(e3, t, { attributes: r = ct.NONE, blendFunction: s = q.NORMAL, defines: n = /* @__PURE__ */ new Map(), uniforms: a = /* @__PURE__ */ new Map(), extensions: o = null, vertexShader: u = null } = {}) {
    super(), this.name = e3, this.renderer = null, this.attributes = r, this.fragmentShader = t, this.vertexShader = u, this.defines = n, this.uniforms = a, this.extensions = o, this.blendMode = new Ao(s), this.blendMode.addEventListener("change", (h) => this.setChanged()), this._inputColorSpace = Jt, this._outputColorSpace = tn;
  }
  get inputColorSpace() {
    return this._inputColorSpace;
  }
  set inputColorSpace(e3) {
    this._inputColorSpace = e3, this.setChanged();
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e3) {
    this._outputColorSpace = e3, this.setChanged();
  }
  set mainScene(e3) {
  }
  set mainCamera(e3) {
  }
  getName() {
    return this.name;
  }
  setRenderer(e3) {
    this.renderer = e3;
  }
  getDefines() {
    return this.defines;
  }
  getUniforms() {
    return this.uniforms;
  }
  getExtensions() {
    return this.extensions;
  }
  getBlendMode() {
    return this.blendMode;
  }
  getAttributes() {
    return this.attributes;
  }
  setAttributes(e3) {
    this.attributes = e3, this.setChanged();
  }
  getFragmentShader() {
    return this.fragmentShader;
  }
  setFragmentShader(e3) {
    this.fragmentShader = e3, this.setChanged();
  }
  getVertexShader() {
    return this.vertexShader;
  }
  setVertexShader(e3) {
    this.vertexShader = e3, this.setChanged();
  }
  setChanged() {
    this.dispatchEvent({ type: "change" });
  }
  setDepthTexture(e3, t = Et) {
  }
  update(e3, t, r) {
  }
  setSize(e3, t) {
  }
  initialize(e3, t, r) {
  }
  dispose() {
    for (const e3 of Object.keys(this)) {
      const t = this[e3];
      (t instanceof Fe || t instanceof rn || t instanceof tt || t instanceof be) && this[e3].dispose();
    }
  }
}, cs = { VERY_SMALL: 0, SMALL: 1, MEDIUM: 2, LARGE: 3, VERY_LARGE: 4, HUGE: 5 }, mo = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, xo = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", Eo = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])], wo = class extends Ue {
  constructor(e3 = new xs()) {
    super({ name: "KawaseBlurMaterial", uniforms: { inputBuffer: new V(null), texelSize: new V(new xs()), scale: new V(1), kernel: new V(0) }, blending: nt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: mo, vertexShader: xo }), this.setTexelSize(e3.x, e3.y), this.kernelSize = cs.MEDIUM;
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setInputBuffer(e3) {
    this.inputBuffer = e3;
  }
  get kernelSequence() {
    return Eo[this.kernelSize];
  }
  get scale() {
    return this.uniforms.scale.value;
  }
  set scale(e3) {
    this.uniforms.scale.value = e3;
  }
  getScale() {
    return this.uniforms.scale.value;
  }
  setScale(e3) {
    this.uniforms.scale.value = e3;
  }
  getKernel() {
    return null;
  }
  get kernel() {
    return this.uniforms.kernel.value;
  }
  set kernel(e3) {
    this.uniforms.kernel.value = e3;
  }
  setKernel(e3) {
    this.kernel = e3;
  }
  setTexelSize(e3, t) {
    this.uniforms.texelSize.value.set(e3, t, e3 * 0.5, t * 0.5);
  }
  setSize(e3, t) {
    const r = 1 / e3, s = 1 / t;
    this.uniforms.texelSize.value.set(r, s, r * 0.5, s * 0.5);
  }
}, Mo = class extends be {
  constructor({ kernelSize: e3 = cs.MEDIUM, resolutionScale: t = 0.5, width: r = Ie.AUTO_SIZE, height: s = Ie.AUTO_SIZE, resolutionX: n = r, resolutionY: a = s } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new Fe(1, 1, { depthBuffer: false }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const o = this.resolution = new Ie(this, n, a, t);
    o.addEventListener("change", (u) => this.setSize(o.baseWidth, o.baseHeight)), this._blurMaterial = new wo(), this._blurMaterial.kernelSize = e3, this.copyMaterial = new wn();
  }
  getResolution() {
    return this.resolution;
  }
  get blurMaterial() {
    return this._blurMaterial;
  }
  set blurMaterial(e3) {
    this._blurMaterial = e3;
  }
  get dithering() {
    return this.copyMaterial.dithering;
  }
  set dithering(e3) {
    this.copyMaterial.dithering = e3;
  }
  get kernelSize() {
    return this.blurMaterial.kernelSize;
  }
  set kernelSize(e3) {
    this.blurMaterial.kernelSize = e3;
  }
  get width() {
    return this.resolution.width;
  }
  set width(e3) {
    this.resolution.preferredWidth = e3;
  }
  get height() {
    return this.resolution.height;
  }
  set height(e3) {
    this.resolution.preferredHeight = e3;
  }
  get scale() {
    return this.blurMaterial.scale;
  }
  set scale(e3) {
    this.blurMaterial.scale = e3;
  }
  getScale() {
    return this.blurMaterial.scale;
  }
  setScale(e3) {
    this.blurMaterial.scale = e3;
  }
  getKernelSize() {
    return this.kernelSize;
  }
  setKernelSize(e3) {
    this.kernelSize = e3;
  }
  getResolutionScale() {
    return this.resolution.scale;
  }
  setResolutionScale(e3) {
    this.resolution.scale = e3;
  }
  render(e3, t, r, s, n) {
    const a = this.scene, o = this.camera, u = this.renderTargetA, h = this.renderTargetB, f = this.blurMaterial, A = f.kernelSequence;
    let m = t;
    this.fullscreenMaterial = f;
    for (let w = 0, D = A.length; w < D; ++w) {
      const O = w & 1 ? h : u;
      f.kernel = A[w], f.inputBuffer = m.texture, e3.setRenderTarget(O), e3.render(a, o), m = O;
    }
    this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = m.texture, e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(a, o);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t);
    const s = r.width, n = r.height;
    this.renderTargetA.setSize(s, n), this.renderTargetB.setSize(s, n), this.blurMaterial.setSize(e3, t);
  }
  initialize(e3, t, r) {
    r !== void 0 && (this.renderTargetA.texture.type = r, this.renderTargetB.texture.type = r, r !== qe ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : e3 !== null && e3.outputColorSpace === Me && (this.renderTargetA.texture.colorSpace = Me, this.renderTargetB.texture.colorSpace = Me));
  }
  static get AUTO_SIZE() {
    return Ie.AUTO_SIZE;
  }
}, Co = `#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`, Do = class extends Ue {
  constructor(e3 = false, t = null) {
    super({ name: "LuminanceMaterial", defines: { THREE_REVISION: sr.replace(/\D+/g, "") }, uniforms: { inputBuffer: new V(null), threshold: new V(0), smoothing: new V(1), range: new V(null) }, blending: nt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Co, vertexShader: En }), this.colorOutput = e3, this.luminanceRange = t;
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setInputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  get threshold() {
    return this.uniforms.threshold.value;
  }
  set threshold(e3) {
    this.smoothing > 0 || e3 > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.uniforms.threshold.value = e3;
  }
  getThreshold() {
    return this.threshold;
  }
  setThreshold(e3) {
    this.threshold = e3;
  }
  get smoothing() {
    return this.uniforms.smoothing.value;
  }
  set smoothing(e3) {
    this.threshold > 0 || e3 > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.uniforms.smoothing.value = e3;
  }
  getSmoothingFactor() {
    return this.smoothing;
  }
  setSmoothingFactor(e3) {
    this.smoothing = e3;
  }
  get useThreshold() {
    return this.threshold > 0 || this.smoothing > 0;
  }
  set useThreshold(e3) {
  }
  get colorOutput() {
    return this.defines.COLOR !== void 0;
  }
  set colorOutput(e3) {
    e3 ? this.defines.COLOR = "1" : delete this.defines.COLOR, this.needsUpdate = true;
  }
  isColorOutputEnabled(e3) {
    return this.colorOutput;
  }
  setColorOutputEnabled(e3) {
    this.colorOutput = e3;
  }
  get useRange() {
    return this.luminanceRange !== null;
  }
  set useRange(e3) {
    this.luminanceRange = null;
  }
  get luminanceRange() {
    return this.uniforms.range.value;
  }
  set luminanceRange(e3) {
    e3 !== null ? this.defines.RANGE = "1" : delete this.defines.RANGE, this.uniforms.range.value = e3, this.needsUpdate = true;
  }
  getLuminanceRange() {
    return this.luminanceRange;
  }
  setLuminanceRange(e3) {
    this.luminanceRange = e3;
  }
}, Bo = class extends be {
  constructor({ renderTarget: e3, luminanceRange: t, colorOutput: r, resolutionScale: s = 1, width: n = Ie.AUTO_SIZE, height: a = Ie.AUTO_SIZE, resolutionX: o = n, resolutionY: u = a } = {}) {
    super("LuminancePass"), this.fullscreenMaterial = new Do(r, t), this.needsSwap = false, this.renderTarget = e3, this.renderTarget === void 0 && (this.renderTarget = new Fe(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "LuminancePass.Target");
    const h = this.resolution = new Ie(this, o, u, s);
    h.addEventListener("change", (f) => this.setSize(h.baseWidth, h.baseHeight));
  }
  get texture() {
    return this.renderTarget.texture;
  }
  getTexture() {
    return this.renderTarget.texture;
  }
  getResolution() {
    return this.resolution;
  }
  render(e3, t, r, s, n) {
    const a = this.fullscreenMaterial;
    a.inputBuffer = t.texture, e3.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e3.render(this.scene, this.camera);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height);
  }
  initialize(e3, t, r) {
    r !== void 0 && r !== qe && (this.renderTarget.texture.type = r, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, So = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`, Io = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}", To = class extends Ue {
  constructor() {
    super({ name: "DownsamplingMaterial", uniforms: { inputBuffer: new V(null), texelSize: new V(new xe()) }, blending: nt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: So, vertexShader: Io });
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setSize(e3, t) {
    this.uniforms.texelSize.value.set(1 / e3, 1 / t);
  }
}, yo = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`, Ro = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}", bo = class extends Ue {
  constructor() {
    super({ name: "UpsamplingMaterial", uniforms: { inputBuffer: new V(null), supportBuffer: new V(null), texelSize: new V(new xe()), radius: new V(0.85) }, blending: nt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: yo, vertexShader: Ro });
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  set supportBuffer(e3) {
    this.uniforms.supportBuffer.value = e3;
  }
  get radius() {
    return this.uniforms.radius.value;
  }
  set radius(e3) {
    this.uniforms.radius.value = e3;
  }
  setSize(e3, t) {
    this.uniforms.texelSize.value.set(1 / e3, 1 / t);
  }
}, Po = class extends be {
  constructor() {
    super("MipmapBlurPass"), this.needsSwap = false, this.renderTarget = new Fe(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new To(), this.upsamplingMaterial = new bo(), this.resolution = new xe();
  }
  get texture() {
    return this.renderTarget.texture;
  }
  get levels() {
    return this.downsamplingMipmaps.length;
  }
  set levels(e3) {
    if (this.levels !== e3) {
      const t = this.renderTarget;
      this.dispose(), this.downsamplingMipmaps = [], this.upsamplingMipmaps = [];
      for (let r = 0; r < e3; ++r) {
        const s = t.clone();
        s.texture.name = "Downsampling.Mipmap" + r, this.downsamplingMipmaps.push(s);
      }
      this.upsamplingMipmaps.push(t);
      for (let r = 1, s = e3 - 1; r < s; ++r) {
        const n = t.clone();
        n.texture.name = "Upsampling.Mipmap" + r, this.upsamplingMipmaps.push(n);
      }
      this.setSize(this.resolution.x, this.resolution.y);
    }
  }
  get radius() {
    return this.upsamplingMaterial.radius;
  }
  set radius(e3) {
    this.upsamplingMaterial.radius = e3;
  }
  render(e3, t, r, s, n) {
    const { scene: a, camera: o } = this, { downsamplingMaterial: u, upsamplingMaterial: h } = this, { downsamplingMipmaps: f, upsamplingMipmaps: A } = this;
    let m = t;
    this.fullscreenMaterial = u;
    for (let w = 0, D = f.length; w < D; ++w) {
      const O = f[w];
      u.setSize(m.width, m.height), u.inputBuffer = m.texture, e3.setRenderTarget(O), e3.render(a, o), m = O;
    }
    this.fullscreenMaterial = h;
    for (let w = A.length - 1; w >= 0; --w) {
      const D = A[w];
      h.setSize(m.width, m.height), h.inputBuffer = m.texture, h.supportBuffer = f[w].texture, e3.setRenderTarget(D), e3.render(a, o), m = D;
    }
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.set(e3, t);
    let s = r.width, n = r.height;
    for (let a = 0, o = this.downsamplingMipmaps.length; a < o; ++a) s = Math.round(s * 0.5), n = Math.round(n * 0.5), this.downsamplingMipmaps[a].setSize(s, n), a < this.upsamplingMipmaps.length && this.upsamplingMipmaps[a].setSize(s, n);
  }
  initialize(e3, t, r) {
    if (r !== void 0) {
      const s = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
      for (const n of s) n.texture.type = r;
      if (r !== qe) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      else if (e3 !== null && e3.outputColorSpace === Me) for (const n of s) n.texture.colorSpace = Me;
    }
  }
  dispose() {
    super.dispose();
    for (const e3 of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) e3.dispose();
  }
}, Oo = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`, Fo = class extends rr {
  constructor({ blendFunction: e3 = q.SCREEN, luminanceThreshold: t = 1, luminanceSmoothing: r = 0.03, mipmapBlur: s = true, intensity: n = 1, radius: a = 0.85, levels: o = 8, kernelSize: u = cs.LARGE, resolutionScale: h = 0.5, width: f = Ie.AUTO_SIZE, height: A = Ie.AUTO_SIZE, resolutionX: m = f, resolutionY: w = A } = {}) {
    super("BloomEffect", Oo, { blendFunction: e3, uniforms: /* @__PURE__ */ new Map([["map", new V(null)], ["intensity", new V(n)]]) }), this.renderTarget = new Fe(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new Mo({ kernelSize: u }), this.luminancePass = new Bo({ colorOutput: true }), this.luminanceMaterial.threshold = t, this.luminanceMaterial.smoothing = r, this.mipmapBlurPass = new Po(), this.mipmapBlurPass.enabled = s, this.mipmapBlurPass.radius = a, this.mipmapBlurPass.levels = o, this.uniforms.get("map").value = s ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const D = this.resolution = new Ie(this, m, w, h);
    D.addEventListener("change", (O) => this.setSize(D.baseWidth, D.baseHeight));
  }
  get texture() {
    return this.mipmapBlurPass.enabled ? this.mipmapBlurPass.texture : this.renderTarget.texture;
  }
  getTexture() {
    return this.texture;
  }
  getResolution() {
    return this.resolution;
  }
  getBlurPass() {
    return this.blurPass;
  }
  getLuminancePass() {
    return this.luminancePass;
  }
  get luminanceMaterial() {
    return this.luminancePass.fullscreenMaterial;
  }
  getLuminanceMaterial() {
    return this.luminancePass.fullscreenMaterial;
  }
  get width() {
    return this.resolution.width;
  }
  set width(e3) {
    this.resolution.preferredWidth = e3;
  }
  get height() {
    return this.resolution.height;
  }
  set height(e3) {
    this.resolution.preferredHeight = e3;
  }
  get dithering() {
    return this.blurPass.dithering;
  }
  set dithering(e3) {
    this.blurPass.dithering = e3;
  }
  get kernelSize() {
    return this.blurPass.kernelSize;
  }
  set kernelSize(e3) {
    this.blurPass.kernelSize = e3;
  }
  get distinction() {
    return console.warn(this.name, "distinction was removed"), 1;
  }
  set distinction(e3) {
    console.warn(this.name, "distinction was removed");
  }
  get intensity() {
    return this.uniforms.get("intensity").value;
  }
  set intensity(e3) {
    this.uniforms.get("intensity").value = e3;
  }
  getIntensity() {
    return this.intensity;
  }
  setIntensity(e3) {
    this.intensity = e3;
  }
  getResolutionScale() {
    return this.resolution.scale;
  }
  setResolutionScale(e3) {
    this.resolution.scale = e3;
  }
  update(e3, t, r) {
    const s = this.renderTarget, n = this.luminancePass;
    n.enabled ? (n.render(e3, t), this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(e3, n.renderTarget) : this.blurPass.render(e3, n.renderTarget, s)) : this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(e3, t) : this.blurPass.render(e3, t, s);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height), this.blurPass.resolution.copy(r), this.luminancePass.setSize(e3, t), this.mipmapBlurPass.setSize(e3, t);
  }
  initialize(e3, t, r) {
    this.blurPass.initialize(e3, t, r), this.luminancePass.initialize(e3, t, r), this.mipmapBlurPass.initialize(e3, t, r), r !== void 0 && (this.renderTarget.texture.type = r, e3 !== null && e3.outputColorSpace === Me && (this.renderTarget.texture.colorSpace = Me));
  }
}, Bs = class extends be {
  constructor(e3, t = "inputBuffer") {
    super("ShaderPass"), this.fullscreenMaterial = e3, this.input = t;
  }
  setInput(e3) {
    this.input = e3;
  }
  render(e3, t, r, s, n) {
    const a = this.fullscreenMaterial.uniforms;
    t !== null && a !== void 0 && a[this.input] !== void 0 && (a[this.input].value = t.texture), e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(this.scene, this.camera);
  }
  initialize(e3, t, r) {
    r !== void 0 && r !== qe && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, Mn = class extends be {
  constructor(e3, t, r = null) {
    super("RenderPass", e3, t), this.needsSwap = false, this.needsDepthBlit = true, this.clearPass = new os(), this.overrideMaterialManager = r === null ? null : new Ds(r), this.ignoreBackground = false, this.skipShadowMapUpdate = false, this.selection = null;
  }
  set mainScene(e3) {
    this.scene = e3;
  }
  set mainCamera(e3) {
    this.camera = e3;
  }
  get renderToScreen() {
    return super.renderToScreen;
  }
  set renderToScreen(e3) {
    super.renderToScreen = e3, this.clearPass.renderToScreen = e3;
  }
  get overrideMaterial() {
    const e3 = this.overrideMaterialManager;
    return e3 !== null ? e3.material : null;
  }
  set overrideMaterial(e3) {
    const t = this.overrideMaterialManager;
    e3 !== null ? t !== null ? t.setMaterial(e3) : this.overrideMaterialManager = new Ds(e3) : t !== null && (t.dispose(), this.overrideMaterialManager = null);
  }
  getOverrideMaterial() {
    return this.overrideMaterial;
  }
  setOverrideMaterial(e3) {
    this.overrideMaterial = e3;
  }
  get clear() {
    return this.clearPass.enabled;
  }
  set clear(e3) {
    this.clearPass.enabled = e3;
  }
  getSelection() {
    return this.selection;
  }
  setSelection(e3) {
    this.selection = e3;
  }
  isBackgroundDisabled() {
    return this.ignoreBackground;
  }
  setBackgroundDisabled(e3) {
    this.ignoreBackground = e3;
  }
  isShadowMapDisabled() {
    return this.skipShadowMapUpdate;
  }
  setShadowMapDisabled(e3) {
    this.skipShadowMapUpdate = e3;
  }
  getClearPass() {
    return this.clearPass;
  }
  render(e3, t, r, s, n) {
    const a = this.scene, o = this.camera, u = this.selection, h = o.layers.mask, f = a.background, A = e3.shadowMap.autoUpdate, m = this.renderToScreen ? null : t;
    u !== null && o.layers.set(u.getLayer()), this.skipShadowMapUpdate && (e3.shadowMap.autoUpdate = false), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (a.background = null), this.clearPass.enabled && this.clearPass.render(e3, t), e3.setRenderTarget(m), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(e3, a, o) : e3.render(a, o), o.layers.mask = h, a.background = f, e3.shadowMap.autoUpdate = A;
  }
}, Cn = { DEPTH: 0, LUMA: 1, COLOR: 2 }, Uo = { DISABLED: 0, DEPTH: 1, CUSTOM: 2 }, Qt = { LOW: 0, MEDIUM: 1, HIGH: 2, ULTRA: 3 }, jt = { DEFAULT: 0, ESKIL: 1 }, Lo = `varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`, Go = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`, Ho = class extends Ue {
  constructor(e3 = new xe(), t = Cn.COLOR) {
    super({ name: "EdgeDetectionMaterial", defines: { THREE_REVISION: sr.replace(/\D+/g, ""), LOCAL_CONTRAST_ADAPTATION_FACTOR: "2.0", EDGE_THRESHOLD: "0.1", DEPTH_THRESHOLD: "0.01", PREDICATION_MODE: "0", PREDICATION_THRESHOLD: "0.01", PREDICATION_SCALE: "2.0", PREDICATION_STRENGTH: "1.0", DEPTH_PACKING: "0" }, uniforms: { inputBuffer: new V(null), depthBuffer: new V(null), predicationBuffer: new V(null), texelSize: new V(e3) }, blending: nt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Lo, vertexShader: Go }), this.edgeDetectionMode = t;
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = Et) {
    this.depthBuffer = e3, this.depthPacking = t;
  }
  get edgeDetectionMode() {
    return Number(this.defines.EDGE_DETECTION_MODE);
  }
  set edgeDetectionMode(e3) {
    this.defines.EDGE_DETECTION_MODE = e3.toFixed(0), this.needsUpdate = true;
  }
  getEdgeDetectionMode() {
    return this.edgeDetectionMode;
  }
  setEdgeDetectionMode(e3) {
    this.edgeDetectionMode = e3;
  }
  get localContrastAdaptationFactor() {
    return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR);
  }
  set localContrastAdaptationFactor(e3) {
    this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR = e3.toFixed("6"), this.needsUpdate = true;
  }
  getLocalContrastAdaptationFactor() {
    return this.localContrastAdaptationFactor;
  }
  setLocalContrastAdaptationFactor(e3) {
    this.localContrastAdaptationFactor = e3;
  }
  get edgeDetectionThreshold() {
    return Number(this.defines.EDGE_THRESHOLD);
  }
  set edgeDetectionThreshold(e3) {
    this.defines.EDGE_THRESHOLD = e3.toFixed("6"), this.defines.DEPTH_THRESHOLD = (e3 * 0.1).toFixed("6"), this.needsUpdate = true;
  }
  getEdgeDetectionThreshold() {
    return this.edgeDetectionThreshold;
  }
  setEdgeDetectionThreshold(e3) {
    this.edgeDetectionThreshold = e3;
  }
  get predicationMode() {
    return Number(this.defines.PREDICATION_MODE);
  }
  set predicationMode(e3) {
    this.defines.PREDICATION_MODE = e3.toFixed(0), this.needsUpdate = true;
  }
  getPredicationMode() {
    return this.predicationMode;
  }
  setPredicationMode(e3) {
    this.predicationMode = e3;
  }
  set predicationBuffer(e3) {
    this.uniforms.predicationBuffer.value = e3;
  }
  setPredicationBuffer(e3) {
    this.uniforms.predicationBuffer.value = e3;
  }
  get predicationThreshold() {
    return Number(this.defines.PREDICATION_THRESHOLD);
  }
  set predicationThreshold(e3) {
    this.defines.PREDICATION_THRESHOLD = e3.toFixed("6"), this.needsUpdate = true;
  }
  getPredicationThreshold() {
    return this.predicationThreshold;
  }
  setPredicationThreshold(e3) {
    this.predicationThreshold = e3;
  }
  get predicationScale() {
    return Number(this.defines.PREDICATION_SCALE);
  }
  set predicationScale(e3) {
    this.defines.PREDICATION_SCALE = e3.toFixed("6"), this.needsUpdate = true;
  }
  getPredicationScale() {
    return this.predicationScale;
  }
  setPredicationScale(e3) {
    this.predicationScale = e3;
  }
  get predicationStrength() {
    return Number(this.defines.PREDICATION_STRENGTH);
  }
  set predicationStrength(e3) {
    this.defines.PREDICATION_STRENGTH = e3.toFixed("6"), this.needsUpdate = true;
  }
  getPredicationStrength() {
    return this.predicationStrength;
  }
  setPredicationStrength(e3) {
    this.predicationStrength = e3;
  }
  setSize(e3, t) {
    this.uniforms.texelSize.value.set(1 / e3, 1 / t);
  }
}, No = `#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`, zo = "uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}", ko = class extends Ue {
  constructor(e3 = new xe(), t = new xe()) {
    super({ name: "SMAAWeightsMaterial", defines: { MAX_SEARCH_STEPS_INT: "16", MAX_SEARCH_STEPS_FLOAT: "16.0", MAX_SEARCH_STEPS_DIAG_INT: "8", MAX_SEARCH_STEPS_DIAG_FLOAT: "8.0", CORNER_ROUNDING: "25", CORNER_ROUNDING_NORM: "0.25", AREATEX_MAX_DISTANCE: "16.0", AREATEX_MAX_DISTANCE_DIAG: "20.0", AREATEX_PIXEL_SIZE: "(1.0 / vec2(160.0, 560.0))", AREATEX_SUBTEX_SIZE: "(1.0 / 7.0)", SEARCHTEX_SIZE: "vec2(66.0, 33.0)", SEARCHTEX_PACKED_SIZE: "vec2(64.0, 16.0)" }, uniforms: { inputBuffer: new V(null), searchTexture: new V(null), areaTexture: new V(null), resolution: new V(t), texelSize: new V(e3) }, blending: nt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: No, vertexShader: zo });
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setInputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  get searchTexture() {
    return this.uniforms.searchTexture.value;
  }
  set searchTexture(e3) {
    this.uniforms.searchTexture.value = e3;
  }
  get areaTexture() {
    return this.uniforms.areaTexture.value;
  }
  set areaTexture(e3) {
    this.uniforms.areaTexture.value = e3;
  }
  setLookupTextures(e3, t) {
    this.searchTexture = e3, this.areaTexture = t;
  }
  get orthogonalSearchSteps() {
    return Number(this.defines.MAX_SEARCH_STEPS_INT);
  }
  set orthogonalSearchSteps(e3) {
    const t = Math.min(Math.max(e3, 0), 112);
    this.defines.MAX_SEARCH_STEPS_INT = t.toFixed("0"), this.defines.MAX_SEARCH_STEPS_FLOAT = t.toFixed("1"), this.needsUpdate = true;
  }
  setOrthogonalSearchSteps(e3) {
    this.orthogonalSearchSteps = e3;
  }
  get diagonalSearchSteps() {
    return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT);
  }
  set diagonalSearchSteps(e3) {
    const t = Math.min(Math.max(e3, 0), 20);
    this.defines.MAX_SEARCH_STEPS_DIAG_INT = t.toFixed("0"), this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT = t.toFixed("1"), this.needsUpdate = true;
  }
  setDiagonalSearchSteps(e3) {
    this.diagonalSearchSteps = e3;
  }
  get diagonalDetection() {
    return this.defines.DISABLE_DIAG_DETECTION === void 0;
  }
  set diagonalDetection(e3) {
    e3 ? delete this.defines.DISABLE_DIAG_DETECTION : this.defines.DISABLE_DIAG_DETECTION = "1", this.needsUpdate = true;
  }
  isDiagonalDetectionEnabled() {
    return this.diagonalDetection;
  }
  setDiagonalDetectionEnabled(e3) {
    this.diagonalDetection = e3;
  }
  get cornerRounding() {
    return Number(this.defines.CORNER_ROUNDING);
  }
  set cornerRounding(e3) {
    const t = Math.min(Math.max(e3, 0), 100);
    this.defines.CORNER_ROUNDING = t.toFixed("4"), this.defines.CORNER_ROUNDING_NORM = (t / 100).toFixed("4"), this.needsUpdate = true;
  }
  setCornerRounding(e3) {
    this.cornerRounding = e3;
  }
  get cornerDetection() {
    return this.defines.DISABLE_CORNER_DETECTION === void 0;
  }
  set cornerDetection(e3) {
    e3 ? delete this.defines.DISABLE_CORNER_DETECTION : this.defines.DISABLE_CORNER_DETECTION = "1", this.needsUpdate = true;
  }
  isCornerRoundingEnabled() {
    return this.cornerDetection;
  }
  setCornerRoundingEnabled(e3) {
    this.cornerDetection = e3;
  }
  setSize(e3, t) {
    const r = this.uniforms;
    r.texelSize.value.set(1 / e3, 1 / t), r.resolution.value.set(e3, t);
  }
}, Ss = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC", Is = "data:image/png;base64,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", Qo = "uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}", jo = "varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}", Yo = class extends rr {
  constructor({ blendFunction: e3 = q.SRC, preset: t = Qt.MEDIUM, edgeDetectionMode: r = Cn.COLOR, predicationMode: s = Uo.DISABLED } = {}) {
    super("SMAAEffect", Qo, { vertexShader: jo, blendFunction: e3, attributes: ct.CONVOLUTION | ct.DEPTH, uniforms: /* @__PURE__ */ new Map([["weightMap", new V(null)]]) });
    let n, a;
    arguments.length > 1 && (n = arguments[0], a = arguments[1], arguments.length > 2 && (t = arguments[2]), arguments.length > 3 && (r = arguments[3])), this.renderTargetEdges = new Fe(1, 1, { depthBuffer: false }), this.renderTargetEdges.texture.name = "SMAA.Edges", this.renderTargetWeights = this.renderTargetEdges.clone(), this.renderTargetWeights.texture.name = "SMAA.Weights", this.uniforms.get("weightMap").value = this.renderTargetWeights.texture, this.clearPass = new os(true, false, false), this.clearPass.overrideClearColor = new Br(0), this.clearPass.overrideClearAlpha = 1, this.edgeDetectionPass = new Bs(new Ho()), this.edgeDetectionMaterial.edgeDetectionMode = r, this.edgeDetectionMaterial.predicationMode = s, this.weightsPass = new Bs(new ko());
    const o = new qs();
    o.onLoad = () => {
      const u = new tt(n);
      u.name = "SMAA.Search", u.magFilter = yt, u.minFilter = yt, u.generateMipmaps = false, u.needsUpdate = true, u.flipY = true, this.weightsMaterial.searchTexture = u;
      const h = new tt(a);
      h.name = "SMAA.Area", h.magFilter = Se, h.minFilter = Se, h.generateMipmaps = false, h.needsUpdate = true, h.flipY = false, this.weightsMaterial.areaTexture = h, this.dispatchEvent({ type: "load" });
    }, o.itemStart("search"), o.itemStart("area"), n !== void 0 && a !== void 0 ? (o.itemEnd("search"), o.itemEnd("area")) : typeof Image < "u" && (n = new Image(), a = new Image(), n.addEventListener("load", () => o.itemEnd("search")), a.addEventListener("load", () => o.itemEnd("area")), n.src = Ss, a.src = Is), this.applyPreset(t);
  }
  get edgesTexture() {
    return this.renderTargetEdges.texture;
  }
  getEdgesTexture() {
    return this.edgesTexture;
  }
  get weightsTexture() {
    return this.renderTargetWeights.texture;
  }
  getWeightsTexture() {
    return this.weightsTexture;
  }
  get edgeDetectionMaterial() {
    return this.edgeDetectionPass.fullscreenMaterial;
  }
  get colorEdgesMaterial() {
    return this.edgeDetectionMaterial;
  }
  getEdgeDetectionMaterial() {
    return this.edgeDetectionMaterial;
  }
  get weightsMaterial() {
    return this.weightsPass.fullscreenMaterial;
  }
  getWeightsMaterial() {
    return this.weightsMaterial;
  }
  setEdgeDetectionThreshold(e3) {
    this.edgeDetectionMaterial.edgeDetectionThreshold = e3;
  }
  setOrthogonalSearchSteps(e3) {
    this.weightsMaterial.orthogonalSearchSteps = e3;
  }
  applyPreset(e3) {
    const t = this.edgeDetectionMaterial, r = this.weightsMaterial;
    switch (e3) {
      case Qt.LOW:
        t.edgeDetectionThreshold = 0.15, r.orthogonalSearchSteps = 4, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case Qt.MEDIUM:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 8, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case Qt.HIGH:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 16, r.diagonalSearchSteps = 8, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
      case Qt.ULTRA:
        t.edgeDetectionThreshold = 0.05, r.orthogonalSearchSteps = 32, r.diagonalSearchSteps = 16, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
    }
  }
  setDepthTexture(e3, t = Et) {
    this.edgeDetectionMaterial.depthBuffer = e3, this.edgeDetectionMaterial.depthPacking = t;
  }
  update(e3, t, r) {
    this.clearPass.render(e3, this.renderTargetEdges), this.edgeDetectionPass.render(e3, t, this.renderTargetEdges), this.weightsPass.render(e3, this.renderTargetEdges, this.renderTargetWeights);
  }
  setSize(e3, t) {
    this.edgeDetectionMaterial.setSize(e3, t), this.weightsMaterial.setSize(e3, t), this.renderTargetEdges.setSize(e3, t), this.renderTargetWeights.setSize(e3, t);
  }
  dispose() {
    const { searchTexture: e3, areaTexture: t } = this.weightsMaterial;
    e3 !== null && t !== null && (e3.dispose(), t.dispose()), super.dispose();
  }
  static get searchImageDataURL() {
    return Ss;
  }
  static get areaImageDataURL() {
    return Is;
  }
}, Wo = `#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
#ifdef DOWNSAMPLE_NORMALS
uniform lowp sampler2D normalBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}int findBestDepth(const in float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])*0.25;float distances[4];distances[0]=abs(c-samples[0]);distances[1]=abs(c-samples[1]);distances[2]=abs(c-samples[2]);distances[3]=abs(c-samples[3]);float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){float d[4];d[0]=readDepth(vUv0);d[1]=readDepth(vUv1);d[2]=readDepth(vUv2);d[3]=readDepth(vUv3);int index=findBestDepth(d);
#ifdef DOWNSAMPLE_NORMALS
vec3 n[4];n[0]=texture2D(normalBuffer,vUv0).rgb;n[1]=texture2D(normalBuffer,vUv1).rgb;n[2]=texture2D(normalBuffer,vUv2).rgb;n[3]=texture2D(normalBuffer,vUv3).rgb;
#else
vec3 n[4];n[0]=vec3(0.0);n[1]=vec3(0.0);n[2]=vec3(0.0);n[3]=vec3(0.0);
#endif
gl_FragColor=vec4(n[index],d[index]);}`, Vo = "uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}", Xo = class extends Ue {
  constructor() {
    super({ name: "DepthDownsamplingMaterial", defines: { DEPTH_PACKING: "0" }, uniforms: { depthBuffer: new V(null), normalBuffer: new V(null), texelSize: new V(new xe()) }, blending: nt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Wo, vertexShader: Vo });
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = Et) {
    this.depthBuffer = e3, this.depthPacking = t;
  }
  set normalBuffer(e3) {
    this.uniforms.normalBuffer.value = e3, e3 !== null ? this.defines.DOWNSAMPLE_NORMALS = "1" : delete this.defines.DOWNSAMPLE_NORMALS, this.needsUpdate = true;
  }
  setNormalBuffer(e3) {
    this.normalBuffer = e3;
  }
  setTexelSize(e3, t) {
    this.uniforms.texelSize.value.set(e3, t);
  }
  setSize(e3, t) {
    this.uniforms.texelSize.value.set(1 / e3, 1 / t);
  }
}, _o = class extends be {
  constructor({ normalBuffer: e3 = null, resolutionScale: t = 0.5, width: r = Ie.AUTO_SIZE, height: s = Ie.AUTO_SIZE, resolutionX: n = r, resolutionY: a = s } = {}) {
    super("DepthDownsamplingPass");
    const o = new Xo();
    o.normalBuffer = e3, this.fullscreenMaterial = o, this.needsDepthTexture = true, this.needsSwap = false, this.renderTarget = new Fe(1, 1, { minFilter: yt, magFilter: yt, depthBuffer: false, type: Je }), this.renderTarget.texture.name = "DepthDownsamplingPass.Target", this.renderTarget.texture.generateMipmaps = false;
    const u = this.resolution = new Ie(this, n, a, t);
    u.addEventListener("change", (h) => this.setSize(u.baseWidth, u.baseHeight));
  }
  get texture() {
    return this.renderTarget.texture;
  }
  getTexture() {
    return this.renderTarget.texture;
  }
  getResolution() {
    return this.resolution;
  }
  setDepthTexture(e3, t = Et) {
    this.fullscreenMaterial.depthBuffer = e3, this.fullscreenMaterial.depthPacking = t;
  }
  render(e3, t, r, s, n) {
    e3.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e3.render(this.scene, this.camera);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height), this.fullscreenMaterial.setSize(e3, t);
  }
  initialize(e3, t, r) {
    const s = e3.getContext();
    if (!(s.getExtension("EXT_color_buffer_float") || s.getExtension("EXT_color_buffer_half_float"))) throw new Error("Rendering to float texture is not supported.");
  }
}, Ko = `uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`, Zo = class extends rr {
  constructor({ blendFunction: e3, eskil: t = false, technique: r = t ? jt.ESKIL : jt.DEFAULT, offset: s = 0.5, darkness: n = 0.5 } = {}) {
    super("VignetteEffect", Ko, { blendFunction: e3, defines: /* @__PURE__ */ new Map([["VIGNETTE_TECHNIQUE", r.toFixed(0)]]), uniforms: /* @__PURE__ */ new Map([["offset", new V(s)], ["darkness", new V(n)]]) });
  }
  get technique() {
    return Number(this.defines.get("VIGNETTE_TECHNIQUE"));
  }
  set technique(e3) {
    this.technique !== e3 && (this.defines.set("VIGNETTE_TECHNIQUE", e3.toFixed(0)), this.setChanged());
  }
  get eskil() {
    return this.technique === jt.ESKIL;
  }
  set eskil(e3) {
    this.technique = e3 ? jt.ESKIL : jt.DEFAULT;
  }
  getTechnique() {
    return this.technique;
  }
  setTechnique(e3) {
    this.technique = e3;
  }
  get offset() {
    return this.uniforms.get("offset").value;
  }
  set offset(e3) {
    this.uniforms.get("offset").value = e3;
  }
  getOffset() {
    return this.offset;
  }
  setOffset(e3) {
    this.offset = e3;
  }
  get darkness() {
    return this.uniforms.get("darkness").value;
  }
  set darkness(e3) {
    this.uniforms.get("darkness").value = e3;
  }
  getDarkness() {
    return this.darkness;
  }
  setDarkness(e3) {
    this.darkness = e3;
  }
}, Jo = `#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`, qo = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", $o = class extends Ue {
  constructor(e3, t, r, s, n = false) {
    super({ name: "EffectMaterial", defines: { THREE_REVISION: sr.replace(/\D+/g, ""), DEPTH_PACKING: "0", ENCODE_OUTPUT: "1" }, uniforms: { inputBuffer: new V(null), depthBuffer: new V(null), resolution: new V(new xe()), texelSize: new V(new xe()), cameraNear: new V(0.3), cameraFar: new V(1e3), aspect: new V(1), time: new V(0) }, blending: nt, toneMapped: false, depthWrite: false, depthTest: false, dithering: n }), e3 && this.setShaderParts(e3), t && this.setDefines(t), r && this.setUniforms(r), this.copyCameraSettings(s);
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setInputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  get depthBuffer() {
    return this.uniforms.depthBuffer.value;
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  get depthPacking() {
    return Number(this.defines.DEPTH_PACKING);
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = Et) {
    this.depthBuffer = e3, this.depthPacking = t;
  }
  setShaderData(e3) {
    this.setShaderParts(e3.shaderParts), this.setDefines(e3.defines), this.setUniforms(e3.uniforms), this.setExtensions(e3.extensions);
  }
  setShaderParts(e3) {
    return this.fragmentShader = Jo.replace(te.FRAGMENT_HEAD, e3.get(te.FRAGMENT_HEAD) || "").replace(te.FRAGMENT_MAIN_UV, e3.get(te.FRAGMENT_MAIN_UV) || "").replace(te.FRAGMENT_MAIN_IMAGE, e3.get(te.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = qo.replace(te.VERTEX_HEAD, e3.get(te.VERTEX_HEAD) || "").replace(te.VERTEX_MAIN_SUPPORT, e3.get(te.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = true, this;
  }
  setDefines(e3) {
    for (const t of e3.entries()) this.defines[t[0]] = t[1];
    return this.needsUpdate = true, this;
  }
  setUniforms(e3) {
    for (const t of e3.entries()) this.uniforms[t[0]] = t[1];
    return this;
  }
  setExtensions(e3) {
    this.extensions = {};
    for (const t of e3) this.extensions[t] = true;
    return this;
  }
  get encodeOutput() {
    return this.defines.ENCODE_OUTPUT !== void 0;
  }
  set encodeOutput(e3) {
    this.encodeOutput !== e3 && (e3 ? this.defines.ENCODE_OUTPUT = "1" : delete this.defines.ENCODE_OUTPUT, this.needsUpdate = true);
  }
  isOutputEncodingEnabled(e3) {
    return this.encodeOutput;
  }
  setOutputEncodingEnabled(e3) {
    this.encodeOutput = e3;
  }
  get time() {
    return this.uniforms.time.value;
  }
  set time(e3) {
    this.uniforms.time.value = e3;
  }
  setDeltaTime(e3) {
    this.uniforms.time.value += e3;
  }
  adoptCameraSettings(e3) {
    this.copyCameraSettings(e3);
  }
  copyCameraSettings(e3) {
    e3 && (this.uniforms.cameraNear.value = e3.near, this.uniforms.cameraFar.value = e3.far, e3 instanceof Si ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
  setSize(e3, t) {
    const r = this.uniforms;
    r.resolution.value.set(e3, t), r.texelSize.value.set(1 / e3, 1 / t), r.aspect.value = e3 / t;
  }
  static get Section() {
    return te;
  }
};
function Ts(e3, t, r) {
  for (const s of t) {
    const n = "$1" + e3 + s.charAt(0).toUpperCase() + s.slice(1), a = new RegExp("([^\\.])(\\b" + s + "\\b)", "g");
    for (const o of r.entries()) o[1] !== null && r.set(o[0], o[1].replace(a, n));
  }
}
function ec(e3, t, r) {
  let s = t.getFragmentShader(), n = t.getVertexShader();
  const a = s !== void 0 && /mainImage/.test(s), o = s !== void 0 && /mainUv/.test(s);
  if (r.attributes |= t.getAttributes(), s === void 0) throw new Error(`Missing fragment shader (${t.name})`);
  if (o && r.attributes & ct.CONVOLUTION) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);
  if (!a && !o) throw new Error(`Could not find mainImage or mainUv function (${t.name})`);
  {
    const u = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, h = r.shaderParts;
    let f = h.get(te.FRAGMENT_HEAD) || "", A = h.get(te.FRAGMENT_MAIN_UV) || "", m = h.get(te.FRAGMENT_MAIN_IMAGE) || "", w = h.get(te.VERTEX_HEAD) || "", D = h.get(te.VERTEX_MAIN_SUPPORT) || "";
    const O = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set();
    if (o && (A += `	${e3}MainUv(UV);
`, r.uvTransformation = true), n !== null && /mainSupport/.test(n)) {
      const k = /mainSupport *\([\w\s]*?uv\s*?\)/.test(n);
      D += `	${e3}MainSupport(`, D += k ? `vUv);
` : `);
`;
      for (const P of n.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) for (const Y of P[1].split(/\s*,\s*/)) r.varyings.add(Y), O.add(Y), X.add(Y);
      for (const P of n.matchAll(u)) X.add(P[1]);
    }
    for (const k of s.matchAll(u)) X.add(k[1]);
    for (const k of t.defines.keys()) X.add(k.replace(/\([\w\s,]*\)/g, ""));
    for (const k of t.uniforms.keys()) X.add(k);
    X.delete("while"), X.delete("for"), X.delete("if"), t.uniforms.forEach((k, P) => r.uniforms.set(e3 + P.charAt(0).toUpperCase() + P.slice(1), k)), t.defines.forEach((k, P) => r.defines.set(e3 + P.charAt(0).toUpperCase() + P.slice(1), k));
    const j = /* @__PURE__ */ new Map([["fragment", s], ["vertex", n]]);
    Ts(e3, X, r.defines), Ts(e3, X, j), s = j.get("fragment"), n = j.get("vertex");
    const L = t.blendMode;
    if (r.blendModes.set(L.blendFunction, L), a) {
      t.inputColorSpace !== null && t.inputColorSpace !== r.colorSpace && (m += t.inputColorSpace === Me ? `color0 = sRGBTransferOETF(color0);
	` : `color0 = sRGBToLinear(color0);
	`), t.outputColorSpace !== tn ? r.colorSpace = t.outputColorSpace : t.inputColorSpace !== null && (r.colorSpace = t.inputColorSpace);
      const k = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      m += `${e3}MainImage(color0, UV, `, r.attributes & ct.DEPTH && k.test(s) && (m += "depth, ", r.readDepth = true), m += `color1);
	`;
      const P = e3 + "BlendOpacity";
      r.uniforms.set(P, L.opacity), m += `color0 = blend${L.blendFunction}(color0, color1, ${P});

	`, f += `uniform float ${P};

`;
    }
    if (f += s + `
`, n !== null && (w += n + `
`), h.set(te.FRAGMENT_HEAD, f), h.set(te.FRAGMENT_MAIN_UV, A), h.set(te.FRAGMENT_MAIN_IMAGE, m), h.set(te.VERTEX_HEAD, w), h.set(te.VERTEX_MAIN_SUPPORT, D), t.extensions !== null) for (const k of t.extensions) r.extensions.add(k);
  }
}
var tc = class extends be {
  constructor(e3, ...t) {
    super("EffectPass"), this.fullscreenMaterial = new $o(null, null, null, e3), this.listener = (r) => this.handleEvent(r), this.effects = [], this.setEffects(t), this.skipRendering = false, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
  }
  set mainScene(e3) {
    for (const t of this.effects) t.mainScene = e3;
  }
  set mainCamera(e3) {
    this.fullscreenMaterial.copyCameraSettings(e3);
    for (const t of this.effects) t.mainCamera = e3;
  }
  get encodeOutput() {
    return this.fullscreenMaterial.encodeOutput;
  }
  set encodeOutput(e3) {
    this.fullscreenMaterial.encodeOutput = e3;
  }
  get dithering() {
    return this.fullscreenMaterial.dithering;
  }
  set dithering(e3) {
    const t = this.fullscreenMaterial;
    t.dithering = e3, t.needsUpdate = true;
  }
  setEffects(e3) {
    for (const t of this.effects) t.removeEventListener("change", this.listener);
    this.effects = e3.sort((t, r) => r.attributes - t.attributes);
    for (const t of this.effects) t.addEventListener("change", this.listener);
  }
  updateMaterial() {
    const e3 = new La();
    let t = 0;
    for (const o of this.effects) if (o.blendMode.blendFunction === q.DST) e3.attributes |= o.getAttributes() & ct.DEPTH;
    else {
      if (e3.attributes & o.getAttributes() & ct.CONVOLUTION) throw new Error(`Convolution effects cannot be merged (${o.name})`);
      ec("e" + t++, o, e3);
    }
    let r = e3.shaderParts.get(te.FRAGMENT_HEAD), s = e3.shaderParts.get(te.FRAGMENT_MAIN_IMAGE), n = e3.shaderParts.get(te.FRAGMENT_MAIN_UV);
    const a = /\bblend\b/g;
    for (const o of e3.blendModes.values()) r += o.getShaderCode().replace(a, `blend${o.blendFunction}`) + `
`;
    e3.attributes & ct.DEPTH ? (e3.readDepth && (s = `float depth = readDepth(UV);

	` + s), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = false, e3.colorSpace === Me && (s += `color0 = sRGBToLinear(color0);
	`), e3.uvTransformation ? (n = `vec2 transformedUv = vUv;
` + n, e3.defines.set("UV", "transformedUv")) : e3.defines.set("UV", "vUv"), e3.shaderParts.set(te.FRAGMENT_HEAD, r), e3.shaderParts.set(te.FRAGMENT_MAIN_IMAGE, s), e3.shaderParts.set(te.FRAGMENT_MAIN_UV, n);
    for (const [o, u] of e3.shaderParts) u !== null && e3.shaderParts.set(o, u.trim().replace(/^#/, `
#`));
    this.skipRendering = t === 0, this.needsSwap = !this.skipRendering, this.fullscreenMaterial.setShaderData(e3);
  }
  recompile() {
    this.updateMaterial();
  }
  getDepthTexture() {
    return this.fullscreenMaterial.depthBuffer;
  }
  setDepthTexture(e3, t = Et) {
    this.fullscreenMaterial.depthBuffer = e3, this.fullscreenMaterial.depthPacking = t;
    for (const r of this.effects) r.setDepthTexture(e3, t);
  }
  render(e3, t, r, s, n) {
    for (const a of this.effects) a.update(e3, t, s);
    if (!this.skipRendering || this.renderToScreen) {
      const a = this.fullscreenMaterial;
      a.inputBuffer = t.texture, a.time += s * this.timeScale, e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(this.scene, this.camera);
    }
  }
  setSize(e3, t) {
    this.fullscreenMaterial.setSize(e3, t);
    for (const r of this.effects) r.setSize(e3, t);
  }
  initialize(e3, t, r) {
    this.renderer = e3;
    for (const s of this.effects) s.initialize(e3, t, r);
    this.updateMaterial(), r !== void 0 && r !== qe && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
  dispose() {
    super.dispose();
    for (const e3 of this.effects) e3.removeEventListener("change", this.listener), e3.dispose();
  }
  handleEvent(e3) {
    switch (e3.type) {
      case "change":
        this.recompile();
        break;
    }
  }
}, rc = class extends be {
  constructor(e3, t, { renderTarget: r, resolutionScale: s = 1, width: n = Ie.AUTO_SIZE, height: a = Ie.AUTO_SIZE, resolutionX: o = n, resolutionY: u = a } = {}) {
    super("NormalPass"), this.needsSwap = false, this.renderPass = new Mn(e3, t, new Di());
    const h = this.renderPass;
    h.ignoreBackground = true, h.skipShadowMapUpdate = true;
    const f = h.getClearPass();
    f.overrideClearColor = new Br(7829503), f.overrideClearAlpha = 1, this.renderTarget = r, this.renderTarget === void 0 && (this.renderTarget = new Fe(1, 1, { minFilter: yt, magFilter: yt }), this.renderTarget.texture.name = "NormalPass.Target");
    const A = this.resolution = new Ie(this, o, u, s);
    A.addEventListener("change", (m) => this.setSize(A.baseWidth, A.baseHeight));
  }
  set mainScene(e3) {
    this.renderPass.mainScene = e3;
  }
  set mainCamera(e3) {
    this.renderPass.mainCamera = e3;
  }
  get texture() {
    return this.renderTarget.texture;
  }
  getTexture() {
    return this.renderTarget.texture;
  }
  getResolution() {
    return this.resolution;
  }
  getResolutionScale() {
    return this.resolution.scale;
  }
  setResolutionScale(e3) {
    this.resolution.scale = e3;
  }
  render(e3, t, r, s, n) {
    const a = this.renderToScreen ? null : this.renderTarget;
    this.renderPass.render(e3, a, a);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height);
  }
};
function Vt(e3, t, r) {
  return t in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
new xe();
new xe();
function Dn(e3, t) {
  if (!(e3 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var We = function e(t, r, s) {
  var n = this;
  Dn(this, e), Vt(this, "dot2", function(a, o) {
    return n.x * a + n.y * o;
  }), Vt(this, "dot3", function(a, o, u) {
    return n.x * a + n.y * o + n.z * u;
  }), this.x = t, this.y = r, this.z = s;
}, sc = [new We(1, 1, 0), new We(-1, 1, 0), new We(1, -1, 0), new We(-1, -1, 0), new We(1, 0, 1), new We(-1, 0, 1), new We(1, 0, -1), new We(-1, 0, -1), new We(0, 1, 1), new We(0, -1, 1), new We(0, 1, -1), new We(0, -1, -1)], ys = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], Rs = new Array(512), bs = new Array(512), nc = function(t) {
  t > 0 && t < 1 && (t *= 65536), t = Math.floor(t), t < 256 && (t |= t << 8);
  for (var r = 0; r < 256; r++) {
    var s;
    r & 1 ? s = ys[r] ^ t & 255 : s = ys[r] ^ t >> 8 & 255, Rs[r] = Rs[r + 256] = s, bs[r] = bs[r + 256] = sc[s % 12];
  }
};
nc(0);
function ic(e3) {
  if (typeof e3 == "number") e3 = Math.abs(e3);
  else if (typeof e3 == "string") {
    var t = e3;
    e3 = 0;
    for (var r = 0; r < t.length; r++) e3 = (e3 + (r + 1) * (t.charCodeAt(r) % 96)) % 2147483647;
  }
  return e3 === 0 && (e3 = 311), e3;
}
function Ps(e3) {
  var t = ic(e3);
  return function() {
    var r = t * 48271 % 2147483647;
    return t = r, r / 2147483647;
  };
}
var ac = function e2(t) {
  var r = this;
  Dn(this, e2), Vt(this, "seed", 0), Vt(this, "init", function(s) {
    r.seed = s, r.value = Ps(s);
  }), Vt(this, "value", Ps(this.seed)), this.init(t);
};
new ac(Math.random());
const oc = x.createContext(null), Os = (e3) => (e3.getAttributes() & 2) === 2, cc = x.memo(x.forwardRef(({ children: e3, camera: t, scene: r, resolutionScale: s, enabled: n = true, renderPriority: a = 1, autoClear: o = true, depthBuffer: u, enableNormalPass: h, stencilBuffer: f, multisampling: A = 8, frameBufferType: m = ze }, w) => {
  const { gl: D, scene: O, camera: X, size: j } = lt(), L = r || O, k = t || X, [P, Y, N] = x.useMemo(() => {
    const E = new Ua(D, { depthBuffer: u, stencilBuffer: f, multisampling: A, frameBufferType: m });
    E.addPass(new Mn(L, k));
    let y = null, z = null;
    return h && (z = new rc(L, k), z.enabled = false, E.addPass(z), s !== void 0 && (y = new _o({ normalBuffer: z.texture, resolutionScale: s }), y.enabled = false, E.addPass(y))), [E, z, y];
  }, [k, D, u, f, A, m, L, h, s]);
  x.useEffect(() => P == null ? void 0 : P.setSize(j.width, j.height), [P, j]), Re((E, y) => {
    if (n) {
      const z = D.autoClear;
      D.autoClear = o, f && !o && D.clearStencil(), P.render(y), D.autoClear = z;
    }
  }, n ? a : 0);
  const W = x.useRef(null);
  x.useLayoutEffect(() => {
    var _a2;
    const E = [], y = W.current.__r3f;
    if (y && P) {
      const z = y.children;
      for (let K = 0; K < z.length; K++) {
        const Q = z[K].object;
        if (Q instanceof rr) {
          const $ = [Q];
          if (!Os(Q)) {
            let re = null;
            for (; (re = (_a2 = z[K + 1]) == null ? void 0 : _a2.object) instanceof rr && !Os(re); ) $.push(re), K++;
          }
          const U = new tc(k, ...$);
          E.push(U);
        } else Q instanceof be && E.push(Q);
      }
      for (const K of E) P == null ? void 0 : P.addPass(K);
      Y && (Y.enabled = true), N && (N.enabled = true);
    }
    return () => {
      for (const z of E) P == null ? void 0 : P.removePass(z);
      Y && (Y.enabled = false), N && (N.enabled = false);
    };
  }, [P, e3, k, Y, N]), x.useEffect(() => {
    const E = D.toneMapping;
    return D.toneMapping = Ti, () => {
      D.toneMapping = E;
    };
  }, [D]);
  const se = x.useMemo(() => ({ composer: P, normalPass: Y, downSamplingPass: N, resolutionScale: s, camera: k, scene: L }), [P, Y, N, s, k, L]);
  return x.useImperativeHandle(w, () => P, [P]), l.jsx(oc.Provider, { value: se, children: l.jsx("group", { ref: W, children: e3 }) });
}));
let lc = 0;
const Fs = /* @__PURE__ */ new WeakMap(), ls = (e3, t) => function({ blendFunction: r = t == null ? void 0 : t.blendFunction, opacity: s = t == null ? void 0 : t.opacity, ...n }) {
  let a = Fs.get(e3);
  if (!a) {
    const h = `@react-three/postprocessing/${e3.name}-${lc++}`;
    $s({ [h]: e3 }), Fs.set(e3, a = h);
  }
  const o = lt((h) => h.camera), u = si.useMemo(() => [...(t == null ? void 0 : t.args) ?? [], ...n.args ?? [{ ...t, ...n }]], [JSON.stringify(n)]);
  return l.jsx(a, { camera: o, "blendMode-blendFunction": r, "blendMode-opacity-value": s, ...n, args: u });
}, uc = ls(Fo, { blendFunction: 0 }), dc = ls(Yo), hc = ls(Zo), Or = 64;
function fc() {
  return l.jsxs("group", { children: [l.jsx(vc, {}), l.jsx(gc, {}), l.jsx(Us, { rotation: Math.PI / 4, height: 30, length: Es * 2.1 }), l.jsx(Us, { rotation: -Math.PI / 4, height: 37, length: Es * 2.1 }), l.jsx(pc, {}), l.jsx(Ac, {})] });
}
function gc() {
  const e3 = x.useMemo(() => Array.from({ length: Or }).map((t, r) => {
    const s = r / Or * Math.PI * 2, n = Math.PI * Ve / Or + 0.35;
    return { angle: s, half: n };
  }), []);
  return l.jsx(ut, { type: "fixed", colliders: false, friction: 1, children: e3.map(({ angle: t, half: r }, s) => l.jsxs("group", { position: [Math.cos(t) * Ve, It, Math.sin(t) * Ve], rotation: [0, -t, 0], children: [l.jsx(Ct, { args: [At / 2, 0.35, r], position: [0, -0.35, 0] }), [-1, 1].map((n) => l.jsx(Ct, { args: [0.35, 0.55, r], position: [n * At / 2, 0.2, 0] }, n))] }, s)) });
}
function vc() {
  return l.jsxs("group", { position: [0, It, 0], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], receiveShadow: true, children: [l.jsx("ringGeometry", { args: [Ve - At / 2, Ve + At / 2, 128] }), l.jsx("meshStandardMaterial", { color: H.deck, roughness: 0.45, metalness: 0.6, side: Ze })] }), [-At / 2, At / 2].map((e3, t) => l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.16, 0], children: [l.jsx("ringGeometry", { args: [Ve + e3 - 0.2, Ve + e3 + 0.2, 128] }), l.jsx("meshStandardMaterial", { color: t ? H.magenta : H.cyan, emissive: t ? H.magenta : H.cyan, emissiveIntensity: 3.4, toneMapped: false, side: Ze })] }, e3)), l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -0.45, 0], children: [l.jsx("ringGeometry", { args: [Ve - 1.6, Ve + 1.6, 96] }), l.jsx("meshStandardMaterial", { color: H.cyan, emissive: H.cyan, emissiveIntensity: 1.1, toneMapped: false, side: Ze })] })] });
}
function Us({ rotation: e3, height: t, length: r }) {
  return l.jsxs("group", { position: [0, t, 0], rotation: [0, e3, 0], children: [l.jsxs("mesh", { receiveShadow: true, castShadow: true, children: [l.jsx("boxGeometry", { args: [At, 0.5, r] }), l.jsx("meshStandardMaterial", { color: H.deck, roughness: 0.45, metalness: 0.6, flatShading: true })] }), [-1, 1].map((s) => l.jsxs("mesh", { position: [s * At / 2, 0.3, 0], children: [l.jsx("boxGeometry", { args: [0.22, 0.22, r] }), l.jsx("meshStandardMaterial", { color: s > 0 ? H.magenta : H.cyan, emissive: s > 0 ? H.magenta : H.cyan, emissiveIntensity: 3.6, toneMapped: false })] }, s)), Array.from({ length: Math.floor(r / 12) }).map((s, n) => l.jsxs("mesh", { position: [0, 0.28, -r / 2 + 6 + n * 12], children: [l.jsx("boxGeometry", { args: [0.5, 0.1, 4] }), l.jsx("meshStandardMaterial", { color: H.lime, emissive: H.lime, emissiveIntensity: 2.2, toneMapped: false })] }, n)), l.jsx(mc, { length: r })] });
}
function pc() {
  const e3 = x.useMemo(() => Array.from({ length: 16 }).map((t, r) => {
    const s = r / 16 * Math.PI * 2;
    return [Math.cos(s) * Ve, Math.sin(s) * Ve];
  }), []);
  return l.jsxs("group", { children: [l.jsxs(Rt, { limit: e3.length, castShadow: true, children: [l.jsx("cylinderGeometry", { args: [0.7, 1.3, It, 6] }), l.jsx("meshStandardMaterial", { color: H.deckEdge, roughness: 0.6, metalness: 0.4, flatShading: true }), e3.map(([t, r], s) => l.jsx(bt, { position: [t, It / 2, r] }, s))] }), l.jsxs(Rt, { limit: e3.length, children: [l.jsx("torusGeometry", { args: [1.5, 0.16, 6, 16] }), l.jsx("meshStandardMaterial", { color: H.cyan, emissive: H.cyan, emissiveIntensity: 2.8, toneMapped: false }), e3.map(([t, r], s) => l.jsx(bt, { position: [t, It - 2.4, r], rotation: [Math.PI / 2, 0, 0] }, s))] })] });
}
const Bn = l.jsx("boxGeometry", { args: [0.5, 0.3, 4.5] });
function Ac() {
  const e3 = x.useRef(null), t = x.useMemo(() => Array.from({ length: 14 }).map((r, s) => ({ angle: s / 14 * Math.PI * 2, direction: s % 2 ? 1 : -1, offset: s % 2 ? 1.9 : -1.9, speed: 0.055 + s % 5 * 0.012, color: s % 2 ? H.magenta : H.cyan })), []);
  return Re((r, s) => {
    e3.current && e3.current.children.forEach((n, a) => {
      const o = t[a];
      o.angle += s * o.speed * o.direction;
      const u = Ve + o.offset;
      n.position.set(Math.cos(o.angle) * u, It + 0.4, Math.sin(o.angle) * u), n.rotation.y = -o.angle + Math.PI / 2;
    });
  }), l.jsx("group", { ref: e3, children: t.map((r, s) => l.jsxs("mesh", { children: [Bn, l.jsx("meshStandardMaterial", { color: r.color, emissive: r.color, emissiveIntensity: 6, toneMapped: false })] }, s)) });
}
function mc({ length: e3 }) {
  const t = x.useRef(null), r = x.useMemo(() => Array.from({ length: 6 }).map((s, n) => ({ t: n / 6 * e3, direction: n % 2 ? 1 : -1, offset: n % 2 ? 1.9 : -1.9, speed: 26 + n % 3 * 9, color: n % 2 ? H.magenta : H.cyan })), [e3]);
  return Re((s, n) => {
    t.current && t.current.children.forEach((a, o) => {
      const u = r[o];
      u.t = (u.t + n * u.speed + e3) % e3, a.position.set(u.offset, 0.45, u.direction > 0 ? u.t - e3 / 2 : e3 / 2 - u.t);
    });
  }), l.jsx("group", { ref: t, children: r.map((s, n) => l.jsxs("mesh", { children: [Bn, l.jsx("meshStandardMaterial", { color: s.color, emissive: s.color, emissiveIntensity: 6, toneMapped: false })] }, n)) });
}
const Ls = { A: "01110 10001 10001 11111 10001 10001 10001", B: "11110 10001 10001 11110 10001 10001 11110", C: "01111 10000 10000 10000 10000 10000 01111", D: "11110 10001 10001 10001 10001 10001 11110", E: "11111 10000 10000 11110 10000 10000 11111", F: "11111 10000 10000 11110 10000 10000 10000", G: "01111 10000 10000 10111 10001 10001 01111", H: "10001 10001 10001 11111 10001 10001 10001", I: "11111 00100 00100 00100 00100 00100 11111", J: "00111 00010 00010 00010 00010 10010 01100", K: "10001 10010 10100 11000 10100 10010 10001", L: "10000 10000 10000 10000 10000 10000 11111", M: "10001 11011 10101 10101 10001 10001 10001", N: "10001 11001 10101 10011 10001 10001 10001", O: "01110 10001 10001 10001 10001 10001 01110", P: "11110 10001 10001 11110 10000 10000 10000", Q: "01110 10001 10001 10001 10101 10010 01101", R: "11110 10001 10001 11110 10100 10010 10001", S: "01111 10000 10000 01110 00001 00001 11110", T: "11111 00100 00100 00100 00100 00100 00100", U: "10001 10001 10001 10001 10001 10001 01110", V: "10001 10001 10001 10001 10001 01010 00100", W: "10001 10001 10001 10101 10101 11011 10001", X: "10001 10001 01010 00100 01010 10001 10001", Y: "10001 10001 01010 00100 00100 00100 00100", Z: "11111 00001 00010 00100 01000 10000 11111", 0: "01110 10001 10011 10101 11001 10001 01110", 1: "00100 01100 00100 00100 00100 00100 01110", 2: "01110 10001 00001 00010 00100 01000 11111", 3: "11110 00001 00001 01110 00001 00001 11110", 4: "00010 00110 01010 10010 11111 00010 00010", 5: "11111 10000 11110 00001 00001 10001 01110", 6: "00110 01000 10000 11110 10001 10001 01110", 7: "11111 00001 00010 00100 01000 01000 01000", 8: "01110 10001 10001 01110 10001 10001 01110", 9: "01110 10001 10001 01111 00001 00010 01100", "!": "00100 00100 00100 00100 00100 00000 00100", "?": "01110 10001 00001 00110 00100 00000 00100", ".": "00000 00000 00000 00000 00000 01100 01100", "'": "00100 00100 00000 00000 00000 00000 00000", "&": "01100 10010 10010 01100 10101 10010 01101", "-": "00000 00000 00000 11111 00000 00000 00000", "/": "00001 00010 00010 00100 01000 01000 10000", " ": "00000 00000 00000 00000 00000 00000 00000" }, Fr = 5, Ur = 7, Gs = 1;
function xc(e3) {
  const t = e3.toUpperCase().split(""), r = t.length * Fr + Math.max(0, t.length - 1) * Gs, s = [];
  return t.forEach((n, a) => {
    const o = (Ls[n] ?? Ls["?"]).split(" "), u = a * (Fr + Gs);
    o.forEach((h, f) => {
      for (let A = 0; A < Fr; A += 1) h[A] === "1" && s.push({ x: u + A - (r - 1) / 2, y: Ur - 1 - f - (Ur - 1) / 2 });
    });
  }), { cubes: s, width: r, height: Ur };
}
const fr = new sn();
function xt({ children: e3, position: t = [0, 0, 0], rotation: r = [0, 0, 0], size: s = 1, depth: n = 1, color: a = "#ffffff", emissive: o = "#000000", emissiveIntensity: u = 0, wave: h = 0 }) {
  const f = x.useRef(null), { cubes: A } = x.useMemo(() => xc(e3), [e3]), m = (w) => {
    f.current && (A.forEach((D, O) => {
      const X = h ? Math.sin(w * 1.6 + D.x * 0.35) * h : 0;
      fr.position.set(D.x * s, D.y * s + X, 0), fr.scale.setScalar(1), fr.updateMatrix(), f.current.setMatrixAt(O, fr.matrix);
    }), f.current.instanceMatrix.needsUpdate = true);
  };
  return x.useLayoutEffect(() => m(0)), Re(({ clock: w }) => {
    h && m(w.elapsedTime);
  }), l.jsxs("instancedMesh", { ref: f, args: [void 0, void 0, A.length], position: t, rotation: r, castShadow: true, receiveShadow: true, children: [l.jsx("boxGeometry", { args: [s * 0.96, s * 0.96, n] }), l.jsx("meshStandardMaterial", { color: a, emissive: o, emissiveIntensity: u, roughness: 0.35, metalness: 0.1, flatShading: true })] });
}
const xr = [Math.PI * 0.5, Math.PI, Math.PI * 1.5], Sn = (e3) => $t(e3), Lr = 9, Ec = 16, ue = { running: false, checkpoint: 0, time: 0, armed: true }, Hs = (e3) => Sn(e3), gr = (e3, t, r, s) => {
  const n = e3 - r.x, a = t - r.z;
  return n * n + a * a < s * s;
};
function wc(e3, t, r, s) {
  const n = Hs(0);
  if (ue.running) {
    ue.time += r;
    const a = xr[ue.checkpoint];
    a !== void 0 && gr(e3, t, Hs(a), Lr) && (ue.checkpoint += 1), ue.checkpoint >= xr.length && gr(e3, t, n, Lr) && (s.finishLap(ue.time), ue.running = false, ue.checkpoint = 0, ue.time = 0, ue.armed = false), (Math.hypot(e3, t) < 100 || b.y < 16) && (ue.running = false, ue.checkpoint = 0, ue.time = 0);
  } else ue.armed && gr(e3, t, n, Lr) && (ue.running = true, ue.checkpoint = 0, ue.time = 0, s.startLap(), ue.armed = false);
  !ue.armed && !gr(e3, t, n, Ec) && (ue.armed = true), b.raceRunning = ue.running, b.raceTime = ue.time, b.raceCheckpoint = ue.checkpoint, b.raceTotal = xr.length;
}
function Mc() {
  ue.running = false, ue.checkpoint = 0, ue.time = 0, ue.armed = true;
}
const rt = 15, Cc = 180, Dc = 168, Bc = 5.2, Ns = 0.34, In = 0.11;
function Sc(e3) {
  return Math.abs((e3 - $r + Math.PI) % (Math.PI * 2) - Math.PI) < In;
}
function zs(e3) {
  const t = [];
  for (let n = 0; n <= e3; n += 1) {
    const a = n / e3 * Math.PI * 2, o = $t(a);
    t.push(new ge(o.x, o.y, o.z));
  }
  const r = [], s = [];
  for (let n = 0; n < e3; n += 1) {
    const a = t[n + 1].clone().sub(t[n]);
    r.push(Math.atan2(a.x, a.z)), s.push(a.length());
  }
  return Array.from({ length: e3 }, (n, a) => {
    const o = t[a], u = t[a + 1], h = u.clone().sub(o), f = Math.hypot(h.x, h.z);
    let m = r[(a + 1) % e3] - r[a];
    m = (m + Math.PI) % (Math.PI * 2) - Math.PI;
    const w = m / Math.max(s[a], 1e-3);
    return { position: o.clone().lerp(u, 0.5), yaw: r[a], pitch: -Math.atan2(h.y, f), roll: ot.clamp(w * Bc, -Ns, Ns), length: h.length() + 0.6, angle: a / e3 * Math.PI * 2 };
  });
}
function Ic(e3) {
  const t = e3.map((r) => {
    const s = new yi(r.pitch, r.yaw, r.roll, "YXZ"), n = new Pt().setFromEuler(s);
    return { position: r.position.clone(), forward: new ge(0, 0, 1).applyQuaternion(n), right: new ge(1, 0, 0).applyQuaternion(n), up: new ge(0, 1, 0).applyQuaternion(n) };
  });
  return t.push(t[0]), t;
}
function Tc() {
  x.useMemo(() => zs(Dc), []);
  const e3 = x.useMemo(() => Ic(zs(Cc)), []);
  return l.jsxs("group", { children: [l.jsx(yc, { frames: e3 }), l.jsx(bc, { frames: e3 }), l.jsx(Pc, { frames: e3 }), l.jsx(Gc, {}), l.jsx(Lc, { frames: e3 }), l.jsx(Hc, {}), l.jsx(Nc, {}), l.jsx(zc, {})] });
}
function Gr(e3, t, r = true) {
  const s = [], n = (u, h, f) => {
    s.push(u.position.x + u.right.x * h + u.up.x * f, u.position.y + u.right.y * h + u.up.y * f, u.position.z + u.right.z * h + u.up.z * f);
  }, a = e3.length;
  for (let u = 0; u < t.length - 1; u += 1) {
    const h = t[u], f = t[u + 1];
    for (let A = 0; A < (r ? a : a - 1); A += 1) {
      const [m, w] = e3[A], [D, O] = e3[(A + 1) % a];
      n(h, m, w), n(f, m, w), n(f, D, O), n(h, m, w), n(f, D, O), n(h, D, O);
    }
  }
  const o = new Ot();
  return o.setAttribute("position", new qr(s, 3)), o.computeVertexNormals(), o;
}
const Be = rt / 2, Tn = (() => {
  const e3 = new Ot(), t = (r, s, n, a, o, u) => [r, 0, s, n, 0, a, o, 0, u];
  return e3.setAttribute("position", new qr([...t(-1.7, 0.1, 1.7, 0.1, 0, 2.4), ...t(-0.7, -2.2, 0.7, -2.2, 0.7, 0.1), ...t(-0.7, -2.2, 0.7, 0.1, -0.7, 0.1)], 3)), e3.computeVertexNormals(), e3;
})();
function yc({ frames: e3 }) {
  const t = x.useMemo(() => Gr([[-Be, 0], [Be, 0], [Be, -0.5], [-Be, -0.5]], e3), [e3]), r = x.useMemo(() => {
    const s = (A) => [[A * Be - 0.18, 0], [A * Be + 0.18, 0], [A * Be + 0.18, 0.9], [A * Be - 0.18, 0.9]], n = e3.length - 1, a = Math.round($r / (Math.PI * 2) * n), o = Math.ceil(In / (Math.PI * 2 / n)), u = (a + o) % n, h = (a - o + n) % n, f = [...e3.slice(u, n), ...e3.slice(0, h + 1)];
    return [Gr(s(-1), f), Gr(s(1), e3)];
  }, [e3]);
  return l.jsxs("group", { children: [l.jsx("mesh", { geometry: t, receiveShadow: true, children: l.jsx("meshStandardMaterial", { color: "#242a5c", emissive: "#2b3370", emissiveIntensity: 0.55, roughness: 0.55, metalness: 0.4, flatShading: true }) }), r.map((s, n) => l.jsx("mesh", { geometry: s, children: l.jsx("meshStandardMaterial", { color: n ? H.amber : H.cyan, emissive: n ? H.amber : H.cyan, emissiveIntensity: 3, toneMapped: false }) }, n)), l.jsx(Rc, { frames: e3 })] });
}
function Rc({ frames: e3 }) {
  const t = x.useMemo(() => {
    const s = [], n = new Wr();
    for (let a = 0; a < e3.length - 1; a += 3) {
      const o = e3[a], u = o.forward;
      n.makeBasis(o.right, o.up, u);
      const h = new Pt().setFromRotationMatrix(n);
      for (const f of [-1, 1]) s.push({ position: o.position.clone().addScaledVector(o.right, f * (Be - 1.1)).addScaledVector(o.up, 0.3), quaternion: h });
    }
    return s;
  }, [e3]), r = x.useMemo(() => {
    const s = [], n = new Wr();
    for (let a = 0; a < e3.length - 1; a += 5) {
      const o = e3[a];
      n.makeBasis(o.right, o.up, o.forward), s.push({ position: o.position.clone().addScaledVector(o.up, 0.3), quaternion: new Pt().setFromRotationMatrix(n) });
    }
    return s;
  }, [e3]);
  return l.jsxs("group", { children: [l.jsxs(Rt, { limit: t.length, range: t.length, children: [l.jsx("boxGeometry", { args: [0.5, 0.1, 0.5] }), l.jsx("meshStandardMaterial", { color: "#f2f5ff", emissive: "#cfe4ff", emissiveIntensity: 2.2, toneMapped: false }), t.map((s, n) => l.jsx(bt, { position: s.position, quaternion: s.quaternion }, n))] }), l.jsxs(Rt, { limit: r.length, range: r.length, children: [l.jsx("primitive", { object: Tn, attach: "geometry" }), l.jsx("meshStandardMaterial", { color: H.lime, emissive: H.lime, emissiveIntensity: 1.6, toneMapped: false, side: Ze }), r.map((s, n) => l.jsx(bt, { position: s.position, quaternion: s.quaternion }, n))] })] });
}
function ks(e3, t, r, s, n, a) {
  const o = new Float32Array(24);
  let u = 0;
  for (const h of [e3, t]) for (const [f, A] of [[r, n], [s, n], [s, a], [r, a]]) o[u++] = h.position.x + h.right.x * f + h.up.x * A, o[u++] = h.position.y + h.right.y * f + h.up.y * A, o[u++] = h.position.z + h.right.z * f + h.up.z * A;
  return o;
}
function bc({ frames: e3 }) {
  const t = x.useMemo(() => {
    const r = [];
    for (let s = 0; s + 2 < e3.length; s += 2) {
      const n = e3[s], a = e3[s + 2], o = s / (e3.length - 1) * Math.PI * 2, u = [];
      for (const h of [-1, 1]) h < 0 && Sc(o) || u.push({ side: h, points: ks(n, a, h * Be - 0.4, h * Be + 0.4, 1.9, 0) });
      r.push({ road: ks(n, a, -Be, Be, 0, -3.5), walls: u });
    }
    return r;
  }, [e3]);
  return l.jsx(ut, { type: "fixed", colliders: false, friction: 1, children: t.map((r, s) => l.jsxs("group", { children: [l.jsx(Yr, { args: [r.road] }), r.walls.map((n) => l.jsx(Yr, { args: [n.points] }, n.side))] }, s)) });
}
function Pc({ frames: e3 }) {
  const t = x.useMemo(() => e3.filter((r, s) => s % 12 === 0).map((r, s) => ({ base: r.position.clone().addScaledVector(r.right, (s % 2 ? 1 : -1) * (Be + 2.4)), up: r.up.clone() })), [e3]);
  return l.jsxs("group", { children: [l.jsxs(Rt, { limit: t.length, range: t.length, children: [l.jsx("cylinderGeometry", { args: [0.7, 1.5, 1, 6] }), l.jsx("meshStandardMaterial", { color: H.deckEdge, roughness: 0.6, flatShading: true }), t.map((r, s) => l.jsx(bt, { position: [r.base.x, r.base.y / 2 - 5, r.base.z], scale: [1, r.base.y + 10, 1] }, s))] }), l.jsxs(Rt, { limit: t.length, range: t.length, children: [l.jsx("octahedronGeometry", { args: [0.65, 0] }), l.jsx("meshStandardMaterial", { color: "#dfe9ff", emissive: "#bcd4ff", emissiveIntensity: 2.4, toneMapped: false }), t.map((r, s) => l.jsx(bt, { position: [r.base.x, r.base.y + 4.2, r.base.z] }, s))] })] });
}
const Oc = [0.55, 1.75, 2.9, 4.1, 5.4], Xt = 2.9, _t = 8, Kt = 1.5, Fc = (() => {
  const e3 = Xt, t = _t, r = Kt, s = [[-e3, 0, -t / 2], [e3, 0, -t / 2], [e3, r, t / 2], [-e3, r, t / 2], [-e3, 0, t / 2], [e3, 0, t / 2]], n = (u, h, f) => [...s[u], ...s[h], ...s[f]], a = new Float32Array([...n(0, 1, 2), ...n(0, 2, 3), ...n(4, 5, 1), ...n(4, 1, 0), ...n(5, 2, 1), ...n(4, 0, 3), ...n(4, 3, 5), ...n(3, 2, 5), ...n(3, 5, 4)]), o = new Ot();
  return o.setAttribute("position", new qr(a, 3)), o.computeVertexNormals(), o;
})(), Uc = (() => {
  const e3 = Xt, t = _t, r = Kt;
  return new Float32Array([-e3, 0, -t / 2, e3, 0, -t / 2, -e3, 0, t / 2, e3, 0, t / 2, -e3, r, t / 2, e3, r, t / 2]);
})();
function Lc({ frames: e3 }) {
  const t = x.useMemo(() => Oc.map((r, s) => {
    const n = e3.length - 1, a = Math.round(r / (Math.PI * 2) * n) % n, o = e3[a], u = s % 2 ? 1 : -1, h = new Wr().makeBasis(o.right, o.up, o.forward);
    return { position: o.position.clone().addScaledVector(o.right, u * (Be - Xt - 0.8)).addScaledVector(o.up, 0.02), quaternion: new Pt().setFromRotationMatrix(h) };
  }), [e3]);
  return l.jsx("group", { children: t.map((r, s) => l.jsxs("group", { position: r.position, quaternion: r.quaternion, children: [l.jsx("mesh", { geometry: Fc, castShadow: true, receiveShadow: true, children: l.jsx("meshStandardMaterial", { color: "#33306e", emissive: H.lime, emissiveIntensity: 0.28, roughness: 0.5, metalness: 0.35, flatShading: true }) }), l.jsxs("mesh", { position: [0, Kt + 0.06, _t / 2], children: [l.jsx("boxGeometry", { args: [Xt * 2, 0.14, 0.3] }), l.jsx("meshStandardMaterial", { color: H.lime, emissive: H.lime, emissiveIntensity: 3, toneMapped: false })] }), [-1, 1].map((n) => l.jsxs("mesh", { position: [n * Xt, Kt / 2 - 0.1, 0], rotation: [Math.atan2(Kt, _t), 0, 0], children: [l.jsx("boxGeometry", { args: [0.12, 0.12, _t] }), l.jsx("meshStandardMaterial", { color: H.amber, emissive: H.amber, emissiveIntensity: 2.6, toneMapped: false })] }, n)), l.jsx(ut, { type: "fixed", colliders: false, friction: 1, children: l.jsx(Yr, { args: [Uc] }) })] }, s)) });
}
function Gc() {
  const e3 = $r, t = Ri(e3), r = Math.cos(e3), s = Math.sin(e3), n = t.radius - Be + 2 - ws, a = t.height, o = Math.atan2(a, n), u = Math.hypot(a, n), h = 16, f = 0.3 / Math.cos(o), A = u + h, m = ws + n / 2 - h / 2 * Math.cos(o), w = a / 2 - f - h / 2 * Math.sin(o);
  return l.jsxs("group", { position: [r * m, w, s * m], rotation: [0, -e3 + Math.PI / 2, 0], children: [l.jsxs("group", { rotation: [-o, 0, 0], children: [l.jsxs("mesh", { receiveShadow: true, castShadow: true, children: [l.jsx("boxGeometry", { args: [rt, 0.6, A] }), l.jsx("meshStandardMaterial", { color: H.deck, roughness: 0.5, metalness: 0.5, flatShading: true })] }), [-1, 1].map((D) => l.jsxs("mesh", { position: [D * rt / 2, 0.5, 0], children: [l.jsx("boxGeometry", { args: [0.32, 0.5, A] }), l.jsx("meshStandardMaterial", { color: D > 0 ? H.amber : H.cyan, emissive: D > 0 ? H.amber : H.cyan, emissiveIntensity: 3.2, toneMapped: false })] }, D)), Array.from({ length: Math.floor(A / 8) }).map((D, O) => l.jsxs("mesh", { position: [0, 0.34, -A / 2 + 5 + O * 8], children: [l.jsx("boxGeometry", { args: [3.6, 0.08, 0.8] }), l.jsx("meshStandardMaterial", { color: H.lime, emissive: H.lime, emissiveIntensity: 2, toneMapped: false })] }, O)), l.jsxs(ut, { type: "fixed", colliders: false, friction: 1, children: [l.jsx(Ct, { args: [rt / 2, 0.3, A / 2] }), [-1, 1].map((D) => l.jsx(Ct, { args: [0.32, 0.8, A / 2], position: [D * rt / 2, 0.8, 0] }, D))] })] }), Array.from({ length: 5 }).map((D, O) => {
    const X = (O + 1) / 6, j = -A / 2 + A * X, L = -w + Math.sin(o) * j * 0.5;
    return l.jsxs("mesh", { position: [0, L / 2 + w / 2 - 2, j * Math.cos(o)], children: [l.jsx("cylinderGeometry", { args: [0.7, 1.4, Math.max(w + Math.sin(o) * j, 2), 6] }), l.jsx("meshStandardMaterial", { color: H.deckEdge, roughness: 0.65, flatShading: true })] }, O);
  })] });
}
function Hc() {
  const e3 = $t(0), t = $t(0.02), r = Math.atan2(t.x - e3.x, t.z - e3.z);
  return l.jsxs("group", { position: [e3.x, e3.y, e3.z], rotation: [0, r, 0], children: [[-1, 1].map((s) => l.jsxs("mesh", { position: [s * rt / 2, 5, 0], castShadow: true, children: [l.jsx("boxGeometry", { args: [1.1, 10, 1.1] }), l.jsx("meshStandardMaterial", { color: H.deckEdge, roughness: 0.5, metalness: 0.5, flatShading: true })] }, s)), [8.4, 9.6].map((s) => l.jsxs("mesh", { position: [0, s, 0], children: [l.jsx("boxGeometry", { args: [rt + 1.6, 0.5, 0.6] }), l.jsx("meshStandardMaterial", { color: H.lime, emissive: H.lime, emissiveIntensity: 1.2 })] }, s)), Array.from({ length: 10 }).map((s, n) => [0, 1].map((a) => l.jsxs("mesh", { position: [-rt / 2 + 0.75 + n * 1.5, 0.3, a * 1.5 - 0.75], children: [l.jsx("boxGeometry", { args: [1.5, 0.08, 1.5] }), l.jsx("meshStandardMaterial", { color: (n + a) % 2 ? "#f2f5ff" : "#141634", emissive: (n + a) % 2 ? "#f2f5ff" : "#000000", emissiveIntensity: (n + a) % 2 ? 0.5 : 0 })] }, `${n}-${a}`))), l.jsx(xt, { position: [0, 11.6, -0.6], rotation: [0, Math.PI / 2, 0], size: 0.5, depth: 0.4, color: "#eaf3ff", emissive: H.lime, emissiveIntensity: 1.1, children: "START" }), l.jsx(xt, { position: [0, 11.6, 0.6], rotation: [0, -Math.PI / 2, 0], size: 0.5, depth: 0.4, color: "#eaf3ff", emissive: H.amber, emissiveIntensity: 1.1, children: "FINISH" }), l.jsx("mesh", { geometry: Tn, position: [0, 0.34, 8], scale: [2, 1, 2], children: l.jsx("meshStandardMaterial", { color: H.lime, emissive: H.lime, emissiveIntensity: 2.6, toneMapped: false, side: Ze }) }), l.jsx("pointLight", { position: [0, 7, 0], color: H.lime, intensity: 26, distance: 38, decay: 2 })] });
}
function Nc() {
  const e3 = x.useRef(null);
  return Re(({ clock: t }) => {
    e3.current && e3.current.children.forEach((r, s) => {
      const n = r.children[0];
      if (!n) return;
      const a = n.material, o = b.raceCheckpoint === s && b.raceRunning;
      a.emissiveIntensity = o ? 2.6 + Math.sin(t.elapsedTime * 6) * 1.2 : b.raceRunning ? 0.4 : 1.2;
    });
  }), l.jsx("group", { ref: e3, children: xr.map((t, r) => {
    const s = Sn(t), n = $t(t + 0.02), a = Math.atan2(n.x - s.x, n.z - s.z);
    return l.jsxs("group", { position: [s.x, s.y, s.z], rotation: [0, a, 0], children: [l.jsxs("mesh", { position: [0, 4, 0], children: [l.jsx("boxGeometry", { args: [rt, 0.5, 0.5] }), l.jsx("meshStandardMaterial", { color: H.magenta, emissive: H.magenta, emissiveIntensity: 1.2, toneMapped: false })] }), [-1, 1].map((o) => l.jsxs("mesh", { position: [o * rt / 2, 2, 0], children: [l.jsx("boxGeometry", { args: [0.4, 4, 0.4] }), l.jsx("meshStandardMaterial", { color: H.deckEdge, roughness: 0.6, flatShading: true })] }, o)), l.jsx(xt, { position: [0, 5.4, 0], rotation: [0, Math.PI / 2, 0], size: 0.34, depth: 0.3, color: "#f6e6ff", emissive: H.magenta, emissiveIntensity: 1, children: String(r + 1) })] }, r);
  }) });
}
function zc() {
  const e3 = x.useRef(false), t = er((r) => r.circuitMode);
  return Re((r, s) => {
    const a = Math.hypot(b.x, b.z) > 105 && b.y > 17;
    a !== e3.current && (e3.current = a, a ? st.askCircuitMode() : (st.leaveCircuit(), Mc())), t === "race" && wc(b.x, b.z, s, st);
  }), null;
}
const Qs = 90, Yt = 120, js = 60, Cr = (() => {
  const t = document.createElement("canvas");
  t.width = 64, t.height = 64;
  const r = t.getContext("2d"), s = r.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
  s.addColorStop(0, "rgba(255,255,255,0.9)"), s.addColorStop(0.45, "rgba(255,255,255,0.35)"), s.addColorStop(1, "rgba(255,255,255,0)"), r.fillStyle = s, r.fillRect(0, 0, 64, 64);
  const n = new bi(t);
  return n.needsUpdate = true, n;
})(), us = (e3) => ({ positions: new Float32Array(e3 * 3).fill(9999), life: new Float32Array(e3), sizes: new Float32Array(e3), next: 0 });
function ds(e3, t, r, s, n) {
  const a = e3.next % (e3.life.length || 1);
  e3.next += 1, e3.positions[a * 3] = t, e3.positions[a * 3 + 1] = r, e3.positions[a * 3 + 2] = s, e3.life[a] = 1, e3.sizes[a] = n;
}
function kc() {
  return l.jsxs("group", { children: [l.jsx(Qc, {}), l.jsx(jc, {}), l.jsx(Yc, {})] });
}
function Qc() {
  const e3 = x.useRef(null), t = x.useMemo(() => us(Qs), []), r = x.useMemo(() => {
    const s = new Ot();
    return s.setAttribute("position", new qt(t.positions, 3)), s.setAttribute("size", new qt(t.sizes, 1)), s;
  }, [t]);
  return Re((s, n) => {
    const a = b.driftActive && b.speed > 6;
    a && ds(t, b.x + (Math.random() - 0.5) * 1.1, b.y - 0.5, b.z + (Math.random() - 0.5) * 1.1, 1.4 + Math.random() * 1.6);
    for (let o = 0; o < Qs; o += 1) t.life[o] <= 0 || (t.life[o] -= n * 0.85, t.positions[o * 3 + 1] += n * 1.4, t.sizes[o] += n * 2.2, t.life[o] <= 0 && (t.positions[o * 3 + 1] = 9999));
    if (r.attributes.position.needsUpdate = true, r.attributes.size.needsUpdate = true, e3.current) {
      const o = e3.current.material;
      o.opacity = a ? 0.5 : 0.32;
    }
  }), l.jsx("points", { ref: e3, geometry: r, frustumCulled: false, children: l.jsx("pointsMaterial", { size: 2.4, map: Cr, alphaMap: Cr, color: "#cfd4ff", transparent: true, opacity: 0.4, depthWrite: false, sizeAttenuation: true, toneMapped: false }) });
}
function jc() {
  const e3 = x.useRef(null), t = x.useMemo(() => us(Yt), []), r = x.useMemo(() => new sn(), []), s = x.useMemo(() => new Float32Array(Yt), []);
  return Re((n, a) => {
    if (e3.current) {
      if (b.driftActive && b.speed > 6) {
        const o = t.next % Yt;
        s[o] = b.heading, ds(t, b.x, b.y - 0.72, b.z, 1);
      }
      for (let o = 0; o < Yt; o += 1) {
        const u = t.life[o] > 0;
        u && (t.life[o] -= a * 0.12), r.position.set(t.positions[o * 3], t.positions[o * 3 + 1], t.positions[o * 3 + 2]), r.rotation.set(-Math.PI / 2, 0, -s[o]), r.scale.setScalar(u ? 1 : 1e-4), r.updateMatrix(), e3.current.setMatrixAt(o, r.matrix);
      }
      e3.current.instanceMatrix.needsUpdate = true;
    }
  }), l.jsxs("instancedMesh", { ref: e3, args: [void 0, void 0, Yt], frustumCulled: false, children: [l.jsx("planeGeometry", { args: [2, 1.1] }), l.jsx("meshBasicMaterial", { color: "#0a0a16", transparent: true, opacity: 0.38, depthWrite: false })] });
}
function Yc() {
  const e3 = x.useRef(null), t = x.useMemo(() => us(js), []), r = er((a) => a.garage.paint), s = nn[r] ?? an[0], n = x.useMemo(() => {
    const a = new Ot();
    return a.setAttribute("position", new qt(t.positions, 3)), a;
  }, [t]);
  return Re((a, o) => {
    b.boosting && ds(t, b.x + Math.sin(b.heading) * 2.4 + (Math.random() - 0.5) * 0.8, b.y - 0.1 + (Math.random() - 0.5) * 0.3, b.z + Math.cos(b.heading) * 2.4 + (Math.random() - 0.5) * 0.8, 1);
    for (let u = 0; u < js; u += 1) t.life[u] <= 0 || (t.life[u] -= o * 2.4, t.positions[u * 3 + 1] += o * 0.6, t.life[u] <= 0 && (t.positions[u * 3 + 1] = 9999));
    if (n.attributes.position.needsUpdate = true, e3.current) {
      const u = e3.current.material;
      u.opacity = b.boosting ? 0.95 : 0.5;
    }
  }), l.jsx("points", { ref: e3, geometry: n, frustumCulled: false, children: l.jsx("pointsMaterial", { size: 1.5, map: Cr, alphaMap: Cr, color: s.trim, transparent: true, opacity: 0.9, depthWrite: false, sizeAttenuation: true, toneMapped: false, blending: en }) });
}
function Wc({ zone: e3 }) {
  const [t, r] = e3.position, s = er((A) => A.activeZone === e3.id), n = er((A) => A.visited.includes(e3.id)), a = x.useRef(null), o = x.useRef(null), u = x.useRef(null), h = x.useMemo(() => Math.atan2(-t, -r), [t, r]), f = x.useMemo(() => Array.from({ length: 10 }).map((A, m) => {
    const w = m / 10 * Math.PI * 2 + Math.PI / 10;
    return [Math.cos(w) * (e3.radius + 4), Math.sin(w) * (e3.radius + 4)];
  }), [e3.radius]);
  return Re(({ clock: A }) => {
    const m = A.elapsedTime;
    a.current && (a.current.position.y = 16 + Math.sin(m * 0.9) * 0.5, a.current.rotation.y = h + Math.sin(m * 0.4) * 0.05);
    const w = s ? 1.5 + Math.sin(m * 4) * 0.35 : 1;
    if (o.current) {
      const D = o.current.material;
      D.opacity = 0.1 * w + (n ? 0.05 : 0);
    }
    u.current && (u.current.intensity = 52 * w);
  }), l.jsxs(l.Fragment, { children: [l.jsxs(ut, { type: "fixed", colliders: false, position: [t, 0, r], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.05, 0], receiveShadow: true, children: [l.jsx("circleGeometry", { args: [e3.radius + 6, 56] }), l.jsx("meshStandardMaterial", { color: "#4a4688", roughness: 0.85 })] }), l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.07, 0], receiveShadow: true, children: [l.jsx("ringGeometry", { args: [e3.radius - 1.2, e3.radius, 56] }), l.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.glow, emissiveIntensity: s ? 2.6 : 1.7, toneMapped: false })] }), f.map(([A, m], w) => l.jsx(Pi, { args: [3.5, 0.8], position: [A, 3.5, m] }, w))] }), l.jsxs("group", { position: [t, 0, r], children: [f.map(([A, m], w) => l.jsxs("group", { position: [A, 0, m], children: [l.jsxs("mesh", { castShadow: true, receiveShadow: true, position: [0, 3.4, 0], children: [l.jsx("boxGeometry", { args: [1.5, 6.8, 1.5] }), l.jsx("meshStandardMaterial", { color: "#37336b", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 7.2, 0], children: [l.jsx("octahedronGeometry", { args: [0.85, 0] }), l.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.color, emissiveIntensity: 3.2, toneMapped: false })] })] }, w)), l.jsxs("mesh", { ref: o, position: [0, 22, 0], children: [l.jsx("cylinderGeometry", { args: [e3.radius - 2, e3.radius + 1, 44, 24, 1, true] }), l.jsx("meshBasicMaterial", { color: e3.glow, transparent: true, opacity: 0.12, side: Ze, depthWrite: false, toneMapped: false })] }), l.jsx("pointLight", { ref: u, position: [0, 12, 0], color: e3.color, distance: 70, decay: 2 }), l.jsx("group", { ref: a, children: l.jsx(xt, { size: 0.95, depth: 1.2, color: e3.glow, emissive: e3.color, emissiveIntensity: s ? 2.2 : 1.1, wave: 0.25, children: e3.sign }) })] })] });
}
function Vc({ position: e3 }) {
  const t = x.useMemo(() => {
    const r = [];
    for (let s = 0; s < 4; s += 1) for (let n = 0; n <= s; n += 1) r.push([e3[0] + (n - s / 2) * 2.4, 1.4, e3[1] + s * 2.2 - 3]);
    return r;
  }, [e3]);
  return l.jsx(l.Fragment, { children: t.map((r, s) => l.jsx(Xc, { position: r }, s)) });
}
function Xc({ position: e3 }) {
  const t = x.useRef(null), r = x.useRef(new ge(...e3));
  return Re(() => {
    const s = t.current;
    if (!s) return;
    const n = s.translation();
    (n.y < -6 || new ge(n.x, 0, n.z).distanceTo(new ge(r.current.x, 0, r.current.z)) > 40) && (s.setTranslation({ x: r.current.x, y: r.current.y + 6, z: r.current.z }, true), s.setLinvel({ x: 0, y: 0, z: 0 }, true), s.setAngvel({ x: 0, y: 0, z: 0 }, true));
  }), l.jsxs(ut, { ref: t, position: e3, colliders: false, mass: 0.4, restitution: 0.35, linearDamping: 0.4, angularDamping: 0.6, children: [l.jsx(Ct, { args: [0.45, 1.3, 0.45] }), l.jsxs("mesh", { castShadow: true, position: [0, -1.15, 0], children: [l.jsx("boxGeometry", { args: [1.1, 0.3, 1.1] }), l.jsx("meshStandardMaterial", { color: "#3a3468", roughness: 0.6, flatShading: true })] }), l.jsxs("mesh", { castShadow: true, position: [0, -0.5, 0], children: [l.jsx("cylinderGeometry", { args: [0.16, 0.24, 1, 6] }), l.jsx("meshStandardMaterial", { color: "#ffc861", metalness: 0.8, roughness: 0.25, flatShading: true })] }), l.jsxs("mesh", { castShadow: true, position: [0, 0.45, 0], children: [l.jsx("cylinderGeometry", { args: [0.62, 0.3, 1.2, 8] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ff9d2e", emissiveIntensity: 0.9, metalness: 0.85, roughness: 0.2, flatShading: true })] }), [-0.72, 0.72].map((s) => l.jsxs("mesh", { position: [s, 0.5, 0], rotation: [0, 0, s > 0 ? -0.5 : 0.5], children: [l.jsx("torusGeometry", { args: [0.3, 0.08, 6, 10, Math.PI] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", metalness: 0.85, roughness: 0.2 })] }, s))] });
}
function Hr({ position: e3, rotation: t = 0 }) {
  return l.jsxs(ut, { type: "fixed", colliders: "hull", position: [e3[0], 0, e3[1]], rotation: [0, t, 0], children: [l.jsxs("mesh", { castShadow: true, receiveShadow: true, rotation: [-0.3, 0, 0], position: [0, 1.3, 0], children: [l.jsx("boxGeometry", { args: [9, 0.6, 12] }), l.jsx("meshStandardMaterial", { color: "#5b56a4", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 1.72, -5.4], rotation: [-0.3, 0, 0], children: [l.jsx("boxGeometry", { args: [9, 0.12, 1.2] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ffae3a", emissiveIntensity: 2.5, toneMapped: false })] })] });
}
function Ys({ position: e3 }) {
  const t = x.useMemo(() => {
    const r = [];
    for (let s = 0; s < 3; s += 1) {
      const n = 3 - s;
      for (let a = 0; a < n; a += 1) r.push([e3[0] + (a - (n - 1) / 2) * 1.7, 0.85 + s * 1.6, e3[1]]);
    }
    return r;
  }, [e3]);
  return l.jsx(l.Fragment, { children: t.map((r, s) => l.jsxs(ut, { position: r, colliders: false, mass: 0.5, restitution: 0.2, children: [l.jsx(Ct, { args: [0.78, 0.78, 0.78] }), l.jsxs("mesh", { castShadow: true, receiveShadow: true, children: [l.jsx("boxGeometry", { args: [1.56, 1.56, 1.56] }), l.jsx("meshStandardMaterial", { color: "#6d5cc4", roughness: 0.65, flatShading: true })] }), l.jsxs("mesh", { children: [l.jsx("boxGeometry", { args: [1.62, 0.16, 1.62] }), l.jsx("meshStandardMaterial", { color: "#c3b4ff", emissive: "#8f7bff", emissiveIntensity: 1.4, toneMapped: false })] })] }, s)) });
}
const _c = 62, Ws = 0.22, Kc = 34, Zc = 58, Jc = 1.6, Vs = 30, qc = 44, $c = 96, el = 2.6, tl = 1.45, Xs = 0.9, rl = 0.22, yn = 100, sl = 33, nl = 34, il = 22, al = 12, ol = 13, cl = 7, ll = 11.5, ul = 3.4, dl = 5.4;
function hl(e3, t, r) {
  const s = Math.min(Math.abs(e3) / t, 1), n = Ws + (1 - Ws) * (1 - s * s);
  return (r ? $c : _c) * n;
}
const Zr = { baseFov: 55 }, vr = [0, 1.6, 11], fl = 3.4, gl = 7, vl = 0.75, pl = 1.35, Al = 0.42, gt = new ge(), Nr = new ge(), zr = new ge(), vt = new ge(), kr = new Pt(), Qr = new ge(), jr = new ge(), at = new ge(), pr = new ge(), _s = new Pt(), Ar = new ge(), ml = new ge(0, dl, 0), xl = new ge(0, 1.2, 0);
function El(e3, { lateral: t, speed: r, delta: s }) {
  if (t > fl && r > gl) {
    e3.held += s, e3.lapsed = 0;
    const a = Math.min(1 + Math.floor(e3.held), 8);
    e3.chain += t * r * 0.12 * a * s, b.driftMultiplier = a, b.driftAngle = Math.min(t / 12, 1), b.driftActive = true;
  } else e3.chain > 0 ? (e3.lapsed += s, b.driftAngle = Math.max(b.driftAngle - s * 2, 0), e3.lapsed >= vl && (st.bankDrift(e3.chain), e3.chain = 0, e3.held = 0, e3.lapsed = 0, b.driftMultiplier = 1, b.driftActive = false)) : (b.driftActive = false, b.driftMultiplier = 1, b.driftAngle = Math.max(b.driftAngle - s * 2, 0));
  b.driftChain = e3.chain;
}
function wl(e3, { grounded: t, yaw: r, delta: s }) {
  if (!t) {
    let n = r - e3.lastYaw;
    n = (n + Math.PI) % (Math.PI * 2) - Math.PI, e3.spin += Math.abs(n), e3.lastYaw = r, e3.time += s, e3.airborne = true, b.airTime = e3.time, b.airSpin = e3.spin, b.airborne = e3.time > 0.2;
    return;
  }
  if (e3.airborne && e3.time >= Al) {
    const n = Math.floor(e3.spin / (Math.PI * 2));
    st.landTrick(e3.time, n), b.boost = Math.min(yn, b.boost + il);
  }
  e3.airborne = false, e3.time = 0, e3.spin = 0, e3.lastYaw = r, b.airborne = false, b.airTime = 0, b.airSpin = 0;
}
function Ml({ onMove: e3 }) {
  const { world: t, rapier: r } = Oi(), s = x.useRef({ airborne: false, time: 0, spin: 0, lastYaw: 0 }), n = x.useRef(null), a = x.useRef(null), o = Fi(), u = er((L) => L.garage), h = nn[u.paint] ?? an[0], f = x.useRef(h);
  f.current = h;
  const A = x.useRef(false), m = x.useRef(new ge()), w = x.useRef({ chain: 0, held: 0, lapsed: 0 }), D = x.useRef(false), O = x.useRef(0), X = x.useRef(0), j = () => {
    const L = n.current;
    L && (L.setTranslation({ x: vr[0], y: vr[1], z: vr[2] }, true), L.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true), L.setLinvel({ x: 0, y: 0, z: 0 }, true), L.setAngvel({ x: 0, y: 0, z: 0 }, true));
  };
  return Re((L, k) => {
    var _a2;
    const P = n.current;
    if (!P) return;
    const Y = Math.min(k, 1 / 20), N = Gi(), W = P.rotation();
    kr.set(W.x, W.y, W.z, W.w), gt.set(0, 0, -1).applyQuaternion(kr), Nr.set(1, 0, 0).applyQuaternion(kr);
    const se = P.linvel();
    zr.set(se.x, se.y, se.z);
    const E = zr.dot(gt), y = zr.dot(Nr), z = P.mass(), K = N.backward > 0 && E > Jc, Q = K ? 0 : N.forward - N.backward, $ = b.boost > al || D.current && b.boost > 0, U = N.boost && Q > 0 && $;
    D.current = U, U && (b.boost = Math.max(0, b.boost - sl * Y));
    const re = U ? qc : Vs;
    if (K) vt.copy(gt).multiplyScalar(-Zc * z * Y), P.applyImpulse(vt, true);
    else if (Q !== 0 && Math.abs(E) < re) {
      const Pe = Q > 0 ? hl(E, re, U) : -Kc;
      vt.copy(gt).multiplyScalar(Pe * z * Y), P.applyImpulse(vt, true);
    }
    const Z = N.brake ? Xs * rl : Xs;
    if (vt.copy(Nr).multiplyScalar(-y * Z * z), P.applyImpulse(vt, true), Q === 0 || N.brake) {
      const Pe = N.brake ? Q > 0 ? 0.7 : 2.4 : 0.85;
      vt.copy(gt).multiplyScalar(-E * Pe * z * Y), P.applyImpulse(vt, true);
    }
    const Te = N.left - N.right, _e = Math.min(Math.abs(E) / 6, 1), Le = Q !== 0 ? Math.max(_e, 0.4) : _e, ae = E < -0.4 ? -1 : 1, $e = el * (N.brake ? tl : 1), oe = P.angvel();
    P.setAngvel({ x: oe.x, y: Te * $e * Le * ae, z: oe.z }, true);
    const me = P.translation();
    if (at.set(me.x, me.y, me.z), (N.reset || me.y < -14) && j(), b.x = at.x, b.y = at.y, b.z = at.z, b.heading = Math.atan2(gt.x, gt.z), b.speed = Math.abs(E), st.setSpeed(b.speed), e3 == null ? void 0 : e3(at), El(w.current, { lateral: Math.abs(y), speed: Math.abs(E), delta: Y }), b.driftActive) {
      const Pe = Math.min(Math.abs(y) / 9, 1) * nl * Y;
      b.boost = Math.min(yn, b.boost + Pe);
    }
    b.boosting = U;
    const Ge = O.current - Math.abs(E);
    Ge > 7 && !K && O.current > 9 && (st.registerImpact(), X.current = Math.min(1, X.current + Ge / 26)), O.current = Math.abs(E), X.current = Math.max(0, X.current - Y * 2.6);
    const wt = new r.Ray({ x: at.x, y: at.y, z: at.z }, { x: 0, y: -1, z: 0 }), ne = t.castRay(wt, pl, true, void 0, void 0, void 0, P);
    if (wl(s.current, { grounded: ne !== null, yaw: b.heading, delta: Y }), a.current) {
      const Pe = ot.clamp(-Te * _e * 0.16, -0.2, 0.2), Ir = ot.clamp(-Q * 0.05, -0.08, 0.08), ar = 1 - Math.pow(5e-4, Y), or = 1 - Math.pow(2e-3, Y);
      a.current.rotation.z = ot.lerp(a.current.rotation.z, Pe, ar), a.current.rotation.x = ot.lerp(a.current.rotation.x, Ir, or);
    }
    Li(o.current, { speed: E, steer: Te, throttle: Q, brake: N.brake, delta: Y, paint: f.current });
    const He = (_a2 = a.current) == null ? void 0 : _a2.parent;
    He ? (He.getWorldPosition(pr), He.getWorldQuaternion(_s), Ar.set(0, 0, -1).applyQuaternion(_s)) : (pr.copy(at), Ar.copy(gt));
    const ke = Math.min(Math.abs(E) / Vs, 1.35);
    Qr.copy(pr).addScaledVector(Ar, -ll - ke * ul).add(ml);
    const Dt = L.camera, ir = Zr.baseFov + ke * ol + (U ? cl : 0);
    if (Math.abs(Dt.fov - ir) > 0.01 && (Dt.fov = ot.lerp(Dt.fov, ir, 1 - Math.pow(0.02, Y)), Dt.updateProjectionMatrix()), jr.copy(pr).addScaledVector(Ar, 6).add(xl), A.current ? (L.camera.position.lerp(Qr, 1 - Math.pow(22e-4, Y)), m.current.lerp(jr, 1 - Math.pow(6e-4, Y))) : (L.camera.position.copy(Qr), m.current.copy(jr), A.current = true), X.current > 1e-3) {
      const Pe = X.current * X.current * 1.4;
      L.camera.position.x += (Math.random() - 0.5) * Pe, L.camera.position.y += (Math.random() - 0.5) * Pe, L.camera.position.z += (Math.random() - 0.5) * Pe;
    }
    L.camera.lookAt(m.current);
  }), l.jsxs(ut, { ref: n, position: vr, colliders: false, mass: 1, friction: 0.6, restitution: 0.1, linearDamping: 0.35, angularDamping: 4, enabledRotations: [true, true, false], ccd: true, name: "player", children: [l.jsx(Ct, { args: [1, 0.5, 2.05], density: 2.6, friction: 0.15 }), l.jsx("group", { ref: a, children: l.jsx(Ui, { rig: o, paint: h, design: u.design }) })] });
}
function yl() {
  const e3 = x.useRef(null);
  x.useEffect(() => {
    st.hydrateGarage();
  }, []);
  const t = x.useCallback((r) => {
    let s = null;
    for (const n of Vr) {
      const [a, o] = n.position;
      if (Math.hypot(r.x - a, r.z - o) < n.radius + 9) {
        s = n.id;
        break;
      }
    }
    s !== e3.current && (e3.current && st.leaveZone(e3.current), s && st.enterZone(s), e3.current = s);
  }, []);
  return l.jsxs(l.Fragment, { children: [l.jsx(Cl, {}), l.jsx("color", { attach: "background", args: [Nt.fog] }), l.jsx("fogExp2", { attach: "fog", args: [Nt.fog, 75e-4] }), l.jsx("hemisphereLight", { args: [Nt.horizon, Nt.ground, 1.55] }), l.jsx("ambientLight", { intensity: 0.5, color: "#6c5fbb" }), l.jsx("directionalLight", { position: [48, 70, 28], intensity: 1.9, color: Nt.moon, castShadow: true, "shadow-mapSize": [1024, 1024], "shadow-camera-near": 1, "shadow-camera-far": 220, "shadow-camera-left": -90, "shadow-camera-right": 90, "shadow-camera-top": 90, "shadow-camera-bottom": -90, "shadow-bias": -6e-4 }), l.jsx(Ia, { radius: 260, depth: 70, count: 4200, factor: 5, fade: true, speed: 0.6 }), l.jsx(Da, { preset: "night" }), l.jsx(Dl, {}), l.jsxs(Hi, { timeStep: 1 / 60, interpolate: true, gravity: [0, -30, 0], children: [l.jsx(Ni, {}), Vr.map((r) => l.jsx(Wc, { zone: r }, r.id)), l.jsx(Bl, {}), l.jsx(Ys, { position: [-15, 4] }), l.jsx(Ys, { position: [15, 4] }), l.jsx(Vc, { position: [-54, 54] }), l.jsx(Hr, { position: [30, -44], rotation: 0 }), l.jsx(Hr, { position: [56, 0], rotation: Math.PI / 2 }), l.jsx(Hr, { position: [0, 50], rotation: Math.PI }), l.jsx(fc, {}), l.jsx(Tc, {}), l.jsx(Ml, { onMove: t })] }), l.jsx(zi, {}), l.jsx(kc, {}), l.jsx(Sl, {}), l.jsxs(cc, { multisampling: 0, children: [l.jsx(uc, { intensity: 1.25, luminanceThreshold: 0.75, luminanceSmoothing: 0.28, mipmapBlur: true, radius: 0.72 }), l.jsx(hc, { offset: 0.28, darkness: 0.72 }), l.jsx(dc, {})] })] });
}
function Cl() {
  const e3 = lt((r) => r.camera), t = lt((r) => r.size);
  return x.useEffect(() => {
    const r = t.width / t.height, s = ot.degToRad(78), n = 2 * Math.atan(Math.tan(s / 2) / Math.max(r, 0.3));
    Zr.baseFov = ot.clamp(ot.radToDeg(n), 45, 82), e3.fov = Zr.baseFov, e3.updateProjectionMatrix();
  }, [e3, t]), null;
}
function Dl() {
  return l.jsxs("group", { position: [130, 82, -170], children: [l.jsxs("mesh", { children: [l.jsx("sphereGeometry", { args: [16, 24, 24] }), l.jsx("meshBasicMaterial", { color: "#e8e6ff", toneMapped: false })] }), l.jsxs("mesh", { children: [l.jsx("sphereGeometry", { args: [22, 20, 20] }), l.jsx("meshBasicMaterial", { color: "#8f7bff", transparent: true, opacity: 0.16, depthWrite: false })] })] });
}
function Bl() {
  const e3 = x.useRef(null);
  return Re(({ clock: t }) => {
    e3.current && (e3.current.position.y = 17 + Math.sin(t.elapsedTime * 0.7) * 0.6);
  }), l.jsxs("group", { children: [l.jsx("group", { ref: e3, position: [0, 17, -34], children: l.jsx(xt, { size: 1.5, depth: 2.2, color: "#7fa4ff", emissive: "#2f5bff", emissiveIntensity: 1.5, wave: 0.35, children: ki.short }) }), l.jsx(xt, { position: [0, 8.4, -34], size: 0.44, depth: 0.4, color: "#e8e2ff", emissive: "#9d8bff", emissiveIntensity: 0.9, children: "DRIVE ANYWHERE" }), Vr.map((t) => {
    const [r, s] = t.position, n = Math.hypot(r, s), a = r / n, o = s / n;
    return l.jsx(xt, { position: [a * 19, 0.35, o * 19], rotation: [-Math.PI / 2, 0, Math.atan2(-a, -o)], size: 0.42, depth: 0.5, color: t.glow, emissive: t.color, emissiveIntensity: 2.2, children: t.sign }, t.id);
  })] });
}
function Sl() {
  const e3 = [[56, 80], [80, 56]];
  return l.jsx("group", { children: Qi.map((t, r) => l.jsxs("group", { position: [e3[r][0], 0, e3[r][1]], children: [l.jsxs("mesh", { position: [0, 9, 0], castShadow: true, children: [l.jsx("cylinderGeometry", { args: [0.8, 1.6, 18, 6] }), l.jsx("meshStandardMaterial", { color: "#38346d", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 19.5, 0], children: [l.jsx("icosahedronGeometry", { args: [2.3, 0] }), l.jsx("meshStandardMaterial", { color: t.color, emissive: t.color, emissiveIntensity: 4, toneMapped: false })] }), l.jsx("pointLight", { position: [0, 19.5, 0], color: t.color, intensity: 90, distance: 55, decay: 2 }), l.jsx(xt, { position: [0, 25, 0], rotation: [0, Math.atan2(-e3[r][0], -e3[r][1]), 0], size: 0.46, depth: 0.5, color: "#ffffff", emissive: t.color, emissiveIntensity: 1.8, children: t.name })] }, t.id)) });
}
export {
  yl as default
};
