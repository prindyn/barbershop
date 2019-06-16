!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e,
        t.head.appendChild(n).parentNode.removeChild(n)
    }
    function i(e) {
        var t = !!e && "length"in e && e.length
          , n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function o(e, t, n) {
        return pe.isFunction(t) ? pe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? pe.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? pe.grep(e, function(e) {
            return se.call(t, e) > -1 !== n
        }) : Te.test(t) ? pe.filter(t, e, n) : (t = pe.filter(t, e),
        pe.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }
    function s(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function a(e) {
        var t = {};
        return pe.each(e.match(De) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function l(e) {
        return e
    }
    function c(e) {
        throw e
    }
    function u(e, t, n, i) {
        var r;
        try {
            e && pe.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && pe.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    function f() {
        te.removeEventListener("DOMContentLoaded", f),
        e.removeEventListener("load", f),
        pe.ready()
    }
    function d() {
        this.expando = pe.expando + d.uid++
    }
    function h(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : qe.test(e) ? JSON.parse(e) : e)
    }
    function p(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(He, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = h(n)
                } catch (e) {}
                Pe.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function m(e, t, n, i) {
        var r, o = 1, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return pe.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (pe.cssNumber[t] ? "" : "px"), u = (pe.cssNumber[t] || "px" !== c && +l) && Me.exec(pe.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3],
            n = n || [],
            u = +l || 1;
            do {
                o = o || ".5",
                u /= o,
                pe.style(e, t, u + c)
            } while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (u = +u || +l || 0,
        r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = u,
        i.end = r)),
        r
    }
    function g(e) {
        var t, n = e.ownerDocument, i = e.nodeName, r = Be[i];
        return r || (t = n.body.appendChild(n.createElement(i)),
        r = pe.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === r && (r = "block"),
        Be[i] = r,
        r)
    }
    function v(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
            (i = e[o]).style && (n = i.style.display,
            t ? ("none" === n && (r[o] = Le.get(i, "display") || null,
            r[o] || (i.style.display = "")),
            "" === i.style.display && We(i) && (r[o] = g(i))) : "none" !== n && (r[o] = "none",
            Le.set(i, "display", n)));
        for (o = 0; o < s; o++)
            null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && r(e, t) ? pe.merge([e], n) : n
    }
    function b(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Le.set(e[n], "globalEval", !t || Le.get(t[n], "globalEval"))
    }
    function w(e, t, n, i, r) {
        for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === pe.type(o))
                    pe.merge(d, o.nodeType ? [o] : o);
                else if (Xe.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")),
                    a = (Ke.exec(o) || ["", ""])[1].toLowerCase(),
                    l = ze[a] || ze._default,
                    s.innerHTML = l[1] + pe.htmlPrefilter(o) + l[2],
                    u = l[0]; u--; )
                        s = s.lastChild;
                    pe.merge(d, s.childNodes),
                    (s = f.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(o));
        for (f.textContent = "",
        h = 0; o = d[h++]; )
            if (i && pe.inArray(o, i) > -1)
                r && r.push(o);
            else if (c = pe.contains(o.ownerDocument, o),
            s = y(f.appendChild(o), "script"),
            c && b(s),
            n)
                for (u = 0; o = s[u++]; )
                    $e.test(o.type || "") && n.push(o);
        return f
    }
    function _() {
        return !0
    }
    function E() {
        return !1
    }
    function x() {
        try {
            return te.activeElement
        } catch (e) {}
    }
    function T(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n,
            n = void 0);
            for (a in t)
                T(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = E;
        else if (!r)
            return e;
        return 1 === o && (s = r,
        r = function(e) {
            return pe().off(e),
            s.apply(this, arguments)
        }
        ,
        r.guid = s.guid || (s.guid = pe.guid++)),
        e.each(function() {
            pe.event.add(this, t, r, i, n)
        })
    }
    function C(e, t) {
        return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? pe(">tbody", e)[0] || e : e
    }
    function S(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function j(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function A(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (Le.hasData(e) && (o = Le.access(e),
            s = Le.set(t, o),
            c = o.events)) {
                delete s.handle,
                s.events = {};
                for (r in c)
                    for (n = 0,
                    i = c[r].length; n < i; n++)
                        pe.event.add(t, r, c[r][n])
            }
            Pe.hasData(e) && (a = Pe.access(e),
            l = pe.extend({}, a),
            Pe.set(t, l))
        }
    }
    function D(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function N(e, t, i, r) {
        t = re.apply([], t);
        var o, s, a, l, c, u, f = 0, d = e.length, h = d - 1, p = t[0], m = pe.isFunction(p);
        if (m || d > 1 && "string" == typeof p && !de.checkClone && tt.test(p))
            return e.each(function(n) {
                var o = e.eq(n);
                m && (t[0] = p.call(this, n, o.html())),
                N(o, t, i, r)
            });
        if (d && (o = w(t, e[0].ownerDocument, !1, e, r),
        s = o.firstChild,
        1 === o.childNodes.length && (o = s),
        s || r)) {
            for (l = (a = pe.map(y(o, "script"), S)).length; f < d; f++)
                c = o,
                f !== h && (c = pe.clone(c, !0, !0),
                l && pe.merge(a, y(c, "script"))),
                i.call(e[f], c, f);
            if (l)
                for (u = a[a.length - 1].ownerDocument,
                pe.map(a, j),
                f = 0; f < l; f++)
                    c = a[f],
                    $e.test(c.type || "") && !Le.access(c, "globalEval") && pe.contains(u, c) && (c.src ? pe._evalUrl && pe._evalUrl(c.src) : n(c.textContent.replace(it, ""), u))
        }
        return e
    }
    function k(e, t, n) {
        for (var i, r = t ? pe.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || pe.cleanData(y(i)),
            i.parentNode && (n && pe.contains(i.ownerDocument, i) && b(y(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    function O(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || st(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || pe.contains(e.ownerDocument, e) || (s = pe.style(e, t)),
        !de.pixelMarginRight() && ot.test(s) && rt.test(t) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function I(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function L(e) {
        if (e in dt)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--; )
            if ((e = ft[n] + t)in dt)
                return e
    }
    function P(e) {
        var t = pe.cssProps[e];
        return t || (t = pe.cssProps[e] = L(e) || e),
        t
    }
    function q(e, t, n) {
        var i = Me.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function H(e, t, n, i, r) {
        var o, s = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
            "margin" === n && (s += pe.css(e, n + Fe[o], !0, r)),
            i ? ("content" === n && (s -= pe.css(e, "padding" + Fe[o], !0, r)),
            "margin" !== n && (s -= pe.css(e, "border" + Fe[o] + "Width", !0, r))) : (s += pe.css(e, "padding" + Fe[o], !0, r),
            "padding" !== n && (s += pe.css(e, "border" + Fe[o] + "Width", !0, r)));
        return s
    }
    function R(e, t, n) {
        var i, r = st(e), o = O(e, t, r), s = "border-box" === pe.css(e, "boxSizing", !1, r);
        return ot.test(o) ? o : (i = s && (de.boxSizingReliable() || o === e.style[t]),
        "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (o = parseFloat(o) || 0) + H(e, t, n || (s ? "border" : "content"), i, r) + "px")
    }
    function M(e, t, n, i, r) {
        return new M.prototype.init(e,t,n,i,r)
    }
    function F() {
        pt && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(F) : e.setTimeout(F, pe.fx.interval),
        pe.fx.tick())
    }
    function W() {
        return e.setTimeout(function() {
            ht = void 0
        }),
        ht = pe.now()
    }
    function U(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            n = Fe[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function B(e, t, n) {
        for (var i, r = (K.tweeners[t] || []).concat(K.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function Q(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = pe.camelCase(n),
            r = t[i],
            o = e[n],
            Array.isArray(o) && (r = o[1],
            o = e[n] = o[0]),
            n !== i && (e[i] = o,
            delete e[n]),
            (s = pe.cssHooks[i]) && "expand"in s) {
                o = s.expand(o),
                delete e[i];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = r)
            } else
                t[i] = r
    }
    function K(e, t, n) {
        var i, r, o = 0, s = K.prefilters.length, a = pe.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var t = ht || W(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++)
                c.tweens[o].run(i);
            return a.notifyWith(e, [c, i, n]),
            i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]),
            a.resolveWith(e, [c]),
            !1)
        }, c = a.promise({
            elem: e,
            props: pe.extend({}, t),
            opts: pe.extend(!0, {
                specialEasing: {},
                easing: pe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ht || W(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = pe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? c.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n < i; n++)
                    c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (Q(u, c.opts.specialEasing); o < s; o++)
            if (i = K.prefilters[o].call(c, e, u, c.opts))
                return pe.isFunction(i.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(i.stop, i)),
                i;
        return pe.map(u, B, c),
        pe.isFunction(c.opts.start) && c.opts.start.call(e, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    function $(e) {
        return (e.match(De) || []).join(" ")
    }
    function z(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function X(e, t, n, i) {
        var r;
        if (Array.isArray(t))
            pe.each(t, function(t, r) {
                n || St.test(e) ? i(e, r) : X(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== pe.type(t))
            i(e, t);
        else
            for (r in t)
                X(e + "[" + r + "]", t[r], n, i)
    }
    function V(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(De) || [];
            if (pe.isFunction(n))
                for (; i = o[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function Y(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0,
            pe.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                r(c),
                !1)
            }),
            l
        }
        var o = {}
          , s = e === Rt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }
    function G(e, t) {
        var n, i, r = pe.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && pe.extend(!0, e, i),
        e
    }
    function J(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o)
            return o !== l[0] && l.unshift(o),
            n[o]
    }
    function Z(e, t, n, i) {
        var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters)
                c[s.toLowerCase()] = e.converters[s];
        for (o = u.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = u.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (!(s = c[l + " " + o] || c["* " + o]))
                        for (r in c)
                            if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0],
                                u.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && e.throws)
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    var ee = []
      , te = e.document
      , ne = Object.getPrototypeOf
      , ie = ee.slice
      , re = ee.concat
      , oe = ee.push
      , se = ee.indexOf
      , ae = {}
      , le = ae.toString
      , ce = ae.hasOwnProperty
      , ue = ce.toString
      , fe = ue.call(Object)
      , de = {}
      , he = "3.2.1"
      , pe = function(e, t) {
        return new pe.fn.init(e,t)
    }
      , me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ge = /^-ms-/
      , ve = /-([a-z])/g
      , ye = function(e, t) {
        return t.toUpperCase()
    };
    pe.fn = pe.prototype = {
        jquery: he,
        constructor: pe,
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    },
    pe.extend = pe.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || pe.isFunction(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    i = e[t],
                    s !== i && (c && i && (pe.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1,
                    o = n && Array.isArray(n) ? n : []) : o = n && pe.isPlainObject(n) ? n : {},
                    s[t] = pe.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }
    ,
    pe.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = pe.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && ("function" != typeof (n = ce.call(t, "constructor") && t.constructor) || ue.call(n) !== fe))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[le.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ge, "ms-").replace(ve, ye)
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var r, o, s = 0, a = [];
            if (i(e))
                for (r = e.length; s < r; s++)
                    null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e)
                    null != (o = t(e[s], s, n)) && a.push(o);
            return re.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            pe.isFunction(e))
                return i = ie.call(arguments, 2),
                r = function() {
                    return e.apply(t || this, i.concat(ie.call(arguments)))
                }
                ,
                r.guid = e.guid = e.guid || pe.guid++,
                r
        },
        now: Date.now,
        support: de
    }),
    "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ee[Symbol.iterator]),
    pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ae["[object " + t + "]"] = t.toLowerCase()
    });
    var be = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, u, d, h = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!i && ((t ? t.ownerDocument || t : M) !== k && N(t),
            t = t || k,
            I)) {
                if (11 !== p && (l = me.exec(e)))
                    if (r = l[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(r)))
                                return n;
                            if (s.id === r)
                                return n.push(s),
                                n
                        } else if (h && (s = h.getElementById(r)) && H(t, s) && s.id === r)
                            return n.push(s),
                            n
                    } else {
                        if (l[2])
                            return Y.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((r = l[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return Y.apply(n, t.getElementsByClassName(r)),
                            n
                    }
                if (w.qsa && !Q[e + " "] && (!L || !L.test(e))) {
                    if (1 !== p)
                        h = t,
                        d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, we) : t.setAttribute("id", a = R),
                        o = (u = T(e)).length; o--; )
                            u[o] = "#" + a + " " + f(u[o]);
                        d = u.join(","),
                        h = ge.test(e) && c(t.parentNode) || t
                    }
                    if (d)
                        try {
                            return Y.apply(n, h.querySelectorAll(d)),
                            n
                        } catch (e) {} finally {
                            a === R && t.removeAttribute("id")
                        }
                }
            }
            return S(e.replace(oe, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[R] = !0,
            e
        }
        function r(e) {
            var t = k.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                _.attrHandle[n[i]] = t
        }
        function s(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function l(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function u() {}
        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function d(e, t, n) {
            var i = t.dir
              , r = t.next
              , o = r || i
              , s = n && "parentNode" === o
              , a = W++;
            return t.first ? function(t, n, r) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || s)
                        return e(t, n, r);
                return !1
            }
            : function(t, n, l) {
                var c, u, f, d = [F, a];
                if (l) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || s) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || s)
                            if (f = t[R] || (t[R] = {}),
                            u = f[t.uniqueID] || (f[t.uniqueID] = {}),
                            r && r === t.nodeName.toLowerCase())
                                t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === F && c[1] === a)
                                    return d[2] = c[2];
                                if (u[o] = d,
                                d[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function p(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++)
                t(e, n[r], i);
            return i
        }
        function m(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                c && t.push(a)));
            return s
        }
        function g(e, t, n, r, o, s) {
            return r && !r[R] && (r = g(r)),
            o && !o[R] && (o = g(o, s)),
            i(function(i, s, a, l) {
                var c, u, f, d = [], h = [], g = s.length, v = i || p(t || "*", a.nodeType ? [a] : a, []), y = !e || !i && t ? v : m(v, d, e, a, l), b = n ? o || (i ? e : g || r) ? [] : s : y;
                if (n && n(y, b, a, l),
                r)
                    for (c = m(b, h),
                    r(c, [], a, l),
                    u = c.length; u--; )
                        (f = c[u]) && (b[h[u]] = !(y[h[u]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [],
                            u = b.length; u--; )
                                (f = b[u]) && c.push(y[u] = f);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--; )
                            (f = b[u]) && (c = o ? J(i, f) : d[u]) > -1 && (i[c] = !(s[c] = f))
                    }
                } else
                    b = m(b === s ? b.splice(g, b.length) : b),
                    o ? o(null, s, b, l) : Y.apply(s, b)
            })
        }
        function v(e) {
            for (var t, n, i, r = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = d(function(e) {
                return e === t
            }, s, !0), c = d(function(e) {
                return J(t, e) > -1
            }, s, !0), u = [function(e, n, i) {
                var r = !o && (i || n !== j) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null,
                r
            }
            ]; a < r; a++)
                if (n = _.relative[e[a].type])
                    u = [d(h(u), n)];
                else {
                    if ((n = _.filter[e[a].type].apply(null, e[a].matches))[R]) {
                        for (i = ++a; i < r && !_.relative[e[i].type]; i++)
                            ;
                        return g(a > 1 && h(u), a > 1 && f(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, a < i && v(e.slice(a, i)), i < r && v(e = e.slice(i)), i < r && f(e))
                    }
                    u.push(n)
                }
            return h(u)
        }
        function y(e, n) {
            var r = n.length > 0
              , o = e.length > 0
              , s = function(i, s, a, l, c) {
                var u, f, d, h = 0, p = "0", g = i && [], v = [], y = j, b = i || o && _.find.TAG("*", c), w = F += null == y ? 1 : Math.random() || .1, E = b.length;
                for (c && (j = s === k || s || c); p !== E && null != (u = b[p]); p++) {
                    if (o && u) {
                        for (f = 0,
                        s || u.ownerDocument === k || (N(u),
                        a = !I); d = e[f++]; )
                            if (d(u, s || k, a)) {
                                l.push(u);
                                break
                            }
                        c && (F = w)
                    }
                    r && ((u = !d && u) && h--,
                    i && g.push(u))
                }
                if (h += p,
                r && p !== h) {
                    for (f = 0; d = n[f++]; )
                        d(g, v, s, a);
                    if (i) {
                        if (h > 0)
                            for (; p--; )
                                g[p] || v[p] || (v[p] = X.call(l));
                        v = m(v)
                    }
                    Y.apply(l, v),
                    c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                }
                return c && (F = w,
                j = y),
                g
            };
            return r ? i(s) : s
        }
        var b, w, _, E, x, T, C, S, j, A, D, N, k, O, I, L, P, q, H, R = "sizzle" + 1 * new Date, M = e.document, F = 0, W = 0, U = n(), B = n(), Q = n(), K = function(e, t) {
            return e === t && (D = !0),
            0
        }, $ = {}.hasOwnProperty, z = [], X = z.pop, V = z.push, Y = z.push, G = z.slice, J = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", re = new RegExp(ee + "+","g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), se = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), ce = new RegExp(ie), ue = new RegExp("^" + te + "$"), fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Z + ")$","i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
        }, de = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, pe = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), ye = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, we = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, _e = function() {
            N()
        }, Ee = d(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Y.apply(z = G.call(M.childNodes), M.childNodes),
            z[M.childNodes.length].nodeType
        } catch (e) {
            Y = {
                apply: z.length ? function(e, t) {
                    V.apply(e, G.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        x = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        N = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : M;
            return i !== k && 9 === i.nodeType && i.documentElement ? (k = i,
            O = k.documentElement,
            I = !x(k),
            M !== k && (n = k.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)),
            w.attributes = r(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = r(function(e) {
                return e.appendChild(k.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = pe.test(k.getElementsByClassName),
            w.getById = r(function(e) {
                return O.appendChild(e).id = R,
                !k.getElementsByName || !k.getElementsByName(R).length
            }),
            w.getById ? (_.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            _.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (_.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            _.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && I) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (r = t.getElementsByName(e),
                        i = 0; o = r[i++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            _.find.TAG = w.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            _.find.CLASS = w.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && I)
                    return t.getElementsByClassName(e)
            }
            ,
            P = [],
            L = [],
            (w.qsa = pe.test(k.querySelectorAll)) && (r(function(e) {
                O.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + Z + ")"),
                e.querySelectorAll("[id~=" + R + "-]").length || L.push("~="),
                e.querySelectorAll(":checked").length || L.push(":checked"),
                e.querySelectorAll("a#" + R + "+*").length || L.push(".#.+[+~]")
            }),
            r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = k.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"),
                O.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                L.push(",.*:")
            })),
            (w.matchesSelector = pe.test(q = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = q.call(e, "*"),
                q.call(e, "[s!='']:x"),
                P.push("!=", ie)
            }),
            L = L.length && new RegExp(L.join("|")),
            P = P.length && new RegExp(P.join("|")),
            t = pe.test(O.compareDocumentPosition),
            H = t || pe.test(O.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            K = t ? function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === k || e.ownerDocument === M && H(M, e) ? -1 : t === k || t.ownerDocument === M && H(M, t) ? 1 : A ? J(A, e) - J(A, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return D = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], l = [t];
                if (!r || !o)
                    return e === k ? -1 : t === k ? 1 : r ? -1 : o ? 1 : A ? J(A, e) - J(A, t) : 0;
                if (r === o)
                    return s(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; a[i] === l[i]; )
                    i++;
                return i ? s(a[i], l[i]) : a[i] === M ? -1 : l[i] === M ? 1 : 0
            }
            ,
            k) : k
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== k && N(e),
            n = n.replace(le, "='$1']"),
            w.matchesSelector && I && !Q[n + " "] && (!P || !P.test(n)) && (!L || !L.test(n)))
                try {
                    var i = q.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {}
            return t(n, k, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== k && N(e),
            H(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== k && N(e);
            var n = _.attrHandle[t.toLowerCase()]
              , i = n && $.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== i ? i : w.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        t.escape = function(e) {
            return (e + "").replace(be, we)
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (D = !w.detectDuplicates,
            A = !w.sortStable && e.slice(0),
            e.sort(K),
            D) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return A = null,
            e
        }
        ,
        E = t.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += E(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += E(t);
            return n
        }
        ,
        (_ = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ye),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = U[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && U(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, u, f, d, h, p, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild],
                            s && y) {
                                for (b = (h = (c = (u = (f = (d = g)[R] || (d[R] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === F && c[1]) && c[2],
                                d = h && g.childNodes[h]; d = ++h && d && d[m] || (b = h = 0) || p.pop(); )
                                    if (1 === d.nodeType && ++b && d === t) {
                                        u[e] = [F, h, b];
                                        break
                                    }
                            } else if (y && (d = t,
                            f = d[R] || (d[R] = {}),
                            u = f[d.uniqueID] || (f[d.uniqueID] = {}),
                            c = u[e] || [],
                            h = c[0] === F && c[1],
                            b = h),
                            !1 === b)
                                for (; (d = ++h && d && d[m] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[R] || (d[R] = {}),
                                u = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                u[e] = [F, b]),
                                d !== t)); )
                                    ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n],
                    _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), s = r.length; s--; )
                            i = J(e, r[s]),
                            e[i] = !(t[i] = r[s])
                    }) : function(e) {
                        return o(e, 0, r)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = []
                      , n = []
                      , r = C(e.replace(oe, "$1"));
                    return r[R] ? i(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(ve, ye),
                    function(t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(ve, ye).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === O
                },
                focus: function(e) {
                    return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !_.pseudos.empty(e)
                },
                header: function(e) {
                    return he.test(e.nodeName)
                },
                input: function(e) {
                    return de.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = _.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            _.pseudos[b] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            _.pseudos[b] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(b);
        return u.prototype = _.filters = _.pseudos,
        _.setFilters = new u,
        T = t.tokenize = function(e, n) {
            var i, r, o, s, a, l, c, u = B[e + " "];
            if (u)
                return n ? 0 : u.slice(0);
            for (a = e,
            l = [],
            c = _.preFilter; a; ) {
                i && !(r = se.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                l.push(o = [])),
                i = !1,
                (r = ae.exec(a)) && (i = r.shift(),
                o.push({
                    value: i,
                    type: r[0].replace(oe, " ")
                }),
                a = a.slice(i.length));
                for (s in _.filter)
                    !(r = fe[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: s,
                        matches: r
                    }),
                    a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? t.error(e) : B(e, l).slice(0)
        }
        ,
        C = t.compile = function(e, t) {
            var n, i = [], r = [], o = Q[e + " "];
            if (!o) {
                for (t || (t = T(e)),
                n = t.length; n--; )
                    (o = v(t[n]))[R] ? i.push(o) : r.push(o);
                (o = Q(e, y(r, i))).selector = e
            }
            return o
        }
        ,
        S = t.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e, d = !i && T(e = u.selector || e);
            if (n = n || [],
            1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && I && _.relative[o[1].type]) {
                    if (!(t = (_.find.ID(s.matches[0].replace(ve, ye), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                !_.relative[a = s.type]); )
                    if ((l = _.find[a]) && (i = l(s.matches[0].replace(ve, ye), ge.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        !(e = i.length && f(o)))
                            return Y.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || C(e, d))(i, t, !I, n, !t || ge.test(e) && c(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = R.split("").sort(K).join("") === R,
        w.detectDuplicates = !!D,
        N(),
        w.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
        }),
        r(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && r(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        t
    }(e);
    pe.find = be,
    pe.expr = be.selectors,
    pe.expr[":"] = pe.expr.pseudos,
    pe.uniqueSort = pe.unique = be.uniqueSort,
    pe.text = be.getText,
    pe.isXMLDoc = be.isXML,
    pe.contains = be.contains,
    pe.escapeSelector = be.escape;
    var we = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && pe(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , _e = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , Ee = pe.expr.match.needsContext
      , xe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , Te = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    pe.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(pe(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (pe.contains(r[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                pe.find(e, r[t], n);
            return i > 1 ? pe.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && Ee.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Ce, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (pe.fn.init = function(e, t, n) {
        var i, r;
        if (!e)
            return this;
        if (n = n || Ce,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof pe ? t[0] : t,
                pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)),
                xe.test(i[1]) && pe.isPlainObject(t))
                    for (i in t)
                        pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = te.getElementById(i[2])) && (this[0] = r,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this)
    }
    ).prototype = pe.fn,
    Ce = pe(te);
    var je = /^(?:parents|prev(?:Until|All))/
      , Ae = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pe.fn.extend({
        has: function(e) {
            var t = pe(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (pe.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && pe(e);
            if (!Ee.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(pe(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return we(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return we(e, "parentNode", n)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return we(e, "nextSibling")
        },
        prevAll: function(e) {
            return we(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return we(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return we(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _e((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _e(e.firstChild)
        },
        contents: function(e) {
            return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e),
            pe.merge([], e.childNodes))
        }
    }, function(e, t) {
        pe.fn[e] = function(n, i) {
            var r = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = pe.filter(i, r)),
            this.length > 1 && (Ae[e] || pe.uniqueSort(r),
            je.test(e) && r.reverse()),
            this.pushStack(r)
        }
    });
    var De = /[^\x20\t\r\n\f]+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : pe.extend({}, e);
        var t, n, i, r, o = [], s = [], l = -1, c = function() {
            for (r = r || e.once,
            i = t = !0; s.length; l = -1)
                for (n = s.shift(); ++l < o.length; )
                    !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            r && (o = n ? [] : "")
        }, u = {
            add: function() {
                return o && (n && !t && (l = o.length - 1,
                s.push(n)),
                function t(n) {
                    pe.each(n, function(n, i) {
                        pe.isFunction(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                    })
                }(arguments),
                n && !t && c()),
                this
            },
            remove: function() {
                return pe.each(arguments, function(e, t) {
                    for (var n; (n = pe.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? pe.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return r = s = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return r = s = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(e, n) {
                return r || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                s.push(n),
                t || c()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return u
    }
    ,
    pe.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2], ["resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , r = {
                state: function() {
                    return i
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return r.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return pe.Deferred(function(t) {
                        pe.each(n, function(n, i) {
                            var r = pe.isFunction(e[i[4]]) && e[i[4]];
                            o[i[1]](function() {
                                var e = r && r.apply(this, arguments);
                                e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, i, r) {
                    function o(t, n, i, r) {
                        return function() {
                            var a = this
                              , u = arguments
                              , f = function() {
                                var e, f;
                                if (!(t < s)) {
                                    if ((e = i.apply(a, u)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    f = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    pe.isFunction(f) ? r ? f.call(e, o(s, n, l, r), o(s, n, c, r)) : (s++,
                                    f.call(e, o(s, n, l, r), o(s, n, c, r), o(s, n, l, n.notifyWith))) : (i !== l && (a = void 0,
                                    u = [e]),
                                    (r || n.resolveWith)(a, u))
                                }
                            }
                              , d = r ? f : function() {
                                try {
                                    f()
                                } catch (e) {
                                    pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, d.stackTrace),
                                    t + 1 >= s && (i !== c && (a = void 0,
                                    u = [e]),
                                    n.rejectWith(a, u))
                                }
                            }
                            ;
                            t ? d() : (pe.Deferred.getStackHook && (d.stackTrace = pe.Deferred.getStackHook()),
                            e.setTimeout(d))
                        }
                    }
                    var s = 0;
                    return pe.Deferred(function(e) {
                        n[0][3].add(o(0, e, pe.isFunction(r) ? r : l, e.notifyWith)),
                        n[1][3].add(o(0, e, pe.isFunction(t) ? t : l)),
                        n[2][3].add(o(0, e, pe.isFunction(i) ? i : c))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? pe.extend(e, r) : r
                }
            }
              , o = {};
            return pe.each(n, function(e, t) {
                var s = t[2]
                  , a = t[5];
                r[t[1]] = s.add,
                a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[0][2].lock),
                s.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = s.fireWith
            }),
            r.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , i = Array(n)
              , r = ie.call(arguments)
              , o = pe.Deferred()
              , s = function(e) {
                return function(n) {
                    i[e] = this,
                    r[e] = arguments.length > 1 ? ie.call(arguments) : n,
                    --t || o.resolveWith(i, r)
                }
            };
            if (t <= 1 && (u(e, o.done(s(n)).resolve, o.reject, !t),
            "pending" === o.state() || pe.isFunction(r[n] && r[n].then)))
                return o.then();
            for (; n--; )
                u(r[n], s(n), o.reject);
            return o.promise()
        }
    });
    var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    pe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ne.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    pe.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var ke = pe.Deferred();
    pe.fn.ready = function(e) {
        return ke.then(e).catch(function(e) {
            pe.readyException(e)
        }),
        this
    }
    ,
    pe.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0,
            !0 !== e && --pe.readyWait > 0 || ke.resolveWith(te, [pe]))
        }
    }),
    pe.ready.then = ke.then,
    "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(pe.ready) : (te.addEventListener("DOMContentLoaded", f),
    e.addEventListener("load", f));
    var Oe = function(e, t, n, i, r, o, s) {
        var a = 0
          , l = e.length
          , c = null == n;
        if ("object" === pe.type(n)) {
            r = !0;
            for (a in n)
                Oe(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0,
        pe.isFunction(i) || (s = !0),
        c && (s ? (t.call(e, i),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(pe(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }
      , Ie = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    d.uid = 1,
    d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[pe.camelCase(t)] = n;
            else
                for (i in t)
                    r[pe.camelCase(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(pe.camelCase) : (t = pe.camelCase(t),
                    t = t in i ? [t] : t.match(De) || []),
                    n = t.length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (void 0 === t || pe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !pe.isEmptyObject(t)
        }
    };
    var Le = new d
      , Pe = new d
      , qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , He = /[A-Z]/g;
    pe.extend({
        hasData: function(e) {
            return Pe.hasData(e) || Le.hasData(e)
        },
        data: function(e, t, n) {
            return Pe.access(e, t, n)
        },
        removeData: function(e, t) {
            Pe.remove(e, t)
        },
        _data: function(e, t, n) {
            return Le.access(e, t, n)
        },
        _removeData: function(e, t) {
            Le.remove(e, t)
        }
    }),
    pe.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Pe.get(o),
                1 === o.nodeType && !Le.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = pe.camelCase(i.slice(5)),
                        p(o, i, r[i]));
                    Le.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Pe.set(this, e)
            }) : Oe(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Pe.get(o, e)))
                        return n;
                    if (void 0 !== (n = p(o, e)))
                        return n
                } else
                    this.each(function() {
                        Pe.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Pe.remove(this, e)
            })
        }
    }),
    pe.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = Le.get(e, t),
                n && (!i || Array.isArray(n) ? i = Le.access(e, t, pe.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = pe._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, function() {
                pe.dequeue(e, t)
            }, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Le.get(e, n) || Le.access(e, n, {
                empty: pe.Callbacks("once memory").add(function() {
                    Le.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    pe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                pe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = pe.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = Le.get(o[s], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(t)
        }
    });
    var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Me = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$","i")
      , Fe = ["Top", "Right", "Bottom", "Left"]
      , We = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display")
    }
      , Ue = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t)
            e.style[o] = s[o];
        return r
    }
      , Be = {};
    pe.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                We(this) ? pe(this).show() : pe(this).hide()
            })
        }
    });
    var Qe = /^(?:checkbox|radio)$/i
      , Ke = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , $e = /^$|\/(?:java|ecma)script/i
      , ze = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ze.optgroup = ze.option,
    ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead,
    ze.th = ze.td;
    var Xe = /<|&#?\w+;/;
    !function() {
        var e = te.createDocumentFragment().appendChild(te.createElement("div"))
          , t = te.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ve = te.documentElement
      , Ye = /^key/
      , Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Je = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, d, h, p, m, g = Le.get(e);
            if (g)
                for (n.handler && (o = n,
                n = o.handler,
                r = o.selector),
                r && pe.find.matchesSelector(Ve, r),
                n.guid || (n.guid = pe.guid++),
                (l = g.events) || (l = g.events = {}),
                (s = g.handle) || (s = g.handle = function(t) {
                    return void 0 !== pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                c = (t = (t || "").match(De) || [""]).length; c--; )
                    a = Je.exec(t[c]) || [],
                    h = m = a[1],
                    p = (a[2] || "").split(".").sort(),
                    h && (f = pe.event.special[h] || {},
                    h = (r ? f.delegateType : f.bindType) || h,
                    f = pe.event.special[h] || {},
                    u = pe.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && pe.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o),
                    (d = l[h]) || (d = l[h] = [],
                    d.delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)),
                    f.add && (f.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                    pe.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, d, h, p, m, g = Le.hasData(e) && Le.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(De) || [""]).length; c--; )
                    if (a = Je.exec(t[c]) || [],
                    h = m = a[1],
                    p = (a[2] || "").split(".").sort(),
                    h) {
                        for (f = pe.event.special[h] || {},
                        d = l[h = (i ? f.delegateType : f.bindType) || h] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = d.length; o--; )
                            u = d[o],
                            !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1),
                            u.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, u));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || pe.removeEvent(e, h, g.handle),
                        delete l[h])
                    } else
                        for (h in l)
                            pe.event.remove(e, h + t[c], n, i, !0);
                pe.isEmptyObject(l) && Le.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = pe.event.fix(e), l = new Array(arguments.length), c = (Le.get(this, "events") || {})[a.type] || [], u = pe.event.special[a.type] || {};
            for (l[0] = a,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (a.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = pe.event.handlers.call(this, a, c),
                t = 0; (r = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                        a.data = o.data,
                        void 0 !== (i = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                        a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < l; n++)
                            i = t[n],
                            r = i.selector + " ",
                            void 0 === s[r] && (s[r] = i.needsContext ? pe(r, this).index(c) > -1 : pe.find(r, this, null, [c]).length),
                            s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(pe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: pe.isFunction(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[pe.expando] ? e : new pe.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === x() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && r(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return r(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    pe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    pe.Event = function(e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _ : E,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && pe.extend(this, t),
        this.timeStamp = e && e.timeStamp || pe.now(),
        void (this[pe.expando] = !0)) : new pe.Event(e,t)
    }
    ,
    pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: E,
        isPropagationStopped: E,
        isImmediatePropagationStopped: E,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = _,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = _,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    pe.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, pe.event.addProp),
    pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || pe.contains(i, r)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    pe.fn.extend({
        on: function(e, t, n, i) {
            return T(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return T(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = E),
            this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        }
    });
    var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , et = /<script|<style|<link/i
      , tt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , nt = /^true\/(.*)/
      , it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ze, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0), l = pe.contains(e.ownerDocument, e);
            if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (s = y(a),
                o = y(e),
                i = 0,
                r = o.length; i < r; i++)
                    D(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || y(e),
                    s = s || y(a),
                    i = 0,
                    r = o.length; i < r; i++)
                        A(o[i], s[i]);
                else
                    A(e, a);
            return (s = y(a, "script")).length > 0 && b(s, !l && y(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, n, i, r = pe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Ie(n)) {
                    if (t = n[Le.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, t.handle);
                        n[Le.expando] = void 0
                    }
                    n[Pe.expando] && (n[Pe.expando] = void 0)
                }
        }
    }),
    pe.fn.extend({
        detach: function(e) {
            return k(this, e, !0)
        },
        remove: function(e) {
            return k(this, e)
        },
        text: function(e) {
            return Oe(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return N(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || C(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (pe.cleanData(y(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Oe(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !ze[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (pe.cleanData(y(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return N(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(y(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, i = [], r = pe(e), o = r.length - 1, s = 0; s <= o; s++)
                n = s === o ? this : this.clone(!0),
                pe(r[s])[t](n),
                oe.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var rt = /^margin/
      , ot = new RegExp("^(" + Re + ")(?!px)[a-z%]+$","i")
      , st = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    };
    !function() {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                a.innerHTML = "",
                Ve.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top,
                o = "2px" === t.marginLeft,
                i = "4px" === t.width,
                a.style.marginRight = "50%",
                r = "4px" === t.marginRight,
                Ve.removeChild(s),
                a = null
            }
        }
        var n, i, r, o, s = te.createElement("div"), a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        de.clearCloneStyle = "content-box" === a.style.backgroundClip,
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        s.appendChild(a),
        pe.extend(de, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return t(),
                i
            },
            pixelMarginRight: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                o
            }
        }))
    }();
    var at = /^(none|table(?!-c[ea]).+)/
      , lt = /^--/
      , ct = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ut = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , ft = ["Webkit", "Moz", "ms"]
      , dt = te.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = O(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = pe.camelCase(t), l = lt.test(t), c = e.style;
                return l || (t = P(a)),
                s = pe.cssHooks[t] || pe.cssHooks[a],
                void 0 === n ? s && "get"in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t] : ("string" === (o = typeof n) && (r = Me.exec(n)) && r[1] && (n = m(e, t, r),
                o = "number"),
                void (null != n && n === n && ("number" === o && (n += r && r[3] || (pe.cssNumber[a] ? "" : "px")),
                de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = pe.camelCase(t);
            return lt.test(t) || (t = P(a)),
            (s = pe.cssHooks[t] || pe.cssHooks[a]) && "get"in s && (r = s.get(e, !0, n)),
            void 0 === r && (r = O(e, t, i)),
            "normal" === r && t in ut && (r = ut[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return !at.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? R(e, t, i) : Ue(e, ct, function() {
                        return R(e, t, i)
                    })
            },
            set: function(e, n, i) {
                var r, o = i && st(e), s = i && H(e, t, i, "border-box" === pe.css(e, "boxSizing", !1, o), o);
                return s && (r = Me.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                n = pe.css(e, t)),
                q(0, n, s)
            }
        }
    }),
    pe.cssHooks.marginLeft = I(de.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[e + Fe[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        rt.test(e) || (pe.cssHooks[e + t].set = q)
    }),
    pe.fn.extend({
        css: function(e, t) {
            return Oe(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = st(e),
                    r = t.length; s < r; s++)
                        o[t[s]] = pe.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    pe.Tween = M,
    M.prototype = {
        constructor: M,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || pe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : M.propHooks._default.set(this),
            this
        }
    },
    M.prototype.init.prototype = M.prototype,
    M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    pe.fx = M.prototype.init,
    pe.fx.step = {};
    var ht, pt, mt = /^(?:toggle|show|hide)$/, gt = /queueHooks$/;
    pe.Animation = pe.extend(K, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return m(n.elem, e, Me.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            pe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(De);
            for (var n, i = 0, r = e.length; i < r; i++)
                n = e[i],
                K.tweeners[n] = K.tweeners[n] || [],
                K.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, s, a, l, c, u, f = "width"in t || "height"in t, d = this, h = {}, p = e.style, m = e.nodeType && We(e), g = Le.get(e, "fxshow");
            n.queue || (null == (s = pe._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    pe.queue(e, "fx").length || s.empty.fire()
                })
            }));
            for (i in t)
                if (r = t[i],
                mt.test(r)) {
                    if (delete t[i],
                    o = o || "toggle" === r,
                    r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i])
                            continue;
                        m = !0
                    }
                    h[i] = g && g[i] || pe.style(e, i)
                }
            if ((l = !pe.isEmptyObject(t)) || !pe.isEmptyObject(h)) {
                f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (c = g && g.display) && (c = Le.get(e, "display")),
                "none" === (u = pe.css(e, "display")) && (c ? u = c : (v([e], !0),
                c = e.style.display || c,
                u = pe.css(e, "display"),
                v([e]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === pe.css(e, "float") && (l || (d.done(function() {
                    p.display = c
                }),
                null == c && (u = p.display,
                c = "none" === u ? "" : u)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                d.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                l = !1;
                for (i in h)
                    l || (g ? "hidden"in g && (m = g.hidden) : g = Le.access(e, "fxshow", {
                        display: c
                    }),
                    o && (g.hidden = !m),
                    m && v([e], !0),
                    d.done(function() {
                        m || v([e]),
                        Le.remove(e, "fxshow");
                        for (i in h)
                            pe.style(e, i, h[i])
                    })),
                    l = B(m ? g[i] : 0, i, d),
                    i in g || (g[i] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
            }
        }
        ],
        prefilter: function(e, t) {
            t ? K.prefilters.unshift(e) : K.prefilters.push(e)
        }
    }),
    pe.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? pe.extend({}, e) : {
            complete: n || !n && t || pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !pe.isFunction(t) && t
        };
        return pe.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in pe.fx.speeds ? i.duration = pe.fx.speeds[i.duration] : i.duration = pe.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            pe.isFunction(i.old) && i.old.call(this),
            i.queue && pe.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    pe.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(We).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = pe.isEmptyObject(e)
              , o = pe.speed(t, n, i)
              , s = function() {
                var t = K(this, pe.extend({}, e), o);
                (r || Le.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = pe.timers
                  , s = Le.get(this);
                if (r)
                    s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s)
                        s[r] && s[r].stop && gt.test(r) && i(s[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                    t = !1,
                    o.splice(r, 1));
                !t && n || pe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = Le.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = pe.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                pe.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < s; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    pe.each(["toggle", "show", "hide"], function(e, t) {
        var n = pe.fn[t];
        pe.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, i, r)
        }
    }),
    pe.each({
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        pe.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    pe.timers = [],
    pe.fx.tick = function() {
        var e, t = 0, n = pe.timers;
        for (ht = pe.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || pe.fx.stop(),
        ht = void 0
    }
    ,
    pe.fx.timer = function(e) {
        pe.timers.push(e),
        pe.fx.start()
    }
    ,
    pe.fx.interval = 13,
    pe.fx.start = function() {
        pt || (pt = !0,
        F())
    }
    ,
    pe.fx.stop = function() {
        pt = null
    }
    ,
    pe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    pe.fn.delay = function(t, n) {
        return t = pe.fx ? pe.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var e = te.createElement("input")
          , t = te.createElement("select").appendChild(te.createElement("option"));
        e.type = "checkbox",
        de.checkOn = "" !== e.value,
        de.optSelected = t.selected,
        (e = te.createElement("input")).value = "t",
        e.type = "radio",
        de.radioValue = "t" === e.value
    }();
    var vt, yt = pe.expr.attrHandle;
    pe.fn.extend({
        attr: function(e, t) {
            return Oe(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }),
    pe.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (r = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? vt : void 0)),
                void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = pe.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && r(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(De);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    e.removeAttribute(n)
        }
    }),
    vt = {
        set: function(e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = yt[t] || pe.find.attr;
        yt[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = yt[s],
            yt[s] = r,
            r = null != n(e, t, i) ? s : null,
            yt[s] = o),
            r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i
      , wt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return Oe(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[pe.propFix[e] || e]
            })
        }
    }),
    pe.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t,
                r = pe.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    de.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }),
    pe.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).addClass(e.call(this, t, z(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(De) || []; n = this[l++]; )
                    if (r = z(n),
                    i = 1 === n.nodeType && " " + $(r) + " ") {
                        for (s = 0; o = t[s++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = $(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).removeClass(e.call(this, t, z(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(De) || []; n = this[l++]; )
                    if (r = z(n),
                    i = 1 === n.nodeType && " " + $(r) + " ") {
                        for (s = 0; o = t[s++]; )
                            for (; i.indexOf(" " + o + " ") > -1; )
                                i = i.replace(" " + o + " ", " ");
                        r !== (a = $(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, z(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0,
                    r = pe(this),
                    o = e.match(De) || []; t = o[i++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = z(this)) && Le.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Le.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + $(z(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var _t = /\r/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = pe.isFunction(e),
            this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, pe(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = pe.map(r, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(_t, "") : null == n ? "" : n : void 0
        }
    }),
    pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : $(pe.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options, s = e.selectedIndex, a = "select-one" === e.type, l = a ? null : [], c = a ? s + 1 : o.length;
                    for (i = s < 0 ? c : a ? s : 0; i < c; i++)
                        if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(),
                            a)
                                return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = pe.makeArray(t), s = r.length; s--; )
                        i = r[s],
                        (i.selected = pe.inArray(pe.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = pe.inArray(pe(e).val(), t) > -1
            }
        },
        de.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Et = /^(?:focusinfocus|focusoutblur)$/;
    pe.extend(pe.event, {
        trigger: function(t, n, i, r) {
            var o, s, a, l, c, u, f, d = [i || te], h = ce.call(t, "type") ? t.type : t, p = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || te,
            3 !== i.nodeType && 8 !== i.nodeType && !Et.test(h + pe.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."),
            h = p.shift(),
            p.sort()),
            c = h.indexOf(":") < 0 && "on" + h,
            t = t[pe.expando] ? t : new pe.Event(h,"object" == typeof t && t),
            t.isTrigger = r ? 2 : 3,
            t.namespace = p.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : pe.makeArray(n, [t]),
            f = pe.event.special[h] || {},
            r || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                if (!r && !f.noBubble && !pe.isWindow(i)) {
                    for (l = f.delegateType || h,
                    Et.test(l + h) || (s = s.parentNode); s; s = s.parentNode)
                        d.push(s),
                        a = s;
                    a === (i.ownerDocument || te) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = d[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? l : f.bindType || h,
                    (u = (Le.get(s, "events") || {})[t.type] && Le.get(s, "handle")) && u.apply(s, n),
                    (u = c && s[c]) && u.apply && Ie(s) && (t.result = u.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = h,
                r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !Ie(i) || c && pe.isFunction(i[h]) && !pe.isWindow(i) && ((a = i[c]) && (i[c] = null),
                pe.event.triggered = h,
                i[h](),
                pe.event.triggered = void 0,
                a && (i[c] = a)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(i, null, t)
        }
    }),
    pe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return pe.event.trigger(e, t, n, !0)
        }
    }),
    pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    de.focusin = "onfocusin"in e,
    de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = Le.access(i, t);
                r || i.addEventListener(e, n, !0),
                Le.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = Le.access(i, t) - 1;
                r ? Le.access(i, t, r) : (i.removeEventListener(e, n, !0),
                Le.remove(i, t))
            }
        }
    });
    var xt = e.location
      , Tt = pe.now()
      , Ct = /\?/;
    pe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t),
        n
    }
    ;
    var St = /\[\]$/
      , jt = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , Dt = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = pe.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !pe.isPlainObject(e))
            pe.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                X(n, e[n], t, r);
        return i.join("&")
    }
    ,
    pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !Qe.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : Array.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(jt, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g
      , kt = /#.*$/
      , Ot = /([?&])_=[^&]*/
      , It = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Pt = /^(?:GET|HEAD)$/
      , qt = /^\/\//
      , Ht = {}
      , Rt = {}
      , Mt = "*/".concat("*")
      , Ft = te.createElement("a");
    Ft.href = xt.href,
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: Lt.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? G(G(e, pe.ajaxSettings), t) : G(pe.ajaxSettings, e)
        },
        ajaxPrefilter: V(Ht),
        ajaxTransport: V(Rt),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var c, d, h, w, _, E = n;
                u || (u = !0,
                l && e.clearTimeout(l),
                r = void 0,
                s = a || "",
                x.readyState = t > 0 ? 4 : 0,
                c = t >= 200 && t < 300 || 304 === t,
                i && (w = J(p, x, i)),
                w = Z(p, w, x, c),
                c ? (p.ifModified && ((_ = x.getResponseHeader("Last-Modified")) && (pe.lastModified[o] = _),
                (_ = x.getResponseHeader("etag")) && (pe.etag[o] = _)),
                204 === t || "HEAD" === p.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = w.state,
                d = w.data,
                h = w.error,
                c = !h)) : (h = E,
                !t && E || (E = "error",
                t < 0 && (t = 0))),
                x.status = t,
                x.statusText = (n || E) + "",
                c ? v.resolveWith(m, [d, E, x]) : v.rejectWith(m, [x, E, h]),
                x.statusCode(b),
                b = void 0,
                f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? d : h]),
                y.fireWith(m, [x, E]),
                f && (g.trigger("ajaxComplete", [x, p]),
                --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, o, s, a, l, c, u, f, d, h, p = pe.ajaxSetup({}, n), m = p.context || p, g = p.context && (m.nodeType || m.jquery) ? pe(m) : pe.event, v = pe.Deferred(), y = pe.Callbacks("once memory"), b = p.statusCode || {}, w = {}, _ = {}, E = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (u) {
                        if (!a)
                            for (a = {}; t = It.exec(s); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return u ? s : null
                },
                setRequestHeader: function(e, t) {
                    return null == u && (e = _[e.toLowerCase()] = _[e.toLowerCase()] || e,
                    w[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == u && (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (u)
                            x.always(e[x.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || E;
                    return r && r.abort(t),
                    i(0, t),
                    this
                }
            };
            if (v.promise(x),
            p.url = ((t || p.url || xt.href) + "").replace(qt, xt.protocol + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = (p.dataType || "*").toLowerCase().match(De) || [""],
            null == p.crossDomain) {
                c = te.createElement("a");
                try {
                    c.href = p.url,
                    c.href = c.href,
                    p.crossDomain = Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = pe.param(p.data, p.traditional)),
            Y(Ht, p, n, x),
            u)
                return x;
            (f = pe.event && p.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Pt.test(p.type),
            o = p.url.replace(kt, ""),
            p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Nt, "+")) : (h = p.url.slice(o.length),
            p.data && (o += (Ct.test(o) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (o = o.replace(Ot, "$1"),
            h = (Ct.test(o) ? "&" : "?") + "_=" + Tt++ + h),
            p.url = o + h),
            p.ifModified && (pe.lastModified[o] && x.setRequestHeader("If-Modified-Since", pe.lastModified[o]),
            pe.etag[o] && x.setRequestHeader("If-None-Match", pe.etag[o])),
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType),
            x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers)
                x.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, x, p) || u))
                return x.abort();
            if (E = "abort",
            y.add(p.complete),
            x.done(p.success),
            x.fail(p.error),
            r = Y(Rt, p, n, x)) {
                if (x.readyState = 1,
                f && g.trigger("ajaxSend", [x, p]),
                u)
                    return x;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    u = !1,
                    r.send(w, i)
                } catch (e) {
                    if (u)
                        throw e;
                    i(-1, e)
                }
            } else
                i(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }),
    pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, i, r) {
            return pe.isFunction(n) && (r = r || i,
            i = n,
            n = void 0),
            pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, pe.isPlainObject(e) && e))
        }
    }),
    pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    pe.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (pe.isFunction(e) && (e = e.call(this[0])),
            t = pe(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                pe(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    pe.expr.pseudos.hidden = function(e) {
        return !pe.expr.pseudos.visible(e)
    }
    ,
    pe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    pe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Wt = {
        0: 200,
        1223: 204
    }
      , Ut = pe.ajaxSettings.xhr();
    de.cors = !!Ut && "withCredentials"in Ut,
    de.ajax = Ut = !!Ut,
    pe.ajaxTransport(function(t) {
        var n, i;
        if (de.cors || Ut && !t.crossDomain)
            return {
                send: function(r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r)
                        a.setRequestHeader(s, r[s]);
                    n = function(e) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    i = a.onerror = n("error"),
                    void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    pe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e),
                e
            }
        }
    }),
    pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = pe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && r("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    te.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Bt = []
      , Qt = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || pe.expando + "_" + Tt++;
            return this[e] = !0,
            e
        }
    }),
    pe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(Qt, "$1" + r) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            t.converters["script json"] = function() {
                return s || pe.error(r + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[r],
            e[r] = function() {
                s = arguments
            }
            ,
            i.always(function() {
                void 0 === o ? pe(e).removeProp(r) : e[r] = o,
                t[r] && (t.jsonpCallback = n.jsonpCallback,
                Bt.push(r)),
                s && pe.isFunction(o) && o(s[0]),
                s = o = void 0
            }),
            "script"
    }),
    de.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    pe.parseHTML = function(e, t, n) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (n = t,
        t = !1);
        var i, r, o;
        return t || (de.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""),
        i = t.createElement("base"),
        i.href = te.location.href,
        t.head.appendChild(i)) : t = te),
        r = xe.exec(e),
        o = !n && [],
        r ? [t.createElement(r[1])] : (r = w([e], t, o),
        o && o.length && pe(o).remove(),
        pe.merge([], r.childNodes))
    }
    ,
    pe.fn.load = function(e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return a > -1 && (i = $(e.slice(a)),
        e = e.slice(0, a)),
        pe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        s.length > 0 && pe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    pe.expr.pseudos.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    pe.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = pe.css(e, "position"), u = pe(e), f = {};
            "static" === c && (e.style.position = "relative"),
            a = u.offset(),
            o = pe.css(e, "top"),
            l = pe.css(e, "left"),
            ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (i = u.position(),
            s = i.top,
            r = i.left) : (s = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, a))),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + r),
            "using"in t ? t.using.call(e, f) : u.css(f)
        }
    },
    pe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    pe.offset.setOffset(this, e, t)
                });
            var t, n, i, r, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(),
            t = o.ownerDocument,
            n = t.documentElement,
            r = t.defaultView,
            {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                r(e[0], "html") || (i = e.offset()),
                i = {
                    top: i.top + pe.css(e[0], "borderTopWidth", !0),
                    left: i.left + pe.css(e[0], "borderLeftWidth", !0)
                }),
                {
                    top: t.top - i.top - pe.css(n, "marginTop", !0),
                    left: t.left - i.left - pe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === pe.css(e, "position"); )
                    e = e.offsetParent;
                return e || Ve
            })
        }
    }),
    pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        pe.fn[e] = function(i) {
            return Oe(this, function(e, i, r) {
                var o;
                return pe.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }),
    pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = I(de.pixelPosition, function(e, n) {
            if (n)
                return n = O(e, t),
                ot.test(n) ? pe(e).position()[t] + "px" : n
        })
    }),
    pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            pe.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r)
                  , a = n || (!0 === r || !0 === o ? "margin" : "border");
                return Oe(this, function(t, n, r) {
                    var o;
                    return pe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? pe.css(t, n, a) : pe.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }),
    pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    pe.holdReady = function(e) {
        e ? pe.readyWait++ : pe.ready(!0)
    }
    ,
    pe.isArray = Array.isArray,
    pe.parseJSON = JSON.parse,
    pe.nodeName = r,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var Kt = e.jQuery
      , $t = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = $t),
        t && e.jQuery === pe && (e.jQuery = Kt),
        pe
    }
    ,
    t || (e.jQuery = e.$ = pe),
    pe
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = window.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function i(e) {
        if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName))
            return window.document.body;
        var r = t(e)
          , o = r.overflow
          , s = r.overflowX
          , a = r.overflowY;
        return /(auto|scroll)/.test(o + a + s) ? e : i(n(e))
    }
    function r(e) {
        var n = e && e.offsetParent
          , i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? r(n) : n : window.document.documentElement
    }
    function o(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e)
    }
    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }
    function a(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return window.document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , l = n ? t : e
          , c = document.createRange();
        c.setStart(i, 0),
        c.setEnd(l, 0);
        var u = c.commonAncestorContainer;
        if (e !== u && t !== u || i.contains(l))
            return o(u) ? u : r(u);
        var f = s(e);
        return f.host ? a(f.host, t) : a(e, s(t).host)
    }
    function l(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
          , n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = window.document.documentElement;
            return (window.document.scrollingElement || i)[t]
        }
        return e[t]
    }
    function c(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , i = l(t, "top")
          , r = l(t, "left")
          , o = n ? -1 : 1;
        return e.top += i * o,
        e.bottom += i * o,
        e.left += r * o,
        e.right += r * o,
        e
    }
    function u(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , i = "Left" == n ? "Right" : "Bottom";
        return +e["border" + n + "Width"].split("px")[0] + +e["border" + i + "Width"].split("px")[0]
    }
    function f(e, t, n, i) {
        return z(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], te() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }
    function d() {
        var e = window.document.body
          , t = window.document.documentElement
          , n = te() && window.getComputedStyle(t);
        return {
            height: f("Height", e, t, n),
            width: f("Width", e, t, n)
        }
    }
    function h(e) {
        return oe({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function p(e) {
        var n = {};
        if (te())
            try {
                n = e.getBoundingClientRect();
                var i = l(e, "top")
                  , r = l(e, "left");
                n.top += i,
                n.left += r,
                n.bottom += i,
                n.right += r
            } catch (e) {}
        else
            n = e.getBoundingClientRect();
        var o = {
            left: n.left,
            top: n.top,
            width: n.right - n.left,
            height: n.bottom - n.top
        }
          , s = "HTML" === e.nodeName ? d() : {}
          , a = s.width || e.clientWidth || o.right - o.left
          , c = s.height || e.clientHeight || o.bottom - o.top
          , f = e.offsetWidth - a
          , p = e.offsetHeight - c;
        if (f || p) {
            var m = t(e);
            f -= u(m, "x"),
            p -= u(m, "y"),
            o.width -= f,
            o.height -= p
        }
        return h(o)
    }
    function m(e, n) {
        var r = te()
          , o = "HTML" === n.nodeName
          , s = p(e)
          , a = p(n)
          , l = i(e)
          , u = t(n)
          , f = +u.borderTopWidth.split("px")[0]
          , d = +u.borderLeftWidth.split("px")[0]
          , m = h({
            top: s.top - a.top - f,
            left: s.left - a.left - d,
            width: s.width,
            height: s.height
        });
        if (m.marginTop = 0,
        m.marginLeft = 0,
        !r && o) {
            var g = +u.marginTop.split("px")[0]
              , v = +u.marginLeft.split("px")[0];
            m.top -= f - g,
            m.bottom -= f - g,
            m.left -= d - v,
            m.right -= d - v,
            m.marginTop = g,
            m.marginLeft = v
        }
        return (r ? n.contains(l) : n === l && "BODY" !== l.nodeName) && (m = c(m, n)),
        m
    }
    function g(e) {
        var t = window.document.documentElement
          , n = m(e, t)
          , i = z(t.clientWidth, window.innerWidth || 0)
          , r = z(t.clientHeight, window.innerHeight || 0)
          , o = l(t)
          , s = l(t, "left");
        return h({
            top: o - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        })
    }
    function v(e) {
        var i = e.nodeName;
        return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || v(n(e)))
    }
    function y(e, t, r, o) {
        var s = {
            top: 0,
            left: 0
        }
          , l = a(e, t);
        if ("viewport" === o)
            s = g(l);
        else {
            var c;
            "scrollParent" === o ? "BODY" === (c = i(n(e))).nodeName && (c = window.document.documentElement) : c = "window" === o ? window.document.documentElement : o;
            var u = m(c, l);
            if ("HTML" !== c.nodeName || v(l))
                s = u;
            else {
                var f = d()
                  , h = f.height
                  , p = f.width;
                s.top += u.top - u.marginTop,
                s.bottom = h + u.top,
                s.left += u.left - u.marginLeft,
                s.right = p + u.left
            }
        }
        return s.left += r,
        s.top += r,
        s.right -= r,
        s.bottom -= r,
        s
    }
    function b(e) {
        return e.width * e.height
    }
    function w(e, t, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var s = y(n, i, o, r)
          , a = {
            top: {
                width: s.width,
                height: t.top - s.top
            },
            right: {
                width: s.right - t.right,
                height: s.height
            },
            bottom: {
                width: s.width,
                height: s.bottom - t.bottom
            },
            left: {
                width: t.left - s.left,
                height: s.height
            }
        }
          , l = Object.keys(a).map(function(e) {
            return oe({
                key: e
            }, a[e], {
                area: b(a[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , c = l.filter(function(e) {
            var t = e.width
              , i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        })
          , u = 0 < c.length ? c[0].key : l[0].key
          , f = e.split("-")[1];
        return u + (f ? "-" + f : "")
    }
    function _(e, t, n) {
        return m(n, a(t, n))
    }
    function E(e) {
        var t = window.getComputedStyle(e)
          , n = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
          , i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function x(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function T(e, t, n) {
        n = n.split("-")[0];
        var i = E(e)
          , r = {
            width: i.width,
            height: i.height
        }
          , o = -1 !== ["right", "left"].indexOf(n)
          , s = o ? "top" : "left"
          , a = o ? "left" : "top"
          , l = o ? "height" : "width"
          , c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2,
        r[a] = n === a ? t[a] - i[c] : t[x(a)],
        r
    }
    function C(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function S(e, t, n) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === n
            });
        var i = C(e, function(e) {
            return e[t] === n
        });
        return e.indexOf(i)
    }
    function j(t, n, i) {
        return (void 0 === i ? t : t.slice(0, S(t, "name", i))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = h(n.offsets.popper),
            n.offsets.reference = h(n.offsets.reference),
            n = i(n, t))
        }),
        n
    }
    function A() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = _(this.state, this.popper, this.reference),
            e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.offsets.popper = T(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = "absolute",
            e = j(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function D(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }
    function N(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
            var r = t[i]
              , o = r ? "" + r + n : e;
            if (void 0 !== window.document.body.style[o])
                return o
        }
        return null
    }
    function k() {
        return this.state.isDestroyed = !0,
        D(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
        this.popper.style.left = "",
        this.popper.style.position = "",
        this.popper.style.top = "",
        this.popper.style[N("transform")] = ""),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function O(e, t, n, r) {
        var o = "BODY" === e.nodeName
          , s = o ? window : e;
        s.addEventListener(t, n, {
            passive: !0
        }),
        o || O(i(s.parentNode), t, n, r),
        r.push(s)
    }
    function I(e, t, n, r) {
        n.updateBound = r,
        window.addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = i(e);
        return O(o, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = o,
        n.eventsEnabled = !0,
        n
    }
    function L() {
        this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function P(e, t) {
        return window.removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t
    }
    function q() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate),
        this.state = P(this.reference, this.state))
    }
    function H(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function R(e, t) {
        Object.keys(t).forEach(function(n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && H(t[n]) && (i = "px"),
            e.style[n] = t[n] + i
        })
    }
    function M(e, t) {
        Object.keys(t).forEach(function(n) {
            !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
        })
    }
    function F(e, t, n) {
        var i = C(e, function(e) {
            return e.name === t
        })
          , r = !!i && e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    function W(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e
    }
    function U(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = ae.indexOf(e)
          , i = ae.slice(n + 1).concat(ae.slice(0, n));
        return t ? i.reverse() : i
    }
    function B(e, t, n, i) {
        var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
          , o = +r[1]
          , s = r[2];
        if (!o)
            return e;
        if (0 === s.indexOf("%")) {
            var a;
            switch (s) {
            case "%p":
                a = n;
                break;
            case "%":
            case "%r":
            default:
                a = i
            }
            return h(a)[t] / 100 * o
        }
        if ("vh" === s || "vw" === s) {
            return ("vh" === s ? z(document.documentElement.clientHeight, window.innerHeight || 0) : z(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
        }
        return o
    }
    function Q(e, t, n, i) {
        var r = [0, 0]
          , o = -1 !== ["right", "left"].indexOf(i)
          , s = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , a = s.indexOf(C(s, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , c = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
        return (c = c.map(function(e, i) {
            var r = (1 === i ? !o : o) ? "height" : "width"
              , s = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                s = !0,
                e) : s ? (e[e.length - 1] += t,
                s = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return B(e, r, t, n)
            })
        })).forEach(function(e, t) {
            e.forEach(function(n, i) {
                H(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }),
        r
    }
    for (var K = Math.min, $ = Math.floor, z = Math.max, X = ["native code", "[object MutationObserverConstructor]"], V = "undefined" != typeof window, Y = ["Edge", "Trident", "Firefox"], G = 0, J = 0; J < Y.length; J += 1)
        if (V && 0 <= navigator.userAgent.indexOf(Y[J])) {
            G = 1;
            break
        }
    var Z, ee = V && function(e) {
        return X.some(function(t) {
            return -1 < (e || "").toString().indexOf(t)
        })
    }(window.MutationObserver) ? function(e) {
        var t = !1
          , n = 0
          , i = document.createElement("span");
        return new MutationObserver(function() {
            e(),
            t = !1
        }
        ).observe(i, {
            attributes: !0
        }),
        function() {
            t || (t = !0,
            i.setAttribute("x-index", n),
            ++n)
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, G))
        }
    }
    , te = function() {
        return void 0 == Z && (Z = -1 !== navigator.appVersion.indexOf("MSIE 10")),
        Z
    }, ne = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }, ie = function() {
        function e(e, t) {
            for (var n, i = 0; i < t.length; i++)
                n = t[i],
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }(), re = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }, oe = Object.assign || function(e) {
        for (var t, n = 1; n < arguments.length; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }
    , se = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], ae = se.slice(3), le = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    }, ce = function() {
        function t(n, i) {
            var r = this
              , o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            ne(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(r.update)
            }
            ,
            this.update = ee(this.update.bind(this)),
            this.options = oe({}, t.Defaults, o),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = n.jquery ? n[0] : n,
            this.popper = i.jquery ? i[0] : i,
            this.options.modifiers = {},
            Object.keys(oe({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) {
                r.options.modifiers[e] = oe({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return oe({
                    name: e
                }, r.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
            }),
            this.update();
            var s = this.options.eventsEnabled;
            s && this.enableEventListeners(),
            this.state.eventsEnabled = s
        }
        return ie(t, [{
            key: "update",
            value: function() {
                return A.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return k.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return L.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return q.call(this)
            }
        }]),
        t
    }();
    return ce.Utils = ("undefined" == typeof window ? global : window).PopperUtils,
    ce.placements = se,
    ce.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets
                          , o = r.reference
                          , s = r.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , c = a ? "width" : "height"
                          , u = {
                            start: re({}, l, o[l]),
                            end: re({}, l, o[l] + o[c] - s[c])
                        };
                        e.offsets.popper = oe({}, s, u[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset, r = e.placement, o = e.offsets, s = o.popper, a = o.reference, l = r.split("-")[0];
                    return n = H(+i) ? [+i, 0] : Q(i, s, a, l),
                    "left" === l ? (s.top += n[0],
                    s.left -= n[1]) : "right" === l ? (s.top += n[0],
                    s.left += n[1]) : "top" === l ? (s.left += n[0],
                    s.top -= n[1]) : "bottom" === l && (s.left += n[0],
                    s.top += n[1]),
                    e.popper = s,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === n && (n = r(n));
                    var i = y(e.instance.popper, e.instance.reference, t.padding, n);
                    t.boundaries = i;
                    var o = t.priority
                      , s = e.offsets.popper
                      , a = {
                        primary: function(e) {
                            var n = s[e];
                            return s[e] < i[e] && !t.escapeWithReference && (n = z(s[e], i[e])),
                            re({}, e, n)
                        },
                        secondary: function(e) {
                            var n = "right" === e ? "left" : "top"
                              , r = s[n];
                            return s[e] > i[e] && !t.escapeWithReference && (r = K(s[n], i[e] - ("right" === e ? s.width : s.height))),
                            re({}, n, r)
                        }
                    };
                    return o.forEach(function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        s = oe({}, s, a[t](e))
                    }),
                    e.offsets.popper = s,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , r = e.placement.split("-")[0]
                      , o = $
                      , s = -1 !== ["top", "bottom"].indexOf(r)
                      , a = s ? "right" : "bottom"
                      , l = s ? "left" : "top"
                      , c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]),
                    n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, n) {
                    if (!F(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var i = n.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i)))
                            return e
                    } else if (!e.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var r = e.placement.split("-")[0]
                      , o = e.offsets
                      , s = o.popper
                      , a = o.reference
                      , l = -1 !== ["left", "right"].indexOf(r)
                      , c = l ? "height" : "width"
                      , u = l ? "Top" : "Left"
                      , f = u.toLowerCase()
                      , d = l ? "left" : "top"
                      , p = l ? "bottom" : "right"
                      , m = E(i)[c];
                    a[p] - m < s[f] && (e.offsets.popper[f] -= s[f] - (a[p] - m)),
                    a[f] + m > s[p] && (e.offsets.popper[f] += a[f] + m - s[p]);
                    var g = a[f] + a[c] / 2 - m / 2
                      , v = t(e.instance.popper, "margin" + u).replace("px", "")
                      , y = g - h(e.offsets.popper)[f] - v;
                    return y = z(K(s[c] - m, y), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = {},
                    e.offsets.arrow[f] = Math.round(y),
                    e.offsets.arrow[d] = "",
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (D(e.instance.modifiers, "inner"))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var n = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement)
                      , i = e.placement.split("-")[0]
                      , r = x(i)
                      , o = e.placement.split("-")[1] || ""
                      , s = [];
                    switch (t.behavior) {
                    case le.FLIP:
                        s = [i, r];
                        break;
                    case le.CLOCKWISE:
                        s = U(i);
                        break;
                    case le.COUNTERCLOCKWISE:
                        s = U(i, !0);
                        break;
                    default:
                        s = t.behavior
                    }
                    return s.forEach(function(a, l) {
                        if (i !== a || s.length === l + 1)
                            return e;
                        i = e.placement.split("-")[0],
                        r = x(i);
                        var c = e.offsets.popper
                          , u = e.offsets.reference
                          , f = $
                          , d = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom)
                          , h = f(c.left) < f(n.left)
                          , p = f(c.right) > f(n.right)
                          , m = f(c.top) < f(n.top)
                          , g = f(c.bottom) > f(n.bottom)
                          , v = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g
                          , y = -1 !== ["top", "bottom"].indexOf(i)
                          , b = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && m || !y && "end" === o && g);
                        (d || v || b) && (e.flipped = !0,
                        (d || v) && (i = s[l + 1]),
                        b && (o = W(o)),
                        e.placement = i + (o ? "-" + o : ""),
                        e.offsets.popper = oe({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)),
                        e = j(e.instance.modifiers, e, "flip"))
                    }),
                    e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , r = i.popper
                      , o = i.reference
                      , s = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0),
                    e.placement = x(t),
                    e.offsets.popper = h(r),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!F(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = C(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , o = e.offsets.popper
                      , s = C(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, c = void 0 === s ? t.gpuAcceleration : s, u = p(r(e.instance.popper)), f = {
                        position: o.position
                    }, d = {
                        left: $(o.left),
                        top: $(o.top),
                        bottom: $(o.bottom),
                        right: $(o.right)
                    }, h = "bottom" === n ? "top" : "bottom", m = "right" === i ? "left" : "right", g = N("transform");
                    if (l = "bottom" == h ? -u.height + d.bottom : d.top,
                    a = "right" == m ? -u.width + d.right : d.left,
                    c && g)
                        f[g] = "translate3d(" + a + "px, " + l + "px, 0)",
                        f[h] = 0,
                        f[m] = 0,
                        f.willChange = "transform";
                    else {
                        var v = "bottom" == h ? -1 : 1
                          , y = "right" == m ? -1 : 1;
                        f[h] = l * v,
                        f[m] = a * y,
                        f.willChange = h + ", " + m
                    }
                    var b = {
                        "x-placement": e.placement
                    };
                    return e.attributes = oe({}, b, e.attributes),
                    e.styles = oe({}, f, e.styles),
                    e.arrowStyles = oe({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return R(e.instance.popper, e.styles),
                    M(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && R(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, r) {
                    var o = _(r, t, e)
                      , s = w(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s),
                    R(t, {
                        position: "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    },
    ce
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, n) {
    "use strict";
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function r(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        e
    }
    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(t) {
                var i, r, o;
                i = e,
                o = n[r = t],
                r in i ? Object.defineProperty(i, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[r] = o
            })
        }
        return e
    }
    function s(e, t, n) {
        if (0 === e.length)
            return e;
        if (n && "function" == typeof n)
            return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = 0, a = o.length; s < a; s++)
            !function(e, n) {
                var i = o[e]
                  , s = i.nodeName.toLowerCase();
                if (-1 === r.indexOf(i.nodeName.toLowerCase()))
                    return i.parentNode.removeChild(i),
                    "continue";
                var a = [].slice.call(i.attributes)
                  , l = [].concat(t["*"] || [], t[s] || []);
                a.forEach(function(e) {
                    (function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n))
                            return -1 === Ae.indexOf(n) || Boolean(e.nodeValue.match(Ne) || e.nodeValue.match(ke));
                        for (var i = t.filter(function(e) {
                            return e instanceof RegExp
                        }), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r]))
                                return !0;
                        return !1
                    }
                    )(e, l) || i.removeAttribute(e.nodeName)
                })
            }(s);
        return i.body.innerHTML
    }
    t = t && t.hasOwnProperty("default") ? t.default : t,
    n = n && n.hasOwnProperty("default") ? n.default : n;
    var a = "transitionend"
      , l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()),
            document.getElementById(e); )
                ;
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e)
                return 0;
            var n = t(e).css("transition-duration")
              , i = t(e).css("transition-delay")
              , r = parseFloat(n)
              , o = parseFloat(i);
            return r || o ? (n = n.split(",")[0],
            i = i.split(",")[0],
            1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            t(e).trigger(a)
        },
        supportsTransitionEnd: function() {
            return Boolean(a)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i]
                      , o = t[i]
                      , s = o && l.isElement(o) ? "element" : (a = o,
                    {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(s))
                        throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                }
            var a
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof e.getRootNode)
                return e instanceof ShadowRoot ? e : e.parentNode ? l.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    t.fn.emulateTransitionEnd = function(e) {
        var n = this
          , i = !1;
        return t(this).one(l.TRANSITION_END, function() {
            i = !0
        }),
        setTimeout(function() {
            i || l.triggerTransitionEnd(n)
        }, e),
        this
    }
    ,
    t.event.special[l.TRANSITION_END] = {
        bindType: a,
        delegateType: a,
        handle: function(e) {
            if (t(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    };
    var c = "alert"
      , u = "bs.alert"
      , f = "." + u
      , d = t.fn[c]
      , h = {
        CLOSE: "close" + f,
        CLOSED: "closed" + f,
        CLICK_DATA_API: "click" + f + ".data-api"
    }
      , p = function() {
        function e(e) {
            this._element = e
        }
        var n = e.prototype;
        return n.close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, u),
            this._element = null
        }
        ,
        n._getRootElement = function(e) {
            var n = l.getSelectorFromElement(e)
              , i = !1;
            return n && (i = document.querySelector(n)),
            i || (i = t(e).closest(".alert")[0]),
            i
        }
        ,
        n._triggerCloseEvent = function(e) {
            var n = t.Event(h.CLOSE);
            return t(e).trigger(n),
            n
        }
        ,
        n._removeElement = function(e) {
            var n = this;
            if (t(e).removeClass("show"),
            t(e).hasClass("fade")) {
                var i = l.getTransitionDurationFromElement(e);
                t(e).one(l.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(i)
            } else
                this._destroyElement(e)
        }
        ,
        n._destroyElement = function(e) {
            t(e).detach().trigger(h.CLOSED).remove()
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this)
                  , r = i.data(u);
                r || (r = new e(this),
                i.data(u, r)),
                "close" === n && r[n](this)
            })
        }
        ,
        e._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        e
    }();
    t(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)),
    t.fn[c] = p._jQueryInterface,
    t.fn[c].Constructor = p,
    t.fn[c].noConflict = function() {
        return t.fn[c] = d,
        p._jQueryInterface
    }
    ;
    var m = "button"
      , g = "bs.button"
      , v = "." + g
      , y = ".data-api"
      , b = t.fn[m]
      , w = "active"
      , _ = '[data-toggle^="button"]'
      , E = ".btn"
      , x = {
        CLICK_DATA_API: "click" + v + y,
        FOCUS_BLUR_DATA_API: "focus" + v + y + " blur" + v + y
    }
      , T = function() {
        function e(e) {
            this._element = e
        }
        var n = e.prototype;
        return n.toggle = function() {
            var e = !0
              , n = !0
              , i = t(this._element).closest('[data-toggle="buttons"]')[0];
            if (i) {
                var r = this._element.querySelector('input:not([type="hidden"])');
                if (r) {
                    if ("radio" === r.type)
                        if (r.checked && this._element.classList.contains(w))
                            e = !1;
                        else {
                            var o = i.querySelector(".active");
                            o && t(o).removeClass(w)
                        }
                    if (e) {
                        if (r.hasAttribute("disabled") || i.hasAttribute("disabled") || r.classList.contains("disabled") || i.classList.contains("disabled"))
                            return;
                        r.checked = !this._element.classList.contains(w),
                        t(r).trigger("change")
                    }
                    r.focus(),
                    n = !1
                }
            }
            n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)),
            e && t(this._element).toggleClass(w)
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, g),
            this._element = null
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(g);
                i || (i = new e(this),
                t(this).data(g, i)),
                "toggle" === n && i[n]()
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        e
    }();
    t(document).on(x.CLICK_DATA_API, _, function(e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass("btn") || (n = t(n).closest(E)),
        T._jQueryInterface.call(t(n), "toggle")
    }).on(x.FOCUS_BLUR_DATA_API, _, function(e) {
        var n = t(e.target).closest(E)[0];
        t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }),
    t.fn[m] = T._jQueryInterface,
    t.fn[m].Constructor = T,
    t.fn[m].noConflict = function() {
        return t.fn[m] = b,
        T._jQueryInterface
    }
    ;
    var C = "carousel"
      , S = "bs.carousel"
      , j = "." + S
      , A = ".data-api"
      , D = t.fn[C]
      , N = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , k = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , O = "next"
      , I = "prev"
      , L = {
        SLIDE: "slide" + j,
        SLID: "slid" + j,
        KEYDOWN: "keydown" + j,
        MOUSEENTER: "mouseenter" + j,
        MOUSELEAVE: "mouseleave" + j,
        TOUCHSTART: "touchstart" + j,
        TOUCHMOVE: "touchmove" + j,
        TOUCHEND: "touchend" + j,
        POINTERDOWN: "pointerdown" + j,
        POINTERUP: "pointerup" + j,
        DRAG_START: "dragstart" + j,
        LOAD_DATA_API: "load" + j + A,
        CLICK_DATA_API: "click" + j + A
    }
      , P = "active"
      , q = ".active.carousel-item"
      , H = ".carousel-indicators"
      , R = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , M = function() {
        function e(e, t) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(t),
            this._element = e,
            this._indicatorsElement = this._element.querySelector(H),
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var n = e.prototype;
        return n.next = function() {
            this._isSliding || this._slide(O)
        }
        ,
        n.nextWhenVisible = function() {
            !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
        }
        ,
        n.prev = function() {
            this._isSliding || this._slide(I)
        }
        ,
        n.pause = function(e) {
            e || (this._isPaused = !0),
            this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (l.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        n.cycle = function(e) {
            e || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        n.to = function(e) {
            var n = this;
            this._activeElement = this._element.querySelector(q);
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                    t(this._element).one(L.SLID, function() {
                        return n.to(e)
                    });
                else {
                    if (i === e)
                        return this.pause(),
                        void this.cycle();
                    var r = i < e ? O : I;
                    this._slide(r, this._items[e])
                }
        }
        ,
        n.dispose = function() {
            t(this._element).off(j),
            t.removeData(this._element, S),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        n._getConfig = function(e) {
            return e = o({}, N, e),
            l.typeCheckConfig(C, e, k),
            e
        }
        ,
        n._handleSwipe = function() {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                0 < t && this.prev(),
                t < 0 && this.next()
            }
        }
        ,
        n._addEventListeners = function() {
            var e = this;
            this._config.keyboard && t(this._element).on(L.KEYDOWN, function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && t(this._element).on(L.MOUSEENTER, function(t) {
                return e.pause(t)
            }).on(L.MOUSELEAVE, function(t) {
                return e.cycle(t)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        n._addTouchEventListeners = function() {
            var e = this;
            if (this._touchSupported) {
                var n = function(t) {
                    e._pointerEvent && R[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                }
                  , i = function(t) {
                    e._pointerEvent && R[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    "hover" === e._config.pause && (e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval))
                };
                t(this._element.querySelectorAll(".carousel-item img")).on(L.DRAG_START, function(e) {
                    return e.preventDefault()
                }),
                this._pointerEvent ? (t(this._element).on(L.POINTERDOWN, function(e) {
                    return n(e)
                }),
                t(this._element).on(L.POINTERUP, function(e) {
                    return i(e)
                }),
                this._element.classList.add("pointer-event")) : (t(this._element).on(L.TOUCHSTART, function(e) {
                    return n(e)
                }),
                t(this._element).on(L.TOUCHMOVE, function(t) {
                    var n;
                    (n = t).originalEvent.touches && 1 < n.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = n.originalEvent.touches[0].clientX - e.touchStartX
                }),
                t(this._element).on(L.TOUCHEND, function(e) {
                    return i(e)
                }))
            }
        }
        ,
        n._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                case 37:
                    e.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    e.preventDefault(),
                    this.next()
                }
        }
        ,
        n._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [],
            this._items.indexOf(e)
        }
        ,
        n._getItemByDirection = function(e, t) {
            var n = e === O
              , i = e === I
              , r = this._getItemIndex(t)
              , o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap)
                return t;
            var s = (r + (e === I ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        n._triggerSlideEvent = function(e, n) {
            var i = this._getItemIndex(e)
              , r = this._getItemIndex(this._element.querySelector(q))
              , o = t.Event(L.SLIDE, {
                relatedTarget: e,
                direction: n,
                from: r,
                to: i
            });
            return t(this._element).trigger(o),
            o
        }
        ,
        n._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                t(n).removeClass(P);
                var i = this._indicatorsElement.children[this._getItemIndex(e)];
                i && t(i).addClass(P)
            }
        }
        ,
        n._slide = function(e, n) {
            var i, r, o, s = this, a = this._element.querySelector(q), c = this._getItemIndex(a), u = n || a && this._getItemByDirection(e, a), f = this._getItemIndex(u), d = Boolean(this._interval);
            if (o = e === O ? (i = "carousel-item-left",
            r = "carousel-item-next",
            "left") : (i = "carousel-item-right",
            r = "carousel-item-prev",
            "right"),
            u && t(u).hasClass(P))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && a && u) {
                this._isSliding = !0,
                d && this.pause(),
                this._setActiveIndicatorElement(u);
                var h = t.Event(L.SLID, {
                    relatedTarget: u,
                    direction: o,
                    from: c,
                    to: f
                });
                if (t(this._element).hasClass("slide")) {
                    t(u).addClass(r),
                    l.reflow(u),
                    t(a).addClass(i),
                    t(u).addClass(i);
                    var p = parseInt(u.getAttribute("data-interval"), 10);
                    this._config.interval = p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    p) : this._config.defaultInterval || this._config.interval;
                    var m = l.getTransitionDurationFromElement(a);
                    t(a).one(l.TRANSITION_END, function() {
                        t(u).removeClass(i + " " + r).addClass(P),
                        t(a).removeClass(P + " " + r + " " + i),
                        s._isSliding = !1,
                        setTimeout(function() {
                            return t(s._element).trigger(h)
                        }, 0)
                    }).emulateTransitionEnd(m)
                } else
                    t(a).removeClass(P),
                    t(u).addClass(P),
                    this._isSliding = !1,
                    t(this._element).trigger(h);
                d && this.cycle()
            }
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(S)
                  , r = o({}, N, t(this).data());
                "object" == typeof n && (r = o({}, r, n));
                var s = "string" == typeof n ? n : r.slide;
                if (i || (i = new e(this,r),
                t(this).data(S, i)),
                "number" == typeof n)
                    i.to(n);
                else if ("string" == typeof s) {
                    if (void 0 === i[s])
                        throw new TypeError('No method named "' + s + '"');
                    i[s]()
                } else
                    r.interval && r.ride && (i.pause(),
                    i.cycle())
            })
        }
        ,
        e._dataApiClickHandler = function(n) {
            var i = l.getSelectorFromElement(this);
            if (i) {
                var r = t(i)[0];
                if (r && t(r).hasClass("carousel")) {
                    var s = o({}, t(r).data(), t(this).data())
                      , a = this.getAttribute("data-slide-to");
                    a && (s.interval = !1),
                    e._jQueryInterface.call(t(r), s),
                    a && t(r).data(S).to(a),
                    n.preventDefault()
                }
            }
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return N
            }
        }]),
        e
    }();
    t(document).on(L.CLICK_DATA_API, "[data-slide], [data-slide-to]", M._dataApiClickHandler),
    t(window).on(L.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
            var r = t(e[n]);
            M._jQueryInterface.call(r, r.data())
        }
    }),
    t.fn[C] = M._jQueryInterface,
    t.fn[C].Constructor = M,
    t.fn[C].noConflict = function() {
        return t.fn[C] = D,
        M._jQueryInterface
    }
    ;
    var F = "collapse"
      , W = "bs.collapse"
      , U = "." + W
      , B = t.fn[F]
      , Q = {
        toggle: !0,
        parent: ""
    }
      , K = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , $ = {
        SHOW: "show" + U,
        SHOWN: "shown" + U,
        HIDE: "hide" + U,
        HIDDEN: "hidden" + U,
        CLICK_DATA_API: "click" + U + ".data-api"
    }
      , z = "show"
      , X = "collapse"
      , V = "collapsing"
      , Y = "collapsed"
      , G = '[data-toggle="collapse"]'
      , J = function() {
        function e(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(G)), i = 0, r = n.length; i < r; i++) {
                var o = n[i]
                  , s = l.getSelectorFromElement(o)
                  , a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                    return t === e
                });
                null !== s && 0 < a.length && (this._selector = s,
                this._triggerArray.push(o))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var n = e.prototype;
        return n.toggle = function() {
            t(this._element).hasClass(z) ? this.hide() : this.show()
        }
        ,
        n.show = function() {
            var n, i, r = this;
            if (!(this._isTransitioning || t(this._element).hasClass(z) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(X)
            })).length && (n = null),
            n && (i = t(n).not(this._selector).data(W)) && i._isTransitioning))) {
                var o = t.Event($.SHOW);
                if (t(this._element).trigger(o),
                !o.isDefaultPrevented()) {
                    n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"),
                    i || t(n).data(W, null));
                    var s = this._getDimension();
                    t(this._element).removeClass(X).addClass(V),
                    this._element.style[s] = 0,
                    this._triggerArray.length && t(this._triggerArray).removeClass(Y).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var a = "scroll" + (s[0].toUpperCase() + s.slice(1))
                      , c = l.getTransitionDurationFromElement(this._element);
                    t(this._element).one(l.TRANSITION_END, function() {
                        t(r._element).removeClass(V).addClass(X).addClass(z),
                        r._element.style[s] = "",
                        r.setTransitioning(!1),
                        t(r._element).trigger($.SHOWN)
                    }).emulateTransitionEnd(c),
                    this._element.style[s] = this._element[a] + "px"
                }
            }
        }
        ,
        n.hide = function() {
            var e = this;
            if (!this._isTransitioning && t(this._element).hasClass(z)) {
                var n = t.Event($.HIDE);
                if (t(this._element).trigger(n),
                !n.isDefaultPrevented()) {
                    var i = this._getDimension();
                    this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                    l.reflow(this._element),
                    t(this._element).addClass(V).removeClass(X).removeClass(z);
                    var r = this._triggerArray.length;
                    if (0 < r)
                        for (var o = 0; o < r; o++) {
                            var s = this._triggerArray[o]
                              , a = l.getSelectorFromElement(s);
                            null !== a && (t([].slice.call(document.querySelectorAll(a))).hasClass(z) || t(s).addClass(Y).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0),
                    this._element.style[i] = "";
                    var c = l.getTransitionDurationFromElement(this._element);
                    t(this._element).one(l.TRANSITION_END, function() {
                        e.setTransitioning(!1),
                        t(e._element).removeClass(V).addClass(X).trigger($.HIDDEN)
                    }).emulateTransitionEnd(c)
                }
            }
        }
        ,
        n.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, W),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        n._getConfig = function(e) {
            return (e = o({}, Q, e)).toggle = Boolean(e.toggle),
            l.typeCheckConfig(F, e, K),
            e
        }
        ,
        n._getDimension = function() {
            return t(this._element).hasClass("width") ? "width" : "height"
        }
        ,
        n._getParent = function() {
            var n, i = this;
            l.isElement(this._config.parent) ? (n = this._config.parent,
            void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
            var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , o = [].slice.call(n.querySelectorAll(r));
            return t(o).each(function(t, n) {
                i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
            }),
            n
        }
        ,
        n._addAriaAndCollapsedClass = function(e, n) {
            var i = t(e).hasClass(z);
            n.length && t(n).toggleClass(Y, !i).attr("aria-expanded", i)
        }
        ,
        e._getTargetFromElement = function(e) {
            var t = l.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this)
                  , r = i.data(W)
                  , s = o({}, Q, i.data(), "object" == typeof n && n ? n : {});
                if (!r && s.toggle && /show|hide/.test(n) && (s.toggle = !1),
                r || (r = new e(this,s),
                i.data(W, r)),
                "string" == typeof n) {
                    if (void 0 === r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n]()
                }
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Q
            }
        }]),
        e
    }();
    t(document).on($.CLICK_DATA_API, G, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this)
          , i = l.getSelectorFromElement(this)
          , r = [].slice.call(document.querySelectorAll(i));
        t(r).each(function() {
            var e = t(this)
              , i = e.data(W) ? "toggle" : n.data();
            J._jQueryInterface.call(e, i)
        })
    }),
    t.fn[F] = J._jQueryInterface,
    t.fn[F].Constructor = J,
    t.fn[F].noConflict = function() {
        return t.fn[F] = B,
        J._jQueryInterface
    }
    ;
    var Z = "dropdown"
      , ee = "bs.dropdown"
      , te = "." + ee
      , ne = ".data-api"
      , ie = t.fn[Z]
      , re = new RegExp("38|40|27")
      , oe = {
        HIDE: "hide" + te,
        HIDDEN: "hidden" + te,
        SHOW: "show" + te,
        SHOWN: "shown" + te,
        CLICK: "click" + te,
        CLICK_DATA_API: "click" + te + ne,
        KEYDOWN_DATA_API: "keydown" + te + ne,
        KEYUP_DATA_API: "keyup" + te + ne
    }
      , se = "disabled"
      , ae = "show"
      , le = "dropdown-menu-right"
      , ce = '[data-toggle="dropdown"]'
      , ue = ".dropdown-menu"
      , fe = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }
      , de = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }
      , he = function() {
        function e(e, t) {
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var i = e.prototype;
        return i.toggle = function() {
            if (!this._element.disabled && !t(this._element).hasClass(se)) {
                var i = e._getParentFromElement(this._element)
                  , r = t(this._menu).hasClass(ae);
                if (e._clearMenus(),
                !r) {
                    var o = {
                        relatedTarget: this._element
                    }
                      , s = t.Event(oe.SHOW, o);
                    if (t(i).trigger(s),
                    !s.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if (void 0 === n)
                                throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var a = this._element;
                            "parent" === this._config.reference ? a = i : l.isElement(this._config.reference) && (a = this._config.reference,
                            void 0 !== this._config.reference.jquery && (a = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary && t(i).addClass("position-static"),
                            this._popper = new n(a,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === t(i).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        t(this._menu).toggleClass(ae),
                        t(i).toggleClass(ae).trigger(t.Event(oe.SHOWN, o))
                    }
                }
            }
        }
        ,
        i.show = function() {
            if (!(this._element.disabled || t(this._element).hasClass(se) || t(this._menu).hasClass(ae))) {
                var n = {
                    relatedTarget: this._element
                }
                  , i = t.Event(oe.SHOW, n)
                  , r = e._getParentFromElement(this._element);
                t(r).trigger(i),
                i.isDefaultPrevented() || (t(this._menu).toggleClass(ae),
                t(r).toggleClass(ae).trigger(t.Event(oe.SHOWN, n)))
            }
        }
        ,
        i.hide = function() {
            if (!this._element.disabled && !t(this._element).hasClass(se) && t(this._menu).hasClass(ae)) {
                var n = {
                    relatedTarget: this._element
                }
                  , i = t.Event(oe.HIDE, n)
                  , r = e._getParentFromElement(this._element);
                t(r).trigger(i),
                i.isDefaultPrevented() || (t(this._menu).toggleClass(ae),
                t(r).toggleClass(ae).trigger(t.Event(oe.HIDDEN, n)))
            }
        }
        ,
        i.dispose = function() {
            t.removeData(this._element, ee),
            t(this._element).off(te),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        i.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        i._addEventListeners = function() {
            var e = this;
            t(this._element).on(oe.CLICK, function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        i._getConfig = function(e) {
            return e = o({}, this.constructor.Default, t(this._element).data(), e),
            l.typeCheckConfig(Z, e, this.constructor.DefaultType),
            e
        }
        ,
        i._getMenuElement = function() {
            if (!this._menu) {
                var t = e._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(ue))
            }
            return this._menu
        }
        ,
        i._getPlacement = function() {
            var e = t(this._element.parentNode)
              , n = "bottom-start";
            return e.hasClass("dropup") ? (n = "top-start",
            t(this._menu).hasClass(le) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(le) && (n = "bottom-end"),
            n
        }
        ,
        i._detectNavbar = function() {
            return 0 < t(this._element).closest(".navbar").length
        }
        ,
        i._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = o({}, t.offsets, e._config.offset(t.offsets, e._element) || {}),
                t
            }
            : t.offset = this._config.offset,
            t
        }
        ,
        i._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (e.modifiers.applyStyle = {
                enabled: !1
            }),
            e
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(ee);
                if (i || (i = new e(this,"object" == typeof n ? n : null),
                t(this).data(ee, i)),
                "string" == typeof n) {
                    if (void 0 === i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        e._clearMenus = function(n) {
            if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                for (var i = [].slice.call(document.querySelectorAll(ce)), r = 0, o = i.length; r < o; r++) {
                    var s = e._getParentFromElement(i[r])
                      , a = t(i[r]).data(ee)
                      , l = {
                        relatedTarget: i[r]
                    };
                    if (n && "click" === n.type && (l.clickEvent = n),
                    a) {
                        var c = a._menu;
                        if (t(s).hasClass(ae) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                            var u = t.Event(oe.HIDE, l);
                            t(s).trigger(u),
                            u.isDefaultPrevented() || ("ontouchstart"in document.documentElement && t(document.body).children().off("mouseover", null, t.noop),
                            i[r].setAttribute("aria-expanded", "false"),
                            t(c).removeClass(ae),
                            t(s).removeClass(ae).trigger(t.Event(oe.HIDDEN, l)))
                        }
                    }
                }
        }
        ,
        e._getParentFromElement = function(e) {
            var t, n = l.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)),
            t || e.parentNode
        }
        ,
        e._dataApiKeydownHandler = function(n) {
            if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(ue).length)) : re.test(n.which)) && (n.preventDefault(),
            n.stopPropagation(),
            !this.disabled && !t(this).hasClass(se))) {
                var i = e._getParentFromElement(this)
                  , r = t(i).hasClass(ae);
                if (r && (!r || 27 !== n.which && 32 !== n.which)) {
                    var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                    if (0 !== o.length) {
                        var s = o.indexOf(n.target);
                        38 === n.which && 0 < s && s--,
                        40 === n.which && s < o.length - 1 && s++,
                        s < 0 && (s = 0),
                        o[s].focus()
                    }
                } else {
                    if (27 === n.which) {
                        var a = i.querySelector(ce);
                        t(a).trigger("focus")
                    }
                    t(this).trigger("click")
                }
            }
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return fe
            }
        }, {
            key: "DefaultType",
            get: function() {
                return de
            }
        }]),
        e
    }();
    t(document).on(oe.KEYDOWN_DATA_API, ce, he._dataApiKeydownHandler).on(oe.KEYDOWN_DATA_API, ue, he._dataApiKeydownHandler).on(oe.CLICK_DATA_API + " " + oe.KEYUP_DATA_API, he._clearMenus).on(oe.CLICK_DATA_API, ce, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        he._jQueryInterface.call(t(this), "toggle")
    }).on(oe.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }),
    t.fn[Z] = he._jQueryInterface,
    t.fn[Z].Constructor = he,
    t.fn[Z].noConflict = function() {
        return t.fn[Z] = ie,
        he._jQueryInterface
    }
    ;
    var pe = "modal"
      , me = "bs.modal"
      , ge = "." + me
      , ve = t.fn[pe]
      , ye = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , be = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , we = {
        HIDE: "hide" + ge,
        HIDDEN: "hidden" + ge,
        SHOW: "show" + ge,
        SHOWN: "shown" + ge,
        FOCUSIN: "focusin" + ge,
        RESIZE: "resize" + ge,
        CLICK_DISMISS: "click.dismiss" + ge,
        KEYDOWN_DISMISS: "keydown.dismiss" + ge,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ge,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ge,
        CLICK_DATA_API: "click" + ge + ".data-api"
    }
      , _e = "modal-open"
      , Ee = "fade"
      , xe = "show"
      , Te = ".modal-dialog"
      , Ce = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , Se = ".sticky-top"
      , je = function() {
        function e(e, t) {
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = e.querySelector(Te),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var n = e.prototype;
        return n.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        n.show = function(e) {
            var n = this;
            if (!this._isShown && !this._isTransitioning) {
                t(this._element).hasClass(Ee) && (this._isTransitioning = !0);
                var i = t.Event(we.SHOW, {
                    relatedTarget: e
                });
                t(this._element).trigger(i),
                this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                t(this._element).on(we.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                    return n.hide(e)
                }),
                t(this._dialog).on(we.MOUSEDOWN_DISMISS, function() {
                    t(n._element).one(we.MOUSEUP_DISMISS, function(e) {
                        t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return n._showElement(e)
                }))
            }
        }
        ,
        n.hide = function(e) {
            var n = this;
            if (e && e.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var i = t.Event(we.HIDE);
                if (t(this._element).trigger(i),
                this._isShown && !i.isDefaultPrevented()) {
                    this._isShown = !1;
                    var r = t(this._element).hasClass(Ee);
                    if (r && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(document).off(we.FOCUSIN),
                    t(this._element).removeClass(xe),
                    t(this._element).off(we.CLICK_DISMISS),
                    t(this._dialog).off(we.MOUSEDOWN_DISMISS),
                    r) {
                        var o = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, function(e) {
                            return n._hideModal(e)
                        }).emulateTransitionEnd(o)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        n.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
                return t(e).off(ge)
            }),
            t(document).off(we.FOCUSIN),
            t.removeData(this._element, me),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        n.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        n._getConfig = function(e) {
            return e = o({}, ye, e),
            l.typeCheckConfig(pe, e, be),
            e
        }
        ,
        n._showElement = function(e) {
            var n = this
              , i = t(this._element).hasClass(Ee);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            t(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0,
            i && l.reflow(this._element),
            t(this._element).addClass(xe),
            this._config.focus && this._enforceFocus();
            var r = t.Event(we.SHOWN, {
                relatedTarget: e
            })
              , o = function() {
                n._config.focus && n._element.focus(),
                n._isTransitioning = !1,
                t(n._element).trigger(r)
            };
            if (i) {
                var s = l.getTransitionDurationFromElement(this._dialog);
                t(this._dialog).one(l.TRANSITION_END, o).emulateTransitionEnd(s)
            } else
                o()
        }
        ,
        n._enforceFocus = function() {
            var e = this;
            t(document).off(we.FOCUSIN).on(we.FOCUSIN, function(n) {
                document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
            })
        }
        ,
        n._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard ? t(this._element).on(we.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(),
                e.hide())
            }) : this._isShown || t(this._element).off(we.KEYDOWN_DISMISS)
        }
        ,
        n._setResizeEvent = function() {
            var e = this;
            this._isShown ? t(window).on(we.RESIZE, function(t) {
                return e.handleUpdate(t)
            }) : t(window).off(we.RESIZE)
        }
        ,
        n._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                t(document.body).removeClass(_e),
                e._resetAdjustments(),
                e._resetScrollbar(),
                t(e._element).trigger(we.HIDDEN)
            })
        }
        ,
        n._removeBackdrop = function() {
            this._backdrop && (t(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        n._showBackdrop = function(e) {
            var n = this
              , i = t(this._element).hasClass(Ee) ? Ee : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                i && this._backdrop.classList.add(i),
                t(this._backdrop).appendTo(document.body),
                t(this._element).on(we.CLICK_DISMISS, function(e) {
                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                }),
                i && l.reflow(this._backdrop),
                t(this._backdrop).addClass(xe),
                !e)
                    return;
                if (!i)
                    return void e();
                var r = l.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop).one(l.TRANSITION_END, e).emulateTransitionEnd(r)
            } else if (!this._isShown && this._backdrop) {
                t(this._backdrop).removeClass(xe);
                var o = function() {
                    n._removeBackdrop(),
                    e && e()
                };
                if (t(this._element).hasClass(Ee)) {
                    var s = l.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(l.TRANSITION_END, o).emulateTransitionEnd(s)
                } else
                    o()
            } else
                e && e()
        }
        ,
        n._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        n._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        n._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        n._setScrollbar = function() {
            var e = this;
            if (this._isBodyOverflowing) {
                var n = [].slice.call(document.querySelectorAll(Ce))
                  , i = [].slice.call(document.querySelectorAll(Se));
                t(n).each(function(n, i) {
                    var r = i.style.paddingRight
                      , o = t(i).css("padding-right");
                    t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                }),
                t(i).each(function(n, i) {
                    var r = i.style.marginRight
                      , o = t(i).css("margin-right");
                    t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                });
                var r = document.body.style.paddingRight
                  , o = t(document.body).css("padding-right");
                t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
            }
            t(document.body).addClass(_e)
        }
        ,
        n._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(Ce));
            t(e).each(function(e, n) {
                var i = t(n).data("padding-right");
                t(n).removeData("padding-right"),
                n.style.paddingRight = i || ""
            });
            var n = [].slice.call(document.querySelectorAll("" + Se));
            t(n).each(function(e, n) {
                var i = t(n).data("margin-right");
                void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
            });
            var i = t(document.body).data("padding-right");
            t(document.body).removeData("padding-right"),
            document.body.style.paddingRight = i || ""
        }
        ,
        n._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure",
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        ,
        e._jQueryInterface = function(n, i) {
            return this.each(function() {
                var r = t(this).data(me)
                  , s = o({}, ye, t(this).data(), "object" == typeof n && n ? n : {});
                if (r || (r = new e(this,s),
                t(this).data(me, r)),
                "string" == typeof n) {
                    if (void 0 === r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n](i)
                } else
                    s.show && r.show(i)
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ye
            }
        }]),
        e
    }();
    t(document).on(we.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var n, i = this, r = l.getSelectorFromElement(this);
        r && (n = document.querySelector(r));
        var s = t(n).data(me) ? "toggle" : o({}, t(n).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var a = t(n).one(we.SHOW, function(e) {
            e.isDefaultPrevented() || a.one(we.HIDDEN, function() {
                t(i).is(":visible") && i.focus()
            })
        });
        je._jQueryInterface.call(t(n), s, this)
    }),
    t.fn[pe] = je._jQueryInterface,
    t.fn[pe].Constructor = je,
    t.fn[pe].noConflict = function() {
        return t.fn[pe] = ve,
        je._jQueryInterface
    }
    ;
    var Ae = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , De = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , Ne = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , ke = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i
      , Oe = "tooltip"
      , Ie = "bs.tooltip"
      , Le = "." + Ie
      , Pe = t.fn[Oe]
      , qe = "bs-tooltip"
      , He = new RegExp("(^|\\s)" + qe + "\\S+","g")
      , Re = ["sanitize", "whiteList", "sanitizeFn"]
      , Me = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object"
    }
      , Fe = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , We = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: De
    }
      , Ue = "show"
      , Be = {
        HIDE: "hide" + Le,
        HIDDEN: "hidden" + Le,
        SHOW: "show" + Le,
        SHOWN: "shown" + Le,
        INSERTED: "inserted" + Le,
        CLICK: "click" + Le,
        FOCUSIN: "focusin" + Le,
        FOCUSOUT: "focusout" + Le,
        MOUSEENTER: "mouseenter" + Le,
        MOUSELEAVE: "mouseleave" + Le
    }
      , Qe = "fade"
      , Ke = "show"
      , $e = "hover"
      , ze = "focus"
      , Xe = function() {
        function e(e, t) {
            if (void 0 === n)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        var i = e.prototype;
        return i.enable = function() {
            this._isEnabled = !0
        }
        ,
        i.disable = function() {
            this._isEnabled = !1
        }
        ,
        i.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        i.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var n = this.constructor.DATA_KEY
                      , i = t(e.currentTarget).data(n);
                    i || (i = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    t(e.currentTarget).data(n, i)),
                    i._activeTrigger.click = !i._activeTrigger.click,
                    i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (t(this.getTipElement()).hasClass(Ke))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        i.dispose = function() {
            clearTimeout(this._timeout),
            t.removeData(this.element, this.constructor.DATA_KEY),
            t(this.element).off(this.constructor.EVENT_KEY),
            t(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && t(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        i.show = function() {
            var e = this;
            if ("none" === t(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var i = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                t(this.element).trigger(i);
                var r = l.findShadowRoot(this.element)
                  , o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                if (i.isDefaultPrevented() || !o)
                    return;
                var s = this.getTipElement()
                  , a = l.getUID(this.constructor.NAME);
                s.setAttribute("id", a),
                this.element.setAttribute("aria-describedby", a),
                this.setContent(),
                this.config.animation && t(s).addClass(Qe);
                var c = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement
                  , u = this._getAttachment(c);
                this.addAttachmentClass(u);
                var f = this._getContainer();
                t(s).data(this.constructor.DATA_KEY, this),
                t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f),
                t(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new n(this.element,s,{
                    placement: u,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }),
                t(s).addClass(Ke),
                "ontouchstart"in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                var d = function() {
                    e.config.animation && e._fixTransition();
                    var n = e._hoverState;
                    e._hoverState = null,
                    t(e.element).trigger(e.constructor.Event.SHOWN),
                    "out" === n && e._leave(null, e)
                };
                if (t(this.tip).hasClass(Qe)) {
                    var h = l.getTransitionDurationFromElement(this.tip);
                    t(this.tip).one(l.TRANSITION_END, d).emulateTransitionEnd(h)
                } else
                    d()
            }
        }
        ,
        i.hide = function(e) {
            var n = this
              , i = this.getTipElement()
              , r = t.Event(this.constructor.Event.HIDE)
              , o = function() {
                n._hoverState !== Ue && i.parentNode && i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                t(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                e && e()
            };
            if (t(this.element).trigger(r),
            !r.isDefaultPrevented()) {
                if (t(i).removeClass(Ke),
                "ontouchstart"in document.documentElement && t(document.body).children().off("mouseover", null, t.noop),
                this._activeTrigger.click = !1,
                this._activeTrigger[ze] = !1,
                this._activeTrigger[$e] = !1,
                t(this.tip).hasClass(Qe)) {
                    var s = l.getTransitionDurationFromElement(i);
                    t(i).one(l.TRANSITION_END, o).emulateTransitionEnd(s)
                } else
                    o();
                this._hoverState = ""
            }
        }
        ,
        i.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        i.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        i.addAttachmentClass = function(e) {
            t(this.getTipElement()).addClass(qe + "-" + e)
        }
        ,
        i.getTipElement = function() {
            return this.tip = this.tip || t(this.config.template)[0],
            this.tip
        }
        ,
        i.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()),
            t(e).removeClass(Qe + " " + Ke)
        }
        ,
        i.setElementContent = function(e, n) {
            "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = s(n, this.config.whiteList, this.config.sanitizeFn)),
            e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
        }
        ,
        i.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            e
        }
        ,
        i._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this.config.offset ? t.fn = function(t) {
                return t.offsets = o({}, t.offsets, e.config.offset(t.offsets, e.element) || {}),
                t
            }
            : t.offset = this.config.offset,
            t
        }
        ,
        i._getContainer = function() {
            return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
        }
        ,
        i._getAttachment = function(e) {
            return Fe[e.toUpperCase()]
        }
        ,
        i._setListeners = function() {
            var e = this;
            this.config.trigger.split(" ").forEach(function(n) {
                if ("click" === n)
                    t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                else if ("manual" !== n) {
                    var i = n === $e ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                      , r = n === $e ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                    t(e.element).on(i, e.config.selector, function(t) {
                        return e._enter(t)
                    }).on(r, e.config.selector, function(t) {
                        return e._leave(t)
                    })
                }
            }),
            t(this.element).closest(".modal").on("hide.bs.modal", function() {
                e.element && e.hide()
            }),
            this.config.selector ? this.config = o({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        i._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        i._enter = function(e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            t(e.currentTarget).data(i, n)),
            e && (n._activeTrigger["focusin" === e.type ? ze : $e] = !0),
            t(n.getTipElement()).hasClass(Ke) || n._hoverState === Ue ? n._hoverState = Ue : (clearTimeout(n._timeout),
            n._hoverState = Ue,
            n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                n._hoverState === Ue && n.show()
            }, n.config.delay.show) : n.show())
        }
        ,
        i._leave = function(e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            t(e.currentTarget).data(i, n)),
            e && (n._activeTrigger["focusout" === e.type ? ze : $e] = !1),
            n._isWithActiveTrigger() || (clearTimeout(n._timeout),
            n._hoverState = "out",
            n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                "out" === n._hoverState && n.hide()
            }, n.config.delay.hide) : n.hide())
        }
        ,
        i._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        ,
        i._getConfig = function(e) {
            var n = t(this.element).data();
            return Object.keys(n).forEach(function(e) {
                -1 !== Re.indexOf(e) && delete n[e]
            }),
            "number" == typeof (e = o({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            l.typeCheckConfig(Oe, e, this.constructor.DefaultType),
            e.sanitize && (e.template = s(e.template, e.whiteList, e.sanitizeFn)),
            e
        }
        ,
        i._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }
        ,
        i._cleanTipClass = function() {
            var e = t(this.getTipElement())
              , n = e.attr("class").match(He);
            null !== n && n.length && e.removeClass(n.join(""))
        }
        ,
        i._handlePopperPlacementChange = function(e) {
            var t = e.instance;
            this.tip = t.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement))
        }
        ,
        i._fixTransition = function() {
            var e = this.getTipElement()
              , n = this.config.animation;
            null === e.getAttribute("x-placement") && (t(e).removeClass(Qe),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = n)
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(Ie)
                  , r = "object" == typeof n && n;
                if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this,r),
                t(this).data(Ie, i)),
                "string" == typeof n)) {
                    if (void 0 === i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return We
            }
        }, {
            key: "NAME",
            get: function() {
                return Oe
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ie
            }
        }, {
            key: "Event",
            get: function() {
                return Be
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Le
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Me
            }
        }]),
        e
    }();
    t.fn[Oe] = Xe._jQueryInterface,
    t.fn[Oe].Constructor = Xe,
    t.fn[Oe].noConflict = function() {
        return t.fn[Oe] = Pe,
        Xe._jQueryInterface
    }
    ;
    var Ve = "popover"
      , Ye = "bs.popover"
      , Ge = "." + Ye
      , Je = t.fn[Ve]
      , Ze = "bs-popover"
      , et = new RegExp("(^|\\s)" + Ze + "\\S+","g")
      , tt = o({}, Xe.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , nt = o({}, Xe.DefaultType, {
        content: "(string|element|function)"
    })
      , it = {
        HIDE: "hide" + Ge,
        HIDDEN: "hidden" + Ge,
        SHOW: "show" + Ge,
        SHOWN: "shown" + Ge,
        INSERTED: "inserted" + Ge,
        CLICK: "click" + Ge,
        FOCUSIN: "focusin" + Ge,
        FOCUSOUT: "focusout" + Ge,
        MOUSEENTER: "mouseenter" + Ge,
        MOUSELEAVE: "mouseleave" + Ge
    }
      , rt = function(e) {
        function n() {
            return e.apply(this, arguments) || this
        }
        var i, o;
        o = e,
        (i = n).prototype = Object.create(o.prototype),
        (i.prototype.constructor = i).__proto__ = o;
        var s = n.prototype;
        return s.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        s.addAttachmentClass = function(e) {
            t(this.getTipElement()).addClass(Ze + "-" + e)
        }
        ,
        s.getTipElement = function() {
            return this.tip = this.tip || t(this.config.template)[0],
            this.tip
        }
        ,
        s.setContent = function() {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(".popover-header"), this.getTitle());
            var n = this._getContent();
            "function" == typeof n && (n = n.call(this.element)),
            this.setElementContent(e.find(".popover-body"), n),
            e.removeClass("fade show")
        }
        ,
        s._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        s._cleanTipClass = function() {
            var e = t(this.getTipElement())
              , n = e.attr("class").match(et);
            null !== n && 0 < n.length && e.removeClass(n.join(""))
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var i = t(this).data(Ye)
                  , r = "object" == typeof e ? e : null;
                if ((i || !/dispose|hide/.test(e)) && (i || (i = new n(this,r),
                t(this).data(Ye, i)),
                "string" == typeof e)) {
                    if (void 0 === i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            })
        }
        ,
        r(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return tt
            }
        }, {
            key: "NAME",
            get: function() {
                return Ve
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ye
            }
        }, {
            key: "Event",
            get: function() {
                return it
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Ge
            }
        }, {
            key: "DefaultType",
            get: function() {
                return nt
            }
        }]),
        n
    }(Xe);
    t.fn[Ve] = rt._jQueryInterface,
    t.fn[Ve].Constructor = rt,
    t.fn[Ve].noConflict = function() {
        return t.fn[Ve] = Je,
        rt._jQueryInterface
    }
    ;
    var ot = "scrollspy"
      , st = "bs.scrollspy"
      , at = "." + st
      , lt = t.fn[ot]
      , ct = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , ut = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , ft = {
        ACTIVATE: "activate" + at,
        SCROLL: "scroll" + at,
        LOAD_DATA_API: "load" + at + ".data-api"
    }
      , dt = "active"
      , ht = ".nav, .list-group"
      , pt = ".nav-link"
      , mt = ".list-group-item"
      , gt = ".dropdown-item"
      , vt = "position"
      , yt = function() {
        function e(e, n) {
            var i = this;
            this._element = e,
            this._scrollElement = "BODY" === e.tagName ? window : e,
            this._config = this._getConfig(n),
            this._selector = this._config.target + " " + pt + "," + this._config.target + " " + mt + "," + this._config.target + " " + gt,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            t(this._scrollElement).on(ft.SCROLL, function(e) {
                return i._process(e)
            }),
            this.refresh(),
            this._process()
        }
        var n = e.prototype;
        return n.refresh = function() {
            var e = this
              , n = this._scrollElement === this._scrollElement.window ? "offset" : vt
              , i = "auto" === this._config.method ? n : this._config.method
              , r = i === vt ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var n, o = l.getSelectorFromElement(e);
                if (o && (n = document.querySelector(o)),
                n) {
                    var s = n.getBoundingClientRect();
                    if (s.width || s.height)
                        return [t(n)[i]().top + r, o]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, st),
            t(this._scrollElement).off(at),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        n._getConfig = function(e) {
            if ("string" != typeof (e = o({}, ct, "object" == typeof e && e ? e : {})).target) {
                var n = t(e.target).attr("id");
                n || (n = l.getUID(ot),
                t(e.target).attr("id", n)),
                e.target = "#" + n
            }
            return l.typeCheckConfig(ot, e, ut),
            e
        }
        ,
        n._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        n._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        n._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        n._process = function() {
            var e = this._getScrollTop() + this._config.offset
              , t = this._getScrollHeight()
              , n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(),
            n <= e) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var r = this._offsets.length; r--; )
                    this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
            }
        }
        ,
        n._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var n = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })
              , i = t([].slice.call(document.querySelectorAll(n.join(","))));
            i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(dt),
            i.addClass(dt)) : (i.addClass(dt),
            i.parents(ht).prev(pt + ", " + mt).addClass(dt),
            i.parents(ht).prev(".nav-item").children(pt).addClass(dt)),
            t(this._scrollElement).trigger(ft.ACTIVATE, {
                relatedTarget: e
            })
        }
        ,
        n._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                return e.classList.contains(dt)
            }).forEach(function(e) {
                return e.classList.remove(dt)
            })
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(st);
                if (i || (i = new e(this,"object" == typeof n && n),
                t(this).data(st, i)),
                "string" == typeof n) {
                    if (void 0 === i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ct
            }
        }]),
        e
    }();
    t(window).on(ft.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--; ) {
            var i = t(e[n]);
            yt._jQueryInterface.call(i, i.data())
        }
    }),
    t.fn[ot] = yt._jQueryInterface,
    t.fn[ot].Constructor = yt,
    t.fn[ot].noConflict = function() {
        return t.fn[ot] = lt,
        yt._jQueryInterface
    }
    ;
    var bt = "bs.tab"
      , wt = "." + bt
      , _t = t.fn.tab
      , Et = {
        HIDE: "hide" + wt,
        HIDDEN: "hidden" + wt,
        SHOW: "show" + wt,
        SHOWN: "shown" + wt,
        CLICK_DATA_API: "click" + wt + ".data-api"
    }
      , xt = "active"
      , Tt = ".active"
      , Ct = "> li > .active"
      , St = function() {
        function e(e) {
            this._element = e
        }
        var n = e.prototype;
        return n.show = function() {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(xt) || t(this._element).hasClass("disabled"))) {
                var n, i, r = t(this._element).closest(".nav, .list-group")[0], o = l.getSelectorFromElement(this._element);
                if (r) {
                    var s = "UL" === r.nodeName || "OL" === r.nodeName ? Ct : Tt;
                    i = (i = t.makeArray(t(r).find(s)))[i.length - 1]
                }
                var a = t.Event(Et.HIDE, {
                    relatedTarget: this._element
                })
                  , c = t.Event(Et.SHOW, {
                    relatedTarget: i
                });
                if (i && t(i).trigger(a),
                t(this._element).trigger(c),
                !c.isDefaultPrevented() && !a.isDefaultPrevented()) {
                    o && (n = document.querySelector(o)),
                    this._activate(this._element, r);
                    var u = function() {
                        var n = t.Event(Et.HIDDEN, {
                            relatedTarget: e._element
                        })
                          , r = t.Event(Et.SHOWN, {
                            relatedTarget: i
                        });
                        t(i).trigger(n),
                        t(e._element).trigger(r)
                    };
                    n ? this._activate(n, n.parentNode, u) : u()
                }
            }
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, bt),
            this._element = null
        }
        ,
        n._activate = function(e, n, i) {
            var r = this
              , o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(Tt) : t(n).find(Ct))[0]
              , s = i && o && t(o).hasClass("fade")
              , a = function() {
                return r._transitionComplete(e, o, i)
            };
            if (o && s) {
                var c = l.getTransitionDurationFromElement(o);
                t(o).removeClass("show").one(l.TRANSITION_END, a).emulateTransitionEnd(c)
            } else
                a()
        }
        ,
        n._transitionComplete = function(e, n, i) {
            if (n) {
                t(n).removeClass(xt);
                var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
                r && t(r).removeClass(xt),
                "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
            }
            if (t(e).addClass(xt),
            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
            l.reflow(e),
            e.classList.contains("fade") && e.classList.add("show"),
            e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                var o = t(e).closest(".dropdown")[0];
                if (o) {
                    var s = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                    t(s).addClass(xt)
                }
                e.setAttribute("aria-expanded", !0)
            }
            i && i()
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this)
                  , r = i.data(bt);
                if (r || (r = new e(this),
                i.data(bt, r)),
                "string" == typeof n) {
                    if (void 0 === r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n]()
                }
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        e
    }();
    t(document).on(Et.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(),
        St._jQueryInterface.call(t(this), "show")
    }),
    t.fn.tab = St._jQueryInterface,
    t.fn.tab.Constructor = St,
    t.fn.tab.noConflict = function() {
        return t.fn.tab = _t,
        St._jQueryInterface
    }
    ;
    var jt = "toast"
      , At = "bs.toast"
      , Dt = "." + At
      , Nt = t.fn[jt]
      , kt = {
        CLICK_DISMISS: "click.dismiss" + Dt,
        HIDE: "hide" + Dt,
        HIDDEN: "hidden" + Dt,
        SHOW: "show" + Dt,
        SHOWN: "shown" + Dt
    }
      , Ot = "show"
      , It = "showing"
      , Lt = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Pt = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , qt = function() {
        function e(e, t) {
            this._element = e,
            this._config = this._getConfig(t),
            this._timeout = null,
            this._setListeners()
        }
        var n = e.prototype;
        return n.show = function() {
            var e = this;
            t(this._element).trigger(kt.SHOW),
            this._config.animation && this._element.classList.add("fade");
            var n = function() {
                e._element.classList.remove(It),
                e._element.classList.add(Ot),
                t(e._element).trigger(kt.SHOWN),
                e._config.autohide && e.hide()
            };
            if (this._element.classList.remove("hide"),
            this._element.classList.add(It),
            this._config.animation) {
                var i = l.getTransitionDurationFromElement(this._element);
                t(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(i)
            } else
                n()
        }
        ,
        n.hide = function(e) {
            var n = this;
            this._element.classList.contains(Ot) && (t(this._element).trigger(kt.HIDE),
            e ? this._close() : this._timeout = setTimeout(function() {
                n._close()
            }, this._config.delay))
        }
        ,
        n.dispose = function() {
            clearTimeout(this._timeout),
            this._timeout = null,
            this._element.classList.contains(Ot) && this._element.classList.remove(Ot),
            t(this._element).off(kt.CLICK_DISMISS),
            t.removeData(this._element, At),
            this._element = null,
            this._config = null
        }
        ,
        n._getConfig = function(e) {
            return e = o({}, Pt, t(this._element).data(), "object" == typeof e && e ? e : {}),
            l.typeCheckConfig(jt, e, this.constructor.DefaultType),
            e
        }
        ,
        n._setListeners = function() {
            var e = this;
            t(this._element).on(kt.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                return e.hide(!0)
            })
        }
        ,
        n._close = function() {
            var e = this
              , n = function() {
                e._element.classList.add("hide"),
                t(e._element).trigger(kt.HIDDEN)
            };
            if (this._element.classList.remove(Ot),
            this._config.animation) {
                var i = l.getTransitionDurationFromElement(this._element);
                t(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(i)
            } else
                n()
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this)
                  , r = i.data(At);
                if (r || (r = new e(this,"object" == typeof n && n),
                i.data(At, r)),
                "string" == typeof n) {
                    if (void 0 === r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n](this)
                }
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Lt
            }
        }, {
            key: "Default",
            get: function() {
                return Pt
            }
        }]),
        e
    }();
    t.fn[jt] = qt._jQueryInterface,
    t.fn[jt].Constructor = qt,
    t.fn[jt].noConflict = function() {
        return t.fn[jt] = Nt,
        qt._jQueryInterface
    }
    ,
    function() {
        if (void 0 === t)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0])
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(),
    e.Util = l,
    e.Alert = p,
    e.Button = T,
    e.Carousel = M,
    e.Collapse = J,
    e.Dropdown = he,
    e.Modal = je,
    e.Popover = rt,
    e.Scrollspy = yt,
    e.Tab = St,
    e.Toast = qt,
    e.Tooltip = Xe,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function() {
    var e, t, n, i, r, o, s, a, l, c, u, f, d, h, p, m, g, v, y, b, w, _, E, x, T, C, S, j, A, D, N, k, O, I, L, P, q, H, R, M, F, W, U, B, Q, K, $, z, X, V = [].slice, Y = {}.hasOwnProperty, G = function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var i in t)
            Y.call(t, i) && (e[i] = t[i]);
        return n.prototype = t.prototype,
        e.prototype = new n,
        e.__super__ = t.prototype,
        e
    }, J = [].indexOf || function(e) {
        for (var t = 0, n = this.length; n > t; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    for (w = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {
            checkInterval: 100,
            selectors: ["body"]
        },
        eventLag: {
            minSamples: 10,
            sampleCount: 3,
            lagThreshold: 3
        },
        ajax: {
            trackMethods: ["GET"],
            trackWebSockets: !0,
            ignoreURLs: []
        }
    },
    A = function() {
        var e;
        return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date
    }
    ,
    N = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
    b = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
    null == N && (N = function(e) {
        return setTimeout(e, 50)
    }
    ,
    b = function(e) {
        return clearTimeout(e)
    }
    ),
    O = function(e) {
        var t, n;
        return t = A(),
        (n = function() {
            var i;
            return (i = A() - t) >= 33 ? (t = A(),
            e(i, function() {
                return N(n)
            })) : setTimeout(n, 33 - i)
        }
        )()
    }
    ,
    k = function() {
        var e, t, n;
        return n = arguments[0],
        t = arguments[1],
        e = 3 <= arguments.length ? V.call(arguments, 2) : [],
        "function" == typeof n[t] ? n[t].apply(n, e) : n[t]
    }
    ,
    _ = function() {
        var e, t, n, i, r, o, s;
        for (t = arguments[0],
        o = 0,
        s = (i = 2 <= arguments.length ? V.call(arguments, 1) : []).length; s > o; o++)
            if (n = i[o])
                for (e in n)
                    Y.call(n, e) && (r = n[e],
                    null != t[e] && "object" == typeof t[e] && null != r && "object" == typeof r ? _(t[e], r) : t[e] = r);
        return t
    }
    ,
    g = function(e) {
        var t, n, i, r, o;
        for (n = t = 0,
        r = 0,
        o = e.length; o > r; r++)
            i = e[r],
            n += Math.abs(i),
            t++;
        return n / t
    }
    ,
    x = function(e, t) {
        var n, i, r;
        if (null == e && (e = "options"),
        null == t && (t = !0),
        r = document.querySelector("[data-pace-" + e + "]")) {
            if (n = r.getAttribute("data-pace-" + e),
            !t)
                return n;
            try {
                return JSON.parse(n)
            } catch (e) {
                return i = e,
                "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", i) : void 0
            }
        }
    }
    ,
    s = function() {
        function e() {}
        return e.prototype.on = function(e, t, n, i) {
            var r;
            return null == i && (i = !1),
            null == this.bindings && (this.bindings = {}),
            null == (r = this.bindings)[e] && (r[e] = []),
            this.bindings[e].push({
                handler: t,
                ctx: n,
                once: i
            })
        }
        ,
        e.prototype.once = function(e, t, n) {
            return this.on(e, t, n, !0)
        }
        ,
        e.prototype.off = function(e, t) {
            var n, i, r;
            if (null != (null != (i = this.bindings) ? i[e] : void 0)) {
                if (null == t)
                    return delete this.bindings[e];
                for (n = 0,
                r = []; n < this.bindings[e].length; )
                    r.push(this.bindings[e][n].handler === t ? this.bindings[e].splice(n, 1) : n++);
                return r
            }
        }
        ,
        e.prototype.trigger = function() {
            var e, t, n, i, r, o, s, a, l;
            if (n = arguments[0],
            e = 2 <= arguments.length ? V.call(arguments, 1) : [],
            null != (s = this.bindings) ? s[n] : void 0) {
                for (r = 0,
                l = []; r < this.bindings[n].length; )
                    a = this.bindings[n][r],
                    i = a.handler,
                    t = a.ctx,
                    o = a.once,
                    i.apply(null != t ? t : this, e),
                    l.push(o ? this.bindings[n].splice(r, 1) : r++);
                return l
            }
        }
        ,
        e
    }(),
    c = window.Pace || {},
    window.Pace = c,
    _(c, s.prototype),
    D = c.options = _({}, w, window.paceOptions, x()),
    U = 0,
    Q = ($ = ["ajax", "document", "eventLag", "elements"]).length; Q > U; U++)
        q = $[U],
        !0 === D[q] && (D[q] = w[q]);
    l = function(e) {
        function t() {
            return z = t.__super__.constructor.apply(this, arguments)
        }
        return G(t, e),
        t
    }(Error),
    t = function() {
        function e() {
            this.progress = 0
        }
        return e.prototype.getElement = function() {
            var e;
            if (null == this.el) {
                if (!(e = document.querySelector(D.target)))
                    throw new l;
                this.el = document.createElement("div"),
                this.el.className = "pace pace-active",
                document.body.className = document.body.className.replace(/pace-done/g, ""),
                document.body.className += " pace-running",
                this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',
                null != e.firstChild ? e.insertBefore(this.el, e.firstChild) : e.appendChild(this.el)
            }
            return this.el
        }
        ,
        e.prototype.finish = function() {
            var e;
            return e = this.getElement(),
            e.className = e.className.replace("pace-active", ""),
            e.className += " pace-inactive",
            document.body.className = document.body.className.replace("pace-running", ""),
            document.body.className += " pace-done"
        }
        ,
        e.prototype.update = function(e) {
            return this.progress = e,
            this.render()
        }
        ,
        e.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (e) {
                l = e
            }
            return this.el = void 0
        }
        ,
        e.prototype.render = function() {
            var e, t, n, i, r, o, s;
            if (null == document.querySelector(D.target))
                return !1;
            for (e = this.getElement(),
            i = "translate3d(" + this.progress + "%, 0, 0)",
            r = 0,
            o = (s = ["webkitTransform", "msTransform", "transform"]).length; o > r; r++)
                t = s[r],
                e.children[0].style[t] = i;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (e.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"),
            this.progress >= 100 ? n = "99" : (n = this.progress < 10 ? "0" : "",
            n += 0 | this.progress),
            e.children[0].setAttribute("data-progress", "" + n)),
            this.lastRenderedProgress = this.progress
        }
        ,
        e.prototype.done = function() {
            return this.progress >= 100
        }
        ,
        e
    }(),
    a = function() {
        function e() {
            this.bindings = {}
        }
        return e.prototype.trigger = function(e, t) {
            var n, i, r, o, s;
            if (null != this.bindings[e]) {
                for (s = [],
                i = 0,
                r = (o = this.bindings[e]).length; r > i; i++)
                    n = o[i],
                    s.push(n.call(this, t));
                return s
            }
        }
        ,
        e.prototype.on = function(e, t) {
            var n;
            return null == (n = this.bindings)[e] && (n[e] = []),
            this.bindings[e].push(t)
        }
        ,
        e
    }(),
    W = window.XMLHttpRequest,
    F = window.XDomainRequest,
    M = window.WebSocket,
    E = function(e, t) {
        var n, i;
        i = [];
        for (n in t.prototype)
            try {
                i.push(null == e[n] && "function" != typeof t[n] ? "function" == typeof Object.defineProperty ? Object.defineProperty(e, n, {
                    get: function() {
                        return t.prototype[n]
                    },
                    configurable: !0,
                    enumerable: !0
                }) : e[n] = t.prototype[n] : void 0)
            } catch (e) {
                e
            }
        return i
    }
    ,
    S = [],
    c.ignore = function() {
        var e, t, n;
        return t = arguments[0],
        e = 2 <= arguments.length ? V.call(arguments, 1) : [],
        S.unshift("ignore"),
        n = t.apply(null, e),
        S.shift(),
        n
    }
    ,
    c.track = function() {
        var e, t, n;
        return t = arguments[0],
        e = 2 <= arguments.length ? V.call(arguments, 1) : [],
        S.unshift("track"),
        n = t.apply(null, e),
        S.shift(),
        n
    }
    ,
    P = function(e) {
        var t;
        if (null == e && (e = "GET"),
        "track" === S[0])
            return "force";
        if (!S.length && D.ajax) {
            if ("socket" === e && D.ajax.trackWebSockets)
                return !0;
            if (t = e.toUpperCase(),
            J.call(D.ajax.trackMethods, t) >= 0)
                return !0
        }
        return !1
    }
    ,
    u = function(e) {
        function t() {
            var e, n = this;
            t.__super__.constructor.apply(this, arguments),
            e = function(e) {
                var t;
                return t = e.open,
                e.open = function(i, r) {
                    return P(i) && n.trigger("request", {
                        type: i,
                        url: r,
                        request: e
                    }),
                    t.apply(e, arguments)
                }
            }
            ,
            window.XMLHttpRequest = function(t) {
                var n;
                return n = new W(t),
                e(n),
                n
            }
            ;
            try {
                E(window.XMLHttpRequest, W)
            } catch (e) {}
            if (null != F) {
                window.XDomainRequest = function() {
                    var t;
                    return t = new F,
                    e(t),
                    t
                }
                ;
                try {
                    E(window.XDomainRequest, F)
                } catch (e) {}
            }
            if (null != M && D.ajax.trackWebSockets) {
                window.WebSocket = function(e, t) {
                    var i;
                    return i = null != t ? new M(e,t) : new M(e),
                    P("socket") && n.trigger("request", {
                        type: "socket",
                        url: e,
                        protocols: t,
                        request: i
                    }),
                    i
                }
                ;
                try {
                    E(window.WebSocket, M)
                } catch (e) {}
            }
        }
        return G(t, a),
        t
    }(),
    B = null,
    L = function(e) {
        var t, n, i, r;
        for (n = 0,
        i = (r = D.ajax.ignoreURLs).length; i > n; n++)
            if ("string" == typeof (t = r[n])) {
                if (-1 !== e.indexOf(t))
                    return !0
            } else if (t.test(e))
                return !0;
        return !1
    }
    ,
    (T = function() {
        return null == B && (B = new u),
        B
    }
    )().on("request", function(t) {
        var n, i, r, o, s;
        return o = t.type,
        r = t.request,
        s = t.url,
        L(s) ? void 0 : c.running || !1 === D.restartOnRequestAfter && "force" !== P(o) ? void 0 : (i = arguments,
        "boolean" == typeof (n = D.restartOnRequestAfter || 0) && (n = 0),
        setTimeout(function() {
            var t, n, s, a, l;
            if ("socket" === o ? r.readyState < 2 : 0 < (s = r.readyState) && 4 > s) {
                for (c.restart(),
                l = [],
                t = 0,
                n = (a = c.sources).length; n > t; t++) {
                    if ((q = a[t])instanceof e) {
                        q.watch.apply(q, i);
                        break
                    }
                    l.push(void 0)
                }
                return l
            }
        }, n))
    }),
    e = function() {
        function e() {
            var e = this;
            this.elements = [],
            T().on("request", function() {
                return e.watch.apply(e, arguments)
            })
        }
        return e.prototype.watch = function(e) {
            var t, n, i, r;
            return i = e.type,
            t = e.request,
            r = e.url,
            L(r) ? void 0 : (n = "socket" === i ? new h(t) : new p(t),
            this.elements.push(n))
        }
        ,
        e
    }(),
    p = function() {
        return function(e) {
            var t, n, i, r, o, s = this;
            if (this.progress = 0,
            null != window.ProgressEvent)
                for (e.addEventListener("progress", function(e) {
                    return s.progress = e.lengthComputable ? 100 * e.loaded / e.total : s.progress + (100 - s.progress) / 2
                }, !1),
                o = ["load", "abort", "timeout", "error"],
                n = 0,
                i = o.length; i > n; n++)
                    t = o[n],
                    e.addEventListener(t, function() {
                        return s.progress = 100
                    }, !1);
            else
                r = e.onreadystatechange,
                e.onreadystatechange = function() {
                    var t;
                    return 0 === (t = e.readyState) || 4 === t ? s.progress = 100 : 3 === e.readyState && (s.progress = 50),
                    "function" == typeof r ? r.apply(null, arguments) : void 0
                }
        }
    }(),
    h = function() {
        return function(e) {
            var t, n, i, r, o = this;
            for (this.progress = 0,
            n = 0,
            i = (r = ["error", "open"]).length; i > n; n++)
                t = r[n],
                e.addEventListener(t, function() {
                    return o.progress = 100
                }, !1)
        }
    }(),
    i = function() {
        return function(e) {
            var t, n, i, o;
            for (null == e && (e = {}),
            this.elements = [],
            null == e.selectors && (e.selectors = []),
            n = 0,
            i = (o = e.selectors).length; i > n; n++)
                t = o[n],
                this.elements.push(new r(t))
        }
    }(),
    r = function() {
        function e(e) {
            this.selector = e,
            this.progress = 0,
            this.check()
        }
        return e.prototype.check = function() {
            var e = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                return e.check()
            }, D.elements.checkInterval)
        }
        ,
        e.prototype.done = function() {
            return this.progress = 100
        }
        ,
        e
    }(),
    n = function() {
        function e() {
            var e, t, n = this;
            this.progress = null != (t = this.states[document.readyState]) ? t : 100,
            e = document.onreadystatechange,
            document.onreadystatechange = function() {
                return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]),
                "function" == typeof e ? e.apply(null, arguments) : void 0
            }
        }
        return e.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        },
        e
    }(),
    o = function() {
        return function() {
            var e, t, n, i, r, o = this;
            this.progress = 0,
            e = 0,
            r = [],
            i = 0,
            n = A(),
            t = setInterval(function() {
                var s;
                return s = A() - n - 50,
                n = A(),
                r.push(s),
                r.length > D.eventLag.sampleCount && r.shift(),
                e = g(r),
                ++i >= D.eventLag.minSamples && e < D.eventLag.lagThreshold ? (o.progress = 100,
                clearInterval(t)) : o.progress = 3 / (e + 3) * 100
            }, 50)
        }
    }(),
    d = function() {
        function e(e) {
            this.source = e,
            this.last = this.sinceLastUpdate = 0,
            this.rate = D.initialRate,
            this.catchup = 0,
            this.progress = this.lastProgress = 0,
            null != this.source && (this.progress = k(this.source, "progress"))
        }
        return e.prototype.tick = function(e, t) {
            var n;
            return null == t && (t = k(this.source, "progress")),
            t >= 100 && (this.done = !0),
            t === this.last ? this.sinceLastUpdate += e : (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate),
            this.catchup = (t - this.progress) / D.catchupTime,
            this.sinceLastUpdate = 0,
            this.last = t),
            t > this.progress && (this.progress += this.catchup * e),
            n = 1 - Math.pow(this.progress / 100, D.easeFactor),
            this.progress += n * this.rate * e,
            this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress),
            this.progress = Math.max(0, this.progress),
            this.progress = Math.min(100, this.progress),
            this.lastProgress = this.progress,
            this.progress
        }
        ,
        e
    }(),
    H = null,
    I = null,
    v = null,
    R = null,
    m = null,
    y = null,
    c.running = !1,
    C = function() {
        return D.restartOnPushState ? c.restart() : void 0
    }
    ,
    null != window.history.pushState && (K = window.history.pushState,
    window.history.pushState = function() {
        return C(),
        K.apply(window.history, arguments)
    }
    ),
    null != window.history.replaceState && (X = window.history.replaceState,
    window.history.replaceState = function() {
        return C(),
        X.apply(window.history, arguments)
    }
    ),
    f = {
        ajax: e,
        elements: i,
        document: n,
        eventLag: o
    },
    (j = function() {
        var e, n, i, r, o, s, a, l;
        for (c.sources = H = [],
        n = 0,
        r = (s = ["ajax", "elements", "document", "eventLag"]).length; r > n; n++)
            e = s[n],
            !1 !== D[e] && H.push(new f[e](D[e]));
        for (i = 0,
        o = (l = null != (a = D.extraSources) ? a : []).length; o > i; i++)
            q = l[i],
            H.push(new q(D));
        return c.bar = v = new t,
        I = [],
        R = new d
    }
    )(),
    c.stop = function() {
        return c.trigger("stop"),
        c.running = !1,
        v.destroy(),
        y = !0,
        null != m && ("function" == typeof b && b(m),
        m = null),
        j()
    }
    ,
    c.restart = function() {
        return c.trigger("restart"),
        c.stop(),
        c.start()
    }
    ,
    c.go = function() {
        var e;
        return c.running = !0,
        v.render(),
        e = A(),
        y = !1,
        m = O(function(t, n) {
            var i, r, o, s, a, l, u, f, h, p, m, g, b, w, _;
            for (100 - v.progress,
            r = p = 0,
            o = !0,
            l = m = 0,
            b = H.length; b > m; l = ++m)
                for (q = H[l],
                h = null != I[l] ? I[l] : I[l] = [],
                a = null != (_ = q.elements) ? _ : [q],
                u = g = 0,
                w = a.length; w > g; u = ++g)
                    s = a[u],
                    f = null != h[u] ? h[u] : h[u] = new d(s),
                    o &= f.done,
                    f.done || (r++,
                    p += f.tick(t));
            return i = p / r,
            v.update(R.tick(t, i)),
            v.done() || o || y ? (v.update(100),
            c.trigger("done"),
            setTimeout(function() {
                return v.finish(),
                c.running = !1,
                c.trigger("hide")
            }, Math.max(D.ghostTime, Math.max(D.minTime - (A() - e), 0)))) : n()
        })
    }
    ,
    c.start = function(e) {
        _(D, e),
        c.running = !0;
        try {
            v.render()
        } catch (e) {
            l = e
        }
        return document.querySelector(".pace") ? (c.trigger("start"),
        c.go()) : setTimeout(c.start, 50)
    }
    ,
    "function" == typeof define && define.amd ? define(["pace"], function() {
        return c
    }) : "object" == typeof exports ? module.exports = c : D.startOnPageLoad && c.start()
}
.call(this),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Pjax = e()
    }
}(function() {
    return function() {
        function e(t, n, i) {
            function r(s, a) {
                if (!n[s]) {
                    if (!t[s]) {
                        var l = "function" == typeof require && require;
                        if (!a && l)
                            return l(s, !0);
                        if (o)
                            return o(s, !0);
                        var c = new Error("Cannot find module '" + s + "'");
                        throw c.code = "MODULE_NOT_FOUND",
                        c
                    }
                    var u = n[s] = {
                        exports: {}
                    };
                    t[s][0].call(u.exports, function(e) {
                        return r(t[s][1][e] || e)
                    }, u, u.exports, e, t, n, i)
                }
                return n[s].exports
            }
            for (var o = "function" == typeof require && require, s = 0; s < i.length; s++)
                r(i[s]);
            return r
        }
        return e
    }()({
        1: [function(e, t, n) {
            var i = e("./lib/execute-scripts.js")
              , r = e("./lib/foreach-els.js")
              , o = e("./lib/parse-options.js")
              , s = e("./lib/switches")
              , a = e("./lib/uniqueid.js")
              , l = e("./lib/events/on.js")
              , c = e("./lib/events/trigger.js")
              , u = e("./lib/util/clone.js")
              , f = e("./lib/util/contains.js")
              , d = e("./lib/util/extend.js")
              , h = e("./lib/util/noop")
              , p = function(e) {
                this.state = {
                    numPendingSwitches: 0,
                    href: null,
                    options: null
                },
                this.options = o(e),
                this.log("Pjax options", this.options),
                this.options.scrollRestoration && "scrollRestoration"in history && (history.scrollRestoration = "manual"),
                this.maxUid = this.lastUid = a(),
                this.parseDOM(document),
                l(window, "popstate", function(e) {
                    if (e.state) {
                        var t = u(this.options);
                        t.url = e.state.url,
                        t.title = e.state.title,
                        t.history = !1,
                        t.scrollPos = e.state.scrollPos,
                        e.state.uid < this.lastUid ? t.backward = !0 : t.forward = !0,
                        this.lastUid = e.state.uid,
                        this.loadUrl(e.state.url, t)
                    }
                }
                .bind(this))
            };
            if (p.switches = s,
            p.prototype = {
                log: e("./lib/proto/log.js"),
                getElements: function(e) {
                    return e.querySelectorAll(this.options.elements)
                },
                parseDOM: function(t) {
                    var n = e("./lib/proto/parse-element");
                    r(this.getElements(t), n, this)
                },
                refresh: function(e) {
                    this.parseDOM(e || document)
                },
                reload: function() {
                    window.location.reload()
                },
                attachLink: e("./lib/proto/attach-link.js"),
                attachForm: e("./lib/proto/attach-form.js"),
                forEachSelectors: function(t, n, i) {
                    return e("./lib/foreach-selectors.js").bind(this)(this.options.selectors, t, n, i)
                },
                switchSelectors: function(t, n, i, r) {
                    return e("./lib/switches-selectors.js").bind(this)(this.options.switches, this.options.switchesOptions, t, n, i, r)
                },
                latestChance: function(e) {
                    window.location = e
                },
                onSwitch: function() {
                    c(window, "resize scroll"),
                    0 === --this.state.numPendingSwitches && this.afterAllSwitches()
                },
                loadContent: function(e, t) {
                    var n = document.implementation.createHTMLDocument("pjax")
                      , i = /<html[^>]+>/gi
                      , r = /\s?[a-z:]+(?:\=(?:\'|\")[^\'\">]+(?:\'|\"))*/gi
                      , o = e.match(i);
                    if (o && o.length && (o = o[0].match(r)).length && (o.shift(),
                    o.forEach(function(e) {
                        var t = e.trim().split("=");
                        1 === t.length ? n.documentElement.setAttribute(t[0], !0) : n.documentElement.setAttribute(t[0], t[1].slice(1, -1))
                    })),
                    n.documentElement.innerHTML = e,
                    this.log("load content", n.documentElement.attributes, n.documentElement.innerHTML.length),
                    document.activeElement && f(document, this.options.selectors, document.activeElement))
                        try {
                            document.activeElement.blur()
                        } catch (e) {}
                    this.switchSelectors(this.options.selectors, n, document, t)
                },
                abortRequest: e("./lib/abort-request.js"),
                doRequest: e("./lib/send-request.js"),
                handleResponse: e("./lib/proto/handle-response.js"),
                loadUrl: function(e, t) {
                    t = "object" == typeof t ? d({}, this.options, t) : u(this.options),
                    this.log("load href", e, t),
                    this.abortRequest(this.request),
                    c(document, "pjax:send", t),
                    this.request = this.doRequest(e, t, this.handleResponse.bind(this))
                },
                afterAllSwitches: function() {
                    var e = Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();
                    e && document.activeElement !== e && e.focus(),
                    this.options.selectors.forEach(function(e) {
                        r(document.querySelectorAll(e), function(e) {
                            i(e)
                        })
                    });
                    var t = this.state;
                    if (t.options.history && (window.history.state || (this.lastUid = this.maxUid = a(),
                    window.history.replaceState({
                        url: window.location.href,
                        title: document.title,
                        uid: this.maxUid,
                        scrollPos: [0, 0]
                    }, document.title)),
                    this.lastUid = this.maxUid = a(),
                    window.history.pushState({
                        url: t.href,
                        title: t.options.title,
                        uid: this.maxUid,
                        scrollPos: [0, 0]
                    }, t.options.title, t.href)),
                    this.forEachSelectors(function(e) {
                        this.parseDOM(e)
                    }, this),
                    c(document, "pjax:complete pjax:success", t.options),
                    "function" == typeof t.options.analytics && t.options.analytics(),
                    t.options.history) {
                        var n = document.createElement("a");
                        if (n.href = this.state.href,
                        n.hash) {
                            var o = n.hash.slice(1);
                            o = decodeURIComponent(o);
                            var s = 0
                              , l = document.getElementById(o) || document.getElementsByName(o)[0];
                            if (l && l.offsetParent)
                                do {
                                    s += l.offsetTop,
                                    l = l.offsetParent
                                } while (l);window.scrollTo(0, s)
                        } else
                            !1 !== t.options.scrollTo && (t.options.scrollTo.length > 1 ? window.scrollTo(t.options.scrollTo[0], t.options.scrollTo[1]) : window.scrollTo(0, t.options.scrollTo))
                    } else
                        t.options.scrollRestoration && t.options.scrollPos && window.scrollTo(t.options.scrollPos[0], t.options.scrollPos[1]);
                    this.state = {
                        numPendingSwitches: 0,
                        href: null,
                        options: null
                    }
                }
            },
            p.isSupported = e("./lib/is-supported.js"),
            p.isSupported())
                t.exports = p;
            else {
                var m = h;
                for (var g in p.prototype)
                    p.prototype.hasOwnProperty(g) && "function" == typeof p.prototype[g] && (m[g] = h);
                t.exports = m
            }
        }
        , {
            "./lib/abort-request.js": 2,
            "./lib/events/on.js": 4,
            "./lib/events/trigger.js": 5,
            "./lib/execute-scripts.js": 6,
            "./lib/foreach-els.js": 7,
            "./lib/foreach-selectors.js": 8,
            "./lib/is-supported.js": 9,
            "./lib/parse-options.js": 10,
            "./lib/proto/attach-form.js": 11,
            "./lib/proto/attach-link.js": 12,
            "./lib/proto/handle-response.js": 13,
            "./lib/proto/log.js": 14,
            "./lib/proto/parse-element": 15,
            "./lib/send-request.js": 16,
            "./lib/switches": 18,
            "./lib/switches-selectors.js": 17,
            "./lib/uniqueid.js": 19,
            "./lib/util/clone.js": 20,
            "./lib/util/contains.js": 21,
            "./lib/util/extend.js": 22,
            "./lib/util/noop": 23
        }],
        2: [function(e, t, n) {
            var i = e("./util/noop");
            t.exports = function(e) {
                e && e.readyState < 4 && (e.onreadystatechange = i,
                e.abort())
            }
        }
        , {
            "./util/noop": 23
        }],
        3: [function(e, t, n) {
            t.exports = function(e) {
                var t = e.text || e.textContent || e.innerHTML || ""
                  , n = e.src || ""
                  , i = e.parentNode || document.querySelector("head") || document.documentElement
                  , r = document.createElement("script");
                if (t.match("document.write"))
                    return console && console.log && console.log("Script contains document.write. Can’t be executed correctly. Code skipped ", e),
                    !1;
                if (r.type = "text/javascript",
                "" !== n && (r.src = n,
                r.async = !1),
                "" !== t)
                    try {
                        r.appendChild(document.createTextNode(t))
                    } catch (e) {
                        r.text = t
                    }
                return i.appendChild(r),
                (i instanceof HTMLHeadElement || i instanceof HTMLBodyElement) && i.removeChild(r),
                !0
            }
        }
        , {}],
        4: [function(e, t, n) {
            var i = e("../foreach-els");
            t.exports = function(e, t, n, r) {
                (t = "string" == typeof t ? t.split(" ") : t).forEach(function(t) {
                    i(e, function(e) {
                        e.addEventListener(t, n, r)
                    })
                })
            }
        }
        , {
            "../foreach-els": 7
        }],
        5: [function(e, t, n) {
            var i = e("../foreach-els");
            t.exports = function(e, t, n) {
                (t = "string" == typeof t ? t.split(" ") : t).forEach(function(t) {
                    var r;
                    (r = document.createEvent("HTMLEvents")).initEvent(t, !0, !0),
                    r.eventName = t,
                    n && Object.keys(n).forEach(function(e) {
                        r[e] = n[e]
                    }),
                    i(e, function(e) {
                        var t = !1;
                        e.parentNode || e === document || e === window || (t = !0,
                        document.body.appendChild(e)),
                        e.dispatchEvent(r),
                        t && e.parentNode.removeChild(e)
                    })
                })
            }
        }
        , {
            "../foreach-els": 7
        }],
        6: [function(e, t, n) {
            var i = e("./foreach-els")
              , r = e("./eval-script");
            t.exports = function(e) {
                "script" === e.tagName.toLowerCase() && r(e),
                i(e.querySelectorAll("script"), function(e) {
                    e.type && "text/javascript" !== e.type.toLowerCase() || (e.parentNode && e.parentNode.removeChild(e),
                    r(e))
                })
            }
        }
        , {
            "./eval-script": 3,
            "./foreach-els": 7
        }],
        7: [function(e, t, n) {
            t.exports = function(e, t, n) {
                return e instanceof HTMLCollection || e instanceof NodeList || e instanceof Array ? Array.prototype.forEach.call(e, t, n) : t.call(n, e)
            }
        }
        , {}],
        8: [function(e, t, n) {
            var i = e("./foreach-els");
            t.exports = function(e, t, n, r) {
                r = r || document,
                e.forEach(function(e) {
                    i(r.querySelectorAll(e), t, n)
                })
            }
        }
        , {
            "./foreach-els": 7
        }],
        9: [function(e, t, n) {
            t.exports = function() {
                return window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)
            }
        }
        , {}],
        10: [function(e, t, n) {
            function i() {
                window._gaq && _gaq.push(["_trackPageview"]),
                window.ga && ga("send", "pageview", {
                    page: location.pathname,
                    title: document.title
                })
            }
            var r = e("./switches");
            t.exports = function(e) {
                return e = e || {},
                e.elements = e.elements || "a[href], form[action]",
                e.selectors = e.selectors || ["title", ".js-Pjax"],
                e.switches = e.switches || {},
                e.switchesOptions = e.switchesOptions || {},
                e.history = e.history || !0,
                e.analytics = "function" == typeof e.analytics || !1 === e.analytics ? e.analytics : i,
                e.scrollTo = void 0 === e.scrollTo ? 0 : e.scrollTo,
                e.scrollRestoration = void 0 === e.scrollRestoration || e.scrollRestoration,
                e.cacheBust = void 0 === e.cacheBust || e.cacheBust,
                e.debug = e.debug || !1,
                e.timeout = e.timeout || 0,
                e.currentUrlFullReload = void 0 !== e.currentUrlFullReload && e.currentUrlFullReload,
                e.switches.head || (e.switches.head = r.switchElementsAlt),
                e.switches.body || (e.switches.body = r.switchElementsAlt),
                e
            }
        }
        , {
            "./switches": 18
        }],
        11: [function(e, t, n) {
            function i(e) {
                var t = [];
                for (var n in e.elements)
                    if (!Number.isNaN(Number(n))) {
                        var i = e.elements[n]
                          , r = i.tagName.toLowerCase();
                        if (i.name && void 0 !== i.attributes && "button" !== r) {
                            var o = i.attributes.type;
                            if (!o || "checkbox" !== o.value && "radio" !== o.value || i.checked) {
                                var s = [];
                                if ("select" === r)
                                    for (var a, l = 0; l < i.options.length; l++)
                                        (a = i.options[l]).selected && s.push(a.value || a.text);
                                else
                                    s.push(i.value);
                                for (var c = 0; c < s.length; c++)
                                    t.push({
                                        name: encodeURIComponent(i.name),
                                        value: encodeURIComponent(s[c])
                                    })
                            }
                        }
                    }
                return t
            }
            function r(e, t) {
                return e.protocol !== window.location.protocol || e.host !== window.location.host ? "external" : e.hash && e.href.replace(e.hash, "") === window.location.href.replace(location.hash, "") ? "anchor" : e.href === window.location.href.split("#")[0] + "#" ? "anchor-empty" : t.currentUrlFullReload && e.href === window.location.href.split("#")[0] ? "reload" : void 0
            }
            var o = e("../events/on")
              , s = e("../util/clone")
              , a = function(e, t) {
                if (!l(t)) {
                    var n = s(this.options);
                    n.requestOptions = {
                        requestUrl: e.getAttribute("action") || window.location.href,
                        requestMethod: e.getAttribute("method") || "GET"
                    };
                    var o = document.createElement("a");
                    o.setAttribute("href", n.requestOptions.requestUrl);
                    var a = r(o, n);
                    a ? e.setAttribute("data-pjax-state", a) : (t.preventDefault(),
                    "multipart/form-data" === e.enctype ? n.requestOptions.formData = new FormData(e) : n.requestOptions.requestParams = i(e),
                    e.setAttribute("data-pjax-state", "submit"),
                    n.triggerElement = e,
                    this.loadUrl(o.href, n))
                }
            }
              , l = function(e) {
                return e.defaultPrevented || !1 === e.returnValue
            };
            t.exports = function(e) {
                var t = this;
                e.setAttribute("data-pjax-state", ""),
                o(e, "submit", function(n) {
                    a.call(t, e, n)
                }),
                o(e, "keyup", function(n) {
                    13 === n.keyCode && a.call(t, e, n)
                }
                .bind(this))
            }
        }
        , {
            "../events/on": 4,
            "../util/clone": 20
        }],
        12: [function(e, t, n) {
            function i(e, t) {
                return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey ? "modifier" : e.protocol !== window.location.protocol || e.host !== window.location.host ? "external" : e.hash && e.href.replace(e.hash, "") === window.location.href.replace(location.hash, "") ? "anchor" : e.href === window.location.href.split("#")[0] + "#" ? "anchor-empty" : void 0
            }
            var r = e("../events/on")
              , o = e("../util/clone")
              , s = "data-pjax-state"
              , a = function(e, t) {
                if (!l(t)) {
                    var n = o(this.options)
                      , r = i(e, t);
                    if (r)
                        e.setAttribute(s, r);
                    else {
                        if (t.preventDefault(),
                        this.options.currentUrlFullReload && e.href === window.location.href.split("#")[0])
                            return e.setAttribute(s, "reload"),
                            void this.reload();
                        e.setAttribute(s, "load"),
                        n.triggerElement = e,
                        this.loadUrl(e.href, n)
                    }
                }
            }
              , l = function(e) {
                return e.defaultPrevented || !1 === e.returnValue
            };
            t.exports = function(e) {
                var t = this;
                e.setAttribute(s, ""),
                r(e, "click", function(n) {
                    a.call(t, e, n)
                }),
                r(e, "keyup", function(n) {
                    13 === n.keyCode && a.call(t, e, n)
                }
                .bind(this))
            }
        }
        , {
            "../events/on": 4,
            "../util/clone": 20
        }],
        13: [function(e, t, n) {
            var i = e("../util/clone.js")
              , r = e("../uniqueid.js")
              , o = e("../events/trigger.js");
            t.exports = function(e, t, n, s) {
                if (s = i(s || this.options),
                s.request = t,
                !1 !== e) {
                    var a = window.history.state || {};
                    window.history.replaceState({
                        url: a.url || window.location.href,
                        title: a.title || document.title,
                        uid: a.uid || r(),
                        scrollPos: [document.documentElement.scrollLeft || document.body.scrollLeft, document.documentElement.scrollTop || document.body.scrollTop]
                    }, document.title, window.location);
                    var l = n;
                    t.responseURL ? n !== t.responseURL && (n = t.responseURL) : t.getResponseHeader("X-PJAX-URL") ? n = t.getResponseHeader("X-PJAX-URL") : t.getResponseHeader("X-XHR-Redirected-To") && (n = t.getResponseHeader("X-XHR-Redirected-To"));
                    var c = document.createElement("a");
                    c.href = l;
                    var u = c.hash;
                    c.href = n,
                    u && !c.hash && (c.hash = u,
                    n = c.href),
                    this.state.href = n,
                    this.state.options = s;
                    try {
                        this.loadContent(e, this.options)
                    } catch (e) {
                        if (o(document, "pjax:error", s),
                        this.options.debug)
                            throw e;
                        return console && console.error && console.error("Pjax switch fail: ", e),
                        this.latestChance(n)
                    }
                } else
                    o(document, "pjax:complete pjax:error", s)
            }
        }
        , {
            "../events/trigger.js": 5,
            "../uniqueid.js": 19,
            "../util/clone.js": 20
        }],
        14: [function(e, t, n) {
            t.exports = function() {
                this.options.debug && console && ("function" == typeof console.log ? console.log.apply(console, arguments) : console.log && console.log(arguments))
            }
        }
        , {}],
        15: [function(e, t, n) {
            t.exports = function(e) {
                switch (e.tagName.toLowerCase()) {
                case "a":
                    e.hasAttribute("data-pjax-state") || this.attachLink(e);
                    break;
                case "form":
                    e.hasAttribute("data-pjax-state") || this.attachForm(e);
                    break;
                default:
                    throw "Pjax can only be applied on <a> or <form> submit"
                }
            }
        }
        , {}],
        16: [function(e, t, n) {
            var i = e("./util/update-query-string");
            t.exports = function(e, t, n) {
                var r, o = (t = t || {}).requestOptions || {}, s = (o.requestMethod || "GET").toUpperCase(), a = o.requestParams || null, l = o.formData || null, c = null, u = new XMLHttpRequest, f = t.timeout || 0;
                if (u.onreadystatechange = function() {
                    4 === u.readyState && (200 === u.status ? n(u.responseText, u, e, t) : 0 !== u.status && n(null, u, e, t))
                }
                ,
                u.onerror = function(i) {
                    console.log(i),
                    n(null, u, e, t)
                }
                ,
                u.ontimeout = function() {
                    n(null, u, e, t)
                }
                ,
                a && a.length)
                    switch (r = a.map(function(e) {
                        return e.name + "=" + e.value
                    }).join("&"),
                    s) {
                    case "GET":
                        e = e.split("?")[0],
                        e += "?" + r;
                        break;
                    case "POST":
                        c = r
                    }
                else
                    l && (c = l);
                return t.cacheBust && (e = i(e, "t", Date.now())),
                u.open(s, e, !0),
                u.timeout = f,
                u.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                u.setRequestHeader("X-PJAX", "true"),
                u.setRequestHeader("X-PJAX-Selectors", JSON.stringify(t.selectors)),
                c && "POST" === s && u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                u.send(c),
                u
            }
        }
        , {
            "./util/update-query-string": 24
        }],
        17: [function(e, t, n) {
            var i = e("./foreach-els")
              , r = e("./switches");
            t.exports = function(e, t, n, o, s, a) {
                var l = [];
                n.forEach(function(n) {
                    var c = o.querySelectorAll(n)
                      , u = s.querySelectorAll(n);
                    if (this.log && this.log("Pjax switch", n, c, u),
                    c.length !== u.length)
                        throw "DOM doesn’t look the same on new loaded page: ’" + n + "’ - new " + c.length + ", old " + u.length;
                    i(c, function(i, o) {
                        var s = u[o];
                        this.log && this.log("newEl", i, "oldEl", s);
                        var c = e[n] ? e[n].bind(this, s, i, a, t[n]) : r.outerHTML.bind(this, s, i, a);
                        l.push(c)
                    }, this)
                }, this),
                this.state.numPendingSwitches = l.length,
                l.forEach(function(e) {
                    e()
                })
            }
        }
        , {
            "./foreach-els": 7,
            "./switches": 18
        }],
        18: [function(e, t, n) {
            var i = e("./events/on.js");
            t.exports = {
                outerHTML: function(e, t) {
                    e.outerHTML = t.outerHTML,
                    this.onSwitch()
                },
                innerHTML: function(e, t) {
                    e.innerHTML = t.innerHTML,
                    "" === t.className ? e.removeAttribute("class") : e.className = t.className,
                    this.onSwitch()
                },
                switchElementsAlt: function(e, t) {
                    if (e.innerHTML = t.innerHTML,
                    t.hasAttributes())
                        for (var n = t.attributes, i = 0; i < n.length; i++)
                            e.attributes.setNamedItem(n[i].cloneNode());
                    this.onSwitch()
                },
                replaceNode: function(e, t) {
                    e.parentNode.replaceChild(t, e),
                    this.onSwitch()
                },
                sideBySide: function(e, t, n, r) {
                    var o = Array.prototype.forEach
                      , s = []
                      , a = []
                      , l = document.createDocumentFragment()
                      , c = "animationend webkitAnimationEnd MSAnimationEnd oanimationend"
                      , u = 0
                      , f = function(e) {
                        e.target === e.currentTarget && --u <= 0 && s && (s.forEach(function(e) {
                            e.parentNode && e.parentNode.removeChild(e)
                        }),
                        a.forEach(function(e) {
                            e.className = e.className.replace(e.getAttribute("data-pjax-classes"), ""),
                            e.removeAttribute("data-pjax-classes")
                        }),
                        a = null,
                        s = null,
                        this.onSwitch())
                    }
                    .bind(this);
                    r = r || {},
                    o.call(e.childNodes, function(e) {
                        s.push(e),
                        e.classList && !e.classList.contains("js-Pjax-remove") && (e.hasAttribute("data-pjax-classes") && (e.className = e.className.replace(e.getAttribute("data-pjax-classes"), ""),
                        e.removeAttribute("data-pjax-classes")),
                        e.classList.add("js-Pjax-remove"),
                        r.callbacks && r.callbacks.removeElement && r.callbacks.removeElement(e),
                        r.classNames && (e.className += " " + r.classNames.remove + " " + (n.backward ? r.classNames.backward : r.classNames.forward)),
                        u++,
                        i(e, c, f, !0))
                    }),
                    o.call(t.childNodes, function(e) {
                        if (e.classList) {
                            var t = "";
                            r.classNames && (t = " js-Pjax-add " + r.classNames.add + " " + (n.backward ? r.classNames.forward : r.classNames.backward)),
                            r.callbacks && r.callbacks.addElement && r.callbacks.addElement(e),
                            e.className += t,
                            e.setAttribute("data-pjax-classes", t),
                            a.push(e),
                            l.appendChild(e),
                            u++,
                            i(e, c, f, !0)
                        }
                    }),
                    e.className = t.className,
                    e.appendChild(l)
                }
            }
        }
        , {
            "./events/on.js": 4
        }],
        19: [function(e, t, n) {
            t.exports = function() {
                var e = 0;
                return function() {
                    var t = "pjax" + (new Date).getTime() + "_" + e;
                    return e++,
                    t
                }
            }()
        }
        , {}],
        20: [function(e, t, n) {
            t.exports = function(e) {
                if (null === e || "object" != typeof e)
                    return e;
                var t = e.constructor();
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            }
        }
        , {}],
        21: [function(e, t, n) {
            t.exports = function(e, t, n) {
                for (var i = 0; i < t.length; i++)
                    for (var r = e.querySelectorAll(t[i]), o = 0; o < r.length; o++)
                        if (r[o].contains(n))
                            return !0;
                return !1
            }
        }
        , {}],
        22: [function(e, t, n) {
            t.exports = function(e) {
                if (null == e)
                    return null;
                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                    var i = arguments[n];
                    if (null != i)
                        for (var r in i)
                            Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                }
                return t
            }
        }
        , {}],
        23: [function(e, t, n) {
            t.exports = function() {}
        }
        , {}],
        24: [function(e, t, n) {
            t.exports = function(e, t, n) {
                var i = new RegExp("([?&])" + t + "=.*?(&|$)","i")
                  , r = -1 !== e.indexOf("?") ? "&" : "?";
                return e.match(i) ? e.replace(i, "$1" + t + "=" + n + "$2") : e + r + t + "=" + n
            }
        }
        , {}]
    }, {}, [1])(1)
});
var MODULE_CONFIG = {
    chat: ["/static/admin/libs/list.js/dist/list.js", "/static/admin/libs/notie/dist/notie.min.js", "/static/admin/js/plugins/notie.js", "/static/admin/js/app/chat.js"],
    mail: ["/static/admin/libs/list.js/dist/list.js", "/static/admin/libs/notie/dist/notie.min.js", "/static/admin/js/plugins/notie.js", "/static/admin/js/app/mail.js"],
    user: ["/static/admin/libs/list.js/dist/list.js", "/static/admin/libs/notie/dist/notie.min.js", "/static/admin/js/plugins/notie.js", "/static/admin/js/app/user.js"],
    fullscreen: ["/static/admin/libs/jquery-fullscreen-plugin/jquery.fullscreen-min.js", "/static/admin/js/plugins/fullscreen.js"],
    jscroll: ["/static/admin/libs/jscroll/jquery.jscroll.min.js"],
    stick_in_parent: ["/static/admin/libs/sticky-kit/jquery.sticky-kit.min.js"],
    scrollreveal: ["/static/admin/libs/scrollreveal/dist/scrollreveal.min.js", "/static/admin/js/plugins/jquery.scrollreveal.js"],
    owlCarousel: ["/static/admin/libs/owl.carousel/dist/assets/owl.carousel.min.css", "/static/admin/libs/owl.carousel/dist/assets/owl.theme.css", "/static/admin/libs/owl.carousel/dist/owl.carousel.min.js"],
    html5sortable: ["/static/admin/libs/html5sortable/dist/html.sortable.min.js", "/static/admin/js/plugins/jquery.html5sortable.js", "/static/admin/js/plugins/sortable.js"],
    easyPieChart: ["/static/admin/libs/easy-pie-chart/dist/jquery.easypiechart.min.js"],
    peity: ["/static/admin/libs/peity/jquery.peity.js", "/static/admin/js/plugins/jquery.peity.tooltip.js"],
    chart: ["/static/admin/libs/moment/min/moment-with-locales.min.js", "/static/admin/libs/chart.js/dist/Chart.min.js", "/static/admin/js/plugins/jquery.chart.js", "/static/admin/js/plugins/chartjs.js"],
    dataTable: ["/static/admin/libs/datatables/media/js/jquery.dataTables.min.js", "/static/admin/libs/datatables.net-bs4/js/dataTables.bootstrap4.js", "/static/admin/libs/datatables.net-bs4/css/dataTables.bootstrap4.css", "/static/admin/js/plugins/datatable.js"],
    bootstrapTable: [
        "/static/admin/libs/bootstrap-table/dist/bootstrap-table.css",
        "/static/admin/libs/bootstrap-table/dist/bootstrap-table.js",
        "/static/admin/libs/bootstrap-table/dist/extensions/export/bootstrap-table-export.js",
        "/static/admin/libs/bootstrap-table/dist/extensions/print/bootstrap-table-print.js",
        "/static/admin/libs/bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile.js",
        "/static/admin/js/plugins/tableExport.js",
        "/static/admin/js/plugins/bootstrap-table.js"
    ],
    bootstrapWizard: ["/static/admin/libs/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js"],
    dropzone: ["/static/admin/libs/dropzone/dist/dropzone.js", "/static/admin/libs/dropzone/dist/dropzone.css"],
    datetimepicker: ["/static/admin/libs/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css", "/static/admin/libs/moment/min/moment-with-locales.min.js", "/static/admin/libs/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.min.js", "/static/admin/js/plugins/datetimepicker.js"],
    datepicker: ["/static/admin/libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js", "/static/admin/libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"],
    fullCalendar: ["/static/admin/libs/moment/min/moment-with-locales.min.js", "/static/admin/libs/fullcalendar/dist/fullcalendar.min.js", "/static/admin/libs/fullcalendar/dist/fullcalendar.min.css", "/static/admin/js/plugins/fullcalendar.js"],
    parsley: ["/static/admin/libs/parsleyjs/dist/parsley.js"],
    select2: ["/static/admin/libs/select2/dist/css/select2.min.css", "/static/admin/libs/select2/dist/js/select2.min.js", "/static/admin/js/plugins/select2.js"],
    summernote: ["/static/admin/libs/summernote/dist/summernote.css", "/static/admin/libs/summernote/dist/summernote-bs4.css", "/static/admin/libs/summernote/dist/summernote.js", "/static/admin/libs/summernote/dist/summernote-bs4.js"],
    vectorMap: ["/static/admin/libs/jqvmap/dist/jqvmap.min.css", "/static/admin/libs/jqvmap/dist/jquery.vmap.js", "/static/admin/libs/jqvmap/dist/maps/jquery.vmap.world.js", "/static/admin/libs/jqvmap/dist/maps/jquery.vmap.usa.js", "/static/admin/libs/jqvmap/dist/maps/jquery.vmap.france.js", "/static/admin/js/plugins/jqvmap.js"],
    waves: ["/static/admin/libs/node-waves/dist/waves.min.css", "/static/admin/libs/node-waves/dist/waves.min.js", "/static/admin/js/plugins/waves.js"]
}
  , MODULE_OPTION_CONFIG = {
    parsley: {
        errorClass: "is-invalid",
        successClass: "is-valid",
        errorsWrapper: '<ul class="list-unstyled text-sm mt-1 text-muted"></ul>'
    }
}
  , lazyload = lazyload || {};
