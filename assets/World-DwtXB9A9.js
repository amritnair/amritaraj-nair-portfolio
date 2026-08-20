var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as B, j as a, e as Fn } from "./index-BZHWMZQE.js";
import { R as Kt, M as hr, I as Un, S as Oe, D as at, a as Ts, H as Le, F as Xe, b as Dt, L as Be, c as Yt, d as Ln, C as gt, e as cr, O as ys, P as Rs, W as Pe, U as lr, f as Gn, g as Hn, h as Wt, T as qe, i as Nn, j as zn, B as kn, k as Qn, l as Ke, m as jn, n as Yn, o as bs, p as ts, q as De, r as ar, V as ve, N as tt, u as ct, s as ur, t as Wn, E as Vn, v as Xn, w as Kn, x as Ye, y as Zn, z as Ps, _ as _n, A as rs, G as Tt, J as Jn, K as qn, Q as me, X as $n, Y as ei, Z as ti, $ as Lr, a0 as Os, a1 as pt, a2 as yt, a3 as ri, a4 as qt, a5 as si, a6 as k, a7 as Fs, a8 as ni, a9 as ii, aa as ss, ab as ai, ac as ns, ad as oi, ae as ci, af as is, ag as lt, ah as be, ai as et, aj as Ze, ak as Qe, al as vr, am as Q, an as as, ao as os, ap as li, aq as le, ar as St, as as br, at as ui, au as Us, av as $e, aw as di, ax as Ls, ay as hi, az as Pr, aA as Lt, aB as fi, aC as gi, aD as vi, aE as pi, aF as Ai } from "./GamePortfolio-GRm_kxZJ.js";
const Gs = parseInt(Kt.replace(/\D+/g, ""));
var ke = Uint8Array, vt = Uint16Array, Or = Uint32Array, Hs = new ke([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Ns = new ke([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), mi = new ke([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), zs = function(e3, t) {
  for (var r = new vt(31), s = 0; s < 31; ++s) r[s] = t += 1 << e3[s - 1];
  for (var i = new Or(r[30]), s = 1; s < 30; ++s) for (var c = r[s]; c < r[s + 1]; ++c) i[c] = c - r[s] << 5 | s;
  return [r, i];
}, ks = zs(Hs, 2), Qs = ks[0], xi = ks[1];
Qs[28] = 258, xi[258] = 28;
var Ei = zs(Ns, 0), wi = Ei[0], Fr = new vt(32768);
for (var he = 0; he < 32768; ++he) {
  var ht = (he & 43690) >>> 1 | (he & 21845) << 1;
  ht = (ht & 52428) >>> 2 | (ht & 13107) << 2, ht = (ht & 61680) >>> 4 | (ht & 3855) << 4, Fr[he] = ((ht & 65280) >>> 8 | (ht & 255) << 8) >>> 1;
}
var Qt = function(e3, t, r) {
  for (var s = e3.length, i = 0, c = new vt(t); i < s; ++i) ++c[e3[i] - 1];
  var l = new vt(t);
  for (i = 0; i < t; ++i) l[i] = l[i - 1] + c[i - 1] << 1;
  var d;
  if (r) {
    d = new vt(1 << t);
    var h = 15 - t;
    for (i = 0; i < s; ++i) if (e3[i]) for (var g = i << 4 | e3[i], w = t - e3[i], A = l[e3[i] - 1]++ << w, E = A | (1 << w) - 1; A <= E; ++A) d[Fr[A] >>> h] = g;
  } else for (d = new vt(s), i = 0; i < s; ++i) e3[i] && (d[i] = Fr[l[e3[i] - 1]++] >>> 15 - e3[i]);
  return d;
}, Zt = new ke(288);
for (var he = 0; he < 144; ++he) Zt[he] = 8;
for (var he = 144; he < 256; ++he) Zt[he] = 9;
for (var he = 256; he < 280; ++he) Zt[he] = 7;
for (var he = 280; he < 288; ++he) Zt[he] = 8;
var js = new ke(32);
for (var he = 0; he < 32; ++he) js[he] = 5;
var Ci = Qt(Zt, 9, 1), Di = Qt(js, 5, 1), pr = function(e3) {
  for (var t = e3[0], r = 1; r < e3.length; ++r) e3[r] > t && (t = e3[r]);
  return t;
}, Ve = function(e3, t, r) {
  var s = t / 8 | 0;
  return (e3[s] | e3[s + 1] << 8) >> (t & 7) & r;
}, Ar = function(e3, t) {
  var r = t / 8 | 0;
  return (e3[r] | e3[r + 1] << 8 | e3[r + 2] << 16) >> (t & 7);
}, Si = function(e3) {
  return (e3 / 8 | 0) + (e3 & 7 && 1);
}, Mi = function(e3, t, r) {
  (r == null || r > e3.length) && (r = e3.length);
  var s = new (e3 instanceof vt ? vt : e3 instanceof Or ? Or : ke)(r - t);
  return s.set(e3.subarray(t, r)), s;
}, Bi = function(e3, t, r) {
  var s = e3.length;
  if (!s || r && !r.l && s < 5) return t || new ke(0);
  var i = !t || r, c = !r || r.i;
  r || (r = {}), t || (t = new ke(s * 3));
  var l = function(ne) {
    var rt = t.length;
    if (ne > rt) {
      var st = new ke(Math.max(rt * 2, ne));
      st.set(t), t = st;
    }
  }, d = r.f || 0, h = r.p || 0, g = r.b || 0, w = r.l, A = r.d, E = r.m, C = r.n, b = s * 8;
  do {
    if (!w) {
      r.f = d = Ve(e3, h, 1);
      var z = Ve(e3, h + 1, 3);
      if (h += 3, z) if (z == 1) w = Ci, A = Di, E = 9, C = 5;
      else if (z == 2) {
        var L = Ve(e3, h, 31) + 257, q = Ve(e3, h + 10, 15) + 4, H = L + Ve(e3, h + 5, 31) + 1;
        h += 14;
        for (var W = new ke(H), te = new ke(19), x = 0; x < q; ++x) te[mi[x]] = Ve(e3, h + x * 3, 7);
        h += q * 3;
        for (var y = pr(te), G = (1 << y) - 1, K = Qt(te, y, 1), x = 0; x < H; ) {
          var j = K[Ve(e3, h, G)];
          h += j & 15;
          var N = j >>> 4;
          if (N < 16) W[x++] = N;
          else {
            var _ = 0, F = 0;
            for (N == 16 ? (F = 3 + Ve(e3, h, 3), h += 2, _ = W[x - 1]) : N == 17 ? (F = 3 + Ve(e3, h, 7), h += 3) : N == 18 && (F = 11 + Ve(e3, h, 127), h += 7); F--; ) W[x++] = _;
          }
        }
        var re = W.subarray(0, L), X = W.subarray(L);
        E = pr(re), C = pr(X), w = Qt(re, E, 1), A = Qt(X, C, 1);
      } else throw "invalid block type";
      else {
        var N = Si(h) + 4, V = e3[N - 4] | e3[N - 3] << 8, O = N + V;
        if (O > s) {
          if (c) throw "unexpected EOF";
          break;
        }
        i && l(g + V), t.set(e3.subarray(N, O), g), r.b = g += V, r.p = h = O * 8;
        continue;
      }
      if (h > b) {
        if (c) throw "unexpected EOF";
        break;
      }
    }
    i && l(g + 131072);
    for (var Fe = (1 << E) - 1, At = (1 << C) - 1, We = h; ; We = h) {
      var _ = w[Ar(e3, h) & Fe], ue = _ >>> 4;
      if (h += _ & 15, h > b) {
        if (c) throw "unexpected EOF";
        break;
      }
      if (!_) throw "invalid length/literal";
      if (ue < 256) t[g++] = ue;
      else if (ue == 256) {
        We = h, w = null;
        break;
      } else {
        var ut = ue - 254;
        if (ue > 264) {
          var x = ue - 257, fe = Hs[x];
          ut = Ve(e3, h, (1 << fe) - 1) + Qs[x], h += fe;
        }
        var Ce = A[Ar(e3, h) & At], _e = Ce >>> 4;
        if (!Ce) throw "invalid distance";
        h += Ce & 15;
        var X = wi[_e];
        if (_e > 3) {
          var fe = Ns[_e];
          X += Ar(e3, h) & (1 << fe) - 1, h += fe;
        }
        if (h > b) {
          if (c) throw "unexpected EOF";
          break;
        }
        i && l(g + 131072);
        for (var Rt = g + ut; g < Rt; g += 4) t[g] = t[g - X], t[g + 1] = t[g + 1 - X], t[g + 2] = t[g + 2 - X], t[g + 3] = t[g + 3 - X];
        g = Rt;
      }
    }
    r.l = w, r.p = We, r.b = g, w && (d = 1, r.m = E, r.d = A, r.n = C);
  } while (!d);
  return g == t.length ? t : Mi(t, 0, g);
}, Ii = new ke(0), Ti = function(e3) {
  if ((e3[0] & 15) != 8 || e3[0] >>> 4 > 7 || (e3[0] << 8 | e3[1]) % 31) throw "invalid zlib data";
  if (e3[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
function $t(e3, t) {
  return Bi((Ti(e3), e3.subarray(2, -4)), t);
}
var yi = typeof TextDecoder < "u" && new TextDecoder(), Ri = 0;
try {
  yi.decode(Ii, { stream: true }), Ri = 1;
} catch {
}
const bi = (e3) => e3 && e3.isCubeTexture;
class Pi extends hr {
  constructor(t, r) {
    var s, i;
    const c = bi(t), d = ((i = c ? (s = t.image[0]) == null ? void 0 : s.width : t.image.width) != null ? i : 1024) / 4, h = Math.floor(Math.log2(d)), g = Math.pow(2, h), w = 3 * Math.max(g, 16 * 7), A = 4 * g, E = [c ? "#define ENVMAP_TYPE_CUBE" : "", `#define CUBEUV_TEXEL_WIDTH ${1 / w}`, `#define CUBEUV_TEXEL_HEIGHT ${1 / A}`, `#define CUBEUV_MAX_MIP ${h}.0`], C = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `, b = E.join(`
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
            #include <${Gs >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, z = { map: { value: t }, height: { value: (r == null ? void 0 : r.height) || 15 }, radius: { value: (r == null ? void 0 : r.radius) || 100 } }, N = new Un(1, 16), V = new Oe({ uniforms: z, fragmentShader: b, vertexShader: C, side: at });
    super(N, V);
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
class Oi extends Ts {
  constructor(t) {
    super(t), this.type = Le;
  }
  parse(t) {
    const l = function(x, y) {
      switch (x) {
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
    }, w = `
`, A = function(x, y, G) {
      y = y || 1024;
      let j = x.pos, _ = -1, F = 0, re = "", X = String.fromCharCode.apply(null, new Uint16Array(x.subarray(j, j + 128)));
      for (; 0 > (_ = X.indexOf(w)) && F < y && j < x.byteLength; ) re += X, F += X.length, j += 128, X += String.fromCharCode.apply(null, new Uint16Array(x.subarray(j, j + 128)));
      return -1 < _ ? (x.pos += F + _ + 1, re + X.slice(0, _)) : false;
    }, E = function(x) {
      const y = /^#\?(\S+)/, G = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, K = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, j = /^\s*FORMAT=(\S+)\s*$/, _ = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, F = { valid: 0, string: "", comments: "", programtype: "RGBE", format: "", gamma: 1, exposure: 1, width: 0, height: 0 };
      let re, X;
      for ((x.pos >= x.byteLength || !(re = A(x))) && l(1, "no header found"), (X = re.match(y)) || l(3, "bad initial token"), F.valid |= 1, F.programtype = X[1], F.string += re + `
`; re = A(x), re !== false; ) {
        if (F.string += re + `
`, re.charAt(0) === "#") {
          F.comments += re + `
`;
          continue;
        }
        if ((X = re.match(G)) && (F.gamma = parseFloat(X[1])), (X = re.match(K)) && (F.exposure = parseFloat(X[1])), (X = re.match(j)) && (F.valid |= 2, F.format = X[1]), (X = re.match(_)) && (F.valid |= 4, F.height = parseInt(X[1], 10), F.width = parseInt(X[2], 10)), F.valid & 2 && F.valid & 4) break;
      }
      return F.valid & 2 || l(3, "missing format specifier"), F.valid & 4 || l(3, "missing image size specifier"), F;
    }, C = function(x, y, G) {
      const K = y;
      if (K < 8 || K > 32767 || x[0] !== 2 || x[1] !== 2 || x[2] & 128) return new Uint8Array(x);
      K !== (x[2] << 8 | x[3]) && l(3, "wrong scanline width");
      const j = new Uint8Array(4 * y * G);
      j.length || l(4, "unable to allocate buffer space");
      let _ = 0, F = 0;
      const re = 4 * K, X = new Uint8Array(4), Fe = new Uint8Array(re);
      let At = G;
      for (; At > 0 && F < x.byteLength; ) {
        F + 4 > x.byteLength && l(1), X[0] = x[F++], X[1] = x[F++], X[2] = x[F++], X[3] = x[F++], (X[0] != 2 || X[1] != 2 || (X[2] << 8 | X[3]) != K) && l(3, "bad rgbe scanline format");
        let We = 0, ue;
        for (; We < re && F < x.byteLength; ) {
          ue = x[F++];
          const fe = ue > 128;
          if (fe && (ue -= 128), (ue === 0 || We + ue > re) && l(3, "bad scanline data"), fe) {
            const Ce = x[F++];
            for (let _e = 0; _e < ue; _e++) Fe[We++] = Ce;
          } else Fe.set(x.subarray(F, F + ue), We), We += ue, F += ue;
        }
        const ut = K;
        for (let fe = 0; fe < ut; fe++) {
          let Ce = 0;
          j[_] = Fe[fe + Ce], Ce += K, j[_ + 1] = Fe[fe + Ce], Ce += K, j[_ + 2] = Fe[fe + Ce], Ce += K, j[_ + 3] = Fe[fe + Ce], _ += 4;
        }
        At--;
      }
      return j;
    }, b = function(x, y, G, K) {
      const j = x[y + 3], _ = Math.pow(2, j - 128) / 255;
      G[K + 0] = x[y + 0] * _, G[K + 1] = x[y + 1] * _, G[K + 2] = x[y + 2] * _, G[K + 3] = 1;
    }, z = function(x, y, G, K) {
      const j = x[y + 3], _ = Math.pow(2, j - 128) / 255;
      G[K + 0] = Dt.toHalfFloat(Math.min(x[y + 0] * _, 65504)), G[K + 1] = Dt.toHalfFloat(Math.min(x[y + 1] * _, 65504)), G[K + 2] = Dt.toHalfFloat(Math.min(x[y + 2] * _, 65504)), G[K + 3] = Dt.toHalfFloat(1);
    }, N = new Uint8Array(t);
    N.pos = 0;
    const V = E(N), O = V.width, L = V.height, q = C(N.subarray(N.pos), O, L);
    let H, W, te;
    switch (this.type) {
      case Xe:
        te = q.length / 4;
        const x = new Float32Array(te * 4);
        for (let G = 0; G < te; G++) b(q, G * 4, x, G * 4);
        H = x, W = Xe;
        break;
      case Le:
        te = q.length / 4;
        const y = new Uint16Array(te * 4);
        for (let G = 0; G < te; G++) z(q, G * 4, y, G * 4);
        H = y, W = Le;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return { width: O, height: L, data: H, header: V.string, gamma: V.gamma, exposure: V.exposure, type: W };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, s, i) {
    function c(l, d) {
      switch (l.type) {
        case Xe:
        case Le:
          "colorSpace" in l ? l.colorSpace = "srgb-linear" : l.encoding = 3e3, l.minFilter = Be, l.magFilter = Be, l.generateMipmaps = false, l.flipY = true;
          break;
      }
      r && r(l, d);
    }
    return super.load(t, c, s, i);
  }
}
const Gt = Gs >= 152;
class Fi extends Ts {
  constructor(t) {
    super(t), this.type = Le;
  }
  parse(t) {
    const y = Math.pow(2.7182818, 2.2);
    function G(n, o) {
      for (var u = 0, f = 0; f < 65536; ++f) (f == 0 || n[f >> 3] & 1 << (f & 7)) && (o[u++] = f);
      for (var v = u - 1; u < 65536; ) o[u++] = 0;
      return v;
    }
    function K(n) {
      for (var o = 0; o < 16384; o++) n[o] = {}, n[o].len = 0, n[o].lit = 0, n[o].p = null;
    }
    const j = { l: 0, c: 0, lc: 0 };
    function _(n, o, u, f, v) {
      for (; u < n; ) o = o << 8 | $r(f, v), u += 8;
      u -= n, j.l = o >> u & (1 << n) - 1, j.c = o, j.lc = u;
    }
    const F = new Array(59);
    function re(n) {
      for (var o = 0; o <= 58; ++o) F[o] = 0;
      for (var o = 0; o < 65537; ++o) F[n[o]] += 1;
      for (var u = 0, o = 58; o > 0; --o) {
        var f = u + F[o] >> 1;
        F[o] = u, u = f;
      }
      for (var o = 0; o < 65537; ++o) {
        var v = n[o];
        v > 0 && (n[o] = v | F[v]++ << 6);
      }
    }
    function X(n, o, u, f, v, p, D) {
      for (var m = u, I = 0, M = 0; v <= p; v++) {
        if (m.value - u.value > f) return false;
        _(6, I, M, n, m);
        var T = j.l;
        if (I = j.c, M = j.lc, D[v] = T, T == 63) {
          if (m.value - u.value > f) throw "Something wrong with hufUnpackEncTable";
          _(8, I, M, n, m);
          var S = j.l + 6;
          if (I = j.c, M = j.lc, v + S > p + 1) throw "Something wrong with hufUnpackEncTable";
          for (; S--; ) D[v++] = 0;
          v--;
        } else if (T >= 59) {
          var S = T - 59 + 2;
          if (v + S > p + 1) throw "Something wrong with hufUnpackEncTable";
          for (; S--; ) D[v++] = 0;
          v--;
        }
      }
      re(D);
    }
    function Fe(n) {
      return n & 63;
    }
    function At(n) {
      return n >> 6;
    }
    function We(n, o, u, f) {
      for (; o <= u; o++) {
        var v = At(n[o]), p = Fe(n[o]);
        if (v >> p) throw "Invalid table entry";
        if (p > 14) {
          var D = f[v >> p - 14];
          if (D.len) throw "Invalid table entry";
          if (D.lit++, D.p) {
            var m = D.p;
            D.p = new Array(D.lit);
            for (var I = 0; I < D.lit - 1; ++I) D.p[I] = m[I];
          } else D.p = new Array(1);
          D.p[D.lit - 1] = o;
        } else if (p) for (var M = 0, I = 1 << 14 - p; I > 0; I--) {
          var D = f[(v << 14 - p) + M];
          if (D.len || D.p) throw "Invalid table entry";
          D.len = p, D.lit = o, M++;
        }
      }
      return true;
    }
    const ue = { c: 0, lc: 0 };
    function ut(n, o, u, f) {
      n = n << 8 | $r(u, f), o += 8, ue.c = n, ue.lc = o;
    }
    const fe = { c: 0, lc: 0 };
    function Ce(n, o, u, f, v, p, D, m, I, M) {
      if (n == o) {
        f < 8 && (ut(u, f, v, D), u = ue.c, f = ue.lc), f -= 8;
        var T = u >> f, T = new Uint8Array([T])[0];
        if (I.value + T > M) return false;
        for (var S = m[I.value - 1]; T-- > 0; ) m[I.value++] = S;
      } else if (I.value < M) m[I.value++] = n;
      else return false;
      fe.c = u, fe.lc = f;
    }
    function _e(n) {
      return n & 65535;
    }
    function Rt(n) {
      var o = _e(n);
      return o > 32767 ? o - 65536 : o;
    }
    const ne = { a: 0, b: 0 };
    function rt(n, o) {
      var u = Rt(n), f = Rt(o), v = f, p = u + (v & 1) + (v >> 1), D = p, m = p - v;
      ne.a = D, ne.b = m;
    }
    function st(n, o) {
      var u = _e(n), f = _e(o), v = u - (f >> 1) & 65535, p = f + v - 32768 & 65535;
      ne.a = p, ne.b = v;
    }
    function sn(n, o, u, f, v, p, D) {
      for (var m = D < 16384, I = u > v ? v : u, M = 1, T; M <= I; ) M <<= 1;
      for (M >>= 1, T = M, M >>= 1; M >= 1; ) {
        for (var S = 0, pe = S + p * (v - T), P = p * M, U = p * T, Y = f * M, Z = f * T, ie, oe, xe, Te; S <= pe; S += U) {
          for (var ce = S, Je = S + f * (u - T); ce <= Je; ce += Z) {
            var de = ce + Y, Ee = ce + P, nt = Ee + Y;
            m ? (rt(n[ce + o], n[Ee + o]), ie = ne.a, xe = ne.b, rt(n[de + o], n[nt + o]), oe = ne.a, Te = ne.b, rt(ie, oe), n[ce + o] = ne.a, n[de + o] = ne.b, rt(xe, Te), n[Ee + o] = ne.a, n[nt + o] = ne.b) : (st(n[ce + o], n[Ee + o]), ie = ne.a, xe = ne.b, st(n[de + o], n[nt + o]), oe = ne.a, Te = ne.b, st(ie, oe), n[ce + o] = ne.a, n[de + o] = ne.b, st(xe, Te), n[Ee + o] = ne.a, n[nt + o] = ne.b);
          }
          if (u & M) {
            var Ee = ce + P;
            m ? rt(n[ce + o], n[Ee + o]) : st(n[ce + o], n[Ee + o]), ie = ne.a, n[Ee + o] = ne.b, n[ce + o] = ie;
          }
        }
        if (v & M) for (var ce = S, Je = S + f * (u - T); ce <= Je; ce += Z) {
          var de = ce + Y;
          m ? rt(n[ce + o], n[de + o]) : st(n[ce + o], n[de + o]), ie = ne.a, n[de + o] = ne.b, n[ce + o] = ie;
        }
        T = M, M >>= 1;
      }
      return S;
    }
    function nn(n, o, u, f, v, p, D, m, I, M) {
      for (var T = 0, S = 0, pe = m, P = Math.trunc(v.value + (p + 7) / 8); v.value < P; ) for (ut(T, S, u, v), T = ue.c, S = ue.lc; S >= 14; ) {
        var U = T >> S - 14 & 16383, Y = o[U];
        if (Y.len) S -= Y.len, Ce(Y.lit, D, T, S, u, f, v, I, M, pe), T = fe.c, S = fe.lc;
        else {
          if (!Y.p) throw "hufDecode issues";
          var Z;
          for (Z = 0; Z < Y.lit; Z++) {
            for (var ie = Fe(n[Y.p[Z]]); S < ie && v.value < P; ) ut(T, S, u, v), T = ue.c, S = ue.lc;
            if (S >= ie && At(n[Y.p[Z]]) == (T >> S - ie & (1 << ie) - 1)) {
              S -= ie, Ce(Y.p[Z], D, T, S, u, f, v, I, M, pe), T = fe.c, S = fe.lc;
              break;
            }
          }
          if (Z == Y.lit) throw "hufDecode issues";
        }
      }
      var oe = 8 - p & 7;
      for (T >>= oe, S -= oe; S > 0; ) {
        var Y = o[T << 14 - S & 16383];
        if (Y.len) S -= Y.len, Ce(Y.lit, D, T, S, u, f, v, I, M, pe), T = fe.c, S = fe.lc;
        else throw "hufDecode issues";
      }
      return true;
    }
    function Xr(n, o, u, f, v, p) {
      var D = { value: 0 }, m = u.value, I = Re(o, u), M = Re(o, u);
      u.value += 4;
      var T = Re(o, u);
      if (u.value += 4, I < 0 || I >= 65537 || M < 0 || M >= 65537) throw "Something wrong with HUF_ENCSIZE";
      var S = new Array(65537), pe = new Array(16384);
      K(pe);
      var P = f - (u.value - m);
      if (X(n, o, u, P, I, M, S), T > 8 * (f - (u.value - m))) throw "Something wrong with hufUncompress";
      We(S, I, M, pe), nn(S, pe, n, o, u, T, M, p, v, D);
    }
    function an(n, o, u) {
      for (var f = 0; f < u; ++f) o[f] = n[o[f]];
    }
    function Kr(n) {
      for (var o = 1; o < n.length; o++) {
        var u = n[o - 1] + n[o] - 128;
        n[o] = u;
      }
    }
    function Zr(n, o) {
      for (var u = 0, f = Math.floor((n.length + 1) / 2), v = 0, p = n.length - 1; !(v > p || (o[v++] = n[u++], v > p)); ) o[v++] = n[f++];
    }
    function _r(n) {
      for (var o = n.byteLength, u = new Array(), f = 0, v = new DataView(n); o > 0; ) {
        var p = v.getInt8(f++);
        if (p < 0) {
          var D = -p;
          o -= D + 1;
          for (var m = 0; m < D; m++) u.push(v.getUint8(f++));
        } else {
          var D = p;
          o -= 2;
          for (var I = v.getUint8(f++), m = 0; m < D + 1; m++) u.push(I);
        }
      }
      return u;
    }
    function on(n, o, u, f, v, p) {
      var de = new DataView(p.buffer), D = u[n.idx[0]].width, m = u[n.idx[0]].height, I = 3, M = Math.floor(D / 8), T = Math.ceil(D / 8), S = Math.ceil(m / 8), pe = D - (T - 1) * 8, P = m - (S - 1) * 8, U = { value: 0 }, Y = new Array(I), Z = new Array(I), ie = new Array(I), oe = new Array(I), xe = new Array(I);
      for (let ae = 0; ae < I; ++ae) xe[ae] = o[n.idx[ae]], Y[ae] = ae < 1 ? 0 : Y[ae - 1] + T * S, Z[ae] = new Float32Array(64), ie[ae] = new Uint16Array(64), oe[ae] = new Uint16Array(T * 64);
      for (let ae = 0; ae < S; ++ae) {
        var Te = 8;
        ae == S - 1 && (Te = P);
        var ce = 8;
        for (let ge = 0; ge < T; ++ge) {
          ge == T - 1 && (ce = pe);
          for (let se = 0; se < I; ++se) ie[se].fill(0), ie[se][0] = v[Y[se]++], cn(U, f, ie[se]), ln(ie[se], Z[se]), un(Z[se]);
          dn(Z);
          for (let se = 0; se < I; ++se) hn(Z[se], oe[se], ge * 64);
        }
        let Me = 0;
        for (let ge = 0; ge < I; ++ge) {
          const se = u[n.idx[ge]].type;
          for (let Ne = 8 * ae; Ne < 8 * ae + Te; ++Ne) {
            Me = xe[ge][Ne];
            for (let mt = 0; mt < M; ++mt) {
              const Ue = mt * 64 + (Ne & 7) * 8;
              de.setUint16(Me + 0 * 2 * se, oe[ge][Ue + 0], true), de.setUint16(Me + 1 * 2 * se, oe[ge][Ue + 1], true), de.setUint16(Me + 2 * 2 * se, oe[ge][Ue + 2], true), de.setUint16(Me + 3 * 2 * se, oe[ge][Ue + 3], true), de.setUint16(Me + 4 * 2 * se, oe[ge][Ue + 4], true), de.setUint16(Me + 5 * 2 * se, oe[ge][Ue + 5], true), de.setUint16(Me + 6 * 2 * se, oe[ge][Ue + 6], true), de.setUint16(Me + 7 * 2 * se, oe[ge][Ue + 7], true), Me += 8 * 2 * se;
            }
          }
          if (M != T) for (let Ne = 8 * ae; Ne < 8 * ae + Te; ++Ne) {
            const mt = xe[ge][Ne] + 8 * M * 2 * se, Ue = M * 64 + (Ne & 7) * 8;
            for (let dt = 0; dt < ce; ++dt) de.setUint16(mt + dt * 2 * se, oe[ge][Ue + dt], true);
          }
        }
      }
      for (var Je = new Uint16Array(D), de = new DataView(p.buffer), Ee = 0; Ee < I; ++Ee) {
        u[n.idx[Ee]].decoded = true;
        var nt = u[n.idx[Ee]].type;
        if (u[Ee].type == 2) for (var Ut = 0; Ut < m; ++Ut) {
          const ae = xe[Ee][Ut];
          for (var He = 0; He < D; ++He) Je[He] = de.getUint16(ae + He * 2 * nt, true);
          for (var He = 0; He < D; ++He) de.setFloat32(ae + He * 2 * nt, R(Je[He]), true);
        }
      }
    }
    function cn(n, o, u) {
      for (var f, v = 1; v < 64; ) f = o[n.value], f == 65280 ? v = 64 : f >> 8 == 255 ? v += f & 255 : (u[v] = f, v++), n.value++;
    }
    function ln(n, o) {
      o[0] = R(n[0]), o[1] = R(n[1]), o[2] = R(n[5]), o[3] = R(n[6]), o[4] = R(n[14]), o[5] = R(n[15]), o[6] = R(n[27]), o[7] = R(n[28]), o[8] = R(n[2]), o[9] = R(n[4]), o[10] = R(n[7]), o[11] = R(n[13]), o[12] = R(n[16]), o[13] = R(n[26]), o[14] = R(n[29]), o[15] = R(n[42]), o[16] = R(n[3]), o[17] = R(n[8]), o[18] = R(n[12]), o[19] = R(n[17]), o[20] = R(n[25]), o[21] = R(n[30]), o[22] = R(n[41]), o[23] = R(n[43]), o[24] = R(n[9]), o[25] = R(n[11]), o[26] = R(n[18]), o[27] = R(n[24]), o[28] = R(n[31]), o[29] = R(n[40]), o[30] = R(n[44]), o[31] = R(n[53]), o[32] = R(n[10]), o[33] = R(n[19]), o[34] = R(n[23]), o[35] = R(n[32]), o[36] = R(n[39]), o[37] = R(n[45]), o[38] = R(n[52]), o[39] = R(n[54]), o[40] = R(n[20]), o[41] = R(n[22]), o[42] = R(n[33]), o[43] = R(n[38]), o[44] = R(n[46]), o[45] = R(n[51]), o[46] = R(n[55]), o[47] = R(n[60]), o[48] = R(n[21]), o[49] = R(n[34]), o[50] = R(n[37]), o[51] = R(n[47]), o[52] = R(n[50]), o[53] = R(n[56]), o[54] = R(n[59]), o[55] = R(n[61]), o[56] = R(n[35]), o[57] = R(n[36]), o[58] = R(n[48]), o[59] = R(n[49]), o[60] = R(n[57]), o[61] = R(n[58]), o[62] = R(n[62]), o[63] = R(n[63]);
    }
    function un(n) {
      const o = 0.5 * Math.cos(0.7853975), u = 0.5 * Math.cos(3.14159 / 16), f = 0.5 * Math.cos(3.14159 / 8), v = 0.5 * Math.cos(3 * 3.14159 / 16), p = 0.5 * Math.cos(5 * 3.14159 / 16), D = 0.5 * Math.cos(3 * 3.14159 / 8), m = 0.5 * Math.cos(7 * 3.14159 / 16);
      for (var I = new Array(4), M = new Array(4), T = new Array(4), S = new Array(4), pe = 0; pe < 8; ++pe) {
        var P = pe * 8;
        I[0] = f * n[P + 2], I[1] = D * n[P + 2], I[2] = f * n[P + 6], I[3] = D * n[P + 6], M[0] = u * n[P + 1] + v * n[P + 3] + p * n[P + 5] + m * n[P + 7], M[1] = v * n[P + 1] - m * n[P + 3] - u * n[P + 5] - p * n[P + 7], M[2] = p * n[P + 1] - u * n[P + 3] + m * n[P + 5] + v * n[P + 7], M[3] = m * n[P + 1] - p * n[P + 3] + v * n[P + 5] - u * n[P + 7], T[0] = o * (n[P + 0] + n[P + 4]), T[3] = o * (n[P + 0] - n[P + 4]), T[1] = I[0] + I[3], T[2] = I[1] - I[2], S[0] = T[0] + T[1], S[1] = T[3] + T[2], S[2] = T[3] - T[2], S[3] = T[0] - T[1], n[P + 0] = S[0] + M[0], n[P + 1] = S[1] + M[1], n[P + 2] = S[2] + M[2], n[P + 3] = S[3] + M[3], n[P + 4] = S[3] - M[3], n[P + 5] = S[2] - M[2], n[P + 6] = S[1] - M[1], n[P + 7] = S[0] - M[0];
      }
      for (var U = 0; U < 8; ++U) I[0] = f * n[16 + U], I[1] = D * n[16 + U], I[2] = f * n[48 + U], I[3] = D * n[48 + U], M[0] = u * n[8 + U] + v * n[24 + U] + p * n[40 + U] + m * n[56 + U], M[1] = v * n[8 + U] - m * n[24 + U] - u * n[40 + U] - p * n[56 + U], M[2] = p * n[8 + U] - u * n[24 + U] + m * n[40 + U] + v * n[56 + U], M[3] = m * n[8 + U] - p * n[24 + U] + v * n[40 + U] - u * n[56 + U], T[0] = o * (n[U] + n[32 + U]), T[3] = o * (n[U] - n[32 + U]), T[1] = I[0] + I[3], T[2] = I[1] - I[2], S[0] = T[0] + T[1], S[1] = T[3] + T[2], S[2] = T[3] - T[2], S[3] = T[0] - T[1], n[0 + U] = S[0] + M[0], n[8 + U] = S[1] + M[1], n[16 + U] = S[2] + M[2], n[24 + U] = S[3] + M[3], n[32 + U] = S[3] - M[3], n[40 + U] = S[2] - M[2], n[48 + U] = S[1] - M[1], n[56 + U] = S[0] - M[0];
    }
    function dn(n) {
      for (var o = 0; o < 64; ++o) {
        var u = n[0][o], f = n[1][o], v = n[2][o];
        n[0][o] = u + 1.5747 * v, n[1][o] = u - 0.1873 * f - 0.4682 * v, n[2][o] = u + 1.8556 * f;
      }
    }
    function hn(n, o, u) {
      for (var f = 0; f < 64; ++f) o[u + f] = Dt.toHalfFloat(fn(n[f]));
    }
    function fn(n) {
      return n <= 1 ? Math.sign(n) * Math.pow(Math.abs(n), 2.2) : Math.sign(n) * Math.pow(y, Math.abs(n) - 1);
    }
    function Jr(n) {
      return new DataView(n.array.buffer, n.offset.value, n.size);
    }
    function gn(n) {
      var o = n.viewer.buffer.slice(n.offset.value, n.offset.value + n.size), u = new Uint8Array(_r(o)), f = new Uint8Array(u.length);
      return Kr(u), Zr(u, f), new DataView(f.buffer);
    }
    function gr(n) {
      var o = n.array.slice(n.offset.value, n.offset.value + n.size), u = $t(o), f = new Uint8Array(u.length);
      return Kr(u), Zr(u, f), new DataView(f.buffer);
    }
    function vn(n) {
      for (var o = n.viewer, u = { value: n.offset.value }, f = new Uint16Array(n.width * n.scanlineBlockSize * (n.channels * n.type)), v = new Uint8Array(8192), p = 0, D = new Array(n.channels), m = 0; m < n.channels; m++) D[m] = {}, D[m].start = p, D[m].end = D[m].start, D[m].nx = n.width, D[m].ny = n.lines, D[m].size = n.type, p += D[m].nx * D[m].ny * D[m].size;
      var I = Pt(o, u), M = Pt(o, u);
      if (M >= 8192) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (I <= M) for (var m = 0; m < M - I + 1; m++) v[m + I] = wt(o, u);
      var T = new Uint16Array(65536), S = G(v, T), pe = Re(o, u);
      Xr(n.array, o, u, pe, f, p);
      for (var m = 0; m < n.channels; ++m) for (var P = D[m], U = 0; U < D[m].size; ++U) sn(f, P.start + U, P.nx, P.size, P.ny, P.nx * P.size, S);
      an(T, f, p);
      for (var Y = 0, Z = new Uint8Array(f.buffer.byteLength), ie = 0; ie < n.lines; ie++) for (var oe = 0; oe < n.channels; oe++) {
        var P = D[oe], xe = P.nx * P.size, Te = new Uint8Array(f.buffer, P.end * 2, xe * 2);
        Z.set(Te, Y), Y += xe * 2, P.end += xe;
      }
      return new DataView(Z.buffer);
    }
    function pn(n) {
      var o = n.array.slice(n.offset.value, n.offset.value + n.size), u = $t(o);
      const f = n.lines * n.channels * n.width, v = n.type == 1 ? new Uint16Array(f) : new Uint32Array(f);
      let p = 0, D = 0;
      const m = new Array(4);
      for (let I = 0; I < n.lines; I++) for (let M = 0; M < n.channels; M++) {
        let T = 0;
        switch (n.type) {
          case 1:
            m[0] = p, m[1] = m[0] + n.width, p = m[1] + n.width;
            for (let S = 0; S < n.width; ++S) {
              const pe = u[m[0]++] << 8 | u[m[1]++];
              T += pe, v[D] = T, D++;
            }
            break;
          case 2:
            m[0] = p, m[1] = m[0] + n.width, m[2] = m[1] + n.width, p = m[2] + n.width;
            for (let S = 0; S < n.width; ++S) {
              const pe = u[m[0]++] << 24 | u[m[1]++] << 16 | u[m[2]++] << 8;
              T += pe, v[D] = T, D++;
            }
            break;
        }
      }
      return new DataView(v.buffer);
    }
    function qr(n) {
      var o = n.viewer, u = { value: n.offset.value }, f = new Uint8Array(n.width * n.lines * (n.channels * n.type * 2)), v = { version: Ge(o, u), unknownUncompressedSize: Ge(o, u), unknownCompressedSize: Ge(o, u), acCompressedSize: Ge(o, u), dcCompressedSize: Ge(o, u), rleCompressedSize: Ge(o, u), rleUncompressedSize: Ge(o, u), rleRawSize: Ge(o, u), totalAcUncompressedCount: Ge(o, u), totalDcUncompressedCount: Ge(o, u), acCompression: Ge(o, u) };
      if (v.version < 2) throw "EXRLoader.parse: " + Ft.compression + " version " + v.version + " is unsupported";
      for (var p = new Array(), D = Pt(o, u) - 2; D > 0; ) {
        var m = _t(o.buffer, u), I = wt(o, u), M = I >> 2 & 3, T = (I >> 4) - 1, S = new Int8Array([T])[0], pe = wt(o, u);
        p.push({ name: m, index: S, type: pe, compression: M }), D -= m.length + 3;
      }
      for (var P = Ft.channels, U = new Array(n.channels), Y = 0; Y < n.channels; ++Y) {
        var Z = U[Y] = {}, ie = P[Y];
        Z.name = ie.name, Z.compression = 0, Z.decoded = false, Z.type = ie.pixelType, Z.pLinear = ie.pLinear, Z.width = n.width, Z.height = n.lines;
      }
      for (var oe = { idx: new Array(3) }, xe = 0; xe < n.channels; ++xe) for (var Z = U[xe], Y = 0; Y < p.length; ++Y) {
        var Te = p[Y];
        Z.name == Te.name && (Z.compression = Te.compression, Te.index >= 0 && (oe.idx[Te.index] = xe), Z.offset = xe);
      }
      if (v.acCompressedSize > 0) switch (v.acCompression) {
        case 0:
          var de = new Uint16Array(v.totalAcUncompressedCount);
          Xr(n.array, o, u, v.acCompressedSize, de, v.totalAcUncompressedCount);
          break;
        case 1:
          var ce = n.array.slice(u.value, u.value + v.totalAcUncompressedCount), Je = $t(ce), de = new Uint16Array(Je.buffer);
          u.value += v.totalAcUncompressedCount;
          break;
      }
      if (v.dcCompressedSize > 0) {
        var Ee = { array: n.array, offset: u, size: v.dcCompressedSize }, nt = new Uint16Array(gr(Ee).buffer);
        u.value += v.dcCompressedSize;
      }
      if (v.rleRawSize > 0) {
        var ce = n.array.slice(u.value, u.value + v.rleCompressedSize), Je = $t(ce), Ut = _r(Je.buffer);
        u.value += v.rleCompressedSize;
      }
      for (var He = 0, ae = new Array(U.length), Y = 0; Y < ae.length; ++Y) ae[Y] = new Array();
      for (var Me = 0; Me < n.lines; ++Me) for (var ge = 0; ge < U.length; ++ge) ae[ge].push(He), He += U[ge].width * n.type * 2;
      on(oe, ae, U, de, nt, f);
      for (var Y = 0; Y < U.length; ++Y) {
        var Z = U[Y];
        if (!Z.decoded) switch (Z.compression) {
          case 2:
            for (var se = 0, Ne = 0, Me = 0; Me < n.lines; ++Me) {
              for (var mt = ae[Y][se], Ue = 0; Ue < Z.width; ++Ue) {
                for (var dt = 0; dt < 2 * Z.type; ++dt) f[mt++] = Ut[Ne + dt * Z.width * Z.height];
                Ne++;
              }
              se++;
            }
            break;
          case 1:
          default:
            throw "EXRLoader.parse: unsupported channel compression";
        }
      }
      return new DataView(f.buffer);
    }
    function _t(n, o) {
      for (var u = new Uint8Array(n), f = 0; u[o.value + f] != 0; ) f += 1;
      var v = new TextDecoder().decode(u.slice(o.value, o.value + f));
      return o.value = o.value + f + 1, v;
    }
    function An(n, o, u) {
      var f = new TextDecoder().decode(new Uint8Array(n).slice(o.value, o.value + u));
      return o.value = o.value + u, f;
    }
    function mn(n, o) {
      var u = bt(n, o), f = Re(n, o);
      return [u, f];
    }
    function xn(n, o) {
      var u = Re(n, o), f = Re(n, o);
      return [u, f];
    }
    function bt(n, o) {
      var u = n.getInt32(o.value, true);
      return o.value = o.value + 4, u;
    }
    function Re(n, o) {
      var u = n.getUint32(o.value, true);
      return o.value = o.value + 4, u;
    }
    function $r(n, o) {
      var u = n[o.value];
      return o.value = o.value + 1, u;
    }
    function wt(n, o) {
      var u = n.getUint8(o.value);
      return o.value = o.value + 1, u;
    }
    const Ge = function(n, o) {
      let u;
      return "getBigInt64" in DataView.prototype ? u = Number(n.getBigInt64(o.value, true)) : u = n.getUint32(o.value + 4, true) + Number(n.getUint32(o.value, true) << 32), o.value += 8, u;
    };
    function Se(n, o) {
      var u = n.getFloat32(o.value, true);
      return o.value += 4, u;
    }
    function En(n, o) {
      return Dt.toHalfFloat(Se(n, o));
    }
    function R(n) {
      var o = (n & 31744) >> 10, u = n & 1023;
      return (n >> 15 ? -1 : 1) * (o ? o === 31 ? u ? NaN : 1 / 0 : Math.pow(2, o - 15) * (1 + u / 1024) : 6103515625e-14 * (u / 1024));
    }
    function Pt(n, o) {
      var u = n.getUint16(o.value, true);
      return o.value += 2, u;
    }
    function wn(n, o) {
      return R(Pt(n, o));
    }
    function Cn(n, o, u, f) {
      for (var v = u.value, p = []; u.value < v + f - 1; ) {
        var D = _t(o, u), m = bt(n, u), I = wt(n, u);
        u.value += 3;
        var M = bt(n, u), T = bt(n, u);
        p.push({ name: D, pixelType: m, pLinear: I, xSampling: M, ySampling: T });
      }
      return u.value += 1, p;
    }
    function Dn(n, o) {
      var u = Se(n, o), f = Se(n, o), v = Se(n, o), p = Se(n, o), D = Se(n, o), m = Se(n, o), I = Se(n, o), M = Se(n, o);
      return { redX: u, redY: f, greenX: v, greenY: p, blueX: D, blueY: m, whiteX: I, whiteY: M };
    }
    function Sn(n, o) {
      var u = ["NO_COMPRESSION", "RLE_COMPRESSION", "ZIPS_COMPRESSION", "ZIP_COMPRESSION", "PIZ_COMPRESSION", "PXR24_COMPRESSION", "B44_COMPRESSION", "B44A_COMPRESSION", "DWAA_COMPRESSION", "DWAB_COMPRESSION"], f = wt(n, o);
      return u[f];
    }
    function Mn(n, o) {
      var u = Re(n, o), f = Re(n, o), v = Re(n, o), p = Re(n, o);
      return { xMin: u, yMin: f, xMax: v, yMax: p };
    }
    function Bn(n, o) {
      var u = ["INCREASING_Y"], f = wt(n, o);
      return u[f];
    }
    function In(n, o) {
      var u = Se(n, o), f = Se(n, o);
      return [u, f];
    }
    function Tn(n, o) {
      var u = Se(n, o), f = Se(n, o), v = Se(n, o);
      return [u, f, v];
    }
    function yn(n, o, u, f, v) {
      if (f === "string" || f === "stringvector" || f === "iccProfile") return An(o, u, v);
      if (f === "chlist") return Cn(n, o, u, v);
      if (f === "chromaticities") return Dn(n, u);
      if (f === "compression") return Sn(n, u);
      if (f === "box2i") return Mn(n, u);
      if (f === "lineOrder") return Bn(n, u);
      if (f === "float") return Se(n, u);
      if (f === "v2f") return In(n, u);
      if (f === "v3f") return Tn(n, u);
      if (f === "int") return bt(n, u);
      if (f === "rational") return mn(n, u);
      if (f === "timecode") return xn(n, u);
      if (f === "preview") return u.value += v, "skipped";
      u.value += v;
    }
    function Rn(n, o, u) {
      const f = {};
      if (n.getUint32(0, true) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      f.version = n.getUint8(4);
      const v = n.getUint8(5);
      f.spec = { singleTile: !!(v & 2), longName: !!(v & 4), deepFormat: !!(v & 8), multiPart: !!(v & 16) }, u.value = 8;
      for (var p = true; p; ) {
        var D = _t(o, u);
        if (D == 0) p = false;
        else {
          var m = _t(o, u), I = Re(n, u), M = yn(n, o, u, m, I);
          M === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${m}'.`) : f[D] = M;
        }
      }
      if (v & -5) throw console.error("EXRHeader:", f), "THREE.EXRLoader: provided file is currently unsupported.";
      return f;
    }
    function bn(n, o, u, f, v) {
      const p = { size: 0, viewer: o, array: u, offset: f, width: n.dataWindow.xMax - n.dataWindow.xMin + 1, height: n.dataWindow.yMax - n.dataWindow.yMin + 1, channels: n.channels.length, bytesPerLine: null, lines: null, inputSize: null, type: n.channels[0].pixelType, uncompress: null, getter: null, format: null, [Gt ? "colorSpace" : "encoding"]: null };
      switch (n.compression) {
        case "NO_COMPRESSION":
          p.lines = 1, p.uncompress = Jr;
          break;
        case "RLE_COMPRESSION":
          p.lines = 1, p.uncompress = gn;
          break;
        case "ZIPS_COMPRESSION":
          p.lines = 1, p.uncompress = gr;
          break;
        case "ZIP_COMPRESSION":
          p.lines = 16, p.uncompress = gr;
          break;
        case "PIZ_COMPRESSION":
          p.lines = 32, p.uncompress = vn;
          break;
        case "PXR24_COMPRESSION":
          p.lines = 16, p.uncompress = pn;
          break;
        case "DWAA_COMPRESSION":
          p.lines = 32, p.uncompress = qr;
          break;
        case "DWAB_COMPRESSION":
          p.lines = 256, p.uncompress = qr;
          break;
        default:
          throw "EXRLoader.parse: " + n.compression + " is unsupported";
      }
      if (p.scanlineBlockSize = p.lines, p.type == 1) switch (v) {
        case Xe:
          p.getter = wn, p.inputSize = 2;
          break;
        case Le:
          p.getter = Pt, p.inputSize = 2;
          break;
      }
      else if (p.type == 2) switch (v) {
        case Xe:
          p.getter = Se, p.inputSize = 4;
          break;
        case Le:
          p.getter = En, p.inputSize = 4;
      }
      else throw "EXRLoader.parse: unsupported pixelType " + p.type + " for " + n.compression + ".";
      p.blockCount = (n.dataWindow.yMax + 1) / p.scanlineBlockSize;
      for (var D = 0; D < p.blockCount; D++) Ge(o, f);
      p.outputChannels = p.channels == 3 ? 4 : p.channels;
      const m = p.width * p.height * p.outputChannels;
      switch (v) {
        case Xe:
          p.byteArray = new Float32Array(m), p.channels < p.outputChannels && p.byteArray.fill(1, 0, m);
          break;
        case Le:
          p.byteArray = new Uint16Array(m), p.channels < p.outputChannels && p.byteArray.fill(15360, 0, m);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", v);
          break;
      }
      return p.bytesPerLine = p.width * p.inputSize * p.channels, p.outputChannels == 4 ? p.format = Yt : p.format = Ln, Gt ? p.colorSpace = "srgb-linear" : p.encoding = 3e3, p;
    }
    const Jt = new DataView(t), Pn = new Uint8Array(t), Ot = { value: 0 }, Ft = Rn(Jt, t, Ot), $ = bn(Ft, Jt, Pn, Ot, this.type), es = { value: 0 }, On = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let n = 0; n < $.height / $.scanlineBlockSize; n++) {
      const o = Re(Jt, Ot);
      $.size = Re(Jt, Ot), $.lines = o + $.scanlineBlockSize > $.height ? $.height - o : $.scanlineBlockSize;
      const f = $.size < $.lines * $.bytesPerLine ? $.uncompress($) : Jr($);
      Ot.value += $.size;
      for (let v = 0; v < $.scanlineBlockSize; v++) {
        const p = v + n * $.scanlineBlockSize;
        if (p >= $.height) break;
        for (let D = 0; D < $.channels; D++) {
          const m = On[Ft.channels[D].name];
          for (let I = 0; I < $.width; I++) {
            es.value = (v * ($.channels * $.width) + D * $.width + I) * $.inputSize;
            const M = ($.height - 1 - p) * ($.width * $.outputChannels) + I * $.outputChannels + m;
            $.byteArray[M] = $.getter(f, es);
          }
        }
      }
    }
    return { header: Ft, width: $.width, height: $.height, data: $.byteArray, format: $.format, [Gt ? "colorSpace" : "encoding"]: $[Gt ? "colorSpace" : "encoding"], type: this.type };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, s, i) {
    function c(l, d) {
      Gt ? l.colorSpace = d.colorSpace : l.encoding = d.encoding, l.minFilter = Be, l.magFilter = Be, l.generateMipmaps = false, l.flipY = false, r && r(l, d);
    }
    return super.load(t, c, s, i);
  }
}
const Ui = () => parseInt(Kt.replace(/\D+/g, "")), Li = Ui(), Ys = (e3, t, r) => {
  let s;
  switch (e3) {
    case Ke:
      s = new Uint8ClampedArray(t * r * 4);
      break;
    case Le:
      s = new Uint16Array(t * r * 4);
      break;
    case Qn:
      s = new Uint32Array(t * r * 4);
      break;
    case kn:
      s = new Int8Array(t * r * 4);
      break;
    case zn:
      s = new Int16Array(t * r * 4);
      break;
    case Nn:
      s = new Int32Array(t * r * 4);
      break;
    case Xe:
      s = new Float32Array(t * r * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return s;
};
let er;
const Gi = (e3, t, r, s) => {
  if (er !== void 0) return er;
  const i = new Pe(1, 1, s);
  t.setRenderTarget(i);
  const c = new hr(new Rs(), new jn({ color: 16777215 }));
  t.render(c, r), t.setRenderTarget(null);
  const l = Ys(e3, i.width, i.height);
  return t.readRenderTargetPixels(i, 0, 0, i.width, i.height, l), i.dispose(), c.geometry.dispose(), c.material.dispose(), er = l[0] !== 0, er;
};
class Gr {
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
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o2, _p;
    this._width = t.width, this._height = t.height, this._type = t.type, this._colorSpace = t.colorSpace;
    const r = { format: Yt, depthBuffer: false, stencilBuffer: false, type: this._type, colorSpace: this._colorSpace, anisotropy: ((_a2 = t.renderTargetOptions) == null ? void 0 : _a2.anisotropy) !== void 0 ? (_b = t.renderTargetOptions) == null ? void 0 : _b.anisotropy : 1, generateMipmaps: ((_c = t.renderTargetOptions) == null ? void 0 : _c.generateMipmaps) !== void 0 ? (_d = t.renderTargetOptions) == null ? void 0 : _d.generateMipmaps : false, magFilter: ((_e = t.renderTargetOptions) == null ? void 0 : _e.magFilter) !== void 0 ? (_f = t.renderTargetOptions) == null ? void 0 : _f.magFilter : Be, minFilter: ((_g = t.renderTargetOptions) == null ? void 0 : _g.minFilter) !== void 0 ? (_h = t.renderTargetOptions) == null ? void 0 : _h.minFilter : Be, samples: ((_i2 = t.renderTargetOptions) == null ? void 0 : _i2.samples) !== void 0 ? (_j = t.renderTargetOptions) == null ? void 0 : _j.samples : void 0, wrapS: ((_k = t.renderTargetOptions) == null ? void 0 : _k.wrapS) !== void 0 ? (_l = t.renderTargetOptions) == null ? void 0 : _l.wrapS : gt, wrapT: ((_m = t.renderTargetOptions) == null ? void 0 : _m.wrapT) !== void 0 ? (_n2 = t.renderTargetOptions) == null ? void 0 : _n2.wrapT : gt };
    if (this._material = t.material, t.renderer ? this._renderer = t.renderer : (this._renderer = Gr.instantiateRenderer(), this._rendererIsDisposable = true), this._scene = new cr(), this._camera = new ys(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !Gi(this._type, this._renderer, this._camera, r)) {
      let s;
      switch (this._type) {
        case Le:
          s = this._renderer.extensions.has("EXT_color_buffer_float") ? Xe : void 0;
          break;
      }
      s !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${Xe}`), this._type = s) : (this._supportsReadPixels = false, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
    }
    this._quad = new hr(new Rs(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new Pe(this.width, this.height, r), this._renderTarget.texture.mapping = ((_o2 = t.renderTargetOptions) == null ? void 0 : _o2.mapping) !== void 0 ? (_p = t.renderTargetOptions) == null ? void 0 : _p.mapping : lr;
  }
  static instantiateRenderer() {
    const t = new Gn();
    return t.setSize(128, 128), t;
  }
  toArray() {
    if (!this._supportsReadPixels) throw new Error("Can't read pixels in this browser");
    const t = Ys(this._type, this._width, this._height);
    return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, t), t;
  }
  toDataTexture(t) {
    const r = new Hn(this.toArray(), this.width, this.height, Yt, this._type, (t == null ? void 0 : t.mapping) || lr, (t == null ? void 0 : t.wrapS) || gt, (t == null ? void 0 : t.wrapT) || gt, (t == null ? void 0 : t.magFilter) || Be, (t == null ? void 0 : t.minFilter) || Be, (t == null ? void 0 : t.anisotropy) || 1, Wt);
    return r.generateMipmaps = (t == null ? void 0 : t.generateMipmaps) !== void 0 ? t == null ? void 0 : t.generateMipmaps : false, r;
  }
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
  }
  dispose(t) {
    this.disposeOnDemandRenderer(), t && this.renderTarget.dispose(), this.material instanceof Oe && Object.values(this.material.uniforms).forEach((r) => {
      r.value instanceof qe && r.value.dispose();
    }), Object.values(this.material).forEach((r) => {
      r instanceof qe && r.dispose();
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
class Ws extends Error {
}
class Vs extends Error {
}
const Ht = (e3, t, r) => {
  const s = new RegExp(`${t}="([^"]*)"`, "i").exec(e3);
  if (s) return s[1];
  const i = new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i").exec(e3);
  if (i) {
    const c = i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return c && c.length === 3 ? c.map((l) => l.replace(/<\/?rdf:li>/g, "")) : i[1].trim();
  }
  if (r !== void 0) return r;
  throw new Error(`Can't find ${t} in gainmap metadata`);
}, Hi = (e3) => {
  let t;
  typeof TextDecoder < "u" ? t = new TextDecoder().decode(e3) : t = e3.toString();
  let r = t.indexOf("<x:xmpmeta");
  for (; r !== -1; ) {
    const s = t.indexOf("x:xmpmeta>", r), i = t.slice(r, s + 10);
    try {
      const c = Ht(i, "hdrgm:GainMapMin", "0"), l = Ht(i, "hdrgm:GainMapMax"), d = Ht(i, "hdrgm:Gamma", "1"), h = Ht(i, "hdrgm:OffsetSDR", "0.015625"), g = Ht(i, "hdrgm:OffsetHDR", "0.015625"), w = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(i), A = w ? w[1] : "0", E = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(i);
      if (!E) throw new Error("Incomplete gainmap metadata");
      const C = E[1];
      return { gainMapMin: Array.isArray(c) ? c.map((b) => parseFloat(b)) : [parseFloat(c), parseFloat(c), parseFloat(c)], gainMapMax: Array.isArray(l) ? l.map((b) => parseFloat(b)) : [parseFloat(l), parseFloat(l), parseFloat(l)], gamma: Array.isArray(d) ? d.map((b) => parseFloat(b)) : [parseFloat(d), parseFloat(d), parseFloat(d)], offsetSdr: Array.isArray(h) ? h.map((b) => parseFloat(b)) : [parseFloat(h), parseFloat(h), parseFloat(h)], offsetHdr: Array.isArray(g) ? g.map((b) => parseFloat(b)) : [parseFloat(g), parseFloat(g), parseFloat(g)], hdrCapacityMin: parseFloat(A), hdrCapacityMax: parseFloat(C) };
    } catch {
    }
    r = t.indexOf("<x:xmpmeta", s);
  }
};
class Ni {
  constructor(t) {
    __publicField(this, "options");
    this.options = { debug: t && t.debug !== void 0 ? t.debug : false, extractFII: t && t.extractFII !== void 0 ? t.extractFII : true, extractNonFII: t && t.extractNonFII !== void 0 ? t.extractNonFII : true };
  }
  extract(t) {
    return new Promise((r, s) => {
      const i = this.options.debug, c = new DataView(t.buffer);
      if (c.getUint16(0) !== 65496) {
        s(new Error("Not a valid jpeg"));
        return;
      }
      const l = c.byteLength;
      let d = 2, h = 0, g;
      for (; d < l; ) {
        if (++h > 250) {
          s(new Error(`Found no marker after ${h} loops \u{1F635}`));
          return;
        }
        if (c.getUint8(d) !== 255) {
          s(new Error(`Not a valid marker at offset 0x${d.toString(16)}, found: 0x${c.getUint8(d).toString(16)}`));
          return;
        }
        if (g = c.getUint8(d + 1), i && console.log(`Marker: ${g.toString(16)}`), g === 226) {
          i && console.log("Found APP2 marker (0xffe2)");
          const w = d + 4;
          if (c.getUint32(w) === 1297106432) {
            const A = w + 4;
            let E;
            if (c.getUint16(A) === 18761) E = false;
            else if (c.getUint16(A) === 19789) E = true;
            else {
              s(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (c.getUint16(A + 2, !E) !== 42) {
              s(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const C = c.getUint32(A + 4, !E);
            if (C < 8) {
              s(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const b = A + C, z = c.getUint16(b, !E), N = b + 2;
            let V = 0;
            for (let H = N; H < N + 12 * z; H += 12) c.getUint16(H, !E) === 45057 && (V = c.getUint32(H + 8, !E));
            const L = b + 2 + z * 12 + 4, q = [];
            for (let H = L; H < L + V * 16; H += 16) {
              const W = { MPType: c.getUint32(H, !E), size: c.getUint32(H + 4, !E), dataOffset: c.getUint32(H + 8, !E), dependantImages: c.getUint32(H + 12, !E), start: -1, end: -1, isFII: false };
              W.dataOffset ? (W.start = A + W.dataOffset, W.isFII = false) : (W.start = 0, W.isFII = true), W.end = W.start + W.size, q.push(W);
            }
            if (this.options.extractNonFII && q.length) {
              const H = new Blob([c]), W = [];
              for (const te of q) {
                if (te.isFII && !this.options.extractFII) continue;
                const x = H.slice(te.start, te.end + 1, "image/jpeg");
                W.push(x);
              }
              r(W);
            }
          }
        }
        d += 2 + c.getUint16(d + 2);
      }
    });
  }
}
const zi = async (e3) => {
  const t = Hi(e3);
  if (!t) throw new Vs("Gain map XMP metadata not found");
  const s = await new Ni({ extractFII: true, extractNonFII: true }).extract(e3);
  if (s.length !== 2) throw new Ws("Gain map recovery image not found");
  return { sdr: new Uint8Array(await s[0].arrayBuffer()), gainMap: new Uint8Array(await s[1].arrayBuffer()), metadata: t };
}, cs = (e3) => new Promise((t, r) => {
  const s = document.createElement("img");
  s.onload = () => {
    t(s);
  }, s.onerror = (i) => {
    r(i);
  }, s.src = URL.createObjectURL(e3);
});
class ki extends Yn {
  constructor(t, r) {
    super(r);
    __publicField(this, "_renderer");
    __publicField(this, "_renderTargetOptions");
    __publicField(this, "_internalLoadingManager");
    __publicField(this, "_config");
    this._config = t, t.renderer && (this._renderer = t.renderer), this._internalLoadingManager = new bs();
  }
  setRenderer(t) {
    return this._renderer = t, this;
  }
  setRenderTargetOptions(t) {
    return this._renderTargetOptions = t, this;
  }
  prepareQuadRenderer() {
    this._renderer || console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    const t = this._config.createMaterial({ gainMapMax: [1, 1, 1], gainMapMin: [0, 0, 0], gamma: [1, 1, 1], offsetHdr: [1, 1, 1], offsetSdr: [1, 1, 1], hdrCapacityMax: 1, hdrCapacityMin: 0, maxDisplayBoost: 1, gainMap: new qe(), sdr: new qe() });
    return this._config.createQuadRenderer({ width: 16, height: 16, type: Le, colorSpace: Wt, material: t, renderer: this._renderer, renderTargetOptions: this._renderTargetOptions });
  }
  async processImages(t, r, s) {
    const i = r ? new Blob([r], { type: "image/jpeg" }) : void 0, c = new Blob([t], { type: "image/jpeg" });
    let l, d, h = false;
    if (typeof createImageBitmap > "u") {
      const g = await Promise.all([i ? cs(i) : Promise.resolve(void 0), cs(c)]);
      d = g[0], l = g[1], h = s === "flipY";
    } else {
      const g = await Promise.all([i ? createImageBitmap(i, { imageOrientation: s || "flipY" }) : Promise.resolve(void 0), createImageBitmap(c, { imageOrientation: s || "flipY" })]);
      d = g[0], l = g[1];
    }
    return { sdrImage: l, gainMapImage: d, needsFlip: h };
  }
  createTextures(t, r, s) {
    const i = new qe(r || new ImageData(2, 2), lr, gt, gt, Be, ts, Yt, Ke, 1, Wt);
    i.flipY = s, i.needsUpdate = true;
    const c = new qe(t, lr, gt, gt, Be, ts, Yt, Ke, 1, De);
    return c.flipY = s, c.needsUpdate = true, { gainMap: i, sdr: c };
  }
  updateQuadRenderer(t, r, s, i, c) {
    t.width = r.width, t.height = r.height, t.material.gainMap = s, t.material.sdr = i, t.material.gainMapMin = c.gainMapMin, t.material.gainMapMax = c.gainMapMax, t.material.offsetHdr = c.offsetHdr, t.material.offsetSdr = c.offsetSdr, t.material.gamma = c.gamma, t.material.hdrCapacityMin = c.hdrCapacityMin, t.material.hdrCapacityMax = c.hdrCapacityMax, t.material.maxDisplayBoost = Math.pow(2, c.hdrCapacityMax), t.material.needsUpdate = true;
  }
}
const Qi = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, ji = `
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
class Yi extends Oe {
  constructor({ gamma: t, offsetHdr: r, offsetSdr: s, gainMapMin: i, gainMapMax: c, maxDisplayBoost: l, hdrCapacityMin: d, hdrCapacityMax: h, sdr: g, gainMap: w }) {
    super({ name: "GainMapDecoderMaterial", vertexShader: Qi, fragmentShader: ji, uniforms: { sdr: { value: g }, gainMap: { value: w }, gamma: { value: new ve(1 / t[0], 1 / t[1], 1 / t[2]) }, offsetHdr: { value: new ve().fromArray(r) }, offsetSdr: { value: new ve().fromArray(s) }, gainMapMin: { value: new ve().fromArray(i) }, gainMapMax: { value: new ve().fromArray(c) }, weightFactor: { value: (Math.log2(l) - d) / (h - d) } }, blending: tt, depthTest: false, depthWrite: false });
    __publicField(this, "_maxDisplayBoost");
    __publicField(this, "_hdrCapacityMin");
    __publicField(this, "_hdrCapacityMax");
    this._maxDisplayBoost = l, this._hdrCapacityMin = d, this._hdrCapacityMax = h, this.needsUpdate = true, this.uniformsNeedUpdate = true;
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
class Xs extends ki {
  constructor(t, r) {
    super({ renderer: t, createMaterial: (s) => new Yi(s), createQuadRenderer: (s) => new Gr(s) }, r);
  }
  async render(t, r, s, i) {
    const { sdrImage: c, gainMapImage: l, needsFlip: d } = await this.processImages(s, i, "flipY"), { gainMap: h, sdr: g } = this.createTextures(c, l, d);
    this.updateQuadRenderer(t, c, h, g, r), t.render();
  }
}
class Wi extends Xs {
  load([t, r, s], i, c, l) {
    const d = this.prepareQuadRenderer();
    let h, g, w;
    const A = async () => {
      if (h && g && w) {
        try {
          await this.render(d, w, h, g);
        } catch (y) {
          this.manager.itemError(t), this.manager.itemError(r), this.manager.itemError(s), typeof l == "function" && l(y), d.disposeOnDemandRenderer();
          return;
        }
        typeof i == "function" && i(d), this.manager.itemEnd(t), this.manager.itemEnd(r), this.manager.itemEnd(s), d.disposeOnDemandRenderer();
      }
    };
    let E = true, C = 0, b = 0, z = true, N = 0, V = 0, O = true, L = 0, q = 0;
    const H = () => {
      if (typeof c == "function") {
        const y = C + N + L, G = b + V + q, K = E && z && O;
        c(new ProgressEvent("progress", { lengthComputable: K, loaded: G, total: y }));
      }
    };
    this.manager.itemStart(t), this.manager.itemStart(r), this.manager.itemStart(s);
    const W = new ar(this._internalLoadingManager);
    W.setResponseType("arraybuffer"), W.setRequestHeader(this.requestHeader), W.setPath(this.path), W.setWithCredentials(this.withCredentials), W.load(t, async (y) => {
      if (typeof y == "string") throw new Error("Invalid sdr buffer");
      h = y, await A();
    }, (y) => {
      E = y.lengthComputable, b = y.loaded, C = y.total, H();
    }, (y) => {
      this.manager.itemError(t), typeof l == "function" && l(y);
    });
    const te = new ar(this._internalLoadingManager);
    te.setResponseType("arraybuffer"), te.setRequestHeader(this.requestHeader), te.setPath(this.path), te.setWithCredentials(this.withCredentials), te.load(r, async (y) => {
      if (typeof y == "string") throw new Error("Invalid gainmap buffer");
      g = y, await A();
    }, (y) => {
      z = y.lengthComputable, V = y.loaded, N = y.total, H();
    }, (y) => {
      this.manager.itemError(r), typeof l == "function" && l(y);
    });
    const x = new ar(this._internalLoadingManager);
    return x.setRequestHeader(this.requestHeader), x.setPath(this.path), x.setWithCredentials(this.withCredentials), x.load(s, async (y) => {
      if (typeof y != "string") throw new Error("Invalid metadata string");
      w = JSON.parse(y), await A();
    }, (y) => {
      O = y.lengthComputable, q = y.loaded, L = y.total, H();
    }, (y) => {
      this.manager.itemError(s), typeof l == "function" && l(y);
    }), d;
  }
}
class Vi extends Xs {
  load(t, r, s, i) {
    const c = this.prepareQuadRenderer(), l = new ar(this._internalLoadingManager);
    return l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setPath(this.path), l.setWithCredentials(this.withCredentials), this.manager.itemStart(t), l.load(t, async (d) => {
      if (typeof d == "string") throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const h = new Uint8Array(d);
      let g, w, A;
      try {
        const E = await zi(h);
        g = E.sdr, w = E.gainMap, A = E.metadata;
      } catch (E) {
        if (E instanceof Vs || E instanceof Ws) console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), A = { gainMapMin: [0, 0, 0], gainMapMax: [1, 1, 1], gamma: [1, 1, 1], hdrCapacityMin: 0, hdrCapacityMax: 1, offsetHdr: [0, 0, 0], offsetSdr: [0, 0, 0] }, g = h;
        else throw E;
      }
      try {
        await this.render(c, A, g.buffer, w == null ? void 0 : w.buffer);
      } catch (E) {
        this.manager.itemError(t), typeof i == "function" && i(E), c.disposeOnDemandRenderer();
        return;
      }
      typeof r == "function" && r(c), this.manager.itemEnd(t), c.disposeOnDemandRenderer();
    }, s, (d) => {
      this.manager.itemError(t), typeof i == "function" && i(d);
    }), c;
  }
}
const Vt = { apartment: "lebombo_1k.hdr", city: "potsdamer_platz_1k.hdr", dawn: "kiara_1_dawn_1k.hdr", forest: "forest_slope_1k.hdr", lobby: "st_fagans_interior_1k.hdr", night: "dikhololo_night_1k.hdr", park: "rooitou_park_1k.hdr", studio: "studio_small_03_1k.hdr", sunset: "venice_sunset_1k.hdr", warehouse: "empty_warehouse_01_1k.hdr" }, Ks = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", Mt = (e3) => Array.isArray(e3), Hr = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function fr({ files: e3 = Hr, path: t = "", preset: r = void 0, colorSpace: s = void 0, extensions: i } = {}) {
  r && (Nr(r), e3 = Vt[r], t = Ks);
  const c = Mt(e3), { extension: l, isCubemap: d } = zr(e3), h = kr(l);
  if (!h) throw new Error("useEnvironment: Unrecognized file extension: " + e3);
  const g = ct((C) => C.gl);
  B.useLayoutEffect(() => {
    if (l !== "webp" && l !== "jpg" && l !== "jpeg") return;
    function C() {
      ur.clear(h, c ? [e3] : e3);
    }
    g.domElement.addEventListener("webglcontextlost", C, { once: true });
  }, [e3, g.domElement]);
  const w = ur(h, c ? [e3] : e3, (C) => {
    (l === "webp" || l === "jpg" || l === "jpeg") && C.setRenderer(g), C.setPath == null || C.setPath(t), i && i(C);
  });
  let A = c ? w[0] : w;
  if (l === "jpg" || l === "jpeg" || l === "webp") {
    var E;
    A = (E = A.renderTarget) == null ? void 0 : E.texture;
  }
  return A.mapping = d ? Wn : Vn, A.colorSpace = s ?? (d ? "srgb" : "srgb-linear"), A;
}
const Xi = { files: Hr, path: "", preset: void 0, extensions: void 0 };
fr.preload = (e3) => {
  const t = { ...Xi, ...e3 };
  let { files: r, path: s = "" } = t;
  const { preset: i, extensions: c } = t;
  i && (Nr(i), r = Vt[i], s = Ks);
  const { extension: l } = zr(r);
  if (l === "webp" || l === "jpg" || l === "jpeg") throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const d = kr(l);
  if (!d) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  ur.preload(d, Mt(r) ? [r] : r, (h) => {
    h.setPath == null || h.setPath(s), c && c(h);
  });
};
const Ki = { files: Hr, preset: void 0 };
fr.clear = (e3) => {
  const t = { ...Ki, ...e3 };
  let { files: r } = t;
  const { preset: s } = t;
  s && (Nr(s), r = Vt[s]);
  const { extension: i } = zr(r), c = kr(i);
  if (!c) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  ur.clear(c, Mt(r) ? [r] : r);
};
function Nr(e3) {
  if (!(e3 in Vt)) throw new Error("Preset must be one of: " + Object.keys(Vt).join(", "));
}
function zr(e3) {
  var t;
  const r = Mt(e3) && e3.length === 6, s = Mt(e3) && e3.length === 3 && e3.some((l) => l.endsWith("json")), i = Mt(e3) ? e3[0] : e3;
  return { extension: r ? "cube" : s ? "webp" : i.startsWith("data:application/exr") ? "exr" : i.startsWith("data:application/hdr") ? "hdr" : i.startsWith("data:image/jpeg") ? "jpg" : (t = i.split(".").pop()) == null || (t = t.split("?")) == null || (t = t.shift()) == null ? void 0 : t.toLowerCase(), isCubemap: r, isGainmap: s };
}
function kr(e3) {
  return e3 === "cube" ? Xn : e3 === "hdr" ? Oi : e3 === "exr" ? Fi : e3 === "jpg" || e3 === "jpeg" ? Vi : e3 === "webp" ? Wi : null;
}
const Zi = (e3) => e3.current && e3.current.isScene, _i = (e3) => Zi(e3) ? e3.current : e3;
function Qr(e3, t, r, s, i = {}) {
  var c, l, d, h;
  i = { backgroundBlurriness: 0, backgroundIntensity: 1, backgroundRotation: [0, 0, 0], environmentIntensity: 1, environmentRotation: [0, 0, 0], ...i };
  const g = _i(t || r), w = g.background, A = g.environment, E = { backgroundBlurriness: g.backgroundBlurriness, backgroundIntensity: g.backgroundIntensity, backgroundRotation: (c = (l = g.backgroundRotation) == null || l.clone == null ? void 0 : l.clone()) !== null && c !== void 0 ? c : [0, 0, 0], environmentIntensity: g.environmentIntensity, environmentRotation: (d = (h = g.environmentRotation) == null || h.clone == null ? void 0 : h.clone()) !== null && d !== void 0 ? d : [0, 0, 0] };
  return e3 !== "only" && (g.environment = s), e3 && (g.background = s), rs(g, i), () => {
    e3 !== "only" && (g.environment = A), e3 && (g.background = w), rs(g, E);
  };
}
function jr({ scene: e3, background: t = false, map: r, ...s }) {
  const i = ct((c) => c.scene);
  return B.useLayoutEffect(() => {
    if (r) return Qr(t, e3, i, r, s);
  }), null;
}
function Zs({ background: e3 = false, scene: t, blur: r, backgroundBlurriness: s, backgroundIntensity: i, backgroundRotation: c, environmentIntensity: l, environmentRotation: d, ...h }) {
  const g = fr(h), w = ct((A) => A.scene);
  return B.useLayoutEffect(() => Qr(e3, t, w, g, { backgroundBlurriness: r ?? s, backgroundIntensity: i, backgroundRotation: c, environmentIntensity: l, environmentRotation: d })), B.useEffect(() => () => {
    g.dispose();
  }, [g]), null;
}
function Ji({ children: e3, near: t = 0.1, far: r = 1e3, resolution: s = 256, frames: i = 1, map: c, background: l = false, blur: d, backgroundBlurriness: h, backgroundIntensity: g, backgroundRotation: w, environmentIntensity: A, environmentRotation: E, scene: C, files: b, path: z, preset: N = void 0, extensions: V }) {
  const O = ct((x) => x.gl), L = ct((x) => x.scene), q = B.useRef(null), [H] = B.useState(() => new cr()), W = B.useMemo(() => {
    const x = new Kn(s);
    return x.texture.type = Le, x;
  }, [s]);
  B.useEffect(() => () => {
    W.dispose();
  }, [W]), B.useLayoutEffect(() => {
    if (i === 1) {
      const x = O.autoClear;
      O.autoClear = true, q.current.update(O, H), O.autoClear = x;
    }
    return Qr(l, C, L, W.texture, { backgroundBlurriness: d ?? h, backgroundIntensity: g, backgroundRotation: w, environmentIntensity: A, environmentRotation: E });
  }, [e3, H, W.texture, C, L, l, i, O]);
  let te = 1;
  return Ye(() => {
    if (i === 1 / 0 || te < i) {
      const x = O.autoClear;
      O.autoClear = true, q.current.update(O, H), O.autoClear = x, te++;
    }
  }), B.createElement(B.Fragment, null, Zn(B.createElement(B.Fragment, null, e3, B.createElement("cubeCamera", { ref: q, args: [t, r, W] }), b || N ? B.createElement(Zs, { background: true, files: b, preset: N, path: z, extensions: V }) : c ? B.createElement(jr, { background: true, map: c, extensions: V }) : null), H));
}
function qi(e3) {
  var t, r, s, i;
  const c = fr(e3), l = e3.map || c;
  B.useMemo(() => Ps({ GroundProjectedEnvImpl: Pi }), []), B.useEffect(() => () => {
    c.dispose();
  }, [c]);
  const d = B.useMemo(() => [l], [l]), h = (t = e3.ground) == null ? void 0 : t.height, g = (r = e3.ground) == null ? void 0 : r.radius, w = (s = (i = e3.ground) == null ? void 0 : i.scale) !== null && s !== void 0 ? s : 1e3;
  return B.createElement(B.Fragment, null, B.createElement(jr, _n({}, e3, { map: l })), B.createElement("groundProjectedEnvImpl", { args: d, scale: w, height: h, radius: g }));
}
function $i(e3) {
  return e3.ground ? B.createElement(qi, e3) : e3.map ? B.createElement(jr, e3) : e3.children ? B.createElement(Ji, e3) : B.createElement(Zs, e3);
}
class ea extends Oe {
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
	      #include <${Li >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
      }` });
  }
}
const ta = (e3) => new ve().setFromSpherical(new qn(e3, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI)), ra = B.forwardRef(({ radius: e3 = 100, depth: t = 50, count: r = 5e3, saturation: s = 0, factor: i = 4, fade: c = false, speed: l = 1 }, d) => {
  const h = B.useRef(null), [g, w, A] = B.useMemo(() => {
    const C = [], b = [], z = Array.from({ length: r }, () => (0.5 + 0.5 * Math.random()) * i), N = new Tt();
    let V = e3 + t;
    const O = t / r;
    for (let L = 0; L < r; L++) V -= O * Math.random(), C.push(...ta(V).toArray()), N.setHSL(L / r, s, 0.9), b.push(N.r, N.g, N.b);
    return [new Float32Array(C), new Float32Array(b), new Float32Array(z)];
  }, [r, t, i, e3, s]);
  Ye((C) => h.current && (h.current.uniforms.time.value = C.clock.elapsedTime * l));
  const [E] = B.useState(() => new ea());
  return B.createElement("points", { ref: d }, B.createElement("bufferGeometry", null, B.createElement("bufferAttribute", { attach: "attributes-position", args: [g, 3] }), B.createElement("bufferAttribute", { attach: "attributes-color", args: [w, 3] }), B.createElement("bufferAttribute", { attach: "attributes-size", args: [A, 1] })), B.createElement("primitive", { ref: h, object: E, attach: "material", blending: Jn, "uniforms-fade-value": c, depthWrite: false, transparent: true, vertexColors: true }));
});
/**
* postprocessing v6.39.1 build Fri Apr 17 2026
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2026 Raoul van Rüschen
* @license Zlib
*/
var sa = (() => {
  const e3 = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), t = new Float32Array([0, 0, 2, 0, 0, 2]), r = new ii();
  return r.setAttribute("position", new ss(e3, 3)), r.setAttribute("uv", new ss(t, 2)), r;
})(), ye = class Ur {
  static get fullscreenGeometry() {
    return sa;
  }
  constructor(t = "Pass", r = new cr(), s = new ys()) {
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
    r !== null ? r.material = t : (r = new hr(Ur.fullscreenGeometry, t), r.frustumCulled = false, this.scene === null && (this.scene = new cr()), this.scene.add(r), this.screen = r);
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
  setDepthTexture(t, r = pt) {
  }
  render(t, r, s, i, c) {
    throw new Error("Render method not implemented!");
  }
  setSize(t, r) {
  }
  initialize(t, r, s) {
  }
  dispose() {
    for (const t of Object.keys(this)) {
      const r = this[t];
      (r instanceof Pe || r instanceof Fs || r instanceof qe || r instanceof Ur) && this[t].dispose();
    }
    this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
  }
}, na = class extends ye {
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = false;
  }
  render(e3, t, r, s, i) {
    const c = e3.state.buffers.stencil;
    c.setLocked(false), c.setTest(false);
  }
}, ia = `#ifdef COLOR_WRITE
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
}`, _s = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", Js = class extends Oe {
  constructor() {
    super({ name: "CopyMaterial", defines: { COLOR_SPACE_CONVERSION: "1", DEPTH_PACKING: "0", COLOR_WRITE: "1" }, uniforms: { inputBuffer: new k(null), depthBuffer: new k(null), channelWeights: new k(null), opacity: new k(1) }, blending: tt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: ia, vertexShader: _s }), this.depthFunc = ai;
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
}, aa = class extends ye {
  constructor(e3, t = true) {
    super("CopyPass"), this.fullscreenMaterial = new Js(), this.needsSwap = false, this.renderTarget = e3, e3 === void 0 && (this.renderTarget = new Pe(1, 1, { minFilter: Be, magFilter: Be, stencilBuffer: false, depthBuffer: false }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = t;
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
  render(e3, t, r, s, i) {
    this.fullscreenMaterial.inputBuffer = t.texture, e3.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e3.render(this.scene, this.camera);
  }
  setSize(e3, t) {
    this.autoResize && this.renderTarget.setSize(e3, t);
  }
  initialize(e3, t, r) {
    r !== void 0 && (this.renderTarget.texture.type = r, r !== Ke ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : e3 !== null && e3.outputColorSpace === De && (this.renderTarget.texture.colorSpace = De));
  }
}, ls = new Tt(), Yr = class extends ye {
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
  render(e3, t, r, s, i) {
    const c = this.overrideClearColor, l = this.overrideClearAlpha, d = e3.getClearAlpha(), h = c !== null, g = l >= 0;
    h ? (e3.getClearColor(ls), e3.setClearColor(c, g ? l : d)) : g && e3.setClearAlpha(l), e3.setRenderTarget(this.renderToScreen ? null : t), e3.clear(this.color, this.depth, this.stencil), h ? e3.setClearColor(ls, d) : g && e3.setClearAlpha(d);
  }
}, oa = class extends ye {
  constructor(e3, t) {
    super("MaskPass", e3, t), this.needsSwap = false, this.clearPass = new Yr(false, false, true), this.inverse = false;
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
  render(e3, t, r, s, i) {
    const c = e3.getContext(), l = e3.state.buffers, d = this.scene, h = this.camera, g = this.clearPass, w = this.inverted ? 0 : 1, A = 1 - w;
    l.color.setMask(false), l.depth.setMask(false), l.color.setLocked(true), l.depth.setLocked(true), l.stencil.setTest(true), l.stencil.setOp(c.REPLACE, c.REPLACE, c.REPLACE), l.stencil.setFunc(c.ALWAYS, w, 4294967295), l.stencil.setClear(A), l.stencil.setLocked(true), this.clearPass.enabled && (this.renderToScreen ? g.render(e3, null) : (g.render(e3, t), g.render(e3, r))), this.renderToScreen ? (e3.setRenderTarget(null), e3.render(d, h)) : (e3.setRenderTarget(t), e3.render(d, h), e3.setRenderTarget(r), e3.render(d, h)), l.color.setLocked(false), l.depth.setLocked(false), l.stencil.setLocked(false), l.stencil.setFunc(c.EQUAL, 1, 4294967295), l.stencil.setOp(c.KEEP, c.KEEP, c.KEEP), l.stencil.setLocked(true);
  }
}, mr = 1 / 1e3, ca = 1e3, la = class {
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
    return this._delta * mr;
  }
  get fixedDelta() {
    return this._fixedDelta * mr;
  }
  set fixedDelta(e3) {
    this._fixedDelta = e3 * ca;
  }
  get elapsed() {
    return this._elapsed * mr;
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
}, ua = class {
  constructor(e3 = null, { depthBuffer: t = true, stencilBuffer: r = false, multisampling: s = 0, frameBufferType: i } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(t, r, i, s), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new aa(), this.depthTexture = null, this.depthRenderTarget = null, this.passes = [], this.timer = new la(), this.autoRenderToScreen = true, this.setRenderer(e3);
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
      const t = e3.getSize(new me()), r = e3.getContext().getContextAttributes().alpha, s = this.inputBuffer.texture.type;
      s === Ke && e3.outputColorSpace === De && (this.inputBuffer.texture.colorSpace = De, this.outputBuffer.texture.colorSpace = De, this.inputBuffer.dispose(), this.outputBuffer.dispose()), e3.autoClear = false, this.setSize(t.width, t.height);
      for (const i of this.passes) i.initialize(e3, r, s);
    }
  }
  replaceRenderer(e3, t = true) {
    const r = this.renderer, s = r.domElement.parentNode;
    return this.setRenderer(e3), t && s !== null && (s.removeChild(r.domElement), s.appendChild(e3.domElement)), r;
  }
  createDepthTexture() {
    const e3 = this.inputBuffer, t = new $n();
    this.depthTexture = t, e3.stencilBuffer ? (t.format = ei, t.type = ti) : t.type = Xe;
    const r = t.clone();
    return r.name = "EffectComposer.StableDepth", this.depthRenderTarget = new Pe(e3.width, e3.height, { depthBuffer: true, stencilBuffer: e3.stencilBuffer, depthTexture: r }), r;
  }
  blitDepthBuffer(e3) {
    const t = this.renderer, r = this.depthRenderTarget, s = t.properties, i = t.getContext();
    t.setRenderTarget(r);
    const c = s.get(e3).__webglFramebuffer, l = s.get(r).__webglFramebuffer, d = e3.stencilBuffer ? i.DEPTH_BUFFER_BIT | i.STENCIL_BUFFER_BIT : i.DEPTH_BUFFER_BIT;
    i.bindFramebuffer(i.READ_FRAMEBUFFER, c), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, l), i.blitFramebuffer(0, 0, e3.width, e3.height, 0, 0, r.width, r.height, d, i.NEAREST), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), t.setRenderTarget(null);
  }
  deleteDepthTexture() {
    if (this.depthTexture !== null) {
      this.depthTexture.dispose(), this.depthTexture = null, this.depthRenderTarget.dispose(), this.depthRenderTarget = null, this.inputBuffer.depthTexture = null, this.outputBuffer.depthTexture = null;
      for (const e3 of this.passes) e3.setDepthTexture(null);
    }
  }
  createBuffer(e3, t, r, s) {
    const i = this.renderer, c = i === null ? new me() : i.getDrawingBufferSize(new me()), l = { minFilter: Be, magFilter: Be, stencilBuffer: t, depthBuffer: e3, type: r }, d = new Pe(c.width, c.height, l);
    return s > 0 && (d.samples = s), r === Ke && i !== null && i.outputColorSpace === De && (d.texture.colorSpace = De), d.texture.name = "EffectComposer.Buffer", d.texture.generateMipmaps = false, d;
  }
  setMainScene(e3) {
    for (const t of this.passes) t.mainScene = e3;
  }
  setMainCamera(e3) {
    for (const t of this.passes) t.mainCamera = e3;
  }
  addPass(e3, t) {
    const r = this.passes, s = this.renderer, i = s.getDrawingBufferSize(new me()), c = s.getContext().getContextAttributes().alpha, l = this.inputBuffer.texture.type;
    if (e3.renderer = s, e3.setSize(i.width, i.height), e3.initialize(s, c, l), this.autoRenderToScreen && (r.length > 0 && (r[r.length - 1].renderToScreen = false), e3.renderToScreen && (this.autoRenderToScreen = false)), t !== void 0 ? r.splice(t, 0, e3) : r.push(e3), this.autoRenderToScreen && (r[r.length - 1].renderToScreen = true), e3.needsDepthTexture || this.depthTexture !== null) if (this.depthTexture === null) {
      const d = this.createDepthTexture();
      for (e3 of r) e3.setDepthTexture(d);
    } else {
      const d = this.depthRenderTarget.depthTexture;
      e3.setDepthTexture(d);
    }
  }
  removePass(e3) {
    const t = this.passes, r = t.indexOf(e3);
    if (r !== -1 && t.splice(r, 1).length > 0) {
      if (this.depthTexture !== null) {
        const c = (d, h) => d || h.needsDepthTexture;
        if (!t.reduce(c, false)) {
          const d = this.depthRenderTarget.depthTexture;
          e3.getDepthTexture() === d && e3.setDepthTexture(null), this.deleteDepthTexture();
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
    let s = this.inputBuffer, i = this.outputBuffer, c, l = false;
    e3 === void 0 && (this.timer.update(), e3 = this.timer.getDelta());
    for (const d of this.passes) if (d.enabled) {
      if (s.depthTexture = this.depthTexture, i.depthTexture = null, d.render(t, s, i, e3, l), d.needsDepthBlit && this.depthRenderTarget !== null && this.blitDepthBuffer(s), d.needsSwap) {
        if (l) {
          r.renderToScreen = d.renderToScreen;
          const h = t.getContext(), g = t.state.buffers.stencil;
          g.setFunc(h.NOTEQUAL, 1, 4294967295), r.render(t, s, i, e3, l), g.setFunc(h.EQUAL, 1, 4294967295);
        }
        c = s, s = i, i = c;
      }
      d instanceof oa ? l = true : d instanceof na && (l = false);
    }
  }
  setSize(e3, t, r) {
    const s = this.renderer, i = s.getSize(new me());
    (e3 === void 0 || t === void 0) && (e3 = i.width, t = i.height), (i.width !== e3 || i.height !== t) && s.setSize(e3, t, r);
    const c = s.getDrawingBufferSize(new me());
    this.inputBuffer.setSize(c.width, c.height), this.outputBuffer.setSize(c.width, c.height), this.depthRenderTarget !== null && this.depthRenderTarget.setSize(c.width, c.height);
    for (const l of this.passes) l.setSize(c.width, c.height);
  }
  reset() {
    this.dispose(), this.autoRenderToScreen = true;
  }
  dispose() {
    for (const e3 of this.passes) e3.dispose();
    this.passes = [], this.inputBuffer !== null && this.inputBuffer.dispose(), this.outputBuffer !== null && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose(), ye.fullscreenGeometry.dispose();
  }
}, ot = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }, ee = { FRAGMENT_HEAD: "FRAGMENT_HEAD", FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV", FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE", VERTEX_HEAD: "VERTEX_HEAD", VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT" }, da = class {
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([[ee.FRAGMENT_HEAD, null], [ee.FRAGMENT_MAIN_UV, null], [ee.FRAGMENT_MAIN_IMAGE, null], [ee.VERTEX_HEAD, null], [ee.VERTEX_MAIN_SUPPORT, null]]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = ot.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = false, this.readDepth = false, this.colorSpace = Wt;
  }
}, xr = false, us = class {
  constructor(e3 = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(e3), this.meshCount = 0, this.replaceMaterial = (t) => {
      if (t.isMesh) {
        let r;
        if (t.material.flatShading) switch (t.material.side) {
          case at:
            r = this.materialsFlatShadedDoubleSide;
            break;
          case qt:
            r = this.materialsFlatShadedBackSide;
            break;
          default:
            r = this.materialsFlatShaded;
            break;
        }
        else switch (t.material.side) {
          case at:
            r = this.materialsDoubleSide;
            break;
          case qt:
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
    if (!(e3 instanceof Oe)) return e3.clone();
    const t = e3.uniforms, r = /* @__PURE__ */ new Map();
    for (const i in t) {
      const c = t[i].value;
      c.isRenderTargetTexture && (t[i].value = null, r.set(i, c));
    }
    const s = e3.clone();
    for (const i of r) t[i[0]].value = i[1], s.uniforms[i[0]].value = i[1];
    return s;
  }
  setMaterial(e3) {
    if (this.disposeMaterials(), this.material = e3, e3 !== null) {
      const t = this.materials = [this.cloneMaterial(e3), this.cloneMaterial(e3), this.cloneMaterial(e3)];
      for (const r of t) r.uniforms = Object.assign({}, e3.uniforms), r.side = si;
      t[2].skinning = true, this.materialsBackSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.side = qt, s;
      }), this.materialsDoubleSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.side = at, s;
      }), this.materialsFlatShaded = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s;
      }), this.materialsFlatShadedBackSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s.side = qt, s;
      }), this.materialsFlatShadedDoubleSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s.side = at, s;
      });
    }
  }
  render(e3, t, r) {
    const s = e3.shadowMap.enabled;
    if (e3.shadowMap.enabled = false, xr) {
      const i = this.originalMaterials;
      this.meshCount = 0, t.traverse(this.replaceMaterial), e3.render(t, r);
      for (const c of i) c[0].material = c[1];
      this.meshCount !== i.size && i.clear();
    } else {
      const i = t.overrideMaterial;
      t.overrideMaterial = this.material, e3.render(t, r), t.overrideMaterial = i;
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
    return xr;
  }
  static set workaroundEnabled(e3) {
    xr = e3;
  }
}, ft = -1, Ie = class extends Lr {
  constructor(e3 = null, t = ft, r = ft, s = 1) {
    super(), e3 !== null && this.addEventListener("change", () => e3.setSize(this.baseSize.width, this.baseSize.height)), this.baseSize = new me(1, 1), this.preferredSize = new me(t, r), this.target = this.preferredSize, this.s = s, this.effectiveSize = new me(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
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
}, J = { SKIP: 9, SET: 30, ADD: 0, ALPHA: 1, AVERAGE: 2, COLOR: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, DIVIDE: 8, DST: 9, EXCLUSION: 10, HARD_LIGHT: 11, HARD_MIX: 12, HUE: 13, INVERT: 14, INVERT_RGB: 15, LIGHTEN: 16, LINEAR_BURN: 17, LINEAR_DODGE: 18, LINEAR_LIGHT: 19, LUMINOSITY: 20, MULTIPLY: 21, NEGATION: 22, NORMAL: 23, OVERLAY: 24, PIN_LIGHT: 25, REFLECT: 26, SATURATION: 27, SCREEN: 28, SOFT_LIGHT: 29, SRC: 30, SUBTRACT: 31, VIVID_LIGHT: 32 }, ha = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", fa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}", ga = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", va = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", pa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Aa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ma = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", xa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ea = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", wa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ca = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Da = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Sa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ma = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ba = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ia = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ta = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ya = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ra = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ba = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Pa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Oa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Fa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}", Ua = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", La = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ga = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ha = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Na = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", za = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ka = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}", Qa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ja = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ya = /* @__PURE__ */ new Map([[J.ADD, ha], [J.ALPHA, fa], [J.AVERAGE, ga], [J.COLOR, va], [J.COLOR_BURN, pa], [J.COLOR_DODGE, Aa], [J.DARKEN, ma], [J.DIFFERENCE, xa], [J.DIVIDE, Ea], [J.DST, null], [J.EXCLUSION, wa], [J.HARD_LIGHT, Ca], [J.HARD_MIX, Da], [J.HUE, Sa], [J.INVERT, Ma], [J.INVERT_RGB, Ba], [J.LIGHTEN, Ia], [J.LINEAR_BURN, Ta], [J.LINEAR_DODGE, ya], [J.LINEAR_LIGHT, Ra], [J.LUMINOSITY, ba], [J.MULTIPLY, Pa], [J.NEGATION, Oa], [J.NORMAL, Fa], [J.OVERLAY, Ua], [J.PIN_LIGHT, La], [J.REFLECT, Ga], [J.SATURATION, Ha], [J.SCREEN, Na], [J.SOFT_LIGHT, za], [J.SRC, ka], [J.SUBTRACT, Qa], [J.VIVID_LIGHT, ja]]), Wa = class extends Lr {
  constructor(e3, t = 1) {
    super(), this._blendFunction = e3, this.opacity = new k(t);
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
    return Ya.get(this.blendFunction);
  }
}, Xt = class extends Lr {
  constructor(e3, t, { attributes: r = ot.NONE, blendFunction: s = J.NORMAL, defines: i = /* @__PURE__ */ new Map(), uniforms: c = /* @__PURE__ */ new Map(), extensions: l = null, vertexShader: d = null } = {}) {
    super(), this.name = e3, this.renderer = null, this.attributes = r, this.fragmentShader = t, this.vertexShader = d, this.defines = i, this.uniforms = c, this.extensions = l, this.blendMode = new Wa(s), this.blendMode.addEventListener("change", (h) => this.setChanged()), this._inputColorSpace = Wt, this._outputColorSpace = Os;
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
  setDepthTexture(e3, t = pt) {
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
      (t instanceof Pe || t instanceof Fs || t instanceof qe || t instanceof ye) && this[e3].dispose();
    }
  }
}, Wr = { VERY_SMALL: 0, SMALL: 1, MEDIUM: 2, LARGE: 3, VERY_LARGE: 4, HUGE: 5 }, Va = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, Xa = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", Ka = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])], Za = class extends Oe {
  constructor(e3 = new ns()) {
    super({ name: "KawaseBlurMaterial", uniforms: { inputBuffer: new k(null), texelSize: new k(new ns()), scale: new k(1), kernel: new k(0) }, blending: tt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Va, vertexShader: Xa }), this.setTexelSize(e3.x, e3.y), this.kernelSize = Wr.MEDIUM;
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setInputBuffer(e3) {
    this.inputBuffer = e3;
  }
  get kernelSequence() {
    return Ka[this.kernelSize];
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
}, _a = class extends ye {
  constructor({ kernelSize: e3 = Wr.MEDIUM, resolutionScale: t = 0.5, width: r = Ie.AUTO_SIZE, height: s = Ie.AUTO_SIZE, resolutionX: i = r, resolutionY: c = s } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new Pe(1, 1, { depthBuffer: false }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const l = this.resolution = new Ie(this, i, c, t);
    l.addEventListener("change", (d) => this.setSize(l.baseWidth, l.baseHeight)), this._blurMaterial = new Za(), this._blurMaterial.kernelSize = e3, this.copyMaterial = new Js();
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
  render(e3, t, r, s, i) {
    const c = this.scene, l = this.camera, d = this.renderTargetA, h = this.renderTargetB, g = this.blurMaterial, w = g.kernelSequence;
    let A = t;
    this.fullscreenMaterial = g;
    for (let E = 0, C = w.length; E < C; ++E) {
      const b = E & 1 ? h : d;
      g.kernel = w[E], g.inputBuffer = A.texture, e3.setRenderTarget(b), e3.render(c, l), A = b;
    }
    this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = A.texture, e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(c, l);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t);
    const s = r.width, i = r.height;
    this.renderTargetA.setSize(s, i), this.renderTargetB.setSize(s, i), this.blurMaterial.setSize(e3, t);
  }
  initialize(e3, t, r) {
    r !== void 0 && (this.renderTargetA.texture.type = r, this.renderTargetB.texture.type = r, r !== Ke ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : e3 !== null && e3.outputColorSpace === De && (this.renderTargetA.texture.colorSpace = De, this.renderTargetB.texture.colorSpace = De));
  }
  static get AUTO_SIZE() {
    return Ie.AUTO_SIZE;
  }
}, Ja = `#include <common>
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
}`, qa = class extends Oe {
  constructor(e3 = false, t = null) {
    super({ name: "LuminanceMaterial", defines: { THREE_REVISION: Kt.replace(/\D+/g, "") }, uniforms: { inputBuffer: new k(null), threshold: new k(0), smoothing: new k(1), range: new k(null) }, blending: tt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Ja, vertexShader: _s }), this.colorOutput = e3, this.luminanceRange = t;
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
}, $a = class extends ye {
  constructor({ renderTarget: e3, luminanceRange: t, colorOutput: r, resolutionScale: s = 1, width: i = Ie.AUTO_SIZE, height: c = Ie.AUTO_SIZE, resolutionX: l = i, resolutionY: d = c } = {}) {
    super("LuminancePass"), this.fullscreenMaterial = new qa(r, t), this.needsSwap = false, this.renderTarget = e3, this.renderTarget === void 0 && (this.renderTarget = new Pe(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "LuminancePass.Target");
    const h = this.resolution = new Ie(this, l, d, s);
    h.addEventListener("change", (g) => this.setSize(h.baseWidth, h.baseHeight));
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
  render(e3, t, r, s, i) {
    const c = this.fullscreenMaterial;
    c.inputBuffer = t.texture, e3.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e3.render(this.scene, this.camera);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height);
  }
  initialize(e3, t, r) {
    r !== void 0 && r !== Ke && (this.renderTarget.texture.type = r, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, eo = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`, to = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}", ro = class extends Oe {
  constructor() {
    super({ name: "DownsamplingMaterial", uniforms: { inputBuffer: new k(null), texelSize: new k(new me()) }, blending: tt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: eo, vertexShader: to });
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setSize(e3, t) {
    this.uniforms.texelSize.value.set(1 / e3, 1 / t);
  }
}, so = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`, no = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}", io = class extends Oe {
  constructor() {
    super({ name: "UpsamplingMaterial", uniforms: { inputBuffer: new k(null), supportBuffer: new k(null), texelSize: new k(new me()), radius: new k(0.85) }, blending: tt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: so, vertexShader: no });
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
}, ao = class extends ye {
  constructor() {
    super("MipmapBlurPass"), this.needsSwap = false, this.renderTarget = new Pe(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new ro(), this.upsamplingMaterial = new io(), this.resolution = new me();
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
        const i = t.clone();
        i.texture.name = "Upsampling.Mipmap" + r, this.upsamplingMipmaps.push(i);
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
  render(e3, t, r, s, i) {
    const { scene: c, camera: l } = this, { downsamplingMaterial: d, upsamplingMaterial: h } = this, { downsamplingMipmaps: g, upsamplingMipmaps: w } = this;
    let A = t;
    this.fullscreenMaterial = d;
    for (let E = 0, C = g.length; E < C; ++E) {
      const b = g[E];
      d.setSize(A.width, A.height), d.inputBuffer = A.texture, e3.setRenderTarget(b), e3.render(c, l), A = b;
    }
    this.fullscreenMaterial = h;
    for (let E = w.length - 1; E >= 0; --E) {
      const C = w[E];
      h.setSize(A.width, A.height), h.inputBuffer = A.texture, h.supportBuffer = g[E].texture, e3.setRenderTarget(C), e3.render(c, l), A = C;
    }
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.set(e3, t);
    let s = r.width, i = r.height;
    for (let c = 0, l = this.downsamplingMipmaps.length; c < l; ++c) s = Math.round(s * 0.5), i = Math.round(i * 0.5), this.downsamplingMipmaps[c].setSize(s, i), c < this.upsamplingMipmaps.length && this.upsamplingMipmaps[c].setSize(s, i);
  }
  initialize(e3, t, r) {
    if (r !== void 0) {
      const s = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
      for (const i of s) i.texture.type = r;
      if (r !== Ke) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      else if (e3 !== null && e3.outputColorSpace === De) for (const i of s) i.texture.colorSpace = De;
    }
  }
  dispose() {
    super.dispose();
    for (const e3 of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) e3.dispose();
  }
}, oo = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`, co = class extends Xt {
  constructor({ blendFunction: e3 = J.SCREEN, luminanceThreshold: t = 1, luminanceSmoothing: r = 0.03, mipmapBlur: s = true, intensity: i = 1, radius: c = 0.85, levels: l = 8, kernelSize: d = Wr.LARGE, resolutionScale: h = 0.5, width: g = Ie.AUTO_SIZE, height: w = Ie.AUTO_SIZE, resolutionX: A = g, resolutionY: E = w } = {}) {
    super("BloomEffect", oo, { blendFunction: e3, uniforms: /* @__PURE__ */ new Map([["map", new k(null)], ["intensity", new k(i)]]) }), this.renderTarget = new Pe(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new _a({ kernelSize: d }), this.luminancePass = new $a({ colorOutput: true }), this.luminanceMaterial.threshold = t, this.luminanceMaterial.smoothing = r, this.mipmapBlurPass = new ao(), this.mipmapBlurPass.enabled = s, this.mipmapBlurPass.radius = c, this.mipmapBlurPass.levels = l, this.uniforms.get("map").value = s ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const C = this.resolution = new Ie(this, A, E, h);
    C.addEventListener("change", (b) => this.setSize(C.baseWidth, C.baseHeight));
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
    const s = this.renderTarget, i = this.luminancePass;
    i.enabled ? (i.render(e3, t), this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(e3, i.renderTarget) : this.blurPass.render(e3, i.renderTarget, s)) : this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(e3, t) : this.blurPass.render(e3, t, s);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height), this.blurPass.resolution.copy(r), this.luminancePass.setSize(e3, t), this.mipmapBlurPass.setSize(e3, t);
  }
  initialize(e3, t, r) {
    this.blurPass.initialize(e3, t, r), this.luminancePass.initialize(e3, t, r), this.mipmapBlurPass.initialize(e3, t, r), r !== void 0 && (this.renderTarget.texture.type = r, e3 !== null && e3.outputColorSpace === De && (this.renderTarget.texture.colorSpace = De));
  }
}, ds = class extends ye {
  constructor(e3, t = "inputBuffer") {
    super("ShaderPass"), this.fullscreenMaterial = e3, this.input = t;
  }
  setInput(e3) {
    this.input = e3;
  }
  render(e3, t, r, s, i) {
    const c = this.fullscreenMaterial.uniforms;
    t !== null && c !== void 0 && c[this.input] !== void 0 && (c[this.input].value = t.texture), e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(this.scene, this.camera);
  }
  initialize(e3, t, r) {
    r !== void 0 && r !== Ke && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, qs = class extends ye {
  constructor(e3, t, r = null) {
    super("RenderPass", e3, t), this.needsSwap = false, this.needsDepthBlit = true, this.clearPass = new Yr(), this.overrideMaterialManager = r === null ? null : new us(r), this.ignoreBackground = false, this.skipShadowMapUpdate = false, this.selection = null;
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
    e3 !== null ? t !== null ? t.setMaterial(e3) : this.overrideMaterialManager = new us(e3) : t !== null && (t.dispose(), this.overrideMaterialManager = null);
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
  render(e3, t, r, s, i) {
    const c = this.scene, l = this.camera, d = this.selection, h = l.layers.mask, g = c.background, w = e3.shadowMap.autoUpdate, A = this.renderToScreen ? null : t;
    d !== null && l.layers.set(d.getLayer()), this.skipShadowMapUpdate && (e3.shadowMap.autoUpdate = false), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (c.background = null), this.clearPass.enabled && this.clearPass.render(e3, t), e3.setRenderTarget(A), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(e3, c, l) : e3.render(c, l), l.layers.mask = h, c.background = g, e3.shadowMap.autoUpdate = w;
  }
}, $s = { DEPTH: 0, LUMA: 1, COLOR: 2 }, lo = { DISABLED: 0, DEPTH: 1, CUSTOM: 2 }, Nt = { LOW: 0, MEDIUM: 1, HIGH: 2, ULTRA: 3 }, zt = { DEFAULT: 0, ESKIL: 1 }, uo = `varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
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
}`, ho = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`, fo = class extends Oe {
  constructor(e3 = new me(), t = $s.COLOR) {
    super({ name: "EdgeDetectionMaterial", defines: { THREE_REVISION: Kt.replace(/\D+/g, ""), LOCAL_CONTRAST_ADAPTATION_FACTOR: "2.0", EDGE_THRESHOLD: "0.1", DEPTH_THRESHOLD: "0.01", PREDICATION_MODE: "0", PREDICATION_THRESHOLD: "0.01", PREDICATION_SCALE: "2.0", PREDICATION_STRENGTH: "1.0", DEPTH_PACKING: "0" }, uniforms: { inputBuffer: new k(null), depthBuffer: new k(null), predicationBuffer: new k(null), texelSize: new k(e3) }, blending: tt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: uo, vertexShader: ho }), this.edgeDetectionMode = t;
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = pt) {
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
}, go = `#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
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
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`, vo = "uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}", po = class extends Oe {
  constructor(e3 = new me(), t = new me()) {
    super({ name: "SMAAWeightsMaterial", defines: { MAX_SEARCH_STEPS_INT: "16", MAX_SEARCH_STEPS_FLOAT: "16.0", MAX_SEARCH_STEPS_DIAG_INT: "8", MAX_SEARCH_STEPS_DIAG_FLOAT: "8.0", CORNER_ROUNDING: "25", CORNER_ROUNDING_NORM: "0.25", AREATEX_MAX_DISTANCE: "16.0", AREATEX_MAX_DISTANCE_DIAG: "20.0", AREATEX_PIXEL_SIZE: "(1.0 / vec2(160.0, 560.0))", AREATEX_SUBTEX_SIZE: "(1.0 / 7.0)", SEARCHTEX_SIZE: "vec2(66.0, 33.0)", SEARCHTEX_PACKED_SIZE: "vec2(64.0, 16.0)" }, uniforms: { inputBuffer: new k(null), searchTexture: new k(null), areaTexture: new k(null), resolution: new k(t), texelSize: new k(e3) }, blending: tt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: go, vertexShader: vo });
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
}, hs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC", fs = "data:image/png;base64,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", Ao = "uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}", mo = "varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}", xo = class extends Xt {
  constructor({ blendFunction: e3 = J.SRC, preset: t = Nt.MEDIUM, edgeDetectionMode: r = $s.COLOR, predicationMode: s = lo.DISABLED } = {}) {
    super("SMAAEffect", Ao, { vertexShader: mo, blendFunction: e3, attributes: ot.CONVOLUTION | ot.DEPTH, uniforms: /* @__PURE__ */ new Map([["weightMap", new k(null)]]) });
    let i, c;
    arguments.length > 1 && (i = arguments[0], c = arguments[1], arguments.length > 2 && (t = arguments[2]), arguments.length > 3 && (r = arguments[3])), this.renderTargetEdges = new Pe(1, 1, { depthBuffer: false }), this.renderTargetEdges.texture.name = "SMAA.Edges", this.renderTargetWeights = this.renderTargetEdges.clone(), this.renderTargetWeights.texture.name = "SMAA.Weights", this.uniforms.get("weightMap").value = this.renderTargetWeights.texture, this.clearPass = new Yr(true, false, false), this.clearPass.overrideClearColor = new Tt(0), this.clearPass.overrideClearAlpha = 1, this.edgeDetectionPass = new ds(new fo()), this.edgeDetectionMaterial.edgeDetectionMode = r, this.edgeDetectionMaterial.predicationMode = s, this.weightsPass = new ds(new po());
    const l = new bs();
    l.onLoad = () => {
      const d = new qe(i);
      d.name = "SMAA.Search", d.magFilter = yt, d.minFilter = yt, d.generateMipmaps = false, d.needsUpdate = true, d.flipY = true, this.weightsMaterial.searchTexture = d;
      const h = new qe(c);
      h.name = "SMAA.Area", h.magFilter = Be, h.minFilter = Be, h.generateMipmaps = false, h.needsUpdate = true, h.flipY = false, this.weightsMaterial.areaTexture = h, this.dispatchEvent({ type: "load" });
    }, l.itemStart("search"), l.itemStart("area"), i !== void 0 && c !== void 0 ? (l.itemEnd("search"), l.itemEnd("area")) : typeof Image < "u" && (i = new Image(), c = new Image(), i.addEventListener("load", () => l.itemEnd("search")), c.addEventListener("load", () => l.itemEnd("area")), i.src = hs, c.src = fs), this.applyPreset(t);
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
      case Nt.LOW:
        t.edgeDetectionThreshold = 0.15, r.orthogonalSearchSteps = 4, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case Nt.MEDIUM:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 8, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case Nt.HIGH:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 16, r.diagonalSearchSteps = 8, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
      case Nt.ULTRA:
        t.edgeDetectionThreshold = 0.05, r.orthogonalSearchSteps = 32, r.diagonalSearchSteps = 16, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
    }
  }
  setDepthTexture(e3, t = pt) {
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
    return hs;
  }
  static get areaImageDataURL() {
    return fs;
  }
}, Eo = `#include <packing>
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
gl_FragColor=vec4(n[index],d[index]);}`, wo = "uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}", Co = class extends Oe {
  constructor() {
    super({ name: "DepthDownsamplingMaterial", defines: { DEPTH_PACKING: "0" }, uniforms: { depthBuffer: new k(null), normalBuffer: new k(null), texelSize: new k(new me()) }, blending: tt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Eo, vertexShader: wo });
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = pt) {
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
}, Do = class extends ye {
  constructor({ normalBuffer: e3 = null, resolutionScale: t = 0.5, width: r = Ie.AUTO_SIZE, height: s = Ie.AUTO_SIZE, resolutionX: i = r, resolutionY: c = s } = {}) {
    super("DepthDownsamplingPass");
    const l = new Co();
    l.normalBuffer = e3, this.fullscreenMaterial = l, this.needsDepthTexture = true, this.needsSwap = false, this.renderTarget = new Pe(1, 1, { minFilter: yt, magFilter: yt, depthBuffer: false, type: Xe }), this.renderTarget.texture.name = "DepthDownsamplingPass.Target", this.renderTarget.texture.generateMipmaps = false;
    const d = this.resolution = new Ie(this, i, c, t);
    d.addEventListener("change", (h) => this.setSize(d.baseWidth, d.baseHeight));
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
  setDepthTexture(e3, t = pt) {
    this.fullscreenMaterial.depthBuffer = e3, this.fullscreenMaterial.depthPacking = t;
  }
  render(e3, t, r, s, i) {
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
}, So = `uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`, Mo = class extends Xt {
  constructor({ blendFunction: e3, eskil: t = false, technique: r = t ? zt.ESKIL : zt.DEFAULT, offset: s = 0.5, darkness: i = 0.5 } = {}) {
    super("VignetteEffect", So, { blendFunction: e3, defines: /* @__PURE__ */ new Map([["VIGNETTE_TECHNIQUE", r.toFixed(0)]]), uniforms: /* @__PURE__ */ new Map([["offset", new k(s)], ["darkness", new k(i)]]) });
  }
  get technique() {
    return Number(this.defines.get("VIGNETTE_TECHNIQUE"));
  }
  set technique(e3) {
    this.technique !== e3 && (this.defines.set("VIGNETTE_TECHNIQUE", e3.toFixed(0)), this.setChanged());
  }
  get eskil() {
    return this.technique === zt.ESKIL;
  }
  set eskil(e3) {
    this.technique = e3 ? zt.ESKIL : zt.DEFAULT;
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
}, Bo = `#include <common>
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
}`, Io = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", To = class extends Oe {
  constructor(e3, t, r, s, i = false) {
    super({ name: "EffectMaterial", defines: { THREE_REVISION: Kt.replace(/\D+/g, ""), DEPTH_PACKING: "0", ENCODE_OUTPUT: "1" }, uniforms: { inputBuffer: new k(null), depthBuffer: new k(null), resolution: new k(new me()), texelSize: new k(new me()), cameraNear: new k(0.3), cameraFar: new k(1e3), aspect: new k(1), time: new k(0) }, blending: tt, toneMapped: false, depthWrite: false, depthTest: false, dithering: i }), e3 && this.setShaderParts(e3), t && this.setDefines(t), r && this.setUniforms(r), this.copyCameraSettings(s);
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
  setDepthBuffer(e3, t = pt) {
    this.depthBuffer = e3, this.depthPacking = t;
  }
  setShaderData(e3) {
    this.setShaderParts(e3.shaderParts), this.setDefines(e3.defines), this.setUniforms(e3.uniforms), this.setExtensions(e3.extensions);
  }
  setShaderParts(e3) {
    return this.fragmentShader = Bo.replace(ee.FRAGMENT_HEAD, e3.get(ee.FRAGMENT_HEAD) || "").replace(ee.FRAGMENT_MAIN_UV, e3.get(ee.FRAGMENT_MAIN_UV) || "").replace(ee.FRAGMENT_MAIN_IMAGE, e3.get(ee.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = Io.replace(ee.VERTEX_HEAD, e3.get(ee.VERTEX_HEAD) || "").replace(ee.VERTEX_MAIN_SUPPORT, e3.get(ee.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = true, this;
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
    e3 && (this.uniforms.cameraNear.value = e3.near, this.uniforms.cameraFar.value = e3.far, e3 instanceof ni ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
  setSize(e3, t) {
    const r = this.uniforms;
    r.resolution.value.set(e3, t), r.texelSize.value.set(1 / e3, 1 / t), r.aspect.value = e3 / t;
  }
  static get Section() {
    return ee;
  }
};
function gs(e3, t, r) {
  for (const s of t) {
    const i = "$1" + e3 + s.charAt(0).toUpperCase() + s.slice(1), c = new RegExp("([^\\.])(\\b" + s + "\\b)", "g");
    for (const l of r.entries()) l[1] !== null && r.set(l[0], l[1].replace(c, i));
  }
}
function yo(e3, t, r) {
  let s = t.getFragmentShader(), i = t.getVertexShader();
  const c = s !== void 0 && /mainImage/.test(s), l = s !== void 0 && /mainUv/.test(s);
  if (r.attributes |= t.getAttributes(), s === void 0) throw new Error(`Missing fragment shader (${t.name})`);
  if (l && r.attributes & ot.CONVOLUTION) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);
  if (!c && !l) throw new Error(`Could not find mainImage or mainUv function (${t.name})`);
  {
    const d = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, h = r.shaderParts;
    let g = h.get(ee.FRAGMENT_HEAD) || "", w = h.get(ee.FRAGMENT_MAIN_UV) || "", A = h.get(ee.FRAGMENT_MAIN_IMAGE) || "", E = h.get(ee.VERTEX_HEAD) || "", C = h.get(ee.VERTEX_MAIN_SUPPORT) || "";
    const b = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
    if (l && (w += `	${e3}MainUv(UV);
`, r.uvTransformation = true), i !== null && /mainSupport/.test(i)) {
      const O = /mainSupport *\([\w\s]*?uv\s*?\)/.test(i);
      C += `	${e3}MainSupport(`, C += O ? `vUv);
` : `);
`;
      for (const L of i.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) for (const q of L[1].split(/\s*,\s*/)) r.varyings.add(q), b.add(q), z.add(q);
      for (const L of i.matchAll(d)) z.add(L[1]);
    }
    for (const O of s.matchAll(d)) z.add(O[1]);
    for (const O of t.defines.keys()) z.add(O.replace(/\([\w\s,]*\)/g, ""));
    for (const O of t.uniforms.keys()) z.add(O);
    z.delete("while"), z.delete("for"), z.delete("if"), t.uniforms.forEach((O, L) => r.uniforms.set(e3 + L.charAt(0).toUpperCase() + L.slice(1), O)), t.defines.forEach((O, L) => r.defines.set(e3 + L.charAt(0).toUpperCase() + L.slice(1), O));
    const N = /* @__PURE__ */ new Map([["fragment", s], ["vertex", i]]);
    gs(e3, z, r.defines), gs(e3, z, N), s = N.get("fragment"), i = N.get("vertex");
    const V = t.blendMode;
    if (r.blendModes.set(V.blendFunction, V), c) {
      t.inputColorSpace !== null && t.inputColorSpace !== r.colorSpace && (A += t.inputColorSpace === De ? `color0 = sRGBTransferOETF(color0);
	` : `color0 = sRGBToLinear(color0);
	`), t.outputColorSpace !== Os ? r.colorSpace = t.outputColorSpace : t.inputColorSpace !== null && (r.colorSpace = t.inputColorSpace);
      const O = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      A += `${e3}MainImage(color0, UV, `, r.attributes & ot.DEPTH && O.test(s) && (A += "depth, ", r.readDepth = true), A += `color1);
	`;
      const L = e3 + "BlendOpacity";
      r.uniforms.set(L, V.opacity), A += `color0 = blend${V.blendFunction}(color0, color1, ${L});

	`, g += `uniform float ${L};

`;
    }
    if (g += s + `
`, i !== null && (E += i + `
`), h.set(ee.FRAGMENT_HEAD, g), h.set(ee.FRAGMENT_MAIN_UV, w), h.set(ee.FRAGMENT_MAIN_IMAGE, A), h.set(ee.VERTEX_HEAD, E), h.set(ee.VERTEX_MAIN_SUPPORT, C), t.extensions !== null) for (const O of t.extensions) r.extensions.add(O);
  }
}
var Ro = class extends ye {
  constructor(e3, ...t) {
    super("EffectPass"), this.fullscreenMaterial = new To(null, null, null, e3), this.listener = (r) => this.handleEvent(r), this.effects = [], this.setEffects(t), this.skipRendering = false, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
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
    const e3 = new da();
    let t = 0;
    for (const l of this.effects) if (l.blendMode.blendFunction === J.DST) e3.attributes |= l.getAttributes() & ot.DEPTH;
    else {
      if (e3.attributes & l.getAttributes() & ot.CONVOLUTION) throw new Error(`Convolution effects cannot be merged (${l.name})`);
      yo("e" + t++, l, e3);
    }
    let r = e3.shaderParts.get(ee.FRAGMENT_HEAD), s = e3.shaderParts.get(ee.FRAGMENT_MAIN_IMAGE), i = e3.shaderParts.get(ee.FRAGMENT_MAIN_UV);
    const c = /\bblend\b/g;
    for (const l of e3.blendModes.values()) r += l.getShaderCode().replace(c, `blend${l.blendFunction}`) + `
`;
    e3.attributes & ot.DEPTH ? (e3.readDepth && (s = `float depth = readDepth(UV);

	` + s), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = false, e3.colorSpace === De && (s += `color0 = sRGBToLinear(color0);
	`), e3.uvTransformation ? (i = `vec2 transformedUv = vUv;
` + i, e3.defines.set("UV", "transformedUv")) : e3.defines.set("UV", "vUv"), e3.shaderParts.set(ee.FRAGMENT_HEAD, r), e3.shaderParts.set(ee.FRAGMENT_MAIN_IMAGE, s), e3.shaderParts.set(ee.FRAGMENT_MAIN_UV, i);
    for (const [l, d] of e3.shaderParts) d !== null && e3.shaderParts.set(l, d.trim().replace(/^#/, `
#`));
    this.skipRendering = t === 0, this.needsSwap = !this.skipRendering, this.fullscreenMaterial.setShaderData(e3);
  }
  recompile() {
    this.updateMaterial();
  }
  getDepthTexture() {
    return this.fullscreenMaterial.depthBuffer;
  }
  setDepthTexture(e3, t = pt) {
    this.fullscreenMaterial.depthBuffer = e3, this.fullscreenMaterial.depthPacking = t;
    for (const r of this.effects) r.setDepthTexture(e3, t);
  }
  render(e3, t, r, s, i) {
    for (const c of this.effects) c.update(e3, t, s);
    if (!this.skipRendering || this.renderToScreen) {
      const c = this.fullscreenMaterial;
      c.inputBuffer = t.texture, c.time += s * this.timeScale, e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(this.scene, this.camera);
    }
  }
  setSize(e3, t) {
    this.fullscreenMaterial.setSize(e3, t);
    for (const r of this.effects) r.setSize(e3, t);
  }
  initialize(e3, t, r) {
    this.renderer = e3;
    for (const s of this.effects) s.initialize(e3, t, r);
    this.updateMaterial(), r !== void 0 && r !== Ke && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
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
}, bo = class extends ye {
  constructor(e3, t, { renderTarget: r, resolutionScale: s = 1, width: i = Ie.AUTO_SIZE, height: c = Ie.AUTO_SIZE, resolutionX: l = i, resolutionY: d = c } = {}) {
    super("NormalPass"), this.needsSwap = false, this.renderPass = new qs(e3, t, new ri());
    const h = this.renderPass;
    h.ignoreBackground = true, h.skipShadowMapUpdate = true;
    const g = h.getClearPass();
    g.overrideClearColor = new Tt(7829503), g.overrideClearAlpha = 1, this.renderTarget = r, this.renderTarget === void 0 && (this.renderTarget = new Pe(1, 1, { minFilter: yt, magFilter: yt }), this.renderTarget.texture.name = "NormalPass.Target");
    const w = this.resolution = new Ie(this, l, d, s);
    w.addEventListener("change", (A) => this.setSize(w.baseWidth, w.baseHeight));
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
  render(e3, t, r, s, i) {
    const c = this.renderToScreen ? null : this.renderTarget;
    this.renderPass.render(e3, c, c);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height);
  }
};
function jt(e3, t, r) {
  return t in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
new me();
new me();
function en(e3, t) {
  if (!(e3 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var ze = function e(t, r, s) {
  var i = this;
  en(this, e), jt(this, "dot2", function(c, l) {
    return i.x * c + i.y * l;
  }), jt(this, "dot3", function(c, l, d) {
    return i.x * c + i.y * l + i.z * d;
  }), this.x = t, this.y = r, this.z = s;
}, Po = [new ze(1, 1, 0), new ze(-1, 1, 0), new ze(1, -1, 0), new ze(-1, -1, 0), new ze(1, 0, 1), new ze(-1, 0, 1), new ze(1, 0, -1), new ze(-1, 0, -1), new ze(0, 1, 1), new ze(0, -1, 1), new ze(0, 1, -1), new ze(0, -1, -1)], vs = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], ps = new Array(512), As = new Array(512), Oo = function(t) {
  t > 0 && t < 1 && (t *= 65536), t = Math.floor(t), t < 256 && (t |= t << 8);
  for (var r = 0; r < 256; r++) {
    var s;
    r & 1 ? s = vs[r] ^ t & 255 : s = vs[r] ^ t >> 8 & 255, ps[r] = ps[r + 256] = s, As[r] = As[r + 256] = Po[s % 12];
  }
};
Oo(0);
function Fo(e3) {
  if (typeof e3 == "number") e3 = Math.abs(e3);
  else if (typeof e3 == "string") {
    var t = e3;
    e3 = 0;
    for (var r = 0; r < t.length; r++) e3 = (e3 + (r + 1) * (t.charCodeAt(r) % 96)) % 2147483647;
  }
  return e3 === 0 && (e3 = 311), e3;
}
function ms(e3) {
  var t = Fo(e3);
  return function() {
    var r = t * 48271 % 2147483647;
    return t = r, r / 2147483647;
  };
}
var Uo = function e2(t) {
  var r = this;
  en(this, e2), jt(this, "seed", 0), jt(this, "init", function(s) {
    r.seed = s, r.value = ms(s);
  }), jt(this, "value", ms(this.seed)), this.init(t);
};
new Uo(Math.random());
const Lo = B.createContext(null), xs = (e3) => (e3.getAttributes() & 2) === 2, Go = B.memo(B.forwardRef(({ children: e3, camera: t, scene: r, resolutionScale: s, enabled: i = true, renderPriority: c = 1, autoClear: l = true, depthBuffer: d, enableNormalPass: h, stencilBuffer: g, multisampling: w = 8, frameBufferType: A = Le }, E) => {
  const { gl: C, scene: b, camera: z, size: N } = ct(), V = r || b, O = t || z, [L, q, H] = B.useMemo(() => {
    const x = new ua(C, { depthBuffer: d, stencilBuffer: g, multisampling: w, frameBufferType: A });
    x.addPass(new qs(V, O));
    let y = null, G = null;
    return h && (G = new bo(V, O), G.enabled = false, x.addPass(G), s !== void 0 && (y = new Do({ normalBuffer: G.texture, resolutionScale: s }), y.enabled = false, x.addPass(y))), [x, G, y];
  }, [O, C, d, g, w, A, V, h, s]);
  B.useEffect(() => L == null ? void 0 : L.setSize(N.width, N.height), [L, N]), Ye((x, y) => {
    if (i) {
      const G = C.autoClear;
      C.autoClear = l, g && !l && C.clearStencil(), L.render(y), C.autoClear = G;
    }
  }, i ? c : 0);
  const W = B.useRef(null);
  B.useLayoutEffect(() => {
    var _a2;
    const x = [], y = W.current.__r3f;
    if (y && L) {
      const G = y.children;
      for (let K = 0; K < G.length; K++) {
        const j = G[K].object;
        if (j instanceof Xt) {
          const _ = [j];
          if (!xs(j)) {
            let re = null;
            for (; (re = (_a2 = G[K + 1]) == null ? void 0 : _a2.object) instanceof Xt && !xs(re); ) _.push(re), K++;
          }
          const F = new Ro(O, ..._);
          x.push(F);
        } else j instanceof ye && x.push(j);
      }
      for (const K of x) L == null ? void 0 : L.addPass(K);
      q && (q.enabled = true), H && (H.enabled = true);
    }
    return () => {
      for (const G of x) L == null ? void 0 : L.removePass(G);
      q && (q.enabled = false), H && (H.enabled = false);
    };
  }, [L, e3, O, q, H]), B.useEffect(() => {
    const x = C.toneMapping;
    return C.toneMapping = oi, () => {
      C.toneMapping = x;
    };
  }, [C]);
  const te = B.useMemo(() => ({ composer: L, normalPass: q, downSamplingPass: H, resolutionScale: s, camera: O, scene: V }), [L, q, H, s, O, V]);
  return B.useImperativeHandle(E, () => L, [L]), a.jsx(Lo.Provider, { value: te, children: a.jsx("group", { ref: W, children: e3 }) });
}));
let Ho = 0;
const Es = /* @__PURE__ */ new WeakMap(), Vr = (e3, t) => function({ blendFunction: r = t == null ? void 0 : t.blendFunction, opacity: s = t == null ? void 0 : t.opacity, ...i }) {
  let c = Es.get(e3);
  if (!c) {
    const h = `@react-three/postprocessing/${e3.name}-${Ho++}`;
    Ps({ [h]: e3 }), Es.set(e3, c = h);
  }
  const l = ct((h) => h.camera), d = Fn.useMemo(() => [...(t == null ? void 0 : t.args) ?? [], ...i.args ?? [{ ...t, ...i }]], [JSON.stringify(i)]);
  return a.jsx(c, { camera: l, "blendMode-blendFunction": r, "blendMode-opacity-value": s, ...i, args: d });
}, No = Vr(co, { blendFunction: 0 }), zo = Vr(xo), ko = Vr(Mo), Er = 64;
function Qo() {
  return a.jsxs("group", { children: [a.jsx(Wo, {}), a.jsx(jo, {}), ci.map((e3) => a.jsx(Yo, { angle: e3 }, e3)), a.jsx(ws, { rotation: Math.PI / 4, height: 30, length: is * 2.1 }), a.jsx(ws, { rotation: -Math.PI / 4, height: 37, length: is * 2.1 }), a.jsx(Vo, {}), a.jsx(Xo, {})] });
}
function jo() {
  const e3 = B.useMemo(() => Array.from({ length: Er }).map((t, r) => {
    const s = r / Er * Math.PI * 2, i = Math.PI * be / Er + 0.35;
    return { angle: s, half: i };
  }), []);
  return a.jsx(lt, { type: "fixed", colliders: false, friction: 1, children: e3.map(({ angle: t, half: r }, s) => a.jsxs("group", { position: [Math.cos(t) * be, et, Math.sin(t) * be], rotation: [0, -t, 0], children: [a.jsx(Ze, { args: [Qe / 2, 0.35, r], position: [0, -0.35, 0] }), [-1, 1].map((i) => a.jsx(Ze, { args: [0.35, 0.55, r], position: [i * Qe / 2, 0.2, 0] }, i))] }, s)) });
}
function Yo({ angle: e3 }) {
  const t = Math.atan2(et, vr), r = Math.hypot(et, vr), i = new ve(Math.cos(e3), 0, Math.sin(e3)).clone().multiplyScalar(be - vr / 2);
  return a.jsx("group", { position: [i.x, et / 2, i.z], rotation: [0, -e3 + Math.PI / 2, 0], children: a.jsxs("group", { rotation: [-t, 0, 0], children: [a.jsxs("mesh", { receiveShadow: true, castShadow: true, children: [a.jsx("boxGeometry", { args: [Qe, 0.6, r] }), a.jsx("meshStandardMaterial", { color: Q.deck, roughness: 0.5, metalness: 0.5, flatShading: true })] }), [-1, 1].map((c) => a.jsxs("mesh", { position: [c * Qe / 2, 0.42, 0], children: [a.jsx("boxGeometry", { args: [0.3, 0.34, r] }), a.jsx("meshStandardMaterial", { color: c > 0 ? Q.magenta : Q.cyan, emissive: c > 0 ? Q.magenta : Q.cyan, emissiveIntensity: 3.2, toneMapped: false })] }, c)), Array.from({ length: Math.floor(r / 7) }).map((c, l) => a.jsxs("mesh", { position: [0, 0.34, -r / 2 + 4 + l * 7], children: [a.jsx("boxGeometry", { args: [3.2, 0.08, 0.7] }), a.jsx("meshStandardMaterial", { color: Q.lime, emissive: Q.lime, emissiveIntensity: 2, toneMapped: false })] }, l)), a.jsxs(lt, { type: "fixed", colliders: false, friction: 1, children: [a.jsx(Ze, { args: [Qe / 2, 0.3, r / 2] }), [-1, 1].map((c) => a.jsx(Ze, { args: [0.3, 0.55, r / 2], position: [c * Qe / 2, 0.5, 0] }, c))] })] }) });
}
function Wo() {
  return a.jsxs("group", { position: [0, et, 0], children: [a.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], receiveShadow: true, children: [a.jsx("ringGeometry", { args: [be - Qe / 2, be + Qe / 2, 128] }), a.jsx("meshStandardMaterial", { color: Q.deck, roughness: 0.45, metalness: 0.6, side: at })] }), [-Qe / 2, Qe / 2].map((e3, t) => a.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.16, 0], children: [a.jsx("ringGeometry", { args: [be + e3 - 0.2, be + e3 + 0.2, 128] }), a.jsx("meshStandardMaterial", { color: t ? Q.magenta : Q.cyan, emissive: t ? Q.magenta : Q.cyan, emissiveIntensity: 3.4, toneMapped: false, side: at })] }, e3)), a.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -0.45, 0], children: [a.jsx("ringGeometry", { args: [be - 1.6, be + 1.6, 96] }), a.jsx("meshStandardMaterial", { color: Q.cyan, emissive: Q.cyan, emissiveIntensity: 1.1, toneMapped: false, side: at })] })] });
}
function ws({ rotation: e3, height: t, length: r }) {
  return a.jsxs("group", { position: [0, t, 0], rotation: [0, e3, 0], children: [a.jsxs("mesh", { receiveShadow: true, castShadow: true, children: [a.jsx("boxGeometry", { args: [Qe, 0.5, r] }), a.jsx("meshStandardMaterial", { color: Q.deck, roughness: 0.45, metalness: 0.6, flatShading: true })] }), [-1, 1].map((s) => a.jsxs("mesh", { position: [s * Qe / 2, 0.3, 0], children: [a.jsx("boxGeometry", { args: [0.22, 0.22, r] }), a.jsx("meshStandardMaterial", { color: s > 0 ? Q.magenta : Q.cyan, emissive: s > 0 ? Q.magenta : Q.cyan, emissiveIntensity: 3.6, toneMapped: false })] }, s)), Array.from({ length: Math.floor(r / 12) }).map((s, i) => a.jsxs("mesh", { position: [0, 0.28, -r / 2 + 6 + i * 12], children: [a.jsx("boxGeometry", { args: [0.5, 0.1, 4] }), a.jsx("meshStandardMaterial", { color: Q.lime, emissive: Q.lime, emissiveIntensity: 2.2, toneMapped: false })] }, i)), a.jsx(Ko, { length: r })] });
}
function Vo() {
  const e3 = B.useMemo(() => Array.from({ length: 16 }).map((t, r) => {
    const s = r / 16 * Math.PI * 2;
    return [Math.cos(s) * be, Math.sin(s) * be];
  }), []);
  return a.jsxs("group", { children: [a.jsxs(as, { limit: e3.length, castShadow: true, children: [a.jsx("cylinderGeometry", { args: [0.7, 1.3, et, 6] }), a.jsx("meshStandardMaterial", { color: Q.deckEdge, roughness: 0.6, metalness: 0.4, flatShading: true }), e3.map(([t, r], s) => a.jsx(os, { position: [t, et / 2, r] }, s))] }), a.jsxs(as, { limit: e3.length, children: [a.jsx("torusGeometry", { args: [1.5, 0.16, 6, 16] }), a.jsx("meshStandardMaterial", { color: Q.cyan, emissive: Q.cyan, emissiveIntensity: 2.8, toneMapped: false }), e3.map(([t, r], s) => a.jsx(os, { position: [t, et - 2.4, r], rotation: [Math.PI / 2, 0, 0] }, s))] })] });
}
const tn = a.jsx("boxGeometry", { args: [0.5, 0.3, 4.5] });
function Xo() {
  const e3 = B.useRef(null), t = B.useMemo(() => Array.from({ length: 14 }).map((r, s) => ({ angle: s / 14 * Math.PI * 2, direction: s % 2 ? 1 : -1, offset: s % 2 ? 1.9 : -1.9, speed: 0.055 + s % 5 * 0.012, color: s % 2 ? Q.magenta : Q.cyan })), []);
  return Ye((r, s) => {
    e3.current && e3.current.children.forEach((i, c) => {
      const l = t[c];
      l.angle += s * l.speed * l.direction;
      const d = be + l.offset;
      i.position.set(Math.cos(l.angle) * d, et + 0.4, Math.sin(l.angle) * d), i.rotation.y = -l.angle + Math.PI / 2;
    });
  }), a.jsx("group", { ref: e3, children: t.map((r, s) => a.jsxs("mesh", { children: [tn, a.jsx("meshStandardMaterial", { color: r.color, emissive: r.color, emissiveIntensity: 6, toneMapped: false })] }, s)) });
}
function Ko({ length: e3 }) {
  const t = B.useRef(null), r = B.useMemo(() => Array.from({ length: 6 }).map((s, i) => ({ t: i / 6 * e3, direction: i % 2 ? 1 : -1, offset: i % 2 ? 1.9 : -1.9, speed: 26 + i % 3 * 9, color: i % 2 ? Q.magenta : Q.cyan })), [e3]);
  return Ye((s, i) => {
    t.current && t.current.children.forEach((c, l) => {
      const d = r[l];
      d.t = (d.t + i * d.speed + e3) % e3, c.position.set(d.offset, 0.45, d.direction > 0 ? d.t - e3 / 2 : e3 / 2 - d.t);
    });
  }), a.jsx("group", { ref: t, children: r.map((s, i) => a.jsxs("mesh", { children: [tn, a.jsx("meshStandardMaterial", { color: s.color, emissive: s.color, emissiveIntensity: 6, toneMapped: false })] }, i)) });
}
const Cs = { A: "01110 10001 10001 11111 10001 10001 10001", B: "11110 10001 10001 11110 10001 10001 11110", C: "01111 10000 10000 10000 10000 10000 01111", D: "11110 10001 10001 10001 10001 10001 11110", E: "11111 10000 10000 11110 10000 10000 11111", F: "11111 10000 10000 11110 10000 10000 10000", G: "01111 10000 10000 10111 10001 10001 01111", H: "10001 10001 10001 11111 10001 10001 10001", I: "11111 00100 00100 00100 00100 00100 11111", J: "00111 00010 00010 00010 00010 10010 01100", K: "10001 10010 10100 11000 10100 10010 10001", L: "10000 10000 10000 10000 10000 10000 11111", M: "10001 11011 10101 10101 10001 10001 10001", N: "10001 11001 10101 10011 10001 10001 10001", O: "01110 10001 10001 10001 10001 10001 01110", P: "11110 10001 10001 11110 10000 10000 10000", Q: "01110 10001 10001 10001 10101 10010 01101", R: "11110 10001 10001 11110 10100 10010 10001", S: "01111 10000 10000 01110 00001 00001 11110", T: "11111 00100 00100 00100 00100 00100 00100", U: "10001 10001 10001 10001 10001 10001 01110", V: "10001 10001 10001 10001 10001 01010 00100", W: "10001 10001 10001 10101 10101 11011 10001", X: "10001 10001 01010 00100 01010 10001 10001", Y: "10001 10001 01010 00100 00100 00100 00100", Z: "11111 00001 00010 00100 01000 10000 11111", 0: "01110 10001 10011 10101 11001 10001 01110", 1: "00100 01100 00100 00100 00100 00100 01110", 2: "01110 10001 00001 00010 00100 01000 11111", 3: "11110 00001 00001 01110 00001 00001 11110", 4: "00010 00110 01010 10010 11111 00010 00010", 5: "11111 10000 11110 00001 00001 10001 01110", 6: "00110 01000 10000 11110 10001 10001 01110", 7: "11111 00001 00010 00100 01000 01000 01000", 8: "01110 10001 10001 01110 10001 10001 01110", 9: "01110 10001 10001 01111 00001 00010 01100", "!": "00100 00100 00100 00100 00100 00000 00100", "?": "01110 10001 00001 00110 00100 00000 00100", ".": "00000 00000 00000 00000 00000 01100 01100", "'": "00100 00100 00000 00000 00000 00000 00000", "&": "01100 10010 10010 01100 10101 10010 01101", "-": "00000 00000 00000 11111 00000 00000 00000", "/": "00001 00010 00010 00100 01000 01000 10000", " ": "00000 00000 00000 00000 00000 00000 00000" }, wr = 5, Cr = 7, Ds = 1;
function Zo(e3) {
  const t = e3.toUpperCase().split(""), r = t.length * wr + Math.max(0, t.length - 1) * Ds, s = [];
  return t.forEach((i, c) => {
    const l = (Cs[i] ?? Cs["?"]).split(" "), d = c * (wr + Ds);
    l.forEach((h, g) => {
      for (let w = 0; w < wr; w += 1) h[w] === "1" && s.push({ x: d + w - (r - 1) / 2, y: Cr - 1 - g - (Cr - 1) / 2 });
    });
  }), { cubes: s, width: r, height: Cr };
}
const tr = new li();
function Bt({ children: e3, position: t = [0, 0, 0], rotation: r = [0, 0, 0], size: s = 1, depth: i = 1, color: c = "#ffffff", emissive: l = "#000000", emissiveIntensity: d = 0, wave: h = 0 }) {
  const g = B.useRef(null), { cubes: w } = B.useMemo(() => Zo(e3), [e3]), A = (E) => {
    g.current && (w.forEach((C, b) => {
      const z = h ? Math.sin(E * 1.6 + C.x * 0.35) * h : 0;
      tr.position.set(C.x * s, C.y * s + z, 0), tr.scale.setScalar(1), tr.updateMatrix(), g.current.setMatrixAt(b, tr.matrix);
    }), g.current.instanceMatrix.needsUpdate = true);
  };
  return B.useLayoutEffect(() => A(0)), Ye(({ clock: E }) => {
    h && A(E.elapsedTime);
  }), a.jsxs("instancedMesh", { ref: g, args: [void 0, void 0, w.length], position: t, rotation: r, castShadow: true, receiveShadow: true, children: [a.jsx("boxGeometry", { args: [s * 0.96, s * 0.96, i] }), a.jsx("meshStandardMaterial", { color: c, emissive: l, emissiveIntensity: d, roughness: 0.35, metalness: 0.1, flatShading: true })] });
}
const we = { x: 208, z: 0, y: 13, radiusX: 58, radiusZ: 40 }, or = [Math.PI * 0.5, Math.PI, Math.PI * 1.5], Dr = 9, _o = 16, Ae = { running: false, checkpoint: 0, time: 0, armed: true };
function Ss(e3) {
  return { x: we.x + Math.cos(e3) * we.radiusX, z: we.z + Math.sin(e3) * we.radiusZ };
}
const rr = (e3, t, r, s) => {
  const i = e3 - r.x, c = t - r.z;
  return i * i + c * c < s * s;
};
function Jo(e3, t, r, s) {
  const i = Ss(0);
  if (Ae.running) {
    Ae.time += r;
    const c = or[Ae.checkpoint];
    c !== void 0 && rr(e3, t, Ss(c), Dr) && (Ae.checkpoint += 1), Ae.checkpoint >= or.length && rr(e3, t, i, Dr) && (s.finishLap(Ae.time), Ae.running = false, Ae.checkpoint = 0, Ae.time = 0, Ae.armed = false), Math.hypot(e3 - we.x, t - we.z) > we.radiusX + 70 && (Ae.running = false, Ae.checkpoint = 0, Ae.time = 0);
  } else Ae.armed && rr(e3, t, i, Dr) && (Ae.running = true, Ae.checkpoint = 0, Ae.time = 0, Ae.armed = false);
  !Ae.armed && !rr(e3, t, i, _o) && (Ae.armed = true), le.raceRunning = Ae.running, le.raceTime = Ae.time, le.raceCheckpoint = Ae.checkpoint, le.raceTotal = or.length;
}
const je = 13, Sr = 72;
function It(e3) {
  return new ve(we.x + Math.cos(e3) * we.radiusX, we.y, we.z + Math.sin(e3) * we.radiusZ);
}
function qo() {
  return a.jsxs("group", { children: [a.jsx($o, {}), a.jsx(ec, {}), a.jsx(tc, {}), a.jsx(rc, {}), a.jsx(sc, {})] });
}
function $o() {
  const e3 = B.useMemo(() => {
    const t = [];
    for (let r = 0; r < Sr; r += 1) {
      const s = r / Sr * Math.PI * 2, i = (r + 1) / Sr * Math.PI * 2, c = It(s), l = It(i), d = c.clone().lerp(l, 0.5), h = c.distanceTo(l);
      t.push({ position: d, yaw: Math.atan2(l.x - c.x, l.z - c.z), length: h + 0.5 });
    }
    return t;
  }, []);
  return a.jsxs("group", { children: [e3.map((t, r) => a.jsxs("group", { position: t.position, rotation: [0, t.yaw, 0], children: [a.jsxs("mesh", { receiveShadow: true, children: [a.jsx("boxGeometry", { args: [je, 0.5, t.length] }), a.jsx("meshStandardMaterial", { color: Q.deck, roughness: 0.5, metalness: 0.55, flatShading: true })] }), [-1, 1].map((s) => a.jsxs("mesh", { position: [s * je / 2, 0.5, 0], children: [a.jsx("boxGeometry", { args: [0.34, 0.7, t.length] }), a.jsx("meshStandardMaterial", { color: s > 0 ? Q.amber : Q.cyan, emissive: s > 0 ? Q.amber : Q.cyan, emissiveIntensity: 3.2, toneMapped: false })] }, s))] }, r)), a.jsx(lt, { type: "fixed", colliders: false, friction: 1, children: e3.map((t, r) => a.jsxs("group", { position: t.position, rotation: [0, t.yaw, 0], children: [a.jsx(Ze, { args: [je / 2, 0.25, t.length / 2] }), [-1, 1].map((s) => a.jsx(Ze, { args: [0.34, 0.9, t.length / 2], position: [s * je / 2, 0.9, 0] }, s))] }, r)) }), Array.from({ length: 10 }).map((t, r) => {
    const s = It(r / 10 * Math.PI * 2);
    return a.jsxs("mesh", { position: [s.x, we.y / 2 - 4, s.z], children: [a.jsx("cylinderGeometry", { args: [0.8, 1.5, we.y + 8, 6] }), a.jsx("meshStandardMaterial", { color: Q.deckEdge, roughness: 0.6, flatShading: true })] }, r);
  })] });
}
function ec() {
  const e3 = new ve(be, et, 0), t = It(Math.PI), r = e3.clone().lerp(t, 0.5), s = e3.distanceTo(t), i = Math.atan2(t.x - e3.x, t.z - e3.z), c = Math.asin((t.y - e3.y) / s);
  return a.jsx("group", { position: r, rotation: [0, i, 0], children: a.jsxs("group", { rotation: [-c, 0, 0], children: [a.jsxs("mesh", { receiveShadow: true, children: [a.jsx("boxGeometry", { args: [je, 0.5, s] }), a.jsx("meshStandardMaterial", { color: Q.deck, roughness: 0.5, metalness: 0.55, flatShading: true })] }), [-1, 1].map((l) => a.jsxs("mesh", { position: [l * je / 2, 0.45, 0], children: [a.jsx("boxGeometry", { args: [0.3, 0.5, s] }), a.jsx("meshStandardMaterial", { color: Q.amber, emissive: Q.amber, emissiveIntensity: 3, toneMapped: false })] }, l)), a.jsxs(lt, { type: "fixed", colliders: false, friction: 1, children: [a.jsx(Ze, { args: [je / 2, 0.25, s / 2] }), [-1, 1].map((l) => a.jsx(Ze, { args: [0.3, 0.8, s / 2], position: [l * je / 2, 0.8, 0] }, l))] })] }) });
}
function tc() {
  const e3 = It(0), t = Math.atan2(-Math.sin(0) * we.radiusX, Math.cos(0) * we.radiusZ);
  return a.jsxs("group", { position: [e3.x, e3.y, e3.z], rotation: [0, t, 0], children: [[-1, 1].map((r) => a.jsxs("mesh", { position: [r * je / 2, 4, 0], castShadow: true, children: [a.jsx("boxGeometry", { args: [0.8, 8, 0.8] }), a.jsx("meshStandardMaterial", { color: Q.deckEdge, roughness: 0.5, metalness: 0.5, flatShading: true })] }, r)), a.jsxs("mesh", { position: [0, 8, 0], children: [a.jsx("boxGeometry", { args: [je + 1, 0.7, 0.7] }), a.jsx("meshStandardMaterial", { color: Q.lime, emissive: Q.lime, emissiveIntensity: 1.1 })] }), Array.from({ length: 10 }).map((r, s) => a.jsxs("mesh", { position: [-je / 2 + 0.7 + s * 1.4, 0.3, 0], children: [a.jsx("boxGeometry", { args: [1.4, 0.08, 2.2] }), a.jsx("meshStandardMaterial", { color: s % 2 ? "#f2f5ff" : "#141634", emissive: s % 2 ? "#f2f5ff" : "#000000", emissiveIntensity: s % 2 ? 0.5 : 0 })] }, s)), a.jsx(Bt, { position: [0, 10.5, 0], rotation: [0, Math.PI / 2, 0], size: 0.42, depth: 0.4, color: "#dfe6ff", emissive: Q.lime, emissiveIntensity: 0.9, children: "SPEEDWAY" }), a.jsx("pointLight", { position: [0, 7, 0], color: Q.lime, intensity: 22, distance: 34, decay: 2 })] });
}
function rc() {
  const e3 = B.useRef(null);
  return Ye(({ clock: t }) => {
    e3.current && e3.current.children.forEach((r, s) => {
      const i = le.raceCheckpoint === s && le.raceRunning, l = r.children[0].material;
      l.emissiveIntensity = i ? 3 + Math.sin(t.elapsedTime * 6) * 1.4 : le.raceRunning ? 0.5 : 1.4;
    });
  }), a.jsx("group", { ref: e3, children: or.map((t, r) => {
    const s = It(t), i = Math.atan2(-Math.sin(t) * we.radiusX, Math.cos(t) * we.radiusZ);
    return a.jsx("group", { position: [s.x, s.y, s.z], rotation: [0, i, 0], children: a.jsxs("mesh", { position: [0, 3.4, 0], children: [a.jsx("boxGeometry", { args: [je, 0.5, 0.5] }), a.jsx("meshStandardMaterial", { color: Q.magenta, emissive: Q.magenta, emissiveIntensity: 1.4, toneMapped: false })] }) }, r);
  }) });
}
function sc() {
  return Ye((e3, t) => {
    Jo(le.x, le.z, t, St);
  }), null;
}
function nc({ zone: e3 }) {
  const [t, r] = e3.position, s = br((w) => w.activeZone === e3.id), i = br((w) => w.visited.includes(e3.id)), c = B.useRef(null), l = B.useRef(null), d = B.useRef(null), h = B.useMemo(() => Math.atan2(-t, -r), [t, r]), g = B.useMemo(() => Array.from({ length: 10 }).map((w, A) => {
    const E = A / 10 * Math.PI * 2 + Math.PI / 10;
    return [Math.cos(E) * (e3.radius + 4), Math.sin(E) * (e3.radius + 4)];
  }), [e3.radius]);
  return Ye(({ clock: w }) => {
    const A = w.elapsedTime;
    c.current && (c.current.position.y = 16 + Math.sin(A * 0.9) * 0.5, c.current.rotation.y = h + Math.sin(A * 0.4) * 0.05);
    const E = s ? 1.5 + Math.sin(A * 4) * 0.35 : 1;
    if (l.current) {
      const C = l.current.material;
      C.opacity = 0.1 * E + (i ? 0.05 : 0);
    }
    d.current && (d.current.intensity = 52 * E);
  }), a.jsxs(a.Fragment, { children: [a.jsxs(lt, { type: "fixed", colliders: false, position: [t, 0, r], children: [a.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.05, 0], receiveShadow: true, children: [a.jsx("circleGeometry", { args: [e3.radius + 6, 56] }), a.jsx("meshStandardMaterial", { color: "#4a4688", roughness: 0.85 })] }), a.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.07, 0], receiveShadow: true, children: [a.jsx("ringGeometry", { args: [e3.radius - 1.2, e3.radius, 56] }), a.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.glow, emissiveIntensity: s ? 2.6 : 1.7, toneMapped: false })] }), g.map(([w, A], E) => a.jsx(ui, { args: [3.5, 0.8], position: [w, 3.5, A] }, E))] }), a.jsxs("group", { position: [t, 0, r], children: [g.map(([w, A], E) => a.jsxs("group", { position: [w, 0, A], children: [a.jsxs("mesh", { castShadow: true, receiveShadow: true, position: [0, 3.4, 0], children: [a.jsx("boxGeometry", { args: [1.5, 6.8, 1.5] }), a.jsx("meshStandardMaterial", { color: "#37336b", roughness: 0.7, flatShading: true })] }), a.jsxs("mesh", { position: [0, 7.2, 0], children: [a.jsx("octahedronGeometry", { args: [0.85, 0] }), a.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.color, emissiveIntensity: 3.2, toneMapped: false })] })] }, E)), a.jsxs("mesh", { ref: l, position: [0, 22, 0], children: [a.jsx("cylinderGeometry", { args: [e3.radius - 2, e3.radius + 1, 44, 24, 1, true] }), a.jsx("meshBasicMaterial", { color: e3.glow, transparent: true, opacity: 0.12, side: at, depthWrite: false, toneMapped: false })] }), a.jsx("pointLight", { ref: d, position: [0, 12, 0], color: e3.color, distance: 70, decay: 2 }), a.jsx("group", { ref: c, children: a.jsx(Bt, { size: 0.95, depth: 1.2, color: e3.glow, emissive: e3.color, emissiveIntensity: s ? 2.2 : 1.1, wave: 0.25, children: e3.sign }) })] })] });
}
function ic({ position: e3 }) {
  const t = B.useMemo(() => {
    const r = [];
    for (let s = 0; s < 4; s += 1) for (let i = 0; i <= s; i += 1) r.push([e3[0] + (i - s / 2) * 2.4, 1.4, e3[1] + s * 2.2 - 3]);
    return r;
  }, [e3]);
  return a.jsx(a.Fragment, { children: t.map((r, s) => a.jsx(ac, { position: r }, s)) });
}
function ac({ position: e3 }) {
  const t = B.useRef(null), r = B.useRef(new ve(...e3));
  return Ye(() => {
    const s = t.current;
    if (!s) return;
    const i = s.translation();
    (i.y < -6 || new ve(i.x, 0, i.z).distanceTo(new ve(r.current.x, 0, r.current.z)) > 40) && (s.setTranslation({ x: r.current.x, y: r.current.y + 6, z: r.current.z }, true), s.setLinvel({ x: 0, y: 0, z: 0 }, true), s.setAngvel({ x: 0, y: 0, z: 0 }, true));
  }), a.jsxs(lt, { ref: t, position: e3, colliders: false, mass: 0.4, restitution: 0.35, linearDamping: 0.4, angularDamping: 0.6, children: [a.jsx(Ze, { args: [0.45, 1.3, 0.45] }), a.jsxs("mesh", { castShadow: true, position: [0, -1.15, 0], children: [a.jsx("boxGeometry", { args: [1.1, 0.3, 1.1] }), a.jsx("meshStandardMaterial", { color: "#3a3468", roughness: 0.6, flatShading: true })] }), a.jsxs("mesh", { castShadow: true, position: [0, -0.5, 0], children: [a.jsx("cylinderGeometry", { args: [0.16, 0.24, 1, 6] }), a.jsx("meshStandardMaterial", { color: "#ffc861", metalness: 0.8, roughness: 0.25, flatShading: true })] }), a.jsxs("mesh", { castShadow: true, position: [0, 0.45, 0], children: [a.jsx("cylinderGeometry", { args: [0.62, 0.3, 1.2, 8] }), a.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ff9d2e", emissiveIntensity: 0.9, metalness: 0.85, roughness: 0.2, flatShading: true })] }), [-0.72, 0.72].map((s) => a.jsxs("mesh", { position: [s, 0.5, 0], rotation: [0, 0, s > 0 ? -0.5 : 0.5], children: [a.jsx("torusGeometry", { args: [0.3, 0.08, 6, 10, Math.PI] }), a.jsx("meshStandardMaterial", { color: "#ffd67a", metalness: 0.85, roughness: 0.2 })] }, s))] });
}
function Mr({ position: e3, rotation: t = 0 }) {
  return a.jsxs(lt, { type: "fixed", colliders: "hull", position: [e3[0], 0, e3[1]], rotation: [0, t, 0], children: [a.jsxs("mesh", { castShadow: true, receiveShadow: true, rotation: [-0.3, 0, 0], position: [0, 1.3, 0], children: [a.jsx("boxGeometry", { args: [9, 0.6, 12] }), a.jsx("meshStandardMaterial", { color: "#5b56a4", roughness: 0.7, flatShading: true })] }), a.jsxs("mesh", { position: [0, 1.72, -5.4], rotation: [-0.3, 0, 0], children: [a.jsx("boxGeometry", { args: [9, 0.12, 1.2] }), a.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ffae3a", emissiveIntensity: 2.5, toneMapped: false })] })] });
}
function Ms({ position: e3 }) {
  const t = B.useMemo(() => {
    const r = [];
    for (let s = 0; s < 3; s += 1) {
      const i = 3 - s;
      for (let c = 0; c < i; c += 1) r.push([e3[0] + (c - (i - 1) / 2) * 1.7, 0.85 + s * 1.6, e3[1]]);
    }
    return r;
  }, [e3]);
  return a.jsx(a.Fragment, { children: t.map((r, s) => a.jsxs(lt, { position: r, colliders: false, mass: 0.5, restitution: 0.2, children: [a.jsx(Ze, { args: [0.78, 0.78, 0.78] }), a.jsxs("mesh", { castShadow: true, receiveShadow: true, children: [a.jsx("boxGeometry", { args: [1.56, 1.56, 1.56] }), a.jsx("meshStandardMaterial", { color: "#6d5cc4", roughness: 0.65, flatShading: true })] }), a.jsxs("mesh", { children: [a.jsx("boxGeometry", { args: [1.62, 0.16, 1.62] }), a.jsx("meshStandardMaterial", { color: "#c3b4ff", emissive: "#8f7bff", emissiveIntensity: 1.4, toneMapped: false })] })] }, s)) });
}
const oc = () => B.useRef({ wheels: [null, null, null, null], hubs: [null, null], thrusters: [null, null], thrusterLight: null }), rn = B.createContext(Us[0]), Et = () => B.useContext(rn);
function dr(e3, t = 0.14) {
  return `#${new Tt(e3).lerp(new Tt("#ffffff"), t).getHexString()}`;
}
function cc(e3, { speed: t, steer: r, throttle: s, brake: i, delta: c, paint: l }) {
  const d = t * c * 2.2;
  e3.wheels.forEach((C) => {
    C && (C.rotation.x -= d);
  });
  const h = 1 - Math.pow(2e-4, c);
  e3.hubs.forEach((C) => {
    C && (C.rotation.y = $e.lerp(C.rotation.y, r * 0.42, h));
  });
  const g = i ? 1 : Math.max(s, 0), w = 3 + g * 9 + Math.min(Math.abs(t) / 26, 1) * 4, A = 1 - Math.pow(4e-3, c), E = i ? "#ff2a5f" : l.trim;
  e3.thrusters.forEach((C) => {
    if (!C) return;
    const b = C.material;
    b.emissiveIntensity = $e.lerp(b.emissiveIntensity, w, A), b.color.set(E), b.emissive.set(E);
  }), e3.thrusterLight && (e3.thrusterLight.intensity = $e.lerp(e3.thrusterLight.intensity, 8 + g * 26, A), e3.thrusterLight.color.set(E));
}
function it({ position: e3, args: t, color: r, intensity: s = 4, rotation: i }) {
  const c = Et(), l = r ?? c.trim;
  return a.jsxs("mesh", { position: e3, rotation: i, children: [a.jsx("boxGeometry", { args: t }), a.jsx("meshStandardMaterial", { color: l, emissive: l, emissiveIntensity: s, toneMapped: false })] });
}
function lc({ rig: e3, paint: t, design: r }) {
  return a.jsx(rn.Provider, { value: t, children: a.jsxs("group", { children: [a.jsx(uc, {}), a.jsx(dc, {}), a.jsx(hc, { rig: e3 }), a.jsx(fc, {}), a.jsx(vc, { rig: e3, covered: r === "hover" }), a.jsx(gc, { design: r })] }) });
}
function uc() {
  const e3 = Et(), t = dr(e3.shell);
  return a.jsxs(a.Fragment, { children: [a.jsxs("mesh", { castShadow: true, receiveShadow: true, position: [0, 0.02, 0], children: [a.jsx("boxGeometry", { args: [1.96, 0.44, 4] }), a.jsx("meshStandardMaterial", { color: e3.shell, roughness: 0.28, metalness: 0.75, flatShading: true })] }), a.jsxs("mesh", { castShadow: true, position: [0, -0.06, -2.14], children: [a.jsx("boxGeometry", { args: [1.62, 0.28, 0.72] }), a.jsx("meshStandardMaterial", { color: e3.shell, roughness: 0.3, metalness: 0.7, flatShading: true })] }), a.jsxs("mesh", { castShadow: true, position: [0, -0.13, -2.62], children: [a.jsx("boxGeometry", { args: [1.24, 0.16, 0.42] }), a.jsx("meshStandardMaterial", { color: t, roughness: 0.3, metalness: 0.7, flatShading: true })] }), [-0.94, 0.94].map((r) => a.jsxs("mesh", { castShadow: true, position: [r, 0.16, 1.28], children: [a.jsx("boxGeometry", { args: [0.42, 0.5, 1.5] }), a.jsx("meshStandardMaterial", { color: t, roughness: 0.3, metalness: 0.7, flatShading: true })] }, r)), a.jsxs("mesh", { castShadow: true, position: [0, 0.42, -0.16], rotation: [0.06, 0, 0], children: [a.jsx("boxGeometry", { args: [1.32, 0.46, 1.9] }), a.jsx("meshStandardMaterial", { color: "#0d1b3a", emissive: e3.trim, emissiveIntensity: 0.35, roughness: 0.06, metalness: 0.9, transparent: true, opacity: 0.86 })] })] });
}
function dc() {
  const e3 = Et();
  return a.jsxs(a.Fragment, { children: [[-1, 1].map((t) => a.jsx(it, { position: [t, 0.06, 0.1], args: [0.06, 0.1, 3.5] }, t)), a.jsx(it, { position: [0, -0.2, 0.1], args: [1.3, 0.06, 3.2], intensity: 2.4, color: e3.accent }), a.jsx(it, { position: [0, -0.13, -2.82], args: [1.16, 0.09, 0.09], intensity: 7 }), a.jsx(it, { position: [0, 0.25, 1.5], args: [0.9, 0.07, 0.07], intensity: 5, color: e3.accent }), a.jsx(it, { position: [0, 0.16, 2], args: [1.7, 0.12, 0.08], intensity: 6, color: e3.accent })] });
}
function hc({ rig: e3 }) {
  const t = Et();
  return a.jsxs(a.Fragment, { children: [[-0.52, 0.52].map((r, s) => a.jsxs("mesh", { position: [r, 0.02, 2.06], rotation: [Math.PI / 2, 0, 0], ref: (i) => e3.current.thrusters[s] = i, children: [a.jsx("cylinderGeometry", { args: [0.26, 0.26, 0.12, 12] }), a.jsx("meshStandardMaterial", { color: t.trim, emissive: t.trim, emissiveIntensity: 4, toneMapped: false })] }, r)), a.jsx("pointLight", { position: [0, 0.1, 2.5], distance: 14, decay: 2, intensity: 10, color: t.trim, ref: (r) => e3.current.thrusterLight = r })] });
}
function fc() {
  const e3 = Et();
  return a.jsxs(a.Fragment, { children: [[-0.5, 0.5].map((t) => a.jsxs("mesh", { position: [t, -0.06, -2.48], children: [a.jsx("boxGeometry", { args: [0.34, 0.12, 0.1] }), a.jsx("meshStandardMaterial", { color: "#dff4ff", emissive: "#bfe9ff", emissiveIntensity: 6, toneMapped: false })] }, t)), a.jsx("spotLight", { position: [0, 0.1, -2.3], "target-position": [0, -1, -16], angle: 0.6, penumbra: 0.7, intensity: 44, distance: 34, color: "#d8f2ff" }), a.jsx("pointLight", { position: [0, -0.4, 0], distance: 9, decay: 2, intensity: 9, color: e3.accent })] });
}
function gc({ design: e3 }) {
  const t = Et();
  return e3 === "stripe" ? a.jsx(a.Fragment, { children: [-0.34, 0.34].map((r) => a.jsxs("mesh", { position: [r, 0.25, -0.1], children: [a.jsx("boxGeometry", { args: [0.26, 0.04, 3.9] }), a.jsx("meshStandardMaterial", { color: t.trim, emissive: t.trim, emissiveIntensity: 2.6, toneMapped: false })] }, r)) }) : e3 === "wing" ? a.jsxs(a.Fragment, { children: [[-0.78, 0.78].map((r) => a.jsxs("mesh", { castShadow: true, position: [r, 0.5, 1.86], children: [a.jsx("boxGeometry", { args: [0.12, 0.5, 0.3] }), a.jsx("meshStandardMaterial", { color: dr(t.shell), roughness: 0.4, metalness: 0.6 })] }, r)), a.jsxs("mesh", { castShadow: true, position: [0, 0.76, 1.9], children: [a.jsx("boxGeometry", { args: [2.1, 0.1, 0.6] }), a.jsx("meshStandardMaterial", { color: t.shell, roughness: 0.35, metalness: 0.7, flatShading: true })] }), a.jsx(it, { position: [0, 0.82, 1.9], args: [2, 0.05, 0.12], intensity: 5 })] }) : e3 === "hover" ? a.jsx(a.Fragment, { children: [{ position: [0, -0.24, -1.6], args: [1.9, 0.1, 0.12] }, { position: [0, -0.24, 1.8], args: [1.9, 0.1, 0.12] }, { position: [-1, -0.24, 0.1], args: [0.12, 0.1, 3.6] }, { position: [1, -0.24, 0.1], args: [0.12, 0.1, 3.6] }].map((r, s) => a.jsx(it, { position: r.position, args: r.args, color: t.accent, intensity: 4 }, s)) }) : e3 === "spike" ? a.jsxs(a.Fragment, { children: [a.jsxs("mesh", { castShadow: true, position: [0, 0.78, 0.5], children: [a.jsx("boxGeometry", { args: [0.1, 0.42, 1.3] }), a.jsx("meshStandardMaterial", { color: t.shell, roughness: 0.35, metalness: 0.7, flatShading: true })] }), a.jsx(it, { position: [0, 0.99, 0.5], args: [0.06, 0.06, 1.2], intensity: 6 }), [-1, 1].map((r) => a.jsxs("mesh", { castShadow: true, position: [r, -0.08, -2], rotation: [0, 0, r > 0 ? -0.2 : 0.2], children: [a.jsx("boxGeometry", { args: [0.5, 0.07, 0.5] }), a.jsx("meshStandardMaterial", { color: dr(t.shell), roughness: 0.4, metalness: 0.6 })] }, r)), [-1.05, 1.05].map((r) => a.jsx(it, { position: [r, -0.05, -2.16], args: [0.42, 0.05, 0.06], intensity: 5 }, r))] }) : null;
}
function vc({ rig: e3, covered: t }) {
  const r = Et(), s = [[-1.02, -0.3, -1.32], [1.02, -0.3, -1.32], [-1.02, -0.3, 1.36], [1.02, -0.3, 1.36]];
  return a.jsx(a.Fragment, { children: s.map(([i, c, l], d) => a.jsxs("group", { position: [i, c, l], ref: (h) => {
    d < 2 && (e3.current.hubs[d] = h);
  }, children: [a.jsxs("group", { ref: (h) => e3.current.wheels[d] = h, children: [a.jsxs("mesh", { castShadow: true, rotation: [0, 0, Math.PI / 2], children: [a.jsx("cylinderGeometry", { args: [0.54, 0.54, 0.36, 14] }), a.jsx("meshStandardMaterial", { color: "#0c0e1f", roughness: 0.9, flatShading: true })] }), a.jsxs("mesh", { rotation: [Math.PI / 2, 0, 0], position: [i > 0 ? 0.19 : -0.19, 0, 0], children: [a.jsx("torusGeometry", { args: [0.34, 0.055, 8, 20] }), a.jsx("meshStandardMaterial", { color: r.trim, emissive: r.trim, emissiveIntensity: 4.5, toneMapped: false })] }), a.jsxs("mesh", { rotation: [0, 0, Math.PI / 2], position: [i > 0 ? 0.2 : -0.2, 0, 0], children: [a.jsx("cylinderGeometry", { args: [0.16, 0.16, 0.06, 8] }), a.jsx("meshStandardMaterial", { color: "#8fa8ff", metalness: 0.9, roughness: 0.2, flatShading: true })] })] }), t && a.jsxs("mesh", { rotation: [0, 0, Math.PI / 2], position: [i > 0 ? 0.3 : -0.3, 0, 0], children: [a.jsx("cylinderGeometry", { args: [0.6, 0.6, 0.06, 12] }), a.jsx("meshStandardMaterial", { color: dr(r.shell, 0.2), metalness: 0.8, roughness: 0.25, flatShading: true })] })] }, d)) });
}
const sr = [0, 1.6, 11], pc = 46, Ac = 26, mc = 26, xc = 2.5, Bs = 0.86, Ec = 3.4, wc = 7, Cc = 0.75, xt = new ve(), Br = new ve(), Ir = new ve(), Ct = new ve(), Tr = new Ls(), yr = new ve(), Rr = new ve(), kt = new ve(), nr = new ve(), Is = new Ls(), ir = new ve(), Dc = new ve(0, 5.6, 0), Sc = new ve(0, 1.2, 0);
function Mc(e3, { lateral: t, speed: r, delta: s }) {
  if (t > Ec && r > wc) {
    e3.held += s, e3.lapsed = 0;
    const c = Math.min(1 + Math.floor(e3.held), 8);
    e3.chain += t * r * 0.12 * c * s, le.driftMultiplier = c, le.driftAngle = Math.min(t / 12, 1), le.driftActive = true;
  } else e3.chain > 0 ? (e3.lapsed += s, le.driftAngle = Math.max(le.driftAngle - s * 2, 0), e3.lapsed >= Cc && (St.bankDrift(e3.chain), e3.chain = 0, e3.held = 0, e3.lapsed = 0, le.driftMultiplier = 1, le.driftActive = false)) : (le.driftActive = false, le.driftMultiplier = 1, le.driftAngle = Math.max(le.driftAngle - s * 2, 0));
  le.driftChain = e3.chain;
}
function Bc({ onMove: e3 }) {
  const t = B.useRef(null), r = B.useRef(null), s = oc(), i = br((A) => A.garage), c = di[i.paint] ?? Us[0], l = B.useRef(c);
  l.current = c;
  const d = B.useRef(false), h = B.useRef(new ve()), g = B.useRef({ chain: 0, held: 0, lapsed: 0 }), w = () => {
    const A = t.current;
    A && (A.setTranslation({ x: sr[0], y: sr[1], z: sr[2] }, true), A.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true), A.setLinvel({ x: 0, y: 0, z: 0 }, true), A.setAngvel({ x: 0, y: 0, z: 0 }, true));
  };
  return Ye((A, E) => {
    var _a2;
    const C = t.current;
    if (!C) return;
    const b = Math.min(E, 1 / 30), z = hi(), N = C.rotation();
    Tr.set(N.x, N.y, N.z, N.w), xt.set(0, 0, -1).applyQuaternion(Tr), Br.set(1, 0, 0).applyQuaternion(Tr);
    const V = C.linvel();
    Ir.set(V.x, V.y, V.z);
    const O = Ir.dot(xt), L = Ir.dot(Br), q = C.mass(), H = z.forward - z.backward;
    if (H !== 0 && Math.abs(O) < mc) {
      const F = H > 0 ? pc : -Ac;
      Ct.copy(xt).multiplyScalar(F * q * b), C.applyImpulse(Ct, true);
    }
    const W = z.brake ? Bs * 0.25 : Bs;
    if (Ct.copy(Br).multiplyScalar(-L * W * q), C.applyImpulse(Ct, true), H === 0 || z.brake) {
      const F = z.brake ? H > 0 ? 0.75 : 3.2 : 0.9;
      Ct.copy(xt).multiplyScalar(-O * F * q * b), C.applyImpulse(Ct, true);
    }
    const te = z.left - z.right, x = Math.min(Math.abs(O) / 6, 1), y = H !== 0 ? Math.max(x, 0.4) : x, G = O < -0.4 ? -1 : 1, K = xc * (z.brake ? 1.4 : 1);
    C.setAngvel({ x: 0, y: te * K * y * G, z: 0 }, true);
    const j = C.translation();
    if (kt.set(j.x, j.y, j.z), (z.reset || j.y < -14) && w(), le.x = kt.x, le.z = kt.z, le.heading = Math.atan2(xt.x, xt.z), le.speed = Math.abs(O), St.setSpeed(le.speed), e3 == null ? void 0 : e3(kt), Mc(g.current, { lateral: Math.abs(L), speed: Math.abs(O), delta: b }), r.current) {
      const F = $e.clamp(-te * x * 0.16, -0.2, 0.2), re = $e.clamp(-H * 0.05, -0.08, 0.08), X = 1 - Math.pow(5e-4, b), Fe = 1 - Math.pow(2e-3, b);
      r.current.rotation.z = $e.lerp(r.current.rotation.z, F, X), r.current.rotation.x = $e.lerp(r.current.rotation.x, re, Fe);
    }
    cc(s.current, { speed: O, steer: te, throttle: H, brake: z.brake, delta: b, paint: l.current });
    const _ = (_a2 = r.current) == null ? void 0 : _a2.parent;
    _ ? (_.getWorldPosition(nr), _.getWorldQuaternion(Is), ir.set(0, 0, -1).applyQuaternion(Is)) : (nr.copy(kt), ir.copy(xt)), yr.copy(nr).addScaledVector(ir, -11 - x * 3).add(Dc), Rr.copy(nr).addScaledVector(ir, 6).add(Sc), d.current ? (A.camera.position.lerp(yr, 1 - Math.pow(22e-4, b)), h.current.lerp(Rr, 1 - Math.pow(6e-4, b))) : (A.camera.position.copy(yr), h.current.copy(Rr), d.current = true), A.camera.lookAt(h.current);
  }), a.jsxs(lt, { ref: t, position: sr, colliders: false, mass: 1, friction: 0.6, restitution: 0.1, linearDamping: 0.35, angularDamping: 4, enabledRotations: [false, true, false], ccd: true, name: "player", children: [a.jsx(Ze, { args: [1, 0.5, 2.05], density: 2.6 }), a.jsx("group", { ref: r, children: a.jsx(lc, { rig: s, paint: c, design: i.design }) })] });
}
function Oc() {
  const e3 = B.useRef(null);
  B.useEffect(() => {
    St.hydrateGarage();
  }, []);
  const t = B.useCallback((r) => {
    let s = null;
    for (const i of Pr) {
      const [c, l] = i.position;
      if (Math.hypot(r.x - c, r.z - l) < i.radius + 9) {
        s = i.id;
        break;
      }
    }
    s !== e3.current && (e3.current && St.leaveZone(e3.current), s && St.enterZone(s), e3.current = s);
  }, []);
  return a.jsxs(a.Fragment, { children: [a.jsx(Ic, {}), a.jsx("color", { attach: "background", args: [Lt.fog] }), a.jsx("fogExp2", { attach: "fog", args: [Lt.fog, 75e-4] }), a.jsx("hemisphereLight", { args: [Lt.horizon, Lt.ground, 1.55] }), a.jsx("ambientLight", { intensity: 0.5, color: "#6c5fbb" }), a.jsx("directionalLight", { position: [48, 70, 28], intensity: 1.9, color: Lt.moon, castShadow: true, "shadow-mapSize": [2048, 2048], "shadow-camera-near": 1, "shadow-camera-far": 220, "shadow-camera-left": -90, "shadow-camera-right": 90, "shadow-camera-top": 90, "shadow-camera-bottom": -90, "shadow-bias": -6e-4 }), a.jsx(ra, { radius: 260, depth: 70, count: 4200, factor: 5, fade: true, speed: 0.6 }), a.jsx($i, { preset: "night" }), a.jsx(Tc, {}), a.jsxs(fi, { timeStep: 1 / 60, interpolate: true, gravity: [0, -30, 0], children: [a.jsx(gi, {}), Pr.map((r) => a.jsx(nc, { zone: r }, r.id)), a.jsx(yc, {}), a.jsx(Ms, { position: [-15, 4] }), a.jsx(Ms, { position: [15, 4] }), a.jsx(ic, { position: [-54, 54] }), a.jsx(Mr, { position: [0, -48], rotation: 0 }), a.jsx(Mr, { position: [56, 0], rotation: Math.PI / 2 }), a.jsx(Mr, { position: [0, 50], rotation: Math.PI }), a.jsx(Qo, {}), a.jsx(qo, {}), a.jsx(Bc, { onMove: t })] }), a.jsx(vi, {}), a.jsx(Rc, {}), a.jsxs(Go, { multisampling: 0, children: [a.jsx(No, { intensity: 1.25, luminanceThreshold: 0.75, luminanceSmoothing: 0.28, mipmapBlur: true, radius: 0.72 }), a.jsx(ko, { offset: 0.28, darkness: 0.72 }), a.jsx(zo, {})] })] });
}
function Ic() {
  const e3 = ct((r) => r.camera), t = ct((r) => r.size);
  return B.useEffect(() => {
    const r = t.width / t.height, s = $e.degToRad(78), i = 2 * Math.atan(Math.tan(s / 2) / Math.max(r, 0.3));
    e3.fov = $e.clamp($e.radToDeg(i), 45, 82), e3.updateProjectionMatrix();
  }, [e3, t]), null;
}
function Tc() {
  return a.jsxs("group", { position: [130, 82, -170], children: [a.jsxs("mesh", { children: [a.jsx("sphereGeometry", { args: [16, 24, 24] }), a.jsx("meshBasicMaterial", { color: "#e8e6ff", toneMapped: false })] }), a.jsxs("mesh", { children: [a.jsx("sphereGeometry", { args: [22, 20, 20] }), a.jsx("meshBasicMaterial", { color: "#8f7bff", transparent: true, opacity: 0.16, depthWrite: false })] })] });
}
function yc() {
  const e3 = B.useRef(null);
  return Ye(({ clock: t }) => {
    e3.current && (e3.current.position.y = 17 + Math.sin(t.elapsedTime * 0.7) * 0.6);
  }), a.jsxs("group", { children: [a.jsx("group", { ref: e3, position: [0, 17, -34], children: a.jsx(Bt, { size: 1.5, depth: 2.2, color: "#7fa4ff", emissive: "#2f5bff", emissiveIntensity: 1.5, wave: 0.35, children: pi.short }) }), a.jsx(Bt, { position: [0, 8.4, -34], size: 0.44, depth: 0.4, color: "#e8e2ff", emissive: "#9d8bff", emissiveIntensity: 0.9, children: "DRIVE ANYWHERE" }), Pr.map((t) => {
    const [r, s] = t.position, i = Math.hypot(r, s), c = r / i, l = s / i;
    return a.jsx(Bt, { position: [c * 19, 0.35, l * 19], rotation: [-Math.PI / 2, 0, Math.atan2(-c, -l)], size: 0.42, depth: 0.5, color: t.glow, emissive: t.color, emissiveIntensity: 2.2, children: t.sign }, t.id);
  })] });
}
function Rc() {
  const e3 = [[56, 80], [80, 56]];
  return a.jsx("group", { children: Ai.map((t, r) => a.jsxs("group", { position: [e3[r][0], 0, e3[r][1]], children: [a.jsxs("mesh", { position: [0, 9, 0], castShadow: true, children: [a.jsx("cylinderGeometry", { args: [0.8, 1.6, 18, 6] }), a.jsx("meshStandardMaterial", { color: "#38346d", roughness: 0.7, flatShading: true })] }), a.jsxs("mesh", { position: [0, 19.5, 0], children: [a.jsx("icosahedronGeometry", { args: [2.3, 0] }), a.jsx("meshStandardMaterial", { color: t.color, emissive: t.color, emissiveIntensity: 4, toneMapped: false })] }), a.jsx("pointLight", { position: [0, 19.5, 0], color: t.color, intensity: 90, distance: 55, decay: 2 }), a.jsx(Bt, { position: [0, 25, 0], rotation: [0, Math.atan2(-e3[r][0], -e3[r][1]), 0], size: 0.46, depth: 0.5, color: "#ffffff", emissive: t.color, emissiveIntensity: 1.8, children: t.name })] }, t.id)) });
}
export {
  Oc as default
};
