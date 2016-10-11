/**
 * Created by team on 16/2/23.
 */

requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: Config.wapcontext + 'javascripts',
    //except, if the module ID starts with "app",
    //load it from the javascripts/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: './app',
        util: "./utils/util",
        model: "./utils/model",
        constant: "./utils/constant",
        banner: './modules/banner/banner'
    },
    waitSeconds: 0,
    urlArgs: "ver=20160912"
});

require(["util", "model"], function (util, Model) {

    // 保留一位有效数字
    Mustache.registerHelper("money", function (moneyValue) {
        var intValue = parseInt(moneyValue * 100);
        if (typeof moneyValue == "function") {
            intValue = parseInt(moneyValue() * 100);
        }
        return can.mustache.safeString((parseFloat(intValue) / 100).toFixed(1))
    });

    // 保留两位有效数字
    Mustache.registerHelper("money2", function (moneyValue) {
        var intValue = parseInt(moneyValue * 100);
        if (typeof moneyValue == "function") {
            intValue = parseInt(moneyValue() * 100);
        }
        return can.mustache.safeString((parseFloat(intValue) / 100).toFixed(2))
    });

    // 移除字符串两端的空格字符串
    Mustache.registerHelper("trim", function (stringValue) {

        var D = stringValue;
        if (typeof stringValue == "function") {
            D = stringValue()
        }
        if (!D)return "";
        return can.mustache.safeString(D.replace(/(^D(B|N)?)|P|N/, ""))
    });

    // 日期格式化 yyyy-mm-dd HH:MM
    Mustache.registerHelper("DateTime", function (E, C) {
        var D = E;
        if (typeof E == "function") {
            D = E()
        }
        return can.mustache.safeString(util.Format.dateFormater(D, util.Format.masks.DateTime))
    });

    //Mustache.parse(util.getView("storeMenu.mustache"));

    // 预先解析mustache
    /*can.view(util.getView("storeMenu.mustache"), null, function (a, b, c) {
        console.info("storeMenu.mustache success");
    });*/


    $(document).ready(function () {

        // 移除移动端浏览器上300ms的点击延迟 之所以有300ms的延迟是因为浏览器在等待判断是否为双击事件
        FastClick.attach(document.body);

        // 配置路由
        can.route.bindings.pushstate.root = Config.wapcontext;
        //can.route(":page");
        //can.route(":page/:func");
        //

        var controller = can.Control.extend({
            init: function () {
                var self = this;

                Config.preloadImageArray.forEach(function(path){
                    util.preloadImage(path);
                });
                util.removeLocalTempOrders();
                if (self._shouldParsePathNameToRoute()) {
                    self.parsePathNameToRoute();
                }
            },
            parsePathNameToRoute: function () {
                var pathname = window.location.pathname;
                var C = can.route.deparam(pathname.substring(Config.wapcontext.length));
                var componentName = util.Route.getPageTagNameByRouteAttr(C);
                require(["appComponents/" + componentName], function (F) {
                    var G = can.view.mustache("<" + componentName + "/>")({});
                    $("#pagecontent").html(G)
                })
            },
            _initLocalOrder: function () {
                var tableInfo = JSON.parse(localStorage.getItem("tableInfo"));
                // 如果表格为空且存在本地订单信息，说明在当前页面刷新，不需要初始化了
                if(tableInfo == null){
                    return;
                }
                if(tableInfo && tableInfo.ver == 1){
                    Config.entryComponent = "storegrid";
                }
                else{
                    Config.entryComponent = "storemenu";
                }
                var order = {};
                var res = tableInfo["cloudId"];
                var type = tableInfo["type"];
                var tableId = tableInfo["tableId"];
                var pay = tableInfo["pay"];
                console.info("还未授权 res=" + res + "  \r\n type = " + type + "  \r\n tableId = " + tableId);
                order.seatId = tableId;
                order.type = type;
                order.cloudId = res;
                order.cloudName = "";
                order.pay = pay == 1 ? true : false;
                order.totalPrice = 0;
                order.isComplete = false;
                order.imgPath = "http://www.bj-evetime.com/img/logo.png";
                order.openId = Config.debug ? "omJDOvqqVWhb_lnjKer4CAErrSAU" : '';
                order.payMethod = "3";
                order.items = [];
                order.total = 0;
                util.saveOrderInfo(order);
                // 保存成功后移除本地桌台信息
                localStorage.removeItem("tableInfo");
            },
            _shouldParsePathNameToRoute: function () {
                // 能进入该app.js的条件
                // 1、入口页面进入
                // 2、虚拟路径页面进入

                var pathname = window.location.pathname;
                var isCurrentPathShouldAuthorize = false;
                Config.authorizePathArray.forEach(function(path){
                    if((Config.wapcontext + path) == pathname){
                        isCurrentPathShouldAuthorize = true;
                        return false;
                    }
                });
                // 不需要授权获取code的页面直接返回
                if (!isCurrentPathShouldAuthorize) {
                    return true;
                }

                // 初始化订单信息
                this._initLocalOrder();

                var code = util.getQueryStringValue("code");
                if (!code) return true;

                // 授权页面地址 http://www.bj-evetime.com/wx/index.html
                var authorizePageUrl = window.location.href;
                console.info("授权成功Code = " + code + " openId页面授权地址authorizePageUrl=" + authorizePageUrl);
                Model.WX.payConfig({currentUrl: authorizePageUrl, code: code}, function (configObject) {
                    var orderInfo = util.getOrderInfo();
                    orderInfo.openId = configObject["openId"];
                    orderInfo.phoneNumber = configObject["phone"];
                    wx.config({
                        debug: false,
                        appId: configObject["appId"],
                        timestamp: parseInt(configObject.timeStamp),//configObject.timeStamp
                        nonceStr: configObject.nonceStr,
                        signature: configObject.signature,
                        jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo',
                            'onMenuShareQZone'
                        ]
                    });
                    wx.ready(function () {
                        var shareData = {
                            title: '美食公众平台',
                            desc: '每时科技，用科技提供美食',
                            link: 'http://www.bj-evetime.com/',
                            imgUrl: 'http://www.bj-evetime.com/images/logo.png',
                            trigger: function (res) {
                                console.info('用户点击发送给朋友');
                            },
                            success: function (res) {
                                console.info('已分享');
                            },
                            cancel: function (res) {
                                console.info('已取消');
                            },
                            fail: function (res) {
                                console.info(JSON.stringify(res));
                            }
                        };
                        wx.onMenuShareAppMessage(shareData);
                        wx.onMenuShareTimeline(shareData);
                        wx.onMenuShareQQ(shareData);
                        wx.onMenuShareQZone(shareData);
                        wx.onMenuShareWeibo(shareData);
                    });
                    console.info("获取到的页面openId=" + orderInfo.openId);
                    util.saveOrderInfo(orderInfo);
                });
                return true;
            },
            _loadPage: function (routeAttr) {
                var componentName = util.Route.getPageTagNameByRouteAttr(routeAttr);
                require(["appComponents/" + componentName, "util"], function (component, util) {
                    var html = can.view.mustache("<" + componentName + "/>")({});
                    $("#pagecontent").html(html);
                    util.Busy.start();
                });
            },
            "route": function (routeAttr) {
                this._loadPage(routeAttr);
            },
            ":page route": function (routeAttr) {
                this._loadPage(routeAttr);
            },
            ":page/:func route": function (routeAttr) {
                this._loadPage(routeAttr);
            }
        });
        new controller();

        can.route.ready();
    });
});



