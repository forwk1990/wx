/**
 * Created by team on 16/2/24.
 */
define([], function () {
    $.fn.setTransformPos = function (B, C) {
        switch (C) {
            case"x":
                opt = "matrix(1, 0, 0 ,1 , " + B + ",0)";
                break
        }
        this[0].style.webkitTransform = opt;
        return this
    };
    $.fn.animateTranslate3d = function (G, E, F, D, B) {
        var C = new Date().getTime();
        var H = this;
        this.doAnimateTranslate3d = function () {
            animation_slide = true;
            var I = new Date().getTime();
            var J = I - C;
            var K = G + (E - G) * J / D;
            H.setTransformPos(K, F);
            if (J >= D) {
                H.setTransformPos(E, F);
                animation_slide = false;
                B && B()
            } else {
                setTimeout(function () {
                    H.doAnimateTranslate3d()
                }, 10)
            }
        };
        this.doAnimateTranslate3d()
    };
    var A = function (B) {
        this.id = B.id;
        this.width = B.width;
        this.tempWidth = B.width;
        this.visible = B.visible || 1;
        this.height = B.height;
        this.time = B.time || 200;
        this.onchange = B.onchange;
        this.current = 0;
        this.autoSwitch = typeof(B.autoSwitch) == "undefined" ? 5000 : B.autoSwitch
    };
    A.prototype = {
        componentInit: function () {
            this.$ = $("#" + this.id);
            this.$inner = this.$.children("#banner-box-inner");
            var E = {};
            if (this.width) {
                this.width = E.width = this.width + "px"
            }
            E.height = this.height + "px";
            this.$.css(E);
            var F = this;
            var D = null;
            var C = null;
            var B = false;
            this.$.bind({
                "touchstart": function (G, H) {
                    D = {x: G.touches[0].pageX, y: G.touches[0].pageY};
                    if (F.$items) {
                        F.start(D.x)
                    }
                    B = false;
                    C = null
                }, "touchmove": function (H, I) {
                    if (!C) {
                        C = {x: H.touches[0].pageX, y: H.touches[0].pageY};
                        var G = Math.abs(C.x - D.x) > Math.abs(C.y - D.y);
                        if (G) {
                            B = true;
                            if (F.$items) {
                                F.move(C.x)
                            }
                            return false
                        } else {
                        }
                    } else {
                        C = {x: H.touches[0].pageX, y: H.touches[0].pageY};
                        if (B) {
                            if (F.$items) {
                                F.move(C.x)
                            }
                            return false
                        } else {
                        }
                    }
                }, "touchend": function (G) {
                    if (B && F.$items) {
                        F.end()
                    }
                    B = false;
                    D = null;
                    C = null
                }
            })
        }, refresh: function () {
            var B = this._itemw = this.tempWidth / this.visible, C = this.height;
            this.$items = this.$inner.children();
            if (this.$items.length < 1) {
                return
            }
            this.$inner.css({width: B * this.$items.length + "px"});
            this.$items.each(function () {
                $(this).css({"width": B + "px", "height": C + "px", "float": "left"})
            });
            if (window["carrouselTimer_" + this.id]) {
                clearTimeout(window["carrouselTimer_" + this.id])
            }
            this.nPos = -B;
            this.current = 0;
            if (!this.cloned) {
                this.cloned = true;
                this.$inner.prepend(this.$items.last().clone().addClass("cloneItem"));
                this.$inner.append(this.$items.first().clone().addClass("cloneItem"))
            } else {
                this.$items = this.$inner.children(":not(.cloneItem)")
            }
            this.$inner.css({width: B * (this.$items.length + 2) + "px"});
            this.show(0)
        }, start: function (B) {
            if (this.$items.length <= 1) {
                return
            }
            this.startPos = B;
            this.startTime = new Date().getTime()
        }, move: function (C) {
            if (this.$items.length <= 1) {
                return
            }
            this.carrouselTimer && clearTimeout(this.carrouselTimer);
            this.endPos = C;
            var B = this.endPos - this.startPos;
            this.nPos = -this._itemw * (this.current + 1) + B;
            this.$inner.setTransformPos(this.nPos, "x")
        }, end: function () {
            if (this.$items.length <= 1) {
                return
            }
            var B = this.endPos - this.startPos;
            var D = new Date().getTime() - this.startTime;
            var C = B / D;
            if (B && ((B > this._itemw / 2) || C > 0.6)) {
                var E = Math.ceil(B / this._itemw);
                this.show(this.current - E)
            } else {
                if (B && (B < -this._itemw / 2 || C < -0.6)) {
                    var E = Math.ceil(Math.abs(B) / this._itemw);
                    this.show(this.current + E)
                } else {
                    if (B) {
                        this.show(this.current)
                    }
                }
            }
            this.endPos = "undefined"
        }, show: function (B) {
            if (this.$items.length < 1) {
                return
            }
            this.current = B;
            var C = this;
            this.$inner.animateTranslate3d(this.nPos, -this._itemw * (this.current + 1), "x", this.time, function () {
                if (B < 0) {
                    C.current = C.$items.length - C.visible
                }
                if (B > C.$items.length - C.visible) {
                    C.current = 0
                }
                C.nPos = -C._itemw * (C.current + 1);
                C.$inner.setTransformPos(C.nPos, "x");
                C.onchange && C.onchange(C.current)
            });
            this.carrouselTimer && clearTimeout(this.carrouselTimer);
            if (this.autoSwitch != 0) {
                this.carrouselTimer = setTimeout(function () {
                    C.show(C.current + 1)
                }, this.autoSwitch);
                window["carrouselTimer_" + this.id] = this.carrouselTimer
            }
        }
    };
    return A
});
