var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as x, j as l, e as Si, Z as Cs, P as Ii, U as Ti } from "./index-B8EOjzDO.js";
import { M as $r, I as yi, S as je, D as et, v as Sn, a as In, H as Ve, F as it, b as jt, L as Ue, R as wr, c as Ri, d as es, C as Bt, e as Wr, O as Tn, P as yn, W as Qe, U as Vr, f as bi, g as Pi, h as Mr, T as ut, i as Oi, j as Fi, B as Ui, k as Li, l as ot, m as Gi, n as Hi, o as Rn, p as Ws, q as be, r as jr, V as Ce, N as ht, u as vt, s as _r, t as Ni, E as zi, w as ki, x as Qi, y as Ge, z as ji, A as bn, _ as Yi, G as Vs, J as ts, K as Pn, Q as Wi, X as Y, Y as Be, Z as Vi, $ as _i, a0 as Xi, a1 as Rs, a2 as On, a3 as yt, a4 as _t, a5 as Ki, a6 as Zi, a7 as gr, a8 as Ji, a9 as Fn, aa as _s, ab as qi, ac as Br, ad as Xr, ae as $i, af as ct, ag as nt, ah as Ct, ai as Cr, aj as Ut, ak as V, al as ea, am as At, an as mt, ao as bs, ap as Un, aq as Ln, ar as Ds, as as pr, at as rs, au as It, av as Xt, aw as B, ax as Gn, ay as ta, az as ra, aA as sa, aB as Ps, aC as pt, aD as Os, aE as Fs, aF as na, aG as Kr, aH as ia, aI as aa, aJ as oa, aK as Zr, aL as at, aM as Hn, aN as ca, aO as la, aP as ua, aQ as da, aR as Ne, aS as ha, aT as fa, aU as ga, aV as pa, aW as Or, aX as va, aY as Aa, aZ as ma, a_ as xa, a$ as Ea, b0 as wa, b1 as Ma, b2 as ir, b3 as Ca, b4 as Da, b5 as Ba } from "./GamePortfolio-BHwuM0BS.js";
var $e = Uint8Array, St = Uint16Array, Bs = Uint32Array, Nn = new $e([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), zn = new $e([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Sa = new $e([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), kn = function(e3, t) {
  for (var r = new St(31), s = 0; s < 31; ++s) r[s] = t += 1 << e3[s - 1];
  for (var n = new Bs(r[30]), s = 1; s < 30; ++s) for (var a = r[s]; a < r[s + 1]; ++a) n[a] = a - r[s] << 5 | s;
  return [r, n];
}, Qn = kn(Nn, 2), jn = Qn[0], Ia = Qn[1];
jn[28] = 258, Ia[258] = 28;
var Ta = kn(zn, 0), ya = Ta[0], Ss = new St(32768);
for (var xe = 0; xe < 32768; ++xe) {
  var Et = (xe & 43690) >>> 1 | (xe & 21845) << 1;
  Et = (Et & 52428) >>> 2 | (Et & 13107) << 2, Et = (Et & 61680) >>> 4 | (Et & 3855) << 4, Ss[xe] = ((Et & 65280) >>> 8 | (Et & 255) << 8) >>> 1;
}
var vr = function(e3, t, r) {
  for (var s = e3.length, n = 0, a = new St(t); n < s; ++n) ++a[e3[n] - 1];
  var o = new St(t);
  for (n = 0; n < t; ++n) o[n] = o[n - 1] + a[n - 1] << 1;
  var u;
  if (r) {
    u = new St(1 << t);
    var d = 15 - t;
    for (n = 0; n < s; ++n) if (e3[n]) for (var f = n << 4 | e3[n], m = t - e3[n], A = o[e3[n] - 1]++ << m, E = A | (1 << m) - 1; A <= E; ++A) u[Ss[A] >>> d] = f;
  } else for (u = new St(s), n = 0; n < s; ++n) e3[n] && (u[n] = Ss[o[e3[n] - 1]++] >>> 15 - e3[n]);
  return u;
}, Sr = new $e(288);
for (var xe = 0; xe < 144; ++xe) Sr[xe] = 8;
for (var xe = 144; xe < 256; ++xe) Sr[xe] = 9;
for (var xe = 256; xe < 280; ++xe) Sr[xe] = 7;
for (var xe = 280; xe < 288; ++xe) Sr[xe] = 8;
var Yn = new $e(32);
for (var xe = 0; xe < 32; ++xe) Yn[xe] = 5;
var Ra = vr(Sr, 9, 1), ba = vr(Yn, 5, 1), ls = function(e3) {
  for (var t = e3[0], r = 1; r < e3.length; ++r) e3[r] > t && (t = e3[r]);
  return t;
}, st = function(e3, t, r) {
  var s = t / 8 | 0;
  return (e3[s] | e3[s + 1] << 8) >> (t & 7) & r;
}, us = function(e3, t) {
  var r = t / 8 | 0;
  return (e3[r] | e3[r + 1] << 8 | e3[r + 2] << 16) >> (t & 7);
}, Pa = function(e3) {
  return (e3 / 8 | 0) + (e3 & 7 && 1);
}, Oa = function(e3, t, r) {
  (r == null || r > e3.length) && (r = e3.length);
  var s = new (e3 instanceof St ? St : e3 instanceof Bs ? Bs : $e)(r - t);
  return s.set(e3.subarray(t, r)), s;
}, Fa = function(e3, t, r) {
  var s = e3.length;
  if (!s || r && !r.l && s < 5) return t || new $e(0);
  var n = !t || r, a = !r || r.i;
  r || (r = {}), t || (t = new $e(s * 3));
  var o = function(ne) {
    var Se = t.length;
    if (ne > Se) {
      var rt = new $e(Math.max(Se * 2, ne));
      rt.set(t), t = rt;
    }
  }, u = r.f || 0, d = r.p || 0, f = r.b || 0, m = r.l, A = r.d, E = r.m, M = r.n, F = s * 8;
  do {
    if (!m) {
      r.f = u = st(e3, d, 1);
      var q = st(e3, d + 1, 3);
      if (d += 3, q) if (q == 1) m = Ra, A = ba, E = 9, M = 5;
      else if (q == 2) {
        var H = st(e3, d, 31) + 257, te = st(e3, d + 10, 15) + 4, J = H + st(e3, d + 5, 31) + 1;
        d += 14;
        for (var K = new $e(J), oe = new $e(19), C = 0; C < te; ++C) oe[Sa[C]] = st(e3, d + C * 3, 7);
        d += te * 3;
        for (var b = ls(oe), Q = (1 << b) - 1, G = vr(oe, b, 1), C = 0; C < J; ) {
          var Z = G[st(e3, d, Q)];
          d += Z & 15;
          var k = Z >>> 4;
          if (k < 16) K[C++] = k;
          else {
            var P = 0, R = 0;
            for (k == 16 ? (R = 3 + st(e3, d, 3), d += 2, P = K[C - 1]) : k == 17 ? (R = 3 + st(e3, d, 7), d += 3) : k == 18 && (R = 11 + st(e3, d, 127), d += 7); R--; ) K[C++] = P;
          }
        }
        var z = K.subarray(0, H), j = K.subarray(H);
        E = ls(z), M = ls(j), m = vr(z, E, 1), A = vr(j, M, 1);
      } else throw "invalid block type";
      else {
        var k = Pa(d) + 4, W = e3[k - 4] | e3[k - 3] << 8, U = k + W;
        if (U > s) {
          if (a) throw "unexpected EOF";
          break;
        }
        n && o(f + W), t.set(e3.subarray(k, U), f), r.b = f += W, r.p = d = U * 8;
        continue;
      }
      if (d > F) {
        if (a) throw "unexpected EOF";
        break;
      }
    }
    n && o(f + 131072);
    for (var we = (1 << E) - 1, le = (1 << M) - 1, Re = d; ; Re = d) {
      var P = m[us(e3, d) & we], se = P >>> 4;
      if (d += P & 15, d > F) {
        if (a) throw "unexpected EOF";
        break;
      }
      if (!P) throw "invalid length/literal";
      if (se < 256) t[f++] = se;
      else if (se == 256) {
        Re = d, m = null;
        break;
      } else {
        var _e = se - 254;
        if (se > 264) {
          var C = se - 257, pe = Nn[C];
          _e = st(e3, d, (1 << pe) - 1) + jn[C], d += pe;
        }
        var Te = A[us(e3, d) & le], ue = Te >>> 4;
        if (!Te) throw "invalid distance";
        d += Te & 15;
        var j = ya[ue];
        if (ue > 3) {
          var pe = zn[ue];
          j += us(e3, d) & (1 << pe) - 1, d += pe;
        }
        if (d > F) {
          if (a) throw "unexpected EOF";
          break;
        }
        n && o(f + 131072);
        for (var tt = f + _e; f < tt; f += 4) t[f] = t[f - j], t[f + 1] = t[f + 1 - j], t[f + 2] = t[f + 2 - j], t[f + 3] = t[f + 3 - j];
        f = tt;
      }
    }
    r.l = m, r.p = Re, r.b = f, m && (u = 1, r.m = E, r.d = A, r.n = M);
  } while (!u);
  return f == t.length ? t : Oa(t, 0, f);
}, Ua = new $e(0), La = function(e3) {
  if ((e3[0] & 15) != 8 || e3[0] >>> 4 > 7 || (e3[0] << 8 | e3[1]) % 31) throw "invalid zlib data";
  if (e3[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
function Fr(e3, t) {
  return Fa((La(e3), e3.subarray(2, -4)), t);
}
var Ga = typeof TextDecoder < "u" && new TextDecoder(), Ha = 0;
try {
  Ga.decode(Ua, { stream: true }), Ha = 1;
} catch {
}
const Na = (e3) => e3 && e3.isCubeTexture;
class za extends $r {
  constructor(t, r) {
    var s, n;
    const a = Na(t), u = ((n = a ? (s = t.image[0]) == null ? void 0 : s.width : t.image.width) != null ? n : 1024) / 4, d = Math.floor(Math.log2(u)), f = Math.pow(2, d), m = 3 * Math.max(f, 16 * 7), A = 4 * f, E = [a ? "#define ENVMAP_TYPE_CUBE" : "", `#define CUBEUV_TEXEL_WIDTH ${1 / m}`, `#define CUBEUV_TEXEL_HEIGHT ${1 / A}`, `#define CUBEUV_MAX_MIP ${d}.0`], M = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `, F = E.join(`
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
            #include <${Sn >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, q = { map: { value: t }, height: { value: (r == null ? void 0 : r.height) || 15 }, radius: { value: (r == null ? void 0 : r.radius) || 100 } }, k = new yi(1, 16), W = new je({ uniforms: q, fragmentShader: F, vertexShader: M, side: et });
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
class ka extends In {
  constructor(t) {
    super(t), this.type = Ve;
  }
  parse(t) {
    const o = function(C, b) {
      switch (C) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (b || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (b || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (b || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (b || ""));
      }
    }, m = `
`, A = function(C, b, Q) {
      b = b || 1024;
      let Z = C.pos, P = -1, R = 0, z = "", j = String.fromCharCode.apply(null, new Uint16Array(C.subarray(Z, Z + 128)));
      for (; 0 > (P = j.indexOf(m)) && R < b && Z < C.byteLength; ) z += j, R += j.length, Z += 128, j += String.fromCharCode.apply(null, new Uint16Array(C.subarray(Z, Z + 128)));
      return -1 < P ? (C.pos += R + P + 1, z + j.slice(0, P)) : false;
    }, E = function(C) {
      const b = /^#\?(\S+)/, Q = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, G = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, Z = /^\s*FORMAT=(\S+)\s*$/, P = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, R = { valid: 0, string: "", comments: "", programtype: "RGBE", format: "", gamma: 1, exposure: 1, width: 0, height: 0 };
      let z, j;
      for ((C.pos >= C.byteLength || !(z = A(C))) && o(1, "no header found"), (j = z.match(b)) || o(3, "bad initial token"), R.valid |= 1, R.programtype = j[1], R.string += z + `
`; z = A(C), z !== false; ) {
        if (R.string += z + `
`, z.charAt(0) === "#") {
          R.comments += z + `
`;
          continue;
        }
        if ((j = z.match(Q)) && (R.gamma = parseFloat(j[1])), (j = z.match(G)) && (R.exposure = parseFloat(j[1])), (j = z.match(Z)) && (R.valid |= 2, R.format = j[1]), (j = z.match(P)) && (R.valid |= 4, R.height = parseInt(j[1], 10), R.width = parseInt(j[2], 10)), R.valid & 2 && R.valid & 4) break;
      }
      return R.valid & 2 || o(3, "missing format specifier"), R.valid & 4 || o(3, "missing image size specifier"), R;
    }, M = function(C, b, Q) {
      const G = b;
      if (G < 8 || G > 32767 || C[0] !== 2 || C[1] !== 2 || C[2] & 128) return new Uint8Array(C);
      G !== (C[2] << 8 | C[3]) && o(3, "wrong scanline width");
      const Z = new Uint8Array(4 * b * Q);
      Z.length || o(4, "unable to allocate buffer space");
      let P = 0, R = 0;
      const z = 4 * G, j = new Uint8Array(4), we = new Uint8Array(z);
      let le = Q;
      for (; le > 0 && R < C.byteLength; ) {
        R + 4 > C.byteLength && o(1), j[0] = C[R++], j[1] = C[R++], j[2] = C[R++], j[3] = C[R++], (j[0] != 2 || j[1] != 2 || (j[2] << 8 | j[3]) != G) && o(3, "bad rgbe scanline format");
        let Re = 0, se;
        for (; Re < z && R < C.byteLength; ) {
          se = C[R++];
          const pe = se > 128;
          if (pe && (se -= 128), (se === 0 || Re + se > z) && o(3, "bad scanline data"), pe) {
            const Te = C[R++];
            for (let ue = 0; ue < se; ue++) we[Re++] = Te;
          } else we.set(C.subarray(R, R + se), Re), Re += se, R += se;
        }
        const _e = G;
        for (let pe = 0; pe < _e; pe++) {
          let Te = 0;
          Z[P] = we[pe + Te], Te += G, Z[P + 1] = we[pe + Te], Te += G, Z[P + 2] = we[pe + Te], Te += G, Z[P + 3] = we[pe + Te], P += 4;
        }
        le--;
      }
      return Z;
    }, F = function(C, b, Q, G) {
      const Z = C[b + 3], P = Math.pow(2, Z - 128) / 255;
      Q[G + 0] = C[b + 0] * P, Q[G + 1] = C[b + 1] * P, Q[G + 2] = C[b + 2] * P, Q[G + 3] = 1;
    }, q = function(C, b, Q, G) {
      const Z = C[b + 3], P = Math.pow(2, Z - 128) / 255;
      Q[G + 0] = jt.toHalfFloat(Math.min(C[b + 0] * P, 65504)), Q[G + 1] = jt.toHalfFloat(Math.min(C[b + 1] * P, 65504)), Q[G + 2] = jt.toHalfFloat(Math.min(C[b + 2] * P, 65504)), Q[G + 3] = jt.toHalfFloat(1);
    }, k = new Uint8Array(t);
    k.pos = 0;
    const W = E(k), U = W.width, H = W.height, te = M(k.subarray(k.pos), U, H);
    let J, K, oe;
    switch (this.type) {
      case it:
        oe = te.length / 4;
        const C = new Float32Array(oe * 4);
        for (let Q = 0; Q < oe; Q++) F(te, Q * 4, C, Q * 4);
        J = C, K = it;
        break;
      case Ve:
        oe = te.length / 4;
        const b = new Uint16Array(oe * 4);
        for (let Q = 0; Q < oe; Q++) q(te, Q * 4, b, Q * 4);
        J = b, K = Ve;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return { width: U, height: H, data: J, header: W.string, gamma: W.gamma, exposure: W.exposure, type: K };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, s, n) {
    function a(o, u) {
      switch (o.type) {
        case it:
        case Ve:
          "colorSpace" in o ? o.colorSpace = "srgb-linear" : o.encoding = 3e3, o.minFilter = Ue, o.magFilter = Ue, o.generateMipmaps = false, o.flipY = true;
          break;
      }
      r && r(o, u);
    }
    return super.load(t, a, s, n);
  }
}
const ar = Sn >= 152;
class Qa extends In {
  constructor(t) {
    super(t), this.type = Ve;
  }
  parse(t) {
    const b = Math.pow(2.7182818, 2.2);
    function Q(i, c) {
      for (var h = 0, g = 0; g < 65536; ++g) (g == 0 || i[g >> 3] & 1 << (g & 7)) && (c[h++] = g);
      for (var p = h - 1; h < 65536; ) c[h++] = 0;
      return p;
    }
    function G(i) {
      for (var c = 0; c < 16384; c++) i[c] = {}, i[c].len = 0, i[c].lit = 0, i[c].p = null;
    }
    const Z = { l: 0, c: 0, lc: 0 };
    function P(i, c, h, g, p) {
      for (; h < i; ) c = c << 8 | js(g, p), h += 8;
      h -= i, Z.l = c >> h & (1 << i) - 1, Z.c = c, Z.lc = h;
    }
    const R = new Array(59);
    function z(i) {
      for (var c = 0; c <= 58; ++c) R[c] = 0;
      for (var c = 0; c < 65537; ++c) R[i[c]] += 1;
      for (var h = 0, c = 58; c > 0; --c) {
        var g = h + R[c] >> 1;
        R[c] = h, h = g;
      }
      for (var c = 0; c < 65537; ++c) {
        var p = i[c];
        p > 0 && (i[c] = p | R[p]++ << 6);
      }
    }
    function j(i, c, h, g, p, v, D) {
      for (var w = h, T = 0, I = 0; p <= v; p++) {
        if (w.value - h.value > g) return false;
        P(6, T, I, i, w);
        var y = Z.l;
        if (T = Z.c, I = Z.lc, D[p] = y, y == 63) {
          if (w.value - h.value > g) throw "Something wrong with hufUnpackEncTable";
          P(8, T, I, i, w);
          var S = Z.l + 6;
          if (T = Z.c, I = Z.lc, p + S > v + 1) throw "Something wrong with hufUnpackEncTable";
          for (; S--; ) D[p++] = 0;
          p--;
        } else if (y >= 59) {
          var S = y - 59 + 2;
          if (p + S > v + 1) throw "Something wrong with hufUnpackEncTable";
          for (; S--; ) D[p++] = 0;
          p--;
        }
      }
      z(D);
    }
    function we(i) {
      return i & 63;
    }
    function le(i) {
      return i >> 6;
    }
    function Re(i, c, h, g) {
      for (; c <= h; c++) {
        var p = le(i[c]), v = we(i[c]);
        if (p >> v) throw "Invalid table entry";
        if (v > 14) {
          var D = g[p >> v - 14];
          if (D.len) throw "Invalid table entry";
          if (D.lit++, D.p) {
            var w = D.p;
            D.p = new Array(D.lit);
            for (var T = 0; T < D.lit - 1; ++T) D.p[T] = w[T];
          } else D.p = new Array(1);
          D.p[D.lit - 1] = c;
        } else if (v) for (var I = 0, T = 1 << 14 - v; T > 0; T--) {
          var D = g[(p << 14 - v) + I];
          if (D.len || D.p) throw "Invalid table entry";
          D.len = v, D.lit = c, I++;
        }
      }
      return true;
    }
    const se = { c: 0, lc: 0 };
    function _e(i, c, h, g) {
      i = i << 8 | js(h, g), c += 8, se.c = i, se.lc = c;
    }
    const pe = { c: 0, lc: 0 };
    function Te(i, c, h, g, p, v, D, w, T, I) {
      if (i == c) {
        g < 8 && (_e(h, g, p, D), h = se.c, g = se.lc), g -= 8;
        var y = h >> g, y = new Uint8Array([y])[0];
        if (T.value + y > I) return false;
        for (var S = w[T.value - 1]; y-- > 0; ) w[T.value++] = S;
      } else if (T.value < I) w[T.value++] = i;
      else return false;
      pe.c = h, pe.lc = g;
    }
    function ue(i) {
      return i & 65535;
    }
    function tt(i) {
      var c = ue(i);
      return c > 32767 ? c - 65536 : c;
    }
    const ne = { a: 0, b: 0 };
    function Se(i, c) {
      var h = tt(i), g = tt(c), p = g, v = h + (p & 1) + (p >> 1), D = v, w = v - p;
      ne.a = D, ne.b = w;
    }
    function rt(i, c) {
      var h = ue(i), g = ue(c), p = h - (g >> 1) & 65535, v = g + p - 32768 & 65535;
      ne.a = v, ne.b = p;
    }
    function ft(i, c, h, g, p, v, D) {
      for (var w = D < 16384, T = h > p ? p : h, I = 1, y; I <= T; ) I <<= 1;
      for (I >>= 1, y = I, I >>= 1; I >= 1; ) {
        for (var S = 0, Me = S + v * (p - y), L = v * I, N = v * y, X = g * I, $ = g * y, de, ve, Ie, He; S <= Me; S += N) {
          for (var Ae = S, lt = S + g * (h - y); Ae <= lt; Ae += $) {
            var me = Ae + X, ye = Ae + L, gt = ye + X;
            w ? (Se(i[Ae + c], i[ye + c]), de = ne.a, Ie = ne.b, Se(i[me + c], i[gt + c]), ve = ne.a, He = ne.b, Se(de, ve), i[Ae + c] = ne.a, i[me + c] = ne.b, Se(Ie, He), i[ye + c] = ne.a, i[gt + c] = ne.b) : (rt(i[Ae + c], i[ye + c]), de = ne.a, Ie = ne.b, rt(i[me + c], i[gt + c]), ve = ne.a, He = ne.b, rt(de, ve), i[Ae + c] = ne.a, i[me + c] = ne.b, rt(Ie, He), i[ye + c] = ne.a, i[gt + c] = ne.b);
          }
          if (h & I) {
            var ye = Ae + L;
            w ? Se(i[Ae + c], i[ye + c]) : rt(i[Ae + c], i[ye + c]), de = ne.a, i[ye + c] = ne.b, i[Ae + c] = de;
          }
        }
        if (p & I) for (var Ae = S, lt = S + g * (h - y); Ae <= lt; Ae += $) {
          var me = Ae + X;
          w ? Se(i[Ae + c], i[me + c]) : rt(i[Ae + c], i[me + c]), de = ne.a, i[me + c] = ne.b, i[Ae + c] = de;
        }
        y = I, I >>= 1;
      }
      return S;
    }
    function Zt(i, c, h, g, p, v, D, w, T, I) {
      for (var y = 0, S = 0, Me = w, L = Math.trunc(p.value + (v + 7) / 8); p.value < L; ) for (_e(y, S, h, p), y = se.c, S = se.lc; S >= 14; ) {
        var N = y >> S - 14 & 16383, X = c[N];
        if (X.len) S -= X.len, Te(X.lit, D, y, S, h, g, p, T, I, Me), y = pe.c, S = pe.lc;
        else {
          if (!X.p) throw "hufDecode issues";
          var $;
          for ($ = 0; $ < X.lit; $++) {
            for (var de = we(i[X.p[$]]); S < de && p.value < L; ) _e(y, S, h, p), y = se.c, S = se.lc;
            if (S >= de && le(i[X.p[$]]) == (y >> S - de & (1 << de) - 1)) {
              S -= de, Te(X.p[$], D, y, S, h, g, p, T, I, Me), y = pe.c, S = pe.lc;
              break;
            }
          }
          if ($ == X.lit) throw "hufDecode issues";
        }
      }
      var ve = 8 - v & 7;
      for (y >>= ve, S -= ve; S > 0; ) {
        var X = c[y << 14 - S & 16383];
        if (X.len) S -= X.len, Te(X.lit, D, y, S, h, g, p, T, I, Me), y = pe.c, S = pe.lc;
        else throw "hufDecode issues";
      }
      return true;
    }
    function Jt(i, c, h, g, p, v) {
      var D = { value: 0 }, w = h.value, T = ke(c, h), I = ke(c, h);
      h.value += 4;
      var y = ke(c, h);
      if (h.value += 4, T < 0 || T >= 65537 || I < 0 || I >= 65537) throw "Something wrong with HUF_ENCSIZE";
      var S = new Array(65537), Me = new Array(16384);
      G(Me);
      var L = g - (h.value - w);
      if (j(i, c, h, L, T, I, S), y > 8 * (g - (h.value - w))) throw "Something wrong with hufUncompress";
      Re(S, T, I, Me), Zt(S, Me, i, c, h, y, I, v, p, D);
    }
    function is(i, c, h) {
      for (var g = 0; g < h; ++g) c[g] = i[c[g]];
    }
    function Rt(i) {
      for (var c = 1; c < i.length; c++) {
        var h = i[c - 1] + i[c] - 128;
        i[c] = h;
      }
    }
    function Gt(i, c) {
      for (var h = 0, g = Math.floor((i.length + 1) / 2), p = 0, v = i.length - 1; !(p > v || (c[p++] = i[h++], p > v)); ) c[p++] = i[g++];
    }
    function Ir(i) {
      for (var c = i.byteLength, h = new Array(), g = 0, p = new DataView(i); c > 0; ) {
        var v = p.getInt8(g++);
        if (v < 0) {
          var D = -v;
          c -= D + 1;
          for (var w = 0; w < D; w++) h.push(p.getUint8(g++));
        } else {
          var D = v;
          c -= 2;
          for (var T = p.getUint8(g++), w = 0; w < D + 1; w++) h.push(T);
        }
      }
      return h;
    }
    function as(i, c, h, g, p, v) {
      var me = new DataView(v.buffer), D = h[i.idx[0]].width, w = h[i.idx[0]].height, T = 3, I = Math.floor(D / 8), y = Math.ceil(D / 8), S = Math.ceil(w / 8), Me = D - (y - 1) * 8, L = w - (S - 1) * 8, N = { value: 0 }, X = new Array(T), $ = new Array(T), de = new Array(T), ve = new Array(T), Ie = new Array(T);
      for (let he = 0; he < T; ++he) Ie[he] = c[i.idx[he]], X[he] = he < 1 ? 0 : X[he - 1] + y * S, $[he] = new Float32Array(64), de[he] = new Uint16Array(64), ve[he] = new Uint16Array(y * 64);
      for (let he = 0; he < S; ++he) {
        var He = 8;
        he == S - 1 && (He = L);
        var Ae = 8;
        for (let Ee = 0; Ee < y; ++Ee) {
          Ee == y - 1 && (Ae = Me);
          for (let ce = 0; ce < T; ++ce) de[ce].fill(0), de[ce][0] = p[X[ce]++], os(N, g, de[ce]), cs(de[ce], $[ce]), qt($[ce]);
          Tr($);
          for (let ce = 0; ce < T; ++ce) Ht($[ce], ve[ce], Ee * 64);
        }
        let Oe = 0;
        for (let Ee = 0; Ee < T; ++Ee) {
          const ce = h[i.idx[Ee]].type;
          for (let Je = 8 * he; Je < 8 * he + He; ++Je) {
            Oe = Ie[Ee][Je];
            for (let Pt = 0; Pt < I; ++Pt) {
              const Ye = Pt * 64 + (Je & 7) * 8;
              me.setUint16(Oe + 0 * 2 * ce, ve[Ee][Ye + 0], true), me.setUint16(Oe + 1 * 2 * ce, ve[Ee][Ye + 1], true), me.setUint16(Oe + 2 * 2 * ce, ve[Ee][Ye + 2], true), me.setUint16(Oe + 3 * 2 * ce, ve[Ee][Ye + 3], true), me.setUint16(Oe + 4 * 2 * ce, ve[Ee][Ye + 4], true), me.setUint16(Oe + 5 * 2 * ce, ve[Ee][Ye + 5], true), me.setUint16(Oe + 6 * 2 * ce, ve[Ee][Ye + 6], true), me.setUint16(Oe + 7 * 2 * ce, ve[Ee][Ye + 7], true), Oe += 8 * 2 * ce;
            }
          }
          if (I != y) for (let Je = 8 * he; Je < 8 * he + He; ++Je) {
            const Pt = Ie[Ee][Je] + 8 * I * 2 * ce, Ye = I * 64 + (Je & 7) * 8;
            for (let xt = 0; xt < Ae; ++xt) me.setUint16(Pt + xt * 2 * ce, ve[Ee][Ye + xt], true);
          }
        }
      }
      for (var lt = new Uint16Array(D), me = new DataView(v.buffer), ye = 0; ye < T; ++ye) {
        h[i.idx[ye]].decoded = true;
        var gt = h[i.idx[ye]].type;
        if (h[ye].type == 2) for (var nr = 0; nr < w; ++nr) {
          const he = Ie[ye][nr];
          for (var Ze = 0; Ze < D; ++Ze) lt[Ze] = me.getUint16(he + Ze * 2 * gt, true);
          for (var Ze = 0; Ze < D; ++Ze) me.setFloat32(he + Ze * 2 * gt, O(lt[Ze]), true);
        }
      }
    }
    function os(i, c, h) {
      for (var g, p = 1; p < 64; ) g = c[i.value], g == 65280 ? p = 64 : g >> 8 == 255 ? p += g & 255 : (h[p] = g, p++), i.value++;
    }
    function cs(i, c) {
      c[0] = O(i[0]), c[1] = O(i[1]), c[2] = O(i[5]), c[3] = O(i[6]), c[4] = O(i[14]), c[5] = O(i[15]), c[6] = O(i[27]), c[7] = O(i[28]), c[8] = O(i[2]), c[9] = O(i[4]), c[10] = O(i[7]), c[11] = O(i[13]), c[12] = O(i[16]), c[13] = O(i[26]), c[14] = O(i[29]), c[15] = O(i[42]), c[16] = O(i[3]), c[17] = O(i[8]), c[18] = O(i[12]), c[19] = O(i[17]), c[20] = O(i[25]), c[21] = O(i[30]), c[22] = O(i[41]), c[23] = O(i[43]), c[24] = O(i[9]), c[25] = O(i[11]), c[26] = O(i[18]), c[27] = O(i[24]), c[28] = O(i[31]), c[29] = O(i[40]), c[30] = O(i[44]), c[31] = O(i[53]), c[32] = O(i[10]), c[33] = O(i[19]), c[34] = O(i[23]), c[35] = O(i[32]), c[36] = O(i[39]), c[37] = O(i[45]), c[38] = O(i[52]), c[39] = O(i[54]), c[40] = O(i[20]), c[41] = O(i[22]), c[42] = O(i[33]), c[43] = O(i[38]), c[44] = O(i[46]), c[45] = O(i[51]), c[46] = O(i[55]), c[47] = O(i[60]), c[48] = O(i[21]), c[49] = O(i[34]), c[50] = O(i[37]), c[51] = O(i[47]), c[52] = O(i[50]), c[53] = O(i[56]), c[54] = O(i[59]), c[55] = O(i[61]), c[56] = O(i[35]), c[57] = O(i[36]), c[58] = O(i[48]), c[59] = O(i[49]), c[60] = O(i[57]), c[61] = O(i[58]), c[62] = O(i[62]), c[63] = O(i[63]);
    }
    function qt(i) {
      const c = 0.5 * Math.cos(0.7853975), h = 0.5 * Math.cos(3.14159 / 16), g = 0.5 * Math.cos(3.14159 / 8), p = 0.5 * Math.cos(3 * 3.14159 / 16), v = 0.5 * Math.cos(5 * 3.14159 / 16), D = 0.5 * Math.cos(3 * 3.14159 / 8), w = 0.5 * Math.cos(7 * 3.14159 / 16);
      for (var T = new Array(4), I = new Array(4), y = new Array(4), S = new Array(4), Me = 0; Me < 8; ++Me) {
        var L = Me * 8;
        T[0] = g * i[L + 2], T[1] = D * i[L + 2], T[2] = g * i[L + 6], T[3] = D * i[L + 6], I[0] = h * i[L + 1] + p * i[L + 3] + v * i[L + 5] + w * i[L + 7], I[1] = p * i[L + 1] - w * i[L + 3] - h * i[L + 5] - v * i[L + 7], I[2] = v * i[L + 1] - h * i[L + 3] + w * i[L + 5] + p * i[L + 7], I[3] = w * i[L + 1] - v * i[L + 3] + p * i[L + 5] - h * i[L + 7], y[0] = c * (i[L + 0] + i[L + 4]), y[3] = c * (i[L + 0] - i[L + 4]), y[1] = T[0] + T[3], y[2] = T[1] - T[2], S[0] = y[0] + y[1], S[1] = y[3] + y[2], S[2] = y[3] - y[2], S[3] = y[0] - y[1], i[L + 0] = S[0] + I[0], i[L + 1] = S[1] + I[1], i[L + 2] = S[2] + I[2], i[L + 3] = S[3] + I[3], i[L + 4] = S[3] - I[3], i[L + 5] = S[2] - I[2], i[L + 6] = S[1] - I[1], i[L + 7] = S[0] - I[0];
      }
      for (var N = 0; N < 8; ++N) T[0] = g * i[16 + N], T[1] = D * i[16 + N], T[2] = g * i[48 + N], T[3] = D * i[48 + N], I[0] = h * i[8 + N] + p * i[24 + N] + v * i[40 + N] + w * i[56 + N], I[1] = p * i[8 + N] - w * i[24 + N] - h * i[40 + N] - v * i[56 + N], I[2] = v * i[8 + N] - h * i[24 + N] + w * i[40 + N] + p * i[56 + N], I[3] = w * i[8 + N] - v * i[24 + N] + p * i[40 + N] - h * i[56 + N], y[0] = c * (i[N] + i[32 + N]), y[3] = c * (i[N] - i[32 + N]), y[1] = T[0] + T[3], y[2] = T[1] - T[2], S[0] = y[0] + y[1], S[1] = y[3] + y[2], S[2] = y[3] - y[2], S[3] = y[0] - y[1], i[0 + N] = S[0] + I[0], i[8 + N] = S[1] + I[1], i[16 + N] = S[2] + I[2], i[24 + N] = S[3] + I[3], i[32 + N] = S[3] - I[3], i[40 + N] = S[2] - I[2], i[48 + N] = S[1] - I[1], i[56 + N] = S[0] - I[0];
    }
    function Tr(i) {
      for (var c = 0; c < 64; ++c) {
        var h = i[0][c], g = i[1][c], p = i[2][c];
        i[0][c] = h + 1.5747 * p, i[1][c] = h - 0.1873 * g - 0.4682 * p, i[2][c] = h + 1.8556 * g;
      }
    }
    function Ht(i, c, h) {
      for (var g = 0; g < 64; ++g) c[h + g] = jt.toHalfFloat(yr(i[g]));
    }
    function yr(i) {
      return i <= 1 ? Math.sign(i) * Math.pow(Math.abs(i), 2.2) : Math.sign(i) * Math.pow(b, Math.abs(i) - 1);
    }
    function $t(i) {
      return new DataView(i.array.buffer, i.offset.value, i.size);
    }
    function Rr(i) {
      var c = i.viewer.buffer.slice(i.offset.value, i.offset.value + i.size), h = new Uint8Array(Ir(c)), g = new Uint8Array(h.length);
      return Rt(h), Gt(h, g), new DataView(g.buffer);
    }
    function bt(i) {
      var c = i.array.slice(i.offset.value, i.offset.value + i.size), h = Fr(c), g = new Uint8Array(h.length);
      return Rt(h), Gt(h, g), new DataView(g.buffer);
    }
    function br(i) {
      for (var c = i.viewer, h = { value: i.offset.value }, g = new Uint16Array(i.width * i.scanlineBlockSize * (i.channels * i.type)), p = new Uint8Array(8192), v = 0, D = new Array(i.channels), w = 0; w < i.channels; w++) D[w] = {}, D[w].start = v, D[w].end = D[w].start, D[w].nx = i.width, D[w].ny = i.lines, D[w].size = i.type, v += D[w].nx * D[w].ny * D[w].size;
      var T = tr(c, h), I = tr(c, h);
      if (I >= 8192) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (T <= I) for (var w = 0; w < I - T + 1; w++) p[w + T] = kt(c, h);
      var y = new Uint16Array(65536), S = Q(p, y), Me = ke(c, h);
      Jt(i.array, c, h, Me, g, v);
      for (var w = 0; w < i.channels; ++w) for (var L = D[w], N = 0; N < D[w].size; ++N) ft(g, L.start + N, L.nx, L.size, L.ny, L.nx * L.size, S);
      is(y, g, v);
      for (var X = 0, $ = new Uint8Array(g.buffer.byteLength), de = 0; de < i.lines; de++) for (var ve = 0; ve < i.channels; ve++) {
        var L = D[ve], Ie = L.nx * L.size, He = new Uint8Array(g.buffer, L.end * 2, Ie * 2);
        $.set(He, X), X += Ie * 2, L.end += Ie;
      }
      return new DataView($.buffer);
    }
    function Nt(i) {
      var c = i.array.slice(i.offset.value, i.offset.value + i.size), h = Fr(c);
      const g = i.lines * i.channels * i.width, p = i.type == 1 ? new Uint16Array(g) : new Uint32Array(g);
      let v = 0, D = 0;
      const w = new Array(4);
      for (let T = 0; T < i.lines; T++) for (let I = 0; I < i.channels; I++) {
        let y = 0;
        switch (i.type) {
          case 1:
            w[0] = v, w[1] = w[0] + i.width, v = w[1] + i.width;
            for (let S = 0; S < i.width; ++S) {
              const Me = h[w[0]++] << 8 | h[w[1]++];
              y += Me, p[D] = y, D++;
            }
            break;
          case 2:
            w[0] = v, w[1] = w[0] + i.width, w[2] = w[1] + i.width, v = w[2] + i.width;
            for (let S = 0; S < i.width; ++S) {
              const Me = h[w[0]++] << 24 | h[w[1]++] << 16 | h[w[2]++] << 8;
              y += Me, p[D] = y, D++;
            }
            break;
        }
      }
      return new DataView(p.buffer);
    }
    function er(i) {
      var c = i.viewer, h = { value: i.offset.value }, g = new Uint8Array(i.width * i.lines * (i.channels * i.type * 2)), p = { version: Ke(c, h), unknownUncompressedSize: Ke(c, h), unknownCompressedSize: Ke(c, h), acCompressedSize: Ke(c, h), dcCompressedSize: Ke(c, h), rleCompressedSize: Ke(c, h), rleUncompressedSize: Ke(c, h), rleRawSize: Ke(c, h), totalAcUncompressedCount: Ke(c, h), totalDcUncompressedCount: Ke(c, h), acCompression: Ke(c, h) };
      if (p.version < 2) throw "EXRLoader.parse: " + sr.compression + " version " + p.version + " is unsupported";
      for (var v = new Array(), D = tr(c, h) - 2; D > 0; ) {
        var w = zt(c.buffer, h), T = kt(c, h), I = T >> 2 & 3, y = (T >> 4) - 1, S = new Int8Array([y])[0], Me = kt(c, h);
        v.push({ name: w, index: S, type: Me, compression: I }), D -= w.length + 3;
      }
      for (var L = sr.channels, N = new Array(i.channels), X = 0; X < i.channels; ++X) {
        var $ = N[X] = {}, de = L[X];
        $.name = de.name, $.compression = 0, $.decoded = false, $.type = de.pixelType, $.pLinear = de.pLinear, $.width = i.width, $.height = i.lines;
      }
      for (var ve = { idx: new Array(3) }, Ie = 0; Ie < i.channels; ++Ie) for (var $ = N[Ie], X = 0; X < v.length; ++X) {
        var He = v[X];
        $.name == He.name && ($.compression = He.compression, He.index >= 0 && (ve.idx[He.index] = Ie), $.offset = Ie);
      }
      if (p.acCompressedSize > 0) switch (p.acCompression) {
        case 0:
          var me = new Uint16Array(p.totalAcUncompressedCount);
          Jt(i.array, c, h, p.acCompressedSize, me, p.totalAcUncompressedCount);
          break;
        case 1:
          var Ae = i.array.slice(h.value, h.value + p.totalAcUncompressedCount), lt = Fr(Ae), me = new Uint16Array(lt.buffer);
          h.value += p.totalAcUncompressedCount;
          break;
      }
      if (p.dcCompressedSize > 0) {
        var ye = { array: i.array, offset: h, size: p.dcCompressedSize }, gt = new Uint16Array(bt(ye).buffer);
        h.value += p.dcCompressedSize;
      }
      if (p.rleRawSize > 0) {
        var Ae = i.array.slice(h.value, h.value + p.rleCompressedSize), lt = Fr(Ae), nr = Ir(lt.buffer);
        h.value += p.rleCompressedSize;
      }
      for (var Ze = 0, he = new Array(N.length), X = 0; X < he.length; ++X) he[X] = new Array();
      for (var Oe = 0; Oe < i.lines; ++Oe) for (var Ee = 0; Ee < N.length; ++Ee) he[Ee].push(Ze), Ze += N[Ee].width * i.type * 2;
      as(ve, he, N, me, gt, g);
      for (var X = 0; X < N.length; ++X) {
        var $ = N[X];
        if (!$.decoded) switch ($.compression) {
          case 2:
            for (var ce = 0, Je = 0, Oe = 0; Oe < i.lines; ++Oe) {
              for (var Pt = he[X][ce], Ye = 0; Ye < $.width; ++Ye) {
                for (var xt = 0; xt < 2 * $.type; ++xt) g[Pt++] = nr[Je + xt * $.width * $.height];
                Je++;
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
    function zt(i, c) {
      for (var h = new Uint8Array(i), g = 0; h[c.value + g] != 0; ) g += 1;
      var p = new TextDecoder().decode(h.slice(c.value, c.value + g));
      return c.value = c.value + g + 1, p;
    }
    function _(i, c, h) {
      var g = new TextDecoder().decode(new Uint8Array(i).slice(c.value, c.value + h));
      return c.value = c.value + h, g;
    }
    function ae(i, c) {
      var h = Xe(i, c), g = ke(i, c);
      return [h, g];
    }
    function De(i, c) {
      var h = ke(i, c), g = ke(i, c);
      return [h, g];
    }
    function Xe(i, c) {
      var h = i.getInt32(c.value, true);
      return c.value = c.value + 4, h;
    }
    function ke(i, c) {
      var h = i.getUint32(c.value, true);
      return c.value = c.value + 4, h;
    }
    function js(i, c) {
      var h = i[c.value];
      return c.value = c.value + 1, h;
    }
    function kt(i, c) {
      var h = i.getUint8(c.value);
      return c.value = c.value + 1, h;
    }
    const Ke = function(i, c) {
      let h;
      return "getBigInt64" in DataView.prototype ? h = Number(i.getBigInt64(c.value, true)) : h = i.getUint32(c.value + 4, true) + Number(i.getUint32(c.value, true) << 32), c.value += 8, h;
    };
    function Pe(i, c) {
      var h = i.getFloat32(c.value, true);
      return c.value += 4, h;
    }
    function hi(i, c) {
      return jt.toHalfFloat(Pe(i, c));
    }
    function O(i) {
      var c = (i & 31744) >> 10, h = i & 1023;
      return (i >> 15 ? -1 : 1) * (c ? c === 31 ? h ? NaN : 1 / 0 : Math.pow(2, c - 15) * (1 + h / 1024) : 6103515625e-14 * (h / 1024));
    }
    function tr(i, c) {
      var h = i.getUint16(c.value, true);
      return c.value += 2, h;
    }
    function fi(i, c) {
      return O(tr(i, c));
    }
    function gi(i, c, h, g) {
      for (var p = h.value, v = []; h.value < p + g - 1; ) {
        var D = zt(c, h), w = Xe(i, h), T = kt(i, h);
        h.value += 3;
        var I = Xe(i, h), y = Xe(i, h);
        v.push({ name: D, pixelType: w, pLinear: T, xSampling: I, ySampling: y });
      }
      return h.value += 1, v;
    }
    function pi(i, c) {
      var h = Pe(i, c), g = Pe(i, c), p = Pe(i, c), v = Pe(i, c), D = Pe(i, c), w = Pe(i, c), T = Pe(i, c), I = Pe(i, c);
      return { redX: h, redY: g, greenX: p, greenY: v, blueX: D, blueY: w, whiteX: T, whiteY: I };
    }
    function vi(i, c) {
      var h = ["NO_COMPRESSION", "RLE_COMPRESSION", "ZIPS_COMPRESSION", "ZIP_COMPRESSION", "PIZ_COMPRESSION", "PXR24_COMPRESSION", "B44_COMPRESSION", "B44A_COMPRESSION", "DWAA_COMPRESSION", "DWAB_COMPRESSION"], g = kt(i, c);
      return h[g];
    }
    function Ai(i, c) {
      var h = ke(i, c), g = ke(i, c), p = ke(i, c), v = ke(i, c);
      return { xMin: h, yMin: g, xMax: p, yMax: v };
    }
    function mi(i, c) {
      var h = ["INCREASING_Y"], g = kt(i, c);
      return h[g];
    }
    function xi(i, c) {
      var h = Pe(i, c), g = Pe(i, c);
      return [h, g];
    }
    function Ei(i, c) {
      var h = Pe(i, c), g = Pe(i, c), p = Pe(i, c);
      return [h, g, p];
    }
    function wi(i, c, h, g, p) {
      if (g === "string" || g === "stringvector" || g === "iccProfile") return _(c, h, p);
      if (g === "chlist") return gi(i, c, h, p);
      if (g === "chromaticities") return pi(i, h);
      if (g === "compression") return vi(i, h);
      if (g === "box2i") return Ai(i, h);
      if (g === "lineOrder") return mi(i, h);
      if (g === "float") return Pe(i, h);
      if (g === "v2f") return xi(i, h);
      if (g === "v3f") return Ei(i, h);
      if (g === "int") return Xe(i, h);
      if (g === "rational") return ae(i, h);
      if (g === "timecode") return De(i, h);
      if (g === "preview") return h.value += p, "skipped";
      h.value += p;
    }
    function Mi(i, c, h) {
      const g = {};
      if (i.getUint32(0, true) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      g.version = i.getUint8(4);
      const p = i.getUint8(5);
      g.spec = { singleTile: !!(p & 2), longName: !!(p & 4), deepFormat: !!(p & 8), multiPart: !!(p & 16) }, h.value = 8;
      for (var v = true; v; ) {
        var D = zt(c, h);
        if (D == 0) v = false;
        else {
          var w = zt(c, h), T = ke(i, h), I = wi(i, c, h, w, T);
          I === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${w}'.`) : g[D] = I;
        }
      }
      if (p & -5) throw console.error("EXRHeader:", g), "THREE.EXRLoader: provided file is currently unsupported.";
      return g;
    }
    function Ci(i, c, h, g, p) {
      const v = { size: 0, viewer: c, array: h, offset: g, width: i.dataWindow.xMax - i.dataWindow.xMin + 1, height: i.dataWindow.yMax - i.dataWindow.yMin + 1, channels: i.channels.length, bytesPerLine: null, lines: null, inputSize: null, type: i.channels[0].pixelType, uncompress: null, getter: null, format: null, [ar ? "colorSpace" : "encoding"]: null };
      switch (i.compression) {
        case "NO_COMPRESSION":
          v.lines = 1, v.uncompress = $t;
          break;
        case "RLE_COMPRESSION":
          v.lines = 1, v.uncompress = Rr;
          break;
        case "ZIPS_COMPRESSION":
          v.lines = 1, v.uncompress = bt;
          break;
        case "ZIP_COMPRESSION":
          v.lines = 16, v.uncompress = bt;
          break;
        case "PIZ_COMPRESSION":
          v.lines = 32, v.uncompress = br;
          break;
        case "PXR24_COMPRESSION":
          v.lines = 16, v.uncompress = Nt;
          break;
        case "DWAA_COMPRESSION":
          v.lines = 32, v.uncompress = er;
          break;
        case "DWAB_COMPRESSION":
          v.lines = 256, v.uncompress = er;
          break;
        default:
          throw "EXRLoader.parse: " + i.compression + " is unsupported";
      }
      if (v.scanlineBlockSize = v.lines, v.type == 1) switch (p) {
        case it:
          v.getter = fi, v.inputSize = 2;
          break;
        case Ve:
          v.getter = tr, v.inputSize = 2;
          break;
      }
      else if (v.type == 2) switch (p) {
        case it:
          v.getter = Pe, v.inputSize = 4;
          break;
        case Ve:
          v.getter = hi, v.inputSize = 4;
      }
      else throw "EXRLoader.parse: unsupported pixelType " + v.type + " for " + i.compression + ".";
      v.blockCount = (i.dataWindow.yMax + 1) / v.scanlineBlockSize;
      for (var D = 0; D < v.blockCount; D++) Ke(c, g);
      v.outputChannels = v.channels == 3 ? 4 : v.channels;
      const w = v.width * v.height * v.outputChannels;
      switch (p) {
        case it:
          v.byteArray = new Float32Array(w), v.channels < v.outputChannels && v.byteArray.fill(1, 0, w);
          break;
        case Ve:
          v.byteArray = new Uint16Array(w), v.channels < v.outputChannels && v.byteArray.fill(15360, 0, w);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", p);
          break;
      }
      return v.bytesPerLine = v.width * v.inputSize * v.channels, v.outputChannels == 4 ? v.format = wr : v.format = Ri, ar ? v.colorSpace = "srgb-linear" : v.encoding = 3e3, v;
    }
    const Pr = new DataView(t), Di = new Uint8Array(t), rr = { value: 0 }, sr = Mi(Pr, t, rr), re = Ci(sr, Pr, Di, rr, this.type), Ys = { value: 0 }, Bi = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let i = 0; i < re.height / re.scanlineBlockSize; i++) {
      const c = ke(Pr, rr);
      re.size = ke(Pr, rr), re.lines = c + re.scanlineBlockSize > re.height ? re.height - c : re.scanlineBlockSize;
      const g = re.size < re.lines * re.bytesPerLine ? re.uncompress(re) : $t(re);
      rr.value += re.size;
      for (let p = 0; p < re.scanlineBlockSize; p++) {
        const v = p + i * re.scanlineBlockSize;
        if (v >= re.height) break;
        for (let D = 0; D < re.channels; D++) {
          const w = Bi[sr.channels[D].name];
          for (let T = 0; T < re.width; T++) {
            Ys.value = (p * (re.channels * re.width) + D * re.width + T) * re.inputSize;
            const I = (re.height - 1 - v) * (re.width * re.outputChannels) + T * re.outputChannels + w;
            re.byteArray[I] = re.getter(g, Ys);
          }
        }
      }
    }
    return { header: sr, width: re.width, height: re.height, data: re.byteArray, format: re.format, [ar ? "colorSpace" : "encoding"]: re[ar ? "colorSpace" : "encoding"], type: this.type };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, s, n) {
    function a(o, u) {
      ar ? o.colorSpace = u.colorSpace : o.encoding = u.encoding, o.minFilter = Ue, o.magFilter = Ue, o.generateMipmaps = false, o.flipY = false, r && r(o, u);
    }
    return super.load(t, a, s, n);
  }
}
const ja = () => parseInt(es.replace(/\D+/g, "")), Ya = ja(), Wn = (e3, t, r) => {
  let s;
  switch (e3) {
    case ot:
      s = new Uint8ClampedArray(t * r * 4);
      break;
    case Ve:
      s = new Uint16Array(t * r * 4);
      break;
    case Li:
      s = new Uint32Array(t * r * 4);
      break;
    case Ui:
      s = new Int8Array(t * r * 4);
      break;
    case Fi:
      s = new Int16Array(t * r * 4);
      break;
    case Oi:
      s = new Int32Array(t * r * 4);
      break;
    case it:
      s = new Float32Array(t * r * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return s;
};
let Ur;
const Wa = (e3, t, r, s) => {
  if (Ur !== void 0) return Ur;
  const n = new Qe(1, 1, s);
  t.setRenderTarget(n);
  const a = new $r(new yn(), new Gi({ color: 16777215 }));
  t.render(a, r), t.setRenderTarget(null);
  const o = Wn(e3, n.width, n.height);
  return t.readRenderTargetPixels(n, 0, 0, n.width, n.height, o), n.dispose(), a.geometry.dispose(), a.material.dispose(), Ur = o[0] !== 0, Ur;
};
class Us {
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
    const r = { format: wr, depthBuffer: false, stencilBuffer: false, type: this._type, colorSpace: this._colorSpace, anisotropy: ((_a2 = t.renderTargetOptions) == null ? void 0 : _a2.anisotropy) !== void 0 ? (_b = t.renderTargetOptions) == null ? void 0 : _b.anisotropy : 1, generateMipmaps: ((_c2 = t.renderTargetOptions) == null ? void 0 : _c2.generateMipmaps) !== void 0 ? (_d = t.renderTargetOptions) == null ? void 0 : _d.generateMipmaps : false, magFilter: ((_e = t.renderTargetOptions) == null ? void 0 : _e.magFilter) !== void 0 ? (_f = t.renderTargetOptions) == null ? void 0 : _f.magFilter : Ue, minFilter: ((_g = t.renderTargetOptions) == null ? void 0 : _g.minFilter) !== void 0 ? (_h = t.renderTargetOptions) == null ? void 0 : _h.minFilter : Ue, samples: ((_i2 = t.renderTargetOptions) == null ? void 0 : _i2.samples) !== void 0 ? (_j = t.renderTargetOptions) == null ? void 0 : _j.samples : void 0, wrapS: ((_k = t.renderTargetOptions) == null ? void 0 : _k.wrapS) !== void 0 ? (_l2 = t.renderTargetOptions) == null ? void 0 : _l2.wrapS : Bt, wrapT: ((_m = t.renderTargetOptions) == null ? void 0 : _m.wrapT) !== void 0 ? (_n2 = t.renderTargetOptions) == null ? void 0 : _n2.wrapT : Bt };
    if (this._material = t.material, t.renderer ? this._renderer = t.renderer : (this._renderer = Us.instantiateRenderer(), this._rendererIsDisposable = true), this._scene = new Wr(), this._camera = new Tn(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !Wa(this._type, this._renderer, this._camera, r)) {
      let s;
      switch (this._type) {
        case Ve:
          s = this._renderer.extensions.has("EXT_color_buffer_float") ? it : void 0;
          break;
      }
      s !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${it}`), this._type = s) : (this._supportsReadPixels = false, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
    }
    this._quad = new $r(new yn(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new Qe(this.width, this.height, r), this._renderTarget.texture.mapping = ((_o2 = t.renderTargetOptions) == null ? void 0 : _o2.mapping) !== void 0 ? (_p = t.renderTargetOptions) == null ? void 0 : _p.mapping : Vr;
  }
  static instantiateRenderer() {
    const t = new bi();
    return t.setSize(128, 128), t;
  }
  toArray() {
    if (!this._supportsReadPixels) throw new Error("Can't read pixels in this browser");
    const t = Wn(this._type, this._width, this._height);
    return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, t), t;
  }
  toDataTexture(t) {
    const r = new Pi(this.toArray(), this.width, this.height, wr, this._type, (t == null ? void 0 : t.mapping) || Vr, (t == null ? void 0 : t.wrapS) || Bt, (t == null ? void 0 : t.wrapT) || Bt, (t == null ? void 0 : t.magFilter) || Ue, (t == null ? void 0 : t.minFilter) || Ue, (t == null ? void 0 : t.anisotropy) || 1, Mr);
    return r.generateMipmaps = (t == null ? void 0 : t.generateMipmaps) !== void 0 ? t == null ? void 0 : t.generateMipmaps : false, r;
  }
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
  }
  dispose(t) {
    this.disposeOnDemandRenderer(), t && this.renderTarget.dispose(), this.material instanceof je && Object.values(this.material.uniforms).forEach((r) => {
      r.value instanceof ut && r.value.dispose();
    }), Object.values(this.material).forEach((r) => {
      r instanceof ut && r.dispose();
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
class Vn extends Error {
}
class _n extends Error {
}
const or = (e3, t, r) => {
  const s = new RegExp(`${t}="([^"]*)"`, "i").exec(e3);
  if (s) return s[1];
  const n = new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i").exec(e3);
  if (n) {
    const a = n[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return a && a.length === 3 ? a.map((o) => o.replace(/<\/?rdf:li>/g, "")) : n[1].trim();
  }
  if (r !== void 0) return r;
  throw new Error(`Can't find ${t} in gainmap metadata`);
}, Va = (e3) => {
  let t;
  typeof TextDecoder < "u" ? t = new TextDecoder().decode(e3) : t = e3.toString();
  let r = t.indexOf("<x:xmpmeta");
  for (; r !== -1; ) {
    const s = t.indexOf("x:xmpmeta>", r), n = t.slice(r, s + 10);
    try {
      const a = or(n, "hdrgm:GainMapMin", "0"), o = or(n, "hdrgm:GainMapMax"), u = or(n, "hdrgm:Gamma", "1"), d = or(n, "hdrgm:OffsetSDR", "0.015625"), f = or(n, "hdrgm:OffsetHDR", "0.015625"), m = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(n), A = m ? m[1] : "0", E = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(n);
      if (!E) throw new Error("Incomplete gainmap metadata");
      const M = E[1];
      return { gainMapMin: Array.isArray(a) ? a.map((F) => parseFloat(F)) : [parseFloat(a), parseFloat(a), parseFloat(a)], gainMapMax: Array.isArray(o) ? o.map((F) => parseFloat(F)) : [parseFloat(o), parseFloat(o), parseFloat(o)], gamma: Array.isArray(u) ? u.map((F) => parseFloat(F)) : [parseFloat(u), parseFloat(u), parseFloat(u)], offsetSdr: Array.isArray(d) ? d.map((F) => parseFloat(F)) : [parseFloat(d), parseFloat(d), parseFloat(d)], offsetHdr: Array.isArray(f) ? f.map((F) => parseFloat(F)) : [parseFloat(f), parseFloat(f), parseFloat(f)], hdrCapacityMin: parseFloat(A), hdrCapacityMax: parseFloat(M) };
    } catch {
    }
    r = t.indexOf("<x:xmpmeta", s);
  }
};
class _a {
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
          const m = u + 4;
          if (a.getUint32(m) === 1297106432) {
            const A = m + 4;
            let E;
            if (a.getUint16(A) === 18761) E = false;
            else if (a.getUint16(A) === 19789) E = true;
            else {
              s(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (a.getUint16(A + 2, !E) !== 42) {
              s(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const M = a.getUint32(A + 4, !E);
            if (M < 8) {
              s(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const F = A + M, q = a.getUint16(F, !E), k = F + 2;
            let W = 0;
            for (let J = k; J < k + 12 * q; J += 12) a.getUint16(J, !E) === 45057 && (W = a.getUint32(J + 8, !E));
            const H = F + 2 + q * 12 + 4, te = [];
            for (let J = H; J < H + W * 16; J += 16) {
              const K = { MPType: a.getUint32(J, !E), size: a.getUint32(J + 4, !E), dataOffset: a.getUint32(J + 8, !E), dependantImages: a.getUint32(J + 12, !E), start: -1, end: -1, isFII: false };
              K.dataOffset ? (K.start = A + K.dataOffset, K.isFII = false) : (K.start = 0, K.isFII = true), K.end = K.start + K.size, te.push(K);
            }
            if (this.options.extractNonFII && te.length) {
              const J = new Blob([a]), K = [];
              for (const oe of te) {
                if (oe.isFII && !this.options.extractFII) continue;
                const C = J.slice(oe.start, oe.end + 1, "image/jpeg");
                K.push(C);
              }
              r(K);
            }
          }
        }
        u += 2 + a.getUint16(u + 2);
      }
    });
  }
}
const Xa = async (e3) => {
  const t = Va(e3);
  if (!t) throw new _n("Gain map XMP metadata not found");
  const s = await new _a({ extractFII: true, extractNonFII: true }).extract(e3);
  if (s.length !== 2) throw new Vn("Gain map recovery image not found");
  return { sdr: new Uint8Array(await s[0].arrayBuffer()), gainMap: new Uint8Array(await s[1].arrayBuffer()), metadata: t };
}, Xs = (e3) => new Promise((t, r) => {
  const s = document.createElement("img");
  s.onload = () => {
    t(s);
  }, s.onerror = (n) => {
    r(n);
  }, s.src = URL.createObjectURL(e3);
});
class Ka extends Hi {
  constructor(t, r) {
    super(r);
    __publicField(this, "_renderer");
    __publicField(this, "_renderTargetOptions");
    __publicField(this, "_internalLoadingManager");
    __publicField(this, "_config");
    this._config = t, t.renderer && (this._renderer = t.renderer), this._internalLoadingManager = new Rn();
  }
  setRenderer(t) {
    return this._renderer = t, this;
  }
  setRenderTargetOptions(t) {
    return this._renderTargetOptions = t, this;
  }
  prepareQuadRenderer() {
    this._renderer || console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    const t = this._config.createMaterial({ gainMapMax: [1, 1, 1], gainMapMin: [0, 0, 0], gamma: [1, 1, 1], offsetHdr: [1, 1, 1], offsetSdr: [1, 1, 1], hdrCapacityMax: 1, hdrCapacityMin: 0, maxDisplayBoost: 1, gainMap: new ut(), sdr: new ut() });
    return this._config.createQuadRenderer({ width: 16, height: 16, type: Ve, colorSpace: Mr, material: t, renderer: this._renderer, renderTargetOptions: this._renderTargetOptions });
  }
  async processImages(t, r, s) {
    const n = r ? new Blob([r], { type: "image/jpeg" }) : void 0, a = new Blob([t], { type: "image/jpeg" });
    let o, u, d = false;
    if (typeof createImageBitmap > "u") {
      const f = await Promise.all([n ? Xs(n) : Promise.resolve(void 0), Xs(a)]);
      u = f[0], o = f[1], d = s === "flipY";
    } else {
      const f = await Promise.all([n ? createImageBitmap(n, { imageOrientation: s || "flipY" }) : Promise.resolve(void 0), createImageBitmap(a, { imageOrientation: s || "flipY" })]);
      u = f[0], o = f[1];
    }
    return { sdrImage: o, gainMapImage: u, needsFlip: d };
  }
  createTextures(t, r, s) {
    const n = new ut(r || new ImageData(2, 2), Vr, Bt, Bt, Ue, Ws, wr, ot, 1, Mr);
    n.flipY = s, n.needsUpdate = true;
    const a = new ut(t, Vr, Bt, Bt, Ue, Ws, wr, ot, 1, be);
    return a.flipY = s, a.needsUpdate = true, { gainMap: n, sdr: a };
  }
  updateQuadRenderer(t, r, s, n, a) {
    t.width = r.width, t.height = r.height, t.material.gainMap = s, t.material.sdr = n, t.material.gainMapMin = a.gainMapMin, t.material.gainMapMax = a.gainMapMax, t.material.offsetHdr = a.offsetHdr, t.material.offsetSdr = a.offsetSdr, t.material.gamma = a.gamma, t.material.hdrCapacityMin = a.hdrCapacityMin, t.material.hdrCapacityMax = a.hdrCapacityMax, t.material.maxDisplayBoost = Math.pow(2, a.hdrCapacityMax), t.material.needsUpdate = true;
  }
}
const Za = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, Ja = `
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
class qa extends je {
  constructor({ gamma: t, offsetHdr: r, offsetSdr: s, gainMapMin: n, gainMapMax: a, maxDisplayBoost: o, hdrCapacityMin: u, hdrCapacityMax: d, sdr: f, gainMap: m }) {
    super({ name: "GainMapDecoderMaterial", vertexShader: Za, fragmentShader: Ja, uniforms: { sdr: { value: f }, gainMap: { value: m }, gamma: { value: new Ce(1 / t[0], 1 / t[1], 1 / t[2]) }, offsetHdr: { value: new Ce().fromArray(r) }, offsetSdr: { value: new Ce().fromArray(s) }, gainMapMin: { value: new Ce().fromArray(n) }, gainMapMax: { value: new Ce().fromArray(a) }, weightFactor: { value: (Math.log2(o) - u) / (d - u) } }, blending: ht, depthTest: false, depthWrite: false });
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
class Xn extends Ka {
  constructor(t, r) {
    super({ renderer: t, createMaterial: (s) => new qa(s), createQuadRenderer: (s) => new Us(s) }, r);
  }
  async render(t, r, s, n) {
    const { sdrImage: a, gainMapImage: o, needsFlip: u } = await this.processImages(s, n, "flipY"), { gainMap: d, sdr: f } = this.createTextures(a, o, u);
    this.updateQuadRenderer(t, a, d, f, r), t.render();
  }
}
class $a extends Xn {
  load([t, r, s], n, a, o) {
    const u = this.prepareQuadRenderer();
    let d, f, m;
    const A = async () => {
      if (d && f && m) {
        try {
          await this.render(u, m, d, f);
        } catch (b) {
          this.manager.itemError(t), this.manager.itemError(r), this.manager.itemError(s), typeof o == "function" && o(b), u.disposeOnDemandRenderer();
          return;
        }
        typeof n == "function" && n(u), this.manager.itemEnd(t), this.manager.itemEnd(r), this.manager.itemEnd(s), u.disposeOnDemandRenderer();
      }
    };
    let E = true, M = 0, F = 0, q = true, k = 0, W = 0, U = true, H = 0, te = 0;
    const J = () => {
      if (typeof a == "function") {
        const b = M + k + H, Q = F + W + te, G = E && q && U;
        a(new ProgressEvent("progress", { lengthComputable: G, loaded: Q, total: b }));
      }
    };
    this.manager.itemStart(t), this.manager.itemStart(r), this.manager.itemStart(s);
    const K = new jr(this._internalLoadingManager);
    K.setResponseType("arraybuffer"), K.setRequestHeader(this.requestHeader), K.setPath(this.path), K.setWithCredentials(this.withCredentials), K.load(t, async (b) => {
      if (typeof b == "string") throw new Error("Invalid sdr buffer");
      d = b, await A();
    }, (b) => {
      E = b.lengthComputable, F = b.loaded, M = b.total, J();
    }, (b) => {
      this.manager.itemError(t), typeof o == "function" && o(b);
    });
    const oe = new jr(this._internalLoadingManager);
    oe.setResponseType("arraybuffer"), oe.setRequestHeader(this.requestHeader), oe.setPath(this.path), oe.setWithCredentials(this.withCredentials), oe.load(r, async (b) => {
      if (typeof b == "string") throw new Error("Invalid gainmap buffer");
      f = b, await A();
    }, (b) => {
      q = b.lengthComputable, W = b.loaded, k = b.total, J();
    }, (b) => {
      this.manager.itemError(r), typeof o == "function" && o(b);
    });
    const C = new jr(this._internalLoadingManager);
    return C.setRequestHeader(this.requestHeader), C.setPath(this.path), C.setWithCredentials(this.withCredentials), C.load(s, async (b) => {
      if (typeof b != "string") throw new Error("Invalid metadata string");
      m = JSON.parse(b), await A();
    }, (b) => {
      U = b.lengthComputable, te = b.loaded, H = b.total, J();
    }, (b) => {
      this.manager.itemError(s), typeof o == "function" && o(b);
    }), u;
  }
}
class eo extends Xn {
  load(t, r, s, n) {
    const a = this.prepareQuadRenderer(), o = new jr(this._internalLoadingManager);
    return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(this.withCredentials), this.manager.itemStart(t), o.load(t, async (u) => {
      if (typeof u == "string") throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const d = new Uint8Array(u);
      let f, m, A;
      try {
        const E = await Xa(d);
        f = E.sdr, m = E.gainMap, A = E.metadata;
      } catch (E) {
        if (E instanceof _n || E instanceof Vn) console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), A = { gainMapMin: [0, 0, 0], gainMapMax: [1, 1, 1], gamma: [1, 1, 1], hdrCapacityMin: 0, hdrCapacityMax: 1, offsetHdr: [0, 0, 0], offsetSdr: [0, 0, 0] }, f = d;
        else throw E;
      }
      try {
        await this.render(a, A, f.buffer, m == null ? void 0 : m.buffer);
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
const Dr = { apartment: "lebombo_1k.hdr", city: "potsdamer_platz_1k.hdr", dawn: "kiara_1_dawn_1k.hdr", forest: "forest_slope_1k.hdr", lobby: "st_fagans_interior_1k.hdr", night: "dikhololo_night_1k.hdr", park: "rooitou_park_1k.hdr", studio: "studio_small_03_1k.hdr", sunset: "venice_sunset_1k.hdr", warehouse: "empty_warehouse_01_1k.hdr" }, Kn = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", Wt = (e3) => Array.isArray(e3), Ls = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function ss({ files: e3 = Ls, path: t = "", preset: r = void 0, colorSpace: s = void 0, extensions: n } = {}) {
  r && (Gs(r), e3 = Dr[r], t = Kn);
  const a = Wt(e3), { extension: o, isCubemap: u } = Hs(e3), d = Ns(o);
  if (!d) throw new Error("useEnvironment: Unrecognized file extension: " + e3);
  const f = vt((M) => M.gl);
  x.useLayoutEffect(() => {
    if (o !== "webp" && o !== "jpg" && o !== "jpeg") return;
    function M() {
      _r.clear(d, a ? [e3] : e3);
    }
    f.domElement.addEventListener("webglcontextlost", M, { once: true });
  }, [e3, f.domElement]);
  const m = _r(d, a ? [e3] : e3, (M) => {
    (o === "webp" || o === "jpg" || o === "jpeg") && M.setRenderer(f), M.setPath == null || M.setPath(t), n && n(M);
  });
  let A = a ? m[0] : m;
  if (o === "jpg" || o === "jpeg" || o === "webp") {
    var E;
    A = (E = A.renderTarget) == null ? void 0 : E.texture;
  }
  return A.mapping = u ? Ni : zi, A.colorSpace = s ?? (u ? "srgb" : "srgb-linear"), A;
}
const to = { files: Ls, path: "", preset: void 0, extensions: void 0 };
ss.preload = (e3) => {
  const t = { ...to, ...e3 };
  let { files: r, path: s = "" } = t;
  const { preset: n, extensions: a } = t;
  n && (Gs(n), r = Dr[n], s = Kn);
  const { extension: o } = Hs(r);
  if (o === "webp" || o === "jpg" || o === "jpeg") throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const u = Ns(o);
  if (!u) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  _r.preload(u, Wt(r) ? [r] : r, (d) => {
    d.setPath == null || d.setPath(s), a && a(d);
  });
};
const ro = { files: Ls, preset: void 0 };
ss.clear = (e3) => {
  const t = { ...ro, ...e3 };
  let { files: r } = t;
  const { preset: s } = t;
  s && (Gs(s), r = Dr[s]);
  const { extension: n } = Hs(r), a = Ns(n);
  if (!a) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  _r.clear(a, Wt(r) ? [r] : r);
};
function Gs(e3) {
  if (!(e3 in Dr)) throw new Error("Preset must be one of: " + Object.keys(Dr).join(", "));
}
function Hs(e3) {
  var t;
  const r = Wt(e3) && e3.length === 6, s = Wt(e3) && e3.length === 3 && e3.some((o) => o.endsWith("json")), n = Wt(e3) ? e3[0] : e3;
  return { extension: r ? "cube" : s ? "webp" : n.startsWith("data:application/exr") ? "exr" : n.startsWith("data:application/hdr") ? "hdr" : n.startsWith("data:image/jpeg") ? "jpg" : (t = n.split(".").pop()) == null || (t = t.split("?")) == null || (t = t.shift()) == null ? void 0 : t.toLowerCase(), isCubemap: r, isGainmap: s };
}
function Ns(e3) {
  return e3 === "cube" ? ki : e3 === "hdr" ? ka : e3 === "exr" ? Qa : e3 === "jpg" || e3 === "jpeg" ? eo : e3 === "webp" ? $a : null;
}
const so = (e3) => e3.current && e3.current.isScene, no = (e3) => so(e3) ? e3.current : e3;
function zs(e3, t, r, s, n = {}) {
  var a, o, u, d;
  n = { backgroundBlurriness: 0, backgroundIntensity: 1, backgroundRotation: [0, 0, 0], environmentIntensity: 1, environmentRotation: [0, 0, 0], ...n };
  const f = no(t || r), m = f.background, A = f.environment, E = { backgroundBlurriness: f.backgroundBlurriness, backgroundIntensity: f.backgroundIntensity, backgroundRotation: (a = (o = f.backgroundRotation) == null || o.clone == null ? void 0 : o.clone()) !== null && a !== void 0 ? a : [0, 0, 0], environmentIntensity: f.environmentIntensity, environmentRotation: (u = (d = f.environmentRotation) == null || d.clone == null ? void 0 : d.clone()) !== null && u !== void 0 ? u : [0, 0, 0] };
  return e3 !== "only" && (f.environment = s), e3 && (f.background = s), Vs(f, n), () => {
    e3 !== "only" && (f.environment = A), e3 && (f.background = m), Vs(f, E);
  };
}
function ks({ scene: e3, background: t = false, map: r, ...s }) {
  const n = vt((a) => a.scene);
  return x.useLayoutEffect(() => {
    if (r) return zs(t, e3, n, r, s);
  }), null;
}
function Zn({ background: e3 = false, scene: t, blur: r, backgroundBlurriness: s, backgroundIntensity: n, backgroundRotation: a, environmentIntensity: o, environmentRotation: u, ...d }) {
  const f = ss(d), m = vt((A) => A.scene);
  return x.useLayoutEffect(() => zs(e3, t, m, f, { backgroundBlurriness: r ?? s, backgroundIntensity: n, backgroundRotation: a, environmentIntensity: o, environmentRotation: u })), x.useEffect(() => () => {
    f.dispose();
  }, [f]), null;
}
function io({ children: e3, near: t = 0.1, far: r = 1e3, resolution: s = 256, frames: n = 1, map: a, background: o = false, blur: u, backgroundBlurriness: d, backgroundIntensity: f, backgroundRotation: m, environmentIntensity: A, environmentRotation: E, scene: M, files: F, path: q, preset: k = void 0, extensions: W }) {
  const U = vt((C) => C.gl), H = vt((C) => C.scene), te = x.useRef(null), [J] = x.useState(() => new Wr()), K = x.useMemo(() => {
    const C = new Qi(s);
    return C.texture.type = Ve, C;
  }, [s]);
  x.useEffect(() => () => {
    K.dispose();
  }, [K]), x.useLayoutEffect(() => {
    if (n === 1) {
      const C = U.autoClear;
      U.autoClear = true, te.current.update(U, J), U.autoClear = C;
    }
    return zs(o, M, H, K.texture, { backgroundBlurriness: u ?? d, backgroundIntensity: f, backgroundRotation: m, environmentIntensity: A, environmentRotation: E });
  }, [e3, J, K.texture, M, H, o, n, U]);
  let oe = 1;
  return Ge(() => {
    if (n === 1 / 0 || oe < n) {
      const C = U.autoClear;
      U.autoClear = true, te.current.update(U, J), U.autoClear = C, oe++;
    }
  }), x.createElement(x.Fragment, null, ji(x.createElement(x.Fragment, null, e3, x.createElement("cubeCamera", { ref: te, args: [t, r, K] }), F || k ? x.createElement(Zn, { background: true, files: F, preset: k, path: q, extensions: W }) : a ? x.createElement(ks, { background: true, map: a, extensions: W }) : null), J));
}
function ao(e3) {
  var t, r, s, n;
  const a = ss(e3), o = e3.map || a;
  x.useMemo(() => bn({ GroundProjectedEnvImpl: za }), []), x.useEffect(() => () => {
    a.dispose();
  }, [a]);
  const u = x.useMemo(() => [o], [o]), d = (t = e3.ground) == null ? void 0 : t.height, f = (r = e3.ground) == null ? void 0 : r.radius, m = (s = (n = e3.ground) == null ? void 0 : n.scale) !== null && s !== void 0 ? s : 1e3;
  return x.createElement(x.Fragment, null, x.createElement(ks, Yi({}, e3, { map: o })), x.createElement("groundProjectedEnvImpl", { args: u, scale: m, height: d, radius: f }));
}
function oo(e3) {
  return e3.ground ? x.createElement(ao, e3) : e3.map ? x.createElement(ks, e3) : e3.children ? x.createElement(io, e3) : x.createElement(Zn, e3);
}
class co extends je {
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
	      #include <${Ya >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
      }` });
  }
}
const lo = (e3) => new Ce().setFromSpherical(new Wi(e3, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI)), uo = x.forwardRef(({ radius: e3 = 100, depth: t = 50, count: r = 5e3, saturation: s = 0, factor: n = 4, fade: a = false, speed: o = 1 }, u) => {
  const d = x.useRef(null), [f, m, A] = x.useMemo(() => {
    const M = [], F = [], q = Array.from({ length: r }, () => (0.5 + 0.5 * Math.random()) * n), k = new ts();
    let W = e3 + t;
    const U = t / r;
    for (let H = 0; H < r; H++) W -= U * Math.random(), M.push(...lo(W).toArray()), k.setHSL(H / r, s, 0.9), F.push(k.r, k.g, k.b);
    return [new Float32Array(M), new Float32Array(F), new Float32Array(q)];
  }, [r, t, n, e3, s]);
  Ge((M) => d.current && (d.current.uniforms.time.value = M.clock.elapsedTime * o));
  const [E] = x.useState(() => new co());
  return x.createElement("points", { ref: u }, x.createElement("bufferGeometry", null, x.createElement("bufferAttribute", { attach: "attributes-position", args: [f, 3] }), x.createElement("bufferAttribute", { attach: "attributes-color", args: [m, 3] }), x.createElement("bufferAttribute", { attach: "attributes-size", args: [A, 1] })), x.createElement("primitive", { ref: d, object: E, attach: "material", blending: Pn, "uniforms-fade-value": a, depthWrite: false, transparent: true, vertexColors: true }));
});
/**
* postprocessing v6.39.1 build Fri Apr 17 2026
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2026 Raoul van Rüschen
* @license Zlib
*/
var ho = (() => {
  const e3 = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), t = new Float32Array([0, 0, 2, 0, 0, 2]), r = new Br();
  return r.setAttribute("position", new Xr(e3, 3)), r.setAttribute("uv", new Xr(t, 2)), r;
})(), ze = class Is {
  static get fullscreenGeometry() {
    return ho;
  }
  constructor(t = "Pass", r = new Wr(), s = new Tn()) {
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
    r !== null ? r.material = t : (r = new $r(Is.fullscreenGeometry, t), r.frustumCulled = false, this.scene === null && (this.scene = new Wr()), this.scene.add(r), this.screen = r);
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
  setDepthTexture(t, r = yt) {
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
      (r instanceof Qe || r instanceof Fn || r instanceof ut || r instanceof Is) && this[t].dispose();
    }
    this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
  }
}, fo = class extends ze {
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = false;
  }
  render(e3, t, r, s, n) {
    const a = e3.state.buffers.stencil;
    a.setLocked(false), a.setTest(false);
  }
}, go = `#ifdef COLOR_WRITE
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
}`, Jn = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", qn = class extends je {
  constructor() {
    super({ name: "CopyMaterial", defines: { COLOR_SPACE_CONVERSION: "1", DEPTH_PACKING: "0", COLOR_WRITE: "1" }, uniforms: { inputBuffer: new Y(null), depthBuffer: new Y(null), channelWeights: new Y(null), opacity: new Y(1) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: go, vertexShader: Jn }), this.depthFunc = Zi;
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
}, po = class extends ze {
  constructor(e3, t = true) {
    super("CopyPass"), this.fullscreenMaterial = new qn(), this.needsSwap = false, this.renderTarget = e3, e3 === void 0 && (this.renderTarget = new Qe(1, 1, { minFilter: Ue, magFilter: Ue, stencilBuffer: false, depthBuffer: false }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = t;
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
    r !== void 0 && (this.renderTarget.texture.type = r, r !== ot ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : e3 !== null && e3.outputColorSpace === be && (this.renderTarget.texture.colorSpace = be));
  }
}, Ks = new ts(), Qs = class extends ze {
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
    d ? (e3.getClearColor(Ks), e3.setClearColor(a, f ? o : u)) : f && e3.setClearAlpha(o), e3.setRenderTarget(this.renderToScreen ? null : t), e3.clear(this.color, this.depth, this.stencil), d ? e3.setClearColor(Ks, u) : f && e3.setClearAlpha(u);
  }
}, vo = class extends ze {
  constructor(e3, t) {
    super("MaskPass", e3, t), this.needsSwap = false, this.clearPass = new Qs(false, false, true), this.inverse = false;
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
    const a = e3.getContext(), o = e3.state.buffers, u = this.scene, d = this.camera, f = this.clearPass, m = this.inverted ? 0 : 1, A = 1 - m;
    o.color.setMask(false), o.depth.setMask(false), o.color.setLocked(true), o.depth.setLocked(true), o.stencil.setTest(true), o.stencil.setOp(a.REPLACE, a.REPLACE, a.REPLACE), o.stencil.setFunc(a.ALWAYS, m, 4294967295), o.stencil.setClear(A), o.stencil.setLocked(true), this.clearPass.enabled && (this.renderToScreen ? f.render(e3, null) : (f.render(e3, t), f.render(e3, r))), this.renderToScreen ? (e3.setRenderTarget(null), e3.render(u, d)) : (e3.setRenderTarget(t), e3.render(u, d), e3.setRenderTarget(r), e3.render(u, d)), o.color.setLocked(false), o.depth.setLocked(false), o.stencil.setLocked(false), o.stencil.setFunc(a.EQUAL, 1, 4294967295), o.stencil.setOp(a.KEEP, a.KEEP, a.KEEP), o.stencil.setLocked(true);
  }
}, ds = 1 / 1e3, Ao = 1e3, mo = class {
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
    return this._delta * ds;
  }
  get fixedDelta() {
    return this._fixedDelta * ds;
  }
  set fixedDelta(e3) {
    this._fixedDelta = e3 * Ao;
  }
  get elapsed() {
    return this._elapsed * ds;
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
}, xo = class {
  constructor(e3 = null, { depthBuffer: t = true, stencilBuffer: r = false, multisampling: s = 0, frameBufferType: n } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(t, r, n, s), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new po(), this.depthTexture = null, this.depthRenderTarget = null, this.passes = [], this.timer = new mo(), this.autoRenderToScreen = true, this.setRenderer(e3);
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
      const t = e3.getSize(new Be()), r = e3.getContext().getContextAttributes().alpha, s = this.inputBuffer.texture.type;
      s === ot && e3.outputColorSpace === be && (this.inputBuffer.texture.colorSpace = be, this.outputBuffer.texture.colorSpace = be, this.inputBuffer.dispose(), this.outputBuffer.dispose()), e3.autoClear = false, this.setSize(t.width, t.height);
      for (const n of this.passes) n.initialize(e3, r, s);
    }
  }
  replaceRenderer(e3, t = true) {
    const r = this.renderer, s = r.domElement.parentNode;
    return this.setRenderer(e3), t && s !== null && (s.removeChild(r.domElement), s.appendChild(e3.domElement)), r;
  }
  createDepthTexture() {
    const e3 = this.inputBuffer, t = new Vi();
    this.depthTexture = t, e3.stencilBuffer ? (t.format = _i, t.type = Xi) : t.type = it;
    const r = t.clone();
    return r.name = "EffectComposer.StableDepth", this.depthRenderTarget = new Qe(e3.width, e3.height, { depthBuffer: true, stencilBuffer: e3.stencilBuffer, depthTexture: r }), r;
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
    const n = this.renderer, a = n === null ? new Be() : n.getDrawingBufferSize(new Be()), o = { minFilter: Ue, magFilter: Ue, stencilBuffer: t, depthBuffer: e3, type: r }, u = new Qe(a.width, a.height, o);
    return s > 0 && (u.samples = s), r === ot && n !== null && n.outputColorSpace === be && (u.texture.colorSpace = be), u.texture.name = "EffectComposer.Buffer", u.texture.generateMipmaps = false, u;
  }
  setMainScene(e3) {
    for (const t of this.passes) t.mainScene = e3;
  }
  setMainCamera(e3) {
    for (const t of this.passes) t.mainCamera = e3;
  }
  addPass(e3, t) {
    const r = this.passes, s = this.renderer, n = s.getDrawingBufferSize(new Be()), a = s.getContext().getContextAttributes().alpha, o = this.inputBuffer.texture.type;
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
      u instanceof vo ? o = true : u instanceof fo && (o = false);
    }
  }
  setSize(e3, t, r) {
    const s = this.renderer, n = s.getSize(new Be());
    (e3 === void 0 || t === void 0) && (e3 = n.width, t = n.height), (n.width !== e3 || n.height !== t) && s.setSize(e3, t, r);
    const a = s.getDrawingBufferSize(new Be());
    this.inputBuffer.setSize(a.width, a.height), this.outputBuffer.setSize(a.width, a.height), this.depthRenderTarget !== null && this.depthRenderTarget.setSize(a.width, a.height);
    for (const o of this.passes) o.setSize(a.width, a.height);
  }
  reset() {
    this.dispose(), this.autoRenderToScreen = true;
  }
  dispose() {
    for (const e3 of this.passes) e3.dispose();
    this.passes = [], this.inputBuffer !== null && this.inputBuffer.dispose(), this.outputBuffer !== null && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose(), ze.fullscreenGeometry.dispose();
  }
}, dt = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }, ie = { FRAGMENT_HEAD: "FRAGMENT_HEAD", FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV", FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE", VERTEX_HEAD: "VERTEX_HEAD", VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT" }, Eo = class {
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([[ie.FRAGMENT_HEAD, null], [ie.FRAGMENT_MAIN_UV, null], [ie.FRAGMENT_MAIN_IMAGE, null], [ie.VERTEX_HEAD, null], [ie.VERTEX_MAIN_SUPPORT, null]]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = dt.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = false, this.readDepth = false, this.colorSpace = Mr;
  }
}, hs = false, Zs = class {
  constructor(e3 = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(e3), this.meshCount = 0, this.replaceMaterial = (t) => {
      if (t.isMesh) {
        let r;
        if (t.material.flatShading) switch (t.material.side) {
          case et:
            r = this.materialsFlatShadedDoubleSide;
            break;
          case gr:
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
          case gr:
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
    if (!(e3 instanceof je)) return e3.clone();
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
      for (const r of t) r.uniforms = Object.assign({}, e3.uniforms), r.side = Ji;
      t[2].skinning = true, this.materialsBackSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.side = gr, s;
      }), this.materialsDoubleSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.side = et, s;
      }), this.materialsFlatShaded = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s;
      }), this.materialsFlatShadedBackSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s.side = gr, s;
      }), this.materialsFlatShadedDoubleSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s.side = et, s;
      });
    }
  }
  render(e3, t, r) {
    const s = e3.shadowMap.enabled;
    if (e3.shadowMap.enabled = false, hs) {
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
    return hs;
  }
  static set workaroundEnabled(e3) {
    hs = e3;
  }
}, wt = -1, Le = class extends Rs {
  constructor(e3 = null, t = wt, r = wt, s = 1) {
    super(), e3 !== null && this.addEventListener("change", () => e3.setSize(this.baseSize.width, this.baseSize.height)), this.baseSize = new Be(1, 1), this.preferredSize = new Be(t, r), this.target = this.preferredSize, this.s = s, this.effectiveSize = new Be(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
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
}, ee = { SKIP: 9, SET: 30, ADD: 0, ALPHA: 1, AVERAGE: 2, COLOR: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, DIVIDE: 8, DST: 9, EXCLUSION: 10, HARD_LIGHT: 11, HARD_MIX: 12, HUE: 13, INVERT: 14, INVERT_RGB: 15, LIGHTEN: 16, LINEAR_BURN: 17, LINEAR_DODGE: 18, LINEAR_LIGHT: 19, LUMINOSITY: 20, MULTIPLY: 21, NEGATION: 22, NORMAL: 23, OVERLAY: 24, PIN_LIGHT: 25, REFLECT: 26, SATURATION: 27, SCREEN: 28, SOFT_LIGHT: 29, SRC: 30, SUBTRACT: 31, VIVID_LIGHT: 32 }, wo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Mo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}", Co = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Do = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Bo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", So = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Io = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", To = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", yo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ro = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", bo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Po = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Oo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Fo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Uo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Lo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Go = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ho = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", No = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", zo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ko = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Qo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", jo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}", Yo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Wo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Vo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", _o = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Xo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ko = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Zo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}", Jo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", qo = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", $o = /* @__PURE__ */ new Map([[ee.ADD, wo], [ee.ALPHA, Mo], [ee.AVERAGE, Co], [ee.COLOR, Do], [ee.COLOR_BURN, Bo], [ee.COLOR_DODGE, So], [ee.DARKEN, Io], [ee.DIFFERENCE, To], [ee.DIVIDE, yo], [ee.DST, null], [ee.EXCLUSION, Ro], [ee.HARD_LIGHT, bo], [ee.HARD_MIX, Po], [ee.HUE, Oo], [ee.INVERT, Fo], [ee.INVERT_RGB, Uo], [ee.LIGHTEN, Lo], [ee.LINEAR_BURN, Go], [ee.LINEAR_DODGE, Ho], [ee.LINEAR_LIGHT, No], [ee.LUMINOSITY, zo], [ee.MULTIPLY, ko], [ee.NEGATION, Qo], [ee.NORMAL, jo], [ee.OVERLAY, Yo], [ee.PIN_LIGHT, Wo], [ee.REFLECT, Vo], [ee.SATURATION, _o], [ee.SCREEN, Xo], [ee.SOFT_LIGHT, Ko], [ee.SRC, Zo], [ee.SUBTRACT, Jo], [ee.VIVID_LIGHT, qo]]), ec = class extends Rs {
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
    return $o.get(this.blendFunction);
  }
}, Kt = class extends Rs {
  constructor(e3, t, { attributes: r = dt.NONE, blendFunction: s = ee.NORMAL, defines: n = /* @__PURE__ */ new Map(), uniforms: a = /* @__PURE__ */ new Map(), extensions: o = null, vertexShader: u = null } = {}) {
    super(), this.name = e3, this.renderer = null, this.attributes = r, this.fragmentShader = t, this.vertexShader = u, this.defines = n, this.uniforms = a, this.extensions = o, this.blendMode = new ec(s), this.blendMode.addEventListener("change", (d) => this.setChanged()), this._inputColorSpace = Mr, this._outputColorSpace = On;
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
  setDepthTexture(e3, t = yt) {
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
      (t instanceof Qe || t instanceof Fn || t instanceof ut || t instanceof ze) && this[e3].dispose();
    }
  }
}, ns = { VERY_SMALL: 0, SMALL: 1, MEDIUM: 2, LARGE: 3, VERY_LARGE: 4, HUGE: 5 }, tc = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, rc = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", sc = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])], nc = class extends je {
  constructor(e3 = new _s()) {
    super({ name: "KawaseBlurMaterial", uniforms: { inputBuffer: new Y(null), texelSize: new Y(new _s()), scale: new Y(1), kernel: new Y(0) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: tc, vertexShader: rc }), this.setTexelSize(e3.x, e3.y), this.kernelSize = ns.MEDIUM;
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setInputBuffer(e3) {
    this.inputBuffer = e3;
  }
  get kernelSequence() {
    return sc[this.kernelSize];
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
}, ic = class extends ze {
  constructor({ kernelSize: e3 = ns.MEDIUM, resolutionScale: t = 0.5, width: r = Le.AUTO_SIZE, height: s = Le.AUTO_SIZE, resolutionX: n = r, resolutionY: a = s } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new Qe(1, 1, { depthBuffer: false }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const o = this.resolution = new Le(this, n, a, t);
    o.addEventListener("change", (u) => this.setSize(o.baseWidth, o.baseHeight)), this._blurMaterial = new nc(), this._blurMaterial.kernelSize = e3, this.copyMaterial = new qn();
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
    const a = this.scene, o = this.camera, u = this.renderTargetA, d = this.renderTargetB, f = this.blurMaterial, m = f.kernelSequence;
    let A = t;
    this.fullscreenMaterial = f;
    for (let E = 0, M = m.length; E < M; ++E) {
      const F = E & 1 ? d : u;
      f.kernel = m[E], f.inputBuffer = A.texture, e3.setRenderTarget(F), e3.render(a, o), A = F;
    }
    this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = A.texture, e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(a, o);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t);
    const s = r.width, n = r.height;
    this.renderTargetA.setSize(s, n), this.renderTargetB.setSize(s, n), this.blurMaterial.setSize(e3, t);
  }
  initialize(e3, t, r) {
    r !== void 0 && (this.renderTargetA.texture.type = r, this.renderTargetB.texture.type = r, r !== ot ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : e3 !== null && e3.outputColorSpace === be && (this.renderTargetA.texture.colorSpace = be, this.renderTargetB.texture.colorSpace = be));
  }
  static get AUTO_SIZE() {
    return Le.AUTO_SIZE;
  }
}, ac = `#include <common>
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
}`, oc = class extends je {
  constructor(e3 = false, t = null) {
    super({ name: "LuminanceMaterial", defines: { THREE_REVISION: es.replace(/\D+/g, "") }, uniforms: { inputBuffer: new Y(null), threshold: new Y(0), smoothing: new Y(1), range: new Y(null) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: ac, vertexShader: Jn }), this.colorOutput = e3, this.luminanceRange = t;
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
}, cc = class extends ze {
  constructor({ renderTarget: e3, luminanceRange: t, colorOutput: r, resolutionScale: s = 1, width: n = Le.AUTO_SIZE, height: a = Le.AUTO_SIZE, resolutionX: o = n, resolutionY: u = a } = {}) {
    super("LuminancePass"), this.fullscreenMaterial = new oc(r, t), this.needsSwap = false, this.renderTarget = e3, this.renderTarget === void 0 && (this.renderTarget = new Qe(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "LuminancePass.Target");
    const d = this.resolution = new Le(this, o, u, s);
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
    r !== void 0 && r !== ot && (this.renderTarget.texture.type = r, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, lc = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`, uc = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}", dc = class extends je {
  constructor() {
    super({ name: "DownsamplingMaterial", uniforms: { inputBuffer: new Y(null), texelSize: new Y(new Be()) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: lc, vertexShader: uc });
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setSize(e3, t) {
    this.uniforms.texelSize.value.set(1 / e3, 1 / t);
  }
}, hc = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`, fc = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}", gc = class extends je {
  constructor() {
    super({ name: "UpsamplingMaterial", uniforms: { inputBuffer: new Y(null), supportBuffer: new Y(null), texelSize: new Y(new Be()), radius: new Y(0.85) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: hc, vertexShader: fc });
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
}, pc = class extends ze {
  constructor() {
    super("MipmapBlurPass"), this.needsSwap = false, this.renderTarget = new Qe(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new dc(), this.upsamplingMaterial = new gc(), this.resolution = new Be();
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
    const { scene: a, camera: o } = this, { downsamplingMaterial: u, upsamplingMaterial: d } = this, { downsamplingMipmaps: f, upsamplingMipmaps: m } = this;
    let A = t;
    this.fullscreenMaterial = u;
    for (let E = 0, M = f.length; E < M; ++E) {
      const F = f[E];
      u.setSize(A.width, A.height), u.inputBuffer = A.texture, e3.setRenderTarget(F), e3.render(a, o), A = F;
    }
    this.fullscreenMaterial = d;
    for (let E = m.length - 1; E >= 0; --E) {
      const M = m[E];
      d.setSize(A.width, A.height), d.inputBuffer = A.texture, d.supportBuffer = f[E].texture, e3.setRenderTarget(M), e3.render(a, o), A = M;
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
      if (r !== ot) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      else if (e3 !== null && e3.outputColorSpace === be) for (const n of s) n.texture.colorSpace = be;
    }
  }
  dispose() {
    super.dispose();
    for (const e3 of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) e3.dispose();
  }
}, vc = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`, Ac = class extends Kt {
  constructor({ blendFunction: e3 = ee.SCREEN, luminanceThreshold: t = 1, luminanceSmoothing: r = 0.03, mipmapBlur: s = true, intensity: n = 1, radius: a = 0.85, levels: o = 8, kernelSize: u = ns.LARGE, resolutionScale: d = 0.5, width: f = Le.AUTO_SIZE, height: m = Le.AUTO_SIZE, resolutionX: A = f, resolutionY: E = m } = {}) {
    super("BloomEffect", vc, { blendFunction: e3, uniforms: /* @__PURE__ */ new Map([["map", new Y(null)], ["intensity", new Y(n)]]) }), this.renderTarget = new Qe(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new ic({ kernelSize: u }), this.luminancePass = new cc({ colorOutput: true }), this.luminanceMaterial.threshold = t, this.luminanceMaterial.smoothing = r, this.mipmapBlurPass = new pc(), this.mipmapBlurPass.enabled = s, this.mipmapBlurPass.radius = a, this.mipmapBlurPass.levels = o, this.uniforms.get("map").value = s ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const M = this.resolution = new Le(this, A, E, d);
    M.addEventListener("change", (F) => this.setSize(M.baseWidth, M.baseHeight));
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
    this.blurPass.initialize(e3, t, r), this.luminancePass.initialize(e3, t, r), this.mipmapBlurPass.initialize(e3, t, r), r !== void 0 && (this.renderTarget.texture.type = r, e3 !== null && e3.outputColorSpace === be && (this.renderTarget.texture.colorSpace = be));
  }
}, mc = `#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`, xc = "uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}", Ec = class extends Kt {
  constructor({ offset: e3 = new Be(1e-3, 5e-4), radialModulation: t = false, modulationOffset: r = 0.15 } = {}) {
    super("ChromaticAberrationEffect", mc, { vertexShader: xc, attributes: dt.CONVOLUTION, uniforms: /* @__PURE__ */ new Map([["offset", new Y(e3)], ["modulationOffset", new Y(r)]]) }), this.radialModulation = t;
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
}, Js = class extends ze {
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
    r !== void 0 && r !== ot && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, $n = class extends ze {
  constructor(e3, t, r = null) {
    super("RenderPass", e3, t), this.needsSwap = false, this.needsDepthBlit = true, this.clearPass = new Qs(), this.overrideMaterialManager = r === null ? null : new Zs(r), this.ignoreBackground = false, this.skipShadowMapUpdate = false, this.selection = null;
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
    e3 !== null ? t !== null ? t.setMaterial(e3) : this.overrideMaterialManager = new Zs(e3) : t !== null && (t.dispose(), this.overrideMaterialManager = null);
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
    const a = this.scene, o = this.camera, u = this.selection, d = o.layers.mask, f = a.background, m = e3.shadowMap.autoUpdate, A = this.renderToScreen ? null : t;
    u !== null && o.layers.set(u.getLayer()), this.skipShadowMapUpdate && (e3.shadowMap.autoUpdate = false), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (a.background = null), this.clearPass.enabled && this.clearPass.render(e3, t), e3.setRenderTarget(A), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(e3, a, o) : e3.render(a, o), o.layers.mask = d, a.background = f, e3.shadowMap.autoUpdate = m;
  }
}, ei = { DEPTH: 0, LUMA: 1, COLOR: 2 }, wc = { DISABLED: 0, DEPTH: 1, CUSTOM: 2 }, cr = { LOW: 0, MEDIUM: 1, HIGH: 2, ULTRA: 3 }, lr = { DEFAULT: 0, ESKIL: 1 }, Mc = `varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
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
}`, Cc = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`, Dc = class extends je {
  constructor(e3 = new Be(), t = ei.COLOR) {
    super({ name: "EdgeDetectionMaterial", defines: { THREE_REVISION: es.replace(/\D+/g, ""), LOCAL_CONTRAST_ADAPTATION_FACTOR: "2.0", EDGE_THRESHOLD: "0.1", DEPTH_THRESHOLD: "0.01", PREDICATION_MODE: "0", PREDICATION_THRESHOLD: "0.01", PREDICATION_SCALE: "2.0", PREDICATION_STRENGTH: "1.0", DEPTH_PACKING: "0" }, uniforms: { inputBuffer: new Y(null), depthBuffer: new Y(null), predicationBuffer: new Y(null), texelSize: new Y(e3) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Mc, vertexShader: Cc }), this.edgeDetectionMode = t;
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = yt) {
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
}, Bc = `#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
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
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`, Sc = "uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}", Ic = class extends je {
  constructor(e3 = new Be(), t = new Be()) {
    super({ name: "SMAAWeightsMaterial", defines: { MAX_SEARCH_STEPS_INT: "16", MAX_SEARCH_STEPS_FLOAT: "16.0", MAX_SEARCH_STEPS_DIAG_INT: "8", MAX_SEARCH_STEPS_DIAG_FLOAT: "8.0", CORNER_ROUNDING: "25", CORNER_ROUNDING_NORM: "0.25", AREATEX_MAX_DISTANCE: "16.0", AREATEX_MAX_DISTANCE_DIAG: "20.0", AREATEX_PIXEL_SIZE: "(1.0 / vec2(160.0, 560.0))", AREATEX_SUBTEX_SIZE: "(1.0 / 7.0)", SEARCHTEX_SIZE: "vec2(66.0, 33.0)", SEARCHTEX_PACKED_SIZE: "vec2(64.0, 16.0)" }, uniforms: { inputBuffer: new Y(null), searchTexture: new Y(null), areaTexture: new Y(null), resolution: new Y(t), texelSize: new Y(e3) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Bc, vertexShader: Sc });
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
}, qs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC", $s = "data:image/png;base64,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", Tc = "uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}", yc = "varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}", Rc = class extends Kt {
  constructor({ blendFunction: e3 = ee.SRC, preset: t = cr.MEDIUM, edgeDetectionMode: r = ei.COLOR, predicationMode: s = wc.DISABLED } = {}) {
    super("SMAAEffect", Tc, { vertexShader: yc, blendFunction: e3, attributes: dt.CONVOLUTION | dt.DEPTH, uniforms: /* @__PURE__ */ new Map([["weightMap", new Y(null)]]) });
    let n, a;
    arguments.length > 1 && (n = arguments[0], a = arguments[1], arguments.length > 2 && (t = arguments[2]), arguments.length > 3 && (r = arguments[3])), this.renderTargetEdges = new Qe(1, 1, { depthBuffer: false }), this.renderTargetEdges.texture.name = "SMAA.Edges", this.renderTargetWeights = this.renderTargetEdges.clone(), this.renderTargetWeights.texture.name = "SMAA.Weights", this.uniforms.get("weightMap").value = this.renderTargetWeights.texture, this.clearPass = new Qs(true, false, false), this.clearPass.overrideClearColor = new ts(0), this.clearPass.overrideClearAlpha = 1, this.edgeDetectionPass = new Js(new Dc()), this.edgeDetectionMaterial.edgeDetectionMode = r, this.edgeDetectionMaterial.predicationMode = s, this.weightsPass = new Js(new Ic());
    const o = new Rn();
    o.onLoad = () => {
      const u = new ut(n);
      u.name = "SMAA.Search", u.magFilter = _t, u.minFilter = _t, u.generateMipmaps = false, u.needsUpdate = true, u.flipY = true, this.weightsMaterial.searchTexture = u;
      const d = new ut(a);
      d.name = "SMAA.Area", d.magFilter = Ue, d.minFilter = Ue, d.generateMipmaps = false, d.needsUpdate = true, d.flipY = false, this.weightsMaterial.areaTexture = d, this.dispatchEvent({ type: "load" });
    }, o.itemStart("search"), o.itemStart("area"), n !== void 0 && a !== void 0 ? (o.itemEnd("search"), o.itemEnd("area")) : typeof Image < "u" && (n = new Image(), a = new Image(), n.addEventListener("load", () => o.itemEnd("search")), a.addEventListener("load", () => o.itemEnd("area")), n.src = qs, a.src = $s), this.applyPreset(t);
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
      case cr.LOW:
        t.edgeDetectionThreshold = 0.15, r.orthogonalSearchSteps = 4, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case cr.MEDIUM:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 8, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case cr.HIGH:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 16, r.diagonalSearchSteps = 8, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
      case cr.ULTRA:
        t.edgeDetectionThreshold = 0.05, r.orthogonalSearchSteps = 32, r.diagonalSearchSteps = 16, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
    }
  }
  setDepthTexture(e3, t = yt) {
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
    return qs;
  }
  static get areaImageDataURL() {
    return $s;
  }
}, bc = `#include <packing>
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
gl_FragColor=vec4(n[index],d[index]);}`, Pc = "uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}", Oc = class extends je {
  constructor() {
    super({ name: "DepthDownsamplingMaterial", defines: { DEPTH_PACKING: "0" }, uniforms: { depthBuffer: new Y(null), normalBuffer: new Y(null), texelSize: new Y(new Be()) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: bc, vertexShader: Pc });
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = yt) {
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
}, Fc = class extends ze {
  constructor({ normalBuffer: e3 = null, resolutionScale: t = 0.5, width: r = Le.AUTO_SIZE, height: s = Le.AUTO_SIZE, resolutionX: n = r, resolutionY: a = s } = {}) {
    super("DepthDownsamplingPass");
    const o = new Oc();
    o.normalBuffer = e3, this.fullscreenMaterial = o, this.needsDepthTexture = true, this.needsSwap = false, this.renderTarget = new Qe(1, 1, { minFilter: _t, magFilter: _t, depthBuffer: false, type: it }), this.renderTarget.texture.name = "DepthDownsamplingPass.Target", this.renderTarget.texture.generateMipmaps = false;
    const u = this.resolution = new Le(this, n, a, t);
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
  setDepthTexture(e3, t = yt) {
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
}, Uc = `uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`, Lc = class extends Kt {
  constructor({ blendFunction: e3, eskil: t = false, technique: r = t ? lr.ESKIL : lr.DEFAULT, offset: s = 0.5, darkness: n = 0.5 } = {}) {
    super("VignetteEffect", Uc, { blendFunction: e3, defines: /* @__PURE__ */ new Map([["VIGNETTE_TECHNIQUE", r.toFixed(0)]]), uniforms: /* @__PURE__ */ new Map([["offset", new Y(s)], ["darkness", new Y(n)]]) });
  }
  get technique() {
    return Number(this.defines.get("VIGNETTE_TECHNIQUE"));
  }
  set technique(e3) {
    this.technique !== e3 && (this.defines.set("VIGNETTE_TECHNIQUE", e3.toFixed(0)), this.setChanged());
  }
  get eskil() {
    return this.technique === lr.ESKIL;
  }
  set eskil(e3) {
    this.technique = e3 ? lr.ESKIL : lr.DEFAULT;
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
}, Gc = `#include <common>
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
}`, Hc = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", Nc = class extends je {
  constructor(e3, t, r, s, n = false) {
    super({ name: "EffectMaterial", defines: { THREE_REVISION: es.replace(/\D+/g, ""), DEPTH_PACKING: "0", ENCODE_OUTPUT: "1" }, uniforms: { inputBuffer: new Y(null), depthBuffer: new Y(null), resolution: new Y(new Be()), texelSize: new Y(new Be()), cameraNear: new Y(0.3), cameraFar: new Y(1e3), aspect: new Y(1), time: new Y(0) }, blending: ht, toneMapped: false, depthWrite: false, depthTest: false, dithering: n }), e3 && this.setShaderParts(e3), t && this.setDefines(t), r && this.setUniforms(r), this.copyCameraSettings(s);
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
  setDepthBuffer(e3, t = yt) {
    this.depthBuffer = e3, this.depthPacking = t;
  }
  setShaderData(e3) {
    this.setShaderParts(e3.shaderParts), this.setDefines(e3.defines), this.setUniforms(e3.uniforms), this.setExtensions(e3.extensions);
  }
  setShaderParts(e3) {
    return this.fragmentShader = Gc.replace(ie.FRAGMENT_HEAD, e3.get(ie.FRAGMENT_HEAD) || "").replace(ie.FRAGMENT_MAIN_UV, e3.get(ie.FRAGMENT_MAIN_UV) || "").replace(ie.FRAGMENT_MAIN_IMAGE, e3.get(ie.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = Hc.replace(ie.VERTEX_HEAD, e3.get(ie.VERTEX_HEAD) || "").replace(ie.VERTEX_MAIN_SUPPORT, e3.get(ie.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = true, this;
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
    e3 && (this.uniforms.cameraNear.value = e3.near, this.uniforms.cameraFar.value = e3.far, e3 instanceof qi ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
  setSize(e3, t) {
    const r = this.uniforms;
    r.resolution.value.set(e3, t), r.texelSize.value.set(1 / e3, 1 / t), r.aspect.value = e3 / t;
  }
  static get Section() {
    return ie;
  }
};
function en(e3, t, r) {
  for (const s of t) {
    const n = "$1" + e3 + s.charAt(0).toUpperCase() + s.slice(1), a = new RegExp("([^\\.])(\\b" + s + "\\b)", "g");
    for (const o of r.entries()) o[1] !== null && r.set(o[0], o[1].replace(a, n));
  }
}
function zc(e3, t, r) {
  let s = t.getFragmentShader(), n = t.getVertexShader();
  const a = s !== void 0 && /mainImage/.test(s), o = s !== void 0 && /mainUv/.test(s);
  if (r.attributes |= t.getAttributes(), s === void 0) throw new Error(`Missing fragment shader (${t.name})`);
  if (o && r.attributes & dt.CONVOLUTION) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);
  if (!a && !o) throw new Error(`Could not find mainImage or mainUv function (${t.name})`);
  {
    const u = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, d = r.shaderParts;
    let f = d.get(ie.FRAGMENT_HEAD) || "", m = d.get(ie.FRAGMENT_MAIN_UV) || "", A = d.get(ie.FRAGMENT_MAIN_IMAGE) || "", E = d.get(ie.VERTEX_HEAD) || "", M = d.get(ie.VERTEX_MAIN_SUPPORT) || "";
    const F = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set();
    if (o && (m += `	${e3}MainUv(UV);
`, r.uvTransformation = true), n !== null && /mainSupport/.test(n)) {
      const U = /mainSupport *\([\w\s]*?uv\s*?\)/.test(n);
      M += `	${e3}MainSupport(`, M += U ? `vUv);
` : `);
`;
      for (const H of n.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) for (const te of H[1].split(/\s*,\s*/)) r.varyings.add(te), F.add(te), q.add(te);
      for (const H of n.matchAll(u)) q.add(H[1]);
    }
    for (const U of s.matchAll(u)) q.add(U[1]);
    for (const U of t.defines.keys()) q.add(U.replace(/\([\w\s,]*\)/g, ""));
    for (const U of t.uniforms.keys()) q.add(U);
    q.delete("while"), q.delete("for"), q.delete("if"), t.uniforms.forEach((U, H) => r.uniforms.set(e3 + H.charAt(0).toUpperCase() + H.slice(1), U)), t.defines.forEach((U, H) => r.defines.set(e3 + H.charAt(0).toUpperCase() + H.slice(1), U));
    const k = /* @__PURE__ */ new Map([["fragment", s], ["vertex", n]]);
    en(e3, q, r.defines), en(e3, q, k), s = k.get("fragment"), n = k.get("vertex");
    const W = t.blendMode;
    if (r.blendModes.set(W.blendFunction, W), a) {
      t.inputColorSpace !== null && t.inputColorSpace !== r.colorSpace && (A += t.inputColorSpace === be ? `color0 = sRGBTransferOETF(color0);
	` : `color0 = sRGBToLinear(color0);
	`), t.outputColorSpace !== On ? r.colorSpace = t.outputColorSpace : t.inputColorSpace !== null && (r.colorSpace = t.inputColorSpace);
      const U = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      A += `${e3}MainImage(color0, UV, `, r.attributes & dt.DEPTH && U.test(s) && (A += "depth, ", r.readDepth = true), A += `color1);
	`;
      const H = e3 + "BlendOpacity";
      r.uniforms.set(H, W.opacity), A += `color0 = blend${W.blendFunction}(color0, color1, ${H});

	`, f += `uniform float ${H};

`;
    }
    if (f += s + `
`, n !== null && (E += n + `
`), d.set(ie.FRAGMENT_HEAD, f), d.set(ie.FRAGMENT_MAIN_UV, m), d.set(ie.FRAGMENT_MAIN_IMAGE, A), d.set(ie.VERTEX_HEAD, E), d.set(ie.VERTEX_MAIN_SUPPORT, M), t.extensions !== null) for (const U of t.extensions) r.extensions.add(U);
  }
}
var kc = class extends ze {
  constructor(e3, ...t) {
    super("EffectPass"), this.fullscreenMaterial = new Nc(null, null, null, e3), this.listener = (r) => this.handleEvent(r), this.effects = [], this.setEffects(t), this.skipRendering = false, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
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
    const e3 = new Eo();
    let t = 0;
    for (const o of this.effects) if (o.blendMode.blendFunction === ee.DST) e3.attributes |= o.getAttributes() & dt.DEPTH;
    else {
      if (e3.attributes & o.getAttributes() & dt.CONVOLUTION) throw new Error(`Convolution effects cannot be merged (${o.name})`);
      zc("e" + t++, o, e3);
    }
    let r = e3.shaderParts.get(ie.FRAGMENT_HEAD), s = e3.shaderParts.get(ie.FRAGMENT_MAIN_IMAGE), n = e3.shaderParts.get(ie.FRAGMENT_MAIN_UV);
    const a = /\bblend\b/g;
    for (const o of e3.blendModes.values()) r += o.getShaderCode().replace(a, `blend${o.blendFunction}`) + `
`;
    e3.attributes & dt.DEPTH ? (e3.readDepth && (s = `float depth = readDepth(UV);

	` + s), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = false, e3.colorSpace === be && (s += `color0 = sRGBToLinear(color0);
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
  setDepthTexture(e3, t = yt) {
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
    this.updateMaterial(), r !== void 0 && r !== ot && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
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
}, Qc = class extends ze {
  constructor(e3, t, { renderTarget: r, resolutionScale: s = 1, width: n = Le.AUTO_SIZE, height: a = Le.AUTO_SIZE, resolutionX: o = n, resolutionY: u = a } = {}) {
    super("NormalPass"), this.needsSwap = false, this.renderPass = new $n(e3, t, new Ki());
    const d = this.renderPass;
    d.ignoreBackground = true, d.skipShadowMapUpdate = true;
    const f = d.getClearPass();
    f.overrideClearColor = new ts(7829503), f.overrideClearAlpha = 1, this.renderTarget = r, this.renderTarget === void 0 && (this.renderTarget = new Qe(1, 1, { minFilter: _t, magFilter: _t }), this.renderTarget.texture.name = "NormalPass.Target");
    const m = this.resolution = new Le(this, o, u, s);
    m.addEventListener("change", (A) => this.setSize(m.baseWidth, m.baseHeight));
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
function Ar(e3, t, r) {
  return t in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
new Be();
new Be();
function ti(e3, t) {
  if (!(e3 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var qe = function e(t, r, s) {
  var n = this;
  ti(this, e), Ar(this, "dot2", function(a, o) {
    return n.x * a + n.y * o;
  }), Ar(this, "dot3", function(a, o, u) {
    return n.x * a + n.y * o + n.z * u;
  }), this.x = t, this.y = r, this.z = s;
}, jc = [new qe(1, 1, 0), new qe(-1, 1, 0), new qe(1, -1, 0), new qe(-1, -1, 0), new qe(1, 0, 1), new qe(-1, 0, 1), new qe(1, 0, -1), new qe(-1, 0, -1), new qe(0, 1, 1), new qe(0, -1, 1), new qe(0, 1, -1), new qe(0, -1, -1)], tn = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], rn = new Array(512), sn = new Array(512), Yc = function(t) {
  t > 0 && t < 1 && (t *= 65536), t = Math.floor(t), t < 256 && (t |= t << 8);
  for (var r = 0; r < 256; r++) {
    var s;
    r & 1 ? s = tn[r] ^ t & 255 : s = tn[r] ^ t >> 8 & 255, rn[r] = rn[r + 256] = s, sn[r] = sn[r + 256] = jc[s % 12];
  }
};
Yc(0);
function Wc(e3) {
  if (typeof e3 == "number") e3 = Math.abs(e3);
  else if (typeof e3 == "string") {
    var t = e3;
    e3 = 0;
    for (var r = 0; r < t.length; r++) e3 = (e3 + (r + 1) * (t.charCodeAt(r) % 96)) % 2147483647;
  }
  return e3 === 0 && (e3 = 311), e3;
}
function nn(e3) {
  var t = Wc(e3);
  return function() {
    var r = t * 48271 % 2147483647;
    return t = r, r / 2147483647;
  };
}
var Vc = function e2(t) {
  var r = this;
  ti(this, e2), Ar(this, "seed", 0), Ar(this, "init", function(s) {
    r.seed = s, r.value = nn(s);
  }), Ar(this, "value", nn(this.seed)), this.init(t);
};
new Vc(Math.random());
const _c = x.createContext(null), an = (e3) => (e3.getAttributes() & 2) === 2, Xc = x.memo(x.forwardRef(({ children: e3, camera: t, scene: r, resolutionScale: s, enabled: n = true, renderPriority: a = 1, autoClear: o = true, depthBuffer: u, enableNormalPass: d, stencilBuffer: f, multisampling: m = 8, frameBufferType: A = Ve }, E) => {
  const { gl: M, scene: F, camera: q, size: k } = vt(), W = r || F, U = t || q, [H, te, J] = x.useMemo(() => {
    const C = new xo(M, { depthBuffer: u, stencilBuffer: f, multisampling: m, frameBufferType: A });
    C.addPass(new $n(W, U));
    let b = null, Q = null;
    return d && (Q = new Qc(W, U), Q.enabled = false, C.addPass(Q), s !== void 0 && (b = new Fc({ normalBuffer: Q.texture, resolutionScale: s }), b.enabled = false, C.addPass(b))), [C, Q, b];
  }, [U, M, u, f, m, A, W, d, s]);
  x.useEffect(() => H == null ? void 0 : H.setSize(k.width, k.height), [H, k]), Ge((C, b) => {
    if (n) {
      const Q = M.autoClear;
      M.autoClear = o, f && !o && M.clearStencil(), H.render(b), M.autoClear = Q;
    }
  }, n ? a : 0);
  const K = x.useRef(null);
  x.useLayoutEffect(() => {
    var _a2;
    const C = [], b = K.current.__r3f;
    if (b && H) {
      const Q = b.children;
      for (let G = 0; G < Q.length; G++) {
        const Z = Q[G].object;
        if (Z instanceof Kt) {
          const P = [Z];
          if (!an(Z)) {
            let z = null;
            for (; (z = (_a2 = Q[G + 1]) == null ? void 0 : _a2.object) instanceof Kt && !an(z); ) P.push(z), G++;
          }
          const R = new kc(U, ...P);
          C.push(R);
        } else Z instanceof ze && C.push(Z);
      }
      for (const G of C) H == null ? void 0 : H.addPass(G);
      te && (te.enabled = true), J && (J.enabled = true);
    }
    return () => {
      for (const Q of C) H == null ? void 0 : H.removePass(Q);
      te && (te.enabled = false), J && (J.enabled = false);
    };
  }, [H, e3, U, te, J]), x.useEffect(() => {
    const C = M.toneMapping;
    return M.toneMapping = $i, () => {
      M.toneMapping = C;
    };
  }, [M]);
  const oe = x.useMemo(() => ({ composer: H, normalPass: te, downSamplingPass: J, resolutionScale: s, camera: U, scene: W }), [H, te, J, s, U, W]);
  return x.useImperativeHandle(E, () => H, [H]), l.jsx(_c.Provider, { value: oe, children: l.jsx("group", { ref: K, children: e3 }) });
}));
let Kc = 0;
const on = /* @__PURE__ */ new WeakMap(), Zc = (e3, t) => function({ blendFunction: r = t == null ? void 0 : t.blendFunction, opacity: s = t == null ? void 0 : t.opacity, ...n }) {
  let a = on.get(e3);
  if (!a) {
    const d = `@react-three/postprocessing/${e3.name}-${Kc++}`;
    bn({ [d]: e3 }), on.set(e3, a = d);
  }
  const o = vt((d) => d.camera), u = Si.useMemo(() => [...(t == null ? void 0 : t.args) ?? [], ...n.args ?? [{ ...t, ...n }]], [JSON.stringify(n)]);
  return l.jsx(a, { camera: o, "blendMode-blendFunction": r, "blendMode-opacity-value": s, ...n, args: u });
}, Jc = Zc(Rc), fs = 64;
function qc() {
  return l.jsxs("group", { children: [l.jsx(el, {}), l.jsx($c, {}), l.jsx(tl, {}), l.jsx(sl, {})] });
}
function $c() {
  const e3 = x.useMemo(() => Array.from({ length: fs }).map((t, r) => {
    const s = r / fs * Math.PI * 2, n = Math.PI * nt / fs + 0.35;
    return { angle: s, half: n };
  }), []);
  return l.jsx(ct, { type: "fixed", colliders: false, friction: 1, children: e3.map(({ angle: t, half: r }, s) => l.jsxs("group", { position: [Math.cos(t) * nt, Ct, Math.sin(t) * nt], rotation: [0, -t, 0], children: [l.jsx(Cr, { args: [Ut / 2, 0.35, r], position: [0, -0.35, 0] }), [-1, 1].map((n) => l.jsx(Cr, { args: [0.35, 0.33, r], position: [n * Ut / 2, -0.04, 0] }, n))] }, s)) });
}
function el() {
  return l.jsxs("group", { position: [0, Ct, 0], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], receiveShadow: true, children: [l.jsx("ringGeometry", { args: [nt - Ut / 2, nt + Ut / 2, 128] }), l.jsx("meshStandardMaterial", { color: V.deck, roughness: 0.45, metalness: 0.6, side: et })] }), [-Ut / 2, Ut / 2].map((e3, t) => l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.16, 0], children: [l.jsx("ringGeometry", { args: [nt + e3 - 0.2, nt + e3 + 0.2, 128] }), l.jsx("meshStandardMaterial", { color: t ? V.magenta : V.cyan, emissive: t ? V.magenta : V.cyan, emissiveIntensity: 3.4, toneMapped: false, side: et })] }, e3)), l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -0.45, 0], children: [l.jsx("ringGeometry", { args: [nt - 1.6, nt + 1.6, 96] }), l.jsx("meshStandardMaterial", { color: V.cyan, emissive: V.cyan, emissiveIntensity: 1.1, toneMapped: false, side: et })] })] });
}
function tl() {
  const e3 = ea();
  return l.jsxs("group", { children: [l.jsxs(At, { limit: e3.length, castShadow: true, children: [l.jsx("cylinderGeometry", { args: [0.7, 1.3, Ct, 6] }), l.jsx("meshStandardMaterial", { color: V.deckEdge, roughness: 0.6, metalness: 0.4, flatShading: true }), e3.map(([t, r], s) => l.jsx(mt, { position: [t, Ct / 2, r] }, s))] }), l.jsx(ct, { type: "fixed", colliders: false, children: e3.map(([t, r], s) => l.jsx(bs, { args: [Ct / 2, 1.2], position: [t, Ct / 2, r] }, s)) }), l.jsxs(At, { limit: e3.length, children: [l.jsx("torusGeometry", { args: [1.5, 0.16, 6, 16] }), l.jsx("meshStandardMaterial", { color: V.cyan, emissive: V.cyan, emissiveIntensity: 2.8, toneMapped: false }), e3.map(([t, r], s) => l.jsx(mt, { position: [t, Ct - 2.4, r], rotation: [Math.PI / 2, 0, 0] }, s))] })] });
}
const rl = l.jsx("boxGeometry", { args: [0.5, 0.3, 4.5] });
function sl() {
  const e3 = x.useRef(null), t = x.useMemo(() => Array.from({ length: 14 }).map((r, s) => ({ angle: s / 14 * Math.PI * 2, direction: s % 2 ? 1 : -1, offset: s % 2 ? 1.9 : -1.9, speed: 0.055 + s % 5 * 0.012, color: s % 2 ? V.magenta : V.cyan })), []);
  return Ge((r, s) => {
    e3.current && e3.current.children.forEach((n, a) => {
      const o = t[a];
      o.angle += s * o.speed * o.direction;
      const u = nt + o.offset;
      n.position.set(Math.cos(o.angle) * u, Ct + 0.4, Math.sin(o.angle) * u), n.rotation.y = -o.angle + Math.PI / 2;
    });
  }), l.jsx("group", { ref: e3, children: t.map((r, s) => l.jsxs("mesh", { children: [rl, l.jsx("meshStandardMaterial", { color: r.color, emissive: r.color, emissiveIntensity: 6, toneMapped: false })] }, s)) });
}
const cn = { A: "01110 10001 10001 11111 10001 10001 10001", B: "11110 10001 10001 11110 10001 10001 11110", C: "01111 10000 10000 10000 10000 10000 01111", D: "11110 10001 10001 10001 10001 10001 11110", E: "11111 10000 10000 11110 10000 10000 11111", F: "11111 10000 10000 11110 10000 10000 10000", G: "01111 10000 10000 10111 10001 10001 01111", H: "10001 10001 10001 11111 10001 10001 10001", I: "11111 00100 00100 00100 00100 00100 11111", J: "00111 00010 00010 00010 00010 10010 01100", K: "10001 10010 10100 11000 10100 10010 10001", L: "10000 10000 10000 10000 10000 10000 11111", M: "10001 11011 10101 10101 10001 10001 10001", N: "10001 11001 10101 10011 10001 10001 10001", O: "01110 10001 10001 10001 10001 10001 01110", P: "11110 10001 10001 11110 10000 10000 10000", Q: "01110 10001 10001 10001 10101 10010 01101", R: "11110 10001 10001 11110 10100 10010 10001", S: "01111 10000 10000 01110 00001 00001 11110", T: "11111 00100 00100 00100 00100 00100 00100", U: "10001 10001 10001 10001 10001 10001 01110", V: "10001 10001 10001 10001 10001 01010 00100", W: "10001 10001 10001 10101 10101 11011 10001", X: "10001 10001 01010 00100 01010 10001 10001", Y: "10001 10001 01010 00100 00100 00100 00100", Z: "11111 00001 00010 00100 01000 10000 11111", 0: "01110 10001 10011 10101 11001 10001 01110", 1: "00100 01100 00100 00100 00100 00100 01110", 2: "01110 10001 00001 00010 00100 01000 11111", 3: "11110 00001 00001 01110 00001 00001 11110", 4: "00010 00110 01010 10010 11111 00010 00010", 5: "11111 10000 11110 00001 00001 10001 01110", 6: "00110 01000 10000 11110 10001 10001 01110", 7: "11111 00001 00010 00100 01000 01000 01000", 8: "01110 10001 10001 01110 10001 10001 01110", 9: "01110 10001 10001 01111 00001 00010 01100", "!": "00100 00100 00100 00100 00100 00000 00100", "?": "01110 10001 00001 00110 00100 00000 00100", ".": "00000 00000 00000 00000 00000 01100 01100", "'": "00100 00100 00000 00000 00000 00000 00000", "&": "01100 10010 10010 01100 10101 10010 01101", "-": "00000 00000 00000 11111 00000 00000 00000", "/": "00001 00010 00010 00100 01000 01000 10000", " ": "00000 00000 00000 00000 00000 00000 00000" }, gs = 5, ps = 7, ln = 1;
function nl(e3) {
  const t = e3.toUpperCase().split(""), r = t.length * gs + Math.max(0, t.length - 1) * ln, s = [];
  return t.forEach((n, a) => {
    const o = (cn[n] ?? cn["?"]).split(" "), u = a * (gs + ln);
    o.forEach((d, f) => {
      for (let m = 0; m < gs; m += 1) d[m] === "1" && s.push({ x: u + m - (r - 1) / 2, y: ps - 1 - f - (ps - 1) / 2 });
    });
  }), { cubes: s, width: r, height: ps };
}
const Lr = new Un();
function Tt({ children: e3, position: t = [0, 0, 0], rotation: r = [0, 0, 0], size: s = 1, depth: n = 1, color: a = "#ffffff", emissive: o = "#000000", emissiveIntensity: u = 0, wave: d = 0 }) {
  const f = x.useRef(null), { cubes: m } = x.useMemo(() => nl(e3), [e3]), A = (E) => {
    f.current && (m.forEach((M, F) => {
      const q = d ? Math.sin(E * 1.6 + M.x * 0.35) * d : 0;
      Lr.position.set(M.x * s, M.y * s + q, 0), Lr.scale.setScalar(1), Lr.updateMatrix(), f.current.setMatrixAt(F, Lr.matrix);
    }), f.current.instanceMatrix.needsUpdate = true);
  };
  return x.useLayoutEffect(() => A(0)), Ge(({ clock: E }) => {
    d && A(E.elapsedTime);
  }), l.jsxs("instancedMesh", { ref: f, args: [void 0, void 0, m.length], position: t, rotation: r, castShadow: true, receiveShadow: true, children: [l.jsx("boxGeometry", { args: [s * 0.96, s * 0.96, n] }), l.jsx("meshStandardMaterial", { color: a, emissive: o, emissiveIntensity: u, roughness: 0.35, metalness: 0.1, flatShading: true })] });
}
const ri = 1, si = 0, Dt = 4.6, il = 13, vs = 16, Gr = 5;
function mr(e3, t, r, s, n, a, o) {
  const u = new Float32Array(24);
  let d = 0;
  for (const [f, m] of [e3, t].entries()) {
    const A = o && f ? o[0] : r, E = o && f ? o[1] : s;
    for (const [M, F] of [[A, n], [E, n], [E, a], [A, a]]) u[d++] = m.position.x + m.right.x * M + m.up.x * F, u[d++] = m.position.y + m.right.y * M + m.up.y * F, u[d++] = m.position.z + m.right.z * M + m.up.z * F;
  }
  return u;
}
function ni(e3) {
  const t = e3.length - 1, r = new Map(e3.map((s) => [s, Dt]));
  for (const s of Ln) {
    const n = Math.round(s / (Math.PI * 2) * t);
    for (let a = -Gr; a <= vs + Gr; a += 1) {
      const o = a < 0 ? 1 + a / Gr : a > vs ? 1 - (a - vs) / Gr : 1, u = o * o * (3 - 2 * o), d = e3[((n + a) % t + t) % t], f = Dt + (il - Dt) * u;
      r.set(d, Math.max(r.get(d) ?? Dt, f));
    }
  }
  return (s) => r.get(s) ?? Dt;
}
function al(e3) {
  const t = ni(e3), r = [];
  for (let s = 0; s + 1 < e3.length; s += 1) {
    const n = e3[s], a = e3[s + 1];
    if (r.push({ points: mr(n, a, -pr, pr, 0, -3.5), wall: false }), s % 3 === 0 && s + 3 < e3.length) {
      const o = e3[s + 3], u = Ds(Math.atan2(n.position.z, n.position.x)) && Ds(Math.atan2(o.position.z, o.position.x));
      for (const d of [-1, 1]) d < 0 && u || r.push({ points: mr(n, o, d * pr - 0.45, d * pr + 0.45, Math.max(t(n), t(o)), 0), wall: true });
    }
  }
  return r;
}
function ii(e3) {
  const t = rs() - 1;
  return Array.from({ length: e3 }, (r, s) => {
    const n = e3 - 1 - s;
    if (n >= t) return It;
    const a = n / t;
    return 2 * (0.45 + (It - 0.45) * a * a) - It;
  });
}
function ol(e3, t) {
  return t >= e3 - rs();
}
function cl(e3) {
  const t = ii(e3.length), r = [];
  for (let s = 0; s + 1 < e3.length; s += 1) {
    const n = e3[s], a = e3[s + 1], o = t[s], u = t[s + 1];
    if (r.push({ points: mr(n, a, -o, It, 0, -2.6, [-u, It]), wall: false }), s % 2 === 0 && s + 2 < e3.length) {
      const d = e3[s + 2], f = t[s + 2];
      r.push({ points: mr(n, d, -o - 0.45, -o + 0.45, Dt, 0, [-f - 0.45, -f + 0.45]), wall: true }), ol(e3.length, s) || r.push({ points: mr(n, d, o - 0.45, o + 0.45, Dt, 0, [f - 0.45, f + 0.45]), wall: true });
    }
  }
  return r;
}
const Yr = [0.4, 0.8, 1.2, 1.6].map((e3) => Math.PI * e3), ai = (e3) => Xt(e3), As = 9, ll = 16, ge = { running: false, checkpoint: 0, time: 0, armed: true }, un = (e3) => ai(e3), Hr = (e3, t, r, s) => {
  const n = e3 - r.x, a = t - r.z;
  return n * n + a * a < s * s;
};
function ul(e3, t, r, s) {
  const n = un(0);
  if (ge.running) {
    ge.time += r;
    const a = Yr[ge.checkpoint];
    a !== void 0 && Hr(e3, t, un(a), As) && (ge.checkpoint += 1), ge.checkpoint >= Yr.length && Hr(e3, t, n, As) && (s.finishLap(ge.time), ge.running = false, ge.checkpoint = 0, ge.time = 0, ge.armed = false), (Math.hypot(e3, t) < 100 || B.y < Gn - 3) && (ge.running = false, ge.checkpoint = 0, ge.time = 0);
  } else ge.armed && Hr(e3, t, n, As) && (ge.running = true, ge.checkpoint = 0, ge.time = 0, s.startLap(), ta(), ge.armed = false);
  !ge.armed && !Hr(e3, t, n, ll) && (ge.armed = true), B.raceRunning = ge.running, B.raceTime = ge.time, B.raceCheckpoint = ge.checkpoint, B.raceTotal = Yr.length;
}
function dl() {
  ge.running = false, ge.checkpoint = 0, ge.time = 0, ge.armed = true;
}
const Vt = pr * 2, dn = 0.6, Nr = (e3) => new Ce(e3.x, e3.y, e3.z), hn = (e3) => e3.map((t) => ({ position: Nr(t.position), forward: Nr(t.forward), right: Nr(t.right), up: Nr(t.up) }));
function hl() {
  const e3 = x.useMemo(() => hn(ra()), []), t = x.useMemo(() => hn(sa()), []);
  return l.jsxs("group", { children: [l.jsx(fl, { frames: e3 }), l.jsx(vl, { frames: e3 }), l.jsx(Al, { frames: e3 }), l.jsx(Ml, { frames: t }), l.jsx(wl, { frames: e3 }), l.jsx(Sl, {}), l.jsx(Il, {}), l.jsx(Tl, {})] });
}
function Yt(e3, t, r = true) {
  const s = [], n = (u, d, f) => {
    s.push(u.position.x + u.right.x * d + u.up.x * f, u.position.y + u.right.y * d + u.up.y * f, u.position.z + u.right.z * d + u.up.z * f);
  }, a = typeof e3 == "function" ? e3 : () => e3;
  for (let u = 0; u < t.length - 1; u += 1) {
    const d = t[u], f = t[u + 1], m = a(u), A = a(u + 1), E = m.length;
    for (let M = 0; M < (r ? E : E - 1); M += 1) {
      const F = (M + 1) % E;
      n(d, m[M][0], m[M][1]), n(f, A[M][0], A[M][1]), n(f, A[F][0], A[F][1]), n(d, m[M][0], m[M][1]), n(f, A[F][0], A[F][1]), n(d, m[F][0], m[F][1]);
    }
  }
  const o = new Br();
  return o.setAttribute("position", new Ps(s, 3)), o.computeVertexNormals(), o;
}
const Ft = Vt / 2, oi = (() => {
  const e3 = new Br(), t = (r, s, n, a, o, u) => [r, 0, s, n, 0, a, o, 0, u];
  return e3.setAttribute("position", new Ps([...t(-1.7, 0.1, 1.7, 0.1, 0, 2.4), ...t(-0.7, -2.2, 0.7, -2.2, 0.7, 0.1), ...t(-0.7, -2.2, 0.7, 0.1, -0.7, 0.1)], 3)), e3.computeVertexNormals(), e3;
})();
function fl({ frames: e3 }) {
  const t = x.useMemo(() => Yt([[-Ft, 0], [Ft, 0], [Ft, -0.5], [-Ft, -0.5]], e3), [e3]), r = x.useMemo(() => ni(e3), [e3]), s = x.useMemo(() => ci(e3, Ft, gl(e3), void 0, r), [e3, r]);
  return l.jsxs("group", { children: [l.jsx("mesh", { geometry: t, receiveShadow: true, children: l.jsx("meshStandardMaterial", { color: "#242a5c", emissive: "#2b3370", emissiveIntensity: 0.55, roughness: 0.55, metalness: 0.4, flatShading: true }) }), l.jsx(li, { ...s }), l.jsx(pl, { frames: e3 })] });
}
function gl(e3) {
  const t = e3.length - 1, r = [], s = [];
  for (let n = 0; n <= t; n += 1) {
    if (Ds(n / t * Math.PI * 2 % (Math.PI * 2))) {
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
function ci(e3, t, r, s, n) {
  const a = { kerbs: [], screens: [], caps: [], cables: [] }, o = typeof t == "function" ? t : () => t, u = n ?? (() => Dt), d = (f, m, A, E, M) => (F) => {
    const q = m[F], k = f * o(q), W = u(q), U = A === null ? W : A < 0 ? W * -A : A, H = E === null ? W + 0.16 : E < 0 ? W * -E + 0.13 : E;
    return [[k - M, U], [k + M, U], [k + M, H], [k - M, H]];
  };
  for (const f of [-1, 1]) {
    const m = (f < 0 ? r : s) ?? [e3];
    for (const A of m) if (!(A.length < 2)) {
      a.kerbs.push(Yt(d(f, A, 0, dn, 0.32), A)), a.screens.push(Yt(d(f, A, dn, null, 0.07), A)), a.caps.push(Yt(d(f, A, null, null, 0.2), A));
      for (const E of [-0.42, -0.72]) a.cables.push(Yt(d(f, A, E, E, 0.13), A));
    }
  }
  return a;
}
function li({ kerbs: e3, screens: t, caps: r, cables: s }) {
  return l.jsxs("group", { children: [e3.map((n, a) => l.jsx("mesh", { geometry: n, children: l.jsx("meshStandardMaterial", { color: "#1b2050", roughness: 0.6, metalness: 0.35, flatShading: true }) }, `k${a}`)), t.map((n, a) => l.jsx("mesh", { geometry: n, children: l.jsx("meshBasicMaterial", { color: V.cyan, transparent: true, opacity: 0.14, depthWrite: false, side: et, toneMapped: false }) }, `s${a}`)), r.map((n, a) => l.jsx("mesh", { geometry: n, children: l.jsx("meshStandardMaterial", { color: V.cyan, emissive: V.cyan, emissiveIntensity: 2.4, toneMapped: false }) }, `c${a}`)), s.map((n, a) => l.jsx("mesh", { geometry: n, children: l.jsx("meshStandardMaterial", { color: V.cyan, emissive: V.cyan, emissiveIntensity: 1.1, toneMapped: false }) }, `w${a}`))] });
}
function pl({ frames: e3 }) {
  const t = x.useMemo(() => {
    const s = [], n = new Kr();
    for (let a = 0; a < e3.length - 1; a += 3) {
      const o = e3[a], u = o.forward;
      n.makeBasis(o.right, o.up, u);
      const d = new pt().setFromRotationMatrix(n);
      for (const f of [-1, 1]) s.push({ position: o.position.clone().addScaledVector(o.right, f * (Ft - 1.1)).addScaledVector(o.up, 0.3), quaternion: d });
    }
    return s;
  }, [e3]), r = x.useMemo(() => {
    const s = [], n = new Kr();
    for (let a = 0; a < e3.length - 1; a += 5) {
      const o = e3[a];
      n.makeBasis(o.right, o.up, o.forward), s.push({ position: o.position.clone().addScaledVector(o.up, 0.3), quaternion: new pt().setFromRotationMatrix(n) });
    }
    return s;
  }, [e3]);
  return l.jsxs("group", { children: [l.jsxs(At, { limit: t.length, range: t.length, children: [l.jsx("boxGeometry", { args: [0.5, 0.1, 0.5] }), l.jsx("meshStandardMaterial", { color: "#f2f5ff", emissive: "#cfe4ff", emissiveIntensity: 2.2, toneMapped: false }), t.map((s, n) => l.jsx(mt, { position: s.position, quaternion: s.quaternion }, n))] }), l.jsxs(At, { limit: r.length, range: r.length, children: [l.jsx("primitive", { object: oi, attach: "geometry" }), l.jsx("meshStandardMaterial", { color: V.lime, emissive: V.lime, emissiveIntensity: 1.6, toneMapped: false, side: et }), r.map((s, n) => l.jsx(mt, { position: s.position, quaternion: s.quaternion }, n))] })] });
}
function vl({ frames: e3 }) {
  const t = x.useMemo(() => al(e3), [e3]);
  return l.jsx(ct, { type: "fixed", colliders: false, friction: 1, children: t.map((r, s) => l.jsx(Os, { args: [r.points], friction: r.wall ? si : ri }, s)) });
}
function Al({ frames: e3 }) {
  const t = x.useMemo(() => e3.filter((r, s) => s % 12 === 0).map((r, s) => ({ base: r.position.clone().addScaledVector(r.right, (s % 2 ? 1 : -1) * (Ft + 2.4)) })).filter((r) => Math.hypot(r.base.x, r.base.z) > Fs + 6 && !na(r.base.x, r.base.z, 3)), [e3]);
  return l.jsxs("group", { children: [l.jsxs(At, { limit: t.length, range: t.length, children: [l.jsx("cylinderGeometry", { args: [0.7, 1.5, 1, 6] }), l.jsx("meshStandardMaterial", { color: V.deckEdge, roughness: 0.6, flatShading: true }), t.map((r, s) => l.jsx(mt, { position: [r.base.x, r.base.y / 2 - 5, r.base.z], scale: [1, r.base.y + 10, 1] }, s))] }), l.jsxs(At, { limit: t.length, range: t.length, children: [l.jsx("octahedronGeometry", { args: [0.65, 0] }), l.jsx("meshStandardMaterial", { color: "#dfe9ff", emissive: "#bcd4ff", emissiveIntensity: 2.4, toneMapped: false }), t.map((r, s) => l.jsx(mt, { position: [r.base.x, r.base.y + 4.2, r.base.z] }, s))] })] });
}
const Jr = 3.6, ml = 3.45, xr = 14, Er = 7.2, xl = (() => {
  const e3 = Jr, t = xr, r = Er, s = [[-e3, 0, -t / 2], [e3, 0, -t / 2], [e3, r, t / 2], [-e3, r, t / 2], [-e3, 0, t / 2], [e3, 0, t / 2]], n = (u, d, f) => [...s[u], ...s[d], ...s[f]], a = new Float32Array([...n(0, 1, 2), ...n(0, 2, 3), ...n(4, 5, 1), ...n(4, 1, 0), ...n(5, 2, 1), ...n(4, 0, 3), ...n(4, 3, 5), ...n(3, 2, 5), ...n(3, 5, 4)]), o = new Br();
  return o.setAttribute("position", new Ps(a, 3)), o.computeVertexNormals(), o;
})(), El = (() => {
  const e3 = Jr, t = xr, r = Er;
  return new Float32Array([-e3, 0, -t / 2, e3, 0, -t / 2, -e3, 0, t / 2, e3, 0, t / 2, -e3, r, t / 2, e3, r, t / 2]);
})();
function wl({ frames: e3 }) {
  const t = x.useMemo(() => Ln.map((r, s) => {
    const n = e3.length - 1, a = Math.round(r / (Math.PI * 2) * n) % n, o = e3[a], u = s % 2 ? 1 : -1, d = new Kr().makeBasis(o.right, o.up, o.forward);
    return { position: o.position.clone().addScaledVector(o.right, u * ml).addScaledVector(o.up, 0.02), quaternion: new pt().setFromRotationMatrix(d) };
  }), [e3]);
  return l.jsx("group", { children: t.map((r, s) => l.jsxs("group", { position: r.position, quaternion: r.quaternion, children: [l.jsx("mesh", { geometry: xl, castShadow: true, receiveShadow: true, children: l.jsx("meshStandardMaterial", { color: "#33306e", emissive: V.lime, emissiveIntensity: 0.28, roughness: 0.5, metalness: 0.35, flatShading: true }) }), l.jsxs("mesh", { position: [0, Er + 0.06, xr / 2], children: [l.jsx("boxGeometry", { args: [Jr * 2, 0.14, 0.3] }), l.jsx("meshStandardMaterial", { color: V.lime, emissive: V.lime, emissiveIntensity: 3, toneMapped: false })] }), [-1, 1].map((n) => l.jsxs("mesh", { position: [n * Jr, Er / 2 - 0.1, 0], rotation: [Math.atan2(Er, xr), 0, 0], children: [l.jsx("boxGeometry", { args: [0.12, 0.12, xr] }), l.jsx("meshStandardMaterial", { color: V.amber, emissive: V.amber, emissiveIntensity: 2.6, toneMapped: false })] }, n)), l.jsx(ct, { type: "fixed", colliders: false, friction: 1, children: l.jsx(Os, { args: [El] }) })] }, s)) });
}
function Ml({ frames: e3 }) {
  const t = x.useMemo(() => ii(e3.length), [e3]), r = x.useMemo(() => {
    const o = new Map(e3.map((u, d) => [u, t[d]]));
    return (u) => o.get(u) ?? It;
  }, [e3, t]), s = x.useMemo(() => Yt((o) => [[-t[o], 0], [It, 0], [It, -0.5], [-t[o], -0.5]], e3, true), [e3, t]), n = x.useMemo(() => ci(e3, r, [e3], [e3.slice(0, Math.max(e3.length - rs(), 2))]), [e3, r]), a = x.useMemo(() => {
    const o = [], u = new Kr();
    for (let d = 2; d < e3.length - 1; d += 4) {
      const f = e3[d];
      u.makeBasis(f.right, f.up, f.forward), o.push({ position: f.position.clone().addScaledVector(f.up, 0.06), quaternion: new pt().setFromRotationMatrix(u) });
    }
    return o;
  }, [e3]);
  return l.jsxs("group", { children: [l.jsx("mesh", { geometry: s, receiveShadow: true, children: l.jsx("meshStandardMaterial", { color: "#232858", emissive: "#2a3170", emissiveIntensity: 0.5, roughness: 0.55, metalness: 0.4, flatShading: true }) }), l.jsx(li, { ...n }), l.jsxs(At, { limit: a.length, geometry: Cl, children: [l.jsx("meshStandardMaterial", { color: V.lime, emissive: V.lime, emissiveIntensity: 2, toneMapped: false }), a.map((o, u) => l.jsx(mt, { position: o.position, quaternion: o.quaternion }, u))] }), l.jsx(Dl, { frames: e3 }), l.jsx(Bl, { frames: e3 })] });
}
const Cl = new ia(3.4, 0.08, 1.1);
function Dl({ frames: e3 }) {
  const t = x.useMemo(() => cl(e3), [e3]);
  return l.jsx(ct, { type: "fixed", colliders: false, friction: 1, children: t.map((r, s) => l.jsx(Os, { args: [r.points], friction: r.wall ? si : ri }, s)) });
}
function Bl({ frames: e3 }) {
  const t = x.useMemo(() => {
    const r = [];
    for (let s = 4; s < e3.length - rs(); s += 7) {
      const n = e3[s], { x: a, z: o } = n.position, u = Math.hypot(a, o);
      if (Math.abs(u - nt) < Ut / 2 + 3 || aa(a, o, 3) || oa(a, o, 3)) continue;
      const d = u < Fs ? 0 : -8, f = n.position.y - d;
      f < 3 || r.push({ position: new Ce(a, (n.position.y + d) / 2 - 0.5, o), height: f });
    }
    return r;
  }, [e3]);
  return l.jsxs("group", { children: [l.jsx(ct, { type: "fixed", colliders: false, children: t.map((r, s) => l.jsx(bs, { args: [r.height / 2, 1.3], position: r.position }, s)) }), t.map((r, s) => l.jsxs("mesh", { position: r.position, children: [l.jsx("cylinderGeometry", { args: [0.75, 1.5, r.height, 6] }), l.jsx("meshStandardMaterial", { color: V.deckEdge, roughness: 0.65, flatShading: true })] }, s))] });
}
function Sl() {
  const e3 = Xt(0), t = Xt(0.02), r = Math.atan2(t.x - e3.x, t.z - e3.z);
  return l.jsxs("group", { position: [e3.x, e3.y, e3.z], rotation: [0, r, 0], children: [[-1, 1].map((s) => l.jsxs("mesh", { position: [s * Vt / 2, 5, 0], castShadow: true, children: [l.jsx("boxGeometry", { args: [1.1, 10, 1.1] }), l.jsx("meshStandardMaterial", { color: V.deckEdge, roughness: 0.5, metalness: 0.5, flatShading: true })] }, s)), [8.4, 9.6].map((s) => l.jsxs("mesh", { position: [0, s, 0], children: [l.jsx("boxGeometry", { args: [Vt + 1.6, 0.5, 0.6] }), l.jsx("meshStandardMaterial", { color: V.lime, emissive: V.lime, emissiveIntensity: 0.55 })] }, s)), Array.from({ length: 10 }).map((s, n) => [0, 1].map((a) => l.jsxs("mesh", { position: [-Vt / 2 + 0.75 + n * 1.5, 0.3, a * 1.5 - 0.75], children: [l.jsx("boxGeometry", { args: [1.5, 0.08, 1.5] }), l.jsx("meshStandardMaterial", { color: (n + a) % 2 ? "#f2f5ff" : "#141634", emissive: (n + a) % 2 ? "#f2f5ff" : "#000000", emissiveIntensity: (n + a) % 2 ? 0.5 : 0 })] }, `${n}-${a}`))), l.jsx(Tt, { position: [0, 11.6, -0.6], rotation: [0, Math.PI / 2, 0], size: 0.5, depth: 0.4, color: "#eaf3ff", emissive: V.lime, emissiveIntensity: 1.1, children: "START" }), l.jsx(Tt, { position: [0, 11.6, 0.6], rotation: [0, -Math.PI / 2, 0], size: 0.5, depth: 0.4, color: "#eaf3ff", emissive: V.amber, emissiveIntensity: 1.1, children: "FINISH" }), l.jsx("mesh", { geometry: oi, position: [0, 0.34, 8], scale: [2, 1, 2], children: l.jsx("meshStandardMaterial", { color: V.lime, emissive: V.lime, emissiveIntensity: 2.6, toneMapped: false, side: et }) }), l.jsx("pointLight", { position: [0, 7, 0], color: V.lime, intensity: 26, distance: 38, decay: 2 })] });
}
function Il() {
  const e3 = x.useRef(null);
  return Ge(({ clock: t }) => {
    e3.current && e3.current.children.forEach((r, s) => {
      const n = r.children[0];
      if (!n) return;
      const a = n.material, o = B.raceCheckpoint === s && B.raceRunning;
      a.emissiveIntensity = o ? 2.6 + Math.sin(t.elapsedTime * 6) * 1.2 : B.raceRunning ? 0.4 : 1.2;
    });
  }), l.jsx("group", { ref: e3, children: Yr.map((t, r) => {
    const s = ai(t), n = Xt(t + 0.02), a = Math.atan2(n.x - s.x, n.z - s.z);
    return l.jsxs("group", { position: [s.x, s.y, s.z], rotation: [0, a, 0], children: [l.jsxs("mesh", { position: [0, 4, 0], children: [l.jsx("boxGeometry", { args: [Vt, 0.5, 0.5] }), l.jsx("meshStandardMaterial", { color: V.magenta, emissive: V.magenta, emissiveIntensity: 1.2, toneMapped: false })] }), [-1, 1].map((o) => l.jsxs("mesh", { position: [o * Vt / 2, 2, 0], children: [l.jsx("boxGeometry", { args: [0.4, 4, 0.4] }), l.jsx("meshStandardMaterial", { color: V.deckEdge, roughness: 0.6, flatShading: true })] }, o)), l.jsx(Tt, { position: [0, 5.4, 0], rotation: [0, Math.PI / 2, 0], size: 0.34, depth: 0.3, color: "#f6e6ff", emissive: V.magenta, emissiveIntensity: 1, children: String(r + 1) })] }, r);
  }) });
}
function Tl() {
  const e3 = x.useRef(false), t = Zr((r) => r.circuitMode);
  return Ge((r, s) => {
    const a = Math.hypot(B.x, B.z) > 105 && B.y > 17;
    a !== e3.current && (e3.current = a, a ? at.askCircuitMode() : (at.leaveCircuit(), dl())), t === "race" && ul(B.x, B.z, s, at);
  }), null;
}
const fn = 70, ur = 120, gn = (() => {
  const t = document.createElement("canvas");
  t.width = 64, t.height = 64;
  const r = t.getContext("2d"), s = r.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
  s.addColorStop(0, "rgba(255,255,255,0.9)"), s.addColorStop(0.45, "rgba(255,255,255,0.35)"), s.addColorStop(1, "rgba(255,255,255,0)"), r.fillStyle = s, r.fillRect(0, 0, 64, 64);
  const n = new Hn(t);
  return n.needsUpdate = true, n;
})(), ui = (e3) => ({ positions: new Float32Array(e3 * 3).fill(9999), life: new Float32Array(e3), sizes: new Float32Array(e3), next: 0 });
function di(e3, t, r, s, n) {
  const a = e3.next % (e3.life.length || 1);
  e3.next += 1, e3.positions[a * 3] = t, e3.positions[a * 3 + 1] = r, e3.positions[a * 3 + 2] = s, e3.life[a] = 1, e3.sizes[a] = n;
}
function yl() {
  return l.jsxs("group", { children: [l.jsx(Rl, {}), l.jsx(bl, {})] });
}
function Rl() {
  const e3 = x.useRef(null), t = x.useMemo(() => ui(fn), []), r = x.useMemo(() => {
    const s = new Br();
    return s.setAttribute("position", new Xr(t.positions, 3)), s.setAttribute("size", new Xr(t.sizes, 1)), s;
  }, [t]);
  return Ge((s, n) => {
    const a = B.driftActive && B.speed > 6;
    a && di(t, B.x + (Math.random() - 0.5) * 1.1, B.y - 0.5, B.z + (Math.random() - 0.5) * 1.1, 1.4 + Math.random() * 1.6);
    for (let o = 0; o < fn; o += 1) t.life[o] <= 0 || (t.life[o] -= n * 0.85, t.positions[o * 3 + 1] += n * 1.4, t.sizes[o] += n * 2.2, t.life[o] <= 0 && (t.positions[o * 3 + 1] = 9999));
    if (r.attributes.position.needsUpdate = true, r.attributes.size.needsUpdate = true, e3.current) {
      const o = e3.current.material;
      o.opacity = a ? 0.34 : 0.2;
    }
  }), l.jsx("points", { ref: e3, geometry: r, frustumCulled: false, children: l.jsx("pointsMaterial", { size: 5.5, map: gn, alphaMap: gn, color: "#c9cff2", transparent: true, opacity: 0.28, depthWrite: false, sizeAttenuation: true, toneMapped: false }) });
}
function bl() {
  const e3 = x.useRef(null), t = x.useMemo(() => ui(ur), []), r = x.useMemo(() => new Un(), []), s = x.useMemo(() => new Float32Array(ur), []);
  return Ge((n, a) => {
    if (e3.current) {
      if (B.driftActive && B.speed > 6) {
        const o = t.next % ur;
        s[o] = B.heading, di(t, B.x, B.y - 0.72, B.z, 1);
      }
      for (let o = 0; o < ur; o += 1) {
        const u = t.life[o] > 0;
        u && (t.life[o] -= a * 0.12), r.position.set(t.positions[o * 3], t.positions[o * 3 + 1], t.positions[o * 3 + 2]), r.rotation.set(-Math.PI / 2, 0, -s[o]), r.scale.setScalar(u ? 1 : 1e-4), r.updateMatrix(), e3.current.setMatrixAt(o, r.matrix);
      }
      e3.current.instanceMatrix.needsUpdate = true;
    }
  }), l.jsxs("instancedMesh", { ref: e3, args: [void 0, void 0, ur], frustumCulled: false, children: [l.jsx("planeGeometry", { args: [2, 1.1] }), l.jsx("meshBasicMaterial", { color: "#0a0a16", transparent: true, opacity: 0.38, depthWrite: false })] });
}
const zr = 340, qr = 520, Pl = 150;
function Ol() {
  const e3 = ca(5150);
  return Array.from({ length: Pl }, () => {
    const t = e3() * Math.PI * 2, r = zr + e3() * (qr - zr), s = 1 - (r - zr) / (qr - zr), n = 26 + e3() * 90 * (0.4 + s), a = 12 + e3() * 22;
    return { position: [Math.cos(t) * r, n / 2, Math.sin(t) * r], scale: [a, n, a * (0.7 + e3() * 0.6)], rotation: e3() * Math.PI, lit: e3() > 0.55 };
  });
}
function Fl() {
  const e3 = x.useMemo(Ol, []), t = e3.filter((s) => !s.lit), r = e3.filter((s) => s.lit);
  return l.jsxs("group", { children: [l.jsxs(At, { limit: t.length, range: t.length, children: [l.jsx("boxGeometry", { args: [1, 1, 1] }), l.jsx("meshStandardMaterial", { color: "#16183a", roughness: 0.9, flatShading: true }), t.map((s, n) => l.jsx(mt, { position: s.position, scale: s.scale, rotation: [0, s.rotation, 0] }, n))] }), l.jsxs(At, { limit: r.length, range: r.length, children: [l.jsx("boxGeometry", { args: [1, 1, 1] }), l.jsx("meshStandardMaterial", { color: "#1d2150", emissive: V.cyan, emissiveIntensity: 0.35, roughness: 0.7, flatShading: true }), r.map((s, n) => l.jsx(mt, { position: s.position, scale: s.scale, rotation: [0, s.rotation, 0] }, n))] }), l.jsxs("mesh", { position: [0, 26, 0], rotation: [0, 0, 0], children: [l.jsx("cylinderGeometry", { args: [qr + 40, qr + 40, 90, 48, 1, true] }), l.jsx("meshBasicMaterial", { color: "#2a1c5c", side: gr, transparent: true, opacity: 0.42, depthWrite: false })] })] });
}
const ms = (() => {
  const t = document.createElement("canvas");
  t.width = 512, t.height = 512;
  const r = t.getContext("2d");
  for (let n = 0; n < 260; n += 1) {
    const a = Math.random() * 512, o = Math.random() * 512, u = 0.6 + Math.random() * 1.8, d = r.createRadialGradient(a, o, 0, a, o, u * 3);
    d.addColorStop(0, `rgba(200,225,255,${0.35 + Math.random() * 0.4})`), d.addColorStop(1, "rgba(200,225,255,0)"), r.fillStyle = d, r.fillRect(a - u * 3, o - u * 3, u * 6, u * 6);
  }
  const s = new Hn(t);
  return s.wrapS = s.wrapT = la, s.repeat.set(6, 6), s;
})();
function Ul() {
  return l.jsx("group", { children: l.jsx(Ll, {}) });
}
function Ll() {
  const e3 = x.useRef(null);
  return Ge(({ clock: t }) => {
    if (e3.current) {
      const r = e3.current.material;
      ms.offset.x = t.elapsedTime * 4e-3, ms.offset.y = Math.sin(t.elapsedTime * 0.05) * 0.02, r.opacity = 0.5 + Math.sin(t.elapsedTime * 0.4) * 0.12;
    }
  }), l.jsxs("group", { position: [0, -8.5, 0], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], children: [l.jsx("circleGeometry", { args: [900, 64] }), l.jsx("meshBasicMaterial", { color: "#0a1230" })] }), l.jsxs("mesh", { ref: e3, rotation: [-Math.PI / 2, 0, 0], position: [0, 0.3, 0], children: [l.jsx("circleGeometry", { args: [900, 64] }), l.jsx("meshBasicMaterial", { map: ms, transparent: true, opacity: 0.3, depthWrite: false, blending: Pn, toneMapped: false })] })] });
}
function Gl() {
  const e3 = x.useRef(null);
  return Ge(() => {
    const t = e3.current;
    if (!t) return;
    const r = B.raceRunning && ua() ? da(B.raceTime) : null;
    if (!r) {
      t.visible = false;
      return;
    }
    t.visible = true, t.position.set(r.x, r.y, r.z), t.rotation.y = r.h;
  }), l.jsxs("group", { ref: e3, visible: false, children: [l.jsxs("mesh", { position: [0, 0.02, 0], children: [l.jsx("boxGeometry", { args: [1.96, 0.44, 4] }), l.jsx("meshBasicMaterial", { color: V.cyan, transparent: true, opacity: 0.2, depthWrite: false, toneMapped: false })] }), l.jsxs("mesh", { position: [0, 0.42, -0.16], children: [l.jsx("boxGeometry", { args: [1.32, 0.46, 1.9] }), l.jsx("meshBasicMaterial", { color: V.cyan, transparent: true, opacity: 0.16, depthWrite: false, toneMapped: false })] }), [-1, 1].map((t) => l.jsxs("mesh", { position: [t, 0.06, 0.1], children: [l.jsx("boxGeometry", { args: [0.08, 0.12, 3.6] }), l.jsx("meshBasicMaterial", { color: V.cyan, transparent: true, opacity: 0.75, toneMapped: false })] }, t))] });
}
const Hl = 108, pn = 0.22, Nl = 52, zl = 92, kl = 1.6, Qt = 52, vn = 74, Ql = 168, jl = 2.9, Yl = 7, Wl = 10, Vl = 0.45, _l = 1.45, An = 0.9, Xl = 0.22, Kl = 0.85, Ts = 100, Zl = 33, Jl = 34, ql = 22, $l = 12, eu = 16, tu = 2.2, mn = 0.5, ru = 0.22, su = 14, nu = 0.35, iu = 7.5, au = 85, xn = 7.5, ou = 55, En = (e3, t) => Math.atan2(e3, t) + Math.PI, cu = 19, lu = 11, uu = 10.6, du = 5.2, hu = 4.8;
function fu(e3, t, r) {
  const s = Math.min(Math.abs(e3) / t, 1), n = pn + (1 - pn) * (1 - s * s);
  return (r ? Ql : Hl) * n;
}
function gu() {
  const { bloom: e3, aberration: t, vignette: r } = x.useMemo(() => ({ bloom: new Ac({ intensity: 1, luminanceThreshold: 0.82, luminanceSmoothing: 0.2, mipmapBlur: true, radius: 0.6, kernelSize: ns.LARGE }), aberration: new Ec({ offset: new Be(0, 0), radialModulation: false, modulationOffset: 0 }), vignette: new Lc({ offset: 0.3, darkness: 0.75 }) }), []), s = x.useMemo(() => ({ pace: 0, boost: 0 }), []);
  return Ge((n, a) => {
    const o = Math.min(Math.abs(B.speed) / Qt, 1.4), u = B.boosting ? 1 : 0, d = 1 - Math.pow(4e-3, a);
    s.pace = Ne.lerp(s.pace, o, d), s.boost = Ne.lerp(s.boost, u, d);
    const { pace: f, boost: m } = s, A = f * 8e-4 + m * 16e-4;
    t.offset.set(A, A * 0.6), r.darkness = 0.7 + f * 0.22 + m * 0.16, e3.intensity = 1.15 + f * 0.2 + m * 0.7;
  }), l.jsxs(l.Fragment, { children: [l.jsx("primitive", { object: e3 }), l.jsx("primitive", { object: t }), l.jsx("primitive", { object: r })] });
}
function pu({ zone: e3 }) {
  const [t, r] = e3.position, s = Zr((m) => m.activeZone === e3.id), n = Zr((m) => m.visited.includes(e3.id)), a = x.useRef(null), o = x.useRef(null), u = x.useRef(null), d = x.useMemo(() => Math.atan2(-t, -r), [t, r]), f = x.useMemo(() => Array.from({ length: 10 }).map((m, A) => {
    const E = A / 10 * Math.PI * 2 + Math.PI / 10;
    return [Math.cos(E) * (e3.radius + 4), Math.sin(E) * (e3.radius + 4)];
  }), [e3.radius]);
  return Ge(({ clock: m }) => {
    const A = m.elapsedTime;
    a.current && (a.current.position.y = 16 + Math.sin(A * 0.9) * 0.5, a.current.rotation.y = d + Math.sin(A * 0.4) * 0.05);
    const E = s ? 1.5 + Math.sin(A * 4) * 0.35 : 1;
    if (o.current) {
      const M = o.current.material;
      M.opacity = 0.1 * E + (n ? 0.05 : 0);
    }
    u.current && (u.current.intensity = 52 * E);
  }), l.jsxs(l.Fragment, { children: [l.jsxs(ct, { type: "fixed", colliders: false, position: [t, 0, r], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.05, 0], receiveShadow: true, children: [l.jsx("circleGeometry", { args: [e3.radius + 6, 56] }), l.jsx("meshStandardMaterial", { color: "#4a4688", roughness: 0.85 })] }), l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.07, 0], receiveShadow: true, children: [l.jsx("ringGeometry", { args: [e3.radius - 1.2, e3.radius, 56] }), l.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.glow, emissiveIntensity: s ? 2.6 : 1.7, toneMapped: false })] }), f.map(([m, A], E) => l.jsx(bs, { args: [3.5, 0.8], position: [m, 3.5, A] }, E))] }), l.jsxs("group", { position: [t, 0, r], children: [f.map(([m, A], E) => l.jsxs("group", { position: [m, 0, A], children: [l.jsxs("mesh", { castShadow: true, receiveShadow: true, position: [0, 3.4, 0], children: [l.jsx("boxGeometry", { args: [1.5, 6.8, 1.5] }), l.jsx("meshStandardMaterial", { color: "#37336b", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 7.2, 0], children: [l.jsx("octahedronGeometry", { args: [0.85, 0] }), l.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.color, emissiveIntensity: 3.2, toneMapped: false })] })] }, E)), l.jsxs("mesh", { ref: o, position: [0, 22, 0], children: [l.jsx("cylinderGeometry", { args: [e3.radius - 2, e3.radius + 1, 44, 24, 1, true] }), l.jsx("meshBasicMaterial", { color: e3.glow, transparent: true, opacity: 0.12, side: et, depthWrite: false, toneMapped: false })] }), l.jsx("pointLight", { ref: u, position: [0, 12, 0], color: e3.color, distance: 70, decay: 2 }), l.jsx("group", { ref: a, children: l.jsx(Tt, { size: 0.95, depth: 1.2, color: e3.glow, emissive: e3.color, emissiveIntensity: s ? 2.2 : 1.1, wave: 0.25, children: e3.sign }) })] })] });
}
function vu({ position: e3 }) {
  const t = x.useMemo(() => {
    const r = [];
    for (let s = 0; s < 4; s += 1) for (let n = 0; n <= s; n += 1) r.push([e3[0] + (n - s / 2) * 2.4, 1.4, e3[1] + s * 2.2 - 3]);
    return r;
  }, [e3]);
  return l.jsx(l.Fragment, { children: t.map((r, s) => l.jsx(Au, { position: r }, s)) });
}
function Au({ position: e3 }) {
  const t = x.useRef(null), r = x.useRef(new Ce(...e3));
  return Ge(() => {
    const s = t.current;
    if (!s) return;
    const n = s.translation(), a = n.x - r.current.x, o = n.z - r.current.z;
    (n.y < -6 || a * a + o * o > 40 * 40) && (s.setTranslation({ x: r.current.x, y: r.current.y + 6, z: r.current.z }, true), s.setLinvel({ x: 0, y: 0, z: 0 }, true), s.setAngvel({ x: 0, y: 0, z: 0 }, true));
  }), l.jsxs(ct, { ref: t, position: e3, colliders: false, mass: 0.4, restitution: 0.35, linearDamping: 0.4, angularDamping: 0.6, children: [l.jsx(Cr, { args: [0.45, 1.3, 0.45] }), l.jsxs("mesh", { castShadow: true, position: [0, -1.15, 0], children: [l.jsx("boxGeometry", { args: [1.1, 0.3, 1.1] }), l.jsx("meshStandardMaterial", { color: "#3a3468", roughness: 0.6, flatShading: true })] }), l.jsxs("mesh", { castShadow: true, position: [0, -0.5, 0], children: [l.jsx("cylinderGeometry", { args: [0.16, 0.24, 1, 6] }), l.jsx("meshStandardMaterial", { color: "#ffc861", metalness: 0.8, roughness: 0.25, flatShading: true })] }), l.jsxs("mesh", { castShadow: true, position: [0, 0.45, 0], children: [l.jsx("cylinderGeometry", { args: [0.62, 0.3, 1.2, 8] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ff9d2e", emissiveIntensity: 0.9, metalness: 0.85, roughness: 0.2, flatShading: true })] }), [-0.72, 0.72].map((s) => l.jsxs("mesh", { position: [s, 0.5, 0], rotation: [0, 0, s > 0 ? -0.5 : 0.5], children: [l.jsx("torusGeometry", { args: [0.3, 0.08, 6, 10, Math.PI] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", metalness: 0.85, roughness: 0.2 })] }, s))] });
}
function xs({ position: e3, rotation: t = 0 }) {
  return l.jsxs(ct, { type: "fixed", colliders: "hull", position: [e3[0], 0, e3[1]], rotation: [0, t, 0], children: [l.jsxs("mesh", { castShadow: true, receiveShadow: true, rotation: [-0.3, 0, 0], position: [0, 1.3, 0], children: [l.jsx("boxGeometry", { args: [9, 0.6, 12] }), l.jsx("meshStandardMaterial", { color: "#5b56a4", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 1.72, -5.4], rotation: [-0.3, 0, 0], children: [l.jsx("boxGeometry", { args: [9, 0.12, 1.2] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ffae3a", emissiveIntensity: 2.5, toneMapped: false })] })] });
}
function wn({ position: e3 }) {
  const t = x.useMemo(() => {
    const r = [];
    for (let s = 0; s < 3; s += 1) {
      const n = 3 - s;
      for (let a = 0; a < n; a += 1) r.push([e3[0] + (a - (n - 1) / 2) * 1.7, 0.85 + s * 1.6, e3[1]]);
    }
    return r;
  }, [e3]);
  return l.jsx(l.Fragment, { children: t.map((r, s) => l.jsxs(ct, { position: r, colliders: false, mass: 0.5, restitution: 0.2, children: [l.jsx(Cr, { args: [0.78, 0.78, 0.78] }), l.jsxs("mesh", { castShadow: true, receiveShadow: true, children: [l.jsx("boxGeometry", { args: [1.56, 1.56, 1.56] }), l.jsx("meshStandardMaterial", { color: "#6d5cc4", roughness: 0.65, flatShading: true })] }), l.jsxs("mesh", { children: [l.jsx("boxGeometry", { args: [1.62, 0.16, 1.62] }), l.jsx("meshStandardMaterial", { color: "#c3b4ff", emissive: "#8f7bff", emissiveIntensity: 1.4, toneMapped: false })] })] }, s)) });
}
const ys = { baseFov: 55 }, mu = 7.6, Mn = 6.8, xu = 4e-4, Eu = 0.35, Lt = Math.PI * 2, wu = () => ({ spin: 0, flip: 0, active: false });
function Mu(e3, t, r, s, n, a = true) {
  if (!t) return;
  if (s) {
    e3.active = true;
    const u = (r.spinRight ? 1 : 0) - (r.spinLeft ? 1 : 0), d = (r.flipForward ? 1 : 0) - (r.flipBack ? 1 : 0);
    e3.spin += u * mu * n, e3.flip += d * Mn * n, t.rotation.y = e3.spin, t.rotation.x += d * Mn * n, B.trickSpins = Math.floor(Math.abs(e3.spin) / Lt), B.trickFlips = Math.floor(Math.abs(e3.flip) / Lt), B.trickAngle = Math.abs(e3.spin) + Math.abs(e3.flip);
    return;
  }
  if (e3.active) {
    const u = Math.abs(e3.spin) / Lt, d = Math.abs(e3.flip) / Lt, f = Math.floor(u) + Math.floor(d), m = u % 1 + d % 1, E = Math.abs(Cn(t.rotation.y)) + Math.abs(Cn(t.rotation.x)) < Eu && a;
    a && (f > 0 || m > 0.25) && at.landTrickRotation(f, m, E), e3.spin = 0, e3.flip = 0, e3.active = false, B.trickSpins = 0, B.trickFlips = 0, B.trickAngle = 0;
  }
  const o = 1 - Math.pow(xu, n);
  t.rotation.y = Ne.lerp(t.rotation.y, 0, o), t.rotation.x = Ne.lerp(t.rotation.x, 0, o);
}
function Cn(e3) {
  return ((e3 + Math.PI) % Lt + Lt) % Lt - Math.PI;
}
const kr = [0, 1.6, 11], Cu = 3.4, Du = 7, Bu = 0.75, Su = 1.35, Iu = 0.42, Tu = 7.5, yu = 0.55, Ru = 0.55, bu = 0.5, Pu = 2.5, Dn = 5, Ou = 2.5, Fu = Gn - 2, We = new Ce(), dr = new Ce(), Ot = new Ce(), Fe = new Ce(), hr = new pt(), Es = new Ce(), ws = new Ce(), fe = new Ce(), Qr = new Ce(), Bn = new pt(), Mt = new Ce(), Uu = new Ce(0, hu, 0), Lu = new Ce(0, 1.2, 0), Ms = new Ce(), fr = new Ce();
function Gu(e3, { lateral: t, speed: r, delta: s }) {
  if (t > Cu && r > Du) {
    e3.held += s, e3.lapsed = 0;
    const a = Math.min(1 + Math.floor(e3.held), 8);
    e3.chain += t * r * 0.12 * a * s, B.driftMultiplier = a, B.driftAngle = Math.min(t / 12, 1), B.driftActive = true;
  } else e3.chain > 0 ? (e3.lapsed += s, B.driftAngle = Math.max(B.driftAngle - s * 2, 0), e3.lapsed >= Bu && (at.bankDrift(e3.chain), e3.chain = 0, e3.held = 0, e3.lapsed = 0, B.driftMultiplier = 1, B.driftActive = false)) : (B.driftActive = false, B.driftMultiplier = 1, B.driftAngle = Math.max(B.driftAngle - s * 2, 0));
  B.driftChain = e3.chain;
}
function Hu(e3, { grounded: t, yaw: r, delta: s, upright: n }) {
  if (!t) {
    let a = r - e3.lastYaw;
    a = (a + Math.PI) % (Math.PI * 2) - Math.PI, e3.spin += Math.abs(a), e3.lastYaw = r, e3.time += s, e3.airborne = true, B.airTime = e3.time, B.airSpin = e3.spin, B.airborne = e3.time > 0.2;
    return;
  }
  if (e3.airborne && e3.time >= Iu && n) {
    const a = Math.floor(e3.spin / (Math.PI * 2));
    at.landTrick(e3.time, a), B.boost = Math.min(Ts, B.boost + ql);
  }
  e3.airborne = false, e3.time = 0, e3.spin = 0, e3.lastYaw = r, B.airborne = false, B.airTime = 0, B.airSpin = 0;
}
function Nu({ onMove: e3 }) {
  const { world: t, rapier: r } = ha(), s = x.useRef({ airborne: false, time: 0, spin: 0, lastYaw: 0 }), n = x.useRef(Dn), a = x.useRef(0), o = x.useRef(0), u = x.useRef(null), d = x.useRef(null), f = fa(), m = Zr((G) => G.garage), A = ga[m.paint] ?? pa[0], E = x.useRef(A);
  E.current = A;
  const M = x.useRef(false), F = x.useRef(new Ce()), q = x.useRef({ chain: 0, held: 0, lapsed: 0 }), k = x.useRef(false), W = x.useRef(0), U = x.useRef(0), H = x.useRef(0), te = x.useRef(0), J = x.useRef(new Or(0, 0, 0, "YXZ")), K = x.useRef(wu()), oe = x.useRef(null), C = x.useRef(va()), b = x.useRef(false), Q = () => {
    const G = u.current;
    if (!G) return;
    if (Math.hypot(B.x, B.z) > 100 && B.y > 15) {
      const P = Xt(0.03), R = Xt(0.1), z = Math.atan2(R.x - P.x, R.z - P.z), j = new pt().setFromEuler(new Or(0, z + Math.PI, 0));
      G.setTranslation({ x: P.x, y: P.y + 1.2, z: P.z }, true), G.setRotation({ x: j.x, y: j.y, z: j.z, w: j.w }, true);
    } else G.setTranslation({ x: kr[0], y: kr[1], z: kr[2] }, true), G.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true);
    G.setLinvel({ x: 0, y: 0, z: 0 }, true), G.setAngvel({ x: 0, y: 0, z: 0 }, true);
  };
  return Ge((G, Z) => {
    var _a2;
    const P = u.current;
    if (!P) return;
    const R = Math.min(Z, 1 / 20), z = wa(), j = P.rotation();
    hr.set(j.x, j.y, j.z, j.w), We.set(0, 0, -1).applyQuaternion(hr), dr.set(1, 0, 0).applyQuaternion(hr);
    const we = P.linvel();
    Ot.set(we.x, we.y, we.z);
    const le = Ot.dot(We), Re = Ot.dot(dr), se = P.mass(), _e = P.translation();
    fe.set(_e.x, _e.y, _e.z);
    const pe = new r.Ray({ x: fe.x, y: fe.y, z: fe.z }, { x: 0, y: -1, z: 0 }), ue = t.castRay(pe, Su, true, void 0, void 0, void 0, P) !== null;
    Ms.set(0, 1, 0).applyQuaternion(hr), B.upright = Ms.y;
    const tt = Ms.y > Ru, ne = z.backward > 0 && le > kl, Se = ne ? 0 : z.forward - z.backward, rt = B.boost > $l || k.current && B.boost > 0, ft = ue && z.boost && Se > 0 && rt;
    k.current = ft, ft && (B.boost = Math.max(0, B.boost - Zl * R));
    const Zt = ft ? vn : Qt;
    if (ue) {
      if (ne) Fe.copy(We).multiplyScalar(-zl * se * R), P.applyImpulse(Fe, true);
      else if (Se !== 0 && Math.abs(le) < Zt) {
        const _ = Se > 0 ? fu(le, Zt, ft) : -Nl, ae = We.y, De = Se > 0 && ae > 0 ? ae * 30 : 0;
        Fe.copy(We).multiplyScalar((_ + De) * se * R), P.applyImpulse(Fe, true);
      }
    }
    if (ue) {
      const _ = z.brake ? An * Xl : An, ae = 1 - Math.pow(1 - _, R * 60);
      if (Fe.copy(dr).multiplyScalar(-Re * ae * se), P.applyImpulse(Fe, true), !z.brake && Math.abs(le) < Zt) {
        const De = Math.abs(Re) * ae * Kl * (le < 0 ? -1 : 1);
        Fe.copy(We).multiplyScalar(De * se), P.applyImpulse(Fe, true);
      }
    }
    if (ue && (Se === 0 || z.brake)) {
      const _ = z.brake ? Se > 0 ? 0.7 : 2.4 : 0.85;
      Fe.copy(We).multiplyScalar(-le * _ * se * R), P.applyImpulse(Fe, true);
    }
    const Jt = z.left - z.right, is = Jt === 0 ? Wl : Yl;
    a.current += (Jt - a.current) * (1 - Math.exp(-is * R));
    const Rt = a.current, Gt = Math.min(Math.abs(le) / 6, 1), Ir = 1 - (1 - Vl) * Math.min(Math.abs(le) / Qt, 1), as = Se !== 0 ? Math.max(Gt, 0.4) : Gt, os = le < -0.4 ? -1 : 1, cs = jl * (z.brake ? _l : 1), qt = P.angvel();
    if (ue) {
      fr.set(qt.x, qt.y, qt.z);
      const _ = 1 - Math.exp(-iu * R);
      fr.addScaledVector(dr, -fr.dot(dr) * _);
      const ae = P.linvel(), De = ma(fe.x, fe.y, fe.z, ae.x, ae.z);
      P.setAngvel({ x: fr.x, y: Rt * cs * as * Ir * os + De, z: fr.z }, true);
    }
    if (ue && fe.y > Fu ? n.current = 0 : n.current += R, n.current < Dn && fe.y < Ou && Math.hypot(fe.x, fe.z) > Fs + 3) {
      const { frame: _ } = xa(fe.x, fe.z), ae = new pt().setFromEuler(new Or(0, En(_.forward.x, _.forward.z), 0, "YXZ"));
      P.setRotation({ x: ae.x, y: ae.y, z: ae.z, w: ae.w }, true), P.setTranslation({ x: _.position.x, y: _.position.y + 1.6, z: _.position.z }, true);
      const De = Math.min(B.speed, 14);
      P.setLinvel({ x: _.forward.x * De, y: 0, z: _.forward.z * De }, true), P.setAngvel({ x: 0, y: 0, z: 0 }, true), n.current = 0, B.caught = performance.now();
    } else (z.reset || fe.y < -14) && Q();
    if (B.x = fe.x, B.y = fe.y, B.z = fe.z, B.heading = Math.atan2(We.x, We.z), B.speed = Math.abs(le), at.setSpeed(B.speed), e3 == null ? void 0 : e3(fe), Gu(q.current, { lateral: Math.abs(Re), speed: Math.abs(le), delta: R }), B.driftActive) {
      const _ = Math.min(Math.abs(Re) / 9, 1) * Jl * R;
      B.boost = Math.min(Ts, B.boost + _);
    }
    B.boosting = ft, B.raceRunning && Ma(R, fe.x, fe.y, fe.z, B.heading);
    const Tr = W.current - Math.abs(le);
    Tr > 7 && !ne && W.current > 9 && (at.registerImpact(), U.current = Math.min(1, U.current + Tr / 26)), W.current = Math.abs(le), U.current = Math.max(0, U.current - R * 2.6), Mu(K.current, oe.current, { spinLeft: z.spinLeft, spinRight: z.spinRight, flipForward: z.flipForward, flipBack: z.flipBack }, !ue, R, tt), Hu(s.current, { grounded: ue, yaw: B.heading, delta: R, upright: tt });
    const Ht = J.current.setFromQuaternion(hr, "YXZ").x;
    if (ue && Math.abs(Ht) > 0.02) {
      const _ = P.angvel();
      P.setAngvel({ x: -Ht * Tu - _.x * 0.6, y: _.y, z: _.z }, true);
    } else if (!ue && s.current.time > ru) {
      const _ = Math.asin(Ne.clamp(we.y / Math.max(Ot.length(), 4), -1, 1)), ae = Ne.clamp(_, -mn, mn), De = we.y < 0 ? 1 : 0.3, Xe = P.angvel();
      P.setAngvel({ x: (ae - Ht) * tu * De, y: Xe.y, z: Xe.z }, true);
    }
    if (!ue && we.y < 0 && (Fe.set(0, -su * se * R, 0), P.applyImpulse(Fe, true)), ue && b.current && we.y < -6 && P.setLinvel({ x: we.x, y: we.y * nu, z: we.z }, true), b.current = !ue, ue) for (const _ of C.current) {
      const ae = fe.x - _.x, De = fe.z - _.z;
      if (ae * ae + De * De < xn * xn) {
        const Xe = Math.max(0, 1 - Math.abs(le) / vn);
        Fe.copy(We).multiplyScalar(au * Xe * se * R), P.applyImpulse(Fe, true), B.boost = Math.min(Ts, B.boost + ou * R);
        break;
      }
    }
    ue && Math.abs(le) > 8 && (Fe.set(0, -eu * Math.min(Math.abs(le) / Qt, 1.4) * se * R, 0), P.applyImpulse(Fe, true));
    const yr = () => {
      let _ = We.x, ae = We.z;
      _ * _ + ae * ae < 0.02 && (_ = Ot.x, ae = Ot.z), _ * _ + ae * ae < 1e-4 && (_ = Math.sin(B.heading), ae = Math.cos(B.heading));
      const De = new pt().setFromEuler(new Or(0, En(_, ae), 0, "YXZ"));
      P.setRotation({ x: De.x, y: De.y, z: De.z, w: De.w }, true), P.setTranslation({ x: fe.x, y: fe.y + 1.2, z: fe.z }, true), P.setAngvel({ x: 0, y: 0, z: 0 }, true), P.setLinvel({ x: 0, y: 0, z: 0 }, true), te.current = 0, o.current = 0.6;
    };
    o.current = Math.max(0, o.current - R);
    const $t = Ot.length(), Rr = Math.abs(le) < 2 && Math.abs(Ht) > yu;
    if (z.recover && o.current === 0 && (!tt || Rr || $t < 8) ? yr() : (!tt || Rr) && $t < 3 ? (te.current += R, te.current > (tt ? bu + 1 : Pu) && yr()) : te.current = 0, d.current) {
      const _ = Ne.clamp(-Rt * Gt * 0.16, -0.2, 0.2), ae = Ne.clamp(-Se * 0.05, -0.08, 0.08), De = 1 - Math.pow(5e-4, R), Xe = 1 - Math.pow(2e-3, R);
      d.current.rotation.z = Ne.lerp(d.current.rotation.z, _, De), d.current.rotation.x = Ne.lerp(d.current.rotation.x, ae, Xe);
    }
    Ea(f.current, { speed: le, steer: Rt, throttle: Se, brake: z.brake, delta: R, paint: E.current, lateral: Math.abs(Re), vertical: we.y, braking: ne, boosting: ft });
    const bt = (_a2 = d.current) == null ? void 0 : _a2.parent;
    bt ? (bt.getWorldPosition(Qr), bt.getWorldQuaternion(Bn), Mt.set(0, 0, -1).applyQuaternion(Bn)) : (Qr.copy(fe), Mt.copy(We)), Mt.y = 0, Mt.lengthSq() < 4e-4 && Mt.set(Math.sin(B.heading), 0, Math.cos(B.heading)), Mt.normalize();
    const br = Math.min(Math.abs(le) / Qt, 1.35);
    Es.copy(Qr).addScaledVector(Mt, -uu - br * du).add(Uu);
    const Nt = G.camera, er = ys.baseFov + br * cu + (ft ? lu : 0);
    Math.abs(Nt.fov - er) > 0.01 && (Nt.fov = Ne.lerp(Nt.fov, er, 1 - Math.pow(0.02, R)), Nt.updateProjectionMatrix()), ws.copy(Qr).addScaledVector(Mt, ue ? 6 : 1.5).add(Lu), M.current ? (G.camera.position.lerp(Es, 1 - Math.pow(22e-4, R)), F.current.lerp(ws, 1 - Math.pow(6e-4, R))) : (G.camera.position.copy(Es), F.current.copy(ws), M.current = true);
    const zt = -Rt * Math.min(Math.abs(le) / Qt, 1) * 0.09;
    if (H.current = Ne.lerp(H.current, zt, 1 - Math.pow(0.02, R)), U.current > 1e-3) {
      const _ = U.current * U.current * 1.4;
      G.camera.position.x += (Math.random() - 0.5) * _, G.camera.position.y += (Math.random() - 0.5) * _, G.camera.position.z += (Math.random() - 0.5) * _;
    }
    G.camera.lookAt(F.current), G.camera.rotateZ(H.current);
  }), l.jsxs(ct, { ref: u, position: kr, colliders: false, mass: 1, friction: 0.6, restitution: 0.1, linearDamping: 0.35, angularDamping: 4, enabledRotations: [true, true, false], ccd: true, name: "player", children: [l.jsx(Cr, { args: [1, 0.5, 2.05], density: 2.6, friction: 0.15 }), l.jsx("group", { ref: d, children: l.jsx("group", { ref: oe, children: l.jsx(Aa, { rig: f, paint: A, design: m.design, wheel: m.wheel }) }) })] });
}
function Vu() {
  const e3 = x.useRef(null);
  x.useEffect(() => {
    at.hydrateGarage();
  }, []);
  const t = x.useCallback((r) => {
    let s = null;
    for (const n of Cs) {
      const [a, o] = n.position;
      if (Math.hypot(r.x - a, r.z - o) < n.radius + 9) {
        s = n.id;
        break;
      }
    }
    s !== e3.current && (e3.current && at.leaveZone(e3.current), s && at.enterZone(s), e3.current = s);
  }, []);
  return l.jsxs(l.Fragment, { children: [l.jsx(zu, {}), l.jsx("color", { attach: "background", args: [ir.fog] }), l.jsx("fogExp2", { attach: "fog", args: [ir.fog, 75e-4] }), l.jsx("hemisphereLight", { args: [ir.horizon, ir.ground, 0.72] }), l.jsx("ambientLight", { intensity: 0.28, color: "#6c5fbb" }), l.jsx("directionalLight", { position: [48, 70, 28], intensity: 1.35, color: ir.moon, castShadow: true, "shadow-mapSize": [1024, 1024], "shadow-camera-near": 1, "shadow-camera-far": 220, "shadow-camera-left": -90, "shadow-camera-right": 90, "shadow-camera-top": 90, "shadow-camera-bottom": -90, "shadow-bias": -6e-4 }), l.jsx(uo, { radius: 260, depth: 70, count: 4200, factor: 5, fade: true, speed: 0.6 }), l.jsx(oo, { preset: "night" }), l.jsx(ku, {}), l.jsx(Fl, {}), l.jsx(Ul, {}), l.jsxs(Ca, { timeStep: 1 / 60, interpolate: true, gravity: [0, -30, 0], children: [l.jsx(Da, {}), Cs.map((r) => l.jsx(pu, { zone: r }, r.id)), l.jsx(Qu, {}), l.jsx(wn, { position: [-15, 4] }), l.jsx(wn, { position: [15, 4] }), l.jsx(vu, { position: [-54, 54] }), l.jsx(xs, { position: [30, -44], rotation: 0 }), l.jsx(xs, { position: [56, 0], rotation: Math.PI / 2 }), l.jsx(xs, { position: [0, 50], rotation: Math.PI }), l.jsx(qc, {}), l.jsx(hl, {}), l.jsx(Nu, { onMove: t })] }), l.jsx(Ba, {}), l.jsx(yl, {}), l.jsx(Gl, {}), l.jsx(ju, {}), l.jsxs(Xc, { multisampling: 0, children: [l.jsx(gu, {}), l.jsx(Jc, {})] })] });
}
function zu() {
  const e3 = vt((r) => r.camera), t = vt((r) => r.size);
  return x.useEffect(() => {
    const r = t.width / t.height, s = Ne.degToRad(78), n = 2 * Math.atan(Math.tan(s / 2) / Math.max(r, 0.3));
    ys.baseFov = Ne.clamp(Ne.radToDeg(n), 45, 82), e3.fov = ys.baseFov, e3.updateProjectionMatrix();
  }, [e3, t]), null;
}
function ku() {
  return l.jsxs("group", { position: [130, 82, -170], children: [l.jsxs("mesh", { children: [l.jsx("sphereGeometry", { args: [16, 24, 24] }), l.jsx("meshBasicMaterial", { color: "#e8e6ff", toneMapped: false })] }), l.jsxs("mesh", { children: [l.jsx("sphereGeometry", { args: [22, 20, 20] }), l.jsx("meshBasicMaterial", { color: "#8f7bff", transparent: true, opacity: 0.16, depthWrite: false })] })] });
}
function Qu() {
  const e3 = x.useRef(null);
  return Ge(({ clock: t }) => {
    e3.current && (e3.current.position.y = 17 + Math.sin(t.elapsedTime * 0.7) * 0.6);
  }), l.jsxs("group", { children: [l.jsx("group", { ref: e3, position: [0, 17, -34], children: l.jsx(Tt, { size: 1.5, depth: 2.2, color: "#7fa4ff", emissive: "#2f5bff", emissiveIntensity: 1.5, wave: 0.35, children: Ii.short }) }), l.jsx(Tt, { position: [0, 8.4, -34], size: 0.44, depth: 0.4, color: "#e8e2ff", emissive: "#9d8bff", emissiveIntensity: 0.9, children: "DRIVE ANYWHERE" }), Cs.map((t) => {
    const [r, s] = t.position, n = Math.hypot(r, s), a = r / n, o = s / n;
    return l.jsx(Tt, { position: [a * 19, 0.35, o * 19], rotation: [-Math.PI / 2, 0, Math.atan2(-a, -o)], size: 0.42, depth: 0.5, color: t.glow, emissive: t.color, emissiveIntensity: 2.2, children: t.sign }, t.id);
  })] });
}
function ju() {
  const e3 = [[56, 80], [80, 56]];
  return l.jsx("group", { children: Ti.map((t, r) => l.jsxs("group", { position: [e3[r][0], 0, e3[r][1]], children: [l.jsxs("mesh", { position: [0, 9, 0], castShadow: true, children: [l.jsx("cylinderGeometry", { args: [0.8, 1.6, 18, 6] }), l.jsx("meshStandardMaterial", { color: "#38346d", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 19.5, 0], children: [l.jsx("icosahedronGeometry", { args: [2.3, 0] }), l.jsx("meshStandardMaterial", { color: t.color, emissive: t.color, emissiveIntensity: 4, toneMapped: false })] }), l.jsx("pointLight", { position: [0, 19.5, 0], color: t.color, intensity: 90, distance: 55, decay: 2 }), l.jsx(Tt, { position: [0, 25, 0], rotation: [0, Math.atan2(-e3[r][0], -e3[r][1]), 0], size: 0.46, depth: 0.5, color: "#ffffff", emissive: t.color, emissiveIntensity: 1.8, children: t.name })] }, t.id)) });
}
export {
  Vu as default
};
