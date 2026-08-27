var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as x, j as l, e as xi, Z as ms, P as Ei, U as wi } from "./index-BbhTN0zs.js";
import { R as Ar, M as Jr, I as Mi, S as Qe, D as Je, a as mn, H as Ye, F as st, b as Ht, L as be, c as hr, d as Ci, C as Bt, e as Qr, O as xn, P as En, W as ke, U as jr, f as Di, g as Bi, h as fr, T as dt, i as Si, j as Ii, B as Ti, k as yi, l as it, m as Ri, n as bi, o as wn, p as Hs, q as Te, r as zr, V as xe, N as ft, u as vt, s as Yr, t as Oi, E as Pi, v as Fi, w as Ui, x as Pe, y as Li, z as Mn, _ as Gi, A as Ns, G as qr, J as Cn, K as Hi, Q as Y, X as Me, Y as Ni, Z as zi, $ as ki, a0 as Ds, a1 as Dn, a2 as Tt, a3 as Qt, a4 as Qi, a5 as ji, a6 as ir, a7 as Yi, a8 as Bn, a9 as zs, aa as Wi, ab as mr, ac as Wr, ad as Vi, ae as at, af as tt, ag as Ct, ah as gr, ai as Rt, aj as W, ak as _i, al as At, am as mt, an as Bs, ao as Sn, ap as jt, aq as I, ar as Xi, as as Ki, at as Zi, au as Ss, av as In, aw as Tn, ax as pt, ay as pr, az as yn, aA as Ji, aB as Vr, aC as _r, aD as rs, aE as qi, aF as $i, aG as ea, aH as Xr, aI as ta, aJ as nt, aK as Rn, aL as ra, aM as sa, aN as na, aO as ia, aP as Le, aQ as aa, aR as oa, aS as ca, aT as la, aU as yr, aV as ua, aW as da, aX as ha, aY as fa, aZ as ga, a_ as pa, a$ as $t, b0 as va, b1 as Aa, b2 as ma } from "./GamePortfolio-nUEgEp-P.js";
const bn = parseInt(Ar.replace(/\D+/g, ""));
var Ze = Uint8Array, St = Uint16Array, xs = Uint32Array, On = new Ze([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Pn = new Ze([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), xa = new Ze([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Fn = function(e3, t) {
  for (var r = new St(31), s = 0; s < 31; ++s) r[s] = t += 1 << e3[s - 1];
  for (var n = new xs(r[30]), s = 1; s < 30; ++s) for (var a = r[s]; a < r[s + 1]; ++a) n[a] = a - r[s] << 5 | s;
  return [r, n];
}, Un = Fn(On, 2), Ln = Un[0], Ea = Un[1];
Ln[28] = 258, Ea[258] = 28;
var wa = Fn(Pn, 0), Ma = wa[0], Es = new St(32768);
for (var Ae = 0; Ae < 32768; ++Ae) {
  var Et = (Ae & 43690) >>> 1 | (Ae & 21845) << 1;
  Et = (Et & 52428) >>> 2 | (Et & 13107) << 2, Et = (Et & 61680) >>> 4 | (Et & 3855) << 4, Es[Ae] = ((Et & 65280) >>> 8 | (Et & 255) << 8) >>> 1;
}
var or = function(e3, t, r) {
  for (var s = e3.length, n = 0, a = new St(t); n < s; ++n) ++a[e3[n] - 1];
  var o = new St(t);
  for (n = 0; n < t; ++n) o[n] = o[n - 1] + a[n - 1] << 1;
  var u;
  if (r) {
    u = new St(1 << t);
    var d = 15 - t;
    for (n = 0; n < s; ++n) if (e3[n]) for (var f = n << 4 | e3[n], p = t - e3[n], v = o[e3[n] - 1]++ << p, E = v | (1 << p) - 1; v <= E; ++v) u[Es[v] >>> d] = f;
  } else for (u = new St(s), n = 0; n < s; ++n) e3[n] && (u[n] = Es[o[e3[n] - 1]++] >>> 15 - e3[n]);
  return u;
}, xr = new Ze(288);
for (var Ae = 0; Ae < 144; ++Ae) xr[Ae] = 8;
for (var Ae = 144; Ae < 256; ++Ae) xr[Ae] = 9;
for (var Ae = 256; Ae < 280; ++Ae) xr[Ae] = 7;
for (var Ae = 280; Ae < 288; ++Ae) xr[Ae] = 8;
var Gn = new Ze(32);
for (var Ae = 0; Ae < 32; ++Ae) Gn[Ae] = 5;
var Ca = or(xr, 9, 1), Da = or(Gn, 5, 1), ss = function(e3) {
  for (var t = e3[0], r = 1; r < e3.length; ++r) e3[r] > t && (t = e3[r]);
  return t;
}, et = function(e3, t, r) {
  var s = t / 8 | 0;
  return (e3[s] | e3[s + 1] << 8) >> (t & 7) & r;
}, ns = function(e3, t) {
  var r = t / 8 | 0;
  return (e3[r] | e3[r + 1] << 8 | e3[r + 2] << 16) >> (t & 7);
}, Ba = function(e3) {
  return (e3 / 8 | 0) + (e3 & 7 && 1);
}, Sa = function(e3, t, r) {
  (r == null || r > e3.length) && (r = e3.length);
  var s = new (e3 instanceof St ? St : e3 instanceof xs ? xs : Ze)(r - t);
  return s.set(e3.subarray(t, r)), s;
}, Ia = function(e3, t, r) {
  var s = e3.length;
  if (!s || r && !r.l && s < 5) return t || new Ze(0);
  var n = !t || r, a = !r || r.i;
  r || (r = {}), t || (t = new Ze(s * 3));
  var o = function(ee) {
    var qe = t.length;
    if (ee > qe) {
      var Ie = new Ze(Math.max(qe * 2, ee));
      Ie.set(t), t = Ie;
    }
  }, u = r.f || 0, d = r.p || 0, f = r.b || 0, p = r.l, v = r.d, E = r.m, M = r.n, L = s * 8;
  do {
    if (!p) {
      r.f = u = et(e3, d, 1);
      var K = et(e3, d + 1, 3);
      if (d += 3, K) if (K == 1) p = Ca, v = Da, E = 9, M = 5;
      else if (K == 2) {
        var G = et(e3, d, 31) + 257, se = et(e3, d + 10, 15) + 4, X = G + et(e3, d + 5, 31) + 1;
        d += 14;
        for (var V = new Ze(X), le = new Ze(19), C = 0; C < se; ++C) le[xa[C]] = et(e3, d + C * 3, 7);
        d += se * 3;
        for (var R = ss(le), F = (1 << R) - 1, Z = or(le, R, 1), C = 0; C < X; ) {
          var b = Z[et(e3, d, F)];
          d += b & 15;
          var Q = b >>> 4;
          if (Q < 16) V[C++] = Q;
          else {
            var U = 0, O = 0;
            for (Q == 16 ? (O = 3 + et(e3, d, 3), d += 2, U = V[C - 1]) : Q == 17 ? (O = 3 + et(e3, d, 7), d += 3) : Q == 18 && (O = 11 + et(e3, d, 127), d += 7); O--; ) V[C++] = U;
          }
        }
        var J = V.subarray(0, G), k = V.subarray(G);
        E = ss(J), M = ss(k), p = or(J, E, 1), v = or(k, M, 1);
      } else throw "invalid block type";
      else {
        var Q = Ba(d) + 4, j = e3[Q - 4] | e3[Q - 3] << 8, N = Q + j;
        if (N > s) {
          if (a) throw "unexpected EOF";
          break;
        }
        n && o(f + j), t.set(e3.subarray(Q, N), f), r.b = f += j, r.p = d = N * 8;
        continue;
      }
      if (d > L) {
        if (a) throw "unexpected EOF";
        break;
      }
    }
    n && o(f + 131072);
    for (var ae = (1 << E) - 1, We = (1 << M) - 1, De = d; ; De = d) {
      var U = p[ns(e3, d) & ae], oe = U >>> 4;
      if (d += U & 15, d > L) {
        if (a) throw "unexpected EOF";
        break;
      }
      if (!U) throw "invalid length/literal";
      if (oe < 256) t[f++] = oe;
      else if (oe == 256) {
        De = d, p = null;
        break;
      } else {
        var ot = oe - 254;
        if (oe > 264) {
          var C = oe - 257, pe = On[C];
          ot = et(e3, d, (1 << pe) - 1) + Ln[C], d += pe;
        }
        var q = v[ns(e3, d) & We], He = q >>> 4;
        if (!q) throw "invalid distance";
        d += q & 15;
        var k = Ma[He];
        if (He > 3) {
          var pe = Pn[He];
          k += ns(e3, d) & (1 << pe) - 1, d += pe;
        }
        if (d > L) {
          if (a) throw "unexpected EOF";
          break;
        }
        n && o(f + 131072);
        for (var ct = f + ot; f < ct; f += 4) t[f] = t[f - k], t[f + 1] = t[f + 1 - k], t[f + 2] = t[f + 2 - k], t[f + 3] = t[f + 3 - k];
        f = ct;
      }
    }
    r.l = p, r.p = De, r.b = f, p && (u = 1, r.m = E, r.d = v, r.n = M);
  } while (!u);
  return f == t.length ? t : Sa(t, 0, f);
}, Ta = new Ze(0), ya = function(e3) {
  if ((e3[0] & 15) != 8 || e3[0] >>> 4 > 7 || (e3[0] << 8 | e3[1]) % 31) throw "invalid zlib data";
  if (e3[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
function Rr(e3, t) {
  return Ia((ya(e3), e3.subarray(2, -4)), t);
}
var Ra = typeof TextDecoder < "u" && new TextDecoder(), ba = 0;
try {
  Ra.decode(Ta, { stream: true }), ba = 1;
} catch {
}
const Oa = (e3) => e3 && e3.isCubeTexture;
class Pa extends Jr {
  constructor(t, r) {
    var s, n;
    const a = Oa(t), u = ((n = a ? (s = t.image[0]) == null ? void 0 : s.width : t.image.width) != null ? n : 1024) / 4, d = Math.floor(Math.log2(u)), f = Math.pow(2, d), p = 3 * Math.max(f, 16 * 7), v = 4 * f, E = [a ? "#define ENVMAP_TYPE_CUBE" : "", `#define CUBEUV_TEXEL_WIDTH ${1 / p}`, `#define CUBEUV_TEXEL_HEIGHT ${1 / v}`, `#define CUBEUV_MAX_MIP ${d}.0`], M = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `, L = E.join(`
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
            #include <${bn >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, K = { map: { value: t }, height: { value: (r == null ? void 0 : r.height) || 15 }, radius: { value: (r == null ? void 0 : r.radius) || 100 } }, Q = new Mi(1, 16), j = new Qe({ uniforms: K, fragmentShader: L, vertexShader: M, side: Je });
    super(Q, j);
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
class Fa extends mn {
  constructor(t) {
    super(t), this.type = Ye;
  }
  parse(t) {
    const o = function(C, R) {
      switch (C) {
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
    }, p = `
`, v = function(C, R, F) {
      R = R || 1024;
      let b = C.pos, U = -1, O = 0, J = "", k = String.fromCharCode.apply(null, new Uint16Array(C.subarray(b, b + 128)));
      for (; 0 > (U = k.indexOf(p)) && O < R && b < C.byteLength; ) J += k, O += k.length, b += 128, k += String.fromCharCode.apply(null, new Uint16Array(C.subarray(b, b + 128)));
      return -1 < U ? (C.pos += O + U + 1, J + k.slice(0, U)) : false;
    }, E = function(C) {
      const R = /^#\?(\S+)/, F = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, Z = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, b = /^\s*FORMAT=(\S+)\s*$/, U = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, O = { valid: 0, string: "", comments: "", programtype: "RGBE", format: "", gamma: 1, exposure: 1, width: 0, height: 0 };
      let J, k;
      for ((C.pos >= C.byteLength || !(J = v(C))) && o(1, "no header found"), (k = J.match(R)) || o(3, "bad initial token"), O.valid |= 1, O.programtype = k[1], O.string += J + `
`; J = v(C), J !== false; ) {
        if (O.string += J + `
`, J.charAt(0) === "#") {
          O.comments += J + `
`;
          continue;
        }
        if ((k = J.match(F)) && (O.gamma = parseFloat(k[1])), (k = J.match(Z)) && (O.exposure = parseFloat(k[1])), (k = J.match(b)) && (O.valid |= 2, O.format = k[1]), (k = J.match(U)) && (O.valid |= 4, O.height = parseInt(k[1], 10), O.width = parseInt(k[2], 10)), O.valid & 2 && O.valid & 4) break;
      }
      return O.valid & 2 || o(3, "missing format specifier"), O.valid & 4 || o(3, "missing image size specifier"), O;
    }, M = function(C, R, F) {
      const Z = R;
      if (Z < 8 || Z > 32767 || C[0] !== 2 || C[1] !== 2 || C[2] & 128) return new Uint8Array(C);
      Z !== (C[2] << 8 | C[3]) && o(3, "wrong scanline width");
      const b = new Uint8Array(4 * R * F);
      b.length || o(4, "unable to allocate buffer space");
      let U = 0, O = 0;
      const J = 4 * Z, k = new Uint8Array(4), ae = new Uint8Array(J);
      let We = F;
      for (; We > 0 && O < C.byteLength; ) {
        O + 4 > C.byteLength && o(1), k[0] = C[O++], k[1] = C[O++], k[2] = C[O++], k[3] = C[O++], (k[0] != 2 || k[1] != 2 || (k[2] << 8 | k[3]) != Z) && o(3, "bad rgbe scanline format");
        let De = 0, oe;
        for (; De < J && O < C.byteLength; ) {
          oe = C[O++];
          const pe = oe > 128;
          if (pe && (oe -= 128), (oe === 0 || De + oe > J) && o(3, "bad scanline data"), pe) {
            const q = C[O++];
            for (let He = 0; He < oe; He++) ae[De++] = q;
          } else ae.set(C.subarray(O, O + oe), De), De += oe, O += oe;
        }
        const ot = Z;
        for (let pe = 0; pe < ot; pe++) {
          let q = 0;
          b[U] = ae[pe + q], q += Z, b[U + 1] = ae[pe + q], q += Z, b[U + 2] = ae[pe + q], q += Z, b[U + 3] = ae[pe + q], U += 4;
        }
        We--;
      }
      return b;
    }, L = function(C, R, F, Z) {
      const b = C[R + 3], U = Math.pow(2, b - 128) / 255;
      F[Z + 0] = C[R + 0] * U, F[Z + 1] = C[R + 1] * U, F[Z + 2] = C[R + 2] * U, F[Z + 3] = 1;
    }, K = function(C, R, F, Z) {
      const b = C[R + 3], U = Math.pow(2, b - 128) / 255;
      F[Z + 0] = Ht.toHalfFloat(Math.min(C[R + 0] * U, 65504)), F[Z + 1] = Ht.toHalfFloat(Math.min(C[R + 1] * U, 65504)), F[Z + 2] = Ht.toHalfFloat(Math.min(C[R + 2] * U, 65504)), F[Z + 3] = Ht.toHalfFloat(1);
    }, Q = new Uint8Array(t);
    Q.pos = 0;
    const j = E(Q), N = j.width, G = j.height, se = M(Q.subarray(Q.pos), N, G);
    let X, V, le;
    switch (this.type) {
      case st:
        le = se.length / 4;
        const C = new Float32Array(le * 4);
        for (let F = 0; F < le; F++) L(se, F * 4, C, F * 4);
        X = C, V = st;
        break;
      case Ye:
        le = se.length / 4;
        const R = new Uint16Array(le * 4);
        for (let F = 0; F < le; F++) K(se, F * 4, R, F * 4);
        X = R, V = Ye;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return { width: N, height: G, data: X, header: j.string, gamma: j.gamma, exposure: j.exposure, type: V };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, s, n) {
    function a(o, u) {
      switch (o.type) {
        case st:
        case Ye:
          "colorSpace" in o ? o.colorSpace = "srgb-linear" : o.encoding = 3e3, o.minFilter = be, o.magFilter = be, o.generateMipmaps = false, o.flipY = true;
          break;
      }
      r && r(o, u);
    }
    return super.load(t, a, s, n);
  }
}
const er = bn >= 152;
class Ua extends mn {
  constructor(t) {
    super(t), this.type = Ye;
  }
  parse(t) {
    const R = Math.pow(2.7182818, 2.2);
    function F(i, c) {
      for (var h = 0, g = 0; g < 65536; ++g) (g == 0 || i[g >> 3] & 1 << (g & 7)) && (c[h++] = g);
      for (var A = h - 1; h < 65536; ) c[h++] = 0;
      return A;
    }
    function Z(i) {
      for (var c = 0; c < 16384; c++) i[c] = {}, i[c].len = 0, i[c].lit = 0, i[c].p = null;
    }
    const b = { l: 0, c: 0, lc: 0 };
    function U(i, c, h, g, A) {
      for (; h < i; ) c = c << 8 | Ls(g, A), h += 8;
      h -= i, b.l = c >> h & (1 << i) - 1, b.c = c, b.lc = h;
    }
    const O = new Array(59);
    function J(i) {
      for (var c = 0; c <= 58; ++c) O[c] = 0;
      for (var c = 0; c < 65537; ++c) O[i[c]] += 1;
      for (var h = 0, c = 58; c > 0; --c) {
        var g = h + O[c] >> 1;
        O[c] = h, h = g;
      }
      for (var c = 0; c < 65537; ++c) {
        var A = i[c];
        A > 0 && (i[c] = A | O[A]++ << 6);
      }
    }
    function k(i, c, h, g, A, m, D) {
      for (var w = h, T = 0, S = 0; A <= m; A++) {
        if (w.value - h.value > g) return false;
        U(6, T, S, i, w);
        var y = b.l;
        if (T = b.c, S = b.lc, D[A] = y, y == 63) {
          if (w.value - h.value > g) throw "Something wrong with hufUnpackEncTable";
          U(8, T, S, i, w);
          var B = b.l + 6;
          if (T = b.c, S = b.lc, A + B > m + 1) throw "Something wrong with hufUnpackEncTable";
          for (; B--; ) D[A++] = 0;
          A--;
        } else if (y >= 59) {
          var B = y - 59 + 2;
          if (A + B > m + 1) throw "Something wrong with hufUnpackEncTable";
          for (; B--; ) D[A++] = 0;
          A--;
        }
      }
      J(D);
    }
    function ae(i) {
      return i & 63;
    }
    function We(i) {
      return i >> 6;
    }
    function De(i, c, h, g) {
      for (; c <= h; c++) {
        var A = We(i[c]), m = ae(i[c]);
        if (A >> m) throw "Invalid table entry";
        if (m > 14) {
          var D = g[A >> m - 14];
          if (D.len) throw "Invalid table entry";
          if (D.lit++, D.p) {
            var w = D.p;
            D.p = new Array(D.lit);
            for (var T = 0; T < D.lit - 1; ++T) D.p[T] = w[T];
          } else D.p = new Array(1);
          D.p[D.lit - 1] = c;
        } else if (m) for (var S = 0, T = 1 << 14 - m; T > 0; T--) {
          var D = g[(A << 14 - m) + S];
          if (D.len || D.p) throw "Invalid table entry";
          D.len = m, D.lit = c, S++;
        }
      }
      return true;
    }
    const oe = { c: 0, lc: 0 };
    function ot(i, c, h, g) {
      i = i << 8 | Ls(h, g), c += 8, oe.c = i, oe.lc = c;
    }
    const pe = { c: 0, lc: 0 };
    function q(i, c, h, g, A, m, D, w, T, S) {
      if (i == c) {
        g < 8 && (ot(h, g, A, D), h = oe.c, g = oe.lc), g -= 8;
        var y = h >> g, y = new Uint8Array([y])[0];
        if (T.value + y > S) return false;
        for (var B = w[T.value - 1]; y-- > 0; ) w[T.value++] = B;
      } else if (T.value < S) w[T.value++] = i;
      else return false;
      pe.c = h, pe.lc = g;
    }
    function He(i) {
      return i & 65535;
    }
    function ct(i) {
      var c = He(i);
      return c > 32767 ? c - 65536 : c;
    }
    const ee = { a: 0, b: 0 };
    function qe(i, c) {
      var h = ct(i), g = ct(c), A = g, m = h + (A & 1) + (A >> 1), D = m, w = m - A;
      ee.a = D, ee.b = w;
    }
    function Ie(i, c) {
      var h = He(i), g = He(c), A = h - (g >> 1) & 65535, m = g + A - 32768 & 65535;
      ee.a = m, ee.b = A;
    }
    function Er(i, c, h, g, A, m, D) {
      for (var w = D < 16384, T = h > A ? A : h, S = 1, y; S <= T; ) S <<= 1;
      for (S >>= 1, y = S, S >>= 1; S >= 1; ) {
        for (var B = 0, Ee = B + m * (A - y), H = m * S, z = m * y, _ = g * S, $ = g * y, ue, fe, Be, Ue; B <= Ee; B += z) {
          for (var ge = B, lt = B + g * (h - y); ge <= lt; ge += $) {
            var ve = ge + _, Se = ge + H, gt = Se + _;
            w ? (qe(i[ge + c], i[Se + c]), ue = ee.a, Be = ee.b, qe(i[ve + c], i[gt + c]), fe = ee.a, Ue = ee.b, qe(ue, fe), i[ge + c] = ee.a, i[ve + c] = ee.b, qe(Be, Ue), i[Se + c] = ee.a, i[gt + c] = ee.b) : (Ie(i[ge + c], i[Se + c]), ue = ee.a, Be = ee.b, Ie(i[ve + c], i[gt + c]), fe = ee.a, Ue = ee.b, Ie(ue, fe), i[ge + c] = ee.a, i[ve + c] = ee.b, Ie(Be, Ue), i[Se + c] = ee.a, i[gt + c] = ee.b);
          }
          if (h & S) {
            var Se = ge + H;
            w ? qe(i[ge + c], i[Se + c]) : Ie(i[ge + c], i[Se + c]), ue = ee.a, i[Se + c] = ee.b, i[ge + c] = ue;
          }
        }
        if (A & S) for (var ge = B, lt = B + g * (h - y); ge <= lt; ge += $) {
          var ve = ge + _;
          w ? qe(i[ge + c], i[ve + c]) : Ie(i[ge + c], i[ve + c]), ue = ee.a, i[ve + c] = ee.b, i[ge + c] = ue;
        }
        y = S, S >>= 1;
      }
      return B;
    }
    function Ot(i, c, h, g, A, m, D, w, T, S) {
      for (var y = 0, B = 0, Ee = w, H = Math.trunc(A.value + (m + 7) / 8); A.value < H; ) for (ot(y, B, h, A), y = oe.c, B = oe.lc; B >= 14; ) {
        var z = y >> B - 14 & 16383, _ = c[z];
        if (_.len) B -= _.len, q(_.lit, D, y, B, h, g, A, T, S, Ee), y = pe.c, B = pe.lc;
        else {
          if (!_.p) throw "hufDecode issues";
          var $;
          for ($ = 0; $ < _.lit; $++) {
            for (var ue = ae(i[_.p[$]]); B < ue && A.value < H; ) ot(y, B, h, A), y = oe.c, B = oe.lc;
            if (B >= ue && We(i[_.p[$]]) == (y >> B - ue & (1 << ue) - 1)) {
              B -= ue, q(_.p[$], D, y, B, h, g, A, T, S, Ee), y = pe.c, B = pe.lc;
              break;
            }
          }
          if ($ == _.lit) throw "hufDecode issues";
        }
      }
      var fe = 8 - m & 7;
      for (y >>= fe, B -= fe; B > 0; ) {
        var _ = c[y << 14 - B & 16383];
        if (_.len) B -= _.len, q(_.lit, D, y, B, h, g, A, T, S, Ee), y = pe.c, B = pe.lc;
        else throw "hufDecode issues";
      }
      return true;
    }
    function Pt(i, c, h, g, A, m) {
      var D = { value: 0 }, w = h.value, T = Ne(c, h), S = Ne(c, h);
      h.value += 4;
      var y = Ne(c, h);
      if (h.value += 4, T < 0 || T >= 65537 || S < 0 || S >= 65537) throw "Something wrong with HUF_ENCSIZE";
      var B = new Array(65537), Ee = new Array(16384);
      Z(Ee);
      var H = g - (h.value - w);
      if (k(i, c, h, H, T, S, B), y > 8 * (g - (h.value - w))) throw "Something wrong with hufUncompress";
      De(B, T, S, Ee), Ot(B, Ee, i, c, h, y, S, m, A, D);
    }
    function ts(i, c, h) {
      for (var g = 0; g < h; ++g) c[g] = i[c[g]];
    }
    function wr(i) {
      for (var c = 1; c < i.length; c++) {
        var h = i[c - 1] + i[c] - 128;
        i[c] = h;
      }
    }
    function Mr(i, c) {
      for (var h = 0, g = Math.floor((i.length + 1) / 2), A = 0, m = i.length - 1; !(A > m || (c[A++] = i[h++], A > m)); ) c[A++] = i[g++];
    }
    function Wt(i) {
      for (var c = i.byteLength, h = new Array(), g = 0, A = new DataView(i); c > 0; ) {
        var m = A.getInt8(g++);
        if (m < 0) {
          var D = -m;
          c -= D + 1;
          for (var w = 0; w < D; w++) h.push(A.getUint8(g++));
        } else {
          var D = m;
          c -= 2;
          for (var T = A.getUint8(g++), w = 0; w < D + 1; w++) h.push(T);
        }
      }
      return h;
    }
    function Cr(i, c, h, g, A, m) {
      var ve = new DataView(m.buffer), D = h[i.idx[0]].width, w = h[i.idx[0]].height, T = 3, S = Math.floor(D / 8), y = Math.ceil(D / 8), B = Math.ceil(w / 8), Ee = D - (y - 1) * 8, H = w - (B - 1) * 8, z = { value: 0 }, _ = new Array(T), $ = new Array(T), ue = new Array(T), fe = new Array(T), Be = new Array(T);
      for (let de = 0; de < T; ++de) Be[de] = c[i.idx[de]], _[de] = de < 1 ? 0 : _[de - 1] + y * B, $[de] = new Float32Array(64), ue[de] = new Uint16Array(64), fe[de] = new Uint16Array(y * 64);
      for (let de = 0; de < B; ++de) {
        var Ue = 8;
        de == B - 1 && (Ue = H);
        var ge = 8;
        for (let me = 0; me < y; ++me) {
          me == y - 1 && (ge = Ee);
          for (let ce = 0; ce < T; ++ce) ue[ce].fill(0), ue[ce][0] = A[_[ce]++], Ft(z, g, ue[ce]), Vt(ue[ce], $[ce]), _t($[ce]);
          Dr($);
          for (let ce = 0; ce < T; ++ce) Ut($[ce], fe[ce], me * 64);
        }
        let Re = 0;
        for (let me = 0; me < T; ++me) {
          const ce = h[i.idx[me]].type;
          for (let Xe = 8 * de; Xe < 8 * de + Ue; ++Xe) {
            Re = Be[me][Xe];
            for (let yt = 0; yt < S; ++yt) {
              const je = yt * 64 + (Xe & 7) * 8;
              ve.setUint16(Re + 0 * 2 * ce, fe[me][je + 0], true), ve.setUint16(Re + 1 * 2 * ce, fe[me][je + 1], true), ve.setUint16(Re + 2 * 2 * ce, fe[me][je + 2], true), ve.setUint16(Re + 3 * 2 * ce, fe[me][je + 3], true), ve.setUint16(Re + 4 * 2 * ce, fe[me][je + 4], true), ve.setUint16(Re + 5 * 2 * ce, fe[me][je + 5], true), ve.setUint16(Re + 6 * 2 * ce, fe[me][je + 6], true), ve.setUint16(Re + 7 * 2 * ce, fe[me][je + 7], true), Re += 8 * 2 * ce;
            }
          }
          if (S != y) for (let Xe = 8 * de; Xe < 8 * de + Ue; ++Xe) {
            const yt = Be[me][Xe] + 8 * S * 2 * ce, je = S * 64 + (Xe & 7) * 8;
            for (let xt = 0; xt < ge; ++xt) ve.setUint16(yt + xt * 2 * ce, fe[me][je + xt], true);
          }
        }
      }
      for (var lt = new Uint16Array(D), ve = new DataView(m.buffer), Se = 0; Se < T; ++Se) {
        h[i.idx[Se]].decoded = true;
        var gt = h[i.idx[Se]].type;
        if (h[Se].type == 2) for (var qt = 0; qt < w; ++qt) {
          const de = Be[Se][qt];
          for (var _e = 0; _e < D; ++_e) lt[_e] = ve.getUint16(de + _e * 2 * gt, true);
          for (var _e = 0; _e < D; ++_e) ve.setFloat32(de + _e * 2 * gt, P(lt[_e]), true);
        }
      }
    }
    function Ft(i, c, h) {
      for (var g, A = 1; A < 64; ) g = c[i.value], g == 65280 ? A = 64 : g >> 8 == 255 ? A += g & 255 : (h[A] = g, A++), i.value++;
    }
    function Vt(i, c) {
      c[0] = P(i[0]), c[1] = P(i[1]), c[2] = P(i[5]), c[3] = P(i[6]), c[4] = P(i[14]), c[5] = P(i[15]), c[6] = P(i[27]), c[7] = P(i[28]), c[8] = P(i[2]), c[9] = P(i[4]), c[10] = P(i[7]), c[11] = P(i[13]), c[12] = P(i[16]), c[13] = P(i[26]), c[14] = P(i[29]), c[15] = P(i[42]), c[16] = P(i[3]), c[17] = P(i[8]), c[18] = P(i[12]), c[19] = P(i[17]), c[20] = P(i[25]), c[21] = P(i[30]), c[22] = P(i[41]), c[23] = P(i[43]), c[24] = P(i[9]), c[25] = P(i[11]), c[26] = P(i[18]), c[27] = P(i[24]), c[28] = P(i[31]), c[29] = P(i[40]), c[30] = P(i[44]), c[31] = P(i[53]), c[32] = P(i[10]), c[33] = P(i[19]), c[34] = P(i[23]), c[35] = P(i[32]), c[36] = P(i[39]), c[37] = P(i[45]), c[38] = P(i[52]), c[39] = P(i[54]), c[40] = P(i[20]), c[41] = P(i[22]), c[42] = P(i[33]), c[43] = P(i[38]), c[44] = P(i[46]), c[45] = P(i[51]), c[46] = P(i[55]), c[47] = P(i[60]), c[48] = P(i[21]), c[49] = P(i[34]), c[50] = P(i[37]), c[51] = P(i[47]), c[52] = P(i[50]), c[53] = P(i[56]), c[54] = P(i[59]), c[55] = P(i[61]), c[56] = P(i[35]), c[57] = P(i[36]), c[58] = P(i[48]), c[59] = P(i[49]), c[60] = P(i[57]), c[61] = P(i[58]), c[62] = P(i[62]), c[63] = P(i[63]);
    }
    function _t(i) {
      const c = 0.5 * Math.cos(0.7853975), h = 0.5 * Math.cos(3.14159 / 16), g = 0.5 * Math.cos(3.14159 / 8), A = 0.5 * Math.cos(3 * 3.14159 / 16), m = 0.5 * Math.cos(5 * 3.14159 / 16), D = 0.5 * Math.cos(3 * 3.14159 / 8), w = 0.5 * Math.cos(7 * 3.14159 / 16);
      for (var T = new Array(4), S = new Array(4), y = new Array(4), B = new Array(4), Ee = 0; Ee < 8; ++Ee) {
        var H = Ee * 8;
        T[0] = g * i[H + 2], T[1] = D * i[H + 2], T[2] = g * i[H + 6], T[3] = D * i[H + 6], S[0] = h * i[H + 1] + A * i[H + 3] + m * i[H + 5] + w * i[H + 7], S[1] = A * i[H + 1] - w * i[H + 3] - h * i[H + 5] - m * i[H + 7], S[2] = m * i[H + 1] - h * i[H + 3] + w * i[H + 5] + A * i[H + 7], S[3] = w * i[H + 1] - m * i[H + 3] + A * i[H + 5] - h * i[H + 7], y[0] = c * (i[H + 0] + i[H + 4]), y[3] = c * (i[H + 0] - i[H + 4]), y[1] = T[0] + T[3], y[2] = T[1] - T[2], B[0] = y[0] + y[1], B[1] = y[3] + y[2], B[2] = y[3] - y[2], B[3] = y[0] - y[1], i[H + 0] = B[0] + S[0], i[H + 1] = B[1] + S[1], i[H + 2] = B[2] + S[2], i[H + 3] = B[3] + S[3], i[H + 4] = B[3] - S[3], i[H + 5] = B[2] - S[2], i[H + 6] = B[1] - S[1], i[H + 7] = B[0] - S[0];
      }
      for (var z = 0; z < 8; ++z) T[0] = g * i[16 + z], T[1] = D * i[16 + z], T[2] = g * i[48 + z], T[3] = D * i[48 + z], S[0] = h * i[8 + z] + A * i[24 + z] + m * i[40 + z] + w * i[56 + z], S[1] = A * i[8 + z] - w * i[24 + z] - h * i[40 + z] - m * i[56 + z], S[2] = m * i[8 + z] - h * i[24 + z] + w * i[40 + z] + A * i[56 + z], S[3] = w * i[8 + z] - m * i[24 + z] + A * i[40 + z] - h * i[56 + z], y[0] = c * (i[z] + i[32 + z]), y[3] = c * (i[z] - i[32 + z]), y[1] = T[0] + T[3], y[2] = T[1] - T[2], B[0] = y[0] + y[1], B[1] = y[3] + y[2], B[2] = y[3] - y[2], B[3] = y[0] - y[1], i[0 + z] = B[0] + S[0], i[8 + z] = B[1] + S[1], i[16 + z] = B[2] + S[2], i[24 + z] = B[3] + S[3], i[32 + z] = B[3] - S[3], i[40 + z] = B[2] - S[2], i[48 + z] = B[1] - S[1], i[56 + z] = B[0] - S[0];
    }
    function Dr(i) {
      for (var c = 0; c < 64; ++c) {
        var h = i[0][c], g = i[1][c], A = i[2][c];
        i[0][c] = h + 1.5747 * A, i[1][c] = h - 0.1873 * g - 0.4682 * A, i[2][c] = h + 1.8556 * g;
      }
    }
    function Ut(i, c, h) {
      for (var g = 0; g < 64; ++g) c[h + g] = Ht.toHalfFloat(Br(i[g]));
    }
    function Br(i) {
      return i <= 1 ? Math.sign(i) * Math.pow(Math.abs(i), 2.2) : Math.sign(i) * Math.pow(R, Math.abs(i) - 1);
    }
    function Sr(i) {
      return new DataView(i.array.buffer, i.offset.value, i.size);
    }
    function ne(i) {
      var c = i.viewer.buffer.slice(i.offset.value, i.offset.value + i.size), h = new Uint8Array(Wt(c)), g = new Uint8Array(h.length);
      return wr(h), Mr(h, g), new DataView(g.buffer);
    }
    function Ce(i) {
      var c = i.array.slice(i.offset.value, i.offset.value + i.size), h = Rr(c), g = new Uint8Array(h.length);
      return wr(h), Mr(h, g), new DataView(g.buffer);
    }
    function Fe(i) {
      for (var c = i.viewer, h = { value: i.offset.value }, g = new Uint16Array(i.width * i.scanlineBlockSize * (i.channels * i.type)), A = new Uint8Array(8192), m = 0, D = new Array(i.channels), w = 0; w < i.channels; w++) D[w] = {}, D[w].start = m, D[w].end = D[w].start, D[w].nx = i.width, D[w].ny = i.lines, D[w].size = i.type, m += D[w].nx * D[w].ny * D[w].size;
      var T = Kt(c, h), S = Kt(c, h);
      if (S >= 8192) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (T <= S) for (var w = 0; w < S - T + 1; w++) A[w + T] = Lt(c, h);
      var y = new Uint16Array(65536), B = F(A, y), Ee = Ne(c, h);
      Pt(i.array, c, h, Ee, g, m);
      for (var w = 0; w < i.channels; ++w) for (var H = D[w], z = 0; z < D[w].size; ++z) Er(g, H.start + z, H.nx, H.size, H.ny, H.nx * H.size, B);
      ts(y, g, m);
      for (var _ = 0, $ = new Uint8Array(g.buffer.byteLength), ue = 0; ue < i.lines; ue++) for (var fe = 0; fe < i.channels; fe++) {
        var H = D[fe], Be = H.nx * H.size, Ue = new Uint8Array(g.buffer, H.end * 2, Be * 2);
        $.set(Ue, _), _ += Be * 2, H.end += Be;
      }
      return new DataView($.buffer);
    }
    function $e(i) {
      var c = i.array.slice(i.offset.value, i.offset.value + i.size), h = Rr(c);
      const g = i.lines * i.channels * i.width, A = i.type == 1 ? new Uint16Array(g) : new Uint32Array(g);
      let m = 0, D = 0;
      const w = new Array(4);
      for (let T = 0; T < i.lines; T++) for (let S = 0; S < i.channels; S++) {
        let y = 0;
        switch (i.type) {
          case 1:
            w[0] = m, w[1] = w[0] + i.width, m = w[1] + i.width;
            for (let B = 0; B < i.width; ++B) {
              const Ee = h[w[0]++] << 8 | h[w[1]++];
              y += Ee, A[D] = y, D++;
            }
            break;
          case 2:
            w[0] = m, w[1] = w[0] + i.width, w[2] = w[1] + i.width, m = w[2] + i.width;
            for (let B = 0; B < i.width; ++B) {
              const Ee = h[w[0]++] << 24 | h[w[1]++] << 16 | h[w[2]++] << 8;
              y += Ee, A[D] = y, D++;
            }
            break;
        }
      }
      return new DataView(A.buffer);
    }
    function Us(i) {
      var c = i.viewer, h = { value: i.offset.value }, g = new Uint8Array(i.width * i.lines * (i.channels * i.type * 2)), A = { version: Ve(c, h), unknownUncompressedSize: Ve(c, h), unknownCompressedSize: Ve(c, h), acCompressedSize: Ve(c, h), dcCompressedSize: Ve(c, h), rleCompressedSize: Ve(c, h), rleUncompressedSize: Ve(c, h), rleRawSize: Ve(c, h), totalAcUncompressedCount: Ve(c, h), totalDcUncompressedCount: Ve(c, h), acCompression: Ve(c, h) };
      if (A.version < 2) throw "EXRLoader.parse: " + Jt.compression + " version " + A.version + " is unsupported";
      for (var m = new Array(), D = Kt(c, h) - 2; D > 0; ) {
        var w = Ir(c.buffer, h), T = Lt(c, h), S = T >> 2 & 3, y = (T >> 4) - 1, B = new Int8Array([y])[0], Ee = Lt(c, h);
        m.push({ name: w, index: B, type: Ee, compression: S }), D -= w.length + 3;
      }
      for (var H = Jt.channels, z = new Array(i.channels), _ = 0; _ < i.channels; ++_) {
        var $ = z[_] = {}, ue = H[_];
        $.name = ue.name, $.compression = 0, $.decoded = false, $.type = ue.pixelType, $.pLinear = ue.pLinear, $.width = i.width, $.height = i.lines;
      }
      for (var fe = { idx: new Array(3) }, Be = 0; Be < i.channels; ++Be) for (var $ = z[Be], _ = 0; _ < m.length; ++_) {
        var Ue = m[_];
        $.name == Ue.name && ($.compression = Ue.compression, Ue.index >= 0 && (fe.idx[Ue.index] = Be), $.offset = Be);
      }
      if (A.acCompressedSize > 0) switch (A.acCompression) {
        case 0:
          var ve = new Uint16Array(A.totalAcUncompressedCount);
          Pt(i.array, c, h, A.acCompressedSize, ve, A.totalAcUncompressedCount);
          break;
        case 1:
          var ge = i.array.slice(h.value, h.value + A.totalAcUncompressedCount), lt = Rr(ge), ve = new Uint16Array(lt.buffer);
          h.value += A.totalAcUncompressedCount;
          break;
      }
      if (A.dcCompressedSize > 0) {
        var Se = { array: i.array, offset: h, size: A.dcCompressedSize }, gt = new Uint16Array(Ce(Se).buffer);
        h.value += A.dcCompressedSize;
      }
      if (A.rleRawSize > 0) {
        var ge = i.array.slice(h.value, h.value + A.rleCompressedSize), lt = Rr(ge), qt = Wt(lt.buffer);
        h.value += A.rleCompressedSize;
      }
      for (var _e = 0, de = new Array(z.length), _ = 0; _ < de.length; ++_) de[_] = new Array();
      for (var Re = 0; Re < i.lines; ++Re) for (var me = 0; me < z.length; ++me) de[me].push(_e), _e += z[me].width * i.type * 2;
      Cr(fe, de, z, ve, gt, g);
      for (var _ = 0; _ < z.length; ++_) {
        var $ = z[_];
        if (!$.decoded) switch ($.compression) {
          case 2:
            for (var ce = 0, Xe = 0, Re = 0; Re < i.lines; ++Re) {
              for (var yt = de[_][ce], je = 0; je < $.width; ++je) {
                for (var xt = 0; xt < 2 * $.type; ++xt) g[yt++] = qt[Xe + xt * $.width * $.height];
                Xe++;
              }
              ce++;
            }
            break;
          case 1:
          default:
            throw "EXRLoader.parse: unsupported channel compression";
        }
      }
      return new DataView(g.buffer);
    }
    function Ir(i, c) {
      for (var h = new Uint8Array(i), g = 0; h[c.value + g] != 0; ) g += 1;
      var A = new TextDecoder().decode(h.slice(c.value, c.value + g));
      return c.value = c.value + g + 1, A;
    }
    function ri(i, c, h) {
      var g = new TextDecoder().decode(new Uint8Array(i).slice(c.value, c.value + h));
      return c.value = c.value + h, g;
    }
    function si(i, c) {
      var h = Xt(i, c), g = Ne(i, c);
      return [h, g];
    }
    function ni(i, c) {
      var h = Ne(i, c), g = Ne(i, c);
      return [h, g];
    }
    function Xt(i, c) {
      var h = i.getInt32(c.value, true);
      return c.value = c.value + 4, h;
    }
    function Ne(i, c) {
      var h = i.getUint32(c.value, true);
      return c.value = c.value + 4, h;
    }
    function Ls(i, c) {
      var h = i[c.value];
      return c.value = c.value + 1, h;
    }
    function Lt(i, c) {
      var h = i.getUint8(c.value);
      return c.value = c.value + 1, h;
    }
    const Ve = function(i, c) {
      let h;
      return "getBigInt64" in DataView.prototype ? h = Number(i.getBigInt64(c.value, true)) : h = i.getUint32(c.value + 4, true) + Number(i.getUint32(c.value, true) << 32), c.value += 8, h;
    };
    function ye(i, c) {
      var h = i.getFloat32(c.value, true);
      return c.value += 4, h;
    }
    function ii(i, c) {
      return Ht.toHalfFloat(ye(i, c));
    }
    function P(i) {
      var c = (i & 31744) >> 10, h = i & 1023;
      return (i >> 15 ? -1 : 1) * (c ? c === 31 ? h ? NaN : 1 / 0 : Math.pow(2, c - 15) * (1 + h / 1024) : 6103515625e-14 * (h / 1024));
    }
    function Kt(i, c) {
      var h = i.getUint16(c.value, true);
      return c.value += 2, h;
    }
    function ai(i, c) {
      return P(Kt(i, c));
    }
    function oi(i, c, h, g) {
      for (var A = h.value, m = []; h.value < A + g - 1; ) {
        var D = Ir(c, h), w = Xt(i, h), T = Lt(i, h);
        h.value += 3;
        var S = Xt(i, h), y = Xt(i, h);
        m.push({ name: D, pixelType: w, pLinear: T, xSampling: S, ySampling: y });
      }
      return h.value += 1, m;
    }
    function ci(i, c) {
      var h = ye(i, c), g = ye(i, c), A = ye(i, c), m = ye(i, c), D = ye(i, c), w = ye(i, c), T = ye(i, c), S = ye(i, c);
      return { redX: h, redY: g, greenX: A, greenY: m, blueX: D, blueY: w, whiteX: T, whiteY: S };
    }
    function li(i, c) {
      var h = ["NO_COMPRESSION", "RLE_COMPRESSION", "ZIPS_COMPRESSION", "ZIP_COMPRESSION", "PIZ_COMPRESSION", "PXR24_COMPRESSION", "B44_COMPRESSION", "B44A_COMPRESSION", "DWAA_COMPRESSION", "DWAB_COMPRESSION"], g = Lt(i, c);
      return h[g];
    }
    function ui(i, c) {
      var h = Ne(i, c), g = Ne(i, c), A = Ne(i, c), m = Ne(i, c);
      return { xMin: h, yMin: g, xMax: A, yMax: m };
    }
    function di(i, c) {
      var h = ["INCREASING_Y"], g = Lt(i, c);
      return h[g];
    }
    function hi(i, c) {
      var h = ye(i, c), g = ye(i, c);
      return [h, g];
    }
    function fi(i, c) {
      var h = ye(i, c), g = ye(i, c), A = ye(i, c);
      return [h, g, A];
    }
    function gi(i, c, h, g, A) {
      if (g === "string" || g === "stringvector" || g === "iccProfile") return ri(c, h, A);
      if (g === "chlist") return oi(i, c, h, A);
      if (g === "chromaticities") return ci(i, h);
      if (g === "compression") return li(i, h);
      if (g === "box2i") return ui(i, h);
      if (g === "lineOrder") return di(i, h);
      if (g === "float") return ye(i, h);
      if (g === "v2f") return hi(i, h);
      if (g === "v3f") return fi(i, h);
      if (g === "int") return Xt(i, h);
      if (g === "rational") return si(i, h);
      if (g === "timecode") return ni(i, h);
      if (g === "preview") return h.value += A, "skipped";
      h.value += A;
    }
    function pi(i, c, h) {
      const g = {};
      if (i.getUint32(0, true) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      g.version = i.getUint8(4);
      const A = i.getUint8(5);
      g.spec = { singleTile: !!(A & 2), longName: !!(A & 4), deepFormat: !!(A & 8), multiPart: !!(A & 16) }, h.value = 8;
      for (var m = true; m; ) {
        var D = Ir(c, h);
        if (D == 0) m = false;
        else {
          var w = Ir(c, h), T = Ne(i, h), S = gi(i, c, h, w, T);
          S === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${w}'.`) : g[D] = S;
        }
      }
      if (A & -5) throw console.error("EXRHeader:", g), "THREE.EXRLoader: provided file is currently unsupported.";
      return g;
    }
    function vi(i, c, h, g, A) {
      const m = { size: 0, viewer: c, array: h, offset: g, width: i.dataWindow.xMax - i.dataWindow.xMin + 1, height: i.dataWindow.yMax - i.dataWindow.yMin + 1, channels: i.channels.length, bytesPerLine: null, lines: null, inputSize: null, type: i.channels[0].pixelType, uncompress: null, getter: null, format: null, [er ? "colorSpace" : "encoding"]: null };
      switch (i.compression) {
        case "NO_COMPRESSION":
          m.lines = 1, m.uncompress = Sr;
          break;
        case "RLE_COMPRESSION":
          m.lines = 1, m.uncompress = ne;
          break;
        case "ZIPS_COMPRESSION":
          m.lines = 1, m.uncompress = Ce;
          break;
        case "ZIP_COMPRESSION":
          m.lines = 16, m.uncompress = Ce;
          break;
        case "PIZ_COMPRESSION":
          m.lines = 32, m.uncompress = Fe;
          break;
        case "PXR24_COMPRESSION":
          m.lines = 16, m.uncompress = $e;
          break;
        case "DWAA_COMPRESSION":
          m.lines = 32, m.uncompress = Us;
          break;
        case "DWAB_COMPRESSION":
          m.lines = 256, m.uncompress = Us;
          break;
        default:
          throw "EXRLoader.parse: " + i.compression + " is unsupported";
      }
      if (m.scanlineBlockSize = m.lines, m.type == 1) switch (A) {
        case st:
          m.getter = ai, m.inputSize = 2;
          break;
        case Ye:
          m.getter = Kt, m.inputSize = 2;
          break;
      }
      else if (m.type == 2) switch (A) {
        case st:
          m.getter = ye, m.inputSize = 4;
          break;
        case Ye:
          m.getter = ii, m.inputSize = 4;
      }
      else throw "EXRLoader.parse: unsupported pixelType " + m.type + " for " + i.compression + ".";
      m.blockCount = (i.dataWindow.yMax + 1) / m.scanlineBlockSize;
      for (var D = 0; D < m.blockCount; D++) Ve(c, g);
      m.outputChannels = m.channels == 3 ? 4 : m.channels;
      const w = m.width * m.height * m.outputChannels;
      switch (A) {
        case st:
          m.byteArray = new Float32Array(w), m.channels < m.outputChannels && m.byteArray.fill(1, 0, w);
          break;
        case Ye:
          m.byteArray = new Uint16Array(w), m.channels < m.outputChannels && m.byteArray.fill(15360, 0, w);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", A);
          break;
      }
      return m.bytesPerLine = m.width * m.inputSize * m.channels, m.outputChannels == 4 ? m.format = hr : m.format = Ci, er ? m.colorSpace = "srgb-linear" : m.encoding = 3e3, m;
    }
    const Tr = new DataView(t), Ai = new Uint8Array(t), Zt = { value: 0 }, Jt = pi(Tr, t, Zt), re = vi(Jt, Tr, Ai, Zt, this.type), Gs = { value: 0 }, mi = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let i = 0; i < re.height / re.scanlineBlockSize; i++) {
      const c = Ne(Tr, Zt);
      re.size = Ne(Tr, Zt), re.lines = c + re.scanlineBlockSize > re.height ? re.height - c : re.scanlineBlockSize;
      const g = re.size < re.lines * re.bytesPerLine ? re.uncompress(re) : Sr(re);
      Zt.value += re.size;
      for (let A = 0; A < re.scanlineBlockSize; A++) {
        const m = A + i * re.scanlineBlockSize;
        if (m >= re.height) break;
        for (let D = 0; D < re.channels; D++) {
          const w = mi[Jt.channels[D].name];
          for (let T = 0; T < re.width; T++) {
            Gs.value = (A * (re.channels * re.width) + D * re.width + T) * re.inputSize;
            const S = (re.height - 1 - m) * (re.width * re.outputChannels) + T * re.outputChannels + w;
            re.byteArray[S] = re.getter(g, Gs);
          }
        }
      }
    }
    return { header: Jt, width: re.width, height: re.height, data: re.byteArray, format: re.format, [er ? "colorSpace" : "encoding"]: re[er ? "colorSpace" : "encoding"], type: this.type };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, s, n) {
    function a(o, u) {
      er ? o.colorSpace = u.colorSpace : o.encoding = u.encoding, o.minFilter = be, o.magFilter = be, o.generateMipmaps = false, o.flipY = false, r && r(o, u);
    }
    return super.load(t, a, s, n);
  }
}
const La = () => parseInt(Ar.replace(/\D+/g, "")), Ga = La(), Hn = (e3, t, r) => {
  let s;
  switch (e3) {
    case it:
      s = new Uint8ClampedArray(t * r * 4);
      break;
    case Ye:
      s = new Uint16Array(t * r * 4);
      break;
    case yi:
      s = new Uint32Array(t * r * 4);
      break;
    case Ti:
      s = new Int8Array(t * r * 4);
      break;
    case Ii:
      s = new Int16Array(t * r * 4);
      break;
    case Si:
      s = new Int32Array(t * r * 4);
      break;
    case st:
      s = new Float32Array(t * r * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return s;
};
let br;
const Ha = (e3, t, r, s) => {
  if (br !== void 0) return br;
  const n = new ke(1, 1, s);
  t.setRenderTarget(n);
  const a = new Jr(new En(), new Ri({ color: 16777215 }));
  t.render(a, r), t.setRenderTarget(null);
  const o = Hn(e3, n.width, n.height);
  return t.readRenderTargetPixels(n, 0, 0, n.width, n.height, o), n.dispose(), a.geometry.dispose(), a.material.dispose(), br = o[0] !== 0, br;
};
class Is {
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
    var _a2, _b, _c2, _d, _e, _f, _g, _h, _i2, _j, _k, _l2, _m, _n2, _o2, _p;
    this._width = t.width, this._height = t.height, this._type = t.type, this._colorSpace = t.colorSpace;
    const r = { format: hr, depthBuffer: false, stencilBuffer: false, type: this._type, colorSpace: this._colorSpace, anisotropy: ((_a2 = t.renderTargetOptions) == null ? void 0 : _a2.anisotropy) !== void 0 ? (_b = t.renderTargetOptions) == null ? void 0 : _b.anisotropy : 1, generateMipmaps: ((_c2 = t.renderTargetOptions) == null ? void 0 : _c2.generateMipmaps) !== void 0 ? (_d = t.renderTargetOptions) == null ? void 0 : _d.generateMipmaps : false, magFilter: ((_e = t.renderTargetOptions) == null ? void 0 : _e.magFilter) !== void 0 ? (_f = t.renderTargetOptions) == null ? void 0 : _f.magFilter : be, minFilter: ((_g = t.renderTargetOptions) == null ? void 0 : _g.minFilter) !== void 0 ? (_h = t.renderTargetOptions) == null ? void 0 : _h.minFilter : be, samples: ((_i2 = t.renderTargetOptions) == null ? void 0 : _i2.samples) !== void 0 ? (_j = t.renderTargetOptions) == null ? void 0 : _j.samples : void 0, wrapS: ((_k = t.renderTargetOptions) == null ? void 0 : _k.wrapS) !== void 0 ? (_l2 = t.renderTargetOptions) == null ? void 0 : _l2.wrapS : Bt, wrapT: ((_m = t.renderTargetOptions) == null ? void 0 : _m.wrapT) !== void 0 ? (_n2 = t.renderTargetOptions) == null ? void 0 : _n2.wrapT : Bt };
    if (this._material = t.material, t.renderer ? this._renderer = t.renderer : (this._renderer = Is.instantiateRenderer(), this._rendererIsDisposable = true), this._scene = new Qr(), this._camera = new xn(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !Ha(this._type, this._renderer, this._camera, r)) {
      let s;
      switch (this._type) {
        case Ye:
          s = this._renderer.extensions.has("EXT_color_buffer_float") ? st : void 0;
          break;
      }
      s !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${st}`), this._type = s) : (this._supportsReadPixels = false, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
    }
    this._quad = new Jr(new En(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new ke(this.width, this.height, r), this._renderTarget.texture.mapping = ((_o2 = t.renderTargetOptions) == null ? void 0 : _o2.mapping) !== void 0 ? (_p = t.renderTargetOptions) == null ? void 0 : _p.mapping : jr;
  }
  static instantiateRenderer() {
    const t = new Di();
    return t.setSize(128, 128), t;
  }
  toArray() {
    if (!this._supportsReadPixels) throw new Error("Can't read pixels in this browser");
    const t = Hn(this._type, this._width, this._height);
    return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, t), t;
  }
  toDataTexture(t) {
    const r = new Bi(this.toArray(), this.width, this.height, hr, this._type, (t == null ? void 0 : t.mapping) || jr, (t == null ? void 0 : t.wrapS) || Bt, (t == null ? void 0 : t.wrapT) || Bt, (t == null ? void 0 : t.magFilter) || be, (t == null ? void 0 : t.minFilter) || be, (t == null ? void 0 : t.anisotropy) || 1, fr);
    return r.generateMipmaps = (t == null ? void 0 : t.generateMipmaps) !== void 0 ? t == null ? void 0 : t.generateMipmaps : false, r;
  }
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
  }
  dispose(t) {
    this.disposeOnDemandRenderer(), t && this.renderTarget.dispose(), this.material instanceof Qe && Object.values(this.material.uniforms).forEach((r) => {
      r.value instanceof dt && r.value.dispose();
    }), Object.values(this.material).forEach((r) => {
      r instanceof dt && r.dispose();
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
class Nn extends Error {
}
class zn extends Error {
}
const tr = (e3, t, r) => {
  const s = new RegExp(`${t}="([^"]*)"`, "i").exec(e3);
  if (s) return s[1];
  const n = new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i").exec(e3);
  if (n) {
    const a = n[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return a && a.length === 3 ? a.map((o) => o.replace(/<\/?rdf:li>/g, "")) : n[1].trim();
  }
  if (r !== void 0) return r;
  throw new Error(`Can't find ${t} in gainmap metadata`);
}, Na = (e3) => {
  let t;
  typeof TextDecoder < "u" ? t = new TextDecoder().decode(e3) : t = e3.toString();
  let r = t.indexOf("<x:xmpmeta");
  for (; r !== -1; ) {
    const s = t.indexOf("x:xmpmeta>", r), n = t.slice(r, s + 10);
    try {
      const a = tr(n, "hdrgm:GainMapMin", "0"), o = tr(n, "hdrgm:GainMapMax"), u = tr(n, "hdrgm:Gamma", "1"), d = tr(n, "hdrgm:OffsetSDR", "0.015625"), f = tr(n, "hdrgm:OffsetHDR", "0.015625"), p = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(n), v = p ? p[1] : "0", E = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(n);
      if (!E) throw new Error("Incomplete gainmap metadata");
      const M = E[1];
      return { gainMapMin: Array.isArray(a) ? a.map((L) => parseFloat(L)) : [parseFloat(a), parseFloat(a), parseFloat(a)], gainMapMax: Array.isArray(o) ? o.map((L) => parseFloat(L)) : [parseFloat(o), parseFloat(o), parseFloat(o)], gamma: Array.isArray(u) ? u.map((L) => parseFloat(L)) : [parseFloat(u), parseFloat(u), parseFloat(u)], offsetSdr: Array.isArray(d) ? d.map((L) => parseFloat(L)) : [parseFloat(d), parseFloat(d), parseFloat(d)], offsetHdr: Array.isArray(f) ? f.map((L) => parseFloat(L)) : [parseFloat(f), parseFloat(f), parseFloat(f)], hdrCapacityMin: parseFloat(v), hdrCapacityMax: parseFloat(M) };
    } catch {
    }
    r = t.indexOf("<x:xmpmeta", s);
  }
};
class za {
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
      let u = 2, d = 0, f;
      for (; u < o; ) {
        if (++d > 250) {
          s(new Error(`Found no marker after ${d} loops \u{1F635}`));
          return;
        }
        if (a.getUint8(u) !== 255) {
          s(new Error(`Not a valid marker at offset 0x${u.toString(16)}, found: 0x${a.getUint8(u).toString(16)}`));
          return;
        }
        if (f = a.getUint8(u + 1), n && console.log(`Marker: ${f.toString(16)}`), f === 226) {
          n && console.log("Found APP2 marker (0xffe2)");
          const p = u + 4;
          if (a.getUint32(p) === 1297106432) {
            const v = p + 4;
            let E;
            if (a.getUint16(v) === 18761) E = false;
            else if (a.getUint16(v) === 19789) E = true;
            else {
              s(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (a.getUint16(v + 2, !E) !== 42) {
              s(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const M = a.getUint32(v + 4, !E);
            if (M < 8) {
              s(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const L = v + M, K = a.getUint16(L, !E), Q = L + 2;
            let j = 0;
            for (let X = Q; X < Q + 12 * K; X += 12) a.getUint16(X, !E) === 45057 && (j = a.getUint32(X + 8, !E));
            const G = L + 2 + K * 12 + 4, se = [];
            for (let X = G; X < G + j * 16; X += 16) {
              const V = { MPType: a.getUint32(X, !E), size: a.getUint32(X + 4, !E), dataOffset: a.getUint32(X + 8, !E), dependantImages: a.getUint32(X + 12, !E), start: -1, end: -1, isFII: false };
              V.dataOffset ? (V.start = v + V.dataOffset, V.isFII = false) : (V.start = 0, V.isFII = true), V.end = V.start + V.size, se.push(V);
            }
            if (this.options.extractNonFII && se.length) {
              const X = new Blob([a]), V = [];
              for (const le of se) {
                if (le.isFII && !this.options.extractFII) continue;
                const C = X.slice(le.start, le.end + 1, "image/jpeg");
                V.push(C);
              }
              r(V);
            }
          }
        }
        u += 2 + a.getUint16(u + 2);
      }
    });
  }
}
const ka = async (e3) => {
  const t = Na(e3);
  if (!t) throw new zn("Gain map XMP metadata not found");
  const s = await new za({ extractFII: true, extractNonFII: true }).extract(e3);
  if (s.length !== 2) throw new Nn("Gain map recovery image not found");
  return { sdr: new Uint8Array(await s[0].arrayBuffer()), gainMap: new Uint8Array(await s[1].arrayBuffer()), metadata: t };
}, ks = (e3) => new Promise((t, r) => {
  const s = document.createElement("img");
  s.onload = () => {
    t(s);
  }, s.onerror = (n) => {
    r(n);
  }, s.src = URL.createObjectURL(e3);
});
class Qa extends bi {
  constructor(t, r) {
    super(r);
    __publicField(this, "_renderer");
    __publicField(this, "_renderTargetOptions");
    __publicField(this, "_internalLoadingManager");
    __publicField(this, "_config");
    this._config = t, t.renderer && (this._renderer = t.renderer), this._internalLoadingManager = new wn();
  }
  setRenderer(t) {
    return this._renderer = t, this;
  }
  setRenderTargetOptions(t) {
    return this._renderTargetOptions = t, this;
  }
  prepareQuadRenderer() {
    this._renderer || console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    const t = this._config.createMaterial({ gainMapMax: [1, 1, 1], gainMapMin: [0, 0, 0], gamma: [1, 1, 1], offsetHdr: [1, 1, 1], offsetSdr: [1, 1, 1], hdrCapacityMax: 1, hdrCapacityMin: 0, maxDisplayBoost: 1, gainMap: new dt(), sdr: new dt() });
    return this._config.createQuadRenderer({ width: 16, height: 16, type: Ye, colorSpace: fr, material: t, renderer: this._renderer, renderTargetOptions: this._renderTargetOptions });
  }
  async processImages(t, r, s) {
    const n = r ? new Blob([r], { type: "image/jpeg" }) : void 0, a = new Blob([t], { type: "image/jpeg" });
    let o, u, d = false;
    if (typeof createImageBitmap > "u") {
      const f = await Promise.all([n ? ks(n) : Promise.resolve(void 0), ks(a)]);
      u = f[0], o = f[1], d = s === "flipY";
    } else {
      const f = await Promise.all([n ? createImageBitmap(n, { imageOrientation: s || "flipY" }) : Promise.resolve(void 0), createImageBitmap(a, { imageOrientation: s || "flipY" })]);
      u = f[0], o = f[1];
    }
    return { sdrImage: o, gainMapImage: u, needsFlip: d };
  }
  createTextures(t, r, s) {
    const n = new dt(r || new ImageData(2, 2), jr, Bt, Bt, be, Hs, hr, it, 1, fr);
    n.flipY = s, n.needsUpdate = true;
    const a = new dt(t, jr, Bt, Bt, be, Hs, hr, it, 1, Te);
    return a.flipY = s, a.needsUpdate = true, { gainMap: n, sdr: a };
  }
  updateQuadRenderer(t, r, s, n, a) {
    t.width = r.width, t.height = r.height, t.material.gainMap = s, t.material.sdr = n, t.material.gainMapMin = a.gainMapMin, t.material.gainMapMax = a.gainMapMax, t.material.offsetHdr = a.offsetHdr, t.material.offsetSdr = a.offsetSdr, t.material.gamma = a.gamma, t.material.hdrCapacityMin = a.hdrCapacityMin, t.material.hdrCapacityMax = a.hdrCapacityMax, t.material.maxDisplayBoost = Math.pow(2, a.hdrCapacityMax), t.material.needsUpdate = true;
  }
}
const ja = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, Ya = `
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
class Wa extends Qe {
  constructor({ gamma: t, offsetHdr: r, offsetSdr: s, gainMapMin: n, gainMapMax: a, maxDisplayBoost: o, hdrCapacityMin: u, hdrCapacityMax: d, sdr: f, gainMap: p }) {
    super({ name: "GainMapDecoderMaterial", vertexShader: ja, fragmentShader: Ya, uniforms: { sdr: { value: f }, gainMap: { value: p }, gamma: { value: new xe(1 / t[0], 1 / t[1], 1 / t[2]) }, offsetHdr: { value: new xe().fromArray(r) }, offsetSdr: { value: new xe().fromArray(s) }, gainMapMin: { value: new xe().fromArray(n) }, gainMapMax: { value: new xe().fromArray(a) }, weightFactor: { value: (Math.log2(o) - u) / (d - u) } }, blending: ft, depthTest: false, depthWrite: false });
    __publicField(this, "_maxDisplayBoost");
    __publicField(this, "_hdrCapacityMin");
    __publicField(this, "_hdrCapacityMax");
    this._maxDisplayBoost = o, this._hdrCapacityMin = u, this._hdrCapacityMax = d, this.needsUpdate = true, this.uniformsNeedUpdate = true;
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
class kn extends Qa {
  constructor(t, r) {
    super({ renderer: t, createMaterial: (s) => new Wa(s), createQuadRenderer: (s) => new Is(s) }, r);
  }
  async render(t, r, s, n) {
    const { sdrImage: a, gainMapImage: o, needsFlip: u } = await this.processImages(s, n, "flipY"), { gainMap: d, sdr: f } = this.createTextures(a, o, u);
    this.updateQuadRenderer(t, a, d, f, r), t.render();
  }
}
class Va extends kn {
  load([t, r, s], n, a, o) {
    const u = this.prepareQuadRenderer();
    let d, f, p;
    const v = async () => {
      if (d && f && p) {
        try {
          await this.render(u, p, d, f);
        } catch (R) {
          this.manager.itemError(t), this.manager.itemError(r), this.manager.itemError(s), typeof o == "function" && o(R), u.disposeOnDemandRenderer();
          return;
        }
        typeof n == "function" && n(u), this.manager.itemEnd(t), this.manager.itemEnd(r), this.manager.itemEnd(s), u.disposeOnDemandRenderer();
      }
    };
    let E = true, M = 0, L = 0, K = true, Q = 0, j = 0, N = true, G = 0, se = 0;
    const X = () => {
      if (typeof a == "function") {
        const R = M + Q + G, F = L + j + se, Z = E && K && N;
        a(new ProgressEvent("progress", { lengthComputable: Z, loaded: F, total: R }));
      }
    };
    this.manager.itemStart(t), this.manager.itemStart(r), this.manager.itemStart(s);
    const V = new zr(this._internalLoadingManager);
    V.setResponseType("arraybuffer"), V.setRequestHeader(this.requestHeader), V.setPath(this.path), V.setWithCredentials(this.withCredentials), V.load(t, async (R) => {
      if (typeof R == "string") throw new Error("Invalid sdr buffer");
      d = R, await v();
    }, (R) => {
      E = R.lengthComputable, L = R.loaded, M = R.total, X();
    }, (R) => {
      this.manager.itemError(t), typeof o == "function" && o(R);
    });
    const le = new zr(this._internalLoadingManager);
    le.setResponseType("arraybuffer"), le.setRequestHeader(this.requestHeader), le.setPath(this.path), le.setWithCredentials(this.withCredentials), le.load(r, async (R) => {
      if (typeof R == "string") throw new Error("Invalid gainmap buffer");
      f = R, await v();
    }, (R) => {
      K = R.lengthComputable, j = R.loaded, Q = R.total, X();
    }, (R) => {
      this.manager.itemError(r), typeof o == "function" && o(R);
    });
    const C = new zr(this._internalLoadingManager);
    return C.setRequestHeader(this.requestHeader), C.setPath(this.path), C.setWithCredentials(this.withCredentials), C.load(s, async (R) => {
      if (typeof R != "string") throw new Error("Invalid metadata string");
      p = JSON.parse(R), await v();
    }, (R) => {
      N = R.lengthComputable, se = R.loaded, G = R.total, X();
    }, (R) => {
      this.manager.itemError(s), typeof o == "function" && o(R);
    }), u;
  }
}
class _a extends kn {
  load(t, r, s, n) {
    const a = this.prepareQuadRenderer(), o = new zr(this._internalLoadingManager);
    return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(this.withCredentials), this.manager.itemStart(t), o.load(t, async (u) => {
      if (typeof u == "string") throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const d = new Uint8Array(u);
      let f, p, v;
      try {
        const E = await ka(d);
        f = E.sdr, p = E.gainMap, v = E.metadata;
      } catch (E) {
        if (E instanceof zn || E instanceof Nn) console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), v = { gainMapMin: [0, 0, 0], gainMapMax: [1, 1, 1], gamma: [1, 1, 1], hdrCapacityMin: 0, hdrCapacityMax: 1, offsetHdr: [0, 0, 0], offsetSdr: [0, 0, 0] }, f = d;
        else throw E;
      }
      try {
        await this.render(a, v, f.buffer, p == null ? void 0 : p.buffer);
      } catch (E) {
        this.manager.itemError(t), typeof n == "function" && n(E), a.disposeOnDemandRenderer();
        return;
      }
      typeof r == "function" && r(a), this.manager.itemEnd(t), a.disposeOnDemandRenderer();
    }, s, (u) => {
      this.manager.itemError(t), typeof n == "function" && n(u);
    }), a;
  }
}
const vr = { apartment: "lebombo_1k.hdr", city: "potsdamer_platz_1k.hdr", dawn: "kiara_1_dawn_1k.hdr", forest: "forest_slope_1k.hdr", lobby: "st_fagans_interior_1k.hdr", night: "dikhololo_night_1k.hdr", park: "rooitou_park_1k.hdr", studio: "studio_small_03_1k.hdr", sunset: "venice_sunset_1k.hdr", warehouse: "empty_warehouse_01_1k.hdr" }, Qn = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", zt = (e3) => Array.isArray(e3), Ts = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function $r({ files: e3 = Ts, path: t = "", preset: r = void 0, colorSpace: s = void 0, extensions: n } = {}) {
  r && (ys(r), e3 = vr[r], t = Qn);
  const a = zt(e3), { extension: o, isCubemap: u } = Rs(e3), d = bs(o);
  if (!d) throw new Error("useEnvironment: Unrecognized file extension: " + e3);
  const f = vt((M) => M.gl);
  x.useLayoutEffect(() => {
    if (o !== "webp" && o !== "jpg" && o !== "jpeg") return;
    function M() {
      Yr.clear(d, a ? [e3] : e3);
    }
    f.domElement.addEventListener("webglcontextlost", M, { once: true });
  }, [e3, f.domElement]);
  const p = Yr(d, a ? [e3] : e3, (M) => {
    (o === "webp" || o === "jpg" || o === "jpeg") && M.setRenderer(f), M.setPath == null || M.setPath(t), n && n(M);
  });
  let v = a ? p[0] : p;
  if (o === "jpg" || o === "jpeg" || o === "webp") {
    var E;
    v = (E = v.renderTarget) == null ? void 0 : E.texture;
  }
  return v.mapping = u ? Oi : Pi, v.colorSpace = s ?? (u ? "srgb" : "srgb-linear"), v;
}
const Xa = { files: Ts, path: "", preset: void 0, extensions: void 0 };
$r.preload = (e3) => {
  const t = { ...Xa, ...e3 };
  let { files: r, path: s = "" } = t;
  const { preset: n, extensions: a } = t;
  n && (ys(n), r = vr[n], s = Qn);
  const { extension: o } = Rs(r);
  if (o === "webp" || o === "jpg" || o === "jpeg") throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const u = bs(o);
  if (!u) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  Yr.preload(u, zt(r) ? [r] : r, (d) => {
    d.setPath == null || d.setPath(s), a && a(d);
  });
};
const Ka = { files: Ts, preset: void 0 };
$r.clear = (e3) => {
  const t = { ...Ka, ...e3 };
  let { files: r } = t;
  const { preset: s } = t;
  s && (ys(s), r = vr[s]);
  const { extension: n } = Rs(r), a = bs(n);
  if (!a) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  Yr.clear(a, zt(r) ? [r] : r);
};
function ys(e3) {
  if (!(e3 in vr)) throw new Error("Preset must be one of: " + Object.keys(vr).join(", "));
}
function Rs(e3) {
  var t;
  const r = zt(e3) && e3.length === 6, s = zt(e3) && e3.length === 3 && e3.some((o) => o.endsWith("json")), n = zt(e3) ? e3[0] : e3;
  return { extension: r ? "cube" : s ? "webp" : n.startsWith("data:application/exr") ? "exr" : n.startsWith("data:application/hdr") ? "hdr" : n.startsWith("data:image/jpeg") ? "jpg" : (t = n.split(".").pop()) == null || (t = t.split("?")) == null || (t = t.shift()) == null ? void 0 : t.toLowerCase(), isCubemap: r, isGainmap: s };
}
function bs(e3) {
  return e3 === "cube" ? Fi : e3 === "hdr" ? Fa : e3 === "exr" ? Ua : e3 === "jpg" || e3 === "jpeg" ? _a : e3 === "webp" ? Va : null;
}
const Za = (e3) => e3.current && e3.current.isScene, Ja = (e3) => Za(e3) ? e3.current : e3;
function Os(e3, t, r, s, n = {}) {
  var a, o, u, d;
  n = { backgroundBlurriness: 0, backgroundIntensity: 1, backgroundRotation: [0, 0, 0], environmentIntensity: 1, environmentRotation: [0, 0, 0], ...n };
  const f = Ja(t || r), p = f.background, v = f.environment, E = { backgroundBlurriness: f.backgroundBlurriness, backgroundIntensity: f.backgroundIntensity, backgroundRotation: (a = (o = f.backgroundRotation) == null || o.clone == null ? void 0 : o.clone()) !== null && a !== void 0 ? a : [0, 0, 0], environmentIntensity: f.environmentIntensity, environmentRotation: (u = (d = f.environmentRotation) == null || d.clone == null ? void 0 : d.clone()) !== null && u !== void 0 ? u : [0, 0, 0] };
  return e3 !== "only" && (f.environment = s), e3 && (f.background = s), Ns(f, n), () => {
    e3 !== "only" && (f.environment = v), e3 && (f.background = p), Ns(f, E);
  };
}
function Ps({ scene: e3, background: t = false, map: r, ...s }) {
  const n = vt((a) => a.scene);
  return x.useLayoutEffect(() => {
    if (r) return Os(t, e3, n, r, s);
  }), null;
}
function jn({ background: e3 = false, scene: t, blur: r, backgroundBlurriness: s, backgroundIntensity: n, backgroundRotation: a, environmentIntensity: o, environmentRotation: u, ...d }) {
  const f = $r(d), p = vt((v) => v.scene);
  return x.useLayoutEffect(() => Os(e3, t, p, f, { backgroundBlurriness: r ?? s, backgroundIntensity: n, backgroundRotation: a, environmentIntensity: o, environmentRotation: u })), x.useEffect(() => () => {
    f.dispose();
  }, [f]), null;
}
function qa({ children: e3, near: t = 0.1, far: r = 1e3, resolution: s = 256, frames: n = 1, map: a, background: o = false, blur: u, backgroundBlurriness: d, backgroundIntensity: f, backgroundRotation: p, environmentIntensity: v, environmentRotation: E, scene: M, files: L, path: K, preset: Q = void 0, extensions: j }) {
  const N = vt((C) => C.gl), G = vt((C) => C.scene), se = x.useRef(null), [X] = x.useState(() => new Qr()), V = x.useMemo(() => {
    const C = new Ui(s);
    return C.texture.type = Ye, C;
  }, [s]);
  x.useEffect(() => () => {
    V.dispose();
  }, [V]), x.useLayoutEffect(() => {
    if (n === 1) {
      const C = N.autoClear;
      N.autoClear = true, se.current.update(N, X), N.autoClear = C;
    }
    return Os(o, M, G, V.texture, { backgroundBlurriness: u ?? d, backgroundIntensity: f, backgroundRotation: p, environmentIntensity: v, environmentRotation: E });
  }, [e3, X, V.texture, M, G, o, n, N]);
  let le = 1;
  return Pe(() => {
    if (n === 1 / 0 || le < n) {
      const C = N.autoClear;
      N.autoClear = true, se.current.update(N, X), N.autoClear = C, le++;
    }
  }), x.createElement(x.Fragment, null, Li(x.createElement(x.Fragment, null, e3, x.createElement("cubeCamera", { ref: se, args: [t, r, V] }), L || Q ? x.createElement(jn, { background: true, files: L, preset: Q, path: K, extensions: j }) : a ? x.createElement(Ps, { background: true, map: a, extensions: j }) : null), X));
}
function $a(e3) {
  var t, r, s, n;
  const a = $r(e3), o = e3.map || a;
  x.useMemo(() => Mn({ GroundProjectedEnvImpl: Pa }), []), x.useEffect(() => () => {
    a.dispose();
  }, [a]);
  const u = x.useMemo(() => [o], [o]), d = (t = e3.ground) == null ? void 0 : t.height, f = (r = e3.ground) == null ? void 0 : r.radius, p = (s = (n = e3.ground) == null ? void 0 : n.scale) !== null && s !== void 0 ? s : 1e3;
  return x.createElement(x.Fragment, null, x.createElement(Ps, Gi({}, e3, { map: o })), x.createElement("groundProjectedEnvImpl", { args: u, scale: p, height: d, radius: f }));
}
function eo(e3) {
  return e3.ground ? x.createElement($a, e3) : e3.map ? x.createElement(Ps, e3) : e3.children ? x.createElement(qa, e3) : x.createElement(jn, e3);
}
class to extends Qe {
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
	      #include <${Ga >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
      }` });
  }
}
const ro = (e3) => new xe().setFromSpherical(new Hi(e3, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI)), so = x.forwardRef(({ radius: e3 = 100, depth: t = 50, count: r = 5e3, saturation: s = 0, factor: n = 4, fade: a = false, speed: o = 1 }, u) => {
  const d = x.useRef(null), [f, p, v] = x.useMemo(() => {
    const M = [], L = [], K = Array.from({ length: r }, () => (0.5 + 0.5 * Math.random()) * n), Q = new qr();
    let j = e3 + t;
    const N = t / r;
    for (let G = 0; G < r; G++) j -= N * Math.random(), M.push(...ro(j).toArray()), Q.setHSL(G / r, s, 0.9), L.push(Q.r, Q.g, Q.b);
    return [new Float32Array(M), new Float32Array(L), new Float32Array(K)];
  }, [r, t, n, e3, s]);
  Pe((M) => d.current && (d.current.uniforms.time.value = M.clock.elapsedTime * o));
  const [E] = x.useState(() => new to());
  return x.createElement("points", { ref: u }, x.createElement("bufferGeometry", null, x.createElement("bufferAttribute", { attach: "attributes-position", args: [f, 3] }), x.createElement("bufferAttribute", { attach: "attributes-color", args: [p, 3] }), x.createElement("bufferAttribute", { attach: "attributes-size", args: [v, 1] })), x.createElement("primitive", { ref: d, object: E, attach: "material", blending: Cn, "uniforms-fade-value": a, depthWrite: false, transparent: true, vertexColors: true }));
});
/**
* postprocessing v6.39.1 build Fri Apr 17 2026
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2026 Raoul van Rüschen
* @license Zlib
*/
var no = (() => {
  const e3 = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), t = new Float32Array([0, 0, 2, 0, 0, 2]), r = new mr();
  return r.setAttribute("position", new Wr(e3, 3)), r.setAttribute("uv", new Wr(t, 2)), r;
})(), Ge = class ws {
  static get fullscreenGeometry() {
    return no;
  }
  constructor(t = "Pass", r = new Qr(), s = new xn()) {
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
    r !== null ? r.material = t : (r = new Jr(ws.fullscreenGeometry, t), r.frustumCulled = false, this.scene === null && (this.scene = new Qr()), this.scene.add(r), this.screen = r);
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
      (r instanceof ke || r instanceof Bn || r instanceof dt || r instanceof ws) && this[t].dispose();
    }
    this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
  }
}, io = class extends Ge {
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = false;
  }
  render(e3, t, r, s, n) {
    const a = e3.state.buffers.stencil;
    a.setLocked(false), a.setTest(false);
  }
}, ao = `#ifdef COLOR_WRITE
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
}`, Yn = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", Wn = class extends Qe {
  constructor() {
    super({ name: "CopyMaterial", defines: { COLOR_SPACE_CONVERSION: "1", DEPTH_PACKING: "0", COLOR_WRITE: "1" }, uniforms: { inputBuffer: new Y(null), depthBuffer: new Y(null), channelWeights: new Y(null), opacity: new Y(1) }, blending: ft, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: ao, vertexShader: Yn }), this.depthFunc = ji;
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
}, oo = class extends Ge {
  constructor(e3, t = true) {
    super("CopyPass"), this.fullscreenMaterial = new Wn(), this.needsSwap = false, this.renderTarget = e3, e3 === void 0 && (this.renderTarget = new ke(1, 1, { minFilter: be, magFilter: be, stencilBuffer: false, depthBuffer: false }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = t;
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
    r !== void 0 && (this.renderTarget.texture.type = r, r !== it ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : e3 !== null && e3.outputColorSpace === Te && (this.renderTarget.texture.colorSpace = Te));
  }
}, Qs = new qr(), Fs = class extends Ge {
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
    const a = this.overrideClearColor, o = this.overrideClearAlpha, u = e3.getClearAlpha(), d = a !== null, f = o >= 0;
    d ? (e3.getClearColor(Qs), e3.setClearColor(a, f ? o : u)) : f && e3.setClearAlpha(o), e3.setRenderTarget(this.renderToScreen ? null : t), e3.clear(this.color, this.depth, this.stencil), d ? e3.setClearColor(Qs, u) : f && e3.setClearAlpha(u);
  }
}, co = class extends Ge {
  constructor(e3, t) {
    super("MaskPass", e3, t), this.needsSwap = false, this.clearPass = new Fs(false, false, true), this.inverse = false;
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
    const a = e3.getContext(), o = e3.state.buffers, u = this.scene, d = this.camera, f = this.clearPass, p = this.inverted ? 0 : 1, v = 1 - p;
    o.color.setMask(false), o.depth.setMask(false), o.color.setLocked(true), o.depth.setLocked(true), o.stencil.setTest(true), o.stencil.setOp(a.REPLACE, a.REPLACE, a.REPLACE), o.stencil.setFunc(a.ALWAYS, p, 4294967295), o.stencil.setClear(v), o.stencil.setLocked(true), this.clearPass.enabled && (this.renderToScreen ? f.render(e3, null) : (f.render(e3, t), f.render(e3, r))), this.renderToScreen ? (e3.setRenderTarget(null), e3.render(u, d)) : (e3.setRenderTarget(t), e3.render(u, d), e3.setRenderTarget(r), e3.render(u, d)), o.color.setLocked(false), o.depth.setLocked(false), o.stencil.setLocked(false), o.stencil.setFunc(a.EQUAL, 1, 4294967295), o.stencil.setOp(a.KEEP, a.KEEP, a.KEEP), o.stencil.setLocked(true);
  }
}, is = 1 / 1e3, lo = 1e3, uo = class {
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
    return this._delta * is;
  }
  get fixedDelta() {
    return this._fixedDelta * is;
  }
  set fixedDelta(e3) {
    this._fixedDelta = e3 * lo;
  }
  get elapsed() {
    return this._elapsed * is;
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
}, ho = class {
  constructor(e3 = null, { depthBuffer: t = true, stencilBuffer: r = false, multisampling: s = 0, frameBufferType: n } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(t, r, n, s), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new oo(), this.depthTexture = null, this.depthRenderTarget = null, this.passes = [], this.timer = new uo(), this.autoRenderToScreen = true, this.setRenderer(e3);
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
      const t = e3.getSize(new Me()), r = e3.getContext().getContextAttributes().alpha, s = this.inputBuffer.texture.type;
      s === it && e3.outputColorSpace === Te && (this.inputBuffer.texture.colorSpace = Te, this.outputBuffer.texture.colorSpace = Te, this.inputBuffer.dispose(), this.outputBuffer.dispose()), e3.autoClear = false, this.setSize(t.width, t.height);
      for (const n of this.passes) n.initialize(e3, r, s);
    }
  }
  replaceRenderer(e3, t = true) {
    const r = this.renderer, s = r.domElement.parentNode;
    return this.setRenderer(e3), t && s !== null && (s.removeChild(r.domElement), s.appendChild(e3.domElement)), r;
  }
  createDepthTexture() {
    const e3 = this.inputBuffer, t = new Ni();
    this.depthTexture = t, e3.stencilBuffer ? (t.format = zi, t.type = ki) : t.type = st;
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
    const n = this.renderer, a = n === null ? new Me() : n.getDrawingBufferSize(new Me()), o = { minFilter: be, magFilter: be, stencilBuffer: t, depthBuffer: e3, type: r }, u = new ke(a.width, a.height, o);
    return s > 0 && (u.samples = s), r === it && n !== null && n.outputColorSpace === Te && (u.texture.colorSpace = Te), u.texture.name = "EffectComposer.Buffer", u.texture.generateMipmaps = false, u;
  }
  setMainScene(e3) {
    for (const t of this.passes) t.mainScene = e3;
  }
  setMainCamera(e3) {
    for (const t of this.passes) t.mainCamera = e3;
  }
  addPass(e3, t) {
    const r = this.passes, s = this.renderer, n = s.getDrawingBufferSize(new Me()), a = s.getContext().getContextAttributes().alpha, o = this.inputBuffer.texture.type;
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
        const a = (u, d) => u || d.needsDepthTexture;
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
          const d = t.getContext(), f = t.state.buffers.stencil;
          f.setFunc(d.NOTEQUAL, 1, 4294967295), r.render(t, s, n, e3, o), f.setFunc(d.EQUAL, 1, 4294967295);
        }
        a = s, s = n, n = a;
      }
      u instanceof co ? o = true : u instanceof io && (o = false);
    }
  }
  setSize(e3, t, r) {
    const s = this.renderer, n = s.getSize(new Me());
    (e3 === void 0 || t === void 0) && (e3 = n.width, t = n.height), (n.width !== e3 || n.height !== t) && s.setSize(e3, t, r);
    const a = s.getDrawingBufferSize(new Me());
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
}, ht = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }, ie = { FRAGMENT_HEAD: "FRAGMENT_HEAD", FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV", FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE", VERTEX_HEAD: "VERTEX_HEAD", VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT" }, fo = class {
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([[ie.FRAGMENT_HEAD, null], [ie.FRAGMENT_MAIN_UV, null], [ie.FRAGMENT_MAIN_IMAGE, null], [ie.VERTEX_HEAD, null], [ie.VERTEX_MAIN_SUPPORT, null]]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = ht.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = false, this.readDepth = false, this.colorSpace = fr;
  }
}, as = false, js = class {
  constructor(e3 = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(e3), this.meshCount = 0, this.replaceMaterial = (t) => {
      if (t.isMesh) {
        let r;
        if (t.material.flatShading) switch (t.material.side) {
          case Je:
            r = this.materialsFlatShadedDoubleSide;
            break;
          case ir:
            r = this.materialsFlatShadedBackSide;
            break;
          default:
            r = this.materialsFlatShaded;
            break;
        }
        else switch (t.material.side) {
          case Je:
            r = this.materialsDoubleSide;
            break;
          case ir:
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
      for (const r of t) r.uniforms = Object.assign({}, e3.uniforms), r.side = Yi;
      t[2].skinning = true, this.materialsBackSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.side = ir, s;
      }), this.materialsDoubleSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.side = Je, s;
      }), this.materialsFlatShaded = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s;
      }), this.materialsFlatShadedBackSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s.side = ir, s;
      }), this.materialsFlatShadedDoubleSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s.side = Je, s;
      });
    }
  }
  render(e3, t, r) {
    const s = e3.shadowMap.enabled;
    if (e3.shadowMap.enabled = false, as) {
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
    return as;
  }
  static set workaroundEnabled(e3) {
    as = e3;
  }
}, wt = -1, Oe = class extends Ds {
  constructor(e3 = null, t = wt, r = wt, s = 1) {
    super(), e3 !== null && this.addEventListener("change", () => e3.setSize(this.baseSize.width, this.baseSize.height)), this.baseSize = new Me(1, 1), this.preferredSize = new Me(t, r), this.target = this.preferredSize, this.s = s, this.effectiveSize = new Me(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
  }
  updateEffectiveSize() {
    const e3 = this.baseSize, t = this.preferredSize, r = this.effectiveSize, s = this.scale;
    t.width !== wt ? r.width = t.width : t.height !== wt ? r.width = Math.round(t.height * (e3.width / Math.max(e3.height, 1))) : r.width = Math.round(e3.width * s), t.height !== wt ? r.height = t.height : t.width !== wt ? r.height = Math.round(t.width / Math.max(e3.width / Math.max(e3.height, 1), 1)) : r.height = Math.round(e3.height * s);
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
    this.s !== e3 && (this.s = e3, this.preferredSize.setScalar(wt), this.dispatchEvent({ type: "change" }));
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
    return wt;
  }
}, te = { SKIP: 9, SET: 30, ADD: 0, ALPHA: 1, AVERAGE: 2, COLOR: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, DIVIDE: 8, DST: 9, EXCLUSION: 10, HARD_LIGHT: 11, HARD_MIX: 12, HUE: 13, INVERT: 14, INVERT_RGB: 15, LIGHTEN: 16, LINEAR_BURN: 17, LINEAR_DODGE: 18, LINEAR_LIGHT: 19, LUMINOSITY: 20, MULTIPLY: 21, NEGATION: 22, NORMAL: 23, OVERLAY: 24, PIN_LIGHT: 25, REFLECT: 26, SATURATION: 27, SCREEN: 28, SOFT_LIGHT: 29, SRC: 30, SUBTRACT: 31, VIVID_LIGHT: 32 }, go = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", po = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}", vo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ao = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", mo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", xo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Eo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", wo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Mo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Co = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Do = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Bo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", So = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Io = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", To = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", yo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ro = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", bo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Oo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Po = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Fo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Uo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Lo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}", Go = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ho = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", No = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", zo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ko = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Qo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", jo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}", Yo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Wo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Vo = /* @__PURE__ */ new Map([[te.ADD, go], [te.ALPHA, po], [te.AVERAGE, vo], [te.COLOR, Ao], [te.COLOR_BURN, mo], [te.COLOR_DODGE, xo], [te.DARKEN, Eo], [te.DIFFERENCE, wo], [te.DIVIDE, Mo], [te.DST, null], [te.EXCLUSION, Co], [te.HARD_LIGHT, Do], [te.HARD_MIX, Bo], [te.HUE, So], [te.INVERT, Io], [te.INVERT_RGB, To], [te.LIGHTEN, yo], [te.LINEAR_BURN, Ro], [te.LINEAR_DODGE, bo], [te.LINEAR_LIGHT, Oo], [te.LUMINOSITY, Po], [te.MULTIPLY, Fo], [te.NEGATION, Uo], [te.NORMAL, Lo], [te.OVERLAY, Go], [te.PIN_LIGHT, Ho], [te.REFLECT, No], [te.SATURATION, zo], [te.SCREEN, ko], [te.SOFT_LIGHT, Qo], [te.SRC, jo], [te.SUBTRACT, Yo], [te.VIVID_LIGHT, Wo]]), _o = class extends Ds {
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
    return Vo.get(this.blendFunction);
  }
}, Yt = class extends Ds {
  constructor(e3, t, { attributes: r = ht.NONE, blendFunction: s = te.NORMAL, defines: n = /* @__PURE__ */ new Map(), uniforms: a = /* @__PURE__ */ new Map(), extensions: o = null, vertexShader: u = null } = {}) {
    super(), this.name = e3, this.renderer = null, this.attributes = r, this.fragmentShader = t, this.vertexShader = u, this.defines = n, this.uniforms = a, this.extensions = o, this.blendMode = new _o(s), this.blendMode.addEventListener("change", (d) => this.setChanged()), this._inputColorSpace = fr, this._outputColorSpace = Dn;
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
      (t instanceof ke || t instanceof Bn || t instanceof dt || t instanceof Ge) && this[e3].dispose();
    }
  }
}, es = { VERY_SMALL: 0, SMALL: 1, MEDIUM: 2, LARGE: 3, VERY_LARGE: 4, HUGE: 5 }, Xo = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, Ko = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", Zo = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])], Jo = class extends Qe {
  constructor(e3 = new zs()) {
    super({ name: "KawaseBlurMaterial", uniforms: { inputBuffer: new Y(null), texelSize: new Y(new zs()), scale: new Y(1), kernel: new Y(0) }, blending: ft, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Xo, vertexShader: Ko }), this.setTexelSize(e3.x, e3.y), this.kernelSize = es.MEDIUM;
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setInputBuffer(e3) {
    this.inputBuffer = e3;
  }
  get kernelSequence() {
    return Zo[this.kernelSize];
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
}, qo = class extends Ge {
  constructor({ kernelSize: e3 = es.MEDIUM, resolutionScale: t = 0.5, width: r = Oe.AUTO_SIZE, height: s = Oe.AUTO_SIZE, resolutionX: n = r, resolutionY: a = s } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new ke(1, 1, { depthBuffer: false }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const o = this.resolution = new Oe(this, n, a, t);
    o.addEventListener("change", (u) => this.setSize(o.baseWidth, o.baseHeight)), this._blurMaterial = new Jo(), this._blurMaterial.kernelSize = e3, this.copyMaterial = new Wn();
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
    const a = this.scene, o = this.camera, u = this.renderTargetA, d = this.renderTargetB, f = this.blurMaterial, p = f.kernelSequence;
    let v = t;
    this.fullscreenMaterial = f;
    for (let E = 0, M = p.length; E < M; ++E) {
      const L = E & 1 ? d : u;
      f.kernel = p[E], f.inputBuffer = v.texture, e3.setRenderTarget(L), e3.render(a, o), v = L;
    }
    this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = v.texture, e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(a, o);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t);
    const s = r.width, n = r.height;
    this.renderTargetA.setSize(s, n), this.renderTargetB.setSize(s, n), this.blurMaterial.setSize(e3, t);
  }
  initialize(e3, t, r) {
    r !== void 0 && (this.renderTargetA.texture.type = r, this.renderTargetB.texture.type = r, r !== it ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : e3 !== null && e3.outputColorSpace === Te && (this.renderTargetA.texture.colorSpace = Te, this.renderTargetB.texture.colorSpace = Te));
  }
  static get AUTO_SIZE() {
    return Oe.AUTO_SIZE;
  }
}, $o = `#include <common>
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
}`, ec = class extends Qe {
  constructor(e3 = false, t = null) {
    super({ name: "LuminanceMaterial", defines: { THREE_REVISION: Ar.replace(/\D+/g, "") }, uniforms: { inputBuffer: new Y(null), threshold: new Y(0), smoothing: new Y(1), range: new Y(null) }, blending: ft, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: $o, vertexShader: Yn }), this.colorOutput = e3, this.luminanceRange = t;
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
}, tc = class extends Ge {
  constructor({ renderTarget: e3, luminanceRange: t, colorOutput: r, resolutionScale: s = 1, width: n = Oe.AUTO_SIZE, height: a = Oe.AUTO_SIZE, resolutionX: o = n, resolutionY: u = a } = {}) {
    super("LuminancePass"), this.fullscreenMaterial = new ec(r, t), this.needsSwap = false, this.renderTarget = e3, this.renderTarget === void 0 && (this.renderTarget = new ke(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "LuminancePass.Target");
    const d = this.resolution = new Oe(this, o, u, s);
    d.addEventListener("change", (f) => this.setSize(d.baseWidth, d.baseHeight));
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
    r !== void 0 && r !== it && (this.renderTarget.texture.type = r, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, rc = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`, sc = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}", nc = class extends Qe {
  constructor() {
    super({ name: "DownsamplingMaterial", uniforms: { inputBuffer: new Y(null), texelSize: new Y(new Me()) }, blending: ft, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: rc, vertexShader: sc });
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setSize(e3, t) {
    this.uniforms.texelSize.value.set(1 / e3, 1 / t);
  }
}, ic = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`, ac = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}", oc = class extends Qe {
  constructor() {
    super({ name: "UpsamplingMaterial", uniforms: { inputBuffer: new Y(null), supportBuffer: new Y(null), texelSize: new Y(new Me()), radius: new Y(0.85) }, blending: ft, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: ic, vertexShader: ac });
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
}, cc = class extends Ge {
  constructor() {
    super("MipmapBlurPass"), this.needsSwap = false, this.renderTarget = new ke(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new nc(), this.upsamplingMaterial = new oc(), this.resolution = new Me();
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
    const { scene: a, camera: o } = this, { downsamplingMaterial: u, upsamplingMaterial: d } = this, { downsamplingMipmaps: f, upsamplingMipmaps: p } = this;
    let v = t;
    this.fullscreenMaterial = u;
    for (let E = 0, M = f.length; E < M; ++E) {
      const L = f[E];
      u.setSize(v.width, v.height), u.inputBuffer = v.texture, e3.setRenderTarget(L), e3.render(a, o), v = L;
    }
    this.fullscreenMaterial = d;
    for (let E = p.length - 1; E >= 0; --E) {
      const M = p[E];
      d.setSize(v.width, v.height), d.inputBuffer = v.texture, d.supportBuffer = f[E].texture, e3.setRenderTarget(M), e3.render(a, o), v = M;
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
      if (r !== it) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      else if (e3 !== null && e3.outputColorSpace === Te) for (const n of s) n.texture.colorSpace = Te;
    }
  }
  dispose() {
    super.dispose();
    for (const e3 of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) e3.dispose();
  }
}, lc = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`, uc = class extends Yt {
  constructor({ blendFunction: e3 = te.SCREEN, luminanceThreshold: t = 1, luminanceSmoothing: r = 0.03, mipmapBlur: s = true, intensity: n = 1, radius: a = 0.85, levels: o = 8, kernelSize: u = es.LARGE, resolutionScale: d = 0.5, width: f = Oe.AUTO_SIZE, height: p = Oe.AUTO_SIZE, resolutionX: v = f, resolutionY: E = p } = {}) {
    super("BloomEffect", lc, { blendFunction: e3, uniforms: /* @__PURE__ */ new Map([["map", new Y(null)], ["intensity", new Y(n)]]) }), this.renderTarget = new ke(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new qo({ kernelSize: u }), this.luminancePass = new tc({ colorOutput: true }), this.luminanceMaterial.threshold = t, this.luminanceMaterial.smoothing = r, this.mipmapBlurPass = new cc(), this.mipmapBlurPass.enabled = s, this.mipmapBlurPass.radius = a, this.mipmapBlurPass.levels = o, this.uniforms.get("map").value = s ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const M = this.resolution = new Oe(this, v, E, d);
    M.addEventListener("change", (L) => this.setSize(M.baseWidth, M.baseHeight));
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
}, dc = `#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`, hc = "uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}", fc = class extends Yt {
  constructor({ offset: e3 = new Me(1e-3, 5e-4), radialModulation: t = false, modulationOffset: r = 0.15 } = {}) {
    super("ChromaticAberrationEffect", dc, { vertexShader: hc, attributes: ht.CONVOLUTION, uniforms: /* @__PURE__ */ new Map([["offset", new Y(e3)], ["modulationOffset", new Y(r)]]) }), this.radialModulation = t;
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
}, Ys = class extends Ge {
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
    r !== void 0 && r !== it && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, Vn = class extends Ge {
  constructor(e3, t, r = null) {
    super("RenderPass", e3, t), this.needsSwap = false, this.needsDepthBlit = true, this.clearPass = new Fs(), this.overrideMaterialManager = r === null ? null : new js(r), this.ignoreBackground = false, this.skipShadowMapUpdate = false, this.selection = null;
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
    e3 !== null ? t !== null ? t.setMaterial(e3) : this.overrideMaterialManager = new js(e3) : t !== null && (t.dispose(), this.overrideMaterialManager = null);
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
    const a = this.scene, o = this.camera, u = this.selection, d = o.layers.mask, f = a.background, p = e3.shadowMap.autoUpdate, v = this.renderToScreen ? null : t;
    u !== null && o.layers.set(u.getLayer()), this.skipShadowMapUpdate && (e3.shadowMap.autoUpdate = false), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (a.background = null), this.clearPass.enabled && this.clearPass.render(e3, t), e3.setRenderTarget(v), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(e3, a, o) : e3.render(a, o), o.layers.mask = d, a.background = f, e3.shadowMap.autoUpdate = p;
  }
}, _n = { DEPTH: 0, LUMA: 1, COLOR: 2 }, gc = { DISABLED: 0, DEPTH: 1, CUSTOM: 2 }, rr = { LOW: 0, MEDIUM: 1, HIGH: 2, ULTRA: 3 }, sr = { DEFAULT: 0, ESKIL: 1 }, pc = `varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
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
}`, vc = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`, Ac = class extends Qe {
  constructor(e3 = new Me(), t = _n.COLOR) {
    super({ name: "EdgeDetectionMaterial", defines: { THREE_REVISION: Ar.replace(/\D+/g, ""), LOCAL_CONTRAST_ADAPTATION_FACTOR: "2.0", EDGE_THRESHOLD: "0.1", DEPTH_THRESHOLD: "0.01", PREDICATION_MODE: "0", PREDICATION_THRESHOLD: "0.01", PREDICATION_SCALE: "2.0", PREDICATION_STRENGTH: "1.0", DEPTH_PACKING: "0" }, uniforms: { inputBuffer: new Y(null), depthBuffer: new Y(null), predicationBuffer: new Y(null), texelSize: new Y(e3) }, blending: ft, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: pc, vertexShader: vc }), this.edgeDetectionMode = t;
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
}, mc = `#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
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
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`, xc = "uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}", Ec = class extends Qe {
  constructor(e3 = new Me(), t = new Me()) {
    super({ name: "SMAAWeightsMaterial", defines: { MAX_SEARCH_STEPS_INT: "16", MAX_SEARCH_STEPS_FLOAT: "16.0", MAX_SEARCH_STEPS_DIAG_INT: "8", MAX_SEARCH_STEPS_DIAG_FLOAT: "8.0", CORNER_ROUNDING: "25", CORNER_ROUNDING_NORM: "0.25", AREATEX_MAX_DISTANCE: "16.0", AREATEX_MAX_DISTANCE_DIAG: "20.0", AREATEX_PIXEL_SIZE: "(1.0 / vec2(160.0, 560.0))", AREATEX_SUBTEX_SIZE: "(1.0 / 7.0)", SEARCHTEX_SIZE: "vec2(66.0, 33.0)", SEARCHTEX_PACKED_SIZE: "vec2(64.0, 16.0)" }, uniforms: { inputBuffer: new Y(null), searchTexture: new Y(null), areaTexture: new Y(null), resolution: new Y(t), texelSize: new Y(e3) }, blending: ft, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: mc, vertexShader: xc });
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
}, Ws = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC", Vs = "data:image/png;base64,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", wc = "uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}", Mc = "varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}", Cc = class extends Yt {
  constructor({ blendFunction: e3 = te.SRC, preset: t = rr.MEDIUM, edgeDetectionMode: r = _n.COLOR, predicationMode: s = gc.DISABLED } = {}) {
    super("SMAAEffect", wc, { vertexShader: Mc, blendFunction: e3, attributes: ht.CONVOLUTION | ht.DEPTH, uniforms: /* @__PURE__ */ new Map([["weightMap", new Y(null)]]) });
    let n, a;
    arguments.length > 1 && (n = arguments[0], a = arguments[1], arguments.length > 2 && (t = arguments[2]), arguments.length > 3 && (r = arguments[3])), this.renderTargetEdges = new ke(1, 1, { depthBuffer: false }), this.renderTargetEdges.texture.name = "SMAA.Edges", this.renderTargetWeights = this.renderTargetEdges.clone(), this.renderTargetWeights.texture.name = "SMAA.Weights", this.uniforms.get("weightMap").value = this.renderTargetWeights.texture, this.clearPass = new Fs(true, false, false), this.clearPass.overrideClearColor = new qr(0), this.clearPass.overrideClearAlpha = 1, this.edgeDetectionPass = new Ys(new Ac()), this.edgeDetectionMaterial.edgeDetectionMode = r, this.edgeDetectionMaterial.predicationMode = s, this.weightsPass = new Ys(new Ec());
    const o = new wn();
    o.onLoad = () => {
      const u = new dt(n);
      u.name = "SMAA.Search", u.magFilter = Qt, u.minFilter = Qt, u.generateMipmaps = false, u.needsUpdate = true, u.flipY = true, this.weightsMaterial.searchTexture = u;
      const d = new dt(a);
      d.name = "SMAA.Area", d.magFilter = be, d.minFilter = be, d.generateMipmaps = false, d.needsUpdate = true, d.flipY = false, this.weightsMaterial.areaTexture = d, this.dispatchEvent({ type: "load" });
    }, o.itemStart("search"), o.itemStart("area"), n !== void 0 && a !== void 0 ? (o.itemEnd("search"), o.itemEnd("area")) : typeof Image < "u" && (n = new Image(), a = new Image(), n.addEventListener("load", () => o.itemEnd("search")), a.addEventListener("load", () => o.itemEnd("area")), n.src = Ws, a.src = Vs), this.applyPreset(t);
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
      case rr.LOW:
        t.edgeDetectionThreshold = 0.15, r.orthogonalSearchSteps = 4, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case rr.MEDIUM:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 8, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case rr.HIGH:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 16, r.diagonalSearchSteps = 8, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
      case rr.ULTRA:
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
    return Ws;
  }
  static get areaImageDataURL() {
    return Vs;
  }
}, Dc = `#include <packing>
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
gl_FragColor=vec4(n[index],d[index]);}`, Bc = "uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}", Sc = class extends Qe {
  constructor() {
    super({ name: "DepthDownsamplingMaterial", defines: { DEPTH_PACKING: "0" }, uniforms: { depthBuffer: new Y(null), normalBuffer: new Y(null), texelSize: new Y(new Me()) }, blending: ft, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Dc, vertexShader: Bc });
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
}, Ic = class extends Ge {
  constructor({ normalBuffer: e3 = null, resolutionScale: t = 0.5, width: r = Oe.AUTO_SIZE, height: s = Oe.AUTO_SIZE, resolutionX: n = r, resolutionY: a = s } = {}) {
    super("DepthDownsamplingPass");
    const o = new Sc();
    o.normalBuffer = e3, this.fullscreenMaterial = o, this.needsDepthTexture = true, this.needsSwap = false, this.renderTarget = new ke(1, 1, { minFilter: Qt, magFilter: Qt, depthBuffer: false, type: st }), this.renderTarget.texture.name = "DepthDownsamplingPass.Target", this.renderTarget.texture.generateMipmaps = false;
    const u = this.resolution = new Oe(this, n, a, t);
    u.addEventListener("change", (d) => this.setSize(u.baseWidth, u.baseHeight));
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
}, Tc = `uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`, yc = class extends Yt {
  constructor({ blendFunction: e3, eskil: t = false, technique: r = t ? sr.ESKIL : sr.DEFAULT, offset: s = 0.5, darkness: n = 0.5 } = {}) {
    super("VignetteEffect", Tc, { blendFunction: e3, defines: /* @__PURE__ */ new Map([["VIGNETTE_TECHNIQUE", r.toFixed(0)]]), uniforms: /* @__PURE__ */ new Map([["offset", new Y(s)], ["darkness", new Y(n)]]) });
  }
  get technique() {
    return Number(this.defines.get("VIGNETTE_TECHNIQUE"));
  }
  set technique(e3) {
    this.technique !== e3 && (this.defines.set("VIGNETTE_TECHNIQUE", e3.toFixed(0)), this.setChanged());
  }
  get eskil() {
    return this.technique === sr.ESKIL;
  }
  set eskil(e3) {
    this.technique = e3 ? sr.ESKIL : sr.DEFAULT;
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
}, Rc = `#include <common>
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
}`, bc = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", Oc = class extends Qe {
  constructor(e3, t, r, s, n = false) {
    super({ name: "EffectMaterial", defines: { THREE_REVISION: Ar.replace(/\D+/g, ""), DEPTH_PACKING: "0", ENCODE_OUTPUT: "1" }, uniforms: { inputBuffer: new Y(null), depthBuffer: new Y(null), resolution: new Y(new Me()), texelSize: new Y(new Me()), cameraNear: new Y(0.3), cameraFar: new Y(1e3), aspect: new Y(1), time: new Y(0) }, blending: ft, toneMapped: false, depthWrite: false, depthTest: false, dithering: n }), e3 && this.setShaderParts(e3), t && this.setDefines(t), r && this.setUniforms(r), this.copyCameraSettings(s);
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
    return this.fragmentShader = Rc.replace(ie.FRAGMENT_HEAD, e3.get(ie.FRAGMENT_HEAD) || "").replace(ie.FRAGMENT_MAIN_UV, e3.get(ie.FRAGMENT_MAIN_UV) || "").replace(ie.FRAGMENT_MAIN_IMAGE, e3.get(ie.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = bc.replace(ie.VERTEX_HEAD, e3.get(ie.VERTEX_HEAD) || "").replace(ie.VERTEX_MAIN_SUPPORT, e3.get(ie.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = true, this;
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
    e3 && (this.uniforms.cameraNear.value = e3.near, this.uniforms.cameraFar.value = e3.far, e3 instanceof Wi ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
  setSize(e3, t) {
    const r = this.uniforms;
    r.resolution.value.set(e3, t), r.texelSize.value.set(1 / e3, 1 / t), r.aspect.value = e3 / t;
  }
  static get Section() {
    return ie;
  }
};
function _s(e3, t, r) {
  for (const s of t) {
    const n = "$1" + e3 + s.charAt(0).toUpperCase() + s.slice(1), a = new RegExp("([^\\.])(\\b" + s + "\\b)", "g");
    for (const o of r.entries()) o[1] !== null && r.set(o[0], o[1].replace(a, n));
  }
}
function Pc(e3, t, r) {
  let s = t.getFragmentShader(), n = t.getVertexShader();
  const a = s !== void 0 && /mainImage/.test(s), o = s !== void 0 && /mainUv/.test(s);
  if (r.attributes |= t.getAttributes(), s === void 0) throw new Error(`Missing fragment shader (${t.name})`);
  if (o && r.attributes & ht.CONVOLUTION) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);
  if (!a && !o) throw new Error(`Could not find mainImage or mainUv function (${t.name})`);
  {
    const u = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, d = r.shaderParts;
    let f = d.get(ie.FRAGMENT_HEAD) || "", p = d.get(ie.FRAGMENT_MAIN_UV) || "", v = d.get(ie.FRAGMENT_MAIN_IMAGE) || "", E = d.get(ie.VERTEX_HEAD) || "", M = d.get(ie.VERTEX_MAIN_SUPPORT) || "";
    const L = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set();
    if (o && (p += `	${e3}MainUv(UV);
`, r.uvTransformation = true), n !== null && /mainSupport/.test(n)) {
      const N = /mainSupport *\([\w\s]*?uv\s*?\)/.test(n);
      M += `	${e3}MainSupport(`, M += N ? `vUv);
` : `);
`;
      for (const G of n.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) for (const se of G[1].split(/\s*,\s*/)) r.varyings.add(se), L.add(se), K.add(se);
      for (const G of n.matchAll(u)) K.add(G[1]);
    }
    for (const N of s.matchAll(u)) K.add(N[1]);
    for (const N of t.defines.keys()) K.add(N.replace(/\([\w\s,]*\)/g, ""));
    for (const N of t.uniforms.keys()) K.add(N);
    K.delete("while"), K.delete("for"), K.delete("if"), t.uniforms.forEach((N, G) => r.uniforms.set(e3 + G.charAt(0).toUpperCase() + G.slice(1), N)), t.defines.forEach((N, G) => r.defines.set(e3 + G.charAt(0).toUpperCase() + G.slice(1), N));
    const Q = /* @__PURE__ */ new Map([["fragment", s], ["vertex", n]]);
    _s(e3, K, r.defines), _s(e3, K, Q), s = Q.get("fragment"), n = Q.get("vertex");
    const j = t.blendMode;
    if (r.blendModes.set(j.blendFunction, j), a) {
      t.inputColorSpace !== null && t.inputColorSpace !== r.colorSpace && (v += t.inputColorSpace === Te ? `color0 = sRGBTransferOETF(color0);
	` : `color0 = sRGBToLinear(color0);
	`), t.outputColorSpace !== Dn ? r.colorSpace = t.outputColorSpace : t.inputColorSpace !== null && (r.colorSpace = t.inputColorSpace);
      const N = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      v += `${e3}MainImage(color0, UV, `, r.attributes & ht.DEPTH && N.test(s) && (v += "depth, ", r.readDepth = true), v += `color1);
	`;
      const G = e3 + "BlendOpacity";
      r.uniforms.set(G, j.opacity), v += `color0 = blend${j.blendFunction}(color0, color1, ${G});

	`, f += `uniform float ${G};

`;
    }
    if (f += s + `
`, n !== null && (E += n + `
`), d.set(ie.FRAGMENT_HEAD, f), d.set(ie.FRAGMENT_MAIN_UV, p), d.set(ie.FRAGMENT_MAIN_IMAGE, v), d.set(ie.VERTEX_HEAD, E), d.set(ie.VERTEX_MAIN_SUPPORT, M), t.extensions !== null) for (const N of t.extensions) r.extensions.add(N);
  }
}
var Fc = class extends Ge {
  constructor(e3, ...t) {
    super("EffectPass"), this.fullscreenMaterial = new Oc(null, null, null, e3), this.listener = (r) => this.handleEvent(r), this.effects = [], this.setEffects(t), this.skipRendering = false, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
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
    const e3 = new fo();
    let t = 0;
    for (const o of this.effects) if (o.blendMode.blendFunction === te.DST) e3.attributes |= o.getAttributes() & ht.DEPTH;
    else {
      if (e3.attributes & o.getAttributes() & ht.CONVOLUTION) throw new Error(`Convolution effects cannot be merged (${o.name})`);
      Pc("e" + t++, o, e3);
    }
    let r = e3.shaderParts.get(ie.FRAGMENT_HEAD), s = e3.shaderParts.get(ie.FRAGMENT_MAIN_IMAGE), n = e3.shaderParts.get(ie.FRAGMENT_MAIN_UV);
    const a = /\bblend\b/g;
    for (const o of e3.blendModes.values()) r += o.getShaderCode().replace(a, `blend${o.blendFunction}`) + `
`;
    e3.attributes & ht.DEPTH ? (e3.readDepth && (s = `float depth = readDepth(UV);

	` + s), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = false, e3.colorSpace === Te && (s += `color0 = sRGBToLinear(color0);
	`), e3.uvTransformation ? (n = `vec2 transformedUv = vUv;
` + n, e3.defines.set("UV", "transformedUv")) : e3.defines.set("UV", "vUv"), e3.shaderParts.set(ie.FRAGMENT_HEAD, r), e3.shaderParts.set(ie.FRAGMENT_MAIN_IMAGE, s), e3.shaderParts.set(ie.FRAGMENT_MAIN_UV, n);
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
    this.updateMaterial(), r !== void 0 && r !== it && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
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
}, Uc = class extends Ge {
  constructor(e3, t, { renderTarget: r, resolutionScale: s = 1, width: n = Oe.AUTO_SIZE, height: a = Oe.AUTO_SIZE, resolutionX: o = n, resolutionY: u = a } = {}) {
    super("NormalPass"), this.needsSwap = false, this.renderPass = new Vn(e3, t, new Qi());
    const d = this.renderPass;
    d.ignoreBackground = true, d.skipShadowMapUpdate = true;
    const f = d.getClearPass();
    f.overrideClearColor = new qr(7829503), f.overrideClearAlpha = 1, this.renderTarget = r, this.renderTarget === void 0 && (this.renderTarget = new ke(1, 1, { minFilter: Qt, magFilter: Qt }), this.renderTarget.texture.name = "NormalPass.Target");
    const p = this.resolution = new Oe(this, o, u, s);
    p.addEventListener("change", (v) => this.setSize(p.baseWidth, p.baseHeight));
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
function cr(e3, t, r) {
  return t in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
new Me();
new Me();
function Xn(e3, t) {
  if (!(e3 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var Ke = function e(t, r, s) {
  var n = this;
  Xn(this, e), cr(this, "dot2", function(a, o) {
    return n.x * a + n.y * o;
  }), cr(this, "dot3", function(a, o, u) {
    return n.x * a + n.y * o + n.z * u;
  }), this.x = t, this.y = r, this.z = s;
}, Lc = [new Ke(1, 1, 0), new Ke(-1, 1, 0), new Ke(1, -1, 0), new Ke(-1, -1, 0), new Ke(1, 0, 1), new Ke(-1, 0, 1), new Ke(1, 0, -1), new Ke(-1, 0, -1), new Ke(0, 1, 1), new Ke(0, -1, 1), new Ke(0, 1, -1), new Ke(0, -1, -1)], Xs = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], Ks = new Array(512), Zs = new Array(512), Gc = function(t) {
  t > 0 && t < 1 && (t *= 65536), t = Math.floor(t), t < 256 && (t |= t << 8);
  for (var r = 0; r < 256; r++) {
    var s;
    r & 1 ? s = Xs[r] ^ t & 255 : s = Xs[r] ^ t >> 8 & 255, Ks[r] = Ks[r + 256] = s, Zs[r] = Zs[r + 256] = Lc[s % 12];
  }
};
Gc(0);
function Hc(e3) {
  if (typeof e3 == "number") e3 = Math.abs(e3);
  else if (typeof e3 == "string") {
    var t = e3;
    e3 = 0;
    for (var r = 0; r < t.length; r++) e3 = (e3 + (r + 1) * (t.charCodeAt(r) % 96)) % 2147483647;
  }
  return e3 === 0 && (e3 = 311), e3;
}
function Js(e3) {
  var t = Hc(e3);
  return function() {
    var r = t * 48271 % 2147483647;
    return t = r, r / 2147483647;
  };
}
var Nc = function e2(t) {
  var r = this;
  Xn(this, e2), cr(this, "seed", 0), cr(this, "init", function(s) {
    r.seed = s, r.value = Js(s);
  }), cr(this, "value", Js(this.seed)), this.init(t);
};
new Nc(Math.random());
const zc = x.createContext(null), qs = (e3) => (e3.getAttributes() & 2) === 2, kc = x.memo(x.forwardRef(({ children: e3, camera: t, scene: r, resolutionScale: s, enabled: n = true, renderPriority: a = 1, autoClear: o = true, depthBuffer: u, enableNormalPass: d, stencilBuffer: f, multisampling: p = 8, frameBufferType: v = Ye }, E) => {
  const { gl: M, scene: L, camera: K, size: Q } = vt(), j = r || L, N = t || K, [G, se, X] = x.useMemo(() => {
    const C = new ho(M, { depthBuffer: u, stencilBuffer: f, multisampling: p, frameBufferType: v });
    C.addPass(new Vn(j, N));
    let R = null, F = null;
    return d && (F = new Uc(j, N), F.enabled = false, C.addPass(F), s !== void 0 && (R = new Ic({ normalBuffer: F.texture, resolutionScale: s }), R.enabled = false, C.addPass(R))), [C, F, R];
  }, [N, M, u, f, p, v, j, d, s]);
  x.useEffect(() => G == null ? void 0 : G.setSize(Q.width, Q.height), [G, Q]), Pe((C, R) => {
    if (n) {
      const F = M.autoClear;
      M.autoClear = o, f && !o && M.clearStencil(), G.render(R), M.autoClear = F;
    }
  }, n ? a : 0);
  const V = x.useRef(null);
  x.useLayoutEffect(() => {
    var _a2;
    const C = [], R = V.current.__r3f;
    if (R && G) {
      const F = R.children;
      for (let Z = 0; Z < F.length; Z++) {
        const b = F[Z].object;
        if (b instanceof Yt) {
          const U = [b];
          if (!qs(b)) {
            let J = null;
            for (; (J = (_a2 = F[Z + 1]) == null ? void 0 : _a2.object) instanceof Yt && !qs(J); ) U.push(J), Z++;
          }
          const O = new Fc(N, ...U);
          C.push(O);
        } else b instanceof Ge && C.push(b);
      }
      for (const Z of C) G == null ? void 0 : G.addPass(Z);
      se && (se.enabled = true), X && (X.enabled = true);
    }
    return () => {
      for (const F of C) G == null ? void 0 : G.removePass(F);
      se && (se.enabled = false), X && (X.enabled = false);
    };
  }, [G, e3, N, se, X]), x.useEffect(() => {
    const C = M.toneMapping;
    return M.toneMapping = Vi, () => {
      M.toneMapping = C;
    };
  }, [M]);
  const le = x.useMemo(() => ({ composer: G, normalPass: se, downSamplingPass: X, resolutionScale: s, camera: N, scene: j }), [G, se, X, s, N, j]);
  return x.useImperativeHandle(E, () => G, [G]), l.jsx(zc.Provider, { value: le, children: l.jsx("group", { ref: V, children: e3 }) });
}));
let Qc = 0;
const $s = /* @__PURE__ */ new WeakMap(), jc = (e3, t) => function({ blendFunction: r = t == null ? void 0 : t.blendFunction, opacity: s = t == null ? void 0 : t.opacity, ...n }) {
  let a = $s.get(e3);
  if (!a) {
    const d = `@react-three/postprocessing/${e3.name}-${Qc++}`;
    Mn({ [d]: e3 }), $s.set(e3, a = d);
  }
  const o = vt((d) => d.camera), u = xi.useMemo(() => [...(t == null ? void 0 : t.args) ?? [], ...n.args ?? [{ ...t, ...n }]], [JSON.stringify(n)]);
  return l.jsx(a, { camera: o, "blendMode-blendFunction": r, "blendMode-opacity-value": s, ...n, args: u });
}, Yc = jc(Cc), os = 64;
function Wc() {
  return l.jsxs("group", { children: [l.jsx(_c, {}), l.jsx(Vc, {}), l.jsx(Xc, {}), l.jsx(Zc, {})] });
}
function Vc() {
  const e3 = x.useMemo(() => Array.from({ length: os }).map((t, r) => {
    const s = r / os * Math.PI * 2, n = Math.PI * tt / os + 0.35;
    return { angle: s, half: n };
  }), []);
  return l.jsx(at, { type: "fixed", colliders: false, friction: 1, children: e3.map(({ angle: t, half: r }, s) => l.jsxs("group", { position: [Math.cos(t) * tt, Ct, Math.sin(t) * tt], rotation: [0, -t, 0], children: [l.jsx(gr, { args: [Rt / 2, 0.35, r], position: [0, -0.35, 0] }), [-1, 1].map((n) => l.jsx(gr, { args: [0.35, 0.55, r], position: [n * Rt / 2, 0.2, 0] }, n))] }, s)) });
}
function _c() {
  return l.jsxs("group", { position: [0, Ct, 0], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], receiveShadow: true, children: [l.jsx("ringGeometry", { args: [tt - Rt / 2, tt + Rt / 2, 128] }), l.jsx("meshStandardMaterial", { color: W.deck, roughness: 0.45, metalness: 0.6, side: Je })] }), [-Rt / 2, Rt / 2].map((e3, t) => l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.16, 0], children: [l.jsx("ringGeometry", { args: [tt + e3 - 0.2, tt + e3 + 0.2, 128] }), l.jsx("meshStandardMaterial", { color: t ? W.magenta : W.cyan, emissive: t ? W.magenta : W.cyan, emissiveIntensity: 3.4, toneMapped: false, side: Je })] }, e3)), l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -0.45, 0], children: [l.jsx("ringGeometry", { args: [tt - 1.6, tt + 1.6, 96] }), l.jsx("meshStandardMaterial", { color: W.cyan, emissive: W.cyan, emissiveIntensity: 1.1, toneMapped: false, side: Je })] })] });
}
function Xc() {
  const e3 = _i();
  return l.jsxs("group", { children: [l.jsxs(At, { limit: e3.length, castShadow: true, children: [l.jsx("cylinderGeometry", { args: [0.7, 1.3, Ct, 6] }), l.jsx("meshStandardMaterial", { color: W.deckEdge, roughness: 0.6, metalness: 0.4, flatShading: true }), e3.map(([t, r], s) => l.jsx(mt, { position: [t, Ct / 2, r] }, s))] }), l.jsx(at, { type: "fixed", colliders: false, children: e3.map(([t, r], s) => l.jsx(Bs, { args: [Ct / 2, 1.2], position: [t, Ct / 2, r] }, s)) }), l.jsxs(At, { limit: e3.length, children: [l.jsx("torusGeometry", { args: [1.5, 0.16, 6, 16] }), l.jsx("meshStandardMaterial", { color: W.cyan, emissive: W.cyan, emissiveIntensity: 2.8, toneMapped: false }), e3.map(([t, r], s) => l.jsx(mt, { position: [t, Ct - 2.4, r], rotation: [Math.PI / 2, 0, 0] }, s))] })] });
}
const Kc = l.jsx("boxGeometry", { args: [0.5, 0.3, 4.5] });
function Zc() {
  const e3 = x.useRef(null), t = x.useMemo(() => Array.from({ length: 14 }).map((r, s) => ({ angle: s / 14 * Math.PI * 2, direction: s % 2 ? 1 : -1, offset: s % 2 ? 1.9 : -1.9, speed: 0.055 + s % 5 * 0.012, color: s % 2 ? W.magenta : W.cyan })), []);
  return Pe((r, s) => {
    e3.current && e3.current.children.forEach((n, a) => {
      const o = t[a];
      o.angle += s * o.speed * o.direction;
      const u = tt + o.offset;
      n.position.set(Math.cos(o.angle) * u, Ct + 0.4, Math.sin(o.angle) * u), n.rotation.y = -o.angle + Math.PI / 2;
    });
  }), l.jsx("group", { ref: e3, children: t.map((r, s) => l.jsxs("mesh", { children: [Kc, l.jsx("meshStandardMaterial", { color: r.color, emissive: r.color, emissiveIntensity: 6, toneMapped: false })] }, s)) });
}
const en = { A: "01110 10001 10001 11111 10001 10001 10001", B: "11110 10001 10001 11110 10001 10001 11110", C: "01111 10000 10000 10000 10000 10000 01111", D: "11110 10001 10001 10001 10001 10001 11110", E: "11111 10000 10000 11110 10000 10000 11111", F: "11111 10000 10000 11110 10000 10000 10000", G: "01111 10000 10000 10111 10001 10001 01111", H: "10001 10001 10001 11111 10001 10001 10001", I: "11111 00100 00100 00100 00100 00100 11111", J: "00111 00010 00010 00010 00010 10010 01100", K: "10001 10010 10100 11000 10100 10010 10001", L: "10000 10000 10000 10000 10000 10000 11111", M: "10001 11011 10101 10101 10001 10001 10001", N: "10001 11001 10101 10011 10001 10001 10001", O: "01110 10001 10001 10001 10001 10001 01110", P: "11110 10001 10001 11110 10000 10000 10000", Q: "01110 10001 10001 10001 10101 10010 01101", R: "11110 10001 10001 11110 10100 10010 10001", S: "01111 10000 10000 01110 00001 00001 11110", T: "11111 00100 00100 00100 00100 00100 00100", U: "10001 10001 10001 10001 10001 10001 01110", V: "10001 10001 10001 10001 10001 01010 00100", W: "10001 10001 10001 10101 10101 11011 10001", X: "10001 10001 01010 00100 01010 10001 10001", Y: "10001 10001 01010 00100 00100 00100 00100", Z: "11111 00001 00010 00100 01000 10000 11111", 0: "01110 10001 10011 10101 11001 10001 01110", 1: "00100 01100 00100 00100 00100 00100 01110", 2: "01110 10001 00001 00010 00100 01000 11111", 3: "11110 00001 00001 01110 00001 00001 11110", 4: "00010 00110 01010 10010 11111 00010 00010", 5: "11111 10000 11110 00001 00001 10001 01110", 6: "00110 01000 10000 11110 10001 10001 01110", 7: "11111 00001 00010 00100 01000 01000 01000", 8: "01110 10001 10001 01110 10001 10001 01110", 9: "01110 10001 10001 01111 00001 00010 01100", "!": "00100 00100 00100 00100 00100 00000 00100", "?": "01110 10001 00001 00110 00100 00000 00100", ".": "00000 00000 00000 00000 00000 01100 01100", "'": "00100 00100 00000 00000 00000 00000 00000", "&": "01100 10010 10010 01100 10101 10010 01101", "-": "00000 00000 00000 11111 00000 00000 00000", "/": "00001 00010 00010 00100 01000 01000 10000", " ": "00000 00000 00000 00000 00000 00000 00000" }, cs = 5, ls = 7, tn = 1;
function Jc(e3) {
  const t = e3.toUpperCase().split(""), r = t.length * cs + Math.max(0, t.length - 1) * tn, s = [];
  return t.forEach((n, a) => {
    const o = (en[n] ?? en["?"]).split(" "), u = a * (cs + tn);
    o.forEach((d, f) => {
      for (let p = 0; p < cs; p += 1) d[p] === "1" && s.push({ x: u + p - (r - 1) / 2, y: ls - 1 - f - (ls - 1) / 2 });
    });
  }), { cubes: s, width: r, height: ls };
}
const Or = new Sn();
function It({ children: e3, position: t = [0, 0, 0], rotation: r = [0, 0, 0], size: s = 1, depth: n = 1, color: a = "#ffffff", emissive: o = "#000000", emissiveIntensity: u = 0, wave: d = 0 }) {
  const f = x.useRef(null), { cubes: p } = x.useMemo(() => Jc(e3), [e3]), v = (E) => {
    f.current && (p.forEach((M, L) => {
      const K = d ? Math.sin(E * 1.6 + M.x * 0.35) * d : 0;
      Or.position.set(M.x * s, M.y * s + K, 0), Or.scale.setScalar(1), Or.updateMatrix(), f.current.setMatrixAt(L, Or.matrix);
    }), f.current.instanceMatrix.needsUpdate = true);
  };
  return x.useLayoutEffect(() => v(0)), Pe(({ clock: E }) => {
    d && v(E.elapsedTime);
  }), l.jsxs("instancedMesh", { ref: f, args: [void 0, void 0, p.length], position: t, rotation: r, castShadow: true, receiveShadow: true, children: [l.jsx("boxGeometry", { args: [s * 0.96, s * 0.96, n] }), l.jsx("meshStandardMaterial", { color: a, emissive: o, emissiveIntensity: u, roughness: 0.35, metalness: 0.1, flatShading: true })] });
}
const kr = [0.4, 0.8, 1.2, 1.6].map((e3) => Math.PI * e3), Kn = (e3) => jt(e3), us = 9, qc = 16, he = { running: false, checkpoint: 0, time: 0, armed: true }, rn = (e3) => Kn(e3), Pr = (e3, t, r, s) => {
  const n = e3 - r.x, a = t - r.z;
  return n * n + a * a < s * s;
};
function $c(e3, t, r, s) {
  const n = rn(0);
  if (he.running) {
    he.time += r;
    const a = kr[he.checkpoint];
    a !== void 0 && Pr(e3, t, rn(a), us) && (he.checkpoint += 1), he.checkpoint >= kr.length && Pr(e3, t, n, us) && (s.finishLap(he.time), he.running = false, he.checkpoint = 0, he.time = 0, he.armed = false), (Math.hypot(e3, t) < 100 || I.y < 16) && (he.running = false, he.checkpoint = 0, he.time = 0);
  } else he.armed && Pr(e3, t, n, us) && (he.running = true, he.checkpoint = 0, he.time = 0, s.startLap(), Xi(), he.armed = false);
  !he.armed && !Pr(e3, t, n, qc) && (he.armed = true), I.raceRunning = he.running, I.raceTime = he.time, I.raceCheckpoint = he.checkpoint, I.raceTotal = kr.length;
}
function el() {
  he.running = false, he.checkpoint = 0, he.time = 0, he.armed = true;
}
const kt = ta * 2, Dt = 4.6, tl = 13, ds = 16, Fr = 5, sn = 0.6, Ur = (e3) => new xe(e3.x, e3.y, e3.z), nn = (e3) => e3.map((t) => ({ position: Ur(t.position), forward: Ur(t.forward), right: Ur(t.right), up: Ur(t.up) }));
function rl() {
  const e3 = x.useMemo(() => nn(Ki()), []), t = x.useMemo(() => nn(Zi()), []);
  return l.jsxs("group", { children: [l.jsx(sl, { frames: e3 }), l.jsx(al, { frames: e3 }), l.jsx(ol, { frames: e3 }), l.jsx(hl, { frames: t }), l.jsx(dl, { frames: e3 }), l.jsx(Al, {}), l.jsx(ml, {}), l.jsx(xl, {})] });
}
function Nt(e3, t, r = true) {
  const s = [], n = (u, d, f) => {
    s.push(u.position.x + u.right.x * d + u.up.x * f, u.position.y + u.right.y * d + u.up.y * f, u.position.z + u.right.z * d + u.up.z * f);
  }, a = typeof e3 == "function" ? e3 : () => e3;
  for (let u = 0; u < t.length - 1; u += 1) {
    const d = t[u], f = t[u + 1], p = a(u), v = a(u + 1), E = p.length;
    for (let M = 0; M < (r ? E : E - 1); M += 1) {
      const L = (M + 1) % E;
      n(d, p[M][0], p[M][1]), n(f, v[M][0], v[M][1]), n(f, v[L][0], v[L][1]), n(d, p[M][0], p[M][1]), n(f, v[L][0], v[L][1]), n(d, p[L][0], p[L][1]);
    }
  }
  const o = new mr();
  return o.setAttribute("position", new Ss(s, 3)), o.computeVertexNormals(), o;
}
const rt = kt / 2, Zn = (() => {
  const e3 = new mr(), t = (r, s, n, a, o, u) => [r, 0, s, n, 0, a, o, 0, u];
  return e3.setAttribute("position", new Ss([...t(-1.7, 0.1, 1.7, 0.1, 0, 2.4), ...t(-0.7, -2.2, 0.7, -2.2, 0.7, 0.1), ...t(-0.7, -2.2, 0.7, 0.1, -0.7, 0.1)], 3)), e3.computeVertexNormals(), e3;
})();
function sl({ frames: e3 }) {
  const t = x.useMemo(() => Nt([[-rt, 0], [rt, 0], [rt, -0.5], [-rt, -0.5]], e3), [e3]), r = x.useMemo(() => Jn(e3), [e3]), s = x.useMemo(() => qn(e3, rt, nl(e3), void 0, r), [e3, r]);
  return l.jsxs("group", { children: [l.jsx("mesh", { geometry: t, receiveShadow: true, children: l.jsx("meshStandardMaterial", { color: "#242a5c", emissive: "#2b3370", emissiveIntensity: 0.55, roughness: 0.55, metalness: 0.4, flatShading: true }) }), l.jsx($n, { ...s }), l.jsx(il, { frames: e3 })] });
}
function Jn(e3) {
  const t = e3.length - 1, r = new Map(e3.map((s) => [s, Dt]));
  for (const s of In) {
    const n = Math.round(s / (Math.PI * 2) * t);
    for (let a = -Fr; a <= ds + Fr; a += 1) {
      const o = a < 0 ? 1 + a / Fr : a > ds ? 1 - (a - ds) / Fr : 1, u = o * o * (3 - 2 * o), d = e3[((n + a) % t + t) % t], f = Dt + (tl - Dt) * u;
      r.set(d, Math.max(r.get(d) ?? Dt, f));
    }
  }
  return (s) => r.get(s) ?? Dt;
}
function nl(e3) {
  const t = e3.length - 1, r = [], s = [];
  for (let n = 0; n <= t; n += 1) {
    if (Tn(n / t * Math.PI * 2 % (Math.PI * 2))) {
      r.length > 1 && s.push([...r]), r.length = 0;
      continue;
    }
    r.push(e3[n]);
  }
  if (r.length > 1 && s.push(r), s.length > 1 && s[0][0] === e3[0]) {
    const n = s.shift();
    s[s.length - 1] = [...s[s.length - 1], ...n];
  }
  return s;
}
function qn(e3, t, r, s, n) {
  const a = { kerbs: [], screens: [], caps: [], cables: [] }, o = typeof t == "function" ? t : () => t, u = n ?? (() => Dt), d = (f, p, v, E, M) => (L) => {
    const K = p[L], Q = f * o(K), j = u(K), N = v === null ? j : v < 0 ? j * -v : v, G = E === null ? j + 0.16 : E < 0 ? j * -E + 0.13 : E;
    return [[Q - M, N], [Q + M, N], [Q + M, G], [Q - M, G]];
  };
  for (const f of [-1, 1]) {
    const p = (f < 0 ? r : s) ?? [e3];
    for (const v of p) if (!(v.length < 2)) {
      a.kerbs.push(Nt(d(f, v, 0, sn, 0.32), v)), a.screens.push(Nt(d(f, v, sn, null, 0.07), v)), a.caps.push(Nt(d(f, v, null, null, 0.2), v));
      for (const E of [-0.42, -0.72]) a.cables.push(Nt(d(f, v, E, E, 0.13), v));
    }
  }
  return a;
}
function $n({ kerbs: e3, screens: t, caps: r, cables: s }) {
  return l.jsxs("group", { children: [e3.map((n, a) => l.jsx("mesh", { geometry: n, children: l.jsx("meshStandardMaterial", { color: "#1b2050", roughness: 0.6, metalness: 0.35, flatShading: true }) }, `k${a}`)), t.map((n, a) => l.jsx("mesh", { geometry: n, children: l.jsx("meshBasicMaterial", { color: W.cyan, transparent: true, opacity: 0.14, depthWrite: false, side: Je, toneMapped: false }) }, `s${a}`)), r.map((n, a) => l.jsx("mesh", { geometry: n, children: l.jsx("meshStandardMaterial", { color: W.cyan, emissive: W.cyan, emissiveIntensity: 2.4, toneMapped: false }) }, `c${a}`)), s.map((n, a) => l.jsx("mesh", { geometry: n, children: l.jsx("meshStandardMaterial", { color: W.cyan, emissive: W.cyan, emissiveIntensity: 1.1, toneMapped: false }) }, `w${a}`))] });
}
function il({ frames: e3 }) {
  const t = x.useMemo(() => {
    const s = [], n = new Vr();
    for (let a = 0; a < e3.length - 1; a += 3) {
      const o = e3[a], u = o.forward;
      n.makeBasis(o.right, o.up, u);
      const d = new pt().setFromRotationMatrix(n);
      for (const f of [-1, 1]) s.push({ position: o.position.clone().addScaledVector(o.right, f * (rt - 1.1)).addScaledVector(o.up, 0.3), quaternion: d });
    }
    return s;
  }, [e3]), r = x.useMemo(() => {
    const s = [], n = new Vr();
    for (let a = 0; a < e3.length - 1; a += 5) {
      const o = e3[a];
      n.makeBasis(o.right, o.up, o.forward), s.push({ position: o.position.clone().addScaledVector(o.up, 0.3), quaternion: new pt().setFromRotationMatrix(n) });
    }
    return s;
  }, [e3]);
  return l.jsxs("group", { children: [l.jsxs(At, { limit: t.length, range: t.length, children: [l.jsx("boxGeometry", { args: [0.5, 0.1, 0.5] }), l.jsx("meshStandardMaterial", { color: "#f2f5ff", emissive: "#cfe4ff", emissiveIntensity: 2.2, toneMapped: false }), t.map((s, n) => l.jsx(mt, { position: s.position, quaternion: s.quaternion }, n))] }), l.jsxs(At, { limit: r.length, range: r.length, children: [l.jsx("primitive", { object: Zn, attach: "geometry" }), l.jsx("meshStandardMaterial", { color: W.lime, emissive: W.lime, emissiveIntensity: 1.6, toneMapped: false, side: Je }), r.map((s, n) => l.jsx(mt, { position: s.position, quaternion: s.quaternion }, n))] })] });
}
function lr(e3, t, r, s, n, a, o) {
  const u = new Float32Array(24);
  let d = 0;
  for (const [f, p] of [e3, t].entries()) {
    const v = o && f ? o[0] : r, E = o && f ? o[1] : s;
    for (const [M, L] of [[v, n], [E, n], [E, a], [v, a]]) u[d++] = p.position.x + p.right.x * M + p.up.x * L, u[d++] = p.position.y + p.right.y * M + p.up.y * L, u[d++] = p.position.z + p.right.z * M + p.up.z * L;
  }
  return u;
}
function al({ frames: e3 }) {
  const t = x.useMemo(() => Jn(e3), [e3]), r = x.useMemo(() => {
    const s = [];
    for (let n = 0; n + 1 < e3.length; n += 1) {
      const a = e3[n], o = e3[n + 1], u = n / (e3.length - 1) * Math.PI * 2, d = [];
      if (n % 3 === 0 && n + 3 < e3.length) {
        const f = e3[n + 3];
        for (const p of [-1, 1]) p < 0 && Tn(u) || d.push({ side: p, points: lr(a, f, p * rt - 0.45, p * rt + 0.45, Math.max(t(a), t(f)), 0) });
      }
      s.push({ road: lr(a, o, -rt, rt, 0, -3.5), walls: d });
    }
    return s;
  }, [e3, t]);
  return l.jsx(at, { type: "fixed", colliders: false, friction: 1, children: r.map((s, n) => l.jsxs("group", { children: [l.jsx(pr, { args: [s.road] }), s.walls.map((a) => l.jsx(pr, { args: [a.points] }, a.side))] }, n)) });
}
function ol({ frames: e3 }) {
  const t = x.useMemo(() => e3.filter((r, s) => s % 12 === 0).map((r, s) => ({ base: r.position.clone().addScaledVector(r.right, (s % 2 ? 1 : -1) * (rt + 2.4)) })).filter((r) => Math.hypot(r.base.x, r.base.z) > yn + 6 && !Ji(r.base.x, r.base.z, 3)), [e3]);
  return l.jsxs("group", { children: [l.jsxs(At, { limit: t.length, range: t.length, children: [l.jsx("cylinderGeometry", { args: [0.7, 1.5, 1, 6] }), l.jsx("meshStandardMaterial", { color: W.deckEdge, roughness: 0.6, flatShading: true }), t.map((r, s) => l.jsx(mt, { position: [r.base.x, r.base.y / 2 - 5, r.base.z], scale: [1, r.base.y + 10, 1] }, s))] }), l.jsxs(At, { limit: t.length, range: t.length, children: [l.jsx("octahedronGeometry", { args: [0.65, 0] }), l.jsx("meshStandardMaterial", { color: "#dfe9ff", emissive: "#bcd4ff", emissiveIntensity: 2.4, toneMapped: false }), t.map((r, s) => l.jsx(mt, { position: [r.base.x, r.base.y + 4.2, r.base.z] }, s))] })] });
}
const Kr = 3.6, cl = 1.9, ur = 14, dr = 7.2, ll = (() => {
  const e3 = Kr, t = ur, r = dr, s = [[-e3, 0, -t / 2], [e3, 0, -t / 2], [e3, r, t / 2], [-e3, r, t / 2], [-e3, 0, t / 2], [e3, 0, t / 2]], n = (u, d, f) => [...s[u], ...s[d], ...s[f]], a = new Float32Array([...n(0, 1, 2), ...n(0, 2, 3), ...n(4, 5, 1), ...n(4, 1, 0), ...n(5, 2, 1), ...n(4, 0, 3), ...n(4, 3, 5), ...n(3, 2, 5), ...n(3, 5, 4)]), o = new mr();
  return o.setAttribute("position", new Ss(a, 3)), o.computeVertexNormals(), o;
})(), ul = (() => {
  const e3 = Kr, t = ur, r = dr;
  return new Float32Array([-e3, 0, -t / 2, e3, 0, -t / 2, -e3, 0, t / 2, e3, 0, t / 2, -e3, r, t / 2, e3, r, t / 2]);
})();
function dl({ frames: e3 }) {
  const t = x.useMemo(() => In.map((r, s) => {
    const n = e3.length - 1, a = Math.round(r / (Math.PI * 2) * n) % n, o = e3[a], u = s % 2 ? 1 : -1, d = new Vr().makeBasis(o.right, o.up, o.forward);
    return { position: o.position.clone().addScaledVector(o.right, u * cl).addScaledVector(o.up, 0.02), quaternion: new pt().setFromRotationMatrix(d) };
  }), [e3]);
  return l.jsx("group", { children: t.map((r, s) => l.jsxs("group", { position: r.position, quaternion: r.quaternion, children: [l.jsx("mesh", { geometry: ll, castShadow: true, receiveShadow: true, children: l.jsx("meshStandardMaterial", { color: "#33306e", emissive: W.lime, emissiveIntensity: 0.28, roughness: 0.5, metalness: 0.35, flatShading: true }) }), l.jsxs("mesh", { position: [0, dr + 0.06, ur / 2], children: [l.jsx("boxGeometry", { args: [Kr * 2, 0.14, 0.3] }), l.jsx("meshStandardMaterial", { color: W.lime, emissive: W.lime, emissiveIntensity: 3, toneMapped: false })] }), [-1, 1].map((n) => l.jsxs("mesh", { position: [n * Kr, dr / 2 - 0.1, 0], rotation: [Math.atan2(dr, ur), 0, 0], children: [l.jsx("boxGeometry", { args: [0.12, 0.12, ur] }), l.jsx("meshStandardMaterial", { color: W.amber, emissive: W.amber, emissiveIntensity: 2.6, toneMapped: false })] }, n)), l.jsx(at, { type: "fixed", colliders: false, friction: 1, children: l.jsx(pr, { args: [ul] }) })] }, s)) });
}
function hl({ frames: e3 }) {
  const t = x.useMemo(() => {
    const o = _r(), u = Math.min(o - 1, 7);
    return e3.map((d, f) => {
      const p = e3.length - 1 - f;
      if (p >= u) return rs;
      const v = p / u;
      return 0.45 + (rs - 0.45) * v * v;
    });
  }, [e3]), r = x.useMemo(() => {
    const o = new Map(e3.map((u, d) => [u, t[d]]));
    return (u) => o.get(u) ?? rs;
  }, [e3, t]), s = x.useMemo(() => Nt((o) => [[-t[o], 0], [t[o], 0], [t[o], -0.5], [-t[o], -0.5]], e3, true), [e3, t]), n = x.useMemo(() => qn(e3, r, [e3], [e3.slice(0, Math.max(e3.length - _r(), 2))]), [e3, r]), a = x.useMemo(() => {
    const o = [], u = new Vr();
    for (let d = 2; d < e3.length - 1; d += 4) {
      const f = e3[d];
      u.makeBasis(f.right, f.up, f.forward), o.push({ position: f.position.clone().addScaledVector(f.up, 0.06), quaternion: new pt().setFromRotationMatrix(u) });
    }
    return o;
  }, [e3]);
  return l.jsxs("group", { children: [l.jsx("mesh", { geometry: s, receiveShadow: true, children: l.jsx("meshStandardMaterial", { color: "#232858", emissive: "#2a3170", emissiveIntensity: 0.5, roughness: 0.55, metalness: 0.4, flatShading: true }) }), l.jsx($n, { ...n }), l.jsxs(At, { limit: a.length, geometry: fl, children: [l.jsx("meshStandardMaterial", { color: W.lime, emissive: W.lime, emissiveIntensity: 2, toneMapped: false }), a.map((o, u) => l.jsx(mt, { position: o.position, quaternion: o.quaternion }, u))] }), l.jsx(pl, { frames: e3, widths: t }), l.jsx(vl, { frames: e3 })] });
}
const fl = new qi(3.4, 0.08, 1.1);
function gl(e3, t) {
  return t >= e3.length - _r();
}
function pl({ frames: e3, widths: t }) {
  const r = x.useMemo(() => {
    const s = [];
    for (let n = 0; n + 1 < e3.length; n += 1) {
      const a = e3[n], o = e3[n + 1], u = t[n], d = t[n + 1], f = [];
      if (n % 2 === 0 && n + 2 < e3.length) {
        const p = e3[n + 2], v = t[n + 2];
        f.push(lr(a, p, -u - 0.45, -u + 0.45, Dt, 0, [-v - 0.45, -v + 0.45])), gl(e3, n) || f.push(lr(a, p, u - 0.45, u + 0.45, Dt, 0, [v - 0.45, v + 0.45]));
      }
      s.push({ road: lr(a, o, -u, u, 0, -0.9, [-d, d]), walls: f });
    }
    return s;
  }, [e3, t]);
  return l.jsx(at, { type: "fixed", colliders: false, friction: 1, children: r.map((s, n) => l.jsxs("group", { children: [l.jsx(pr, { args: [s.road] }), s.walls.map((a, o) => l.jsx(pr, { args: [a] }, o))] }, n)) });
}
function vl({ frames: e3 }) {
  const t = x.useMemo(() => {
    const r = [];
    for (let s = 4; s < e3.length - _r(); s += 7) {
      const n = e3[s], { x: a, z: o } = n.position, u = Math.hypot(a, o);
      if (Math.abs(u - tt) < Rt / 2 + 3 || $i(a, o, 3) || ea(a, o, 3)) continue;
      const d = u < yn ? 0 : -8, f = n.position.y - d;
      f < 3 || r.push({ position: new xe(a, (n.position.y + d) / 2 - 0.5, o), height: f });
    }
    return r;
  }, [e3]);
  return l.jsxs("group", { children: [l.jsx(at, { type: "fixed", colliders: false, children: t.map((r, s) => l.jsx(Bs, { args: [r.height / 2, 1.3], position: r.position }, s)) }), t.map((r, s) => l.jsxs("mesh", { position: r.position, children: [l.jsx("cylinderGeometry", { args: [0.75, 1.5, r.height, 6] }), l.jsx("meshStandardMaterial", { color: W.deckEdge, roughness: 0.65, flatShading: true })] }, s))] });
}
function Al() {
  const e3 = jt(0), t = jt(0.02), r = Math.atan2(t.x - e3.x, t.z - e3.z);
  return l.jsxs("group", { position: [e3.x, e3.y, e3.z], rotation: [0, r, 0], children: [[-1, 1].map((s) => l.jsxs("mesh", { position: [s * kt / 2, 5, 0], castShadow: true, children: [l.jsx("boxGeometry", { args: [1.1, 10, 1.1] }), l.jsx("meshStandardMaterial", { color: W.deckEdge, roughness: 0.5, metalness: 0.5, flatShading: true })] }, s)), [8.4, 9.6].map((s) => l.jsxs("mesh", { position: [0, s, 0], children: [l.jsx("boxGeometry", { args: [kt + 1.6, 0.5, 0.6] }), l.jsx("meshStandardMaterial", { color: W.lime, emissive: W.lime, emissiveIntensity: 0.55 })] }, s)), Array.from({ length: 10 }).map((s, n) => [0, 1].map((a) => l.jsxs("mesh", { position: [-kt / 2 + 0.75 + n * 1.5, 0.3, a * 1.5 - 0.75], children: [l.jsx("boxGeometry", { args: [1.5, 0.08, 1.5] }), l.jsx("meshStandardMaterial", { color: (n + a) % 2 ? "#f2f5ff" : "#141634", emissive: (n + a) % 2 ? "#f2f5ff" : "#000000", emissiveIntensity: (n + a) % 2 ? 0.5 : 0 })] }, `${n}-${a}`))), l.jsx(It, { position: [0, 11.6, -0.6], rotation: [0, Math.PI / 2, 0], size: 0.5, depth: 0.4, color: "#eaf3ff", emissive: W.lime, emissiveIntensity: 1.1, children: "START" }), l.jsx(It, { position: [0, 11.6, 0.6], rotation: [0, -Math.PI / 2, 0], size: 0.5, depth: 0.4, color: "#eaf3ff", emissive: W.amber, emissiveIntensity: 1.1, children: "FINISH" }), l.jsx("mesh", { geometry: Zn, position: [0, 0.34, 8], scale: [2, 1, 2], children: l.jsx("meshStandardMaterial", { color: W.lime, emissive: W.lime, emissiveIntensity: 2.6, toneMapped: false, side: Je }) }), l.jsx("pointLight", { position: [0, 7, 0], color: W.lime, intensity: 26, distance: 38, decay: 2 })] });
}
function ml() {
  const e3 = x.useRef(null);
  return Pe(({ clock: t }) => {
    e3.current && e3.current.children.forEach((r, s) => {
      const n = r.children[0];
      if (!n) return;
      const a = n.material, o = I.raceCheckpoint === s && I.raceRunning;
      a.emissiveIntensity = o ? 2.6 + Math.sin(t.elapsedTime * 6) * 1.2 : I.raceRunning ? 0.4 : 1.2;
    });
  }), l.jsx("group", { ref: e3, children: kr.map((t, r) => {
    const s = Kn(t), n = jt(t + 0.02), a = Math.atan2(n.x - s.x, n.z - s.z);
    return l.jsxs("group", { position: [s.x, s.y, s.z], rotation: [0, a, 0], children: [l.jsxs("mesh", { position: [0, 4, 0], children: [l.jsx("boxGeometry", { args: [kt, 0.5, 0.5] }), l.jsx("meshStandardMaterial", { color: W.magenta, emissive: W.magenta, emissiveIntensity: 1.2, toneMapped: false })] }), [-1, 1].map((o) => l.jsxs("mesh", { position: [o * kt / 2, 2, 0], children: [l.jsx("boxGeometry", { args: [0.4, 4, 0.4] }), l.jsx("meshStandardMaterial", { color: W.deckEdge, roughness: 0.6, flatShading: true })] }, o)), l.jsx(It, { position: [0, 5.4, 0], rotation: [0, Math.PI / 2, 0], size: 0.34, depth: 0.3, color: "#f6e6ff", emissive: W.magenta, emissiveIntensity: 1, children: String(r + 1) })] }, r);
  }) });
}
function xl() {
  const e3 = x.useRef(false), t = Xr((r) => r.circuitMode);
  return Pe((r, s) => {
    const a = Math.hypot(I.x, I.z) > 105 && I.y > 17;
    a !== e3.current && (e3.current = a, a ? nt.askCircuitMode() : (nt.leaveCircuit(), el())), t === "race" && $c(I.x, I.z, s, nt);
  }), null;
}
const an = 70, nr = 120, on = (() => {
  const t = document.createElement("canvas");
  t.width = 64, t.height = 64;
  const r = t.getContext("2d"), s = r.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
  s.addColorStop(0, "rgba(255,255,255,0.9)"), s.addColorStop(0.45, "rgba(255,255,255,0.35)"), s.addColorStop(1, "rgba(255,255,255,0)"), r.fillStyle = s, r.fillRect(0, 0, 64, 64);
  const n = new Rn(t);
  return n.needsUpdate = true, n;
})(), ei = (e3) => ({ positions: new Float32Array(e3 * 3).fill(9999), life: new Float32Array(e3), sizes: new Float32Array(e3), next: 0 });
function ti(e3, t, r, s, n) {
  const a = e3.next % (e3.life.length || 1);
  e3.next += 1, e3.positions[a * 3] = t, e3.positions[a * 3 + 1] = r, e3.positions[a * 3 + 2] = s, e3.life[a] = 1, e3.sizes[a] = n;
}
function El() {
  return l.jsxs("group", { children: [l.jsx(wl, {}), l.jsx(Ml, {})] });
}
function wl() {
  const e3 = x.useRef(null), t = x.useMemo(() => ei(an), []), r = x.useMemo(() => {
    const s = new mr();
    return s.setAttribute("position", new Wr(t.positions, 3)), s.setAttribute("size", new Wr(t.sizes, 1)), s;
  }, [t]);
  return Pe((s, n) => {
    const a = I.driftActive && I.speed > 6;
    a && ti(t, I.x + (Math.random() - 0.5) * 1.1, I.y - 0.5, I.z + (Math.random() - 0.5) * 1.1, 1.4 + Math.random() * 1.6);
    for (let o = 0; o < an; o += 1) t.life[o] <= 0 || (t.life[o] -= n * 0.85, t.positions[o * 3 + 1] += n * 1.4, t.sizes[o] += n * 2.2, t.life[o] <= 0 && (t.positions[o * 3 + 1] = 9999));
    if (r.attributes.position.needsUpdate = true, r.attributes.size.needsUpdate = true, e3.current) {
      const o = e3.current.material;
      o.opacity = a ? 0.34 : 0.2;
    }
  }), l.jsx("points", { ref: e3, geometry: r, frustumCulled: false, children: l.jsx("pointsMaterial", { size: 5.5, map: on, alphaMap: on, color: "#c9cff2", transparent: true, opacity: 0.28, depthWrite: false, sizeAttenuation: true, toneMapped: false }) });
}
function Ml() {
  const e3 = x.useRef(null), t = x.useMemo(() => ei(nr), []), r = x.useMemo(() => new Sn(), []), s = x.useMemo(() => new Float32Array(nr), []);
  return Pe((n, a) => {
    if (e3.current) {
      if (I.driftActive && I.speed > 6) {
        const o = t.next % nr;
        s[o] = I.heading, ti(t, I.x, I.y - 0.72, I.z, 1);
      }
      for (let o = 0; o < nr; o += 1) {
        const u = t.life[o] > 0;
        u && (t.life[o] -= a * 0.12), r.position.set(t.positions[o * 3], t.positions[o * 3 + 1], t.positions[o * 3 + 2]), r.rotation.set(-Math.PI / 2, 0, -s[o]), r.scale.setScalar(u ? 1 : 1e-4), r.updateMatrix(), e3.current.setMatrixAt(o, r.matrix);
      }
      e3.current.instanceMatrix.needsUpdate = true;
    }
  }), l.jsxs("instancedMesh", { ref: e3, args: [void 0, void 0, nr], frustumCulled: false, children: [l.jsx("planeGeometry", { args: [2, 1.1] }), l.jsx("meshBasicMaterial", { color: "#0a0a16", transparent: true, opacity: 0.38, depthWrite: false })] });
}
const Lr = 340, Zr = 520, Cl = 150;
function Dl() {
  const e3 = ra(5150);
  return Array.from({ length: Cl }, () => {
    const t = e3() * Math.PI * 2, r = Lr + e3() * (Zr - Lr), s = 1 - (r - Lr) / (Zr - Lr), n = 26 + e3() * 90 * (0.4 + s), a = 12 + e3() * 22;
    return { position: [Math.cos(t) * r, n / 2, Math.sin(t) * r], scale: [a, n, a * (0.7 + e3() * 0.6)], rotation: e3() * Math.PI, lit: e3() > 0.55 };
  });
}
function Bl() {
  const e3 = x.useMemo(Dl, []), t = e3.filter((s) => !s.lit), r = e3.filter((s) => s.lit);
  return l.jsxs("group", { children: [l.jsxs(At, { limit: t.length, range: t.length, children: [l.jsx("boxGeometry", { args: [1, 1, 1] }), l.jsx("meshStandardMaterial", { color: "#16183a", roughness: 0.9, flatShading: true }), t.map((s, n) => l.jsx(mt, { position: s.position, scale: s.scale, rotation: [0, s.rotation, 0] }, n))] }), l.jsxs(At, { limit: r.length, range: r.length, children: [l.jsx("boxGeometry", { args: [1, 1, 1] }), l.jsx("meshStandardMaterial", { color: "#1d2150", emissive: W.cyan, emissiveIntensity: 0.35, roughness: 0.7, flatShading: true }), r.map((s, n) => l.jsx(mt, { position: s.position, scale: s.scale, rotation: [0, s.rotation, 0] }, n))] }), l.jsxs("mesh", { position: [0, 26, 0], rotation: [0, 0, 0], children: [l.jsx("cylinderGeometry", { args: [Zr + 40, Zr + 40, 90, 48, 1, true] }), l.jsx("meshBasicMaterial", { color: "#2a1c5c", side: ir, transparent: true, opacity: 0.42, depthWrite: false })] })] });
}
const hs = (() => {
  const t = document.createElement("canvas");
  t.width = 512, t.height = 512;
  const r = t.getContext("2d");
  for (let n = 0; n < 260; n += 1) {
    const a = Math.random() * 512, o = Math.random() * 512, u = 0.6 + Math.random() * 1.8, d = r.createRadialGradient(a, o, 0, a, o, u * 3);
    d.addColorStop(0, `rgba(200,225,255,${0.35 + Math.random() * 0.4})`), d.addColorStop(1, "rgba(200,225,255,0)"), r.fillStyle = d, r.fillRect(a - u * 3, o - u * 3, u * 6, u * 6);
  }
  const s = new Rn(t);
  return s.wrapS = s.wrapT = sa, s.repeat.set(6, 6), s;
})();
function Sl() {
  return l.jsx("group", { children: l.jsx(Il, {}) });
}
function Il() {
  const e3 = x.useRef(null);
  return Pe(({ clock: t }) => {
    if (e3.current) {
      const r = e3.current.material;
      hs.offset.x = t.elapsedTime * 4e-3, hs.offset.y = Math.sin(t.elapsedTime * 0.05) * 0.02, r.opacity = 0.5 + Math.sin(t.elapsedTime * 0.4) * 0.12;
    }
  }), l.jsxs("group", { position: [0, -8.5, 0], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], children: [l.jsx("circleGeometry", { args: [900, 64] }), l.jsx("meshBasicMaterial", { color: "#0a1230" })] }), l.jsxs("mesh", { ref: e3, rotation: [-Math.PI / 2, 0, 0], position: [0, 0.3, 0], children: [l.jsx("circleGeometry", { args: [900, 64] }), l.jsx("meshBasicMaterial", { map: hs, transparent: true, opacity: 0.3, depthWrite: false, blending: Cn, toneMapped: false })] })] });
}
function Tl() {
  const e3 = x.useRef(null);
  return Pe(() => {
    const t = e3.current;
    if (!t) return;
    const r = I.raceRunning && na() ? ia(I.raceTime) : null;
    if (!r) {
      t.visible = false;
      return;
    }
    t.visible = true, t.position.set(r.x, r.y, r.z), t.rotation.y = r.h;
  }), l.jsxs("group", { ref: e3, visible: false, children: [l.jsxs("mesh", { position: [0, 0.02, 0], children: [l.jsx("boxGeometry", { args: [1.96, 0.44, 4] }), l.jsx("meshBasicMaterial", { color: W.cyan, transparent: true, opacity: 0.2, depthWrite: false, toneMapped: false })] }), l.jsxs("mesh", { position: [0, 0.42, -0.16], children: [l.jsx("boxGeometry", { args: [1.32, 0.46, 1.9] }), l.jsx("meshBasicMaterial", { color: W.cyan, transparent: true, opacity: 0.16, depthWrite: false, toneMapped: false })] }), [-1, 1].map((t) => l.jsxs("mesh", { position: [t, 0.06, 0.1], children: [l.jsx("boxGeometry", { args: [0.08, 0.12, 3.6] }), l.jsx("meshBasicMaterial", { color: W.cyan, transparent: true, opacity: 0.75, toneMapped: false })] }, t))] });
}
const yl = 62, cn = 0.22, Rl = 34, bl = 58, Ol = 1.6, ar = 30, ln = 44, Pl = 96, Fl = 2.6, Ul = 1.45, un = 0.9, Ll = 0.22, Ms = 100, Gl = 33, Hl = 34, Nl = 22, zl = 12, kl = 16, Ql = 2.2, dn = 0.5, jl = 0.22, Yl = 14, Wl = 0.35, Vl = 85, hn = 7.5, _l = 55, Xl = 13, Kl = 7, Zl = 11.5, Jl = 3.4, ql = 5.4;
function $l(e3, t, r) {
  const s = Math.min(Math.abs(e3) / t, 1), n = cn + (1 - cn) * (1 - s * s);
  return (r ? Pl : yl) * n;
}
function eu() {
  const { bloom: e3, aberration: t, vignette: r } = x.useMemo(() => ({ bloom: new uc({ intensity: 1, luminanceThreshold: 0.82, luminanceSmoothing: 0.2, mipmapBlur: true, radius: 0.6, kernelSize: es.LARGE }), aberration: new fc({ offset: new Me(0, 0), radialModulation: false, modulationOffset: 0 }), vignette: new yc({ offset: 0.3, darkness: 0.75 }) }), []), s = x.useMemo(() => ({ pace: 0, boost: 0 }), []);
  return Pe((n, a) => {
    const o = Math.min(Math.abs(I.speed) / ar, 1.4), u = I.boosting ? 1 : 0, d = 1 - Math.pow(4e-3, a);
    s.pace = Le.lerp(s.pace, o, d), s.boost = Le.lerp(s.boost, u, d);
    const { pace: f, boost: p } = s, v = f * 8e-4 + p * 16e-4;
    t.offset.set(v, v * 0.6), r.darkness = 0.7 + f * 0.22 + p * 0.16, e3.intensity = 1.15 + f * 0.2 + p * 0.7;
  }), l.jsxs(l.Fragment, { children: [l.jsx("primitive", { object: e3 }), l.jsx("primitive", { object: t }), l.jsx("primitive", { object: r })] });
}
function tu({ zone: e3 }) {
  const [t, r] = e3.position, s = Xr((p) => p.activeZone === e3.id), n = Xr((p) => p.visited.includes(e3.id)), a = x.useRef(null), o = x.useRef(null), u = x.useRef(null), d = x.useMemo(() => Math.atan2(-t, -r), [t, r]), f = x.useMemo(() => Array.from({ length: 10 }).map((p, v) => {
    const E = v / 10 * Math.PI * 2 + Math.PI / 10;
    return [Math.cos(E) * (e3.radius + 4), Math.sin(E) * (e3.radius + 4)];
  }), [e3.radius]);
  return Pe(({ clock: p }) => {
    const v = p.elapsedTime;
    a.current && (a.current.position.y = 16 + Math.sin(v * 0.9) * 0.5, a.current.rotation.y = d + Math.sin(v * 0.4) * 0.05);
    const E = s ? 1.5 + Math.sin(v * 4) * 0.35 : 1;
    if (o.current) {
      const M = o.current.material;
      M.opacity = 0.1 * E + (n ? 0.05 : 0);
    }
    u.current && (u.current.intensity = 52 * E);
  }), l.jsxs(l.Fragment, { children: [l.jsxs(at, { type: "fixed", colliders: false, position: [t, 0, r], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.05, 0], receiveShadow: true, children: [l.jsx("circleGeometry", { args: [e3.radius + 6, 56] }), l.jsx("meshStandardMaterial", { color: "#4a4688", roughness: 0.85 })] }), l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.07, 0], receiveShadow: true, children: [l.jsx("ringGeometry", { args: [e3.radius - 1.2, e3.radius, 56] }), l.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.glow, emissiveIntensity: s ? 2.6 : 1.7, toneMapped: false })] }), f.map(([p, v], E) => l.jsx(Bs, { args: [3.5, 0.8], position: [p, 3.5, v] }, E))] }), l.jsxs("group", { position: [t, 0, r], children: [f.map(([p, v], E) => l.jsxs("group", { position: [p, 0, v], children: [l.jsxs("mesh", { castShadow: true, receiveShadow: true, position: [0, 3.4, 0], children: [l.jsx("boxGeometry", { args: [1.5, 6.8, 1.5] }), l.jsx("meshStandardMaterial", { color: "#37336b", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 7.2, 0], children: [l.jsx("octahedronGeometry", { args: [0.85, 0] }), l.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.color, emissiveIntensity: 3.2, toneMapped: false })] })] }, E)), l.jsxs("mesh", { ref: o, position: [0, 22, 0], children: [l.jsx("cylinderGeometry", { args: [e3.radius - 2, e3.radius + 1, 44, 24, 1, true] }), l.jsx("meshBasicMaterial", { color: e3.glow, transparent: true, opacity: 0.12, side: Je, depthWrite: false, toneMapped: false })] }), l.jsx("pointLight", { ref: u, position: [0, 12, 0], color: e3.color, distance: 70, decay: 2 }), l.jsx("group", { ref: a, children: l.jsx(It, { size: 0.95, depth: 1.2, color: e3.glow, emissive: e3.color, emissiveIntensity: s ? 2.2 : 1.1, wave: 0.25, children: e3.sign }) })] })] });
}
function ru({ position: e3 }) {
  const t = x.useMemo(() => {
    const r = [];
    for (let s = 0; s < 4; s += 1) for (let n = 0; n <= s; n += 1) r.push([e3[0] + (n - s / 2) * 2.4, 1.4, e3[1] + s * 2.2 - 3]);
    return r;
  }, [e3]);
  return l.jsx(l.Fragment, { children: t.map((r, s) => l.jsx(su, { position: r }, s)) });
}
function su({ position: e3 }) {
  const t = x.useRef(null), r = x.useRef(new xe(...e3));
  return Pe(() => {
    const s = t.current;
    if (!s) return;
    const n = s.translation();
    (n.y < -6 || new xe(n.x, 0, n.z).distanceTo(new xe(r.current.x, 0, r.current.z)) > 40) && (s.setTranslation({ x: r.current.x, y: r.current.y + 6, z: r.current.z }, true), s.setLinvel({ x: 0, y: 0, z: 0 }, true), s.setAngvel({ x: 0, y: 0, z: 0 }, true));
  }), l.jsxs(at, { ref: t, position: e3, colliders: false, mass: 0.4, restitution: 0.35, linearDamping: 0.4, angularDamping: 0.6, children: [l.jsx(gr, { args: [0.45, 1.3, 0.45] }), l.jsxs("mesh", { castShadow: true, position: [0, -1.15, 0], children: [l.jsx("boxGeometry", { args: [1.1, 0.3, 1.1] }), l.jsx("meshStandardMaterial", { color: "#3a3468", roughness: 0.6, flatShading: true })] }), l.jsxs("mesh", { castShadow: true, position: [0, -0.5, 0], children: [l.jsx("cylinderGeometry", { args: [0.16, 0.24, 1, 6] }), l.jsx("meshStandardMaterial", { color: "#ffc861", metalness: 0.8, roughness: 0.25, flatShading: true })] }), l.jsxs("mesh", { castShadow: true, position: [0, 0.45, 0], children: [l.jsx("cylinderGeometry", { args: [0.62, 0.3, 1.2, 8] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ff9d2e", emissiveIntensity: 0.9, metalness: 0.85, roughness: 0.2, flatShading: true })] }), [-0.72, 0.72].map((s) => l.jsxs("mesh", { position: [s, 0.5, 0], rotation: [0, 0, s > 0 ? -0.5 : 0.5], children: [l.jsx("torusGeometry", { args: [0.3, 0.08, 6, 10, Math.PI] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", metalness: 0.85, roughness: 0.2 })] }, s))] });
}
function fs({ position: e3, rotation: t = 0 }) {
  return l.jsxs(at, { type: "fixed", colliders: "hull", position: [e3[0], 0, e3[1]], rotation: [0, t, 0], children: [l.jsxs("mesh", { castShadow: true, receiveShadow: true, rotation: [-0.3, 0, 0], position: [0, 1.3, 0], children: [l.jsx("boxGeometry", { args: [9, 0.6, 12] }), l.jsx("meshStandardMaterial", { color: "#5b56a4", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 1.72, -5.4], rotation: [-0.3, 0, 0], children: [l.jsx("boxGeometry", { args: [9, 0.12, 1.2] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ffae3a", emissiveIntensity: 2.5, toneMapped: false })] })] });
}
function fn({ position: e3 }) {
  const t = x.useMemo(() => {
    const r = [];
    for (let s = 0; s < 3; s += 1) {
      const n = 3 - s;
      for (let a = 0; a < n; a += 1) r.push([e3[0] + (a - (n - 1) / 2) * 1.7, 0.85 + s * 1.6, e3[1]]);
    }
    return r;
  }, [e3]);
  return l.jsx(l.Fragment, { children: t.map((r, s) => l.jsxs(at, { position: r, colliders: false, mass: 0.5, restitution: 0.2, children: [l.jsx(gr, { args: [0.78, 0.78, 0.78] }), l.jsxs("mesh", { castShadow: true, receiveShadow: true, children: [l.jsx("boxGeometry", { args: [1.56, 1.56, 1.56] }), l.jsx("meshStandardMaterial", { color: "#6d5cc4", roughness: 0.65, flatShading: true })] }), l.jsxs("mesh", { children: [l.jsx("boxGeometry", { args: [1.62, 0.16, 1.62] }), l.jsx("meshStandardMaterial", { color: "#c3b4ff", emissive: "#8f7bff", emissiveIntensity: 1.4, toneMapped: false })] })] }, s)) });
}
const Cs = { baseFov: 55 }, nu = 7.6, gn = 6.8, iu = 4e-4, au = 0.35, bt = Math.PI * 2, ou = () => ({ spin: 0, flip: 0, active: false });
function cu(e3, t, r, s, n, a = true) {
  if (!t) return;
  if (s) {
    e3.active = true;
    const u = (r.spinRight ? 1 : 0) - (r.spinLeft ? 1 : 0), d = (r.flipForward ? 1 : 0) - (r.flipBack ? 1 : 0);
    e3.spin += u * nu * n, e3.flip += d * gn * n, t.rotation.y = e3.spin, t.rotation.x += d * gn * n, I.trickSpins = Math.floor(Math.abs(e3.spin) / bt), I.trickFlips = Math.floor(Math.abs(e3.flip) / bt), I.trickAngle = Math.abs(e3.spin) + Math.abs(e3.flip);
    return;
  }
  if (e3.active) {
    const u = Math.abs(e3.spin) / bt, d = Math.abs(e3.flip) / bt, f = Math.floor(u) + Math.floor(d), p = u % 1 + d % 1, E = Math.abs(pn(t.rotation.y)) + Math.abs(pn(t.rotation.x)) < au && a;
    a && (f > 0 || p > 0.25) && nt.landTrickRotation(f, p, E), e3.spin = 0, e3.flip = 0, e3.active = false, I.trickSpins = 0, I.trickFlips = 0, I.trickAngle = 0;
  }
  const o = 1 - Math.pow(iu, n);
  t.rotation.y = Le.lerp(t.rotation.y, 0, o), t.rotation.x = Le.lerp(t.rotation.x, 0, o);
}
function pn(e3) {
  return ((e3 + Math.PI) % bt + bt) % bt - Math.PI;
}
const Gr = [0, 1.6, 11], lu = 3.4, uu = 7, du = 0.75, hu = 1.35, fu = 0.42, gu = 7.5, pu = 0.55, vu = 0.55, Au = 0.5, mu = 2.5, vn = 5, xu = 11, Eu = 0.85, wu = 18, ut = new xe(), gs = new xe(), Hr = new xe(), ze = new xe(), Gt = new pt(), ps = new xe(), vs = new xe(), we = new xe(), Nr = new xe(), An = new pt(), Mt = new xe(), Mu = new xe(0, ql, 0), Cu = new xe(0, 1.2, 0), As = new xe();
function Du(e3, { lateral: t, speed: r, delta: s }) {
  if (t > lu && r > uu) {
    e3.held += s, e3.lapsed = 0;
    const a = Math.min(1 + Math.floor(e3.held), 8);
    e3.chain += t * r * 0.12 * a * s, I.driftMultiplier = a, I.driftAngle = Math.min(t / 12, 1), I.driftActive = true;
  } else e3.chain > 0 ? (e3.lapsed += s, I.driftAngle = Math.max(I.driftAngle - s * 2, 0), e3.lapsed >= du && (nt.bankDrift(e3.chain), e3.chain = 0, e3.held = 0, e3.lapsed = 0, I.driftMultiplier = 1, I.driftActive = false)) : (I.driftActive = false, I.driftMultiplier = 1, I.driftAngle = Math.max(I.driftAngle - s * 2, 0));
  I.driftChain = e3.chain;
}
function Bu(e3, { grounded: t, yaw: r, delta: s, upright: n }) {
  if (!t) {
    let a = r - e3.lastYaw;
    a = (a + Math.PI) % (Math.PI * 2) - Math.PI, e3.spin += Math.abs(a), e3.lastYaw = r, e3.time += s, e3.airborne = true, I.airTime = e3.time, I.airSpin = e3.spin, I.airborne = e3.time > 0.2;
    return;
  }
  if (e3.airborne && e3.time >= fu && n) {
    const a = Math.floor(e3.spin / (Math.PI * 2));
    nt.landTrick(e3.time, a), I.boost = Math.min(Ms, I.boost + Nl);
  }
  e3.airborne = false, e3.time = 0, e3.spin = 0, e3.lastYaw = r, I.airborne = false, I.airTime = 0, I.airSpin = 0;
}
function Su({ onMove: e3 }) {
  const { world: t, rapier: r } = aa(), s = x.useRef({ airborne: false, time: 0, spin: 0, lastYaw: 0 }), n = x.useRef(vn), a = x.useRef(0), o = x.useRef(null), u = x.useRef(null), d = oa(), f = Xr((F) => F.garage), p = ca[f.paint] ?? la[0], v = x.useRef(p);
  v.current = p;
  const E = x.useRef(false), M = x.useRef(new xe()), L = x.useRef({ chain: 0, held: 0, lapsed: 0 }), K = x.useRef(false), Q = x.useRef(0), j = x.useRef(0), N = x.useRef(0), G = x.useRef(0), se = x.useRef(new yr(0, 0, 0, "YXZ")), X = x.useRef(ou()), V = x.useRef(null), le = x.useRef(ua()), C = x.useRef(false), R = () => {
    const F = o.current;
    if (!F) return;
    if (Math.hypot(I.x, I.z) > 100 && I.y > 15) {
      const b = jt(0.03), U = jt(0.1), O = Math.atan2(U.x - b.x, U.z - b.z), J = new pt().setFromEuler(new yr(0, O + Math.PI, 0));
      F.setTranslation({ x: b.x, y: b.y + 1.2, z: b.z }, true), F.setRotation({ x: J.x, y: J.y, z: J.z, w: J.w }, true);
    } else F.setTranslation({ x: Gr[0], y: Gr[1], z: Gr[2] }, true), F.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true);
    F.setLinvel({ x: 0, y: 0, z: 0 }, true), F.setAngvel({ x: 0, y: 0, z: 0 }, true);
  };
  return Pe((F, Z) => {
    var _a2;
    const b = o.current;
    if (!b) return;
    const U = Math.min(Z, 1 / 20), O = ga(), J = b.rotation();
    Gt.set(J.x, J.y, J.z, J.w), ut.set(0, 0, -1).applyQuaternion(Gt), gs.set(1, 0, 0).applyQuaternion(Gt);
    const k = b.linvel();
    Hr.set(k.x, k.y, k.z);
    const ae = Hr.dot(ut), We = Hr.dot(gs), De = b.mass(), oe = b.translation();
    we.set(oe.x, oe.y, oe.z);
    const ot = new r.Ray({ x: we.x, y: we.y, z: we.z }, { x: 0, y: -1, z: 0 }), q = t.castRay(ot, hu, true, void 0, void 0, void 0, b) !== null;
    As.set(0, 1, 0).applyQuaternion(Gt), I.upright = As.y;
    const He = As.y > vu, ct = O.backward > 0 && ae > Ol, ee = ct ? 0 : O.forward - O.backward, qe = I.boost > zl || K.current && I.boost > 0, Ie = q && O.boost && ee > 0 && qe;
    K.current = Ie, Ie && (I.boost = Math.max(0, I.boost - Gl * U));
    const Er = Ie ? ln : ar;
    if (q) {
      if (ct) ze.copy(ut).multiplyScalar(-bl * De * U), b.applyImpulse(ze, true);
      else if (ee !== 0 && Math.abs(ae) < Er) {
        const ne = ee > 0 ? $l(ae, Er, Ie) : -Rl, Ce = -ut.y, Fe = ee > 0 && Ce > 0 ? Ce * 30 : 0;
        ze.copy(ut).multiplyScalar((ne + Fe) * De * U), b.applyImpulse(ze, true);
      }
    }
    if (q) {
      const ne = O.brake ? un * Ll : un;
      ze.copy(gs).multiplyScalar(-We * ne * De), b.applyImpulse(ze, true);
    }
    if (q && (ee === 0 || O.brake)) {
      const ne = O.brake ? ee > 0 ? 0.7 : 2.4 : 0.85;
      ze.copy(ut).multiplyScalar(-ae * ne * De * U), b.applyImpulse(ze, true);
    }
    const Ot = O.left - O.right, Pt = Math.min(Math.abs(ae) / 6, 1), ts = ee !== 0 ? Math.max(Pt, 0.4) : Pt, wr = ae < -0.4 ? -1 : 1, Mr = Fl * (O.brake ? Ul : 1), Wt = b.angvel();
    if (q && b.setAngvel({ x: Wt.x, y: Ot * Mr * ts * wr, z: Wt.z }, true), q && we.y > wu ? n.current = 0 : n.current += U, !q && k.y < 0 ? a.current += U : a.current = 0, n.current < vn && a.current > Eu && we.y < xu) {
      const { frame: ne } = ha(we.x, we.z), Ce = Math.atan2(ne.forward.x, ne.forward.z), Fe = new pt().setFromEuler(new yr(0, Ce, 0, "YXZ"));
      b.setRotation({ x: Fe.x, y: Fe.y, z: Fe.z, w: Fe.w }, true), b.setTranslation({ x: ne.position.x, y: ne.position.y + 1.6, z: ne.position.z }, true);
      const $e = Math.min(I.speed, 14);
      b.setLinvel({ x: ne.forward.x * $e, y: 0, z: ne.forward.z * $e }, true), b.setAngvel({ x: 0, y: 0, z: 0 }, true), n.current = 0, a.current = 0, I.caught = performance.now();
    } else (O.reset || we.y < -14) && R();
    if (I.x = we.x, I.y = we.y, I.z = we.z, I.heading = Math.atan2(ut.x, ut.z), I.speed = Math.abs(ae), nt.setSpeed(I.speed), e3 == null ? void 0 : e3(we), Du(L.current, { lateral: Math.abs(We), speed: Math.abs(ae), delta: U }), I.driftActive) {
      const ne = Math.min(Math.abs(We) / 9, 1) * Hl * U;
      I.boost = Math.min(Ms, I.boost + ne);
    }
    I.boosting = Ie, I.raceRunning && pa(U, we.x, we.y, we.z, I.heading);
    const Cr = Q.current - Math.abs(ae);
    Cr > 7 && !ct && Q.current > 9 && (nt.registerImpact(), j.current = Math.min(1, j.current + Cr / 26)), Q.current = Math.abs(ae), j.current = Math.max(0, j.current - U * 2.6), cu(X.current, V.current, { spinLeft: O.spinLeft, spinRight: O.spinRight, flipForward: O.flipForward, flipBack: O.flipBack }, !q, U, He), Bu(s.current, { grounded: q, yaw: I.heading, delta: U, upright: He });
    const Ft = se.current.setFromQuaternion(Gt, "YXZ").x;
    if (q && Math.abs(Ft) > 0.02) {
      const ne = b.angvel();
      b.setAngvel({ x: -Ft * gu - ne.x * 0.6, y: ne.y, z: ne.z }, true);
    } else if (!q && s.current.time > jl) {
      const ne = Math.asin(Le.clamp(k.y / Math.max(Hr.length(), 4), -1, 1)), Ce = Le.clamp(ne, -dn, dn), Fe = k.y < 0 ? 1 : 0.3, $e = b.angvel();
      b.setAngvel({ x: (Ce - Ft) * Ql * Fe, y: $e.y, z: $e.z }, true);
    }
    if (!q && k.y < 0 && (ze.set(0, -Yl * De * U, 0), b.applyImpulse(ze, true)), q && C.current && k.y < -6 && b.setLinvel({ x: k.x, y: k.y * Wl, z: k.z }, true), C.current = !q, q) for (const ne of le.current) {
      const Ce = we.x - ne.x, Fe = we.z - ne.z;
      if (Ce * Ce + Fe * Fe < hn * hn) {
        const $e = Math.max(0, 1 - Math.abs(ae) / ln);
        ze.copy(ut).multiplyScalar(Vl * $e * De * U), b.applyImpulse(ze, true), I.boost = Math.min(Ms, I.boost + _l * U);
        break;
      }
    }
    q && Math.abs(ae) > 8 && (ze.set(0, -kl * Math.min(Math.abs(ae) / ar, 1.4) * De * U, 0), b.applyImpulse(ze, true));
    const Vt = () => {
      const ne = se.current.setFromQuaternion(Gt, "YXZ").y, Ce = new pt().setFromEuler(new yr(0, ne, 0, "YXZ"));
      b.setRotation({ x: Ce.x, y: Ce.y, z: Ce.z, w: Ce.w }, true), b.setTranslation({ x: we.x, y: we.y + 0.8, z: we.z }, true), b.setAngvel({ x: 0, y: 0, z: 0 }, true), G.current = 0;
    };
    if (q && !He ? (G.current += U, (O.recover || G.current > mu) && Vt()) : q && Math.abs(ae) < 2 && Math.abs(Ft) > pu ? (G.current += U, (O.recover || G.current > Au + 1) && Vt()) : (G.current = 0, q && O.recover && Math.abs(ae) < 4 && Vt()), u.current) {
      const ne = Le.clamp(-Ot * Pt * 0.16, -0.2, 0.2), Ce = Le.clamp(-ee * 0.05, -0.08, 0.08), Fe = 1 - Math.pow(5e-4, U), $e = 1 - Math.pow(2e-3, U);
      u.current.rotation.z = Le.lerp(u.current.rotation.z, ne, Fe), u.current.rotation.x = Le.lerp(u.current.rotation.x, Ce, $e);
    }
    fa(d.current, { speed: ae, steer: Ot, throttle: ee, brake: O.brake, delta: U, paint: v.current, lateral: Math.abs(We), vertical: k.y, braking: ct, boosting: Ie });
    const _t = (_a2 = u.current) == null ? void 0 : _a2.parent;
    _t ? (_t.getWorldPosition(Nr), _t.getWorldQuaternion(An), Mt.set(0, 0, -1).applyQuaternion(An)) : (Nr.copy(we), Mt.copy(ut)), Mt.y = 0, Mt.lengthSq() < 4e-4 && Mt.set(Math.sin(I.heading), 0, Math.cos(I.heading)), Mt.normalize();
    const Dr = Math.min(Math.abs(ae) / ar, 1.35);
    ps.copy(Nr).addScaledVector(Mt, -Zl - Dr * Jl).add(Mu);
    const Ut = F.camera, Br = Cs.baseFov + Dr * Xl + (Ie ? Kl : 0);
    Math.abs(Ut.fov - Br) > 0.01 && (Ut.fov = Le.lerp(Ut.fov, Br, 1 - Math.pow(0.02, U)), Ut.updateProjectionMatrix()), vs.copy(Nr).addScaledVector(Mt, q ? 6 : 1.5).add(Cu), E.current ? (F.camera.position.lerp(ps, 1 - Math.pow(22e-4, U)), M.current.lerp(vs, 1 - Math.pow(6e-4, U))) : (F.camera.position.copy(ps), M.current.copy(vs), E.current = true);
    const Sr = -Ot * Math.min(Math.abs(ae) / ar, 1) * 0.09;
    if (N.current = Le.lerp(N.current, Sr, 1 - Math.pow(0.02, U)), j.current > 1e-3) {
      const ne = j.current * j.current * 1.4;
      F.camera.position.x += (Math.random() - 0.5) * ne, F.camera.position.y += (Math.random() - 0.5) * ne, F.camera.position.z += (Math.random() - 0.5) * ne;
    }
    F.camera.lookAt(M.current), F.camera.rotateZ(N.current);
  }), l.jsxs(at, { ref: o, position: Gr, colliders: false, mass: 1, friction: 0.6, restitution: 0.1, linearDamping: 0.35, angularDamping: 4, enabledRotations: [true, true, false], ccd: true, name: "player", children: [l.jsx(gr, { args: [1, 0.5, 2.05], density: 2.6, friction: 0.15 }), l.jsx("group", { ref: u, children: l.jsx("group", { ref: V, children: l.jsx(da, { rig: d, paint: p, design: f.design, wheel: f.wheel }) }) })] });
}
function Pu() {
  const e3 = x.useRef(null);
  x.useEffect(() => {
    nt.hydrateGarage();
  }, []);
  const t = x.useCallback((r) => {
    let s = null;
    for (const n of ms) {
      const [a, o] = n.position;
      if (Math.hypot(r.x - a, r.z - o) < n.radius + 9) {
        s = n.id;
        break;
      }
    }
    s !== e3.current && (e3.current && nt.leaveZone(e3.current), s && nt.enterZone(s), e3.current = s);
  }, []);
  return l.jsxs(l.Fragment, { children: [l.jsx(Iu, {}), l.jsx("color", { attach: "background", args: [$t.fog] }), l.jsx("fogExp2", { attach: "fog", args: [$t.fog, 75e-4] }), l.jsx("hemisphereLight", { args: [$t.horizon, $t.ground, 1.55] }), l.jsx("ambientLight", { intensity: 0.5, color: "#6c5fbb" }), l.jsx("directionalLight", { position: [48, 70, 28], intensity: 1.9, color: $t.moon, castShadow: true, "shadow-mapSize": [1024, 1024], "shadow-camera-near": 1, "shadow-camera-far": 220, "shadow-camera-left": -90, "shadow-camera-right": 90, "shadow-camera-top": 90, "shadow-camera-bottom": -90, "shadow-bias": -6e-4 }), l.jsx(so, { radius: 260, depth: 70, count: 4200, factor: 5, fade: true, speed: 0.6 }), l.jsx(eo, { preset: "night" }), l.jsx(Tu, {}), l.jsx(Bl, {}), l.jsx(Sl, {}), l.jsxs(va, { timeStep: 1 / 60, interpolate: true, gravity: [0, -30, 0], children: [l.jsx(Aa, {}), ms.map((r) => l.jsx(tu, { zone: r }, r.id)), l.jsx(yu, {}), l.jsx(fn, { position: [-15, 4] }), l.jsx(fn, { position: [15, 4] }), l.jsx(ru, { position: [-54, 54] }), l.jsx(fs, { position: [30, -44], rotation: 0 }), l.jsx(fs, { position: [56, 0], rotation: Math.PI / 2 }), l.jsx(fs, { position: [0, 50], rotation: Math.PI }), l.jsx(Wc, {}), l.jsx(rl, {}), l.jsx(Su, { onMove: t })] }), l.jsx(ma, {}), l.jsx(El, {}), l.jsx(Tl, {}), l.jsx(Ru, {}), l.jsxs(kc, { multisampling: 0, children: [l.jsx(eu, {}), l.jsx(Yc, {})] })] });
}
function Iu() {
  const e3 = vt((r) => r.camera), t = vt((r) => r.size);
  return x.useEffect(() => {
    const r = t.width / t.height, s = Le.degToRad(78), n = 2 * Math.atan(Math.tan(s / 2) / Math.max(r, 0.3));
    Cs.baseFov = Le.clamp(Le.radToDeg(n), 45, 82), e3.fov = Cs.baseFov, e3.updateProjectionMatrix();
  }, [e3, t]), null;
}
function Tu() {
  return l.jsxs("group", { position: [130, 82, -170], children: [l.jsxs("mesh", { children: [l.jsx("sphereGeometry", { args: [16, 24, 24] }), l.jsx("meshBasicMaterial", { color: "#e8e6ff", toneMapped: false })] }), l.jsxs("mesh", { children: [l.jsx("sphereGeometry", { args: [22, 20, 20] }), l.jsx("meshBasicMaterial", { color: "#8f7bff", transparent: true, opacity: 0.16, depthWrite: false })] })] });
}
function yu() {
  const e3 = x.useRef(null);
  return Pe(({ clock: t }) => {
    e3.current && (e3.current.position.y = 17 + Math.sin(t.elapsedTime * 0.7) * 0.6);
  }), l.jsxs("group", { children: [l.jsx("group", { ref: e3, position: [0, 17, -34], children: l.jsx(It, { size: 1.5, depth: 2.2, color: "#7fa4ff", emissive: "#2f5bff", emissiveIntensity: 1.5, wave: 0.35, children: Ei.short }) }), l.jsx(It, { position: [0, 8.4, -34], size: 0.44, depth: 0.4, color: "#e8e2ff", emissive: "#9d8bff", emissiveIntensity: 0.9, children: "DRIVE ANYWHERE" }), ms.map((t) => {
    const [r, s] = t.position, n = Math.hypot(r, s), a = r / n, o = s / n;
    return l.jsx(It, { position: [a * 19, 0.35, o * 19], rotation: [-Math.PI / 2, 0, Math.atan2(-a, -o)], size: 0.42, depth: 0.5, color: t.glow, emissive: t.color, emissiveIntensity: 2.2, children: t.sign }, t.id);
  })] });
}
function Ru() {
  const e3 = [[56, 80], [80, 56]];
  return l.jsx("group", { children: wi.map((t, r) => l.jsxs("group", { position: [e3[r][0], 0, e3[r][1]], children: [l.jsxs("mesh", { position: [0, 9, 0], castShadow: true, children: [l.jsx("cylinderGeometry", { args: [0.8, 1.6, 18, 6] }), l.jsx("meshStandardMaterial", { color: "#38346d", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 19.5, 0], children: [l.jsx("icosahedronGeometry", { args: [2.3, 0] }), l.jsx("meshStandardMaterial", { color: t.color, emissive: t.color, emissiveIntensity: 4, toneMapped: false })] }), l.jsx("pointLight", { position: [0, 19.5, 0], color: t.color, intensity: 90, distance: 55, decay: 2 }), l.jsx(It, { position: [0, 25, 0], rotation: [0, Math.atan2(-e3[r][0], -e3[r][1]), 0], size: 0.46, depth: 0.5, color: "#ffffff", emissive: t.color, emissiveIntensity: 1.8, children: t.name })] }, t.id)) });
}
export {
  Pu as default
};
