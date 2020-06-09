!(function(t, e) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
            ? define(e)
            : (t.eventDrops = e());
})(this, function() {
    'use strict';
    var we =
        'undefined' != typeof window
            ? window
            : 'undefined' != typeof global
                ? global
                : 'undefined' != typeof self ? self : {};
    function t(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports;
    }
    var C = t(function(t, e) {
            var o = 200,
                n = '__lodash_hash_undefined__',
                r = 9007199254740991,
                w = '[object Arguments]',
                a = '[object Array]',
                x = '[object Boolean]',
                A = '[object Date]',
                i = '[object Error]',
                O = '[object Function]',
                S = '[object GeneratorFunction]',
                k = '[object Map]',
                D = '[object Number]',
                M = '[object Object]',
                u = '[object Promise]',
                F = '[object RegExp]',
                E = '[object Set]',
                z = '[object String]',
                T = '[object Symbol]',
                c = '[object WeakMap]',
                I = '[object ArrayBuffer]',
                P = '[object DataView]',
                $ = '[object Float32Array]',
                B = '[object Float64Array]',
                L = '[object Int8Array]',
                C = '[object Int16Array]',
                U = '[object Int32Array]',
                W = '[object Uint8Array]',
                J = '[object Uint8ClampedArray]',
                R = '[object Uint16Array]',
                Z = '[object Uint32Array]',
                N = /\w*$/,
                l = /^\[object .+?Constructor\]$/,
                f = /^(?:0|[1-9]\d*)$/,
                s = {};
            (s[$] = s[B] = s[L] = s[C] = s[U] = s[W] = s[J] = s[R] = s[Z] = !0),
                (s[w] = s[a] = s[I] = s[x] = s[P] = s[A] = s[i] = s[O] = s[
                    k
                ] = s[D] = s[M] = s[F] = s[E] = s[z] = s[c] = !1);
            var Y = {};
            (Y[w] = Y[a] = Y[I] = Y[P] = Y[x] = Y[A] = Y[$] = Y[B] = Y[L] = Y[
                C
            ] = Y[U] = Y[k] = Y[D] = Y[M] = Y[F] = Y[E] = Y[z] = Y[T] = Y[
                W
            ] = Y[J] = Y[R] = Y[Z] = !0),
                (Y[i] = Y[O] = Y[c] = !1);
            var d = 'object' == typeof we && we && we.Object === Object && we,
                p =
                    'object' == typeof self &&
                    self &&
                    self.Object === Object &&
                    self,
                h = d || p || Function('return this')(),
                v = e && !e.nodeType && e,
                y = v && t && !t.nodeType && t,
                _ = y && y.exports === v,
                b = _ && d.process,
                g = (function() {
                    try {
                        return b && b.binding('util');
                    } catch (t) {}
                })(),
                m = g && g.isTypedArray;
            function G(t, e) {
                return t.set(e[0], e[1]), t;
            }
            function V(t, e) {
                return t.add(e), t;
            }
            function j(t, e, r) {
                switch (r.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, r[0]);
                    case 2:
                        return t.call(e, r[0], r[1]);
                    case 3:
                        return t.call(e, r[0], r[1], r[2]);
                }
                return t.apply(e, r);
            }
            function X(t, e) {
                for (
                    var r = -1, n = t ? t.length : 0;
                    ++r < n && !1 !== e(t[r], r, t);

                );
                return t;
            }
            function H(t, e, r, n) {
                var o = -1,
                    a = t ? t.length : 0;
                for (n && a && (r = t[++o]); ++o < a; ) r = e(r, t[o], o, t);
                return r;
            }
            function q(t) {
                var e = !1;
                if (null != t && 'function' != typeof t.toString)
                    try {
                        e = !!(t + '');
                    } catch (t) {}
                return e;
            }
            function K(t) {
                var r = -1,
                    n = Array(t.size);
                return (
                    t.forEach(function(t, e) {
                        n[++r] = [e, t];
                    }),
                    n
                );
            }
            function Q(e, r) {
                return function(t) {
                    return e(r(t));
                };
            }
            function tt(t) {
                var e = -1,
                    r = Array(t.size);
                return (
                    t.forEach(function(t) {
                        r[++e] = t;
                    }),
                    r
                );
            }
            var et,
                rt = Array.prototype,
                nt = Function.prototype,
                ot = Object.prototype,
                at = h['__core-js_shared__'],
                it = (et = /[^.]+$/.exec(
                    (at && at.keys && at.keys.IE_PROTO) || ''
                ))
                    ? 'Symbol(src)_1.' + et
                    : '',
                ut = nt.toString,
                ct = ot.hasOwnProperty,
                lt = ut.call(Object),
                ft = ot.toString,
                st = RegExp(
                    '^' +
                        ut
                            .call(ct)
                            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                            .replace(
                                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                                '$1.*?'
                            ) +
                        '$'
                ),
                dt = _ ? h.Buffer : void 0,
                pt = h.Symbol,
                ht = h.Uint8Array,
                vt = Q(Object.getPrototypeOf, Object),
                yt = Object.create,
                _t = ot.propertyIsEnumerable,
                bt = rt.splice,
                gt = Object.getOwnPropertySymbols,
                mt = dt ? dt.isBuffer : void 0,
                jt = Q(Object.keys, Object),
                wt = Math.max,
                xt = Qt(h, 'DataView'),
                At = Qt(h, 'Map'),
                Ot = Qt(h, 'Promise'),
                St = Qt(h, 'Set'),
                kt = Qt(h, 'WeakMap'),
                Dt = Qt(Object, 'create'),
                Mt = ae(xt),
                Ft = ae(At),
                Et = ae(Ot),
                zt = ae(St),
                Tt = ae(kt),
                It = pt ? pt.prototype : void 0,
                Pt = It ? It.valueOf : void 0;
            function $t(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function Bt(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function Lt(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function Ct(t) {
                this.__data__ = new Bt(t);
            }
            function Ut(t, e) {
                var r =
                        ce(t) || ue(t)
                            ? (function(t, e) {
                                  for (var r = -1, n = Array(t); ++r < t; )
                                      n[r] = e(r);
                                  return n;
                              })(t.length, String)
                            : [],
                    n = r.length,
                    o = !!n;
                for (var a in t)
                    (!e && !ct.call(t, a)) ||
                        (o && ('length' == a || re(a, n))) ||
                        r.push(a);
                return r;
            }
            function Wt(t, e, r) {
                ((void 0 === r || ie(t[e], r)) &&
                    ('number' != typeof e || void 0 !== r || e in t)) ||
                    (t[e] = r);
            }
            function Jt(t, e, r) {
                var n = t[e];
                (ct.call(t, e) && ie(n, r) && (void 0 !== r || e in t)) ||
                    (t[e] = r);
            }
            function Rt(t, e) {
                for (var r = t.length; r--; ) if (ie(t[r][0], e)) return r;
                return -1;
            }
            function Zt(r, n, o, a, t, e, i) {
                var u;
                if ((a && (u = e ? a(r, t, e, i) : a(r)), void 0 !== u))
                    return u;
                if (!he(r)) return r;
                var c,
                    l,
                    f,
                    s,
                    d,
                    p,
                    h = ce(r);
                if (h) {
                    if (
                        ((u = (function(t) {
                            var e = t.length,
                                r = t.constructor(e);
                            e &&
                                'string' == typeof t[0] &&
                                ct.call(t, 'index') &&
                                ((r.index = t.index), (r.input = t.input));
                            return r;
                        })(r)),
                        !n)
                    )
                        return Ht(r, u);
                } else {
                    var v = ee(r),
                        y = v == O || v == S;
                    if (se(r))
                        return (function(t, e) {
                            if (e) return t.slice();
                            var r = new t.constructor(t.length);
                            return t.copy(r), r;
                        })(r, n);
                    if (v == M || v == w || (y && !e)) {
                        if (q(r)) return e ? r : {};
                        if (
                            ((u =
                                'function' !=
                                    typeof (d = y ? {} : r).constructor || ne(d)
                                    ? {}
                                    : he((p = vt(d))) ? yt(p) : {}),
                            !n)
                        )
                            return (
                                (s = c = r),
                                (l = (f = u) && qt(s, ge(s), f)),
                                qt(c, te(c), l)
                            );
                    } else {
                        if (!Y[v]) return e ? r : {};
                        u = (function(t, e, r, n) {
                            var o = t.constructor;
                            switch (e) {
                                case I:
                                    return Xt(t);
                                case x:
                                case A:
                                    return new o(+t);
                                case P:
                                    return (
                                        (h = t),
                                        (v = n ? Xt(h.buffer) : h.buffer),
                                        new h.constructor(
                                            v,
                                            h.byteOffset,
                                            h.byteLength
                                        )
                                    );
                                case $:
                                case B:
                                case L:
                                case C:
                                case U:
                                case W:
                                case J:
                                case R:
                                case Z:
                                    return (
                                        (d = t),
                                        (p = n ? Xt(d.buffer) : d.buffer),
                                        new d.constructor(
                                            p,
                                            d.byteOffset,
                                            d.length
                                        )
                                    );
                                case k:
                                    return (
                                        (f = t),
                                        (s = r),
                                        H(
                                            n ? s(K(f), !0) : K(f),
                                            G,
                                            new f.constructor()
                                        )
                                    );
                                case D:
                                case z:
                                    return new o(t);
                                case F:
                                    return (
                                        ((l = new (c = t).constructor(
                                            c.source,
                                            N.exec(c)
                                        )).lastIndex =
                                            c.lastIndex),
                                        l
                                    );
                                case E:
                                    return (
                                        (i = t),
                                        (u = r),
                                        H(
                                            n ? u(tt(i), !0) : tt(i),
                                            V,
                                            new i.constructor()
                                        )
                                    );
                                case T:
                                    return (
                                        (a = t), Pt ? Object(Pt.call(a)) : {}
                                    );
                            }
                            var a;
                            var i, u;
                            var c, l;
                            var f, s;
                            var d, p;
                            var h, v;
                        })(r, v, Zt, n);
                    }
                }
                i || (i = new Ct());
                var _,
                    b,
                    g,
                    m = i.get(r);
                if (m) return m;
                if ((i.set(r, u), !h))
                    var j = o
                        ? ((b = te),
                          (g = ge((_ = r))),
                          ce(_)
                              ? g
                              : (function(t, e) {
                                    for (
                                        var r = -1, n = e.length, o = t.length;
                                        ++r < n;

                                    )
                                        t[o + r] = e[r];
                                    return t;
                                })(g, b(_)))
                        : ge(r);
                return (
                    X(j || r, function(t, e) {
                        j && (t = r[(e = t)]),
                            Jt(u, e, Zt(t, n, o, a, e, r, i));
                    }),
                    u
                );
            }
            function Nt(t) {
                return (
                    !(!he(t) || ((e = t), it && it in e)) &&
                    (de(t) || q(t) ? st : l).test(ae(t))
                );
                var e;
            }
            function Yt(t) {
                if (!he(t))
                    return (function(t) {
                        var e = [];
                        if (null != t) for (var r in Object(t)) e.push(r);
                        return e;
                    })(t);
                var e = ne(t),
                    r = [];
                for (var n in t)
                    ('constructor' != n || (!e && ct.call(t, n))) && r.push(n);
                return r;
            }
            function Gt(n, o, a, i, u) {
                if (n !== o) {
                    if (!ce(o) && !_e(o)) var c = Yt(o);
                    X(c || o, function(t, e) {
                        if ((c && (t = o[(e = t)]), he(t)))
                            u || (u = new Ct()),
                                (function(t, e, r, n, o, a, i) {
                                    var u = t[r],
                                        c = e[r],
                                        l = i.get(c);
                                    if (l) return Wt(t, r, l);
                                    var f = a
                                            ? a(u, c, r + '', t, e, i)
                                            : void 0,
                                        s = void 0 === f;
                                    s &&
                                        (ce((f = c)) || _e(c)
                                            ? (f = ce(u)
                                                  ? u
                                                  : fe(u)
                                                      ? Ht(u)
                                                      : Zt(c, !(s = !1)))
                                            : (function(t) {
                                                  if (
                                                      !ve(t) ||
                                                      ft.call(t) != M ||
                                                      q(t)
                                                  )
                                                      return !1;
                                                  var e = vt(t);
                                                  if (null === e) return !0;
                                                  var r =
                                                      ct.call(
                                                          e,
                                                          'constructor'
                                                      ) && e.constructor;
                                                  return (
                                                      'function' == typeof r &&
                                                      r instanceof r &&
                                                      ut.call(r) == lt
                                                  );
                                              })(c) || ue(c)
                                                ? (f = ue(u)
                                                      ? qt(
                                                            (d = u),
                                                            le((p = d))
                                                                ? Ut(p, !0)
                                                                : Yt(p)
                                                        )
                                                      : !he(u) || (n && de(u))
                                                          ? Zt(c, !(s = !1))
                                                          : u)
                                                : (s = !1));
                                    var d, p;
                                    s &&
                                        (i.set(c, f),
                                        o(f, c, n, a, i),
                                        i.delete(c));
                                    Wt(t, r, f);
                                })(n, o, e, a, Gt, i, u);
                        else {
                            var r = i ? i(n[e], t, e + '', n, o, u) : void 0;
                            void 0 === r && (r = t), Wt(n, e, r);
                        }
                    });
                }
            }
            function Vt(a, i) {
                return (
                    (i = wt(void 0 === i ? a.length - 1 : i, 0)),
                    function() {
                        for (
                            var t = arguments,
                                e = -1,
                                r = wt(t.length - i, 0),
                                n = Array(r);
                            ++e < r;

                        )
                            n[e] = t[i + e];
                        e = -1;
                        for (var o = Array(i + 1); ++e < i; ) o[e] = t[e];
                        return (o[i] = n), j(a, this, o);
                    }
                );
            }
            function Xt(t) {
                var e = new t.constructor(t.byteLength);
                return new ht(e).set(new ht(t)), e;
            }
            function Ht(t, e) {
                var r = -1,
                    n = t.length;
                for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
                return e;
            }
            function qt(t, e, r, n) {
                r || (r = {});
                for (var o = -1, a = e.length; ++o < a; ) {
                    var i = e[o],
                        u = n ? n(r[i], t[i], i, r, t) : void 0;
                    Jt(r, i, void 0 === u ? t[i] : u);
                }
                return r;
            }
            function Kt(t, e) {
                var r,
                    n,
                    o = t.__data__;
                return ('string' == (n = typeof (r = e)) ||
                'number' == n ||
                'symbol' == n ||
                'boolean' == n
                  ? '__proto__' !== r
                  : null === r)
                    ? o['string' == typeof e ? 'string' : 'hash']
                    : o.map;
            }
            function Qt(t, e) {
                var r,
                    n,
                    o = ((n = e), null == (r = t) ? void 0 : r[n]);
                return Nt(o) ? o : void 0;
            }
            ($t.prototype.clear = function() {
                this.__data__ = Dt ? Dt(null) : {};
            }),
                ($t.prototype.delete = function(t) {
                    return this.has(t) && delete this.__data__[t];
                }),
                ($t.prototype.get = function(t) {
                    var e = this.__data__;
                    if (Dt) {
                        var r = e[t];
                        return r === n ? void 0 : r;
                    }
                    return ct.call(e, t) ? e[t] : void 0;
                }),
                ($t.prototype.has = function(t) {
                    var e = this.__data__;
                    return Dt ? void 0 !== e[t] : ct.call(e, t);
                }),
                ($t.prototype.set = function(t, e) {
                    return (
                        (this.__data__[t] = Dt && void 0 === e ? n : e), this
                    );
                }),
                (Bt.prototype.clear = function() {
                    this.__data__ = [];
                }),
                (Bt.prototype.delete = function(t) {
                    var e = this.__data__,
                        r = Rt(e, t);
                    return !(
                        r < 0 ||
                        (r == e.length - 1 ? e.pop() : bt.call(e, r, 1), 0)
                    );
                }),
                (Bt.prototype.get = function(t) {
                    var e = this.__data__,
                        r = Rt(e, t);
                    return r < 0 ? void 0 : e[r][1];
                }),
                (Bt.prototype.has = function(t) {
                    return -1 < Rt(this.__data__, t);
                }),
                (Bt.prototype.set = function(t, e) {
                    var r = this.__data__,
                        n = Rt(r, t);
                    return n < 0 ? r.push([t, e]) : (r[n][1] = e), this;
                }),
                (Lt.prototype.clear = function() {
                    this.__data__ = {
                        hash: new $t(),
                        map: new (At || Bt)(),
                        string: new $t(),
                    };
                }),
                (Lt.prototype.delete = function(t) {
                    return Kt(this, t).delete(t);
                }),
                (Lt.prototype.get = function(t) {
                    return Kt(this, t).get(t);
                }),
                (Lt.prototype.has = function(t) {
                    return Kt(this, t).has(t);
                }),
                (Lt.prototype.set = function(t, e) {
                    return Kt(this, t).set(t, e), this;
                }),
                (Ct.prototype.clear = function() {
                    this.__data__ = new Bt();
                }),
                (Ct.prototype.delete = function(t) {
                    return this.__data__.delete(t);
                }),
                (Ct.prototype.get = function(t) {
                    return this.__data__.get(t);
                }),
                (Ct.prototype.has = function(t) {
                    return this.__data__.has(t);
                }),
                (Ct.prototype.set = function(t, e) {
                    var r = this.__data__;
                    if (r instanceof Bt) {
                        var n = r.__data__;
                        if (!At || n.length < o - 1)
                            return n.push([t, e]), this;
                        r = this.__data__ = new Lt(n);
                    }
                    return r.set(t, e), this;
                });
            var te = gt
                    ? Q(gt, Object)
                    : function() {
                          return [];
                      },
                ee = function(t) {
                    return ft.call(t);
                };
            function re(t, e) {
                return (
                    !!(e = null == e ? r : e) &&
                    ('number' == typeof t || f.test(t)) &&
                    -1 < t &&
                    t % 1 == 0 &&
                    t < e
                );
            }
            function ne(t) {
                var e = t && t.constructor;
                return t === (('function' == typeof e && e.prototype) || ot);
            }
            function oe(t, e, r, n, o, a) {
                return (
                    he(t) &&
                        he(e) &&
                        (a.set(e, t), Gt(t, e, void 0, oe, a), a.delete(e)),
                    t
                );
            }
            function ae(t) {
                if (null != t) {
                    try {
                        return ut.call(t);
                    } catch (t) {}
                    try {
                        return t + '';
                    } catch (t) {}
                }
                return '';
            }
            function ie(t, e) {
                return t === e || (t != t && e != e);
            }
            function ue(t) {
                return (
                    fe(t) &&
                    ct.call(t, 'callee') &&
                    (!_t.call(t, 'callee') || ft.call(t) == w)
                );
            }
            ((xt && ee(new xt(new ArrayBuffer(1))) != P) ||
                (At && ee(new At()) != k) ||
                (Ot && ee(Ot.resolve()) != u) ||
                (St && ee(new St()) != E) ||
                (kt && ee(new kt()) != c)) &&
                (ee = function(t) {
                    var e = ft.call(t),
                        r = e == M ? t.constructor : void 0,
                        n = r ? ae(r) : void 0;
                    if (n)
                        switch (n) {
                            case Mt:
                                return P;
                            case Ft:
                                return k;
                            case Et:
                                return u;
                            case zt:
                                return E;
                            case Tt:
                                return c;
                        }
                    return e;
                });
            var ce = Array.isArray;
            function le(t) {
                return null != t && pe(t.length) && !de(t);
            }
            function fe(t) {
                return ve(t) && le(t);
            }
            var se =
                mt ||
                function() {
                    return !1;
                };
            function de(t) {
                var e = he(t) ? ft.call(t) : '';
                return e == O || e == S;
            }
            function pe(t) {
                return 'number' == typeof t && -1 < t && t % 1 == 0 && t <= r;
            }
            function he(t) {
                var e = typeof t;
                return !!t && ('object' == e || 'function' == e);
            }
            function ve(t) {
                return !!t && 'object' == typeof t;
            }
            var ye,
                _e = m
                    ? ((ye = m),
                      function(t) {
                          return ye(t);
                      })
                    : function(t) {
                          return ve(t) && pe(t.length) && !!s[ft.call(t)];
                      };
            var be = Vt(function(t) {
                return t.push(void 0, oe), j(je, void 0, t);
            });
            function ge(t) {
                return le(t)
                    ? Ut(t)
                    : (function(t) {
                          if (!ne(t)) return jt(t);
                          var e = [];
                          for (var r in Object(t))
                              ct.call(t, r) && 'constructor' != r && e.push(r);
                          return e;
                      })(t);
            }
            var me,
                je = ((me = function(t, e, r, n) {
                    Gt(t, e, r, n);
                }),
                Vt(function(t, e) {
                    var r = -1,
                        n = e.length,
                        o = 1 < n ? e[n - 1] : void 0,
                        a = 2 < n ? e[2] : void 0;
                    for (
                        o =
                            3 < me.length && 'function' == typeof o
                                ? (n--, o)
                                : void 0,
                            a &&
                                (function(t, e, r) {
                                    if (!he(r)) return !1;
                                    var n = typeof e;
                                    return (
                                        !!('number' == n
                                            ? le(r) && re(e, r.length)
                                            : 'string' == n && (e in r)) &&
                                        ie(r[e], t)
                                    );
                                })(e[0], e[1], a) &&
                                ((o = n < 3 ? void 0 : o), (n = 1)),
                            t = Object(t);
                        ++r < n;

                    ) {
                        var i = e[r];
                        i && me(t, i, r, o);
                    }
                    return t;
                }));
            t.exports = be;
        }),
        U = {
            dateTime: '%x, %X',
            date: '%-m/%-d/%Y',
            time: '%-I:%M:%S %p',
            periods: ['AM', 'PM'],
            days: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ],
            shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
            shortMonths: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
        },
        m = (t(function(t, e) {
            var p = 200,
                r = 'Expected a function',
                n = '__lodash_hash_undefined__',
                _ = 1,
                m = 2,
                a = 1 / 0,
                o = 9007199254740991,
                b = '[object Arguments]',
                g = '[object Array]',
                j = '[object Boolean]',
                w = '[object Date]',
                x = '[object Error]',
                i = '[object Function]',
                u = '[object GeneratorFunction]',
                A = '[object Map]',
                O = '[object Number]',
                S = '[object Object]',
                c = '[object Promise]',
                k = '[object RegExp]',
                D = '[object Set]',
                M = '[object String]',
                F = '[object Symbol]',
                l = '[object WeakMap]',
                E = '[object ArrayBuffer]',
                z = '[object DataView]',
                f = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                s = /^\w*$/,
                d = /^\./,
                h = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                v = /\\(\\)?/g,
                y = /^\[object .+?Constructor\]$/,
                T = /^(?:0|[1-9]\d*)$/,
                I = {};
            (I['[object Float32Array]'] = I['[object Float64Array]'] = I[
                '[object Int8Array]'
            ] = I['[object Int16Array]'] = I['[object Int32Array]'] = I[
                '[object Uint8Array]'
            ] = I['[object Uint8ClampedArray]'] = I['[object Uint16Array]'] = I[
                '[object Uint32Array]'
            ] = !0),
                (I[b] = I[g] = I[E] = I[j] = I[z] = I[w] = I[x] = I[i] = I[
                    A
                ] = I[O] = I[S] = I[k] = I[D] = I[M] = I[l] = !1);
            var P = 'object' == typeof we && we && we.Object === Object && we,
                $ =
                    'object' == typeof self &&
                    self &&
                    self.Object === Object &&
                    self,
                B = P || $ || Function('return this')(),
                L = e && !e.nodeType && e,
                C = L && t && !t.nodeType && t,
                U = C && C.exports === L && P.process,
                W = (function() {
                    try {
                        return U && U.binding('util');
                    } catch (t) {}
                })(),
                J = W && W.isTypedArray;
            function R(t, e) {
                return (
                    !!(t ? t.length : 0) &&
                    -1 <
                        (function(t, e, r) {
                            if (e != e)
                                return (function(t, e, r, n) {
                                    var o = t.length,
                                        a = r + (n ? 1 : -1);
                                    for (; n ? a-- : ++a < o; )
                                        if (e(t[a], a, t)) return a;
                                    return -1;
                                })(t, Y, r);
                            var n = r - 1,
                                o = t.length;
                            for (; ++n < o; ) if (t[n] === e) return n;
                            return -1;
                        })(t, e, 0)
                );
            }
            function Z(t, e, r) {
                for (var n = -1, o = t ? t.length : 0; ++n < o; )
                    if (r(e, t[n])) return !0;
                return !1;
            }
            function N(t, e) {
                for (var r = -1, n = t ? t.length : 0; ++r < n; )
                    if (e(t[r], r, t)) return !0;
                return !1;
            }
            function Y(t) {
                return t != t;
            }
            function G(t, e) {
                return t.has(e);
            }
            function V(t) {
                var e = !1;
                if (null != t && 'function' != typeof t.toString)
                    try {
                        e = !!(t + '');
                    } catch (t) {}
                return e;
            }
            function X(t) {
                var r = -1,
                    n = Array(t.size);
                return (
                    t.forEach(function(t, e) {
                        n[++r] = [e, t];
                    }),
                    n
                );
            }
            function H(t) {
                var e = -1,
                    r = Array(t.size);
                return (
                    t.forEach(function(t) {
                        r[++e] = t;
                    }),
                    r
                );
            }
            var q,
                K,
                Q,
                tt = Array.prototype,
                et = Function.prototype,
                rt = Object.prototype,
                nt = B['__core-js_shared__'],
                ot = (q = /[^.]+$/.exec(
                    (nt && nt.keys && nt.keys.IE_PROTO) || ''
                ))
                    ? 'Symbol(src)_1.' + q
                    : '',
                at = et.toString,
                it = rt.hasOwnProperty,
                ut = rt.toString,
                ct = RegExp(
                    '^' +
                        at
                            .call(it)
                            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                            .replace(
                                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                                '$1.*?'
                            ) +
                        '$'
                ),
                lt = B.Symbol,
                ft = B.Uint8Array,
                st = rt.propertyIsEnumerable,
                dt = tt.splice,
                pt = ((K = Object.keys),
                (Q = Object),
                function(t) {
                    return K(Q(t));
                }),
                ht = Nt(B, 'DataView'),
                vt = Nt(B, 'Map'),
                yt = Nt(B, 'Promise'),
                _t = Nt(B, 'Set'),
                bt = Nt(B, 'WeakMap'),
                gt = Nt(Object, 'create'),
                mt = Qt(ht),
                jt = Qt(vt),
                wt = Qt(yt),
                xt = Qt(_t),
                At = Qt(bt),
                Ot = lt ? lt.prototype : void 0,
                St = Ot ? Ot.valueOf : void 0,
                kt = Ot ? Ot.toString : void 0;
            function Dt(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function Mt(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function Ft(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function Et(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.__data__ = new Ft(); ++e < r; ) this.add(t[e]);
            }
            function zt(t) {
                this.__data__ = new Mt(t);
            }
            function Tt(t, e) {
                var r =
                        ne(t) || re(t)
                            ? (function(t, e) {
                                  for (var r = -1, n = Array(t); ++r < t; )
                                      n[r] = e(r);
                                  return n;
                              })(t.length, String)
                            : [],
                    n = r.length,
                    o = !!n;
                for (var a in t)
                    (!e && !it.call(t, a)) ||
                        (o && ('length' == a || Gt(a, n))) ||
                        r.push(a);
                return r;
            }
            function It(t, e) {
                for (var r = t.length; r--; ) if (ee(t[r][0], e)) return r;
                return -1;
            }
            function Pt(t, e) {
                for (
                    var r = 0, n = (e = Vt(e, t) ? [e] : Wt(e)).length;
                    null != t && r < n;

                )
                    t = t[Kt(e[r++])];
                return r && r == n ? t : void 0;
            }
            function $t(t, e) {
                return null != t && e in Object(t);
            }
            function Bt(t, e, r, n, o) {
                return (
                    t === e ||
                    (null == t || null == e || (!ue(t) && !ce(e))
                        ? t != t && e != e
                        : (function(t, e, r, n, o, a) {
                              var i = ne(t),
                                  u = ne(e),
                                  c = g,
                                  l = g;
                              i || (c = (c = Yt(t)) == b ? S : c);
                              u || (l = (l = Yt(e)) == b ? S : l);
                              var f = c == S && !V(t),
                                  s = l == S && !V(e),
                                  d = c == l;
                              if (d && !f)
                                  return (
                                      a || (a = new zt()),
                                      i || se(t)
                                          ? Rt(t, e, r, n, o, a)
                                          : (function(t, e, r, n, o, a, i) {
                                                switch (r) {
                                                    case z:
                                                        if (
                                                            t.byteLength !=
                                                                e.byteLength ||
                                                            t.byteOffset !=
                                                                e.byteOffset
                                                        )
                                                            return !1;
                                                        (t = t.buffer),
                                                            (e = e.buffer);
                                                    case E:
                                                        return !(
                                                            t.byteLength !=
                                                                e.byteLength ||
                                                            !n(
                                                                new ft(t),
                                                                new ft(e)
                                                            )
                                                        );
                                                    case j:
                                                    case w:
                                                    case O:
                                                        return ee(+t, +e);
                                                    case x:
                                                        return (
                                                            t.name == e.name &&
                                                            t.message ==
                                                                e.message
                                                        );
                                                    case k:
                                                    case M:
                                                        return t == e + '';
                                                    case A:
                                                        var u = X;
                                                    case D:
                                                        var c = a & m;
                                                        if (
                                                            (u || (u = H),
                                                            t.size != e.size &&
                                                                !c)
                                                        )
                                                            return !1;
                                                        var l = i.get(t);
                                                        if (l) return l == e;
                                                        (a |= _), i.set(t, e);
                                                        var f = Rt(
                                                            u(t),
                                                            u(e),
                                                            n,
                                                            o,
                                                            a,
                                                            i
                                                        );
                                                        return i.delete(t), f;
                                                    case F:
                                                        if (St)
                                                            return (
                                                                St.call(t) ==
                                                                St.call(e)
                                                            );
                                                }
                                                return !1;
                                            })(t, e, c, r, n, o, a)
                                  );
                              if (!(o & m)) {
                                  var p = f && it.call(t, '__wrapped__'),
                                      h = s && it.call(e, '__wrapped__');
                                  if (p || h) {
                                      var v = p ? t.value() : t,
                                          y = h ? e.value() : e;
                                      return (
                                          a || (a = new zt()), r(v, y, n, o, a)
                                      );
                                  }
                              }
                              if (!d) return !1;
                              return (
                                  a || (a = new zt()),
                                  (function(t, e, r, n, o, a) {
                                      var i = o & m,
                                          u = de(t),
                                          c = u.length,
                                          l = de(e).length;
                                      if (c != l && !i) return !1;
                                      for (var f = c; f--; ) {
                                          var s = u[f];
                                          if (!(i ? s in e : it.call(e, s)))
                                              return !1;
                                      }
                                      var d = a.get(t);
                                      if (d && a.get(e)) return d == e;
                                      var p = !0;
                                      a.set(t, e), a.set(e, t);
                                      for (var h = i; ++f < c; ) {
                                          s = u[f];
                                          var v = t[s],
                                              y = e[s];
                                          if (n)
                                              var _ = i
                                                  ? n(y, v, s, e, t, a)
                                                  : n(v, y, s, t, e, a);
                                          if (
                                              !(void 0 === _
                                                  ? v === y || r(v, y, n, o, a)
                                                  : _)
                                          ) {
                                              p = !1;
                                              break;
                                          }
                                          h || (h = 'constructor' == s);
                                      }
                                      if (p && !h) {
                                          var b = t.constructor,
                                              g = e.constructor;
                                          b != g &&
                                              'constructor' in t &&
                                              'constructor' in e &&
                                              !(
                                                  'function' == typeof b &&
                                                  b instanceof b &&
                                                  'function' == typeof g &&
                                                  g instanceof g
                                              ) &&
                                              (p = !1);
                                      }
                                      return a.delete(t), a.delete(e), p;
                                  })(t, e, r, n, o, a)
                              );
                          })(t, e, Bt, r, n, o))
                );
            }
            function Lt(t) {
                return (
                    !(!ue(t) || ((e = t), ot && ot in e)) &&
                    (ae(t) || V(t) ? ct : y).test(Qt(t))
                );
                var e;
            }
            function Ct(t) {
                return 'function' == typeof t
                    ? t
                    : null == t
                        ? pe
                        : 'object' == typeof t
                            ? ne(t)
                                ? (function(c, l) {
                                      if (Vt(c) && Xt(l)) return Ht(Kt(c), l);
                                      return function(t) {
                                          var e,
                                              r,
                                              n,
                                              o,
                                              a,
                                              i,
                                              u = ((r = c),
                                              void 0 ===
                                              (o =
                                                  null == (e = t)
                                                      ? void 0
                                                      : Pt(e, r))
                                                  ? n
                                                  : o);
                                          return void 0 === u && u === l
                                              ? ((i = c),
                                                null != (a = t) &&
                                                    (function(t, e, r) {
                                                        e = Vt(e, t)
                                                            ? [e]
                                                            : Wt(e);
                                                        for (
                                                            var n,
                                                                o = -1,
                                                                a = e.length;
                                                            ++o < a;

                                                        ) {
                                                            var i = Kt(e[o]);
                                                            if (
                                                                !(n =
                                                                    null != t &&
                                                                    r(t, i))
                                                            )
                                                                break;
                                                            t = t[i];
                                                        }
                                                        return (
                                                            n ||
                                                            (!!(a = t
                                                                ? t.length
                                                                : 0) &&
                                                                ie(a) &&
                                                                Gt(i, a) &&
                                                                (ne(t) ||
                                                                    re(t)))
                                                        );
                                                    })(a, i, $t))
                                              : Bt(l, u, void 0, _ | m);
                                      };
                                  })(t[0], t[1])
                                : (function(e) {
                                      var r = (function(t) {
                                          var e = de(t),
                                              r = e.length;
                                          for (; r--; ) {
                                              var n = e[r],
                                                  o = t[n];
                                              e[r] = [n, o, Xt(o)];
                                          }
                                          return e;
                                      })(e);
                                      if (1 == r.length && r[0][2])
                                          return Ht(r[0][0], r[0][1]);
                                      return function(t) {
                                          return (
                                              t === e ||
                                              (function(t, e, r, n) {
                                                  var o = r.length,
                                                      a = o,
                                                      i = !n;
                                                  if (null == t) return !a;
                                                  for (t = Object(t); o--; ) {
                                                      var u = r[o];
                                                      if (
                                                          i && u[2]
                                                              ? u[1] !== t[u[0]]
                                                              : !(u[0] in t)
                                                      )
                                                          return !1;
                                                  }
                                                  for (; ++o < a; ) {
                                                      var c = (u = r[o])[0],
                                                          l = t[c],
                                                          f = u[1];
                                                      if (i && u[2]) {
                                                          if (
                                                              void 0 === l &&
                                                              !(c in t)
                                                          )
                                                              return !1;
                                                      } else {
                                                          var s = new zt();
                                                          if (n)
                                                              var d = n(
                                                                  l,
                                                                  f,
                                                                  c,
                                                                  t,
                                                                  e,
                                                                  s
                                                              );
                                                          if (
                                                              !(void 0 === d
                                                                  ? Bt(
                                                                        f,
                                                                        l,
                                                                        n,
                                                                        _ | m,
                                                                        s
                                                                    )
                                                                  : d)
                                                          )
                                                              return !1;
                                                      }
                                                  }
                                                  return !0;
                                              })(t, e, r)
                                          );
                                      };
                                  })(t)
                            : Vt((e = t))
                                ? ((n = Kt(e)),
                                  function(t) {
                                      return null == t ? void 0 : t[n];
                                  })
                                : ((r = e),
                                  function(t) {
                                      return Pt(t, r);
                                  });
                var e, r, n;
            }
            function Ut(t) {
                if (
                    ((r = (e = t) && e.constructor),
                    (n = ('function' == typeof r && r.prototype) || rt),
                    e !== n)
                )
                    return pt(t);
                var e,
                    r,
                    n,
                    o = [];
                for (var a in Object(t))
                    it.call(t, a) && 'constructor' != a && o.push(a);
                return o;
            }
            function Wt(t) {
                return ne(t) ? t : qt(t);
            }
            (Dt.prototype.clear = function() {
                this.__data__ = gt ? gt(null) : {};
            }),
                (Dt.prototype.delete = function(t) {
                    return this.has(t) && delete this.__data__[t];
                }),
                (Dt.prototype.get = function(t) {
                    var e = this.__data__;
                    if (gt) {
                        var r = e[t];
                        return r === n ? void 0 : r;
                    }
                    return it.call(e, t) ? e[t] : void 0;
                }),
                (Dt.prototype.has = function(t) {
                    var e = this.__data__;
                    return gt ? void 0 !== e[t] : it.call(e, t);
                }),
                (Dt.prototype.set = function(t, e) {
                    return (
                        (this.__data__[t] = gt && void 0 === e ? n : e), this
                    );
                }),
                (Mt.prototype.clear = function() {
                    this.__data__ = [];
                }),
                (Mt.prototype.delete = function(t) {
                    var e = this.__data__,
                        r = It(e, t);
                    return !(
                        r < 0 ||
                        (r == e.length - 1 ? e.pop() : dt.call(e, r, 1), 0)
                    );
                }),
                (Mt.prototype.get = function(t) {
                    var e = this.__data__,
                        r = It(e, t);
                    return r < 0 ? void 0 : e[r][1];
                }),
                (Mt.prototype.has = function(t) {
                    return -1 < It(this.__data__, t);
                }),
                (Mt.prototype.set = function(t, e) {
                    var r = this.__data__,
                        n = It(r, t);
                    return n < 0 ? r.push([t, e]) : (r[n][1] = e), this;
                }),
                (Ft.prototype.clear = function() {
                    this.__data__ = {
                        hash: new Dt(),
                        map: new (vt || Mt)(),
                        string: new Dt(),
                    };
                }),
                (Ft.prototype.delete = function(t) {
                    return Zt(this, t).delete(t);
                }),
                (Ft.prototype.get = function(t) {
                    return Zt(this, t).get(t);
                }),
                (Ft.prototype.has = function(t) {
                    return Zt(this, t).has(t);
                }),
                (Ft.prototype.set = function(t, e) {
                    return Zt(this, t).set(t, e), this;
                }),
                (Et.prototype.add = Et.prototype.push = function(t) {
                    return this.__data__.set(t, n), this;
                }),
                (Et.prototype.has = function(t) {
                    return this.__data__.has(t);
                }),
                (zt.prototype.clear = function() {
                    this.__data__ = new Mt();
                }),
                (zt.prototype.delete = function(t) {
                    return this.__data__.delete(t);
                }),
                (zt.prototype.get = function(t) {
                    return this.__data__.get(t);
                }),
                (zt.prototype.has = function(t) {
                    return this.__data__.has(t);
                }),
                (zt.prototype.set = function(t, e) {
                    var r = this.__data__;
                    if (r instanceof Mt) {
                        var n = r.__data__;
                        if (!vt || n.length < p - 1)
                            return n.push([t, e]), this;
                        r = this.__data__ = new Ft(n);
                    }
                    return r.set(t, e), this;
                });
            var Jt =
                _t && 1 / H(new _t([, -0]))[1] == a
                    ? function(t) {
                          return new _t(t);
                      }
                    : function() {};
            function Rt(t, e, r, n, o, a) {
                var i = o & m,
                    u = t.length,
                    c = e.length;
                if (u != c && !(i && u < c)) return !1;
                var l = a.get(t);
                if (l && a.get(e)) return l == e;
                var f = -1,
                    s = !0,
                    d = o & _ ? new Et() : void 0;
                for (a.set(t, e), a.set(e, t); ++f < u; ) {
                    var p = t[f],
                        h = e[f];
                    if (n)
                        var v = i ? n(h, p, f, e, t, a) : n(p, h, f, t, e, a);
                    if (void 0 !== v) {
                        if (v) continue;
                        s = !1;
                        break;
                    }
                    if (d) {
                        if (
                            !N(e, function(t, e) {
                                if (!d.has(e) && (p === t || r(p, t, n, o, a)))
                                    return d.add(e);
                            })
                        ) {
                            s = !1;
                            break;
                        }
                    } else if (p !== h && !r(p, h, n, o, a)) {
                        s = !1;
                        break;
                    }
                }
                return a.delete(t), a.delete(e), s;
            }
            function Zt(t, e) {
                var r,
                    n,
                    o = t.__data__;
                return ('string' == (n = typeof (r = e)) ||
                'number' == n ||
                'symbol' == n ||
                'boolean' == n
                  ? '__proto__' !== r
                  : null === r)
                    ? o['string' == typeof e ? 'string' : 'hash']
                    : o.map;
            }
            function Nt(t, e) {
                var r,
                    n,
                    o = ((n = e), null == (r = t) ? void 0 : r[n]);
                return Lt(o) ? o : void 0;
            }
            var Yt = function(t) {
                return ut.call(t);
            };
            function Gt(t, e) {
                return (
                    !!(e = null == e ? o : e) &&
                    ('number' == typeof t || T.test(t)) &&
                    -1 < t &&
                    t % 1 == 0 &&
                    t < e
                );
            }
            function Vt(t, e) {
                if (ne(t)) return !1;
                var r = typeof t;
                return (
                    !(
                        'number' != r &&
                        'symbol' != r &&
                        'boolean' != r &&
                        null != t &&
                        !le(t)
                    ) ||
                    (s.test(t) || !f.test(t) || (null != e && t in Object(e)))
                );
            }
            function Xt(t) {
                return t == t && !ue(t);
            }
            function Ht(e, r) {
                return function(t) {
                    return (
                        null != t &&
                        (t[e] === r && (void 0 !== r || e in Object(t)))
                    );
                };
            }
            ((ht && Yt(new ht(new ArrayBuffer(1))) != z) ||
                (vt && Yt(new vt()) != A) ||
                (yt && Yt(yt.resolve()) != c) ||
                (_t && Yt(new _t()) != D) ||
                (bt && Yt(new bt()) != l)) &&
                (Yt = function(t) {
                    var e = ut.call(t),
                        r = e == S ? t.constructor : void 0,
                        n = r ? Qt(r) : void 0;
                    if (n)
                        switch (n) {
                            case mt:
                                return z;
                            case jt:
                                return A;
                            case wt:
                                return c;
                            case xt:
                                return D;
                            case At:
                                return l;
                        }
                    return e;
                });
            var qt = te(function(t) {
                var e;
                t =
                    null == (e = t)
                        ? ''
                        : (function(t) {
                              if ('string' == typeof t) return t;
                              if (le(t)) return kt ? kt.call(t) : '';
                              var e = t + '';
                              return '0' == e && 1 / t == -a ? '-0' : e;
                          })(e);
                var o = [];
                return (
                    d.test(t) && o.push(''),
                    t.replace(h, function(t, e, r, n) {
                        o.push(r ? n.replace(v, '$1') : e || t);
                    }),
                    o
                );
            });
            function Kt(t) {
                if ('string' == typeof t || le(t)) return t;
                var e = t + '';
                return '0' == e && 1 / t == -a ? '-0' : e;
            }
            function Qt(t) {
                if (null != t) {
                    try {
                        return at.call(t);
                    } catch (t) {}
                    try {
                        return t + '';
                    } catch (t) {}
                }
                return '';
            }
            function te(o, a) {
                if ('function' != typeof o || (a && 'function' != typeof a))
                    throw new TypeError(r);
                var i = function() {
                    var t = arguments,
                        e = a ? a.apply(this, t) : t[0],
                        r = i.cache;
                    if (r.has(e)) return r.get(e);
                    var n = o.apply(this, t);
                    return (i.cache = r.set(e, n)), n;
                };
                return (i.cache = new (te.Cache || Ft)()), i;
            }
            function ee(t, e) {
                return t === e || (t != t && e != e);
            }
            function re(t) {
                return (
                    ce((e = t)) &&
                    oe(e) &&
                    it.call(t, 'callee') &&
                    (!st.call(t, 'callee') || ut.call(t) == b)
                );
                var e;
            }
            te.Cache = Ft;
            var ne = Array.isArray;
            function oe(t) {
                return null != t && ie(t.length) && !ae(t);
            }
            function ae(t) {
                var e = ue(t) ? ut.call(t) : '';
                return e == i || e == u;
            }
            function ie(t) {
                return 'number' == typeof t && -1 < t && t % 1 == 0 && t <= o;
            }
            function ue(t) {
                var e = typeof t;
                return !!t && ('object' == e || 'function' == e);
            }
            function ce(t) {
                return !!t && 'object' == typeof t;
            }
            function le(t) {
                return 'symbol' == typeof t || (ce(t) && ut.call(t) == F);
            }
            var fe,
                se = J
                    ? ((fe = J),
                      function(t) {
                          return fe(t);
                      })
                    : function(t) {
                          return ce(t) && ie(t.length) && !!I[ut.call(t)];
                      };
            function de(t) {
                return oe(t) ? Tt(t) : Ut(t);
            }
            function pe(t) {
                return t;
            }
            t.exports = function(t, e) {
                return t && t.length
                    ? (function(t, e, r) {
                          var n = -1,
                              o = R,
                              a = t.length,
                              i = !0,
                              u = [],
                              c = u;
                          if (r) (i = !1), (o = Z);
                          else if (p <= a) {
                              var l = e ? null : Jt(t);
                              if (l) return H(l);
                              (i = !1), (o = G), (c = new Et());
                          } else c = e ? [] : u;
                          t: for (; ++n < a; ) {
                              var f = t[n],
                                  s = e ? e(f) : f;
                              if (((f = r || 0 !== f ? f : 0), i && s == s)) {
                                  for (var d = c.length; d--; )
                                      if (c[d] === s) continue t;
                                  e && c.push(s), u.push(f);
                              } else
                                  o(c, s, r) ||
                                      (c !== u && c.push(s), u.push(f));
                          }
                          return u;
                      })(t, Ct(e))
                    : [];
            };
        }),
        function(l, f) {
            return function(t) {
                var e = l.drop,
                    r = e.color,
                    n = e.fromDate,
                    o = e.toDate,
                    a = e.onClick,
                    i = e.onMouseOver,
                    u = e.onMouseOut,
                    c = (l.label.labelWidth,
                    t.selectAll('.drop').data(function(t) {
                        return t.data;
                    }));
                c
                    .enter()
                    .append('rect')
                    .classed('drop', !0)
                    .on('click', a)
                    .on('mouseover', i)
                    .on('mouseout', u)
                    .merge(c)
                    .attr('width', function(t) {
                        return f(o(t)) - f(n(t));
                    })
                    .attr('height', 10)
                    .attr('fill', r)
                    .attr('x', function(t) {
                        return f(n(t));
                    })
                    .attr('clip-path', 'url(#clip)'),
                    c
                        .exit()
                        .on('click', null)
                        .on('mouseover', null)
                        .on('mouseout', null)
                        .remove();
            };
        });
    return function(t) {
        var e = t.d3,
            I = void 0 === e ? window.d3 : e,
            r = t.global,
            P = void 0 === r ? window : r,
            $ = (function(t, e) {
                var r = {};
                for (var n in t)
                    0 <= e.indexOf(n) ||
                        (Object.prototype.hasOwnProperty.call(t, n) &&
                            (r[n] = t[n]));
                return r;
            })(t, ['d3', 'global']),
            n = function(t) {
                t.selectAll('svg').remove();
                var e = t.selectAll('svg').data(t.data());
                e.exit().remove();
                var r,
                    n = C($ || {}, {
                        locale: U,
                        metaballs: {
                            blurDeviation: 10,
                            colorMatrix:
                                '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -10',
                        },
                        bound: { format: (r = I).timeFormat('%d %B %Y') },
                        axis: {
                            formats: {
                                milliseconds: '%L',
                                seconds: ':%S',
                                minutes: '%I:%M',
                                hours: '%I %p',
                                days: '%a %d',
                                weeks: '%b %d',
                                months: '%B',
                                year: '%Y',
                            },
                            verticalGrid: !1,
                            tickPadding: 6,
                        },
                        drops: function(t) {
                            return t.data;
                        },
                        drop: {
                            color: null,
                            radius: 5,
                            fromDate: function(t) {
                                return new Date(t);
                            },
                            onClick: function() {},
                            onMouseOver: function() {},
                            onMouseOut: function() {},
                        },
                        label: {
                            padding: 20,
                            text: function(t) {
                                return t.name + ' (' + t.data.length + ')';
                            },
                            width: 200,
                        },
                        line: {
                            color: function(t, e) {
                                return r.schemeCategory10[e];
                            },
                            height: 40,
                        },
                        margin: { top: 20, right: 10, bottom: 20, left: 10 },
                        range: {
                            start: new Date(new Date().getTime() - 31536e6),
                            end: new Date(),
                        },
                        zoom: {
                            onZoomStart: null,
                            onZoom: null,
                            onZoomEnd: null,
                            minimumScale: 0,
                            maximumScale: 1 / 0,
                        },
                        numberDisplayedTicks: {
                            small: 3,
                            medium: 5,
                            large: 7,
                            extra: 12,
                        },
                        breakpoints: {
                            small: 576,
                            medium: 768,
                            large: 992,
                            extra: 1200,
                        },
                    }),
                    o = (n.drops, n.zoom),
                    a = n.drop,
                    i = (a.onClick, a.onMouseOut, a.onMouseOver, n.label),
                    u = i.width,
                    c = (i.padding, n.line.height),
                    l = n.range,
                    f = l.start,
                    s = l.end,
                    d = n.margin,
                    p = n.breakpoints,
                    h = n.onChooseTime,
                    v = t.node().clientWidth;
                d.left, d.right;
                var y = I.scaleTime()
                    .domain([f, s])
                    .range([0, v - u]);
                (n.scale = y),
                    (B._scale = y),
                    (B.currentBreakpointLabel = (function(t, e) {
                        for (var r in t) if (e <= t[r]) return r;
                        return 'extra';
                    })(p, P.innerWidth));
                var _,
                    b,
                    g,
                    m,
                    j,
                    w,
                    x,
                    A,
                    O,
                    S,
                    k,
                    D,
                    M,
                    F,
                    E,
                    z,
                    T = e
                        .enter()
                        .append('svg')
                        .attr('width', v)
                        .classed('event-drop-chart', !0);
                o &&
                    T.call(
                        ((_ = I),
                        (b = T),
                        (m = y),
                        (j = L),
                        (w = function() {
                            return I.event;
                        }),
                        (x = (g = n).label),
                        (A = x.width),
                        (O = x.padding),
                        (S = g.zoom),
                        (k = S.onZoomStart),
                        (D = S.onZoom),
                        (M = S.onZoomEnd),
                        (F = S.minimumScale),
                        (E = S.maximumScale),
                        g.margin,
                        (z = _.zoom().scaleExtent([F, E]))
                            .on('zoom.start', k)
                            .on('zoom.end', M),
                        z.on('zoom', function(t) {
                            var e,
                                r,
                                n,
                                o,
                                a,
                                i,
                                u,
                                c,
                                l = ((e = w().transform),
                                (o = _),
                                (a = (r = A) + (n = O)),
                                (i = e.x),
                                (u = e.y),
                                (c = e.k),
                                o.zoomIdentity
                                    .translate(-a, 0)
                                    .translate(i, u)
                                    .scale(c)
                                    .translate(r + n, 0)).rescaleX(m);
                            b.call(j(g, l)), D && D(t);
                        }),
                        z)
                    ),
                    T.merge(e).attr('height', function(t) {
                        return (t.length + 1) * c + d.top + d.bottom;
                    }),
                    T.append('g')
                        .classed('viewport', !0)
                        .attr(
                            'transform',
                            'translate(' + d.left + ',' + d.top + ')'
                        )
                        .call(L(n, y))
                        .append('defs')
                        .append('clipPath')
                        .attr('id', 'clip')
                        .append('rect')
                        .attr('width', v - u)
                        .attr('height', '100%'),
                    T.on('click', function() {
                        var t = I.mouse(I.event.currentTarget)[0] - u - d.left,
                            e = B._scale.invert(t),
                            r = new Date(e);
                        h(r);
                    });
            },
            B = function t(e) {
                (t._initialize = function() {
                    return n(e);
                }),
                    t._initialize(),
                    P.addEventListener('resize', t._initialize, !0);
            };
        (B.scale = function() {
            return B._scale;
        }),
            (B.filteredData = function() {
                return B._filteredData;
            }),
            (B.destroy = function() {
                var t =
                    0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : function() {};
                P.removeEventListener('resize', B._initialize, !0), t();
            });
        var L = function(b, g) {
            return function(t) {
                b.drop.fromDate,
                    g.domain().map(function(t) {
                        return new Date(t);
                    });
                var c,
                    l,
                    f,
                    s,
                    o,
                    e,
                    n,
                    a,
                    i,
                    r,
                    u,
                    d,
                    p,
                    h,
                    v,
                    y,
                    _ = t.data().map(function(t) {
                        if (!Array.isArray(t))
                            throw new Error(
                                'Selection data is not an array. Are you sure you provided an array of arrays to `data` function?'
                            );
                        return t.map(function(t) {
                            if (
                                !t.fullData &&
                                ((t.fullData = b.drops(t)), !t.fullData)
                            )
                                throw new Error(
                                    'No drops data has been found. It looks by default in the `data` property. You can use the `drops` configuration parameter to tune it.'
                                );
                            return t;
                        });
                    });
                (B._scale = g),
                    (B._filteredData = _[0]),
                    t
                        .data(_)
                        .call(
                            ((o = I),
                            (e = b),
                            (n = g),
                            (a = B.currentBreakpointLabel),
                            (i = e.label.width),
                            (r = e.axis),
                            (u = r.formats),
                            (d = r.verticalGrid),
                            (p = r.tickPadding),
                            (h = e.locale),
                            (v = e.numberDisplayedTicks),
                            (y = e.line.height),
                            o.timeFormatDefaultLocale(h),
                            function(t) {
                                var e = t.selectAll('.axis').data(function(t) {
                                    return t;
                                });
                                e.exit().remove();
                                var r = o
                                    .axisTop(n)
                                    .tickFormat(function(t) {
                                        return (
                                            (e = t),
                                            (r = u),
                                            (n = o).timeSecond(e) < e
                                                ? n.timeFormat(r.milliseconds)(
                                                      e
                                                  )
                                                : n.timeMinute(e) < e
                                                    ? n.timeFormat(r.seconds)(e)
                                                    : n.timeHour(e) < e
                                                        ? n.timeFormat(
                                                              r.minutes
                                                          )(e)
                                                        : n.timeDay(e) < e
                                                            ? n.timeFormat(
                                                                  r.hours
                                                              )(e)
                                                            : n.timeMonth(e) < e
                                                                ? n.timeWeek(
                                                                      e
                                                                  ) < e
                                                                    ? n.timeFormat(
                                                                          r.days
                                                                      )(e)
                                                                    : n.timeFormat(
                                                                          r.weeks
                                                                      )(e)
                                                                : n.timeYear(
                                                                      e
                                                                  ) < e
                                                                    ? n.timeFormat(
                                                                          r.months
                                                                      )(e)
                                                                    : n.timeFormat(
                                                                          r.year
                                                                      )(e)
                                        );
                                        var e, r, n;
                                    })
                                    .ticks(v[a])
                                    .tickPadding(p);
                                d && r.tickSizeInner(-t.data()[0].length * y),
                                    e
                                        .enter()
                                        .filter(function(t, e) {
                                            return !e;
                                        })
                                        .append('g')
                                        .classed('axis', !0)
                                        .attr(
                                            'transform',
                                            'translate(' + i + ',0)'
                                        )
                                        .call(r),
                                    e.call(r);
                            })
                        )
                        .call(
                            ((f = b),
                            (s = g),
                            function(t) {
                                var e = f.label,
                                    r = e.text,
                                    n = e.padding,
                                    o = e.width,
                                    a = f.line,
                                    i = a.color,
                                    u = a.height,
                                    c = t
                                        .selectAll('.drop-line')
                                        .data(function(t) {
                                            return t;
                                        }),
                                    l = c
                                        .enter()
                                        .append('g')
                                        .classed('drop-line', !0)
                                        .attr('fill', i)
                                        .attr('transform', function(t, e) {
                                            return (
                                                'translate(0, ' + e * u + ')'
                                            );
                                        });
                                l
                                    .append('line')
                                    .classed('line-separator', !0)
                                    .attr('x1', o)
                                    .attr('x2', '100%')
                                    .attr('y1', function() {
                                        return u;
                                    })
                                    .attr('y2', function() {
                                        return u;
                                    }),
                                    l
                                        .append('g')
                                        .classed('drops', !0)
                                        .attr('transform', function() {
                                            return (
                                                'translate(' +
                                                o +
                                                ', ' +
                                                u / 2 +
                                                ')'
                                            );
                                        })
                                        .call(m(f, s))
                                        .append('rect')
                                        .attr('x', 0)
                                        .attr('y', -f.line.height / 2)
                                        .attr('width', 1)
                                        .attr('height', f.line.height)
                                        .attr('fill', 'transparent'),
                                    l
                                        .append('text')
                                        .classed('line-label', !0)
                                        .attr('x', o - n)
                                        .attr('y', u / 2)
                                        .attr('dy', '0.25em')
                                        .attr('text-anchor', 'end')
                                        .text(r),
                                    c.selectAll('.line-label').text(r),
                                    c.selectAll('.drops').call(m(f, s)),
                                    c.exit().remove();
                            })
                        )
                        .call(
                            ((c = b),
                            (l = g),
                            function(t) {
                                var e = c.margin,
                                    r = c.bound.format,
                                    n = c.label.width,
                                    o = c.line.height,
                                    a = t.selectAll('.bound').data(function(t) {
                                        return t;
                                    }),
                                    i = t.data()[0].length;
                                a.exit().remove();
                                var u = a
                                    .enter()
                                    .filter(function(t, e) {
                                        return !e;
                                    })
                                    .append('g')
                                    .classed('bound', !0)
                                    .attr(
                                        'transform',
                                        'translate(' +
                                            n +
                                            ', ' +
                                            (o * i + e.top) +
                                            ')'
                                    );
                                u
                                    .append('text')
                                    .classed('start', !0)
                                    .text(r(l.domain()[0])),
                                    u
                                        .append('text')
                                        .classed('end', !0)
                                        .attr('x', l.range()[1] - e.right)
                                        .attr('text-anchor', 'end')
                                        .text(r(l.domain()[1])),
                                    a
                                        .selectAll('.bound text.start')
                                        .text(r(l.domain()[0])),
                                    a
                                        .selectAll('.bound text.end')
                                        .text(r(l.domain()[1]));
                            })
                        );
            };
        };
        return (B.draw = L), B;
    };
});
//# sourceMappingURL=index.js.map
