/*
* bootstrap-table - v1.12.1 - 2018-03-12
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2018 zhixin wen
* Licensed MIT License
*/
!function (a) {
    "use strict";
    var b = function (b, c) {
        b.options.columnsHidden.length > 0 && a.each(b.columns, function (a, d) {
            -1 !== b.options.columnsHidden.indexOf(d.field) && d.visible !== c && b.toggleColumn(b.fieldsColumnsIndex[d.field], c, !0)
        })
    }, c = function (a) {
        (a.options.height || a.options.showFooter) && setTimeout(function () {
            a.resetView.call(a)
        }, 1)
    }, d = function (a, b, d) {
        a.options.minHeight ? b <= a.options.minWidth && d <= a.options.minHeight ? e(a) : b > a.options.minWidth && d > a.options.minHeight && f(a) : b <= a.options.minWidth ? e(a) : b > a.options.minWidth && f(a), c(a)
    }, e = function (a) {
        g(a, !1), b(a, !1)
    }, f = function (a) {
        g(a, !0), b(a, !0)
    }, g = function (a, b) {
        a.options.cardView = b, a.toggleView()
    }, h = function (a, b) {
        var c;
        return function () {
            var d = this, e = arguments, f = function () {
                c = null, a.apply(d, e)
            };
            clearTimeout(c), c = setTimeout(f, b)
        }
    };
    a.extend(a.fn.bootstrapTable.defaults, {
        mobileResponsive: !1,
        minWidth: 562,
        minHeight: void 0,
        heightThreshold: 100,
        checkOnInit: !0,
        columnsHidden: []
    });
    var i = a.fn.bootstrapTable.Constructor, j = i.prototype.init;
    i.prototype.init = function () {
        if (j.apply(this, Array.prototype.slice.apply(arguments)), this.options.mobileResponsive && this.options.minWidth) {
            this.options.minWidth < 100 && this.options.resizable && (console.log("The minWidth when the resizable extension is active should be greater or equal than 100"), this.options.minWidth = 100);
            var b = this, c = {width: a(window).width(), height: a(window).height()};
            if (a(window).on("resize orientationchange", h(function () {
                var e = a(this).height(), f = a(this).width();
                (Math.abs(c.height - e) > b.options.heightThreshold || c.width != f) && (d(b, f, e), c = {
                    width: f,
                    height: e
                })
            }, 200)), this.options.checkOnInit) {
                var e = a(window).height(), f = a(window).width();
                d(this, f, e), c = {width: f, height: e}
            }
        }
    }
}(jQuery);