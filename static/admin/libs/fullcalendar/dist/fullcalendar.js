/*!
 * FullCalendar v3.5.1
 * Docs & License: https://fullcalendar.io/
 * (c) 2017 Adam Shaw
 */
!function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), require("moment")) : t(jQuery, moment)
}(function(t, e) {
    function n(t) {
        return j(t, Gt)
    }
    function i(t, e) {
        e.left && t.css({
            "border-left-width": 1,
            "margin-left": e.left - 1
        }),
        e.right && t.css({
            "border-right-width": 1,
            "margin-right": e.right - 1
        })
    }
    function s(t) {
        t.css({
            "margin-left": "",
            "margin-right": "",
            "border-left-width": "",
            "border-right-width": ""
        })
    }
    function r() {
        t("body").addClass("fc-not-allowed")
    }
    function o() {
        t("body").removeClass("fc-not-allowed")
    }
    function a(e, n, i) {
        var s = Math.floor(n / e.length)
          , r = Math.floor(n - s * (e.length - 1))
          , o = []
          , a = []
          , u = []
          , c = 0;
        l(e),
        e.each(function(n, i) {
            var l = n === e.length - 1 ? r : s
              , h = t(i).outerHeight(!0);
            h < l ? (o.push(i),
            a.push(h),
            u.push(t(i).height())) : c += h
        }),
        i && (n -= c,
        s = Math.floor(n / o.length),
        r = Math.floor(n - s * (o.length - 1))),
        t(o).each(function(e, n) {
            var i = e === o.length - 1 ? r : s
              , l = a[e]
              , c = u[e]
              , h = i - (l - c);
            l < i && t(n).height(h)
        })
    }
    function l(t) {
        t.height("")
    }
    function u(e) {
        var n = 0;
        return e.find("> *").each(function(e, i) {
            var s = t(i).outerWidth();
            s > n && (n = s)
        }),
        n++,
        e.width(n),
        n
    }
    function c(t, e) {
        var n, i = t.add(e);
        return i.css({
            position: "relative",
            left: -1
        }),
        n = t.outerHeight() - e.outerHeight(),
        i.css({
            position: "",
            left: ""
        }),
        n
    }
    function h(e) {
        var n = e.css("position")
          , i = e.parents().filter(function() {
            var e = t(this);
            return /(auto|scroll)/.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
        }).eq(0);
        return "fixed" !== n && i.length ? i : t(e[0].ownerDocument || document)
    }
    function d(t, e) {
        var n = t.offset()
          , i = n.left - (e ? e.left : 0)
          , s = n.top - (e ? e.top : 0);
        return {
            left: i,
            right: i + t.outerWidth(),
            top: s,
            bottom: s + t.outerHeight()
        }
    }
    function f(t, e) {
        var n = t.offset()
          , i = p(t)
          , s = n.left + w(t, "border-left-width") + i.left - (e ? e.left : 0)
          , r = n.top + w(t, "border-top-width") + i.top - (e ? e.top : 0);
        return {
            left: s,
            right: s + t[0].clientWidth,
            top: r,
            bottom: r + t[0].clientHeight
        }
    }
    function g(t, e) {
        var n = t.offset()
          , i = n.left + w(t, "border-left-width") + w(t, "padding-left") - (e ? e.left : 0)
          , s = n.top + w(t, "border-top-width") + w(t, "padding-top") - (e ? e.top : 0);
        return {
            left: i,
            right: i + t.width(),
            top: s,
            bottom: s + t.height()
        }
    }
    function p(t) {
        var e, n = t[0].offsetWidth - t[0].clientWidth, i = t[0].offsetHeight - t[0].clientHeight;
        return n = v(n),
        i = v(i),
        e = {
            left: 0,
            right: 0,
            top: 0,
            bottom: i
        },
        m() && "rtl" == t.css("direction") ? e.left = n : e.right = n,
        e
    }
    function v(t) {
        return t = Math.max(0, t),
        t = Math.round(t)
    }
    function m() {
        return null === Wt && (Wt = y()),
        Wt
    }
    function y() {
        var e = t("<div><div/></div>").css({
            position: "absolute",
            top: -1e3,
            left: 0,
            border: 0,
            padding: 0,
            overflow: "scroll",
            direction: "rtl"
        }).appendTo("body")
          , n = e.children()
          , i = n.offset().left > e.offset().left;
        return e.remove(),
        i
    }
    function w(t, e) {
        return parseFloat(t.css(e)) || 0
    }
    function D(t) {
        return 1 == t.which && !t.ctrlKey
    }
    function b(t) {
        var e = t.originalEvent.touches;
        return e && e.length ? e[0].pageX : t.pageX
    }
    function S(t) {
        var e = t.originalEvent.touches;
        return e && e.length ? e[0].pageY : t.pageY
    }
    function E(t) {
        return /^touch/.test(t.type)
    }
    function C(t) {
        t.addClass("fc-unselectable").on("selectstart", R)
    }
    function T(t) {
        t.removeClass("fc-unselectable").off("selectstart", R)
    }
    function R(t) {
        t.preventDefault()
    }
    function I(t, e) {
        var n = {
            left: Math.max(t.left, e.left),
            right: Math.min(t.right, e.right),
            top: Math.max(t.top, e.top),
            bottom: Math.min(t.bottom, e.bottom)
        };
        return n.left < n.right && n.top < n.bottom && n
    }
    function H(t, e) {
        return {
            left: Math.min(Math.max(t.left, e.left), e.right),
            top: Math.min(Math.max(t.top, e.top), e.bottom)
        }
    }
    function M(t) {
        return {
            left: (t.left + t.right) / 2,
            top: (t.top + t.bottom) / 2
        }
    }
    function x(t, e) {
        return {
            left: t.left - e.left,
            top: t.top - e.top
        }
    }
    function z(e) {
        var n, i, s = [], r = [];
        for ("string" == typeof e ? r = e.split(/\s*,\s*/) : "function" == typeof e ? r = [e] : t.isArray(e) && (r = e),
        n = 0; n < r.length; n++)
            i = r[n],
            "string" == typeof i ? s.push("-" == i.charAt(0) ? {
                field: i.substring(1),
                order: -1
            } : {
                field: i,
                order: 1
            }) : "function" == typeof i && s.push({
                func: i
            });
        return s
    }
    function F(t, e, n) {
        var i, s;
        for (i = 0; i < n.length; i++)
            if (s = P(t, e, n[i]))
                return s;
        return 0
    }
    function P(t, e, n) {
        return n.func ? n.func(t, e) : B(t[n.field], e[n.field]) * (n.order || 1)
    }
    function B(e, n) {
        return e || n ? null == n ? -1 : null == e ? 1 : "string" === t.type(e) || "string" === t.type(n) ? String(e).localeCompare(String(n)) : e - n : 0
    }
    function k(t, n) {
        return e.duration({
            days: t.clone().stripTime().diff(n.clone().stripTime(), "days"),
            ms: t.time() - n.time()
        })
    }
    function A(t, n) {
        return e.duration({
            days: t.clone().stripTime().diff(n.clone().stripTime(), "days")
        })
    }
    function L(t, n, i) {
        return e.duration(Math.round(t.diff(n, i, !0)), i)
    }
    function O(t, e) {
        var n, i, s;
        for (n = 0; n < qt.length && (i = qt[n],
        !((s = V(i, t, e)) >= 1 && ot(s))); n++)
            ;
        return i
    }
    function N(t, e) {
        var n = O(t);
        return "week" === n && "object" == typeof e && e.days && (n = "day"),
        n
    }
    function V(t, n, i) {
        return null != i ? i.diff(n, t, !0) : e.isDuration(n) ? n.as(t) : n.end.diff(n.start, t, !0)
    }
    function U(t, e, n) {
        var i;
        return _(n) ? (e - t) / n : (i = n.asMonths(),
        Math.abs(i) >= 1 && ot(i) ? e.diff(t, "months", !0) / i : e.diff(t, "days", !0) / n.asDays())
    }
    function G(t, e) {
        var n, i;
        return _(t) || _(e) ? t / e : (n = t.asMonths(),
        i = e.asMonths(),
        Math.abs(n) >= 1 && ot(n) && Math.abs(i) >= 1 && ot(i) ? n / i : t.asDays() / e.asDays())
    }
    function W(t, n) {
        var i;
        return _(t) ? e.duration(t * n) : (i = t.asMonths(),
        Math.abs(i) >= 1 && ot(i) ? e.duration({
            months: i * n
        }) : e.duration({
            days: t.asDays() * n
        }))
    }
    function _(t) {
        return Boolean(t.hours() || t.minutes() || t.seconds() || t.milliseconds())
    }
    function q(t) {
        return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
    }
    function Y(t) {
        return "string" == typeof t && /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)
    }
    function j(t, e) {
        var n, i, s, r, o, a, l = {};
        if (e)
            for (n = 0; n < e.length; n++) {
                for (i = e[n],
                s = [],
                r = t.length - 1; r >= 0; r--)
                    if ("object" == typeof (o = t[r][i]))
                        s.unshift(o);
                    else if (void 0 !== o) {
                        l[i] = o;
                        break
                    }
                s.length && (l[i] = j(s))
            }
        for (n = t.length - 1; n >= 0; n--) {
            a = t[n];
            for (i in a)
                i in l || (l[i] = a[i])
        }
        return l
    }
    function Z(t, e) {
        for (var n in t)
            Q(t, n) && (e[n] = t[n])
    }
    function Q(t, e) {
        return Yt.call(t, e)
    }
    function $(e, n, i) {
        if (t.isFunction(e) && (e = [e]),
        e) {
            var s, r;
            for (s = 0; s < e.length; s++)
                r = e[s].apply(n, i) || r;
            return r
        }
    }
    function X(t, e) {
        for (var n = 0, i = 0; i < t.length; )
            e(t[i]) ? (t.splice(i, 1),
            n++) : i++;
        return n
    }
    function K(t, e) {
        for (var n = 0, i = 0; i < t.length; )
            t[i] === e ? (t.splice(i, 1),
            n++) : i++;
        return n
    }
    function J() {
        for (var t = 0; t < arguments.length; t++)
            if (void 0 !== arguments[t])
                return arguments[t]
    }
    function tt(t) {
        return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }
    function et(t) {
        return t.replace(/&.*?;/g, "")
    }
    function nt(e) {
        var n = [];
        return t.each(e, function(t, e) {
            null != e && n.push(t + ":" + e)
        }),
        n.join(";")
    }
    function it(e) {
        var n = [];
        return t.each(e, function(t, e) {
            null != e && n.push(t + '="' + tt(e) + '"')
        }),
        n.join(" ")
    }
    function st(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    function rt(t, e) {
        return t - e
    }
    function ot(t) {
        return t % 1 == 0
    }
    function at(t, e) {
        var n = t[e];
        return function() {
            return n.apply(t, arguments)
        }
    }
    function lt(t, e, n) {
        var i, s, r, o, a, l = function() {
            var u = +new Date - o;
            u < e ? i = setTimeout(l, e - u) : (i = null,
            n || (a = t.apply(r, s),
            r = s = null))
        };
        return function() {
            r = this,
            s = arguments,
            o = +new Date;
            var u = n && !i;
            return i || (i = setTimeout(l, e)),
            u && (a = t.apply(r, s),
            r = s = null),
            a
        }
    }
    function ut(n, i, s) {
        var r, o, a, l, u = n[0], c = 1 == n.length && "string" == typeof u;
        return e.isMoment(u) || q(u) || void 0 === u ? l = e.apply(null, n) : (r = !1,
        o = !1,
        c ? jt.test(u) ? (u += "-01",
        n = [u],
        r = !0,
        o = !0) : (a = Zt.exec(u)) && (r = !a[5],
        o = !0) : t.isArray(u) && (o = !0),
        l = i || r ? e.utc.apply(e, n) : e.apply(null, n),
        r ? (l._ambigTime = !0,
        l._ambigZone = !0) : s && (o ? l._ambigZone = !0 : c && l.utcOffset(u))),
        l._fullCalendar = !0,
        l
    }
    function ct(t) {
        return "en" !== t.locale() ? t.clone().locale("en") : t
    }
    function ht() {}
    function dt(t, e) {
        var n;
        return Q(e, "constructor") && (n = e.constructor),
        "function" != typeof n && (n = e.constructor = function() {
            t.apply(this, arguments)
        }
        ),
        n.prototype = Object.create(t.prototype),
        Z(e, n.prototype),
        Z(t, n),
        n
    }
    function ft(t, e) {
        t.then = function(n) {
            return "function" == typeof n ? ae.resolve(n(e)) : t
        }
    }
    function gt(t) {
        t.then = function(e, n) {
            return "function" == typeof n && n(),
            t
        }
    }
    function pt(t, e) {
        return !t && !e || !(!t || !e) && (t.component === e.component && vt(t, e) && vt(e, t))
    }
    function vt(t, e) {
        for (var n in t)
            if (!/^(component|left|right|top|bottom)$/.test(n) && t[n] !== e[n])
                return !1;
        return !0
    }
    function mt(n) {
        var i, s, r, o, a = Vt.dataAttrPrefix;
        return a && (a += "-"),
        i = n.data(a + "event") || null,
        i && (i = "object" == typeof i ? t.extend({}, i) : {},
        s = i.start,
        null == s && (s = i.time),
        r = i.duration,
        o = i.stick,
        delete i.start,
        delete i.time,
        delete i.duration,
        delete i.stick),
        null == s && (s = n.data(a + "start")),
        null == s && (s = n.data(a + "time")),
        null == r && (r = n.data(a + "duration")),
        null == o && (o = n.data(a + "stick")),
        s = null != s ? e.duration(s) : null,
        r = null != r ? e.duration(r) : null,
        o = Boolean(o),
        {
            eventProps: i,
            startTime: s,
            duration: r,
            stick: o
        }
    }
    function yt(t, e) {
        var n, i;
        for (n = 0; n < e.length; n++)
            if (i = e[n],
            i.leftCol <= t.rightCol && i.rightCol >= t.leftCol)
                return !0;
        return !1
    }
    function wt(t, e) {
        return t.leftCol - e.leftCol
    }
    function Dt(t) {
        var e, n, i, s = [];
        for (e = 0; e < t.length; e++) {
            for (n = t[e],
            i = 0; i < s.length && Et(n, s[i]).length; i++)
                ;
            n.level = i,
            (s[i] || (s[i] = [])).push(n)
        }
        return s
    }
    function bt(t) {
        var e, n, i, s, r;
        for (e = 0; e < t.length; e++)
            for (n = t[e],
            i = 0; i < n.length; i++)
                for (s = n[i],
                s.forwardSegs = [],
                r = e + 1; r < t.length; r++)
                    Et(s, t[r], s.forwardSegs)
    }
    function St(t) {
        var e, n, i = t.forwardSegs, s = 0;
        if (void 0 === t.forwardPressure) {
            for (e = 0; e < i.length; e++)
                n = i[e],
                St(n),
                s = Math.max(s, 1 + n.forwardPressure);
            t.forwardPressure = s
        }
    }
    function Et(t, e, n) {
        n = n || [];
        for (var i = 0; i < e.length; i++)
            Ct(t, e[i]) && n.push(e[i]);
        return n
    }
    function Ct(t, e) {
        return t.bottom > e.top && t.top < e.bottom
    }
    function Tt(t) {
        var e, n, i, s = [];
        for (e in t)
            for (n = t[e].eventInstances,
            i = 0; i < n.length; i++)
                s.push(n[i].toLegacy());
        return s
    }
    function Rt(t) {
        this.items = t || []
    }
    function It(e, n) {
        function i(t) {
            n = t
        }
        function s() {
            n.layout ? (g ? g.empty() : g = this.el = t("<div class='fc-toolbar " + n.extraClasses + "'/>"),
            g.append(o("left")).append(o("right")).append(o("center")).append('<div class="fc-clear"/>')) : r()
        }
        function r() {
            g && (g.remove(),
            g = f.el = null)
        }
        function o(i) {
            var s = e.theme
              , r = t('<div class="fc-' + i + '"/>')
              , o = n.layout[i]
              , a = e.opt("customButtons") || {}
              , l = e.overrides.buttonText || {}
              , u = e.opt("buttonText") || {};
            return o && t.each(o.split(" "), function(n) {
                var i, o = t(), c = !0;
                t.each(this.split(","), function(n, i) {
                    var r, h, d, f, g, v, m, y;
                    "title" == i ? (o = o.add(t("<h2>&nbsp;</h2>")),
                    c = !1) : ((r = a[i]) ? (d = function(t) {
                        r.click && r.click.call(y[0], t)
                    }
                    ,
                    (f = s.getCustomButtonIconClass(r)) || (f = s.getIconClass(i)) || (g = r.text)) : (h = e.getViewSpec(i)) ? (p.push(i),
                    d = function() {
                        e.changeView(i)
                    }
                    ,
                    (g = h.buttonTextOverride) || (f = s.getIconClass(i)) || (g = h.buttonTextDefault)) : e[i] && (d = function() {
                        e[i]()
                    }
                    ,
                    (g = l[i]) || (f = s.getIconClass(i)) || (g = u[i])),
                    d && (m = ["fc-" + i + "-button", s.getClass("button"), s.getClass("stateDefault")],
                    g ? v = tt(g) : f && (v = "<span class='" + f + "'></span>"),
                    y = t('<button type="button" class="' + m.join(" ") + '">' + v + "</button>").click(function(t) {
                        y.hasClass(s.getClass("stateDisabled")) || (d(t),
                        (y.hasClass(s.getClass("stateActive")) || y.hasClass(s.getClass("stateDisabled"))) && y.removeClass(s.getClass("stateHover")))
                    }).mousedown(function() {
                        y.not("." + s.getClass("stateActive")).not("." + s.getClass("stateDisabled")).addClass(s.getClass("stateDown"))
                    }).mouseup(function() {
                        y.removeClass(s.getClass("stateDown"))
                    }).hover(function() {
                        y.not("." + s.getClass("stateActive")).not("." + s.getClass("stateDisabled")).addClass(s.getClass("stateHover"))
                    }, function() {
                        y.removeClass(s.getClass("stateHover")).removeClass(s.getClass("stateDown"))
                    }),
                    o = o.add(y)))
                }),
                c && o.first().addClass(s.getClass("cornerLeft")).end().last().addClass(s.getClass("cornerRight")).end(),
                o.length > 1 ? (i = t("<div/>"),
                c && i.addClass(s.getClass("buttonGroup")),
                i.append(o),
                r.append(i)) : r.append(o)
            }),
            r
        }
        function a(t) {
            g && g.find("h2").text(t)
        }
        function l(t) {
            g && g.find(".fc-" + t + "-button").addClass(e.theme.getClass("stateActive"))
        }
        function u(t) {
            g && g.find(".fc-" + t + "-button").removeClass(e.theme.getClass("stateActive"))
        }
        function c(t) {
            g && g.find(".fc-" + t + "-button").prop("disabled", !0).addClass(e.theme.getClass("stateDisabled"))
        }
        function h(t) {
            g && g.find(".fc-" + t + "-button").prop("disabled", !1).removeClass(e.theme.getClass("stateDisabled"))
        }
        function d() {
            return p
        }
        var f = this;
        f.setToolbarOptions = i,
        f.render = s,
        f.removeElement = r,
        f.updateTitle = a,
        f.activateButton = l,
        f.deactivateButton = u,
        f.disableButton = c,
        f.enableButton = h,
        f.getViewsWithButtons = d,
        f.el = null;
        var g, p = []
    }
    function Ht(t, e, n) {
        var i;
        for (i = 0; i < t.length; i++)
            if (!e(t[i].eventInstance.toLegacy(), n ? n.toLegacy() : null))
                return !1;
        return !0
    }
    function Mt(t, e) {
        var n, i, s, r, o = e.toLegacy();
        for (n = 0; n < t.length; n++) {
            if (i = t[n].eventInstance,
            s = i.def,
            !1 === (r = s.getOverlap()))
                return !1;
            if ("function" == typeof r && !r(i.toLegacy(), o))
                return !1
        }
        return !0
    }
    function xt(e, n) {
        return null == n ? e : t.isFunction(n) ? e.filter(n) : (n += "",
        e.filter(function(t) {
            return t.id == n
        }))
    }
    function zt(e) {
        t.each(He, function(t, n) {
            null == e[t] && (e[t] = n(e))
        })
    }
    function Ft(t) {
        return e.localeData(t) || e.localeData("en")
    }
    function Pt(t, e) {
        var n, i, s = [], r = e.startMs;
        for (t.sort(Bt),
        n = 0; n < t.length; n++)
            i = t[n],
            i.startMs > r && s.push(new Me(r,i.startMs)),
            i.endMs > r && (r = i.endMs);
        return r < e.endMs && s.push(new Me(r,e.endMs)),
        s
    }
    function Bt(t, e) {
        return t.startMs - e.startMs
    }
    function kt(t, e) {
        return t.getPrimitive() == e.getPrimitive()
    }
    function At(t, e) {
        var n, i = [];
        for (n = 0; n < t.length; n++)
            i.push.apply(i, t[n].buildInstances(e));
        return i
    }
    function Lt(t) {
        return t.map(function(t) {
            return new Ve(t.dateProfile.unzonedRange,t.def,t)
        })
    }
    function Ot(t) {
        return t.map(function(t) {
            return t.dateProfile.unzonedRange
        })
    }
    function Nt(t) {
        return t.map(function(t) {
            return t.componentFootprint
        })
    }
    var Vt = t.fullCalendar = {
        version: "3.5.1",
        internalApiVersion: 10
    }
      , Ut = Vt.views = {};
    t.fn.fullCalendar = function(e) {
        var n = Array.prototype.slice.call(arguments, 1)
          , i = this;
        return this.each(function(s, r) {
            var o, a = t(r), l = a.data("fullCalendar");
            "string" == typeof e ? "getCalendar" === e ? s || (i = l) : "destroy" === e ? l && (l.destroy(),
            a.removeData("fullCalendar")) : l ? t.isFunction(l[e]) ? (o = l[e].apply(l, n),
            s || (i = o),
            "destroy" === e && a.removeData("fullCalendar")) : Vt.warn("'" + e + "' is an unknown FullCalendar method.") : Vt.warn("Attempting to call a FullCalendar method on an element with no calendar.") : l || (l = new Ee(a,e),
            a.data("fullCalendar", l),
            l.render())
        }),
        i
    }
    ;
    var Gt = ["header", "footer", "buttonText", "buttonIcons", "themeButtonIcons"];
    Vt.applyAll = $,
    Vt.debounce = lt,
    Vt.isInt = ot,
    Vt.htmlEscape = tt,
    Vt.cssToStr = nt,
    Vt.proxy = at,
    Vt.capitaliseFirstLetter = st,
    Vt.getOuterRect = d,
    Vt.getClientRect = f,
    Vt.getContentRect = g,
    Vt.getScrollbarWidths = p;
    var Wt = null;
    Vt.preventDefault = R,
    Vt.intersectRects = I,
    Vt.parseFieldSpecs = z,
    Vt.compareByFieldSpecs = F,
    Vt.compareByFieldSpec = P,
    Vt.flexibleCompare = B,
    Vt.computeGreatestUnit = O,
    Vt.divideRangeByDuration = U,
    Vt.divideDurationByDuration = G,
    Vt.multiplyDuration = W,
    Vt.durationHasTime = _;
    var _t = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
      , qt = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Vt.log = function() {
        var t = window.console;
        if (t && t.log)
            return t.log.apply(t, arguments)
    }
    ,
    Vt.warn = function() {
        var t = window.console;
        return t && t.warn ? t.warn.apply(t, arguments) : Vt.log.apply(Vt, arguments)
    }
    ;
    var Yt = {}.hasOwnProperty;
    Vt.removeExact = K;
    var jt = /^\s*\d{4}-\d\d$/
      , Zt = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/
      , Qt = e.fn
      , $t = t.extend({}, Qt)
      , Xt = e.momentProperties;
    Xt.push("_fullCalendar"),
    Xt.push("_ambigTime"),
    Xt.push("_ambigZone"),
    Vt.moment = function() {
        return ut(arguments)
    }
    ,
    Vt.moment.utc = function() {
        var t = ut(arguments, !0);
        return t.hasTime() && t.utc(),
        t
    }
    ,
    Vt.moment.parseZone = function() {
        return ut(arguments, !0, !0)
    }
    ,
    Qt.week = Qt.weeks = function(t) {
        var e = this._locale._fullCalendar_weekCalc;
        return null == t && "function" == typeof e ? e(this) : "ISO" === e ? $t.isoWeek.apply(this, arguments) : $t.week.apply(this, arguments)
    }
    ,
    Qt.time = function(t) {
        if (!this._fullCalendar)
            return $t.time.apply(this, arguments);
        if (null == t)
            return e.duration({
                hours: this.hours(),
                minutes: this.minutes(),
                seconds: this.seconds(),
                milliseconds: this.milliseconds()
            });
        this._ambigTime = !1,
        e.isDuration(t) || e.isMoment(t) || (t = e.duration(t));
        var n = 0;
        return e.isDuration(t) && (n = 24 * Math.floor(t.asDays())),
        this.hours(n + t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())
    }
    ,
    Qt.stripTime = function() {
        return this._ambigTime || (this.utc(!0),
        this.set({
            hours: 0,
            minutes: 0,
            seconds: 0,
            ms: 0
        }),
        this._ambigTime = !0,
        this._ambigZone = !0),
        this
    }
    ,
    Qt.hasTime = function() {
        return !this._ambigTime
    }
    ,
    Qt.stripZone = function() {
        var t;
        return this._ambigZone || (t = this._ambigTime,
        this.utc(!0),
        this._ambigTime = t || !1,
        this._ambigZone = !0),
        this
    }
    ,
    Qt.hasZone = function() {
        return !this._ambigZone
    }
    ,
    Qt.local = function(t) {
        return $t.local.call(this, this._ambigZone || t),
        this._ambigTime = !1,
        this._ambigZone = !1,
        this
    }
    ,
    Qt.utc = function(t) {
        return $t.utc.call(this, t),
        this._ambigTime = !1,
        this._ambigZone = !1,
        this
    }
    ,
    Qt.utcOffset = function(t) {
        return null != t && (this._ambigTime = !1,
        this._ambigZone = !1),
        $t.utcOffset.apply(this, arguments)
    }
    ,
    Qt.format = function() {
        return this._fullCalendar && arguments[0] ? Kt(this, arguments[0]) : this._ambigTime ? te(ct(this), "YYYY-MM-DD") : this._ambigZone ? te(ct(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? te(ct(this)) : $t.format.apply(this, arguments)
    }
    ,
    Qt.toISOString = function() {
        return this._ambigTime ? te(ct(this), "YYYY-MM-DD") : this._ambigZone ? te(ct(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? $t.toISOString.apply(ct(this), arguments) : $t.toISOString.apply(this, arguments)
    }
    ,
    function() {
        function t(t, e) {
            return c(s(e).fakeFormatString, t)
        }
        function e(t, e) {
            return $t.format.call(t, e)
        }
        function n(t, e, n, r, o) {
            var a;
            return t = Vt.moment.parseZone(t),
            e = Vt.moment.parseZone(e),
            a = t.localeData(),
            n = a.longDateFormat(n) || n,
            i(s(n), t, e, r || " - ", o)
        }
        function i(t, e, n, i, s) {
            var r, o, a, l = t.sameUnits, u = e.clone().stripZone(), c = n.clone().stripZone(), f = h(t.fakeFormatString, e), g = h(t.fakeFormatString, n), p = "", v = "", m = "", y = "", w = "";
            for (r = 0; r < l.length && (!l[r] || u.isSame(c, l[r])); r++)
                p += f[r];
            for (o = l.length - 1; o > r && (!l[o] || u.isSame(c, l[o])) && (o - 1 !== r || "." !== f[o]); o--)
                v = f[o] + v;
            for (a = r; a <= o; a++)
                m += f[a],
                y += g[a];
            return (m || y) && (w = s ? y + i + m : m + i + y),
            d(p + w + v)
        }
        function s(t) {
            return D[t] || (D[t] = r(t))
        }
        function r(t) {
            var e = o(t);
            return {
                fakeFormatString: l(e),
                sameUnits: u(e)
            }
        }
        function o(t) {
            for (var e, n = [], i = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; e = i.exec(t); )
                e[1] ? n.push.apply(n, a(e[1])) : e[2] ? n.push({
                    maybe: o(e[2])
                }) : e[3] ? n.push({
                    token: e[3]
                }) : e[5] && n.push.apply(n, a(e[5]));
            return n
        }
        function a(t) {
            return ". " === t ? [".", " "] : [t]
        }
        function l(t) {
            var e, n, i = [];
            for (e = 0; e < t.length; e++)
                n = t[e],
                "string" == typeof n ? i.push("[" + n + "]") : n.token ? n.token in y ? i.push(p + "[" + n.token + "]") : i.push(n.token) : n.maybe && i.push(v + l(n.maybe) + v);
            return i.join(g)
        }
        function u(t) {
            var e, n, i, s = [];
            for (e = 0; e < t.length; e++)
                n = t[e],
                n.token ? (i = w[n.token.charAt(0)],
                s.push(i ? i.unit : "second")) : n.maybe ? s.push.apply(s, u(n.maybe)) : s.push(null);
            return s
        }
        function c(t, e) {
            return d(h(t, e).join(""))
        }
        function h(t, n) {
            var i, s, r = [], o = e(n, t), a = o.split(g);
            for (i = 0; i < a.length; i++)
                s = a[i],
                s.charAt(0) === p ? r.push(y[s.substring(1)](n)) : r.push(s);
            return r
        }
        function d(t) {
            return t.replace(m, function(t, e) {
                return e.match(/[1-9]/) ? e : ""
            })
        }
        function f(t) {
            var e, n, i, s, r = o(t);
            for (e = 0; e < r.length; e++)
                n = r[e],
                n.token && (i = w[n.token.charAt(0)]) && (!s || i.value > s.value) && (s = i);
            return s ? s.unit : null
        }
        Vt.formatDate = t,
        Vt.formatRange = n,
        Vt.oldMomentFormat = e,
        Vt.queryMostGranularFormatUnit = f;
        var g = "\v"
          , p = ""
          , v = ""
          , m = new RegExp(v + "([^" + v + "]*)" + v,"g")
          , y = {
            t: function(t) {
                return e(t, "a").charAt(0)
            },
            T: function(t) {
                return e(t, "A").charAt(0)
            }
        }
          , w = {
            Y: {
                value: 1,
                unit: "year"
            },
            M: {
                value: 2,
                unit: "month"
            },
            W: {
                value: 3,
                unit: "week"
            },
            w: {
                value: 3,
                unit: "week"
            },
            D: {
                value: 4,
                unit: "day"
            },
            d: {
                value: 4,
                unit: "day"
            }
        }
          , D = {}
    }();
    var Kt = Vt.formatDate
      , Jt = Vt.formatRange
      , te = Vt.oldMomentFormat;
    Vt.Class = ht,
    ht.extend = function() {
        var t, e = {};
        for (t = 0; t < arguments.length; t++)
            Z(arguments[t], e);
        return dt(this, e)
    }
    ,
    ht.mixin = function(t) {
        Z(t, this.prototype)
    }
    ;
    var ee = Vt.EmitterMixin = {
        on: function(e, n) {
            return t(this).on(e, this._prepareIntercept(n)),
            this
        },
        one: function(e, n) {
            return t(this).one(e, this._prepareIntercept(n)),
            this
        },
        _prepareIntercept: function(e) {
            var n = function(t, n) {
                return e.apply(n.context || this, n.args || [])
            };
            return e.guid || (e.guid = t.guid++),
            n.guid = e.guid,
            n
        },
        off: function(e, n) {
            return t(this).off(e, n),
            this
        },
        trigger: function(e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return t(this).triggerHandler(e, {
                args: n
            }),
            this
        },
        triggerWith: function(e, n, i) {
            return t(this).triggerHandler(e, {
                context: n,
                args: i
            }),
            this
        },
        hasHandlers: function(e) {
            var n = t._data(this, "events");
            return n && n[e] && n[e].length > 0
        }
    }
      , ne = Vt.ListenerMixin = function() {
        var e = 0;
        return {
            listenerId: null,
            listenTo: function(e, n, i) {
                if ("object" == typeof n)
                    for (var s in n)
                        n.hasOwnProperty(s) && this.listenTo(e, s, n[s]);
                else
                    "string" == typeof n && e.on(n + "." + this.getListenerNamespace(), t.proxy(i, this))
            },
            stopListeningTo: function(t, e) {
                t.off((e || "") + "." + this.getListenerNamespace())
            },
            getListenerNamespace: function() {
                return null == this.listenerId && (this.listenerId = e++),
                "_listener" + this.listenerId
            }
        }
    }()
      , ie = {
        standardPropMap: {},
        applyRawProps: function(t) {
            var e, n = this.standardPropMap, i = {}, s = {};
            for (e in t)
                !0 === n[e] ? this[e] = t[e] : !1 === n[e] ? i[e] = t[e] : s[e] = t[e];
            return this.applyOtherRawProps(s),
            this.applyManualRawProps(i)
        },
        applyManualRawProps: function(t) {
            return !0
        },
        applyOtherRawProps: function(t) {}
    }
      , se = function(t) {
        var e = this.prototype;
        e.standardPropMap = Object.create(e.standardPropMap),
        Z(t, e.standardPropMap)
    }
      , re = function(t, e) {
        var n, i = this.prototype.standardPropMap;
        for (n in i)
            null != t[n] && !0 === i[n] && (e[n] = t[n])
    }
      , oe = ht.extend(ee, ne, {
        _props: null,
        _watchers: null,
        _globalWatchArgs: null,
        constructor: function() {
            this._watchers = {},
            this._props = {},
            this.applyGlobalWatchers()
        },
        applyGlobalWatchers: function() {
            var t, e = this._globalWatchArgs || [];
            for (t = 0; t < e.length; t++)
                this.watch.apply(this, e[t])
        },
        has: function(t) {
            return t in this._props
        },
        get: function(t) {
            return void 0 === t ? this._props : this._props[t]
        },
        set: function(t, e) {
            var n;
            "string" == typeof t ? (n = {},
            n[t] = void 0 === e ? null : e) : n = t,
            this.setProps(n)
        },
        reset: function(t) {
            var e, n = this._props, i = {};
            for (e in n)
                i[e] = void 0;
            for (e in t)
                i[e] = t[e];
            this.setProps(i)
        },
        unset: function(t) {
            var e, n, i = {};
            for (e = "string" == typeof t ? [t] : t,
            n = 0; n < e.length; n++)
                i[e[n]] = void 0;
            this.setProps(i)
        },
        setProps: function(t) {
            var e, n, i = {}, s = 0;
            for (e in t)
                "object" != typeof (n = t[e]) && n === this._props[e] || (i[e] = n,
                s++);
            if (s) {
                this.trigger("before:batchChange", i);
                for (e in i)
                    n = i[e],
                    this.trigger("before:change", e, n),
                    this.trigger("before:change:" + e, n);
                for (e in i)
                    n = i[e],
                    void 0 === n ? delete this._props[e] : this._props[e] = n,
                    this.trigger("change:" + e, n),
                    this.trigger("change", e, n);
                this.trigger("batchChange", i)
            }
        },
        watch: function(t, e, n, i) {
            var s = this;
            this.unwatch(t),
            this._watchers[t] = this._watchDeps(e, function(e) {
                var i = n.call(s, e);
                i && i.then ? (s.unset(t),
                i.then(function(e) {
                    s.set(t, e)
                })) : s.set(t, i)
            }, function() {
                s.unset(t),
                i && i.call(s)
            })
        },
        unwatch: function(t) {
            var e = this._watchers[t];
            e && (delete this._watchers[t],
            e.teardown())
        },
        _watchDeps: function(t, e, n) {
            function i(t, e, i) {
                1 === ++a && u === l && (d = !0,
                n(),
                d = !1)
            }
            function s(t, n, i) {
                void 0 === n ? (i || void 0 === c[t] || u--,
                delete c[t]) : (i || void 0 !== c[t] || u++,
                c[t] = n),
                --a || u === l && (d || e(c))
            }
            function r(t, e) {
                o.on(t, e),
                h.push([t, e])
            }
            var o = this
              , a = 0
              , l = t.length
              , u = 0
              , c = {}
              , h = []
              , d = !1;
            return t.forEach(function(t) {
                var e = !1;
                "?" === t.charAt(0) && (t = t.substring(1),
                e = !0),
                r("before:change:" + t, function(n) {
                    i(t, n, e)
                }),
                r("change:" + t, function(n) {
                    s(t, n, e)
                })
            }),
            t.forEach(function(t) {
                var e = !1;
                "?" === t.charAt(0) && (t = t.substring(1),
                e = !0),
                o.has(t) ? (c[t] = o.get(t),
                u++) : e && u++
            }),
            u === l && e(c),
            {
                teardown: function() {
                    for (var t = 0; t < h.length; t++)
                        o.off(h[t][0], h[t][1]);
                    h = null,
                    u === l && n()
                },
                flash: function() {
                    u === l && (n(),
                    e(c))
                }
            }
        },
        flash: function(t) {
            var e = this._watchers[t];
            e && e.flash()
        }
    });
    oe.watch = function() {
        var t = this.prototype;
        t._globalWatchArgs || (t._globalWatchArgs = []),
        t._globalWatchArgs.push(arguments)
    }
    ,
    Vt.Model = oe;
    var ae = {
        construct: function(e) {
            var n = t.Deferred()
              , i = n.promise();
            return "function" == typeof e && e(function(t) {
                n.resolve(t),
                ft(i, t)
            }, function() {
                n.reject(),
                gt(i)
            }),
            i
        },
        resolve: function(e) {
            var n = t.Deferred().resolve(e)
              , i = n.promise();
            return ft(i, e),
            i
        },
        reject: function() {
            var e = t.Deferred().reject()
              , n = e.promise();
            return gt(n),
            n
        }
    };
    Vt.Promise = ae;
    var le = ht.extend(ee, {
        q: null,
        isPaused: !1,
        isRunning: !1,
        constructor: function() {
            this.q = []
        },
        queue: function() {
            this.q.push.apply(this.q, arguments),
            this.tryStart()
        },
        pause: function() {
            this.isPaused = !0
        },
        resume: function() {
            this.isPaused = !1,
            this.tryStart()
        },
        tryStart: function() {
            !this.isRunning && this.canRunNext() && (this.isRunning = !0,
            this.trigger("start"),
            this.runNext())
        },
        canRunNext: function() {
            return !this.isPaused && this.q.length
        },
        runNext: function() {
            this.runTask(this.q.shift())
        },
        runTask: function(t) {
            this.runTaskFunc(t)
        },
        runTaskFunc: function(t) {
            function e() {
                n.canRunNext() ? n.runNext() : (n.isRunning = !1,
                n.trigger("stop"))
            }
            var n = this
              , i = t();
            i && i.then ? i.then(e) : e()
        }
    });
    Vt.TaskQueue = le;
    var ue = le.extend({
        waitsByNamespace: null,
        waitNamespace: null,
        waitId: null,
        constructor: function(t) {
            le.call(this),
            this.waitsByNamespace = t || {}
        },
        queue: function(t, e, n) {
            var i, s = {
                func: t,
                namespace: e,
                type: n
            };
            e && (i = this.waitsByNamespace[e]),
            this.waitNamespace && (e === this.waitNamespace && null != i ? this.delayWait(i) : (this.clearWait(),
            this.tryStart())),
            this.compoundTask(s) && (this.waitNamespace || null == i ? this.tryStart() : this.startWait(e, i))
        },
        startWait: function(t, e) {
            this.waitNamespace = t,
            this.spawnWait(e)
        },
        delayWait: function(t) {
            clearTimeout(this.waitId),
            this.spawnWait(t)
        },
        spawnWait: function(t) {
            var e = this;
            this.waitId = setTimeout(function() {
                e.waitNamespace = null,
                e.tryStart()
            }, t)
        },
        clearWait: function() {
            this.waitNamespace && (clearTimeout(this.waitId),
            this.waitId = null,
            this.waitNamespace = null)
        },
        canRunNext: function() {
            if (!le.prototype.canRunNext.apply(this, arguments))
                return !1;
            if (this.waitNamespace) {
                for (var t = this.q, e = 0; e < t.length; e++)
                    if (t[e].namespace !== this.waitNamespace)
                        return !0;
                return !1
            }
            return !0
        },
        runTask: function(t) {
            this.runTaskFunc(t.func)
        },
        compoundTask: function(t) {
            var e, n, i = this.q, s = !0;
            if (t.namespace && ("destroy" === t.type || "init" === t.type)) {
                for (e = i.length - 1; e >= 0; e--)
                    n = i[e],
                    n.namespace !== t.namespace || "add" !== n.type && "remove" !== n.type || i.splice(e, 1);
                "destroy" === t.type ? i.length && (n = i[i.length - 1],
                n.namespace === t.namespace && ("init" === n.type ? (s = !1,
                i.pop()) : "destroy" === n.type && (s = !1))) : "init" === t.type && i.length && (n = i[i.length - 1],
                n.namespace === t.namespace && "init" === n.type && i.pop())
            }
            return s && i.push(t),
            s
        }
    });
    Vt.RenderQueue = ue;
    var ce = ht.extend(ne, {
        isHidden: !0,
        options: null,
        el: null,
        margin: 10,
        constructor: function(t) {
            this.options = t || {}
        },
        show: function() {
            this.isHidden && (this.el || this.render(),
            this.el.show(),
            this.position(),
            this.isHidden = !1,
            this.trigger("show"))
        },
        hide: function() {
            this.isHidden || (this.el.hide(),
            this.isHidden = !0,
            this.trigger("hide"))
        },
        render: function() {
            var e = this
              , n = this.options;
            this.el = t('<div class="fc-popover"/>').addClass(n.className || "").css({
                top: 0,
                left: 0
            }).append(n.content).appendTo(n.parentEl),
            this.el.on("click", ".fc-close", function() {
                e.hide()
            }),
            n.autoHide && this.listenTo(t(document), "mousedown", this.documentMousedown)
        },
        documentMousedown: function(e) {
            this.el && !t(e.target).closest(this.el).length && this.hide()
        },
        removeElement: function() {
            this.hide(),
            this.el && (this.el.remove(),
            this.el = null),
            this.stopListeningTo(t(document), "mousedown")
        },
        position: function() {
            var e, n, i, s, r, o = this.options, a = this.el.offsetParent().offset(), l = this.el.outerWidth(), u = this.el.outerHeight(), c = t(window), d = h(this.el);
            s = o.top || 0,
            r = void 0 !== o.left ? o.left : void 0 !== o.right ? o.right - l : 0,
            d.is(window) || d.is(document) ? (d = c,
            e = 0,
            n = 0) : (i = d.offset(),
            e = i.top,
            n = i.left),
            e += c.scrollTop(),
            n += c.scrollLeft(),
            !1 !== o.viewportConstrain && (s = Math.min(s, e + d.outerHeight() - u - this.margin),
            s = Math.max(s, e + this.margin),
            r = Math.min(r, n + d.outerWidth() - l - this.margin),
            r = Math.max(r, n + this.margin)),
            this.el.css({
                top: s - a.top,
                left: r - a.left
            })
        },
        trigger: function(t) {
            this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    })
      , he = Vt.CoordCache = ht.extend({
        els: null,
        forcedOffsetParentEl: null,
        origin: null,
        boundingRect: null,
        isHorizontal: !1,
        isVertical: !1,
        lefts: null,
        rights: null,
        tops: null,
        bottoms: null,
        constructor: function(e) {
            this.els = t(e.els),
            this.isHorizontal = e.isHorizontal,
            this.isVertical = e.isVertical,
            this.forcedOffsetParentEl = e.offsetParent ? t(e.offsetParent) : null
        },
        build: function() {
            var t = this.forcedOffsetParentEl;
            !t && this.els.length > 0 && (t = this.els.eq(0).offsetParent()),
            this.origin = t ? t.offset() : null,
            this.boundingRect = this.queryBoundingRect(),
            this.isHorizontal && this.buildElHorizontals(),
            this.isVertical && this.buildElVerticals()
        },
        clear: function() {
            this.origin = null,
            this.boundingRect = null,
            this.lefts = null,
            this.rights = null,
            this.tops = null,
            this.bottoms = null
        },
        ensureBuilt: function() {
            this.origin || this.build()
        },
        buildElHorizontals: function() {
            var e = []
              , n = [];
            this.els.each(function(i, s) {
                var r = t(s)
                  , o = r.offset().left
                  , a = r.outerWidth();
                e.push(o),
                n.push(o + a)
            }),
            this.lefts = e,
            this.rights = n
        },
        buildElVerticals: function() {
            var e = []
              , n = [];
            this.els.each(function(i, s) {
                var r = t(s)
                  , o = r.offset().top
                  , a = r.outerHeight();
                e.push(o),
                n.push(o + a)
            }),
            this.tops = e,
            this.bottoms = n
        },
        getHorizontalIndex: function(t) {
            this.ensureBuilt();
            var e, n = this.lefts, i = this.rights, s = n.length;
            for (e = 0; e < s; e++)
                if (t >= n[e] && t < i[e])
                    return e
        },
        getVerticalIndex: function(t) {
            this.ensureBuilt();
            var e, n = this.tops, i = this.bottoms, s = n.length;
            for (e = 0; e < s; e++)
                if (t >= n[e] && t < i[e])
                    return e
        },
        getLeftOffset: function(t) {
            return this.ensureBuilt(),
            this.lefts[t]
        },
        getLeftPosition: function(t) {
            return this.ensureBuilt(),
            this.lefts[t] - this.origin.left
        },
        getRightOffset: function(t) {
            return this.ensureBuilt(),
            this.rights[t]
        },
        getRightPosition: function(t) {
            return this.ensureBuilt(),
            this.rights[t] - this.origin.left
        },
        getWidth: function(t) {
            return this.ensureBuilt(),
            this.rights[t] - this.lefts[t]
        },
        getTopOffset: function(t) {
            return this.ensureBuilt(),
            this.tops[t]
        },
        getTopPosition: function(t) {
            return this.ensureBuilt(),
            this.tops[t] - this.origin.top
        },
        getBottomOffset: function(t) {
            return this.ensureBuilt(),
            this.bottoms[t]
        },
        getBottomPosition: function(t) {
            return this.ensureBuilt(),
            this.bottoms[t] - this.origin.top
        },
        getHeight: function(t) {
            return this.ensureBuilt(),
            this.bottoms[t] - this.tops[t]
        },
        queryBoundingRect: function() {
            var t;
            return this.els.length > 0 && (t = h(this.els.eq(0)),
            !t.is(document)) ? f(t) : null
        },
        isPointInBounds: function(t, e) {
            return this.isLeftInBounds(t) && this.isTopInBounds(e)
        },
        isLeftInBounds: function(t) {
            return !this.boundingRect || t >= this.boundingRect.left && t < this.boundingRect.right
        },
        isTopInBounds: function(t) {
            return !this.boundingRect || t >= this.boundingRect.top && t < this.boundingRect.bottom
        }
    })
      , de = Vt.DragListener = ht.extend(ne, {
        options: null,
        subjectEl: null,
        originX: null,
        originY: null,
        scrollEl: null,
        isInteracting: !1,
        isDistanceSurpassed: !1,
        isDelayEnded: !1,
        isDragging: !1,
        isTouch: !1,
        isGeneric: !1,
        delay: null,
        delayTimeoutId: null,
        minDistance: null,
        shouldCancelTouchScroll: !0,
        scrollAlwaysKills: !1,
        constructor: function(t) {
            this.options = t || {}
        },
        startInteraction: function(e, n) {
            if ("mousedown" === e.type) {
                if (ge.get().shouldIgnoreMouse())
                    return;
                if (!D(e))
                    return;
                e.preventDefault()
            }
            this.isInteracting || (n = n || {},
            this.delay = J(n.delay, this.options.delay, 0),
            this.minDistance = J(n.distance, this.options.distance, 0),
            this.subjectEl = this.options.subjectEl,
            C(t("body")),
            this.isInteracting = !0,
            this.isTouch = E(e),
            this.isGeneric = "dragstart" === e.type,
            this.isDelayEnded = !1,
            this.isDistanceSurpassed = !1,
            this.originX = b(e),
            this.originY = S(e),
            this.scrollEl = h(t(e.target)),
            this.bindHandlers(),
            this.initAutoScroll(),
            this.handleInteractionStart(e),
            this.startDelay(e),
            this.minDistance || this.handleDistanceSurpassed(e))
        },
        handleInteractionStart: function(t) {
            this.trigger("interactionStart", t)
        },
        endInteraction: function(e, n) {
            this.isInteracting && (this.endDrag(e),
            this.delayTimeoutId && (clearTimeout(this.delayTimeoutId),
            this.delayTimeoutId = null),
            this.destroyAutoScroll(),
            this.unbindHandlers(),
            this.isInteracting = !1,
            this.handleInteractionEnd(e, n),
            T(t("body")))
        },
        handleInteractionEnd: function(t, e) {
            this.trigger("interactionEnd", t, e || !1)
        },
        bindHandlers: function() {
            var e = ge.get();
            this.isGeneric ? this.listenTo(t(document), {
                drag: this.handleMove,
                dragstop: this.endInteraction
            }) : this.isTouch ? this.listenTo(e, {
                touchmove: this.handleTouchMove,
                touchend: this.endInteraction,
                scroll: this.handleTouchScroll
            }) : this.listenTo(e, {
                mousemove: this.handleMouseMove,
                mouseup: this.endInteraction
            }),
            this.listenTo(e, {
                selectstart: R,
                contextmenu: R
            })
        },
        unbindHandlers: function() {
            this.stopListeningTo(ge.get()),
            this.stopListeningTo(t(document))
        },
        startDrag: function(t, e) {
            this.startInteraction(t, e),
            this.isDragging || (this.isDragging = !0,
            this.handleDragStart(t))
        },
        handleDragStart: function(t) {
            this.trigger("dragStart", t)
        },
        handleMove: function(t) {
            var e = b(t) - this.originX
              , n = S(t) - this.originY
              , i = this.minDistance;
            this.isDistanceSurpassed || e * e + n * n >= i * i && this.handleDistanceSurpassed(t),
            this.isDragging && this.handleDrag(e, n, t)
        },
        handleDrag: function(t, e, n) {
            this.trigger("drag", t, e, n),
            this.updateAutoScroll(n)
        },
        endDrag: function(t) {
            this.isDragging && (this.isDragging = !1,
            this.handleDragEnd(t))
        },
        handleDragEnd: function(t) {
            this.trigger("dragEnd", t)
        },
        startDelay: function(t) {
            var e = this;
            this.delay ? this.delayTimeoutId = setTimeout(function() {
                e.handleDelayEnd(t)
            }, this.delay) : this.handleDelayEnd(t)
        },
        handleDelayEnd: function(t) {
            this.isDelayEnded = !0,
            this.isDistanceSurpassed && this.startDrag(t)
        },
        handleDistanceSurpassed: function(t) {
            this.isDistanceSurpassed = !0,
            this.isDelayEnded && this.startDrag(t)
        },
        handleTouchMove: function(t) {
            this.isDragging && this.shouldCancelTouchScroll && t.preventDefault(),
            this.handleMove(t)
        },
        handleMouseMove: function(t) {
            this.handleMove(t)
        },
        handleTouchScroll: function(t) {
            this.isDragging && !this.scrollAlwaysKills || this.endInteraction(t, !0)
        },
        trigger: function(t) {
            this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1)),
            this["_" + t] && this["_" + t].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    });
    de.mixin({
        isAutoScroll: !1,
        scrollBounds: null,
        scrollTopVel: null,
        scrollLeftVel: null,
        scrollIntervalId: null,
        scrollSensitivity: 30,
        scrollSpeed: 200,
        scrollIntervalMs: 50,
        initAutoScroll: function() {
            var t = this.scrollEl;
            this.isAutoScroll = this.options.scroll && t && !t.is(window) && !t.is(document),
            this.isAutoScroll && this.listenTo(t, "scroll", lt(this.handleDebouncedScroll, 100))
        },
        destroyAutoScroll: function() {
            this.endAutoScroll(),
            this.isAutoScroll && this.stopListeningTo(this.scrollEl, "scroll")
        },
        computeScrollBounds: function() {
            this.isAutoScroll && (this.scrollBounds = d(this.scrollEl))
        },
        updateAutoScroll: function(t) {
            var e, n, i, s, r = this.scrollSensitivity, o = this.scrollBounds, a = 0, l = 0;
            o && (e = (r - (S(t) - o.top)) / r,
            n = (r - (o.bottom - S(t))) / r,
            i = (r - (b(t) - o.left)) / r,
            s = (r - (o.right - b(t))) / r,
            e >= 0 && e <= 1 ? a = e * this.scrollSpeed * -1 : n >= 0 && n <= 1 && (a = n * this.scrollSpeed),
            i >= 0 && i <= 1 ? l = i * this.scrollSpeed * -1 : s >= 0 && s <= 1 && (l = s * this.scrollSpeed)),
            this.setScrollVel(a, l)
        },
        setScrollVel: function(t, e) {
            this.scrollTopVel = t,
            this.scrollLeftVel = e,
            this.constrainScrollVel(),
            !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(at(this, "scrollIntervalFunc"), this.scrollIntervalMs))
        },
        constrainScrollVel: function() {
            var t = this.scrollEl;
            this.scrollTopVel < 0 ? t.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && t.scrollTop() + t[0].clientHeight >= t[0].scrollHeight && (this.scrollTopVel = 0),
            this.scrollLeftVel < 0 ? t.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && t.scrollLeft() + t[0].clientWidth >= t[0].scrollWidth && (this.scrollLeftVel = 0)
        },
        scrollIntervalFunc: function() {
            var t = this.scrollEl
              , e = this.scrollIntervalMs / 1e3;
            this.scrollTopVel && t.scrollTop(t.scrollTop() + this.scrollTopVel * e),
            this.scrollLeftVel && t.scrollLeft(t.scrollLeft() + this.scrollLeftVel * e),
            this.constrainScrollVel(),
            this.scrollTopVel || this.scrollLeftVel || this.endAutoScroll()
        },
        endAutoScroll: function() {
            this.scrollIntervalId && (clearInterval(this.scrollIntervalId),
            this.scrollIntervalId = null,
            this.handleScrollEnd())
        },
        handleDebouncedScroll: function() {
            this.scrollIntervalId || this.handleScrollEnd()
        },
        handleScrollEnd: function() {}
    });
    var fe = de.extend({
        component: null,
        origHit: null,
        hit: null,
        coordAdjust: null,
        constructor: function(t, e) {
            de.call(this, e),
            this.component = t
        },
        handleInteractionStart: function(t) {
            var e, n, i, s = this.subjectEl;
            this.component.hitsNeeded(),
            this.computeScrollBounds(),
            t ? (n = {
                left: b(t),
                top: S(t)
            },
            i = n,
            s && (e = d(s),
            i = H(i, e)),
            this.origHit = this.queryHit(i.left, i.top),
            s && this.options.subjectCenter && (this.origHit && (e = I(this.origHit, e) || e),
            i = M(e)),
            this.coordAdjust = x(i, n)) : (this.origHit = null,
            this.coordAdjust = null),
            de.prototype.handleInteractionStart.apply(this, arguments)
        },
        handleDragStart: function(t) {
            var e;
            de.prototype.handleDragStart.apply(this, arguments),
            (e = this.queryHit(b(t), S(t))) && this.handleHitOver(e)
        },
        handleDrag: function(t, e, n) {
            var i;
            de.prototype.handleDrag.apply(this, arguments),
            i = this.queryHit(b(n), S(n)),
            pt(i, this.hit) || (this.hit && this.handleHitOut(),
            i && this.handleHitOver(i))
        },
        handleDragEnd: function() {
            this.handleHitDone(),
            de.prototype.handleDragEnd.apply(this, arguments)
        },
        handleHitOver: function(t) {
            var e = pt(t, this.origHit);
            this.hit = t,
            this.trigger("hitOver", this.hit, e, this.origHit)
        },
        handleHitOut: function() {
            this.hit && (this.trigger("hitOut", this.hit),
            this.handleHitDone(),
            this.hit = null)
        },
        handleHitDone: function() {
            this.hit && this.trigger("hitDone", this.hit)
        },
        handleInteractionEnd: function() {
            de.prototype.handleInteractionEnd.apply(this, arguments),
            this.origHit = null,
            this.hit = null,
            this.component.hitsNotNeeded()
        },
        handleScrollEnd: function() {
            de.prototype.handleScrollEnd.apply(this, arguments),
            this.isDragging && (this.component.releaseHits(),
            this.component.prepareHits())
        },
        queryHit: function(t, e) {
            return this.coordAdjust && (t += this.coordAdjust.left,
            e += this.coordAdjust.top),
            this.component.queryHit(t, e)
        }
    });
    Vt.touchMouseIgnoreWait = 500;
    var ge = ht.extend(ne, ee, {
        isTouching: !1,
        mouseIgnoreDepth: 0,
        handleScrollProxy: null,
        bind: function() {
            var e = this;
            this.listenTo(t(document), {
                touchstart: this.handleTouchStart,
                touchcancel: this.handleTouchCancel,
                touchend: this.handleTouchEnd,
                mousedown: this.handleMouseDown,
                mousemove: this.handleMouseMove,
                mouseup: this.handleMouseUp,
                click: this.handleClick,
                selectstart: this.handleSelectStart,
                contextmenu: this.handleContextMenu
            }),
            window.addEventListener("touchmove", this.handleTouchMoveProxy = function(n) {
                e.handleTouchMove(t.Event(n))
            }
            , {
                passive: !1
            }),
            window.addEventListener("scroll", this.handleScrollProxy = function(n) {
                e.handleScroll(t.Event(n))
            }
            , !0)
        },
        unbind: function() {
            this.stopListeningTo(t(document)),
            window.removeEventListener("touchmove", this.handleTouchMoveProxy),
            window.removeEventListener("scroll", this.handleScrollProxy, !0)
        },
        handleTouchStart: function(t) {
            this.stopTouch(t, !0),
            this.isTouching = !0,
            this.trigger("touchstart", t)
        },
        handleTouchMove: function(t) {
            this.isTouching && this.trigger("touchmove", t)
        },
        handleTouchCancel: function(t) {
            this.isTouching && (this.trigger("touchcancel", t),
            this.stopTouch(t))
        },
        handleTouchEnd: function(t) {
            this.stopTouch(t)
        },
        handleMouseDown: function(t) {
            this.shouldIgnoreMouse() || this.trigger("mousedown", t)
        },
        handleMouseMove: function(t) {
            this.shouldIgnoreMouse() || this.trigger("mousemove", t)
        },
        handleMouseUp: function(t) {
            this.shouldIgnoreMouse() || this.trigger("mouseup", t)
        },
        handleClick: function(t) {
            this.shouldIgnoreMouse() || this.trigger("click", t)
        },
        handleSelectStart: function(t) {
            this.trigger("selectstart", t)
        },
        handleContextMenu: function(t) {
            this.trigger("contextmenu", t)
        },
        handleScroll: function(t) {
            this.trigger("scroll", t)
        },
        stopTouch: function(t, e) {
            this.isTouching && (this.isTouching = !1,
            this.trigger("touchend", t),
            e || this.startTouchMouseIgnore())
        },
        startTouchMouseIgnore: function() {
            var t = this
              , e = Vt.touchMouseIgnoreWait;
            e && (this.mouseIgnoreDepth++,
            setTimeout(function() {
                t.mouseIgnoreDepth--
            }, e))
        },
        shouldIgnoreMouse: function() {
            return this.isTouching || Boolean(this.mouseIgnoreDepth)
        }
    });
    !function() {
        var t = null
          , e = 0;
        ge.get = function() {
            return t || (t = new ge,
            t.bind()),
            t
        }
        ,
        ge.needed = function() {
            ge.get(),
            e++
        }
        ,
        ge.unneeded = function() {
            --e || (t.unbind(),
            t = null)
        }
    }();
    var pe = ht.extend(ne, {
        options: null,
        sourceEl: null,
        el: null,
        parentEl: null,
        top0: null,
        left0: null,
        y0: null,
        x0: null,
        topDelta: null,
        leftDelta: null,
        isFollowing: !1,
        isHidden: !1,
        isAnimating: !1,
        constructor: function(e, n) {
            this.options = n = n || {},
            this.sourceEl = e,
            this.parentEl = n.parentEl ? t(n.parentEl) : e.parent()
        },
        start: function(e) {
            this.isFollowing || (this.isFollowing = !0,
            this.y0 = S(e),
            this.x0 = b(e),
            this.topDelta = 0,
            this.leftDelta = 0,
            this.isHidden || this.updatePosition(),
            E(e) ? this.listenTo(t(document), "touchmove", this.handleMove) : this.listenTo(t(document), "mousemove", this.handleMove))
        },
        stop: function(e, n) {
            function i() {
                s.isAnimating = !1,
                s.removeElement(),
                s.top0 = s.left0 = null,
                n && n()
            }
            var s = this
              , r = this.options.revertDuration;
            this.isFollowing && !this.isAnimating && (this.isFollowing = !1,
            this.stopListeningTo(t(document)),
            e && r && !this.isHidden ? (this.isAnimating = !0,
            this.el.animate({
                top: this.top0,
                left: this.left0
            }, {
                duration: r,
                complete: i
            })) : i())
        },
        getEl: function() {
            var t = this.el;
            return t || (t = this.el = this.sourceEl.clone().addClass(this.options.additionalClass || "").css({
                position: "absolute",
                visibility: "",
                display: this.isHidden ? "none" : "",
                margin: 0,
                right: "auto",
                bottom: "auto",
                width: this.sourceEl.width(),
                height: this.sourceEl.height(),
                opacity: this.options.opacity || "",
                zIndex: this.options.zIndex
            }),
            t.addClass("fc-unselectable"),
            t.appendTo(this.parentEl)),
            t
        },
        removeElement: function() {
            this.el && (this.el.remove(),
            this.el = null)
        },
        updatePosition: function() {
            var t, e;
            this.getEl(),
            null === this.top0 && (t = this.sourceEl.offset(),
            e = this.el.offsetParent().offset(),
            this.top0 = t.top - e.top,
            this.left0 = t.left - e.left),
            this.el.css({
                top: this.top0 + this.topDelta,
                left: this.left0 + this.leftDelta
            })
        },
        handleMove: function(t) {
            this.topDelta = S(t) - this.y0,
            this.leftDelta = b(t) - this.x0,
            this.isHidden || this.updatePosition()
        },
        hide: function() {
            this.isHidden || (this.isHidden = !0,
            this.el && this.el.hide())
        },
        show: function() {
            this.isHidden && (this.isHidden = !1,
            this.updatePosition(),
            this.getEl().show())
        }
    })
      , ve = oe.extend({
        children: null,
        el: null,
        isRTL: !1,
        nextDayThreshold: null,
        constructor: function() {
            oe.call(this),
            this.children = [],
            this.nextDayThreshold = e.duration(this.opt("nextDayThreshold")),
            this.isRTL = this.opt("isRTL")
        },
        addChild: function(t) {
            this.children.push(t)
        },
        opt: function(t) {},
        publiclyTrigger: function() {
            var t = this._getCalendar();
            return t.publiclyTrigger.apply(t, arguments)
        },
        hasPublicHandlers: function() {
            var t = this._getCalendar();
            return t.hasPublicHandlers.apply(t, arguments)
        },
        setElement: function(t) {
            this.el = t,
            this.bindGlobalHandlers(),
            this.renderSkeleton()
        },
        removeElement: function() {
            this.unrenderSkeleton(),
            this.unbindGlobalHandlers(),
            this.el.remove()
        },
        bindGlobalHandlers: function() {},
        unbindGlobalHandlers: function() {},
        renderSkeleton: function() {},
        unrenderSkeleton: function() {},
        renderDates: function() {},
        unrenderDates: function() {},
        getNowIndicatorUnit: function() {},
        renderNowIndicator: function(t) {
            this.callChildren("renderNowIndicator", t)
        },
        unrenderNowIndicator: function() {
            this.callChildren("unrenderNowIndicator")
        },
        renderBusinessHours: function() {
            this.callChildren("renderBusinessHours")
        },
        unrenderBusinessHours: function() {
            this.callChildren("unrenderBusinessHours")
        },
        renderEventsPayload: function(t) {
            this.callChildren("renderEventsPayload", t)
        },
        unrenderEvents: function() {
            this.callChildren("unrenderEvents")
        },
        getEventSegs: function() {
            var t, e = this.children, n = [];
            for (t = 0; t < e.length; t++)
                n.push.apply(n, e[t].getEventSegs());
            return n
        },
        renderDrag: function(t, e) {
            var n, i, s = null, r = this.children;
            for (n = 0; n < r.length; n++)
                (i = r[n].renderDrag(t, e)) && (s = s ? s.add(i) : i);
            return s
        },
        unrenderDrag: function() {
            this.callChildren("unrenderDrag")
        },
        renderSelectionFootprint: function(t) {
            this.callChildren("renderSelectionFootprint", t)
        },
        unrenderSelection: function() {
            this.callChildren("unrenderSelection")
        },
        hitsNeeded: function() {
            this.callChildren("hitsNeeded")
        },
        hitsNotNeeded: function() {
            this.callChildren("hitsNotNeeded")
        },
        prepareHits: function() {
            this.callChildren("prepareHits")
        },
        releaseHits: function() {
            this.callChildren("releaseHits")
        },
        queryHit: function(t, e) {
            var n, i, s = this.children;
            for (n = 0; n < s.length && !(i = s[n].queryHit(t, e)); n++)
                ;
            return i
        },
        isEventDefDraggable: function(t) {
            return this.isEventDefStartEditable(t)
        },
        isEventDefStartEditable: function(t) {
            var e = t.isStartExplicitlyEditable();
            return null == e && null == (e = this.opt("eventStartEditable")) && (e = this.isEventDefGenerallyEditable(t)),
            e
        },
        isEventDefGenerallyEditable: function(t) {
            var e = t.isExplicitlyEditable();
            return null == e && (e = this.opt("editable")),
            e
        },
        isEventDefResizableFromStart: function(t) {
            return this.opt("eventResizableFromStart") && this.isEventDefResizable(t)
        },
        isEventDefResizableFromEnd: function(t) {
            return this.isEventDefResizable(t)
        },
        isEventDefResizable: function(t) {
            var e = t.isDurationExplicitlyEditable();
            return null == e && null == (e = this.opt("eventDurationEditable")) && (e = this.isEventDefGenerallyEditable(t)),
            e
        },
        renderFgSegs: function(t) {},
        unrenderFgSegs: function() {},
        renderFgSegEls: function(e, n) {
            var i, s = this, r = this.hasPublicHandlers("eventRender"), o = "", a = [];
            if (e.length) {
                for (i = 0; i < e.length; i++)
                    o += this.fgSegHtml(e[i], n);
                t(o).each(function(n, i) {
                    var o = e[n]
                      , l = t(i);
                    r && (l = s.filterEventRenderEl(o.footprint, l)),
                    l && (l.data("fc-seg", o),
                    o.el = l,
                    a.push(o))
                })
            }
            return a
        },
        fgSegHtml: function(t, e) {},
        filterEventRenderEl: function(e, n) {
            var i = e.getEventLegacy()
              , s = this.publiclyTrigger("eventRender", {
                context: i,
                args: [i, n, this._getView()]
            });
            return !1 === s ? n = null : s && !0 !== s && (n = t(s)),
            n
        },
        buildGotoAnchorHtml: function(e, n, i) {
            var s, r, o, a;
            return t.isPlainObject(e) ? (s = e.date,
            r = e.type,
            o = e.forceOff) : s = e,
            s = Vt.moment(s),
            a = {
                date: s.format("YYYY-MM-DD"),
                type: r || "day"
            },
            "string" == typeof n && (i = n,
            n = null),
            n = n ? " " + it(n) : "",
            i = i || "",
            !o && this.opt("navLinks") ? "<a" + n + ' data-goto="' + tt(JSON.stringify(a)) + '">' + i + "</a>" : "<span" + n + ">" + i + "</span>"
        },
        formatRange: function(t, e, n, i) {
            var s = t.end;
            return e && (s = s.clone().subtract(1)),
            Jt(t.start, s, n, i, this.isRTL)
        },
        getAllDayHtml: function() {
            return this.opt("allDayHtml") || tt(this.opt("allDayText"))
        },
        getDayClasses: function(t, e) {
            var n, i = this._getView(), s = [];
            return i.activeUnzonedRange.containsDate(t) ? (s.push("fc-" + _t[t.day()]),
            i.isDateInOtherMonth(t) && s.push("fc-other-month"),
            n = i.calendar.getNow(),
            t.isSame(n, "day") ? (s.push("fc-today"),
            !0 !== e && s.push(i.calendar.theme.getClass("today"))) : t < n ? s.push("fc-past") : s.push("fc-future")) : s.push("fc-disabled-day"),
            s
        },
        computeDayRange: function(t) {
            var e = this._getCalendar()
              , n = e.msToUtcMoment(t.startMs, !0)
              , i = e.msToUtcMoment(t.endMs)
              , s = +i.time()
              , r = i.clone().stripTime();
            return s && s >= this.nextDayThreshold && r.add(1, "days"),
            r <= n && (r = n.clone().add(1, "days")),
            {
                start: n,
                end: r
            }
        },
        isMultiDayRange: function(t) {
            var e = this.computeDayRange(t);
            return e.end.diff(e.start, "days") > 1
        },
        callChildren: function(t) {
            var e, n, i = Array.prototype.slice.call(arguments, 1), s = this.children;
            for (e = 0; e < s.length; e++)
                n = s[e],
                n[t].apply(n, i)
        },
        _getCalendar: function() {
            return this.calendar || this.view.calendar
        },
        _getView: function() {
            return this.view
        }
    })
      , me = Vt.Grid = ve.extend({
        hasDayInteractions: !0,
        view: null,
        isRTL: null,
        unzonedRange: null,
        hitsNeededDepth: 0,
        dayClickListener: null,
        daySelectListener: null,
        segDragListener: null,
        segResizeListener: null,
        externalDragListener: null,
        constructor: function(t) {
            this.view = t,
            ve.call(this),
            this.initFillInternals(),
            this.dayClickListener = this.buildDayClickListener(),
            this.daySelectListener = this.buildDaySelectListener()
        },
        opt: function(t) {
            return this.view.opt(t)
        },
        setRange: function(t) {
            this.unzonedRange = t,
            this.rangeUpdated(),
            this.processRangeOptions()
        },
        rangeUpdated: function() {},
        processRangeOptions: function() {
            var t, e;
            this.eventTimeFormat = this.opt("eventTimeFormat") || this.opt("timeFormat") || this.computeEventTimeFormat(),
            t = this.opt("displayEventTime"),
            null == t && (t = this.computeDisplayEventTime()),
            e = this.opt("displayEventEnd"),
            null == e && (e = this.computeDisplayEventEnd()),
            this.displayEventTime = t,
            this.displayEventEnd = e
        },
        hitsNeeded: function() {
            this.hitsNeededDepth++ || this.prepareHits()
        },
        hitsNotNeeded: function() {
            this.hitsNeededDepth && !--this.hitsNeededDepth && this.releaseHits()
        },
        getSafeHitFootprint: function(t) {
            var e = this.getHitFootprint(t);
            return this.view.activeUnzonedRange.containsRange(e.unzonedRange) ? e : null
        },
        getHitFootprint: function(t) {},
        getHitEl: function(t) {},
        setElement: function(t) {
            ve.prototype.setElement.apply(this, arguments),
            this.hasDayInteractions && (C(t),
            this.bindDayHandler("touchstart", this.dayTouchStart),
            this.bindDayHandler("mousedown", this.dayMousedown)),
            this.bindSegHandlers()
        },
        bindDayHandler: function(e, n) {
            var i = this;
            this.el.on(e, function(e) {
                if (!t(e.target).is(i.segSelector + "," + i.segSelector + " *,.fc-more,a[data-goto]"))
                    return n.call(i, e)
            })
        },
        removeElement: function() {
            ve.prototype.removeElement.apply(this, arguments),
            this.clearDragListeners()
        },
        bindGlobalHandlers: function() {
            ve.prototype.bindGlobalHandlers.apply(this, arguments),
            this.listenTo(t(document), {
                dragstart: this.externalDragStart,
                sortstart: this.externalDragStart
            })
        },
        unbindGlobalHandlers: function() {
            ve.prototype.unbindGlobalHandlers.apply(this, arguments),
            this.stopListeningTo(t(document))
        },
        dayMousedown: function(t) {
            ge.get().shouldIgnoreMouse() || (this.dayClickListener.startInteraction(t),
            this.opt("selectable") && this.daySelectListener.startInteraction(t, {
                distance: this.opt("selectMinDistance")
            }))
        },
        dayTouchStart: function(t) {
            var e, n = this.view;
            n.isSelected || n.selectedEvent || (e = this.opt("selectLongPressDelay"),
            null == e && (e = this.opt("longPressDelay")),
            this.dayClickListener.startInteraction(t),
            this.opt("selectable") && this.daySelectListener.startInteraction(t, {
                delay: e
            }))
        },
        clearDragListeners: function() {
            this.dayClickListener.endInteraction(),
            this.daySelectListener.endInteraction(),
            this.segDragListener && this.segDragListener.endInteraction(),
            this.segResizeListener && this.segResizeListener.endInteraction(),
            this.externalDragListener && this.externalDragListener.endInteraction()
        },
        renderHighlight: function(t) {
            this.renderFill("highlight", this.componentFootprintToSegs(t))
        },
        unrenderHighlight: function() {
            this.unrenderFill("highlight")
        },
        eventRangesToEventFootprints: function(t) {
            var e, n = [];
            for (e = 0; e < t.length; e++)
                n.push.apply(n, this.eventRangeToEventFootprints(t[e]));
            return n
        },
        eventRangeToEventFootprints: function(t) {
            return [new Ue(new xe(t.unzonedRange,t.eventDef.isAllDay()),t.eventDef,t.eventInstance)]
        },
        eventFootprintsToSegs: function(t) {
            var e, n = [];
            for (e = 0; e < t.length; e++)
                n.push.apply(n, this.eventFootprintToSegs(t[e]));
            return n
        },
        eventFootprintToSegs: function(t, e) {
            var n, i, s, r = t.componentFootprint.unzonedRange;
            for (e && (r = r.intersect(e)),
            n = this.componentFootprintToSegs(t.componentFootprint),
            i = 0; i < n.length; i++)
                s = n[i],
                r.isStart || (s.isStart = !1),
                r.isEnd || (s.isEnd = !1),
                s.footprint = t;
            return n
        },
        componentFootprintToSegs: function(t) {}
    });
    me.mixin({
        buildDayClickListener: function() {
            var t, e = this, n = new fe(this,{
                scroll: this.opt("dragScroll"),
                interactionStart: function() {
                    t = n.origHit
                },
                hitOver: function(e, n, i) {
                    n || (t = null)
                },
                hitOut: function() {
                    t = null
                },
                interactionEnd: function(n, i) {
                    var s;
                    !i && t && (s = e.getSafeHitFootprint(t)) && e.view.triggerDayClick(s, e.getHitEl(t), n)
                }
            });
            return n.shouldCancelTouchScroll = !1,
            n.scrollAlwaysKills = !0,
            n
        }
    }),
    me.mixin({
        buildDaySelectListener: function() {
            var t, e = this;
            return new fe(this,{
                scroll: this.opt("dragScroll"),
                interactionStart: function() {
                    t = null
                },
                dragStart: function() {
                    e.view.unselect()
                },
                hitOver: function(n, i, s) {
                    var o, a;
                    s && (o = e.getSafeHitFootprint(s),
                    a = e.getSafeHitFootprint(n),
                    t = o && a ? e.computeSelection(o, a) : null,
                    t ? e.renderSelectionFootprint(t) : !1 === t && r())
                },
                hitOut: function() {
                    t = null,
                    e.unrenderSelection()
                },
                hitDone: function() {
                    o()
                },
                interactionEnd: function(n, i) {
                    !i && t && e.view.reportSelection(t, n)
                }
            })
        },
        renderSelectionFootprint: function(t) {
            this.renderHighlight(t)
        },
        unrenderSelection: function() {
            this.unrenderHighlight()
        },
        computeSelection: function(t, e) {
            var n = this.computeSelectionFootprint(t, e);
            return !(n && !this.isSelectionFootprintAllowed(n)) && n
        },
        computeSelectionFootprint: function(t, e) {
            var n = [t.unzonedRange.startMs, t.unzonedRange.endMs, e.unzonedRange.startMs, e.unzonedRange.endMs];
            return n.sort(rt),
            new xe(new Me(n[0],n[3]),t.isAllDay)
        },
        isSelectionFootprintAllowed: function(t) {
            return this.view.validUnzonedRange.containsRange(t.unzonedRange) && this.view.calendar.isSelectionFootprintAllowed(t)
        }
    }),
    me.mixin({
        businessHoursSegClasses: function(t) {
            return ["fc-nonbusiness", "fc-bgevent"]
        },
        buildBusinessHourSegs: function(t) {
            return this.eventFootprintsToSegs(this.buildBusinessHourEventFootprints(t))
        },
        buildBusinessHourEventFootprints: function(t) {
            var e = this.view.calendar;
            return this._buildBusinessHourEventFootprints(t, e.opt("businessHours"))
        },
        _buildBusinessHourEventFootprints: function(t, e) {
            var n, i, s = this.view.calendar;
            return n = s.buildBusinessInstanceGroup(t, e, this.unzonedRange),
            i = n ? n.sliceRenderRanges(this.unzonedRange, s) : [],
            this.eventRangesToEventFootprints(i)
        }
    }),
    me.mixin({
        segs: null,
        eventTimeFormat: null,
        displayEventTime: null,
        displayEventEnd: null,
        computeEventTimeFormat: function() {
            return this.opt("smallTimeFormat")
        },
        computeDisplayEventTime: function() {
            return !0
        },
        computeDisplayEventEnd: function() {
            return !0
        },
        renderEventsPayload: function(t) {
            var e, n, i, s, r, o = [], a = [];
            for (e in t)
                n = t[e],
                i = n.sliceRenderRanges(this.view.activeUnzonedRange),
                s = this.eventRangesToEventFootprints(i),
                r = this.eventFootprintsToSegs(s),
                n.getEventDef().hasBgRendering() ? o.push.apply(o, r) : a.push.apply(a, r);
            this.segs = [].concat(this.renderBgSegs(o) || o, this.renderFgSegs(a) || a)
        },
        unrenderEvents: function() {
            this.handleSegMouseout(),
            this.clearDragListeners(),
            this.unrenderFgSegs(),
            this.unrenderBgSegs(),
            this.segs = null
        },
        getEventSegs: function() {
            return this.segs || []
        },
        renderBgSegs: function(t) {
            return this.renderFill("bgEvent", t)
        },
        unrenderBgSegs: function() {
            this.unrenderFill("bgEvent")
        },
        bgEventSegEl: function(t, e) {
            return this.filterEventRenderEl(t.footprint, e)
        },
        bgEventSegClasses: function(t) {
            var e = t.footprint.eventDef;
            return ["fc-bgevent"].concat(e.className, e.source.className)
        },
        bgEventSegCss: function(t) {
            return {
                "background-color": this.getSegSkinCss(t)["background-color"]
            }
        },
        getEventTimeText: function(t, e, n) {
            return this._getEventTimeText(t.eventInstance.dateProfile.start, t.eventInstance.dateProfile.end, t.componentFootprint.isAllDay, e, n)
        },
        _getEventTimeText: function(t, e, n, i, s) {
            return null == i && (i = this.eventTimeFormat),
            null == s && (s = this.displayEventEnd),
            this.displayEventTime && !n ? s && e ? this.view.formatRange({
                start: t,
                end: e
            }, !1, i) : t.format(i) : ""
        },
        getSegClasses: function(t, e, n) {
            var i = this.view
              , s = ["fc-event", t.isStart ? "fc-start" : "fc-not-start", t.isEnd ? "fc-end" : "fc-not-end"].concat(this.getSegCustomClasses(t));
            return e && s.push("fc-draggable"),
            n && s.push("fc-resizable"),
            i.isEventDefSelected(t.footprint.eventDef) && s.push("fc-selected"),
            s
        },
        getSegCustomClasses: function(t) {
            var e = t.footprint.eventDef;
            return [].concat(e.className, e.source.className)
        },
        getSegSkinCss: function(t) {
            return {
                "background-color": this.getSegBackgroundColor(t),
                "border-color": this.getSegBorderColor(t),
                color: this.getSegTextColor(t)
            }
        },
        getSegBackgroundColor: function(t) {
            var e = t.footprint.eventDef;
            return e.backgroundColor || e.color || this.getSegDefaultBackgroundColor(t)
        },
        getSegDefaultBackgroundColor: function(t) {
            var e = t.footprint.eventDef.source;
            return e.backgroundColor || e.color || this.opt("eventBackgroundColor") || this.opt("eventColor")
        },
        getSegBorderColor: function(t) {
            var e = t.footprint.eventDef;
            return e.borderColor || e.color || this.getSegDefaultBorderColor(t)
        },
        getSegDefaultBorderColor: function(t) {
            var e = t.footprint.eventDef.source;
            return e.borderColor || e.color || this.opt("eventBorderColor") || this.opt("eventColor")
        },
        getSegTextColor: function(t) {
            return t.footprint.eventDef.textColor || this.getSegDefaultTextColor(t)
        },
        getSegDefaultTextColor: function(t) {
            return t.footprint.eventDef.source.textColor || this.opt("eventTextColor")
        },
        sortEventSegs: function(t) {
            t.sort(at(this, "compareEventSegs"))
        },
        compareEventSegs: function(t, e) {
            var n = t.footprint.componentFootprint
              , i = n.unzonedRange
              , s = e.footprint.componentFootprint
              , r = s.unzonedRange;
            return i.startMs - r.startMs || r.endMs - r.startMs - (i.endMs - i.startMs) || s.isAllDay - n.isAllDay || F(t.footprint.eventDef, e.footprint.eventDef, this.view.eventOrderSpecs)
        }
    }),
    me.mixin({
        segSelector: ".fc-event-container > *",
        mousedOverSeg: null,
        largeUnit: null,
        diffDates: function(t, e) {
            return this.largeUnit ? L(t, e, this.largeUnit) : k(t, e)
        },
        bindSegHandlers: function() {
            this.bindSegHandlersToEl(this.el)
        },
        bindSegHandlersToEl: function(t) {
            this.bindSegHandlerToEl(t, "touchstart", this.handleSegTouchStart),
            this.bindSegHandlerToEl(t, "mouseenter", this.handleSegMouseover),
            this.bindSegHandlerToEl(t, "mouseleave", this.handleSegMouseout),
            this.bindSegHandlerToEl(t, "mousedown", this.handleSegMousedown),
            this.bindSegHandlerToEl(t, "click", this.handleSegClick)
        },
        bindSegHandlerToEl: function(e, n, i) {
            var s = this;
            e.on(n, this.segSelector, function(e) {
                var n = t(this).data("fc-seg");
                if (n && !s.isDraggingSeg && !s.isResizingSeg)
                    return i.call(s, n, e)
            })
        },
        handleSegClick: function(t, e) {
            !1 === this.publiclyTrigger("eventClick", {
                context: t.el[0],
                args: [t.footprint.getEventLegacy(), e, this.view]
            }) && e.preventDefault()
        },
        handleSegMouseover: function(t, e) {
            ge.get().shouldIgnoreMouse() || this.mousedOverSeg || (this.mousedOverSeg = t,
            this.view.isEventDefResizable(t.footprint.eventDef) && t.el.addClass("fc-allow-mouse-resize"),
            this.publiclyTrigger("eventMouseover", {
                context: t.el[0],
                args: [t.footprint.getEventLegacy(), e, this.view]
            }))
        },
        handleSegMouseout: function(t, e) {
            e = e || {},
            this.mousedOverSeg && (t = t || this.mousedOverSeg,
            this.mousedOverSeg = null,
            this.view.isEventDefResizable(t.footprint.eventDef) && t.el.removeClass("fc-allow-mouse-resize"),
            this.publiclyTrigger("eventMouseout", {
                context: t.el[0],
                args: [t.footprint.getEventLegacy(), e, this.view]
            }))
        },
        handleSegMousedown: function(t, e) {
            !this.startSegResize(t, e, {
                distance: 5
            }) && this.view.isEventDefDraggable(t.footprint.eventDef) && this.buildSegDragListener(t).startInteraction(e, {
                distance: 5
            })
        },
        handleSegTouchStart: function(t, e) {
            var n, i, s = this.view, r = t.footprint.eventDef, o = s.isEventDefSelected(r), a = s.isEventDefDraggable(r), l = s.isEventDefResizable(r), u = !1;
            o && l && (u = this.startSegResize(t, e)),
            u || !a && !l || (i = this.opt("eventLongPressDelay"),
            null == i && (i = this.opt("longPressDelay")),
            n = a ? this.buildSegDragListener(t) : this.buildSegSelectListener(t),
            n.startInteraction(e, {
                delay: o ? 0 : i
            }))
        },
        buildSegSelectListener: function(t) {
            var e = this
              , n = this.view
              , i = t.footprint.eventDef
              , s = t.footprint.eventInstance;
            if (this.segDragListener)
                return this.segDragListener;
            var r = this.segDragListener = new de({
                dragStart: function(t) {
                    r.isTouch && !n.isEventDefSelected(i) && s && n.selectEventInstance(s)
                },
                interactionEnd: function(t) {
                    e.segDragListener = null
                }
            });
            return r
        },
        isEventInstanceGroupAllowed: function(t) {
            var e, n = this.eventRangesToEventFootprints(t.getAllEventRanges());
            for (e = 0; e < n.length; e++)
                if (!this.view.validUnzonedRange.containsRange(n[e].componentFootprint.unzonedRange))
                    return !1;
            return this.view.calendar.isEventInstanceGroupAllowed(t)
        },
        renderHelperEventFootprints: function(t, e) {
            return this.renderHelperEventFootprintEls(t, e).addClass("fc-helper")
        },
        renderHelperEventFootprintEls: function(t, e) {},
        unrenderHelper: function() {},
        fabricateEventFootprint: function(t) {
            var e, n = this.view.calendar, i = n.footprintToDateProfile(t), s = new ke(new _e(n));
            return s.dateProfile = i,
            e = s.buildInstance(),
            new Ue(t,s,e)
        }
    }),
    me.mixin({
        isDraggingSeg: !1,
        buildSegDragListener: function(t) {
            var e, n, i, s = this, a = this.view, l = a.calendar, u = l.eventManager, c = t.el, h = t.footprint.eventDef, d = t.footprint.eventInstance;
            if (this.segDragListener)
                return this.segDragListener;
            var f = this.segDragListener = new fe(a,{
                scroll: this.opt("dragScroll"),
                subjectEl: c,
                subjectCenter: !0,
                interactionStart: function(i) {
                    t.component = s,
                    e = !1,
                    n = new pe(t.el,{
                        additionalClass: "fc-dragging",
                        parentEl: a.el,
                        opacity: f.isTouch ? null : s.opt("dragOpacity"),
                        revertDuration: s.opt("dragRevertDuration"),
                        zIndex: 2
                    }),
                    n.hide(),
                    n.start(i)
                },
                dragStart: function(n) {
                    f.isTouch && !a.isEventDefSelected(h) && d && a.selectEventInstance(d),
                    e = !0,
                    s.handleSegMouseout(t, n),
                    s.segDragStart(t, n),
                    a.hideEventsWithId(h.id)
                },
                hitOver: function(e, o, c) {
                    var d, g, p, v, m = !0;
                    t.hit && (c = t.hit),
                    d = c.component.getSafeHitFootprint(c),
                    g = e.component.getSafeHitFootprint(e),
                    d && g ? (i = s.computeEventDropMutation(d, g, h),
                    i ? (p = u.buildMutatedEventInstanceGroup(h.id, i),
                    m = s.isEventInstanceGroupAllowed(p)) : m = !1) : m = !1,
                    m || (i = null,
                    r()),
                    i && (v = a.renderDrag(s.eventRangesToEventFootprints(p.sliceRenderRanges(s.unzonedRange, l)), t)) ? (v.addClass("fc-dragging"),
                    f.isTouch || s.applyDragOpacity(v),
                    n.hide()) : n.show(),
                    o && (i = null)
                },
                hitOut: function() {
                    a.unrenderDrag(),
                    n.show(),
                    i = null
                },
                hitDone: function() {
                    o()
                },
                interactionEnd: function(r) {
                    delete t.component,
                    n.stop(!i, function() {
                        e && (a.unrenderDrag(),
                        s.segDragStop(t, r)),
                        i ? a.reportEventDrop(d, i, c, r) : a.showEventsWithId(h.id)
                    }),
                    s.segDragListener = null
                }
            });
            return f
        },
        segDragStart: function(t, e) {
            this.isDraggingSeg = !0,
            this.publiclyTrigger("eventDragStart", {
                context: t.el[0],
                args: [t.footprint.getEventLegacy(), e, {}, this.view]
            })
        },
        segDragStop: function(t, e) {
            this.isDraggingSeg = !1,
            this.publiclyTrigger("eventDragStop", {
                context: t.el[0],
                args: [t.footprint.getEventLegacy(), e, {}, this.view]
            })
        },
        computeEventDropMutation: function(t, e, n) {
            var i, s, r, o = t.unzonedRange.getStart(), a = e.unzonedRange.getStart(), l = !1, u = !1, c = !1;
            return t.isAllDay !== e.isAllDay && (l = !0,
            e.isAllDay ? (c = !0,
            o.stripTime()) : u = !0),
            i = this.diffDates(a, o),
            s = new We,
            s.clearEnd = l,
            s.forceTimed = u,
            s.forceAllDay = c,
            s.setDateDelta(i),
            r = new Ge,
            r.setDateMutation(s),
            r
        },
        applyDragOpacity: function(t) {
            var e = this.opt("dragOpacity");
            null != e && t.css("opacity", e)
        }
    }),
    me.mixin({
        isResizingSeg: !1,
        startSegResize: function(e, n, i) {
            return !!t(n.target).is(".fc-resizer") && (this.buildSegResizeListener(e, t(n.target).is(".fc-start-resizer")).startInteraction(n, i),
            !0)
        },
        buildSegResizeListener: function(t, e) {
            var n, i, s = this, a = this.view, l = a.calendar, u = l.eventManager, c = t.el, h = t.footprint.eventDef, d = t.footprint.eventInstance;
            return this.segResizeListener = new fe(this,{
                scroll: this.opt("dragScroll"),
                subjectEl: c,
                interactionStart: function() {
                    n = !1
                },
                dragStart: function(e) {
                    n = !0,
                    s.handleSegMouseout(t, e),
                    s.segResizeStart(t, e)
                },
                hitOver: function(n, o, c) {
                    var d, f = !0, g = s.getSafeHitFootprint(c), p = s.getSafeHitFootprint(n);
                    g && p ? (i = e ? s.computeEventStartResizeMutation(g, p, t.footprint) : s.computeEventEndResizeMutation(g, p, t.footprint),
                    i ? (d = u.buildMutatedEventInstanceGroup(h.id, i),
                    f = s.isEventInstanceGroupAllowed(d)) : f = !1) : f = !1,
                    f ? i.isEmpty() && (i = null) : (i = null,
                    r()),
                    i && (a.hideEventsWithId(h.id),
                    s.renderEventResize(s.eventRangesToEventFootprints(d.sliceRenderRanges(s.unzonedRange, l)), t))
                },
                hitOut: function() {
                    i = null,
                    a.showEventsWithId(h.id)
                },
                hitDone: function() {
                    s.unrenderEventResize(),
                    o()
                },
                interactionEnd: function(e) {
                    n && s.segResizeStop(t, e),
                    i ? a.reportEventResize(d, i, c, e) : a.showEventsWithId(h.id),
                    s.segResizeListener = null
                }
            })
        },
        segResizeStart: function(t, e) {
            this.isResizingSeg = !0,
            this.publiclyTrigger("eventResizeStart", {
                context: t.el[0],
                args: [t.footprint.getEventLegacy(), e, {}, this.view]
            })
        },
        segResizeStop: function(t, e) {
            this.isResizingSeg = !1,
            this.publiclyTrigger("eventResizeStop", {
                context: t.el[0],
                args: [t.footprint.getEventLegacy(), e, {}, this.view]
            })
        },
        computeEventStartResizeMutation: function(t, e, n) {
            var i, s, r = n.componentFootprint.unzonedRange, o = this.diffDates(e.unzonedRange.getStart(), t.unzonedRange.getStart());
            return r.getStart().add(o) < r.getEnd() && (i = new We,
            i.setStartDelta(o),
            s = new Ge,
            s.setDateMutation(i),
            s)
        },
        computeEventEndResizeMutation: function(t, e, n) {
            var i, s, r = n.componentFootprint.unzonedRange, o = this.diffDates(e.unzonedRange.getEnd(), t.unzonedRange.getEnd());
            return r.getEnd().add(o) > r.getStart() && (i = new We,
            i.setEndDelta(o),
            s = new Ge,
            s.setDateMutation(i),
            s)
        },
        renderEventResize: function(t, e) {},
        unrenderEventResize: function() {}
    }),
    me.mixin({
        isDraggingExternal: !1,
        externalDragStart: function(e, n) {
            var i, s;
            this.opt("droppable") && (i = t((n ? n.item : null) || e.target),
            s = this.opt("dropAccept"),
            (t.isFunction(s) ? s.call(i[0], i) : i.is(s)) && (this.isDraggingExternal || this.listenToExternalDrag(i, e, n)))
        },
        listenToExternalDrag: function(t, e, n) {
            var i, s = this, a = this.view, l = mt(t);
            (s.externalDragListener = new fe(this,{
                interactionStart: function() {
                    s.isDraggingExternal = !0
                },
                hitOver: function(t) {
                    var e, n = !0, o = t.component.getSafeHitFootprint(t);
                    o ? (i = s.computeExternalDrop(o, l),
                    i ? (e = new Oe(i.buildInstances()),
                    n = l.eventProps ? s.isEventInstanceGroupAllowed(e) : s.isExternalInstanceGroupAllowed(e)) : n = !1) : n = !1,
                    n || (i = null,
                    r()),
                    i && s.renderDrag(s.eventRangesToEventFootprints(e.sliceRenderRanges(s.unzonedRange, a.calendar)))
                },
                hitOut: function() {
                    i = null
                },
                hitDone: function() {
                    o(),
                    s.unrenderDrag()
                },
                interactionEnd: function(e) {
                    i && a.reportExternalDrop(i, Boolean(l.eventProps), Boolean(l.stick), t, e, n),
                    s.isDraggingExternal = !1,
                    s.externalDragListener = null
                }
            })).startDrag(e)
        },
        computeExternalDrop: function(e, n) {
            var i, s = this.view.calendar, r = Vt.moment.utc(e.unzonedRange.startMs).stripZone();
            return e.isAllDay && (n.startTime ? r.time(n.startTime) : r.stripTime()),
            n.duration && (i = r.clone().add(n.duration)),
            r = s.applyTimezone(r),
            i && (i = s.applyTimezone(i)),
            ke.parse(t.extend({}, n.eventProps, {
                start: r,
                end: i
            }), new _e(s))
        },
        isExternalInstanceGroupAllowed: function(t) {
            var e, n = this.view.calendar, i = this.eventRangesToEventFootprints(t.getAllEventRanges());
            for (e = 0; e < i.length; e++)
                if (!this.view.validUnzonedRange.containsRange(i[e].componentFootprint.unzonedRange))
                    return !1;
            for (e = 0; e < i.length; e++)
                if (!n.isSelectionFootprintAllowed(i[e].componentFootprint))
                    return !1;
            return !0
        }
    }),
    Vt.dataAttrPrefix = "",
    me.mixin({
        elsByFill: null,
        initFillInternals: function() {
            this.elsByFill = {}
        },
        renderFill: function(t, e) {},
        unrenderFill: function(t) {
            var e = this.elsByFill[t];
            e && (e.remove(),
            delete this.elsByFill[t])
        },
        renderFillSegEls: function(e, n) {
            var i, s = this, r = this[e + "SegEl"], o = "", a = [];
            if (n.length) {
                for (i = 0; i < n.length; i++)
                    o += this.fillSegHtml(e, n[i]);
                t(o).each(function(e, i) {
                    var o = n[e]
                      , l = t(i);
                    r && (l = r.call(s, o, l)),
                    l && (l = t(l),
                    l.is(s.fillSegTag) && (o.el = l,
                    a.push(o)))
                })
            }
            return a
        },
        fillSegTag: "div",
        fillSegHtml: function(t, e) {
            var n = this[t + "SegClasses"]
              , i = this[t + "SegCss"]
              , s = n ? n.call(this, e) : []
              , r = nt(i ? i.call(this, e) : {});
            return "<" + this.fillSegTag + (s.length ? ' class="' + s.join(" ") + '"' : "") + (r ? ' style="' + r + '"' : "") + " />"
        },
        highlightSegClasses: function() {
            return ["fc-highlight"]
        }
    });
    var ye = Vt.DayTableMixin = {
        breakOnWeeks: !1,
        dayDates: null,
        dayIndices: null,
        daysPerRow: null,
        rowCnt: null,
        colCnt: null,
        colHeadFormat: null,
        updateDayTable: function() {
            for (var t, e, n, i = this.view, s = i.calendar, r = s.msToUtcMoment(this.unzonedRange.startMs, !0), o = s.msToUtcMoment(this.unzonedRange.endMs, !0), a = -1, l = [], u = []; r.isBefore(o); )
                i.isHiddenDay(r) ? l.push(a + .5) : (a++,
                l.push(a),
                u.push(r.clone())),
                r.add(1, "days");
            if (this.breakOnWeeks) {
                for (e = u[0].day(),
                t = 1; t < u.length && u[t].day() != e; t++)
                    ;
                n = Math.ceil(u.length / t)
            } else
                n = 1,
                t = u.length;
            this.dayDates = u,
            this.dayIndices = l,
            this.daysPerRow = t,
            this.rowCnt = n,
            this.updateDayTableCols()
        },
        updateDayTableCols: function() {
            this.colCnt = this.computeColCnt(),
            this.colHeadFormat = this.opt("columnFormat") || this.computeColHeadFormat()
        },
        computeColCnt: function() {
            return this.daysPerRow
        },
        getCellDate: function(t, e) {
            return this.dayDates[this.getCellDayIndex(t, e)].clone()
        },
        getCellRange: function(t, e) {
            var n = this.getCellDate(t, e);
            return {
                start: n,
                end: n.clone().add(1, "days")
            }
        },
        getCellDayIndex: function(t, e) {
            return t * this.daysPerRow + this.getColDayIndex(e)
        },
        getColDayIndex: function(t) {
            return this.isRTL ? this.colCnt - 1 - t : t
        },
        getDateDayIndex: function(t) {
            var e = this.dayIndices
              , n = t.diff(this.dayDates[0], "days");
            return n < 0 ? e[0] - 1 : n >= e.length ? e[e.length - 1] + 1 : e[n]
        },
        computeColHeadFormat: function() {
            return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.opt("dayOfMonthFormat") : "dddd"
        },
        sliceRangeByRow: function(t) {
            var e, n, i, s, r, o = this.daysPerRow, a = this.view.computeDayRange(t), l = this.getDateDayIndex(a.start), u = this.getDateDayIndex(a.end.clone().subtract(1, "days")), c = [];
            for (e = 0; e < this.rowCnt; e++)
                n = e * o,
                i = n + o - 1,
                s = Math.max(l, n),
                r = Math.min(u, i),
                s = Math.ceil(s),
                r = Math.floor(r),
                s <= r && c.push({
                    row: e,
                    firstRowDayIndex: s - n,
                    lastRowDayIndex: r - n,
                    isStart: s === l,
                    isEnd: r === u
                });
            return c
        },
        sliceRangeByDay: function(t) {
            var e, n, i, s, r, o, a = this.daysPerRow, l = this.view.computeDayRange(t), u = this.getDateDayIndex(l.start), c = this.getDateDayIndex(l.end.clone().subtract(1, "days")), h = [];
            for (e = 0; e < this.rowCnt; e++)
                for (n = e * a,
                i = n + a - 1,
                s = n; s <= i; s++)
                    r = Math.max(u, s),
                    o = Math.min(c, s),
                    r = Math.ceil(r),
                    o = Math.floor(o),
                    r <= o && h.push({
                        row: e,
                        firstRowDayIndex: r - n,
                        lastRowDayIndex: o - n,
                        isStart: r === u,
                        isEnd: o === c
                    });
            return h
        },
        renderHeadHtml: function() {
            var t = this.view.calendar.theme;
            return '<div class="fc-row ' + t.getClass("headerRow") + '"><table class="' + t.getClass("tableGrid") + '"><thead>' + this.renderHeadTrHtml() + "</thead></table></div>"
        },
        renderHeadIntroHtml: function() {
            return this.renderIntroHtml()
        },
        renderHeadTrHtml: function() {
            return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>"
        },
        renderHeadDateCellsHtml: function() {
            var t, e, n = [];
            for (t = 0; t < this.colCnt; t++)
                e = this.getCellDate(0, t),
                n.push(this.renderHeadDateCellHtml(e));
            return n.join("")
        },
        renderHeadDateCellHtml: function(t, e, n) {
            var i = this.view
              , s = i.activeUnzonedRange.containsDate(t)
              , r = ["fc-day-header", i.calendar.theme.getClass("widgetHeader")]
              , o = tt(t.format(this.colHeadFormat));
            return 1 === this.rowCnt ? r = r.concat(this.getDayClasses(t, !0)) : r.push("fc-" + _t[t.day()]),
            '<th class="' + r.join(" ") + '"' + (1 === (s && this.rowCnt) ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e > 1 ? ' colspan="' + e + '"' : "") + (n ? " " + n : "") + ">" + (s ? i.buildGotoAnchorHtml({
                date: t,
                forceOff: this.rowCnt > 1 || 1 === this.colCnt
            }, o) : o) + "</th>"
        },
        renderBgTrHtml: function(t) {
            return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(t)) + this.renderBgCellsHtml(t) + (this.isRTL ? this.renderBgIntroHtml(t) : "") + "</tr>"
        },
        renderBgIntroHtml: function(t) {
            return this.renderIntroHtml()
        },
        renderBgCellsHtml: function(t) {
            var e, n, i = [];
            for (e = 0; e < this.colCnt; e++)
                n = this.getCellDate(t, e),
                i.push(this.renderBgCellHtml(n));
            return i.join("")
        },
        renderBgCellHtml: function(t, e) {
            var n = this.view
              , i = n.activeUnzonedRange.containsDate(t)
              , s = this.getDayClasses(t);
            return s.unshift("fc-day", n.calendar.theme.getClass("widgetContent")),
            '<td class="' + s.join(" ") + '"' + (i ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e ? " " + e : "") + "></td>"
        },
        renderIntroHtml: function() {},
        bookendCells: function(t) {
            var e = this.renderIntroHtml();
            e && (this.isRTL ? t.append(e) : t.prepend(e))
        }
    }
      , we = Vt.DayGrid = me.extend(ye, {
        numbersVisible: !1,
        bottomCoordPadding: 0,
        rowEls: null,
        cellEls: null,
        helperEls: null,
        rowCoordCache: null,
        colCoordCache: null,
        renderDates: function(t) {
            var e, n, i = this.view, s = this.rowCnt, r = this.colCnt, o = "";
            for (e = 0; e < s; e++)
                o += this.renderDayRowHtml(e, t);
            for (this.el.html(o),
            this.rowEls = this.el.find(".fc-row"),
            this.cellEls = this.el.find(".fc-day, .fc-disabled-day"),
            this.rowCoordCache = new he({
                els: this.rowEls,
                isVertical: !0
            }),
            this.colCoordCache = new he({
                els: this.cellEls.slice(0, this.colCnt),
                isHorizontal: !0
            }),
            e = 0; e < s; e++)
                for (n = 0; n < r; n++)
                    this.publiclyTrigger("dayRender", {
                        context: i,
                        args: [this.getCellDate(e, n), this.getCellEl(e, n), i]
                    })
        },
        unrenderDates: function() {
            this.removeSegPopover()
        },
        renderBusinessHours: function() {
            var t = this.buildBusinessHourSegs(!0);
            this.renderFill("businessHours", t, "bgevent")
        },
        unrenderBusinessHours: function() {
            this.unrenderFill("businessHours")
        },
        renderDayRowHtml: function(t, e) {
            var n = this.view.calendar.theme
              , i = ["fc-row", "fc-week", n.getClass("dayRow")];
            return e && i.push("fc-rigid"),
            '<div class="' + i.join(" ") + '"><div class="fc-bg"><table class="' + n.getClass("tableGrid") + '">' + this.renderBgTrHtml(t) + '</table></div><div class="fc-content-skeleton"><table>' + (this.numbersVisible ? "<thead>" + this.renderNumberTrHtml(t) + "</thead>" : "") + "</table></div></div>"
        },
        renderNumberTrHtml: function(t) {
            return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(t)) + this.renderNumberCellsHtml(t) + (this.isRTL ? this.renderNumberIntroHtml(t) : "") + "</tr>"
        },
        renderNumberIntroHtml: function(t) {
            return this.renderIntroHtml()
        },
        renderNumberCellsHtml: function(t) {
            var e, n, i = [];
            for (e = 0; e < this.colCnt; e++)
                n = this.getCellDate(t, e),
                i.push(this.renderNumberCellHtml(n));
            return i.join("")
        },
        renderNumberCellHtml: function(t) {
            var e, n, i = this.view, s = "", r = i.activeUnzonedRange.containsDate(t), o = i.dayNumbersVisible && r;
            return o || i.cellWeekNumbersVisible ? (e = this.getDayClasses(t),
            e.unshift("fc-day-top"),
            i.cellWeekNumbersVisible && (n = "ISO" === t._locale._fullCalendar_weekCalc ? 1 : t._locale.firstDayOfWeek()),
            s += '<td class="' + e.join(" ") + '"' + (r ? ' data-date="' + t.format() + '"' : "") + ">",
            i.cellWeekNumbersVisible && t.day() == n && (s += i.buildGotoAnchorHtml({
                date: t,
                type: "week"
            }, {
                class: "fc-week-number"
            }, t.format("w"))),
            o && (s += i.buildGotoAnchorHtml(t, {
                class: "fc-day-number"
            }, t.date())),
            s += "</td>") : "<td/>"
        },
        computeEventTimeFormat: function() {
            return this.opt("extraSmallTimeFormat")
        },
        computeDisplayEventEnd: function() {
            return 1 == this.colCnt
        },
        rangeUpdated: function() {
            this.updateDayTable()
        },
        componentFootprintToSegs: function(t) {
            var e, n, i = this.sliceRangeByRow(t.unzonedRange);
            for (e = 0; e < i.length; e++)
                n = i[e],
                this.isRTL ? (n.leftCol = this.daysPerRow - 1 - n.lastRowDayIndex,
                n.rightCol = this.daysPerRow - 1 - n.firstRowDayIndex) : (n.leftCol = n.firstRowDayIndex,
                n.rightCol = n.lastRowDayIndex);
            return i
        },
        prepareHits: function() {
            this.colCoordCache.build(),
            this.rowCoordCache.build(),
            this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
        },
        releaseHits: function() {
            this.colCoordCache.clear(),
            this.rowCoordCache.clear()
        },
        queryHit: function(t, e) {
            if (this.colCoordCache.isLeftInBounds(t) && this.rowCoordCache.isTopInBounds(e)) {
                var n = this.colCoordCache.getHorizontalIndex(t)
                  , i = this.rowCoordCache.getVerticalIndex(e);
                if (null != i && null != n)
                    return this.getCellHit(i, n)
            }
        },
        getHitFootprint: function(t) {
            var e = this.getCellRange(t.row, t.col);
            return new xe(new Me(e.start,e.end),!0)
        },
        getHitEl: function(t) {
            return this.getCellEl(t.row, t.col)
        },
        getCellHit: function(t, e) {
            return {
                row: t,
                col: e,
                component: this,
                left: this.colCoordCache.getLeftOffset(e),
                right: this.colCoordCache.getRightOffset(e),
                top: this.rowCoordCache.getTopOffset(t),
                bottom: this.rowCoordCache.getBottomOffset(t)
            }
        },
        getCellEl: function(t, e) {
            return this.cellEls.eq(t * this.colCnt + e)
        },
        renderDrag: function(t, e) {
            var n;
            for (n = 0; n < t.length; n++)
                this.renderHighlight(t[n].componentFootprint);
            if (e && e.component !== this)
                return this.renderHelperEventFootprints(t, e)
        },
        unrenderDrag: function() {
            this.unrenderHighlight(),
            this.unrenderHelper()
        },
        renderEventResize: function(t, e) {
            var n;
            for (n = 0; n < t.length; n++)
                this.renderHighlight(t[n].componentFootprint);
            return this.renderHelperEventFootprints(t, e)
        },
        unrenderEventResize: function() {
            this.unrenderHighlight(),
            this.unrenderHelper()
        },
        renderHelperEventFootprintEls: function(e, n) {
            var i, s = [], r = this.eventFootprintsToSegs(e);
            return r = this.renderFgSegEls(r),
            i = this.renderSegRows(r),
            this.rowEls.each(function(e, r) {
                var o, a = t(r), l = t('<div class="fc-helper-skeleton"><table/></div>');
                o = n && n.row === e ? n.el.position().top : a.find(".fc-content-skeleton tbody").position().top,
                l.css("top", o).find("table").append(i[e].tbodyEl),
                a.append(l),
                s.push(l[0])
            }),
            this.helperEls = t(s)
        },
        unrenderHelper: function() {
            this.helperEls && (this.helperEls.remove(),
            this.helperEls = null)
        },
        fillSegTag: "td",
        renderFill: function(e, n, i) {
            var s, r, o, a = [];
            for (n = this.renderFillSegEls(e, n),
            s = 0; s < n.length; s++)
                r = n[s],
                o = this.renderFillRow(e, r, i),
                this.rowEls.eq(r.row).append(o),
                a.push(o[0]);
            return this.elsByFill[e] ? this.elsByFill[e] = this.elsByFill[e].add(a) : this.elsByFill[e] = t(a),
            n
        },
        renderFillRow: function(e, n, i) {
            var s, r, o = this.colCnt, a = n.leftCol, l = n.rightCol + 1;
            return i = i || e.toLowerCase(),
            s = t('<div class="fc-' + i + '-skeleton"><table><tr/></table></div>'),
            r = s.find("tr"),
            a > 0 && r.append('<td colspan="' + a + '"/>'),
            r.append(n.el.attr("colspan", l - a)),
            l < o && r.append('<td colspan="' + (o - l) + '"/>'),
            this.bookendCells(r),
            s
        }
    });
    we.mixin({
        rowStructs: null,
        unrenderEvents: function() {
            this.removeSegPopover(),
            me.prototype.unrenderEvents.apply(this, arguments)
        },
        getEventSegs: function() {
            return me.prototype.getEventSegs.call(this).concat(this.popoverSegs || [])
        },
        renderBgSegs: function(e) {
            var n = t.grep(e, function(t) {
                return t.footprint.componentFootprint.isAllDay
            });
            return me.prototype.renderBgSegs.call(this, n)
        },
        renderFgSegs: function(e) {
            var n;
            return e = this.renderFgSegEls(e),
            n = this.rowStructs = this.renderSegRows(e),
            this.rowEls.each(function(e, i) {
                t(i).find(".fc-content-skeleton > table").append(n[e].tbodyEl)
            }),
            e
        },
        unrenderFgSegs: function() {
            for (var t, e = this.rowStructs || []; t = e.pop(); )
                t.tbodyEl.remove();
            this.rowStructs = null
        },
        renderSegRows: function(t) {
            var e, n, i = [];
            for (e = this.groupSegRows(t),
            n = 0; n < e.length; n++)
                i.push(this.renderSegRow(n, e[n]));
            return i
        },
        fgSegHtml: function(t, e) {
            var n, i, s = this.view, r = t.footprint.eventDef, o = t.footprint.componentFootprint.isAllDay, a = s.isEventDefDraggable(r), l = !e && o && t.isStart && s.isEventDefResizableFromStart(r), u = !e && o && t.isEnd && s.isEventDefResizableFromEnd(r), c = this.getSegClasses(t, a, l || u), h = nt(this.getSegSkinCss(t)), d = "";
            return c.unshift("fc-day-grid-event", "fc-h-event"),
            t.isStart && (n = this.getEventTimeText(t.footprint)) && (d = '<span class="fc-time">' + tt(n) + "</span>"),
            i = '<span class="fc-title">' + (tt(r.title || "") || "&nbsp;") + "</span>",
            '<a class="' + c.join(" ") + '"' + (r.url ? ' href="' + tt(r.url) + '"' : "") + (h ? ' style="' + h + '"' : "") + '><div class="fc-content">' + (this.isRTL ? i + " " + d : d + " " + i) + "</div>" + (l ? '<div class="fc-resizer fc-start-resizer" />' : "") + (u ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
        },
        renderSegRow: function(e, n) {
            function i(e) {
                for (; o < e; )
                    c = (m[s - 1] || [])[o],
                    c ? c.attr("rowspan", parseInt(c.attr("rowspan") || 1, 10) + 1) : (c = t("<td/>"),
                    a.append(c)),
                    v[s][o] = c,
                    m[s][o] = c,
                    o++
            }
            var s, r, o, a, l, u, c, h = this.colCnt, d = this.buildSegLevels(n), f = Math.max(1, d.length), g = t("<tbody/>"), p = [], v = [], m = [];
            for (s = 0; s < f; s++) {
                if (r = d[s],
                o = 0,
                a = t("<tr/>"),
                p.push([]),
                v.push([]),
                m.push([]),
                r)
                    for (l = 0; l < r.length; l++) {
                        for (u = r[l],
                        i(u.leftCol),
                        c = t('<td class="fc-event-container"/>').append(u.el),
                        u.leftCol != u.rightCol ? c.attr("colspan", u.rightCol - u.leftCol + 1) : m[s][o] = c; o <= u.rightCol; )
                            v[s][o] = c,
                            p[s][o] = u,
                            o++;
                        a.append(c)
                    }
                i(h),
                this.bookendCells(a),
                g.append(a)
            }
            return {
                row: e,
                tbodyEl: g,
                cellMatrix: v,
                segMatrix: p,
                segLevels: d,
                segs: n
            }
        },
        buildSegLevels: function(t) {
            var e, n, i, s = [];
            for (this.sortEventSegs(t),
            e = 0; e < t.length; e++) {
                for (n = t[e],
                i = 0; i < s.length && yt(n, s[i]); i++)
                    ;
                n.level = i,
                (s[i] || (s[i] = [])).push(n)
            }
            for (i = 0; i < s.length; i++)
                s[i].sort(wt);
            return s
        },
        groupSegRows: function(t) {
            var e, n = [];
            for (e = 0; e < this.rowCnt; e++)
                n.push([]);
            for (e = 0; e < t.length; e++)
                n[t[e].row].push(t[e]);
            return n
        }
    }),
    we.mixin({
        segPopover: null,
        popoverSegs: null,
        removeSegPopover: function() {
            this.segPopover && this.segPopover.hide()
        },
        limitRows: function(t) {
            var e, n, i = this.rowStructs || [];
            for (e = 0; e < i.length; e++)
                this.unlimitRow(e),
                !1 !== (n = !!t && ("number" == typeof t ? t : this.computeRowLevelLimit(e))) && this.limitRow(e, n)
        },
        computeRowLevelLimit: function(e) {
            function n(e, n) {
                r = Math.max(r, t(n).outerHeight())
            }
            var i, s, r, o = this.rowEls.eq(e), a = o.height(), l = this.rowStructs[e].tbodyEl.children();
            for (i = 0; i < l.length; i++)
                if (s = l.eq(i).removeClass("fc-limited"),
                r = 0,
                s.find("> td > :first-child").each(n),
                s.position().top + r > a)
                    return i;
            return !1
        },
        limitRow: function(e, n) {
            function i(i) {
                for (; S < i; )
                    u = w.getCellSegs(e, S, n),
                    u.length && (d = r[n - 1][S],
                    y = w.renderMoreLink(e, S, u),
                    m = t("<div/>").append(y),
                    d.append(m),
                    b.push(m[0])),
                    S++
            }
            var s, r, o, a, l, u, c, h, d, f, g, p, v, m, y, w = this, D = this.rowStructs[e], b = [], S = 0;
            if (n && n < D.segLevels.length) {
                for (s = D.segLevels[n - 1],
                r = D.cellMatrix,
                o = D.tbodyEl.children().slice(n).addClass("fc-limited").get(),
                a = 0; a < s.length; a++) {
                    for (l = s[a],
                    i(l.leftCol),
                    h = [],
                    c = 0; S <= l.rightCol; )
                        u = this.getCellSegs(e, S, n),
                        h.push(u),
                        c += u.length,
                        S++;
                    if (c) {
                        for (d = r[n - 1][l.leftCol],
                        f = d.attr("rowspan") || 1,
                        g = [],
                        p = 0; p < h.length; p++)
                            v = t('<td class="fc-more-cell"/>').attr("rowspan", f),
                            u = h[p],
                            y = this.renderMoreLink(e, l.leftCol + p, [l].concat(u)),
                            m = t("<div/>").append(y),
                            v.append(m),
                            g.push(v[0]),
                            b.push(v[0]);
                        d.addClass("fc-limited").after(t(g)),
                        o.push(d[0])
                    }
                }
                i(this.colCnt),
                D.moreEls = t(b),
                D.limitedEls = t(o)
            }
        },
        unlimitRow: function(t) {
            var e = this.rowStructs[t];
            e.moreEls && (e.moreEls.remove(),
            e.moreEls = null),
            e.limitedEls && (e.limitedEls.removeClass("fc-limited"),
            e.limitedEls = null)
        },
        renderMoreLink: function(e, n, i) {
            var s = this
              , r = this.view;
            return t('<a class="fc-more"/>').text(this.getMoreLinkText(i.length)).on("click", function(o) {
                var a = s.opt("eventLimitClick")
                  , l = s.getCellDate(e, n)
                  , u = t(this)
                  , c = s.getCellEl(e, n)
                  , h = s.getCellSegs(e, n)
                  , d = s.resliceDaySegs(h, l)
                  , f = s.resliceDaySegs(i, l);
                "function" == typeof a && (a = s.publiclyTrigger("eventLimitClick", {
                    context: r,
                    args: [{
                        date: l.clone(),
                        dayEl: c,
                        moreEl: u,
                        segs: d,
                        hiddenSegs: f
                    }, o, r]
                })),
                "popover" === a ? s.showSegPopover(e, n, u, d) : "string" == typeof a && r.calendar.zoomTo(l, a)
            })
        },
        showSegPopover: function(t, e, n, i) {
            var s, r, o = this, a = this.view, l = n.parent();
            s = 1 == this.rowCnt ? a.el : this.rowEls.eq(t),
            r = {
                className: "fc-more-popover " + a.calendar.theme.getClass("popover"),
                content: this.renderSegPopoverContent(t, e, i),
                parentEl: a.el,
                top: s.offset().top,
                autoHide: !0,
                viewportConstrain: this.opt("popoverViewportConstrain"),
                hide: function() {
                    if (o.popoverSegs) {
                        var t, e, n;
                        for (n = 0; n < o.popoverSegs.length; ++n)
                            t = o.popoverSegs[n],
                            e = t.footprint.getEventLegacy(),
                            o.publiclyTrigger("eventDestroy", {
                                context: e,
                                args: [e, t.el, a]
                            })
                    }
                    o.segPopover.removeElement(),
                    o.segPopover = null,
                    o.popoverSegs = null
                }
            },
            this.isRTL ? r.right = l.offset().left + l.outerWidth() + 1 : r.left = l.offset().left - 1,
            this.segPopover = new ce(r),
            this.segPopover.show(),
            this.bindSegHandlersToEl(this.segPopover.el)
        },
        renderSegPopoverContent: function(e, n, i) {
            var s, r = this.view, o = r.calendar.theme, a = this.getCellDate(e, n).format(this.opt("dayPopoverFormat")), l = t('<div class="fc-header ' + o.getClass("popoverHeader") + '"><span class="fc-close ' + o.getIconClass("close") + '"></span><span class="fc-title">' + tt(a) + '</span><div class="fc-clear"/></div><div class="fc-body ' + o.getClass("popoverContent") + '"><div class="fc-event-container"></div></div>'), u = l.find(".fc-event-container");
            for (i = this.renderFgSegEls(i, !0),
            this.popoverSegs = i,
            s = 0; s < i.length; s++)
                this.hitsNeeded(),
                i[s].hit = this.getCellHit(e, n),
                this.hitsNotNeeded(),
                u.append(i[s].el);
            return l
        },
        resliceDaySegs: function(t, e) {
            var n, i = e.clone(), s = i.clone().add(1, "days"), r = new Me(i,s), o = [];
            for (n = 0; n < t.length; n++)
                o.push.apply(o, this.eventFootprintToSegs(t[n].footprint, r));
            return this.sortEventSegs(o),
            o
        },
        getMoreLinkText: function(t) {
            var e = this.opt("eventLimitText");
            return "function" == typeof e ? e(t) : "+" + t + " " + e
        },
        getCellSegs: function(t, e, n) {
            for (var i, s = this.rowStructs[t].segMatrix, r = n || 0, o = []; r < s.length; )
                i = s[r][e],
                i && o.push(i),
                r++;
            return o
        }
    });
    var De = Vt.TimeGrid = me.extend(ye, {
        dayRanges: null,
        slotDuration: null,
        snapDuration: null,
        snapsPerSlot: null,
        labelFormat: null,
        labelInterval: null,
        colEls: null,
        slatContainerEl: null,
        slatEls: null,
        nowIndicatorEls: null,
        colCoordCache: null,
        slatCoordCache: null,
        constructor: function() {
            me.apply(this, arguments),
            this.processOptions()
        },
        renderDates: function() {
            this.el.html(this.renderHtml()),
            this.colEls = this.el.find(".fc-day, .fc-disabled-day"),
            this.slatContainerEl = this.el.find(".fc-slats"),
            this.slatEls = this.slatContainerEl.find("tr"),
            this.colCoordCache = new he({
                els: this.colEls,
                isHorizontal: !0
            }),
            this.slatCoordCache = new he({
                els: this.slatEls,
                isVertical: !0
            }),
            this.renderContentSkeleton()
        },
        renderHtml: function() {
            var t = this.view.calendar.theme;
            return '<div class="fc-bg"><table class="' + t.getClass("tableGrid") + '">' + this.renderBgTrHtml(0) + '</table></div><div class="fc-slats"><table class="' + t.getClass("tableGrid") + '">' + this.renderSlatRowHtml() + "</table></div>"
        },
        renderSlatRowHtml: function() {
            for (var t, n, i, s = this.view, r = s.calendar, o = r.theme, a = this.isRTL, l = "", u = e.duration(+this.view.minTime), c = e.duration(0); u < s.maxTime; )
                t = r.msToUtcMoment(this.unzonedRange.startMs).time(u),
                n = ot(G(c, this.labelInterval)),
                i = '<td class="fc-axis fc-time ' + o.getClass("widgetContent") + '" ' + s.axisStyleAttr() + ">" + (n ? "<span>" + tt(t.format(this.labelFormat)) + "</span>" : "") + "</td>",
                l += '<tr data-time="' + t.format("HH:mm:ss") + '"' + (n ? "" : ' class="fc-minor"') + ">" + (a ? "" : i) + '<td class="' + o.getClass("widgetContent") + '"/>' + (a ? i : "") + "</tr>",
                u.add(this.slotDuration),
                c.add(this.slotDuration);
            return l
        },
        processOptions: function() {
            var n, i = this.opt("slotDuration"), s = this.opt("snapDuration");
            i = e.duration(i),
            s = s ? e.duration(s) : i,
            this.slotDuration = i,
            this.snapDuration = s,
            this.snapsPerSlot = i / s,
            n = this.opt("slotLabelFormat"),
            t.isArray(n) && (n = n[n.length - 1]),
            this.labelFormat = n || this.opt("smallTimeFormat"),
            n = this.opt("slotLabelInterval"),
            this.labelInterval = n ? e.duration(n) : this.computeLabelInterval(i)
        },
        computeLabelInterval: function(t) {
            var n, i, s;
            for (n = ln.length - 1; n >= 0; n--)
                if (i = e.duration(ln[n]),
                s = G(i, t),
                ot(s) && s > 1)
                    return i;
            return e.duration(t)
        },
        computeEventTimeFormat: function() {
            return this.opt("noMeridiemTimeFormat")
        },
        computeDisplayEventEnd: function() {
            return !0
        },
        prepareHits: function() {
            this.colCoordCache.build(),
            this.slatCoordCache.build()
        },
        releaseHits: function() {
            this.colCoordCache.clear()
        },
        queryHit: function(t, e) {
            var n = this.snapsPerSlot
              , i = this.colCoordCache
              , s = this.slatCoordCache;
            if (i.isLeftInBounds(t) && s.isTopInBounds(e)) {
                var r = i.getHorizontalIndex(t)
                  , o = s.getVerticalIndex(e);
                if (null != r && null != o) {
                    var a = s.getTopOffset(o)
                      , l = s.getHeight(o)
                      , u = (e - a) / l
                      , c = Math.floor(u * n)
                      , h = o * n + c
                      , d = a + c / n * l
                      , f = a + (c + 1) / n * l;
                    return {
                        col: r,
                        snap: h,
                        component: this,
                        left: i.getLeftOffset(r),
                        right: i.getRightOffset(r),
                        top: d,
                        bottom: f
                    }
                }
            }
        },
        getHitFootprint: function(t) {
            var e, n = this.getCellDate(0, t.col), i = this.computeSnapTime(t.snap);
            return n.time(i),
            e = n.clone().add(this.snapDuration),
            new xe(new Me(n,e),!1)
        },
        getHitEl: function(t) {
            return this.colEls.eq(t.col)
        },
        rangeUpdated: function() {
            var t = this.view;
            this.updateDayTable(),
            this.dayRanges = this.dayDates.map(function(e) {
                return new Me(e.clone().add(t.minTime),e.clone().add(t.maxTime))
            })
        },
        computeSnapTime: function(t) {
            return e.duration(this.view.minTime + this.snapDuration * t)
        },
        componentFootprintToSegs: function(t) {
            var e, n = this.sliceRangeByTimes(t.unzonedRange);
            for (e = 0; e < n.length; e++)
                this.isRTL ? n[e].col = this.daysPerRow - 1 - n[e].dayIndex : n[e].col = n[e].dayIndex;
            return n
        },
        sliceRangeByTimes: function(t) {
            var e, n, i = [];
            for (n = 0; n < this.daysPerRow; n++)
                (e = t.intersect(this.dayRanges[n])) && i.push({
                    startMs: e.startMs,
                    endMs: e.endMs,
                    isStart: e.isStart,
                    isEnd: e.isEnd,
                    dayIndex: n
                });
            return i
        },
        updateSize: function(t) {
            this.slatCoordCache.build(),
            t && this.updateSegVerticals([].concat(this.fgSegs || [], this.bgSegs || [], this.businessSegs || []))
        },
        getTotalSlatHeight: function() {
            return this.slatContainerEl.outerHeight()
        },
        computeDateTop: function(t, n) {
            return this.computeTimeTop(e.duration(t - n.clone().stripTime()))
        },
        computeTimeTop: function(t) {
            var e, n, i = this.slatEls.length, s = (t - this.view.minTime) / this.slotDuration;
            return s = Math.max(0, s),
            s = Math.min(i, s),
            e = Math.floor(s),
            e = Math.min(e, i - 1),
            n = s - e,
            this.slatCoordCache.getTopPosition(e) + this.slatCoordCache.getHeight(e) * n
        },
        renderDrag: function(t, e) {
            var n;
            if (e)
                return this.renderHelperEventFootprints(t);
            for (n = 0; n < t.length; n++)
                this.renderHighlight(t[n].componentFootprint)
        },
        unrenderDrag: function() {
            this.unrenderHelper(),
            this.unrenderHighlight()
        },
        renderEventResize: function(t, e) {
            return this.renderHelperEventFootprints(t, e)
        },
        unrenderEventResize: function() {
            this.unrenderHelper()
        },
        renderHelperEventFootprintEls: function(t, e) {
            var n = this.eventFootprintsToSegs(t);
            return this.renderHelperSegs(n, e)
        },
        unrenderHelper: function() {
            this.unrenderHelperSegs()
        },
        renderBusinessHours: function() {
            this.renderBusinessSegs(this.buildBusinessHourSegs())
        },
        unrenderBusinessHours: function() {
            this.unrenderBusinessSegs()
        },
        getNowIndicatorUnit: function() {
            return "minute"
        },
        renderNowIndicator: function(e) {
            var n, i = this.componentFootprintToSegs(new xe(new Me(e,e.valueOf() + 1),!1)), s = this.computeDateTop(e, e), r = [];
            for (n = 0; n < i.length; n++)
                r.push(t('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top", s).appendTo(this.colContainerEls.eq(i[n].col))[0]);
            i.length > 0 && r.push(t('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top", s).appendTo(this.el.find(".fc-content-skeleton"))[0]),
            this.nowIndicatorEls = t(r)
        },
        unrenderNowIndicator: function() {
            this.nowIndicatorEls && (this.nowIndicatorEls.remove(),
            this.nowIndicatorEls = null)
        },
        renderSelectionFootprint: function(t) {
            this.opt("selectHelper") ? this.renderHelperEventFootprints([this.fabricateEventFootprint(t)]) : this.renderHighlight(t)
        },
        unrenderSelection: function() {
            this.unrenderHelper(),
            this.unrenderHighlight()
        },
        renderHighlight: function(t) {
            this.renderHighlightSegs(this.componentFootprintToSegs(t))
        },
        unrenderHighlight: function() {
            this.unrenderHighlightSegs()
        }
    });
    De.mixin({
        colContainerEls: null,
        fgContainerEls: null,
        bgContainerEls: null,
        helperContainerEls: null,
        highlightContainerEls: null,
        businessContainerEls: null,
        fgSegs: null,
        bgSegs: null,
        helperSegs: null,
        highlightSegs: null,
        businessSegs: null,
        renderContentSkeleton: function() {
            var e, n, i = "";
            for (e = 0; e < this.colCnt; e++)
                i += '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';
            n = t('<div class="fc-content-skeleton"><table><tr>' + i + "</tr></table></div>"),
            this.colContainerEls = n.find(".fc-content-col"),
            this.helperContainerEls = n.find(".fc-helper-container"),
            this.fgContainerEls = n.find(".fc-event-container:not(.fc-helper-container)"),
            this.bgContainerEls = n.find(".fc-bgevent-container"),
            this.highlightContainerEls = n.find(".fc-highlight-container"),
            this.businessContainerEls = n.find(".fc-business-container"),
            this.bookendCells(n.find("tr")),
            this.el.append(n)
        },
        renderFgSegs: function(t) {
            return t = this.renderFgSegsIntoContainers(t, this.fgContainerEls),
            this.fgSegs = t,
            t
        },
        unrenderFgSegs: function() {
            this.unrenderNamedSegs("fgSegs")
        },
        renderHelperSegs: function(e, n) {
            var i, s, r, o = [];
            for (e = this.renderFgSegsIntoContainers(e, this.helperContainerEls),
            i = 0; i < e.length; i++)
                s = e[i],
                n && n.col === s.col && (r = n.el,
                s.el.css({
                    left: r.css("left"),
                    right: r.css("right"),
                    "margin-left": r.css("margin-left"),
                    "margin-right": r.css("margin-right")
                })),
                o.push(s.el[0]);
            return this.helperSegs = e,
            t(o)
        },
        unrenderHelperSegs: function() {
            this.unrenderNamedSegs("helperSegs")
        },
        renderBgSegs: function(t) {
            return t = this.renderFillSegEls("bgEvent", t),
            this.updateSegVerticals(t),
            this.attachSegsByCol(this.groupSegsByCol(t), this.bgContainerEls),
            this.bgSegs = t,
            t
        },
        unrenderBgSegs: function() {
            this.unrenderNamedSegs("bgSegs")
        },
        renderHighlightSegs: function(t) {
            t = this.renderFillSegEls("highlight", t),
            this.updateSegVerticals(t),
            this.attachSegsByCol(this.groupSegsByCol(t), this.highlightContainerEls),
            this.highlightSegs = t
        },
        unrenderHighlightSegs: function() {
            this.unrenderNamedSegs("highlightSegs")
        },
        renderBusinessSegs: function(t) {
            t = this.renderFillSegEls("businessHours", t),
            this.updateSegVerticals(t),
            this.attachSegsByCol(this.groupSegsByCol(t), this.businessContainerEls),
            this.businessSegs = t
        },
        unrenderBusinessSegs: function() {
            this.unrenderNamedSegs("businessSegs")
        },
        groupSegsByCol: function(t) {
            var e, n = [];
            for (e = 0; e < this.colCnt; e++)
                n.push([]);
            for (e = 0; e < t.length; e++)
                n[t[e].col].push(t[e]);
            return n
        },
        attachSegsByCol: function(t, e) {
            var n, i, s;
            for (n = 0; n < this.colCnt; n++)
                for (i = t[n],
                s = 0; s < i.length; s++)
                    e.eq(n).append(i[s].el)
        },
        unrenderNamedSegs: function(t) {
            var e, n = this[t];
            if (n) {
                for (e = 0; e < n.length; e++)
                    n[e].el.remove();
                this[t] = null
            }
        },
        renderFgSegsIntoContainers: function(t, e) {
            var n, i;
            for (t = this.renderFgSegEls(t),
            n = this.groupSegsByCol(t),
            i = 0; i < this.colCnt; i++)
                this.updateFgSegCoords(n[i]);
            return this.attachSegsByCol(n, e),
            t
        },
        fgSegHtml: function(t, e) {
            var n, i, s, r = this.view, o = r.calendar, a = t.footprint.componentFootprint, l = a.isAllDay, u = t.footprint.eventDef, c = r.isEventDefDraggable(u), h = !e && t.isStart && r.isEventDefResizableFromStart(u), d = !e && t.isEnd && r.isEventDefResizableFromEnd(u), f = this.getSegClasses(t, c, h || d), g = nt(this.getSegSkinCss(t));
            if (f.unshift("fc-time-grid-event", "fc-v-event"),
            r.isMultiDayRange(a.unzonedRange)) {
                if (t.isStart || t.isEnd) {
                    var p = o.msToMoment(t.startMs)
                      , v = o.msToMoment(t.endMs);
                    n = this._getEventTimeText(p, v, l),
                    i = this._getEventTimeText(p, v, l, "LT"),
                    s = this._getEventTimeText(p, v, l, null, !1)
                }
            } else
                n = this.getEventTimeText(t.footprint),
                i = this.getEventTimeText(t.footprint, "LT"),
                s = this.getEventTimeText(t.footprint, null, !1);
            return '<a class="' + f.join(" ") + '"' + (u.url ? ' href="' + tt(u.url) + '"' : "") + (g ? ' style="' + g + '"' : "") + '><div class="fc-content">' + (n ? '<div class="fc-time" data-start="' + tt(s) + '" data-full="' + tt(i) + '"><span>' + tt(n) + "</span></div>" : "") + (u.title ? '<div class="fc-title">' + tt(u.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (d ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
        },
        updateSegVerticals: function(t) {
            this.computeSegVerticals(t),
            this.assignSegVerticals(t)
        },
        computeSegVerticals: function(t) {
            var e, n, i;
            for (e = 0; e < t.length; e++)
                n = t[e],
                i = this.dayDates[n.dayIndex],
                n.top = this.computeDateTop(n.startMs, i),
                n.bottom = this.computeDateTop(n.endMs, i)
        },
        assignSegVerticals: function(t) {
            var e, n;
            for (e = 0; e < t.length; e++)
                n = t[e],
                n.el.css(this.generateSegVerticalCss(n))
        },
        generateSegVerticalCss: function(t) {
            return {
                top: t.top,
                bottom: -t.bottom
            }
        },
        updateFgSegCoords: function(t) {
            this.computeSegVerticals(t),
            this.computeFgSegHorizontals(t),
            this.assignSegVerticals(t),
            this.assignFgSegHorizontals(t)
        },
        computeFgSegHorizontals: function(t) {
            var e, n, i;
            if (this.sortEventSegs(t),
            e = Dt(t),
            bt(e),
            n = e[0]) {
                for (i = 0; i < n.length; i++)
                    St(n[i]);
                for (i = 0; i < n.length; i++)
                    this.computeFgSegForwardBack(n[i], 0, 0)
            }
        },
        computeFgSegForwardBack: function(t, e, n) {
            var i, s = t.forwardSegs;
            if (void 0 === t.forwardCoord)
                for (s.length ? (this.sortForwardSegs(s),
                this.computeFgSegForwardBack(s[0], e + 1, n),
                t.forwardCoord = s[0].backwardCoord) : t.forwardCoord = 1,
                t.backwardCoord = t.forwardCoord - (t.forwardCoord - n) / (e + 1),
                i = 0; i < s.length; i++)
                    this.computeFgSegForwardBack(s[i], 0, t.forwardCoord)
        },
        sortForwardSegs: function(t) {
            t.sort(at(this, "compareForwardSegs"))
        },
        compareForwardSegs: function(t, e) {
            return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || this.compareEventSegs(t, e)
        },
        assignFgSegHorizontals: function(t) {
            var e, n;
            for (e = 0; e < t.length; e++)
                n = t[e],
                n.el.css(this.generateFgSegHorizontalCss(n)),
                n.bottom - n.top < 30 && n.el.addClass("fc-short")
        },
        generateFgSegHorizontalCss: function(t) {
            var e, n, i = this.opt("slotEventOverlap"), s = t.backwardCoord, r = t.forwardCoord, o = this.generateSegVerticalCss(t);
            return i && (r = Math.min(1, s + 2 * (r - s))),
            this.isRTL ? (e = 1 - r,
            n = s) : (e = s,
            n = 1 - r),
            o.zIndex = t.level + 1,
            o.left = 100 * e + "%",
            o.right = 100 * n + "%",
            i && t.forwardPressure && (o[this.isRTL ? "marginLeft" : "marginRight"] = 20),
            o
        }
    });
    var be = Vt.View = ve.extend({
        type: null,
        name: null,
        title: null,
        calendar: null,
        viewSpec: null,
        options: null,
        renderQueue: null,
        batchRenderDepth: 0,
        isDatesRendered: !1,
        isEventsRendered: !1,
        isBaseRendered: !1,
        queuedScroll: null,
        isSelected: !1,
        selectedEventInstance: null,
        eventOrderSpecs: null,
        isHiddenDayHash: null,
        isNowIndicatorRendered: null,
        initialNowDate: null,
        initialNowQueriedMs: null,
        nowIndicatorTimeoutID: null,
        nowIndicatorIntervalID: null,
        constructor: function(t, e) {
            this.calendar = t,
            this.viewSpec = e,
            this.type = e.type,
            this.options = e.options,
            this.name = this.type,
            ve.call(this),
            this.initHiddenDays(),
            this.eventOrderSpecs = z(this.opt("eventOrder")),
            this.renderQueue = this.buildRenderQueue(),
            this.initAutoBatchRender(),
            this.initialize()
        },
        buildRenderQueue: function() {
            var t = this
              , e = new ue({
                event: this.opt("eventRenderWait")
            });
            return e.on("start", function() {
                t.freezeHeight(),
                t.addScroll(t.queryScroll())
            }),
            e.on("stop", function() {
                t.thawHeight(),
                t.popScroll()
            }),
            e
        },
        initAutoBatchRender: function() {
            var t = this;
            this.on("before:change", function() {
                t.startBatchRender()
            }),
            this.on("change", function() {
                t.stopBatchRender()
            })
        },
        startBatchRender: function() {
            this.batchRenderDepth++ || this.renderQueue.pause()
        },
        stopBatchRender: function() {
            --this.batchRenderDepth || this.renderQueue.resume()
        },
        initialize: function() {},
        opt: function(t) {
            return this.options[t]
        },
        computeTitle: function() {
            var t;
            return t = /^(year|month)$/.test(this.currentRangeUnit) ? this.currentUnzonedRange : this.activeUnzonedRange,
            this.formatRange({
                start: this.calendar.msToMoment(t.startMs, this.isRangeAllDay),
                end: this.calendar.msToMoment(t.endMs, this.isRangeAllDay)
            }, this.isRangeAllDay, this.opt("titleFormat") || this.computeTitleFormat(), this.opt("titleRangeSeparator"))
        },
        computeTitleFormat: function() {
            return "year" == this.currentRangeUnit ? "YYYY" : "month" == this.currentRangeUnit ? this.opt("monthYearFormat") : this.currentRangeAs("days") > 1 ? "ll" : "LL"
        },
        setElement: function(t) {
            ve.prototype.setElement.apply(this, arguments),
            this.bindBaseRenderHandlers()
        },
        removeElement: function() {
            this.unsetDate(),
            this.unbindBaseRenderHandlers(),
            ve.prototype.removeElement.apply(this, arguments)
        },
        setDate: function(t) {
            var e = this.get("dateProfile")
              , n = this.buildDateProfile(t, null, !0);
            return e && e.activeUnzonedRange.equals(n.activeUnzonedRange) || this.set("dateProfile", n),
            n.date
        },
        unsetDate: function() {
            this.unset("dateProfile")
        },
        requestDateRender: function(t) {
            var e = this;
            this.renderQueue.queue(function() {
                e.executeDateRender(t)
            }, "date", "init")
        },
        requestDateUnrender: function() {
            var t = this;
            this.renderQueue.queue(function() {
                t.executeDateUnrender()
            }, "date", "destroy")
        },
        fetchInitialEvents: function(t) {
            var e = this.calendar
              , n = t.isRangeAllDay && !this.usesMinMaxTime;
            return e.requestEvents(e.msToMoment(t.activeUnzonedRange.startMs, n), e.msToMoment(t.activeUnzonedRange.endMs, n))
        },
        bindEventChanges: function() {
            this.listenTo(this.calendar, "eventsReset", this.resetEvents)
        },
        unbindEventChanges: function() {
            this.stopListeningTo(this.calendar, "eventsReset")
        },
        setEvents: function(t) {
            this.set("currentEvents", t),
            this.set("hasEvents", !0)
        },
        unsetEvents: function() {
            this.unset("currentEvents"),
            this.unset("hasEvents")
        },
        resetEvents: function(t) {
            this.startBatchRender(),
            this.unsetEvents(),
            this.setEvents(t),
            this.stopBatchRender()
        },
        requestEventsRender: function(t) {
            var e = this;
            this.renderQueue.queue(function() {
                e.executeEventsRender(t)
            }, "event", "init")
        },
        requestEventsUnrender: function() {
            var t = this;
            this.renderQueue.queue(function() {
                t.executeEventsUnrender()
            }, "event", "destroy")
        },
        executeDateRender: function(t, e) {
            this.setDateProfileForRendering(t),
            this.render && this.render(),
            this.renderDates(),
            this.updateSize(),
            this.renderBusinessHours(),
            this.startNowIndicator(),
            e || this.addScroll(this.computeInitialDateScroll()),
            this.isDatesRendered = !0,
            this.trigger("datesRendered")
        },
        executeDateUnrender: function() {
            this.unselect(),
            this.stopNowIndicator(),
            this.trigger("before:datesUnrendered"),
            this.unrenderBusinessHours(),
            this.unrenderDates(),
            this.destroy && this.destroy(),
            this.isDatesRendered = !1
        },
        bindBaseRenderHandlers: function() {
            var t = this;
            this.on("datesRendered.baseHandler", function() {
                t.onBaseRender()
            }),
            this.on("before:datesUnrendered.baseHandler", function() {
                t.onBeforeBaseUnrender()
            })
        },
        unbindBaseRenderHandlers: function() {
            this.off(".baseHandler")
        },
        onBaseRender: function() {
            this.applyScreenState(),
            this.publiclyTrigger("viewRender", {
                context: this,
                args: [this, this.el]
            })
        },
        onBeforeBaseUnrender: function() {
            this.applyScreenState(),
            this.publiclyTrigger("viewDestroy", {
                context: this,
                args: [this, this.el]
            })
        },
        bindGlobalHandlers: function() {
            this.listenTo(ge.get(), {
                touchstart: this.processUnselect,
                mousedown: this.handleDocumentMousedown
            })
        },
        unbindGlobalHandlers: function() {
            this.stopListeningTo(ge.get())
        },
        startNowIndicator: function() {
            var t, n, i, s = this;
            this.opt("nowIndicator") && (t = this.getNowIndicatorUnit()) && (n = at(this, "updateNowIndicator"),
            this.initialNowDate = this.calendar.getNow(),
            this.initialNowQueriedMs = +new Date,
            this.renderNowIndicator(this.initialNowDate),
            this.isNowIndicatorRendered = !0,
            i = this.initialNowDate.clone().startOf(t).add(1, t) - this.initialNowDate,
            this.nowIndicatorTimeoutID = setTimeout(function() {
                s.nowIndicatorTimeoutID = null,
                n(),
                i = +e.duration(1, t),
                i = Math.max(100, i),
                s.nowIndicatorIntervalID = setInterval(n, i)
            }, i))
        },
        updateNowIndicator: function() {
            this.isNowIndicatorRendered && (this.unrenderNowIndicator(),
            this.renderNowIndicator(this.initialNowDate.clone().add(new Date - this.initialNowQueriedMs)))
        },
        stopNowIndicator: function() {
            this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID),
            this.nowIndicatorTimeoutID = null),
            this.nowIndicatorIntervalID && (clearTimeout(this.nowIndicatorIntervalID),
            this.nowIndicatorIntervalID = null),
            this.unrenderNowIndicator(),
            this.isNowIndicatorRendered = !1)
        },
        updateSize: function(t) {
            var e;
            t && (e = this.queryScroll()),
            this.updateHeight(t),
            this.updateWidth(t),
            this.updateNowIndicator(),
            t && this.applyScroll(e)
        },
        updateWidth: function(t) {},
        updateHeight: function(t) {
            var e = this.calendar;
            this.setHeight(e.getSuggestedViewHeight(), e.isHeightAuto())
        },
        setHeight: function(t, e) {},
        addForcedScroll: function(e) {
            this.addScroll(t.extend(e, {
                isForced: !0
            }))
        },
        addScroll: function(e) {
            var n = this.queuedScroll || (this.queuedScroll = {});
            n.isForced || t.extend(n, e)
        },
        popScroll: function() {
            this.applyQueuedScroll(),
            this.queuedScroll = null
        },
        applyQueuedScroll: function() {
            this.queuedScroll && this.applyScroll(this.queuedScroll)
        },
        queryScroll: function() {
            var e = {};
            return this.isDatesRendered && t.extend(e, this.queryDateScroll()),
            e
        },
        applyScroll: function(t) {
            this.isDatesRendered && this.applyDateScroll(t)
        },
        computeInitialDateScroll: function() {
            return {}
        },
        queryDateScroll: function() {
            return {}
        },
        applyDateScroll: function(t) {},
        freezeHeight: function() {
            this.calendar.freezeContentHeight()
        },
        thawHeight: function() {
            this.calendar.thawContentHeight()
        },
        executeEventsRender: function(t) {
            this.renderEvents ? this.renderEvents(Tt(t)) : this.renderEventsPayload(t),
            this.isEventsRendered = !0,
            this.onEventsRender()
        },
        executeEventsUnrender: function() {
            this.onBeforeEventsUnrender(),
            this.destroyEvents && this.destroyEvents(),
            this.unrenderEvents(),
            this.isEventsRendered = !1
        },
        onEventsRender: function() {
            var t = this
              , e = this.hasPublicHandlers("eventAfterRender");
            (e || this.hasPublicHandlers("eventAfterAllRender")) && this.applyScreenState(),
            e && this.getEventSegs().forEach(function(e) {
                var n;
                e.el && (n = e.footprint.getEventLegacy(),
                t.publiclyTrigger("eventAfterRender", {
                    context: n,
                    args: [n, e.el, t]
                }))
            }),
            this.publiclyTrigger("eventAfterAllRender", {
                context: this,
                args: [this]
            })
        },
        onBeforeEventsUnrender: function() {
            var t = this;
            this.hasPublicHandlers("eventDestroy") && (this.applyScreenState(),
            this.getEventSegs().forEach(function(e) {
                var n;
                e.el && (n = e.footprint.getEventLegacy(),
                t.publiclyTrigger("eventDestroy", {
                    context: n,
                    args: [n, e.el, t]
                }))
            }))
        },
        applyScreenState: function() {
            this.thawHeight(),
            this.freezeHeight(),
            this.applyQueuedScroll()
        },
        showEventsWithId: function(t) {
            this.getEventSegs().forEach(function(e) {
                e.footprint.eventDef.id === t && e.el && e.el.css("visibility", "")
            })
        },
        hideEventsWithId: function(t) {
            this.getEventSegs().forEach(function(e) {
                e.footprint.eventDef.id === t && e.el && e.el.css("visibility", "hidden")
            })
        },
        reportEventDrop: function(t, n, i, s) {
            var r = this.calendar.eventManager
              , o = r.mutateEventsWithId(t.def.id, n, this.calendar)
              , a = n.dateMutation;
            a && (t.dateProfile = a.buildNewDateProfile(t.dateProfile, this.calendar)),
            this.triggerEventDrop(t, a && a.dateDelta || e.duration(), o, i, s)
        },
        triggerEventDrop: function(t, e, n, i, s) {
            this.publiclyTrigger("eventDrop", {
                context: i[0],
                args: [t.toLegacy(), e, n, s, {}, this]
            })
        },
        reportExternalDrop: function(t, e, n, i, s, r) {
            e && this.calendar.eventManager.addEventDef(t, n),
            this.triggerExternalDrop(t, e, i, s, r)
        },
        triggerExternalDrop: function(t, e, n, i, s) {
            this.publiclyTrigger("drop", {
                context: n[0],
                args: [t.dateProfile.start.clone(), i, s, this]
            }),
            e && this.publiclyTrigger("eventReceive", {
                context: this,
                args: [t.buildInstance().toLegacy(), this]
            })
        },
        reportEventResize: function(t, e, n, i) {
            var s = this.calendar.eventManager
              , r = s.mutateEventsWithId(t.def.id, e, this.calendar);
            t.dateProfile = e.dateMutation.buildNewDateProfile(t.dateProfile, this.calendar),
            this.triggerEventResize(t, e.dateMutation.endDelta, r, n, i)
        },
        triggerEventResize: function(t, e, n, i, s) {
            this.publiclyTrigger("eventResize", {
                context: i[0],
                args: [t.toLegacy(), e, n, s, {}, this]
            })
        },
        select: function(t, e) {
            this.unselect(e),
            this.renderSelectionFootprint(t),
            this.reportSelection(t, e)
        },
        renderSelectionFootprint: function(t, e) {
            this.renderSelection ? this.renderSelection(t.toLegacy(this.calendar)) : ve.prototype.renderSelectionFootprint.apply(this, arguments)
        },
        reportSelection: function(t, e) {
            this.isSelected = !0,
            this.triggerSelect(t, e)
        },
        triggerSelect: function(t, e) {
            var n = this.calendar.footprintToDateProfile(t);
            this.publiclyTrigger("select", {
                context: this,
                args: [n.start, n.end, e, this]
            })
        },
        unselect: function(t) {
            this.isSelected && (this.isSelected = !1,
            this.destroySelection && this.destroySelection(),
            this.unrenderSelection(),
            this.publiclyTrigger("unselect", {
                context: this,
                args: [t, this]
            }))
        },
        selectEventInstance: function(t) {
            this.selectedEventInstance && this.selectedEventInstance === t || (this.unselectEventInstance(),
            this.getEventSegs().forEach(function(e) {
                e.footprint.eventInstance === t && e.el && e.el.addClass("fc-selected")
            }),
            this.selectedEventInstance = t)
        },
        unselectEventInstance: function() {
            this.selectedEventInstance && (this.getEventSegs().forEach(function(t) {
                t.el && t.el.removeClass("fc-selected")
            }),
            this.selectedEventInstance = null)
        },
        isEventDefSelected: function(t) {
            return this.selectedEventInstance && this.selectedEventInstance.def.id === t.id
        },
        handleDocumentMousedown: function(t) {
            D(t) && this.processUnselect(t)
        },
        processUnselect: function(t) {
            this.processRangeUnselect(t),
            this.processEventUnselect(t)
        },
        processRangeUnselect: function(e) {
            var n;
            this.isSelected && this.opt("unselectAuto") && ((n = this.opt("unselectCancel")) && t(e.target).closest(n).length || this.unselect(e))
        },
        processEventUnselect: function(e) {
            this.selectedEventInstance && (t(e.target).closest(".fc-selected").length || this.unselectEventInstance())
        },
        triggerDayClick: function(t, e, n) {
            var i = this.calendar.footprintToDateProfile(t);
            this.publiclyTrigger("dayClick", {
                context: e,
                args: [i.start, n, this]
            })
        }
    });
    be.watch("displayingDates", ["dateProfile"], function(t) {
        this.requestDateRender(t.dateProfile)
    }, function() {
        this.requestDateUnrender()
    }),
    be.watch("initialEvents", ["dateProfile"], function(t) {
        return this.fetchInitialEvents(t.dateProfile)
    }),
    be.watch("bindingEvents", ["initialEvents"], function(t) {
        this.setEvents(t.initialEvents),
        this.bindEventChanges()
    }, function() {
        this.unbindEventChanges(),
        this.unsetEvents()
    }),
    be.watch("displayingEvents", ["displayingDates", "hasEvents"], function() {
        this.requestEventsRender(this.get("currentEvents"))
    }, function() {
        this.requestEventsUnrender()
    }),
    be.mixin({
        currentUnzonedRange: null,
        currentRangeUnit: null,
        isRangeAllDay: !1,
        renderUnzonedRange: null,
        activeUnzonedRange: null,
        validUnzonedRange: null,
        dateIncrement: null,
        minTime: null,
        maxTime: null,
        usesMinMaxTime: !1,
        start: null,
        end: null,
        intervalStart: null,
        intervalEnd: null,
        setDateProfileForRendering: function(t) {
            var e = this.calendar;
            this.currentUnzonedRange = t.currentUnzonedRange,
            this.currentRangeUnit = t.currentRangeUnit,
            this.isRangeAllDay = t.isRangeAllDay,
            this.renderUnzonedRange = t.renderUnzonedRange,
            this.activeUnzonedRange = t.activeUnzonedRange,
            this.validUnzonedRange = t.validUnzonedRange,
            this.dateIncrement = t.dateIncrement,
            this.minTime = t.minTime,
            this.maxTime = t.maxTime,
            this.start = e.msToMoment(t.activeUnzonedRange.startMs, this.isRangeAllDay),
            this.end = e.msToMoment(t.activeUnzonedRange.endMs, this.isRangeAllDay),
            this.intervalStart = e.msToMoment(t.currentUnzonedRange.startMs, this.isRangeAllDay),
            this.intervalEnd = e.msToMoment(t.currentUnzonedRange.endMs, this.isRangeAllDay),
            this.title = this.computeTitle(),
            this.calendar.reportViewDatesChanged(this, t)
        },
        buildPrevDateProfile: function(t) {
            var e = t.clone().startOf(this.currentRangeUnit).subtract(this.dateIncrement);
            return this.buildDateProfile(e, -1)
        },
        buildNextDateProfile: function(t) {
            var e = t.clone().startOf(this.currentRangeUnit).add(this.dateIncrement);
            return this.buildDateProfile(e, 1)
        },
        buildDateProfile: function(t, n, i) {
            var s, r, o, a, l = !t.hasTime(), u = this.buildValidRange(), c = null, h = null;
            return i && (t = this.calendar.msToUtcMoment(u.constrainDate(t), l)),
            s = this.buildCurrentRangeInfo(t, n),
            r = this.buildRenderRange(s.unzonedRange, s.unit),
            o = r.clone(),
            this.opt("showNonCurrentDates") || (o = o.intersect(s.unzonedRange)),
            c = e.duration(this.opt("minTime")),
            h = e.duration(this.opt("maxTime")),
            o = this.adjustActiveRange(o, c, h),
            o = o.intersect(u),
            o && (t = this.calendar.msToUtcMoment(o.constrainDate(t), l)),
            a = s.unzonedRange.intersectsWith(u),
            {
                validUnzonedRange: u,
                currentUnzonedRange: s.unzonedRange,
                currentRangeUnit: s.unit,
                isRangeAllDay: /^(year|month|week|day)$/.test(s.unit),
                activeUnzonedRange: o,
                renderUnzonedRange: r,
                minTime: c,
                maxTime: h,
                isValid: a,
                date: t,
                dateIncrement: this.buildDateIncrement(s.duration)
            }
        },
        buildValidRange: function() {
            return this.getUnzonedRangeOption("validRange", this.calendar.getNow()) || new Me
        },
        buildCurrentRangeInfo: function(t, e) {
            var n, i = null, s = null, r = null;
            return this.viewSpec.duration ? (i = this.viewSpec.duration,
            s = this.viewSpec.durationUnit,
            r = this.buildRangeFromDuration(t, e, i, s)) : (n = this.opt("dayCount")) ? (s = "day",
            r = this.buildRangeFromDayCount(t, e, n)) : (r = this.buildCustomVisibleRange(t)) ? s = O(r.getStart(), r.getEnd()) : (i = this.getFallbackDuration(),
            s = O(i),
            r = this.buildRangeFromDuration(t, e, i, s)),
            {
                duration: i,
                unit: s,
                unzonedRange: r
            }
        },
        getFallbackDuration: function() {
            return e.duration({
                days: 1
            })
        },
        adjustActiveRange: function(t, e, n) {
            var i = t.getStart()
              , s = t.getEnd();
            return this.usesMinMaxTime && (e < 0 && i.time(0).add(e),
            n > 864e5 && s.time(n - 864e5)),
            new Me(i,s)
        },
        buildRangeFromDuration: function(t, n, i, s) {
            var r, o, a, l = this.opt("dateAlignment"), u = t.clone();
            return i.as("days") <= 1 && this.isHiddenDay(u) && (u = this.skipHiddenDays(u, n),
            u.startOf("day")),
            l || (o = this.opt("dateIncrement"),
            o ? (a = e.duration(o),
            l = a < i ? N(a, o) : s) : l = s),
            u.startOf(l),
            r = u.clone().add(i),
            new Me(u,r)
        },
        buildRangeFromDayCount: function(t, e, n) {
            var i, s = this.opt("dateAlignment"), r = 0, o = t.clone();
            s && o.startOf(s),
            o.startOf("day"),
            o = this.skipHiddenDays(o, e),
            i = o.clone();
            do {
                i.add(1, "day"),
                this.isHiddenDay(i) || r++
            } while (r < n);return new Me(o,i)
        },
        buildCustomVisibleRange: function(t) {
            var e = this.getUnzonedRangeOption("visibleRange", this.calendar.applyTimezone(t));
            return !e || null !== e.startMs && null !== e.endMs ? e : null
        },
        buildRenderRange: function(t, e) {
            return this.trimHiddenDays(t)
        },
        buildDateIncrement: function(t) {
            var n, i = this.opt("dateIncrement");
            return i ? e.duration(i) : (n = this.opt("dateAlignment")) ? e.duration(1, n) : t || e.duration({
                days: 1
            })
        },
        trimHiddenDays: function(t) {
            var e = t.getStart()
              , n = t.getEnd();
            return e = this.skipHiddenDays(e),
            n = this.skipHiddenDays(n, -1, !0),
            new Me(e,n)
        },
        currentRangeAs: function(t) {
            var n = this.currentUnzonedRange;
            return e.utc(n.endMs).diff(e.utc(n.startMs), t, !0)
        },
        isDateInOtherMonth: function(t) {
            return !1
        },
        getUnzonedRangeOption: function(t) {
            var e = this.opt(t);
            if ("function" == typeof e && (e = e.apply(null, Array.prototype.slice.call(arguments, 1))),
            e)
                return this.calendar.parseUnzonedRange(e)
        },
        initHiddenDays: function() {
            var e, n = this.opt("hiddenDays") || [], i = [], s = 0;
            for (!1 === this.opt("weekends") && n.push(0, 6),
            e = 0; e < 7; e++)
                (i[e] = -1 !== t.inArray(e, n)) || s++;
            if (!s)
                throw "invalid hiddenDays";
            this.isHiddenDayHash = i
        },
        isHiddenDay: function(t) {
            return e.isMoment(t) && (t = t.day()),
            this.isHiddenDayHash[t]
        },
        skipHiddenDays: function(t, e, n) {
            var i = t.clone();
            for (e = e || 1; this.isHiddenDayHash[(i.day() + (n ? e : 0) + 7) % 7]; )
                i.add(e, "days");
            return i
        }
    });
    var Se = Vt.Scroller = ht.extend({
        el: null,
        scrollEl: null,
        overflowX: null,
        overflowY: null,
        constructor: function(t) {
            t = t || {},
            this.overflowX = t.overflowX || t.overflow || "auto",
            this.overflowY = t.overflowY || t.overflow || "auto"
        },
        render: function() {
            this.el = this.renderEl(),
            this.applyOverflow()
        },
        renderEl: function() {
            return this.scrollEl = t('<div class="fc-scroller"></div>')
        },
        clear: function() {
            this.setHeight("auto"),
            this.applyOverflow()
        },
        destroy: function() {
            this.el.remove()
        },
        applyOverflow: function() {
            this.scrollEl.css({
                "overflow-x": this.overflowX,
                "overflow-y": this.overflowY
            })
        },
        lockOverflow: function(t) {
            var e = this.overflowX
              , n = this.overflowY;
            t = t || this.getScrollbarWidths(),
            "auto" === e && (e = t.top || t.bottom || this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth ? "scroll" : "hidden"),
            "auto" === n && (n = t.left || t.right || this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight ? "scroll" : "hidden"),
            this.scrollEl.css({
                "overflow-x": e,
                "overflow-y": n
            })
        },
        setHeight: function(t) {
            this.scrollEl.height(t)
        },
        getScrollTop: function() {
            return this.scrollEl.scrollTop()
        },
        setScrollTop: function(t) {
            this.scrollEl.scrollTop(t)
        },
        getClientWidth: function() {
            return this.scrollEl[0].clientWidth
        },
        getClientHeight: function() {
            return this.scrollEl[0].clientHeight
        },
        getScrollbarWidths: function() {
            return p(this.scrollEl)
        }
    });
    Rt.prototype.proxyCall = function(t) {
        var e = Array.prototype.slice.call(arguments, 1)
          , n = [];
        return this.items.forEach(function(i) {
            n.push(i[t].apply(i, e))
        }),
        n
    }
    ;
    var Ee = Vt.Calendar = ht.extend(ee, {
        view: null,
        viewsByType: null,
        currentDate: null,
        theme: null,
        loadingLevel: 0,
        constructor: function(t, e) {
            ge.needed(),
            this.el = t,
            this.viewsByType = {},
            this.viewSpecCache = {},
            this.initOptionsInternals(e),
            this.initMomentInternals(),
            this.initCurrentDate(),
            this.initEventManager(),
            ze.call(this),
            this.initialize()
        },
        initialize: function() {},
        getView: function() {
            return this.view
        },
        publiclyTrigger: function(e, n) {
            var i, s, r = this.opt(e);
            if (t.isPlainObject(n) ? (i = n.context,
            s = n.args) : t.isArray(n) && (s = n),
            null == i && (i = this.el[0]),
            s || (s = []),
            this.triggerWith(e, i, s),
            r)
                return r.apply(i, s)
        },
        hasPublicHandlers: function(t) {
            return this.hasHandlers(t) || this.opt(t)
        },
        instantiateView: function(t) {
            var e = this.getViewSpec(t);
            return new e.class(this,e)
        },
        isValidViewType: function(t) {
            return Boolean(this.getViewSpec(t))
        },
        changeView: function(t, e) {
            e && (e.start && e.end ? this.recordOptionOverrides({
                visibleRange: e
            }) : this.currentDate = this.moment(e).stripZone()),
            this.renderView(t)
        },
        zoomTo: function(t, e) {
            var n;
            e = e || "day",
            n = this.getViewSpec(e) || this.getUnitViewSpec(e),
            this.currentDate = t.clone(),
            this.renderView(n ? n.type : null)
        },
        initCurrentDate: function() {
            var t = this.opt("defaultDate");
            this.currentDate = null != t ? this.moment(t).stripZone() : this.getNow()
        },
        reportViewDatesChanged: function(t, e) {
            this.currentDate = e.date,
            this.setToolbarsTitle(t.title),
            this.updateToolbarButtons()
        },
        prev: function() {
            var t = this.view.buildPrevDateProfile(this.currentDate);
            t.isValid && (this.currentDate = t.date,
            this.renderView())
        },
        next: function() {
            var t = this.view.buildNextDateProfile(this.currentDate);
            t.isValid && (this.currentDate = t.date,
            this.renderView())
        },
        prevYear: function() {
            this.currentDate.add(-1, "years"),
            this.renderView()
        },
        nextYear: function() {
            this.currentDate.add(1, "years"),
            this.renderView()
        },
        today: function() {
            this.currentDate = this.getNow(),
            this.renderView()
        },
        gotoDate: function(t) {
            this.currentDate = this.moment(t).stripZone(),
            this.renderView()
        },
        incrementDate: function(t) {
            this.currentDate.add(e.duration(t)),
            this.renderView()
        },
        getDate: function() {
            return this.applyTimezone(this.currentDate)
        },
        pushLoading: function() {
            this.loadingLevel++ || this.publiclyTrigger("loading", [!0, this.view])
        },
        popLoading: function() {
            --this.loadingLevel || this.publiclyTrigger("loading", [!1, this.view])
        },
        select: function(t, e) {
            this.view.select(this.buildSelectFootprint.apply(this, arguments))
        },
        unselect: function() {
            this.view && this.view.unselect()
        },
        buildSelectFootprint: function(t, e) {
            var n, i = this.moment(t).stripZone();
            return n = e ? this.moment(e).stripZone() : i.hasTime() ? i.clone().add(this.defaultTimedEventDuration) : i.clone().add(this.defaultAllDayEventDuration),
            new xe(new Me(i,n),!i.hasTime())
        },
        parseUnzonedRange: function(t) {
            var e = null
              , n = null;
            return t.start && (e = this.moment(t.start).stripZone()),
            t.end && (n = this.moment(t.end).stripZone()),
            e || n ? e && n && n.isBefore(e) ? null : new Me(e,n) : null
        },
        rerenderEvents: function() {
            this.elementVisible() && this.view.flash("displayingEvents")
        },
        initEventManager: function() {
            var t = this
              , e = new ze(this)
              , n = this.opt("eventSources") || []
              , i = this.opt("events");
            this.eventManager = e,
            i && n.unshift(i),
            e.on("release", function(e) {
                t.trigger("eventsReset", e)
            }),
            e.freeze(),
            n.forEach(function(n) {
                var i = qe.parse(n, t);
                i && e.addSource(i)
            }),
            e.thaw()
        },
        requestEvents: function(t, e) {
            return this.eventManager.requestEvents(t, e, this.opt("timezone"), !this.opt("lazyFetching"))
        }
    });
    Ee.mixin({
        dirDefaults: null,
        localeDefaults: null,
        overrides: null,
        dynamicOverrides: null,
        optionsModel: null,
        initOptionsInternals: function(e) {
            this.overrides = t.extend({}, e),
            this.dynamicOverrides = {},
            this.optionsModel = new oe,
            this.populateOptionsHash()
        },
        option: function(t, e) {
            var n;
            if ("string" == typeof t) {
                if (void 0 === e)
                    return this.optionsModel.get(t);
                n = {},
                n[t] = e,
                this.setOptions(n)
            } else
                "object" == typeof t && this.setOptions(t)
        },
        opt: function(t) {
            return this.optionsModel.get(t)
        },
        setOptions: function(t) {
            var e, n = 0;
            this.recordOptionOverrides(t);
            for (e in t)
                n++;
            if (1 === n) {
                if ("height" === e || "contentHeight" === e || "aspectRatio" === e)
                    return void this.updateSize(!0);
                if ("defaultDate" === e)
                    return;
                if ("businessHours" === e)
                    return void (this.view && (this.view.unrenderBusinessHours(),
                    this.view.renderBusinessHours()));
                if ("timezone" === e)
                    return void this.view.flash("initialEvents")
            }
            this.renderHeader(),
            this.renderFooter(),
            this.viewsByType = {},
            this.reinitView()
        },
        populateOptionsHash: function() {
            var t, e, i, s, r;
            t = J(this.dynamicOverrides.locale, this.overrides.locale),
            e = Te[t],
            e || (t = Ee.defaults.locale,
            e = Te[t] || {}),
            i = J(this.dynamicOverrides.isRTL, this.overrides.isRTL, e.isRTL, Ee.defaults.isRTL),
            s = i ? Ee.rtlDefaults : {},
            this.dirDefaults = s,
            this.localeDefaults = e,
            r = n([Ee.defaults, s, e, this.overrides, this.dynamicOverrides]),
            zt(r),
            this.optionsModel.reset(r)
        },
        recordOptionOverrides: function(t) {
            var e;
            for (e in t)
                this.dynamicOverrides[e] = t[e];
            this.viewSpecCache = {},
            this.populateOptionsHash()
        }
    }),
    Ee.mixin({
        defaultAllDayEventDuration: null,
        defaultTimedEventDuration: null,
        localeData: null,
        initMomentInternals: function() {
            var t = this;
            this.defaultAllDayEventDuration = e.duration(this.opt("defaultAllDayEventDuration")),
            this.defaultTimedEventDuration = e.duration(this.opt("defaultTimedEventDuration")),
            this.optionsModel.watch("buildingMomentLocale", ["?locale", "?monthNames", "?monthNamesShort", "?dayNames", "?dayNamesShort", "?firstDay", "?weekNumberCalculation"], function(e) {
                var n, i = e.weekNumberCalculation, s = e.firstDay;
                "iso" === i && (i = "ISO");
                var r = Object.create(Ft(e.locale));
                e.monthNames && (r._months = e.monthNames),
                e.monthNamesShort && (r._monthsShort = e.monthNamesShort),
                e.dayNames && (r._weekdays = e.dayNames),
                e.dayNamesShort && (r._weekdaysShort = e.dayNamesShort),
                null == s && "ISO" === i && (s = 1),
                null != s && (n = Object.create(r._week),
                n.dow = s,
                r._week = n),
                "ISO" !== i && "local" !== i && "function" != typeof i || (r._fullCalendar_weekCalc = i),
                t.localeData = r,
                t.currentDate && t.localizeMoment(t.currentDate)
            })
        },
        moment: function() {
            var t;
            return "local" === this.opt("timezone") ? (t = Vt.moment.apply(null, arguments),
            t.hasTime() && t.local()) : t = "UTC" === this.opt("timezone") ? Vt.moment.utc.apply(null, arguments) : Vt.moment.parseZone.apply(null, arguments),
            this.localizeMoment(t),
            t
        },
        msToMoment: function(t, e) {
            var n = Vt.moment.utc(t);
            return e ? n.stripTime() : n = this.applyTimezone(n),
            this.localizeMoment(n),
            n
        },
        msToUtcMoment: function(t, e) {
            var n = Vt.moment.utc(t);
            return e && n.stripTime(),
            this.localizeMoment(n),
            n
        },
        localizeMoment: function(t) {
            t._locale = this.localeData
        },
        getIsAmbigTimezone: function() {
            return "local" !== this.opt("timezone") && "UTC" !== this.opt("timezone")
        },
        applyTimezone: function(t) {
            if (!t.hasTime())
                return t.clone();
            var e, n = this.moment(t.toArray()), i = t.time() - n.time();
            return i && (e = n.clone().add(i),
            t.time() - e.time() == 0 && (n = e)),
            n
        },
        footprintToDateProfile: function(t, e) {
            var n, i = Vt.moment.utc(t.unzonedRange.startMs);
            return e || (n = Vt.moment.utc(t.unzonedRange.endMs)),
            t.isAllDay ? (i.stripTime(),
            n && n.stripTime()) : (i = this.applyTimezone(i),
            n && (n = this.applyTimezone(n))),
            new Ne(i,n,this)
        },
        getNow: function() {
            var t = this.opt("now");
            return "function" == typeof t && (t = t()),
            this.moment(t).stripZone()
        },
        humanizeDuration: function(t) {
            return t.locale(this.opt("locale")).humanize()
        },
        getEventEnd: function(t) {
            return t.end ? t.end.clone() : this.getDefaultEventEnd(t.allDay, t.start)
        },
        getDefaultEventEnd: function(t, e) {
            var n = e.clone();
            return t ? n.stripTime().add(this.defaultAllDayEventDuration) : n.add(this.defaultTimedEventDuration),
            this.getIsAmbigTimezone() && n.stripZone(),
            n
        }
    }),
    Ee.mixin({
        viewSpecCache: null,
        getViewSpec: function(t) {
            var e = this.viewSpecCache;
            return e[t] || (e[t] = this.buildViewSpec(t))
        },
        getUnitViewSpec: function(e) {
            var n, i, s;
            if (-1 != t.inArray(e, qt))
                for (n = this.header.getViewsWithButtons(),
                t.each(Vt.views, function(t) {
                    n.push(t)
                }),
                i = 0; i < n.length; i++)
                    if ((s = this.getViewSpec(n[i])) && s.singleUnit == e)
                        return s
        },
        buildViewSpec: function(t) {
            for (var i, s, r, o, a, l = this.overrides.views || {}, u = [], c = [], h = [], d = t; d; )
                i = Ut[d],
                s = l[d],
                d = null,
                "function" == typeof i && (i = {
                    class: i
                }),
                i && (u.unshift(i),
                c.unshift(i.defaults || {}),
                r = r || i.duration,
                d = d || i.type),
                s && (h.unshift(s),
                r = r || s.duration,
                d = d || s.type);
            return i = j(u),
            i.type = t,
            !!i.class && (r = r || this.dynamicOverrides.duration || this.overrides.duration,
            r && (o = e.duration(r),
            o.valueOf() && (a = N(o, r),
            i.duration = o,
            i.durationUnit = a,
            1 === o.as(a) && (i.singleUnit = a,
            h.unshift(l[a] || {})))),
            i.defaults = n(c),
            i.overrides = n(h),
            this.buildViewSpecOptions(i),
            this.buildViewSpecButtonText(i, t),
            i)
        },
        buildViewSpecOptions: function(t) {
            t.options = n([Ee.defaults, t.defaults, this.dirDefaults, this.localeDefaults, this.overrides, t.overrides, this.dynamicOverrides]),
            zt(t.options)
        },
        buildViewSpecButtonText: function(t, e) {
            function n(n) {
                var i = n.buttonText || {};
                return i[e] || (t.buttonTextKey ? i[t.buttonTextKey] : null) || (t.singleUnit ? i[t.singleUnit] : null)
            }
            t.buttonTextOverride = n(this.dynamicOverrides) || n(this.overrides) || t.overrides.buttonText,
            t.buttonTextDefault = n(this.localeDefaults) || n(this.dirDefaults) || t.defaults.buttonText || n(Ee.defaults) || (t.duration ? this.humanizeDuration(t.duration) : null) || e
        }
    }),
    Ee.mixin({
        el: null,
        contentEl: null,
        suggestedViewHeight: null,
        windowResizeProxy: null,
        ignoreWindowResize: 0,
        render: function() {
            this.contentEl ? this.elementVisible() && (this.calcSize(),
            this.renderView()) : this.initialRender()
        },
        initialRender: function() {
            var e = this
              , n = this.el;
            n.addClass("fc"),
            n.on("click.fc", "a[data-goto]", function(n) {
                var i = t(this)
                  , s = i.data("goto")
                  , r = e.moment(s.date)
                  , o = s.type
                  , a = e.view.opt("navLink" + st(o) + "Click");
                "function" == typeof a ? a(r, n) : ("string" == typeof a && (o = a),
                e.zoomTo(r, o))
            }),
            this.optionsModel.watch("settingTheme", ["?theme", "?themeSystem"], function(t) {
                var i = Qe.getThemeClass(t.themeSystem || t.theme)
                  , s = new i(e.optionsModel)
                  , r = s.getClass("widget");
                e.theme = s,
                r && n.addClass(r)
            }, function() {
                var t = e.theme.getClass("widget");
                e.theme = null,
                t && n.removeClass(t)
            }),
            this.optionsModel.watch("applyingDirClasses", ["?isRTL", "?locale"], function(t) {
                n.toggleClass("fc-ltr", !t.isRTL),
                n.toggleClass("fc-rtl", t.isRTL)
            }),
            this.contentEl = t("<div class='fc-view-container'/>").prependTo(n),
            this.initToolbars(),
            this.renderHeader(),
            this.renderFooter(),
            this.renderView(this.opt("defaultView")),
            this.opt("handleWindowResize") && t(window).resize(this.windowResizeProxy = lt(this.windowResize.bind(this), this.opt("windowResizeDelay")))
        },
        destroy: function() {
            this.view && this.view.removeElement(),
            this.toolbarsManager.proxyCall("removeElement"),
            this.contentEl.remove(),
            this.el.removeClass("fc fc-ltr fc-rtl"),
            this.optionsModel.unwatch("settingTheme"),
            this.el.off(".fc"),
            this.windowResizeProxy && (t(window).unbind("resize", this.windowResizeProxy),
            this.windowResizeProxy = null),
            ge.unneeded()
        },
        elementVisible: function() {
            return this.el.is(":visible")
        },
        renderView: function(e, n) {
            this.ignoreWindowResize++;
            var i = this.view && e && this.view.type !== e;
            i && (this.freezeContentHeight(),
            this.clearView()),
            !this.view && e && (this.view = this.viewsByType[e] || (this.viewsByType[e] = this.instantiateView(e)),
            this.view.setElement(t("<div class='fc-view fc-" + e + "-view' />").appendTo(this.contentEl)),
            this.toolbarsManager.proxyCall("activateButton", e)),
            this.view && (n && this.view.addForcedScroll(n),
            this.elementVisible() && this.view.setDate(this.currentDate)),
            i && this.thawContentHeight(),
            this.ignoreWindowResize--
        },
        clearView: function() {
            this.toolbarsManager.proxyCall("deactivateButton", this.view.type),
            this.view.removeElement(),
            this.view = null
        },
        reinitView: function() {
            this.ignoreWindowResize++,
            this.freezeContentHeight();
            var t = this.view.type
              , e = this.view.queryScroll();
            this.clearView(),
            this.calcSize(),
            this.renderView(t, e),
            this.thawContentHeight(),
            this.ignoreWindowResize--
        },
        getSuggestedViewHeight: function() {
            return null === this.suggestedViewHeight && this.calcSize(),
            this.suggestedViewHeight
        },
        isHeightAuto: function() {
            return "auto" === this.opt("contentHeight") || "auto" === this.opt("height")
        },
        updateSize: function(t) {
            if (this.elementVisible())
                return t && this._calcSize(),
                this.ignoreWindowResize++,
                this.view.updateSize(!0),
                this.ignoreWindowResize--,
                !0
        },
        calcSize: function() {
            this.elementVisible() && this._calcSize()
        },
        _calcSize: function() {
            var t = this.opt("contentHeight")
              , e = this.opt("height");
            this.suggestedViewHeight = "number" == typeof t ? t : "function" == typeof t ? t() : "number" == typeof e ? e - this.queryToolbarsHeight() : "function" == typeof e ? e() - this.queryToolbarsHeight() : "parent" === e ? this.el.parent().height() - this.queryToolbarsHeight() : Math.round(this.contentEl.width() / Math.max(this.opt("aspectRatio"), .5))
        },
        windowResize: function(t) {
            !this.ignoreWindowResize && t.target === window && this.view.renderUnzonedRange && this.updateSize(!0) && this.publiclyTrigger("windowResize", [this.view])
        },
        freezeContentHeight: function() {
            this.contentEl.css({
                width: "100%",
                height: this.contentEl.height(),
                overflow: "hidden"
            })
        },
        thawContentHeight: function() {
            this.contentEl.css({
                width: "",
                height: "",
                overflow: ""
            })
        }
    }),
    Ee.mixin({
        header: null,
        footer: null,
        toolbarsManager: null,
        initToolbars: function() {
            this.header = new It(this,this.computeHeaderOptions()),
            this.footer = new It(this,this.computeFooterOptions()),
            this.toolbarsManager = new Rt([this.header, this.footer])
        },
        computeHeaderOptions: function() {
            return {
                extraClasses: "fc-header-toolbar",
                layout: this.opt("header")
            }
        },
        computeFooterOptions: function() {
            return {
                extraClasses: "fc-footer-toolbar",
                layout: this.opt("footer")
            }
        },
        renderHeader: function() {
            var t = this.header;
            t.setToolbarOptions(this.computeHeaderOptions()),
            t.render(),
            t.el && this.el.prepend(t.el)
        },
        renderFooter: function() {
            var t = this.footer;
            t.setToolbarOptions(this.computeFooterOptions()),
            t.render(),
            t.el && this.el.append(t.el)
        },
        setToolbarsTitle: function(t) {
            this.toolbarsManager.proxyCall("updateTitle", t)
        },
        updateToolbarButtons: function() {
            var t = this.getNow()
              , e = this.view
              , n = e.buildDateProfile(t)
              , i = e.buildPrevDateProfile(this.currentDate)
              , s = e.buildNextDateProfile(this.currentDate);
            this.toolbarsManager.proxyCall(n.isValid && !e.currentUnzonedRange.containsDate(t) ? "enableButton" : "disableButton", "today"),
            this.toolbarsManager.proxyCall(i.isValid ? "enableButton" : "disableButton", "prev"),
            this.toolbarsManager.proxyCall(s.isValid ? "enableButton" : "disableButton", "next")
        },
        queryToolbarsHeight: function() {
            return this.toolbarsManager.items.reduce(function(t, e) {
                return t + (e.el ? e.el.outerHeight(!0) : 0)
            }, 0)
        }
    });
    var Ce = {
        start: "09:00",
        end: "17:00",
        dow: [1, 2, 3, 4, 5],
        rendering: "inverse-background"
    };
    Ee.prototype.buildCurrentBusinessFootprints = function(t) {
        return this._buildCurrentBusinessFootprints(t, this.opt("businessHours"))
    }
    ,
    Ee.prototype._buildCurrentBusinessFootprints = function(t, e) {
        var n, i = this.eventManager.currentPeriod;
        return i && (n = this.buildBusinessInstanceGroup(t, e, i.unzonedRange)) ? this.eventInstancesToFootprints(n.eventInstances) : []
    }
    ,
    Ee.prototype.buildBusinessInstanceGroup = function(t, e, n) {
        var i, s = this.buildBusinessDefs(t, e);
        if (s.length)
            return i = new Oe(At(s, n)),
            i.explicitEventDef = s[0],
            i
    }
    ,
    Ee.prototype.buildBusinessDefs = function(e, n) {
        var i, s = [], r = !1, o = [];
        for (!0 === n ? s = [{}] : t.isPlainObject(n) ? s = [n] : t.isArray(n) && (s = n,
        r = !0),
        i = 0; i < s.length; i++)
            r && !s[i].dow || o.push(this.buildBusinessDef(e, s[i]));
        return o
    }
    ,
    Ee.prototype.buildBusinessDef = function(e, n) {
        var i = t.extend({}, Ce, n);
        return e && (i.start = null,
        i.end = null),
        Ae.parse(i, new _e(this))
    }
    ,
    Ee.prototype.isEventInstanceGroupAllowed = function(t) {
        var e, n = t.getEventDef(), i = this.eventRangesToEventFootprints(t.getAllEventRanges()), s = this.getPeerEventInstances(n), r = Lt(s), o = this.eventRangesToEventFootprints(r), a = n.getConstraint(), l = n.getOverlap(), u = this.opt("eventAllow");
        for (e = 0; e < i.length; e++)
            if (!this.isFootprintAllowed(i[e].componentFootprint, o, a, l, i[e].eventInstance))
                return !1;
        if (u)
            for (e = 0; e < i.length; e++)
                if (!1 === u(i[e].componentFootprint.toLegacy(this), i[e].getEventLegacy()))
                    return !1;
        return !0
    }
    ,
    Ee.prototype.getPeerEventInstances = function(t) {
        return this.eventManager.getEventInstancesWithoutId(t.id)
    }
    ,
    Ee.prototype.isSelectionFootprintAllowed = function(t) {
        var e, n = this.eventManager.getEventInstances(), i = Lt(n), s = this.eventRangesToEventFootprints(i);
        return !!this.isFootprintAllowed(t, s, this.opt("selectConstraint"), this.opt("selectOverlap")) && (!(e = this.opt("selectAllow")) || !1 !== e(t.toLegacy(this)))
    }
    ,
    Ee.prototype.isFootprintAllowed = function(t, e, n, i, s) {
        var r, o;
        if (null != n && (r = this.constraintValToFootprints(n, t.isAllDay),
        !this.isFootprintWithinConstraints(t, r)))
            return !1;
        if (o = this.collectOverlapEventFootprints(e, t),
        !1 === i) {
            if (o.length)
                return !1
        } else if ("function" == typeof i && !Ht(o, i, s))
            return !1;
        return !(s && !Mt(o, s))
    }
    ,
    Ee.prototype.isFootprintWithinConstraints = function(t, e) {
        var n;
        for (n = 0; n < e.length; n++)
            if (this.footprintContainsFootprint(e[n], t))
                return !0;
        return !1
    }
    ,
    Ee.prototype.constraintValToFootprints = function(t, e) {
        var n;
        return "businessHours" === t ? this.buildCurrentBusinessFootprints(e) : "object" == typeof t ? (n = this.parseEventDefToInstances(t),
        n ? this.eventInstancesToFootprints(n) : this.parseFootprints(t)) : null != t ? (n = this.eventManager.getEventInstancesWithId(t),
        this.eventInstancesToFootprints(n)) : void 0
    }
    ,
    Ee.prototype.eventInstancesToFootprints = function(t) {
        return Nt(this.eventRangesToEventFootprints(Lt(t)))
    }
    ,
    Ee.prototype.collectOverlapEventFootprints = function(t, e) {
        var n, i = [];
        for (n = 0; n < t.length; n++)
            this.footprintsIntersect(e, t[n].componentFootprint) && i.push(t[n]);
        return i
    }
    ,
    Ee.prototype.parseEventDefToInstances = function(t) {
        var e = this.eventManager.currentPeriod
          , n = Pe.parse(t, new _e(this));
        return !!n && (e ? n.buildInstances(e.unzonedRange) : [])
    }
    ,
    Ee.prototype.eventRangesToEventFootprints = function(t) {
        var e, n = [];
        for (e = 0; e < t.length; e++)
            n.push.apply(n, this.eventRangeToEventFootprints(t[e]));
        return n
    }
    ,
    Ee.prototype.eventRangeToEventFootprints = function(t) {
        return [new Ue(new xe(t.unzonedRange,t.eventDef.isAllDay()),t.eventDef,t.eventInstance)]
    }
    ,
    Ee.prototype.parseFootprints = function(t) {
        var e, n;
        return t.start && (e = this.moment(t.start),
        e.isValid() || (e = null)),
        t.end && (n = this.moment(t.end),
        n.isValid() || (n = null)),
        [new xe(new Me(e,n),e && !e.hasTime() || n && !n.hasTime())]
    }
    ,
    Ee.prototype.footprintContainsFootprint = function(t, e) {
        return t.unzonedRange.containsRange(e.unzonedRange)
    }
    ,
    Ee.prototype.footprintsIntersect = function(t, e) {
        return t.unzonedRange.intersectsWith(e.unzonedRange)
    }
    ,
    Ee.mixin({
        getEventSources: function() {
            return this.eventManager.otherSources.slice()
        },
        getEventSourceById: function(t) {
            return this.eventManager.getSourceById(_e.normalizeId(t))
        },
        addEventSource: function(t) {
            var e = qe.parse(t, this);
            e && this.eventManager.addSource(e)
        },
        removeEventSources: function(t) {
            var e, n, i = this.eventManager;
            if (null == t)
                this.eventManager.removeAllSources();
            else {
                for (e = i.multiQuerySources(t),
                i.freeze(),
                n = 0; n < e.length; n++)
                    i.removeSource(e[n]);
                i.thaw()
            }
        },
        removeEventSource: function(t) {
            var e, n = this.eventManager, i = n.querySources(t);
            for (n.freeze(),
            e = 0; e < i.length; e++)
                n.removeSource(i[e]);
            n.thaw()
        },
        refetchEventSources: function(t) {
            var e, n = this.eventManager, i = n.multiQuerySources(t);
            for (n.freeze(),
            e = 0; e < i.length; e++)
                n.refetchSource(i[e]);
            n.thaw()
        },
        refetchEvents: function() {
            this.eventManager.refetchAllSources()
        },
        renderEvents: function(t, e) {
            this.eventManager.freeze();
            for (var n = 0; n < t.length; n++)
                this.renderEvent(t[n], e);
            this.eventManager.thaw()
        },
        renderEvent: function(t, e) {
            var n = this.eventManager
              , i = Pe.parse(t, t.source || n.stickySource);
            i && n.addEventDef(i, e)
        },
        removeEvents: function(t) {
            var e, n, i, s = this.eventManager, r = s.getEventInstances(), o = {};
            if (null == t)
                s.removeAllEventDefs();
            else {
                for (e = r.map(function(t) {
                    return t.toLegacy()
                }),
                e = xt(e, t),
                i = 0; i < e.length; i++)
                    n = this.eventManager.getEventDefByUid(e[i]._id),
                    o[n.id] = !0;
                s.freeze();
                for (i in o)
                    s.removeEventDefsById(i);
                s.thaw()
            }
        },
        clientEvents: function(t) {
            return xt(this.eventManager.getEventInstances().map(function(t) {
                return t.toLegacy()
            }), t)
        },
        updateEvents: function(t) {
            this.eventManager.freeze();
            for (var e = 0; e < t.length; e++)
                this.updateEvent(t[e]);
            this.eventManager.thaw()
        },
        updateEvent: function(t) {
            var e, n, i = this.eventManager.getEventDefByUid(t._id);
            i instanceof ke && (e = i.buildInstance(),
            n = Ge.createFromRawProps(e, t, null),
            this.eventManager.mutateEventsWithId(i.id, n))
        }
    }),
    Ee.defaults = {
        titleRangeSeparator: " – ",
        monthYearFormat: "MMMM YYYY",
        defaultTimedEventDuration: "02:00:00",
        defaultAllDayEventDuration: {
            days: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "09:00:00",
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
            left: "title",
            center: "",
            right: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberTitle: "W",
        weekNumberCalculation: "local",
        scrollTime: "06:00:00",
        minTime: "00:00:00",
        maxTime: "24:00:00",
        showNonCurrentDates: !0,
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timezoneParam: "timezone",
        timezone: !1,
        isRTL: !1,
        buttonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            year: "year",
            today: "today",
            month: "month",
            week: "week",
            day: "day"
        },
        allDayText: "all-day",
        theme: !1,
        dragOpacity: .75,
        dragRevertDuration: 500,
        dragScroll: !0,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "title",
        eventLimit: !1,
        eventLimitText: "more",
        eventLimitClick: "popover",
        dayPopoverFormat: "LL",
        handleWindowResize: !0,
        windowResizeDelay: 100,
        longPressDelay: 1e3
    },
    Ee.englishDefaults = {
        dayPopoverFormat: "dddd, MMMM D"
    },
    Ee.rtlDefaults = {
        header: {
            left: "next,prev today",
            center: "",
            right: "title"
        },
        buttonIcons: {
            prev: "right-single-arrow",
            next: "left-single-arrow",
            prevYear: "right-double-arrow",
            nextYear: "left-double-arrow"
        },
        themeButtonIcons: {
            prev: "circle-triangle-e",
            next: "circle-triangle-w",
            nextYear: "seek-prev",
            prevYear: "seek-next"
        }
    };
    var Te = Vt.locales = {};
    Vt.datepickerLocale = function(e, n, i) {
        var s = Te[e] || (Te[e] = {});
        s.isRTL = i.isRTL,
        s.weekNumberTitle = i.weekHeader,
        t.each(Re, function(t, e) {
            s[t] = e(i)
        }),
        t.datepicker && (t.datepicker.regional[n] = t.datepicker.regional[e] = i,
        t.datepicker.regional.en = t.datepicker.regional[""],
        t.datepicker.setDefaults(i))
    }
    ,
    Vt.locale = function(e, i) {
        var s, r;
        s = Te[e] || (Te[e] = {}),
        i && (s = Te[e] = n([s, i])),
        r = Ft(e),
        t.each(Ie, function(t, e) {
            null == s[t] && (s[t] = e(r, s))
        }),
        Ee.defaults.locale = e
    }
    ;
    var Re = {
        buttonText: function(t) {
            return {
                prev: et(t.prevText),
                next: et(t.nextText),
                today: et(t.currentText)
            }
        },
        monthYearFormat: function(t) {
            return t.showMonthAfterYear ? "YYYY[" + t.yearSuffix + "] MMMM" : "MMMM YYYY[" + t.yearSuffix + "]"
        }
    }
      , Ie = {
        dayOfMonthFormat: function(t, e) {
            var n = t.longDateFormat("l");
            return n = n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""),
            e.isRTL ? n += " ddd" : n = "ddd " + n,
            n
        },
        mediumTimeFormat: function(t) {
            return t.longDateFormat("LT").replace(/\s*a$/i, "a")
        },
        smallTimeFormat: function(t) {
            return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
        },
        extraSmallTimeFormat: function(t) {
            return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
        },
        hourFormat: function(t) {
            return t.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
        },
        noMeridiemTimeFormat: function(t) {
            return t.longDateFormat("LT").replace(/\s*a$/i, "")
        }
    }
      , He = {
        smallDayDateFormat: function(t) {
            return t.isRTL ? "D dd" : "dd D"
        },
        weekFormat: function(t) {
            return t.isRTL ? "w[ " + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + " ]w"
        },
        smallWeekFormat: function(t) {
            return t.isRTL ? "w[" + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + "]w"
        }
    };
    Vt.locale("en", Ee.englishDefaults);
    var Me = Vt.UnzonedRange = ht.extend({
        startMs: null,
        endMs: null,
        isStart: !0,
        isEnd: !0,
        constructor: function(t, n) {
            e.isMoment(t) && (t = t.clone().stripZone()),
            e.isMoment(n) && (n = n.clone().stripZone()),
            t && (this.startMs = t.valueOf()),
            n && (this.endMs = n.valueOf())
        },
        intersect: function(t) {
            var e = this.startMs
              , n = this.endMs
              , i = null;
            return null !== t.startMs && (e = null === e ? t.startMs : Math.max(e, t.startMs)),
            null !== t.endMs && (n = null === n ? t.endMs : Math.min(n, t.endMs)),
            (null === e || null === n || e < n) && (i = new Me(e,n),
            i.isStart = this.isStart && e === this.startMs,
            i.isEnd = this.isEnd && n === this.endMs),
            i
        },
        intersectsWith: function(t) {
            return (null === this.endMs || null === t.startMs || this.endMs > t.startMs) && (null === this.startMs || null === t.endMs || this.startMs < t.endMs)
        },
        containsRange: function(t) {
            return (null === this.startMs || null !== t.startMs && t.startMs >= this.startMs) && (null === this.endMs || null !== t.endMs && t.endMs <= this.endMs)
        },
        containsDate: function(t) {
            var e = t.valueOf();
            return (null === this.startMs || e >= this.startMs) && (null === this.endMs || e < this.endMs)
        },
        constrainDate: function(t) {
            var e = t.valueOf();
            return null !== this.startMs && e < this.startMs && (e = this.startMs),
            null !== this.endMs && e >= this.endMs && (e = this.endMs - 1),
            e
        },
        equals: function(t) {
            return this.startMs === t.startMs && this.endMs === t.endMs
        },
        clone: function() {
            var t = new Me(this.startMs,this.endMs);
            return t.isStart = this.isStart,
            t.isEnd = this.isEnd,
            t
        },
        getStart: function() {
            if (null !== this.startMs)
                return Vt.moment.utc(this.startMs).stripZone()
        },
        getEnd: function() {
            if (null !== this.endMs)
                return Vt.moment.utc(this.endMs).stripZone()
        }
    })
      , xe = Vt.ComponentFootprint = ht.extend({
        unzonedRange: null,
        isAllDay: !1,
        constructor: function(t, e) {
            this.unzonedRange = t,
            this.isAllDay = e
        },
        toLegacy: function(t) {
            return {
                start: t.msToMoment(this.unzonedRange.startMs, this.isAllDay),
                end: t.msToMoment(this.unzonedRange.endMs, this.isAllDay)
            }
        }
    })
      , ze = ht.extend(ee, ne, {
        currentPeriod: null,
        calendar: null,
        stickySource: null,
        otherSources: null,
        constructor: function(t) {
            this.calendar = t,
            this.stickySource = new Ye(t),
            this.otherSources = []
        },
        requestEvents: function(t, e, n, i) {
            return !i && this.currentPeriod && this.currentPeriod.isWithinRange(t, e) && n === this.currentPeriod.timezone || this.setPeriod(new Fe(t,e,n)),
            this.currentPeriod.whenReleased()
        },
        addSource: function(t) {
            this.otherSources.push(t),
            this.currentPeriod && this.currentPeriod.requestSource(t)
        },
        removeSource: function(t) {
            K(this.otherSources, t),
            this.currentPeriod && this.currentPeriod.purgeSource(t)
        },
        removeAllSources: function() {
            this.otherSources = [],
            this.currentPeriod && this.currentPeriod.purgeAllSources()
        },
        refetchSource: function(t) {
            var e = this.currentPeriod;
            e && (e.freeze(),
            e.purgeSource(t),
            e.requestSource(t),
            e.thaw())
        },
        refetchAllSources: function() {
            var t = this.currentPeriod;
            t && (t.freeze(),
            t.purgeAllSources(),
            t.requestSources(this.getSources()),
            t.thaw())
        },
        getSources: function() {
            return [this.stickySource].concat(this.otherSources)
        },
        multiQuerySources: function(e) {
            e ? t.isArray(e) || (e = [e]) : e = [];
            var n, i = [];
            for (n = 0; n < e.length; n++)
                i.push.apply(i, this.querySources(e[n]));
            return i
        },
        querySources: function(e) {
            var n, i, s = this.otherSources;
            for (n = 0; n < s.length; n++)
                if ((i = s[n]) === e)
                    return [i];
            return (i = this.getSourceById(_e.normalizeId(e))) ? [i] : (e = qe.parse(e, this.calendar),
            e ? t.grep(s, function(t) {
                return kt(e, t)
            }) : void 0)
        },
        getSourceById: function(e) {
            return t.grep(this.otherSources, function(t) {
                return t.id && t.id === e
            })[0]
        },
        setPeriod: function(t) {
            this.currentPeriod && (this.unbindPeriod(this.currentPeriod),
            this.currentPeriod = null),
            this.currentPeriod = t,
            this.bindPeriod(t),
            t.requestSources(this.getSources())
        },
        bindPeriod: function(t) {
            this.listenTo(t, "release", function(t) {
                this.trigger("release", t)
            })
        },
        unbindPeriod: function(t) {
            this.stopListeningTo(t)
        },
        getEventDefByUid: function(t) {
            if (this.currentPeriod)
                return this.currentPeriod.getEventDefByUid(t)
        },
        addEventDef: function(t, e) {
            e && this.stickySource.addEventDef(t),
            this.currentPeriod && this.currentPeriod.addEventDef(t)
        },
        removeEventDefsById: function(t) {
            this.getSources().forEach(function(e) {
                e.removeEventDefsById(t)
            }),
            this.currentPeriod && this.currentPeriod.removeEventDefsById(t)
        },
        removeAllEventDefs: function() {
            this.getSources().forEach(function(t) {
                t.removeAllEventDefs()
            }),
            this.currentPeriod && this.currentPeriod.removeAllEventDefs()
        },
        mutateEventsWithId: function(t, e) {
            var n, i = this.currentPeriod, s = [];
            return i ? (i.freeze(),
            n = i.getEventDefsById(t),
            n.forEach(function(t) {
                i.removeEventDef(t),
                s.push(e.mutateSingle(t)),
                i.addEventDef(t)
            }),
            i.thaw(),
            function() {
                i.freeze();
                for (var t = 0; t < n.length; t++)
                    i.removeEventDef(n[t]),
                    s[t](),
                    i.addEventDef(n[t]);
                i.thaw()
            }
            ) : function() {}
        },
        buildMutatedEventInstanceGroup: function(t, e) {
            var n, i, s = this.getEventDefsById(t), r = [];
            for (n = 0; n < s.length; n++)
                (i = s[n].clone())instanceof ke && (e.mutateSingle(i),
                r.push.apply(r, i.buildInstances()));
            return new Oe(r)
        },
        freeze: function() {
            this.currentPeriod && this.currentPeriod.freeze()
        },
        thaw: function() {
            this.currentPeriod && this.currentPeriod.thaw()
        }
    });
    ["getEventDefsById", "getEventInstances", "getEventInstancesWithId", "getEventInstancesWithoutId"].forEach(function(t) {
        ze.prototype[t] = function() {
            var e = this.currentPeriod;
            return e ? e[t].apply(e, arguments) : []
        }
    });
    var Fe = ht.extend(ee, {
        start: null,
        end: null,
        timezone: null,
        unzonedRange: null,
        requestsByUid: null,
        pendingCnt: 0,
        freezeDepth: 0,
        stuntedReleaseCnt: 0,
        releaseCnt: 0,
        eventDefsByUid: null,
        eventDefsById: null,
        eventInstanceGroupsById: null,
        constructor: function(t, e, n) {
            this.start = t,
            this.end = e,
            this.timezone = n,
            this.unzonedRange = new Me(t.clone().stripZone(),e.clone().stripZone()),
            this.requestsByUid = {},
            this.eventDefsByUid = {},
            this.eventDefsById = {},
            this.eventInstanceGroupsById = {}
        },
        isWithinRange: function(t, e) {
            return !t.isBefore(this.start) && !e.isAfter(this.end)
        },
        requestSources: function(t) {
            this.freeze();
            for (var e = 0; e < t.length; e++)
                this.requestSource(t[e]);
            this.thaw()
        },
        requestSource: function(t) {
            var e = this
              , n = {
                source: t,
                status: "pending"
            };
            this.requestsByUid[t.uid] = n,
            this.pendingCnt += 1,
            t.fetch(this.start, this.end, this.timezone).then(function(t) {
                "cancelled" !== n.status && (n.status = "completed",
                n.eventDefs = t,
                e.addEventDefs(t),
                e.pendingCnt--,
                e.tryRelease())
            }, function() {
                "cancelled" !== n.status && (n.status = "failed",
                e.pendingCnt--,
                e.tryRelease())
            })
        },
        purgeSource: function(t) {
            var e = this.requestsByUid[t.uid];
            e && (delete this.requestsByUid[t.uid],
            "pending" === e.status ? (e.status = "cancelled",
            this.pendingCnt--,
            this.tryRelease()) : "completed" === e.status && e.eventDefs.forEach(this.removeEventDef.bind(this)))
        },
        purgeAllSources: function() {
            var t, e, n = this.requestsByUid, i = 0;
            for (t in n)
                e = n[t],
                "pending" === e.status ? e.status = "cancelled" : "completed" === e.status && i++;
            this.requestsByUid = {},
            this.pendingCnt = 0,
            i && this.removeAllEventDefs()
        },
        getEventDefByUid: function(t) {
            return this.eventDefsByUid[t]
        },
        getEventDefsById: function(t) {
            var e = this.eventDefsById[t];
            return e ? e.slice() : []
        },
        addEventDefs: function(t) {
            for (var e = 0; e < t.length; e++)
                this.addEventDef(t[e])
        },
        addEventDef: function(t) {
            var e, n = this.eventDefsById, i = t.id, s = n[i] || (n[i] = []), r = t.buildInstances(this.unzonedRange);
            for (s.push(t),
            this.eventDefsByUid[t.uid] = t,
            e = 0; e < r.length; e++)
                this.addEventInstance(r[e], i)
        },
        removeEventDefsById: function(t) {
            var e = this;
            this.getEventDefsById(t).forEach(function(t) {
                e.removeEventDef(t)
            })
        },
        removeAllEventDefs: function() {
            var e = t.isEmptyObject(this.eventDefsByUid);
            this.eventDefsByUid = {},
            this.eventDefsById = {},
            this.eventInstanceGroupsById = {},
            e || this.tryRelease()
        },
        removeEventDef: function(t) {
            var e = this.eventDefsById
              , n = e[t.id];
            delete this.eventDefsByUid[t.uid],
            n && (K(n, t),
            n.length || delete e[t.id],
            this.removeEventInstancesForDef(t))
        },
        getEventInstances: function() {
            var t, e = this.eventInstanceGroupsById, n = [];
            for (t in e)
                n.push.apply(n, e[t].eventInstances);
            return n
        },
        getEventInstancesWithId: function(t) {
            var e = this.eventInstanceGroupsById[t];
            return e ? e.eventInstances.slice() : []
        },
        getEventInstancesWithoutId: function(t) {
            var e, n = this.eventInstanceGroupsById, i = [];
            for (e in n)
                e !== t && i.push.apply(i, n[e].eventInstances);
            return i
        },
        addEventInstance: function(t, e) {
            var n = this.eventInstanceGroupsById;
            (n[e] || (n[e] = new Oe)).eventInstances.push(t),
            this.tryRelease()
        },
        removeEventInstancesForDef: function(t) {
            var e, n = this.eventInstanceGroupsById, i = n[t.id];
            i && (e = X(i.eventInstances, function(e) {
                return e.def === t
            }),
            i.eventInstances.length || delete n[t.id],
            e && this.tryRelease())
        },
        tryRelease: function() {
            this.pendingCnt || (this.freezeDepth ? this.stuntedReleaseCnt++ : this.release())
        },
        release: function() {
            this.releaseCnt++,
            this.trigger("release", this.eventInstanceGroupsById)
        },
        whenReleased: function() {
            var t = this;
            return this.releaseCnt ? ae.resolve(this.eventInstanceGroupsById) : ae.construct(function(e) {
                t.one("release", e)
            })
        },
        freeze: function() {
            this.freezeDepth++ || (this.stuntedReleaseCnt = 0)
        },
        thaw: function() {
            --this.freezeDepth || !this.stuntedReleaseCnt || this.pendingCnt || this.release()
        }
    })
      , Pe = {
        parse: function(t, n) {
            return Y(t.start) || e.isDuration(t.start) || Y(t.end) || e.isDuration(t.end) ? Ae.parse(t, n) : ke.parse(t, n)
        }
    }
      , Be = Vt.EventDef = ht.extend(ie, {
        source: null,
        id: null,
        rawId: null,
        uid: null,
        title: null,
        url: null,
        rendering: null,
        constraint: null,
        overlap: null,
        editable: null,
        startEditable: null,
        durationEditable: null,
        color: null,
        backgroundColor: null,
        borderColor: null,
        textColor: null,
        className: null,
        miscProps: null,
        constructor: function(t) {
            this.source = t,
            this.className = [],
            this.miscProps = {}
        },
        isAllDay: function() {},
        buildInstances: function(t) {},
        clone: function() {
            var e = new this.constructor(this.source);
            return e.id = this.id,
            e.rawId = this.rawId,
            e.uid = this.uid,
            Be.copyVerbatimStandardProps(this, e),
            e.className = this.className,
            e.miscProps = t.extend({}, this.miscProps),
            e
        },
        hasInverseRendering: function() {
            return "inverse-background" === this.getRendering()
        },
        hasBgRendering: function() {
            var t = this.getRendering();
            return "inverse-background" === t || "background" === t
        },
        getRendering: function() {
            return null != this.rendering ? this.rendering : this.source.rendering
        },
        getConstraint: function() {
            return null != this.constraint ? this.constraint : null != this.source.constraint ? this.source.constraint : this.source.calendar.opt("eventConstraint")
        },
        getOverlap: function() {
            return null != this.overlap ? this.overlap : null != this.source.overlap ? this.source.overlap : this.source.calendar.opt("eventOverlap")
        },
        isStartExplicitlyEditable: function() {
            return null !== this.startEditable ? this.startEditable : this.source.startEditable
        },
        isDurationExplicitlyEditable: function() {
            return null !== this.durationEditable ? this.durationEditable : this.source.durationEditable
        },
        isExplicitlyEditable: function() {
            return null !== this.editable ? this.editable : this.source.editable
        },
        toLegacy: function() {
            var e = t.extend({}, this.miscProps);
            return e._id = this.uid,
            e.source = this.source,
            e.className = this.className,
            e.allDay = this.isAllDay(),
            null != this.rawId && (e.id = this.rawId),
            Be.copyVerbatimStandardProps(this, e),
            e
        },
        applyManualRawProps: function(e) {
            return null != e.id ? this.id = Be.normalizeId(this.rawId = e.id) : this.id = Be.generateId(),
            null != e._id ? this.uid = String(e._id) : this.uid = Be.generateId(),
            t.isArray(e.className) && (this.className = e.className),
            "string" == typeof e.className && (this.className = e.className.split(/\s+/)),
            !0
        },
        applyOtherRawProps: function(t) {
            this.miscProps = t
        }
    });
    Be.allowRawProps = se,
    Be.copyVerbatimStandardProps = re,
    Be.uuid = 0,
    Be.normalizeId = function(t) {
        return String(t)
    }
    ,
    Be.generateId = function() {
        return "_fc" + Be.uuid++
    }
    ,
    Be.allowRawProps({
        _id: !1,
        id: !1,
        className: !1,
        source: !1,
        title: !0,
        url: !0,
        rendering: !0,
        constraint: !0,
        overlap: !0,
        editable: !0,
        startEditable: !0,
        durationEditable: !0,
        color: !0,
        backgroundColor: !0,
        borderColor: !0,
        textColor: !0
    }),
    Be.parse = function(t, e) {
        var n = new this(e)
          , i = e.calendar.opt("eventDataTransform")
          , s = e.eventDataTransform;
        return i && (t = i(t)),
        s && (t = s(t)),
        !!n.applyRawProps(t) && n
    }
    ;
    var ke = Be.extend({
        dateProfile: null,
        buildInstances: function() {
            return [this.buildInstance()]
        },
        buildInstance: function() {
            return new Le(this,this.dateProfile)
        },
        isAllDay: function() {
            return this.dateProfile.isAllDay()
        },
        clone: function() {
            var t = Be.prototype.clone.call(this);
            return t.dateProfile = this.dateProfile,
            t
        },
        rezone: function() {
            var t = this.source.calendar
              , e = this.dateProfile;
            this.dateProfile = new Ne(t.moment(e.start),e.end ? t.moment(e.end) : null,t)
        },
        applyManualRawProps: function(t) {
            var e = Be.prototype.applyManualRawProps.apply(this, arguments)
              , n = Ne.parse(t, this.source);
            return !!n && (this.dateProfile = n,
            null != t.date && (this.miscProps.date = t.date),
            e)
        }
    });
    ke.allowRawProps({
        start: !1,
        date: !1,
        end: !1,
        allDay: !1
    });
    var Ae = Be.extend({
        startTime: null,
        endTime: null,
        dowHash: null,
        isAllDay: function() {
            return !this.startTime && !this.endTime
        },
        buildInstances: function(t) {
            for (var e, n, i, s = this.source.calendar, r = t.getStart(), o = t.getEnd(), a = []; r.isBefore(o); )
                this.dowHash && !this.dowHash[r.day()] || (e = s.applyTimezone(r),
                n = e.clone(),
                i = null,
                this.startTime ? n.time(this.startTime) : n.stripTime(),
                this.endTime && (i = e.clone().time(this.endTime)),
                a.push(new Le(this,new Ne(n,i,s)))),
                r.add(1, "days");
            return a
        },
        setDow: function(t) {
            this.dowHash || (this.dowHash = {});
            for (var e = 0; e < t.length; e++)
                this.dowHash[t[e]] = !0
        },
        clone: function() {
            var n = Be.prototype.clone.call(this);
            return n.startTime && (n.startTime = e.duration(this.startTime)),
            n.endTime && (n.endTime = e.duration(this.endTime)),
            this.dowHash && (n.dowHash = t.extend({}, this.dowHash)),
            n
        },
        applyRawProps: function(t) {
            var n = Be.prototype.applyRawProps.apply(this, arguments);
            return t.start && (this.startTime = e.duration(t.start)),
            t.end && (this.endTime = e.duration(t.end)),
            t.dow && this.setDow(t.dow),
            n
        }
    });
    Ae.allowRawProps({
        start: !1,
        end: !1,
        dow: !1
    });
    var Le = ht.extend({
        def: null,
        dateProfile: null,
        constructor: function(t, e) {
            this.def = t,
            this.dateProfile = e
        },
        toLegacy: function() {
            var t = this.dateProfile
              , e = this.def.toLegacy();
            return e.start = t.start.clone(),
            e.end = t.end ? t.end.clone() : null,
            e
        }
    })
      , Oe = ht.extend({
        eventInstances: null,
        explicitEventDef: null,
        constructor: function(t) {
            this.eventInstances = t || []
        },
        getAllEventRanges: function() {
            return Lt(this.eventInstances)
        },
        sliceRenderRanges: function(t) {
            return this.isInverse() ? this.sliceInverseRenderRanges(t) : this.sliceNormalRenderRanges(t)
        },
        sliceNormalRenderRanges: function(t) {
            var e, n, i, s = this.eventInstances, r = [];
            for (e = 0; e < s.length; e++)
                n = s[e],
                (i = n.dateProfile.unzonedRange.intersect(t)) && r.push(new Ve(i,n.def,n));
            return r
        },
        sliceInverseRenderRanges: function(t) {
            var e = Ot(this.eventInstances)
              , n = this.getEventDef();
            return e = Pt(e, t),
            e.map(function(t) {
                return new Ve(t,n)
            })
        },
        isInverse: function() {
            return this.getEventDef().hasInverseRendering()
        },
        getEventDef: function() {
            return this.explicitEventDef || this.eventInstances[0].def
        }
    })
      , Ne = ht.extend({
        start: null,
        end: null,
        unzonedRange: null,
        constructor: function(t, e, n) {
            this.start = t,
            this.end = e || null,
            this.unzonedRange = this.buildUnzonedRange(n)
        },
        isAllDay: function() {
            return !(this.start.hasTime() || this.end && this.end.hasTime())
        },
        buildUnzonedRange: function(t) {
            var e = this.start.clone().stripZone().valueOf()
              , n = this.getEnd(t).stripZone().valueOf();
            return new Me(e,n)
        },
        getEnd: function(t) {
            return this.end ? this.end.clone() : t.getDefaultEventEnd(this.isAllDay(), this.start)
        }
    });
    Ne.parse = function(t, e) {
        var n = t.start || t.date
          , i = t.end;
        if (!n)
            return !1;
        var s = e.calendar
          , r = s.moment(n)
          , o = i ? s.moment(i) : null
          , a = t.allDay
          , l = s.opt("forceEventDuration");
        return !!r.isValid() && (!o || o.isValid() && o.isAfter(r) || (o = null),
        null == a && null == (a = e.allDayDefault) && (a = s.opt("allDayDefault")),
        !0 === a ? (r.stripTime(),
        o && o.stripTime()) : !1 === a && (r.hasTime() || r.time(0),
        o && !o.hasTime() && o.time(0)),
        !o && l && (o = s.getDefaultEventEnd(!r.hasTime(), r)),
        new Ne(r,o,s))
    }
    ;
    var Ve = ht.extend({
        unzonedRange: null,
        eventDef: null,
        eventInstance: null,
        constructor: function(t, e, n) {
            this.unzonedRange = t,
            this.eventDef = e,
            n && (this.eventInstance = n)
        }
    })
      , Ue = Vt.EventFootprint = ht.extend({
        componentFootprint: null,
        eventDef: null,
        eventInstance: null,
        constructor: function(t, e, n) {
            this.componentFootprint = t,
            this.eventDef = e,
            n && (this.eventInstance = n)
        },
        getEventLegacy: function() {
            return (this.eventInstance || this.eventDef).toLegacy()
        }
    })
      , Ge = Vt.EventDefMutation = ht.extend({
        dateMutation: null,
        rawProps: null,
        mutateSingle: function(t) {
            var e;
            return this.dateMutation && (e = t.dateProfile,
            t.dateProfile = this.dateMutation.buildNewDateProfile(e, t.source.calendar)),
            this.rawProps && t.applyRawProps(this.rawProps),
            e ? function() {
                t.dateProfile = e
            }
            : function() {}
        },
        setDateMutation: function(t) {
            t && !t.isEmpty() ? this.dateMutation = t : this.dateMutation = null
        },
        isEmpty: function() {
            return !this.dateMutation
        }
    });
    Ge.createFromRawProps = function(t, e, n) {
        var i, s, r, o, a = t.def, l = {};
        for (i in e)
            "object" != typeof e[i] && "start" !== i && "end" !== i && "allDay" !== i && "source" !== i && "_id" !== i && (l[i] = e[i]);
        return s = Ne.parse(e, a.source),
        s && (r = We.createFromDiff(t.dateProfile, s, n)),
        o = new Ge,
        o.rawProps = l,
        r && (o.dateMutation = r),
        o
    }
    ;
    var We = ht.extend({
        clearEnd: !1,
        forceTimed: !1,
        forceAllDay: !1,
        dateDelta: null,
        startDelta: null,
        endDelta: null,
        buildNewDateProfile: function(t, e) {
            var n = t.start.clone()
              , i = null
              , s = !1;
            return !this.clearEnd && t.end && (i = t.end.clone()),
            this.forceTimed ? (s = !0,
            n.hasTime() || n.time(0),
            i && !i.hasTime() && i.time(0)) : this.forceAllDay && (n.hasTime() && n.stripTime(),
            i && i.hasTime() && i.stripTime()),
            this.dateDelta && (s = !0,
            n.add(this.dateDelta),
            i && i.add(this.dateDelta)),
            this.endDelta && (s = !0,
            i || (i = e.getDefaultEventEnd(t.isAllDay(), n)),
            i.add(this.endDelta)),
            this.startDelta && (s = !0,
            n.add(this.startDelta)),
            s && (n = e.applyTimezone(n),
            i && (i = e.applyTimezone(i))),
            !i && e.opt("forceEventDuration") && (i = e.getDefaultEventEnd(t.isAllDay(), n)),
            new Ne(n,i,e)
        },
        setDateDelta: function(t) {
            t && t.valueOf() ? this.dateDelta = t : this.dateDelta = null
        },
        setStartDelta: function(t) {
            t && t.valueOf() ? this.startDelta = t : this.startDelta = null
        },
        setEndDelta: function(t) {
            t && t.valueOf() ? this.endDelta = t : this.endDelta = null
        },
        isEmpty: function() {
            return !(this.clearEnd || this.forceTimed || this.forceAllDay || this.dateDelta || this.startDelta || this.endDelta)
        }
    });
    We.createFromDiff = function(t, e, n) {
        function i(t, i) {
            return n ? L(t, i, n) : e.isAllDay() ? A(t, i) : k(t, i)
        }
        var s, r, o, a, l = t.end && !e.end, u = t.isAllDay() && !e.isAllDay(), c = !t.isAllDay() && e.isAllDay();
        return s = i(e.start, t.start),
        e.end && (r = i(e.unzonedRange.getEnd(), t.unzonedRange.getEnd()),
        o = r.subtract(s)),
        a = new We,
        a.clearEnd = l,
        a.forceTimed = u,
        a.forceAllDay = c,
        a.setDateDelta(s),
        a.setEndDelta(o),
        a
    }
    ;
    var _e = ht.extend(ie, {
        calendar: null,
        id: null,
        uid: null,
        color: null,
        backgroundColor: null,
        borderColor: null,
        textColor: null,
        className: null,
        editable: null,
        startEditable: null,
        durationEditable: null,
        rendering: null,
        overlap: null,
        constraint: null,
        allDayDefault: null,
        eventDataTransform: null,
        constructor: function(t) {
            this.calendar = t,
            this.className = [],
            this.uid = String(_e.uuid++)
        },
        fetch: function(t, e, n) {},
        removeEventDefsById: function(t) {},
        removeAllEventDefs: function() {},
        getPrimitive: function(t) {},
        parseEventDefs: function(t) {
            var e, n, i = [];
            for (e = 0; e < t.length; e++)
                (n = Pe.parse(t[e], this)) && i.push(n);
            return i
        },
        applyManualRawProps: function(e) {
            return null != e.id && (this.id = _e.normalizeId(e.id)),
            t.isArray(e.className) ? this.className = e.className : "string" == typeof e.className && (this.className = e.className.split(/\s+/)),
            !0
        }
    });
    _e.allowRawProps = se,
    _e.uuid = 0,
    _e.normalizeId = function(t) {
        return t ? String(t) : null
    }
    ,
    _e.allowRawProps({
        id: !1,
        className: !1,
        color: !0,
        backgroundColor: !0,
        borderColor: !0,
        textColor: !0,
        editable: !0,
        startEditable: !0,
        durationEditable: !0,
        rendering: !0,
        overlap: !0,
        constraint: !0,
        allDayDefault: !0,
        eventDataTransform: !0
    }),
    _e.parse = function(t, e) {
        var n = new this(e);
        return !("object" != typeof t || !n.applyRawProps(t)) && n
    }
    ,
    Vt.EventSource = _e;
    var qe = {
        sourceClasses: [],
        registerClass: function(t) {
            this.sourceClasses.unshift(t)
        },
        parse: function(t, e) {
            var n, i, s = this.sourceClasses;
            for (n = 0; n < s.length; n++)
                if (i = s[n].parse(t, e))
                    return i
        }
    };
    Vt.EventSourceParser = qe;
    var Ye = _e.extend({
        rawEventDefs: null,
        eventDefs: null,
        currentTimezone: null,
        constructor: function(t) {
            _e.apply(this, arguments),
            this.eventDefs = []
        },
        setRawEventDefs: function(t) {
            this.rawEventDefs = t,
            this.eventDefs = this.parseEventDefs(t)
        },
        fetch: function(t, e, n) {
            var i, s = this.eventDefs;
            if (null !== this.currentTimezone && this.currentTimezone !== n)
                for (i = 0; i < s.length; i++)
                    s[i]instanceof ke && s[i].rezone();
            return this.currentTimezone = n,
            ae.resolve(s)
        },
        addEventDef: function(t) {
            this.eventDefs.push(t)
        },
        removeEventDefsById: function(t) {
            return X(this.eventDefs, function(e) {
                return e.id === t
            })
        },
        removeAllEventDefs: function() {
            this.eventDefs = []
        },
        getPrimitive: function() {
            return this.rawEventDefs
        },
        applyManualRawProps: function(t) {
            var e = _e.prototype.applyManualRawProps.apply(this, arguments);
            return this.setRawEventDefs(t.events),
            e
        }
    });
    Ye.allowRawProps({
        events: !1
    }),
    Ye.parse = function(e, n) {
        var i;
        return t.isArray(e.events) ? i = e : t.isArray(e) && (i = {
            events: e
        }),
        !!i && _e.parse.call(this, i, n)
    }
    ,
    qe.registerClass(Ye),
    Vt.ArrayEventSource = Ye;
    var je = _e.extend({
        func: null,
        fetch: function(t, e, n) {
            var i = this;
            return this.calendar.pushLoading(),
            ae.construct(function(s) {
                i.func.call(this.calendar, t.clone(), e.clone(), n, function(t) {
                    i.calendar.popLoading(),
                    s(i.parseEventDefs(t))
                })
            })
        },
        getPrimitive: function() {
            return this.func
        },
        applyManualRawProps: function(t) {
            var e = _e.prototype.applyManualRawProps.apply(this, arguments);
            return this.func = t.events,
            e
        }
    });
    je.allowRawProps({
        events: !1
    }),
    je.parse = function(e, n) {
        var i;
        return t.isFunction(e.events) ? i = e : t.isFunction(e) && (i = {
            events: e
        }),
        !!i && _e.parse.call(this, i, n)
    }
    ,
    qe.registerClass(je),
    Vt.FuncEventSource = je;
    var Ze = _e.extend({
        startParam: null,
        endParam: null,
        timezoneParam: null,
        ajaxSettings: null,
        fetch: function(e, n, i) {
            var s = this
              , r = this.ajaxSettings
              , o = r.success
              , a = r.error
              , l = this.buildRequestParams(e, n, i);
            return this.calendar.pushLoading(),
            ae.construct(function(e, n) {
                t.ajax(t.extend({}, Ze.AJAX_DEFAULTS, r, {
                    data: l,
                    success: function(i) {
                        var r;
                        s.calendar.popLoading(),
                        i ? (r = $(o, this, arguments),
                        t.isArray(r) && (i = r),
                        e(s.parseEventDefs(i))) : n()
                    },
                    error: function() {
                        s.calendar.popLoading(),
                        $(a, this, arguments),
                        n()
                    }
                }))
            })
        },
        buildRequestParams: function(e, n, i) {
            var s, r, o, a, l = this.calendar, u = this.ajaxSettings, c = {};
            return s = this.startParam,
            null == s && (s = l.opt("startParam")),
            r = this.endParam,
            null == r && (r = l.opt("endParam")),
            o = this.timezoneParam,
            null == o && (o = l.opt("timezoneParam")),
            a = t.isFunction(u.data) ? u.data() : u.data || {},
            t.extend(c, a),
            c[s] = e.format(),
            c[r] = n.format(),
            i && "local" !== i && (c[o] = i),
            c
        },
        getPrimitive: function() {
            return this.ajaxSettings.url
        },
        applyOtherRawProps: function(t) {
            _e.prototype.applyOtherRawProps.apply(this, arguments),
            this.ajaxSettings = t
        }
    });
    Ze.AJAX_DEFAULTS = {
        dataType: "json",
        cache: !1
    },
    Ze.allowRawProps({
        startParam: !0,
        endParam: !0,
        timezoneParam: !0
    }),
    Ze.parse = function(t, e) {
        var n;
        return "string" == typeof t.url ? n = t : "string" == typeof t && (n = {
            url: t
        }),
        !!n && _e.parse.call(this, n, e)
    }
    ,
    qe.registerClass(Ze),
    Vt.JsonFeedEventSource = Ze;
    var Qe = Vt.ThemeRegistry = {
        themeClassHash: {},
        register: function(t, e) {
            this.themeClassHash[t] = e
        },
        getThemeClass: function(t) {
            return t ? !0 === t ? Ke : this.themeClassHash[t] : Xe
        }
    }
      , $e = Vt.Theme = ht.extend({
        classes: {},
        iconClasses: {},
        baseIconClass: "",
        iconOverrideOption: null,
        iconOverrideCustomButtonOption: null,
        iconOverridePrefix: "",
        constructor: function(t) {
            this.optionsModel = t,
            this.processIconOverride()
        },
        processIconOverride: function() {
            this.iconOverrideOption && this.setIconOverride(this.optionsModel.get(this.iconOverrideOption))
        },
        setIconOverride: function(e) {
            var n, i;
            if (t.isPlainObject(e)) {
                n = t.extend({}, this.iconClasses);
                for (i in e)
                    n[i] = this.applyIconOverridePrefix(e[i]);
                this.iconClasses = n
            } else
                !1 === e && (this.iconClasses = {})
        },
        applyIconOverridePrefix: function(t) {
            var e = this.iconOverridePrefix;
            return e && 0 !== t.indexOf(e) && (t = e + t),
            t
        },
        getClass: function(t) {
            return this.classes[t] || ""
        },
        getIconClass: function(t) {
            var e = this.iconClasses[t];
            return e ? this.baseIconClass + " " + e : ""
        },
        getCustomButtonIconClass: function(t) {
            var e;
            return this.iconOverrideCustomButtonOption && (e = t[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(e) : ""
        }
    })
      , Xe = $e.extend({
        classes: {
            widget: "fc-unthemed",
            widgetHeader: "fc-widget-header",
            widgetContent: "fc-widget-content",
            buttonGroup: "fc-button-group",
            button: "fc-button",
            cornerLeft: "fc-corner-left",
            cornerRight: "fc-corner-right",
            stateDefault: "fc-state-default",
            stateActive: "fc-state-active",
            stateDisabled: "fc-state-disabled",
            stateHover: "fc-state-hover",
            stateDown: "fc-state-down",
            popoverHeader: "fc-widget-header",
            popoverContent: "fc-widget-content",
            headerRow: "fc-widget-header",
            dayRow: "fc-widget-content",
            listView: "fc-widget-content"
        },
        baseIconClass: "fc-icon",
        iconClasses: {
            close: "fc-icon-x",
            prev: "fc-icon-left-single-arrow",
            next: "fc-icon-right-single-arrow",
            prevYear: "fc-icon-left-double-arrow",
            nextYear: "fc-icon-right-double-arrow"
        },
        iconOverrideOption: "buttonIcons",
        iconOverrideCustomButtonOption: "icon",
        iconOverridePrefix: "fc-icon-"
    });
    Qe.register("standard", Xe);
    var Ke = $e.extend({
        classes: {
            widget: "ui-widget",
            widgetHeader: "ui-widget-header",
            widgetContent: "ui-widget-content",
            buttonGroup: "fc-button-group",
            button: "ui-button",
            cornerLeft: "ui-corner-left",
            cornerRight: "ui-corner-right",
            stateDefault: "ui-state-default",
            stateActive: "ui-state-active",
            stateDisabled: "ui-state-disabled",
            stateHover: "ui-state-hover",
            stateDown: "ui-state-down",
            today: "ui-state-highlight",
            popoverHeader: "ui-widget-header",
            popoverContent: "ui-widget-content",
            headerRow: "ui-widget-header",
            dayRow: "ui-widget-content",
            listView: "ui-widget-content"
        },
        baseIconClass: "ui-icon",
        iconClasses: {
            close: "ui-icon-closethick",
            prev: "ui-icon-circle-triangle-w",
            next: "ui-icon-circle-triangle-e",
            prevYear: "ui-icon-seek-prev",
            nextYear: "ui-icon-seek-next"
        },
        iconOverrideOption: "themeButtonIcons",
        iconOverrideCustomButtonOption: "themeIcon",
        iconOverridePrefix: "ui-icon-"
    });
    Qe.register("jquery-ui", Ke);
    var Je = $e.extend({
        classes: {
            widget: "fc-bootstrap3",
            tableGrid: "table-bordered",
            tableList: "table table-striped",
            buttonGroup: "btn-group",
            button: "btn btn-default",
            stateActive: "active",
            stateDisabled: "disabled",
            today: "alert alert-info",
            popover: "panel panel-default",
            popoverHeader: "panel-heading",
            popoverContent: "panel-body",
            headerRow: "panel-default",
            dayRow: "panel-default",
            listView: "panel panel-default"
        },
        baseIconClass: "glyphicon",
        iconClasses: {
            close: "glyphicon-remove",
            prev: "glyphicon-chevron-left",
            next: "glyphicon-chevron-right",
            prevYear: "glyphicon-backward",
            nextYear: "glyphicon-forward"
        },
        iconOverrideOption: "bootstrapGlyphicons",
        iconOverrideCustomButtonOption: "bootstrapGlyphicon",
        iconOverridePrefix: "glyphicon-"
    });
    Qe.register("bootstrap3", Je);
    var tn = Vt.BasicView = be.extend({
        scroller: null,
        dayGridClass: we,
        dayGrid: null,
        dayNumbersVisible: !1,
        colWeekNumbersVisible: !1,
        cellWeekNumbersVisible: !1,
        weekNumberWidth: null,
        headContainerEl: null,
        headRowEl: null,
        initialize: function() {
            this.dayGrid = this.instantiateDayGrid(),
            this.addChild(this.dayGrid),
            this.scroller = new Se({
                overflowX: "hidden",
                overflowY: "auto"
            })
        },
        instantiateDayGrid: function() {
            return new (this.dayGridClass.extend(en))(this)
        },
        buildRenderRange: function(t, e) {
            var n = be.prototype.buildRenderRange.apply(this, arguments)
              , i = this.calendar.msToUtcMoment(n.startMs, this.isRangeAllDay)
              , s = this.calendar.msToUtcMoment(n.endMs, this.isRangeAllDay);
            return /^(year|month)$/.test(e) && (i.startOf("week"),
            s.weekday() && s.add(1, "week").startOf("week")),
            this.trimHiddenDays(new Me(i,s))
        },
        renderDates: function() {
            this.dayGrid.breakOnWeeks = /year|month|week/.test(this.currentRangeUnit),
            this.dayGrid.setRange(this.renderUnzonedRange),
            this.dayNumbersVisible = this.dayGrid.rowCnt > 1,
            this.opt("weekNumbers") && (this.opt("weekNumbersWithinDays") ? (this.cellWeekNumbersVisible = !0,
            this.colWeekNumbersVisible = !1) : (this.cellWeekNumbersVisible = !1,
            this.colWeekNumbersVisible = !0)),
            this.dayGrid.numbersVisible = this.dayNumbersVisible || this.cellWeekNumbersVisible || this.colWeekNumbersVisible,
            this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()),
            this.renderHead(),
            this.scroller.render();
            var e = this.scroller.el.addClass("fc-day-grid-container")
              , n = t('<div class="fc-day-grid" />').appendTo(e);
            this.el.find(".fc-body > tr > td").append(e),
            this.dayGrid.setElement(n),
            this.dayGrid.renderDates(this.hasRigidRows())
        },
        renderHead: function() {
            this.headContainerEl = this.el.find(".fc-head-container").html(this.dayGrid.renderHeadHtml()),
            this.headRowEl = this.headContainerEl.find(".fc-row")
        },
        unrenderDates: function() {
            this.dayGrid.unrenderDates(),
            this.dayGrid.removeElement(),
            this.scroller.destroy()
        },
        renderSkeletonHtml: function() {
            var t = this.calendar.theme;
            return '<table class="' + t.getClass("tableGrid") + '"><thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '"></td></tr></thead><tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '"></td></tr></tbody></table>'
        },
        weekNumberStyleAttr: function() {
            return null !== this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
        },
        hasRigidRows: function() {
            var t = this.opt("eventLimit");
            return t && "number" != typeof t
        },
        updateWidth: function() {
            this.colWeekNumbersVisible && (this.weekNumberWidth = u(this.el.find(".fc-week-number")))
        },
        setHeight: function(t, e) {
            var n, r, o = this.opt("eventLimit");
            this.scroller.clear(),
            s(this.headRowEl),
            this.dayGrid.removeSegPopover(),
            o && "number" == typeof o && this.dayGrid.limitRows(o),
            n = this.computeScrollerHeight(t),
            this.setGridHeight(n, e),
            o && "number" != typeof o && this.dayGrid.limitRows(o),
            e || (this.scroller.setHeight(n),
            r = this.scroller.getScrollbarWidths(),
            (r.left || r.right) && (i(this.headRowEl, r),
            n = this.computeScrollerHeight(t),
            this.scroller.setHeight(n)),
            this.scroller.lockOverflow(r))
        },
        computeScrollerHeight: function(t) {
            return t - c(this.el, this.scroller.el)
        },
        setGridHeight: function(t, e) {
            e ? l(this.dayGrid.rowEls) : a(this.dayGrid.rowEls, t, !0)
        },
        computeInitialDateScroll: function() {
            return {
                top: 0
            }
        },
        queryDateScroll: function() {
            return {
                top: this.scroller.getScrollTop()
            }
        },
        applyDateScroll: function(t) {
            void 0 !== t.top && this.scroller.setScrollTop(t.top)
        },
        renderEventsPayload: function(t) {
            this.dayGrid.renderEventsPayload(t),
            this.updateHeight()
        }
    })
      , en = {
        renderHeadIntroHtml: function() {
            var t = this.view;
            return t.colWeekNumbersVisible ? '<th class="fc-week-number ' + t.calendar.theme.getClass("widgetHeader") + '" ' + t.weekNumberStyleAttr() + "><span>" + tt(this.opt("weekNumberTitle")) + "</span></th>" : ""
        },
        renderNumberIntroHtml: function(t) {
            var e = this.view
              , n = this.getCellDate(t, 0);
            return e.colWeekNumbersVisible ? '<td class="fc-week-number" ' + e.weekNumberStyleAttr() + ">" + e.buildGotoAnchorHtml({
                date: n,
                type: "week",
                forceOff: 1 === this.colCnt
            }, n.format("w")) + "</td>" : ""
        },
        renderBgIntroHtml: function() {
            var t = this.view;
            return t.colWeekNumbersVisible ? '<td class="fc-week-number ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.weekNumberStyleAttr() + "></td>" : ""
        },
        renderIntroHtml: function() {
            var t = this.view;
            return t.colWeekNumbersVisible ? '<td class="fc-week-number" ' + t.weekNumberStyleAttr() + "></td>" : ""
        }
    }
      , nn = Vt.MonthView = tn.extend({
        buildRenderRange: function() {
            var t, e = tn.prototype.buildRenderRange.apply(this, arguments), n = this.calendar.msToUtcMoment(e.startMs, this.isRangeAllDay), i = this.calendar.msToUtcMoment(e.endMs, this.isRangeAllDay);
            return this.isFixedWeeks() && (t = Math.ceil(i.diff(n, "weeks", !0)),
            i.add(6 - t, "weeks")),
            new Me(n,i)
        },
        setGridHeight: function(t, e) {
            e && (t *= this.rowCnt / 6),
            a(this.dayGrid.rowEls, t, !e)
        },
        isFixedWeeks: function() {
            return this.opt("fixedWeekCount")
        },
        isDateInOtherMonth: function(t) {
            return t.month() !== e.utc(this.currentUnzonedRange.startMs).month()
        }
    });
    Ut.basic = {
        class: tn
    },
    Ut.basicDay = {
        type: "basic",
        duration: {
            days: 1
        }
    },
    Ut.basicWeek = {
        type: "basic",
        duration: {
            weeks: 1
        }
    },
    Ut.month = {
        class: nn,
        duration: {
            months: 1
        },
        defaults: {
            fixedWeekCount: !0
        }
    };
    var sn = Vt.AgendaView = be.extend({
        scroller: null,
        timeGridClass: De,
        timeGrid: null,
        dayGridClass: we,
        dayGrid: null,
        axisWidth: null,
        headContainerEl: null,
        noScrollRowEls: null,
        bottomRuleEl: null,
        usesMinMaxTime: !0,
        initialize: function() {
            this.timeGrid = this.instantiateTimeGrid(),
            this.addChild(this.timeGrid),
            this.opt("allDaySlot") && (this.dayGrid = this.instantiateDayGrid(),
            this.addChild(this.dayGrid)),
            this.scroller = new Se({
                overflowX: "hidden",
                overflowY: "auto"
            })
        },
        instantiateTimeGrid: function() {
            return new (this.timeGridClass.extend(rn))(this)
        },
        instantiateDayGrid: function() {
            return new (this.dayGridClass.extend(on))(this)
        },
        renderDates: function() {
            this.timeGrid.setRange(this.renderUnzonedRange),
            this.dayGrid && this.dayGrid.setRange(this.renderUnzonedRange),
            this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()),
            this.renderHead(),
            this.scroller.render();
            var e = this.scroller.el.addClass("fc-time-grid-container")
              , n = t('<div class="fc-time-grid" />').appendTo(e);
            this.el.find(".fc-body > tr > td").append(e),
            this.timeGrid.setElement(n),
            this.timeGrid.renderDates(),
            this.bottomRuleEl = t('<hr class="fc-divider ' + this.calendar.theme.getClass("widgetHeader") + '"/>').appendTo(this.timeGrid.el),
            this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")),
            this.dayGrid.renderDates(),
            this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight()),
            this.noScrollRowEls = this.el.find(".fc-row:not(.fc-scroller *)")
        },
        renderHead: function() {
            this.headContainerEl = this.el.find(".fc-head-container").html(this.timeGrid.renderHeadHtml())
        },
        unrenderDates: function() {
            this.timeGrid.unrenderDates(),
            this.timeGrid.removeElement(),
            this.dayGrid && (this.dayGrid.unrenderDates(),
            this.dayGrid.removeElement()),
            this.scroller.destroy()
        },
        renderSkeletonHtml: function() {
            var t = this.calendar.theme;
            return '<table class="' + t.getClass("tableGrid") + '"><thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '"></td></tr></thead><tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + t.getClass("widgetHeader") + '"/>' : "") + "</td></tr></tbody></table>"
        },
        axisStyleAttr: function() {
            return null !== this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
        },
        getNowIndicatorUnit: function() {
            return this.timeGrid.getNowIndicatorUnit()
        },
        updateSize: function(t) {
            this.timeGrid.updateSize(t),
            be.prototype.updateSize.call(this, t)
        },
        updateWidth: function() {
            this.axisWidth = u(this.el.find(".fc-axis"))
        },
        setHeight: function(t, e) {
            var n, r, o;
            this.bottomRuleEl.hide(),
            this.scroller.clear(),
            s(this.noScrollRowEls),
            this.dayGrid && (this.dayGrid.removeSegPopover(),
            n = this.opt("eventLimit"),
            n && "number" != typeof n && (n = an),
            n && this.dayGrid.limitRows(n)),
            e || (r = this.computeScrollerHeight(t),
            this.scroller.setHeight(r),
            o = this.scroller.getScrollbarWidths(),
            (o.left || o.right) && (i(this.noScrollRowEls, o),
            r = this.computeScrollerHeight(t),
            this.scroller.setHeight(r)),
            this.scroller.lockOverflow(o),
            this.timeGrid.getTotalSlatHeight() < r && this.bottomRuleEl.show())
        },
        computeScrollerHeight: function(t) {
            return t - c(this.el, this.scroller.el)
        },
        computeInitialDateScroll: function() {
            var t = e.duration(this.opt("scrollTime"))
              , n = this.timeGrid.computeTimeTop(t);
            return n = Math.ceil(n),
            n && n++,
            {
                top: n
            }
        },
        queryDateScroll: function() {
            return {
                top: this.scroller.getScrollTop()
            }
        },
        applyDateScroll: function(t) {
            void 0 !== t.top && this.scroller.setScrollTop(t.top)
        },
        getHitFootprint: function(t) {
            return t.component.getHitFootprint(t)
        },
        getHitEl: function(t) {
            return t.component.getHitEl(t)
        },
        renderEventsPayload: function(t) {
            var e, n, i = {}, s = {};
            for (e in t)
                n = t[e],
                n.getEventDef().isAllDay() ? i[e] = n : s[e] = n;
            this.timeGrid.renderEventsPayload(s),
            this.dayGrid && this.dayGrid.renderEventsPayload(i),
            this.updateHeight()
        },
        renderDrag: function(t, e) {
            if (t.length) {
                if (!t[0].componentFootprint.isAllDay)
                    return this.timeGrid.renderDrag(t, e);
                if (this.dayGrid)
                    return this.dayGrid.renderDrag(t, e)
            }
        },
        renderSelectionFootprint: function(t) {
            t.isAllDay ? this.dayGrid && this.dayGrid.renderSelectionFootprint(t) : this.timeGrid.renderSelectionFootprint(t)
        }
    })
      , rn = {
        renderHeadIntroHtml: function() {
            var t, e = this.view, n = e.calendar.msToUtcMoment(this.unzonedRange.startMs, !0);
            return this.opt("weekNumbers") ? (t = n.format(this.opt("smallWeekFormat")),
            '<th class="fc-axis fc-week-number ' + e.calendar.theme.getClass("widgetHeader") + '" ' + e.axisStyleAttr() + ">" + e.buildGotoAnchorHtml({
                date: n,
                type: "week",
                forceOff: this.colCnt > 1
            }, tt(t)) + "</th>") : '<th class="fc-axis ' + e.calendar.theme.getClass("widgetHeader") + '" ' + e.axisStyleAttr() + "></th>"
        },
        renderBgIntroHtml: function() {
            var t = this.view;
            return '<td class="fc-axis ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.axisStyleAttr() + "></td>"
        },
        renderIntroHtml: function() {
            return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>"
        }
    }
      , on = {
        renderBgIntroHtml: function() {
            var t = this.view;
            return '<td class="fc-axis ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.axisStyleAttr() + "><span>" + t.getAllDayHtml() + "</span></td>"
        },
        renderIntroHtml: function() {
            return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>"
        }
    }
      , an = 5
      , ln = [{
        hours: 1
    }, {
        minutes: 30
    }, {
        minutes: 15
    }, {
        seconds: 30
    }, {
        seconds: 15
    }];
    Ut.agenda = {
        class: sn,
        defaults: {
            allDaySlot: !0,
            slotDuration: "00:30:00",
            slotEventOverlap: !0
        }
    },
    Ut.agendaDay = {
        type: "agenda",
        duration: {
            days: 1
        }
    },
    Ut.agendaWeek = {
        type: "agenda",
        duration: {
            weeks: 1
        }
    };
    var un = be.extend({
        grid: null,
        scroller: null,
        initialize: function() {
            this.grid = new cn(this),
            this.addChild(this.grid),
            this.scroller = new Se({
                overflowX: "hidden",
                overflowY: "auto"
            })
        },
        renderSkeleton: function() {
            this.el.addClass("fc-list-view " + this.calendar.theme.getClass("listView")),
            this.scroller.render(),
            this.scroller.el.appendTo(this.el),
            this.grid.setElement(this.scroller.scrollEl)
        },
        unrenderSkeleton: function() {
            this.scroller.destroy()
        },
        setHeight: function(t, e) {
            this.scroller.setHeight(this.computeScrollerHeight(t))
        },
        computeScrollerHeight: function(t) {
            return t - c(this.el, this.scroller.el)
        },
        renderDates: function() {
            this.grid.setRange(this.renderUnzonedRange)
        },
        isEventDefResizable: function(t) {
            return !1
        },
        isEventDefDraggable: function(t) {
            return !1
        }
    })
      , cn = me.extend({
        dayDates: null,
        dayRanges: null,
        segSelector: ".fc-list-item",
        hasDayInteractions: !1,
        rangeUpdated: function() {
            for (var t = this.view.calendar, e = t.msToUtcMoment(this.unzonedRange.startMs, !0), n = t.msToUtcMoment(this.unzonedRange.endMs, !0), i = [], s = []; e < n; )
                i.push(e.clone()),
                s.push(new Me(e,e.clone().add(1, "day"))),
                e.add(1, "day");
            this.dayDates = i,
            this.dayRanges = s
        },
        componentFootprintToSegs: function(t) {
            var e, n, i, s = this.view, r = this.dayRanges, o = [];
            for (e = 0; e < r.length; e++)
                if ((n = t.unzonedRange.intersect(r[e])) && (i = {
                    startMs: n.startMs,
                    endMs: n.endMs,
                    isStart: n.isStart,
                    isEnd: n.isEnd,
                    dayIndex: e
                },
                o.push(i),
                !i.isEnd && !t.isAllDay && t.unzonedRange.endMs < r[e + 1].startMs + s.nextDayThreshold)) {
                    i.endMs = t.unzonedRange.endMs,
                    i.isEnd = !0;
                    break
                }
            return o
        },
        computeEventTimeFormat: function() {
            return this.opt("mediumTimeFormat")
        },
        handleSegClick: function(e, n) {
            var i;
            me.prototype.handleSegClick.apply(this, arguments),
            t(n.target).closest("a[href]").length || (i = e.footprint.eventDef.url) && !n.isDefaultPrevented() && (window.location.href = i)
        },
        renderFgSegs: function(t) {
            return t = this.renderFgSegEls(t),
            t.length ? this.renderSegList(t) : this.renderEmptyMessage(),
            t
        },
        renderEmptyMessage: function() {
            this.el.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' + tt(this.opt("noEventsMessage")) + "</div></div></div>")
        },
        renderSegList: function(e) {
            var n, i, s, r = this.groupSegsByDay(e), o = t('<table class="fc-list-table ' + this.view.calendar.theme.getClass("tableList") + '"><tbody/></table>'), a = o.find("tbody");
            for (n = 0; n < r.length; n++)
                if (i = r[n])
                    for (a.append(this.dayHeaderHtml(this.dayDates[n])),
                    this.sortEventSegs(i),
                    s = 0; s < i.length; s++)
                        a.append(i[s].el);
            this.el.empty().append(o)
        },
        groupSegsByDay: function(t) {
            var e, n, i = [];
            for (e = 0; e < t.length; e++)
                n = t[e],
                (i[n.dayIndex] || (i[n.dayIndex] = [])).push(n);
            return i
        },
        dayHeaderHtml: function(t) {
            var e = this.view
              , n = this.opt("listDayFormat")
              , i = this.opt("listDayAltFormat");
            return '<tr class="fc-list-heading" data-date="' + t.format("YYYY-MM-DD") + '"><td class="' + e.calendar.theme.getClass("widgetHeader") + '" colspan="3">' + (n ? e.buildGotoAnchorHtml(t, {
                class: "fc-list-heading-main"
            }, tt(t.format(n))) : "") + (i ? e.buildGotoAnchorHtml(t, {
                class: "fc-list-heading-alt"
            }, tt(t.format(i))) : "") + "</td></tr>"
        },
        fgSegHtml: function(t) {
            var e, n = this.view, i = n.calendar, s = i.theme, r = ["fc-list-item"].concat(this.getSegCustomClasses(t)), o = this.getSegBackgroundColor(t), a = t.footprint, l = a.eventDef, u = a.componentFootprint, c = l.url;
            return e = u.isAllDay ? n.getAllDayHtml() : n.isMultiDayRange(u.unzonedRange) ? t.isStart || t.isEnd ? tt(this._getEventTimeText(i.msToMoment(t.startMs), i.msToMoment(t.endMs), u.isAllDay)) : n.getAllDayHtml() : tt(this.getEventTimeText(a)),
            c && r.push("fc-has-url"),
            '<tr class="' + r.join(" ") + '">' + (this.displayEventTime ? '<td class="fc-list-item-time ' + s.getClass("widgetContent") + '">' + (e || "") + "</td>" : "") + '<td class="fc-list-item-marker ' + s.getClass("widgetContent") + '"><span class="fc-event-dot"' + (o ? ' style="background-color:' + o + '"' : "") + '></span></td><td class="fc-list-item-title ' + s.getClass("widgetContent") + '"><a' + (c ? ' href="' + tt(c) + '"' : "") + ">" + tt(l.title || "") + "</a></td></tr>"
        }
    });
    return Ut.list = {
        class: un,
        buttonTextKey: "list",
        defaults: {
            buttonText: "list",
            listDayFormat: "LL",
            noEventsMessage: "No events to display"
        }
    },
    Ut.listDay = {
        type: "list",
        duration: {
            days: 1
        },
        defaults: {
            listDayFormat: "dddd"
        }
    },
    Ut.listWeek = {
        type: "list",
        duration: {
            weeks: 1
        },
        defaults: {
            listDayFormat: "dddd",
            listDayAltFormat: "LL"
        }
    },
    Ut.listMonth = {
        type: "list",
        duration: {
            month: 1
        },
        defaults: {
            listDayAltFormat: "dddd"
        }
    },
    Ut.listYear = {
        type: "list",
        duration: {
            year: 1
        },
        defaults: {
            listDayAltFormat: "dddd"
        }
    },
    Vt
});