!function(e, t) {
    "use strict";
    var n = []
      , i = !1
      , r = e.Deferred();
    t.load = function(t) {
        return t = e.isArray(t) ? t : t.split(/\s+/),
        i || (i = r.promise()),
        e.each(t, function(e, t) {
            i = i.then(function() {
                return n[t] ? n[t].promise() : t.indexOf(".css") >= 0 ? s(t) : o(t)
            })
        }),
        r.resolve(),
        i
    }
    ,
    t.unload = function(t) {
        t = e.isArray(t) ? t : t.split(/\s+/),
        e.each(t, function(t, i) {
            i.indexOf(".css") >= 0 ? e('link[href="' + i + '"]').remove() : e('script[src="' + i + '"]').remove(),
            delete n[i]
        })
    }
    ;
    var o = function(t) {
        var i = e.Deferred()
          , r = document.createElement("script");
        return r.src = t,
        r.onload = function(e) {
            i.resolve(e)
        }
        ,
        r.onerror = function(e) {
            i.reject(e)
        }
        ,
        document.body.appendChild(r),
        n[t] = i,
        i.promise()
    }
      , s = function(t) {
        var i = e.Deferred()
          , r = document.createElement("link");
        r.rel = "stylesheet",
        r.type = "text/css",
        r.href = t,
        r.onload = function(e) {
            i.resolve(e)
        }
        ,
        r.onerror = function(e) {
            i.reject(e)
        }
        ;
        var o = document.getElementsByTagName("head")[0];
        return o.insertBefore(r, o.firstChild),
        n[t] = i,
        i.promise()
    }
}(jQuery, lazyload),
function($, MODULE_CONFIG, MODULE_OPTION_CONFIG) {
    "use strict";
    $.fn.plugin = function() {
        return this.each(function() {
            var self = $(this)
              , opts = self.attr("data-option") || self.attr("data-plugin-option")
              , attr = self.attr("data-plugin")
              , options = opts && eval("[" + opts + "]");
            options && $.isPlainObject(options[0]) && (options[0] = $.extend({}, MODULE_OPTION_CONFIG[attr], options[0])),
            self[attr] && opts ? self[attr].apply(self, options) : lazyload.load(MODULE_CONFIG[attr]).then(function() {
                opts && self[attr].apply(self, options),
                self[attr] && self[attr].init && self[attr].init(),
                window[attr] && window[attr].init && window[attr].init()
            })
        })
    }
}(jQuery, MODULE_CONFIG, MODULE_OPTION_CONFIG),
function(e) {
    "use strict";
    function t() {
        var t = window.location.pathname.split("/");
        t.length > 0 && (t = t[t.length - 1]),
        e("#aside .active").removeClass("active"),
        e("#aside a").filter(function() {
            return t == e(this).attr("href")
        }).parents("li").addClass("active")
    }
    e(document).on("click", "[data-nav] a", function(t) {
        var n, i, r, o = e(this);
        r = (i = o.parent()).parents("li"),
        n = i.closest("[data-nav]").find(".active"),
        r.addClass("active"),
        o.next().is("ul") && i.toggleClass("active") || i.addClass("active"),
        n.not(r).not(i).removeClass("active"),
        o.attr("href") && "" != o.attr("href") && e(document).trigger("Nav:changed")
    }),
    t(),
    e(document).on("pjaxEnd", function() {
        t()
    })
}(jQuery),
function(e) {
    "use strict";
    e.extend(jQuery.easing, {
        def: "easeOutQuad",
        easeInOutExpo: function(e, t, n, i, r) {
            return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
        }
    }),
    e(document).on("click", "[data-scroll-to]", function(t) {
        t.preventDefault();
        var n = e(e(this).attr("href")) || e("#" + e(this).attr("data-scroll-to"));
        n && e("html,body").animate({
            scrollTop: n.offset().top
        }, 600, "easeInOutExpo")
    })
}(jQuery),
function(e) {
    "use strict";
    e(document).on("click", "[data-toggle-class]", function(t) {
        t.preventDefault();
        var n = e(this)
          , i = n.attr("data-toggle-class")
          , r = n.attr("data-toggle-class-target") || n.attr("data-target")
          , o = i && i.split(",") || ""
          , s = r && r.split(",") || Array(n)
          , a = 0;
        e.each(o, function(t, n) {
            var i = e(s[s.length && a])
              , r = i.attr("data-class")
              , l = o[t];
            r != l && i.removeClass(i.attr("data-class")),
            i.toggleClass(o[t]),
            i.attr("data-class", l),
            a++
        }),
        n.toggleClass("active")
    })
}(jQuery),
function(e) {
    "use strict";
    function t() {
        var t = e(".setting");
        e("body").removeClass(e("body").attr("ui-class")).addClass(app.setting.bg).attr("ui-class", app.setting.bg),
        app.setting.folded ? e("#aside").addClass("folded") : e("#aside").removeClass("folded"),
        app.setting.container ? e("body").addClass("container") : e("body").removeClass("container"),
        e("#aside, #aside .sidenav").removeClass(e("#aside .sidenav").attr("ui-class")).addClass(app.setting.aside).attr("ui-class", app.setting.aside),
        e("#aside .navbar").removeClass(e("#aside .navbar").attr("ui-class")).addClass(app.setting.brand).attr("ui-class", app.setting.brand),
        app.setting.fixedContent ? e("body").addClass("fixed-content") : e("body").removeClass("fixed-content"),
        app.setting.fixedAside ? e("body").addClass("fixed-aside") : e("body").removeClass("fixed-aside"),
        t.find('input[name="folded"]').prop("checked", app.setting.folded),
        t.find('input[name="fixedContent"]').prop("checked", app.setting.fixedContent),
        t.find('input[name="fixedAside"]').prop("checked", app.setting.fixedAside),
        t.find('input[name="container"]').prop("checked", app.setting.container),
        t.find('input[name="ajax"]').prop("checked", app.setting.ajax),
        t.find('input[name="theme"][value="' + app.setting.theme + '"]').prop("checked", !0),
        t.find('input[name="bg"][value="' + app.setting.bg + '"]').prop("checked", !0),
        t.find('input[name="aside"][value="' + app.setting.aside + '"]').prop("checked", !0),
        t.find('input[name="brand"][value="' + app.setting.brand + '"]').prop("checked", !0),
        i != app.setting.theme && lazyload.load("/static/admin/css/theme/" + app.setting.theme + ".css").then(function() {
            lazyload.unload("/static/admin/css/theme/" + i + ".css"),
            i = app.setting.theme
        })
    }
    function n(e, t) {
        try {
            if (arguments.length > 1)
                return localStorage.setItem(e, JSON.stringify(t));
            var n = localStorage.getItem(e);
            return n && JSON.parse(n) || !1
        } catch (e) {}
    }
    window.app = {
        color: {
            primary: "#2499ee",
            accent: "#6284f3",
            warn: "#907eec"
        },
        setting: {
            ajax: !0,
            folded: !1,
            container: !1,
            theme: "primary",
            aside: "dark",
            brand: "dark",
            header: "white",
            fixedContent: !1,
            fixedAside: !1,
            bg: ""
        }
    },
    window.hexToRGB = function(e, t) {
        return "rgba(" + parseInt(e.slice(1, 3), 16) + ", " + parseInt(e.slice(3, 5), 16) + ", " + parseInt(e.slice(5, 7), 16) + ", " + t + ")"
    }
    ;
    var i, r = app.color.primary + "-setting";
    n(r) ? app.setting = n(r) : n(r, app.setting);
    for (var o = window.location.search.substring(1).split("&"), s = 0; s < o.length; s++) {
        var a = o[s].split("=");
        app.setting[a[0]] = "true" == a[1] || "false" == a[1] ? "true" == a[1] : a[1],
        n(r, app.setting)
    }
    e(document).on("click.setting", ".setting input", function(i) {
        var o = e(this)
          , s = o.attr("name");
        app.setting[s] = o.is(":checkbox") ? o.prop("checked") : e(this).val(),
        n(r, app.setting),
        t(app.setting),
        "ajax" == s && location.reload()
    }),
    t()
}(jQuery),
function(e) {
    "use strict";
    if (e(document).on("pjax:send", function() {
        e(document).trigger("pjaxSend")
    }),
    e(document).on("pjaxSend", function() {
        e("#aside").modal("hide"),
        e("body").removeClass("modal-open").find(".modal-backdrop").remove(),
        e(".jqvmap-label, .note-popover, .dz-hidden-input").remove()
    }),
    e(document).on("refresh", function() {
        n && n.refresh(),
        i && i.refresh()
    }),
    e(document).on("pjax:success", function() {
        bootstrap && bootstrap.Util ? e(document).one(bootstrap.Util.TRANSITION_END, function() {
            e(".js-Pjax-onswitch").removeClass("js-Pjax-onswitch"),
            e(document).trigger("pjaxEnd")
        }).emulateTransitionEnd(600) : e(document).trigger("pjaxEnd")
    }),
    app.setting.ajax)
        var t = {
            classNames: {
                remove: "animate animate-reverse animate-fast animate-no-delay",
                add: "animate",
                backward: "fadeInRight",
                forward: "fadeInLeft"
            },
            callbacks: {
                addElement: function(t) {
                    e(t).parent().addClass("js-Pjax-onswitch")
                },
                removeElement: function(t) {
                    e(t).css("width", e(t).parent().width())
                }
            }
        }
          , n = new Pjax({
            cacheBust: !1,
            elements: "#aside a:not(.no-ajax), #content-header a, #nav a, .app-header a",
            selectors: ["title", "#content-header", "#content-footer", "#content-main"],
            switches: {
                "#content-main": Pjax.switches.sideBySide
            },
            switchesOptions: {
                "#content-main": t
            }
        })
          , i = new Pjax({
            cacheBust: !1,
            elements: "#content-aside a, #content-body a",
            selectors: ["#content-body"],
            switches: {
                "#content-body": Pjax.switches.sideBySide
            },
            switchesOptions: {
                "#content-body": t
            }
        })
}(jQuery);
var app = app || {};
!function(e, t) {
    "use strict";
    (navigator.userAgent.match(/MSIE/i) || navigator.userAgent.match(/Trident.*rv:11\./)) && e("body").addClass("ie");
    var n = window.navigator.userAgent || window.navigator.vendor || window.opera;
    /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(n) && e("body").addClass("touch"),
    /iPhone|iPod|iPad/.test(n) && e(document, ".modal, .aside").on("shown.bs.modal", function(t) {
        var n = e(".modal-backdrop");
        e(t.target).after(e(n))
    }),
    e(window).on("resize", function() {
        var t = e(window).width();
        t > 1200 && e(".aside-lg").modal("hide"),
        t > 991 && (e("#aside").modal("hide"),
        e(".aside-md, .aside-sm").modal("hide")),
        t > 768 && e(".aside-sm").modal("hide")
    }),
    app.init = function() {
        e('[data-toggle="popover"]').popover(),
        e('[data-toggle="tooltip"]').tooltip(),
        e("body").find("[data-plugin]").plugin()
    }
    ,
    app.init(),
    e(document).on("pjaxEnd", function() {
        app.init()
    })
}(jQuery);