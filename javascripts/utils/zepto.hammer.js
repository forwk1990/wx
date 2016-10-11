/**
 * Created by team on 16/2/23.
 */
(function (A) {
    if (typeof define === "function" && define.amd) {
        define(["zepto", "hammerjs"], A)
    } else {
        if (typeof exports === "object") {
            A(require("zepto"), require("hammerjs"))
        } else {
            A(Zepto, Hammer)
        }
    }
}(function (B, A) {
    function C(E, F) {
        var D = B(E);
        if (!D.data("hammer")) {
            var G = new A.Manager(D[0], F);
            G.add(new A.Tap());
            D.data("hammer", G)
        }
    }

    B.fn.hammer = function (D) {
        return this.each(function () {
            C(this, D)
        })
    };
    A.Manager.prototype.emit = (function (D) {
        return function (E, F) {
            D.call(this, E, F);
            B(this.element).trigger({type: E, gesture: F})
        }
    })(A.Manager.prototype.emit)
}));