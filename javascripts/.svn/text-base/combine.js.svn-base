/**
 * Created by itachi on 16/4/20.
 */
/**
 * Created by team on 16/2/23.
 */
var Zepto = (function () {
    var AY, Am, AW, AX, AB = [], Ag = AB.slice, Aa = AB.filter, AQ = window.document, AD = {}, AT = {}, Aw = {
        "column-count": 1,
        "columns": 1,
        "font-weight": 1,
        "line-height": 1,
        "opacity": 1,
        "z-index": 1,
        "zoom": 1
    }, AM = /^\s*<(\w+|!)[^>]*>/, AC = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Ar = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, AP = /^(?:body|html)$/i, Ao = /([A-Z])/g, AE = ["val", "css", "html", "text", "data", "width", "height", "offset"], AO = ["after", "prepend", "before", "append"], Ah = AQ.createElement("table"), AL = AQ.createElement("tr"), Ai = {
        "tr": AQ.createElement("tbody"),
        "tbody": Ah,
        "thead": Ah,
        "tfoot": Ah,
        "td": AL,
        "th": AL,
        "*": AQ.createElement("div")
    }, Ay = /complete|loaded|interactive/, Av = /^[\w-]*$/, AI = {}, Aq = AI.toString, AA = {}, Ap, AJ, AZ = AQ.createElement("div"), Af = {
        "tabindex": "tabIndex",
        "readonly": "readOnly",
        "for": "htmlFor",
        "class": "className",
        "maxlength": "maxLength",
        "cellspacing": "cellSpacing",
        "cellpadding": "cellPadding",
        "rowspan": "rowSpan",
        "colspan": "colSpan",
        "usemap": "useMap",
        "frameborder": "frameBorder",
        "contenteditable": "contentEditable"
    }, AV = Array.isArray || function (A) {
            return A instanceof Array
        };
    AA.matches = function (C, D) {
        if (!D || !C || C.nodeType !== 1) {
            return false
        }
        var B = C.webkitMatchesSelector || C.mozMatchesSelector || C.oMatchesSelector || C.matchesSelector;
        if (B) {
            return B.call(C, D)
        }
        var E, A = C.parentNode, F = !A;
        if (F) {
            (A = AZ).appendChild(C)
        }
        E = ~AA.qsa(A, D).indexOf(C);
        F && AZ.removeChild(C);
        return E
    };
    function At(A) {
        return A == null ? String(A) : AI[Aq.call(A)] || "object"
    }

    function As(A) {
        return At(A) == "function"
    }

    function AN(A) {
        return A != null && A == A.window
    }

    function Az(A) {
        return A != null && A.nodeType == A.DOCUMENT_NODE
    }

    function Ak(A) {
        return At(A) == "object"
    }

    function Aj(A) {
        return Ak(A) && !AN(A) && Object.getPrototypeOf(A) == Object.prototype
    }

    function Ae(A) {
        return typeof A.length == "number"
    }

    function AS(A) {
        return Aa.call(A, function (B) {
            return B != null
        })
    }

    function Al(A) {
        return A.length > 0 ? AW.fn.concat.apply([], A) : A
    }

    Ap = function (A) {
        return A.replace(/-+(.)?/g, function (C, B) {
            return B ? B.toUpperCase() : ""
        })
    };
    function AK(A) {
        return A.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    AJ = function (A) {
        return Aa.call(A, function (C, B) {
            return A.indexOf(C) == B
        })
    };
    function Au(A) {
        return A in AT ? AT[A] : (AT[A] = new RegExp("(^|\\s)" + A + "(\\s|$)"))
    }

    function AG(A, B) {
        return (typeof B == "number" && !Aw[AK(A)]) ? B + "px" : B
    }

    function An(B) {
        var C, A;
        if (!AD[B]) {
            C = AQ.createElement(B);
            AQ.body.appendChild(C);
            A = getComputedStyle(C, "").getPropertyValue("display");
            C.parentNode.removeChild(C);
            A == "none" && (A = "block");
            AD[B] = A
        }
        return AD[B]
    }

    function Ax(A) {
        return "children" in A ? Ag.call(A.children) : AW.map(A.childNodes, function (B) {
            if (B.nodeType == 1) {
                return B
            }
        })
    }

    AA.fragment = function (A, D, E) {
        var C, F, B;
        if (AC.test(A)) {
            C = AW(AQ.createElement(RegExp.$1))
        }
        if (!C) {
            if (A.replace) {
                A = A.replace(Ar, "<$1></$2>")
            }
            if (D === AY) {
                D = AM.test(A) && RegExp.$1
            }
            if (!(D in Ai)) {
                D = "*"
            }
            B = Ai[D];
            B.innerHTML = "" + A;
            C = AW.each(Ag.call(B.childNodes), function () {
                B.removeChild(this)
            })
        }
        if (Aj(E)) {
            F = AW(C);
            AW.each(E, function (G, H) {
                if (AE.indexOf(G) > -1) {
                    F[G](H)
                } else {
                    F.attr(G, H)
                }
            })
        }
        return C
    };
    AA.Z = function (A, B) {
        A = A || [];
        A.__proto__ = AW.fn;
        A.selector = B || "";
        return A
    };
    AA.isZ = function (A) {
        return A instanceof AA.Z
    };
    AA.init = function (B, C) {
        var A;
        if (!B) {
            return AA.Z()
        } else {
            if (typeof B == "string") {
                B = B.trim();
                if (B[0] == "<" && AM.test(B)) {
                    A = AA.fragment(B, RegExp.$1, C), B = null
                } else {
                    if (C !== AY) {
                        return AW(C).find(B)
                    } else {
                        A = AA.qsa(AQ, B)
                    }
                }
            } else {
                if (As(B)) {
                    return AW(AQ).ready(B)
                } else {
                    if (AA.isZ(B)) {
                        return B
                    } else {
                        if (AV(B)) {
                            A = AS(B)
                        } else {
                            if (Ak(B)) {
                                A = [B], B = null
                            } else {
                                if (AM.test(B)) {
                                    A = AA.fragment(B.trim(), RegExp.$1, C), B = null
                                } else {
                                    if (C !== AY) {
                                        return AW(C).find(B)
                                    } else {
                                        A = AA.qsa(AQ, B)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return AA.Z(A, B)
    };
    AW = function (B, A) {
        return AA.init(B, A)
    };
    function Ab(B, A, C) {
        for (Am in A) {
            if (C && (Aj(A[Am]) || AV(A[Am]))) {
                if (Aj(A[Am]) && !Aj(B[Am])) {
                    B[Am] = {}
                }
                if (AV(A[Am]) && !AV(B[Am])) {
                    B[Am] = []
                }
                Ab(B[Am], A[Am], C)
            } else {
                if (A[Am] !== AY) {
                    B[Am] = A[Am]
                }
            }
        }
    }

    AW.extend = function (C) {
        var A, B = Ag.call(arguments, 1);
        if (typeof C == "boolean") {
            A = C;
            C = B.shift()
        }
        B.forEach(function (D) {
            Ab(C, D, A)
        });
        return C
    };
    AA.qsa = function (D, E) {
        var C, A = E[0] == "#", G = !A && E[0] == ".", B = A || G ? E.slice(1) : E, F = Av.test(B);
        return (Az(D) && F && A) ? ((C = D.getElementById(B)) ? [C] : []) : (D.nodeType !== 1 && D.nodeType !== 9) ? [] : Ag.call(F && !A ? G ? D.getElementsByClassName(B) : D.getElementsByTagName(E) : D.querySelectorAll(E))
    };
    function AF(A, B) {
        return B == null ? AW(A) : AW(A).filter(B)
    }

    AW.contains = AQ.documentElement.contains ? function (B, A) {
        return B !== A && B.contains(A)
    } : function (B, A) {
        while (A && (A = A.parentNode)) {
            if (A === B) {
                return true
            }
        }
        return false
    };
    function Ad(A, D, B, C) {
        return As(D) ? D.call(A, B, C) : D
    }

    function AU(A, C, B) {
        B == null ? A.removeAttribute(C) : A.setAttribute(C, B)
    }

    function Ac(C, B) {
        var D = C.className || "", A = D && D.baseVal !== AY;
        if (B === AY) {
            return A ? D.baseVal : D
        }
        A ? (D.baseVal = B) : (C.className = B)
    }

    function AH(B) {
        try {
            return B ? B == "true" || (B == "false" ? false : B == "null" ? null : +B + "" == B ? +B : /^[\[\{]/.test(B) ? AW.parseJSON(B) : B) : B
        } catch (A) {
            return B
        }
    }

    AW.type = At;
    AW.isFunction = As;
    AW.isWindow = AN;
    AW.isArray = AV;
    AW.isPlainObject = Aj;
    AW.isEmptyObject = function (A) {
        var B;
        for (B in A) {
            return false
        }
        return true
    };
    AW.inArray = function (B, A, C) {
        return AB.indexOf.call(A, B, C)
    };
    AW.camelCase = Ap;
    AW.trim = function (A) {
        return A == null ? "" : String.prototype.trim.call(A)
    };
    AW.uuid = 0;
    AW.support = {};
    AW.expr = {};
    AW.map = function (E, A) {
        var D, C = [], F, B;
        if (Ae(E)) {
            for (F = 0; F < E.length; F++) {
                D = A(E[F], F);
                if (D != null) {
                    C.push(D)
                }
            }
        } else {
            for (B in E) {
                D = A(E[B], B);
                if (D != null) {
                    C.push(D)
                }
            }
        }
        return Al(C)
    };
    AW.each = function (C, A) {
        var D, B;
        if (Ae(C)) {
            for (D = 0; D < C.length; D++) {
                if (A.call(C[D], D, C[D]) === false) {
                    return C
                }
            }
        } else {
            for (B in C) {
                if (A.call(C[B], B, C[B]) === false) {
                    return C
                }
            }
        }
        return C
    };
    AW.grep = function (B, A) {
        return Aa.call(B, A)
    };
    if (window.JSON) {
        AW.parseJSON = JSON.parse
    }
    AW.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (A, B) {
        AI["[object " + B + "]"] = B.toLowerCase()
    });
    AW.fn = {
        forEach: AB.forEach,
        reduce: AB.reduce,
        push: AB.push,
        sort: AB.sort,
        indexOf: AB.indexOf,
        concat: AB.concat,
        map: function (A) {
            return AW(AW.map(this, function (C, B) {
                return A.call(C, B, C)
            }))
        },
        slice: function () {
            return AW(Ag.apply(this, arguments))
        },
        ready: function (A) {
            if (Ay.test(AQ.readyState) && AQ.body) {
                A(AW)
            } else {
                AQ.addEventListener("DOMContentLoaded", function () {
                    A(AW)
                }, false)
            }
            return this
        },
        get: function (A) {
            return A === AY ? Ag.call(this) : this[A >= 0 ? A : A + this.length]
        },
        toArray: function () {
            return this.get()
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                if (this.parentNode != null) {
                    this.parentNode.removeChild(this)
                }
            })
        },
        each: function (A) {
            AB.every.call(this, function (C, B) {
                return A.call(C, B, C) !== false
            });
            return this
        },
        filter: function (A) {
            if (As(A)) {
                return this.not(this.not(A))
            }
            return AW(Aa.call(this, function (B) {
                return AA.matches(B, A)
            }))
        },
        add: function (B, A) {
            return AW(AJ(this.concat(AW(B, A))))
        },
        is: function (A) {
            return this.length > 0 && AA.matches(this[0], A)
        },
        not: function (B) {
            var C = [];
            if (As(B) && B.call !== AY) {
                this.each(function (D) {
                    if (!B.call(this, D)) {
                        C.push(this)
                    }
                })
            } else {
                var A = typeof B == "string" ? this.filter(B) : (Ae(B) && As(B.item)) ? Ag.call(B) : AW(B);
                this.forEach(function (D) {
                    if (A.indexOf(D) < 0) {
                        C.push(D)
                    }
                })
            }
            return AW(C)
        },
        has: function (A) {
            return this.filter(function () {
                return Ak(A) ? AW.contains(this, A) : AW(this).find(A).size()
            })
        },
        eq: function (A) {
            return A === -1 ? this.slice(A) : this.slice(A, +A + 1)
        },
        first: function () {
            var A = this[0];
            return A && !Ak(A) ? A : AW(A)
        },
        last: function () {
            var A = this[this.length - 1];
            return A && !Ak(A) ? A : AW(A)
        },
        find: function (B) {
            var A, C = this;
            if (!B) {
                A = AW()
            } else {
                if (typeof B == "object") {
                    A = AW(B).filter(function () {
                        var D = this;
                        return AB.some.call(C, function (E) {
                            return AW.contains(E, D)
                        })
                    })
                } else {
                    if (this.length == 1) {
                        A = AW(AA.qsa(this[0], B))
                    } else {
                        A = this.map(function () {
                            return AA.qsa(this, B)
                        })
                    }
                }
            }
            return A
        },
        closest: function (C, A) {
            var D = this[0], B = false;
            if (typeof C == "object") {
                B = AW(C)
            }
            while (D && !(B ? B.indexOf(D) >= 0 : AA.matches(D, C))) {
                D = D !== A && !Az(D) && D.parentNode
            }
            return AW(D)
        },
        parents: function (B) {
            var A = [], C = this;
            while (C.length > 0) {
                C = AW.map(C, function (D) {
                    if ((D = D.parentNode) && !Az(D) && A.indexOf(D) < 0) {
                        A.push(D);
                        return D
                    }
                })
            }
            return AF(A, B)
        },
        parent: function (A) {
            return AF(AJ(this.pluck("parentNode")), A)
        },
        children: function (A) {
            return AF(this.map(function () {
                return Ax(this)
            }), A)
        },
        contents: function () {
            return this.map(function () {
                return Ag.call(this.childNodes)
            })
        },
        siblings: function (A) {
            return AF(this.map(function (B, C) {
                return Aa.call(Ax(C.parentNode), function (D) {
                    return D !== C
                })
            }), A)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (A) {
            return AW.map(this, function (B) {
                return B[A]
            })
        },
        show: function () {
            return this.each(function () {
                this.style.display == "none" && (this.style.display = "");
                if (getComputedStyle(this, "").getPropertyValue("display") == "none") {
                    this.style.display = An(this.nodeName)
                }
            })
        },
        replaceWith: function (A) {
            return this.before(A).remove()
        },
        wrap: function (D) {
            var B = As(D);
            if (this[0] && !B) {
                var A = AW(D).get(0), C = A.parentNode || this.length > 1
            }
            return this.each(function (E) {
                AW(this).wrapAll(B ? D.call(this, E) : C ? A.cloneNode(true) : A)
            })
        },
        wrapAll: function (A) {
            if (this[0]) {
                AW(this[0]).before(A = AW(A));
                var B;
                while ((B = A.children()).length) {
                    A = B.first()
                }
                AW(A).append(this)
            }
            return this
        },
        wrapInner: function (A) {
            var B = As(A);
            return this.each(function (C) {
                var E = AW(this), D = E.contents(), F = B ? A.call(this, C) : A;
                D.length ? D.wrapAll(F) : E.append(F)
            })
        },
        unwrap: function () {
            this.parent().each(function () {
                AW(this).replaceWith(AW(this).children())
            });
            return this
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(true)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (A) {
            return this.each(function () {
                var B = AW(this);
                (A === AY ? B.css("display") == "none" : A) ? B.show() : B.hide()
            })
        },
        prev: function (A) {
            return AW(this.pluck("previousElementSibling")).filter(A || "*")
        },
        next: function (A) {
            return AW(this.pluck("nextElementSibling")).filter(A || "*")
        },
        html: function (A) {
            return 0 in arguments ? this.each(function (B) {
                var C = this.innerHTML;
                AW(this).empty().append(Ad(this, A, B, C))
            }) : (0 in this ? this[0].innerHTML : null)
        },
        text: function (A) {
            return 0 in arguments ? this.each(function (B) {
                var C = Ad(this, A, B, this.textContent);
                this.textContent = C == null ? "" : "" + C
            }) : (0 in this ? this[0].textContent : null)
        },
        attr: function (C, B) {
            var A;
            return (typeof C == "string" && !(1 in arguments)) ? (!this.length || this[0].nodeType !== 1 ? AY : (!(A = this[0].getAttribute(C)) && C in this[0]) ? this[0][C] : A) : this.each(function (D) {
                if (this.nodeType !== 1) {
                    return
                }
                if (Ak(C)) {
                    for (Am in C) {
                        AU(this, Am, C[Am])
                    }
                } else {
                    AU(this, C, Ad(this, B, D, this.getAttribute(C)))
                }
            })
        },
        removeAttr: function (A) {
            return this.each(function () {
                this.nodeType === 1 && A.split(" ").forEach(function (B) {
                    AU(this, B)
                }, this)
            })
        },
        prop: function (A, B) {
            A = Af[A] || A;
            return (1 in arguments) ? this.each(function (C) {
                this[A] = Ad(this, B, C, this[A])
            }) : (this[0] && this[0][A])
        },
        data: function (D, C) {
            var A = "data-" + D.replace(Ao, "-$1").toLowerCase();
            var B = (1 in arguments) ? this.attr(A, C) : this.attr(A);
            return B !== null ? AH(B) : AY
        },
        val: function (A) {
            return 0 in arguments ? this.each(function (B) {
                this.value = Ad(this, A, B, this.value)
            }) : (this[0] && (this[0].multiple ? AW(this[0]).find("option").filter(function () {
                return this.selected
            }).pluck("value") : this[0].value))
        },
        offset: function (B) {
            if (B) {
                return this.each(function (D) {
                    var F = AW(this), G = Ad(this, B, D, F.offset()), C = F.offsetParent().offset(), E = {
                        top: G.top - C.top,
                        left: G.left - C.left
                    };
                    if (F.css("position") == "static") {
                        E["position"] = "relative"
                    }
                    F.css(E)
                })
            }
            if (!this.length) {
                return null
            }
            var A = this[0].getBoundingClientRect();
            return {
                left: A.left + window.pageXOffset,
                top: A.top + window.pageYOffset,
                width: Math.round(A.width),
                height: Math.round(A.height)
            }
        },
        css: function (F, D) {
            if (arguments.length < 2) {
                var A, C = this[0];
                if (!C) {
                    return
                }
                A = getComputedStyle(C, "");
                if (typeof F == "string") {
                    return C.style[Ap(F)] || A.getPropertyValue(F)
                } else {
                    if (AV(F)) {
                        var E = {};
                        AW.each(F, function (H, G) {
                            E[G] = (C.style[Ap(G)] || A.getPropertyValue(G))
                        });
                        return E
                    }
                }
            }
            var B = "";
            if (At(F) == "string") {
                if (!D && D !== 0) {
                    this.each(function () {
                        this.style.removeProperty(AK(F))
                    })
                } else {
                    B = AK(F) + ":" + AG(F, D)
                }
            } else {
                for (Am in F) {
                    if (!F[Am] && F[Am] !== 0) {
                        this.each(function () {
                            this.style.removeProperty(AK(Am))
                        })
                    } else {
                        B += AK(Am) + ":" + AG(Am, F[Am]) + ";"
                    }
                }
            }
            return this.each(function () {
                this.style.cssText += ";" + B
            })
        },
        index: function (A) {
            return A ? this.indexOf(AW(A)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (A) {
            if (!A) {
                return false
            }
            return AB.some.call(this, function (B) {
                return this.test(Ac(B))
            }, Au(A))
        },
        addClass: function (A) {
            if (!A) {
                return this
            }
            return this.each(function (C) {
                if (!("className" in this)) {
                    return
                }
                AX = [];
                var D = Ac(this), B = Ad(this, A, C, D);
                B.split(/\s+/g).forEach(function (E) {
                    if (!AW(this).hasClass(E)) {
                        AX.push(E)
                    }
                }, this);
                AX.length && Ac(this, D + (D ? " " : "") + AX.join(" "))
            })
        },
        removeClass: function (A) {
            return this.each(function (B) {
                if (!("className" in this)) {
                    return
                }
                if (A === AY) {
                    return Ac(this, "")
                }
                AX = Ac(this);
                Ad(this, A, B, AX).split(/\s+/g).forEach(function (C) {
                    AX = AX.replace(Au(C), " ")
                });
                Ac(this, AX.trim())
            })
        },
        toggleClass: function (B, A) {
            if (!B) {
                return this
            }
            return this.each(function (D) {
                var E = AW(this), C = Ad(this, B, D, Ac(this));
                C.split(/\s+/g).forEach(function (F) {
                    (A === AY ? !E.hasClass(F) : A) ? E.addClass(F) : E.removeClass(F)
                })
            })
        },
        scrollTop: function (A) {
            if (!this.length) {
                return
            }
            var B = "scrollTop" in this[0];
            if (A === AY) {
                return B ? this[0].scrollTop : this[0].pageYOffset
            }
            return this.each(B ? function () {
                this.scrollTop = A
            } : function () {
                this.scrollTo(this.scrollX, A)
            })
        },
        scrollLeft: function (B) {
            if (!this.length) {
                return
            }
            var A = "scrollLeft" in this[0];
            if (B === AY) {
                return A ? this[0].scrollLeft : this[0].pageXOffset
            }
            return this.each(A ? function () {
                this.scrollLeft = B
            } : function () {
                this.scrollTo(B, this.scrollY)
            })
        },
        position: function () {
            if (!this.length) {
                return
            }
            var C = this[0], B = this.offsetParent(), A = this.offset(), D = AP.test(B[0].nodeName) ? {
                top: 0,
                left: 0
            } : B.offset();
            A.top -= parseFloat(AW(C).css("margin-top")) || 0;
            A.left -= parseFloat(AW(C).css("margin-left")) || 0;
            D.top += parseFloat(AW(B[0]).css("border-top-width")) || 0;
            D.left += parseFloat(AW(B[0]).css("border-left-width")) || 0;
            return {top: A.top - D.top, left: A.left - D.left}
        },
        offsetParent: function () {
            return this.map(function () {
                var A = this.offsetParent || AQ.body;
                while (A && !AP.test(A.nodeName) && AW(A).css("position") == "static") {
                    A = A.offsetParent
                }
                return A
            })
        }
    };
    AW.fn.detach = AW.fn.remove;
    ["width", "height"].forEach(function (A) {
        var B = A.replace(/./, function (C) {
            return C[0].toUpperCase()
        });
        AW.fn[A] = function (C) {
            var D, E = this[0];
            if (C === AY) {
                return AN(E) ? E["inner" + B] : Az(E) ? E.documentElement["scroll" + B] : (D = this.offset()) && D[A]
            } else {
                return this.each(function (F) {
                    E = AW(this);
                    E.css(A, Ad(this, C, F, E[A]()))
                })
            }
        }
    });
    function AR(C, D) {
        D(C);
        for (var A = 0, B = C.childNodes.length; A < B; A++) {
            AR(C.childNodes[A], D)
        }
    }

    AO.forEach(function (B, A) {
        var C = A % 2;
        AW.fn[B] = function () {
            var F, E = AW.map(arguments, function (H) {
                F = At(H);
                return F == "object" || F == "array" || H == null ? H : AA.fragment(H)
            }), D, G = this.length > 1;
            if (E.length < 1) {
                return this
            }
            return this.each(function (H, I) {
                D = C ? I : I.parentNode;
                I = A == 0 ? I.nextSibling : A == 1 ? I.firstChild : A == 2 ? I : null;
                var J = AW.contains(AQ.documentElement, D);
                E.forEach(function (K) {
                    if (G) {
                        K = K.cloneNode(true)
                    } else {
                        if (!D) {
                            return AW(K).remove()
                        }
                    }
                    D.insertBefore(K, I);
                    if (J) {
                        AR(K, function (L) {
                            if (L.nodeName != null && L.nodeName.toUpperCase() === "SCRIPT" && (!L.type || L.type === "text/javascript") && !L.src) {
                                window["eval"].call(window, L.innerHTML)
                            }
                        })
                    }
                })
            })
        };
        AW.fn[C ? B + "To" : "insert" + (A ? "Before" : "After")] = function (D) {
            AW(D)[B](this);
            return this
        }
    });
    AA.Z.prototype = AW.fn;
    AA.uniq = AJ;
    AA.deserializeValue = AH;
    AW.zepto = AA;
    return AW
})();
window.Zepto = Zepto;
window.$ === undefined && (window.$ = Zepto);
(function (h) {
    var c = 1, g, b = Array.prototype.slice, s = h.isFunction, k = function (A) {
        return typeof A == "string"
    }, x = {}, p = {}, r = "onfocusin" in window, n = {
        focus: "focusin",
        blur: "focusout"
    }, t = {mouseenter: "mouseover", mouseleave: "mouseout"};
    p.click = p.mousedown = p.mouseup = p.mousemove = "MouseEvents";
    function a(A) {
        return A._zid || (A._zid = c++)
    }

    function l(D, B, A, C) {
        B = v(B);
        if (B.ns) {
            var E = o(B.ns)
        }
        return (x[a(D)] || []).filter(function (F) {
            return F && (!B.e || F.e == B.e) && (!B.ns || E.test(F.ns)) && (!A || a(F.fn) === a(A)) && (!C || F.sel == C)
        })
    }

    function v(A) {
        var B = ("" + A).split(".");
        return {e: B[0], ns: B.slice(1).sort().join(" ")}
    }

    function o(A) {
        return new RegExp("(?:^| )" + A.replace(" ", " .* ?") + "(?: |$)")
    }

    function u(B, A) {
        return B.del && (!r && (B.e in n)) || !!A
    }

    function m(A) {
        return t[A] || (r && n[A]) || A
    }

    function f(A, I, E, B, C, G, H) {
        var F = a(A), D = (x[F] || (x[F] = []));
        I.split(/\s/).forEach(function (L) {
            if (L == "ready") {
                return h(document).ready(E)
            }
            var K = v(L);
            K.fn = E;
            K.sel = C;
            if (K.e in t) {
                E = function (M) {
                    var N = M.relatedTarget;
                    if (!N || (N !== this && !h.contains(this, N))) {
                        return K.fn.apply(this, arguments)
                    }
                }
            }
            K.del = G;
            var J = G || E;
            K.proxy = function (N) {
                N = e(N);
                if (N.isImmediatePropagationStopped()) {
                    return
                }
                N.data = B;
                var M = J.apply(A, N._args == g ? [N] : [N].concat(N._args));
                if (M === false) {
                    N.preventDefault(), N.stopPropagation()
                }
                return M
            };
            K.i = D.length;
            D.push(K);
            if ("addEventListener" in A) {
                A.addEventListener(m(K.e), K.proxy, u(K, H))
            }
        })
    }

    function d(C, B, A, F, E) {
        var D = a(C);
        (B || "").split(/\s/).forEach(function (G) {
            l(C, G, A, F).forEach(function (H) {
                delete x[D][H.i];
                if ("removeEventListener" in C) {
                    C.removeEventListener(m(H.e), H.proxy, u(H, E))
                }
            })
        })
    }

    h.event = {add: f, remove: d};
    h.proxy = function (A, D) {
        var C = (2 in arguments) && b.call(arguments, 2);
        if (s(A)) {
            var B = function () {
                return A.apply(D, C ? C.concat(b.call(arguments)) : arguments)
            };
            B._zid = a(A);
            return B
        } else {
            if (k(D)) {
                if (C) {
                    C.unshift(A[D], A);
                    return h.proxy.apply(null, C)
                } else {
                    return h.proxy(A[D], A)
                }
            } else {
                throw new TypeError("expected function")
            }
        }
    };
    h.fn.bind = function (A, B, C) {
        return this.on(A, B, C)
    };
    h.fn.unbind = function (A, B) {
        return this.off(A, B)
    };
    h.fn.one = function (A, B, C, D) {
        return this.on(A, B, C, D, 1)
    };
    var j = function () {
        return true
    }, q = function () {
        return false
    }, i = /^([A-Z]|returnValue$|layer[XY]$)/, w = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };

    function e(A, B) {
        if (B || !A.isDefaultPrevented) {
            B || (B = A);
            h.each(w, function (D, C) {
                var E = B[D];
                A[D] = function () {
                    this[C] = j;
                    return E && E.apply(B, arguments)
                };
                A[C] = q
            });
            if (B.defaultPrevented !== g ? B.defaultPrevented : "returnValue" in B ? B.returnValue === false : B.getPreventDefault && B.getPreventDefault()) {
                A.isDefaultPrevented = j
            }
        }
        return A
    }

    function Z(C) {
        var B, A = {originalEvent: C};
        for (B in C) {
            if (!i.test(B) && C[B] !== g) {
                A[B] = C[B]
            }
        }
        return e(A, C)
    }

    h.fn.delegate = function (B, A, C) {
        return this.on(A, B, C)
    };
    h.fn.undelegate = function (B, A, C) {
        return this.off(A, B, C)
    };
    h.fn.live = function (A, B) {
        h(document.body).delegate(this.selector, A, B);
        return this
    };
    h.fn.die = function (A, B) {
        h(document.body).undelegate(this.selector, A, B);
        return this
    };
    h.fn.on = function (D, E, B, A, C) {
        var H, G, F = this;
        if (D && !k(D)) {
            h.each(D, function (I, J) {
                F.on(I, E, B, J, C)
            });
            return F
        }
        if (!k(E) && !s(A) && A !== false) {
            A = B, B = E, E = g
        }
        if (s(B) || B === false) {
            A = B, B = g
        }
        if (A === false) {
            A = q
        }
        return F.each(function (J, I) {
            if (C) {
                H = function (K) {
                    d(I, K.type, A);
                    return A.apply(this, arguments)
                }
            }
            if (E) {
                G = function (K) {
                    var M, L = h(K.target).closest(E, I).get(0);
                    if (L && L !== I) {
                        M = h.extend(Z(K), {currentTarget: L, liveFired: I});
                        return (H || A).apply(L, [M].concat(b.call(arguments, 1)))
                    }
                }
            }
            f(I, D, A, B, E, G || H)
        })
    };
    h.fn.off = function (C, D, B) {
        var A = this;
        if (C && !k(C)) {
            h.each(C, function (E, F) {
                A.off(E, D, F)
            });
            return A
        }
        if (!k(D) && !s(B) && B !== false) {
            B = D, D = g
        }
        if (B === false) {
            B = q
        }
        return A.each(function () {
            d(this, C, B, D)
        })
    };
    h.fn.trigger = function (B, A) {
        B = (k(B) || h.isPlainObject(B)) ? h.Event(B) : e(B);
        B._args = A;
        return this.each(function () {
            if (B.type in n && typeof this[B.type] == "function") {
                this[B.type]()
            } else {
                if ("dispatchEvent" in this) {
                    this.dispatchEvent(B)
                } else {
                    h(this).triggerHandler(B, A)
                }
            }
        })
    };
    h.fn.triggerHandler = function (C, D) {
        var B, A;
        this.each(function (E, F) {
            B = Z(k(C) ? h.Event(C) : C);
            B._args = D;
            B.target = F;
            h.each(l(F, C.type || C), function (G, H) {
                A = H.proxy(B);
                if (B.isImmediatePropagationStopped()) {
                    return false
                }
            })
        });
        return A
    };
    ("focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error").split(" ").forEach(function (A) {
        h.fn[A] = function (B) {
            return (0 in arguments) ? this.bind(A, B) : this.trigger(A)
        }
    });
    h.Event = function (B, E) {
        if (!k(B)) {
            E = B, B = E.type
        }
        var D = document.createEvent(p[B] || "Events"), A = true;
        if (E) {
            for (var C in E) {
                (C == "bubbles") ? (A = !!E[C]) : (D[C] = E[C])
            }
        }
        D.initEvent(B, A, true);
        return e(D)
    }
})(Zepto);
(function ($) {
    var jsonpID = 0, document = window.document, key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, scriptTypeRE = /^(?:text|application)\/javascript/i, xmlTypeRE = /^(?:text|application)\/xml/i, jsonType = "application/json", htmlType = "text/html", blankRE = /^\s*$/, originAnchor = document.createElement("a");
    originAnchor.href = window.location.href;
    function triggerAndReturn(context, eventName, data) {
        var event = $.Event(eventName);
        $(context).trigger(event, data);
        return !event.isDefaultPrevented()
    }

    function triggerGlobal(settings, context, eventName, data) {
        if (settings.global) {
            return triggerAndReturn(context || document, eventName, data)
        }
    }

    $.active = 0;
    function ajaxStart(settings) {
        if (settings.global && $.active++ === 0) {
            triggerGlobal(settings, null, "ajaxStart")
        }
    }

    function ajaxStop(settings) {
        if (settings.global && !(--$.active)) {
            triggerGlobal(settings, null, "ajaxStop")
        }
    }

    function ajaxBeforeSend(xhr, settings) {
        var context = settings.context;
        if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, "ajaxBeforeSend", [xhr, settings]) === false) {
            return false
        }
        triggerGlobal(settings, context, "ajaxSend", [xhr, settings])
    }

    function ajaxSuccess(data, xhr, settings, deferred) {
        var context = settings.context, status = "success";
        settings.success.call(context, data, status, xhr);
        if (deferred) {
            deferred.resolveWith(context, [data, status, xhr])
        }
        triggerGlobal(settings, context, "ajaxSuccess", [xhr, settings, data]);
        ajaxComplete(status, xhr, settings)
    }

    function ajaxError(error, type, xhr, settings, deferred) {
        var context = settings.context;
        settings.error.call(context, xhr, type, error);
        if (deferred) {
            deferred.rejectWith(context, [xhr, type, error])
        }
        triggerGlobal(settings, context, "ajaxError", [xhr, settings, error || type]);
        ajaxComplete(type, xhr, settings)
    }

    function ajaxComplete(status, xhr, settings) {
        var context = settings.context;
        settings.complete.call(context, xhr, status);
        triggerGlobal(settings, context, "ajaxComplete", [xhr, settings]);
        ajaxStop(settings)
    }

    function empty() {
    }

    $.ajaxJSONP = function (options, deferred) {
        if (!("type" in options)) {
            return $.ajax(options)
        }
        var _callbackName = options.jsonpCallback, callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || ("jsonp" + (++jsonpID)), script = document.createElement("script"), originalCallback = window[callbackName], responseData, abort = function (errorType) {
            $(script).triggerHandler("error", errorType || "abort")
        }, xhr = {abort: abort}, abortTimeout;
        if (deferred) {
            deferred.promise(xhr)
        }
        $(script).on("load error", function (e, errorType) {
            clearTimeout(abortTimeout);
            $(script).off().remove();
            if (e.type == "error" || !responseData) {
                ajaxError(null, errorType || "error", xhr, options, deferred)
            } else {
                ajaxSuccess(responseData[0], xhr, options, deferred)
            }
            window[callbackName] = originalCallback;
            if (responseData && $.isFunction(originalCallback)) {
                originalCallback(responseData[0])
            }
            originalCallback = responseData = undefined
        });
        if (ajaxBeforeSend(xhr, options) === false) {
            abort("abort");
            return xhr
        }
        window[callbackName] = function () {
            responseData = arguments
        };
        script.src = options.url.replace(/\?(.+)=\?/, "?$1=" + callbackName);
        document.head.appendChild(script);
        if (options.timeout > 0) {
            abortTimeout = setTimeout(function () {
                abort("timeout")
            }, options.timeout)
        }
        return xhr
    };
    $.ajaxSettings = {
        type: "GET",
        beforeSend: empty,
        success: empty,
        error: empty,
        complete: empty,
        context: null,
        global: true,
        xhr: function () {
            return new window.XMLHttpRequest()
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: jsonType,
            xml: "application/xml, text/xml",
            html: htmlType,
            text: "text/plain"
        },
        crossDomain: false,
        timeout: 0,
        processData: true,
        cache: true
    };
    function mimeToDataType(mime) {
        if (mime) {
            mime = mime.split(";", 2)[0]
        }
        return mime && (mime == htmlType ? "html" : mime == jsonType ? "json" : scriptTypeRE.test(mime) ? "script" : xmlTypeRE.test(mime) && "xml") || "text"
    }

    function appendQuery(url, query) {
        if (query == "") {
            return url
        }
        return (url + "&" + query).replace(/[&?]{1,2}/, "?")
    }

    function serializeData(options) {
        if (options.processData && options.data && $.type(options.data) != "string") {
            options.data = $.param(options.data, options.traditional)
        }
        if (options.data && (!options.type || options.type.toUpperCase() == "GET")) {
            options.url = appendQuery(options.url, options.data), options.data = undefined
        }
    }

    $.ajax = function (options) {
        var settings = $.extend({}, options || {}), deferred = $.Deferred && $.Deferred(), urlAnchor;
        for (key in $.ajaxSettings) {
            if (settings[key] === undefined) {
                settings[key] = $.ajaxSettings[key]
            }
        }
        ajaxStart(settings);
        if (!settings.crossDomain) {
            urlAnchor = document.createElement("a");
            urlAnchor.href = settings.url;
            urlAnchor.href = urlAnchor.href;
            settings.crossDomain = (originAnchor.protocol + "//" + originAnchor.host) !== (urlAnchor.protocol + "//" + urlAnchor.host)
        }
        if (!settings.url) {
            settings.url = window.location.toString()
        }
        serializeData(settings);
        var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url);
        if (hasPlaceholder) {
            dataType = "jsonp"
        }
        if (settings.cache === false || ((!options || options.cache !== true) && ("script" == dataType || "jsonp" == dataType))) {
            settings.url = appendQuery(settings.url, "_=" + Date.now())
        }
        if ("jsonp" == dataType) {
            if (!hasPlaceholder) {
                settings.url = appendQuery(settings.url, settings.jsonp ? (settings.jsonp + "=?") : settings.jsonp === false ? "" : "callback=?")
            }
            return $.ajaxJSONP(settings, deferred)
        }
        var mime = settings.accepts[dataType], headers = {}, setHeader = function (name, value) {
            headers[name.toLowerCase()] = [name, value]
        }, protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, xhr = settings.xhr(), nativeSetHeader = xhr.setRequestHeader, abortTimeout;
        if (deferred) {
            deferred.promise(xhr)
        }
        if (!settings.crossDomain) {
            setHeader("X-Requested-With", "XMLHttpRequest")
        }
        setHeader("Accept", mime || "*/*");
        if (mime = settings.mimeType || mime) {
            if (mime.indexOf(",") > -1) {
                mime = mime.split(",", 2)[0]
            }
            xhr.overrideMimeType && xhr.overrideMimeType(mime)
        }
        if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != "GET")) {
            setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded")
        }
        if (settings.headers) {
            for (name in settings.headers) {
                setHeader(name, settings.headers[name])
            }
        }
        xhr.setRequestHeader = setHeader;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                xhr.onreadystatechange = empty;
                clearTimeout(abortTimeout);
                var result, error = false;
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == "file:")) {
                    dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type"));
                    result = xhr.responseText;
                    try {
                        if (dataType == "script") {
                            (1, eval)(result)
                        } else {
                            if (dataType == "xml") {
                                result = xhr.responseXML
                            } else {
                                if (dataType == "json") {
                                    result = blankRE.test(result) ? null : $.parseJSON(result)
                                }
                            }
                        }
                    } catch (e) {
                        error = e
                    }
                    if (error) {
                        ajaxError(error, "parsererror", xhr, settings, deferred)
                    } else {
                        ajaxSuccess(result, xhr, settings, deferred)
                    }
                } else {
                    ajaxError(xhr.statusText || null, xhr.status ? "error" : "abort", xhr, settings, deferred)
                }
            }
        };
        if (ajaxBeforeSend(xhr, settings) === false) {
            xhr.abort();
            ajaxError(null, "abort", xhr, settings, deferred);
            return xhr
        }
        if (settings.xhrFields) {
            for (name in settings.xhrFields) {
                xhr[name] = settings.xhrFields[name]
            }
        }
        var async = "async" in settings ? settings.async : true;
        xhr.open(settings.type, settings.url, async, settings.username, settings.password);
        for (name in headers) {
            nativeSetHeader.apply(xhr, headers[name])
        }
        if (settings.timeout > 0) {
            abortTimeout = setTimeout(function () {
                xhr.onreadystatechange = empty;
                xhr.abort();
                ajaxError(null, "timeout", xhr, settings, deferred)
            }, settings.timeout)
        }
        xhr.send(settings.data ? settings.data : null);
        return xhr
    };
    function parseArguments(url, data, success, dataType) {
        if ($.isFunction(data)) {
            dataType = success, success = data, data = undefined
        }
        if (!$.isFunction(success)) {
            dataType = success, success = undefined
        }
        return {url: url, data: data, success: success, dataType: dataType}
    }

    $.get = function () {
        return $.ajax(parseArguments.apply(null, arguments))
    };
    $.post = function () {
        var options = parseArguments.apply(null, arguments);
        options.type = "POST";
        return $.ajax(options)
    };
    $.getJSON = function () {
        var options = parseArguments.apply(null, arguments);
        options.dataType = "json";
        return $.ajax(options)
    };
    $.fn.load = function (url, data, success) {
        if (!this.length) {
            return this
        }
        var self = this, parts = url.split(/\s/), selector, options = parseArguments(url, data, success), callback = options.success;
        if (parts.length > 1) {
            options.url = parts[0], selector = parts[1]
        }
        options.success = function (response) {
            self.html(selector ? $("<div>").html(response.replace(rscript, "")).find(selector) : response);
            callback && callback.apply(self, arguments)
        };
        $.ajax(options);
        return this
    };
    var escape = encodeURIComponent;

    function serialize(params, obj, traditional, scope) {
        var type, array = $.isArray(obj), hash = $.isPlainObject(obj);
        $.each(obj, function (key, value) {
            type = $.type(value);
            if (scope) {
                key = traditional ? scope : scope + "[" + (hash || type == "object" || type == "array" ? key : "") + "]"
            }
            if (!scope && array) {
                params.add(value.name, value.value)
            } else {
                if (type == "array" || (!traditional && type == "object")) {
                    serialize(params, value, traditional, key)
                } else {
                    params.add(key, value)
                }
            }
        })
    }

    $.param = function (obj, traditional) {
        var params = [];
        params.add = function (key, value) {
            if ($.isFunction(value)) {
                value = value()
            }
            if (value == null) {
                value = ""
            }
            this.push(escape(key) + "=" + escape(value))
        };
        serialize(params, obj, traditional);
        return params.join("&").replace(/%20/g, "+")
    }
})(Zepto);
(function (B) {
    B.fn.serializeArray = function () {
        var G, A, F = [], H = function (C) {
            if (C.forEach) {
                return C.forEach(H)
            }
            F.push({name: G, value: C})
        };
        if (this[0]) {
            B.each(this[0].elements, function (C, D) {
                A = D.type, G = D.name;
                if (G && D.nodeName.toLowerCase() != "fieldset" && !D.disabled && A != "submit" && A != "reset" && A != "button" && A != "file" && ((A != "radio" && A != "checkbox") || D.checked)) {
                    H(B(D).val())
                }
            })
        }
        return F
    };
    B.fn.serialize = function () {
        var A = [];
        this.serializeArray().forEach(function (D) {
            A.push(encodeURIComponent(D.name) + "=" + encodeURIComponent(D.value))
        });
        return A.join("&")
    };
    B.fn.submit = function (A) {
        if (0 in arguments) {
            this.bind("submit", A)
        } else {
            if (this.length) {
                var D = B.Event("submit");
                this.eq(0).trigger(D);
                if (!D.isDefaultPrevented()) {
                    this.get(0).submit()
                }
            }
        }
        return this
    }
})(Zepto);
(function (F) {
    if (!("__proto__" in {})) {
        F.extend(F.zepto, {
            Z: function (A, B) {
                A = A || [];
                F.extend(A, F.fn);
                A.selector = B || "";
                A.__Z = true;
                return A
            }, isZ: function (A) {
                return F.type(A) === "array" && "__Z" in A
            }
        })
    }
    try {
        getComputedStyle(undefined)
    } catch (E) {
        var D = getComputedStyle;
        window.getComputedStyle = function (B) {
            try {
                return D(B)
            } catch (A) {
                return null
            }
        }
    }
})(Zepto);
(function (U, T) {
    var l = "", f, j = {
        Webkit: "webkit",
        Moz: "",
        O: "o"
    }, Y = document.createElement("div"), Z = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, i, h, W, k, c, b, d, e, X, a = {};

    function g(A) {
        return A.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
    }

    function V(A) {
        return f ? f + A : A.toLowerCase()
    }

    U.each(j, function (B, A) {
        if (Y.style[B + "TransitionProperty"] !== T) {
            l = "-" + B.toLowerCase() + "-";
            f = A;
            return false
        }
    });
    i = l + "transform";
    a[h = l + "transition-property"] = a[W = l + "transition-duration"] = a[c = l + "transition-delay"] = a[k = l + "transition-timing-function"] = a[b = l + "animation-name"] = a[d = l + "animation-duration"] = a[X = l + "animation-delay"] = a[e = l + "animation-timing-function"] = "";
    U.fx = {
        off: (f === T && Y.style.transitionProperty === T),
        speeds: {_default: 400, fast: 200, slow: 600},
        cssPrefix: l,
        transitionEnd: V("TransitionEnd"),
        animationEnd: V("AnimationEnd")
    };
    U.fn.animate = function (D, E, C, B, A) {
        if (U.isFunction(E)) {
            B = E, C = T, E = T
        }
        if (U.isFunction(C)) {
            B = C, C = T
        }
        if (U.isPlainObject(E)) {
            C = E.easing, B = E.complete, A = E.delay, E = E.duration
        }
        if (E) {
            E = (typeof E == "number" ? E : (U.fx.speeds[E] || U.fx.speeds._default)) / 1000
        }
        if (A) {
            A = parseFloat(A) / 1000
        }
        return this.anim(D, E, C, B, A)
    };
    U.fn.anim = function (E, K, J, A, H) {
        var F, G = {}, I, C = "", L = this, D, B = U.fx.transitionEnd, M = false;
        if (K === T) {
            K = U.fx.speeds._default / 1000
        }
        if (H === T) {
            H = 0
        }
        if (U.fx.off) {
            K = 0
        }
        if (typeof E == "string") {
            G[b] = E;
            G[d] = K + "s";
            G[X] = H + "s";
            G[e] = (J || "linear");
            B = U.fx.animationEnd
        } else {
            I = [];
            for (F in E) {
                if (Z.test(F)) {
                    C += F + "(" + E[F] + ") "
                } else {
                    G[F] = E[F], I.push(g(F))
                }
            }
            if (C) {
                G[i] = C, I.push(i)
            }
            if (K > 0 && typeof E === "object") {
                G[h] = I.join(", ");
                G[W] = K + "s";
                G[c] = H + "s";
                G[k] = (J || "linear")
            }
        }
        D = function (N) {
            if (typeof N !== "undefined") {
                if (N.target !== N.currentTarget) {
                    return
                }
                U(N.target).unbind(B, D)
            } else {
                U(this).unbind(B, D)
            }
            M = true;
            U(this).css(a);
            A && A.call(this)
        };
        if (K > 0) {
            this.bind(B, D);
            setTimeout(function () {
                if (M) {
                    return
                }
                D.call(L)
            }, ((K + H) * 1000) + 25)
        }
        this.size() && this.get(0).clientLeft;
        this.css(G);
        if (K <= 0) {
            setTimeout(function () {
                L.each(function () {
                    D.call(this)
                })
            }, 0)
        }
        return this
    };
    Y = null
})(Zepto);
jQuery=Zepto;$.fn.extend=function(A){$.extend($.fn,A)};
!function (exports, global) {
    var origDefine = global.define, get = function (e) {
        var o, l = e.split("."), n = global;
        for (o = 0; o < l.length && n; o++) {
            n = n[l[o]]
        }
        return n
    }, modules = global.define && global.define.modules || global._define && global._define.modules || {}, ourDefine = global.define = function (e, o, l) {
        var n;
        "function" == typeof o && (l = o, o = []);
        var i, f = [];
        for (i = 0; i < o.length; i++) {
            f.push(exports[o[i]] ? get(exports[o[i]]) : modules[o[i]] || get(o[i]))
        }
        if (!o.length && l.length) {
            n = {exports: {}};
            var r = function (e) {
                return exports[e] ? get(exports[e]) : modules[e]
            };
            f.push(r, n.exports, n)
        } else {
            f[0] || "exports" !== o[0] || (n = {exports: {}}, f[0] = n.exports)
        }
        global.define = origDefine;
        var t = l ? l.apply(null, f) : void 0;
        global.define = ourDefine, modules[e] = n && n.exports ? n.exports : t
    };
    global.define.orig = origDefine, global.define.modules = modules, global.define.amd = !0, global.System = {
        define: function (__name, __code) {
            global.define = origDefine, eval("(function() { " + __code + " \n }).call(global);"), global.define = ourDefine
        }
    }
}({}, window);
define("can/util/can", [], function () {
    var C = "undefined" != typeof window ? window : global, A = {};
    ("undefined" == typeof GLOBALCAN || GLOBALCAN !== !1) && (C.can = A), A.global = C, A.k = function () {
    }, A.isDeferred = A.isPromise = function (D) {
        return D && "function" == typeof D.then && "function" == typeof D.pipe
    }, A.isMapLike = function (D) {
        return A.Map && (D instanceof A.Map || D && D.__get)
    };
    var B = 0;
    return A.cid = function (E, D) {
        return E._cid || (B++, E._cid = (D || "") + B), E._cid
    }, A.VERSION = "2.2.5", A.simpleExtend = function (F, D) {
        for (var E in D) {
            F[E] = D[E]
        }
        return F
    }, A.last = function (D) {
        return D && D[D.length - 1]
    }, A.frag = function (E) {
        var D;
        return E && "string" != typeof E ? 11 === E.nodeType ? E : "number" == typeof E.nodeType ? (D = document.createDocumentFragment(), D.appendChild(E), D) : "number" == typeof E.length ? (D = document.createDocumentFragment(), A.each(E, function (F) {
            D.appendChild(A.frag(F))
        }), D) : (D = A.buildFragment("" + E, document.body), D.childNodes.length || D.appendChild(document.createTextNode("")), D) : (D = A.buildFragment(null == E ? "" : "" + E, document.body), D.childNodes.length || D.appendChild(document.createTextNode("")), D)
    }, A.scope = A.viewModel = function (F, D, G) {
        F = A.$(F);
        var E = A.data(F, "scope") || A.data(F, "viewModel");
        switch (E || (E = new A.Map, A.data(F, "scope", E), A.data(F, "viewModel", E)), arguments.length) {
            case 0:
            case 1:
                return E;
            case 2:
                return E.attr(D);
            default:
                return E.attr(D, G), F
        }
    }, A["import"] = function (E) {
        var D = new A.Deferred;
        return "object" == typeof window.System && A.isFunction(window.System["import"]) ? window.System["import"](E).then(A.proxy(D.resolve, D), A.proxy(D.reject, D)) : window.define && window.define.amd ? window.require([E], function (F) {
            D.resolve(F)
        }) : window.steal ? steal.steal(E, function (F) {
            D.resolve(F)
        }) : window.require ? D.resolve(window.require(E)) : D.resolve(), D.promise()
    }, A.__reading = function () {
    }, A
});
define("can/util/attr/attr", ["can/util/can"], function (B) {
    var C = B.global.setImmediate || function (D) {
            return setTimeout(D, 0)
        }, A = {
        MutationObserver: B.global.MutationObserver || B.global.WebKitMutationObserver || B.global.MozMutationObserver,
        map: {
            "class": "className",
            value: "value",
            innertext: "innerText",
            textcontent: "textContent",
            checked: !0,
            disabled: !0,
            readonly: !0,
            required: !0,
            src: function (D, E) {
                return null == E || "" === E ? (D.removeAttribute("src"), null) : (D.setAttribute("src", E), E)
            },
            style: function (D, E) {
                return D.style.cssText = E || ""
            }
        },
        defaultValue: ["input", "textarea"],
        set: function (I, D, G) {
            D = D.toLowerCase();
            var F;
            A.MutationObserver || (F = A.get(I, D));
            var H, E = I.nodeName.toString().toLowerCase(), J = A.map[D];
            "function" == typeof J ? H = J(I, G) : J === !0 ? (H = I[D] = !0, "checked" === D && "radio" === I.type && B.inArray(E, A.defaultValue) >= 0 && (I.defaultChecked = !0)) : J ? (H = G, I[J] !== G && (I[J] = G), "value" === J && B.inArray(E, A.defaultValue) >= 0 && (I.defaultValue = G)) : (I.setAttribute(D, G), H = G), A.MutationObserver || H === F || A.trigger(I, D, F)
        },
        trigger: function (D, E, F) {
            return B.data(B.$(D), "canHasAttributesBindings") ? (E = E.toLowerCase(), C(function () {
                B.trigger(D, {type: "attributes", attributeName: E, target: D, oldValue: F, bubbles: !1}, [])
            })) : void 0
        },
        get: function (E, F) {
            F = F.toLowerCase();
            var D = A.map[F];
            return "string" == typeof D && E[D] ? E[D] : E.getAttribute(F)
        },
        remove: function (E, G) {
            G = G.toLowerCase();
            var D;
            A.MutationObserver || (D = A.get(E, G));
            var F = A.map[G];
            "function" == typeof F && F(E, void 0), F === !0 ? E[G] = !1 : "string" == typeof F ? E[F] = "" : E.removeAttribute(G), A.MutationObserver || null == D || A.trigger(E, G, D)
        },
        has: function () {
            var D = B.global.document && document.createElement("div");
            return D && D.hasAttribute ? function (E, F) {
                return E.hasAttribute(F)
            } : function (E, F) {
                return null !== E.getAttribute(F)
            }
        }()
    };
    return A
});
define("can/event/event", ["can/util/can"], function (A) {
    return A.addEvent = function (C, B) {
        var E = this.__bindEvents || (this.__bindEvents = {}), D = E[C] || (E[C] = []);
        return D.push({handler: B, name: C}), this
    }, A.listenTo = function (C, G, F) {
        var B = this.__listenToEvents;
        B || (B = this.__listenToEvents = {});
        var E = A.cid(C), D = B[E];
        D || (D = B[E] = {obj: C, events: {}});
        var H = D.events[G];
        H || (H = D.events[G] = []), H.push(F), A.bind.call(C, G, F)
    }, A.stopListening = function (D, H, B) {
        var I = this.__listenToEvents, J = I, E = 0;
        if (!I) {
            return this
        }
        if (D) {
            var F = A.cid(D);
            if ((J = {})[F] = I[F], !I[F]) {
                return this
            }
        }
        for (var L in J) {
            var C, M = J[L];
            D = I[L].obj, H ? (C = {})[H] = M.events[H] : C = M.events;
            for (var K in C) {
                var G = C[K] || [];
                for (E = 0; E < G.length;) {
                    B && B === G[E] || !B ? (A.unbind.call(D, K, G[E]), G.splice(E, 1)) : E++
                }
                G.length || delete M.events[K]
            }
            A.isEmptyObject(M.events) && delete I[L]
        }
        return this
    }, A.removeEvent = function (D, C, G) {
        if (!this.__bindEvents) {
            return this
        }
        for (var F, B = this.__bindEvents[D] || [], E = 0, H = "function" == typeof C; E < B.length;) {
            F = B[E], (G ? G(F, D, C) : H && F.handler === C || !H && (F.cid === C || !C)) ? B.splice(E, 1) : E++
        }
        return this
    }, A.dispatch = function (I, C) {
        var F = this.__bindEvents;
        if (F) {
            "string" == typeof I && (I = {type: I});
            var B = I.type, G = (F[B] || []).slice(0), H = [I];
            C && H.push.apply(H, C);
            for (var D = 0, E = G.length; E > D; D++) {
                G[D].handler.apply(this, H)
            }
            return I
        }
    }, A.one = function (B, D) {
        var C = function () {
            return A.unbind.call(this, B, C), D.apply(this, arguments)
        };
        return A.bind.call(this, B, C), this
    }, A.event = {
        on: function () {
            return 0 === arguments.length && A.Control && this instanceof A.Control ? A.Control.prototype.on.call(this) : A.addEvent.apply(this, arguments)
        },
        off: function () {
            return 0 === arguments.length && A.Control && this instanceof A.Control ? A.Control.prototype.off.call(this) : A.removeEvent.apply(this, arguments)
        },
        bind: A.addEvent,
        unbind: A.removeEvent,
        delegate: function (B, D, C) {
            return A.addEvent.call(this, D, C)
        },
        undelegate: function (B, D, C) {
            return A.removeEvent.call(this, D, C)
        },
        trigger: A.dispatch,
        one: A.one,
        addEvent: A.addEvent,
        removeEvent: A.removeEvent,
        listenTo: A.listenTo,
        stopListening: A.stopListening,
        dispatch: A.dispatch
    }, A.event
});
define("can/util/object/isplain/isplain", ["can/util/can"], function () {
    var C = Object.prototype.hasOwnProperty, B = function (D) {
        return null !== D && D == D.window
    }, A = function (D) {
        if (!D || "object" != typeof D || D.nodeType || B(D)) {
            return !1
        }
        try {
            if (D.constructor && !C.call(D, "constructor") && !C.call(D.constructor.prototype, "isPrototypeOf")) {
                return !1
            }
        } catch (F) {
            return !1
        }
        var E;
        for (E in D) {
        }
        return void 0 === E || C.call(D, E)
    };
    return can.isPlainObject = A, can
});
define("can/util/fragment", ["can/util/can"], function (D) {
    var B = /^\s*<(\w+)[^>]*>/, A = {}.toString, C = function (J, I) {
        void 0 === I && (I = B.test(J) && RegExp.$1), J && "[object Function]" === A.call(J.replace) && (J = J.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, "<$1></$2>"));
        var K = document.createElement("div"), H = document.createElement("div");
        "tbody" === I || "tfoot" === I || "thead" === I ? (H.innerHTML = "<table>" + J + "</table>", K = 3 === H.firstChild.nodeType ? H.lastChild : H.firstChild) : "tr" === I ? (H.innerHTML = "<table><tbody>" + J + "</tbody></table>", K = 3 === H.firstChild.nodeType ? H.lastChild : H.firstChild.firstChild) : "td" === I || "th" === I ? (H.innerHTML = "<table><tbody><tr>" + J + "</tr></tbody></table>", K = 3 === H.firstChild.nodeType ? H.lastChild : H.firstChild.firstChild.firstChild) : "option" === I ? (H.innerHTML = "<select>" + J + "</select>", K = 3 === H.firstChild.nodeType ? H.lastChild : H.firstChild) : K.innerHTML = "" + J;
        var E = {}, F = K.childNodes;
        E.length = F.length;
        for (var G = 0; G < F.length; G++) {
            E[G] = F[G]
        }
        return [].slice.call(E)
    };
    return D.buildFragment = function (I, G) {
        if (I && 11 === I.nodeType) {
            return I
        }
        for (var F = C(I), J = document.createDocumentFragment(), H = 0, E = F.length; E > H; H++) {
            J.appendChild(F[H])
        }
        return J
    }, function () {
        var F = "<-\n>", E = D.buildFragment(F, document);
        if (F !== E.childNodes[0].nodeValue) {
            var G = D.buildFragment;
            D.buildFragment = function (J, I) {
                var H = G(J, I);
                return 1 === H.childNodes.length && 3 === H.childNodes[0].nodeType && (H.childNodes[0].nodeValue = J), H
            }
        }
    }(), D
});
define("can/util/deferred", ["can/util/can"], function (G) {
    var D = function (J, K) {
        for (var I in K) {
            K.hasOwnProperty(I) && (J[I] = K[I])
        }
    }, B = function (I) {
        return this instanceof B ? (this._doneFuncs = [], this._failFuncs = [], this._resultArgs = null, this._status = "", void (I && I.call(this, this))) : new B
    };
    G.Deferred = B, G.when = B.when = function () {
        var M = G.makeArray(arguments);
        if (M.length < 2) {
            var I = M[0];
            return I && G.isFunction(I.isResolved) && G.isFunction(I.isRejected) ? I : B().resolve(I)
        }
        var J = B(), L = 0, K = [];
        return G.each(M, function (O, N) {
            O.done(function () {
                K[N] = arguments.length < 2 ? arguments[0] : arguments, ++L === M.length && J.resolve.apply(J, K)
            }).fail(function () {
                J.reject(1 === arguments.length ? arguments[0] : arguments)
            })
        }), J
    };
    var E = function (I, J) {
        return function (L) {
            var K = this._resultArgs = arguments.length > 1 ? arguments[1] : [];
            return this.exec(L, this[I], K, J)
        }
    }, F = function C(J, I) {
        return function () {
            var K = this;
            return G.each(Array.prototype.slice.call(arguments), function (M, L, N) {
                M && (M.constructor === Array ? C.apply(K, M) : (K._status === I && M.apply(K, K._resultArgs || []), K[J].push(M)))
            }), this
        }
    }, A = function (I) {
        return I && I.then && I.fail && I.done
    }, H = function (L, J, I, K) {
        A(J) ? J.done(G.proxy(L.resolve, L)).fail(G.proxy(L.reject, L)) : I.call(L, void 0 !== J ? J : K)
    };
    return D(B.prototype, {
        then: function (M, J) {
            var I = G.Deferred(), K = I.resolve, L = I.reject;
            return this.done(function (N) {
                "function" == typeof M ? H(I, M.apply(this, arguments), K, N) : K.apply(I, arguments)
            }), this.fail(function (N) {
                "function" == typeof J ? H(I, J.apply(this, arguments), L, N) : L.apply(I, arguments)
            }), I
        },
        resolveWith: E("_doneFuncs", "rs"),
        rejectWith: E("_failFuncs", "rj"),
        done: F("_doneFuncs", "rs"),
        fail: F("_failFuncs", "rj"),
        always: function () {
            var I = G.makeArray(arguments);
            return I.length && I[0] && this.done(I[0]).fail(I[0]), this
        },
        state: function () {
            switch (this._status) {
                case"rs":
                    return "resolved";
                case"rj":
                    return "rejected";
                default:
                    return "pending"
            }
        },
        isResolved: function () {
            return "rs" === this._status
        },
        isRejected: function () {
            return "rj" === this._status
        },
        reject: function () {
            return this.rejectWith(this, arguments)
        },
        resolve: function () {
            return this.resolveWith(this, arguments)
        },
        exec: function (L, J, I, K) {
            return "" !== this._status ? this : (this._status = K, G.each(J, function (M) {
                "function" == typeof M.apply && M.apply(L, I)
            }), this)
        },
        promise: function () {
            var I = this.then();
            return I.reject = I.resolve = void 0, I
        }
    }), B.prototype.pipe = B.prototype.then, G
});
define("can/util/array/each", ["can/util/can"], function (A) {
    var B = function (C) {
        var D = C.length;
        return "function" != typeof arr && (0 === D || "number" == typeof D && D > 0 && D - 1 in C)
    };
    return A.each = function (E, G, J) {
        var I, C, D, H = 0;
        if (E) {
            if (B(E)) {
                if (A.List && E instanceof A.List) {
                    for (C = E.attr("length"); C > H && (D = E.attr(H), G.call(J || D, D, H, E) !== !1); H++) {
                    }
                } else {
                    for (C = E.length; C > H && (D = E[H], G.call(J || D, D, H, E) !== !1); H++) {
                    }
                }
            } else {
                if ("object" == typeof E) {
                    if (A.Map && E instanceof A.Map || E === A.route) {
                        var F = A.Map.keys(E);
                        for (H = 0, C = F.length; C > H && (I = F[H], D = E.attr(I), G.call(J || D, D, I, E) !== !1); H++) {
                        }
                    } else {
                        for (I in E) {
                            if (E.hasOwnProperty(I) && G.call(J || E[I], E[I], I, E) === !1) {
                                break
                            }
                        }
                    }
                }
            }
        }
        return E
    }, A
});
define("can/util/inserted/inserted", ["can/util/can"], function (A) {
    A.inserted = function (C) {
        C = A.makeArray(C);
        for (var G, B, I = !1, E = A.$(document.contains ? document : document.body), F = 0; void 0 !== (B = C[F]); F++) {
            if (!I) {
                if (!B.getElementsByTagName) {
                    continue
                }
                if (!A.has(E, B).length) {
                    return
                }
                I = !0
            }
            if (I && B.getElementsByTagName) {
                G = A.makeArray(B.getElementsByTagName("*")), A.trigger(B, "inserted", [], !1);
                for (var D, H = 0; void 0 !== (D = G[H]); H++) {
                    A.trigger(D, "inserted", [], !1)
                }
            }
        }
    }, A.appendChild = function (C, B) {
        var D;
        D = 11 === B.nodeType ? A.makeArray(B.childNodes) : [B], C.appendChild(B), A.inserted(D)
    }, A.insertBefore = function (C, B, E) {
        var D;
        D = 11 === B.nodeType ? A.makeArray(B.childNodes) : [B], C.insertBefore(B, E), A.inserted(D)
    }
});
define("can/util/util", ["can/util/can", "can/util/attr/attr", "can/event/event", "can/zepto/zepto", "can/util/object/isplain/isplain", "can/util/fragment", "can/util/deferred", "can/util/array/each", "can/util/inserted/inserted"], function (G, N, T) {
    function P(E, A) {
        var b = E[O], Z = b && F[b];
        return void 0 === A ? Z || K(E) : Z && Z[A] || H.call(D(E), A)
    }

    function K(E, A, c) {
        var Z = E[O] || (E[O] = ++R), b = F[Z] || (F[Z] = {});
        return void 0 !== A && (b[A] = c), b
    }

    var D = Zepto, F = {}, H = D.fn.data, R = D.uuid = +new Date, O = D.expando = "Zepto" + R;
    D.fn.data = function (E, A) {
        return void 0 === A ? 0 === this.length ? void 0 : P(this[0], E) : this.each(function (Z) {
            K(this, E, D.isFunction(A) ? A.call(this, Z, P(this, E)) : A)
        })
    }, D.cleanData = function (A) {
        for (var b, E = 0; void 0 !== (b = A[E]); E++) {
            G.trigger(b, "removed", [], !1)
        }
        for (E = 0; void 0 !== (b = A[E]); E++) {
            var Z = b[O];
            delete F[Z]
        }
    };
    var S = G.each, L = G.isPlainObject;
    D.extend(G, Zepto), G.inArray = function (E, A) {
        return A ? D.inArray.apply(D, arguments) : -1
    }, G.isPlainObject = L, G.each = S, G.attr = N, G.event = T;
    var U = function (E, A) {
        return E[0] && E[0][A] || E[A]
    };
    G.trigger = function (A, b, E, Z) {
        A.trigger ? A.trigger(b, E) : U(A, "dispatchEvent") ? Z === !1 ? D([A]).triggerHandler(b, E) : D([A]).trigger(b, E) : ("string" == typeof b && (b = {type: b}), b.target = b.target || A, G.dispatch.call(A, b, G.makeArray(E)))
    }, G.$ = Zepto, G.bind = function (A, E) {
        return this.bind && this.bind !== G.bind ? this.bind(A, E) : U(this, "addEventListener") ? D([this]).bind(A, E) : G.addEvent.call(this, A, E), this
    }, G.unbind = function (A, E) {
        return this.unbind && this.unbind !== G.unbind ? this.unbind(A, E) : U(this, "addEventListener") ? D([this]).unbind(A, E) : G.removeEvent.call(this, A, E), this
    }, G.on = G.bind, G.off = G.unbind, G.delegate = function (A, Z, E) {
        A ? this.delegate ? this.delegate(A, Z, E) : U(this, "addEventListener") ? D([this]).delegate(A, Z, E) : G.addEvent.call(this, Z, E) : G.bind.call(this, Z, E)
    }, G.undelegate = function (A, Z, E) {
        A ? this.undelegate ? this.undelegate(A, Z, E) : U(this, "addEventListener") ? D([this]).undelegate(A, Z, E) : G.removeEvent.call(this, Z, E) : G.unbind.call(this, Z, E)
    }, D.each(["append", "filter", "addClass", "remove", "data", "has"], function (A, E) {
        G[E] = function (Z) {
            return Z[E].apply(Z, G.makeArray(arguments).slice(1))
        }
    }), G.makeArray = function (A) {
        var E = [];
        return null == A ? [] : void 0 === A.length || "string" == typeof A ? [A] : (G.each(A, function (a, Z) {
            E[Z] = a
        }), E)
    }, G.proxy = function (E, A) {
        return function () {
            return E.apply(A, arguments)
        }
    };
    var J = D.ajaxSettings.xhr;
    D.ajaxSettings.xhr = function () {
        var E = J(), A = E.open;
        return E.open = function (Z, c, b) {
            A.call(this, Z, c, void 0 === I ? !0 : I)
        }, E
    };
    var I, V = D.ajax, C = function (E, A) {
        for (var Z in E) {
            A[Z] = "function" == typeof A[Z] ? function () {
                E[Z].apply(E, arguments)
            } : Z[E]
        }
    };
    G.ajax = function (E) {
        var c = E.success, Z = E.error, b = G.Deferred();
        E.success = function (a) {
            C(A, b), b.resolve.call(b, a), c && c.apply(this, arguments)
        }, E.error = function () {
            C(A, b), b.reject.apply(b, arguments), Z && Z.apply(this, arguments)
        }, E.async === !1 && (I = !1);
        var A = V(E);
        return I = void 0, C(A, b), b
    };
    var M = D.fn.empty;
    D.fn.empty = function () {
        return this.each(function () {
            D.cleanData(this.getElementsByTagName("*")), this.innerHTML = ""
        }), M.call(this)
    };
    var B = D.fn.remove;
    D.fn.remove = function () {
        return this.each(function () {
            this.getElementsByTagName && D.cleanData([this].concat(G.makeArray(this.getElementsByTagName("*"))))
        }), B.call(this)
    }, G.trim = function (A) {
        return A.trim()
    }, G.isEmptyObject = function (E) {
        var A;
        for (A in E) {
        }
        return void 0 === A
    }, G.extend = function (A) {
        if (A === !0) {
            var E = G.makeArray(arguments);
            return E.shift(), D.extend.apply(D, E)
        }
        return D.extend.apply(D, arguments)
    }, G.get = function (E, A) {
        return E[A]
    }, G.each(["after", "prepend", "before", "append"], function (A) {
        var E = Zepto.fn[A];
        Zepto.fn[A] = function () {
            var Z, b = G.makeArray(arguments);
            null != b[0] && ("string" == typeof b[0] && (b[0] = D.zepto.fragment(b[0])), Z = 11 === b[0].nodeType ? G.makeArray(b[0].childNodes) : b[0] instanceof Zepto.fn.constructor ? G.makeArray(b[0]) : [b[0]]);
            var c = E.apply(this, b);
            return G.inserted(Z), c
        }
    }), delete N.MutationObserver;
    var Q = D.fn.attr;
    D.fn.attr = function (E, d) {
        var b, c, A = "string" == typeof E;
        void 0 !== d && A && (b = Q.call(this, E));
        var Z = Q.apply(this, arguments);
        return void 0 !== d && A && (c = Q.call(this, E)), c !== b && G.attr.trigger(this[0], E, b), Z
    };
    var W = D.fn.removeAttr;
    D.fn.removeAttr = function (A) {
        var Z = Q.call(this, A), E = W.apply(this, arguments);
        return null != Z && G.attr.trigger(this[0], A, Z), E
    };
    var X = D.fn.bind, Y = D.fn.unbind;
    return D.fn.bind = function (A) {
        return "attributes" === A && this.each(function () {
            var E = G.$(this);
            G.data(E, "canHasAttributesBindings", (G.data(E, "canHasAttributesBindings") || 0) + 1)
        }), X.apply(this, arguments)
    }, D.fn.unbind = function (A) {
        return "attributes" === A && this.each(function () {
            var E = G.$(this), Z = G.data(E, "canHasAttributesBindings") || 0;
            0 >= Z ? G.data(E, "canHasAttributesBindings", 0) : G.data(E, "canHasAttributesBindings", Z - 1)
        }), Y.apply(this, arguments)
    }, G
});
define("can/view/view", ["can/util/util"], function (G) {
    var H = G.isFunction, B = G.makeArray, I = 1, A = function (L) {
        var K = function () {
            return E.frag(L.apply(this, arguments))
        };
        return K.render = function () {
            return L.apply(L, arguments)
        }, K
    }, J = function (L, K) {
        if (!L.length) {
            throw"can.view: No template or empty template:" + K
        }
    }, D = function (L, S) {
        if (H(L)) {
            var K = G.Deferred();
            return K.resolve(L)
        }
        var N, M, O, P = "string" == typeof L ? L : L.url, R = L.engine && "." + L.engine || P.match(/\.[\w\d]+$/);
        if (P.match(/^#/) && (P = P.substr(1)), (M = document.getElementById(P)) && (R = "." + M.type.match(/\/(x\-)?(.+)/)[2]), R || E.cached[P] || (P += R = E.ext), G.isArray(R) && (R = R[0]), O = E.toId(P), P.match(/^\/\//) && (P = P.substr(2), P = window.steal ? steal.config().root.mapJoin("" + steal.id(P)) : P), window.require && require.toUrl && (P = require.toUrl(P)), N = E.types[R], E.cached[O]) {
            return E.cached[O]
        }
        if (M) {
            return E.registerView(O, M.innerHTML, N)
        }
        var Q = new G.Deferred;
        return G.ajax({
            async: S, url: P, dataType: "text", error: function (T) {
                J("", P), Q.reject(T)
            }, success: function (T) {
                J(T, P), E.registerView(O, T, N, Q)
            }
        }), Q
    }, C = function (K) {
        var L = [];
        if (G.isDeferred(K)) {
            return [K]
        }
        for (var M in K) {
            G.isDeferred(K[M]) && L.push(K[M])
        }
        return L
    }, F = function (K) {
        return G.isArray(K) && "success" === K[1] ? K[0] : K
    }, E = G.view = G.template = function (N, K, L, M) {
        return H(L) && (M = L, L = void 0), E.renderAs("fragment", N, K, L, M)
    };
    return G.extend(E, {
        frag: function (L, K) {
            return E.hookup(E.fragment(L), K)
        }, fragment: function (K) {
            if ("string" != typeof K && 11 === K.nodeType) {
                return K
            }
            var L = G.buildFragment(K, document.body);
            return L.childNodes.length || L.appendChild(document.createTextNode("")), L
        }, toId: function (K) {
            return G.map(K.toString().split(/\/|\./g), function (L) {
                return L ? L : void 0
            }).join("_")
        }, toStr: function (K) {
            return null == K ? "" : "" + K
        }, hookup: function (K, L) {
            var M, O, N = [];
            return G.each(K.childNodes ? G.makeArray(K.childNodes) : K, function (P) {
                1 === P.nodeType && (N.push(P), N.push.apply(N, G.makeArray(P.getElementsByTagName("*"))))
            }), G.each(N, function (P) {
                P.getAttribute && (M = P.getAttribute("data-view-id")) && (O = E.hookups[M]) && (O(P, L, M), delete E.hookups[M], P.removeAttribute("data-view-id"))
            }), K
        }, hookups: {}, hook: function (K) {
            return E.hookups[++I] = K, " data-view-id='" + I + "'"
        }, cached: {}, cachedRenderers: {}, cache: !0, register: function (K) {
            this.types["." + K.suffix] = K, G[K.suffix] = E[K.suffix] = function (P, L) {
                var M, N;
                if (!L) {
                    return N = function () {
                        return M || (M = K.fragRenderer ? K.fragRenderer(null, P) : A(K.renderer(null, P))), M.apply(this, arguments)
                    }, N.render = function () {
                        var Q = K.renderer(null, P);
                        return Q.apply(Q, arguments)
                    }, N
                }
                var O = function () {
                    return M || (M = K.fragRenderer ? K.fragRenderer(P, L) : K.renderer(P, L)), M.apply(this, arguments)
                };
                return K.fragRenderer ? E.preload(P, O) : E.preloadStringRenderer(P, O)
            }
        }, types: {}, ext: ".ejs", registerScript: function (M, K, L) {
            return "can.view.preloadStringRenderer('" + K + "'," + E.types["." + M].script(K, L) + ");"
        }, preload: function (K, L) {
            var M = E.cached[K] = (new G.Deferred).resolve(function (O, N) {
                return L.call(O, O, N)
            });
            return M.__view_id = K, E.cachedRenderers[K] = L, L
        }, preloadStringRenderer: function (L, K) {
            return this.preload(L, A(K))
        }, render: function (K, L, M, N) {
            return G.view.renderAs("string", K, L, M, N)
        }, renderTo: function (N, K, L, M) {
            return ("string" === N && K.render ? K.render : K)(L, M)
        }, renderAs: function (R, K, S, O, Q) {
            H(O) && (Q = O, O = void 0);
            var P, L, N, V, T, M = C(S);
            if (M.length) {
                return L = new G.Deferred, N = G.extend({}, S), M.push(D(K, !0)), G.when.apply(G, M).then(function (W) {
                    var b, Y = B(arguments), X = Y.pop();
                    if (G.isDeferred(S)) {
                        N = F(W)
                    } else {
                        for (var Z in S) {
                            G.isDeferred(S[Z]) && (N[Z] = F(Y.shift()))
                        }
                    }
                    b = G.view.renderTo(R, X, N, O), L.resolve(b, N), Q && Q(b, N)
                }, function () {
                    L.reject.apply(L, arguments)
                }), L
            }
            if (P = G.__clearReading(), V = H(Q), L = D(K, V), P && G.__setReading(P), V) {
                T = L, L.then(function (W) {
                    Q(S ? G.view.renderTo(R, W, S, O) : W)
                })
            } else {
                if ("resolved" === L.state() && L.__view_id) {
                    var U = E.cachedRenderers[L.__view_id];
                    return S ? G.view.renderTo(R, U, S, O) : U
                }
                L.then(function (W) {
                    T = S ? G.view.renderTo(R, W, S, O) : W
                })
            }
            return T
        }, registerView: function (K, L, M, N) {
            var O, P = "object" == typeof M ? M : E.types[M || E.ext];
            return O = P.fragRenderer ? P.fragRenderer(K, L) : A(P.renderer(K, L)), N = N || new G.Deferred, E.cache && (E.cached[K] = N, N.__view_id = K, E.cachedRenderers[K] = O), N.resolve(O)
        }
    }), G
});
define("can/view/callbacks/callbacks", ["can/util/util", "can/view/view"], function (C) {
    var D = C.view.attr = function (J, K) {
        if (!K) {
            var H = F[J];
            if (!H) {
                for (var I = 0, M = E.length; M > I; I++) {
                    var L = E[I];
                    if (L.match.test(J)) {
                        H = L.handler;
                        break
                    }
                }
            }
            return H
        }
        "string" == typeof J ? F[J] = K : E.push({match: J, handler: K})
    }, F = {}, E = [], A = /[-\:]/, B = C.view.tag = function (H, J) {
        if (!J) {
            var I = G[H.toLowerCase()];
            return !I && A.test(H) && (I = function () {
            }), I
        }
        C.global.html5 && (C.global.html5.elements += " " + H, C.global.html5.shivDocument()), G[H.toLowerCase()] = J
    }, G = {};
    return C.view.callbacks = {
        _tags: G,
        _attributes: F,
        _regExpAttributes: E,
        tag: B,
        attr: D,
        tagHandler: function (K, M, H) {
            var O, I = H.options.attr("tags." + M), P = I || G[M], L = H.scope;
            if (P) {
                var J = C.__clearReading();
                O = P(K, H), C.__setReading(J)
            } else {
                O = L
            }
            if (O && H.subtemplate) {
                L !== O && (L = L.add(O));
                var Q = H.subtemplate(L, H.options), N = "string" == typeof Q ? C.view.frag(Q) : Q;
                C.appendChild(K, N)
            }
        }
    }, C.view.callbacks
});
define("can/view/elements", ["can/util/util", "can/view/view"], function (B) {
    var C = "undefined" != typeof document ? document : null, A = C && function () {
            return 1 === B.$(document.createComment("~")).length
        }(), D = {
        tagToContentPropMap: {
            option: C && "textContent" in document.createElement("option") ? "textContent" : "innerText",
            textarea: "value"
        },
        attrMap: B.attr.map,
        attrReg: /([^\s=]+)[\s]*=[\s]*/,
        defaultValue: B.attr.defaultValue,
        tagMap: {
            "": "span",
            colgroup: "col",
            table: "tbody",
            tr: "td",
            ol: "li",
            ul: "li",
            tbody: "tr",
            thead: "tr",
            tfoot: "tr",
            select: "option",
            optgroup: "option"
        },
        reverseTagMap: {col: "colgroup", tr: "tbody", option: "select", td: "tr", th: "tr", li: "ul"},
        getParentNode: function (E, F) {
            return F && 11 === E.parentNode.nodeType ? F : E.parentNode
        },
        setAttr: B.attr.set,
        getAttr: B.attr.get,
        removeAttr: B.attr.remove,
        contentText: function (E) {
            return "string" == typeof E ? E : E || 0 === E ? "" + E : ""
        },
        after: function (G, E) {
            var F = G[G.length - 1];
            F.nextSibling ? B.insertBefore(F.parentNode, E, F.nextSibling) : B.appendChild(F.parentNode, E)
        },
        replace: function (F, E) {
            D.after(F, E), B.remove(B.$(F)).length < F.length && !A && B.each(F, function (G) {
                8 === G.nodeType && G.parentNode.removeChild(G)
            })
        }
    };
    return B.view.elements = D, D
});
define("can/util/string/string", ["can/util/util"], function (I) {
    var L = /_|-/, C = /\=\=/, M = /([A-Z]+)([A-Z][a-z])/g, E = /([a-z\d])([A-Z])/g, N = /([a-z\d])([A-Z])/g, A = /\{([^\}]+)\}/g, G = /"/g, D = /'/g, B = /-+(.)?/g, K = /[a-z][A-Z]/g, J = function (R, O, P) {
        var Q = R[O];
        return void 0 === Q && P === !0 && (Q = R[O] = {}), Q
    }, F = function (O) {
        return /^f|^o/.test(typeof O)
    }, H = function (P) {
        var O = null === P || void 0 === P || isNaN(P) && "" + P == "NaN";
        return "" + (O ? "" : P)
    };
    return I.extend(I, {
        esc: function (O) {
            return H(O).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(G, "&#34;").replace(D, "&#39;")
        }, getObject: function (V, Q, W) {
            var S, X, O, T, R = V ? V.split(".") : [], P = R.length, U = 0;
            if (Q = I.isArray(Q) ? Q : [Q || window], T = Q.length, !P) {
                return Q[0]
            }
            for (U; T > U; U++) {
                for (S = Q[U], O = void 0, X = 0; P > X && F(S); X++) {
                    O = S, S = J(O, R[X])
                }
                if (void 0 !== O && void 0 !== S) {
                    break
                }
            }
            if (W === !1 && void 0 !== S && delete O[R[X - 1]], W === !0 && void 0 === S) {
                for (S = Q[0], X = 0; P > X && F(S); X++) {
                    S = J(S, R[X], !0)
                }
            }
            return S
        }, capitalize: function (P, O) {
            return P.charAt(0).toUpperCase() + P.slice(1)
        }, camelize: function (O) {
            return H(O).replace(B, function (Q, P) {
                return P ? P.toUpperCase() : ""
            })
        }, hyphenate: function (O) {
            return H(O).replace(K, function (Q, P) {
                return Q.charAt(0) + "-" + Q.charAt(1).toLowerCase()
            })
        }, underscore: function (O) {
            return O.replace(C, "/").replace(M, "$1_$2").replace(E, "$1_$2").replace(N, "_").toLowerCase()
        }, sub: function (O, P, Q) {
            var R = [];
            return O = O || "", R.push(O.replace(A, function (S, T) {
                var U = I.getObject(T, P, Q === !0 ? !1 : void 0);
                return void 0 === U || null === U ? (R = null, "") : F(U) && R ? (R.push(U), "") : "" + U
            })), null === R ? R : R.length <= 1 ? R[0] : R
        }, replacer: A, undHash: L
    }), I
});
define("can/construct/construct", ["can/util/string/string"], function (C) {
    var B, A = 0;
    try {
        Object.getOwnPropertyDescriptor({}), B = !0
    } catch (F) {
        B = !1
    }
    var G = function (J, I) {
        var H = Object.getOwnPropertyDescriptor(J, I);
        return H && (H.get || H.set) ? H : null
    }, D = function (I, H, L) {
        L = L || I;
        var J;
        for (var K in I) {
            (J = G(I, K)) ? this._defineProperty(L, H, K, J) : C.Construct._overwrite(L, H, K, I[K])
        }
    }, E = function (I, H, K) {
        K = K || I;
        for (var J in I) {
            C.Construct._overwrite(K, H, J, I[J])
        }
    };
    return C.Construct = function () {
        return arguments.length ? C.Construct.extend.apply(C.Construct, arguments) : void 0
    }, C.extend(C.Construct, {
        constructorExtends: !0, newInstance: function () {
            var I, H = this.instance();
            return H.setup && (I = H.setup.apply(H, arguments)), H.init && H.init.apply(H, I || arguments), H
        }, _inherit: B ? D : E, _defineProperty: function (J, I, H, K) {
            Object.defineProperty(J, H, K)
        }, _overwrite: function (J, I, H, K) {
            J[H] = K
        }, setup: function (I, H) {
            this.defaults = C.extend(!0, {}, I.defaults, this.defaults)
        }, instance: function () {
            A = 1;
            var H = new this;
            return A = 0, H
        }, extend: function (R, X, S) {
            function K() {
                return A ? void 0 : this.constructor !== T && arguments.length && T.constructorExtends ? T.extend.apply(T, arguments) : T.newInstance.apply(T, arguments)
            }

            var O = R, J = X, V = S;
            "string" != typeof O && (V = J, J = O, O = null), V || (V = J, J = null), V = V || {};
            var T, I, Y, P, W, H, Z, N, L, Q = this, M = this.prototype;
            L = this.instance(), C.Construct._inherit(V, M, L), O && (I = O.split("."), Z = I.pop()), "undefined" == typeof constructorName && (T = function () {
                return K.apply(this, arguments)
            });
            for (H in Q) {
                Q.hasOwnProperty(H) && (T[H] = Q[H])
            }
            C.Construct._inherit(J, Q, T), O && (Y = C.getObject(I.join("."), window, !0), N = Y, P = C.underscore(O.replace(/\./g, "_")), W = C.underscore(Z), Y[Z] = T), C.extend(T, {
                constructor: T,
                prototype: L,
                namespace: N,
                _shortName: W,
                fullName: O,
                _fullName: P
            }), void 0 !== Z && (T.shortName = Z), T.prototype.constructor = T;
            var b = [Q].concat(C.makeArray(arguments)), U = T.setup.apply(T, b);
            return T.init && T.init.apply(T, U || b), T
        }
    }), C.Construct.prototype.setup = function () {
    }, C.Construct.prototype.init = function () {
    }, C.Construct
});
define("can/control/control", ["can/util/util", "can/construct/construct"], function (K) {
    var C, G = function (N, P, O) {
        return K.bind.call(N, P, O), function () {
            K.unbind.call(N, P, O)
        }
    }, D = K.isFunction, J = K.extend, A = K.each, I = [].slice, L = /\{([^\}]+)\}/g, F = K.getObject("$.event.special", [K]) || {}, B = function (N, Q, O, P) {
        return K.delegate.call(N, Q, O, P), function () {
            K.undelegate.call(N, Q, O, P)
        }
    }, E = function (N, O, Q, P) {
        return P ? B(N, K.trim(P), O, Q) : G(N, O, Q)
    }, M = K.Control = K.Construct({
        setup: function () {
            if (K.Construct.setup.apply(this, arguments), K.Control) {
                var N, O = this;
                O.actions = {};
                for (N in O.prototype) {
                    O._isAction(N) && (O.actions[N] = O._action(N))
                }
            }
        }, _shifter: function (N, P) {
            var O = "string" == typeof P ? N[P] : P;
            return D(O) || (O = N[O]), function () {
                return N.called = P, O.apply(N, [this.nodeName ? K.$(this) : this].concat(I.call(arguments, 0)))
            }
        }, _isAction: function (O) {
            var N = this.prototype[O], P = typeof N;
            return "constructor" !== O && ("function" === P || "string" === P && D(this.prototype[N])) && !!(F[O] || H[O] || /[^\w]/.test(O))
        }, _action: function (S, P) {
            if (L.lastIndex = 0, P || !L.test(S)) {
                var O = P ? K.sub(S, this._lookup(P)) : S;
                if (!O) {
                    return null
                }
                var R = K.isArray(O), N = R ? O[1] : O, Q = N.split(/\s+/g), T = Q.pop();
                return {processor: H[T] || C, parts: [N, Q.join(" "), T], delegate: R ? O[0] : void 0}
            }
        }, _lookup: function (N) {
            return [N, window]
        }, processors: {}, defaults: {}
    }, {
        setup: function (O, R) {
            var P, Q = this.constructor, N = Q.pluginName || Q._fullName;
            return this.element = K.$(O), N && "can_control" !== N && this.element.addClass(N), P = K.data(this.element, "controls"), P || (P = [], K.data(this.element, "controls", P)), P.push(this), this.options = J({}, Q.defaults, R), this.on(), [this.element, this.options]
        }, on: function (P, S, Q, V) {
            if (!P) {
                this.off();
                var N, U, W = this.constructor, R = this._bindings, O = W.actions, X = this.element, T = K.Control._shifter(this, "destroy");
                for (N in O) {
                    O.hasOwnProperty(N) && (U = O[N] || W._action(N, this.options, this), U && (R.control[N] = U.processor(U.delegate || X, U.parts[2], U.parts[1], N, this)))
                }
                return K.bind.call(X, "removed", T), R.user.push(function (Y) {
                    K.unbind.call(Y, "removed", T)
                }), R.user.length
            }
            return "string" == typeof P && (V = Q, Q = S, S = P, P = this.element), void 0 === V && (V = Q, Q = S, S = null), "string" == typeof V && (V = K.Control._shifter(this, V)), this._bindings.user.push(E(P, Q, V, S)), this._bindings.user.length
        }, off: function () {
            var O = this.element[0], N = this._bindings;
            N && (A(N.user || [], function (P) {
                P(O)
            }), A(N.control || {}, function (P) {
                P(O)
            })), this._bindings = {user: [], control: {}}
        }, destroy: function () {
            if (null !== this.element) {
                var N, P = this.constructor, O = P.pluginName || P._fullName;
                this.off(), O && "can_control" !== O && this.element.removeClass(O), N = K.data(this.element, "controls"), N.splice(K.inArray(this, N), 1), K.trigger(this, "destroyed"), this.element = null
            }
        }
    }), H = K.Control.processors;
    return C = function (N, R, O, P, Q) {
        return E(N, R, K.Control._shifter(Q, P), O)
    }, A(["change", "click", "contextmenu", "dblclick", "keydown", "keyup", "keypress", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "reset", "resize", "scroll", "select", "submit", "focusin", "focusout", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchcancel", "touchend", "touchleave", "inserted", "removed"], function (N) {
        H[N] = C
    }), M
});
define("can/util/bind/bind", ["can/util/util"], function (A) {
    return A.bindAndSetup = function () {
        return A.addEvent.apply(this, arguments), this._init || (this._bindings ? this._bindings++ : (this._bindings = 1, this._bindsetup && this._bindsetup())), this
    }, A.unbindAndTeardown = function (E, C) {
        var B = this.__bindEvents[E] || [], D = B.length;
        return A.removeEvent.apply(this, arguments), this._bindings = null === this._bindings ? 0 : this._bindings - (D - B.length), !this._bindings && this._bindteardown && this._bindteardown(), this
    }, A
});
define("can/map/bubble", ["can/util/util"], function (A) {
    var B = A.bubble = {
        event: function (C, D) {
            return C.constructor._bubbleRule(D, C)
        }, childrenOf: function (C, D) {
            C._each(function (F, E) {
                F && F.bind && B.toParent(F, C, E, D)
            })
        }, teardownChildrenFrom: function (C, D) {
            C._each(function (E) {
                B.teardownFromParent(C, E, D)
            })
        }, toParent: function (F, E, D, C) {
            A.listenTo.call(E, F, C, function () {
                var G = A.makeArray(arguments), H = G.shift();
                G[0] = (A.List && E instanceof A.List ? E.indexOf(F) : D) + (G[0] ? "." + G[0] : ""), H.triggeredNS = H.triggeredNS || {}, H.triggeredNS[E._cid] || (H.triggeredNS[E._cid] = !0, A.trigger(E, H, G))
            })
        }, teardownFromParent: function (E, D, C) {
            D && D.unbind && A.stopListening.call(E, D, C)
        }, isBubbling: function (C, D) {
            return C._bubbleBindings && C._bubbleBindings[D]
        }, bind: function (D, H) {
            if (!D._init) {
                var G, C = B.event(D, H), E = C.length;
                D._bubbleBindings || (D._bubbleBindings = {});
                for (var F = 0; E > F; F++) {
                    G = C[F], D._bubbleBindings[G] ? D._bubbleBindings[G]++ : (D._bubbleBindings[G] = 1, B.childrenOf(D, G))
                }
            }
        }, unbind: function (H, G) {
            for (var C, D = B.event(H, G), E = D.length, F = 0; E > F; F++) {
                C = D[F], H._bubbleBindings && H._bubbleBindings[C]--, H._bubbleBindings && !H._bubbleBindings[C] && (delete H._bubbleBindings[C], B.teardownChildrenFrom(H, C), A.isEmptyObject(H._bubbleBindings) && delete H._bubbleBindings)
            }
        }, add: function (F, E, C) {
            if (E instanceof A.Map && F._bubbleBindings) {
                for (var D in F._bubbleBindings) {
                    F._bubbleBindings[D] && (B.teardownFromParent(F, E, D), B.toParent(E, F, C, D))
                }
            }
        }, removeMany: function (D, F) {
            for (var E = 0, C = F.length; C > E; E++) {
                B.remove(D, F[E])
            }
        }, remove: function (E, D) {
            if (D instanceof A.Map && E._bubbleBindings) {
                for (var C in E._bubbleBindings) {
                    E._bubbleBindings[C] && B.teardownFromParent(E, D, C)
                }
            }
        }, set: function (F, E, C, D) {
            return A.Map.helpers.isObservable(C) && B.add(F, C, E), A.Map.helpers.isObservable(D) && B.remove(F, D), C
        }
    };
    return B
});
define("can/util/batch/batch", ["can/util/can"], function (B) {
    var A = 1, C = 0, E = [], D = [], F = null;
    B.batch = {
        start: function (G) {
            C++, G && D.push(G)
        }, stop: function (K, H) {
            if (K ? C = 0 : C--, 0 === C) {
                if (null !== F) {
                    return
                }
                F = E.slice(0);
                var I, G, J = D.slice(0);
                for (E = [], D = [], B.batch.batchNum = A, A++, H && B.batch.start(), I = 0; I < F.length; I++) {
                    B.dispatch.apply(F[I][0], F[I][1])
                }
                for (F = null, I = 0, G = J.length; I < J.length; I++) {
                    J[I]()
                }
                B.batch.batchNum = void 0
            }
        }, trigger: function (H, I, G) {
            if (!H._init) {
                if (I = "string" == typeof I ? {type: I} : I, F) {
                    F.push([H, [I, G]])
                } else {
                    if (0 === C) {
                        return B.dispatch.call(H, I, G)
                    }
                    I.batchNum = A, E.push([H, [I, G]])
                }
            }
        }, afterPreviousEvents: function (G) {
            if (F) {
                var H = {};
                B.bind.call(H, "ready", G), F.push([H, [{type: "ready"}, []]])
            } else {
                G()
            }
        }
    }
});
define("can/map/map", ["can/util/util", "can/util/bind/bind", "can/map/bubble", "can/construct/construct", "can/util/batch/batch"], function (H, E, A) {
    var B = null, G = function () {
        for (var I in B) {
            B[I].added && delete B[I].obj._cid
        }
        B = null
    }, F = function (I) {
        return B && B[I._cid] && B[I._cid].instance
    }, D = null, C = H.Map = H.Construct.extend({
        setup: function () {
            if (H.Construct.setup.apply(this, arguments), H.Map) {
                this.defaults || (this.defaults = {}), this._computes = [];
                for (var I in this.prototype) {
                    "define" !== I && "constructor" !== I && ("function" != typeof this.prototype[I] || this.prototype[I].prototype instanceof H.Construct) ? this.defaults[I] = this.prototype[I] : this.prototype[I].isComputed && this._computes.push(I)
                }
                this.helpers.define && this.helpers.define(this)
            }
            !H.List || this.prototype instanceof H.List || (this.List = C.List.extend({Map: this}, {}))
        },
        _bubble: A,
        _bubbleRule: function (I) {
            return "change" === I || I.indexOf(".") >= 0 ? ["change"] : []
        },
        _computes: [],
        bind: H.bindAndSetup,
        on: H.bindAndSetup,
        unbind: H.unbindAndTeardown,
        off: H.unbindAndTeardown,
        id: "id",
        helpers: {
            define: null, attrParts: function (I, J) {
                return J ? [I] : "object" == typeof I ? I : ("" + I).split(".")
            }, addToMap: function (M, L) {
                var I;
                B || (I = G, B = {});
                var K = M._cid, J = H.cid(M);
                return B[J] || (B[J] = {obj: M, instance: L, added: !K}), I
            }, isObservable: function (I) {
                return I instanceof H.Map || I && I === H.route
            }, canMakeObserve: function (I) {
                return I && !H.isDeferred(I) && (H.isArray(I) || H.isPlainObject(I))
            }, serialize: function (M, L, J) {
                var K = H.cid(M), I = !1;
                return D || (I = !0, D = {attr: {}, serialize: {}}), D[L][K] = J, M.each(function (O, N) {
                    var P, Q = C.helpers.isObservable(O), R = Q && D[L][H.cid(O)];
                    P = R ? R : "serialize" === L ? C.helpers._serialize(M, N, O) : C.helpers._getValue(M, N, O, L), void 0 !== P && (J[N] = P)
                }), H.__reading(M, "__keys"), I && (D = null), J
            }, _serialize: function (I, K, J) {
                return C.helpers._getValue(I, K, J, "serialize")
            }, _getValue: function (J, L, K, I) {
                return C.helpers.isObservable(K) ? K[I]() : K
            }
        },
        keys: function (K) {
            var J = [];
            H.__reading(K, "__keys");
            for (var I in K._data) {
                J.push(I)
            }
            return J
        }
    }, {
        setup: function (L) {
            L instanceof H.Map && (L = L.serialize()), this._data = {}, H.cid(this, ".map"), this._init = 1, this._computedBindings = {};
            var K = this._setupDefaults(L);
            this._setupComputes(K);
            var I = L && H.Map.helpers.addToMap(L, this), J = H.extend(H.extend(!0, {}, K), L);
            this.attr(J), I && I(), this.bind("change", H.proxy(this._changes, this)), delete this._init
        }, _setupComputes: function () {
            for (var J, L = this.constructor._computes, K = 0, I = L.length; I > K; K++) {
                J = L[K], this[J] = this[J].clone(this), this._computedBindings[J] = {count: 0}
            }
        }, _setupDefaults: function () {
            return this.constructor.defaults || {}
        }, _bindsetup: function () {
        }, _bindteardown: function () {
        }, _changes: function (M, L, J, K, I) {
            H.batch.trigger(this, {type: L, batchNum: M.batchNum, target: M.target}, [K, I])
        }, _triggerChange: function (L, J, K, I) {
            A.isBubbling(this, "change") ? H.batch.trigger(this, {
                type: "change",
                target: this
            }, [L, J, K, I]) : H.batch.trigger(this, L, [K, I]), ("remove" === J || "add" === J) && H.batch.trigger(this, {
                type: "__keys",
                target: this
            })
        }, _each: function (I) {
            var K = this.__get();
            for (var J in K) {
                K.hasOwnProperty(J) && I(K[J], J)
            }
        }, attr: function (K, J) {
            var I = typeof K;
            return "string" !== I && "number" !== I ? this._attrs(K, J) : 1 === arguments.length ? (H.__reading(this, K), this._get(K)) : (this._set(K, J), this)
        }, each: function () {
            return H.each.apply(void 0, [this].concat(H.makeArray(arguments)))
        }, removeAttr: function (M) {
            var L = H.List && this instanceof H.List, J = H.Map.helpers.attrParts(M), K = J.shift(), I = L ? this[K] : this._data[K];
            return J.length && I ? I.removeAttr(J) : ("string" == typeof M && ~M.indexOf(".") && (K = M), this._remove(K, I), I)
        }, _remove: function (I, J) {
            I in this._data && (delete this._data[I], I in this.constructor.prototype || delete this[I], this._triggerChange(I, "remove", void 0, J))
        }, _get: function (K) {
            K = "" + K;
            var N = K.indexOf(".");
            if (N >= 0) {
                var M = this.__get(K);
                if (void 0 !== M) {
                    return M
                }
                var J = K.substr(0, N), L = K.substr(N + 1), I = this.__get(J);
                return I && I._get ? I._get(L) : void 0
            }
            return this.__get(K)
        }, __get: function (I) {
            return I ? this._computedBindings[I] ? this[I]() : this._data[I] : this._data
        }, __type: function (L, K) {
            if (!(L instanceof H.Map) && H.Map.helpers.canMakeObserve(L)) {
                var I = F(L);
                if (I) {
                    return I
                }
                if (H.isArray(L)) {
                    var J = H.List;
                    return new J(L)
                }
                var M = this.constructor.Map || H.Map;
                return new M(L)
            }
            return L
        }, _set: function (K, N, M) {
            K = "" + K;
            var J, L = K.indexOf(".");
            if (!M && L >= 0) {
                var I = K.substr(0, L), O = K.substr(L + 1);
                if (J = this._init ? void 0 : this.__get(I), !C.helpers.isObservable(J)) {
                    throw"can.Map: Object does not exist"
                }
                J._set(O, N)
            } else {
                this.__convert && (N = this.__convert(K, N)), J = this._init ? void 0 : this.__get(K), this.__set(K, this.__type(N, K), J)
            }
        }, __set: function (J, L, K) {
            if (L !== K) {
                var I = void 0 !== K || this.__get().hasOwnProperty(J) ? "set" : "add";
                this.___set(J, this.constructor._bubble.set(this, J, L, K)), this._computedBindings[J] || this._triggerChange(J, I, L, K), K && this.constructor._bubble.teardownFromParent(this, K)
            }
        }, ___set: function (I, J) {
            this._computedBindings[I] ? this[I](J) : this._data[I] = J, "function" == typeof this.constructor.prototype[I] || this._computedBindings[I] || (this[I] = J)
        }, bind: function (L, K) {
            var I = this._computedBindings && this._computedBindings[L];
            if (I) {
                if (I.count) {
                    I.count++
                } else {
                    I.count = 1;
                    var J = this;
                    I.handler = function (O, N, M) {
                        H.batch.trigger(J, {type: L, batchNum: O.batchNum, target: J}, [N, M])
                    }, this[L].bind("change", I.handler)
                }
            }
            return this.constructor._bubble.bind(this, L), H.bindAndSetup.apply(this, arguments)
        }, unbind: function (K, J) {
            var I = this._computedBindings && this._computedBindings[K];
            return I && (1 === I.count ? (I.count = 0, this[K].unbind("change", I.handler), delete I.handler) : I.count--), this.constructor._bubble.unbind(this, K), H.unbindAndTeardown.apply(this, arguments)
        }, serialize: function () {
            return H.Map.helpers.serialize(this, "serialize", {})
        }, _attrs: function (M, L) {
            if (void 0 === M) {
                return C.helpers.serialize(this, "attr", {})
            }
            M = H.simpleExtend({}, M);
            var J, K, I = this;
            H.batch.start(), this.each(function (O, N) {
                if ("_cid" !== N) {
                    if (K = M[N], void 0 === K) {
                        return void (L && I.removeAttr(N))
                    }
                    I.__convert && (K = I.__convert(N, K)), C.helpers.isObservable(K) ? I.__set(N, I.__type(K, N), O) : C.helpers.isObservable(O) && C.helpers.canMakeObserve(K) ? O.attr(K, L) : O !== K && I.__set(N, I.__type(K, N), O), delete M[N]
                }
            });
            for (J in M) {
                "_cid" !== J && (K = M[J], this._set(J, K, !0))
            }
            return H.batch.stop(), this
        }, compute: function (L) {
            if (H.isFunction(this.constructor.prototype[L])) {
                return H.compute(this[L], this)
            }
            var K = L.split("."), I = K.length - 1, J = {args: []};
            return H.compute(function (M) {
                return arguments.length ? void H.compute.read(this, K.slice(0, I)).value.attr(K[I], M) : H.compute.read(this, K, J).value
            }, this)
        }
    });
    return C.prototype.on = C.prototype.bind, C.prototype.off = C.prototype.unbind, C
});
define("can/list/list", ["can/util/util", "can/map/map", "can/map/bubble"], function (C, G, F) {
    var A = [].splice, E = function () {
        var H = {0: "a", length: 1};
        return A.call(H, 0, 1), !H[0]
    }(), B = G.extend({Map: G}, {
        setup: function (J, I) {
            this.length = 0, C.cid(this, ".map"), this._init = 1, this._computedBindings = {}, this._setupComputes(), J = J || [];
            var H;
            C.isDeferred(J) ? this.replace(J) : (H = J.length && C.Map.helpers.addToMap(J, this), this.push.apply(this, C.makeArray(J || []))), H && H(), this.bind("change", C.proxy(this._changes, this)), C.simpleExtend(this, I), delete this._init
        }, _triggerChange: function (K, H, J, I) {
            G.prototype._triggerChange.apply(this, arguments);
            var L = +K;
            ~("" + K).indexOf(".") || isNaN(L) || ("add" === H ? (C.batch.trigger(this, H, [J, L]), C.batch.trigger(this, "length", [this.length])) : "remove" === H ? (C.batch.trigger(this, H, [I, L]), C.batch.trigger(this, "length", [this.length])) : C.batch.trigger(this, H, [J, L]))
        }, __get: function (H) {
            return H ? this[H] && this[H].isComputed && C.isFunction(this.constructor.prototype[H]) ? this[H]() : this[H] : this
        }, __set: function (K, J, H) {
            if (K = isNaN(+K) || K % 1 ? K : +K, "number" == typeof K && K > this.length - 1) {
                var I = new Array(K + 1 - this.length);
                return I[I.length - 1] = J, this.push.apply(this, I), I
            }
            return C.Map.prototype.__set.call(this, "" + K, J, H)
        }, ___set: function (H, I) {
            this[H] = I, +H >= this.length && (this.length = +H + 1)
        }, _remove: function (H, I) {
            isNaN(+H) ? (delete this[H], this._triggerChange(H, "remove", void 0, I)) : this.splice(H, 1)
        }, _each: function (H) {
            for (var J = this.__get(), I = 0; I < J.length; I++) {
                H(J[I], I)
            }
        }, serialize: function () {
            return G.helpers.serialize(this, "serialize", [])
        }, splice: function (N, J) {
            var P, L, I, K = C.makeArray(arguments), O = [], M = K.length > 2;
            for (N = N || 0, P = 0, L = K.length - 2; L > P; P++) {
                I = P + 2, K[I] = this.__type(K[I], I), O.push(K[I]), this[P + N] !== K[I] && (M = !1)
            }
            if (M && this.length <= O.length) {
                return O
            }
            void 0 === J && (J = K[1] = this.length - N);
            var H = A.apply(this, K);
            if (!E) {
                for (P = this.length; P < H.length + this.length; P++) {
                    delete this[P]
                }
            }
            if (C.batch.start(), J > 0 && (F.removeMany(this, H), this._triggerChange("" + N, "remove", void 0, H)), K.length > 2) {
                for (P = 0, L = O.length; L > P; P++) {
                    F.set(this, P, O[P])
                }
                this._triggerChange("" + N, "add", O, H)
            }
            return C.batch.stop(), H
        }, _attrs: function (I, H) {
            return void 0 === I ? G.helpers.serialize(this, "attr", []) : (I = C.makeArray(I), C.batch.start(), this._updateAttrs(I, H), void C.batch.stop())
        }, _updateAttrs: function (J, L) {
            for (var H = Math.min(J.length, this.length), K = 0; H > K; K++) {
                var I = this[K], M = J[K];
                G.helpers.isObservable(I) && G.helpers.canMakeObserve(M) ? I.attr(M, L) : I !== M && this._set(K, M)
            }
            J.length > this.length ? this.push.apply(this, J.slice(this.length)) : J.length < this.length && L && this.splice(J.length)
        }
    }), D = function (H) {
        return H[0] && C.isArray(H[0]) ? H[0] : C.makeArray(H)
    };
    return C.each({push: "length", unshift: 0}, function (I, J) {
        var H = [][J];
        B.prototype[J] = function () {
            for (var N, M, K = [], L = I ? this.length : 0, O = arguments.length; O--;) {
                M = arguments[O], K[O] = F.set(this, O, this.__type(M, O))
            }
            return N = H.apply(this, K), (!this.comparator || K.length) && this._triggerChange("" + L, "add", K, void 0), N
        }
    }), C.each({pop: "length", shift: 0}, function (H, I) {
        B.prototype[I] = function () {
            if (!this.length) {
                return void 0
            }
            var J = D(arguments), L = H && this.length ? this.length - 1 : 0, K = [][I].apply(this, J);
            return this._triggerChange("" + L, "remove", void 0, [K]), K && K.unbind && F.remove(this, K), K
        }
    }), C.extend(B.prototype, {
        indexOf: function (I, H) {
            return this.attr("length"), C.inArray(I, this, H)
        }, join: function () {
            return [].join.apply(this.attr(), arguments)
        }, reverse: function () {
            var H = [].reverse.call(C.makeArray(this));
            this.replace(H)
        }, slice: function () {
            var H = Array.prototype.slice.apply(this, arguments);
            return new this.constructor(H)
        }, concat: function () {
            var H = [];
            return C.each(C.makeArray(arguments), function (J, I) {
                H[I] = J instanceof C.List ? J.serialize() : J
            }), new this.constructor(Array.prototype.concat.apply(this.serialize(), H))
        }, forEach: function (I, H) {
            return C.each(this, I, H || this)
        }, replace: function (H) {
            return C.isDeferred(H) ? H.then(C.proxy(this.replace, this)) : this.splice.apply(this, [0, this.length].concat(C.makeArray(H || []))), this
        }, filter: function (L, K) {
            var H, J = new C.List, I = this;
            return this.each(function (N, M, O) {
                H = L.call(K | I, N, M, I), H && J.push(N)
            }), J
        }
    }), C.List = G.List = B, C.List
});
define("can/compute/read", ["can/util/util"], function (C) {
    var B = function (J, L, F) {
        F = F || {};
        for (var G, M, N = {foundObservable: !1}, D = A(J, 0, L, F, N), I = L.length, H = 0; I > H;) {
            M = D;
            for (var K = 0, E = B.propertyReaders.length; E > K; K++) {
                var O = B.propertyReaders[K];
                if (O.test(D)) {
                    D = O.read(D, L[H], H, F, N);
                    break
                }
            }
            if (H += 1, D = A(D, H, L, F, N, M), G = typeof D, H < L.length && (null === D || "function" !== G && "object" !== G)) {
                return F.earlyExit && F.earlyExit(M, H - 1, D), {value: void 0, parent: M}
            }
        }
        return void 0 === D && F.earlyExit && F.earlyExit(M, H - 1), {value: D, parent: M}
    }, A = function (H, E, I, F, G, J) {
        for (var K = 0, D = B.valueReaders.length; D > K; K++) {
            B.valueReaders[K].test(H, E, I, F) && (H = B.valueReaders[K].read(H, E, I, F, G, J))
        }
        return H
    };
    return B.valueReaders = [{
        name: "compute", test: function (G, F, E, D) {
            return G && G.isComputed
        }, read: function (F, E, D, H, G) {
            return H.isArgument && E === D.length ? F : (!G.foundObservable && H.foundObservable && (H.foundObservable(F, E), G.foundObservable = !0), F instanceof C.Compute ? F.get() : F())
        }
    }, {
        name: "function", test: function (F, E, D, H) {
            var G = typeof F;
            return !("function" !== G || F.isComputed || !(H.executeAnonymousFunctions || H.isArgument && E === D.length) || C.Construct && F.prototype instanceof C.Construct || C.route && F === C.route)
        }, read: function (F, E, D, I, G, H) {
            return I.isArgument && E === D.length ? I.proxyMethods !== !1 ? C.proxy(F, H) : F : F.call(H)
        }
    }], B.propertyReaders = [{
        name: "map", test: C.isMapLike, read: function (F, E, D, H, G) {
            return !G.foundObservable && H.foundObservable && (H.foundObservable(F, D), G.foundObservable = !0), "function" == typeof F[E] && F.constructor.prototype[E] === F[E] ? H.returnObserveMethods ? F[E] : "constructor" === E && F instanceof C.Construct || F[E].prototype instanceof C.Construct ? F[E] : F[E].apply(F, H.args || []) : F.attr(E)
        }
    }, {
        name: "promise", test: function (D) {
            return C.isPromise(D)
        }, read: function (F, E, D, I, G) {
            !G.foundObservable && I.foundObservable && (I.foundObservable(F, D), G.foundObservable = !0);
            var H = F.__observeData;
            return F.__observeData || (H = F.__observeData = {
                isPending: !0,
                state: "pending",
                isResolved: !1,
                isRejected: !1,
                value: void 0,
                reason: void 0
            }, C.cid(H), C.simpleExtend(H, C.event), F.then(function (J) {
                H.isPending = !1, H.isResolved = !0, H.value = J, H.state = "resolved", H.dispatch("state", ["resolved", "pending"])
            }, function (J) {
                H.isPending = !1, H.isRejected = !0, H.reason = J, H.state = "rejected", H.dispatch("state", ["rejected", "pending"])
            })), C.__reading(H, "state"), E in H ? H[E] : F[E]
        }
    }, {
        name: "object", test: function () {
            return !0
        }, read: function (E, D) {
            return null == E ? void 0 : E[D]
        }
    }], B.write = function (F, E, D, G) {
        return G = G || {}, C.isMapLike(F) ? !G.isArgument && F._data && F._data[E] && F._data[E].isComputed ? F._data[E](D) : F.attr(E, D) : F[E] && F[E].isComputed ? F[E](D) : void ("object" == typeof F && (F[E] = D))
    }, B
});
define("can/compute/proto_compute", ["can/util/util", "can/util/bind/bind", "can/compute/read", "can/util/batch/batch"], function (D, Q, K) {
    var H = [];
    D.__read = function (V, W) {
        H.push({});
        var U = V.call(W);
        return {value: U, observed: H.pop()}
    }, D.__reading = function (U, V) {
        H.length && (H[H.length - 1][U._cid + "|" + V] = {obj: U, event: V + ""})
    }, D.__clearReading = function () {
        if (H.length) {
            var U = H[H.length - 1];
            return H[H.length - 1] = {}, U
        }
    }, D.__setReading = function (U) {
        H.length && (H[H.length - 1] = U)
    }, D.__addReading = function (U) {
        H.length && D.simpleExtend(H[H.length - 1], U)
    };
    var C = function (Z, V, Y, X) {
        var W = D.__read(Z, V), U = W.observed;
        return E(Y, U, X), M(Y, X), D.batch.afterPreviousEvents(function () {
            W.ready = !0
        }), W
    }, E = function (V, X, U) {
        for (var W in X) {
            L(V, X, W, U)
        }
    }, L = function (V, Y, U, X) {
        if (V[U]) {
            delete V[U]
        } else {
            var W = Y[U];
            W.obj.bind(W.event, X)
        }
    }, M = function (V, X) {
        for (var U in V) {
            var W = V[U];
            W.obj.unbind(W.event, X)
        }
    }, B = function (X, U, W, V) {
        U !== W && D.batch.trigger(X, V ? {type: "change", batchNum: V} : "change", [U, W])
    }, G = function () {
        this.readInfo = C(this._getterSetter, this._context, {}, this.onchanged), this.setCached(this.readInfo.value), this.hasDependencies = !D.isEmptyObject(this.readInfo.observed)
    }, O = function () {
        for (var U in this.readInfo.observed) {
            var V = this.readInfo.observed[U];
            V.obj.unbind(V.event, this.onchanged)
        }
    }, R = function (Z, U, Y) {
        var W, V, X;
        return {
            on: function () {
                var a = this;
                V || (V = function (b) {
                    if (W.ready && Z.bound && (void 0 === b.batchNum || b.batchNum !== X)) {
                        var c = W.value;
                        W = C(U, Y, W.observed, V), a.updater(W.value, c, b.batchNum), X = X = b.batchNum
                    }
                }), W = C(U, Y, {}, V), Z.setCached(W.value), Z.hasDependencies = !D.isEmptyObject(W.observed)
            }, off: function (b) {
                for (var c in W.observed) {
                    var a = W.observed[c];
                    a.obj.unbind(a.event, V)
                }
            }
        }
    }, P = function (b, V, Z) {
        var X, W, Y, U;
        return {
            on: function (a) {
                Y || (Y = function (d) {
                    if (X.ready && b.bound && (void 0 === d.batchNum || d.batchNum !== U)) {
                        var e = D.__clearReading(), f = V.call(Z);
                        D.__setReading(e), a.call(b, f, W, d.batchNum), W = f, U = U = d.batchNum
                    }
                }), X = C(V, Z, {}, Y), W = X.value, b.setCached(X.value), b.hasDependencies = !D.isEmptyObject(X.observed)
            }, off: function (c) {
                for (var d in X.observed) {
                    var a = X.observed[d];
                    a.obj.unbind(a.event, Y)
                }
            }
        }
    }, N = function () {
    }, F = function (V, W, U) {
        this.setCached(V), B(this, V, W, U)
    }, A = function (U, V) {
        return function () {
            V(U._get(), U.value)
        }
    }, I = function (V, W, U) {
        return function () {
            return V.call(W, U.get())
        }
    }, S = function (U, V) {
        return function (W) {
            void 0 !== W && V(W, U.value)
        }
    };
    D.Compute = function (Y, V, U, b) {
        for (var c = [], W = 0, X = arguments.length; X > W; W++) {
            c[W] = arguments[W]
        }
        var Z = typeof c[1];
        "function" == typeof c[0] ? this._setupGetterSetterFn(c[0], c[1], c[2], c[3]) : c[1] ? "string" === Z ? this._setupContextString(c[0], c[1], c[2]) : "function" === Z ? this._setupContextFunction(c[0], c[1], c[2]) : c[1] && c[1].fn ? this._setupAsyncCompute(c[0], c[1]) : this._setupContextSettings(c[0], c[1]) : this._setupInitialValue(c[0]), this._args = c, this.isComputed = !0, D.cid(this, "compute")
    }, D.simpleExtend(D.Compute.prototype, {
        _bindsetup: function () {
            this.bound = !0;
            var U = D.__clearReading();
            this._on(this.updater), D.__setReading(U)
        }, _bindteardown: function () {
            this._off(this.updater), this.bound = !1
        }, bind: D.bindAndSetup, unbind: D.unbindAndTeardown, clone: function (U) {
            return U && "function" == typeof this._args[0] ? this._args[1] = U : U && (this._args[2] = U), new D.Compute(this._args[0], this._args[1], this._args[2], this._args[3])
        }, _on: N, _off: N, get: function () {
            return H.length && this._canReadForChangeEvent !== !1 && (D.__reading(this, "change"), this.bound || D.Compute.temporarilyBind(this)), this.bound ? this.value : this._get()
        }, _get: function () {
            return this.value
        }, set: function (V) {
            var W = this.value, U = this._set(V, W);
            return this.hasDependencies ? this._setUpdates ? this.value : this._get() : (this.value = void 0 === U ? this._get() : U, B(this, this.value, W), this.value)
        }, _set: function (U) {
            return this.value = U
        }, setCached: function (U) {
            this.value = U
        }, updater: F, _computeFn: function (U) {
            return arguments.length ? this.set(U) : this.get()
        }, toFunction: function () {
            return D.proxy(this._computeFn, this)
        }, _setupGetterSetterFn: function (Z, U, Y, W) {
            this._set = D.proxy(Z, U), this._get = D.proxy(Z, U), this._canReadForChangeEvent = Y === !1 ? !1 : !0, this._getterSetter = Z, this._context = U;
            var V;
            if (W) {
                V = P(this, Z, U || this), this._on = V.on, this._off = V.off
            } else {
                var X = this;
                this.onchanged = function (a) {
                    if (X.bound && X.readInfo.ready && (void 0 === a.batchNum || a.batchNum !== X.batchNum)) {
                        var b = X.readInfo.value;
                        X.readInfo = C(Z, U, X.readInfo.observed, X.onchanged), X.updater(X.readInfo.value, b, a.batchNum), X.batchNum = a.batchNum
                    }
                }, this._on = G, this._off = O
            }
        }, _setupContextString: function (Y, U, X) {
            var W, V = Y instanceof D.Map;
            this.updater = D.proxy(this.updater, this), V ? (this.hasDependencies = !0, this._get = function () {
                return Y.attr(U)
            }, this._set = function (Z) {
                Y.attr(U, Z)
            }, this._on = function (Z) {
                W = function (b, c, a) {
                    Z(c, a, b.batchNum)
                }, Y.bind(X || U, W), this.value = D.__read(this._get).value
            }, this._off = function () {
                return Y.unbind(X || U, W)
            }) : (this._get = D.proxy(this._get, Y), this._set = D.proxy(this._set, Y))
        }, _setupContextFunction: function (W, U, V) {
            this.value = W, this._set = U, D.simpleExtend(this, V)
        }, _setupContextSettings: function (W, U) {
            this.value = W;
            var V = D.proxy(this.updater, this);
            this._set = U.set ? D.proxy(U.set, U) : this._set, this._get = U.get ? D.proxy(U.get, U) : this._get, this.updater = A(this, V), this._on = U.on ? U.on : this._on, this._off = U.off ? U.off : this._off
        }, _setupAsyncCompute: function (Z, U) {
            this.value = Z;
            var Y, X = D.proxy(this.updater, this), W = this, V = U.fn;
            this.updater = X;
            var b = new D.Compute(Z);
            this.lastSetValue = b, this._setUpdates = !0, this._set = function (a) {
                return a === b.get() ? this.value : void b.set(a)
            }, this._get = I(V, U.context, b), 0 === V.length ? Y = R(this, V, U.context) : 1 === V.length ? Y = R(this, function () {
                return V.call(U.context, b.get())
            }, U) : (this.updater = S(this, X), Y = R(this, function () {
                var a = V.call(U.context, b.get(), function (c) {
                    X(c, W.value)
                });
                return void 0 !== a ? a : this.value
            }, U)), this._on = Y.on, this._off = Y.off
        }, _setupInitialValue: function (U) {
            this.value = U
        }
    });
    var T, J = function () {
        for (var U = 0, V = T.length; V > U; U++) {
            T[U].unbind("change", N)
        }
        T = null
    };
    return D.Compute.temporarilyBind = function (U) {
        U.bind("change", N), T || (T = [], setTimeout(J, 10)), T.push(U)
    }, D.Compute.async = function (W, U, V) {
        return new D.Compute(W, {fn: U, context: V})
    }, D.Compute.read = K, D.Compute.set = K.write, D.Compute.truthy = function (U) {
        return new D.Compute(function () {
            var V = U.get();
            return "function" == typeof V && (V = V.get()), !!V
        })
    }, D.Compute
});
define("can/compute/compute", ["can/util/util", "can/util/bind/bind", "can/util/batch/batch", "can/compute/proto_compute"], function (B, A) {
    B.compute = function (F, H, K, G) {
        var I = new B.Compute(F, H, K, G), J = function (L) {
            return arguments.length ? I.set(L) : I.get()
        };
        return J.bind = B.proxy(I.bind, I), J.unbind = B.proxy(I.unbind, I), J.isComputed = I.isComputed, J.clone = function (L) {
            return "function" == typeof F && (H = L), B.compute(F, H, L, G)
        }, J.computeInstance = I, J
    };
    var C, D = function () {
    }, E = function () {
        for (var G = 0, F = C.length; F > G; G++) {
            C[G].unbind("change", D)
        }
        C = null
    };
    return B.compute.temporarilyBind = function (F) {
        F.bind("change", D), C || (C = [], setTimeout(E, 10)), C.push(F)
    }, B.compute.truthy = function (F) {
        return B.compute(function () {
            var G = F();
            return "function" == typeof G && (G = G()), !!G
        })
    }, B.compute.async = function (F, G, H) {
        return B.compute(F, {fn: G, context: H})
    }, B.compute.read = B.Compute.read, B.compute.set = B.Compute.set, B.compute
});
define("can/observe/observe", ["can/util/util", "can/map/map", "can/list/list", "can/compute/compute"], function (A) {
    return A.Observe = A.Map, A.Observe.startBatch = A.batch.start, A.Observe.stopBatch = A.batch.stop, A.Observe.triggerBatch = A.batch.trigger, A
});
define("can/view/scope/scope", ["can/util/util", "can/construct/construct", "can/map/map", "can/list/list", "can/view/view", "can/compute/compute"], function (E) {
    var C = /(\\)?\./g, B = /\\\./g, A = function (H) {
        var F = [], G = 0;
        return H.replace(C, function (J, K, I) {
            K || (F.push(H.slice(G, I).replace(B, ".")), G = I + J.length)
        }), F.push(H.slice(G).replace(B, ".")), F
    }, D = E.Construct.extend({read: E.compute.read}, {
        init: function (G, F) {
            this._context = G, this._parent = F, this.__cache = {}
        }, attr: function (L, G) {
            var J = E.__clearReading(), H = {
                isArgument: !0,
                returnObserveMethods: !0,
                proxyMethods: !1
            }, M = this.read(L, H);
            if (2 === arguments.length) {
                var K = L.lastIndexOf("."), F = -1 !== K ? L.substring(0, K) : ".", I = this.read(F, H).value;
                -1 !== K && (L = L.substring(K + 1, L.length)), E.compute.set(I, L, G, H)
            }
            return E.__setReading(J), M.value
        }, add: function (F) {
            return F !== this._context ? new this.constructor(F, this) : this
        }, computeData: function (H, G) {
            G = G || {args: []};
            var F, J, I = this, K = {
                compute: E.compute(function (N) {
                    if (!arguments.length) {
                        if (F) {
                            return E.compute.read(F, J, G).value
                        }
                        var M = I.read(H, G);
                        return F = M.rootObserve, J = M.reads, K.scope = M.scope, K.initialValue = M.value, K.reads = M.reads, K.root = F, M.value
                    }
                    if (F.isComputed) {
                        F(N)
                    } else {
                        if (J.length) {
                            var L = J.length - 1, O = J.length ? E.compute.read(F, J.slice(0, L)).value : F;
                            E.compute.set(O, J[L], N, G)
                        }
                    }
                })
            };
            return K
        }, compute: function (G, F) {
            return this.computeData(G, F).compute
        }, read: function (P, H) {
            var J;
            if ("./" === P.substr(0, 2)) {
                J = !0, P = P.substr(2)
            } else {
                if ("../" === P.substr(0, 3)) {
                    return this._parent.read(P.substr(3), H)
                }
                if (".." === P) {
                    return {value: this._parent._context}
                }
                if ("." === P || "this" === P) {
                    return {value: this._context}
                }
            }
            for (var Q, O, F, K, I, G, N = -1 === P.indexOf("\\.") ? P.split(".") : A(P), R = this, L = [], M = -1; R;) {
                if (Q = R._context, null !== Q) {
                    var S = E.compute.read(Q, N, E.simpleExtend({
                        foundObservable: function (U, T) {
                            I = U, G = N.slice(T)
                        }, earlyExit: function (U, T) {
                            T > M && (O = I, L = G, M = T, K = R, F = E.__clearReading())
                        }, executeAnonymousFunctions: !0
                    }, H));
                    if (void 0 !== S.value) {
                        return {scope: R, rootObserve: I, value: S.value, reads: G}
                    }
                }
                E.__clearReading(), R = J ? null : R._parent
            }
            return O ? (E.__setReading(F), {scope: K, rootObserve: O, reads: L, value: void 0}) : {
                names: N,
                value: void 0
            }
        }
    });
    return E.view.Scope = D, D
});
define("can/view/scanner", ["can/view/view", "can/view/elements", "can/view/callbacks/callbacks"], function (can, elements, viewCallbacks) {
    var newLine = /(\r|\n)+/g, notEndTag = /\//, clean = function (t) {
        return t.split("\\").join("\\\\").split("\n").join("\\n").split('"').join('\\"').split("	").join("\\t")
    }, getTag = function (t, e, n) {
        if (t) {
            return t
        }
        for (; n < e.length;) {
            if ("<" === e[n] && !notEndTag.test(e[n + 1])) {
                return elements.reverseTagMap[e[n + 1]] || "span"
            }
            n++
        }
        return ""
    }, bracketNum = function (t) {
        return --t.split("{").length - --t.split("}").length
    }, myEval = function (script) {
        eval(script)
    }, attrReg = /([^\s]+)[\s]*=[\s]*$/, startTxt = "var ___v1ew = [];", finishTxt = "return ___v1ew.join('')", put_cmd = "___v1ew.push(\n", insert_cmd = put_cmd, htmlTag = null, quote = null, beforeQuote = null, rescan = null, getAttrName = function () {
        var t = beforeQuote.match(attrReg);
        return t && t[1]
    }, status = function () {
        return quote ? "'" + getAttrName() + "'" : htmlTag ? 1 : 0
    }, top = function (t) {
        return t[t.length - 1]
    }, Scanner;
    return can.view.Scanner = Scanner = function (t) {
        can.extend(this, {
            text: {},
            tokens: []
        }, t), this.text.options = this.text.options || "", this.tokenReg = [], this.tokenSimple = {
            "<": "<",
            ">": ">",
            '"': '"',
            "'": "'"
        }, this.tokenComplex = [], this.tokenMap = {};
        for (var e, n = 0; e = this.tokens[n]; n++) {
            e[2] ? (this.tokenReg.push(e[2]), this.tokenComplex.push({
                abbr: e[1],
                re: new RegExp(e[2]),
                rescan: e[3]
            })) : (this.tokenReg.push(e[1]), this.tokenSimple[e[1]] = e[0]), this.tokenMap[e[0]] = e[1]
        }
        this.tokenReg = new RegExp("(" + this.tokenReg.slice(0).concat(["<", ">", '"', "'"]).join("|") + ")", "g")
    }, Scanner.prototype = {
        helpers: [], scan: function (t, e) {
            var n = [], s = 0, a = this.tokenSimple, r = this.tokenComplex;
            t = t.replace(newLine, "\n"), this.transform && (t = this.transform(t)), t.replace(this.tokenReg, function (e, i) {
                var o = arguments[arguments.length - 2];
                if (o > s && n.push(t.substring(s, o)), a[e]) {
                    n.push(e)
                } else {
                    for (var u, c = 0; u = r[c]; c++) {
                        if (u.re.test(e)) {
                            n.push(u.abbr), u.rescan && n.push(u.rescan(i));
                            break
                        }
                    }
                }
                s = o + i.length
            }), s < t.length && n.push(t.substr(s));
            var i, o, u, c, l = "", p = [startTxt + (this.text.start || "")], h = function (t, e) {
                p.push(put_cmd, '"', clean(t), '"' + (e || "") + ");")
            }, g = [], f = null, m = !1, k = {
                attributeHookups: [],
                tagHookups: [],
                lastTagHookup: ""
            }, b = function () {
                k.lastTagHookup = k.tagHookups.pop() + k.tagHookups.length
            }, v = "", x = [], w = !1, T = !1, d = 0, _ = this.tokenMap;
            for (htmlTag = quote = beforeQuote = null; void 0 !== (u = n[d++]);) {
                if (null === f) {
                    switch (u) {
                        case _.left:
                        case _.escapeLeft:
                        case _.returnLeft:
                            m = htmlTag && 1;
                        case _.commentLeft:
                            f = u, l.length && h(l), l = "";
                            break;
                        case _.escapeFull:
                            m = htmlTag && 1, rescan = 1, f = _.escapeLeft, l.length && h(l), rescan = n[d++], l = rescan.content || rescan, rescan.before && h(rescan.before), n.splice(d, 0, _.right);
                            break;
                        case _.commentFull:
                            break;
                        case _.templateLeft:
                            l += _.left;
                            break;
                        case"<":
                            0 !== n[d].indexOf("!--") && (htmlTag = 1, m = 0), l += u;
                            break;
                        case">":
                            htmlTag = 0;
                            var H = "/" === l.substr(l.length - 1) || "--" === l.substr(l.length - 2), N = "";
                            if (k.attributeHookups.length && (N = "attrs: ['" + k.attributeHookups.join("','") + "'], ", k.attributeHookups = []), v + k.tagHookups.length !== k.lastTagHookup && v === top(k.tagHookups)) {
                                H && (l = l.substr(0, l.length - 1)), p.push(put_cmd, '"', clean(l), '"', ",can.view.pending({tagName:'" + v + "'," + N + "scope: " + (this.text.scope || "this") + this.text.options), H ? (p.push("}));"), l = "/>", b()) : "<" === n[d] && n[d + 1] === "/" + v ? (p.push("}));"), l = u, b()) : (p.push(",subtemplate: function(" + this.text.argNames + "){\n" + startTxt + (this.text.start || "")), l = "")
                            } else {
                                if (m || !w && elements.tagToContentPropMap[x[x.length - 1]] || N) {
                                    var R = ",can.view.pending({" + N + "scope: " + (this.text.scope || "this") + this.text.options + '}),"';
                                    H ? h(l.substr(0, l.length - 1), R + '/>"') : h(l, R + '>"'), l = "", m = 0
                                } else {
                                    l += u
                                }
                            }
                            (H || w) && (x.pop(), v = x[x.length - 1], w = !1), k.attributeHookups = [];
                            break;
                        case"'":
                        case'"':
                            if (htmlTag) {
                                if (quote && quote === u) {
                                    quote = null;
                                    var L = getAttrName();
                                    if (viewCallbacks.attr(L) && k.attributeHookups.push(L), T) {
                                        l += u, h(l), p.push(finishTxt, "}));\n"), l = "", T = !1;
                                        break
                                    }
                                } else {
                                    if (null === quote && (quote = u, beforeQuote = i, c = getAttrName(), "img" === v && "src" === c || "style" === c)) {
                                        h(l.replace(attrReg, "")), l = "", T = !0, p.push(insert_cmd, "can.view.txt(2,'" + getTag(v, n, d) + "'," + status() + ",this,function(){", startTxt), h(c + "=" + u);
                                        break
                                    }
                                }
                            }
                        default:
                            if ("<" === i) {
                                v = "!--" === u.substr(0, 3) ? "!--" : u.split(/\s/)[0];
                                var S, y = !1;
                                0 === v.indexOf("/") && (y = !0, S = v.substr(1)), y ? (top(x) === S && (v = S, w = !0), top(k.tagHookups) === S && (h(l.substr(0, l.length - 1)), p.push(finishTxt + "}}) );"), l = "><", b())) : (v.lastIndexOf("/") === v.length - 1 && (v = v.substr(0, v.length - 1)), "!--" !== v && viewCallbacks.tag(v) && ("content" === v && elements.tagMap[top(x)] && (u = u.replace("content", elements.tagMap[top(x)])), k.tagHookups.push(v)), x.push(v))
                            }
                            l += u
                    }
                } else {
                    switch (u) {
                        case _.right:
                        case _.returnRight:
                            switch (f) {
                                case _.left:
                                    o = bracketNum(l), 1 === o ? (p.push(insert_cmd, "can.view.txt(0,'" + getTag(v, n, d) + "'," + status() + ",this,function(){", startTxt, l), g.push({
                                        before: "",
                                        after: finishTxt + "}));\n"
                                    })) : (s = g.length && -1 === o ? g.pop() : {after: ";"}, s.before && p.push(s.before), p.push(l, ";", s.after));
                                    break;
                                case _.escapeLeft:
                                case _.returnLeft:
                                    o = bracketNum(l), o && g.push({before: finishTxt, after: "}));\n"});
                                    for (var j = f === _.escapeLeft ? 1 : 0, C = {
                                        insert: insert_cmd,
                                        tagName: getTag(v, n, d),
                                        status: status(),
                                        specialAttribute: T
                                    }, q = 0; q < this.helpers.length; q++) {
                                        var E = this.helpers[q];
                                        if (E.name.test(l)) {
                                            l = E.fn(l, C), E.name.source === /^>[\s]*\w*/.source && (j = 0);
                                            break
                                        }
                                    }
                                    "object" == typeof l ? l.startTxt && l.end && T ? p.push(insert_cmd, "can.view.toStr( ", l.content, "() ) );") : (l.startTxt ? p.push(insert_cmd, "can.view.txt(\n" + ("string" == typeof status() || (null != l.escaped ? l.escaped : j)) + ",\n'" + v + "',\n" + status() + ",\nthis,\n") : l.startOnlyTxt && p.push(insert_cmd, "can.view.onlytxt(this,\n"), p.push(l.content), l.end && p.push("));")) : T ? p.push(insert_cmd, l, ");") : p.push(insert_cmd, "can.view.txt(\n" + ("string" == typeof status() || j) + ",\n'" + v + "',\n" + status() + ",\nthis,\nfunction(){ " + (this.text.escape || "") + "return ", l, o ? startTxt : "}));\n"), rescan && rescan.after && rescan.after.length && (h(rescan.after.length), rescan = null)
                            }
                            f = null, l = "";
                            break;
                        case _.templateLeft:
                            l += _.left;
                            break;
                        default:
                            l += u
                    }
                }
                i = u
            }
            l.length && h(l), p.push(";");
            var M = p.join(""), A = {out: (this.text.outStart || "") + M + " " + finishTxt + (this.text.outEnd || "")};
            return myEval.call(A, "this.fn = (function(" + this.text.argNames + "){" + A.out + "});\r\n//# sourceURL=" + e + ".js"), A
        }
    }, can.view.pending = function (t) {
        var e = can.view.getHooks();
        return can.view.hook(function (n) {
            can.each(e, function (t) {
                t(n)
            }), t.templateType = "legacy", t.tagName && viewCallbacks.tagHandler(n, t.tagName, t), can.each(t && t.attrs || [], function (e) {
                t.attributeName = e;
                var s = viewCallbacks.attr(e);
                s && s(n, t)
            })
        })
    }, can.view.tag("content", function (t, e) {
        return e.scope
    }), can.view.Scanner = Scanner, Scanner
});
define("can/view/node_lists/node_lists", ["can/util/util", "can/view/elements"], function (H) {
    var C = !0;
    try {
        document.createTextNode("")._ = 0
    } catch (M) {
        C = !1
    }
    var K = {}, E = {}, A = "ejs_" + Math.random(), L = 0, N = function (R, P) {
        var O = P || E, Q = B(R, O);
        return Q ? Q : C || 3 !== R.nodeType ? (++L, R[A] = (R.nodeName ? "element_" : "obj_") + L) : (++L, O["text_" + L] = R, "text_" + L)
    }, B = function (Q, P) {
        if (C || 3 !== Q.nodeType) {
            return Q[A]
        }
        for (var O in P) {
            if (P[O] === Q) {
                return O
            }
        }
    }, F = [].splice, D = [].push, J = function (S) {
        for (var P = 0, Q = 0, O = S.length; O > Q; Q++) {
            var R = S[Q];
            R.nodeType ? P++ : P += J(R)
        }
        return P
    }, I = function (T, P) {
        for (var Q = {}, O = 0, R = T.length; R > O; O++) {
            var S = G.first(T[O]);
            Q[N(S, P)] = T[O]
        }
        return Q
    }, G = {
        id: N, update: function (P, Q) {
            var O = G.unregisterChildren(P);
            Q = H.makeArray(Q);
            var R = P.length;
            return F.apply(P, [0, R].concat(Q)), P.replacements ? G.nestReplacements(P) : G.nestList(P), O
        }, nestReplacements: function (U) {
            for (var P = 0, Q = {}, O = I(U.replacements, Q), S = U.replacements.length; P < U.length && S;) {
                var T = U[P], R = O[B(T, Q)];
                R && (U.splice(P, J(R), R), S--), P++
            }
            U.replacements = []
        }, nestList: function (R) {
            for (var O = 0; O < R.length;) {
                var P = R[O], Q = K[N(P)];
                Q ? Q !== R && R.splice(O, J(Q), Q) : K[N(P)] = R, O++
            }
        }, last: function (P) {
            var O = P[P.length - 1];
            return O.nodeType ? O : G.last(O)
        }, first: function (P) {
            var O = P[0];
            return O.nodeType ? O : G.first(O)
        }, flatten: function (R) {
            for (var P = [], Q = 0; Q < R.length; Q++) {
                var O = R[Q];
                O.nodeType ? P.push(O) : P.push.apply(P, G.flatten(O))
            }
            return P
        }, register: function (Q, O, P) {
            return Q.unregistered = O, Q.parentList = P, P === !0 ? Q.replacements = [] : P ? (P.replacements.push(Q), Q.replacements = []) : G.nestList(Q), Q
        }, unregisterChildren: function (O) {
            var P = [];
            return H.each(O, function (Q) {
                Q.nodeType ? (O.replacements || delete K[N(Q)], P.push(Q)) : D.apply(P, G.unregister(Q))
            }), P
        }, unregister: function (Q) {
            var O = G.unregisterChildren(Q);
            if (Q.unregistered) {
                var P = Q.unregistered;
                delete Q.unregistered, delete Q.replacements, P()
            }
            return O
        }, nodeMap: K
    };
    return H.view.nodeLists = G, G
});
define("can/view/parser/parser", ["can/view/view"], function (V) {
    function G(c) {
        for (var E = {}, A = c.split(","), b = 0; b < A.length; b++) {
            E[A[b]] = !0
        }
        return E
    }

    function D(d, b) {
        for (var A = 0, c = d.length; c > A; A++) {
            var E = d[A];
            b[E.tokenType].apply(b, E.args)
        }
        return d
    }

    var R = "-:A-Za-z0-9_", P = "[a-zA-Z_:][" + R + ":.]*", F = "\\s*=\\s*", L = '"((?:\\\\.|[^"])*)"', Q = "'((?:\\\\.|[^'])*)'", N = "(?:" + F + "(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>\\s]+))?", T = "\\{\\{[^\\}]*\\}\\}\\}?", H = "\\{\\{([^\\}]*)\\}\\}\\}?", C = new RegExp("^<([" + R + "]+)((?:\\s*(?:(?:(?:" + P + ")?" + N + ")|(?:" + T + ")+))*)\\s*(\\/?)>"), W = new RegExp("^<\\/([" + R + "]+)[^>]*>"), U = new RegExp("(?:(?:(" + P + ")|" + H + ")(?:" + F + "(?:(?:" + L + ")|(?:" + Q + ")|([^>\\s]+)))?)", "g"), X = new RegExp(H, "g"), K = /<|\{\{/, O = G("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"), S = G("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), I = G("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), j = G("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), J = G("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), B = G("script,style"), M = "start,end,close,attrStart,attrEnd,attrValue,chars,comment,special,done".split(","), Z = function () {
    }, Y = function (p, g, b) {
        function m(i, d, a, c) {
            if (d = d.toLowerCase(), S[d]) {
                for (; v.last() && I[v.last()];) {
                    A("", v.last())
                }
            }
            j[d] && v.last() === d && A("", d), c = O[d] || !!c, g.start(d, c), c || v.push(d), Y.parseAttrs(a, g), g.end(d, c)
        }

        function A(i, d) {
            var a;
            if (d) {
                for (a = v.length - 1; a >= 0 && v[a] !== d; a--) {
                }
            } else {
                a = 0
            }
            if (a >= 0) {
                for (var c = v.length - 1; c >= a; c--) {
                    g.close && g.close(v[c])
                }
                v.length = a
            }
        }

        function e(c, a) {
            g.special && g.special(a)
        }

        if ("object" == typeof p) {
            return D(p, g)
        }
        var E = [];
        g = g || {}, b && V.each(M, function (c) {
            var a = g[c] || Z;
            g[c] = function () {
                a.apply(this, arguments) !== !1 && E.push({tokenType: c, args: V.makeArray(arguments)})
            }
        });
        var h, q, k, v = [], r = p;
        for (v.last = function () {
            return this[this.length - 1]
        }; p;) {
            if (q = !0, v.last() && B[v.last()]) {
                p = p.replace(new RegExp("([\\s\\S]*?)</" + v.last() + "[^>]*>"), function (c, a) {
                    return a = a.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2"), g.chars && g.chars(a), ""
                }), A("", v.last())
            } else {
                if (0 === p.indexOf("<!--") ? (h = p.indexOf("-->"), h >= 0 && (g.comment && g.comment(p.substring(4, h)), p = p.substring(h + 3), q = !1)) : 0 === p.indexOf("</") ? (k = p.match(W), k && (p = p.substring(k[0].length), k[0].replace(W, A), q = !1)) : 0 === p.indexOf("<") ? (k = p.match(C), k && (p = p.substring(k[0].length), k[0].replace(C, m), q = !1)) : 0 === p.indexOf("{{") && (k = p.match(X), k && (p = p.substring(k[0].length), k[0].replace(X, e))), q) {
                    h = p.search(K);
                    var f = 0 > h ? p : p.substring(0, h);
                    p = 0 > h ? "" : p.substring(h), g.chars && f && g.chars(f)
                }
            }
            if (p === r) {
                throw"Parse Error: " + p
            }
            r = p
        }
        return A(), g.done(), E
    };
    return Y.parseAttrs = function (E, A) {
        (null != E ? E : "").replace(U, function (m, p, h, f, q, b) {
            if (h && A.special(h), p || f || q || b) {
                var g = arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : arguments[5] ? arguments[5] : J[p.toLowerCase()] ? p : "";
                A.attrStart(p || "");
                for (var d, k = X.lastIndex = 0, t = X.exec(g); t;) {
                    d = g.substring(k, X.lastIndex - t[0].length), d.length && A.attrValue(d), A.special(t[1]), k = X.lastIndex, t = X.exec(g)
                }
                d = g.substr(k, g.length), d && A.attrValue(d), A.attrEnd(p || "")
            }
        })
    }, V.view.parser = Y, Y
});
define("can/view/live/live", ["can/util/util", "can/view/elements", "can/view/view", "can/view/node_lists/node_lists", "can/view/parser/parser"], function (H, M, C, K, A) {
    M = M || H.view.elements, K = K || H.view.NodeLists, A = A || H.view.parser;
    var E = function (Q, P, O) {
        var S = !1, R = function () {
            return S || (S = !0, O(T), H.unbind.call(Q, "removed", R)), !0
        }, T = {
            teardownCheck: function (U) {
                return U ? !1 : R()
            }
        };
        return H.bind.call(Q, "removed", R), P(T), T
    }, D = function (Q, P, O) {
        return E(Q, function () {
            P.bind("change", O)
        }, function (R) {
            P.unbind("change", O), R.nodeList && K.unregister(R.nodeList)
        })
    }, F = function (Q) {
        var P, O = {};
        return A.parseAttrs(Q, {
            attrStart: function (R) {
                O[R] = "", P = R
            }, attrValue: function (R) {
                O[P] += R
            }, attrEnd: function () {
            }
        }), O
    }, N = [].splice, G = function (O) {
        return O && O.nodeType
    }, L = function (O) {
        O.childNodes.length || O.appendChild(document.createTextNode(""))
    }, B = {
        list: function (X, U, Y, a, e, Q) {
            var j, P = Q || [X], R = [], T = !1, l = !1, Z = function (o, c, p) {
                if (T) {
                    var t = document.createDocumentFragment(), h = [], u = [];
                    H.each(c, function (w, d) {
                        var b = [];
                        Q && K.register(b, null, !0);
                        var y = H.compute(d + p), m = Y.call(a, w, y, b), z = "string" == typeof m, Aa = H.frag(m);
                        Aa = z ? H.view.hookup(Aa) : Aa;
                        var f = H.makeArray(Aa.childNodes);
                        Q ? (K.update(b, f), h.push(b)) : h.push(K.register(f)), t.appendChild(Aa), u.push(y)
                    });
                    var v = p + 1;
                    if (P[v]) {
                        var s = K.first(P[v]);
                        H.insertBefore(s.parentNode, t, s)
                    } else {
                        M.after(1 === v ? [q] : [K.last(P[v - 1])], t)
                    }
                    N.apply(P, [v, 0].concat(h)), N.apply(R, [p, 0].concat(u));
                    for (var k = p + u.length, x = R.length; x > k; k++) {
                        R[k](k)
                    }
                }
            }, W = function (v, f, b, h, g) {
                if (T && (h || !O.teardownCheck(q.parentNode))) {
                    0 > b && (b = R.length + b);
                    var k = P.splice(b + 1, f.length), w = [];
                    H.each(k, function (d) {
                        var c = K.unregister(d);
                        [].push.apply(w, c)
                    }), R.splice(b, f.length);
                    for (var m = b, p = R.length; p > m; m++) {
                        R[m](m)
                    }
                    g ? K.unregister(P) : H.remove(H.$(w))
                }
            }, S = function (v, f, b, h) {
                if (T) {
                    b += 1, h += 1;
                    var g, k = P[b], w = H.frag(K.flatten(P[h]));
                    g = b > h ? K.last(k).nextSibling : K.first(k);
                    var m = P[0].parentNode;
                    m.insertBefore(w, g);
                    var p = P[h];
                    [].splice.apply(P, [h, 1]), [].splice.apply(P, [b, 0, p])
                }
            }, q = document.createTextNode(""), V = function (b) {
                j && j.unbind && j.unbind("add", Z).unbind("remove", W).unbind("move", S), W({}, {length: P.length - 1}, 0, !0, b)
            }, r = function (d, c, b) {
                l || (V(), j = c || [], j.bind && j.bind("add", Z).bind("remove", W).bind("move", S), T = !0, Z({}, j, 0), T = !1, H.batch.afterPreviousEvents(function () {
                    T = !0
                }))
            };
            e = M.getParentNode(X, e);
            var O = E(e, function () {
                H.isFunction(U) && U.bind("change", r)
            }, function () {
                H.isFunction(U) && U.unbind("change", r), V(!0)
            });
            Q ? (M.replace(P, q), K.update(P, [q]), Q.unregistered = function () {
                O.teardownCheck(), l = !0
            }) : B.replace(P, q, O.teardownCheck), r({}, H.isFunction(U) ? U() : U)
        }, html: function (O, S, Q, R) {
            var P;
            Q = M.getParentNode(O, Q), P = D(Q, S, function (Y, W, V) {
                var X = K.first(U).parentNode;
                X && T(W), P.teardownCheck(K.first(U).parentNode)
            });
            var U = R || [O], T = function (V) {
                var Z = "function" == typeof V, W = G(V), Y = H.frag(Z ? "" : V), X = H.makeArray(U);
                L(Y), W || Z || (Y = H.view.hookup(Y, Q)), X = K.update(U, Y.childNodes), Z && V(Y.childNodes[0]), M.replace(X, Y)
            };
            P.nodeList = U, R ? R.unregistered = P.teardownCheck : K.register(U, P.teardownCheck), T(S())
        }, replace: function (O, S, Q) {
            var P = O.slice(0), R = H.frag(S);
            return K.register(O, Q), "string" == typeof S && (R = H.view.hookup(R, O[0].parentNode)), K.update(O, R.childNodes), M.replace(P, R), O
        }, text: function (O, S, Q, R) {
            var P = M.getParentNode(O, Q), U = D(P, S, function (X, W, V) {
                "unknown" != typeof T.nodeValue && (T.nodeValue = H.view.toStr(W)), U.teardownCheck(T.parentNode)
            }), T = document.createTextNode(H.view.toStr(S()));
            R ? (R.unregistered = U.teardownCheck, U.nodeList = R, K.update(R, [T]), M.replace([O], T)) : U.nodeList = B.replace([O], T, U.teardownCheck)
        }, setAttributes: function (Q, P) {
            var O = F(P);
            for (var R in O) {
                H.attr.set(Q, R, O[R])
            }
        }, attributes: function (P, O, S) {
            var R = {}, Q = function (T) {
                var X, U = F(T);
                for (X in U) {
                    var V = U[X], W = R[X];
                    V !== W && H.attr.set(P, X, V), delete R[X]
                }
                for (X in R) {
                    M.removeAttr(P, X)
                }
                R = U
            };
            D(P, O, function (U, T) {
                Q(T)
            }), arguments.length >= 3 ? R = F(S) : Q(O())
        }, attributePlaceholder: "__!!__", attributeReplace: /__!!__/g, attribute: function (P, U, O) {
            D(P, O, function (Y, X) {
                M.setAttr(P, U, W.render())
            });
            var Q, R = H.$(P);
            Q = H.data(R, "hooks"), Q || H.data(R, "hooks", Q = {});
            var W, S = M.getAttr(P, U), V = S.split(B.attributePlaceholder), T = [];
            T.push(V.shift(), V.join(B.attributePlaceholder)), Q[U] ? Q[U].computes.push(O) : Q[U] = {
                render: function () {
                    var Y = 0, X = S ? S.replace(B.attributeReplace, function () {
                        return M.contentText(W.computes[Y++]())
                    }) : M.contentText(W.computes[Y++]());
                    return X
                }, computes: [O], batchNum: void 0
            }, W = Q[U], T.splice(1, 0, O()), M.setAttr(P, U, T.join(""))
        }, specialAttribute: function (Q, P, O) {
            D(Q, O, function (R, S) {
                M.setAttr(Q, P, J(S))
            }), M.setAttr(Q, P, J(O()))
        }, simpleAttribute: function (Q, P, O) {
            D(Q, O, function (R, S) {
                M.setAttr(Q, P, S)
            }), M.setAttr(Q, P, O())
        }
    };
    B.attr = B.simpleAttribute, B.attrs = B.attributes;
    var I = /(\r|\n)+/g, J = function (P) {
        var O = /^["'].*["']$/;
        return P = P.replace(M.attrReg, "").replace(I, ""), O.test(P) ? P.substr(1, P.length - 2) : P
    };
    return H.view.live = B, B
});
define("can/view/render", ["can/view/view", "can/view/elements", "can/view/live/live", "can/util/string/string"], function (I, B, F) {
    var A, G = [], J = function (K) {
        var L = B.tagMap[K] || "span";
        return "span" === L ? "@@!!@@" : "<" + L + ">" + J(L) + "</" + L + ">"
    }, C = function (K, M) {
        if ("string" == typeof K) {
            return K
        }
        if (!K && 0 !== K) {
            return ""
        }
        var L = K.hookup && function (N, O) {
                K.hookup.call(K, N, O)
            } || "function" == typeof K && K;
        return L ? M ? "<" + M + " " + I.view.hook(L) + "></" + M + ">" : (G.push(L), "") : "" + K
    }, E = function (K, L) {
        return "string" == typeof K || "number" == typeof K ? I.esc(K) : C(K, L)
    }, H = !1, D = function () {
    };
    return I.extend(I.view, {
        live: F, setupLists: function () {
            var K, L = I.view.lists;
            return I.view.lists = function (M, N) {
                return K = {list: M, renderer: N}, Math.random()
            }, function () {
                return I.view.lists = L, K
            }
        }, getHooks: function () {
            var K = G.slice(0);
            return A = K, G = [], K
        }, onlytxt: function (L, K) {
            return E(K.call(L))
        }, txt: function (T, Q, L, W, Y) {
            var X, U, S, R, P = B.tagMap[Q] || "span", K = !1, N = D;
            if (H) {
                X = Y.call(W)
            } else {
                ("string" == typeof L || 1 === L) && (H = !0);
                var O = I.view.setupLists();
                N = function () {
                    S.unbind("change", D)
                }, S = I.compute(Y, W, !1), S.bind("change", D), U = O(), X = S(), H = !1, K = S.computeInstance.hasDependencies
            }
            if (U) {
                return N(), "<" + P + I.view.hook(function (Z, M) {
                    F.list(Z, U.list, U.renderer, W, M)
                }) + "></" + P + ">"
            }
            if (!K || "function" == typeof X) {
                return N(), (H || 2 === T || !T ? C : E)(X, 0 === L && P)
            }
            var V = B.tagToContentPropMap[Q];
            return 0 !== L || V ? 1 === L ? (G.push(function (M) {
                F.attributes(M, S, S()), N()
            }), S()) : 2 === T ? (R = L, G.push(function (M) {
                F.specialAttribute(M, R, S), N()
            }), S()) : (R = 0 === L ? V : L, (0 === L ? A : G).push(function (M) {
                F.attribute(M, R, S), N()
            }), F.attributePlaceholder) : "<" + P + I.view.hook(T && "object" != typeof X ? function (Z, M) {
                F.text(Z, S, M), N()
            } : function (Z, M) {
                F.html(Z, S, M), N()
            }) + ">" + J(P) + "</" + P + ">"
        }
    }), I
});
define("can/view/stache/utils", ["can/util/util"], function () {
    return {
        isArrayLike: function (t) {
            return t && t.splice && "number" == typeof t.length
        }, isObserveLike: function (t) {
            return t instanceof can.Map || t && !!t._get
        }, emptyHandler: function () {
        }, jsonParse: function (str) {
            return "'" === str[0] ? str.substr(1, str.length - 2) : "undefined" === str ? void 0 : can.global.JSON ? JSON.parse(str) : eval("(" + str + ")")
        }, mixins: {
            last: function () {
                return this.stack[this.stack.length - 1]
            }, add: function (t) {
                this.last().add(t)
            }, subSectionDepth: function () {
                return this.stack.length - 1
            }
        }
    }
});
define("can/view/stache/mustache_helpers", ["can/util/util", "can/view/stache/utils", "can/view/live/live"], function (E, B, C) {
    C = C || E.view.live;
    var D = function (F) {
        return B.isObserveLike(F) && B.isArrayLike(F) && F.attr("length") ? F : E.isFunction(F) ? F() : F
    }, A = {
        each: function (K, L) {
            var G, M, H, I = D(K), J = [];
            if (I instanceof E.List) {
                return function (N) {
                    var P = [N];
                    P.expression = "live.list", E.view.nodeLists.register(P, null, L.nodeList), E.view.nodeLists.update(L.nodeList, [N]);
                    var O = function (S, Q, R) {
                        return L.fn(L.scope.add({"@index": Q}).add(S), L.options, R)
                    };
                    C.list(N, K, O, L.context, N.parentNode, P)
                }
            }
            var F = I;
            if (F && B.isArrayLike(F)) {
                for (H = 0; H < F.length; H++) {
                    J.push(L.fn(L.scope.add({"@index": H}).add(F[H])))
                }
            } else {
                if (B.isObserveLike(F)) {
                    for (G = E.Map.keys(F), H = 0; H < G.length; H++) {
                        M = G[H], J.push(L.fn(L.scope.add({"@key": M}).add(F[M])))
                    }
                } else {
                    if (F instanceof Object) {
                        for (M in F) {
                            J.push(L.fn(L.scope.add({"@key": M}).add(F[M])))
                        }
                    }
                }
            }
            return J
        }, "@index": function (F, G) {
            G || (G = F, F = 0);
            var H = G.scope.attr("@index");
            return "" + ((E.isFunction(H) ? H() : H) + F)
        }, "if": function (G, H) {
            var F;
            return F = E.isFunction(G) ? E.compute.truthy(G)() : !!D(G), F ? H.fn(H.scope || this) : H.inverse(H.scope || this)
        }, is: function () {
            var G, H, F = arguments[arguments.length - 1];
            if (arguments.length - 2 <= 0) {
                return F.inverse()
            }
            for (var I = 0; I < arguments.length - 1; I++) {
                if (H = D(arguments[I]), H = E.isFunction(H) ? H() : H, I > 0 && H !== G) {
                    return F.inverse()
                }
                G = H
            }
            return F.fn()
        }, eq: function () {
            return A.is.apply(this, arguments)
        }, unless: function (F, G) {
            return A["if"].apply(this, [E.isFunction(F) ? E.compute(function () {
                return !F()
            }) : !F, G])
        }, "with": function (H, F) {
            var G = H;
            return H = D(H), H ? F.fn(G) : void 0
        }, log: function (G, F) {
            "undefined" != typeof console && console.log && (F ? console.log(G, F.context) : console.log(G.context))
        }, data: function (F) {
            var G = 2 === arguments.length ? this : arguments[1];
            return function (H) {
                E.data(E.$(H), F, G || this.context)
            }
        }
    };
    return {
        registerHelper: function (G, F) {
            A[G] = F
        }, getHelper: function (H, F) {
            var G = F.attr("helpers." + H);
            return G || (G = A[H]), G ? {fn: G} : void 0
        }
    }
});
define("can/view/stache/mustache_core", ["can/util/util", "can/view/stache/utils", "can/view/stache/mustache_helpers", "can/view/live/live", "can/view/elements", "can/view/scope/scope", "can/view/node_lists/node_lists"], function (S, E, M, C, J, O, D) {
    C = C || S.view.live, J = J || S.view.elements, O = O || S.view.Scope, D = D || S.view.nodeLists;
    var N = /((([^'"\s]+?=)?('.*?'|".*?"))|.*?)\s/g, F = /^(?:(?:('.*?'|".*?")|([0-9]+\.?[0-9]*|true|false|null|undefined))|(?:(.+?)=(?:(?:('.*?'|".*?")|([0-9]+\.?[0-9]*|true|false|null|undefined))|(.+))))$/, Q = /(?:(?:^|(\r?)\n)(\s*)(\{\{([^\}]*)\}\}\}?)([^\S\n\r]*)($|\r?\n))|(\{\{([^\}]*)\}\}\}?)/g, K = function (W) {
        return W && "string" == typeof W.get
    }, B = function (d, Y, X, W) {
        for (var c = document.createDocumentFragment(), b = 0, Z = d.length; Z > b; b++) {
            T(c, X.fn(Y ? d.attr("" + b) : d[b], W))
        }
        return c
    }, T = function (X, W) {
        W && X.appendChild("string" == typeof W ? document.createTextNode(W) : W)
    }, R = function (d, Y, X, W) {
        for (var c = "", b = 0, Z = d.length; Z > b; b++) {
            c += X.fn(Y ? d.attr("" + b) : d[b], W)
        }
        return c
    }, I = function (Y, X, W) {
        var Z = X.computeData(Y, {isArgument: W, args: [X.attr("."), X]});
        return S.compute.temporarilyBind(Z.compute), Z
    }, G = function (Y, X) {
        var W = I(Y, X, !0);
        return W.compute.computeInstance.hasDependencies ? W.compute : W.initialValue
    }, U = function (c, Y, X, W, b, Z) {
        b && (c.fn = L(b, Y, X, W)), Z && (c.inverse = L(Z, Y, X, W))
    }, L = function (Y, X, W, b) {
        var Z = function (d, a, c) {
            return Y(d || X, a, c)
        };
        return function (d, a, g) {
            var e = S.__clearReading();
            void 0 === d || d instanceof S.view.Scope || (d = X.add(d)), void 0 === a || a instanceof V.Options || (a = W.add(a));
            var f = Z(d, a || W, g || b);
            return S.__setReading(e), f
        }
    }, V = {
        expressionData: function (X) {
            var W = [], Z = {}, Y = 0;
            return (S.trim(X) + " ").replace(N, function (c, a) {
                var b;
                Y && (b = a.match(F)) ? b[1] || b[2] ? W.push(E.jsonParse(b[1] || b[2])) : Z[b[3]] = b[6] ? {get: b[6]} : E.jsonParse(b[4] || b[5]) : W.push({get: a}), Y++
            }), {name: W.shift(), args: W, hash: Z}
        }, makeEvaluator: function (X, e, n, Y, l, Z, q, v) {
            for (var h, Ai, W = [], j = {}, d = {
                fn: function () {
                }, inverse: function () {
                }
            }, p = X.attr("."), Ac = l.name, g = l.args.length || !S.isEmptyObject(l.hash), Af = 0, Ag = l.args.length; Ag > Af; Af++) {
                var Aa = l.args[Af];
                W.push(Aa && K(Aa) ? G(Aa.get, X, !0) : Aa)
            }
            for (var t in l.hash) {
                j[t] = K(l.hash[t]) ? G(l.hash[t].get, X) : l.hash[t]
            }
            if (K(Ac) && (g && (h = M.getHelper(Ac.get, e), h || "function" != typeof p[Ac.get] || (h = {fn: p[Ac.get]})), !h)) {
                var Ad = Ac.get, Ab = I(Ac.get, X, !1), z = Ab.compute;
                Ai = Ab.initialValue, Ab.reads && 1 === Ab.reads.length && Ab.root instanceof S.Map && !S.isFunction(Ab.root[Ab.reads[0]]) && (z = S.compute(Ab.root, Ab.reads[0])), Ac = Ab.compute.computeInstance.hasDependencies ? z : Ai, g || void 0 !== Ai ? "function" == typeof Ai && (h = {fn: Ai}) : h = M.getHelper(Ad, e)
            }
            if ("^" === Y) {
                var Ae = Z;
                Z = q, q = Ae
            }
            if (h) {
                return U(d, X, e, n, Z, q), S.simpleExtend(d, {
                    context: p,
                    scope: X,
                    contexts: X,
                    hash: j,
                    nodeList: n,
                    exprData: l
                }), W.push(d), function () {
                    return h.fn.apply(p, W) || ""
                }
            }
            if (!Y) {
                return Ac && Ac.isComputed ? Ac : function () {
                    return "" + (null != Ac ? Ac : "")
                }
            }
            if ("#" === Y || "^" === Y) {
                U(d, X, e, n, Z, q);
                var Ah = function () {
                    var b;
                    if (b = S.isFunction(Ac) && Ac.isComputed ? Ac() : Ac, E.isArrayLike(b)) {
                        var c = E.isObserveLike(b);
                        return (c ? b.attr("length") : b.length) ? (v ? R : B)(b, c, d, e) : d.inverse(X, e)
                    }
                    return b ? d.fn(b || X, e) : d.inverse(X, e)
                };
                return Ah.bindOnce = !1, Ah
            }
        }, makeLiveBindingPartialRenderer: function (X, W) {
            return X = S.trim(X), function (e, b, Y) {
                var Z = [this];
                Z.expression = ">" + X, D.register(Z, null, W.directlyNested ? Y || !0 : !0);
                var d = S.compute(function () {
                    var c, a = X, g = b.attr("partials." + a);
                    if (g) {
                        c = g.render ? g.render(e, b) : g(e, b)
                    } else {
                        var f = e.read(a, {isArgument: !0, returnObserveMethods: !0, proxyMethods: !1}).value;
                        f && (a = f), c = S.view.render(a, e, b)
                    }
                    return S.frag(c)
                });
                C.html(this, d, this.parentNode, Z)
            }
        }, makeStringBranchRenderer: function (Z, Y) {
            var X = P(Y), W = Z + Y;
            return function (c, f, e, b) {
                var g = c.__cache[W];
                (Z || !g) && (g = A(c, f, null, Z, X, e, b, !0), Z || (c.__cache[W] = g));
                var d = g();
                return null == d ? "" : "" + d
            }
        }, makeLiveBindingBranchRenderer: function (X, W, Y) {
            var Z = P(W);
            return function (o, i, a, n, k) {
                var j = [this];
                j.expression = W, D.register(j, null, Y.directlyNested ? a || !0 : !0);
                var r = A(o, i, j, X, Z, n, k, Y.tag), q = S.compute(r, null, !1, r.bindOnce === !1 ? !1 : !0);
                q.bind("change", S.k);
                var e = q();
                if ("function" == typeof e) {
                    var b = S.__clearReading();
                    e(this), S.__setReading(b)
                } else {
                    q.computeInstance.hasDependencies ? Y.attr ? C.simpleAttribute(this, Y.attr, q) : Y.tag ? C.attributes(this, q) : Y.text && "object" != typeof e ? C.text(this, q, this.parentNode, j) : C.html(this, q, this.parentNode, j) : Y.attr ? S.attr.set(this, Y.attr, e) : Y.tag ? C.setAttributes(this, e) : Y.text && "string" == typeof e ? this.nodeValue = e : e && J.replace([this], S.frag(e))
                }
                q.unbind("change", S.k)
            }
        }, splitModeFromExpression: function (Y, X) {
            Y = S.trim(Y);
            var W = Y.charAt(0);
            return "#/{&^>!".indexOf(W) >= 0 ? Y = S.trim(Y.substr(1)) : W = null, "{" === W && X.node && (W = null), {
                mode: W,
                expression: Y
            }
        }, cleanLineEndings: function (W) {
            return W.replace(Q, function (g, k, Z, h, X, d, j, b, m, f) {
                d = d || "", k = k || "", Z = Z || "";
                var Y = H(X || m, {});
                return b || ">{".indexOf(Y.mode) >= 0 ? g : "^#!/".indexOf(Y.mode) >= 0 ? h + (0 !== f && j.length ? k + "\n" : "") : Z + h + d + (Z.length || 0 !== f ? k + "\n" : "")
            })
        }, Options: S.view.Scope.extend({
            init: function (X, W) {
                X.helpers || X.partials || X.tags || (X = {helpers: X}), S.view.Scope.prototype.init.apply(this, arguments)
            }
        })
    }, A = V.makeEvaluator, P = V.expressionData, H = V.splitModeFromExpression;
    return V
});
define("can/view/bindings/bindings", ["can/util/util", "can/view/stache/mustache_core", "can/view/callbacks/callbacks", "can/control/control", "can/view/scope/scope"], function (E, H) {
    var B = function () {
        var K = {"": !0, "true": !0, "false": !1}, J = function (M) {
            if (M && M.getAttribute) {
                var L = M.getAttribute("contenteditable");
                return K[L]
            }
        };
        return function (M) {
            var L = J(M);
            return "boolean" == typeof L ? L : !!J(M.parentNode)
        }
    }(), A = function (J) {
        return "{" === J[0] && "}" === J[J.length - 1] ? J.substr(1, J.length - 2) : J
    };
    E.view.attr("can-value", function (K, L) {
        var M, O, N = E.trim(A(K.getAttribute("can-value"))), J = L.scope.computeData(N, {args: []}).compute;
        return "input" === K.nodeName.toLowerCase() && ("checkbox" === K.type && (M = E.attr.has(K, "can-true-value") ? K.getAttribute("can-true-value") : !0, O = E.attr.has(K, "can-false-value") ? K.getAttribute("can-false-value") : !1), "checkbox" === K.type || "radio" === K.type) ? void new C(K, {
            value: J,
            trueValue: M,
            falseValue: O
        }) : "select" === K.nodeName.toLowerCase() && K.multiple ? void new I(K, {value: J}) : B(K) ? void new F(K, {value: J}) : void new G(K, {value: J})
    });
    var D = {
        enter: function (L, K, J) {
            return {
                event: "keyup", handler: function (M) {
                    return 13 === M.keyCode ? J.call(this, M) : void 0
                }
            }
        }
    };
    E.view.attr(/can-[\w\.]+/, function (K, O) {
        var L = O.attributeName, M = L.substr("can-".length), J = function (R) {
            var Y = K.getAttribute(L);
            if (Y) {
                var X = H.expressionData(A(Y)), T = O.scope.read(X.name.get, {
                    returnObserveMethods: !0,
                    isArgument: !0,
                    executeAnonymousFunctions: !0
                }), P = [], b = E.$(this), Z = E.viewModel(b[0]), V = O.scope.add({
                    "@element": b,
                    "@event": R,
                    "@viewModel": Z,
                    "@scope": O.scope,
                    "@context": O.scope._context
                });
                if (!E.isEmptyObject(X.hash)) {
                    var W = {};
                    E.each(X.hash, function (d, c) {
                        if (d && d.hasOwnProperty("get")) {
                            var a = d.get.indexOf("@") ? O.scope : V;
                            W[c] = a.read(d.get, {}).value
                        } else {
                            W[c] = d
                        }
                    }), P.unshift(W)
                }
                if (X.args.length) {
                    for (var U, S = X.args.length - 1; S >= 0; S--) {
                        if (U = X.args[S], U && U.hasOwnProperty("get")) {
                            var Q = U.get.indexOf("@") ? O.scope : V;
                            P.unshift(Q.read(U.get, {}).value)
                        } else {
                            P.unshift(U)
                        }
                    }
                }
                return P.length || (P = [O.scope._context, b].concat(E.makeArray(arguments))), T.value.apply(T.parent, P)
            }
        };
        if (D[M]) {
            var N = D[M](O, K, J);
            J = N.handler, M = N.event
        }
        E.bind.call(K, M, J)
    });
    var G = E.Control.extend({
        init: function () {
            "SELECT" === this.element[0].nodeName.toUpperCase() ? setTimeout(E.proxy(this.set, this), 1) : this.set()
        }, "{value} change": "set", set: function () {
            if (this.element) {
                var J = this.options.value();
                this.element[0].value = null == J ? "" : J
            }
        }, change: function () {
            if (this.element) {
                var K = this.element[0];
                this.options.value(K.value);
                var J = this.options.value();
                K.value !== J && (K.value = J)
            }
        }
    }), C = E.Control.extend({
        init: function () {
            this.isCheckbox = "checkbox" === this.element[0].type.toLowerCase(), this.check()
        }, "{value} change": "check", check: function () {
            if (this.isCheckbox) {
                var K = this.options.value(), J = this.options.trueValue || !0;
                this.element[0].checked = K == J
            } else {
                var L = this.options.value() == this.element[0].value ? "set" : "remove";
                E.attr[L](this.element[0], "checked", !0)
            }
        }, change: function () {
            this.isCheckbox ? this.options.value(this.element[0].checked ? this.options.trueValue : this.options.falseValue) : this.element[0].checked && this.options.value(this.element[0].value)
        }
    }), I = G.extend({
        init: function () {
            this.delimiter = ";", setTimeout(E.proxy(this.set, this), 1)
        }, set: function () {
            var K = this.options.value();
            "string" == typeof K ? (K = K.split(this.delimiter), this.isString = !0) : K && (K = E.makeArray(K));
            var J = {};
            E.each(K, function (L) {
                J[L] = !0
            }), E.each(this.element[0].childNodes, function (L) {
                L.value && (L.selected = !!J[L.value])
            })
        }, get: function () {
            var K = [], J = this.element[0].childNodes;
            return E.each(J, function (L) {
                L.selected && L.value && K.push(L.value)
            }), K
        }, change: function () {
            var K = this.get(), J = this.options.value();
            this.isString || "string" == typeof J ? (this.isString = !0, this.options.value(K.join(this.delimiter))) : J instanceof E.List ? J.attr(K, !0) : this.options.value(K)
        }
    }), F = E.Control.extend({
        init: function () {
            this.set(), this.on("blur", "setValue")
        }, "{value} change": "set", set: function () {
            var J = this.options.value();
            this.element[0].innerHTML = "undefined" == typeof J ? "" : J
        }, setValue: function () {
            this.options.value(this.element[0].innerHTML)
        }
    })
});
define("can/view/mustache/mustache", ["can/util/util", "can/view/scope/scope", "can/view/view", "can/view/scanner", "can/compute/compute", "can/view/render", "can/view/bindings/bindings"], function (H) {
    H.view.ext = ".mustache";
    var C = "scope", M = "___h4sh", K = "{scope:" + C + ",options:options}", A = "{scope:" + C + ",options:options, special: true}", L = C + ",options", D = /((([^'"\s]+?=)?('.*?'|".*?"))|.*?)\s/g, E = /^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false|null|undefined)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/, G = function (Q) {
        return '{get:"' + Q.replace(/"/g, '\\"') + '"}'
    }, N = function (Q) {
        return Q && "string" == typeof Q.get
    }, I = function (Q) {
        return Q instanceof H.Map || Q && !!Q._get
    }, J = function (Q) {
        return Q && Q.splice && "number" == typeof Q.length
    }, B = function (R, S, Q) {
        var T = function (V, U) {
            return R(V || S, U)
        };
        return function (U, V) {
            return void 0 === U || U instanceof H.view.Scope || (U = S.add(U)), void 0 === V || V instanceof H.view.Options || (V = Q.add(V)), T(U, V || Q)
        }
    }, P = function (R, S) {
        if (this.constructor !== P) {
            var Q = new P(R);
            return function (U, T) {
                return Q.render(U, T)
            }
        }
        return "function" == typeof R ? void (this.template = {fn: R}) : (H.extend(this, R), void (this.template = this.scanner.scan(this.text, this.name)))
    };
    H.Mustache = H.global.Mustache = P, P.prototype.render = function (Q, R) {
        return Q instanceof H.view.Scope || (Q = new H.view.Scope(Q || {})), R instanceof H.view.Options || (R = new H.view.Options(R || {})), R = R || {}, this.template.fn.call(Q, Q, R)
    }, H.extend(P.prototype, {
        scanner: new H.view.Scanner({
            text: {
                start: "",
                scope: C,
                options: ",options: options",
                argNames: L
            },
            tokens: [["returnLeft", "{{{", "{{[{&]"], ["commentFull", "{{!}}", "^[\\s\\t]*{{!.+?}}\\n"], ["commentLeft", "{{!", "(\\n[\\s\\t]*{{!|{{!)"], ["escapeFull", "{{}}", "(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)", function (Q) {
                return {before: /^\n.+?\n$/.test(Q) ? "\n" : "", content: Q.match(/\{\{(.+?)\}\}/)[1] || ""}
            }], ["escapeLeft", "{{"], ["returnRight", "}}}"], ["right", "}}"]],
            helpers: [{
                name: /^>[\s]*\w*/, fn: function (R, S) {
                    var Q = H.trim(R.replace(/^>\s?/, "")).replace(/["|']/g, "");
                    return "can.Mustache.renderPartial('" + Q + "'," + L + ")"
                }
            }, {
                name: /^\s*data\s/, fn: function (S, R) {
                    var Q = S.match(/["|'](.*)["|']/)[1];
                    return "can.proxy(function(__){can.data(can.$(__),'" + Q + "', this.attr('.')); }, " + C + ")"
                }
            }, {
                name: /\s*\(([\$\w]+)\)\s*->([^\n]*)/, fn: function (S) {
                    var R = /\s*\(([\$\w]+)\)\s*->([^\n]*)/, Q = S.match(R);
                    return "can.proxy(function(__){var " + Q[1] + "=can.$(__);with(" + C + ".attr('.')){" + Q[2] + "}}, this);"
                }
            }, {
                name: /^.*$/, fn: function (R, V) {
                    var T = !1, U = {content: "", startTxt: !1, startOnlyTxt: !1, end: !1};
                    if (R = H.trim(R), R.length && (T = R.match(/^([#^\/]|else$)/))) {
                        switch (T = T[0]) {
                            case"#":
                            case"^":
                                V.specialAttribute ? U.startOnlyTxt = !0 : (U.startTxt = !0, U.escaped = 0);
                                break;
                            case"/":
                                return U.end = !0, U.content += 'return ___v1ew.join("");}}])', U
                        }
                        R = R.substring(1)
                    }
                    if ("else" !== T) {
                        var Q, X = [], W = [], S = 0;
                        U.content += "can.Mustache.txt(\n" + (V.specialAttribute ? A : K) + ",\n" + (T ? '"' + T + '"' : "null") + ",", (H.trim(R) + " ").replace(D, function (Z, Y) {
                            S && (Q = Y.match(E)) ? Q[2] ? X.push(Q[0]) : W.push(Q[4] + ":" + (Q[6] ? Q[6] : G(Q[5]))) : X.push(G(Y)), S++
                        }), U.content += X.join(","), W.length && (U.content += ",{" + M + ":{" + W.join(",") + "}}")
                    }
                    switch (T && "else" !== T && (U.content += ",[\n\n"), T) {
                        case"^":
                        case"#":
                            U.content += "{fn:function(" + L + "){var ___v1ew = [];";
                            break;
                        case"else":
                            U.content += 'return ___v1ew.join("");}},\n{inverse:function(' + L + "){\nvar ___v1ew = [];";
                            break;
                        default:
                            U.content += ")"
                    }
                    return T || (U.startTxt = !0, U.end = !0), U
                }
            }]
        })
    });
    for (var O = H.view.Scanner.prototype.helpers, F = 0; F < O.length; F++) {
        P.prototype.scanner.helpers.unshift(O[F])
    }
    return P.txt = function (S, f, Q) {
        for (var h, T, V = S.scope, X = S.options, j = [], e = {
            fn: function () {
            }, inverse: function () {
            }
        }, Y = V.attr("."), R = !0, k = 3; k < arguments.length; k++) {
            var Z = arguments[k];
            if (f && H.isArray(Z)) {
                e = H.extend.apply(H, [e].concat(Z))
            } else {
                if (Z && Z[M]) {
                    h = Z[M];
                    for (var l in h) {
                        N(h[l]) && (h[l] = P.get(h[l].get, S, !1, !0))
                    }
                } else {
                    j.push(Z && N(Z) ? P.get(Z.get, S, !1, !0, !0) : Z)
                }
            }
        }
        if (N(Q)) {
            var U = Q.get;
            Q = P.get(Q.get, S, j.length, !1), R = U === Q
        }
        if (e.fn = B(e.fn, V, X), e.inverse = B(e.inverse, V, X), "^" === f) {
            var W = e.fn;
            e.fn = e.inverse, e.inverse = W
        }
        return (T = R && "string" == typeof Q && P.getHelper(Q, X) || H.isFunction(Q) && !Q.isComputed && {fn: Q}) ? (H.extend(e, {
            context: Y,
            scope: V,
            contexts: V,
            hash: h
        }), j.push(e), function () {
            return T.fn.apply(Y, j) || ""
        }) : function () {
            var d;
            d = H.isFunction(Q) && Q.isComputed ? Q() : Q;
            var q, p, g, i = j.length ? j : [d], m = !0, r = [];
            if (f) {
                for (q = 0; q < i.length; q++) {
                    g = i[q], p = "undefined" != typeof g && I(g), J(g) ? "#" === f ? m = m && !!(p ? g.attr("length") : g.length) : "^" === f && (m = m && !(p ? g.attr("length") : g.length)) : m = "#" === f ? m && !!g : "^" === f ? m && !g : m
                }
            }
            if (m) {
                if ("#" === f) {
                    if (J(d)) {
                        var b = I(d);
                        for (q = 0; q < d.length; q++) {
                            r.push(e.fn(b ? d.attr("" + q) : d[q]))
                        }
                        return r.join("")
                    }
                    return e.fn(d || {}) || ""
                }
                return "^" === f ? e.inverse(d || {}) || "" : "" + (null != d ? d : "")
            }
            return ""
        }
    }, P.get = function (R, Y, W, Q, X) {
        var S = Y.scope.attr("."), T = Y.options || {};
        if (W) {
            if (P.getHelper(R, T)) {
                return R
            }
            if (Y.scope && H.isFunction(S[R])) {
                return S[R]
            }
        }
        var U = Y.scope.computeData(R, {isArgument: Q, args: [S, Y.scope]}), Z = U.compute;
        H.compute.temporarilyBind(Z);
        var V = U.initialValue;
        P.getHelper(R, T);
        return X || void 0 !== V && U.scope === Y.scope || !P.getHelper(R, T) ? Z.computeInstance.hasDependencies ? Z : V : R
    }, P.resolve = function (Q) {
        return I(Q) && J(Q) && Q.attr("length") ? Q : H.isFunction(Q) ? Q() : Q
    }, H.view.Options = H.view.Scope.extend({
        init: function (Q, R) {
            Q.helpers || Q.partials || Q.tags || (Q = {helpers: Q}), H.view.Scope.prototype.init.apply(this, arguments)
        }
    }), P._helpers = {}, P.registerHelper = function (R, Q) {
        this._helpers[R] = {name: R, fn: Q}
    }, P.getHelper = function (S, Q) {
        var R;
        return Q && (R = Q.attr("helpers." + S)), R ? {fn: R} : this._helpers[S]
    }, P.render = function (R, S, Q) {
        if (!H.view.cached[R]) {
            var T = H.__clearReading(), U = S.attr(R);
            U && (R = U), H.__setReading(T)
        }
        return H.view.render(R, S, Q)
    }, P.safeString = function (Q) {
        return {
            toString: function () {
                return Q
            }
        }
    }, P.renderPartial = function (R, S, Q) {
        var T = Q.attr("partials." + R);
        return T ? T.render ? T.render(S, Q) : T(S, Q) : H.Mustache.render(R, S, Q)
    }, H.each({
        "if": function (R, S) {
            var Q;
            return Q = H.isFunction(R) ? H.compute.truthy(R)() : !!P.resolve(R), Q ? S.fn(S.contexts || this) : S.inverse(S.contexts || this)
        }, is: function () {
            var R, S, Q = arguments[arguments.length - 1];
            if (arguments.length - 2 <= 0) {
                return Q.inverse()
            }
            for (var T = 0; T < arguments.length - 1; T++) {
                if (S = P.resolve(arguments[T]), S = H.isFunction(S) ? S() : S, T > 0 && S !== R) {
                    return Q.inverse()
                }
                R = S
            }
            return Q.fn()
        }, eq: function () {
            return P._helpers.is.fn.apply(this, arguments)
        }, unless: function (Q, R) {
            return P._helpers["if"].fn.apply(this, [H.isFunction(Q) ? H.compute(function () {
                return !Q()
            }) : !Q, R])
        }, each: function (R, S) {
            var Q, U, V, W = P.resolve(R), T = [];
            if (H.view.lists && (W instanceof H.List || R && R.isComputed && void 0 === W)) {
                return H.view.lists(R, function (Y, X) {
                    return S.fn(S.scope.add({"@index": X}).add(Y))
                })
            }
            if (R = W, R && J(R)) {
                for (V = 0; V < R.length; V++) {
                    T.push(S.fn(S.scope.add({"@index": V}).add(R[V])))
                }
                return T.join("")
            }
            if (I(R)) {
                for (Q = H.Map.keys(R), V = 0; V < Q.length; V++) {
                    U = Q[V], T.push(S.fn(S.scope.add({"@key": U}).add(R[U])))
                }
                return T.join("")
            }
            if (R instanceof Object) {
                for (U in R) {
                    T.push(S.fn(S.scope.add({"@key": U}).add(R[U])))
                }
                return T.join("")
            }
        }, "with": function (S, Q) {
            var R = S;
            return S = P.resolve(S), S ? Q.fn(R) : void 0
        }, log: function (R, Q) {
            "undefined" != typeof console && console.log && (Q ? console.log(R, Q.context) : console.log(R.context))
        }, "@index": function (R, S) {
            S || (S = R, R = 0);
            var Q = S.scope.attr("@index");
            return "" + ((H.isFunction(Q) ? Q() : Q) + R)
        }
    }, function (R, Q) {
        P.registerHelper(Q, R)
    }), H.view.register({
        suffix: "mustache", contentType: "x-mustache-template", script: function (R, Q) {
            return "can.Mustache(function(" + L + ") { " + new P({text: Q, name: R}).template.out + " })"
        }, renderer: function (R, Q) {
            return P({text: Q, name: R})
        }
    }), H.mustache.registerHelper = H.proxy(H.Mustache.registerHelper, H.Mustache), H.mustache.safeString = H.Mustache.safeString, H
});
define("can/component/component", ["can/util/util", "can/view/callbacks/callbacks", "can/view/elements", "can/control/control", "can/observe/observe", "can/view/mustache/mustache", "can/view/bindings/bindings"], function (H, F, B) {
    var C = /^(dataViewId|class|id)$/i, A = /\{([^\}]+)\}/g, G = H.Component = H.Construct.extend({
        setup: function () {
            if (H.Construct.setup.apply(this, arguments), H.Component) {
                var K = this, I = this.prototype.scope || this.prototype.viewModel;
                if (this.Control = D.extend(this.prototype.events), I && ("object" != typeof I || I instanceof H.Map) ? I.prototype instanceof H.Map && (this.Map = I) : this.Map = H.Map.extend(I || {}), this.attributeScopeMappings = {}, H.each(this.Map ? this.Map.defaults : {}, function (M, L) {
                        "@" === M && (K.attributeScopeMappings[L] = L)
                    }), this.prototype.template) {
                    if ("function" == typeof this.prototype.template) {
                        var J = this.prototype.template;
                        this.renderer = function () {
                            return H.view.frag(J.apply(null, arguments))
                        }
                    } else {
                        this.renderer = H.view.mustache(this.prototype.template)
                    }
                }
                H.view.tag(this.prototype.tag, function (M, L) {
                    new K(M, L)
                })
            }
        }
    }, {
        setup: function (R, L) {
            var U, W, K = {}, J = this, N = ("undefined" == typeof this.leakScope ? !1 : !this.leakScope) && this.template, S = {}, Q = this.scope || this.viewModel, X = {}, Y = [], T = function () {
                for (var M = 0, a = Y.length; a > M; M++) {
                    Y[M]()
                }
            };
            if (H.each(this.constructor.attributeScopeMappings, function (a, M) {
                    K[M] = R.getAttribute(H.hyphenate(a))
                }), H.each(H.makeArray(R.attributes), function (a, k) {
                    var g = H.camelize(a.nodeName.toLowerCase()), d = a.value;
                    if (!(J.constructor.attributeScopeMappings[g] || C.test(g) || F.attr(a.nodeName))) {
                        if ("{" === d[0] && "}" === d[d.length - 1]) {
                            d = d.substr(1, d.length - 2)
                        } else {
                            if ("legacy" !== L.templateType) {
                                return void (K[g] = d)
                            }
                        }
                        var b = L.scope.computeData(d, {args: []}), M = b.compute, f = function (h, c) {
                            X[g] = (X[g] || 0) + 1, U.attr(g, c), H.batch.afterPreviousEvents(function () {
                                --X[g]
                            })
                        };
                        M.bind("change", f), K[g] = M(), M.computeInstance.hasDependencies ? (Y.push(function () {
                            M.unbind("change", f)
                        }), S[g] = b) : M.unbind("change", f)
                    }
                }), this.constructor.Map) {
                U = new this.constructor.Map(K)
            } else {
                if (Q instanceof H.Map) {
                    U = Q
                } else {
                    if (H.isFunction(Q)) {
                        var O = Q.call(this, K, L.scope, R);
                        U = O instanceof H.Map ? O : O.prototype instanceof H.Map ? new O(K) : new (H.Map.extend(O))(K)
                    }
                }
            }
            var Z = {};
            H.each(S, function (M, a) {
                Z[a] = function (b, c) {
                    X[a] || M.compute(c)
                }, U.bind(a, Z[a])
            }), H.isEmptyObject(this.constructor.attributeScopeMappings) && "legacy" === L.templateType || H.bind.call(R, "attributes", function (a) {
                var M = H.camelize(a.attributeName);
                S[M] || C.test(M) || U.attr(M, R.getAttribute(a.attributeName))
            }), this.scope = this.viewModel = U, H.data(H.$(R), "scope", this.scope), H.data(H.$(R), "viewModel", this.scope);
            var V = N ? this.scope : L.scope.add(this.scope), I = {helpers: {}};
            if (H.each(this.helpers || {}, function (a, M) {
                    H.isFunction(a) && (I.helpers[M] = function () {
                        return a.apply(U, arguments)
                    })
                }), Y.push(function () {
                    H.each(Z, function (M, a) {
                        U.unbind(a, Z[a])
                    })
                }), this._control = new this.constructor.Control(R, {
                    scope: this.scope,
                    viewModel: this.scope
                }), this._control && this._control.destroy) {
                var P = this._control.destroy;
                this._control.destroy = function () {
                    P.apply(this, arguments), T()
                }, this._control.on()
            } else {
                H.bind.call(R, "removed", function () {
                    T()
                })
            }
            var e = H.view.nodeLists.register([], void 0, !0);
            Y.push(function () {
                H.view.nodeLists.unregister(e)
            }), this.constructor.renderer ? (I.tags || (I.tags = {}), I.tags.content = function j(g, M) {
                var f = L.subtemplate || M.subtemplate;
                if (f) {
                    delete I.tags.content;
                    var b = N && f === L.subtemplate ? L : M;
                    if (M.parentNodeList) {
                        var d = f(b.scope, b.options, M.parentNodeList);
                        B.replace([g], d)
                    } else {
                        H.view.live.replace([g], f(b.scope, b.options))
                    }
                    I.tags.content = j
                }
            }, W = this.constructor.renderer(V, L.options.add(I), e)) : W = "legacy" === L.templateType ? H.view.frag(L.subtemplate ? L.subtemplate(V, L.options.add(I)) : "") : L.subtemplate ? L.subtemplate(V, L.options.add(I), e) : document.createDocumentFragment(), H.appendChild(R, W), H.view.nodeLists.update(e, R.childNodes)
        }
    }), D = H.Control.extend({
        _lookup: function (I) {
            return [I.scope, I, window]
        }, _action: function (M, I, J) {
            var K, N;
            if (A.lastIndex = 0, K = A.test(M), J || !K) {
                if (K) {
                    N = H.compute(function () {
                        var P, O = M.replace(A, function (U, T) {
                            var S;
                            return "scope" === T || "viewModel" === T ? (P = I.scope, "") : (T = T.replace(/^(scope|^viewModel)\./, ""), S = H.compute.read(I.scope, T.split("."), {isArgument: !0}).value, void 0 === S && (S = H.getObject(T)), "string" == typeof S ? S : (P = S, ""))
                        }), Q = O.split(/\s+/g), R = Q.pop();
                        return {
                            processor: this.processors[R] || this.processors.click,
                            parts: [O, Q.join(" "), R],
                            delegate: P || void 0
                        }
                    }, this);
                    var L = function (P, O) {
                        J._bindings.control[M](J.element), J._bindings.control[M] = O.processor(O.delegate || J.element, O.parts[2], O.parts[1], M, J)
                    };
                    return N.bind("change", L), J._bindings.readyComputes[M] = {compute: N, handler: L}, N()
                }
                return H.Control._action.apply(this, arguments)
            }
        }
    }, {
        setup: function (J, I) {
            return this.scope = I.scope, this.viewModel = I.viewModel, H.Control.prototype.setup.call(this, J, I)
        }, off: function () {
            this._bindings && H.each(this._bindings.readyComputes || {}, function (I) {
                I.compute.unbind("change", I.handler)
            }), H.Control.prototype.off.apply(this, arguments), this._bindings.readyComputes = {}
        }
    }), E = H.$;
    return E.fn && (E.fn.scope = E.fn.viewModel = function () {
        return H.viewModel.apply(H, [this].concat(H.makeArray(arguments)))
    }), G
});
define("can/model/model", ["can/util/util", "can/map/map", "can/list/list"], function (M) {
    var H = function (S, P, R) {
        var Q = new M.Deferred;
        return S.then(function () {
            var V = M.makeArray(arguments), T = !0;
            try {
                V[0] = R.apply(P, V)
            } catch (U) {
                T = !1, Q.rejectWith(Q, [U].concat(V))
            }
            T && Q.resolveWith(Q, V)
        }, function () {
            Q.rejectWith(this, arguments)
        }), "function" == typeof S.abort && (Q.abort = function () {
            return S.abort()
        }), Q
    }, K = 0, A = function (P) {
        return M.__reading(P, P.constructor.id), P.__get(P.constructor.id)
    }, C = function (T, U, P, Q, V, R) {
        var S = {};
        if ("string" == typeof T) {
            var W = T.split(/\s+/);
            S.url = W.pop(), W.length && (S.type = W.pop())
        } else {
            M.extend(S, T)
        }
        return S.data = "object" != typeof U || M.isArray(U) ? U : M.extend(S.data || {}, U), S.url = M.sub(S.url, S.data, !0), M.ajax(M.extend({
            type: P || "post",
            dataType: Q || "json",
            success: V,
            error: R
        }, S))
    }, L = function (V, Q, W, R, S) {
        var X;
        M.isArray(V) ? (X = V[1], V = V[0]) : X = V.serialize(), X = [X];
        var T, U, P = V.constructor;
        return ("update" === Q || "destroy" === Q) && X.unshift(A(V)), U = P[Q].apply(P, X), T = H(U, V, function (Y) {
            return V[S || Q + "d"](Y, U), V
        }), U.abort && (T.abort = function () {
            U.abort()
        }), T.then(W, R), T
    }, D = {
        models: function (U, V, P) {
            if (M.Model._reqs++, U) {
                if (U instanceof this.List) {
                    return U
                }
                var Q = this, W = [], R = Q.List || I, S = V instanceof M.List ? V : new R, X = U instanceof I, T = X ? U.serialize() : U;
                if (T = Q.parseModels(T, P), T.data && (U = T, T = T.data), "undefined" == typeof T) {
                    throw new Error("Could not get any raw data while converting using .models")
                }
                return S.length && S.splice(0), M.each(T, function (Y) {
                    W.push(Q.model(Y, P))
                }), S.push.apply(S, W), M.isArray(U) || M.each(U, function (Y, Z) {
                    "data" !== Z && S.attr(Z, Y)
                }), setTimeout(M.proxy(this._clean, this), 1), S
            }
        }, model: function (T, P, S) {
            if (T) {
                T = "function" == typeof T.serialize ? T.serialize() : this.parseModel(T, S);
                var Q = T[this.id];
                (Q || 0 === Q) && this.store[Q] && (P = this.store[Q]);
                var R = P && M.isFunction(P.attr) ? P.attr(T, this.removeAttr || !1) : new this(T);
                return R
            }
        }
    }, E = {
        parseModel: function (P) {
            return function (Q) {
                return P ? M.getObject(P, Q) : Q
            }
        }, parseModels: function (P) {
            return function (Q) {
                if (M.isArray(Q)) {
                    return Q
                }
                P = P || "data";
                var R = M.getObject(P, Q);
                if (!M.isArray(R)) {
                    throw new Error("Could not get any raw data while converting using .models")
                }
                return R
            }
        }
    }, N = {
        create: {url: "_shortName", type: "post"}, update: {
            data: function (R, P) {
                P = P || {};
                var Q = this.id;
                return P[Q] && P[Q] !== R && (P["new" + M.capitalize(R)] = P[Q], delete P[Q]), P[Q] = R, P
            }, type: "put"
        }, destroy: {
            type: "delete", data: function (P, Q) {
                return Q = Q || {}, Q.id = Q[this.id] = P, Q
            }
        }, findAll: {url: "_shortName"}, findOne: {}
    }, F = function (P, Q) {
        return function (R) {
            return R = P.data ? P.data.apply(this, arguments) : R, C(Q || this[P.url || "_url"], R, P.type || "get")
        }
    }, G = function (Q, R) {
        if (Q.resource) {
            var P = Q.resource.replace(/\/+$/, "");
            return "findAll" === R || "create" === R ? P : P + "/{" + Q.id + "}"
        }
    };
    M.Model = M.Map.extend({
        fullName: "can.Model", _reqs: 0, setup: function (T, S, P, Q) {
            if ("string" != typeof S && (Q = P, P = S), Q || (Q = P), this.store = {}, M.Map.setup.apply(this, arguments), M.Model) {
                P && P.List ? (this.List = P.List, this.List.Map = this) : this.List = T.List.extend({Map: this}, {});
                var V = this, U = M.proxy(this._clean, V);
                M.each(N, function (W, Y) {
                    if (P && P[Y] && ("string" == typeof P[Y] || "object" == typeof P[Y]) ? V[Y] = F(W, P[Y]) : P && P.resource && !M.isFunction(P[Y]) && (V[Y] = F(W, G(V, Y))), V["make" + M.capitalize(Y)]) {
                        var X = V["make" + M.capitalize(Y)](V[Y]);
                        M.Construct._overwrite(V, T, Y, function () {
                            M.Model._reqs++;
                            var a = X.apply(this, arguments), Z = a.then(U, U);
                            return Z.abort = a.abort, Z
                        })
                    }
                });
                var R = {};
                M.each(D, function (W, Z) {
                    var X = "parse" + M.capitalize(Z), Y = P && P[Z] || V[Z];
                    "string" == typeof Y ? (V[X] = Y, M.Construct._overwrite(V, T, Z, W)) : P && P[Z] && (R[X] = !0)
                }), M.each(E, function (W, Z) {
                    var X = P && P[Z] || V[Z];
                    if ("string" == typeof X) {
                        M.Construct._overwrite(V, T, Z, W(X))
                    } else {
                        if (!(P && M.isFunction(P[Z]) || V[Z])) {
                            var Y = W();
                            Y.useModelConverter = R[Z], M.Construct._overwrite(V, T, Z, Y)
                        }
                    }
                }), "can.Model" !== V.fullName && V.fullName || (V.fullName = "Model" + ++K), M.Model._reqs = 0, this._url = this._shortName + "/{" + this.id + "}"
            }
        }, _ajax: F, _makeRequest: L, _clean: function () {
            if (M.Model._reqs--, !M.Model._reqs) {
                for (var P in this.store) {
                    this.store[P]._bindings || delete this.store[P]
                }
            }
            return arguments[0]
        }, models: D.models, model: D.model
    }, {
        setup: function (Q) {
            var P = Q && Q[this.constructor.id];
            M.Model._reqs && null != P && (this.constructor.store[P] = this), M.Map.prototype.setup.apply(this, arguments)
        }, isNew: function () {
            var P = A(this);
            return !(P || 0 === P)
        }, save: function (P, Q) {
            return L(this, this.isNew() ? "create" : "update", P, Q)
        }, destroy: function (S, P) {
            if (this.isNew()) {
                var R = this, Q = M.Deferred();
                return Q.then(S, P), Q.done(function (T) {
                    R.destroyed(T)
                }).resolve(R)
            }
            return L(this, "destroy", S, P, "destroyed")
        }, _bindsetup: function () {
            var P = this.__get(this.constructor.id);
            return null != P && (this.constructor.store[P] = this), M.Map.prototype._bindsetup.apply(this, arguments)
        }, _bindteardown: function () {
            return delete this.constructor.store[A(this)], M.Map.prototype._bindteardown.apply(this, arguments)
        }, ___set: function (Q, P) {
            M.Map.prototype.___set.call(this, Q, P), Q === this.constructor.id && this._bindings && (this.constructor.store[A(this)] = this)
        }
    });
    var B = function (P) {
        return function (S, Q, R) {
            return this[P](S, null, R)
        }
    }, J = function (P) {
        return this.parseModel.useModelConverter ? this.model(P) : this.parseModel(P)
    }, O = {makeFindAll: B("models"), makeFindOne: B("model"), makeCreate: J, makeUpdate: J, makeDestroy: J};
    M.each(O, function (P, Q) {
        M.Model[Q] = function (R) {
            return function () {
                var S = M.makeArray(arguments), U = M.isFunction(S[1]) ? S.splice(0, 1) : S.splice(0, 2), T = H(R.apply(this, U), this, P);
                return T.then(S[0], S[1]), T
            }
        }
    }), M.each(["created", "updated", "destroyed"], function (P) {
        M.Model.prototype[P] = function (Q) {
            var S = this, R = S.constructor;
            Q && "object" == typeof Q && this.attr(M.isFunction(Q.attr) ? Q.attr() : Q), M.dispatch.call(this, {
                type: "change",
                target: this
            }, [P]), M.dispatch.call(R, P, [this])
        }
    });
    var I = M.Model.List = M.List.extend({
        _bubbleRule: function (R, P) {
            var Q = M.List._bubbleRule(R, P);
            return Q.push("destroyed"), Q
        }
    }, {
        setup: function (P) {
            M.isPlainObject(P) && !M.isArray(P) ? (M.List.prototype.setup.apply(this), this.replace(M.isDeferred(P) ? P : this.constructor.Map.findAll(P))) : M.List.prototype.setup.apply(this, arguments), this._init = 1, this.bind("destroyed", M.proxy(this._destroyed, this)), delete this._init
        }, _destroyed: function (Q, R) {
            if (/\w+/.test(R)) {
                for (var P; (P = this.indexOf(Q.target)) > -1;) {
                    this.splice(P, 1)
                }
            }
        }
    });
    return M.Model
});
define("can/util/string/deparam/deparam", ["can/util/util", "can/util/string/string"], function (C) {
    var B = /^\d+$/, E = /([^\[\]]+)|(\[\])/g, A = /([^?#]*)(#.*)?$/, D = function (F) {
        return decodeURIComponent(F.replace(/\+/g, " "))
    };
    return C.extend(C, {
        deparam: function (H) {
            var G, I, F = {};
            return H && A.test(H) && (G = H.split("&"), C.each(G, function (L) {
                var J = L.split("="), N = D(J.shift()), M = D(J.join("=")), P = F;
                if (N) {
                    J = N.match(E);
                    for (var K = 0, O = J.length - 1; O > K; K++) {
                        P[J[K]] || (P[J[K]] = B.test(J[K + 1]) || "[]" === J[K + 1] ? [] : {}), P = P[J[K]]
                    }
                    I = J.pop(), "[]" === I ? P.push(M) : P[I] = M
                }
            })), F
        }
    }), C
});
define("can/route/route", ["can/util/util", "can/map/map", "can/list/list", "can/util/string/deparam/deparam"], function (D) {
    var Q, B, K, M, E = /\:([\w\.]+)/g, L = /^(?:&[^=]+=[^&]*)+/, H = function (V) {
        var U = [];
        return D.each(V, function (X, W) {
            U.push(("className" === W ? "class" : W) + '="' + ("href" === W ? X : D.esc(X)) + '"')
        }), U.join(" ")
    }, O = function (W, Z) {
        var U = 0, V = 0, Y = {};
        for (var X in W.defaults) {
            W.defaults[X] === Z[X] && (Y[X] = 1, U++)
        }
        for (; V < W.names.length; V++) {
            if (!Z.hasOwnProperty(W.names[V])) {
                return -1
            }
            Y[W.names[V]] || U++
        }
        return U
    }, I = window.location, C = function (U) {
        return (U + "").replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1")
    }, P = D.each, R = D.extend, G = function (U) {
        return U && "object" == typeof U ? (U = U instanceof D.Map ? U.attr() : D.isFunction(U.slice) ? U.slice() : D.extend({}, U), D.each(U, function (W, V) {
            U[V] = G(W)
        })) : void 0 !== U && null !== U && D.isFunction(U.toString) && (U = U.toString()), U
    }, A = function (U) {
        return U.replace(/\\/g, "")
    }, S = [], J = function (U, W, V, X) {
        M = 1, S.push(W), clearTimeout(Q), Q = setTimeout(function () {
            M = 0;
            var Z = D.route.data.serialize(), Y = D.route.param(Z, !0);
            D.route._call("setURL", Y, S), D.batch.trigger(N, "__url", [Y, K]), K = Y, S = []
        }, 10)
    }, N = D.extend({}, D.event);
    D.route = function (g, j) {
        var W = D.route._call("root");
        W.lastIndexOf("/") === W.length - 1 && 0 === g.indexOf("/") && (g = g.substr(1)), j = j || {};
        for (var Y, X, U = [], Z = "", V = E.lastIndex = 0, b = D.route._call("querySeparator"), h = D.route._call("matchSlashes"); Y = E.exec(g);) {
            U.push(Y[1]), Z += A(g.substring(V, E.lastIndex - Y[0].length)), X = "\\" + (A(g.substr(E.lastIndex, 1)) || b + (h ? "" : "|/")), Z += "([^" + X + "]" + (j[Y[1]] ? "*" : "+") + ")", V = E.lastIndex
        }
        return Z += g.substr(V).replace("\\", ""), D.route.routes[g] = {
            test: new RegExp("^" + Z + "($|" + C(b) + ")"),
            route: g,
            names: U,
            defaults: j,
            length: g.split("/").length
        }, D.route
    }, R(D.route, {
        param: function (Z, c) {
            var W, Y, X = 0, U = Z.route, V = 0;
            if (delete Z.route, P(Z, function () {
                    V++
                }), P(D.route.routes, function (e, a) {
                    return Y = O(e, Z), Y > X && (W = e, X = Y), Y >= V ? !1 : void 0
                }), D.route.routes[U] && O(D.route.routes[U], Z) === X && (W = D.route.routes[U]), W) {
                var d, f = R({}, Z), b = W.route.replace(E, function (e, a) {
                    return delete f[a], Z[a] === W.defaults[a] ? "" : encodeURIComponent(Z[a])
                }).replace("\\", "");
                return P(W.defaults, function (a, g) {
                    f[g] === a && delete f[g]
                }), d = D.param(f), c && D.route.attr("route", W.route), b + (d ? D.route._call("querySeparator") + d : "")
            }
            return D.isEmptyObject(Z) ? "" : D.route._call("querySeparator") + D.param(Z)
        }, deparam: function (b) {
            var d = D.route._call("root");
            d.lastIndexOf("/") === d.length - 1 && 0 === b.indexOf("/") && (b = b.substr(1));
            var W = {length: -1}, Y = D.route._call("querySeparator"), f = D.route._call("paramsMatcher");
            if (P(D.route.routes, function (c, a) {
                    c.test.test(b) && c.length > W.length && (W = c)
                }), W.length > -1) {
                var X = b.match(W.test), U = X.shift(), Z = b.substr(U.length - (X[X.length - 1] === Y ? 1 : 0)), V = Z && f.test(Z) ? D.deparam(Z.slice(1)) : {};
                return V = R(!0, {}, W.defaults, V), P(X, function (a, c) {
                    a && a !== Y && (V[W.names[c]] = decodeURIComponent(a))
                }), V.route = W.route, V
            }
            return b.charAt(0) !== Y && (b = Y + b), f.test(b) ? D.deparam(b.slice(1)) : {}
        }, data: new D.Map({}), map: function (V) {
            var U;
            U = V.prototype instanceof D.Map ? new V : V, D.route.data = U
        }, routes: {}, ready: function (U) {
            return U !== !0 && (D.route._setup(), D.route.setState()), D.route
        }, url: function (V, U) {
            return U && (V = D.extend({}, D.route.deparam(D.route._call("matchingPartOfURL")), V)), D.route._call("root") + D.route.param(V)
        }, link: function (X, U, V, W) {
            return "<a " + H(R({href: D.route.url(U, W)}, V)) + ">" + X + "</a>"
        }, current: function (U) {
            return D.__reading(N, "__url"), this._call("matchingPartOfURL") === D.route.param(U)
        }, bindings: {
            hashchange: {
                paramsMatcher: L, querySeparator: "&", matchSlashes: !1, bind: function () {
                    D.bind.call(window, "hashchange", T)
                }, unbind: function () {
                    D.unbind.call(window, "hashchange", T)
                }, matchingPartOfURL: function () {
                    return I.href.split(/#!?/)[1] || ""
                }, setURL: function (U) {
                    return I.hash !== "#" + U && (I.hash = "!" + U), U
                }, root: "#!"
            }
        }, defaultBinding: "hashchange", currentBinding: null, _setup: function () {
            D.route.currentBinding || (D.route._call("bind"), D.route.bind("change", J), D.route.currentBinding = D.route.defaultBinding)
        }, _teardown: function () {
            D.route.currentBinding && (D.route._call("unbind"), D.route.unbind("change", J), D.route.currentBinding = null), clearTimeout(Q), M = 0
        }, _call: function () {
            var X = D.makeArray(arguments), U = X.shift(), V = D.route.bindings[D.route.currentBinding || D.route.defaultBinding], W = V[U];
            return W.apply ? W.apply(V, X) : W
        }
    }), P(["bind", "unbind", "on", "off", "delegate", "undelegate", "removeAttr", "compute", "_get", "__get", "each"], function (U) {
        D.route[U] = function () {
            return D.route.data[U] ? D.route.data[U].apply(D.route.data, arguments) : void 0
        }
    }), D.route.attr = function (X, U) {
        var V, W = typeof X;
        return V = void 0 === U ? arguments : "string" !== W && "number" !== W ? [G(X), U] : [X, G(U)], D.route.data.attr.apply(D.route.data, V)
    };
    var T = D.route.setState = function () {
        var V = D.route._call("matchingPartOfURL"), U = B;
        B = D.route.deparam(V), M && V === K || (D.batch.start(), F(U, B, D.route.data), D.route.attr(B), D.batch.trigger(N, "__url", [V, K]), D.batch.stop())
    }, F = function (W, X, U) {
        for (var V in W) {
            void 0 === X[V] ? U.removeAttr(V) : "[object Object]" === Object.prototype.toString.call(W[V]) && F(W[V], X[V], U.attr(V))
        }
    };
    return D.route
});
define("can/control/route/route", ["can/util/util", "can/route/route", "can/control/control"], function (A) {
    return A.Control.processors.route = function (D, B, E, C, H) {
        E = E || "", A.route.routes[E] || ("/" === E[0] && (E = E.substring(1)), A.route(E));
        var F, G = function (J, I, L) {
            if (A.route.attr("route") === E && (void 0 === J.batchNum || J.batchNum !== F)) {
                F = J.batchNum;
                var K = A.route.attr();
                delete K.route, A.isFunction(H[C]) ? H[C](K) : H[H[C]](K)
            }
        };
        return A.route.bind("change", G), function () {
            A.route.unbind("change", G)
        }
    }, A
});
define("can/route/pushstate/pushstate", ["can/util/util", "can/route/route"], function (G) {
    if (window.history && history.pushState) {
        G.route.bindings.pushstate = {
            root: "/",
            matchSlashes: !1,
            paramsMatcher: /^\?(?:[^=]+=[^&]*&)*[^=]+=[^&]*/,
            querySeparator: "?",
            bind: function () {
                G.delegate.call(G.$(document.documentElement), "a", "click", E), G.each(C, function (I) {
                    F[I] = window.history[I], window.history[I] = function (J, M, K) {
                        var N = 0 === K.indexOf("http"), L = window.location.search + window.location.hash;
                        (!N && K !== window.location.pathname + L || N && K !== window.location.href + L) && (F[I].apply(window.history, arguments), G.route.setState())
                    }
                }), G.bind.call(window, "popstate", G.route.setState)
            },
            unbind: function () {
                G.undelegate.call(G.$(document.documentElement), "click", "a", E), G.each(C, function (I) {
                    window.history[I] = F[I]
                }), G.unbind.call(window, "popstate", G.route.setState)
            },
            matchingPartOfURL: function () {
                var I = B(), K = location.pathname + location.search, J = K.indexOf(I);
                return K.substr(J + I.length)
            },
            setURL: function (M, J) {
                var K = "pushState";
                if (A && -1 === M.indexOf("#") && window.location.hash && (M += window.location.hash), H.length > 0) {
                    for (var I = [], L = 0, N = J.length; N > L; L++) {
                        -1 !== G.inArray(J[L], H) && (K = "replaceState"), -1 !== G.inArray(J[L], H.once) && I.push(J[L])
                    }
                    I.length > 0 && (D(H, I), D(H.once, I))
                }
                window.history[K](null, null, G.route._call("root") + M)
            }
        };
        var E = function (N) {
            if (!(N.isDefaultPrevented ? N.isDefaultPrevented() : N.defaultPrevented === !0)) {
                var L = this._node || this, J = L.host || window.location.host;
                if (window.location.host === J) {
                    var I = B();
                    if (0 === L.pathname.indexOf(I)) {
                        var K = (L.pathname + L.search).substr(I.length), M = G.route.deparam(K);
                        M.hasOwnProperty("route") && (A = !0, window.history.pushState(null, null, L.href), N.preventDefault && N.preventDefault())
                    }
                }
            }
        }, B = function () {
            var K = location.protocol + "//" + location.host, I = G.route._call("root"), J = I.indexOf(K);
            return 0 === J ? I.substr(K.length) : I
        }, D = function (L, I) {
            for (var K, J = I.length - 1; J >= 0; J--) {
                -1 !== (K = G.inArray(I[J], L)) && L.splice(K, 1)
            }
        }, C = ["pushState", "replaceState"], F = {}, A = !1, H = [];
        G.route.defaultBinding = "pushstate", G.extend(G.route, {
            replaceStateOn: function () {
                var I = G.makeArray(arguments);
                Array.prototype.push.apply(H, I)
            }, replaceStateOnce: function () {
                var I = G.makeArray(arguments);
                H.once = G.makeArray(H.once), Array.prototype.push.apply(H.once, I), G.route.replaceStateOn.apply(this, arguments)
            }, replaceStateOff: function () {
                var I = G.makeArray(arguments);
                D(H, I)
            }
        })
    }
    return G
});
!function () {
    window._define = window.define, window.define = window.define.orig
}();
/**
 * Created by team on 16/2/23.
 */
/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
!function (a, b, c, d) {
    "use strict";
    function e(a, b, c) {
        return setTimeout(k(a, c), b)
    }

    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
    }

    function g(a, b, c) {
        var e;
        if (a)if (a.forEach)a.forEach(b, c); else if (a.length !== d)for (e = 0; e < a.length;)b.call(c, a[e], e, a), e++; else for (e in a)a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }

    function h(a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
        return a
    }

    function i(a, b) {
        return h(a, b, !0)
    }

    function j(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && h(d, c)
    }

    function k(a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }

    function l(a, b) {
        return typeof a == kb ? a.apply(b ? b[0] || d : d, b) : a
    }

    function m(a, b) {
        return a === d ? b : a
    }

    function n(a, b, c) {
        g(r(b), function (b) {
            a.addEventListener(b, c, !1)
        })
    }

    function o(a, b, c) {
        g(r(b), function (b) {
            a.removeEventListener(b, c, !1)
        })
    }

    function p(a, b) {
        for (; a;) {
            if (a == b)return !0;
            a = a.parentNode
        }
        return !1
    }

    function q(a, b) {
        return a.indexOf(b) > -1
    }

    function r(a) {
        return a.trim().split(/\s+/g)
    }

    function s(a, b, c) {
        if (a.indexOf && !c)return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b)return d;
            d++
        }
        return -1
    }

    function t(a) {
        return Array.prototype.slice.call(a, 0)
    }

    function u(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];
            s(e, g) < 0 && d.push(a[f]), e[f] = g, f++
        }
        return c && (d = b ? d.sort(function (a, c) {
            return a[b] > c[b]
        }) : d.sort()), d
    }

    function v(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ib.length;) {
            if (c = ib[g], e = c ? c + f : b, e in a)return e;
            g++
        }
        return d
    }

    function w() {
        return ob++
    }

    function x(a) {
        var b = a.ownerDocument;
        return b.defaultView || b.parentWindow
    }

    function y(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
            l(a.options.enable, [a]) && c.handler(b)
        }, this.init()
    }

    function z(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : rb ? N : sb ? Q : qb ? S : M)(a, A)
    }

    function A(a, b, c) {
        var d = c.pointers.length, e = c.changedPointers.length, f = b & yb && d - e === 0, g = b & (Ab | Bb) && d - e === 0;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, B(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }

    function B(a, b) {
        var c = a.session, d = b.pointers, e = d.length;
        c.firstInput || (c.firstInput = E(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = E(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput, g = c.firstMultiple, h = g ? g.center : f.center, i = b.center = F(d);
        b.timeStamp = nb(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = J(h, i), b.distance = I(h, i), C(c, b), b.offsetDirection = H(b.deltaX, b.deltaY), b.scale = g ? L(g.pointers, d) : 1, b.rotation = g ? K(g.pointers, d) : 0, D(c, b);
        var j = a.element;
        p(b.srcEvent.target, j) && (j = b.srcEvent.target), b.target = j
    }

    function C(a, b) {
        var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {};
        (b.eventType === yb || f.eventType === Ab) && (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {x: c.x, y: c.y}), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }

    function D(a, b) {
        var c, e, f, g, h = a.lastInterval || b, i = b.timeStamp - h.timeStamp;
        if (b.eventType != Bb && (i > xb || h.velocity === d)) {
            var j = h.deltaX - b.deltaX, k = h.deltaY - b.deltaY, l = G(i, j, k);
            e = l.x, f = l.y, c = mb(l.x) > mb(l.y) ? l.x : l.y, g = H(j, k), a.lastInterval = b
        } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
    }

    function E(a) {
        for (var b = [], c = 0; c < a.pointers.length;)b[c] = {
            clientX: lb(a.pointers[c].clientX),
            clientY: lb(a.pointers[c].clientY)
        }, c++;
        return {timeStamp: nb(), pointers: b, center: F(b), deltaX: a.deltaX, deltaY: a.deltaY}
    }

    function F(a) {
        var b = a.length;
        if (1 === b)return {x: lb(a[0].clientX), y: lb(a[0].clientY)};
        for (var c = 0, d = 0, e = 0; b > e;)c += a[e].clientX, d += a[e].clientY, e++;
        return {x: lb(c / b), y: lb(d / b)}
    }

    function G(a, b, c) {
        return {x: b / a || 0, y: c / a || 0}
    }

    function H(a, b) {
        return a === b ? Cb : mb(a) >= mb(b) ? a > 0 ? Db : Eb : b > 0 ? Fb : Gb
    }

    function I(a, b, c) {
        c || (c = Kb);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }

    function J(a, b, c) {
        c || (c = Kb);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }

    function K(a, b) {
        return J(b[1], b[0], Lb) - J(a[1], a[0], Lb)
    }

    function L(a, b) {
        return I(b[0], b[1], Lb) / I(a[0], a[1], Lb)
    }

    function M() {
        this.evEl = Nb, this.evWin = Ob, this.allow = !0, this.pressed = !1, y.apply(this, arguments)
    }

    function N() {
        this.evEl = Rb, this.evWin = Sb, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function O() {
        this.evTarget = Ub, this.evWin = Vb, this.started = !1, y.apply(this, arguments)
    }

    function P(a, b) {
        var c = t(a.touches), d = t(a.changedTouches);
        return b & (Ab | Bb) && (c = u(c.concat(d), "identifier", !0)), [c, d]
    }

    function Q() {
        this.evTarget = Xb, this.targetIds = {}, y.apply(this, arguments)
    }

    function R(a, b) {
        var c = t(a.touches), d = this.targetIds;
        if (b & (yb | zb) && 1 === c.length)return d[c[0].identifier] = !0, [c, c];
        var e, f, g = t(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function (a) {
                return p(a.target, i)
            }), b === yb)for (e = 0; e < f.length;)d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length;)d[g[e].identifier] && h.push(g[e]), b & (Ab | Bb) && delete d[g[e].identifier], e++;
        return h.length ? [u(f.concat(h), "identifier", !0), h] : void 0
    }

    function S() {
        y.apply(this, arguments);
        var a = k(this.handler, this);
        this.touch = new Q(this.manager, a), this.mouse = new M(this.manager, a)
    }

    function T(a, b) {
        this.manager = a, this.set(b)
    }

    function U(a) {
        if (q(a, bc))return bc;
        var b = q(a, cc), c = q(a, dc);
        return b && c ? cc + " " + dc : b || c ? b ? cc : dc : q(a, ac) ? ac : _b
    }

    function V(a) {
        this.id = w(), this.manager = null, this.options = i(a || {}, this.defaults), this.options.enable = m(this.options.enable, !0), this.state = ec, this.simultaneous = {}, this.requireFail = []
    }

    function W(a) {
        return a & jc ? "cancel" : a & hc ? "end" : a & gc ? "move" : a & fc ? "start" : ""
    }

    function X(a) {
        return a == Gb ? "down" : a == Fb ? "up" : a == Db ? "left" : a == Eb ? "right" : ""
    }

    function Y(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }

    function Z() {
        V.apply(this, arguments)
    }

    function $() {
        Z.apply(this, arguments), this.pX = null, this.pY = null
    }

    function _() {
        Z.apply(this, arguments)
    }

    function ab() {
        V.apply(this, arguments), this._timer = null, this._input = null
    }

    function bb() {
        Z.apply(this, arguments)
    }

    function cb() {
        Z.apply(this, arguments)
    }

    function db() {
        V.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function eb(a, b) {
        return b = b || {}, b.recognizers = m(b.recognizers, eb.defaults.preset), new fb(a, b)
    }

    function fb(a, b) {
        b = b || {}, this.options = i(b, eb.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = z(this), this.touchAction = new T(this, this.options.touchAction), gb(this, !0), g(b.recognizers, function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
        }, this)
    }

    function gb(a, b) {
        var c = a.element;
        g(a.options.cssProps, function (a, d) {
            c.style[v(c.style, d)] = b ? a : ""
        })
    }

    function hb(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }

    var ib = ["", "webkit", "moz", "MS", "ms", "o"], jb = b.createElement("div"), kb = "function", lb = Math.round, mb = Math.abs, nb = Date.now, ob = 1, pb = /mobile|tablet|ip(ad|hone|od)|android/i, qb = "ontouchstart"in a, rb = v(a, "PointerEvent") !== d, sb = qb && pb.test(navigator.userAgent), tb = "touch", ub = "pen", vb = "mouse", wb = "kinect", xb = 25, yb = 1, zb = 2, Ab = 4, Bb = 8, Cb = 1, Db = 2, Eb = 4, Fb = 8, Gb = 16, Hb = Db | Eb, Ib = Fb | Gb, Jb = Hb | Ib, Kb = ["x", "y"], Lb = ["clientX", "clientY"];
    y.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(x(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
            this.evEl && o(this.element, this.evEl, this.domHandler), this.evTarget && o(this.target, this.evTarget, this.domHandler), this.evWin && o(x(this.element), this.evWin, this.domHandler)
        }
    };
    var Mb = {mousedown: yb, mousemove: zb, mouseup: Ab}, Nb = "mousedown", Ob = "mousemove mouseup";
    j(M, y, {
        handler: function (a) {
            var b = Mb[a.type];
            b & yb && 0 === a.button && (this.pressed = !0), b & zb && 1 !== a.which && (b = Ab), this.pressed && this.allow && (b & Ab && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: vb,
                srcEvent: a
            }))
        }
    });
    var Pb = {pointerdown: yb, pointermove: zb, pointerup: Ab, pointercancel: Bb, pointerout: Bb}, Qb = {
        2: tb,
        3: ub,
        4: vb,
        5: wb
    }, Rb = "pointerdown", Sb = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (Rb = "MSPointerDown", Sb = "MSPointerMove MSPointerUp MSPointerCancel"), j(N, y, {
        handler: function (a) {
            var b = this.store, c = !1, d = a.type.toLowerCase().replace("ms", ""), e = Pb[d], f = Qb[a.pointerType] || a.pointerType, g = f == tb, h = s(b, a.pointerId, "pointerId");
            e & yb && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ab | Bb) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1))
        }
    });
    var Tb = {
        touchstart: yb,
        touchmove: zb,
        touchend: Ab,
        touchcancel: Bb
    }, Ub = "touchstart", Vb = "touchstart touchmove touchend touchcancel";
    j(O, y, {
        handler: function (a) {
            var b = Tb[a.type];
            if (b === yb && (this.started = !0), this.started) {
                var c = P.call(this, a, b);
                b & (Ab | Bb) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: tb,
                    srcEvent: a
                })
            }
        }
    });
    var Wb = {
        touchstart: yb,
        touchmove: zb,
        touchend: Ab,
        touchcancel: Bb
    }, Xb = "touchstart touchmove touchend touchcancel";
    j(Q, y, {
        handler: function (a) {
            var b = Wb[a.type], c = R.call(this, a, b);
            c && this.callback(this.manager, b, {pointers: c[0], changedPointers: c[1], pointerType: tb, srcEvent: a})
        }
    }), j(S, y, {
        handler: function (a, b, c) {
            var d = c.pointerType == tb, e = c.pointerType == vb;
            if (d)this.mouse.allow = !1; else if (e && !this.mouse.allow)return;
            b & (Ab | Bb) && (this.mouse.allow = !0), this.callback(a, b, c)
        }, destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Yb = v(jb.style, "touchAction"), Zb = Yb !== d, $b = "compute", _b = "auto", ac = "manipulation", bc = "none", cc = "pan-x", dc = "pan-y";
    T.prototype = {
        set: function (a) {
            a == $b && (a = this.compute()), Zb && (this.manager.element.style[Yb] = a), this.actions = a.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var a = [];
            return g(this.manager.recognizers, function (b) {
                l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }), U(a.join(" "))
        }, preventDefaults: function (a) {
            if (!Zb) {
                var b = a.srcEvent, c = a.offsetDirection;
                if (this.manager.session.prevented)return void b.preventDefault();
                var d = this.actions, e = q(d, bc), f = q(d, dc), g = q(d, cc);
                return e || f && c & Hb || g && c & Ib ? this.preventSrc(b) : void 0
            }
        }, preventSrc: function (a) {
            this.manager.session.prevented = !0, a.preventDefault()
        }
    };
    var ec = 1, fc = 2, gc = 4, hc = 8, ic = hc, jc = 16, kc = 32;
    V.prototype = {
        defaults: {}, set: function (a) {
            return h(this.options, a), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (a) {
            if (f(a, "recognizeWith", this))return this;
            var b = this.simultaneous;
            return a = Y(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
        }, dropRecognizeWith: function (a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = Y(a, this), delete this.simultaneous[a.id], this)
        }, requireFailure: function (a) {
            if (f(a, "requireFailure", this))return this;
            var b = this.requireFail;
            return a = Y(a, this), -1 === s(b, a) && (b.push(a), a.requireFailure(this)), this
        }, dropRequireFailure: function (a) {
            if (f(a, "dropRequireFailure", this))return this;
            a = Y(a, this);
            var b = s(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this
        }, hasRequireFailures: function () {
            return this.requireFail.length > 0
        }, canRecognizeWith: function (a) {
            return !!this.simultaneous[a.id]
        }, emit: function (a) {
            function b(b) {
                c.manager.emit(c.options.event + (b ? W(d) : ""), a)
            }

            var c = this, d = this.state;
            hc > d && b(!0), b(), d >= hc && b(!0)
        }, tryEmit: function (a) {
            return this.canEmit() ? this.emit(a) : void(this.state = kc)
        }, canEmit: function () {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (kc | ec)))return !1;
                a++
            }
            return !0
        }, recognize: function (a) {
            var b = h({}, a);
            return l(this.options.enable, [this, b]) ? (this.state & (ic | jc | kc) && (this.state = ec), this.state = this.process(b), void(this.state & (fc | gc | hc | jc) && this.tryEmit(b))) : (this.reset(), void(this.state = kc))
        }, process: function () {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    }, j(Z, V, {
        defaults: {pointers: 1}, attrTest: function (a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        }, process: function (a) {
            var b = this.state, c = a.eventType, d = b & (fc | gc), e = this.attrTest(a);
            return d && (c & Bb || !e) ? b | jc : d || e ? c & Ab ? b | hc : b & fc ? b | gc : fc : kc
        }
    }), j($, Z, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: Jb}, getTouchAction: function () {
            var a = this.options.direction, b = [];
            return a & Hb && b.push(dc), a & Ib && b.push(cc), b
        }, directionTest: function (a) {
            var b = this.options, c = !0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY;
            return e & b.direction || (b.direction & Hb ? (e = 0 === f ? Cb : 0 > f ? Db : Eb, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Cb : 0 > g ? Fb : Gb, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
        }, attrTest: function (a) {
            return Z.prototype.attrTest.call(this, a) && (this.state & fc || !(this.state & fc) && this.directionTest(a))
        }, emit: function (a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = X(a.direction);
            b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a)
        }
    }), j(_, Z, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [bc]
        }, attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & fc)
        }, emit: function (a) {
            if (this._super.emit.call(this, a), 1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + b, a)
            }
        }
    }), j(ab, V, {
        defaults: {event: "press", pointers: 1, time: 500, threshold: 5}, getTouchAction: function () {
            return [_b]
        }, process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Ab | Bb) && !f)this.reset(); else if (a.eventType & yb)this.reset(), this._timer = e(function () {
                this.state = ic, this.tryEmit()
            }, b.time, this); else if (a.eventType & Ab)return ic;
            return kc
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (a) {
            this.state === ic && (a && a.eventType & Ab ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = nb(), this.manager.emit(this.options.event, this._input)))
        }
    }), j(bb, Z, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [bc]
        }, attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & fc)
        }
    }), j(cb, Z, {
        defaults: {event: "swipe", threshold: 10, velocity: .65, direction: Hb | Ib, pointers: 1},
        getTouchAction: function () {
            return $.prototype.getTouchAction.call(this)
        },
        attrTest: function (a) {
            var b, c = this.options.direction;
            return c & (Hb | Ib) ? b = a.velocity : c & Hb ? b = a.velocityX : c & Ib && (b = a.velocityY), this._super.attrTest.call(this, a) && c & a.direction && a.distance > this.options.threshold && mb(b) > this.options.velocity && a.eventType & Ab
        },
        emit: function (a) {
            var b = X(a.direction);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
        }
    }), j(db, V, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        }, getTouchAction: function () {
            return [ac]
        }, process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & yb && 0 === this.count)return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ab)return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0, h = !this.pCenter || I(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                var i = this.count % b.taps;
                if (0 === i)return this.hasRequireFailures() ? (this._timer = e(function () {
                    this.state = ic, this.tryEmit()
                }, b.interval, this), fc) : ic
            }
            return kc
        }, failTimeout: function () {
            return this._timer = e(function () {
                this.state = kc
            }, this.options.interval, this), kc
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function () {
            this.state == ic && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), eb.VERSION = "2.0.4", eb.defaults = {
        domEvents: !1,
        touchAction: $b,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[bb, {enable: !1}], [_, {enable: !1}, ["rotate"]], [cb, {direction: Hb}], [$, {direction: Hb}, ["swipe"]], [db], [db, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [ab]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var lc = 1, mc = 2;
    fb.prototype = {
        set: function (a) {
            return h(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
        }, stop: function (a) {
            this.session.stopped = a ? mc : lc
        }, recognize: function (a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & ic) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;)c = d[f], b.stopped === mc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (fc | gc | hc) && (e = b.curRecognizer = c), f++
            }
        }, get: function (a) {
            if (a instanceof V)return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)if (b[c].options.event == a)return b[c];
            return null
        }, add: function (a) {
            if (f(a, "add", this))return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
        }, remove: function (a) {
            if (f(a, "remove", this))return this;
            var b = this.recognizers;
            return a = this.get(a), b.splice(s(b, a), 1), this.touchAction.update(), this
        }, on: function (a, b) {
            var c = this.handlers;
            return g(r(a), function (a) {
                c[a] = c[a] || [], c[a].push(b)
            }), this
        }, off: function (a, b) {
            var c = this.handlers;
            return g(r(a), function (a) {
                b ? c[a].splice(s(c[a], b), 1) : delete c[a]
            }), this
        }, emit: function (a, b) {
            this.options.domEvents && hb(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function () {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;)c[d](b), d++
            }
        }, destroy: function () {
            this.element && gb(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, h(eb, {
        INPUT_START: yb,
        INPUT_MOVE: zb,
        INPUT_END: Ab,
        INPUT_CANCEL: Bb,
        STATE_POSSIBLE: ec,
        STATE_BEGAN: fc,
        STATE_CHANGED: gc,
        STATE_ENDED: hc,
        STATE_RECOGNIZED: ic,
        STATE_CANCELLED: jc,
        STATE_FAILED: kc,
        DIRECTION_NONE: Cb,
        DIRECTION_LEFT: Db,
        DIRECTION_RIGHT: Eb,
        DIRECTION_UP: Fb,
        DIRECTION_DOWN: Gb,
        DIRECTION_HORIZONTAL: Hb,
        DIRECTION_VERTICAL: Ib,
        DIRECTION_ALL: Jb,
        Manager: fb,
        Input: y,
        TouchAction: T,
        TouchInput: Q,
        MouseInput: M,
        PointerEventInput: N,
        TouchMouseInput: S,
        SingleTouchInput: O,
        Recognizer: V,
        AttrRecognizer: Z,
        Tap: db,
        Pan: $,
        Swipe: cb,
        Pinch: _,
        Rotate: bb,
        Press: ab,
        on: n,
        off: o,
        each: g,
        merge: i,
        extend: h,
        inherit: j,
        bindFn: k,
        prefixed: v
    }), typeof define == kb && define.amd ? define(function () {
        return eb
    }) : "undefined" != typeof module && module.exports ? module.exports = eb : a[c] = eb
}(window, document, "Hammer");
//# sourceMappingURL=hammer.min.map
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
/**
 * Created by team on 16/2/23.
 */
(function () {
    "use strict";
    function e(t, r) {
        var i;
        r = r || {};
        this.trackingClick = false;
        this.trackingClickStart = 0;
        this.targetElement = null;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.lastTouchIdentifier = 0;
        this.touchBoundary = r.touchBoundary || 10;
        this.layer = t;
        this.tapDelay = r.tapDelay || 200;
        this.tapTimeout = r.tapTimeout || 700;
        if (e.notNeeded(t)) {
            return
        }
        function o(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }

        var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"];
        var s = this;
        for (var u = 0, c = a.length; u < c; u++) {
            s[a[u]] = o(s[a[u]], s)
        }
        if (n) {
            t.addEventListener("mouseover", this.onMouse, true);
            t.addEventListener("mousedown", this.onMouse, true);
            t.addEventListener("mouseup", this.onMouse, true)
        }
        t.addEventListener("click", this.onClick, true);
        t.addEventListener("touchstart", this.onTouchStart, false);
        t.addEventListener("touchmove", this.onTouchMove, false);
        t.addEventListener("touchend", this.onTouchEnd, false);
        t.addEventListener("touchcancel", this.onTouchCancel, false);
        if (!Event.prototype.stopImmediatePropagation) {
            t.removeEventListener = function (e, n, r) {
                var i = Node.prototype.removeEventListener;
                if (e === "click") {
                    i.call(t, e, n.hijacked || n, r)
                } else {
                    i.call(t, e, n, r)
                }
            };
            t.addEventListener = function (e, n, r) {
                var i = Node.prototype.addEventListener;
                if (e === "click") {
                    i.call(t, e, n.hijacked || (n.hijacked = function (e) {
                            if (!e.propagationStopped) {
                                n(e)
                            }
                        }), r)
                } else {
                    i.call(t, e, n, r)
                }
            }
        }
        if (typeof t.onclick === "function") {
            i = t.onclick;
            t.addEventListener("click", function (e) {
                i(e)
            }, false);
            t.onclick = null
        }
    }

    var t = navigator.userAgent.indexOf("Windows Phone") >= 0;
    var n = navigator.userAgent.indexOf("Android") > 0 && !t;
    var r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t;
    var i = r && /OS 4_\d(_\d)?/.test(navigator.userAgent);
    var o = r && /OS [6-7]_\d/.test(navigator.userAgent);
    var a = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function (e) {
        switch (e.nodeName.toLowerCase()) {
            case"button":
            case"select":
            case"textarea":
                if (e.disabled) {
                    return true
                }
                break;
            case"input":
                if (r && e.type === "file" || e.disabled) {
                    return true
                }
                break;
            case"label":
            case"iframe":
            case"video":
                return true
        }
        return /\bneedsclick\b/.test(e.className)
    };
    e.prototype.needsFocus = function (e) {
        switch (e.nodeName.toLowerCase()) {
            case"textarea":
                return true;
            case"select":
                return !n;
            case"input":
                switch (e.type) {
                    case"button":
                    case"checkbox":
                    case"file":
                    case"image":
                    case"radio":
                    case"submit":
                        return false
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    };
    e.prototype.sendClick = function (e, t) {
        var n, r;
        if (document.activeElement && document.activeElement !== e) {
            document.activeElement.blur()
        }
        r = t.changedTouches[0];
        n = document.createEvent("MouseEvents");
        n.initMouseEvent(this.determineEventType(e), true, true, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, false, false, false, false, 0, null);
        n.forwardedTouchEvent = true;
        e.dispatchEvent(n)
    };
    e.prototype.determineEventType = function (e) {
        if (n && e.tagName.toLowerCase() === "select") {
            return "mousedown"
        }
        return "click"
    };
    e.prototype.focus = function (e) {
        var t;
        if (r && e.setSelectionRange && e.type.indexOf("date") !== 0 && e.type !== "time" && e.type !== "month") {
            t = e.value.length;
            e.setSelectionRange(t, t)
        } else {
            e.focus()
        }
    };
    e.prototype.updateScrollParent = function (e) {
        var t, n;
        t = e.fastClickScrollParent;
        if (!t || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n;
                    e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        if (t) {
            t.fastClickLastScrollTop = t.scrollTop
        }
    };
    e.prototype.getTargetElementFromEventTarget = function (e) {
        if (e.nodeType === Node.TEXT_NODE) {
            return e.parentNode
        }
        return e
    };
    e.prototype.onTouchStart = function (e) {
        var t, n, o;
        if (e.targetTouches.length > 1) {
            return true
        }
        t = this.getTargetElementFromEventTarget(e.target);
        n = e.targetTouches[0];
        if (r) {
            o = window.getSelection();
            if (o.rangeCount && !o.isCollapsed) {
                return true
            }
            if (!i) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) {
                    e.preventDefault();
                    return false
                }
                this.lastTouchIdentifier = n.identifier;
                this.updateScrollParent(t)
            }
        }
        this.trackingClick = true;
        this.trackingClickStart = e.timeStamp;
        this.targetElement = t;
        this.touchStartX = n.pageX;
        this.touchStartY = n.pageY;
        if (e.timeStamp - this.lastClickTime < this.tapDelay) {
            e.preventDefault()
        }
        return true
    };
    e.prototype.touchHasMoved = function (e) {
        var t = e.changedTouches[0], n = this.touchBoundary;
        if (Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n) {
            return true
        }
        return false
    };
    e.prototype.onTouchMove = function (e) {
        if (!this.trackingClick) {
            return true
        }
        if (this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) {
            this.trackingClick = false;
            this.targetElement = null
        }
        return true
    };
    e.prototype.findControl = function (e) {
        if (e.control !== undefined) {
            return e.control
        }
        if (e.htmlFor) {
            return document.getElementById(e.htmlFor)
        }
        return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    };
    e.prototype.onTouchEnd = function (e) {
        var t, a, s, u, c, l = this.targetElement;
        if (!this.trackingClick) {
            return true
        }
        if (e.timeStamp - this.lastClickTime < this.tapDelay) {
            this.cancelNextClick = true;
            return true
        }
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout) {
            return true
        }
        this.cancelNextClick = false;
        this.lastClickTime = e.timeStamp;
        a = this.trackingClickStart;
        this.trackingClick = false;
        this.trackingClickStart = 0;
        if (o) {
            c = e.changedTouches[0];
            l = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || l;
            l.fastClickScrollParent = this.targetElement.fastClickScrollParent
        }
        s = l.tagName.toLowerCase();
        if (s === "label") {
            t = this.findControl(l);
            if (t) {
                this.focus(l);
                if (n) {
                    return false
                }
                l = t
            }
        } else if (this.needsFocus(l)) {
            if (e.timeStamp - a > 100 || r && window.top !== window && s === "input") {
                this.targetElement = null;
                return false
            }
            this.focus(l);
            this.sendClick(l, e);
            if (!r || s !== "select") {
                this.targetElement = null;
                e.preventDefault()
            }
            return false
        }
        if (r && !i) {
            u = l.fastClickScrollParent;
            if (u && u.fastClickLastScrollTop !== u.scrollTop) {
                return true
            }
        }
        if (!this.needsClick(l)) {
            e.preventDefault();
            this.sendClick(l, e)
        }
        return false
    };
    e.prototype.onTouchCancel = function () {
        this.trackingClick = false;
        this.targetElement = null
    };
    e.prototype.onMouse = function (e) {
        if (!this.targetElement) {
            return true
        }
        if (e.forwardedTouchEvent) {
            return true
        }
        if (!e.cancelable) {
            return true
        }
        if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
            if (e.stopImmediatePropagation) {
                e.stopImmediatePropagation()
            } else {
                e.propagationStopped = true
            }
            e.stopPropagation();
            e.preventDefault();
            return false
        }
        return true
    };
    e.prototype.onClick = function (e) {
        var t;
        if (this.trackingClick) {
            this.targetElement = null;
            this.trackingClick = false;
            return true
        }
        if (e.target.type === "submit" && e.detail === 0) {
            return true
        }
        t = this.onMouse(e);
        if (!t) {
            this.targetElement = null
        }
        return t
    };
    e.prototype.destroy = function () {
        var e = this.layer;
        if (n) {
            e.removeEventListener("mouseover", this.onMouse, true);
            e.removeEventListener("mousedown", this.onMouse, true);
            e.removeEventListener("mouseup", this.onMouse, true)
        }
        e.removeEventListener("click", this.onClick, true);
        e.removeEventListener("touchstart", this.onTouchStart, false);
        e.removeEventListener("touchmove", this.onTouchMove, false);
        e.removeEventListener("touchend", this.onTouchEnd, false);
        e.removeEventListener("touchcancel", this.onTouchCancel, false)
    };
    e.notNeeded = function (e) {
        var t;
        var r;
        var i;
        var o;
        if (typeof window.ontouchstart === "undefined") {
            return true
        }
        r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (r) {
            if (n) {
                t = document.querySelector("meta[name=viewport]");
                if (t) {
                    if (t.content.indexOf("user-scalable=no") !== -1) {
                        return true
                    }
                    if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
                        return true
                    }
                }
            } else {
                return true
            }
        }
        if (a) {
            i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
            if (i[1] >= 10 && i[2] >= 3) {
                t = document.querySelector("meta[name=viewport]");
                if (t) {
                    if (t.content.indexOf("user-scalable=no") !== -1) {
                        return true
                    }
                    if (document.documentElement.scrollWidth <= window.outerWidth) {
                        return true
                    }
                }
            }
        }
        if (e.style.msTouchAction === "none" || e.style.touchAction === "manipulation") {
            return true
        }
        o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (o >= 27) {
            t = document.querySelector("meta[name=viewport]");
            if (t && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
                return true
            }
        }
        if (e.style.touchAction === "none" || e.style.touchAction === "manipulation") {
            return true
        }
        return false
    };
    e.attach = function (t, n) {
        return new e(t, n)
    };
    if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define(function () {
            return e
        })
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = e.attach;
        module.exports.FastClick = e
    } else {
        window.FastClick = e
    }
})();