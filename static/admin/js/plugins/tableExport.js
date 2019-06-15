/*
 tableExport.jquery.plugin

 Version 1.9.8

 Copyright (c) 2015-2017 hhurz, https://github.com/hhurz

 Original Work Copyright (c) 2014 Giri Raj

 Licensed under the MIT License
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (c, g, u) {
    c instanceof String && (c = String(c));
    for (var C = c.length, D = 0; D < C; D++) {
        var O = c[D];
        if (g.call(u, O, D, c)) return {i: D, v: O}
    }
    return {i: -1, v: void 0}
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (c, g, u) {
    c != Array.prototype && c != Object.prototype && (c[g] = u.value)
};
$jscomp.getGlobal = function (c) {
    return "undefined" != typeof window && window === c ? c : "undefined" != typeof global && null != global ? global : c
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (c, g, u, C) {
    if (g) {
        u = $jscomp.global;
        c = c.split(".");
        for (C = 0; C < c.length - 1; C++) {
            var D = c[C];
            D in u || (u[D] = {});
            u = u[D]
        }
        c = c[c.length - 1];
        C = u[c];
        g = g(C);
        g != C && null != g && $jscomp.defineProperty(u, c, {configurable: !0, writable: !0, value: g})
    }
};
$jscomp.polyfill("Array.prototype.find", function (c) {
    return c ? c : function (c, u) {
        return $jscomp.findInternal(this, c, u).v
    }
}, "es6", "es3");
(function (c) {
    c.fn.extend({
        tableExport: function (g) {
            function u(b) {
                var f = [];
                C(b, "tbody").each(function () {
                    f.push.apply(f, D(c(this), a.tbodySelector))
                });
                a.tfootSelector.length && C(b, "tfoot").each(function () {
                    f.push.apply(f, D(c(this), a.tfootSelector))
                });
                return f
            }

            function C(b, f) {
                var d = b.parents("table").length;
                return b.find(f).filter(function () {
                    return c(this).closest("table").parents("table").length === d
                })
            }

            function D(b, f) {
                return b.find(f).filter(function () {
                    return 0 === c(this).find("table").length && 1 === c(this).parents("table").length
                })
            }

            function O(b) {
                var f = [];
                c(b).find("thead").first().find("th").each(function (b, a) {
                    void 0 !== c(a).attr("data-field") ? f[b] = c(a).attr("data-field") : f[b] = b.toString()
                });
                return f
            }

            function P(b) {
                var f = "undefined" !== typeof b[0].cellIndex, a = "undefined" !== typeof b[0].rowIndex,
                    r = f || a ? ya(b) : b.is(":visible"), h = b.data("tableexport-display");
                f && "none" != h && "always" != h && (b = c(b[0].parentNode), a = "undefined" !== typeof b[0].rowIndex, h = b.data("tableexport-display"));
                a && "none" != h && "always" != h && (h = b.closest("table").data("tableexport-display"));
                return "none" !== h && (1 == r || "always" == h)
            }

            function ya(b) {
                var f = [];
                R && (f = K.filter(function () {
                    var f = !1;
                    this.nodeType == b[0].nodeType && ("undefined" !== typeof this.rowIndex && this.rowIndex == b[0].rowIndex ? f = !0 : "undefined" !== typeof this.cellIndex && this.cellIndex == b[0].cellIndex && "undefined" !== typeof this.parentNode.rowIndex && "undefined" !== typeof b[0].parentNode.rowIndex && this.parentNode.rowIndex == b[0].parentNode.rowIndex && (f = !0));
                    return f
                }));
                return 0 == R || 0 == f.length
            }

            function za(b, f, d) {
                var r = !1;
                P(b) ? 0 < a.ignoreColumn.length &&
                    (-1 != c.inArray(d, a.ignoreColumn) || -1 != c.inArray(d - f, a.ignoreColumn) || Q.length > d && "undefined" != typeof Q[d] && -1 != c.inArray(Q[d], a.ignoreColumn)) && (r = !0) : r = !0;
                return r
            }

            function B(b, f, d, r, h) {
                if ("function" === typeof h) {
                    var k = !1;
                    "function" === typeof a.onIgnoreRow && (k = a.onIgnoreRow(c(b), d));
                    if (!1 === k && -1 == c.inArray(d, a.ignoreRow) && -1 == c.inArray(d - r, a.ignoreRow) && P(c(b))) {
                        var x = c(b).find(f), q = 0;
                        x.each(function (b) {
                            var f = c(this), a, k = parseInt(this.getAttribute("colspan")),
                                r = parseInt(this.getAttribute("rowspan"));
                            G.forEach(function (b) {
                                if (d >= b.s.r && d <= b.e.r && q >= b.s.c && q <= b.e.c) for (a = 0; a <= b.e.c - b.s.c; ++a) h(null, d, q++)
                            });
                            if (!1 === za(f, x.length, b)) {
                                if (r || k) k = k || 1, G.push({
                                    s: {r: d, c: q},
                                    e: {r: d + (r || 1) - 1, c: q + k - 1}
                                });
                                h(this, d, q++)
                            }
                            if (k) for (a = 0; a < k - 1; ++a) h(null, d, q++)
                        });
                        G.forEach(function (b) {
                            if (d >= b.s.r && d <= b.e.r && q >= b.s.c && q <= b.e.c) for (Y = 0; Y <= b.e.c - b.s.c; ++Y) h(null, d, q++)
                        })
                    }
                }
            }

            function la(b, f) {
                !0 === a.consoleLog && console.log(b.output());
                if ("string" === a.outputMode) return b.output();
                if ("base64" === a.outputMode) return L(b.output());
                if ("window" === a.outputMode) window.URL = window.URL || window.webkitURL, window.open(window.URL.createObjectURL(b.output("blob"))); else try {
                    var d = b.output("blob");
                    saveAs(d, a.fileName + ".pdf")
                } catch (r) {
                    H(a.fileName + ".pdf", "data:application/pdf" + (f ? "" : ";base64") + ",", f ? b.output("blob") : b.output())
                }
            }

            function ma(b, f, a) {
                var d = 0;
                "undefined" !== typeof a && (d = a.colspan);
                if (0 <= d) {
                    for (var h = b.width, c = b.textPos.x, x = f.table.columns.indexOf(f.column), q = 1; q < d; q++) h += f.table.columns[x + q].width;
                    1 < d && ("right" === b.styles.halign ?
                        c = b.textPos.x + h - b.width : "center" === b.styles.halign && (c = b.textPos.x + (h - b.width) / 2));
                    b.width = h;
                    b.textPos.x = c;
                    "undefined" !== typeof a && 1 < a.rowspan && (b.height *= a.rowspan);
                    if ("middle" === b.styles.valign || "bottom" === b.styles.valign) a = ("string" === typeof b.text ? b.text.split(/\r\n|\r|\n/g) : b.text).length || 1, 2 < a && (b.textPos.y -= (2 - 1.15) / 2 * f.row.styles.fontSize * (a - 2) / 3);
                    return !0
                }
                return !1
            }

            function na(b, f, a) {
                "undefined" != typeof a.images && f.each(function () {
                    var f = c(this).children();
                    if (c(this).is("img")) {
                        var h = oa(this.src);
                        a.images[h] = {url: this.src, src: this.src}
                    }
                    "undefined" != typeof f && 0 < f.length && na(b, f, a)
                })
            }

            function Aa(b, f) {
                function a(b) {
                    if (b.url) {
                        var a = new Image;
                        h = ++k;
                        a.crossOrigin = "Anonymous";
                        a.onerror = a.onload = function () {
                            if (a.complete && (0 === a.src.indexOf("data:image/") && (a.width = b.width || a.width || 0, a.height = b.height || a.height || 0), a.width + a.height)) {
                                var d = document.createElement("canvas"), c = d.getContext("2d");
                                d.width = a.width;
                                d.height = a.height;
                                c.drawImage(a, 0, 0);
                                b.src = d.toDataURL("image/jpeg")
                            }
                            --k || f(h)
                        };
                        a.src = b.url
                    }
                }

                var c, h = 0, k = 0;
                if ("undefined" != typeof b.images) for (c in b.images) b.images.hasOwnProperty(c) && a(b.images[c]);
                (b = k) || (f(h), b = void 0);
                return b
            }

            function pa(b, f, d) {
                f.each(function () {
                    var f = c(this).children(), h = 0;
                    if (c(this).is("div")) {
                        var k = Z(M(this, "background-color"), [255, 255, 255]),
                            x = Z(M(this, "border-top-color"), [0, 0, 0]),
                            q = aa(this, "border-top-width", a.jspdf.unit), e = this.getBoundingClientRect(),
                            g = this.offsetLeft * d.dw;
                        h = this.offsetTop * d.dh;
                        var l = e.width * d.dw;
                        e = e.height * d.dh;
                        d.doc.setDrawColor.apply(void 0,
                            x);
                        d.doc.setFillColor.apply(void 0, k);
                        d.doc.setLineWidth(q);
                        d.doc.rect(b.x + g, b.y + h, l, e, q ? "FD" : "F")
                    } else if (c(this).is("img") && "undefined" != typeof d.images && (k = oa(this.src), k = d.images[k], "undefined" != typeof k)) {
                        x = b.width / b.height;
                        q = this.width / this.height;
                        g = b.width;
                        l = b.height;
                        e = 19.049976 / 25.4;
                        q <= x ? (l = Math.min(b.height, this.height), g = this.width * l / this.height) : q > x && (g = Math.min(b.width, this.width), l = this.height * g / this.width);
                        g *= e;
                        l *= e;
                        l < b.height && (h = (b.height - l) / 2);
                        try {
                            d.doc.addImage(k.src, b.textPos.x,
                                b.y + h, g, l)
                        } catch (Ea) {
                        }
                        b.textPos.x += g
                    }
                    "undefined" != typeof f && 0 < f.length && pa(b, f, d)
                })
            }

            function qa(b, a, d) {
                if ("function" === typeof d.onAutotableText) d.onAutotableText(d.doc, b, a); else {
                    var f = b.textPos.x, h = b.textPos.y, k = {halign: b.styles.halign, valign: b.styles.valign};
                    if (a.length) {
                        for (a = a[0]; a.previousSibling;) a = a.previousSibling;
                        for (var x = !1, q = !1; a;) {
                            var e = a.innerText || a.textContent || "";
                            e = (e.length && " " == e[0] ? " " : "") + c.trim(e) + (1 < e.length && " " == e[e.length - 1] ? " " : "");
                            c(a).is("br") && (f = b.textPos.x, h += d.doc.internal.getFontSize());
                            c(a).is("b") ? x = !0 : c(a).is("i") && (q = !0);
                            (x || q) && d.doc.setFontType(x && q ? "bolditalic" : x ? "bold" : "italic");
                            var g = d.doc.getStringUnitWidth(e) * d.doc.internal.getFontSize();
                            if (g) {
                                if ("linebreak" === b.styles.overflow && f > b.textPos.x && f + g > b.textPos.x + b.width) {
                                    if (0 <= ".,!%*;:=-".indexOf(e.charAt(0))) {
                                        var l = e.charAt(0);
                                        g = d.doc.getStringUnitWidth(l) * d.doc.internal.getFontSize();
                                        f + g <= b.textPos.x + b.width && (d.doc.autoTableText(l, f, h, k), e = e.substring(1, e.length));
                                        g = d.doc.getStringUnitWidth(e) * d.doc.internal.getFontSize()
                                    }
                                    f =
                                        b.textPos.x;
                                    h += d.doc.internal.getFontSize()
                                }
                                for (; e.length && f + g > b.textPos.x + b.width;) e = e.substring(0, e.length - 1), g = d.doc.getStringUnitWidth(e) * d.doc.internal.getFontSize();
                                d.doc.autoTableText(e, f, h, k);
                                f += g
                            }
                            if (x || q) c(a).is("b") ? x = !1 : c(a).is("i") && (q = !1), d.doc.setFontType(x || q ? x ? "bold" : "italic" : "normal");
                            a = a.nextSibling
                        }
                        b.textPos.x = f;
                        b.textPos.y = h
                    } else d.doc.autoTableText(b.text, b.textPos.x, b.textPos.y, k)
                }
            }

            function ba(b, a, d) {
                return b.replace(new RegExp(a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"),
                    "g"), d)
            }

            function ea(b) {
                b = ba(b || "0", a.numbers.html.thousandsSeparator, "");
                b = ba(b, a.numbers.html.decimalMark, ".");
                return "number" === typeof b || !1 !== jQuery.isNumeric(b) ? b : !1
            }

            function Ba(b) {
                -1 < b.indexOf("%") ? (b = ea(b.replace(/%/g, "")), !1 !== b && (b /= 100)) : b = !1;
                return b
            }

            function z(b, f, d) {
                var r = "";
                if (null !== b) {
                    var h = c(b);
                    if (h[0].hasAttribute("data-tableexport-value")) var k = (k = h.data("tableexport-value")) ? k + "" : ""; else if (k = h.html(), "function" === typeof a.onCellHtmlData) k = a.onCellHtmlData(h, f, d, k); else if ("" != k) {
                        var e =
                            c.parseHTML(k), g = 0, l = 0;
                        k = "";
                        c.each(e, function () {
                            if (c(this).is("input")) k += h.find("input").eq(g++).val(); else if (c(this).is("select")) k += h.find("select option:selected").eq(l++).text(); else if ("undefined" === typeof c(this).html()) k += c(this).text(); else if (void 0 === jQuery().bootstrapTable || !0 !== c(this).hasClass("filterControl") && 0 === c(b).parents(".detail-view").length) k += c(this).html()
                        })
                    }
                    if (!0 === a.htmlContent) r = c.trim(k); else if (k && "" != k) if ("" != c(b).data("tableexport-cellformat")) {
                        var n = k.replace(/\n/g,
                            "\u2028").replace(/<br\s*[\/]?>/gi, "\u2060"), m = c("<div/>").html(n).contents();
                        e = !1;
                        n = "";
                        c.each(m.text().split("\u2028"), function (b, a) {
                            0 < b && (n += " ");
                            n += c.trim(a)
                        });
                        c.each(n.split("\u2060"), function (b, a) {
                            0 < b && (r += "\n");
                            r += c.trim(a).replace(/\u00AD/g, "")
                        });
                        if ("json" == a.type || "excel" === a.type && "xmlss" === a.excelFileFormat || !1 === a.numbers.output) e = ea(r), !1 !== e && (r = Number(e)); else if (a.numbers.html.decimalMark != a.numbers.output.decimalMark || a.numbers.html.thousandsSeparator != a.numbers.output.thousandsSeparator) if (e =
                            ea(r), !1 !== e) {
                            m = ("" + e.substr(0 > e ? 1 : 0)).split(".");
                            1 == m.length && (m[1] = "");
                            var p = 3 < m[0].length ? m[0].length % 3 : 0;
                            r = (0 > e ? "-" : "") + (a.numbers.output.thousandsSeparator ? (p ? m[0].substr(0, p) + a.numbers.output.thousandsSeparator : "") + m[0].substr(p).replace(/(\d{3})(?=\d)/g, "$1" + a.numbers.output.thousandsSeparator) : m[0]) + (m[1].length ? a.numbers.output.decimalMark + m[1] : "")
                        }
                    } else r = k;
                    !0 === a.escape && (r = escape(r));
                    "function" === typeof a.onCellData && (r = a.onCellData(h, f, d, r))
                }
                return r
            }

            function Ca(b, a, d) {
                return a + "-" + d.toLowerCase()
            }

            function Z(b, a) {
                (b = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.exec(b)) && (a = [parseInt(b[1]), parseInt(b[2]), parseInt(b[3])]);
                return a
            }

            function ra(b) {
                var a = M(b, "text-align"), d = M(b, "font-weight"), r = M(b, "font-style"), h = "";
                "start" == a && (a = "rtl" == M(b, "direction") ? "right" : "left");
                700 <= d && (h = "bold");
                "italic" == r && (h += r);
                "" === h && (h = "normal");
                a = {
                    style: {
                        align: a,
                        bcolor: Z(M(b, "background-color"), [255, 255, 255]),
                        color: Z(M(b, "color"), [0, 0, 0]),
                        fstyle: h
                    }, colspan: parseInt(c(b).attr("colspan")) || 0, rowspan: parseInt(c(b).attr("rowspan")) ||
                        0
                };
                null !== b && (b = b.getBoundingClientRect(), a.rect = {width: b.width, height: b.height});
                return a
            }

            function M(b, a) {
                try {
                    return window.getComputedStyle ? (a = a.replace(/([a-z])([A-Z])/, Ca), window.getComputedStyle(b, null).getPropertyValue(a)) : b.currentStyle ? b.currentStyle[a] : b.style[a]
                } catch (d) {
                }
                return ""
            }

            function aa(b, a, d) {
                a = M(b, a).match(/\d+/);
                if (null !== a) {
                    a = a[0];
                    b = b.parentElement;
                    var f = document.createElement("div");
                    f.style.overflow = "hidden";
                    f.style.visibility = "hidden";
                    b.appendChild(f);
                    f.style.width = 100 + d;
                    d = 100 /
                        f.offsetWidth;
                    b.removeChild(f);
                    return a * d
                }
                return 0
            }

            function fa() {
                if (!(this instanceof fa)) return new fa;
                this.SheetNames = [];
                this.Sheets = {}
            }

            function sa(b) {
                for (var a = new ArrayBuffer(b.length), d = new Uint8Array(a), c = 0; c != b.length; ++c) d[c] = b.charCodeAt(c) & 255;
                return a
            }

            function Da(b) {
                for (var a = {}, c = {
                    s: {c: 1E7, r: 1E7},
                    e: {c: 0, r: 0}
                }, e = 0; e != b.length; ++e) for (var h = 0; h != b[e].length; ++h) {
                    c.s.r > e && (c.s.r = e);
                    c.s.c > h && (c.s.c = h);
                    c.e.r < e && (c.e.r = e);
                    c.e.c < h && (c.e.c = h);
                    var k = {v: b[e][h]};
                    if (null !== k.v) {
                        var g = XLSX.utils.encode_cell({
                            c: h,
                            r: e
                        });
                        if ("number" === typeof k.v) k.t = "n"; else if ("boolean" === typeof k.v) k.t = "b"; else if (k.v instanceof Date) {
                            k.t = "n";
                            k.z = XLSX.SSF._table[14];
                            var q = k;
                            var l = (Date.parse(k.v) - new Date(Date.UTC(1899, 11, 30))) / 864E5;
                            q.v = l
                        } else k.t = "s";
                        a[g] = k
                    }
                }
                1E7 > c.s.c && (a["!ref"] = XLSX.utils.encode_range(c));
                return a
            }

            function oa(b) {
                var a = 0, c;
                if (0 === b.length) return a;
                var e = 0;
                for (c = b.length; e < c; e++) {
                    var h = b.charCodeAt(e);
                    a = (a << 5) - a + h;
                    a |= 0
                }
                return a
            }

            function H(a, c, d) {
                var b = window.navigator.userAgent;
                if (!1 !== a && window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(new Blob([d]),
                    a); else if (!1 !== a && (0 < b.indexOf("MSIE ") || b.match(/Trident.*rv\:11\./))) {
                    if (c = document.createElement("iframe")) document.body.appendChild(c), c.setAttribute("style", "display:none"), c.contentDocument.open("txt/html", "replace"), c.contentDocument.write(d), c.contentDocument.close(), c.focus(), c.contentDocument.execCommand("SaveAs", !0, a), document.body.removeChild(c)
                } else {
                    var h = document.createElement("a");
                    if (h) {
                        var f = null;
                        h.style.display = "none";
                        !1 !== a ? h.download = a : h.target = "_blank";
                        "object" == typeof d ? (window.URL =
                            window.URL || window.webkitURL, f = window.URL.createObjectURL(d), h.href = f) : 0 <= c.toLowerCase().indexOf("base64,") ? h.href = c + L(d) : h.href = c + encodeURIComponent(d);
                        document.body.appendChild(h);
                        if (document.createEvent) null === ca && (ca = document.createEvent("MouseEvents")), ca.initEvent("click", !0, !1), h.dispatchEvent(ca); else if (document.createEventObject) h.fireEvent("onclick"); else if ("function" == typeof h.onclick) h.onclick();
                        setTimeout(function () {
                            f && window.URL.revokeObjectURL(f);
                            document.body.removeChild(h)
                        }, 100)
                    }
                }
            }

            function L(a) {
                var b, c = "", e = 0;
                if ("string" === typeof a) {
                    a = a.replace(/\x0d\x0a/g, "\n");
                    var h = "";
                    for (b = 0; b < a.length; b++) {
                        var k = a.charCodeAt(b);
                        128 > k ? h += String.fromCharCode(k) : (127 < k && 2048 > k ? h += String.fromCharCode(k >> 6 | 192) : (h += String.fromCharCode(k >> 12 | 224), h += String.fromCharCode(k >> 6 & 63 | 128)), h += String.fromCharCode(k & 63 | 128))
                    }
                    a = h
                }
                for (; e < a.length;) {
                    var g = a.charCodeAt(e++);
                    h = a.charCodeAt(e++);
                    b = a.charCodeAt(e++);
                    k = g >> 2;
                    g = (g & 3) << 4 | h >> 4;
                    var q = (h & 15) << 2 | b >> 6;
                    var l = b & 63;
                    isNaN(h) ? q = l = 64 : isNaN(b) && (l = 64);
                    c = c +
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(q) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l)
                }
                return c
            }

            var a = {
                consoleLog: !1,
                csvEnclosure: '"',
                csvSeparator: ",",
                csvUseBOM: !0,
                displayTableName: !1,
                escape: !1,
                excelFileFormat: "xlshtml",
                excelRTL: !1,
                excelstyles: [],
                fileName: "tableExport",
                htmlContent: !1,
                ignoreColumn: [],
                ignoreRow: [],
                jsonScope: "all",
                jspdf: {
                    orientation: "p",
                    unit: "pt",
                    format: "a4",
                    margins: {left: 20, right: 10, top: 10, bottom: 10},
                    onDocCreated: null,
                    autotable: {
                        styles: {
                            cellPadding: 2,
                            rowHeight: 12,
                            fontSize: 8,
                            fillColor: 255,
                            textColor: 50,
                            fontStyle: "normal",
                            overflow: "ellipsize",
                            halign: "left",
                            valign: "middle"
                        },
                        headerStyles: {fillColor: [52, 73, 94], textColor: 255, fontStyle: "bold", halign: "center"},
                        alternateRowStyles: {fillColor: 245},
                        tableExport: {
                            doc: null, onAfterAutotable: null, onBeforeAutotable: null, onAutotableText: null,
                            onTable: null, outputImages: !0
                        }
                    }
                },
                numbers: {
                    html: {decimalMark: ".", thousandsSeparator: ","},
                    output: {decimalMark: ".", thousandsSeparator: ","}
                },
                onCellData: null,
                onCellHtmlData: null,
                onIgnoreRow: null,
                onMsoNumberFormat: null,
                outputMode: "file",
                pdfmake: {
                    enabled: !1,
                    docDefinition: {pageOrientation: "portrait", defaultStyle: {font: "Roboto"}},
                    fonts: {}
                },
                tbodySelector: "tr",
                tfootSelector: "tr",
                theadSelector: "tr",
                tableName: "Table",
                type: "csv",
                worksheetName: ""
            }, v = this, ca = null, p = [], t = [], l = 0, m = "", Q = [], G = [], K = [], R = !1;
            c.extend(!0,
                a, g);
            Q = O(v);
            if ("csv" == a.type || "tsv" == a.type || "txt" == a.type) {
                var I = "", U = 0;
                G = [];
                l = 0;
                var ha = function (b, f, d) {
                    b.each(function () {
                        m = "";
                        B(this, f, l, d + b.length, function (b, c, f) {
                            var h = m, d = "";
                            if (null !== b) if (b = z(b, c, f), c = null === b || "" === b ? "" : b.toString(), "tsv" == a.type) b instanceof Date && b.toLocaleString(), d = ba(c, "\t", " "); else if (b instanceof Date) d = a.csvEnclosure + b.toLocaleString() + a.csvEnclosure; else if (d = ba(c, a.csvEnclosure, a.csvEnclosure + a.csvEnclosure), 0 <= d.indexOf(a.csvSeparator) || /[\r\n ]/g.test(d)) d = a.csvEnclosure +
                                d + a.csvEnclosure;
                            m = h + (d + ("tsv" == a.type ? "\t" : a.csvSeparator))
                        });
                        m = c.trim(m).substring(0, m.length - 1);
                        0 < m.length && (0 < I.length && (I += "\n"), I += m);
                        l++
                    });
                    return b.length
                };
                U += ha(c(v).find("thead").first().find(a.theadSelector), "th,td", U);
                C(c(v), "tbody").each(function () {
                    U += ha(D(c(this), a.tbodySelector), "td,th", U)
                });
                a.tfootSelector.length && ha(c(v).find("tfoot").first().find(a.tfootSelector), "td,th", U);
                I += "\n";
                !0 === a.consoleLog && console.log(I);
                if ("string" === a.outputMode) return I;
                if ("base64" === a.outputMode) return L(I);
                if ("window" === a.outputMode) {
                    H(!1, "data:text/" + ("csv" == a.type ? "csv" : "plain") + ";charset=utf-8,", I);
                    return
                }
                try {
                    var A = new Blob([I], {type: "text/" + ("csv" == a.type ? "csv" : "plain") + ";charset=utf-8"});
                    saveAs(A, a.fileName + "." + a.type, "csv" != a.type || !1 === a.csvUseBOM)
                } catch (b) {
                    H(a.fileName + "." + a.type, "data:text/" + ("csv" == a.type ? "csv" : "plain") + ";charset=utf-8," + ("csv" == a.type && a.csvUseBOM ? "\ufeff" : ""), I)
                }
            } else if ("sql" == a.type) {
                l = 0;
                G = [];
                var w = "INSERT INTO `" + a.tableName + "` (";
                p = c(v).find("thead").first().find(a.theadSelector);
                p.each(function () {
                    B(this, "th,td", l, p.length, function (a, c, d) {
                        w += "'" + z(a, c, d) + "',"
                    });
                    l++;
                    w = c.trim(w);
                    w = c.trim(w).substring(0, w.length - 1)
                });
                w += ") VALUES ";
                t = u(c(v));
                c(t).each(function () {
                    m = "";
                    B(this, "td,th", l, p.length + t.length, function (a, c, d) {
                        m += "'" + z(a, c, d) + "',"
                    });
                    3 < m.length && (w += "(" + m, w = c.trim(w).substring(0, w.length - 1), w += "),");
                    l++
                });
                w = c.trim(w).substring(0, w.length - 1);
                w += ";";
                !0 === a.consoleLog && console.log(w);
                if ("string" === a.outputMode) return w;
                if ("base64" === a.outputMode) return L(w);
                try {
                    A = new Blob([w],
                        {type: "text/plain;charset=utf-8"}), saveAs(A, a.fileName + ".sql")
                } catch (b) {
                    H(a.fileName + ".sql", "data:application/sql;charset=utf-8,", w)
                }
            } else if ("json" == a.type) {
                var S = [];
                G = [];
                p = c(v).find("thead").first().find(a.theadSelector);
                p.each(function () {
                    var a = [];
                    B(this, "th,td", l, p.length, function (b, c, e) {
                        a.push(z(b, c, e))
                    });
                    S.push(a)
                });
                var ia = [];
                t = u(c(v));
                c(t).each(function () {
                    var a = {}, f = 0;
                    B(this, "td,th", l, p.length + t.length, function (b, c, h) {
                        S.length ? a[S[S.length - 1][f]] = z(b, c, h) : a[f] = z(b, c, h);
                        f++
                    });
                    !1 === c.isEmptyObject(a) &&
                    ia.push(a);
                    l++
                });
                g = "";
                g = "head" == a.jsonScope ? JSON.stringify(S) : "data" == a.jsonScope ? JSON.stringify(ia) : JSON.stringify({
                    header: S,
                    data: ia
                });
                !0 === a.consoleLog && console.log(g);
                if ("string" === a.outputMode) return g;
                if ("base64" === a.outputMode) return L(g);
                try {
                    A = new Blob([g], {type: "application/json;charset=utf-8"}), saveAs(A, a.fileName + ".json")
                } catch (b) {
                    H(a.fileName + ".json", "data:application/json;charset=utf-8;base64,", g)
                }
            } else if ("xml" === a.type) {
                l = 0;
                G = [];
                var J = '<?xml version="1.0" encoding="utf-8"?>';
                J += "<tabledata><fields>";
                p = c(v).find("thead").first().find(a.theadSelector);
                p.each(function () {
                    B(this, "th,td", l, p.length, function (a, c, d) {
                        J += "<field>" + z(a, c, d) + "</field>"
                    });
                    l++
                });
                J += "</fields><data>";
                var ta = 1;
                t = u(c(v));
                c(t).each(function () {
                    var a = 1;
                    m = "";
                    B(this, "td,th", l, p.length + t.length, function (b, c, e) {
                        m += "<column-" + a + ">" + z(b, c, e) + "</column-" + a + ">";
                        a++
                    });
                    0 < m.length && "<column-1></column-1>" != m && (J += '<row id="' + ta + '">' + m + "</row>", ta++);
                    l++
                });
                J += "</data></tabledata>";
                !0 === a.consoleLog && console.log(J);
                if ("string" === a.outputMode) return J;
                if ("base64" === a.outputMode) return L(J);
                try {
                    A = new Blob([J], {type: "application/xml;charset=utf-8"}), saveAs(A, a.fileName + ".xml")
                } catch (b) {
                    H(a.fileName + ".xml", "data:application/xml;charset=utf-8;base64,", J)
                }
            } else if ("excel" === a.type && "xmlss" === a.excelFileFormat) {
                var ja = [], F = [];
                c(v).filter(function () {
                    return P(c(this))
                }).each(function () {
                    function b(a, b, f) {
                        var h = [];
                        c(a).each(function () {
                            var b = 0, d = 0;
                            m = "";
                            B(this, "td,th", l, f + a.length, function (a, f, k) {
                                if (null !== a) {
                                    var e = "";
                                    f = z(a, f, k);
                                    k = "String";
                                    if (!1 !== jQuery.isNumeric(f)) k =
                                        "Number"; else {
                                        var g = Ba(f);
                                        !1 !== g && (f = g, k = "Number", e += ' ss:StyleID="pct1"')
                                    }
                                    "Number" !== k && (f = f.replace(/\n/g, "<br>"));
                                    g = parseInt(a.getAttribute("colspan"));
                                    a = parseInt(a.getAttribute("rowspan"));
                                    h.forEach(function (a) {
                                        if (l >= a.s.r && l <= a.e.r && d >= a.s.c && d <= a.e.c) for (var c = 0; c <= a.e.c - a.s.c; ++c) d++, b++
                                    });
                                    if (a || g) a = a || 1, g = g || 1, h.push({
                                        s: {r: l, c: d},
                                        e: {r: l + a - 1, c: d + g - 1}
                                    });
                                    1 < g && (e += ' ss:MergeAcross="' + (g - 1) + '"', d += g - 1);
                                    1 < a && (e += ' ss:MergeDown="' + (a - 1) + '" ss:StyleID="rsp1"');
                                    0 < b && (e += ' ss:Index="' + (d + 1) + '"', b = 0);
                                    m += "<Cell" + e + '><Data ss:Type="' + k + '">' + c("<div />").text(f).html() + "</Data></Cell>\r";
                                    d++
                                }
                            });
                            0 < m.length && (E += '<Row ss:AutoFitHeight="0">\r' + m + "</Row>\r");
                            l++
                        });
                        return a.length
                    }

                    var f = c(this), d = "";
                    "string" === typeof a.worksheetName && a.worksheetName.length ? d = a.worksheetName + " " + (F.length + 1) : "undefined" !== typeof a.worksheetName[F.length] && (d = a.worksheetName[F.length]);
                    d.length || (d = f.find("caption").text() || "");
                    d.length || (d = "Table " + (F.length + 1));
                    d = d.replace(/[\\\/[\]*:?'"]/g, "").substring(0, 31).trim();
                    F.push(c("<div />").text(d).html());
                    K = f.find("tr, th, td").filter(":hidden");
                    R = 0 < K.length;
                    l = 0;
                    Q = O(this);
                    E = "<Table>\r";
                    d = 0;
                    d += b(f.find("thead").first().find(a.theadSelector), "th,td", d);
                    b(u(f), "td,th", d);
                    E += "</Table>\r";
                    ja.push(E);
                    !0 === a.consoleLog && console.log(E)
                });
                g = {};
                for (var y = {}, n, N, T = 0, Y = F.length; T < Y; T++) n = F[T], N = g[n], N = g[n] = null == N ? 1 : N + 1, 2 == N && (F[y[n]] = F[y[n]].substring(0, 29) + "-1"), 1 < g[n] ? F[T] = F[T].substring(0, 29) + "-" + g[n] : y[n] = T;
                g = '<?xml version="1.0" encoding="UTF-8"?>\r<?mso-application progid="Excel.Sheet"?>\r<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"\r xmlns:o="urn:schemas-microsoft-com:office:office"\r xmlns:x="urn:schemas-microsoft-com:office:excel"\r xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"\r xmlns:html="http://www.w3.org/TR/REC-html40">\r<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">\r  <Created>' +
                    (new Date).toISOString() + '</Created>\r</DocumentProperties>\r<OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office">\r  <AllowPNG/>\r</OfficeDocumentSettings>\r<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">\r  <WindowHeight>9000</WindowHeight>\r  <WindowWidth>13860</WindowWidth>\r  <WindowTopX>0</WindowTopX>\r  <WindowTopY>0</WindowTopY>\r  <ProtectStructure>False</ProtectStructure>\r  <ProtectWindows>False</ProtectWindows>\r</ExcelWorkbook>\r<Styles>\r  <Style ss:ID="Default" ss:Name="Normal">\r    <Alignment ss:Vertical="Bottom"/>\r    <Borders/>\r    <Font/>\r    <Interior/>\r    <NumberFormat/>\r    <Protection/>\r  </Style>\r  <Style ss:ID="rsp1">\r    <Alignment ss:Vertical="Center"/>\r  </Style>\r  <Style ss:ID="pct1">\r    <NumberFormat ss:Format="Percent"/>\r  </Style>\r</Styles>\r';
                for (y = 0; y < ja.length; y++) g += '<Worksheet ss:Name="' + F[y] + '" ss:RightToLeft="' + (a.excelRTL ? "1" : "0") + '">\r' + ja[y], g = a.excelRTL ? g + '<WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">\r<DisplayRightToLeft/>\r</WorksheetOptions>\r' : g + '<WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel"/>\r', g += "</Worksheet>\r";
                g += "</Workbook>\r";
                !0 === a.consoleLog && console.log(g);
                if ("string" === a.outputMode) return g;
                if ("base64" === a.outputMode) return L(g);
                try {
                    A = new Blob([g], {type: "application/xml;charset=utf-8"}),
                        saveAs(A, a.fileName + ".xml")
                } catch (b) {
                    H(a.fileName + ".xml", "data:application/xml;charset=utf-8;base64,", g)
                }
            } else if ("excel" == a.type || "xls" == a.type || "word" == a.type || "doc" == a.type) {
                g = "excel" == a.type || "xls" == a.type ? "excel" : "word";
                y = "excel" == g ? "xls" : "doc";
                n = 'xmlns:x="urn:schemas-microsoft-com:office:' + g + '"';
                var E = "", V = "";
                c(v).filter(function () {
                    return P(c(this))
                }).each(function () {
                    var b = c(this);
                    "" === V && (V = a.worksheetName || b.find("caption").text() || "Table", V = V.replace(/[\\\/[\]*:?'"]/g, "").substring(0, 31).trim());
                    K = b.find("tr, th, td").filter(":hidden");
                    R = 0 < K.length;
                    l = 0;
                    G = [];
                    Q = O(this);
                    E += "<table><thead>";
                    p = b.find("thead").first().find(a.theadSelector);
                    p.each(function () {
                        m = "";
                        B(this, "th,td", l, p.length, function (b, d, e) {
                            if (null !== b) {
                                var h = "";
                                m += "<th";
                                for (var f in a.excelstyles) if (a.excelstyles.hasOwnProperty(f)) {
                                    var g = c(b).css(a.excelstyles[f]);
                                    "" !== g && "0px none rgb(0, 0, 0)" != g && "rgba(0, 0, 0, 0)" != g && (h += "" === h ? 'style="' : ";", h += a.excelstyles[f] + ":" + g)
                                }
                                "" !== h && (m += " " + h + '"');
                                c(b).is("[colspan]") && (m += ' colspan="' +
                                    c(b).attr("colspan") + '"');
                                c(b).is("[rowspan]") && (m += ' rowspan="' + c(b).attr("rowspan") + '"');
                                m += ">" + z(b, d, e) + "</th>"
                            }
                        });
                        0 < m.length && (E += "<tr>" + m + "</tr>");
                        l++
                    });
                    E += "</thead><tbody>";
                    t = u(b);
                    c(t).each(function () {
                        var b = c(this);
                        m = "";
                        B(this, "td,th", l, p.length + t.length, function (d, f, h) {
                            if (null !== d) {
                                var k = z(d, f, h), e = "", g = c(d).data("tableexport-msonumberformat");
                                "undefined" == typeof g && "function" === typeof a.onMsoNumberFormat && (g = a.onMsoNumberFormat(d, f, h));
                                "undefined" != typeof g && "" !== g && (e = "style=\"mso-number-format:'" +
                                    g + "'");
                                for (var l in a.excelstyles) a.excelstyles.hasOwnProperty(l) && (g = c(d).css(a.excelstyles[l]), "" === g && (g = b.css(a.excelstyles[l])), "" !== g && "0px none rgb(0, 0, 0)" != g && "rgba(0, 0, 0, 0)" != g && (e += "" === e ? 'style="' : ";", e += a.excelstyles[l] + ":" + g));
                                m += "<td";
                                "" !== e && (m += " " + e + '"');
                                c(d).is("[colspan]") && (m += ' colspan="' + c(d).attr("colspan") + '"');
                                c(d).is("[rowspan]") && (m += ' rowspan="' + c(d).attr("rowspan") + '"');
                                "string" === typeof k && "" != k && (k = k.replace(/\n/g, "<br>"));
                                m += ">" + k + "</td>"
                            }
                        });
                        0 < m.length && (E += "<tr>" +
                            m + "</tr>");
                        l++
                    });
                    a.displayTableName && (E += "<tr><td></td></tr><tr><td></td></tr><tr><td>" + z(c("<p>" + a.tableName + "</p>")) + "</td></tr>");
                    E += "</tbody></table>";
                    !0 === a.consoleLog && console.log(E)
                });
                n = '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' + n + ' xmlns="http://www.w3.org/TR/REC-html40">' + ('<meta http-equiv="content-type" content="application/vnd.ms-' + g + '; charset=UTF-8">') + "<head>";
                "excel" === g && (n += "\x3c!--[if gte mso 9]>", n += "<xml>", n += "<x:ExcelWorkbook>", n += "<x:ExcelWorksheets>", n += "<x:ExcelWorksheet>",
                    n += "<x:Name>", n += V, n += "</x:Name>", n += "<x:WorksheetOptions>", n += "<x:DisplayGridlines/>", a.excelRTL && (n += "<x:DisplayRightToLeft/>"), n += "</x:WorksheetOptions>", n += "</x:ExcelWorksheet>", n += "</x:ExcelWorksheets>", n += "</x:ExcelWorkbook>", n += "</xml>", n += "<![endif]--\x3e");
                n += "<style>br {mso-data-placement:same-cell;}</style>";
                n += "</head>";
                n += "<body>";
                n += E;
                n += "</body>";
                n += "</html>";
                !0 === a.consoleLog && console.log(n);
                if ("string" === a.outputMode) return n;
                if ("base64" === a.outputMode) return L(n);
                try {
                    A = new Blob([n],
                        {type: "application/vnd.ms-" + a.type}), saveAs(A, a.fileName + "." + y)
                } catch (b) {
                    H(a.fileName + "." + y, "data:application/vnd.ms-" + g + ";base64,", n)
                }
            } else if ("xlsx" == a.type) {
                var ua = [], ka = [];
                l = 0;
                t = c(v).find("thead").first().find(a.theadSelector);
                t.push.apply(t, u(c(v)));
                c(t).each(function () {
                    var b = [];
                    B(this, "th,td", l, t.length, function (c, d, e) {
                        if ("undefined" !== typeof c && null !== c) {
                            e = z(c, d, e);
                            d = parseInt(c.getAttribute("colspan"));
                            c = parseInt(c.getAttribute("rowspan"));
                            ka.forEach(function (a) {
                                if (l >= a.s.r && l <= a.e.r && b.length >=
                                    a.s.c && b.length <= a.e.c) for (var c = 0; c <= a.e.c - a.s.c; ++c) b.push(null)
                            });
                            if (c || d) d = d || 1, ka.push({
                                s: {r: l, c: b.length},
                                e: {r: l + (c || 1) - 1, c: b.length + d - 1}
                            });
                            "function" !== typeof a.onCellData && "" !== e && e == +e && (e = +e);
                            b.push("" !== e ? e : null);
                            if (d) for (c = 0; c < d - 1; ++c) b.push(null)
                        }
                    });
                    ua.push(b);
                    l++
                });
                g = new fa;
                y = Da(ua);
                y["!merges"] = ka;
                g.SheetNames.push(a.worksheetName);
                g.Sheets[a.worksheetName] = y;
                g = XLSX.write(g, {bookType: a.type, bookSST: !1, type: "binary"});
                try {
                    A = new Blob([sa(g)], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"}),
                        saveAs(A, a.fileName + "." + a.type)
                } catch (b) {
                    H(a.fileName + "." + a.type, "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8,", sa(g))
                }
            } else if ("png" == a.type) html2canvas(c(v)[0]).then(function (b) {
                b = b.toDataURL();
                for (var c = atob(b.substring(22)), d = new ArrayBuffer(c.length), e = new Uint8Array(d), h = 0; h < c.length; h++) e[h] = c.charCodeAt(h);
                !0 === a.consoleLog && console.log(c);
                if ("string" === a.outputMode) return c;
                if ("base64" === a.outputMode) return L(b);
                if ("window" === a.outputMode) window.open(b);
                else try {
                    A = new Blob([d], {type: "image/png"}), saveAs(A, a.fileName + ".png")
                } catch (k) {
                    H(a.fileName + ".png", "data:image/png,", A)
                }
            }); else if ("pdf" == a.type) if (!0 === a.pdfmake.enabled) {
                g = [];
                var va = [];
                l = 0;
                G = [];
                y = function (a, e, d) {
                    var b = 0;
                    c(a).each(function () {
                        var a = [];
                        B(this, e, l, d, function (b, c, d) {
                            if ("undefined" !== typeof b && null !== b) {
                                var h = parseInt(b.getAttribute("colspan")), e = parseInt(b.getAttribute("rowspan"));
                                b = z(b, c, d) || " ";
                                1 < h || 1 < e ? a.push({colSpan: h || 1, rowSpan: e || 1, text: b}) : a.push(b)
                            } else a.push(" ")
                        });
                        a.length &&
                        va.push(a);
                        b < a.length && (b = a.length);
                        l++
                    });
                    return b
                };
                p = c(this).find("thead").first().find(a.theadSelector);
                n = y(p, "th,td", p.length);
                for (N = g.length; N < n; N++) g.push("*");
                t = u(c(this));
                y(t, "th,td", p.length + t.length);
                g = {content: [{table: {headerRows: p.length, widths: g, body: va}}]};
                c.extend(!0, g, a.pdfmake.docDefinition);
                pdfMake.fonts = {
                    Roboto: {
                        normal: "Roboto-Regular.ttf",
                        bold: "Roboto-Medium.ttf",
                        italics: "Roboto-Italic.ttf",
                        bolditalics: "Roboto-MediumItalic.ttf"
                    }
                };
                c.extend(!0, pdfMake.fonts, a.pdfmake.fonts);
                pdfMake.createPdf(g).getBuffer(function (b) {
                    try {
                        var c =
                            new Blob([b], {type: "application/pdf"});
                        saveAs(c, a.fileName + ".pdf")
                    } catch (d) {
                        H(a.fileName + ".pdf", "data:application/pdf;base64,", b)
                    }
                })
            } else if (!1 === a.jspdf.autotable) {
                g = {
                    dim: {w: aa(c(v).first().get(0), "width", "mm"), h: aa(c(v).first().get(0), "height", "mm")},
                    pagesplit: !1
                };
                var wa = new jsPDF(a.jspdf.orientation, a.jspdf.unit, a.jspdf.format);
                wa.addHTML(c(v).first(), a.jspdf.margins.left, a.jspdf.margins.top, g, function () {
                    la(wa, !1)
                })
            } else {
                var e = a.jspdf.autotable.tableExport;
                if ("string" === typeof a.jspdf.format &&
                    "bestfit" === a.jspdf.format.toLowerCase()) {
                    var W = {
                        a0: [2383.94, 3370.39],
                        a1: [1683.78, 2383.94],
                        a2: [1190.55, 1683.78],
                        a3: [841.89, 1190.55],
                        a4: [595.28, 841.89]
                    }, da = "", X = "", xa = 0;
                    c(v).each(function () {
                        if (P(c(this))) {
                            var a = aa(c(this).get(0), "width", "pt");
                            if (a > xa) {
                                a > W.a0[0] && (da = "a0", X = "l");
                                for (var e in W) W.hasOwnProperty(e) && W[e][1] > a && (da = e, X = "l", W[e][0] > a && (X = "p"));
                                xa = a
                            }
                        }
                    });
                    a.jspdf.format = "" === da ? "a4" : da;
                    a.jspdf.orientation = "" === X ? "w" : X
                }
                if (null == e.doc && (e.doc = new jsPDF(a.jspdf.orientation, a.jspdf.unit, a.jspdf.format),
                "function" === typeof a.jspdf.onDocCreated)) a.jspdf.onDocCreated(e.doc);
                !0 === e.outputImages && (e.images = {});
                "undefined" != typeof e.images && (c(v).filter(function () {
                    return P(c(this))
                }).each(function () {
                    var b = 0;
                    G = [];
                    K = c(this).find("tr, th, td").filter(":hidden");
                    R = 0 < K.length;
                    p = c(this).find("thead").find(a.theadSelector);
                    t = u(c(this));
                    c(t).each(function () {
                        B(this, "td,th", p.length + b, p.length + t.length, function (a) {
                            if ("undefined" !== typeof a && null !== a) {
                                var b = c(a).children();
                                "undefined" != typeof b && 0 < b.length && na(a,
                                    b, e)
                            }
                        });
                        b++
                    })
                }), p = [], t = []);
                Aa(e, function () {
                    c(v).filter(function () {
                        return P(c(this))
                    }).each(function () {
                        var b;
                        l = 0;
                        G = [];
                        K = c(this).find("tr, th, td").filter(":hidden");
                        R = 0 < K.length;
                        Q = O(this);
                        e.columns = [];
                        e.rows = [];
                        e.rowoptions = {};
                        if ("function" === typeof e.onTable && !1 === e.onTable(c(this), a)) return !0;
                        a.jspdf.autotable.tableExport = null;
                        var f = c.extend(!0, {}, a.jspdf.autotable);
                        a.jspdf.autotable.tableExport = e;
                        f.margin = {};
                        c.extend(!0, f.margin, a.jspdf.margins);
                        f.tableExport = e;
                        "function" !== typeof f.beforePageContent &&
                        (f.beforePageContent = function (a) {
                            1 == a.pageCount && a.table.rows.concat(a.table.headerRow).forEach(function (b) {
                                0 < b.height && (b.height += (2 - 1.15) / 2 * b.styles.fontSize, a.table.height += (2 - 1.15) / 2 * b.styles.fontSize)
                            })
                        });
                        "function" !== typeof f.createdHeaderCell && (f.createdHeaderCell = function (a, b) {
                            a.styles = c.extend({}, b.row.styles);
                            if ("undefined" != typeof e.columns[b.column.dataKey]) {
                                var d = e.columns[b.column.dataKey];
                                if ("undefined" != typeof d.rect) {
                                    a.contentWidth = d.rect.width;
                                    if ("undefined" == typeof e.heightRatio ||
                                        0 === e.heightRatio) {
                                        var h = b.row.raw[b.column.dataKey].rowspan ? b.row.raw[b.column.dataKey].rect.height / b.row.raw[b.column.dataKey].rowspan : b.row.raw[b.column.dataKey].rect.height;
                                        e.heightRatio = a.styles.rowHeight / h
                                    }
                                    h = b.row.raw[b.column.dataKey].rect.height * e.heightRatio;
                                    h > a.styles.rowHeight && (a.styles.rowHeight = h)
                                }
                                "undefined" != typeof d.style && !0 !== d.style.hidden && (a.styles.halign = d.style.align, "inherit" === f.styles.fillColor && (a.styles.fillColor = d.style.bcolor), "inherit" === f.styles.textColor && (a.styles.textColor =
                                    d.style.color), "inherit" === f.styles.fontStyle && (a.styles.fontStyle = d.style.fstyle))
                            }
                        });
                        "function" !== typeof f.createdCell && (f.createdCell = function (a, b) {
                            b = e.rowoptions[b.row.index + ":" + b.column.dataKey];
                            "undefined" != typeof b && "undefined" != typeof b.style && !0 !== b.style.hidden && (a.styles.halign = b.style.align, "inherit" === f.styles.fillColor && (a.styles.fillColor = b.style.bcolor), "inherit" === f.styles.textColor && (a.styles.textColor = b.style.color), "inherit" === f.styles.fontStyle && (a.styles.fontStyle = b.style.fstyle))
                        });
                        "function" !== typeof f.drawHeaderCell && (f.drawHeaderCell = function (a, b) {
                            var c = e.columns[b.column.dataKey];
                            return (!0 !== c.style.hasOwnProperty("hidden") || !0 !== c.style.hidden) && 0 <= c.rowIndex ? ma(a, b, c) : !1
                        });
                        "function" !== typeof f.drawCell && (f.drawCell = function (a, b) {
                            var c = e.rowoptions[b.row.index + ":" + b.column.dataKey];
                            if (ma(a, b, c)) if (e.doc.rect(a.x, a.y, a.width, a.height, a.styles.fillStyle), "undefined" != typeof c && "undefined" != typeof c.kids && 0 < c.kids.length) {
                                b = a.height / c.rect.height;
                                if (b > e.dh || "undefined" ==
                                    typeof e.dh) e.dh = b;
                                e.dw = a.width / c.rect.width;
                                b = a.textPos.y;
                                pa(a, c.kids, e);
                                a.textPos.y = b;
                                qa(a, c.kids, e)
                            } else qa(a, {}, e);
                            return !1
                        });
                        e.headerrows = [];
                        p = c(this).find("thead").find(a.theadSelector);
                        p.each(function () {
                            b = 0;
                            e.headerrows[l] = [];
                            B(this, "th,td", l, p.length, function (a, c, d) {
                                var f = ra(a);
                                f.title = z(a, c, d);
                                f.key = b++;
                                f.rowIndex = l;
                                e.headerrows[l].push(f)
                            });
                            l++
                        });
                        if (0 < l) for (var d = l - 1; 0 <= d;) c.each(e.headerrows[d], function () {
                            var a = this;
                            0 < d && null === this.rect && (a = e.headerrows[d - 1][this.key]);
                            null !== a && 0 <= a.rowIndex &&
                            (!0 !== a.style.hasOwnProperty("hidden") || !0 !== a.style.hidden) && e.columns.push(a)
                        }), d = 0 < e.columns.length ? -1 : d - 1;
                        var g = 0;
                        t = [];
                        t = u(c(this));
                        c(t).each(function () {
                            var a = [];
                            b = 0;
                            B(this, "td,th", l, p.length + t.length, function (d, f, h) {
                                if ("undefined" === typeof e.columns[b]) {
                                    var k = {title: "", key: b, style: {hidden: !0}};
                                    e.columns.push(k)
                                }
                                "undefined" !== typeof d && null !== d ? (k = ra(d), k.kids = c(d).children()) : (k = c.extend(!0, {}, e.rowoptions[g + ":" + (b - 1)]), k.colspan = -1);
                                e.rowoptions[g + ":" + b++] = k;
                                a.push(z(d, f, h))
                            });
                            a.length && (e.rows.push(a),
                                g++);
                            l++
                        });
                        if ("function" === typeof e.onBeforeAutotable) e.onBeforeAutotable(c(this), e.columns, e.rows, f);
                        e.doc.autoTable(e.columns, e.rows, f);
                        if ("function" === typeof e.onAfterAutotable) e.onAfterAutotable(c(this), f);
                        a.jspdf.autotable.startY = e.doc.autoTableEndPosY() + f.margin.top
                    });
                    la(e.doc, "undefined" != typeof e.images && !1 === jQuery.isEmptyObject(e.images));
                    "undefined" != typeof e.headerrows && (e.headerrows.length = 0);
                    "undefined" != typeof e.columns && (e.columns.length = 0);
                    "undefined" != typeof e.rows && (e.rows.length =
                        0);
                    delete e.doc;
                    e.doc = null
                })
            }
            return this
        }
    })
})(jQuery);
