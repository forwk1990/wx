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
