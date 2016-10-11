/**
 * Created by team on 16/2/25.
 */

define([], function () {
    var util = {
        currCity: null,
        defultCity: {
            name: "武汉",
            citycode: "14"
        },
        localExpireTimeInMS: 30 * 24 * 60 * 60 * 1000,
        localTempOrders: null,
        orderInfo: null,
        searchKey: "",
        sysTime: 0,
        getLocalItem: function (key) {
            var itemJsonValue = localStorage[key];
            if (!itemJsonValue) {
                return null
            }
            var itemObject = null;
            try {
                itemObject = JSON.parse(itemJsonValue)
            } catch (ex) {
                delete localStorage[key]
            }
            if (!itemObject) {
                return null
            }
            if ((new Date().getTime() - itemObject.t) > this.localExpireTimeInMS) {
                delete localStorage[key];
                return null
            }
            return itemObject.d
        },
        setLocalItem: function (key, value) {
            var item = {d: value, t: (new Date()).getTime()};
            localStorage[key] = JSON.stringify(item)
        },
        removeLocalItem: function (B) {
            localStorage.removeItem(B)
        },
        sessionExpireTimeInMS: 30 * 60 * 1000,
        getSessionItem: function (B) {
            var D = sessionStorage[B];
            if (!D) {
                return null
            }
            var E = null;
            try {
                E = JSON.parse(D)
            } catch (C) {
                delete sessionStorage[B]
            }
            if (!E) {
                return null
            }
            if ((new Date().getTime() - E.t) > this.sessionExpireTimeInMS) {
                delete sessionStorage[B];
                return null
            }
            return E.d
        },
        setSessionItem: function (C, B) {
            var D = {d: B, t: (new Date()).getTime()};
            sessionStorage[C] = JSON.stringify(D)
        },
        removeSessionItem: function (itemKey) {
            sessionStorage.removeItem(itemKey);
        },
        getLocateCity: function () {
            return this.getSessionItem("preorder.wap.locateCity")
        },
        saveLocateCity: function (B) {
            this.setSessionItem("preorder.wap.locateCity", B)
        },
        saveCurrCity: function (B) {
            this.setSessionItem("preorder.wap.currCity", B);
            this.currCity = B
        },
        getCurrCity: function () {
            if (!this.currCity) {
                this.currCity = this.getSessionItem("preorder.wap.currCity");
                if (!this.currCity) {
                    return this.defultCity
                }
            }
            return this.currCity;
        },
        saveCurrentStore: function (B) {
            this.setSessionItem("preorder.wap.currentStore", B);
            this.currentStore = B
        },
        getCurrentStore: function () {
            if (!this.currentStore) {
                this.currentStore = this.getSessionItem("preorder.wap.currentStore")
            }
            return this.currentStore
        },
        saveCustomerInfo: function (B) {
            this.setSessionItem("preorder.wap.customerInfo", B);
            this.customerInfo = B
        },
        getCustomerInfo: function () {
            if (!this.customerInfo) {
                this.customerInfo = this.getSessionItem("preorder.wap.customerInfo")
            }
            return this.customerInfo
        },
        clearCustomerInfo: function () {
            this.customerInfo = null;
            this.removeSessionItem("preorder.wap.customerInfo")
        },
        removeOrderInfo: function () {
            this.removeSessionItem("preorder.wap.orderInfo");
            this.orderInfo = null;
        },
        saveOrderInfo: function (B) {
            this.setSessionItem("preorder.wap.orderInfo", B);
            this.orderInfo = B
        },
        getOrderInfo: function () {
            if (!this.orderInfo) {
                this.orderInfo = this.getSessionItem("preorder.wap.orderInfo")
            }
            return this.orderInfo;
        },
        getLocalTempOrders: function () {
            if (!this.localTempOrders) {
                return localTempOrders = this.getSessionItem("preorder.wap.localTempOrders")
            }
            return this.localTempOrders
        },
        updateLocalTempOrders: function (model, isAdd) {
            var foodKey = model.topType + "_" + model.systemId;
            var localTempOrders = this.getLocalTempOrders();
            if (!localTempOrders) {
                localTempOrders = {}
            }
            var localFoodObject = localTempOrders[foodKey];
            if (localFoodObject) {
                var quantity = isAdd ? localFoodObject.quantity + 1 : localFoodObject.quantity - 1;
                localTempOrders[foodKey].quantity = quantity;
                if (quantity == 0) {
                    delete localTempOrders[foodKey]
                }
            } else {
                localTempOrders[foodKey] = {quantity: (isAdd ? 1 : -1), price: model.foodPrice}
            }
            this.localTempOrders = localTempOrders;
            this.setSessionItem("preorder.wap.localTempOrders", localTempOrders)
        },
        removeLocalTempOrders: function () {
            this.localTempOrders = null;
            this.removeSessionItem("preorder.wap.localTempOrders")
        },
        getView: function (templateName) {
            return "../templates/" + templateName
        },
        getQueryStringValue: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return unescape(r[2])
            }
            return null
        },
        setQueryString: function (parameters) {
            var queryString = "?";
            for (var parameterName in parameters) {
                queryString += encodeURIComponent(parameterName) + '=' + encodeURIComponent(parameters[parameterName]) + '&';
            }
            return queryString.substr(0, queryString.length - 1);
        },
        randomOfNumber: function (number) {
            number = number < 0 || number >= 6 ? 4 : number;
            var code = "";
            for (var i = 0; i < number; i++) {
                code += Math.floor(Math.random() * 10);
            }
            return code;
        },
        startWith: function (F, E) {
            if (F == null || F == "" || F.length == 0) {
                return false
            }
            if (E == null || E == "" || E.length > F.length) {
                return false
            }
            if (F.substr(0, E.length) == E) {
                return true
            } else {
                return false
            }
            return true
        },
        preloadImage: function (imageName, callback) {
            var imgLoad = function (url, callback) {
                var img = new Image();
                img.src = url;
                if (img.complete) {
                    callback(img.width, img.height);
                } else {
                    img.onload = function () {
                        callback(img.width, img.height);
                        img.onload = null;
                    };
                }
                ;
            };
            callback = callback || function () {
                };
            imgLoad(Config.wapcontext + "images/" + imageName, callback);
        },
        showInstantMessage: function (E) {
            $("#instantTipsBox").remove();
            var H = {content: "", duration: 2000};
            $.extend(H, E);
            var B = '<div id="instantTipsBox" style="max-width:300px;padding:10px;background-color:black;filter:alpha(opacity:70);opacity:0.7;border-radius:4px;-webkit-border-radius: 4px;-moz-border-radius: 4px;color:#fff;-webkit-box-shadow: 0 0 3px #ddd inset;text-align:left;position:fixed;z-index:999;word-break:break-all;word-wrap:break-word;">' + H.content + "</div>";
            +$("body").prepend(B);
            var G = document.documentElement.clientWidth;
            var D = document.documentElement.clientHeight;
            var F = $("#instantTipsBox").width();
            var C = $("#instantTipsBox").height();
            $("#instantTipsBox").css({top: (D - C) / 2 + "px", left: (G - F) / 2 + "px"});
            setTimeout(function () {
                $("#instantTipsBox").remove()
            }, H.duration)
        },
        confirm: function (D, F, C) {
            var E = {caption: "友情提示", description: "", okCaption: "确定", cancelCaption: "取消"};
            $.extend(E, D);
            var B = '<div id="confirm" class="confirm-layer-box"><div id="confirmLayer" class="confirm-layer"></div><div id="confirmBox" class="pr-miss" style="z-index:20;display:block;"><h4 id="confirmTip">' + E.caption + '</h4><p id="confirmContent">' + E.description + '</p><span id="confirmOk" class="qd">' + E.okCaption + '</span><span id="confirmNo" class="qx">' + E.cancelCaption + "</span></div></div>";
            $("#pagecontent").append(B);
            $("#confirm").show();
            $("#confirm").on("touchmove", function (G) {
                G.preventDefault();
                return false
            });
            $("#confirmOk").click(function () {
                $("#confirm").hide();
                $("#confirm").remove();
                if (typeof(F) == "function") {
                    F()
                }
            });
            $("#confirmNo").click(function () {
                $("#confirm").hide();
                $("#confirm").remove();
                if (typeof(C) == "function") {
                    C()
                }
            })
        },
        isContainStringNOCaseInsensitive: function (value1, value2) {
            if (!value1) return false;
            if (!value2) return false;
            if (value1.toUpperCase().indexOf(value2.toUpperCase()) >= 0)return true;
            return false;
        },
        formatFloat: function (f, digit) {
            var m = Math.pow(10, digit);
            return parseInt(f * m, 10) / m;
        },
        calculateSum: function () {
            var orderInfo = this.getOrderInfo();
            if (orderInfo == null) return {quantity: 0, price: 0};
            var foodObjectArray = orderInfo.items;
            var quantity = 0, totalPrice = 0,totalOriginalPrice = 0;
            for (var index = 0; index < foodObjectArray.length; index++) {
                var foodObject = foodObjectArray[index];
                quantity += parseInt(foodObject.quantity);
                totalPrice += foodObject.quantity * (foodObject.price * 100);
                totalOriginalPrice += foodObject.quantity * (foodObject.originalPrice * 100);
            }
            totalPrice = (parseFloat(totalPrice) / 100).toFixed(2);
            totalOriginalPrice = (parseFloat(totalOriginalPrice) / 100).toFixed(2);
            return {quantity: quantity, price: totalPrice,originalPrice:totalOriginalPrice};
        },
        geolocation: function (B) {
            var C = this;
            var D = false;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (F) {
                    if (C.utilities.isAliPayClient()) {
                        var E = {
                            lng: F.coords.longitude,
                            lat: F.coords.latitude
                        };
                        B && B(E)
                    } else {
                        require(["utils/wgs2mars.min"], function () {
                            if (transformFromWGSToGCJ) {
                                var G = transformFromWGSToGCJ(F.coords.longitude, F.coords.latitude);
                                if (G && G.lng && G.lat && C.utilities.floatRge.test(G.lng) && C.utilities.floatRge.test(G.lat)) {
                                    B && B(G);
                                    return
                                }
                            }
                            var G = {
                                lng: F.coords.longitude,
                                lat: F.coords.latitude
                            };
                            B && B(G)
                        })
                    }
                }, function (E) {
                    console.debug(" 获取GPS定位信息失败 ", E.code);
                    if (!D) {
                        B && B();
                        D = true
                    }
                }, {
                    enableHighAcuracy: false,
                    timeout: 5000,
                    maximumAge: 30000
                })
            } else {
                console.debug(" 你的浏览器不支持 geolocation ");
                B && B()
            }
        },
        utilities: {
            reCellphone: /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9])\d{8}$/,
            rePassword: /^[\da-zA-Z]{6,20}$/i,
            reNumber: /^\d{6}$/,
            floatRge: /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/
        },
        Route: {
            tags: ["storemenu", "storemenusearch", "ordertallyup", "ordersuccess", "orderdetail", "storelist","storeinfo","queuecertificate","mydines","storesearch"],
            historyKeys: [],
            historyOptions: {},
            historyRouteAttr: {},
            homeScope: null,
            currentPage: "",
            back: function (B) {
                if (this.historyKeys.length == 0) {
                    window.history.back();
                    return
                }
                var C = this.historyKeys.pop();
                window.pageChangeOption = this.historyOptions[C];
                if (B.pageChageOption) {
                    var D = B.pageChageOption(C);
                    if (D) {
                        window.pageChangeOption = D
                    }
                }
                can.route.attr(this.historyRouteAttr[C], true);
                delete this.historyOptions[C];
                delete this.historyRouteAttr[C]
            },
            route: function (B, E) {
                var D = can.route.attr();
                delete D.route;
                var G = this.getPageTagNameByRouteAttr(D);
                var C = this.getPageTagNameByRouteAttr(E);
                var F = this;
                if (!C)return;
                require(["appComponents/" + C], function (H) {
                    F.currentPage = G;
                    var J = B.pageOption ? B.pageOption() : {};
                    var I = B.pageChangeOption ? B.pageChangeOption(C) : false;
                    window.pageChangeOption = I ? I : undefined;
                    var K = $.inArray(G, F.historyKeys);
                    if (K >= 0) {
                        F.historyKeys.splice(K, 1)
                    }
                    F.historyKeys.push(G);
                    F.historyOptions[G] = J;
                    F.historyRouteAttr[G] = D;
                    if (typeof(E) === "string") {
                        can.route.attr({page: E}, true)
                    } else {
                        can.route.attr(E, true)
                    }
                }, function (I) {
                    var H = I.requireModules && I.requireModules[0];
                    requirejs.undef(H);
                    util.showInstantMessage({content: "获取组件" + C + "失败，请稍后再试...", duration: 5000});
                    util.Busy.stop()
                })
            },
            getPageTagNameByRouteAttr: function (B) {
                var C = Config.entryComponent;
                if (typeof(B) === "string") {
                    if ("" == B) {
                        B = Config.entryComponent
                    }
                    return B
                }
                if (B.page) {
                    C = B.page
                }
                if (B.func) {
                    C += B.func
                }
                if ($.inArray(C, this.tags) < 0) {
                    C = Config.entryComponent
                }
                return C
            }
        },
        Busy: {
            timer: null,
            start: function (D) {
                var E = {duration: 30000, content: "客官，请稍等……",};
                $.extend(E, D);
                var B = $(".overlay");
                if (B && B.length > 0) {
                    return
                }
                var C = '<div class="overlay"></div><div class="loadingBox"><div class="box-loading"><div class="pageLoading"></div><div class="context-loading">' + E.content + "</div></div></div>";
                $("body").append(C);
                if (E.content) {
                    $(".box-loading").css({"margin-left": "-90px", "width": "180px"})
                }
                $(".overlay").show(function () {
                    $(".overlay").on("touchmove", function (F) {
                        F.preventDefault();
                        return false
                    });
                    $(".loadingBox").on("touchmove", function (F) {
                        F.preventDefault();
                        return false
                    })
                });
                this.timer = setTimeout(function () {
                    $(".overlay").remove();
                    $(".loadingBox").remove()
                }, E.duration)
            }, stop: function () {
                this.timer && clearTimeout(this.timer);
                this.timer = null;
                $(".overlay").remove();
                $(".loadingBox").remove()
            }
        },
        lazyLoad: {
            lazy: function (options) {
                var defaults = {
                    img: "img[real_src]",
                    real_src: "real_src",
                    animate: "",
                    animate_delay: 500,
                    animate_time: 500,
                    time_out: 0
                };
                var options = $.extend(defaults, options);
                return $("img").each(function () {
                    var visibleHeight = 0;
                    if (window.innerHeight) {
                        visibleHeight = window.innerHeight
                    } else {
                        if ((document.body) && (document.body.clientHeight)) {
                            visibleHeight = document.body.clientHeight
                        }
                    }
                    foreach_img = function () {
                        $(options.img).each(function () {
                            var zepto$this = $(this);
                            var imageOffsetTop = $(this).offset().top;
                            var parentTop = $(window).scrollTop();
                            var actualVisibleHeight = visibleHeight;// var H = (visibleHeight) * 2;
                            //console.info("imageOffsetTop : " + imageOffsetTop + " --  parentTop:" + parentTop + " --  actualVisibleHeight : " + actualVisibleHeight);
                            if (imageOffsetTop <= actualVisibleHeight + parentTop) {
                                $(this).prop("src", $(this).attr(options.real_src));
                                //console.info("real_src : " + $(this).attr(options.real_src));
                                //if(!$(this).attr(options.real_src)) return true;
                                if($(this).attr(options.real_src)){
                                    switch (options.animate) {
                                        case"fadeIn":
                                            $(this).css({"opacity": "0"});
                                            setTimeout(function () {
                                                zepto$this.animate({"opacity": "1"}, options.animate_time);
                                            }, options.animate_delay);
                                            break;
                                        case"slideDown":
                                            $(this).css({
                                                "height": "0px",
                                                "background": "url('.')"
                                            }).delay(options.animate_delay).animate({"height": $(this).height() + "px"}, options.animate_time);
                                            break;
                                        default:
                                            break
                                    }
                                }
                                $(this).removeAttr(options.real_src);
                                return true
                            }
                            return false
                        })
                    };
                    setTimeout(function () {
                        foreach_img()
                    }, options.time_out)
                })
            }
        },
        LoadFile: {
            JSBasePath: Config.wapcontext + "javascripts/utils/",
            ComponentBasePath: Config.wapcontext + "javascripts/appComponents/",
            CssBasePath: Config.wapcontext + "stylesheets/",
            _hasLoadedFiles: {},
            loadJsFile: function (C, B) {
                if (!this._hasLoadedFiles[C]) {
                    var D = document.createElement("script");
                    D.setAttribute("type", "text/javascript");
                    var F = this.JSBasePath + C;
                    D.setAttribute("src", F);
                    if (B) {
                        if (typeof B == "function") {
                            var E = function () {
                                    if (this.readyState == "complete" || this.readyState == "loaded") {
                                        B()
                                    }
                                }
                                ;
                            D.onreadystatechange = E;
                            D.onload = B
                        } else {
                            if (typeof B == "string") {
                                D.setAttribute("onload", B + "()")
                            }
                        }
                    }
                    document.getElementsByTagName("head")[0].appendChild(D);
                    this._hasLoadedFiles[C] = D
                } else {
                    B()
                }
            },
            loadCssFile: function (C) {
                if (!this._hasLoadedFiles[C]) {
                    var B = document.createElement("link");
                    B.setAttribute("rel", "stylesheet");
                    B.setAttribute("type", "text/css");
                    B.setAttribute("href", this.CssBasePath + C);
                    document.getElementsByTagName("head")[0].appendChild(B);
                    this._hasLoadedFiles[C] = B
                }
            },
            loadAmapScript: function (B) {
                if (!this._hasLoadedFiles["amap"]) {
                    var C = document.createElement("script");
                    C.setAttribute("type", "text/javascript");
                    C.setAttribute("src", Config.amapJsPath + "&callback=" + B);
                    document.getElementsByTagName("head")[0].appendChild(C);
                    this._hasLoadedFiles["amap"] = C
                }
            }
        },
        StoreMap: {
            loadedAmap: false,
            open: function (E, C, B) {
                if (this.loadedAmap) {
                    var G = {
                        container: "iCenter"
                    };
                    $.extend(G, E);
                    $(".rest-list").hide();
                    this.LBSmap(G);
                    this.init(C);
                    util.Busy.stop()
                } else {
                    var D = this;
                    window.amapInit = function () {
                        D.loadedAmap = true;
                        delete window.amapInit
                    }
                    ;
                    util.LoadFile.loadAmapScript("amapInit");
                    var F = setInterval(function () {
                        if (D.loadedAmap) {
                            clearTimeout(F);
                            var H = {
                                container: "iCenter"
                            };
                            $.extend(H, E);
                            $(".rest-list").hide();
                            D.LBSmap(H);
                            D.init(C);
                            util.Busy.stop()
                        }
                    }, 100)
                }
            },
            LBSmap: function (B) {
                this.centerLng = B.longitude;
                this.centerLat = B.latitude;
                this.containerId = B.container;
                this.$container = $("#" + this.containerId);
                this.storeList = B.storeList;
                this.cityCode = B.cityCode;
                this.syncTime = B.syncTime;
                this.selectedIndex = B.selectedIndex;
                this.currentInfoWindow = null;
                this.infowidth = window.innerWidth - 20;
                this.mapObj = new AMap.Map(this.containerId, {
                    view: new AMap.View2D({
                        center: new AMap.LngLat(this.centerLng, this.centerLat),
                        zoom: 14
                    })
                });
                this.addStoreMarker = function (M, E, H) {
                    var C = E[M];
                    var J = C.lng;
                    var F = C.lat;
                    if (J == null || F == null) {
                        return
                    }
                    var G = can.view("appViews/store_mapbooking.mustache", {
                        store: C,
                        _index: M,
                        infowidth: "width:" + this.infowidth + "px;"
                    });
                    var I = document.createElement("div");
                    var O = document.createElement("img");
                    O.style.width = "36px";
                    O.src = Config.wapcontext + "image/location_marker.png";
                    I.appendChild(O);
                    var L = {
                        map: this.mapObj,
                        position: new AMap.LngLat(J, F),
                        topWhenClick: true,
                        topWhenMouseOver: true,
                        content: I
                    };
                    var D = new AMap.Marker(L);
                    var P = new AMap.InfoWindow({
                        isCustom: true,
                        content: G,
                        autoMove: false,
                        offset: new AMap.Pixel(8, -40),
                        closeWhenClickMap: true
                    });
                    var N = this;
                    var K = function () {
                            var Q = N.mapObj.getZoom();
                            var S = N.mapObj.lngLatToContainer(D.getPosition(), Q);
                            var R = N.mapObj.lngLatToContainer(N.mapObj.getCenter(), Q);
                            H.init_mapItem(M, E, P.getContent(), H, function (T) {
                                if (T) {
                                    N.mapObj.panBy(R.getX() - S.getX() - 8, R.getY() - S.getY() + 160)
                                } else {
                                    N.mapObj.panBy(R.getX() - S.getX() - 8, R.getY() - S.getY() + 20)
                                }
                            });
                            setTimeout(function () {
                                P.set("toBeClose", false);
                                P.open(N.mapObj, D.getPosition())
                            }, 700)
                        }
                        ;
                    AMap.event.addListener(D, "click", K)
                }
                    ,
                    this.init = function (C) {
                        var E = this;
                        this.$container.css("height", parseInt(window.innerHeight - $(".rest-menu").height() - $(".wrapper-head").height()) + "px");
                        this.$container.show();
                        var D = this.storeList;
                        this.mapObj.plugin("AMap.CloudDataLayer", function () {
                            E.myselfMarker(C);
                            for (var F = 0; F < D.length; F++) {
                                E.addStoreMarker(F, D, C)
                            }
                        });
                        $(".amap-logo").hide();
                        $(".amap-copyright").hide()
                    }
                    ,
                    this.clear = function () {
                        this.$container.hide();
                        this.mapObj.clearMap();
                        delete this.mapObj
                    }
                    ,
                    this.clearInfo = function () {
                        this.mapObj.clearInfoWindow()
                    }
                    ,
                    this.myselfMarker = function (C) {
                        if (C.onTable == "nearby") {
                            var G = this;
                            var H = C.longitude;
                            var F = C.latitude;
                            if (H == null || F == null) {
                                return
                            }
                            var D = {
                                map: G.mapObj,
                                icon: Config.wapcontext + "image/me.png",
                                position: new AMap.LngLat(H, F),
                                topWhenClick: true,
                                topWhenMouseOver: true
                            };
                            var E = new AMap.Marker(D)
                        }
                    }
            }
        },
        WX: {
            authorizePage: function (payPageUrl) {
                payPageUrl = window.location.origin + Config.wapcontext + payPageUrl;
                var authorizeUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + Config.WX.appId + "&redirect_uri=" + payPageUrl + "&response_type=code&scope=snsapi_base#wechat_redirect";
                window.location = authorizeUrl;
            }
        },
        Format: {
            token: /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
            timezone: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            timezoneClip: /[^-+\dA-Z]/g,
            pad: function (C, B) {
                C = String(C);
                B = B || 2;
                while (C.length < B) {
                    C = "0" + C
                }
                return C
            },
            dateFormater: function (E, S, P) {
                var R = this;
                if (arguments.length == 1 && Object.prototype.toString.call(E) == "[object String]" && !/\d/.test(E)) {
                    S = E;
                    E = undefined
                }
                E = E ? new Date(E) : new Date;
                if (isNaN(E)) {
                    throw SyntaxError("invalid date")
                }
                S = String(R.masks[S] || S || R.masks["default"]);
                if (S.slice(0, 4) == "UTC:") {
                    S = S.slice(4);
                    P = true
                }
                var F = P ? "getUTC" : "get", K = E[F + "Date"](), C = E[F + "Day"](), T = E[F + "Month"](), I = E[F + "FullYear"](), N = E[F + "Hours"](), G = E[F + "Minutes"](), Q = E[F + "Seconds"](), J = E[F + "Milliseconds"](), B = P ? 0 : E.getTimezoneOffset(), O = {
                    d: K,
                    dd: R.pad(K),
                    ddd: R.i18n.dayNames[C],
                    dddd: R.i18n.dayNames[C + 7],
                    m: T + 1,
                    mm: R.pad(T + 1),
                    mmm: R.i18n.monthNames[T],
                    mmmm: R.i18n.monthNames[T + 12],
                    yy: String(I).slice(2),
                    yyyy: I,
                    h: N % 12 || 12,
                    hh: R.pad(N % 12 || 12),
                    H: N,
                    HH: R.pad(N),
                    M: G,
                    MM: R.pad(G),
                    s: Q,
                    ss: R.pad(Q),
                    l: R.pad(J, 3),
                    L: R.pad(J > 99 ? Math.round(J / 10) : J),
                    t: N < 12 ? "a" : "p",
                    tt: N < 12 ? "am" : "pm",
                    T: N < 12 ? "A" : "P",
                    TT: N < 12 ? "AM" : "PM",
                    Z: P ? "UTC" : (String(E).match(R.timezone) || [""]).pop().replace(R.timezoneClip, ""),
                    o: (B > 0 ? "-" : "+") + R.pad(Math.floor(Math.abs(B) / 60) * 100 + Math.abs(B) % 60, 4),
                    S: ["th", "st", "nd", "rd"][K % 10 > 3 ? 0 : (K % 100 - K % 10 != 10) * K % 10]
                };
                return S.replace(R.token, function (D) {
                    return D in O ? O[D] : D.slice(1, D.length - 1)
                })
            },
            masks: {
                "default": "ddd mmm dd yyyy HH:MM:ss",
                shortDate: "m/d/yy",
                mediumDate: "mmm d, yyyy",
                longDate: "mmmm d, yyyy",
                fullDate: "dddd, mmmm d, yyyy",
                shortTime: "HH:MM",
                mediumTime: "h:MM:ss TT",
                longTime: "h:MM:ss TT Z",
                isoDate: "yyyy-mm-dd",
                isoTime: "HH:MM:ss",
                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                isoUtcDateTime: "yyyy-mm-dd'T'HH:MM:ss.lo",
                chineseDate: "yyyy年mm月dd日",
                DateTime: "yyyy-mm-dd HH:MM",
                chineseDatetime: "yyyy年mm月dd日 HH点MM分",
                chineseshortDate: "HH点MM分",
                DateTimeYMD: "yyyy/mm/dd",
                pointYMD: "yyyy.mm.dd",
                chineseDatetime2: "yyyy年mm月dd日 HH:MM",
                chineseDate3: "yyyy年mm月dd号 "
            },
            i18n: {
                dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
        }
    };
    window.Util = util;
    return util;
});
