var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as m, j as l, e as hi, Z as os, P as fi, U as gi } from "./index-B9gN4rp-.js";
import { R as gr, M as Nr, I as pi, S as Qe, D as et, a as hn, H as We, F as tt, b as Ht, L as Fe, c as dr, d as vi, C as wt, e as Or, O as fn, P as gn, W as ke, U as Fr, f as Ai, g as mi, h as hr, T as lt, i as xi, j as Ei, B as wi, k as Mi, l as st, m as Ci, n as Di, o as pn, p as Rs, q as Te, r as Rr, V as pe, N as ht, u as pt, s as Ur, t as Bi, E as Si, v as Ii, w as Ti, x as ye, y as yi, z as vn, _ as Ri, A as bs, G as zr, J as An, K as bi, Q as Y, X as we, Y as Pi, Z as Oi, $ as Fi, a0 as vs, a1 as mn, a2 as Tt, a3 as zt, a4 as Ui, a5 as Li, a6 as nr, a7 as Gi, a8 as xn, a9 as Ps, aa as Hi, ab as pr, ac as Lr, ad as Ni, ae as cs, af as ft, ag as ct, ah as Et, ai as Ot, aj as Mt, ak as G, al as Bt, am as St, an as En, ao as zi, ap as wn, aq as Ft, ar as y, as as ki, at as Pe, au as br, av as It, aw as As, ax as ls, ay as Qi, az as us, aA as ji, aB as Gr, aC as ms, aD as Os, aE as rt, aF as Mn, aG as Yi, aH as Wi, aI as Vi, aJ as _i, aK as Xi, aL as Ki, aM as Zi, aN as Ji, aO as qi, aP as $i, aQ as ea, aR as ta, aS as ra, aT as qt, aU as sa, aV as na, aW as ia } from "./GamePortfolio-1J2GY-XO.js";
const Cn = parseInt(gr.replace(/\D+/g, ""));
var Je = Uint8Array, Ct = Uint16Array, ds = Uint32Array, Dn = new Je([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Bn = new Je([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), aa = new Je([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Sn = function(e3, t) {
  for (var r = new Ct(31), s = 0; s < 31; ++s) r[s] = t += 1 << e3[s - 1];
  for (var n = new ds(r[30]), s = 1; s < 30; ++s) for (var a = r[s]; a < r[s + 1]; ++a) n[a] = a - r[s] << 5 | s;
  return [r, n];
}, In = Sn(Dn, 2), Tn = In[0], oa = In[1];
Tn[28] = 258, oa[258] = 28;
var ca = Sn(Bn, 0), la = ca[0], hs = new Ct(32768);
for (var Ae = 0; Ae < 32768; ++Ae) {
  var At = (Ae & 43690) >>> 1 | (Ae & 21845) << 1;
  At = (At & 52428) >>> 2 | (At & 13107) << 2, At = (At & 61680) >>> 4 | (At & 3855) << 4, hs[Ae] = ((At & 65280) >>> 8 | (At & 255) << 8) >>> 1;
}
var ar = function(e3, t, r) {
  for (var s = e3.length, n = 0, a = new Ct(t); n < s; ++n) ++a[e3[n] - 1];
  var o = new Ct(t);
  for (n = 0; n < t; ++n) o[n] = o[n - 1] + a[n - 1] << 1;
  var u;
  if (r) {
    u = new Ct(1 << t);
    var h = 15 - t;
    for (n = 0; n < s; ++n) if (e3[n]) for (var f = n << 4 | e3[n], A = t - e3[n], x = o[e3[n] - 1]++ << A, w = x | (1 << A) - 1; x <= w; ++x) u[hs[x] >>> h] = f;
  } else for (u = new Ct(s), n = 0; n < s; ++n) e3[n] && (u[n] = hs[o[e3[n] - 1]++] >>> 15 - e3[n]);
  return u;
}, vr = new Je(288);
for (var Ae = 0; Ae < 144; ++Ae) vr[Ae] = 8;
for (var Ae = 144; Ae < 256; ++Ae) vr[Ae] = 9;
for (var Ae = 256; Ae < 280; ++Ae) vr[Ae] = 7;
for (var Ae = 280; Ae < 288; ++Ae) vr[Ae] = 8;
var yn = new Je(32);
for (var Ae = 0; Ae < 32; ++Ae) yn[Ae] = 5;
var ua = ar(vr, 9, 1), da = ar(yn, 5, 1), Vr = function(e3) {
  for (var t = e3[0], r = 1; r < e3.length; ++r) e3[r] > t && (t = e3[r]);
  return t;
}, $e = function(e3, t, r) {
  var s = t / 8 | 0;
  return (e3[s] | e3[s + 1] << 8) >> (t & 7) & r;
}, _r = function(e3, t) {
  var r = t / 8 | 0;
  return (e3[r] | e3[r + 1] << 8 | e3[r + 2] << 16) >> (t & 7);
}, ha = function(e3) {
  return (e3 / 8 | 0) + (e3 & 7 && 1);
}, fa = function(e3, t, r) {
  (r == null || r > e3.length) && (r = e3.length);
  var s = new (e3 instanceof Ct ? Ct : e3 instanceof ds ? ds : Je)(r - t);
  return s.set(e3.subarray(t, r)), s;
}, ga = function(e3, t, r) {
  var s = e3.length;
  if (!s || r && !r.l && s < 5) return t || new Je(0);
  var n = !t || r, a = !r || r.i;
  r || (r = {}), t || (t = new Je(s * 3));
  var o = function(ee) {
    var Ve = t.length;
    if (ee > Ve) {
      var He = new Je(Math.max(Ve * 2, ee));
      He.set(t), t = He;
    }
  }, u = r.f || 0, h = r.p || 0, f = r.b || 0, A = r.l, x = r.d, w = r.m, D = r.n, L = s * 8;
  do {
    if (!A) {
      r.f = u = $e(e3, h, 1);
      var V = $e(e3, h + 1, 3);
      if (h += 3, V) if (V == 1) A = ua, x = da, w = 9, D = 5;
      else if (V == 2) {
        var Q = $e(e3, h, 31) + 257, re = $e(e3, h + 10, 15) + 4, J = Q + $e(e3, h + 5, 31) + 1;
        h += 14;
        for (var X = new Je(J), ie = new Je(19), E = 0; E < re; ++E) ie[aa[E]] = $e(e3, h + E * 3, 7);
        h += re * 3;
        for (var R = Vr(ie), b = (1 << R) - 1, O = ar(ie, R, 1), E = 0; E < J; ) {
          var F = O[$e(e3, h, b)];
          h += F & 15;
          var k = F >>> 4;
          if (k < 16) X[E++] = k;
          else {
            var _ = 0, U = 0;
            for (k == 16 ? (U = 3 + $e(e3, h, 3), h += 2, _ = X[E - 1]) : k == 17 ? (U = 3 + $e(e3, h, 7), h += 3) : k == 18 && (U = 11 + $e(e3, h, 127), h += 7); U--; ) X[E++] = _;
          }
        }
        var j = X.subarray(0, Q), K = X.subarray(Q);
        w = Vr(j), D = Vr(K), A = ar(j, w, 1), x = ar(K, D, 1);
      } else throw "invalid block type";
      else {
        var k = ha(h) + 4, W = e3[k - 4] | e3[k - 3] << 8, z = k + W;
        if (z > s) {
          if (a) throw "unexpected EOF";
          break;
        }
        n && o(f + W), t.set(e3.subarray(k, z), f), r.b = f += W, r.p = h = z * 8;
        continue;
      }
      if (h > L) {
        if (a) throw "unexpected EOF";
        break;
      }
    }
    n && o(f + 131072);
    for (var Ce = (1 << w) - 1, qe = (1 << D) - 1, je = h; ; je = h) {
      var _ = A[_r(e3, h) & Ce], de = _ >>> 4;
      if (h += _ & 15, h > L) {
        if (a) throw "unexpected EOF";
        break;
      }
      if (!_) throw "invalid length/literal";
      if (de < 256) t[f++] = de;
      else if (de == 256) {
        je = h, A = null;
        break;
      } else {
        var oe = de - 254;
        if (de > 264) {
          var E = de - 257, ae = Dn[E];
          oe = $e(e3, h, (1 << ae) - 1) + Tn[E], h += ae;
        }
        var Ee = x[_r(e3, h) & qe], Me = Ee >>> 4;
        if (!Ee) throw "invalid distance";
        h += Ee & 15;
        var K = la[Me];
        if (Me > 3) {
          var ae = Bn[Me];
          K += _r(e3, h) & (1 << ae) - 1, h += ae;
        }
        if (h > L) {
          if (a) throw "unexpected EOF";
          break;
        }
        n && o(f + 131072);
        for (var yt = f + oe; f < yt; f += 4) t[f] = t[f - K], t[f + 1] = t[f + 1 - K], t[f + 2] = t[f + 2 - K], t[f + 3] = t[f + 3 - K];
        f = yt;
      }
    }
    r.l = A, r.p = je, r.b = f, A && (u = 1, r.m = w, r.d = x, r.n = D);
  } while (!u);
  return f == t.length ? t : fa(t, 0, f);
}, pa = new Je(0), va = function(e3) {
  if ((e3[0] & 15) != 8 || e3[0] >>> 4 > 7 || (e3[0] << 8 | e3[1]) % 31) throw "invalid zlib data";
  if (e3[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
function Mr(e3, t) {
  return ga((va(e3), e3.subarray(2, -4)), t);
}
var Aa = typeof TextDecoder < "u" && new TextDecoder(), ma = 0;
try {
  Aa.decode(pa, { stream: true }), ma = 1;
} catch {
}
const xa = (e3) => e3 && e3.isCubeTexture;
class Ea extends Nr {
  constructor(t, r) {
    var s, n;
    const a = xa(t), u = ((n = a ? (s = t.image[0]) == null ? void 0 : s.width : t.image.width) != null ? n : 1024) / 4, h = Math.floor(Math.log2(u)), f = Math.pow(2, h), A = 3 * Math.max(f, 16 * 7), x = 4 * f, w = [a ? "#define ENVMAP_TYPE_CUBE" : "", `#define CUBEUV_TEXEL_WIDTH ${1 / A}`, `#define CUBEUV_TEXEL_HEIGHT ${1 / x}`, `#define CUBEUV_MAX_MIP ${h}.0`], D = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `, L = w.join(`
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
            #include <${Cn >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, V = { map: { value: t }, height: { value: (r == null ? void 0 : r.height) || 15 }, radius: { value: (r == null ? void 0 : r.radius) || 100 } }, k = new pi(1, 16), W = new Qe({ uniforms: V, fragmentShader: L, vertexShader: D, side: et });
    super(k, W);
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
class wa extends hn {
  constructor(t) {
    super(t), this.type = We;
  }
  parse(t) {
    const o = function(E, R) {
      switch (E) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (R || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (R || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (R || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (R || ""));
      }
    }, A = `
`, x = function(E, R, b) {
      R = R || 1024;
      let F = E.pos, _ = -1, U = 0, j = "", K = String.fromCharCode.apply(null, new Uint16Array(E.subarray(F, F + 128)));
      for (; 0 > (_ = K.indexOf(A)) && U < R && F < E.byteLength; ) j += K, U += K.length, F += 128, K += String.fromCharCode.apply(null, new Uint16Array(E.subarray(F, F + 128)));
      return -1 < _ ? (E.pos += U + _ + 1, j + K.slice(0, _)) : false;
    }, w = function(E) {
      const R = /^#\?(\S+)/, b = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, O = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, F = /^\s*FORMAT=(\S+)\s*$/, _ = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, U = { valid: 0, string: "", comments: "", programtype: "RGBE", format: "", gamma: 1, exposure: 1, width: 0, height: 0 };
      let j, K;
      for ((E.pos >= E.byteLength || !(j = x(E))) && o(1, "no header found"), (K = j.match(R)) || o(3, "bad initial token"), U.valid |= 1, U.programtype = K[1], U.string += j + `
`; j = x(E), j !== false; ) {
        if (U.string += j + `
`, j.charAt(0) === "#") {
          U.comments += j + `
`;
          continue;
        }
        if ((K = j.match(b)) && (U.gamma = parseFloat(K[1])), (K = j.match(O)) && (U.exposure = parseFloat(K[1])), (K = j.match(F)) && (U.valid |= 2, U.format = K[1]), (K = j.match(_)) && (U.valid |= 4, U.height = parseInt(K[1], 10), U.width = parseInt(K[2], 10)), U.valid & 2 && U.valid & 4) break;
      }
      return U.valid & 2 || o(3, "missing format specifier"), U.valid & 4 || o(3, "missing image size specifier"), U;
    }, D = function(E, R, b) {
      const O = R;
      if (O < 8 || O > 32767 || E[0] !== 2 || E[1] !== 2 || E[2] & 128) return new Uint8Array(E);
      O !== (E[2] << 8 | E[3]) && o(3, "wrong scanline width");
      const F = new Uint8Array(4 * R * b);
      F.length || o(4, "unable to allocate buffer space");
      let _ = 0, U = 0;
      const j = 4 * O, K = new Uint8Array(4), Ce = new Uint8Array(j);
      let qe = b;
      for (; qe > 0 && U < E.byteLength; ) {
        U + 4 > E.byteLength && o(1), K[0] = E[U++], K[1] = E[U++], K[2] = E[U++], K[3] = E[U++], (K[0] != 2 || K[1] != 2 || (K[2] << 8 | K[3]) != O) && o(3, "bad rgbe scanline format");
        let je = 0, de;
        for (; je < j && U < E.byteLength; ) {
          de = E[U++];
          const ae = de > 128;
          if (ae && (de -= 128), (de === 0 || je + de > j) && o(3, "bad scanline data"), ae) {
            const Ee = E[U++];
            for (let Me = 0; Me < de; Me++) Ce[je++] = Ee;
          } else Ce.set(E.subarray(U, U + de), je), je += de, U += de;
        }
        const oe = O;
        for (let ae = 0; ae < oe; ae++) {
          let Ee = 0;
          F[_] = Ce[ae + Ee], Ee += O, F[_ + 1] = Ce[ae + Ee], Ee += O, F[_ + 2] = Ce[ae + Ee], Ee += O, F[_ + 3] = Ce[ae + Ee], _ += 4;
        }
        qe--;
      }
      return F;
    }, L = function(E, R, b, O) {
      const F = E[R + 3], _ = Math.pow(2, F - 128) / 255;
      b[O + 0] = E[R + 0] * _, b[O + 1] = E[R + 1] * _, b[O + 2] = E[R + 2] * _, b[O + 3] = 1;
    }, V = function(E, R, b, O) {
      const F = E[R + 3], _ = Math.pow(2, F - 128) / 255;
      b[O + 0] = Ht.toHalfFloat(Math.min(E[R + 0] * _, 65504)), b[O + 1] = Ht.toHalfFloat(Math.min(E[R + 1] * _, 65504)), b[O + 2] = Ht.toHalfFloat(Math.min(E[R + 2] * _, 65504)), b[O + 3] = Ht.toHalfFloat(1);
    }, k = new Uint8Array(t);
    k.pos = 0;
    const W = w(k), z = W.width, Q = W.height, re = D(k.subarray(k.pos), z, Q);
    let J, X, ie;
    switch (this.type) {
      case tt:
        ie = re.length / 4;
        const E = new Float32Array(ie * 4);
        for (let b = 0; b < ie; b++) L(re, b * 4, E, b * 4);
        J = E, X = tt;
        break;
      case We:
        ie = re.length / 4;
        const R = new Uint16Array(ie * 4);
        for (let b = 0; b < ie; b++) V(re, b * 4, R, b * 4);
        J = R, X = We;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return { width: z, height: Q, data: J, header: W.string, gamma: W.gamma, exposure: W.exposure, type: X };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, s, n) {
    function a(o, u) {
      switch (o.type) {
        case tt:
        case We:
          "colorSpace" in o ? o.colorSpace = "srgb-linear" : o.encoding = 3e3, o.minFilter = Fe, o.magFilter = Fe, o.generateMipmaps = false, o.flipY = true;
          break;
      }
      r && r(o, u);
    }
    return super.load(t, a, s, n);
  }
}
const $t = Cn >= 152;
class Ma extends hn {
  constructor(t) {
    super(t), this.type = We;
  }
  parse(t) {
    const R = Math.pow(2.7182818, 2.2);
    function b(i, c) {
      for (var d = 0, g = 0; g < 65536; ++g) (g == 0 || i[g >> 3] & 1 << (g & 7)) && (c[d++] = g);
      for (var p = d - 1; d < 65536; ) c[d++] = 0;
      return p;
    }
    function O(i) {
      for (var c = 0; c < 16384; c++) i[c] = {}, i[c].len = 0, i[c].lit = 0, i[c].p = null;
    }
    const F = { l: 0, c: 0, lc: 0 };
    function _(i, c, d, g, p) {
      for (; d < i; ) c = c << 8 | Ts(g, p), d += 8;
      d -= i, F.l = c >> d & (1 << i) - 1, F.c = c, F.lc = d;
    }
    const U = new Array(59);
    function j(i) {
      for (var c = 0; c <= 58; ++c) U[c] = 0;
      for (var c = 0; c < 65537; ++c) U[i[c]] += 1;
      for (var d = 0, c = 58; c > 0; --c) {
        var g = d + U[c] >> 1;
        U[c] = d, d = g;
      }
      for (var c = 0; c < 65537; ++c) {
        var p = i[c];
        p > 0 && (i[c] = p | U[p]++ << 6);
      }
    }
    function K(i, c, d, g, p, v, C) {
      for (var M = d, I = 0, S = 0; p <= v; p++) {
        if (M.value - d.value > g) return false;
        _(6, I, S, i, M);
        var T = F.l;
        if (I = F.c, S = F.lc, C[p] = T, T == 63) {
          if (M.value - d.value > g) throw "Something wrong with hufUnpackEncTable";
          _(8, I, S, i, M);
          var B = F.l + 6;
          if (I = F.c, S = F.lc, p + B > v + 1) throw "Something wrong with hufUnpackEncTable";
          for (; B--; ) C[p++] = 0;
          p--;
        } else if (T >= 59) {
          var B = T - 59 + 2;
          if (p + B > v + 1) throw "Something wrong with hufUnpackEncTable";
          for (; B--; ) C[p++] = 0;
          p--;
        }
      }
      j(C);
    }
    function Ce(i) {
      return i & 63;
    }
    function qe(i) {
      return i >> 6;
    }
    function je(i, c, d, g) {
      for (; c <= d; c++) {
        var p = qe(i[c]), v = Ce(i[c]);
        if (p >> v) throw "Invalid table entry";
        if (v > 14) {
          var C = g[p >> v - 14];
          if (C.len) throw "Invalid table entry";
          if (C.lit++, C.p) {
            var M = C.p;
            C.p = new Array(C.lit);
            for (var I = 0; I < C.lit - 1; ++I) C.p[I] = M[I];
          } else C.p = new Array(1);
          C.p[C.lit - 1] = c;
        } else if (v) for (var S = 0, I = 1 << 14 - v; I > 0; I--) {
          var C = g[(p << 14 - v) + S];
          if (C.len || C.p) throw "Invalid table entry";
          C.len = v, C.lit = c, S++;
        }
      }
      return true;
    }
    const de = { c: 0, lc: 0 };
    function oe(i, c, d, g) {
      i = i << 8 | Ts(d, g), c += 8, de.c = i, de.lc = c;
    }
    const ae = { c: 0, lc: 0 };
    function Ee(i, c, d, g, p, v, C, M, I, S) {
      if (i == c) {
        g < 8 && (oe(d, g, p, C), d = de.c, g = de.lc), g -= 8;
        var T = d >> g, T = new Uint8Array([T])[0];
        if (I.value + T > S) return false;
        for (var B = M[I.value - 1]; T-- > 0; ) M[I.value++] = B;
      } else if (I.value < S) M[I.value++] = i;
      else return false;
      ae.c = d, ae.lc = g;
    }
    function Me(i) {
      return i & 65535;
    }
    function yt(i) {
      var c = Me(i);
      return c > 32767 ? c - 65536 : c;
    }
    const ee = { a: 0, b: 0 };
    function Ve(i, c) {
      var d = yt(i), g = yt(c), p = g, v = d + (p & 1) + (p >> 1), C = v, M = v - p;
      ee.a = C, ee.b = M;
    }
    function He(i, c) {
      var d = Me(i), g = Me(c), p = d - (g >> 1) & 65535, v = g + p - 32768 & 65535;
      ee.a = v, ee.b = p;
    }
    function Qt(i, c, d, g, p, v, C) {
      for (var M = C < 16384, I = d > p ? p : d, S = 1, T; S <= I; ) S <<= 1;
      for (S >>= 1, T = S, S >>= 1; S >= 1; ) {
        for (var B = 0, xe = B + v * (p - T), H = v * S, N = v * T, Z = g * S, q = g * T, ce, fe, De, Le; B <= xe; B += N) {
          for (var ge = B, at = B + g * (d - T); ge <= at; ge += q) {
            var ve = ge + Z, Be = ge + H, gt = Be + Z;
            M ? (Ve(i[ge + c], i[Be + c]), ce = ee.a, De = ee.b, Ve(i[ve + c], i[gt + c]), fe = ee.a, Le = ee.b, Ve(ce, fe), i[ge + c] = ee.a, i[ve + c] = ee.b, Ve(De, Le), i[Be + c] = ee.a, i[gt + c] = ee.b) : (He(i[ge + c], i[Be + c]), ce = ee.a, De = ee.b, He(i[ve + c], i[gt + c]), fe = ee.a, Le = ee.b, He(ce, fe), i[ge + c] = ee.a, i[ve + c] = ee.b, He(De, Le), i[Be + c] = ee.a, i[gt + c] = ee.b);
          }
          if (d & S) {
            var Be = ge + H;
            M ? Ve(i[ge + c], i[Be + c]) : He(i[ge + c], i[Be + c]), ce = ee.a, i[Be + c] = ee.b, i[ge + c] = ce;
          }
        }
        if (p & S) for (var ge = B, at = B + g * (d - T); ge <= at; ge += q) {
          var ve = ge + Z;
          M ? Ve(i[ge + c], i[ve + c]) : He(i[ge + c], i[ve + c]), ce = ee.a, i[ve + c] = ee.b, i[ge + c] = ce;
        }
        T = S, S >>= 1;
      }
      return B;
    }
    function jr(i, c, d, g, p, v, C, M, I, S) {
      for (var T = 0, B = 0, xe = M, H = Math.trunc(p.value + (v + 7) / 8); p.value < H; ) for (oe(T, B, d, p), T = de.c, B = de.lc; B >= 14; ) {
        var N = T >> B - 14 & 16383, Z = c[N];
        if (Z.len) B -= Z.len, Ee(Z.lit, C, T, B, d, g, p, I, S, xe), T = ae.c, B = ae.lc;
        else {
          if (!Z.p) throw "hufDecode issues";
          var q;
          for (q = 0; q < Z.lit; q++) {
            for (var ce = Ce(i[Z.p[q]]); B < ce && p.value < H; ) oe(T, B, d, p), T = de.c, B = de.lc;
            if (B >= ce && qe(i[Z.p[q]]) == (T >> B - ce & (1 << ce) - 1)) {
              B -= ce, Ee(Z.p[q], C, T, B, d, g, p, I, S, xe), T = ae.c, B = ae.lc;
              break;
            }
          }
          if (q == Z.lit) throw "hufDecode issues";
        }
      }
      var fe = 8 - v & 7;
      for (T >>= fe, B -= fe; B > 0; ) {
        var Z = c[T << 14 - B & 16383];
        if (Z.len) B -= Z.len, Ee(Z.lit, C, T, B, d, g, p, I, S, xe), T = ae.c, B = ae.lc;
        else throw "hufDecode issues";
      }
      return true;
    }
    function Ar(i, c, d, g, p, v) {
      var C = { value: 0 }, M = d.value, I = Ne(c, d), S = Ne(c, d);
      d.value += 4;
      var T = Ne(c, d);
      if (d.value += 4, I < 0 || I >= 65537 || S < 0 || S >= 65537) throw "Something wrong with HUF_ENCSIZE";
      var B = new Array(65537), xe = new Array(16384);
      O(xe);
      var H = g - (d.value - M);
      if (K(i, c, d, H, I, S, B), T > 8 * (g - (d.value - M))) throw "Something wrong with hufUncompress";
      je(B, I, S, xe), jr(B, xe, i, c, d, T, S, v, p, C);
    }
    function Yr(i, c, d) {
      for (var g = 0; g < d; ++g) c[g] = i[c[g]];
    }
    function jt(i) {
      for (var c = 1; c < i.length; c++) {
        var d = i[c - 1] + i[c] - 128;
        i[c] = d;
      }
    }
    function Yt(i, c) {
      for (var d = 0, g = Math.floor((i.length + 1) / 2), p = 0, v = i.length - 1; !(p > v || (c[p++] = i[d++], p > v)); ) c[p++] = i[g++];
    }
    function Rt(i) {
      for (var c = i.byteLength, d = new Array(), g = 0, p = new DataView(i); c > 0; ) {
        var v = p.getInt8(g++);
        if (v < 0) {
          var C = -v;
          c -= C + 1;
          for (var M = 0; M < C; M++) d.push(p.getUint8(g++));
        } else {
          var C = v;
          c -= 2;
          for (var I = p.getUint8(g++), M = 0; M < C + 1; M++) d.push(I);
        }
      }
      return d;
    }
    function Wt(i, c, d, g, p, v) {
      var ve = new DataView(v.buffer), C = d[i.idx[0]].width, M = d[i.idx[0]].height, I = 3, S = Math.floor(C / 8), T = Math.ceil(C / 8), B = Math.ceil(M / 8), xe = C - (T - 1) * 8, H = M - (B - 1) * 8, N = { value: 0 }, Z = new Array(I), q = new Array(I), ce = new Array(I), fe = new Array(I), De = new Array(I);
      for (let le = 0; le < I; ++le) De[le] = c[i.idx[le]], Z[le] = le < 1 ? 0 : Z[le - 1] + T * B, q[le] = new Float32Array(64), ce[le] = new Uint16Array(64), fe[le] = new Uint16Array(T * 64);
      for (let le = 0; le < B; ++le) {
        var Le = 8;
        le == B - 1 && (Le = H);
        var ge = 8;
        for (let me = 0; me < T; ++me) {
          me == T - 1 && (ge = xe);
          for (let ne = 0; ne < I; ++ne) ce[ne].fill(0), ce[ne][0] = p[Z[ne]++], Vt(N, g, ce[ne]), mr(ce[ne], q[ne]), Ut(q[ne]);
          xr(q);
          for (let ne = 0; ne < I; ++ne) Wr(q[ne], fe[ne], me * 64);
        }
        let be = 0;
        for (let me = 0; me < I; ++me) {
          const ne = d[i.idx[me]].type;
          for (let Ke = 8 * le; Ke < 8 * le + Le; ++Ke) {
            be = De[me][Ke];
            for (let bt = 0; bt < S; ++bt) {
              const Ye = bt * 64 + (Ke & 7) * 8;
              ve.setUint16(be + 0 * 2 * ne, fe[me][Ye + 0], true), ve.setUint16(be + 1 * 2 * ne, fe[me][Ye + 1], true), ve.setUint16(be + 2 * 2 * ne, fe[me][Ye + 2], true), ve.setUint16(be + 3 * 2 * ne, fe[me][Ye + 3], true), ve.setUint16(be + 4 * 2 * ne, fe[me][Ye + 4], true), ve.setUint16(be + 5 * 2 * ne, fe[me][Ye + 5], true), ve.setUint16(be + 6 * 2 * ne, fe[me][Ye + 6], true), ve.setUint16(be + 7 * 2 * ne, fe[me][Ye + 7], true), be += 8 * 2 * ne;
            }
          }
          if (S != T) for (let Ke = 8 * le; Ke < 8 * le + Le; ++Ke) {
            const bt = De[me][Ke] + 8 * S * 2 * ne, Ye = S * 64 + (Ke & 7) * 8;
            for (let vt = 0; vt < ge; ++vt) ve.setUint16(bt + vt * 2 * ne, fe[me][Ye + vt], true);
          }
        }
      }
      for (var at = new Uint16Array(C), ve = new DataView(v.buffer), Be = 0; Be < I; ++Be) {
        d[i.idx[Be]].decoded = true;
        var gt = d[i.idx[Be]].type;
        if (d[Be].type == 2) for (var Jt = 0; Jt < M; ++Jt) {
          const le = De[Be][Jt];
          for (var Xe = 0; Xe < C; ++Xe) at[Xe] = ve.getUint16(le + Xe * 2 * gt, true);
          for (var Xe = 0; Xe < C; ++Xe) ve.setFloat32(le + Xe * 2 * gt, P(at[Xe]), true);
        }
      }
    }
    function Vt(i, c, d) {
      for (var g, p = 1; p < 64; ) g = c[i.value], g == 65280 ? p = 64 : g >> 8 == 255 ? p += g & 255 : (d[p] = g, p++), i.value++;
    }
    function mr(i, c) {
      c[0] = P(i[0]), c[1] = P(i[1]), c[2] = P(i[5]), c[3] = P(i[6]), c[4] = P(i[14]), c[5] = P(i[15]), c[6] = P(i[27]), c[7] = P(i[28]), c[8] = P(i[2]), c[9] = P(i[4]), c[10] = P(i[7]), c[11] = P(i[13]), c[12] = P(i[16]), c[13] = P(i[26]), c[14] = P(i[29]), c[15] = P(i[42]), c[16] = P(i[3]), c[17] = P(i[8]), c[18] = P(i[12]), c[19] = P(i[17]), c[20] = P(i[25]), c[21] = P(i[30]), c[22] = P(i[41]), c[23] = P(i[43]), c[24] = P(i[9]), c[25] = P(i[11]), c[26] = P(i[18]), c[27] = P(i[24]), c[28] = P(i[31]), c[29] = P(i[40]), c[30] = P(i[44]), c[31] = P(i[53]), c[32] = P(i[10]), c[33] = P(i[19]), c[34] = P(i[23]), c[35] = P(i[32]), c[36] = P(i[39]), c[37] = P(i[45]), c[38] = P(i[52]), c[39] = P(i[54]), c[40] = P(i[20]), c[41] = P(i[22]), c[42] = P(i[33]), c[43] = P(i[38]), c[44] = P(i[46]), c[45] = P(i[51]), c[46] = P(i[55]), c[47] = P(i[60]), c[48] = P(i[21]), c[49] = P(i[34]), c[50] = P(i[37]), c[51] = P(i[47]), c[52] = P(i[50]), c[53] = P(i[56]), c[54] = P(i[59]), c[55] = P(i[61]), c[56] = P(i[35]), c[57] = P(i[36]), c[58] = P(i[48]), c[59] = P(i[49]), c[60] = P(i[57]), c[61] = P(i[58]), c[62] = P(i[62]), c[63] = P(i[63]);
    }
    function Ut(i) {
      const c = 0.5 * Math.cos(0.7853975), d = 0.5 * Math.cos(3.14159 / 16), g = 0.5 * Math.cos(3.14159 / 8), p = 0.5 * Math.cos(3 * 3.14159 / 16), v = 0.5 * Math.cos(5 * 3.14159 / 16), C = 0.5 * Math.cos(3 * 3.14159 / 8), M = 0.5 * Math.cos(7 * 3.14159 / 16);
      for (var I = new Array(4), S = new Array(4), T = new Array(4), B = new Array(4), xe = 0; xe < 8; ++xe) {
        var H = xe * 8;
        I[0] = g * i[H + 2], I[1] = C * i[H + 2], I[2] = g * i[H + 6], I[3] = C * i[H + 6], S[0] = d * i[H + 1] + p * i[H + 3] + v * i[H + 5] + M * i[H + 7], S[1] = p * i[H + 1] - M * i[H + 3] - d * i[H + 5] - v * i[H + 7], S[2] = v * i[H + 1] - d * i[H + 3] + M * i[H + 5] + p * i[H + 7], S[3] = M * i[H + 1] - v * i[H + 3] + p * i[H + 5] - d * i[H + 7], T[0] = c * (i[H + 0] + i[H + 4]), T[3] = c * (i[H + 0] - i[H + 4]), T[1] = I[0] + I[3], T[2] = I[1] - I[2], B[0] = T[0] + T[1], B[1] = T[3] + T[2], B[2] = T[3] - T[2], B[3] = T[0] - T[1], i[H + 0] = B[0] + S[0], i[H + 1] = B[1] + S[1], i[H + 2] = B[2] + S[2], i[H + 3] = B[3] + S[3], i[H + 4] = B[3] - S[3], i[H + 5] = B[2] - S[2], i[H + 6] = B[1] - S[1], i[H + 7] = B[0] - S[0];
      }
      for (var N = 0; N < 8; ++N) I[0] = g * i[16 + N], I[1] = C * i[16 + N], I[2] = g * i[48 + N], I[3] = C * i[48 + N], S[0] = d * i[8 + N] + p * i[24 + N] + v * i[40 + N] + M * i[56 + N], S[1] = p * i[8 + N] - M * i[24 + N] - d * i[40 + N] - v * i[56 + N], S[2] = v * i[8 + N] - d * i[24 + N] + M * i[40 + N] + p * i[56 + N], S[3] = M * i[8 + N] - v * i[24 + N] + p * i[40 + N] - d * i[56 + N], T[0] = c * (i[N] + i[32 + N]), T[3] = c * (i[N] - i[32 + N]), T[1] = I[0] + I[3], T[2] = I[1] - I[2], B[0] = T[0] + T[1], B[1] = T[3] + T[2], B[2] = T[3] - T[2], B[3] = T[0] - T[1], i[0 + N] = B[0] + S[0], i[8 + N] = B[1] + S[1], i[16 + N] = B[2] + S[2], i[24 + N] = B[3] + S[3], i[32 + N] = B[3] - S[3], i[40 + N] = B[2] - S[2], i[48 + N] = B[1] - S[1], i[56 + N] = B[0] - S[0];
    }
    function xr(i) {
      for (var c = 0; c < 64; ++c) {
        var d = i[0][c], g = i[1][c], p = i[2][c];
        i[0][c] = d + 1.5747 * p, i[1][c] = d - 0.1873 * g - 0.4682 * p, i[2][c] = d + 1.8556 * g;
      }
    }
    function Wr(i, c, d) {
      for (var g = 0; g < 64; ++g) c[d + g] = Ht.toHalfFloat(he(i[g]));
    }
    function he(i) {
      return i <= 1 ? Math.sign(i) * Math.pow(Math.abs(i), 2.2) : Math.sign(i) * Math.pow(R, Math.abs(i) - 1);
    }
    function Ie(i) {
      return new DataView(i.array.buffer, i.offset.value, i.size);
    }
    function nt(i) {
      var c = i.viewer.buffer.slice(i.offset.value, i.offset.value + i.size), d = new Uint8Array(Rt(c)), g = new Uint8Array(d.length);
      return jt(d), Yt(d, g), new DataView(g.buffer);
    }
    function it(i) {
      var c = i.array.slice(i.offset.value, i.offset.value + i.size), d = Mr(c), g = new Uint8Array(d.length);
      return jt(d), Yt(d, g), new DataView(g.buffer);
    }
    function _n(i) {
      for (var c = i.viewer, d = { value: i.offset.value }, g = new Uint16Array(i.width * i.scanlineBlockSize * (i.channels * i.type)), p = new Uint8Array(8192), v = 0, C = new Array(i.channels), M = 0; M < i.channels; M++) C[M] = {}, C[M].start = v, C[M].end = C[M].start, C[M].nx = i.width, C[M].ny = i.lines, C[M].size = i.type, v += C[M].nx * C[M].ny * C[M].size;
      var I = Xt(c, d), S = Xt(c, d);
      if (S >= 8192) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (I <= S) for (var M = 0; M < S - I + 1; M++) p[M + I] = Lt(c, d);
      var T = new Uint16Array(65536), B = b(p, T), xe = Ne(c, d);
      Ar(i.array, c, d, xe, g, v);
      for (var M = 0; M < i.channels; ++M) for (var H = C[M], N = 0; N < C[M].size; ++N) Qt(g, H.start + N, H.nx, H.size, H.ny, H.nx * H.size, B);
      Yr(T, g, v);
      for (var Z = 0, q = new Uint8Array(g.buffer.byteLength), ce = 0; ce < i.lines; ce++) for (var fe = 0; fe < i.channels; fe++) {
        var H = C[fe], De = H.nx * H.size, Le = new Uint8Array(g.buffer, H.end * 2, De * 2);
        q.set(Le, Z), Z += De * 2, H.end += De;
      }
      return new DataView(q.buffer);
    }
    function Xn(i) {
      var c = i.array.slice(i.offset.value, i.offset.value + i.size), d = Mr(c);
      const g = i.lines * i.channels * i.width, p = i.type == 1 ? new Uint16Array(g) : new Uint32Array(g);
      let v = 0, C = 0;
      const M = new Array(4);
      for (let I = 0; I < i.lines; I++) for (let S = 0; S < i.channels; S++) {
        let T = 0;
        switch (i.type) {
          case 1:
            M[0] = v, M[1] = M[0] + i.width, v = M[1] + i.width;
            for (let B = 0; B < i.width; ++B) {
              const xe = d[M[0]++] << 8 | d[M[1]++];
              T += xe, p[C] = T, C++;
            }
            break;
          case 2:
            M[0] = v, M[1] = M[0] + i.width, M[2] = M[1] + i.width, v = M[2] + i.width;
            for (let B = 0; B < i.width; ++B) {
              const xe = d[M[0]++] << 24 | d[M[1]++] << 16 | d[M[2]++] << 8;
              T += xe, p[C] = T, C++;
            }
            break;
        }
      }
      return new DataView(p.buffer);
    }
    function Is(i) {
      var c = i.viewer, d = { value: i.offset.value }, g = new Uint8Array(i.width * i.lines * (i.channels * i.type * 2)), p = { version: _e(c, d), unknownUncompressedSize: _e(c, d), unknownCompressedSize: _e(c, d), acCompressedSize: _e(c, d), dcCompressedSize: _e(c, d), rleCompressedSize: _e(c, d), rleUncompressedSize: _e(c, d), rleRawSize: _e(c, d), totalAcUncompressedCount: _e(c, d), totalDcUncompressedCount: _e(c, d), acCompression: _e(c, d) };
      if (p.version < 2) throw "EXRLoader.parse: " + Zt.compression + " version " + p.version + " is unsupported";
      for (var v = new Array(), C = Xt(c, d) - 2; C > 0; ) {
        var M = Er(c.buffer, d), I = Lt(c, d), S = I >> 2 & 3, T = (I >> 4) - 1, B = new Int8Array([T])[0], xe = Lt(c, d);
        v.push({ name: M, index: B, type: xe, compression: S }), C -= M.length + 3;
      }
      for (var H = Zt.channels, N = new Array(i.channels), Z = 0; Z < i.channels; ++Z) {
        var q = N[Z] = {}, ce = H[Z];
        q.name = ce.name, q.compression = 0, q.decoded = false, q.type = ce.pixelType, q.pLinear = ce.pLinear, q.width = i.width, q.height = i.lines;
      }
      for (var fe = { idx: new Array(3) }, De = 0; De < i.channels; ++De) for (var q = N[De], Z = 0; Z < v.length; ++Z) {
        var Le = v[Z];
        q.name == Le.name && (q.compression = Le.compression, Le.index >= 0 && (fe.idx[Le.index] = De), q.offset = De);
      }
      if (p.acCompressedSize > 0) switch (p.acCompression) {
        case 0:
          var ve = new Uint16Array(p.totalAcUncompressedCount);
          Ar(i.array, c, d, p.acCompressedSize, ve, p.totalAcUncompressedCount);
          break;
        case 1:
          var ge = i.array.slice(d.value, d.value + p.totalAcUncompressedCount), at = Mr(ge), ve = new Uint16Array(at.buffer);
          d.value += p.totalAcUncompressedCount;
          break;
      }
      if (p.dcCompressedSize > 0) {
        var Be = { array: i.array, offset: d, size: p.dcCompressedSize }, gt = new Uint16Array(it(Be).buffer);
        d.value += p.dcCompressedSize;
      }
      if (p.rleRawSize > 0) {
        var ge = i.array.slice(d.value, d.value + p.rleCompressedSize), at = Mr(ge), Jt = Rt(at.buffer);
        d.value += p.rleCompressedSize;
      }
      for (var Xe = 0, le = new Array(N.length), Z = 0; Z < le.length; ++Z) le[Z] = new Array();
      for (var be = 0; be < i.lines; ++be) for (var me = 0; me < N.length; ++me) le[me].push(Xe), Xe += N[me].width * i.type * 2;
      Wt(fe, le, N, ve, gt, g);
      for (var Z = 0; Z < N.length; ++Z) {
        var q = N[Z];
        if (!q.decoded) switch (q.compression) {
          case 2:
            for (var ne = 0, Ke = 0, be = 0; be < i.lines; ++be) {
              for (var bt = le[Z][ne], Ye = 0; Ye < q.width; ++Ye) {
                for (var vt = 0; vt < 2 * q.type; ++vt) g[bt++] = Jt[Ke + vt * q.width * q.height];
                Ke++;
              }
              ne++;
            }
            break;
          case 1:
          default:
            throw "EXRLoader.parse: unsupported channel compression";
        }
      }
      return new DataView(g.buffer);
    }
    function Er(i, c) {
      for (var d = new Uint8Array(i), g = 0; d[c.value + g] != 0; ) g += 1;
      var p = new TextDecoder().decode(d.slice(c.value, c.value + g));
      return c.value = c.value + g + 1, p;
    }
    function Kn(i, c, d) {
      var g = new TextDecoder().decode(new Uint8Array(i).slice(c.value, c.value + d));
      return c.value = c.value + d, g;
    }
    function Zn(i, c) {
      var d = _t(i, c), g = Ne(i, c);
      return [d, g];
    }
    function Jn(i, c) {
      var d = Ne(i, c), g = Ne(i, c);
      return [d, g];
    }
    function _t(i, c) {
      var d = i.getInt32(c.value, true);
      return c.value = c.value + 4, d;
    }
    function Ne(i, c) {
      var d = i.getUint32(c.value, true);
      return c.value = c.value + 4, d;
    }
    function Ts(i, c) {
      var d = i[c.value];
      return c.value = c.value + 1, d;
    }
    function Lt(i, c) {
      var d = i.getUint8(c.value);
      return c.value = c.value + 1, d;
    }
    const _e = function(i, c) {
      let d;
      return "getBigInt64" in DataView.prototype ? d = Number(i.getBigInt64(c.value, true)) : d = i.getUint32(c.value + 4, true) + Number(i.getUint32(c.value, true) << 32), c.value += 8, d;
    };
    function Re(i, c) {
      var d = i.getFloat32(c.value, true);
      return c.value += 4, d;
    }
    function qn(i, c) {
      return Ht.toHalfFloat(Re(i, c));
    }
    function P(i) {
      var c = (i & 31744) >> 10, d = i & 1023;
      return (i >> 15 ? -1 : 1) * (c ? c === 31 ? d ? NaN : 1 / 0 : Math.pow(2, c - 15) * (1 + d / 1024) : 6103515625e-14 * (d / 1024));
    }
    function Xt(i, c) {
      var d = i.getUint16(c.value, true);
      return c.value += 2, d;
    }
    function $n(i, c) {
      return P(Xt(i, c));
    }
    function ei(i, c, d, g) {
      for (var p = d.value, v = []; d.value < p + g - 1; ) {
        var C = Er(c, d), M = _t(i, d), I = Lt(i, d);
        d.value += 3;
        var S = _t(i, d), T = _t(i, d);
        v.push({ name: C, pixelType: M, pLinear: I, xSampling: S, ySampling: T });
      }
      return d.value += 1, v;
    }
    function ti(i, c) {
      var d = Re(i, c), g = Re(i, c), p = Re(i, c), v = Re(i, c), C = Re(i, c), M = Re(i, c), I = Re(i, c), S = Re(i, c);
      return { redX: d, redY: g, greenX: p, greenY: v, blueX: C, blueY: M, whiteX: I, whiteY: S };
    }
    function ri(i, c) {
      var d = ["NO_COMPRESSION", "RLE_COMPRESSION", "ZIPS_COMPRESSION", "ZIP_COMPRESSION", "PIZ_COMPRESSION", "PXR24_COMPRESSION", "B44_COMPRESSION", "B44A_COMPRESSION", "DWAA_COMPRESSION", "DWAB_COMPRESSION"], g = Lt(i, c);
      return d[g];
    }
    function si(i, c) {
      var d = Ne(i, c), g = Ne(i, c), p = Ne(i, c), v = Ne(i, c);
      return { xMin: d, yMin: g, xMax: p, yMax: v };
    }
    function ni(i, c) {
      var d = ["INCREASING_Y"], g = Lt(i, c);
      return d[g];
    }
    function ii(i, c) {
      var d = Re(i, c), g = Re(i, c);
      return [d, g];
    }
    function ai(i, c) {
      var d = Re(i, c), g = Re(i, c), p = Re(i, c);
      return [d, g, p];
    }
    function oi(i, c, d, g, p) {
      if (g === "string" || g === "stringvector" || g === "iccProfile") return Kn(c, d, p);
      if (g === "chlist") return ei(i, c, d, p);
      if (g === "chromaticities") return ti(i, d);
      if (g === "compression") return ri(i, d);
      if (g === "box2i") return si(i, d);
      if (g === "lineOrder") return ni(i, d);
      if (g === "float") return Re(i, d);
      if (g === "v2f") return ii(i, d);
      if (g === "v3f") return ai(i, d);
      if (g === "int") return _t(i, d);
      if (g === "rational") return Zn(i, d);
      if (g === "timecode") return Jn(i, d);
      if (g === "preview") return d.value += p, "skipped";
      d.value += p;
    }
    function ci(i, c, d) {
      const g = {};
      if (i.getUint32(0, true) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      g.version = i.getUint8(4);
      const p = i.getUint8(5);
      g.spec = { singleTile: !!(p & 2), longName: !!(p & 4), deepFormat: !!(p & 8), multiPart: !!(p & 16) }, d.value = 8;
      for (var v = true; v; ) {
        var C = Er(c, d);
        if (C == 0) v = false;
        else {
          var M = Er(c, d), I = Ne(i, d), S = oi(i, c, d, M, I);
          S === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${M}'.`) : g[C] = S;
        }
      }
      if (p & -5) throw console.error("EXRHeader:", g), "THREE.EXRLoader: provided file is currently unsupported.";
      return g;
    }
    function li(i, c, d, g, p) {
      const v = { size: 0, viewer: c, array: d, offset: g, width: i.dataWindow.xMax - i.dataWindow.xMin + 1, height: i.dataWindow.yMax - i.dataWindow.yMin + 1, channels: i.channels.length, bytesPerLine: null, lines: null, inputSize: null, type: i.channels[0].pixelType, uncompress: null, getter: null, format: null, [$t ? "colorSpace" : "encoding"]: null };
      switch (i.compression) {
        case "NO_COMPRESSION":
          v.lines = 1, v.uncompress = Ie;
          break;
        case "RLE_COMPRESSION":
          v.lines = 1, v.uncompress = nt;
          break;
        case "ZIPS_COMPRESSION":
          v.lines = 1, v.uncompress = it;
          break;
        case "ZIP_COMPRESSION":
          v.lines = 16, v.uncompress = it;
          break;
        case "PIZ_COMPRESSION":
          v.lines = 32, v.uncompress = _n;
          break;
        case "PXR24_COMPRESSION":
          v.lines = 16, v.uncompress = Xn;
          break;
        case "DWAA_COMPRESSION":
          v.lines = 32, v.uncompress = Is;
          break;
        case "DWAB_COMPRESSION":
          v.lines = 256, v.uncompress = Is;
          break;
        default:
          throw "EXRLoader.parse: " + i.compression + " is unsupported";
      }
      if (v.scanlineBlockSize = v.lines, v.type == 1) switch (p) {
        case tt:
          v.getter = $n, v.inputSize = 2;
          break;
        case We:
          v.getter = Xt, v.inputSize = 2;
          break;
      }
      else if (v.type == 2) switch (p) {
        case tt:
          v.getter = Re, v.inputSize = 4;
          break;
        case We:
          v.getter = qn, v.inputSize = 4;
      }
      else throw "EXRLoader.parse: unsupported pixelType " + v.type + " for " + i.compression + ".";
      v.blockCount = (i.dataWindow.yMax + 1) / v.scanlineBlockSize;
      for (var C = 0; C < v.blockCount; C++) _e(c, g);
      v.outputChannels = v.channels == 3 ? 4 : v.channels;
      const M = v.width * v.height * v.outputChannels;
      switch (p) {
        case tt:
          v.byteArray = new Float32Array(M), v.channels < v.outputChannels && v.byteArray.fill(1, 0, M);
          break;
        case We:
          v.byteArray = new Uint16Array(M), v.channels < v.outputChannels && v.byteArray.fill(15360, 0, M);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", p);
          break;
      }
      return v.bytesPerLine = v.width * v.inputSize * v.channels, v.outputChannels == 4 ? v.format = dr : v.format = vi, $t ? v.colorSpace = "srgb-linear" : v.encoding = 3e3, v;
    }
    const wr = new DataView(t), ui = new Uint8Array(t), Kt = { value: 0 }, Zt = ci(wr, t, Kt), te = li(Zt, wr, ui, Kt, this.type), ys = { value: 0 }, di = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let i = 0; i < te.height / te.scanlineBlockSize; i++) {
      const c = Ne(wr, Kt);
      te.size = Ne(wr, Kt), te.lines = c + te.scanlineBlockSize > te.height ? te.height - c : te.scanlineBlockSize;
      const g = te.size < te.lines * te.bytesPerLine ? te.uncompress(te) : Ie(te);
      Kt.value += te.size;
      for (let p = 0; p < te.scanlineBlockSize; p++) {
        const v = p + i * te.scanlineBlockSize;
        if (v >= te.height) break;
        for (let C = 0; C < te.channels; C++) {
          const M = di[Zt.channels[C].name];
          for (let I = 0; I < te.width; I++) {
            ys.value = (p * (te.channels * te.width) + C * te.width + I) * te.inputSize;
            const S = (te.height - 1 - v) * (te.width * te.outputChannels) + I * te.outputChannels + M;
            te.byteArray[S] = te.getter(g, ys);
          }
        }
      }
    }
    return { header: Zt, width: te.width, height: te.height, data: te.byteArray, format: te.format, [$t ? "colorSpace" : "encoding"]: te[$t ? "colorSpace" : "encoding"], type: this.type };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, s, n) {
    function a(o, u) {
      $t ? o.colorSpace = u.colorSpace : o.encoding = u.encoding, o.minFilter = Fe, o.magFilter = Fe, o.generateMipmaps = false, o.flipY = false, r && r(o, u);
    }
    return super.load(t, a, s, n);
  }
}
const Ca = () => parseInt(gr.replace(/\D+/g, "")), Da = Ca(), Rn = (e3, t, r) => {
  let s;
  switch (e3) {
    case st:
      s = new Uint8ClampedArray(t * r * 4);
      break;
    case We:
      s = new Uint16Array(t * r * 4);
      break;
    case Mi:
      s = new Uint32Array(t * r * 4);
      break;
    case wi:
      s = new Int8Array(t * r * 4);
      break;
    case Ei:
      s = new Int16Array(t * r * 4);
      break;
    case xi:
      s = new Int32Array(t * r * 4);
      break;
    case tt:
      s = new Float32Array(t * r * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return s;
};
let Cr;
const Ba = (e3, t, r, s) => {
  if (Cr !== void 0) return Cr;
  const n = new ke(1, 1, s);
  t.setRenderTarget(n);
  const a = new Nr(new gn(), new Ci({ color: 16777215 }));
  t.render(a, r), t.setRenderTarget(null);
  const o = Rn(e3, n.width, n.height);
  return t.readRenderTargetPixels(n, 0, 0, n.width, n.height, o), n.dispose(), a.geometry.dispose(), a.material.dispose(), Cr = o[0] !== 0, Cr;
};
class xs {
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
    var _a2, _b, _c2, _d, _e, _f, _g, _h, _i2, _j, _k, _l2, _m, _n, _o2, _p;
    this._width = t.width, this._height = t.height, this._type = t.type, this._colorSpace = t.colorSpace;
    const r = { format: dr, depthBuffer: false, stencilBuffer: false, type: this._type, colorSpace: this._colorSpace, anisotropy: ((_a2 = t.renderTargetOptions) == null ? void 0 : _a2.anisotropy) !== void 0 ? (_b = t.renderTargetOptions) == null ? void 0 : _b.anisotropy : 1, generateMipmaps: ((_c2 = t.renderTargetOptions) == null ? void 0 : _c2.generateMipmaps) !== void 0 ? (_d = t.renderTargetOptions) == null ? void 0 : _d.generateMipmaps : false, magFilter: ((_e = t.renderTargetOptions) == null ? void 0 : _e.magFilter) !== void 0 ? (_f = t.renderTargetOptions) == null ? void 0 : _f.magFilter : Fe, minFilter: ((_g = t.renderTargetOptions) == null ? void 0 : _g.minFilter) !== void 0 ? (_h = t.renderTargetOptions) == null ? void 0 : _h.minFilter : Fe, samples: ((_i2 = t.renderTargetOptions) == null ? void 0 : _i2.samples) !== void 0 ? (_j = t.renderTargetOptions) == null ? void 0 : _j.samples : void 0, wrapS: ((_k = t.renderTargetOptions) == null ? void 0 : _k.wrapS) !== void 0 ? (_l2 = t.renderTargetOptions) == null ? void 0 : _l2.wrapS : wt, wrapT: ((_m = t.renderTargetOptions) == null ? void 0 : _m.wrapT) !== void 0 ? (_n = t.renderTargetOptions) == null ? void 0 : _n.wrapT : wt };
    if (this._material = t.material, t.renderer ? this._renderer = t.renderer : (this._renderer = xs.instantiateRenderer(), this._rendererIsDisposable = true), this._scene = new Or(), this._camera = new fn(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !Ba(this._type, this._renderer, this._camera, r)) {
      let s;
      switch (this._type) {
        case We:
          s = this._renderer.extensions.has("EXT_color_buffer_float") ? tt : void 0;
          break;
      }
      s !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${tt}`), this._type = s) : (this._supportsReadPixels = false, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
    }
    this._quad = new Nr(new gn(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new ke(this.width, this.height, r), this._renderTarget.texture.mapping = ((_o2 = t.renderTargetOptions) == null ? void 0 : _o2.mapping) !== void 0 ? (_p = t.renderTargetOptions) == null ? void 0 : _p.mapping : Fr;
  }
  static instantiateRenderer() {
    const t = new Ai();
    return t.setSize(128, 128), t;
  }
  toArray() {
    if (!this._supportsReadPixels) throw new Error("Can't read pixels in this browser");
    const t = Rn(this._type, this._width, this._height);
    return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, t), t;
  }
  toDataTexture(t) {
    const r = new mi(this.toArray(), this.width, this.height, dr, this._type, (t == null ? void 0 : t.mapping) || Fr, (t == null ? void 0 : t.wrapS) || wt, (t == null ? void 0 : t.wrapT) || wt, (t == null ? void 0 : t.magFilter) || Fe, (t == null ? void 0 : t.minFilter) || Fe, (t == null ? void 0 : t.anisotropy) || 1, hr);
    return r.generateMipmaps = (t == null ? void 0 : t.generateMipmaps) !== void 0 ? t == null ? void 0 : t.generateMipmaps : false, r;
  }
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
  }
  dispose(t) {
    this.disposeOnDemandRenderer(), t && this.renderTarget.dispose(), this.material instanceof Qe && Object.values(this.material.uniforms).forEach((r) => {
      r.value instanceof lt && r.value.dispose();
    }), Object.values(this.material).forEach((r) => {
      r instanceof lt && r.dispose();
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
class bn extends Error {
}
class Pn extends Error {
}
const er = (e3, t, r) => {
  const s = new RegExp(`${t}="([^"]*)"`, "i").exec(e3);
  if (s) return s[1];
  const n = new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i").exec(e3);
  if (n) {
    const a = n[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return a && a.length === 3 ? a.map((o) => o.replace(/<\/?rdf:li>/g, "")) : n[1].trim();
  }
  if (r !== void 0) return r;
  throw new Error(`Can't find ${t} in gainmap metadata`);
}, Sa = (e3) => {
  let t;
  typeof TextDecoder < "u" ? t = new TextDecoder().decode(e3) : t = e3.toString();
  let r = t.indexOf("<x:xmpmeta");
  for (; r !== -1; ) {
    const s = t.indexOf("x:xmpmeta>", r), n = t.slice(r, s + 10);
    try {
      const a = er(n, "hdrgm:GainMapMin", "0"), o = er(n, "hdrgm:GainMapMax"), u = er(n, "hdrgm:Gamma", "1"), h = er(n, "hdrgm:OffsetSDR", "0.015625"), f = er(n, "hdrgm:OffsetHDR", "0.015625"), A = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(n), x = A ? A[1] : "0", w = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(n);
      if (!w) throw new Error("Incomplete gainmap metadata");
      const D = w[1];
      return { gainMapMin: Array.isArray(a) ? a.map((L) => parseFloat(L)) : [parseFloat(a), parseFloat(a), parseFloat(a)], gainMapMax: Array.isArray(o) ? o.map((L) => parseFloat(L)) : [parseFloat(o), parseFloat(o), parseFloat(o)], gamma: Array.isArray(u) ? u.map((L) => parseFloat(L)) : [parseFloat(u), parseFloat(u), parseFloat(u)], offsetSdr: Array.isArray(h) ? h.map((L) => parseFloat(L)) : [parseFloat(h), parseFloat(h), parseFloat(h)], offsetHdr: Array.isArray(f) ? f.map((L) => parseFloat(L)) : [parseFloat(f), parseFloat(f), parseFloat(f)], hdrCapacityMin: parseFloat(x), hdrCapacityMax: parseFloat(D) };
    } catch {
    }
    r = t.indexOf("<x:xmpmeta", s);
  }
};
class Ia {
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
            const x = A + 4;
            let w;
            if (a.getUint16(x) === 18761) w = false;
            else if (a.getUint16(x) === 19789) w = true;
            else {
              s(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (a.getUint16(x + 2, !w) !== 42) {
              s(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const D = a.getUint32(x + 4, !w);
            if (D < 8) {
              s(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const L = x + D, V = a.getUint16(L, !w), k = L + 2;
            let W = 0;
            for (let J = k; J < k + 12 * V; J += 12) a.getUint16(J, !w) === 45057 && (W = a.getUint32(J + 8, !w));
            const Q = L + 2 + V * 12 + 4, re = [];
            for (let J = Q; J < Q + W * 16; J += 16) {
              const X = { MPType: a.getUint32(J, !w), size: a.getUint32(J + 4, !w), dataOffset: a.getUint32(J + 8, !w), dependantImages: a.getUint32(J + 12, !w), start: -1, end: -1, isFII: false };
              X.dataOffset ? (X.start = x + X.dataOffset, X.isFII = false) : (X.start = 0, X.isFII = true), X.end = X.start + X.size, re.push(X);
            }
            if (this.options.extractNonFII && re.length) {
              const J = new Blob([a]), X = [];
              for (const ie of re) {
                if (ie.isFII && !this.options.extractFII) continue;
                const E = J.slice(ie.start, ie.end + 1, "image/jpeg");
                X.push(E);
              }
              r(X);
            }
          }
        }
        u += 2 + a.getUint16(u + 2);
      }
    });
  }
}
const Ta = async (e3) => {
  const t = Sa(e3);
  if (!t) throw new Pn("Gain map XMP metadata not found");
  const s = await new Ia({ extractFII: true, extractNonFII: true }).extract(e3);
  if (s.length !== 2) throw new bn("Gain map recovery image not found");
  return { sdr: new Uint8Array(await s[0].arrayBuffer()), gainMap: new Uint8Array(await s[1].arrayBuffer()), metadata: t };
}, Fs = (e3) => new Promise((t, r) => {
  const s = document.createElement("img");
  s.onload = () => {
    t(s);
  }, s.onerror = (n) => {
    r(n);
  }, s.src = URL.createObjectURL(e3);
});
class ya extends Di {
  constructor(t, r) {
    super(r);
    __publicField(this, "_renderer");
    __publicField(this, "_renderTargetOptions");
    __publicField(this, "_internalLoadingManager");
    __publicField(this, "_config");
    this._config = t, t.renderer && (this._renderer = t.renderer), this._internalLoadingManager = new pn();
  }
  setRenderer(t) {
    return this._renderer = t, this;
  }
  setRenderTargetOptions(t) {
    return this._renderTargetOptions = t, this;
  }
  prepareQuadRenderer() {
    this._renderer || console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    const t = this._config.createMaterial({ gainMapMax: [1, 1, 1], gainMapMin: [0, 0, 0], gamma: [1, 1, 1], offsetHdr: [1, 1, 1], offsetSdr: [1, 1, 1], hdrCapacityMax: 1, hdrCapacityMin: 0, maxDisplayBoost: 1, gainMap: new lt(), sdr: new lt() });
    return this._config.createQuadRenderer({ width: 16, height: 16, type: We, colorSpace: hr, material: t, renderer: this._renderer, renderTargetOptions: this._renderTargetOptions });
  }
  async processImages(t, r, s) {
    const n = r ? new Blob([r], { type: "image/jpeg" }) : void 0, a = new Blob([t], { type: "image/jpeg" });
    let o, u, h = false;
    if (typeof createImageBitmap > "u") {
      const f = await Promise.all([n ? Fs(n) : Promise.resolve(void 0), Fs(a)]);
      u = f[0], o = f[1], h = s === "flipY";
    } else {
      const f = await Promise.all([n ? createImageBitmap(n, { imageOrientation: s || "flipY" }) : Promise.resolve(void 0), createImageBitmap(a, { imageOrientation: s || "flipY" })]);
      u = f[0], o = f[1];
    }
    return { sdrImage: o, gainMapImage: u, needsFlip: h };
  }
  createTextures(t, r, s) {
    const n = new lt(r || new ImageData(2, 2), Fr, wt, wt, Fe, Rs, dr, st, 1, hr);
    n.flipY = s, n.needsUpdate = true;
    const a = new lt(t, Fr, wt, wt, Fe, Rs, dr, st, 1, Te);
    return a.flipY = s, a.needsUpdate = true, { gainMap: n, sdr: a };
  }
  updateQuadRenderer(t, r, s, n, a) {
    t.width = r.width, t.height = r.height, t.material.gainMap = s, t.material.sdr = n, t.material.gainMapMin = a.gainMapMin, t.material.gainMapMax = a.gainMapMax, t.material.offsetHdr = a.offsetHdr, t.material.offsetSdr = a.offsetSdr, t.material.gamma = a.gamma, t.material.hdrCapacityMin = a.hdrCapacityMin, t.material.hdrCapacityMax = a.hdrCapacityMax, t.material.maxDisplayBoost = Math.pow(2, a.hdrCapacityMax), t.material.needsUpdate = true;
  }
}
const Ra = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, ba = `
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
class Pa extends Qe {
  constructor({ gamma: t, offsetHdr: r, offsetSdr: s, gainMapMin: n, gainMapMax: a, maxDisplayBoost: o, hdrCapacityMin: u, hdrCapacityMax: h, sdr: f, gainMap: A }) {
    super({ name: "GainMapDecoderMaterial", vertexShader: Ra, fragmentShader: ba, uniforms: { sdr: { value: f }, gainMap: { value: A }, gamma: { value: new pe(1 / t[0], 1 / t[1], 1 / t[2]) }, offsetHdr: { value: new pe().fromArray(r) }, offsetSdr: { value: new pe().fromArray(s) }, gainMapMin: { value: new pe().fromArray(n) }, gainMapMax: { value: new pe().fromArray(a) }, weightFactor: { value: (Math.log2(o) - u) / (h - u) } }, blending: ht, depthTest: false, depthWrite: false });
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
class On extends ya {
  constructor(t, r) {
    super({ renderer: t, createMaterial: (s) => new Pa(s), createQuadRenderer: (s) => new xs(s) }, r);
  }
  async render(t, r, s, n) {
    const { sdrImage: a, gainMapImage: o, needsFlip: u } = await this.processImages(s, n, "flipY"), { gainMap: h, sdr: f } = this.createTextures(a, o, u);
    this.updateQuadRenderer(t, a, h, f, r), t.render();
  }
}
class Oa extends On {
  load([t, r, s], n, a, o) {
    const u = this.prepareQuadRenderer();
    let h, f, A;
    const x = async () => {
      if (h && f && A) {
        try {
          await this.render(u, A, h, f);
        } catch (R) {
          this.manager.itemError(t), this.manager.itemError(r), this.manager.itemError(s), typeof o == "function" && o(R), u.disposeOnDemandRenderer();
          return;
        }
        typeof n == "function" && n(u), this.manager.itemEnd(t), this.manager.itemEnd(r), this.manager.itemEnd(s), u.disposeOnDemandRenderer();
      }
    };
    let w = true, D = 0, L = 0, V = true, k = 0, W = 0, z = true, Q = 0, re = 0;
    const J = () => {
      if (typeof a == "function") {
        const R = D + k + Q, b = L + W + re, O = w && V && z;
        a(new ProgressEvent("progress", { lengthComputable: O, loaded: b, total: R }));
      }
    };
    this.manager.itemStart(t), this.manager.itemStart(r), this.manager.itemStart(s);
    const X = new Rr(this._internalLoadingManager);
    X.setResponseType("arraybuffer"), X.setRequestHeader(this.requestHeader), X.setPath(this.path), X.setWithCredentials(this.withCredentials), X.load(t, async (R) => {
      if (typeof R == "string") throw new Error("Invalid sdr buffer");
      h = R, await x();
    }, (R) => {
      w = R.lengthComputable, L = R.loaded, D = R.total, J();
    }, (R) => {
      this.manager.itemError(t), typeof o == "function" && o(R);
    });
    const ie = new Rr(this._internalLoadingManager);
    ie.setResponseType("arraybuffer"), ie.setRequestHeader(this.requestHeader), ie.setPath(this.path), ie.setWithCredentials(this.withCredentials), ie.load(r, async (R) => {
      if (typeof R == "string") throw new Error("Invalid gainmap buffer");
      f = R, await x();
    }, (R) => {
      V = R.lengthComputable, W = R.loaded, k = R.total, J();
    }, (R) => {
      this.manager.itemError(r), typeof o == "function" && o(R);
    });
    const E = new Rr(this._internalLoadingManager);
    return E.setRequestHeader(this.requestHeader), E.setPath(this.path), E.setWithCredentials(this.withCredentials), E.load(s, async (R) => {
      if (typeof R != "string") throw new Error("Invalid metadata string");
      A = JSON.parse(R), await x();
    }, (R) => {
      z = R.lengthComputable, re = R.loaded, Q = R.total, J();
    }, (R) => {
      this.manager.itemError(s), typeof o == "function" && o(R);
    }), u;
  }
}
class Fa extends On {
  load(t, r, s, n) {
    const a = this.prepareQuadRenderer(), o = new Rr(this._internalLoadingManager);
    return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(this.withCredentials), this.manager.itemStart(t), o.load(t, async (u) => {
      if (typeof u == "string") throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const h = new Uint8Array(u);
      let f, A, x;
      try {
        const w = await Ta(h);
        f = w.sdr, A = w.gainMap, x = w.metadata;
      } catch (w) {
        if (w instanceof Pn || w instanceof bn) console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), x = { gainMapMin: [0, 0, 0], gainMapMax: [1, 1, 1], gamma: [1, 1, 1], hdrCapacityMin: 0, hdrCapacityMax: 1, offsetHdr: [0, 0, 0], offsetSdr: [0, 0, 0] }, f = h;
        else throw w;
      }
      try {
        await this.render(a, x, f.buffer, A == null ? void 0 : A.buffer);
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
const fr = { apartment: "lebombo_1k.hdr", city: "potsdamer_platz_1k.hdr", dawn: "kiara_1_dawn_1k.hdr", forest: "forest_slope_1k.hdr", lobby: "st_fagans_interior_1k.hdr", night: "dikhololo_night_1k.hdr", park: "rooitou_park_1k.hdr", studio: "studio_small_03_1k.hdr", sunset: "venice_sunset_1k.hdr", warehouse: "empty_warehouse_01_1k.hdr" }, Fn = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", Nt = (e3) => Array.isArray(e3), Es = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function kr({ files: e3 = Es, path: t = "", preset: r = void 0, colorSpace: s = void 0, extensions: n } = {}) {
  r && (ws(r), e3 = fr[r], t = Fn);
  const a = Nt(e3), { extension: o, isCubemap: u } = Ms(e3), h = Cs(o);
  if (!h) throw new Error("useEnvironment: Unrecognized file extension: " + e3);
  const f = pt((D) => D.gl);
  m.useLayoutEffect(() => {
    if (o !== "webp" && o !== "jpg" && o !== "jpeg") return;
    function D() {
      Ur.clear(h, a ? [e3] : e3);
    }
    f.domElement.addEventListener("webglcontextlost", D, { once: true });
  }, [e3, f.domElement]);
  const A = Ur(h, a ? [e3] : e3, (D) => {
    (o === "webp" || o === "jpg" || o === "jpeg") && D.setRenderer(f), D.setPath == null || D.setPath(t), n && n(D);
  });
  let x = a ? A[0] : A;
  if (o === "jpg" || o === "jpeg" || o === "webp") {
    var w;
    x = (w = x.renderTarget) == null ? void 0 : w.texture;
  }
  return x.mapping = u ? Bi : Si, x.colorSpace = s ?? (u ? "srgb" : "srgb-linear"), x;
}
const Ua = { files: Es, path: "", preset: void 0, extensions: void 0 };
kr.preload = (e3) => {
  const t = { ...Ua, ...e3 };
  let { files: r, path: s = "" } = t;
  const { preset: n, extensions: a } = t;
  n && (ws(n), r = fr[n], s = Fn);
  const { extension: o } = Ms(r);
  if (o === "webp" || o === "jpg" || o === "jpeg") throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const u = Cs(o);
  if (!u) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  Ur.preload(u, Nt(r) ? [r] : r, (h) => {
    h.setPath == null || h.setPath(s), a && a(h);
  });
};
const La = { files: Es, preset: void 0 };
kr.clear = (e3) => {
  const t = { ...La, ...e3 };
  let { files: r } = t;
  const { preset: s } = t;
  s && (ws(s), r = fr[s]);
  const { extension: n } = Ms(r), a = Cs(n);
  if (!a) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  Ur.clear(a, Nt(r) ? [r] : r);
};
function ws(e3) {
  if (!(e3 in fr)) throw new Error("Preset must be one of: " + Object.keys(fr).join(", "));
}
function Ms(e3) {
  var t;
  const r = Nt(e3) && e3.length === 6, s = Nt(e3) && e3.length === 3 && e3.some((o) => o.endsWith("json")), n = Nt(e3) ? e3[0] : e3;
  return { extension: r ? "cube" : s ? "webp" : n.startsWith("data:application/exr") ? "exr" : n.startsWith("data:application/hdr") ? "hdr" : n.startsWith("data:image/jpeg") ? "jpg" : (t = n.split(".").pop()) == null || (t = t.split("?")) == null || (t = t.shift()) == null ? void 0 : t.toLowerCase(), isCubemap: r, isGainmap: s };
}
function Cs(e3) {
  return e3 === "cube" ? Ii : e3 === "hdr" ? wa : e3 === "exr" ? Ma : e3 === "jpg" || e3 === "jpeg" ? Fa : e3 === "webp" ? Oa : null;
}
const Ga = (e3) => e3.current && e3.current.isScene, Ha = (e3) => Ga(e3) ? e3.current : e3;
function Ds(e3, t, r, s, n = {}) {
  var a, o, u, h;
  n = { backgroundBlurriness: 0, backgroundIntensity: 1, backgroundRotation: [0, 0, 0], environmentIntensity: 1, environmentRotation: [0, 0, 0], ...n };
  const f = Ha(t || r), A = f.background, x = f.environment, w = { backgroundBlurriness: f.backgroundBlurriness, backgroundIntensity: f.backgroundIntensity, backgroundRotation: (a = (o = f.backgroundRotation) == null || o.clone == null ? void 0 : o.clone()) !== null && a !== void 0 ? a : [0, 0, 0], environmentIntensity: f.environmentIntensity, environmentRotation: (u = (h = f.environmentRotation) == null || h.clone == null ? void 0 : h.clone()) !== null && u !== void 0 ? u : [0, 0, 0] };
  return e3 !== "only" && (f.environment = s), e3 && (f.background = s), bs(f, n), () => {
    e3 !== "only" && (f.environment = x), e3 && (f.background = A), bs(f, w);
  };
}
function Bs({ scene: e3, background: t = false, map: r, ...s }) {
  const n = pt((a) => a.scene);
  return m.useLayoutEffect(() => {
    if (r) return Ds(t, e3, n, r, s);
  }), null;
}
function Un({ background: e3 = false, scene: t, blur: r, backgroundBlurriness: s, backgroundIntensity: n, backgroundRotation: a, environmentIntensity: o, environmentRotation: u, ...h }) {
  const f = kr(h), A = pt((x) => x.scene);
  return m.useLayoutEffect(() => Ds(e3, t, A, f, { backgroundBlurriness: r ?? s, backgroundIntensity: n, backgroundRotation: a, environmentIntensity: o, environmentRotation: u })), m.useEffect(() => () => {
    f.dispose();
  }, [f]), null;
}
function Na({ children: e3, near: t = 0.1, far: r = 1e3, resolution: s = 256, frames: n = 1, map: a, background: o = false, blur: u, backgroundBlurriness: h, backgroundIntensity: f, backgroundRotation: A, environmentIntensity: x, environmentRotation: w, scene: D, files: L, path: V, preset: k = void 0, extensions: W }) {
  const z = pt((E) => E.gl), Q = pt((E) => E.scene), re = m.useRef(null), [J] = m.useState(() => new Or()), X = m.useMemo(() => {
    const E = new Ti(s);
    return E.texture.type = We, E;
  }, [s]);
  m.useEffect(() => () => {
    X.dispose();
  }, [X]), m.useLayoutEffect(() => {
    if (n === 1) {
      const E = z.autoClear;
      z.autoClear = true, re.current.update(z, J), z.autoClear = E;
    }
    return Ds(o, D, Q, X.texture, { backgroundBlurriness: u ?? h, backgroundIntensity: f, backgroundRotation: A, environmentIntensity: x, environmentRotation: w });
  }, [e3, J, X.texture, D, Q, o, n, z]);
  let ie = 1;
  return ye(() => {
    if (n === 1 / 0 || ie < n) {
      const E = z.autoClear;
      z.autoClear = true, re.current.update(z, J), z.autoClear = E, ie++;
    }
  }), m.createElement(m.Fragment, null, yi(m.createElement(m.Fragment, null, e3, m.createElement("cubeCamera", { ref: re, args: [t, r, X] }), L || k ? m.createElement(Un, { background: true, files: L, preset: k, path: V, extensions: W }) : a ? m.createElement(Bs, { background: true, map: a, extensions: W }) : null), J));
}
function za(e3) {
  var t, r, s, n;
  const a = kr(e3), o = e3.map || a;
  m.useMemo(() => vn({ GroundProjectedEnvImpl: Ea }), []), m.useEffect(() => () => {
    a.dispose();
  }, [a]);
  const u = m.useMemo(() => [o], [o]), h = (t = e3.ground) == null ? void 0 : t.height, f = (r = e3.ground) == null ? void 0 : r.radius, A = (s = (n = e3.ground) == null ? void 0 : n.scale) !== null && s !== void 0 ? s : 1e3;
  return m.createElement(m.Fragment, null, m.createElement(Bs, Ri({}, e3, { map: o })), m.createElement("groundProjectedEnvImpl", { args: u, scale: A, height: h, radius: f }));
}
function ka(e3) {
  return e3.ground ? m.createElement(za, e3) : e3.map ? m.createElement(Bs, e3) : e3.children ? m.createElement(Na, e3) : m.createElement(Un, e3);
}
class Qa extends Qe {
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
	      #include <${Da >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
      }` });
  }
}
const ja = (e3) => new pe().setFromSpherical(new bi(e3, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI)), Ya = m.forwardRef(({ radius: e3 = 100, depth: t = 50, count: r = 5e3, saturation: s = 0, factor: n = 4, fade: a = false, speed: o = 1 }, u) => {
  const h = m.useRef(null), [f, A, x] = m.useMemo(() => {
    const D = [], L = [], V = Array.from({ length: r }, () => (0.5 + 0.5 * Math.random()) * n), k = new zr();
    let W = e3 + t;
    const z = t / r;
    for (let Q = 0; Q < r; Q++) W -= z * Math.random(), D.push(...ja(W).toArray()), k.setHSL(Q / r, s, 0.9), L.push(k.r, k.g, k.b);
    return [new Float32Array(D), new Float32Array(L), new Float32Array(V)];
  }, [r, t, n, e3, s]);
  ye((D) => h.current && (h.current.uniforms.time.value = D.clock.elapsedTime * o));
  const [w] = m.useState(() => new Qa());
  return m.createElement("points", { ref: u }, m.createElement("bufferGeometry", null, m.createElement("bufferAttribute", { attach: "attributes-position", args: [f, 3] }), m.createElement("bufferAttribute", { attach: "attributes-color", args: [A, 3] }), m.createElement("bufferAttribute", { attach: "attributes-size", args: [x, 1] })), m.createElement("primitive", { ref: h, object: w, attach: "material", blending: An, "uniforms-fade-value": a, depthWrite: false, transparent: true, vertexColors: true }));
});
/**
* postprocessing v6.39.1 build Fri Apr 17 2026
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2026 Raoul van Rüschen
* @license Zlib
*/
var Wa = (() => {
  const e3 = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), t = new Float32Array([0, 0, 2, 0, 0, 2]), r = new pr();
  return r.setAttribute("position", new Lr(e3, 3)), r.setAttribute("uv", new Lr(t, 2)), r;
})(), Ge = class fs {
  static get fullscreenGeometry() {
    return Wa;
  }
  constructor(t = "Pass", r = new Or(), s = new fn()) {
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
    r !== null ? r.material = t : (r = new Nr(fs.fullscreenGeometry, t), r.frustumCulled = false, this.scene === null && (this.scene = new Or()), this.scene.add(r), this.screen = r);
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
  setDepthTexture(t, r = Tt) {
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
      (r instanceof ke || r instanceof xn || r instanceof lt || r instanceof fs) && this[t].dispose();
    }
    this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
  }
}, Va = class extends Ge {
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = false;
  }
  render(e3, t, r, s, n) {
    const a = e3.state.buffers.stencil;
    a.setLocked(false), a.setTest(false);
  }
}, _a = `#ifdef COLOR_WRITE
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
}`, Ln = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", Gn = class extends Qe {
  constructor() {
    super({ name: "CopyMaterial", defines: { COLOR_SPACE_CONVERSION: "1", DEPTH_PACKING: "0", COLOR_WRITE: "1" }, uniforms: { inputBuffer: new Y(null), depthBuffer: new Y(null), channelWeights: new Y(null), opacity: new Y(1) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: _a, vertexShader: Ln }), this.depthFunc = Li;
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
}, Xa = class extends Ge {
  constructor(e3, t = true) {
    super("CopyPass"), this.fullscreenMaterial = new Gn(), this.needsSwap = false, this.renderTarget = e3, e3 === void 0 && (this.renderTarget = new ke(1, 1, { minFilter: Fe, magFilter: Fe, stencilBuffer: false, depthBuffer: false }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = t;
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
    r !== void 0 && (this.renderTarget.texture.type = r, r !== st ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : e3 !== null && e3.outputColorSpace === Te && (this.renderTarget.texture.colorSpace = Te));
  }
}, Us = new zr(), Ss = class extends Ge {
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
    h ? (e3.getClearColor(Us), e3.setClearColor(a, f ? o : u)) : f && e3.setClearAlpha(o), e3.setRenderTarget(this.renderToScreen ? null : t), e3.clear(this.color, this.depth, this.stencil), h ? e3.setClearColor(Us, u) : f && e3.setClearAlpha(u);
  }
}, Ka = class extends Ge {
  constructor(e3, t) {
    super("MaskPass", e3, t), this.needsSwap = false, this.clearPass = new Ss(false, false, true), this.inverse = false;
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
    const a = e3.getContext(), o = e3.state.buffers, u = this.scene, h = this.camera, f = this.clearPass, A = this.inverted ? 0 : 1, x = 1 - A;
    o.color.setMask(false), o.depth.setMask(false), o.color.setLocked(true), o.depth.setLocked(true), o.stencil.setTest(true), o.stencil.setOp(a.REPLACE, a.REPLACE, a.REPLACE), o.stencil.setFunc(a.ALWAYS, A, 4294967295), o.stencil.setClear(x), o.stencil.setLocked(true), this.clearPass.enabled && (this.renderToScreen ? f.render(e3, null) : (f.render(e3, t), f.render(e3, r))), this.renderToScreen ? (e3.setRenderTarget(null), e3.render(u, h)) : (e3.setRenderTarget(t), e3.render(u, h), e3.setRenderTarget(r), e3.render(u, h)), o.color.setLocked(false), o.depth.setLocked(false), o.stencil.setLocked(false), o.stencil.setFunc(a.EQUAL, 1, 4294967295), o.stencil.setOp(a.KEEP, a.KEEP, a.KEEP), o.stencil.setLocked(true);
  }
}, Xr = 1 / 1e3, Za = 1e3, Ja = class {
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
    return this._delta * Xr;
  }
  get fixedDelta() {
    return this._fixedDelta * Xr;
  }
  set fixedDelta(e3) {
    this._fixedDelta = e3 * Za;
  }
  get elapsed() {
    return this._elapsed * Xr;
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
}, qa = class {
  constructor(e3 = null, { depthBuffer: t = true, stencilBuffer: r = false, multisampling: s = 0, frameBufferType: n } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(t, r, n, s), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new Xa(), this.depthTexture = null, this.depthRenderTarget = null, this.passes = [], this.timer = new Ja(), this.autoRenderToScreen = true, this.setRenderer(e3);
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
      const t = e3.getSize(new we()), r = e3.getContext().getContextAttributes().alpha, s = this.inputBuffer.texture.type;
      s === st && e3.outputColorSpace === Te && (this.inputBuffer.texture.colorSpace = Te, this.outputBuffer.texture.colorSpace = Te, this.inputBuffer.dispose(), this.outputBuffer.dispose()), e3.autoClear = false, this.setSize(t.width, t.height);
      for (const n of this.passes) n.initialize(e3, r, s);
    }
  }
  replaceRenderer(e3, t = true) {
    const r = this.renderer, s = r.domElement.parentNode;
    return this.setRenderer(e3), t && s !== null && (s.removeChild(r.domElement), s.appendChild(e3.domElement)), r;
  }
  createDepthTexture() {
    const e3 = this.inputBuffer, t = new Pi();
    this.depthTexture = t, e3.stencilBuffer ? (t.format = Oi, t.type = Fi) : t.type = tt;
    const r = t.clone();
    return r.name = "EffectComposer.StableDepth", this.depthRenderTarget = new ke(e3.width, e3.height, { depthBuffer: true, stencilBuffer: e3.stencilBuffer, depthTexture: r }), r;
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
    const n = this.renderer, a = n === null ? new we() : n.getDrawingBufferSize(new we()), o = { minFilter: Fe, magFilter: Fe, stencilBuffer: t, depthBuffer: e3, type: r }, u = new ke(a.width, a.height, o);
    return s > 0 && (u.samples = s), r === st && n !== null && n.outputColorSpace === Te && (u.texture.colorSpace = Te), u.texture.name = "EffectComposer.Buffer", u.texture.generateMipmaps = false, u;
  }
  setMainScene(e3) {
    for (const t of this.passes) t.mainScene = e3;
  }
  setMainCamera(e3) {
    for (const t of this.passes) t.mainCamera = e3;
  }
  addPass(e3, t) {
    const r = this.passes, s = this.renderer, n = s.getDrawingBufferSize(new we()), a = s.getContext().getContextAttributes().alpha, o = this.inputBuffer.texture.type;
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
      u instanceof Ka ? o = true : u instanceof Va && (o = false);
    }
  }
  setSize(e3, t, r) {
    const s = this.renderer, n = s.getSize(new we());
    (e3 === void 0 || t === void 0) && (e3 = n.width, t = n.height), (n.width !== e3 || n.height !== t) && s.setSize(e3, t, r);
    const a = s.getDrawingBufferSize(new we());
    this.inputBuffer.setSize(a.width, a.height), this.outputBuffer.setSize(a.width, a.height), this.depthRenderTarget !== null && this.depthRenderTarget.setSize(a.width, a.height);
    for (const o of this.passes) o.setSize(a.width, a.height);
  }
  reset() {
    this.dispose(), this.autoRenderToScreen = true;
  }
  dispose() {
    for (const e3 of this.passes) e3.dispose();
    this.passes = [], this.inputBuffer !== null && this.inputBuffer.dispose(), this.outputBuffer !== null && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose(), Ge.fullscreenGeometry.dispose();
  }
}, dt = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }, se = { FRAGMENT_HEAD: "FRAGMENT_HEAD", FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV", FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE", VERTEX_HEAD: "VERTEX_HEAD", VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT" }, $a = class {
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([[se.FRAGMENT_HEAD, null], [se.FRAGMENT_MAIN_UV, null], [se.FRAGMENT_MAIN_IMAGE, null], [se.VERTEX_HEAD, null], [se.VERTEX_MAIN_SUPPORT, null]]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = dt.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = false, this.readDepth = false, this.colorSpace = hr;
  }
}, Kr = false, Ls = class {
  constructor(e3 = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(e3), this.meshCount = 0, this.replaceMaterial = (t) => {
      if (t.isMesh) {
        let r;
        if (t.material.flatShading) switch (t.material.side) {
          case et:
            r = this.materialsFlatShadedDoubleSide;
            break;
          case nr:
            r = this.materialsFlatShadedBackSide;
            break;
          default:
            r = this.materialsFlatShaded;
            break;
        }
        else switch (t.material.side) {
          case et:
            r = this.materialsDoubleSide;
            break;
          case nr:
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
    if (!(e3 instanceof Qe)) return e3.clone();
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
      for (const r of t) r.uniforms = Object.assign({}, e3.uniforms), r.side = Gi;
      t[2].skinning = true, this.materialsBackSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.side = nr, s;
      }), this.materialsDoubleSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.side = et, s;
      }), this.materialsFlatShaded = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s;
      }), this.materialsFlatShadedBackSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s.side = nr, s;
      }), this.materialsFlatShadedDoubleSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s.side = et, s;
      });
    }
  }
  render(e3, t, r) {
    const s = e3.shadowMap.enabled;
    if (e3.shadowMap.enabled = false, Kr) {
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
    return Kr;
  }
  static set workaroundEnabled(e3) {
    Kr = e3;
  }
}, mt = -1, Ue = class extends vs {
  constructor(e3 = null, t = mt, r = mt, s = 1) {
    super(), e3 !== null && this.addEventListener("change", () => e3.setSize(this.baseSize.width, this.baseSize.height)), this.baseSize = new we(1, 1), this.preferredSize = new we(t, r), this.target = this.preferredSize, this.s = s, this.effectiveSize = new we(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
  }
  updateEffectiveSize() {
    const e3 = this.baseSize, t = this.preferredSize, r = this.effectiveSize, s = this.scale;
    t.width !== mt ? r.width = t.width : t.height !== mt ? r.width = Math.round(t.height * (e3.width / Math.max(e3.height, 1))) : r.width = Math.round(e3.width * s), t.height !== mt ? r.height = t.height : t.width !== mt ? r.height = Math.round(t.width / Math.max(e3.width / Math.max(e3.height, 1), 1)) : r.height = Math.round(e3.height * s);
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
    this.s !== e3 && (this.s = e3, this.preferredSize.setScalar(mt), this.dispatchEvent({ type: "change" }));
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
    return mt;
  }
}, $ = { SKIP: 9, SET: 30, ADD: 0, ALPHA: 1, AVERAGE: 2, COLOR: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, DIVIDE: 8, DST: 9, EXCLUSION: 10, HARD_LIGHT: 11, HARD_MIX: 12, HUE: 13, INVERT: 14, INVERT_RGB: 15, LIGHTEN: 16, LINEAR_BURN: 17, LINEAR_DODGE: 18, LINEAR_LIGHT: 19, LUMINOSITY: 20, MULTIPLY: 21, NEGATION: 22, NORMAL: 23, OVERLAY: 24, PIN_LIGHT: 25, REFLECT: 26, SATURATION: 27, SCREEN: 28, SOFT_LIGHT: 29, SRC: 30, SUBTRACT: 31, VIVID_LIGHT: 32 }, eo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", to = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}", ro = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", so = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", no = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", io = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ao = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", oo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", co = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", lo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", uo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ho = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", fo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", go = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", po = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", vo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ao = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", mo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", xo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Eo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", wo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Mo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Co = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}", Do = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Bo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", So = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Io = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", To = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", yo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ro = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}", bo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Po = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Oo = /* @__PURE__ */ new Map([[$.ADD, eo], [$.ALPHA, to], [$.AVERAGE, ro], [$.COLOR, so], [$.COLOR_BURN, no], [$.COLOR_DODGE, io], [$.DARKEN, ao], [$.DIFFERENCE, oo], [$.DIVIDE, co], [$.DST, null], [$.EXCLUSION, lo], [$.HARD_LIGHT, uo], [$.HARD_MIX, ho], [$.HUE, fo], [$.INVERT, go], [$.INVERT_RGB, po], [$.LIGHTEN, vo], [$.LINEAR_BURN, Ao], [$.LINEAR_DODGE, mo], [$.LINEAR_LIGHT, xo], [$.LUMINOSITY, Eo], [$.MULTIPLY, wo], [$.NEGATION, Mo], [$.NORMAL, Co], [$.OVERLAY, Do], [$.PIN_LIGHT, Bo], [$.REFLECT, So], [$.SATURATION, Io], [$.SCREEN, To], [$.SOFT_LIGHT, yo], [$.SRC, Ro], [$.SUBTRACT, bo], [$.VIVID_LIGHT, Po]]), Fo = class extends vs {
  constructor(e3, t = 1) {
    super(), this._blendFunction = e3, this.opacity = new Y(t);
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
    return Oo.get(this.blendFunction);
  }
}, kt = class extends vs {
  constructor(e3, t, { attributes: r = dt.NONE, blendFunction: s = $.NORMAL, defines: n = /* @__PURE__ */ new Map(), uniforms: a = /* @__PURE__ */ new Map(), extensions: o = null, vertexShader: u = null } = {}) {
    super(), this.name = e3, this.renderer = null, this.attributes = r, this.fragmentShader = t, this.vertexShader = u, this.defines = n, this.uniforms = a, this.extensions = o, this.blendMode = new Fo(s), this.blendMode.addEventListener("change", (h) => this.setChanged()), this._inputColorSpace = hr, this._outputColorSpace = mn;
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
  setDepthTexture(e3, t = Tt) {
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
      (t instanceof ke || t instanceof xn || t instanceof lt || t instanceof Ge) && this[e3].dispose();
    }
  }
}, Qr = { VERY_SMALL: 0, SMALL: 1, MEDIUM: 2, LARGE: 3, VERY_LARGE: 4, HUGE: 5 }, Uo = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, Lo = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", Go = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])], Ho = class extends Qe {
  constructor(e3 = new Ps()) {
    super({ name: "KawaseBlurMaterial", uniforms: { inputBuffer: new Y(null), texelSize: new Y(new Ps()), scale: new Y(1), kernel: new Y(0) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Uo, vertexShader: Lo }), this.setTexelSize(e3.x, e3.y), this.kernelSize = Qr.MEDIUM;
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setInputBuffer(e3) {
    this.inputBuffer = e3;
  }
  get kernelSequence() {
    return Go[this.kernelSize];
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
}, No = class extends Ge {
  constructor({ kernelSize: e3 = Qr.MEDIUM, resolutionScale: t = 0.5, width: r = Ue.AUTO_SIZE, height: s = Ue.AUTO_SIZE, resolutionX: n = r, resolutionY: a = s } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new ke(1, 1, { depthBuffer: false }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const o = this.resolution = new Ue(this, n, a, t);
    o.addEventListener("change", (u) => this.setSize(o.baseWidth, o.baseHeight)), this._blurMaterial = new Ho(), this._blurMaterial.kernelSize = e3, this.copyMaterial = new Gn();
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
    let x = t;
    this.fullscreenMaterial = f;
    for (let w = 0, D = A.length; w < D; ++w) {
      const L = w & 1 ? h : u;
      f.kernel = A[w], f.inputBuffer = x.texture, e3.setRenderTarget(L), e3.render(a, o), x = L;
    }
    this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = x.texture, e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(a, o);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t);
    const s = r.width, n = r.height;
    this.renderTargetA.setSize(s, n), this.renderTargetB.setSize(s, n), this.blurMaterial.setSize(e3, t);
  }
  initialize(e3, t, r) {
    r !== void 0 && (this.renderTargetA.texture.type = r, this.renderTargetB.texture.type = r, r !== st ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : e3 !== null && e3.outputColorSpace === Te && (this.renderTargetA.texture.colorSpace = Te, this.renderTargetB.texture.colorSpace = Te));
  }
  static get AUTO_SIZE() {
    return Ue.AUTO_SIZE;
  }
}, zo = `#include <common>
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
}`, ko = class extends Qe {
  constructor(e3 = false, t = null) {
    super({ name: "LuminanceMaterial", defines: { THREE_REVISION: gr.replace(/\D+/g, "") }, uniforms: { inputBuffer: new Y(null), threshold: new Y(0), smoothing: new Y(1), range: new Y(null) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: zo, vertexShader: Ln }), this.colorOutput = e3, this.luminanceRange = t;
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
}, Qo = class extends Ge {
  constructor({ renderTarget: e3, luminanceRange: t, colorOutput: r, resolutionScale: s = 1, width: n = Ue.AUTO_SIZE, height: a = Ue.AUTO_SIZE, resolutionX: o = n, resolutionY: u = a } = {}) {
    super("LuminancePass"), this.fullscreenMaterial = new ko(r, t), this.needsSwap = false, this.renderTarget = e3, this.renderTarget === void 0 && (this.renderTarget = new ke(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "LuminancePass.Target");
    const h = this.resolution = new Ue(this, o, u, s);
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
    r !== void 0 && r !== st && (this.renderTarget.texture.type = r, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, jo = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`, Yo = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}", Wo = class extends Qe {
  constructor() {
    super({ name: "DownsamplingMaterial", uniforms: { inputBuffer: new Y(null), texelSize: new Y(new we()) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: jo, vertexShader: Yo });
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setSize(e3, t) {
    this.uniforms.texelSize.value.set(1 / e3, 1 / t);
  }
}, Vo = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`, _o = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}", Xo = class extends Qe {
  constructor() {
    super({ name: "UpsamplingMaterial", uniforms: { inputBuffer: new Y(null), supportBuffer: new Y(null), texelSize: new Y(new we()), radius: new Y(0.85) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Vo, vertexShader: _o });
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
}, Ko = class extends Ge {
  constructor() {
    super("MipmapBlurPass"), this.needsSwap = false, this.renderTarget = new ke(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new Wo(), this.upsamplingMaterial = new Xo(), this.resolution = new we();
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
    let x = t;
    this.fullscreenMaterial = u;
    for (let w = 0, D = f.length; w < D; ++w) {
      const L = f[w];
      u.setSize(x.width, x.height), u.inputBuffer = x.texture, e3.setRenderTarget(L), e3.render(a, o), x = L;
    }
    this.fullscreenMaterial = h;
    for (let w = A.length - 1; w >= 0; --w) {
      const D = A[w];
      h.setSize(x.width, x.height), h.inputBuffer = x.texture, h.supportBuffer = f[w].texture, e3.setRenderTarget(D), e3.render(a, o), x = D;
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
      if (r !== st) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      else if (e3 !== null && e3.outputColorSpace === Te) for (const n of s) n.texture.colorSpace = Te;
    }
  }
  dispose() {
    super.dispose();
    for (const e3 of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) e3.dispose();
  }
}, Zo = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`, Jo = class extends kt {
  constructor({ blendFunction: e3 = $.SCREEN, luminanceThreshold: t = 1, luminanceSmoothing: r = 0.03, mipmapBlur: s = true, intensity: n = 1, radius: a = 0.85, levels: o = 8, kernelSize: u = Qr.LARGE, resolutionScale: h = 0.5, width: f = Ue.AUTO_SIZE, height: A = Ue.AUTO_SIZE, resolutionX: x = f, resolutionY: w = A } = {}) {
    super("BloomEffect", Zo, { blendFunction: e3, uniforms: /* @__PURE__ */ new Map([["map", new Y(null)], ["intensity", new Y(n)]]) }), this.renderTarget = new ke(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new No({ kernelSize: u }), this.luminancePass = new Qo({ colorOutput: true }), this.luminanceMaterial.threshold = t, this.luminanceMaterial.smoothing = r, this.mipmapBlurPass = new Ko(), this.mipmapBlurPass.enabled = s, this.mipmapBlurPass.radius = a, this.mipmapBlurPass.levels = o, this.uniforms.get("map").value = s ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const D = this.resolution = new Ue(this, x, w, h);
    D.addEventListener("change", (L) => this.setSize(D.baseWidth, D.baseHeight));
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
    this.blurPass.initialize(e3, t, r), this.luminancePass.initialize(e3, t, r), this.mipmapBlurPass.initialize(e3, t, r), r !== void 0 && (this.renderTarget.texture.type = r, e3 !== null && e3.outputColorSpace === Te && (this.renderTarget.texture.colorSpace = Te));
  }
}, qo = `#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`, $o = "uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}", ec = class extends kt {
  constructor({ offset: e3 = new we(1e-3, 5e-4), radialModulation: t = false, modulationOffset: r = 0.15 } = {}) {
    super("ChromaticAberrationEffect", qo, { vertexShader: $o, attributes: dt.CONVOLUTION, uniforms: /* @__PURE__ */ new Map([["offset", new Y(e3)], ["modulationOffset", new Y(r)]]) }), this.radialModulation = t;
  }
  get offset() {
    return this.uniforms.get("offset").value;
  }
  set offset(e3) {
    this.uniforms.get("offset").value = e3;
  }
  get radialModulation() {
    return this.defines.has("RADIAL_MODULATION");
  }
  set radialModulation(e3) {
    e3 ? this.defines.set("RADIAL_MODULATION", "1") : this.defines.delete("RADIAL_MODULATION"), this.setChanged();
  }
  get modulationOffset() {
    return this.uniforms.get("modulationOffset").value;
  }
  set modulationOffset(e3) {
    this.uniforms.get("modulationOffset").value = e3;
  }
  getOffset() {
    return this.offset;
  }
  setOffset(e3) {
    this.offset = e3;
  }
}, Gs = class extends Ge {
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
    r !== void 0 && r !== st && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, Hn = class extends Ge {
  constructor(e3, t, r = null) {
    super("RenderPass", e3, t), this.needsSwap = false, this.needsDepthBlit = true, this.clearPass = new Ss(), this.overrideMaterialManager = r === null ? null : new Ls(r), this.ignoreBackground = false, this.skipShadowMapUpdate = false, this.selection = null;
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
    e3 !== null ? t !== null ? t.setMaterial(e3) : this.overrideMaterialManager = new Ls(e3) : t !== null && (t.dispose(), this.overrideMaterialManager = null);
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
    const a = this.scene, o = this.camera, u = this.selection, h = o.layers.mask, f = a.background, A = e3.shadowMap.autoUpdate, x = this.renderToScreen ? null : t;
    u !== null && o.layers.set(u.getLayer()), this.skipShadowMapUpdate && (e3.shadowMap.autoUpdate = false), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (a.background = null), this.clearPass.enabled && this.clearPass.render(e3, t), e3.setRenderTarget(x), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(e3, a, o) : e3.render(a, o), o.layers.mask = h, a.background = f, e3.shadowMap.autoUpdate = A;
  }
}, Nn = { DEPTH: 0, LUMA: 1, COLOR: 2 }, tc = { DISABLED: 0, DEPTH: 1, CUSTOM: 2 }, tr = { LOW: 0, MEDIUM: 1, HIGH: 2, ULTRA: 3 }, rr = { DEFAULT: 0, ESKIL: 1 }, rc = `varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
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
}`, sc = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`, nc = class extends Qe {
  constructor(e3 = new we(), t = Nn.COLOR) {
    super({ name: "EdgeDetectionMaterial", defines: { THREE_REVISION: gr.replace(/\D+/g, ""), LOCAL_CONTRAST_ADAPTATION_FACTOR: "2.0", EDGE_THRESHOLD: "0.1", DEPTH_THRESHOLD: "0.01", PREDICATION_MODE: "0", PREDICATION_THRESHOLD: "0.01", PREDICATION_SCALE: "2.0", PREDICATION_STRENGTH: "1.0", DEPTH_PACKING: "0" }, uniforms: { inputBuffer: new Y(null), depthBuffer: new Y(null), predicationBuffer: new Y(null), texelSize: new Y(e3) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: rc, vertexShader: sc }), this.edgeDetectionMode = t;
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = Tt) {
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
}, ic = `#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
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
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`, ac = "uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}", oc = class extends Qe {
  constructor(e3 = new we(), t = new we()) {
    super({ name: "SMAAWeightsMaterial", defines: { MAX_SEARCH_STEPS_INT: "16", MAX_SEARCH_STEPS_FLOAT: "16.0", MAX_SEARCH_STEPS_DIAG_INT: "8", MAX_SEARCH_STEPS_DIAG_FLOAT: "8.0", CORNER_ROUNDING: "25", CORNER_ROUNDING_NORM: "0.25", AREATEX_MAX_DISTANCE: "16.0", AREATEX_MAX_DISTANCE_DIAG: "20.0", AREATEX_PIXEL_SIZE: "(1.0 / vec2(160.0, 560.0))", AREATEX_SUBTEX_SIZE: "(1.0 / 7.0)", SEARCHTEX_SIZE: "vec2(66.0, 33.0)", SEARCHTEX_PACKED_SIZE: "vec2(64.0, 16.0)" }, uniforms: { inputBuffer: new Y(null), searchTexture: new Y(null), areaTexture: new Y(null), resolution: new Y(t), texelSize: new Y(e3) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: ic, vertexShader: ac });
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
}, Hs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC", Ns = "data:image/png;base64,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", cc = "uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}", lc = "varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}", uc = class extends kt {
  constructor({ blendFunction: e3 = $.SRC, preset: t = tr.MEDIUM, edgeDetectionMode: r = Nn.COLOR, predicationMode: s = tc.DISABLED } = {}) {
    super("SMAAEffect", cc, { vertexShader: lc, blendFunction: e3, attributes: dt.CONVOLUTION | dt.DEPTH, uniforms: /* @__PURE__ */ new Map([["weightMap", new Y(null)]]) });
    let n, a;
    arguments.length > 1 && (n = arguments[0], a = arguments[1], arguments.length > 2 && (t = arguments[2]), arguments.length > 3 && (r = arguments[3])), this.renderTargetEdges = new ke(1, 1, { depthBuffer: false }), this.renderTargetEdges.texture.name = "SMAA.Edges", this.renderTargetWeights = this.renderTargetEdges.clone(), this.renderTargetWeights.texture.name = "SMAA.Weights", this.uniforms.get("weightMap").value = this.renderTargetWeights.texture, this.clearPass = new Ss(true, false, false), this.clearPass.overrideClearColor = new zr(0), this.clearPass.overrideClearAlpha = 1, this.edgeDetectionPass = new Gs(new nc()), this.edgeDetectionMaterial.edgeDetectionMode = r, this.edgeDetectionMaterial.predicationMode = s, this.weightsPass = new Gs(new oc());
    const o = new pn();
    o.onLoad = () => {
      const u = new lt(n);
      u.name = "SMAA.Search", u.magFilter = zt, u.minFilter = zt, u.generateMipmaps = false, u.needsUpdate = true, u.flipY = true, this.weightsMaterial.searchTexture = u;
      const h = new lt(a);
      h.name = "SMAA.Area", h.magFilter = Fe, h.minFilter = Fe, h.generateMipmaps = false, h.needsUpdate = true, h.flipY = false, this.weightsMaterial.areaTexture = h, this.dispatchEvent({ type: "load" });
    }, o.itemStart("search"), o.itemStart("area"), n !== void 0 && a !== void 0 ? (o.itemEnd("search"), o.itemEnd("area")) : typeof Image < "u" && (n = new Image(), a = new Image(), n.addEventListener("load", () => o.itemEnd("search")), a.addEventListener("load", () => o.itemEnd("area")), n.src = Hs, a.src = Ns), this.applyPreset(t);
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
      case tr.LOW:
        t.edgeDetectionThreshold = 0.15, r.orthogonalSearchSteps = 4, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case tr.MEDIUM:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 8, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case tr.HIGH:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 16, r.diagonalSearchSteps = 8, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
      case tr.ULTRA:
        t.edgeDetectionThreshold = 0.05, r.orthogonalSearchSteps = 32, r.diagonalSearchSteps = 16, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
    }
  }
  setDepthTexture(e3, t = Tt) {
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
    return Hs;
  }
  static get areaImageDataURL() {
    return Ns;
  }
}, dc = `#include <packing>
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
gl_FragColor=vec4(n[index],d[index]);}`, hc = "uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}", fc = class extends Qe {
  constructor() {
    super({ name: "DepthDownsamplingMaterial", defines: { DEPTH_PACKING: "0" }, uniforms: { depthBuffer: new Y(null), normalBuffer: new Y(null), texelSize: new Y(new we()) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: dc, vertexShader: hc });
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = Tt) {
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
}, gc = class extends Ge {
  constructor({ normalBuffer: e3 = null, resolutionScale: t = 0.5, width: r = Ue.AUTO_SIZE, height: s = Ue.AUTO_SIZE, resolutionX: n = r, resolutionY: a = s } = {}) {
    super("DepthDownsamplingPass");
    const o = new fc();
    o.normalBuffer = e3, this.fullscreenMaterial = o, this.needsDepthTexture = true, this.needsSwap = false, this.renderTarget = new ke(1, 1, { minFilter: zt, magFilter: zt, depthBuffer: false, type: tt }), this.renderTarget.texture.name = "DepthDownsamplingPass.Target", this.renderTarget.texture.generateMipmaps = false;
    const u = this.resolution = new Ue(this, n, a, t);
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
  setDepthTexture(e3, t = Tt) {
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
}, pc = `uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`, vc = class extends kt {
  constructor({ blendFunction: e3, eskil: t = false, technique: r = t ? rr.ESKIL : rr.DEFAULT, offset: s = 0.5, darkness: n = 0.5 } = {}) {
    super("VignetteEffect", pc, { blendFunction: e3, defines: /* @__PURE__ */ new Map([["VIGNETTE_TECHNIQUE", r.toFixed(0)]]), uniforms: /* @__PURE__ */ new Map([["offset", new Y(s)], ["darkness", new Y(n)]]) });
  }
  get technique() {
    return Number(this.defines.get("VIGNETTE_TECHNIQUE"));
  }
  set technique(e3) {
    this.technique !== e3 && (this.defines.set("VIGNETTE_TECHNIQUE", e3.toFixed(0)), this.setChanged());
  }
  get eskil() {
    return this.technique === rr.ESKIL;
  }
  set eskil(e3) {
    this.technique = e3 ? rr.ESKIL : rr.DEFAULT;
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
}, Ac = `#include <common>
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
}`, mc = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", xc = class extends Qe {
  constructor(e3, t, r, s, n = false) {
    super({ name: "EffectMaterial", defines: { THREE_REVISION: gr.replace(/\D+/g, ""), DEPTH_PACKING: "0", ENCODE_OUTPUT: "1" }, uniforms: { inputBuffer: new Y(null), depthBuffer: new Y(null), resolution: new Y(new we()), texelSize: new Y(new we()), cameraNear: new Y(0.3), cameraFar: new Y(1e3), aspect: new Y(1), time: new Y(0) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, dithering: n }), e3 && this.setShaderParts(e3), t && this.setDefines(t), r && this.setUniforms(r), this.copyCameraSettings(s);
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
  setDepthBuffer(e3, t = Tt) {
    this.depthBuffer = e3, this.depthPacking = t;
  }
  setShaderData(e3) {
    this.setShaderParts(e3.shaderParts), this.setDefines(e3.defines), this.setUniforms(e3.uniforms), this.setExtensions(e3.extensions);
  }
  setShaderParts(e3) {
    return this.fragmentShader = Ac.replace(se.FRAGMENT_HEAD, e3.get(se.FRAGMENT_HEAD) || "").replace(se.FRAGMENT_MAIN_UV, e3.get(se.FRAGMENT_MAIN_UV) || "").replace(se.FRAGMENT_MAIN_IMAGE, e3.get(se.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = mc.replace(se.VERTEX_HEAD, e3.get(se.VERTEX_HEAD) || "").replace(se.VERTEX_MAIN_SUPPORT, e3.get(se.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = true, this;
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
    e3 && (this.uniforms.cameraNear.value = e3.near, this.uniforms.cameraFar.value = e3.far, e3 instanceof Hi ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
  setSize(e3, t) {
    const r = this.uniforms;
    r.resolution.value.set(e3, t), r.texelSize.value.set(1 / e3, 1 / t), r.aspect.value = e3 / t;
  }
  static get Section() {
    return se;
  }
};
function zs(e3, t, r) {
  for (const s of t) {
    const n = "$1" + e3 + s.charAt(0).toUpperCase() + s.slice(1), a = new RegExp("([^\\.])(\\b" + s + "\\b)", "g");
    for (const o of r.entries()) o[1] !== null && r.set(o[0], o[1].replace(a, n));
  }
}
function Ec(e3, t, r) {
  let s = t.getFragmentShader(), n = t.getVertexShader();
  const a = s !== void 0 && /mainImage/.test(s), o = s !== void 0 && /mainUv/.test(s);
  if (r.attributes |= t.getAttributes(), s === void 0) throw new Error(`Missing fragment shader (${t.name})`);
  if (o && r.attributes & dt.CONVOLUTION) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);
  if (!a && !o) throw new Error(`Could not find mainImage or mainUv function (${t.name})`);
  {
    const u = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, h = r.shaderParts;
    let f = h.get(se.FRAGMENT_HEAD) || "", A = h.get(se.FRAGMENT_MAIN_UV) || "", x = h.get(se.FRAGMENT_MAIN_IMAGE) || "", w = h.get(se.VERTEX_HEAD) || "", D = h.get(se.VERTEX_MAIN_SUPPORT) || "";
    const L = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
    if (o && (A += `	${e3}MainUv(UV);
`, r.uvTransformation = true), n !== null && /mainSupport/.test(n)) {
      const z = /mainSupport *\([\w\s]*?uv\s*?\)/.test(n);
      D += `	${e3}MainSupport(`, D += z ? `vUv);
` : `);
`;
      for (const Q of n.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) for (const re of Q[1].split(/\s*,\s*/)) r.varyings.add(re), L.add(re), V.add(re);
      for (const Q of n.matchAll(u)) V.add(Q[1]);
    }
    for (const z of s.matchAll(u)) V.add(z[1]);
    for (const z of t.defines.keys()) V.add(z.replace(/\([\w\s,]*\)/g, ""));
    for (const z of t.uniforms.keys()) V.add(z);
    V.delete("while"), V.delete("for"), V.delete("if"), t.uniforms.forEach((z, Q) => r.uniforms.set(e3 + Q.charAt(0).toUpperCase() + Q.slice(1), z)), t.defines.forEach((z, Q) => r.defines.set(e3 + Q.charAt(0).toUpperCase() + Q.slice(1), z));
    const k = /* @__PURE__ */ new Map([["fragment", s], ["vertex", n]]);
    zs(e3, V, r.defines), zs(e3, V, k), s = k.get("fragment"), n = k.get("vertex");
    const W = t.blendMode;
    if (r.blendModes.set(W.blendFunction, W), a) {
      t.inputColorSpace !== null && t.inputColorSpace !== r.colorSpace && (x += t.inputColorSpace === Te ? `color0 = sRGBTransferOETF(color0);
	` : `color0 = sRGBToLinear(color0);
	`), t.outputColorSpace !== mn ? r.colorSpace = t.outputColorSpace : t.inputColorSpace !== null && (r.colorSpace = t.inputColorSpace);
      const z = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      x += `${e3}MainImage(color0, UV, `, r.attributes & dt.DEPTH && z.test(s) && (x += "depth, ", r.readDepth = true), x += `color1);
	`;
      const Q = e3 + "BlendOpacity";
      r.uniforms.set(Q, W.opacity), x += `color0 = blend${W.blendFunction}(color0, color1, ${Q});

	`, f += `uniform float ${Q};

`;
    }
    if (f += s + `
`, n !== null && (w += n + `
`), h.set(se.FRAGMENT_HEAD, f), h.set(se.FRAGMENT_MAIN_UV, A), h.set(se.FRAGMENT_MAIN_IMAGE, x), h.set(se.VERTEX_HEAD, w), h.set(se.VERTEX_MAIN_SUPPORT, D), t.extensions !== null) for (const z of t.extensions) r.extensions.add(z);
  }
}
var wc = class extends Ge {
  constructor(e3, ...t) {
    super("EffectPass"), this.fullscreenMaterial = new xc(null, null, null, e3), this.listener = (r) => this.handleEvent(r), this.effects = [], this.setEffects(t), this.skipRendering = false, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
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
    const e3 = new $a();
    let t = 0;
    for (const o of this.effects) if (o.blendMode.blendFunction === $.DST) e3.attributes |= o.getAttributes() & dt.DEPTH;
    else {
      if (e3.attributes & o.getAttributes() & dt.CONVOLUTION) throw new Error(`Convolution effects cannot be merged (${o.name})`);
      Ec("e" + t++, o, e3);
    }
    let r = e3.shaderParts.get(se.FRAGMENT_HEAD), s = e3.shaderParts.get(se.FRAGMENT_MAIN_IMAGE), n = e3.shaderParts.get(se.FRAGMENT_MAIN_UV);
    const a = /\bblend\b/g;
    for (const o of e3.blendModes.values()) r += o.getShaderCode().replace(a, `blend${o.blendFunction}`) + `
`;
    e3.attributes & dt.DEPTH ? (e3.readDepth && (s = `float depth = readDepth(UV);

	` + s), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = false, e3.colorSpace === Te && (s += `color0 = sRGBToLinear(color0);
	`), e3.uvTransformation ? (n = `vec2 transformedUv = vUv;
` + n, e3.defines.set("UV", "transformedUv")) : e3.defines.set("UV", "vUv"), e3.shaderParts.set(se.FRAGMENT_HEAD, r), e3.shaderParts.set(se.FRAGMENT_MAIN_IMAGE, s), e3.shaderParts.set(se.FRAGMENT_MAIN_UV, n);
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
  setDepthTexture(e3, t = Tt) {
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
    this.updateMaterial(), r !== void 0 && r !== st && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
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
}, Mc = class extends Ge {
  constructor(e3, t, { renderTarget: r, resolutionScale: s = 1, width: n = Ue.AUTO_SIZE, height: a = Ue.AUTO_SIZE, resolutionX: o = n, resolutionY: u = a } = {}) {
    super("NormalPass"), this.needsSwap = false, this.renderPass = new Hn(e3, t, new Ui());
    const h = this.renderPass;
    h.ignoreBackground = true, h.skipShadowMapUpdate = true;
    const f = h.getClearPass();
    f.overrideClearColor = new zr(7829503), f.overrideClearAlpha = 1, this.renderTarget = r, this.renderTarget === void 0 && (this.renderTarget = new ke(1, 1, { minFilter: zt, magFilter: zt }), this.renderTarget.texture.name = "NormalPass.Target");
    const A = this.resolution = new Ue(this, o, u, s);
    A.addEventListener("change", (x) => this.setSize(A.baseWidth, A.baseHeight));
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
function or(e3, t, r) {
  return t in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
new we();
new we();
function zn(e3, t) {
  if (!(e3 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var Ze = function e(t, r, s) {
  var n = this;
  zn(this, e), or(this, "dot2", function(a, o) {
    return n.x * a + n.y * o;
  }), or(this, "dot3", function(a, o, u) {
    return n.x * a + n.y * o + n.z * u;
  }), this.x = t, this.y = r, this.z = s;
}, Cc = [new Ze(1, 1, 0), new Ze(-1, 1, 0), new Ze(1, -1, 0), new Ze(-1, -1, 0), new Ze(1, 0, 1), new Ze(-1, 0, 1), new Ze(1, 0, -1), new Ze(-1, 0, -1), new Ze(0, 1, 1), new Ze(0, -1, 1), new Ze(0, 1, -1), new Ze(0, -1, -1)], ks = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], Qs = new Array(512), js = new Array(512), Dc = function(t) {
  t > 0 && t < 1 && (t *= 65536), t = Math.floor(t), t < 256 && (t |= t << 8);
  for (var r = 0; r < 256; r++) {
    var s;
    r & 1 ? s = ks[r] ^ t & 255 : s = ks[r] ^ t >> 8 & 255, Qs[r] = Qs[r + 256] = s, js[r] = js[r + 256] = Cc[s % 12];
  }
};
Dc(0);
function Bc(e3) {
  if (typeof e3 == "number") e3 = Math.abs(e3);
  else if (typeof e3 == "string") {
    var t = e3;
    e3 = 0;
    for (var r = 0; r < t.length; r++) e3 = (e3 + (r + 1) * (t.charCodeAt(r) % 96)) % 2147483647;
  }
  return e3 === 0 && (e3 = 311), e3;
}
function Ys(e3) {
  var t = Bc(e3);
  return function() {
    var r = t * 48271 % 2147483647;
    return t = r, r / 2147483647;
  };
}
var Sc = function e2(t) {
  var r = this;
  zn(this, e2), or(this, "seed", 0), or(this, "init", function(s) {
    r.seed = s, r.value = Ys(s);
  }), or(this, "value", Ys(this.seed)), this.init(t);
};
new Sc(Math.random());
const Ic = m.createContext(null), Ws = (e3) => (e3.getAttributes() & 2) === 2, Tc = m.memo(m.forwardRef(({ children: e3, camera: t, scene: r, resolutionScale: s, enabled: n = true, renderPriority: a = 1, autoClear: o = true, depthBuffer: u, enableNormalPass: h, stencilBuffer: f, multisampling: A = 8, frameBufferType: x = We }, w) => {
  const { gl: D, scene: L, camera: V, size: k } = pt(), W = r || L, z = t || V, [Q, re, J] = m.useMemo(() => {
    const E = new qa(D, { depthBuffer: u, stencilBuffer: f, multisampling: A, frameBufferType: x });
    E.addPass(new Hn(W, z));
    let R = null, b = null;
    return h && (b = new Mc(W, z), b.enabled = false, E.addPass(b), s !== void 0 && (R = new gc({ normalBuffer: b.texture, resolutionScale: s }), R.enabled = false, E.addPass(R))), [E, b, R];
  }, [z, D, u, f, A, x, W, h, s]);
  m.useEffect(() => Q == null ? void 0 : Q.setSize(k.width, k.height), [Q, k]), ye((E, R) => {
    if (n) {
      const b = D.autoClear;
      D.autoClear = o, f && !o && D.clearStencil(), Q.render(R), D.autoClear = b;
    }
  }, n ? a : 0);
  const X = m.useRef(null);
  m.useLayoutEffect(() => {
    var _a2;
    const E = [], R = X.current.__r3f;
    if (R && Q) {
      const b = R.children;
      for (let O = 0; O < b.length; O++) {
        const F = b[O].object;
        if (F instanceof kt) {
          const _ = [F];
          if (!Ws(F)) {
            let j = null;
            for (; (j = (_a2 = b[O + 1]) == null ? void 0 : _a2.object) instanceof kt && !Ws(j); ) _.push(j), O++;
          }
          const U = new wc(z, ..._);
          E.push(U);
        } else F instanceof Ge && E.push(F);
      }
      for (const O of E) Q == null ? void 0 : Q.addPass(O);
      re && (re.enabled = true), J && (J.enabled = true);
    }
    return () => {
      for (const b of E) Q == null ? void 0 : Q.removePass(b);
      re && (re.enabled = false), J && (J.enabled = false);
    };
  }, [Q, e3, z, re, J]), m.useEffect(() => {
    const E = D.toneMapping;
    return D.toneMapping = Ni, () => {
      D.toneMapping = E;
    };
  }, [D]);
  const ie = m.useMemo(() => ({ composer: Q, normalPass: re, downSamplingPass: J, resolutionScale: s, camera: z, scene: W }), [Q, re, J, s, z, W]);
  return m.useImperativeHandle(w, () => Q, [Q]), l.jsx(Ic.Provider, { value: ie, children: l.jsx("group", { ref: X, children: e3 }) });
}));
let yc = 0;
const Vs = /* @__PURE__ */ new WeakMap(), Rc = (e3, t) => function({ blendFunction: r = t == null ? void 0 : t.blendFunction, opacity: s = t == null ? void 0 : t.opacity, ...n }) {
  let a = Vs.get(e3);
  if (!a) {
    const h = `@react-three/postprocessing/${e3.name}-${yc++}`;
    vn({ [h]: e3 }), Vs.set(e3, a = h);
  }
  const o = pt((h) => h.camera), u = hi.useMemo(() => [...(t == null ? void 0 : t.args) ?? [], ...n.args ?? [{ ...t, ...n }]], [JSON.stringify(n)]);
  return l.jsx(a, { camera: o, "blendMode-blendFunction": r, "blendMode-opacity-value": s, ...n, args: u });
}, bc = Rc(uc), Zr = 64;
function Pc() {
  return l.jsxs("group", { children: [l.jsx(Fc, {}), l.jsx(Oc, {}), l.jsx(_s, { rotation: Math.PI / 4, height: 30, length: cs * 2.1 }), l.jsx(_s, { rotation: -Math.PI / 4, height: 37, length: cs * 2.1 }), l.jsx(Uc, {}), l.jsx(Lc, {})] });
}
function Oc() {
  const e3 = m.useMemo(() => Array.from({ length: Zr }).map((t, r) => {
    const s = r / Zr * Math.PI * 2, n = Math.PI * ct / Zr + 0.35;
    return { angle: s, half: n };
  }), []);
  return l.jsx(ft, { type: "fixed", colliders: false, friction: 1, children: e3.map(({ angle: t, half: r }, s) => l.jsxs("group", { position: [Math.cos(t) * ct, Et, Math.sin(t) * ct], rotation: [0, -t, 0], children: [l.jsx(Ot, { args: [Mt / 2, 0.35, r], position: [0, -0.35, 0] }), [-1, 1].map((n) => l.jsx(Ot, { args: [0.35, 0.55, r], position: [n * Mt / 2, 0.2, 0] }, n))] }, s)) });
}
function Fc() {
  return l.jsxs("group", { position: [0, Et, 0], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], receiveShadow: true, children: [l.jsx("ringGeometry", { args: [ct - Mt / 2, ct + Mt / 2, 128] }), l.jsx("meshStandardMaterial", { color: G.deck, roughness: 0.45, metalness: 0.6, side: et })] }), [-Mt / 2, Mt / 2].map((e3, t) => l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.16, 0], children: [l.jsx("ringGeometry", { args: [ct + e3 - 0.2, ct + e3 + 0.2, 128] }), l.jsx("meshStandardMaterial", { color: t ? G.magenta : G.cyan, emissive: t ? G.magenta : G.cyan, emissiveIntensity: 3.4, toneMapped: false, side: et })] }, e3)), l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -0.45, 0], children: [l.jsx("ringGeometry", { args: [ct - 1.6, ct + 1.6, 96] }), l.jsx("meshStandardMaterial", { color: G.cyan, emissive: G.cyan, emissiveIntensity: 1.1, toneMapped: false, side: et })] })] });
}
function _s({ rotation: e3, height: t, length: r }) {
  return l.jsxs("group", { position: [0, t, 0], rotation: [0, e3, 0], children: [l.jsxs("mesh", { receiveShadow: true, castShadow: true, children: [l.jsx("boxGeometry", { args: [Mt, 0.5, r] }), l.jsx("meshStandardMaterial", { color: G.deck, roughness: 0.45, metalness: 0.6, flatShading: true })] }), [-1, 1].map((s) => l.jsxs("mesh", { position: [s * Mt / 2, 0.3, 0], children: [l.jsx("boxGeometry", { args: [0.22, 0.22, r] }), l.jsx("meshStandardMaterial", { color: s > 0 ? G.magenta : G.cyan, emissive: s > 0 ? G.magenta : G.cyan, emissiveIntensity: 3.6, toneMapped: false })] }, s)), Array.from({ length: Math.floor(r / 12) }).map((s, n) => l.jsxs("mesh", { position: [0, 0.28, -r / 2 + 6 + n * 12], children: [l.jsx("boxGeometry", { args: [0.5, 0.1, 4] }), l.jsx("meshStandardMaterial", { color: G.lime, emissive: G.lime, emissiveIntensity: 2.2, toneMapped: false })] }, n)), l.jsx(Gc, { length: r })] });
}
function Uc() {
  const e3 = zi;
  return l.jsxs("group", { children: [l.jsxs(Bt, { limit: e3.length, castShadow: true, children: [l.jsx("cylinderGeometry", { args: [0.7, 1.3, Et, 6] }), l.jsx("meshStandardMaterial", { color: G.deckEdge, roughness: 0.6, metalness: 0.4, flatShading: true }), e3.map(([t, r], s) => l.jsx(St, { position: [t, Et / 2, r] }, s))] }), l.jsx(ft, { type: "fixed", colliders: false, children: e3.map(([t, r], s) => l.jsx(En, { args: [Et / 2, 1.2], position: [t, Et / 2, r] }, s)) }), l.jsxs(Bt, { limit: e3.length, children: [l.jsx("torusGeometry", { args: [1.5, 0.16, 6, 16] }), l.jsx("meshStandardMaterial", { color: G.cyan, emissive: G.cyan, emissiveIntensity: 2.8, toneMapped: false }), e3.map(([t, r], s) => l.jsx(St, { position: [t, Et - 2.4, r], rotation: [Math.PI / 2, 0, 0] }, s))] })] });
}
const kn = l.jsx("boxGeometry", { args: [0.5, 0.3, 4.5] });
function Lc() {
  const e3 = m.useRef(null), t = m.useMemo(() => Array.from({ length: 14 }).map((r, s) => ({ angle: s / 14 * Math.PI * 2, direction: s % 2 ? 1 : -1, offset: s % 2 ? 1.9 : -1.9, speed: 0.055 + s % 5 * 0.012, color: s % 2 ? G.magenta : G.cyan })), []);
  return ye((r, s) => {
    e3.current && e3.current.children.forEach((n, a) => {
      const o = t[a];
      o.angle += s * o.speed * o.direction;
      const u = ct + o.offset;
      n.position.set(Math.cos(o.angle) * u, Et + 0.4, Math.sin(o.angle) * u), n.rotation.y = -o.angle + Math.PI / 2;
    });
  }), l.jsx("group", { ref: e3, children: t.map((r, s) => l.jsxs("mesh", { children: [kn, l.jsx("meshStandardMaterial", { color: r.color, emissive: r.color, emissiveIntensity: 6, toneMapped: false })] }, s)) });
}
function Gc({ length: e3 }) {
  const t = m.useRef(null), r = m.useMemo(() => Array.from({ length: 6 }).map((s, n) => ({ t: n / 6 * e3, direction: n % 2 ? 1 : -1, offset: n % 2 ? 1.9 : -1.9, speed: 26 + n % 3 * 9, color: n % 2 ? G.magenta : G.cyan })), [e3]);
  return ye((s, n) => {
    t.current && t.current.children.forEach((a, o) => {
      const u = r[o];
      u.t = (u.t + n * u.speed + e3) % e3, a.position.set(u.offset, 0.45, u.direction > 0 ? u.t - e3 / 2 : e3 / 2 - u.t);
    });
  }), l.jsx("group", { ref: t, children: r.map((s, n) => l.jsxs("mesh", { children: [kn, l.jsx("meshStandardMaterial", { color: s.color, emissive: s.color, emissiveIntensity: 6, toneMapped: false })] }, n)) });
}
const Xs = { A: "01110 10001 10001 11111 10001 10001 10001", B: "11110 10001 10001 11110 10001 10001 11110", C: "01111 10000 10000 10000 10000 10000 01111", D: "11110 10001 10001 10001 10001 10001 11110", E: "11111 10000 10000 11110 10000 10000 11111", F: "11111 10000 10000 11110 10000 10000 10000", G: "01111 10000 10000 10111 10001 10001 01111", H: "10001 10001 10001 11111 10001 10001 10001", I: "11111 00100 00100 00100 00100 00100 11111", J: "00111 00010 00010 00010 00010 10010 01100", K: "10001 10010 10100 11000 10100 10010 10001", L: "10000 10000 10000 10000 10000 10000 11111", M: "10001 11011 10101 10101 10001 10001 10001", N: "10001 11001 10101 10011 10001 10001 10001", O: "01110 10001 10001 10001 10001 10001 01110", P: "11110 10001 10001 11110 10000 10000 10000", Q: "01110 10001 10001 10001 10101 10010 01101", R: "11110 10001 10001 11110 10100 10010 10001", S: "01111 10000 10000 01110 00001 00001 11110", T: "11111 00100 00100 00100 00100 00100 00100", U: "10001 10001 10001 10001 10001 10001 01110", V: "10001 10001 10001 10001 10001 01010 00100", W: "10001 10001 10001 10101 10101 11011 10001", X: "10001 10001 01010 00100 01010 10001 10001", Y: "10001 10001 01010 00100 00100 00100 00100", Z: "11111 00001 00010 00100 01000 10000 11111", 0: "01110 10001 10011 10101 11001 10001 01110", 1: "00100 01100 00100 00100 00100 00100 01110", 2: "01110 10001 00001 00010 00100 01000 11111", 3: "11110 00001 00001 01110 00001 00001 11110", 4: "00010 00110 01010 10010 11111 00010 00010", 5: "11111 10000 11110 00001 00001 10001 01110", 6: "00110 01000 10000 11110 10001 10001 01110", 7: "11111 00001 00010 00100 01000 01000 01000", 8: "01110 10001 10001 01110 10001 10001 01110", 9: "01110 10001 10001 01111 00001 00010 01100", "!": "00100 00100 00100 00100 00100 00000 00100", "?": "01110 10001 00001 00110 00100 00000 00100", ".": "00000 00000 00000 00000 00000 01100 01100", "'": "00100 00100 00000 00000 00000 00000 00000", "&": "01100 10010 10010 01100 10101 10010 01101", "-": "00000 00000 00000 11111 00000 00000 00000", "/": "00001 00010 00010 00100 01000 01000 10000", " ": "00000 00000 00000 00000 00000 00000 00000" }, Jr = 5, qr = 7, Ks = 1;
function Hc(e3) {
  const t = e3.toUpperCase().split(""), r = t.length * Jr + Math.max(0, t.length - 1) * Ks, s = [];
  return t.forEach((n, a) => {
    const o = (Xs[n] ?? Xs["?"]).split(" "), u = a * (Jr + Ks);
    o.forEach((h, f) => {
      for (let A = 0; A < Jr; A += 1) h[A] === "1" && s.push({ x: u + A - (r - 1) / 2, y: qr - 1 - f - (qr - 1) / 2 });
    });
  }), { cubes: s, width: r, height: qr };
}
const Dr = new wn();
function Dt({ children: e3, position: t = [0, 0, 0], rotation: r = [0, 0, 0], size: s = 1, depth: n = 1, color: a = "#ffffff", emissive: o = "#000000", emissiveIntensity: u = 0, wave: h = 0 }) {
  const f = m.useRef(null), { cubes: A } = m.useMemo(() => Hc(e3), [e3]), x = (w) => {
    f.current && (A.forEach((D, L) => {
      const V = h ? Math.sin(w * 1.6 + D.x * 0.35) * h : 0;
      Dr.position.set(D.x * s, D.y * s + V, 0), Dr.scale.setScalar(1), Dr.updateMatrix(), f.current.setMatrixAt(L, Dr.matrix);
    }), f.current.instanceMatrix.needsUpdate = true);
  };
  return m.useLayoutEffect(() => x(0)), ye(({ clock: w }) => {
    h && x(w.elapsedTime);
  }), l.jsxs("instancedMesh", { ref: f, args: [void 0, void 0, A.length], position: t, rotation: r, castShadow: true, receiveShadow: true, children: [l.jsx("boxGeometry", { args: [s * 0.96, s * 0.96, n] }), l.jsx("meshStandardMaterial", { color: a, emissive: o, emissiveIntensity: u, roughness: 0.35, metalness: 0.1, flatShading: true })] });
}
const Pr = [0.4, 0.8, 1.2, 1.6].map((e3) => Math.PI * e3), Qn = (e3) => Ft(e3), $r = 9, Nc = 16, ue = { running: false, checkpoint: 0, time: 0, armed: true }, Zs = (e3) => Qn(e3), Br = (e3, t, r, s) => {
  const n = e3 - r.x, a = t - r.z;
  return n * n + a * a < s * s;
};
function zc(e3, t, r, s) {
  const n = Zs(0);
  if (ue.running) {
    ue.time += r;
    const a = Pr[ue.checkpoint];
    a !== void 0 && Br(e3, t, Zs(a), $r) && (ue.checkpoint += 1), ue.checkpoint >= Pr.length && Br(e3, t, n, $r) && (s.finishLap(ue.time), ue.running = false, ue.checkpoint = 0, ue.time = 0, ue.armed = false), (Math.hypot(e3, t) < 100 || y.y < 16) && (ue.running = false, ue.checkpoint = 0, ue.time = 0);
  } else ue.armed && Br(e3, t, n, $r) && (ue.running = true, ue.checkpoint = 0, ue.time = 0, s.startLap(), ki(), ue.armed = false);
  !ue.armed && !Br(e3, t, n, Nc) && (ue.armed = true), y.raceRunning = ue.running, y.raceTime = ue.time, y.raceCheckpoint = ue.checkpoint, y.raceTotal = Pr.length;
}
function kc() {
  ue.running = false, ue.checkpoint = 0, ue.time = 0, ue.armed = true;
}
const ut = 15, Qc = 180, jc = 180, Yc = 5.2, Js = 0.34, jn = 0.11;
function Wc(e3) {
  return Math.abs((e3 - ms + Math.PI) % (Math.PI * 2) - Math.PI) < jn;
}
function qs(e3) {
  const t = [];
  for (let n = 0; n <= e3; n += 1) {
    const a = n / e3 * Math.PI * 2, o = Ft(a);
    t.push(new pe(o.x, o.y, o.z));
  }
  const r = [], s = [];
  for (let n = 0; n < e3; n += 1) {
    const a = t[n + 1].clone().sub(t[n]);
    r.push(Math.atan2(a.x, a.z)), s.push(a.length());
  }
  return Array.from({ length: e3 }, (n, a) => {
    const o = t[a], u = t[a + 1], h = u.clone().sub(o), f = Math.hypot(h.x, h.z);
    let x = r[(a + 1) % e3] - r[a];
    x = (x + Math.PI) % (Math.PI * 2) - Math.PI;
    const w = x / Math.max(s[a], 1e-3);
    return { position: o.clone().lerp(u, 0.5), yaw: r[a], pitch: -Math.atan2(h.y, f), roll: Pe.clamp(w * Yc, -Js, Js), length: h.length() + 0.6, angle: a / e3 * Math.PI * 2 };
  });
}
function Vc(e3) {
  const t = e3.map((r) => {
    const s = new br(r.pitch, r.yaw, r.roll, "YXZ"), n = new It().setFromEuler(s);
    return { position: r.position.clone(), forward: new pe(0, 0, 1).applyQuaternion(n), right: new pe(1, 0, 0).applyQuaternion(n), up: new pe(0, 1, 0).applyQuaternion(n) };
  });
  return t.push(t[0]), t;
}
function _c() {
  m.useMemo(() => qs(jc), []);
  const e3 = m.useMemo(() => Vc(qs(Qc)), []);
  return l.jsxs("group", { children: [l.jsx(Xc, { frames: e3 }), l.jsx(Zc, { frames: e3 }), l.jsx(Jc, { frames: e3 }), l.jsx(tl, {}), l.jsx(el, { frames: e3 }), l.jsx(rl, {}), l.jsx(sl, {}), l.jsx(nl, {})] });
}
function es(e3, t, r = true) {
  const s = [], n = (u, h, f) => {
    s.push(u.position.x + u.right.x * h + u.up.x * f, u.position.y + u.right.y * h + u.up.y * f, u.position.z + u.right.z * h + u.up.z * f);
  }, a = e3.length;
  for (let u = 0; u < t.length - 1; u += 1) {
    const h = t[u], f = t[u + 1];
    for (let A = 0; A < (r ? a : a - 1); A += 1) {
      const [x, w] = e3[A], [D, L] = e3[(A + 1) % a];
      n(h, x, w), n(f, x, w), n(f, D, L), n(h, x, w), n(f, D, L), n(h, D, L);
    }
  }
  const o = new pr();
  return o.setAttribute("position", new As(s, 3)), o.computeVertexNormals(), o;
}
const Oe = ut / 2, Yn = (() => {
  const e3 = new pr(), t = (r, s, n, a, o, u) => [r, 0, s, n, 0, a, o, 0, u];
  return e3.setAttribute("position", new As([...t(-1.7, 0.1, 1.7, 0.1, 0, 2.4), ...t(-0.7, -2.2, 0.7, -2.2, 0.7, 0.1), ...t(-0.7, -2.2, 0.7, 0.1, -0.7, 0.1)], 3)), e3.computeVertexNormals(), e3;
})();
function Xc({ frames: e3 }) {
  const t = m.useMemo(() => es([[-Oe, 0], [Oe, 0], [Oe, -0.5], [-Oe, -0.5]], e3), [e3]), r = m.useMemo(() => {
    const s = (A) => [[A * Oe - 0.18, 0], [A * Oe + 0.18, 0], [A * Oe + 0.18, 0.9], [A * Oe - 0.18, 0.9]], n = e3.length - 1, a = Math.round(ms / (Math.PI * 2) * n), o = Math.ceil(jn / (Math.PI * 2 / n)), u = (a + o) % n, h = (a - o + n) % n, f = [...e3.slice(u, n), ...e3.slice(0, h + 1)];
    return [es(s(-1), f), es(s(1), e3)];
  }, [e3]);
  return l.jsxs("group", { children: [l.jsx("mesh", { geometry: t, receiveShadow: true, children: l.jsx("meshStandardMaterial", { color: "#242a5c", emissive: "#2b3370", emissiveIntensity: 0.55, roughness: 0.55, metalness: 0.4, flatShading: true }) }), r.map((s, n) => l.jsx("mesh", { geometry: s, children: l.jsx("meshStandardMaterial", { color: n ? G.amber : G.cyan, emissive: n ? G.amber : G.cyan, emissiveIntensity: 3, toneMapped: false }) }, n)), l.jsx(Kc, { frames: e3 })] });
}
function Kc({ frames: e3 }) {
  const t = m.useMemo(() => {
    const s = [], n = new us();
    for (let a = 0; a < e3.length - 1; a += 3) {
      const o = e3[a], u = o.forward;
      n.makeBasis(o.right, o.up, u);
      const h = new It().setFromRotationMatrix(n);
      for (const f of [-1, 1]) s.push({ position: o.position.clone().addScaledVector(o.right, f * (Oe - 1.1)).addScaledVector(o.up, 0.3), quaternion: h });
    }
    return s;
  }, [e3]), r = m.useMemo(() => {
    const s = [], n = new us();
    for (let a = 0; a < e3.length - 1; a += 5) {
      const o = e3[a];
      n.makeBasis(o.right, o.up, o.forward), s.push({ position: o.position.clone().addScaledVector(o.up, 0.3), quaternion: new It().setFromRotationMatrix(n) });
    }
    return s;
  }, [e3]);
  return l.jsxs("group", { children: [l.jsxs(Bt, { limit: t.length, range: t.length, children: [l.jsx("boxGeometry", { args: [0.5, 0.1, 0.5] }), l.jsx("meshStandardMaterial", { color: "#f2f5ff", emissive: "#cfe4ff", emissiveIntensity: 2.2, toneMapped: false }), t.map((s, n) => l.jsx(St, { position: s.position, quaternion: s.quaternion }, n))] }), l.jsxs(Bt, { limit: r.length, range: r.length, children: [l.jsx("primitive", { object: Yn, attach: "geometry" }), l.jsx("meshStandardMaterial", { color: G.lime, emissive: G.lime, emissiveIntensity: 1.6, toneMapped: false, side: et }), r.map((s, n) => l.jsx(St, { position: s.position, quaternion: s.quaternion }, n))] })] });
}
function $s(e3, t, r, s, n, a) {
  const o = new Float32Array(24);
  let u = 0;
  for (const h of [e3, t]) for (const [f, A] of [[r, n], [s, n], [s, a], [r, a]]) o[u++] = h.position.x + h.right.x * f + h.up.x * A, o[u++] = h.position.y + h.right.y * f + h.up.y * A, o[u++] = h.position.z + h.right.z * f + h.up.z * A;
  return o;
}
function Zc({ frames: e3 }) {
  const t = m.useMemo(() => {
    const r = [];
    for (let s = 0; s + 1 < e3.length; s += 1) {
      const n = e3[s], a = e3[s + 1], o = s / (e3.length - 1) * Math.PI * 2, u = [];
      if (s % 3 === 0 && s + 3 < e3.length) {
        const h = e3[s + 3];
        for (const f of [-1, 1]) f < 0 && Wc(o) || u.push({ side: f, points: $s(n, h, f * Oe - 0.4, f * Oe + 0.4, 1.9, 0) });
      }
      r.push({ road: $s(n, a, -Oe, Oe, 0, -3.5), walls: u });
    }
    return r;
  }, [e3]);
  return l.jsx(ft, { type: "fixed", colliders: false, friction: 1, children: t.map((r, s) => l.jsxs("group", { children: [l.jsx(ls, { args: [r.road] }), r.walls.map((n) => l.jsx(ls, { args: [n.points] }, n.side))] }, s)) });
}
function Jc({ frames: e3 }) {
  const t = m.useMemo(() => e3.filter((r, s) => s % 12 === 0).map((r, s) => ({ base: r.position.clone().addScaledVector(r.right, (s % 2 ? 1 : -1) * (Oe + 2.4)) })).filter((r) => Math.hypot(r.base.x, r.base.z) > cs + 6), [e3]);
  return l.jsxs("group", { children: [l.jsxs(Bt, { limit: t.length, range: t.length, children: [l.jsx("cylinderGeometry", { args: [0.7, 1.5, 1, 6] }), l.jsx("meshStandardMaterial", { color: G.deckEdge, roughness: 0.6, flatShading: true }), t.map((r, s) => l.jsx(St, { position: [r.base.x, r.base.y / 2 - 5, r.base.z], scale: [1, r.base.y + 10, 1] }, s))] }), l.jsxs(Bt, { limit: t.length, range: t.length, children: [l.jsx("octahedronGeometry", { args: [0.65, 0] }), l.jsx("meshStandardMaterial", { color: "#dfe9ff", emissive: "#bcd4ff", emissiveIntensity: 2.4, toneMapped: false }), t.map((r, s) => l.jsx(St, { position: [r.base.x, r.base.y + 4.2, r.base.z] }, s))] })] });
}
const cr = 3.6, lr = 14, ur = 7.2, qc = (() => {
  const e3 = cr, t = lr, r = ur, s = [[-e3, 0, -t / 2], [e3, 0, -t / 2], [e3, r, t / 2], [-e3, r, t / 2], [-e3, 0, t / 2], [e3, 0, t / 2]], n = (u, h, f) => [...s[u], ...s[h], ...s[f]], a = new Float32Array([...n(0, 1, 2), ...n(0, 2, 3), ...n(4, 5, 1), ...n(4, 1, 0), ...n(5, 2, 1), ...n(4, 0, 3), ...n(4, 3, 5), ...n(3, 2, 5), ...n(3, 5, 4)]), o = new pr();
  return o.setAttribute("position", new As(a, 3)), o.computeVertexNormals(), o;
})(), $c = (() => {
  const e3 = cr, t = lr, r = ur;
  return new Float32Array([-e3, 0, -t / 2, e3, 0, -t / 2, -e3, 0, t / 2, e3, 0, t / 2, -e3, r, t / 2, e3, r, t / 2]);
})();
function el({ frames: e3 }) {
  const t = m.useMemo(() => Qi.map((r, s) => {
    const n = e3.length - 1, a = Math.round(r / (Math.PI * 2) * n) % n, o = e3[a], u = s % 2 ? 1 : -1, h = new us().makeBasis(o.right, o.up, o.forward);
    return { position: o.position.clone().addScaledVector(o.right, u * (Oe - cr)).addScaledVector(o.up, 0.02), quaternion: new It().setFromRotationMatrix(h) };
  }), [e3]);
  return l.jsx("group", { children: t.map((r, s) => l.jsxs("group", { position: r.position, quaternion: r.quaternion, children: [l.jsx("mesh", { geometry: qc, castShadow: true, receiveShadow: true, children: l.jsx("meshStandardMaterial", { color: "#33306e", emissive: G.lime, emissiveIntensity: 0.28, roughness: 0.5, metalness: 0.35, flatShading: true }) }), l.jsxs("mesh", { position: [0, ur + 0.06, lr / 2], children: [l.jsx("boxGeometry", { args: [cr * 2, 0.14, 0.3] }), l.jsx("meshStandardMaterial", { color: G.lime, emissive: G.lime, emissiveIntensity: 3, toneMapped: false })] }), [-1, 1].map((n) => l.jsxs("mesh", { position: [n * cr, ur / 2 - 0.1, 0], rotation: [Math.atan2(ur, lr), 0, 0], children: [l.jsx("boxGeometry", { args: [0.12, 0.12, lr] }), l.jsx("meshStandardMaterial", { color: G.amber, emissive: G.amber, emissiveIntensity: 2.6, toneMapped: false })] }, n)), l.jsx(ft, { type: "fixed", colliders: false, friction: 1, children: l.jsx(ls, { args: [$c] }) })] }, s)) });
}
function tl() {
  const e3 = ms, t = ji(e3), r = Math.cos(e3), s = Math.sin(e3), n = t.radius - Oe + 2 - Os, a = t.height, o = Math.atan2(a, n), u = Math.hypot(a, n), h = 16, f = 0.3 / Math.cos(o), A = u + h, x = Os + n / 2 - h / 2 * Math.cos(o), w = a / 2 - f - h / 2 * Math.sin(o);
  return l.jsxs("group", { position: [r * x, w, s * x], rotation: [0, -e3 + Math.PI / 2, 0], children: [l.jsxs("group", { rotation: [-o, 0, 0], children: [l.jsxs("mesh", { receiveShadow: true, castShadow: true, children: [l.jsx("boxGeometry", { args: [ut, 0.6, A] }), l.jsx("meshStandardMaterial", { color: G.deck, roughness: 0.5, metalness: 0.5, flatShading: true })] }), [-1, 1].map((D) => l.jsxs("mesh", { position: [D * ut / 2, 0.5, 0], children: [l.jsx("boxGeometry", { args: [0.32, 0.5, A] }), l.jsx("meshStandardMaterial", { color: D > 0 ? G.amber : G.cyan, emissive: D > 0 ? G.amber : G.cyan, emissiveIntensity: 3.2, toneMapped: false })] }, D)), Array.from({ length: Math.floor(A / 8) }).map((D, L) => l.jsxs("mesh", { position: [0, 0.34, -A / 2 + 5 + L * 8], children: [l.jsx("boxGeometry", { args: [3.6, 0.08, 0.8] }), l.jsx("meshStandardMaterial", { color: G.lime, emissive: G.lime, emissiveIntensity: 2, toneMapped: false })] }, L)), l.jsxs(ft, { type: "fixed", colliders: false, friction: 1, children: [l.jsx(Ot, { args: [ut / 2, 0.3, A / 2] }), [-1, 1].map((D) => l.jsx(Ot, { args: [0.32, 0.8, A / 2], position: [D * ut / 2, 0.8, 0] }, D))] })] }), Array.from({ length: 5 }).map((D, L) => {
    const V = (L + 1) / 6, k = -A / 2 + A * V, W = -w + Math.sin(o) * k * 0.5;
    return l.jsxs("mesh", { position: [0, W / 2 + w / 2 - 2, k * Math.cos(o)], children: [l.jsx("cylinderGeometry", { args: [0.7, 1.4, Math.max(w + Math.sin(o) * k, 2), 6] }), l.jsx("meshStandardMaterial", { color: G.deckEdge, roughness: 0.65, flatShading: true })] }, L);
  })] });
}
function rl() {
  const e3 = Ft(0), t = Ft(0.02), r = Math.atan2(t.x - e3.x, t.z - e3.z);
  return l.jsxs("group", { position: [e3.x, e3.y, e3.z], rotation: [0, r, 0], children: [[-1, 1].map((s) => l.jsxs("mesh", { position: [s * ut / 2, 5, 0], castShadow: true, children: [l.jsx("boxGeometry", { args: [1.1, 10, 1.1] }), l.jsx("meshStandardMaterial", { color: G.deckEdge, roughness: 0.5, metalness: 0.5, flatShading: true })] }, s)), [8.4, 9.6].map((s) => l.jsxs("mesh", { position: [0, s, 0], children: [l.jsx("boxGeometry", { args: [ut + 1.6, 0.5, 0.6] }), l.jsx("meshStandardMaterial", { color: G.lime, emissive: G.lime, emissiveIntensity: 0.55 })] }, s)), Array.from({ length: 10 }).map((s, n) => [0, 1].map((a) => l.jsxs("mesh", { position: [-ut / 2 + 0.75 + n * 1.5, 0.3, a * 1.5 - 0.75], children: [l.jsx("boxGeometry", { args: [1.5, 0.08, 1.5] }), l.jsx("meshStandardMaterial", { color: (n + a) % 2 ? "#f2f5ff" : "#141634", emissive: (n + a) % 2 ? "#f2f5ff" : "#000000", emissiveIntensity: (n + a) % 2 ? 0.5 : 0 })] }, `${n}-${a}`))), l.jsx(Dt, { position: [0, 11.6, -0.6], rotation: [0, Math.PI / 2, 0], size: 0.5, depth: 0.4, color: "#eaf3ff", emissive: G.lime, emissiveIntensity: 1.1, children: "START" }), l.jsx(Dt, { position: [0, 11.6, 0.6], rotation: [0, -Math.PI / 2, 0], size: 0.5, depth: 0.4, color: "#eaf3ff", emissive: G.amber, emissiveIntensity: 1.1, children: "FINISH" }), l.jsx("mesh", { geometry: Yn, position: [0, 0.34, 8], scale: [2, 1, 2], children: l.jsx("meshStandardMaterial", { color: G.lime, emissive: G.lime, emissiveIntensity: 2.6, toneMapped: false, side: et }) }), l.jsx("pointLight", { position: [0, 7, 0], color: G.lime, intensity: 26, distance: 38, decay: 2 })] });
}
function sl() {
  const e3 = m.useRef(null);
  return ye(({ clock: t }) => {
    e3.current && e3.current.children.forEach((r, s) => {
      const n = r.children[0];
      if (!n) return;
      const a = n.material, o = y.raceCheckpoint === s && y.raceRunning;
      a.emissiveIntensity = o ? 2.6 + Math.sin(t.elapsedTime * 6) * 1.2 : y.raceRunning ? 0.4 : 1.2;
    });
  }), l.jsx("group", { ref: e3, children: Pr.map((t, r) => {
    const s = Qn(t), n = Ft(t + 0.02), a = Math.atan2(n.x - s.x, n.z - s.z);
    return l.jsxs("group", { position: [s.x, s.y, s.z], rotation: [0, a, 0], children: [l.jsxs("mesh", { position: [0, 4, 0], children: [l.jsx("boxGeometry", { args: [ut, 0.5, 0.5] }), l.jsx("meshStandardMaterial", { color: G.magenta, emissive: G.magenta, emissiveIntensity: 1.2, toneMapped: false })] }), [-1, 1].map((o) => l.jsxs("mesh", { position: [o * ut / 2, 2, 0], children: [l.jsx("boxGeometry", { args: [0.4, 4, 0.4] }), l.jsx("meshStandardMaterial", { color: G.deckEdge, roughness: 0.6, flatShading: true })] }, o)), l.jsx(Dt, { position: [0, 5.4, 0], rotation: [0, Math.PI / 2, 0], size: 0.34, depth: 0.3, color: "#f6e6ff", emissive: G.magenta, emissiveIntensity: 1, children: String(r + 1) })] }, r);
  }) });
}
function nl() {
  const e3 = m.useRef(false), t = Gr((r) => r.circuitMode);
  return ye((r, s) => {
    const a = Math.hypot(y.x, y.z) > 105 && y.y > 17;
    a !== e3.current && (e3.current = a, a ? rt.askCircuitMode() : (rt.leaveCircuit(), kc())), t === "race" && zc(y.x, y.z, s, rt);
  }), null;
}
const en = 70, sr = 120, tn = (() => {
  const t = document.createElement("canvas");
  t.width = 64, t.height = 64;
  const r = t.getContext("2d"), s = r.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
  s.addColorStop(0, "rgba(255,255,255,0.9)"), s.addColorStop(0.45, "rgba(255,255,255,0.35)"), s.addColorStop(1, "rgba(255,255,255,0)"), r.fillStyle = s, r.fillRect(0, 0, 64, 64);
  const n = new Mn(t);
  return n.needsUpdate = true, n;
})(), Wn = (e3) => ({ positions: new Float32Array(e3 * 3).fill(9999), life: new Float32Array(e3), sizes: new Float32Array(e3), next: 0 });
function Vn(e3, t, r, s, n) {
  const a = e3.next % (e3.life.length || 1);
  e3.next += 1, e3.positions[a * 3] = t, e3.positions[a * 3 + 1] = r, e3.positions[a * 3 + 2] = s, e3.life[a] = 1, e3.sizes[a] = n;
}
function il() {
  return l.jsxs("group", { children: [l.jsx(al, {}), l.jsx(ol, {})] });
}
function al() {
  const e3 = m.useRef(null), t = m.useMemo(() => Wn(en), []), r = m.useMemo(() => {
    const s = new pr();
    return s.setAttribute("position", new Lr(t.positions, 3)), s.setAttribute("size", new Lr(t.sizes, 1)), s;
  }, [t]);
  return ye((s, n) => {
    const a = y.driftActive && y.speed > 6;
    a && Vn(t, y.x + (Math.random() - 0.5) * 1.1, y.y - 0.5, y.z + (Math.random() - 0.5) * 1.1, 1.4 + Math.random() * 1.6);
    for (let o = 0; o < en; o += 1) t.life[o] <= 0 || (t.life[o] -= n * 0.85, t.positions[o * 3 + 1] += n * 1.4, t.sizes[o] += n * 2.2, t.life[o] <= 0 && (t.positions[o * 3 + 1] = 9999));
    if (r.attributes.position.needsUpdate = true, r.attributes.size.needsUpdate = true, e3.current) {
      const o = e3.current.material;
      o.opacity = a ? 0.34 : 0.2;
    }
  }), l.jsx("points", { ref: e3, geometry: r, frustumCulled: false, children: l.jsx("pointsMaterial", { size: 5.5, map: tn, alphaMap: tn, color: "#c9cff2", transparent: true, opacity: 0.28, depthWrite: false, sizeAttenuation: true, toneMapped: false }) });
}
function ol() {
  const e3 = m.useRef(null), t = m.useMemo(() => Wn(sr), []), r = m.useMemo(() => new wn(), []), s = m.useMemo(() => new Float32Array(sr), []);
  return ye((n, a) => {
    if (e3.current) {
      if (y.driftActive && y.speed > 6) {
        const o = t.next % sr;
        s[o] = y.heading, Vn(t, y.x, y.y - 0.72, y.z, 1);
      }
      for (let o = 0; o < sr; o += 1) {
        const u = t.life[o] > 0;
        u && (t.life[o] -= a * 0.12), r.position.set(t.positions[o * 3], t.positions[o * 3 + 1], t.positions[o * 3 + 2]), r.rotation.set(-Math.PI / 2, 0, -s[o]), r.scale.setScalar(u ? 1 : 1e-4), r.updateMatrix(), e3.current.setMatrixAt(o, r.matrix);
      }
      e3.current.instanceMatrix.needsUpdate = true;
    }
  }), l.jsxs("instancedMesh", { ref: e3, args: [void 0, void 0, sr], frustumCulled: false, children: [l.jsx("planeGeometry", { args: [2, 1.1] }), l.jsx("meshBasicMaterial", { color: "#0a0a16", transparent: true, opacity: 0.38, depthWrite: false })] });
}
const Sr = 340, Hr = 520, cl = 150;
function ll() {
  const e3 = Yi(5150);
  return Array.from({ length: cl }, () => {
    const t = e3() * Math.PI * 2, r = Sr + e3() * (Hr - Sr), s = 1 - (r - Sr) / (Hr - Sr), n = 26 + e3() * 90 * (0.4 + s), a = 12 + e3() * 22;
    return { position: [Math.cos(t) * r, n / 2, Math.sin(t) * r], scale: [a, n, a * (0.7 + e3() * 0.6)], rotation: e3() * Math.PI, lit: e3() > 0.55 };
  });
}
function ul() {
  const e3 = m.useMemo(ll, []), t = e3.filter((s) => !s.lit), r = e3.filter((s) => s.lit);
  return l.jsxs("group", { children: [l.jsxs(Bt, { limit: t.length, range: t.length, children: [l.jsx("boxGeometry", { args: [1, 1, 1] }), l.jsx("meshStandardMaterial", { color: "#16183a", roughness: 0.9, flatShading: true }), t.map((s, n) => l.jsx(St, { position: s.position, scale: s.scale, rotation: [0, s.rotation, 0] }, n))] }), l.jsxs(Bt, { limit: r.length, range: r.length, children: [l.jsx("boxGeometry", { args: [1, 1, 1] }), l.jsx("meshStandardMaterial", { color: "#1d2150", emissive: G.cyan, emissiveIntensity: 0.35, roughness: 0.7, flatShading: true }), r.map((s, n) => l.jsx(St, { position: s.position, scale: s.scale, rotation: [0, s.rotation, 0] }, n))] }), l.jsxs("mesh", { position: [0, 26, 0], rotation: [0, 0, 0], children: [l.jsx("cylinderGeometry", { args: [Hr + 40, Hr + 40, 90, 48, 1, true] }), l.jsx("meshBasicMaterial", { color: "#2a1c5c", side: nr, transparent: true, opacity: 0.42, depthWrite: false })] })] });
}
const ts = (() => {
  const t = document.createElement("canvas");
  t.width = 512, t.height = 512;
  const r = t.getContext("2d");
  for (let n = 0; n < 260; n += 1) {
    const a = Math.random() * 512, o = Math.random() * 512, u = 0.6 + Math.random() * 1.8, h = r.createRadialGradient(a, o, 0, a, o, u * 3);
    h.addColorStop(0, `rgba(200,225,255,${0.35 + Math.random() * 0.4})`), h.addColorStop(1, "rgba(200,225,255,0)"), r.fillStyle = h, r.fillRect(a - u * 3, o - u * 3, u * 6, u * 6);
  }
  const s = new Mn(t);
  return s.wrapS = s.wrapT = Wi, s.repeat.set(6, 6), s;
})();
function dl() {
  return l.jsx("group", { children: l.jsx(hl, {}) });
}
function hl() {
  const e3 = m.useRef(null);
  return ye(({ clock: t }) => {
    if (e3.current) {
      const r = e3.current.material;
      ts.offset.x = t.elapsedTime * 4e-3, ts.offset.y = Math.sin(t.elapsedTime * 0.05) * 0.02, r.opacity = 0.5 + Math.sin(t.elapsedTime * 0.4) * 0.12;
    }
  }), l.jsxs("group", { position: [0, -8.5, 0], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], children: [l.jsx("circleGeometry", { args: [900, 64] }), l.jsx("meshBasicMaterial", { color: "#0a1230" })] }), l.jsxs("mesh", { ref: e3, rotation: [-Math.PI / 2, 0, 0], position: [0, 0.3, 0], children: [l.jsx("circleGeometry", { args: [900, 64] }), l.jsx("meshBasicMaterial", { map: ts, transparent: true, opacity: 0.3, depthWrite: false, blending: An, toneMapped: false })] })] });
}
function fl() {
  const e3 = m.useRef(null);
  return ye(() => {
    const t = e3.current;
    if (!t) return;
    const r = y.raceRunning && Vi() ? _i(y.raceTime) : null;
    if (!r) {
      t.visible = false;
      return;
    }
    t.visible = true, t.position.set(r.x, r.y, r.z), t.rotation.y = r.h;
  }), l.jsxs("group", { ref: e3, visible: false, children: [l.jsxs("mesh", { position: [0, 0.02, 0], children: [l.jsx("boxGeometry", { args: [1.96, 0.44, 4] }), l.jsx("meshBasicMaterial", { color: G.cyan, transparent: true, opacity: 0.2, depthWrite: false, toneMapped: false })] }), l.jsxs("mesh", { position: [0, 0.42, -0.16], children: [l.jsx("boxGeometry", { args: [1.32, 0.46, 1.9] }), l.jsx("meshBasicMaterial", { color: G.cyan, transparent: true, opacity: 0.16, depthWrite: false, toneMapped: false })] }), [-1, 1].map((t) => l.jsxs("mesh", { position: [t, 0.06, 0.1], children: [l.jsx("boxGeometry", { args: [0.08, 0.12, 3.6] }), l.jsx("meshBasicMaterial", { color: G.cyan, transparent: true, opacity: 0.75, toneMapped: false })] }, t))] });
}
const gl = 62, rn = 0.22, pl = 34, vl = 58, Al = 1.6, ir = 30, sn = 44, ml = 96, xl = 2.6, El = 1.45, nn = 0.9, wl = 0.22, gs = 100, Ml = 33, Cl = 34, Dl = 22, Bl = 12, Sl = 16, Il = 2.2, an = 0.5, Tl = 0.22, yl = 14, Rl = 0.35, bl = 85, on = 7.5, Pl = 55, Ol = 13, Fl = 7, Ul = 11.5, Ll = 3.4, Gl = 5.4;
function Hl(e3, t, r) {
  const s = Math.min(Math.abs(e3) / t, 1), n = rn + (1 - rn) * (1 - s * s);
  return (r ? ml : gl) * n;
}
function Nl() {
  const { bloom: e3, aberration: t, vignette: r } = m.useMemo(() => ({ bloom: new Jo({ intensity: 1, luminanceThreshold: 0.82, luminanceSmoothing: 0.2, mipmapBlur: true, radius: 0.6, kernelSize: Qr.LARGE }), aberration: new ec({ offset: new we(0, 0), radialModulation: false, modulationOffset: 0 }), vignette: new vc({ offset: 0.3, darkness: 0.75 }) }), []), s = m.useMemo(() => ({ pace: 0, boost: 0 }), []);
  return ye((n, a) => {
    const o = Math.min(Math.abs(y.speed) / ir, 1.4), u = y.boosting ? 1 : 0, h = 1 - Math.pow(4e-3, a);
    s.pace = Pe.lerp(s.pace, o, h), s.boost = Pe.lerp(s.boost, u, h);
    const { pace: f, boost: A } = s, x = f * 8e-4 + A * 16e-4;
    t.offset.set(x, x * 0.6), r.darkness = 0.7 + f * 0.22 + A * 0.16, e3.intensity = 1.15 + f * 0.2 + A * 0.7;
  }), l.jsxs(l.Fragment, { children: [l.jsx("primitive", { object: e3 }), l.jsx("primitive", { object: t }), l.jsx("primitive", { object: r })] });
}
function zl({ zone: e3 }) {
  const [t, r] = e3.position, s = Gr((A) => A.activeZone === e3.id), n = Gr((A) => A.visited.includes(e3.id)), a = m.useRef(null), o = m.useRef(null), u = m.useRef(null), h = m.useMemo(() => Math.atan2(-t, -r), [t, r]), f = m.useMemo(() => Array.from({ length: 10 }).map((A, x) => {
    const w = x / 10 * Math.PI * 2 + Math.PI / 10;
    return [Math.cos(w) * (e3.radius + 4), Math.sin(w) * (e3.radius + 4)];
  }), [e3.radius]);
  return ye(({ clock: A }) => {
    const x = A.elapsedTime;
    a.current && (a.current.position.y = 16 + Math.sin(x * 0.9) * 0.5, a.current.rotation.y = h + Math.sin(x * 0.4) * 0.05);
    const w = s ? 1.5 + Math.sin(x * 4) * 0.35 : 1;
    if (o.current) {
      const D = o.current.material;
      D.opacity = 0.1 * w + (n ? 0.05 : 0);
    }
    u.current && (u.current.intensity = 52 * w);
  }), l.jsxs(l.Fragment, { children: [l.jsxs(ft, { type: "fixed", colliders: false, position: [t, 0, r], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.05, 0], receiveShadow: true, children: [l.jsx("circleGeometry", { args: [e3.radius + 6, 56] }), l.jsx("meshStandardMaterial", { color: "#4a4688", roughness: 0.85 })] }), l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.07, 0], receiveShadow: true, children: [l.jsx("ringGeometry", { args: [e3.radius - 1.2, e3.radius, 56] }), l.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.glow, emissiveIntensity: s ? 2.6 : 1.7, toneMapped: false })] }), f.map(([A, x], w) => l.jsx(En, { args: [3.5, 0.8], position: [A, 3.5, x] }, w))] }), l.jsxs("group", { position: [t, 0, r], children: [f.map(([A, x], w) => l.jsxs("group", { position: [A, 0, x], children: [l.jsxs("mesh", { castShadow: true, receiveShadow: true, position: [0, 3.4, 0], children: [l.jsx("boxGeometry", { args: [1.5, 6.8, 1.5] }), l.jsx("meshStandardMaterial", { color: "#37336b", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 7.2, 0], children: [l.jsx("octahedronGeometry", { args: [0.85, 0] }), l.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.color, emissiveIntensity: 3.2, toneMapped: false })] })] }, w)), l.jsxs("mesh", { ref: o, position: [0, 22, 0], children: [l.jsx("cylinderGeometry", { args: [e3.radius - 2, e3.radius + 1, 44, 24, 1, true] }), l.jsx("meshBasicMaterial", { color: e3.glow, transparent: true, opacity: 0.12, side: et, depthWrite: false, toneMapped: false })] }), l.jsx("pointLight", { ref: u, position: [0, 12, 0], color: e3.color, distance: 70, decay: 2 }), l.jsx("group", { ref: a, children: l.jsx(Dt, { size: 0.95, depth: 1.2, color: e3.glow, emissive: e3.color, emissiveIntensity: s ? 2.2 : 1.1, wave: 0.25, children: e3.sign }) })] })] });
}
function kl({ position: e3 }) {
  const t = m.useMemo(() => {
    const r = [];
    for (let s = 0; s < 4; s += 1) for (let n = 0; n <= s; n += 1) r.push([e3[0] + (n - s / 2) * 2.4, 1.4, e3[1] + s * 2.2 - 3]);
    return r;
  }, [e3]);
  return l.jsx(l.Fragment, { children: t.map((r, s) => l.jsx(Ql, { position: r }, s)) });
}
function Ql({ position: e3 }) {
  const t = m.useRef(null), r = m.useRef(new pe(...e3));
  return ye(() => {
    const s = t.current;
    if (!s) return;
    const n = s.translation();
    (n.y < -6 || new pe(n.x, 0, n.z).distanceTo(new pe(r.current.x, 0, r.current.z)) > 40) && (s.setTranslation({ x: r.current.x, y: r.current.y + 6, z: r.current.z }, true), s.setLinvel({ x: 0, y: 0, z: 0 }, true), s.setAngvel({ x: 0, y: 0, z: 0 }, true));
  }), l.jsxs(ft, { ref: t, position: e3, colliders: false, mass: 0.4, restitution: 0.35, linearDamping: 0.4, angularDamping: 0.6, children: [l.jsx(Ot, { args: [0.45, 1.3, 0.45] }), l.jsxs("mesh", { castShadow: true, position: [0, -1.15, 0], children: [l.jsx("boxGeometry", { args: [1.1, 0.3, 1.1] }), l.jsx("meshStandardMaterial", { color: "#3a3468", roughness: 0.6, flatShading: true })] }), l.jsxs("mesh", { castShadow: true, position: [0, -0.5, 0], children: [l.jsx("cylinderGeometry", { args: [0.16, 0.24, 1, 6] }), l.jsx("meshStandardMaterial", { color: "#ffc861", metalness: 0.8, roughness: 0.25, flatShading: true })] }), l.jsxs("mesh", { castShadow: true, position: [0, 0.45, 0], children: [l.jsx("cylinderGeometry", { args: [0.62, 0.3, 1.2, 8] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ff9d2e", emissiveIntensity: 0.9, metalness: 0.85, roughness: 0.2, flatShading: true })] }), [-0.72, 0.72].map((s) => l.jsxs("mesh", { position: [s, 0.5, 0], rotation: [0, 0, s > 0 ? -0.5 : 0.5], children: [l.jsx("torusGeometry", { args: [0.3, 0.08, 6, 10, Math.PI] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", metalness: 0.85, roughness: 0.2 })] }, s))] });
}
function rs({ position: e3, rotation: t = 0 }) {
  return l.jsxs(ft, { type: "fixed", colliders: "hull", position: [e3[0], 0, e3[1]], rotation: [0, t, 0], children: [l.jsxs("mesh", { castShadow: true, receiveShadow: true, rotation: [-0.3, 0, 0], position: [0, 1.3, 0], children: [l.jsx("boxGeometry", { args: [9, 0.6, 12] }), l.jsx("meshStandardMaterial", { color: "#5b56a4", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 1.72, -5.4], rotation: [-0.3, 0, 0], children: [l.jsx("boxGeometry", { args: [9, 0.12, 1.2] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ffae3a", emissiveIntensity: 2.5, toneMapped: false })] })] });
}
function cn({ position: e3 }) {
  const t = m.useMemo(() => {
    const r = [];
    for (let s = 0; s < 3; s += 1) {
      const n = 3 - s;
      for (let a = 0; a < n; a += 1) r.push([e3[0] + (a - (n - 1) / 2) * 1.7, 0.85 + s * 1.6, e3[1]]);
    }
    return r;
  }, [e3]);
  return l.jsx(l.Fragment, { children: t.map((r, s) => l.jsxs(ft, { position: r, colliders: false, mass: 0.5, restitution: 0.2, children: [l.jsx(Ot, { args: [0.78, 0.78, 0.78] }), l.jsxs("mesh", { castShadow: true, receiveShadow: true, children: [l.jsx("boxGeometry", { args: [1.56, 1.56, 1.56] }), l.jsx("meshStandardMaterial", { color: "#6d5cc4", roughness: 0.65, flatShading: true })] }), l.jsxs("mesh", { children: [l.jsx("boxGeometry", { args: [1.62, 0.16, 1.62] }), l.jsx("meshStandardMaterial", { color: "#c3b4ff", emissive: "#8f7bff", emissiveIntensity: 1.4, toneMapped: false })] })] }, s)) });
}
const ps = { baseFov: 55 }, jl = 7.6, ln = 6.8, Yl = 4e-4, Wl = 0.35, Pt = Math.PI * 2, Vl = () => ({ spin: 0, flip: 0, active: false });
function _l(e3, t, r, s, n, a = true) {
  if (!t) return;
  if (s) {
    e3.active = true;
    const u = (r.spinRight ? 1 : 0) - (r.spinLeft ? 1 : 0), h = (r.flipForward ? 1 : 0) - (r.flipBack ? 1 : 0);
    e3.spin += u * jl * n, e3.flip += h * ln * n, t.rotation.y = e3.spin, t.rotation.x += h * ln * n, y.trickSpins = Math.floor(Math.abs(e3.spin) / Pt), y.trickFlips = Math.floor(Math.abs(e3.flip) / Pt), y.trickAngle = Math.abs(e3.spin) + Math.abs(e3.flip);
    return;
  }
  if (e3.active) {
    const u = Math.abs(e3.spin) / Pt, h = Math.abs(e3.flip) / Pt, f = Math.floor(u) + Math.floor(h), A = u % 1 + h % 1, w = Math.abs(un(t.rotation.y)) + Math.abs(un(t.rotation.x)) < Wl && a;
    a && (f > 0 || A > 0.25) && rt.landTrickRotation(f, A, w), e3.spin = 0, e3.flip = 0, e3.active = false, y.trickSpins = 0, y.trickFlips = 0, y.trickAngle = 0;
  }
  const o = 1 - Math.pow(Yl, n);
  t.rotation.y = Pe.lerp(t.rotation.y, 0, o), t.rotation.x = Pe.lerp(t.rotation.x, 0, o);
}
function un(e3) {
  return ((e3 + Math.PI) % Pt + Pt) % Pt - Math.PI;
}
const Ir = [0, 1.6, 11], Xl = 3.4, Kl = 7, Zl = 0.75, Jl = 1.35, ql = 0.42, $l = 7.5, eu = 0.55, tu = 0.55, ru = 0.5, su = 2.5, ot = new pe(), ss = new pe(), Tr = new pe(), ze = new pe(), Gt = new It(), ns = new pe(), is = new pe(), Se = new pe(), yr = new pe(), dn = new It(), xt = new pe(), nu = new pe(0, Gl, 0), iu = new pe(0, 1.2, 0), as = new pe();
function au(e3, { lateral: t, speed: r, delta: s }) {
  if (t > Xl && r > Kl) {
    e3.held += s, e3.lapsed = 0;
    const a = Math.min(1 + Math.floor(e3.held), 8);
    e3.chain += t * r * 0.12 * a * s, y.driftMultiplier = a, y.driftAngle = Math.min(t / 12, 1), y.driftActive = true;
  } else e3.chain > 0 ? (e3.lapsed += s, y.driftAngle = Math.max(y.driftAngle - s * 2, 0), e3.lapsed >= Zl && (rt.bankDrift(e3.chain), e3.chain = 0, e3.held = 0, e3.lapsed = 0, y.driftMultiplier = 1, y.driftActive = false)) : (y.driftActive = false, y.driftMultiplier = 1, y.driftAngle = Math.max(y.driftAngle - s * 2, 0));
  y.driftChain = e3.chain;
}
function ou(e3, { grounded: t, yaw: r, delta: s, upright: n }) {
  if (!t) {
    let a = r - e3.lastYaw;
    a = (a + Math.PI) % (Math.PI * 2) - Math.PI, e3.spin += Math.abs(a), e3.lastYaw = r, e3.time += s, e3.airborne = true, y.airTime = e3.time, y.airSpin = e3.spin, y.airborne = e3.time > 0.2;
    return;
  }
  if (e3.airborne && e3.time >= ql && n) {
    const a = Math.floor(e3.spin / (Math.PI * 2));
    rt.landTrick(e3.time, a), y.boost = Math.min(gs, y.boost + Dl);
  }
  e3.airborne = false, e3.time = 0, e3.spin = 0, e3.lastYaw = r, y.airborne = false, y.airTime = 0, y.airSpin = 0;
}
function cu({ onMove: e3 }) {
  const { world: t, rapier: r } = Xi(), s = m.useRef({ airborne: false, time: 0, spin: 0, lastYaw: 0 }), n = m.useRef(null), a = m.useRef(null), o = Ki(), u = Gr((E) => E.garage), h = Zi[u.paint] ?? Ji[0], f = m.useRef(h);
  f.current = h;
  const A = m.useRef(false), x = m.useRef(new pe()), w = m.useRef({ chain: 0, held: 0, lapsed: 0 }), D = m.useRef(false), L = m.useRef(0), V = m.useRef(0), k = m.useRef(0), W = m.useRef(0), z = m.useRef(new br(0, 0, 0, "YXZ")), Q = m.useRef(Vl()), re = m.useRef(null), J = m.useRef(qi()), X = m.useRef(false), ie = () => {
    const E = n.current;
    if (!E) return;
    if (Math.hypot(y.x, y.z) > 100 && y.y > 15) {
      const b = Ft(0.03), O = Ft(0.1), F = Math.atan2(O.x - b.x, O.z - b.z), _ = new It().setFromEuler(new br(0, F + Math.PI, 0));
      E.setTranslation({ x: b.x, y: b.y + 1.2, z: b.z }, true), E.setRotation({ x: _.x, y: _.y, z: _.z, w: _.w }, true);
    } else E.setTranslation({ x: Ir[0], y: Ir[1], z: Ir[2] }, true), E.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true);
    E.setLinvel({ x: 0, y: 0, z: 0 }, true), E.setAngvel({ x: 0, y: 0, z: 0 }, true);
  };
  return ye((E, R) => {
    var _a2;
    const b = n.current;
    if (!b) return;
    const O = Math.min(R, 1 / 20), F = ta(), _ = b.rotation();
    Gt.set(_.x, _.y, _.z, _.w), ot.set(0, 0, -1).applyQuaternion(Gt), ss.set(1, 0, 0).applyQuaternion(Gt);
    const U = b.linvel();
    Tr.set(U.x, U.y, U.z);
    const j = Tr.dot(ot), K = Tr.dot(ss), Ce = b.mass(), qe = b.translation();
    Se.set(qe.x, qe.y, qe.z);
    const je = new r.Ray({ x: Se.x, y: Se.y, z: Se.z }, { x: 0, y: -1, z: 0 }), oe = t.castRay(je, Jl, true, void 0, void 0, void 0, b) !== null;
    as.set(0, 1, 0).applyQuaternion(Gt), y.upright = as.y;
    const ae = as.y > tu, Ee = F.backward > 0 && j > Al, Me = Ee ? 0 : F.forward - F.backward, yt = y.boost > Bl || D.current && y.boost > 0, ee = oe && F.boost && Me > 0 && yt;
    D.current = ee, ee && (y.boost = Math.max(0, y.boost - Ml * O));
    const Ve = ee ? sn : ir;
    if (oe) {
      if (Ee) ze.copy(ot).multiplyScalar(-vl * Ce * O), b.applyImpulse(ze, true);
      else if (Me !== 0 && Math.abs(j) < Ve) {
        const he = Me > 0 ? Hl(j, Ve, ee) : -pl, Ie = -ot.y, nt = Me > 0 && Ie > 0 ? Ie * 30 : 0;
        ze.copy(ot).multiplyScalar((he + nt) * Ce * O), b.applyImpulse(ze, true);
      }
    }
    if (oe) {
      const he = F.brake ? nn * wl : nn;
      ze.copy(ss).multiplyScalar(-K * he * Ce), b.applyImpulse(ze, true);
    }
    if (oe && (Me === 0 || F.brake)) {
      const he = F.brake ? Me > 0 ? 0.7 : 2.4 : 0.85;
      ze.copy(ot).multiplyScalar(-j * he * Ce * O), b.applyImpulse(ze, true);
    }
    const He = F.left - F.right, Qt = Math.min(Math.abs(j) / 6, 1), jr = Me !== 0 ? Math.max(Qt, 0.4) : Qt, Ar = j < -0.4 ? -1 : 1, Yr = xl * (F.brake ? El : 1), jt = b.angvel();
    if (oe && b.setAngvel({ x: jt.x, y: He * Yr * jr * Ar, z: jt.z }, true), (F.reset || Se.y < -14) && ie(), y.x = Se.x, y.y = Se.y, y.z = Se.z, y.heading = Math.atan2(ot.x, ot.z), y.speed = Math.abs(j), rt.setSpeed(y.speed), e3 == null ? void 0 : e3(Se), au(w.current, { lateral: Math.abs(K), speed: Math.abs(j), delta: O }), y.driftActive) {
      const he = Math.min(Math.abs(K) / 9, 1) * Cl * O;
      y.boost = Math.min(gs, y.boost + he);
    }
    y.boosting = ee, y.raceRunning && ra(O, Se.x, Se.y, Se.z, y.heading);
    const Yt = L.current - Math.abs(j);
    Yt > 7 && !Ee && L.current > 9 && (rt.registerImpact(), V.current = Math.min(1, V.current + Yt / 26)), L.current = Math.abs(j), V.current = Math.max(0, V.current - O * 2.6), _l(Q.current, re.current, { spinLeft: F.spinLeft, spinRight: F.spinRight, flipForward: F.flipForward, flipBack: F.flipBack }, !oe, O, ae), ou(s.current, { grounded: oe, yaw: y.heading, delta: O, upright: ae });
    const Rt = z.current.setFromQuaternion(Gt, "YXZ").x;
    if (oe && Math.abs(Rt) > 0.02) {
      const he = b.angvel();
      b.setAngvel({ x: -Rt * $l - he.x * 0.6, y: he.y, z: he.z }, true);
    } else if (!oe && s.current.time > Tl) {
      const he = Math.asin(Pe.clamp(U.y / Math.max(Tr.length(), 4), -1, 1)), Ie = Pe.clamp(he, -an, an), nt = U.y < 0 ? 1 : 0.3, it = b.angvel();
      b.setAngvel({ x: (Ie - Rt) * Il * nt, y: it.y, z: it.z }, true);
    }
    if (!oe && U.y < 0 && (ze.set(0, -yl * Ce * O, 0), b.applyImpulse(ze, true)), oe && X.current && U.y < -6 && b.setLinvel({ x: U.x, y: U.y * Rl, z: U.z }, true), X.current = !oe, oe) for (const he of J.current) {
      const Ie = Se.x - he.x, nt = Se.z - he.z;
      if (Ie * Ie + nt * nt < on * on) {
        const it = Math.max(0, 1 - Math.abs(j) / sn);
        ze.copy(ot).multiplyScalar(bl * it * Ce * O), b.applyImpulse(ze, true), y.boost = Math.min(gs, y.boost + Pl * O);
        break;
      }
    }
    oe && Math.abs(j) > 8 && (ze.set(0, -Sl * Math.min(Math.abs(j) / ir, 1.4) * Ce * O, 0), b.applyImpulse(ze, true));
    const Wt = () => {
      const he = z.current.setFromQuaternion(Gt, "YXZ").y, Ie = new It().setFromEuler(new br(0, he, 0, "YXZ"));
      b.setRotation({ x: Ie.x, y: Ie.y, z: Ie.z, w: Ie.w }, true), b.setTranslation({ x: Se.x, y: Se.y + 0.8, z: Se.z }, true), b.setAngvel({ x: 0, y: 0, z: 0 }, true), W.current = 0;
    };
    if (oe && !ae ? (W.current += O, (F.recover || W.current > su) && Wt()) : oe && Math.abs(j) < 2 && Math.abs(Rt) > eu ? (W.current += O, (F.recover || W.current > ru + 1) && Wt()) : (W.current = 0, oe && F.recover && Math.abs(j) < 4 && Wt()), a.current) {
      const he = Pe.clamp(-He * Qt * 0.16, -0.2, 0.2), Ie = Pe.clamp(-Me * 0.05, -0.08, 0.08), nt = 1 - Math.pow(5e-4, O), it = 1 - Math.pow(2e-3, O);
      a.current.rotation.z = Pe.lerp(a.current.rotation.z, he, nt), a.current.rotation.x = Pe.lerp(a.current.rotation.x, Ie, it);
    }
    ea(o.current, { speed: j, steer: He, throttle: Me, brake: F.brake, delta: O, paint: f.current, lateral: Math.abs(K), vertical: U.y, braking: Ee, boosting: ee });
    const Vt = (_a2 = a.current) == null ? void 0 : _a2.parent;
    Vt ? (Vt.getWorldPosition(yr), Vt.getWorldQuaternion(dn), xt.set(0, 0, -1).applyQuaternion(dn)) : (yr.copy(Se), xt.copy(ot)), xt.y = 0, xt.lengthSq() < 4e-4 && xt.set(Math.sin(y.heading), 0, Math.cos(y.heading)), xt.normalize();
    const mr = Math.min(Math.abs(j) / ir, 1.35);
    ns.copy(yr).addScaledVector(xt, -Ul - mr * Ll).add(nu);
    const Ut = E.camera, xr = ps.baseFov + mr * Ol + (ee ? Fl : 0);
    Math.abs(Ut.fov - xr) > 0.01 && (Ut.fov = Pe.lerp(Ut.fov, xr, 1 - Math.pow(0.02, O)), Ut.updateProjectionMatrix()), is.copy(yr).addScaledVector(xt, oe ? 6 : 1.5).add(iu), A.current ? (E.camera.position.lerp(ns, 1 - Math.pow(22e-4, O)), x.current.lerp(is, 1 - Math.pow(6e-4, O))) : (E.camera.position.copy(ns), x.current.copy(is), A.current = true);
    const Wr = -He * Math.min(Math.abs(j) / ir, 1) * 0.09;
    if (k.current = Pe.lerp(k.current, Wr, 1 - Math.pow(0.02, O)), V.current > 1e-3) {
      const he = V.current * V.current * 1.4;
      E.camera.position.x += (Math.random() - 0.5) * he, E.camera.position.y += (Math.random() - 0.5) * he, E.camera.position.z += (Math.random() - 0.5) * he;
    }
    E.camera.lookAt(x.current), E.camera.rotateZ(k.current);
  }), l.jsxs(ft, { ref: n, position: Ir, colliders: false, mass: 1, friction: 0.6, restitution: 0.1, linearDamping: 0.35, angularDamping: 4, enabledRotations: [true, true, false], ccd: true, name: "player", children: [l.jsx(Ot, { args: [1, 0.5, 2.05], density: 2.6, friction: 0.15 }), l.jsx("group", { ref: a, children: l.jsx("group", { ref: re, children: l.jsx($i, { rig: o, paint: h, design: u.design, wheel: u.wheel }) }) })] });
}
function pu() {
  const e3 = m.useRef(null);
  m.useEffect(() => {
    rt.hydrateGarage();
  }, []);
  const t = m.useCallback((r) => {
    let s = null;
    for (const n of os) {
      const [a, o] = n.position;
      if (Math.hypot(r.x - a, r.z - o) < n.radius + 9) {
        s = n.id;
        break;
      }
    }
    s !== e3.current && (e3.current && rt.leaveZone(e3.current), s && rt.enterZone(s), e3.current = s);
  }, []);
  return l.jsxs(l.Fragment, { children: [l.jsx(lu, {}), l.jsx("color", { attach: "background", args: [qt.fog] }), l.jsx("fogExp2", { attach: "fog", args: [qt.fog, 75e-4] }), l.jsx("hemisphereLight", { args: [qt.horizon, qt.ground, 1.55] }), l.jsx("ambientLight", { intensity: 0.5, color: "#6c5fbb" }), l.jsx("directionalLight", { position: [48, 70, 28], intensity: 1.9, color: qt.moon, castShadow: true, "shadow-mapSize": [1024, 1024], "shadow-camera-near": 1, "shadow-camera-far": 220, "shadow-camera-left": -90, "shadow-camera-right": 90, "shadow-camera-top": 90, "shadow-camera-bottom": -90, "shadow-bias": -6e-4 }), l.jsx(Ya, { radius: 260, depth: 70, count: 4200, factor: 5, fade: true, speed: 0.6 }), l.jsx(ka, { preset: "night" }), l.jsx(uu, {}), l.jsx(ul, {}), l.jsx(dl, {}), l.jsxs(sa, { timeStep: 1 / 60, interpolate: true, gravity: [0, -30, 0], children: [l.jsx(na, {}), os.map((r) => l.jsx(zl, { zone: r }, r.id)), l.jsx(du, {}), l.jsx(cn, { position: [-15, 4] }), l.jsx(cn, { position: [15, 4] }), l.jsx(kl, { position: [-54, 54] }), l.jsx(rs, { position: [30, -44], rotation: 0 }), l.jsx(rs, { position: [56, 0], rotation: Math.PI / 2 }), l.jsx(rs, { position: [0, 50], rotation: Math.PI }), l.jsx(Pc, {}), l.jsx(_c, {}), l.jsx(cu, { onMove: t })] }), l.jsx(ia, {}), l.jsx(il, {}), l.jsx(fl, {}), l.jsx(hu, {}), l.jsxs(Tc, { multisampling: 0, children: [l.jsx(Nl, {}), l.jsx(bc, {})] })] });
}
function lu() {
  const e3 = pt((r) => r.camera), t = pt((r) => r.size);
  return m.useEffect(() => {
    const r = t.width / t.height, s = Pe.degToRad(78), n = 2 * Math.atan(Math.tan(s / 2) / Math.max(r, 0.3));
    ps.baseFov = Pe.clamp(Pe.radToDeg(n), 45, 82), e3.fov = ps.baseFov, e3.updateProjectionMatrix();
  }, [e3, t]), null;
}
function uu() {
  return l.jsxs("group", { position: [130, 82, -170], children: [l.jsxs("mesh", { children: [l.jsx("sphereGeometry", { args: [16, 24, 24] }), l.jsx("meshBasicMaterial", { color: "#e8e6ff", toneMapped: false })] }), l.jsxs("mesh", { children: [l.jsx("sphereGeometry", { args: [22, 20, 20] }), l.jsx("meshBasicMaterial", { color: "#8f7bff", transparent: true, opacity: 0.16, depthWrite: false })] })] });
}
function du() {
  const e3 = m.useRef(null);
  return ye(({ clock: t }) => {
    e3.current && (e3.current.position.y = 17 + Math.sin(t.elapsedTime * 0.7) * 0.6);
  }), l.jsxs("group", { children: [l.jsx("group", { ref: e3, position: [0, 17, -34], children: l.jsx(Dt, { size: 1.5, depth: 2.2, color: "#7fa4ff", emissive: "#2f5bff", emissiveIntensity: 1.5, wave: 0.35, children: fi.short }) }), l.jsx(Dt, { position: [0, 8.4, -34], size: 0.44, depth: 0.4, color: "#e8e2ff", emissive: "#9d8bff", emissiveIntensity: 0.9, children: "DRIVE ANYWHERE" }), os.map((t) => {
    const [r, s] = t.position, n = Math.hypot(r, s), a = r / n, o = s / n;
    return l.jsx(Dt, { position: [a * 19, 0.35, o * 19], rotation: [-Math.PI / 2, 0, Math.atan2(-a, -o)], size: 0.42, depth: 0.5, color: t.glow, emissive: t.color, emissiveIntensity: 2.2, children: t.sign }, t.id);
  })] });
}
function hu() {
  const e3 = [[56, 80], [80, 56]];
  return l.jsx("group", { children: gi.map((t, r) => l.jsxs("group", { position: [e3[r][0], 0, e3[r][1]], children: [l.jsxs("mesh", { position: [0, 9, 0], castShadow: true, children: [l.jsx("cylinderGeometry", { args: [0.8, 1.6, 18, 6] }), l.jsx("meshStandardMaterial", { color: "#38346d", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 19.5, 0], children: [l.jsx("icosahedronGeometry", { args: [2.3, 0] }), l.jsx("meshStandardMaterial", { color: t.color, emissive: t.color, emissiveIntensity: 4, toneMapped: false })] }), l.jsx("pointLight", { position: [0, 19.5, 0], color: t.color, intensity: 90, distance: 55, decay: 2 }), l.jsx(Dt, { position: [0, 25, 0], rotation: [0, Math.atan2(-e3[r][0], -e3[r][1]), 0], size: 0.46, depth: 0.5, color: "#ffffff", emissive: t.color, emissiveIntensity: 1.8, children: t.name })] }, t.id)) });
}
export {
  pu as default
};
