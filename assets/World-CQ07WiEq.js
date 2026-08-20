var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as y, j as u, e as gi } from "./index-C9buRGoi.js";
import { R as Lt, M as er, I as vi, S as Ie, D as ut, a as ds, H as Re, F as ze, b as dt, L as Ce, c as bt, d as pi, C as tt, e as _t, O as hs, P as fs, W as Te, U as Jt, f as Ai, g as mi, h as Pt, T as je, i as wi, j as Ei, B as xi, k as Ci, l as ke, m as Di, n as Bi, o as gs, p as Qr, q as we, r as Zt, V as ge, N as We, u as _e, s as qt, t as Si, E as Mi, v as Ti, w as Ii, x as st, y as yi, z as vs, _ as Ri, A as Yr, G as tr, J as bi, K as Pi, Q as ve, X as Oi, Y as Ui, Z as Fi, $ as Cr, a0 as ps, a1 as it, a2 as ft, a3 as Li, a4 as kt, a5 as Gi, a6 as N, a7 as As, a8 as Hi, a9 as Ni, aa as jr, ab as zi, ac as Wr, ad as ki, ae as Qi, af as Vr, ag as Gt, ah as Yi, ai as Dr, aj as Fe, ak as Et, al as Ar, am as ms, an as ji, ao as mr, ap as xt, aq as Wi, ar as Vi, as as Xi, at as Ki } from "./GamePortfolio-C4-BMnI8.js";
const ws = parseInt(Lt.replace(/\D+/g, ""));
var Le = Uint8Array, rt = Uint16Array, wr = Uint32Array, Es = new Le([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), xs = new Le([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Zi = new Le([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Cs = function(e3, t) {
  for (var r = new rt(31), i = 0; i < 31; ++i) r[i] = t += 1 << e3[i - 1];
  for (var a = new wr(r[30]), i = 1; i < 30; ++i) for (var o = r[i]; o < r[i + 1]; ++o) a[o] = o - r[i] << 5 | i;
  return [r, a];
}, Ds = Cs(Es, 2), Bs = Ds[0], _i = Ds[1];
Bs[28] = 258, _i[258] = 28;
var Ji = Cs(xs, 0), qi = Ji[0], Er = new rt(32768);
for (var ue = 0; ue < 32768; ++ue) {
  var $e = (ue & 43690) >>> 1 | (ue & 21845) << 1;
  $e = ($e & 52428) >>> 2 | ($e & 13107) << 2, $e = ($e & 61680) >>> 4 | ($e & 3855) << 4, Er[ue] = (($e & 65280) >>> 8 | ($e & 255) << 8) >>> 1;
}
var It = function(e3, t, r) {
  for (var i = e3.length, a = 0, o = new rt(t); a < i; ++a) ++o[e3[a] - 1];
  var c = new rt(t);
  for (a = 0; a < t; ++a) c[a] = c[a - 1] + o[a - 1] << 1;
  var d;
  if (r) {
    d = new rt(1 << t);
    var h = 15 - t;
    for (a = 0; a < i; ++a) if (e3[a]) for (var g = a << 4 | e3[a], w = t - e3[a], m = c[e3[a] - 1]++ << w, A = m | (1 << w) - 1; m <= A; ++m) d[Er[m] >>> h] = g;
  } else for (d = new rt(i), a = 0; a < i; ++a) e3[a] && (d[a] = Er[c[e3[a] - 1]++] >>> 15 - e3[a]);
  return d;
}, Ht = new Le(288);
for (var ue = 0; ue < 144; ++ue) Ht[ue] = 8;
for (var ue = 144; ue < 256; ++ue) Ht[ue] = 9;
for (var ue = 256; ue < 280; ++ue) Ht[ue] = 7;
for (var ue = 280; ue < 288; ++ue) Ht[ue] = 8;
var Ss = new Le(32);
for (var ue = 0; ue < 32; ++ue) Ss[ue] = 5;
var $i = It(Ht, 9, 1), en = It(Ss, 5, 1), nr = function(e3) {
  for (var t = e3[0], r = 1; r < e3.length; ++r) e3[r] > t && (t = e3[r]);
  return t;
}, Ne = function(e3, t, r) {
  var i = t / 8 | 0;
  return (e3[i] | e3[i + 1] << 8) >> (t & 7) & r;
}, ar = function(e3, t) {
  var r = t / 8 | 0;
  return (e3[r] | e3[r + 1] << 8 | e3[r + 2] << 16) >> (t & 7);
}, tn = function(e3) {
  return (e3 / 8 | 0) + (e3 & 7 && 1);
}, rn = function(e3, t, r) {
  (r == null || r > e3.length) && (r = e3.length);
  var i = new (e3 instanceof rt ? rt : e3 instanceof wr ? wr : Le)(r - t);
  return i.set(e3.subarray(t, r)), i;
}, sn = function(e3, t, r) {
  var i = e3.length;
  if (!i || r && !r.l && i < 5) return t || new Le(0);
  var a = !t || r, o = !r || r.i;
  r || (r = {}), t || (t = new Le(i * 3));
  var c = function(se) {
    var Ve = t.length;
    if (se > Ve) {
      var Xe = new Le(Math.max(Ve * 2, se));
      Xe.set(t), t = Xe;
    }
  }, d = r.f || 0, h = r.p || 0, g = r.b || 0, w = r.l, m = r.d, A = r.m, I = r.n, b = i * 8;
  do {
    if (!w) {
      r.f = d = Ne(e3, h, 1);
      var _ = Ne(e3, h + 1, 3);
      if (h += 3, _) if (_ == 1) w = $i, m = en, A = 9, I = 5;
      else if (_ == 2) {
        var U = Ne(e3, h, 31) + 257, Z = Ne(e3, h + 10, 15) + 4, Y = U + Ne(e3, h + 5, 31) + 1;
        h += 14;
        for (var Q = new Le(Y), ee = new Le(19), x = 0; x < Z; ++x) ee[Zi[x]] = Ne(e3, h + x * 3, 7);
        h += Z * 3;
        for (var M = nr(ee), L = (1 << M) - 1, W = It(ee, M, 1), x = 0; x < Y; ) {
          var j = W[Ne(e3, h, L)];
          h += j & 15;
          var H = j >>> 4;
          if (H < 16) Q[x++] = H;
          else {
            var q = 0, G = 0;
            for (H == 16 ? (G = 3 + Ne(e3, h, 3), h += 2, q = Q[x - 1]) : H == 17 ? (G = 3 + Ne(e3, h, 7), h += 3) : H == 18 && (G = 11 + Ne(e3, h, 127), h += 7); G--; ) Q[x++] = q;
          }
        }
        var re = Q.subarray(0, U), X = Q.subarray(U);
        A = nr(re), I = nr(X), w = It(re, A, 1), m = It(X, I, 1);
      } else throw "invalid block type";
      else {
        var H = tn(h) + 4, z = e3[H - 4] | e3[H - 3] << 8, F = H + z;
        if (F > i) {
          if (o) throw "unexpected EOF";
          break;
        }
        a && c(g + z), t.set(e3.subarray(H, F), g), r.b = g += z, r.p = h = F * 8;
        continue;
      }
      if (h > b) {
        if (o) throw "unexpected EOF";
        break;
      }
    }
    a && c(g + 131072);
    for (var Ge = (1 << A) - 1, nt = (1 << I) - 1, He = h; ; He = h) {
      var q = w[ar(e3, h) & Ge], ce = q >>> 4;
      if (h += q & 15, h > b) {
        if (o) throw "unexpected EOF";
        break;
      }
      if (!q) throw "invalid length/literal";
      if (ce < 256) t[g++] = ce;
      else if (ce == 256) {
        He = h, w = null;
        break;
      } else {
        var Je = ce - 254;
        if (ce > 264) {
          var x = ce - 257, de = Es[x];
          Je = Ne(e3, h, (1 << de) - 1) + Bs[x], h += de;
        }
        var me = m[ar(e3, h) & nt], Qe = me >>> 4;
        if (!me) throw "invalid distance";
        h += me & 15;
        var X = qi[Qe];
        if (Qe > 3) {
          var de = xs[Qe];
          X += ar(e3, h) & (1 << de) - 1, h += de;
        }
        if (h > b) {
          if (o) throw "unexpected EOF";
          break;
        }
        a && c(g + 131072);
        for (var gt = g + Je; g < gt; g += 4) t[g] = t[g - X], t[g + 1] = t[g + 1 - X], t[g + 2] = t[g + 2 - X], t[g + 3] = t[g + 3 - X];
        g = gt;
      }
    }
    r.l = w, r.p = He, r.b = g, w && (d = 1, r.m = A, r.d = m, r.n = I);
  } while (!d);
  return g == t.length ? t : rn(t, 0, g);
}, nn = new Le(0), an = function(e3) {
  if ((e3[0] & 15) != 8 || e3[0] >>> 4 > 7 || (e3[0] << 8 | e3[1]) % 31) throw "invalid zlib data";
  if (e3[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
function Qt(e3, t) {
  return sn((an(e3), e3.subarray(2, -4)), t);
}
var on = typeof TextDecoder < "u" && new TextDecoder(), cn = 0;
try {
  on.decode(nn, { stream: true }), cn = 1;
} catch {
}
const ln = (e3) => e3 && e3.isCubeTexture;
class un extends er {
  constructor(t, r) {
    var i, a;
    const o = ln(t), d = ((a = o ? (i = t.image[0]) == null ? void 0 : i.width : t.image.width) != null ? a : 1024) / 4, h = Math.floor(Math.log2(d)), g = Math.pow(2, h), w = 3 * Math.max(g, 16 * 7), m = 4 * g, A = [o ? "#define ENVMAP_TYPE_CUBE" : "", `#define CUBEUV_TEXEL_WIDTH ${1 / w}`, `#define CUBEUV_TEXEL_HEIGHT ${1 / m}`, `#define CUBEUV_MAX_MIP ${h}.0`], I = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `, b = A.join(`
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
            #include <${ws >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, _ = { map: { value: t }, height: { value: (r == null ? void 0 : r.height) || 15 }, radius: { value: (r == null ? void 0 : r.radius) || 100 } }, H = new vi(1, 16), z = new Ie({ uniforms: _, fragmentShader: b, vertexShader: I, side: ut });
    super(H, z);
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
class dn extends ds {
  constructor(t) {
    super(t), this.type = Re;
  }
  parse(t) {
    const c = function(x, M) {
      switch (x) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (M || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (M || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (M || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (M || ""));
      }
    }, w = `
`, m = function(x, M, L) {
      M = M || 1024;
      let j = x.pos, q = -1, G = 0, re = "", X = String.fromCharCode.apply(null, new Uint16Array(x.subarray(j, j + 128)));
      for (; 0 > (q = X.indexOf(w)) && G < M && j < x.byteLength; ) re += X, G += X.length, j += 128, X += String.fromCharCode.apply(null, new Uint16Array(x.subarray(j, j + 128)));
      return -1 < q ? (x.pos += G + q + 1, re + X.slice(0, q)) : false;
    }, A = function(x) {
      const M = /^#\?(\S+)/, L = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, W = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, j = /^\s*FORMAT=(\S+)\s*$/, q = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, G = { valid: 0, string: "", comments: "", programtype: "RGBE", format: "", gamma: 1, exposure: 1, width: 0, height: 0 };
      let re, X;
      for ((x.pos >= x.byteLength || !(re = m(x))) && c(1, "no header found"), (X = re.match(M)) || c(3, "bad initial token"), G.valid |= 1, G.programtype = X[1], G.string += re + `
`; re = m(x), re !== false; ) {
        if (G.string += re + `
`, re.charAt(0) === "#") {
          G.comments += re + `
`;
          continue;
        }
        if ((X = re.match(L)) && (G.gamma = parseFloat(X[1])), (X = re.match(W)) && (G.exposure = parseFloat(X[1])), (X = re.match(j)) && (G.valid |= 2, G.format = X[1]), (X = re.match(q)) && (G.valid |= 4, G.height = parseInt(X[1], 10), G.width = parseInt(X[2], 10)), G.valid & 2 && G.valid & 4) break;
      }
      return G.valid & 2 || c(3, "missing format specifier"), G.valid & 4 || c(3, "missing image size specifier"), G;
    }, I = function(x, M, L) {
      const W = M;
      if (W < 8 || W > 32767 || x[0] !== 2 || x[1] !== 2 || x[2] & 128) return new Uint8Array(x);
      W !== (x[2] << 8 | x[3]) && c(3, "wrong scanline width");
      const j = new Uint8Array(4 * M * L);
      j.length || c(4, "unable to allocate buffer space");
      let q = 0, G = 0;
      const re = 4 * W, X = new Uint8Array(4), Ge = new Uint8Array(re);
      let nt = L;
      for (; nt > 0 && G < x.byteLength; ) {
        G + 4 > x.byteLength && c(1), X[0] = x[G++], X[1] = x[G++], X[2] = x[G++], X[3] = x[G++], (X[0] != 2 || X[1] != 2 || (X[2] << 8 | X[3]) != W) && c(3, "bad rgbe scanline format");
        let He = 0, ce;
        for (; He < re && G < x.byteLength; ) {
          ce = x[G++];
          const de = ce > 128;
          if (de && (ce -= 128), (ce === 0 || He + ce > re) && c(3, "bad scanline data"), de) {
            const me = x[G++];
            for (let Qe = 0; Qe < ce; Qe++) Ge[He++] = me;
          } else Ge.set(x.subarray(G, G + ce), He), He += ce, G += ce;
        }
        const Je = W;
        for (let de = 0; de < Je; de++) {
          let me = 0;
          j[q] = Ge[de + me], me += W, j[q + 1] = Ge[de + me], me += W, j[q + 2] = Ge[de + me], me += W, j[q + 3] = Ge[de + me], q += 4;
        }
        nt--;
      }
      return j;
    }, b = function(x, M, L, W) {
      const j = x[M + 3], q = Math.pow(2, j - 128) / 255;
      L[W + 0] = x[M + 0] * q, L[W + 1] = x[M + 1] * q, L[W + 2] = x[M + 2] * q, L[W + 3] = 1;
    }, _ = function(x, M, L, W) {
      const j = x[M + 3], q = Math.pow(2, j - 128) / 255;
      L[W + 0] = dt.toHalfFloat(Math.min(x[M + 0] * q, 65504)), L[W + 1] = dt.toHalfFloat(Math.min(x[M + 1] * q, 65504)), L[W + 2] = dt.toHalfFloat(Math.min(x[M + 2] * q, 65504)), L[W + 3] = dt.toHalfFloat(1);
    }, H = new Uint8Array(t);
    H.pos = 0;
    const z = A(H), F = z.width, U = z.height, Z = I(H.subarray(H.pos), F, U);
    let Y, Q, ee;
    switch (this.type) {
      case ze:
        ee = Z.length / 4;
        const x = new Float32Array(ee * 4);
        for (let L = 0; L < ee; L++) b(Z, L * 4, x, L * 4);
        Y = x, Q = ze;
        break;
      case Re:
        ee = Z.length / 4;
        const M = new Uint16Array(ee * 4);
        for (let L = 0; L < ee; L++) _(Z, L * 4, M, L * 4);
        Y = M, Q = Re;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return { width: F, height: U, data: Y, header: z.string, gamma: z.gamma, exposure: z.exposure, type: Q };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, i, a) {
    function o(c, d) {
      switch (c.type) {
        case ze:
        case Re:
          "colorSpace" in c ? c.colorSpace = "srgb-linear" : c.encoding = 3e3, c.minFilter = Ce, c.magFilter = Ce, c.generateMipmaps = false, c.flipY = true;
          break;
      }
      r && r(c, d);
    }
    return super.load(t, o, i, a);
  }
}
const Ct = ws >= 152;
class hn extends ds {
  constructor(t) {
    super(t), this.type = Re;
  }
  parse(t) {
    const M = Math.pow(2.7182818, 2.2);
    function L(s, n) {
      for (var l = 0, f = 0; f < 65536; ++f) (f == 0 || s[f >> 3] & 1 << (f & 7)) && (n[l++] = f);
      for (var v = l - 1; l < 65536; ) n[l++] = 0;
      return v;
    }
    function W(s) {
      for (var n = 0; n < 16384; n++) s[n] = {}, s[n].len = 0, s[n].lit = 0, s[n].p = null;
    }
    const j = { l: 0, c: 0, lc: 0 };
    function q(s, n, l, f, v) {
      for (; l < s; ) n = n << 8 | zr(f, v), l += 8;
      l -= s, j.l = n >> l & (1 << s) - 1, j.c = n, j.lc = l;
    }
    const G = new Array(59);
    function re(s) {
      for (var n = 0; n <= 58; ++n) G[n] = 0;
      for (var n = 0; n < 65537; ++n) G[s[n]] += 1;
      for (var l = 0, n = 58; n > 0; --n) {
        var f = l + G[n] >> 1;
        G[n] = l, l = f;
      }
      for (var n = 0; n < 65537; ++n) {
        var v = s[n];
        v > 0 && (s[n] = v | G[v]++ << 6);
      }
    }
    function X(s, n, l, f, v, p, C) {
      for (var E = l, S = 0, B = 0; v <= p; v++) {
        if (E.value - l.value > f) return false;
        q(6, S, B, s, E);
        var T = j.l;
        if (S = j.c, B = j.lc, C[v] = T, T == 63) {
          if (E.value - l.value > f) throw "Something wrong with hufUnpackEncTable";
          q(8, S, B, s, E);
          var D = j.l + 6;
          if (S = j.c, B = j.lc, v + D > p + 1) throw "Something wrong with hufUnpackEncTable";
          for (; D--; ) C[v++] = 0;
          v--;
        } else if (T >= 59) {
          var D = T - 59 + 2;
          if (v + D > p + 1) throw "Something wrong with hufUnpackEncTable";
          for (; D--; ) C[v++] = 0;
          v--;
        }
      }
      re(C);
    }
    function Ge(s) {
      return s & 63;
    }
    function nt(s) {
      return s >> 6;
    }
    function He(s, n, l, f) {
      for (; n <= l; n++) {
        var v = nt(s[n]), p = Ge(s[n]);
        if (v >> p) throw "Invalid table entry";
        if (p > 14) {
          var C = f[v >> p - 14];
          if (C.len) throw "Invalid table entry";
          if (C.lit++, C.p) {
            var E = C.p;
            C.p = new Array(C.lit);
            for (var S = 0; S < C.lit - 1; ++S) C.p[S] = E[S];
          } else C.p = new Array(1);
          C.p[C.lit - 1] = n;
        } else if (p) for (var B = 0, S = 1 << 14 - p; S > 0; S--) {
          var C = f[(v << 14 - p) + B];
          if (C.len || C.p) throw "Invalid table entry";
          C.len = p, C.lit = n, B++;
        }
      }
      return true;
    }
    const ce = { c: 0, lc: 0 };
    function Je(s, n, l, f) {
      s = s << 8 | zr(l, f), n += 8, ce.c = s, ce.lc = n;
    }
    const de = { c: 0, lc: 0 };
    function me(s, n, l, f, v, p, C, E, S, B) {
      if (s == n) {
        f < 8 && (Je(l, f, v, C), l = ce.c, f = ce.lc), f -= 8;
        var T = l >> f, T = new Uint8Array([T])[0];
        if (S.value + T > B) return false;
        for (var D = E[S.value - 1]; T-- > 0; ) E[S.value++] = D;
      } else if (S.value < B) E[S.value++] = s;
      else return false;
      de.c = l, de.lc = f;
    }
    function Qe(s) {
      return s & 65535;
    }
    function gt(s) {
      var n = Qe(s);
      return n > 32767 ? n - 65536 : n;
    }
    const se = { a: 0, b: 0 };
    function Ve(s, n) {
      var l = gt(s), f = gt(n), v = f, p = l + (v & 1) + (v >> 1), C = p, E = p - v;
      se.a = C, se.b = E;
    }
    function Xe(s, n) {
      var l = Qe(s), f = Qe(n), v = l - (f >> 1) & 65535, p = f + v - 32768 & 65535;
      se.a = p, se.b = v;
    }
    function Hs(s, n, l, f, v, p, C) {
      for (var E = C < 16384, S = l > v ? v : l, B = 1, T; B <= S; ) B <<= 1;
      for (B >>= 1, T = B, B >>= 1; B >= 1; ) {
        for (var D = 0, fe = D + p * (v - T), P = p * B, O = p * T, k = f * B, V = f * T, ie, ae, pe, Be; D <= fe; D += O) {
          for (var oe = D, Ye = D + f * (l - T); oe <= Ye; oe += V) {
            var le = oe + k, Ae = oe + P, Ke = Ae + k;
            E ? (Ve(s[oe + n], s[Ae + n]), ie = se.a, pe = se.b, Ve(s[le + n], s[Ke + n]), ae = se.a, Be = se.b, Ve(ie, ae), s[oe + n] = se.a, s[le + n] = se.b, Ve(pe, Be), s[Ae + n] = se.a, s[Ke + n] = se.b) : (Xe(s[oe + n], s[Ae + n]), ie = se.a, pe = se.b, Xe(s[le + n], s[Ke + n]), ae = se.a, Be = se.b, Xe(ie, ae), s[oe + n] = se.a, s[le + n] = se.b, Xe(pe, Be), s[Ae + n] = se.a, s[Ke + n] = se.b);
          }
          if (l & B) {
            var Ae = oe + P;
            E ? Ve(s[oe + n], s[Ae + n]) : Xe(s[oe + n], s[Ae + n]), ie = se.a, s[Ae + n] = se.b, s[oe + n] = ie;
          }
        }
        if (v & B) for (var oe = D, Ye = D + f * (l - T); oe <= Ye; oe += V) {
          var le = oe + k;
          E ? Ve(s[oe + n], s[le + n]) : Xe(s[oe + n], s[le + n]), ie = se.a, s[le + n] = se.b, s[oe + n] = ie;
        }
        T = B, B >>= 1;
      }
      return D;
    }
    function Ns(s, n, l, f, v, p, C, E, S, B) {
      for (var T = 0, D = 0, fe = E, P = Math.trunc(v.value + (p + 7) / 8); v.value < P; ) for (Je(T, D, l, v), T = ce.c, D = ce.lc; D >= 14; ) {
        var O = T >> D - 14 & 16383, k = n[O];
        if (k.len) D -= k.len, me(k.lit, C, T, D, l, f, v, S, B, fe), T = de.c, D = de.lc;
        else {
          if (!k.p) throw "hufDecode issues";
          var V;
          for (V = 0; V < k.lit; V++) {
            for (var ie = Ge(s[k.p[V]]); D < ie && v.value < P; ) Je(T, D, l, v), T = ce.c, D = ce.lc;
            if (D >= ie && nt(s[k.p[V]]) == (T >> D - ie & (1 << ie) - 1)) {
              D -= ie, me(k.p[V], C, T, D, l, f, v, S, B, fe), T = de.c, D = de.lc;
              break;
            }
          }
          if (V == k.lit) throw "hufDecode issues";
        }
      }
      var ae = 8 - p & 7;
      for (T >>= ae, D -= ae; D > 0; ) {
        var k = n[T << 14 - D & 16383];
        if (k.len) D -= k.len, me(k.lit, C, T, D, l, f, v, S, B, fe), T = de.c, D = de.lc;
        else throw "hufDecode issues";
      }
      return true;
    }
    function Ur(s, n, l, f, v, p) {
      var C = { value: 0 }, E = l.value, S = Me(n, l), B = Me(n, l);
      l.value += 4;
      var T = Me(n, l);
      if (l.value += 4, S < 0 || S >= 65537 || B < 0 || B >= 65537) throw "Something wrong with HUF_ENCSIZE";
      var D = new Array(65537), fe = new Array(16384);
      W(fe);
      var P = f - (l.value - E);
      if (X(s, n, l, P, S, B, D), T > 8 * (f - (l.value - E))) throw "Something wrong with hufUncompress";
      He(D, S, B, fe), Ns(D, fe, s, n, l, T, B, p, v, C);
    }
    function zs(s, n, l) {
      for (var f = 0; f < l; ++f) n[f] = s[n[f]];
    }
    function Fr(s) {
      for (var n = 1; n < s.length; n++) {
        var l = s[n - 1] + s[n] - 128;
        s[n] = l;
      }
    }
    function Lr(s, n) {
      for (var l = 0, f = Math.floor((s.length + 1) / 2), v = 0, p = s.length - 1; !(v > p || (n[v++] = s[l++], v > p)); ) n[v++] = s[f++];
    }
    function Gr(s) {
      for (var n = s.byteLength, l = new Array(), f = 0, v = new DataView(s); n > 0; ) {
        var p = v.getInt8(f++);
        if (p < 0) {
          var C = -p;
          n -= C + 1;
          for (var E = 0; E < C; E++) l.push(v.getUint8(f++));
        } else {
          var C = p;
          n -= 2;
          for (var S = v.getUint8(f++), E = 0; E < C + 1; E++) l.push(S);
        }
      }
      return l;
    }
    function ks(s, n, l, f, v, p) {
      var le = new DataView(p.buffer), C = l[s.idx[0]].width, E = l[s.idx[0]].height, S = 3, B = Math.floor(C / 8), T = Math.ceil(C / 8), D = Math.ceil(E / 8), fe = C - (T - 1) * 8, P = E - (D - 1) * 8, O = { value: 0 }, k = new Array(S), V = new Array(S), ie = new Array(S), ae = new Array(S), pe = new Array(S);
      for (let ne = 0; ne < S; ++ne) pe[ne] = n[s.idx[ne]], k[ne] = ne < 1 ? 0 : k[ne - 1] + T * D, V[ne] = new Float32Array(64), ie[ne] = new Uint16Array(64), ae[ne] = new Uint16Array(T * 64);
      for (let ne = 0; ne < D; ++ne) {
        var Be = 8;
        ne == D - 1 && (Be = P);
        var oe = 8;
        for (let he = 0; he < T; ++he) {
          he == T - 1 && (oe = fe);
          for (let te = 0; te < S; ++te) ie[te].fill(0), ie[te][0] = v[k[te]++], Qs(O, f, ie[te]), Ys(ie[te], V[te]), js(V[te]);
          Ws(V);
          for (let te = 0; te < S; ++te) Vs(V[te], ae[te], he * 64);
        }
        let xe = 0;
        for (let he = 0; he < S; ++he) {
          const te = l[s.idx[he]].type;
          for (let Oe = 8 * ne; Oe < 8 * ne + Be; ++Oe) {
            xe = pe[he][Oe];
            for (let at = 0; at < B; ++at) {
              const ye = at * 64 + (Oe & 7) * 8;
              le.setUint16(xe + 0 * 2 * te, ae[he][ye + 0], true), le.setUint16(xe + 1 * 2 * te, ae[he][ye + 1], true), le.setUint16(xe + 2 * 2 * te, ae[he][ye + 2], true), le.setUint16(xe + 3 * 2 * te, ae[he][ye + 3], true), le.setUint16(xe + 4 * 2 * te, ae[he][ye + 4], true), le.setUint16(xe + 5 * 2 * te, ae[he][ye + 5], true), le.setUint16(xe + 6 * 2 * te, ae[he][ye + 6], true), le.setUint16(xe + 7 * 2 * te, ae[he][ye + 7], true), xe += 8 * 2 * te;
            }
          }
          if (B != T) for (let Oe = 8 * ne; Oe < 8 * ne + Be; ++Oe) {
            const at = pe[he][Oe] + 8 * B * 2 * te, ye = B * 64 + (Oe & 7) * 8;
            for (let qe = 0; qe < oe; ++qe) le.setUint16(at + qe * 2 * te, ae[he][ye + qe], true);
          }
        }
      }
      for (var Ye = new Uint16Array(C), le = new DataView(p.buffer), Ae = 0; Ae < S; ++Ae) {
        l[s.idx[Ae]].decoded = true;
        var Ke = l[s.idx[Ae]].type;
        if (l[Ae].type == 2) for (var wt = 0; wt < E; ++wt) {
          const ne = pe[Ae][wt];
          for (var Pe = 0; Pe < C; ++Pe) Ye[Pe] = le.getUint16(ne + Pe * 2 * Ke, true);
          for (var Pe = 0; Pe < C; ++Pe) le.setFloat32(ne + Pe * 2 * Ke, R(Ye[Pe]), true);
        }
      }
    }
    function Qs(s, n, l) {
      for (var f, v = 1; v < 64; ) f = n[s.value], f == 65280 ? v = 64 : f >> 8 == 255 ? v += f & 255 : (l[v] = f, v++), s.value++;
    }
    function Ys(s, n) {
      n[0] = R(s[0]), n[1] = R(s[1]), n[2] = R(s[5]), n[3] = R(s[6]), n[4] = R(s[14]), n[5] = R(s[15]), n[6] = R(s[27]), n[7] = R(s[28]), n[8] = R(s[2]), n[9] = R(s[4]), n[10] = R(s[7]), n[11] = R(s[13]), n[12] = R(s[16]), n[13] = R(s[26]), n[14] = R(s[29]), n[15] = R(s[42]), n[16] = R(s[3]), n[17] = R(s[8]), n[18] = R(s[12]), n[19] = R(s[17]), n[20] = R(s[25]), n[21] = R(s[30]), n[22] = R(s[41]), n[23] = R(s[43]), n[24] = R(s[9]), n[25] = R(s[11]), n[26] = R(s[18]), n[27] = R(s[24]), n[28] = R(s[31]), n[29] = R(s[40]), n[30] = R(s[44]), n[31] = R(s[53]), n[32] = R(s[10]), n[33] = R(s[19]), n[34] = R(s[23]), n[35] = R(s[32]), n[36] = R(s[39]), n[37] = R(s[45]), n[38] = R(s[52]), n[39] = R(s[54]), n[40] = R(s[20]), n[41] = R(s[22]), n[42] = R(s[33]), n[43] = R(s[38]), n[44] = R(s[46]), n[45] = R(s[51]), n[46] = R(s[55]), n[47] = R(s[60]), n[48] = R(s[21]), n[49] = R(s[34]), n[50] = R(s[37]), n[51] = R(s[47]), n[52] = R(s[50]), n[53] = R(s[56]), n[54] = R(s[59]), n[55] = R(s[61]), n[56] = R(s[35]), n[57] = R(s[36]), n[58] = R(s[48]), n[59] = R(s[49]), n[60] = R(s[57]), n[61] = R(s[58]), n[62] = R(s[62]), n[63] = R(s[63]);
    }
    function js(s) {
      const n = 0.5 * Math.cos(0.7853975), l = 0.5 * Math.cos(3.14159 / 16), f = 0.5 * Math.cos(3.14159 / 8), v = 0.5 * Math.cos(3 * 3.14159 / 16), p = 0.5 * Math.cos(5 * 3.14159 / 16), C = 0.5 * Math.cos(3 * 3.14159 / 8), E = 0.5 * Math.cos(7 * 3.14159 / 16);
      for (var S = new Array(4), B = new Array(4), T = new Array(4), D = new Array(4), fe = 0; fe < 8; ++fe) {
        var P = fe * 8;
        S[0] = f * s[P + 2], S[1] = C * s[P + 2], S[2] = f * s[P + 6], S[3] = C * s[P + 6], B[0] = l * s[P + 1] + v * s[P + 3] + p * s[P + 5] + E * s[P + 7], B[1] = v * s[P + 1] - E * s[P + 3] - l * s[P + 5] - p * s[P + 7], B[2] = p * s[P + 1] - l * s[P + 3] + E * s[P + 5] + v * s[P + 7], B[3] = E * s[P + 1] - p * s[P + 3] + v * s[P + 5] - l * s[P + 7], T[0] = n * (s[P + 0] + s[P + 4]), T[3] = n * (s[P + 0] - s[P + 4]), T[1] = S[0] + S[3], T[2] = S[1] - S[2], D[0] = T[0] + T[1], D[1] = T[3] + T[2], D[2] = T[3] - T[2], D[3] = T[0] - T[1], s[P + 0] = D[0] + B[0], s[P + 1] = D[1] + B[1], s[P + 2] = D[2] + B[2], s[P + 3] = D[3] + B[3], s[P + 4] = D[3] - B[3], s[P + 5] = D[2] - B[2], s[P + 6] = D[1] - B[1], s[P + 7] = D[0] - B[0];
      }
      for (var O = 0; O < 8; ++O) S[0] = f * s[16 + O], S[1] = C * s[16 + O], S[2] = f * s[48 + O], S[3] = C * s[48 + O], B[0] = l * s[8 + O] + v * s[24 + O] + p * s[40 + O] + E * s[56 + O], B[1] = v * s[8 + O] - E * s[24 + O] - l * s[40 + O] - p * s[56 + O], B[2] = p * s[8 + O] - l * s[24 + O] + E * s[40 + O] + v * s[56 + O], B[3] = E * s[8 + O] - p * s[24 + O] + v * s[40 + O] - l * s[56 + O], T[0] = n * (s[O] + s[32 + O]), T[3] = n * (s[O] - s[32 + O]), T[1] = S[0] + S[3], T[2] = S[1] - S[2], D[0] = T[0] + T[1], D[1] = T[3] + T[2], D[2] = T[3] - T[2], D[3] = T[0] - T[1], s[0 + O] = D[0] + B[0], s[8 + O] = D[1] + B[1], s[16 + O] = D[2] + B[2], s[24 + O] = D[3] + B[3], s[32 + O] = D[3] - B[3], s[40 + O] = D[2] - B[2], s[48 + O] = D[1] - B[1], s[56 + O] = D[0] - B[0];
    }
    function Ws(s) {
      for (var n = 0; n < 64; ++n) {
        var l = s[0][n], f = s[1][n], v = s[2][n];
        s[0][n] = l + 1.5747 * v, s[1][n] = l - 0.1873 * f - 0.4682 * v, s[2][n] = l + 1.8556 * f;
      }
    }
    function Vs(s, n, l) {
      for (var f = 0; f < 64; ++f) n[l + f] = dt.toHalfFloat(Xs(s[f]));
    }
    function Xs(s) {
      return s <= 1 ? Math.sign(s) * Math.pow(Math.abs(s), 2.2) : Math.sign(s) * Math.pow(M, Math.abs(s) - 1);
    }
    function Hr(s) {
      return new DataView(s.array.buffer, s.offset.value, s.size);
    }
    function Ks(s) {
      var n = s.viewer.buffer.slice(s.offset.value, s.offset.value + s.size), l = new Uint8Array(Gr(n)), f = new Uint8Array(l.length);
      return Fr(l), Lr(l, f), new DataView(f.buffer);
    }
    function ir(s) {
      var n = s.array.slice(s.offset.value, s.offset.value + s.size), l = Qt(n), f = new Uint8Array(l.length);
      return Fr(l), Lr(l, f), new DataView(f.buffer);
    }
    function Zs(s) {
      for (var n = s.viewer, l = { value: s.offset.value }, f = new Uint16Array(s.width * s.scanlineBlockSize * (s.channels * s.type)), v = new Uint8Array(8192), p = 0, C = new Array(s.channels), E = 0; E < s.channels; E++) C[E] = {}, C[E].start = p, C[E].end = C[E].start, C[E].nx = s.width, C[E].ny = s.lines, C[E].size = s.type, p += C[E].nx * C[E].ny * C[E].size;
      var S = pt(n, l), B = pt(n, l);
      if (B >= 8192) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (S <= B) for (var E = 0; E < B - S + 1; E++) v[E + S] = ct(n, l);
      var T = new Uint16Array(65536), D = L(v, T), fe = Me(n, l);
      Ur(s.array, n, l, fe, f, p);
      for (var E = 0; E < s.channels; ++E) for (var P = C[E], O = 0; O < C[E].size; ++O) Hs(f, P.start + O, P.nx, P.size, P.ny, P.nx * P.size, D);
      zs(T, f, p);
      for (var k = 0, V = new Uint8Array(f.buffer.byteLength), ie = 0; ie < s.lines; ie++) for (var ae = 0; ae < s.channels; ae++) {
        var P = C[ae], pe = P.nx * P.size, Be = new Uint8Array(f.buffer, P.end * 2, pe * 2);
        V.set(Be, k), k += pe * 2, P.end += pe;
      }
      return new DataView(V.buffer);
    }
    function _s(s) {
      var n = s.array.slice(s.offset.value, s.offset.value + s.size), l = Qt(n);
      const f = s.lines * s.channels * s.width, v = s.type == 1 ? new Uint16Array(f) : new Uint32Array(f);
      let p = 0, C = 0;
      const E = new Array(4);
      for (let S = 0; S < s.lines; S++) for (let B = 0; B < s.channels; B++) {
        let T = 0;
        switch (s.type) {
          case 1:
            E[0] = p, E[1] = E[0] + s.width, p = E[1] + s.width;
            for (let D = 0; D < s.width; ++D) {
              const fe = l[E[0]++] << 8 | l[E[1]++];
              T += fe, v[C] = T, C++;
            }
            break;
          case 2:
            E[0] = p, E[1] = E[0] + s.width, E[2] = E[1] + s.width, p = E[2] + s.width;
            for (let D = 0; D < s.width; ++D) {
              const fe = l[E[0]++] << 24 | l[E[1]++] << 16 | l[E[2]++] << 8;
              T += fe, v[C] = T, C++;
            }
            break;
        }
      }
      return new DataView(v.buffer);
    }
    function Nr(s) {
      var n = s.viewer, l = { value: s.offset.value }, f = new Uint8Array(s.width * s.lines * (s.channels * s.type * 2)), v = { version: be(n, l), unknownUncompressedSize: be(n, l), unknownCompressedSize: be(n, l), acCompressedSize: be(n, l), dcCompressedSize: be(n, l), rleCompressedSize: be(n, l), rleUncompressedSize: be(n, l), rleRawSize: be(n, l), totalAcUncompressedCount: be(n, l), totalDcUncompressedCount: be(n, l), acCompression: be(n, l) };
      if (v.version < 2) throw "EXRLoader.parse: " + mt.compression + " version " + v.version + " is unsupported";
      for (var p = new Array(), C = pt(n, l) - 2; C > 0; ) {
        var E = Nt(n.buffer, l), S = ct(n, l), B = S >> 2 & 3, T = (S >> 4) - 1, D = new Int8Array([T])[0], fe = ct(n, l);
        p.push({ name: E, index: D, type: fe, compression: B }), C -= E.length + 3;
      }
      for (var P = mt.channels, O = new Array(s.channels), k = 0; k < s.channels; ++k) {
        var V = O[k] = {}, ie = P[k];
        V.name = ie.name, V.compression = 0, V.decoded = false, V.type = ie.pixelType, V.pLinear = ie.pLinear, V.width = s.width, V.height = s.lines;
      }
      for (var ae = { idx: new Array(3) }, pe = 0; pe < s.channels; ++pe) for (var V = O[pe], k = 0; k < p.length; ++k) {
        var Be = p[k];
        V.name == Be.name && (V.compression = Be.compression, Be.index >= 0 && (ae.idx[Be.index] = pe), V.offset = pe);
      }
      if (v.acCompressedSize > 0) switch (v.acCompression) {
        case 0:
          var le = new Uint16Array(v.totalAcUncompressedCount);
          Ur(s.array, n, l, v.acCompressedSize, le, v.totalAcUncompressedCount);
          break;
        case 1:
          var oe = s.array.slice(l.value, l.value + v.totalAcUncompressedCount), Ye = Qt(oe), le = new Uint16Array(Ye.buffer);
          l.value += v.totalAcUncompressedCount;
          break;
      }
      if (v.dcCompressedSize > 0) {
        var Ae = { array: s.array, offset: l, size: v.dcCompressedSize }, Ke = new Uint16Array(ir(Ae).buffer);
        l.value += v.dcCompressedSize;
      }
      if (v.rleRawSize > 0) {
        var oe = s.array.slice(l.value, l.value + v.rleCompressedSize), Ye = Qt(oe), wt = Gr(Ye.buffer);
        l.value += v.rleCompressedSize;
      }
      for (var Pe = 0, ne = new Array(O.length), k = 0; k < ne.length; ++k) ne[k] = new Array();
      for (var xe = 0; xe < s.lines; ++xe) for (var he = 0; he < O.length; ++he) ne[he].push(Pe), Pe += O[he].width * s.type * 2;
      ks(ae, ne, O, le, Ke, f);
      for (var k = 0; k < O.length; ++k) {
        var V = O[k];
        if (!V.decoded) switch (V.compression) {
          case 2:
            for (var te = 0, Oe = 0, xe = 0; xe < s.lines; ++xe) {
              for (var at = ne[k][te], ye = 0; ye < V.width; ++ye) {
                for (var qe = 0; qe < 2 * V.type; ++qe) f[at++] = wt[Oe + qe * V.width * V.height];
                Oe++;
              }
              te++;
            }
            break;
          case 1:
          default:
            throw "EXRLoader.parse: unsupported channel compression";
        }
      }
      return new DataView(f.buffer);
    }
    function Nt(s, n) {
      for (var l = new Uint8Array(s), f = 0; l[n.value + f] != 0; ) f += 1;
      var v = new TextDecoder().decode(l.slice(n.value, n.value + f));
      return n.value = n.value + f + 1, v;
    }
    function Js(s, n, l) {
      var f = new TextDecoder().decode(new Uint8Array(s).slice(n.value, n.value + l));
      return n.value = n.value + l, f;
    }
    function qs(s, n) {
      var l = vt(s, n), f = Me(s, n);
      return [l, f];
    }
    function $s(s, n) {
      var l = Me(s, n), f = Me(s, n);
      return [l, f];
    }
    function vt(s, n) {
      var l = s.getInt32(n.value, true);
      return n.value = n.value + 4, l;
    }
    function Me(s, n) {
      var l = s.getUint32(n.value, true);
      return n.value = n.value + 4, l;
    }
    function zr(s, n) {
      var l = s[n.value];
      return n.value = n.value + 1, l;
    }
    function ct(s, n) {
      var l = s.getUint8(n.value);
      return n.value = n.value + 1, l;
    }
    const be = function(s, n) {
      let l;
      return "getBigInt64" in DataView.prototype ? l = Number(s.getBigInt64(n.value, true)) : l = s.getUint32(n.value + 4, true) + Number(s.getUint32(n.value, true) << 32), n.value += 8, l;
    };
    function Ee(s, n) {
      var l = s.getFloat32(n.value, true);
      return n.value += 4, l;
    }
    function ei(s, n) {
      return dt.toHalfFloat(Ee(s, n));
    }
    function R(s) {
      var n = (s & 31744) >> 10, l = s & 1023;
      return (s >> 15 ? -1 : 1) * (n ? n === 31 ? l ? NaN : 1 / 0 : Math.pow(2, n - 15) * (1 + l / 1024) : 6103515625e-14 * (l / 1024));
    }
    function pt(s, n) {
      var l = s.getUint16(n.value, true);
      return n.value += 2, l;
    }
    function ti(s, n) {
      return R(pt(s, n));
    }
    function ri(s, n, l, f) {
      for (var v = l.value, p = []; l.value < v + f - 1; ) {
        var C = Nt(n, l), E = vt(s, l), S = ct(s, l);
        l.value += 3;
        var B = vt(s, l), T = vt(s, l);
        p.push({ name: C, pixelType: E, pLinear: S, xSampling: B, ySampling: T });
      }
      return l.value += 1, p;
    }
    function si(s, n) {
      var l = Ee(s, n), f = Ee(s, n), v = Ee(s, n), p = Ee(s, n), C = Ee(s, n), E = Ee(s, n), S = Ee(s, n), B = Ee(s, n);
      return { redX: l, redY: f, greenX: v, greenY: p, blueX: C, blueY: E, whiteX: S, whiteY: B };
    }
    function ii(s, n) {
      var l = ["NO_COMPRESSION", "RLE_COMPRESSION", "ZIPS_COMPRESSION", "ZIP_COMPRESSION", "PIZ_COMPRESSION", "PXR24_COMPRESSION", "B44_COMPRESSION", "B44A_COMPRESSION", "DWAA_COMPRESSION", "DWAB_COMPRESSION"], f = ct(s, n);
      return l[f];
    }
    function ni(s, n) {
      var l = Me(s, n), f = Me(s, n), v = Me(s, n), p = Me(s, n);
      return { xMin: l, yMin: f, xMax: v, yMax: p };
    }
    function ai(s, n) {
      var l = ["INCREASING_Y"], f = ct(s, n);
      return l[f];
    }
    function oi(s, n) {
      var l = Ee(s, n), f = Ee(s, n);
      return [l, f];
    }
    function ci(s, n) {
      var l = Ee(s, n), f = Ee(s, n), v = Ee(s, n);
      return [l, f, v];
    }
    function li(s, n, l, f, v) {
      if (f === "string" || f === "stringvector" || f === "iccProfile") return Js(n, l, v);
      if (f === "chlist") return ri(s, n, l, v);
      if (f === "chromaticities") return si(s, l);
      if (f === "compression") return ii(s, l);
      if (f === "box2i") return ni(s, l);
      if (f === "lineOrder") return ai(s, l);
      if (f === "float") return Ee(s, l);
      if (f === "v2f") return oi(s, l);
      if (f === "v3f") return ci(s, l);
      if (f === "int") return vt(s, l);
      if (f === "rational") return qs(s, l);
      if (f === "timecode") return $s(s, l);
      if (f === "preview") return l.value += v, "skipped";
      l.value += v;
    }
    function ui(s, n, l) {
      const f = {};
      if (s.getUint32(0, true) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      f.version = s.getUint8(4);
      const v = s.getUint8(5);
      f.spec = { singleTile: !!(v & 2), longName: !!(v & 4), deepFormat: !!(v & 8), multiPart: !!(v & 16) }, l.value = 8;
      for (var p = true; p; ) {
        var C = Nt(n, l);
        if (C == 0) p = false;
        else {
          var E = Nt(n, l), S = Me(s, l), B = li(s, n, l, E, S);
          B === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${E}'.`) : f[C] = B;
        }
      }
      if (v & -5) throw console.error("EXRHeader:", f), "THREE.EXRLoader: provided file is currently unsupported.";
      return f;
    }
    function di(s, n, l, f, v) {
      const p = { size: 0, viewer: n, array: l, offset: f, width: s.dataWindow.xMax - s.dataWindow.xMin + 1, height: s.dataWindow.yMax - s.dataWindow.yMin + 1, channels: s.channels.length, bytesPerLine: null, lines: null, inputSize: null, type: s.channels[0].pixelType, uncompress: null, getter: null, format: null, [Ct ? "colorSpace" : "encoding"]: null };
      switch (s.compression) {
        case "NO_COMPRESSION":
          p.lines = 1, p.uncompress = Hr;
          break;
        case "RLE_COMPRESSION":
          p.lines = 1, p.uncompress = Ks;
          break;
        case "ZIPS_COMPRESSION":
          p.lines = 1, p.uncompress = ir;
          break;
        case "ZIP_COMPRESSION":
          p.lines = 16, p.uncompress = ir;
          break;
        case "PIZ_COMPRESSION":
          p.lines = 32, p.uncompress = Zs;
          break;
        case "PXR24_COMPRESSION":
          p.lines = 16, p.uncompress = _s;
          break;
        case "DWAA_COMPRESSION":
          p.lines = 32, p.uncompress = Nr;
          break;
        case "DWAB_COMPRESSION":
          p.lines = 256, p.uncompress = Nr;
          break;
        default:
          throw "EXRLoader.parse: " + s.compression + " is unsupported";
      }
      if (p.scanlineBlockSize = p.lines, p.type == 1) switch (v) {
        case ze:
          p.getter = ti, p.inputSize = 2;
          break;
        case Re:
          p.getter = pt, p.inputSize = 2;
          break;
      }
      else if (p.type == 2) switch (v) {
        case ze:
          p.getter = Ee, p.inputSize = 4;
          break;
        case Re:
          p.getter = ei, p.inputSize = 4;
      }
      else throw "EXRLoader.parse: unsupported pixelType " + p.type + " for " + s.compression + ".";
      p.blockCount = (s.dataWindow.yMax + 1) / p.scanlineBlockSize;
      for (var C = 0; C < p.blockCount; C++) be(n, f);
      p.outputChannels = p.channels == 3 ? 4 : p.channels;
      const E = p.width * p.height * p.outputChannels;
      switch (v) {
        case ze:
          p.byteArray = new Float32Array(E), p.channels < p.outputChannels && p.byteArray.fill(1, 0, E);
          break;
        case Re:
          p.byteArray = new Uint16Array(E), p.channels < p.outputChannels && p.byteArray.fill(15360, 0, E);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", v);
          break;
      }
      return p.bytesPerLine = p.width * p.inputSize * p.channels, p.outputChannels == 4 ? p.format = bt : p.format = pi, Ct ? p.colorSpace = "srgb-linear" : p.encoding = 3e3, p;
    }
    const zt = new DataView(t), hi = new Uint8Array(t), At = { value: 0 }, mt = ui(zt, t, At), J = di(mt, zt, hi, At, this.type), kr = { value: 0 }, fi = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let s = 0; s < J.height / J.scanlineBlockSize; s++) {
      const n = Me(zt, At);
      J.size = Me(zt, At), J.lines = n + J.scanlineBlockSize > J.height ? J.height - n : J.scanlineBlockSize;
      const f = J.size < J.lines * J.bytesPerLine ? J.uncompress(J) : Hr(J);
      At.value += J.size;
      for (let v = 0; v < J.scanlineBlockSize; v++) {
        const p = v + s * J.scanlineBlockSize;
        if (p >= J.height) break;
        for (let C = 0; C < J.channels; C++) {
          const E = fi[mt.channels[C].name];
          for (let S = 0; S < J.width; S++) {
            kr.value = (v * (J.channels * J.width) + C * J.width + S) * J.inputSize;
            const B = (J.height - 1 - p) * (J.width * J.outputChannels) + S * J.outputChannels + E;
            J.byteArray[B] = J.getter(f, kr);
          }
        }
      }
    }
    return { header: mt, width: J.width, height: J.height, data: J.byteArray, format: J.format, [Ct ? "colorSpace" : "encoding"]: J[Ct ? "colorSpace" : "encoding"], type: this.type };
  }
  setDataType(t) {
    return this.type = t, this;
  }
  load(t, r, i, a) {
    function o(c, d) {
      Ct ? c.colorSpace = d.colorSpace : c.encoding = d.encoding, c.minFilter = Ce, c.magFilter = Ce, c.generateMipmaps = false, c.flipY = false, r && r(c, d);
    }
    return super.load(t, o, i, a);
  }
}
const fn = () => parseInt(Lt.replace(/\D+/g, "")), gn = fn(), Ms = (e3, t, r) => {
  let i;
  switch (e3) {
    case ke:
      i = new Uint8ClampedArray(t * r * 4);
      break;
    case Re:
      i = new Uint16Array(t * r * 4);
      break;
    case Ci:
      i = new Uint32Array(t * r * 4);
      break;
    case xi:
      i = new Int8Array(t * r * 4);
      break;
    case Ei:
      i = new Int16Array(t * r * 4);
      break;
    case wi:
      i = new Int32Array(t * r * 4);
      break;
    case ze:
      i = new Float32Array(t * r * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return i;
};
let Yt;
const vn = (e3, t, r, i) => {
  if (Yt !== void 0) return Yt;
  const a = new Te(1, 1, i);
  t.setRenderTarget(a);
  const o = new er(new fs(), new Di({ color: 16777215 }));
  t.render(o, r), t.setRenderTarget(null);
  const c = Ms(e3, a.width, a.height);
  return t.readRenderTargetPixels(a, 0, 0, a.width, a.height, c), a.dispose(), o.geometry.dispose(), o.material.dispose(), Yt = c[0] !== 0, Yt;
};
class Br {
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
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o, _p;
    this._width = t.width, this._height = t.height, this._type = t.type, this._colorSpace = t.colorSpace;
    const r = { format: bt, depthBuffer: false, stencilBuffer: false, type: this._type, colorSpace: this._colorSpace, anisotropy: ((_a2 = t.renderTargetOptions) == null ? void 0 : _a2.anisotropy) !== void 0 ? (_b = t.renderTargetOptions) == null ? void 0 : _b.anisotropy : 1, generateMipmaps: ((_c = t.renderTargetOptions) == null ? void 0 : _c.generateMipmaps) !== void 0 ? (_d = t.renderTargetOptions) == null ? void 0 : _d.generateMipmaps : false, magFilter: ((_e2 = t.renderTargetOptions) == null ? void 0 : _e2.magFilter) !== void 0 ? (_f = t.renderTargetOptions) == null ? void 0 : _f.magFilter : Ce, minFilter: ((_g = t.renderTargetOptions) == null ? void 0 : _g.minFilter) !== void 0 ? (_h = t.renderTargetOptions) == null ? void 0 : _h.minFilter : Ce, samples: ((_i2 = t.renderTargetOptions) == null ? void 0 : _i2.samples) !== void 0 ? (_j = t.renderTargetOptions) == null ? void 0 : _j.samples : void 0, wrapS: ((_k = t.renderTargetOptions) == null ? void 0 : _k.wrapS) !== void 0 ? (_l = t.renderTargetOptions) == null ? void 0 : _l.wrapS : tt, wrapT: ((_m = t.renderTargetOptions) == null ? void 0 : _m.wrapT) !== void 0 ? (_n2 = t.renderTargetOptions) == null ? void 0 : _n2.wrapT : tt };
    if (this._material = t.material, t.renderer ? this._renderer = t.renderer : (this._renderer = Br.instantiateRenderer(), this._rendererIsDisposable = true), this._scene = new _t(), this._camera = new hs(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !vn(this._type, this._renderer, this._camera, r)) {
      let i;
      switch (this._type) {
        case Re:
          i = this._renderer.extensions.has("EXT_color_buffer_float") ? ze : void 0;
          break;
      }
      i !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${ze}`), this._type = i) : (this._supportsReadPixels = false, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
    }
    this._quad = new er(new fs(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new Te(this.width, this.height, r), this._renderTarget.texture.mapping = ((_o = t.renderTargetOptions) == null ? void 0 : _o.mapping) !== void 0 ? (_p = t.renderTargetOptions) == null ? void 0 : _p.mapping : Jt;
  }
  static instantiateRenderer() {
    const t = new Ai();
    return t.setSize(128, 128), t;
  }
  toArray() {
    if (!this._supportsReadPixels) throw new Error("Can't read pixels in this browser");
    const t = Ms(this._type, this._width, this._height);
    return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, t), t;
  }
  toDataTexture(t) {
    const r = new mi(this.toArray(), this.width, this.height, bt, this._type, (t == null ? void 0 : t.mapping) || Jt, (t == null ? void 0 : t.wrapS) || tt, (t == null ? void 0 : t.wrapT) || tt, (t == null ? void 0 : t.magFilter) || Ce, (t == null ? void 0 : t.minFilter) || Ce, (t == null ? void 0 : t.anisotropy) || 1, Pt);
    return r.generateMipmaps = (t == null ? void 0 : t.generateMipmaps) !== void 0 ? t == null ? void 0 : t.generateMipmaps : false, r;
  }
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
  }
  dispose(t) {
    this.disposeOnDemandRenderer(), t && this.renderTarget.dispose(), this.material instanceof Ie && Object.values(this.material.uniforms).forEach((r) => {
      r.value instanceof je && r.value.dispose();
    }), Object.values(this.material).forEach((r) => {
      r instanceof je && r.dispose();
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
class Ts extends Error {
}
class Is extends Error {
}
const Dt = (e3, t, r) => {
  const i = new RegExp(`${t}="([^"]*)"`, "i").exec(e3);
  if (i) return i[1];
  const a = new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i").exec(e3);
  if (a) {
    const o = a[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return o && o.length === 3 ? o.map((c) => c.replace(/<\/?rdf:li>/g, "")) : a[1].trim();
  }
  if (r !== void 0) return r;
  throw new Error(`Can't find ${t} in gainmap metadata`);
}, pn = (e3) => {
  let t;
  typeof TextDecoder < "u" ? t = new TextDecoder().decode(e3) : t = e3.toString();
  let r = t.indexOf("<x:xmpmeta");
  for (; r !== -1; ) {
    const i = t.indexOf("x:xmpmeta>", r), a = t.slice(r, i + 10);
    try {
      const o = Dt(a, "hdrgm:GainMapMin", "0"), c = Dt(a, "hdrgm:GainMapMax"), d = Dt(a, "hdrgm:Gamma", "1"), h = Dt(a, "hdrgm:OffsetSDR", "0.015625"), g = Dt(a, "hdrgm:OffsetHDR", "0.015625"), w = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(a), m = w ? w[1] : "0", A = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(a);
      if (!A) throw new Error("Incomplete gainmap metadata");
      const I = A[1];
      return { gainMapMin: Array.isArray(o) ? o.map((b) => parseFloat(b)) : [parseFloat(o), parseFloat(o), parseFloat(o)], gainMapMax: Array.isArray(c) ? c.map((b) => parseFloat(b)) : [parseFloat(c), parseFloat(c), parseFloat(c)], gamma: Array.isArray(d) ? d.map((b) => parseFloat(b)) : [parseFloat(d), parseFloat(d), parseFloat(d)], offsetSdr: Array.isArray(h) ? h.map((b) => parseFloat(b)) : [parseFloat(h), parseFloat(h), parseFloat(h)], offsetHdr: Array.isArray(g) ? g.map((b) => parseFloat(b)) : [parseFloat(g), parseFloat(g), parseFloat(g)], hdrCapacityMin: parseFloat(m), hdrCapacityMax: parseFloat(I) };
    } catch {
    }
    r = t.indexOf("<x:xmpmeta", i);
  }
};
class An {
  constructor(t) {
    __publicField(this, "options");
    this.options = { debug: t && t.debug !== void 0 ? t.debug : false, extractFII: t && t.extractFII !== void 0 ? t.extractFII : true, extractNonFII: t && t.extractNonFII !== void 0 ? t.extractNonFII : true };
  }
  extract(t) {
    return new Promise((r, i) => {
      const a = this.options.debug, o = new DataView(t.buffer);
      if (o.getUint16(0) !== 65496) {
        i(new Error("Not a valid jpeg"));
        return;
      }
      const c = o.byteLength;
      let d = 2, h = 0, g;
      for (; d < c; ) {
        if (++h > 250) {
          i(new Error(`Found no marker after ${h} loops \u{1F635}`));
          return;
        }
        if (o.getUint8(d) !== 255) {
          i(new Error(`Not a valid marker at offset 0x${d.toString(16)}, found: 0x${o.getUint8(d).toString(16)}`));
          return;
        }
        if (g = o.getUint8(d + 1), a && console.log(`Marker: ${g.toString(16)}`), g === 226) {
          a && console.log("Found APP2 marker (0xffe2)");
          const w = d + 4;
          if (o.getUint32(w) === 1297106432) {
            const m = w + 4;
            let A;
            if (o.getUint16(m) === 18761) A = false;
            else if (o.getUint16(m) === 19789) A = true;
            else {
              i(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (o.getUint16(m + 2, !A) !== 42) {
              i(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const I = o.getUint32(m + 4, !A);
            if (I < 8) {
              i(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const b = m + I, _ = o.getUint16(b, !A), H = b + 2;
            let z = 0;
            for (let Y = H; Y < H + 12 * _; Y += 12) o.getUint16(Y, !A) === 45057 && (z = o.getUint32(Y + 8, !A));
            const U = b + 2 + _ * 12 + 4, Z = [];
            for (let Y = U; Y < U + z * 16; Y += 16) {
              const Q = { MPType: o.getUint32(Y, !A), size: o.getUint32(Y + 4, !A), dataOffset: o.getUint32(Y + 8, !A), dependantImages: o.getUint32(Y + 12, !A), start: -1, end: -1, isFII: false };
              Q.dataOffset ? (Q.start = m + Q.dataOffset, Q.isFII = false) : (Q.start = 0, Q.isFII = true), Q.end = Q.start + Q.size, Z.push(Q);
            }
            if (this.options.extractNonFII && Z.length) {
              const Y = new Blob([o]), Q = [];
              for (const ee of Z) {
                if (ee.isFII && !this.options.extractFII) continue;
                const x = Y.slice(ee.start, ee.end + 1, "image/jpeg");
                Q.push(x);
              }
              r(Q);
            }
          }
        }
        d += 2 + o.getUint16(d + 2);
      }
    });
  }
}
const mn = async (e3) => {
  const t = pn(e3);
  if (!t) throw new Is("Gain map XMP metadata not found");
  const i = await new An({ extractFII: true, extractNonFII: true }).extract(e3);
  if (i.length !== 2) throw new Ts("Gain map recovery image not found");
  return { sdr: new Uint8Array(await i[0].arrayBuffer()), gainMap: new Uint8Array(await i[1].arrayBuffer()), metadata: t };
}, Xr = (e3) => new Promise((t, r) => {
  const i = document.createElement("img");
  i.onload = () => {
    t(i);
  }, i.onerror = (a) => {
    r(a);
  }, i.src = URL.createObjectURL(e3);
});
class wn extends Bi {
  constructor(t, r) {
    super(r);
    __publicField(this, "_renderer");
    __publicField(this, "_renderTargetOptions");
    __publicField(this, "_internalLoadingManager");
    __publicField(this, "_config");
    this._config = t, t.renderer && (this._renderer = t.renderer), this._internalLoadingManager = new gs();
  }
  setRenderer(t) {
    return this._renderer = t, this;
  }
  setRenderTargetOptions(t) {
    return this._renderTargetOptions = t, this;
  }
  prepareQuadRenderer() {
    this._renderer || console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    const t = this._config.createMaterial({ gainMapMax: [1, 1, 1], gainMapMin: [0, 0, 0], gamma: [1, 1, 1], offsetHdr: [1, 1, 1], offsetSdr: [1, 1, 1], hdrCapacityMax: 1, hdrCapacityMin: 0, maxDisplayBoost: 1, gainMap: new je(), sdr: new je() });
    return this._config.createQuadRenderer({ width: 16, height: 16, type: Re, colorSpace: Pt, material: t, renderer: this._renderer, renderTargetOptions: this._renderTargetOptions });
  }
  async processImages(t, r, i) {
    const a = r ? new Blob([r], { type: "image/jpeg" }) : void 0, o = new Blob([t], { type: "image/jpeg" });
    let c, d, h = false;
    if (typeof createImageBitmap > "u") {
      const g = await Promise.all([a ? Xr(a) : Promise.resolve(void 0), Xr(o)]);
      d = g[0], c = g[1], h = i === "flipY";
    } else {
      const g = await Promise.all([a ? createImageBitmap(a, { imageOrientation: i || "flipY" }) : Promise.resolve(void 0), createImageBitmap(o, { imageOrientation: i || "flipY" })]);
      d = g[0], c = g[1];
    }
    return { sdrImage: c, gainMapImage: d, needsFlip: h };
  }
  createTextures(t, r, i) {
    const a = new je(r || new ImageData(2, 2), Jt, tt, tt, Ce, Qr, bt, ke, 1, Pt);
    a.flipY = i, a.needsUpdate = true;
    const o = new je(t, Jt, tt, tt, Ce, Qr, bt, ke, 1, we);
    return o.flipY = i, o.needsUpdate = true, { gainMap: a, sdr: o };
  }
  updateQuadRenderer(t, r, i, a, o) {
    t.width = r.width, t.height = r.height, t.material.gainMap = i, t.material.sdr = a, t.material.gainMapMin = o.gainMapMin, t.material.gainMapMax = o.gainMapMax, t.material.offsetHdr = o.offsetHdr, t.material.offsetSdr = o.offsetSdr, t.material.gamma = o.gamma, t.material.hdrCapacityMin = o.hdrCapacityMin, t.material.hdrCapacityMax = o.hdrCapacityMax, t.material.maxDisplayBoost = Math.pow(2, o.hdrCapacityMax), t.material.needsUpdate = true;
  }
}
const En = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, xn = `
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
class Cn extends Ie {
  constructor({ gamma: t, offsetHdr: r, offsetSdr: i, gainMapMin: a, gainMapMax: o, maxDisplayBoost: c, hdrCapacityMin: d, hdrCapacityMax: h, sdr: g, gainMap: w }) {
    super({ name: "GainMapDecoderMaterial", vertexShader: En, fragmentShader: xn, uniforms: { sdr: { value: g }, gainMap: { value: w }, gamma: { value: new ge(1 / t[0], 1 / t[1], 1 / t[2]) }, offsetHdr: { value: new ge().fromArray(r) }, offsetSdr: { value: new ge().fromArray(i) }, gainMapMin: { value: new ge().fromArray(a) }, gainMapMax: { value: new ge().fromArray(o) }, weightFactor: { value: (Math.log2(c) - d) / (h - d) } }, blending: We, depthTest: false, depthWrite: false });
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
class ys extends wn {
  constructor(t, r) {
    super({ renderer: t, createMaterial: (i) => new Cn(i), createQuadRenderer: (i) => new Br(i) }, r);
  }
  async render(t, r, i, a) {
    const { sdrImage: o, gainMapImage: c, needsFlip: d } = await this.processImages(i, a, "flipY"), { gainMap: h, sdr: g } = this.createTextures(o, c, d);
    this.updateQuadRenderer(t, o, h, g, r), t.render();
  }
}
class Dn extends ys {
  load([t, r, i], a, o, c) {
    const d = this.prepareQuadRenderer();
    let h, g, w;
    const m = async () => {
      if (h && g && w) {
        try {
          await this.render(d, w, h, g);
        } catch (M) {
          this.manager.itemError(t), this.manager.itemError(r), this.manager.itemError(i), typeof c == "function" && c(M), d.disposeOnDemandRenderer();
          return;
        }
        typeof a == "function" && a(d), this.manager.itemEnd(t), this.manager.itemEnd(r), this.manager.itemEnd(i), d.disposeOnDemandRenderer();
      }
    };
    let A = true, I = 0, b = 0, _ = true, H = 0, z = 0, F = true, U = 0, Z = 0;
    const Y = () => {
      if (typeof o == "function") {
        const M = I + H + U, L = b + z + Z, W = A && _ && F;
        o(new ProgressEvent("progress", { lengthComputable: W, loaded: L, total: M }));
      }
    };
    this.manager.itemStart(t), this.manager.itemStart(r), this.manager.itemStart(i);
    const Q = new Zt(this._internalLoadingManager);
    Q.setResponseType("arraybuffer"), Q.setRequestHeader(this.requestHeader), Q.setPath(this.path), Q.setWithCredentials(this.withCredentials), Q.load(t, async (M) => {
      if (typeof M == "string") throw new Error("Invalid sdr buffer");
      h = M, await m();
    }, (M) => {
      A = M.lengthComputable, b = M.loaded, I = M.total, Y();
    }, (M) => {
      this.manager.itemError(t), typeof c == "function" && c(M);
    });
    const ee = new Zt(this._internalLoadingManager);
    ee.setResponseType("arraybuffer"), ee.setRequestHeader(this.requestHeader), ee.setPath(this.path), ee.setWithCredentials(this.withCredentials), ee.load(r, async (M) => {
      if (typeof M == "string") throw new Error("Invalid gainmap buffer");
      g = M, await m();
    }, (M) => {
      _ = M.lengthComputable, z = M.loaded, H = M.total, Y();
    }, (M) => {
      this.manager.itemError(r), typeof c == "function" && c(M);
    });
    const x = new Zt(this._internalLoadingManager);
    return x.setRequestHeader(this.requestHeader), x.setPath(this.path), x.setWithCredentials(this.withCredentials), x.load(i, async (M) => {
      if (typeof M != "string") throw new Error("Invalid metadata string");
      w = JSON.parse(M), await m();
    }, (M) => {
      F = M.lengthComputable, Z = M.loaded, U = M.total, Y();
    }, (M) => {
      this.manager.itemError(i), typeof c == "function" && c(M);
    }), d;
  }
}
class Bn extends ys {
  load(t, r, i, a) {
    const o = this.prepareQuadRenderer(), c = new Zt(this._internalLoadingManager);
    return c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setPath(this.path), c.setWithCredentials(this.withCredentials), this.manager.itemStart(t), c.load(t, async (d) => {
      if (typeof d == "string") throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const h = new Uint8Array(d);
      let g, w, m;
      try {
        const A = await mn(h);
        g = A.sdr, w = A.gainMap, m = A.metadata;
      } catch (A) {
        if (A instanceof Is || A instanceof Ts) console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), m = { gainMapMin: [0, 0, 0], gainMapMax: [1, 1, 1], gamma: [1, 1, 1], hdrCapacityMin: 0, hdrCapacityMax: 1, offsetHdr: [0, 0, 0], offsetSdr: [0, 0, 0] }, g = h;
        else throw A;
      }
      try {
        await this.render(o, m, g.buffer, w == null ? void 0 : w.buffer);
      } catch (A) {
        this.manager.itemError(t), typeof a == "function" && a(A), o.disposeOnDemandRenderer();
        return;
      }
      typeof r == "function" && r(o), this.manager.itemEnd(t), o.disposeOnDemandRenderer();
    }, i, (d) => {
      this.manager.itemError(t), typeof a == "function" && a(d);
    }), o;
  }
}
const Ot = { apartment: "lebombo_1k.hdr", city: "potsdamer_platz_1k.hdr", dawn: "kiara_1_dawn_1k.hdr", forest: "forest_slope_1k.hdr", lobby: "st_fagans_interior_1k.hdr", night: "dikhololo_night_1k.hdr", park: "rooitou_park_1k.hdr", studio: "studio_small_03_1k.hdr", sunset: "venice_sunset_1k.hdr", warehouse: "empty_warehouse_01_1k.hdr" }, Rs = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", ht = (e3) => Array.isArray(e3), Sr = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function rr({ files: e3 = Sr, path: t = "", preset: r = void 0, colorSpace: i = void 0, extensions: a } = {}) {
  r && (Mr(r), e3 = Ot[r], t = Rs);
  const o = ht(e3), { extension: c, isCubemap: d } = Tr(e3), h = Ir(c);
  if (!h) throw new Error("useEnvironment: Unrecognized file extension: " + e3);
  const g = _e((I) => I.gl);
  y.useLayoutEffect(() => {
    if (c !== "webp" && c !== "jpg" && c !== "jpeg") return;
    function I() {
      qt.clear(h, o ? [e3] : e3);
    }
    g.domElement.addEventListener("webglcontextlost", I, { once: true });
  }, [e3, g.domElement]);
  const w = qt(h, o ? [e3] : e3, (I) => {
    (c === "webp" || c === "jpg" || c === "jpeg") && I.setRenderer(g), I.setPath == null || I.setPath(t), a && a(I);
  });
  let m = o ? w[0] : w;
  if (c === "jpg" || c === "jpeg" || c === "webp") {
    var A;
    m = (A = m.renderTarget) == null ? void 0 : A.texture;
  }
  return m.mapping = d ? Si : Mi, m.colorSpace = i ?? (d ? "srgb" : "srgb-linear"), m;
}
const Sn = { files: Sr, path: "", preset: void 0, extensions: void 0 };
rr.preload = (e3) => {
  const t = { ...Sn, ...e3 };
  let { files: r, path: i = "" } = t;
  const { preset: a, extensions: o } = t;
  a && (Mr(a), r = Ot[a], i = Rs);
  const { extension: c } = Tr(r);
  if (c === "webp" || c === "jpg" || c === "jpeg") throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const d = Ir(c);
  if (!d) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  qt.preload(d, ht(r) ? [r] : r, (h) => {
    h.setPath == null || h.setPath(i), o && o(h);
  });
};
const Mn = { files: Sr, preset: void 0 };
rr.clear = (e3) => {
  const t = { ...Mn, ...e3 };
  let { files: r } = t;
  const { preset: i } = t;
  i && (Mr(i), r = Ot[i]);
  const { extension: a } = Tr(r), o = Ir(a);
  if (!o) throw new Error("useEnvironment: Unrecognized file extension: " + r);
  qt.clear(o, ht(r) ? [r] : r);
};
function Mr(e3) {
  if (!(e3 in Ot)) throw new Error("Preset must be one of: " + Object.keys(Ot).join(", "));
}
function Tr(e3) {
  var t;
  const r = ht(e3) && e3.length === 6, i = ht(e3) && e3.length === 3 && e3.some((c) => c.endsWith("json")), a = ht(e3) ? e3[0] : e3;
  return { extension: r ? "cube" : i ? "webp" : a.startsWith("data:application/exr") ? "exr" : a.startsWith("data:application/hdr") ? "hdr" : a.startsWith("data:image/jpeg") ? "jpg" : (t = a.split(".").pop()) == null || (t = t.split("?")) == null || (t = t.shift()) == null ? void 0 : t.toLowerCase(), isCubemap: r, isGainmap: i };
}
function Ir(e3) {
  return e3 === "cube" ? Ti : e3 === "hdr" ? dn : e3 === "exr" ? hn : e3 === "jpg" || e3 === "jpeg" ? Bn : e3 === "webp" ? Dn : null;
}
const Tn = (e3) => e3.current && e3.current.isScene, In = (e3) => Tn(e3) ? e3.current : e3;
function yr(e3, t, r, i, a = {}) {
  var o, c, d, h;
  a = { backgroundBlurriness: 0, backgroundIntensity: 1, backgroundRotation: [0, 0, 0], environmentIntensity: 1, environmentRotation: [0, 0, 0], ...a };
  const g = In(t || r), w = g.background, m = g.environment, A = { backgroundBlurriness: g.backgroundBlurriness, backgroundIntensity: g.backgroundIntensity, backgroundRotation: (o = (c = g.backgroundRotation) == null || c.clone == null ? void 0 : c.clone()) !== null && o !== void 0 ? o : [0, 0, 0], environmentIntensity: g.environmentIntensity, environmentRotation: (d = (h = g.environmentRotation) == null || h.clone == null ? void 0 : h.clone()) !== null && d !== void 0 ? d : [0, 0, 0] };
  return e3 !== "only" && (g.environment = i), e3 && (g.background = i), Yr(g, a), () => {
    e3 !== "only" && (g.environment = m), e3 && (g.background = w), Yr(g, A);
  };
}
function Rr({ scene: e3, background: t = false, map: r, ...i }) {
  const a = _e((o) => o.scene);
  return y.useLayoutEffect(() => {
    if (r) return yr(t, e3, a, r, i);
  }), null;
}
function bs({ background: e3 = false, scene: t, blur: r, backgroundBlurriness: i, backgroundIntensity: a, backgroundRotation: o, environmentIntensity: c, environmentRotation: d, ...h }) {
  const g = rr(h), w = _e((m) => m.scene);
  return y.useLayoutEffect(() => yr(e3, t, w, g, { backgroundBlurriness: r ?? i, backgroundIntensity: a, backgroundRotation: o, environmentIntensity: c, environmentRotation: d })), y.useEffect(() => () => {
    g.dispose();
  }, [g]), null;
}
function yn({ children: e3, near: t = 0.1, far: r = 1e3, resolution: i = 256, frames: a = 1, map: o, background: c = false, blur: d, backgroundBlurriness: h, backgroundIntensity: g, backgroundRotation: w, environmentIntensity: m, environmentRotation: A, scene: I, files: b, path: _, preset: H = void 0, extensions: z }) {
  const F = _e((x) => x.gl), U = _e((x) => x.scene), Z = y.useRef(null), [Y] = y.useState(() => new _t()), Q = y.useMemo(() => {
    const x = new Ii(i);
    return x.texture.type = Re, x;
  }, [i]);
  y.useEffect(() => () => {
    Q.dispose();
  }, [Q]), y.useLayoutEffect(() => {
    if (a === 1) {
      const x = F.autoClear;
      F.autoClear = true, Z.current.update(F, Y), F.autoClear = x;
    }
    return yr(c, I, U, Q.texture, { backgroundBlurriness: d ?? h, backgroundIntensity: g, backgroundRotation: w, environmentIntensity: m, environmentRotation: A });
  }, [e3, Y, Q.texture, I, U, c, a, F]);
  let ee = 1;
  return st(() => {
    if (a === 1 / 0 || ee < a) {
      const x = F.autoClear;
      F.autoClear = true, Z.current.update(F, Y), F.autoClear = x, ee++;
    }
  }), y.createElement(y.Fragment, null, yi(y.createElement(y.Fragment, null, e3, y.createElement("cubeCamera", { ref: Z, args: [t, r, Q] }), b || H ? y.createElement(bs, { background: true, files: b, preset: H, path: _, extensions: z }) : o ? y.createElement(Rr, { background: true, map: o, extensions: z }) : null), Y));
}
function Rn(e3) {
  var t, r, i, a;
  const o = rr(e3), c = e3.map || o;
  y.useMemo(() => vs({ GroundProjectedEnvImpl: un }), []), y.useEffect(() => () => {
    o.dispose();
  }, [o]);
  const d = y.useMemo(() => [c], [c]), h = (t = e3.ground) == null ? void 0 : t.height, g = (r = e3.ground) == null ? void 0 : r.radius, w = (i = (a = e3.ground) == null ? void 0 : a.scale) !== null && i !== void 0 ? i : 1e3;
  return y.createElement(y.Fragment, null, y.createElement(Rr, Ri({}, e3, { map: c })), y.createElement("groundProjectedEnvImpl", { args: d, scale: w, height: h, radius: g }));
}
function bn(e3) {
  return e3.ground ? y.createElement(Rn, e3) : e3.map ? y.createElement(Rr, e3) : e3.children ? y.createElement(yn, e3) : y.createElement(bs, e3);
}
class Pn extends Ie {
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
	      #include <${gn >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
      }` });
  }
}
const On = (e3) => new ge().setFromSpherical(new Pi(e3, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI)), Un = y.forwardRef(({ radius: e3 = 100, depth: t = 50, count: r = 5e3, saturation: i = 0, factor: a = 4, fade: o = false, speed: c = 1 }, d) => {
  const h = y.useRef(null), [g, w, m] = y.useMemo(() => {
    const I = [], b = [], _ = Array.from({ length: r }, () => (0.5 + 0.5 * Math.random()) * a), H = new tr();
    let z = e3 + t;
    const F = t / r;
    for (let U = 0; U < r; U++) z -= F * Math.random(), I.push(...On(z).toArray()), H.setHSL(U / r, i, 0.9), b.push(H.r, H.g, H.b);
    return [new Float32Array(I), new Float32Array(b), new Float32Array(_)];
  }, [r, t, a, e3, i]);
  st((I) => h.current && (h.current.uniforms.time.value = I.clock.elapsedTime * c));
  const [A] = y.useState(() => new Pn());
  return y.createElement("points", { ref: d }, y.createElement("bufferGeometry", null, y.createElement("bufferAttribute", { attach: "attributes-position", args: [g, 3] }), y.createElement("bufferAttribute", { attach: "attributes-color", args: [w, 3] }), y.createElement("bufferAttribute", { attach: "attributes-size", args: [m, 1] })), y.createElement("primitive", { ref: h, object: A, attach: "material", blending: bi, "uniforms-fade-value": o, depthWrite: false, transparent: true, vertexColors: true }));
});
/**
* postprocessing v6.39.1 build Fri Apr 17 2026
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2026 Raoul van Rüschen
* @license Zlib
*/
var Fn = (() => {
  const e3 = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), t = new Float32Array([0, 0, 2, 0, 0, 2]), r = new Ni();
  return r.setAttribute("position", new jr(e3, 3)), r.setAttribute("uv", new jr(t, 2)), r;
})(), Se = class xr {
  static get fullscreenGeometry() {
    return Fn;
  }
  constructor(t = "Pass", r = new _t(), i = new hs()) {
    this.name = t, this.renderer = null, this.scene = r, this.camera = i, this.screen = null, this.rtt = true, this.needsSwap = true, this.needsDepthBlit = false, this.needsDepthTexture = false, this.enabled = true;
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
    r !== null ? r.material = t : (r = new er(xr.fullscreenGeometry, t), r.frustumCulled = false, this.scene === null && (this.scene = new _t()), this.scene.add(r), this.screen = r);
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
  setDepthTexture(t, r = it) {
  }
  render(t, r, i, a, o) {
    throw new Error("Render method not implemented!");
  }
  setSize(t, r) {
  }
  initialize(t, r, i) {
  }
  dispose() {
    for (const t of Object.keys(this)) {
      const r = this[t];
      (r instanceof Te || r instanceof As || r instanceof je || r instanceof xr) && this[t].dispose();
    }
    this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
  }
}, Ln = class extends Se {
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = false;
  }
  render(e3, t, r, i, a) {
    const o = e3.state.buffers.stencil;
    o.setLocked(false), o.setTest(false);
  }
}, Gn = `#ifdef COLOR_WRITE
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
}`, Ps = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", Os = class extends Ie {
  constructor() {
    super({ name: "CopyMaterial", defines: { COLOR_SPACE_CONVERSION: "1", DEPTH_PACKING: "0", COLOR_WRITE: "1" }, uniforms: { inputBuffer: new N(null), depthBuffer: new N(null), channelWeights: new N(null), opacity: new N(1) }, blending: We, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Gn, vertexShader: Ps }), this.depthFunc = zi;
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
}, Hn = class extends Se {
  constructor(e3, t = true) {
    super("CopyPass"), this.fullscreenMaterial = new Os(), this.needsSwap = false, this.renderTarget = e3, e3 === void 0 && (this.renderTarget = new Te(1, 1, { minFilter: Ce, magFilter: Ce, stencilBuffer: false, depthBuffer: false }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = t;
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
  render(e3, t, r, i, a) {
    this.fullscreenMaterial.inputBuffer = t.texture, e3.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e3.render(this.scene, this.camera);
  }
  setSize(e3, t) {
    this.autoResize && this.renderTarget.setSize(e3, t);
  }
  initialize(e3, t, r) {
    r !== void 0 && (this.renderTarget.texture.type = r, r !== ke ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : e3 !== null && e3.outputColorSpace === we && (this.renderTarget.texture.colorSpace = we));
  }
}, Kr = new tr(), br = class extends Se {
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
  render(e3, t, r, i, a) {
    const o = this.overrideClearColor, c = this.overrideClearAlpha, d = e3.getClearAlpha(), h = o !== null, g = c >= 0;
    h ? (e3.getClearColor(Kr), e3.setClearColor(o, g ? c : d)) : g && e3.setClearAlpha(c), e3.setRenderTarget(this.renderToScreen ? null : t), e3.clear(this.color, this.depth, this.stencil), h ? e3.setClearColor(Kr, d) : g && e3.setClearAlpha(d);
  }
}, Nn = class extends Se {
  constructor(e3, t) {
    super("MaskPass", e3, t), this.needsSwap = false, this.clearPass = new br(false, false, true), this.inverse = false;
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
  render(e3, t, r, i, a) {
    const o = e3.getContext(), c = e3.state.buffers, d = this.scene, h = this.camera, g = this.clearPass, w = this.inverted ? 0 : 1, m = 1 - w;
    c.color.setMask(false), c.depth.setMask(false), c.color.setLocked(true), c.depth.setLocked(true), c.stencil.setTest(true), c.stencil.setOp(o.REPLACE, o.REPLACE, o.REPLACE), c.stencil.setFunc(o.ALWAYS, w, 4294967295), c.stencil.setClear(m), c.stencil.setLocked(true), this.clearPass.enabled && (this.renderToScreen ? g.render(e3, null) : (g.render(e3, t), g.render(e3, r))), this.renderToScreen ? (e3.setRenderTarget(null), e3.render(d, h)) : (e3.setRenderTarget(t), e3.render(d, h), e3.setRenderTarget(r), e3.render(d, h)), c.color.setLocked(false), c.depth.setLocked(false), c.stencil.setLocked(false), c.stencil.setFunc(o.EQUAL, 1, 4294967295), c.stencil.setOp(o.KEEP, o.KEEP, o.KEEP), c.stencil.setLocked(true);
  }
}, or = 1 / 1e3, zn = 1e3, kn = class {
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
    return this._delta * or;
  }
  get fixedDelta() {
    return this._fixedDelta * or;
  }
  set fixedDelta(e3) {
    this._fixedDelta = e3 * zn;
  }
  get elapsed() {
    return this._elapsed * or;
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
}, Qn = class {
  constructor(e3 = null, { depthBuffer: t = true, stencilBuffer: r = false, multisampling: i = 0, frameBufferType: a } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(t, r, a, i), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new Hn(), this.depthTexture = null, this.depthRenderTarget = null, this.passes = [], this.timer = new kn(), this.autoRenderToScreen = true, this.setRenderer(e3);
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
      const t = e3.getSize(new ve()), r = e3.getContext().getContextAttributes().alpha, i = this.inputBuffer.texture.type;
      i === ke && e3.outputColorSpace === we && (this.inputBuffer.texture.colorSpace = we, this.outputBuffer.texture.colorSpace = we, this.inputBuffer.dispose(), this.outputBuffer.dispose()), e3.autoClear = false, this.setSize(t.width, t.height);
      for (const a of this.passes) a.initialize(e3, r, i);
    }
  }
  replaceRenderer(e3, t = true) {
    const r = this.renderer, i = r.domElement.parentNode;
    return this.setRenderer(e3), t && i !== null && (i.removeChild(r.domElement), i.appendChild(e3.domElement)), r;
  }
  createDepthTexture() {
    const e3 = this.inputBuffer, t = new Oi();
    this.depthTexture = t, e3.stencilBuffer ? (t.format = Ui, t.type = Fi) : t.type = ze;
    const r = t.clone();
    return r.name = "EffectComposer.StableDepth", this.depthRenderTarget = new Te(e3.width, e3.height, { depthBuffer: true, stencilBuffer: e3.stencilBuffer, depthTexture: r }), r;
  }
  blitDepthBuffer(e3) {
    const t = this.renderer, r = this.depthRenderTarget, i = t.properties, a = t.getContext();
    t.setRenderTarget(r);
    const o = i.get(e3).__webglFramebuffer, c = i.get(r).__webglFramebuffer, d = e3.stencilBuffer ? a.DEPTH_BUFFER_BIT | a.STENCIL_BUFFER_BIT : a.DEPTH_BUFFER_BIT;
    a.bindFramebuffer(a.READ_FRAMEBUFFER, o), a.bindFramebuffer(a.DRAW_FRAMEBUFFER, c), a.blitFramebuffer(0, 0, e3.width, e3.height, 0, 0, r.width, r.height, d, a.NEAREST), a.bindFramebuffer(a.READ_FRAMEBUFFER, null), a.bindFramebuffer(a.DRAW_FRAMEBUFFER, null), t.setRenderTarget(null);
  }
  deleteDepthTexture() {
    if (this.depthTexture !== null) {
      this.depthTexture.dispose(), this.depthTexture = null, this.depthRenderTarget.dispose(), this.depthRenderTarget = null, this.inputBuffer.depthTexture = null, this.outputBuffer.depthTexture = null;
      for (const e3 of this.passes) e3.setDepthTexture(null);
    }
  }
  createBuffer(e3, t, r, i) {
    const a = this.renderer, o = a === null ? new ve() : a.getDrawingBufferSize(new ve()), c = { minFilter: Ce, magFilter: Ce, stencilBuffer: t, depthBuffer: e3, type: r }, d = new Te(o.width, o.height, c);
    return i > 0 && (d.samples = i), r === ke && a !== null && a.outputColorSpace === we && (d.texture.colorSpace = we), d.texture.name = "EffectComposer.Buffer", d.texture.generateMipmaps = false, d;
  }
  setMainScene(e3) {
    for (const t of this.passes) t.mainScene = e3;
  }
  setMainCamera(e3) {
    for (const t of this.passes) t.mainCamera = e3;
  }
  addPass(e3, t) {
    const r = this.passes, i = this.renderer, a = i.getDrawingBufferSize(new ve()), o = i.getContext().getContextAttributes().alpha, c = this.inputBuffer.texture.type;
    if (e3.renderer = i, e3.setSize(a.width, a.height), e3.initialize(i, o, c), this.autoRenderToScreen && (r.length > 0 && (r[r.length - 1].renderToScreen = false), e3.renderToScreen && (this.autoRenderToScreen = false)), t !== void 0 ? r.splice(t, 0, e3) : r.push(e3), this.autoRenderToScreen && (r[r.length - 1].renderToScreen = true), e3.needsDepthTexture || this.depthTexture !== null) if (this.depthTexture === null) {
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
    let i = this.inputBuffer, a = this.outputBuffer, o, c = false;
    e3 === void 0 && (this.timer.update(), e3 = this.timer.getDelta());
    for (const d of this.passes) if (d.enabled) {
      if (i.depthTexture = this.depthTexture, a.depthTexture = null, d.render(t, i, a, e3, c), d.needsDepthBlit && this.depthRenderTarget !== null && this.blitDepthBuffer(i), d.needsSwap) {
        if (c) {
          r.renderToScreen = d.renderToScreen;
          const h = t.getContext(), g = t.state.buffers.stencil;
          g.setFunc(h.NOTEQUAL, 1, 4294967295), r.render(t, i, a, e3, c), g.setFunc(h.EQUAL, 1, 4294967295);
        }
        o = i, i = a, a = o;
      }
      d instanceof Nn ? c = true : d instanceof Ln && (c = false);
    }
  }
  setSize(e3, t, r) {
    const i = this.renderer, a = i.getSize(new ve());
    (e3 === void 0 || t === void 0) && (e3 = a.width, t = a.height), (a.width !== e3 || a.height !== t) && i.setSize(e3, t, r);
    const o = i.getDrawingBufferSize(new ve());
    this.inputBuffer.setSize(o.width, o.height), this.outputBuffer.setSize(o.width, o.height), this.depthRenderTarget !== null && this.depthRenderTarget.setSize(o.width, o.height);
    for (const c of this.passes) c.setSize(o.width, o.height);
  }
  reset() {
    this.dispose(), this.autoRenderToScreen = true;
  }
  dispose() {
    for (const e3 of this.passes) e3.dispose();
    this.passes = [], this.inputBuffer !== null && this.inputBuffer.dispose(), this.outputBuffer !== null && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose(), Se.fullscreenGeometry.dispose();
  }
}, Ze = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }, $ = { FRAGMENT_HEAD: "FRAGMENT_HEAD", FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV", FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE", VERTEX_HEAD: "VERTEX_HEAD", VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT" }, Yn = class {
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([[$.FRAGMENT_HEAD, null], [$.FRAGMENT_MAIN_UV, null], [$.FRAGMENT_MAIN_IMAGE, null], [$.VERTEX_HEAD, null], [$.VERTEX_MAIN_SUPPORT, null]]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = Ze.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = false, this.readDepth = false, this.colorSpace = Pt;
  }
}, cr = false, Zr = class {
  constructor(e3 = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(e3), this.meshCount = 0, this.replaceMaterial = (t) => {
      if (t.isMesh) {
        let r;
        if (t.material.flatShading) switch (t.material.side) {
          case ut:
            r = this.materialsFlatShadedDoubleSide;
            break;
          case kt:
            r = this.materialsFlatShadedBackSide;
            break;
          default:
            r = this.materialsFlatShaded;
            break;
        }
        else switch (t.material.side) {
          case ut:
            r = this.materialsDoubleSide;
            break;
          case kt:
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
    if (!(e3 instanceof Ie)) return e3.clone();
    const t = e3.uniforms, r = /* @__PURE__ */ new Map();
    for (const a in t) {
      const o = t[a].value;
      o.isRenderTargetTexture && (t[a].value = null, r.set(a, o));
    }
    const i = e3.clone();
    for (const a of r) t[a[0]].value = a[1], i.uniforms[a[0]].value = a[1];
    return i;
  }
  setMaterial(e3) {
    if (this.disposeMaterials(), this.material = e3, e3 !== null) {
      const t = this.materials = [this.cloneMaterial(e3), this.cloneMaterial(e3), this.cloneMaterial(e3)];
      for (const r of t) r.uniforms = Object.assign({}, e3.uniforms), r.side = Gi;
      t[2].skinning = true, this.materialsBackSide = t.map((r) => {
        const i = this.cloneMaterial(r);
        return i.uniforms = Object.assign({}, e3.uniforms), i.side = kt, i;
      }), this.materialsDoubleSide = t.map((r) => {
        const i = this.cloneMaterial(r);
        return i.uniforms = Object.assign({}, e3.uniforms), i.side = ut, i;
      }), this.materialsFlatShaded = t.map((r) => {
        const i = this.cloneMaterial(r);
        return i.uniforms = Object.assign({}, e3.uniforms), i.flatShading = true, i;
      }), this.materialsFlatShadedBackSide = t.map((r) => {
        const i = this.cloneMaterial(r);
        return i.uniforms = Object.assign({}, e3.uniforms), i.flatShading = true, i.side = kt, i;
      }), this.materialsFlatShadedDoubleSide = t.map((r) => {
        const i = this.cloneMaterial(r);
        return i.uniforms = Object.assign({}, e3.uniforms), i.flatShading = true, i.side = ut, i;
      });
    }
  }
  render(e3, t, r) {
    const i = e3.shadowMap.enabled;
    if (e3.shadowMap.enabled = false, cr) {
      const a = this.originalMaterials;
      this.meshCount = 0, t.traverse(this.replaceMaterial), e3.render(t, r);
      for (const o of a) o[0].material = o[1];
      this.meshCount !== a.size && a.clear();
    } else {
      const a = t.overrideMaterial;
      t.overrideMaterial = this.material, e3.render(t, r), t.overrideMaterial = a;
    }
    e3.shadowMap.enabled = i;
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
    return cr;
  }
  static set workaroundEnabled(e3) {
    cr = e3;
  }
}, et = -1, De = class extends Cr {
  constructor(e3 = null, t = et, r = et, i = 1) {
    super(), e3 !== null && this.addEventListener("change", () => e3.setSize(this.baseSize.width, this.baseSize.height)), this.baseSize = new ve(1, 1), this.preferredSize = new ve(t, r), this.target = this.preferredSize, this.s = i, this.effectiveSize = new ve(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
  }
  updateEffectiveSize() {
    const e3 = this.baseSize, t = this.preferredSize, r = this.effectiveSize, i = this.scale;
    t.width !== et ? r.width = t.width : t.height !== et ? r.width = Math.round(t.height * (e3.width / Math.max(e3.height, 1))) : r.width = Math.round(e3.width * i), t.height !== et ? r.height = t.height : t.width !== et ? r.height = Math.round(t.width / Math.max(e3.width / Math.max(e3.height, 1), 1)) : r.height = Math.round(e3.height * i);
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
    this.s !== e3 && (this.s = e3, this.preferredSize.setScalar(et), this.dispatchEvent({ type: "change" }));
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
    return et;
  }
}, K = { SKIP: 9, SET: 30, ADD: 0, ALPHA: 1, AVERAGE: 2, COLOR: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, DIVIDE: 8, DST: 9, EXCLUSION: 10, HARD_LIGHT: 11, HARD_MIX: 12, HUE: 13, INVERT: 14, INVERT_RGB: 15, LIGHTEN: 16, LINEAR_BURN: 17, LINEAR_DODGE: 18, LINEAR_LIGHT: 19, LUMINOSITY: 20, MULTIPLY: 21, NEGATION: 22, NORMAL: 23, OVERLAY: 24, PIN_LIGHT: 25, REFLECT: 26, SATURATION: 27, SCREEN: 28, SOFT_LIGHT: 29, SRC: 30, SUBTRACT: 31, VIVID_LIGHT: 32 }, jn = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Wn = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}", Vn = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Xn = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Kn = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Zn = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", _n = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Jn = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", qn = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", $n = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ea = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ta = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ra = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", sa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ia = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", na = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", aa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", oa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ca = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", la = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ua = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", da = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ha = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}", fa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ga = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", va = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", pa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Aa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ma = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", wa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}", Ea = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", xa = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ca = /* @__PURE__ */ new Map([[K.ADD, jn], [K.ALPHA, Wn], [K.AVERAGE, Vn], [K.COLOR, Xn], [K.COLOR_BURN, Kn], [K.COLOR_DODGE, Zn], [K.DARKEN, _n], [K.DIFFERENCE, Jn], [K.DIVIDE, qn], [K.DST, null], [K.EXCLUSION, $n], [K.HARD_LIGHT, ea], [K.HARD_MIX, ta], [K.HUE, ra], [K.INVERT, sa], [K.INVERT_RGB, ia], [K.LIGHTEN, na], [K.LINEAR_BURN, aa], [K.LINEAR_DODGE, oa], [K.LINEAR_LIGHT, ca], [K.LUMINOSITY, la], [K.MULTIPLY, ua], [K.NEGATION, da], [K.NORMAL, ha], [K.OVERLAY, fa], [K.PIN_LIGHT, ga], [K.REFLECT, va], [K.SATURATION, pa], [K.SCREEN, Aa], [K.SOFT_LIGHT, ma], [K.SRC, wa], [K.SUBTRACT, Ea], [K.VIVID_LIGHT, xa]]), Da = class extends Cr {
  constructor(e3, t = 1) {
    super(), this._blendFunction = e3, this.opacity = new N(t);
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
    return Ca.get(this.blendFunction);
  }
}, Ut = class extends Cr {
  constructor(e3, t, { attributes: r = Ze.NONE, blendFunction: i = K.NORMAL, defines: a = /* @__PURE__ */ new Map(), uniforms: o = /* @__PURE__ */ new Map(), extensions: c = null, vertexShader: d = null } = {}) {
    super(), this.name = e3, this.renderer = null, this.attributes = r, this.fragmentShader = t, this.vertexShader = d, this.defines = a, this.uniforms = o, this.extensions = c, this.blendMode = new Da(i), this.blendMode.addEventListener("change", (h) => this.setChanged()), this._inputColorSpace = Pt, this._outputColorSpace = ps;
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
  setDepthTexture(e3, t = it) {
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
      (t instanceof Te || t instanceof As || t instanceof je || t instanceof Se) && this[e3].dispose();
    }
  }
}, Pr = { VERY_SMALL: 0, SMALL: 1, MEDIUM: 2, LARGE: 3, VERY_LARGE: 4, HUGE: 5 }, Ba = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, Sa = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", Ma = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])], Ta = class extends Ie {
  constructor(e3 = new Wr()) {
    super({ name: "KawaseBlurMaterial", uniforms: { inputBuffer: new N(null), texelSize: new N(new Wr()), scale: new N(1), kernel: new N(0) }, blending: We, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Ba, vertexShader: Sa }), this.setTexelSize(e3.x, e3.y), this.kernelSize = Pr.MEDIUM;
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setInputBuffer(e3) {
    this.inputBuffer = e3;
  }
  get kernelSequence() {
    return Ma[this.kernelSize];
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
    const r = 1 / e3, i = 1 / t;
    this.uniforms.texelSize.value.set(r, i, r * 0.5, i * 0.5);
  }
}, Ia = class extends Se {
  constructor({ kernelSize: e3 = Pr.MEDIUM, resolutionScale: t = 0.5, width: r = De.AUTO_SIZE, height: i = De.AUTO_SIZE, resolutionX: a = r, resolutionY: o = i } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new Te(1, 1, { depthBuffer: false }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const c = this.resolution = new De(this, a, o, t);
    c.addEventListener("change", (d) => this.setSize(c.baseWidth, c.baseHeight)), this._blurMaterial = new Ta(), this._blurMaterial.kernelSize = e3, this.copyMaterial = new Os();
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
  render(e3, t, r, i, a) {
    const o = this.scene, c = this.camera, d = this.renderTargetA, h = this.renderTargetB, g = this.blurMaterial, w = g.kernelSequence;
    let m = t;
    this.fullscreenMaterial = g;
    for (let A = 0, I = w.length; A < I; ++A) {
      const b = A & 1 ? h : d;
      g.kernel = w[A], g.inputBuffer = m.texture, e3.setRenderTarget(b), e3.render(o, c), m = b;
    }
    this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = m.texture, e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(o, c);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t);
    const i = r.width, a = r.height;
    this.renderTargetA.setSize(i, a), this.renderTargetB.setSize(i, a), this.blurMaterial.setSize(e3, t);
  }
  initialize(e3, t, r) {
    r !== void 0 && (this.renderTargetA.texture.type = r, this.renderTargetB.texture.type = r, r !== ke ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : e3 !== null && e3.outputColorSpace === we && (this.renderTargetA.texture.colorSpace = we, this.renderTargetB.texture.colorSpace = we));
  }
  static get AUTO_SIZE() {
    return De.AUTO_SIZE;
  }
}, ya = `#include <common>
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
}`, Ra = class extends Ie {
  constructor(e3 = false, t = null) {
    super({ name: "LuminanceMaterial", defines: { THREE_REVISION: Lt.replace(/\D+/g, "") }, uniforms: { inputBuffer: new N(null), threshold: new N(0), smoothing: new N(1), range: new N(null) }, blending: We, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: ya, vertexShader: Ps }), this.colorOutput = e3, this.luminanceRange = t;
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
}, ba = class extends Se {
  constructor({ renderTarget: e3, luminanceRange: t, colorOutput: r, resolutionScale: i = 1, width: a = De.AUTO_SIZE, height: o = De.AUTO_SIZE, resolutionX: c = a, resolutionY: d = o } = {}) {
    super("LuminancePass"), this.fullscreenMaterial = new Ra(r, t), this.needsSwap = false, this.renderTarget = e3, this.renderTarget === void 0 && (this.renderTarget = new Te(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "LuminancePass.Target");
    const h = this.resolution = new De(this, c, d, i);
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
  render(e3, t, r, i, a) {
    const o = this.fullscreenMaterial;
    o.inputBuffer = t.texture, e3.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e3.render(this.scene, this.camera);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height);
  }
  initialize(e3, t, r) {
    r !== void 0 && r !== ke && (this.renderTarget.texture.type = r, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, Pa = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`, Oa = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}", Ua = class extends Ie {
  constructor() {
    super({ name: "DownsamplingMaterial", uniforms: { inputBuffer: new N(null), texelSize: new N(new ve()) }, blending: We, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Pa, vertexShader: Oa });
  }
  set inputBuffer(e3) {
    this.uniforms.inputBuffer.value = e3;
  }
  setSize(e3, t) {
    this.uniforms.texelSize.value.set(1 / e3, 1 / t);
  }
}, Fa = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`, La = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}", Ga = class extends Ie {
  constructor() {
    super({ name: "UpsamplingMaterial", uniforms: { inputBuffer: new N(null), supportBuffer: new N(null), texelSize: new N(new ve()), radius: new N(0.85) }, blending: We, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Fa, vertexShader: La });
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
}, Ha = class extends Se {
  constructor() {
    super("MipmapBlurPass"), this.needsSwap = false, this.renderTarget = new Te(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new Ua(), this.upsamplingMaterial = new Ga(), this.resolution = new ve();
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
        const i = t.clone();
        i.texture.name = "Downsampling.Mipmap" + r, this.downsamplingMipmaps.push(i);
      }
      this.upsamplingMipmaps.push(t);
      for (let r = 1, i = e3 - 1; r < i; ++r) {
        const a = t.clone();
        a.texture.name = "Upsampling.Mipmap" + r, this.upsamplingMipmaps.push(a);
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
  render(e3, t, r, i, a) {
    const { scene: o, camera: c } = this, { downsamplingMaterial: d, upsamplingMaterial: h } = this, { downsamplingMipmaps: g, upsamplingMipmaps: w } = this;
    let m = t;
    this.fullscreenMaterial = d;
    for (let A = 0, I = g.length; A < I; ++A) {
      const b = g[A];
      d.setSize(m.width, m.height), d.inputBuffer = m.texture, e3.setRenderTarget(b), e3.render(o, c), m = b;
    }
    this.fullscreenMaterial = h;
    for (let A = w.length - 1; A >= 0; --A) {
      const I = w[A];
      h.setSize(m.width, m.height), h.inputBuffer = m.texture, h.supportBuffer = g[A].texture, e3.setRenderTarget(I), e3.render(o, c), m = I;
    }
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.set(e3, t);
    let i = r.width, a = r.height;
    for (let o = 0, c = this.downsamplingMipmaps.length; o < c; ++o) i = Math.round(i * 0.5), a = Math.round(a * 0.5), this.downsamplingMipmaps[o].setSize(i, a), o < this.upsamplingMipmaps.length && this.upsamplingMipmaps[o].setSize(i, a);
  }
  initialize(e3, t, r) {
    if (r !== void 0) {
      const i = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
      for (const a of i) a.texture.type = r;
      if (r !== ke) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      else if (e3 !== null && e3.outputColorSpace === we) for (const a of i) a.texture.colorSpace = we;
    }
  }
  dispose() {
    super.dispose();
    for (const e3 of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) e3.dispose();
  }
}, Na = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`, za = class extends Ut {
  constructor({ blendFunction: e3 = K.SCREEN, luminanceThreshold: t = 1, luminanceSmoothing: r = 0.03, mipmapBlur: i = true, intensity: a = 1, radius: o = 0.85, levels: c = 8, kernelSize: d = Pr.LARGE, resolutionScale: h = 0.5, width: g = De.AUTO_SIZE, height: w = De.AUTO_SIZE, resolutionX: m = g, resolutionY: A = w } = {}) {
    super("BloomEffect", Na, { blendFunction: e3, uniforms: /* @__PURE__ */ new Map([["map", new N(null)], ["intensity", new N(a)]]) }), this.renderTarget = new Te(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new Ia({ kernelSize: d }), this.luminancePass = new ba({ colorOutput: true }), this.luminanceMaterial.threshold = t, this.luminanceMaterial.smoothing = r, this.mipmapBlurPass = new Ha(), this.mipmapBlurPass.enabled = i, this.mipmapBlurPass.radius = o, this.mipmapBlurPass.levels = c, this.uniforms.get("map").value = i ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const I = this.resolution = new De(this, m, A, h);
    I.addEventListener("change", (b) => this.setSize(I.baseWidth, I.baseHeight));
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
    const i = this.renderTarget, a = this.luminancePass;
    a.enabled ? (a.render(e3, t), this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(e3, a.renderTarget) : this.blurPass.render(e3, a.renderTarget, i)) : this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(e3, t) : this.blurPass.render(e3, t, i);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height), this.blurPass.resolution.copy(r), this.luminancePass.setSize(e3, t), this.mipmapBlurPass.setSize(e3, t);
  }
  initialize(e3, t, r) {
    this.blurPass.initialize(e3, t, r), this.luminancePass.initialize(e3, t, r), this.mipmapBlurPass.initialize(e3, t, r), r !== void 0 && (this.renderTarget.texture.type = r, e3 !== null && e3.outputColorSpace === we && (this.renderTarget.texture.colorSpace = we));
  }
}, _r = class extends Se {
  constructor(e3, t = "inputBuffer") {
    super("ShaderPass"), this.fullscreenMaterial = e3, this.input = t;
  }
  setInput(e3) {
    this.input = e3;
  }
  render(e3, t, r, i, a) {
    const o = this.fullscreenMaterial.uniforms;
    t !== null && o !== void 0 && o[this.input] !== void 0 && (o[this.input].value = t.texture), e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(this.scene, this.camera);
  }
  initialize(e3, t, r) {
    r !== void 0 && r !== ke && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, Us = class extends Se {
  constructor(e3, t, r = null) {
    super("RenderPass", e3, t), this.needsSwap = false, this.needsDepthBlit = true, this.clearPass = new br(), this.overrideMaterialManager = r === null ? null : new Zr(r), this.ignoreBackground = false, this.skipShadowMapUpdate = false, this.selection = null;
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
    e3 !== null ? t !== null ? t.setMaterial(e3) : this.overrideMaterialManager = new Zr(e3) : t !== null && (t.dispose(), this.overrideMaterialManager = null);
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
  render(e3, t, r, i, a) {
    const o = this.scene, c = this.camera, d = this.selection, h = c.layers.mask, g = o.background, w = e3.shadowMap.autoUpdate, m = this.renderToScreen ? null : t;
    d !== null && c.layers.set(d.getLayer()), this.skipShadowMapUpdate && (e3.shadowMap.autoUpdate = false), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (o.background = null), this.clearPass.enabled && this.clearPass.render(e3, t), e3.setRenderTarget(m), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(e3, o, c) : e3.render(o, c), c.layers.mask = h, o.background = g, e3.shadowMap.autoUpdate = w;
  }
}, Fs = { DEPTH: 0, LUMA: 1, COLOR: 2 }, ka = { DISABLED: 0, DEPTH: 1, CUSTOM: 2 }, Bt = { LOW: 0, MEDIUM: 1, HIGH: 2, ULTRA: 3 }, St = { DEFAULT: 0, ESKIL: 1 }, Qa = `varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
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
}`, Ya = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`, ja = class extends Ie {
  constructor(e3 = new ve(), t = Fs.COLOR) {
    super({ name: "EdgeDetectionMaterial", defines: { THREE_REVISION: Lt.replace(/\D+/g, ""), LOCAL_CONTRAST_ADAPTATION_FACTOR: "2.0", EDGE_THRESHOLD: "0.1", DEPTH_THRESHOLD: "0.01", PREDICATION_MODE: "0", PREDICATION_THRESHOLD: "0.01", PREDICATION_SCALE: "2.0", PREDICATION_STRENGTH: "1.0", DEPTH_PACKING: "0" }, uniforms: { inputBuffer: new N(null), depthBuffer: new N(null), predicationBuffer: new N(null), texelSize: new N(e3) }, blending: We, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Qa, vertexShader: Ya }), this.edgeDetectionMode = t;
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = it) {
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
}, Wa = `#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
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
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`, Va = "uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}", Xa = class extends Ie {
  constructor(e3 = new ve(), t = new ve()) {
    super({ name: "SMAAWeightsMaterial", defines: { MAX_SEARCH_STEPS_INT: "16", MAX_SEARCH_STEPS_FLOAT: "16.0", MAX_SEARCH_STEPS_DIAG_INT: "8", MAX_SEARCH_STEPS_DIAG_FLOAT: "8.0", CORNER_ROUNDING: "25", CORNER_ROUNDING_NORM: "0.25", AREATEX_MAX_DISTANCE: "16.0", AREATEX_MAX_DISTANCE_DIAG: "20.0", AREATEX_PIXEL_SIZE: "(1.0 / vec2(160.0, 560.0))", AREATEX_SUBTEX_SIZE: "(1.0 / 7.0)", SEARCHTEX_SIZE: "vec2(66.0, 33.0)", SEARCHTEX_PACKED_SIZE: "vec2(64.0, 16.0)" }, uniforms: { inputBuffer: new N(null), searchTexture: new N(null), areaTexture: new N(null), resolution: new N(t), texelSize: new N(e3) }, blending: We, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Wa, vertexShader: Va });
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
}, Jr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC", qr = "data:image/png;base64,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", Ka = "uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}", Za = "varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}", _a = class extends Ut {
  constructor({ blendFunction: e3 = K.SRC, preset: t = Bt.MEDIUM, edgeDetectionMode: r = Fs.COLOR, predicationMode: i = ka.DISABLED } = {}) {
    super("SMAAEffect", Ka, { vertexShader: Za, blendFunction: e3, attributes: Ze.CONVOLUTION | Ze.DEPTH, uniforms: /* @__PURE__ */ new Map([["weightMap", new N(null)]]) });
    let a, o;
    arguments.length > 1 && (a = arguments[0], o = arguments[1], arguments.length > 2 && (t = arguments[2]), arguments.length > 3 && (r = arguments[3])), this.renderTargetEdges = new Te(1, 1, { depthBuffer: false }), this.renderTargetEdges.texture.name = "SMAA.Edges", this.renderTargetWeights = this.renderTargetEdges.clone(), this.renderTargetWeights.texture.name = "SMAA.Weights", this.uniforms.get("weightMap").value = this.renderTargetWeights.texture, this.clearPass = new br(true, false, false), this.clearPass.overrideClearColor = new tr(0), this.clearPass.overrideClearAlpha = 1, this.edgeDetectionPass = new _r(new ja()), this.edgeDetectionMaterial.edgeDetectionMode = r, this.edgeDetectionMaterial.predicationMode = i, this.weightsPass = new _r(new Xa());
    const c = new gs();
    c.onLoad = () => {
      const d = new je(a);
      d.name = "SMAA.Search", d.magFilter = ft, d.minFilter = ft, d.generateMipmaps = false, d.needsUpdate = true, d.flipY = true, this.weightsMaterial.searchTexture = d;
      const h = new je(o);
      h.name = "SMAA.Area", h.magFilter = Ce, h.minFilter = Ce, h.generateMipmaps = false, h.needsUpdate = true, h.flipY = false, this.weightsMaterial.areaTexture = h, this.dispatchEvent({ type: "load" });
    }, c.itemStart("search"), c.itemStart("area"), a !== void 0 && o !== void 0 ? (c.itemEnd("search"), c.itemEnd("area")) : typeof Image < "u" && (a = new Image(), o = new Image(), a.addEventListener("load", () => c.itemEnd("search")), o.addEventListener("load", () => c.itemEnd("area")), a.src = Jr, o.src = qr), this.applyPreset(t);
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
      case Bt.LOW:
        t.edgeDetectionThreshold = 0.15, r.orthogonalSearchSteps = 4, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case Bt.MEDIUM:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 8, r.diagonalDetection = false, r.cornerDetection = false;
        break;
      case Bt.HIGH:
        t.edgeDetectionThreshold = 0.1, r.orthogonalSearchSteps = 16, r.diagonalSearchSteps = 8, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
      case Bt.ULTRA:
        t.edgeDetectionThreshold = 0.05, r.orthogonalSearchSteps = 32, r.diagonalSearchSteps = 16, r.cornerRounding = 25, r.diagonalDetection = true, r.cornerDetection = true;
        break;
    }
  }
  setDepthTexture(e3, t = it) {
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
    return Jr;
  }
  static get areaImageDataURL() {
    return qr;
  }
}, Ja = `#include <packing>
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
gl_FragColor=vec4(n[index],d[index]);}`, qa = "uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}", $a = class extends Ie {
  constructor() {
    super({ name: "DepthDownsamplingMaterial", defines: { DEPTH_PACKING: "0" }, uniforms: { depthBuffer: new N(null), normalBuffer: new N(null), texelSize: new N(new ve()) }, blending: We, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Ja, vertexShader: qa });
  }
  set depthBuffer(e3) {
    this.uniforms.depthBuffer.value = e3;
  }
  set depthPacking(e3) {
    this.defines.DEPTH_PACKING = e3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(e3, t = it) {
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
}, eo = class extends Se {
  constructor({ normalBuffer: e3 = null, resolutionScale: t = 0.5, width: r = De.AUTO_SIZE, height: i = De.AUTO_SIZE, resolutionX: a = r, resolutionY: o = i } = {}) {
    super("DepthDownsamplingPass");
    const c = new $a();
    c.normalBuffer = e3, this.fullscreenMaterial = c, this.needsDepthTexture = true, this.needsSwap = false, this.renderTarget = new Te(1, 1, { minFilter: ft, magFilter: ft, depthBuffer: false, type: ze }), this.renderTarget.texture.name = "DepthDownsamplingPass.Target", this.renderTarget.texture.generateMipmaps = false;
    const d = this.resolution = new De(this, a, o, t);
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
  setDepthTexture(e3, t = it) {
    this.fullscreenMaterial.depthBuffer = e3, this.fullscreenMaterial.depthPacking = t;
  }
  render(e3, t, r, i, a) {
    e3.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e3.render(this.scene, this.camera);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height), this.fullscreenMaterial.setSize(e3, t);
  }
  initialize(e3, t, r) {
    const i = e3.getContext();
    if (!(i.getExtension("EXT_color_buffer_float") || i.getExtension("EXT_color_buffer_half_float"))) throw new Error("Rendering to float texture is not supported.");
  }
}, to = `uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`, ro = class extends Ut {
  constructor({ blendFunction: e3, eskil: t = false, technique: r = t ? St.ESKIL : St.DEFAULT, offset: i = 0.5, darkness: a = 0.5 } = {}) {
    super("VignetteEffect", to, { blendFunction: e3, defines: /* @__PURE__ */ new Map([["VIGNETTE_TECHNIQUE", r.toFixed(0)]]), uniforms: /* @__PURE__ */ new Map([["offset", new N(i)], ["darkness", new N(a)]]) });
  }
  get technique() {
    return Number(this.defines.get("VIGNETTE_TECHNIQUE"));
  }
  set technique(e3) {
    this.technique !== e3 && (this.defines.set("VIGNETTE_TECHNIQUE", e3.toFixed(0)), this.setChanged());
  }
  get eskil() {
    return this.technique === St.ESKIL;
  }
  set eskil(e3) {
    this.technique = e3 ? St.ESKIL : St.DEFAULT;
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
}, so = `#include <common>
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
}`, io = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", no = class extends Ie {
  constructor(e3, t, r, i, a = false) {
    super({ name: "EffectMaterial", defines: { THREE_REVISION: Lt.replace(/\D+/g, ""), DEPTH_PACKING: "0", ENCODE_OUTPUT: "1" }, uniforms: { inputBuffer: new N(null), depthBuffer: new N(null), resolution: new N(new ve()), texelSize: new N(new ve()), cameraNear: new N(0.3), cameraFar: new N(1e3), aspect: new N(1), time: new N(0) }, blending: We, toneMapped: false, depthWrite: false, depthTest: false, dithering: a }), e3 && this.setShaderParts(e3), t && this.setDefines(t), r && this.setUniforms(r), this.copyCameraSettings(i);
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
  setDepthBuffer(e3, t = it) {
    this.depthBuffer = e3, this.depthPacking = t;
  }
  setShaderData(e3) {
    this.setShaderParts(e3.shaderParts), this.setDefines(e3.defines), this.setUniforms(e3.uniforms), this.setExtensions(e3.extensions);
  }
  setShaderParts(e3) {
    return this.fragmentShader = so.replace($.FRAGMENT_HEAD, e3.get($.FRAGMENT_HEAD) || "").replace($.FRAGMENT_MAIN_UV, e3.get($.FRAGMENT_MAIN_UV) || "").replace($.FRAGMENT_MAIN_IMAGE, e3.get($.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = io.replace($.VERTEX_HEAD, e3.get($.VERTEX_HEAD) || "").replace($.VERTEX_MAIN_SUPPORT, e3.get($.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = true, this;
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
    return $;
  }
};
function $r(e3, t, r) {
  for (const i of t) {
    const a = "$1" + e3 + i.charAt(0).toUpperCase() + i.slice(1), o = new RegExp("([^\\.])(\\b" + i + "\\b)", "g");
    for (const c of r.entries()) c[1] !== null && r.set(c[0], c[1].replace(o, a));
  }
}
function ao(e3, t, r) {
  let i = t.getFragmentShader(), a = t.getVertexShader();
  const o = i !== void 0 && /mainImage/.test(i), c = i !== void 0 && /mainUv/.test(i);
  if (r.attributes |= t.getAttributes(), i === void 0) throw new Error(`Missing fragment shader (${t.name})`);
  if (c && r.attributes & Ze.CONVOLUTION) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);
  if (!o && !c) throw new Error(`Could not find mainImage or mainUv function (${t.name})`);
  {
    const d = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, h = r.shaderParts;
    let g = h.get($.FRAGMENT_HEAD) || "", w = h.get($.FRAGMENT_MAIN_UV) || "", m = h.get($.FRAGMENT_MAIN_IMAGE) || "", A = h.get($.VERTEX_HEAD) || "", I = h.get($.VERTEX_MAIN_SUPPORT) || "";
    const b = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
    if (c && (w += `	${e3}MainUv(UV);
`, r.uvTransformation = true), a !== null && /mainSupport/.test(a)) {
      const F = /mainSupport *\([\w\s]*?uv\s*?\)/.test(a);
      I += `	${e3}MainSupport(`, I += F ? `vUv);
` : `);
`;
      for (const U of a.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) for (const Z of U[1].split(/\s*,\s*/)) r.varyings.add(Z), b.add(Z), _.add(Z);
      for (const U of a.matchAll(d)) _.add(U[1]);
    }
    for (const F of i.matchAll(d)) _.add(F[1]);
    for (const F of t.defines.keys()) _.add(F.replace(/\([\w\s,]*\)/g, ""));
    for (const F of t.uniforms.keys()) _.add(F);
    _.delete("while"), _.delete("for"), _.delete("if"), t.uniforms.forEach((F, U) => r.uniforms.set(e3 + U.charAt(0).toUpperCase() + U.slice(1), F)), t.defines.forEach((F, U) => r.defines.set(e3 + U.charAt(0).toUpperCase() + U.slice(1), F));
    const H = /* @__PURE__ */ new Map([["fragment", i], ["vertex", a]]);
    $r(e3, _, r.defines), $r(e3, _, H), i = H.get("fragment"), a = H.get("vertex");
    const z = t.blendMode;
    if (r.blendModes.set(z.blendFunction, z), o) {
      t.inputColorSpace !== null && t.inputColorSpace !== r.colorSpace && (m += t.inputColorSpace === we ? `color0 = sRGBTransferOETF(color0);
	` : `color0 = sRGBToLinear(color0);
	`), t.outputColorSpace !== ps ? r.colorSpace = t.outputColorSpace : t.inputColorSpace !== null && (r.colorSpace = t.inputColorSpace);
      const F = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      m += `${e3}MainImage(color0, UV, `, r.attributes & Ze.DEPTH && F.test(i) && (m += "depth, ", r.readDepth = true), m += `color1);
	`;
      const U = e3 + "BlendOpacity";
      r.uniforms.set(U, z.opacity), m += `color0 = blend${z.blendFunction}(color0, color1, ${U});

	`, g += `uniform float ${U};

`;
    }
    if (g += i + `
`, a !== null && (A += a + `
`), h.set($.FRAGMENT_HEAD, g), h.set($.FRAGMENT_MAIN_UV, w), h.set($.FRAGMENT_MAIN_IMAGE, m), h.set($.VERTEX_HEAD, A), h.set($.VERTEX_MAIN_SUPPORT, I), t.extensions !== null) for (const F of t.extensions) r.extensions.add(F);
  }
}
var oo = class extends Se {
  constructor(e3, ...t) {
    super("EffectPass"), this.fullscreenMaterial = new no(null, null, null, e3), this.listener = (r) => this.handleEvent(r), this.effects = [], this.setEffects(t), this.skipRendering = false, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
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
    const e3 = new Yn();
    let t = 0;
    for (const c of this.effects) if (c.blendMode.blendFunction === K.DST) e3.attributes |= c.getAttributes() & Ze.DEPTH;
    else {
      if (e3.attributes & c.getAttributes() & Ze.CONVOLUTION) throw new Error(`Convolution effects cannot be merged (${c.name})`);
      ao("e" + t++, c, e3);
    }
    let r = e3.shaderParts.get($.FRAGMENT_HEAD), i = e3.shaderParts.get($.FRAGMENT_MAIN_IMAGE), a = e3.shaderParts.get($.FRAGMENT_MAIN_UV);
    const o = /\bblend\b/g;
    for (const c of e3.blendModes.values()) r += c.getShaderCode().replace(o, `blend${c.blendFunction}`) + `
`;
    e3.attributes & Ze.DEPTH ? (e3.readDepth && (i = `float depth = readDepth(UV);

	` + i), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = false, e3.colorSpace === we && (i += `color0 = sRGBToLinear(color0);
	`), e3.uvTransformation ? (a = `vec2 transformedUv = vUv;
` + a, e3.defines.set("UV", "transformedUv")) : e3.defines.set("UV", "vUv"), e3.shaderParts.set($.FRAGMENT_HEAD, r), e3.shaderParts.set($.FRAGMENT_MAIN_IMAGE, i), e3.shaderParts.set($.FRAGMENT_MAIN_UV, a);
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
  setDepthTexture(e3, t = it) {
    this.fullscreenMaterial.depthBuffer = e3, this.fullscreenMaterial.depthPacking = t;
    for (const r of this.effects) r.setDepthTexture(e3, t);
  }
  render(e3, t, r, i, a) {
    for (const o of this.effects) o.update(e3, t, i);
    if (!this.skipRendering || this.renderToScreen) {
      const o = this.fullscreenMaterial;
      o.inputBuffer = t.texture, o.time += i * this.timeScale, e3.setRenderTarget(this.renderToScreen ? null : r), e3.render(this.scene, this.camera);
    }
  }
  setSize(e3, t) {
    this.fullscreenMaterial.setSize(e3, t);
    for (const r of this.effects) r.setSize(e3, t);
  }
  initialize(e3, t, r) {
    this.renderer = e3;
    for (const i of this.effects) i.initialize(e3, t, r);
    this.updateMaterial(), r !== void 0 && r !== ke && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
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
}, co = class extends Se {
  constructor(e3, t, { renderTarget: r, resolutionScale: i = 1, width: a = De.AUTO_SIZE, height: o = De.AUTO_SIZE, resolutionX: c = a, resolutionY: d = o } = {}) {
    super("NormalPass"), this.needsSwap = false, this.renderPass = new Us(e3, t, new Li());
    const h = this.renderPass;
    h.ignoreBackground = true, h.skipShadowMapUpdate = true;
    const g = h.getClearPass();
    g.overrideClearColor = new tr(7829503), g.overrideClearAlpha = 1, this.renderTarget = r, this.renderTarget === void 0 && (this.renderTarget = new Te(1, 1, { minFilter: ft, magFilter: ft }), this.renderTarget.texture.name = "NormalPass.Target");
    const w = this.resolution = new De(this, c, d, i);
    w.addEventListener("change", (m) => this.setSize(w.baseWidth, w.baseHeight));
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
  render(e3, t, r, i, a) {
    const o = this.renderToScreen ? null : this.renderTarget;
    this.renderPass.render(e3, o, o);
  }
  setSize(e3, t) {
    const r = this.resolution;
    r.setBaseSize(e3, t), this.renderTarget.setSize(r.width, r.height);
  }
};
function yt(e3, t, r) {
  return t in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
new ve();
new ve();
function Ls(e3, t) {
  if (!(e3 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var Ue = function e(t, r, i) {
  var a = this;
  Ls(this, e), yt(this, "dot2", function(o, c) {
    return a.x * o + a.y * c;
  }), yt(this, "dot3", function(o, c, d) {
    return a.x * o + a.y * c + a.z * d;
  }), this.x = t, this.y = r, this.z = i;
}, lo = [new Ue(1, 1, 0), new Ue(-1, 1, 0), new Ue(1, -1, 0), new Ue(-1, -1, 0), new Ue(1, 0, 1), new Ue(-1, 0, 1), new Ue(1, 0, -1), new Ue(-1, 0, -1), new Ue(0, 1, 1), new Ue(0, -1, 1), new Ue(0, 1, -1), new Ue(0, -1, -1)], es = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], ts = new Array(512), rs = new Array(512), uo = function(t) {
  t > 0 && t < 1 && (t *= 65536), t = Math.floor(t), t < 256 && (t |= t << 8);
  for (var r = 0; r < 256; r++) {
    var i;
    r & 1 ? i = es[r] ^ t & 255 : i = es[r] ^ t >> 8 & 255, ts[r] = ts[r + 256] = i, rs[r] = rs[r + 256] = lo[i % 12];
  }
};
uo(0);
function ho(e3) {
  if (typeof e3 == "number") e3 = Math.abs(e3);
  else if (typeof e3 == "string") {
    var t = e3;
    e3 = 0;
    for (var r = 0; r < t.length; r++) e3 = (e3 + (r + 1) * (t.charCodeAt(r) % 96)) % 2147483647;
  }
  return e3 === 0 && (e3 = 311), e3;
}
function ss(e3) {
  var t = ho(e3);
  return function() {
    var r = t * 48271 % 2147483647;
    return t = r, r / 2147483647;
  };
}
var fo = function e2(t) {
  var r = this;
  Ls(this, e2), yt(this, "seed", 0), yt(this, "init", function(i) {
    r.seed = i, r.value = ss(i);
  }), yt(this, "value", ss(this.seed)), this.init(t);
};
new fo(Math.random());
const go = y.createContext(null), is = (e3) => (e3.getAttributes() & 2) === 2, vo = y.memo(y.forwardRef(({ children: e3, camera: t, scene: r, resolutionScale: i, enabled: a = true, renderPriority: o = 1, autoClear: c = true, depthBuffer: d, enableNormalPass: h, stencilBuffer: g, multisampling: w = 8, frameBufferType: m = Re }, A) => {
  const { gl: I, scene: b, camera: _, size: H } = _e(), z = r || b, F = t || _, [U, Z, Y] = y.useMemo(() => {
    const x = new Qn(I, { depthBuffer: d, stencilBuffer: g, multisampling: w, frameBufferType: m });
    x.addPass(new Us(z, F));
    let M = null, L = null;
    return h && (L = new co(z, F), L.enabled = false, x.addPass(L), i !== void 0 && (M = new eo({ normalBuffer: L.texture, resolutionScale: i }), M.enabled = false, x.addPass(M))), [x, L, M];
  }, [F, I, d, g, w, m, z, h, i]);
  y.useEffect(() => U == null ? void 0 : U.setSize(H.width, H.height), [U, H]), st((x, M) => {
    if (a) {
      const L = I.autoClear;
      I.autoClear = c, g && !c && I.clearStencil(), U.render(M), I.autoClear = L;
    }
  }, a ? o : 0);
  const Q = y.useRef(null);
  y.useLayoutEffect(() => {
    var _a2;
    const x = [], M = Q.current.__r3f;
    if (M && U) {
      const L = M.children;
      for (let W = 0; W < L.length; W++) {
        const j = L[W].object;
        if (j instanceof Ut) {
          const q = [j];
          if (!is(j)) {
            let re = null;
            for (; (re = (_a2 = L[W + 1]) == null ? void 0 : _a2.object) instanceof Ut && !is(re); ) q.push(re), W++;
          }
          const G = new oo(F, ...q);
          x.push(G);
        } else j instanceof Se && x.push(j);
      }
      for (const W of x) U == null ? void 0 : U.addPass(W);
      Z && (Z.enabled = true), Y && (Y.enabled = true);
    }
    return () => {
      for (const L of x) U == null ? void 0 : U.removePass(L);
      Z && (Z.enabled = false), Y && (Y.enabled = false);
    };
  }, [U, e3, F, Z, Y]), y.useEffect(() => {
    const x = I.toneMapping;
    return I.toneMapping = ki, () => {
      I.toneMapping = x;
    };
  }, [I]);
  const ee = y.useMemo(() => ({ composer: U, normalPass: Z, downSamplingPass: Y, resolutionScale: i, camera: F, scene: z }), [U, Z, Y, i, F, z]);
  return y.useImperativeHandle(A, () => U, [U]), u.jsx(go.Provider, { value: ee, children: u.jsx("group", { ref: Q, children: e3 }) });
}));
let po = 0;
const ns = /* @__PURE__ */ new WeakMap(), Or = (e3, t) => function({ blendFunction: r = t == null ? void 0 : t.blendFunction, opacity: i = t == null ? void 0 : t.opacity, ...a }) {
  let o = ns.get(e3);
  if (!o) {
    const h = `@react-three/postprocessing/${e3.name}-${po++}`;
    vs({ [h]: e3 }), ns.set(e3, o = h);
  }
  const c = _e((h) => h.camera), d = gi.useMemo(() => [...(t == null ? void 0 : t.args) ?? [], ...a.args ?? [{ ...t, ...a }]], [JSON.stringify(a)]);
  return u.jsx(o, { camera: c, "blendMode-blendFunction": r, "blendMode-opacity-value": i, ...a, args: d });
}, Ao = Or(za, { blendFunction: 0 }), mo = Or(_a), wo = Or(ro), as = { A: "01110 10001 10001 11111 10001 10001 10001", B: "11110 10001 10001 11110 10001 10001 11110", C: "01111 10000 10000 10000 10000 10000 01111", D: "11110 10001 10001 10001 10001 10001 11110", E: "11111 10000 10000 11110 10000 10000 11111", F: "11111 10000 10000 11110 10000 10000 10000", G: "01111 10000 10000 10111 10001 10001 01111", H: "10001 10001 10001 11111 10001 10001 10001", I: "11111 00100 00100 00100 00100 00100 11111", J: "00111 00010 00010 00010 00010 10010 01100", K: "10001 10010 10100 11000 10100 10010 10001", L: "10000 10000 10000 10000 10000 10000 11111", M: "10001 11011 10101 10101 10001 10001 10001", N: "10001 11001 10101 10011 10001 10001 10001", O: "01110 10001 10001 10001 10001 10001 01110", P: "11110 10001 10001 11110 10000 10000 10000", Q: "01110 10001 10001 10001 10101 10010 01101", R: "11110 10001 10001 11110 10100 10010 10001", S: "01111 10000 10000 01110 00001 00001 11110", T: "11111 00100 00100 00100 00100 00100 00100", U: "10001 10001 10001 10001 10001 10001 01110", V: "10001 10001 10001 10001 10001 01010 00100", W: "10001 10001 10001 10101 10101 11011 10001", X: "10001 10001 01010 00100 01010 10001 10001", Y: "10001 10001 01010 00100 00100 00100 00100", Z: "11111 00001 00010 00100 01000 10000 11111", 0: "01110 10001 10011 10101 11001 10001 01110", 1: "00100 01100 00100 00100 00100 00100 01110", 2: "01110 10001 00001 00010 00100 01000 11111", 3: "11110 00001 00001 01110 00001 00001 11110", 4: "00010 00110 01010 10010 11111 00010 00010", 5: "11111 10000 11110 00001 00001 10001 01110", 6: "00110 01000 10000 11110 10001 10001 01110", 7: "11111 00001 00010 00100 01000 01000 01000", 8: "01110 10001 10001 01110 10001 10001 01110", 9: "01110 10001 10001 01111 00001 00010 01100", "!": "00100 00100 00100 00100 00100 00000 00100", "?": "01110 10001 00001 00110 00100 00000 00100", ".": "00000 00000 00000 00000 00000 01100 01100", "'": "00100 00100 00000 00000 00000 00000 00000", "&": "01100 10010 10010 01100 10101 10010 01101", "-": "00000 00000 00000 11111 00000 00000 00000", "/": "00001 00010 00010 00100 01000 01000 10000", " ": "00000 00000 00000 00000 00000 00000 00000" }, lr = 5, ur = 7, os = 1;
function Eo(e3) {
  const t = e3.toUpperCase().split(""), r = t.length * lr + Math.max(0, t.length - 1) * os, i = [];
  return t.forEach((a, o) => {
    const c = (as[a] ?? as["?"]).split(" "), d = o * (lr + os);
    c.forEach((h, g) => {
      for (let w = 0; w < lr; w += 1) h[w] === "1" && i.push({ x: d + w - (r - 1) / 2, y: ur - 1 - g - (ur - 1) / 2 });
    });
  }), { cubes: i, width: r, height: ur };
}
const jt = new Qi();
function Rt({ children: e3, position: t = [0, 0, 0], rotation: r = [0, 0, 0], size: i = 1, depth: a = 1, color: o = "#ffffff", emissive: c = "#000000", emissiveIntensity: d = 0, wave: h = 0 }) {
  const g = y.useRef(null), { cubes: w } = y.useMemo(() => Eo(e3), [e3]), m = (A) => {
    g.current && (w.forEach((I, b) => {
      const _ = h ? Math.sin(A * 1.6 + I.x * 0.35) * h : 0;
      jt.position.set(I.x * i, I.y * i + _, 0), jt.scale.setScalar(1), jt.updateMatrix(), g.current.setMatrixAt(b, jt.matrix);
    }), g.current.instanceMatrix.needsUpdate = true);
  };
  return y.useLayoutEffect(() => m(0)), st(({ clock: A }) => {
    h && m(A.elapsedTime);
  }), u.jsxs("instancedMesh", { ref: g, args: [void 0, void 0, w.length], position: t, rotation: r, castShadow: true, receiveShadow: true, children: [u.jsx("boxGeometry", { args: [i * 0.96, i * 0.96, a] }), u.jsx("meshStandardMaterial", { color: o, emissive: c, emissiveIntensity: d, roughness: 0.35, metalness: 0.1, flatShading: true })] });
}
function xo({ zone: e3 }) {
  const [t, r] = e3.position, i = Vr((w) => w.activeZone === e3.id), a = Vr((w) => w.visited.includes(e3.id)), o = y.useRef(null), c = y.useRef(null), d = y.useRef(null), h = y.useMemo(() => Math.atan2(-t, -r), [t, r]), g = y.useMemo(() => Array.from({ length: 10 }).map((w, m) => {
    const A = m / 10 * Math.PI * 2 + Math.PI / 10;
    return [Math.cos(A) * (e3.radius + 4), Math.sin(A) * (e3.radius + 4)];
  }), [e3.radius]);
  return st(({ clock: w }) => {
    const m = w.elapsedTime;
    o.current && (o.current.position.y = 16 + Math.sin(m * 0.9) * 0.5, o.current.rotation.y = h + Math.sin(m * 0.4) * 0.05);
    const A = i ? 1.5 + Math.sin(m * 4) * 0.35 : 1;
    if (c.current) {
      const I = c.current.material;
      I.opacity = 0.1 * A + (a ? 0.05 : 0);
    }
    d.current && (d.current.intensity = 52 * A);
  }), u.jsxs(u.Fragment, { children: [u.jsxs(Gt, { type: "fixed", colliders: false, position: [t, 0, r], children: [u.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.05, 0], receiveShadow: true, children: [u.jsx("circleGeometry", { args: [e3.radius + 6, 56] }), u.jsx("meshStandardMaterial", { color: "#4a4688", roughness: 0.85 })] }), u.jsxs("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, 0.07, 0], receiveShadow: true, children: [u.jsx("ringGeometry", { args: [e3.radius - 1.2, e3.radius, 56] }), u.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.glow, emissiveIntensity: i ? 2.6 : 1.7, toneMapped: false })] }), g.map(([w, m], A) => u.jsx(Yi, { args: [3.5, 0.8], position: [w, 3.5, m] }, A))] }), u.jsxs("group", { position: [t, 0, r], children: [g.map(([w, m], A) => u.jsxs("group", { position: [w, 0, m], children: [u.jsxs("mesh", { castShadow: true, receiveShadow: true, position: [0, 3.4, 0], children: [u.jsx("boxGeometry", { args: [1.5, 6.8, 1.5] }), u.jsx("meshStandardMaterial", { color: "#37336b", roughness: 0.7, flatShading: true })] }), u.jsxs("mesh", { position: [0, 7.2, 0], children: [u.jsx("octahedronGeometry", { args: [0.85, 0] }), u.jsx("meshStandardMaterial", { color: e3.glow, emissive: e3.color, emissiveIntensity: 3.2, toneMapped: false })] })] }, A)), u.jsxs("mesh", { ref: c, position: [0, 22, 0], children: [u.jsx("cylinderGeometry", { args: [e3.radius - 2, e3.radius + 1, 44, 24, 1, true] }), u.jsx("meshBasicMaterial", { color: e3.glow, transparent: true, opacity: 0.12, side: ut, depthWrite: false, toneMapped: false })] }), u.jsx("pointLight", { ref: d, position: [0, 12, 0], color: e3.color, distance: 70, decay: 2 }), u.jsx("group", { ref: o, children: u.jsx(Rt, { size: 0.95, depth: 1.2, color: e3.glow, emissive: e3.color, emissiveIntensity: i ? 2.2 : 1.1, wave: 0.25, children: e3.sign }) })] })] });
}
function Co({ position: e3 }) {
  const t = y.useMemo(() => {
    const r = [];
    for (let i = 0; i < 4; i += 1) for (let a = 0; a <= i; a += 1) r.push([e3[0] + (a - i / 2) * 2.4, 1.4, e3[1] + i * 2.2 - 3]);
    return r;
  }, [e3]);
  return u.jsx(u.Fragment, { children: t.map((r, i) => u.jsx(Do, { position: r }, i)) });
}
function Do({ position: e3 }) {
  const t = y.useRef(null), r = y.useRef(new ge(...e3));
  return st(() => {
    const i = t.current;
    if (!i) return;
    const a = i.translation();
    (a.y < -6 || new ge(a.x, 0, a.z).distanceTo(new ge(r.current.x, 0, r.current.z)) > 40) && (i.setTranslation({ x: r.current.x, y: r.current.y + 6, z: r.current.z }, true), i.setLinvel({ x: 0, y: 0, z: 0 }, true), i.setAngvel({ x: 0, y: 0, z: 0 }, true));
  }), u.jsxs(Gt, { ref: t, position: e3, colliders: false, mass: 0.4, restitution: 0.35, linearDamping: 0.4, angularDamping: 0.6, children: [u.jsx(Dr, { args: [0.45, 1.3, 0.45] }), u.jsxs("mesh", { castShadow: true, position: [0, -1.15, 0], children: [u.jsx("boxGeometry", { args: [1.1, 0.3, 1.1] }), u.jsx("meshStandardMaterial", { color: "#3a3468", roughness: 0.6, flatShading: true })] }), u.jsxs("mesh", { castShadow: true, position: [0, -0.5, 0], children: [u.jsx("cylinderGeometry", { args: [0.16, 0.24, 1, 6] }), u.jsx("meshStandardMaterial", { color: "#ffc861", metalness: 0.8, roughness: 0.25, flatShading: true })] }), u.jsxs("mesh", { castShadow: true, position: [0, 0.45, 0], children: [u.jsx("cylinderGeometry", { args: [0.62, 0.3, 1.2, 8] }), u.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ff9d2e", emissiveIntensity: 0.9, metalness: 0.85, roughness: 0.2, flatShading: true })] }), [-0.72, 0.72].map((i) => u.jsxs("mesh", { position: [i, 0.5, 0], rotation: [0, 0, i > 0 ? -0.5 : 0.5], children: [u.jsx("torusGeometry", { args: [0.3, 0.08, 6, 10, Math.PI] }), u.jsx("meshStandardMaterial", { color: "#ffd67a", metalness: 0.85, roughness: 0.2 })] }, i))] });
}
function dr({ position: e3, rotation: t = 0 }) {
  return u.jsxs(Gt, { type: "fixed", colliders: "hull", position: [e3[0], 0, e3[1]], rotation: [0, t, 0], children: [u.jsxs("mesh", { castShadow: true, receiveShadow: true, rotation: [-0.3, 0, 0], position: [0, 1.3, 0], children: [u.jsx("boxGeometry", { args: [9, 0.6, 12] }), u.jsx("meshStandardMaterial", { color: "#5b56a4", roughness: 0.7, flatShading: true })] }), u.jsxs("mesh", { position: [0, 1.72, -5.4], rotation: [-0.3, 0, 0], children: [u.jsx("boxGeometry", { args: [9, 0.12, 1.2] }), u.jsx("meshStandardMaterial", { color: "#ffd67a", emissive: "#ffae3a", emissiveIntensity: 2.5, toneMapped: false })] })] });
}
function cs({ position: e3 }) {
  const t = y.useMemo(() => {
    const r = [];
    for (let i = 0; i < 3; i += 1) {
      const a = 3 - i;
      for (let o = 0; o < a; o += 1) r.push([e3[0] + (o - (a - 1) / 2) * 1.7, 0.85 + i * 1.6, e3[1]]);
    }
    return r;
  }, [e3]);
  return u.jsx(u.Fragment, { children: t.map((r, i) => u.jsxs(Gt, { position: r, colliders: false, mass: 0.5, restitution: 0.2, children: [u.jsx(Dr, { args: [0.78, 0.78, 0.78] }), u.jsxs("mesh", { castShadow: true, receiveShadow: true, children: [u.jsx("boxGeometry", { args: [1.56, 1.56, 1.56] }), u.jsx("meshStandardMaterial", { color: "#6d5cc4", roughness: 0.65, flatShading: true })] }), u.jsxs("mesh", { children: [u.jsx("boxGeometry", { args: [1.62, 0.16, 1.62] }), u.jsx("meshStandardMaterial", { color: "#c3b4ff", emissive: "#8f7bff", emissiveIntensity: 1.4, toneMapped: false })] })] }, i)) });
}
const Bo = () => ({ legs: [null, null, null, null], head: null, ears: [null, null], tail: null, body: null }), Gs = 0.74, Wt = 0.58, Ft = "#c8783c", $t = "#a75f2c", sr = "#f2d9b8", So = "#241c26", Mt = { phase: 0 };
function Mo(e3, { speed: t, steer: r, throttle: i, delta: a, elapsed: o }) {
  const c = Math.abs(t);
  Mt.phase += a * (1.6 + Math.min(c, 26) * 0.42);
  const d = Math.min(c / 7, 1) * 0.85, h = Math.sin(o * 1.6) * 0.03, g = [0, Math.PI, Math.PI, 0];
  if (e3.legs.forEach((A, I) => {
    if (!A) return;
    const b = d > 0.02 ? Math.sin(Mt.phase + g[I]) * d : h;
    A.rotation.x = Fe.lerp(A.rotation.x, b, 1 - Math.pow(1e-4, a));
  }), e3.body) {
    const A = Math.min(c / 10, 1) * 0.09;
    e3.body.position.y = Gs + Math.abs(Math.sin(Mt.phase)) * A, e3.body.rotation.z = Fe.lerp(e3.body.rotation.z, -r * Math.min(c / 8, 1) * 0.12, 1 - Math.pow(2e-3, a));
  }
  if (e3.head) {
    const A = r * 0.34 * Math.min(c / 5 + 0.3, 1), I = -i * 0.08 + Math.sin(Mt.phase * 2) * 0.02, b = 1 - Math.pow(2e-3, a);
    e3.head.rotation.y = Fe.lerp(e3.head.rotation.y, A, b), e3.head.rotation.x = Fe.lerp(e3.head.rotation.x, I, b);
  }
  const w = Math.sin(Mt.phase * 1.7) * Math.min(c / 12, 1) * 0.5, m = Math.min(c / 20, 1) * 0.7;
  e3.ears.forEach((A, I) => {
    A && (A.rotation.x = Fe.lerp(A.rotation.x, m + w * (I ? -1 : 1), 0.2));
  }), e3.tail && (e3.tail.rotation.y = Math.sin(o * (5 + c * 0.5)) * (0.35 + Math.min(c / 30, 0.35)), e3.tail.rotation.x = 0.95 + Math.min(c / 26, 0.35));
}
function To({ rig: e3 }) {
  return u.jsxs("group", { position: [0, Gs, 0], ref: (t) => e3.current.body = t, children: [u.jsxs("mesh", { castShadow: true, receiveShadow: true, position: [0, 0.08, 0.1], children: [u.jsx("boxGeometry", { args: [1.2, 0.86, 2.5] }), u.jsx("meshStandardMaterial", { color: Ft, roughness: 0.75, flatShading: true })] }), u.jsxs("mesh", { castShadow: true, receiveShadow: true, position: [0, -0.02, -1], children: [u.jsx("boxGeometry", { args: [1.28, 0.84, 0.8] }), u.jsx("meshStandardMaterial", { color: $t, roughness: 0.75, flatShading: true })] }), u.jsxs("mesh", { position: [0, -0.3, 0.1], children: [u.jsx("boxGeometry", { args: [1.04, 0.34, 2.2] }), u.jsx("meshStandardMaterial", { color: sr, roughness: 0.8, flatShading: true })] }), u.jsxs("mesh", { castShadow: true, position: [0, 0.1, 1.3], children: [u.jsx("boxGeometry", { args: [1.32, 0.94, 0.72] }), u.jsx("meshStandardMaterial", { color: $t, roughness: 0.75, flatShading: true })] }), u.jsxs("mesh", { castShadow: true, position: [0, 0.34, -1.16], rotation: [0.34, 0, 0], children: [u.jsx("boxGeometry", { args: [0.78, 0.8, 0.7] }), u.jsx("meshStandardMaterial", { color: Ft, roughness: 0.75, flatShading: true })] }), u.jsx(yo, { rig: e3 }), u.jsx(Ro, { rig: e3 }), [[-0.52, -1.02, "front"], [0.52, -1.02, "front"], [-0.52, 1.14, "back"], [0.52, 1.14, "back"]].map(([t, r, i], a) => u.jsx("group", { position: [t, -0.16, r], ref: (o) => e3.current.legs[a] = o, children: u.jsx(Io, { kind: i }) }, a))] });
}
function Io({ kind: e3 }) {
  return u.jsxs("group", { children: [u.jsxs("mesh", { castShadow: true, position: [0, -Wt / 2, 0], children: [u.jsx("boxGeometry", { args: [0.34, Wt, e3 === "back" ? 0.5 : 0.42] }), u.jsx("meshStandardMaterial", { color: $t, roughness: 0.8, flatShading: true })] }), u.jsxs("mesh", { castShadow: true, position: [0, -Wt - 0.24, 0.02], children: [u.jsx("boxGeometry", { args: [0.27, 0.5, 0.32] }), u.jsx("meshStandardMaterial", { color: Ft, roughness: 0.8, flatShading: true })] }), u.jsxs("mesh", { castShadow: true, position: [0, -Wt - 0.52, -0.04], children: [u.jsx("boxGeometry", { args: [0.32, 0.2, 0.44] }), u.jsx("meshStandardMaterial", { color: sr, roughness: 0.85, flatShading: true })] })] });
}
function yo({ rig: e3 }) {
  return u.jsxs("group", { position: [0, 0.72, -1.62], ref: (t) => e3.current.head = t, children: [u.jsxs("mesh", { castShadow: true, receiveShadow: true, children: [u.jsx("boxGeometry", { args: [0.94, 0.86, 0.94] }), u.jsx("meshStandardMaterial", { color: Ft, roughness: 0.7, flatShading: true })] }), u.jsxs("mesh", { castShadow: true, position: [0, -0.16, -0.66], children: [u.jsx("boxGeometry", { args: [0.56, 0.44, 0.56] }), u.jsx("meshStandardMaterial", { color: sr, roughness: 0.75, flatShading: true })] }), u.jsxs("mesh", { position: [0, -0.06, -0.96], children: [u.jsx("boxGeometry", { args: [0.26, 0.2, 0.12] }), u.jsx("meshStandardMaterial", { color: So, roughness: 0.35, flatShading: true })] }), [-0.26, 0.26].map((t) => u.jsxs("mesh", { position: [t, 0.12, -0.49], children: [u.jsx("boxGeometry", { args: [0.16, 0.18, 0.06] }), u.jsx("meshStandardMaterial", { color: "#1b1524", emissive: "#7fd4ff", emissiveIntensity: 0.55, roughness: 0.2 })] }, t)), [-0.34, 0.34].map((t, r) => u.jsx("group", { position: [t, 0.42, 0.06], ref: (i) => e3.current.ears[r] = i, children: u.jsxs("mesh", { castShadow: true, position: [0, 0.22, 0], rotation: [0, 0, t < 0 ? 0.16 : -0.16], children: [u.jsx("boxGeometry", { args: [0.28, 0.46, 0.18] }), u.jsx("meshStandardMaterial", { color: $t, roughness: 0.8, flatShading: true })] }) }, t)), u.jsxs("mesh", { position: [0, -0.34, 0.42], children: [u.jsx("boxGeometry", { args: [0.86, 0.2, 0.86] }), u.jsx("meshStandardMaterial", { color: "#c341ff", emissive: "#8f5bff", emissiveIntensity: 1.6 })] }), u.jsxs("mesh", { position: [0, -0.5, 0.02], children: [u.jsx("boxGeometry", { args: [0.22, 0.22, 0.08] }), u.jsx("meshStandardMaterial", { color: "#ffe9a8", emissive: "#ffe9a8", emissiveIntensity: 5 })] }), u.jsx("spotLight", { position: [0, -0.2, -0.6], "target-position": [0, -2.4, -13], angle: 0.72, penumbra: 0.75, intensity: 34, distance: 28, color: "#ffeec2" })] });
}
function Ro({ rig: e3 }) {
  return u.jsxs("group", { position: [0, 0.42, 1.6], ref: (t) => e3.current.tail = t, children: [u.jsxs("mesh", { castShadow: true, position: [0, 0.44, 0], children: [u.jsx("boxGeometry", { args: [0.24, 0.9, 0.24] }), u.jsx("meshStandardMaterial", { color: Ft, roughness: 0.8, flatShading: true })] }), u.jsxs("mesh", { castShadow: true, position: [0, 1, 0], children: [u.jsx("boxGeometry", { args: [0.28, 0.42, 0.28] }), u.jsx("meshStandardMaterial", { color: sr, roughness: 0.8, flatShading: true })] })] });
}
function bo() {
  return y.useRef(Bo());
}
const Vt = [0, 1.6, 11], Po = 46, Oo = 26, Uo = 26, Fo = 2.5, ls = 0.86, ot = new ge(), hr = new ge(), fr = new ge(), lt = new ge(), gr = new ms(), vr = new ge(), pr = new ge(), Tt = new ge(), Xt = new ge(), us = new ms(), Kt = new ge(), Lo = new ge(0, 5.6, 0), Go = new ge(0, 1.2, 0);
function Ho({ onMove: e3 }) {
  const t = y.useRef(null), r = y.useRef(null), i = bo(), a = y.useRef(false), o = y.useRef(new ge()), c = () => {
    const d = t.current;
    d && (d.setTranslation({ x: Vt[0], y: Vt[1], z: Vt[2] }, true), d.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true), d.setLinvel({ x: 0, y: 0, z: 0 }, true), d.setAngvel({ x: 0, y: 0, z: 0 }, true));
  };
  return st((d, h) => {
    var _a2;
    const g = t.current;
    if (!g) return;
    const w = Math.min(h, 1 / 30), m = ji(), A = g.rotation();
    gr.set(A.x, A.y, A.z, A.w), ot.set(0, 0, -1).applyQuaternion(gr), hr.set(1, 0, 0).applyQuaternion(gr);
    const I = g.linvel();
    fr.set(I.x, I.y, I.z);
    const b = fr.dot(ot), _ = fr.dot(hr), H = g.mass(), z = m.forward - m.backward;
    if (z !== 0 && Math.abs(b) < Uo) {
      const M = z > 0 ? Po : -Oo;
      lt.copy(ot).multiplyScalar(M * H * w), g.applyImpulse(lt, true);
    }
    const F = m.brake ? ls * 0.25 : ls;
    if (lt.copy(hr).multiplyScalar(-_ * F * H), g.applyImpulse(lt, true), z === 0 || m.brake) {
      const M = m.brake ? 3.2 : 0.9;
      lt.copy(ot).multiplyScalar(-b * M * H * w), g.applyImpulse(lt, true);
    }
    const U = m.left - m.right, Z = Math.min(Math.abs(b) / 6, 1), Y = z !== 0 ? Math.max(Z, 0.4) : Z, Q = b < -0.4 ? -1 : 1;
    g.setAngvel({ x: 0, y: U * Fo * Y * Q, z: 0 }, true);
    const ee = g.translation();
    if (Tt.set(ee.x, ee.y, ee.z), (m.reset || ee.y < -14) && c(), Et.x = Tt.x, Et.z = Tt.z, Et.heading = Math.atan2(ot.x, ot.z), Et.speed = Math.abs(b), Ar.setSpeed(Et.speed), e3 == null ? void 0 : e3(Tt), r.current) {
      const M = Fe.clamp(-U * Z * 0.12, -0.16, 0.16), L = Fe.clamp(-z * 0.05, -0.08, 0.08), W = 1 - Math.pow(5e-4, w), j = 1 - Math.pow(2e-3, w);
      r.current.rotation.z = Fe.lerp(r.current.rotation.z, M, W), r.current.rotation.x = Fe.lerp(r.current.rotation.x, L, j);
    }
    Mo(i.current, { speed: b, steer: U, throttle: z, delta: w, elapsed: d.clock.elapsedTime });
    const x = (_a2 = r.current) == null ? void 0 : _a2.parent;
    x ? (x.getWorldPosition(Xt), x.getWorldQuaternion(us), Kt.set(0, 0, -1).applyQuaternion(us)) : (Xt.copy(Tt), Kt.copy(ot)), vr.copy(Xt).addScaledVector(Kt, -11 - Z * 3).add(Lo), pr.copy(Xt).addScaledVector(Kt, 6).add(Go), a.current ? (d.camera.position.lerp(vr, 1 - Math.pow(22e-4, w)), o.current.lerp(pr, 1 - Math.pow(6e-4, w))) : (d.camera.position.copy(vr), o.current.copy(pr), a.current = true), d.camera.lookAt(o.current);
  }), u.jsxs(Gt, { ref: t, position: Vt, colliders: false, mass: 1, friction: 0.6, restitution: 0.1, linearDamping: 0.35, angularDamping: 4, enabledRotations: [false, true, false], ccd: true, name: "player", children: [u.jsx(Dr, { args: [0.78, 0.62, 1.72], density: 3.6 }), u.jsx("group", { ref: r, children: u.jsx(To, { rig: i }) })] });
}
function Wo() {
  const e3 = y.useRef(null), t = y.useCallback((r) => {
    let i = null;
    for (const a of mr) {
      const [o, c] = a.position;
      if (Math.hypot(r.x - o, r.z - c) < a.radius + 9) {
        i = a.id;
        break;
      }
    }
    i !== e3.current && (e3.current && Ar.leaveZone(e3.current), i && Ar.enterZone(i), e3.current = i);
  }, []);
  return u.jsxs(u.Fragment, { children: [u.jsx(No, {}), u.jsx("color", { attach: "background", args: [xt.fog] }), u.jsx("fogExp2", { attach: "fog", args: [xt.fog, 75e-4] }), u.jsx("hemisphereLight", { args: [xt.horizon, xt.ground, 1.55] }), u.jsx("ambientLight", { intensity: 0.5, color: "#6c5fbb" }), u.jsx("directionalLight", { position: [48, 70, 28], intensity: 1.9, color: xt.moon, castShadow: true, "shadow-mapSize": [2048, 2048], "shadow-camera-near": 1, "shadow-camera-far": 220, "shadow-camera-left": -90, "shadow-camera-right": 90, "shadow-camera-top": 90, "shadow-camera-bottom": -90, "shadow-bias": -6e-4 }), u.jsx(Un, { radius: 260, depth: 70, count: 4200, factor: 5, fade: true, speed: 0.6 }), u.jsx(bn, { preset: "night" }), u.jsx(zo, {}), u.jsxs(Wi, { timeStep: 1 / 60, interpolate: true, gravity: [0, -30, 0], children: [u.jsx(Vi, {}), mr.map((r) => u.jsx(xo, { zone: r }, r.id)), u.jsx(ko, {}), u.jsx(cs, { position: [-15, 4] }), u.jsx(cs, { position: [15, 4] }), u.jsx(Co, { position: [-54, 54] }), u.jsx(dr, { position: [0, -48], rotation: 0 }), u.jsx(dr, { position: [56, 0], rotation: Math.PI / 2 }), u.jsx(dr, { position: [0, 50], rotation: Math.PI }), u.jsx(Ho, { onMove: t })] }), u.jsx(Qo, {}), u.jsxs(vo, { multisampling: 0, children: [u.jsx(Ao, { intensity: 1.25, luminanceThreshold: 0.75, luminanceSmoothing: 0.28, mipmapBlur: true, radius: 0.72 }), u.jsx(wo, { offset: 0.28, darkness: 0.72 }), u.jsx(mo, {})] })] });
}
function No() {
  const e3 = _e((r) => r.camera), t = _e((r) => r.size);
  return y.useEffect(() => {
    const r = t.width / t.height, i = Fe.degToRad(78), a = 2 * Math.atan(Math.tan(i / 2) / Math.max(r, 0.3));
    e3.fov = Fe.clamp(Fe.radToDeg(a), 45, 82), e3.updateProjectionMatrix();
  }, [e3, t]), null;
}
function zo() {
  return u.jsxs("group", { position: [130, 82, -170], children: [u.jsxs("mesh", { children: [u.jsx("sphereGeometry", { args: [16, 24, 24] }), u.jsx("meshBasicMaterial", { color: "#e8e6ff", toneMapped: false })] }), u.jsxs("mesh", { children: [u.jsx("sphereGeometry", { args: [22, 20, 20] }), u.jsx("meshBasicMaterial", { color: "#8f7bff", transparent: true, opacity: 0.16, depthWrite: false })] })] });
}
function ko() {
  const e3 = y.useRef(null);
  return st(({ clock: t }) => {
    e3.current && (e3.current.position.y = 17 + Math.sin(t.elapsedTime * 0.7) * 0.6);
  }), u.jsxs("group", { children: [u.jsx("group", { ref: e3, position: [0, 17, -34], children: u.jsx(Rt, { size: 1.5, depth: 2.2, color: "#7fa4ff", emissive: "#2f5bff", emissiveIntensity: 1.5, wave: 0.35, children: Xi.short }) }), u.jsx(Rt, { position: [0, 8.4, -34], size: 0.44, depth: 0.4, color: "#e8e2ff", emissive: "#9d8bff", emissiveIntensity: 0.9, children: "DRIVE ANYWHERE" }), mr.map((t) => {
    const [r, i] = t.position, a = Math.hypot(r, i), o = r / a, c = i / a;
    return u.jsx(Rt, { position: [o * 19, 0.35, c * 19], rotation: [-Math.PI / 2, 0, Math.atan2(-o, -c)], size: 0.42, depth: 0.5, color: t.glow, emissive: t.color, emissiveIntensity: 2.2, children: t.sign }, t.id);
  })] });
}
function Qo() {
  const e3 = [[56, 80], [80, 56]];
  return u.jsx("group", { children: Ki.map((t, r) => u.jsxs("group", { position: [e3[r][0], 0, e3[r][1]], children: [u.jsxs("mesh", { position: [0, 9, 0], castShadow: true, children: [u.jsx("cylinderGeometry", { args: [0.8, 1.6, 18, 6] }), u.jsx("meshStandardMaterial", { color: "#38346d", roughness: 0.7, flatShading: true })] }), u.jsxs("mesh", { position: [0, 19.5, 0], children: [u.jsx("icosahedronGeometry", { args: [2.3, 0] }), u.jsx("meshStandardMaterial", { color: t.color, emissive: t.color, emissiveIntensity: 4, toneMapped: false })] }), u.jsx("pointLight", { position: [0, 19.5, 0], color: t.color, intensity: 90, distance: 55, decay: 2 }), u.jsx(Rt, { position: [0, 25, 0], rotation: [0, Math.atan2(-e3[r][0], -e3[r][1]), 0], size: 0.46, depth: 0.5, color: "#ffffff", emissive: t.color, emissiveIntensity: 1.8, children: t.name })] }, t.id)) });
}
export {
  Wo as default
};
