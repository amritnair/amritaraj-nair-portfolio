var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as B, j as l, e as Un } from "./index-DAdbagE5.js";
import { R as Kt, M as dr, I as Fn, S as be, D as rt, a as ys, H as Ue, F as We, b as xt, L as Me, c as Qt, d as Ln, C as ut, e as cr, O as Rs, P as bs, W as Re, U as lr, f as Gn, g as Hn, h as jt, T as _e, i as Nn, j as zn, B as kn, k as Qn, l as Ve, m as jn, n as Yn, o as Ps, p as $r, q as Ce, r as ar, V as he, N as Ze, u as nt, s as ur, t as Wn, E as Vn, v as Xn, w as Kn, x as Qe, y as _n, z as Os, _ as Zn, A as es, G as hr, J as Jn, K as qn, Q as me, X as $n, Y as ei, Z as ti, $ as Ur, a0 as Us, a1 as gt, a2 as St, a3 as ri, a4 as qt, a5 as si, a6 as k, a7 as Fs, a8 as ni, a9 as Ls, aa as ts, ab as ii, ac as rs, ad as ai, ae as ss, af as vt, ag as Ne, ah as Ct, ai as it, aj as dt, ak as Q, al as It, am as Tt, an as oi, ao as Yt, ap as ne, aq as ht, ar as ci, as as Wt, at as li, au as ui, av as ns, aw as di, ax as is, ay as Dt, az as yr, aA as hi, aB as fi, aC as gi, aD as vi, aE as pi, aF as Ai, aG as mi, aH as Rr, aI as Ft, aJ as Ei, aK as wi, aL as xi, aM as Ci, aN as Di } from "./GamePortfolio-Au-s3tg_.js";
const Gs = parseInt(Kt.replace(/\D+/g, ""));
var ze = Uint8Array, ft = Uint16Array, br = Uint32Array, Hs = new ze([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Ns = new ze([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Bi = new ze([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), zs = function(e3, t) {
  for (var r = new ft(31), s = 0; s < 31; ++s) r[s] = t += 1 << e3[s - 1];
  for (var i = new br(r[30]), s = 1; s < 30; ++s) for (var o = r[s]; o < r[s + 1]; ++o) i[o] = o - r[s] << 5 | s;
  return [r, i];
}, ks = zs(Hs, 2), Qs = ks[0], Mi = ks[1];
Qs[28] = 258, Mi[258] = 28;
var Si = zs(Ns, 0), Ii = Si[0], Pr = new ft(32768);
for (var fe = 0; fe < 32768; ++fe) {
  var ct = (fe & 43690) >>> 1 | (fe & 21845) << 1;
  ct = (ct & 52428) >>> 2 | (ct & 13107) << 2, ct = (ct & 61680) >>> 4 | (ct & 3855) << 4, Pr[fe] = ((ct & 65280) >>> 8 | (ct & 255) << 8) >>> 1;
}
var zt = function(e3, t, r) {
  for (var s = e3.length, i = 0, o = new ft(t); i < s; ++i) ++o[e3[i] - 1];
  var c = new ft(t);
  for (i = 0; i < t; ++i) c[i] = c[i - 1] + o[i - 1] << 1;
  var d;
  if (r) {
    d = new ft(1 << t);
    var h = 15 - t;
    for (i = 0; i < s; ++i) if (e3[i]) for (var f = i << 4 | e3[i], m = t - e3[i], A = c[e3[i] - 1]++ << m, E = A | (1 << m) - 1; A <= E; ++A) d[Pr[A] >>> h] = f;
  } else for (d = new ft(s), i = 0; i < s; ++i) e3[i] && (d[i] = Pr[c[e3[i] - 1]++] >>> 15 - e3[i]);
  return d;
}, _t = new ze(288);
for (var fe = 0; fe < 144; ++fe) _t[fe] = 8;
for (var fe = 144; fe < 256; ++fe) _t[fe] = 9;
for (var fe = 256; fe < 280; ++fe) _t[fe] = 7;
for (var fe = 280; fe < 288; ++fe) _t[fe] = 8;
var js = new ze(32);
for (var fe = 0; fe < 32; ++fe) js[fe] = 5;
var Ti = zt(_t, 9, 1), yi = zt(js, 5, 1), vr = function(e3) {
  for (var t = e3[0], r = 1; r < e3.length; ++r) e3[r] > t && (t = e3[r]);
  return t;
}, Ye = function(e3, t, r) {
  var s = t / 8 | 0;
  return (e3[s] | e3[s + 1] << 8) >> (t & 7) & r;
}, pr = function(e3, t) {
  var r = t / 8 | 0;
  return (e3[r] | e3[r + 1] << 8 | e3[r + 2] << 16) >> (t & 7);
}, Ri = function(e3) {
  return (e3 / 8 | 0) + (e3 & 7 && 1);
}, bi = function(e3, t, r) {
  (r == null || r > e3.length) && (r = e3.length);
  var s = new (e3 instanceof ft ? ft : e3 instanceof br ? br : ze)(r - t);
  return s.set(e3.subarray(t, r)), s;
}, Pi = function(e3, t, r) {
  var s = e3.length;
  if (!s || r && !r.l && s < 5) return t || new ze(0);
  var i = !t || r, o = !r || r.i;
  r || (r = {}), t || (t = new ze(s * 3));
  var c = function(ie) {
    var qe = t.length;
    if (ie > qe) {
      var $e = new ze(Math.max(qe * 2, ie));
      $e.set(t), t = $e;
    }
  }, d = r.f || 0, h = r.p || 0, f = r.b || 0, m = r.l, A = r.d, E = r.m, x = r.n, b = s * 8;
  do {
    if (!m) {
      r.f = d = Ye(e3, h, 1);
      var N = Ye(e3, h + 1, 3);
      if (h += 3, N) if (N == 1) m = Ti, A = yi, E = 9, x = 5;
      else if (N == 2) {
        var G = Ye(e3, h, 31) + 257, q = Ye(e3, h + 10, 15) + 4, z = G + Ye(e3, h + 5, 31) + 1;
        h += 14;
        for (var W = new ze(z), re = new ze(19), C = 0; C < q; ++C) re[Bi[C]] = Ye(e3, h + C * 3, 7);
        h += q * 3;
        for (var y = vr(re), H = (1 << y) - 1, K = zt(re, y, 1), C = 0; C < z; ) {
          var V = K[Ye(e3, h, H)];
          h += V & 15;
          var L = V >>> 4;
          if (L < 16) W[C++] = L;
          else {
            var _ = 0, F = 0;
            for (L == 16 ? (F = 3 + Ye(e3, h, 3), h += 2, _ = W[C - 1]) : L == 17 ? (F = 3 + Ye(e3, h, 7), h += 3) : L == 18 && (F = 11 + Ye(e3, h, 127), h += 7); F--; ) W[C++] = _;
          }
        }
        var ee = W.subarray(0, G), X = W.subarray(G);
        E = vr(ee), x = vr(X), m = zt(ee, E, 1), A = zt(X, x, 1);
      } else throw "invalid block type";
      else {
        var L = Ri(h) + 4, Y = e3[L - 4] | e3[L - 3] << 8, O = L + Y;
        if (O > s) {
          if (o) throw "unexpected EOF";
          break;
        }
        i && c(f + Y), t.set(e3.subarray(L, O), f), r.b = f += Y, r.p = h = O * 8;
        continue;
      }
      if (h > b) {
        if (o) throw "unexpected EOF";
        break;
      }
    }
    i && c(f + 131072);
    for (var Pe = (1 << E) - 1, Je = (1 << x) - 1, je = h; ; je = h) {
      var _ = m[pr(e3, h) & Pe], ue = _ >>> 4;
      if (h += _ & 15, h > b) {
        if (o) throw "unexpected EOF";
        break;
      }
      if (!_) throw "invalid length/literal";
      if (ue < 256) t[f++] = ue;
      else if (ue == 256) {
        je = h, m = null;
        break;
      } else {
        var at = ue - 254;
        if (ue > 264) {
          var C = ue - 257, ge = Hs[C];
          at = Ye(e3, h, (1 << ge) - 1) + Qs[C], h += ge;
        }
        var xe = A[pr(e3, h) & Je], Xe = xe >>> 4;
        if (!xe) throw "invalid distance";
        h += xe & 15;
        var X = Ii[Xe];
        if (Xe > 3) {
          var ge = Ns[Xe];
          X += pr(e3, h) & (1 << ge) - 1, h += ge;
        }
        if (h > b) {
          if (o) throw "unexpected EOF";
          break;
        }
        i && c(f + 131072);
        for (var yt = f + at; f < yt; f += 4) t[f] = t[f - X], t[f + 1] = t[f + 1 - X], t[f + 2] = t[f + 2 - X], t[f + 3] = t[f + 3 - X];
        f = yt;
      }
    }
    r.l = m, r.p = je, r.b = f, m && (d = 1, r.m = E, r.d = A, r.n = x);
  } while (!d);
  return f == t.length ? t : bi(t, 0, f);
}, Oi = new ze(0), Ui = function(e3) {
  if ((e3[0] & 15) != 8 || e3[0] >>> 4 > 7 || (e3[0] << 8 | e3[1]) % 31) throw "invalid zlib data";
  if (e3[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
function $t(e3, t) {
  return Pi((Ui(e3), e3.subarray(2, -4)), t);
}
var Fi = typeof TextDecoder < "u" && new TextDecoder(), Li = 0;
try {
  Fi.decode(Oi, { stream: true }), Li = 1;
} catch {
}
const Gi = (e3) => e3 && e3.isCubeTexture;
class Hi extends dr {
  constructor(t, r) {
    var s, i;
    const o = Gi(t), d = ((i = o ? (s = t.image[0]) == null ? void 0 : s.width : t.image.width) != null ? i : 1024) / 4, h = Math.floor(Math.log2(d)), f = Math.pow(2, h), m = 3 * Math.max(f, 16 * 7), A = 4 * f, E = [o ? "#define ENVMAP_TYPE_CUBE" : "", `#define CUBEUV_TEXEL_WIDTH ${1 / m}`, `#define CUBEUV_TEXEL_HEIGHT ${1 / A}`, `#define CUBEUV_MAX_MIP ${h}.0`], x = `
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
        `, N = { map: { value: t }, height: { value: (r == null ? void 0 : r.height) || 15 }, radius: { value: (r == null ? void 0 : r.radius) || 100 } }, L = new Fn(1, 16), Y = new be({ uniforms: N, fragmentShader: b, vertexShader: x, side: rt });
    super(L, Y);
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
class Ni extends ys {
  constructor(t) {
    super(t), this.type = Ue;
  }
  parse(t) {
    const c = function(C, y) {
      switch (C) {
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
    }, m = `
`, A = function(C, y, H) {
      y = y || 1024;
      let V = C.pos, _ = -1, F = 0, ee = "", X = String.fromCharCode.apply(null, new Uint16Array(C.subarray(V, V + 128)));
      for (; 0 > (_ = X.indexOf(m)) && F < y && V < C.byteLength; ) ee += X, F += X.length, V += 128, X += String.fromCharCode.apply(null, new Uint16Array(C.subarray(V, V + 128)));
      return -1 < _ ? (C.pos += F + _ + 1, ee + X.slice(0, _)) : false;
    }, E = function(C) {
      const y = /^#\?(\S+)/, H = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, K = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, V = /^\s*FORMAT=(\S+)\s*$/, _ = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, F = { valid: 0, string: "", comments: "", programtype: "RGBE", format: "", gamma: 1, exposure: 1, width: 0, height: 0 };
      let ee, X;
      for ((C.pos >= C.byteLength || !(ee = A(C))) && c(1, "no header found"), (X = ee.match(y)) || c(3, "bad initial token"), F.valid |= 1, F.programtype = X[1], F.string += ee + `
`; ee = A(C), ee !== false; ) {
        if (F.string += ee + `
`, ee.charAt(0) === "#") {
          F.comments += ee + `
`;
          continue;
        }
        if ((X = ee.match(H)) && (F.gamma = parseFloat(X[1])), (X = ee.match(K)) && (F.exposure = parseFloat(X[1])), (X = ee.match(V)) && (F.valid |= 2, F.format = X[1]), (X = ee.match(_)) && (F.valid |= 4, F.height = parseInt(X[1], 10), F.width = parseInt(X[2], 10)), F.valid & 2 && F.valid & 4) break;
      }
      return F.valid & 2 || c(3, "missing format specifier"), F.valid & 4 || c(3, "missing image size specifier"), F;
    }, x = function(C, y, H) {
      const K = y;
      if (K < 8 || K > 32767 || C[0] !== 2 || C[1] !== 2 || C[2] & 128) return new Uint8Array(C);
      K !== (C[2] << 8 | C[3]) && c(3, "wrong scanline width");
      const V = new Uint8Array(4 * y * H);
      V.length || c(4, "unable to allocate buffer space");
      let _ = 0, F = 0;
      const ee = 4 * K, X = new Uint8Array(4), Pe = new Uint8Array(ee);
      let Je = H;
      for (; Je > 0 && F < C.byteLength; ) {
        F + 4 > C.byteLength && c(1), X[0] = C[F++], X[1] = C[F++], X[2] = C[F++], X[3] = C[F++], (X[0] != 2 || X[1] != 2 || (X[2] << 8 | X[3]) != K) && c(3, "bad rgbe scanline format");
        let je = 0, ue;
        for (; je < ee && F < C.byteLength; ) {
          ue = C[F++];
          const ge = ue > 128;
          if (ge && (ue -= 128), (ue === 0 || je + ue > ee) && c(3, "bad scanline data"), ge) {
            const xe = C[F++];
            for (let Xe = 0; Xe < ue; Xe++) Pe[je++] = xe;
          } else Pe.set(C.subarray(F, F + ue), je), je += ue, F += ue;
        }
        const at = K;
        for (let ge = 0; ge < at; ge++) {
          let xe = 0;
          V[_] = Pe[ge + xe], xe += K, V[_ + 1] = Pe[ge + xe], xe += K, V[_ + 2] = Pe[ge + xe], xe += K, V[_ + 3] = Pe[ge + xe], _ += 4;
        }
        Je--;
      }
      return V;
    }, b = function(C, y, H, K) {
      const V = C[y + 3], _ = Math.pow(2, V - 128) / 255;
      H[K + 0] = C[y + 0] * _, H[K + 1] = C[y + 1] * _, H[K + 2] = C[y + 2] * _, H[K + 3] = 1;
    }, N = function(C, y, H, K) {
      const V = C[y + 3], _ = Math.pow(2, V - 128) / 255;
      H[K + 0] = xt.toHalfFloat(Math.min(C[y + 0] * _, 65504)), H[K + 1] = xt.toHalfFloat(Math.min(C[y + 1] * _, 65504)), H[K + 2] = xt.toHalfFloat(Math.min(C[y + 2] * _, 65504)), H[K + 3] = xt.toHalfFloat(1);
    }, L = new Uint8Array(t);
    L.pos = 0;
    const Y = E(L), O = Y.width, G = Y.height, q = x(L.subarray(L.pos), O, G);
    let z, W, re;
    switch (this.type) {
      case We:
        re = q.length / 4;
        const C = new Float32Array(re * 4);
        for (let H = 0; H < re; H++) b(q, H * 4, C, H * 4);
        z = C, W = We;
        break;
      case Ue:
        re = q.length / 4;
        const y = new Uint16Array(re * 4);
        for (let H = 0; H < re; H++) N(q, H * 4, y, H * 4);
        z = y, W = Ue;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return { width: O, height: G, data: z, header: Y.string, gamma: Y.gamma, exposure: Y.exposure, type: W };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, s, i) {
    function o(c, d) {
      switch (c.type) {
        case We:
        case Ue:
          "colorSpace" in c ? c.colorSpace = "srgb-linear" : c.encoding = 3e3, c.minFilter = Me, c.magFilter = Me, c.generateMipmaps = false, c.flipY = true;
          break;
      }
      r && r(c, d);
    }
    return super.load(t, o, s, i);
  }
}
const Lt = Gs >= 152;
class zi extends ys {
  constructor(t) {
    super(t), this.type = Ue;
  }
  parse(t) {
    const y = Math.pow(2.7182818, 2.2);
    function H(n, a) {
      for (var u = 0, g = 0; g < 65536; ++g) (g == 0 || n[g >> 3] & 1 << (g & 7)) && (a[u++] = g);
      for (var v = u - 1; u < 65536; ) a[u++] = 0;
      return v;
    }
    function K(n) {
      for (var a = 0; a < 16384; a++) n[a] = {}, n[a].len = 0, n[a].lit = 0, n[a].p = null;
    }
    const V = { l: 0, c: 0, lc: 0 };
    function _(n, a, u, g, v) {
      for (; u < n; ) a = a << 8 | Jr(g, v), u += 8;
      u -= n, V.l = a >> u & (1 << n) - 1, V.c = a, V.lc = u;
    }
    const F = new Array(59);
    function ee(n) {
      for (var a = 0; a <= 58; ++a) F[a] = 0;
      for (var a = 0; a < 65537; ++a) F[n[a]] += 1;
      for (var u = 0, a = 58; a > 0; --a) {
        var g = u + F[a] >> 1;
        F[a] = u, u = g;
      }
      for (var a = 0; a < 65537; ++a) {
        var v = n[a];
        v > 0 && (n[a] = v | F[v]++ << 6);
      }
    }
    function X(n, a, u, g, v, p, D) {
      for (var w = u, I = 0, S = 0; v <= p; v++) {
        if (w.value - u.value > g) return false;
        _(6, I, S, n, w);
        var T = V.l;
        if (I = V.c, S = V.lc, D[v] = T, T == 63) {
          if (w.value - u.value > g) throw "Something wrong with hufUnpackEncTable";
          _(8, I, S, n, w);
          var M = V.l + 6;
          if (I = V.c, S = V.lc, v + M > p + 1) throw "Something wrong with hufUnpackEncTable";
          for (; M--; ) D[v++] = 0;
          v--;
        } else if (T >= 59) {
          var M = T - 59 + 2;
          if (v + M > p + 1) throw "Something wrong with hufUnpackEncTable";
          for (; M--; ) D[v++] = 0;
          v--;
        }
      }
      ee(D);
    }
    function Pe(n) {
      return n & 63;
    }
    function Je(n) {
      return n >> 6;
    }
    function je(n, a, u, g) {
      for (; a <= u; a++) {
        var v = Je(n[a]), p = Pe(n[a]);
        if (v >> p) throw "Invalid table entry";
        if (p > 14) {
          var D = g[v >> p - 14];
          if (D.len) throw "Invalid table entry";
          if (D.lit++, D.p) {
            var w = D.p;
            D.p = new Array(D.lit);
            for (var I = 0; I < D.lit - 1; ++I) D.p[I] = w[I];
          } else D.p = new Array(1);
          D.p[D.lit - 1] = a;
        } else if (p) for (var S = 0, I = 1 << 14 - p; I > 0; I--) {
          var D = g[(v << 14 - p) + S];
          if (D.len || D.p) throw "Invalid table entry";
          D.len = p, D.lit = a, S++;
        }
      }
      return true;
    }
    const ue = { c: 0, lc: 0 };
    function at(n, a, u, g) {
      n = n << 8 | Jr(u, g), a += 8, ue.c = n, ue.lc = a;
    }
    const ge = { c: 0, lc: 0 };
    function xe(n, a, u, g, v, p, D, w, I, S) {
      if (n == a) {
        g < 8 && (at(u, g, v, D), u = ue.c, g = ue.lc), g -= 8;
        var T = u >> g, T = new Uint8Array([T])[0];
        if (I.value + T > S) return false;
        for (var M = w[I.value - 1]; T-- > 0; ) w[I.value++] = M;
      } else if (I.value < S) w[I.value++] = n;
      else return false;
      ge.c = u, ge.lc = g;
    }
    function Xe(n) {
      return n & 65535;
    }
    function yt(n) {
      var a = Xe(n);
      return a > 32767 ? a - 65536 : a;
    }
    const ie = { a: 0, b: 0 };
    function qe(n, a) {
      var u = yt(n), g = yt(a), v = g, p = u + (v & 1) + (v >> 1), D = p, w = p - v;
      ie.a = D, ie.b = w;
    }
    function $e(n, a) {
      var u = Xe(n), g = Xe(a), v = u - (g >> 1) & 65535, p = g + v - 32768 & 65535;
      ie.a = p, ie.b = v;
    }
    function sn(n, a, u, g, v, p, D) {
      for (var w = D < 16384, I = u > v ? v : u, S = 1, T; S <= I; ) S <<= 1;
      for (S >>= 1, T = S, S >>= 1; S >= 1; ) {
        for (var M = 0, pe = M + p * (v - T), P = p * S, U = p * T, j = g * S, Z = g * T, ae, ce, Ee, Ie; M <= pe; M += U) {
          for (var le = M, Ke = M + g * (u - T); le <= Ke; le += Z) {
            var de = le + j, we = le + P, et = we + j;
            w ? (qe(n[le + a], n[we + a]), ae = ie.a, Ee = ie.b, qe(n[de + a], n[et + a]), ce = ie.a, Ie = ie.b, qe(ae, ce), n[le + a] = ie.a, n[de + a] = ie.b, qe(Ee, Ie), n[we + a] = ie.a, n[et + a] = ie.b) : ($e(n[le + a], n[we + a]), ae = ie.a, Ee = ie.b, $e(n[de + a], n[et + a]), ce = ie.a, Ie = ie.b, $e(ae, ce), n[le + a] = ie.a, n[de + a] = ie.b, $e(Ee, Ie), n[we + a] = ie.a, n[et + a] = ie.b);
          }
          if (u & S) {
            var we = le + P;
            w ? qe(n[le + a], n[we + a]) : $e(n[le + a], n[we + a]), ae = ie.a, n[we + a] = ie.b, n[le + a] = ae;
          }
        }
        if (v & S) for (var le = M, Ke = M + g * (u - T); le <= Ke; le += Z) {
          var de = le + j;
          w ? qe(n[le + a], n[de + a]) : $e(n[le + a], n[de + a]), ae = ie.a, n[de + a] = ie.b, n[le + a] = ae;
        }
        T = S, S >>= 1;
      }
      return M;
    }
    function nn(n, a, u, g, v, p, D, w, I, S) {
      for (var T = 0, M = 0, pe = w, P = Math.trunc(v.value + (p + 7) / 8); v.value < P; ) for (at(T, M, u, v), T = ue.c, M = ue.lc; M >= 14; ) {
        var U = T >> M - 14 & 16383, j = a[U];
        if (j.len) M -= j.len, xe(j.lit, D, T, M, u, g, v, I, S, pe), T = ge.c, M = ge.lc;
        else {
          if (!j.p) throw "hufDecode issues";
          var Z;
          for (Z = 0; Z < j.lit; Z++) {
            for (var ae = Pe(n[j.p[Z]]); M < ae && v.value < P; ) at(T, M, u, v), T = ue.c, M = ue.lc;
            if (M >= ae && Je(n[j.p[Z]]) == (T >> M - ae & (1 << ae) - 1)) {
              M -= ae, xe(j.p[Z], D, T, M, u, g, v, I, S, pe), T = ge.c, M = ge.lc;
              break;
            }
          }
          if (Z == j.lit) throw "hufDecode issues";
        }
      }
      var ce = 8 - p & 7;
      for (T >>= ce, M -= ce; M > 0; ) {
        var j = a[T << 14 - M & 16383];
        if (j.len) M -= j.len, xe(j.lit, D, T, M, u, g, v, I, S, pe), T = ge.c, M = ge.lc;
        else throw "hufDecode issues";
      }
      return true;
    }
    function Wr(n, a, u, g, v, p) {
      var D = { value: 0 }, w = u.value, I = ye(a, u), S = ye(a, u);
      u.value += 4;
      var T = ye(a, u);
      if (u.value += 4, I < 0 || I >= 65537 || S < 0 || S >= 65537) throw "Something wrong with HUF_ENCSIZE";
      var M = new Array(65537), pe = new Array(16384);
      K(pe);
      var P = g - (u.value - w);
      if (X(n, a, u, P, I, S, M), T > 8 * (g - (u.value - w))) throw "Something wrong with hufUncompress";
      je(M, I, S, pe), nn(M, pe, n, a, u, T, S, p, v, D);
    }
    function an(n, a, u) {
      for (var g = 0; g < u; ++g) a[g] = n[a[g]];
    }
    function Vr(n) {
      for (var a = 1; a < n.length; a++) {
        var u = n[a - 1] + n[a] - 128;
        n[a] = u;
      }
    }
    function Xr(n, a) {
      for (var u = 0, g = Math.floor((n.length + 1) / 2), v = 0, p = n.length - 1; !(v > p || (a[v++] = n[u++], v > p)); ) a[v++] = n[g++];
    }
    function Kr(n) {
      for (var a = n.byteLength, u = new Array(), g = 0, v = new DataView(n); a > 0; ) {
        var p = v.getInt8(g++);
        if (p < 0) {
          var D = -p;
          a -= D + 1;
          for (var w = 0; w < D; w++) u.push(v.getUint8(g++));
        } else {
          var D = p;
          a -= 2;
          for (var I = v.getUint8(g++), w = 0; w < D + 1; w++) u.push(I);
        }
      }
      return u;
    }
    function on(n, a, u, g, v, p) {
      var de = new DataView(p.buffer), D = u[n.idx[0]].width, w = u[n.idx[0]].height, I = 3, S = Math.floor(D / 8), T = Math.ceil(D / 8), M = Math.ceil(w / 8), pe = D - (T - 1) * 8, P = w - (M - 1) * 8, U = { value: 0 }, j = new Array(I), Z = new Array(I), ae = new Array(I), ce = new Array(I), Ee = new Array(I);
      for (let oe = 0; oe < I; ++oe) Ee[oe] = a[n.idx[oe]], j[oe] = oe < 1 ? 0 : j[oe - 1] + T * M, Z[oe] = new Float32Array(64), ae[oe] = new Uint16Array(64), ce[oe] = new Uint16Array(T * 64);
      for (let oe = 0; oe < M; ++oe) {
        var Ie = 8;
        oe == M - 1 && (Ie = P);
        var le = 8;
        for (let ve = 0; ve < T; ++ve) {
          ve == T - 1 && (le = pe);
          for (let se = 0; se < I; ++se) ae[se].fill(0), ae[se][0] = v[j[se]++], cn(U, g, ae[se]), ln(ae[se], Z[se]), un(Z[se]);
          dn(Z);
          for (let se = 0; se < I; ++se) hn(Z[se], ce[se], ve * 64);
        }
        let Be = 0;
        for (let ve = 0; ve < I; ++ve) {
          const se = u[n.idx[ve]].type;
          for (let Ge = 8 * oe; Ge < 8 * oe + Ie; ++Ge) {
            Be = Ee[ve][Ge];
            for (let pt = 0; pt < S; ++pt) {
              const Oe = pt * 64 + (Ge & 7) * 8;
              de.setUint16(Be + 0 * 2 * se, ce[ve][Oe + 0], true), de.setUint16(Be + 1 * 2 * se, ce[ve][Oe + 1], true), de.setUint16(Be + 2 * 2 * se, ce[ve][Oe + 2], true), de.setUint16(Be + 3 * 2 * se, ce[ve][Oe + 3], true), de.setUint16(Be + 4 * 2 * se, ce[ve][Oe + 4], true), de.setUint16(Be + 5 * 2 * se, ce[ve][Oe + 5], true), de.setUint16(Be + 6 * 2 * se, ce[ve][Oe + 6], true), de.setUint16(Be + 7 * 2 * se, ce[ve][Oe + 7], true), Be += 8 * 2 * se;
            }
          }
          if (S != T) for (let Ge = 8 * oe; Ge < 8 * oe + Ie; ++Ge) {
            const pt = Ee[ve][Ge] + 8 * S * 2 * se, Oe = S * 64 + (Ge & 7) * 8;
            for (let ot = 0; ot < le; ++ot) de.setUint16(pt + ot * 2 * se, ce[ve][Oe + ot], true);
          }
        }
      }
      for (var Ke = new Uint16Array(D), de = new DataView(p.buffer), we = 0; we < I; ++we) {
        u[n.idx[we]].decoded = true;
        var et = u[n.idx[we]].type;
        if (u[we].type == 2) for (var Ut = 0; Ut < w; ++Ut) {
          const oe = Ee[we][Ut];
          for (var Le = 0; Le < D; ++Le) Ke[Le] = de.getUint16(oe + Le * 2 * et, true);
          for (var Le = 0; Le < D; ++Le) de.setFloat32(oe + Le * 2 * et, R(Ke[Le]), true);
        }
      }
    }
    function cn(n, a, u) {
      for (var g, v = 1; v < 64; ) g = a[n.value], g == 65280 ? v = 64 : g >> 8 == 255 ? v += g & 255 : (u[v] = g, v++), n.value++;
    }
    function ln(n, a) {
      a[0] = R(n[0]), a[1] = R(n[1]), a[2] = R(n[5]), a[3] = R(n[6]), a[4] = R(n[14]), a[5] = R(n[15]), a[6] = R(n[27]), a[7] = R(n[28]), a[8] = R(n[2]), a[9] = R(n[4]), a[10] = R(n[7]), a[11] = R(n[13]), a[12] = R(n[16]), a[13] = R(n[26]), a[14] = R(n[29]), a[15] = R(n[42]), a[16] = R(n[3]), a[17] = R(n[8]), a[18] = R(n[12]), a[19] = R(n[17]), a[20] = R(n[25]), a[21] = R(n[30]), a[22] = R(n[41]), a[23] = R(n[43]), a[24] = R(n[9]), a[25] = R(n[11]), a[26] = R(n[18]), a[27] = R(n[24]), a[28] = R(n[31]), a[29] = R(n[40]), a[30] = R(n[44]), a[31] = R(n[53]), a[32] = R(n[10]), a[33] = R(n[19]), a[34] = R(n[23]), a[35] = R(n[32]), a[36] = R(n[39]), a[37] = R(n[45]), a[38] = R(n[52]), a[39] = R(n[54]), a[40] = R(n[20]), a[41] = R(n[22]), a[42] = R(n[33]), a[43] = R(n[38]), a[44] = R(n[46]), a[45] = R(n[51]), a[46] = R(n[55]), a[47] = R(n[60]), a[48] = R(n[21]), a[49] = R(n[34]), a[50] = R(n[37]), a[51] = R(n[47]), a[52] = R(n[50]), a[53] = R(n[56]), a[54] = R(n[59]), a[55] = R(n[61]), a[56] = R(n[35]), a[57] = R(n[36]), a[58] = R(n[48]), a[59] = R(n[49]), a[60] = R(n[57]), a[61] = R(n[58]), a[62] = R(n[62]), a[63] = R(n[63]);
    }
    function un(n) {
      const a = 0.5 * Math.cos(0.7853975), u = 0.5 * Math.cos(3.14159 / 16), g = 0.5 * Math.cos(3.14159 / 8), v = 0.5 * Math.cos(3 * 3.14159 / 16), p = 0.5 * Math.cos(5 * 3.14159 / 16), D = 0.5 * Math.cos(3 * 3.14159 / 8), w = 0.5 * Math.cos(7 * 3.14159 / 16);
      for (var I = new Array(4), S = new Array(4), T = new Array(4), M = new Array(4), pe = 0; pe < 8; ++pe) {
        var P = pe * 8;
        I[0] = g * n[P + 2], I[1] = D * n[P + 2], I[2] = g * n[P + 6], I[3] = D * n[P + 6], S[0] = u * n[P + 1] + v * n[P + 3] + p * n[P + 5] + w * n[P + 7], S[1] = v * n[P + 1] - w * n[P + 3] - u * n[P + 5] - p * n[P + 7], S[2] = p * n[P + 1] - u * n[P + 3] + w * n[P + 5] + v * n[P + 7], S[3] = w * n[P + 1] - p * n[P + 3] + v * n[P + 5] - u * n[P + 7], T[0] = a * (n[P + 0] + n[P + 4]), T[3] = a * (n[P + 0] - n[P + 4]), T[1] = I[0] + I[3], T[2] = I[1] - I[2], M[0] = T[0] + T[1], M[1] = T[3] + T[2], M[2] = T[3] - T[2], M[3] = T[0] - T[1], n[P + 0] = M[0] + S[0], n[P + 1] = M[1] + S[1], n[P + 2] = M[2] + S[2], n[P + 3] = M[3] + S[3], n[P + 4] = M[3] - S[3], n[P + 5] = M[2] - S[2], n[P + 6] = M[1] - S[1], n[P + 7] = M[0] - S[0];
      }
      for (var U = 0; U < 8; ++U) I[0] = g * n[16 + U], I[1] = D * n[16 + U], I[2] = g * n[48 + U], I[3] = D * n[48 + U], S[0] = u * n[8 + U] + v * n[24 + U] + p * n[40 + U] + w * n[56 + U], S[1] = v * n[8 + U] - w * n[24 + U] - u * n[40 + U] - p * n[56 + U], S[2] = p * n[8 + U] - u * n[24 + U] + w * n[40 + U] + v * n[56 + U], S[3] = w * n[8 + U] - p * n[24 + U] + v * n[40 + U] - u * n[56 + U], T[0] = a * (n[U] + n[32 + U]), T[3] = a * (n[U] - n[32 + U]), T[1] = I[0] + I[3], T[2] = I[1] - I[2], M[0] = T[0] + T[1], M[1] = T[3] + T[2], M[2] = T[3] - T[2], M[3] = T[0] - T[1], n[0 + U] = M[0] + S[0], n[8 + U] = M[1] + S[1], n[16 + U] = M[2] + S[2], n[24 + U] = M[3] + S[3], n[32 + U] = M[3] - S[3], n[40 + U] = M[2] - S[2], n[48 + U] = M[1] - S[1], n[56 + U] = M[0] - S[0];
    }
    function dn(n) {
      for (var a = 0; a < 64; ++a) {
        var u = n[0][a], g = n[1][a], v = n[2][a];
        n[0][a] = u + 1.5747 * v, n[1][a] = u - 0.1873 * g - 0.4682 * v, n[2][a] = u + 1.8556 * g;
      }
    }
    function hn(n, a, u) {
      for (var g = 0; g < 64; ++g) a[u + g] = xt.toHalfFloat(fn(n[g]));
    }
    function fn(n) {
      return n <= 1 ? Math.sign(n) * Math.pow(Math.abs(n), 2.2) : Math.sign(n) * Math.pow(y, Math.abs(n) - 1);
    }
    function _r(n) {
      return new DataView(n.array.buffer, n.offset.value, n.size);
    }
    function gn(n) {
      var a = n.viewer.buffer.slice(n.offset.value, n.offset.value + n.size), u = new Uint8Array(Kr(a)), g = new Uint8Array(u.length);
      return Vr(u), Xr(u, g), new DataView(g.buffer);
    }
    function gr(n) {
      var a = n.array.slice(n.offset.value, n.offset.value + n.size), u = $t(a), g = new Uint8Array(u.length);
      return Vr(u), Xr(u, g), new DataView(g.buffer);
    }
    function vn(n) {
      for (var a = n.viewer, u = { value: n.offset.value }, g = new Uint16Array(n.width * n.scanlineBlockSize * (n.channels * n.type)), v = new Uint8Array(8192), p = 0, D = new Array(n.channels), w = 0; w < n.channels; w++) D[w] = {}, D[w].start = p, D[w].end = D[w].start, D[w].nx = n.width, D[w].ny = n.lines, D[w].size = n.type, p += D[w].nx * D[w].ny * D[w].size;
      var I = bt(a, u), S = bt(a, u);
      if (S >= 8192) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (I <= S) for (var w = 0; w < S - I + 1; w++) v[w + I] = mt(a, u);
      var T = new Uint16Array(65536), M = H(v, T), pe = ye(a, u);
      Wr(n.array, a, u, pe, g, p);
      for (var w = 0; w < n.channels; ++w) for (var P = D[w], U = 0; U < D[w].size; ++U) sn(g, P.start + U, P.nx, P.size, P.ny, P.nx * P.size, M);
      an(T, g, p);
      for (var j = 0, Z = new Uint8Array(g.buffer.byteLength), ae = 0; ae < n.lines; ae++) for (var ce = 0; ce < n.channels; ce++) {
        var P = D[ce], Ee = P.nx * P.size, Ie = new Uint8Array(g.buffer, P.end * 2, Ee * 2);
        Z.set(Ie, j), j += Ee * 2, P.end += Ee;
      }
      return new DataView(Z.buffer);
    }
    function pn(n) {
      var a = n.array.slice(n.offset.value, n.offset.value + n.size), u = $t(a);
      const g = n.lines * n.channels * n.width, v = n.type == 1 ? new Uint16Array(g) : new Uint32Array(g);
      let p = 0, D = 0;
      const w = new Array(4);
      for (let I = 0; I < n.lines; I++) for (let S = 0; S < n.channels; S++) {
        let T = 0;
        switch (n.type) {
          case 1:
            w[0] = p, w[1] = w[0] + n.width, p = w[1] + n.width;
            for (let M = 0; M < n.width; ++M) {
              const pe = u[w[0]++] << 8 | u[w[1]++];
              T += pe, v[D] = T, D++;
            }
            break;
          case 2:
            w[0] = p, w[1] = w[0] + n.width, w[2] = w[1] + n.width, p = w[2] + n.width;
            for (let M = 0; M < n.width; ++M) {
              const pe = u[w[0]++] << 24 | u[w[1]++] << 16 | u[w[2]++] << 8;
              T += pe, v[D] = T, D++;
            }
            break;
        }
      }
      return new DataView(v.buffer);
    }
    function Zr(n) {
      var a = n.viewer, u = { value: n.offset.value }, g = new Uint8Array(n.width * n.lines * (n.channels * n.type * 2)), v = { version: Fe(a, u), unknownUncompressedSize: Fe(a, u), unknownCompressedSize: Fe(a, u), acCompressedSize: Fe(a, u), dcCompressedSize: Fe(a, u), rleCompressedSize: Fe(a, u), rleUncompressedSize: Fe(a, u), rleRawSize: Fe(a, u), totalAcUncompressedCount: Fe(a, u), totalDcUncompressedCount: Fe(a, u), acCompression: Fe(a, u) };
      if (v.version < 2) throw "EXRLoader.parse: " + Ot.compression + " version " + v.version + " is unsupported";
      for (var p = new Array(), D = bt(a, u) - 2; D > 0; ) {
        var w = Zt(a.buffer, u), I = mt(a, u), S = I >> 2 & 3, T = (I >> 4) - 1, M = new Int8Array([T])[0], pe = mt(a, u);
        p.push({ name: w, index: M, type: pe, compression: S }), D -= w.length + 3;
      }
      for (var P = Ot.channels, U = new Array(n.channels), j = 0; j < n.channels; ++j) {
        var Z = U[j] = {}, ae = P[j];
        Z.name = ae.name, Z.compression = 0, Z.decoded = false, Z.type = ae.pixelType, Z.pLinear = ae.pLinear, Z.width = n.width, Z.height = n.lines;
      }
      for (var ce = { idx: new Array(3) }, Ee = 0; Ee < n.channels; ++Ee) for (var Z = U[Ee], j = 0; j < p.length; ++j) {
        var Ie = p[j];
        Z.name == Ie.name && (Z.compression = Ie.compression, Ie.index >= 0 && (ce.idx[Ie.index] = Ee), Z.offset = Ee);
      }
      if (v.acCompressedSize > 0) switch (v.acCompression) {
        case 0:
          var de = new Uint16Array(v.totalAcUncompressedCount);
          Wr(n.array, a, u, v.acCompressedSize, de, v.totalAcUncompressedCount);
          break;
        case 1:
          var le = n.array.slice(u.value, u.value + v.totalAcUncompressedCount), Ke = $t(le), de = new Uint16Array(Ke.buffer);
          u.value += v.totalAcUncompressedCount;
          break;
      }
      if (v.dcCompressedSize > 0) {
        var we = { array: n.array, offset: u, size: v.dcCompressedSize }, et = new Uint16Array(gr(we).buffer);
        u.value += v.dcCompressedSize;
      }
      if (v.rleRawSize > 0) {
        var le = n.array.slice(u.value, u.value + v.rleCompressedSize), Ke = $t(le), Ut = Kr(Ke.buffer);
        u.value += v.rleCompressedSize;
      }
      for (var Le = 0, oe = new Array(U.length), j = 0; j < oe.length; ++j) oe[j] = new Array();
      for (var Be = 0; Be < n.lines; ++Be) for (var ve = 0; ve < U.length; ++ve) oe[ve].push(Le), Le += U[ve].width * n.type * 2;
      on(ce, oe, U, de, et, g);
      for (var j = 0; j < U.length; ++j) {
        var Z = U[j];
        if (!Z.decoded) switch (Z.compression) {
          case 2:
            for (var se = 0, Ge = 0, Be = 0; Be < n.lines; ++Be) {
              for (var pt = oe[j][se], Oe = 0; Oe < Z.width; ++Oe) {
                for (var ot = 0; ot < 2 * Z.type; ++ot) g[pt++] = Ut[Ge + ot * Z.width * Z.height];
                Ge++;
              }
              se++;
            }
            break;
          case 1:
          default:
            throw "EXRLoader.parse: unsupported channel compression";
        }
      }
      return new DataView(g.buffer);
    }
    function Zt(n, a) {
      for (var u = new Uint8Array(n), g = 0; u[a.value + g] != 0; ) g += 1;
      var v = new TextDecoder().decode(u.slice(a.value, a.value + g));
      return a.value = a.value + g + 1, v;
    }
    function An(n, a, u) {
      var g = new TextDecoder().decode(new Uint8Array(n).slice(a.value, a.value + u));
      return a.value = a.value + u, g;
    }
    function mn(n, a) {
      var u = Rt(n, a), g = ye(n, a);
      return [u, g];
    }
    function En(n, a) {
      var u = ye(n, a), g = ye(n, a);
      return [u, g];
    }
    function Rt(n, a) {
      var u = n.getInt32(a.value, true);
      return a.value = a.value + 4, u;
    }
    function ye(n, a) {
      var u = n.getUint32(a.value, true);
      return a.value = a.value + 4, u;
    }
    function Jr(n, a) {
      var u = n[a.value];
      return a.value = a.value + 1, u;
    }
    function mt(n, a) {
      var u = n.getUint8(a.value);
      return a.value = a.value + 1, u;
    }
    const Fe = function(n, a) {
      let u;
      return "getBigInt64" in DataView.prototype ? u = Number(n.getBigInt64(a.value, true)) : u = n.getUint32(a.value + 4, true) + Number(n.getUint32(a.value, true) << 32), a.value += 8, u;
    };
    function De(n, a) {
      var u = n.getFloat32(a.value, true);
      return a.value += 4, u;
    }
    function wn(n, a) {
      return xt.toHalfFloat(De(n, a));
    }
    function R(n) {
      var a = (n & 31744) >> 10, u = n & 1023;
      return (n >> 15 ? -1 : 1) * (a ? a === 31 ? u ? NaN : 1 / 0 : Math.pow(2, a - 15) * (1 + u / 1024) : 6103515625e-14 * (u / 1024));
    }
    function bt(n, a) {
      var u = n.getUint16(a.value, true);
      return a.value += 2, u;
    }
    function xn(n, a) {
      return R(bt(n, a));
    }
    function Cn(n, a, u, g) {
      for (var v = u.value, p = []; u.value < v + g - 1; ) {
        var D = Zt(a, u), w = Rt(n, u), I = mt(n, u);
        u.value += 3;
        var S = Rt(n, u), T = Rt(n, u);
        p.push({ name: D, pixelType: w, pLinear: I, xSampling: S, ySampling: T });
      }
      return u.value += 1, p;
    }
    function Dn(n, a) {
      var u = De(n, a), g = De(n, a), v = De(n, a), p = De(n, a), D = De(n, a), w = De(n, a), I = De(n, a), S = De(n, a);
      return { redX: u, redY: g, greenX: v, greenY: p, blueX: D, blueY: w, whiteX: I, whiteY: S };
    }
    function Bn(n, a) {
      var u = ["NO_COMPRESSION", "RLE_COMPRESSION", "ZIPS_COMPRESSION", "ZIP_COMPRESSION", "PIZ_COMPRESSION", "PXR24_COMPRESSION", "B44_COMPRESSION", "B44A_COMPRESSION", "DWAA_COMPRESSION", "DWAB_COMPRESSION"], g = mt(n, a);
      return u[g];
    }
    function Mn(n, a) {
      var u = ye(n, a), g = ye(n, a), v = ye(n, a), p = ye(n, a);
      return { xMin: u, yMin: g, xMax: v, yMax: p };
    }
    function Sn(n, a) {
      var u = ["INCREASING_Y"], g = mt(n, a);
      return u[g];
    }
    function In(n, a) {
      var u = De(n, a), g = De(n, a);
      return [u, g];
    }
    function Tn(n, a) {
      var u = De(n, a), g = De(n, a), v = De(n, a);
      return [u, g, v];
    }
    function yn(n, a, u, g, v) {
      if (g === "string" || g === "stringvector" || g === "iccProfile") return An(a, u, v);
      if (g === "chlist") return Cn(n, a, u, v);
      if (g === "chromaticities") return Dn(n, u);
      if (g === "compression") return Bn(n, u);
      if (g === "box2i") return Mn(n, u);
      if (g === "lineOrder") return Sn(n, u);
      if (g === "float") return De(n, u);
      if (g === "v2f") return In(n, u);
      if (g === "v3f") return Tn(n, u);
      if (g === "int") return Rt(n, u);
      if (g === "rational") return mn(n, u);
      if (g === "timecode") return En(n, u);
      if (g === "preview") return u.value += v, "skipped";
      u.value += v;
    }
    function Rn(n, a, u) {
      const g = {};
      if (n.getUint32(0, true) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      g.version = n.getUint8(4);
      const v = n.getUint8(5);
      g.spec = { singleTile: !!(v & 2), longName: !!(v & 4), deepFormat: !!(v & 8), multiPart: !!(v & 16) }, u.value = 8;
      for (var p = true; p; ) {
        var D = Zt(a, u);
        if (D == 0) p = false;
        else {
          var w = Zt(a, u), I = ye(n, u), S = yn(n, a, u, w, I);
          S === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${w}'.`) : g[D] = S;
        }
      }
      if (v & -5) throw console.error("EXRHeader:", g), "THREE.EXRLoader: provided file is currently unsupported.";
      return g;
    }
    function bn(n, a, u, g, v) {
      const p = { size: 0, viewer: a, array: u, offset: g, width: n.dataWindow.xMax - n.dataWindow.xMin + 1, height: n.dataWindow.yMax - n.dataWindow.yMin + 1, channels: n.channels.length, bytesPerLine: null, lines: null, inputSize: null, type: n.channels[0].pixelType, uncompress: null, getter: null, format: null, [Lt ? "colorSpace" : "encoding"]: null };
      switch (n.compression) {
        case "NO_COMPRESSION":
          p.lines = 1, p.uncompress = _r;
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
          p.lines = 32, p.uncompress = Zr;
          break;
        case "DWAB_COMPRESSION":
          p.lines = 256, p.uncompress = Zr;
          break;
        default:
          throw "EXRLoader.parse: " + n.compression + " is unsupported";
      }
      if (p.scanlineBlockSize = p.lines, p.type == 1) switch (v) {
        case We:
          p.getter = xn, p.inputSize = 2;
          break;
        case Ue:
          p.getter = bt, p.inputSize = 2;
          break;
      }
      else if (p.type == 2) switch (v) {
        case We:
          p.getter = De, p.inputSize = 4;
          break;
        case Ue:
          p.getter = wn, p.inputSize = 4;
      }
      else throw "EXRLoader.parse: unsupported pixelType " + p.type + " for " + n.compression + ".";
      p.blockCount = (n.dataWindow.yMax + 1) / p.scanlineBlockSize;
      for (var D = 0; D < p.blockCount; D++) Fe(a, g);
      p.outputChannels = p.channels == 3 ? 4 : p.channels;
      const w = p.width * p.height * p.outputChannels;
      switch (v) {
        case We:
          p.byteArray = new Float32Array(w), p.channels < p.outputChannels && p.byteArray.fill(1, 0, w);
          break;
        case Ue:
          p.byteArray = new Uint16Array(w), p.channels < p.outputChannels && p.byteArray.fill(15360, 0, w);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", v);
          break;
      }
      return p.bytesPerLine = p.width * p.inputSize * p.channels, p.outputChannels == 4 ? p.format = Qt : p.format = Ln, Lt ? p.colorSpace = "srgb-linear" : p.encoding = 3e3, p;
    }
    const Jt = new DataView(t), Pn = new Uint8Array(t), Pt = { value: 0 }, Ot = Rn(Jt, t, Pt), $ = bn(Ot, Jt, Pn, Pt, this.type), qr = { value: 0 }, On = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let n = 0; n < $.height / $.scanlineBlockSize; n++) {
      const a = ye(Jt, Pt);
      $.size = ye(Jt, Pt), $.lines = a + $.scanlineBlockSize > $.height ? $.height - a : $.scanlineBlockSize;
      const g = $.size < $.lines * $.bytesPerLine ? $.uncompress($) : _r($);
      Pt.value += $.size;
      for (let v = 0; v < $.scanlineBlockSize; v++) {
        const p = v + n * $.scanlineBlockSize;
        if (p >= $.height) break;
        for (let D = 0; D < $.channels; D++) {
          const w = On[Ot.channels[D].name];
          for (let I = 0; I < $.width; I++) {
            qr.value = (v * ($.channels * $.width) + D * $.width + I) * $.inputSize;
            const S = ($.height - 1 - p) * ($.width * $.outputChannels) + I * $.outputChannels + w;
            $.byteArray[S] = $.getter(g, qr);
          }
        }
      }
    }
    return { header: Ot, width: $.width, height: $.height, data: $.byteArray, format: $.format, [Lt ? "colorSpace" : "encoding"]: $[Lt ? "colorSpace" : "encoding"], type: this.type };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, s, i) {
    function o(c, d) {
      Lt ? c.colorSpace = d.colorSpace : c.encoding = d.encoding, c.minFilter = Me, c.magFilter = Me, c.generateMipmaps = false, c.flipY = false, r && r(c, d);
    }
    return super.load(t, o, s, i);
  }
}
const ki = () => parseInt(Kt.replace(/\D+/g, "")), Qi = ki(), Ys = (e3, t, r) => {
  let s;
  switch (e3) {
    case Ve:
      s = new Uint8ClampedArray(t * r * 4);
      break;
    case Ue:
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
    case We:
      s = new Float32Array(t * r * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return s;
};
let er;
const ji = (e3, t, r, s) => {
  if (er !== void 0) return er;
  const i = new Re(1, 1, s);
  t.setRenderTarget(i);
  const o = new dr(new bs(), new jn({ color: 16777215 }));
  t.render(o, r), t.setRenderTarget(null);
  const c = Ys(e3, i.width, i.height);
  return t.readRenderTargetPixels(i, 0, 0, i.width, i.height, c), i.dispose(), o.geometry.dispose(), o.material.dispose(), er = c[0] !== 0, er;
};
class Fr {
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
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o2, _p;
    this._width = t.width, this._height = t.height, this._type = t.type, this._colorSpace = t.colorSpace;
    const r = { format: Qt, depthBuffer: false, stencilBuffer: false, type: this._type, colorSpace: this._colorSpace, anisotropy: ((_a2 = t.renderTargetOptions) == null ? void 0 : _a2.anisotropy) !== void 0 ? (_b = t.renderTargetOptions) == null ? void 0 : _b.anisotropy : 1, generateMipmaps: ((_c = t.renderTargetOptions) == null ? void 0 : _c.generateMipmaps) !== void 0 ? (_d = t.renderTargetOptions) == null ? void 0 : _d.generateMipmaps : false, magFilter: ((_e2 = t.renderTargetOptions) == null ? void 0 : _e2.magFilter) !== void 0 ? (_f = t.renderTargetOptions) == null ? void 0 : _f.magFilter : Me, minFilter: ((_g = t.renderTargetOptions) == null ? void 0 : _g.minFilter) !== void 0 ? (_h = t.renderTargetOptions) == null ? void 0 : _h.minFilter : Me, samples: ((_i2 = t.renderTargetOptions) == null ? void 0 : _i2.samples) !== void 0 ? (_j = t.renderTargetOptions) == null ? void 0 : _j.samples : void 0, wrapS: ((_k = t.renderTargetOptions) == null ? void 0 : _k.wrapS) !== void 0 ? (_l = t.renderTargetOptions) == null ? void 0 : _l.wrapS : ut, wrapT: ((_m = t.renderTargetOptions) == null ? void 0 : _m.wrapT) !== void 0 ? (_n2 = t.renderTargetOptions) == null ? void 0 : _n2.wrapT : ut };
    if (this._material = t.material, t.renderer ? this._renderer = t.renderer : (this._renderer = Fr.instantiateRenderer(), this._rendererIsDisposable = true), this._scene = new cr(), this._camera = new Rs(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !ji(this._type, this._renderer, this._camera, r)) {
      let s;
      switch (this._type) {
        case Ue:
          s = this._renderer.extensions.has("EXT_color_buffer_float") ? We : void 0;
          break;
      }
      s !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${We}`), this._type = s) : (this._supportsReadPixels = false, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
    }
    this._quad = new dr(new bs(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new Re(this.width, this.height, r), this._renderTarget.texture.mapping = ((_o2 = t.renderTargetOptions) == null ? void 0 : _o2.mapping) !== void 0 ? (_p = t.renderTargetOptions) == null ? void 0 : _p.mapping : lr;
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
    const r = new Hn(this.toArray(), this.width, this.height, Qt, this._type, (t == null ? void 0 : t.mapping) || lr, (t == null ? void 0 : t.wrapS) || ut, (t == null ? void 0 : t.wrapT) || ut, (t == null ? void 0 : t.magFilter) || Me, (t == null ? void 0 : t.minFilter) || Me, (t == null ? void 0 : t.anisotropy) || 1, jt);
    return r.generateMipmaps = (t == null ? void 0 : t.generateMipmaps) !== void 0 ? t == null ? void 0 : t.generateMipmaps : false, r;
  }
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
  }
  dispose(t) {
    this.disposeOnDemandRenderer(), t && this.renderTarget.dispose(), this.material instanceof be && Object.values(this.material.uniforms).forEach((r) => {
      r.value instanceof _e && r.value.dispose();
    }), Object.values(this.material).forEach((r) => {
      r instanceof _e && r.dispose();
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
const Gt = (e3, t, r) => {
  const s = new RegExp(`${t}="([^"]*)"`, "i").exec(e3);
  if (s) return s[1];
  const i = new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i").exec(e3);
  if (i) {
    const o = i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return o && o.length === 3 ? o.map((c) => c.replace(/<\/?rdf:li>/g, "")) : i[1].trim();
  }
  if (r !== void 0) return r;
  throw new Error(`Can't find ${t} in gainmap metadata`);
}, Yi = (e3) => {
  let t;
  typeof TextDecoder < "u" ? t = new TextDecoder().decode(e3) : t = e3.toString();
  let r = t.indexOf("<x:xmpmeta");
  for (; r !== -1; ) {
    const s = t.indexOf("x:xmpmeta>", r), i = t.slice(r, s + 10);
    try {
      const o = Gt(i, "hdrgm:GainMapMin", "0"), c = Gt(i, "hdrgm:GainMapMax"), d = Gt(i, "hdrgm:Gamma", "1"), h = Gt(i, "hdrgm:OffsetSDR", "0.015625"), f = Gt(i, "hdrgm:OffsetHDR", "0.015625"), m = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(i), A = m ? m[1] : "0", E = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(i);
      if (!E) throw new Error("Incomplete gainmap metadata");
      const x = E[1];
      return { gainMapMin: Array.isArray(o) ? o.map((b) => parseFloat(b)) : [parseFloat(o), parseFloat(o), parseFloat(o)], gainMapMax: Array.isArray(c) ? c.map((b) => parseFloat(b)) : [parseFloat(c), parseFloat(c), parseFloat(c)], gamma: Array.isArray(d) ? d.map((b) => parseFloat(b)) : [parseFloat(d), parseFloat(d), parseFloat(d)], offsetSdr: Array.isArray(h) ? h.map((b) => parseFloat(b)) : [parseFloat(h), parseFloat(h), parseFloat(h)], offsetHdr: Array.isArray(f) ? f.map((b) => parseFloat(b)) : [parseFloat(f), parseFloat(f), parseFloat(f)], hdrCapacityMin: parseFloat(A), hdrCapacityMax: parseFloat(x) };
    } catch {
    }
    r = t.indexOf("<x:xmpmeta", s);
  }
};
class Wi {
  constructor(t) {
    __publicField(this, "options");
    this.options = { debug: t && t.debug !== void 0 ? t.debug : false, extractFII: t && t.extractFII !== void 0 ? t.extractFII : true, extractNonFII: t && t.extractNonFII !== void 0 ? t.extractNonFII : true };
  }
  extract(t) {
    return new Promise((r, s) => {
      const i = this.options.debug, o = new DataView(t.buffer);
      if (o.getUint16(0) !== 65496) {
        s(new Error("Not a valid jpeg"));
        return;
      }
      const c = o.byteLength;
      let d = 2, h = 0, f;
      for (; d < c; ) {
        if (++h > 250) {
          s(new Error(`Found no marker after ${h} loops \u{1F635}`));
          return;
        }
        if (o.getUint8(d) !== 255) {
          s(new Error(`Not a valid marker at offset 0x${d.toString(16)}, found: 0x${o.getUint8(d).toString(16)}`));
          return;
        }
        if (f = o.getUint8(d + 1), i && console.log(`Marker: ${f.toString(16)}`), f === 226) {
          i && console.log("Found APP2 marker (0xffe2)");
          const m = d + 4;
          if (o.getUint32(m) === 1297106432) {
            const A = m + 4;
            let E;
            if (o.getUint16(A) === 18761) E = false;
            else if (o.getUint16(A) === 19789) E = true;
            else {
              s(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (o.getUint16(A + 2, !E) !== 42) {
              s(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const x = o.getUint32(A + 4, !E);
            if (x < 8) {
              s(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const b = A + x, N = o.getUint16(b, !E), L = b + 2;
            let Y = 0;
            for (let z = L; z < L + 12 * N; z += 12) o.getUint16(z, !E) === 45057 && (Y = o.getUint32(z + 8, !E));
            const G = b + 2 + N * 12 + 4, q = [];
            for (let z = G; z < G + Y * 16; z += 16) {
              const W = { MPType: o.getUint32(z, !E), size: o.getUint32(z + 4, !E), dataOffset: o.getUint32(z + 8, !E), dependantImages: o.getUint32(z + 12, !E), start: -1, end: -1, isFII: false };
              W.dataOffset ? (W.start = A + W.dataOffset, W.isFII = false) : (W.start = 0, W.isFII = true), W.end = W.start + W.size, q.push(W);
            }
            if (this.options.extractNonFII && q.length) {
              const z = new Blob([o]), W = [];
              for (const re of q) {
                if (re.isFII && !this.options.extractFII) continue;
                const C = z.slice(re.start, re.end + 1, "image/jpeg");
                W.push(C);
              }
              r(W);
            }
          }
        }
        d += 2 + o.getUint16(d + 2);
      }
    });
  }
}
const Vi = async (e3) => {
  const t = Yi(e3);
  if (!t) throw new Vs("Gain map XMP metadata not found");
  const s = await new Wi({ extractFII: true, extractNonFII: true }).extract(e3);
  if (s.length !== 2) throw new Ws("Gain map recovery image not found");
  return { sdr: new Uint8Array(await s[0].arrayBuffer()), gainMap: new Uint8Array(await s[1].arrayBuffer()), metadata: t };
}, as = (e3) => new Promise((t, r) => {
  const s = document.createElement("img");
  s.onload = () => {
    t(s);
  }, s.onerror = (i) => {
    r(i);
  }, s.src = URL.createObjectURL(e3);
});
class Xi extends Yn {
  constructor(t, r) {
    super(r);
    __publicField(this, "_renderer");
    __publicField(this, "_renderTargetOptions");
    __publicField(this, "_internalLoadingManager");
    __publicField(this, "_config");
    this._config = t, t.renderer && (this._renderer = t.renderer), this._internalLoadingManager = new Ps();
  }
  setRenderer(t) {
    return this._renderer = t, this;
  }
  setRenderTargetOptions(t) {
    return this._renderTargetOptions = t, this;
  }
  prepareQuadRenderer() {
    this._renderer || console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    const t = this._config.createMaterial({ gainMapMax: [1, 1, 1], gainMapMin: [0, 0, 0], gamma: [1, 1, 1], offsetHdr: [1, 1, 1], offsetSdr: [1, 1, 1], hdrCapacityMax: 1, hdrCapacityMin: 0, maxDisplayBoost: 1, gainMap: new _e(), sdr: new _e() });
    return this._config.createQuadRenderer({ width: 16, height: 16, type: Ue, colorSpace: jt, material: t, renderer: this._renderer, renderTargetOptions: this._renderTargetOptions });
  }
  async processImages(t, r, s) {
    const i = r ? new Blob([r], { type: "image/jpeg" }) : void 0, o = new Blob([t], { type: "image/jpeg" });
    let c, d, h = false;
    if (typeof createImageBitmap > "u") {
      const f = await Promise.all([i ? as(i) : Promise.resolve(void 0), as(o)]);
      d = f[0], c = f[1], h = s === "flipY";
    } else {
      const f = await Promise.all([i ? createImageBitmap(i, { imageOrientation: s || "flipY" }) : Promise.resolve(void 0), createImageBitmap(o, { imageOrientation: s || "flipY" })]);
      d = f[0], c = f[1];
    }
    return { sdrImage: c, gainMapImage: d, needsFlip: h };
  }
  createTextures(t, r, s) {
    const i = new _e(r || new ImageData(2, 2), lr, ut, ut, Me, $r, Qt, Ve, 1, jt);
    i.flipY = s, i.needsUpdate = true;
    const o = new _e(t, lr, ut, ut, Me, $r, Qt, Ve, 1, Ce);
    return o.flipY = s, o.needsUpdate = true, { gainMap: i, sdr: o };
  }
  updateQuadRenderer(t, r, s, i, o) {
    t.width = r.width, t.height = r.height, t.material.gainMap = s, t.material.sdr = i, t.material.gainMapMin = o.gainMapMin, t.material.gainMapMax = o.gainMapMax, t.material.offsetHdr = o.offsetHdr, t.material.offsetSdr = o.offsetSdr, t.material.gamma = o.gamma, t.material.hdrCapacityMin = o.hdrCapacityMin, t.material.hdrCapacityMax = o.hdrCapacityMax, t.material.maxDisplayBoost = Math.pow(2, o.hdrCapacityMax), t.material.needsUpdate = true;
  }
}
const Ki = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, _i = `
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
class Zi extends be {
  constructor({ gamma: t, offsetHdr: r, offsetSdr: s, gainMapMin: i, gainMapMax: o, maxDisplayBoost: c, hdrCapacityMin: d, hdrCapacityMax: h, sdr: f, gainMap: m }) {
    super({ name: "GainMapDecoderMaterial", vertexShader: Ki, fragmentShader: _i, uniforms: { sdr: { value: f }, gainMap: { value: m }, gamma: { value: new he(1 / t[0], 1 / t[1], 1 / t[2]) }, offsetHdr: { value: new he().fromArray(r) }, offsetSdr: { value: new he().fromArray(s) }, gainMapMin: { value: new he().fromArray(i) }, gainMapMax: { value: new he().fromArray(o) }, weightFactor: { value: (Math.log2(c) - d) / (h - d) } }, blending: Ze, depthTest: false, depthWrite: false });
    __publicField(this, "_maxDisplayBoost");
    __publicField(this, "_hdrCapacityMin");
    __publicField(this, "_hdrCapacityMax");
    this._maxDisplayBoost = c, this._hdrCapacityMin = d, this._hdrCapacityMax = h, this.needsUpdate = true, this.uniformsNeedUpdate = true;
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
class Xs extends Xi {
  constructor(t, r) {
    super({ renderer: t, createMaterial: (s) => new Zi(s), createQuadRenderer: (s) => new Fr(s) }, r);
  }
  async render(t, r, s, i) {
    const { sdrImage: o, gainMapImage: c, needsFlip: d } = await this.processImages(s, i, "flipY"), { gainMap: h, sdr: f } = this.createTextures(o, c, d);
    this.updateQuadRenderer(t, o, h, f, r), t.render();
  }
}
class Ji extends Xs {
  load([t, r, s], i, o, c) {
    const d = this.prepareQuadRenderer();
    let h, f, m;
    const A = async () => {
      if (h && f && m) {
        try {
          await this.render(d, m, h, f);
        } catch (y) {
          this.manager.itemError(t), this.manager.itemError(r), this.manager.itemError(s), typeof c == "function" && c(y), d.disposeOnDemandRenderer();
          return;
        }
        typeof i == "function" && i(d), this.manager.itemEnd(t), this.manager.itemEnd(r), this.manager.itemEnd(s), d.disposeOnDemandRenderer();
      }
    };
    let E = true, x = 0, b = 0, N = true, L = 0, Y = 0, O = true, G = 0, q = 0;
    const z = () => {
      if (typeof o == "function") {
        const y = x + L + G, H = b + Y + q, K = E && N && O;
        o(new ProgressEvent("progress", { lengthComputable: K, loaded: H, total: y }));
      }
    };
    this.manager.itemStart(t), this.manager.itemStart(r), this.manager.itemStart(s);
    const W = new ar(this._internalLoadingManager);
    W.setResponseType("arraybuffer"), W.setRequestHeader(this.requestHeader), W.setPath(this.path), W.setWithCredentials(this.withCredentials), W.load(t, async (y) => {
      if (typeof y == "string") throw new Error("Invalid sdr buffer");
      h = y, await A();
    }, (y) => {
      E = y.lengthComputable, b = y.loaded, x = y.total, z();
    }, (y) => {
      this.manager.itemError(t), typeof c == "function" && c(y);
    });
    const re = new ar(this._internalLoadingManager);
    re.setResponseType("arraybuffer"), re.setRequestHeader(this.requestHeader), re.setPath(this.path), re.setWithCredentials(this.withCredentials), re.load(r, async (y) => {
      if (typeof y == "string") throw new Error("Invalid gainmap buffer");
      f = y, await A();
    }, (y) => {
      N = y.lengthComputable, Y = y.loaded, L = y.total, z();
    }, (y) => {
      this.manager.itemError(r), typeof c == "function" && c(y);
    });
    const C = new ar(this._internalLoadingManager);
    return C.setRequestHeader(this.requestHeader), C.setPath(this.path), C.setWithCredentials(this.withCredentials), C.load(s, async (y) => {
      if (typeof y != "string") throw new Error("Invalid metadata string");
      m = JSON.parse(y), await A();
    }, (y) => {
      O = y.lengthComputable, q = y.loaded, G = y.total, z();
    }, (y) => {
      this.manager.itemError(s), typeof c == "function" && c(y);
    }), d;
  }
}
class qi extends Xs {
  load(t, r, s, i) {
    const o = this.prepareQuadRenderer(), c = new ar(this._internalLoadingManager);
    return c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setPath(this.path), c.setWithCredentials(this.withCredentials), this.manager.itemStart(t), c.load(t, async (d) => {
      if (typeof d == "string") throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const h = new Uint8Array(d);
      let f, m, A;
      try {
        const E = await Vi(h);
        f = E.sdr, m = E.gainMap, A = E.metadata;
      } catch (E) {
        if (E instanceof Vs || E instanceof Ws) console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), A = { gainMapMin: [0, 0, 0], gainMapMax: [1, 1, 1], gamma: [1, 1, 1], hdrCapacityMin: 0, hdrCapacityMax: 1, offsetHdr: [0, 0, 0], offsetSdr: [0, 0, 0] }, f = h;
        else throw E;
      }
      try {
        await this.render(o, A, f.buffer, m == null ? void 0 : m.buffer);
      } catch (E) {
        this.manager.itemError(t), typeof i == "function" && i(E), o.disposeOnDemandRenderer();
        return;
      }
      typeof r == "function" && r(o), this.manager.itemEnd(t), o.disposeOnDemandRenderer();
    }, s, (d) => {
      this.manager.itemError(t), typeof i == "function" && i(d);
    }), o;
  }
}
const Vt = { apartment: "lebombo_1k.hdr", city: "potsdamer_platz_1k.hdr", dawn: "kiara_1_dawn_1k.hdr", forest: "forest_slope_1k.hdr", lobby: "st_fagans_interior_1k.hdr", night: "dikhololo_night_1k.hdr", park: "rooitou_park_1k.hdr", studio: "studio_small_03_1k.hdr", sunset: "venice_sunset_1k.hdr", warehouse: "empty_warehouse_01_1k.hdr" }, Ks = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", Bt = (e3) => Array.isArray(e3), Lr = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function fr({ files: e3 = Lr, path: t = "", preset: r = void 0, colorSpace: s = void 0, extensions: i } = {}) {
  r && (Gr(r), e3 = Vt[r], t = Ks);
  const o = Bt(e3), { extension: c, isCubemap: d } = Hr(e3), h = Nr(c);
  if (!h) throw new Error("useEnvironment: Unrecognized file extension: " + e3);
  const f = nt((x) => x.gl);
  B.useLayoutEffect(() => {
    if (c !== "webp" && c !== "jpg" && c !== "jpeg") return;
    function x() {
      ur.clear(h, o ? [e3] : e3);
    }
    f.domElement.addEventListener("webglcontextlost", x, { once: true });
  }, [e3, f.domElement]);
  const m = ur(h, o ? [e3] : e3, (x) => {
    (c === "webp" || c === "jpg" || c === "jpeg") && x.setRenderer(f), x.setPath == null || x.setPath(t), i && i(x);
  });
  let A = o ? m[0] : m;
  if (c === "jpg" || c === "jpeg" || c === "webp") {
    var E;
    A = (E = A.renderTarget) == null ? void 0 : E.texture;
  }
  return A.mapping = d ? Wn : Vn, A.colorSpace = s ?? (d ? "srgb" : "srgb-linear"), A;
}
const $i = { files: Lr, path: "", preset: void 0, extensions: void 0 };
fr.preload = (e3) => {
  const t = { ...$i, ...e3 };
  let { files: r, path: s = "" } = t;
  const { preset: i, extensions: o } = t;
  i && (Gr(i), r = Vt[i], s = Ks);
  const { extension: c } = Hr(r);
  if (c === "webp" || c === "jpg" || c === "jpeg") throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const d = Nr(c);
  if (!d) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  ur.preload(d, Bt(r) ? [r] : r, (h) => {
    h.setPath == null || h.setPath(s), o && o(h);
  });
};
const ea = { files: Lr, preset: void 0 };
fr.clear = (e3) => {
  const t = { ...ea, ...e3 };
  let { files: r } = t;
  const { preset: s } = t;
  s && (Gr(s), r = Vt[s]);
  const { extension: i } = Hr(r), o = Nr(i);
  if (!o) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  ur.clear(o, Bt(r) ? [r] : r);
};
function Gr(e3) {
  if (!(e3 in Vt)) throw new Error("Preset must be one of: " + Object.keys(Vt).join(", "));
}
function Hr(e3) {
  var t;
  const r = Bt(e3) && e3.length === 6, s = Bt(e3) && e3.length === 3 && e3.some((c) => c.endsWith("json")), i = Bt(e3) ? e3[0] : e3;
  return { extension: r ? "cube" : s ? "webp" : i.startsWith("data:application/exr") ? "exr" : i.startsWith("data:application/hdr") ? "hdr" : i.startsWith("data:image/jpeg") ? "jpg" : (t = i.split(".").pop()) == null || (t = t.split("?")) == null || (t = t.shift()) == null ? void 0 : t.toLowerCase(), isCubemap: r, isGainmap: s };
}
function Nr(e3) {
  return e3 === "cube" ? Xn : e3 === "hdr" ? Ni : e3 === "exr" ? zi : e3 === "jpg" || e3 === "jpeg" ? qi : e3 === "webp" ? Ji : null;
}
const ta = (e3) => e3.current && e3.current.isScene, ra = (e3) => ta(e3) ? e3.current : e3;
function zr(e3, t, r, s, i = {}) {
  var o, c, d, h;
  i = { backgroundBlurriness: 0, backgroundIntensity: 1, backgroundRotation: [0, 0, 0], environmentIntensity: 1, environmentRotation: [0, 0, 0], ...i };
  const f = ra(t || r), m = f.background, A = f.environment, E = { backgroundBlurriness: f.backgroundBlurriness, backgroundIntensity: f.backgroundIntensity, backgroundRotation: (o = (c = f.backgroundRotation) == null || c.clone == null ? void 0 : c.clone()) !== null && o !== void 0 ? o : [0, 0, 0], environmentIntensity: f.environmentIntensity, environmentRotation: (d = (h = f.environmentRotation) == null || h.clone == null ? void 0 : h.clone()) !== null && d !== void 0 ? d : [0, 0, 0] };
  return e3 !== "only" && (f.environment = s), e3 && (f.background = s), es(f, i), () => {
    e3 !== "only" && (f.environment = A), e3 && (f.background = m), es(f, E);
  };
}
function kr({ scene: e3, background: t = false, map: r, ...s }) {
  const i = nt((o) => o.scene);
  return B.useLayoutEffect(() => {
    if (r) return zr(t, e3, i, r, s);
  }), null;
}
function _s({ background: e3 = false, scene: t, blur: r, backgroundBlurriness: s, backgroundIntensity: i, backgroundRotation: o, environmentIntensity: c, environmentRotation: d, ...h }) {
  const f = fr(h), m = nt((A) => A.scene);
  return B.useLayoutEffect(() => zr(e3, t, m, f, { backgroundBlurriness: r ?? s, backgroundIntensity: i, backgroundRotation: o, environmentIntensity: c, environmentRotation: d })), B.useEffect(() => () => {
    f.dispose();
  }, [f]), null;
}
function sa({ children: e3, near: t = 0.1, far: r = 1e3, resolution: s = 256, frames: i = 1, map: o, background: c = false, blur: d, backgroundBlurriness: h, backgroundIntensity: f, backgroundRotation: m, environmentIntensity: A, environmentRotation: E, scene: x, files: b, path: N, preset: L = void 0, extensions: Y }) {
  const O = nt((C) => C.gl), G = nt((C) => C.scene), q = B.useRef(null), [z] = B.useState(() => new cr()), W = B.useMemo(() => {
    const C = new Kn(s);
    return C.texture.type = Ue, C;
  }, [s]);
  B.useEffect(() => () => {
    W.dispose();
  }, [W]), B.useLayoutEffect(() => {
    if (i === 1) {
      const C = O.autoClear;
      O.autoClear = true, q.current.update(O, z), O.autoClear = C;
    }
    return zr(c, x, G, W.texture, { backgroundBlurriness: d ?? h, backgroundIntensity: f, backgroundRotation: m, environmentIntensity: A, environmentRotation: E });
  }, [e3, z, W.texture, x, G, c, i, O]);
  let re = 1;
  return Qe(() => {
    if (i === 1 / 0 || re < i) {
      const C = O.autoClear;
      O.autoClear = true, q.current.update(O, z), O.autoClear = C, re++;
    }
  }), B.createElement(B.Fragment, null, _n(B.createElement(B.Fragment, null, e3, B.createElement("cubeCamera", { ref: q, args: [t, r, W] }), b || L ? B.createElement(_s, { background: true, files: b, preset: L, path: N, extensions: Y }) : o ? B.createElement(kr, { background: true, map: o, extensions: Y }) : null), z));
}
function na(e3) {
  var t, r, s, i;
  const o = fr(e3), c = e3.map || o;
  B.useMemo(() => Os({ GroundProjectedEnvImpl: Hi }), []), B.useEffect(() => () => {
    o.dispose();
  }, [o]);
  const d = B.useMemo(() => [c], [c]), h = (t = e3.ground) == null ? void 0 : t.height, f = (r = e3.ground) == null ? void 0 : r.radius, m = (s = (i = e3.ground) == null ? void 0 : i.scale) !== null && s !== void 0 ? s : 1e3;
  return B.createElement(B.Fragment, null, B.createElement(kr, Zn({}, e3, { map: c })), B.createElement("groundProjectedEnvImpl", { args: d, scale: m, height: h, radius: f }));
}
function ia(e3) {
  return e3.ground ? B.createElement(na, e3) : e3.map ? B.createElement(kr, e3) : e3.children ? B.createElement(sa, e3) : B.createElement(_s, e3);
}
class aa extends be {
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
	      #include <${Qi >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
      }` });
  }
}
const oa = (e3) => new he().setFromSpherical(new qn(e3, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI)), ca = B.forwardRef(({ radius: e3 = 100, depth: t = 50, count: r = 5e3, saturation: s = 0, factor: i = 4, fade: o = false, speed: c = 1 }, d) => {
  const h = B.useRef(null), [f, m, A] = B.useMemo(() => {
    const x = [], b = [], N = Array.from({ length: r }, () => (0.5 + 0.5 * Math.random()) * i), L = new hr();
    let Y = e3 + t;
    const O = t / r;
    for (let G = 0; G < r; G++) Y -= O * Math.random(), x.push(...oa(Y).toArray()), L.setHSL(G / r, s, 0.9), b.push(L.r, L.g, L.b);
    return [new Float32Array(x), new Float32Array(b), new Float32Array(N)];
  }, [r, t, i, e3, s]);
  Qe((x) => h.current && (h.current.uniforms.time.value = x.clock.elapsedTime * c));
  const [E] = B.useState(() => new aa());
  return B.createElement("points", { ref: d }, B.createElement("bufferGeometry", null, B.createElement("bufferAttribute", { attach: "attributes-position", args: [f, 3] }), B.createElement("bufferAttribute", { attach: "attributes-color", args: [m, 3] }), B.createElement("bufferAttribute", { attach: "attributes-size", args: [A, 1] })), B.createElement("primitive", { ref: h, object: E, attach: "material", blending: Jn, "uniforms-fade-value": o, depthWrite: false, transparent: true, vertexColors: true }));
});
/**
* postprocessing v6.39.1 build Fri Apr 17 2026
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2026 Raoul van Rüschen
* @license Zlib
*/
var la = (() => {
  const e3 = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), t = new Float32Array([0, 0, 2, 0, 0, 2]), r = new Ls();
  return r.setAttribute("position", new ts(e3, 3)), r.setAttribute("uv", new ts(t, 2)), r;
})(), Te = class Or {
  static get fullscreenGeometry() {
    return la;
  }
  constructor(t = "Pass", r = new cr(), s = new Rs()) {
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
    r !== null ? r.material = t : (r = new dr(Or.fullscreenGeometry, t), r.frustumCulled = false, this.scene === null && (this.scene = new cr()), this.scene.add(r), this.screen = r);
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
  setDepthTexture(t, r = gt) {
  }
  render(t, r, s, i, o) {
    throw new Error("Render method not implemented!");
  }
  setSize(t, r) {
  }
  initialize(t, r, s) {
  }
  dispose() {
    for (const t of Object.keys(this)) {
      const r = this[t];
      (r instanceof Re || r instanceof Fs || r instanceof _e || r instanceof Or) && this[t].dispose();
    }
    this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
  }
}, ua = class extends Te {
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = false;
  }
  render(e3, t, r, s, i) {
    const o = e3.state.buffers.stencil;
    o.setLocked(false), o.setTest(false);
  }
}, da = `#ifdef COLOR_WRITE
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
}`, Zs = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", Js = class extends be {
  constructor() {
    super({ name: "CopyMaterial", defines: { COLOR_SPACE_CONVERSION: "1", DEPTH_PACKING: "0", COLOR_WRITE: "1" }, uniforms: { inputBuffer: new k(null), depthBuffer: new k(null), channelWeights: new k(null), opacity: new k(1) }, blending: Ze, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: da, vertexShader: Zs }), this.depthFunc = ii;
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
}, ha = class extends Te {
  constructor(e3, t = true) {
    super("CopyPass"), this.fullscreenMaterial = new Js(), this.needsSwap = false, this.renderTarget = e3, e3 === void 0 && (this.renderTarget = new Re(1, 1, { minFilter: Me, magFilter: Me, stencilBuffer: false, depthBuffer: false }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = t;
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
    r !== void 0 && (this.renderTarget.texture.type = r, r !== Ve ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : e3 !== null && e3.outputColorSpace === Ce && (this.renderTarget.texture.colorSpace = Ce));
  }
}, os = new hr(), Qr = class extends Te {
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
    const o = this.overrideClearColor, c = this.overrideClearAlpha, d = e3.getClearAlpha(), h = o !== null, f = c >= 0;
    h ? (e3.getClearColor(os), e3.setClearColor(o, f ? c : d)) : f && e3.setClearAlpha(c), e3.setRenderTarget(this.renderToScreen ? null : t), e3.clear(this.color, this.depth, this.stencil), h ? e3.setClearColor(os, d) : f && e3.setClearAlpha(d);
  }
}, fa = class extends Te {
  constructor(e3, t) {
    super("MaskPass", e3, t), this.needsSwap = false, this.clearPass = new Qr(false, false, true), this.inverse = false;
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
    const o = e3.getContext(), c = e3.state.buffers, d = this.scene, h = this.camera, f = this.clearPass, m = this.inverted ? 0 : 1, A = 1 - m;
    c.color.setMask(false), c.depth.setMask(false), c.color.setLocked(true), c.depth.setLocked(true), c.stencil.setTest(true), c.stencil.setOp(o.REPLACE, o.REPLACE, o.REPLACE), c.stencil.setFunc(o.ALWAYS, m, 4294967295), c.stencil.setClear(A), c.stencil.setLocked(true), this.clearPass.enabled && (this.renderToScreen ? f.render(e3, null) : (f.render(e3, t), f.render(e3, r))), this.renderToScreen ? (e3.setRenderTarget(null), e3.render(d, h)) : (e3.setRenderTarget(t), e3.render(d, h), e3.setRenderTarget(r), e3.render(d, h)), c.color.setLocked(false), c.depth.setLocked(false), c.stencil.setLocked(false), c.stencil.setFunc(o.EQUAL, 1, 4294967295), c.stencil.setOp(o.KEEP, o.KEEP, o.KEEP), c.stencil.setLocked(true);
  }
}, Ar = 1 / 1e3, ga = 1e3, va = class {
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
    return this._delta * Ar;
  }
  get fixedDelta() {
    return this._fixedDelta * Ar;
  }
  set fixedDelta(e3) {
    this._fixedDelta = e3 * ga;
  }
  get elapsed() {
    return this._elapsed * Ar;
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
}, pa = class {
  constructor(e3 = null, { depthBuffer: t = true, stencilBuffer: r = false, multisampling: s = 0, frameBufferType: i } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(t, r, i, s), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new ha(), this.depthTexture = null, this.depthRenderTarget = null, this.passes = [], this.timer = new va(), this.autoRenderToScreen = true, this.setRenderer(e3);
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
      s === Ve && e3.outputColorSpace === Ce && (this.inputBuffer.texture.colorSpace = Ce, this.outputBuffer.texture.colorSpace = Ce, this.inputBuffer.dispose(), this.outputBuffer.dispose()), e3.autoClear = false, this.setSize(t.width, t.height);
      for (const i of this.passes) i.initialize(e3, r, s);
    }
  }
  replaceRenderer(e3, t = true) {
    const r = this.renderer, s = r.domElement.parentNode;
    return this.setRenderer(e3), t && s !== null && (s.removeChild(r.domElement), s.appendChild(e3.domElement)), r;
  }
  createDepthTexture() {
    const e3 = this.inputBuffer, t = new $n();
    this.depthTexture = t, e3.stencilBuffer ? (t.format = ei, t.type = ti) : t.type = We;
    const r = t.clone();
    return r.name = "EffectComposer.StableDepth", this.depthRenderTarget = new Re(e3.width, e3.height, { depthBuffer: true, stencilBuffer: e3.stencilBuffer, depthTexture: r }), r;
  }
  blitDepthBuffer(e3) {
    const t = this.renderer, r = this.depthRenderTarget, s = t.properties, i = t.getContext();
    t.setRenderTarget(r);
    const o = s.get(e3).__webglFramebuffer, c = s.get(r).__webglFramebuffer, d = e3.stencilBuffer ? i.DEPTH_BUFFER_BIT | i.STENCIL_BUFFER_BIT : i.DEPTH_BUFFER_BIT;
    i.bindFramebuffer(i.READ_FRAMEBUFFER, o), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, c), i.blitFramebuffer(0, 0, e3.width, e3.height, 0, 0, r.width, r.height, d, i.NEAREST), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), t.setRenderTarget(null);
  }
  deleteDepthTexture() {
    if (this.depthTexture !== null) {
      this.depthTexture.dispose(), this.depthTexture = null, this.depthRenderTarget.dispose(), this.depthRenderTarget = null, this.inputBuffer.depthTexture = null, this.outputBuffer.depthTexture = null;
      for (const e3 of this.passes) e3.setDepthTexture(null);
    }
  }
  createBuffer(e3, t, r, s) {
    const i = this.renderer, o = i === null ? new me() : i.getDrawingBufferSize(new me()), c = { minFilter: Me, magFilter: Me, stencilBuffer: t, depthBuffer: e3, type: r }, d = new Re(o.width, o.height, c);
    return s > 0 && (d.samples = s), r === Ve && i !== null && i.outputColorSpace === Ce && (d.texture.colorSpace = Ce), d.texture.name = "EffectComposer.Buffer", d.texture.generateMipmaps = false, d;
  }
  setMainScene(e3) {
    for (const t of this.passes) t.mainScene = e3;
  }
  setMainCamera(e3) {
    for (const t of this.passes) t.mainCamera = e3;
  }
  addPass(e3, t) {
    const r = this.passes, s = this.renderer, i = s.getDrawingBufferSize(new me()), o = s.getContext().getContextAttributes().alpha, c = this.inputBuffer.texture.type;
    if (e3.renderer = s, e3.setSize(i.width, i.height), e3.initialize(s, o, c), this.autoRenderToScreen && (r.length > 0 && (r[r.length - 1].renderToScreen = false), e3.renderToScreen && (this.autoRenderToScreen = false)), t !== void 0 ? r.splice(t, 0, e3) : r.push(e3), this.autoRenderToScreen && (r[r.length - 1].renderToScreen = true), e3.needsDepthTexture || this.depthTexture !== null) if (this.depthTexture === null) {
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
        const o = (d, h) => d || h.needsDepthTexture;
        if (!t.reduce(o, false)) {
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
    let s = this.inputBuffer, i = this.outputBuffer, o, c = false;
    e3 === void 0 && (this.timer.update(), e3 = this.timer.getDelta());
    for (const d of this.passes) if (d.enabled) {
      if (s.depthTexture = this.depthTexture, i.depthTexture = null, d.render(t, s, i, e3, c), d.needsDepthBlit && this.depthRenderTarget !== null && this.blitDepthBuffer(s), d.needsSwap) {
        if (c) {
          r.renderToScreen = d.renderToScreen;
          const h = t.getContext(), f = t.state.buffers.stencil;
          f.setFunc(h.NOTEQUAL, 1, 4294967295), r.render(t, s, i, e3, c), f.setFunc(h.EQUAL, 1, 4294967295);
        }
        o = s, s = i, i = o;
      }
      d instanceof fa ? c = true : d instanceof ua && (c = false);
    }
  }
  setSize(e3, t, r) {
    const s = this.renderer, i = s.getSize(new me());
    (e3 === void 0 || t === void 0) && (e3 = i.width, t = i.height), (i.width !== e3 || i.height !== t) && s.setSize(e3, t, r);
    const o = s.getDrawingBufferSize(new me());
    this.inputBuffer.setSize(o.width, o.height), this.outputBuffer.setSize(o.width, o.height), this.depthRenderTarget !== null && this.depthRenderTarget.setSize(o.width, o.height);
    for (const c of this.passes) c.setSize(o.width, o.height);
  }
  reset() {
    this.dispose(), this.autoRenderToScreen = true;
  }
  dispose() {
    for (const e3 of this.passes) e3.dispose();
    this.passes = [], this.inputBuffer !== null && this.inputBuffer.dispose(), this.outputBuffer !== null && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose(), Te.fullscreenGeometry.dispose();
  }
}, st = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }, te = { FRAGMENT_HEAD: "FRAGMENT_HEAD", FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV", FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE", VERTEX_HEAD: "VERTEX_HEAD", VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT" }, Aa = class {
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([[te.FRAGMENT_HEAD, null], [te.FRAGMENT_MAIN_UV, null], [te.FRAGMENT_MAIN_IMAGE, null], [te.VERTEX_HEAD, null], [te.VERTEX_MAIN_SUPPORT, null]]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = st.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = false, this.readDepth = false, this.colorSpace = jt;
  }
}, mr = false, cs = class {
  constructor(e3 = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(e3), this.meshCount = 0, this.replaceMaterial = (t) => {
      if (t.isMesh) {
        let r;
        if (t.material.flatShading) switch (t.material.side) {
          case rt:
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
          case rt:
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
    if (!(e3 instanceof be)) return e3.clone();
    const t = e3.uniforms, r = /* @__PURE__ */ new Map();
    for (const i in t) {
      const o = t[i].value;
      o.isRenderTargetTexture && (t[i].value = null, r.set(i, o));
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
        return s.uniforms = Object.assign({}, e3.uniforms), s.side = rt, s;
      }), this.materialsFlatShaded = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s;
      }), this.materialsFlatShadedBackSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s.side = qt, s;
      }), this.materialsFlatShadedDoubleSide = t.map((r) => {
        const s = this.cloneMaterial(r);
        return s.uniforms = Object.assign({}, e3.uniforms), s.flatShading = true, s.side = rt, s;
      });
    }
  }
  render(e3, t, r) {
    const s = e3.shadowMap.enabled;
    if (e3.shadowMap.enabled = false, mr) {
      const i = this.originalMaterials;
      this.meshCount = 0, t.traverse(this.replaceMaterial), e3.render(t, r);
      for (const o of i) o[0].material = o[1];
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
    return mr;
  }
  static set workaroundEnabled(e3) {
    mr = e3;
  }
}, lt = -1, Se = class extends Ur {
  constructor(e3 = null, t = lt, r = lt, s = 1) {
    super(), e3 !== null && this.addEventListener("change", () => e3.setSize(this.baseSize.width, this.baseSize.height)), this.baseSize = new me(1, 1), this.preferredSize = new me(t, r), this.target = this.preferredSize, this.s = s, this.effectiveSize = new me(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
  }
  updateEffectiveSize() {
    const e3 = this.baseSize, t = this.preferredSize, r = this.effectiveSize, s = this.scale;
    t.width !== lt ? r.width = t.width : t.height !== lt ? r.width = Math.round(t.height * (e3.width / Math.max(e3.height, 1))) : r.width = Math.round(e3.width * s), t.height !== lt ? r.height = t.height : t.width !== lt ? r.height = Math.round(t.width / Math.max(e3.width / Math.max(e3.height, 1), 1)) : r.height = Math.round(e3.height * s);
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
    this.s !== e3 && (this.s = e3, this.preferredSize.setScalar(lt), this.dispatchEvent({ type: "change" }));
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
    return lt;
  }
}, J = { SKIP: 9, SET: 30, ADD: 0, ALPHA: 1, AVERAGE: 2, COLOR: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, DIVIDE: 8, DST: 9, EXCLUSION: 10, HARD_LIGHT: 11, HARD_MIX: 12, HUE: 13, INVERT: 14, INVERT_RGB: 15, LIGHTEN: 16, LINEAR_BURN: 17, LINEAR_DODGE: 18, LINEAR_LIGHT: 19, LUMINOSITY: 20, MULTIPLY: 21, NEGATION: 22, NORMAL: 23, OVERLAY: 24, PIN_LIGHT: 25, REFLECT: 26, SATURATION: 27, SCREEN: 28, SOFT_LIGHT: 29, SRC: 30, SUBTRACT: 31, VIVID_LIGHT: 32 }, ma = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ea = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}", wa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", xa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ca = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Da = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ba = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ma = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Sa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ia = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ta = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ya = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ra = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ba = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Pa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Oa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ua = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Fa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", La = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ga = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ha = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Na = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", za = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}", ka = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Qa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ja = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ya = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Wa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Va = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Xa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}", Ka = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", _a = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Za = /* @__PURE__ */ new Map([[J.ADD, ma], [J.ALPHA, Ea], [J.AVERAGE, wa], [J.COLOR, xa], [J.COLOR_BURN, Ca], [J.COLOR_DODGE, Da], [J.DARKEN, Ba], [J.DIFFERENCE, Ma], [J.DIVIDE, Sa], [J.DST, null], [J.EXCLUSION, Ia], [J.HARD_LIGHT, Ta], [J.HARD_MIX, ya], [J.HUE, Ra], [J.INVERT, ba], [J.INVERT_RGB, Pa], [J.LIGHTEN, Oa], [J.LINEAR_BURN, Ua], [J.LINEAR_DODGE, Fa], [J.LINEAR_LIGHT, La], [J.LUMINOSITY, Ga], [J.MULTIPLY, Ha], [J.NEGATION, Na], [J.NORMAL, za], [J.OVERLAY, ka], [J.PIN_LIGHT, Qa], [J.REFLECT, ja], [J.SATURATION, Ya], [J.SCREEN, Wa], [J.SOFT_LIGHT, Va], [J.SRC, Xa], [J.SUBTRACT, Ka], [J.VIVID_LIGHT, _a]]), Ja = class extends Ur {
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
    return Za.get(this.blendFunction);
  }
}, Xt = class extends Ur {
  constructor(e3, t, { attributes: r = st.NONE, blendFunction: s = J.NORMAL, defines: i = /* @__PURE__ */ new Map(), uniforms: o = /* @__PURE__ */ new Map(), extensions: c = null, vertexShader: d = null } = {}) {
    super(), this.name = e3, this.renderer = null, this.attributes = r, this.fragmentShader = t, this.vertexShader = d, this.defines = i, this.uniforms = o, this.extensions = c, this.blendMode = new Ja(s), this.blendMode.addEventListener("change", (h) => this.setChanged()), this._inputColorSpace = jt, this._outputColorSpace = Us;
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
  setDepthTexture(e3, t = gt) {
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
      (t instanceof Re || t instanceof Fs || t instanceof _e || t instanceof Te) && this[e3].dispose();
    }
  }
}, jr = { VERY_SMALL: 0, SMALL: 1, MEDIUM: 2, LARGE: 3, VERY_LARGE: 4, HUGE: 5 }, qa = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, $a = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", eo = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])], to = class extends be {
  constructor(e3 = new rs()) {
    super({ name: "KawaseBlurMaterial", uniforms: { inputBuffer: new k(null), texelSize: new k(new rs()), scale: new k(1), kernel: new k(0) }, blending: Ze, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: qa, vertexShader: $a }), this.setTexelSize(e3.x, e3.y), this.kernelSize = jr.MEDIUM;
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setInputBuffer(e3) {
    this.inputBuffer = e3;
  }
  get kernelSequence() {
    return eo[this.kernelSize];
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
}, ro = class extends Te {
  constructor({ kernelSize: e3 = jr.MEDIUM, resolutionScale: t = 0.5, width: r = Se.AUTO_SIZE, height: s = Se.AUTO_SIZE, resolutionX: i = r, resolutionY: o = s } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new Re(1, 1, { depthBuffer: false }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const c = this.resolution = new Se(this, i, o, t);
    c.addEventListener("change", (d) => this.setSize(c.baseWidth, c.baseHeight)), this._blurMaterial = new to(), this._blurMaterial.kernelSize = e3, this.copyMaterial = new Js();
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
    const o = this.scene, c = this.camera, d = this.renderTargetA, h = this.renderTargetB, f = this.blurMaterial, m = f.kernelSequence;
    let A = t;
    this.fullscreenMaterial = f;
    for (let E = 0, x = m.length; E < x; ++E) {
      const b = E & 1 ? h : d;
      f.kernel = m[E], f.inputBuffer = A.texture, e3.setRenderTarget(b), e3.render(o, c), A = b;
    }
    this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = A.texture, e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(o, c);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t);
    const s = r.width, i = r.height;
    this.renderTargetA.setSize(s, i), this.renderTargetB.setSize(s, i), this.blurMaterial.setSize(e3, t);
  }
  initialize(e3, t, r) {
    r !== void 0 && (this.renderTargetA.texture.type = r, this.renderTargetB.texture.type = r, r !== Ve ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : e3 !== null && e3.outputColorSpace === Ce && (this.renderTargetA.texture.colorSpace = Ce, this.renderTargetB.texture.colorSpace = Ce));
  }
  static get AUTO_SIZE() {
    return Se.AUTO_SIZE;
  }
}, so = `#include <common>
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
}`, no = class extends be {
  constructor(e3 = false, t = null) {
    super({ name: "LuminanceMaterial", defines: { THREE_REVISION: Kt.replace(/\D+/g, "") }, uniforms: { inputBuffer: new k(null), threshold: new k(0), smoothing: new k(1), range: new k(null) }, blending: Ze, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: so, vertexShader: Zs }), this.colorOutput = e3, this.luminanceRange = t;
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
}, io = class extends Te {
  constructor({ renderTarget: e3, luminanceRange: t, colorOutput: r, resolutionScale: s = 1, width: i = Se.AUTO_SIZE, height: o = Se.AUTO_SIZE, resolutionX: c = i, resolutionY: d = o } = {}) {
    super("LuminancePass"), this.fullscreenMaterial = new no(r, t), this.needsSwap = false, this.renderTarget = e3, this.renderTarget === void 0 && (this.renderTarget = new Re(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "LuminancePass.Target");
    const h = this.resolution = new Se(this, c, d, s);
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
  render(e3, t, r, s, i) {
    const o = this.fullscreenMaterial;
    o.inputBuffer = t.texture, e3.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e3.render(this.scene, this.camera);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height);
  }
  initialize(e3, t, r) {
    r !== void 0 && r !== Ve && (this.renderTarget.texture.type = r, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, ao = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`, oo = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}", co = class extends be {
  constructor() {
    super({ name: "DownsamplingMaterial", uniforms: { inputBuffer: new k(null), texelSize: new k(new me()) }, blending: Ze, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: ao, vertexShader: oo });
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setSize(e3, t) {
    this.uniforms.texelSize.value.set(1 / e3, 1 / t);
  }
}, lo = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`, uo = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}", ho = class extends be {
  constructor() {
    super({ name: "UpsamplingMaterial", uniforms: { inputBuffer: new k(null), supportBuffer: new k(null), texelSize: new k(new me()), radius: new k(0.85) }, blending: Ze, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: lo, vertexShader: uo });
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
}, fo = class extends Te {
  constructor() {
    super("MipmapBlurPass"), this.needsSwap = false, this.renderTarget = new Re(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new co(), this.upsamplingMaterial = new ho(), this.resolution = new me();
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
    const { scene: o, camera: c } = this, { downsamplingMaterial: d, upsamplingMaterial: h } = this, { downsamplingMipmaps: f, upsamplingMipmaps: m } = this;
    let A = t;
    this.fullscreenMaterial = d;
    for (let E = 0, x = f.length; E < x; ++E) {
      const b = f[E];
      d.setSize(A.width, A.height), d.inputBuffer = A.texture, e3.setRenderTarget(b), e3.render(o, c), A = b;
    }
    this.fullscreenMaterial = h;
    for (let E = m.length - 1; E >= 0; --E) {
      const x = m[E];
      h.setSize(A.width, A.height), h.inputBuffer = A.texture, h.supportBuffer = f[E].texture, e3.setRenderTarget(x), e3.render(o, c), A = x;
    }
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.set(e3, t);
    let s = r.width, i = r.height;
    for (let o = 0, c = this.downsamplingMipmaps.length; o < c; ++o) s = Math.round(s * 0.5), i = Math.round(i * 0.5), this.downsamplingMipmaps[o].setSize(s, i), o < this.upsamplingMipmaps.length && this.upsamplingMipmaps[o].setSize(s, i);
  }
  initialize(e3, t, r) {
    if (r !== void 0) {
      const s = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
      for (const i of s) i.texture.type = r;
      if (r !== Ve) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      else if (e3 !== null && e3.outputColorSpace === Ce) for (const i of s) i.texture.colorSpace = Ce;
    }
  }
  dispose() {
    super.dispose();
    for (const e3 of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) e3.dispose();
  }
}, go = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`, vo = class extends Xt {
  constructor({ blendFunction: e3 = J.SCREEN, luminanceThreshold: t = 1, luminanceSmoothing: r = 0.03, mipmapBlur: s = true, intensity: i = 1, radius: o = 0.85, levels: c = 8, kernelSize: d = jr.LARGE, resolutionScale: h = 0.5, width: f = Se.AUTO_SIZE, height: m = Se.AUTO_SIZE, resolutionX: A = f, resolutionY: E = m } = {}) {
    super("BloomEffect", go, { blendFunction: e3, uniforms: /* @__PURE__ */ new Map([["map", new k(null)], ["intensity", new k(i)]]) }), this.renderTarget = new Re(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new ro({ kernelSize: d }), this.luminancePass = new io({ colorOutput: true }), this.luminanceMaterial.threshold = t, this.luminanceMaterial.smoothing = r, this.mipmapBlurPass = new fo(), this.mipmapBlurPass.enabled = s, this.mipmapBlurPass.radius = o, this.mipmapBlurPass.levels = c, this.uniforms.get("map").value = s ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const x = this.resolution = new Se(this, A, E, h);
    x.addEventListener("change", (b) => this.setSize(x.baseWidth, x.baseHeight));
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
    this.blurPass.initialize(e3, t, r), this.luminancePass.initialize(e3, t, r), this.mipmapBlurPass.initialize(e3, t, r), r !== void 0 && (this.renderTarget.texture.type = r, e3 !== null && e3.outputColorSpace === Ce && (this.renderTarget.texture.colorSpace = Ce));
  }
}, ls = class extends Te {
  constructor(e3, t = "inputBuffer") {
    super("ShaderPass"), this.fullscreenMaterial = e3, this.input = t;
  }
  setInput(e3) {
    this.input = e3;
  }
  render(e3, t, r, s, i) {
    const o = this.fullscreenMaterial.uniforms;
    t !== null && o !== void 0 && o[this.input] !== void 0 && (o[this.input].value = t.texture), e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(this.scene, this.camera);
  }
  initialize(e3, t, r) {
    r !== void 0 && r !== Ve && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, qs = class extends Te {
  constructor(e3, t, r = null) {
    super("RenderPass", e3, t), this.needsSwap = false, this.needsDepthBlit = true, this.clearPass = new Qr(), this.overrideMaterialManager = r === null ? null : new cs(r), this.ignoreBackground = false, this.skipShadowMapUpdate = false, this.selection = null;
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
    e3 !== null ? t !== null ? t.setMaterial(e3) : this.overrideMaterialManager = new cs(e3) : t !== null && (t.dispose(), this.overrideMaterialManager = null);
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
    const o = this.scene, c = this.camera, d = this.selection, h = c.layers.mask, f = o.background, m = e3.shadowMap.autoUpdate, A = this.renderToScreen ? null : t;
    d !== null && c.layers.set(d.getLayer()), this.skipShadowMapUpdate && (e3.shadowMap.autoUpdate = false), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (o.background = null), this.clearPass.enabled && this.clearPass.render(e3, t), e3.setRenderTarget(A), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(e3, o, c) : e3.render(o, c), c.layers.mask = h, o.background = f, e3.shadowMap.autoUpdate = m;
  }
}, $s = { DEPTH: 0, LUMA: 1, COLOR: 2 }, po = { DISABLED: 0, DEPTH: 1, CUSTOM: 2 }, Ht = { LOW: 0, MEDIUM: 1, HIGH: 2, ULTRA: 3 }, Nt = { DEFAULT: 0, ESKIL: 1 }, Ao = `varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
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
}`, mo = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`, Eo = class extends be {
  constructor(e3 = new me(), t = $s.COLOR) {
    super({ name: "EdgeDetectionMaterial", defines: { THREE_REVISION: Kt.replace(/\D+/g, ""), LOCAL_CONTRAST_ADAPTATION_FACTOR: "2.0", EDGE_THRESHOLD: "0.1", DEPTH_THRESHOLD: "0.01", PREDICATION_MODE: "0", PREDICATION_THRESHOLD: "0.01", PREDICATION_SCALE: "2.0", PREDICATION_STRENGTH: "1.0", DEPTH_PACKING: "0" }, uniforms: { inputBuffer: new k(null), depthBuffer: new k(null), predicationBuffer: new k(null), texelSize: new k(e3) }, blending: Ze, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Ao, vertexShader: mo }), this.edgeDetectionMode = t;
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = gt) {
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
}, wo = `#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
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
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`, xo = "uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}", Co = class extends be {
  constructor(e3 = new me(), t = new me()) {
    super({ name: "SMAAWeightsMaterial", defines: { MAX_SEARCH_STEPS_INT: "16", MAX_SEARCH_STEPS_FLOAT: "16.0", MAX_SEARCH_STEPS_DIAG_INT: "8", MAX_SEARCH_STEPS_DIAG_FLOAT: "8.0", CORNER_ROUNDING: "25", CORNER_ROUNDING_NORM: "0.25", AREATEX_MAX_DISTANCE: "16.0", AREATEX_MAX_DISTANCE_DIAG: "20.0", AREATEX_PIXEL_SIZE: "(1.0 / vec2(160.0, 560.0))", AREATEX_SUBTEX_SIZE: "(1.0 / 7.0)", SEARCHTEX_SIZE: "vec2(66.0, 33.0)", SEARCHTEX_PACKED_SIZE: "vec2(64.0, 16.0)" }, uniforms: { inputBuffer: new k(null), searchTexture: new k(null), areaTexture: new k(null), resolution: new k(t), texelSize: new k(e3) }, blending: Ze, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: wo, vertexShader: xo });
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
}, us = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC", ds = "data:image/png;base64,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", Do = "uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}", Bo = "varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}", Mo = class extends Xt {
  constructor({ blendFunction: e3 = J.SRC, preset: t = Ht.MEDIUM, edgeDetectionMode: r = $s.COLOR, predicationMode: s = po.DISABLED } = {}) {
    super("SMAAEffect", Do, { vertexShader: Bo, blendFunction: e3, attributes: st.CONVOLUTION | st.DEPTH, uniforms: /* @__PURE__ */ new Map([["weightMap", new k(null)]]) });
    let i, o;
    arguments.length > 1 && (i = arguments[0], o = arguments[1], arguments.length > 2 && (t = arguments[2]), arguments.length > 3 && (r = arguments[3])), this.renderTargetEdges = new Re(1, 1, { depthBuffer: false }), this.renderTargetEdges.texture.name = "SMAA.Edges", this.renderTargetWeights = this.renderTargetEdges.clone(), this.renderTargetWeights.texture.name = "SMAA.Weights", this.uniforms.get("weightMap").value = this.renderTargetWeights.texture, this.clearPass = new Qr(true, false, false), this.clearPass.overrideClearColor = new hr(0), this.clearPass.overrideClearAlpha = 1, this.edgeDetectionPass = new ls(new Eo()), this.edgeDetectionMaterial.edgeDetectionMode = r, this.edgeDetectionMaterial.predicationMode = s, this.weightsPass = new ls(new Co());
    const c = new Ps();
    c.onLoad = () => {
      const d = new _e(i);
      d.name = "SMAA.Search", d.magFilter = St, d.minFilter = St, d.generateMipmaps = false, d.needsUpdate = true, d.flipY = true, this.weightsMaterial.searchTexture = d;
      const h = new _e(o);
      h.name = "SMAA.Area", h.magFilter = Me, h.minFilter = Me, h.generateMipmaps = false, h.needsUpdate = true, h.flipY = false, this.weightsMaterial.areaTexture = h, this.dispatchEvent({ type: "load" });
    }, c.itemStart("search"), c.itemStart("area"), i !== void 0 && o !== void 0 ? (c.itemEnd("search"), c.itemEnd("area")) : typeof Image < "u" && (i = new Image(), o = new Image(), i.addEventListener("load", () => c.itemEnd("search")), o.addEventListener("load", () => c.itemEnd("area")), i.src = us, o.src = ds), this.applyPreset(t);
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
      case Ht.LOW:
        t.edgeDetectionThreshold = 0.15, r.orthogonalSearchSteps = 4, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case Ht.MEDIUM:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 8, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case Ht.HIGH:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 16, r.diagonalSearchSteps = 8, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
      case Ht.ULTRA:
        t.edgeDetectionThreshold = 0.05, r.orthogonalSearchSteps = 32, r.diagonalSearchSteps = 16, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
    }
  }
  setDepthTexture(e3, t = gt) {
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
    return us;
  }
  static get areaImageDataURL() {
    return ds;
  }
}, So = `#include <packing>
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
gl_FragColor=vec4(n[index],d[index]);}`, Io = "uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}", To = class extends be {
  constructor() {
    super({ name: "DepthDownsamplingMaterial", defines: { DEPTH_PACKING: "0" }, uniforms: { depthBuffer: new k(null), normalBuffer: new k(null), texelSize: new k(new me()) }, blending: Ze, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: So, vertexShader: Io });
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = gt) {
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
}, yo = class extends Te {
  constructor({ normalBuffer: e3 = null, resolutionScale: t = 0.5, width: r = Se.AUTO_SIZE, height: s = Se.AUTO_SIZE, resolutionX: i = r, resolutionY: o = s } = {}) {
    super("DepthDownsamplingPass");
    const c = new To();
    c.normalBuffer = e3, this.fullscreenMaterial = c, this.needsDepthTexture = true, this.needsSwap = false, this.renderTarget = new Re(1, 1, { minFilter: St, magFilter: St, depthBuffer: false, type: We }), this.renderTarget.texture.name = "DepthDownsamplingPass.Target", this.renderTarget.texture.generateMipmaps = false;
    const d = this.resolution = new Se(this, i, o, t);
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
  setDepthTexture(e3, t = gt) {
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
}, Ro = `uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`, bo = class extends Xt {
  constructor({ blendFunction: e3, eskil: t = false, technique: r = t ? Nt.ESKIL : Nt.DEFAULT, offset: s = 0.5, darkness: i = 0.5 } = {}) {
    super("VignetteEffect", Ro, { blendFunction: e3, defines: /* @__PURE__ */ new Map([["VIGNETTE_TECHNIQUE", r.toFixed(0)]]), uniforms: /* @__PURE__ */ new Map([["offset", new k(s)], ["darkness", new k(i)]]) });
  }
  get technique() {
    return Number(this.defines.get("VIGNETTE_TECHNIQUE"));
  }
  set technique(e3) {
    this.technique !== e3 && (this.defines.set("VIGNETTE_TECHNIQUE", e3.toFixed(0)), this.setChanged());
  }
  get eskil() {
    return this.technique === Nt.ESKIL;
  }
  set eskil(e3) {
    this.technique = e3 ? Nt.ESKIL : Nt.DEFAULT;
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
}, Po = `#include <common>
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
}`, Oo = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", Uo = class extends be {
  constructor(e3, t, r, s, i = false) {
    super({ name: "EffectMaterial", defines: { THREE_REVISION: Kt.replace(/\D+/g, ""), DEPTH_PACKING: "0", ENCODE_OUTPUT: "1" }, uniforms: { inputBuffer: new k(null), depthBuffer: new k(null), resolution: new k(new me()), texelSize: new k(new me()), cameraNear: new k(0.3), cameraFar: new k(1e3), aspect: new k(1), time: new k(0) }, blending: Ze, toneMapped: false, depthWrite: false, depthTest: false, dithering: i }), e3 && this.setShaderParts(e3), t && this.setDefines(t), r && this.setUniforms(r), this.copyCameraSettings(s);
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
  setDepthBuffer(e3, t = gt) {
    this.depthBuffer = e3, this.depthPacking = t;
  }
  setShaderData(e3) {
    this.setShaderParts(e3.shaderParts), this.setDefines(e3.defines), this.setUniforms(e3.uniforms), this.setExtensions(e3.extensions);
  }
  setShaderParts(e3) {
    return this.fragmentShader = Po.replace(te.FRAGMENT_HEAD, e3.get(te.FRAGMENT_HEAD) || "").replace(te.FRAGMENT_MAIN_UV, e3.get(te.FRAGMENT_MAIN_UV) || "").replace(te.FRAGMENT_MAIN_IMAGE, e3.get(te.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = Oo.replace(te.VERTEX_HEAD, e3.get(te.VERTEX_HEAD) || "").replace(te.VERTEX_MAIN_SUPPORT, e3.get(te.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = true, this;
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
    return te;
  }
};
function hs(e3, t, r) {
  for (const s of t) {
    const i = "$1" + e3 + s.charAt(0).toUpperCase() + s.slice(1), o = new RegExp("([^\\.])(\\b" + s + "\\b)", "g");
    for (const c of r.entries()) c[1] !== null && r.set(c[0], c[1].replace(o, i));
  }
}
function Fo(e3, t, r) {
  let s = t.getFragmentShader(), i = t.getVertexShader();
  const o = s !== void 0 && /mainImage/.test(s), c = s !== void 0 && /mainUv/.test(s);
  if (r.attributes |= t.getAttributes(), s === void 0) throw new Error(`Missing fragment shader (${t.name})`);
  if (c && r.attributes & st.CONVOLUTION) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);
  if (!o && !c) throw new Error(`Could not find mainImage or mainUv function (${t.name})`);
  {
    const d = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, h = r.shaderParts;
    let f = h.get(te.FRAGMENT_HEAD) || "", m = h.get(te.FRAGMENT_MAIN_UV) || "", A = h.get(te.FRAGMENT_MAIN_IMAGE) || "", E = h.get(te.VERTEX_HEAD) || "", x = h.get(te.VERTEX_MAIN_SUPPORT) || "";
    const b = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
    if (c && (m += `	${e3}MainUv(UV);
`, r.uvTransformation = true), i !== null && /mainSupport/.test(i)) {
      const O = /mainSupport *\([\w\s]*?uv\s*?\)/.test(i);
      x += `	${e3}MainSupport(`, x += O ? `vUv);
` : `);
`;
      for (const G of i.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) for (const q of G[1].split(/\s*,\s*/)) r.varyings.add(q), b.add(q), N.add(q);
      for (const G of i.matchAll(d)) N.add(G[1]);
    }
    for (const O of s.matchAll(d)) N.add(O[1]);
    for (const O of t.defines.keys()) N.add(O.replace(/\([\w\s,]*\)/g, ""));
    for (const O of t.uniforms.keys()) N.add(O);
    N.delete("while"), N.delete("for"), N.delete("if"), t.uniforms.forEach((O, G) => r.uniforms.set(e3 + G.charAt(0).toUpperCase() + G.slice(1), O)), t.defines.forEach((O, G) => r.defines.set(e3 + G.charAt(0).toUpperCase() + G.slice(1), O));
    const L = /* @__PURE__ */ new Map([["fragment", s], ["vertex", i]]);
    hs(e3, N, r.defines), hs(e3, N, L), s = L.get("fragment"), i = L.get("vertex");
    const Y = t.blendMode;
    if (r.blendModes.set(Y.blendFunction, Y), o) {
      t.inputColorSpace !== null && t.inputColorSpace !== r.colorSpace && (A += t.inputColorSpace === Ce ? `color0 = sRGBTransferOETF(color0);
	` : `color0 = sRGBToLinear(color0);
	`), t.outputColorSpace !== Us ? r.colorSpace = t.outputColorSpace : t.inputColorSpace !== null && (r.colorSpace = t.inputColorSpace);
      const O = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      A += `${e3}MainImage(color0, UV, `, r.attributes & st.DEPTH && O.test(s) && (A += "depth, ", r.readDepth = true), A += `color1);
	`;
      const G = e3 + "BlendOpacity";
      r.uniforms.set(G, Y.opacity), A += `color0 = blend${Y.blendFunction}(color0, color1, ${G});

	`, f += `uniform float ${G};

`;
    }
    if (f += s + `
`, i !== null && (E += i + `
`), h.set(te.FRAGMENT_HEAD, f), h.set(te.FRAGMENT_MAIN_UV, m), h.set(te.FRAGMENT_MAIN_IMAGE, A), h.set(te.VERTEX_HEAD, E), h.set(te.VERTEX_MAIN_SUPPORT, x), t.extensions !== null) for (const O of t.extensions) r.extensions.add(O);
  }
}
var Lo = class extends Te {
  constructor(e3, ...t) {
    super("EffectPass"), this.fullscreenMaterial = new Uo(null, null, null, e3), this.listener = (r) => this.handleEvent(r), this.effects = [], this.setEffects(t), this.skipRendering = false, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
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
    const e3 = new Aa();
    let t = 0;
    for (const c of this.effects) if (c.blendMode.blendFunction === J.DST) e3.attributes |= c.getAttributes() & st.DEPTH;
    else {
      if (e3.attributes & c.getAttributes() & st.CONVOLUTION) throw new Error(`Convolution effects cannot be merged (${c.name})`);
      Fo("e" + t++, c, e3);
    }
    let r = e3.shaderParts.get(te.FRAGMENT_HEAD), s = e3.shaderParts.get(te.FRAGMENT_MAIN_IMAGE), i = e3.shaderParts.get(te.FRAGMENT_MAIN_UV);
    const o = /\bblend\b/g;
    for (const c of e3.blendModes.values()) r += c.getShaderCode().replace(o, `blend${c.blendFunction}`) + `
`;
    e3.attributes & st.DEPTH ? (e3.readDepth && (s = `float depth = readDepth(UV);

	` + s), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = false, e3.colorSpace === Ce && (s += `color0 = sRGBToLinear(color0);
	`), e3.uvTransformation ? (i = `vec2 transformedUv = vUv;
` + i, e3.defines.set("UV", "transformedUv")) : e3.defines.set("UV", "vUv"), e3.shaderParts.set(te.FRAGMENT_HEAD, r), e3.shaderParts.set(te.FRAGMENT_MAIN_IMAGE, s), e3.shaderParts.set(te.FRAGMENT_MAIN_UV, i);
    for (const [c, d] of e3.shaderParts) d !== null && e3.shaderParts.set(c, d.trim().replace(/^#/, `
#`));
    this.skipRendering = t === 0, this.needsSwap = !this.skipRendering, this.fullscreenMaterial.setShaderData(e3);
  }
  recompile() {
    this.updateMaterial();
  }
  getDepthTexture() {
    return this.fullscreenMaterial.depthBuffer;
  }
  setDepthTexture(e3, t = gt) {
    this.fullscreenMaterial.depthBuffer = e3, this.fullscreenMaterial.depthPacking = t;
    for (const r of this.effects) r.setDepthTexture(e3, t);
  }
  render(e3, t, r, s, i) {
    for (const o of this.effects) o.update(e3, t, s);
    if (!this.skipRendering || this.renderToScreen) {
      const o = this.fullscreenMaterial;
      o.inputBuffer = t.texture, o.time += s * this.timeScale, e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(this.scene, this.camera);
    }
  }
  setSize(e3, t) {
    this.fullscreenMaterial.setSize(e3, t);
    for (const r of this.effects) r.setSize(e3, t);
  }
  initialize(e3, t, r) {
    this.renderer = e3;
    for (const s of this.effects) s.initialize(e3, t, r);
    this.updateMaterial(), r !== void 0 && r !== Ve && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
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
}, Go = class extends Te {
  constructor(e3, t, { renderTarget: r, resolutionScale: s = 1, width: i = Se.AUTO_SIZE, height: o = Se.AUTO_SIZE, resolutionX: c = i, resolutionY: d = o } = {}) {
    super("NormalPass"), this.needsSwap = false, this.renderPass = new qs(e3, t, new ri());
    const h = this.renderPass;
    h.ignoreBackground = true, h.skipShadowMapUpdate = true;
    const f = h.getClearPass();
    f.overrideClearColor = new hr(7829503), f.overrideClearAlpha = 1, this.renderTarget = r, this.renderTarget === void 0 && (this.renderTarget = new Re(1, 1, { minFilter: St, magFilter: St }), this.renderTarget.texture.name = "NormalPass.Target");
    const m = this.resolution = new Se(this, c, d, s);
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
  render(e3, t, r, s, i) {
    const o = this.renderToScreen ? null : this.renderTarget;
    this.renderPass.render(e3, o, o);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height);
  }
};
function kt(e3, t, r) {
  return t in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
new me();
new me();
function en(e3, t) {
  if (!(e3 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var He = function e(t, r, s) {
  var i = this;
  en(this, e), kt(this, "dot2", function(o, c) {
    return i.x * o + i.y * c;
  }), kt(this, "dot3", function(o, c, d) {
    return i.x * o + i.y * c + i.z * d;
  }), this.x = t, this.y = r, this.z = s;
}, Ho = [new He(1, 1, 0), new He(-1, 1, 0), new He(1, -1, 0), new He(-1, -1, 0), new He(1, 0, 1), new He(-1, 0, 1), new He(1, 0, -1), new He(-1, 0, -1), new He(0, 1, 1), new He(0, -1, 1), new He(0, 1, -1), new He(0, -1, -1)], fs = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], gs = new Array(512), vs = new Array(512), No = function(t) {
  t > 0 && t < 1 && (t *= 65536), t = Math.floor(t), t < 256 && (t |= t << 8);
  for (var r = 0; r < 256; r++) {
    var s;
    r & 1 ? s = fs[r] ^ t & 255 : s = fs[r] ^ t >> 8 & 255, gs[r] = gs[r + 256] = s, vs[r] = vs[r + 256] = Ho[s % 12];
  }
};
No(0);
function zo(e3) {
  if (typeof e3 == "number") e3 = Math.abs(e3);
  else if (typeof e3 == "string") {
    var t = e3;
    e3 = 0;
    for (var r = 0; r < t.length; r++) e3 = (e3 + (r + 1) * (t.charCodeAt(r) % 96)) % 2147483647;
  }
  return e3 === 0 && (e3 = 311), e3;
}
function ps(e3) {
  var t = zo(e3);
  return function() {
    var r = t * 48271 % 2147483647;
    return t = r, r / 2147483647;
  };
}
var ko = function e2(t) {
  var r = this;
  en(this, e2), kt(this, "seed", 0), kt(this, "init", function(s) {
    r.seed = s, r.value = ps(s);
  }), kt(this, "value", ps(this.seed)), this.init(t);
};
new ko(Math.random());
const Qo = B.createContext(null), As = (e3) => (e3.getAttributes() & 2) === 2, jo = B.memo(B.forwardRef(({ children: e3, camera: t, scene: r, resolutionScale: s, enabled: i = true, renderPriority: o = 1, autoClear: c = true, depthBuffer: d, enableNormalPass: h, stencilBuffer: f, multisampling: m = 8, frameBufferType: A = Ue }, E) => {
  const { gl: x, scene: b, camera: N, size: L } = nt(), Y = r || b, O = t || N, [G, q, z] = B.useMemo(() => {
    const C = new pa(x, { depthBuffer: d, stencilBuffer: f, multisampling: m, frameBufferType: A });
    C.addPass(new qs(Y, O));
    let y = null, H = null;
    return h && (H = new Go(Y, O), H.enabled = false, C.addPass(H), s !== void 0 && (y = new yo({ normalBuffer: H.texture, resolutionScale: s }), y.enabled = false, C.addPass(y))), [C, H, y];
  }, [O, x, d, f, m, A, Y, h, s]);
  B.useEffect(() => G == null ? void 0 : G.setSize(L.width, L.height), [G, L]), Qe((C, y) => {
    if (i) {
      const H = x.autoClear;
      x.autoClear = c, f && !c && x.clearStencil(), G.render(y), x.autoClear = H;
    }
  }, i ? o : 0);
  const W = B.useRef(null);
  B.useLayoutEffect(() => {
    var _a2;
    const C = [], y = W.current.__r3f;
    if (y && G) {
      const H = y.children;
      for (let K = 0; K < H.length; K++) {
        const V = H[K].object;
        if (V instanceof Xt) {
          const _ = [V];
          if (!As(V)) {
            let ee = null;
            for (; (ee = (_a2 = H[K + 1]) == null ? void 0 : _a2.object) instanceof Xt && !As(ee); ) _.push(ee), K++;
          }
          const F = new Lo(O, ..._);
          C.push(F);
        } else V instanceof Te && C.push(V);
      }
      for (const K of C) G == null ? void 0 : G.addPass(K);
      q && (q.enabled = true), z && (z.enabled = true);
    }
    return () => {
      for (const H of C) G == null ? void 0 : G.removePass(H);
      q && (q.enabled = false), z && (z.enabled = false);
    };
  }, [G, e3, O, q, z]), B.useEffect(() => {
    const C = x.toneMapping;
    return x.toneMapping = ai, () => {
      x.toneMapping = C;
    };
  }, [x]);
  const re = B.useMemo(() => ({ composer: G, normalPass: q, downSamplingPass: z, resolutionScale: s, camera: O, scene: Y }), [G, q, z, s, O, Y]);
  return B.useImperativeHandle(E, () => G, [G]), l.jsx(Qo.Provider, { value: re, children: l.jsx("group", { ref: W, children: e3 }) });
}));
let Yo = 0;
const ms = /* @__PURE__ */ new WeakMap(), Yr = (e3, t) => function({ blendFunction: r = t == null ? void 0 : t.blendFunction, opacity: s = t == null ? void 0 : t.opacity, ...i }) {
  let o = ms.get(e3);
  if (!o) {
    const h = `@react-three/postprocessing/${e3.name}-${Yo++}`;
    Os({ [h]: e3 }), ms.set(e3, o = h);
  }
  const c = nt((h) => h.camera), d = Un.useMemo(() => [...(t == null ? void 0 : t.args) ?? [], ...i.args ?? [{ ...t, ...i }]], [JSON.stringify(i)]);
  return l.jsx(o, { camera: c, "blendMode-blendFunction": r, "blendMode-opacity-value": s, ...i, args: d });
}, Wo = Yr(vo, { blendFunction: 0 }), Vo = Yr(Mo), Xo = Yr(bo), Er = 64;
function Ko() {
  return l.jsxs("group", { children: [l.jsx(Zo, {}), l.jsx(_o, {}), l.jsx(Es, { rotation: Math.PI / 4, height: 30, length: ss * 2.1 }), l.jsx(Es, { rotation: -Math.PI / 4, height: 37, length: ss * 2.1 }), l.jsx(Jo, {}), l.jsx(qo, {})] });
}
function _o() {
  const e3 = B.useMemo(() => Array.from({ length: Er }).map((t, r) => {
    const s = r / Er * Math.PI * 2, i = Math.PI * Ne / Er + 0.35;
    return { angle: s, half: i };
  }), []);
  return l.jsx(vt, { type: "fixed", colliders: false, friction: 1, children: e3.map(({ angle: t, half: r }, s) => l.jsxs("group", { position: [Math.cos(t) * Ne, Ct, Math.sin(t) * Ne], rotation: [0, -t, 0], children: [l.jsx(it, { args: [dt / 2, 0.35, r], position: [0, -0.35, 0] }), [-1, 1].map((i) => l.jsx(it, { args: [0.35, 0.55, r], position: [i * dt / 2, 0.2, 0] }, i))] }, s)) });
}
function Zo() {
  return l.jsxs("group", { position: [0, Ct, 0], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], receiveShadow: true, children: [l.jsx("ringGeometry", { args: [Ne - dt / 2, Ne + dt / 2, 128] }), l.jsx("meshStandardMaterial", { color: Q.deck, roughness: 0.45, metalness: 0.6, side: rt })] }), [-dt / 2, dt / 2].map((e3, t) => l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.16, 0], children: [l.jsx("ringGeometry", { args: [Ne + e3 - 0.2, Ne + e3 + 0.2, 128] }), l.jsx("meshStandardMaterial", { color: t ? Q.magenta : Q.cyan, emissive: t ? Q.magenta : Q.cyan, emissiveIntensity: 3.4, toneMapped: false, side: rt })] }, e3)), l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -0.45, 0], children: [l.jsx("ringGeometry", { args: [Ne - 1.6, Ne + 1.6, 96] }), l.jsx("meshStandardMaterial", { color: Q.cyan, emissive: Q.cyan, emissiveIntensity: 1.1, toneMapped: false, side: rt })] })] });
}
function Es({ rotation: e3, height: t, length: r }) {
  return l.jsxs("group", { position: [0, t, 0], rotation: [0, e3, 0], children: [l.jsxs("mesh", { receiveShadow: true, castShadow: true, children: [l.jsx("boxGeometry", { args: [dt, 0.5, r] }), l.jsx("meshStandardMaterial", { color: Q.deck, roughness: 0.45, metalness: 0.6, flatShading: true })] }), [-1, 1].map((s) => l.jsxs("mesh", { position: [s * dt / 2, 0.3, 0], children: [l.jsx("boxGeometry", { args: [0.22, 0.22, r] }), l.jsx("meshStandardMaterial", { color: s > 0 ? Q.magenta : Q.cyan, emissive: s > 0 ? Q.magenta : Q.cyan, emissiveIntensity: 3.6, toneMapped: false })] }, s)), Array.from({ length: Math.floor(r / 12) }).map((s, i) => l.jsxs("mesh", { position: [0, 0.28, -r / 2 + 6 + i * 12], children: [l.jsx("boxGeometry", { args: [0.5, 0.1, 4] }), l.jsx("meshStandardMaterial", { color: Q.lime, emissive: Q.lime, emissiveIntensity: 2.2, toneMapped: false })] }, i)), l.jsx($o, { length: r })] });
}
function Jo() {
  const e3 = B.useMemo(() => Array.from({ length: 16 }).map((t, r) => {
    const s = r / 16 * Math.PI * 2;
    return [Math.cos(s) * Ne, Math.sin(s) * Ne];
  }), []);
  return l.jsxs("group", { children: [l.jsxs(It, { limit: e3.length, castShadow: true, children: [l.jsx("cylinderGeometry", { args: [0.7, 1.3, Ct, 6] }), l.jsx("meshStandardMaterial", { color: Q.deckEdge, roughness: 0.6, metalness: 0.4, flatShading: true }), e3.map(([t, r], s) => l.jsx(Tt, { position: [t, Ct / 2, r] }, s))] }), l.jsxs(It, { limit: e3.length, children: [l.jsx("torusGeometry", { args: [1.5, 0.16, 6, 16] }), l.jsx("meshStandardMaterial", { color: Q.cyan, emissive: Q.cyan, emissiveIntensity: 2.8, toneMapped: false }), e3.map(([t, r], s) => l.jsx(Tt, { position: [t, Ct - 2.4, r], rotation: [Math.PI / 2, 0, 0] }, s))] })] });
}
const tn = l.jsx("boxGeometry", { args: [0.5, 0.3, 4.5] });
function qo() {
  const e3 = B.useRef(null), t = B.useMemo(() => Array.from({ length: 14 }).map((r, s) => ({ angle: s / 14 * Math.PI * 2, direction: s % 2 ? 1 : -1, offset: s % 2 ? 1.9 : -1.9, speed: 0.055 + s % 5 * 0.012, color: s % 2 ? Q.magenta : Q.cyan })), []);
  return Qe((r, s) => {
    e3.current && e3.current.children.forEach((i, o) => {
      const c = t[o];
      c.angle += s * c.speed * c.direction;
      const d = Ne + c.offset;
      i.position.set(Math.cos(c.angle) * d, Ct + 0.4, Math.sin(c.angle) * d), i.rotation.y = -c.angle + Math.PI / 2;
    });
  }), l.jsx("group", { ref: e3, children: t.map((r, s) => l.jsxs("mesh", { children: [tn, l.jsx("meshStandardMaterial", { color: r.color, emissive: r.color, emissiveIntensity: 6, toneMapped: false })] }, s)) });
}
function $o({ length: e3 }) {
  const t = B.useRef(null), r = B.useMemo(() => Array.from({ length: 6 }).map((s, i) => ({ t: i / 6 * e3, direction: i % 2 ? 1 : -1, offset: i % 2 ? 1.9 : -1.9, speed: 26 + i % 3 * 9, color: i % 2 ? Q.magenta : Q.cyan })), [e3]);
  return Qe((s, i) => {
    t.current && t.current.children.forEach((o, c) => {
      const d = r[c];
      d.t = (d.t + i * d.speed + e3) % e3, o.position.set(d.offset, 0.45, d.direction > 0 ? d.t - e3 / 2 : e3 / 2 - d.t);
    });
  }), l.jsx("group", { ref: t, children: r.map((s, i) => l.jsxs("mesh", { children: [tn, l.jsx("meshStandardMaterial", { color: s.color, emissive: s.color, emissiveIntensity: 6, toneMapped: false })] }, i)) });
}
const ws = { A: "01110 10001 10001 11111 10001 10001 10001", B: "11110 10001 10001 11110 10001 10001 11110", C: "01111 10000 10000 10000 10000 10000 01111", D: "11110 10001 10001 10001 10001 10001 11110", E: "11111 10000 10000 11110 10000 10000 11111", F: "11111 10000 10000 11110 10000 10000 10000", G: "01111 10000 10000 10111 10001 10001 01111", H: "10001 10001 10001 11111 10001 10001 10001", I: "11111 00100 00100 00100 00100 00100 11111", J: "00111 00010 00010 00010 00010 10010 01100", K: "10001 10010 10100 11000 10100 10010 10001", L: "10000 10000 10000 10000 10000 10000 11111", M: "10001 11011 10101 10101 10001 10001 10001", N: "10001 11001 10101 10011 10001 10001 10001", O: "01110 10001 10001 10001 10001 10001 01110", P: "11110 10001 10001 11110 10000 10000 10000", Q: "01110 10001 10001 10001 10101 10010 01101", R: "11110 10001 10001 11110 10100 10010 10001", S: "01111 10000 10000 01110 00001 00001 11110", T: "11111 00100 00100 00100 00100 00100 00100", U: "10001 10001 10001 10001 10001 10001 01110", V: "10001 10001 10001 10001 10001 01010 00100", W: "10001 10001 10001 10101 10101 11011 10001", X: "10001 10001 01010 00100 01010 10001 10001", Y: "10001 10001 01010 00100 00100 00100 00100", Z: "11111 00001 00010 00100 01000 10000 11111", 0: "01110 10001 10011 10101 11001 10001 01110", 1: "00100 01100 00100 00100 00100 00100 01110", 2: "01110 10001 00001 00010 00100 01000 11111", 3: "11110 00001 00001 01110 00001 00001 11110", 4: "00010 00110 01010 10010 11111 00010 00010", 5: "11111 10000 11110 00001 00001 10001 01110", 6: "00110 01000 10000 11110 10001 10001 01110", 7: "11111 00001 00010 00100 01000 01000 01000", 8: "01110 10001 10001 01110 10001 10001 01110", 9: "01110 10001 10001 01111 00001 00010 01100", "!": "00100 00100 00100 00100 00100 00000 00100", "?": "01110 10001 00001 00110 00100 00000 00100", ".": "00000 00000 00000 00000 00000 01100 01100", "'": "00100 00100 00000 00000 00000 00000 00000", "&": "01100 10010 10010 01100 10101 10010 01101", "-": "00000 00000 00000 11111 00000 00000 00000", "/": "00001 00010 00010 00100 01000 01000 10000", " ": "00000 00000 00000 00000 00000 00000 00000" }, wr = 5, xr = 7, xs = 1;
function ec(e3) {
  const t = e3.toUpperCase().split(""), r = t.length * wr + Math.max(0, t.length - 1) * xs, s = [];
  return t.forEach((i, o) => {
    const c = (ws[i] ?? ws["?"]).split(" "), d = o * (wr + xs);
    c.forEach((h, f) => {
      for (let m = 0; m < wr; m += 1) h[m] === "1" && s.push({ x: d + m - (r - 1) / 2, y: xr - 1 - f - (xr - 1) / 2 });
    });
  }), { cubes: s, width: r, height: xr };
}
const tr = new oi();
function Mt({ children: e3, position: t = [0, 0, 0], rotation: r = [0, 0, 0], size: s = 1, depth: i = 1, color: o = "#ffffff", emissive: c = "#000000", emissiveIntensity: d = 0, wave: h = 0 }) {
  const f = B.useRef(null), { cubes: m } = B.useMemo(() => ec(e3), [e3]), A = (E) => {
    f.current && (m.forEach((x, b) => {
      const N = h ? Math.sin(E * 1.6 + x.x * 0.35) * h : 0;
      tr.position.set(x.x * s, x.y * s + N, 0), tr.scale.setScalar(1), tr.updateMatrix(), f.current.setMatrixAt(b, tr.matrix);
    }), f.current.instanceMatrix.needsUpdate = true);
  };
  return B.useLayoutEffect(() => A(0)), Qe(({ clock: E }) => {
    h && A(E.elapsedTime);
  }), l.jsxs("instancedMesh", { ref: f, args: [void 0, void 0, m.length], position: t, rotation: r, castShadow: true, receiveShadow: true, children: [l.jsx("boxGeometry", { args: [s * 0.96, s * 0.96, i] }), l.jsx("meshStandardMaterial", { color: o, emissive: c, emissiveIntensity: d, roughness: 0.35, metalness: 0.1, flatShading: true })] });
}
const or = [Math.PI * 0.5, Math.PI, Math.PI * 1.5], rn = (e3) => Yt(e3), Cr = 9, tc = 16, Ae = { running: false, checkpoint: 0, time: 0, armed: true }, Cs = (e3) => rn(e3), rr = (e3, t, r, s) => {
  const i = e3 - r.x, o = t - r.z;
  return i * i + o * o < s * s;
};
function rc(e3, t, r, s) {
  const i = Cs(0);
  if (Ae.running) {
    Ae.time += r;
    const o = or[Ae.checkpoint];
    o !== void 0 && rr(e3, t, Cs(o), Cr) && (Ae.checkpoint += 1), Ae.checkpoint >= or.length && rr(e3, t, i, Cr) && (s.finishLap(Ae.time), Ae.running = false, Ae.checkpoint = 0, Ae.time = 0, Ae.armed = false), (Math.hypot(e3, t) < 100 || ne.y < 16) && (Ae.running = false, Ae.checkpoint = 0, Ae.time = 0);
  } else Ae.armed && rr(e3, t, i, Cr) && (Ae.running = true, Ae.checkpoint = 0, Ae.time = 0, Ae.armed = false);
  !Ae.armed && !rr(e3, t, i, tc) && (Ae.armed = true), ne.raceRunning = Ae.running, ne.raceTime = Ae.time, ne.raceCheckpoint = Ae.checkpoint, ne.raceTotal = or.length;
}
const ke = 15, sc = 180, nc = 72, ic = 5.2, Ds = 0.34;
function Bs(e3) {
  const t = [];
  for (let i = 0; i <= e3; i += 1) {
    const o = i / e3 * Math.PI * 2, c = Yt(o);
    t.push(new he(c.x, c.y, c.z));
  }
  const r = [], s = [];
  for (let i = 0; i < e3; i += 1) {
    const o = t[i + 1].clone().sub(t[i]);
    r.push(Math.atan2(o.x, o.z)), s.push(o.length());
  }
  return Array.from({ length: e3 }, (i, o) => {
    const c = t[o], d = t[o + 1], h = d.clone().sub(c), f = Math.hypot(h.x, h.z);
    let A = r[(o + 1) % e3] - r[o];
    A = (A + Math.PI) % (Math.PI * 2) - Math.PI;
    const E = A / Math.max(s[o], 1e-3);
    return { position: c.clone().lerp(d, 0.5), yaw: r[o], pitch: -Math.atan2(h.y, f), roll: ht.clamp(E * ic, -Ds, Ds), length: h.length() + 0.6, angle: o / e3 * Math.PI * 2 };
  });
}
function ac(e3) {
  const t = e3.map((r) => {
    const s = new ci(r.pitch, r.yaw, r.roll, "YXZ"), i = new Wt().setFromEuler(s);
    return { position: r.position.clone(), forward: new he(0, 0, 1).applyQuaternion(i), right: new he(1, 0, 0).applyQuaternion(i), up: new he(0, 1, 0).applyQuaternion(i) };
  });
  return t.push(t[0]), t;
}
function oc() {
  const e3 = B.useMemo(() => Bs(nc), []), t = B.useMemo(() => ac(Bs(sc)), []);
  return l.jsxs("group", { children: [l.jsx(lc, { frames: t }), l.jsx(dc, { segments: e3 }), l.jsx(hc, { frames: t }), l.jsx(fc, {}), l.jsx(gc, {}), l.jsx(vc, {}), l.jsx(pc, {})] });
}
const cc = (e3) => [e3.pitch, e3.yaw, e3.roll, "YXZ"];
function Ms(e3, t, r = true) {
  const s = [], i = (d, h, f) => {
    s.push(d.position.x + d.right.x * h + d.up.x * f, d.position.y + d.right.y * h + d.up.y * f, d.position.z + d.right.z * h + d.up.z * f);
  }, o = e3.length;
  for (let d = 0; d < t.length - 1; d += 1) {
    const h = t[d], f = t[d + 1];
    for (let m = 0; m < (r ? o : o - 1); m += 1) {
      const [A, E] = e3[m], [x, b] = e3[(m + 1) % o];
      i(h, A, E), i(f, A, E), i(f, x, b), i(h, A, E), i(f, x, b), i(h, x, b);
    }
  }
  const c = new Ls();
  return c.setAttribute("position", new ui(s, 3)), c.computeVertexNormals(), c;
}
const tt = ke / 2;
function lc({ frames: e3 }) {
  const t = B.useMemo(() => Ms([[-tt, 0], [tt, 0], [tt, -0.5], [-tt, -0.5]], e3), [e3]), r = B.useMemo(() => [-1, 1].map((s) => Ms([[s * tt - 0.18, 0], [s * tt + 0.18, 0], [s * tt + 0.18, 0.9], [s * tt - 0.18, 0.9]], e3)), [e3]);
  return l.jsxs("group", { children: [l.jsx("mesh", { geometry: t, receiveShadow: true, children: l.jsx("meshStandardMaterial", { color: "#242a5c", emissive: "#2b3370", emissiveIntensity: 0.55, roughness: 0.55, metalness: 0.4, flatShading: true }) }), r.map((s, i) => l.jsx("mesh", { geometry: s, children: l.jsx("meshStandardMaterial", { color: i ? Q.amber : Q.cyan, emissive: i ? Q.amber : Q.cyan, emissiveIntensity: 3, toneMapped: false }) }, i)), l.jsx(uc, { frames: e3 })] });
}
function uc({ frames: e3 }) {
  const t = B.useMemo(() => {
    const s = [], i = new ns();
    for (let o = 0; o < e3.length - 1; o += 3) {
      const c = e3[o], d = c.forward;
      i.makeBasis(c.right, c.up, d);
      const h = new Wt().setFromRotationMatrix(i);
      for (const f of [-1, 1]) s.push({ position: c.position.clone().addScaledVector(c.right, f * (tt - 1.1)).addScaledVector(c.up, 0.3), quaternion: h });
    }
    return s;
  }, [e3]), r = B.useMemo(() => {
    const s = [], i = new ns();
    for (let o = 0; o < e3.length - 1; o += 6) {
      const c = e3[o];
      i.makeBasis(c.right, c.up, c.forward), s.push({ position: c.position.clone().addScaledVector(c.up, 0.3), quaternion: new Wt().setFromRotationMatrix(i) });
    }
    return s;
  }, [e3]);
  return l.jsxs("group", { children: [l.jsxs(It, { limit: t.length, range: t.length, children: [l.jsx("boxGeometry", { args: [0.5, 0.1, 0.5] }), l.jsx("meshStandardMaterial", { color: "#f2f5ff", emissive: "#cfe4ff", emissiveIntensity: 2.2, toneMapped: false }), t.map((s, i) => l.jsx(Tt, { position: s.position, quaternion: s.quaternion }, i))] }), l.jsxs(It, { limit: r.length, range: r.length, children: [l.jsx("boxGeometry", { args: [0.5, 0.06, 4] }), l.jsx("meshStandardMaterial", { color: Q.lime, emissive: Q.lime, emissiveIntensity: 1.6, toneMapped: false }), r.map((s, i) => l.jsx(Tt, { position: s.position, quaternion: s.quaternion }, i))] })] });
}
function dc({ segments: e3 }) {
  return l.jsx(vt, { type: "fixed", colliders: false, friction: 1, children: e3.map((t, r) => l.jsxs("group", { position: t.position, rotation: cc(t), children: [l.jsx(it, { args: [ke / 2, 0.25, t.length / 2] }), [-1, 1].map((s) => l.jsx(it, { args: [0.36, 1, t.length / 2], position: [s * ke / 2, 1, 0] }, s))] }, r)) });
}
function hc({ frames: e3 }) {
  const t = B.useMemo(() => e3.filter((r, s) => s % 12 === 0), [e3]);
  return l.jsxs("group", { children: [l.jsxs(It, { limit: t.length, range: t.length, children: [l.jsx("cylinderGeometry", { args: [0.9, 1.8, 1, 6] }), l.jsx("meshStandardMaterial", { color: Q.deckEdge, roughness: 0.6, flatShading: true }), t.map((r, s) => l.jsx(Tt, { position: [r.position.x, r.position.y / 2 - 5, r.position.z], scale: [1, r.position.y + 10, 1] }, s))] }), l.jsxs(It, { limit: t.length, range: t.length, children: [l.jsx("octahedronGeometry", { args: [0.7, 0] }), l.jsx("meshStandardMaterial", { color: "#dfe9ff", emissive: "#bcd4ff", emissiveIntensity: 2.6, toneMapped: false }), t.map((r, s) => l.jsx(Tt, { position: [r.position.x, r.position.y + 5.4, r.position.z] }, s))] })] });
}
function fc() {
  const e3 = di, t = li(e3), r = Math.cos(e3), s = Math.sin(e3), i = t.radius - is, o = t.height, c = Math.atan2(o, i), d = Math.hypot(o, i), h = 16, f = 0.3 / Math.cos(c), m = d + h, A = is + i / 2 - h / 2 * Math.cos(c), E = o / 2 - f - h / 2 * Math.sin(c);
  return l.jsxs("group", { position: [r * A, E, s * A], rotation: [0, -e3 + Math.PI / 2, 0], children: [l.jsxs("group", { rotation: [-c, 0, 0], children: [l.jsxs("mesh", { receiveShadow: true, castShadow: true, children: [l.jsx("boxGeometry", { args: [ke, 0.6, m] }), l.jsx("meshStandardMaterial", { color: Q.deck, roughness: 0.5, metalness: 0.5, flatShading: true })] }), [-1, 1].map((x) => l.jsxs("mesh", { position: [x * ke / 2, 0.5, 0], children: [l.jsx("boxGeometry", { args: [0.32, 0.5, m] }), l.jsx("meshStandardMaterial", { color: x > 0 ? Q.amber : Q.cyan, emissive: x > 0 ? Q.amber : Q.cyan, emissiveIntensity: 3.2, toneMapped: false })] }, x)), Array.from({ length: Math.floor(m / 8) }).map((x, b) => l.jsxs("mesh", { position: [0, 0.34, -m / 2 + 5 + b * 8], children: [l.jsx("boxGeometry", { args: [3.6, 0.08, 0.8] }), l.jsx("meshStandardMaterial", { color: Q.lime, emissive: Q.lime, emissiveIntensity: 2, toneMapped: false })] }, b)), l.jsxs(vt, { type: "fixed", colliders: false, friction: 1, children: [l.jsx(it, { args: [ke / 2, 0.3, m / 2] }), [-1, 1].map((x) => l.jsx(it, { args: [0.32, 0.8, m / 2], position: [x * ke / 2, 0.8, 0] }, x))] })] }), Array.from({ length: 5 }).map((x, b) => {
    const N = (b + 1) / 6, L = -m / 2 + m * N, Y = -E + Math.sin(c) * L * 0.5;
    return l.jsxs("mesh", { position: [0, Y / 2 + E / 2 - 2, L * Math.cos(c)], children: [l.jsx("cylinderGeometry", { args: [0.7, 1.4, Math.max(E + Math.sin(c) * L, 2), 6] }), l.jsx("meshStandardMaterial", { color: Q.deckEdge, roughness: 0.65, flatShading: true })] }, b);
  })] });
}
function gc() {
  const e3 = Yt(0), t = Yt(0.02), r = Math.atan2(t.x - e3.x, t.z - e3.z);
  return l.jsxs("group", { position: [e3.x, e3.y, e3.z], rotation: [0, r, 0], children: [[-1, 1].map((s) => l.jsxs("mesh", { position: [s * ke / 2, 4.5, 0], castShadow: true, children: [l.jsx("boxGeometry", { args: [0.9, 9, 0.9] }), l.jsx("meshStandardMaterial", { color: Q.deckEdge, roughness: 0.5, metalness: 0.5, flatShading: true })] }, s)), l.jsxs("mesh", { position: [0, 9, 0], children: [l.jsx("boxGeometry", { args: [ke + 1, 0.8, 0.8] }), l.jsx("meshStandardMaterial", { color: Q.lime, emissive: Q.lime, emissiveIntensity: 1.1 })] }), Array.from({ length: 10 }).map((s, i) => l.jsxs("mesh", { position: [-ke / 2 + 0.75 + i * 1.5, 0.3, 0], children: [l.jsx("boxGeometry", { args: [1.5, 0.08, 2.4] }), l.jsx("meshStandardMaterial", { color: i % 2 ? "#f2f5ff" : "#141634", emissive: i % 2 ? "#f2f5ff" : "#000000", emissiveIntensity: i % 2 ? 0.5 : 0 })] }, i)), l.jsx(Mt, { position: [0, 11.5, 0], rotation: [0, Math.PI / 2, 0], size: 0.42, depth: 0.4, color: "#dfe6ff", emissive: Q.lime, emissiveIntensity: 0.9, children: "CIRCUIT" })] });
}
function vc() {
  const e3 = B.useRef(null);
  return Qe(({ clock: t }) => {
    e3.current && e3.current.children.forEach((r, s) => {
      const i = r.children[0];
      if (!i) return;
      const o = i.material, c = ne.raceCheckpoint === s && ne.raceRunning;
      o.emissiveIntensity = c ? 2.6 + Math.sin(t.elapsedTime * 6) * 1.2 : ne.raceRunning ? 0.4 : 1.2;
    });
  }), l.jsx("group", { ref: e3, children: or.map((t, r) => {
    const s = rn(t), i = Yt(t + 0.02), o = Math.atan2(i.x - s.x, i.z - s.z);
    return l.jsxs("group", { position: [s.x, s.y, s.z], rotation: [0, o, 0], children: [l.jsxs("mesh", { position: [0, 4, 0], children: [l.jsx("boxGeometry", { args: [ke, 0.5, 0.5] }), l.jsx("meshStandardMaterial", { color: Q.magenta, emissive: Q.magenta, emissiveIntensity: 1.2, toneMapped: false })] }), [-1, 1].map((c) => l.jsxs("mesh", { position: [c * ke / 2, 2, 0], children: [l.jsx("boxGeometry", { args: [0.4, 4, 0.4] }), l.jsx("meshStandardMaterial", { color: Q.deckEdge, roughness: 0.6, flatShading: true })] }, c))] }, r);
  }) });
}
function pc() {
  return Qe((e3, t) => {
    rc(ne.x, ne.z, t, Dt);
  }), null;
}
function Ac({ zone: e3 }) {
  const [t, r] = e3.position, s = yr((m) => m.activeZone === e3.id), i = yr((m) => m.visited.includes(e3.id)), o = B.useRef(null), c = B.useRef(null), d = B.useRef(null), h = B.useMemo(() => Math.atan2(-t, -r), [t, r]), f = B.useMemo(() => Array.from({ length: 10 }).map((m, A) => {
    const E = A / 10 * Math.PI * 2 + Math.PI / 10;
    return [Math.cos(E) * (e3.radius + 4), Math.sin(E) * (e3.radius + 4)];
  }), [e3.radius]);
  return Qe(({ clock: m }) => {
    const A = m.elapsedTime;
    o.current && (o.current.position.y = 16 + Math.sin(A * 0.9) * 0.5, o.current.rotation.y = h + Math.sin(A * 0.4) * 0.05);
    const E = s ? 1.5 + Math.sin(A * 4) * 0.35 : 1;
    if (c.current) {
      const x = c.current.material;
      x.opacity = 0.1 * E + (i ? 0.05 : 0);
    }
    d.current && (d.current.intensity = 52 * E);
  }), l.jsxs(l.Fragment, { children: [l.jsxs(vt, { type: "fixed", colliders: false, position: [t, 0, r], children: [l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.05, 0], receiveShadow: true, children: [l.jsx("circleGeometry", { args: [e3.radius + 6, 56] }), l.jsx("meshStandardMaterial", { color: "#4a4688", roughness: 0.85 })] }), l.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.07, 0], receiveShadow: true, children: [l.jsx("ringGeometry", { args: [e3.radius - 1.2, e3.radius, 56] }), l.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.glow, emissiveIntensity: s ? 2.6 : 1.7, toneMapped: false })] }), f.map(([m, A], E) => l.jsx(hi, { args: [3.5, 0.8], position: [m, 3.5, A] }, E))] }), l.jsxs("group", { position: [t, 0, r], children: [f.map(([m, A], E) => l.jsxs("group", { position: [m, 0, A], children: [l.jsxs("mesh", { castShadow: true, receiveShadow: true, position: [0, 3.4, 0], children: [l.jsx("boxGeometry", { args: [1.5, 6.8, 1.5] }), l.jsx("meshStandardMaterial", { color: "#37336b", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 7.2, 0], children: [l.jsx("octahedronGeometry", { args: [0.85, 0] }), l.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.color, emissiveIntensity: 3.2, toneMapped: false })] })] }, E)), l.jsxs("mesh", { ref: c, position: [0, 22, 0], children: [l.jsx("cylinderGeometry", { args: [e3.radius - 2, e3.radius + 1, 44, 24, 1, true] }), l.jsx("meshBasicMaterial", { color: e3.glow, transparent: true, opacity: 0.12, side: rt, depthWrite: false, toneMapped: false })] }), l.jsx("pointLight", { ref: d, position: [0, 12, 0], color: e3.color, distance: 70, decay: 2 }), l.jsx("group", { ref: o, children: l.jsx(Mt, { size: 0.95, depth: 1.2, color: e3.glow, emissive: e3.color, emissiveIntensity: s ? 2.2 : 1.1, wave: 0.25, children: e3.sign }) })] })] });
}
function mc({ position: e3 }) {
  const t = B.useMemo(() => {
    const r = [];
    for (let s = 0; s < 4; s += 1) for (let i = 0; i <= s; i += 1) r.push([e3[0] + (i - s / 2) * 2.4, 1.4, e3[1] + s * 2.2 - 3]);
    return r;
  }, [e3]);
  return l.jsx(l.Fragment, { children: t.map((r, s) => l.jsx(Ec, { position: r }, s)) });
}
function Ec({ position: e3 }) {
  const t = B.useRef(null), r = B.useRef(new he(...e3));
  return Qe(() => {
    const s = t.current;
    if (!s) return;
    const i = s.translation();
    (i.y < -6 || new he(i.x, 0, i.z).distanceTo(new he(r.current.x, 0, r.current.z)) > 40) && (s.setTranslation({ x: r.current.x, y: r.current.y + 6, z: r.current.z }, true), s.setLinvel({ x: 0, y: 0, z: 0 }, true), s.setAngvel({ x: 0, y: 0, z: 0 }, true));
  }), l.jsxs(vt, { ref: t, position: e3, colliders: false, mass: 0.4, restitution: 0.35, linearDamping: 0.4, angularDamping: 0.6, children: [l.jsx(it, { args: [0.45, 1.3, 0.45] }), l.jsxs("mesh", { castShadow: true, position: [0, -1.15, 0], children: [l.jsx("boxGeometry", { args: [1.1, 0.3, 1.1] }), l.jsx("meshStandardMaterial", { color: "#3a3468", roughness: 0.6, flatShading: true })] }), l.jsxs("mesh", { castShadow: true, position: [0, -0.5, 0], children: [l.jsx("cylinderGeometry", { args: [0.16, 0.24, 1, 6] }), l.jsx("meshStandardMaterial", { color: "#ffc861", metalness: 0.8, roughness: 0.25, flatShading: true })] }), l.jsxs("mesh", { castShadow: true, position: [0, 0.45, 0], children: [l.jsx("cylinderGeometry", { args: [0.62, 0.3, 1.2, 8] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ff9d2e", emissiveIntensity: 0.9, metalness: 0.85, roughness: 0.2, flatShading: true })] }), [-0.72, 0.72].map((s) => l.jsxs("mesh", { position: [s, 0.5, 0], rotation: [0, 0, s > 0 ? -0.5 : 0.5], children: [l.jsx("torusGeometry", { args: [0.3, 0.08, 6, 10, Math.PI] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", metalness: 0.85, roughness: 0.2 })] }, s))] });
}
function Dr({ position: e3, rotation: t = 0 }) {
  return l.jsxs(vt, { type: "fixed", colliders: "hull", position: [e3[0], 0, e3[1]], rotation: [0, t, 0], children: [l.jsxs("mesh", { castShadow: true, receiveShadow: true, rotation: [-0.3, 0, 0], position: [0, 1.3, 0], children: [l.jsx("boxGeometry", { args: [9, 0.6, 12] }), l.jsx("meshStandardMaterial", { color: "#5b56a4", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 1.72, -5.4], rotation: [-0.3, 0, 0], children: [l.jsx("boxGeometry", { args: [9, 0.12, 1.2] }), l.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ffae3a", emissiveIntensity: 2.5, toneMapped: false })] })] });
}
function Ss({ position: e3 }) {
  const t = B.useMemo(() => {
    const r = [];
    for (let s = 0; s < 3; s += 1) {
      const i = 3 - s;
      for (let o = 0; o < i; o += 1) r.push([e3[0] + (o - (i - 1) / 2) * 1.7, 0.85 + s * 1.6, e3[1]]);
    }
    return r;
  }, [e3]);
  return l.jsx(l.Fragment, { children: t.map((r, s) => l.jsxs(vt, { position: r, colliders: false, mass: 0.5, restitution: 0.2, children: [l.jsx(it, { args: [0.78, 0.78, 0.78] }), l.jsxs("mesh", { castShadow: true, receiveShadow: true, children: [l.jsx("boxGeometry", { args: [1.56, 1.56, 1.56] }), l.jsx("meshStandardMaterial", { color: "#6d5cc4", roughness: 0.65, flatShading: true })] }), l.jsxs("mesh", { children: [l.jsx("boxGeometry", { args: [1.62, 0.16, 1.62] }), l.jsx("meshStandardMaterial", { color: "#c3b4ff", emissive: "#8f7bff", emissiveIntensity: 1.4, toneMapped: false })] })] }, s)) });
}
const sr = [0, 1.6, 11], wc = 46, xc = 38, Cc = 26, Dc = 2.5, Is = 0.86, Bc = 3.4, Mc = 7, Sc = 0.75, At = new he(), Br = new he(), Mr = new he(), Et = new he(), Sr = new Wt(), Ir = new he(), Tr = new he(), wt = new he(), nr = new he(), Ts = new Wt(), ir = new he(), Ic = new he(0, 5.6, 0), Tc = new he(0, 1.2, 0);
function yc(e3, { lateral: t, speed: r, delta: s }) {
  if (t > Bc && r > Mc) {
    e3.held += s, e3.lapsed = 0;
    const o = Math.min(1 + Math.floor(e3.held), 8);
    e3.chain += t * r * 0.12 * o * s, ne.driftMultiplier = o, ne.driftAngle = Math.min(t / 12, 1), ne.driftActive = true;
  } else e3.chain > 0 ? (e3.lapsed += s, ne.driftAngle = Math.max(ne.driftAngle - s * 2, 0), e3.lapsed >= Sc && (Dt.bankDrift(e3.chain), e3.chain = 0, e3.held = 0, e3.lapsed = 0, ne.driftMultiplier = 1, ne.driftActive = false)) : (ne.driftActive = false, ne.driftMultiplier = 1, ne.driftAngle = Math.max(ne.driftAngle - s * 2, 0));
  ne.driftChain = e3.chain;
}
function Rc({ onMove: e3 }) {
  const t = B.useRef(null), r = B.useRef(null), s = fi(), i = yr((A) => A.garage), o = gi[i.paint] ?? vi[0], c = B.useRef(o);
  c.current = o;
  const d = B.useRef(false), h = B.useRef(new he()), f = B.useRef({ chain: 0, held: 0, lapsed: 0 }), m = () => {
    const A = t.current;
    A && (A.setTranslation({ x: sr[0], y: sr[1], z: sr[2] }, true), A.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true), A.setLinvel({ x: 0, y: 0, z: 0 }, true), A.setAngvel({ x: 0, y: 0, z: 0 }, true));
  };
  return Qe((A, E) => {
    var _a2;
    const x = t.current;
    if (!x) return;
    const b = Math.min(E, 1 / 20), N = mi(), L = x.rotation();
    Sr.set(L.x, L.y, L.z, L.w), At.set(0, 0, -1).applyQuaternion(Sr), Br.set(1, 0, 0).applyQuaternion(Sr);
    const Y = x.linvel();
    Mr.set(Y.x, Y.y, Y.z);
    const O = Mr.dot(At), G = Mr.dot(Br), q = x.mass(), z = N.forward - N.backward;
    if (z !== 0 && Math.abs(O) < Cc) {
      const ee = z > 0 ? wc : -xc;
      Et.copy(At).multiplyScalar(ee * q * b), x.applyImpulse(Et, true);
    }
    const W = N.brake ? Is * 0.25 : Is;
    if (Et.copy(Br).multiplyScalar(-G * W * q), x.applyImpulse(Et, true), z === 0 || N.brake) {
      const ee = N.brake ? z > 0 ? 0.75 : 3.2 : 0.9;
      Et.copy(At).multiplyScalar(-O * ee * q * b), x.applyImpulse(Et, true);
    }
    const re = N.left - N.right, C = Math.min(Math.abs(O) / 6, 1), y = z !== 0 ? Math.max(C, 0.4) : C, H = O < -0.4 ? -1 : 1, K = Dc * (N.brake ? 1.4 : 1), V = x.angvel();
    x.setAngvel({ x: V.x, y: re * K * y * H, z: V.z }, true);
    const _ = x.translation();
    if (wt.set(_.x, _.y, _.z), (N.reset || _.y < -14) && m(), ne.x = wt.x, ne.y = wt.y, ne.z = wt.z, ne.heading = Math.atan2(At.x, At.z), ne.speed = Math.abs(O), Dt.setSpeed(ne.speed), e3 == null ? void 0 : e3(wt), yc(f.current, { lateral: Math.abs(G), speed: Math.abs(O), delta: b }), r.current) {
      const ee = ht.clamp(-re * C * 0.16, -0.2, 0.2), X = ht.clamp(-z * 0.05, -0.08, 0.08), Pe = 1 - Math.pow(5e-4, b), Je = 1 - Math.pow(2e-3, b);
      r.current.rotation.z = ht.lerp(r.current.rotation.z, ee, Pe), r.current.rotation.x = ht.lerp(r.current.rotation.x, X, Je);
    }
    Ai(s.current, { speed: O, steer: re, throttle: z, brake: N.brake, delta: b, paint: c.current });
    const F = (_a2 = r.current) == null ? void 0 : _a2.parent;
    F ? (F.getWorldPosition(nr), F.getWorldQuaternion(Ts), ir.set(0, 0, -1).applyQuaternion(Ts)) : (nr.copy(wt), ir.copy(At)), Ir.copy(nr).addScaledVector(ir, -11 - C * 3).add(Ic), Tr.copy(nr).addScaledVector(ir, 6).add(Tc), d.current ? (A.camera.position.lerp(Ir, 1 - Math.pow(22e-4, b)), h.current.lerp(Tr, 1 - Math.pow(6e-4, b))) : (A.camera.position.copy(Ir), h.current.copy(Tr), d.current = true), A.camera.lookAt(h.current);
  }), l.jsxs(vt, { ref: t, position: sr, colliders: false, mass: 1, friction: 0.6, restitution: 0.1, linearDamping: 0.35, angularDamping: 4, enabledRotations: [true, true, false], ccd: true, name: "player", children: [l.jsx(it, { args: [1, 0.5, 2.05], density: 2.6 }), l.jsx("group", { ref: r, children: l.jsx(pi, { rig: s, paint: o, design: i.design }) })] });
}
function Gc() {
  const e3 = B.useRef(null);
  B.useEffect(() => {
    Dt.hydrateGarage();
  }, []);
  const t = B.useCallback((r) => {
    let s = null;
    for (const i of Rr) {
      const [o, c] = i.position;
      if (Math.hypot(r.x - o, r.z - c) < i.radius + 9) {
        s = i.id;
        break;
      }
    }
    s !== e3.current && (e3.current && Dt.leaveZone(e3.current), s && Dt.enterZone(s), e3.current = s);
  }, []);
  return l.jsxs(l.Fragment, { children: [l.jsx(bc, {}), l.jsx("color", { attach: "background", args: [Ft.fog] }), l.jsx("fogExp2", { attach: "fog", args: [Ft.fog, 75e-4] }), l.jsx("hemisphereLight", { args: [Ft.horizon, Ft.ground, 1.55] }), l.jsx("ambientLight", { intensity: 0.5, color: "#6c5fbb" }), l.jsx("directionalLight", { position: [48, 70, 28], intensity: 1.9, color: Ft.moon, castShadow: true, "shadow-mapSize": [1024, 1024], "shadow-camera-near": 1, "shadow-camera-far": 220, "shadow-camera-left": -90, "shadow-camera-right": 90, "shadow-camera-top": 90, "shadow-camera-bottom": -90, "shadow-bias": -6e-4 }), l.jsx(ca, { radius: 260, depth: 70, count: 4200, factor: 5, fade: true, speed: 0.6 }), l.jsx(ia, { preset: "night" }), l.jsx(Pc, {}), l.jsxs(Ei, { timeStep: 1 / 60, interpolate: true, gravity: [0, -30, 0], children: [l.jsx(wi, {}), Rr.map((r) => l.jsx(Ac, { zone: r }, r.id)), l.jsx(Oc, {}), l.jsx(Ss, { position: [-15, 4] }), l.jsx(Ss, { position: [15, 4] }), l.jsx(mc, { position: [-54, 54] }), l.jsx(Dr, { position: [30, -44], rotation: 0 }), l.jsx(Dr, { position: [56, 0], rotation: Math.PI / 2 }), l.jsx(Dr, { position: [0, 50], rotation: Math.PI }), l.jsx(Ko, {}), l.jsx(oc, {}), l.jsx(Rc, { onMove: t })] }), l.jsx(xi, {}), l.jsx(Uc, {}), l.jsxs(jo, { multisampling: 0, children: [l.jsx(Wo, { intensity: 1.25, luminanceThreshold: 0.75, luminanceSmoothing: 0.28, mipmapBlur: true, radius: 0.72 }), l.jsx(Xo, { offset: 0.28, darkness: 0.72 }), l.jsx(Vo, {})] })] });
}
function bc() {
  const e3 = nt((r) => r.camera), t = nt((r) => r.size);
  return B.useEffect(() => {
    const r = t.width / t.height, s = ht.degToRad(78), i = 2 * Math.atan(Math.tan(s / 2) / Math.max(r, 0.3));
    e3.fov = ht.clamp(ht.radToDeg(i), 45, 82), e3.updateProjectionMatrix();
  }, [e3, t]), null;
}
function Pc() {
  return l.jsxs("group", { position: [130, 82, -170], children: [l.jsxs("mesh", { children: [l.jsx("sphereGeometry", { args: [16, 24, 24] }), l.jsx("meshBasicMaterial", { color: "#e8e6ff", toneMapped: false })] }), l.jsxs("mesh", { children: [l.jsx("sphereGeometry", { args: [22, 20, 20] }), l.jsx("meshBasicMaterial", { color: "#8f7bff", transparent: true, opacity: 0.16, depthWrite: false })] })] });
}
function Oc() {
  const e3 = B.useRef(null);
  return Qe(({ clock: t }) => {
    e3.current && (e3.current.position.y = 17 + Math.sin(t.elapsedTime * 0.7) * 0.6);
  }), l.jsxs("group", { children: [l.jsx("group", { ref: e3, position: [0, 17, -34], children: l.jsx(Mt, { size: 1.5, depth: 2.2, color: "#7fa4ff", emissive: "#2f5bff", emissiveIntensity: 1.5, wave: 0.35, children: Ci.short }) }), l.jsx(Mt, { position: [0, 8.4, -34], size: 0.44, depth: 0.4, color: "#e8e2ff", emissive: "#9d8bff", emissiveIntensity: 0.9, children: "DRIVE ANYWHERE" }), Rr.map((t) => {
    const [r, s] = t.position, i = Math.hypot(r, s), o = r / i, c = s / i;
    return l.jsx(Mt, { position: [o * 19, 0.35, c * 19], rotation: [-Math.PI / 2, 0, Math.atan2(-o, -c)], size: 0.42, depth: 0.5, color: t.glow, emissive: t.color, emissiveIntensity: 2.2, children: t.sign }, t.id);
  })] });
}
function Uc() {
  const e3 = [[56, 80], [80, 56]];
  return l.jsx("group", { children: Di.map((t, r) => l.jsxs("group", { position: [e3[r][0], 0, e3[r][1]], children: [l.jsxs("mesh", { position: [0, 9, 0], castShadow: true, children: [l.jsx("cylinderGeometry", { args: [0.8, 1.6, 18, 6] }), l.jsx("meshStandardMaterial", { color: "#38346d", roughness: 0.7, flatShading: true })] }), l.jsxs("mesh", { position: [0, 19.5, 0], children: [l.jsx("icosahedronGeometry", { args: [2.3, 0] }), l.jsx("meshStandardMaterial", { color: t.color, emissive: t.color, emissiveIntensity: 4, toneMapped: false })] }), l.jsx("pointLight", { position: [0, 19.5, 0], color: t.color, intensity: 90, distance: 55, decay: 2 }), l.jsx(Mt, { position: [0, 25, 0], rotation: [0, Math.atan2(-e3[r][0], -e3[r][1]), 0], size: 0.46, depth: 0.5, color: "#ffffff", emissive: t.color, emissiveIntensity: 1.8, children: t.name })] }, t.id)) });
}
export {
  Gc as default
};
